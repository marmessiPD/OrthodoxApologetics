import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mensch-schimpanse-99-prozent',
  title: `„Mensch und Schimpanse sind zu 98–99 % identisch."`,
  proponents: [
    { name: 'Jared Diamond', role: 'Physiologe und Geograf, UCLA', work: 'The Third Chimpanzee (1991)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Ancestor\'s Tale (2004)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Chimpanzee Sequencing and Analysis Consortium', role: 'Internationales Forschungskonsortium', work: '„Initial sequence of the chimpanzee genome and comparison with the human genome", Nature 437 (2005)' },
  ],
  steelman: `Als 2005 das Schimpansengenom sequenziert wurde, zeigte sich: In den direkt vergleichbaren Abschnitten unterscheiden sich Mensch und Schimpanse nur in rund 1,2 % der Basen. Fast ein Drittel unserer Proteine ist mit dem des Schimpansen sogar völlig identisch. Kein anderes Tier steht uns näher – und die Abstufung der Ähnlichkeit zu Gorilla, Orang-Utan, Makak und Maus folgt exakt dem Stammbaum, den Anatomie und Fossilien unabhängig liefern. Die Zahl passt auch zur molekularen Uhr: Bei bekannter Mutationsrate ergibt sie eine Trennung vor etwa sechs bis sieben Millionen Jahren, genau dort, wo die ältesten Homininen-Fossilien liegen. Der Mensch ist, wie Jared Diamond sagte, der „dritte Schimpanse" – eine besondere Affenart, aber eine Affenart.`,
  biblical: {
    summary: `Die Bibel selbst betont die leibliche Verwandtschaft des Menschen mit den Tieren: Der Prediger stellt nüchtern fest, dass Mensch und Vieh denselben Odem haben und gleich sterben (Pred 3,19). Zugleich ist der Mensch „wenig niedriger gemacht denn Gott" und mit Ehre gekrönt (Ps 8,5–6). Die Schrift kennt also beides: Kontinuität im Leib und Einzigartigkeit in der Berufung. Eine hohe genetische Ähnlichkeit widerspricht ihr nicht.`,
    sources: [
      { kind: 'bibel', work: 'Prediger', ref: '3,19', translation: 'Luther 1912', status: 'paraphrase', quote: `Es geht dem Menschen wie dem Vieh: Wie dieses stirbt, so stirbt auch er, und sie haben alle denselben Odem.` },
      { kind: 'bibel', work: 'Psalmen', ref: '8,5–6', translation: 'Luther 1912', status: 'verbatim', quote: `was ist der Mensch, daß du sein gedenkst, und des Menschen Kind, daß du dich seiner annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt.` },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.` },
    ],
  },
  church: {
    summary: `Gregor von Nyssa beschreibt den Menschen als Wesen, das mit den Pflanzen das Wachsen, mit den Tieren die Sinneswahrnehmung teilt und darüber hinaus die Vernunft besitzt – eine Art „Bindeglied" der ganzen Schöpfung. Die Väter haben die Würde des Menschen nie in seiner stofflichen Zusammensetzung gesucht, sondern in der vernunftbegabten Seele und im Bild Gottes. Die koptische Kirche hält daran fest: Die genetische Nähe zu den Tieren ist kein Widerspruch zu dieser Würde.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8', status: 'paraphrase', quote: `Die Natur steigt gleichsam stufenweise auf: vom bloßen Leben der Pflanzen über das sinnenbegabte Leben der Tiere bis zum vernunftbegabten Menschen, der alle Stufen in sich vereint.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3', status: 'paraphrase', quote: `Gott schuf den Menschen nicht wie die vernunftlosen Tiere, sondern nach seinem Bild, mit Anteil an seinem Logos.` },
    ],
  },
  opposingView: {
    summary: `Die bekannte Zahl von etwa 98,8 % bezieht sich auf **Einzelbasen-Unterschiede in direkt alignierbaren Abschnitten** (rund 1,2 % Unterschied; Chimpanzee Sequencing Consortium 2005). Berücksichtigt man Insertionen und Deletionen, ergibt sich ein größerer Unterschied – Britten (PNAS 2002) kam auf rund 5 %. Neuere, vollständige („Telomer-zu-Telomer") Genome von Menschenaffen (Nature 2025) zeigen, dass strukturelle Unterschiede, Duplikationen und schwer alignierbare Regionen einen beträchtlichen Teil des Genoms betreffen; wie man sie in eine Prozentzahl übersetzt, hängt von der Methode ab. Unstrittig ist: Unter allen Lebewesen sind Schimpanse und Bonobo dem Menschen genetisch am nächsten.`,
    detail: `- Rund 1,2 % von etwa drei Milliarden Basen sind rund 35 Millionen Einzelbasen-Unterschiede, dazu Millionen Insertionen und Deletionen.
- Viele entscheidende Unterschiede liegen in der Genregulation – das vermuteten King & Wilson bereits 1975.
- Es gibt menschenspezifische Gene und Genkopien (z. B. SRGAP2C, NOTCH2NL), die mit der Gehirnentwicklung in Verbindung gebracht werden, sowie schnell evolvierende Regionen wie HAR1.
- Populäre Behauptungen wie „Wir teilen 50 % unserer DNA mit Bananen" sind irreführend vereinfacht.`,
    sources: [
      { kind: 'wissenschaft', author: 'The Chimpanzee Sequencing and Analysis Consortium', work: '„Initial sequence of the chimpanzee genome and comparison with the human genome", Nature 437', ref: 'S. 69–87', year: '2005', status: 'paraphrase', quote: `Einzelbasen-Substitutionen betreffen etwa 1,23 % der alignierten Sequenz; Insertionen und Deletionen tragen zusätzlich bei; etwa 29 % der orthologen Proteine sind identisch.` },
      { kind: 'wissenschaft', author: 'Roy J. Britten', work: '„Divergence between samples of chimpanzee and human DNA sequences is 5%, counting indels", PNAS 99 (21)', ref: 'S. 13633–13635', year: '2002', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'D. Yoo u. a.', work: '„Complete sequencing of ape genomes", Nature', year: '2025', status: 'unverified', note: 'Vollständige T2T-Genome mehrerer Menschenaffen; konkrete Prozentangaben zu strukturellen Unterschieden vor Verwendung im Original prüfen. Kreationistische Zahlen wie „nur 85 % Ähnlichkeit" beruhen oft auf abweichender Zählweise.' },
      { kind: 'wissenschaft', author: 'Mary-Claire King, Allan C. Wilson', work: '„Evolution at two levels in humans and chimpanzees", Science 188', ref: 'S. 107–116', year: '1975', status: 'paraphrase', quote: `Die großen organismischen Unterschiede bei geringer Proteinsequenz-Differenz deuten auf die Bedeutung regulatorischer Veränderungen hin.` },
    ],
  },
  quickAnswer: `Die 98–99 % beziehen sich nur auf Einzelbuchstaben in den direkt vergleichbaren Abschnitten. Zählt man Einschübe, Lücken und strukturelle Umbauten mit, ist der Unterschied deutlich größer – und selbst 1,2 % sind rund 35 Millionen Unterschiede. Aber die eigentliche Frage ist eine andere: Die Ähnlichkeit der Hardware sagt nichts darüber, warum nur einer von beiden Genome entschlüsselt, Symphonien komponiert und nach Gott fragt. Das Gottesbild steht nicht in der DNA.`,
  keyPoints: [
    `**Was die Zahl misst:** ca. 1,2 % Einzelbasen-Unterschied in alignierbaren Regionen (2005); mit Indels rund 5 % (Britten 2002); strukturelle Unterschiede kommen hinzu.`,
    `**Absolute Zahlen:** 1,2 % von drei Milliarden Basen sind rund 35 Millionen Unterschiede – plus Millionen Einschübe und Lücken.`,
    `**Regulation und neue Gene:** Viele Unterschiede liegen in der Regulation (King & Wilson 1975); menschenspezifische Genkopien wie SRGAP2C oder NOTCH2NL beeinflussen die Gehirnentwicklung.`,
    `**Ähnlichkeit ist zweideutig:** Sie passt zur gemeinsamen Abstammung, aber auch zu ähnlicher Funktion. Sie beweist keinen ungelenkten Prozess.`,
    `**Die Bibel kennt die Nähe:** Pred 3,19 – gleicher Odem; Gen 2,7 – aus Erde. Die Würde liegt im Bild Gottes, nicht im Prozentwert.`,
  ],
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Anthropologe der Väterzeit',
      text: `Gregor sieht im Menschen eine Zusammenfassung der Schöpfung: Er teilt mit den Pflanzen Wachstum und Ernährung, mit den Tieren Wahrnehmung und Begehren – und ragt durch die Vernunft über sie hinaus. Eine große Nähe des Menschen zu den Tieren im Leiblichen ist in dieser Sicht keine Kränkung, sondern Teil seiner Bestimmung, die ganze Schöpfung vor Gott zu bringen. Die Würde des Menschen liegt im Geist, der nach Gottes Bild geschaffen ist.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8; 16', status: 'paraphrase' },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Biologin',
      text: `Gauger weist darauf hin, dass Prozentangaben zur Ähnlichkeit stark von der Methode abhängen und dass gerade die Unterschiede in Regulation, Genaktivität und menschenspezifischen Genen erklärungsbedürftig sind. Aus ihrer Sicht ist entscheidend, ob die Zeit seit der vermuteten Trennung ausreicht, um durch Mutation und Selektion all die koordinierten Veränderungen hervorzubringen, die Anatomie, Gehirn und Sprache des Menschen erfordern.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (Position der theistischen Evolution)',
      text: `Collins hält die Ähnlichkeit für einen starken Beleg gemeinsamer Abstammung. Gerade deshalb betont er, dass sich die Einzigartigkeit des Menschen nicht genetisch begründen lässt: Das universale Moralgesetz und die Sehnsucht nach Gott seien Hinweise auf eine geistige Dimension, die keine DNA-Sequenz erklärt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Gottesbildes',
      text: `Für Athanasius unterscheidet sich der Mensch von den Tieren nicht durch seinen Stoff, sondern dadurch, dass Gott ihm Anteil an seinem Logos gab: Er kann Gott erkennen, die Ordnung der Welt betrachten und in Gemeinschaft mit seinem Schöpfer leben. Wer diese Fähigkeit in Prozentpunkten genetischer Ähnlichkeit messen will, verfehlt die Ebene, auf der sie liegt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '2', status: 'paraphrase', quote: `Gott schuf den Menschen nach seinem Bild, damit er durch die Ähnlichkeit mit ihm Gott betrachte und erkenne.` },
      ],
    },
  ],
  dialog: [
    {
      id: 'dritter-schimpanse',
      objection: `Wir sind zu 98–99 % Schimpansen – genetisch nur eine dritte Schimpansenart. Die Idee einer Sonderstellung des Menschen ist Eitelkeit.`,
      objectionBy: 'Jared Diamond',
      answer: `Die Zahl stimmt für Einzelbuchstaben in direkt vergleichbaren Abschnitten. Mit Einschüben, Lücken und strukturellen Umbauten liegt der Unterschied deutlich höher, und 1,2 % allein sind rund 35 Millionen Unterschiede. Vor allem aber: Die Sonderstellung des Menschen behauptet die Bibel nicht wegen seiner DNA, sondern wegen seines Geistes – und den sieht man an dem, was Menschen tun.`,
      followUps: [
        {
          id: 'egal-wie-gerechnet',
          objection: `Egal, wie man rechnet: Kein anderes Tier ist uns so nah, und die Abstufung zu Gorilla, Orang-Utan und Maus folgt dem Stammbaum. Das Muster ist das Argument.`,
          objectionBy: 'Jerry Coyne',
          answer: `Das gestehe ich zu: Das Muster ist real und passt zur gemeinsamen Abstammung. Aber genetische Nähe misst Ähnlichkeit von Molekülen, nicht die Fähigkeit zu abstraktem Denken, Sprache, Kunst und Gottesverehrung. Ein Computer und ein Taschenrechner bestehen aus sehr ähnlichen Bauteilen – das sagt wenig darüber, was sie können.`,
          followUps: [
            {
              id: 'kognition-genetisch-erklaert',
              objection: `Die kognitiven Unterschiede sind graduell und genetisch nachvollziehbar: HAR1, FOXP2, SRGAP2C, NOTCH2NL – wir kennen die Gene, die unser Gehirn vergrößert haben.`,
              objectionBy: 'Nathan Lents',
              answer: `Diese Gene sind faszinierend und beeinflussen Gehirnentwicklung und Sprache. Aber dass sie Voraussetzungen schaffen, heißt nicht, dass sie Bewusstsein, Wahrheitsfähigkeit oder Moral erklären. Bemerkenswert ist zudem, dass gerade einige dieser menschenspezifischen Gene durch besondere Duplikationen entstanden – das macht die Erklärung eher anspruchsvoller. Siehe auch die Claims zu Mensch und Tier und zum Bewusstsein.`,
              sources: [
                { kind: 'wissenschaft', author: 'Megan Y. Dennis u. a.', work: '„Evolution of human-specific neural SRGAP2 genes by incomplete segmental duplication", Cell 149', year: '2012', status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Katherine S. Pollard u. a.', work: '„An RNA gene expressed during cortical development evolved rapidly in humans", Nature 443', year: '2006', status: 'paraphrase' },
              ],
            },
          ],
        },
        {
          id: 't2t-zahlen-kreationistisch',
          objection: `Die angeblichen „85 %" aus den neuen T2T-Genomen sind kreationistische Verzerrungen. Sie zählen nicht-alignierbare Duplikate doppelt.`,
          objectionBy: 'Dennis Venema',
          answer: `Das kann gut sein, und ich vermeide solche Zahlen deshalb. Ich sage nur: Die Prozentzahl hängt von der Methode ab, und der vollständige Genomvergleich zeigt mehr strukturelle Unterschiede als die alte 98,8-%-Schlagzeile vermuten ließ. Mein Argument hängt aber gar nicht an der Prozentzahl – weder an 99 noch an 85.`,
        },
      ],
    },
    {
      id: 'aehnlichkeit-wie-vorhergesagt',
      objection: `Die Ähnlichkeit ist exakt so, wie die Evolution sie vorhersagt – einschließlich gemeinsamer Fehler wie Pseudogenen und Retroviren.`,
      objectionBy: 'Jerry Coyne',
      answer: `Ähnlichkeit allein würde auch ein gemeinsamer Bauplan für ähnliche Körper erwarten lassen – Menschen und Schimpansen haben ähnliche Organe, also ähnliche Gene. Bei den gemeinsamen „Fehlern" ist das Argument stärker; das bespreche ich im Claim zu Pseudogenen und ERVs ehrlich. Hier halte ich fest: Ähnlichkeit ist zweideutig.`,
      followUps: [
        {
          id: 'synonyme-mutationen',
          objection: `Gemeinsames Design erklärt nicht die neutralen Unterschiede, etwa synonyme Mutationen, die die Proteine nicht verändern – und trotzdem genau dem Stammbaum folgen.`,
          objectionBy: 'Kenneth Miller',
          answer: `Das ist ein gutes Argument, und ich gestehe es zu: Gerade funktionsneutrale Muster, die dem Baum folgen, sind durch Abstammung am einfachsten erklärt. Als Christ kann ich das anerkennen, ohne meinen Glauben aufzugeben – denn die Kirche hat über den biologischen Weg des Leibes kein Dogma formuliert. Unvereinbar mit dem Glauben ist erst die Behauptung, der Mensch sei nichts als dieser Weg.`,
        },
      ],
    },
    {
      id: 'wo-ist-die-seele',
      objection: `Wenn wir zu 99 % Affen sind, wo ist dann eure Seele? In dem einen Prozent?`,
      objectionBy: 'Richard Dawkins',
      answer: `Die Seele ist kein DNA-Abschnitt, also auch nicht in einem Prozent zu suchen. Sie ist nach christlichem Verständnis die geistige Lebensform des ganzen Menschen. Ihr Zeichen sieht man nicht im Genom, sondern daran, dass Menschen nach Wahrheit, Schönheit und Gerechtigkeit fragen – und dass du und ich hier über Genome diskutieren, während Schimpansen das nicht tun.`,
      followUps: [
        {
          id: 'seele-unbelegt',
          objection: `Die Seele ist eine unbelegte Annahme. Alles am Menschen ist Biologie.`,
          objectionBy: 'Jerry Coyne',
          answer: `Dass alles am Menschen Biologie ist, ist ebenfalls eine Annahme – eine philosophische. Bewusstsein, Intentionalität und die Fähigkeit, Gründe statt bloß Ursachen zu haben, sind bis heute nicht materialistisch erklärt. Und wenn unser Denken nur auf Überleben, nicht auf Wahrheit selektiert wäre, hätten wir keinen Grund, ihm beim Naturalismus zu trauen. Siehe die Claims zum Bewusstsein und zu Vernunft und Evolution.`,
        },
      ],
    },
    {
      id: 'molekulare-uhr-passt',
      objection: `Der genetische Abstand passt perfekt zur molekularen Uhr: Trennung vor sechs bis sieben Millionen Jahren – genau dort, wo die ältesten Homininen-Fossilien liegen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Die molekulare Uhr wird mit Fossilien und angenommenen Mutationsraten kalibriert; die Schätzungen schwanken je nach Annahmen erheblich. Aber ich bestreite das hohe Alter der Erde und der Fossilien nicht – die koptische Kirche hat kein Junge-Erde-Dogma. Die Frage ist nicht das Wann, sondern das Wie: Reicht diese Zeit für alle nötigen Veränderungen? Das bespreche ich beim Wartezeitproblem.`,
      followUps: [
        {
          id: 'zeit-reicht-locker',
          objection: `Sechs Millionen Jahre reichen locker – die Mutationsrate liefert genug Unterschiede.`,
          objectionBy: 'Larry Moran',
          answer: `Für die Zahl neutraler Unterschiede: ja, das gestehe ich zu. Die offene Frage betrifft gezielte, koordinierte Veränderungen, die neue Funktionen hervorbringen – für bestimmte Mutationspaare errechneten Durrett & Schmidt in der menschlichen Linie sehr lange Wartezeiten. Wie viele solcher Änderungen der Mensch braucht, ist unbekannt. Siehe das Wartezeitproblem.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Worauf genau bezieht sich die Zahl 98,8 % – und was passiert, wenn man Einschübe und strukturelle Unterschiede mitzählt?`,
    `Was sagt genetische Ähnlichkeit über Bewusstsein, Sprache und Moral aus?`,
    `Warum erforschen Menschen das Schimpansengenom und nicht umgekehrt?`,
    `Ist die Behauptung, alles am Menschen sei Biologie, ein Ergebnis der Biologie oder eine philosophische Annahme?`,
  ],
  avoid: [
    `Übertrieben niedrige Zahlen („nur 70 % ähnlich") ohne genaue Methode zitieren.`,
    `„Wir teilen ja auch 50 % mit Bananen" als Gegenargument – das ist selbst eine irreführende Vereinfachung.`,
    `Die hohe Ähnlichkeit bestreiten; sie ist real.`,
  ],
  concessions: [
    `In alignierbaren Regionen unterscheiden sich Mensch und Schimpanse nur in etwa 1,2 % der Basen; kein anderes Lebewesen steht uns genetisch näher.`,
    `Das Muster der Ähnlichkeiten passt zur gemeinsamen Abstammung, besonders bei funktionsneutralen Unterschieden.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'The Chimpanzee Sequencing and Analysis Consortium', work: 'Nature 437, 69–87', year: '2005', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Ajit Varki, Tasha K. Altheide', work: '„Comparing the human and chimpanzee genomes: searching for needles in a haystack", Genome Research 15', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Mensch und Schimpanse', 'Genomvergleich', 'Gottesbild', 'Seele', 'Molekulare Uhr'],
  related: [
    'genetik/pseudogene-ervs',
    'genetik/chromosom-2-fusion',
    'genetik/wartezeitproblem',
    'evolutionaere-psychologie/mensch-nur-tier',
    'naturalismus/bewusstsein-materiell-erklaerbar',
  ],
};

export default claim;
