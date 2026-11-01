import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kanaaniter-voelkermord',
  title: `„Gott befahl Völkermord an den Kanaanitern."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 7' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler, Iowa State University', work: 'Fighting Words: The Origins of Religious Violence (2005)' },
    { name: 'Wes Morriston', role: 'Religionsphilosoph, University of Colorado', work: '„Did God Command Genocide? A Challenge to the Biblical Inerrantist", Philosophia Christi 11 (2009)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
  ],
  steelman: `Das Deuteronomium befiehlt ausdrücklich: „Aber in den Städten dieser Völker … sollst du nichts leben lassen, was Odem hat" (Dtn 20,16), und das Buch Josua berichtet stolz, Israel habe in Jericho „alles, was in der Stadt war, Mann und Weib, jung und alt, Ochsen, Schafe und Esel" mit der Schärfe des Schwertes vernichtet (Jos 6,21). In 1 Sam 15,3 werden sogar Säuglinge der Amalekiter genannt. Nach heutigem Völkerrecht ist die gezielte Vernichtung einer Volksgruppe „ganz oder teilweise" Völkermord. Wenn ein Mensch heute sagte, Gott habe ihm befohlen, ein Dorf samt Kindern auszulöschen, würden wir ihn als gefährlichen Fanatiker einsperren. Entweder hat Gott das wirklich befohlen – dann ist er nicht gut –, oder die Bibel lügt, wenn sie es behauptet – dann ist sie nicht Gottes Wort. Alle Ausflüchte („Hyperbel", „Allegorie", „die waren böse") sind nachträgliche Rationalisierungen von Gläubigen, die nicht zugeben wollen, dass ihr heiliges Buch eine Gewaltfantasie heiligt.`,
  biblical: {
    summary: `Die Texte sind ernst zu nehmen – aber genau zu lesen. Erstens ist der Hauptbefehl **„vertreiben"**, nicht „ausrotten" (Ex 23,28–30; Num 33,52; Dtn 9,3): Es ging um die Beseitigung eines kultisch-politischen Systems aus dem Land, nicht um die Tötung jedes Einzelnen, wo immer er war. Zweitens gebrauchen die Berichte die im Alten Orient übliche **Totalitätsrhetorik**: Jos 10,40 und 11,23 melden die Eroberung „des ganzen Landes", während Jos 13,1; 15,63 und Ri 1 nüchtern festhalten, dass die Kanaaniter weiterhin dort lebten. Dtn 7,2–3 verbietet im selben Atemzug, sich mit ihnen zu verschwägern – was Überlebende voraussetzt. Drittens ist der Grund **moralisch, nicht ethnisch**: Das Gericht kommt erst, als „die Missetat der Amoriter voll" ist (Gen 15,16), ausdrücklich wegen Praktiken wie Kinderopfern (Lev 18,21.24–28; Dtn 12,31), und Israel wird dieselbe Strafe angedroht (Lev 18,28; Dtn 8,19–20). Die Kanaaniterin Rahab wird gerettet und steht im Stammbaum Jesu (Jos 6,25; Mt 1,5).`,
    detail: `**Die Wortwahl.** Das hebräische *ḥerem* („Bann", „Weihe") bezeichnet die vollständige Aussonderung von etwas für Gott, die jede eigene Nutzung (Beute, Bündnis, Heirat) ausschließt. Die Verben *gāraš* („vertreiben") und *yāraš* („in Besitz nehmen, enteignen") dominieren die Landnahmetexte. Ex 23,29–30 erwartet sogar ausdrücklich ein *allmähliches* Vertreiben, „bis du wächst", damit das Land nicht verödet – ein Bild der Verdrängung, nicht des Massakers.

**Die Spannung innerhalb der Bücher selbst.** Jos 11,21–22 berichtet, Josua habe die Enakiter „ausgerottet", nur in Gaza, Gat und Aschdod seien welche übrig geblieben; Jos 15,13–14 und Ri 1,10.20 erzählen, dass Kaleb sie später erst vertreiben musste. Ri 1,21.27–36 listet Stadt um Stadt, in der die Kanaaniter „wohnen blieben". Die Verfasser kannten diese Spannungen und ließen sie stehen – ein starker Hinweis, dass „alle", „nichts, was Odem hat" stereotype Siegesformeln waren, kein statistisches Protokoll.

**Die Begründung.** Gen 15,16 („die Missetat der Amoriter ist noch nicht voll") zeigt einen Gott, der über 400 Jahre wartet. Dtn 9,4–5 verbietet Israel jeden Hochmut: nicht wegen *eurer* Gerechtigkeit, sondern wegen der Gottlosigkeit dieser Völker. Lev 18,24–28 stellt Israel unter dieselbe Drohung – und die Exile von 722 und 587 v. Chr. zeigen, dass dies ernst gemeint war.

**Ausnahmen, die das „Rassen"-Motiv widerlegen:** Rahab und ihre Familie (Jos 2; 6,25), die Gibeoniter (Jos 9), Uria der Hethiter als einer von Davids Helden (2 Sam 23,39), die Moabiterin Rut. Umgekehrt wird der Israelit Achan samt seinem Besitz unter den Bann gestellt (Jos 7). Der Maßstab ist das Verhältnis zu Gott, nicht die Abstammung.

**Die Einmaligkeit.** Der Befehl ist auf eine bestimmte Zeit, ein bestimmtes Land und bestimmte Völker begrenzt (Dtn 20,15–17 unterscheidet ausdrücklich davon die Kriegsführung gegenüber fernen Städten). Er ist kein allgemeines Kriegsrecht und kein Auftrag an spätere Generationen – erst recht nicht an die Kirche, deren König sagt: „Mein Reich ist nicht von dieser Welt" (Joh 18,36).`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '15,16', quote: `Sie aber sollen nach vier Mannsaltern wieder hierher kommen; denn die Missetat der Amoriter ist noch nicht voll.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '23,28–30', quote: `Gott will Hornissen vor Israel hersenden, die die Völker vertreiben – nicht in einem Jahr, damit das Land nicht wüst werde, sondern „nach und nach", bis Israel wächst.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '7,2–3', quote: `Du sollst sie verbannen … und sollst dich mit ihnen nicht befreunden: eure Töchter sollt ihr nicht geben ihren Söhnen.`, translation: 'nach Luther 1912', status: 'paraphrase', note: 'Das Heiratsverbot setzt voraus, dass Kanaaniter weiterhin im Land leben.' },
      { kind: 'bibel', work: 'Levitikus', ref: '18,24–28', quote: `Wegen dieser Gräuel wird das Land seine Bewohner „ausspeien" – und es wird auch Israel ausspeien, wenn es dasselbe tut.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '9,4–5', quote: `Nicht um deiner Gerechtigkeit willen nimmst du das Land ein, sondern wegen der Gottlosigkeit dieser Völker.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Richter', ref: '1,21.27–36', quote: `Liste der Städte, in denen „die Kanaaniter wohnen blieben".`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Josua', ref: '6,25', quote: `Rahab aber, die Hure, samt dem Hause ihres Vaters und alles, was sie hatte, ließ Josua leben.`, translation: 'nach Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Landnahmetexte nie als Auftrag zu „heiligem Krieg" gelesen. In der **alexandrinischen Tradition** – Origenes, später Gregor von Nyssa und die koptischen Ausleger – steht neben dem geschichtlichen Sinn der **geistliche**: Josua (griechisch *Iēsous*) ist ein Bild Jesu, der das „Land" der Seele von den „Kanaanitern" der Leidenschaften befreit (vgl. Eph 6,12). Die Kirche verwarf zugleich **Markion**, der den Gott des Alten Testaments vom Vater Jesu Christi trennen wollte. Sie hält also fest: derselbe Gott, eine Schrift – aber gelesen durch Christus.`,
    detail: `Origenes schreibt in seinen Homilien zum Buch Josua sinngemäß, die Apostel hätten den Jüngern Christi diese Kriegsbücher nicht zum Lesen in den Gemeinden übergeben, wenn die leiblichen Kriege nicht Bild der geistlichen Kriege wären (Hom. in Jos. 15,1). Gleichzeitig betont er gegen Kelsos, dass Christen unter dem neuen Bund niemanden töten und nicht zu den Waffen gegen ihre Feinde greifen, weil das Gesetz Israels als staatliche Verfassung eines Volkes gegeben war, das Evangelium aber nicht (Contra Celsum VII,26).

Gregor von Nyssa geht in seiner *Vita Moysis* noch weiter: Wie könne es Gottes würdig sein, dass für das Unrecht des Pharao dessen neugeborenes Kind bestraft wird? Darum müsse man in der Tötung der Erstgeburt einen geistlichen Sinn suchen – die Vernichtung der ersten Anfänge des Bösen (Vita Moysis II,91–92).

Für die koptische Kirche ergibt sich daraus: Die Texte sind inspiriert und geschichtlich ernst zu nehmen, aber kein Christ kann sich auf sie berufen, um Gewalt auszuüben. Die koptische Kirche hat in 1.400 Jahren unter wechselnden Herrschaften ihre Identität im Martyrium, nicht im Schwert gefunden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Josua', ref: '15,1', year: 'um 240', quote: `Wenn die leiblichen Kriege nicht ein Bild der geistlichen Kriege wären, hätten die Apostel diese Bücher der jüdischen Geschichte den Jüngern Christi wohl nie zum Lesen in den Gemeinden übergeben.`, status: 'paraphrase', note: 'Origenes ist kein Lehrer der Kirche im dogmatischen Sinn, wird aber für die alexandrinische Auslegungsmethode zitiert.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'VII,26', year: 'um 248', quote: `Christen töten ihre Feinde nicht; das Gesetz des Mose war die Verfassung eines Volkes, das Evangelium ist es nicht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,91–92', year: 'um 390', quote: `Wie würde ein Gottes würdiger Begriff gewahrt, wenn für das Unrecht des Ägypters sein neugeborenes Kind bestraft würde? Deshalb ist ein geistlicher Sinn zu suchen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,27,2', year: 'um 180', quote: `Markion verwirft den Gott, der durch Gesetz und Propheten verkündigt wurde, und zerschneidet die Schrift.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Forschung ist unstrittig, dass altorientalische Kriegsberichte stark stilisieren. K. Lawson Youngers Vergleichsstudie (*Ancient Conquest Accounts*, 1990) zeigt dieselbe Totalitätsrhetorik in assyrischen, hethitischen und ägyptischen Annalen. Die meisten kritischen Historiker halten die Landnahme ohnehin für einen langen, überwiegend friedlichen Prozess; die Josua-Erzählung sei eine spätere theologische Darstellung. Moralphilosophisch bleibt umstritten, ob die Hyperbel-Deutung alle Probleme löst – Kritiker wie Wes Morriston betonen, dass auch ein „hyperbolischer" Befehl das Töten von Nichtkombattanten einschließen könnte.`,
    detail: `Typische Beispiele der Totalitätsrhetorik: Die Mescha-Stele (9. Jh. v. Chr.) behauptet: „Israel ist für immer gänzlich zugrunde gegangen" – während Israel weiterbestand. Die Merenptah-Stele (um 1208 v. Chr.) meldet: „Israel ist verwüstet, sein Same ist nicht mehr." Thutmosis III. rühmt sich, ein riesiges Heer Mitannis „zu Nichts" gemacht zu haben. Niemand liest diese Texte als Protokolle.

Ehrliche Grenze: Die Hyperbel-Deutung zeigt, dass das *Ausmaß* weit geringer war als der Wortlaut nahelegt, und dass der Hauptzweck die Vertreibung war. Sie beseitigt nicht jede Härte: Dass in eroberten Festungen auch Nichtkombattanten starben, lässt sich nicht ausschließen. Darum braucht die christliche Antwort mehrere Schichten (siehe Dialog).`,
    sources: [
      { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts: A Study in Ancient Near Eastern and Biblical History Writing (JSOT Supplement 98)', year: '1990', quote: `Vergleich der Eroberungsberichte Josuas mit assyrischen, hethitischen und ägyptischen Annalen: gemeinsame Stilmittel, insbesondere stereotype Totalitätsformeln.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Mescha-Stele (Moabiterstein)', ref: 'Z. 7', year: 'um 840 v. Chr.', quote: `Israel ist für immer gänzlich zugrunde gegangen.`, status: 'paraphrase', note: 'Klassisches Beispiel altorientalischer Siegeshyperbel.' },
      { kind: 'sonstiges', work: 'Merenptah-Stele', year: 'um 1208 v. Chr.', quote: `Israel ist verwüstet, sein Same ist nicht mehr.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Wes Morriston', work: 'Did God Command Genocide? A Challenge to the Biblical Inerrantist', ref: 'Philosophia Christi 11', year: '2009', quote: `Selbst wohlwollend gelesen bleibe ein Befehl, der das Töten von Nichtkombattanten einschließt, mit Gottes vollkommener Güte unvereinbar.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Texte sind hart, aber sie sagen etwas anderes, als man auf den ersten Blick denkt. Der Hauptbefehl war, die Völker zu **vertreiben**, und „alle vernichtet" war im Alten Orient eine übliche Siegesformel – dieselben Bücher sagen ja, dass die Kanaaniter danach weiter im Land lebten. Der Grund war nicht ihre Abstammung, sondern ein Gericht über Kinderopfer nach 400 Jahren Geduld, und Israel wurde dieselbe Strafe angedroht. Vor allem war es ein einmaliger, begrenzter Akt – kein Christ hat je das Recht, sich darauf zu berufen.`,
  keyPoints: [
    `**Vertreibung statt Ausrottung:** Die Leitverben sind „vertreiben" und „enteignen" (Ex 23,28–30; Num 33,52; Dtn 9,3); wer floh, wurde nicht verfolgt.`,
    `**Totalitätsrhetorik:** „Alles, was Odem hat" ist altorientalische Siegesformel – Jos 10,40 behauptet die vollständige Eroberung, Ri 1 und Jos 15,63 bezeugen die verbleibende Bevölkerung.`,
    `**Gericht, nicht Rasse:** Gen 15,16; Lev 18,24–28 – die Kanaaniterin Rahab wird gerettet, der Israelit Achan gerichtet, Israel selbst wird später exiliert.`,
    `**Einmalig und begrenzt:** Eine bestimmte Zeit, ein bestimmtes Land, ein prophetisch autorisierter Akt – kein allgemeines Kriegsrecht und kein Vorbild für Christen (Joh 18,36; Mt 26,52).`,
    `**Der Einwand setzt objektive Moral voraus:** Wer Gott des Unrechts anklagt, braucht einen objektiven Maßstab für Unrecht – den der Naturalismus nicht liefert.`,
    `**Alexandrinische Lesart:** Die Kirche liest die Kriege auch geistlich (Origenes, Gregor von Nyssa) und hat Markion, der den AT-Gott verwarf, abgelehnt – derselbe Gott, durch Christus gelesen.`,
  ],
  argument: {
    name: 'Kumulative Antwort auf den Völkermord-Vorwurf',
    summary: 'Jede Prämisse des Vorwurfs wird einzeln geprüft.',
    premises: [
      {
        text: 'P1: Der Befehl zielte primär auf die Vertreibung eines kultisch-politischen Systems, nicht auf die Tötung aller Individuen.',
        support: 'Leitverben gāraš/yāraš; Ex 23,28–30; Num 33,52–55; Dtn 7,2–3 setzt Überlebende voraus; keine Verfolgung Geflohener befohlen.',
      },
      {
        text: 'P2: Die Totalitätsaussagen sind stereotype Kriegsrhetorik, wie sie im ganzen Alten Orient üblich war.',
        support: 'Younger 1990; Mescha- und Merenptah-Stele; innerbiblisch Jos 10,40 vs. Jos 13,1; 15,63; Ri 1.',
      },
      {
        text: 'P3: Der Grund war ein moralisches Gericht, kein ethnisches Motiv.',
        support: 'Gen 15,16; Lev 18,24–28; Dtn 9,4–5; Rettung Rahabs und der Gibeoniter; gleiche Drohung gegen Israel.',
      },
      {
        text: 'P4: Gott als Geber des Lebens hat Rechte über Leben und Tod, die kein Mensch hat; der Befehl war einmalig und ist nicht übertragbar.',
        support: 'Dtn 32,39; Hi 1,21; Begrenzung in Dtn 20,15–17; Christus verwirft das Schwert für sein Reich (Joh 18,36).',
      },
    ],
    conclusion: 'Die Texte beschreiben keinen Völkermord im heutigen Sinn (Vernichtung eines Volkes aufgrund seiner Identität), sondern ein zeitlich begrenztes, stark stilisiert berichtetes Gericht mit Vertreibung als Hauptzweck. Eine Restschwere bleibt, die nur im Licht der Souveränität und Güte Gottes – und des Kreuzes – getragen werden kann.',
  },
  voices: [
    {
      person: 'origenes',
      role: 'als alexandrinischer Schriftausleger',
      text: `Origenes predigte um 240 in Caesarea eine ganze Reihe von Homilien über das Buch Josua. Für ihn ist der Name „Jesus" (griechisch für Josua) kein Zufall: Der Nachfolger des Mose ist ein Bild Christi, der sein Volk in das wahre Land der Verheißung führt. Die Kriege gegen die Kanaaniter liest er als Bild des inneren Kampfes gegen Hochmut, Begierde und Zorn, die das „Land" der Seele besetzt halten.

Wichtig für die heutige Debatte: Origenes zieht daraus ausdrücklich den Schluss, dass Christen keine leiblichen Kriege im Namen Gottes führen. Gegen Kelsos stellt er fest, das Gesetz Israels sei die Verfassung eines Volkes gewesen, das Evangelium dagegen begründe keinen Staat, der Feinde tötet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Josua', ref: '15,1', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'VII,26', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe der geistlichen Schriftauslegung',
      text: `Gregor von Nyssa stellt in seiner *Vita Moysis* eine Frage, die heutige Kritiker kaum schärfer formulieren könnten: Wie soll es Gottes würdig sein, dass für die Schuld eines Erwachsenen dessen neugeborenes Kind stirbt? Er antwortet nicht mit Verharmlosung, sondern mit einer hermeneutischen Regel: Wo der Wortsinn ein Gottesbild ergibt, das Gottes Güte widerspricht, muss der Leser tiefer graben und den geistlichen Sinn suchen.

Für Gregor ist die Schrift ein Weg der Erziehung. Gott offenbart sich einem Volk in einer gewalttätigen Welt und führt es Schritt für Schritt höher – bis zur vollen Offenbarung in Christus. Das ist keine Leugnung der Geschichte, sondern eine Leseanleitung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De vita Moysis', ref: 'II,91–92', status: 'paraphrase' },
      ],
    },
    {
      person: 'k-lawson-younger',
      role: 'als Altorientalist',
      text: `Younger hat die Eroberungsberichte in Josua 9–12 systematisch mit assyrischen, hethitischen und ägyptischen Kriegsannalen verglichen. Sein Befund: Die biblischen Berichte folgen derselben „Grammatik" des Kriegsberichts – Ich-Rhetorik des Siegers, göttliches Eingreifen, stereotype Totalitätsformeln („keinen Überlebenden ließ er übrig"), auch wo die Quellen selbst später das Gegenteil voraussetzen.

Für die moralische Debatte heißt das: Wer Jos 10,40 als wörtliche Opferstatistik liest, liest den Text gegen seine eigene Gattung. Das ist keine fromme Ausrede, sondern Standard der altorientalischen Philologie.`,
      sources: [
        { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' },
      ],
    },
    {
      person: 'paul-copan',
      role: 'als Religionsphilosoph',
      text: `Copan und sein Mitautor Matthew Flannagan bündeln die exegetischen und philosophischen Argumente: Die Landnahme sei primär Vertreibung, die Totalitätssprache hyperbolisch, die Zielorte überwiegend befestigte militärische Stützpunkte, und der Befehl einmalig, nicht übertragbar. In *Is God a Moral Monster?* (2011) antwortet Copan direkt auf Dawkins und Hitchens.

Philosophisch argumentieren sie zudem, dass auch die schwierigste Deutung kein logischer Widerspruch zur Güte Gottes ist: Wenn Gott als Schöpfer das Leben gibt und nimmt, ist ein Befehl Gottes nicht dasselbe wie die Willkür eines Menschen. Entscheidend ist für sie aber, dass der Text gar nicht das behauptet, was die Kritiker ihm unterstellen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Copan; Matthew Flannagan', work: 'Did God Really Command Genocide? Coming to Terms with the Justice of God', year: '2014', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster? Making Sense of the Old Testament God', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'christopher-wright',
      role: 'als Alttestamentler',
      text: `Christopher Wright, der das Buch *The God I Don't Understand* (2008) schrieb, beginnt mit einem Zugeständnis: Diese Texte bleiben schmerzhaft, und wer sie glatt bügelt, nimmt sie nicht ernst. Dann zeigt er drei Linien: Die Landnahme wird im AT durchgehend als **Gericht** verstanden, nicht als ethnische Überlegenheit (Dtn 9,4–5); dasselbe Gericht trifft später Israel; und das Ziel der Geschichte ist die Segnung **aller** Völker (Gen 12,3).

Wright betont: Die Schrift selbst beschreibt dieses Ereignis als Ausnahme, nicht als Muster. Sie gibt keinem späteren Volk und keiner Kirche das Recht, sich darauf zu berufen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'The God I Don\'t Understand: Reflections on Tough Questions of Faith', year: '2008', status: 'paraphrase' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Debattierer',
      text: `William Lane Craig argumentiert auf zwei Ebenen. Erstens: Gott ist kein Akteur unter Akteuren; er ist Geber allen Lebens und hat daher Rechte, die kein Mensch hat. Er nimmt jedem Menschen irgendwann das Leben. Für die getöteten Kinder sieht Craig die Hoffnung, dass sie in Gottes Gegenwart aufgenommen wurden. Zweitens weist er darauf hin, dass der atheistische Einwand selbst objektive moralische Pflichten voraussetzt – etwa die Pflicht, Unschuldige nicht zu töten –, die im Naturalismus keine Grundlage haben.

Craig hat später das Buch von Copan und Flannagan (*Did God Really Command Genocide?*, 2014), das die Hyperbel-Deutung ausarbeitet, öffentlich empfohlen, sodass der härteste Teil seiner frühen Antwort für ihn nur noch eine „Worst-Case"-Verteidigung ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: '„Slaughter of the Canaanites", Reasonable Faith Q&A', year: '2007', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Empfehlung (Klappentext) zu Paul Copan; Matthew Flannagan, Did God Really Command Genocide? (Baker Books)', year: '2014', status: 'paraphrase', note: 'Geprüft (WebSearch 11/2026): Craigs Empfehlung steht auf der Verlagsseite (Baker) und würdigt den biblischen, philosophischen, rechtlichen und historischen Zugriff des Buches. Eine ausdrückliche Übernahme der Hyperbel-These in einem eigenen Craig-Text wurde nicht gefunden – daher vorsichtig als „Würdigung" formulieren.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dtn-20-eindeutig',
      objection: `Dtn 20,16: „nichts leben lassen, was Odem hat". Jos 6,21: „Mann und Weib, jung und alt". Deutlicher geht es nicht. Das ist ein Völkermordbefehl, und du drehst dich nur heraus.`,
      objectionBy: 'Hector Avalos',
      answer: `Ich nehme den Text sehr ernst – gerade deshalb lese ich ihn ganz. Dasselbe Buch Josua sagt in 10,40, das ganze Land sei erobert und niemand übrig geblieben, und drei Kapitel später (13,1): „Vom Land bleibt noch sehr viel einzunehmen." Ri 1 listet Stadt für Stadt, in der die Kanaaniter wohnen blieben. Und Dtn 7,3 verbietet, sich mit ihnen zu verheiraten – mit Toten heiratet man nicht. Die Bibel selbst zeigt also, dass „alle" eine Siegesformel war.`,
      detail: `Drei innerbiblische Spannungen genügen, um die Gattung zu zeigen:
- Jos 10,40; 11,23 („das ganze Land") vs. Jos 13,1–6; 15,63; 16,10; 17,12–13.
- Jos 11,21 (Enakiter ausgerottet) vs. Jos 15,14; Ri 1,10.20 (Kaleb muss sie später vertreiben).
- Dtn 7,2 („verbannen") vs. Dtn 7,3 (Heiratsverbot) und Jos 23,12–13 (Warnung vor Vermischung mit den Übriggebliebenen).

Die Redaktoren waren nicht dumm. Sie haben diese Spannungen nicht übersehen, sondern die Sprache so verstanden, wie ihre Zeitgenossen sie verstanden.`,
      sources: [
        { kind: 'bibel', work: 'Josua', ref: '13,1', quote: `Du bist alt geworden und wohl betagt, und des Landes ist noch sehr viel übrig einzunehmen.`, translation: 'nach Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Richter', ref: '1,27–28', quote: `Manasse vertrieb die Kanaaniter nicht; als Israel mächtig wurde, machte es sie fronpflichtig.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wie erklärst du, dass derselbe Redaktor „alle vernichtet" und „sie wohnten weiter dort" nebeneinanderstellt?`,
        `Liest du die Mescha-Stele („Israel ist für immer zugrunde gegangen") auch wörtlich?`,
      ],
      followUps: [
        {
          id: 'hyperbel-ausrede',
          objection: `„Hyperbel" ist eine bequeme Ausrede. Wenn ein General sagt „Tötet alle", dann meint er es so. Du machst aus einem Massaker eine Stilfrage.`,
          objectionBy: 'Hector Avalos',
          answer: `Hyperbel ist keine Erfindung von Apologeten, sondern ein Befund der Altorientalistik. Younger hat 1990 gezeigt, dass assyrische, hethitische und ägyptische Annalen dieselben Totalitätsformeln verwenden, obwohl die „vernichteten" Völker weiterlebten. Wir reden heute genauso: „Wir haben sie vernichtet" heißt nach einem Fußballspiel nicht, dass Spieler gestorben sind. Es geht nicht um Verharmlosung, sondern darum, was der Text tatsächlich behauptet.`,
          detail: `Wichtig ist die Unterscheidung zwischen **Kriegsbericht** (stilisierte Siegesrhetorik) und **Befehl**. Auch die Befehle in Dtn 7 und 20 stehen im Kontext, in dem „vertreiben" das Leitverb ist (Dtn 7,1: „ausrotten" neben Dtn 7,22: „nach und nach vertreiben"). Wer flieht, wird nicht verfolgt; der Text kennt keinen Befehl, Geflohene aufzuspüren.`,
          voices: [
            {
              person: 'k-lawson-younger',
              text: `Younger zeigt anhand der Annalen Thutmosis' III. und der assyrischen Königsinschriften, dass die Formel „kein Überlebender" zum festen Repertoire gehört – auch dort, wo dieselben Herrscher später gegen dieselben Völker erneut kämpfen müssen.`,
              sources: [{ kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'absicht-bleibt',
              objection: `Selbst wenn sie nicht alle erwischt haben – die Absicht war Vernichtung. Ein Gott, der das will, ist moralisch nicht besser als einer, der es erreicht.`,
              objectionBy: 'Wes Morriston',
              answer: `Die Absicht war nach den Texten die **Entfernung** eines Systems aus dem Land: Ex 23,29–30 spricht davon, die Völker „nach und nach" zu vertreiben; Num 33,52 befiehlt, die Kultbilder und Höhen zu zerstören und die Bewohner zu vertreiben. *Ḥerem* bedeutet, dass Israel weder Beute machen noch Bündnisse schließen durfte – kein Profit, keine Vermischung mit dem Kult. Wer das Land verließ, war nicht Ziel des Befehls.`,
              detail: `Die Landnahme ist im Kern eine **Enteignung**: Das Land gehört Gott (Lev 25,23), er gibt es und nimmt es – auch Israel wird es später verlieren. Die Kampfhandlungen richten sich gegen die Stadtstaaten, die Widerstand leisten. Copan und Flannagan verweisen mit Richard Hess darauf, dass Orte wie Jericho und Ai in dieser Zeit eher befestigte Stützpunkte als zivile Großstädte waren; dieser Punkt ist in der Forschung umstritten und sollte vorsichtig vorgetragen werden.`,
              followUps: [
                {
                  id: 'ethnische-saeuberung',
                  objection: `Dann ist es eben „nur" ethnische Säuberung. Menschen aus ihrer Heimat zu vertreiben, weil sie die falsche Religion haben, ist auch ein Verbrechen.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Ethnisch war es gerade nicht: Die Kanaaniterin Rahab wird gerettet und steht im Stammbaum Jesu, die Gibeoniter werden verschont, der Hethiter Uria gehört zu Davids Elite – und der Israelit Achan wird gerichtet. Der Maßstab war moralisch: Kinderopfer und kultische Gräuel (Lev 18,21.24–28). Israel wurde dieselbe Strafe angedroht und erlitt sie im Exil. Und entscheidend: Das war ein einmaliges Gericht Gottes, kein Recht, das Menschen sich nehmen dürfen.`,
                  detail: `Der Unterschied zu „ethnischer Säuberung" liegt in drei Punkten:
1. **Kein Abstammungskriterium:** Wer sich Israels Gott zuwandte (Rahab), gehörte dazu.
2. **Gleicher Maßstab für alle:** Lev 18,28 („damit euch das Land nicht auch ausspeie"); Dtn 8,19–20 („ihr werdet umkommen wie die Völker").
3. **Göttliches Gericht, nicht menschliche Politik:** Der Befehl kommt nicht von einem Machthaber zur Machterweiterung, sondern wird als Urteil über eine lange Geschichte beschrieben (Gen 15,16). Kein späterer König Israels und erst recht keine Kirche erhielt einen vergleichbaren Auftrag.`,
                  questionsBack: [
                    `Wenn es um Rasse ginge – warum wird dann gerade eine kanaanitische Prostituierte zur Heldin und Ahnfrau des Messias?`,
                    `Gibt es in deinem Weltbild einen objektiven Maßstab, nach dem Vertreibung *falsch* ist, oder nur deine Präferenz?`,
                  ],
                  followUps: [
                    {
                      id: 'siegerpropaganda',
                      objection: `Woher weißt du, dass die Kanaaniter so böse waren? Das ist doch klassische Siegerpropaganda: Man dämonisiert die Opfer.`,
                      objectionBy: 'Hector Avalos',
                      answer: `Zwei Dinge sprechen gegen reine Propaganda. Erstens bezeugen außerbiblische Quellen Kinderopfer im kanaanitisch-phönizischen Kulturkreis – am deutlichsten die Tophet-Bezirke im phönizischen Karthago, auch wenn ihre Deutung umstritten ist. Zweitens schont die Bibel Israel überhaupt nicht: Sie wirft ihm dieselben Gräuel vor (2 Kön 17; Jer 7,31) und schildert seine eigene Vertreibung. Propaganda lobt die Sieger – die Bibel klagt sie an.`,
                      detail: `Ehrlich bleiben: Die archäologische Deutung der karthagischen Tophets (Urnenfelder mit verbrannten Kinderknochen) ist umstritten; einige Forscher sehen darin Bestattungen früh verstorbener Kinder, andere – gestützt auf griechisch-römische Berichte und Weiheinschriften – rituelle Opfer. Für die Debatte reicht: Die Bibel ist nicht die einzige Quelle, die solche Praktiken im phönizisch-kanaanitischen Raum bezeugt, und sie wendet denselben Maßstab gegen Israel selbst an (2 Kön 16,3; 21,6 – Ahas und Manasse).`,
                      sources: [
                        { kind: 'bibel', work: 'Jeremia', ref: '7,31', quote: `…daß sie ihre Söhne und Töchter verbrennen, welches ich nie geboten noch in den Sinn genommen habe.`, translation: 'Luther 1912', status: 'verbatim' },
                        { kind: 'bibel', work: '2. Könige', ref: '17,7–18', quote: `Israel wird weggeführt, weil es den Gräueln der Völker folgte.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'amalekiter-saeuglinge',
          objection: `Und 1 Sam 15,3? „Töte Mann und Weib, Kinder und Säuglinge." Da gibt es keine Hyperbel-Ausrede, da stehen die Säuglinge ausdrücklich da.`,
          objectionBy: 'Richard Dawkins',
          answer: `Das ist der härteste Text, und ich verharmlose ihn nicht. Aber selbst hier zeigt die Bibel die Formelhaftigkeit: Saul „vernichtet" angeblich alle Amalekiter (15,8), doch wenige Kapitel später überfallen Amalekiter Ziklag, und 400 junge Männer entkommen David (1 Sam 30,1.17); noch zur Zeit Hiskias gibt es welche (1 Chr 4,43). Amalek wird als das Volk beschrieben, das Israel heimtückisch an den Schwachen und Erschöpften angriff (Dtn 25,17–18) – über Generationen.`,
          detail: `Die Formel „Mann und Weib, Kind und Säugling, Rind und Schaf" ist eine **Merismus-Formel**: Sie nennt Gegensatzpaare, um „alles" zu sagen. Sie steht auch in Jos 6,21 und in anderen altorientalischen Texten. Dass die Amalekiter danach ganz selbstverständlich weiter existieren, zeigt, wie der Erzähler selbst sie verstanden hat.

Ehrliche Restschwere: Auch wenn die Formel hyperbolisch ist, ist nicht auszuschließen, dass Nichtkombattanten starben. Hier greift die zweite Ebene der Antwort: Gott als Herr über Leben und Tod und die Einmaligkeit des Gerichts (siehe Dialog „Kinder töten").`,
          sources: [
            { kind: 'bibel', work: '1. Samuel', ref: '30,1.17', quote: `Die Amalekiter überfallen Ziklag; bei Davids Gegenangriff entkommen 400 junge Männer auf Kamelen.`, status: 'paraphrase' },
            { kind: 'bibel', work: 'Deuteronomium', ref: '25,17–18', quote: `Gedenke, was dir die Amalekiter taten … wie sie die Schwachen hinter dir erschlugen, als du müde und matt warst.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'bibel-luegt-dann',
              objection: `Dann gibt die Bibel ja selbst zu, dass sie übertreibt. Wenn sie hier „alle" sagt und es nicht meint – warum soll ich ihr irgendetwas glauben?`,
              objectionBy: 'Bart Ehrman',
              answer: `Hyperbel ist keine Lüge, sondern eine Redeform, die jeder kompetente Leser erkennt – sonst wäre jeder Sportreporter ein Lügner. Inspiration heißt, dass Gott durch die Sprachformen der Menschen spricht, nicht dass er antike Gattungen in moderne Protokolle verwandelt. Gerade wer historisch-kritisch arbeitet wie du, besteht doch darauf, Texte nach ihrer Gattung zu lesen.`,
              questionsBack: [
                `Würdest du einem Historiker des Alten Orients vorwerfen, er „rette" die assyrischen Annalen, wenn er ihre Siegesformeln als Formeln liest?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-toeten',
      objection: `Selbst wenn es nur ein paar Dutzend Kinder waren: Ein guter Gott befiehlt nie, Kinder zu töten. Punkt. Kein „Kontext" macht das moralisch.`,
      objectionBy: 'Richard Dawkins',
      answer: `Ich verstehe diese Empörung, und sie ist richtig, wenn ein Mensch so handelt. Aber Gott ist nicht ein Mensch unter Menschen: Er gibt jedem Leben und nimmt es jedem – jedes Kind, das je gestorben ist, stirbt in einer Welt, die Gott trägt. Christen glauben, dass verstorbene Kinder bei Gott geborgen sind. Und ich frage zurück: Auf welcher Grundlage ist das Töten von Kindern *objektiv* falsch, wenn es keinen Gott gibt? Dein Einwand setzt genau die Moral voraus, die du Gott absprichst.`,
      detail: `Hier sind zwei Dinge auseinanderzuhalten:
1. **Darf ein Mensch eigenmächtig Unschuldige töten?** Nein – das verbietet die Schrift selbst (Ex 20,13; 23,7).
2. **Hat Gott, der Schöpfer, Rechte über Leben und Tod?** Ja (Dtn 32,39; Hi 1,21; 1 Sam 2,6). Der Tod jedes Menschen liegt in seiner Hand. Wer Gott nimmt, was er gibt, tut kein Unrecht an einem Eigentum, das ihm nicht gehört.

Das ist keine leichte Antwort, und sie soll auch nicht leicht klingen. Aber sie ist logisch kohärent. Der Kritiker müsste zeigen, dass es für Gott *keinen* moralisch hinreichenden Grund geben *kann* – eine sehr starke Behauptung.

Zur Debattenlogik: Dawkins schreibt selbst, das Universum habe „kein Gut und kein Böse, nichts als blinde, erbarmungslose Gleichgültigkeit" (River Out of Eden, 1995). Wer so denkt, kann Gottes Handeln moralisch kritisieren – aber nur, wenn er sich Werte borgt, die sein eigenes Weltbild nicht begründet.`,
      sources: [
        { kind: 'bibel', work: 'Deuteronomium', ref: '32,39', quote: `Ich kann töten und lebendig machen; ich kann schlagen und kann heilen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden', year: '1995', ref: 'Kap. 4', quote: `Das Universum hat genau die Eigenschaften, die man erwarten würde, wenn es im Grunde keinen Plan, keinen Zweck, kein Böses und kein Gutes gibt, nichts als blinde, erbarmungslose Gleichgültigkeit.`, original: 'The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil and no good, nothing but blind, pitiless indifference.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      voices: [
        {
          person: 'craig',
          text: `Craig unterscheidet zwischen dem, was Menschen dürfen, und dem, was Gott als Schöpfer zusteht: Gott ist niemandem das Leben schuldig. Den getöteten Kindern sei nach christlicher Hoffnung kein Unrecht geschehen, das Gott nicht ewig wiedergutmacht; die eigentliche moralische Last liege eher bei den Soldaten, die einen solchen Befehl ausführen mussten. Diese Antwort ist für Craig die „Worst-Case"-Verteidigung – sie gilt auch dann, wenn man die Hyperbel-Deutung nicht teilt.`,
          sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: '„Slaughter of the Canaanites", Reasonable Faith Q&A', year: '2007', status: 'paraphrase' }],
        },
      ],
      questionsBack: [
        `Was macht in deinem Weltbild das Töten eines Kindes *objektiv* falsch – nicht nur unangenehm für uns?`,
        `Ist jeder Tod eines Kindes durch Krankheit dann auch ein moralisches Verbrechen der Natur?`,
      ],
      followUps: [
        {
          id: 'terroristen-rechtfertigung',
          objection: `Mit „Gott darf alles" rechtfertigst du jeden Terroristen, der sagt, Gott habe ihm befohlen zu töten. Das ist genau das Problem der Religion.`,
          objectionBy: 'Sam Harris',
          answer: `Nein, aus drei Gründen. Erstens war die Landnahme ein einmaliges, zeitlich und örtlich begrenztes Ereignis der Heilsgeschichte – kein Auftrag an spätere Generationen. Zweitens hat Christus für sein Reich das Schwert ausdrücklich verworfen (Joh 18,36; Mt 26,52); eine angebliche Offenbarung, die Gewalt im Namen Gottes fordert, widerspricht dem, was Gott in Christus endgültig gesagt hat (Hebr 1,1–2). Drittens: Die koptische Kirche hat in 1.400 Jahren unter wechselnden Herrschaften nie einen „heiligen Krieg" geführt.`,
          detail: `Die christliche Lehre kennt kein offenes Offenbarungsfenster, durch das jeder Einzelne neue Tötungsbefehle empfangen könnte. Die Offenbarung ist in Christus abgeschlossen; alles wird an ihm gemessen (Gal 1,8). Ein Christ, der behauptet, Gott habe ihm befohlen, Unschuldige zu töten, wird von der Kirche nicht als Prophet, sondern als Verirrter beurteilt. Das unterscheidet das Christentum von Ideologien, die zeitlose Kampfbefehle kennen.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt. Wäre mein Reich von dieser Welt, meine Diener würden darob kämpfen, daß ich den Juden nicht überantwortet würde.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'josua-wahnsinniger',
              objection: `Und woher weißt du, dass Josua nicht selbst ein Wahnsinniger war, der Stimmen hörte? Du hast nur sein Wort.`,
              objectionBy: 'Sam Harris',
              answer: `Christen nehmen das Alte Testament nicht an, weil Josua es sagt, sondern weil Christus es bestätigt hat (Lk 24,44) – und Christus ist durch seine Auferstehung beglaubigt. Wenn du die Auferstehung bestreitest, verschiebt sich die Debatte zu Recht dorthin. Aber dann geht es nicht mehr um die Moral der Kanaaniter, sondern um die Frage, wer Jesus ist.`,
              detail: `Das ist kein Ausweichen, sondern die korrekte Reihenfolge: Das Fundament des christlichen Glaubens ist nicht das Buch Josua, sondern die Person Christi. Wenn Gott in Christus Mensch geworden und auferstanden ist, dann hat er auch Israels Geschichte geführt – und dann vertrauen wir, dass er auch dort gerecht war, wo wir nicht alles verstehen. Wenn nicht, ist das Christentum ohnehin falsch (1 Kor 15,14), und die Kanaaniter-Frage ist zweitrangig.`,
              followUps: [
                {
                  id: 'moral-haengt-am-glauben',
                  objection: `Siehst du – deine Moral hängt am Glauben. Du nennst etwas gut, weil dein Buch es sagt. Genau das ist gefährlich.`,
                  objectionBy: 'Sam Harris',
                  answer: `Jedes moralische Urteil hängt an einem Weltbild – auch deines. Der Unterschied ist: In meinem Weltbild gibt es einen Grund, warum Grausamkeit *objektiv* böse ist, nämlich weil der Mensch Gottes Ebenbild ist. In einem naturalistischen Weltbild sind Moralurteile letztlich Gehirnzustände, die die Evolution hervorgebracht hat. Dein Einwand gegen Josua ist stark – aber nur, wenn es objektive Moral gibt. Und die spricht für Gott, nicht gegen ihn.`,
                  sources: [
                    { kind: 'bibel', work: 'Genesis', ref: '9,6', quote: `Wer Menschenblut vergießt, des Blut soll auch durch Menschen vergossen werden; denn Gott hat den Menschen zu seinem Bilde gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'abtreibung-retourkutsche',
          objection: `Wenn tote Kinder ohnehin in den Himmel kommen, dann tut ja jeder, der Kinder tötet, ihnen einen Gefallen. Dann dürftest du auch nichts gegen Abtreibung haben.`,
          objectionBy: 'Richard Dawkins',
          answer: `Nein, denn das Unrecht liegt im Handeln des Menschen, nicht im Schicksal des Opfers. Kein Mensch hat das Recht, unschuldiges Leben zu nehmen – nur der, der es gegeben hat. Dass Gott Unrecht wiedergutmachen kann, macht das Unrecht nicht erlaubt. Sonst wäre auch jeder Mord an einem Christen „ein Gefallen".`,
        },
      ],
    },
    {
      id: 'markion-hatte-recht',
      objection: `Und das soll derselbe Gott sein, den Jesus „Vater" nennt? Der AT-Gott und der Gott der Bergpredigt sind unvereinbar. Markion hatte recht, als er das Alte Testament hinauswarf.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Jesus selbst sah das anders: Er nannte den Gott Abrahams, Isaaks und Jakobs seinen Vater und bestätigte Gesetz und Propheten (Mt 5,17; 22,32). Das Neue Testament kennt auch Gericht (Mt 25,41; Apg 5; Offb 19), und das Alte kennt überwältigende Barmherzigkeit (Ex 34,6; Jona 4,11). Die Kirche hat Markion im 2. Jahrhundert gerade deshalb abgelehnt, weil man ohne das AT auch Christus nicht versteht – das Kreuz ist Gottes Gericht und Gottes Liebe zugleich.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '5,17', quote: `Ihr sollt nicht wähnen, daß ich gekommen bin, das Gesetz oder die Propheten aufzulösen; ich bin nicht gekommen, aufzulösen, sondern zu erfüllen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Adversus Marcionem', year: 'um 207', quote: `Ausführliche Widerlegung Markions: Der Gott des Gesetzes und der Vater Jesu Christi sind ein und derselbe, gut und gerecht zugleich.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'origenes-allegorie-ausweichen',
          objection: `Origenes und seine Allegorien sind doch nur der Beweis, dass schon die Kirchenväter sich für diese Texte geschämt haben. Allegorie ist Flucht.`,
          objectionBy: 'Hector Avalos',
          answer: `Die alexandrinische Auslegung leugnet den Wortsinn nicht, sondern baut auf ihm auf und fragt nach dem tieferen Sinn für Christen. Das Neue Testament selbst tut das: Paulus liest die Wüstenwanderung als Vorbild für die Kirche (1 Kor 10,1–11), Hebr 4,8 verbindet Josua mit Jesus. Und Origenes' entscheidende Folgerung ist praktisch: Christen dürfen sich auf diese Kriege nicht berufen. Das zeigt, dass die frühe Kirche die Texte gerade nicht als Gewaltlizenz gelesen hat.`,
          followUps: [
            {
              id: 'allegorie-beliebig',
              objection: `Wenn man spirituell liest, kann man alles in die Bibel hineinlesen. Dann ist sie beliebig.`,
              objectionBy: 'Hector Avalos',
              answer: `Nicht beliebig: Die Väter banden den geistlichen Sinn an die Glaubensregel (regula fidei) und an Christus als Mitte der Schrift. Der geistliche Sinn darf den Wortsinn nicht aufheben und nichts lehren, was dem klaren Zeugnis der Schrift widerspricht. Das ist eine kontrollierte Methode – vergleichbar damit, wie ein Jurist ein altes Gesetz im Licht der Verfassung liest.`,
            },
          ],
        },
        {
          id: 'moderne-christen-boyd',
          objection: `Selbst viele Christen wie Greg Boyd oder Eric Seibert sagen heute: Israel hat Gott missverstanden; diese Befehle kamen nicht wirklich von Gott. Warum gibst du das nicht einfach zu?`,
          objectionBy: 'Bart Ehrman',
          answer: `Es stimmt, dass manche Christen das vertreten, und ich verstehe das Motiv. Aber wenn Israels zentrale Geschichte auf einem Missverständnis Gottes beruht, wird unklar, warum ich dem Rest der Schrift trauen sollte – und Jesus selbst las sie anders. Die orthodoxe Antwort liegt zwischen Markion und einem flachen Literalismus: Gott offenbart sich schrittweise und lässt sich auf eine harte Welt ein (Mt 19,8: „wegen eurer Herzenshärtigkeit"), ohne dass jede Etappe schon die volle Offenbarung in Christus ist.`,
          detail: `Gregory Boyd (*The Crucifixion of the Warrior God*, 2017) deutet die Gewalttexte als Spiegel der gefallenen Vorstellungen Israels, die Gott „trägt" wie Christus die Sünde am Kreuz. Die koptische Kirche hält dagegen an der Inspiration der ganzen Schrift fest, liest aber mit den Vätern pädagogisch: Gott erzieht ein Volk aus einer Welt der Kinderopfer heraus. Das Ziel der Linie ist das Kreuz, an dem Gott nicht andere für sich sterben lässt, sondern selbst stirbt.`,
        },
      ],
    },
    {
      id: 'nie-passiert',
      objection: `Archäologisch hat das ohnehin nie stattgefunden. Jericho war zur fraglichen Zeit kaum bewohnt. Warum verteidigst du einen Völkermord, den es nicht gab?`,
      objectionBy: 'Israel Finkelstein (zitiert von Kritikern)',
      answer: `Dann fällt der moralische Vorwurf gegen Gott weitgehend in sich zusammen – man kann nicht gleichzeitig sagen „es ist nie passiert" und „Gott ist ein Völkermörder". Zur Archäologie gibt es ein eigenes Thema; die Datierungen sind umstritten. Für die ethische Frage zählt: Der Text beschreibt ein begrenztes Gericht in stilisierter Kriegssprache, und genau so muss man ihn moralisch beurteilen.`,
      questionsBack: [
        `Kritisierst du also den Text oder ein Ereignis? Beides zugleich funktioniert nicht.`,
      ],
    },
  ],
  questionsToAsk: [
    `Was macht in deinem Weltbild Völkermord *objektiv* böse – und nicht nur evolutionär unerwünscht?`,
    `Wie erklärst du, dass dieselben Bücher „alle vernichtet" und „sie wohnten weiter dort" berichten?`,
    `Warum wird gerade eine Kanaaniterin, Rahab, zur Ahnfrau Jesu, wenn es um Rasse ginge?`,
    `Kennst du einen christlichen Theologen der Alten Kirche, der aus Josua ein Recht auf Gewalt für Christen abgeleitet hat?`,
    `Wenn Gott existiert und Schöpfer des Lebens ist – warum sollte er nicht Rechte über Leben und Tod haben, die wir nicht haben?`,
  ],
  avoid: [
    `„Die Kanaaniter waren alle Monster, die hatten es verdient – auch die Kinder." Das klingt herzlos, ist exegetisch unhaltbar und verliert jedes Publikum.`,
    `„Das ist Altes Testament, das gilt nicht mehr." Das ist Markionismus light; Jesus und die Kirche bekennen denselben Gott.`,
    `„Gott darf alles, Ende der Diskussion." Richtig verstanden ist Gottes Souveränität ein Argument, aber ohne Exegese wirkt es wie Willkür.`,
    `Die Hyperbel-Deutung als Allheilmittel verkaufen. Sie reduziert das Ausmaß drastisch, beseitigt aber nicht jede Härte – gib das zu.`,
  ],
  concessions: [
    `Diese Texte sind schwer und schmerzhaft. Wer sie leichtfertig verteidigt, hat sie nicht verstanden – auch die Kirchenväter haben mit ihnen gerungen.`,
    `Christen haben in der Geschichte (etwa in Kolonialkriegen) diese Texte missbraucht, um Gewalt gegen andere Völker zu rechtfertigen. Das war ein schwerer Irrtum, gegen den die Schrift selbst steht.`,
    `Auch bei der Hyperbel-Deutung bleibt die Möglichkeit, dass Nichtkombattanten starben. Hier bleibt Vertrauen in Gottes Gerechtigkeit nötig, das sich am Kreuz ausweist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Paul Copan; Matthew Flannagan', work: 'Did God Really Command Genocide? Coming to Terms with the Justice of God', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster? Making Sense of the Old Testament God', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher J. H. Wright', work: 'The God I Don\'t Understand', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Josua', year: 'um 240', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Kanaaniter', 'Landnahme', 'Herem', 'Hyperbel', 'Josua', 'Völkermord', 'Gewalt im AT'],
  related: [
    'at-ethik/at-gott-monster',
    'at-archaeologie/eroberung-kanaans',
    'moral-und-gott/gut-ohne-gott',
    'religion-gewalt/religion-verursacht-kriege',
    'theodizee/logisches-problem-des-uebels',
  ],
};

export default claim;
