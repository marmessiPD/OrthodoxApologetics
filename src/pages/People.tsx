import { ArrowRight, BookOpen, ChevronRight, Info, Search, Users } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { PageHeader, SectionTitle } from '@/components/app/Bits';
import { Md } from '@/components/app/Md';
import { PersonAvatar, TraditionBadge } from '@/components/app/People';
import type { Era } from '@/content/schema';
import { useKB } from '@/lib/content';
import { eraLabel, eraOrder } from '@/lib/labels';
import { fold } from '@/lib/search';
import { cn, plain } from '@/lib/utils';
import NotFound from './NotFound';

export function PeoplePage() {
  const kb = useKB();
  const [era, setEra] = useState<Era | 'all'>('all');
  const [coptic, setCoptic] = useState(false);
  const [q, setQ] = useState('');
  const list = useMemo(() => {
    const terms = fold(q).split(/\s+/).filter(Boolean);
    return kb.people
      .filter((p) => (era === 'all' || p.era === era) && (!coptic || p.tradition === 'koptisch'))
      .filter((p) => {
        if (!terms.length) return true;
        const hay = fold([p.name, p.title, ...p.fields].join(' '));
        return terms.every((t) => hay.includes(t));
      })
      .sort((a, b) => eraOrder.indexOf(a.era) - eraOrder.indexOf(b.era) || (kb.contributions.get(b.id)?.length ?? 0) - (kb.contributions.get(a.id)?.length ?? 0));
  }, [kb, era, coptic, q]);

  return (
    <div>
      <PageHeader
        eyebrow={<><Users className="size-3.5" /> Personenregister</>}
        title="Das Konzil der Verteidiger"
        subtitle="Apostel, Kirchenväter, koptische Päpste und Theologen, Philosophen und Naturwissenschaftler – jede Stimme antwortet in ihrem Fachgebiet."
      />
      <div className="mb-5 space-y-3">
        <div className="flex items-center gap-2 rounded-xl border bg-card px-3">
          <Search className="size-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name oder Fachgebiet (z. B. Chemie, Islam, Christologie) …" className="h-11 w-full bg-transparent text-[15px] outline-none" />
        </div>
        <div className="scrollbar-none -mx-4 flex gap-1.5 overflow-x-auto px-4">
          {(['all', ...eraOrder] as const).map((e) => (
            <button key={e} onClick={() => setEra(e)} className={cn('shrink-0 rounded-full border px-3 py-1 text-[12.5px] font-medium', era === e ? 'border-primary bg-primary text-primary-foreground' : 'bg-card hover:bg-muted')}>
              {e === 'all' ? 'Alle Epochen' : eraLabel[e]}
            </button>
          ))}
          <button onClick={() => setCoptic((c) => !c)} className={cn('shrink-0 rounded-full border px-3 py-1 text-[12.5px] font-medium', coptic ? 'border-gold bg-gold text-white dark:text-black' : 'bg-card hover:bg-muted')}>
            Nur koptisch
          </button>
        </div>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {list.map((p) => {
          const n = kb.contributions.get(p.id)?.length ?? 0;
          return (
            <Link key={p.id} to={`/konzil/${p.id}`} className="group flex items-start gap-3 rounded-xl border bg-card p-3.5 transition hover:border-primary/30 hover:shadow-md">
              <PersonAvatar person={p} className="size-11" />
              <div className="min-w-0 flex-1">
                <div className="font-semibold leading-snug group-hover:text-primary">{p.name}</div>
                <div className="line-clamp-1 text-[12.5px] text-muted-foreground">{p.title}</div>
                <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                  <Badge variant="outline">{p.years}</Badge>
                  {p.tradition === 'koptisch' && <Badge variant="gold">Koptisch</Badge>}
                  {n > 0 && <span className="text-[11px] text-muted-foreground">{n} Beiträge</span>}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {list.length === 0 && <p className="py-10 text-center text-sm text-muted-foreground">Keine Person gefunden.</p>}
    </div>
  );
}

export function PersonPage() {
  const { personId } = useParams();
  const kb = useKB();
  const p = personId ? kb.personById.get(personId) : undefined;
  const contributions = (p && kb.contributions.get(p.id)) || [];
  const byTopic = useMemo(() => {
    const m = new Map<string, typeof contributions>();
    contributions.forEach((c) => m.set(c.topic.id, [...(m.get(c.topic.id) ?? []), c]));
    return [...m.entries()];
  }, [contributions]);
  if (!p) return <NotFound />;
  return (
    <div>
      <Link to="/konzil" className="mb-4 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground">
        <Users className="size-3.5" /> Konzil der Verteidiger
      </Link>
      <div className="flex flex-col gap-5 rounded-2xl border bg-card p-5 sm:flex-row sm:p-6">
        <PersonAvatar person={p} className="size-20 text-2xl" />
        <div className="min-w-0 flex-1">
          <h1 className="font-serif text-2xl font-semibold leading-tight sm:text-3xl">{p.name}</h1>
          <p className="mt-1 text-[15px] text-muted-foreground">{p.title}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge variant="outline">{p.years}</Badge>
            <Badge variant="muted">{eraLabel[p.era]}</Badge>
            <TraditionBadge person={p} />
          </div>
          <p className="mt-4 text-[15px] leading-relaxed">{p.bio}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.fields.map((f) => (
              <span key={f} className="rounded-md bg-muted px-2 py-0.5 text-[12px] text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
          {p.caveat && (
            <div className="mt-4 flex gap-2 rounded-lg bg-info-soft/60 p-3 text-[13px] leading-snug">
              <Info className="mt-0.5 size-4 shrink-0 text-info" />
              <span>{p.caveat}</span>
            </div>
          )}
        </div>
      </div>

      {p.keyWorks?.length ? (
        <section className="mt-6">
          <SectionTitle icon={BookOpen}>Hauptwerke</SectionTitle>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {p.keyWorks.map((w) => (
              <li key={w} className="rounded-lg border bg-card px-3 py-2 text-sm italic">
                {w}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mt-8">
        <SectionTitle>Beiträge in der Wissensdatenbank ({contributions.length})</SectionTitle>
        {byTopic.length === 0 && <p className="text-sm text-muted-foreground">Noch keine Beiträge.</p>}
        <div className="space-y-5">
          {byTopic.map(([tid, list]) => {
            const t = kb.topicById.get(tid)!;
            return (
              <div key={tid}>
                <Link to={`/thema/${tid}`} className="mb-2 inline-flex items-center gap-1 text-[13px] font-semibold hover:text-primary">
                  {t.title} <ChevronRight className="size-3.5" />
                </Link>
                <div className="grid gap-2">
                  {list.map((c, i) => (
                    <Link
                      key={i}
                      to={`/thema/${c.topic.id}/${c.claim.id}${c.nodeId ? `?tab=debatte&knoten=${c.nodeId}` : '?tab=konzil'}`}
                      className="group rounded-xl border bg-card p-3.5 hover:border-primary/30"
                    >
                      <div className="text-[13px] font-medium leading-snug group-hover:text-primary">
                        {c.nodeId ? `Im Gespräch: „${plain(c.context, 120)}"` : plain(c.context, 140)}
                      </div>
                      <Md size="sm" className="mt-1.5 line-clamp-3 text-muted-foreground">
                        {plain(c.voice.text, 260)}
                      </Md>
                      <span className="mt-1 inline-flex items-center gap-1 text-[11.5px] font-medium text-primary">
                        Öffnen <ArrowRight className="size-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
