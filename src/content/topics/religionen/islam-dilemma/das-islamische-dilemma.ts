import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'das-islamische-dilemma',
  title: `Das Islamische Dilemma: Der Koran bestätigt die Schrift, die ihm widerspricht`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak (Toronto)', work: 'Debatten über die Zuverlässigkeit der Bibel und die Kreuzigung' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter (Dallas), Dekan des Islamic Seminary of America', work: 'Vorträge über Tahrif und die früheren Schriften' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer (London)', work: 'Antworten auf das „Islamic Dilemma" von David Wood' },
    { name: 'Ali Ataie', role: 'Islamwissenschaftler und Bibelkenner, Zaytuna College', work: 'Debatten über Injil und Neues Testament' },
    { name: 'Ibn Hazm von Córdoba', role: 'Andalusischer Gelehrter (994–1064), Systematiker der Textverfälschungslehre', work: 'al-Fisal fi l-milal wa-l-ahwa wa-n-nihal' },
  ],
  steelman: `Ein gebildeter Muslim würde sagen: „Der Koran bestätigt nicht das Buch, das ihr heute in der Hand haltet, sondern die ursprüngliche Offenbarung, die Gott Mose und Jesus gab. Er ist der *muhaymin* (5:48), der Wächter und Prüfstein, der zeigt, was davon echt geblieben ist. Er sagt selbst, dass Gruppen unter den Leuten der Schrift die Worte von ihren Stellen verdrehten (4:46; 5:13), mit ihren Händen schrieben und behaupteten, es sei von Gott (2:79), und einen Teil vergaßen (5:14). Gottes Zusage der Bewahrung gilt allein dem Koran (15:9); die Tora wurde den Rabbinern *anvertraut* (5:44) – und Menschen versagen. Wenn der Koran Juden und Christen anspricht, appelliert er an das, was von der Wahrheit bei ihnen noch übrig war, etwa an die Ankündigung des Propheten. Dass ihr Handschriften aus dem 4. Jahrhundert habt, beweist nur, dass die Verdrehung früh geschah – eure eigenen Gelehrten wie Bart Ehrman zeigen ja, wie Schreiber den Text verändert haben. Es gibt also kein Dilemma, sondern eine dritte Möglichkeit: Die Bibel enthält Wahres und Verfälschtes zugleich, und der Koran ist der Maßstab, der beides scheidet."`,
  biblical: {
    summary: `Der entscheidende Punkt ist hier nicht die Bibel, sondern der **Koran selbst**: Er nennt Tora (*Tawrat*) und Evangelium (*Injil*) Offenbarung Gottes, „Rechtleitung und Licht" (5:44–46), spricht die Juden und Christen seiner Zeit als Besitzer dieser Schriften an („wo sie doch die Tora haben, in der Allahs Urteil ist", 5:43), befiehlt den „Leuten des Evangeliums", nach dem zu richten, „was Allah darin herabgesandt hat" (5:47), und verweist Zweifelnde an die, „die vor dir die Schrift lesen" (10:94). Zugleich sagt er: „Niemand kann Allahs Worte abändern" (6:34; 6:115; 10:64; 18:27). Die Bibel, die Christen im 7. Jahrhundert lasen, ist durch Handschriften und Übersetzungen aus der Zeit **vor** Mohammed dokumentiert – und sie lehrt Kreuzigung, Gottessohnschaft und den dreieinigen Gott (Mt 28,19; Joh 1,1; 20,28; 1 Kor 15,3–4).`,
    detail: `**Was die Bibel über sich selbst sagt:** „Himmel und Erde werden vergehen; aber meine Worte werden nicht vergehen" (Mt 24,35); „das Wort unsres Gottes bleibt ewiglich" (Jes 40,8). Das Christentum erwartet also selbst, dass Gott sein Wort bewahrt – nicht durch ein einziges Exemplar, sondern durch die Fülle der Abschriften in vielen Sprachen und Kirchen.

**Die Handschriftenlage vor 610:** Vollständige griechische Bibeln (Codex Vaticanus, ca. 300–325; Codex Sinaiticus, ca. 330–360; Codex Alexandrinus, ca. 400–440), Papyri des 2./3. Jahrhunderts (P46, P66, P75; P52 traditionell ca. 125–175), die Jesajarolle aus Qumran (ca. 2. Jh. v. Chr.), die Septuaginta, die syrische Peschitta (spätestens frühes 5. Jh.) und – für uns Kopten besonders wichtig – die **sahidische** (ab dem 3. Jh.) und **bohairische** (ab dem 4. Jh.) koptische Übersetzung. Alle lehren dieselben Kernaussagen wie unsere heutigen Bibeln.

**Was die Bibel lehrt (und der Koran bestreitet):** Kreuzigung und Tod Jesu (alle vier Evangelien; 1 Kor 15,3–4) gegen 4:157; Jesus als Sohn Gottes und Gott (Joh 1,1.14; 20,28; Mk 14,61–62) gegen 5:72, 9:30 und Sure 112; die Taufe auf den einen Namen von Vater, Sohn und Heiligem Geist (Mt 28,19) gegen 4:171 und 5:73.`,
    sources: [
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:47', quote: `Und die Leute des Evangeliums sollen nach dem richten, was Allah darin herabgesandt hat. Wer nicht nach dem richtet, was Allah herabgesandt hat, das sind die Frevler.`, original: `wa-l-yaḥkum ahlu l-injīli bi-mā anzala llāhu fīhi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/47' },
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:43', quote: `Wie sollten sie dich zum Richter machen, wo sie doch die Tora haben, in der das Urteil Allahs ist?`, original: `wa-kayfa yuḥakkimūnaka wa-ʿindahumu t-tawrātu fīhā ḥukmu llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/43' },
      { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:94', quote: `Und wenn du über das, was Wir zu dir herabgesandt haben, im Zweifel bist, dann frage diejenigen, die vor dir die Schrift lesen.`, original: `fa-s\'ali lladhīna yaqra\'ūna l-kitāba min qablik`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/10/94' },
      { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:115', quote: `Vollendet ist das Wort deines Herrn in Wahrhaftigkeit und Gerechtigkeit. Niemand kann Seine Worte abändern.`, original: `lā mubaddila li-kalimātihi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/6/115' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,35', quote: `Himmel und Erde werden vergehen; aber meine Worte werden nicht vergehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–4', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Schrift nie als Besitz eines Einzelnen gehütet, sondern als gemeinsames Erbe aller Kirchen in vielen Sprachen – darunter die koptische Kirche mit ihren eigenen Übersetzungen seit dem 3. Jahrhundert. Schon die Väter kannten Abschreibfehler und korrigierten sie offen (Origenes, Hieronymus); gerade diese Vielzahl unabhängiger Überlieferungen macht eine unbemerkte, flächendeckende Verfälschung unmöglich. Christliche Theologen unter islamischer Herrschaft – Timotheus I. vor dem Kalifen al-Mahdi (781), die Awlad al-'Assal im ayyubidischen Kairo – haben genau diesen Einwand bereits beantwortet.`,
    detail: `Der hl. Athanasius listet 367 in seinem 39. Osterfestbrief exakt die 27 Bücher des Neuen Testaments auf und schärft ein, niemand dürfe davon etwas wegnehmen oder hinzufügen. Der Kanon, den die koptische Kirche damit bezeugt, ist **zweieinhalb Jahrhunderte vor Mohammed** festgeschrieben. Die koptische Tradition hat zudem eine eigene textkritische Leistung hervorgebracht: Im 13. Jahrhundert erstellte al-As'ad ibn al-'Assal eine arabische Evangelienausgabe, die griechische, syrische und koptische Vorlagen verglich – ein Zeugnis dafür, dass die Kirche ihren Text nicht verbarg, sondern prüfte.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Athanasius zählt die 27 Bücher des Neuen Testaments auf, nennt sie „Quellen des Heils" und mahnt, niemand solle ihnen etwas hinzufügen oder wegnehmen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vorrede zu den Evangelien an Papst Damasus', year: '383', quote: `Über die altlateinischen Handschriften klagt Hieronymus, es gebe „fast so viele Textformen wie Handschriften" – und erstellte deshalb eine geprüfte Fassung nach griechischen Vorlagen.`, original: `tot sunt paene quot codices`, status: 'paraphrase', note: 'Der lateinische Halbsatz ist der berühmte Wortlaut; die deutsche Wiedergabe ist sinngemäß.' },
      { kind: 'koptisch', author: 'Awlad al-\'Assal', work: 'Arabische Evangelienrezension des al-As\'ad ibn al-\'Assal', year: '13. Jh.', quote: `Vergleich griechischer, syrischer und koptischer Vorlagen mit Randnoten zu Lesarten – frühe christlich-arabische Textkritik.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Koran sagt, Tora und Evangelium seien Gottes Offenbarung, die Christen zur Zeit Mohammeds hätten sie, sollten danach richten (5:47) – und niemand könne Gottes Worte ändern (6:115). Die Bibel des 7. Jahrhunderts kennen wir aus Handschriften vor Mohammed: Sie lehrt Kreuzigung, Gottessohnschaft und Dreieinigkeit. Entweder war diese Bibel Gottes zuverlässiges Wort – dann widerspricht ihr der Koran. Oder sie war verfälscht – dann irrt der Koran, wenn er sie bestätigt. In beiden Fällen kann der Koran nicht von Gott sein.`,
  keyPoints: [
    `**Immanente Kritik:** Das Dilemma arbeitet nur mit dem Koran und mit unbestreitbaren historischen Fakten – kein christliches Dogma wird vorausgesetzt.`,
    `**Der Koran bezeugt die Gegenwart der Schrift:** „wo sie doch die Tora haben" (5:43), „bestätigend, was bei euch ist" (2:41), „bei ihnen aufgeschrieben" (7:157), „die vor dir die Schrift lesen" (10:94). Die Rede ist von Büchern, die im 7. Jahrhundert vorlagen.`,
    `**Gottes Wort ist laut Koran unveränderlich** (6:34; 6:115; 10:64; 18:27) – und der Koran nennt die Tora ausdrücklich „das Wort Allahs" (2:75).`,
    `**Die Bibel des 7. Jahrhunderts ist bekannt:** Codex Vaticanus, Sinaiticus, Alexandrinus, die Papyri, die Peschitta und die sahidische und bohairische koptische Übersetzung liegen alle vor 610.`,
    `**Der Inhalt ist eindeutig:** Kreuzigung und Tod Jesu, Gottessohnschaft, Taufe auf den dreieinigen Namen – das steht in jeder dieser Handschriften, nicht nur in einer „Auslegung".`,
    `**Jeder Fluchtweg landet in einem der beiden Hörner:** Verfälschung *vor* Mohammed widerspricht 5:43–47 und 10:94; Verfälschung *nach* Mohammed widerlegen die Handschriften; „nur der Sinn wurde verdreht" gibt den zuverlässigen Text zu.`,
  ],
  argument: {
    name: 'Das Islamische Dilemma',
    summary: 'Der Koran bestätigt die Schrift der Christen seiner Zeit – diese Schrift widerspricht dem Koran. Beides zugleich kann nicht von Gott stammen.',
    premises: [
      {
        text: `P1: Der Koran bezeugt Tora und Evangelium als von Gott herabgesandte Offenbarung.`,
        support: `Dies ist für jeden Muslim Glaubensartikel (Glaube an die Bücher, 2:285; 4:136). Der Koran nennt die Tora „Rechtleitung und Licht" (5:44), das Evangelium ebenso (5:46), und beschreibt sich als „bestätigend, was vor ihm war" (3:3–4).`,
        sources: [
          { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:3–4', quote: `Er hat dir das Buch mit der Wahrheit herabgesandt, bestätigend, was vor ihm war, und Er hat die Tora und das Evangelium herabgesandt, zuvor, als Rechtleitung für die Menschen.`, original: `muṣaddiqan li-mā bayna yadayhi wa-anzala t-tawrāta wa-l-injīl`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/3-4' },
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:46', quote: `Und Wir ließen ihren Spuren Jesus, den Sohn der Maria, folgen, bestätigend, was von der Tora vor ihm war, und Wir gaben ihm das Evangelium, in dem Rechtleitung und Licht ist.`, original: `wa-ātaynāhu l-injīla fīhi hudan wa-nūr`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/46' },
        ],
      },
      {
        text: `P2: Der Koran setzt voraus, dass Juden und Christen zur Zeit Mohammeds diese Offenbarung besaßen und danach richten konnten.`,
        support: `Die Verse stehen im Präsens und richten sich an Zeitgenossen: „wo sie doch die Tora haben" (5:43); „die Leute des Evangeliums sollen richten" (5:47); „ihr fußt auf nichts, bis ihr die Tora und das Evangelium befolgt" (5:68); „bringt die Tora und lest sie vor" (3:93); „die ihn bei sich aufgeschrieben finden" (7:157); „frage die, die vor dir die Schrift lesen" (10:94); „bestätigend, was bei euch ist" (2:41; 2:91; 4:47).`,
        sources: [
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:68', quote: `Sag: O Leute der Schrift, ihr fußt auf nichts, bis ihr die Tora und das Evangelium befolgt und das, was zu euch von eurem Herrn herabgesandt worden ist.`, original: `ḥattā tuqīmū t-tawrāta wa-l-injīla wa-mā unzila ilaykum min rabbikum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/68' },
          { kind: 'koran', work: 'Sure 7 (al-A\'raf)', ref: '7:157', quote: `… den sie bei sich in der Tora und im Evangelium aufgeschrieben finden.`, original: `alladhī yajidūnahu maktūban ʿindahum fī t-tawrāti wa-l-injīl`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/7/157' },
          { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:93', quote: `Sag: So bringt die Tora herbei und lest sie vor, wenn ihr wahrhaftig seid.`, original: `qul fa\'tū bi-t-tawrāti fa-tlūhā in kuntum ṣādiqīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/93' },
          { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:41', quote: `Und glaubt an das, was Ich herabgesandt habe, bestätigend, was bei euch ist.`, original: `muṣaddiqan li-mā maʿakum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/41' },
        ],
      },
      {
        text: `P3: Niemand kann Gottes Worte verändern.`,
        support: `Der Koran sagt es viermal ohne Einschränkung (6:34; 6:115; 10:64; 18:27) und nennt die Tora ausdrücklich „das Wort Allahs" (kalām Allāh, 2:75). Ein Gott, der seine Offenbarung als „Rechtleitung und Licht" sendet und die Menschen auf sie verpflichtet, lässt sie nicht unbemerkt untergehen.`,
        sources: [
          { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:34', quote: `Niemand kann die Worte Allahs abändern.`, original: `wa-lā mubaddila li-kalimāti llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/6/34' },
          { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:64', quote: `Es gibt keine Abänderung für die Worte Allahs.`, original: `lā tabdīla li-kalimāti llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/10/64' },
          { kind: 'koran', work: 'Sure 18 (al-Kahf)', ref: '18:27', quote: `Und verlies, was dir vom Buch deines Herrn eingegeben wird. Niemand kann Seine Worte abändern.`, original: `lā mubaddila li-kalimātihi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/18/27' },
          { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:75', quote: `… wo doch eine Gruppe von ihnen das Wort Allahs hörte und es dann, nachdem sie es begriffen hatte, wissentlich verdrehte.`, original: `yasmaʿūna kalāma llāhi thumma yuḥarrifūnahu`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/75', note: 'Derselbe Vers, der eine Verdrehung erwähnt, nennt die Tora „Wort Allahs".' },
        ],
      },
      {
        text: `P4: Die Schrift, die Christen zur Zeit Mohammeds besaßen, ist im Wesentlichen identisch mit der heutigen Bibel.`,
        support: `Vollständige Bibeln und Teilhandschriften in Griechisch, Syrisch, Koptisch und Latein aus dem 2. bis 6. Jahrhundert liegen vor, verteilt über Kirchen, die einander theologisch bekämpften. Ihr Text deckt sich in allen Kernaussagen mit dem heutigen; die Textvarianten berühren keine Lehre.`,
        sources: [
          { kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament: Its Transmission, Corruption, and Restoration', year: '4. Aufl. 2005', quote: `Standardwerk zur Handschriftenlage: Papyri, große Pergamentkodizes des 4./5. Jh. und frühe Übersetzungen (syrisch, koptisch, lateinisch).`, status: 'paraphrase' },
          { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Early Versions of the New Testament: Their Origin, Transmission, and Limitations', year: '1977', quote: `Behandelt u. a. die sahidische und bohairische koptische Übersetzung und die syrische Peschitta als frühe, unabhängige Textzeugen.`, status: 'paraphrase' },
          { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, Anhang mit Interview)', quote: `Ehrman stimmt Metzger zu, dass wesentliche christliche Glaubensinhalte von den Textvarianten der neutestamentlichen Überlieferung nicht berührt werden.`, original: `essential Christian beliefs are not affected by textual variants in the manuscript tradition of the New Testament`, status: 'paraphrase', note: 'Vielfach zitiertes Zugeständnis aus dem Q&A-Anhang; Seitenzahl je nach Ausgabe verschieden.' },
        ],
      },
      {
        text: `P5: Diese Bibel lehrt Kernaussagen, die der Koran ausdrücklich verneint.`,
        support: `Kreuzigung und Tod Jesu (Mk 15; Joh 19,30; 1 Kor 15,3–4) gegen 4:157; Jesus als Sohn Gottes und Gott (Joh 1,1; 20,28) gegen 5:72, 9:30, Sure 112; der eine Name von Vater, Sohn und Heiligem Geist (Mt 28,19) gegen 4:171 und 5:73. Das ist nicht eine Frage der Auslegung, sondern der Wortlaut der Erzählungen.`,
        sources: [
          { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:157', quote: `… sie haben ihn nicht getötet und haben ihn nicht gekreuzigt, sondern es erschien ihnen nur so.`, original: `wa-mā qatalūhu wa-mā ṣalabūhu wa-lākin shubbiha lahum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/157' },
          { kind: 'bibel', work: 'Johannes', ref: '19,30', quote: `Da nun Jesus den Essig genommen hatte, sprach er: Es ist vollbracht! und neigte das Haupt und verschied.`, translation: 'Luther 1912', status: 'verbatim' },
          { kind: 'bibel', work: 'Matthäus', ref: '28,19', quote: `Darum gehet hin und lehret alle Völker und taufet sie im Namen des Vaters und des Sohnes und des heiligen Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
        ],
      },
    ],
    inferences: [
      `Aus P1–P3: Die Tora und das Evangelium, die zur Zeit Mohammeds vorlagen, waren nach dem Koran Gottes unverändertes Wort.`,
      `Aus P4: Dieses Wort ist im Wesentlichen identisch mit der heutigen Bibel.`,
      `Aus P5: Der Koran widerspricht in zentralen Punkten dem, was er selbst als unveränderliches Wort Gottes bestätigt.`,
    ],
    conclusion: `Der Koran kann nicht zugleich die Bibel als Gottes unveränderliches Wort bestätigen und ihren Kerninhalt verneinen. Ob man die Bibel zur Zeit Mohammeds für zuverlässig oder für verfälscht hält – in beiden Fällen enthält der Koran einen Irrtum, und ein Buch mit Irrtümern ist nicht Gottes Wort.`,
    horns: [
      { label: 'Horn A: Die Bibel des 7. Jahrhunderts war zuverlässig', text: `Dann ist sie es auch heute (P4) – denn wir besitzen genau diesen Text. Sie lehrt Kreuzigung, Gottessohnschaft und Dreieinigkeit. Der Koran widerspricht ihr also in seinem Kern (4:157; 5:72–73; 112) und damit dem Wort Gottes, das er selbst bestätigt.` },
      { label: 'Horn B: Die Bibel des 7. Jahrhunderts war verfälscht', text: `Dann irrt der Koran, wenn er sie bestätigt (2:41; 3:3), die Christen auf sie verpflichtet (5:47; 5:68), Zweifelnde an ihre Leser verweist (10:94) und zugleich behauptet, niemand könne Gottes Worte ändern (6:115; 18:27). Ein Gott, der weiß, dass das Buch verfälscht ist, befiehlt nicht, danach zu richten.` },
    ],
  },
  voices: [
    {
      person: 'david-wood',
      role: 'als Philosoph und Debattierer, der das Dilemma bekannt machte',
      text: `Wood hat das Argument in eine einfache Form gebracht: Der Koran bestätigt die Schrift der Christen seiner Zeit; diese Schrift widerspricht dem Koran; also ist der Koran falsch – „egal, wie man es dreht". Er betont, dass der Christ keine einzige christliche Voraussetzung braucht: Es genügen die Verse 5:43–47, 5:68, 7:157, 10:94 und 6:115 sowie die Handschriften vor 610. Jede muslimische Antwort, die er in Debatten hörte, ließ sich einem der beiden Hörner zuordnen.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Wood', work: 'The Islamic Dilemma (Videoreihe und Vorträge, Acts17 Apologetics)', quote: `Formuliert das Dilemma: Entweder hatten Christen zur Zeit Mohammeds Gottes Wort – dann widerspricht ihm der Koran; oder nicht – dann irrt der Koran über die Schrift.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Religionsgespräch mit dem Kalifen al-Mahdi (781)',
      text: `Schon im 8. Jahrhundert stand der Vorwurf der Schriftverfälschung im Raum. Timotheus antwortete dem Kalifen sinngemäß, es gebe weder ein Motiv noch eine Möglichkeit: Juden und Christen, die einander in vielem widersprechen, überliefern denselben Text der Propheten; wer hätte die Bücher in allen Sprachen und an allen Orten zugleich ändern können, ohne dass die jeweils andere Seite es aufdeckte?`,
      sources: [
        { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781', quote: `Timotheus weist den Verfälschungsvorwurf mit dem Hinweis zurück, dass Juden und Christen trotz ihrer Gegnerschaft dieselbe Schrift bewahren.`, status: 'paraphrase', note: 'Englische Übersetzung: A. Mingana, Woodbrooke Studies 2 (1928).' },
      ],
    },
    {
      person: 'ibn-al-assal',
      role: 'als koptische Gelehrtenfamilie im ayyubidischen Kairo',
      text: `Die Awlad al-'Assal lebten mitten in der islamischen Welt und antworteten auf muslimische Einwände in deren eigener Sprache. Ihr Beitrag zum Dilemma ist ein praktischer: Al-As'ad ibn al-'Assal verglich die arabischen Evangelien mit griechischen, syrischen und koptischen Vorlagen und notierte Unterschiede offen am Rand. Die Kirche hatte nichts zu verbergen – gerade weil viele unabhängige Textzeugen existierten, konnte jeder Fehler erkannt werden.`,
      sources: [
        { kind: 'koptisch', author: 'al-As\'ad ibn al-\'Assal', work: 'Arabische Evangelienrezension', year: 'Mitte 13. Jh.', quote: `Textkritische Ausgabe der Evangelien unter Vergleich griechischer, syrischer und koptischer Handschriften.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'metzger',
      role: 'als Textkritiker',
      text: `Metzger hat die Überlieferung des Neuen Testaments wie kein Zweiter dokumentiert: Tausende griechische Handschriften, dazu frühe Übersetzungen ins Lateinische, Syrische und Koptische, die unabhängig voneinander entstanden. Für das Dilemma ist entscheidend, dass diese Übersetzungen den Text einer Zeit festhalten, die lange vor dem Islam liegt – und dass sie miteinander übereinstimmen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Early Versions of the New Testament', year: '1977', quote: `Die frühen Übersetzungen (u. a. koptisch und syrisch) sind eigenständige Zeugen des Textes im 3.–5. Jh.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester, der mit islamischen Quellen argumentiert',
      text: `Vater Zakaria Botros hat in seinen arabischen Sendungen immer wieder klassische muslimische Ausleger zitiert, die die Verfälschungsverse auf die *Deutung* und nicht auf den *Text* beziehen. Seine Methode: Er stellt Fragen aus den Quellen des Gesprächspartners selbst, damit dieser nicht das Gefühl hat, ein Christ zwinge ihm etwas auf – der Koran und die eigenen Gelehrten stellen die Frage.`,
    },
  ],
  dialog: [
    {
      id: 'injil-verloren',
      objection: `Der Koran bestätigt nicht eure Bibel, sondern das Injil – das Buch, das Gott Jesus gab. Dieses Buch ist verloren. Eure vier Evangelien sind Biografien über Jesus, von Menschen geschrieben.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 1,
      answer: `Dann frage ich: Wie konnte der Koran den Christen zur Zeit Mohammeds befehlen, nach dem Injil zu richten (5:47), wenn sie es gar nicht hatten? Und wie konnten sie Mohammed „bei sich im Injil aufgeschrieben finden" (7:157), wenn das Buch verloren war? Der Koran spricht von einem Buch, das im 7. Jahrhundert vorlag – und das einzige Evangelium, das Christen damals hatten, war das, was wir heute haben.`,
      detail: `Das ist der erste und häufigste Fluchtweg; er greift P1 an, landet aber sofort bei P2. Der Koran nennt nirgends ein *anderes* Injil als das der Christen; er klagt sie nie an, ihr Injil verloren zu haben, sondern verpflichtet sie darauf. Die Christen in Najran, Abessinien, Syrien und Ägypten, mit denen Mohammed und seine Gefährten Kontakt hatten, lasen die vier Evangelien – in Griechisch, Syrisch, Koptisch oder Ge'ez. Für sie war „das Evangelium" (*euangelion*, syrisch *ewangeliyon*, davon arabisch *injil*) das Viererevangelium. Siehe ausführlich den Claim „Das Injil ist nicht das Neue Testament".`,
      questionsBack: [
        `Wo im Koran steht, dass das Injil verloren ging?`,
        `Wenn das Injil verloren war: Nach welchem Buch sollten die Christen in 5:47 richten?`,
      ],
      followUps: [
        {
          id: 'vers-5-47-vergangenheit',
          objection: `5:47 ist Erzählung über die Vergangenheit: Gott sagte damals zu den Christen zur Zeit Jesu, sie sollten nach dem Injil richten. Das betrifft nicht das 7. Jahrhundert.`,
          objectionBy: 'Ali Ataie',
          targetsPremise: 2,
          answer: `Selbst wenn man 5:47 so liest – 5:43 und 5:68 schließen diesen Ausweg. In 5:43 heißt es im Präsens über Juden, die zu Mohammed kommen: „wo sie doch die Tora *haben*, in der Allahs Urteil ist". Und in 5:68 wird Mohammed befohlen: „*Sag*: O Leute der Schrift, ihr fußt auf nichts, bis ihr die Tora und das Evangelium befolgt." Das richtet sich an seine Zuhörer, nicht an Menschen vor 600 Jahren.`,
          detail: `Einige muslimische Ausleger ergänzen in 5:47 ein „Wir sagten" (Lesart *wa-li-yaḥkuma* „damit sie richten" bei Hamza ist eine Variante). Das ist eine legitime Diskussion – sie ändert aber nichts am Gesamtbefund: 5:43 (Präsens, „bei ihnen ist die Tora"), 5:68 (Imperativ „Sag!"), 3:93 („bringt die Tora und lest sie vor"), 7:157 („die ihn bei sich aufgeschrieben finden") und 10:94 („die vor dir die Schrift lesen") setzen alle die Gegenwart der Schrift im 7. Jahrhundert voraus. Das Dilemma braucht nur **einen** dieser Verse.`,
          sources: [
            { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:43', quote: `Wie sollten sie dich zum Richter machen, wo sie doch die Tora haben, in der das Urteil Allahs ist?`, original: `wa-ʿindahumu t-tawrātu fīhā ḥukmu llāh`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/43' },
          ],
          followUps: [
            {
              id: 'vers-5-68-vorwurf',
              objection: `5:68 ist ein Vorwurf, kein Lob: „Ihr fußt auf nichts." Der Vers zeigt, dass sie ihre Schrift eben nicht befolgen – das sagt nichts über die Echtheit des Textes.`,
              objectionBy: 'Mohammed Hijab',
              targetsPremise: 2,
              answer: `Genau – es ist ein Vorwurf: Ihr *befolgt* die Tora und das Evangelium nicht. Aber man kann nur vorwerfen, ein Buch nicht zu befolgen, das man hat. Gott sagt nicht: „Ihr habt nichts, weil euer Buch gefälscht ist", sondern: „Ihr habt nichts, *bis* ihr es befolgt." Die Lösung, die der Koran anbietet, ist also: Lest und befolgt euer Buch. Das ergibt nur Sinn, wenn das Buch Gottes Wort ist.`,
              detail: `Das arabische *iqāma* („aufrichten, befolgen, praktizieren") setzt einen vorhandenen, verbindlichen Text voraus – so wie *iqāmat aṣ-ṣalāt* das Gebet voraussetzt. Ein verfälschtes Buch „aufzurichten" wäre Gehorsam gegenüber Menschenwort; der Koran würde damit Irrtum gebieten.`,
              followUps: [
                {
                  id: 'iqama-heisst-mohammed-annehmen',
                  objection: `„Die Tora befolgen" heißt: die Ankündigungen Mohammeds darin ernst nehmen und ihm folgen. Mehr verlangt der Vers nicht.`,
                  objectionBy: 'Yasir Qadhi',
                  targetsPremise: 2,
                  answer: `Dann muss die Tora, die die Juden im 7. Jahrhundert hatten, diese Ankündigung zuverlässig enthalten haben – sonst könnten sie sie nicht befolgen. Du stützt dich also auf die Zuverlässigkeit ihrer Schrift. Wenn sie zuverlässig genug war, um Mohammed darin zu finden, dann ist sie auch zuverlässig, wenn sie vom Tod und der Auferstehung des Messias spricht. Du kannst nicht dasselbe Buch für die Prophezeiung als wahr und für die Kreuzigung als falsch erklären.`,
                  detail: `Hier zeigt sich das Grundmuster: Die Bibel wird als Zeugin aufgerufen, wo sie dem Islam zu nützen scheint (Dtn 18,18; Joh 14–16), und als verfälscht verworfen, wo sie ihm widerspricht. Das ist keine Methode, sondern Rosinenpickerei. Zu den angeblichen Ankündigungen selbst siehe das Topic „Mohammed und die Bibel".`,
                  questionsBack: [
                    `Nach welchem Kriterium entscheidest du, welche Verse der Bibel echt sind – außer danach, ob sie mit dem Koran übereinstimmen?`,
                  ],
                  followUps: [
                    {
                      id: 'prophezeiungen-entfernt',
                      objection: `Die klaren Ankündigungen Mohammeds wurden später aus der Bibel entfernt – deshalb findet ihr sie heute nicht.`,
                      objectionBy: 'verbreiteter muslimischer Einwand',
                      targetsPremise: 4,
                      answer: `Wann? Wenn vor Mohammed, dann konnten die Juden und Christen ihn in 7:157 nicht „bei sich aufgeschrieben finden" – der Koran irrt. Wenn nach Mohammed, dann müssten die Handschriften von vor 610 diese klaren Ankündigungen enthalten. Sie enthalten sie nicht – Codex Sinaiticus, Vaticanus und die koptischen Übersetzungen haben denselben Text wie wir. Beide Zeitpunkte führen in eines der beiden Hörner.`,
                      detail: `Das ist das Dilemma im Kleinen. Hinzu kommt: Eine Entfernung nach 632 hätte gleichzeitig in griechischen, syrischen, koptischen, lateinischen, äthiopischen und armenischen Handschriften geschehen müssen – in Kirchen, die einander als Häretiker betrachteten (Kopten, Chalcedonenser, Kirche des Ostens) – und in den jüdischen Handschriften der Tora. Es gibt kein historisches Zeugnis eines solchen Vorgangs, keine „Vorher-Handschrift", keinen Widerspruch einer Gemeinde.`,
                      questionsBack: [
                        `Kannst du mir eine einzige Handschrift von vor 610 zeigen, die eine klarere Ankündigung Mohammeds enthält als unsere heutigen Bibeln?`,
                      ],
                      followUps: [
                        {
                          id: 'keine-originale-mohammed',
                          objection: `Ihr habt doch gar keine Originale! Eure ältesten Handschriften sind Jahrhunderte nach Jesus geschrieben. Ihr könnt nicht wissen, was ursprünglich drinstand.`,
                          objectionBy: 'Shabir Ally',
                          targetsPremise: 4,
                          answer: `Für das Dilemma brauche ich keine Originale von Jesus – ich brauche den Text, den die Christen zur Zeit Mohammeds hatten. Und den haben wir: vollständige Bibeln aus dem 4. und 5. Jahrhundert, also *vor* Mohammed. Die Frage lautet nicht „Was schrieb Markus?", sondern „Was lasen die Christen, auf deren Buch der Koran sich beruft?" Diese Frage ist eindeutig beantwortet.`,
                          detail: `Dieser Einwand verwechselt zwei Fragen. Die Frage nach dem *Urtext* (Autographen) ist eine wichtige Frage der Textkritik – und auch sie lässt sich mit sehr hoher Sicherheit beantworten (siehe „Die Bibel hat 400.000 Textvarianten"). Für das Dilemma ist aber nur der Text des 7. Jahrhunderts relevant. Übrigens besitzen auch Muslime keine Autographen: Die ältesten Koranhandschriften sind Abschriften, und auch der Koran wird mit Handschriftenvergleich rekonstruiert.`,
                          followUps: [
                            {
                              id: 'handschriften-varianten-dilemma',
                              objection: `Aber eure Handschriften widersprechen sich doch – Sinaiticus und Vaticanus weichen an Tausenden Stellen voneinander ab. Welche davon soll der Koran bestätigt haben?`,
                              objectionBy: 'Mohammed Hijab',
                              targetsPremise: 4,
                              answer: `Das stimmt – es gibt viele Varianten, meist Rechtschreibung und Wortstellung. Aber nimm irgendeine dieser Handschriften: Jede lehrt die Kreuzigung, den Tod und die Auferstehung Jesu und seine Gottessohnschaft. Egal, welche Handschrift ein Christ im 7. Jahrhundert in der Hand hielt – das Dilemma gilt für jede einzelne. Die Varianten retten den Koran nicht, weil keine Variante die Kreuzigung beseitigt.`,
                              detail: `Hier ist ein ehrliches Zugeständnis wichtig: Textvarianten sind real, einige betreffen ganze Abschnitte (Mk 16,9–20; Joh 7,53–8,11). Keine einzige davon ändert aber eine Kernlehre – das räumt auch Bart Ehrman ein. Für das Dilemma bedeutet das: Man kann die „schlechteste" Handschrift nehmen – sie widerspricht 4:157 genauso.`,
                              sources: [
                                { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Misquoting Jesus (Taschenbuchausgabe, Anhang mit Interview)', quote: `Wesentliche christliche Glaubensinhalte werden von den Textvarianten nicht berührt.`, status: 'paraphrase' },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'injil-form-eines-buches',
          objection: `Eine Offenbarung hat die Form des Korans: Gott spricht direkt. Eure Evangelien erzählen über Jesus in der dritten Person – das kann nicht das Injil sein, das Jesus herabgesandt wurde.`,
          objectionBy: 'Ali Ataie',
          targetsPremise: 1,
          answer: `Das ist eine Erwartung, die man aus dem Koran in die Vergangenheit zurückträgt. Der Koran selbst beschreibt nirgends, wie das Injil aussah, und er tadelt die Christen nie dafür, das falsche Buch zu lesen. Er verpflichtet sie auf das Buch, das sie hatten. Und auch der Koran erzählt Geschichten in der dritten Person – über Mose, Josef, Maria.`,
          detail: `Das Wort *injil* ist ein Lehnwort von griechisch *euangelion* (über äthiopisch *wangel* oder syrisch *ewangeliyon*). Christen benutzten es für die Evangelienbücher. Hätte der Koran ein anderes Buch gemeint, hätte er den Unterschied angesprochen – stattdessen setzt er voraus, dass die Christen wissen, wovon er spricht.`,
          followUps: [
            {
              id: 'evangelien-menschen-lukas',
              objection: `Lukas schreibt selbst, er habe recherchiert (Lk 1,1–4). Das ist ein menschliches Werk, keine Offenbarung.`,
              objectionBy: 'Ahmed Deedat',
              targetsPremise: 1,
              answer: `Lukas recherchierte – und der Heilige Geist leitete ihn; das schließt sich nicht aus (2 Petr 1,21). Aber für das Dilemma ist das gar nicht der Punkt: Der Koran bestätigt das Buch, das Christen im 7. Jahrhundert als Evangelium lasen – und dazu gehörte Lukas. Ob dir unser Inspirationsverständnis gefällt, ändert nichts daran, worauf der Koran die Christen verpflichtete.`,
              detail: `Siehe ausführlich „Die Evangelien wurden von unbekannten Menschen geschrieben". Das christliche Inspirationsverständnis ist kein Diktat, sondern Gottes Wirken durch menschliche Autoren mit ihrer Sprache und Persönlichkeit.`,
            },
          ],
        },
      ],
    },
    {
      id: 'tahrif-verse-dilemma',
      objection: `Der Koran sagt doch selbst, dass sie ihre Schrift verfälscht haben: Sie „verdrehen die Worte von ihren Stellen" (4:46; 5:13) und „schreiben die Schrift mit ihren Händen und sagen: Das ist von Allah" (2:79). Damit ist P3 erledigt.`,
      objectionBy: 'Yasir Qadhi',
      targetsPremise: 3,
      answer: `Lies den Kontext: 4:46 sagt, sie verdrehen „mit ihren Zungen" – also mündlich. 3:78 ebenso: Sie verdrehen ihre Zungen beim Vorlesen. 2:79 spricht von einer Gruppe, die eigene Schriften verfasst und als göttlich ausgibt – nicht davon, dass alle Exemplare der Tora weltweit geändert wurden. Und kein einziger dieser Verse sagt etwas über die Christen und ihr Evangelium; für sie sagt 5:14 nur, sie hätten „einen Teil vergessen". Dieselbe Sure, die von Verdrehung spricht, befiehlt drei Verse später, nach dem Evangelium zu richten (5:47).`,
      detail: `Die klassische Auslegung unterscheidet *taḥrīf al-maʿnā* (Verdrehung des Sinnes) und *taḥrīf al-lafẓ / an-naṣṣ* (Änderung des Wortlauts). Viele frühe Ausleger verstanden die Verse im ersten Sinn. Gordon Nickel hat gezeigt, dass die frühesten Korankommentare die Verse überwiegend auf Verbergen, Falschdeutung und konkrete Einzelfälle beziehen, nicht auf eine globale Textverfälschung. Die systematische Lehre der Textverfälschung wurde erst von Ibn Hazm (11. Jh.) ausgebaut. Ausführlich: Claim „tahrif-verse".`,
      sources: [
        { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:46', quote: `Unter denen, die Juden sind, verdrehen manche die Worte von ihren Stellen … indem sie mit ihren Zungen verdrehen und den Glauben schmähen.`, original: `yuḥarrifūna l-kalima ʿan mawāḍiʿihi … layyan bi-alsinatihim`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/46' },
        { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:14', quote: `Und mit denen, die sagen: „Wir sind Christen", schlossen Wir ihr Abkommen; aber sie vergaßen einen Teil dessen, womit sie ermahnt worden waren.`, original: `fa-nasū ḥaẓẓan mimmā dhukkirū bihi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/14' },
        { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'Narratives of Tampering in the Earliest Commentaries on the Qur\'an', year: '2011', quote: `Die frühesten Kommentare deuten die „Verfälschungsverse" vorwiegend als Verbergen und Falschauslegung, nicht als flächendeckende Textänderung.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welcher Vers sagt, dass das *Evangelium* der Christen im Wortlaut geändert wurde?`,
        `Wenn 5:13 eine Textverfälschung meint – warum befiehlt dann 5:47 den Christen, nach dem Evangelium zu richten?`,
      ],
      followUps: [
        {
          id: 'vers-2-79-eindeutig',
          objection: `2:79 ist eindeutig: „Wehe denen, die die Schrift mit ihren eigenen Händen schreiben und dann sagen: Das ist von Allah." Das ist Textfälschung, schwarz auf weiß.`,
          objectionBy: 'Mohammed Hijab',
          targetsPremise: 3,
          answer: `Der Vers davor (2:78) nennt die Leute: „Ungelehrte (*ummiyyūn*), die die Schrift nicht kennen, sondern nur Wunschvorstellungen haben." 2:79 beschreibt also Menschen, die eigene Texte schreiben und als göttlich verkaufen – so wie es zu allen Zeiten Fälscher gab. Es heißt nicht, dass die Tora selbst in allen Exemplaren ersetzt wurde. Und dieselbe Sure sagt nur zehn Verse später, der Koran bestätige, „was bei ihnen ist" (2:89; 2:91).`,
          detail: `Die Unterscheidung ist entscheidend: Ein gefälschtes Zusatzbuch zu schreiben ist etwas anderes, als das Original zu vernichten. Christen kennen das gut – es gibt zahlreiche gefälschte Evangelien (Barnabas, Thomas …), die die Kirche gerade *deshalb* erkannte, weil das echte Evangelium vorlag. Fälschung setzt ein Original voraus.`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:78–79', quote: `Und unter ihnen gibt es Ungelehrte, die die Schrift nicht kennen, sondern nur Wunschvorstellungen … Wehe denen, die die Schrift mit ihren eigenen Händen schreiben und dann sagen: „Das ist von Allah", um sie für einen geringen Preis zu verkaufen.`, original: `wa-minhum ummiyyūna lā yaʿlamūna l-kitāba illā amāniyya … fa-waylun li-lladhīna yaktubūna l-kitāba bi-aydīhim`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/78-79' },
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:91', quote: `… während es die Wahrheit ist, die bestätigt, was bei ihnen ist.`, original: `wa-huwa l-ḥaqqu muṣaddiqan li-mā maʿahum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/91' },
          ],
          followUps: [
            {
              id: 'ibn-abbas-bukhari-7363',
              objection: `Ibn Abbas, der größte Koranausleger der Gefährten, sagt in Sahih al-Bukhari 7363 ausdrücklich, die Leute der Schrift hätten Allahs Buch verändert und mit eigenen Händen geschrieben. Willst du ihm widersprechen?`,
              objectionBy: 'Yasir Qadhi',
              targetsPremise: 3,
              answer: `Das ist richtig, und ich gebe es offen zu: Manche frühen Muslime glaubten an eine Textverfälschung. Aber dasselbe Werk, Sahih al-Bukhari, enthält im Buch über den Tauhid die Aussage, *niemand* könne ein Wort aus Allahs Büchern entfernen, sie verdrehten nur die Deutung. Deine eigene Tradition ist hier gespalten. Und vor allem: Wer auch immer es sagt – wenn die Schrift *vor* Mohammed geändert war, irrt der Koran in 5:43–47; wenn *danach*, widerlegen es die Handschriften.`,
              detail: `**Bukhari 7363:** Ibn Abbas tadelt Muslime, die die Leute der Schrift befragen: Ihr eigenes Buch sei das neueste und unverfälschte, während Allah mitgeteilt habe, dass die Leute der Schrift Allahs Buch verändert und mit ihren Händen geschrieben hätten (Bezug auf 2:79).

**Bukhari, Kitab at-Tawhid, Kapitel zu 85:21–22 („Es ist ein ruhmreicher Koran auf einer wohlverwahrten Tafel"):** Dort wird zu *yuḥarrifūna* erklärt: „sie entfernen – aber niemand entfernt ein Wort aus einem der Bücher Allahs; sondern sie verdrehen es, indem sie es falsch deuten." Ehrlicherweise: Ibn Hajar weist in *Fath al-Bari* darauf hin, dass dieser Satz nicht als zusammenhängende Überlieferung von Ibn Abbas belegt ist, sondern zumindest teilweise al-Bukharis eigene Erklärung darstellt. Das macht ihn nicht schwächer, sondern stärker: Es ist das Urteil des Sammlers des angesehensten Hadithwerkes.

**Der logische Kern:** Die Autorität von Ibn Abbas kann die Logik nicht aufheben. Wenn Gott im Koran befiehlt, nach der vorliegenden Tora zu richten (5:43), dann kann diese Tora nicht schon gefälscht gewesen sein.`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '7363', quote: `Ibn Abbas: Euer Buch ist das neueste von Allah und unverfälscht; Allah hat euch mitgeteilt, dass die Leute der Schrift Allahs Buch verändert und mit ihren eigenen Händen geschrieben haben.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:7363' },
                { kind: 'hadith', work: 'Sahih al-Bukhari, Kitab at-Tawhid, Kapitel „Bal huwa qur\'anun majid fi lawhin mahfuz" (zu 85:21–22)', quote: `„Sie verdrehen" heißt: sie entfernen; doch niemand entfernt ein Wort aus einem der Bücher Allahs, sondern sie verdrehen es, indem sie es anders auslegen, als es auszulegen ist.`, original: `yuḥarrifūna: yuzīlūna, wa-laysa aḥadun yuzīlu lafẓa kitābin min kutubi llāhi ʿazza wa-jalla, wa-lākinnahum yuḥarrifūnahu: yataʾawwalūnahu ʿalā ghayri taʾwīlihi`, translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Kapitelüberschrift-Kommentar ohne Hadith-Nummer; nach Ibn Hajar (Fath al-Bari, Bd. 13) nicht zusammenhängend von Ibn Abbas überliefert, sondern al-Bukharis eigene Erläuterung.' },
              ],
              questionsBack: [
                `Wenn Ibn Abbas und al-Bukhari sich hier widersprechen – welches Kriterium entscheidet? Doch wohl der Koran selbst: Und der befiehlt, nach der vorliegenden Tora zu richten (5:43).`,
              ],
              followUps: [
                {
                  id: 'nach-mohammed-geaendert',
                  objection: `Gut, dann wurde die Bibel eben nach Mohammed verändert. Zur Zeit des Propheten war sie noch in Ordnung.`,
                  objectionBy: 'verbreiteter muslimischer Einwand',
                  targetsPremise: 4,
                  answer: `Dann müsste die Bibel von vor 610 anders lauten als heute. Aber wir haben diese Bibeln: Codex Vaticanus und Sinaiticus aus dem 4. Jahrhundert, Papyri aus dem 2. und 3. Jahrhundert, koptische und syrische Übersetzungen. Sie alle lehren Kreuzigung, Tod und Auferstehung Jesu und seine Gottessohnschaft. Wenn die Bibel zur Zeit Mohammeds „in Ordnung" war, dann lehrte eine Bibel „in Ordnung" genau das, was der Koran bestreitet – das ist Horn A.`,
                  detail: `Dieser Ausweg ist der gefährlichste für den Islam, weil er Horn A ausdrücklich bejaht. Außerdem: Wer hätte nach 632 alle Handschriften in Ägypten, Syrien, Mesopotamien, Äthiopien, Armenien, Byzanz und Rom gleichzeitig ändern sollen – in verfeindeten Kirchen, die sich gegenseitig jeden Fehler vorhielten? Und warum hätten sie die Texte gerade *nach* Mohammed in Richtung Kreuzigung geändert, wenn diese schon im 2. Jahrhundert überall bezeugt ist (Ignatius, Justin, Irenäus)?`,
                  questionsBack: [
                    `Welche konkrete Lehre stand in der Bibel des 6. Jahrhunderts anders als heute?`,
                  ],
                  followUps: [
                    {
                      id: 'koptische-texte-spaet',
                      objection: `Eure frühen Handschriften stammen alle aus Ägypten – aus einer einzigen Region mit einer einzigen Theologie. Das ist kein unabhängiger Beweis.`,
                      objectionBy: 'Shabir Ally',
                      targetsPremise: 4,
                      answer: `Viele griechische Papyri stammen aus Ägypten, weil das trockene Klima sie erhalten hat. Aber die syrische Peschitta entstand in Mesopotamien, die altlateinischen Texte im Westen, die armenische und georgische Übersetzung im Kaukasus – und alle lehren dasselbe. Außerdem zitieren die Kirchenväter von Lyon (Irenäus) bis Antiochien (Ignatius) das Neue Testament so ausführlich, dass man es fast ganz aus ihren Zitaten rekonstruieren könnte.`,
                      detail: `Die Kirchenväterzitate sind ein eigener, geografisch weit gestreuter Überlieferungsstrang. Irenäus (um 180) bezeugt bereits die vier Evangelien als feste Sammlung (Adversus Haereses III,11,8). Ägypten war zudem keine theologische Einheit: Dort lebten Gnostiker, Arianer, Melitianer und Orthodoxe nebeneinander – und doch weist die Überlieferung keine Lehrverfälschung auf.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,11,8', year: 'um 180', quote: `Es kann nicht mehr und nicht weniger als vier Evangelien geben – wie es vier Himmelsrichtungen und vier Hauptwinde gibt.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'nur-bedeutung-verdreht',
          objection: `Einverstanden: Vielleicht wurde nur der Sinn verdreht (tahrif al-ma'na), nicht der Text. Dann ist euer Text in Ordnung – aber ihr legt ihn falsch aus. Richtig verstanden lehrt er den Islam.`,
          objectionBy: 'Ali Ataie',
          targetsPremise: 5,
          answer: `Dann sind wir uns einig, dass der Text zuverlässig ist – P4 ist zugestanden. Jetzt lesen wir ihn gemeinsam: Alle vier Evangelien erzählen ausführlich, dass Jesus gekreuzigt wurde, starb und begraben wurde. Das ist keine Auslegungsfrage, sondern eine Erzählung. Wenn der Text stimmt, stimmt die Erzählung – und dann widerspricht 4:157 dem Wort Gottes.`,
          detail: `*Tahrif al-ma'na* rettet den Koran nur bei Lehren, die man „umdeuten" kann. Ein historischer Bericht wie die Passionsgeschichte lässt sich nicht umdeuten, ohne den Text selbst zu leugnen. Gerade weil al-Bukhari, Wahb ibn Munabbih und andere den Text für unverändert hielten, verschiebt sich die Debatte auf den Inhalt – und dort ist der Befund eindeutig.`,
          questionsBack: [
            `Welche Auslegung von Mk 15,37 („Aber Jesus schrie laut und verschied") führt zu „er ist nicht gestorben"?`,
          ],
          followUps: [
            {
              id: 'augenzeugen-getaeuscht',
              objection: `Die Evangelisten berichteten ehrlich, was sie sahen – aber „es erschien ihnen nur so" (4:157). Sie wurden getäuscht; ihr Text ist korrekt überliefert, aber ihr Bericht ist falsch.`,
              objectionBy: 'Shabir Ally',
              targetsPremise: 5,
              answer: `Dann enthält das Injil, das der Koran „Rechtleitung und Licht" nennt (5:46), im Zentrum einen Irrtum – Gott hätte seine eigene Offenbarung über das wichtigste Ereignis falsch berichten lassen. Und wenn du sagst, die Evangelien sind nicht das Injil, bist du zurück beim ersten Fluchtweg. Außerdem: Ein Gott, der die Jünger absichtlich täuscht und so die ganze Christenheit begründet, hätte selbst die Ursache des Christentums geschaffen.`,
              detail: `Das ist das sogenannte Täuschungsdilemma (ausführlich im Topic „Kreuz und Erlösung", Claim „Ein anderer wurde an seiner Stelle gekreuzigt"). Für das Islamische Dilemma reicht: Wenn der Text zuverlässig ist und von Gott stammt, kann er nicht im Kern irren.`,
            },
          ],
        },
      ],
    },
    {
      id: 'vor-mohammed-verfaelscht',
      objection: `Die Bibel war schon lange vor Mohammed verfälscht. Der Koran bestätigt nur den wahren Kern, der darin übrig geblieben ist – und ruft die Leute der Schrift zu diesem Kern zurück.`,
      objectionBy: 'Ibn Hazm (klassisch), heute viele Apologeten',
      targetsPremise: 2,
      answer: `Dann frage ich: Warum verweist Gott Mohammed in 10:94 an die Leser dieses verfälschten Buches, um Zweifel auszuräumen? Warum befiehlt er den Christen, nach dem zu richten, „was Allah *darin* herabgesandt hat" (5:47), statt sie zu warnen? Ein Gott, der weiß, dass ein Buch verfälscht ist, schickt niemanden zu diesem Buch, um Gewissheit zu erlangen. Das ist Horn B: Der Koran hätte sich geirrt.`,
      detail: `Dies ist die konsequenteste muslimische Position (Ibn Hazm, al-Fisal). Ibn Hazm erkannte den Widerspruch zu 5:47 durchaus und musste die Verse auf einen kleinen, unverfälschten Rest beziehen. Aber der Koran unterscheidet nirgends zwischen „verfälschter" und „echter" Tora; er spricht von „der Tora" und „dem Evangelium", die „bei ihnen" sind.`,
      sources: [
        { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:94', quote: `Und wenn du über das, was Wir zu dir herabgesandt haben, im Zweifel bist, dann frage diejenigen, die vor dir die Schrift lesen.`, original: `fa-s\'ali lladhīna yaqra\'ūna l-kitāba min qablik`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/10/94' },
      ],
      followUps: [
        {
          id: 'vers-10-94-konvertiten',
          objection: `10:94 meint die Juden, die Muslime wurden – wie Abdallah ibn Salam. Die soll Mohammed fragen, nicht die Christen mit ihrer verfälschten Bibel.`,
          objectionBy: 'klassische Auslegung, z. B. bei at-Tabari referiert',
          targetsPremise: 2,
          answer: `Auch ein Konvertit kann nur bestätigen, was in der Schrift *steht*, die er liest. Der Vers sagt: „die die Schrift *lesen*" – im Präsens. Wenn diese Schrift verfälscht war, hätte auch der Konvertit aus einem verfälschten Buch vorgelesen. Der Vers setzt voraus, dass das Lesen der vorhandenen Schrift zu Gewissheit führt – also war sie zuverlässig.`,
          followUps: [
            {
              id: 'vers-10-94-hypothetisch',
              objection: `Der Vers ist rein hypothetisch: „Wenn du im Zweifel bist" – aber der Prophet zweifelte nie. Es ist eine rhetorische Figur, keine Aussage über die Bibel.`,
              objectionBy: 'Yasir Qadhi',
              targetsPremise: 2,
              answer: `Einverstanden, dass es hypothetisch formuliert ist. Aber auch eine hypothetische Anweisung muss sinnvoll sein: „Wenn du zweifelst, frag X" ergibt nur Sinn, wenn X verlässlich ist. Niemand sagt: „Wenn du an der Uhrzeit zweifelst, schau auf die kaputte Uhr." Der Koran benutzt die Schrift der Leute des Buches hier als Prüfmaßstab – also war sie für ihn verlässlich.`,
              detail: `Ähnlich 16:43 und 21:7: „Fragt die Leute der Ermahnung (*ahl adh-dhikr*), wenn ihr es nicht wisst" – nach den meisten klassischen Auslegern sind die Leute der früheren Schrift gemeint. Der Koran beruft sich wiederholt auf sie als Zeugen.`,
              sources: [
                { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:43', quote: `So fragt die Leute der Ermahnung, wenn ihr (es) nicht wisst.`, original: `fa-s\'alū ahla dh-dhikri in kuntum lā taʿlamūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/16/43' },
              ],
            },
          ],
        },
        {
          id: 'muhaymin-entscheidet',
          objection: `Der Koran ist muhaymin (5:48) – der Wächter, der entscheidet, was in den früheren Schriften wahr ist. Wo die Bibel ihm widerspricht, hat er das letzte Wort.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 1,
          answer: `*Muhaymin* bedeutet Wächter, Hüter, Zeuge. Ein Wächter schützt, was ihm anvertraut ist – er erklärt es nicht für gefälscht. Und schau auf die Reihenfolge: 5:47 befiehlt den Christen, nach dem Evangelium zu richten; 5:48 nennt den Koran „bestätigend und Wächter darüber". Ein Wächter, der befiehlt, einem verfälschten Text zu folgen, wäre ein schlechter Wächter.`,
          detail: `At-Tabari referiert für *muhaymin* Bedeutungen wie „Zeuge" (*shahid*), „Vertrauenswürdiger/Bewahrer" (*amin*). Keine davon heißt „Korrektor eines verderbten Textes". Ausführlich: Claim „muhaymin-5-48".`,
          followUps: [
            {
              id: 'bestaetigt-nur-wahres',
              objection: `Der Koran bestätigt nur das, was mit ihm übereinstimmt. Was ihm widerspricht, ist eben verfälscht. So einfach ist das.`,
              objectionBy: 'Mohammed Hijab',
              targetsPremise: 1,
              answer: `Dann ist „bestätigen" ein leeres Wort: Was übereinstimmt, ist echt, was widerspricht, ist falsch – das kann nie widerlegt werden. Aber der Koran sagt mehr: Er befiehlt Christen, die den Koran noch *nicht* angenommen haben, nach ihrem Evangelium zu richten (5:47). Woher sollten sie wissen, welche Teile „echt" sind? Und Mohammed selbst benutzte die vorhandene Tora als Grundlage für ein Urteil.`,
              detail: `Ein Prüfkriterium, das sich selbst nur bestätigt, ist zirkulär: Der Koran beansprucht, durch die früheren Schriften bestätigt zu sein (*muṣaddiq*), und die früheren Schriften sollen nur gelten, wo sie den Koran bestätigen. Damit wird der Anspruch, „bestätigend" zu sein, unprüfbar – und verliert seinen Sinn.`,
              questionsBack: [
                `Hätte ein Christ im Jahr 620 anhand seines Evangeliums erkennen können, welche Teile „verfälscht" sind?`,
              ],
              followUps: [
                {
                  id: 'tora-auf-dem-kissen',
                  objection: `Welches Urteil? Du spielst auf Abu Dawud 4449 an – das ist eine Einzelüberlieferung, nicht der Koran.`,
                  objectionBy: 'Ali Ataie',
                  targetsPremise: 2,
                  answer: `Abu Dawud 4449 wird von al-Albani als *hasan* (gut) eingestuft: Mohammed ließ sich die Tora bringen, legte sie auf ein Kissen und sagte: „Ich glaube an dich und an Den, der dich herabgesandt hat." Und es gibt den sahih-Bericht über die Steinigung (Sahih al-Bukhari 3635): Die Juden brachten die Tora, einer legte die Hand auf den Steinigungsvers – aber der Vers *stand da*. Mohammed urteilte nach der Tora, die in Medina vorlag.`,
                  detail: `Beide Berichte zeigen dasselbe: Für Mohammed war die Tora, die die Juden in Medina besaßen, Grundlage eines göttlichen Urteils. Der Vorwurf in Bukhari 3635 lautet *Verbergen* (die Hand auf den Vers legen), nicht *Verändern* – der Text enthielt Gottes Urteil.`,
                  sources: [
                    { kind: 'hadith', work: 'Sunan Abi Dawud', ref: '4449', quote: `Er nahm das Kissen unter sich weg, legte die Tora darauf und sagte: „Ich glaube an dich und an Den, der dich herabgesandt hat."`, status: 'paraphrase', url: 'https://sunnah.com/abudawud:4449', note: 'Von al-Albani als hasan eingestuft.' },
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3635', quote: `Juden kommen wegen eines Ehebruchs zu Mohammed; die Tora wird gebracht, einer legt die Hand auf den Steinigungsvers; Abdallah ibn Salam lässt ihn die Hand heben, und der Vers ist sichtbar.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3635' },
                  ],
                  followUps: [
                    {
                      id: 'verbergen-ist-verfaelschen',
                      objection: `Verbergen ist doch auch Verfälschung! Der Koran wirft ihnen vor, die Wahrheit zu verbergen (2:42; 2:146). Also war die Schrift nicht in Ordnung.`,
                      objectionBy: 'verbreiteter muslimischer Einwand',
                      targetsPremise: 3,
                      answer: `Im Gegenteil: Wer einen Vers mit der Hand verdeckt, beweist, dass der Vers noch dasteht. Verbergen setzt einen intakten Text voraus. 2:146 sagt sogar, sie kennen die Wahrheit „wie ihre eigenen Söhne" – sie wissen also, was in ihrer Schrift steht. Der Vorwurf richtet sich gegen Menschen, nicht gegen den Text.`,
                      sources: [
                        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:42', quote: `Und vermengt nicht die Wahrheit mit dem Falschen und verbergt nicht die Wahrheit, wo ihr doch wisst.`, original: `wa-lā talbisū l-ḥaqqa bi-l-bāṭili wa-taktumū l-ḥaqqa wa-antum taʿlamūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/42' },
                      ],
                      followUps: [
                        {
                          id: 'umar-tora-blatt',
                          objection: `Der Prophet wurde zornig, als Umar aus einem Blatt der Tora las, und sagte: „Wenn Mose lebte, müsste er mir folgen." Das zeigt doch, was er von eurer Schrift hielt.`,
                          objectionBy: 'verbreiteter muslimischer Einwand',
                          targetsPremise: 2,
                          answer: `Dieser Bericht (Musnad Ahmad, in seiner Echtheit umstritten) zeigt höchstens, dass Mohammed nicht wollte, dass seine Anhänger *neben* ihm andere Quellen der Rechtleitung suchten. Er sagt nicht, das Blatt sei gefälscht – im Gegenteil, er beruft sich auf Mose als echten Propheten. Und der sichere Befund bleibt der Koran: 5:43, 5:47 und 10:94.`,
                          detail: `Wichtig für dich: Wenn ein Muslim mit einzelnen Hadithen kommt, führe das Gespräch zum Koran zurück. Ein umstrittener Hadith kann klare Koranverse nicht aufheben – das würde jeder sunnitische Gelehrte bestätigen.`,
                          sources: [
                            { kind: 'hadith', work: 'Musnad Ahmad (Jabir ibn Abdallah)', quote: `Umar bringt ein Schriftstück der Leute der Schrift; der Prophet wird zornig und sagt sinngemäß: Wenn Mose lebte, bliebe ihm nichts, als mir zu folgen.`, status: 'unverified', note: 'Nummer und Einstufung je nach Ausgabe unterschiedlich; vor Verwendung prüfen.' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-koran-geschuetzt-dilemma',
      objection: `6:115 und 18:27 beziehen sich nur auf den Koran. Gott hat versprochen, den Koran zu schützen (15:9) – von den früheren Schriften hat er das nie gesagt.`,
      objectionBy: 'Yasir Qadhi',
      targetsPremise: 3,
      answer: `6:34 und 10:64 sagen allgemein: „Niemand kann die Worte Allahs abändern" – ohne Einschränkung auf den Koran. Der Koran nennt die Tora ausdrücklich „das Wort Allahs" (2:75). Und selbst wenn nur der Koran geschützt wäre: Das Dilemma braucht P3 gar nicht zwingend. Es genügt P2 – der Koran sagt, die Christen hatten im 7. Jahrhundert das Evangelium und sollten danach richten.`,
      detail: `Das ist ein wichtiger strategischer Hinweis: Das Dilemma steht auf **zwei Beinen**. Selbst wer P3 bestreitet, muss sich mit P2 auseinandersetzen. Und 15:9 spricht von *adh-dhikr* („die Ermahnung") – denselben Begriff verwendet der Koran auch für die Tora (21:48: „Wir gaben Mose und Aaron die Unterscheidung, ein Licht und eine Ermahnung"). Ausführlich: Claim „nur-koran-geschuetzt".`,
      sources: [
        { kind: 'koran', work: 'Sure 21 (al-Anbiya\')', ref: '21:48', quote: `Und Wir gaben Mose und Aaron die Unterscheidung, ein Licht und eine Ermahnung für die Gottesfürchtigen.`, original: `wa-la-qad ātaynā mūsā wa-hārūna l-furqāna wa-ḍiyā\'an wa-dhikran li-l-muttaqīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/21/48' },
      ],
      followUps: [
        {
          id: 'kalimat-heisst-beschluss',
          objection: `„Kalimat Allah" in 6:34 und 6:115 bedeutet Gottes Beschlüsse und Zusagen – etwa den Sieg seiner Gesandten –, nicht den Wortlaut von Büchern.`,
          objectionBy: 'klassische Auslegung (u. a. at-Tabari, Ibn Kathir)',
          targetsPremise: 3,
          answer: `Das ist eine ernstzunehmende Auslegung, und ich gestehe zu, dass viele Ausleger so lesen. Aber dann frage ich: Gehören Gottes Zusagen nicht zu dem, was er in Tora und Evangelium offenbart hat? Wenn Menschen nicht einmal Gottes Beschlüsse ändern können, wie viel weniger seine „Rechtleitung und sein Licht" (5:44), die er zur Richtschnur für Menschen bestimmt hat? Und 18:27 steht im Zusammenhang mit dem „Buch deines Herrn".`,
          followUps: [
            {
              id: 'vers-5-44-anvertraut',
              objection: `5:44 sagt, die Tora wurde den Rabbinern und Gelehrten zur Bewahrung *anvertraut* (bima stuhfizu). Den Koran bewahrt Gott selbst. Menschen haben versagt – das ist der Unterschied.`,
              objectionBy: 'Mohammed Hijab',
              targetsPremise: 3,
              answer: `Lies den Vers ganz: Die Propheten, Rabbiner und Gelehrten *richteten* nach der Tora, „weil ihnen die Bewahrung des Buches Allahs anvertraut war und sie darüber Zeugen waren". Das ist ein Lob, keine Anklage. Und auch der Koran wurde Menschen anvertraut – Abu Bakr, Zaid ibn Thabit, Uthman. Wenn Gott *durch* Menschen bewahren kann, warum dann nicht auch die Tora?`,
              sources: [
                { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:44', quote: `Wir haben die Tora herabgesandt, in der Rechtleitung und Licht ist. Nach ihr richteten die Propheten … und die Rabbiner und Gelehrten, weil ihnen die Bewahrung des Buches Allahs anvertraut war und sie darüber Zeugen waren.`, original: `bi-mā stuḥfiẓū min kitābi llāhi wa-kānū ʿalayhi shuhadā\'`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/44' },
              ],
              followUps: [
                {
                  id: 'gott-liess-verloren-gehen',
                  objection: `Gott hat die früheren Schriften bewusst nicht bewahrt, weil sie zeitlich begrenzt waren. Mit dem Koran kam die endgültige Offenbarung – die alten wurden nicht mehr gebraucht.`,
                  objectionBy: 'Yasir Qadhi',
                  targetsPremise: 3,
                  answer: `Aber zur Zeit des Korans wurden sie offenbar noch gebraucht: Der Koran verpflichtet die Christen auf ihr Evangelium (5:47; 5:68) und beruft sich auf es als Zeugen (7:157; 10:94). Wenn sie „auslaufen" sollten, dann frühestens nach 632. Und nach 632 sagen die Handschriften: Es hat sich nichts geändert. Also: Die Schrift, die der Koran in Kraft sah, ist die, die wir heute haben.`,
                  detail: `Dieser Einwand verschiebt die Verfälschung zwangsläufig in die Zeit nach Mohammed – und damit gegen die Handschriftenevidenz (siehe Knoten „Dann wurde sie eben nach Mohammed verändert").`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dritte-option-teilweise',
      objection: `Dein Dilemma ist ein falsches Dilemma. Es gibt eine dritte Möglichkeit: Die Bibel ist teils echt, teils verfälscht. Der Koran bestätigt die echten Teile und korrigiert die falschen.`,
      objectionBy: 'Mohammed Hijab',
      targetsPremise: 4,
      answer: `Gut, dann wenden wir das auf die Kreuzigung an: Standen die Berichte über die Kreuzigung im 7. Jahrhundert in der Bibel? Ja – das belegen die Handschriften. Waren diese Abschnitte echt oder verfälscht? Wenn echt, widerspricht der Koran ihnen (Horn A). Wenn verfälscht, dann hat der Koran den Christen befohlen, nach einem Evangelium zu richten, dessen Herzstück – die Passion nimmt ein Drittel der Evangelien ein – gefälscht war (Horn B). Die „dritte Option" verlagert das Dilemma nur auf jeden einzelnen Vers.`,
      detail: `Ein Dilemma ist nur dann ein „falsches Dilemma", wenn es eine echte dritte Möglichkeit gibt. „Teils – teils" ist keine dritte Möglichkeit, sondern eine Mischung aus A und B: Für jede umstrittene Stelle muss wieder entschieden werden. Und gerade die Stellen, die der Koran bestreitet (Kreuzigung, Gottessohnschaft), sind die zentralsten und am besten bezeugten.`,
      questionsBack: [
        `Welche Abschnitte genau waren im Jahr 620 verfälscht – und woher wusste ein Christ das, als ihm 5:47 befahl, nach dem Evangelium zu richten?`,
      ],
      followUps: [
        {
          id: 'ibn-taymiyya-mittelweg',
          objection: `Große Gelehrte wie Ibn Taymiyya vertreten genau diesen Mittelweg: teilweise Veränderung des Wortlauts, überwiegend Verdrehung des Sinnes. Das ist keine Ausrede, sondern durchdachte Theologie.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 4,
          answer: `Ich respektiere Ibn Taymiyya als scharfen Denker. Aber er schrieb im 14. Jahrhundert, rund 700 Jahre nach Mohammed, und er musste den Koran mit der Bibel seiner Zeit in Einklang bringen. Die Frage ist nicht, wer es sagt, sondern ob es stimmt: Welche Stellen der Bibel hat Ibn Taymiyya als verändert nachgewiesen – mit Handschriften von vor und nach der Änderung? Keine.`,
          detail: `Ibn Taymiyyas *al-Jawab as-sahih li-man baddala din al-Masih* ist eine Antwort auf einen christlichen Brief (den „Brief aus Zypern"). Moderne Studien beschreiben seine Position als Mittelweg zwischen Ibn Hazm (umfassende Textverfälschung) und der Auffassung, der Wortlaut sei unverändert. Das zeigt: Innerhalb der islamischen Tradition gibt es **keine** einheitliche Antwort – ein Hinweis darauf, dass das Problem real ist.`,
          sources: [
            { kind: 'gegner', author: 'Ibn Taymiyya', work: 'al-Jawab as-sahih li-man baddala din al-Masih', year: 'frühes 14. Jh.', quote: `Vertritt eine teilweise Veränderung des Wortlauts in einigen Stellen und überwiegend eine Verdrehung des Sinnes – zwischen Ibn Hazm und der These der Unversehrtheit des Wortlauts.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'koran-ist-massstab',
              objection: `Der Koran ist der Maßstab. Was mit ihm übereinstimmt, ist echt – was ihm widerspricht, ist verfälscht. Gott hat den Koran gerade dafür gesandt.`,
              objectionBy: 'Mohammed Hijab',
              targetsPremise: 1,
              answer: `Das ist ein Zirkelschluss: Der Koran beansprucht, durch die früheren Schriften bestätigt zu werden („bestätigend, was vor ihm war"), und die früheren Schriften gelten nur, wo sie den Koran bestätigen. So kann man jede Schrift „bestätigen" – auch das Buch Mormon könnte das über die Bibel sagen. Ein echter Prüfstein muss scheitern *können*.`,
              detail: `Hier hilft die Analogie: Ein Mormone sagt, die Bibel sei „richtig übersetzt" nur dort, wo sie mit dem Buch Mormon übereinstimmt. Muslime lehnen das zu Recht als Zirkel ab. Dasselbe Kriterium muss für den Koran gelten.`,
              followUps: [
                {
                  id: 'mohammed-in-der-bibel',
                  objection: `Aber die Bibel kündigt Mohammed doch selbst an – den Propheten wie Mose (Dtn 18,18) und den Parakleten (Joh 14–16). Also bestätigt die Bibel den Koran, nicht umgekehrt.`,
                  objectionBy: 'Ahmed Deedat, Zakir Naik',
                  targetsPremise: 4,
                  answer: `Damit benutzt du die Bibel als zuverlässiges Zeugnis – du wählst Horn A. Dann musst du aber auch das übrige Zeugnis desselben Buches annehmen: Derselbe Johannes, der vom Parakleten spricht, sagt, das Wort war Gott (Joh 1,1), und der Paraklet ist der Heilige Geist, der in den Jüngern wohnt (Joh 14,17.26). Du kannst ein Buch nicht als Zeugen aufrufen und ihm im nächsten Satz die Glaubwürdigkeit absprechen.`,
                  detail: `Zu den einzelnen Stellen siehe Topic „Mohammed und die Bibel" (Dtn 18,18; Paraklet). Strategisch wichtig: Dieser Einwand ist ein Geschenk – er zeigt, dass der Muslim im Grunde die Zuverlässigkeit der Bibel braucht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-lehrt-keine-trinitaet',
      objection: `P5 stimmt nicht: Richtig gelesen lehrt die Bibel gar keine Dreieinigkeit und keine Gottheit Jesu. Jesus sagte nie: „Ich bin Gott, betet mich an." Die Bibel und der Koran stimmen überein – erst die Kirche hat das verdreht.`,
      objectionBy: 'Ahmed Deedat, Zakir Naik',
      targetsPremise: 5,
      answer: `Selbst wenn wir die Gottheit Jesu einen Moment beiseitelassen: Die Kreuzigung bleibt. Alle vier Evangelien und Paulus sagen, Jesus starb am Kreuz – 4:157 sagt, er wurde nicht gekreuzigt. Ein einziger klarer Widerspruch genügt für das Dilemma. Und Jesus nimmt sehr wohl Anbetung an (Mt 14,33; Joh 20,28) und beansprucht Gottes Namen „Ich bin" (Joh 8,58).`,
      detail: `Strategisch: Lass dich nicht in eine lange Trinitätsdebatte ziehen, solange das Dilemma offen ist. Die Kreuzigung ist der eindeutigste Widerspruch, weil sie ein *Ereignis* ist, kein Lehrbegriff. Zur Gottheit Jesu: Topic „Die Gottheit Christi", Claim „Zeig mir einen Vers, in dem Jesus sagt: Ich bin Gott".`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '20,28', quote: `Thomas antwortete und sprach zu ihm: Mein HERR und mein Gott!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'ahmadiyya-scheintod',
          objection: `4:157 sagt nur, sie haben ihn nicht *durch Kreuzigung getötet*. Jesus hing am Kreuz, starb aber nicht – er überlebte und wanderte später aus. Dann gibt es keinen Widerspruch zur Bibel.`,
          objectionBy: 'Ahmadiyya-Auslegung',
          targetsPremise: 5,
          answer: `Diese Auslegung lehnen die allermeisten sunnitischen und schiitischen Gelehrten ab – der Vers sagt *wa-mā ṣalabūhu*, „sie haben ihn nicht gekreuzigt". Und sie hilft nicht: Die Bibel sagt eindeutig, dass Jesus *starb* („verschied", Joh 19,30), dass der Soldat den Tod feststellte (Joh 19,33–34) und dass er begraben wurde. Ob Ersatztheorie oder Scheintod – beide widersprechen dem Text der Bibel.`,
          detail: `Die Mehrheitsmeinung im sunnitischen Islam ist die Ersatztheorie (ein anderer wurde Jesus ähnlich gemacht). Die Scheintod-These stammt im Wesentlichen von Mirza Ghulam Ahmad (19. Jh.). Siehe Topic „Kreuz und Erlösung".`,
        },
        {
          id: 'trinitaet-spaete-erfindung',
          objection: `Die Dreieinigkeit wurde erst 325 in Nizäa erfunden. Die Bibel, die der Koran bestätigt, kannte sie nicht.`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 5,
          answer: `Mt 28,19 – die Taufe „im Namen des Vaters und des Sohnes und des heiligen Geistes" – steht in allen Handschriften, die dieses Kapitel enthalten, und wird schon in der Didache (um 100) zitiert. Nizäa hat die Lehre nicht erfunden, sondern gegen Arius verteidigt. Und Mohammed lebte 300 Jahre nach Nizäa: Die Christen, deren Evangelium der Koran bestätigt, glaubten an den dreieinigen Gott.`,
          detail: `Gerade dieser Einwand verstärkt Horn A: Wenn die Christen des 7. Jahrhunderts die Trinität lehrten und ihr Evangelium lasen, dann bestätigte der Koran das Buch einer trinitarischen Kirche. Siehe Claim „Die Trinität wurde 325 in Nizäa erfunden".`,
        },
      ],
    },
    {
      id: 'urtext-aramaeisch',
      objection: `Jesus sprach Aramäisch. Eure Evangelien sind auf Griechisch – also schon Übersetzungen. Das ursprüngliche Injil in Jesu Sprache ist verloren.`,
      objectionBy: 'verbreiteter muslimischer Einwand',
      targetsPremise: 4,
      answer: `Eine Übersetzung ist keine Fälschung – sonst wären alle Koranübersetzungen Fälschungen. Und der Koran wirft den Christen nie vor, ein „griechisches" oder „übersetztes" Buch zu lesen. Er verpflichtet sie auf das, was sie hatten – und das waren griechische, syrische und koptische Evangelien. Im Übrigen erwähnt al-Bukhari selbst, dass die Juden in Medina die Tora auf Hebräisch lasen und für Muslime ins Arabische übersetzten.`,
      detail: `Das Neue Testament wurde von Anfang an auf Griechisch verfasst (es gibt keinen Beleg für ein aramäisches Ur-Evangelium, außer der unsicheren Papias-Notiz über Matthäus). Jesu Worte sind teilweise aramäisch erhalten (*Talitha kum*, *Abba*, *Eli, Eli, lema sabachthani*). Die syrische Peschitta ist sogar eine Übersetzung in einen aramäischen Dialekt – und lehrt dasselbe.`,
      followUps: [
        {
          id: 'bukhari-4485-glaubt-nicht',
          objection: `Genau – und Mohammed sagte dazu: „Glaubt den Leuten der Schrift nicht und erklärt sie nicht für Lügner" (Bukhari 4485). Er hielt ihre Schrift also nicht für verlässlich.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 2,
          answer: `Der Hadith sagt beides: nicht glauben *und nicht für Lügner erklären*. Das ist eine Haltung der Zurückhaltung gegenüber den mündlichen arabischen Erklärungen, die die Juden gaben – kein Urteil, dass der hebräische Text gefälscht sei. Hätte Mohammed den Text für gefälscht gehalten, hätte er gesagt: „Erklärt ihn für falsch." Er tat es nicht.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4485', quote: `Die Leute der Schrift lasen die Tora auf Hebräisch und erklärten sie den Muslimen auf Arabisch. Der Prophet sagte: Glaubt den Leuten der Schrift nicht und erklärt sie nicht für Lügner, sondern sagt: Wir glauben an Allah und an das, was zu uns herabgesandt wurde (2:136).`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4485' },
          ],
        },
      ],
    },
    {
      id: 'ehrman-sagt-verfaelscht',
      objection: `Selbst euer eigener Gelehrter Bart Ehrman sagt, die Bibel wurde von Schreibern verändert. Warum soll ich einem Christen glauben, wenn sogar Ehrman das sagt?`,
      objectionBy: 'Shabir Ally, Mohammed Hijab',
      targetsPremise: 4,
      answer: `Ehrman ist kein Christ, sondern Agnostiker – und gerade er räumt ein, dass die wesentlichen christlichen Glaubensinhalte von den Varianten nicht berührt werden. Außerdem sagt Ehrman, dass die Kreuzigung Jesu zu den sichersten Fakten der Antike gehört. Wenn du Ehrman als Autorität nimmst, dann nimm ihn ganz – und dann widerlegt er 4:157.`,
      detail: `Ehrman benutzt dieselbe historisch-kritische Methode, die auch die Jungfrauengeburt, die Wunder Jesu und seine Himmelfahrt – alles Lehren des Korans – als unhistorisch einstuft. Er ist für den Islam ein zweischneidiges Schwert. Ausführlich: Claim „Sogar christliche Gelehrte wie Bart Ehrman sagen, die Bibel sei verfälscht".`,
      followUps: [
        {
          id: 'ehrman-jesus-nicht-gott',
          objection: `Ehrman sagt aber auch, dass Jesus sich nicht für Gott hielt und dass die Gottheit Jesu eine spätere Entwicklung ist. Das stützt den Koran.`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 5,
          answer: `Erstens ist das keine Textfrage, sondern Ehrmans historische Rekonstruktion – das Dilemma betrifft den *Text*, den Christen im 7. Jahrhundert lasen, und der enthält Joh 1,1 und Joh 20,28 unbestritten. Zweitens räumt Ehrman inzwischen ein, dass Jesus sehr früh, schon bei Paulus, als göttlich verehrt wurde. Drittens: Ehrman bestreitet auch, dass Jesus von einer Jungfrau geboren wurde und dass er Wunder tat – soll ich ihm da auch folgen?`,
          detail: `In *How Jesus Became God* (2014) vertritt Ehrman, dass Christen Jesus sehr bald nach seinem Tod als göttliches Wesen betrachteten – eine Revision seiner früheren Darstellung. Für die Gegenposition siehe Larry Hurtado, *Lord Jesus Christ* (2003), und Richard Bauckham, *Jesus and the God of Israel* (2008).`,
        },
      ],
    },
    {
      id: 'paulus-verfaelschte-dilemma',
      objection: `Nicht die Abschreiber, sondern Paulus hat das Evangelium Jesu verfälscht. Die Bibel, die ihr habt, ist das Werk des Paulus – die wahren Nachfolger Jesu waren Monotheisten wie wir.`,
      objectionBy: 'Shabir Ally, Ahmed Deedat',
      targetsPremise: 4,
      answer: `Dann gerät der Koran in ein zweites Dilemma: In 61:14 sagt Gott, er habe die Gläubigen unter den Nachfolgern Jesu gegen ihre Feinde gestärkt, „und so wurden sie die Obsiegenden". Und in 3:55 verspricht er, die Nachfolger Jesu bis zum Tag der Auferstehung über die Ungläubigen zu stellen. Wenn Paulus die Wahrheit sofort verfälschte und alle „wahren" Nachfolger verschwanden, dann hat Gott sein Versprechen nicht gehalten. Die siegreiche Gemeinde der Geschichte ist die Kirche, die Kreuz und Auferstehung bekennt.`,
      detail: `Außerdem: Die Kreuzigung wird nicht nur von Paulus bezeugt, sondern von allen vier Evangelien, von Petrus (Apg 2,23; 1 Petr 2,24), von Josephus und Tacitus. Paulus nennt die Jerusalemer Apostel ausdrücklich als Zeugen desselben Evangeliums (1 Kor 15,3–11; Gal 2,9). Siehe Claim „Die Jünger Jesu waren Muslime" (das zweite Dilemma).`,
      sources: [
        { kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:14', quote: `Da stärkten Wir diejenigen, die glaubten, gegen ihren Feind, und so wurden sie die Obsiegenden.`, original: `fa-ayyadnā lladhīna āmanū ʿalā ʿaduwwihim fa-aṣbaḥū ẓāhirīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/61/14' },
        { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:55', quote: `… und diejenigen, die dir folgen, bis zum Tag der Auferstehung über diejenigen stellen, die ungläubig sind.`, original: `wa-jāʿilu lladhīna ttabaʿūka fawqa lladhīna kafarū ilā yawmi l-qiyāma`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/55' },
      ],
      followUps: [
        {
          id: 'wahre-nachfolger-besiegt',
          objection: `Die wahren Nachfolger Jesu – Jakobus, die Ebioniten – wurden von der paulinischen Kirche verdrängt. Gott hat sie erst durch Mohammed wieder siegreich gemacht.`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 4,
          answer: `Das widerspricht dem Wortlaut von 61:14: Sie „wurden" (*aṣbaḥū*) siegreich – Vergangenheit, im Zusammenhang mit den Jüngern Jesu. Und 3:55 spricht von Jesu Nachfolgern „bis zum Tag der Auferstehung", ohne Unterbrechung von 600 Jahren. Außerdem waren die Ebioniten keine Muslime: Sie hielten das jüdische Gesetz, lehnten Paulus ab – aber sie glaubten nach den Kirchenvätern an Jesu Kreuzestod.`,
          detail: `Jakobus selbst bestätigte nach Gal 2,9 das Evangelium des Paulus. Die Ebioniten (bezeugt bei Irenäus, Adv. Haer. I,26,2) sind eine Randgruppe, die schon im 5. Jahrhundert kaum noch greifbar ist. Siehe ausführlich Claim „Die Jünger Jesu waren Muslime".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass Allah die Tora und das Evangelium herabgesandt hat? (P1 bestätigen lassen)`,
    `Hatten die Christen zur Zeit Mohammeds das Evangelium? Woraus schließt du das – oder das Gegenteil? (5:43; 5:47; 7:157)`,
    `Kann ein Mensch die Worte Allahs ändern? (6:115; 18:27)`,
    `Wenn Allah den Christen in 5:47 befiehlt, nach dem Evangelium zu richten: Hätte er das befohlen, wenn er wüsste, dass es gefälscht ist?`,
    `Weißt du, dass wir vollständige Bibeln aus der Zeit vor Mohammed besitzen? Möchtest du gemeinsam nachsehen, was darin über die Kreuzigung steht?`,
    `Wenn die Bibel zur Zeit Mohammeds verfälscht war: Warum verweist 10:94 Zweifelnde an ihre Leser?`,
  ],
  avoid: [
    `**Nicht mit dem Dilemma beginnen.** Wer das Dilemma als Fertigprodukt präsentiert, provoziert Abwehr. Lass dir zuerst jede Prämisse einzeln bestätigen.`,
    `**Nicht behaupten, „der Koran bestätigt die ganze Bibel von Genesis bis Offenbarung".** Der Koran nennt Tora, Zabur und Injil. Das genügt – das Injil enthält die Kreuzigung.`,
    `**Nicht behaupten, alle Muslime hätten immer an Textverfälschung geglaubt** – oder umgekehrt, alle Klassiker hätten nur Sinnverfälschung gelehrt. Die Tradition ist gespalten (Ibn Abbas in Bukhari 7363 vs. Kitab at-Tawhid; Ibn Hazm vs. ar-Razi).`,
    `**Nicht mit unsicheren Zahlen operieren** (z. B. „24.000 Handschriften vor Mohammed"). Nenne lieber wenige, sichere Beispiele: Vaticanus, Sinaiticus, Alexandrinus, P75, sahidische Übersetzung.`,
  ],
  concessions: [
    `Es gibt Textvarianten in der Bibel, einige davon betreffen ganze Abschnitte (Mk 16,9–20; Joh 7,53–8,11). Keine davon berührt aber eine Kernlehre.`,
    `Einige frühe Muslime, darunter nach Bukhari 7363 Ibn Abbas, glaubten an eine Veränderung der Schrift. Das Dilemma richtet sich nicht gegen die Aufrichtigkeit dieser Gelehrten, sondern zeigt die Spannung zum Wortlaut des Korans.`,
    `„Kalimat Allah" wird von vielen klassischen Auslegern als Gottes Beschlüsse verstanden, nicht als Schrifttext. Deshalb stützt sich das Dilemma nicht allein auf P3, sondern vor allem auf P2.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'Narratives of Tampering in the Earliest Commentaries on the Qur\'an', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'On the Qur\'anic Accusation of Scriptural Falsification (tahrif) and Christian Anti-Jewish Polemic, Journal of the American Oriental Society 130', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Early Versions of the New Testament', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James R. White', work: 'What Every Christian Needs to Know About the Qur\'an', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Tahrif', 'Bibel', 'Koran', 'Dilemma', 'Handschriften'],
  related: [
    'islam-dilemma/injil-ist-nicht-das-nt',
    'islam-dilemma/tahrif-verse',
    'islam-dilemma/muhaymin-5-48',
    'islam-dilemma/nur-koran-geschuetzt',
    'islam-dilemma/juenger-waren-muslime',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-bibelverfaelschung/ehrman-beweist-verfaelschung',
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'islam-mohammed/prophet-wie-mose-dtn-18',
    'neues-testament/nur-kopien-von-kopien',
  ],
};

export default claim;
