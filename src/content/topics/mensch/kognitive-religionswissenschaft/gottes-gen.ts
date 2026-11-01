import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gottes-gen',
  title: `„Es gibt ein Gottes-Gen (Hamer)."`,
  proponents: [
    { name: 'Dean Hamer', role: 'Genetiker, ehemals National Cancer Institute (NIH)', work: 'The God Gene: How Faith Is Hardwired into Our Genes (2004)' },
    { name: 'Matthew Alper', role: 'Autor', work: 'The „God" Part of the Brain (2001)' },
    { name: 'Jeffrey Kluger / Time Magazine', role: 'Wissenschaftsjournalist', work: 'Titelgeschichte „Is God in Our Genes?", Time (Oktober 2004)' },
  ],
  steelman: `Glaube ist Biologie. Der Genetiker Dean Hamer verglich Erbgutproben mit Fragebögen zur „Selbsttranszendenz" – der Neigung zu spirituellen Erfahrungen, zum Gefühl der Einheit mit dem Universum – und fand eine Variante des Gens VMAT2, die mit höheren Werten einherging. VMAT2 steuert den Transport von Botenstoffen wie Dopamin und Serotonin, also genau jener Chemie, die Glücksgefühle und mystische Zustände beeinflusst. Zwillingsstudien bestätigen: Religiosität ist zu einem erheblichen Teil erblich; eineiige Zwillinge ähneln sich darin deutlich mehr als zweieiige. Wenn Glaube in den Genen steckt, dann ist er ein biologisches Merkmal wie die Augenfarbe – ein evolutionär nützlicher Optimismus-Mechanismus, kein Erkenntnisorgan für Gott. Die einen haben das Gen, die anderen nicht; darum glauben die einen und die anderen nicht.`,
  biblical: {
    summary: `Die Bibel weiß, dass Gott den Menschen leiblich und mit all seinen Anlagen geschaffen hat: „Du hast mich gebildet im Mutterleibe" (Ps 139,13). Dass Temperament und Veranlagung auch erblich sind, widerspricht ihr nicht. Zugleich lehrt sie, dass Glaube nicht einfach vererbt wird: Die Kinder Gottes sind „nicht von dem Geblüt noch von dem Willen des Fleisches noch von dem Willen eines Mannes, sondern von Gott geboren" (Joh 1,13). Gott beurteilt jeden Menschen gerecht nach dem, was ihm gegeben ist: „Welchem viel gegeben ist, bei dem wird man viel suchen" (Lk 12,48).`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '139,13–14', status: 'paraphrase', quote: `Du hast meine Nieren bereitet und hast mich gebildet im Mutterleibe. Ich danke dir darüber, dass ich wunderbar gemacht bin.` },
      { kind: 'bibel', work: 'Johannes', ref: '1,12–13', quote: `Wie viele ihn aber aufnahmen, denen gab er Macht, Gottes Kinder zu werden, die an seinen Namen glauben; welche nicht von dem Geblüt noch von dem Willen des Fleisches noch von dem Willen eines Mannes, sondern von Gott geboren sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,48', status: 'paraphrase', quote: `Denn welchem viel gegeben ist, bei dem wird man viel suchen; und welchem viel befohlen ist, von dem wird man viel fordern.` },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass Glaube ein Geschenk der Gnade ist, das der freie Wille annimmt – Synergie. Niemand ist durch seine Natur zum Glauben gezwungen oder von ihm ausgeschlossen. Die Väter kannten die unterschiedlichen Temperamente der Menschen und lehrten, dass Gott jeden auf seinem eigenen Weg führt. Taufe und geistliches Leben sind keine Frage der Gene, sondern der Hinwendung zu Christus.`,
    sources: [
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Hamers „Gottes-Gen" wurde in einem populärwissenschaftlichen Buch vorgestellt, nicht in einer begutachteten Fachveröffentlichung, und nie unabhängig repliziert. Gemessen wurde nicht Gottesglaube, sondern „Selbsttranszendenz" auf einer Persönlichkeitsskala. Die Methode – ein einzelnes „Kandidatengen" mit einem komplexen Merkmal in Verbindung bringen – gilt heute weitgehend als unzuverlässig, nachdem viele solche Befunde in großen genomweiten Studien nicht bestätigt wurden. Zwillingsstudien zeigen eine moderate Erblichkeit mancher Aspekte von Religiosität im Erwachsenenalter, bei Jugendlichen dominiert der Einfluss der Familie. Erblichkeit beschreibt Unterschiede in einer Bevölkerung, nicht die Determination eines Einzelnen.`,
    detail: `- **Hamer (2004):** Zusammenhang einer Variante von VMAT2 mit Werten auf der „Self-Transcendence"-Skala von Cloningers Temperament- und Charakterinventar; nicht in einer Fachzeitschrift veröffentlicht.
- **Carl Zimmer** (Scientific American, Oktober 2004) kritisierte, der Buchtitel müsse eigentlich etwa lauten: „Ein Gen, das weniger als ein Prozent der Varianz in Fragebogenwerten zur Selbsttranszendenz erklärt … laut einer unveröffentlichten, nicht replizierten Studie."
- **Kandidatengen-Krise:** Für Depression etwa fanden Border u. a. (2019) in sehr großen Stichproben keine Bestätigung der historischen Kandidatengene – ein Lehrstück für die Unzuverlässigkeit dieser Methode.
- **Zwillingsstudien:** Koenig, McGue, Krueger & Bouchard (2005) fanden für die Religiosität im Erwachsenenalter eine deutlich höhere Erblichkeit als für die (rückblickend erfragte) Religiosität in der Jugend, in der das gemeinsame Familienumfeld überwog.`,
    sources: [
      { kind: 'gegner', author: 'Dean Hamer', work: 'The God Gene: How Faith Is Hardwired into Our Genes', year: '2004', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Carl Zimmer', work: 'Faith-boosting genes: A search for the genetic basis of spirituality', ref: 'Scientific American 291 (Oktober 2004)', year: '2004', status: 'paraphrase', note: 'Zimmers spöttischer „korrigierter Buchtitel" sinngemäß wiedergegeben; Wortlaut vor Zitierung prüfen.' },
      { kind: 'wissenschaft', author: 'R. Border, E. C. Johnson, L. M. Evans u. a.', work: 'No support for historical candidate gene or candidate gene-by-interaction hypotheses for major depression across multiple large samples', ref: 'American Journal of Psychiatry 176 (2019), 376–387', year: '2019', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'L. B. Koenig, M. McGue, R. F. Krueger, T. J. Bouchard Jr.', work: 'Genetic and environmental influences on religiousness: Findings for retrospective and current religiousness ratings', ref: 'Journal of Personality 73 (2005), 471–488', year: '2005', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das „Gottes-Gen" war die Schlagzeile eines Buches (Hamer 2004), keine wissenschaftliche Entdeckung: Die Studie wurde nie in einer Fachzeitschrift veröffentlicht oder unabhängig wiederholt, sie maß „Selbsttranszendenz" per Fragebogen statt Gottesglauben, und nach Kritikern wie dem Wissenschaftsjournalisten Carl Zimmer erklärte das Gen weniger als ein Prozent der Unterschiede. Zwillingsstudien zeigen, dass Persönlichkeitsanteile der Religiosität teilweise erblich sind – wie fast alles Menschliche, auch Musikalität und politische Einstellungen. Selbst wenn Gott unsere Anlagen nutzt, sagt das nichts gegen seine Existenz.`,
  keyPoints: [
    `**Kein Fachbefund:** Hamers Studie erschien in einem Buch, nicht in einer begutachteten Fachzeitschrift, und wurde nie repliziert.`,
    `**Falsches Messobjekt:** Gemessen wurde „Selbsttranszendenz" (eine Persönlichkeitsdimension), nicht Glaube an Gott.`,
    `**Winziger Effekt, überholte Methode:** Weniger als ein Prozent erklärter Varianz; einzelne „Kandidatengene" für komplexe Merkmale haben sich in großen Studien meist nicht bestätigt.`,
    `**Erblichkeit ist nicht Determination:** Zwillingsstudien beschreiben Bevölkerungsunterschiede; auch Mathematikbegabung ist teilweise erblich, ohne dass Mathematik eine Illusion wäre.`,
    `**Genetischer Fehlschluss:** Selbst eine genetische Grundlage der Religiosität sagt nichts darüber, ob Gott existiert.`,
    `**Biblisch kein Problem:** Gott bildet uns im Mutterleib (Ps 139) und beurteilt jeden nach dem, was ihm gegeben ist (Lk 12,48).`,
  ],
  voices: [
    {
      person: 'francis-collins',
      role: 'als Genetiker und ehemaliger Leiter des Humangenomprojekts',
      text: `Francis Collins kennt aus erster Hand, wie viele angeblich entdeckte „Gene für" komplexe Verhaltensweisen sich später als Irrtum herausstellten. Er betont, dass Gene bei menschlichem Verhalten Neigungen beeinflussen, aber nicht festlegen; Umwelt, Erziehung und freie Entscheidungen spielen eine große Rolle. In „The Language of God" argumentiert er zudem, dass selbst eine genetische Komponente religiöser Empfänglichkeit nicht gegen Gott spräche: Ein Schöpfer, der sich mit den Menschen in Beziehung setzen will, könnte ihnen gerade eine solche Empfänglichkeit mitgegeben haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God: A Scientist Presents Evidence for Belief', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Kritiker des Reduktionismus',
      text: `John Lennox kritisiert den „nichts-als"-Reduktionismus: Die Aussage, Glaube sei „nichts als" Genetik oder Neurochemie, ist keine wissenschaftliche Feststellung, sondern eine philosophische Behauptung. Wissenschaft könne Mechanismen beschreiben, aber Mechanismen schließen einen Urheber nicht aus. Wer aus einem genetischen Zusammenhang schließt, Gott existiere nicht, müsste mit derselben Logik schließen, dass auch der Atheismus – der ebenfalls genetische und neuronale Korrelate hätte – „nichts als" Biologie und damit ohne Wahrheitsanspruch sei.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über Temperament und Gnade',
      text: `C. S. Lewis behandelt in „Mere Christianity" (Buch IV, „Nice People or New Men") genau die Frage, dass Menschen mit sehr unterschiedlichem psychischem „Rohmaterial" geboren werden: Der eine ist von Natur aus freundlich und ausgeglichen, der andere ängstlich, reizbar oder schwermütig. Lewis betont, dass Gott jeden nach dem beurteilt, was er aus seinem Rohmaterial macht, und nicht nach dem Rohmaterial selbst. Ein verbitterter Mensch, der sich mühsam zur Freundlichkeit durchringt, kann in Gottes Augen weiter gekommen sein als ein von Natur aus netter Mensch. Unterschiedliche Anlagen sind für den christlichen Glauben also kein Problem, sondern längst bedacht.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch IV, Kap. 10', year: '1952', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin-barrett',
      role: 'als Kognitionswissenschaftler',
      text: `Justin Barrett weist darauf hin, dass Religiosität aus vielen alltäglichen kognitiven Fähigkeiten erwächst, die alle Menschen teilen – Akteurserkennung, Theory of Mind, Zweckdenken. Ein einzelnes „Gottes-Gen" passt nicht zu diesem Bild; eher sei die Empfänglichkeit für Gott im normalen Funktionieren des menschlichen Geistes verankert. Barrett sieht darin eine Bestätigung der christlichen Lehre, dass jeder Mensch für Gott offen ist – nicht nur eine genetisch begünstigte Minderheit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'vmat2',
      objection: `Menschen mit einer bestimmten Variante von VMAT2 haben höhere Spiritualitätswerte. Glaube ist genetisch programmiert.`,
      objectionBy: 'Dean Hamer',
      answer: `Diese Studie wurde nie in einer Fachzeitschrift veröffentlicht und nie unabhängig bestätigt. Sie maß nicht Gottesglauben, sondern „Selbsttranszendenz" auf einem Persönlichkeitsfragebogen. Und der Effekt war winzig – Kritiker sprachen von weniger als einem Prozent erklärter Varianz. Die Methode, ein einzelnes Kandidatengen mit einem komplexen Merkmal zu verbinden, hat sich in der Genetik insgesamt als sehr unzuverlässig erwiesen.`,
      questionsBack: [`Kennst du eine begutachtete, unabhängig replizierte Studie, die ein „Gottes-Gen" nachweist?`],
      followUps: [
        {
          id: 'zwillingsstudien',
          objection: `Selbst wenn VMAT2 nicht stimmt: Zwillingsstudien beweisen, dass Religiosität erblich ist. Man wird die Gene schon finden.`,
          objectionBy: 'Matthew Alper',
          answer: `Zwillingsstudien zeigen eine moderate Erblichkeit mancher Aspekte von Religiosität bei Erwachsenen; bei Jugendlichen überwiegt der Einfluss der Familie (Koenig u. a. 2005). Das gilt aber für fast alle menschlichen Merkmale, auch für politische Einstellungen oder Musikalität. Und Erblichkeit bedeutet: Ein Teil der *Unterschiede* in einer Bevölkerung hängt mit genetischen Unterschieden zusammen – nicht, dass ein Gen den Glauben eines Menschen festlegt.`,
          followUps: [
            {
              id: 'wie-haarfarbe',
              objection: `Wenn Glaube vererbt wird, ist er ein biologisches Merkmal wie die Haarfarbe – keine Erkenntnis.`,
              objectionBy: 'Matthew Alper',
              answer: `Auch mathematische Begabung ist teilweise erblich – deshalb ist Mathematik keine Illusion. Ob eine Überzeugung wahr ist, hängt nicht davon ab, ob die Fähigkeit dazu genetisch mitbedingt ist. Und wenn Glaube „nur Biologie" wäre, dann wäre auch Unglaube „nur Biologie" – und dein Argument hätte keinen Wahrheitsanspruch mehr.`,
            },
          ],
        },
        {
          id: 'kritik-nur-von-glaeubigen',
          objection: `Die Kritik an Hamer kommt doch vor allem von Gläubigen, denen das Ergebnis nicht passt.`,
          objectionBy: 'Dean Hamer',
          answer: `Nein, die schärfste Kritik kam aus der säkularen Wissenschaft – etwa vom Wissenschaftsjournalisten Carl Zimmer im Scientific American, der den Buchtitel mit beißendem Spott „korrigierte". Die Einwände betreffen Methode, Messinstrument und fehlende Replikation, nicht Weltanschauung.`,
        },
      ],
    },
    {
      id: 'evolutionaerer-trick',
      objection: `Hamer erklärt Spiritualität als evolutionären Trick: Sie macht optimistisch und gesünder und wurde deshalb selektiert. Eine nützliche Täuschung.`,
      objectionBy: 'Michael Shermer',
      answer: `Hamer selbst betonte nach eigenen Angaben, sein Buch handle davon, warum Menschen spirituell sind, nicht davon, ob es Gott gibt. Dass eine Fähigkeit nützlich ist, macht sie nicht zur Täuschung – auch unsere Fähigkeit zu sehen ist nützlich und zugleich auf Wirklichkeit gerichtet. „Nützlich, also falsch" ist kein gültiger Schluss.`,
      followUps: [
        {
          id: 'taeuschung-einfacher',
          objection: `Eine nützliche Täuschung ist trotzdem die einfachste Erklärung der Daten.`,
          objectionBy: 'Michael Shermer',
          answer: `Nur wenn man vorher weiß, dass es Gott nicht gibt. Sonst ist die Erklärung „Gott hat uns für sich empfänglich gemacht" genauso einfach. Und wenn evolutionärer Nutzen ein Wahrheitsbeweis gegen eine Überzeugung wäre, träfe das auch unsere Vernunft selbst – die Debatte darüber führt der Claim zur Kognitiven Religionswissenschaft.`,
          detail: `Siehe ‚kognitive-religionswissenschaft/religion-nebenprodukt' und A8, ‚naturalismus/vernunft-durch-evolution'.`,
        },
      ],
    },
    {
      id: 'unfair-gegenueber-ungenen',
      objection: `Wenn Glaube teilweise genetisch ist, wäre es unfair von Gott, Menschen mit „schlechten Glaubensgenen" zu verurteilen.`,
      objectionBy: 'Sam Harris',
      answer: `Die Bibel sagt selbst, dass Gott jeden nach dem beurteilt, was ihm gegeben wurde (Lk 12,48; Röm 2,14–16). Niemand ist durch seine Gene vom Glauben ausgeschlossen – Menschen jeden Temperaments sind Christen geworden, auch skeptische, schwermütige und rationale. C. S. Lewis hat das ausdrücklich bedacht: Gott sieht nicht auf das Rohmaterial, sondern darauf, was ein Mensch damit macht.`,
      followUps: [
        {
          id: 'gott-immer-gerecht',
          objection: `Wie praktisch – Gott ist immer gerecht, egal was die Daten sagen.`,
          objectionBy: 'Sam Harris',
          answer: `Der Grundsatz aus Lk 12,48 steht seit fast 2000 Jahren in der Bibel – er wurde nicht als Antwort auf die Genetik erfunden. Und Glaube ist mehr als ein Temperamentsmerkmal: Er umfasst Gründe, Entscheidungen und Vertrauen. Dass Menschen unterschiedliche Startbedingungen haben, gilt für jede Weltanschauung; das Christentum ist die, die das ausdrücklich in Gottes Gerechtigkeit einbezieht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `In welcher begutachteten Fachzeitschrift wurde das „Gottes-Gen" veröffentlicht?`,
    `Was genau hat Hamer gemessen – Glauben an Gott oder „Selbsttranszendenz"?`,
    `Wenn mathematische Begabung teilweise erblich ist – ist Mathematik dann eine Illusion?`,
    `Wenn Glaube „nur Gene" ist – gilt das dann auch für Unglauben?`,
  ],
  avoid: [
    `„Gott hat ein Gottes-Gen eingebaut, das beweist ihn." – Es gibt kein belegtes Gottes-Gen; dieses Argument fällt mit dem gegnerischen.`,
    `Zwillingsstudien pauschal ablehnen – sie sind eine etablierte Methode, nur ihre Deutung ist strittig.`,
  ],
  concessions: [
    `Persönlichkeitsmerkmale, die mit Religiosität zusammenhängen, sind teilweise erblich; Menschen haben unterschiedliche Veranlagungen zur Spiritualität.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Carl Zimmer', work: 'Faith-boosting genes', ref: 'Scientific American (Oktober 2004)', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Gottes-Gen', 'Hamer', 'VMAT2', 'Zwillingsstudien', 'Verhaltensgenetik'],
  related: [
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'neurowissenschaften/gotteserfahrung-hirnaktivitaet',
    'pluralismus/nur-christ-wegen-geburt',
  ],
};

export default claim;
