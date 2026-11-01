import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'paraklet-ist-mohammed',
  title: `„Der Paraklet (Joh 14–16) ist Mohammed – Ahmad (61:6)."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'What the Bible Says about Muhammad (1976)' },
    { name: 'Abdul-Ahad Dawud (David Benjamin Keldani)', role: 'Ehemaliger chaldäischer Priester, zum Islam konvertiert', work: 'Muhammad in the Bible (1928)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Muhammad in the Bible"' },
    { name: 'Abdullah Yusuf Ali', role: 'Koranübersetzer (1872–1953)', work: 'The Holy Qur\'an: Text, Translation and Commentary, Anmerkung zu 61:6' },
  ],
  steelman: `Der Koran sagt, Jesus habe „einen Gesandten" angekündigt, „der nach mir kommen wird; sein Name ist Ahmad" (61:6). Im Johannesevangelium kündigt Jesus tatsächlich einen „anderen Parakleten" an. Jesus selbst war der erste Paraklet (1 Joh 2,1) – ein „anderer" muss also ein Mensch wie er sein. Er kommt erst, wenn Jesus fortgeht (Joh 16,7) – der Heilige Geist aber war längst da (Lk 1,41; Joh 20,22). Er „wird nicht aus sich selbst reden, sondern was er hören wird, das wird er reden" (Joh 16,13) – genau so empfing Muhammad den Koran: „Er spricht nicht aus eigener Neigung; es ist nur eine Offenbarung, die eingegeben wird" (53:3–4). Er wird die Welt „überführen" (16,8) und Jesus „verherrlichen" (16,14) – Muhammad hat Jesus von der Schande der Kreuzigung und der Gotteslästerung der Vergöttlichung gereinigt. Und vermutlich stand im Urtext nicht *paraklētos* („Beistand"), sondern *periklytos* („der Hochgelobte") – genau die Bedeutung von „Ahmad".`,
  biblical: {
    summary: `Johannes identifiziert den Parakleten ausdrücklich: „der Tröster, **der Heilige Geist**, welchen mein Vater senden wird in meinem Namen" (Joh 14,26). Er ist „der Geist der Wahrheit, welchen die Welt nicht kann empfangen; denn sie sieht ihn nicht … Ihr aber kennet ihn; denn er bleibt bei euch und wird **in euch** sein" (14,17). Er bleibt „bei euch **ewiglich**" (14,16), wird von Jesus „vom Vater" gesandt (15,26; 16,7), soll die **Jünger** an alles erinnern, was Jesus **ihnen** gesagt hat (14,26), und verherrlicht Jesus, indem er „von dem Meinen nimmt" (16,14). Die Erfüllung berichtet die Apostelgeschichte: „nicht lange nach diesen Tagen" (Apg 1,5) – an Pfingsten (Apg 2,1–4.33).`,
    detail: `**Prüfpunkte am Text (jeder schließt Muhammad aus):**
- **14,26:** ausdrücklich „der Heilige Geist".
- **14,17:** Die Welt sieht ihn nicht – Muhammad war sichtbar. Er wohnt **in** den Jüngern – Muhammad wohnte in keinem Jünger.
- **14,16:** „ewiglich bei euch" – Muhammad starb 632.
- **14,26:** erinnert die Jünger an Jesu Worte – Muhammad lebte 600 Jahre nach ihnen.
- **15,26; 16,7:** Jesus sendet ihn – Muslime sagen nicht, Jesus habe Muhammad gesandt.
- **16,14:** verherrlicht Jesus, indem er von dem Seinen nimmt – der Koran bestreitet gerade Kreuz und Gottessohnschaft, die Mitte der Botschaft Jesu.
- **Apg 1,4–8; 2,33:** Erfüllung wenige Tage nach der Himmelfahrt.

**Zu „noch nicht da":** Im AT kam der Geist auf einzelne Menschen; nach Jesu Verherrlichung wohnt er bleibend in allen Glaubenden: „Denn der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt" (Joh 7,39).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '14,16–17', quote: `Und ich will den Vater bitten, und er soll euch einen andern Tröster geben, daß er bei euch bleibe ewiglich: den Geist der Wahrheit, welchen die Welt nicht kann empfangen; denn sie sieht ihn nicht und kennt ihn nicht. Ihr aber kennet ihn; denn er bleibt bei euch und wird in euch sein.`, original: `καὶ ἄλλον παράκλητον δώσει ὑμῖν`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,26', quote: `Aber der Tröster, der heilige Geist, welchen mein Vater senden wird in meinem Namen, der wird's euch alles lehren und euch erinnern alles des, das ich euch gesagt habe.`, original: `ὁ δὲ παράκλητος, τὸ πνεῦμα τὸ ἅγιον`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '15,26', quote: `Wenn aber der Tröster kommen wird, welchen ich euch senden werde vom Vater, der Geist der Wahrheit, der vom Vater ausgeht, der wird zeugen von mir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '16,7', quote: `Aber ich sage euch die Wahrheit: es ist euch gut, daß ich hingehe. Denn so ich nicht hingehe, so kommt der Tröster nicht zu euch; so ich aber gehe, will ich ihn zu euch senden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,5', quote: `Denn Johannes hat mit Wasser getauft; ihr aber sollt mit dem heiligen Geist getauft werden nicht lange nach diesen Tagen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt den Heiligen Geist als „den Herrn und Lebendigmacher, der vom Vater ausgeht" (Joh 15,26) – ohne Filioque. Joh 15,26 ist gerade die Schlüsselstelle des koptischen Glaubens über den Geist. Der Paraklet ist die dritte Hypostase der Dreieinigkeit, die an Pfingsten auf die Apostel herabkam und seither in der Kirche wohnt: in der Taufe und der Myronsalbung empfängt jeder Gläubige die Gabe des Heiligen Geistes. Die Väter (Athanasius, Didymus der Blinde, Kyrill) haben die Paraklet-Worte stets auf den Heiligen Geist bezogen; Didymus schrieb eine eigene Schrift über den Heiligen Geist.`,
    detail: `Schon im 8. Jahrhundert wurde die Paraklet-Frage zwischen Christen und Muslimen diskutiert: Timotheus I. antwortete dem Kalifen al-Mahdi, der Paraklet sei der Geist Gottes, der mit dem Vater und dem Sohn eines Wesens ist; er sei unsichtbar und könne deshalb kein Mensch sein. Der Montanismus des 2. Jahrhunderts zeigt übrigens, dass auch früher schon jemand (Montanus) behauptete, der Paraklet zu sein – die Kirche verwarf dies, weil der Paraklet nach dem Evangelium in den Jüngern wohnt und an Pfingsten gekommen ist.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanum', ref: '381', quote: `… und an den Heiligen Geist, den Herrn und Lebendigmacher, der vom Vater ausgeht, der mit dem Vater und dem Sohn angebetet und verherrlicht wird …`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist (De Spiritu Sancto)', year: 'ca. 360–380', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Johannes sagt selbst, wer der Paraklet ist: „der Heilige Geist" (Joh 14,26). Die Welt kann ihn nicht sehen, er wohnt in den Jüngern, er bleibt ewig bei ihnen, Jesus sendet ihn, und er kommt „nicht lange nach diesen Tagen" (Apg 1,5). Muhammad war sichtbar, wohnte in keinem Jünger, starb 632 und kam 600 Jahre später. Und keine einzige Handschrift liest *periklytos* – alle lesen *paraklētos*.`,
  keyPoints: [
    `**Ausdrückliche Identifikation:** „der Tröster, der Heilige Geist" (Joh 14,26).`,
    `**Unsichtbar und innewohnend:** „Die Welt sieht ihn nicht … er wird in euch sein" (14,17).`,
    `**Ewig bei den Jüngern** (14,16) und **von Jesus gesandt** (15,26; 16,7) – beides passt nicht auf Muhammad.`,
    `**Zeitpunkt:** „nicht lange nach diesen Tagen" (Apg 1,5) – erfüllt an Pfingsten (Apg 2).`,
    `**Kein Handschriftenbeleg für „periklytos":** Alle bekannten Handschriften lesen *paraklētos*, auch die ältesten Papyri (z. B. P66, um 200).`,
    `**Selbst die früheste islamische Deutung** (Ibn Ishaq) stützte sich nicht auf „periklytos", sondern auf das syrische Wort für „Tröster".`,
  ],
  voices: [
    {
      person: 'keener',
      role: 'als Johannes-Kommentator',
      text: `Craig Keener zeigt in seinem großen Johanneskommentar, dass *paraklētos* im Griechischen einen Fürsprecher, Beistand oder Anwalt bezeichnet und dass Johannes den Parakleten bewusst als „anderen" Beistand neben Jesus darstellt: Was Jesus für die Jünger war, wird der Geist in ihnen sein. Die Verheißungen sind an die Jünger beim Abschiedsmahl gerichtet und finden ihre Erfüllung im Kommen des Geistes, wie es Johannes selbst (20,22) und Lukas (Apg 2) bezeugen.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of John: A Commentary, Bd. 2', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Als al-Mahdi fragt, ob Muhammad nicht der Paraklet sei, antwortet Timotheus I., der Paraklet sei der Geist Gottes. Seine Begründung folgt dem Text: Der Paraklet ist unsichtbar, er wohnt in den Jüngern, er kommt vom Vater und lehrt alles, was Christus gesagt hat. Ein Mensch, der sichtbar unter Menschen lebte und Jahrhunderte nach den Aposteln kam, kann diese Beschreibung nicht erfüllen. Timotheus bleibt dabei höflich, ohne in der Sache nachzugeben.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' }],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler',
      text: `Gabriel Said Reynolds diskutiert in seinem Korankommentar zu 61:6 die Frage, ob *aḥmad* ursprünglich ein Eigenname oder ein Adjektiv („der Preiswürdigere") war, und die alte These, der Vers spiele auf den Parakleten an. Er verweist auf die Forschung, nach der die früheste islamische Gleichsetzung mit dem Johannesevangelium über das syrische Wort *menaḥḥemānā* („Tröster") lief, das Ibn Ishaq mit Muhammad verband – nicht über eine angebliche griechische Lesart *periklytos*.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', ref: 'zu 61:6', year: '2018', status: 'paraphrase' }],
    },
    {
      person: 'didymus',
      role: 'als alexandrinischer Lehrer über den Heiligen Geist',
      text: `Didymus der Blinde, Leiter der Katechetenschule von Alexandrien, legt in seiner Schrift über den Heiligen Geist die Paraklet-Worte als Zeugnis für die Gottheit des Geistes aus: Der Geist, der vom Vater ausgeht, alles lehrt und in den Gläubigen wohnt, kann kein Geschöpf sein, denn kein Geschöpf wohnt in den Seelen der Menschen und heiligt sie. Seine Auslegung zeigt, wie selbstverständlich die alexandrinische Kirche den Parakleten als göttliche Person verstand.`,
      sources: [{ kind: 'kirchenvater', author: 'Didymus der Blinde', work: 'Über den Heiligen Geist', year: 'ca. 360–380', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'geist-war-schon-da',
      objection: `Jesus sagt: „Wenn ich nicht hingehe, kommt der Tröster nicht" (16,7). Aber der Heilige Geist war längst da – bei Johannes dem Täufer, Elisabeth, Simeon (Lk 1,15.41; 2,25). Also muss der Paraklet jemand anderes sein.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Der Geist wirkte schon vorher – an einzelnen Menschen und zu bestimmten Zeiten. Jesus verheißt etwas Neues: dass der Geist **bleibend in allen** Jüngern wohnt (14,17). Johannes erklärt das selbst: „Der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt" (7,39). Gemeint ist das Kommen des Geistes in dieser neuen Weise – und das geschah an Pfingsten.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '7,39', quote: `Das sagte er aber von dem Geist, welchen empfangen sollten, die an ihn glaubten; denn der heilige Geist war noch nicht da; denn Jesus war noch nicht verklärt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'joh-20-22-schon-gegeben',
          objection: `In Joh 20,22 haucht Jesus die Jünger an: „Nehmet hin den Heiligen Geist." Also kam der Geist, bevor Jesus fortging – der Paraklet aber sollte erst danach kommen. Widerspruch!`,
          objectionBy: 'Zakir Naik',
          answer: `Joh 20,22 geschieht nach der Auferstehung, als Jesus bereits „zum Vater auffährt" (20,17) – er ist verherrlicht. Die Gabe in 20,22 ist der Anfang dessen, was an Pfingsten öffentlich und in Fülle geschieht (Apg 2). Und selbst wenn man hier eine Spannung sähe: Sie macht aus dem Geist keinen Menschen, der 600 Jahre später kommt. Johannes nennt den Parakleten ausdrücklich „den Heiligen Geist" (14,26).`,
        },
      ],
    },
    {
      id: 'periklytos-ahmad',
      objection: `Ursprünglich stand dort nicht paraklētos, sondern periklytos – „der Hochgelobte", genau die Bedeutung von Ahmad (61:6). Die Christen haben das Wort geändert.`,
      objectionBy: 'Abdul-Ahad Dawud',
      answer: `Für diese Behauptung gibt es keinen einzigen Beleg. Alle bekannten griechischen Handschriften lesen *paraklētos* – auch die ältesten Papyri, etwa P66 um das Jahr 200, Jahrhunderte vor Muhammad. Ebenso alle alten Übersetzungen (lateinisch, syrisch, koptisch). Und die Sätze rund um das Wort – unsichtbar, in den Jüngern wohnend, ewig bei ihnen, „der Heilige Geist" – müssten dann alle ebenfalls gefälscht sein.`,
      followUps: [
        {
          id: 'christen-haben-es-geaendert',
          objection: `Natürlich gibt es keinen Beleg – die Kirche hat alle Handschriften vereinheitlicht.`,
          objectionBy: 'Islamischer Online-Apologet',
          answer: `Die Handschriften waren über das ganze Römische Reich, Ägypten, Syrien und Persien verstreut, in Kirchen, die sich gegenseitig verurteilten – Kopten, Byzantiner, Ostsyrer. Niemand konnte sie alle vereinheitlichen. Und die koptischen Übersetzungen aus dem 3./4. Jahrhundert übernehmen das griechische Wort *paraklētos* direkt. Eine Fälschungsthese, die gerade wegen fehlender Belege wahr sein soll, ist nicht widerlegbar – und damit kein Argument.`,
          followUps: [
            {
              id: 'koran-61-6-beweist-es',
              objection: `Der Koran sagt in 61:6, Jesus habe Ahmad angekündigt. Da der Koran Gottes Wort ist, muss die Ankündigung im Evangelium gestanden haben.`,
              objectionBy: 'Zakir Naik',
              answer: `Dann ist das ein Glaubensschluss aus dem Koran, kein Befund aus dem Evangelium. Interessant ist: Die früheste islamische Gleichsetzung mit dem Johannesevangelium – bei Ibn Ishaq – stützt sich nicht auf *periklytos*, sondern auf das syrische *menaḥḥemānā* („Tröster") aus Joh 15,23–16,1, das er mit Muhammad verbindet. Die „periklytos"-These ist eine spätere Konstruktion. Und auch unter Muslimen ist umstritten, ob *aḥmad* in 61:6 ursprünglich ein Name oder ein Adjektiv („preiswürdiger") war.`,
              sources: [
                { kind: 'hadith', author: 'Ibn Ishaq (in der Rezension Ibn Hischams)', work: 'Sīrat Rasūl Allāh', year: 'Mitte 8. Jh.', quote: `Der Munaḥḥemana ist auf Syrisch Muhammad; auf Griechisch ist er der Paraklet.`, translation: 'sinngemäß nach der englischen Übersetzung von A. Guillaume (The Life of Muhammad, 1955)', status: 'paraphrase', note: 'Ibn Ishaq zitiert Joh 15,23–16,1 nach einem christlich-palästinisch-aramäischen Text; Seitenangabe bei Guillaume (ca. S. 103–104) vor Verwendung prüfen.' },
                { kind: 'fachliteratur', author: 'W. Montgomery Watt', work: '„His Name Is Ahmad", The Muslim World 43', year: '1953', status: 'paraphrase', note: 'Watt argumentiert, aḥmad sei in 61:6 ursprünglich adjektivisch zu verstehen.' },
                { kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:6', quote: `Und als Jesus, der Sohn der Maria, sagte: „O Kinder Israels, ich bin Allahs Gesandter an euch, bestätigend, was von der Tora vor mir war, und einen Gesandten verkündend, der nach mir kommen wird: sein Name ist Ahmad."`, original: `wa-mubashshiran bi-rasūlin yaʾtī min baʿdī smuhū aḥmad`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/61/6' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'redet-nicht-aus-sich-selbst',
      objection: `„Er wird nicht von sich selber reden; sondern was er hören wird, das wird er reden" (16,13). Das ist exakt die koranische Beschreibung Muhammads: „Er spricht nicht aus eigener Neigung; es ist nur eine Offenbarung, die eingegeben wird" (53:3–4).`,
      objectionBy: 'Ahmed Deedat',
      answer: `Dasselbe sagt Jesus über sich selbst: „Ich habe nicht von mir selber geredet" (Joh 12,49). Es beschreibt jede wahre Offenbarung – und den Geist, der nicht unabhängig vom Vater und Sohn spricht. Entscheidend ist der nächste Vers: „Derselbe wird mich verklären; denn von dem Meinen wird er's nehmen und euch verkündigen" (16,14). Der Paraklet verkündet, was Jesu ist – nicht etwas, das Jesu Kreuz und Sohnschaft bestreitet.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '16,13–14', quote: `Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten. Denn er wird nicht von sich selber reden; sondern was er hören wird, das wird er reden, und was zukünftig ist, wird er euch verkündigen. Derselbe wird mich verklären; denn von dem Meinen wird er's nehmen und euch verkündigen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'muhammad-verherrlichte-jesus',
          objection: `Muhammad hat Jesus verherrlicht: Er hat ihn von der Schande der Kreuzigung befreit und von der Lüge, er sei Gott. Das ist die wahre Verherrlichung.`,
          objectionBy: 'Zakir Naik',
          answer: `Im Johannesevangelium ist das Kreuz selbst die Verherrlichung Jesu: „Die Zeit ist gekommen, daß des Menschen Sohn verklärt werde … Wenn das Weizenkorn nicht in die Erde fällt und erstirbt …" (12,23–24; vgl. 17,1). Wer das Kreuz leugnet, nimmt Jesus gerade seine Verherrlichung im Sinn des Evangeliums. Der Paraklet nimmt „von dem Meinen" – er bezeugt das, was Jesus gelehrt und getan hat (15,26), nicht das Gegenteil davon.`,
        },
      ],
    },
    {
      id: 'maennliches-pronomen',
      objection: `Im Griechischen ist „pneuma" (Geist) sächlich, aber Johannes verwendet für den Parakleten das männliche „ekeinos" (er). Das zeigt, dass ein Mann gemeint ist.`,
      objectionBy: 'Islamischer Apologet mit Griechischkenntnissen',
      answer: `Das männliche Pronomen zeigt, dass der Paraklet eine **Person** ist, nicht eine bloße Kraft – darin stimmen wir überein. Aber Person heißt nicht Mensch: Auch Gott wird mit männlichen Pronomen bezeichnet. Zudem ist *paraklētos* selbst ein männliches Wort, auf das sich *ekeinos* grammatisch beziehen kann. Und in 14,26 steht ausdrücklich: „der Paraklet, der Heilige Geist".`,
    },
    {
      id: 'anderer-paraklet-ist-mensch',
      objection: `Jesus nennt ihn „einen anderen Parakleten". Jesus selbst war Paraklet (1 Joh 2,1) und ein Mensch. Also ist der andere auch ein Mensch – ein Prophet wie Jesus.`,
      objectionBy: 'Jamal Badawi',
      answer: `„Ein anderer" heißt: ein weiterer Beistand derselben Art. Und nach dem Evangelium ist Jesus nicht nur Mensch, sondern das fleischgewordene Wort Gottes – ein „anderer" seiner Art ist der Geist Gottes. Vor allem aber beschreibt Jesus diesen anderen genau: unsichtbar für die Welt, in den Jüngern wohnend, ewig bei ihnen (14,16–17). Das ist kein Mensch.`,
      followUps: [
        {
          id: 'ewig-durch-seine-lehre',
          objection: `„Ewig bei euch" heißt: durch seine Lehre, den Koran, der bis zum Jüngsten Tag gilt.`,
          objectionBy: 'Zakir Naik',
          answer: `Der Text sagt nicht, dass die Lehre bei ihnen bleibt, sondern **er**: „daß er bei euch bleibe ewiglich … er bleibt bei euch und wird in euch sein" (14,16–17). Und „euch" sind die Jünger am Abschiedsabend, die er an alles erinnern soll, was Jesus „euch gesagt hat" (14,26). Muhammad hat keinen dieser Jünger je getroffen. Man muss den Text umdeuten, um ihn auf Muhammad zu beziehen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wen nennt Joh 14,26 ausdrücklich als den Parakleten?`,
    `War Muhammad für die Welt unsichtbar, und wohnte er in den Jüngern (14,17)?`,
    `Glaubst du, dass Jesus Muhammad gesandt hat (15,26; 16,7)?`,
    `Welche Handschrift liest „periklytos"?`,
    `Warum stützte sich Ibn Ishaq auf das syrische Wort für „Tröster" und nicht auf „periklytos"?`,
  ],
  avoid: [
    `Nicht behaupten, *aḥmad* könne „unmöglich" ein Name sein – die Frage ist in der Forschung offen; sag, dass sie umstritten ist.`,
    `Nicht über die „periklytos"-These spotten; zeige ruhig, dass jeder Handschriftenbeleg fehlt.`,
    `Joh 20,22 nicht verschweigen; erkläre es als Anfang der Gabe nach der Auferstehung.`,
  ],
  concessions: [
    `Das Verhältnis von Joh 20,22 und Apg 2 wird auch unter Christen unterschiedlich erklärt.`,
    `Der Paraklet wird bei Johannes personal beschrieben (männliches Pronomen) – das ist richtig beobachtet, nur spricht es für die Personalität des Geistes, nicht für einen Menschen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of John: A Commentary', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'A. Guillaume (Übers.)', work: 'The Life of Muhammad: A Translation of Ibn Isḥāq\'s Sīrat Rasūl Allāh', year: '1955', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Paraklet', 'Johannes 14–16', 'Ahmad', 'Sure 61:6', 'Heiliger Geist'],
  related: [
    'islam-mohammed/prophet-wie-mose-dtn-18',
    'islam-mohammed/weitere-bibelstellen-mohammed',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'zeugen-jehovas/heiliger-geist-kraft',
  ],
};

export default claim;
