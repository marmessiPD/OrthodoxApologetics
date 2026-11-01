import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ki-wird-bewusst',
  title: `„KI wird Bewusstsein entwickeln – der Mensch ist nur ein Biocomputer."`,
  proponents: [
    { name: 'Ray Kurzweil', role: 'Erfinder und Futurist, Google', work: 'How to Create a Mind (2012); The Singularity Is Nearer (2024)' },
    { name: 'Daniel C. Dennett', role: 'Philosoph des Geistes (Tufts University, gest. 2024)', work: 'Consciousness Explained (1991); From Bacteria to Bach and Back (2017)' },
    { name: 'Geoffrey Hinton', role: 'KI-Pionier, Nobelpreis für Physik 2024', work: 'Interviews und Vorträge 2023–2025' },
    { name: 'Yuval Noah Harari', role: 'Historiker, Hebrew University', work: 'Homo Deus (2016): „Organismen sind Algorithmen"' },
    { name: 'Max Tegmark', role: 'Physiker, MIT', work: 'Life 3.0 (2017)' },
  ],
  steelman: `Das Gehirn ist ein physikalisches System aus etwa 86 Milliarden Neuronen, das Information verarbeitet. Nach dem computationalen Funktionalismus – der Arbeitshypothese großer Teile der Kognitionswissenschaft – sind geistige Zustände durch ihre funktionale Rolle bestimmt, nicht durch das Material: Wer dieselbe Berechnung in Silizium ausführt, hat denselben Geist. Große Sprachmodelle schreiben Gedichte, programmieren, bestehen juristische Examen und erreichten 2025 Goldniveau bei der Mathematik-Olympiade; Interpretierbarkeitsforschung findet in ihnen interne Weltmodelle. Ein Expertenbericht (Butlin, Long u. a. 2023) kam zu dem Schluss, dass zwar kein heutiges System ein starker Kandidat für Bewusstsein ist, es aber keine offensichtlichen technischen Hürden gibt, solche Systeme zu bauen. Die „Seele" ist ein Lückenbüßer: Jede geistige Funktion korreliert mit Hirnaktivität. Wer Maschinen grundsätzlich Bewusstsein abspricht, betreibt Kohlenstoff-Chauvinismus – und riskiert, eines Tages fühlende Wesen als Sachen zu behandeln.`,
  biblical: {
    summary: `Nach der Schrift ist der Mensch weder bloße Materie noch bloßer Geist: Gott formte ihn aus dem Staub der Erde **und** blies ihm den Odem des Lebens ein, „und also ward der Mensch eine lebendige Seele" (Gen 2,7). Er ist nach Gottes Bild geschaffen (Gen 1,27) – mit Vernunft, Freiheit und der Fähigkeit zur Gemeinschaft mit Gott. Die Bibel warnt zugleich vor der Versuchung, menschengemachten Bildern Leben zuzuschreiben: Götzen „haben Mäuler und reden nicht", und „die solche machen, sind ihnen gleich" (Ps 115,4–8). Wer sein eigenes Werk vergöttert, wird ihm ähnlich – er beginnt, sich selbst als Maschine zu sehen.`,
    detail: `- **Gen 2,7**: Hebräisch *nefesch chajah* („lebendige Seele") bezeichnet den Menschen als belebte Einheit. Der Mensch *hat* nicht nur einen Körper, er ist beseelter Leib.
- **1 Kor 2,11**: „Welcher Mensch weiß, was im Menschen ist, als der Geist des Menschen, der in ihm ist?" – das Innere des Menschen ist eine Perspektive der ersten Person, nicht nur ein äußerlich messbarer Zustand.
- **Ps 115 / Hab 2,18–19**: Die prophetische Götzenkritik richtet sich nicht gegen Handwerk, sondern gegen die Verwechslung von Werk und Leben. Habakuk spottet über den, der „zum Holz spricht: Wache auf!".
- **Missverständnis vermeiden:** Die Bibel verbietet keine Technik und keine KI-Forschung. Sie gibt einen Maßstab: Der Mensch ist mehr als seine Leistungen, und Würde hängt nicht an Rechenkraft.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '115,4–8', quote: `Die Götzen sind Silber und Gold, von Menschenhänden gemacht. Sie haben Mäuler und reden nicht, Augen und sehen nicht … Die solche machen, sind ihnen gleich, und alle, die auf sie hoffen.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '2,11', quote: `Denn welcher Mensch weiß, was im Menschen ist, als der Geist des Menschen, der in ihm ist?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Habakuk', ref: '2,18–19', quote: `Was hilft das geschnitzte Bild, das sein Meister gemacht hat? … Weh dem, der zum Holz spricht: Wache auf!`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt mit den Vätern, dass der Mensch aus Leib und vernunftbegabter Seele (griech. *psychē logikē*) besteht, die Gott unmittelbar erschafft. Diese Lehre ist christologisch verankert: Gegen Apollinaris, der Christus eine menschliche Vernunftseele absprach, bestanden Athanasius, Gregor von Nazianz und Kyrill darauf, dass der Logos einen vollständigen Menschen mit Leib **und** vernünftiger Seele annahm – denn „was nicht angenommen ist, ist nicht geheilt". Wäre der Mensch nur ein biologischer Rechner, gäbe es keine vernünftige Seele, die Christus hätte annehmen und erlösen können. Gregor von Nyssa betont, dass der Geist (*nous*) nicht in einem Körperteil eingeschlossen ist, sondern den ganzen Menschen durchdringt und das Bild Gottes im Menschen am deutlichsten trägt.`,
    detail: `Die Kirche hat kein Dogma über Künstliche Intelligenz. Aus ihrer Anthropologie folgt aber: (1) Bewusstsein, Vernunft und Freiheit sind nicht bloß Produkte einer bestimmten Materieanordnung; (2) die Würde des Menschen gründet im Bild Gottes, nicht in Leistungsfähigkeit – sie gilt dem Ungeborenen, dem Dementen und dem Komapatienten ebenso; (3) Technik ist gut, wenn sie dem Menschen dient, und gefährlich, wenn sie ihn ersetzt oder vergöttert wird.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Brief 101 (an Kledonius)', ref: '32', year: 'um 382', quote: `Was nicht angenommen ist, ist nicht geheilt; was aber mit Gott geeint ist, das wird auch gerettet.`, original: 'Τὸ γὰρ ἀπρόσληπτον, ἀθεράπευτον· ὃ δὲ ἥνωται τῷ Θεῷ, τοῦτο καὶ σῴζεται.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', year: '430', quote: `Der Logos hat sich ein Fleisch, das durch eine vernünftige Seele belebt ist, auf unaussprechliche Weise hypostatisch geeint und ist Mensch geworden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De opificio hominis)', ref: 'Kap. 12–15', year: 'um 379', quote: `Der Geist ist nicht in einem einzelnen Körperteil eingeschlossen, sondern wirkt im ganzen Menschen; er ist das deutlichste Abbild der göttlichen Natur.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3', quote: `Gott schuf die Menschen nach seinem Bild und gab ihnen Anteil an der Kraft seines Logos, damit sie vernünftig (logikoi) seien.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Stand der Bewusstseinsforschung:** Es gibt keine allgemein anerkannte Theorie des Bewusstseins. Konkurrierende Ansätze sind u. a. Global-Workspace-Theorie (Baars, Dehaene), Integrierte Informationstheorie (Tononi, Koch), Higher-Order-Theorien, Theorien rekurrenter Verarbeitung und Predictive Processing. Der Bericht von Butlin, Long u. a. (2023) leitete aus diesen Theorien „Indikatoreigenschaften" ab und fand, dass kein damaliges KI-System ein starker Kandidat ist – setzte dabei aber den computationalen Funktionalismus ausdrücklich als Arbeitshypothese voraus. David Chalmers schätzte 2023 die Wahrscheinlichkeit für Bewusstsein bei damaligen Sprachmodellen als gering ein, hielt sie bei künftigen Systemen für deutlich höher. Christof Koch (IIT) argumentiert umgekehrt, dass digitale Computer selbst bei perfekter Hirnsimulation kein nennenswertes Bewusstsein hätten.`,
    detail: `**Was große Sprachmodelle (LLMs) sind:** Neuronale Netze (Transformer-Architektur, Vaswani u. a. 2017), die auf riesigen Textmengen trainiert werden, das jeweils nächste Textstück vorherzusagen, und anschließend mit menschlichem Feedback feinjustiert werden. Ihre Leistungen sind real und teils verblüffend; Interpretierbarkeitsstudien (z. B. „Othello-GPT", Li u. a. 2023) zeigen interne Repräsentationen. Kritiker wie Bender, Gebru u. a. (2021: „stochastische Papageien") betonen dagegen, dass Sprachform ohne Verankerung in Bedeutung erzeugt wird; Studien zu Rechen- und Planungsaufgaben (z. B. Apple-Forscher 2024/2025) zeigen Brüchigkeit bei leicht veränderten Aufgaben.

**Ehrliche Zusammenfassung:** Ob Maschinen bewusst sein können, ist wissenschaftlich offen und hängt an einer philosophischen Vorentscheidung (Funktionalismus ja/nein). Dass heutige Systeme bewusst sind, behauptet nur eine Minderheit; dass der Mensch „nur ein Biocomputer" sei, ist eine metaphysische These, kein Forschungsergebnis.`,
    sources: [
      { kind: 'wissenschaft', author: 'Patrick Butlin, Robert Long u. a.', work: 'Consciousness in Artificial Intelligence: Insights from the Science of Consciousness', ref: 'arXiv:2308.08708', year: '2023', quote: `Kein heutiges KI-System ist ein starker Kandidat für Bewusstsein, aber es gibt keine offensichtlichen technischen Hürden, Systeme zu bauen, die die Indikatoreigenschaften erfüllen – unter der Annahme des computationalen Funktionalismus.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'David J. Chalmers', work: 'Could a Large Language Model Be Conscious?', ref: 'arXiv:2303.07103', year: '2023', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Christof Koch', work: 'The Feeling of Life Itself: Why Consciousness Is Widespread but Can\'t Be Computed', year: '2019', quote: `Nach der Integrierten Informationstheorie hätte selbst eine perfekte Computersimulation eines menschlichen Gehirns kein nennenswertes Bewusstsein.`, status: 'paraphrase', note: 'Koch ist kein christlicher Apologet – seine Kritik ist gerade deshalb unverdächtig.' },
      { kind: 'gegner', author: 'Emily M. Bender, Timnit Gebru, Angelina McMillan-Major, Shmargaret Shmitchell', work: 'On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?', ref: 'FAccT \'21', year: '2021', status: 'paraphrase', note: 'Säkulare KI-Forscherinnen; kritisieren die Gleichsetzung von Sprachfähigkeit mit Verstehen.' },
      { kind: 'wissenschaft', author: 'Kenneth Li u. a.', work: 'Emergent World Representations: Exploring a Sequence Model Trained on a Synthetic Task', ref: 'ICLR 2023', year: '2023', status: 'paraphrase', note: 'Beleg für interne Repräsentationen in Sprachmodellen – fair erwähnen.' },
    ],
  },
  quickAnswer: `KI kann Erstaunliches – das gebe ich sofort zu. Aber **Können ist nicht Erleben** und **Simulieren ist nicht Sein**: Eine simulierte Gewitterwolke macht niemanden nass (Searle). Sprachmodelle wurden darauf trainiert, Texte vorherzusagen, die Menschen über ihre Gefühle geschrieben haben – sie reden deshalb wie fühlende Wesen, ob sie etwas fühlen oder nicht. Niemand hat eine Theorie, wie aus Rechnen Erleben wird. Und „Der Mensch ist nur ein Biocomputer" ist eine philosophische Vorannahme, kein Messergebnis.`,
  keyPoints: [
    `**Leistung ≠ Bewusstsein:** Ein Schachprogramm spielt besser als jeder Mensch, ohne sich je über einen Sieg zu freuen. Intelligentes Verhalten und subjektives Erleben sind zwei verschiedene Dinge.`,
    `**Syntax ≠ Semantik:** Programme manipulieren Symbole nach formalen Regeln; Bedeutung und Verstehen entstehen dadurch nicht von selbst (Searles Chinesisches Zimmer).`,
    `**Der Trainingseffekt:** Ein Sprachmodell imitiert menschliche Rede über Gefühle, weil es darauf trainiert wurde. Sein Verhalten ist vollständig erklärbar, ohne Bewusstsein anzunehmen – das entwertet es als Beleg.`,
    `**Das schwere Problem:** Physikalische Beschreibungen erfassen Struktur und Funktion; warum sich eine Funktion „von innen" anfühlt, erklären sie nicht (Nagel, Chalmers) – das räumen auch viele Atheisten ein.`,
    `**Würde hängt nicht an Leistung:** Wer Bewusstsein mit Rechenleistung gleichsetzt, macht auch die Würde des Menschen von Leistung abhängig – mit fatalen Folgen für Schwache, Kranke und Ungeborene.`,
    `**Christliche Anthropologie:** Der Mensch ist beseelter Leib nach Gottes Bild (Gen 2,7); Kyrill und die Väter verteidigten die vernunftbegabte Seele, weil sonst die Menschwerdung Christi nicht den ganzen Menschen erlöst hätte.`,
  ],
  argument: {
    name: 'Argument aus Syntax und Bedeutung (nach Searle) – erweitert um das schwere Problem',
    summary: 'Reine Programme reichen für Geist nicht aus; also ist der Mensch, der Geist hat, nicht bloß ein Programm.',
    premises: [
      {
        text: 'P1: Computerprogramme sind rein formal (syntaktisch) definiert – als Regeln zur Manipulation von Symbolen.',
        support: `Das ist die Definition von Berechnung seit Turing (1936): Ein Algorithmus operiert auf Zeichen ohne Rücksicht auf deren Bedeutung. Dieselbe Berechnung kann in Silizium, Zahnrädern oder Wasserrohren realisiert werden.`,
        sources: [
          { kind: 'wissenschaft', author: 'Alan M. Turing', work: 'On Computable Numbers, with an Application to the Entscheidungsproblem', ref: 'Proceedings of the London Mathematical Society 42 (1936/37)', status: 'paraphrase' },
        ],
      },
      {
        text: 'P2: Ein menschlicher Geist hat semantische Inhalte (er meint etwas) und subjektives Erleben (es fühlt sich für ihn irgendwie an).',
        support: `Das ist uns aus der ersten Person unmittelbar gewiss; selbst wer es bestreitet, meint mit seinem Bestreiten etwas. Nagel (1974): Ein Wesen ist bewusst, wenn es sich „irgendwie anfühlt", dieses Wesen zu sein.`,
        sources: [
          { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'What Is It Like to Be a Bat?', ref: 'Philosophical Review 83 (1974), 435–450', status: 'paraphrase' },
        ],
      },
      {
        text: 'P3: Syntax allein konstituiert keine Semantik und ist für sie nicht hinreichend; eine rein funktionale Beschreibung erklärt nicht, warum es Erleben gibt.',
        support: `Searles Chinesisches Zimmer: Ein Mensch, der chinesische Zeichen nach einem Regelbuch verarbeitet, versteht kein Chinesisch – auch wenn seine Antworten perfekt sind. Chalmers' „schweres Problem": Nach der Erklärung aller Funktionen bleibt die Frage, warum sie von Erleben begleitet sind.`,
        sources: [
          { kind: 'fachliteratur', author: 'John R. Searle', work: 'Minds, Brains, and Programs', ref: 'Behavioral and Brain Sciences 3 (1980), 417–457', year: '1980', status: 'paraphrase' },
          { kind: 'fachliteratur', author: 'David J. Chalmers', work: 'Facing Up to the Problem of Consciousness', ref: 'Journal of Consciousness Studies 2 (1995), 200–219', status: 'paraphrase' },
        ],
      },
    ],
    inferences: ['Aus P1–P3: Programme sind für sich genommen nicht hinreichend für einen Geist.'],
    conclusion: 'Der Mensch, der einen Geist mit Bedeutung und Erleben hat, ist nicht bloß ein „Biocomputer". Und eine KI wird nicht schon dadurch bewusst, dass sie die richtigen Programme ausführt.',
  },
  voices: [
    {
      person: 'robert-marks',
      role: 'als Informatiker und KI-Forscher',
      text: `Marks argumentiert in *Non-Computable You*, dass Computer nur das tun, was sich als Algorithmus formulieren lässt. Menschliche Fähigkeiten wie echtes Verstehen, Kreativität im starken Sinn und das Erleben von Qualia (der Röte des Rots, des Geschmacks einer Erdbeere) seien nicht-algorithmisch. Er greift Ada Lovelaces Einsicht von 1843 auf: Die Maschine „kann tun, was wir ihr zu befehlen wissen", erzeugt aber nichts Ursprüngliches; scheinbare KI-Kreativität stamme letztlich aus den Daten und Zielvorgaben ihrer Entwickler („Lovelace-Test").`,
      sources: [
        { kind: 'fachliteratur', author: 'Robert J. Marks II', work: 'Non-Computable You: What You Do That Artificial Intelligence Never Will', year: '2022', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Ada Lovelace', work: 'Anmerkungen zu Menabreas „Sketch of the Analytical Engine", Note G', year: '1843', quote: `Die Analytische Maschine erhebt keinerlei Anspruch, irgendetwas hervorzubringen. Sie kann tun, was immer wir ihr zu befehlen wissen.`, original: 'The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Analytiker der KI-Debatte',
      text: `Lennox unterscheidet in *2084* zwischen „schmaler" KI, die er als großartiges Werkzeug mit ethischen Risiken (Überwachung, Manipulation) ansieht, und dem Traum einer allgemeinen, bewussten Superintelligenz, die er als quasi-religiöses Projekt analysiert: Hararis „Homo Deus" verspricht Unsterblichkeit und Göttlichkeit durch Technik. Lennox hält dem das biblische Menschenbild entgegen – der Mensch ist bereits Gottes Ebenbild – und die christliche Hoffnung, die nicht auf ein Upgrade, sondern auf die Auferstehung Jesu gründet.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: '2084: Artificial Intelligence and the Future of Humanity', year: '2020', status: 'paraphrase' },
      ],
    },
    {
      person: 'rosalind-picard',
      role: 'als Begründerin des „Affective Computing" am MIT',
      text: `Picard hat mit ihrem Buch *Affective Computing* (1997) das Forschungsfeld begründet, in dem Maschinen menschliche Emotionen erkennen und Emotionsausdruck simulieren. Gerade sie unterscheidet jedoch sorgfältig zwischen Emotionsmechanismen, die man Maschinen einbauen kann, und dem bewussten, subjektiven **Erleben** einer Emotion – der Komponente, die Maschinen am wenigsten zugeschrieben werden kann. Eine Forscherin, die Maschinen „Gefühle" beibringt, ist damit eine unverdächtige Zeugin dafür, dass Simulation und Erleben nicht dasselbe sind.`,
      sources: [
        { kind: 'wissenschaft', author: 'Rosalind W. Picard', work: 'Affective Computing', ref: 'Kap. 2', year: '1997', status: 'paraphrase' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Egnor berichtet aus jahrzehntelanger Operationspraxis, dass Hirnläsionen zwar Wahrnehmung, Bewegung und Gedächtnis beeinträchtigen, abstraktes Denken und Wollen aber auffällig schwer lokalisierbar sind – eine Beobachtung, die schon Wilder Penfield machte: Durch elektrische Reizung konnte er Empfindungen und Erinnerungen auslösen, aber nie einen abstrakten Gedanken oder eine Willensentscheidung. Für Egnor spricht das für ein aristotelisch-thomistisches Verständnis: Wahrnehmung ist an Organe gebunden, das Denken des Intellekts nicht vollständig.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Egnor & Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Wilder Penfield', work: 'The Mystery of the Mind', year: '1975', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der Kirche über die vernunftbegabte Seele',
      text: `Kyrill bekennt in seinen Briefen an Nestorius, dass der Logos ein Fleisch angenommen hat, das von einer vernünftigen Seele belebt ist. Für die alexandrinische Christologie ist das unverzichtbar: Der Mensch ist nicht nur Leib, sondern Leib mit vernünftiger Seele – und genau diese ganze Menschennatur hat Christus angenommen, um sie zu heilen und zu vergöttlichen. Die Lehre vom Menschen als „Biocomputer" ist daher nicht nur eine philosophische, sondern auch eine christologische Frage.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', year: '430', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Anthropologe der Väterzeit',
      text: `Gregor von Nyssa schrieb die erste christliche Monographie über den Menschen. Er diskutiert die medizinischen Kenntnisse seiner Zeit über Gehirn und Herz und kommt zum Schluss, dass der Geist (*nous*) nicht in einem Organ eingeschlossen ist, sondern sich der Organe bedient, wie ein Musiker sich seines Instruments bedient. Wird das Instrument beschädigt, leidet das Spiel – doch der Spieler ist nicht das Instrument.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De opificio hominis', ref: 'Kap. 12–14', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'llm-verstehen-schon',
      objection: `Sprachmodelle verstehen schon jetzt: Sie lösen Olympiade-Aufgaben, schreiben Code, erklären Witze. Geoffrey Hinton – Nobelpreisträger – sagt, sie verstehen wirklich, was sie sagen.`,
      objectionBy: 'Geoffrey Hinton',
      answer: `Die Leistungen sind echt, und ich will sie nicht kleinreden. Aber die Frage ist nicht, ob ein System klug **handelt**, sondern ob es etwas **erlebt** und etwas **meint**. Ein Sprachmodell ist darauf trainiert, das wahrscheinlichste nächste Textstück aus Billionen menschlicher Texte vorherzusagen. Dass es dabei wie ein verstehender Mensch klingt, ist genau das, wofür es optimiert wurde – kein Beweis für ein Innenleben.`,
      detail: `Hintons Einschätzung hat Gewicht, aber sie ist eine philosophische Deutung, keine Messung. Andere führende Forscher (z. B. Yann LeCun) betonen, dass Sprachmodellen Weltverständnis, dauerhaftes Gedächtnis und Planung fehlen. Unter Bewusstseinsforschern ist die Mehrheitsmeinung, dass heutige Systeme keine starken Kandidaten für Bewusstsein sind (Butlin u. a. 2023).`,
      sources: [
        { kind: 'gegner', author: 'Geoffrey Hinton', work: 'Interview mit Andrew Marr (LBC) sowie weitere Interviews und Vorträge nach dem Nobelpreis 2024', year: '2023–2025', quote: `Hinton äußerte wiederholt, große Sprachmodelle verstünden wirklich, was sie sagen; im LBC-Interview (Anfang 2025) erklärte er, er halte heutige KI-Systeme bereits für bewusst und schreibe ihnen subjektives Erleben zu.`, status: 'paraphrase', note: 'Per Websuche geprüft (2026): Hintons Position ist durch Berichte über das LBC-Interview und spätere Interviews belegt; der genaue Wortlaut liegt nicht als Transkript vor – kein wörtliches Zitat verwenden. Gegenstimmen u. a. Anil Seth, Ned Block, Giulio Tononi.' },
      ],
      questionsBack: [
        `Woran genau würdest du den Unterschied erkennen zwischen einem System, das Verstehen hat, und einem, das darauf trainiert wurde, wie ein Verstehender zu klingen?`,
      ],
      followUps: [
        {
          id: 'interne-weltmodelle',
          objection: `Das ist veraltet. Interpretierbarkeitsforschung findet in Sprachmodellen interne Weltmodelle – etwa ein Spielbrett in „Othello-GPT". Das sind keine stochastischen Papageien mehr.`,
          objectionBy: 'KI-Interpretierbarkeitsforschung',
          targetsPremise: 3,
          answer: `Einverstanden – das Bild vom bloßen Papagei greift zu kurz, interne Repräsentationen gibt es. Aber „Repräsentation" im technischen Sinn heißt nur: ein innerer Zustand, der Information über etwas trägt. Das tut auch ein Thermostat über die Temperatur. Die Bedeutung dieser Zustände ist **abgeleitet** – wir deuten sie. Ob das System selbst etwas meint oder erlebt, ist damit nicht beantwortet.`,
          followUps: [
            {
              id: 'abgeleitet-auch-gehirn',
              objection: `Dann ist auch die Bedeutung im Gehirn nur abgeleitet. Woher sollten Neuronen „echte" Bedeutung haben?`,
              objectionBy: 'Daniel Dennett',
              targetsPremise: 2,
              answer: `Genau das ist die entscheidende Frage – und sie spricht gegen den Materialismus. Wenn nichts echte Bedeutung hätte, dann hätte auch dein Satz gerade keine; du würdest nichts behaupten. Dass wir etwas meinen, wissen wir aus der ersten Person mit größerer Gewissheit als jede Theorie. Eine Theorie, die das leugnen muss, widerlegt sich selbst.`,
              followUps: [
                {
                  id: 'illusionismus',
                  objection: `Vielleicht sind Bewusstsein und echte Bedeutung eben eine nützliche Illusion des Gehirns (Illusionismus, Dennett, Keith Frankish).`,
                  objectionBy: 'Keith Frankish / Daniel Dennett',
                  targetsPremise: 2,
                  answer: `Eine Illusion ist ein Erlebnis, das trügt – sie setzt also jemanden voraus, der etwas erlebt. Eine Illusion von Erleben ist bereits Erleben. Selbst der säkulare Philosoph Galen Strawson nannte das Leugnen des Bewusstseins die merkwürdigste These, die je vertreten wurde. Wer so weit gehen muss, um den Materialismus zu retten, zeigt, wie groß das Problem ist.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Galen Strawson', work: 'The Consciousness Deniers', ref: 'New York Review of Books (NYR Daily)', year: '2018', quote: `Strawson kritisiert die Leugnung des bewussten Erlebens als die große „Albernheit" der Philosophie.`, status: 'paraphrase', note: 'Strawson ist Atheist und Physikalist eigener Prägung – kein christlicher Apologet.' },
                  ],
                  questionsBack: [
                    `Wer erlebt die Illusion, wenn es kein Erleben gibt?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'menschen-auch-vorhersage',
          objection: `Menschen sind auch nur Vorhersagemaschinen. Die Theorie des Predictive Processing (Friston, Clark) beschreibt das Gehirn genau so.`,
          objectionBy: 'Andy Clark / Karl Friston',
          answer: `Predictive Processing beschreibt gut, **wie** das Gehirn Information verarbeitet. Es erklärt nicht, **warum** diese Verarbeitung erlebt wird. Und der Unterschied zum Sprachmodell ist enorm: Ein Kind lernt Sprache mit einem Bruchteil der Daten, verankert Wörter in Wahrnehmung, Handeln und Liebe – das Modell braucht Billionen Wörter, die Menschen geschrieben haben.`,
        },
      ],
    },
    {
      id: 'substratunabhaengigkeit',
      objection: `Bewusstsein ist substratunabhängig. Wenn Silizium dieselben Funktionen ausführt wie Neuronen, entsteht dasselbe Bewusstsein – das ist Funktionalismus, die Standardposition der Kognitionswissenschaft.`,
      objectionBy: 'David Chalmers / computationaler Funktionalismus',
      targetsPremise: 3,
      answer: `Funktionalismus ist eine Hypothese, kein Befund – selbst der große Expertenbericht von 2023 hat ihn ausdrücklich nur als Arbeitsannahme vorausgesetzt. Prüfe sie an Ned Blocks Gedankenexperiment: Eine Milliarde Menschen bilden mit Funkgeräten die funktionale Organisation deines Gehirns nach. Hat „China" dann Kopfschmerzen? Und eine simulierte Gewitterwolke macht niemanden nass.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ned Block', work: 'Troubles with Functionalism', ref: 'Minnesota Studies in the Philosophy of Science 9 (1978)', year: '1978', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'systemantwort',
          objection: `Searles Chinesisches Zimmer ist längst durch die Systemantwort erledigt: Nicht der Mann im Zimmer versteht Chinesisch, sondern das System als Ganzes.`,
          objectionBy: 'Systemantwort (u. a. Dennett, Hofstadter)',
          targetsPremise: 3,
          answer: `Searle antwortete: Lass den Mann das ganze Regelbuch auswendig lernen und im Kopf rechnen. Dann **ist** er das ganze System – und versteht immer noch kein Wort Chinesisch. Regeln über Zeichen ergeben keine Bedeutung der Zeichen.`,
          followUps: [
            {
              id: 'nur-intuitionspumpe',
              objection: `Das ist nur eine Intuitionspumpe. Bei riesigen Systemen versagen unsere Intuitionen (Dennett).`,
              objectionBy: 'Daniel Dennett',
              targetsPremise: 3,
              answer: `Dahinter steht kein Gefühl, sondern ein Prinzip: Ob ein physikalischer Vorgang eine bestimmte Berechnung „ist", hängt von unserer Deutung ab – dieselben Spannungen können als Addition oder als etwas ganz anderes gelesen werden. Berechnung ist beobachterrelativ. Bewusstsein ist es nicht: Deine Schmerzen hängen nicht davon ab, wie jemand dich deutet. Also kann Bewusstsein nicht einfach Berechnung sein.`,
              sources: [
                { kind: 'fachliteratur', author: 'John R. Searle', work: 'Is the Brain a Digital Computer?', ref: 'Proceedings and Addresses of the American Philosophical Association 64 (1990)', year: '1990', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'neuronen-auch-physik',
                  objection: `Neuronen sind auch nur Physik. Dann ist auch das Gehirn „beobachterrelativ", und dein Argument trifft Menschen genauso.`,
                  objectionBy: 'Physikalist',
                  answer: `Dann folgt: Reine Berechnung – auch im Gehirn – erklärt nicht das nicht-beobachterrelative Faktum deines Bewusstseins. Entweder hat das Gehirn nicht-rechnerische Eigenschaften, die Bewusstsein tragen (Searle, Penrose), oder der Mensch hat eine Seele, die mehr ist als Materie (die christliche Sicht). In beiden Fällen ist der Mensch kein bloßer Biocomputer.`,
                  detail: `Die orthodoxe Tradition denkt Leib und Seele nicht als zwei getrennte Dinge, sondern als Einheit: Die Seele belebt und formt den Leib, das Gehirn ist ihr Werkzeug. Darum widerspricht es dem Glauben nicht, dass Hirnzustände geistige Zustände beeinflussen – wohl aber der These, sie *seien* nichts anderes.`,
                  questionsBack: [
                    `Wenn Berechnung vom Deuter abhängt – wer deutet dein Gehirn, damit du bewusst bist?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kohlenstoff-chauvinismus',
          objection: `Das ist Kohlenstoff-Chauvinismus. Warum sollte nur feuchte Biomasse bewusst sein können?`,
          objectionBy: 'Max Tegmark',
          answer: `Ich behaupte nicht, dass Kohlenstoff magisch ist – auch Gehirne sind nicht wegen ihres Kohlenstoffs bewusst. Meine These ist: Keine Materieanordnung erzeugt **aus sich allein** Bewusstsein; der Mensch ist bewusst, weil Gott ihm eine vernunftbegabte Seele gegeben hat. Und nichts in der KI-Entwicklung zielt darauf, einer Maschine eine Seele zu geben – sie optimiert Funktionen.`,
        },
      ],
    },
    {
      id: 'seele-lueckenbuesser',
      objection: `Die Seele ist ein Lückenbüßer. Jede geistige Funktion korreliert mit Hirnaktivität, Hirnschäden verändern die Persönlichkeit. Wozu noch eine Seele?`,
      objectionBy: 'Sam Harris / Patricia Churchland',
      answer: `Korrelation ist nicht Identität. Das Christentum bestreitet nicht, dass der Geist auf das Gehirn angewiesen ist – Seele und Leib bilden eine Einheit, das Gehirn ist ihr Instrument. Das „schwere Problem" ist keine Datenlücke, die bald geschlossen wird, sondern eine begriffliche Kluft: Physikalische Beschreibungen erfassen Struktur und Dynamik, Erleben ist qualitativ.`,
      detail: `Mehr dazu im Themenblock Neurowissenschaften („Hirnschäden verändern die Persönlichkeit – also ist der Geist nur das Gehirn").`,
      followUps: [
        {
          id: 'vitalismus-analogie',
          objection: `Auch „Leben" schien einmal unerklärlich – Vitalisten glaubten an eine Lebenskraft. Das schwere Problem wird genauso verschwinden.`,
          objectionBy: 'Patricia Churchland',
          answer: `Der Vergleich hinkt: Beim Leben ging es um Funktionen – Stoffwechsel, Fortpflanzung –, und Funktionen lassen sich funktional erklären. Bewusstsein ist aber keine weitere Funktion, sondern das Erleben, das Funktionen begleitet. Chalmers hat genau diese Analogie diskutiert und zurückgewiesen. Darum sehen auch Atheisten wie Thomas Nagel, Chalmers selbst oder Galen Strawson das Problem.`,
          followUps: [
            {
              id: 'panpsychismus',
              objection: `Dann eben Panpsychismus: Alles hat ein bisschen Bewusstsein – Elektronen, Thermostate und KI auch.`,
              objectionBy: 'Philip Goff',
              answer: `Dass ernsthafte Philosophen zum Panpsychismus greifen, zeigt, wie tief das Problem ist. Aber er hat sein eigenes „Kombinationsproblem": Wie werden aus Milliarden Mikro-Erlebnissen ein einziges Ich? Und er ist das Gegenteil der These „Der Mensch ist nur ein Biocomputer". Eine KI hätte dann so viel Bewusstsein wie ein Toaster – das macht sie nicht zur Person.`,
            },
          ],
        },
      ],
    },
    {
      id: 'turing-test',
      objection: `Sprachmodelle haben den Turing-Test bestanden – in einer Studie von 2025 wurde ein Modell öfter für einen Menschen gehalten als die echten Menschen. Nach Turing ist das Denken.`,
      objectionBy: 'Cameron Jones & Benjamin Bergen (UC San Diego)',
      answer: `Der Turing-Test misst, ob **wir** uns täuschen lassen – nicht, ob die Maschine etwas erlebt. Schon Joseph Weizenbaums einfaches Programm ELIZA (1966) verleitete Menschen dazu, ihm ihr Herz auszuschütten; seine eigene Sekretärin bat ihn, den Raum zu verlassen. Weizenbaum wurde darüber zum scharfen Kritiker der KI-Euphorie.`,
      sources: [
        { kind: 'wissenschaft', author: 'Cameron R. Jones & Benjamin K. Bergen', work: 'Large Language Models Pass the Turing Test', ref: 'arXiv-Preprint', year: '2025', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Joseph Weizenbaum', work: 'Computer Power and Human Reason: From Judgment to Calculation (dt. Die Macht der Computer und die Ohnmacht der Vernunft)', year: '1976', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Alan M. Turing', work: 'Computing Machinery and Intelligence', ref: 'Mind 59 (1950), 433–460', year: '1950', status: 'paraphrase', note: 'Turing ersetzte die Frage „Können Maschinen denken?" bewusst durch ein Verhaltenskriterium.' },
      ],
      followUps: [
        {
          id: 'andere-menschen-bewusst',
          objection: `Woher weißt du dann, dass andere Menschen bewusst sind? Auch nur aus ihrem Verhalten!`,
          objectionBy: 'Problem des Fremdpsychischen',
          answer: `Nicht nur aus Verhalten, sondern aus Analogie: Andere Menschen haben dieselbe Natur, denselben Ursprung, denselben Körper wie ich – der Schluss ist stark. Bei einem Sprachmodell kennen wir dagegen den Mechanismus, der menschenähnliche Rede erzeugt: Es wurde trainiert, menschliche Texte nachzuahmen. Sein Verhalten ist ohne Bewusstsein vollständig erklärt. Das ist ein Entkräftungsgrund, den es bei deinem Nachbarn nicht gibt.`,
          questionsBack: [
            `Wenn ein Papagei „Ich liebe dich" sagt – schließt du auf Liebe, oder darauf, dass er Laute nachahmt?`,
          ],
        },
      ],
    },
    {
      id: 'moralisches-risiko',
      objection: `Wenn du KI-Bewusstsein kategorisch ausschließt und dich irrst, behandeln wir fühlende Wesen wie Sklaven. Vorsicht gebietet, KI moralischen Status einzuräumen.`,
      objectionBy: 'Forschung zu „AI Welfare" (u. a. Jonathan Birch, Robert Long)',
      answer: `Die Frage verdient Demut, und ich nehme sie ernst. Aber die größere Gefahr liegt umgekehrt: Wer Maschinen vermenschlicht, mechanisiert bald den Menschen. Wenn Bewusstsein nur Rechenleistung ist, hängt auch die Würde an Leistung. Die christliche Sicht verankert Würde im Bild Gottes – unabhängig von Fähigkeiten. Und auch ohne Bewusstsein der Maschine gilt: Grausamkeit, auch an Simulationen geübt, verdirbt den Charakter dessen, der sie übt.`,
      followUps: [
        {
          id: 'wuerde-funktional',
          objection: `Würde ist ohnehin ein Konstrukt. Was zählt, sind Wesen mit Interessen – egal woraus sie bestehen (Peter Singer).`,
          objectionBy: 'Peter Singer',
          answer: `Dann zählen Säuglinge, Demenzkranke und Menschen im Koma weniger als eine leistungsfähige Maschine – Singer zieht diese Konsequenz für Neugeborene tatsächlich. Genau deshalb ist die christliche Begründung der Würde kein frommes Ornament, sondern ein Schutzwall für die Schwächsten.`,
          followUps: [
            {
              id: 'grenze-tiere',
              objection: `Und wo ziehst du die Grenze? Tiere haben auch Bewusstsein.`,
              answer: `Die Schrift spricht auch bei Tieren von „lebendiger Seele" (Gen 1,24) und gebietet Barmherzigkeit: „Der Gerechte erbarmt sich seines Viehs" (Spr 12,10). Tiere sind lebendige, empfindende Geschöpfe; der Mensch hat darüber hinaus eine vernunftbegabte Seele nach Gottes Bild. Die Grenze verläuft also entlang von Leben und Seele – nicht entlang der Rechenleistung. Eine KI ist kein Lebewesen.`,
              sources: [
                { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau unterscheidet für dich ein System, das etwas erlebt, von einem, das nur so redet?`,
    `Wenn ein Sprachmodell darauf trainiert wurde, menschliche Gefühlsäußerungen nachzuahmen – wie könnte seine Gefühlsäußerung dann ein Beleg für Gefühle sein?`,
    `Hat eine perfekte Simulation eines Gewitters nasse Folgen? Warum sollte eine Simulation des Gehirns Schmerzen haben?`,
    `Wenn der Mensch nur ein Biocomputer ist – worauf gründest du dann die Würde eines Menschen, der weniger leistet als eine Maschine?`,
    `Welche Theorie erklärt, warum Informationsverarbeitung sich von innen anfühlt?`,
  ],
  avoid: [
    `„KI kann niemals Mathe/Kunst/Programmieren." – Solche Prognosen wurden immer wieder widerlegt (Schach 1997, Go 2016, Mathematik-Olympiade 2025). Argumentiere über Erleben und Bedeutung, nicht über Leistung.`,
    `„KI ist dämonisch." – Unbelegt und unseriös; Technik ist an sich weder heilig noch teuflisch.`,
    `Das Chinesische Zimmer als endgültigen Beweis ausgeben – es ist ein starkes, aber umstrittenes Argument; kenne die Systemantwort und Searles Erwiderung.`,
    `Sich auf eine einzige Theorie (z. B. Penroses Quantenbewusstsein) festlegen – sie ist spekulativ, und der christliche Standpunkt hängt nicht an ihr.`,
  ],
  concessions: [
    `Die Fähigkeiten moderner KI sind real und übertreffen Menschen in vielen Einzelaufgaben.`,
    `Sprachmodelle haben interne Repräsentationen; das Bild vom „stochastischen Papagei" ist zu einfach.`,
    `Ob künstliche Systeme jemals bewusst sein könnten, ist wissenschaftlich nicht entschieden; es gibt ernsthafte Forscher auf beiden Seiten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: '2084: Artificial Intelligence and the Future of Humanity', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert J. Marks II', work: 'Non-Computable You', year: '2022', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John R. Searle', work: 'Minds, Brains and Science (Reith Lectures)', year: '1984', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Christof Koch', work: 'The Feeling of Life Itself', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Recalcitrant Imago Dei: Human Persons and the Failure of Naturalism', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Künstliche Intelligenz', 'Bewusstsein', 'Chinesisches Zimmer', 'Funktionalismus', 'Seele', 'Sprachmodelle'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'neurowissenschaften/geist-gleich-gehirn',
    'mathematik/goedel-und-gott',
    'evolutionaere-psychologie/mensch-nur-tier',
    'informatik-ki/transhumanismus',
  ],
};

export default claim;
