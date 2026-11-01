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
              followUps: [
                {
                  id: 'mathe-beweisbar',
                  objection: `Der Vergleich hinkt. Mathematik kann man beweisen, ihre Ergebnisse sind für jeden nachprüfbar. Für Gott gibt es keinen Beweis – deshalb bleibt bei ihm nur die biologische Erklärung übrig.`,
                  objectionBy: 'Daniel Dennett',
                  answer: `Damit hast du die Frage verschoben – und zwar an die richtige Stelle. Ob Gott existiert, entscheidet sich an Gründen: an der Existenz des Universums, an seiner Ordnung, an der Moral, an der Auferstehung Jesu. Die Genetik kann dazu nichts beitragen, weder dafür noch dagegen. Wenn du meinst, die Gründe taugen nichts, lass uns über die Gründe reden – aber dann brauchst du das Gottes-Gen nicht mehr.`,
                  detail: `Das Argument hat eine verborgene Struktur: (1) Für Gott gibt es keine guten Gründe. (2) Also muss man den Glauben anders erklären, etwa genetisch. Die Genetik ist hier nicht die Begründung, sondern nur der Nachtrag zu Prämisse (1). Wer mit dem Gottes-Gen argumentiert, setzt also voraus, was eigentlich zur Debatte steht. Für den Laien heißt das: Nicht über VMAT2 streiten, sondern freundlich zu den eigentlichen Argumenten zurückführen (siehe die Claims zu Kosmologie, Feinabstimmung und Auferstehung).

Außerdem ist auch in der Mathematik nicht alles beweisbar: Gödel zeigte, dass jedes hinreichend starke widerspruchsfreie System wahre Sätze enthält, die es selbst nicht beweisen kann. „Nur was beweisbar ist, ist rational" ist zu eng – auch für Naturwissenschaft, Geschichte und Ethik.`,
                  voices: [
                    {
                      person: 'swinburne',
                      role: 'als Religionsphilosoph',
                      text: `Richard Swinburne hat in „The Existence of God" ausführlich dargelegt, dass die Frage nach Gott wie jede große Erklärungsfrage nach Wahrscheinlichkeiten zu beurteilen ist: Welche Hypothese erklärt die Gesamtheit der Daten – dass es überhaupt etwas gibt, dass es geordnet ist, dass es bewusste und moralische Wesen gibt – am einfachsten? Ein solcher kumulativer Fall braucht keinen mathematischen Beweis, um vernünftig zu sein; er wird nach denselben Kriterien geprüft wie wissenschaftliche Theorien.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [`Angenommen, es gäbe gute Gründe für Gott – würde das Gottes-Gen dann noch irgendetwas gegen ihn beweisen?`],
                  followUps: [
                    {
                      id: 'gruende-rationalisierung',
                      objection: `Eure „Gründe" sind nachträgliche Rationalisierungen. Die Leute glauben, weil Gene und Elternhaus sie dazu disponieren – die Argumente suchen sie sich hinterher.`,
                      objectionBy: 'Robert Sapolsky',
                      answer: `Bei manchen Menschen mag das so sein – bei manchen Atheisten übrigens auch. Aber die These scheitert an den Fakten: Viele Menschen kommen gegen ihr Elternhaus und gegen ihr Temperament zum Glauben, etwa skeptische Akademiker, frühere Atheisten oder Millionen Erstchristen in China. Und vor allem: Wie jemand zu einer Überzeugung kam, entscheidet nicht, ob sie wahr ist. Das wäre der genetische Fehlschluss.`,
                      detail: `Die Zwillingsforschung selbst widerspricht einer Determination: Koenig u. a. (2005) fanden, dass in der Jugend das gemeinsame Familienumfeld überwiegt, im Erwachsenenalter genetische Einflüsse zunehmen – das heißt, Menschen entfernen sich von der Prägung ihres Elternhauses und entwickeln eigene Positionen, in beide Richtungen. Erblichkeitswerte um 0,3–0,4 lassen zudem den größten Teil der Unterschiede unerklärt.

Prominente Beispiele für Bekehrungen „gegen die Prägung": C. S. Lewis (atheistischer Oxford-Dozent), Antony Flew (zum Theismus), Francis Collins (Atheist im Medizinstudium). Einzelfälle beweisen nichts Statistisches – aber sie widerlegen die Behauptung, Gründe spielten grundsätzlich keine Rolle.

Wichtig: Die Rationalisierungs-These ist ein zweischneidiges Schwert. Wenn sie Glauben entwertet, entwertet sie auch Unglauben, denn auch Atheismus hat genetische und familiäre Korrelate.`,
                      voices: [
                        {
                          person: 'francis-collins',
                          role: 'als Genetiker, der selbst als Atheist begann',
                          text: `Francis Collins beschreibt in „The Language of God", wie er als junger Arzt und überzeugter Atheist von einer sterbenden Patientin nach seinem Glauben gefragt wurde und merkte, dass er die Argumente für Gott nie geprüft hatte. Er las daraufhin C. S. Lewis und kam über Gründe – das moralische Gesetz, die Verständlichkeit der Natur – zum Glauben. Seine eigene Biografie ist das Gegenteil einer genetisch oder familiär vorprogrammierten Bekehrung.`,
                          sources: [
                            { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 1', year: '2006', status: 'paraphrase' },
                          ],
                        },
                      ],
                      questionsBack: [`Gilt deine Rationalisierungs-These auch für deine eigenen Argumente gegen Gott – oder nur für die der anderen?`],
                    },
                  ],
                },
              ],
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
          followUps: [
            {
              id: 'hoelle-und-gene',
              objection: `Aber eure Kirche lehrt doch ein ewiges Gericht. Wer mit wenig Neigung zum Glauben geboren wird, hat schlechtere Karten – das bleibt ungerecht, egal wie oft du Lk 12,48 zitierst.`,
              objectionBy: 'Sam Harris',
              answer: `Die Kirche lehrt das Gericht – aber sie lehrt auch, wer richtet: Christus, der jedes Herz kennt, der für die Menschen gestorben ist und „will, dass allen Menschen geholfen werde" (1 Tim 2,4). Sie erklärt keinen einzelnen Menschen für verdammt. Wer ohne eigene Schuld weniger Licht hatte, wird nach diesem Licht beurteilt (Röm 2,14–16). Das Gericht ist nicht ein Test auf das richtige Temperament, sondern die Wahrheit darüber, wie ein Mensch auf das Gute geantwortet hat, das er erkennen konnte.`,
              detail: `Koptisch-orthodoxe Lehre: Es gibt Wiederkunft, Gericht, ewiges Leben und ewige Strafe; eine Allversöhnung ist kein Dogma. Zugleich ist das Urteil über einzelne Menschen allein Gott vorbehalten (1 Kor 4,5: „richtet nicht vor der Zeit"). Die Kirche betet für alle Menschen und für die Entschlafenen.

Der Einwand setzt zudem voraus, dass Glaube im Wesentlichen ein Temperamentsmerkmal ist. Das Neue Testament beschreibt Glauben aber als Antwort der ganzen Person auf Gottes Zuwendung – Gnade und freier Wille wirken zusammen (Synergie). Gott sucht jeden Menschen auf seinem Weg; das Gleichnis vom verlorenen Schaf (Lk 15) zeigt einen Hirten, der gerade dem schwer Erreichbaren nachgeht.

Ehrlich gesagt: Wie Gott jeden einzelnen Menschen genau beurteilt, wissen wir nicht im Detail. Wir wissen aber, *wer* urteilt – und dass er gerechter und barmherziger ist als wir.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '2,14–16', status: 'paraphrase', quote: `Die Heiden, die das Gesetz nicht haben, aber von Natur tun, was das Gesetz fordert, zeigen, dass des Gesetzes Werk in ihr Herz geschrieben ist; Gott wird das Verborgene der Menschen durch Jesus Christus richten.` },
                { kind: 'bibel', work: '1. Timotheus', ref: '2,4', quote: `welcher will, dass allen Menschen geholfen werde und sie zur Erkenntnis der Wahrheit kommen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              voices: [
                {
                  person: 'cs-lewis',
                  role: 'als Denker über Gericht und Gnade',
                  text: `C. S. Lewis betont in „Mere Christianity", dass wir nicht wissen, wie Gott mit Menschen verfährt, die Christus nie wirklich kennenlernen konnten; wir wissen nur, dass niemand ohne Christus gerettet wird, nicht aber, dass nur gerettet wird, wer ihn ausdrücklich kennt. Zugleich warnt er davor, Temperament mit Tugend zu verwechseln: Gott misst nicht das Rohmaterial, sondern die Antwort darauf.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch II, Kap. 5; Buch IV, Kap. 10', year: '1952', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [`Wenn deine Weltanschauung recht hat und Gene und Umwelt alles festlegen – auf welcher Grundlage nennst du dann überhaupt etwas „ungerecht"?`],
            },
          ],
        },
      ],
    },
    {
      id: 'polygen-statt-gottes-gen',
      objection: `Niemand Ernstzunehmendes sucht heute noch ein einzelnes Gottes-Gen. Religiosität ist polygen – Tausende Varianten mit winzigen Effekten, dazu Hormone, Erziehung, Kultur. Das Ergebnis ist dasselbe: Glaube ist vollständig biologisch und umweltbedingt erklärbar.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Einverstanden: Kein einzelnes Gen, sondern viele kleine Einflüsse – damit ist das „Gottes-Gen" als Schlagzeile erledigt. Aber „biologisch beeinflusst" ist nicht dasselbe wie „vollständig erklärt". Dieselben Mechanismen beeinflussen auch, ob jemand Physiker, Pazifist oder Atheist wird. Wenn das jede Überzeugung entwertet, entwertet es auch deine. Die Frage, ob Gott existiert, bleibt danach genau so offen wie vorher.`,
      detail: `Was die Forschung tatsächlich zeigt:
- **Zwillingsstudien:** moderate Erblichkeit einzelner Aspekte, z. B. der „intrinsischen" Religiosität (Bouchard u. a. 1999), mit großem Anteil nicht geteilter Umwelt – also persönlicher Erfahrungen und Entscheidungen.
- **Persönlichkeit:** Religiosität hängt im Mittel schwach mit Verträglichkeit und Gewissenhaftigkeit zusammen (Saroglou 2002, 2010). Das sind allgemein menschliche Eigenschaften, keine „Glaubensgene".
- **Polygenie** bedeutet gerade: Es gibt kein Merkmal „gläubig/ungläubig" im Erbgut, sondern allgemeine Neigungen, die in jede Richtung ausgestaltet werden können.

Sapolsky zieht in „Determined" (2023) die radikale Konsequenz, dass es überhaupt keinen freien Willen gibt. Das ist eine philosophische These, kein Messergebnis – und sie gilt dann für alle Überzeugungen gleichermaßen.`,
      sources: [
        { kind: 'gegner', author: 'Robert M. Sapolsky', work: 'Determined: A Science of Life Without Free Will', year: '2023', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'T. J. Bouchard Jr., M. McGue, D. Lykken, A. Tellegen', work: 'Intrinsic and extrinsic religiousness: Genetic and environmental influences and personality correlates', ref: 'Twin Research 2 (1999), 88–98', year: '1999', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Vassilis Saroglou', work: 'Religiousness as a cultural adaptation of basic traits: A five-factor model perspective', ref: 'Personality and Social Psychology Review 14 (2010), 108–125', year: '2010', status: 'paraphrase' },
      ],
      questionsBack: [`Gibt es irgendeine Überzeugung – deine eingeschlossen –, die nicht polygen und umweltbedingt mitbeeinflusst ist?`],
      followUps: [
        {
          id: 'sapolsky-konsequent',
          objection: `Genau – auch mein Atheismus ist determiniert. Ich bin da konsequent. Es gibt keinen freien Willen, für niemanden.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Das respektiere ich als ehrliche Konsequenz. Aber dann kannst du nicht mehr sagen, du glaubst an den Determinismus, *weil* die Argumente gut sind – du glaubst ihn, weil Gene und Umwelt dich dazu gebracht haben, so wie andere zum Glauben gebracht wurden. Damit sägst du am Ast, auf dem jede wissenschaftliche Überzeugung sitzt: Wir müssen Gründe abwägen können, sonst ist auch dein Buch nur ein Ereignis, kein Argument.`,
          detail: `Das ist das sogenannte **Argument aus der Vernunft** (C. S. Lewis, „Miracles", Kap. 3; Alvin Plantinga). Es behauptet nicht, Sapolsky sei unehrlich, sondern dass eine vollständig mechanistische Weltanschauung Schwierigkeiten hat zu erklären, wie Überzeugungen durch *Gründe* (logische Beziehungen) und nicht nur durch *Ursachen* (Neuronenfeuer) zustande kommen.

Die christliche Sicht ist keine Leugnung biologischer Einflüsse: Der Mensch ist ganz leiblich, Gene und Erziehung prägen ihn. Aber er ist als Bild Gottes mit Vernunft (*logos*) begabt, die Wahrheit erkennen und sich frei zu ihr verhalten kann.`,
          voices: [
            {
              person: 'cs-lewis',
              role: 'als Philosoph des Arguments aus der Vernunft',
              text: `C. S. Lewis formuliert in „Miracles" (Kap. 3, „The Cardinal Difficulty of Naturalism") den Gedanken, dass jede Theorie, die das menschliche Denken vollständig als Produkt vernunftloser Ursachen erklärt, sich selbst untergräbt: Wenn unsere Schlüsse nur Folgen physischer Ereignisse sind, haben wir keinen Grund, sie für wahr zu halten – auch nicht die Theorie selbst.`,
              sources: [
                { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study', ref: 'Kap. 3 (überarbeitete Ausgabe 1960)', year: '1947/1960', status: 'paraphrase' },
              ],
            },
          ],
          followUps: [
            {
              id: 'ursachen-und-gruende',
              objection: `Ursachen und Gründe schließen sich nicht aus. Ein Taschenrechner ist vollständig physikalisch verursacht und rechnet trotzdem richtig. Evolution hat unser Gehirn zu so einem Rechner gemacht.`,
              objectionBy: 'Daniel Dennett',
              answer: `Ein starker Einwand – und ich stimme zu, dass physische Prozesse Wahrheit abbilden können. Aber der Taschenrechner rechnet richtig, weil ein Verstand ihn so entworfen hat, dass er Wahrheit abbildet. Die Evolution dagegen belohnt nicht Wahrheit, sondern Überleben. Gerade deine Seite sagt ja, die Evolution habe uns falsche, aber nützliche Überzeugungen wie den Gottesglauben eingepflanzt. Dann ist die Frage berechtigt: Warum sollte ich dem übrigen Output desselben Gehirns trauen?`,
              detail: `Das ist Plantingas **evolutionäres Argument gegen den Naturalismus** (EAAN): Unter der Annahme von Naturalismus *und* ungelenkter Evolution ist die Wahrscheinlichkeit, dass unsere kognitiven Fähigkeiten zuverlässig auf Wahrheit ausgerichtet sind, entweder gering oder nicht abschätzbar. Der Theismus hat dieses Problem nicht: Ein Gott, der Menschen nach seinem Bild schafft, gibt ihnen eine Vernunft, die zur Wahrheit passt – das ist auch der Grund, warum die frühen Naturforscher erwarteten, die Natur sei verstehbar.

Fair bleiben: Das EAAN ist in der Philosophie umstritten; Naturalisten antworten, wahre Überzeugungen seien in der Regel nützlicher. Für das Gespräch genügt der Punkt: Wer Religion als „nützliche Täuschung der Evolution" erklärt, räumt selbst ein, dass Evolution Täuschungen hervorbringen kann – und braucht dann einen Grund, warum seine eigenen Überzeugungen davon ausgenommen sind.`,
              voices: [
                {
                  person: 'plantinga',
                  role: 'als Erkenntnistheoretiker',
                  text: `Alvin Plantinga argumentiert in „Where the Conflict Really Lies" (2011), dass der eigentliche Konflikt nicht zwischen Wissenschaft und Religion besteht, sondern zwischen Wissenschaft und Naturalismus. Wer glaubt, unser Denkvermögen sei allein durch eine Auslese auf Überlebensvorteil entstanden, hat einen Bezwinger (*defeater*) für das Vertrauen in dieses Denkvermögen – und damit auch für den Naturalismus selbst.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', ref: 'Kap. 10', year: '2011', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [`Wer hat das Gehirn als „Rechner" auf Wahrheit geeicht, wenn die Selektion nur auf Überleben achtet?`],
            },
          ],
        },
        {
          id: 'glaeubige-persoenlichkeitstyp',
          objection: `Die Persönlichkeitsforschung zeigt doch: Gläubige sind eher verträglich, gewissenhaft, wenig offen für Neues. Glaube ist einfach ein Persönlichkeitstyp.`,
          objectionBy: 'Michael Shermer',
          answer: `Die Zusammenhänge sind real, aber schwach – sie beschreiben Durchschnittswerte, keine Typen. In jeder Gemeinde findest du Introvertierte und Extravertierte, Ängstliche und Abenteurer, Künstler und Ingenieure. Und dass Glaube mit Verträglichkeit und Gewissenhaftigkeit einhergeht, spricht kaum gegen ihn. Die Frage bleibt: Ist er wahr?`,
          detail: `Saroglou (2002, Metaanalyse) fand für Religiosität kleine positive Zusammenhänge mit Verträglichkeit und Gewissenhaftigkeit; der Zusammenhang mit Offenheit hängt stark davon ab, wie Religiosität gemessen wird – bei „reifer", reflektierter Spiritualität ist er eher positiv, bei Fundamentalismus negativ. Ein einheitlicher „Gläubigen-Typ" ergibt sich daraus nicht.

Biblisch gehören sehr unterschiedliche Temperamente zum Volk Gottes: der impulsive Petrus, der zweifelnde Thomas, der gelehrte Paulus, der stille Johannes.`,
          sources: [
            { kind: 'wissenschaft', author: 'Vassilis Saroglou', work: 'Religion and the five factors of personality: A meta-analytic review', ref: 'Personality and Individual Differences 32 (2002), 15–25', year: '2002', status: 'paraphrase' },
          ],
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
