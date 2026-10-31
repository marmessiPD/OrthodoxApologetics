import {
  AlertTriangle, BookOpen, Check, ChevronLeft, ChevronRight, Church, Copy, FlaskConical, HandHeart, Library, Link2, ListChecks,
  MessageCircleQuestion, MessagesSquare, Scale, ScrollText, Swords, Users, Zap,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArgumentView } from '@/components/app/Argument';
import { BookmarkButton, Difficulty, SectionTitle } from '@/components/app/Bits';
import { DebateSimulator, useDialogVoices } from '@/components/app/Debate';
import { Md } from '@/components/app/Md';
import { PersonAvatar, VoiceCard } from '@/components/app/People';
import { SourceItem, SourceList } from '@/components/app/Sources';
import type { Position, QuoteStatus } from '@/content/schema';
import { collectSources, useKB } from '@/lib/content';
import { DynIcon } from '@/lib/icons';
import { useRecent } from '@/lib/storage';
import { cn, plain } from '@/lib/utils';
import NotFound from './NotFound';

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        navigator.clipboard?.writeText(plain(text)).then(() => {
          setDone(true);
          setTimeout(() => setDone(false), 1500);
        });
      }}
    >
      {done ? <Check /> : <Copy />} {done ? 'Kopiert' : 'Kopieren'}
    </Button>
  );
}

function PositionBlock({ icon: Icon, title, badge, pos, tone }: { icon: typeof BookOpen; title: string; badge?: string; pos?: Position; tone?: 'gold' | 'primary' | 'muted' }) {
  const [showSources, setShowSources] = useState(false);
  if (!pos) return null;
  return (
    <section className={cn('rounded-xl border bg-card p-5', tone === 'gold' && 'border-gold/30', tone === 'primary' && 'border-primary/20')}>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Icon className={cn('size-5', tone === 'gold' ? 'text-gold' : tone === 'primary' ? 'text-primary' : 'text-muted-foreground')} />
        <h3 className="font-semibold">{title}</h3>
        {badge && <Badge variant={tone === 'gold' ? 'gold' : 'muted'}>{badge}</Badge>}
      </div>
      <Md>{pos.summary}</Md>
      {pos.detail && (
        <details className="mt-3 rounded-lg bg-muted/40 px-4 py-2">
          <summary className="cursor-pointer py-1 text-sm font-medium text-primary">Vertiefung lesen</summary>
          <Md size="sm" className="mt-1 pb-2">
            {pos.detail}
          </Md>
        </details>
      )}
      {pos.sources?.length > 0 && (
        <div className="mt-3">
          <button onClick={() => setShowSources((s) => !s)} className="text-[12.5px] font-medium text-muted-foreground hover:text-foreground">
            {showSources ? 'Belege ausblenden' : `${pos.sources.length} Beleg${pos.sources.length > 1 ? 'e' : ''} anzeigen`}
          </button>
          {showSources && (
            <div className="mt-2">
              <SourceList sources={pos.sources} compact />
            </div>
          )}
        </div>
      )}
    </section>
  );
}

function ListCard({ icon: Icon, title, items, tone }: { icon: typeof BookOpen; title: string; items?: string[]; tone: 'gold' | 'warning' | 'info' }) {
  if (!items?.length) return null;
  const toneCls = { gold: 'border-gold/30 bg-gold-soft/40 text-gold', warning: 'border-warning/30 bg-warning-soft/50 text-warning', info: 'border-info/25 bg-info-soft/50 text-info' }[tone];
  return (
    <div className={cn('rounded-xl border p-4', toneCls)}>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <Icon className="size-4" /> {title}
      </div>
      <ul className="space-y-2 text-[14px] leading-snug text-foreground">
        {items.map((q, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-0.5 opacity-60">•</span>
            <span>
              <Md size="sm" className="prose-p:my-0">
                {q}
              </Md>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const statusFilters: { id: 'all' | QuoteStatus; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'verbatim', label: 'Wörtlich' },
  { id: 'paraphrase', label: 'Sinngemäß' },
  { id: 'unverified', label: 'Zu prüfen' },
];

export default function ClaimPage() {
  const { topicId, claimId } = useParams();
  const [params, setParams] = useSearchParams();
  const kb = useKB();
  const ref = `${topicId}/${claimId}`;
  const cr = kb.claimByRef.get(ref);
  const { push } = useRecent();
  const [srcFilter, setSrcFilter] = useState<'all' | QuoteStatus>('all');

  useEffect(() => {
    if (cr) push(ref);
  }, [ref, cr, push]);

  const sources = useMemo(() => (cr ? collectSources(cr.claim) : []), [cr]);
  const dialogVoices = useDialogVoices(cr?.claim ?? ({ voices: [], dialog: [] } as never));
  if (!cr) return <NotFound />;

  const { topic, claim } = cr;
  const cat = kb.categories.find((c) => c.id === topic.category)!;
  const tab = params.get('tab') ?? 'antwort';
  const node = params.get('knoten');
  const setTab = (t: string, extra?: Record<string, string>) => {
    const p = new URLSearchParams(params);
    p.set('tab', t);
    if (extra) Object.entries(extra).forEach(([k, v]) => p.set(k, v));
    else if (t !== 'debatte') p.delete('knoten');
    setParams(p, { replace: true });
  };
  const siblings = kb.claims.filter((c) => c.topic.id === topic.id);
  const idx = siblings.findIndex((c) => c.ref === ref);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];
  const related = (claim.related ?? []).map((r) => kb.claimByRef.get(r) ?? kb.topicById.get(r.split('/')[0])).filter(Boolean);
  const filteredSources = sources.filter((s) => srcFilter === 'all' || s.source.status === srcFilter);
  const statusCount = (s: QuoteStatus) => sources.filter((x) => x.source.status === s).length;

  return (
    <div className={cat.accent}>
      {/* Kopf */}
      <div className="mb-2 flex flex-wrap items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Link to={`/kategorie/${cat.id}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
          <DynIcon name={cat.icon} className="size-3.5 text-cat" /> {cat.title}
        </Link>
        <ChevronRight className="size-3" />
        <Link to={`/thema/${topic.id}`} className="hover:text-foreground">
          {topic.title}
        </Link>
      </div>
      <div className="flex items-start gap-3">
        <h1 className="flex-1 font-serif text-[24px] font-semibold leading-tight tracking-tight sm:text-[30px]">{plain(claim.title)}</h1>
        <BookmarkButton refId={ref} className="mt-1" />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
        <Difficulty level={claim.difficulty} />
        <span className="inline-flex items-center gap-1">
          <MessagesSquare className="size-3.5" /> {cr.nodeCount} Gesprächszüge
        </span>
        <span className="inline-flex items-center gap-1">
          <Users className="size-3.5" /> {dialogVoices.length} Stimmen
        </span>
        <span className="inline-flex items-center gap-1">
          <Library className="size-3.5" /> {sources.length} Quellen
        </span>
      </div>

      <Tabs value={tab} onValueChange={(t) => setTab(t)} className="mt-6">
        <TabsList>
          <TabsTrigger value="antwort">
            <Zap /> Antwort
          </TabsTrigger>
          <TabsTrigger value="debatte">
            <MessagesSquare /> Debatte
          </TabsTrigger>
          {claim.argument && (
            <TabsTrigger value="argument">
              <Scale /> Argument
            </TabsTrigger>
          )}
          <TabsTrigger value="hintergrund">
            <ScrollText /> Hintergrund
          </TabsTrigger>
          <TabsTrigger value="konzil">
            <Users /> Konzil
          </TabsTrigger>
          <TabsTrigger value="quellen">
            <Library /> Quellen
          </TabsTrigger>
        </TabsList>

        {/* ---------- Antwort ---------- */}
        <TabsContent value="antwort" className="space-y-6">
          <section className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-card p-5 sm:p-6">
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#8f2635] to-[#c9973f]" />
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
                <Zap className="size-3.5" /> Deine 30-Sekunden-Antwort
              </div>
              <CopyButton text={claim.quickAnswer} />
            </div>
            <Md className="mt-2 text-[16px] sm:text-[17px]">{claim.quickAnswer}</Md>
          </section>

          <section>
            <SectionTitle icon={ListChecks}>Kernargumente</SectionTitle>
            <ol className="grid gap-2">
              {claim.keyPoints.map((k, i) => (
                <li key={i} className="flex gap-3 rounded-xl border bg-card p-3.5">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-xs font-bold text-primary">{i + 1}</span>
                  <Md size="sm" className="prose-p:my-0 text-[14.5px]">
                    {k}
                  </Md>
                </li>
              ))}
            </ol>
          </section>

          <div className="grid gap-3 md:grid-cols-2">
            <ListCard icon={MessageCircleQuestion} title="Stell diese Fragen" items={claim.questionsToAsk} tone="gold" />
            <ListCard icon={AlertTriangle} title="Vermeide diese Argumente" items={claim.avoid} tone="warning" />
            <ListCard icon={HandHeart} title="Ehrlich zugeben" items={claim.concessions} tone="info" />
            {claim.proponents?.length > 0 && (
              <div className="rounded-xl border bg-card p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <Swords className="size-4 text-muted-foreground" /> Wer das behauptet
                </div>
                <ul className="space-y-2">
                  {claim.proponents.map((p) => (
                    <li key={p.name} className="text-sm">
                      <span className="font-medium">{p.name}</span>
                      <span className="text-muted-foreground"> – {p.role}</span>
                      {p.work && <div className="text-[12px] italic text-muted-foreground">{p.work}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={() => setTab('debatte')} size="lg">
              <MessagesSquare /> Debatte simulieren
            </Button>
            {claim.argument && (
              <Button onClick={() => setTab('argument')} size="lg" variant="outline">
                <Scale /> Formales Argument
              </Button>
            )}
          </div>

          {related.length > 0 && (
            <section>
              <SectionTitle icon={Link2}>Verwandte Themen</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {related.map((r, i) =>
                  r && 'claim' in r ? (
                    <Link key={i} to={`/thema/${r.ref}`} className="rounded-lg border bg-card px-3 py-1.5 text-[13px] hover:border-primary/40 hover:text-primary">
                      {plain(r.claim.title, 70)}
                    </Link>
                  ) : r ? (
                    <Link key={i} to={`/thema/${r.id}`} className="rounded-lg border bg-card px-3 py-1.5 text-[13px] hover:border-primary/40 hover:text-primary">
                      {r.title}
                    </Link>
                  ) : null,
                )}
              </div>
            </section>
          )}
        </TabsContent>

        {/* ---------- Debatte ---------- */}
        <TabsContent value="debatte">
          <DebateSimulator claim={claim} initialNodeId={node} />
        </TabsContent>

        {/* ---------- Argument ---------- */}
        {claim.argument && (
          <TabsContent value="argument">
            <ArgumentView claim={claim} onJump={(id) => setTab('debatte', { knoten: id })} />
          </TabsContent>
        )}

        {/* ---------- Hintergrund ---------- */}
        <TabsContent value="hintergrund" className="space-y-4">
          <section className="rounded-xl border border-dashed bg-opponent/60 p-5">
            <div className="mb-2 flex items-center gap-2">
              <Swords className="size-5 text-muted-foreground" />
              <h3 className="font-semibold">Die stärkste Fassung des Einwands</h3>
            </div>
            <Md>{claim.steelman}</Md>
          </section>
          <PositionBlock icon={BookOpen} title="Was die Bibel wirklich sagt" pos={claim.biblical} tone="primary" />
          <PositionBlock icon={Church} title="Die Lehre der Kirche" badge="Koptisch-orthodox" pos={claim.church} tone="gold" />
          <PositionBlock icon={FlaskConical} title="Was die Gegenseite / Forschung tatsächlich sagt" pos={claim.opposingView} tone="muted" />
        </TabsContent>

        {/* ---------- Konzil ---------- */}
        <TabsContent value="konzil" className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Als hätten sich die großen Verteidiger des Glaubens an einen Tisch gesetzt – jede Stimme spricht in ihrem Fachgebiet. Die Texte sind sachliche
            Zusammenfassungen ihrer Argumente; wörtliche Zitate stehen in den Belegen.
          </p>
          <div className="grid gap-3">
            {claim.voices.map((v, i) => (
              <VoiceCard key={i} voice={v} />
            ))}
          </div>
          {dialogVoices.length > claim.voices.length && (
            <section>
              <SectionTitle>Weitere Stimmen im Gesprächsverlauf</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {dialogVoices
                  .filter((id) => !claim.voices.some((v) => v.person === id))
                  .map((id) => {
                    const p = kb.personById.get(id)!;
                    return (
                      <Link key={id} to={`/konzil/${id}`} className="flex items-center gap-2 rounded-full border bg-card py-1 pl-1 pr-3 text-[13px] hover:border-primary/40">
                        <PersonAvatar person={p} className="size-7 text-[10px]" />
                        {p.name}
                      </Link>
                    );
                  })}
              </div>
            </section>
          )}
        </TabsContent>

        {/* ---------- Quellen ---------- */}
        <TabsContent value="quellen" className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {statusFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setSrcFilter(f.id)}
                className={cn('rounded-full border px-3 py-1 text-[12.5px] font-medium', srcFilter === f.id ? 'border-primary bg-primary text-primary-foreground' : 'bg-card hover:bg-muted')}
              >
                {f.label} {f.id === 'all' ? sources.length : statusCount(f.id)}
              </button>
            ))}
          </div>
          <div className="grid gap-2">
            {filteredSources.map((s, i) => (
              <SourceItem key={i} source={s.source} where={s.where} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Vor / Zurück */}
      <nav className="mt-10 grid gap-2 border-t pt-6 sm:grid-cols-2">
        {prev ? (
          <Link to={`/thema/${prev.ref}`} className="group rounded-xl border bg-card p-3.5 hover:border-primary/30">
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <ChevronLeft className="size-3" /> Vorherige
            </div>
            <div className="mt-1 line-clamp-2 text-sm font-medium group-hover:text-primary">{plain(prev.claim.title)}</div>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/thema/${next.ref}`} className="group rounded-xl border bg-card p-3.5 text-right hover:border-primary/30">
            <div className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground">
              Nächste <ChevronRight className="size-3" />
            </div>
            <div className="mt-1 line-clamp-2 text-sm font-medium group-hover:text-primary">{plain(next.claim.title)}</div>
          </Link>
        )}
      </nav>
    </div>
  );
}
