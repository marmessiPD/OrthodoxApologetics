import type { Topic } from '../../../schema.ts';
import kalamWiderlegt from './kalam-widerlegt.ts';
import kontingenzTrugschluss from './kontingenz-trugschluss.ts';
import ontologischWortspiel from './ontologisch-wortspiel.ts';
import hoechstensDeismus from './hoechstens-deismus.ts';
import goettlicheVerborgenheit from './goettliche-verborgenheit.ts';

const topic: Topic = {
  id: 'gottesbeweise',
  category: 'philosophie',
  group: 'Atheismus & Gottesbeweise',
  order: 2,
  title: `Gottesbeweise unter Beschuss`,
  subtitle: `Kalam, Kontingenz, ontologisches Argument, Deismus-Einwand und die Verborgenheit Gottes`,
  icon: 'infinity',
  overview: `Die klassischen Gottesbeweise sind keineswegs „seit Kant erledigt". Seit den 1970er-Jahren erlebt die Religionsphilosophie eine bemerkenswerte Renaissance: Alvin Plantinga erneuerte das ontologische Argument mit den Mitteln der Modallogik, William Lane Craig belebte das kosmologische Kalam-Argument wieder, Alexander Pruss, Joshua Rasmussen und Edward Feser verteidigen das Kontingenzargument und den Satz vom zureichenden Grund auf höchstem Niveau. Zugleich haben atheistische Philosophen wie Graham Oppy, J. L. Schellenberg und Wes Morriston scharfsinnige Einwände entwickelt, und Physiker wie Sean Carroll und Lawrence Krauss bestreiten die kosmologischen Prämissen.

Dieser Themenblock behandelt die wichtigsten Argumente in der Reihenfolge, in der sie in Debatten fallen: das **Kalam-Argument** (hat das Universum einen Anfang und eine Ursache?), das **Kontingenzargument** (warum gibt es überhaupt etwas?), das **ontologische Argument** (ist Gott ein notwendiges Wesen?), den Einwand, all das führe **höchstens zu einem Deisten-Gott**, und das **Verborgenheitsargument** (warum zeigt sich Gott nicht eindeutig?). Die naturwissenschaftlichen Detailfragen – Urknall, Quantenkosmologie, Feinabstimmung – sind in den Themenblöcken der Kategorie Kosmos vertieft.

Bemerkenswert für koptische Leser: Das philosophische Herzstück des Kalam-Arguments stammt von dem alexandrinischen Christen Johannes Philoponos (529), und die östlichen Väter – Athanasius, Gregor der Theologe, Johannes von Damaskus – haben die Erkenntnis Gottes aus der Veränderlichkeit und Ordnung der Schöpfung gelehrt, zugleich aber betont, dass Gottes Wesen unbegreiflich bleibt und sich erst in Christus voll erschließt.`,
  strategy: `**1. Beginne mit dem Kontingenz- oder Kalam-Argument, nicht mit dem ontologischen.** Sie knüpfen an Alltagsintuitionen an („Aus nichts wird nichts", „Nichts ist einfach so da") und an Befunde, die jeder kennt.

**2. Nenne die Prämissen einzeln und frage: „Welche hältst du für falsch?"** So zwingst du das Gespräch weg von pauschalen Urteilen („widerlegt", „Trugschluss") hin zu konkreten Gründen.

**3. Kenne die Standard-Einwände:** Quantenereignisse, „Kausalität gilt nur im Universum", Kompositionsfehlschluss, BGV nur klassisch, Hilberts Hotel nur seltsam, B-Theorie der Zeit, „Wer schuf Gott?", Modalkollaps. Jeder hat eine Antwort im Dialogbaum.

**4. Kombiniere die Argumente.** Kalam braucht einen Anfang; das Kontingenzargument funktioniert auch ohne. Wenn das Gegenüber den Anfang bestreitet, wechsle zur Kontingenz.

**5. Sei ehrlich über die Grenzen.** Die Kosmologie jenseits der Planck-Zeit ist offen; das ontologische Argument ist umstritten; die Argumente führen zum Schöpfer, nicht unmittelbar zur Dreieinigkeit. Gerade diese Ehrlichkeit macht dich glaubwürdig.

**6. Führe zu Christus.** Der Einwand „höchstens Deismus" ist eine Einladung, über die Auferstehung zu sprechen (Apg 17,31). Und wenn jemand über Gottes Verborgenheit klagt, sprich über die Menschwerdung: Gott ist nicht verborgen geblieben, sondern gekommen.

**Fallen:** „Die Wissenschaft beweist Gott" (überzogen); „Alles hat eine Ursache" (lädt zu „Wer schuf Gott?" ein); Vilenkin oder Flew als Christen darstellen (falsch); bei der Verborgenheit dem Gegenüber unterstellen, es habe nicht ehrlich gesucht (verletzend).`,
  keyOpponents: [
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker, Johns Hopkins University', work: 'Debatte mit W. L. Craig (2014); The Big Picture (2016)' },
    { name: 'J. L. Schellenberg', role: 'Religionsphilosoph', work: 'Divine Hiddenness and Human Reason (1993)' },
    { name: 'Lawrence Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012)' },
    { name: 'Wes Morriston', role: 'Religionsphilosoph, University of Colorado', work: 'Aufsätze zur Kritik des Kalam-Arguments' },
    { name: 'J. L. Mackie', role: 'Philosoph, Oxford (1917–1981)', work: 'The Miracle of Theism (1982)' },
  ],
  claims: [kalamWiderlegt, kontingenzTrugschluss, ontologischWortspiel, hoechstensDeismus, goettlicheVerborgenheit],
  newPeople: [
    {
      id: 'johannes-philoponos',
      name: 'Johannes Philoponos (Johannes Grammatikos)',
      years: 'ca. 490–570',
      era: 'patristisch',
      tradition: 'orientalisch',
      title: 'Christlicher Philosoph und Aristoteles-Kommentator in Alexandrien',
      fields: ['Naturphilosophie', 'Anfang der Welt', 'Kosmologisches Argument'],
      bio: 'Alexandrinischer Gelehrter aus der Schule des Neuplatonikers Ammonios, der als einer der Ersten mit philosophischen Gründen gegen die aristotelisch-neuplatonische Lehre von der Ewigkeit der Welt argumentierte: Eine unendliche Reihe vergangener Ereignisse könne nicht durchlaufen worden sein. Er gehörte zur miaphysitischen (nicht-chalcedonensischen) Partei Alexandriens. Seine Argumente wirkten auf die arabische Kalam-Theologie und das lateinische Mittelalter.',
      keyWorks: ['Gegen Proklos über die Ewigkeit der Welt (De aeternitate mundi contra Proclum, 529)', 'Gegen Aristoteles über die Ewigkeit der Welt'],
      caveat: 'Philoponos vertrat in späteren Jahren eine Trinitätslehre, die als Tritheismus verworfen wurde – auch von den nicht-chalcedonensischen Kirchen. Er wird hier nur als Philosoph herangezogen, nicht als Lehrautorität.',
    },
    {
      id: 'alexander-pruss',
      name: 'Alexander R. Pruss',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph, Baylor University',
      fields: ['Satz vom zureichenden Grund', 'Kontingenzargument', 'Metaphysik', 'Unendlichkeit'],
      bio: 'Philosoph an der Baylor University (Texas) mit Ausbildung in Mathematik und Philosophie. Er hat die maßgebliche moderne Verteidigung des Satzes vom zureichenden Grund vorgelegt und das Kontingenzargument gegen die klassischen Einwände von Hume, Kant und van Inwagen verteidigt; zudem arbeitet er über Paradoxien des Unendlichen.',
      keyWorks: ['The Principle of Sufficient Reason: A Reassessment (2006)', 'Necessary Existence (2018, mit Joshua Rasmussen)', 'Infinity, Causation, and Paradox (2018)'],
    },
    {
      id: 'joshua-rasmussen',
      name: 'Joshua Rasmussen',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph, Azusa Pacific University',
      fields: ['Kontingenzargument', 'Notwendige Existenz', 'Religionsphilosophie'],
      bio: 'Religionsphilosoph, der in Fachaufsätzen und allgemeinverständlichen Büchern Argumente für ein notwendiges Fundament der Wirklichkeit entwickelt, die ohne den starken Satz vom zureichenden Grund auskommen.',
      keyWorks: ['Necessary Existence (2018, mit Alexander Pruss)', 'How Reason Can Lead to God (2019)'],
    },
    {
      id: 'robert-koons',
      name: 'Robert C. Koons',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph, University of Texas at Austin',
      fields: ['Kosmologisches Argument', 'Metaphysik', 'Unendlichkeit'],
      bio: 'Philosoph an der University of Texas at Austin mit Schwerpunkten in Metaphysik und Logik. Er entwickelte eine neue Fassung des kosmologischen Arguments und nutzt das „Grim-Reaper"-Paradox, um die Endlichkeit der kausalen Vergangenheit zu begründen.',
      keyWorks: ['„A New Look at the Cosmological Argument", American Philosophical Quarterly 34 (1997)', '„A New Kalam Argument: Revenge of the Grim Reaper", Noûs 48 (2014)'],
    },
    {
      id: 'michael-rea',
      name: 'Michael C. Rea',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'christlich',
      title: 'Philosoph, University of Notre Dame',
      fields: ['Verborgenheit Gottes', 'Analytische Theologie', 'Metaphysik'],
      bio: 'Religionsphilosoph und Mitbegründer der „analytischen Theologie". In seinem Buch über die Verborgenheit Gottes argumentiert er, dass göttliche Verborgenheit aus Gottes transzendenter Andersartigkeit verständlich wird und nicht als Lieblosigkeit gedeutet werden muss.',
      keyWorks: ['The Hiddenness of God (2018)', 'Analytic Theology (2009, Hg. mit Oliver Crisp)'],
    },
  ],
};

export default topic;
