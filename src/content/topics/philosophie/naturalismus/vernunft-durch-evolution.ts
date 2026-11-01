import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vernunft-durch-evolution',
  title: `„Die Evolution hat uns verlässliche Vernunft gegeben."`,
  proponents: [
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University', work: 'Darwin\'s Dangerous Idea (1995)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'How the Mind Works (1997); Rationality (2021)' },
    { name: 'Branden Fitelson & Elliott Sober', role: 'Wissenschaftsphilosophen', work: '„Plantinga\'s Probability Arguments Against Evolutionary Naturalism", Pacific Philosophical Quarterly 79 (1998)' },
    { name: 'Stephen Law', role: 'Philosoph, University of Oxford (Department for Continuing Education)', work: '„Naturalism, Evolution and True Belief", Analysis 72 (2012)' },
  ],
  steelman: `Ein Lebewesen, das einen Tiger für einen Busch hält, wird gefressen; eines, das giftige Beeren für nahrhaft hält, stirbt. Die natürliche Selektion belohnt also Wesen, deren Wahrnehmung und Denken die Welt zutreffend erfassen. So entstanden im Lauf von Jahrmillionen kognitive Fähigkeiten, die verlässlich genug sind, um sich in einer komplexen Umwelt zurechtzufinden – und die sich in Form von Wissenschaft, Mathematik und Technik eindrucksvoll bewährt haben. Plantingas „evolutionäres Argument gegen den Naturalismus" beruht dagegen auf willkürlich gewählten Wahrscheinlichkeiten und auf der falschen Annahme, der Inhalt einer Überzeugung habe keinen Einfluss auf das Verhalten. Wir brauchen keinen Gott, um unserer Vernunft zu trauen – ihr Erfolg ist Beweis genug.`,
  biblical: {
    summary: `Die Bibel begründet das Vertrauen in die menschliche Vernunft mit der Schöpfung: Der Mensch ist nach dem Bild des vernünftigen Gottes geschaffen (Gen 1,27), der Logos ist „das wahrhaftige Licht, welches alle Menschen erleuchtet" (Joh 1,9), und „der Odem des Allmächtigen" macht den Menschen verständig (Hiob 32,8). Gott lädt den Menschen ausdrücklich zum vernünftigen Abwägen ein: „Kommt denn und laßt uns miteinander rechten" (Jes 1,18).`,
    detail: `- **Joh 1,1–9:** Der *Logos* – Wort, Vernunft, Sinn – ist der Ursprung der Welt *und* das Licht im menschlichen Geist. Die Vernünftigkeit der Welt und die Vernunft des Menschen haben denselben Ursprung; darum passen sie zusammen.
- **Gen 1,27:** Die Gottebenbildlichkeit wurde von den Vätern vor allem auf die Vernunftbegabung (*to logikon*) bezogen.
- **Spr 2,6:** „Der HERR gibt Weisheit" – Erkenntnisfähigkeit ist Gabe, nicht Zufallsprodukt.
- **Wichtig:** Diese Texte schließen eine evolutionäre Entwicklung des Gehirns nicht aus; sie sagen, dass die Vernunft, auf welchem Weg auch immer, von Gott auf Wahrheit hin geordnet ist.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,9', quote: `Das war das wahrhaftige Licht, welches alle Menschen erleuchtet, die in diese Welt kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '32,8', quote: `Aber der Geist ist in den Leuten und der Odem des Allmächtigen, der sie verständig macht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '1,18', quote: `So kommt denn und laßt uns miteinander rechten, spricht der HERR.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '2,6', quote: `Denn der HERR gibt Weisheit, und aus seinem Munde kommt Erkenntnis und Verstand.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die alexandrinische Theologie ist die menschliche Vernunft eine Teilhabe am göttlichen Logos. Der hl. Athanasius lehrt, dass Gott die Menschen nicht wie die übrigen Lebewesen schuf, sondern ihnen einen Anteil an der Kraft seines eigenen Logos schenkte, damit sie „vernünftig" (*logikoi*) seien und in der Erkenntnis Gottes leben könnten. Justin der Märtyrer spricht vom „Samen des Logos", der in jedem Menschen ist. Darum ist das Vertrauen in die Vernunft für Christen begründet – sie stammt aus derselben Quelle wie die Ordnung der Welt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3', status: 'paraphrase', quote: 'Gott schenkte den Menschen einen Anteil an der Kraft seines eigenen Logos, damit sie, gleichsam Schatten des Logos, vernünftig seien.' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '2. Apologie', ref: '8; 13', status: 'paraphrase', quote: 'In allen Menschen ist ein Same des Logos; darum konnten auch Philosophen Wahres erkennen.' },
    ],
  },
  opposingView: {
    summary: `Plantingas „evolutionäres Argument gegen den Naturalismus" (EAAN, 1993; ausführlich 2011) gehört zu den meistdiskutierten Argumenten der gegenwärtigen Religionsphilosophie; ein ganzer Sammelband (Beilby 2002) ist ihm gewidmet. Die Mehrheit der Fachphilosophen hält es nicht für zwingend; die Haupteinwände betreffen die Wahrscheinlichkeitsabschätzung und die Frage, ob der Inhalt von Überzeugungen kausal relevant ist. Bemerkenswert ist aber, dass auch Nicht-Theisten das Grundproblem sehen: Charles Darwin äußerte den „horrid doubt", Thomas Nagel hält eine rein darwinistische Erklärung der Vernunft für unzureichend, und der Kognitionswissenschaftler Donald Hoffman argumentiert, dass Evolution Fitness belohnt, nicht wahrheitsgetreue Wahrnehmung.`,
    sources: [
      { kind: 'fachliteratur', author: 'James Beilby (Hg.)', work: 'Naturalism Defeated? Essays on Plantinga\'s Evolutionary Argument Against Naturalism', year: '2002', status: 'paraphrase', quote: 'Sammelband mit Kritiken und Plantingas Antworten.' },
      { kind: 'wissenschaft', author: 'Donald D. Hoffman', work: 'The Case Against Reality: Why Evolution Hid the Truth from Our Eyes', year: '2019', status: 'paraphrase', quote: 'Nach evolutionsspieltheoretischen Simulationen setzen sich Wahrnehmungssysteme durch, die auf Fitness abgestimmt sind, nicht auf Wahrheit; Wahrnehmung ist eine Benutzeroberfläche.', note: 'Hoffman ist kein Theist; er nimmt Logik und Mathematik von seiner Skepsis aus.' },
      { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an William Graham, 3. Juli 1881', quote: `But then with me the horrid doubt always arises whether the convictions of man's mind, which has been developed from the mind of the lower animals, are of any value or at all trustworthy. Would any one trust in the convictions of a monkey's mind, if there are any convictions in such a mind?`, status: 'verbatim', url: 'https://www.darwinproject.ac.uk/letter/DCP-LETT-13230.xml', note: 'Im Zusammenhang bezieht Darwin den Zweifel auf seine „innere Überzeugung", das Universum sei nicht das Ergebnis des Zufalls.' },
    ],
  },
  quickAnswer: `Die Evolution wählt aus, was beim Überleben hilft – nicht, was wahr ist. Wahre Überzeugungen helfen oft, aber auch falsche können zu nützlichem Verhalten führen, und abstraktes Denken über Mathematik, Metaphysik oder Kosmologie hat mit Überleben kaum etwas zu tun. Darwin selbst hatte den „schrecklichen Zweifel", ob man den Überzeugungen eines aus Tieren entwickelten Geistes trauen kann. Alvin Plantinga zeigt: Wenn Naturalismus *und* Evolution wahr sind, gibt es keinen guten Grund mehr, unserer Vernunft zu trauen – auch nicht beim Glauben an den Naturalismus. Wer dagegen glaubt, dass Gott uns nach seinem Bild geschaffen hat, hat einen Grund, der Vernunft zu vertrauen – auch wenn Gott sich dafür der Evolution bedient haben mag.`,
  keyPoints: [
    `**Selektion „sieht" Verhalten, nicht Wahrheit:** Für das Überleben zählt, was ein Organismus tut. Dasselbe nützliche Verhalten ist mit vielen falschen Überzeugungen vereinbar.`,
    `**Abstraktes Denken ist überlebensirrelevant:** Ob die Riemann'sche Vermutung stimmt oder der Naturalismus wahr ist, hatte für unsere Vorfahren in der Savanne keine Bedeutung.`,
    `**Darwins „horrid doubt" (1881):** Darwin selbst fragte, ob man den Überzeugungen eines aus niederen Tieren entwickelten Geistes trauen könne. Patricia Churchland: Für das Nervensystem zähle Überleben – die Wahrheit komme „zuletzt".`,
    `**Plantingas EAAN:** Wer Naturalismus und Evolution annimmt, hat einen Unterminierer für die Verlässlichkeit seiner Vernunft – und damit für alle seine Überzeugungen, einschließlich des Naturalismus. Die Verbindung widerlegt sich selbst.`,
    `**Theismus begründet Vernunftvertrauen:** Wenn der Logos die Welt geordnet und den Menschen zur Erkenntnis geschaffen hat, ist es zu erwarten, dass Welt und Vernunft zusammenpassen. Evolution und Schöpfung sind hier kein Gegensatz.`,
    `**C. S. Lewis' Argument aus der Vernunft:** Wenn unser Denken vollständig durch vernunftlose Ursachen bestimmt wäre, hätten wir keinen Grund, es für gültig zu halten.`,
  ],
  argument: {
    name: 'Plantingas evolutionäres Argument gegen den Naturalismus (EAAN)',
    summary: 'Naturalismus und Evolution zusammen untergraben das Vertrauen in die Vernunft, auf dem sie selbst beruhen.',
    premises: [
      {
        text: 'P1: Die Wahrscheinlichkeit, dass unsere kognitiven Fähigkeiten verlässlich sind, gegeben Naturalismus und Evolution (P(R | N & E)), ist gering oder nicht abschätzbar.',
        support: `Unter dem Naturalismus ist eine Überzeugung ein neurophysiologischer Zustand. Selektiert wird er wegen seiner Wirkung auf das Verhalten, nicht wegen der Wahrheit seines Inhalts. Plantingas Beispiel: „Paul" möchte gefressen werden, glaubt aber jedes Mal, wenn er einen Tiger sieht, er finde gleich einen besseren – und läuft weg. Sein Verhalten ist überlebensdienlich, seine Überzeugungen sind falsch. Unzählige solcher Kombinationen sind denkbar.`,
        sources: [
          { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warrant and Proper Function', year: '1993', ref: 'Kap. 12', status: 'paraphrase', quote: 'Erste Fassung des EAAN mit dem Beispiel des Frühmenschen Paul.' },
          { kind: 'gegner', author: 'Patricia S. Churchland', work: '„Epistemology in the Age of Neuroscience", Journal of Philosophy 84', year: '1987', quote: `Boiled down to essentials, a nervous system enables the organism to succeed in the four F's: feeding, fleeing, fighting, and reproducing. […] Truth, whatever that is, definitely takes the hindmost.`, status: 'paraphrase', note: 'Vielfach zitiert (u. a. von Plantinga); Wortlaut und Seitenzahl vor wörtlicher Verwendung am Original prüfen.' },
        ],
      },
      {
        text: 'P2: Wer N & E akzeptiert und P1 erkennt, hat einen Unterminierer (Defeater) für die Annahme, dass seine kognitiven Fähigkeiten verlässlich sind.',
        support: `Vergleich: Wer erfährt, dass er eine Droge genommen hat, die bei der Mehrzahl der Menschen die Urteilsfähigkeit zerstört, hat Grund, seinen eigenen Urteilen zu misstrauen – auch wenn sie sich „richtig anfühlen".`,
      },
      {
        text: 'P3: Wer einen Unterminierer für die Verlässlichkeit seiner Fähigkeiten hat, hat einen Unterminierer für jede Überzeugung, die er mit diesen Fähigkeiten gebildet hat – einschließlich N & E.',
        support: `Jeder Versuch, die Verlässlichkeit zu bestätigen, müsste dieselben fragwürdigen Fähigkeiten benutzen – wie man einen möglicherweise defekten Taschenrechner nicht mit sich selbst überprüfen kann.`,
      },
    ],
    conclusion: 'Also kann man Naturalismus und Evolution nicht zugleich rational akzeptieren; die Verbindung widerlegt sich selbst. Der Konflikt besteht nicht zwischen Glaube und Evolution, sondern zwischen Naturalismus und Evolution.',
  },
  voices: [
    {
      person: 'plantinga',
      role: 'als Urheber des EAAN',
      text: `Plantinga betont, dass sein Argument nicht gegen die Evolution gerichtet ist, sondern gegen ihre Verbindung mit dem Naturalismus. Wenn Gott die Evolution lenkt oder zulässt, um vernunftbegabte Wesen nach seinem Bild hervorzubringen, gibt es keinen Grund, an der Verlässlichkeit unserer Vernunft zu zweifeln. Wenn aber blinde Prozesse allein unser Denken geformt haben, die nur auf Überlebensvorteil achten, ist völlig offen, ob unsere Überzeugungen wahr sind. Daher sein provokanter Schluss: Es gibt einen oberflächlichen Konflikt zwischen Wissenschaft und Theismus, aber einen tiefen Konflikt zwischen Wissenschaft und Naturalismus.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', ref: 'Kap. 10', status: 'paraphrase', quote: 'Der wahre Konflikt besteht zwischen Wissenschaft und Naturalismus, nicht zwischen Wissenschaft und Theismus.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Vertreter des Arguments aus der Vernunft',
      text: `Lewis formuliert im dritten Kapitel seines Buches „Wunder" das „Argument aus der Vernunft": Wenn jedes Denken vollständig durch vernunftlose Ursachen – Atombewegungen, biologische Prozesse – bestimmt wäre, dann wäre eine Überzeugung nicht deshalb entstanden, weil sie gut begründet ist, sondern weil die Ursachen sie hervorgebracht haben. Dann hätten wir keinen Grund, unser Denken für gültig zu halten – auch nicht das Denken, das zum Naturalismus führt. Nach einer Kritik der Philosophin Elizabeth Anscombe (1948) überarbeitete Lewis das Kapitel 1960 und schärfte die Unterscheidung zwischen Ursache und Grund.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', year: '1947; überarb. 1960', ref: 'Kap. 3 („The Cardinal Difficulty of Naturalism")', status: 'paraphrase', quote: 'Wenn alles Denken durch vernunftlose Ursachen bestimmt ist, verliert es seinen Anspruch auf Gültigkeit – auch das Denken des Naturalisten.' },
        { kind: 'fachliteratur', author: 'J. B. S. Haldane', work: 'Possible Worlds and Other Essays („When I Am Dead")', year: '1927', quote: `If my mental processes are determined wholly by the motions of atoms in my brain, I have no reason to suppose that my beliefs are true.`, status: 'verbatim', note: 'Haldane war Biologe und später Marxist; Lewis zitiert den Gedanken in „Wunder", Kap. 3.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Athanasius beschreibt die Erschaffung des Menschen als besondere Gnade: Während die übrigen Lebewesen nur nach ihrer Art geschaffen wurden, gab Gott dem Menschen Anteil an der Kraft seines eigenen Logos. Dadurch ist der Mensch „logikos" – vernunftbegabt –, fähig, Gott und die Ordnung der Welt zu erkennen. Wenn diese Teilhabe durch die Sünde verdunkelt wird, verfällt auch die Erkenntnis; die Menschwerdung des Logos stellt sie wieder her. Für Athanasius ist Vernunft also nicht ein glücklicher Zufall, sondern das Bild des göttlichen Logos im Menschen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3; 11–13', status: 'paraphrase', quote: 'Teilhabe am Logos als Grund der menschlichen Vernunft und Gotteserkenntnis; ihre Erneuerung durch die Menschwerdung.' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox fragt in seinen Debatten mit Dawkins und anderen, warum ein Naturalist überhaupt seinem eigenen Verstand trauen sollte. Wenn das Gehirn das Ergebnis eines ungelenkten Prozesses ist, der auf Überleben, nicht auf Wahrheit ausgerichtet ist, untergräbt der Naturalismus die Rationalität, auf die sich die Wissenschaft stützt. Lennox verweist darauf, dass die Begründer der modernen Wissenschaft die Verständlichkeit der Natur gerade deshalb erwarteten, weil sie an einen vernünftigen Schöpfer glaubten. Der Theismus erklärt, warum Wissenschaft möglich ist; der Naturalismus muss es voraussetzen.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', ref: 'Kap. 3', status: 'paraphrase', quote: 'Der Naturalismus untergräbt die Rationalität, auf die die Wissenschaft angewiesen ist; der Theismus begründet sie.' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Kritiker der Selbstzerstörung des Denkens',
      text: `In „Orthodoxie" warnt Chesterton vor dem „Selbstmord des Denkens": einer Skepsis, die am Ende die Gültigkeit des Denkens selbst bestreitet. Wer erklärt, unsere Gedanken seien nur Produkte von Vererbung oder Umwelt, ohne Bezug zur Wahrheit, schneide den Ast ab, auf dem jede Argumentation sitzt – auch die eigene. Für Chesterton ist das Vertrauen in die Vernunft selbst ein Akt des Glaubens, der im Christentum seinen Grund findet, während der konsequente Materialismus ihn untergräbt.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie (Orthodoxy)', year: '1908', ref: 'Kap. 3 („The Suicide of Thought")', status: 'paraphrase', quote: 'Eine Denkweise, die die Gültigkeit des Denkens bestreitet, ist der Selbstmord des Denkens.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'tiger-busch',
      objection: `„Wer den Tiger für einen Busch hält, wird gefressen. Wahre Überzeugungen helfen beim Überleben – also hat die Selektion verlässliches Denken hervorgebracht."`,
      objectionBy: 'Daniel Dennett / Steven Pinker',
      targetsPremise: 1,
      answer: `Für die Selektion zählt, was ein Lebewesen *tut*, nicht, was es glaubt. Dasselbe rettende Verhalten – Weglaufen – kann mit vielen falschen Überzeugungen einhergehen: „Der Tiger ist ein freundliches Kätzchen, und ich laufe zum Spielen weg" führt genauso zum Überleben. Und für abstrakte Fragen – Mathematik, Metaphysik, ob der Naturalismus wahr ist – gibt es überhaupt keinen Selektionsdruck. Gerade diese Überzeugungen brauchen wir aber in unserer Debatte.`,
      questionsBack: [`Welchen Überlebensvorteil hatte es für unsere Vorfahren, die Wahrheit über die Natur der Kausalität oder die Existenz Gottes zu erkennen?`],
      followUps: [
        {
          id: 'insgesamt-nuetzlicher',
          objection: `„Im Einzelfall vielleicht. Aber systematisch sind wahre Überzeugungen nützlicher als falsche – sonst wären wir als Spezies nicht so erfolgreich."`,
          objectionBy: 'Steven Pinker / Stephen Law',
          targetsPremise: 1,
          answer: `Unter dem Naturalismus ist eine Überzeugung ein Hirnzustand. Was das Verhalten verursacht, sind seine neurophysiologischen Eigenschaften – elektrische Impulse, chemische Signale. Ob der Zustand zusätzlich einen *wahren Inhalt* hat, spielt für die Ursachenkette keine Rolle. Die Selektion „sieht" also die Neurophysiologie, nicht die Wahrheit. Wer das bestreitet, muss erklären, wie Inhalte selbst kausal wirksam werden – und genau das ist im Materialismus das ungelöste Problem.`,
          followUps: [
            {
              id: 'struktur-ist-inhalt',
              objection: `„Der Inhalt ist nicht wirkungslos. Die neuronale Struktur *ist* der Inhalt – sie bildet die Welt ab wie eine Landkarte das Gelände."`,
              objectionBy: 'Paul Churchland / Ruth Millikan (sinngemäß)',
              targetsPremise: 1,
              answer: `Dann muss der Naturalist zeigen, wie eine neuronale Struktur einen bestimmten Inhalt hat – also *von* etwas handelt. Eine Landkarte bildet ein Gelände nur für jemanden ab, der sie liest; aus sich selbst handelt sie von nichts. Und selbst wenn man Inhalte als Hirnstrukturen auffasst, bleibt Plantingas Punkt: Für ein bestimmtes nützliches Verhalten sind viele verschiedene, auch falsche Inhalte gleich gut geeignet. Siehe auch das Problem der Intentionalität beim Bewusstsein.`,
              followUps: [
                {
                  id: 'hoffman-logik-ausgenommen',
                  objection: `„Donald Hoffman sagt zwar, dass Wahrnehmung nur eine Benutzeroberfläche ist – aber Logik und Mathematik sind verlässlich, weil sie sich ständig bewähren."`,
                  objectionBy: 'Donald Hoffman (sinngemäß)',
                  targetsPremise: 3,
                  answer: `Hoffmans Ergebnis zeigt das Problem von naturalistischer Seite: Wenn die Evolution unsere Wahrnehmung systematisch nicht auf Wahrheit, sondern auf Fitness abgestimmt hat, warum sollte derselbe Prozess unsere Logik anders behandelt haben? Logik und Mathematik einfach auszunehmen, ist Sonderbehandlung. Und die „Bewährung" kann nur mit denselben Fähigkeiten festgestellt werden, deren Verlässlichkeit in Frage steht.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Donald D. Hoffman', work: 'The Case Against Reality', year: '2019', status: 'paraphrase', quote: 'Fitness schlägt Wahrheit: Wahrnehmungssysteme, die auf Fitness abgestimmt sind, verdrängen wahrheitsgetreue.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erfolg-der-wissenschaft',
      objection: `„Der Erfolg der Wissenschaft beweist doch, dass unsere Vernunft verlässlich ist. Flugzeuge fliegen, Impfungen wirken."`,
      objectionBy: 'Steven Pinker / Sean Carroll',
      targetsPremise: 3,
      answer: `Den Erfolg der Wissenschaft beurteilst du mit deiner Vernunft. Wenn die Verlässlichkeit dieser Vernunft gerade in Frage steht, kannst du sie nicht mit sich selbst bestätigen – wie wenn du einen möglicherweise defekten Taschenrechner überprüfst, indem du dieselbe Rechnung noch einmal mit ihm machst. Der Christ erklärt den Erfolg der Wissenschaft: Die Welt ist vernünftig geordnet, und wir sind zur Erkenntnis geschaffen. Der Naturalist muss ihn voraussetzen.`,
      followUps: [
        {
          id: 'jede-erkenntnistheorie-zirkulaer',
          objection: `„Dann ist jede Erkenntnistheorie zirkulär – auch deine. Du vertraust deiner Vernunft, um an Gott zu glauben, der deine Vernunft garantiert."`,
          objectionBy: 'Graham Oppy',
          targetsPremise: 2,
          answer: `Alle müssen ihren Erkenntnisfähigkeiten zunächst vertrauen – das gebe ich zu. Der Unterschied liegt woanders: Meine Weltsicht gibt mir einen *Grund*, dieses Grundvertrauen beizubehalten, weil sie erwarten lässt, dass Vernunft und Welt zusammenpassen. Der Naturalismus mit Evolution gibt dir dagegen einen *Grund, es aufzugeben* – einen Unterminierer. Das ist die Asymmetrie: Der Theismus stützt das Vernunftvertrauen, der Naturalismus untergräbt es.`,
        },
      ],
    },
    {
      id: 'darwin-aus-dem-zusammenhang',
      objection: `„Darwins ‚horrid doubt' wird aus dem Zusammenhang gerissen. Er bezog ihn auf religiöse Überzeugungen, nicht auf die Wissenschaft."`,
      objectionBy: 'Häufiger Einwand',
      answer: `Das ist richtig, und man sollte es ehrlich sagen: Darwin schreibt, er habe die innere Überzeugung, das Universum sei nicht das Ergebnis des Zufalls – und dann komme ihm der schreckliche Zweifel, ob man den Überzeugungen eines aus Tieren entwickelten Geistes trauen könne. Aber seine *Begründung* – der Geist hat sich aus dem der niederen Tiere entwickelt – betrifft alle Überzeugungen gleichermaßen, nicht nur religiöse. Wenn sie den Gottesglauben untergräbt, untergräbt sie auch die Evolutionstheorie, die mit demselben Geist erdacht wurde.`,
      followUps: [
        {
          id: 'nur-religion-betroffen',
          objection: `„Eben – Darwin zweifelte an religiösen Überzeugungen. Die Wissenschaft ist durch Experimente abgesichert, die Religion nicht."`,
          objectionBy: 'Jerry Coyne',
          answer: `Experimente müssen gedeutet werden – mit denselben Denkfähigkeiten, die Darwin in Frage stellte. Wer den Zweifel nur dort anwendet, wo er ihm nützt, wendet einen doppelten Maßstab an. Konsequent gedacht, führt Darwins Zweifel entweder zu einer allgemeinen Skepsis, die auch die Wissenschaft trifft, oder zu der Frage, was unsere Vernunft auf Wahrheit hin ausrichtet. Der Glaube an den Logos beantwortet diese Frage.`,
        },
      ],
    },
    {
      id: 'wahrscheinlichkeiten-willkuerlich',
      objection: `„Plantingas Wahrscheinlichkeiten sind aus der Luft gegriffen. Er kann P(R | N & E) gar nicht berechnen."`,
      objectionBy: 'Branden Fitelson & Elliott Sober',
      targetsPremise: 1,
      answer: `Plantinga behauptet nicht, eine genaue Zahl zu kennen. Er sagt: Die Wahrscheinlichkeit ist entweder gering *oder nicht abschätzbar* – und beides genügt. Wenn du nicht weißt, ob eine Droge, die du genommen hast, deine Urteilskraft zerstört, hast du ebenfalls Grund zum Misstrauen. Zudem gestehen naturalistische Denker wie Patricia Churchland selbst zu, dass das Nervensystem auf Überleben, nicht auf Wahrheit ausgerichtet ist. Die Beweislast liegt beim Naturalisten, eine *hohe* Wahrscheinlichkeit zu zeigen.`,
      followUps: [
        {
          id: 'theismus-taeuschender-gott',
          objection: `„Der Theismus hat dasselbe Problem: Woher weißt du, dass Gott uns verlässliche Vernunft geben wollte? Vielleicht täuscht er uns."`,
          objectionBy: 'Stephen Law',
          answer: `Ein vollkommen guter Gott, der Personen erschafft, damit sie ihn und die Wahrheit erkennen und lieben, hat einen Grund, ihnen verlässliche Erkenntnisfähigkeiten zu geben – Täuschung widerspräche seiner Güte. Die Bibel bezeichnet Gott ausdrücklich als den, der „nicht lügen kann" (Tit 1,2). Der Theismus macht Verlässlichkeit also wahrscheinlich; der Naturalismus lässt sie offen oder unwahrscheinlich.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welchen Überlebensvorteil hat es, die Wahrheit über abstrakte Mathematik oder über die Existenz Gottes zu erkennen?`,
    `Wenn deine Überzeugungen das Produkt eines Prozesses sind, der auf Überleben und nicht auf Wahrheit achtet – warum vertraust du ihnen bei der Frage nach dem Naturalismus?`,
    `Wie kannst du die Verlässlichkeit deiner Vernunft überprüfen, ohne deine Vernunft zu benutzen?`,
    `Warum sollten Welt und Verstand zusammenpassen, wenn keiner von beiden einen vernünftigen Ursprung hat?`,
  ],
  avoid: [
    `„Die Evolution ist falsch, deshalb ist die Vernunft von Gott." – Das Argument richtet sich gegen den Naturalismus, nicht gegen die Evolution.`,
    `Darwins Zitat ohne Zusammenhang verwenden. Erwähne fair, dass er es auf seine religiöse Überzeugung bezog – und zeige dann, warum es allgemein gilt.`,
    `Das Churchland-Zitat als exakt wörtlich ausgeben, ohne es geprüft zu haben.`,
  ],
  concessions: [
    `In vielen Alltagssituationen sind wahre Überzeugungen tatsächlich nützlicher als falsche; das räumt auch Plantinga ein.`,
    `Die Mehrheit der Fachphilosophen hält das EAAN nicht für zwingend; es wird aber breit und ernsthaft diskutiert.`,
    `Christen können die biologische Evolution des Gehirns annehmen; das Argument betrifft nur ihre naturalistische Deutung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', ref: 'Kap. 3', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Victor Reppert', work: 'C. S. Lewis\'s Dangerous Idea: In Defense of the Argument from Reason', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Beilby (Hg.)', work: 'Naturalism Defeated?', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Argument aus der Vernunft', 'EAAN', 'Plantinga', 'C. S. Lewis', 'Evolution', 'Erkenntnistheorie'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'naturalismus/nur-materie',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'evolution/mutation-selektion-erklaeren-alles',
    'mathematik/effektivitaet-der-mathematik-zufall',
    'moral-und-gott/moral-durch-evolution',
  ],
};

export default claim;
