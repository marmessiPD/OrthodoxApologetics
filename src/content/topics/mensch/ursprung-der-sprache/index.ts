import type { Topic } from '../../../schema.ts';
import spracheGraduell from './sprache-graduell.ts';
import babelMythos from './babel-mythos.ts';
import tiereHabenSprache from './tiere-haben-sprache.ts';

const topic: Topic = {
  id: 'ursprung-der-sprache',
  category: 'mensch',
  group: 'Evolutionäre Psychologie & Anthropologie',
  order: 2,
  title: `Ursprung der Sprache`,
  subtitle: `Entstand Sprache aus Tierlauten? Ist Babel ein Mythos? Sprechen Affen und Papageien?`,
  icon: 'languages',
  overview: `Sprache ist das auffälligste Merkmal, das den Menschen von allen anderen Lebewesen unterscheidet – und ihr Ursprung gilt als eines der härtesten Probleme der Wissenschaft. Die Pariser Sprachwissenschaftliche Gesellschaft verbot 1866 sogar Vorträge zu diesem Thema, weil sie es für unbeantwortbar hielt. Heute wird wieder intensiv geforscht, aber die Lager sind tief gespalten: **Gradualisten** wie Steven Pinker, Michael Tomasello oder Daniel Everett sehen eine schrittweise Entwicklung aus Gesten, Rufen und sozialer Intelligenz; **Linguisten um Noam Chomsky** halten den Kern der Sprache – die Fähigkeit, Wörter zu unbegrenzt verschachtelten Strukturen zu verbinden – für etwas, das keine Zwischenstufen kennt und relativ plötzlich auftrat. 2014 kamen acht führende Forscher zu dem Schluss, die grundlegenden Fragen seien weitgehend ungeklärt.

Drei Einwände begegnen Christen häufig: Sprache sei **graduell aus Tierlauten** entstanden; der **Turmbau zu Babel** sei ein Mythos, weil sich Sprachen natürlich entwickelt haben; und **Menschenaffen und Papageien** zeigten, dass auch Tiere Sprache besitzen. Die Antworten verbinden ehrliche Wissenschaft mit der Theologie der Väter: Die Bibel sieht den Menschen als vernunftbegabtes Ebenbild des göttlichen „Wortes" (Joh 1,1), Gregor von Nyssa unterschied schon im 4. Jahrhundert die gottgegebene Sprachfähigkeit von den menschlich gebildeten Einzelsprachen, und Augustinus beschrieb ein „inneres Wort", das jeder Einzelsprache vorausgeht.

Wichtig ist Fairness: Tiere sind erstaunlich klug, Sprachen entwickeln sich tatsächlich allmählich, und Christen müssen weder die biologischen Grundlagen der Sprache noch die historische Linguistik bestreiten. Der Streitpunkt ist, ob die einzigartige Struktur menschlicher Sprache rein materialistisch erklärt ist – und ob Gen 11 als linguistische Theorie oder als Wahrheit über Gott und den Menschen gelesen werden will. Ergänzend: Der Claim „Der Mensch ist nur ein Tier" im Themenblock „Evolutionäre Psychologie".`,
  strategy: `**1. Mit dem Streit der Experten beginnen.** „Sprache entstand graduell" ist kein Konsens. Nenne Berwick und Chomsky – keine Kreationisten – und den Überblick von 2014, der den Ursprung der Sprache ein Mysterium nennt. Vereinnahme Chomsky aber nicht.

**2. Wörter von Sprache unterscheiden.** Viele Tiere lernen Wörter (Chaser, Alex, Kanzi). Sprache verlangt eine Grammatik, die unbegrenzt neue, verschachtelte Sätze erzeugt, Bezug auf Abwesendes und Abstraktes, Fragen und Erzählen.

**3. Die Asymmetrie zeigen.** Jahrzehnte Training bringen Affen auf Kleinkindniveau; gehörlose Kinder in Nicaragua erfanden ohne Vorbild eine Grammatik.

**4. Bei Babel den Text ernst nehmen.** Gen 10 kennt bereits die Ausbreitung der Völker „nach ihren Sprachen". Gen 11 handelt von Hochmut und Gnade (11,4 ↔ 12,2). Pfingsten ist die Antwort: Gott heiligt die Vielfalt.

**5. Zur Würde des Menschen führen.** Sprache drückt begriffliches Denken aus – das passt zum Menschen als Gottes Ebenbild. Daraus folgt Verantwortung, auch für die Tiere.

**Fallen:**
- FOXP2 ist kein „Sprachgen" – weder für noch gegen eine Seite verwenden.
- Nicht behaupten, alle Sprachen seien in einem Augenblick in Babel entstanden.
- Tiere und Forscher nicht herabsetzen; bei Neandertalern und dem Zeitpunkt Adams offen bleiben – kein Dogma.`,
  keyOpponents: [
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'The Language Instinct (1994); Pinker & Bloom (1990)' },
    { name: 'Michael Tomasello', role: 'Entwicklungs- und Vergleichspsychologe', work: 'Origins of Human Communication (2008)' },
    { name: 'Daniel L. Everett', role: 'Linguist, Bentley University', work: 'How Language Began (2017)' },
    { name: 'E. Sue Savage-Rumbaugh', role: 'Primatologin', work: 'Kanzi (1994)' },
    { name: 'Irene M. Pepperberg', role: 'Vergleichende Psychologin', work: 'The Alex Studies (1999)' },
    { name: 'Hermann Gunkel', role: 'Alttestamentler (1862–1932)', work: 'Genesis (1901)' },
  ],
  claims: [spracheGraduell, babelMythos, tiereHabenSprache],
  newPeople: [
    {
      id: 'kenneth-pike',
      name: 'Kenneth L. Pike',
      years: '1912–2000',
      era: 'modern',
      tradition: 'evangelisch',
      title: 'Linguist und Anthropologe, University of Michigan; langjähriger Präsident des Summer Institute of Linguistics (SIL)',
      fields: ['Linguistik', 'Feldforschung', 'Sprache und Ebenbild Gottes'],
      bio: 'Einer der einflussreichsten Feldlinguisten des 20. Jahrhunderts; entwickelte die Tagmemik und prägte die Begriffe „emisch" und „etisch", die in Linguistik und Anthropologie bis heute verwendet werden. Er leitete jahrzehntelang das Summer Institute of Linguistics, das Hunderte bis dahin unbeschriebene Sprachen erforschte. Als überzeugter Christ verband er Wissenschaft und Glauben und sah in der Sprachfähigkeit einen Ausdruck der menschlichen Würde.',
      keyWorks: ['Language in Relation to a Unified Theory of the Structure of Human Behavior (1954–1960)', 'With Heart and Mind: A Personal Synthesis of Scholarship and Devotion (1962)', 'Linguistic Concepts: An Introduction to Tagmemics (1982)'],
    },
    {
      id: 'mortimer-adler',
      name: 'Mortimer J. Adler',
      years: '1902–2001',
      era: 'modern',
      tradition: 'katholisch',
      title: 'Philosoph, University of Chicago; Herausgeber der „Great Books of the Western World"',
      fields: ['Philosophie des Menschen', 'Begriffliches Denken', 'Aristotelismus'],
      bio: 'Amerikanischer Philosoph und Bildungsreformer, der die aristotelisch-thomistische Tradition einem breiten Publikum zugänglich machte. In „The Difference of Man and the Difference It Makes" (1967) untersuchte er, ob sich Mensch und Tier im Grad oder in der Art unterscheiden, und argumentierte anhand des begrifflichen Denkens und der Sprache für einen Artunterschied. Adler wurde erst spät Christ: 1984 ließ er sich in der Episkopalkirche taufen, 1999 trat er der katholischen Kirche bei.',
      keyWorks: ['The Difference of Man and the Difference It Makes (1967)', 'How to Think About God (1980)', 'Ten Philosophical Mistakes (1985)'],
    },
  ],
};

export default topic;
