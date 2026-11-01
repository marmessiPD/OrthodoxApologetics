import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'paulus-verfaelschte-jesus-islam',
  title: `„Paulus hat die Lehre Jesu verfälscht."`,
  proponents: [
    { name: 'ʿAbd al-Jabbar al-Hamadhani', role: 'Muʿtazilitischer Theologe (gest. 1025)', work: 'Tathbīt dalāʾil an-nubuwwa (Festigung der Beweise des Prophetentums)' },
    { name: 'Ibn Taymiyya', role: 'Hanbalitischer Gelehrter (1263–1328)', work: 'al-Jawāb aṣ-ṣaḥīḥ li-man baddala dīn al-Masīḥ' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Debatten und Broschüren' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten „Paul vs. Jesus"' },
  ],
  steelman: `Jesus war ein jüdischer Prophet, der die Tora hielt und lehrte: „Ich bin nicht gekommen, das Gesetz aufzulösen" (Mt 5,17). Er betete zu Gott, nannte das Schma das erste Gebot und sandte seine Jünger nur zu den „verlorenen Schafen des Hauses Israel" (Mt 15,24). Dann kam Paulus – ein Mann, der Jesus nie begegnete, die Jünger verfolgt hatte und sich auf eine private Vision berief. Er erklärte das Gesetz für abgeschafft, machte aus dem Propheten einen Gottessohn, dessen Tod die Sünden der Welt sühne, und stritt sogar offen mit Petrus (Gal 2,11). Die echten Nachfolger Jesu, die Judenchristen um Jakobus, wurden an den Rand gedrängt; ihre Erben, die Ebioniten, lehnten Paulus ab. Schon im 10. Jahrhundert beschrieb ʿAbd al-Jabbar, wie Paulus das Christentum verfälschte. Der Koran stellt die ursprüngliche Botschaft Jesu wieder her.`,
  biblical: {
    summary: `Paulus beruft sich nicht nur auf seine Vision, sondern betont, dass er die Kernbotschaft **empfangen** hat (1 Kor 15,3) und mit den Augenzeugen abgeglichen hat: Drei Jahre nach seiner Bekehrung blieb er 15 Tage bei Petrus und traf Jakobus, den Bruder des Herrn (Gal 1,18–19); vierzehn Jahre später legte er den Säulen der Jerusalemer Gemeinde sein Evangelium vor, und sie gaben ihm „die rechte Hand der Gemeinschaft" (Gal 2,1–10). „Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt" (1 Kor 15,11). Entscheidend: Paulus verfolgte die Gemeinde gerade **wegen** ihres Glaubens an den gekreuzigten und auferstandenen Jesus – die Gemeinden sagten über ihn: „Der uns weiland verfolgte, der predigt jetzt den Glauben, welchen er weiland verstörte" (Gal 1,23). Der Glaube war also vor Paulus da.`,
    detail: `- **Vorpaulinische Überlieferungen** in den Paulusbriefen: das Bekenntnis 1 Kor 15,3–5, die Abendmahlsworte 1 Kor 11,23–25, der Christushymnus Phil 2,6–11, das aramäische Gebet *Maranatha* („Unser Herr, komm!", 1 Kor 16,22) – Zeugnisse der aramäischsprachigen Urgemeinde.
- **Jesus selbst** deutete seinen Tod als Lösegeld (Mk 10,45) und Bundesblut (Mk 14,24) und erklärte „alle Speisen rein" (Mk 7,19).
- **Petrus** nennt Paulus „unsern lieben Bruder" und stellt seine Briefe neben die „anderen Schriften" (2 Petr 3,15–16).
- **Apg 15:** Petrus und Jakobus selbst entscheiden, dass Heiden nicht unter das ganze Gesetz gestellt werden.
- **Gal 2,11–14:** Der Streit in Antiochia betraf das Verhalten des Petrus (Tischgemeinschaft), nicht die Lehre über Jesus – Paulus wirft ihm vor, gegen seine eigene Überzeugung zu handeln.`,
    sources: [
      { kind: 'bibel', work: 'Galater', ref: '1,18–19', quote: `Darnach über drei Jahre kam ich nach Jerusalem, Petrus zu schauen, und blieb fünfzehn Tage bei ihm. Der andern Apostel aber sah ich keinen außer Jakobus, des HERRN Bruder.`, original: `ἱστορῆσαι Κηφᾶν`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,23', quote: `Sie hatten aber allein gehört, daß, der uns weiland verfolgte, der predigt jetzt den Glauben, welchen er weiland verstörte`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '2,9', quote: `… und erkannten die Gnade, die mir gegeben war, Jakobus und Kephas und Johannes, die für Säulen angesehen waren, gaben mir und Barnabas die rechte Hand und wurden mit uns eins, daß wir unter die Heiden, sie aber unter die Beschneidung gingen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,11', quote: `Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '3,15–16', quote: `… wie auch unser lieber Bruder Paulus nach der Weisheit, die ihm gegeben ist, euch geschrieben hat … welche verwirren die Ungelehrten und Leichtfertigen, wie auch die andern Schriften, zu ihrer eigenen Verdammnis.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche verehrt Petrus und Paulus gemeinsam; ihr Fest am 5. Abib (12. Juli) beschließt das Apostelfasten. In jeder Liturgie wird ein Abschnitt aus den Paulusbriefen gelesen (das *Pauline*), gefolgt von den Katholischen Briefen und der Apostelgeschichte – Ausdruck der Überzeugung, dass Paulus, Petrus, Jakobus und Johannes ein und dasselbe Evangelium verkündeten. Der hl. Markus, Gründer der Kirche von Alexandrien, war Begleiter sowohl des Paulus (Apg 12,25; Kol 4,10; 2 Tim 4,11) als auch des Petrus (1 Petr 5,13) – ein lebendiges Band zwischen beiden.`,
    detail: `Die Väter haben den Vorwurf der Entzweiung früh beantwortet: Irenäus (um 180) zeigt in Buch III von *Gegen die Häresien*, dass die Ebioniten, die Paulus verwarfen, und Markion, der nur Paulus gelten ließ, beide das eine apostolische Zeugnis zerrissen. Die Kirche hält an allen Aposteln fest.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,26,2; III,15,1', year: 'ca. 180', status: 'paraphrase', note: 'Über die Ebioniten, die Paulus ablehnten, und die Einheit des apostolischen Zeugnisses.' },
      { kind: 'liturgie', work: 'Koptische Liturgie – Lesungen (Pauline, Katholikon, Praxis)', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Paulus hat die Kreuzigung und den Glauben an Jesus als Herrn nicht erfunden – er hat die Gemeinde ja gerade deswegen verfolgt; „der uns verfolgte, predigt jetzt den Glauben, den er zerstören wollte" (Gal 1,23). Er hat seine Botschaft mit Petrus und Jakobus abgeglichen, die ihm die Hand gaben (Gal 2,9). Und für dich als Muslim kommt hinzu: Der Koran sagt, Gott habe die gläubigen Nachfolger Jesu siegreich gemacht (61:14). Die siegreichen Nachfolger glaubten, was Paulus lehrte. Hat Gott dann die Falschen siegen lassen?`,
  keyPoints: [
    `**Der Glaube war vor Paulus da:** Er verfolgte die Gemeinde wegen ihres Glaubens an den gekreuzigten und auferstandenen Herrn (Gal 1,13.23; 1 Kor 15,9).`,
    `**Abgleich mit den Augenzeugen:** 15 Tage bei Petrus, Begegnung mit Jakobus (Gal 1,18–19); Handschlag der „Säulen" (Gal 2,9).`,
    `**Vorpaulinische Texte:** 1 Kor 15,3–5; 1 Kor 11,23–25; Phil 2,6–11; *Maranatha* – Glaube der aramäischen Urgemeinde.`,
    `**Jesus selbst** sprach von seinem Tod als Lösegeld und Bundesblut (Mk 10,45; 14,24).`,
    `**Das Jünger-Dilemma:** Nach 61:14 machte Gott die gläubigen Nachfolger Jesu siegreich – die siegreichen Nachfolger glaubten an Kreuz und Auferstehung.`,
    `**Die Ebioniten** lehnten Paulus ab, bekannten aber die Kreuzigung – sie stützen die islamische Christologie nicht.`,
  ],
  argument: {
    name: 'Das Paulus-Argument (zweistufig)',
    summary: 'Historisch hat Paulus den Kern des Glaubens übernommen, nicht erfunden; islamisch widerspricht die Verfälschungsthese 61:14.',
    premises: [
      { text: `P1: Der Glaube an den gekreuzigten und auferstandenen Jesus als Herrn bestand vor der Bekehrung des Paulus.`, support: `Gal 1,13.23; 1 Kor 15,3–5.9.11; Apg 2; Maranatha (1 Kor 16,22).` },
      { text: `P2: Paulus' Botschaft wurde von den Jerusalemer Aposteln anerkannt.`, support: `Gal 2,1–10; Apg 15; 2 Petr 3,15–16.` },
      { text: `P3: Nach dem Koran hat Gott die gläubigen Nachfolger Jesu gegen ihre Feinde gestärkt, sodass sie die Oberhand gewannen (61:14; vgl. 3:55).`, support: `Diese Verse sind koranischer Text, den jeder Muslim anerkennt.`, sources: [{ kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:14', quote: `… Wir stärkten nun diejenigen, die glaubten, gegen ihren Feind, und so wurden sie die Oberhand Habenden.`, original: `fa-ayyadnā lladhīna āmanū ʿalā ʿaduwwihim fa-aṣbaḥū ẓāhirīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/61/14' }] },
    ],
    conclusion: `Historisch hat Paulus das Evangelium nicht verfälscht, sondern mit den Aposteln geteilt. Und wer im Islam behauptet, Paulus habe die Nachfolger Jesu verdorben, muss erklären, warum Gott nach 61:14 gerade diese Nachfolger siegreich machte.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der sich gegen den Vorwurf verteidigt',
      text: `Paulus kannte den Vorwurf, er predige ein eigenes Evangelium, schon zu Lebzeiten. Im Galaterbrief legt er offen, wie er nach seiner Berufung Petrus und Jakobus aufsuchte und später den Jerusalemer „Säulen" sein Evangelium vorlegte, „damit ich nicht vergeblich liefe" (Gal 2,2). Im ersten Korintherbrief stellt er sich bewusst in eine empfangene Überlieferung (15,3) und betont die Übereinstimmung: „Es sei nun ich oder jene: also predigen wir" (15,11). Für Paulus ist das Evangelium nicht sein Eigentum, sondern das gemeinsame Zeugnis aller Apostel.`,
      sources: [{ kind: 'bibel', work: 'Galater', ref: '1–2', status: 'paraphrase' }, { kind: 'bibel', work: '1. Korinther', ref: '15,1–11', status: 'paraphrase' }],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühesten Christusverehrung',
      text: `Larry Hurtado zeigt, dass die Verehrung Jesu als Herr nicht von Paulus eingeführt wurde: Paulus setzt sie in seinen frühesten Briefen als selbstverständlich voraus, auch gegenüber Gemeinden, die er nicht gegründet hat (Rom). Er streitet mit seinen Gegnern über das Gesetz und die Heidenmission, aber nie über die Anbetung Jesu – ein Zeichen, dass sie unter allen Gruppen der Urkirche unbestritten war. Das aramäische *Maranatha* belegt die Christusanrufung der palästinischen Urgemeinde.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Paulusforscher',
      text: `N. T. Wright hat in seinen Arbeiten zu Paulus gezeigt, dass Paulus nicht der „Gründer" einer neuen Religion war, sondern ein jüdischer Denker, der das Geschehen um Jesus im Licht der Schriften Israels deutete: Jesus als Messias Israels, in dem Gott seine Verheißungen an Abraham erfüllt. Wright betont, dass die Briefe des Paulus die Botschaft der Evangelien – Kreuz, Auferstehung, Reich Gottes – voraussetzen und nicht verändern.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'What Saint Paul Really Said', year: '1997', status: 'paraphrase' }],
    },
    {
      person: 'david-wood',
      role: 'als Islam-Apologet',
      text: `David Wood hat das „Jünger-Dilemma" formuliert: Der Koran sagt, Gott habe die gläubigen Nachfolger Jesu gegen ihre Feinde gestärkt, sodass sie siegten (61:14), und sie bis zum Tag der Auferstehung über die Ungläubigen gestellt (3:55). Die Nachfolger Jesu, die tatsächlich überlebten und sich durchsetzten, glaubten an Kreuz, Auferstehung und Gottheit Christi. Wenn Paulus die wahre Lehre verfälscht hätte, hätte Gott die Verfälscher siegreich gemacht – ein Widerspruch zum Koran selbst.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wood', work: 'Videoreihe „The Islamic Dilemma" / Debatten', status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der Kirche des 2. Jahrhunderts',
      text: `Irenäus berichtet von den Ebioniten, die nur das Matthäusevangelium benutzten, Paulus als Abtrünnigen vom Gesetz verwarfen und an der Beschneidung festhielten. Er zeigt zugleich, dass die Kirche das Zeugnis aller Apostel bewahrt – Petrus, Paulus, Johannes, Jakobus – und dass gerade die Übereinstimmung der von den Aposteln gegründeten Kirchen die Wahrheit der Überlieferung verbürgt. Wichtig für das Gespräch mit Muslimen: Auch die Ebioniten bekannten nach Irenäus den gekreuzigten Christus.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,26,2; III,3–4', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'paulus-kannte-jesus-nicht',
      objection: `Paulus hat Jesus nie getroffen. Er beruft sich auf eine Vision auf dem Weg nach Damaskus. Warum sollen wir einem Mann glauben, der nicht dabei war, statt Jesu eigenen Jüngern?`,
      objectionBy: 'Ahmed Deedat',
      answer: `Gerade weil er nicht dabei war, hat Paulus die Jünger aufgesucht: Drei Jahre nach seiner Bekehrung verbrachte er 15 Tage bei Petrus und traf Jakobus (Gal 1,18–19), später gaben ihm Jakobus, Petrus und Johannes die Hand (Gal 2,9). Und die Kernbotschaft – Christus starb für unsere Sünden und ist auferstanden – hat er nach eigener Aussage **empfangen** (1 Kor 15,3). Wir müssen nicht zwischen Paulus und den Jüngern wählen; sie predigten dasselbe (1 Kor 15,11).`,
      followUps: [
        {
          id: 'vision-ist-unzuverlaessig',
          objection: `Eine private Vision kann jeder behaupten. Muhammad hatte wenigstens den Engel Gabriel.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Auch Muhammads Offenbarung war ein Erlebnis, das niemand sonst sah (Bukhari 3). Der Unterschied ist: Paulus' Botschaft wurde von den Augenzeugen geprüft und bestätigt (Gal 2,1–10), und sie stimmt mit dem überein, was die Gemeinde vor ihm glaubte (Gal 1,23). Muhammads Botschaft dagegen widerspricht dem, was die Augenzeugen Jesu bezeugten. Wenn du Visionen grundsätzlich misstraust, triffst du nicht nur Paulus.`,
          followUps: [
            {
              id: 'bekehrungsberichte-widersprechen-sich',
              objection: `Selbst die Berichte über Paulus' Bekehrung widersprechen sich: In Apg 9,7 hören seine Begleiter die Stimme, in Apg 22,9 hören sie sie nicht. Wie soll man so einem Zeugen glauben?`,
              objectionBy: 'Ali Ataie',
              answer: `Beide Berichte stehen im selben Buch, vom selben Verfasser, wenige Kapitel auseinander – Lukas sah offensichtlich keinen Widerspruch. Und das Griechische erklärt es: In 9,7 hören sie „die Stimme" im Sinn eines Klangs (*phōnē* im Genitiv), in 22,9 hören sie nicht „die Stimme dessen, der mit mir redete" – also nicht die verständlichen Worte (Akkusativ, mit dem Zusatz „der mit mir redete"). Sie nahmen ein Geräusch wahr, verstanden aber nicht, was gesagt wurde. So ist es auch in Joh 12,29: Die einen hören Donner, andere meinen, ein Engel habe geredet.`,
              detail: `Die Unterscheidung zwischen Hören eines Lautes und Verstehen einer Rede ist im Griechischen gut belegt, auch wenn man die Kasusregel nicht überstrapazieren sollte. Entscheidend ist der Gesamtbefund: In allen drei Berichten (Apg 9; 22; 26) stimmen die Kernpunkte überein – ein Licht vom Himmel, Paulus stürzt, eine Stimme fragt „Saul, Saul, was verfolgst du mich?", „Ich bin Jesus", Erblindung, Sendung zu den Heiden. Unterschiede in Nebenumständen sind bei unabhängigen Nacherzählungen normal und sprechen gegen eine abgesprochene Erfindung. Muslime kennen das von den verschiedenen Fassungen des Berichts über die erste Offenbarung.`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '9,7', quote: `Die Männer aber, die seine Gefährten waren, standen und waren erstarrt; denn sie hörten die Stimme, und sahen niemand.`, original: `ἀκούοντες μὲν τῆς φωνῆς`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '22,9', quote: `Die aber mit mir waren, sahen das Licht und erschraken; die Stimme aber des, der mit mir redete, hörten sie nicht.`, original: `τὴν δὲ φωνὴν οὐκ ἤκουσαν τοῦ λαλοῦντός μοι`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Warum sollte Lukas einen Widerspruch in sein eigenes Buch schreiben, wenige Kapitel nach dem ersten Bericht?`,
                `Ist es ein Widerspruch, ein Geräusch zu hören, aber die Worte nicht zu verstehen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-gegen-petrus',
      objection: `Paulus selbst schreibt, dass er Petrus „ins Angesicht widerstand" (Gal 2,11) und dass Leute von Jakobus anders lehrten. Das beweist zwei verschiedene Christentümer.`,
      objectionBy: 'Shabir Ally',
      answer: `Der Streit in Antiochia ging um Tischgemeinschaft mit Heidenchristen, nicht um die Person Jesu. Paulus wirft Petrus vor, gegen seine eigene Überzeugung zu handeln – also teilten sie im Grundsatz denselben Glauben (Gal 2,12–14). Kurz vorher hatten dieselben Apostel Paulus die Hand gegeben (2,9). Und auf dem Apostelkonzil (Apg 15) entschieden Petrus und Jakobus selbst gegen die Beschneidungspflicht für Heiden. Ein Streit unter Brüdern ist kein Beweis für zwei Religionen.`,
      followUps: [
        {
          id: 'jakobus-gegen-paulus',
          objection: `Jakobus lehrt: „Der Mensch wird durch Werke gerecht, nicht durch Glauben allein" (Jak 2,24). Paulus: „durch den Glauben, ohne des Gesetzes Werke" (Röm 3,28). Offener Widerspruch!`,
          objectionBy: 'Ahmed Deedat',
          answer: `Beide sprechen von verschiedenen Fragen: Paulus wendet sich gegen die Vorstellung, man könne sich durch Werke des Gesetzes – Beschneidung, Speisegebote – vor Gott Gerechtigkeit verdienen; Jakobus gegen einen toten Glauben ohne Liebe. Paulus selbst spricht vom „Glauben, der durch die Liebe tätig ist" (Gal 5,6). Die koptische Kirche hält beides zusammen: Glaube und Werke als Frucht und Mitwirkung mit der Gnade. Und vor allem: In der Frage nach Kreuz und Auferstehung Jesu besteht zwischen Jakobus und Paulus kein Gegensatz.`,
          followUps: [
            {
              id: 'mein-evangelium',
              objection: `Paulus spricht selbst von „meinem Evangelium" (Röm 2,16; 16,25). Er hatte also sein eigenes Evangelium, nicht das Evangelium Jesu.`,
              objectionBy: 'Ahmed Deedat',
              answer: `„Mein Evangelium" heißt: die Botschaft, die mir anvertraut ist und die ich verkündige – so wie ein Prediger von „meiner Predigt" spricht. Paulus hat genau diese Botschaft den Aposteln in Jerusalem vorgelegt, „damit ich nicht vergeblich liefe", und sie haben ihm „nichts hinzugefügt", sondern ihm die rechte Hand der Gemeinschaft gegeben (Gal 2,2.6.9). Und er verflucht ausdrücklich jeden – „auch wenn wir selbst" –, der ein anderes Evangelium verkündigt (Gal 1,8). Das ist das Gegenteil eines Privatevangeliums.`,
              detail: `Paulus unterscheidet sorgfältig zwischen dem, was er „vom Herrn empfangen" hat, und seiner eigenen Meinung (1 Kor 7,10.12.25) – ein Mann, der eine neue Religion erfindet, würde gerade diese Unterscheidung verwischen. Der Inhalt „seines" Evangeliums ist in 1 Kor 15,3–5 als gemeinsame Überlieferung formuliert, die er „empfangen" hat. Auch Petrus nennt Paulus „unseren lieben Bruder" und zählt seine Briefe zu den „Schriften" (2 Petr 3,15–16).`,
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '2,2.9', quote: `Ich zog aber hinauf aus einer Offenbarung und besprach mich mit ihnen über das Evangelium, das ich predige unter den Heiden … damit ich nicht vergeblich liefe … Jakobus und Kephas und Johannes, die für Säulen angesehen waren, gaben mir und Barnabas die rechte Hand und wurden mit uns eins.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
                { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht!`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Warum legt Paulus „sein" Evangelium den Jerusalemer Aposteln zur Prüfung vor, wenn es ein Privatevangelium war?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-schaffte-gesetz-ab',
      objection: `Jesus hielt das Gesetz und sagte, kein Jota werde vergehen (Mt 5,17–18). Paulus erklärte das Gesetz für abgetan. Das ist Verfälschung.`,
      objectionBy: 'Shabir Ally',
      answer: `Jesus sagt in Mt 5,17, er sei gekommen, das Gesetz zu **erfüllen** – und legt es dann mit eigener Vollmacht aus: „Ich aber sage euch" (5,22–44). Nach Mk 7,19 erklärte er „alle Speisen rein". Petrus empfängt in Apg 10 eine Vision, die dasselbe lehrt, und Jakobus entscheidet in Apg 15, Heiden nicht das ganze Gesetz aufzuerlegen. Paulus verkündet nichts, was nicht schon Jesus und die Jerusalemer Apostel lehrten. Übrigens hält auch der Islam nicht das mosaische Gesetz.`,
      followUps: [
        {
          id: 'nur-zu-israel-gesandt',
          objection: `Jesus sagte: „Ich bin nur gesandt zu den verlorenen Schafen des Hauses Israel" (Mt 15,24). Die Heidenmission ist Paulus' Erfindung.`,
          objectionBy: 'Zakir Naik',
          answer: `Derselbe Matthäus endet mit dem Auftrag des Auferstandenen: „Gehet hin und lehret **alle Völker**" (Mt 28,19). Mt 15,24 beschreibt die erste Phase seines irdischen Wirkens – und selbst dort hilft er der kanaanäischen Frau. Die Heidenmission begann in Samaria und mit dem römischen Hauptmann Kornelius durch Philippus und Petrus (Apg 8; 10), nicht durch Paulus.`,
        },
      ],
    },
    {
      id: 'ebioniten-waren-die-wahren',
      objection: `Die Ebioniten, die Nachfahren der Jerusalemer Urgemeinde, lehnten Paulus ab und sahen in Jesus einen menschlichen Propheten. Sie waren die echten Nachfolger Jesu – und ihr Glaube ist dem Islam sehr ähnlich.`,
      objectionBy: 'Islamischer Apologet unter Berufung auf Hans-Joachim Schoeps',
      answer: `Die Ebioniten sind erst im 2. Jahrhundert belegt (Irenäus, um 180), nicht als Urgemeinde. Und selbst sie bekannten Jesus als den gekreuzigten Messias – sie widersprechen also 4:157 genauso wie Paulus. Sie hielten zudem das ganze mosaische Gesetz einschließlich der Beschneidung, was auch der Islam nicht tut. Die frühesten Zeugnisse der Jerusalemer Gemeinde – 1 Kor 15,3–5, Maranatha, Apg 2 – zeigen Kreuz, Auferstehung und Anrufung Jesu als Herrn.`,
    },
    {
      id: 'juenger-dilemma-61-14',
      objection: `Der Koran sagt, die Jünger Jesu waren Muslime (3:52; 5:111). Paulus hat ihre Lehre verdrängt, aber die wahren Jünger waren Muslime.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Dann frage ich: Wo sind diese muslimischen Jünger in der Geschichte? Der Koran sagt, Gott habe die gläubigen Nachfolger Jesu gegen ihre Feinde gestärkt, „und so wurden sie die Oberhand Habenden" (61:14), und er werde sie über die Ungläubigen stellen bis zum Tag der Auferstehung (3:55). Die Nachfolger Jesu, die tatsächlich die Oberhand gewannen, glaubten an Kreuz, Auferstehung und Gottheit Christi. Entweder waren sie die Gläubigen – dann ist ihr Glaube wahr – oder Gott hat die Falschen siegreich gemacht.`,
      sources: [
        { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:55', quote: `… und diejenigen, die dir folgen, über die Ungläubigen stellen bis zum Tag der Auferstehung.`, original: `wa-jāʿilu lladhīna ttabaʿūka fawqa lladhīna kafarū ilā yawmi l-qiyāma`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/3/55' },
      ],
      followUps: [
        {
          id: 'sieg-durch-beweise',
          objection: `„Oberhand" bedeutet hier den Sieg durch Beweise (ḥujja), nicht politische Macht. Die wahren Gläubigen sind durch ihre Argumente überlegen.`,
          objectionBy: 'Islamischer Exeget (eine klassische Deutung)',
          answer: `Auch dann bleibt die Frage: Welche Nachfolger Jesu haben ihre Argumente in der Geschichte überliefert und vertreten? Es gibt keine einzige Gruppe vor dem 7. Jahrhundert, die einen islamischen Jesus bezeugt – ohne Kreuz, ohne Sohnschaft, mit einem kommenden Propheten Ahmad. Ein „Sieg durch Beweise", von dem keine Spur erhalten ist, ist kein Sieg. Mehr dazu im Thema „Die Jünger Jesu waren Muslime".`,
        },
      ],
    },
    {
      id: 'paulus-erfand-gottheit',
      objection: `Paulus hat aus dem jüdischen Propheten Jesus einen Gott gemacht – unter dem Einfluss griechischer Mysterienkulte.`,
      objectionBy: 'Shabir Ally',
      answer: `Paulus war ein streng monotheistischer Pharisäer und schreibt über Jesus mit den Worten des Schma (1 Kor 8,6) und mit Jes 45,23 (Phil 2,10–11) – das ist jüdische, nicht heidnische Sprache. Den Christushymnus in Phil 2 übernimmt er wahrscheinlich aus noch älterer Überlieferung, und das aramäische *Maranatha* zeigt die Anrufung Jesu in der palästinischen Urgemeinde. Die Mysterienkult-These gilt in der Forschung weithin als überholt.`,
    },
  ],
  questionsToAsk: [
    `Warum verfolgte Paulus die Christen, wenn sie nicht schon vor ihm an den gekreuzigten und auferstandenen Herrn glaubten (Gal 1,23)?`,
    `Warum gaben Petrus, Jakobus und Johannes Paulus die Hand der Gemeinschaft (Gal 2,9)?`,
    `Welche Nachfolger Jesu hat Gott nach 61:14 siegreich gemacht – und was glaubten sie?`,
    `Wo ist eine christliche Gruppe vor dem 7. Jahrhundert, die einen Jesus ohne Kreuz bezeugt?`,
    `Der Koran erwähnt Paulus nie. Warum warnt er nicht vor dem angeblich größten Verfälscher?`,
  ],
  avoid: [
    `Nicht leugnen, dass es in der Urkirche Spannungen gab (Gal 2,11–14; Apg 15) – das NT berichtet sie offen.`,
    `Nicht die Rechtfertigungslehre im Sinn von „allein durch den Glauben" gegen Jakobus verteidigen – das ist nicht die koptische Position.`,
    `Die säkulare Fassung des Arguments (Paulus als Religionsstifter) nicht mit der islamischen vermischen; beide haben eigene Voraussetzungen.`,
  ],
  concessions: [
    `Paulus hat die Theologie der Kirche stark geprägt; seine Briefe sind die ältesten Schriften des NT.`,
    `Es gab im 2. Jahrhundert judenchristliche Gruppen (Ebioniten), die Paulus ablehnten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'What Saint Paul Really Said', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'P. S. van Koningsveld', work: '„The Islamic Image of Paul and the Origin of the Gospel of Barnabas", Jerusalem Studies in Arabic and Islam 20', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Paulus', 'Urgemeinde', 'Ebioniten', 'Jünger-Dilemma', 'Galaterbrief'],
  related: [
    'neues-testament/paulus-erfand-christentum',
    'islam-dilemma/juenger-waren-muslime',
    'islam-dilemma/das-islamische-dilemma',
    'islam-bibelverfaelschung/barnabasevangelium',
    'sola-fide/allein-durch-glauben',
  ],
};

export default claim;
