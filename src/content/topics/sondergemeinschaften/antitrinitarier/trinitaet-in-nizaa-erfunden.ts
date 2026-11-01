import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'trinitaet-in-nizaa-erfunden',
  title: `„Die Trinität wurde 325 in Nizäa erfunden."`,
  proponents: [
    { name: 'Anthony F. Buzzard', role: 'Biblischer Unitarier, Restoration Fellowship / Atlanta Bible College', work: 'The Doctrine of the Trinity: Christianity\'s Self-Inflicted Wound (mit Charles F. Hunting, 1998)' },
    { name: 'Dale Tuggy', role: 'Religionsphilosoph, unitarischer Theologe, Podcast „Trinities"', work: 'What Is the Trinity? (2017)' },
    { name: 'Wachtturm-Gesellschaft (Zeugen Jehovas)', role: 'Herausgeberin der Broschüre', work: 'Sollte man an die Dreieinigkeit glauben? (1989)' },
    { name: 'Dan Brown', role: 'Romanautor (populäre Fassung des Einwands)', work: 'Sakrileg / The Da Vinci Code (2003)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill (These einer schrittweisen Entwicklung)', work: 'How Jesus Became God (2014)' },
  ],
  steelman: `Das Wort „Trinität" steht nicht in der Bibel. Jesus und die Apostel waren jüdische Monotheisten; Jesus betete zum „allein wahren Gott" (Joh 17,3). Die Kirchenväter vor Nizäa waren keine Trinitarier im späteren Sinn: Justin nennt den Sohn „einen anderen Gott" unter dem Schöpfer (Dial. 56), Origenes einen „zweiten Gott", und Tertullian schreibt sogar: „Es gab eine Zeit, da der Sohn nicht war" (Adversus Hermogenem 3). Dann kam Konstantin – ein ungetaufter Kaiser, dem es um die Einheit des Reiches ging. Er berief 325 das Konzil, empfahl nach dem Bericht des Eusebius selbst das Schlüsselwort „homoousios" (wesensgleich) und verbannte die Abweichler. Dieses Wort ist unbiblisch, stammt aus der griechischen Philosophie und war 268 von einer Synode in Antiochien sogar abgelehnt worden. Über den Heiligen Geist sagte Nizäa nur „und an den Heiligen Geist" – seine Gottheit wurde erst 381 in Konstantinopel festgelegt. Nach Nizäa war die Kirche jahrzehntelang mehrheitlich arianisch; Hieronymus schrieb, „die ganze Welt seufzte und wunderte sich, dass sie arianisch war". Die Trinität ist also das Ergebnis von Kirchenpolitik, kaiserlicher Macht und platonischer Philosophie im 4. Jahrhundert.`,
  biblical: {
    summary: `Das Neue Testament enthält nicht das Wort „Trinität", aber alle Bausteine der Lehre: Es gibt nur einen Gott (Mk 12,29; 1 Kor 8,4); der Vater ist Gott; Jesus wird Gott genannt (Joh 1,1; 20,28; Röm 9,5; Tit 2,13; Hebr 1,8), als Schöpfer bezeugt (Joh 1,3; Kol 1,16; Hebr 1,10) und angebetet (Mt 28,17; Hebr 1,6; Offb 5,13–14); der Heilige Geist ist personal und göttlich (Apg 5,3–4; 1 Kor 2,10–11; 12,11); Vater, Sohn und Geist stehen gemeinsam in Taufbefehl und Segen (Mt 28,19; 2 Kor 13,13). Das Konzil von Nizäa hat diese biblische Lehre nicht erfunden, sondern gegen eine neue Bestreitung – den Arianismus ab etwa 318 – mit präzisen Worten abgegrenzt.`,
    detail: `**Frühe hohe Christologie im Neuen Testament:**
- Phil 2,6–11 (ein Hymnus, den Paulus um 55–60 n. Chr. zitiert): Christus war „in Gestalt Gottes", erniedrigte sich und erhält den „Namen über allen Namen"; „jedes Knie soll sich beugen" – ein Zitat aus Jes 45,23, wo JHWH spricht.
- 1 Kor 8,6 (um 54 n. Chr.): Paulus formt das Schma um – „ein Gott, der Vater … und ein Herr, Jesus Christus, durch den alle Dinge sind".
- 1 Kor 16,22: „Marana tha" – ein aramäisches Gebet „Unser Herr, komm!" aus der jüdisch-palästinischen Urgemeinde.
- Joh 1,1.18; 20,28: Der Logos „war Gott"; Thomas bekennt: „Mein Herr und mein Gott!"
- Hebr 1,8–12: Der Sohn wird mit Ps 45 als „Gott" angeredet und mit Ps 102 als Schöpfer von Himmel und Erde.
- Mt 28,19: Taufe „auf den Namen (Singular) des Vaters und des Sohnes und des Heiligen Geistes".

Diese Texte sind zweihundertfünfzig Jahre älter als Nizäa.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,1–3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. Dasselbe war im Anfang bei Gott. Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,28', quote: `Thomas antwortete und sprach zu ihm: Mein Herr und mein Gott!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,9–11', quote: `Darum hat ihn auch Gott erhöht und hat ihm einen Namen gegeben, der über alle Namen ist, daß in dem Namen Jesu sich beugen sollen aller derer Kniee, die im Himmel und auf Erden und unter der Erde sind, und alle Zungen bekennen sollen, daß Jesus Christus der HERR sei, zur Ehre Gottes, des Vaters.`, translation: 'Luther 1912', status: 'verbatim', note: 'Vgl. Jes 45,23: „Mir sollen sich alle Knie beugen und alle Zungen schwören" – dort spricht JHWH.' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,8.10', quote: `Aber von dem Sohn: „Dein Thron, o Gott, währt von Ewigkeit zu Ewigkeit" … und: „Du, Herr, hast im Anfang die Erde gegründet, und die Himmel sind deiner Hände Werk."`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '13,13', quote: `Die Gnade unsers Herrn Jesu Christi und die Liebe Gottes und die Gemeinschaft des heiligen Geistes sei mit euch allen!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,3–4', quote: `Hananias, warum hat der Satan dein Herz erfüllt, dass du den Heiligen Geist belogen hast? … Du hast nicht Menschen belogen, sondern Gott.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist Nizäa ein alexandrinisches Ereignis: Papst Alexander von Alexandrien erkannte als Erster die Tragweite der Lehre seines Presbyters Arius, der lehrte, der Sohn sei ein Geschöpf und „es gab, als er nicht war". Alexander exkommunizierte ihn um 318–320 auf einer Synode in Alexandrien – Jahre, bevor der Kaiser eingriff. Sein Diakon Athanasius, später der 20. Papst von Alexandrien, verteidigte den Glauben von Nizäa ein halbes Jahrhundert lang und wurde dafür fünfmal verbannt – meist von Kaisern, die mit den Arianern sympathisierten. Die Kirche feiert die „318 Väter von Nizäa" und betet ihr Bekenntnis in jeder Liturgie.`,
    detail: `Athanasius erklärt in „Über die Beschlüsse der Synode von Nizäa", warum das Konzil das unbiblische Wort „homoousios" wählte: Die Bischöfe wollten zuerst biblische Ausdrücke verwenden – der Sohn sei „aus Gott", „Bild", „Kraft" Gottes –, doch die Arianer deuteten jeden dieser Ausdrücke so um, dass er auch auf Geschöpfe passte („auch wir sind aus Gott", 1 Kor 8,6; 11,12). Darum sagte das Konzil „aus dem Wesen des Vaters" und „wesensgleich" – um den biblischen Sinn zu schützen. Für Athanasius steht dabei das Heil auf dem Spiel: Ein Geschöpf kann uns nicht mit Gott vereinen; nur wenn der Sohn wahrer Gott ist, werden wir in ihm Gottes teilhaftig („Er wurde Mensch, damit wir vergöttlicht würden", De Inc. 54). Und wenn der Sohn ein Geschöpf wäre, wäre seine Anbetung Götzendienst.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis des Konzils von Nizäa', year: '325', quote: `… und an den einen Herrn Jesus Christus, den Sohn Gottes, als Einziggeborenen aus dem Vater gezeugt, das heißt aus dem Wesen des Vaters, Gott aus Gott, Licht aus Licht, wahrer Gott aus wahrem Gott, gezeugt, nicht geschaffen, wesensgleich (homoousios) dem Vater … Die aber sagen: „Es gab, als er nicht war" und „bevor er gezeugt wurde, war er nicht" … die verdammt die katholische und apostolische Kirche.`, original: 'ὁμοούσιον τῷ πατρί', translation: 'eigene Übersetzung aus dem Griechischen (gekürzt)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Beschlüsse der Synode von Nizäa (De decretis Nicaenae synodi)', ref: '19–20', year: 'um 350–356', status: 'paraphrase', quote: `Die Bischöfe wollten biblische Ausdrücke gebrauchen; als sie sahen, dass die Arianer jeden davon umdeuteten, sahen sie sich gezwungen, deutlicher zu sagen: „aus dem Wesen" und „wesensgleich".` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'ca. 318', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: 'αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', status: 'verbatim', translation: 'eigene Übersetzung aus dem Griechischen' },
    ],
  },
  opposingView: {
    summary: `Die historische Forschung ist sich einig, dass die **Terminologie** der Trinitätslehre (homoousios, Hypostase, Usia) im 4. Jahrhundert geklärt wurde und dass die Jahre zwischen 325 und 381 von heftigen Kontroversen geprägt waren (Lewis Ayres, Nicaea and Its Legacy, 2004). Ebenso besteht breiter Konsens, dass die **Verehrung Jesu als göttlich** nicht im 4. Jahrhundert begann, sondern in den ersten Jahrzehnten nach Jesu Tod in jüdisch-christlichen Gemeinden (Larry Hurtado, Richard Bauckham; in anderer Deutung auch Bart Ehrman, der die frühe Erhöhungschristologie betont und einräumt, dass Paulus Jesus bereits als präexistentes göttliches Wesen verstand). Die populäre Behauptung, Nizäa habe in knapper Abstimmung über die Gottheit Jesu entschieden oder den Bibelkanon festgelegt, wird von keinem Fachhistoriker vertreten.`,
    detail: `**Fakten zu Nizäa:** Teilnehmerzahl nach Eusebius über 250, nach Athanasius rund 300 (die Tradition spricht von 318); nur zwei Bischöfe – Secundus von Ptolemais und Theonas von Marmarica – verweigerten mit Arius die Unterschrift. Streitpunkt war nicht, **ob** Jesus göttlich ist (auch Arius nannte ihn in abgeleitetem Sinn „Gott"), sondern ob er ewiger, wahrer Gott oder das erste und höchste Geschöpf ist. Ehrlich festzuhalten ist auch: Nach dem Brief des Eusebius an seine Gemeinde hat Konstantin selbst das Wort „homoousios" empfohlen; die Synode von Antiochien (268) hatte das Wort im Zusammenhang mit Paul von Samosata abgelehnt; und nach 325 begünstigten mehrere Kaiser die arianische Partei, bis sich der nizänische Glaube 381 durchsetzte.`,
    sources: [
      { kind: 'fachliteratur', author: 'Lewis Ayres', work: 'Nicaea and Its Legacy: An Approach to Fourth-Century Trinitarian Theology', year: '2004', status: 'paraphrase', quote: `Die nizänische Theologie war kein kaiserliches Diktat, sondern das Ergebnis einer jahrzehntelangen theologischen Auseinandersetzung, in der sich bis 381 eine „pro-nizänische" Synthese herausbildete.` },
      { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase', quote: `Die kultische Verehrung Jesu neben Gott trat explosionsartig in den ersten Jahren in jüdisch geprägten Gemeinden auf.` },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', status: 'paraphrase', quote: `Schon Paulus verstand Jesus als ein präexistentes, engelgleiches göttliches Wesen, das Mensch wurde und erhöht wurde.`, note: 'Ehrman ist Agnostiker; dass er eine so frühe hohe Christologie einräumt, widerlegt die Nizäa-These, auch wenn er die Entwicklung anders deutet.' },
      { kind: 'gegner', author: 'Dan Brown', work: 'The Da Vinci Code', year: '2003', status: 'paraphrase', quote: `Bis Nizäa hätten die Anhänger Jesu ihn als sterblichen Propheten gesehen; seine Gottheit sei dort „in einer relativ knappen Abstimmung" beschlossen worden.`, note: 'Romanfigur Teabing; historisch unhaltbar.' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Dialog gegen die Luziferianer (Altercatio Luciferiani et Orthodoxi)', ref: '19', year: 'um 379', quote: `Die ganze Welt seufzte und wunderte sich, dass sie arianisch war.`, original: 'ingemuit totus orbis et Arianum se esse miratus est', status: 'paraphrase', note: 'Bezieht sich auf die Synoden von Rimini und Seleukia 359, wo Bischöfe unter kaiserlichem Druck eine mehrdeutige Formel unterschrieben.' },
    ],
  },
  quickAnswer: `Nizäa hat die Trinität nicht erfunden, sondern gegen eine neue Irrlehre verteidigt. Schon das Neue Testament nennt Jesus Gott (Joh 1,1; 20,28), lässt ihn anbeten und tauft auf „den Namen des Vaters und des Sohnes und des Heiligen Geistes" (Mt 28,19). Um 110 nennt Ignatius ihn „unseren Gott Jesus Christus", um 112 berichtet der Heide Plinius, Christen sängen „Christus wie einem Gott" Lieder, um 180 spricht Theophilus von der „Trias", um 213 Tertullian von der „trinitas". In Nizäa verweigerten von rund 300 Bischöfen nur zwei die Unterschrift. Neu war 318 nicht die Trinität, sondern die Lehre des Arius, der Sohn sei ein Geschöpf.`,
  keyPoints: [
    `**Das Neue Testament** enthält alle Bausteine: ein Gott; Jesus Gott genannt, Schöpfer, angebetet; der Geist personal und göttlich; Vater, Sohn und Geist in Taufe und Segen.`,
    `**Zeugen vor 325:** Plinius (um 112), Ignatius (um 110), Didache, Justin (um 155), Athenagoras (um 177), Theophilus („Trias", um 180), Irenäus, Tertullian („trinitas", um 213), Origenes, Dionysius von Alexandrien und Rom (um 260).`,
    `**Nizäa entschied nicht über die Gottheit Jesu überhaupt**, sondern ob er ewiger Gott oder höchstes Geschöpf ist – und nur zwei von rund 300 Bischöfen stimmten dagegen.`,
    `**Der Konflikt begann in Alexandrien** (Alexander gegen Arius, um 318), nicht beim Kaiser; nach 325 begünstigten Kaiser sogar die Arianer – und der nizänische Glaube setzte sich trotzdem durch.`,
    `**Homoousios** wurde gewählt, weil die Arianer alle biblischen Ausdrücke umdeuteten (Athanasius, De decretis 19–20).`,
    `**Ehrlich:** Die Fachbegriffe wurden im 4. Jahrhundert präzisiert, manche vornizänische Väter formulierten unterordnend – das zeigt die Entfaltung der Sprache, nicht die Erfindung des Glaubens.`,
  ],
  argument: {
    name: 'Das Argument der vornizänischen Zeugen',
    summary: 'Wenn Trinitätsglaube und Anbetung Jesu lange vor 325 bezeugt sind, kann Nizäa sie nicht erfunden haben.',
    premises: [
      {
        text: 'P1: Wenn die Trinität 325 erfunden wurde, dann haben Christen vor 325 Jesus nicht als Gott verehrt und Vater, Sohn und Geist nicht gemeinsam als den einen Gott in Taufe und Gottesdienst bekannt.',
        support: 'Das ist der Inhalt der Behauptung; eine „Erfindung" setzt voraus, dass es das Erfundene vorher nicht gab.',
      },
      {
        text: 'P2: Christen haben vor 325 Jesus nachweislich als Gott verehrt.',
        support: 'Neues Testament (Joh 1,1; 20,28; Phil 2,6–11; Hebr 1,8), Ignatius (um 110), Plinius (um 112), 2. Klemensbrief, Justin, Melito, Irenäus, Tertullian, Origenes.',
        sources: [
          { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe (Epistulae)', ref: '10,96,7', year: 'um 112', quote: `Sie versicherten, ihre ganze Schuld oder ihr Irrtum habe darin bestanden, dass sie sich an einem festgesetzten Tag vor Sonnenaufgang zu versammeln pflegten und Christus wie einem Gott im Wechsel ein Lied sangen.`, original: 'quod essent soliti stato die ante lucem convenire, carmenque Christo quasi deo dicere secum invicem', translation: 'eigene Übersetzung aus dem Lateinischen', status: 'verbatim', note: 'Bericht des römischen Statthalters von Bithynien an Kaiser Trajan – ein heidnischer Zeuge.' },
          { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '7,2', year: 'um 110', quote: `Ein Arzt ist es, fleischlich und geistlich, gezeugt und ungezeugt, im Fleisch erschienener Gott, im Tod wahres Leben, aus Maria und aus Gott, zuerst leidensfähig und dann leidensunfähig: Jesus Christus, unser Herr.`, original: 'εἷς ἰατρός ἐστιν, σαρκικός τε καὶ πνευματικός, γεννητὸς καὶ ἀγέννητος, ἐν σαρκὶ γενόμενος θεός', translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
        ],
      },
      {
        text: 'P3: Christen haben vor 325 Vater, Sohn und Heiligen Geist gemeinsam in Taufe, Gebet und Bekenntnis genannt und dafür bereits Begriffe wie „Trias" und „trinitas" geprägt.',
        support: 'Mt 28,19; Didache 7; Martyrium des Polykarp 14,3; Justin, 1. Apologie 61; 67; Athenagoras, Bittschrift 10; Theophilus, An Autolykos II,15; Irenäus, Gegen die Häresien I,10,1; Tertullian, Gegen Praxeas 2–3.',
        sources: [
          { kind: 'kirchenvater', author: 'Theophilus von Antiochien', work: 'An Autolykos', ref: 'II,15', year: 'um 180', quote: `Die drei Tage vor der Erschaffung der Lichter sind Bilder der Trias: Gottes, seines Wortes und seiner Weisheit.`, original: 'τύποι εἰσὶν τῆς τριάδος, τοῦ θεοῦ καὶ τοῦ λόγου αὐτοῦ καὶ τῆς σοφίας αὐτοῦ', status: 'paraphrase', note: 'Ältester Beleg des griechischen Wortes „Trias" für Gott.' },
          { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Bittschrift für die Christen (Legatio pro Christianis)', ref: '10', year: 'um 177', quote: `Wer würde sich nicht wundern, wenn er hört, dass man Menschen Atheisten nennt, die Gott den Vater, Gott den Sohn und den Heiligen Geist verkünden und ihre Macht in der Einheit und ihre Unterscheidung in der Ordnung aufzeigen?`, status: 'paraphrase' },
        ],
      },
    ],
    inferences: [
      'Aus P2 und P3 folgt, dass das Nachsatzglied von P1 falsch ist.',
      'Also ist die Behauptung, die Trinität sei 325 erfunden worden, falsch (Modus tollens).',
    ],
    conclusion: 'Nizäa hat den seit der Apostelzeit gelebten Glauben gegen die arianische Neuerung mit präziser Sprache definiert – nicht erfunden.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als Verteidiger von Nizäa',
      text: `Athanasius sieht in Arius den Neuerer: Die Kirche habe den Sohn immer als ewig beim Vater, als dessen Wort und Weisheit angebetet; Arius dagegen führe mit „es gab, als er nicht war" etwas ein, was keiner der Väter gelehrt habe. Sein stärkstes Argument ist soteriologisch und liturgisch: Ein Geschöpf kann uns nicht vergöttlichen und darf nicht angebetet werden. Wenn die Kirche Christus seit jeher anbetet und auf seinen Namen tauft, dann ist er entweder Gott – oder die ganze Kirche hätte von Anfang an Götzendienst getrieben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Orationes contra Arianos)', ref: 'I,5–9; II,70', year: 'um 339–345', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Beschlüsse der Synode von Nizäa', year: 'um 350–356', status: 'paraphrase' },
      ],
    },
    {
      person: 'alexander-alexandrien',
      role: 'als Papst von Alexandrien, der Arius zuerst entgegentrat',
      text: `Alexander beschreibt in seinen Rundschreiben die Lehre des Arius als etwas Neues und Unerhörtes: dass Gott nicht immer Vater gewesen sei, dass der Sohn aus dem Nichts geworden und wandelbar sei. Er hält dagegen, dass der Sohn immer beim Vater ist, „immer Gott, immer Sohn", und beruft sich auf Joh 1,1–3 und Joh 10,30. Seine Synode in Alexandrien verurteilte Arius, lange bevor Kaiser Konstantin sich einschaltete – der Streit war ein kirchlicher, kein kaiserlicher.`,
      sources: [
        { kind: 'kirchenvater', author: 'Alexander von Alexandrien', work: 'Rundschreiben „Henos sōmatos" (überliefert bei Sokrates, Kirchengeschichte I,6)', year: 'um 319–324', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Alexander von Alexandrien', work: 'Brief an Alexander von Thessalonike (überliefert bei Theodoret, Kirchengeschichte I,4)', year: 'um 324', status: 'paraphrase' },
      ],
    },
    {
      person: 'ignatius-antiochien',
      role: 'als Bischof und Märtyrer um 110',
      text: `Ignatius schrieb auf dem Weg zu seinem Martyrium in Rom sieben Briefe – über zweihundert Jahre vor Nizäa. Er nennt Jesus wiederholt „unseren Gott", spricht vom „im Fleisch erschienenen Gott", vom „Blut Gottes" und vom Sohn, dem Vater und dem Geist. Seine Sprache ist nicht die eines theologischen Systems, sondern die eines Glaubens, der Christus als Gott anbetet und zugleich vom Vater unterscheidet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Briefe an die Epheser (Prolog; 1,1; 7,2; 18,2), an die Römer (Prolog), an die Magnesier (13)', year: 'um 110', status: 'paraphrase' },
      ],
    },
    {
      person: 'athenagoras',
      role: 'als Apologet vor Kaiser Mark Aurel',
      text: `Athenagoras verteidigt die Christen um 177 gegen den Vorwurf des Atheismus. Er erklärt dem Kaiser, Christen verehrten einen Gott und mit ihm den Sohn als dessen Wort und den Heiligen Geist – „ihre Macht in der Einheit, ihre Unterscheidung in der Ordnung". Das ist eine Formel, die in der Sache vorwegnimmt, was Nizäa und Konstantinopel später mit Fachbegriffen sagen – anderthalb Jahrhunderte vor Konstantin.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athenagoras von Athen', work: 'Bittschrift für die Christen (Legatio pro Christianis)', ref: '10; 12; 24', year: 'um 177', status: 'paraphrase' },
      ],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühesten Christusverehrung',
      text: `Hurtado zeigt, dass die Verehrung Jesu kein langsamer Prozess war, an dessen Ende Nizäa stand, sondern ein frühes „Urknall"-Phänomen: Gebete an Jesus und im Namen Jesu, Hymnen auf ihn, Taufe auf seinen Namen, das Herrenmahl, das Bekenntnis „Jesus ist Herr" und das Anrufen seines Namens – alles in den ersten zwei Jahrzehnten und in jüdischen Kreisen, die jede Verehrung anderer Wesen neben Gott ablehnten. Die späteren Konzilien formulierten, was diese Frömmigkeit schon voraussetzte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'How on Earth Did Jesus Become a God?', year: '2005', status: 'paraphrase' },
      ],
    },
    {
      person: 'lewis-ayres',
      role: 'als Historiker des 4. Jahrhunderts',
      text: `Ayres warnt vor zwei Vereinfachungen: Nizäa war weder ein kaiserliches Diktat noch das sofortige Ende des Streits. Das Konzil von 325 stellte eine Grenzmarke gegen Arius auf; die genauere Sprache von einem Wesen und drei Hypostasen entwickelte sich in den folgenden Jahrzehnten durch Athanasius und die kappadokischen Väter. Gerade diese lange, offene Debatte zeigt, dass der nizänische Glaube nicht von oben verordnet wurde, sondern sich theologisch durchsetzte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Lewis Ayres', work: 'Nicaea and Its Legacy', year: '2004', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'da-vinci-abstimmung',
      objection: `Vor Nizäa galt Jesus als sterblicher Prophet. Konstantin ließ abstimmen, und die Gottheit Jesu wurde knapp beschlossen. Seitdem gibt es die Trinität.`,
      objectionBy: 'Dan Brown (populäre Fassung)',
      answer: `Das ist in jedem Punkt historisch falsch. Erstens wurde Jesus lange vorher als Gott angebetet – im Neuen Testament, bei Ignatius um 110, sogar nach dem Bericht des Heiden Plinius um 112. Zweitens war die Abstimmung nicht knapp: Von rund 300 Bischöfen verweigerten nur zwei die Unterschrift. Drittens ging der Streit nicht darum, ob Jesus göttlich ist – auch Arius nannte ihn „Gott" in einem abgeleiteten Sinn –, sondern ob er ewiger Gott oder das erste Geschöpf ist.`,
      questionsBack: [
        `Kannst du einen einzigen Historiker nennen, der eine „knappe Abstimmung" in Nizäa vertritt?`,
      ],
      followUps: [
        {
          id: 'konstantin-zwang',
          objection: `Gut, die Abstimmung war nicht knapp. Aber Konstantin, ein ungetaufter Politiker, berief das Konzil, schlug „homoousios" nach Eusebius selbst vor und verbannte die Abweichler. Das war politischer Zwang, keine freie Entscheidung.`,
          objectionBy: 'Anthony Buzzard',
          answer: `Das gestehe ich zu: Konstantin berief das Konzil, empfahl nach Eusebius das Wort und verbannte Arius. Aber der Streit begann um 318 in Alexandrien zwischen Papst Alexander und Arius – bevor der Kaiser beteiligt war –, und der Inhalt von Nizäa war die alexandrinische Überlieferung. Vor allem: Die Kaiser nach Konstantin (besonders Constantius II. und Valens) begünstigten die Arianer; Athanasius wurde fünfmal verbannt. Wenn Kaiser die Lehre bestimmt hätten, hätte der Arianismus gesiegt. Der nizänische Glaube setzte sich **gegen** kaiserliche Macht durch.`,
          followUps: [
            {
              id: 'welt-arianisch',
              objection: `Eben – nach Nizäa war die Mehrheit arianisch. Hieronymus schrieb: „Die ganze Welt seufzte und wunderte sich, dass sie arianisch war." Nizäa gab also nicht den Glauben der Kirche wieder.`,
              objectionBy: 'Dale Tuggy',
              answer: `Hieronymus spricht von den Synoden von Rimini und Seleukia 359, wo Bischöfe unter kaiserlichem Druck eine mehrdeutige Formel unterschrieben. Sie „seufzten", weil sie sich getäuscht fühlten – nicht, weil sie Arianer geworden wären. Viele der damaligen Gegner des Wortes „homoousios" waren keine Arianer, sondern scheuten ein Wort, das sie für modalistisch hielten; Athanasius selbst nannte sie Brüder. Bis 381 fand die Kirche wieder zusammen – auf der Grundlage von Nizäa.`,
              followUps: [
                {
                  id: 'menschliche-entwicklung',
                  objection: `Dann hat sich die Lehre zwischen 325 und 381 weiterentwickelt. Also ist sie ein Produkt menschlicher Debatten, keine göttliche Offenbarung.`,
                  objectionBy: 'Dale Tuggy',
                  answer: `Man muss Offenbarung und Formulierung unterscheiden. Offenbart ist, was die Schrift bezeugt: ein Gott, der Vater, der Sohn, der Geist, Jesus als angebeteter Herr. Formuliert wurden die Worte, die diesen Glauben gegen Missdeutungen schützen. Das Gegenstück entwickelt sich nicht – die Sprache darüber wird genauer, wie in jeder Wissenschaft. Judas spricht vom Glauben, „der ein für alle Mal den Heiligen überliefert ist" (Jud 3); die Konzilien haben ihn erklärt, nicht ergänzt.`,
                  followUps: [
                    {
                      id: 'christ-im-jahr-100',
                      objection: `Dann gib zu: Ein Christ im Jahr 100 hätte das Nizänum nicht verstanden.`,
                      objectionBy: 'Anthony Buzzard',
                      answer: `Das Wort „homoousios" hätte er nicht gekannt – so wenig wie die meisten Christen heute. Aber den Inhalt hätte er wiedererkannt: Er war auf den Namen des Vaters, des Sohnes und des Heiligen Geistes getauft, sang Christus Lieder „wie einem Gott", betete „Marana tha – unser Herr, komm!" und bekannte „Jesus ist Herr" – mit Worten aus Joel 3,5, die dort JHWH meinen (Röm 10,9–13). Das Nizänum ist das erweiterte Taufbekenntnis dieser Christen.`,
                      questionsBack: [
                        `Was meinte ein jüdischer Christ, wenn er „Jesus ist Herr" bekannte und dabei Joel 3,5 zitierte, wo von JHWH die Rede ist?`,
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'plinius-quasi-deo',
          objection: `Plinius schreibt nur „quasi deo" – „wie einem Gott". Ein Heide beschreibt, was ihm wie Götterverehrung vorkam. Das ist kein Beweis für die Trinität.`,
          objectionBy: 'Dale Tuggy',
          answer: `Richtig, Plinius beweist nicht die Trinität – aber er beweist, dass Christen um 112 einem Gekreuzigten im Gottesdienst Hymnen sangen, wie man sie einem Gott singt. Das passt genau zu den Christushymnen des Neuen Testaments (Phil 2,6–11; Kol 1,15–20; Joh 1,1–18) und zu Ignatius' „unser Gott Jesus Christus". Der Heide bestätigt von außen, was die Christen von innen sagen – zweihundert Jahre vor Nizäa.`,
        },
      ],
    },
    {
      id: 'vaeter-subordinatianer',
      objection: `Die vornizänischen Väter widersprechen eurer Trinität: Justin nennt den Sohn „einen anderen Gott" unter dem Schöpfer (Dial. 56), Origenes einen „zweiten Gott", und Tertullian schreibt: „Es gab eine Zeit, da der Sohn nicht war" (Adv. Hermogenem 3).`,
      objectionBy: 'Dale Tuggy',
      answer: `Das ist richtig und ehrlich zuzugeben: Die Sprache vieler vornizänischer Väter ist ungenau und klingt unterordnend; Tertullian und Origenes sind für die koptische Kirche keine Lehrautoritäten. Aber was bekennen sie alle? Dass der Sohn göttlich ist, aus dem Wesen des Vaters stammt, angebetet wird und dass durch ihn alles geschaffen wurde. Origenes lehrt sogar ausdrücklich die ewige Zeugung – „es gab keine Zeit, da er nicht war" –, also genau das Gegenteil von Arius. Die Unschärfen zeigen, warum Nizäa nötig war, nicht, dass die Väter Unitarier waren.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Gegen Hermogenes (Adversus Hermogenem)', ref: '3', year: 'um 200–206', quote: `Es gab aber eine Zeit, da ihm (Gott) der Sohn nicht war.`, original: 'fuit autem tempus, cum ei … filius non fuit', status: 'paraphrase', note: 'Ein echtes Problemzitat – offen zugeben. Tertullian wird in der koptischen Kirche nicht als Heiliger verehrt.' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Über die Prinzipien (De principiis)', ref: 'I,2,9; IV,4,1', year: 'um 220–230', quote: `Es gibt keinen Zeitpunkt, zu dem er nicht war.`, original: 'non est quando non fuerit', status: 'paraphrase', note: 'Origenes lehrt die ewige Zeugung des Sohnes – gegen die spätere arianische Formel.' },
      ],
      followUps: [
        {
          id: 'nur-noch-bibel',
          objection: `Wenn die Väter so widersprüchlich sind, kannst du dich nicht auf sie berufen. Dann bleibt nur die Bibel – und in der steht keine Trinität.`,
          objectionBy: 'Anthony Buzzard',
          answer: `Gern – zur Bibel: Der Logos „war Gott" und schuf alles (Joh 1,1–3); Thomas sagt zu Jesus: „Mein Herr und mein Gott!" (Joh 20,28); Hebr 1,10 wendet einen Psalm über JHWH als Schöpfer von Himmel und Erde auf den Sohn an (Ps 102,26); Phil 2,10–11 wendet Jes 45,23 auf Jesus an; der Geist kann belogen werden, und das heißt „Gott belügen" (Apg 5,3–4); getauft wird auf den einen Namen von Vater, Sohn und Geist (Mt 28,19). Die Väter sind Zeugen dafür, dass die Kirche die Bibel von Anfang an so las.`,
          followUps: [
            {
              id: 'thomas-ausruf',
              objection: `Joh 20,28 ist ein Ausruf des Staunens – wie „Oh mein Gott!" Thomas nennt Jesus nicht Gott.`,
              objectionBy: 'Anthony Buzzard',
              answer: `Für einen Juden des 1. Jahrhunderts wäre ein solcher Ausruf ein Missbrauch des Gottesnamens gewesen (Ex 20,7). Der Text sagt ausdrücklich: Thomas „sprach **zu ihm**" (eipen autō). Jesus weist ihn nicht zurecht, sondern lobt seinen Glauben (20,29), und unmittelbar danach nennt Johannes den Zweck seines Buches (20,31). Der Nominativ in Anrede ist im Griechischen üblich – vgl. Offb 4,11: „Würdig bist du, unser Herr und Gott."`,
              followUps: [
                {
                  id: 'theos-repraesentant',
                  objection: `Auch wenn Thomas Jesus „Gott" nennt: Mose heißt für den Pharao „Gott" (Ex 7,1), und Richter heißen „Götter" (Ps 82,6; Joh 10,34). „Theos" kann einen Repräsentanten Gottes meinen.`,
                  objectionBy: 'Anthony Buzzard',
                  answer: `Ex 7,1 ist ausdrücklich relativ: „Ich habe dich **für den Pharao** zum Gott gemacht." Die Richter in Ps 82 „werden sterben wie Menschen" (82,7). „Mein Herr und mein Gott" dagegen ist die Anrede an JHWH in Ps 35,23 (LXX: „mein Gott und mein Herr"). Johannes rahmt sein Evangelium bewusst: „Das Wort war Gott" (1,1), „der einzige Sohn, der Gott ist" (1,18), „mein Herr und mein Gott" (20,28). Kein bloßer Repräsentant erschafft alle Dinge (1,3).`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'homoousios-verurteilt',
      objection: `„Homoousios" ist ein unbiblischer philosophischer Begriff – und eine Synode in Antiochien hat ihn 268 sogar verurteilt. Nizäa hat einen verurteilten Ketzerbegriff zum Dogma gemacht.`,
      objectionBy: 'Dale Tuggy',
      answer: `Die Fakten stimmen: Das Wort steht nicht in der Bibel, und Antiochien lehnte es 268 ab – allerdings im Sinn des Paul von Samosata, wohl einer modalistischen oder materiellen Deutung. In Nizäa wollten die Bischöfe zuerst biblische Ausdrücke verwenden – „aus Gott", „Bild", „Kraft Gottes" –, aber die Arianer deuteten jeden davon um. Darum wählten sie ein Wort, das die arianische Lesart ausschloss (Athanasius, De decretis 19–20). Ein Wort wird nach seiner Bedeutung im Zusammenhang beurteilt.`,
      followUps: [
        {
          id: 'bei-biblischen-worten-bleiben',
          objection: `Dann hätten sie bei biblischen Worten bleiben sollen. Wer biblische Worte für ungenügend hält, stellt sich über die Bibel.`,
          objectionBy: 'Anthony Buzzard',
          answer: `Arius zitierte selbst biblische Worte: „Der HERR schuf mich am Anfang seiner Wege" (Spr 8,22 LXX), „Erstgeborener aller Schöpfung" (Kol 1,15). Wenn beide Seiten dieselben Worte in entgegengesetztem Sinn gebrauchen, entscheidet das Zitieren nichts. Auch du gebrauchst unbiblische Wörter – „Unitarier", „biblischer Unitarismus", „Bevollmächtigter". Klärende Begriffe stehen nicht über der Bibel, sondern schützen ihren Sinn.`,
          questionsBack: [
            `Wie hätte das Konzil mit rein biblischen Worten ausschließen sollen, dass der Sohn ein Geschöpf ist, wenn Arius jedes biblische Wort umdeutete?`,
          ],
        },
      ],
    },
    {
      id: 'geist-erst-381',
      objection: `Nizäa sagte über den Heiligen Geist nur: „und an den Heiligen Geist". Seine Gottheit wurde erst 381 beschlossen. Die Trinität ist also ein Produkt des späten 4. Jahrhunderts.`,
      objectionBy: 'Anthony Buzzard',
      answer: `Konstantinopel hat erklärt, nicht erfunden. Der Geist stand von Anfang an mit Vater und Sohn im Taufbefehl (Mt 28,19; Didache 7), im Segen (2 Kor 13,13) und in den Lobpreisungen – etwa im Martyrium des Polykarp um 155: „durch ihn sei dir mit ihm und dem Heiligen Geist die Ehre". Als in den 350er-Jahren Gruppen die Gottheit des Geistes bestritten, verteidigten Athanasius (Briefe an Serapion), Didymus der Blinde und Basilius sie aus Schrift und Gottesdienst.`,
      sources: [
        { kind: 'kirchenvater', work: 'Martyrium des Polykarp', ref: '14,3', year: 'um 155–160', quote: `Durch ihn sei dir mit ihm und dem Heiligen Geist Ehre jetzt und in die kommenden Ewigkeiten. Amen.`, status: 'paraphrase', note: 'Gebet des Polykarp vor seinem Tod.' },
      ],
      followUps: [
        {
          id: 'doxologie-keine-gleichheit',
          objection: `Gemeinsame Nennung beweist keine Gleichheit. Paulus nennt auch Engel neben Gott und Christus (1 Tim 5,21).`,
          objectionBy: 'Dale Tuggy',
          answer: `Nebeneinander genannt zu werden ist etwas anderes, als dass man auf jemandes Namen getauft wird. Niemand wird auf den Namen von Engeln getauft. Den Heiligen Geist zu belügen heißt, Gott zu belügen (Apg 5,3–4); der Geist erforscht „die Tiefen Gottes" wie der Geist eines Menschen dessen Inneres (1 Kor 2,10–11) und teilt Gaben zu, „wie er will" (1 Kor 12,11). Basilius folgert: Weil wir auf Vater, Sohn und Geist getauft werden, wird der Geist mit ihnen zusammen verherrlicht.`,
          voices: [
            {
              person: 'didymus',
              role: 'als alexandrinischer Lehrer über den Heiligen Geist',
              text: `Didymus der Blinde, Leiter der Katechetenschule von Alexandrien, zeigt aus der Schrift, dass der Heilige Geist heiligt, statt geheiligt zu werden, erfüllt, statt erfüllt zu werden, und in vielen Menschen zugleich wohnt – Eigenschaften, die kein Geschöpf hat. Darum gehört er nicht auf die Seite der Geschöpfe, sondern ist mit Vater und Sohn eines Wesens.`,
              sources: [
                { kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist (De Spiritu Sancto, in der lateinischen Übersetzung des Hieronymus)', year: 'um 360–370', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heidnische-triaden',
      objection: `Die Trinität stammt aus dem Heidentum – aus den Göttertriaden Ägyptens (Osiris, Isis, Horus) und aus der platonischen Philosophie.`,
      objectionBy: 'Wachtturm-Gesellschaft',
      answer: `Heidnische Triaden sind drei verschiedene Götter, meist eine Götterfamilie – genau das, was die Trinitätslehre ausschließt. Die neuplatonische Dreiheit (das Eine, der Geist, die Weltseele) ist eine abgestufte Hierarchie, in der das Spätere geringer ist als das Frühere – das ähnelt eher Arius als Nizäa. Zudem lebte Plotin im 3. Jahrhundert, nach dem Neuen Testament. Der christliche Glaube entstand aus der Hebräischen Bibel und dem Ereignis Christi: Jüdische Monotheisten begannen, Jesus anzubeten.`,
      followUps: [
        {
          id: 'alexandrien-platon',
          objection: `Aber gerade in Alexandrien – eurer Stadt – haben Origenes und andere Platon ins Christentum gemischt. Daher kommt die Trinität.`,
          objectionBy: 'Anthony Buzzard',
          answer: `Die Alexandriner gebrauchten philosophische Begriffe, und manche Spekulationen des Origenes wurden später verworfen – das gebe ich zu. Aber die nizänische Entscheidung ging gerade **gegen** das platonische Denken: Eine Philosophie der Stufen hätte einen geringeren, abgeleiteten Sohn bevorzugt – das war die Position des Arius. „Wesensgleich" sagt das Gegenteil. Die koptische Kirche folgte Athanasius, nicht den Spekulationen des Origenes.`,
          questionsBack: [
            `Wenn Platonismus die Quelle wäre – warum entschied Nizäa gegen eine abgestufte Gottheit, die zum Platonismus viel besser gepasst hätte?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Trinität 325 erfunden wurde – wie erklärst du Ignatius (um 110), Plinius (um 112), Athenagoras (um 177), Theophilus (um 180) und Tertullian (um 213)?`,
    `Wer war um 318 der Neuerer: Alexander von Alexandrien, der die ewige Gottheit des Sohnes lehrte, oder Arius, der sagte „es gab, als er nicht war"?`,
    `Wenn Kaiser die Lehre bestimmten – warum setzte sich Nizäa gegen die arianerfreundlichen Kaiser Constantius II. und Valens durch?`,
    `Auf wessen Namen wurdest du getauft – und warum steht in Mt 28,19 ein Name für drei?`,
    `Wenn Jesus nicht Gott ist – hat dann die Kirche von Anfang an Götzendienst getrieben, als sie ihn anbetete?`,
  ],
  avoid: [
    `Nicht mit 1 Joh 5,7 („Drei sind, die da zeugen im Himmel …") argumentieren. Dieses „Comma Johanneum" ist eine späte lateinische Ergänzung, die in allen frühen griechischen Handschriften fehlt.`,
    `Nicht behaupten, alle vornizänischen Väter hätten die Trinität in nizänischer Präzision gelehrt. Gegner kennen die Problemzitate (Justin, Origenes, Tertullian).`,
    `Nicht so tun, als habe Konstantin keinerlei Einfluss gehabt. Gib zu, was stimmt (Einberufung, Empfehlung von „homoousios", Verbannungen), und zeige dann, warum das die These nicht trägt.`,
    `Nicht behaupten, Nizäa habe den Bibelkanon festgelegt – das hat es nicht, und Gegner nutzen solche Fehler.`,
  ],
  concessions: [
    `Das Wort „Trinität" und die Fachbegriffe (homoousios, Hypostase) stehen nicht in der Bibel; sie wurden im 2. bis 4. Jahrhundert geprägt und präzisiert.`,
    `Manche vornizänische Väter formulierten unterordnend (Justin, Origenes, Tertullian).`,
    `Kaiser Konstantin hatte erheblichen Einfluss auf den Ablauf von Nizäa, und nach 325 war die Lage jahrzehntelang umstritten; die Gottheit des Geistes wurde erst 381 ausdrücklich definiert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Lewis Ayres', work: 'Nicaea and Its Legacy', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1: The Emergence of the Catholic Tradition (100–600)', year: '1971', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer; Über die Beschlüsse der Synode von Nizäa', year: '4. Jh.', status: 'paraphrase' },
    { kind: 'gegner', author: 'Anthony F. Buzzard, Charles F. Hunting', work: 'The Doctrine of the Trinity: Christianity\'s Self-Inflicted Wound', year: '1998', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Nizäa', 'Trinität', 'Arius', 'Athanasius', 'Konstantin', 'Homoousios', 'Kirchengeschichte'],
  related: [
    'antitrinitarier/jesus-nur-besonderer-mensch',
    'antitrinitarier/oneness-modalismus',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'neues-testament/kanon-von-konstantin',
    'kirchengeschichte-mythen/konstantin-verfaelschte',
    'zeugen-jehovas/joh-1-1-ein-gott',
  ],
};

export default claim;
