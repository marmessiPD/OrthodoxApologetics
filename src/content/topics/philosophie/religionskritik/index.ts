import type { Topic } from '../../../schema.ts';
import projektionFeuerbach from './projektion-feuerbach.ts';
import opiumDesVolkes from './opium-des-volkes.ts';
import freudWunscherfuellung from './freud-wunscherfuellung.ts';
import religionAlsVirus from './religion-als-virus.ts';
import religionHerrschaftsinstrument from './religion-herrschaftsinstrument.ts';

const topic: Topic = {
  id: 'religionskritik',
  category: 'philosophie',
  group: 'Religionskritik',
  order: 1,
  title: `Klassische Religionskritik`,
  subtitle: `Feuerbach, Marx, Freud, Dawkins – und warum Psychologisieren die Gottesfrage nicht entscheidet`,
  icon: 'megaphone',
  overview: `Die klassische Religionskritik des 19. und 20. Jahrhunderts – oft „Meister des Verdachts" genannt – fragt nicht in erster Linie, *ob* Gott existiert, sondern *warum Menschen glauben*. **Ludwig Feuerbach** (1841) erklärte Gott zur Projektion des menschlichen Wesens; **Karl Marx** (1844) nannte Religion den „Seufzer der bedrängten Kreatur" und das „Opium des Volkes"; **Sigmund Freud** (1927) deutete sie als Illusion, als Erfüllung infantiler Wünsche nach einem beschützenden Vater und als kollektive Zwangsneurose. In der Gegenwart hat **Richard Dawkins** diese Linie mit der Metapher vom „Virus des Geistes" fortgesetzt, und seit der Antike begleitet die Religion der Verdacht, ein Herrschaftsinstrument der Mächtigen zu sein.

Diese Kritik verdient Respekt: Sie hat reale Phänomene beobachtet – Wunschdenken, Missbrauch religiöser Macht, angstbesetzte Frömmigkeit, die Verflechtung von Thron und Altar. Die Bibel selbst übt eine verwandte Kritik an den Götzen, die Menschen sich machen (Jes 44; Ps 115), und die Propheten klagen die Mächtigen an. Doch alle diese Theorien haben eine gemeinsame logische Schwäche: Sie erklären, wie ein Glaube entstehen *könnte*, wenn er falsch ist – sie zeigen aber nicht, *dass* er falsch ist (genetischer Fehlschluss). Freud gesteht selbst zu: „Eine Illusion ist … nicht notwendig ein Irrtum."

Zudem funktioniert der Verdacht in beide Richtungen. Der atheistische Philosoph **Thomas Nagel** bekennt: „Ich will, dass der Atheismus wahr ist"; **Aldous Huxley** nannte die „Philosophie der Sinnlosigkeit" ein Instrument der Befreiung, auch von der Sexualmoral. Der Psychologe **Paul Vitz** hat Freuds eigene Methode auf berühmte Atheisten angewandt. Das Ergebnis ist ein Patt – und damit die Rückkehr zur eigentlichen Frage: Welche Gründe gibt es für und gegen Gott?`,
  strategy: `**1. Zugestehen, was wahr ist.** Menschen projizieren, Kirchen haben Macht missbraucht, es gibt ungesunde Religiosität. Wer das ehrlich einräumt, gewinnt Glaubwürdigkeit.

**2. Den genetischen Fehlschluss benennen.** „Du erklärst, *warum* ich glaube – aber hast du gezeigt, *dass* ich irre?" Nutze Freuds eigenes Zugeständnis („nicht notwendig ein Irrtum") und C. S. Lewis' „Bulverismus".

**3. Die Symmetrie zeigen – freundlich.** Auch Unglaube hat Motive (Nagel, Huxley, Vitz). Ziel ist nicht, Atheisten zu psychologisieren, sondern die Psychologie beider Seiten beiseitezulegen.

**4. Zur Sache zurückführen.** „Lass uns über Gründe sprechen: Woher kommt das Universum? Woher die Moral? Was geschah mit Jesu Grab?" Der Glaube ist an einer Stelle prüfbar – an der Auferstehung (1 Kor 15,14).

**5. Bei Marx und der Machtfrage: Geschichte erzählen.** Die Propheten, das Magnifikat, die Kirchenväter gegen den Reichtum, die Märtyrer gegen die Kaiser, die Leipziger Friedensgebete 1989 – und die koptische Kirche als Kirche der Märtyrer, die nie geherrscht hat.

**Fallen:** Marx' Satz nie ohne Kontext zitieren lassen (der „Seufzer der bedrängten Kreatur" gehört dazu). Das falsche „Seneca-Zitat" über Religion als Herrschaftsmittel kennen (es stammt von Gibbon). Die Gesundheitsstudien nicht als Gottesbeweis verkaufen. Keine Gegen-Psychologisierung als Hauptargument verwenden.`,
  keyOpponents: [
    { name: 'Ludwig Feuerbach', role: 'Philosoph (1804–1872)', work: 'Das Wesen des Christentums (1841)' },
    { name: 'Karl Marx', role: 'Philosoph und Ökonom (1818–1883)', work: 'Zur Kritik der Hegel\'schen Rechtsphilosophie. Einleitung (1844)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse (1856–1939)', work: 'Die Zukunft einer Illusion (1927)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006); Viruses of the Mind (1993)' },
    { name: 'Daniel C. Dennett', role: 'Philosoph (1942–2024)', work: 'Breaking the Spell (2006)' },
    { name: 'Christopher Hitchens', role: 'Journalist und Autor (1949–2011)', work: 'God Is Not Great (2007)' },
  ],
  claims: [projektionFeuerbach, opiumDesVolkes, freudWunscherfuellung, religionAlsVirus, religionHerrschaftsinstrument],
};

export default topic;
