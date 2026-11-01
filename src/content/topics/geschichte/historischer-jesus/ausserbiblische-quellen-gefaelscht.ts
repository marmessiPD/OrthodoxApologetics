import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ausserbiblische-quellen-gefaelscht',
  title: `„Die außerbiblischen Quellen über Jesus sind Fälschungen."`,
  proponents: [
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: `The Prospect of a Christian Interpolation in Tacitus, Annals 15.44 (Vigiliae Christianae 68, 2014); On the Historicity of Jesus (2014)` },
    { name: 'Ken Olson', role: 'Patristiker', work: 'These zur eusebianischen Herkunft des Testimonium Flavianum' },
    { name: 'Robert M. Price', role: 'Neutestamentler', work: 'The Christ-Myth Theory and Its Problems (2011)' },
    { name: 'David Fitzgerald', role: 'Populärautor', work: 'Nailed: Ten Christian Myths That Show Jesus Never Existed at All (2010)' },
  ],
  steelman: `Alle Handschriften des Josephus und des Tacitus wurden über Jahrhunderte ausschließlich von christlichen Schreibern kopiert – von Menschen, die ein Interesse daran hatten, Jesus zu bezeugen. Das berühmte Testimonium Flavianum (Ant. 18,63–64) ist erwiesenermaßen christlich bearbeitet: Ein frommer Pharisäer wie Josephus hätte nie geschrieben „Er war der Christus" und „er erschien ihnen am dritten Tag wieder lebend". Wer so dreist einen Absatz einfügt, kann auch die kurze Jakobus-Notiz (Ant. 20,200) und den Christus-Satz bei Tacitus ergänzt haben. Was übrig bleibt – Plinius, Sueton, Mara bar Serapion, Thallus, der Talmud – erwähnt Jesus entweder gar nicht namentlich, ist Jahrhunderte später entstanden oder gibt nur wieder, was Christen erzählten. Apologeten blähen diese Listen auf, um eine dünne Beweislage zu verdecken.`,
  biblical: {
    summary: `Das Neue Testament selbst rechnet damit, dass Außenstehende von Jesus wissen: „Solches ist nicht im Winkel geschehen" (Apg 26,26). Es nennt Personen, die auch außerbiblisch bekannt sind – Tiberius, Pilatus, Herodes Antipas, Kajaphas, Gallio, Felix, Festus, Agrippa II. – und setzt sich so bewusst der Überprüfung aus.`,
    detail: `Gerade die Verflechtung mit der allgemeinen Geschichte macht die Evangelien und die Apostelgeschichte überprüfbar. Pilatus ist durch die Inschrift von Caesarea (1961) als „Präfekt von Judäa" belegt, Kajaphas durch ein Ossuar (1990) mit der Aufschrift „Josef, Sohn des Kajaphas" (vgl. Josephus, Ant. 18,35: „Josef, genannt Kajaphas"). Diese Funde beweisen nicht Jesus selbst, zeigen aber, dass die neutestamentlichen Autoren in der realen Welt ihrer Zeit verankert sind.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '26,26', quote: `Denn der König weiß solches wohl, zu welchem ich freudig rede. Denn ich achte, ihm sei der keines verborgen; denn solches ist nicht im Winkel geschehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '3,1–2', quote: `Datierung des Auftretens des Täufers nach Tiberius, Pilatus, Herodes, Philippus, Lysanias, Hannas und Kajaphas.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Pilatus-Inschrift von Caesarea Maritima', year: 'gefunden 1961', quote: `[…]S TIBERIEVM / [PON]TIVS PILATVS / [PRAEF]ECTVS IVDA[EA]E`, status: 'verbatim', note: 'Bestätigt Pilatus und seinen Titel „Präfekt"; ergänzte Buchstaben in Klammern.' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die außerchristlichen Zeugnisse früh gesammelt und ehrlich diskutiert. Origenes (Alexandrien/Caesarea) betont um 248, dass Josephus **nicht** an Jesus als Christus glaubte – ein wichtiger Hinweis darauf, dass der Text zu seiner Zeit noch nicht christlich überarbeitet war. Hieronymus gibt das Testimonium mit der zurückhaltenden Formel „man glaubte, er sei der Christus" wieder.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,47', year: 'ca. 248', quote: `Josephus glaubte nicht, dass Jesus der Christus sei, und bezeugt doch Jakobus als Bruder Jesu, des sogenannten Christus.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'De viris illustribus', ref: '13', year: '392', quote: `… und man glaubte, er sei der Christus.`, original: `et credebatur esse Christus`, status: 'paraphrase', note: 'Lateinische Wiedergabe des Testimonium mit zurückhaltender Formulierung – Wortlaut vor Zitierung prüfen.' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'I,11,7–8', year: 'ca. 325', quote: `Eusebius zitiert das Testimonium Flavianum in der heute bekannten (christlich erweiterten) Form.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Forschungsstand ist differenziert: **Tacitus, Annalen 15,44** gilt nahezu einhellig als echt. **Josephus, Ant. 20,200** (Jakobus-Notiz) gilt bei der großen Mehrheit als echt. Beim **Testimonium Flavianum (Ant. 18,63–64)** vertritt die Mehrheit eine Teilechtheit: ein authentischer Kern mit späteren christlichen Zusätzen (so u. a. John P. Meier, Louis Feldman, Alice Whealey, Geza Vermes). Eine Minderheit hält es für ganz gefälscht, eine kleine Minderheit für ganz echt.`,
    detail: `**Ehrlich:** Plinius (Briefe X,96) und Sueton (Claudius 25,4) belegen vor allem die frühe Christenbewegung, nicht direkt Jesus. Mara bar Serapion nennt keinen Namen. Thallus ist nur indirekt (Julius Africanus bei Georgios Synkellos, 9. Jh.) und in unsicherem Wortlaut erhalten. Die Talmudstellen sind späte Polemik mit umstrittenem Bezug. Ein redlicher Apologet sortiert die Quellen deshalb nach Gewicht.

**Eine sinnvolle Rangfolge:**
1. Paulusbriefe und Evangelien (die Hauptquellen – auch für Historiker).
2. Josephus, Ant. 20,200 und Tacitus, Ann. 15,44.
3. Kern des Testimonium Flavianum; Plinius; Lukian; Talmud (b. Sanhedrin 43a); Mara bar Serapion.
4. Thallus, Sueton, Phlegon – unsicher, eher nicht verwenden.

Die Arabische Fassung bei **Agapius von Hierapolis** (10. Jh.), 1971 von Shlomo Pines veröffentlicht, bietet eine weniger christliche Version („er war vielleicht der Messias"); ob sie unabhängig ist oder auf eine syrische Zwischenstufe zurückgeht, ist umstritten.`,
    sources: [
      { kind: 'fachliteratur', author: 'John P. Meier', work: 'A Marginal Jew: Rethinking the Historical Jesus, Bd. 1', year: '1991', quote: `Meier rekonstruiert einen authentischen Kern des Testimonium Flavianum nach Entfernung der offensichtlich christlichen Zusätze.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Shlomo Pines', work: 'An Arabic Version of the Testimonium Flavianum and Its Implications', year: '1971', quote: `Edition und Analyse der arabischen Fassung bei Agapius.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Alice Whealey', work: 'Josephus on Jesus: The Testimonium Flavianum Controversy from Late Antiquity to Modern Times', year: '2003', quote: `Whealey argumentiert, die syrische und arabische Überlieferung spiegele eine ursprünglichere, zurückhaltendere Fassung („man glaubte, er sei der Christus").`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert E. Van Voorst', work: 'Jesus Outside the New Testament', year: '2000', quote: `Überblick über alle außerneutestamentlichen Zeugnisse mit nüchterner Bewertung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Nein. Die beiden wichtigsten nichtchristlichen Zeugnisse – Tacitus (Jesus unter Pilatus hingerichtet) und Josephus' Notiz über „Jakobus, den Bruder Jesu, des sogenannten Christus" – gelten in der Fachwelt als echt. Beim längeren Josephus-Text (Testimonium) sind spätere christliche Zusätze klar erkennbar, aber die Mehrheit der Forscher hält einen Kern für authentisch. Ein Fälscher hätte Jesus nie „den sogenannten Christus" genannt oder das Christentum wie Tacitus einen „verderblichen Aberglauben".`,
  keyPoints: [
    `**Tacitus, Ann. 15,44 (ca. 116):** „Christus … wurde unter Tiberius vom Prokurator Pontius Pilatus hingerichtet" – feindlicher Ton, keine Handschriftenvariante, nahezu einhellig als echt anerkannt.`,
    `**Josephus, Ant. 20,200 (ca. 93):** „den Bruder Jesu, des sogenannten Christus, mit Namen Jakobus" – distanziert, nicht christlich formuliert, von Origenes um 250 bezeugt.`,
    `**Testimonium Flavianum:** christlich ergänzt, aber mit josephischem Vokabular im Kern; arabische Fassung (Agapius) und Hieronymus' „man glaubte" stützen eine zurückhaltendere Urfassung.`,
    `**Unabhängige jüdische Überlieferung:** Der Talmud – von Juden, nicht Christen überliefert – kennt einen Jeschu, der am Vorabend des Pessach hingerichtet wurde (Bezug umstritten).`,
    `**Gestufte Ehrlichkeit:** Sortiere die Quellen nach Gewicht; nicht alle sind gleich stark – das macht dich glaubwürdig.`,
    `**Selbst ohne jede nichtchristliche Quelle** bleiben Paulus und die Evangelien Quellen, die jeder Historiker ernst nimmt.`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als Textzeuge des 3. Jahrhunderts',
      text: `Origenes ist ein unschätzbarer Zeuge für den Josephus-Text vor Eusebius. Er schreibt zweimal, Josephus habe Jesus nicht als Christus anerkannt, und zitiert die Jakobus-Notiz mit der Wendung „Bruder Jesu, des sogenannten Christus". Daraus folgt zweierlei: Die Jakobus-Stelle stand schon um 250 im Text; und der Satz „Er war der Christus" im Testimonium stand bei Origenes wahrscheinlich noch nicht so da – er wurde später ergänzt. Die Kirche hat also nicht vertuscht, sondern selbst die Spuren bewahrt, mit denen sich Echtes von Zusätzen unterscheiden lässt.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: '10,17', year: 'ca. 245', quote: `Josephus nahm nicht an, dass Jesus der Christus sei.`, status: 'paraphrase' }],
    },
    {
      person: 'hieronymus',
      role: 'als Übersetzer und Literarhistoriker',
      text: `Hieronymus gibt in seinem Schriftstellerkatalog (392) das Testimonium Flavianum wieder – aber mit der Formulierung „man glaubte, er sei der Christus" statt „er war der Christus". Das stimmt auffällig mit der arabischen Fassung bei Agapius überein und spricht dafür, dass eine zurückhaltendere Form des Textes im Umlauf war. Für die Debatte heißt das: Die christlichen Erweiterungen sind erkennbar, der Kern bleibt.`,
      sources: [{ kind: 'kirchenvater', author: 'Hieronymus', work: 'De viris illustribus', ref: '13', year: '392', status: 'paraphrase', quote: `Wiedergabe des Josephus-Zeugnisses mit „credebatur esse Christus".` }],
    },
    {
      person: 'eusebius',
      role: 'als Kirchenhistoriker (mit Vorbehalt)',
      text: `Eusebius ist der früheste Zeuge für das Testimonium in seiner heutigen, christlich erweiterten Form. Kritiker werfen ihm deshalb vor, er selbst habe den Text verfasst. Dagegen spricht, dass der Kern typisch josephisches Vokabular enthält (z. B. „Vollbringer erstaunlicher Werke", „Stamm der Christen") und Eusebius andere Quellen in der Regel wörtlich zitiert – vieles, was wir aus dem 2. Jahrhundert wissen, verdanken wir genau dieser Zitierpraxis. Ehrlich bleibt: Die Zusätze müssen zwischen Origenes und Eusebius oder durch Eusebius' Vorlage entstanden sein.`,
      sources: [{ kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Demonstratio Evangelica', ref: 'III,5', year: 'ca. 314–318', status: 'paraphrase', quote: `Eusebius führt das Josephus-Zeugnis auch in seinem „Beweis des Evangeliums" an.` }],
    },
    {
      person: 'habermas',
      role: 'als Historiker der außerbiblischen Zeugnisse',
      text: `Habermas hat die außerchristlichen Quellen systematisch zusammengestellt und gezeigt, dass sich aus ihnen allein – ohne Neues Testament – ein Grundgerüst ergibt: Jesus war ein jüdischer Lehrer, galt als Wundertäter, wurde unter Pontius Pilatus zur Zeit des Tiberius gekreuzigt; seine Anhänger glaubten, er sei auferstanden, verehrten ihn „wie einen Gott" und breiteten sich trotz Verfolgung bis nach Rom aus. Er betont zugleich, dass die Quellen unterschiedliches Gewicht haben.`,
      sources: [{ kind: 'fachliteratur', author: 'Gary R. Habermas', work: 'The Historical Jesus: Ancient Evidence for the Life of Christ', year: '1996', status: 'paraphrase', quote: `Aus den außerbiblischen Quellen lässt sich ein Grundgerüst des Lebens Jesu rekonstruieren.` }],
    },
  ],
  dialog: [
    {
      id: 'testimonium-gefaelscht',
      objection: `Das Testimonium Flavianum ist offensichtlich gefälscht. Ein frommer Jude wie Josephus schreibt nicht „Er war der Christus" und „er erschien ihnen am dritten Tag wieder lebend, wie die göttlichen Propheten vorhergesagt hatten". Wer so etwas einfügt, ist ein Fälscher – und dem traue ich bei keinem Satz.`,
      objectionBy: 'Richard Carrier / Ken Olson',
      answer: `Die christlichen Zusätze sind unbestreitbar – darin sind wir uns einig. Aber die Mehrheit der Fachleute, auch jüdische und säkulare, hält einen Kern für echt: Er enthält typisch josephisches Vokabular, passt in den Kontext der Pilatus-Unruhen, und die Jakobus-Stelle in Buch 20 setzt voraus, dass Josephus Jesus schon einmal erwähnt hat („des sogenannten Christus"). Die arabische Fassung bei Agapius und Hieronymus' „man glaubte, er sei der Christus" zeigen eine zurückhaltendere Urform.`,
      detail: `**Rekonstruierter Kern (nach Meier, sinngemäß):** „Um diese Zeit lebte Jesus, ein weiser Mann. Er war nämlich ein Vollbringer erstaunlicher Taten, ein Lehrer von Menschen, die die Wahrheit mit Freuden aufnehmen, und er zog viele Juden und viele Griechen an. Und als Pilatus ihn auf Anzeige der ersten Männer unter uns zum Kreuz verurteilt hatte, hörten die, welche ihn zuvor geliebt hatten, nicht damit auf. Und bis heute ist der Stamm der Christen, die nach ihm benannt sind, nicht verschwunden."

**Argumente für den Kern:**
- „Vollbringer erstaunlicher Werke" (paradoxōn ergōn poiētēs) verwendet Josephus auch für Elisa (Ant. 9,182).
- „Stamm" (phylon) der Christen ist keine christliche Selbstbezeichnung.
- Die Schuld wird nicht „den Juden" pauschal zugeschoben, sondern den „ersten Männern" – untypisch für spätere christliche Polemik.

**Was fehlt bei Fälschungs-Totalthese:** Warum hätte ein Fälscher einen so blassen Text gewählt, der Jesus „weiser Mann" nennt?`,
      sources: [
        { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,63–64', year: 'ca. 93/94', quote: `Um diese Zeit lebte Jesus, ein weiser Mann … [christliche Zusätze in der überlieferten Form: „wenn man ihn überhaupt einen Mann nennen darf", „Er war der Christus", „er erschien ihnen am dritten Tag wieder lebend …"].`, original: `Γίνεται δὲ κατὰ τοῦτον τὸν χρόνον Ἰησοῦς σοφὸς ἀνήρ`, status: 'paraphrase', note: 'Griechischer Anfang wörtlich; die übrige Wiedergabe ist eine Zusammenfassung.' },
        { kind: 'fachliteratur', author: 'John P. Meier', work: 'A Marginal Jew, Bd. 1', year: '1991', status: 'paraphrase', quote: `Rekonstruktion eines authentischen Kerns.` },
      ],
      questionsBack: [
        `Wenn ein Christ den ganzen Text erfunden hat – warum nennt er Jesus nur einen „weisen Mann" und die Christen einen „Stamm"?`,
        `Wie erklärst du, dass Josephus in Ant. 20,200 Jesus als bekannt voraussetzt?`,
      ],
      followUps: [
        {
          id: 'agapius-abhaengig',
          objection: `Agapius schreibt im 10. Jahrhundert und hängt wahrscheinlich über eine syrische Übersetzung von Eusebius ab. Er ist kein unabhängiger Zeuge für irgendeinen „ursprünglichen" Josephus.`,
          objectionBy: 'Richard Carrier',
          answer: `Das ist möglich, und ich stütze mich nicht allein auf Agapius. Aber selbst wenn er von einer syrischen Fassung abhängt, zeigt sein Text – wie Hieronymus' „man glaubte, er sei der Christus" –, dass eine weniger christliche Form im Umlauf war. Die Argumente für den Kern stehen unabhängig davon: josephisches Vokabular, der Rückverweis in Ant. 20,200 und Origenes' Bemerkung, Josephus habe Jesus nicht für den Christus gehalten.`,
          followUps: [
            {
              id: 'eusebius-faelscher',
              objection: `Eusebius ist der erste, der das Testimonium zitiert – und er hat in seiner „Vorbereitung auf das Evangelium" sogar ein Kapitel darüber, dass man Unwahrheit wie eine Arznei gebrauchen dürfe. Er war ein Fälscher.`,
              objectionBy: 'Ken Olson / verbreitet bei Mythizisten',
              answer: `Das Kapitel (Praep. Ev. XII,31) gibt eine Stelle aus Platons „Gesetzen" wieder und vergleicht sie mit dem AT – es ist kein Fälschungsgeständnis. Für die Behauptung, Eusebius habe Quellen erfunden, gibt es keinen Beleg; im Gegenteil, wo wir seine Vorlagen nachprüfen können, zitiert er sie zuverlässig. Und das Vokabular des Kerns ist josephisch, nicht eusebianisch. Höchstens die christlichen Zusätze könnten aus seiner Zeit stammen – den Kern erklärt das nicht.`,
              sources: [
                { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Praeparatio Evangelica', ref: 'XII,31', year: 'ca. 314–318', quote: `Kapitel über Platons Aussage, dass Gesetzgeber zuweilen eine „heilsame Täuschung" verwenden – mit Vergleich zu AT-Stellen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Kannst du eine einzige nachprüfbare Quelle nennen, bei der Eusebius nachweislich einen Text erfunden hat?`,
              ],
              followUps: [
                {
                  id: 'olson-eusebianischer-stil',
                  objection: `Ken Olson hat gezeigt, dass das Vokabular des Testimonium eher zu Eusebius passt als zu Josephus. Wendungen wie „bis heute" und die Art, wie Jesu Wirken beschrieben wird, finden sich gerade in Eusebius' „Beweis des Evangeliums". Der „josephische Kern" ist eine Wunschvorstellung.`,
                  objectionBy: 'Ken Olson',
                  answer: `Olsons Analyse ist ernst zu nehmen, aber sie ist eine Minderheitsposition. Gerade die Wendungen, die am wenigsten christlich klingen – Jesus als „Vollbringer erstaunlicher Taten" (wie Josephus es von Elisa sagt), die Christen als „Stamm", die Verantwortung der „ersten Männer" statt „der Juden" –, passen schlecht zu einem Kirchenhistoriker, der Jesus als göttlichen Logos verkündet. Und unabhängig vom Testimonium bleibt die Jakobus-Notiz in Ant. 20,200, die Origenes schon zwei Generationen vor Eusebius kannte. Selbst wenn das Testimonium ganz fiele, bliebe Josephus ein Zeuge für Jesus.`,
                  detail: `**Stand der Debatte:** Olson (1999) argumentiert, das Testimonium sei im Ganzen eine eusebianische Komposition. Alice Whealey und John P. Meier vertreten dagegen einen authentischen Kern mit christlichen Erweiterungen; das ist nach wie vor die Mehrheitsmeinung. Louis Feldman, einer der bedeutendsten Josephus-Forscher, hielt ebenfalls einen echten Kern für wahrscheinlich, wenn auch mit Vorsicht.

**Ehrlich:** Sprachstatistische Argumente sind in beide Richtungen schwach, weil Eusebius Josephus gut kannte und seinen Stil nachahmen konnte – und Josephus umgekehrt Vokabular verwendet, das später christlich wurde. Darum ruht das Argument für den Kern nicht auf einzelnen Wörtern, sondern auf dem **Gesamtbild**: Ein christlicher Verfasser hätte kaum einen so blassen Text geschrieben, und Josephus musste Jesus kennen, wenn er in Buch 20 auf ihn als bekannt verweist.`,
                  sources: [
                    { kind: 'gegner', author: 'Ken Olson', work: 'Eusebius and the Testimonium Flavianum', ref: 'Catholic Biblical Quarterly 61', year: '1999', quote: `Olson hält das Testimonium für eine Komposition des Eusebius.`, status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Alice Whealey', work: 'Josephus on Jesus: The Testimonium Flavianum Controversy from Late Antiquity to Modern Times', year: '2003', quote: `Whealey verteidigt einen authentischen Kern des Testimonium und rekonstruiert eine zurückhaltendere Urfassung.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Selbst wenn das Testimonium ganz von Eusebius stammte – wie erklärst du die Jakobus-Notiz, die Origenes schon um 250 zitiert?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'origenes-kennt-testimonium-nicht',
          objection: `Origenes zitiert das Testimonium nie, obwohl es ihm im Streit mit Kelsos sehr genützt hätte. Also stand es zu seiner Zeit gar nicht im Josephus-Text.`,
          objectionBy: 'Richard Carrier',
          answer: `Origenes schreibt ausdrücklich, Josephus habe nicht geglaubt, dass Jesus der Christus sei. Das ist genau das, was man erwarten würde, wenn er eine **neutrale** Fassung kannte, ohne „Er war der Christus". Ein Text, der Jesus bloß einen „weisen Mann" nennt, war für Origenes' Apologetik schlicht nicht besonders nützlich. Sein Schweigen spricht also eher für einen zurückhaltenden Kern als für dessen völliges Fehlen.`,
          followUps: [
            {
              id: 'jakobus-stelle-interpoliert',
              objection: `Auch die Jakobus-Stelle in Ant. 20,200 ist verdächtig. Ursprünglich war wohl von Jakobus, dem Bruder des Jesus, Sohn des Damnaios, die Rede – der wird im selben Abschnitt zum Hohepriester gemacht. „Der Christus genannt wird" ist eine christliche Randnotiz, die in den Text geriet.`,
              objectionBy: 'Richard Carrier',
              answer: `Für diese These gibt es keine einzige Handschrift, und Origenes zitiert die Wendung „Bruder Jesu, des sogenannten Christus" schon um 250 – an mehreren Stellen. Die Formulierung ist auffallend distanziert: Ein Christ hätte „Bruder des Herrn" geschrieben (Gal 1,19), nicht „des sogenannten Christus". Und Josephus führt Jesus, Sohn des Damnaios, im selben Abschnitt als **neue** Person mit vollem Vatersnamen ein – genau so, wie man es tut, wenn vorher ein **anderer** Jesus genannt wurde. Deshalb halten auch skeptische Forscher die Stelle fast einhellig für echt.`,
              detail: `**Der Kontext (Ant. 20,197–203):** Nach dem Tod des Statthalters Festus nutzt der Hohepriester Hannas der Jüngere das Machtvakuum, lässt Jakobus und einige andere steinigen und wird deshalb abgesetzt; Nachfolger wird „Jesus, Sohn des Damnaios". Die Episode handelt von innerjüdischer Rechtspolitik, nicht von christlicher Frömmigkeit – nichts daran klingt nach einem christlichen Einschub.

**Warum der Zusatz „genannt Christus" nötig war:** Jesus (Jeschua) war ein sehr häufiger Name; Josephus nennt über ein Dutzend Männer dieses Namens. Um Jakobus zu identifizieren, brauchte er eine Unterscheidung – und verwies auf den Beinamen, unter dem dieser Jesus bekannt war. Das setzt voraus, dass er ihn schon eingeführt hatte (Ant. 18,63–64).`,
              sources: [
                { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '20,200', year: 'ca. 93/94', quote: `… stellte den Bruder Jesu, der Christus genannt wird, mit Namen Jakobus, und einige andere vor Gericht …`, original: `τὸν ἀδελφὸν Ἰησοῦ τοῦ λεγομένου Χριστοῦ, Ἰάκωβος ὄνομα αὐτῷ`, status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,47', year: 'ca. 248', quote: `Origenes verweist auf Josephus' Bericht über Jakobus, den Bruder Jesu, des sogenannten Christus.`, status: 'paraphrase' },
                { kind: 'gegner', author: 'Richard Carrier', work: `Origen, Eusebius, and the Accidental Interpolation in Josephus, Jewish Antiquities 20.200. Journal of Early Christian Studies 20`, year: '2012', quote: `Carrier vermutet, „der Christus genannt wird" sei eine versehentlich in den Text geratene Glosse.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Welcher christliche Schreiber nennt den Herrenbruder „Bruder Jesu, des sogenannten Christus" statt „Bruder des Herrn"?`,
              ],
              followUps: [
                {
                  id: 'origenes-verwechselt-hegesipp',
                  objection: `Origenes ist kein guter Zeuge: Er schreibt Josephus die Aussage zu, Jerusalem sei als Strafe für den Tod des Jakobus zerstört worden. Das steht in keinem Josephus-Text – er verwechselt ihn offenbar mit Hegesipp. Wer so zitiert, kann auch die Jakobus-Wendung aus christlicher Quelle haben.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Das ist ein guter Punkt, und ich gestehe ihn zu: Origenes hat an dieser Stelle aus dem Gedächtnis zitiert oder Josephus mit einer christlichen Quelle vermischt. Aber daraus folgt nicht, dass auch die Wendung „Bruder Jesu, des sogenannten Christus" fremd ist. Sie steht in **unserem** Josephus-Text in einem durch und durch josephischen Zusammenhang – Hannas' Rechtsbruch, seine Absetzung, die Nachfolge des Jesus, Sohn des Damnaios. Origenes bestätigt nur, dass sie schon im 3. Jahrhundert dort stand. Die Echtheit hängt am Kontext, nicht an Origenes' Zitiertreue.`,
                  detail: `**Ehrlich:** Origenes (Contra Celsum I,47; II,13; Matthäuskommentar 10,17) verbindet die Zerstörung Jerusalems mit dem Tod des Jakobus und schreibt das Josephus zu. Eine solche Aussage findet sich in den erhaltenen Handschriften nicht, wohl aber bei Hegesipp (bei Eusebius, KG II,23,18). Das ist ein echter Fehler.

**Warum die Wendung trotzdem echt ist:** Die große Mehrheit der Josephus-Forscher – darunter auch solche, die das Testimonium skeptisch beurteilen – hält Ant. 20,200 für authentisch. Selbst Bart Ehrman, der die Mythizisten scharf kritisiert, aber kein Apologet ist, verweist auf diese Stelle als soliden Beleg.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea (nach Hegesipp)', work: 'Kirchengeschichte', ref: 'II,23,18', year: 'ca. 325', quote: `Hegesipp verbindet das Martyrium des Jakobus unmittelbar mit der Belagerung Jerusalems durch Vespasian.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Ehrman hält die Jakobus-Notiz in Ant. 20,200 für authentisch und für einen Beleg, dass Josephus Jesus kannte.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn Origenes' Fehler die Jakobus-Wendung verdächtig macht – warum steht sie dann in einem Zusammenhang, der ausschließlich von jüdischer Innenpolitik handelt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tacitus-interpoliert',
      objection: `Auch Tacitus ist nicht sicher. Ich habe in Vigiliae Christianae (2014) gezeigt, dass der Satz über „Christus" in Annalen 15,44 eine christliche Randglosse sein dürfte, die später in den Text rutschte. Ursprünglich ging es um „Chrestianer", Anhänger eines Unruhestifters namens Chrestus.`,
      objectionBy: 'Richard Carrier',
      answer: `Für diese Interpolation gibt es keinen Handschriftenbeleg; die These ist in der Tacitus-Forschung praktisch ohne Anhänger. Der Ton ist eindeutig nichtchristlich: Tacitus nennt das Christentum einen „verderblichen Aberglauben" und Christen „des Hasses gegen das Menschengeschlecht überführt". In der Haupthandschrift (Mediceus II, 11. Jh.) wurde nach Untersuchungen ein ursprüngliches „Chrestianos" zu „Christianos" korrigiert – das spricht gerade für einen echten, vom Schreiber nur orthografisch angepassten Text. Und Sulpicius Severus gibt den Bericht um 400 bereits wieder.`,
      detail: `**Der Text (Ann. 15,44):** „Auctor nominis eius Christus Tiberio imperitante per procuratorem Pontium Pilatum supplicio adfectus erat" – „Der Urheber dieses Namens, Christus, war unter der Herrschaft des Tiberius durch den Prokurator Pontius Pilatus hingerichtet worden."

**Warum kein Christ so schreibt:** Ein christlicher Interpolator hätte Jesus nicht „Urheber eines verderblichen Aberglaubens" genannt und ihn nicht nur als Namensgeber einer verhassten Sekte erwähnt.

**Zusammenhang:** Tacitus erklärt, wie Nero nach dem Brand Roms (64) die Schuld auf die „Chrestiani" abwälzte – der Satz über Christus ist für die Erklärung des Namens notwendig, keine überflüssige Glosse.`,
      sources: [
        { kind: 'sonstiges', author: 'Publius Cornelius Tacitus', work: 'Annalen', ref: '15,44', year: 'ca. 116', quote: `Der Urheber dieses Namens, Christus, war unter der Herrschaft des Tiberius durch den Prokurator Pontius Pilatus hingerichtet worden; und für den Augenblick unterdrückt, brach der verderbliche Aberglaube wieder hervor, nicht nur in Judäa, dem Ursprung dieses Übels, sondern auch in der Hauptstadt …`, original: `Auctor nominis eius Christus Tiberio imperitante per procuratorem Pontium Pilatum supplicio adfectus erat; repressaque in praesens exitiabilis superstitio rursum erumpebat, non modo per Iudaeam, originem eius mali, sed per urbem etiam …`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'gegner', author: 'Richard Carrier', work: `The Prospect of a Christian Interpolation in Tacitus, Annals 15.44. Vigiliae Christianae 68`, year: '2014', quote: `Carrier hält den Christus-Satz für eine mögliche christliche Interpolation.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Sulpicius Severus', work: 'Chronica', ref: 'II,29', year: 'ca. 403', quote: `Wiedergabe von Neros Christenverfolgung in enger Anlehnung an Tacitus.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Welcher christliche Schreiber würde Jesus als Urheber eines „verderblichen Aberglaubens" einführen?`,
        `Welche Tacitus-Fachleute (nicht Neutestamentler) teilen deine Interpolationsthese?`,
      ],
      followUps: [
        {
          id: 'tacitus-hoerensagen',
          objection: `Selbst wenn der Satz echt ist: Tacitus schreibt 80 Jahre später und gibt nur wieder, was Christen in Rom behaupteten. Das ist kein unabhängiger Beleg.`,
          objectionBy: 'Robert M. Price',
          answer: `Tacitus war Senator, Statthalter der Provinz Asia und ein Historiker, der Gerüchte ausdrücklich als solche kennzeichnet. Er verachtete die Christen – er hätte ihre Behauptungen kaum ungeprüft als Tatsache übernommen. Und selbst wenn seine Information letztlich über Christen lief: Sie zeigt, dass im Rom des frühen 2. Jahrhunderts niemand – auch kein Gegner – daran zweifelte, dass der Gründer unter Pilatus hingerichtet worden war. Das passt exakt zu Paulus und den Evangelien.`,
          followUps: [
            {
              id: 'prokurator-fehler',
              objection: `Tacitus nennt Pilatus „Prokurator". Die Inschrift von Caesarea zeigt aber „Präfekt". Das ist ein Anachronismus – Tacitus hat also nicht in Akten nachgesehen, sondern spätere Erzählungen übernommen.`,
              objectionBy: 'Kipp Davis / verbreitet',
              answer: `Zu Tacitus' Zeit hießen die Statthalter Judäas „Prokuratoren"; er verwendet den Titel seiner eigenen Gegenwart – solche Anachronismen sind bei antiken Historikern normal. Auch Philo und Josephus bezeichnen Pilatus mit dem griechischen Gegenstück (epitropos). Vor allem: Die Evangelien nennen Pilatus „Statthalter" (hēgemōn), nicht „Prokurator" – Tacitus hat den Titel also gerade **nicht** aus christlicher Erzählung übernommen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'plinius-sueton-sagen-nichts',
      objection: `Plinius der Jüngere schreibt über Christen, nicht über Jesus. Sueton spricht von einem „Chrestus", der in Rom Unruhen stiftete – das war ein gewöhnlicher Sklavenname, vielleicht ein jüdischer Agitator. Deine „Quellen" für Jesus lösen sich in Luft auf.`,
      objectionBy: 'Robert M. Price / David Fitzgerald',
      answer: `Einverstanden: Plinius und Sueton sind keine direkten Belege für Jesu Leben, und ich stütze die Existenz Jesu nicht auf sie. Plinius ist aber wertvoll für etwas anderes: Um 112 berichtet ein römischer Statthalter, Christen sängen „Christus wie einem Gott" Hymnen – ein früher Beleg für die Anbetung Jesu. Sueton ist unsicher; er passt allerdings auffällig zu Apg 18,2, wo Claudius die Juden aus Rom vertreibt.`,
      detail: `**Plinius, Briefe X,96,7 (ca. 112):** „quod essent soliti stato die ante lucem convenire, carmenque Christo quasi deo dicere secum invicem" – „dass sie gewohnt seien, an einem festgesetzten Tag vor Sonnenaufgang zusammenzukommen und Christus wie einem Gott im Wechsel ein Lied zu singen". Trajans Antwort (X,97) ist ebenfalls erhalten; die Echtheit des Briefwechsels ist unbestritten.

**Sueton, Claudius 25,4 (ca. 121):** „Iudaeos impulsore Chresto assidue tumultuantis Roma expulit" – „Die Juden, die auf Anstiften des Chrestus fortwährend Unruhe stifteten, vertrieb er aus Rom." Viele Forscher sehen darin eine verzerrte Erinnerung an Streit in den römischen Synagogen über Christus; sicher ist das nicht.`,
      sources: [
        { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe', ref: 'X,96,7', year: 'ca. 112', quote: `… dass sie gewohnt seien, an einem festgesetzten Tag vor Sonnenaufgang zusammenzukommen und Christus wie einem Gott im Wechsel ein Lied zu singen …`, original: `quod essent soliti stato die ante lucem convenire, carmenque Christo quasi deo dicere secum invicem`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'sonstiges', author: 'Sueton', work: 'Leben des Claudius', ref: '25,4', year: 'ca. 121', quote: `Die Juden, die auf Anstiften des Chrestus fortwährend Unruhe stifteten, vertrieb er aus Rom.`, original: `Iudaeos impulsore Chresto assidue tumultuantis Roma expulit.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '18,2', quote: `… Aquila … samt seinem Weibe Priscilla (darum daß der Kaiser Klaudius geboten hatte allen Juden, zu weichen aus Rom) …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'chrestus-anderer',
          objection: `Dann gib zu, dass Sueton wertlos ist. Chrestus war ein häufiger Name; nichts deutet auf Jesus.`,
          objectionBy: 'Richard Carrier',
          answer: `Ich gebe zu: Sueton ist unsicher, und ich würde mit ihm keinen Beweis führen. Für Jesu Existenz brauche ich ihn nicht. Bemerkenswert bleibt nur, dass „Chrestianer" auch bei Tacitus die volkstümliche Schreibweise für Christen ist und die Vertreibung unter Claudius unabhängig in der Apostelgeschichte erscheint. Mehr als „möglich" sage ich dazu nicht.`,
        },
      ],
    },
    {
      id: 'kleine-quellen-aufgeblaeht',
      objection: `Mara bar Serapion nennt keinen Namen, Thallus kennen wir nur aus dritter Hand, der Talmud ist 500 Jahre später und meint vielleicht jemand anderen, Lukian ist ein Satiriker. Apologeten blähen ihre Listen auf, um eine dünne Beweislage zu verdecken.`,
      objectionBy: 'Kipp Davis / Dan McClellan (Kritik an apologetischen Listen)',
      answer: `Das ist eine berechtigte Kritik an manchen Apologeten. Ich unterscheide deshalb klar: Die Existenz Jesu ruht auf Paulus, den Evangelien, Josephus (Ant. 20,200) und Tacitus. Mara, Lukian und der Talmud sind Ergänzungen – sie zeigen, dass auch Außenstehende im 2. Jahrhundert von einem hingerichteten jüdischen Lehrer wussten. Thallus und Phlegon lasse ich ganz weg, weil ihr Wortlaut zu unsicher ist.`,
      detail: `**Lukian von Samosata, Über das Lebensende des Peregrinus 11.13 (ca. 165):** Die Christen verehrten „jenen Menschen, der in Palästina gekreuzigt wurde", und lebten nach den Gesetzen „jenes gekreuzigten Sophisten". Spott – aber als Spott ein Beleg dafür, was im 2. Jh. allgemein bekannt war.

**Mara bar Serapion (syrischer Brief, nach 73; Datierung umstritten):** Fragt, was die Juden davon hatten, „ihren weisen König" hinzurichten, da ihr Reich danach weggenommen wurde. Kein Name; der Bezug auf Jesus ist wahrscheinlich, aber nicht sicher.

**Thallus:** Julius Africanus (3. Jh.) erwähnt, Thallus habe die Finsternis (bei der Kreuzigung?) als Sonnenfinsternis erklärt; überliefert erst bei Georgios Synkellos (9. Jh.). Datierung des Thallus und Bezug unsicher – nicht verwenden.`,
      sources: [
        { kind: 'sonstiges', author: 'Lukian von Samosata', work: 'Über das Lebensende des Peregrinus', ref: '11; 13', year: 'ca. 165', quote: `… jenen großen Mann, der in Palästina gekreuzigt wurde … jenen gekreuzigten Sophisten …`, status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Mara bar Serapion', work: 'Brief an seinen Sohn (syrisch, British Library Add. 14658)', year: 'nach 73 (umstritten)', quote: `Was hatten die Juden davon, ihren weisen König hinzurichten? Seitdem ist ihr Königreich weggenommen.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'christen-kontrollierten-ueberlieferung',
          objection: `Das Grundproblem bleibt: Josephus und Tacitus wurden über tausend Jahre ausschließlich von christlichen Mönchen kopiert. Wer sagt dir, dass sie nicht überall nachgeholfen haben?`,
          objectionBy: 'Richard Carrier',
          answer: `Wenn christliche Schreiber systematisch „nachgeholfen" hätten, wäre das Ergebnis erstaunlich dürftig: zwei distanzierte Sätze bei Josephus und ein feindseliger Absatz bei Tacitus. Sie haben auch die heftigsten antichristlichen Passagen stehen lassen. Und wir können Christen bei ihrer Bearbeitung des Testimonium gerade **ertappen** – weil Origenes, Hieronymus und die arabische Überlieferung andere Formen bezeugen. Eine Kontrolle, die ihre eigenen Spuren so offen liegen lässt, ist keine Verschwörung. Zudem wurde der Talmud ausschließlich von Juden überliefert.`,
          questionsBack: [
            `Warum hätten Fälscher bei Tacitus einen so negativen Text über Christus erfunden?`,
            `Wenn Christen nach Belieben gefälscht haben – warum gibt es dann keine römische „Pilatusakte" in den Handschriften der Historiker?`,
          ],
        },
      ],
    },
    {
      id: 'talmud-anderer-jeschu',
      objection: `Die Talmud-Stellen über „Jeschu" sind wertlos: Sie sind Jahrhunderte später redigiert, widersprechen sich und meinen teils ganz andere Leute – einen Jeschu ben Pandera, einen Schüler des Jehoschua ben Perachja, der um 100 v. Chr. gelebt haben soll. Daraus einen Beleg für Jesus von Nazareth zu machen, ist Wunschdenken.`,
      objectionBy: 'Robert M. Price / Frank Zindler',
      answer: `Die Stellen sind spät, polemisch und chronologisch verworren – das gestehe ich zu, und ich baue Jesu Existenz nicht auf sie. Aber gerade als Polemik sind sie aufschlussreich: Die jüdische Gegenüberlieferung greift Jesu Geburt an (ein unehelicher Sohn eines Pandera), deutet seine Wunder als Zauberei und rechtfertigt seine Hinrichtung am Vorabend des Pessach. Sie bestreitet alles Mögliche – nur nie, dass er gelebt hat. Und die Pandera-Geschichte ist schon um 175 bezeugt: Kelsos hat sie von einem Juden gehört.`,
      detail: `**Peter Schäfer („Jesus im Talmud", 2007)** – ein jüdischer Judaist, kein Apologet – deutet die Jeschu-Stellen des Babylonischen Talmud als bewusste Gegenerzählungen zu den Evangelien: Sie setzen die christliche Erzählung voraus und kehren sie um. Das zeigt, dass die rabbinische Welt Jesus als reale, wenn auch verurteilte Person behandelte.

**Kelsos (bei Origenes, Contra Celsum I,28.32):** Ein Jude in Kelsos' Schrift (um 175) behauptet, Jesu Mutter sei von einem Soldaten namens Panthera schwanger geworden, Jesus habe in Ägypten Zauberkünste gelernt. Origenes widerlegt das – aber auch er streitet mit Kelsos nicht über Jesu Existenz, sondern über seine Deutung.

**Ehrlich:** Die Chronologie mancher Stellen (Jehoschua ben Perachja, um 100 v. Chr.) ist unhistorisch; die Talmudtexte sind für Details des Lebens Jesu unbrauchbar. Ihr Wert liegt allein darin, dass auch die schärfsten jüdischen Gegner von einem realen Jesus ausgingen.`,
      voices: [
        {
          person: 'origenes',
          role: 'als Apologet gegen Kelsos',
          text: `Origenes setzt sich ausführlich mit der jüdischen Panthera-Erzählung auseinander, die Kelsos überliefert. Er zeigt, dass sie die jungfräuliche Geburt voraussetzt und verleumderisch umdeutet. Für die heutige Debatte zentral: Weder Kelsos noch sein jüdischer Gewährsmann bezweifeln, dass Jesus lebte, lehrte, Wunder wirkte und hingerichtet wurde – sie bestreiten nur deren Sinn.`,
          sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,28.32–33', year: 'ca. 248', status: 'paraphrase', quote: `Zurückweisung der Panthera-Erzählung, die Kelsos von einem Juden übernommen hatte.` }],
        },
      ],
      sources: [
        { kind: 'fachliteratur', author: 'Peter Schäfer', work: 'Jesus im Talmud', year: '2007', quote: `Schäfer deutet die talmudischen Jeschu-Erzählungen als polemische Gegenerzählungen zu den Evangelien.`, status: 'paraphrase' },
        { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '43a', quote: `Am Vorabend des Pessach hängte man Jeschu … weil er Zauberei getrieben und Israel verführt habe.`, status: 'paraphrase', note: 'Unzensierte Handschriften; in vielen Drucken durch Zensur entfernt.' },
      ],
      questionsBack: [
        `Wenn Jesus nie existiert hätte – wäre das für jüdische Polemiker nicht das stärkste Argument gewesen? Warum benutzen sie es nie?`,
        `Warum sollte man einen Unbekannten für eine uneheliche Geburt und Zauberei angreifen, statt einfach zu sagen, es habe ihn nie gegeben?`,
      ],
    },
  ],
  questionsToAsk: [
    `Welche Tacitus-Experten halten Annalen 15,44 für gefälscht?`,
    `Warum würde ein christlicher Fälscher Jesus „den sogenannten Christus" nennen?`,
    `Wenn Christen die Überlieferung kontrollierten – warum sind die Ergebnisse so spärlich und teilweise feindselig?`,
    `Welches Gewicht hätten deiner Meinung nach Quellen, die die Existenz Jesu bestreiten? Kennst du eine einzige aus der Antike?`,
  ],
  avoid: [
    `Das Testimonium Flavianum in seiner vollen Form als echt zitieren („Josephus bezeugt, dass Jesus der Christus war und auferstand") – das verliert jede Debatte sofort.`,
    `Thallus, Phlegon oder Sueton als starke Belege anführen – zu unsicher.`,
    `Lange Listen „17 außerbiblischer Quellen" vortragen, ohne sie nach Gewicht zu sortieren.`,
    `Die „Pilatusakten" oder den „Lentulusbrief" verwenden – das sind spätere christliche Fälschungen bzw. Legenden.`,
  ],
  concessions: [
    `Das Testimonium Flavianum wurde nachweislich christlich überarbeitet.`,
    `Plinius und Sueton bezeugen vor allem die frühe Christenheit, nicht direkt Jesu Leben; Thallus ist zu unsicher.`,
    `Die Handschriftenüberlieferung von Josephus und Tacitus lief tatsächlich über christliche Schreiber – Vorsicht ist methodisch berechtigt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Robert E. Van Voorst', work: 'Jesus Outside the New Testament: An Introduction to the Ancient Evidence', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alice Whealey', work: 'Josephus on Jesus: The Testimonium Flavianum Controversy from Late Antiquity to Modern Times', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Schäfer', work: 'Jesus im Talmud', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gerd Theißen / Annette Merz', work: 'Der historische Jesus. Ein Lehrbuch', year: '1996 (4. Aufl. 2011)', status: 'paraphrase', note: 'Standardlehrbuch mit ausführlichem Quellenkapitel.' },
  ],
  difficulty: 2,
  tags: ['Josephus', 'Tacitus', 'Plinius', 'Testimonium Flavianum', 'Talmud', 'Quellenkritik'],
  related: [
    'historischer-jesus/jesus-hat-nie-existiert',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'neues-testament/nur-kopien-von-kopien',
  ],
};

export default claim;
