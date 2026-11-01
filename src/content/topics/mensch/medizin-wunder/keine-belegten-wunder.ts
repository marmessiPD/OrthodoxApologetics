import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'keine-belegten-wunder',
  title: `„Es gibt keine medizinisch belegten Wunder."`,
  proponents: [
    { name: 'David Hume', role: 'Philosoph der schottischen Aufklärung', work: 'An Enquiry Concerning Human Understanding (1748), Abschnitt X „Of Miracles"' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"-Magazins', work: 'The Believing Brain (2011)' },
    { name: 'Joe Nickell', role: 'Skeptischer Ermittler, Committee for Skeptical Inquiry', work: 'Looking for a Miracle (1993)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Jesus, Interrupted (2009) – Historiker können keine Wunder feststellen' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006)' },
  ],
  steelman: `David Hume hat das Problem 1748 auf den Punkt gebracht: Ein Wunder ist eine Verletzung der Naturgesetze, und diese Gesetze stützen sich auf die einheitliche Erfahrung von Milliarden Fällen. Kein Zeugnis ist je so stark, dass sein Irrtum unwahrscheinlicher wäre als das Wunder selbst. Menschen lieben das Wunderbare, Wunderberichte gedeihen in leichtgläubigen Milieus, und die Wunder konkurrierender Religionen heben sich gegenseitig auf. Moderne Fakten bestätigen Hume: In Lourdes wurden in über 160 Jahren bei Hunderten Millionen Pilgern nur rund 70 Heilungen anerkannt – weniger, als man nach den Raten von Spontanremissionen erwarten würde; und anerkannt hat sie die Kirche, also Richter in eigener Sache. „Medizinisch unerklärlich" heißt nur „noch nicht erklärt" – wer daraus ein Wunder macht, betreibt Gott-der-Lücken-Argumentation. Craig Keeners Sammlung ist eine Anekdotensammlung, und ähnliche Berichte gibt es in Hinduismus und Islam. Unter kontrollierten Bedingungen wurde nie ein Wunder bestätigt.`,
  biblical: {
    summary: `Die Wunder der Bibel sind „Zeichen" (griech. *sēmeia*), die auf Gottes Reich hinweisen (Joh 20,30–31), keine Zaubertricks. Sie geschahen öffentlich und wurden geprüft: Die Behörden untersuchten die Heilung des Blindgeborenen und befragten seine Eltern (Joh 9,18–23); bei der Heilung des Gelähmten an der Tempelpforte mussten die Gegner eingestehen: „wir können's nicht leugnen" (Apg 4,16). Lukas betont, dass er „alles von Anbeginn mit Fleiß erkundet" hat (Lk 1,3). Zugleich warnt die Schrift, dass nicht jedes Zeichen von Gott kommt (Dtn 13,2–4; Mt 24,24) – Wunder verlangen Unterscheidung. Damit ist die Bibel weder leichtgläubig noch wunderfeindlich, sondern prüfend.`,
    detail: `- **Joh 20,30–31**: Die Zeichen wurden aufgeschrieben, „daß ihr glaubet" – sie haben Zeugnischarakter.
- **Apg 3,1–10; 4,14–16**: Der Geheilte steht vor dem Hohen Rat; die Gegner bestreiten das Ereignis nicht, nur seine Deutung.
- **Mk 16,17–18; Jak 5,14–15**: Heilungen werden als fortdauernde Gabe in der Kirche erwartet – nicht als Garantie, aber als Möglichkeit.
- **Dtn 13,2–4; 1 Joh 4,1**: „Prüfet die Geister" – ein Wunder bestätigt nicht automatisch die Lehre dessen, der es behauptet. Das entschärft Humes Einwand der konkurrierenden Religionen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,30–31', quote: `Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,16', quote: `Was wollen wir diesen Menschen tun? Denn das Zeichen, durch sie geschehen, ist kund, offenbar allen, die zu Jerusalem wohnen, und wir können's nicht leugnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,3', quote: `… habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn mit Fleiß erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bezeugt, dass Gott bis heute Wunder wirkt – durch die Fürbitte der Heiligen, in der Krankensalbung, an Wallfahrtsorten. Ihr Synaxarium und ihre Heiligenleben sind voll davon. Zugleich lehrt die Tradition Nüchternheit: Der hl. Antonius heilte viele, sagte aber, nicht er, sondern Christus heile, und mahnte, sich nicht der Wunder zu rühmen. Augustinus ließ in Hippo schriftliche Berichte (*libelli*) über Heilungen anfertigen und öffentlich verlesen – eine frühe Form der Dokumentation. Der Glaube gründet nicht auf neuen Wundern, sondern auf Christus und seiner Auferstehung; Wunder sind Zeichen seiner fortwirkenden Gegenwart.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii (Leben des Antonius)', ref: '56–58; 84', year: 'um 360', quote: `Antonius heilte viele Kranke, mahnte aber, dass die Heilung nicht sein Werk, sondern Gottes sei, und dass man sich über Wunder nicht erheben solle.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXII,8', year: 'um 426', quote: `Augustinus berichtet von zahlreichen Heilungen seiner Zeit und davon, dass er schriftliche Berichte darüber anfertigen und dem Volk vorlesen ließ – in Hippo kamen binnen etwa zwei Jahren rund siebzig solcher Berichte zusammen.`, status: 'paraphrase', note: 'Westlicher Vater – hier als historischer Zeuge.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '48–50', quote: `Die fortdauernden Zeichen – Vertreibung der Dämonen, Bekehrungen, Mut der Märtyrer – zeigen, dass Christus lebt und wirkt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Das Medizinische Büro von Lourdes** (Bureau des Constatations Médicales) wurde 1883 gegründet und hat seither über 7.000 Heilungsdossiers angelegt. Die Prüfung verläuft mehrstufig: Untersuchung durch das Büro, Weiterleitung an ein internationales Ärztekomitee (CMIL), das nach jahrelanger Beobachtung feststellt, ob eine Heilung „nach dem gegenwärtigen Stand der Wissenschaft unerklärlich" ist; erst danach kann der Bischof der Heimatdiözese die Heilung als Wunder anerkennen. Stand April 2025 sind 72 Wunder anerkannt (70. Fall: Sr. Bernadette Moriau, 2018; 71.: der britische Weltkriegsveteran John Traynor, Ende 2024; 72.: die Italienerin Antonia Raco, die an ALS litt, April 2025). Auch die Heiligsprechungsverfahren verlangen medizinische Gutachten durch eine Ärztekommission, die viele Fälle ablehnt.`,
    detail: `**Weitere Forschung:**
- Craig Keener (*Miracles*, 2011) trägt kulturübergreifend Hunderte Berichte zusammen, teilweise mit ärztlicher Dokumentation vor und nach der Heilung; er unterscheidet ausdrücklich verschiedene Qualitätsstufen der Belege.
- Eine Umfrage des Pew Forum („Spirit and Power", 2006) in zehn Ländern zeigte, dass große Anteile der Befragten angaben, eine göttliche Heilung erlebt oder miterlebt zu haben – nicht als Beweis, aber als Hinweis auf die Breite des Phänomens.
- Der säkulare Wissenschaftsphilosoph John Earman (Pittsburgh) nannte Humes Argument in einer gleichnamigen Monographie „Hume's Abject Failure" (2000).

**Faire Kritik:** Fehlende Kontrollgruppen, Meldeverzerrungen (Misserfolge werden nicht gemeldet), Zeugenabhängigkeit, und „unerklärlich" ist nicht automatisch „übernatürlich". **Ehrliches Fazit:** Die Naturwissenschaft kann feststellen, dass eine Heilung nach heutigem Wissen unerklärlich ist; ob sie ein Wunder ist, ist ein philosophisch-theologisches Urteil. Dass es gut dokumentierte, medizinisch unerklärte Heilungen gibt, ist dagegen belegt.`,
    sources: [
      { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X, Teil I', year: '1748', quote: `Ein Wunder ist eine Verletzung der Naturgesetze; und da eine feste und unabänderliche Erfahrung diese Gesetze begründet hat, ist der Beweis gegen ein Wunder schon aus der Natur der Sache so vollständig, wie man sich irgendein Argument aus der Erfahrung denken kann.`, original: 'A miracle is a violation of the laws of nature; and as a firm and unalterable experience has established these laws, the proof against a miracle, from the very nature of the fact, is as entire as any argument from experience can possibly be imagined.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt X, Teil I', year: '1748', quote: `Kein Zeugnis reicht aus, ein Wunder zu begründen, es sei denn, das Zeugnis wäre so beschaffen, dass seine Falschheit noch wunderbarer wäre als die Tatsache, die es zu begründen sucht.`, original: 'No testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure: The Argument Against Miracles', year: '2000', quote: `Humes Argument gegen Wunder ist in seinen Kernpunkten wenig originell und weitgehend verfehlt; insbesondere unterschätzt es die Kraft mehrerer unabhängiger Zeugen.`, status: 'paraphrase', note: 'Earman ist kein christlicher Apologet.' },
      { kind: 'sonstiges', work: 'Heiligtum Unserer Lieben Frau von Lourdes / Berichte zum 70., 71. und 72. anerkannten Wunder', year: '2018; Dez. 2024; April 2025', status: 'paraphrase', note: 'Zahlen nach Stand April 2025; über 7.000 Dossiers seit 1883.' },
      { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Medizinisch belegt" – ja; „naturwissenschaftlich als Wunder bewiesen" – das wäre ein Kategorienfehler. Die Medizin kann feststellen: Diese Krankheit war objektiv da, sie ist plötzlich und vollständig verschwunden, und keine bekannte Ursache erklärt das. In Lourdes prüfen Ärzte seit 1883; von über 7.000 Dossiers haben internationale Fachkommissionen nur sehr wenige als unerklärlich eingestuft – 72 sind heute als Wunder anerkannt. Die eigentliche Frage ist: Lehnst du diese Fälle wegen der Befunde ab – oder weil du wie Hume schon vorher entschieden hast, dass es keine Wunder geben darf?`,
  keyPoints: [
    `**Unterscheide Befund und Deutung:** Ärzte stellen fest, dass eine Heilung nach heutigem Wissen unerklärlich ist; das Urteil „Wunder" ist philosophisch-theologisch. Beides ist legitim, aber verschieden.`,
    `**Humes Zirkel:** Die Erfahrung gegen Wunder ist nur dann „einheitlich", wenn man alle Wunderberichte schon für falsch hält (C. S. Lewis). Selbst der säkulare Philosoph Earman nennt Humes Argument ein „klägliches Scheitern".`,
    `**Strenge Filter:** Die Lourdes-Kriterien schließen Placebo, psychogene Leiden, Remission und Therapieeffekte gezielt aus; die meisten Fälle werden abgelehnt. Die kleine Zahl spricht für die Strenge, nicht gegen das Phänomen.`,
    `**Kein Lückenbüßer:** Der Schluss stützt sich nicht auf Unwissen, sondern auf Wissen – wir wissen, wie lange Knochen oder Nerven zum Heilen brauchen – und auf den Kontext (Gebet, Zeitpunkt).`,
    `**Ein gut belegter Fall genügt,** um die These „es gibt keine" zu widerlegen. Der Skeptiker muss jeden einzelnen Fall wegerklären.`,
    `**Unterscheidung statt Exklusivität:** Christen müssen nicht behaupten, dass außerhalb der Kirche nie etwas Unerklärliches geschieht; Wunder widerlegen zuerst den Naturalismus.`,
  ],
  argument: {
    name: 'Argument aus dokumentierten Heilungen',
    summary: 'Wunder sind möglich; einige Heilungen sind gründlich dokumentiert und unerklärt; ihr Kontext macht sie zu Zeichen.',
    premises: [
      {
        text: 'P1: Wenn Gott existiert, sind Wunder möglich; weder Logik noch Naturwissenschaft schließen sie grundsätzlich aus.',
        support: `Naturgesetze beschreiben, was geschieht, wenn keine weitere Ursache eingreift; ein Wunder bricht kein Gesetz, sondern fügt eine Ursache hinzu (Lewis, Plantinga). Humes Prinzipienargument gilt selbst unter säkularen Philosophen als gescheitert (Earman 2000).`,
        sources: [
          { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure', year: '2000', status: 'paraphrase' },
        ],
      },
      {
        text: 'P2: Einige Heilungen sind vorher und nachher objektiv dokumentiert (organische Krankheit, plötzliche, vollständige, dauerhafte Heilung ohne erklärende Therapie) und wurden von unabhängigen, teils skeptischen Ärzten als nach heutigem Wissen unerklärlich beurteilt.',
        support: `Lourdes (CMIL, 72 anerkannte Fälle aus über 7.000 Dossiers), medizinische Gutachten in Kanonisierungsverfahren, gut dokumentierte Fälle in Keeners Sammlung.`,
      },
      {
        text: 'P3: Diese Heilungen geschehen in einem religiösen Kontext (Gebet, Wallfahrt, Sakrament) und zu einem Zeitpunkt, der ihnen Zeichencharakter verleiht.',
        support: `Ein unerklärliches Ereignis ohne Kontext wäre bloß rätselhaft; ein unerklärliches Ereignis im Moment des Gebets entspricht einem unabhängigen Muster (vgl. Design-Inferenz).`,
      },
    ],
    conclusion: 'Es ist rational, mindestens einige dieser Heilungen als Wunder zu deuten. Die Behauptung „Es gibt keine medizinisch belegten Wunder" ist so nicht haltbar – haltbar ist höchstens „Ich deute keinen Fall als Wunder".',
  },
  voices: [
    {
      person: 'lukas',
      role: 'als Arzt und sorgfältiger Historiker',
      text: `Lukas stellt seinem Evangelium eine methodische Vorbemerkung voran: Er habe alles von Anfang an sorgfältig erkundet, gestützt auf Augenzeugen (Lk 1,1–4). In der Apostelgeschichte schildert er, wie ein von Geburt an Gelähmter, den ganz Jerusalem kannte, geheilt wird und die Behörden das Ereignis untersuchen, ohne es bestreiten zu können. Für den Arzt Lukas sind Wunder keine Privaterlebnisse, sondern öffentliche, überprüfbare Ereignisse.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '3,1–10; 4,13–16', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Bischof und früher Dokumentar von Heilungen',
      text: `Augustinus war anfangs zurückhaltend gegenüber Wundern seiner Zeit. Im *Gottesstaat* (Buch XXII,8) berichtet er dann von zahlreichen Heilungen in Nordafrika, die er teils selbst bezeugen konnte, und schildert, wie er schriftliche Berichte anfertigen und öffentlich verlesen ließ, damit sie nicht in Vergessenheit gerieten. Er versteht sie als Bestätigung, dass Christus, der von den Toten auferstanden ist, weiterhin wirkt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXII,8', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker Humes',
      text: `Lewis zeigt, dass Humes Argument zirkulär ist: Die Erfahrung gegen Wunder wäre nur dann einheitlich, wenn alle Berichte über Wunder falsch wären – und das wissen wir nur, wenn wir schon wissen, dass es keine Wunder gibt. Die eigentliche Frage ist daher nicht historisch, sondern philosophisch: Gibt es etwas außerhalb der Natur, das in sie hineinwirken kann? Wer das vorab verneint, kann kein Zeugnis gelten lassen; wer es offenlässt, muss die Befunde prüfen.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study', ref: 'Kap. 13 („On Probability")', year: '1947', quote: `Natürlich müssen wir Hume zustimmen: Wenn es eine absolut „einheitliche Erfahrung" gegen Wunder gibt, wenn sie also nie geschehen sind, dann sind sie eben nie geschehen. Leider wissen wir nur dann, dass die Erfahrung gegen sie einheitlich ist, wenn wir wissen, dass alle Berichte über sie falsch sind. Und das können wir nur wissen, wenn wir bereits wissen, dass Wunder nie geschehen sind. Tatsächlich argumentieren wir im Kreis.`, original: 'Now of course we must agree with Hume that if there is absolutely "uniform experience" against miracles, if in other words they have never happened, why then they never have. Unfortunately we know the experience against them to be uniform only if we know that all the reports of them are false. And we can know all the reports to be false only if we know already that miracles have never occurred. In fact, we are arguing in a circle.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'keener',
      role: 'als Historiker und Sammler von Wunderberichten',
      text: `Keener begann seine Forschung mit der Frage, ob die Wunderberichte des Neuen Testaments auf Augenzeugen zurückgehen können. Er stellte fest, dass weltweit Hunderte Millionen Menschen angeben, Heilungen erlebt oder gesehen zu haben, und dokumentierte Hunderte Fälle aus Afrika, Asien, Lateinamerika und dem Westen – darunter Fälle mit ärztlichen Befunden vor und nach der Heilung. Gegen Hume argumentiert er: Wenn Augenzeugen auch heute solche Ereignisse berichten, ist es nicht plausibel, antike Berichte allein deshalb für unhistorisch zu halten, weil sie Wunder enthalten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', ref: 'Bd. 1–2', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der Wahrscheinlichkeit von Wundern',
      text: `Swinburne zeigt, dass die Wahrscheinlichkeit eines Wunders nicht allein von der Häufigkeit des Ereignisses abhängt, sondern vom gesamten Hintergrundwissen: Wenn es gute Gründe für die Existenz Gottes gibt und Gott Gründe hat, sich gelegentlich durch Zeichen zu offenbaren, ist ein Wunder in einem religiösen Kontext nicht astronomisch unwahrscheinlich. Mehrere unabhängige Zeugnisse und physische Spuren (Befunde) können dann ein Wunder rational glaubwürdig machen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Concept of Miracle', year: '1970', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Resurrection of God Incarnate', year: '2003', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hume-verletzung',
      objection: `Hume hat es gezeigt: Naturgesetze beruhen auf einheitlicher Erfahrung. Kein Zeugnis kann je stärker sein als diese Erfahrung. Also ist ein Wunder nie glaubwürdig.`,
      objectionBy: 'David Hume',
      targetsPremise: 1,
      answer: `Humes Argument ist zirkulär: Die Erfahrung gegen Wunder ist nur dann „einheitlich", wenn man alle Wunderberichte schon für falsch erklärt hat (C. S. Lewis). Selbst der säkulare Wissenschaftsphilosoph John Earman nannte es ein „klägliches Scheitern". Außerdem „verletzt" ein Wunder kein Gesetz: Naturgesetze beschreiben, was geschieht, wenn nichts anderes eingreift – ein Wunder fügt eine Ursache hinzu.`,
      followUps: [
        {
          id: 'einheitliche-erfahrung',
          objection: `Milliarden Menschen sind gestorben und tot geblieben, Milliarden Brüche heilten langsam. Das ist die einheitliche Erfahrung.`,
          objectionBy: 'Michael Shermer',
          targetsPremise: 1,
          answer: `Genau – und deshalb wäre ein Wunder ein Zeichen. Wunder sind per Definition selten; ein häufiges Wunder wäre ein Naturgesetz. Mit deinem Häufigkeitsargument dürftest du auch kein einmaliges Ereignis glauben – den Urknall, die Entstehung des ersten Lebens. Die Wahrscheinlichkeit eines Wunders hängt nicht nur von der Häufigkeit ab, sondern davon, ob es einen Gott gibt, der Gründe hat zu handeln.`,
          followUps: [
            {
              id: 'prior-extrem-niedrig',
              objection: `Bayesianisch gesprochen: Die Vorab-Wahrscheinlichkeit eines Wunders ist so niedrig, dass kein Zeugnis sie aufwiegen kann.`,
              objectionBy: 'Bayesianischer Skeptiker',
              targetsPremise: 1,
              answer: `Das stimmt nur, wenn du die Existenz Gottes schon praktisch ausgeschlossen hast. Gibt es gute Gründe für Gott, ist ein Wunder im religiösen Kontext nicht astronomisch unwahrscheinlich. Und schon Charles Babbage zeigte 1837 rechnerisch, was Earman bestätigt: Mehrere **unabhängige** Zeugnisse multiplizieren ihre Beweiskraft und können auch sehr niedrige Vorab-Wahrscheinlichkeiten überwinden.`,
              sources: [
                { kind: 'wissenschaft', author: 'Charles Babbage', work: 'The Ninth Bridgewater Treatise', year: '1837', status: 'paraphrase', note: 'Babbage, Pionier der Rechenmaschinen, analysierte Humes Argument mathematisch.' },
              ],
              followUps: [
                {
                  id: 'zeugen-nicht-unabhaengig',
                  objection: `Religiöse Zeugen sind nie unabhängig – Gruppendruck, Erwartung, Begeisterung.`,
                  objectionBy: 'Joe Nickell',
                  targetsPremise: 2,
                  answer: `Bei begeisterten Augenzeugen ist das ein berechtigter Einwand. Aber Röntgenbilder, Laborwerte und Arztbriefe aus der Zeit **vor** der Wallfahrt, von Ärzten, die nichts von einer späteren Heilung wussten, unterliegen keiner religiösen Begeisterung. Wer sie wegerklären will, muss Fälschungen über mehrere Kliniken hinweg annehmen – dafür braucht es Belege.`,
                  questionsBack: [
                    `Welche Art von Dokumentation würdest du als unabhängig akzeptieren?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'gott-der-luecken',
          objection: `„Medizinisch unerklärlich" heißt nur „noch nicht erklärt". Wer daraus ein Wunder macht, betreibt Gott-der-Lücken-Argumentation.`,
          objectionBy: 'Steven Novella',
          targetsPremise: 3,
          answer: `Der Schluss beruht nicht auf Unwissen, sondern auf Wissen: Wir wissen recht genau, wie lange Knochen, Nerven oder Gewebe zum Heilen brauchen und dass manche Schäden nie von selbst heilen. Eine augenblickliche, vollständige Heilung widerspricht diesem Wissen. Dazu kommt ein positives Kennzeichen: Sie geschieht im Moment des Gebets – das ist ein spezifisches Muster, kein bloßes Loch.`,
          followUps: [
            {
              id: 'zukuenftige-medizin',
              objection: `Vielleicht erklärt die Medizin der Zukunft auch diese Fälle.`,
              objectionBy: 'Skeptiker',
              targetsPremise: 3,
              answer: `Für einzelne Fälle ist das möglich – die Lourdes-Kommission hat auch Fälle zurückgestellt, für die sich später Erklärungen fanden; das zeigt, dass das Verfahren selbstkritisch ist. Aber ein Versprechen auf künftige Erklärungen ist selbst nicht widerlegbar. Irgendwann wird „irgendwann erklären wir es" vom Argument zum Dogma.`,
              followUps: [
                {
                  id: 'dann-agnostisch',
                  objection: `Dann bleibe ich eben bei jedem Einzelfall agnostisch.`,
                  answer: `Das ist eine ehrliche Haltung – und sie ist weit entfernt von deiner Ausgangsthese. „Es gibt keine medizinisch belegten Wunder" ist dann zurückgenommen; übrig bleibt: „Ich persönlich deute keinen dieser belegten Fälle als Wunder." Das ist eine Entscheidung, keine Tatsachenfeststellung.`,
                  questionsBack: [
                    `Gibt es irgendeinen denkbaren Befund, bei dem du ein Wunder für die beste Erklärung halten würdest?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lourdes-zu-wenige',
      objection: `Lourdes: 72 Wunder in über 160 Jahren bei Hunderten Millionen Pilgern. Das ist weniger, als man nach den Raten von Spontanremissionen erwarten würde!`,
      objectionBy: 'Michael Shermer',
      targetsPremise: 2,
      answer: `Der Vergleich hinkt. Die 72 sind nicht die Zahl der Heilungen, sondern der Fälle, die einen extrem strengen Filter passiert haben: organisch, objektiv dokumentiert, augenblicklich, vollständig, dauerhaft, ohne erklärende Therapie, jahrelang nachbeobachtet. Typische Spontanremissionen verlaufen allmählich und würden gar nicht durchkommen. Über 7.000 Dossiers wurden angelegt – die Kirche irrt lieber auf der Seite der Ablehnung.`,
      followUps: [
        {
          id: 'richter-in-eigener-sache',
          objection: `Die Kirche ist Richter in eigener Sache.`,
          objectionBy: 'Richard Dawkins',
          targetsPremise: 2,
          answer: `Die medizinische Beurteilung liegt bei Ärzten verschiedener Fachrichtungen und Länder; nach Darstellung des Heiligtums kann jeder Arzt an den Untersuchungen des Büros teilnehmen, und die Akten werden archiviert. Erst nach dem medizinischen Urteil „unerklärlich" folgt das theologische Urteil des Bischofs. Wenn du Fehler vermutest, ist der Weg offen: Prüfe die Akten eines konkreten Falls.`,
          sources: [
            { kind: 'sonstiges', work: 'Medizinisches Büro von Lourdes (Bureau des Constatations Médicales) und Internationales Medizinisches Komitee (CMIL): Verfahrensbeschreibung', status: 'paraphrase', note: 'Angaben zur Offenheit für Ärzte nach Selbstdarstellung des Heiligtums.' },
          ],
          followUps: [
            {
              id: 'warum-nur-christlich',
              objection: `Warum gerade Lourdes? Auch Hindus und Muslime berichten von Wunderheilungen.`,
              objectionBy: 'Bart Ehrman',
              answer: `Ich muss nicht behaupten, dass Gott nur Christen heilt – er lässt seine Sonne aufgehen über Böse und Gute (Mt 5,45). Heilungsberichte gibt es übrigens in vielen christlichen Kirchen – koptisch, orthodox, katholisch, evangelisch –, nicht nur in Lourdes. Die erste Frage ist, ob es überhaupt Wunder gibt. Wenn ja, ist der Naturalismus falsch – und dann prüfen wir, welche Offenbarung trägt.`,
              followUps: [
                {
                  id: 'wunder-heben-sich-auf',
                  objection: `Wenn alle Religionen Wunder haben, heben sie sich gegenseitig auf – das war schon Humes Punkt.`,
                  objectionBy: 'David Hume',
                  answer: `Nur wenn jedes Wunder als Beweis für die ausschließliche Wahrheit seiner Religion gelten soll. Das behaupte ich nicht. Wunder widerlegen zuerst den Naturalismus; welche Lehre wahr ist, entscheidet sich an anderen Gründen – für Christen vor allem an der historisch prüfbaren Auferstehung Jesu. Die Schrift selbst lehrt, Zeichen zu prüfen (Dtn 13; 1 Joh 4,1).`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'keener-anekdoten',
      objection: `Keeners „Miracles" ist eine riesige Sammlung von Anekdoten. Anekdoten sind keine Daten.`,
      objectionBy: 'Skeptische Rezensenten',
      targetsPremise: 2,
      answer: `Teilweise berechtigt – Keener ist Historiker und bewertet Zeugnisse, wie Historiker es immer tun. Aber er unterscheidet Qualitätsstufen, und ein Teil seiner Fälle hat ärztliche Dokumentation vor und nach der Heilung. Und logisch gilt: Die These „Es gibt **keine** belegten Fälle" wird schon durch **einen** gut belegten Fall widerlegt. Du musst also jeden einzelnen starken Fall wegerklären – nicht nur die schwachen.`,
      followUps: [
        {
          id: 'totenauferweckungen',
          objection: `Keener berichtet sogar von Totenauferweckungen. Das zeigt doch, wie unkritisch er ist.`,
          objectionBy: 'Skeptiker',
          answer: `Keener nennt solche Berichte und räumt selbst ein, dass manche als Scheintod oder Fehldiagnose erklärbar sein könnten. Er gibt sie als Zeugnisse wieder, nicht als bewiesene Fälle. Gerade dass er die Grenzen der Belege offen benennt, spricht für seine Seriosität – und eine unklare Gruppe von Berichten entwertet nicht die gut dokumentierten.`,
        },
        {
          id: 'kontrollierte-studie',
          objection: `Dann macht doch kontrollierte Studien, statt Geschichten zu sammeln!`,
          objectionBy: 'Steven Novella',
          answer: `Das ist versucht worden. Eine Studie in Mosambik (Brown u. a., Southern Medical Journal 2010) maß mit Audiometer und Sehtafeln vor und nach Gebet mit Handauflegung und fand deutliche, objektiv gemessene Verbesserungen des Hörens und Sehens.`,
          voices: [
            {
              person: 'candy-gunther-brown',
              role: 'als Leiterin der Mosambik-Studie',
              text: `Brown wollte die übliche Praxis von Pfingstchristen untersuchen – Gebet in unmittelbarer Nähe, mit Berührung – statt der in Studien üblichen Fern-Fürbitte durch Fremde. Ihr Team testete Hör- und Sehvermögen unmittelbar vor und nach dem Gebet mit standardisierten Geräten und fand statistisch signifikante Verbesserungen. Sie wertet das als Anlass für weitere, kontrollierte Forschung.`,
              sources: [
                { kind: 'wissenschaft', author: 'Candy Gunther Brown, Stephen C. Mory, Rebecca Williams, Michael J. McClymond', work: 'Study of the Therapeutic Effects of Proximal Intercessory Prayer (STEPP) on Auditory and Visual Impairments in Rural Mozambique', ref: 'Southern Medical Journal 103 (2010), 864–869', status: 'paraphrase' },
              ],
            },
          ],
          followUps: [
            {
              id: 'brown-methodik-kritik',
              objection: `Keine Kontrollgruppe, keine Verblindung, nur 24 Probanden – und Hörtests hängen von der Motivation ab.`,
              objectionBy: 'Methodenkritik',
              answer: `Alles richtig; es ist eine Pilotstudie, und das sagen die Autoren selbst. Sie ist ein Hinweis, der kontrollierte Wiederholung verdient – kein Schlussstein. Meine Argumentation ruht auf dem Gesamtbild: Lourdes, Kanonisierungsgutachten, gut dokumentierte Einzelfälle. Die Studie zeigt nur, dass das Thema empirisch untersuchbar ist.`,
            },
          ],
        },
      ],
    },
    {
      id: 'historiker-methodischer-naturalismus',
      objection: `Wissenschaftler und Historiker können grundsätzlich keine Wunder feststellen – Wissenschaft arbeitet methodisch naturalistisch.`,
      objectionBy: 'Bart Ehrman',
      targetsPremise: 1,
      answer: `Die Medizin kann sehr wohl Tatsachen feststellen: Krankheit X war objektiv da, ist plötzlich verschwunden, und keine bekannte Ursache erklärt das. Die Deutung als Wunder ist ein philosophischer Schritt – aber der Ausschluss dieser Deutung ist ebenfalls ein philosophischer Schritt. Methodischer Naturalismus ist eine Arbeitsregel, keine Entdeckung über die Wirklichkeit.`,
      followUps: [
        {
          id: 'wissenschaft-bricht-zusammen',
          objection: `Ohne methodischen Naturalismus bricht die Wissenschaft zusammen – dann kann man alles mit Wundern erklären.`,
          objectionBy: 'Jerry Coyne',
          answer: `Im Gegenteil: Wunder setzen eine verlässliche Naturordnung voraus – sonst könnte man sie gar nicht erkennen. Die Begründer der modernen Wissenschaft glaubten an einen Gott, der in der Regel durch Naturgesetze wirkt und ausnahmsweise darüber hinaus. Seltene Ausnahmen gefährden keine Wissenschaft; ein Christ sucht zuerst nach natürlichen Ursachen, wie die Lourdes-Ärzte es tun.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Befund würde dich überzeugen, dass eine Heilung nicht natürlich erklärbar ist – oder ist das grundsätzlich ausgeschlossen?`,
    `Hast du die Akten eines konkreten anerkannten Falls geprüft?`,
    `Woher weißt du, dass die Erfahrung gegen Wunder „einheitlich" ist, ohne alle Berichte vorher für falsch zu erklären?`,
    `Wenn „unerklärlich" immer „noch nicht erklärt" heißt – welche Beobachtung könnte deine These je widerlegen?`,
  ],
  avoid: [
    `Jede wundersame Geschichte aus dem Internet weitererzählen – ein einziger widerlegter Fall beschädigt deine Glaubwürdigkeit für alle anderen.`,
    `„Die Wissenschaft hat Wunder bewiesen." – Die Medizin stellt Unerklärlichkeit fest; die Deutung ist ein weiterer Schritt.`,
    `Andere Religionen pauschal als dämonisch abtun, um ihre Berichte loszuwerden – unnötig und lieblos.`,
    `Den Glauben auf neue Wunder gründen – sein Fundament ist Christus und seine Auferstehung.`,
  ],
  concessions: [
    `Die meisten gemeldeten Heilungen halten einer strengen Prüfung nicht stand.`,
    `Heilungsberichte haben keine Kontrollgruppen, und Misserfolge werden seltener berichtet als Erfolge.`,
    `„Medizinisch unerklärlich" ist logisch nicht dasselbe wie „übernatürlich" – es braucht ein zusätzliches philosophisches Urteil.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Earman', work: 'Hume\'s Abject Failure: The Argument Against Miracles', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', year: '1947', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Concept of Miracle', year: '1970', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Wunder', 'Lourdes', 'Hume', 'Keener', 'Medizin'],
  related: [
    'medizin-wunder/heilungen-placebo',
    'medizin-wunder/gebetsstudien',
    'physik/wunder-verletzen-naturgesetze',
    'auferstehung/wunder-historisch-unmoeglich',
    'atheismus/aussergewoehnliche-belege',
  ],
};

export default claim;
