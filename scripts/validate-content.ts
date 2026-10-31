/**
 * Validiert die Wissensdatenbank.
 *
 *   npm run validate                       – alles prüfen
 *   npm run validate -- --only religionen/islam-dilemma   – nur bestimmte Topic-Ordner (mehrfach möglich)
 *   npm run stats                          – Statistik ausgeben
 */
import { readdirSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Claim, DialogNode, Person, Source, Topic, Voice } from '../src/content/schema.ts';
import { categories } from '../src/content/categories.ts';
import { people as basePeople } from '../src/content/people.ts';

const root = join(import.meta.dirname, '..');
const topicsDir = join(root, 'src/content/topics');
const args = process.argv.slice(2);
const only: string[] = [];
for (let i = 0; i < args.length; i++) if (args[i] === '--only' && args[i + 1]) only.push(args[++i].replace(/\/$/, ''));
const showStats = args.includes('--stats');

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`✗ ${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`⚠ ${where}: ${msg}`);

const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const sourceKinds = new Set(['bibel', 'koran', 'hadith', 'juedisch', 'oestlich', 'kirchenvater', 'koptisch', 'liturgie', 'konzil', 'wissenschaft', 'fachliteratur', 'gegner', 'sonstiges']);
const statuses = new Set(['verbatim', 'paraphrase', 'unverified']);

function findTopicFiles(): string[] {
  const out: string[] = [];
  if (!existsSync(topicsDir)) return out;
  for (const cat of readdirSync(topicsDir, { withFileTypes: true })) {
    if (!cat.isDirectory()) continue;
    for (const t of readdirSync(join(topicsDir, cat.name), { withFileTypes: true })) {
      if (!t.isDirectory()) continue;
      const idx = join(topicsDir, cat.name, t.name, 'index.ts');
      const rel = `${cat.name}/${t.name}`;
      if (only.length && !only.includes(rel)) continue;
      if (existsSync(idx)) out.push(idx);
      else warn(rel, 'Ordner ohne index.ts');
    }
  }
  return out;
}

const stats = {
  topics: 0,
  claims: 0,
  dialogNodes: 0,
  voices: 0,
  sources: 0,
  byStatus: { verbatim: 0, paraphrase: 0, unverified: 0 } as Record<string, number>,
  byCategory: {} as Record<string, { topics: number; claims: number; nodes: number }>,
  maxDepth: 0,
  personUse: {} as Record<string, number>,
};

function checkSource(s: Source, where: string) {
  stats.sources++;
  if (!s || typeof s !== 'object') return err(where, 'Quelle ist kein Objekt');
  if (!sourceKinds.has(s.kind)) err(where, `ungültiger source.kind "${s.kind}"`);
  if (!statuses.has(s.status)) err(where, `ungültiger source.status "${s.status}"`);
  else stats.byStatus[s.status]++;
  if (!s.work?.trim()) err(where, 'source.work fehlt');
}

function checkSources(list: Source[] | undefined, where: string) {
  list?.forEach((s, i) => checkSource(s, `${where} › Quelle ${i + 1}`));
}

let personIds = new Set<string>();

function checkVoice(v: Voice, where: string) {
  stats.voices++;
  if (!personIds.has(v.person)) err(where, `unbekannte Person "${v.person}" (in people.ts oder newPeople eintragen)`);
  stats.personUse[v.person] = (stats.personUse[v.person] ?? 0) + 1;
  if (!v.text?.trim()) err(where, `Stimme "${v.person}" ohne Text`);
  checkSources(v.sources, `${where} › ${v.person}`);
}

function checkDialog(nodes: DialogNode[], where: string, depth: number, ids: Set<string>): number {
  let maxD = depth;
  for (const n of nodes) {
    stats.dialogNodes++;
    const w = `${where} › ${n.id ?? '?'}`;
    if (!n.id || !kebab.test(n.id)) err(w, `ungültige Dialog-ID "${n.id}"`);
    if (ids.has(n.id)) err(w, `doppelte Dialog-ID "${n.id}"`);
    ids.add(n.id);
    if (!n.objection?.trim()) err(w, 'objection fehlt');
    if (!n.answer?.trim()) err(w, 'answer fehlt');
    n.voices?.forEach((v) => checkVoice(v, w));
    checkSources(n.sources, w);
    if (n.followUps?.length) maxD = Math.max(maxD, checkDialog(n.followUps, w, depth + 1, ids));
  }
  return maxD;
}

function checkClaim(c: Claim, where: string) {
  const w = `${where} › ${c.id ?? '?'}`;
  if (!c.id || !kebab.test(c.id)) err(w, `ungültige Claim-ID "${c.id}"`);
  for (const f of ['title', 'steelman', 'quickAnswer'] as const) if (!c[f]?.trim()) err(w, `${f} fehlt`);
  if (!c.biblical?.summary?.trim()) err(w, 'biblical.summary fehlt');
  checkSources(c.biblical?.sources, `${w} › biblical`);
  if (c.church) checkSources(c.church.sources, `${w} › church`);
  if (c.opposingView) checkSources(c.opposingView.sources, `${w} › opposingView`);
  if (!c.keyPoints?.length) err(w, 'keyPoints leer');
  if (![1, 2, 3].includes(c.difficulty)) err(w, 'difficulty muss 1, 2 oder 3 sein');
  if (!c.proponents?.length) warn(w, 'keine proponents');
  if ((c.voices?.length ?? 0) < 2) warn(w, `nur ${c.voices?.length ?? 0} Stimme(n) im Konzil (empfohlen ≥ 3)`);
  c.voices?.forEach((v) => checkVoice(v, `${w} › voices`));
  c.argument?.premises.forEach((p, i) => checkSources(p.sources, `${w} › Prämisse ${i + 1}`));
  checkSources(c.furtherReading, `${w} › furtherReading`);
  if ((c.dialog?.length ?? 0) < 2) warn(w, `nur ${c.dialog?.length ?? 0} Dialog-Einstiege (empfohlen ≥ 3)`);
  const depth = checkDialog(c.dialog ?? [], `${w} › dialog`, 1, new Set());
  if (depth < 2) warn(w, `Dialogbaum nur ${depth} Ebene(n) tief (empfohlen ≥ 2)`);
  stats.maxDepth = Math.max(stats.maxDepth, depth);
}

async function main() {
  const files = findTopicFiles();
  const topics: { topic: Topic; file: string }[] = [];
  for (const f of files) {
    try {
      const mod = await import(pathToFileURL(f).href);
      const topic: Topic = mod.default;
      if (!topic?.id) err(relative(root, f), 'kein default-Export eines Topics');
      else topics.push({ topic, file: f });
    } catch (e) {
      err(relative(root, f), `Import fehlgeschlagen: ${(e as Error).message}`);
    }
  }

  // Personen zusammenführen
  const allPeople = new Map<string, Person>();
  basePeople.forEach((p) => {
    if (allPeople.has(p.id)) err('people.ts', `doppelte Personen-ID "${p.id}"`);
    allPeople.set(p.id, p);
  });
  // Für Personenprüfung auch newPeople aus NICHT gefilterten Topics berücksichtigen
  const allTopicFiles = only.length ? (() => { const o = only.splice(0); const r = findTopicFiles(); only.push(...o); return r; })() : files;
  for (const f of allTopicFiles) {
    try {
      const mod = await import(pathToFileURL(f).href);
      (mod.default as Topic)?.newPeople?.forEach((p) => {
        if (!p.id || !kebab.test(p.id)) err(relative(root, f), `ungültige Personen-ID "${p.id}"`);
        if (!allPeople.has(p.id)) allPeople.set(p.id, p);
      });
    } catch { /* bereits gemeldet */ }
  }
  personIds = new Set(allPeople.keys());

  const topicIds = new Set<string>();
  for (const { topic: t, file } of topics) {
    const where = relative(topicsDir, file).replace(/\/index\.ts$/, '');
    stats.topics++;
    if (!kebab.test(t.id)) err(where, `ungültige Topic-ID "${t.id}"`);
    if (topicIds.has(t.id)) err(where, `doppelte Topic-ID "${t.id}"`);
    topicIds.add(t.id);
    const cat = categories.find((c) => c.id === t.category);
    if (!cat) err(where, `unbekannte Kategorie "${t.category}"`);
    else if (!cat.groups.includes(t.group)) err(where, `Gruppe "${t.group}" existiert nicht in Kategorie "${cat.id}" (erlaubt: ${cat.groups.join(', ')})`);
    if (!where.startsWith(t.category + '/')) warn(where, `liegt nicht im Ordner der Kategorie "${t.category}"`);
    if (where.split('/')[1] !== t.id) warn(where, `Ordnername ≠ Topic-ID "${t.id}"`);
    for (const f of ['title', 'subtitle', 'overview', 'strategy', 'icon'] as const) if (!t[f]?.trim()) err(where, `${f} fehlt`);
    const claimIds = new Set<string>();
    const cs = (stats.byCategory[t.category] ??= { topics: 0, claims: 0, nodes: 0 });
    cs.topics++;
    for (const c of t.claims ?? []) {
      if (!c) { err(where, 'undefinierter Claim (Import vergessen?)'); continue; }
      if (claimIds.has(c.id)) err(where, `doppelte Claim-ID "${c.id}"`);
      claimIds.add(c.id);
      stats.claims++;
      cs.claims++;
      const before = stats.dialogNodes;
      checkClaim(c, where);
      cs.nodes += stats.dialogNodes - before;
    }
    if (!t.claims?.length) warn(where, 'Topic ohne Claims');
  }

  if (warnings.length) console.log(warnings.join('\n'));
  if (errors.length) console.log(errors.join('\n'));

  if (showStats || !errors.length) {
    console.log('\n──────── Wissensdatenbank ────────');
    console.log(`Themenblöcke: ${stats.topics} · Claims: ${stats.claims} · Dialogknoten: ${stats.dialogNodes} · Stimmen: ${stats.voices} · Quellen: ${stats.sources}`);
    console.log(`Zitierstatus: wörtlich ${stats.byStatus.verbatim} · sinngemäß ${stats.byStatus.paraphrase} · zu prüfen ${stats.byStatus.unverified}`);
    console.log(`Maximale Dialogtiefe: ${stats.maxDepth}`);
    for (const [c, s] of Object.entries(stats.byCategory)) console.log(`  ${c.padEnd(22)} ${String(s.topics).padStart(3)} Topics  ${String(s.claims).padStart(4)} Claims  ${String(s.nodes).padStart(5)} Knoten`);
    if (showStats) {
      const top = Object.entries(stats.personUse).sort((a, b) => b[1] - a[1]).slice(0, 25);
      console.log('Meistzitierte Verteidiger: ' + top.map(([p, n]) => `${p} (${n})`).join(', '));
    }
  }
  console.log(errors.length ? `\n${errors.length} Fehler, ${warnings.length} Warnungen` : `\n✓ OK (${warnings.length} Warnungen)`);
  process.exit(errors.length ? 1 : 0);
}

main();
