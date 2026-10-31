import MiniSearch, { type SearchResult } from 'minisearch';
import { useMemo } from 'react';
import { plain } from './utils';
import type { KB } from './content';

export type DocType = 'node' | 'claim' | 'topic' | 'person';

export interface SearchDoc {
  id: string;
  type: DocType;
  title: string;
  text: string;
  by?: string;
  extra?: string;
  // gespeicherte Felder für die Anzeige
  href: string;
  context: string;
  snippet: string;
  category?: string;
}

const STOP = new Set(
  'der die das den dem des ein eine einer eines einem einen und oder aber doch ist sind war waren wird werden wurde nicht kein keine ich du er sie es wir ihr mit von zu im in am an auf aus bei für fur über uber unter nach vor als wie auch nur noch schon so dass daß was wer wenn weil man sich sein seine ihre ihr hat haben hatte gibt mehr sehr dann denn the of and to a is that it'.split(
    ' ',
  ),
);

/** Kleinschreibung, ohne diakritische Zeichen (ä → a, ß → ss). */
export function fold(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/ß/g, 'ss')
    .replace(/[ʿʾ'’`]/g, '');
}

export function normalize(term: string): string | null {
  const t = fold(term);
  if (t.length < 2 || STOP.has(t)) return null;
  return t;
}

export function buildIndex(kb: KB): MiniSearch<SearchDoc> {
  const ms = new MiniSearch<SearchDoc>({
    fields: ['title', 'text', 'by', 'extra'],
    storeFields: ['type', 'title', 'href', 'context', 'snippet', 'by', 'category'],
    processTerm: (term) => normalize(term),
    searchOptions: {
      boost: { title: 4, by: 2, extra: 1.5 },
      fuzzy: 0.18,
      prefix: true,
      combineWith: 'AND',
    },
  });
  const docs: SearchDoc[] = [];

  for (const t of kb.topics) {
    docs.push({
      id: `t:${t.id}`,
      type: 'topic',
      title: t.title,
      text: plain(t.subtitle + ' ' + t.overview),
      extra: t.group,
      href: `/thema/${t.id}`,
      context: t.group,
      snippet: plain(t.subtitle, 140),
      category: t.category,
    });
  }

  for (const { topic, claim, ref } of kb.claims) {
    docs.push({
      id: `c:${ref}`,
      type: 'claim',
      title: plain(claim.title),
      text: plain([claim.quickAnswer, claim.steelman, ...(claim.keyPoints ?? [])].join(' ')),
      extra: [topic.title, ...(claim.tags ?? []), ...claim.proponents.map((p) => p.name)].join(' '),
      href: `/thema/${topic.id}/${claim.id}`,
      context: topic.title,
      snippet: plain(claim.quickAnswer, 160),
      category: topic.category,
    });
  }

  for (const { topic, claim, node } of kb.nodes) {
    docs.push({
      id: `n:${topic.id}/${claim.id}/${node.id}`,
      type: 'node',
      title: plain(node.objection),
      text: plain(node.answer),
      by: node.objectionBy,
      extra: plain(claim.title),
      href: `/thema/${topic.id}/${claim.id}?tab=debatte&knoten=${node.id}`,
      context: plain(claim.title, 90),
      snippet: plain(node.answer, 160),
      category: topic.category,
    });
  }

  for (const p of kb.people) {
    if (!kb.contributions.has(p.id)) continue;
    docs.push({
      id: `p:${p.id}`,
      type: 'person',
      title: p.name,
      text: plain(p.bio),
      extra: [p.title, ...p.fields].join(' '),
      href: `/konzil/${p.id}`,
      context: p.title,
      snippet: plain(p.title, 120),
    });
  }

  ms.addAll(docs);
  return ms;
}

let cached: { kb: KB; index: MiniSearch<SearchDoc> } | null = null;

export function useSearchIndex(kb: KB) {
  return useMemo(() => {
    if (cached?.kb !== kb) cached = { kb, index: buildIndex(kb) };
    return cached.index;
  }, [kb]);
}

export type Hit = SearchResult & Pick<SearchDoc, 'type' | 'title' | 'href' | 'context' | 'snippet' | 'by' | 'category'>;

export function runSearch(index: MiniSearch<SearchDoc>, q: string, opts?: { types?: DocType[]; limit?: number }): Hit[] {
  const query = q.trim();
  if (query.length < 2) return [];
  let hits = index.search(query) as Hit[];
  if (!hits.length) hits = index.search(query, { combineWith: 'OR' }) as Hit[];
  if (opts?.types) hits = hits.filter((h) => opts.types!.includes(h.type));
  return hits.slice(0, opts?.limit ?? 50);
}
