import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-wissenschaftswunder',
  title: `„Der Koran enthält wissenschaftliche Wunder."`,
  proponents: [
    { name: 'Maurice Bucaille', role: 'Französischer Arzt (1920–1998)', work: 'La Bible, le Coran et la Science (1976)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'The Qur\'an and Modern Science: Compatible or Incompatible?' },
    { name: 'Abd al-Majid az-Zindani', role: 'Jemenitischer Gelehrter, Förderer der „Wissenschaftswunder"-Bewegung', work: 'Kommission für wissenschaftliche Wunder in Koran und Sunna' },
    { name: 'Zaghloul El-Naggar', role: 'Ägyptischer Geologe und Prediger', work: 'Schriften zum i\'jaz \'ilmi' },
  ],
  steelman: `„Der Koran beschreibt Dinge, die erst die moderne Wissenschaft entdeckt hat: die Entwicklungsstufen des Embryos (23:12–14), den Urknall – Himmel und Erde waren eine verschlossene Masse, die Gott trennte (21:30) –, die Ausdehnung des Universums (51:47), Berge als ‚Pflöcke' mit tiefen Wurzeln (78:6–7) und die Schranke zwischen zwei Meeren (55:19–20). Wie hätte ein Mann im 7. Jahrhundert in der Wüste das wissen können? Selbst westliche Wissenschaftler wie der Embryologe Keith Moore haben die Genauigkeit der koranischen Beschreibungen gewürdigt. Das beweist, dass der Koran von Gott stammt."`,
  biblical: {
    summary: `Die angeführten Verse sind kurze, bildhafte Aussagen, die erst **nachträglich** mit modernen Entdeckungen verbunden werden. Klassische Ausleger verstanden sie nicht so, und ähnliche Vorstellungen finden sich in der antiken Medizin und Kosmologie (etwa Galens Lehre von den Stufen der Embryonalentwicklung). Daneben gibt es Verse, die eher dem antiken Weltbild entsprechen: die Sonne, die in einer schlammigen Quelle untergeht (18:86), Sterne als Geschosse gegen Teufel (67:5), Berge, die die Erde am Wanken hindern (16:15). Christen beanspruchen für die Bibel keine „Wissenschaftswunder": Die Schrift spricht über Gott, Schöpfung und Heil in der Sprache ihrer Zeit.`,
    detail: `**Embryologie (23:12–14):** Tropfen (*nuṭfa*), Anhängsel/Blutklumpen (*ʿalaqa*), gekautes Stück (*muḍgha*), dann Knochen, „und Wir bekleideten die Knochen mit Fleisch". Ähnliche Stufen (Same, Blut, Fleisch, Formung) beschreibt Galen im 2. Jahrhundert; die Reihenfolge „erst Knochen, dann Fleisch" entspricht nicht dem embryologischen Befund, nach dem Muskel- und Skelettvorläufer sich weitgehend gleichzeitig entwickeln.

**Kosmologie:** 21:30 (Himmel und Erde waren eine Einheit, dann getrennt) gleicht altorientalischen Schöpfungsbildern der Trennung. 51:47 (*wa-innā la-mūsiʿūn*) verstanden klassische Ausleger meist als „Wir haben die Macht/Fülle", nicht als Ausdehnung des Alls. Nach 41:9–12 und 2:29 wurde die Erde vor dem Himmel gestaltet; nach heutiger Kosmologie entstanden Sterne und Galaxien Milliarden Jahre vor der Erde.

**Kritik aus dem Islam selbst:** Muslimische Denker wie Ziauddin Sardar haben den „Bucaillismus" kritisiert: Wer den Koran an wechselnde Theorien bindet, macht ihn von der Wissenschaft abhängig.`,
    sources: [
      { kind: 'koran', work: 'Sure 23 (al-Mu\'minun)', ref: '23:13–14', quote: `Dann machten Wir ihn zu einem Tropfen … dann schufen Wir den Tropfen zu einem Anhängsel, das Anhängsel zu einem gekauten Stück, das gekaute Stück zu Knochen, und Wir bekleideten die Knochen mit Fleisch.`, original: `fa-khalaqnā l-muḍghata ʿiẓāman fa-kasawnā l-ʿiẓāma laḥman`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/23/12-14' },
      { kind: 'koran', work: 'Sure 18 (al-Kahf)', ref: '18:86', quote: `Als er den Ort erreichte, wo die Sonne untergeht, fand er, dass sie in einer schlammigen Quelle unterging.`, original: `wajadahā taghrubu fī ʿaynin ḥamiʾa`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/18/86' },
      { kind: 'koran', work: 'Sure 67 (al-Mulk)', ref: '67:5', quote: `Und Wir haben den untersten Himmel mit Lampen geschmückt und sie zu Wurfgeschossen gegen die Satane gemacht.`, original: `wa-jaʿalnāhā rujūman li-sh-shayāṭīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/67/5' },
      { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:15', quote: `Und Er hat auf der Erde festgegründete Berge gesetzt, damit sie nicht mit euch wankt.`, original: `wa-alqā fī l-arḍi rawāsiya an tamīda bikum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/16/15' },
    ],
  },
  church: {
    summary: `Die Väter warnten davor, die Schrift zum naturkundlichen Lehrbuch zu machen. Der hl. Basilius erklärt in seinen Predigten über das Sechstagewerk, Mose habe über die Gestalt der Erde geschwiegen, weil sie für unser Heil nicht nötig sei. Augustinus mahnt, Christen sollten nicht unüberlegt über Naturdinge reden, weil sie sonst den Glauben vor Kundigen lächerlich machen. Die Kirche liest die Schrift als Offenbarung Gottes und seines Heilshandelns – nicht als verschlüsselte Physik.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien über das Hexaemeron', ref: 'IX,1', year: 'um 370', quote: `Mose hat über die Gestalt der Erde und Ähnliches geschwiegen, weil es zu unserer Erbauung nichts beiträgt; der Geist wollte uns nicht mit Unnützem beschäftigen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', year: 'um 401–415', quote: `Es ist schändlich, wenn ein Ungläubiger einen Christen über Himmel, Erde und Gestirne Unsinn reden hört, angeblich auf Grund der Schrift; das bringt die Schrift in Verruf.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Fachwissenschaftler – auch viele muslimische – sehen in den „Wissenschaftswundern" keine belastbaren Belege. Die Verse sind mehrdeutig, die Deutungen entstehen nach der Entdeckung, und vergleichbare Vorstellungen sind in der antiken Wissenschaft belegt. Islamische Wissenschaftshistoriker wie Ziauddin Sardar haben den „Bucaillismus" als methodisch verfehlt kritisiert. Zugleich ist unbestritten, dass die islamische Zivilisation im Mittelalter bedeutende wissenschaftliche Leistungen hervorbrachte – das ist aber eine andere Frage.`,
    sources: [
      { kind: 'fachliteratur', author: 'Ziauddin Sardar', work: 'Explorations in Islamic Science', year: '1989', quote: `Kritik am „Bucaillismus", der den Koran durch moderne Wissenschaft beglaubigen will.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Galen von Pergamon', work: 'Über den Samen (De semine) / Über die Entstehung der Föten', year: '2. Jh.', quote: `Beschreibt Stufen der Embryonalentwicklung von Samen über Blut zu Fleisch und Formung der Glieder.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Verse sind kurz und bildhaft und werden erst nach einer Entdeckung als „Wunder" gedeutet – so findet man in fast jedem alten Text etwas. Ähnliche Vorstellungen hatte schon die antike Medizin, etwa Galen zur Embryonalentwicklung. Daneben stehen Verse, die dem antiken Weltbild entsprechen, etwa die Sonne, die in einer schlammigen Quelle untergeht (18:86). Christen behaupten so etwas übrigens nicht von der Bibel – die Schrift will uns Gott offenbaren, nicht Physik lehren.`,
  keyPoints: [
    `**Deutung nach der Entdeckung:** Kein Ausleger fand vor dem 20. Jahrhundert den Urknall oder die Ausdehnung des Alls in diesen Versen.`,
    `**Antike Parallelen:** Die embryologischen Stufen ähneln Galens Lehre (2. Jh.).`,
    `**Verse mit antikem Weltbild:** 18:86 (Sonne in schlammiger Quelle), 67:5 (Sterne als Geschosse), 16:15 (Berge gegen das Wanken der Erde).`,
    `**Inkonsequente Methode:** Wörtlich, wenn es zur Wissenschaft passt – bildlich, wenn nicht.`,
    `**Muslimische Selbstkritik:** Ziauddin Sardar und andere kritisieren den „Bucaillismus".`,
  ],
  voices: [
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius kannte die Naturwissenschaft seiner Zeit gut und schätzte sie. Gerade deshalb unterscheidet er: Die Schrift will den Menschen zu Gott führen, nicht naturkundliche Streitfragen entscheiden. Wo sie schweigt, soll man nicht hineinlesen, was sie nicht sagen will. Diese Haltung bewahrt die Christen davor, die Bibel an wechselnde Theorien zu binden – und sie zeigt, warum Christen keine „Wissenschaftswunder" brauchen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien über das Hexaemeron', ref: 'IX,1', year: 'um 370', quote: `Die Schrift schweigt über naturkundliche Fragen, die nichts zum Heil beitragen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis (mit Vorbehalt, s. Personenregister)',
      text: `Augustinus warnt Christen davor, aus der Schrift naturwissenschaftliche Behauptungen abzuleiten, die Kundige leicht widerlegen können. Das schade nicht dem Christen, sondern der Schrift, weil Außenstehende meinen, die Bibel lehre solchen Unsinn. Sein Grundsatz gilt für jeden heiligen Text: Wer ihn an wissenschaftliche Hypothesen kettet, gefährdet seine Glaubwürdigkeit.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', year: 'um 401–415', quote: `Warnung vor unbedachten naturkundlichen Behauptungen im Namen der Schrift.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als Arzt und ehemaliger Muslim',
      text: `Qureshi kannte als Medizinstudent die Argumente der embryologischen „Wunder" aus eigener Überzeugung. Bei genauer Prüfung stellte er fest, dass die koranischen Stufen der Embryonalentwicklung der antiken Medizin entsprechen und die Aussage „erst Knochen, dann Fleisch" nicht dem heutigen Befund. Er beschreibt, wie ihn die Ehrlichkeit gegenüber den Daten zwang, das Argument aufzugeben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Persönliche Prüfung der „wissenschaftlichen Wunder" des Korans als Medizinstudent.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer',
      text: `Wood weist auf eine methodische Inkonsequenz hin: Verse, die modern klingen, werden wörtlich als Wunder gelesen; Verse und Hadithe, die einem antiken Weltbild entsprechen – etwa die untergehende Sonne in der schlammigen Quelle oder die Sonne, die sich nach dem Untergang unter dem Thron niederwirft –, werden bildlich gedeutet. Wer so vorgeht, kann in jedem Text Wunder finden.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3199', quote: `Der Prophet fragt Abu Dharr, wohin die Sonne beim Untergang geht: Sie geht und wirft sich unter dem Thron nieder und bittet um Erlaubnis, wieder aufzugehen.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3199' },
      ],
    },
  ],
  dialog: [
    {
      id: 'embryologie-23-14',
      objection: `23:12–14 beschreibt die Entwicklung des Embryos präzise: Tropfen, alaqa, mudgha, Knochen, Fleisch. Das konnte im 7. Jahrhundert niemand wissen.`,
      objectionBy: 'Zakir Naik',
      answer: `Ähnliche Stufen beschrieb schon Galen im 2. Jahrhundert – Same, Blut, Fleisch, Formung –, und seine Medizin war im Nahen Osten bekannt. Und die Reihenfolge des Korans, „erst Knochen, dann bekleideten Wir die Knochen mit Fleisch", entspricht nicht dem heutigen Befund: Muskel- und Skelettvorläufer entwickeln sich weitgehend gleichzeitig, die Verknöcherung beginnt sogar später.`,
      followUps: [
        {
          id: 'keith-moore-bestaetigt',
          objection: `Der renommierte Embryologe Keith Moore hat die Genauigkeit des Korans bestätigt – das steht sogar in einer Ausgabe seines Lehrbuchs.`,
          objectionBy: 'Abd al-Majid az-Zindani',
          answer: `Diese Ausgabe mit „islamischen Ergänzungen" entstand in Zusammenarbeit mit Förderern der Wunder-Bewegung; das Standard-Lehrbuch enthält solche Aussagen nicht. Und eine Autorität ersetzt kein Argument: Entscheidend ist, ob die Verse den Befund beschreiben, bevor man ihn kennt – nicht, ob man sie nachträglich passend deuten kann.`,
          followUps: [
            {
              id: 'alaqa-blutegel',
              objection: `Aber alaqa heißt „Blutegel" – und der Embryo sieht in der dritten Woche tatsächlich aus wie ein Blutegel. Das ist doch verblüffend!`,
              objectionBy: 'Zakir Naik',
              answer: `Klassische Ausleger übersetzten *ʿalaqa* meist mit „Blutklumpen" – das entspricht Galens Stufe „Blut". Die Deutung „Blutegel" ist vor allem modern. Und Fehlgeburten in frühen Stadien konnten Menschen schon immer sehen. Ein Wort mit mehreren Bedeutungen, von denen man im Nachhinein die passende wählt, ist kein Wunder.`,
            },
          ],
        },
      ],
    },
    {
      id: 'urknall-und-ausdehnung',
      objection: `21:30 beschreibt den Urknall: Himmel und Erde waren eine verschlossene Masse, die Gott auseinanderriss. Und 51:47 sagt: „Wir dehnen ihn aus." Das ist moderne Kosmologie!`,
      objectionBy: 'Zakir Naik',
      answer: `Die Vorstellung, dass Himmel und Erde ursprünglich eins waren und getrennt wurden, findet sich in vielen alten Schöpfungserzählungen, auch in Genesis 1. Klassische Ausleger verstanden 51:47 meist als „Wir haben die Macht und Fülle", nicht als Ausdehnung. Und nach 41:9–12 wurde die Erde vor dem Himmel gestaltet – nach heutiger Kosmologie entstanden Sterne und Galaxien Milliarden Jahre vor der Erde.`,
      sources: [
        { kind: 'koran', work: 'Sure 41 (Fussilat)', ref: '41:9–11', quote: `Sag: Wollt ihr wirklich Den verleugnen, Der die Erde in zwei Tagen erschuf? … Dann wandte Er sich dem Himmel zu, während er Rauch war.`, original: `thumma stawā ilā s-samāʾi wa-hiya dukhān`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/41/9-11' },
      ],
      followUps: [
        {
          id: 'gelehrte-verstanden-nicht',
          objection: `Die klassischen Gelehrten konnten diese Verse noch nicht verstehen. Erst die Wissenschaft enthüllt heute ihren wahren Sinn.`,
          objectionBy: 'Zaghloul El-Naggar',
          answer: `Dann hat 1.300 Jahre lang niemand diese Verse richtig verstanden – obwohl der Koran sich ein „klares" Buch nennt (12:1). Und diese Methode findet in jedem alten Text alles: Man wartet auf eine Entdeckung und sucht dann einen Vers, der sich so lesen lässt. Ein echter Beweis wäre eine eindeutige Vorhersage, die *vor* der Entdeckung so verstanden wurde.`,
          followUps: [
            {
              id: 'bibel-hat-fehler',
              objection: `Die Bibel hat aber echte wissenschaftliche Fehler – ein festes Himmelsgewölbe, eine flache Erde, die Sonne steht still.`,
              objectionBy: 'Zakir Naik',
              answer: `Die Bibel spricht wie jeder antike Text in der Sprache der Wahrnehmung – auch wir sagen heute „die Sonne geht auf". Der Unterschied: Christen behaupten nicht, die Bibel beweise sich durch Wissenschaftswunder. Schon Basilius und Augustinus warnten davor. Wer dagegen Wunder beansprucht, muss akzeptieren, dass man die Verse genauso streng prüft, die nicht passen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'berge-als-pfloecke',
      objection: `78:6–7 nennt die Berge „Pflöcke". Heute wissen wir, dass Berge tiefe Wurzeln haben (Isostasie). Das ist ein Wunder!`,
      objectionBy: 'Zaghloul El-Naggar',
      answer: `Gebirge haben tatsächlich Krustenwurzeln. Aber der Koran nennt auch die Funktion: Gott setzte die Berge, „damit die Erde nicht mit euch wankt" (16:15; 21:31). Berge verhindern keine Erdbeben – Gebirgsregionen gehören im Gegenteil zu den erdbebenreichsten der Welt. Das Bild des Pflocks, der ein Zelt festhält, entspricht dem antiken Weltbild.`,
      followUps: [
        {
          id: 'stabilisieren-langfristig',
          objection: `Gemeint ist eine Stabilisierung der Erdkruste insgesamt, nicht das Verhindern einzelner Beben.`,
          objectionBy: 'verbreitete Verteidigung',
          answer: `Das ist eine neue Deutung, um den Vers mit der Geologie zu versöhnen. Der Wortlaut sagt „damit sie nicht mit *euch* wankt" – also eine Erfahrung der Menschen. Wenn man einen Vers erst umdeuten muss, damit er zur Wissenschaft passt, kann er nicht zugleich ein Beweis für göttliches Wissen sein.`,
        },
      ],
    },
    {
      id: 'sonne-in-schlammiger-quelle',
      objection: `18:86 sagt nur, Dhu l-Qarnain *fand* die Sonne so untergehen – „wie es ihm erschien". Das ist eine Beschreibung aus seiner Perspektive, kein Fehler.`,
      objectionBy: 'verbreitete muslimische Erklärung',
      answer: `Das ist eine mögliche Lesart. Aber dann beschreibt der Koran an dieser Stelle die Welt so, wie ein antiker Mensch sie sah – ohne jedes Wunderwissen. Und es gibt Hadithe, die das antike Bild ausdrücklich bestätigen, etwa dass die Sonne nach dem Untergang unter Gottes Thron geht und sich niederwirft (Bukhari 3199).`,
      followUps: [
        {
          id: 'niederwerfen-metaphorisch',
          objection: `Das Niederwerfen der Sonne ist metaphorisch – alles in der Schöpfung unterwirft sich Gott.`,
          objectionBy: 'verbreitete muslimische Erklärung',
          answer: `Auch das ist möglich. Aber dann muss dieselbe Freiheit auch für die „Wunderverse" gelten: Wenn die Sonne im Hadith bildlich spricht, warum soll 21:30 dann wörtlich den Urknall beschreiben? Man kann nicht wörtlich lesen, wenn es passt, und bildlich, wenn es nicht passt – sonst wird jedes Ergebnis möglich.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hat vor dem 20. Jahrhundert irgendein Ausleger 21:30 als Beschreibung des Urknalls verstanden?`,
    `Warum ist 23:14 wörtlich zu nehmen, 18:86 aber bildlich?`,
    `Kannst du mir eine Vorhersage im Koran zeigen, die vor ihrer Entdeckung eindeutig so verstanden wurde?`,
    `Was hältst du von der Kritik muslimischer Denker wie Ziauddin Sardar am „Bucaillismus"?`,
  ],
  avoid: [
    `Nicht mit „Bibel-Wissenschaftswundern" kontern (z. B. Jes 40,22 beweise die Kugelgestalt der Erde). Damit begehst du denselben Fehler.`,
    `Nicht spotten über die Wissenschaftsgeschichte des Islam. Muslimische Gelehrte haben im Mittelalter Großes geleistet.`,
    `Keine unsicheren Behauptungen über Keith Moores spätere Haltung verwenden; bleib bei der Sache.`,
  ],
  concessions: [
    `Viele Verse lassen sich mit moderner Wissenschaft vereinbaren, wenn man sie bildlich liest – das ist legitim, beweist aber keine göttliche Herkunft.`,
    `Auch die Bibel verwendet Wahrnehmungssprache und das Weltbild ihrer Zeit.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ziauddin Sardar', work: 'Explorations in Islamic Science', year: '1989', status: 'paraphrase' },
    { kind: 'gegner', author: 'Maurice Bucaille', work: 'La Bible, le Coran et la Science', year: '1976', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Koran', 'Wissenschaft', 'Embryologie', 'Kosmologie', 'Islam'],
  related: [
    'islam-koran/koran-klar-vollstaendig',
    'islam-koran/koran-widerspruchsfrei',
    'genesis/vaeter-lasen-woertlich',
    'kosmologie/genesis-vs-urknall',
  ],
};

export default claim;
