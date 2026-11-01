import type { Topic } from '../../../schema.ts';
import mathematikMenschlicheErfindung from './mathematik-menschliche-erfindung.ts';
import aktualUnendlicheVergangenheit from './aktual-unendliche-vergangenheit.ts';
import effektivitaetDerMathematikZufall from './effektivitaet-der-mathematik-zufall.ts';
import unwahrscheinlichesPassiertStaendig from './unwahrscheinliches-passiert-staendig.ts';
import goedelUndGott from './goedel-und-gott.ts';

const topic: Topic = {
  id: 'mathematik',
  category: 'kosmos',
  group: 'Mathematik & Logik',
  order: 1,
  title: `Mathematik und Logik`,
  subtitle: `Erfunden oder entdeckt? Unendlichkeit, Wigners Wunder, Wahrscheinlichkeit und Gödel`,
  icon: 'sigma',
  overview: `Die Mathematik ist das Feld, auf dem der Glaube an einen vernünftigen Schöpfer am unauffälligsten und zugleich am tiefsten wirkt. Drei große Rätsel stehen im Raum: **Was** ist mathematische Wahrheit (erfunden oder entdeckt)? **Warum** passt Mathematik, die Menschen oft aus reiner Neugier entwickelten, so präzise auf die Natur (Wigners „unvernünftige Wirksamkeit", Einsteins „ewig Unbegreifliches")? Und **wer** erkennt sie – ein Algorithmus aus Neuronen oder eine vernunftbegabte Seele?

Auf der Gegenseite stehen Kognitionswissenschaftler (Dehaene, Lakoff/Núñez), die Mathematik als Hirnprodukt erklären, Philosophen (Oppy, Morriston), die eine anfangslose Vergangenheit für denkbar halten, Statistiker (Hand, Sober), die Wahrscheinlichkeitsargumente für wertlos erklären, und Logiker (Franzén, Feferman), die zu Recht vor dem Missbrauch Gödels warnen. Viele dieser Einwände enthalten berechtigte Punkte – und gerade wer sie zugesteht, kann umso klarer zeigen, wo die naturalistische Erklärung an ihre Grenzen stößt.

Die christliche Tradition hat hier eine reiche Vorgeschichte: Clemens und Athanasius in Alexandrien sahen im Logos den Grund der Weltordnung; Johannes Philoponos argumentierte im 6. Jahrhundert gegen eine anfangslose Welt; Kepler, Pascal, Leibniz, Euler und Cantor verstanden ihre Mathematik als Nachdenken der Ordnung Gottes. Ihr gemeinsamer Gedanke: Welt und Verstand stammen aus derselben göttlichen Vernunft – deshalb ist die Welt begreiflich.`,
  strategy: `**Reihenfolge im Gespräch:**
1. **Zugeständnisse zuerst.** Gib zu, was stimmt: Notationen sind erfunden, das aktual Unendliche ist mathematisch widerspruchsfrei, Unwahrscheinlichkeit allein beweist nichts, Gödel beweist nicht Gott. Das entwaffnet und macht dich glaubwürdig.
2. **Dann unterscheiden.** Fast jeder Einwand lebt von einer Verwechslung: Notation vs. Wahrheit, mathematische Konsistenz vs. reale Möglichkeit, Unwahrscheinlichkeit vs. spezifizierte Unwahrscheinlichkeit, Beweiskraft vs. Bewusstsein.
3. **Dann die Erklärungsfrage stellen.** Nicht „Ich habe einen Beweis", sondern „Welche Weltsicht macht diese Fakten erwartbar?" – Begreiflichkeit der Welt, Erkennbarkeit abstrakter Wahrheit, Grenzen der Ressourcen des Universums.
4. **Den Logos ins Spiel bringen.** Joh 1,1–3 und Weish 11,20 als Rahmen: Die Welt ist rational, weil sie aus der göttlichen Vernunft stammt, und wir erkennen sie, weil wir nach Gottes Bild geschaffen sind.

**Fallen:**
- Keine Euler-Diderot-Anekdote, keine Zahlenmystik, kein „Gödel beweist Gott".
- Wahrscheinlichkeitszahlen nur nennen, wenn du ihre Herkunft und Annahmen erklären kannst.
- Einstein, Wigner, Penrose und Gödel nicht als Christen vereinnahmen – ihr Staunen wiegt gerade deshalb schwer, weil sie keine Apologeten waren.
- Bei Mathematikern: Fachbegriffe sauber verwenden (widerspruchsfrei, rekursiv axiomatisierbar, Standardmodell) oder ehrlich sagen, wo deine Kenntnis endet.`,
  keyOpponents: [
    { name: 'Stanislas Dehaene', role: 'Kognitiver Neurowissenschaftler, Collège de France', work: 'The Number Sense (1997)' },
    { name: 'George Lakoff & Rafael Núñez', role: 'Kognitionswissenschaftler', work: 'Where Mathematics Comes From (2000)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Philosophical Perspectives on Infinity (2006)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016); Debatte mit W. L. Craig (2014)' },
    { name: 'David J. Hand', role: 'Statistiker, Imperial College London', work: 'The Improbability Principle (2014)' },
    { name: 'Elliott Sober', role: 'Wissenschaftsphilosoph', work: 'Evidence and Evolution (2008)' },
    { name: 'Torkel Franzén', role: 'Logiker', work: 'Gödel\'s Theorem: An Incomplete Guide to Its Use and Abuse (2005)' },
    { name: 'Max Tegmark', role: 'Kosmologe, MIT', work: 'Our Mathematical Universe (2014)' },
  ],
  claims: [
    mathematikMenschlicheErfindung,
    aktualUnendlicheVergangenheit,
    effektivitaetDerMathematikZufall,
    unwahrscheinlichesPassiertStaendig,
    goedelUndGott,
  ],
  newPeople: [
    {
      id: 'johannes-philoponos',
      name: 'Johannes Philoponos',
      years: 'ca. 490–ca. 570',
      era: 'patristisch',
      tradition: 'christlich',
      title: 'Christlicher Philosoph und Aristoteles-Kommentator in Alexandrien',
      fields: ['Unendlichkeit', 'Anfang der Welt', 'Naturphilosophie'],
      bio: 'Alexandrinischer Gelehrter, der als Erster ausführlich philosophisch gegen die Ewigkeit der Welt argumentierte – gegen den Neuplatoniker Proklos (De aeternitate mundi contra Proclum, 529) und gegen Aristoteles. Seine Argumente, dass Unendliches weder durchlaufen noch vermehrt werden kann, wirkten über arabische Philosophen bis zum heutigen Kalam-Argument. Auch seine Kritik an der aristotelischen Bewegungslehre (Impetus) gilt als wegweisend.',
      keyWorks: ['De aeternitate mundi contra Proclum (529)', 'Contra Aristotelem (fragmentarisch)', 'De opificio mundi'],
      caveat: 'Philoponos war Miaphysit, vertrat aber später eine als Tritheismus verurteilte Trinitätslehre. Er ist keine Lehrautorität; seine philosophischen Argumente gegen eine anfangslose Welt sind davon unabhängig.',
    },
    {
      id: 'alexander-pruss',
      name: 'Alexander R. Pruss',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor für Philosophie, Baylor University',
      fields: ['Unendlichkeit', 'Kausalität', 'Modallogik', 'Kosmologisches Argument'],
      bio: 'Mathematiker (Promotion in Mathematik) und Philosoph, der zu Unendlichkeit, Wahrscheinlichkeit und Kausalität publiziert. Vertritt den „kausalen Finitismus", nach dem nichts eine unendliche kausale Vorgeschichte haben kann, und begründet ihn mit einer Familie von Unendlichkeitsparadoxien.',
      keyWorks: ['Infinity, Causation, and Paradox (2018)', 'The Principle of Sufficient Reason: A Reassessment (2006)'],
    },
    {
      id: 'john-lucas',
      name: 'J. R. Lucas',
      years: '1929–2020',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Philosoph, Fellow des Merton College, Oxford',
      fields: ['Gödel & Geist', 'Willensfreiheit', 'Philosophie der Zeit'],
      bio: 'Oxforder Philosoph und Christ, der 1961 mit „Minds, Machines and Gödel" die bis heute geführte Debatte eröffnete, ob Gödels Unvollständigkeitssätze zeigen, dass der menschliche Geist keine Maschine ist. Schrieb auch über Willensfreiheit und das Verhältnis von Gott und Zeit.',
      keyWorks: ['Minds, Machines and Gödel (1961)', 'The Freedom of the Will (1970)', 'The Future: An Essay on God, Temporality and Truth (1989)'],
      caveat: 'Seine starke These zu Gödel ist unter Logikern Minderheitsposition.',
    },
  ],
};

export default topic;
