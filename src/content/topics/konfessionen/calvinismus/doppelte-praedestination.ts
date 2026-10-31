import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'doppelte-praedestination',
  title: `„Gott hat von Ewigkeit bestimmt, wer gerettet und wer verdammt wird."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio Christianae Religionis (1559) III,21–24' },
    { name: 'Westminster-Synode', role: 'Puritanische Theologenversammlung (1643–1653)', work: 'Westminster-Bekenntnis (1646/47) III,3–7' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Ligonier Ministries', work: 'Chosen by God (1986)' },
    { name: 'John Piper', role: 'Reformierter Baptistenprediger', work: 'Are There Two Wills in God? (1995)' },
    { name: 'James White', role: 'Reformierter Apologet', work: `The Potter's Freedom (2000)` },
  ],
  steelman: `Die Schrift beginnt nicht beim Menschen, sondern bei Gott. Er „wirkt alle Dinge nach dem Rat seines Willens" (Eph 1,11), er hat uns „erwählt, ehe der Welt Grund gelegt war" (Eph 1,4), und „es liegt nicht an jemandes Wollen oder Laufen, sondern an Gottes Erbarmen" (Röm 9,16). Wäre die Erwählung von einer vorhergesehenen Entscheidung des Menschen abhängig, dann wäre letztlich der Mensch der Herr seines Heils und Gott nur ein Zuschauer, der reagiert. Der gefallene Mensch ist aber geistlich tot (Eph 2,1) und kann von sich aus gar nicht zu Christus kommen (Joh 6,44). Wenn trotzdem einige glauben und andere nicht, dann liegt der Unterschied allein in Gottes freiem Erbarmen. Die Kehrseite ist ernst, aber ehrlich: Wen Gott nicht erwählt, den übergeht er und lässt ihn der gerechten Strafe für seine Sünde. Niemand hat Gnade verdient; dass Gott überhaupt irgendjemanden rettet, ist reines Wunder. Paulus sieht genau den Einwand „Ist Gott ungerecht?" voraus – und antwortet nicht mit dem freien Willen, sondern: „Wer bist du, Mensch, dass du mit Gott rechten willst?" (Röm 9,20). Nur die Prädestination lässt Gott ganz Gott sein und gibt dem Gläubigen absolute Heilsgewissheit.`,
  biblical: {
    summary: `Die Schrift lehrt eindeutig eine **Erwählung in Christus** (Eph 1,4) und Gottes Souveränität. Sie lehrt aber ebenso eindeutig, dass Gott **will, dass alle Menschen gerettet werden** (1 Tim 2,4; 2 Petr 3,9), **keinen Gefallen am Tod des Gottlosen** hat (Ez 18,23.32; 33,11), dass Christus **für alle** starb (1 Joh 2,2; 1 Tim 2,6) und dass Menschen Gottes Willen **wirksam widerstehen** können (Mt 23,37; Apg 7,51; Lk 7,30). Eine Verwerfung, die ohne Rücksicht auf Unglauben von Ewigkeit beschlossen wäre, kennt die Schrift nicht. Erwählung ist christozentrisch („in ihm"), geschieht nach Gottes **Vorherwissen** (Röm 8,29; 1 Petr 1,2) und ist mit der Einladung an alle verbunden.`,
    detail: `**Gottes allgemeiner Heilswille:** Die Texte sind auffällig universal formuliert: „alle Menschen" (1 Tim 2,4), „nicht, dass jemand verloren werde" (2 Petr 3,9), „die ganze Welt" (1 Joh 2,2). In Ez 18 und 33 schwört Gott bei seinem eigenen Leben („so wahr ich lebe"), dass er keinen Gefallen am Tod des Gottlosen hat – das betrifft gerade die, die tatsächlich verloren gehen könnten.

**Widerstand gegen Gottes Willen:** Jesus weint über Jerusalem: „Wie oft habe ich deine Kinder versammeln wollen … und ihr habt nicht gewollt!" (Mt 23,37). Hier steht Gottes Wollen gegen menschliches Nichtwollen – und das Nichtwollen setzt sich durch. Ebenso Apg 7,51 („ihr widerstrebt allezeit dem Heiligen Geist") und Lk 7,30 („verachteten Gottes Rat wider sich selbst").

**Erwählung nach Vorherwissen:** „Welche er zuvor ersehen hat, die hat er auch verordnet" (Röm 8,29); „erwählt nach der Vorsehung (*prognōsis*) Gottes des Vaters" (1 Petr 1,2). Die Väter lasen das so, dass Gott den freien Glauben vorausweiß, ohne ihn zu verursachen.

**Die ewige Strafe ist für den Teufel bereitet, nicht für Menschen:** Im Gericht sagt Christus zu den Gerechten: „Ererbet das Reich, das euch bereitet ist von Anbeginn der Welt" (Mt 25,34); zu den anderen aber: „das ewige Feuer, das bereitet ist dem Teufel und seinen Engeln" (Mt 25,41) – nicht „euch bereitet von Anbeginn". Die Asymmetrie ist bezeichnend.`,
    sources: [
      { kind: 'bibel', work: '1. Timotheus', ref: '2,4', quote: `welcher will, daß allen Menschen geholfen werde und sie zur Erkenntnis der Wahrheit kommen.`, translation: 'Luther 1912', status: 'verbatim', original: `ὃς πάντας ἀνθρώπους θέλει σωθῆναι` },
      { kind: 'bibel', work: '2. Petrus', ref: '3,9', quote: `Der HERR verzieht nicht die Verheißung, wie es etliche für einen Verzug achten; sondern er hat Geduld mit uns und will nicht, daß jemand verloren werde, sondern daß sich jedermann zur Buße kehre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hesekiel', ref: '33,11', quote: `So sprich zu ihnen: So wahr als ich lebe, spricht der Herr HERR, ich habe keinen Gefallen am Tode des Gottlosen, sondern daß sich der Gottlose bekehre von seinem Wesen und lebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '23,37', quote: `Jerusalem, Jerusalem, die du tötest die Propheten und steinigst, die zu dir gesandt sind! Wie oft habe ich deine Kinder versammeln wollen, wie eine Henne versammelt ihre Küchlein unter ihre Flügel; und ihr habt nicht gewollt!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,29', quote: `Denn welche er zuvor ersehen hat, die hat er auch verordnet, daß sie gleich sein sollten dem Ebenbilde seines Sohnes.`, translation: 'Luther 1912', status: 'verbatim', original: `ὅτι οὓς προέγνω, καὶ προώρισεν` },
      { kind: 'bibel', work: 'Matthäus', ref: '25,34.41', quote: `Ererbet das Reich, das euch bereitet ist von Anbeginn der Welt! … Gehet hin von mir, ihr Verfluchten, in das ewige Feuer, das bereitet ist dem Teufel und seinen Engeln!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt mit allen Vätern der ungeteilten Kirche: Gott weiß alles voraus, bestimmt aber nicht alles voraus. Er erwählt in Christus und schenkt die Gnade, ohne die niemand gerettet wird; aber er zwingt niemanden. Der Mensch kann die Gnade annehmen oder ablehnen (Synergie). Verdammnis ist nie von Gott gewollt, sondern Folge der freien Abwendung von ihm. Eine bedingungslose Vorherbestimmung zur Verdammnis wurde in der ganzen Ostkirche nie gelehrt.`,
    detail: `**Die Väter vor Augustinus** sind sich einig: Justin der Märtyrer (1 Apol. 43) wendet sich gegen den heidnischen Schicksalsglauben, weil sonst Lob und Tadel sinnlos wären. Irenäus von Lyon lehrt: Gott schuf den Menschen von Anfang an frei, damit er Gottes Willen aus eigenem Entschluss und nicht unter Zwang befolge (Adv. Haer. IV,37,1) – und zitiert dafür Mt 23,37. Origenes widmet sein ganzes Buch III von *De principiis* dem freien Willen und erklärt dort auch die Verstockung des Pharao. Athanasius beschreibt in *Contra Gentes* und *De Incarnatione*, wie der Mensch sich frei von Gott abwandte und wie der Logos kam, um das Bild zu erneuern.

**Die ägyptischen Wüstenväter:** Johannes Cassian überliefert in seiner 13. Unterredung (Abba Chairemon) die Lehre der Mönche Ägyptens: Gnade und freier Wille wirken zusammen; manchmal kommt Gott dem Willen zuvor, manchmal wartet er auf den ersten Anfang des guten Willens und stärkt ihn – immer aber gilt, dass alles Gute nur mit Gottes Gnade vollendet wird.

**Johannes von Damaskus** fasst die östliche Tradition zusammen: „Gott weiß alles voraus, aber er bestimmt nicht alles voraus" (Darlegung des orthodoxen Glaubens II,30). Er unterscheidet Gottes **vorausgehenden Willen** (er will, dass alle gerettet werden) und den **nachfolgenden Willen**, der die freie Ablehnung des Menschen respektiert und richtet.

**Koptische Lehre heute:** Papst Schenuda III. betont in seinen Schriften über das Heil, dass Gott jedem Menschen die Möglichkeit zur Umkehr gibt und dass das Heil Gabe Gottes ist, die der Mensch im Glauben, in der Taufe und im Leben der Buße annimmt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,37,1', year: 'um 180', quote: `Gott hat den Menschen von Anfang an frei geschaffen, mit eigener Macht, so dass er Gottes Weisungen freiwillig und nicht unter Zwang Gottes befolgt.`, status: 'paraphrase', note: 'Irenäus zitiert unmittelbar davor Mt 23,37 als Beleg.' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '43', year: 'um 155', quote: `Wenn alles nach Schicksal geschähe, läge überhaupt nichts in unserer Macht; Lohn und Strafe wären sinnlos.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens (Expositio fidei)', ref: 'II,30', year: '8. Jh.', quote: `Gott weiß alles voraus, aber er bestimmt nicht alles voraus.`, original: `Πάντα μὲν προγινώσκει ὁ Θεός, οὐ πάντα δὲ προορίζει.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes (Unterredungen)', ref: '13 (Abba Chairemon), bes. Kap. 8–12', year: 'um 426', quote: `Gnade und freier Wille wirken zusammen; Gott kommt dem Willen zuvor oder stärkt dessen ersten Anfang – das Gute wird aber nie ohne Gnade vollendet.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wir glauben mit dir: Ohne Gottes Gnade wird niemand gerettet, und Gott ist souverän. Aber die Schrift sagt ausdrücklich, dass Gott „will, dass alle Menschen gerettet werden" (1 Tim 2,4) und „keinen Gefallen am Tod des Gottlosen" hat (Ez 33,11). Jesus weinte über Jerusalem: „Ich habe gewollt – ihr habt nicht gewollt" (Mt 23,37). Gott weiß voraus, wer glauben wird, aber er bestimmt niemanden zur Verdammnis. So haben es alle Kirchenväter vor Augustinus gelehrt.`,
  keyPoints: [
    `**Gottes Heilswille ist universal:** 1 Tim 2,4; 2 Petr 3,9; Ez 18,23.32; 33,11 – Gott schwört bei seinem Leben, dass er den Tod des Gottlosen nicht will.`,
    `**Menschen können Gott wirksam widerstehen:** Mt 23,37; Apg 7,51; Lk 7,30. Das wäre unter einem unwiderstehlichen Dekret sinnlos.`,
    `**Erwählung ist „in Christus" und nach Vorherwissen:** Eph 1,4; Röm 8,29; 1 Petr 1,2 – Vorherwissen ist nicht Vorherbestimmung (Johannes von Damaskus).`,
    `**Die Hölle ist „dem Teufel bereitet"**, das Reich aber den Gerechten „von Anbeginn" (Mt 25,34.41) – Gott hat Menschen nicht zur Verdammnis geschaffen.`,
    `**Einmütige Väterlehre vor Augustinus:** Justin, Irenäus, Clemens, Origenes, Athanasius, Chrysostomus und die ägyptischen Wüstenväter (Cassian) lehren den freien Willen.`,
    `**Selbst der lateinische Westen** verwarf auf der Synode von Orange (529) die Vorherbestimmung zum Bösen mit dem Anathema; Calvin selbst nannte das Verwerfungsdekret „schauerlich" (Inst. III,23,7).`,
  ],
  argument: {
    name: 'Das Argument aus Gottes allgemeinem Heilswillen',
    summary: 'Wenn Gott alle retten will, kann er nicht zugleich einige von Ewigkeit zur Verdammnis bestimmt haben.',
    premises: [
      {
        text: 'P1: Gott will aufrichtig, dass alle Menschen gerettet werden.',
        support: `1 Tim 2,4 („alle Menschen"), 2 Petr 3,9 („nicht, daß jemand verloren werde"), Ez 18,23.32; 33,11 („so wahr ich lebe … keinen Gefallen am Tode des Gottlosen"), Mt 23,37. Die universalen Formulierungen sind vielfach und unabhängig voneinander bezeugt.`,
        sources: [
          { kind: 'bibel', work: 'Hesekiel', ref: '18,23', quote: `Meinst du, daß ich Gefallen habe am Tode des Gottlosen, spricht der Herr HERR, und nicht vielmehr, daß er sich bekehre von seinem Wesen und lebe?`, translation: 'Luther 1912', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Wer von Ewigkeit bedingungslos beschließt, bestimmten Menschen die zum Heil notwendige Gnade vorzuenthalten, will nicht aufrichtig, dass diese Menschen gerettet werden.',
        support: `Nach Calvin ist die Verwerfung „ewiger Ratschluss", durch den „den einen das ewige Leben, den anderen die ewige Verdammnis vorherbestimmt" wird (Inst. III,21,5). Wer jemandem das einzig mögliche Rettungsmittel absichtlich verweigert, kann nicht zugleich dessen Rettung wollen – sonst verliert das Wort „wollen" seinen Sinn.`,
        sources: [
          { kind: 'gegner', author: 'Johannes Calvin', work: 'Institutio Christianae Religionis', ref: 'III,21,5', year: '1559', quote: `Prädestination nennen wir Gottes ewigen Ratschluss, durch den er bei sich beschlossen hat, was nach seinem Willen aus jedem einzelnen Menschen werden soll. Denn nicht alle werden mit der gleichen Bestimmung erschaffen, sondern den einen wird das ewige Leben, den anderen die ewige Verdammnis vorherbestimmt.`, original: `Praedestinationem vocamus aeternum Dei decretum, quo apud se constitutum habuit quid de unoquoque homine fieri vellet. Non enim pari conditione creantur omnes; sed aliis vita aeterna, aliis damnatio aeterna praeordinatur.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P3: Gott ist wahrhaftig und widerspricht sich nicht.',
        support: `„Gott, der nicht lügt" (Tit 1,2); „er kann sich selbst nicht verleugnen" (2 Tim 2,13). Calvinisten bestreiten diese Prämisse nicht.`,
      },
    ],
    inferences: ['Aus P1 und P2: Gott hat nicht bedingungslos beschlossen, irgendjemandem die rettende Gnade vorzuenthalten.'],
    conclusion: 'Also gibt es keine bedingungslose, von Ewigkeit beschlossene Verwerfung zur Verdammnis. Wer verloren geht, geht verloren, weil er Gottes Gnade frei zurückweist (Mt 23,37; Joh 3,19).',
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Kirchenvater des 2. Jahrhunderts gegen gnostischen Determinismus',
      text: `Irenäus kämpfte gegen die Valentinianer, die lehrten, Menschen seien von Natur aus entweder „geistlich" (und damit sicher gerettet) oder „materiell" (und damit verloren). Dagegen betont er: Gott schuf den Menschen frei, damit er das Gute aus Liebe wählt. Wer gut ist, wird gelobt, weil er auch hätte anders handeln können; wer verloren geht, verdankt das nicht seiner Natur, sondern seiner Wahl. Als Beleg führt er Jesu Klage über Jerusalem an (Mt 23,37): Gottes Wollen trifft auf menschliches Nichtwollen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,37,1–4', status: 'paraphrase' }],
    },
    {
      person: 'johannes-cassian',
      role: 'als Zeuge der ägyptischen Wüstenväter',
      text: `Cassian, der viele Jahre unter den Mönchen der sketischen Wüste lebte, überliefert in der 13. Unterredung die Lehre des Abba Chairemon. Für die ägyptischen Väter ist es selbstverständlich, dass niemand ohne Gnade das Heil erlangt; aber ebenso selbstverständlich, dass Gott den freien Willen nicht aufhebt. Gott ruft, wirbt, kommt zuvor und stärkt – wie ein Arzt, der den Kranken heilt, ihn aber nicht gegen seinen Willen behandelt. Cassian schrieb dies um 426, also noch zu Lebzeiten Augustins, als bewusste Gegenstimme zur aufkommenden westlichen Prädestinationslehre.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: '13', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Menschwerdung',
      text: `Für Athanasius ist das ganze Drama der Erlösung ein Drama der Freiheit: Der Mensch war nach dem Bild des Logos geschaffen, wandte sich aber aus freien Stücken dem Vergänglichen zu. Es wäre „Gottes unwürdig" gewesen, sein Geschöpf zugrunde gehen zu lassen; deshalb wurde der Logos Mensch, um das Bild zu erneuern – für alle. Ein Gott, der einen Teil der Menschheit von vornherein dem Verderben bestimmt, passt nicht zu diesem Gott, dessen Güte der Grund der Inkarnation ist.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3–10', status: 'paraphrase' }],
    },
    {
      person: 'pelikan',
      role: 'als Dogmenhistoriker',
      text: `Pelikan zeigt in seiner Geschichte der christlichen Lehre, dass die griechische Theologie vor und nach Augustinus durchgängig die Freiheit des Menschen betonte – nicht aus philosophischem Optimismus, sondern im Kampf gegen heidnischen Fatalismus und gnostischen Dualismus. Die Lehre einer doppelten Prädestination gehört zur Sonderentwicklung des lateinischen Westens (Augustinus, Gottschalk im 9. Jahrhundert, dann Calvin) und wurde selbst dort immer wieder verworfen.`,
      sources: [{ kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1: The Emergence of the Catholic Tradition (100–600)', year: '1971', status: 'paraphrase' }],
    },
    {
      person: 'roger-olson',
      role: 'als evangelikaler Kritiker des Calvinismus',
      text: `Olson, selbst Baptist, argumentiert, dass der Calvinismus Gottes Güte unweigerlich beschädigt: Wenn Gott einen Teil der Menschheit bedingungslos übergeht, obwohl er sie retten könnte, ist schwer zu sagen, in welchem Sinn er sie liebt. Er betont, dass die Alternative nicht „Pelagianismus" ist: Arminianer und Orthodoxe lehren die zuvorkommende Gnade, ohne die niemand glauben kann – nur ist diese Gnade widerstehbar.`,
      sources: [{ kind: 'fachliteratur', author: 'Roger E. Olson', work: 'Against Calvinism', year: '2011', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'alle-heisst-alle-arten',
      objection: `„‚Alle Menschen' in 1 Tim 2,4 heißt ‚alle Arten von Menschen' – Könige und Untertanen, Juden und Heiden. Das sagt der Kontext: Paulus spricht in V. 2 von ‚Königen und aller Obrigkeit'."`,
      objectionBy: 'James White',
      targetsPremise: 1,
      answer: `Der Kontext spricht eher dagegen: Paulus fordert Gebete „für alle Menschen" (V. 1), weil Gott will, dass alle gerettet werden (V. 4), und Christus sich „für alle" gab (V. 6). Wenn wir für jeden einzelnen Menschen beten sollen, dann deshalb, weil Gott jeden retten will. Und selbst wenn man hier deutelt: 2 Petr 3,9 sagt „nicht, dass *jemand* verloren werde", Ez 33,11 spricht vom einzelnen Gottlosen. Die Universalität hängt nicht an einem einzigen Vers.`,
      detail: `Der Sprung von „alle" zu „alle Arten" ist grammatisch möglich, aber er muss begründet werden, nicht vorausgesetzt. In 1 Tim 2,1 sollen Christen beten „für alle Menschen" – kaum jemand meint, man solle nur für „einige aus jeder Gruppe" beten. In V. 5–6 steht der eine Mittler, „der sich selbst gegeben hat für alle zur Erlösung". Das Argument „alle Arten" muss in jedem dieser Verse und in 2 Petr 3,9, 1 Joh 2,2, Ez 18 und Mt 23,37 jeweils neu greifen – je mehr Texte man umdeuten muss, desto unwahrscheinlicher wird die Umdeutung.`,
      sources: [
        { kind: 'bibel', work: '1. Timotheus', ref: '2,1.5–6', quote: `So ermahne ich nun, daß man vor allen Dingen zuerst tue Bitte, Gebet, Fürbitte und Danksagung für alle Menschen … Denn es ist ein Gott und ein Mittler zwischen Gott und den Menschen, nämlich der Mensch Christus Jesus, der sich selbst gegeben hat für alle zur Erlösung.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Sollen wir für jeden einzelnen Menschen beten oder nur für Vertreter aller Gruppen?`, `Wenn „alle" in V. 1 jeden meint, warum sollte dasselbe Wort drei Verse später etwas anderes bedeuten?`],
      followUps: [
        {
          id: 'petrus-meint-die-erwaehlten',
          objection: `„2 Petr 3,9 sagt: Er hat Geduld ‚mit *uns*' – Petrus schreibt an die Erwählten (1,1). Gott will nicht, dass einer der Erwählten verloren geht."`,
          objectionBy: 'James White',
          targetsPremise: 1,
          answer: `Dann wäre der Satz eine Selbstverständlichkeit, denn nach calvinistischer Lehre *kann* kein Erwählter verloren gehen – warum dann Geduld? Der Kontext spricht von Spöttern, die die Wiederkunft leugnen (3,3–4), und Gott wartet, damit „jedermann zur Buße" kommt. Außerdem nennt Petrus kurz zuvor Irrlehrer, die „den HERRN verleugnen, der sie erkauft hat" (2,1) – Menschen, die verloren gehen, sind also von Christus erkauft.`,
          sources: [
            { kind: 'bibel', work: '2. Petrus', ref: '2,1', quote: `… die werden nebeneinführen verderbliche Sekten und verleugnen den HERRN, der sie erkauft hat, und werden über sich selbst herbeiführen eine schnelle Verdammnis.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'ezechiel-nur-israel',
              objection: `„Ezechiel spricht zu Israel über zeitliches Gericht und Exil, nicht über ewige Erwählung. Du reißt den Vers aus dem Bund heraus."`,
              objectionBy: 'Reformierter Exeget',
              answer: `Ezechiel offenbart Gottes **Charakter**: „So wahr ich lebe, ich habe keinen Gefallen am Tode des Gottlosen" – ein Eid, der nicht vom Exil abhängt. Wenn Gott schon am zeitlichen Tod eines Sünders keinen Gefallen hat, wie viel weniger am ewigen. Und das Neue Testament wendet genau diesen Gedanken universal an (2 Petr 3,9 ist fast ein Echo von Ez 33,11).`,
              followUps: [
                {
                  id: 'richter-verurteilt-ungern',
                  objection: `„Gott kann am Tod des Gottlosen keinen Gefallen haben und ihn trotzdem beschließen – wie ein gerechter Richter, der ungern, aber pflichtgemäß verurteilt."`,
                  objectionBy: 'John Piper',
                  targetsPremise: 2,
                  answer: `Der Vergleich hinkt an der entscheidenden Stelle: Ein Richter verurteilt für Taten, die der Angeklagte frei begangen hat und hätte vermeiden können. Im calvinistischen System hat Gott aber von Ewigkeit beschlossen, dem Verworfenen die einzige Gnade vorzuenthalten, durch die er hätte umkehren können. Ein Richter, der selbst festlegt, dass der Angeklagte nicht anders kann, und ihn dann „ungern" verurteilt, ist kein Bild für den Gott von Ez 33,11.`,
                  detail: `Calvinisten antworten oft, der Verworfene werde nur für seine eigenen Sünden bestraft, nicht für das Dekret. Das stimmt formal. Aber die Frage ist nicht, ob die Strafe verdient ist, sondern ob Gottes Eid in Ez 33,11 aufrichtig ist, wenn er die Umkehr, die er angeblich wünscht, von Ewigkeit selbst unmöglich gemacht hat. Calvin räumt die Härte offen ein und nennt das Dekret „horribile" (Inst. III,23,7) – im Sinne von „schaudererregend".`,
                  sources: [
                    { kind: 'gegner', author: 'Johannes Calvin', work: 'Institutio Christianae Religionis', ref: 'III,23,7', year: '1559', quote: `Ein schauderhafter Ratschluss, ich gestehe es.`, original: `Decretum quidem horribile, fateor.`, translation: 'eigene Übersetzung', status: 'verbatim', note: `Ob „horribilis" hier „schrecklich" oder „ehrfurchtgebietend" bedeutet, ist unter Calvin-Forschern umstritten. Fair zitieren: Calvin hält das Dekret für gerecht, empfindet es aber selbst als erschütternd.` },
                  ],
                  questionsBack: [`Hätte der Verworfene nach deiner Lehre umkehren können, wenn er gewollt hätte – und konnte er überhaupt wollen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'zwei-willen-gottes',
          objection: `„Gott hat zwei Willen: einen offenbarten Willen (was er gebietet und wünscht) und einen verborgenen Ratschluss (was er beschließt). In 1 Tim 2,4 geht es um den offenbarten Willen."`,
          objectionBy: 'John Piper',
          targetsPremise: 2,
          answer: `Auch die Väter unterscheiden in Gottes Willen: Johannes von Damaskus spricht vom **vorausgehenden** Willen (Gott will, dass alle gerettet werden) und vom **nachfolgenden** Willen (Gott achtet die freie Ablehnung und richtet sie). Der Unterschied: Bei den Vätern widersprechen sich die beiden nicht – der zweite reagiert auf die menschliche Freiheit. Bei Piper beschließt Gott im Verborgenen das Gegenteil dessen, was er öffentlich ernsthaft anbietet. Das ist kein Geheimnis mehr, sondern ein Widerspruch in Gott.`,
          sources: [
            { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens', ref: 'II,29', status: 'paraphrase', quote: `Gottes vorausgehender Wille ist, dass alle gerettet werden; der nachfolgende Wille, der aus unserer Schuld folgt, lässt zu und straft.` },
            { kind: 'gegner', author: 'John Piper', work: 'Are There Two Wills in God?', year: '1995', status: 'paraphrase', note: 'Aufsatz in: T. Schreiner / B. Ware (Hg.), The Grace of God, the Bondage of the Will, Bd. 1.' },
          ],
          followUps: [
            {
              id: 'ihr-habt-dasselbe-problem',
              objection: `„Ihr habt dasselbe Problem! Gott weiß nach eurer Lehre voraus, wer verloren geht, und erschafft ihn trotzdem. Dann will er doch auch dessen Verdammnis."`,
              objectionBy: 'R. C. Sproul',
              answer: `Nein. Vorherwissen verursacht nichts: Dass ich weiß, dass die Sonne morgen aufgeht, lässt sie nicht aufgehen. Gott schafft freie Wesen, weil nur sie lieben können – und er sieht voraus, dass manche seine Liebe ablehnen. Er bestimmt die Ablehnung nicht und tut alles, um sie zu verhindern (Mt 23,37). Das ist etwas völlig anderes, als die Ablehnung selbst zu beschließen.`,
              detail: `Schon Origenes betont gegen Kelsos: Nicht weil etwas vorausgesagt ist, geschieht es, sondern weil es geschehen wird, wird es vorausgesagt (Contra Celsum II,20). Die Väter sehen in Gottes Vorherwissen kein Schicksal. Die verbleibende Frage („Warum erschafft Gott jemanden, von dem er weiß, dass er sich verweigert?") ist die allgemeine Theodizeefrage nach der Freiheit – sie trifft jede christliche Position, aber nur der Calvinismus fügt hinzu, dass Gott die Verweigerung selbst festgelegt hat.`,
              sources: [
                { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,20', status: 'paraphrase', quote: `Nicht das Vorherwissen ist die Ursache des Geschehens, sondern das künftige Geschehen ist der Grund des Vorherwissens.` },
              ],
              followUps: [
                {
                  id: 'vorherwissen-macht-sicher',
                  objection: `„Wenn Gott es sicher weiß, ist es festgelegt. Dann gibt es keinen echten Unterschied zwischen Vorherwissen und Vorherbestimmung."`,
                  objectionBy: 'Philosophisch argumentierender Calvinist',
                  answer: `Gewissheit ist nicht Notwendigkeit. Dass etwas *sicher* geschehen wird, heißt nicht, dass es *geschehen muss*. Gott steht nicht in der Zeit „vor" unseren Entscheidungen, sondern überschaut sie in seiner Ewigkeit – wie Boethius sagte: so, wie ich jemanden gehen sehe, ohne ihn zum Gehen zu zwingen. Das Wissen folgt der freien Tat, nicht umgekehrt.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Boethius', work: 'Der Trost der Philosophie (De consolatione philosophiae)', ref: 'V,6', year: 'um 524', status: 'paraphrase', quote: `Gottes Wissen ist ewige Gegenwart; sein Sehen legt den Dingen, die er sieht, keine Notwendigkeit auf.` },
                  ],
                  questionsBack: [`Wenn ich sehe, wie du dich gerade setzt – zwinge ich dich dann, dich zu setzen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-schuldet-keine-gnade',
      objection: `„Alle Menschen haben die Hölle verdient. Dass Gott überhaupt einige rettet, ist reine Gnade. Die anderen bekommen nur Gerechtigkeit. Niemand bekommt Ungerechtigkeit – also kann sich niemand beschweren."`,
      objectionBy: 'R. C. Sproul',
      answer: `Einverstanden: Niemand hat Anspruch auf Gnade. Aber die Frage ist nicht, was Gott uns schuldet, sondern was Gott **über sich selbst offenbart** hat: dass er die Liebe ist (1 Joh 4,8), dass er alle retten will (1 Tim 2,4) und dass Christus für die ganze Welt starb (1 Joh 2,2). Ein Vater, der zwei ertrinkende Kinder sieht, beide retten könnte und bewusst nur eines rettet, verletzt zwar keinen „Anspruch" – aber niemand würde ihn liebend nennen. Gott hat sich als Vater offenbart.`,
      questionsBack: [`Liebt Gott die Menschen, die er nach deiner Lehre übergeht – und wenn ja, in welchem Sinn?`, `Sagst du einem Ungläubigen ehrlich: „Gott liebt dich und Christus ist für dich gestorben"?`],
      followUps: [
        {
          id: 'wer-bist-du-mensch',
          objection: `„Genau diesen Einwand beantwortet Paulus: ‚Ja, lieber Mensch, wer bist du denn, dass du mit Gott rechten willst?' (Röm 9,20). Dein Gefühl ist nicht der Maßstab."`,
          objectionBy: 'James White',
          answer: `Paulus weist dort den Israeliten zurecht, der Gott das Recht absprechen will, Heiden aus Glauben anzunehmen und das ungläubige Israel zu verwerfen. Es geht um Gottes Freiheit, das Heil an den **Glauben** zu binden – genau das ist das Fazit des Kapitels (Röm 9,30–32). Und das Bild vom Töpfer stammt aus Jer 18, wo der Töpfer ausdrücklich je nach Umkehr des Volkes umformt.`,
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '9,30–32', quote: `Die Heiden, die nicht haben nach der Gerechtigkeit getrachtet, haben die Gerechtigkeit erlangt; ich sage aber von der Gerechtigkeit, die aus dem Glauben kommt. Israel aber hat dem Gesetz der Gerechtigkeit nachgetrachtet, und hat das Gesetz der Gerechtigkeit nicht erreicht. Warum das? Darum daß sie es nicht aus dem Glauben suchen, sondern als aus den Werken des Gesetzes.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'toepfer-und-ton',
              objection: `„Der Töpfer macht aus *demselben Klumpen* ein Gefäß zur Ehre und eins zur Unehre (Röm 9,21). Das ist doppelte Prädestination in Reinform."`,
              objectionBy: 'James White',
              answer: `Lies die Quelle, auf die Paulus anspielt: In Jer 18,1–10 formt der Töpfer das Gefäß um, wenn es missrät, und Gott erklärt: Kehrt sich ein Volk von seiner Bosheit ab, „so soll mich auch reuen das Unglück". Das Töpferbild beschreibt Gottes Recht, auf die Antwort des Menschen zu reagieren – nicht ein starres Dekret. Paulus selbst sagt in 2 Tim 2,21: „So nun jemand sich reinigt …, der wird ein geheiligtes Gefäß sein zu Ehren."`,
              sources: [
                { kind: 'bibel', work: 'Jeremia', ref: '18,6–8', quote: `Kann ich nicht also mit euch umgehen, ihr vom Hause Israel, wie dieser Töpfer? spricht der HERR. Siehe, wie der Ton ist in des Töpfers Hand, also seid auch ihr vom Hause Israel in meiner Hand. Plötzlich rede ich wider ein Volk und Königreich, daß ich's ausrotten, zerbrechen und verderben wolle; wo sich's aber bekehrt von seiner Bosheit, dawider ich rede, so soll mich auch reuen das Unglück, das ich ihm gedachte zu tun.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '2. Timotheus', ref: '2,20–21', quote: `In einem großen Hause aber sind nicht allein goldene und silberne Gefäße, sondern auch hölzerne und irdene, und etliche zu Ehren, etliche aber zu Unehren. So nun jemand sich reinigt von solchen Leuten, der wird ein geheiligtes Gefäß sein zu Ehren, dem Hausherrn bräuchlich und zu allem guten Werk bereitet.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'zugerichtet-ist-passiv',
                  objection: `„In Röm 9,22 heißt es: Gefäße des Zorns, ‚zugerichtet zur Verdammnis' (*katērtismena*). Das ist Passiv – Gott ist das logische Subjekt."`,
                  objectionBy: 'Thomas Schreiner',
                  answer: `Die Form kann Passiv oder Medium sein („die sich zugerichtet haben") – sie entscheidet die Frage nicht. Auffällig ist aber: Bei den Gefäßen der Barmherzigkeit sagt Paulus aktiv „die **er** zuvor bereitet hat" (V. 23), bei den Gefäßen des Zorns nennt er Gott gerade nicht als Urheber. Und er sagt, Gott habe sie „mit großer Geduld getragen" – Gottes Geduld aber, so Paulus selbst, „leitet zur Buße" (Röm 2,4).`,
                  detail: `Johannes Chrysostomus betont in seiner Homilie zu Röm 9, dass Paulus hier nicht die Willensfreiheit aufhebt, sondern einen anmaßenden Fragesteller zum Schweigen bringt; die Gefäße werden durch ihre eigene Bosheit zu Gefäßen des Zorns. Diese Auslegung ist in der Ostkirche Standard.`,
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '2,4', quote: `Oder verachtest du den Reichtum seiner Güte, Geduld und Langmütigkeit? Weißt du nicht, daß dich Gottes Güte zur Buße leitet?`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: 'Hom. 16 (zu Röm 9)', status: 'paraphrase' },
                  ],
                  questionsBack: [`Wozu dient Gottes „große Geduld" mit den Gefäßen des Zorns, wenn ihre Umkehr von Ewigkeit ausgeschlossen ist?`],
                },
              ],
            },
          ],
        },
        {
          id: 'verdammt-fuer-eigene-suende',
          objection: `„Die Verworfenen werden für ihre eigenen Sünden verdammt, die sie freiwillig begehen – nicht für das Dekret. Sie tun genau das, was sie wollen."`,
          objectionBy: 'Westminster-Bekenntnis / R. C. Sproul',
          answer: `„Sie tun, was sie wollen" – aber nach eurer Lehre hat Gott auch festgelegt, *was* sie wollen, und ihnen die Gnade verweigert, durch die sie anders wollen könnten. Calvin sagt selbst, der Sündenfall sei nicht nur vorausgesehen, sondern von Gott angeordnet worden (Inst. III,23,7–8). Dann wird die Rede von „freiwilliger" Sünde zu einem Wortspiel. Die Väter sagen klar: Gott ist nicht Urheber des Bösen.`,
          sources: [
            { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie „Dass Gott nicht Urheber des Bösen ist" (Quod Deus non est auctor malorum)', status: 'paraphrase', quote: `Das Böse hat seinen Ursprung im freien Willen der Geschöpfe, nicht in Gott.` },
            { kind: 'gegner', work: 'Westminster-Bekenntnis', ref: 'III,1', year: '1646/47', status: 'paraphrase', quote: `Gott hat von Ewigkeit alles, was geschieht, unveränderlich verordnet – jedoch so, dass Gott dadurch weder Urheber der Sünde ist noch dem Willen der Geschöpfe Gewalt angetan wird.`, note: 'Fair: Calvinisten bestreiten ausdrücklich, dass Gott Urheber der Sünde ist.' },
          ],
          followUps: [
            {
              id: 'das-ist-ein-geheimnis',
              objection: `„Wie Gottes Souveränität und menschliche Verantwortung zusammengehen, ist ein Geheimnis. Auch die Trinität ist ein Geheimnis – du akzeptierst sie doch auch."`,
              objectionBy: 'Reformierter Pastor',
              answer: `Ein Geheimnis übersteigt den Verstand, aber es widerspricht nicht dem, was Gott über sich offenbart hat. Die Trinität widerspricht keinem Bibelvers; sie fasst alle zusammen. Die doppelte Prädestination dagegen steht in Spannung zu ausdrücklichen Aussagen wie Ez 33,11 und 1 Tim 2,4. Wenn ein „Geheimnis" nur dazu dient, einen Widerspruch zu Gottes eigenem Wort zu überdecken, ist es kein Geheimnis mehr, sondern ein Notausgang.`,
              questionsBack: [`Welcher Bibelvers widerspricht der Trinität? Und welche widersprechen einer bedingungslosen Verwerfung?`],
            },
          ],
        },
      ],
    },
    {
      id: 'augustinus-lehrte-es',
      objection: `„Calvin hat nichts erfunden – er hat nur Augustinus wiederentdeckt, den größten Kirchenvater. Die Prädestination ist altkirchliche Lehre."`,
      objectionBy: 'Reformierter Kirchenhistoriker',
      answer: `Augustinus ist ein großer Vater, aber seine späte Prädestinationslehre (ab ca. 397, ausgebaut in den Schriften gegen die Pelagianer bis 429) war eine Sonderentwicklung. **Vor** ihm lehrten alle Väter – Justin, Irenäus, Clemens, Origenes, Athanasius, die Kappadokier, Chrysostomus – den freien Willen. Der Osten hat Augustins Prädestinationslehre nie übernommen, und schon zu seinen Lebzeiten widersprach Cassian im Namen der ägyptischen Mönche. Selbst die westliche Synode von Orange (529) verfluchte die Lehre einer Vorherbestimmung zum Bösen.`,
      detail: `Augustinus selbst hatte in seiner frühen Römerbrief-Auslegung (um 394) die Erwählung noch mit dem vorhergesehenen Glauben begründet und änderte seine Meinung erst in der Schrift an Simplicianus (396/397). Auch er lehrte übrigens nicht ausdrücklich eine *aktive* Vorherbestimmung zur Sünde, sondern ein Übergehen der „Masse der Verdammten". Die Synode von Orange (529) übernahm viel von Augustins Gnadenlehre, schloss aber mit dem Satz, dass man nicht nur nicht glaube, dass einige durch Gottes Macht zum Bösen vorherbestimmt seien, sondern solche, die dies glauben wollen, mit Abscheu verfluche. Im 9. Jahrhundert wurde der Mönch Gottschalk von Orbais für seine Lehre einer doppelten Prädestination auf Synoden in Mainz (848) und Quierzy (849) verurteilt.`,
      sources: [
        { kind: 'konzil', work: 'Synode von Orange (Arausicanum II)', ref: 'Schlussbekenntnis', year: '529', quote: `Dass aber einige durch göttliche Macht zum Bösen vorherbestimmt seien, glauben wir nicht nur nicht, sondern wenn es solche gibt, die so Böses glauben wollen, sprechen wir mit allem Abscheu das Anathema über sie.`, status: 'paraphrase', note: 'Regionalsynode in Gallien, für die koptische Kirche keine Autorität – aber ein starkes historisches Argument gegenüber Reformierten, die sich auf die westliche Tradition berufen.' },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'An Simplicianus (De diversis quaestionibus ad Simplicianum)', ref: 'I,2', year: '396/397', status: 'paraphrase', note: 'Wendepunkt in Augustins Gnadenlehre; vgl. seine eigene Rückschau in den Retractationes.' },
      ],
      followUps: [
        {
          id: 'vaeter-vor-pelagius-unpraezise',
          objection: `„Die frühen Väter waren vor der pelagianischen Krise einfach unpräzise. Erst Pelagius zwang die Kirche, die Gnadenlehre zu klären – Lehrentwicklung eben."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Die frühen Väter waren nicht unpräzise, sie standen nur vor einem anderen Gegner: dem heidnischen Fatalismus und dem gnostischen Determinismus, der Menschen „von Natur aus" in Gerettete und Verlorene einteilte. Gerade gegen diese Lehre verteidigten Irenäus und Origenes präzise den freien Willen. Und dass ausgerechnet ein Protestant mit „Lehrentwicklung" argumentiert, um 300 Jahre einmütiger Väterlehre beiseitezuschieben, ist bemerkenswert.`,
          followUps: [
            {
              id: 'cassian-semipelagianer',
              objection: `„Cassian war ein Semipelagianer – genau diese Lehre hat die Kirche in Orange 529 verurteilt."`,
              objectionBy: 'Reformierter Kirchenhistoriker',
              answer: `Der Begriff „Semipelagianismus" ist eine Prägung des 16./17. Jahrhunderts und wurde Cassian erst nachträglich angeheftet. Cassian selbst verurteilte Pelagius und schrieb gegen Nestorius; er wird in der Ost- und Westkirche als Heiliger verehrt. Orange war eine gallische Provinzialsynode, kein ökumenisches Konzil. Fair ist: Einige Formulierungen Cassians klingen in westlichen Ohren zu optimistisch – aber auch er lehrt, dass niemand ohne Gnade das Heil erlangt.`,
              followUps: [
                {
                  id: 'synergie-ist-werkgerechtigkeit',
                  objection: `„Synergie heißt doch: Der Mensch trägt etwas zu seiner Rettung bei. Das ist Werkgerechtigkeit und raubt Gott die Ehre."`,
                  objectionBy: 'John MacArthur',
                  answer: `Nein. Wer einem Ertrinkenden ein Seil zuwirft, rettet ihn – auch wenn der Ertrinkende das Seil ergreifen muss. Niemand würde sagen, der Ertrinkende habe sich „selbst gerettet" oder einen Verdienst erworben. Paulus sagt beides in einem Atemzug: „Schaffet, dass ihr selig werdet … denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen" (Phil 2,12–13). Die Ehre gehört ganz Gott; die Antwort gehört dem Menschen.`,
                  sources: [
                    { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `… schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn ein Bettler ein Geschenk annimmt – hat er es sich dann verdient?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'joh-6-44-apg-13-48',
      objection: `„Joh 6,44: ‚Es kann niemand zu mir kommen, es sei denn, dass ihn ziehe der Vater.' Und Apg 13,48: ‚Es wurden gläubig, wie viele ihrer zum ewigen Leben verordnet waren.' Deutlicher geht es nicht."`,
      objectionBy: 'James White',
      answer: `Joh 6,44 sagt, dass niemand **ohne** Gottes Ziehen kommen kann – das glauben wir auch. Es sagt nicht, dass das Ziehen unwiderstehlich ist oder nur wenigen gilt. Jesus sagt in Joh 12,32 mit demselben Verb: „Ich will sie **alle** zu mir ziehen." Und in Apg 13 erklärt der Kontext den Unterschied: Die Juden in Antiochia „stoßen das Wort von sich und achten sich selbst nicht wert des ewigen Lebens" (13,46) – sie urteilen über sich selbst.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '12,32', quote: `Und ich, wenn ich erhöht werde von der Erde, so will ich sie alle zu mir ziehen.`, translation: 'Luther 1912', status: 'verbatim', original: `πάντας ἑλκύσω πρὸς ἐμαυτόν` },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '13,46', quote: `Euch mußte zuerst das Wort Gottes gesagt werden; nun ihr es aber von euch stoßet und achtet euch selbst nicht wert des ewigen Lebens, siehe, so wenden wir uns zu den Heiden.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'helko-heisst-schleppen',
          objection: `„*Helkō* heißt ‚schleppen', nicht ‚locken' – so wird es für das Netz voller Fische gebraucht (Joh 21,6.11) oder als Paulus und Silas vor die Obrigkeit geschleppt werden (Apg 16,19)."`,
          objectionBy: 'James White',
          answer: `Wenn *helkō* „unwiderstehlich schleppen" hieße, dann müsste Joh 12,32 („ich will sie *alle* ziehen") bedeuten, dass alle Menschen gerettet werden – das lehrt kein Calvinist. Also kann das Verb hier nicht „unwiderstehlich" bedeuten. In der Septuaginta heißt es bei Jer 31,3: „Ich habe dich gezogen aus lauter Güte" – ein Ziehen der Liebe, nicht der Gewalt.`,
          questionsBack: [`Wenn das Ziehen in Joh 6,44 unwiderstehlich ist und Joh 12,32 dasselbe Verb mit „alle" gebraucht – wirst du dann Universalist?`],
        },
        {
          id: 'tetagmenoi',
          objection: `„Aber *tetagmenoi* in Apg 13,48 heißt doch ‚verordnet' – Gott hat sie bestimmt, bevor sie glaubten."`,
          objectionBy: 'Reformierter Exeget',
          answer: `Das Partizip kann passiv („verordnet") oder medial („die sich hingeordnet hatten, die bereit waren") verstanden werden; Lukas nennt keinen Handelnden und keinen Zeitpunkt „vor Grundlegung der Welt". Der Gegensatz im Kontext ist klar: Die einen stoßen das Wort von sich (V. 46), die anderen sind offen dafür. Ein einzelnes, grammatisch mehrdeutiges Partizip kann nicht die vielen klaren Aussagen über Gottes allgemeinen Heilswillen aufheben.`,
        },
      ],
    },
    {
      id: 'eph-1-vor-grundlegung',
      objection: `„Eph 1,4–5: Er hat uns erwählt, ehe der Welt Grund gelegt war, und uns verordnet zur Kindschaft – ‚nach dem Wohlgefallen seines Willens', nicht nach unserem Willen."`,
      objectionBy: 'John Piper',
      answer: `Ja – Erwählung ist Gottes freier Ratschluss, nicht unsere Erfindung. Aber beachte das Schlüsselwort: „in **ihm**" (in Christus). Gott hat vor aller Zeit beschlossen, dass die, die in Christus sind, heilig und Kinder Gottes sein sollen. Wer in Christus ist, entscheidet sich durch Glauben und Taufe (Gal 3,26–27). Paulus nennt die Grundlage selbst: „welche er zuvor ersehen hat" (Röm 8,29), und Petrus: „erwählt nach der Vorsehung Gottes" (1 Petr 1,2).`,
      sources: [
        { kind: 'bibel', work: 'Epheser', ref: '1,4–5', quote: `… wie er uns denn erwählt hat durch denselben, ehe der Welt Grund gelegt war, daß wir sollten sein heilig und unsträflich vor ihm in der Liebe; und hat uns verordnet zur Kindschaft gegen sich selbst durch Jesus Christus nach dem Wohlgefallen seines Willens.`, translation: 'Luther 1912', status: 'verbatim', note: 'Griechisch „en autō" – „in ihm"; Luther übersetzt „durch denselben".' },
        { kind: 'bibel', work: 'Galater', ref: '3,26–27', quote: `Denn ihr seid alle Gottes Kinder durch den Glauben an Christum Jesum. Denn wieviel euer getauft sind, die haben Christum angezogen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'proginosko-heisst-zuvor-lieben',
          objection: `„‚Zuvor ersehen' (*proginōskō*) heißt biblisch nicht ‚vorher wissen', sondern ‚zuvor lieben, erwählen' – wie in Am 3,2: ‚Aus allen Geschlechtern auf Erden habe ich allein euch erkannt.'"`,
          objectionBy: 'Douglas Moo / Thomas Schreiner',
          answer: `Diese Bedeutung ist möglich, aber nicht zwingend: In Apg 26,5 und 2 Petr 3,17 heißt dasselbe Wort schlicht „vorher wissen". Und selbst die beziehungsorientierte Bedeutung hilft dem Calvinismus nicht: In Röm 11,2 sagt Paulus, Gott habe sein Volk Israel „zuvor ersehen" – und doch sind viele Israeliten wegen Unglaubens ausgebrochen (11,20). Zuvor-Erkennen eines Volkes garantiert also nicht das Heil jedes Einzelnen, ohne dessen Glauben.`,
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '11,2.20', quote: `Gott hat sein Volk nicht verstoßen, welches er zuvor ersehen hat. … Wohl! sie sind ausgebrochen um ihres Unglaubens willen; du stehst aber durch den Glauben.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'vorhergesehener-glaube-verdienst',
              objection: `„Wenn Gott wegen des vorhergesehenen Glaubens erwählt, dann wird der Glaube zum Verdienst. Dann hat der Gläubige sich vom Ungläubigen durch eigene Leistung unterschieden (1 Kor 4,7)."`,
              objectionBy: 'R. C. Sproul',
              answer: `Glaube ist kein Verdienst, sondern das Gegenteil: die leere Hand, die ein Geschenk empfängt. Paulus stellt Glauben gerade den Werken gegenüber (Röm 4,16: „aus Glauben, damit es aus Gnade sei"). Und auch der Glaube selbst wird von Gottes zuvorkommender Gnade geweckt und getragen. Wer ein Geschenk annimmt, statt es abzulehnen, hat sich dadurch nichts verdient – aber er hat es angenommen.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '4,16', quote: `Derhalben muß die Gerechtigkeit durch den Glauben kommen, auf daß sie sei aus Gnaden.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Will Gott, dass alle Menschen gerettet werden – ja oder nein? Und was bedeutet sein Eid in Ez 33,11?`,
    `Kannst du einem beliebigen Menschen ehrlich sagen: „Christus ist für dich gestorben"?`,
    `Welcher Kirchenvater vor Augustinus lehrte, dass Gott Menschen bedingungslos zur Verdammnis bestimmt hat?`,
    `Warum weint Jesus über Jerusalem, wenn dessen Unglaube von Ewigkeit beschlossen war?`,
    `Warum ist die Hölle nach Mt 25,41 „dem Teufel und seinen Engeln bereitet", das Reich aber den Gerechten „von Anbeginn der Welt"?`,
  ],
  avoid: [
    `Nicht behaupten, Calvinisten seien keine Christen oder ihr Gott sei ein „Monster". Das ist unfair und beendet das Gespräch.`,
    `Nicht so tun, als sei die Gnade nur eine Hilfe für einen eigentlich gesunden Willen – das ist Pelagianismus und wird von der koptischen Kirche ebenfalls verworfen.`,
    `Nicht behaupten, Calvinisten lehrten, Gott „zwinge" zur Sünde – sie bestreiten das ausdrücklich (Westminster III,1). Argumentiere mit den Konsequenzen, nicht mit Unterstellungen.`,
    `Röm 9 nicht ausweichen. Wer den Text meidet, wirkt unsicher; lies ihn im Zusammenhang von Röm 9–11.`,
  ],
  concessions: [
    `Der Calvinismus nimmt Gottes Souveränität und die Unverdientheit der Gnade ernster als viele populäre evangelikale Strömungen. Darin hat er recht.`,
    `Wie Gottes Vorherwissen und menschliche Freiheit genau zusammengehen, bleibt auch für uns ein Geheimnis; die Väter erklären es nicht erschöpfend.`,
    `Augustinus ist ein echter Kirchenvater mit großer Autorität im Westen; die Calvinisten erfinden ihre Lehre nicht aus dem Nichts.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes), 13. Unterredung', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens, Buch II, Kap. 29–30', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Roger E. Olson', work: 'Against Calvinism', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jerry L. Walls / Joseph R. Dongell', work: 'Why I Am Not a Calvinist', year: '2004', status: 'paraphrase' },
    { kind: 'gegner', author: 'R. C. Sproul', work: 'Chosen by God', year: '1986', status: 'paraphrase', note: 'Die beste populäre Darstellung der Gegenposition.' },
  ],
  difficulty: 3,
  tags: ['Calvinismus', 'Prädestination', 'Erwählung', 'freier Wille', 'Synergie', 'TULIP'],
  related: ['calvinismus/roemer-9', 'calvinismus/unwiderstehliche-gnade', 'calvinismus/begrenzte-suehne', 'calvinismus/voellige-verdorbenheit', 'sola-fide/einmal-gerettet-immer-gerettet', 'willensfreiheit/vorherwissen-schliesst-freiheit-aus', 'hoelle/liebender-gott-keine-hoelle'],
};

export default claim;
