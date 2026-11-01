import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'paulus-erfand-christentum',
  title: `„Paulus hat das Christentum erfunden – Jesus wollte keine neue Religion."`,
  proponents: [
    { name: 'Gerd Lüdemann', role: 'Neutestamentler, Göttingen', work: 'Paul: The Founder of Christianity (2002)' },
    { name: 'William Wrede', role: 'Neutestamentler, Breslau', work: 'Paulus (1904)' },
    { name: 'Friedrich Nietzsche', role: 'Philosoph', work: 'Der Antichrist (verfasst 1888, veröffentlicht 1895), § 42' },
    { name: 'Hyam Maccoby', role: 'Jüdischer Gelehrter, Leo Baeck College', work: 'The Mythmaker: Paul and the Invention of Christianity (1986)' },
    { name: 'Shabir Ally', role: 'Muslimischer Apologet', work: 'Debatten über Jesus und Paulus' },
  ],
  steelman: `Jesus war ein frommer Jude, der das Reich Gottes, die Umkehr und die Treue zur Tora predigte. Paulus hat ihn nie gekannt; er beruft sich auf Visionen und betont, sein Evangelium von keinem Menschen empfangen zu haben (Gal 1,11–12). Aus dem galiläischen Propheten machte er einen präexistenten Gottessohn, aus der Umkehrpredigt eine Erlösungslehre vom stellvertretenden Tod, aus dem Gesetz einen Fluch. Er geriet mit Petrus öffentlich in Streit (Gal 2,11–14), die Leute des Jakobus misstrauten ihm, und die Ebioniten – Erben der Jerusalemer Urgemeinde – verwarfen ihn als Abtrünnigen vom Gesetz. Seine Briefe zitieren Jesus kaum. William Wrede nannte ihn den „zweiten Stifter des Christentums", Nietzsche sah in ihm den Gegentypus zum „frohen Botschafter". Das Christentum, wie wir es kennen, ist paulinisch – nicht jesuanisch. – So etwa Gerd Lüdemann und, aus muslimischer Sicht, Shabir Ally.`,
  biblical: {
    summary: `Paulus beansprucht nicht, eine neue Lehre erfunden zu haben, sondern weiterzugeben, was er **empfangen** hat (1 Kor 11,23; 15,3). Er reiste zu Petrus, um ihn zu befragen (Gal 1,18), legte sein Evangelium den Jerusalemer „Säulen" vor und erhielt von Jakobus, Kephas und Johannes „die rechte Hand der Gemeinschaft" (Gal 2,9). Er betont: „Es sei nun ich oder jene: also predigen wir" (1 Kor 15,11). Und er verfolgte die Gemeinde gerade wegen dessen, was sie **vor** ihm über Jesus glaubte – später predigte er „den Glauben, den er einst zerstören wollte" (Gal 1,23).`,
    detail: `**Paulus und die Jesusüberlieferung (vgl. Wenham):**
- Scheidung: „nicht ich, sondern der Herr" (1 Kor 7,10; vgl. Mk 10,9–12) – und er unterscheidet genau davon seinen eigenen Rat („sage ich, nicht der Herr", 1 Kor 7,12).
- Unterhalt der Verkündiger (1 Kor 9,14; vgl. Lk 10,7).
- Abendmahl (1 Kor 11,23–25; vgl. Lk 22,19–20).
- „Segnet, die euch verfolgen" (Röm 12,14; vgl. Lk 6,28; Mt 5,44).
- Liebe als Erfüllung des Gesetzes (Röm 13,8–10; vgl. Mk 12,31).
- Nichts ist an sich unrein (Röm 14,14 „ich weiß und bin gewiß in dem HERRN Jesus"; vgl. Mk 7,15).
- Der Tag des Herrn kommt „wie ein Dieb in der Nacht" (1 Thess 5,2; vgl. Mt 24,43).
- Gebetsruf „Abba" (Gal 4,6; Röm 8,15; vgl. Mk 14,36).

**Gal 1,11–12** bezieht sich auf Paulus' Berufung und die Erkenntnis des gekreuzigten Messias als Herrn – nicht darauf, dass er von Jesu Leben und Lehre nichts gewusst hätte; im selben Brief berichtet er von seinem Besuch bei Petrus.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '11,23', quote: `Ich habe es von dem HERRN empfangen, das ich euch gegeben habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,23', quote: `Sie hatten aber allein gehört, daß, der uns weiland verfolgte, der predigt jetzt den Glauben, welchen er weiland verstörte,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,10.12', quote: `Den Ehelichen aber gebiete nicht ich, sondern der HERR, daß das Weib sich nicht scheide von dem Manne. … Den andern aber sage ich, nicht der HERR …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '12,14', quote: `Segnet, die euch verfolgen; segnet, und fluchet nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '2,9', quote: `… Jakobus und Kephas und Johannes, die für Säulen angesehen waren, gaben mir und Barnabas die rechte Hand und wurden mit uns eins …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche verehrt Petrus und Paulus gemeinsam; ihr Fest (5. Abib, 12. Juli) wird nach dem Apostelfasten gefeiert. Die Kirche liest Paulus nie gegen die Evangelien, sondern in Einheit mit ihnen: In jeder Liturgie folgen auf die Paulus-Lesung (Pauline), die Lesung aus den katholischen Briefen und der Apostelgeschichte das Evangelium – ein sichtbares Bekenntnis, dass alle aus derselben Quelle sprechen. Gerade gegen eine einseitige Lesart, die Paulus gegen Jakobus ausspielt, betont die orthodoxe Tradition den „Glauben, der durch die Liebe tätig ist" (Gal 5,6).`,
    detail: `Vater Tadros Malaty hebt in seinem patristischen Kommentar zu den Paulusbriefen hervor, dass Paulus seine Apostolizität nicht gegen, sondern in Gemeinschaft mit den Zwölf versteht: Seine Berufung kommt unmittelbar von Christus, sein Evangelium wird von der Kirche in Jerusalem anerkannt. Die Väter – Johannes Chrysostomus vor allem, der Paulus in zahlreichen Homilien auslegte – sahen in ihm den treuesten Ausleger Christi, nicht seinen Umdeuter.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Liturgie – Lesungsordnung', quote: `In der Eucharistiefeier werden nacheinander Pauline, Katholikon (katholische Briefe), Praxis (Apostelgeschichte) und Evangelium gelesen.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zum Galaterbrief', quote: `Paulus versteht sein Apostelamt als unmittelbar von Christus empfangen und zugleich in Gemeinschaft mit den Säulen der Kirche bestätigt.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Galater', ref: '5,6', quote: `Denn in Christo Jesu gilt weder Beschneidung noch Vorhaut etwas, sondern der Glaube, der durch die Liebe tätig ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die These vom „Erfinder Paulus" war um 1900 einflussreich (Wrede), wird heute aber in der Fachwelt kaum noch in dieser Form vertreten. Die neuere Forschung betont die **Kontinuität**: Martin Hengel und Larry Hurtado zeigten, dass die hohe Christologie vorpaulinisch ist; die „Neue Paulusperspektive" (E. P. Sanders, J. D. G. Dunn, N. T. Wright) liest Paulus konsequent als jüdischen Denker. Unbestritten ist, dass Paulus der einflussreichste Theologe der frühen Kirche war, dass er eigene Akzente setzte (Heidenmission ohne Beschneidung) und dass es Konflikte gab (Gal 2,11–14).`,
    detail: `**Ehrliche Punkte der Gegenseite:**
- Paulus zitiert Jesusworte vergleichsweise selten ausdrücklich.
- Es gab ernste Spannungen mit judenchristlichen Gruppen; der Antiochia-Konflikt war real.
- Im 2. Jahrhundert lehnten die Ebioniten Paulus als Abtrünnigen vom Gesetz ab (Irenäus, Adv. Haer. I,26,2).

**Aber:** Die zeitgenössischen Quellen – Paulus' eigene Briefe – zeigen eine grundsätzliche Einigung mit Petrus, Jakobus und Johannes; die Ebioniten sind erst Jahrzehnte später bezeugt und ihre Verbindung zur Jerusalemer Urgemeinde ist eine Hypothese.`,
    sources: [
      { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Paul: The Founder of Christianity', year: '2002', quote: `Lüdemann sieht in Paulus den eigentlichen Begründer des Christentums, der sich von der Botschaft Jesu und der Jerusalemer Gemeinde wesentlich entfernte.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'William Wrede', work: 'Paulus', year: '1904', quote: `Wrede bezeichnet Paulus als den „zweiten Stifter des Christentums".`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Der Antichrist', ref: '§ 42', year: '1888/1895', quote: `In Paulus verkörpere sich der Gegensatz-Typus zum „frohen Botschafter", das „Genie im Hass".`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'David Wenham', work: 'Paul: Follower of Jesus or Founder of Christianity?', year: '1995', quote: `Wenham weist zahlreiche Anspielungen auf Jesusüberlieferung in den Paulusbriefen nach und folgert, dass Paulus Jesus nachfolgte, nicht ihn ersetzte.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,26,2', year: 'ca. 180', quote: `Die Ebioniten benutzen nur das Matthäusevangelium, verwerfen den Apostel Paulus und nennen ihn einen Abtrünnigen vom Gesetz.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Paulus sagt selbst, dass er weitergibt, was er empfangen hat (1 Kor 15,3). Er befragte Petrus fünfzehn Tage lang in Jerusalem, legte sein Evangelium den Aposteln Jakobus, Petrus und Johannes vor, und sie gaben ihm die Hand der Gemeinschaft (Gal 1–2). Vor allem: Paulus verfolgte die Christen **wegen** ihres Glaubens an Jesus – dieser Glaube existierte also schon vor ihm. Und seine Ethik ist voller Anklänge an Jesu Worte: „Segnet, die euch verfolgen", „Liebe ist des Gesetzes Erfüllung", das Abendmahl, das Scheidungsverbot.`,
  keyPoints: [
    `**Der Glaube war vor Paulus da:** Er verfolgte die Gemeinde wegen ihres Bekenntnisses zu Jesus (Gal 1,13.23; Phil 3,6).`,
    `**Überprüft und anerkannt:** Besuch bei Petrus (Gal 1,18), Prüfung durch die „Säulen" (Gal 2,1–10), gemeinsame Verkündigung (1 Kor 15,11).`,
    `**Vorpaulinische Christologie:** Maranatha, Phil 2,6–11, 1 Kor 15,3–5 – Paulus übernahm die hohe Christologie, er erfand sie nicht.`,
    `**Jesus in Paulus' Ethik:** Röm 12–14 klingt an die Bergpredigt an; ausdrückliche Herrenworte in 1 Kor 7,10; 9,14; 11,23–25.`,
    `**Konflikt ≠ Bruch:** Der Streit in Antiochia betraf Petrus' Verhalten, nicht die Lehre – Paulus wirft ihm vor, gegen die eigene Überzeugung zu handeln (Gal 2,13).`,
    `**Jesus selbst** sprach von seinem Tod als Lösegeld (Mk 10,45), vom Bundesblut (Mk 14,24) und von Heiden im Reich Gottes (Mt 8,11) – die Wurzeln der paulinischen Theologie liegen bei ihm.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel und Überlieferer',
      text: `Paulus legt großen Wert darauf, dass seine Berufung von Christus selbst kommt – und zugleich darauf, dass sein Evangelium mit dem der Jerusalemer Apostel übereinstimmt. Er ging zu ihnen „auf daß ich nicht vergeblich liefe" (Gal 2,2), sammelte jahrelang eine große Kollekte für die arme Gemeinde in Jerusalem als Zeichen der Einheit (Röm 15,25–27; 2 Kor 8–9) und warnt die Korinther vor Parteiungen „ich bin des Paulus, ich bin des Kephas" (1 Kor 1,12–13). Ein Religionsgründer, der sich von seinen Vorgängern absetzen will, schreibt anders.`,
      sources: [{ kind: 'bibel', work: 'Römer', ref: '15,26–27', quote: `Denn die aus Mazedonien und Achaja haben williglich eine gemeine Steuer zusammengelegt für die armen Heiligen zu Jerusalem. … Denn so die Heiden sind ihrer geistlichen Güter teilhaftig geworden, ist's billig, daß sie ihnen auch in leiblichen Gütern Dienst beweisen.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' }],
    },
    {
      person: 'david-wenham',
      role: 'als Neutestamentler',
      text: `Wenham hat systematisch untersucht, wie viel Jesusüberlieferung in den Paulusbriefen steckt – ausdrückliche Zitate und vor allem Anspielungen. Er findet Bezüge zu Jesu Lehre über das Reich Gottes, die Liebe, das Gesetz, die Endzeit, das Abendmahl und den Kreuzestod. Sein Ergebnis: Paulus kannte die Jesusüberlieferung gut und setzte sie bei seinen Lesern voraus; er war Nachfolger Jesu, nicht Gründer einer neuen Religion.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wenham', work: 'Paul: Follower of Jesus or Founder of Christianity?', year: '1995', status: 'paraphrase', quote: `Nachweis von Jesusüberlieferung in den Paulusbriefen.` }],
    },
    {
      person: 'nt-wright',
      role: 'als Paulusforscher',
      text: `Wright widerspricht der Vorstellung, Paulus habe eine hellenistische Mysterienreligion aus einem jüdischen Propheten gemacht. Paulus denkt durch und durch jüdisch: Er liest die Geschichte Israels, den Bund mit Abraham und die Verheißungen der Propheten im Licht des gekreuzigten und auferstandenen Messias. Was Jesus über das Reich Gottes ankündigte, verkündet Paulus als in Jesu Tod und Auferstehung angebrochen. Der Unterschied liegt nicht im Inhalt, sondern im Standpunkt: Jesus sprach vor Ostern, Paulus nach Ostern.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'What Saint Paul Really Said: Was Paul of Tarsus the Real Founder of Christianity?', year: '1997', status: 'paraphrase', quote: `Paulus als jüdischer Ausleger des Evangeliums Jesu, nicht als Gründer einer neuen Religion.` }],
    },
    {
      person: 'martin-hengel',
      role: 'als Historiker der Zeit „zwischen Jesus und Paulus"',
      text: `Hengel untersuchte die Jahre zwischen Jesu Tod und den Paulusbriefen und zeigte, dass entscheidende christologische Entwicklungen – Verehrung Jesu als Herr, Deutung seines Todes als Sühne, Mission auch unter Griechisch sprechenden – bereits in der Jerusalemer und antiochenischen Gemeinde vor Paulus stattfanden. Paulus steht in einem Strom, den er nicht erzeugt, sondern vertieft und ausgebreitet hat.`,
      sources: [{ kind: 'fachliteratur', author: 'Martin Hengel', work: 'Between Jesus and Paul: Studies in the Earliest History of Christianity', year: '1983', status: 'paraphrase', quote: `Die entscheidenden christologischen Entwicklungen liegen vor Paulus.` }],
    },
  ],
  dialog: [
    {
      id: 'paulus-anderes-evangelium',
      objection: `Paulus kannte Jesus nie. Er beruft sich auf Visionen und betont, er habe sein Evangelium „von keinem Menschen empfangen" (Gal 1,12). Jesus predigte das Reich Gottes und die Tora – Paulus predigte einen gekreuzigten Gottessohn und Gnade ohne Gesetz. Das sind zwei verschiedene Religionen.`,
      objectionBy: 'Gerd Lüdemann / Hyam Maccoby',
      answer: `Paulus verfolgte die Christen, **bevor** er Christ wurde – und zwar wegen ihres Glaubens an Jesus. Die Gemeinden in Judäa sagten später über ihn: „Der uns einst verfolgte, predigt jetzt den Glauben, den er einst zerstören wollte" (Gal 1,23). Der Glaube an den gekreuzigten und auferstandenen Herrn existierte also schon. Gal 1,12 meint Paulus' Berufung; im selben Kapitel berichtet er, dass er Petrus befragte und Jakobus traf, und im nächsten, dass die Jerusalemer Apostel sein Evangelium anerkannten.`,
      questionsBack: [
        `Was genau glaubten die Christen, die Paulus verfolgte – und warum verfolgte er sie dafür?`,
        `Warum hätten Petrus, Jakobus und Johannes Paulus die Hand der Gemeinschaft gegeben, wenn er eine andere Religion predigte?`,
      ],
      followUps: [
        {
          id: 'streit-mit-petrus',
          objection: `Gal 2,11–14 zeigt den offenen Bruch: Paulus widerstand Petrus „ins Angesicht", die Leute des Jakobus waren gegen ihn. Die Jerusalemer Urgemeinde und Paulus waren Gegner.`,
          objectionBy: 'Gerd Lüdemann / James Tabor',
          answer: `Lies genau, worum es ging: Petrus hatte mit Heidenchristen gegessen und zog sich aus Furcht vor einer Gruppe zurück. Paulus wirft ihm „Heuchelei" vor (2,13) – also, gegen seine **eigene** Überzeugung zu handeln. Das setzt voraus, dass Petrus und Paulus in der Sache einig waren. Kurz zuvor hatten Jakobus, Kephas und Johannes Paulus die rechte Hand gegeben (2,9). Danach sammelt Paulus jahrelang eine Kollekte für Jerusalem und nennt Petrus respektvoll unter den Aposteln (1 Kor 9,5; 15,5). Ein Konflikt über Tischgemeinschaft ist kein Bruch zwischen zwei Religionen.`,
          sources: [
            { kind: 'bibel', work: 'Galater', ref: '2,11–13', quote: `Da aber Petrus gen Antiochien kam, widerstand ich ihm unter Augen; denn es war Klage über ihn gekommen. … Und mit ihm heuchelten die andern Juden …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'ebioniten',
              objection: `Die Ebioniten – die wahren Erben der Jerusalemer Urgemeinde unter Jakobus – haben Paulus als Abtrünnigen verworfen. Sie bewahrten das ursprüngliche, jüdische Christentum, das Paulus verdrängte.`,
              objectionBy: 'James Tabor / Hyam Maccoby',
              answer: `Die Ebioniten sind erst bei Irenäus um 180 bezeugt, über hundert Jahre nach Paulus. Dass sie die Jerusalemer Urgemeinde fortsetzten, ist eine Hypothese, kein Befund. Die zeitgenössische Quelle – Paulus' eigener Galaterbrief – zeigt, dass gerade Jakobus, der Leiter der Urgemeinde, ihn anerkannte. Zudem lehnten die Ebioniten nach Irenäus auch die Jungfrauengeburt ab und benutzten nur ein Evangelium – sie sind eine spätere Sondergruppe, kein Maßstab für das Urchristentum.`,
              questionsBack: [
                `Warum sollte eine Gruppe des späten 2. Jahrhunderts mehr über das Verhältnis von Jakobus und Paulus wissen als Paulus' eigener Brief aus den 50er Jahren?`,
              ],
            },
          ],
        },
        {
          id: 'nietzsche-wrede',
          objection: `William Wrede nannte Paulus den „zweiten Stifter des Christentums", und Nietzsche schrieb, in Paulus verkörpere sich der Gegentypus zum „frohen Botschafter". Jesus brachte eine schlichte Botschaft der Liebe – Paulus machte daraus Sünde, Schuld, Blut und Gericht.`,
          objectionBy: 'William Wrede / Friedrich Nietzsche',
          answer: `Wredes Bild beruht auf dem liberalen „Jesus der reinen Moral" des 19. Jahrhunderts – genau dem Bild, das Albert Schweitzer kurz darauf als Projektion entlarvte. Der Jesus der Evangelien spricht selbst von Sünde, Gericht, seinem Tod als „Lösegeld für viele" (Mk 10,45) und vom „Blut des Bundes" (Mk 14,24). Und Paulus' Ethik ist voller Jesus: „Segnet, die euch verfolgen" (Röm 12,14), „Liebe ist des Gesetzes Erfüllung" (Röm 13,10), „nichts ist an sich unrein" (Röm 14,14). Der Gegensatz Liebe – Sühne ist modern, nicht biblisch.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '10,45', quote: `Denn auch des Menschen Sohn ist nicht gekommen, daß er sich dienen lasse, sondern daß er diene und gebe sein Leben zur Bezahlung für viele.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Römer', ref: '13,10', quote: `Die Liebe tut dem Nächsten nichts Böses. So ist nun die Liebe des Gesetzes Erfüllung.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'paulus-zitiert-jesus-kaum',
      objection: `Wenn Paulus die Lehre Jesu kannte, warum zitiert er ihn dann so selten? Keine Gleichnisse, keine Bergpredigt, kaum ein Wort aus Jesu Mund. Er interessiert sich nur für seinen eigenen himmlischen Christus.`,
      objectionBy: 'Gerd Lüdemann / Robert M. Price',
      answer: `Paulus' Briefe sind Antworten auf konkrete Gemeindeprobleme, keine Lehrbücher – er setzt voraus, dass die Gemeinden die Jesusüberlieferung bereits mündlich empfangen haben („Haltet an den Überlieferungen", 1 Kor 11,2; 2 Thess 2,15). Wo es nötig ist, zitiert er Jesus ausdrücklich (1 Kor 7,10; 9,14; 11,23–25), und noch häufiger spielt er auf seine Worte an. Wer einem Freund schreibt, zitiert auch nicht die Grundlagen, die beide längst kennen.`,
      followUps: [
        {
          id: 'nicht-der-herr',
          objection: `In 1 Kor 7,12 schreibt Paulus sogar: „sage ich, nicht der Herr". Er stellt seine eigene Autorität neben die von Jesus – genau so entsteht eine neue Religion.`,
          objectionBy: 'Shabir Ally',
          answer: `Das Gegenteil: Paulus unterscheidet sorgfältig zwischen einem überlieferten Herrenwort (7,10: „nicht ich, sondern der Herr") und seinem eigenen apostolischen Rat für eine Situation, zu der Jesus nichts gesagt hatte (Ehen mit Ungläubigen). Wer Jesusworte erfinden wollte, hätte einfach eines erfunden. Diese Unterscheidung zeigt, wie ehrfürchtig Paulus die Jesusüberlieferung behandelte – er fügte ihr nichts hinzu.`,
        },
      ],
    },
    {
      id: 'muslimisch-paulus',
      objection: `Jesus predigte den reinen Monotheismus und befolgte das Gesetz – „Ich bin nicht gekommen, das Gesetz aufzulösen" (Mt 5,17). Paulus hat ihn zum Gott gemacht und das Gesetz abgeschafft. Er hat die Lehre Jesu verfälscht.`,
      objectionBy: 'Shabir Ally',
      answer: `Die hohe Christologie ist älter als Paulus: Der aramäische Gebetsruf „Maranatha" stammt aus der Urgemeinde, und der Hymnus in Phil 2,6–11 war vermutlich schon vor Paulus in Gebrauch. Paulus verfolgte die Christen ja gerade, weil sie Jesus so verehrten. Zum Gesetz: Paulus nennt es „heilig, gerecht und gut" (Röm 7,12) und sagt, der Glaube richte das Gesetz auf (Röm 3,31); und schon Jesus erklärte nach Markus alle Speisen für rein (Mk 7,15.19). Mt 5,17 sagt „erfüllen" – genau das verkündet auch Paulus: Christus ist des Gesetzes Ziel (Röm 10,4).`,
      detail: `Siehe auch den Claim „Paulus hat die Lehre Jesu verfälscht" (Islam) und „Die Gottheit Jesu wurde erst später erfunden".`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '7,12', quote: `Das Gesetz ist ja heilig, und das Gebot ist heilig, recht und gut.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Römer', ref: '3,31', quote: `Wie? heben wir denn das Gesetz auf durch den Glauben? Das sei ferne! sondern wir richten das Gesetz auf.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'apostelgeschichte-parteiisch',
          objection: `Die Einheit zwischen Paulus und den Aposteln kennst du doch nur aus der Apostelgeschichte – und die ist parteiische Paulus-Propaganda, die alle Konflikte glättet.`,
          objectionBy: 'Gerd Lüdemann / Shabir Ally',
          answer: `Ich kann ganz ohne die Apostelgeschichte argumentieren: Paulus' eigene Briefe – die unbestritten echten – bezeugen den Besuch bei Petrus, die Anerkennung durch Jakobus, Kephas und Johannes und die gemeinsame Verkündigung. Und Lukas glättet keineswegs alles: Er berichtet vom heftigen Streit in Antiochia (Apg 15,2), von der Trennung zwischen Paulus und Barnabas (Apg 15,39) und vom Misstrauen der Jerusalemer Judenchristen gegen Paulus (Apg 21,20–21).`,
          followUps: [
            {
              id: 'jakobus-gegen-paulus',
              objection: `Und was ist mit dem Jakobusbrief? „Der Mensch wird durch Werke gerecht, nicht durch Glauben allein" (Jak 2,24) – das ist das direkte Gegenteil von Paulus: „ohne des Gesetzes Werke, allein durch den Glauben" (Röm 3,28). Zwei Religionen in einer Bibel!`,
              objectionBy: 'Shabir Ally / James Tabor',
              answer: `Paulus und Jakobus beantworten verschiedene Fragen. Paulus wendet sich gegen „Werke des Gesetzes" (Beschneidung, Speisegebote) als Bedingung, um zum Volk Gottes zu gehören; Jakobus wendet sich gegen einen toten Glauben ohne Taten. Beide meinen den „Glauben, der durch die Liebe tätig ist" (Gal 5,6). Übrigens steht das Wort „allein" in Röm 3,28 nicht im griechischen Text – es ist eine Ergänzung Luthers. Die koptisch-orthodoxe Kirche liest Paulus und Jakobus seit jeher in Harmonie: Das Heil ist Gnade, empfangen im Glauben, der in Werken der Liebe lebt.`,
              sources: [
                { kind: 'bibel', work: 'Jakobus', ref: '2,24', quote: `So sehet ihr nun, daß der Mensch durch die Werke gerecht wird, nicht durch den Glauben allein.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Römer', ref: '3,28', quote: `So halten wir nun dafür, daß der Mensch gerecht werde ohne des Gesetzes Werke, allein durch den Glauben.`, original: `λογιζόμεθα γὰρ δικαιοῦσθαι πίστει ἄνθρωπον χωρὶς ἔργων νόμου (ohne „allein")`, translation: 'Luther 1912', status: 'verbatim', note: '„Allein" ist Luthers Zusatz; im Griechischen fehlt es.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum verfolgte Paulus die Christen, wenn es den Glauben an den auferstandenen Herrn vor ihm noch nicht gab?`,
    `Warum gaben Jakobus, Petrus und Johannes Paulus die Hand der Gemeinschaft (Gal 2,9)?`,
    `Wie erklärst du die vielen Anklänge an Jesu Lehre in Röm 12–14?`,
    `Welche zeitgenössische Quelle zeigt einen grundsätzlichen Bruch zwischen Paulus und den Jerusalemer Aposteln?`,
  ],
  avoid: [
    `Behaupten, es habe nie Spannungen zwischen Paulus und anderen Christen gegeben – Gal 2 zeigt das Gegenteil.`,
    `Die Apostelgeschichte als einzigen Beleg verwenden – argumentiere zuerst mit Paulus' eigenen Briefen.`,
    `Paulus gegen Jakobus ausspielen (sola fide) – das widerspricht der orthodoxen Lesart und gibt dem Gegner recht.`,
  ],
  concessions: [
    `Paulus war der einflussreichste Theologe der Urkirche und setzte eigene Akzente, besonders in der Heidenmission.`,
    `Es gab reale Konflikte, etwa in Antiochia (Gal 2,11–14), und im 2. Jahrhundert judenchristliche Gruppen, die Paulus ablehnten.`,
    `Paulus zitiert Jesusworte vergleichsweise selten ausdrücklich.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Wenham', work: 'Paul: Follower of Jesus or Founder of Christianity?', year: '1995', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'What Saint Paul Really Said', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Between Jesus and Paul', year: '1983', status: 'paraphrase' },
    { kind: 'gegner', author: 'Gerd Lüdemann', work: 'Paul: The Founder of Christianity', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Paulus', 'Petrus', 'Jakobus', 'Wrede', 'Nietzsche', 'Ebioniten', 'Jesusüberlieferung'],
  related: [
    'islam-mohammed/paulus-verfaelschte-jesus-islam',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'judentum-messias/tora-ewig-gueltig',
    'neues-testament/stille-post',
    'auferstehung/legende-entwickelte-sich',
  ],
};

export default claim;
