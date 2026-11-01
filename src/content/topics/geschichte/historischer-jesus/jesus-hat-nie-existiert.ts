import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-hat-nie-existiert',
  title: `„Jesus hat nie existiert – er ist ein Mythos, der später historisiert wurde."`,
  proponents: [
    { name: 'Richard Carrier', role: 'Althistoriker (PhD Columbia), Mythizist', work: 'On the Historicity of Jesus (2014); Proving History (2012)' },
    { name: 'Robert M. Price', role: 'Neutestamentler, ehem. Jesus Seminar', work: 'Deconstructing Jesus (2000); The Christ-Myth Theory and Its Problems (2011)' },
    { name: 'Earl Doherty', role: 'Autor, Vordenker des modernen Mythizismus', work: 'The Jesus Puzzle (1999)' },
    { name: 'Thomas L. Brodie', role: 'Ehem. Dominikaner und Bibelwissenschaftler', work: 'Beyond the Quest for the Historical Jesus (2012)' },
  ],
  steelman: `Wir haben keinen einzigen Text eines Zeitgenossen, der Jesus zu Lebzeiten erwähnt – keine Inschrift, keinen Brief, keine römische Akte. Die ältesten christlichen Texte, die Paulusbriefe, schweigen auffällig über den irdischen Jesus: keine Gleichnisse, keine Wunder, kein Galiläa, kein Pilatus. Paulus spricht von einem himmlischen Christus, den er durch „Offenbarung" und „nach der Schrift" kennt (Gal 1,12; 1 Kor 15,3). Die Evangelien entstehen erst Jahrzehnte später und sind voller literarischer Muster aus dem Alten Testament und der griechischen Literatur. Die außerchristlichen Notizen (Josephus, Tacitus) sind spät, abhängig von christlichen Erzählungen oder sogar verfälscht. Wenn man ehrlich das Bayes-Theorem anwendet und Jesus mit der Klasse mythischer Heldenfiguren (Rank-Raglan-Typ) vergleicht, ist ein rein himmlischer Christus, der erst nachträglich in die Geschichte versetzt wurde, mindestens ebenso wahrscheinlich – vermutlich wahrscheinlicher – als ein galiläischer Wanderprediger. – So etwa Richard Carrier.`,
  biblical: {
    summary: `Das Neue Testament selbst legt Wert darauf, dass es von einer **datierbaren, verortbaren Person** spricht: geboren „unter dem Gesetz" (Gal 4,4), aus Davids Geschlecht (Röm 1,3), mit Brüdern, deren einer, Jakobus, Paulus persönlich kannte (Gal 1,19), gekreuzigt unter Pontius Pilatus (1 Tim 6,13), begraben (1 Kor 15,4). Lukas datiert das Auftreten des Täufers mit sechs Synchronismen (Lk 3,1–2). Die Apostel betonen ausdrücklich, keinen „klugen Fabeln" gefolgt zu sein (2 Petr 1,16).`,
    detail: `Gerade die frühesten Texte – die Paulusbriefe aus den Jahren ca. 48–60 – enthalten erstaunlich viele „irdische" Details, obwohl es Gelegenheitsschreiben an bereits unterrichtete Gemeinden sind:

- **Geburt und Herkunft:** „geboren von einem Weibe und unter das Gesetz getan" (Gal 4,4); „aus dem Samen Davids nach dem Fleisch" (Röm 1,3); Diener der Beschneidung, also Wirken unter Juden (Röm 15,8).
- **Familie:** „Jakobus, des HERRN Bruder" (Gal 1,19); „die Brüder des HERRN" (1 Kor 9,5).
- **Jünger:** Kephas und die Zwölf (1 Kor 15,5); Johannes und Jakobus als „Säulen" (Gal 2,9).
- **Lehre:** Scheidungsverbot als Wort des Herrn (1 Kor 7,10), Unterhalt der Verkündiger (1 Kor 9,14, vgl. Lk 10,7).
- **Letzte Nacht:** „in der Nacht, da er verraten (übergeben) ward" – das Abendmahl (1 Kor 11,23–25).
- **Tod:** gekreuzigt (1 Kor 2,2; Gal 3,1), von den Judäern getötet (1 Thess 2,14–15), begraben (1 Kor 15,4).

Paulus wiederholt diese Dinge nicht ausführlich, weil seine Briefe Antworten auf Gemeindeprobleme sind, keine Biografien. Dass er Jesu Bruder und den führenden Jünger persönlich traf (Gal 1,18–19), macht ihn zu einem Zeugen, der nur **eine Handbreit** von der Person Jesu entfernt ist.`,
    sources: [
      { kind: 'bibel', work: 'Galater', ref: '1,18–19', quote: `Darnach über drei Jahre kam ich gen Jerusalem, Petrus zu schauen, und blieb fünfzehn Tage bei ihm. Der andern Apostel aber sah ich keinen außer Jakobus, des HERRN Bruder.`, original: `Ἰάκωβον τὸν ἀδελφὸν τοῦ κυρίου`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllet ward, sandte Gott seinen Sohn, geboren von einem Weibe und unter das Gesetz getan,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '11,23', quote: `Ich habe es von dem HERRN empfangen, das ich euch gegeben habe. Denn der HERR Jesus in der Nacht, da er verraten ward, nahm das Brot,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '3,1–2', quote: `Im fünfzehnten Jahr des Kaisertums des Kaisers Tiberius, da Pontius Pilatus Landpfleger in Judäa war … da geschah der Befehl Gottes zu Johannes.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase', note: 'Sechsfacher Synchronismus – typisch für antike Geschichtsschreibung, nicht für Mythen.' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsres HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die Kirche ist die Geschichtlichkeit Jesu nicht Nebensache, sondern Kern des Glaubens: Das Glaubensbekenntnis nennt bewusst einen römischen Beamten – „gekreuzigt unter Pontius Pilatus". Der Glaube an die Menschwerdung (Joh 1,14) steht und fällt damit, dass der Logos wirklich Fleisch wurde, in einer bestimmten Zeit und an einem bestimmten Ort. Die alexandrinische Tradition hat das gegen die Doketen verteidigt, die Jesu Leib für bloßen Schein hielten.`,
    detail: `Ignatius von Antiochien (gest. ca. 110) betont gegen die Doketen, Jesus sei „wahrhaft" geboren, habe „wahrhaft" gelitten unter Pontius Pilatus und sei „wahrhaft" auferweckt worden (An die Trallianer 9). Der hl. Athanasius verankert die Erlösung darin, dass der Logos einen wirklichen, sterblichen Leib annahm (De Incarnatione 8–9). Die koptische Liturgie bekennt im Nizänum dieselbe Datierung. Ein Mythos, der „irgendwann im Himmel" spielt, könnte nicht leisten, was die Menschwerdung leistet: Gott tritt in **unsere** Geschichte ein.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', ref: 'Art. 2', year: '325/381', quote: `… gekreuzigt für uns unter Pontius Pilatus, hat gelitten und ist begraben worden …`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Trallianer', ref: '9', year: 'ca. 110', quote: `Jesus Christus, … der wahrhaft geboren wurde, aß und trank, wahrhaft verfolgt wurde unter Pontius Pilatus, wahrhaft gekreuzigt wurde und starb …`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8–9', year: 'ca. 318', quote: `Der Logos nahm einen Leib an, der unserem gleich war, damit er ihn für alle dem Tod übergebe.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Mythizismus ist in der Fachwelt eine **Randposition**. Praktisch alle Althistoriker und Neutestamentler – Christen, Juden, Agnostiker und Atheisten – halten die Existenz Jesu für gesichert. Bart Ehrman (Agnostiker) schrieb eigens ein Buch gegen den Mythizismus („Did Jesus Exist?", 2012), ebenso der Agnostiker Maurice Casey (2014). Carriers Buch erschien zwar in einem Fachverlag (Sheffield Phoenix), überzeugte aber die Fachwelt nicht; die ausführlichste Fachrezension (Daniel Gullotta, JSHJ 2017) fiel deutlich negativ aus.`,
    detail: `**Ehrlich zuzugeben:** Es gibt keine zeitgenössischen Dokumente aus Jesu Lebenszeit (27–30/33 n. Chr.) selbst; die Paulusbriefe beginnen ca. 15–20 Jahre später. Das ist für einen galiläischen Wanderprediger aus der Unterschicht aber **normal** – auch für Johannes den Täufer, Judas den Galiläer oder Theudas haben wir nur Josephus und das NT. Selbst Pontius Pilatus ist außer bei Philo, Josephus, Tacitus, dem NT und einer einzigen Inschrift (1961) kaum bezeugt.

**Was Mythizisten richtig sehen:** Die Evangelisten erzählen theologisch, mit Anspielungen auf das AT. Die klassischen Echtheitskriterien sind methodisch umstritten (Keith/Le Donne 2012). Aber daraus folgt nur, dass Geschichte gedeutet wird – nicht, dass es sie nicht gab.

**Geschichte der Hypothese:** Der Mythizismus ist nicht neu: Volney und Dupuis (1790er), Bruno Bauer (19. Jh.), Arthur Drews („Die Christusmythe", 1909). Er wurde damals schon geprüft und von der Fachwelt verworfen.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Ehrman – selbst Agnostiker – hält die Existenz Jesu für eine Auffassung, die praktisch jeder Fachmann teilt; Paulus' Bekanntschaft mit Petrus und Jakobus, dem Bruder Jesu, sei ein zentrales Indiz.`, status: 'paraphrase', note: 'Ehrman ist einer der bekanntesten Kritiker des Christentums – das Zugeständnis wiegt schwer.' },
      { kind: 'gegner', author: 'Maurice Casey', work: 'Jesus: Evidence and Argument or Mythicist Myths?', year: '2014', quote: `Der agnostische Aramaist Casey weist den Mythizisten methodische und sprachliche Fehler nach.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Daniel N. Gullotta', work: `On Richard Carrier's Doubts. Journal for the Study of the Historical Jesus 15`, year: '2017', quote: `Ausführliche Fachrezension von Carriers „On the Historicity of Jesus" mit dem Ergebnis, dass dessen Argumente die Fachwelt nicht überzeugen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard Carrier', work: 'On the Historicity of Jesus: Why We Might Have Reason for Doubt', year: '2014', quote: `Carrier hält die Wahrscheinlichkeit der Historizität im günstigsten Fall für etwa 1 zu 3, nach seiner eigenen Schätzung für weit geringer.`, status: 'paraphrase', note: 'Die genauen Zahlen werden in Sekundärquellen unterschiedlich wiedergegeben – vor Zitierung im Buch prüfen.' },
    ],
  },
  quickAnswer: `Fast alle Fachleute – auch Atheisten und Agnostiker wie Bart Ehrman – sind sich einig, dass Jesus gelebt hat. Der wichtigste Grund: Paulus schreibt, dass er Petrus und **Jakobus, den Bruder des Herrn**, persönlich getroffen hat (Gal 1,19). Wer den Bruder eines Menschen kennt, redet nicht über einen Mythos. Dazu kommen Josephus, Tacitus und die Tatsache, dass selbst die erbittertsten antiken Gegner des Christentums Jesu Existenz nie bestritten haben.`,
  keyPoints: [
    `**Paulus kannte Jesu Bruder:** Gal 1,19 und 1 Kor 9,5 – nur eine Generation Abstand, mit persönlichem Kontakt zu Familie und engstem Jüngerkreis.`,
    `**Mehrere unabhängige Quellenstränge:** Paulus, Markus, Q-Material, Sondergut von Matthäus und Lukas, Johannes – dazu Josephus (Ant. 20,200; 18,63 Kern) und Tacitus (Ann. 15,44).`,
    `**Feindliche Zeugen bestreiten nie die Existenz:** Jüdische Polemik (Talmud, Tryphon bei Justin, Kelsos bei Origenes) greift Jesus als Zauberer oder Verführer an – setzt also seine Existenz voraus.`,
    `**Peinliche Details:** Niemand erfindet einen gekreuzigten Messias aus Nazareth, der von seiner Familie für verrückt gehalten wurde (Mk 3,21) – das war ein „Ärgernis" (1 Kor 1,23).`,
    `**Normale Quellenlage:** Für einen Wanderprediger aus Galiläa ist die Bezeugung außergewöhnlich gut; viele unbestrittene antike Personen sind schlechter belegt.`,
    `**Konsens über alle Lager hinweg:** Christen, Juden (Vermes, Fredriksen), Agnostiker (Ehrman, Casey), Atheisten (Lüdemann) – der Mythizismus überzeugt kaum einen Fachhistoriker.`,
  ],
  argument: {
    name: 'Argument aus der Bruderschaft des Jakobus',
    summary: 'Ein kurzes, schwer angreifbares Argument für die Existenz Jesu.',
    premises: [
      {
        text: `P1: Paulus schreibt in einem unbestritten echten Brief (Galater, ca. 48–55), dass er Jakobus, „den Bruder des Herrn", persönlich traf.`,
        support: `Der Galaterbrief gehört zu den sieben Briefen, deren paulinische Verfasserschaft auch von kritischen Forschern nicht bestritten wird. Die Stelle ist textkritisch gesichert.`,
        sources: [{ kind: 'bibel', work: 'Galater', ref: '1,19', status: 'verbatim', quote: `Der andern Apostel aber sah ich keinen außer Jakobus, des HERRN Bruder.`, translation: 'Luther 1912' }],
      },
      {
        text: `P2: „Bruder des Herrn" bezeichnet bei Paulus eine leibliche Verwandtschaft (bzw. engste Familienzugehörigkeit), keine allgemeine christliche Bruderschaft.`,
        support: `Paulus nennt Christen „Brüder", aber nie „Brüder des Herrn"; in 1 Kor 9,5 unterscheidet er „die Brüder des Herrn" ausdrücklich von den Aposteln und Kephas. Mk 6,3 und Josephus (Ant. 20,200) bezeugen unabhängig einen Jakobus als Bruder Jesu.`,
        sources: [
          { kind: 'bibel', work: '1. Korinther', ref: '9,5', status: 'paraphrase', quote: `Haben wir nicht auch Macht, eine Schwester zum Weibe mit umherzuführen wie die andern Apostel und des HERRN Brüder und Kephas?` },
          { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,200', year: 'ca. 93/94', quote: `… den Bruder Jesu, des sogenannten Christus, mit Namen Jakobus …`, original: `τὸν ἀδελφὸν Ἰησοῦ τοῦ λεγομένου Χριστοῦ, Ἰάκωβος ὄνομα αὐτῷ`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: `P3: Wer einen leiblichen Bruder hat, hat existiert.`,
        support: `Trivial – aber genau deshalb ist der Mythizist gezwungen, P2 umzudeuten.`,
      },
    ],
    conclusion: `Also hat Jesus als geschichtliche Person existiert – bezeugt von einem Autor, der seinen Bruder und seinen engsten Jünger persönlich kannte.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Zeitgenosse und Zeuge erster Hand',
      text: `Paulus ist der früheste Autor, dessen Briefe wir besitzen – und er ist kein Mann, der nur „Visionen" kennt. Er betont zwar, sein Evangelium durch Offenbarung empfangen zu haben (Gal 1,12), schildert aber im selben Brief, wie er drei Jahre nach seiner Bekehrung nach Jerusalem reiste, um Kephas „kennenzulernen" (historēsai), fünfzehn Tage bei ihm blieb und Jakobus, den Bruder des Herrn, traf (Gal 1,18–19). Vierzehn Jahre später legte er den „Säulen" Jakobus, Kephas und Johannes sein Evangelium vor (Gal 2,1–10). Wer so schreibt, beruft sich auf Menschen, die jeder in Jerusalem überprüfen konnte.`,
      sources: [{ kind: 'bibel', work: 'Galater', ref: '2,9', status: 'paraphrase', quote: `Jakobus, Kephas und Johannes, die als Säulen galten, gaben mir und Barnabas die rechte Hand der Gemeinschaft.` }],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos (Alexandrien)',
      text: `Origenes setzte sich um 248 mit der ausführlichsten antiken Streitschrift gegen das Christentum auseinander, dem „Wahren Wort" des Platonikers Kelsos (ca. 170–180). Bemerkenswert: Kelsos greift alles an – Jungfrauengeburt, Wunder, Auferstehung –, aber **nie** die Existenz Jesu. Er behauptet vielmehr, Jesus sei unehelich geboren, habe in Ägypten Zauberkünste gelernt und sei dann als Wundertäter aufgetreten (Contra Celsum I,28; I,38). Ein Gegner, der die Existenz hätte bestreiten können, hätte damit seine stärkste Waffe gehabt. Origenes nutzt dieses Schweigen nicht als Beweis, sondern antwortet auf Kelsos' konkrete Vorwürfe – und gerade dadurch wird sichtbar, dass beide Seiten von einem realen Jesus ausgehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,28; I,38', year: 'ca. 248', quote: `Kelsos lässt einen Juden sagen, Jesus habe sich als Tagelöhner in Ägypten verdingt, dort Zauberkräfte erprobt und sei dann zurückgekehrt, um sich ihretwegen als Gott auszurufen.`, status: 'paraphrase' }],
    },
    {
      person: 'simon-gathercole',
      role: 'als Neutestamentler (Cambridge)',
      text: `Gathercole hat in einem Fachaufsatz systematisch zusammengetragen, was Paulus über die **menschliche und geschichtliche Existenz** Jesu sagt: Geburt, davidische Abstammung, Brüder, Wirken unter Juden, Abendmahl, Auslieferung, Kreuzigung, Begräbnis. Sein Ergebnis: Die Paulusbriefe setzen ganz selbstverständlich einen Menschen voraus, der kürzlich in Judäa gelebt hat. Die mythizistische Lesart muss Stelle für Stelle umgedeutet werden – jede einzeln vielleicht denkbar, in der Summe aber unplausibel.`,
      sources: [{ kind: 'fachliteratur', author: 'Simon Gathercole', work: `The Historical and Human Existence of Jesus in Paul's Letters. Journal for the Study of the Historical Jesus 16`, year: '2018', status: 'paraphrase', quote: `Paulus bezeugt eine Fülle von Details über den irdischen Jesus, die eine rein himmlische Gestalt ausschließen.` }],
    },
    {
      person: 'blomberg',
      role: 'als Neutestamentler (Denver Seminary)',
      text: `Blomberg weist darauf hin, dass die Evangelien zur Gattung der antiken Biografie (bios) gehören und mit Ortsangaben, Namen, aramäischen Wendungen und politischen Details (Herodes Antipas, Kajaphas, Pilatus) arbeiten, die archäologisch und literarisch vielfach bestätigt sind. Mythen spielen „in jener Zeit" – die Evangelien spielen unter Tiberius, in Kafarnaum und Jerusalem, mit Personen, die Josephus ebenfalls kennt.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of the Gospels', year: '2. Aufl. 2007', status: 'paraphrase', quote: `Die Evangelien enthalten eine Fülle überprüfbarer historischer, geographischer und kultureller Details.` }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker des Zweiten Tempels',
      text: `Wright betont, dass die Entstehung der frühen Kirche – eine messianische Bewegung, die ihren Messias trotz Kreuzigung verkündigt – ohne einen historischen Jesus nicht erklärbar ist. Messianische Bewegungen des 1. Jahrhunderts (Judas der Galiläer, Simon bar Giora, später Bar Kochba) hatten immer einen realen Anführer; mit dessen Tod endete die Bewegung. Die Christusbewegung ist die einzige, die nach dem Tod ihres Anführers weiterwuchs – und zwar mit Berufung auf **diesen** Anführer.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Jesus and the Victory of God', year: '1996', status: 'paraphrase', quote: `Messianische Bewegungen des 1. Jahrhunderts endeten mit dem Tod ihres Anführers – die Jesusbewegung ist die große Ausnahme.` }],
    },
  ],
  dialog: [
    {
      id: 'keine-zeitgenoessischen-quellen',
      objection: `Nenne mir eine einzige zeitgenössische Quelle – eine Inschrift, einen römischen Bericht, einen Brief aus Jesu Lebenszeit. Es gibt keine. Für einen Mann, der angeblich Tote erweckte und Tausende speiste, ist dieses Schweigen ohrenbetäubend.`,
      objectionBy: 'Richard Carrier / David Fitzgerald',
      answer: `Für einen galiläischen Wanderprediger aus der Unterschicht ist das völlig normal: Aus dem Palästina der Jahre 27–33 haben wir fast überhaupt keine Texte – nicht einmal über Pilatus gibt es zeitgenössische Akten. Und es gibt einen Zeitgenossen: Paulus, geboren um 5 n. Chr., der Jesu Bruder Jakobus und Petrus persönlich kannte. Seine Briefe liegen nur 15–25 Jahre nach der Kreuzigung – für antike Verhältnisse extrem nah.`,
      detail: `**Vergleich:** Johannes der Täufer, eine bekannte Prophetengestalt, ist außerhalb des NT nur bei Josephus erwähnt (Ant. 18,116–119), Jahrzehnte später. Ähnlich Judas der Galiläer, Theudas oder der „Ägypter" (Apg 21,38; Josephus). Niemand bestreitet deren Existenz. Römische Prozessakten aus der Provinz sind aus dieser Zeit praktisch nicht erhalten.

**Der Maßstab des Gegners ist überzogen:** Würde man ihn konsequent anwenden, müsste man einen großen Teil der antiken Geschichte streichen. Historiker fragen nicht: „Gibt es eine Inschrift?", sondern: „Welche Erklärung passt am besten zu allen vorhandenen Quellen?"`,
      sources: [
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,116–119', year: 'ca. 93/94', quote: `Bericht über Johannes den Täufer und seine Hinrichtung durch Herodes Antipas.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welche zeitgenössischen Quellen hast du für Johannes den Täufer, Judas den Galiläer oder Hillel? Bestreitest du deren Existenz auch?`,
        `Welche Art von Quelle aus dem Galiläa der Jahre 28–30 würdest du überhaupt erwarten?`,
      ],
      followUps: [
        {
          id: 'paulus-kennt-keinen-irdischen-jesus',
          objection: `Paulus ist gerade mein bester Zeuge! Er erzählt kein einziges Gleichnis, kein Wunder, nennt weder Nazareth noch Pilatus. Sein Christus ist eine himmlische Gestalt, die er „durch Offenbarung" kennt und „nach der Schrift" – nicht aus Erinnerungen an einen Menschen.`,
          objectionBy: 'Richard Carrier / Earl Doherty',
          answer: `Paulus schreibt Gelegenheitsbriefe an Gemeinden, die er bereits unterrichtet hat – keine Biografien. Trotzdem nennt er erstaunlich viel: Geburt von einer Frau unter dem Gesetz, davidische Abstammung, Brüder (namentlich Jakobus), die Zwölf, Worte des Herrn zur Ehe, das letzte Mahl „in der Nacht, da er übergeben wurde", Kreuzigung, Begräbnis. „Durch Offenbarung" bezieht sich auf seine Berufung (Gal 1,15–16), nicht darauf, dass er von Jesu Leben nichts wusste.`,
          detail: `**Liste der irdischen Details bei Paulus:** Gal 4,4; Röm 1,3; Röm 9,5; Röm 15,8; Gal 1,19; 1 Kor 9,5; 1 Kor 15,5; 1 Kor 7,10; 1 Kor 9,14; 1 Kor 11,23–25; 1 Thess 2,14–15; 1 Kor 15,3–4.

**Methodischer Punkt:** Auch andere frühe Briefe (Jakobusbrief, 1 Petr, 1 Joh) zitieren Jesus selten ausdrücklich. Briefe setzen Wissen voraus; sie erzählen es nicht neu. Ein moderner Vergleich: Wer einem Freund über eine gemeinsame Bekannte schreibt, erzählt nicht ihren Lebenslauf.

**„Nach der Schrift"** (1 Kor 15,3–4) heißt: in Übereinstimmung mit der Schrift gedeutet – nicht: aus der Schrift erfunden. Dasselbe Credo nennt konkrete Zeugen mit Namen (Kephas, Jakobus), von denen Paulus zwei persönlich kannte.`,
          voices: [
            {
              person: 'simon-gathercole',
              text: `Gathercole zeigt, dass Paulus von Jesus Dinge sagt, die nur auf einen Menschen passen: Er war Jude „nach dem Fleisch" (Röm 9,5), Diener der Beschneidung (Röm 15,8), wurde „übergeben" und starb. Die Rede vom „Kreuz" ist bei Paulus nie kosmisch-allegorisch, sondern das öffentliche Ärgernis einer römischen Hinrichtung (1 Kor 1,23; Gal 3,1 „vor die Augen gemalt").`,
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '1,3', quote: `von seinem Sohn, der geboren ist von dem Samen Davids nach dem Fleisch`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: '1. Thessalonicher', ref: '2,14–15', quote: `… von den Juden, welche auch den HERRN Jesus getötet haben und ihre eigenen Propheten …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase', note: 'Verortung des Todes Jesu in Judäa – nicht in einer himmlischen Sphäre.' },
          ],
          questionsBack: [
            `Wenn Paulus' Christus rein himmlisch war – warum hatte er dann einen Bruder, den Paulus in Jerusalem traf?`,
            `Welcher antike Text belegt die Vorstellung einer Kreuzigung im Himmel vor dem 2. Jahrhundert?`,
          ],
          followUps: [
            {
              id: 'geboren-von-frau-allegorisch',
              objection: `„Geboren von einer Frau" in Gal 4,4 ist allegorisch – im selben Kapitel deutet Paulus Hagar und Sara als zwei Bündnisse. Und er benutzt für „geboren" das Verb ginomai („werden"), nicht gennaō („zeugen/gebären"). Das ist eine kosmische „Entstehung", keine Geburt.`,
              objectionBy: 'Richard Carrier',
              answer: `Die Allegorie beginnt erst in Gal 4,21–24 und wird ausdrücklich angekündigt („das ist bildlich geredet"). Gal 4,4 steht in einem ganz anderen Gedankengang: Der Sohn wurde „unter das Gesetz getan", um die unter dem Gesetz loszukaufen – das funktioniert nur, wenn er ein wirklicher Jude war. Und ginomai wird im Griechischen der Zeit ganz normal für Geburt verwendet; in der Septuaginta heißt „von einer Frau geboren" schlicht „Mensch" (vgl. Hi 14,1).`,
              detail: `**Sprachlicher Punkt:** Dieselbe Formel „geboren von einer Frau" (gennētos gynaikos) steht in Hiob 14,1 LXX und Mt 11,11 für „Mensch schlechthin". Paulus betont in Gal 4,4 also die volle Menschlichkeit.

**Logischer Punkt:** Paulus' Argument im Galaterbrief (Gesetz, Abrahamskindschaft, Loskauf) setzt voraus, dass Christus wirklich unter das jüdische Gesetz kam. Eine Allegorie würde den Gedanken zerstören.

**Konsistenz:** Röm 1,3 und Phil 2,7 verwenden ebenfalls ginomai für das Menschwerden Christi. Carrier muss also mehrere Stellen gleichzeitig umdeuten.`,
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '4,24', quote: `Die Worte bedeuten etwas. Denn das sind die zwei Testamente …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Hier – nicht in 4,4 – beginnt die ausdrücklich markierte Allegorie.' },
                { kind: 'bibel', work: 'Hiob', ref: '14,1', quote: `Der Mensch, vom Weibe geboren, lebt kurze Zeit und ist voll Unruhe,`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'himmlische-samenbank',
                  objection: `Auch Röm 1,3 („aus dem Samen Davids") spricht nicht gegen mich: Gott konnte Davids Samen aufbewahren und daraus im Himmel einen Leib für Christus formen. Das ist in der damaligen Vorstellungswelt durchaus denkbar.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Dafür gibt es keinen einzigen antiken jüdischen oder christlichen Beleg – es ist eine Hilfshypothese, die nur erfunden wird, um einen klaren Text wegzuerklären. Paulus sagt „nach dem Fleisch" (kata sarka) – denselben Ausdruck verwendet er in Röm 9,3–5 für die leibliche Abstammung der Israeliten. Wenn eine Theorie für jeden Text eine eigene, unbelegte Zusatzannahme braucht, ist das das Gegenteil von Wahrscheinlichkeit.`,
                  detail: `**Bayesianisch gesprochen:** Jede Hilfshypothese senkt die Vorab-Wahrscheinlichkeit der Gesamttheorie. Carriers Modell braucht u. a.: kosmische Kreuzigung, allegorische Geburt, kultischen „Bruder", kosmischen Davidssamen, dämonische „Herrscher". Jede dieser Annahmen ist für sich unbelegt; ihre Kombination ist extrem unwahrscheinlich. Die historische Erklärung braucht keine einzige davon.

**Ockhams Rasiermesser:** Die einfachste Erklärung für „geboren von einer Frau", „aus dem Samen Davids nach dem Fleisch" und „Bruder des Herrn" ist, dass Paulus von einem Menschen spricht.`,
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '9,3–5', quote: `… meine Gefreundeten nach dem Fleisch, die da sind von Israel … aus welchen Christus herkommt nach dem Fleisch …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Kannst du einen einzigen antiken Text nennen, der von einem im Himmel aufbewahrten Davidssamen spricht?`,
                    `Wie viele Zusatzannahmen braucht deine Theorie – und wie viele die historische?`,
                  ],
                },
              ],
            },
            {
              id: 'herrscher-dieser-welt-daemonen',
              objection: `In 1 Kor 2,8 kreuzigen „die Herrscher dieser Welt" (archontes) den Herrn der Herrlichkeit – das sind dämonische Mächte. Und die „Himmelfahrt Jesajas" zeigt genau dieses Modell: Christus steigt durch die Himmel hinab und wird im Firmament von Dämonen gekreuzigt.`,
              objectionBy: 'Richard Carrier',
              answer: `Paulus verwendet archontes in Röm 13,3 eindeutig für menschliche Obrigkeiten, und Apg 4,26–27 deutet genau so: Herodes und Pilatus. Selbst wenn Paulus hinter den Menschen auch geistliche Mächte sieht, schließt das menschliche Täter nicht aus – 1 Thess 2,15 nennt sie ausdrücklich. Die „Himmelfahrt Jesajas" ist eine christliche Schrift vom Ende des 1. oder aus dem 2. Jahrhundert, in mehreren Schichten überliefert; die erhaltenen Fassungen enthalten eine irdische Geburt und Kreuzigung. Carrier erklärt diese Stellen für spätere Zusätze – das ist ein Zirkelschluss.`,
              detail: `**Zur Himmelfahrt Jesajas:** Sie ist in äthiopischer Gesamtüberlieferung sowie in lateinischen, slawischen und griechischen Teilen erhalten; ihre Datierung und Schichtung ist umstritten. Kapitel 11 schildert in der äthiopischen Fassung Geburt durch Maria, Leben in Nazareth und Kreuzigung. Wer eine Theorie auf einen späten, mehrschichtigen Text stützt und die störenden Stellen streicht, hat nichts bewiesen.

**Theologischer Punkt:** Dass Paulus hinter den irdischen Mächten auch geistliche Mächte am Werk sieht (vgl. Kol 2,15; Eph 6,12), ist klassisch jüdisch-apokalyptisch – es ist eine Deutung realer Ereignisse, keine Ersetzung.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '13,3', quote: `Denn die Gewaltigen (archontes) sind nicht den guten Werken, sondern den bösen zu fürchten.`, translation: 'Luther 1912', status: 'paraphrase' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,26–27', quote: `Die Könige der Erde treten zusammen, und die Fürsten versammeln sich … wider deinen heiligen Knecht Jesus … Herodes und Pontius Pilatus mit den Heiden …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn die Kreuzigung im Himmel stattfand – warum nennt Paulus sie ein „Ärgernis" für Juden (1 Kor 1,23)? Ein kosmisches Drama wäre kein öffentlicher Skandal.`,
              ],
            },
          ],
        },
        {
          id: 'josephus-tacitus-zu-spaet',
          objection: `Josephus schreibt um 93, Tacitus um 116. Beide geben nur wieder, was Christen damals erzählten. Das ist kein unabhängiger Beleg für die Existenz Jesu, sondern Hörensagen.`,
          objectionBy: 'Robert M. Price',
          answer: `Selbst wenn beide nur gehört hätten, was Christen sagten, zeigt das: Weder der jüdische Historiker noch der römische Senator hatten Anlass, an einer realen Person zu zweifeln – Josephus kannte die Jerusalemer Verhältnisse und berichtet vom Tod Jakobus', des Bruders Jesu, im Jahr 62 als Zeitzeuge. Vor allem aber: **Keine** antike Gegenstimme – weder jüdische Polemik noch heidnische Kritiker wie Kelsos – hat je behauptet, Jesus habe nicht existiert. Sie sagten, er sei ein Zauberer oder Verführer gewesen.`,
          detail: `Details zu den Quellen und ihrer Echtheit im Claim „Die außerbiblischen Quellen sind Fälschungen". Hier entscheidend: Josephus (geb. 37/38) lebte in Jerusalem, als Jakobus 62 gesteinigt wurde. Er identifiziert ihn als „Bruder Jesu, des sogenannten Christus" – für einen Zeitgenossen der Jerusalemer Gemeinde eine ganz natürliche Angabe.`,
          followUps: [
            {
              id: 'juedische-polemik-schweigen',
              objection: `Das ist ein Argument aus dem Schweigen – genau das, was du mir vorwirfst! Vielleicht hat einfach niemand daran gedacht, die Existenz zu bestreiten.`,
              objectionBy: 'Richard Carrier',
              answer: `Nein, es ist kein bloßes Schweigen. Wir haben **ausführliche positive Texte** von Gegnern, die sich detailliert mit Jesus auseinandersetzen – Kelsos bei Origenes, die rabbinische Polemik, später die Toledot Jeschu – und die dabei jede denkbare Schwachstelle angreifen: Herkunft, Wunder, Tod, Auferstehung. Sie alle setzen Jesus als realen Menschen voraus. Das ist das Zeugnis feindlicher Zeugen, eine der stärksten Beweisformen in der Geschichtswissenschaft.`,
              detail: `**Beispiele:**
- Kelsos (ca. 170–180): Jesus unehelich, in Ägypten Magie gelernt (Contra Celsum I,28.32).
- Babylonischer Talmud, Sanhedrin 43a (Baraita, Datierung umstritten): „Am Vorabend des Pessach hängte man Jeschu" – wegen Zauberei und Verführung Israels. Die Identifikation mit Jesus von Nazareth ist in der Forschung verbreitet, aber nicht unumstritten (Peter Schäfer, „Jesus im Talmud", 2007).
- Mt 28,13–15 bezeugt eine jüdische Gegenerzählung („Die Jünger haben den Leichnam gestohlen") – auch sie setzt einen realen Leichnam voraus.`,
              sources: [
                { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '43a', quote: `Am Vorabend des Pessach hängte man Jeschu … weil er Zauberei getrieben und Israel verführt habe.`, status: 'paraphrase', note: 'Datierung und Bezug auf Jesus von Nazareth in der Forschung diskutiert (vgl. P. Schäfer, Jesus im Talmud, 2007).' },
                { kind: 'fachliteratur', author: 'Peter Schäfer', work: 'Jesus im Talmud', year: '2007', quote: `Die Talmudstellen sind als polemische Gegenerzählung zu den Evangelien zu lesen.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'tryphon-erfindet-christus',
                  objection: `Bei Justin sagt der Jude Tryphon ausdrücklich: „Ihr erfindet euch einen Christus" (Dialog 8). Da hast du deinen antiken Leugner.`,
                  objectionBy: 'Mythizistische Internetliteratur',
                  answer: `Lies den Satz im Zusammenhang: Tryphon sagt, der Messias – falls er schon geboren sei – bleibe unbekannt, bis Elia ihn salbe; die Christen hätten einem leeren Gerücht geglaubt und sich daher einen Messias „gemacht". Er bestreitet also, dass **Jesus der Messias** ist, nicht, dass Jesus gelebt hat. Im weiteren Dialog diskutiert Tryphon ausführlich über Jesu Kreuzigung als Fluch (Dial. 32; 89–90) – was eine reale Kreuzigung voraussetzt.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '8,4; 89–90', year: 'ca. 155–160', quote: `Tryphon: Der Christus, wenn er geboren ist und irgendwo lebt, ist unbekannt …; ihr aber habt ein leeres Gerücht angenommen und euch einen Christus gebildet.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum diskutiert Tryphon dann seitenlang darüber, ob ein Gekreuzigter verflucht sei, wenn es den Gekreuzigten nie gab?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bruder-des-herrn-kultisch',
      objection: `Gal 1,19 beweist nichts. „Bruder des Herrn" ist ein Kulttitel – alle getauften Christen waren „Brüder" des Herrn (vgl. Röm 8,29). Jakobus war einfach ein Mitglied einer Bruderschaft, wie es sie in Jerusalem gab.`,
      objectionBy: 'Richard Carrier / Robert M. Price',
      answer: `Paulus nennt Christen ständig „Brüder" – aber nie „Brüder des Herrn". Er verwendet den Ausdruck gerade, um Jakobus von Kephas zu **unterscheiden**, der ja auch Christ war. In 1 Kor 9,5 trennt er „die Brüder des Herrn" ausdrücklich von „den übrigen Aposteln" und Kephas. Und zwei unabhängige Quellen – Mk 6,3 und Josephus (Ant. 20,200) – nennen einen Jakobus als Bruder Jesu.`,
      detail: `**Die Logik von Gal 1,18–19:** Paulus will betonen, wie wenige Jerusalemer er traf: nur Kephas und – „von den anderen Aposteln sah ich keinen außer Jakobus, den Bruder des Herrn". Wäre „Bruder des Herrn" ein Allerweltstitel für jeden Christen, würde er Jakobus gar nicht identifizieren.

**Röm 8,29** („Erstgeborener unter vielen Brüdern") ist eine theologische Aussage über die Erlösten; sie verwendet nicht die Formel „Bruder des Herrn" als Unterscheidungsmerkmal einer Gruppe.

**Spätere Tradition:** Hegesippus (2. Jh., bei Eusebius KG II,23) kennt Jakobus „den Bruder des Herrn" als Führer der Jerusalemer Gemeinde. Die koptische Kirche ehrt ihn als „Jakobus, den Bruder des Herrn" – nach orthodoxer Tradition ein naher Verwandter (Sohn Josefs aus erster Ehe bzw. Vetter), da Maria immerwährende Jungfrau ist. Für das historische Argument genügt: eine **familiäre** Beziehung zu einem realen Menschen.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '6,3', quote: `Ist er nicht der Zimmermann, Marias Sohn, und der Bruder des Jakobus und Joses und Judas und Simon?`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,23,4', year: 'ca. 325', quote: `Hegesippus berichtet, Jakobus, der Bruder des Herrn, habe zusammen mit den Aposteln die Leitung der Kirche übernommen.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn jeder Christ „Bruder des Herrn" war – warum nennt Paulus dann nicht auch Kephas so?`,
        `Wie erklärst du, dass drei voneinander unabhängige Quellen denselben Jakobus als Bruder Jesu kennen?`,
      ],
      followUps: [
        {
          id: 'josephus-20-200-interpoliert',
          objection: `Auch Josephus' Jakobus-Stelle ist bearbeitet. Ursprünglich ging es um den Bruder eines anderen Jesus – Jesus, Sohn des Damnaios, der kurz darauf Hohepriester wird. Ein christlicher Schreiber hat „des sogenannten Christus" eingefügt.`,
          objectionBy: 'Richard Carrier',
          answer: `Dafür gibt es keinerlei Handschriftenbeleg. Origenes kannte die Formulierung „Bruder Jesu, des sogenannten Christus" schon um 250 und betont zugleich, Josephus habe nicht an Jesus als Christus geglaubt – genau das zeigt der zurückhaltende Ausdruck „sogenannt", den kein christlicher Fälscher wählen würde. Und Jesus, Sohn des Damnaios, wird erst in Ant. 20,203 als neue Person eingeführt – Josephus kann Jakobus nicht über einen Mann identifizieren, den er dem Leser erst drei Abschnitte später vorstellt.`,
          detail: `**Stil:** „Ho legomenos Christos" („der sogenannte Christus") ist distanziert; Christen schrieben „Jesus Christus" oder „der Herr". Zudem setzt der Satz voraus, dass der Leser von diesem Jesus schon gehört hat – ein Hinweis darauf, dass Josephus ihn bereits zuvor erwähnt hatte (vgl. den Kern von Ant. 18,63).

**Forschungsstand:** Die Echtheit von Ant. 20,200 wird von der überwältigenden Mehrheit der Fachleute (auch jüdischen und säkularen) angenommen; Louis Feldman, einer der führenden Josephus-Forscher, hielt sie für authentisch.`,
          sources: [
            { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,47', year: 'ca. 248', quote: `Josephus, obwohl er nicht glaubte, dass Jesus der Christus sei, … nennt Jakobus den Bruder Jesu, des sogenannten Christus.`, status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: '10,17', year: 'ca. 245', quote: `Erwähnung der Josephus-Notiz über Jakobus, den Bruder Jesu, des sogenannten Christus.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'origenes-zitiert-falsch',
              objection: `Origenes zitiert Josephus mit der Behauptung, Jerusalem sei wegen des Mordes an Jakobus zerstört worden – das steht in keiner Josephus-Handschrift. Also lag Origenes ein bereits christlich verfälschter Text vor!`,
              objectionBy: 'Richard Carrier',
              answer: `Viel wahrscheinlicher ist, dass Origenes aus dem Gedächtnis die Darstellung des Hegesippus (bei Eusebius KG II,23) mit Josephus vermischte – ein bekannter Gedächtnisfehler, der die eigentliche Notiz nicht berührt. Entscheidend ist: Origenes kennt die Wendung „Bruder Jesu, des sogenannten Christus" und weiß, dass Josephus kein Christ war. Ein Fälscher, der Josephus christianisieren will, hätte nicht ausgerechnet die distanzierte Formulierung gewählt.`,
              questionsBack: [
                `Wenn der Text verfälscht wurde, um Jesus aufzuwerten – warum ist dann gerade dieser Satz so nüchtern und distanziert?`,
              ],
            },
          ],
        },
        {
          id: 'adelphoi-allgemein',
          objection: `Paulus nennt doch sogar die fünfhundert, denen der Auferstandene erschien, „Brüder". „Bruder" war die normale Bezeichnung für Christen. Warum soll es bei Jakobus anders sein?`,
          objectionBy: 'Robert M. Price',
          answer: `Genau deshalb: Weil alle Christen „Brüder" heißen, braucht Paulus für Jakobus eine **zusätzliche** Kennzeichnung – „der Bruder des Herrn". Der Genitiv „des Herrn" ist die Unterscheidung. Die 500 nennt er nie „Brüder des Herrn", sondern einfach „Brüder". Sprachlich und logisch ist die leibliche bzw. familiäre Bedeutung die einzige, die Paulus' Satz Sinn gibt.`,
        },
      ],
    },
    {
      id: 'bayes-carrier-wahrscheinlichkeit',
      objection: `Ich habe das Bayes-Theorem auf die Frage angewendet. Jesus gehört zur Klasse der Rank-Raglan-Helden – Figuren wie Romulus, Moses, Dionysos –, von denen fast keiner historisch ist. Selbst wenn ich alle Belege maximal zugunsten der Historizität werte, komme ich höchstens auf eine Wahrscheinlichkeit von etwa 1 zu 3.`,
      objectionBy: 'Richard Carrier',
      answer: `Bayes ist nur so gut wie die Eingaben – und Carriers entscheidende Eingabe, die Referenzklasse, ist willkürlich. Er ordnet Jesus nach Merkmalen ein, die vor allem aus späteren Kindheitserzählungen stammen; die ältesten Quellen (Paulus, Markus) bieten fast keines davon. Ordnet man Jesus dagegen in die Klasse „jüdische Messiasprätendenten und Propheten des 1. Jahrhunderts" ein, die alle historisch waren, kehrt sich das Ergebnis um. Deshalb hat Carriers Rechnung unter Fachhistorikern so gut wie niemanden überzeugt.`,
      detail: `**Das Problem der Vorabwahrscheinlichkeit (prior):** Bayes' Theorem verlangt eine Ausgangswahrscheinlichkeit. Wer sie über eine selbstgewählte Heldenkategorie festlegt, bestimmt das Ergebnis weitgehend vorab.

**Alternative Referenzklassen:** Judas der Galiläer, Theudas, der „Ägypter", Johannes der Täufer, Simon bar Giora, Bar Kochba – jüdische Gestalten mit Anhängerschaft, über die Josephus oder andere Quellen berichten. Sie sind alle historisch. Jesus wird in den ältesten Quellen genau so beschrieben: als jüdischer Lehrer und Prophet mit Jüngerkreis, der in Jerusalem hingerichtet wurde.

**Ehrlich:** Bayes-Methoden sind in der Geschichtswissenschaft ein legitimes Werkzeug (auch christliche Philosophen wie Swinburne oder die McGrews nutzen sie). Das Problem ist nicht die Mathematik, sondern die subjektiven Zahlen.`,
      sources: [
        { kind: 'gegner', author: 'Richard Carrier', work: 'On the Historicity of Jesus', year: '2014', quote: `Carrier ordnet Jesus der Klasse der Rank-Raglan-Helden zu und leitet daraus eine niedrige Vorabwahrscheinlichkeit der Historizität ab.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Warum ist „mythischer Held" die richtige Referenzklasse und nicht „jüdischer Prophet des 1. Jahrhunderts"?`,
        `Wie viele der Rank-Raglan-Merkmale findest du bei Paulus und Markus, unseren ältesten Quellen?`,
      ],
      followUps: [
        {
          id: 'rank-raglan-klasse',
          objection: `Jesus erfüllt nach meiner Zählung rund 20 der 22 Rank-Raglan-Merkmale: königliche Abstammung, Jungfrauengeburt, Mordversuch bei der Geburt, Flucht in ein fernes Land, Tod auf einem Hügel, kein Grab … Solche Figuren sind praktisch nie historisch.`,
          objectionBy: 'Richard Carrier',
          answer: `Viele dieser Merkmale sind so dehnbar, dass auch historische Gestalten bei großzügiger Zählung hohe Werte erreichen – Kritiker haben das an Herrschern und Religionsstiftern vorgeführt. Vor allem aber zählt Carrier Material aus Matthäus und Lukas; nimmt man nur die ältesten Quellen, bleibt wenig übrig. Und „kein Grab" ist gerade ein Punkt, den die Quellen anders erzählen: Es gab ein Grab – es war leer. Die Kategorie entscheidet hier das Ergebnis, nicht die Belege.`,
          detail: `**Methodisch:** Die Rank-Raglan-Liste (Lord Raglan, 1936) wurde für Volkssagen entwickelt, nicht als historisches Prüfwerkzeug. Sie sagt etwas über Erzählmuster, nicht über Existenz. Dass über eine reale Person später heroisierend erzählt wird, ist häufig (Alexander, Augustus) – das macht sie nicht unhistorisch.`,
          followUps: [
            {
              id: 'konsens-ist-autoritaetsargument',
              objection: `Dein ganzes Argument ist „Alle Experten sagen es". Das ist ein Autoritätsargument. Die Bibelwissenschaft ist voller gläubiger Christen an theologischen Fakultäten – natürlich halten die an Jesus fest.`,
              objectionBy: 'Richard Carrier / Robert M. Price',
              answer: `Der Konsens umfasst gerade auch Juden, Agnostiker und Atheisten: Bart Ehrman, Maurice Casey, Gerd Lüdemann, Geza Vermes, Paula Fredriksen, John Dominic Crossan – Leute, die die Gottheit und Auferstehung Jesu ablehnen, aber seine Existenz für gesichert halten. Ich verwende den Konsens nicht als Beweis, sondern als Hinweis: Wenn Fachleute mit ganz unterschiedlichen Weltanschauungen dieselben Quellen prüfen und zum gleichen Ergebnis kommen, liegt das an den Quellen. Die Gründe habe ich dir genannt – Gal 1,19, Josephus, Tacitus, feindliche Zeugen.`,
              sources: [
                { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Die Auferstehung Jesu. Historie, Erfahrung, Theologie', year: '1994', quote: `Lüdemann, der die Auferstehung als Vision deutet und sich vom Christentum lossagte, setzt die Existenz und Kreuzigung Jesu als historische Gegebenheit voraus.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'neue-paradigmen',
                  objection: `Auch Galilei stand allein gegen den Konsens. Neue Paradigmen werden immer erst bekämpft.`,
                  objectionBy: 'Richard Carrier (sinngemäß, verbreitet)',
                  answer: `Galilei hatte neue Daten – Fernrohrbeobachtungen. Der Mythizismus hat keine neuen Quellen, sondern deutet die bekannten um. Und er ist nicht neu: Volney und Dupuis vertraten ihn schon in den 1790ern, Bruno Bauer im 19. Jahrhundert, Arthur Drews 1909. Er wurde über 200 Jahre geprüft und von Historikern aller Richtungen verworfen. Eine Minderheitsmeinung ist nicht deshalb richtig, weil sie eine Minderheitsmeinung ist.`,
                  questionsBack: [
                    `Welche neue Quelle oder welchen neuen Fund hat der Mythizismus seit Drews (1909) vorzuweisen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evangelien-literarische-fiktion',
      objection: `Die Evangelien sind literarische Konstrukte. Markus schreibt die Elia-Elisa-Erzählungen neu, Dennis MacDonald hat sogar Homer-Vorlagen gezeigt. Jede Szene hat ein Vorbild im Alten Testament – das ist Midrasch, keine Geschichte.`,
      objectionBy: 'Robert M. Price',
      answer: `Dass die Evangelisten Jesus mit alttestamentlichen Mustern deuten, ist unbestritten – aber Deutung ist nicht Erfindung. Auch Josephus und Philo schildern reale Personen typologisch. Gleichzeitig enthält Markus vieles, das zu keinem Vorbild passt: aramäische Worte (Talitha kum, Effata), Ortsnamen, Peinliches wie Jesu Familie, die ihn für verrückt hält (Mk 3,21), oder sein Unwissen über die Stunde (Mk 13,32). MacDonalds Homer-These wird selbst von kritischen Forschern weithin abgelehnt.`,
      detail: `**Beispiel für Typologie bei realen Personen:** Moderne Biografen vergleichen Lincoln mit Moses oder Gandhi mit Christus – niemand schließt daraus, Lincoln habe nicht existiert.

**Peinlichkeiten:** Taufe durch Johannes (scheinbare Unterordnung), Verrat durch einen der Zwölf, Verleugnung durch Petrus, Kreuzigung als Verfluchter (Dtn 21,23). Eine Erfindung aus dem AT hätte diese Belastungen nicht geschaffen.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '3,21', quote: `Und da es hörten, die um ihn waren, gingen sie hinaus und wollten ihn halten; denn sie sprachen: Er wird von Sinnen kommen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'gegner', author: 'Dennis R. MacDonald', work: 'The Homeric Epics and the Gospel of Mark', year: '2000', quote: `MacDonald deutet Markus als bewusste Nachahmung homerischer Epen.`, status: 'paraphrase', note: 'In der Fachwelt überwiegend abgelehnt.' },
      ],
      followUps: [
        {
          id: 'kriterien-wertlos',
          objection: `Eure Echtheitskriterien – Peinlichkeit, Mehrfachbezeugung, Unähnlichkeit – gelten heute selbst unter Fachleuten als gescheitert. Lies Keith und Le Donne, „Jesus, Criteria, and the Demise of Authenticity" (2012).`,
          objectionBy: 'Richard Carrier',
          answer: `Richtig, die Kriterien werden kritisch diskutiert. Aber keiner der Autoren dieses Bandes folgert daraus, Jesus habe nicht existiert – sie schlagen stattdessen einen Gedächtnis-Ansatz vor, der nach den **Gesamteindrücken** fragt, die Jesus hinterließ. Und die sind robust: ein jüdischer Lehrer und Heiler mit Jüngern, der vom Reich Gottes sprach und unter Pilatus gekreuzigt wurde. Die Kritik an Kriterien trifft Detailfragen, nicht die Existenz.`,
          sources: [
            { kind: 'fachliteratur', author: 'Chris Keith / Anthony Le Donne (Hg.)', work: 'Jesus, Criteria, and the Demise of Authenticity', year: '2012', quote: `Kritik an den klassischen Echtheitskriterien und Plädoyer für einen erinnerungsgeschichtlichen Zugang.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'gekreuzigter-messias-erfindbar',
              objection: `Gerade ein gekreuzigter Messias passt doch perfekt in die antike Mythologie sterbender und auferstehender Götter – Osiris, Attis, Adonis. Die Christen haben einfach dieses Muster übernommen.`,
              objectionBy: 'Robert M. Price / Richard Carrier',
              answer: `Die Kategorie „sterbende und auferstehende Götter" gilt in der Religionswissenschaft seit Jonathan Z. Smith (1987) als weitgehend künstliches Konstrukt; die angeblichen Parallelen sind jahreszeitliche Vegetationsmythen ohne Datierung, ohne Zeugen und ohne leibliche Auferstehung. Die Kreuzigung dagegen war die schändlichste römische Strafe; für Juden bedeutete sie Fluch (Dtn 21,23). Paulus nennt sie selbst ein „Ärgernis" – niemand erfindet eine Botschaft, die man ihm sofort vorwirft.`,
              sources: [
                { kind: 'fachliteratur', author: 'Jonathan Z. Smith', work: `Dying and Rising Gods. In: M. Eliade (Hg.), The Encyclopedia of Religion`, year: '1987', quote: `Die Kategorie der „sterbenden und auferstehenden Götter" ist ein Konstrukt moderner Forscher und hält den Quellen nicht stand.`, status: 'paraphrase' },
                { kind: 'bibel', work: '1. Korinther', ref: '1,23', quote: `wir aber predigen den gekreuzigten Christus, den Juden ein Ärgernis und den Griechen eine Torheit;`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche antike Person aus der galiläischen Unterschicht ist besser bezeugt als Jesus?`,
    `Wie erklärst du, dass Paulus den Bruder einer Person persönlich traf, die nie existiert hat?`,
    `Warum hat kein einziger antiker Gegner – Jude oder Heide – die Existenz Jesu bestritten?`,
    `Welche Fachzeitschrift für Alte Geschichte hat die mythizistische These übernommen?`,
    `Wenn Jesus ein Mythos war: Wer genau hat ihn wann und wo „historisiert" – und warum ausgerechnet mit einer Kreuzigung unter einem bekannten Präfekten?`,
  ],
  avoid: [
    `„Die Archäologie beweist Jesus" – Pilatus-Inschrift und Kajaphas-Ossuar bestätigen das Umfeld, nicht Jesus selbst. Das „Jakobus-Ossuar" (2002) ist in seiner Echtheit umstritten; nicht verwenden.`,
    `Das Turiner Grabtuch als Existenzbeweis – völlig unnötig und angreifbar.`,
    `Übertreibungen wie „Jesus ist besser bezeugt als Julius Cäsar" – Cäsar hat Münzen, Inschriften und eigene Schriften. Sag lieber: „für einen Menschen seines Standes außergewöhnlich gut bezeugt".`,
    `Den Mythizisten persönlich angreifen oder als „verrückt" abtun – sachlich bleiben, die Argumente sind schnell entkräftet.`,
  ],
  concessions: [
    `Es gibt keine erhaltenen Dokumente aus Jesu Lebenszeit selbst; die frühesten Texte (Paulus) stammen aus den 40er/50er Jahren.`,
    `Die Evangelisten deuten Jesus bewusst mit alttestamentlichen Mustern – sie sind theologische Geschichtsschreibung, keine neutrale Chronik.`,
    `Die Bayes-Methode an sich ist ein legitimes Werkzeug; Carriers Fehler liegen in der Wahl der Ausgangswerte, nicht in der Mathematik.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', status: 'paraphrase', note: 'Von einem Agnostiker – ideal für skeptische Gesprächspartner.' },
    { kind: 'gegner', author: 'Maurice Casey', work: 'Jesus: Evidence and Argument or Mythicist Myths?', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert E. Van Voorst', work: 'Jesus Outside the New Testament: An Introduction to the Ancient Evidence', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James K. Beilby / Paul R. Eddy (Hg.)', work: 'The Historical Jesus: Five Views', year: '2009', status: 'paraphrase', note: 'Mit Beitrag von Robert M. Price und Erwiderungen.' },
  ],
  difficulty: 2,
  tags: ['Mythizismus', 'Paulus', 'Jakobus', 'Josephus', 'Bayes', 'Carrier'],
  related: [
    'historischer-jesus/ausserbiblische-quellen-gefaelscht',
    'antike-parallelen/jesus-kopie-horus-mithras',
    'antike-parallelen/sterbende-auferstehende-goetter',
    'neues-testament/paulus-erfand-christentum',
    'neues-testament/evangelien-spaet-anonym',
  ],
};

export default claim;
