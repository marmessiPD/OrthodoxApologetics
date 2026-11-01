import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'lueckenbuesser-gott',
  title: `„Gott ist nur ein Lückenbüßer – die Wissenschaft schließt die Lücken."`,
  proponents: [
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Hayden Planetarium New York', work: '„The Perimeter of Ignorance", Natural History (2005); zahlreiche Vorträge' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 4 („The worship of gaps")' },
    { name: 'Jerry Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Faith vs. Fact (2015)' },
    { name: 'Lawrence Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012); Debatten mit W. L. Craig' },
  ],
  steelman: `Die Geschichte ist eindeutig: Blitz und Donner schrieb man Zeus zu, Seuchen den Dämonen, die Bewegung der Planeten den Engeln; Newton meinte, Gott müsse die Planetenbahnen gelegentlich korrigieren; man hielt das Leben für das Werk einer besonderen Lebenskraft und die Arten für einzeln erschaffen. Jedes Mal schloss die Wissenschaft die Lücke, und Gott zog sich zurück. Neil deGrasse Tyson nennt Gott deshalb eine „immer kleiner werdende Tasche wissenschaftlicher Unwissenheit". Feinabstimmung, Ursprung des Lebens, Bewusstsein – das sind nur die Lücken von heute. Wer dort Gott einsetzt, wiederholt den alten Fehler und stoppt die Forschung. Ehrlich ist allein: „Wir wissen es noch nicht."`,
  biblical: {
    summary: `Der Gott der Bibel wohnt nicht in den Lücken, sondern ist der Urheber der regelmäßigen Naturabläufe: Er „läßt Gras wachsen" (Ps 104,14), „läßt seine Sonne aufgehen" und „läßt regnen" (Mt 5,45), hält „die Ordnungen des Himmels und der Erde" (Jer 33,25) und „trägt alle Dinge" (Hebr 1,3). Gerade das Gewöhnliche ist sein Werk. Eine wissenschaftliche Erklärung des Regens verdrängt Gott daher ebenso wenig, wie die Kenntnis eines Motors den Ingenieur verdrängt.`,
    detail: `- **Ps 104:** Ein ganzer Psalm preist Gott für Vorgänge, die wir heute meteorologisch und biologisch beschreiben – Quellen, Regen, Wachstum, Jahreszeiten. Der Psalmist sieht Gott nicht *statt* der Natur, sondern *in* ihr am Werk.
- **Jer 33,25:** Die Verlässlichkeit der „Ordnungen" von Himmel und Erde wird als Bund Gottes verstanden – ein Gedanke, der die Erwartung von Naturgesetzen begründet.
- **Hebr 1,3; Kol 1,17:** Gott erhält alles beständig – nicht nur dort, wo wir nichts verstehen.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '104,14', quote: `Du lässest Gras wachsen für das Vieh und Saat zu Nutz den Menschen, daß du Brot aus der Erde bringest.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,45', quote: `… denn er läßt seine Sonne aufgehen über die Bösen und über die Guten und läßt regnen über Gerechte und Ungerechte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `So spricht der HERR: Halte ich meinen Bund nicht mit Tag und Nacht noch die Ordnungen des Himmels und der Erde …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter sahen Gott als Urheber der Naturordnung, nicht als Lückenfüller. Der hl. Basilius erklärt in seinen Predigten über das Sechstagewerk, dass Gottes Schöpfungswort der Natur eine bleibende Kraft verlieh, die bis heute wirkt – die Erde bringt hervor, weil Gott es ihr aufgetragen hat. Augustinus warnte Christen ausdrücklich davor, über Naturdinge Unhaltbares zu behaupten, weil sie damit die Schrift lächerlich machen. Die Kirche hat also eine lange Tradition, Gottes Wirken in den regelmäßigen Naturvorgängen zu sehen und den Glauben nicht an Wissenslücken zu hängen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'V,10; IX,2', status: 'paraphrase', quote: 'Das erste Gebot Gottes an die Erde wirkt in der Natur fort; die Ordnung der Natur hat ihren Ursprung im Wort des Schöpfers.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', status: 'paraphrase', quote: 'Es ist schändlich und gefährlich, wenn ein Nichtchrist einen Christen über Naturdinge Unsinn reden hört, angeblich auf Grundlage der Schrift; das schadet dem Glauben.' },
    ],
  },
  opposingView: {
    summary: `Der Begriff „Lückenbüßer-Gott" stammt bezeichnenderweise von Christen: Der schottische Evangelist und Naturforscher Henry Drummond kritisierte 1894 Christen, die Lücken der Wissenschaft „mit Gott füllen"; der Physiker und Methodist Charles Coulson machte den Ausdruck „God of the gaps" 1955 bekannt; Dietrich Bonhoeffer schrieb 1944, Gott dürfe nicht als „Lückenbüßer" unserer unvollkommenen Erkenntnis dienen. Historisch gab es echte Lückenargumente – etwa Newtons Annahme, Gott müsse die Planetenbahnen korrigieren, die schon Leibniz kritisierte. Wissenschaftstheoretisch ist aber zwischen einem Argument aus Unwissenheit und einem Schluss auf die beste Erklärung aufgrund positiven Wissens zu unterscheiden.`,
    sources: [
      { kind: 'fachliteratur', author: 'Charles A. Coulson', work: 'Science and Christian Belief', year: '1955', status: 'paraphrase', quote: 'Wenn wir Gott nur in die Lücken unseres Wissens stellen, wird er mit jedem Fortschritt kleiner; Gott ist im Ganzen der Natur zu finden.' },
      { kind: 'fachliteratur', author: 'Dietrich Bonhoeffer', work: 'Widerstand und Ergebung (Brief vom 29. Mai 1944)', status: 'paraphrase', quote: 'Gott darf nicht als Lückenbüßer unserer unvollkommenen Erkenntnis dienen; er will in dem erkannt werden, was wir erkennen, nicht in dem, was wir nicht erkennen.' },
      { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Briefwechsel mit Samuel Clarke (1. Brief)', year: '1715', status: 'paraphrase', quote: 'Leibniz spottet über Newtons Gott, der seine Uhr von Zeit zu Zeit aufziehen und reparieren müsse; ein vollkommener Schöpfer schaffe eine Welt, die solcher Nachbesserungen nicht bedarf.' },
      { kind: 'gegner', author: 'Neil deGrasse Tyson', work: '„The Perimeter of Ignorance", Natural History', year: '2005', status: 'paraphrase', quote: 'Gott als immer kleiner werdende Tasche wissenschaftlicher Unwissenheit.' },
    ],
  },
  quickAnswer: `Du hast recht: Ein Gott, der nur in den Lücken unseres Wissens wohnt, schrumpft mit jeder Entdeckung – deshalb haben Christen selbst den Begriff „Lückenbüßer-Gott" geprägt und kritisiert. Aber der Gott der Bibel ist, wie John Lennox sagt, nicht der Gott der Lücken, sondern des ganzen Geschehens: der Urheber der Naturgesetze, nicht ihr Konkurrent. Wer weiß, wie ein Motor funktioniert, hat Henry Ford nicht widerlegt. Die guten Gottesargumente beruhen nicht auf dem, was wir *nicht* wissen, sondern auf dem, was wir wissen: dass das Universum einen Anfang hat, dass seine Konstanten fein abgestimmt sind, dass es Gesetze gibt. Und es gibt auch den umgekehrten Fehler: „Die Wissenschaft wird es schon erklären" – ein Naturalismus der Lücken.`,
  keyPoints: [
    `**Christen haben den Begriff geprägt:** Drummond (1894), Coulson (1955), Bonhoeffer (1944) kritisierten den Lückenbüßer-Gott – aus theologischen Gründen.`,
    `**Gott des ganzen Geschehens:** Der biblische Gott ist Urheber der regelmäßigen Naturabläufe. Mechanismus und Urheber konkurrieren nicht – wer den Motor erklärt, widerlegt nicht den Ingenieur.`,
    `**Wissen statt Unwissen:** Kalam (Anfang), Feinabstimmung (Werte der Konstanten), Information in der DNA – diese Argumente beruhen auf Entdeckungen, nicht auf Lücken.`,
    `**Schluss auf die beste Erklärung:** Wenn wir aus Erfahrung wissen, dass nur Intelligenz eine bestimmte Wirkung hervorbringt, ist der Schluss auf Intelligenz keine Unwissenheit, sondern Anwendung von Wissen – wie in Archäologie, Forensik und SETI.`,
    `**Naturalismus der Lücken:** „Die künftige Wissenschaft wird es erklären" ist ein ungedeckter Wechsel. Manche Probleme sind mit wachsendem Wissen schwerer geworden (Ursprung des Lebens, Bewusstsein).`,
    `**Ehrliches Zugeständnis:** Christen haben tatsächlich Lückenargumente gebraucht – etwa Newton bei den Planetenbahnen. Daraus sollten wir lernen.`,
  ],
  argument: {
    name: 'Unwissenheit oder beste Erklärung?',
    summary: 'Ein gültiger Schluss auf eine intelligente Ursache beruht auf positivem Wissen, nicht auf einer Lücke.',
    premises: [
      {
        text: 'P1: Eine Wirkung E weist ein Merkmal M auf (z. B. einen Anfang, präzise Feinabstimmung, funktionale Information).',
        support: `M ist ein *Befund* der Wissenschaft – etwas, das wir wissen, nicht etwas, das wir nicht wissen.`,
      },
      {
        text: 'P2: Aus unserer gesamten Erfahrung kennen wir eine Ursache, die M regelmäßig hervorbringt: Intelligenz (bzw. beim Anfang des Universums: nur eine Ursache außerhalb von Raum und Zeit kommt in Frage).',
        support: `Das ist das Prinzip, das Darwin und Lyell „vera causa" nannten: Man erklärt Vergangenes durch Ursachen, deren Wirksamkeit man kennt. Wir kennen Intelligenz als Quelle von Information und präziser Abstimmung.`,
        sources: [
          { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase', quote: 'Der Schluss auf Design ist ein Schluss auf die beste Erklärung nach der Methode der historischen Wissenschaften, nicht ein Argument aus Unwissenheit.' },
        ],
      },
      {
        text: 'P3: Für die bekannten natürlichen Ursachen gibt es prinzipielle, nicht bloß vorläufige Gründe, warum sie M nicht hervorbringen.',
        support: `Ein Argument aus Unwissenheit sagt nur: „Wir kennen keine natürliche Ursache." Ein Schluss auf die beste Erklärung zeigt zusätzlich, warum die Kandidaten scheitern – und bleibt offen für neue Belege.`,
      },
    ],
    conclusion: 'Also ist eine intelligente Ursache die beste verfügbare Erklärung für M – ein Schluss, der auf Wissen beruht und durch neue Befunde widerlegbar wäre.',
  },
  voices: [
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox betont immer wieder, dass Gott kein Konkurrent naturwissenschaftlicher Erklärungen ist. Sein bekanntes Bild: Wer erklärt, wie ein Ford-Motor nach den Gesetzen der Verbrennung funktioniert, hat damit nicht bewiesen, dass es Henry Ford nicht gab – Mechanismus und Urheber sind Erklärungen auf verschiedenen Ebenen. Gott sei nicht der Gott der Lücken, sondern der Gott des ganzen Geschehens: der Teile, die wir verstehen, ebenso wie der Teile, die wir nicht verstehen. Je mehr die Wissenschaft entdecke, desto mehr Grund habe man, den Schöpfer zu bewundern.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase', quote: 'Gott ist keine Alternative zur Wissenschaft als Erklärung und daher nicht bloß ein Gott der Lücken, sondern der Grund aller Erklärung; Bild vom Ford-Motor.', note: 'Quellenprüfung Nov. 2026: Der Schlussgedanke des Buchs (Gott sei keine Alternative zur Wissenschaft als Erklärung und darum nicht bloß ein Lückengott, sondern Grund aller Erklärung) wird in Sekundärquellen übereinstimmend zitiert. Die Formel „God of the whole show" ist in Vortragsberichten belegt (u. a. iForum der Karls-Universität Prag, 2014), im Buchtext aber nicht verifiziert – nur sinngemäß verwenden.' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph der historischen Wissenschaften',
      text: `Meyer weist den Vorwurf des Lückenarguments zurück: Der Schluss auf intelligentes Design stütze sich nicht auf das, was wir nicht wissen, sondern auf das, was wir über Ursache und Wirkung wissen. Wir kennen aus Erfahrung genau eine Ursache, die neue funktionale Information – etwa einen Computercode oder einen Text – hervorbringt: Intelligenz. Wenn die Biologie in der DNA digitale, funktionale Information findet, ist der Schluss auf Intelligenz eine Anwendung unseres Wissens nach derselben Methode, die Darwin und Lyell verwendeten. Meyer betont zudem, dass dieser Schluss durch Gegenbelege widerlegbar wäre.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', ref: 'Kap. 15–18', status: 'paraphrase', quote: 'Design als beste Erklärung aufgrund bekannter Ursache-Wirkungs-Strukturen.' },
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', status: 'paraphrase', quote: 'Die Gotteshypothese als Schluss auf die beste Erklärung in Kosmologie, Physik und Biologie.' },
      ],
    },
    {
      person: 'newton',
      role: 'als Physiker – mit einer ehrlichen Lektion',
      text: `Newton schloss sein Hauptwerk mit dem „Scholium Generale", in dem er die Ordnung des Sonnensystems als Werk eines intelligenten und mächtigen Wesens deutet. Dieses Hauptargument beruht auf der Gesamtordnung des Systems. Zugleich vermutete Newton, Gott müsse die Planetenbahnen gelegentlich korrigieren, weil sie sich gegenseitig stören – ein echtes Lückenargument, das spätere Himmelsmechanik überflüssig machte. Bezeichnenderweise kritisierte schon der Christ Leibniz diese Vorstellung als eines vollkommenen Schöpfers unwürdig. Newtons Beispiel zeigt beides: die Kraft des Arguments aus der Gesamtordnung und die Schwäche des Lückenarguments.`,
      sources: [
        { kind: 'wissenschaft', author: 'Isaac Newton', work: 'Philosophiae Naturalis Principia Mathematica, Scholium Generale (2. Aufl.)', year: '1713', quote: `This most beautiful System of the Sun, Planets, and Comets, could only proceed from the counsel and dominion of an intelligent and powerful being.`, translation: 'Englische Übersetzung von Andrew Motte (1729)', status: 'verbatim' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis',
      text: `Augustinus warnte schon um 400, Christen sollten über Erde, Himmel, Gestirne und Tiere nichts behaupten, was Kundige als offenkundig falsch erkennen – sonst würden Nichtchristen auch die Botschaft der Schrift über die Auferstehung und das ewige Leben verachten. Er unterschied zwischen dem, was die Schrift über Gott und das Heil lehrt, und Fragen der Naturkunde. Damit legte er den Grundstein für eine Haltung, die den Glauben nicht an vorläufige Wissenslücken bindet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'I,19,39', status: 'paraphrase', quote: 'Christen sollen über Naturdinge nichts Unhaltbares behaupten, damit die Schrift nicht in Verruf gerät.' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Theologe der Schöpfung',
      text: `Basilius deutet die Schöpfungsworte „Die Erde lasse aufgehen" so, dass Gott der Natur eine fortwirkende Kraft verliehen hat: Wie ein Kreisel, einmal angestoßen, sich weiterdreht, so wirkt die Ordnung der Natur, die Gottes erstes Gebot empfangen hat, durch alle Zeiten fort. Für Basilius ist das regelmäßige Wachsen, Blühen und Fruchtbringen also nicht ein Bereich, aus dem Gott verdrängt wäre, sondern gerade der Ort, an dem sich sein Wort entfaltet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'V,10', status: 'paraphrase', quote: 'Das Gebot Gottes an die Erde wirkt wie ein angestoßener Kreisel in der Natur fort.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'zeus-blitze',
      objection: `„Früher erklärte man Blitze mit Zeus und Krankheiten mit Dämonen. Heute haben wir Physik und Medizin. Gott ist eine immer kleiner werdende Tasche der Unwissenheit."`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Das trifft auf Götter zu, die als Erklärung *innerhalb* der Natur dienten – Zeus als Ursache von Blitzen. Der Gott der Bibel ist aber der Urheber der Naturgesetze selbst, auch der Elektrostatik, die den Blitz erklärt. Mechanismus und Urheber konkurrieren nicht: Wer versteht, wie ein Motor funktioniert, hat den Ingenieur nicht wegerklärt. Je mehr Ordnung wir entdecken, desto mehr stellt sich die Frage, woher diese Ordnung kommt.`,
      questionsBack: [`Wenn die Physik den Blitz erklärt – erklärt sie auch, warum es überhaupt physikalische Gesetze gibt?`],
      followUps: [
        {
          id: 'design-heutige-luecken',
          objection: `„Aber Feinabstimmung, Ursprung des Lebens, Information in der DNA – das sind doch genau die heutigen Lücken, in die ihr Gott stopft."`,
          objectionBy: 'Jerry Coyne',
          targetsPremise: 3,
          answer: `Diese Argumente beruhen auf Entdeckungen, nicht auf Unwissen. Dass die Konstanten fein abgestimmt sind, *wissen* wir aus der Physik; dass die DNA digitale, funktionale Information enthält, *wissen* wir aus der Molekularbiologie. Der Schluss auf Intelligenz stützt sich auf unser Wissen, dass Intelligenz solche Wirkungen hervorbringt. Das ist dieselbe Logik, mit der Archäologen eine Inschrift als menschliches Werk erkennen.`,
          detail: `Siehe „Die Origin-of-Life-Forschung hat nur eine Wissenslücke" und „Intelligent Design ist keine Wissenschaft".`,
          followUps: [
            {
              id: 'design-doch-unwissenheit',
              objection: `„Trotzdem ist es ein Argument aus Unwissenheit: Du kennst bloß noch keine natürliche Ursache."`,
              objectionBy: 'Sean Carroll',
              targetsPremise: 2,
              answer: `Jeder Schluss auf eine Ursache in den historischen Wissenschaften hat die Form: „Unter den bekannten Ursachen erklärt diese am besten." Darwin selbst schloss so auf die natürliche Selektion. Wenn ein Radioteleskop eine Folge der ersten hundert Primzahlen empfinge, würde niemand sagen: „Wir kennen nur noch keine natürliche Ursache." Der Schluss wäre durch einen nachgewiesenen natürlichen Mechanismus widerlegbar – er ist also wissenschaftlich prüfbar, nicht immunisiert.`,
              followUps: [
                {
                  id: 'mechanismus-morgen',
                  objection: `„Und wenn wir morgen einen natürlichen Mechanismus finden, fällt dein Gott."`,
                  objectionBy: 'Lawrence Krauss',
                  answer: `Dann fiele ein bestimmtes Design-Argument – nicht Gott. Mein Glaube hängt nicht an einer einzelnen Lücke, sondern an vielen unabhängigen Gründen: der Existenz der Welt, ihrem Anfang, ihrer Verständlichkeit, dem Bewusstsein, der Auferstehung. Und jeder neue Mechanismus wirft die Frage auf, woher *seine* präzise Abstimmung kommt. Information verschwindet nicht dadurch, dass man ihre Quelle eine Stufe zurückverlegt.`,
                },
              ],
            },
          ],
        },
        {
          id: 'newton-laplace',
          objection: `„Newton brauchte Gott, um die Planetenbahnen zu stabilisieren, und Laplace zeigte, dass das unnötig war. Genau das ist euer Fehler."`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Da hast du recht, und ich gebe es offen zu: Newtons Annahme, Gott müsse die Bahnen nachbessern, war ein Lückenargument. Bezeichnenderweise hat es schon der Christ Leibniz kritisiert – ein vollkommener Schöpfer brauche seine Uhr nicht ständig zu reparieren. Newtons Hauptargument war aber die Ordnung des ganzen Systems, und die hat Laplace nicht wegerklärt, sondern mit seinen Gesetzen noch eindrucksvoller gemacht. Die berühmte Laplace-Anekdote ist übrigens erst spät und unsicher überliefert.`,
          detail: `Siehe „Ockhams Rasiermesser: Gott ist eine unnötige Hypothese".`,
        },
      ],
    },
    {
      id: 'wissenschaftsstopper',
      objection: `„‚Ich weiß es nicht' ist ehrlicher als ‚Gott war's'. Gott als Erklärung ist ein Wissenschaftsstopper – warum noch forschen, wenn Gott es getan hat?"`,
      objectionBy: 'Richard Dawkins / Lawrence Krauss',
      answer: `Historisch war es umgekehrt: Kepler, Boyle, Newton, Faraday und Maxwell forschten gerade *weil* sie glaubten, dass ein vernünftiger Gesetzgeber die Welt geordnet hat – das war ihr Grund, nach Gesetzen zu suchen. Gott ist keine Erklärung *anstelle* eines Mechanismus, sondern die Erklärung dafür, *dass* es verlässliche Mechanismen gibt. „Ich weiß es nicht" ist völlig in Ordnung – aber „Ich weiß es nicht, also muss es eine natürliche Ursache geben" ist ebenfalls ein Glaubenssatz.`,
      followUps: [
        {
          id: 'galilei-behinderung',
          objection: `„Die Religion hat die Wissenschaft immer behindert – denk an Galilei."`,
          objectionBy: 'Jerry Coyne',
          answer: `Der Fall Galilei war ein echter Missgriff kirchlicher Autorität, den man nicht beschönigen sollte. Aber er war eine Verwicklung aus Wissenschaftsstreit, Kirchenpolitik und persönlichen Konflikten, nicht ein Kampf „Glaube gegen Wissenschaft" – Galilei selbst blieb gläubig und schrieb, Schrift und Natur könnten einander nicht widersprechen, weil beide von Gott stammen. Wissenschaftshistoriker halten die These vom ewigen Krieg zwischen Religion und Wissenschaft heute für einen Mythos.`,
          detail: `Siehe „Der Fall Galilei beweist die Wissenschaftsfeindlichkeit der Kirche".`,
        },
      ],
    },
    {
      id: 'wissenschaft-wird-alles-erklaeren',
      objection: `„Die Wissenschaft wird irgendwann alles erklären – auch den Anfang des Universums und das Bewusstsein. Es ist nur eine Frage der Zeit."`,
      objectionBy: 'Lawrence Krauss / Sean Carroll',
      answer: `Das ist ein Versprechen, keine Erklärung – Karl Popper nannte es „promissorischen Materialismus". Es ist der Lückenbüßer-Fehler mit umgekehrtem Vorzeichen: Statt „Gott war's" heißt es „Die Natur wird's gewesen sein". Zudem gibt es Fragen, die die Naturwissenschaft grundsätzlich nicht beantworten kann, weil sie sie voraussetzt: Warum gibt es überhaupt etwas? Warum gibt es Naturgesetze? Warum ist die Welt mathematisch verständlich?`,
      sources: [
        { kind: 'fachliteratur', author: 'Karl R. Popper & John C. Eccles', work: 'The Self and Its Brain', year: '1977', ref: 'Teil I, Abschnitt „The New Promissory Materialism"', status: 'paraphrase', quote: 'Kritik an der Vertröstung auf künftige materialistische Erklärungen.' },
      ],
      followUps: [
        {
          id: 'extrapolation-erfolg',
          objection: `„Das ist kein Glaube, sondern eine gut begründete Extrapolation aus dem bisherigen Erfolg der Wissenschaft."`,
          objectionBy: 'Sean Carroll',
          answer: `Der bisherige Erfolg betrifft Erklärungen *innerhalb* der Natur – wie ein Ding aus einem anderen folgt. Daraus folgt nicht, dass auch die Natur als Ganze erklärt werden kann, ohne über sie hinauszugehen. Und nicht alle Probleme werden mit mehr Wissen kleiner: Die Frage nach dem Ursprung des Lebens ist mit jeder Entdeckung der zellulären Komplexität schwieriger geworden, und beim Bewusstsein musste Christof Koch 2023 zugeben, dass die erhoffte neuronale Signatur ausgeblieben ist.`,
        },
      ],
    },
    {
      id: 'methodischer-naturalismus-regel',
      objection: `„Wissenschaft arbeitet per Definition mit natürlichen Ursachen. Übernatürliche Erklärungen sind nicht falsch, sondern schlicht außerhalb der Wissenschaft. Jeder Schluss auf Gott ist deshalb automatisch keine Wissenschaft – Punkt."`,
      objectionBy: 'Eugenie Scott / Robert Pennock',
      answer: `Als Arbeitsregel im Labor ist das vernünftig: Wer eine Krankheit erforscht, sucht natürliche Ursachen. Aber wenn man es zur unumstößlichen Definition macht, entsteht ein seltsames Ergebnis: Selbst wenn die Welt tatsächlich einen Schöpfer hätte, dürfte die Wissenschaft es niemals feststellen. Dann ist sie kein Verfahren mehr, die Wahrheit zu finden, sondern ein Spiel mit Regeln, die eine Antwort von vornherein ausschließen. Im Übrigen brauche ich keine Wissenschaftsetikette: Das Kontingenzargument ist Philosophie, und Philosophie ist eine legitime Form des Wissens.`,
      detail: `Die Unterscheidung zwischen **methodischem** Naturalismus (eine Forschungsregel) und **metaphysischem** Naturalismus (nur Natur existiert) ist wichtig – viele gläubige Wissenschaftler arbeiten methodisch naturalistisch. Problematisch wird es, wenn die Regel als Argument für den metaphysischen Naturalismus benutzt wird. Der Wissenschaftsphilosoph Larry Laudan hat zudem gezeigt, dass es kein allgemein anerkanntes Kriterium gibt, das Wissenschaft von Nicht-Wissenschaft sauber trennt. Und Archäologie, Kriminalistik oder die Suche nach außerirdischer Intelligenz (SETI) schließen ganz selbstverständlich auf intelligente Ursachen.`,
      sources: [
        { kind: 'gegner', author: 'Robert T. Pennock', work: 'Tower of Babel: The Evidence against the New Creationism', year: '1999', status: 'paraphrase', quote: 'Wissenschaft sei methodisch naturalistisch; übernatürliche Hypothesen seien prinzipiell nicht prüfbar.' },
        { kind: 'fachliteratur', author: 'Larry Laudan', work: '„The Demise of the Demarcation Problem", in: R. S. Cohen & L. Laudan (Hg.), Physics, Philosophy and Psychoanalysis', year: '1983', status: 'paraphrase', quote: 'Es gebe kein tragfähiges Kriterium, das Wissenschaft eindeutig von Nicht-Wissenschaft abgrenzt.', note: 'Laudan ist kein Verteidiger des Theismus; sein Punkt ist wissenschaftstheoretisch.' },
      ],
      questionsBack: [`Wenn die Welt tatsächlich einen Schöpfer hätte – sollte die Wissenschaft das dann grundsätzlich nicht herausfinden dürfen?`],
      followUps: [
        {
          id: 'kitzmiller-gericht',
          objection: `„Das ist längst entschieden: Im Prozess Kitzmiller gegen Dover (2005) hat ein US-Bundesgericht festgestellt, dass Intelligent Design keine Wissenschaft, sondern verkappter Kreationismus ist."`,
          objectionBy: 'Jerry Coyne / Kenneth Miller',
          answer: `Ein Gericht entscheidet, was an öffentlichen Schulen gelehrt werden darf – nicht, was wahr ist, und nicht, was Wissenschaft ist. Über solche Fragen urteilen Argumente, keine Richter. Zudem geht es mir hier gar nicht um ein biologisches Design-Argument: Das Kontingenz- und das kosmologische Argument sind philosophische Argumente, die schon Athanasius, Philoponos und Leibniz vertraten. Und Christen sind sich über Intelligent Design selbst nicht einig – es gibt gläubige Biologen, die die Evolution als Gottes Werkzeug sehen.`,
          detail: `Das Urteil von Richter John E. Jones III (Dezember 2005) betraf den Lehrplan eines Schulbezirks in Pennsylvania und die US-Verfassung (Trennung von Staat und Religion). Für die philosophische Frage, ob die Welt einen Schöpfer hat, ist es nicht einschlägig. Fair bleibt: Die Mehrheit der Biologen lehnt Intelligent Design als wissenschaftliche Theorie ab; wer es vertritt, muss sich auf die Fachdebatte einlassen (siehe „Intelligent Design ist keine Wissenschaft").`,
          questionsBack: [`Entscheiden Gerichte über die Wahrheit philosophischer Argumente?`],
        },
        {
          id: 'bilanz-hundert-zu-null',
          objection: `„Die Bilanz ist eindeutig: Jedes Rätsel, das je gelöst wurde, hatte eine natürliche Lösung. Hundert zu null. Induktiv ist es also hochwahrscheinlich, dass auch die verbleibenden Rätsel natürlich gelöst werden."`,
          objectionBy: 'Jerry Coyne (Faith vs. Fact, 2015)',
          answer: `Die Bilanz ist weniger eindeutig, als sie klingt – denn was die Naturwissenschaft erklärt, ist per Definition natürlich; die Zählung ist also eingebaut. Außerdem ging die Wissenschaft nicht immer in Richtung Naturalismus: Viele Physiker des 20. Jahrhunderts erwarteten ein ewiges Universum und mussten widerwillig einen Anfang anerkennen. Arthur Eddington schrieb 1931, die Vorstellung eines Anfangs sei ihm philosophisch „zuwider" – die Daten setzten sich trotzdem durch.`,
          detail: `Die Urknall-Kosmologie wurde vom belgischen Priester und Physiker Georges Lemaître vorgeschlagen und stieß zunächst auf Widerstand, gerade weil sie an eine Schöpfung erinnerte; den Namen „Big Bang" prägte Fred Hoyle, ein Verfechter des ewigen Steady-State-Universums, 1949 eher spöttisch in einer BBC-Sendung. Das zeigt: Die Entwicklung der Kosmologie verlief nicht als gerader Siegeszug des Naturalismus.`,
          sources: [
            { kind: 'wissenschaft', author: 'Arthur S. Eddington', work: '„The End of the World (from the Standpoint of Mathematical Physics)", Nature 127', year: '1931', quote: `Philosophisch ist mir die Vorstellung eines Anfangs der gegenwärtigen Ordnung der Natur zuwider.`, original: 'Philosophically, the notion of a beginning of the present order of Nature is repugnant to me.', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'urknall-akzeptiert-trotzdem',
              objection: `„Na und? Die Wissenschaftler haben den Urknall akzeptiert, als die Belege kamen. Das zeigt doch gerade, dass die Wissenschaft den Daten folgt – und der Urknall beweist keinen Gott."`,
              objectionBy: 'Lawrence Krauss / Sean Carroll',
              answer: `Genau – und um nichts anderes bitte ich: den Belegen folgen, auch wenn sie unbequem sind. Der Urknall allein beweist keinen Gott, das stimmt; aber er hat eine naturalistische Erwartung (ein ewiges Universum) widerlegt und eine Erwartung der Schrift bestätigt: dass die Welt einen Anfang hat. Lemaître selbst war hier vorbildlich ehrlich: Er warnte davor, seine Theorie als physikalischen Schöpfungsbeweis auszugeben – sein Glaube brauchte keine Lücke und keine Theorie als Stütze.`,
              detail: `Als Papst Pius XII. 1951 die neue Kosmologie mit der Schöpfung in Verbindung brachte, war Lemaître besorgt und plädierte dafür, Physik und Theologie nicht zu vermischen; in späteren Ansprachen äußerte sich der Papst zurückhaltender. Für das Gespräch heißt das: Das kosmologische Argument stützt sich nicht auf „Die Physik weiß es nicht", sondern auf das, was die Physik herausgefunden hat – und deutet es philosophisch.`,
              voices: [
                {
                  person: 'lemaitre',
                  role: 'als Kosmologe und Priester',
                  text: `Lemaître entwickelte das Modell eines expandierenden Universums mit einem Anfang, dem „Uratom". Er hielt Wissenschaft und Glauben auseinander: Der Glaube an den Schöpfer brauche keine physikalische Theorie, und keine physikalische Theorie dürfe zum Dogma gemacht werden. Gerade diese Nüchternheit macht ihn zum Gegenbild eines Lückenbüßer-Denkens.`,
                },
              ],
            },
          ],
        },
        {
          id: 'gott-erklaert-alles-nichts',
          objection: `„Gott erklärt alles – und damit nichts. Jede denkbare Beobachtung ist mit ‚Gott hat es so gewollt' vereinbar. Eine Erklärung, die nichts ausschließt, ist wertlos."`,
          objectionBy: 'Richard Dawkins',
          answer: `Der Theismus schließt durchaus etwas aus: Ein guter, vernünftiger Schöpfer lässt eine geordnete, gesetzmäßige, mathematisch verständliche Welt erwarten, in der bewusste, moralische Personen entstehen können – kein Chaos ohne Regelmäßigkeiten. Genau eine solche Welt finden wir, und das ist keine Selbstverständlichkeit. Umgekehrt ist „Es ist eben natürlich passiert" mindestens ebenso dehnbar wie „Gott hat es gewollt".`,
          detail: `Swinburne argumentiert, dass der Theismus bestimmte Daten wahrscheinlicher macht als ihr Fehlen: die Existenz eines Universums, seine Gesetzmäßigkeit, die Feinabstimmung, Bewusstsein, moralisches Bewusstsein und Gelegenheiten zu verantwortlichem Handeln. Polkinghorne betont die „unvernünftige Wirksamkeit der Mathematik": Dass das Universum in der Sprache der Mathematik lesbar ist, passt zu einer Welt, die aus dem Logos stammt.`,
          voices: [
            {
              person: 'polkinghorne',
              role: 'als theoretischer Physiker und Theologe',
              text: `Polkinghorne verweist darauf, dass die Physik ständig die Erfahrung macht, dass schöne, abstrakte Mathematik die Struktur der Natur trifft. Für ihn ist diese tiefe Verständlichkeit der Welt kein Zufall, sondern ein Hinweis auf einen Geist hinter dem Universum – eine Erklärung, die die Wissenschaft voraussetzt, aber nicht selbst liefern kann.`,
              sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'was-wuerde-widerlegen',
              objection: `„Dann nenn mir eine konkrete Beobachtung, die deinen Glauben widerlegen würde."`,
              objectionBy: "Alex O'Connor",
              answer: `Gern: Würde man zeigen, dass Jesus nicht auferstanden ist, wäre das Christentum nach Paulus' eigenem Maßstab erledigt (1 Kor 15,14–17). Gäbe es keine objektiven moralischen Wahrheiten, verlöre das moralische Argument seine Grundlage. Wäre das Universum ewig, gesetzlos oder lebensfeindlich, fielen wichtige Hinweise weg. Mein Glaube ist also nicht gegen jede mögliche Erfahrung immun – er setzt sich bestimmten Tatsachen aus.`,
              questionsBack: [`Und welche Beobachtung würde deinen Naturalismus widerlegen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Verdrängt die Erklärung des Motors den Ingenieur, der ihn gebaut hat?`,
    `Beruht der Anfang des Universums auf Unwissen – oder auf dem, was die Kosmologie herausgefunden hat?`,
    `Ist „Die Wissenschaft wird es schon erklären" nicht selbst ein Lückenfüller?`,
    `Welche Entdeckung würde dir zeigen, dass ein Problem prinzipiell und nicht nur vorläufig ungelöst ist?`,
  ],
  avoid: [
    `„Das kann die Wissenschaft nicht erklären, also war es Gott." – Genau das ist der Lückenfehler.`,
    `Gott an aktuelle Forschungslücken binden, die sich schließen könnten (etwa einzelne Fossillücken).`,
    `Die Laplace-Anekdote als gesicherte Tatsache oder Newton als Musterbeispiel darstellen, ohne seinen Fehler zu nennen.`,
  ],
  concessions: [
    `Christen haben in der Geschichte tatsächlich Lückenargumente gebraucht, und manche Lücken haben sich geschlossen.`,
    `„Wir wissen es noch nicht" ist in vielen Forschungsfragen die ehrliche Antwort – auch für Christen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker / Hat die Wissenschaft Gott begraben?', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Charles A. Coulson', work: 'Science and Christian Belief', year: '1955', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Lückenbüßer-Gott', 'Wissenschaft und Glaube', 'Schluss auf die beste Erklärung', 'Newton', 'Promissorischer Materialismus'],
  related: [
    'naturalismus/ockham-unnoetige-hypothese',
    'ursprung-des-lebens/ool-nur-wissensluecke',
    'evolution/id-keine-wissenschaft',
    'feinabstimmung/feinabstimmung-illusion',
    'kirchengeschichte-mythen/galilei',
    'gottesbeweise/kalam-widerlegt',
    'chemie-biochemie/dna-ist-keine-information',
  ],
};

export default claim;
