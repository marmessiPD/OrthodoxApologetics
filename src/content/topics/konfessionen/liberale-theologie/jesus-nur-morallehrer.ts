import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-nur-morallehrer',
  title: `„Jesus war ein großer Morallehrer, nicht Gott."`,
  proponents: [
    { name: 'Adolf von Harnack', role: 'Kirchenhistoriker (1851–1930)', work: 'Das Wesen des Christentums (1900)' },
    { name: 'Thomas Jefferson', role: 'US-Präsident, Aufklärer (1743–1826)', work: 'The Life and Morals of Jesus of Nazareth („Jefferson-Bibel", um 1820)' },
    { name: 'Leo Tolstoi', role: 'Schriftsteller (1828–1910)', work: 'Das Reich Gottes ist in euch (1894)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC (Agnostiker)', work: 'How Jesus Became God (2014)' },
  ],
  steelman: `Die Bergpredigt ist der Höhepunkt der Ethik der Menschheit: Feindesliebe, Vergebung, Barmherzigkeit mit den Armen, die Goldene Regel. Darin sind sich Christen, Juden, Muslime, Hindus und Agnostiker einig – Gandhi verehrte Jesus, ohne Christ zu werden. Die Lehre von der Gottheit Christi dagegen ist eine spätere Entwicklung: Der historische Jesus verkündete das Reich Gottes und den Vater, nicht sich selbst. Harnack formulierte es präzise: Nicht der Sohn, sondern allein der Vater gehört in das Evangelium, wie Jesus es verkündigt hat. Erst Paulus, Johannes und die griechische Philosophie der Kirchenväter machten aus dem Rabbi aus Nazareth einen präexistenten Gott – das Dogma ist ein Werk des griechischen Geistes auf dem Boden des Evangeliums. Wer Jesus als großen Lehrer ehrt, nimmt ihn ernster als jene, die ihn mit Dogmen zudecken.`,
  biblical: {
    summary: `Jesus lehrte nicht nur Ethik, sondern beanspruchte für **sich selbst** göttliche Autorität: Er **vergab Sünden** – „Wer kann Sünden vergeben als allein Gott?" (Mk 2,5–7); er stellte sein Wort über die Tora („Ich aber sage euch", Mt 5,22–44); er sagte: „Ehe denn Abraham ward, bin ich" (Joh 8,58), worauf man ihn steinigen wollte; „Ich und der Vater sind eins" (Joh 10,30); niemand kenne den Vater außer dem Sohn (Mt 11,27); vor dem Hohen Rat bekannte er sich als der Menschensohn, der zur Rechten der Macht sitzen und mit den Wolken kommen wird – und wurde der Gotteslästerung beschuldigt (Mk 14,61–64). Er nahm Anbetung an (Mt 14,33; Joh 20,28). Ein bloßer Morallehrer redet nicht so. Und die älteste christliche Überlieferung (Phil 2,6–11; 1 Kor 8,6) bezeugt die Verehrung Jesu als Herr schon wenige Jahre nach Ostern.`,
    detail: `**Mk 2,5–7:** Jesus vergibt einem Gelähmten Sünden, die nicht gegen ihn persönlich begangen wurden. Die Schriftgelehrten verstehen genau: Das ist ein Anspruch, an Gottes Stelle zu handeln.

**Mk 14,61–64:** Auf die Frage des Hohenpriesters „Bist du der Christus, der Sohn des Hochgelobten?" antwortet Jesus: „Ich bin's", und verbindet Ps 110,1 mit Dan 7,13. Der Hohepriester zerreißt sein Gewand – Gotteslästerung. Dies steht im ältesten Evangelium, nicht erst bei Johannes.

**Mt 11,27:** „Niemand kennt den Sohn denn nur der Vater; und niemand kennt den Vater denn nur der Sohn" – ein Wort aus der Logienquelle (Q), die Kritiker gern für besonders alt halten.

**Phil 2,6–11 und 1 Kor 8,6:** Paulus zitiert um die Mitte der 50er-Jahre einen Hymnus und eine Bekenntnisformel, die Jesus in die Identität des einen Gottes einbeziehen (Jes 45,23 wird auf Jesus angewandt: „dass sich beugen sollen alle Knie"). Das ist keine späte Hellenisierung, sondern frühe jüdisch-christliche Frömmigkeit.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '2,5–7', quote: `Da aber Jesus ihren Glauben sah, sprach er zu dem Gichtbrüchigen: Mein Sohn, deine Sünden sind dir vergeben. Es waren aber etliche Schriftgelehrte, die saßen allda und gedachten in ihrem Herzen: Wie redet dieser solche Gotteslästerung? Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '14,61–64', quote: `… Bist du Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken. Da zerriß der Hohepriester seinen Rock und sprach: Was bedürfen wir weiter Zeugen? Ihr habt gehört die Gotteslästerung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,58–59', quote: `Jesus sprach zu ihnen: Wahrlich, wahrlich ich sage euch: Ehe denn Abraham ward, bin ich. Da hoben sie Steine auf, daß sie auf ihn würfen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '11,27', quote: `Alle Dinge sind mir übergeben von meinem Vater. Und niemand kennt den Sohn denn nur der Vater; und niemand kennt den Vater denn nur der Sohn und wem es der Sohn will offenbaren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,9–11', quote: `Darum hat ihn auch Gott erhöht und hat ihm einen Namen gegeben, der über alle Namen ist, daß in dem Namen Jesu sich beugen sollen aller derer Kniee, die im Himmel und auf Erden und unter der Erde sind, und alle Zungen bekennen sollen, daß Jesus Christus der HERR sei, zur Ehre Gottes, des Vaters.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt mit Nizäa: Jesus Christus ist „Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater". Seine Ethik ist untrennbar von seiner Person: Er lehrt nicht nur, wie man lebt, sondern schenkt das neue Leben, indem er die menschliche Natur in sich heilt. Athanasius: „Er wurde Mensch, damit wir vergöttlicht würden." Ein bloßer Lehrer könnte zeigen, was gut ist; nur der menschgewordene Gott kann den Menschen von Tod und Verderbnis befreien und ihm die Kraft geben, die Bergpredigt zu leben.`,
    detail: `**Athanasius gegen die Reduktion:** Der arianische Streit ging genau um die Frage, ob Christus ein erhabenes Geschöpf oder wahrer Gott ist. Athanasius’ Argument: Nur Gott kann erlösen. Wäre der Sohn ein Geschöpf, so hätte er uns nicht mit Gott vereinen können; „er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54).

**Die Ethik setzt die Gnade voraus:** Die koptische Kirche liest die Bergpredigt nicht als bloßes Moralprogramm, sondern als Beschreibung des Lebens der Getauften, die durch den Heiligen Geist in Christus leben. Ohne die Gnade des menschgewordenen Gottes bliebe die Feindesliebe ein unerreichbares Ideal.

**Harnacks These und die Väter:** Die „Hellenisierungsthese" verkennt, dass die Väter griechische Begriffe benutzten, um die biblische Botschaft gegen griechische Philosophie zu verteidigen: Das Wort *homoousios* widersprach gerade dem platonischen Denken, das zwischen dem höchsten Gott und der Welt Mittelwesen einschob.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa', year: '325', quote: `… Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater.`, original: `θεὸν ἐκ θεοῦ, φῶς ἐκ φωτός, θεὸν ἀληθινὸν ἐκ θεοῦ ἀληθινοῦ, γεννηθέντα, οὐ ποιηθέντα, ὁμοούσιον τῷ πατρί`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  quickAnswer: `Ein großer Morallehrer sagt nicht: „Deine Sünden sind dir vergeben" (Mk 2,5), „Ehe Abraham ward, bin ich" (Joh 8,58) oder „Ihr werdet den Menschensohn zur Rechten der Macht sitzen sehen" (Mk 14,62). Wer so redet, ist entweder ein Lügner, ein Wahnsinniger – oder der, der er zu sein beansprucht. Ein guter Lehrer, der sich fälschlich für Gott hält, wäre kein guter Lehrer. Und die frühesten Christen beteten Jesus schon wenige Jahre nach Ostern als Herrn an (Phil 2,6–11).`,
  keyPoints: [
    `**Jesu Anspruch ist untrennbar von seiner Lehre:** Sündenvergebung (Mk 2,5–7), „Ich aber sage euch", „Ich bin" (Joh 8,58), Menschensohn zur Rechten Gottes (Mk 14,62).`,
    `**Das Trilemma (C. S. Lewis):** Lügner, Wahnsinniger oder Herr – die Option „nur guter Lehrer" steht nicht offen.`,
    `**Die vierte Option „Legende" scheitert:** Die Anbetung Jesu ist sehr früh bezeugt (Phil 2,6–11; 1 Kor 8,6; Hurtado, Bauckham) – keine späte Erfindung.`,
    `**Harnacks Jesus** war, wie Albert Schweitzer und George Tyrrell zeigten, ein Spiegelbild des liberalen Protestantismus des 19. Jahrhunderts.`,
    `**Nur der menschgewordene Gott erlöst:** Eine Ethik ohne Erlöser bleibt ein unerreichbares Ideal (Athanasius).`,
  ],
  argument: {
    name: 'Das Trilemma (Lügner, Wahnsinniger oder Herr)',
    summary: 'Jesu Selbstanspruch schließt die Kategorie „bloßer guter Morallehrer" aus.',
    premises: [
      {
        text: 'P1: Jesus beanspruchte göttliche Autorität und Identität (Sündenvergebung, Präexistenz, Sitzen zur Rechten Gottes, Annahme von Anbetung).',
        support: `Mk 2,5–7; 14,61–64 (ältestes Evangelium); Mt 11,27 (Logienquelle); Joh 8,58; 10,30; 20,28. Der Anspruch ist in mehreren unabhängigen Überlieferungsschichten bezeugt.`,
      },
      {
        text: 'P2: Wer einen solchen Anspruch erhebt, ist entweder bewusst unwahrhaftig, im Wahn befangen oder sagt die Wahrheit.',
        support: `Eine vierte Möglichkeit („er hat es nie gesagt") betrifft nicht die Logik, sondern die Quellen – sie wird historisch beantwortet (siehe Dialog).`,
      },
      {
        text: 'P3: Ein bewusster Betrüger oder ein Wahnsinniger in Bezug auf die eigene Gottheit ist kein großer Morallehrer.',
        support: `Die Tiefe, Klarheit und Demut der Lehre Jesu sowie sein Tod für diese Wahrheit sprechen gegen Betrug und Wahn – das räumen gerade jene ein, die ihn als großen Lehrer ehren.`,
        sources: [
          { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch II, Kap. 3', year: '1952', quote: `Ein Mensch, der nur ein Mensch wäre und solche Dinge sagte wie Jesus, wäre kein großer Morallehrer. Er wäre entweder ein Irrer – auf einer Stufe mit einem, der sagt, er sei ein pochiertes Ei – oder er wäre der Teufel der Hölle. Du musst deine Wahl treffen.`, original: `A man who was merely a man and said the sort of things Jesus said would not be a great moral teacher. He would either be a lunatic — on a level with the man who says he is a poached egg — or else he would be the Devil of Hell. You must make your choice.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
    ],
    conclusion: 'Also ist Jesus nicht „nur ein großer Morallehrer": Entweder man lehnt ihn ab – oder man erkennt ihn als Herrn und Gott an (Joh 20,28).',
  },
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Formulierer des Trilemmas',
      text: `Lewis wollte, wie er sagte, verhindern, dass jemand die „wirklich törichte" Bemerkung macht, man könne Jesus als großen Morallehrer annehmen, aber seinen Anspruch, Gott zu sein, ablehnen. Genau das könne man nicht sagen. Wer behauptet, Sünden zu vergeben, die gegen andere begangen wurden, handle entweder wie Gott oder mit einer Anmaßung, die alles Maß sprengt. Jesus habe uns die Möglichkeit, ihn als bloßen menschlichen Lehrer zu betrachten, nicht offengelassen – „das war nicht seine Absicht".`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 3 „Die schockierende Alternative"', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'chesterton',
      role: 'als Essayist des Paradoxons',
      text: `Chesterton weist in „Der unsterbliche Mensch" darauf hin, dass gerade die größten Lehrer der Menschheit – Buddha, Konfuzius, Sokrates – nie beanspruchten, Gott zu sein. Je weiser ein Mensch ist, desto weniger neigt er zu diesem Anspruch; erhoben wird er sonst eher von Wahnsinnigen. Dass ausgerechnet der Lehrer der Bergpredigt ihn erhob, ist das große Paradox der Geschichte – und zwingt zur Entscheidung.`,
      sources: [{ kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Everlasting Man (Der unsterbliche Mensch)', ref: 'Teil II', year: '1925', status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler der frühen Christologie',
      text: `Bauckham zeigt, dass die frühesten Christen Jesus in die Identität des einen Gottes Israels einbezogen: Sie wandten Texte, die im Alten Testament ausschließlich von JHWH sprechen, auf Jesus an (Phil 2,10–11 mit Jes 45,23; 1 Kor 8,6 mit dem Schma). Das geschah im jüdischen Monotheismus, nicht im griechischen Polytheismus – und sehr früh. Die These, die Gottheit Jesu sei eine späte Hellenisierung, ist damit historisch unhaltbar.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'hurtado',
      role: 'als Erforscher der frühen Christusverehrung',
      text: `Hurtado dokumentiert, dass Jesus in den ersten Jahren nach Ostern in jüdisch-christlichen Gemeinden angebetet wurde – mit Gebeten, Hymnen, Anrufung seines Namens, Taufe und Herrenmahl in seinem Namen („Maranatha", 1 Kor 16,22, ist ein aramäischer Gebetsruf an Jesus). Diese „Explosion" der Verehrung ist kein langsamer Prozess über Generationen, sondern ein frühes Phänomen, das eine Erklärung verlangt.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'vierte-option-legende',
      objection: `„Das Trilemma ist ein falsches Dilemma. Es gibt eine vierte Option: Legende. Jesus hat das alles nie gesagt; die Kirche hat es ihm später in den Mund gelegt."`,
      objectionBy: 'Bart Ehrman',
      answer: `Gut – dann ist die Frage historisch. Aber der Anspruch Jesu steht nicht nur bei Johannes, sondern im ältesten Evangelium (Mk 2; 14) und in der Logienquelle (Mt 11,27). Und schon Paulus zitiert um 50–55 Hymnen und Formeln, die Jesus als präexistenten Herrn anbeten (Phil 2; 1 Kor 8,6) – nur etwa zwei Jahrzehnte nach der Kreuzigung, unter Juden, die nie einen Menschen vergöttert hätten. Für eine Legendenbildung ist das viel zu früh.`,
      questionsBack: [`Wie erklärst du, dass jüdische Monotheisten wenige Jahre nach Jesu Tod zu ihm beteten (1 Kor 16,22: „Maranatha")?`],
      followUps: [
        {
          id: 'paulus-war-hellenist',
          objection: `„Paulus war ein hellenistischer Jude aus Tarsus. Er hat Jesus mit Mysterienkulten verschmolzen."`,
          objectionBy: 'Liberaler Religionsgeschichtler',
          answer: `Paulus war ein strenger Pharisäer (Phil 3,5), und er sagt ausdrücklich, dass er das Bekenntnis von 1 Kor 15,3–5 „empfangen" hat – aus der Jerusalemer Gemeinde. Er war mit Petrus und Jakobus in Kontakt (Gal 1,18–19; 2,9), und sie widersprachen seiner Christologie nicht. „Maranatha" ist Aramäisch – Sprache der palästinischen Urgemeinde, nicht hellenistischer Mysterien.`,
          followUps: [
            {
              id: 'ehrman-erhoehung',
              objection: `„Die frühesten Christen hielten Jesus für einen Menschen, der bei der Auferstehung zu Gott erhöht wurde (Röm 1,4; Apg 2,36). Erst später machte man ihn präexistent."`,
              objectionBy: 'Bart Ehrman',
              answer: `Dieselben Briefe, die von der Erhöhung sprechen, sprechen auch von der Präexistenz: Phil 2,6 („in göttlicher Gestalt"), 1 Kor 8,6 („durch den alle Dinge sind"), Gal 4,4 („Gott sandte seinen Sohn"). Für Paulus schließt sich das nicht aus: Der präexistente Sohn wird nach seiner Erniedrigung als Mensch erhöht und offenbart. Röm 1,3–4 spricht von der Einsetzung „in Kraft", nicht vom Beginn der Gottessohnschaft.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '1,3–4', quote: `… von seinem Sohn, der geboren ist aus dem Samen Davids nach dem Fleisch und kräftig erwiesen als ein Sohn Gottes nach dem Geist, der da heiligt, seit der Zeit, da er auferstanden ist von den Toten.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'harnack-nur-der-vater',
      objection: `„Harnack hat es auf den Punkt gebracht: Nicht der Sohn, sondern allein der Vater gehört in das Evangelium, wie Jesus es verkündigt hat."`,
      objectionBy: 'Adolf von Harnack',
      answer: `Jesus verkündigte den Vater – aber er verkündigte ihn als **sein** Vater und beanspruchte, ihn allein wirklich zu kennen und zu offenbaren (Mt 11,27). „Niemand kommt zum Vater denn durch mich" (Joh 14,6). Man kann Jesu Botschaft vom Vater nicht von seinem Anspruch, der Sohn zu sein, trennen. Harnacks Satz ist eine Auswahl, keine Zusammenfassung.`,
      sources: [
        { kind: 'gegner', author: 'Adolf von Harnack', work: 'Das Wesen des Christentums', year: '1900', quote: `Nicht der Sohn, sondern allein der Vater gehört in das Evangelium, wie es Jesus verkündigt hat, hinein.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'tyrrell-brunnen',
          objection: `„Aber Harnack war ein großer Historiker! Sein Bild beruht auf gründlicher Quellenkritik."`,
          objectionBy: 'Liberaler Theologe',
          answer: `Ein großer Historiker, ja – und doch zeigte schon sein Zeitgenosse George Tyrrell, dass Harnacks Christus nur das Spiegelbild eines liberalen protestantischen Gesichts sei, gesehen auf dem Grund eines tiefen Brunnens. Albert Schweitzer wies in seiner Geschichte der Leben-Jesu-Forschung nach, dass jede Epoche sich ihren eigenen Jesus schuf. Der „bloße Morallehrer" ist ein Produkt des 19. Jahrhunderts, nicht der Quellen.`,
          sources: [
            { kind: 'fachliteratur', author: 'George Tyrrell', work: 'Christianity at the Cross-Roads', year: '1909', status: 'paraphrase', quote: `Der Christus, den Harnack durch neunzehn Jahrhunderte katholischer Finsternis zurückblickend sieht, ist nur das Spiegelbild eines liberal-protestantischen Gesichts, gesehen auf dem Grund eines tiefen Brunnens.` },
            { kind: 'fachliteratur', author: 'Albert Schweitzer', work: 'Geschichte der Leben-Jesu-Forschung', year: '1906/1913', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'hellenisierung',
              objection: `„Das Dogma der Gottheit Christi ist ein Werk des griechischen Geistes auf dem Boden des Evangeliums – Philosophie, nicht Jesus."`,
              objectionBy: 'Adolf von Harnack',
              answer: `Die Väter benutzten griechische Begriffe, um biblischen Glauben **gegen** griechische Philosophie zu verteidigen. Arius war der „Hellenist": Er dachte platonisch an ein Mittelwesen zwischen Gott und Welt. Athanasius bestand mit dem Wort *homoousios* darauf, dass in Christus Gott selbst kommt – eine Vorstellung, die jeder griechische Philosoph absurd fand. Jaroslav Pelikan nannte das eine „Enthellenisierung" der Theologie.`,
              sources: [
                { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1', year: '1971', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ethik-genuegt',
      objection: `„Ist es nicht egal, ob Jesus Gott war? Entscheidend ist, dass wir lieben, vergeben und den Armen helfen. Das ist das wahre Christentum."`,
      objectionBy: 'Liberaler Pfarrer',
      answer: `Die Liebe ist entscheidend – aber woher nehmen wir die Kraft dazu? Die Bergpredigt fordert, Feinde zu lieben und vollkommen zu sein wie der Vater (Mt 5,48). Niemand schafft das aus eigener Kraft. Wenn Jesus nur Lehrer war, bleibt uns ein unerreichbares Ideal und ein schlechtes Gewissen. Wenn er Gott ist, der Mensch wurde, starb und auferstand, dann schenkt er durch seinen Geist das neue Leben, das die Bergpredigt beschreibt. Das ist der Unterschied zwischen einem Gesetz und einem Evangelium.`,
      followUps: [
        {
          id: 'gandhi-ehrte-jesus',
          objection: `„Gandhi verehrte Jesus und lebte die Bergpredigt besser als viele Christen – ohne an seine Gottheit zu glauben."`,
          objectionBy: 'Religiöser Pluralist',
          answer: `Gandhis Hochachtung vor der Bergpredigt ehrt ihn, und viele Christen sollten sich davon beschämen lassen. Aber Gandhi hat Jesus nach seinen eigenen Maßstäben ausgewählt – die Bergpredigt ohne den, der sie sprach. Jesus selbst stellt die Frage nicht „Was hältst du von meiner Lehre?", sondern „Wer sagt ihr, dass ich sei?" (Mt 16,15). Diese Frage beantwortet die Ethik allein nicht.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '16,15–16', quote: `Er sprach zu ihnen: Wer sagt denn ihr, daß ich sei? Da antwortete Simon Petrus und sprach: Du bist Christus, des lebendigen Gottes Sohn!`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Würdest du einen Menschen, der behauptet, Sünden gegen andere zu vergeben und vor Abraham gelebt zu haben, einen „guten Lehrer" nennen?`,
    `Wie erklärst du, dass Juden wenige Jahre nach Jesu Tod zu ihm beteten?`,
    `Woher stammt dein Bild von Jesus als „bloßem Lehrer" – aus welcher Quelle?`,
    `Was antwortest du auf Jesu Frage: „Wer sagt ihr, dass ich sei?"`,
  ],
  avoid: [
    `Das Trilemma nicht als „mathematischen Beweis" präsentieren. Es zwingt zur Entscheidung, ersetzt aber nicht die historische Prüfung der Quellen.`,
    `Nicht so tun, als habe die Ethik Jesu keine Bedeutung. Sie ist kostbar – nur nicht alles.`,
    `Harnack nicht als Ungläubigen abtun; er war ein ernster Gelehrter. Kritisiere seine Methode.`,
  ],
  concessions: [
    `Das Trilemma ist nur so stark wie die historische Zuverlässigkeit der Worte Jesu; deshalb muss man die vierte Option (Legende) ernst nehmen und historisch beantworten.`,
    `Die volle Formulierung der Trinitäts- und Zwei-Naturen-Lehre ist eine Entfaltung der Konzilien – der Inhalt aber ist im NT angelegt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Pardon, ich bin Christ (Mere Christianity)', year: '1952', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'How on Earth Did Jesus Become a God?', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Adolf von Harnack', work: 'Das Wesen des Christentums', year: '1900', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gottheit Christi', 'Trilemma', 'Harnack', 'C. S. Lewis', 'frühe Christologie', 'liberale Theologie'],
  related: ['historischer-jesus/gottheit-jesu-spaet-erfunden', 'islam-gottheit-christi/jesus-sagte-nie-ich-bin-gott', 'pluralismus/alle-lehren-goldene-regel', 'liberale-theologie/entmythologisierung'],
};

export default claim;
