import type MiniSearch from 'minisearch';
import { useEffect, useMemo, useState } from 'react';
import type { KB } from './content';
import { createIndex, docsOf, runSearch, type Hit, type SearchDoc, type SearchOpts } from './search-core';
import type { FromWorker, ToWorker } from './search.worker';

export { fold, normalize, type DocType, type Hit, type SearchOpts } from './search-core';

/*
 * Suchdienst: Der Index wird bevorzugt in einem Web Worker aufgebaut und abgefragt.
 * Der Hauptthread erzeugt nur die Dokumente – in kleinen Zeitscheiben, damit Scrollen,
 * Tippen und Navigieren jederzeit flüssig bleiben. Ohne Worker-Unterstützung wird der
 * Index zeitscheibenweise im Hauptthread aufgebaut.
 */

const SLICE_MS = 8;

function yieldToMain(): Promise<void> {
  const sched = (globalThis as { scheduler?: { yield?: () => Promise<void> } }).scheduler;
  if (sched?.yield) return sched.yield();
  return new Promise((r) => setTimeout(r, 0));
}

interface Engine {
  search(q: string, opts?: SearchOpts): Promise<Hit[]>;
}

function workerEngine(kb: KB): Promise<Engine> {
  return new Promise<Engine>((resolve, reject) => {
    const worker = new Worker(new URL('./search.worker.ts', import.meta.url), { type: 'module', name: 'suche' });
    const send = (m: ToWorker) => worker.postMessage(m);
    const waiting = new Map<number, (h: Hit[]) => void>();
    let seq = 0;
    const engine: Engine = {
      search: (q, opts) =>
        new Promise((res) => {
          const id = ++seq;
          waiting.set(id, res);
          send({ type: 'search', id, q, opts });
        }),
    };
    worker.onmessage = (e: MessageEvent<FromWorker>) => {
      const m = e.data;
      if (m.type === 'ready') resolve(engine);
      else if (m.type === 'result') {
        waiting.get(m.id)?.(m.hits);
        waiting.delete(m.id);
      }
    };
    worker.onerror = (e) => {
      worker.terminate();
      reject(e);
    };
    // Dokumente stückweise erzeugen und übergeben.
    (async () => {
      let batch: SearchDoc[] = [];
      let deadline = performance.now() + SLICE_MS;
      for (const doc of docsOf(kb)) {
        batch.push(doc);
        if (performance.now() > deadline) {
          send({ type: 'add', docs: batch });
          batch = [];
          await yieldToMain();
          deadline = performance.now() + SLICE_MS;
        }
      }
      if (batch.length) send({ type: 'add', docs: batch });
      send({ type: 'done' });
    })().catch(reject);
  });
}

async function mainThreadEngine(kb: KB): Promise<Engine> {
  const ms: MiniSearch<SearchDoc> = createIndex();
  let deadline = 0;
  for (const doc of docsOf(kb)) {
    if (performance.now() > deadline) {
      await yieldToMain();
      deadline = performance.now() + SLICE_MS;
    }
    ms.add(doc);
  }
  return { search: async (q, opts) => runSearch(ms, q, opts) };
}

let cached: { kb: KB; promise: Promise<Engine>; ready: boolean } | null = null;

/** Startet (einmalig) den Aufbau des Suchindex für diese Wissensdatenbank. */
export function loadSearch(kb: KB): Promise<Engine> {
  if (cached?.kb === kb) return cached.promise;
  const entry = { kb, ready: false } as NonNullable<typeof cached>;
  const start = typeof Worker === 'function' ? workerEngine(kb).catch(() => mainThreadEngine(kb)) : mainThreadEngine(kb);
  entry.promise = start.then((e) => {
    entry.ready = true;
    return e;
  });
  cached = entry;
  return entry.promise;
}

/** Index vorab im Leerlauf aufbauen, sobald die Seite fertig gezeichnet ist. */
export function prewarmSearchIndex(kb: KB) {
  if (cached?.kb === kb) return;
  const ric = (globalThis as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
  const start = () => void loadSearch(kb);
  if (ric) ric(start, { timeout: 2500 });
  else setTimeout(start, 1000);
}

/**
 * Live-Suche als Hook. Der Index wird erst aufgebaut, wenn `enabled` wahr ist
 * (oder er wurde bereits vorgewärmt). Liefert die Treffer, ob der Index bereit ist
 * und ob für die aktuelle Eingabe noch ein Ergebnis aussteht.
 */
export function useSearch(kb: KB | null | undefined, q: string, opts?: SearchOpts & { enabled?: boolean }) {
  const enabled = opts?.enabled ?? true;
  const optsKey = JSON.stringify({ t: opts?.types, l: opts?.limit });
  const [engine, setEngine] = useState<Engine | null>(null);
  const [result, setResult] = useState<{ q: string; hits: Hit[] }>({ q: '', hits: [] });
  const query = q.trim();

  useEffect(() => {
    if (!kb || !enabled) return;
    let alive = true;
    loadSearch(kb).then((e) => alive && setEngine(() => e));
    return () => {
      alive = false;
    };
  }, [kb, enabled]);

  useEffect(() => {
    if (!engine || query.length < 2) return;
    let alive = true;
    const { t, l } = JSON.parse(optsKey) as { t?: SearchOpts['types']; l?: number };
    engine.search(query, { types: t, limit: l }).then((hits) => alive && setResult({ q: query, hits }));
    return () => {
      alive = false;
    };
  }, [engine, query, optsKey]);

  return useMemo(() => {
    const active = query.length >= 2;
    return {
      ready: !!engine,
      hits: active ? result.hits : [],
      pending: active && result.q !== query,
    };
  }, [engine, query, result]);
}
