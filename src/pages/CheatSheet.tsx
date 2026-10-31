import { ArrowLeft, Printer } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { Md } from '@/components/app/Md';
import { useKB } from '@/lib/content';
import { plain } from '@/lib/utils';
import NotFound from './NotFound';

/** Kompakter, druckbarer Spickzettel eines Themenblocks. */
export default function CheatSheet() {
  const { topicId } = useParams();
  const kb = useKB();
  const topic = topicId ? kb.topicById.get(topicId) : undefined;
  if (!topic) return <NotFound />;
  return (
    <div className="cheatsheet">
      <div className="mb-6 flex items-center gap-2 print:hidden">
        <Button asChild variant="ghost" size="sm">
          <Link to={`/thema/${topic.id}`}>
            <ArrowLeft /> Zurück
          </Link>
        </Button>
        <Button size="sm" className="ml-auto" onClick={() => window.print()}>
          <Printer /> Drucken / als PDF
        </Button>
      </div>
      <header className="mb-6 border-b pb-4">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">Spickzettel · Apologia</div>
        <h1 className="mt-1 font-serif text-3xl font-semibold">{topic.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{topic.subtitle}</p>
      </header>
      <section className="mb-6 rounded-xl border border-gold/30 bg-gold-soft/40 p-4 print:border-black/20 print:bg-transparent">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gold">Strategie</div>
        <Md size="sm">{topic.strategy}</Md>
      </section>
      <ol className="space-y-5">
        {topic.claims.map((c, i) => (
          <li key={c.id} className="break-inside-avoid rounded-xl border bg-card p-4 print:rounded-none print:border-0 print:border-t print:p-0 print:pt-3">
            <h2 className="font-serif text-lg font-semibold leading-snug">
              {i + 1}. {plain(c.title)}
            </h2>
            <Md size="sm" className="mt-1.5 font-medium">
              {c.quickAnswer}
            </Md>
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-[13.5px] leading-snug">
              {c.keyPoints.map((k, j) => (
                <li key={j}>{plain(k)}</li>
              ))}
            </ul>
            {c.questionsToAsk?.length ? (
              <p className="mt-2 text-[13px] leading-snug">
                <span className="font-semibold text-gold">Frag zurück: </span>
                {c.questionsToAsk.slice(0, 3).map(plain).join(' · ')}
              </p>
            ) : null}
            {c.avoid?.length ? (
              <p className="mt-1 text-[13px] leading-snug">
                <span className="font-semibold text-warning">Vermeide: </span>
                {c.avoid.slice(0, 2).map(plain).join(' · ')}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
