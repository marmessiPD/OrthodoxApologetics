/*
 * Web Worker für die Volltextsuche: Index-Aufbau und Suche laufen hier,
 * damit der Hauptthread (Oberfläche) nie blockiert wird.
 */
import { createIndex, runSearch, type SearchDoc, type SearchOpts } from './search-core';

export type ToWorker =
  | { type: 'add'; docs: SearchDoc[] }
  | { type: 'done' }
  | { type: 'search'; id: number; q: string; opts?: SearchOpts };

export type FromWorker = { type: 'ready'; count: number } | { type: 'result'; id: number; hits: ReturnType<typeof runSearch> };

const ms = createIndex();
let ready = false;
const queued: Extract<ToWorker, { type: 'search' }>[] = [];
const post = (m: FromWorker) => (self as unknown as { postMessage(m: FromWorker): void }).postMessage(m);

self.onmessage = (e: MessageEvent<ToWorker>) => {
  const m = e.data;
  if (m.type === 'add') {
    ms.addAll(m.docs);
  } else if (m.type === 'done') {
    ready = true;
    post({ type: 'ready', count: ms.documentCount });
    for (const s of queued.splice(0)) post({ type: 'result', id: s.id, hits: runSearch(ms, s.q, s.opts) });
  } else if (m.type === 'search') {
    if (!ready) queued.push(m);
    else post({ type: 'result', id: m.id, hits: runSearch(ms, m.q, m.opts) });
  }
};
