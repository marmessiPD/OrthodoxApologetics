import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wunder-historisch-unmoeglich',
  title: `„Historiker können grundsätzlich kein Wunder feststellen – ein Wunder ist per Definition das unwahrscheinlichste Ereignis."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Debatte mit William Lane Craig, College of the Holy Cross (28. März 2006); Jesus, Interrupted (2009)' },
    { name: 'David Hume', role: 'Schottischer Philosoph', work: 'An Enquiry Concerning Human Understanding, Abschnitt X „Of Miracles" (1748)' },
    { name: 'Rudolf Bultmann', role: 'Neutestamentler, Marburg', work: 'Neues Testament und Mythologie (1941)' },
    { name: 'Richard Carrier', role: 'Althistoriker', work: 'Proving History: Bayes’s Theorem and the Quest for the Historical Jesus (2012)' },
  ],
  steelman: `Historiker können nur feststellen, was in der Vergangenheit **wahrscheinlich** geschah. Ein Wunder ist aber per Definition das **unwahrscheinlichste** aller Ereignisse – sonst wäre es kein Wunder. Jede natürliche Erklärung, so unwahrscheinlich sie auch sein mag (Diebstahl, Verwechslung, Halluzination, Legende), ist immer noch wahrscheinlicher als ein Toter, der wieder lebt. Deshalb kann ein Historiker als Historiker nie zu dem Schluss kommen, dass ein Wunder wahrscheinlich geschehen ist. Dazu müsste er Gott in seine Erklärung einführen – aber Gott ist kein historisch überprüfbarer Faktor; jede Religion könnte dann ihre Wunder für „historisch" erklären. Schon David Hume hat gezeigt: Die einheitliche Erfahrung der Menschheit spricht gegen Wunder, Wunderberichte stammen meist aus leichtgläubigen Kulturen, und die Wunder verschiedener Religionen heben sich gegenseitig auf. Man kann an die Auferstehung glauben – aber das ist Theologie, nicht Geschichte. – So etwa Bart Ehrman in seiner Debatte mit William Lane Craig (2006).`,
  biblical: {
    summary: `Die Bibel versteht Wunder nicht als „Verletzung" einer autonomen Natur, sondern als **Zeichen** (sēmeia) des Schöpfers, der die Welt trägt und in ihr handeln kann. Sie setzt voraus, dass Menschen damals sehr wohl wussten, dass Tote nicht auferstehen – deshalb spotten die Athener (Apg 17,32), zweifeln die Jünger (Mt 28,17; Lk 24,11) und fordert Thomas Beweise (Joh 20,25). Die Auferstehung wird nicht als Mythos vorgetragen, sondern als öffentlich überprüfbares Ereignis: „Solches ist nicht im Winkel geschehen" (Apg 26,26).`,
    detail: `**Apg 17,31–32** zeigt die Haltung: Paulus nennt die Auferstehung den „Beweis" (pistis, „Beglaubigung"), den Gott allen gegeben hat. Die gebildeten Athener reagieren genau so, wie ein moderner Skeptiker reagiert: Einige spotten, andere wollen mehr hören.

**Lk 24,11:** Die Apostel halten die Worte der Frauen für „Märlein" (lēros, Geschwätz) – das NT zeichnet die ersten Zeugen nicht als leichtgläubig, sondern als Menschen, die von den Tatsachen gegen ihre Erwartung überwunden wurden.

**1 Kor 15,17:** Paulus macht den Glauben ausdrücklich von einem historischen Ereignis abhängig: „Ist Christus aber nicht auferstanden, so ist euer Glaube eitel."`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,31–32', quote: `… und jedermann vorhält den Glauben, nachdem er ihn hat von den Toten auferweckt. Da sie hörten die Auferstehung der Toten, da hatten's etliche ihren Spott; etliche aber sprachen: Wir wollen dich davon weiter hören.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Lukas', ref: '24,11', quote: `Und es deuchten sie ihre Worte eben, als wären's Märlein, und sie glaubten ihnen nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,17', quote: `Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden;`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,25', quote: `… Es sei denn, daß ich in seinen Händen sehe die Nägelmale und lege meinen Finger in die Nägelmale und lege meine Hand in seine Seite, will ich's nicht glauben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Für die Väter ist die Auferstehung nicht „gegen die Natur", sondern Werk dessen, der die Natur geschaffen hat. Der hl. Athanasius argumentiert: Der Logos, der alles aus dem Nichts ins Dasein rief, kann einen toten Leib lebendig machen; ja, es war „geziemend", dass der Urheber des Lebens den Tod nicht in seinem Leib behielt (De Incarnatione 21–26). Augustinus formulierte die klassische Definition: Ein Wunder geschieht nicht gegen die Natur, sondern gegen die uns **bekannte** Natur. Die koptische Kirche feiert die Auferstehung als Mitte des Kirchenjahres – mit dem Fasten der vorausgehenden 55 Tage und der fünfzigtägigen Freudenzeit danach.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI,8,2', year: 'ca. 420', quote: `Ein Wunderzeichen geschieht also nicht gegen die Natur, sondern gegen die uns bekannte Natur.`, original: `Portentum ergo fit non contra naturam, sed contra quam est nota natura.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '21–26', year: 'ca. 318', quote: `Es war nicht möglich, dass der Leib dessen, der das Leben selbst ist, im Tod verblieb; deshalb erweckte er ihn am dritten Tag als Siegeszeichen über den Tod.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Frage ist in Philosophie und Geschichtstheorie offen umstritten. Viele Historiker arbeiten mit einem **methodischen Naturalismus**: Sie klammern übernatürliche Ursachen aus. Ob daraus folgt, dass man ein Wunder **nie** als wahrscheinlich erkennen kann, ist jedoch eine philosophische Frage. Humes Argument wird bis heute verteidigt (z. B. Robert Fogelin, A Defense of Hume on Miracles, 2003), aber auch scharf kritisiert – am bekanntesten von dem **nicht-theistischen** Wissenschaftsphilosophen John Earman (Pittsburgh), der Humes Essay ein „abject failure", ein klägliches Scheitern nannte.`,
    detail: `**Bayesianische Debatte:** Seit Richard Price (1767) wird Humes Argument wahrscheinlichkeitstheoretisch analysiert. Entscheidend ist nicht nur die Vorabwahrscheinlichkeit eines Wunders, sondern das Verhältnis: Wie wahrscheinlich sind die Belege, **wenn** das Wunder geschah, im Vergleich dazu, **wenn** es nicht geschah? Richard Swinburne (Oxford) kam unter Einbeziehung des Hintergrundwissens über Gott auf eine hohe Wahrscheinlichkeit der Auferstehung; Timothy und Lydia McGrew argumentierten mit einem sehr hohen Bayes-Faktor der kombinierten Belege. Kritiker halten solche Zahlen für subjektiv.

**Unter Historikern:** Michael Licona plädiert für „methodische Neutralität" – weder Naturalismus noch Supranaturalismus vorab. Dale Allison hält die Frage für historisch nicht abschließend entscheidbar, aber auch nicht von vornherein negativ beantwortbar. Craig Keener hat in zwei Bänden gezeigt, dass Wunderberichte von Augenzeugen auch heute weltweit verbreitet sind.`,
    sources: [
      { kind: 'fachliteratur', author: 'John Earman', work: `Hume's Abject Failure: The Argument Against Miracles`, year: '2000', quote: `Earman hält Humes Argument für weitgehend unoriginell und dort, wo es originell ist, fast ohne Wert.`, status: 'paraphrase', note: 'Earman ist kein Theist – seine Kritik ist philosophisch, nicht apologetisch motiviert.' },
      { kind: 'gegner', author: 'Robert J. Fogelin', work: 'A Defense of Hume on Miracles', year: '2003', quote: `Verteidigung Humes gegen Earman: Hume habe nicht die Unmöglichkeit, sondern die faktische Unglaubwürdigkeit von Wunderberichten gezeigt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', quote: `Swinburne berechnet unter Einbeziehung natürlicher Theologie und historischer Belege eine hohe Wahrscheinlichkeit der Auferstehung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Timothy McGrew / Lydia McGrew', work: `The Argument from Miracles: A Cumulative Case for the Resurrection of Jesus of Nazareth. In: W. L. Craig / J. P. Moreland (Hg.), The Blackwell Companion to Natural Theology`, year: '2009', quote: `Bayesianische Analyse der Auferstehungsbelege mit dem Ergebnis eines sehr hohen Likelihood-Verhältnisses zugunsten der Auferstehung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts, 2 Bde.', year: '2011', quote: `Dokumentation zahlreicher heutiger Wunderberichte von Augenzeugen weltweit; Kritik an Humes Prämissen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Unwahrscheinlich" heißt nicht „unbeweisbar": Auch die Gewinnzahlen der letzten Lottoziehung waren vorher extrem unwahrscheinlich, und trotzdem glaubst du der Zeitung. Entscheidend ist, wie gut die Belege sind und ob natürliche Erklärungen sie erklären. Ein Historiker kann prüfen, ob das Grab leer war und ob Menschen den Gekreuzigten lebend sahen. Wer die Auferstehung ablehnt, **nur** weil sie ein Wunder wäre, hat das vor jeder Prüfung entschieden – das ist eine philosophische Vorannahme, kein historisches Ergebnis.`,
  keyPoints: [
    `**Vorab-Unwahrscheinlichkeit ≠ Unbeweisbarkeit:** Seltene Ereignisse werden durch gute Belege täglich festgestellt; entscheidend ist, wie wahrscheinlich die Belege ohne das Ereignis wären.`,
    `**„Am unwahrscheinlichsten" nur im Naturalismus:** Dass Jesus von selbst wieder lebendig wurde, ist extrem unwahrscheinlich – dass **Gott** ihn auferweckte, hängt davon ab, ob es Gott gibt und ob er in diesem Kontext handeln würde.`,
    `**Hume ist umstritten:** Selbst der nicht-theistische Wissenschaftsphilosoph John Earman nennt Humes Argument ein „klägliches Scheitern"; C. S. Lewis zeigte seinen Zirkelschluss.`,
    `**Wunder verletzen keine Naturgesetze:** Naturgesetze beschreiben, was geschieht, wenn nichts von außen eingreift (Augustinus: „gegen die uns bekannte Natur").`,
    `**Methodische Neutralität:** Historiker können die Fakten prüfen (leeres Grab, Erscheinungen) – die Deutung „Gott hat gehandelt" muss nicht vorab verboten werden (Licona).`,
    `**Heutige Wunderberichte:** Hunderte Millionen Menschen berichten heute, Heilungen erlebt zu haben – Humes „unwissende und barbarische Völker" ist ethnozentrisch (Keener).`,
  ],
  argument: {
    name: 'Ehrmans Argument und seine Schwachstelle',
    summary: 'Das Argument „Historiker können kein Wunder feststellen" in Prämissen zerlegt.',
    premises: [
      {
        text: `P1 (Ehrman): Historiker können nur feststellen, was wahrscheinlich geschehen ist.`,
        support: `Zugestanden – Geschichtswissenschaft arbeitet mit Wahrscheinlichkeiten. Das gilt aber für alle Ereignisse, nicht nur für Wunder.`,
      },
      {
        text: `P2 (Ehrman): Ein Wunder ist per Definition das unwahrscheinlichste Ereignis.`,
        support: `Hier liegt der Fehler: Ein Wunder ist relativ zu **natürlichen Ursachen** unwahrscheinlich, nicht notwendig relativ zu **allen** Ursachen. Wenn Gott existiert und einen Grund hat, Jesu Anspruch zu bestätigen, ist die Auferstehung nicht „das Unwahrscheinlichste". Zudem verwechselt P2 die Vorabwahrscheinlichkeit mit der Wahrscheinlichkeit angesichts der Belege.`,
        sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Debatte mit Bart Ehrman, „Is There Historical Evidence for the Resurrection of Jesus?", College of the Holy Cross', year: '2006', status: 'paraphrase', quote: `Craig kritisiert Ehrmans Argument mit dem Bayes-Theorem: Die Vorabwahrscheinlichkeit muss gegen die Erklärungskraft für die Belege abgewogen werden.` }],
      },
      {
        text: `P3 (Ehrman): Also kann ein Historiker nie zu dem Schluss kommen, dass ein Wunder wahrscheinlich geschah.`,
        support: `Folgt nur, wenn P2 in der starken Form gilt. Andernfalls ist das Urteil offen und hängt von den Belegen ab.`,
      },
    ],
    conclusion: `Ehrmans Argument gilt nur unter der Voraussetzung, dass natürliche Ursachen die einzigen sind – also unter einer philosophischen Vorentscheidung. Ohne sie ist die Frage nach der Auferstehung eine offene, auf Belege gestützte Frage.`,
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph des Wunders',
      text: `Augustinus gibt die klassische Bestimmung: Ein Wunder geschieht nicht gegen die Natur, sondern gegen die Natur, wie sie uns bekannt ist. Die Natur ist für ihn nichts Eigenständiges neben Gott, sondern Gottes fortwährendes Werk; das tägliche Wachsen eines Samenkorns ist nicht weniger wunderbar als die Verwandlung von Wasser in Wein, nur gewohnter. Ein Wunder ist daher kein Bruch der Ordnung, sondern ein ungewohntes Handeln desselben Schöpfers, der auch die gewohnte Ordnung trägt.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI,8', year: 'ca. 420', status: 'paraphrase', quote: `Das Wunder ist nicht gegen die Natur, sondern gegen die bekannte Natur.` }],
    },
    {
      person: 'cs-lewis',
      role: 'als Philosoph und Kritiker Humes',
      text: `Lewis deckt den Zirkel in Humes Argument auf: Wir wissen nur dann, dass die Erfahrung „einheitlich" gegen Wunder spricht, wenn wir wissen, dass alle Wunderberichte falsch sind. Das wissen wir aber nur, wenn wir schon vorher wissen, dass es keine Wunder gibt. Zudem: Naturgesetze sagen, was geschieht, **wenn** nichts eingreift – sie können nicht ausschließen, dass etwas eingreift. Wer sechs Münzen in eine Schublade legt und am nächsten Tag sechs weitere, findet nicht zwölf, wenn ein Dieb dazwischen war – die Arithmetik ist dadurch nicht widerlegt.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study (dt. „Wunder")', year: '1947', status: 'paraphrase', quote: `Die Erfahrung gegen Wunder ist nur dann einheitlich, wenn alle Berichte falsch sind – und das weiß man nur, wenn man schon weiß, dass es keine Wunder gibt: ein Zirkel.` }],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph (Oxford)',
      text: `Swinburne betont, dass die Wahrscheinlichkeit der Auferstehung nicht isoliert betrachtet werden darf. Ob sie wahrscheinlich ist, hängt vom Hintergrundwissen ab: Gibt es gute Gründe für die Existenz Gottes? Hätte Gott Gründe, Mensch zu werden und dies durch ein Zeichen zu bestätigen? Passt Jesu Leben und Lehre zu dem, was man von einem menschgewordenen Gott erwarten würde? Wer diese Fragen positiv beantwortet, für den ist die Auferstehung kein „unmögliches", sondern ein **erwartbares** Ereignis – und die historischen Belege bestätigen es.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase', quote: `Die Auferstehung muss im Licht des Hintergrundwissens über Gott und den Charakter Jesu bewertet werden.` }],
    },
    {
      person: 'licona',
      role: 'als Historiker und Geschichtstheoretiker',
      text: `Licona hat in einer umfangreichen geschichtstheoretischen Studie untersucht, ob Historiker sich zu Wundern äußern dürfen. Er plädiert für „methodische Neutralität": Weder darf der Historiker übernatürliche Erklärungen vorab ausschließen noch sie vorab voraussetzen. Er prüft konkurrierende Hypothesen nach Erklärungsumfang, Erklärungskraft, Plausibilität, Ad-hoc-Charakter und Stimmigkeit mit anderem Wissen. Unter diesen Kriterien schneidet die Auferstehungshypothese besser ab als ihre natürlichen Konkurrenten.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase', quote: `Plädoyer für methodische Neutralität und Abwägung konkurrierender Hypothesen nach festen Kriterien.` }],
    },
    {
      person: 'keener',
      role: 'als Neutestamentler und Erforscher heutiger Wunderberichte',
      text: `Keener hat Hunderte von Wunderberichten aus aller Welt gesammelt, viele aus erster Hand, manche mit ärztlicher Dokumentation. Er widerspricht Humes Behauptung, Wunderberichte kämen nur aus „unwissenden und barbarischen Völkern" – eine Annahme, die heute als ethnozentrisch gelten muss. Wenn heute Millionen gebildeter Menschen, darunter Ärzte, Augenzeugenberichte geben, kann man antike Berichte nicht allein deshalb verwerfen, weil sie Wunder enthalten.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase', quote: `Augenzeugenberichte von Wundern sind auch heute weltweit verbreitet; Humes Prämissen halten der Prüfung nicht stand.` }],
    },
  ],
  dialog: [
    {
      id: 'ehrman-wahrscheinlichkeit',
      objection: `Historiker stellen fest, was wahrscheinlich geschah. Ein Wunder ist per Definition das unwahrscheinlichste Ereignis. Jede natürliche Erklärung – selbst eine sehr unwahrscheinliche – ist wahrscheinlicher als eine Auferstehung. Also kann ein Historiker niemals sagen, dass ein Wunder wahrscheinlich geschehen ist.`,
      objectionBy: 'Bart Ehrman',
      answer: `Du verwechselst die Wahrscheinlichkeit **vor** der Prüfung der Belege mit der Wahrscheinlichkeit **nach** der Prüfung. Dass eine bestimmte Zahlenkombination im Lotto gezogen wird, ist vorher etwa 1 zu 140 Millionen – trotzdem glaubst du der Zeitung, weil es sehr unwahrscheinlich wäre, dass sie diese Zahlen druckt, wenn sie nicht gezogen wurden. Bei der Auferstehung ist die Frage: Wie wahrscheinlich sind leeres Grab, Erscheinungen vor Gruppen und Gegnern und die Entstehung der Kirche, **wenn** Jesus nicht auferstand? Wenn alle natürlichen Erklärungen scheitern, sehr unwahrscheinlich.`,
      detail: `**Das Bayes-Theorem in Worten:** Die Wahrscheinlichkeit einer Hypothese H angesichts der Belege E hängt ab von (1) der Vorabwahrscheinlichkeit von H und (2) dem Verhältnis, wie gut H die Belege erklärt im Vergleich zu den Alternativen. Eine niedrige Vorabwahrscheinlichkeit kann durch starke Belege, die ohne H kaum zu erwarten wären, aufgewogen werden. Genau das passiert in der Geschichtswissenschaft ständig bei einmaligen, überraschenden Ereignissen.

In der Debatte 2006 brachte Craig dieses Argument vor; Ehrman antwortete im Wesentlichen mit seiner Grundthese, dass Wunder die historische Methode übersteigen.`,
      sources: [
        { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Debatte mit William Lane Craig, „Is There Historical Evidence for the Resurrection of Jesus?", College of the Holy Cross, Worcester', year: '2006', quote: `Ehrman argumentiert, da Historiker nur das Wahrscheinliche feststellen könnten und Wunder per Definition höchst unwahrscheinlich seien, könne kein Historiker ein Wunder als wahrscheinlich nachweisen.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Glaubst du, dass Ereignisse mit sehr geringer Vorabwahrscheinlichkeit durch gute Belege feststellbar sind – etwa ein Lottogewinn?`,
        `Wie wahrscheinlich sind die Daten (leeres Grab, Gruppen, Jakobus, Paulus) unter deiner besten natürlichen Erklärung?`,
      ],
      followUps: [
        {
          id: 'lotterie-unpassend',
          objection: `Der Lotto-Vergleich hinkt. Ein Lottogewinn ist ein natürliches Ereignis mit bekannter Wahrscheinlichkeit. Eine Auferstehung widerspricht allem, was wir über Biologie wissen. Das ist eine andere Kategorie.`,
          objectionBy: 'Bart Ehrman / Richard Carrier',
          answer: `Der Vergleich soll nur das logische Prinzip zeigen: Eine niedrige Vorabwahrscheinlichkeit lässt sich durch Belege überwinden. Und ja, dass Jesus **von selbst**, durch biologische Prozesse, wieder lebendig wurde, ist praktisch ausgeschlossen – darin sind wir uns einig, und das behauptet auch niemand. Die Hypothese lautet: **Gott** hat ihn auferweckt. Deren Wahrscheinlichkeit hängt davon ab, ob es Gott gibt und ob er einen Grund hatte, gerade Jesus – der beanspruchte, in Gottes Vollmacht zu handeln – zu bestätigen. Die Biologie kann diese Frage nicht beantworten.`,
          followUps: [
            {
              id: 'gott-unbekannt',
              objection: `Genau das ist der Punkt: Als Historiker weiß ich nicht, ob Gott existiert oder was er will. Das kann ich nicht in meine Rechnung aufnehmen. Also bleibe ich bei natürlichen Erklärungen.`,
              objectionBy: 'Bart Ehrman',
              answer: `Dann müsstest du als Historiker konsequent **agnostisch** bleiben – also sagen: „Die natürlichen Erklärungen versagen; ob Gott gehandelt hat, kann ich als Historiker nicht entscheiden." Stattdessen wählst du stillschweigend eine natürliche Erklärung, auch wenn sie die Daten nicht erklärt. Das ist keine Neutralität, sondern eine Vorentscheidung für den Naturalismus. Ich lade dich ein, diese Vorentscheidung offen zu diskutieren – als philosophische Frage, mit Gründen für und gegen Gott.`,
              followUps: [
                {
                  id: 'methodologischer-naturalismus',
                  objection: `Ohne methodologischen Naturalismus bricht Wissenschaft zusammen. Wenn Historiker „Gott war's" zulassen, kann jeder jede Lücke damit füllen – dann haben wir keine Geschichtswissenschaft mehr, sondern Glaubensbekenntnisse.`,
                  objectionBy: 'Richard Carrier / Dan McClellan',
                  answer: `Ich verlange nicht, dass Historiker jedes Rätsel mit Gott erklären. Ich sage nur: Eine methodische Regel darf nicht das metaphysische Ergebnis vorwegnehmen. Bei der Auferstehung geht es nicht um eine beliebige Lücke, sondern um einen spezifischen religiösen Kontext: Ein Mensch beansprucht göttliche Vollmacht, wird hingerichtet, und danach berichten Zeugen – auch Gegner – von seiner Auferweckung. Wenn hier alle natürlichen Erklärungen scheitern, ist die Hypothese „Gott hat gehandelt" kein Lückenbüßer, sondern eine Erklärung, die zu ihrem Kontext passt. Historiker können zumindest sagen: „Jesus wurde lebendig gesehen, das Grab war leer, und keine natürliche Erklärung erklärt das" – die Frage nach der Ursache gehört dann zur Philosophie.`,
                  detail: `**Zur Unterscheidung:** *Methodologischer* Naturalismus ist eine Arbeitsregel („Suche zuerst natürliche Ursachen"). *Metaphysischer* Naturalismus ist eine Weltanschauung („Es gibt nur natürliche Ursachen"). Wer aus der Arbeitsregel ein Denkverbot macht, verwandelt sie unbemerkt in eine Weltanschauung. Siehe auch den Claim „Gott ist nur ein Lückenbüßer".`,
                  questionsBack: [
                    `Ist deine Regel „Keine übernatürlichen Erklärungen" selbst historisch begründet oder philosophisch?`,
                    `Was müsste geschehen sein, damit du eine übernatürliche Erklärung auch nur in Betracht ziehst?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'andere-religionen-wunder',
          objection: `Wenn du historische Methoden für Wunder öffnest, musst du auch die Wunder des Apollonius von Tyana, die Heilungen von Asklepios-Tempeln, die Wunder Mohammeds in den Hadithen oder die von Sathya Sai Baba anerkennen. Sie heben sich gegenseitig auf – schon Hume hat das gesagt.`,
          objectionBy: 'David Hume / Bart Ehrman',
          answer: `Nein – ich muss jeden Fall nach seinen Belegen prüfen, genau wie du. Nicht jeder Wunderbericht ist gleich gut bezeugt: Für die Auferstehung haben wir ein Credo aus den ersten Jahren, mehrere unabhängige Quellen, Zeugen mit Namen, Gegner, die sich bekehrten. Für Apollonius haben wir eine einzige Biografie, 120 Jahre nach seinem Tod im Auftrag einer Kaiserin geschrieben. Und Humes Argument, die Wunder verschiedener Religionen höben sich auf, setzt voraus, dass jedes Wunder seine Religion beweisen soll. Christen müssen nicht jedes außergewöhnliche Ereignis in anderen Religionen bestreiten – sie fragen nach der Qualität der Belege.`,
          followUps: [
            {
              id: 'apollonius-parallel',
              objection: `Apollonius heilte Kranke, trieb Dämonen aus, erweckte ein totes Mädchen und erschien nach seinem Tod einem jungen Zweifler. Und Philostratus sagt, man habe nie ein Grab von ihm gefunden. Die Parallele zu Jesus ist perfekt.`,
              objectionBy: 'Robert M. Price / Richard Carrier',
              answer: `Philostratus schrieb um 220 im Auftrag der Kaiserin Julia Domna, rund 120 Jahre nach Apollonius' Tod, und berief sich auf angebliche Aufzeichnungen eines Begleiters namens Damis, die viele Forscher für eine literarische Fiktion halten. Bei der Totenerweckung lässt er selbst offen, ob das Mädchen wirklich tot war. Die Erscheinung nach dem Tod ist ein Traum eines Einzelnen. Manche Forscher vermuten sogar, Philostratus habe bewusst eine heidnische Alternative zu den Evangelien geschaffen. Eine späte, einzelne, im Auftrag geschriebene Biografie ist mit einem Credo aus den 30er Jahren und mehreren unabhängigen Quellen nicht vergleichbar.`,
              sources: [
                { kind: 'sonstiges', author: 'Philostratus', work: 'Das Leben des Apollonius von Tyana', ref: '4,45; 8,31', year: 'ca. 220', quote: `Bei der Erweckung eines Mädchens in Rom lässt Philostratus offen, ob noch ein Lebensfunke in ihr war; nach Apollonius' Tod erscheint er einem jungen Zweifler im Traum.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Welche Quelle über Apollonius stammt aus den ersten Jahren nach den Ereignissen und nennt lebende Zeugen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hume-erfahrung',
      objection: `David Hume hat es 1748 endgültig gezeigt: Ein Wunder ist eine Verletzung der Naturgesetze. Die feste und unveränderliche Erfahrung der Menschheit hat diese Gesetze bestätigt. Kein Zeugnis reicht aus, ein Wunder zu begründen, es sei denn, seine Falschheit wäre noch wunderbarer als das Ereignis selbst.`,
      objectionBy: 'David Hume (rezipiert u. a. bei Ehrman, Carrier)',
      answer: `Humes Argument ist zirkulär, wie C. S. Lewis zeigte: Die Erfahrung spricht nur dann „einheitlich" gegen Wunder, wenn alle Wunderberichte falsch sind – und das weiß man nur, wenn man schon weiß, dass es keine Wunder gibt. Der Wissenschaftsphilosoph John Earman, selbst kein Theist, hat Humes Essay deshalb ein „klägliches Scheitern" genannt. Und nimm Humes eigene Maxime ernst: Wäre es nicht noch wunderbarer, dass Gegner wie Paulus, Skeptiker wie Jakobus, Hunderte Zeugen und ein leeres Grab ohne Auferstehung zusammenkommen?`,
      sources: [
        { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X, Teil 1', year: '1748', quote: `Ein Wunder ist eine Verletzung der Naturgesetze; und da eine feste und unveränderliche Erfahrung diese Gesetze begründet hat, ist der Beweis gegen ein Wunder, schon aus der Natur der Sache, so vollständig, wie ein Argument aus Erfahrung nur sein kann.`, original: `A miracle is a violation of the laws of nature; and as a firm and unalterable experience has established these laws, the proof against a miracle, from the very nature of the fact, is as entire as any argument from experience can possibly be imagined.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X, Teil 1', year: '1748', quote: `Kein Zeugnis reicht aus, ein Wunder zu begründen, es sei denn, das Zeugnis sei von solcher Art, dass seine Falschheit wunderbarer wäre als die Tatsache, die es zu begründen sucht.`, original: `That no testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      questionsBack: [
        `Woher weißt du, dass die Erfahrung „einheitlich" gegen Wunder spricht, ohne vorauszusetzen, dass alle Berichte falsch sind?`,
        `Nach Humes eigener Maxime: Was wäre „wunderbarer" – die Auferstehung oder das Zusammentreffen aller Daten ohne sie?`,
      ],
      followUps: [
        {
          id: 'naturgesetze-unverbruechlich',
          objection: `Naturgesetze sind unverbrüchlich. Tote bleiben tot – das ist die am besten bestätigte Regel der Biologie. Jeder Mensch, der je gelebt hat, ist ein Datenpunkt dafür.`,
          objectionBy: 'Richard Dawkins / Jerry Coyne',
          answer: `Da sind wir uns völlig einig: Tote bleiben tot – **natürlicherweise**. Genau deshalb wäre die Auferstehung Jesu ein Zeichen. Naturgesetze beschreiben, was geschieht, wenn nichts von außerhalb der Natur einwirkt. Ein Wunder „bricht" sie nicht, es fügt eine Ursache hinzu, die sie gar nicht beschreiben – so wie ein Mensch, der einen fallenden Apfel auffängt, die Schwerkraft nicht widerlegt. Die Frage ist also nicht biologisch, sondern: Gibt es einen Gott, der handeln kann?`,
          detail: `Siehe auch den Claim „Wunder verletzen die Naturgesetze (Energieerhaltung)" im Themenblock Physik.`,
          followUps: [
            {
              id: 'energieerhaltung',
              objection: `Jeder göttliche Eingriff würde Energie aus dem Nichts hinzufügen und damit den Energieerhaltungssatz verletzen – eines der fundamentalsten Gesetze der Physik.`,
              objectionBy: 'Sean Carroll (sinngemäß)',
              answer: `Der Energieerhaltungssatz gilt für **geschlossene** Systeme. Ob das Universum kausal geschlossen ist – ob es nichts außerhalb gibt, das einwirken kann –, ist genau die strittige Frage. Die Physik kann sie nicht beantworten, weil sie per Methode nur das Innere des Systems untersucht. Wer Geschlossenheit voraussetzt, setzt den Naturalismus voraus. Das ist legitim als Weltanschauung, aber kein physikalisches Ergebnis.`,
            },
          ],
        },
        {
          id: 'unwissende-voelker',
          objection: `Hume hat auch gezeigt, dass Wunderberichte vor allem bei „unwissenden und barbarischen Völkern" gedeihen. Je gebildeter eine Gesellschaft, desto weniger Wunder. Das sagt doch alles.`,
          objectionBy: 'David Hume',
          answer: `Das ist empirisch falsch und ethnozentrisch. Craig Keener hat gezeigt, dass heute Hunderte Millionen Menschen weltweit berichten, Heilungen erlebt oder bezeugt zu haben – darunter Ärzte, Ingenieure und Akademiker. Und die Menschen des 1. Jahrhunderts waren nicht naiv: Sie wussten genau, dass Tote nicht auferstehen. Die gebildeten Athener spotteten (Apg 17,32), die Apostel hielten die Botschaft der Frauen für Geschwätz (Lk 24,11), Thomas verlangte handfeste Beweise.`,
          sources: [
            { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X, Teil 2', year: '1748', quote: `Es bildet eine starke Vermutung gegen alle übernatürlichen und wunderbaren Berichte, dass sie hauptsächlich bei unwissenden und barbarischen Völkern im Überfluss beobachtet werden.`, original: `It forms a strong presumption against all supernatural and miraculous relations, that they are observed chiefly to abound among ignorant and barbarous nations.`, translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
        },
        {
          id: 'earman-aussenseiter',
          objection: `Earman ist ein Außenseiter. Hume-Forscher wie Robert Fogelin haben Hume gegen ihn verteidigt. Du pickst dir einen Kritiker heraus.`,
          objectionBy: 'Robert Fogelin (rezipiert)',
          answer: `Die Debatte ist offen, das gebe ich zu – und Earman ist nicht der einzige Kritiker. Aber schau, wie Fogelin Hume verteidigt: Er liest Hume so, dass Hume nicht die **Unmöglichkeit** von Wundern zeigen wollte, sondern dass die tatsächlich vorliegenden Wunderberichte nie den nötigen Standard erreicht haben. Wenn das Humes Punkt ist, dann sind wir wieder bei den Belegen – und genau darüber möchte ich mit dir sprechen: das Credo, das leere Grab, die Zeugen.`,
          sources: [
            { kind: 'gegner', author: 'Robert J. Fogelin', work: 'A Defense of Hume on Miracles', year: '2003', quote: `Fogelin deutet Humes Argument als Kritik an der faktischen Qualität von Wunderzeugnissen, nicht als apriorischen Ausschluss.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'bultmann-radio',
      objection: `Rudolf Bultmann hat es treffend gesagt: Man kann nicht elektrisches Licht und Radio benutzen, moderne Medizin in Anspruch nehmen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben.`,
      objectionBy: 'Rudolf Bultmann',
      answer: `Das ist das, was C. S. Lewis „chronologischen Snobismus" nannte: die Annahme, dass Neueres automatisch wahrer ist. Die Menschen des 1. Jahrhunderts wussten genauso gut wie wir, dass Jungfrauen nicht gebären und Tote nicht auferstehen – gerade deshalb waren Wunder für sie erstaunlich. Technik zeigt uns, wie die Natur regelmäßig funktioniert; sie sagt nichts darüber, ob ihr Schöpfer in ihr handeln kann. Und viele Menschen, die Radios bauen – Physiker, Ingenieure, Ärzte – glauben an die Auferstehung.`,
      sources: [
        { kind: 'gegner', author: 'Rudolf Bultmann', work: 'Neues Testament und Mythologie (in: H.-W. Bartsch [Hg.], Kerygma und Mythos I)', ref: 'S. 18', year: '1941 (Vortrag); Abdruck 1948/1951', quote: `Man kann nicht elektrisches Licht und Radioapparat benützen, in Krankheitsfällen moderne medizinische und klinische Mittel in Anspruch nehmen und gleichzeitig an die Geister- und Wunderwelt des Neuen Testaments glauben.`, status: 'paraphrase', note: 'Fundstelle Kerygma und Mythos I, S. 18, in Fachliteratur übereinstimmend angegeben (WebSearch-Prüfung 2026); die Schreibung „benützen"/„benutzen" schwankt in den Zitaten – vor wörtlicher Verwendung in der Ausgabe nachschlagen.' },
      ],
      followUps: [
        {
          id: 'wissenschaftler-glauben-nicht',
          objection: `Unter Spitzenwissenschaftlern glaubt kaum jemand an Wunder. Das zeigt, wohin uns Rationalität führt.`,
          objectionBy: 'Jerry Coyne / Richard Dawkins',
          answer: `Wahrheit wird nicht per Mehrheitsabstimmung entschieden – auch nicht unter Wissenschaftlern. Und es gibt zahlreiche herausragende Naturwissenschaftler, die die Auferstehung Jesu bekennen: der Physiker und Theologe John Polkinghorne, der Genetiker Francis Collins, der Chemiker James Tour. Sie zeigen, dass naturwissenschaftliche Kompetenz und Auferstehungsglaube kein Widerspruch sind.`,
          voices: [
            {
              person: 'polkinghorne',
              role: 'als theoretischer Physiker und Priester',
              text: `Polkinghorne, Professor für mathematische Physik in Cambridge und später anglikanischer Priester, betont, dass Naturgesetze Ausdruck von Gottes Treue sind – Gott handelt nicht launisch. Ein Wunder ist daher nur dort denkbar, wo eine völlig neue Situation einen neuen Ausdruck dieser Treue verlangt. Die Auferstehung Jesu sieht er als genau solche Situation: den Beginn der neuen Schöpfung, in der die Materie selbst verwandelt wird. Er hielt die historischen Belege für stark genug, um sie als Physiker ernst zu nehmen.`,
              sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'The Faith of a Physicist', year: '1994', status: 'paraphrase', quote: `Wunder als Ausdruck göttlicher Treue in einer neuen Situation; die Auferstehung als Beginn der neuen Schöpfung.` }],
            },
          ],
        },
      ],
    },
    {
      id: 'ausserordentliche-belege',
      objection: `Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege. Ein paar antike Texte von Anhängern einer neuen Religion sind alles andere als außergewöhnlich.`,
      objectionBy: 'Carl Sagan (Grundsatz) / Richard Carrier',
      answer: `In der Sprache der Wahrscheinlichkeit heißt „außergewöhnliche Belege": Belege, die sehr unwahrscheinlich wären, wenn die Behauptung falsch ist. Genau das ist hier der Fall: ein leeres Grab, das die Gegner selbst zugaben; Erscheinungen vor Einzelnen und Gruppen; die Bekehrung eines Skeptikers und eines Verfolgers; ein Bekenntnis aus den ersten Jahren; Juden, die plötzlich den Sonntag feiern und einen Gekreuzigten anbeten. Jede natürliche Erklärung scheitert an einem Teil dieser Daten. Sag mir: Welcher Beleg würde dich überzeugen?`,
      detail: `Siehe den Claim „Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege" im Themenblock Atheismus.`,
      questionsBack: [
        `Was genau wäre für dich ein „außergewöhnlicher Beleg" für ein Ereignis vor 2000 Jahren?`,
        `Gilt dein Maßstab auch für andere einmalige Ereignisse der Antike?`,
      ],
      followUps: [
        {
          id: 'was-wuerde-ueberzeugen',
          objection: `Mich würde nur überzeugen, wenn Jesus heute erschiene – vor Kameras, mit wissenschaftlicher Überprüfung.`,
          objectionBy: 'Verbreiteter Einwand',
          answer: `Dann kannst du nach diesem Maßstab kein einziges Ereignis der Antike für gesichert halten – weder Caesars Ermordung noch die Zerstörung des Tempels. Die Frage ist nicht, ob wir Video haben, sondern ob die vorhandenen Belege nach historischen Maßstäben gut sind. Und ehrlich gesagt: Jesus selbst sagt im Gleichnis vom reichen Mann, dass jemand, der den bisherigen Zeugnissen nicht glauben will, sich auch nicht überzeugen ließe, „wenn jemand von den Toten aufstünde" (Lk 16,31). Es geht oft nicht um Belege, sondern um Bereitschaft.`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '16,31', quote: `Er sprach zu ihm: Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
        {
          id: 'bayes-zahlen-willkuerlich',
          objection: `Die Bayes-Rechnungen christlicher Philosophen wie der McGrews kommen auf absurd hohe Faktoren. Das sind subjektive Zahlen, mit denen man alles beweisen kann.`,
          objectionBy: 'Richard Carrier',
          answer: `Zugestanden: Genaue Zahlen sind in der Geschichte immer Schätzungen – das gilt für christliche wie für skeptische Rechnungen, auch für Carriers eigene. Ich hänge nicht an einer bestimmten Zahl. Der qualitative Punkt bleibt: Mehrere voneinander **unabhängige** Belege, die jeweils ohne Auferstehung schwer zu erklären sind, verstärken sich multiplikativ. Wer die Auferstehung ablehnt, muss für jeden einzelnen Beleg eine eigene natürliche Erklärung finden – und alle zusammen müssen gleichzeitig zutreffen.`,
          voices: [
            {
              person: 'tim-mcgrew',
              role: 'als Wahrscheinlichkeitstheoretiker und Philosoph',
              text: `Timothy McGrew argumentiert zusammen mit Lydia McGrew, dass man nicht nach der absoluten Wahrscheinlichkeit der Auferstehung fragen muss, sondern nach dem Verhältnis, wie gut sie die Belege erklärt im Vergleich zur Alternative. Jede einzelne Belegart – das Zeugnis der Frauen, der Jünger, des Paulus – trägt einen eigenen Faktor bei; zusammengenommen ist das Gewicht so groß, dass selbst eine sehr niedrige Vorabwahrscheinlichkeit überwunden werden kann. Die genauen Zahlen sind Schätzungen; die Struktur des Arguments ist mathematisch sauber.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist deine Ablehnung der Auferstehung ein Ergebnis der Quellenprüfung oder eine Voraussetzung?`,
    `Wenn Gott existierte – wäre die Auferstehung dann immer noch „das Unwahrscheinlichste"?`,
    `Welche natürliche Erklärung erklärt alle Daten – leeres Grab, Gruppen, Jakobus, Paulus, frühes Credo?`,
    `Woher weißt du, dass die Erfahrung „einheitlich" gegen Wunder spricht?`,
    `Was würde dich überzeugen – und gilt dieser Maßstab auch für andere antike Ereignisse?`,
  ],
  avoid: [
    `„Die Wissenschaft hat Wunder bewiesen" – die Naturwissenschaft beweist weder noch widerlegt sie Wunder.`,
    `Die Auferstehung als „biologisch erklärbar" darstellen (z. B. mit Quantenphysik) – das verfehlt ihren Charakter als Gottes Tat.`,
    `Bayes-Zahlen (z. B. „97 %" oder „10 hoch 44") als exakte Ergebnisse präsentieren – nenne sie Schätzungen.`,
    `Hume persönlich angreifen oder lächerlich machen – zeige die logische Schwäche seines Arguments.`,
  ],
  concessions: [
    `Historiker arbeiten in der Regel methodisch naturalistisch; die Einbeziehung übernatürlicher Ursachen ist in der Geschichtstheorie umstritten.`,
    `Die Vorabwahrscheinlichkeit einer Auferstehung ist ohne Hintergrundannahmen über Gott tatsächlich sehr niedrig.`,
    `Humes Argument hat auch heute gewichtige Verteidiger (z. B. Fogelin); die Debatte ist philosophisch nicht abgeschlossen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Earman', work: `Hume's Abject Failure: The Argument Against Miracles`, year: '2000', status: 'paraphrase', note: 'Von einem nicht-theistischen Wissenschaftsphilosophen.' },
    { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', year: '1947', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Wunder', 'Hume', 'Ehrman', 'Bayes', 'Naturalismus', 'Geschichtstheorie', 'Earman'],
  related: [
    'atheismus/aussergewoehnliche-belege',
    'physik/wunder-verletzen-naturgesetze',
    'liberale-theologie/entmythologisierung',
    'naturalismus/lueckenbuesser-gott',
    'medizin-wunder/keine-belegten-wunder',
    'mathematik/unwahrscheinliches-passiert-staendig',
    'auferstehung/halluzinationen',
  ],
};

export default claim;
