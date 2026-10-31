import { ArrowRight, Swords, Target } from 'lucide-react';
import type { Claim, DialogNode } from '@/content/schema';
import { Badge } from '@/components/ui/badge';
import { cn, plain } from '@/lib/utils';
import { Md } from './Md';
import { SourceChips } from './Sources';

function attacksOn(nodes: DialogNode[], premise: number, out: DialogNode[] = []) {
  nodes.forEach((n) => {
    if (n.targetsPremise === premise) out.push(n);
    if (n.followUps) attacksOn(n.followUps, premise, out);
  });
  return out;
}

export function ArgumentView({ claim, onJump }: { claim: Claim; onJump: (nodeId: string) => void }) {
  const a = claim.argument;
  if (!a) return null;
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-serif text-xl font-semibold">{a.name}</h3>
        {a.summary && <p className="mt-1 text-sm text-muted-foreground">{a.summary}</p>}
      </div>
      <ol className="space-y-3">
        {a.premises.map((p, i) => {
          const attacks = attacksOn(claim.dialog, i + 1);
          return (
            <li key={i} className="rounded-xl border bg-card p-4">
              <div className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary-soft text-sm font-bold text-primary">P{i + 1}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-snug">{p.text.replace(/^P\d+\s*[:.]\s*/, '')}</p>
                  <Md size="sm" className="mt-2 text-muted-foreground">
                    {p.support}
                  </Md>
                  {p.sources?.length ? (
                    <div className="mt-2">
                      <SourceChips sources={p.sources} />
                    </div>
                  ) : null}
                  {attacks.length > 0 && (
                    <details className="mt-3">
                      <summary className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-semibold text-warning">
                        <Target className="size-3.5" /> {attacks.length} Angriff{attacks.length > 1 ? 'e' : ''} auf diese Prämisse – alle beantwortet
                      </summary>
                      <ul className="mt-2 space-y-1.5">
                        {attacks.map((n) => (
                          <li key={n.id}>
                            <button onClick={() => onJump(n.id)} className="flex w-full items-start gap-2 rounded-lg bg-muted/60 p-2 text-left text-[13px] hover:bg-muted">
                              <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-primary" />
                              <span>„{plain(n.objection, 160)}"</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
      {a.inferences?.length ? (
        <ul className="space-y-1.5 rounded-xl bg-muted/50 p-4 text-sm">
          {a.inferences.map((inf, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gold">∴</span>
              <span>{inf}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {a.horns?.length ? (
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
            <Swords className="size-4 text-primary" /> Das Dilemma
          </div>
          <div className={cn('grid gap-3', a.horns.length > 1 && 'sm:grid-cols-2')}>
            {a.horns.map((h, i) => (
              <div key={i} className="rounded-xl border-2 border-primary/20 bg-primary-soft/40 p-4">
                <Badge className="mb-2">{h.label}</Badge>
                <Md size="sm">{h.text}</Md>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="rounded-xl bg-gradient-to-br from-[#8f2635] to-[#5c1520] p-5 text-white shadow-md">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-[#efcf7f]">Schlussfolgerung</div>
        <p className="mt-1.5 font-serif text-lg leading-snug">{a.conclusion}</p>
      </div>
    </div>
  );
}
