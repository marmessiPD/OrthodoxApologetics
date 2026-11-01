import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'keine-erbsuende-fitra',
  title: `„Es gibt keine Erbsünde – jeder Mensch wird rein geboren (Fitra)."`,
  proponents: [
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet', work: 'The Divine Reality (2016) – Kapitel zur Fitra' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten über Sünde und Erlösung' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge über Islam und Christentum' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter', work: 'Vortragsreihen über Adam und die Prophetengeschichten' },
  ],
  steelman: `Der Prophet sagte: „Jedes Kind wird in der Fitra (der natürlichen Veranlagung) geboren; dann machen es seine Eltern zum Juden, Christen oder Magier" (Bukhari 1385). Gott hat den Menschen „in der Natur erschaffen, in der Er die Menschen erschaffen hat" (30:30). Adam beging einen Fehler, bereute, und Gott vergab ihm (2:37; 20:122) – damit war die Sache erledigt. Dass Milliarden Menschen die Schuld eines Vorfahren erben sollen, ist ungerecht: „Keine lasttragende Seele trägt die Last einer anderen" (6:164). Die Erbsündenlehre ist eine Erfindung des Augustinus im 5. Jahrhundert, die neugeborene Babys zu Sündern erklärt und sogar ungetaufte Kinder verdammte. Der Islam befreit den Menschen von dieser Last: Er wird rein geboren und ist für seine eigenen Taten verantwortlich.`,
  biblical: {
    summary: `Die Bibel sagt nicht, dass Säuglinge persönlich für Adams Tat schuldig gesprochen werden. Sie sagt, dass durch Adams Sünde **der Tod** zu allen Menschen kam (Röm 5,12; 1 Kor 15,21–22) und dass die Menschheit seither in einem Zustand der Entfremdung, Verderbnis und Neigung zur Sünde lebt: „Das Dichten des menschlichen Herzens ist böse von Jugend auf" (Gen 8,21); „Siehe, ich bin in sündlichem Wesen geboren" (Ps 51,7); wir waren „Kinder des Zorns von Natur" (Eph 2,3). Zugleich bleibt der Mensch Gottes Ebenbild (Gen 1,27; 9,6; Jak 3,9) und hat das Gesetz „in sein Herz geschrieben" (Röm 2,14–15) – ein Gedanke, der der islamischen Fitra nahekommt.`,
    detail: `- **Röm 5,12.19:** „Wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde …" – Paulus denkt die Menschheit als Einheit, deren Haupt Adam ist (und in Christus ein neues Haupt erhält).
- **Joh 3,5–6:** „Was vom Fleisch geboren wird, das ist Fleisch" – darum ist eine neue Geburt aus Wasser und Geist nötig.
- **Gen 1,27; Röm 2,14–15:** Das Gottesbild und das natürliche Wissen um Gut und Böse bleiben – der Mensch ist verwundet, nicht zerstört.
- **Ez 18,20** verbietet die Bestrafung der Kinder für die persönliche Schuld der Väter – das widerspricht nicht dem Erbe der **Folgen** (Tod, Verderbnis).`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '5,12', quote: `Derhalben, wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '51,7', quote: `Siehe, ich bin in sündlichem Wesen geboren, und meine Mutter hat mich in Sünden empfangen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '8,21', quote: `… denn das Dichten des menschlichen Herzens ist böse von Jugend auf.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk … beweisen sie, des Gesetzes Werk sei geschrieben in ihren Herzen …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt: Alle Menschen erben die **Folgen** der Sünde Adams – Tod, Verderbnis (Vergänglichkeit) und Neigung zur Sünde. Deshalb werden auch Kinder getauft: Die Taufe ist neue Geburt aus Wasser und Geist, Eingliederung in Christus und Reinigung von dem, was wir von Adam erben (im Nizänum: „eine Taufe zur Vergebung der Sünden"). Die Akzente unterscheiden sich vom augustinisch-westlichen Verständnis einer persönlich angerechneten Schuld: Die östlichen Väter sprechen eher von einer **erkrankten Natur**, die geheilt werden muss. Die Kirche lehrt keine „völlige Verderbtheit" – das Gottesbild bleibt, der freie Wille bleibt.`,
    detail: `- **Athanasius** (De Incarnatione 3–5): Der Mensch, aus dem Nichts erschaffen, war von Natur vergänglich; durch die Teilhabe am Logos sollte er in der Unvergänglichkeit bleiben. Durch die Übertretung wandte er sich zum Verderben zurück, und der Tod gewann Macht über das ganze Geschlecht.
- **Kyrill** (Kommentar zum Römerbrief, zu 5,12) erklärt: Die Nachkommen Adams wurden Sünder nicht, weil sie mit ihm gesündigt hätten, sondern weil sie seine Natur haben, die unter das Gesetz der Sünde fiel – die Natur ist wie erkrankt.
- Die koptische Kirche kennt **keinen Limbus** und lehrt nicht, ungetaufte Kinder seien verdammt; sie vertraut sie der Barmherzigkeit Gottes an.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', ref: '3–5', year: 'ca. 318', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Römerbrief', ref: 'zu 5,12', status: 'paraphrase', note: 'Fragmentarisch erhalten; Bild der erkrankten Natur.' },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanum', ref: '381', quote: `Wir bekennen die eine Taufe zur Vergebung der Sünden.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  quickAnswer: `Wir glauben nicht, dass Babys persönlich für Adams Tat bestraft werden. Wir glauben, dass jeder Mensch die Folgen erbt: Sterblichkeit und eine Neigung zur Sünde. Das sagt auch der Islam: Durch Adams Fehltritt verließ die Menschheit das Paradies; nach Bukhari berührt der Satan jedes Neugeborene außer Maria und Jesus; und der Koran sagt, kein Lebewesen bliebe übrig, wenn Gott die Menschen für ihr Unrecht belangen würde (16:61). Die Frage ist nicht, ob wir ein Problem haben, sondern wer es löst.`,
  keyPoints: [
    `**Erbe der Folgen, nicht persönliche Schuld des Kindes:** Tod, Verderbnis, Neigung zur Sünde – so die koptische Lehre, mit anderen Akzenten als Augustinus.`,
    `**Fitra und Gottesbild:** Christen stimmen zu, dass der Mensch eine gottgegebene Anlage zum Guten und zur Gotteserkenntnis hat (Gen 1,27; Röm 2,15) – aber sie ist verwundet.`,
    `**Auch der Islam kennt Folgen von Adams Fehltritt:** Vertreibung aus dem Paradies für alle (2:36.38), der Satan berührt jedes Neugeborene außer Maria und Jesus (Bukhari 3431), „Adam sündigte, und so sündigten seine Nachkommen" (Tirmidhi).`,
    `**Allgemeine Sündhaftigkeit im Koran:** 16:61; 35:45; „die Seele gebietet das Böse" (12:53); „der Mensch ist sehr ungerecht" (14:34).`,
    `**Vergebung hebt Folgen nicht auf:** Adam wurde vergeben (2:37), blieb aber auf der Erde – wie David vergeben wurde und doch die Folgen trug (2 Sam 12,13–14).`,
    `**Kindertaufe** ist neue Geburt und Heilung, nicht Rettung vor einer Strafe für persönliche Schuld; die Kirche lehrt keine Verdammnis ungetaufter Kinder.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung und Erlösung',
      text: `Athanasius beginnt sein Werk über die Menschwerdung bei der Schöpfung: Der Mensch wurde aus dem Nichts geschaffen und ist von Natur vergänglich; aber Gott schenkte ihm durch die Teilhabe am Logos die Gnade, nach seinem Bild unvergänglich zu bleiben. Durch die Übertretung verlor der Mensch diese Gnade und fiel in das „Verderben gemäß der Natur" zurück – und mit ihm das ganze Geschlecht. Für Athanasius ist das Problem darum nicht zuerst ein juristisches, sondern ein existenzielles: Der Mensch stirbt und zerfällt, und nur der Schöpfer selbst kann ihn erneuern.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', ref: '3–5', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger des Römerbriefs',
      text: `Kyrill erklärt Röm 5,12 mit dem Bild der Krankheit: Die menschliche Natur ist in Adam an der Sünde erkrankt; seine Nachkommen sind nicht deshalb Sünder, weil sie mit ihm gemeinsam gesündigt hätten, sondern weil sie seine Natur tragen, die unter das Gesetz der Sünde fiel. Die Heilung geschieht im neuen Adam, Christus, der unsere Natur annahm und sie in sich wiederherstellte. Diese östliche Sicht unterscheidet sich vom späteren westlichen Akzent auf vererbter Schuld.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Römerbrief', ref: 'zu 5,12', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Kenner der Hadithliteratur',
      text: `Abuna Zakaria Botros zeigt seinen muslimischen Zuschauern, dass die islamischen Quellen selbst ein Erbe Adams kennen: Nach einer bei Tirmidhi überlieferten Aussage leugnete Adam, und seine Nachkommen leugnen; er vergaß, und seine Nachkommen vergessen; er sündigte, und seine Nachkommen sündigen. Und nach Bukhari berührt der Satan jedes neugeborene Kind – außer Maria und ihrem Sohn. Für Botros zeigen diese Texte, dass auch der Islam mit einer allgemeinen menschlichen Verwundbarkeit rechnet, und sie weisen auf den einen hin, der davon frei war.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet',
      text: `C. S. Lewis bemerkte, dass die Lehre von der gefallenen Natur des Menschen eine der empirisch am besten bestätigten christlichen Lehren sei: Jeder Mensch weiß, dass er das Gute erkennt und doch nicht tut. Lewis spricht vom „Gesetz der menschlichen Natur", das alle kennen und alle brechen. Damit verbindet er, was Muslime Fitra nennen – das Wissen um das Gute –, mit dem, was Christen Fall nennen – die Unfähigkeit, aus eigener Kraft danach zu leben.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch I', year: '1952', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'babys-schuldig-ungerecht',
      objection: `Es ist ungerecht, dass ein neugeborenes Baby schuldig sein soll für etwas, das Adam vor Jahrtausenden tat.`,
      objectionBy: 'Hamza Tzortzis',
      answer: `Da stimme ich dir zu – und die koptische Kirche lehrt das auch nicht in diesem Sinn. Sie lehrt, dass wir die **Folgen** von Adams Sünde erben: Sterblichkeit, Vergänglichkeit, eine Neigung zur Sünde. Ein Kind, das mit einer Erbkrankheit geboren wird, ist nicht schuldig – aber krank. Und auch der Islam sagt, dass Adams Nachkommen wegen seines Fehltritts nicht im Paradies leben, sondern auf der Erde, wo sie sterben.`,
      questionsBack: [`Warum lebst du auf der Erde und nicht im Paradies, in dem Adam erschaffen wurde?`],
      followUps: [
        {
          id: 'warum-dann-kindertaufe',
          objection: `Wenn Babys nicht schuldig sind – warum tauft ihr sie dann „zur Vergebung der Sünden"?`,
          objectionBy: 'Shabir Ally',
          answer: `Die Taufe ist mehr als Vergebung persönlicher Taten: Sie ist neue Geburt aus Wasser und Geist (Joh 3,5), Eingliederung in Christus und Reinigung von dem, was wir von Adam erben – der erkrankten Natur. Wie man einem Kind Medizin gibt, bevor es die Krankheit versteht, schenkt die Kirche ihm die Gnade, bevor es sie begreift. Auch im Alten Bund wurden Kinder am achten Tag in den Bund aufgenommen (Gen 17,12).`,
          followUps: [
            {
              id: 'ungetaufte-kinder-verdammt',
              objection: `Dann kommen ungetaufte Kinder in die Hölle? Augustinus hat das gelehrt.`,
              objectionBy: 'Zakir Naik',
              answer: `Die koptische Kirche lehrt das nicht. Sie kennt auch keinen „Limbus". Sie vertraut ungetaufte Kinder der Barmherzigkeit Gottes an, der „will, daß allen Menschen geholfen werde" (1 Tim 2,4). Augustinus ist für uns nur mit Einschränkung eine Autorität – und gerade in diesem Punkt folgen wir ihm nicht.`,
              followUps: [
                {
                  id: 'kindertaufe-dann-ueberfluessig',
                  objection: `Wenn Gott ungetaufte Kinder ohnehin barmherzig behandelt, ist die Kindertaufe überflüssig. Dann tauft sie doch, wenn sie selbst entscheiden können.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Die Taufe ist nicht nur eine Rettung vor der Hölle, sondern ein Geschenk: neue Geburt aus Wasser und Geist (Joh 3,5), Eingliederung in den Leib Christi, die Gabe des Heiligen Geistes in der Myronsalbung und der Zugang zur Eucharistie. Eltern enthalten ihren Kindern das Gute nicht vor, bis sie „selbst entscheiden" – sie geben ihnen Nahrung, Sprache und Liebe, lange bevor das Kind fragen kann. Auch im Alten Bund empfingen Kinder das Bundeszeichen am achten Tag, und Paulus vergleicht die Taufe mit der Beschneidung (Kol 2,11–12).`,
                  detail: `Die Apostelgeschichte berichtet von der Taufe ganzer „Häuser" (Apg 16,15.33; 1 Kor 1,16), und Petrus sagt: „Euch und euren Kindern gilt die Verheißung" (Apg 2,39). Origenes (3. Jh.) bezeichnet die Kindertaufe als Überlieferung von den Aposteln. Die koptische Kirche tauft Kinder durch dreimaliges Untertauchen und spendet ihnen sogleich die Myronsalbung und die Kommunion. Im Gespräch mit Muslimen kannst du auch auf die eigene Praxis verweisen: Viele Muslime sprechen dem Neugeborenen den Gebetsruf ins Ohr und geben ihm so von Anfang an den Glauben mit – niemand wartet, bis das Kind „selbst entscheidet".`,
                  sources: [
                    { kind: 'bibel', work: 'Kolosser', ref: '2,11–12', quote: `… in welchem ihr auch beschnitten seid mit der Beschneidung ohne Hände … indem ihr mit ihm begraben seid durch die Taufe.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
                    { kind: 'kirchenvater', author: 'Origenes', work: 'Kommentar zum Römerbrief', ref: 'V,9', year: 'ca. 246', status: 'paraphrase', note: 'Die Kirche habe von den Aposteln die Überlieferung empfangen, auch Kindern die Taufe zu spenden. Origenes ist für die Apologetik zitierbar, nicht als Lehrautorität.' },
                  ],
                  questionsBack: [
                    `Wartest du mit dem Unterricht im Glauben, bis dein Kind selbst entscheiden kann – oder gibst du ihm das Beste, das du hast, von Anfang an?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fitra-rein-geboren',
      objection: `Jedes Kind wird in der Fitra geboren – rein, mit natürlicher Hinwendung zu Gott (Bukhari 1385; 30:30). Erst die Eltern verderben es. Es gibt keine angeborene Sündhaftigkeit.`,
      objectionBy: 'Hamza Tzortzis',
      answer: `Christen stimmen zu, dass der Mensch als Gottes Ebenbild eine Anlage zur Gotteserkenntnis hat (Röm 1,19–20; 2,14–15). Aber derselbe Hadith sagt: Die Eltern machen das Kind zum Juden, Christen oder Magier – das zeigt, wie schnell diese Anlage verloren geht, und zwar bei fast allen. Und Bukhari überliefert auch, dass der Satan jedes Neugeborene berührt, sodass es schreit – außer Maria und ihrem Sohn (Bukhari 3431). Die Fitra ist also von Anfang an angefochten.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '1385', quote: `Jedes Kind wird in der Fitra geboren; dann machen es seine Eltern zum Juden, Christen oder Magier …`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:1385' },
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3431', quote: `Es gibt kein Neugeborenes, das der Satan bei seiner Geburt nicht berührt, sodass es wegen dieser Berührung schreiend aufschreit – außer Maria und ihrem Sohn.`, original: `… غَيْرَ مَرْيَمَ وَابْنِهَا`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3431', note: 'Parallel in Sahih Muslim 2366 und Bukhari 4548 (Tafsir zu 3:36).' },
        { kind: 'koran', work: 'Sure 30 (ar-Rum)', ref: '30:30', quote: `… gemäß der natürlichen Anlage Allahs, in der Er die Menschen erschaffen hat.`, original: `fiṭrata llāhi llatī faṭara n-nāsa ʿalaihā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/30/30' },
      ],
      followUps: [
        {
          id: 'schwach-nicht-suendig',
          objection: `Der Mensch ist nach dem Koran „schwach erschaffen" (4:28), vergesslich und ungeduldig – aber nicht sündig von Natur. Schwäche ist keine Schuld.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Schwäche ist keine Schuld – einverstanden. Aber wenn diese Schwäche bei **allen** Menschen zur Sünde führt, haben wir ein universales Problem. Der Koran selbst sagt: „Wenn Allah die Menschen für ihr Unrecht belangen würde, ließe Er kein Lebewesen auf der Erde" (16:61; vgl. 35:45), „die Seele gebietet das Böse" (12:53), „der Mensch ist sehr ungerecht und undankbar" (14:34). Und nach Tirmidhi sagte der Prophet: „Adam sündigte, und so sündigten seine Nachkommen." Bloße Rechtleitung hat dieses Problem in der Geschichte nie gelöst – es braucht ein neues Herz (Ez 36,26).`,
          sources: [
            { kind: 'koran', work: 'Sure 12 (Yusuf)', ref: '12:53', quote: `Gewiss, die Seele gebietet nachdrücklich das Böse, außer wenn mein Herr sich erbarmt.`, original: `inna n-nafsa la-ammāratun bi-s-sūʾi illā mā raḥima rabbī`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/12/53' },
            { kind: 'koran', work: 'Sure 35 (Fatir)', ref: '35:45', quote: `Und wenn Allah die Menschen für das belangen würde, was sie erworben haben, würde Er auf ihrer Oberfläche kein Lebewesen lassen.`, original: `wa-law yuʾākhidhu llāhu n-nāsa bi-mā kasabū mā taraka ʿalā ẓahrihā min dābbatin`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/35/45' },
            { kind: 'hadith', work: 'Jami\' at-Tirmidhi', ref: 'Kitab at-Tafsir, zu Sure 7 (al-A\'raf)', quote: `Adam leugnete, und so leugneten seine Nachkommen; Adam vergaß, und so vergaßen seine Nachkommen; Adam sündigte, und so sündigten seine Nachkommen.`, translation: 'sinngemäß', status: 'paraphrase', note: 'Häufig als Tirmidhi 3076 zitiert und als hasan sahih eingestuft – Nummer und Einstufung vor Verwendung prüfen.' },
          ],
        },
      ],
    },
    {
      id: 'adam-wurde-vergeben',
      objection: `Adam bereute, und Allah vergab ihm (2:37). Damit war die Sünde vollständig erledigt. Es bleibt nichts, was sich vererben könnte.`,
      objectionBy: 'Zakir Naik',
      answer: `Vergebung der Schuld und Aufhebung der Folgen sind zweierlei. Adam wurde vergeben – aber er kehrte nicht ins Paradies zurück, sondern Gott sagte: „Geht alle hinab von hier" (2:38). Ebenso vergab Gott David seinen Ehebruch, und doch trug er die Folgen (2 Sam 12,13–14). Nach einer Überlieferung bei Bukhari hielt Mose im Streitgespräch Adam vor, dass sein Fehltritt seine Nachkommen aus dem Paradies gebracht habe.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:36–38', quote: `Da ließ der Satan sie davon straucheln und brachte sie heraus aus dem, worin sie waren … Wir sagten: Geht alle hinab von hier …`, original: `fa-azallahumā sh-shaiṭānu ʿanhā fa-akhrajahumā mimmā kānā fīhi … qulnā hbiṭū minhā jamīʿan`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/2/36-38' },
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Buch der Propheten, Streitgespräch zwischen Adam und Mose (vgl. auch Buch des Qadar)', quote: `Mose sagte: „Du bist Adam, dessen Fehltritt dich und deine Nachkommen aus dem Paradies gebracht hat."`, translation: 'sinngemäß', status: 'paraphrase', note: 'Häufig als Bukhari 3409 und 6614 zitiert – Nummern vor Verwendung prüfen.' },
      ],
      followUps: [
        {
          id: 'erde-war-geplant',
          objection: `Die Erde war von Anfang an geplant – Allah sagte schon vor der Erschaffung Adams: „Ich werde auf der Erde einen Statthalter einsetzen" (2:30). Das Leben auf der Erde ist keine Strafe.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Ein guter Punkt – Gottes Plan umfasst auch den Fall, den er vorherwusste. Aber der Koran beschreibt den Abstieg dennoch als Folge des „Strauchelns" durch den Satan (2:36), verbunden mit Feindschaft und Mühsal. Und Gottes Vorherwissen hebt die Folgen nicht auf, es zeigt nur, dass Gott einen Heilsplan hatte. Genau das sagt das Evangelium: Gott hat die Erlösung in Christus „vor Grundlegung der Welt" bereitet (1 Petr 1,20).`,
        },
      ],
    },
    {
      id: 'augustinus-erfand-erbsuende',
      objection: `Die Erbsünde hat Augustinus im 5. Jahrhundert erfunden – auf Grundlage einer falschen lateinischen Übersetzung von Röm 5,12 („in quo omnes peccaverunt").`,
      objectionBy: 'Shabir Ally',
      answer: `Richtig ist: Augustinus hat die westliche Lehre von der vererbten Schuld geprägt, und seine Auslegung von Röm 5,12 stützte sich auf die lateinische Übersetzung. Die koptische Kirche folgt ihm darin nicht. Aber die Lehre, dass durch Adam Tod und Verderben über die Menschheit kamen, ist viel älter: Sie steht bei Paulus selbst (Röm 5; 1 Kor 15,22) und bei Athanasius um 318 (De Incarnatione 3–5) – ein Jahrhundert vor Augustinus und ohne lateinische Übersetzung.`,
    },
    {
      id: 'ez-18-gegen-erbsuende',
      objection: `„Der Sohn soll nicht tragen die Missetat des Vaters" (Ez 18,20). Eure eigene Bibel widerlegt die Erbsünde.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Ez 18 spricht von der persönlichen Strafe für persönliche Schuld – und darin stimmt die koptische Lehre zu: Kein Kind wird für die Taten seines Vaters gerichtet. Aber derselbe Gott sagt durch Paulus, dass durch einen Menschen der Tod zu allen kam (Röm 5,12). Auch nach dem Koran sterben alle Menschen, auch die Säuglinge – ohne eigene Schuld. Woher kommt der Tod, wenn nicht aus dem Bruch zwischen Mensch und Gott?`,
    },
  ],
  questionsToAsk: [
    `Warum lebt die Menschheit auf der Erde und nicht im Paradies, wenn Adams Fehltritt keine Folgen hatte?`,
    `Warum berührt der Satan nach Bukhari 3431 jedes Neugeborene – außer Maria und Jesus?`,
    `Was meint der Koran, wenn er sagt, kein Lebewesen bliebe übrig, wenn Allah die Menschen für ihr Unrecht belangen würde (16:61)?`,
    `Kennst du einen Menschen, der nie gesündigt hat – außer Jesus?`,
  ],
  avoid: [
    `Nicht die augustinische Lehre von der persönlich angerechneten Erbschuld als koptische Lehre verteidigen – die koptische Kirche betont das Erbe der Folgen.`,
    `Nicht von „völliger Verderbtheit" sprechen; das ist calvinistisch, nicht orthodox.`,
    `Die Fitra nicht lächerlich machen; sie hat Berührungspunkte mit Röm 1–2. Knüpfe daran an.`,
  ],
  concessions: [
    `Die westliche (augustinische) Erbsündenlehre hat Akzente, die auch orthodoxe Christen kritisch sehen – etwa die Verdammnis ungetaufter Kinder.`,
    `Der Islam lehrt eine echte Verantwortung des Einzelnen und eine gute Grundanlage des Menschen; beides teilt auch das Christentum.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos, Kap. 3–5', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John S. Romanides', work: 'The Ancestral Sin', year: '2002 (engl. Übers.)', status: 'paraphrase', note: 'Östlich-orthodoxe Darstellung im Unterschied zu Augustinus.' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Erbsünde', 'Fitra', 'Adam', 'Kindertaufe', 'Anthropologie'],
  related: [
    'islam-kreuzigung/gott-kann-einfach-vergeben',
    'islam-kreuzigung/niemand-traegt-last',
    'calvinismus/voellige-verdorbenheit',
    'sakramente/taufe-nur-symbol-keine-kindertaufe',
    'islam-gottheit-christi/jesus-nur-ein-prophet',
  ],
};

export default claim;
