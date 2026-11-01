import type { Topic } from '../../../schema.ts';
import pascalsWette from './pascals-wette.ts';
import sehnsuchtBeweistNichts from './sehnsucht-beweist-nichts.ts';
import schoenheitEvolutionaer from './schoenheit-evolutionaer.ts';

const topic: Topic = {
  id: 'sehnsucht-schoenheit-wette',
  category: 'philosophie',
  group: 'Sinn & Existenz',
  order: 3,
  title: `Sehnsucht, Schönheit und Pascals Wette`,
  subtitle: `Die „Argumente des Herzens": Was sagen Verlangen, Schönheit und der Ernst der Entscheidung über Gott?`,
  icon: 'heart',
  overview: `Neben den „harten" Argumenten der Philosophie – Kosmologie, Kontingenz, Moral – gibt es eine Gruppe von Hinweisen, die eher das Herz ansprechen: die **unstillbare Sehnsucht** des Menschen (Augustinus: „Unruhig ist unser Herz, bis es ruht in dir"; C. S. Lewis' Argument aus dem Verlangen), die **Schönheit** der Welt, der Mathematik und der Kunst, und Pascals berühmte **Wette** über den Ernst der Gottesfrage. Atheistische Kritiker halten diese Argumente für besonders schwach: Wünsche erzeugen keine Gegenstände (John Beversluis gegen Lewis), Schönheit sei ein evolutionäres Signal (Denis Dutton, Steven Pinker, Geoffrey Miller), die Wette sei feige, beliebig und entscheidungstheoretisch kaputt (Diderot, Dawkins, Alan Hájek).

Ehrlich betrachtet gilt: Keines dieser Argumente ist ein zwingender Beweis, und niemand sollte sie so verwenden. Aber sie sind ernst zu nehmende Indizien in einem **kumulativen Fall** – und sie berühren den Gesprächspartner dort, wo rein logische Argumente oft nicht hinkommen. Bemerkenswert ist, wie viele Nichtgläubige die Phänomene selbst bezeugen: Bertrand Russell schrieb von einem „wilden Schmerz", einer Suche nach etwas jenseits der Welt; Julian Barnes: „Ich glaube nicht an Gott, aber ich vermisse ihn"; der Atheist Steven Weinberg widmete der Schönheit physikalischer Theorien ein ganzes Kapitel.

Die orthodoxe Tradition kennt diese Wege zu Gott seit jeher: Die Psalmen dürsten nach Gott (Ps 42; 63 wird in der Agpeya gebetet), die Septuaginta nennt die Schöpfung *kalon* – gut und schön –, Gregor von Nyssa beschreibt die ewige, unstillbare Sehnsucht nach dem Unendlichen, und die koptische Liturgie, Ikonographie und Hymnodie sind gelebte Theologie der Schönheit. Pascals Wette dagegen ist ein westlich-neuzeitliches Gedankenexperiment – nützlich als Weckruf, aber nicht als Fundament.`,
  strategy: `**1. Ehrlich einordnen.** Sag von Anfang an: „Das sind keine Beweise, sondern Hinweise." Das nimmt dem Gegenüber den Wind aus den Segeln und erhöht deine Glaubwürdigkeit.

**2. Sehnsucht: natürliches vs. künstliches Verlangen.** Der häufigste Einwand („Ich wünsche mir auch ein Einhorn") verfehlt Lewis' Argument. Unterscheide angeborene Bedürfnisse von erworbenen Wünschen. Dann frage persönlich: „Hat dich je etwas ganz erfüllt?"

**3. Schönheit: Zugeständnis plus Überschuss.** Gib zu, dass Evolution manche Vorlieben erklärt. Dann zeig den Überschuss: Mathematik, Kosmos, Bach, die Schönheit des Opfers. Höhepunkt: Warum führt mathematische Schönheit Physiker zur Wahrheit (Dirac, Wigner)?

**4. Pascals Wette: als Weckruf, nicht als Beweis.** Zeig, dass Pascal selbst wusste, dass man Glauben nicht beschließen kann, und dass sein Ziel das Suchen war. Gestehe die entscheidungstheoretischen Probleme ein.

**5. Zur Person Christi führen.** Alle drei Wege enden bei der Frage: Wer ist das Ziel der Sehnsucht, der Ursprung der Schönheit, der Einsatz der Wette? Christen antworten: der lebendige Gott, der sich in Jesus Christus gezeigt hat – eine Frage, die man historisch prüfen kann.

**Fallen:** Das Dostojewski-„Zitat" als wörtlich ausgeben; die Wette mit Höllendrohung verbinden; Atheisten innere Unzufriedenheit unterstellen; das Russell-Zitat als wörtlich geprüft bringen.`,
  keyOpponents: [
    { name: 'John Beversluis', role: 'Philosoph, Butler University', work: 'C. S. Lewis and the Search for Rational Religion (1985/2007)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Alan Hájek', role: 'Philosoph, Australian National University', work: '„Waging War on Pascal\'s Wager" (2003)' },
    { name: 'Denis Dutton', role: 'Kunstphilosoph (1944–2010)', work: 'The Art Instinct (2009)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'How the Mind Works (1997)' },
    { name: 'Ludwig Feuerbach', role: 'Philosoph (1804–1872)', work: 'Das Wesen des Christentums (1841)' },
  ],
  claims: [pascalsWette, sehnsuchtBeweistNichts, schoenheitEvolutionaer],
  newPeople: [
    {
      id: 'peter-kreeft',
      name: 'Peter Kreeft',
      years: 'geb. 1937',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Professor für Philosophie, Boston College',
      fields: ['Argument aus der Sehnsucht', 'Pascal', 'Apologetik', 'Himmel'],
      bio: 'Philosoph am Boston College und produktiver Autor allgemeinverständlicher Apologetik. Er hat C. S. Lewis\' Argument aus der Sehnsucht formalisiert und Pascals „Pensées" für heutige Leser kommentiert. Zusammen mit Ronald Tacelli verfasste er das „Handbook of Christian Apologetics".',
      keyWorks: ['Heaven: The Heart\'s Deepest Longing (1980)', 'Christianity for Modern Pagans (1993)', 'Handbook of Christian Apologetics (mit R. K. Tacelli, 1994)'],
      caveat: 'Katholischer Philosoph; herangezogen für Philosophie und Apologetik, nicht für Fragen, in denen sich katholische und koptische Lehre unterscheiden.',
    },
    {
      id: 'jeff-jordan',
      name: 'Jeff Jordan',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Religionsphilosoph, University of Delaware',
      fields: ['Pascals Wette', 'Pragmatische Argumente', 'Religionsphilosophie'],
      bio: 'Analytischer Religionsphilosoph, der sich besonders mit pragmatischen Argumenten für den Glauben befasst. Seine Monografie zu Pascals Wette gilt als eine der gründlichsten Verteidigungen gegen die modernen entscheidungstheoretischen Einwände.',
      keyWorks: ['Gambling on God: Essays on Pascal\'s Wager (Hg., 1994)', 'Pascal\'s Wager: Pragmatic Arguments and Belief in God (2006)'],
    },
  ],
};

export default topic;
