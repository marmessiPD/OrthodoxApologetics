import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bewusstsein-materiell-erklaerbar',
  title: `„Bewusstsein lässt sich materialistisch erklären."`,
  proponents: [
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University (1942–2024)', work: 'Consciousness Explained (1991); From Bacteria to Bach and Back (2017)' },
    { name: 'Keith Frankish', role: 'Philosoph, University of Sheffield', work: '„Illusionism as a Theory of Consciousness", Journal of Consciousness Studies 23 (2016)' },
    { name: 'Patricia S. Churchland', role: 'Philosophin, University of California San Diego', work: 'Neurophilosophy (1986); Touching a Nerve (2013)' },
    { name: 'Anil Seth', role: 'Neurowissenschaftler, University of Sussex', work: 'Being You: A New Science of Consciousness (2021)' },
    { name: 'Alex Rosenberg', role: 'Wissenschaftsphilosoph, Duke University', work: 'The Atheist\'s Guide to Reality (2011), Kap. 8–9' },
  ],
  steelman: `Jeder bewusste Zustand hat ein neuronales Korrelat. Narkosemittel schalten das Bewusstsein ab, Hirnverletzungen verändern Persönlichkeit, Erinnerung und Moral, Elektroden im Gehirn erzeugen Empfindungen auf Knopfdruck. Das „schwere Problem" des Bewusstseins ist, so Daniel Dennett, eine Intuitionspumpe – so wie den Vitalisten das Leben unerklärlich schien, bis die Biochemie kam. Was wir „Qualia" nennen, existiert in der behaupteten Form gar nicht: Unser Gehirn erzeugt eine Benutzeroberfläche, die uns ein inneres Theater vorgaukelt (Frankish nennt das Illusionismus). Experimente zu Veränderungsblindheit und Konfabulation zeigen, wie gründlich wir uns über unser Inneres täuschen. Anil Seth schlägt vor, das „schwere Problem" nicht frontal anzugehen, sondern das „echte Problem" zu lösen: Stück für Stück erklären, wie bestimmte Hirnmechanismen bestimmte Erlebnisse hervorbringen – bis am Ende nichts Rätselhaftes übrig bleibt. Und die Fortschritte der künstlichen Intelligenz zeigen, dass Denken Informationsverarbeitung ist. Ein nichtmaterieller Geist ist eine überflüssige Hypothese mit unlösbarem Wechselwirkungsproblem.`,
  biblical: {
    summary: `Die Bibel sieht den Menschen als Einheit aus Staub und göttlichem Lebensatem (Gen 2,7), geschaffen nach Gottes Bild (Gen 1,27) – also als personales, erkennendes Wesen, das Gott, dem Geist, entspricht. Paulus beschreibt genau das, was Philosophen heute die „Erste-Person-Perspektive" nennen: „Welcher Mensch weiß, was im Menschen ist, als der Geist des Menschen, der in ihm ist?" (1 Kor 2,11). Jesus unterscheidet zwischen dem Leib, den Menschen töten können, und der Seele, die sie nicht töten können (Mt 10,28).`,
    detail: `- **Gen 1,27:** Die Gottebenbildlichkeit wird von den Vätern vor allem auf Vernunft, Freiheit und Gemeinschaftsfähigkeit bezogen – also auf Merkmale des Geistes.
- **Gen 2,7:** *nefesch chajjah* („lebendige Seele") bezeichnet den ganzen lebendigen Menschen; die Bibel denkt ganzheitlich, aber nicht materialistisch: Der Lebensatem kommt von Gott.
- **1 Kor 2,11:** Der „Geist des Menschen" weiß, was in ihm ist – ein privilegierter Innenzugang, den kein Außenstehender hat. Genau dieses „Wie es ist" ist der Kern des schweren Problems.
- **Spr 20,27:** „Eine Leuchte des HERRN ist des Menschen Geist" – der Geist als Licht, durch das der Mensch sich und Gott erkennt.
- **Vorsicht:** Die Bibel ist kein Lehrbuch der Philosophie des Geistes; sie lehrt aber, dass der Mensch mehr ist als sein Leib und den Tod in einem Zwischenzustand bei Gott überdauert (Lk 23,43; Phil 1,23).`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '2,11', quote: `Denn welcher Mensch weiß, was im Menschen ist, als der Geist des Menschen, der in ihm ist?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht können töten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '20,27', quote: `Eine Leuchte des HERRN ist des Menschen Geist; die geht durch alle Kammern des Leibes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '139,14', quote: `Ich danke dir darüber, daß ich wunderbar gemacht bin; wunderbar sind deine Werke, und das erkennt meine Seele wohl.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Lehre sieht den Menschen als Einheit von Leib und vernunftbegabter Seele, die von Gott geschaffen ist und nicht aus der Materie hervorgeht. Der hl. Kyrill von Alexandrien verwendet diese Einheit sogar als Bild für die Einheit von Gottheit und Menschheit in Christus: So wie Seele und Leib einen einzigen Menschen bilden, ohne sich zu vermischen, so ist Christus einer. Athanasius zeigt in „Gegen die Heiden", dass die Seele Tätigkeiten vollbringt, die der Leib allein nicht vermag. Gregor von Nyssa betont, dass der Geist nicht in einem einzelnen Organ eingeschlossen ist, sondern den ganzen Menschen durchdringt – er wirkt durch die Organe, ohne mit ihnen identisch zu sein.`,
    sources: [
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Succensus', status: 'paraphrase', quote: 'Wie aus Seele und Leib ein Mensch besteht, ohne dass beide sich vermischen, so ist der eine Christus aus Gottheit und Menschheit.' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '12–15', status: 'paraphrase', quote: 'Der Geist ist nicht in einem Teil des Körpers eingeschlossen, sondern wirkt im ganzen Menschen; die Organe sind seine Werkzeuge.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '31–33', status: 'paraphrase', quote: 'Die vernunftbegabte Seele urteilt über die Sinne und betrachtet Unsterbliches; sie ist vom Leib verschieden.' },
    ],
  },
  opposingView: {
    summary: `Der Stand der Bewusstseinsforschung ist offen. Die Neurowissenschaft hat enorme Fortschritte bei der Suche nach den neuronalen Korrelaten des Bewusstseins (NCC) gemacht; konkurrierende Theorien sind u. a. die Global-Workspace-Theorie (Baars, Dehaene), die Integrierte-Informations-Theorie (Tononi, Koch), Theorien höherer Ordnung und Predictive Processing (Seth). Keine hat sich durchgesetzt; ein direkter Vergleichstest zwischen Global Workspace und IIT brachte keine eindeutige Entscheidung. Philosophisch ist der Physikalismus die Mehrheitsposition (in der PhilPapers-Umfrage 2020 etwa die Hälfte), aber ein großer Teil der Fachphilosophen vertritt nichtphysikalistische Positionen. Auch prominente Atheisten (Thomas Nagel, David Chalmers, Galen Strawson, Philip Goff) halten den Materialismus für unzureichend.`,
    detail: `- **Das schwere Problem (Chalmers 1995):** Die „leichten" Probleme betreffen Funktionen (Unterscheiden, Berichten, Aufmerksamkeit); das „schwere" Problem fragt, warum diese Funktionen überhaupt von Erleben begleitet sind.
- **Die Wette:** 1998 wettete der Neurowissenschaftler Christof Koch mit David Chalmers, dass man binnen 25 Jahren eine klare neuronale Signatur des Bewusstseins finden werde. 2023 räumte Koch öffentlich ein, die Wette verloren zu haben.
- **Illusionismus** (Dennett, Frankish) ist eine Minderheitsposition, wird aber ernsthaft diskutiert; Kritiker – auch atheistische wie Galen Strawson – halten ihn für unhaltbar.
- **Ehrlich:** Dass Bewusstsein vom Gehirn abhängt, ist unbestritten. Strittig ist, ob es mit Gehirnvorgängen *identisch* ist oder sie nur voraussetzt.`,
    sources: [
      { kind: 'wissenschaft', author: 'David J. Chalmers', work: '„Facing Up to the Problem of Consciousness", Journal of Consciousness Studies 2/3', year: '1995', ref: 'S. 200–219', status: 'paraphrase', quote: 'Das wirklich schwere Problem des Bewusstseins ist das Problem des Erlebens: Warum ist die Informationsverarbeitung im Gehirn von subjektivem Erleben begleitet?', note: 'Chalmers ist kein Theist; er vertritt einen naturalistischen Dualismus.' },
      { kind: 'wissenschaft', author: 'Thomas Nagel', work: '„What Is It Like to Be a Bat?", Philosophical Review 83/4', year: '1974', ref: 'S. 435–450', quote: `an organism has conscious mental states if and only if there is something that it is like to be that organism – something it is like for the organism.`, status: 'verbatim' },
      { kind: 'sonstiges', work: 'Wette zwischen Christof Koch und David Chalmers (1998), von Koch 2023 als verloren eingeräumt', year: '1998/2023', status: 'paraphrase', quote: 'Binnen 25 Jahren wurde keine klare neuronale Signatur des Bewusstseins gefunden.' },
    ],
  },
  quickAnswer: `Dass das Bewusstsein vom Gehirn abhängt, bestreitet niemand – auch ein Pianist braucht ein Klavier. Aber Abhängigkeit ist nicht Identität. Das „schwere Problem" (David Chalmers) lautet: Warum *fühlt* sich überhaupt etwas irgendwie an? Physikalische Beschreibungen erfassen Strukturen und Funktionen, aber nicht, wie es *ist*, Schmerz zu empfinden oder Rot zu sehen (Thomas Nagel). Und Gedanken sind *über* etwas – Atome sind über nichts. Deshalb erklären manche Materialisten (Dennett, Frankish) das Erleben für eine Illusion. Aber eine Illusion ist selbst ein Erlebnis. Sogar der Atheist Galen Strawson nannte die Leugnung des Bewusstseins die wohl seltsamste Behauptung, die je aufgestellt wurde.`,
  keyPoints: [
    `**Korrelation ≠ Identität:** Dass jeder geistige Zustand ein Hirnkorrelat hat, erwartet auch der Dualist. Das Gehirn kann das Instrument des Geistes sein, wie das Klavier das des Pianisten.`,
    `**Das schwere Problem:** Alle physikalischen Erklärungen betreffen Struktur und Funktion. Warum diese Funktionen von Erleben begleitet sind, bleibt offen – auch nach vollständiger Erklärung aller Funktionen (Erklärungslücke, Levine 1983).`,
    `**Mary, die Farbforscherin (Jackson 1982):** Sie weiß alles Physikalische über Farbe, hat aber nie Rot gesehen. Wenn sie es zum ersten Mal sieht, lernt sie etwas Neues – also gibt es Tatsachen, die nicht physikalisch sind.`,
    `**Intentionalität (Brentano):** Gedanken handeln *von* etwas – von Paris, von Zahlen, von Einhörnern, die es nicht gibt. Materielle Zustände als solche handeln von nichts.`,
    `**Illusionismus widerlegt sich selbst:** Dass mir etwas als Erleben *erscheint*, ist bereits Erleben. Wer das Bewusstsein leugnet, leugnet das Gewisseste, was wir haben – das Medium aller Erkenntnis, auch der Neurowissenschaft.`,
    `**Bewusstsein weist auf Gott:** Wenn Geist am Anfang steht, sind endliche Geister zu erwarten. Wenn am Anfang nur blinde Materie steht, ist Bewusstsein eine tiefe Überraschung.`,
  ],
  argument: {
    name: 'Das Argument aus dem phänomenalen Bewusstsein',
    summary: 'Tatsachen über das Erleben folgen nicht aus physikalischen Tatsachen; also ist der Materialismus falsch.',
    premises: [
      {
        text: 'P1: Wenn der Materialismus wahr ist, dann folgen alle Tatsachen – auch die über das bewusste Erleben – aus den vollständigen physikalischen Tatsachen.',
        support: `Das ist die Kernthese des Physikalismus: Das Physikalische legt alles fest. Wenn zwei Welten physikalisch völlig gleich sind, müssen sie nach dem Physikalismus auch im Erleben gleich sein.`,
      },
      {
        text: 'P2: Die Tatsachen über das Erleben (wie es ist, Schmerz zu empfinden oder Rot zu sehen) folgen nicht aus noch so vollständigen physikalischen Tatsachen.',
        support: `(a) Jacksons Mary weiß alles Physikalische über Farbsehen und lernt trotzdem beim ersten Rot-Sehen etwas Neues. (b) Ein physikalisch exaktes Duplikat ohne Erleben (ein „Zombie") ist zumindest widerspruchsfrei denkbar. (c) Jede physikalische Erklärung erklärt Strukturen und Funktionen; die Frage, warum sie von Erleben begleitet sind, bleibt (Erklärungslücke).`,
        sources: [
          { kind: 'wissenschaft', author: 'Frank Jackson', work: '„Epiphenomenal Qualia", Philosophical Quarterly 32', year: '1982', ref: 'S. 127–136', status: 'paraphrase', quote: 'Das Gedankenexperiment der Farbwissenschaftlerin Mary, die alles Physikalische über Farbe weiß und doch beim ersten Sehen von Rot etwas lernt.', note: 'Jackson hat sein Argument später selbst aufgegeben und vertritt heute den Physikalismus.' },
          { kind: 'wissenschaft', author: 'Joseph Levine', work: '„Materialism and Qualia: The Explanatory Gap", Pacific Philosophical Quarterly 64', year: '1983', status: 'paraphrase', quote: 'Selbst wenn Schmerz mit einem Hirnzustand identisch wäre, bliebe unerklärt, warum dieser Zustand sich so anfühlt.' },
        ],
      },
    ],
    inferences: [
      'C1: Also ist der Materialismus falsch: Bewusstsein ist nicht vollständig physikalisch erklärbar.',
      'Zusatzargument (Moreland, Swinburne): Unter dem Theismus, nach dem ein Geist der Grund aller Wirklichkeit ist, ist das Entstehen endlicher Geister zu erwarten; unter dem Naturalismus, nach dem am Anfang nur geistlose Materie steht, ist es höchst überraschend. Also ist das Bewusstsein ein Beleg für Gott.',
    ],
    conclusion: 'Das Bewusstsein ist eine Wirklichkeit, die der Materialismus nicht erklären kann und die auf einen geistigen Ursprung der Welt verweist.',
  },
  voices: [
    {
      person: 'moreland',
      role: 'als Philosoph des Geistes',
      text: `Moreland hat das „Argument aus dem Bewusstsein" für Gottes Existenz ausgearbeitet. Bewusste Zustände – Empfindungen, Gedanken, Überzeugungen, Wünsche – haben Eigenschaften, die physikalische Zustände nicht haben: Sie sind privat, von innen zugänglich, gerichtet und qualitativ. Für den Naturalismus, bei dem die Welt aus geistloser Materie besteht, die nach physikalischen Gesetzen umgeordnet wird, ist das Auftreten solcher Zustände ein Rätsel ohne Lösung. Für den Theismus, bei dem am Anfang ein Geist steht, ist es zu erwarten. Moreland zeigt zudem, dass naturalistische Ausweichstrategien (Emergenz, Panpsychismus) entweder den Naturalismus aufgeben oder das Problem nur benennen.`,
      sources: [
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Consciousness and the Existence of God: A Theistic Argument', year: '2008', status: 'paraphrase', quote: 'Das Bewusstsein ist unter dem Theismus zu erwarten, unter dem Naturalismus nicht; naturalistische Alternativen scheitern.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph und Verteidiger des Substanzdualismus',
      text: `Swinburne argumentiert, dass eine vollständige Beschreibung der Welt nicht nur physikalische Ereignisse, sondern auch mentale Ereignisse und die Subjekte, die sie haben, enthalten muss. Aus der Tatsache, dass man sich widerspruchsfrei vorstellen kann, den eigenen Körper zu verlieren und weiterzuexistieren, schließt er, dass der Mensch wesentlich eine Seele ist, die einen Körper hat. Für Swinburne ist die regelmäßige Verbindung von Gehirnzuständen und Seelenzuständen selbst erklärungsbedürftig – und am besten erklärbar durch einen Schöpfer, der beides aufeinander abgestimmt hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase', quote: 'Verteidigung des Substanzdualismus und der Willensfreiheit gegen neurowissenschaftlichen Reduktionismus.' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'Kap. 9 (Argument aus Bewusstsein und Moral)', status: 'paraphrase', quote: 'Die Verbindung von Gehirn- und Geisteszuständen ist unter dem Theismus wahrscheinlicher als ohne ihn.' },
      ],
    },
    {
      person: 'eccles',
      role: 'als Neurophysiologe und Nobelpreisträger',
      text: `Eccles erhielt 1963 den Nobelpreis für die Erforschung der Signalübertragung an den Synapsen – er kannte das Gehirn also aus nächster Nähe. Gerade deshalb hielt er es für unmöglich, das Ich und seine Erlebnisse vollständig auf Nervenaktivität zurückzuführen. Mit dem Philosophen Karl Popper entwickelte er einen interaktionistischen Dualismus: Der selbstbewusste Geist wirkt auf das Gehirn ein und empfängt von ihm. Den Glauben, die Neurowissenschaft werde eines Tages alles Geistige als Nervenaktivität erklären, nannte er einen „promissorischen Materialismus" und einen Aberglauben.`,
      sources: [
        { kind: 'wissenschaft', author: 'Karl R. Popper & John C. Eccles', work: 'The Self and Its Brain: An Argument for Interactionism', year: '1977', status: 'paraphrase', quote: 'Interaktionistischer Dualismus von selbstbewusstem Geist und Gehirn.' },
        { kind: 'wissenschaft', author: 'John C. Eccles', work: 'Evolution of the Brain: Creation of the Self', year: '1989', status: 'paraphrase', quote: 'Der wissenschaftliche Reduktionismus, der in „promissorischem Materialismus" verspricht, einst alles Geistige durch Neuronenaktivität zu erklären, ist als Aberglaube einzustufen.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als analytischer Philosoph',
      text: `Plantinga hat mehrere Argumente gegen den Materialismus formuliert. Eines davon: Ein Gedanke hat einen Inhalt – er sagt etwas aus, das wahr oder falsch ist. Ein Gefüge von Neuronen hat elektrochemische Eigenschaften; es ist aber nicht zu sehen, wie diese Eigenschaften allein einen *Inhalt* ergeben sollen, also dass ein Neuronenmuster „bedeutet", dass Paris in Frankreich liegt. Plantinga vergleicht das mit der Vorstellung, eine Ansammlung von Billardkugeln könne von sich aus eine Überzeugung haben. Je genauer man sich die physikalischen Vorgänge vorstellt, desto weniger verständlich wird, wie daraus Denken entsteht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Against Materialism", Faith and Philosophy 23/1', year: '2006', status: 'paraphrase', quote: 'Argumente gegen die Identität von Personen und Gedanken mit materiellen Objekten und Zuständen.' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Kirchenvater und Anthropologe',
      text: `Gregor von Nyssa setzte sich bereits im 4. Jahrhundert mit der Frage auseinander, wo im Körper der Geist „sitze" – im Herzen oder im Gehirn. Er beobachtete, dass Hirnverletzungen und Krankheiten das Denken beeinträchtigen, schloss daraus aber nicht, dass der Geist das Gehirn sei. Vielmehr sei der Geist mit dem ganzen Menschen verbunden und gebrauche die Organe wie ein Musiker sein Instrument: Ist das Instrument beschädigt, klingt die Musik verzerrt, obwohl der Musiker derselbe bleibt. Damit nahm er die heutige Unterscheidung von Abhängigkeit und Identität vorweg.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '12–14', status: 'paraphrase', quote: 'Der Geist ist nicht an einen Ort im Körper gebunden; beschädigte Organe hindern sein Wirken wie ein verstimmtes Instrument den Musiker.' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Egnor berichtet aus jahrzehntelanger Praxis als Neurochirurg, dass Patienten nach der Entfernung großer Teile des Gehirns – bis hin zu einer ganzen Hirnhälfte – oft ihre Persönlichkeit, ihr abstraktes Denken und ihr Selbstbewusstsein behalten. Er verweist auf Wilder Penfield, der bei Hunderten wacher Patienten das Gehirn elektrisch stimulierte: Er konnte Bewegungen, Empfindungen und Erinnerungen auslösen, aber nie abstrakte Gedanken oder einen Willensakt. Für Egnor deutet dies darauf hin, dass das Gehirn notwendig, aber nicht hinreichend für den Geist ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Egnor & Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase', quote: 'Neurochirurgische Befunde (Penfield, Hemisphärektomie, Split-Brain) als Hinweise auf die Nichtreduzierbarkeit des Geistes.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'neuronale-korrelate',
      objection: `„Jeder Gedanke hat ein neuronales Korrelat. Narkose schaltet das Bewusstsein ab, Hirnschäden verändern die Persönlichkeit. Das Bewusstsein *ist* Gehirnaktivität."`,
      objectionBy: 'Patricia Churchland',
      targetsPremise: 1,
      answer: `Dass das Bewusstsein vom Gehirn abhängt, bestreite ich nicht – das erwartet auch der Dualist. Ein Pianist kann auf einem beschädigten Klavier nicht gut spielen, und ohne Klavier gar nicht; daraus folgt nicht, dass der Pianist das Klavier ist. Korrelation und Abhängigkeit sind etwas anderes als Identität. Die Frage ist, ob die Hirnvorgänge das Erleben *sind* oder nur seine Voraussetzung.`,
      detail: `Die neurowissenschaftlichen Befunde (Läsionen, Split-Brain, Libet, Nahtoderfahrungen) werden ausführlich im Themenblock „Geist und Gehirn" behandelt; hier geht es um die philosophische Frage.`,
      questionsBack: [`Welcher Befund würde zwischen „Bewusstsein ist das Gehirn" und „Bewusstsein braucht das Gehirn" unterscheiden?`],
      followUps: [
        {
          id: 'wasser-h2o',
          objection: `„Korrelation ist alles, was die Wissenschaft je hat. Auch dass Wasser H₂O ist, haben wir nur durch Korrelation entdeckt. Schmerz ist das Feuern bestimmter Neuronen – eine Identität, die wir empirisch entdecken."`,
          objectionBy: 'Patricia Churchland / Typ-B-Physikalisten',
          targetsPremise: 1,
          answer: `Bei Wasser erklärt die Molekularstruktur *alle* Eigenschaften, die wir mit Wasser verbinden – Nässe, Siedepunkt, Durchsichtigkeit; danach bleibt nichts übrig. Beim Bewusstsein ist es anders: Selbst wenn wir jede Funktion eines Hirnzustands erklärt haben, bleibt die Frage, warum er sich so *anfühlt*. Saul Kripke hat zudem gezeigt: Echte Identitäten sind notwendig – doch Schmerz ohne Nervenfeuern und Nervenfeuern ohne Schmerz sind widerspruchsfrei denkbar, anders als Wasser ohne H₂O, wenn man genau hinsieht.`,
          sources: [
            { kind: 'fachliteratur', author: 'Saul Kripke', work: 'Naming and Necessity', year: '1980', ref: 'Vorlesung III', status: 'paraphrase', quote: 'Identitäten wie „Wasser = H₂O" sind notwendig; die scheinbare Kontingenz von „Schmerz = C-Faser-Reizung" lässt sich nicht auf dieselbe Weise wegerklären.' },
          ],
          followUps: [
            {
              id: 'phaenomenale-begriffe',
              objection: `„Die Erklärungslücke liegt nur an unseren Begriffen. Wir haben zwei Arten, auf dasselbe zuzugreifen – von innen (phänomenale Begriffe) und von außen (physikalische Begriffe). Die Wirklichkeit ist eine."`,
              objectionBy: 'David Papineau / Brian Loar',
              targetsPremise: 2,
              answer: `Das ist die raffinierteste materialistische Antwort, und sie wird ernsthaft diskutiert. Aber sie verschiebt das Problem: Dann muss erklärt werden, warum es diese besonderen Innenbegriffe gibt und warum sie uns etwas Nichtphysikalisches zu zeigen scheinen. Entweder lassen sich die Innenbegriffe selbst physikalisch vollständig erklären – dann bleibt die Lücke bestehen, weil auch ein Zombie sie hätte. Oder nicht – dann sind sie das Nichtphysikalische, das wir erklären wollten.`,
              followUps: [
                {
                  id: 'vitalismus-analogie',
                  objection: `„Auch das Leben schien einst unerklärlich – man glaubte an eine Lebenskraft. Dann kam die Biochemie. Genauso wird es mit dem Bewusstsein gehen."`,
                  objectionBy: 'Patricia Churchland / Anil Seth',
                  answer: `Die Analogie hinkt an der entscheidenden Stelle. Beim Leben ging es um *Funktionen*: Stoffwechsel, Fortpflanzung, Wachstum – und Funktionen kann man durch Mechanismen erklären. Beim Bewusstsein geht es gerade nicht um eine Funktion, sondern um die Frage, warum Funktionen von Erleben begleitet sind. Wer verspricht, die künftige Wissenschaft werde es schon erklären, bietet keine Erklärung, sondern einen Wechsel auf die Zukunft – Popper nannte das „promissorischen Materialismus".`,
                  detail: `Bezeichnend: 1998 wettete der Neurowissenschaftler Christof Koch, man werde binnen 25 Jahren eine klare neuronale Signatur des Bewusstseins finden. 2023 gab er öffentlich zu, die Wette gegen David Chalmers verloren zu haben.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dennett-benutzerillusion',
      objection: `„Qualia, wie du sie dir vorstellst, gibt es nicht. Es gibt nur Informationsverarbeitung im Gehirn und unsere Berichte darüber. Das ‚innere Theater' ist eine Benutzerillusion."`,
      objectionBy: 'Daniel Dennett (Consciousness Explained, 1991)',
      targetsPremise: 2,
      answer: `Eine Illusion ist selbst ein Erlebnis: Damit mir etwas als „inneres Theater" erscheint, muss es jemanden geben, dem es erscheint. Beim Bewusstsein, so John Searle, *ist* der Anschein die Wirklichkeit – wenn es mir scheint, Schmerz zu haben, habe ich Schmerz. Wer das Erleben für eine Illusion erklärt, sägt den Ast ab, auf dem alle Erkenntnis sitzt.`,
      sources: [
        { kind: 'gegner', author: 'Daniel C. Dennett', work: 'Consciousness Explained', year: '1991', status: 'paraphrase', quote: 'Das cartesianische Theater gibt es nicht; Qualia im philosophischen Sinn existieren nicht; Bewusstsein ist eine Abfolge paralleler Entwürfe der Informationsverarbeitung.' },
        { kind: 'fachliteratur', author: 'John R. Searle', work: 'The Mystery of Consciousness', year: '1997', status: 'paraphrase', quote: 'Beim Bewusstsein ist das Vorhandensein des Anscheins die Wirklichkeit.' },
      ],
      followUps: [
        {
          id: 'frankish-illusionismus',
          objection: `„Nicht das Erleben ist illusorisch, sondern dass es *phänomenale* Eigenschaften zu haben *scheint*. Unsere Introspektion stellt Gehirnzustände fälschlich so dar, als hätten sie eine besondere Qualität. Das ist Illusionismus."`,
          objectionBy: 'Keith Frankish',
          targetsPremise: 2,
          answer: `Aber was heißt „es scheint"? Dass mir etwas auf eine bestimmte Weise *erscheint*, ist bereits ein phänomenaler Zustand – genau das, was erklärt werden sollte. Wer wird von der Illusion getäuscht? Wenn niemand erlebt, gibt es auch keine Täuschung. Der Atheist Galen Strawson nennt die Leugnung des Bewusstseins deshalb „die albernste Behauptung, die je aufgestellt wurde".`,
          sources: [
            { kind: 'gegner', author: 'Keith Frankish', work: '„Illusionism as a Theory of Consciousness", Journal of Consciousness Studies 23/11–12', year: '2016', status: 'paraphrase', quote: 'Phänomenales Bewusstsein ist eine introspektive Illusion; die Aufgabe ist, die Illusion zu erklären, nicht das Phänomen.' },
            { kind: 'fachliteratur', author: 'Galen Strawson', work: '„The Consciousness Deniers", NYR Daily (New York Review of Books online), 13. März 2018; Auszug aus: Things That Bother Me (2018)', year: '2018', quote: `Was ist die albernste Behauptung, die je aufgestellt wurde? Die Konkurrenz ist groß, aber ich denke, die Antwort ist einfach: Manche Menschen haben die Existenz des Bewusstseins geleugnet …`, original: 'What is the silliest claim ever made? The competition is fierce, but I think the answer is easy. Some people have denied the existence of consciousness …', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Eröffnungssätze des Essays; Wortlaut bei der Quellenprüfung (Nov. 2026) über mehrere unabhängige Wiedergaben bestätigt. Strawson ist Atheist und Physikalist eigener Prägung (Panpsychismus-nah); seine Kritik richtet sich v. a. gegen Dennett, der in der NYR (April 2018) erwiderte.' },
          ],
          followUps: [
            {
              id: 'intuitionen-irren',
              objection: `„Das ist nur deine Intuition. Intuitionen haben sich in der Wissenschaft immer wieder als falsch erwiesen – die Erde scheint flach, die Sonne scheint sich zu drehen."`,
              objectionBy: 'Keith Frankish / Daniel Dennett',
              targetsPremise: 2,
              answer: `Intuitionen über die Außenwelt werden durch andere Erfahrungen korrigiert – durch Beobachtungen, Messungen, Reisen. Aber jede Beobachtung ist selbst ein bewusstes Erleben. Wenn wir uns nicht einmal darauf verlassen können, dass wir erleben, können wir auch den Beobachtungen der Neurowissenschaft nicht trauen, auf die sich der Illusionismus stützt. Der Illusionismus untergräbt seine eigene Datengrundlage.`,
              followUps: [
                {
                  id: 'introspektion-unzuverlaessig',
                  objection: `„Experimente zu Veränderungsblindheit und Konfabulation zeigen doch, dass wir uns über unser Inneres massiv täuschen. Wir haben keinen privilegierten Zugang."`,
                  objectionBy: 'Daniel Dennett',
                  targetsPremise: 2,
                  answer: `Diese Experimente sind wichtig, und ich gebe zu: Wir täuschen uns oft über die *Inhalte* und *Ursachen* unseres Erlebens – was wir gesehen haben, warum wir etwas taten. Aber sie zeigen nicht, dass wir uns über die *Existenz* des Erlebens täuschen. Im Gegenteil: Veränderungsblindheit setzt voraus, dass es ein visuelles Erleben gibt, in dem die Veränderung fehlt. Fehler im Detail sind kein Beweis, dass das Ganze nicht existiert.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mary-lernt-nichts',
      objection: `„Mary lernt gar nichts Neues. Entweder erwirbt sie nur eine neue Fähigkeit – Rot wiederzuerkennen –, oder die Annahme, sie wisse *alles* Physikalische, ist unvorstellbar, und wir haben keine Ahnung, was sie dann wüsste."`,
      objectionBy: 'Daniel Dennett / David Lewis (Fähigkeitshypothese)',
      targetsPremise: 2,
      answer: `Mary erwirbt nicht nur eine Fähigkeit, sondern ein Wissen, *dass*: dass Rot so aussieht – *so*. Sie kann daraus Schlüsse ziehen, sich darüber täuschen, es anderen gegenüber vergleichen. Das ist Tatsachenwissen. Und der Einwand „Wir können uns vollständiges physikalisches Wissen nicht vorstellen" geht am Punkt vorbei: Physikalisches Wissen besteht aus Strukturen und Dynamiken, und keine noch so große Menge davon enthält, wie Rot aussieht.`,
      followUps: [
        {
          id: 'jackson-widerrufen',
          objection: `„Sogar Frank Jackson selbst hat sein Mary-Argument aufgegeben und ist Physikalist geworden. Warum benutzt du es noch?"`,
          objectionBy: 'Keith Frankish',
          targetsPremise: 2,
          answer: `Das stimmt, und es ist fair, das zu sagen. Aber ein Argument steht oder fällt mit seinen Prämissen, nicht mit der Meinung seines Urhebers. Jackson gab es vor allem auf, weil ihm die Folgen – ein Bewusstsein ohne Wirkung auf die Welt – untragbar erschienen; er wählte den Physikalismus, weil er die Alternative für schlimmer hielt, nicht weil er eine Prämisse widerlegt hätte. Viele Philosophen halten das Argument bis heute für eines der stärksten gegen den Physikalismus.`,
        },
      ],
    },
    {
      id: 'ki-versteht',
      objection: `„KI-Systeme wie große Sprachmodelle schreiben, übersetzen und argumentieren. Verstehen ist offensichtlich nur Informationsverarbeitung, und bald werden Maschinen bewusst sein."`,
      objectionBy: 'Daniel Dennett / KI-Optimisten',
      answer: `John Searles Gedankenexperiment vom „Chinesischen Zimmer" zeigt den Unterschied: Ein Mensch, der nach einem Regelbuch chinesische Zeichen manipuliert, kann perfekte Antworten produzieren, ohne ein Wort Chinesisch zu verstehen. Syntax – Symbolverarbeitung – ist keine Semantik – Bedeutung. Eine simulierte Gewitterwolke macht niemanden nass; eine Simulation von Verstehen ist noch kein Verstehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'John R. Searle', work: '„Minds, Brains, and Programs", Behavioral and Brain Sciences 3', year: '1980', ref: 'S. 417–424', status: 'paraphrase', quote: 'Das Chinesische Zimmer: Symbolmanipulation nach formalen Regeln erzeugt kein Verstehen.', note: 'Searle ist kein Theist; er hält Bewusstsein für eine biologische Eigenschaft des Gehirns.' },
      ],
      detail: `Siehe „KI wird Bewusstsein entwickeln – der Mensch ist nur ein Biocomputer".`,
      followUps: [
        {
          id: 'systemantwort',
          objection: `„Nicht der Mensch im Zimmer versteht Chinesisch, sondern das ganze System – Mensch, Regelbuch und Zettel zusammen."`,
          objectionBy: 'Daniel Dennett (Systemantwort)',
          answer: `Searles Antwort: Dann lasse der Mensch das Regelbuch auswendig lernen und alle Rechenschritte im Kopf ausführen – jetzt ist er das ganze System, und er versteht immer noch kein Chinesisch. Das Problem ist grundsätzlich: Symbole haben keine Bedeutung aus sich selbst; sie bedeuten etwas nur für einen Geist, der sie deutet. Gerade deshalb verweist Bedeutung auf Geist und nicht umgekehrt.`,
        },
      ],
    },
    {
      id: 'intentionalitaet-naturalisiert',
      objection: `„Intentionalität ist kein Rätsel. Ein Hirnzustand repräsentiert etwas, weil er kausal und evolutionär mit ihm verbunden ist – so wie Rauch Feuer anzeigt."`,
      objectionBy: 'Fred Dretske / Ruth Millikan (Teleosemantik)',
      targetsPremise: 2,
      answer: `Rauch „zeigt" Feuer an, aber er *meint* es nicht – das tut erst ein Geist, der Rauch als Zeichen deutet. Kausale Verbindungen erklären nicht, wie Gedanken einen genau bestimmten Inhalt haben, wie sie falsch sein können, und wie wir über Dinge denken können, die keine Ursachen haben: über Zahlen, über die Zukunft, über Einhörner, die es nicht gibt. Franz Brentano sah in dieser Gerichtetheit das Kennzeichen des Geistigen.`,
      followUps: [
        {
          id: 'rosenberg-keine-aboutness',
          objection: `„Dann gebe ich eben zu: Gedanken handeln von gar nichts. Das Gehirn tut alles, ohne über irgendetwas nachzudenken. ‚Aboutness' ist eine Illusion."`,
          objectionBy: 'Alex Rosenberg (The Atheist\'s Guide to Reality, Kap. 8)',
          targetsPremise: 2,
          answer: `Das ist konsequent – und es widerlegt sich selbst. Wenn Gedanken von nichts handeln, dann handelt auch dein Satz „Gedanken handeln von nichts" von nichts; er sagt nichts, kann weder wahr noch falsch sein, und du kannst mich nicht von ihm überzeugen. Rosenberg zeigt unfreiwillig, wohin der konsequente Materialismus führt: zur Leugnung der Vernunft selbst.`,
          detail: `Siehe „Die Evolution hat uns verlässliche Vernunft gegeben".`,
        },
      ],
    },
    {
      id: 'warum-gott-panpsychismus',
      objection: `„Selbst wenn der Materialismus Probleme hat: Warum sollte das für Gott sprechen? Eigenschaftsdualismus oder Panpsychismus sind auch möglich – Chalmers und Nagel sind keine Theisten."`,
      objectionBy: 'Graham Oppy / Philip Goff',
      answer: `Richtig: Das schwere Problem widerlegt zunächst nur den Materialismus. Aber dann stellt sich die Frage, welche Weltsicht das Bewusstsein am besten erklärt. Wenn am Anfang ein Geist steht, ist das Auftreten endlicher Geister zu erwarten. Wenn am Anfang nur geistlose Materie steht, ist es ein Wunder ohne Wundertäter. Selbst Thomas Nagel, ein Atheist, sah sich zu der These gedrängt, die Natur müsse auf Geist hin angelegt sein – das ist dem Theismus näher als dem Materialismus.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', status: 'paraphrase', quote: 'Der Materialismus kann Bewusstsein, Erkenntnis und Werte nicht erklären; Nagel erwägt eine natürliche Teleologie.', note: 'Nagel ist Atheist und lehnt den Theismus ausdrücklich ab.' },
      ],
      followUps: [
        {
          id: 'panpsychismus-ohne-gott',
          objection: `„Der Panpsychismus erklärt Bewusstsein ohne Gott: Bewusstsein ist eine Grundeigenschaft der Materie selbst, auf der Ebene der Teilchen."`,
          objectionBy: 'Philip Goff (Galileo\'s Error, 2019)',
          answer: `Der Panpsychismus gibt zu, dass der Materialismus gescheitert ist – das ist schon viel. Aber er hat sein eigenes großes Problem, das „Kombinationsproblem": Wie sollen sich Milliarden winziger Erlebnisfunken zu einem einzigen, einheitlichen Ich verbinden, das denkt, urteilt und liebt? Und warum sind die Grundeigenschaften der Welt so beschaffen, dass sie vernünftige, moralische Personen hervorbringen? Ein personaler Gott erklärt die Einheit und Vernunft des Geistes besser als bewusste Elektronen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn du alles über die Neuronen weißt, die beim Schmerz feuern – weißt du dann, wie sich Schmerz anfühlt?`,
    `Wenn das Bewusstsein eine Illusion ist: Wer erlebt die Illusion?`,
    `Wie kann ein Neuronenmuster *von* Paris handeln – oder von einer Zahl, die gar keine Ursache hat?`,
    `Welche neurowissenschaftliche Entdeckung würde das schwere Problem lösen – und nicht nur ein leichtes?`,
    `Ist es wahrscheinlicher, dass Geist aus geistloser Materie entsteht, oder dass Geist am Anfang steht?`,
  ],
  avoid: [
    `Die Neurowissenschaft abwerten oder Befunde bestreiten. Die Abhängigkeit des Geistes vom Gehirn ist real; die Frage ist ihre Deutung.`,
    `„Die Quantenphysik beweist das Bewusstsein" oder ähnliche Quantenmystik.`,
    `Mary, Zombies oder das Chinesische Zimmer als „Beweise" ausgeben – sie sind starke Argumente, aber umstritten.`,
    `Chalmers, Nagel oder Strawson als Christen oder Theisten darstellen – sie sind es nicht.`,
  ],
  concessions: [
    `Die Neurowissenschaft hat erstaunlich viel über die Abhängigkeit des Erlebens vom Gehirn herausgefunden; jede Weltsicht muss das ernst nehmen.`,
    `Wie Geist und Gehirn zusammenwirken, ist auch für Dualisten ungeklärt.`,
    `Frank Jackson hat sein Mary-Argument selbst aufgegeben; der Physikalismus ist unter Fachphilosophen die Mehrheitsposition.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Consciousness and the Existence of God', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David J. Chalmers', work: 'The Conscious Mind: In Search of a Fundamental Theory', year: '1996', status: 'paraphrase', note: 'Das Standardwerk zum schweren Problem, von einem Nicht-Theisten.' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos', year: '2012', status: 'paraphrase' },
    { kind: 'gegner', author: 'Daniel C. Dennett', work: 'Consciousness Explained', year: '1991', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Bewusstsein', 'Qualia', 'Schweres Problem', 'Intentionalität', 'Illusionismus', 'Dualismus'],
  related: [
    'neurowissenschaften/geist-gleich-gehirn',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
    'neurowissenschaften/split-brain',
    'informatik-ki/ki-wird-bewusst',
    'naturalismus/nur-materie',
    'naturalismus/vernunft-durch-evolution',
    'willensfreiheit/freier-wille-illusion',
    'evolutionaere-psychologie/mensch-nur-tier',
  ],
};

export default claim;
