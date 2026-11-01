import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'deuterokanonen-keine-bibel',
  title: `„Die Apokryphen gehören nicht zur Bibel."`,
  proponents: [
    { name: 'Wayne Grudem', role: 'Systematischer Theologe, Phoenix Seminary', work: 'Systematic Theology (1994), Kap. 3 „The Canon of Scripture"' },
    { name: 'Norman L. Geisler / William E. Nix', role: 'Evangelikale Apologeten', work: 'A General Introduction to the Bible (1968, überarb. 1986)' },
    { name: 'Westminster-Bekenntnis', role: 'Reformiertes Grundbekenntnis (1647)', work: 'Kap. 1,3' },
    { name: 'Martin Luther', role: 'Reformator', work: 'Vollbibel 1534 – Apokryphen im Anhang' },
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'Debatten zum Kanon mit katholischen Apologeten' },
  ],
  steelman: `Das Alte Testament ist den Juden anvertraut: „Ihnen ist vertraut, was Gott geredet hat" (Röm 3,2). Der jüdische Kanon kennt die sogenannten Apokryphen nicht; Josephus nennt um 95 n. Chr. 22 Bücher und sagt, seit Artaxerxes habe es keine verlässliche Prophetenfolge mehr gegeben – was 1 Makk 9,27 selbst bestätigt. Jesus spricht von „Gesetz, Propheten und Psalmen" (Lk 24,44) und vom Blut „von Abel bis Zacharias" (Lk 11,51), also von Genesis bis zur Chronik, dem letzten Buch der hebräischen Bibel. Das NT zitiert diese Bücher nie mit „es steht geschrieben". Die Kirche war sich nie einig: Melito, Origenes, Athanasius, Kyrill von Jerusalem und Hieronymus grenzten sie aus; Hieronymus nannte sie ausdrücklich „Apokryphen". Erst das Konzil von Trient erhob sie 1546 zum Dogma – als Reaktion auf Luther. Inhaltlich enthalten sie Probleme: Almosen tilgen Sünden (Tob 12,9; Sir 3,30), Gebete und Opfer für Tote (2 Makk 12), eine Fischleber gegen Dämonen (Tob 6), und Judit macht Nebukadnezar zum König der Assyrer in Ninive. Der Verfasser von 2 Makk entschuldigt sich sogar für seine mögliche Unzulänglichkeit (15,38) – so spricht kein inspirierter Autor.`,
  biblical: {
    summary: `Die Apostel benutzten überwiegend die griechische Übersetzung des AT (Septuaginta), deren christliche Handschriften die deuterokanonischen Bücher enthalten. Das NT spielt deutlich auf sie an (Hebr 11,35 ↔ 2 Makk 7; Mt 27,43 ↔ Weish 2,18; Röm 1,18–32 ↔ Weish 13–14; Hebr 1,3 ↔ Weish 7,26), und Jesus feierte das Fest der Tempelweihe, dessen Ursprung nur 1 Makk 4 erzählt (Joh 10,22). Das Kriterium „im NT zitiert" taugt ohnehin nicht: Ester, Prediger, Hoheslied, Esra und Nehemia werden im NT nie zitiert, der Judasbrief aber zitiert das Henochbuch (Jud 14).`,
    detail: `**Die Septuaginta war die Bibel der Urkirche.** Die Mehrheit der alttestamentlichen Zitate im NT folgt dem griechischen Text. Ein bekanntes Beispiel: Hebr 10,5 zitiert Ps 40,7 nach der Septuaginta („einen Leib aber hast du mir bereitet"), nicht nach dem hebräischen Text („Ohren hast du mir gegraben"). Die großen christlichen Bibelhandschriften des 4./5. Jahrhunderts (Codex Vaticanus, Sinaiticus, Alexandrinus – Letzterer vermutlich aus Ägypten) enthalten Tobit, Judit, Weisheit, Sirach u. a. mitten unter den anderen Büchern.

**Anspielungen im NT:**
- **Hebr 11,35:** „Andere aber sind zerschlagen (*etympanisthēsan*) und haben keine Erlösung angenommen, auf daß sie die Auferstehung, die besser ist, erlangten" – das ist die Geschichte der sieben Brüder und ihrer Mutter in 2 Makk 7 (vgl. 2 Makk 6,19.28: *tympanon*; 7,9.14: Hoffnung auf Auferstehung). Im protestantischen AT gibt es keine solche Erzählung.
- **Mt 27,43** („Er hat Gott vertraut; der erlöse ihn nun, lüstet's ihn; denn er hat gesagt: Ich bin Gottes Sohn") greift Ps 22,9 auf, aber der Zusatz „er hat gesagt: Ich bin Gottes Sohn" entspricht Weish 2,13.18 („ist der Gerechte Gottes Sohn, so wird er ihm helfen").
- **Röm 1,18–32** folgt dem Gedankengang von Weish 13–14 (Gott aus der Schöpfung erkennbar; Götzendienst führt zu sittlichem Verfall).
- **Hebr 1,3** nennt den Sohn „Abglanz (*apaugasma*) seiner Herrlichkeit" – das Wort steht in der ganzen Septuaginta nur in Weish 7,26.

**Ehrlich:** Anspielungen sind keine Kanonbeweise – das NT spielt auch auf das Henochbuch (Jud 14–15) und heidnische Dichter (Apg 17,28) an. Gerade deshalb zeigt sich: Der Kanon wird nicht durch NT-Zitate bestimmt, sondern durch die Rezeption der Kirche.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '11,35', quote: `Weiber haben ihre Toten von der Auferstehung wiedergenommen. Die andern aber sind zerschlagen und haben keine Erlösung angenommen, auf daß sie die Auferstehung, die besser ist, erlangten.`, translation: 'Luther 1912', status: 'verbatim', note: 'Anspielung auf 2 Makk 7 (Martyrium der sieben Brüder).' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,9', quote: `Der zweite Bruder spricht im Sterben: Der König der Welt wird uns, die wir für seine Gesetze sterben, zu einem ewigen Leben auferwecken.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '27,43', quote: `Er hat Gott vertraut; der erlöse ihn nun, lüstet's ihn; denn er hat gesagt: Ich bin Gottes Sohn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit', ref: '2,17–18', quote: `Die Gottlosen sagen über den Gerechten: Lasst uns sehen, ob seine Worte wahr sind … Denn ist der Gerechte Gottes Sohn, so wird er sich seiner annehmen und ihn aus der Hand der Widersacher erretten.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Hebräer', ref: '10,5', quote: `Darum, da er in die Welt kommt, spricht er: „Opfer und Gaben hast du nicht gewollt; den Leib aber hast du mir bereitet."`, translation: 'Luther 1912', status: 'verbatim', note: 'Zitat von Ps 40,7 nach der Septuaginta.' },
      { kind: 'bibel', work: 'Judas', ref: '14', quote: `Es hat aber auch von solchen geweissagt Henoch, der siebente von Adam, und gesprochen: „Siehe, der Herr kommt mit viel tausend Heiligen …"`, translation: 'Luther 1912', status: 'verbatim', note: 'Zitat aus 1 Henoch 1,9 – kein Kanonbuch der koptischen Kirche (wohl aber der äthiopischen).' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche nimmt die deuterokanonischen Bücher als Teil der Heiligen Schrift an: Tobit, Judit, die griechischen Teile von Ester und Daniel, Weisheit, Sirach, Baruch mit dem Brief des Jeremia und die Makkabäerbücher (dazu Ps 151). Sie folgt damit der Bibel der Apostel, der Septuaginta, und dem Gebrauch der Väter. Ehrlich ist festzuhalten: In der Alten Kirche wurde über die Grenzen des AT-Kanons beraten, und der hl. Athanasius zählte einige dieser Bücher zu den „lesenswerten" statt zu den kanonischen.`,
    detail: `**Die frühesten Zeugen benutzen die Bücher selbstverständlich:**
- **Clemens von Rom** (um 96) stellt Judit und Ester als Vorbilder nebeneinander (1 Clem 55).
- **Polykarp** (um 110–135) zitiert den „anstößigen" Satz aus Tobit: „Almosen erretten vom Tod" (An die Philipper 10,2; vgl. Tob 4,10; 12,9).
- **Athanasius** zitiert in seinem Hauptwerk über die Menschwerdung die Weisheit Salomos als Schrift: Gott hat den Menschen zur Unvergänglichkeit geschaffen; durch den Neid des Teufels kam der Tod in die Welt (De Inc. 5; vgl. Weish 2,23–24).
- **Origenes** verteidigt gegen Julius Africanus die Geschichte der Susanna: Die Kirchen sollten die Bücher, die sie gebrauchen, nicht aufgeben, nur weil die Juden sie nicht haben (Brief an Africanus).
- Die Synoden von **Hippo (393)** und **Karthago (397, 419)** nennen Tobit, Judit, zwei Makkabäerbücher und „fünf Bücher Salomos" (Spr, Pred, Hld, Weish, Sir) unter den kanonischen Schriften.

**Athanasius ehrlich gelesen:** Sein 39. Osterfestbrief (367) zählt Weisheit, Sirach, Ester, Judit und Tobit zu Büchern, „die nicht im Kanon stehen, aber von den Vätern bestimmt sind, von denen gelesen zu werden, die neu hinzukommen". Zugleich nimmt er Baruch und den Brief des Jeremia in den Kanon auf – und lässt Ester draußen. Sein Kanon deckt sich also weder mit dem protestantischen noch mit dem späteren orthodoxen. Er zeigt: Im 4. Jahrhundert waren die Ränder noch offen; die Kirche hat in ihrer Überlieferung entschieden.

**Ehrliche koptische Fußnote:** Die im 19. Jahrhundert von Missionaren erstellte arabische Van-Dyck-Bibel, die bis heute auch unter Kopten verbreitet ist, enthält die deuterokanonischen Bücher nicht; sie wurden in der koptischen Kirche gesondert gedruckt und gelesen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Es gibt außer diesen noch andere Bücher, die zwar nicht in den Kanon aufgenommen, aber von den Vätern bestimmt sind, von denen gelesen zu werden, die neu hinzukommen und in der Lehre der Frömmigkeit unterwiesen werden wollen: die Weisheit Salomos, die Weisheit Sirachs, Ester, Judit, Tobit, die sogenannte Lehre der Apostel und der Hirt.`, translation: 'eigene Übersetzung (nach NPNF II/4)', status: 'verbatim', note: 'Ehrliches Zugeständnis. Baruch und der Brief des Jeremia stehen bei Athanasius im Kanon (bei Jeremia).' },
      { kind: 'kirchenvater', author: 'Polykarp von Smyrna', work: 'Brief an die Philipper', ref: '10,2', quote: `Wenn ihr Gutes tun könnt, schiebt es nicht auf, denn Almosen erretten vom Tod.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Zitat aus Tob 4,10 / 12,9.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '5', quote: `Gott hat den Menschen zur Unvergänglichkeit geschaffen und zum Abbild seiner eigenen Ewigkeit; durch den Neid des Teufels aber kam der Tod in die Welt.`, status: 'paraphrase', note: 'Athanasius zitiert hier Weish 2,23–24 als Schriftwort.' },
      { kind: 'konzil', work: 'Synode von Karthago (Breviarium Hipponense)', year: '397 (Bestätigung der Liste von Hippo 393)', quote: `Kanonliste mit Tobit, Judit, Ester, zwei Büchern der Makkabäer und fünf Büchern Salomos (Sprüche, Prediger, Hoheslied, Weisheit, Sirach).`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Apostel lasen das AT überwiegend in der griechischen Septuaginta, und die christlichen Bibeln der Alten Kirche enthalten diese Bücher. Das NT spielt auf sie an – z. B. Hebr 11,35 auf die makkabäischen Märtyrer – und die ältesten Väter wie Clemens von Rom und Polykarp zitieren sie. Luther selbst druckte sie noch in seiner Bibel als „nützlich und gut zu lesen". Ehrlich gesagt: In der Alten Kirche wurde über ihren Rang beraten – aber die Kirche hat sie in ihrer Überlieferung als Schrift angenommen.`,
  keyPoints: [
    `**Septuaginta:** Die Bibel der Urkirche war mehrheitlich griechisch; ihre christlichen Handschriften enthalten die Deuterokanonen.`,
    `**NT-Anspielungen:** Hebr 11,35 (2 Makk 7), Mt 27,43 (Weish 2), Röm 1 (Weish 13–14), Hebr 1,3 (Weish 7,26), Joh 10,22 (1 Makk 4).`,
    `**Das Zitat-Kriterium versagt:** Ester, Prediger, Hoheslied werden im NT nie zitiert; Henoch wird zitiert.`,
    `**Frühe Väter:** Clemens von Rom (Judit), Polykarp (Tobit), Athanasius (Weisheit in De Inc.), Synoden von Hippo und Karthago.`,
    `**Der jüdische Kanon war zur Zeit Jesu nicht abgeschlossen**; der rabbinische Kanon ist kein Maßstab für die Kirche Christi.`,
    `**Luther strich sie nicht**, sondern stellte sie 1534 in einen Anhang; erst im 19. Jahrhundert verschwanden sie aus den meisten protestantischen Bibeln.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als ehrlicher Zeuge der Kanondiskussion',
      text: `Athanasius ist für dieses Thema der wichtigste und zugleich unbequemste Zeuge. Er trennt 367 die kanonischen Bücher von den „lesenswerten" (*anaginōskomena*), zu denen er Weisheit, Sirach, Ester, Judit und Tobit zählt. Aber diese Bücher waren für ihn keineswegs wertlos: Die Väter haben bestimmt, dass gerade die Neubekehrten sie lesen sollen, und er selbst zitiert die Weisheit in seiner Schrift über die Menschwerdung an zentraler Stelle als Schriftwort.

Der Unterschied zur protestantischen Praxis ist groß: Athanasius ordnet die Bücher *in* die Leseordnung der Kirche ein; der spätere Protestantismus hat sie *aus* der Bibel entfernt. Und sein Kanon ist nicht der protestantische – er enthält Baruch und lässt Ester weg.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Liste des AT: … Jeremia und mit ihm Baruch, Klagelieder und der Brief, danach Ezechiel und Daniel.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Textkritiker (mit Vorbehalt)',
      text: `Origenes kannte den hebräischen Text besser als jeder andere Christ seiner Zeit – er schuf die Hexapla. Trotzdem verteidigte er gegen Julius Africanus die Susanna-Erzählung (griechische Zusätze zu Daniel): Es sei nicht angemessen, dass die Kirchen die Schriften, die sie gebrauchen, preisgeben und von den Juden neue erbitten. Er zitierte dazu Spr 22,28: „Treibe nicht zurück die vorigen Grenzen, die deine Väter gemacht haben."

Origenes ist in der koptischen Kirche keine Lehrautorität, aber als Zeuge für den Gebrauch der Kirchen im 3. Jahrhundert unverdächtig – gerade weil er die hebräische Tradition genau kannte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Brief an Julius Africanus', year: 'um 240', quote: `Sollen wir die in unseren Kirchen gebrauchten heiligen Bücher aufgeben und die Brüder überreden, sie wegzulegen, um den Juden zu gefallen? „Verrücke nicht die alten Grenzen, die deine Väter gesetzt haben."`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hieronymus',
      role: 'als Kronzeuge der Gegenseite',
      text: `Hieronymus ist der stärkste patristische Zeuge für die protestantische Position: Er bevorzugte die „hebräische Wahrheit" und nannte die Bücher außerhalb des hebräischen Kanons „Apokryphen" (Prologus galeatus). Ehrlich anerkennen! Aber auch Hieronymus übersetzte Tobit und Judit für die Kirche; im Vorwort zu Judit vermerkt er, das Konzil von Nizäa solle dieses Buch zu den heiligen Schriften gezählt haben, und gegen Rufin rechtfertigt er sich, er sei in der Frage der Danielzusätze „dem Urteil der Kirchen" gefolgt.

Hieronymus zeigt also beides: einen ernsthaften Gelehrtenstreit – und die Bereitschaft, sich am Ende dem Gebrauch der Kirche zu beugen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vorrede zum Buch Judit', year: 'um 398', quote: `Weil die Synode von Nizäa dieses Buch zu den heiligen Schriften gezählt haben soll, habe ich deiner Bitte nachgegeben.`, status: 'paraphrase', note: 'Ob Nizäa tatsächlich über den Kanon befand, ist nicht belegt – Hieronymus gibt eine Überlieferung wieder.' },
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Gegen Rufin (Apologia adversus Rufinum)', ref: 'II,33', quote: `Hieronymus verteidigt sich, er habe bei den Zusätzen zu Daniel nicht seine eigene Meinung, sondern die Einwände der Juden referiert und sei dem Urteil der Kirchen gefolgt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Zeuge des nordafrikanischen Kanons',
      text: `Augustinus nennt in „Über die christliche Lehre" (II,8) eine Liste der kanonischen Bücher, die Tobit, Judit, die Makkabäerbücher, Weisheit und Sirach einschließt, und gibt als Kriterium das Urteil möglichst vieler Kirchen, besonders der apostolischen Sitze. Im „Gottesstaat" (XVIII,36) hält er fest, die Makkabäerbücher würden nicht von den Juden, wohl aber von der Kirche als kanonisch angenommen. Augustinus ist für die koptische Kirche ein westlicher Vater mit Vorbehalten – als Zeuge für die Praxis seiner Zeit ist er eindeutig.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Über die christliche Lehre (De doctrina christiana)', ref: 'II,8,13', year: 'um 397', quote: `Kanonliste mit Tobit, Judit, zwei Makkabäerbüchern, Weisheit und Sirach; Kriterium: Annahme durch die Mehrheit der Kirchen, besonders der apostolischen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'metzger',
      role: 'als protestantischer Fachmann für die Apokryphen',
      text: `Bruce Metzger, ein Presbyterianer, hat eine Einführung in die Apokryphen geschrieben und darin die vielen Berührungen zwischen diesen Büchern und dem NT aufgelistet. Sein Urteil ist fair: Die Bücher waren der Umwelt der Apostel vertraut, wurden in den Kirchen gelesen und sind für das Verständnis des NT unentbehrlich. Dass Protestanten sie heute kaum kennen, ist ein historischer Bruch, kein Normalzustand der Christenheit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'An Introduction to the Apocrypha', year: '1957', quote: `Darstellung der Apokryphen und ihrer Bezüge zum NT; Hinweis auf ihren Gebrauch in der Alten Kirche.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nt-zitiert-nie',
      objection: `„Jesus und die Apostel zitieren diese Bücher nie mit ‚es steht geschrieben'. Was das NT nicht als Schrift zitiert, ist nicht Schrift."`,
      objectionBy: 'Wayne Grudem / Norman Geisler',
      answer: `Das Kriterium würde auch deine Bibel verkleinern: Ester, Prediger, Hoheslied, Esra und Nehemia werden im NT nie zitiert. Umgekehrt zitiert Judas das Henochbuch (Jud 14). Und Anspielungen gibt es durchaus: Hebr 11,35 erzählt von den makkabäischen Märtyrern (2 Makk 7), Hebr 1,3 übernimmt das Wort *apaugasma* aus Weish 7,26, Mt 27,43 klingt an Weish 2,18 an.`,
      followUps: [
        {
          id: 'anspielungen-beweisen-nichts',
          objection: `„Anspielungen beweisen nichts – sonst wären auch Henoch und der Dichter Aratus kanonisch."`,
          objectionBy: 'Wayne Grudem',
          answer: `Einverstanden – und genau das ist mein Punkt: Das NT-Zitat ist gar nicht das Kriterium für den Kanon. Weder du noch ich bestimmen den AT-Kanon durch Zählen von NT-Zitaten. Die richtige Frage lautet: Welches Alte Testament hat die apostolische Kirche empfangen und im Gottesdienst gelesen? Die Antwort: das griechische AT mit diesen Büchern.`,
          followUps: [
            {
              id: 'kodizes-beweisen-nichts',
              objection: `„Die großen Kodizes enthalten auch 3. und 4. Makkabäer, Psalmen Salomos oder den 1. Clemensbrief. Sie sind keine Kanonlisten."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Richtig, die Kodizes sind keine Kanonlisten – das gebe ich zu. Aber sie zeigen, was die Kirchen mit der Schrift lasen. Entscheidender sind die Väter: Clemens von Rom stellt Judit neben Ester (1 Clem 55), Polykarp zitiert Tobit (Phil 10,2), Athanasius zitiert die Weisheit als Schriftwort (De Inc. 5), und die Synoden von Hippo und Karthago zählen die Bücher zum Kanon. Das ist ein breites, frühes Zeugnis.`,
            },
          ],
        },
      ],
    },
    {
      id: 'juden-anvertraut',
      objection: `„Den Juden ist Gottes Wort anvertraut (Röm 3,2), und sie haben diese Bücher nie anerkannt. Josephus nennt 22 Bücher und sagt, seit Artaxerxes habe es keine Propheten mehr gegeben."`,
      objectionBy: 'James White',
      answer: `Zur Zeit Jesu gab es keinen abgeschlossenen, von allen Juden anerkannten Kanon: In Qumran las man Tobit (aramäisch und hebräisch) und Sirach, griechischsprachige Juden benutzten die Septuaginta. Und Röm 3,2 beschreibt die Vergangenheit; nach Christus liegt die Unterscheidungsvollmacht bei der Kirche – sonst müsstest du auch die rabbinische Ablehnung des NT übernehmen. Josephus' Kriterium („keine Propheten mehr seit Artaxerxes") würde übrigens auch das ganze NT ausschließen.`,
      sources: [
        { kind: 'juedisch', author: 'Flavius Josephus', work: 'Gegen Apion (Contra Apionem)', ref: 'I,8 (37–42)', year: 'um 95', quote: `Josephus nennt 22 Bücher als zuverlässig; von Artaxerxes bis zu seiner Zeit sei zwar alles aufgeschrieben, aber nicht für gleich glaubwürdig gehalten worden, weil die genaue Folge der Propheten fehlte.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Matthäus', ref: '21,43', quote: `Darum sage ich euch: Das Reich Gottes wird von euch genommen und einem Volke gegeben werden, das seine Früchte bringt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jamnia',
          objection: `„Das Konzil von Jamnia hat den jüdischen Kanon um 90 n. Chr. verbindlich abgeschlossen."`,
          objectionBy: 'populäre evangelikale Literatur',
          answer: `Darauf solltest du dich nicht stützen – und ich mich auch nicht: Die Forschung sieht in Jamnia (Javne) heute kein kanonschließendes Konzil mehr; dort wurde über einzelne Bücher wie Prediger und Hoheslied diskutiert. Der Prozess der Kanonbildung im rabbinischen Judentum zog sich bis ins 2. Jahrhundert und darüber hinaus. Gerade das zeigt: Zur Zeit der Apostel war der Rand des AT noch offen.`,
          followUps: [
            {
              id: 'lk-24-44',
              objection: `„Auch ohne Jamnia: Jesus spricht von ‚Gesetz, Propheten und Psalmen' (Lk 24,44). Das ist der hebräische Kanon in drei Teilen."`,
              objectionBy: 'Norman Geisler',
              answer: `Jesus nennt die Psalmen – nicht eine abgeschlossene Liste des dritten Teils. Gerade dieser Teil war damals noch fließend. Und die Apostel schrieben für griechischsprachige Gemeinden mit der Septuaginta: Der Hebräerbrief baut ein christologisches Argument auf dem griechischen Wortlaut von Ps 40 auf („einen Leib hast du mir bereitet", Hebr 10,5). Die Apostel haben ihren Gemeinden die griechische Bibel in die Hand gegeben.`,
            },
          ],
        },
        {
          id: 'abel-zacharias',
          objection: `„Lk 11,51: ‚Von Abels Blut an bis auf das Blut des Zacharias' – Jesus umfasst damit den hebräischen Kanon von Genesis bis zur Chronik."`,
          objectionBy: 'Norman Geisler',
          answer: `Das setzt voraus, dass die Chronik schon damals das letzte Buch einer festen Reihenfolge war – in der Zeit der Schriftrollen gab es aber keine gebundene Bibel mit fester Reihenfolge. Jesus spricht von der Kette der ermordeten Gerechten, nicht von einem Inhaltsverzeichnis. Und selbst wenn: Über Weisheit oder Sirach, die keine Märtyrererzählung enthalten, sagt der Vers nichts.`,
        },
      ],
    },
    {
      id: 'eure-vaeter-lehnten-ab',
      objection: `„Selbst eure Väter lehnten diese Bücher ab: Hieronymus nannte sie Apokryphen, und euer eigener Papst Athanasius hat sie aus dem Kanon ausgeschlossen."`,
      objectionBy: 'Gavin Ortlund / William Webster',
      answer: `Ehrlich: Ja – Athanasius zählte Weisheit, Sirach, Ester, Judit und Tobit zu den „lesenswerten" Büchern, nicht zum Kanon, und Hieronymus bevorzugte den hebräischen Kanon. Aber sieh genau hin: Athanasius nahm Baruch und den Brief des Jeremia **in** den Kanon auf und ließ Ester **draußen**; er befahl, die anderen Bücher den Neubekehrten zu lesen, und zitierte die Weisheit selbst als Schrift. Und Hieronymus beugte sich am Ende dem „Urteil der Kirchen".`,
      followUps: [
        {
          id: 'athanasius-protestantisch',
          objection: `„Also teilte selbst der koptische Papst Athanasius im Wesentlichen den protestantischen Kanon."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Nein. Der protestantische Kanon schließt Baruch aus, den Athanasius aufnahm, und schließt Ester ein, die Athanasius ausschloss. Und Protestanten haben die „lesenswerten" Bücher seit dem 19. Jahrhundert aus ihren Bibeln entfernt, während Athanasius ihre Lektüre anordnete. Athanasius beweist vor allem eines: Im 4. Jahrhundert waren die Ränder des Kanons noch offen, und die endgültige Annahme durch die Kirche ist entscheidend – genau das, was wir über den Kanon und die Überlieferung sagen.`,
          sources: [
            { kind: 'gegner', author: 'Martin Luther', work: 'Biblia, das ist die gantze Heilige Schrifft Deudsch', year: '1534', quote: `Apocrypha. Das sind Bücher, so der heiligen Schrift nicht gleich gehalten und doch nützlich und gut zu lesen sind.`, translation: 'Original (Schreibweise modernisiert)', status: 'verbatim', note: 'Luther behielt die Bücher in seiner Bibel. Die britische Bibelgesellschaft beschloss erst 1826, Bibeln ohne Apokryphen zu verbreiten.' },
          ],
          followUps: [
            {
              id: 'kuerzester-kanon-sicher',
              objection: `„Wenn der Rand umstritten war, ist es am sichersten, nur die unumstrittenen Bücher zu nehmen – den hebräischen Kanon."`,
              objectionBy: 'Wayne Grudem',
              answer: `„Am sichersten" hieße dann: den Kanon nach dem Urteil der Synagoge festlegen, die Christus nicht annahm – statt nach der Kirche, die die Apostel gründeten. Mit derselben Logik müsstest du auch beim NT nur die *homologoumena* behalten und Jakobus, 2 Petrus, Judas und die Offenbarung streichen, über die ebenfalls gestritten wurde. Das tust du nicht – weil du der späteren Annahme durch die Kirche vertraust.`,
              questionsBack: [
                `Würdest du nach dem „Sicherheitsprinzip" auch 2 Petrus und die Offenbarung aus deinem NT entfernen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'irrlehren-in-apokryphen',
      objection: `„Diese Bücher enthalten Irrlehren: Almosen tilgen Sünden (Tob 12,9; Sir 3,30), Opfer für Tote (2 Makk 12) und Dämonenaustreibung mit Fischleber (Tob 6)."`,
      objectionBy: 'Wayne Grudem / John MacArthur',
      answer: `Dieselben Gedanken stehen auch in deiner Bibel: „Durch Güte und Treue wird Missetat versöhnt" (Spr 16,6), „mache dich ledig von deiner Missetat durch Wohltat an den Armen" (Dan 4,24), „die Liebe deckt auch der Sünden Menge" (1 Petr 4,8), „gebt Almosen … so ist's euch alles rein" (Lk 11,41). Polykarp, Schüler des Johannes, zitierte Tobits Satz zustimmend. Das Gebet für die Toten war jüdische und frühchristliche Praxis. Und Tob 6 beschreibt ein von Gott durch den Engel gegebenes Mittel – nicht anders als Jesu Speichelbrei (Joh 9,6) oder das Salz des Elisa (2 Kön 2,21).`,
      sources: [
        { kind: 'bibel', work: 'Daniel', ref: '4,24', quote: `Darum, Herr König, laß dir meinen Rat gefallen und mache dich los von deinen Sünden durch Gerechtigkeit und ledig von deiner Missetat durch Wohltat an den Armen …`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '1. Petrus', ref: '4,8', quote: `Vor allen Dingen aber habt untereinander eine inbrünstige Liebe; denn die Liebe deckt auch der Sünden Menge.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Lukas', ref: '11,41', quote: `Doch gebt Almosen von dem, was da ist, siehe, so ist's euch alles rein.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'spr-16-6-gottes-guete',
          objection: `„Spr 16,6 meint Gottes Güte und Treue, nicht menschliche Werke. Und Dan 4 ist ein Ratschlag an einen Heiden."`,
          objectionBy: 'James White',
          answer: `Bei Spr 16,6 ist die Deutung tatsächlich umstritten. Aber Dan 4,24 ist eindeutig ein Prophetenrat im Kanon, und 1 Petr 4,8 richtet sich an Christen. Die orthodoxe Lesart ist ausgewogen: Almosen kaufen keine Vergebung an Christus vorbei, sondern sind Frucht der Umkehr, die Gott annimmt – wie bei Zachäus, der die Hälfte seines Besitzes den Armen gab, und Jesus sagte: „Heute ist diesem Hause Heil widerfahren" (Lk 19,9).`,
          followUps: [
            {
              id: 'werkgerechtigkeit-apokryphen',
              objection: `„Das bleibt Werkgerechtigkeit – genau deshalb hat die Reformation diese Bücher ausgesondert."`,
              objectionBy: 'John MacArthur',
              answer: `Dann entscheidet deine Rechtfertigungslehre über deinen Kanon – nicht umgekehrt. Das ist der springende Punkt: Luther stellte nicht nur die Deuterokanonen in den Anhang, sondern auch Jakobus, Hebräer, Judas und die Offenbarung ans Ende seines NT. Wer Bücher nach ihrer Vereinbarkeit mit einer bestimmten Lehre sortiert, macht die eigene Theologie zum Maßstab der Schrift. (Mehr im Claim „Gute Werke als Heilsbedingung sind Werkgerechtigkeit".)`,
            },
          ],
        },
        {
          id: 'judit-geschichtsfehler',
          objection: `„Judit enthält grobe historische Fehler: Nebukadnezar als König der Assyrer, der in Ninive regiert. Ein inspiriertes Buch irrt nicht."`,
          objectionBy: 'Norman Geisler',
          answer: `Ehrlich: Als Geschichtsschreibung gelesen ist Judit problematisch. Viele Ausleger – auch orthodoxe und katholische – verstehen das Buch als lehrhafte Erzählung, die bewusst Epochen mischt: „Nebukadnezar, König der Assyrer in Ninive" ist für einen jüdischen Leser ein Signal wie „es war einmal". Inspiration verlangt nicht, dass jedes Buch eine Chronik ist; auch beim Buch Hiob oder bei Gleichnissen fragt niemand nach dem Geburtsregister.`,
          followUps: [
            {
              id: 'judit-dammbruch',
              objection: `„Damit öffnest du die Tür zum Liberalismus: Wenn Judit ‚lehrhafte Erzählung' sein darf, dann auch Jona, Daniel oder die Auferstehungsberichte."`,
              objectionBy: 'Norman Geisler / John MacArthur',
              answer: `Nein – die Gattung bestimmt der Text selbst, nicht unser Geschmack. Die Evangelien geben sich als Augenzeugenbericht (Lk 1,1–4; 1 Kor 15,3–8), Judit gibt sich mit offen widersprüchlichen Herrscherangaben als Erzählung zu erkennen. Auch Protestanten lesen Hiob und das Hohelied nicht als Chronik, ohne deshalb die Auferstehung zu bezweifeln. Und die Väter lasen die Schrift seit Alexandria immer im wörtlichen **und** geistlichen Sinn – ohne je die Heilsereignisse in Frage zu stellen.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '1,1–3', quote: `Sintemal sich's viele unterwunden haben, Bericht zu geben von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn mit Fleiß erkundet habe, daß ich's dir, mein guter Theophilus, in Ordnung schriebe.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zeugnis-des-geistes',
      objection: `„Die Schrift beglaubigt sich selbst durch das innere Zeugnis des Heiligen Geistes. Wer Gottes Wort liest, schmeckt seine Majestät, wie man Süßes von Bitterem unterscheidet. Die Apokryphen haben diese Majestät nicht – das merkt jeder geistliche Leser."`,
      objectionBy: 'Johannes Calvin (historisch)',
      answer: `Das innere Zeugnis des Geistes ist kostbar für den Glauben – aber als Kanonkriterium versagt es. Martin Luther, vom selben Geist erfüllt, nannte den Jakobusbrief „eine rechte stroherne Epistel" und stellte Hebräer, Jakobus, Judas und Offenbarung ans Ende seines Neuen Testaments. Wenn das innere Empfinden über den Kanon entscheidet, hat jeder Leser seinen eigenen. Die Väter, die den Geist ebenso hatten, zitierten Tobit, Weisheit und Sirach als Schrift.`,
      detail: `Calvin entwickelt das *testimonium Spiritus Sancti internum* in der *Institutio* I,7: Die Schrift brauche keine Bestätigung durch die Kirche, sie bezeuge sich selbst. Für die Gewissheit des einzelnen Gläubigen ist das ein schöner Gedanke, den auch orthodoxe Christen kennen: Der Geist öffnet das Herz für das Wort (Lk 24,45).

Als **Abgrenzungskriterium** für 66 statt 73 Bücher taugt es aber nicht:
- Luther und Calvin kamen mit demselben „Zeugnis" zu verschiedenen Urteilen über Jakobus und die Offenbarung.
- Viele Christen „schmecken" im Buch Ester (in dem Gott nie genannt wird) oder in den Geschlechtsregistern der Chronik keine besondere Majestät – und doch gehören sie zum Kanon.
- Polykarp (um 110) zitiert Tobit, Clemens von Rom (um 96) erzählt Judit nach, Cyprian zitiert Weisheit und Sirach als Schrift: Auch sie hatten den Geist.

Der Kanon ist darum eine Gabe, die die Kirche **empfangen und bezeugt** hat – nicht ein Ergebnis individueller Geschmacksproben.`,
      voices: [
        {
          person: 'cyprian',
          role: 'als Bischof von Karthago und Zeuge der afrikanischen Kirche im 3. Jahrhundert',
          text: `Cyprian führt in seinen Schriften Weisheit, Sirach und Tobit wie selbstverständlich neben den Propheten als göttliche Schrift an – etwa in seiner Schrift über Werke und Almosen. Das zeigt, was die Kirche lange vor jeder Konzilsentscheidung im Gottesdienst las und als Gottes Wort empfing.`,
          sources: [
            { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über Werke und Almosen (De opere et eleemosynis)', ref: '5', year: 'um 253', quote: `Cyprian führt Tob 12,8–9 („Almosen errettet vom Tod") als Wort der göttlichen Schrift an.`, status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'gegner', author: 'Johannes Calvin', work: 'Institutio Christianae Religionis', ref: 'I,7,2–5', year: '1559', quote: `Die Schrift trägt ihre Glaubwürdigkeit in sich selbst; ihre Gewissheit gründet nicht im Urteil der Kirche, sondern im inneren Zeugnis des Heiligen Geistes.`, status: 'paraphrase' },
        { kind: 'gegner', author: 'Martin Luther', work: 'Vorrede auf das Neue Testament', year: '1522', quote: `… darum ist Sankt Jakobs Epistel eine rechte stroherne Epistel gegen sie, denn sie doch keine evangelische Art an ihr hat.`, status: 'verbatim', note: 'In späteren Ausgaben ließ Luther diesen Satz weg; an seiner Abwertung des Jakobusbriefs (Vorrede auf die Episteln Jakobi und Judä) hielt er fest.' },
      ],
      questionsBack: [
        `Wenn der Geist jedem Leser den Kanon bezeugt – warum kamen Luther und Calvin beim Jakobusbrief zu verschiedenen Urteilen?`,
        `Welche „Majestät" schmeckst du im Buch Ester, die du in der Weisheit Salomos nicht schmeckst?`,
      ],
      followUps: [
        {
          id: 'kruger-drei-merkmale',
          objection: `„Das ist eine Karikatur des reformierten Modells. Ein selbstbeglaubigender Kanon zeigt sich an drei Merkmalen: göttliche Qualitäten, apostolisch-prophetischer Ursprung und die Rezeption durch die Gemeinde als Ganzes. Die Apokryphen haben keinen prophetischen Ursprung – das gaben selbst jüdische Quellen zu."`,
          objectionBy: 'Michael Kruger',
          answer: `Das dritte Merkmal nehme ich gern auf: **Rezeption durch die Gemeinde als Ganzes.** Welche Gemeinde hat das AT gelesen? Die Kirche des 4. und 5. Jahrhunderts – Hippo 393, Karthago 397 –, die koptische, äthiopische, syrische, armenische und griechische Kirche: Alle lesen diese Bücher als Schrift, bis heute. Und „prophetischer Ursprung" ist auch bei Ester oder Chronik nicht durch einen namentlichen Propheten belegt. Konsequent angewandt spricht dein eigenes Modell eher für den weiteren Kanon.`,
          detail: `Michael Kruger (*Canon Revisited*, 2012) hat das reformierte Kanonverständnis differenziert verteidigt: Der Kanon sei nicht von der Kirche geschaffen, sondern von ihr *erkannt*; dabei wirkten göttliche Eigenschaften, apostolische Herkunft und gemeinsame Rezeption zusammen. Das ist ein ernstzunehmendes Modell – und es kommt der orthodoxen Sicht näher, als viele denken, denn auch wir sagen: Die Kirche *erkennt* den Kanon, sie erfindet ihn nicht.

Der Streitpunkt ist, **wessen Rezeption** zählt. Für das AT verweisen Protestanten auf die Synagoge nach der Tempelzerstörung; die Orthodoxie auf die Kirche Christi, die von Anfang an mit der griechischen Bibel lebte. Die Synode von Karthago (397) zählt in ihrem Kanonverzeichnis Tobit, Judit, zwei Makkabäerbücher und „fünf Bücher Salomos" (einschließlich Weisheit und Sirach) auf – und in derselben Liste die 27 Bücher des Neuen Testaments.`,
          voices: [
            {
              person: 'athanasius',
              role: 'als Zeuge der kirchlichen Lesepraxis',
              text: `Selbst Athanasius, der in seinem 39. Osterfestbrief die Weisheit, Sirach, Tobit und Judit nicht in die Kanonliste aufnahm, ordnete sie ausdrücklich als von den Vätern bestimmte Bücher ein, die den Neugetauften zur Unterweisung vorgelesen werden sollen – im Unterschied zu den häretischen „Apokryphen", die er scharf verwirft. Die Kirche hat diese Bücher also nie wie fremde Literatur behandelt.`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Andere Bücher, nicht kanonisiert, aber von den Vätern bestimmt, um denen vorgelesen zu werden, die neu hinzukommen und im Wort der Frömmigkeit unterwiesen werden wollen.`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'gegner', author: 'Michael J. Kruger', work: 'Canon Revisited: Establishing the Origins and Authority of the New Testament Books', year: '2012', quote: `Der Kanon ist selbstbeglaubigend; erkannt wird er an göttlichen Qualitäten, apostolischem Ursprung und der gemeinsamen Rezeption durch die Kirche.`, status: 'paraphrase', note: 'Krugers Modell bezieht sich vor allem auf das NT.' },
            { kind: 'konzil', author: 'Synode von Karthago', work: 'Kanonverzeichnis (Kanon 47 bzw. 36 je nach Zählung)', year: '397', quote: `Aufzählung der kanonischen Schriften, darunter Tobit, Judit, zwei Bücher der Makkabäer und fünf Bücher Salomos, sowie die 27 Bücher des Neuen Testaments.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'karthago-regional',
              objection: `„Karthago war eine afrikanische Regionalsynode unter Augustins Einfluss. Hieronymus, der beste Hebraist seiner Zeit, sah es anders. Rezeption heißt nicht: eine Provinzsynode stimmt ab."`,
              objectionBy: 'James White',
              answer: `Einverstanden, Karthago ist regional – aber dann sei konsequent: Dieselbe Liste bezeugt auch deine 27 NT-Bücher. Du kannst ihr NT nicht als Zeugnis der Rezeption nehmen und ihr AT als Provinzentscheidung abtun. Und Hieronymus? Er übersetzte Tobit und Judit dennoch und schrieb später (zu den Zusätzen im Buch Daniel), er habe in seiner Vorrede nur wiedergegeben, was die Juden gegen uns einwenden – nicht sein eigenes Urteil. Die Kirche folgte am Ende nicht seinem hebräischen Vorbehalt, sondern ihrer Lesepraxis.`,
              detail: `Wichtig ist hier die Ehrlichkeit nach beiden Seiten: Hieronymus hat tatsächlich die *hebraica veritas* bevorzugt und die zusätzlichen Bücher in seinen Vorreden abgewertet; das darfst du zugeben. In seiner Verteidigung gegen Rufinus (*Apologia adversus Rufinum* II,33) betont er jedoch, er habe dort die Auffassung der Juden referiert. Augustinus (*De doctrina christiana* II,8,13) zählt die Bücher dagegen klar zum Kanon und begründet das mit dem Gebrauch der Kirchen.

Für die koptische Kirche ist entscheidend: Die alexandrinische Kirche lebte von Anfang an mit der Septuaginta, die in Alexandria entstanden war. Ihre Gottesdienste, Väter und Übersetzungen ins Koptische umfassen diese Bücher.`,
              sources: [
                { kind: 'kirchenvater', author: 'Hieronymus', work: 'Apologie gegen Rufinus (Apologia adversus Rufinum)', ref: 'II,33', year: 'um 402', quote: `Hieronymus erklärt mit Blick auf die Zusätze zu Daniel (Susanna, Bel und der Drache), er habe in seiner Vorrede nicht seine eigene Meinung, sondern die Einwände der Juden wiedergegeben.`, status: 'paraphrase', note: 'Die Stelle betrifft unmittelbar die Daniel-Zusätze; nicht überdehnen.' },
                { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über die christliche Lehre (De doctrina christiana)', ref: 'II,8,13', year: 'um 397', quote: `Aufzählung der kanonischen Bücher einschließlich Tobit, Judit, der Makkabäer, Weisheit und Sirach, gestützt auf das Urteil der meisten Kirchen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Auf welche Liste der Alten Kirche stützt du deinen NT-Kanon – und warum gilt dieselbe Liste für das AT nicht?`,
              ],
              followUps: [
                {
                  id: 'patt-zweitrangig',
                  objection: `„Dann steht es eben unentschieden: Väter auf beiden Seiten. Lass uns das Thema als zweitrangig behandeln – es berührt nicht das Evangelium."`,
                  objectionBy: 'Gavin Ortlund',
                  answer: `Einverstanden, dass der Kanonrand nicht über dein Heil entscheidet – darüber sollten wir uns nicht entzweien. Aber bemerke, was das „Unentschieden" bedeutet: Sola Scriptura kann nicht einmal den Umfang der eigenen Schrift aus der Schrift bestimmen. Jede Antwort – deine wie meine – beruft sich auf die Rezeption einer Gemeinschaft. Dann ist die eigentliche Frage nicht „Bibel oder Tradition?", sondern: **Welcher Gemeinschaft vertraust du die Bibel an** – der alten apostolischen Kirche oder den Reformatoren des 16. Jahrhunderts?`,
                  detail: `Gavin Ortlund plädiert für theologische Triage: Erstrangige, zweitrangige und drittrangige Lehren sollten unterschieden werden. Das ist ein guter, brüderlicher Ansatz – auch die Orthodoxie unterscheidet zwischen Dogma und theologischer Meinung. Beim Kanon gibt es zudem echte innerorthodoxe Unterschiede am Rand (etwa beim 3. Makkabäerbuch oder beim äthiopischen Henoch).

Doch die Triage hat eine Kehrseite: Wer zugibt, dass die Grenze nur durch kirchliche Rezeption erkennbar ist, hat das Grundprinzip der Orthodoxie bereits anerkannt. Die koptische Kirche liest die deuterokanonischen Bücher in ihren Gottesdiensten und hat sie nie aus ihrer Bibel getilgt – sie folgt damit der Kirche, die das Neue Testament geschrieben, gesammelt und überliefert hat.`,
                  sources: [
                    { kind: 'gegner', author: 'Gavin Ortlund', work: 'Finding the Right Hills to Die On: The Case for Theological Triage', year: '2020', quote: `Plädoyer dafür, Lehren nach ihrer Bedeutung für das Evangelium zu gewichten und nicht jeden Streitpunkt zur Trennungsfrage zu machen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn die Kanongrenze nur durch die Rezeption der Kirche erkennbar ist – warum nicht auch die Auslegung der Taufe oder der Eucharistie?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Nach welchem Kriterium bestimmst du den AT-Kanon – und lässt dieses Kriterium Ester und das Hohelied drin?`,
    `Warum soll das Urteil der rabbinischen Synagoge des 2. Jahrhunderts über den Kanon der Kirche Christi entscheiden?`,
    `Wusstest du, dass Luther diese Bücher in seiner Bibel abdruckte und die King-James-Bibel von 1611 sie enthielt?`,
    `Wenn Hebr 11,35 die makkabäischen Märtyrer als Glaubensvorbilder nennt – wo findest du ihre Geschichte in deiner Bibel?`,
  ],
  avoid: [
    `„Das Konzil von Jamnia hat …" – auch für die eigene Seite nicht benutzen; die Forschung hat das Bild vom kanonschließenden Konzil aufgegeben.`,
    `Behaupten, Athanasius habe die Deuterokanonen voll im Kanon gehabt. Er nennt sie „lesenswert", nicht kanonisch – ehrlich bleiben.`,
    `Genaue Prozentzahlen über NT-Zitate nach der Septuaginta nennen, wenn du die Quelle nicht kennst. Sag „die Mehrheit" und bring ein Beispiel (Hebr 10,5).`,
    `1 Henoch als Beweis für einen „weiten Kanon" anführen. Das Buch gehört zum äthiopischen, nicht zum koptischen Kanon.`,
  ],
  concessions: [
    `Athanasius zählte Weisheit, Sirach, Ester, Judit und Tobit zu den „lesenswerten" Büchern außerhalb des Kanons; Hieronymus nannte sie Apokryphen. Über den Rand des AT-Kanons wurde in der Alten Kirche wirklich beraten.`,
    `Das NT zitiert die Deuterokanonen nicht mit „es steht geschrieben" – es gibt Anspielungen, keine formellen Zitate.`,
    `Das Buch Judit ist als Geschichtsschreibung schwierig; man sollte es als lehrhafte Erzählung lesen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'An Introduction to the Apocrypha', year: '1957', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edmon L. Gallagher / John D. Meade', work: 'The Biblical Canon Lists from Early Christianity', year: '2017', status: 'paraphrase', note: 'Alle altkirchlichen Kanonlisten im Original mit Übersetzung – auch für unbequeme Befunde.' },
    { kind: 'gegner', author: 'Wayne Grudem', work: 'Systematic Theology', year: '1994', ref: 'Kap. 3', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kanon', 'Deuterokanonen', 'Apokryphen', 'Septuaginta', 'Athanasius'],
  related: [
    'sola-scriptura/nur-die-bibel',
    'heilige-ikonen/gebet-fuer-verstorbene',
    'sola-fide/werke-sind-werkgerechtigkeit',
    'neues-testament/kanon-von-konstantin',
  ],
};

export default claim;
