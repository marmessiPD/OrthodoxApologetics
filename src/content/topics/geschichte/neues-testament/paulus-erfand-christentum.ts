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
              followUps: [
                {
                  id: 'pseudoklementinen-simon-magus',
                  objection: `In den Pseudoklementinen wird Paulus als „feindlicher Mensch" bekämpft, und hinter dem Erzschurken Simon Magus, mit dem Petrus streitet, steckt offensichtlich Paulus. Ferdinand Christian Baur hat es schon im 19. Jahrhundert gesehen: Das frühe Christentum war ein Kampf zwischen petrinischer und paulinischer Partei.`,
                  objectionBy: 'Robert Eisenman / F. C. Baur (Tübinger Schule)',
                  answer: `Die Pseudoklementinen sind ein Roman aus dem 3./4. Jahrhundert, in dem eine judenchristliche Sondergruppe ihre Sicht verarbeitet – keine Quelle für die Zeit der Apostel. Baurs Tübinger Modell ist in seiner Grundannahme längst aufgegeben: Er musste die Apostelgeschichte und viele Briefe ins 2. Jahrhundert datieren, damit es passte. Die frühesten Zeugnisse nach Paulus ehren Petrus und Paulus **gemeinsam**: Der 1. Clemensbrief (um 96) stellt beide als Vorbilder der Standhaftigkeit nebeneinander, Ignatius nennt sie in einem Atemzug, und der 2. Petrusbrief spricht von „unserem lieben Bruder Paulus".`,
                  detail: `**Die Pseudoklementinen:** Homilien und Rekognitionen, in ihrer heutigen Form aus dem 4. Jahrhundert, mit älteren Quellenschichten (u. a. der „Brief des Petrus an Jakobus", in dem vor dem „feindlichen Menschen" gewarnt wird). Sie zeigen, dass es später judenchristliche Gruppen mit antipaulinischer Tendenz gab – was niemand bestreitet.

**Baur und die Tübinger Schule (1840er):** Baur deutete die Geschichte des Urchristentums hegelianisch als Gegensatz (Petrinismus – Paulinismus) und Synthese (frühkatholische Kirche). Die Spätdatierungen, die das Modell verlangte, haben sich nicht gehalten; J. B. Lightfoot zeigte mit der Echtheit der Ignatiusbriefe, dass um 110 schon eine geeinte Kirche bestand.

**Die frühen Zeugen:**
- 1 Clem 5,3–7 (Rom, um 96): Petrus und Paulus als „edelste Säulen".
- Ignatius, Römerbrief 4,3 (um 110): „Nicht wie Petrus und Paulus befehle ich euch."
- 2 Petr 3,15–16: Paulus als „lieber Bruder", dessen Briefe neben den „übrigen Schriften" stehen.`,
                  voices: [
                    {
                      person: 'clemens-rom',
                      role: 'als Zeuge der römischen Gemeinde um 96',
                      text: `Clemens schreibt im Namen der römischen Gemeinde, in der Petrus und Paulus gewirkt hatten und gestorben waren. Er stellt beide nebeneinander als die „größten und gerechtesten Säulen", die bis zum Tod kämpften. Von einer Feindschaft zwischen einer Petrus- und einer Paulus-Partei weiß die Gemeinde, die beide persönlich kannte, nichts.`,
                      sources: [{ kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '5,2–7', year: 'ca. 96', status: 'paraphrase', quote: `Petrus und Paulus als Säulen der Kirche und Vorbilder der Standhaftigkeit bis zum Martyrium.` }],
                    },
                  ],
                  sources: [
                    { kind: 'sonstiges', work: 'Pseudoklementinen, Brief des Petrus an Jakobus (Epistula Petri)', ref: '2,3', year: '3./4. Jh. (ältere Schichten umstritten)', quote: `Warnung vor der gesetzlosen und törichten Lehre des „feindlichen Menschen".`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Römer', ref: '4,3', year: 'ca. 110', quote: `Nicht wie Petrus und Paulus befehle ich euch; jene waren Apostel, ich ein Verurteilter.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '2. Petrus', ref: '3,15–16', quote: `… wie auch unser lieber Bruder Paulus nach der Weisheit, die ihm gegeben ist, euch geschrieben hat …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                    { kind: 'gegner', author: 'Ferdinand Christian Baur', work: 'Paulus, der Apostel Jesu Christi', year: '1845', quote: `Baur deutet das Urchristentum als Gegensatz zwischen petrinischem Judenchristentum und paulinischem Heidenchristentum.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum ehrt die römische Gemeinde, die Petrus und Paulus persönlich kannte, um 96 beide gemeinsam, wenn sie Todfeinde waren?`,
                  ],
                },
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
          followUps: [
            {
              id: 'vom-herrn-empfangen-vision',
              objection: `Paulus sagt selbst, er habe die Abendmahlsworte „von dem Herrn empfangen" (1 Kor 11,23) – also durch Offenbarung, nicht von Menschen. Sein ganzes Jesuswissen stammt aus Visionen und Schriftauslegung. Der Jesus des Paulus ist ein himmlisches Wesen, keine erinnerte Person.`,
              objectionBy: 'Robert M. Price / Richard Carrier',
              answer: `„Empfangen – weitergegeben" (parelabon – paredōka) ist die Fachsprache für Überlieferung von Mensch zu Mensch; Paulus verwendet dieselben Wörter in 1 Kor 15,3 für das Credo, das er nachweislich von anderen hatte. „Vom Herrn" bezeichnet den **Ursprung** der Überlieferung – Jesus selbst –, nicht den Weg. Und die Abendmahlsworte sind fest in der Geschichte verankert: „in der Nacht, da er verraten ward". Sie stimmen bis in Einzelheiten mit Lukas überein und weitgehend mit Markus – unabhängig voneinander überliefert. Visionen erzeugen keine so übereinstimmenden Wortlaute.`,
              detail: `**Die Formel:** Griechisch parelabon apo tou kyriou – „ich habe empfangen vom Herrn her". Das jüdische Gegenstück ist qibbel min … masar le… („empfangen von … weitergeben an …"), wie es die Mischna für die Kette der Überlieferung von Mose bis zu den Rabbinen gebraucht (Avot 1,1). Der Anfangspunkt der Kette wird genannt, nicht jeder Zwischenschritt.

**Der Vergleich:**
- 1 Kor 11,24–25: „Das ist mein Leib, der für euch gebrochen wird … Dieser Kelch ist das neue Testament in meinem Blut."
- Lk 22,19–20: „Das ist mein Leib, der für euch gegeben wird … Das ist der Kelch, das neue Testament in meinem Blut."
- Mk 14,22–24: „Das ist mein Leib … Das ist mein Blut des neuen Testaments."

Paulus und Lukas teilen die Wendungen „für euch", „zu meinem Gedächtnis" und „neues Testament (Bund)" – ein Hinweis auf eine gemeinsame, geprägte Überlieferung.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '11,23–25', quote: `Ich habe es von dem HERRN empfangen, das ich euch gegeben habe. Denn der HERR Jesus in der Nacht, da er verraten ward, nahm er das Brot … Desselbengleichen auch den Kelch nach dem Abendmahl und sprach: Dieser Kelch ist das neue Testament in meinem Blut …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                { kind: 'juedisch', work: 'Mischna, Avot (Sprüche der Väter)', ref: '1,1', year: 'redigiert um 200', quote: `Mose empfing die Tora vom Sinai und überlieferte sie Josua, Josua den Ältesten, die Ältesten den Propheten …`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn „empfangen" in 1 Kor 11 Vision heißt – was heißt dann dasselbe Wort in 1 Kor 15,3, wo Paulus das Credo der Jerusalemer weitergibt?`,
              ],
              followUps: [
                {
                  id: 'abendmahl-mysterienkult',
                  objection: `Das Abendmahl selbst verrät heidnischen Ursprung: Den Leib eines Gottes essen und sein Blut trinken – für Juden, denen schon Blutgenuss verboten war, unvorstellbar. Das stammt aus den Mysterienkulten, die Paulus aus Tarsus kannte, nicht von einem galiläischen Juden.`,
                  objectionBy: 'Hyam Maccoby',
                  answer: `Gerade die Sprache des Abendmahls ist durch und durch jüdisch: das Pessachmahl als Rahmen, der „Bund in meinem Blut" als Echo auf Ex 24,8 („Das ist das Blut des Bundes") und die Verheißung des „neuen Bundes" in Jer 31,31. Paulus selbst grenzt das Herrenmahl scharf von heidnischen Kultmählern ab: „Ihr könnt nicht zugleich des Herrn Kelch trinken und der Dämonen Kelch" (1 Kor 10,21). Die angeblichen Mysterienparallelen – etwa ein Mithrasmahl – sind überwiegend später und dürftig belegt. Und Markus überliefert dieselben Worte unabhängig von Paulus.`,
                  detail: `**Jüdischer Rahmen:** Das letzte Mahl wird in allen Quellen mit dem Pessach verbunden. Die Deutung von Brot und Kelch auf Jesu Tod knüpft an die Bundesschließung am Sinai (Ex 24,8) und an Jesajas Gottesknecht an, der „für viele" stirbt (Jes 53,12; vgl. Mk 14,24).

**Mysterienparallelen:** Die Belege für sakramentale Mahlzeiten im Mithraskult stammen vor allem aus dem 2.–4. Jahrhundert; Justin der Märtyrer (um 150) kennt eine Brot-und-Wasser-Zeremonie bei den Mithrasanhängern und hält sie für eine Nachahmung. Eine Abhängigkeit des Paulus von einem Kult, der in Tarsus im 1. Jahrhundert nicht nachgewiesen ist, bleibt Spekulation.

**Ehrlich:** Die Vorstellung, Christi Leib und Blut zu empfangen, war für jüdische Ohren tatsächlich anstößig – das zeigt Joh 6,52.60. Aber gerade diese Anstößigkeit spricht gegen eine spätere, werbewirksame Erfindung und für eine Überlieferung, die man trotz des Anstoßes bewahrte. Für die koptisch-orthodoxe Kirche ist die Eucharistie der wahre Leib und das wahre Blut Christi – in Kontinuität mit dem, was der Herr selbst eingesetzt hat.`,
                  sources: [
                    { kind: 'bibel', work: '2. Mose (Exodus)', ref: '24,8', quote: `Da nahm Mose das Blut und besprengte das Volk damit und sprach: Sehet, das ist das Blut des Bundes, den der HERR mit euch macht …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '10,21', quote: `Ihr könnt nicht zugleich trinken des HERRN Kelch und der Teufel Kelch; ihr könnt nicht zugleich teilhaftig sein des Tisches des HERRN und des Tisches der Teufel.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '66,4', year: 'ca. 150–155', quote: `Justin erwähnt, dass in den Mysterien des Mithras Brot und ein Becher Wasser mit bestimmten Sprüchen gereicht würden, und deutet dies als Nachahmung.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Hyam Maccoby', work: 'The Mythmaker: Paul and the Invention of Christianity', year: '1986', quote: `Maccoby leitet das Abendmahl aus hellenistischen Mysterienvorstellungen ab, die Paulus eingeführt habe.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Warum sollte Paulus ein heidnisches Kultmahl übernehmen und im selben Brief die Teilnahme an heidnischen Kultmählern verbieten?`,
                    `Woher hat Markus, unabhängig von Paulus, dieselben Abendmahlsworte?`,
                  ],
                },
              ],
            },
          ],
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
              followUps: [
                {
                  id: 'apg-21-reinigungsritus',
                  objection: `Apg 21 zeigt, wer in Jerusalem das Sagen hatte: Jakobus zwang Paulus, ein Reinigungsopfer im Tempel auf sich zu nehmen, um zu beweisen, dass er das Gesetz hält. Paulus beugte sich – entweder aus Heuchelei oder weil er unterlegen war.`,
                  objectionBy: 'James Tabor / Shabir Ally',
                  answer: `Lies weiter: Im selben Gespräch bestätigt Jakobus ausdrücklich den Beschluss, dass von den Heidenchristen keine Beschneidung und kein Gesetzesgehorsam verlangt wird (Apg 21,25). In der Kernfrage – Heiden werden ohne Beschneidung Christen – waren Jakobus und Paulus also einig. Dass Paulus als Jude jüdische Bräuche mittrug, entspricht seinem eigenen Grundsatz: „Den Juden bin ich geworden wie ein Jude" (1 Kor 9,20). Er bekämpfte nie, dass Juden die Tora halten, sondern dass man sie Heiden als Heilsbedingung auferlegt.`,
                  detail: `**Apg 21,20–26 im Zusammenhang:** Die Jerusalemer Ältesten berichten von Gerüchten, Paulus lehre die Juden in der Diaspora, Mose zu verlassen. Um sie zu entkräften, soll Paulus vier Männer bei der Auslösung eines Nasiräatsgelübdes begleiten. Paulus willigt ein – weil die Gerüchte falsch waren: Er hatte selbst ein Gelübde abgelegt (Apg 18,18) und Timotheus, Sohn einer jüdischen Mutter, beschneiden lassen (Apg 16,3).

**Paulus' Prinzip (1 Kor 9,19–23):** Freiheit gegenüber allen, um möglichst viele zu gewinnen – den Juden wie ein Jude, den Gesetzlosen wie ein Gesetzloser, „obwohl ich nicht ohne Gesetz Gottes bin, sondern im Gesetz Christi". Das ist keine Heuchelei, sondern missionarische Rücksicht, die er offen formuliert.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '21,25', quote: `Denn den Gläubigen aus den Heiden haben wir geschrieben und beschlossen, daß sie der keines halten sollen, sondern nur sich bewahren vor Götzenopfer, vor Blut, vor Ersticktem und vor Hurerei.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '9,20', quote: `Den Juden bin ich geworden wie ein Jude, auf daß ich die Juden gewinne.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn Jakobus Paulus' Lehre ablehnte – warum bestätigt er im selben Gespräch, dass Heidenchristen das Gesetz nicht halten müssen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-engel-christologie',
      objection: `Paulus hielt Jesus nicht für Gott, sondern für einen erhöhten Engel: Die Galater nahmen ihn auf „wie einen Engel Gottes, wie Christus Jesus" (Gal 4,14). Im Judentum gab es viele göttliche Wesen – Engel, den Logos, den Menschensohn. Erst die späteren Konzilien haben daraus einen Gott gleichen Wesens gemacht.`,
      objectionBy: 'Bart Ehrman („How Jesus Became God") / Dan McClellan',
      answer: `Gal 4,14 ist eine Steigerung, keine Gleichsetzung: „wie einen Engel – ja, wie Christus selbst". Viel aufschlussreicher ist, was Paulus tatsächlich tut: Er überträgt Texte, die im AT von JHWH allein sprechen, auf Jesus. „Vor mir sollen sich alle Knie beugen" (Jes 45,23) wird in Phil 2,10–11 zum Bekenntnis „Jesus Christus ist der Herr"; das Schma Israel wird in 1 Kor 8,6 auf „einen Gott, den Vater" und „einen Herrn, Jesus Christus" ausgelegt. Und das in Briefen der 50er Jahre – nicht bei späteren Konzilien.`,
      detail: `**Christologischer Monotheismus (Bauckham):** In 1 Kor 8,6 nimmt Paulus die Worte des Schma („Der HERR, unser Gott, ist ein HERR", Dtn 6,4) und teilt sie auf: „ein Gott, der Vater, von dem alle Dinge sind … und ein Herr, Jesus Christus, durch den alle Dinge sind". Jesus wird **in** die Identität des einen Gottes einbezogen – als Mittler der Schöpfung –, ohne den Monotheismus aufzugeben.

**Engel?** Paulus nennt Jesus nirgends einen Engel. Der Hebräerbrief, aus demselben frühen Umfeld, grenzt den Sohn ausdrücklich von den Engeln ab (Hebr 1,4–14). Ehrman räumt selbst ein, dass Paulus Jesus für ein präexistentes göttliches Wesen hielt.

**Nizäa als Klärung:** Aus koptisch-orthodoxer Sicht hat das Konzil von Nizäa (325) keinen neuen Glauben geschaffen, sondern gegen Arius festgehalten, was die Kirche seit den Aposteln anbetete. Athanasius argumentierte gerade so: Die Kirche betet Christus an und tauft in seinem Namen – also kann er kein Geschöpf sein.`,
      voices: [
        {
          person: 'bauckham',
          role: 'als Erforscher der frühen Christologie',
          text: `Bauckham zeigt, dass das Judentum der Zeit den einen Gott durch seine einzigartige Identität bestimmte: als Schöpfer aller Dinge und Herrscher über alles. Die frühen Christen bezogen Jesus genau in diese Identität ein – sie schrieben ihm die Schöpfungsmittlerschaft und die Herrschaft über alles zu. Das ist die höchste denkbare Christologie, und sie steht schon bei Paulus.`,
          sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase', quote: `Christologischer Monotheismus: Jesus wird in die einzigartige Identität des Gottes Israels einbezogen.` }],
        },
      ],
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '8,6', quote: `… so haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen HERRN, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Jesaja', ref: '45,23', quote: `Mir sollen sich alle Kniee beugen und alle Zungen schwören.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Ehrman deutet die paulinische Christologie als Vorstellung von Christus als präexistentem, engelartigem Gottwesen, das erhöht wurde.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welcher Jude hätte das Schma Israel auf einen Engel ausgelegt?`,
        `Warum überträgt Paulus Jes 45,23, wo Gott sagt „Ich bin Gott und keiner mehr", auf Jesus?`,
      ],
      followUps: [
        {
          id: 'goettlich-ist-spektrum',
          objection: `„Göttlich" war im antiken Judentum ein Spektrum: Philo nennt den Logos einen „zweiten Gott", Mose wird in Ex 7,1 „Gott" für den Pharao genannt, und die Psalmen sprechen von „Göttern" in Gottes Rat. Dass Paulus Jesus hoch einordnet, macht ihn nicht zum Gott im Sinn von Nizäa.`,
          objectionBy: 'Dan McClellan',
          answer: `Das Entscheidende ist nicht die Wortwahl, sondern die **Verehrung**. Larry Hurtado hat gezeigt: Kein Engel, kein Logos, kein Mose erhielt im Judentum Gebet, Hymnen, Taufe in seinem Namen oder ein kultisches Mahl. Jesus erhielt all das – in den frühesten Gemeinden, unter Juden. Die Johannesoffenbarung zeigt, wie scharf die Grenze war: Der Engel weist die Anbetung zurück – „Bete Gott an!" (Offb 22,9) –, während das Lamm zusammen mit Gott angebetet wird (Offb 5,13). Diese Grenze haben die ersten Christen nicht verwischt, sondern bewusst mit Jesus überschritten.`,
          detail: `**Hurtados Befund – das „binitarische Verehrungsmuster":**
1. Gebet zu Jesus und im Namen Jesu (1 Kor 1,2; 16,22 „Maranatha").
2. Hymnen auf Christus (Phil 2,6–11; Kol 1,15–20).
3. Taufe „auf den Namen Jesu" (Apg 2,38; Röm 6,3).
4. Das Herrenmahl als kultisches Mahl des Herrn (1 Kor 10,21; 11,20).
5. Anrufung seines Namens („die den Namen unseres Herrn Jesus Christus anrufen", 1 Kor 1,2 – eine Wendung, die im AT JHWH gilt, Joel 3,5).

**Zu Philo:** Philo kann den Logos in einem exegetischen Zusammenhang „zweiten Gott" nennen, aber er bete ihn nicht an, und kein jüdischer Gottesdienst richtete sich an den Logos. Ex 7,1 ist eine funktionale Redeweise („Ich habe dich zum Gott für den Pharao gesetzt"), keine Kultaussage.

**Ehrlich:** Die spätere Begrifflichkeit – Wesen (usia), Hypostase – stammt aus dem 4. Jahrhundert. Aber sie formuliert, was die Anbetung schon voraussetzte.`,
          voices: [
            {
              person: 'hurtado',
              role: 'als Historiker der frühchristlichen Christusverehrung',
              text: `Hurtado hat in mehreren großen Studien gezeigt, dass die Verehrung Jesu nicht schrittweise im heidnischen Umfeld entstand, sondern explosionsartig und früh in jüdisch geprägten Gemeinden. Das Muster – Gebet, Hymnen, Anrufung, Taufe und Mahl im Namen Jesu – ist im Judentum ohne Parallele und lässt sich nur aus der Überzeugung erklären, Gott selbst wolle, dass Jesus so verehrt werde.`,
              sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase', quote: `Frühe, jüdisch geprägte Christusverehrung in einem binitarischen Muster.` }],
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Offenbarung', ref: '22,8–9', quote: `… fiel ich nieder, anzubeten zu den Füßen des Engels … Und er spricht zu mir: Siehe zu, tu es nicht! denn ich bin dein Mitknecht … Bete Gott an!`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
            { kind: 'bibel', work: 'Offenbarung', ref: '5,13', quote: `Dem, der auf dem Stuhl sitzt, und dem Lamm sei Lob und Ehre und Preis und Gewalt von Ewigkeit zu Ewigkeit!`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'sonstiges', author: 'Philo von Alexandrien', work: 'Quaestiones in Genesin', ref: '2,62', year: 'ca. 40', quote: `Philo bezeichnet den Logos in einem exegetischen Zusammenhang als „zweiten Gott", nach dessen Bild der Mensch geschaffen sei.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Nenne einen Engel oder eine göttliche Mittlergestalt, zu der Juden im 1. Jahrhundert beteten und in deren Namen sie tauften.`,
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
