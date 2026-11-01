import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'psalm-22-wie-ein-loewe',
  title: `„Psalm 22,17 sagt ‚wie ein Löwe', nicht ‚sie haben durchbohrt'."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel „Psalm 22" (2014)' },
    { name: 'Gerald Sigal', role: 'Jüdischer Gegenmissions-Autor', work: 'The Jew and the Christian Missionary (1981)' },
    { name: 'Rabbi Michael Skobac', role: 'Jews for Judaism (Toronto)', work: 'Vorträge zu „Mistranslations in Christian Bibles"' },
    { name: 'Jewish Publication Society', role: 'Jüdische Bibelübersetzung (NJPS, 1985)', work: 'Ps 22,17: „like lions [they maul] my hands and feet"' },
  ],
  steelman: `Der masoretische Text – der hebräische Text, den das Judentum mit größter Sorgfalt über Jahrhunderte bewahrt hat – liest in Ps 22,17 (christliche Zählung 22,16) **„ka'ari"**: „wie ein Löwe". Das passt genau in den Psalm, der die Feinde als Tiere schildert: Stiere (V. 13), „ein reißender und brüllender Löwe" (V. 14), Hunde (V. 17), „rette mich aus dem Rachen des Löwen" (V. 22). Dieselbe Wendung „ka'ari" steht in Jes 38,13, wo Hiskia klagt: „Wie ein Löwe, so zerbricht er alle meine Gebeine." Die christliche Übersetzung „sie haben durchbohrt" stützt sich auf die griechische Übersetzung und auf eine angebliche Lesart „ka'aru" – doch „ka'aru" ist kein hebräisches Wort; „graben" heißt „karu", ohne Aleph. Und selbst „graben" ist nicht „durchbohren": Man gräbt Brunnen, keine Hände. Bezeichnenderweise zitiert kein einziges Evangelium diesen Vers – erst spätere Christen haben ihn zur Kreuzigungsprophetie gemacht. Psalm 22 ist die Klage Davids, keine Vorhersage.`,
  biblical: {
    summary: `Die Lesart von Ps 22,17 ist textkritisch wirklich umstritten. Der masoretische Text hat „ka'ari" (wie ein Löwe); die älteste erhaltene hebräische Handschrift dieses Verses aus Nachal Chever (5/6HevPs, 1. Jh. n. Chr.) liest nach der Edition von Peter Flint „ka'aru" – eine Verbform. Die vorchristliche jüdische Septuaginta übersetzt „sie gruben" (ōryxan), die syrische Peschitta „sie durchbohrten", und auch die jüdischen Übersetzer Aquila und Symmachus (2. Jh. n. Chr.) sowie Hieronymus' Übersetzung aus dem Hebräischen setzen ein Verb voraus. Unabhängig von diesem Vers beschreibt Psalm 22 die Leiden Jesu in erstaunlicher Dichte: Verlassenheit (V. 2), Spott und Kopfschütteln (V. 8–9), Durst (V. 16), Verteilung der Kleider durch das Los (V. 19) – und mündet in die Umkehr der Völker zum HERRN (V. 28).`,
    detail: `**Die Zeugen im Überblick:**
- **Masoretischer Text** (Codex Aleppo, um 930; Codex Leningradensis, 1008): כָּאֲרִי – „wie ein Löwe".
- **5/6HevPs** (Nachal Chever, 1. Jh. n. Chr.): nach Peter Flints Lesung כארו – mit Waw am Ende, also ein Verb in der 3. Person Plural. Die Lesung wird diskutiert; einige Forscher halten sie für eine Schreibvariante von כרו („sie gruben").
- **Septuaginta** (vorchristlich, jüdisch): ὤρυξαν – „sie gruben".
- **Aquila** (2. Jh., jüdischer Proselyt, bewusst wörtlich und gegenüber christlichen Lesarten kritisch): in einer Ausgabe „sie entstellten", in einer anderen „sie banden".
- **Symmachus** (um 200): „als suchten sie zu binden".
- **Hieronymus**, Psalter „iuxta Hebraeos": „vinxerunt" (sie banden), in einem Teil der Handschriften „fixerunt" (sie durchbohrten).
- **Peschitta** (syrisch): „sie durchbohrten".
- Mehrere **mittelalterliche hebräische Handschriften** lesen כארו oder כרו.

**Das grammatische Problem:** „Wie ein Löwe meine Hände und meine Füße" hat kein Verb. Die jüdische NJPS-Übersetzung muss deshalb ein Verb in eckigen Klammern ergänzen: „like lions [they maul] my hands and feet". In Jes 38,13 steht das Verb dagegen ausdrücklich da („so zerbricht er").

**Zur Schreibung mit Aleph:** Die Einfügung eines Aleph als Vokalbuchstabe kommt im Hebräischen vor (z. B. וְקָאם statt וְקָם in Hos 10,14), besonders in der Orthographie der Qumran-Zeit. Waw und Jod sind in der herodianischen Quadratschrift kaum zu unterscheiden; eine Verwechslung in eine der beiden Richtungen ist die natürlichste Erklärung – ohne dass jemand absichtlich gefälscht hätte.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '22,17', quote: `Denn Hunde haben mich umgeben, und der Bösen Rotte hat sich um mich gemacht; sie haben meine Hände und Füße durchgraben.`, translation: 'Luther 1912 (Ps 22,17)', status: 'verbatim', note: 'Luther folgt der Verblesart; der masoretische Text liest „ka\'ari" (wie ein Löwe).' },
      { kind: 'bibel', work: 'Psalm', ref: '22,17 (masoretischer Text)', original: 'כִּי סְבָבוּנִי כְּלָבִים עֲדַת מְרֵעִים הִקִּיפוּנִי כָּאֲרִי יָדַי וְרַגְלָי', quote: `Denn Hunde haben mich umringt, eine Rotte von Übeltätern hat mich umzingelt, wie ein Löwe meine Hände und meine Füße.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'juedisch', work: 'Septuaginta, Psalm 21,17 (= Ps 22,17)', year: 'vorchristlich', quote: `Sie gruben meine Hände und Füße.`, original: 'ὤρυξαν χεῖράς μου καὶ πόδας', translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
      { kind: 'juedisch', work: 'Psalmenrolle aus Nachal Chever (5/6HevPs)', ref: 'Ps 22,17', year: '1. Jh. n. Chr.', quote: `Lesung nach Peter Flint: כארו – eine Verbform statt „wie ein Löwe".`, status: 'paraphrase', note: 'Ediert in: Discoveries in the Judaean Desert, Bd. 38 (2000). Die Lesung und ihre Deutung sind in der Forschung umstritten.' },
      { kind: 'bibel', work: 'Johannes', ref: '19,23–24', quote: `Die Soldaten … sprachen untereinander: Lasst uns ihn nicht zerteilen, sondern darum losen, wem er gehören soll – damit die Schrift erfüllt würde: Sie haben meine Kleider unter sich geteilt und über mein Gewand das Los geworfen.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben Psalm 22 von Anfang an als Prophetie auf die Passion gelesen – im Anschluss an Jesus selbst, der am Kreuz den ersten Vers betete (Mk 15,34). Justin legt Tryphon den ganzen Psalm aus und bezieht „sie gruben meine Hände und meine Füße" auf die Nägel der Kreuzigung (Dial. 97–106). Athanasius führt den Vers in „Über die Menschwerdung" als Beweis an, dass die Art des Todes Christi vorhergesagt war. Die koptische Kirche betet den Psalm nach der griechischen Überlieferung in ihrem Psalter und in der Karwoche.`,
    detail: `Für die Kirche hängt die Deutung von Psalm 22 nicht an einem einzigen Wort. Entscheidend ist das Gesamtbild: der Gerechte, der von Gott verlassen scheint, verspottet, durstig, entblößt, dessen Kleider verlost werden – und der danach Gottes Namen „seinen Brüdern" verkündet (V. 23; zitiert in Hebr 2,12), sodass „alle Enden der Erde" umkehren (V. 28). Origenes hat in seiner Hexapla die Lesarten von Aquila, Symmachus und Theodotion neben dem hebräischen Text und der Septuaginta aufbewahrt – ohne seine Arbeit wüssten wir heute nicht, wie die jüdischen Übersetzer des 2. Jahrhunderts diesen Vers lasen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '97,3–4; 98–106', year: 'um 160', quote: `„Sie gruben meine Hände und meine Füße" – damit sind die Nägel bezeichnet, die bei der Kreuzigung in seine Hände und Füße getrieben wurden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '35; 37', year: 'ca. 318', status: 'paraphrase', quote: `Athanasius zitiert Ps 22,17–19 als Vorhersage der Kreuzigung und der Verteilung der Kleider.` },
      { kind: 'bibel', work: 'Markus', ref: '15,34', quote: `Und zur neunten Stunde rief Jesus laut: Eloi, Eloi, lama sabachthani? Das heißt übersetzt: Mein Gott, mein Gott, warum hast du mich verlassen?`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der Fachwelt ist Ps 22,17 einer der meistdiskutierten Verse der Hebräischen Bibel. Viele Exegeten – jüdische wie christliche – halten „ka'ari" für schwierig, weil das Verb fehlt; andere verteidigen es als poetische Ellipse. Für eine Verbform sprechen die Septuaginta, die Lesung von 5/6HevPs und die alten Übersetzungen; welches Verb ursprünglich gemeint war („graben", „binden", „durchbohren", „verkürzen"), ist offen. Ein Konsens, dass der Vers ursprünglich „durchbohrt" lautete, besteht nicht.`,
    detail: `Ehrlich ist auch: Das Neue Testament zitiert Ps 22,17 nicht ausdrücklich. Die Evangelien zitieren V. 2 (Mk 15,34; Mt 27,46), V. 19 (Joh 19,24) und spielen auf V. 8–9 an (Mt 27,39.43). Der Hebräerbrief zitiert V. 23 (Hebr 2,12). Die Masora (ein mittelalterliches Verzeichnis, Ochla we-Ochla) soll vermerken, dass „ka'ari" zweimal vorkommt (Jes 38,13; Ps 22,17), und zwar „in zwei verschiedenen Bedeutungen" – das wird von christlichen Apologeten angeführt, ist aber vor Verwendung an der Quelle zu prüfen.`,
    sources: [
      { kind: 'gegner', author: 'Jewish Publication Society', work: 'Tanakh: The Holy Scriptures (NJPS)', ref: 'Ps 22,17', year: '1985', quote: `Like lions [they maul] my hands and feet.`, original: 'Like lions [they maul] my hands and feet.', status: 'verbatim', note: 'Die eckigen Klammern markieren ein ergänztes Verb.' },
      { kind: 'fachliteratur', author: 'Emanuel Tov', work: 'Textual Criticism of the Hebrew Bible', year: '1992; 3. Aufl. 2012', status: 'paraphrase', quote: `Standardwerk eines israelischen Textkritikers zur Methode, den masoretischen Text mit Qumran, Septuaginta und anderen Zeugen zu vergleichen.` },
      { kind: 'juedisch', work: 'Masora (Ochla we-Ochla)', status: 'unverified', quote: `„ka'ari" kommt zweimal mit zwei verschiedenen Bedeutungen vor.`, note: 'Häufig von Apologeten zitiert; Fundstelle in der Ausgabe von S. Frensdorff vor Verwendung prüfen.' },
    ],
  },
  quickAnswer: `Ja, der masoretische Text liest „wie ein Löwe". Aber die älteste hebräische Handschrift dieses Verses aus Nachal Chever liest eine Verbform, die jüdische Septuaginta übersetzte lange vor Jesus „sie gruben", und selbst die jüdischen Übersetzer Aquila und Symmachus lasen ein Verb. „Wie ein Löwe meine Hände und Füße" hat dagegen kein Verb – jüdische Übersetzungen müssen eins ergänzen. Vor allem: Psalm 22 hängt nicht an einem Wort – Verlassenheit, Spott, Durst, verloste Kleider und die Umkehr der Völker beschreiben das Kreuz auch ohne V. 17.`,
  keyPoints: [
    `**Die Textlage ist offen, nicht eindeutig:** Masoretischer Text „ka'ari" gegen Septuaginta, Nachal-Chever-Rolle und alte Übersetzungen mit Verb.`,
    `**Vorchristliche jüdische Zeugen** (Septuaginta) und **antichristlich gesinnte jüdische Übersetzer** (Aquila) lesen ein Verb – Christen haben die Verblesart nicht erfunden.`,
    `**Grammatik:** „Wie ein Löwe meine Hände und Füße" braucht ein ergänztes Verb (NJPS: „[they maul]").`,
    `**Niemand hat gefälscht:** Waw und Jod sind in der antiken Schrift fast gleich – eine Abschreibvariante ist die natürlichste Erklärung.`,
    `**Der ganze Psalm zählt:** V. 2 (Verlassenheit), V. 8–9 (Spott), V. 16 (Durst), V. 19 (Los um die Kleider), V. 28 (Völker kehren um).`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als Begründer der Textkritik (Hexapla)',
      text: `Origenes stellte in seiner Hexapla den hebräischen Text, eine griechische Umschrift, Aquila, Symmachus, die Septuaginta und Theodotion nebeneinander. Er wollte gerade im Gespräch mit Juden nur mit Texten argumentieren, die auch das Gegenüber anerkennt. Seine Arbeit ist der Grund, warum wir heute wissen, dass auch die jüdischen Übersetzer des 2. Jahrhunderts in Ps 22,17 ein Verb lasen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Hexapla (Fragmente zu Ps 21/22)', year: 'um 240', status: 'paraphrase' },
      ],
    },
    {
      person: 'hieronymus',
      role: 'als Übersetzer aus dem Hebräischen',
      text: `Hieronymus übersetzte den Psalter ein zweites Mal direkt aus dem Hebräischen und beriet sich dabei mit jüdischen Gelehrten. Er gab Ps 22,17 mit einem Verb wieder („vinxerunt", sie banden; in einem Teil der Überlieferung „fixerunt", sie durchbohrten). Auch seine hebräische Vorlage scheint also nicht „wie ein Löwe" verlangt zu haben – oder er hielt diese Lesart für unvollständig.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Psalterium iuxta Hebraeos', ref: 'Ps 21,17', year: 'um 392', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'im Gespräch mit Tryphon',
      text: `Justin legt Tryphon Psalm 22 Vers für Vers aus und zeigt, wie Verlassenheitsruf, Spott, Durchgraben von Händen und Füßen und das Losen um das Gewand auf die Kreuzigung passen. Er argumentiert nicht mit einem einzigen Vers, sondern mit dem Zusammenklingen vieler Einzelheiten, die auf David selbst nicht zutreffen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '97–106', year: 'um 160', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als Semitist',
      text: `Brown rät Christen, in der Debatte nicht zu behaupten, der masoretische Text sei gefälscht, und die Textlage nüchtern darzulegen: Die Verblesart ist alt und gut bezeugt, „ka'ari" ist grammatisch schwierig, und das Wort selbst ist nicht der Kern. Der Psalm insgesamt – vom Verlassenheitsruf bis zur weltweiten Anbetung – findet nach Brown nur in Jesus eine Erfüllung, die über Davids Erfahrung hinausgeht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als alexandrinischer Ausleger',
      text: `Für Athanasius gehört Psalm 22 zu den Zeugnissen, dass nicht nur die Tatsache, sondern auch die **Art** des Todes Christi vorhergesagt war: der Tod am Kreuz mit ausgebreiteten Händen. Er sieht darin auch einen tiefen Sinn: Am Kreuz breitet der Herr die Hände aus, um Juden und Heiden zu umfangen und zu sich zu ziehen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '25; 35; 37', year: 'ca. 318', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'christliche-faelschung',
      objection: `Der hebräische Text sagt eindeutig „ka'ari" – „wie ein Löwe". „Durchbohrt" ist eine christliche Fehlübersetzung, um Jesus in den Psalm hineinzulesen.`,
      objectionBy: 'Tovia Singer',
      answer: `Der masoretische Text liest „ka'ari", das stimmt. Aber die älteste hebräische Handschrift dieses Verses – die Rolle aus Nachal Chever aus dem 1. Jahrhundert – liest nach der wissenschaftlichen Edition eine Verbform. Die Septuaginta, von Juden vor Christus übersetzt, hat „sie gruben". Und Aquila und Symmachus, jüdische Übersetzer des 2. Jahrhunderts, die keine Freunde christlicher Deutungen waren, lasen ebenfalls ein Verb. Die Verblesart ist also nicht christlich, sondern alt und jüdisch bezeugt.`,
      questionsBack: [
        `Warum übersetzten jüdische Übersetzer vor Christus „sie gruben", wenn ihr Text „wie ein Löwe" lautete?`,
      ],
      followUps: [
        {
          id: 'kaaru-kein-wort',
          objection: `„Ka'aru" ist kein hebräisches Wort. „Sie gruben" heißt „karu", ohne Aleph. Die Rolle hat schlicht einen Schreibfehler.`,
          objectionBy: 'Tovia Singer',
          answer: `Ein Aleph als zusätzlicher Vokalbuchstabe kommt im Hebräischen vor – etwa „qa'm" statt „qam" in Hos 10,14 – und ist in der Schreibweise der Qumran-Zeit häufig. Ob die Rolle einen Fehler hat oder der spätere Text, kann man nicht durch Behauptung entscheiden: Waw und Jod sehen in der Schrift jener Zeit fast gleich aus. Entscheidend ist: Der Schreiber der Rolle schrieb eine Verbform, und die alten Übersetzungen bestätigen ein Verb.`,
          followUps: [
            {
              id: 'graben-nicht-durchbohren',
              objection: `Selbst „sie gruben" heißt nicht „sie durchbohrten". Man gräbt Brunnen und Gruben, nicht Hände.`,
              objectionBy: 'Gerald Sigal',
              answer: `Da hast du recht – wörtlich ist „graben" genauer; Luther übersetzt deshalb „durchgraben". Im Bild von Hunden und Übeltätern, die Hände und Füße anfallen, ist „aufgraben, aufreißen" eine naheliegende Erweiterung; die syrische Peschitta übersetzt „durchbohrten". Ich muss nicht auf „durchbohren" bestehen: „Sie rissen meine Hände und Füße auf" passt ebenso zu einer Kreuzigung.`,
              followUps: [
                {
                  id: 'lxx-christlich-ueberliefert',
                  objection: `Die Septuaginta-Handschriften sind von Christen abgeschrieben worden. Vielleicht haben sie „ōryxan" erst eingefügt.`,
                  objectionBy: 'Michael Skobac',
                  answer: `Dafür gibt es keinen Beleg – alle Überlieferungsstränge der Septuaginta lesen hier ein Verb, und die hebräische Rolle aus Nachal Chever sowie Aquila und Symmachus stützen es unabhängig. Ich unterstelle dir nicht, dass Juden den Text gefälscht hätten; bitte unterstelle umgekehrt den Christen nichts ohne Beweis. Lass uns die Zeugen wiegen, nicht Motive.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'loewen-im-psalm',
      objection: `Löwen kommen im Psalm mehrfach vor: V. 14 „wie ein reißender, brüllender Löwe", V. 22 „rette mich aus dem Rachen des Löwen". „Wie ein Löwe" in V. 17 passt perfekt ins Bild.`,
      objectionBy: 'Michael Skobac',
      answer: `Das ist das beste Argument für „ka'ari", und ich nehme es ernst. Aber der Satz „wie ein Löwe meine Hände und meine Füße" hat kein Verb – deshalb muss die jüdische NJPS-Übersetzung eins in Klammern ergänzen: „like lions [they maul] my hands and feet". Und selbst dann: Löwen, die Hände und Füße zerfleischen, beschreiben Verwundungen genau an den Stellen, an denen ein Gekreuzigter verwundet wird.`,
      followUps: [
        {
          id: 'poetische-ellipse',
          objection: `Hebräische Poesie lässt Verben oft weg. Das Verb „umringen" aus dem Satz davor wirkt weiter: „wie ein Löwe (umringen sie) meine Hände und Füße".`,
          objectionBy: 'Tovia Singer',
          answer: `Eine Ellipse ist möglich, und ich nenne deine Lesart nicht unmöglich. Aber Textkritik wägt: Auf der einen Seite eine verblose Wendung, die eine Ergänzung braucht; auf der anderen eine Verblesart, die von der ältesten hebräischen Handschrift und mehreren alten Übersetzungen bezeugt ist. Ehrlich gesagt ist die Frage unter Fachleuten offen – aber gerade deshalb ist „christliche Fälschung" das falsche Wort.`,
          questionsBack: [
            `Wenn die Lesart unter Fachleuten offen ist – ist es dann fair, von einer „christlichen Fälschung" zu sprechen?`,
          ],
        },
      ],
    },
    {
      id: 'nt-zitiert-nicht',
      objection: `Kein Evangelium zitiert Ps 22,17. Hätten die Evangelisten „durchbohrt" gelesen, hätten sie es zitiert. Diese Deutung ist eine spätere christliche Erfindung.`,
      objectionBy: 'Tovia Singer',
      answer: `Richtig, die Evangelien zitieren V. 17 nicht – und das spricht gegen den Vorwurf, sie hätten Einzelheiten der Kreuzigung aus dem Psalm erfunden. Sie zitieren V. 2 (der Verlassenheitsruf), V. 19 (das Los um das Gewand) und spielen auf V. 8–9 an (Spott, Kopfschütteln, „er hat auf Gott vertraut, der rette ihn"). Der Psalm beschreibt, was geschah, auch ohne V. 17.`,
      followUps: [
        {
          id: 'klagepsalm-keine-prophetie',
          objection: `Psalm 22 ist eine Klage Davids. Ein Klagepsalm ist keine Prophetie über einen künftigen Messias.`,
          objectionBy: 'Stuart Federow',
          answer: `Er beginnt als Klage – aber er endet mit Folgen, die weit über David hinausgehen: „Es werden gedenken und sich zum HERRN bekehren alle Enden der Erde, und vor ihm werden anbeten alle Geschlechter der Völker" (V. 28), und man wird „einem Volk, das geboren wird", verkünden, dass er es getan hat (V. 32). Davids persönliches Leiden hat nie die Völker zum Gott Israels geführt. Wie bei Ps 16 (Apg 2,29–31) übersteigt der Beter David selbst.`,
          followUps: [
            {
              id: 'voelker-allgemeine-hoffnung',
              objection: `Dass die Völker Gott anbeten, ist eine allgemeine Hoffnung der Psalmen – keine Folge des Leidens eines Einzelnen.`,
              objectionBy: 'Gerald Sigal',
              answer: `In Ps 22 folgt sie aber direkt aus der Rettung des Leidenden: Er wird gerettet, verkündet Gottes Namen „seinen Brüdern" (V. 23, zitiert in Hebr 2,12) – und daraufhin kehren die Enden der Erde um (V. 28). Leiden, Rettung, Verkündigung, Umkehr der Völker: Genau diese Abfolge ist geschichtlich geschehen. Von dem gekreuzigten Jesus aus haben sich die Völker dem Gott Israels zugewandt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'vorwurf-bibelfaelschung',
      objection: `Christen werfen Juden seit Jahrhunderten vor, die Bibel verfälscht zu haben. Das ist dieselbe alte Lüge, mit der man uns verfolgt hat.`,
      objectionBy: 'Michael Skobac',
      answer: `Ich werfe niemandem Fälschung vor, und ich bedaure, dass Christen das getan haben. Die Masoreten waren außerordentlich treue Abschreiber. Waw und Jod sind in der antiken Schrift fast gleich; eine Abschreibvariante ist die natürlichste Erklärung – so wie es in jeder Handschriftenüberlieferung Varianten gibt. Lass uns über Zeugen reden, nicht über Schuld.`,
      followUps: [
        {
          id: 'warum-nicht-masoreten',
          objection: `Wenn die Masoreten so treu sind – warum folgst du dann nicht ihrem Text?`,
          objectionBy: 'Tovia Singer',
          answer: `Treue heißt nicht, dass kein einziger Buchstabe je abweicht. Die Masoreten selbst haben an Hunderten von Stellen vermerkt, dass anders zu lesen als geschrieben ist (Ketiv und Qere). Die Textkritik vergleicht deshalb die ältesten Zeugen miteinander – das tun auch jüdische Forscher wie der israelische Textkritiker Emanuel Tov. In den allermeisten Fällen folge ich dem masoretischen Text gern; an dieser Stelle sprechen ältere Zeugen für eine andere Lesart.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Verb muss man ergänzen, damit „wie ein Löwe meine Hände und meine Füße" einen Satz ergibt?`,
    `Warum lasen die vorchristliche Septuaginta und der jüdische Übersetzer Aquila hier ein Verb?`,
    `Auf wen außer Jesus passt die Abfolge von Psalm 22: Verlassenheit, Spott, Durst, verloste Kleider – und danach die Umkehr der Völker?`,
    `Ist es fair, bei einer unter Fachleuten offenen Lesart von „Fälschung" zu sprechen?`,
  ],
  avoid: [
    `Nicht behaupten, die Masoreten oder „die Rabbiner" hätten den Text absichtlich von „durchbohrt" zu „Löwe" geändert. Das ist unbeweisbar und knüpft an antijüdische Polemik an.`,
    `Nicht behaupten, die Qumran-Rolle lese eindeutig „durchbohrt". Sie liest nach Flint „ka'aru", dessen Bedeutung umstritten ist; außerdem stammt sie aus Nachal Chever, nicht aus den Höhlen von Qumran selbst.`,
    `Nicht so tun, als stünde das ganze Argument für Jesus in Psalm 22 auf diesem einen Wort.`,
  ],
  concessions: [
    `Der masoretische Text liest „ka'ari" (wie ein Löwe); das ist eine ernsthafte, gut bezeugte Lesart.`,
    `Die genaue Bedeutung der Verblesart („graben", „binden", „durchbohren") ist unsicher; „durchbohren" ist eine Deutung.`,
    `Das Neue Testament zitiert Ps 22,17 nicht ausdrücklich.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter W. Flint', work: 'The Dead Sea Psalms Scrolls and the Book of Psalms', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Emanuel Tov', work: 'Textual Criticism of the Hebrew Bible', year: '3. Aufl. 2012', status: 'paraphrase' },
    { kind: 'gegner', author: 'Tovia Singer', work: 'Let\'s Get Biblical!', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Psalm 22', 'Textkritik', 'Nachal Chever', 'Septuaginta', 'Masoretischer Text', 'Kreuzigung'],
  related: [
    'judentum-messias/jesaja-53-ist-israel',
    'neues-testament/nur-kopien-von-kopien',
    'prophetie/jesus-inszenierte-erfuellung',
  ],
};

export default claim;
