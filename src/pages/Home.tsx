import { ArrowRight, History, MessagesSquare, Search, ShieldQuestion, Sparkles, Zap } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Difficulty, SectionTitle } from '@/components/app/Bits';
import { LogoMark } from '@/components/app/Logo';
import { openSearch } from '@/components/app/Search';
import { useKB } from '@/lib/content';
import { DynIcon } from '@/lib/icons';
import { runSearch, useSearchIndex } from '@/lib/search';
import { useRecent } from '@/lib/storage';
import { cn, plain } from '@/lib/utils';

const FEATURED = [
  'islam-dilemma/das-islamische-dilemma',
  'auferstehung/halluzinationen',
  'ursprung-des-lebens/ool-nur-wissensluecke',
  'atheismus/keine-beweise-fuer-gott',
  'kosmologie/universum-aus-dem-nichts',
  'theodizee/logisches-problem-des-uebels',
  'neues-testament/evangelien-widersprechen-sich',
  'christologie-chalcedon/kopten-sind-monophysiten',
];

function LiveSearch() {
  const kb = useKB();
  const index = useSearchIndex(kb);
  const [q, setQ] = useState('');
  const hits = useMemo(() => runSearch(index, q, { types: ['node', 'claim'], limit: 6 }), [index, q]);
  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-2xl border bg-card px-4 shadow-sm ring-primary/10 focus-within:border-primary/40 focus-within:ring-4">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && q.trim() && openSearch(q)}
          placeholder="Was hat dein Gegenüber gerade gesagt?"
          className="h-14 w-full bg-transparent text-[16px] outline-none placeholder:text-muted-foreground"
          aria-label="Live-Suche"
        />
      </div>
      {q.trim().length >= 2 && (
        <Card className="absolute inset-x-0 top-[calc(100%+6px)] z-10 overflow-hidden p-1.5 shadow-xl">
          {hits.length === 0 ? (
            <p className="px-3 py-4 text-sm text-muted-foreground">Keine Treffer – versuche andere Stichworte.</p>
          ) : (
            hits.map((h) => (
              <Link key={h.id} to={h.href} className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-muted">
                {h.type === 'node' ? <MessagesSquare className="mt-0.5 size-4 shrink-0 text-primary" /> : <ShieldQuestion className="mt-0.5 size-4 shrink-0 text-muted-foreground" />}
                <span className="min-w-0">
                  <span className="line-clamp-2 text-[14px] font-medium leading-snug">{h.type === 'node' ? `„${h.title}"` : h.title}</span>
                  <span className="line-clamp-1 text-[12px] text-muted-foreground">{h.snippet}</span>
                </span>
              </Link>
            ))
          )}
          <button onClick={() => openSearch(q)} className="w-full rounded-lg px-3 py-2 text-left text-[13px] font-medium text-primary hover:bg-muted">
            Alle Ergebnisse anzeigen →
          </button>
        </Card>
      )}
    </div>
  );
}

export default function Home() {
  const kb = useKB();
  const { recent } = useRecent();
  const featured = FEATURED.map((r) => kb.claimByRef.get(r)).filter(Boolean);
  const recents = recent.map((r) => kb.claimByRef.get(r)).filter(Boolean).slice(0, 4);
  const fallbackFeatured = featured.length >= 4 ? featured : [...featured, ...kb.claims.filter((c) => c.nodeCount >= 12 && !featured.includes(c)).slice(0, 6 - featured.length)];

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border bg-card">
        <div className="coptic-pattern absolute inset-0 opacity-60" />
        <div className="absolute -right-16 -top-16 size-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative px-5 py-8 sm:px-10 sm:py-12">
          <div className="flex items-center gap-3">
            <LogoMark className="size-11 rounded-2xl" />
            <Badge variant="gold" className="text-[11px]">
              Koptisch-orthodox
            </Badge>
          </div>
          <h1 className="mt-5 max-w-2xl font-serif text-[32px] font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Bereit zur Antwort – <span className="text-primary">auf jedes Argument.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted-foreground">
            {kb.stats.claims.toLocaleString('de-DE')} Behauptungen der Gegenseite, {kb.stats.nodes.toLocaleString('de-DE')} vorausgedachte Gesprächszüge und die Stimmen von{' '}
            {kb.stats.people} Verteidigern des Glaubens – vom Apostel Paulus über Athanasius bis James Tour.
          </p>
          <div className="mt-6 max-w-2xl">
            <LiveSearch />
            <p className="mt-2 flex items-center gap-1.5 text-[12px] text-muted-foreground">
              <Zap className="size-3.5 text-gold" /> Live-Modus: Stichworte tippen und sofort die passende Antwort im Gesprächsverlauf finden.
            </p>
          </div>
        </div>
      </section>

      {/* Schnellstart */}
      {fallbackFeatured.length > 0 && (
        <section>
          <SectionTitle icon={Sparkles}>Schnellstart – die häufigsten Debatten</SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {fallbackFeatured.slice(0, 6).map((c) => {
              const cat = kb.categories.find((x) => x.id === c!.topic.category)!;
              return (
                <Link key={c!.ref} to={`/thema/${c!.ref}`} className={cn('group rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md', cat.accent)}>
                  <div className="flex items-center gap-2 text-[11px] font-medium text-muted-foreground">
                    <DynIcon name={c!.topic.icon} className="size-3.5 text-cat" />
                    {c!.topic.title}
                  </div>
                  <p className="mt-2 font-serif text-[17px] font-semibold leading-snug group-hover:text-primary">{plain(c!.claim.title)}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <Difficulty level={c!.claim.difficulty} />
                    <span className="text-[11px] text-muted-foreground">{c!.nodeCount} Gesprächszüge</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Zuletzt */}
      {recents.length > 0 && (
        <section>
          <SectionTitle icon={History}>Zuletzt angesehen</SectionTitle>
          <div className="flex flex-col divide-y rounded-xl border bg-card">
            {recents.map((c) => (
              <Link key={c!.ref} to={`/thema/${c!.ref}`} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50">
                <DynIcon name={c!.topic.icon} className="size-4 shrink-0 text-muted-foreground" />
                <span className="flex-1 truncate text-sm font-medium">{plain(c!.claim.title)}</span>
                <ArrowRight className="size-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Kategorien */}
      <section>
        <SectionTitle>Alle Themenfelder</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {kb.categories.map((c) => {
            const s = kb.stats.byCategory[c.id];
            return (
              <Link key={c.id} to={`/kategorie/${c.id}`} className={cn('group flex flex-col rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md', c.accent)}>
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cat-soft">
                    <DynIcon name={c.icon} className="size-5 text-cat" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-semibold leading-snug group-hover:text-primary">{c.title}</div>
                    <div className="mt-0.5 text-[12.5px] leading-snug text-muted-foreground">{c.subtitle}</div>
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4 text-[11.5px] text-muted-foreground">
                  <span>{s?.topics ?? 0} Themenblöcke</span>
                  <span>·</span>
                  <span>{s?.claims ?? 0} Behauptungen</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Leitvers */}
      <section className="rounded-2xl border border-gold/30 bg-gold-soft/50 p-6 text-center">
        <p className="mx-auto max-w-2xl font-serif text-lg leading-relaxed sm:text-xl">
          „Seid aber allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht."
        </p>
        <p className="mt-2 text-xs font-medium uppercase tracking-widest text-gold">1. Petrus 3,15 · Luther 1912</p>
      </section>
    </div>
  );
}
