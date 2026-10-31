import { use } from 'react';
import type { Category, CategoryId, Claim, DialogNode, Person, Source, Topic, Voice } from '@/content/schema';
import { categories } from '@/content/categories';
import { people as basePeople } from '@/content/people';

/* ------------------------------------------------------------------ */
/*  Laden aller Themenblöcke (jeder Themenblock ist ein eigener Chunk)  */
/* ------------------------------------------------------------------ */

const loaders = import.meta.glob<{ default: Topic }>('../content/topics/*/*/index.ts');

export interface ClaimRef {
  topic: Topic;
  claim: Claim;
  ref: string; // "topicId/claimId"
  nodeCount: number;
}

export interface NodeRef {
  topic: Topic;
  claim: Claim;
  node: DialogNode;
  depth: number;
}

export interface Contribution {
  topic: Topic;
  claim: Claim;
  nodeId?: string;
  context: string; // Überschrift (Claim-Titel oder Einwand)
  voice: Voice;
}

export interface KB {
  topics: Topic[];
  categories: Category[];
  people: Person[];
  personById: Map<string, Person>;
  topicById: Map<string, Topic>;
  claims: ClaimRef[];
  claimByRef: Map<string, ClaimRef>;
  nodes: NodeRef[];
  contributions: Map<string, Contribution[]>;
  stats: {
    topics: number;
    claims: number;
    nodes: number;
    voices: number;
    sources: number;
    people: number;
    byCategory: Record<string, { topics: number; claims: number; nodes: number }>;
  };
}

export function countNodes(nodes: DialogNode[] | undefined): number {
  if (!nodes) return 0;
  return nodes.reduce((n, d) => n + 1 + countNodes(d.followUps), 0);
}

export function maxDepth(nodes: DialogNode[] | undefined, d = 1): number {
  if (!nodes?.length) return d - 1;
  return Math.max(...nodes.map((n) => maxDepth(n.followUps, d + 1)));
}

/** Pfad (Liste von Knoten) von der Wurzel zu einem Knoten. */
export function findPath(nodes: DialogNode[], id: string): DialogNode[] | null {
  for (const n of nodes) {
    if (n.id === id) return [n];
    const sub = n.followUps ? findPath(n.followUps, id) : null;
    if (sub) return [n, ...sub];
  }
  return null;
}

/** Alle Quellen eines Claims (dedupliziert). */
export function collectSources(claim: Claim): { source: Source; where: string }[] {
  const out: { source: Source; where: string }[] = [];
  const seen = new Set<string>();
  const add = (list: Source[] | undefined, where: string) =>
    list?.forEach((s) => {
      const key = [s.kind, s.author, s.work, s.ref, s.quote?.slice(0, 40)].join('|');
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ source: s, where });
    });
  add(claim.biblical?.sources, 'Bibel');
  add(claim.church?.sources, 'Kirche');
  add(claim.opposingView?.sources, 'Gegenseite');
  claim.argument?.premises.forEach((p, i) => add(p.sources, `Prämisse ${i + 1}`));
  claim.voices?.forEach((v) => add(v.sources, 'Konzil'));
  const walk = (nodes: DialogNode[] | undefined) =>
    nodes?.forEach((n) => {
      add(n.sources, 'Debatte');
      n.voices?.forEach((v) => add(v.sources, 'Debatte'));
      walk(n.followUps);
    });
  walk(claim.dialog);
  add(claim.furtherReading, 'Weiterlesen');
  return out;
}

function catIndex(id: CategoryId) {
  return categories.findIndex((c) => c.id === id);
}

async function loadKB(): Promise<KB> {
  const mods = await Promise.all(Object.values(loaders).map((l) => l().catch(() => null)));
  const topics = mods
    .map((m) => m?.default)
    .filter((t): t is Topic => !!t && !!t.id && Array.isArray(t.claims))
    .map((t) => ({ ...t, claims: t.claims.filter(Boolean) }));

  topics.sort((a, b) => {
    const ca = catIndex(a.category) - catIndex(b.category);
    if (ca) return ca;
    const cat = categories.find((c) => c.id === a.category)!;
    const ga = cat.groups.indexOf(a.group) - cat.groups.indexOf(b.group);
    if (ga) return ga;
    return (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title, 'de');
  });

  const personById = new Map<string, Person>();
  basePeople.forEach((p) => personById.set(p.id, p));
  topics.forEach((t) => t.newPeople?.forEach((p) => !personById.has(p.id) && personById.set(p.id, p)));

  const topicById = new Map(topics.map((t) => [t.id, t]));
  const claims: ClaimRef[] = [];
  const claimByRef = new Map<string, ClaimRef>();
  const nodes: NodeRef[] = [];
  const contributions = new Map<string, Contribution[]>();
  const stats: KB['stats'] = { topics: topics.length, claims: 0, nodes: 0, voices: 0, sources: 0, people: 0, byCategory: {} };

  const contrib = (c: Contribution) => {
    stats.voices++;
    const list = contributions.get(c.voice.person) ?? [];
    list.push(c);
    contributions.set(c.voice.person, list);
  };

  for (const topic of topics) {
    const cs = (stats.byCategory[topic.category] ??= { topics: 0, claims: 0, nodes: 0 });
    cs.topics++;
    for (const claim of topic.claims) {
      const ref = `${topic.id}/${claim.id}`;
      const nodeCount = countNodes(claim.dialog);
      const cr: ClaimRef = { topic, claim, ref, nodeCount };
      claims.push(cr);
      claimByRef.set(ref, cr);
      stats.claims++;
      stats.nodes += nodeCount;
      stats.sources += collectSources(claim).length;
      cs.claims++;
      cs.nodes += nodeCount;
      claim.voices?.forEach((voice) => contrib({ topic, claim, context: claim.title, voice }));
      const walk = (list: DialogNode[] | undefined, depth: number) =>
        list?.forEach((node) => {
          nodes.push({ topic, claim, node, depth });
          node.voices?.forEach((voice) => contrib({ topic, claim, nodeId: node.id, context: node.objection, voice }));
          walk(node.followUps, depth + 1);
        });
      walk(claim.dialog, 1);
    }
  }

  const people = [...personById.values()];
  stats.people = [...contributions.keys()].filter((id) => personById.has(id)).length;

  return { topics, categories, people, personById, topicById, claims, claimByRef, nodes, contributions, stats };
}

let kbPromise: Promise<KB> | null = null;
export function getKB() {
  return (kbPromise ??= loadKB());
}

/** Suspense-Hook: liefert die geladene Wissensdatenbank. */
export function useKB(): KB {
  return use(getKB());
}
