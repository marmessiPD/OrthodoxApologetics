import { Command } from 'cmdk';
import { BookOpen, CornerDownLeft, MessagesSquare, Search as SearchIcon, ShieldQuestion, UserRound } from 'lucide-react';
import { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Kbd } from '@/components/ui/misc';
import { useKB } from '@/lib/content';
import { runSearch, useSearchIndex, type Hit } from '@/lib/search';
import { cn } from '@/lib/utils';

/* globaler Öffnen-Zustand */
let state = { open: false, q: '' };
const subs = new Set<() => void>();
export function openSearch(q = '') {
  state = { open: true, q };
  subs.forEach((s) => s());
}
function closeSearch() {
  state = { ...state, open: false };
  subs.forEach((s) => s());
}
function useSearchState() {
  return useSyncExternalStore(
    (cb) => (subs.add(cb), () => subs.delete(cb)),
    () => state,
  );
}

export const typeMeta: Record<Hit['type'], { label: string; icon: typeof BookOpen }> = {
  node: { label: 'Einwände & Antworten im Gespräch', icon: MessagesSquare },
  claim: { label: 'Behauptungen', icon: ShieldQuestion },
  topic: { label: 'Themenblöcke', icon: BookOpen },
  person: { label: 'Konzil der Verteidiger', icon: UserRound },
};

export function SearchCommand() {
  const { open, q: initial } = useSearchState();
  const [q, setQ] = useState('');
  const kb = useKB();
  const index = useSearchIndex(kb);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) setQ(initial);
  }, [open, initial]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      const typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const hits = useMemo(() => runSearch(index, q, { limit: 60 }), [index, q]);
  const groups = useMemo(() => {
    const order: Hit['type'][] = ['claim', 'node', 'topic', 'person'];
    return order.map((t) => ({ type: t, items: hits.filter((h) => h.type === t).slice(0, t === 'node' ? 12 : 6) })).filter((g) => g.items.length);
  }, [hits]);

  const go = (href: string) => {
    closeSearch();
    navigate(href);
  };

  return (
    <Dialog open={open} onOpenChange={(o) => (o ? openSearch(q) : closeSearch())}>
      <DialogContent hideClose className="overflow-hidden p-0 sm:max-w-2xl">
        <DialogTitle className="sr-only">Suche</DialogTitle>
        <Command shouldFilter={false} loop className="flex max-h-[75vh] flex-col">
          <div className="flex items-center gap-2 border-b px-4">
            <SearchIcon className="size-5 shrink-0 text-muted-foreground" />
            <Command.Input
              value={q}
              onValueChange={setQ}
              autoFocus
              placeholder="Was hat dein Gegenüber gesagt? Thema, Einwand, Person …"
              className="h-14 w-full bg-transparent text-[16px] outline-none placeholder:text-muted-foreground"
            />
            <Kbd className="hidden sm:inline-flex">Esc</Kbd>
          </div>
          <Command.List className="overflow-y-auto overscroll-contain p-2">
            {q.trim().length < 2 ? (
              <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Live-Suche für das Gespräch</p>
                <p className="mt-1">Tippe ein paar Stichworte des Einwands – z. B. „Bibel verfälscht", „Urknall Nichts", „Paraklet", „Junk DNA".</p>
              </div>
            ) : (
              <>
                <Command.Empty className="px-3 py-8 text-center text-sm text-muted-foreground">Keine Treffer für „{q}".</Command.Empty>
                {groups.map((g) => {
                  const Icon = typeMeta[g.type].icon;
                  return (
                    <Command.Group
                      key={g.type}
                      heading={typeMeta[g.type].label}
                      className="mb-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-muted-foreground"
                    >
                      {g.items.map((h) => (
                        <Command.Item
                          key={h.id}
                          value={String(h.id)}
                          onSelect={() => go(h.href)}
                          className="group flex cursor-pointer items-start gap-3 rounded-lg px-2.5 py-2.5 data-[selected=true]:bg-primary-soft/60"
                        >
                          <Icon className={cn('mt-0.5 size-4 shrink-0', g.type === 'node' ? 'text-primary' : 'text-muted-foreground')} />
                          <div className="min-w-0 flex-1">
                            <div className="line-clamp-2 text-[14px] font-medium leading-snug">{g.type === 'node' ? `„${h.title}"` : h.title}</div>
                            <div className="mt-0.5 line-clamp-1 text-[12px] text-muted-foreground">
                              {h.by ? `${h.by} · ` : ''}
                              {h.context}
                            </div>
                          </div>
                          <CornerDownLeft className="mt-1 hidden size-3.5 text-muted-foreground group-data-[selected=true]:block" />
                        </Command.Item>
                      ))}
                    </Command.Group>
                  );
                })}
              </>
            )}
          </Command.List>
          <div className="hidden items-center gap-3 border-t px-4 py-2 text-[11px] text-muted-foreground sm:flex">
            <span className="flex items-center gap-1"><Kbd>↑</Kbd><Kbd>↓</Kbd> wählen</span>
            <span className="flex items-center gap-1"><Kbd>↵</Kbd> öffnen</span>
            <span className="ml-auto">{kb.stats.nodes.toLocaleString('de-DE')} Gesprächszüge durchsuchbar</span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
