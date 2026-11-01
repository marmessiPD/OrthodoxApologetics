/**
 * Tiefenbericht: Knotenzahl, Tiefe und Einstiege je Claim.
 *   npm run depth                          – Übersicht aller Topics
 *   npm run depth -- religionen/islam-koran – Details für bestimmte Topics
 * Ziel (CONTENT_GUIDE §10): ≥ 15 Knoten, ≥ 4 Ebenen, ≥ 4 Einstiegs-Einwände.
 */
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { DialogNode, Topic } from '../src/content/schema.ts';

const root = join(import.meta.dirname, '..');
const td = join(root, 'src/content/topics');
const only = process.argv.slice(2).filter((a) => !a.startsWith('-')).map((t) => t.replace(/\/$/, ''));
const count = (ns?: DialogNode[]): number => (ns ?? []).reduce((n, d) => n + 1 + count(d.followUps), 0);
const depth = (ns?: DialogNode[], d = 1): number => (ns?.length ? Math.max(...ns.map((n) => depth(n.followUps, d + 1))) : d - 1);

async function main() {
  let ok = 0, below = 0;
  for (const c of readdirSync(td).sort())
    for (const t of readdirSync(join(td, c)).sort()) {
      const rel = `${c}/${t}`;
      if (only.length && !only.includes(rel)) continue;
      const f = join(td, c, t, 'index.ts');
      if (!existsSync(f)) continue;
      const topic: Topic = (await import(pathToFileURL(f).href)).default;
      const lines: string[] = [];
      for (const cl of topic.claims) {
        const n = count(cl.dialog), d = depth(cl.dialog), e = cl.dialog.length;
        const good = n >= 15 && d >= 4 && e >= 4;
        good ? ok++ : below++;
        if (only.length || !good) lines.push(`  ${good ? '✓' : '·'} ${cl.id.padEnd(46)} ${String(n).padStart(3)} Knoten  Tiefe ${d}  Einstiege ${e}`);
      }
      if (lines.length) console.log(rel + '\n' + lines.join('\n'));
    }
  console.log(`\nZiel erreicht: ${ok} · noch zu vertiefen: ${below}`);
}
main();
