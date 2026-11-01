/**
 * Erzeugt VERIFIKATION.md: alle Quellen mit status 'unverified' – als Prüfliste vor öffentlicher Verwendung.
 *   npm run verifikation
 */
import { readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Claim, DialogNode, Source, Topic } from '../src/content/schema.ts';

const root = join(import.meta.dirname, '..');
const td = join(root, 'src/content/topics');
const rows: string[] = [];
const spot: string[] = [];
let n = 0;
let m = 0;
const MODERN = new Set(['gegner', 'fachliteratur', 'wissenschaft', 'sonstiges']);

function fmt(s: Source) {
  return [s.author, s.work, s.ref, s.year && `(${s.year})`].filter(Boolean).join(' ');
}

async function main() {
  for (const c of readdirSync(td).sort())
    for (const t of readdirSync(join(td, c)).sort()) {
      const f = join(td, c, t, 'index.ts');
      if (!existsSync(f)) continue;
      const topic: Topic = (await import(pathToFileURL(f).href)).default;
      for (const claim of topic.claims) {
        const found: { s: Source; where: string }[] = [];
        const add = (list: Source[] | undefined, where: string) =>
          list?.forEach((s) => {
            if (s.status === 'unverified') found.push({ s, where });
            else if (s.status === 'verbatim' && MODERN.has(s.kind) && s.quote && !s.url) {
              m++;
              spot.push(`- [ ] ${fmt(s)} – \`${c}/${t}/${claim.id}.ts\` (${where})`);
            }
          });
        const scan = (cl: Claim) => {
          add(cl.biblical?.sources, 'Bibel');
          add(cl.church?.sources, 'Kirche');
          add(cl.opposingView?.sources, 'Gegenseite');
          cl.argument?.premises.forEach((p, i) => add(p.sources, `Prämisse ${i + 1}`));
          cl.voices?.forEach((v) => add(v.sources, `Konzil: ${v.person}`));
          const walk = (ns?: DialogNode[]) => ns?.forEach((d) => { add(d.sources, `Dialog: ${d.id}`); d.voices?.forEach((v) => add(v.sources, `Dialog ${d.id}: ${v.person}`)); walk(d.followUps); });
          walk(cl.dialog);
          add(cl.furtherReading, 'Literatur');
        };
        scan(claim);
        if (!found.length) continue;
        rows.push(`\n### ${topic.title} › ${claim.title.replace(/[„"“]/g, '')}\n\`${c}/${t}/${claim.id}.ts\`\n`);
        for (const { s, where } of found) {
          n++;
          rows.push(`- [ ] **${fmt(s)}** – ${where}${s.quote ? `\n  > ${s.quote.replace(/\n/g, ' ').slice(0, 300)}` : ''}${s.note ? `\n  *Hinweis:* ${s.note.replace(/\n/g, ' ')}` : ''}`);
        }
      }
    }
  const uniqSpot = [...new Set(spot)];
  const md = `# Prüfliste: Quellen mit Status „zu prüfen"\n\nAutomatisch erzeugt mit \`npm run verifikation\`. ${n} Quellen, deren Wortlaut oder Fundstelle vor öffentlicher Verwendung an der Originalquelle geprüft werden sollte. Nach erfolgreicher Prüfung den \`status\` in der jeweiligen Datei auf \`'verbatim'\` oder \`'paraphrase'\` setzen und die Liste neu erzeugen.\n${rows.join('\n')}\n\n---\n\n## Stichprobe: wörtliche Zitate moderner Autoren ohne Link (${uniqSpot.length})\n\nDiese Zitate sind als „wörtlich" markiert, haben aber keine URL. Viele sind sehr bekannt und gut belegt; einige wurden aus Fachwissen übernommen. Vor öffentlicher Verwendung stichprobenartig am Original prüfen.\n\n${uniqSpot.join('\n')}\n`;
  writeFileSync(join(root, 'VERIFIKATION.md'), md);
  console.log(`VERIFIKATION.md geschrieben (${n} Einträge).`);
}
main();
