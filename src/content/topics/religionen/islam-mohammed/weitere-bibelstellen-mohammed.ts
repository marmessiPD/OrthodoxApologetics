import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'weitere-bibelstellen-mohammed',
  title: `„Mohammed wird in der Bibel vorhergesagt (Hld 5,16; Jes 42; Hab 3,3; Dtn 33,2)."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'What the Bible Says about Muhammad (1976)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vortrag „Muhammad in the Bible"' },
    { name: 'Abdul-Ahad Dawud (David Benjamin Keldani)', role: 'Ehemaliger chaldäischer Priester, zum Islam konvertiert', work: 'Muhammad in the Bible (1928)' },
    { name: 'Rahmatullah Kairanawi', role: 'Indischer Gelehrter (1818–1891)', work: 'Iẓhār al-Ḥaqq (1864)' },
  ],
  steelman: `Der Koran sagt, Juden und Christen fänden den „schriftunkundigen Propheten" bei sich in Tora und Evangelium beschrieben (7:157). Trotz aller Veränderungen sind die Spuren geblieben: Im Hohenlied steht sein Name – *machmadim* (Hld 5,16), dieselbe Wurzel wie „Muhammad". Jesaja 42 beschreibt einen Gottesknecht, der den Heiden das Recht bringt, und lässt ausdrücklich „die Dörfer, die Kedar bewohnt" – Ismaels Sohn, die Araber – jubeln (42,11). Habakuk sagt: „Der Heilige kam vom Gebirge Paran" (3,3) – Paran ist die Wüste, in der Ismael lebte (Gen 21,21), also Arabien. Deuteronomium 33,2 kündigt an, dass Gott „vom Berg Paran" mit „Zehntausenden von Heiligen" kommt – genau mit 10.000 Gefährten zog Muhammad 630 in Mekka ein. Jesaja 21,7 sieht einen Reiter auf Eseln (Jesus) und einen auf Kamelen (Muhammad). Und Jesus selbst sagt, das Reich Gottes werde von Israel genommen und einem anderen Volk gegeben (Mt 21,43).`,
  biblical: {
    summary: `Jede dieser Stellen hat einen klaren eigenen Zusammenhang, der eine Deutung auf Muhammad ausschließt: **Hld 5,16** gebraucht das gewöhnliche hebräische Wort *machmadim* („Lieblichkeiten, ganz begehrenswert"), das an vielen Stellen für kostbare Dinge oder geliebte Menschen steht. **Jes 42** wird im NT auf Jesus angewandt (Mt 12,18–21); Kedar ist in 42,10–12 nur einer von vielen Orten, die zum Lob des HERRN gerufen werden. **Hab 3,3** und **Dtn 33,2** beschreiben, wie **der HERR selbst** aus dem Süden (Sinai, Seir, Paran) kommt – Rückblick auf die Gesetzgebung an Israel. Paran liegt nach der Bibel auf der Sinaihalbinsel bei Kadesch (Num 10,12; 13,3.26), nicht bei Mekka. **Jes 21** handelt vom Fall Babylons (21,9).`,
    detail: `- **Hld 5,16:** *ḥikkô mamtaqqîm wᵉkullô maḥᵃmaddîm* – „Sein Gaumen ist Süßigkeit, und er ist ganz Lieblichkeit." Dasselbe Wort (*maḥmād*) steht etwa für Ezechiels Frau, „die Lust deiner Augen" (Ez 24,16), für die Kostbarkeiten des Tempels (2 Chr 36,19; Joel 4,5) und für alles, „was dir lieb ist" (1 Kön 20,6).
- **Jes 42,1–4.6–7:** Der Knecht ist „zum Bund für das Volk, zum Licht der Heiden" bestimmt; er wird „nicht schreien noch rufen" und „das zerstoßene Rohr nicht zerbrechen". Mt 12,18–21 zitiert dies für Jesus.
- **Jes 42,10–12:** „Singet dem HERRN ein neues Lied … ihr Inseln … die Wüste und die Städte darin samt den Dörfern, da Kedar wohnt; es sollen jauchzen, die in Sela wohnen." Kedar und Sela sind Beispiele für die ganze Erde.
- **Paran:** Von Paran aus sandte Mose die Kundschafter nach Kanaan (Num 13,3), und sie kehrten „in die Wüste Paran gen Kades" zurück (13,26). Teman (Hab 3,3) liegt in Edom (Jer 49,7.20).
- **Dtn 33,2–4:** Der HERR kam von Sinai, Seir und Paran „mit vielen tausend Heiligen" – und der Abschnitt fährt fort: „Mose hat uns das Gesetz geboten" (33,4).`,
    sources: [
      { kind: 'bibel', work: 'Hohelied', ref: '5,16', quote: `Seine Kehle ist süß, und er ist ganz lieblich. Ein solcher ist mein Freund; mein Freund ist ein solcher, ihr Töchter Jerusalems!`, original: `חִכּוֹ מַמְתַקִּים וְכֻלּוֹ מַחֲמַדִּים`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 nicht geprüft.' },
      { kind: 'bibel', work: 'Hesekiel', ref: '24,16', quote: `Du Menschenkind, siehe, ich will dir deiner Augen Lust nehmen durch eine Plage …`, original: `אֶת־מַחְמַד עֵינֶיךָ`, translation: 'Luther 1912', status: 'verbatim', note: 'maḥmad bezeichnet hier Ezechiels Frau (vgl. 24,18).' },
      { kind: 'bibel', work: 'Habakuk', ref: '3,3', quote: `Gott kam vom Mittag und der Heilige vom Gebirge Pharan. (Sela.) Seines Lobes war der Himmel voll, und seiner Ehre war die Erde voll.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Schreibung des Ortsnamens (Paran/Pharan) je nach Ausgabe.' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '33,2', quote: `Der HERR ist von Sinai gekommen und ist ihnen aufgegangen von Seir; er ist hervorgebrochen von dem Berge Paran und ist gekommen mit viel tausend Heiligen; zu seiner Rechten ist ein feuriges Gesetz an sie.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Numeri', ref: '13,26', quote: `… und kamen zu Mose und Aaron und zu der ganzen Gemeinde der Kinder Israel in die Wüste Pharan gen Kades …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
      { kind: 'bibel', work: 'Matthäus', ref: '12,18–19', quote: `Siehe, das ist mein Knecht, den ich erwählt habe, und mein Liebster, an dem meine Seele Wohlgefallen hat; ich will meinen Geist auf ihn legen, und er soll den Heiden das Gericht verkündigen. Er wird nicht zanken noch schreien, und man wird sein Geschrei nicht hören auf den Gassen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche liest die Prophetie christozentrisch: Gesetz und Propheten weisen auf Christus hin (Lk 24,27.44; Joh 5,39.46). Die alexandrinische Tradition kennt den geistlichen Sinn – auch das Hohelied wurde (bei Origenes, Gregor von Nyssa und in der koptischen Psalmodie) auf die Liebe zwischen Christus und seiner Kirche bzw. der Seele gedeutet. Aber geistliche Auslegung ist nicht Beliebigkeit: Sie baut auf dem Wortsinn auf und bleibt in der Linie der apostolischen Deutung. Schon Timotheus I. hat dem Kalifen al-Mahdi geantwortet, als dieser Jes 21,7 (Kamelreiter) auf Muhammad bezog: Der Zusammenhang spreche vom Fall Babylons.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '24,27', quote: `Und fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase', note: 'Diskussion über Jes 21,7 und weitere vermeintliche Ankündigungen Muhammads.' },
    ],
  },
  quickAnswer: `Lies jede Stelle in ihrem Zusammenhang: *machmadim* ist ein gewöhnliches Wort für „Liebliches", das auch für Ezechiels Frau und die Tempelgeräte steht. Jesaja 42 wird im NT auf Jesus angewandt, und Kedar ist nur einer von vielen Orten, die Gott loben. In Habakuk 3 und Deuteronomium 33 kommt **der HERR selbst** – und Paran liegt nach der Bibel auf dem Sinai bei Kadesch, nicht bei Mekka. Jesaja 21 handelt vom Fall Babylons. Wenn die Bibel Muhammad wirklich ankündigen wollte, bräuchte man diese Umdeutungen nicht.`,
  keyPoints: [
    `**Hld 5,16:** *maḥᵃmaddîm* ist ein Gattungswort („Lieblichkeiten"), kein Eigenname; es steht u. a. für Ezechiels Frau (Ez 24,16) und Tempelschätze (2 Chr 36,19).`,
    `**Jes 42:** Der Knecht ist „Bund für das Volk" Israel und „Licht der Heiden"; Mt 12,18–21 bezieht ihn auf Jesus. Kedar ist Teil eines weltweiten Lobpreises (42,10–12).`,
    `**Hab 3,3 / Dtn 33,2:** Der Kommende ist der HERR selbst, im Rückblick auf Sinai und die Gesetzgebung an Israel.`,
    `**Paran** liegt nach Num 10,12; 13,3.26 auf der Sinaihalbinsel bei Kadesch – über 1000 km von Mekka entfernt.`,
    `**Jes 21,7** gehört zur Vision vom Fall Babylons (21,9); Timotheus I. antwortete schon 781 auf diese Deutung.`,
    `**Mt 21,43:** Das „Volk", dem das Reich gegeben wird, ist die Gemeinschaft der Jünger Jesu (1 Petr 2,9); der Eckstein ist Jesus selbst (Mt 21,42).`,
  ],
  voices: [
    {
      person: 'michael-brown',
      role: 'als Semitist',
      text: `Michael Brown weist auf ein Grundproblem solcher Deutungen hin: Ein hebräisches Wort mit derselben Wurzel wie ein späterer Eigenname ist noch keine Prophezeiung. Die Wurzel *ḥ-m-d* („begehren, lieben") ist im Hebräischen und Arabischen geläufig; *maḥᵃmaddîm* in Hld 5,16 ist ein Pluralwort, das eine Eigenschaft beschreibt („ganz und gar Lieblichkeit"), und steht im Zusammenhang eines Liebesliedes. Mit derselben Methode könnte man nahezu jeden Namen irgendwo in der hebräischen Bibel „finden".`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', status: 'paraphrase', note: 'Brown behandelt dort die Methodik messianischer Prophetie; die Anwendung auf Hld 5,16 ist hier sinngemäß übertragen.' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Als der Kalif al-Mahdi die Vision vom „Reiter auf dem Esel und Reiter auf dem Kamel" (Jes 21,7) auf Jesus und Muhammad bezog, antwortete Timotheus I., die Vision betreffe den Fall Babylons und die Heere der Meder und Perser. Er verwies auf den Zusammenhang des Kapitels: „Gefallen, gefallen ist Babel" (21,9). Timotheus zeigt damit eine Grundregel, die bis heute gilt: Der Kontext entscheidet, wovon eine Prophetie spricht.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' }],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler',
      text: `Gabriel Said Reynolds erklärt, dass die muslimische Suche nach Muhammad in der Bibel vom Koran selbst angestoßen wurde (7:157; 61:6) und schon früh zu einer eigenen Literaturgattung führte, die Bibelverse sammelte und auf Muhammad deutete (*dalāʾil an-nubuwwa*, „Beweise des Prophetentums"). Diese Deutungen gehen meist von einzelnen Wörtern aus und lösen sie aus ihrem Zusammenhang – eine Methode, die mit der historischen Lektüre der Texte nicht vereinbar ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', ref: 'zu 7:157', year: '2018', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Islam-Apologet',
      text: `Abuna Zakaria Botros hat in seinen Sendungen die gängigen „Muhammad-Stellen" eine nach der anderen in ihrem biblischen Zusammenhang gelesen. Sein Grundgedanke: Wer die Bibel als Zeugin für Muhammad aufruft, muss sie auch ausreden lassen. Wenn Habakuk und Deuteronomium vom Kommen des HERRN sprechen und Jesaja 42 vom Knecht, den das Evangelium auf Christus bezieht, dann bezeugen diese Texte gerade nicht Muhammad, sondern den Gott Israels und seinen Gesalbten.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'hld-5-16-name-muhammad',
      objection: `Im Hebräischen steht in Hld 5,16 „Muhammadim". Das ist der Name Muhammad mit der hebräischen Ehrenendung -im. Sein Name steht in eurer Bibel!`,
      objectionBy: 'Zakir Naik',
      answer: `Das Wort heißt *maḥᵃmaddîm* und bedeutet „Lieblichkeiten" – die Braut sagt über ihren Geliebten: „Er ist ganz lieblich." Dasselbe Wort steht für Ezechiels Frau, „die Lust deiner Augen" (Ez 24,16), für die kostbaren Tempelgeräte (2 Chr 36,19; Joel 4,5) und für alles, „was dir lieb ist" (1 Kön 20,6). Niemand liest dort den Namen Muhammad. Die gemeinsame Wurzel *ḥ-m-d* („lieben, begehren") macht aus einem Wort noch keine Prophezeiung.`,
      questionsBack: [`Wenn *maḥmad* in Ez 24,16 Ezechiels Frau bezeichnet – ist dort auch Muhammad gemeint?`],
      followUps: [
        {
          id: 'im-ist-majestaetsplural',
          objection: `Die Endung -im ist ein Majestätsplural wie bei Elohim. Sie zeigt die besondere Würde der Person – also ein Eigenname mit Ehrenendung.`,
          objectionBy: 'Islamischer Apologet (Online-Debatte)',
          answer: `Eigennamen bekommen im Hebräischen keinen „Majestätsplural" – man sagt nicht „Davidim" oder „Moschim". Das *-îm* bildet hier ein Abstraktum: „Lieblichkeit in Fülle". Parallel dazu steht im selben Vers *mamtaqqîm* – „Süßigkeiten": „Sein Gaumen ist Süßigkeit, und er ist ganz Lieblichkeit." Wenn *maḥᵃmaddîm* ein Name wäre, müsste auch *mamtaqqîm* einer sein.`,
        },
      ],
    },
    {
      id: 'jesaja-42-kedar',
      objection: `Jesaja 42 beschreibt den Knecht, der den Heiden das Recht bringt – und in 42,11 jubelt Kedar, der Sohn Ismaels, Stammvater der Araber. Das ist Muhammad.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Lies 42,10–12 ganz: „Singet dem HERRN ein neues Lied … ihr Inseln … die Wüste und die Städte darin samt den Dörfern, da Kedar wohnt; es sollen jauchzen, die in Sela wohnen." Kedar ist einer von vielen Orten – Meer, Inseln, Wüste –, die zum weltweiten Lob gerufen werden. Der Knecht selbst ist „zum Bund für das Volk und zum Licht der Heiden" bestimmt (42,6), und Matthäus wendet die Stelle auf Jesus an (Mt 12,18–21): Er „wird nicht zanken noch schreien" und „das zerstoßene Rohr nicht zerbrechen".`,
      followUps: [
        {
          id: 'sela-ist-berg-in-medina',
          objection: `Sela ist der Berg Salʿ in Medina! Kedar und Sela – Mekka und Medina. Deutlicher geht es nicht.`,
          objectionBy: 'Zakir Naik',
          answer: `*Sela* heißt auf Hebräisch schlicht „Fels" und bezeichnet in der Bibel einen Ort in Edom (2 Kön 14,7; vgl. Jes 16,1), südöstlich des Toten Meeres. Ein ähnlich klingender Name in Medina beweist so wenig wie ein ähnlich klingender Name in Spanien. Und selbst wenn: Der Text ruft die Bewohner zum Lob des HERRN auf – er sagt nicht, dass dort der Knecht auftritt.`,
        },
        {
          id: 'bukhari-beschreibung-in-tora',
          objection: `Ein authentischer Hadith zitiert die Beschreibung Muhammads in der Tora: „nicht grob, nicht hart, nicht laut auf den Märkten" – genau Jesaja 42,2.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Der Bericht stammt von ʿAbdallah ibn ʿAmr, der jüdische Schriften gelesen haben soll, und er wendet Worte aus Jes 42 auf Muhammad an. Das zeigt, dass frühe Muslime diese Stelle so lasen – nicht, dass Jesaja Muhammad meinte. Das NT hat dieselbe Stelle sechs Jahrhunderte früher auf Jesus bezogen. Und die Beschreibung „er wird nicht schreien, das zerstoßene Rohr nicht zerbrechen" passt auf den Jesus, der sich ohne Widerstand gefangen nehmen ließ (Mt 26,52–53).`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Buch des Handels, Bericht des ʿAbdallah ibn ʿAmr über die Beschreibung des Propheten in der Tora', quote: `„O Prophet, Wir haben dich als Zeugen, Freudenboten und Warner gesandt … du bist nicht grob und nicht hart und schreist nicht auf den Märkten …"`, translation: 'sinngemäß', status: 'unverified', note: 'Häufig als Bukhari 2125 (vgl. 4838) zitiert – Nummer und Wortlaut vor Verwendung prüfen.' },
          ],
        },
      ],
    },
    {
      id: 'hab-3-3-paran-ist-mekka',
      objection: `„Der Heilige kam vom Gebirge Paran" (Hab 3,3). Paran ist Arabien – dort wohnte Ismael (Gen 21,21). Also kommt der Heilige aus Arabien: Muhammad.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Der Text sagt: „**Gott** kam vom Mittag und **der Heilige** vom Gebirge Paran" – es kommt Gott selbst, nicht ein Prophet. Habakuk erinnert an Gottes Erscheinen beim Auszug aus Ägypten und bittet ihn, sein Werk zu erneuern (3,2), um „deinem Volk zu helfen, zu helfen deinem Gesalbten" (3,13). Und Paran liegt nach der Bibel auf dem Sinai: Von dort sandte Mose die Kundschafter nach Kanaan, und sie kehrten „in die Wüste Paran gen Kades" zurück (Num 13,26).`,
      followUps: [
        {
          id: 'ismael-wohnte-in-paran',
          objection: `Aber Gen 21,21 sagt ausdrücklich, Ismael habe in der Wüste Paran gewohnt. Und die Ismaeliten sind die Araber von Mekka.`,
          objectionBy: 'Zakir Naik',
          answer: `Gen 21,21 bestätigt gerade, dass Paran die Wüste südlich von Kanaan war, wo Hagar mit Ismael von Beerscheba aus hinzog (21,14). Die Bibel verortet Paran an allen Stellen in der Nähe von Sinai und Kadesch (Num 10,12; 12,16; 13,3.26). Dass Muslime später Paran mit der Gegend von Mekka gleichsetzten, ist eine nachbiblische Identifikation, die die biblische Geografie nicht stützt.`,
          sources: [
            { kind: 'bibel', work: 'Numeri', ref: '10,12', quote: `Und die Kinder Israel brachen auf aus der Wüste Sinai, und die Wolke blieb in der Wüste Pharan.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'dtn-33-2-zehntausend',
      objection: `Dtn 33,2: „Er ist hervorgebrochen vom Berg Paran und gekommen mit Zehntausenden von Heiligen." Muhammad zog 630 mit 10.000 Gefährten in Mekka ein. Das ist eine exakte Erfüllung.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Der Vers spricht vom HERRN, der von Sinai, Seir und Paran kam – in der Vergangenheitsform – und „zu seiner Rechten ist ein feuriges Gesetz an sie". Zwei Verse später: „Mose hat uns das Gesetz geboten" (33,4). Es geht um die Gesetzgebung am Sinai. Die „Heiligen" sind die himmlischen Heerscharen (die griechische Übersetzung spricht von Engeln). Und „Zehntausende" (*rivᵉvôt*) ist eine runde Zahl für eine unzählbare Menge, keine Truppenstärke.`,
    },
    {
      id: 'jes-21-7-kamelreiter',
      objection: `Jesaja 21,7 sieht „Reiter auf Eseln und Reiter auf Kamelen" – Jesus zog auf einem Esel in Jerusalem ein, Muhammad ritt auf einem Kamel. Zwei Propheten!`,
      objectionBy: 'Islamischer Prediger (bereits beim Kalifen al-Mahdi bezeugt)',
      answer: `Das Kapitel ist überschrieben als Last über die „Wüste am Meer" und spricht vom Angriff Elams und Mediens (21,2) und vom Fall Babylons: „Gefallen, gefallen ist Babel" (21,9). Die Reiterzüge sind die anrückenden Heere. Schon Timotheus I. hat dem Kalifen al-Mahdi 781 auf diese Deutung geantwortet.`,
    },
    {
      id: 'mt-21-43-anderes-volk',
      objection: `Jesus sagt: „Das Reich Gottes wird von euch genommen und einem Volk gegeben werden, das seine Früchte bringt" (Mt 21,43). Das andere Volk sind die Araber, die Nachkommen Ismaels.`,
      objectionBy: 'Zakir Naik',
      answer: `Im Vers davor sagt Jesus, wer der entscheidende Stein ist: „Der Stein, den die Bauleute verworfen haben, der ist zum Eckstein geworden" (21,42) – er selbst. Das neue „Volk" ist die Gemeinschaft derer, die auf ihn gebaut sind, aus Juden und Heiden; Petrus nennt sie „das heilige Volk" (1 Petr 2,9). Das Gleichnis gipfelt im Tod des Sohnes (21,37–39) – den der Islam gerade bestreitet.`,
    },
    {
      id: 'joh-1-21-der-prophet',
      objection: `Die Juden fragten Johannes: „Bist du Christus? Bist du Elia? Bist du der Prophet?" (Joh 1,20–21). Der Prophet ist also eine dritte Person neben dem Messias – Muhammad.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Die Frage zeigt, dass die Erwartungen im Volk unklar waren: Manche hielten den Propheten und den Messias für verschiedene Gestalten (Joh 7,40–41). Das Evangelium beantwortet die Frage: Nach der Speisung sagen die Leute „Das ist wahrlich der Prophet" (6,14), und Petrus bezieht Dtn 18 ausdrücklich auf Jesus (Apg 3,22). Ein Johannesevangelium, das 600 Jahre vorher Muhammad als „den Propheten" ankündigt, aber an anderer Stelle Jesus so nennt, wäre ein seltsamer Zeuge.`,
    },
  ],
  questionsToAsk: [
    `Wer kommt in Hab 3,3 und Dtn 33,2 – ein Prophet oder Gott selbst?`,
    `Wo liegt Paran nach Num 13,3 und 13,26?`,
    `Was bedeutet *maḥmad* in Ez 24,16 und 2 Chr 36,19?`,
    `Warum braucht man Umdeutungen, wenn die Bibel Muhammad klar ankündigen würde, wie 7:157 sagt?`,
    `Wovon handelt Jesaja 21 laut Vers 9?`,
  ],
  avoid: [
    `Nicht behaupten, Muslime hätten diese Deutungen „erfunden, um zu täuschen". Viele vertreten sie aufrichtig; zeige ruhig den Kontext.`,
    `Nicht leugnen, dass Ismael gesegnet ist (Gen 17,20; 21,13.18) – die Bibel segnet ihn ausdrücklich; der Bund aber geht über Isaak (Gen 17,21).`,
    `Nicht selbst mit der allegorischen Methode „Gegenbeweise" konstruieren – argumentiere mit Wortsinn und Kontext.`,
  ],
  concessions: [
    `Die Wurzel ḥ-m-d in Hld 5,16 ist tatsächlich dieselbe wie in „Muhammad" und „Ahmad".`,
    `Kedar ist tatsächlich ein ismaelitischer, arabischer Stamm (Gen 25,13), und die Bibel bezieht die Völker Arabiens in Gottes Heil ein (Jes 60,6–7).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ahmed Deedat', work: 'What the Bible Says about Muhammad', year: '1976', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Mohammed in der Bibel', 'Hohelied 5,16', 'Jesaja 42', 'Paran', 'Deedat'],
  related: [
    'islam-mohammed/prophet-wie-mose-dtn-18',
    'islam-mohammed/paraklet-ist-mohammed',
    'prophetie/prophezeiungen-vage',
    'islam-dilemma/injil-ist-nicht-das-nt',
  ],
};

export default claim;
