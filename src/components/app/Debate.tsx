import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowDown, Check, ChevronDown, CircleHelp, CornerUpLeft, GitBranch, ListTree, MessageCircleQuestion, RotateCcw, Sparkles, Target, UserRound,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Claim, DialogNode } from '@/content/schema';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { countNodes, findPath, useKB } from '@/lib/content';
import { cn, plain } from '@/lib/utils';
import { CopticCross } from './Logo';
import { Md } from './Md';
import { AvatarStack, VoiceCard } from './People';
import { SourceChips, SourceList } from './Sources';

/* ------------------------------------------------------------------ */
/*  Sprechblasen                                                       */
/* ------------------------------------------------------------------ */

function OpponentBubble({ text, by, premise, onAlternatives, altCount }: { text: string; by?: string; premise?: number; onAlternatives?: () => void; altCount?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex max-w-[92%] gap-2.5 sm:max-w-[80%]">
      <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-opponent text-muted-foreground">
        <UserRound className="size-4" />
      </span>
      <div className="min-w-0">
        <div className="mb-1 flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
          <span>{by ? by : 'Dein Gegenüber'}</span>
          {premise ? (
            <Badge variant="warning" className="py-0">
              <Target /> greift Prämisse {premise} an
            </Badge>
          ) : null}
        </div>
        <div className="rounded-2xl rounded-tl-md bg-opponent px-4 py-3 text-[15px] leading-relaxed text-opponent-foreground">
          <Md size="sm" className="prose-p:my-1 text-opponent-foreground">
            {text}
          </Md>
        </div>
        {onAlternatives && altCount && altCount > 1 ? (
          <button onClick={onAlternatives} className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-primary">
            <GitBranch className="size-3" /> {altCount - 1} andere{altCount - 1 === 1 ? 'r' : ''} mögliche{altCount - 1 === 1 ? 'r' : ''} Einwand
            {altCount - 1 === 1 ? '' : 'e'} an dieser Stelle
          </button>
        ) : null}
      </div>
    </motion.div>
  );
}

function AnswerBubble({ node, intro }: { node?: DialogNode; intro?: { text: string } }) {
  const [open, setOpen] = useState(false);
  const voiceIds = node?.voices?.map((v) => v.person) ?? [];
  const hasMore = !!(node?.detail || node?.voices?.length || node?.sources?.length);
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="ml-auto flex w-full max-w-[96%] flex-row-reverse gap-2.5 sm:max-w-[86%]">
      <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#8f2635] to-[#5c1520] text-[#efcf7f]">
        <CopticCross className="size-4" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center justify-end gap-2 text-[11px] font-medium text-muted-foreground">
          {voiceIds.length > 0 && <AvatarStack ids={voiceIds} max={5} />}
          <span>{intro ? 'Deine 30-Sekunden-Antwort' : 'Antwort des Konzils'}</span>
        </div>
        <div className="rounded-2xl rounded-tr-md border border-primary/15 bg-primary-soft/60 px-4 py-3 dark:bg-primary-soft/40">
          <Md size="sm" className="prose-p:my-1 text-[15px]">
            {intro ? intro.text : node!.answer}
          </Md>
          {node?.questionsBack?.length ? (
            <div className="mt-3 rounded-xl bg-card/70 p-3">
              <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gold">
                <MessageCircleQuestion className="size-3.5" /> Frag zurück
              </div>
              <ul className="space-y-1 text-[14px]">
                {node.questionsBack.map((q, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-gold">›</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {hasMore && (
            <button onClick={() => setOpen((o) => !o)} className="mt-2 inline-flex items-center gap-1 text-[12.5px] font-medium text-primary hover:underline">
              <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
              {open ? 'Weniger anzeigen' : 'Ausführliche Begründung, Stimmen & Belege'}
            </button>
          )}
        </div>
        <AnimatePresence initial={false}>
          {open && node && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="mt-2 space-y-3">
                {node.detail && (
                  <div className="rounded-xl border bg-card p-4">
                    <Md size="sm">{node.detail}</Md>
                  </div>
                )}
                {node.voices?.map((v, i) => <VoiceCard key={i} voice={v} compact />)}
                {node.sources?.length ? <SourceList sources={node.sources} compact /> : null}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!open && node?.sources?.length ? (
          <div className="mt-1.5 flex justify-end">
            <SourceChips sources={node.sources.slice(0, 4)} />
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Debatten-Simulator                                                 */
/* ------------------------------------------------------------------ */

export function DebateSimulator({ claim, initialNodeId }: { claim: Claim; initialNodeId?: string | null }) {
  const [path, setPath] = useState<DialogNode[]>(() => (initialNodeId ? findPath(claim.dialog, initialNodeId) ?? [] : []));
  const [visited, setVisited] = useState<Set<string>>(() => new Set(path.map((n) => n.id)));
  const [view, setView] = useState<'chat' | 'tree'>('chat');
  const endRef = useRef<HTMLDivElement>(null);
  const total = useMemo(() => countNodes(claim.dialog), [claim]);
  const lastPath = useRef(path);

  useEffect(() => {
    if (initialNodeId) {
      const p = findPath(claim.dialog, initialNodeId) ?? [];
      setPath(p);
      setVisited((v) => new Set([...v, ...p.map((n) => n.id)]));
    }
  }, [initialNodeId, claim]);

  useEffect(() => {
    if (path === lastPath.current) return;
    lastPath.current = path;
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [path]);

  const options = path.length ? path[path.length - 1].followUps ?? [] : claim.dialog;
  const choose = (n: DialogNode) => {
    setPath((p) => [...p, n]);
    setVisited((v) => new Set(v).add(n.id));
  };
  // Tastatur: 1–9 wählt einen Einwand, ← / Backspace geht einen Zug zurück
  useEffect(() => {
    if (view !== 'chat') return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = parseInt(e.key, 10);
      if (k >= 1 && k <= options.length) {
        e.preventDefault();
        choose(options[k - 1]);
      } else if ((e.key === 'ArrowLeft' || e.key === 'Backspace') && path.length) {
        e.preventDefault();
        setPath((p) => p.slice(0, -1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const siblingsAt = (i: number) => (i === 0 ? claim.dialog : path[i - 1].followUps ?? []);
  const jumpTo = (id: string) => {
    const p = findPath(claim.dialog, id) ?? [];
    setPath(p);
    setVisited((v) => new Set([...v, ...p.map((n) => n.id)]));
    setView('chat');
  };

  return (
    <div>
      {/* Steuerleiste */}
      <div className="sticky top-14 z-10 -mx-4 mb-4 flex items-center gap-2 border-b bg-background/85 px-4 py-2 backdrop-blur md:top-16 lg:mx-0 lg:rounded-xl lg:border lg:px-3">
        <div className="flex rounded-lg bg-muted p-0.5">
          <button onClick={() => setView('chat')} className={cn('inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium', view === 'chat' ? 'bg-card shadow-sm' : 'text-muted-foreground')}>
            <Sparkles className="size-3.5" /> Simulation
          </button>
          <button onClick={() => setView('tree')} className={cn('inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium', view === 'tree' ? 'bg-card shadow-sm' : 'text-muted-foreground')}>
            <ListTree className="size-3.5" /> Gesprächsbaum
          </button>
        </div>
        <span className="hidden text-xs text-muted-foreground sm:inline">
          {visited.size} von {total} Gesprächszügen erkundet
        </span>
        <div className="ml-auto flex gap-1">
          {view === 'chat' && path.length > 0 && (
            <>
              <Button variant="ghost" size="sm" onClick={() => setPath((p) => p.slice(0, -1))}>
                <CornerUpLeft /> <span className="hidden sm:inline">Zurück</span>
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setPath([])}>
                <RotateCcw /> <span className="hidden sm:inline">Neu</span>
              </Button>
            </>
          )}
        </div>
      </div>

      {view === 'tree' ? (
        <DialogTree nodes={claim.dialog} visited={visited} onSelect={jumpTo} />
      ) : (
        <div className="space-y-5">
          <OpponentBubble text={claim.title} by={claim.proponents?.[0] ? `Eröffnung – z. B. ${claim.proponents[0].name}` : 'Eröffnung'} />
          <AnswerBubble intro={{ text: claim.quickAnswer }} />
          {path.map((n, i) => (
            <div key={n.id + i} className="space-y-5">
              <OpponentBubble
                text={n.objection}
                by={n.objectionBy}
                premise={n.targetsPremise}
                altCount={siblingsAt(i).length}
                onAlternatives={() => setPath((p) => p.slice(0, i))}
              />
              <AnswerBubble node={n} />
            </div>
          ))}

          <div ref={endRef} className="scroll-mt-32 pt-2">
            {options.length > 0 ? (
              <div className="rounded-2xl border border-dashed bg-card/60 p-4">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <ArrowDown className="size-4 text-primary" />
                  {path.length ? 'Was sagt dein Gegenüber als Nächstes?' : 'Womit kontert dein Gegenüber?'}
                </div>
                <div className="grid gap-2">
                  {options.map((o, oi) => {
                    const sub = countNodes(o.followUps);
                    return (
                      <button
                        key={o.id}
                        onClick={() => choose(o)}
                        className="group flex items-start gap-3 rounded-xl border bg-card p-3 text-left transition hover:border-primary/40 hover:bg-primary-soft/30 active:scale-[0.99]"
                      >
                        <span className={cn('mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border text-[10px]', visited.has(o.id) ? 'border-success bg-success-soft text-success' : 'text-muted-foreground')}>
                          {visited.has(o.id) ? <Check className="size-3" /> : <CircleHelp className="size-3" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="line-clamp-3 text-[14.5px] leading-snug">„{plain(o.objection)}"</span>
                          <span className="mt-1 flex flex-wrap items-center gap-x-2 text-[11.5px] text-muted-foreground">
                            {oi < 9 && <kbd className="hidden rounded border bg-muted px-1 font-sans text-[10px] lg:inline">{oi + 1}</kbd>}
                            {o.objectionBy && <span>{o.objectionBy}</span>}
                            {o.targetsPremise ? <span>· Prämisse {o.targetsPremise}</span> : null}
                            {sub > 0 && <span>· {sub} weitere Züge</span>}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border bg-success-soft/50 p-4 text-center">
                <div className="mx-auto mb-1 grid size-9 place-items-center rounded-full bg-success-soft text-success">
                  <Check className="size-5" />
                </div>
                <p className="text-sm font-semibold">Dieser Gesprächsstrang ist ausgeschöpft.</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Probiere einen anderen Einwand aus, um alle Züge zu kennen.</p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPath((p) => p.slice(0, -1))}>
                    <CornerUpLeft /> Anderer Einwand an dieser Stelle
                  </Button>
                  <Button variant="soft" size="sm" onClick={() => setPath([])}>
                    <RotateCcw /> Von vorn
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gesprächsbaum (Übersicht)                                          */
/* ------------------------------------------------------------------ */

export function DialogTree({ nodes, visited, onSelect, depth = 0 }: { nodes: DialogNode[]; visited?: Set<string>; onSelect: (id: string) => void; depth?: number }) {
  return (
    <ul className={cn('space-y-2', depth > 0 && 'mt-2 border-l-2 border-dashed border-border pl-3 sm:pl-4')}>
      {nodes.map((n) => (
        <li key={n.id}>
          <TreeNode node={n} visited={visited} onSelect={onSelect} depth={depth} />
        </li>
      ))}
    </ul>
  );
}

function TreeNode({ node, visited, onSelect, depth }: { node: DialogNode; visited?: Set<string>; onSelect: (id: string) => void; depth: number }) {
  const [open, setOpen] = useState(depth < 1);
  const kids = node.followUps?.length ?? 0;
  return (
    <div>
      <div className="rounded-xl border bg-card p-3">
        <div className="flex items-start gap-2">
          {kids > 0 ? (
            <button onClick={() => setOpen((o) => !o)} className="mt-0.5 rounded p-0.5 text-muted-foreground hover:bg-muted" aria-label="Aufklappen">
              <ChevronDown className={cn('size-4 transition-transform', !open && '-rotate-90')} />
            </button>
          ) : (
            <span className="mt-1 size-4 shrink-0">{visited?.has(node.id) && <Check className="size-4 text-success" />}</span>
          )}
          <button onClick={() => onSelect(node.id)} className="min-w-0 flex-1 text-left">
            <span className="block text-[14px] font-medium leading-snug hover:text-primary">„{plain(node.objection, 220)}"</span>
            <span className="mt-1 block text-[13px] leading-snug text-muted-foreground">→ {plain(node.answer, 200)}</span>
            <span className="mt-1 flex flex-wrap gap-x-2 text-[11px] text-muted-foreground">
              {node.objectionBy && <span>{node.objectionBy}</span>}
              {node.targetsPremise ? <span>· Prämisse {node.targetsPremise}</span> : null}
              {kids > 0 && <span>· {countNodes(node.followUps)} Folgezüge</span>}
            </span>
          </button>
        </div>
      </div>
      {open && kids > 0 && <DialogTree nodes={node.followUps!} visited={visited} onSelect={onSelect} depth={depth + 1} />}
    </div>
  );
}

/** Kleiner Hook für Komponenten, die die Personen aller Knoten brauchen. */
export function useDialogVoices(claim: Claim) {
  const kb = useKB();
  return useMemo(() => {
    const ids = new Set<string>();
    claim.voices?.forEach((v) => ids.add(v.person));
    const walk = (ns?: DialogNode[]) => ns?.forEach((n) => (n.voices?.forEach((v) => ids.add(v.person)), walk(n.followUps)));
    walk(claim.dialog);
    return [...ids].filter((id) => kb.personById.has(id));
  }, [claim, kb]);
}
