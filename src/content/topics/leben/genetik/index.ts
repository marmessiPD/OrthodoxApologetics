import type { Topic } from '../../../schema.ts';
import junkDna from './junk-dna.ts';
import pseudogeneErvs from './pseudogene-ervs.ts';
import chromosom2Fusion from './chromosom-2-fusion.ts';
import menschSchimpanse99Prozent from './mensch-schimpanse-99-prozent.ts';
import adamEvaGenetischUnmoeglich from './adam-eva-genetisch-unmoeglich.ts';
import wartezeitproblem from './wartezeitproblem.ts';

const topic: Topic = {
  id: 'genetik',
  category: 'leben',
  group: 'Genetik & Genomik',
  order: 1,
  title: `Genetik und Genomik`,
  subtitle: `Junk-DNA, gemeinsame „Fehler", Chromosom 2, Adam und Eva – was das Genom wirklich sagt`,
  icon: 'dna',
  overview: `Seit der Entschlüsselung des menschlichen Genoms (2001) und des Schimpansengenoms (2005) stammen die stärksten Argumente der Gegenseite aus der Genetik: geteilte endogene Retroviren und Pseudogene an identischen Stellen, die Fusion von Chromosom 2, die hohe Ähnlichkeit zwischen Mensch und Schimpanse und populationsgenetische Rückrechnungen, nach denen die Menschheit nie auf zwei Individuen zurückging. Diese Argumente werden nicht nur von Atheisten wie Jerry Coyne vorgebracht, sondern auch von gläubigen Genetikern wie Francis Collins und Dennis Venema.

Ehrlichkeit ist hier besonders wichtig: Mehrere dieser Befunde – geteilte ERVs, die Chromosomenfusion – werden durch **gemeinsame Abstammung elegant erklärt**, und ein Christ verliert an Glaubwürdigkeit, wenn er das bestreitet. Zugleich gibt es echte offene Fragen: Wie viel unserer DNA ist funktional? Reicht die Zeit für die nötigen koordinierten Mutationen (Durrett & Schmidt 2008)? Und was schließt die Populationsgenetik in Bezug auf Adam und Eva tatsächlich aus?

Die koptisch-orthodoxe Perspektive gibt hier Freiheit und Halt zugleich: **Der Mechanismus der Entstehung des Leibes ist keine Dogmenfrage.** Verbindlich ist, dass der Mensch nach Gottes Bild mit einer geistigen Seele geschaffen ist und dass Adam und Eva reale Personen sind. Neuere Arbeiten – von Joshua Swamidass (genealogischer Adam), Ola Hössjer und Ann Gauger (Einzelpaar vor rund 500.000 Jahren) bis William Lane Craig – zeigen, dass die Genetik einen realen Adam nicht ausschließt.`,
  strategy: `**1. Zugeständnisse zuerst.** Gib bei ERVs, GULO und Chromosom 2 offen zu, dass gemeinsame Abstammung eine elegante Erklärung ist. Das macht dich glaubwürdig und verschiebt die Debatte auf das eigentliche Feld.

**2. Logische Reichweite klären.** Frage: „Was folgt daraus?" Gemeinsame Abstammung von DNA-Sequenzen widerlegt weder Gott als Schöpfer noch die geistige Seele noch Adam als reale Person. Das Gottesbild steht nicht im Genom (Athanasius, Gregor von Nyssa).

**3. Bei Adam und Eva präzise sein.** Die Genetik schließt nur ein Modell aus: ein junges Paar als einzige genetische Quelle ohne geschaffene Vielfalt. Nenne die drei offenen Modelle (genealogisch, tiefer Engpass, geschaffene Vielfalt) und verweise darauf, dass selbst Swamidass – ein Genetiker, der die Abstammung akzeptiert – einen realen Adam für vereinbar hält.

**4. Offene Fragen nutzen.** Junk-DNA und Wartezeiten sind echte Kontroversen. Hier kannst du offensiv fragen: „Woher weißt du, dass es Müll ist?" und „Wie viele Generationen – und wie viele koordinierte Änderungen?"

**Fallen:** mitochondriale Eva als Beleg verwenden; die Chromosomenfusion bestreiten; behaupten, Genetiker fälschten Daten; Adam als Symbol aufgeben; ein bestimmtes Datum zum Dogma machen; ENCODEs 80 % als Beweis zitieren.`,
  keyOpponents: [
    { name: 'Dennis Venema', role: 'Biologe, Trinity Western University; evangelikaler Christ (theistische Evolution)', work: 'Adam and the Genome (2017, mit Scot McKnight)' },
    { name: 'Francis S. Collins', role: 'Genetiker, Leiter des Humangenomprojekts; evangelikaler Christ', work: 'The Language of God (2006)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Larry Moran', role: 'Biochemiker, University of Toronto', work: 'What\'s in Your Genome? (2023)' },
    { name: 'Dan Graur', role: 'Molekularer Evolutionsbiologe, University of Houston', work: 'Kritik an ENCODE (2013)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University', work: 'Only a Theory (2008)' },
    { name: 'Nathan H. Lents', role: 'Biologe, CUNY', work: 'Human Errors (2018)' },
    { name: 'S. Joshua Swamidass', role: 'Computerbiologe, Washington University in St. Louis; Christ', work: 'The Genealogical Adam and Eve (2019)' },
  ],
  claims: [
    junkDna,
    pseudogeneErvs,
    chromosom2Fusion,
    menschSchimpanse99Prozent,
    adamEvaGenetischUnmoeglich,
    wartezeitproblem,
  ],
  newPeople: [
    {
      id: 'joshua-swamidass',
      name: 'S. Joshua Swamidass',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Arzt und Computerbiologe, Washington University in St. Louis; Gründer von „Peaceful Science"',
      fields: ['Computerbiologie', 'Genealogie und Populationsgenetik', 'Adam und Eva'],
      bio: 'Mediziner und promovierter Bioinformatiker, der zu maschinellem Lernen in Chemie und Biologie forscht. Als bekennender Christ entwickelte er das Modell eines „genealogischen Adam": Ein von Gott besonders erschaffenes Paar könne der genealogische Vorfahr aller heute lebenden Menschen sein, auch wenn die DNA vieler Vorfahren beigetragen hat. Er bemüht sich um ein friedliches Gespräch zwischen Christen, Atheisten und den verschiedenen christlichen Lagern.',
      keyWorks: ['The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry (2019)'],
      caveat: 'Swamidass akzeptiert die gemeinsame Abstammung auch des Menschen und ist ein Kritiker von Intelligent Design. Sein genealogisches Modell ist keine Lehre der koptischen Kirche, sondern eine von mehreren diskutierten Optionen.',
    },
    {
      id: 'jonathan-mclatchie',
      name: 'Jonathan McLatchie',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Biologe und christlicher Apologet, Discovery Institute',
      fields: ['Gemeinsame Abstammung', 'Endogene Retroviren', 'Design-Argumente', 'Apologetik'],
      bio: 'Britischer Biologe mit Promotion im Bereich der Evolutionsbiologie und engagierter christlicher Apologet. Er schreibt und debattiert zu Fragen der gemeinsamen Abstammung, zu genetischen Argumenten wie ERVs und Chromosom 2 sowie zu historischen Argumenten für die Auferstehung.',
    },
  ],
};

export default topic;
