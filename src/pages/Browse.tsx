import { ChevronRight, Compass, Crosshair, FileText, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useParams } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Difficulty, PageHeader, SectionTitle } from '@/components/app/Bits';
import { Md } from '@/components/app/Md';
import { AvatarStack } from '@/components/app/People';
import type { Topic } from '@/content/schema';
import { useKB, type ClaimRef } from '@/lib/content';
import { DynIcon } from '@/lib/icons';
import { cn, plain } from '@/lib/utils';
import NotFound from './NotFound';

function TopicCard({ topic }: { topic: Topic }) {
  const kb = useKB();
  const cat = kb.categories.find((c) => c.id === topic.category)!;
  const nodes = kb.claims.filter((c) => c.topic.id === topic.id).reduce((n, c) => n + c.nodeCount, 0);
  return (
    <Link to={`/thema/${topic.id}`} className={cn('group flex gap-3 rounded-xl border bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md', cat.accent)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cat-soft">
        <DynIcon name={topic.icon} className="size-5 text-cat" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-semibold leading-snug group-hover:text-primary">{topic.title}</div>
        <div className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-muted-foreground">{topic.subtitle}</div>
        <div className="mt-2 text-[11.5px] text-muted-foreground">
          {topic.claims.length} Behauptungen · {nodes} Gesprächszüge
        </div>
      </div>
      <ChevronRight className="mt-1 size-4 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5" />
    </Link>
  );
}

export function TopicsPage() {
  const kb = useKB();
  return (
    <div>
      <PageHeader eyebrow={<><Compass className="size-3.5" /> Übersicht</>} title="Alle Themen" subtitle="Jedes Themenfeld, jeder Unterbereich – von der Islam-Debatte bis zur Neurowissenschaft." />
      <div className="space-y-10">
        {kb.categories.map((c) => {
          const topics = kb.topics.filter((t) => t.category === c.id);
          return (
            <section key={c.id} className={c.accent}>
              <Link to={`/kategorie/${c.id}`} className="group mb-3 flex items-center gap-2">
                <DynIcon name={c.icon} className="size-5 text-cat" />
                <h2 className="font-serif text-xl font-semibold group-hover:text-primary">{c.title}</h2>
                <span className="text-xs text-muted-foreground">{kb.stats.byCategory[c.id]?.claims ?? 0} Behauptungen</span>
              </Link>
              {topics.length ? (
                <div className="grid gap-2.5 md:grid-cols-2">{topics.map((t) => <TopicCard key={t.id} topic={t} />)}</div>
              ) : (
                <p className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">Inhalte folgen.</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export function CategoryPage() {
  const { categoryId } = useParams();
  const kb = useKB();
  const cat = kb.categories.find((c) => c.id === categoryId);
  if (!cat) return <NotFound />;
  const topics = kb.topics.filter((t) => t.category === cat.id);
  const groups = cat.groups.map((g) => ({ g, topics: topics.filter((t) => t.group === g) })).filter((x) => x.topics.length);
  return (
    <div className={cat.accent}>
      <PageHeader
        eyebrow={
          <span className="inline-flex items-center gap-1.5">
            <DynIcon name={cat.icon} className="size-3.5 text-cat" /> Themenfeld
          </span>
        }
        title={cat.title}
        subtitle={cat.subtitle}
      />
      {groups.length === 0 && <p className="rounded-xl border border-dashed p-6 text-sm text-muted-foreground">Für dieses Themenfeld werden die Inhalte gerade erarbeitet.</p>}
      <div className="space-y-8">
        {groups.map(({ g, topics }) => (
          <section key={g}>
            <SectionTitle>{g}</SectionTitle>
            <div className="grid gap-2.5 md:grid-cols-2">
              {topics.map((t) => (
                <TopicCard key={t.id} topic={t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function ClaimRow({ c, index }: { c: ClaimRef; index?: number }) {
  const ids = c.claim.voices?.map((v) => v.person) ?? [];
  return (
    <Link to={`/thema/${c.ref}`} className="group block rounded-xl border bg-card p-4 transition hover:border-primary/30 hover:shadow-md">
      <div className="flex items-start gap-3">
        {index !== undefined && <span className="mt-0.5 font-serif text-lg font-semibold text-gold/80 tabular-nums">{String(index + 1).padStart(2, '0')}</span>}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {c.nodeCount >= 15 && (
              <Badge variant="gold">
                <Star /> Kernargument
              </Badge>
            )}
            <Difficulty level={c.claim.difficulty} />
          </div>
          <p className="mt-1.5 font-serif text-[17px] font-semibold leading-snug group-hover:text-primary">{plain(c.claim.title)}</p>
          <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-snug text-muted-foreground">{plain(c.claim.quickAnswer)}</p>
          <div className="mt-3 flex items-center gap-3">
            <AvatarStack ids={ids} />
            <span className="text-[11.5px] text-muted-foreground">{c.nodeCount} Gesprächszüge</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function TopicPage() {
  const { topicId } = useParams();
  const kb = useKB();
  const topic = topicId ? kb.topicById.get(topicId) : undefined;
  if (!topic) return <NotFound />;
  const cat = kb.categories.find((c) => c.id === topic.category)!;
  const claims = kb.claims.filter((c) => c.topic.id === topic.id);
  return (
    <div className={cat.accent}>
      <PageHeader
        eyebrow={
          <>
            <Link to={`/kategorie/${cat.id}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <DynIcon name={cat.icon} className="size-3.5 text-cat" /> {cat.title}
            </Link>
            <ChevronRight className="size-3" />
            <span>{topic.group}</span>
          </>
        }
        title={topic.title}
        subtitle={topic.subtitle}
      >
        <span className="hidden size-14 shrink-0 place-items-center rounded-2xl bg-cat-soft sm:grid">
          <DynIcon name={topic.icon} className="size-7 text-cat" />
        </span>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Md>{topic.overview}</Md>
          <section>
            <SectionTitle>Die Behauptungen ({claims.length})</SectionTitle>
            <div className="grid gap-2.5">
              {claims.map((c, i) => (
                <ClaimRow key={c.ref} c={c} index={i} />
              ))}
            </div>
          </section>
        </div>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border-2 border-gold/30 bg-gold-soft/40 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gold">
              <Crosshair className="size-4" /> Gesprächsstrategie
            </div>
            <Md size="sm">{topic.strategy}</Md>
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link to={`/thema/${topic.id}/spickzettel`}>
              <FileText /> Spickzettel (druckbar)
            </Link>
          </Button>
          {topic.keyOpponents?.length > 0 && (
            <div className="rounded-xl border bg-card p-4">
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Users className="size-4 text-muted-foreground" /> Führende Köpfe der Gegenseite
              </div>
              <ul className="space-y-2">
                {topic.keyOpponents.map((o) => (
                  <li key={o.name} className="text-sm">
                    <div className="font-medium">{o.name}</div>
                    <div className="text-[12px] leading-snug text-muted-foreground">
                      {o.role}
                      {o.work ? ` · ${o.work}` : ''}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
