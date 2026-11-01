import type { Topic } from '../../../schema.ts';
import evolutionIstTatsache from './evolution-ist-tatsache.ts';
import mutationSelektionErklaerenAlles from './mutation-selektion-erklaeren-alles.ts';
import nichtreduzierbareKomplexitaetWiderlegt from './nichtreduzierbare-komplexitaet-widerlegt.ts';
import neueProteineLeicht from './neue-proteine-leicht.ts';
import evolutionInAktion from './evolution-in-aktion.ts';
import schlechtesDesign from './schlechtes-design.ts';
import idKeineWissenschaft from './id-keine-wissenschaft.ts';

const topic: Topic = {
  id: 'evolution',
  category: 'leben',
  group: 'Evolutionsbiologie',
  order: 1,
  title: `Darwinsche Evolution`,
  subtitle: `Fakt, Theorie und Weltanschauung – was Mutation und Selektion leisten und was nicht`,
  icon: 'git-branch',
  overview: `Kaum ein Thema wird so emotional geführt wie die Evolution. Für Richard Dawkins oder Jerry Coyne ist sie so sicher wie die Bewegung der Erde um die Sonne – und wer zweifelt, gilt als ungebildet. Auf der anderen Seite stehen Biochemiker, Proteinforscher und Wissenschaftsphilosophen wie Michael Behe, Douglas Axe und Stephen Meyer (Intelligent Design), die nicht die Veränderung der Lebewesen bestreiten, sondern die Behauptung, ein **ungelenkter** Mechanismus aus Zufallsmutation und Selektion erkläre **alle** biologische Komplexität.

Entscheidend ist eine Unterscheidung, die selbst Stephen Jay Gould traf: zwischen dem **Faktum** der Veränderung, der **gemeinsamen Abstammung** und der **Theorie des Mechanismus**. Über den Mechanismus streiten auch nicht-religiöse Biologen – die Kontroverse um eine „Erweiterte Synthese" (Laland et al., *Nature* 2014; Royal Society 2016) zeigt das. Die stärksten Belege der Gegenseite – Resistenzbildung, das Lenski-Experiment, Übergangsformen, genetische Muster – sollen hier ehrlich dargestellt werden.

Unter Christen gibt es zwei Hauptlinien: die **theistische Evolution** (Francis Collins, Simon Conway Morris, Theodosius Dobzhansky, Dennis Venema), die den Mechanismus als Gottes Schöpfungsweise versteht, und **Intelligent Design**, das empirisch erkennbare Spuren von Planung sieht. Für die koptisch-orthodoxe Kirche ist der biologische Mechanismus **keine Dogmenfrage**. Verbindlich ist: Gott ist Schöpfer und Erhalter, der Mensch hat eine geistige Seele nach Gottes Bild, Adam und Eva sind reale Personen. Unvereinbar ist allein der **ungelenkte Materialismus**.`,
  strategy: `**1. Begriffe klären, bevor du argumentierst.** Frage: „Was meinst du mit Evolution?" Unterscheide (1) Veränderung, (2) gemeinsame Abstammung, (3) Hinlänglichkeit ungelenkter Mechanismen. Stimme (1) zu, lass (2) als Christ offen oder stimme zu – und konzentriere dich auf (3) und auf das Wort „ungelenkt".

**2. Zugeständnisse machen.** Gib offen zu, was belegt ist: Resistenzen, Lenskis Cit+, Übergangsformen, der Kehlkopfnerv als Indiz für Abstammung. Das nimmt dem Gegenüber den Wind aus den Segeln und macht dich glaubwürdig.

**3. Auf Zahlen lenken.** Der stärkste Boden ist quantitativ: Chloroquinresistenz (ca. 1 zu 10^20 Parasiten, mindestens zwei Mutationen), Seltenheit funktionaler Proteine (Axe), Wartezeiten (Durrett & Schmidt). Frage nach konkreten, nachgewiesenen Wegen.

**4. Die philosophische Ebene offenlegen.** „Ungelenkt" ist kein Messergebnis. Zitiere Gould (Fakt vs. Theorie), Lewontin (Verpflichtung auf den Materialismus), Plantinga (der Konflikt liegt zwischen Wissenschaft und Naturalismus).

**5. Innerchristlich fair bleiben.** Wenn ein Christ wie Venema oder Swamidass widerspricht: Gemeinsamkeiten betonen, die koptische Position (kein Dogma über den Mechanismus) erklären, die nicht verhandelbaren Punkte benennen.

**Fallen:** „Evolution ist nur eine Theorie" sagen; Beobachtetes bestreiten; Gould oder andere aus dem Zusammenhang zitieren; ID als Kirchenlehre ausgeben; sich auf das Dover-Urteil als „Fehlurteil" einschießen statt auf das Abgrenzungsproblem.`,
  keyOpponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Blind Watchmaker (1986); The Greatest Show on Earth (2009)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University; katholischer Kritiker von ID', work: 'Finding Darwin\'s God (1999); Only a Theory (2008)' },
    { name: 'Nicholas J. Matzke', role: 'Evolutionsbiologe, University of Auckland', work: 'Pallen & Matzke, Nature Reviews Microbiology (2006)' },
    { name: 'Nathan H. Lents', role: 'Biologe, CUNY', work: 'Human Errors (2018)' },
    { name: 'Larry Moran', role: 'Biochemiker, University of Toronto', work: 'What\'s in Your Genome? (2023)' },
    { name: 'Dan Stern Cardinale', role: 'Evolutionsbiologe, Wissenschaftskommunikator', work: 'Videokritiken zu ID' },
    { name: 'Dennis Venema', role: 'Biologe, Trinity Western University; evangelikaler Vertreter der theistischen Evolution', work: 'Adam and the Genome (2017, mit Scot McKnight)' },
    { name: 'S. Joshua Swamidass', role: 'Arzt und Computerbiologe, Washington University in St. Louis; Christ', work: 'The Genealogical Adam and Eve (2019)' },
  ],
  claims: [
    evolutionIstTatsache,
    mutationSelektionErklaerenAlles,
    nichtreduzierbareKomplexitaetWiderlegt,
    neueProteineLeicht,
    evolutionInAktion,
    schlechtesDesign,
    idKeineWissenschaft,
  ],
  newPeople: [
    {
      id: 'dobzhansky',
      name: 'Theodosius Dobzhansky',
      years: '1900–1975',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Genetiker und Evolutionsbiologe (u. a. Columbia University, Rockefeller University)',
      fields: ['Populationsgenetik', 'Evolutionsbiologie', 'Theistische Evolution'],
      bio: 'Im Russischen Reich geboren, emigrierte 1927 in die USA. Sein Buch „Genetics and the Origin of Species" (1937) gilt als Grundstein der Modernen Synthese. Er verstand sich als Christ der russisch-orthodoxen Tradition und sah in der Evolution Gottes Schöpfungsweise.',
      keyWorks: ['Genetics and the Origin of Species (1937)', '„Nothing in Biology Makes Sense Except in the Light of Evolution", The American Biology Teacher 35 (1973)'],
      caveat: 'Vertreter der theistischen Evolution, stark von Teilhard de Chardin beeinflusst; seine theologischen Ansichten sind nicht deckungsgleich mit koptischer Lehre. Er steht für eine innerchristliche Gegenposition zu Intelligent Design.',
    },
    {
      id: 'matti-leisola',
      name: 'Matti Leisola',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Professor emeritus für Bioverfahrenstechnik, Aalto-Universität (Finnland)',
      fields: ['Enzymtechnik', 'Proteinevolution', 'Bioprozesstechnik'],
      bio: 'Finnischer Biotechnologe, der jahrzehntelang über Enzyme und industrielle Bioprozesse forschte. Aus seiner Erfahrung mit der gezielten Veränderung von Enzymen gelangte er zu Zweifeln an der Leistungsfähigkeit ungelenkter Evolution und schilderte diesen Weg in einer Autobiografie.',
      keyWorks: ['Heretic: One Scientist\'s Journey from Darwin to Design (2018, mit Jonathan Witt)'],
    },
  ],
};

export default topic;
