import { BookOpenCheck, Church, HeartHandshake, Info, ListTree, MessagesSquare, Search, ShieldCheck, Zap } from 'lucide-react';
import { useMemo } from 'react';
import { PageHeader, SectionTitle } from '@/components/app/Bits';
import { StatusBadge } from '@/components/app/Sources';
import { collectSources, useKB } from '@/lib/content';

const howTo = [
  { icon: Search, title: 'Live-Suche im Gespräch', text: 'Tippe ein paar Stichworte dessen, was dein Gegenüber gerade gesagt hat (⌘K oder Suche-Knopf). Du landest direkt an der passenden Stelle im Gesprächsverlauf.' },
  { icon: Zap, title: '30-Sekunden-Antwort', text: 'Jede Behauptung hat eine kurze Antwort, die du dir merken kannst, plus Kernargumente, Rückfragen und Fallen, die du vermeiden solltest.' },
  { icon: MessagesSquare, title: 'Debatten-Simulator', text: 'Spiele das Gespräch durch: Wähle, was ein Experte der Gegenseite als Nächstes sagt, und sieh, wie das Konzil antwortet – Zug um Zug.' },
  { icon: ListTree, title: 'Gesprächsbaum', text: 'Die Übersicht über alle vorausgedachten Züge. Ideal zur Vorbereitung: Sieh auf einen Blick, wohin ein Gespräch laufen kann.' },
];

export default function About() {
  const kb = useKB();
  const counts = useMemo(() => {
    const c = { verbatim: 0, paraphrase: 0, unverified: 0 };
    kb.claims.forEach(({ claim }) => collectSources(claim).forEach(({ source }) => c[source.status]++));
    return c;
  }, [kb]);

  return (
    <div className="space-y-10">
      <PageHeader
        eyebrow={<><Info className="size-3.5" /> Über diese App</>}
        title="Methodik & Haltung"
        subtitle="Apologia hilft dir, den christlichen Glauben – aus koptisch-orthodoxer Sicht – mit guten Gründen zu verteidigen: ehrlich, belegt und in Liebe."
      />

      <section>
        <SectionTitle>So benutzt du die App</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          {howTo.map((h) => (
            <div key={h.title} className="rounded-xl border bg-card p-4">
              <h.icon className="size-5 text-primary" />
              <div className="mt-2 font-semibold">{h.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gold/30 bg-gold-soft/40 p-5 sm:p-6">
        <div className="flex items-center gap-2 font-semibold text-gold">
          <HeartHandshake className="size-5" /> Die Haltung
        </div>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed">
          <p>
            „Seid aber allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit <strong>Sanftmütigkeit und Furcht</strong>." (1 Petr 3,15)
          </p>
          <p>
            Die Argumente in dieser App sind so gebaut, dass sie jedem Gegenzug standhalten – aber das Ziel ist nie, einen Menschen zu besiegen, sondern ihn für Christus zu gewinnen.
            Hart darf die Logik sein, niemals der Ton. Wer mit Muslimen, Juden, Atheisten oder anderen Christen spricht, spricht mit Ebenbildern Gottes.
          </p>
          <p>
            Wasserdicht heißt ehrlich: Jede Behauptung zeigt die <strong>stärkste Fassung</strong> der Gegenposition, benennt <strong>schwache Argumente</strong>, die du vermeiden solltest,
            und sagt dir, was du <strong>ehrlich zugeben</strong> musst. Das macht dich glaubwürdig.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle icon={Church}>Koptisch-orthodoxe Perspektive</SectionTitle>
        <ul className="grid gap-2 text-[14.5px] leading-relaxed sm:grid-cols-2">
          {[
            'Ein Gott in drei Hypostasen – Vater, Sohn und Heiliger Geist; das Glaubensbekenntnis von Nizäa-Konstantinopel ohne Filioque.',
            'Christologie des hl. Kyrill: „eine fleischgewordene Natur des Gott-Logos" – ohne Vermischung, Verwandlung, Vermengung und Trennung.',
            'Maria ist Theotokos, Gottesgebärerin. Anerkannt sind die Konzilien von Nizäa, Konstantinopel und Ephesus.',
            'Heil als Gemeinschaft mit Gott durch Glauben, Taufe und das Leben in der Kirche – Gnade und freier Wille wirken zusammen.',
            'Sieben heilige Sakramente, die Heilige Schrift in der lebendigen Überlieferung der Kirche, Fürbitte der Heiligen, Ikonen und Fasten.',
            'Gott ist Schöpfer aller Dinge; der Mensch ist nach seinem Bild geschaffen. Über Erdalter und Mechanismen gibt es kein Dogma – offene Fragen werden als solche gekennzeichnet.',
          ].map((t) => (
            <li key={t} className="rounded-xl border bg-card p-3.5">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle icon={BookOpenCheck}>Quellen & Zitierstatus</SectionTitle>
        <p className="mb-3 text-[14.5px] leading-relaxed text-muted-foreground">
          Ein falsches Zitat kostet in einer Debatte sofort die Glaubwürdigkeit. Deshalb trägt jede Quelle einen Status:
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-4">
            <StatusBadge status="verbatim" />
            <p className="mt-2 text-sm text-muted-foreground">Wortlaut und Fundstelle sind gesichert (z. B. Bibel- und Koranverse, gut belegte Zitate).</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">{counts.verbatim.toLocaleString('de-DE')}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <StatusBadge status="paraphrase" />
            <p className="mt-2 text-sm text-muted-foreground">Sinngemäße Wiedergabe einer Position mit Fundstelle – nicht als wörtliches Zitat verwenden.</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">{counts.paraphrase.toLocaleString('de-DE')}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <StatusBadge status="unverified" />
            <p className="mt-2 text-sm text-muted-foreground">Wortlaut oder Fundstelle konnten nicht abschließend geprüft werden – vor öffentlicher Verwendung nachschlagen.</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums">{counts.unverified.toLocaleString('de-DE')}</p>
          </div>
        </div>
      </section>

      <section className="flex gap-3 rounded-2xl border bg-card p-5">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
        <div className="text-[14px] leading-relaxed text-muted-foreground">
          <p className="font-semibold text-foreground">Hinweis zur Entstehung</p>
          <p className="mt-1">
            Die Wissensdatenbank wurde mit Unterstützung künstlicher Intelligenz recherchiert und strukturiert und folgt strengen Zitierregeln. Sie ersetzt nicht das Urteil der Kirche
            und das Gespräch mit deinem Beichtvater oder Priester. Bitte prüfe wichtige Zitate vor öffentlicher Verwendung an der Originalquelle; Hinweise auf Fehler helfen, die
            Datenbank stetig zu verbessern.
          </p>
        </div>
      </section>
    </div>
  );
}
