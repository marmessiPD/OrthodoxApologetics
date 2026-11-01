import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jainismus-ahimsa',
  title: `„Der Jainismus mit Ahimsa und ohne Schöpfergott ist ethisch überlegen."`,
  proponents: [
    { name: 'Padmanabh S. Jaini', role: 'Jain-Gelehrter und Indologe, University of California, Berkeley (1923–2021)', work: 'The Jaina Path of Purification (1979)' },
    { name: 'Jeffery D. Long', role: 'Religionswissenschaftler, Elizabethtown College', work: 'Jainism: An Introduction (2009)' },
    { name: 'Satish Kumar', role: 'Ehemaliger Jain-Mönch, Friedensaktivist, Herausgeber der Zeitschrift „Resurgence"', work: 'No Destination (Autobiografie, 1978)' },
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftspopularisator (1934–1996)', work: 'Cosmos (1980) – zitiert Jinasenas Absage an einen Schöpfergott' },
  ],
  steelman: `Der Jainismus, dessen 24. „Furtbereiter" (Tirthankara) Mahavira im 6. oder 5. Jahrhundert v. Chr. lebte, lehrt die konsequenteste Gewaltlosigkeit der Religionsgeschichte: *Ahimsa* gegenüber allen Lebewesen – Menschen, Tieren, Insekten, ja selbst Pflanzen und Elementarwesen. Jains leben vegetarisch, meiden Berufe, die Leben zerstören, betreiben Tierhospitäler; Mönche fegen den Weg vor sich, um keine Insekten zu zertreten. Dazu kommen *Aparigraha* (Besitzlosigkeit) und *Anekantavada* – die Lehre von der Vielseitigkeit der Wirklichkeit, die intellektuelle Demut verlangt. Ohne Schöpfergott gibt es kein Theodizee-Problem, keine willkürlichen göttlichen Befehle, keine heiligen Kriege, keine „Erwählten". Jeder ist für sein Karma selbst verantwortlich und kann sich durch eigene Anstrengung befreien. Das Christentum dagegen erlaubt Fleischessen, kennt Tieropfer, göttlich befohlene Kriege, ein blutiges Kreuz als Mittelpunkt und eine Hölle. Gandhi lernte seine Gewaltlosigkeit auch von dem Jain Raychandbhai. Welche Ethik ist da wohl reiner?`,
  biblical: {
    summary: `Die Bibel kennt Gottes Fürsorge für alle Geschöpfe: „Der HERR ist allen gütig und erbarmt sich aller seiner Werke" (Ps 145,9); „Der Gerechte erbarmt sich seines Viehes" (Spr 12,10); Gott sorgt sich um Ninive „dazu auch viele Tiere" (Jona 4,11). Die ursprüngliche Schöpfung ist friedlich und pflanzlich ernährt (Gen 1,29–30), und die Vollendung kehrt zu diesem Frieden zurück (Jes 11,6–9). Zugleich hat der Mensch als Bild Gottes eine besondere Würde (Gen 1,27; 9,6). Das Heil ist nicht Selbstbefreiung, sondern Gottes Gabe, die den Menschen zur Mitwirkung befähigt (Eph 2,8–10; Phil 2,12–13).`,
    detail: `**Die Erlaubnis von Gen 9,3** (Fleischnahme nach der Flut) steht im Zusammenhang einer gefallenen Welt und wird sofort begrenzt: kein Blut genießen (Gen 9,4) – Achtung vor dem Leben als Gottes Eigentum. Jesus verschärft die Ethik gegenüber Menschen radikal: Feindesliebe (Mt 5,44), keine Vergeltung (Mt 5,39), Gebet für die eigenen Henker (Lk 23,34).

**Leid ist nicht immer Folge eigener Schuld:** Auf die Frage, wer gesündigt habe, dass ein Mann blind geboren wurde, antwortet Jesus: „Es hat weder dieser gesündigt noch seine Eltern" (Joh 9,3). Damit widerspricht er der Logik, die jedes Leiden als verdiente Folge früherer Taten deutet.

**Das Gute gründet in einer Person:** Gott ist die Liebe (1 Joh 4,8) – darum hat Liebe den Vorrang vor bloßer Schadensvermeidung. Christliche Ethik will nicht nur nicht schaden, sondern sich verschenken (Joh 15,13).`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '145,9', quote: `Der HERR ist allen gütig und erbarmt sich aller seiner Werke.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jona', ref: '4,11', quote: `Und mich sollte nicht jammern Ninives, solcher großen Stadt, in welcher sind mehr denn hundertundzwanzigtausend Menschen, die nicht wissen Unterschied, was rechts oder links ist, dazu auch viele Tiere?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '9,6', quote: `Wer Menschenblut vergießt, des Blut soll auch durch Menschen vergossen werden; denn Gott hat den Menschen zu seinem Bilde gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '9,3', quote: `Jesus antwortete: Es hat weder dieser gesündigt noch seine Eltern; sondern daß die Werke Gottes offenbar würden an ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '2,8–9', quote: `Denn aus Gnade seid ihr selig geworden durch den Glauben, und dasselbige nicht aus euch, Gottes Gabe ist es; nicht aus den Werken, auf daß sich nicht jemand rühme.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche lebt eine Askese, die Jains vertraut vorkommen dürfte: An rund 200 Tagen im Jahr fasten Kopten weitgehend ohne tierische Produkte. Der Grund ist jedoch nicht, dass jedes Töten eines Tieres oder einer Pflanze Karma bindet, sondern Freiheit von der Herrschaft der Begierden, Solidarität mit den Armen und Vorbereitung auf die Gemeinschaft mit Gott. Die Schöpfung ist gut, weil der gute Gott sie durch sein Wort geschaffen hat (Athanasius, *De Incarnatione* 1–3); der Mensch ist ihr Priester, nicht ihr Gefangener. Das Heil ist Vereinigung mit Gott durch Christus in Synergie von Gnade und freiem Willen – weder bloße Selbsterlösung noch Untätigkeit.`,
    detail: `Die Wüstenväter Ägyptens, angefangen beim hl. Antonius, lebten in großer Nähe zu Tieren; viele Erzählungen berichten, wie wilde Tiere ihnen dienten – ein Zeichen der wiederhergestellten paradiesischen Ordnung. Isaak der Syrer, dessen Schriften in der orientalischen Christenheit hochgeschätzt werden, beschreibt das „barmherzige Herz" als ein Herz, das für die ganze Schöpfung brennt, für Menschen, Vögel, Tiere – ja sogar für die Feinde der Wahrheit betet. Christliche Barmherzigkeit kennt also die Weite der Ahimsa, gründet sie aber in der Liebe Gottes.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '1–3', quote: `Die Welt ist nicht von selbst entstanden und nicht aus ewiger Materie gebildet, sondern vom guten Gott durch sein Wort aus dem Nichts geschaffen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Reden', ref: 'Rede 71 (Zählung nach Wensinck; in anderen Ausgaben Rede 81)', quote: `Ein barmherziges Herz ist ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel und Tiere – und unaufhörlich für alle betet.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Fastenpraxis der koptisch-orthodoxen Kirche', quote: `Etwa 200 Fastentage im Jahr (Mittwoch, Freitag, Großes Fasten, Advents-, Apostel- und Marienfasten), überwiegend ohne tierische Produkte.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Jainismus ist eine eigenständige, sehr alte Religion Indiens mit heute einigen Millionen Anhängern. Kernlehren: Die Welt ist ungeschaffen und ewig; es gibt unzählige Seelen (*jiva*) und nichtseelische Substanzen (*ajiva*). Karma ist eine feine **stoffliche** Substanz, die sich durch Leidenschaften an die Seele heftet (so systematisch im *Tattvartha Sutra* des Umasvati, entstanden zwischen dem 2. und 5. Jh. n. Chr.). Befreiung (*moksha*) wird durch die „drei Juwelen" – rechter Glaube, rechte Erkenntnis, rechter Wandel – und strenge Askese aus eigener Kraft erreicht. Die Tirthankaras sind Vorbilder, keine Schöpfer oder Erlöser.`,
    detail: `**Ehrlich anzuerkennen:** Jains haben über Jahrhunderte Tierschutz, Vegetarismus und Friedfertigkeit gelebt, lange bevor der Westen darüber nachdachte; ihre Gemeinschaften sind für Bildung, Wohltätigkeit und Rechtschaffenheit im Handel bekannt.

**Innerjainische Spannungen:** Die Digambara-Richtung lehrt, dass eine Frau in ihrem gegenwärtigen Leben nicht die Befreiung erlangen kann, sondern erst nach einer Wiedergeburt als Mann; die Shvetambara-Richtung widerspricht. Das rituelle Fasten bis zum Tod (*Sallekhana*/*Santhara*) erklärte der Hohe Gerichtshof von Rajasthan am 10. August 2015 für strafbar (Nikhil Soni v. Union of India); der Oberste Gerichtshof Indiens setzte das Urteil kurz darauf aus. Jains verstehen Sallekhana nicht als Suizid, sondern als leidenschaftsloses Sterben.

**Kosmologie:** Die Absage an einen Schöpfer ist alt; der Digambara-Lehrer Jinasena (9. Jh.) spottet in seinem *Mahapurana* über die Vorstellung eines Weltschöpfers – Carl Sagan machte den Text im Westen bekannt. Die heutige Kosmologie spricht dagegen eher für einen Anfang des Universums.`,
    sources: [
      { kind: 'oestlich', author: 'Umasvati', work: 'Tattvartha Sutra', ref: 'Kap. 8', quote: `Durch Leidenschaften zieht die Seele karmische Materie an, die sich mit ihr verbindet – das ist Bindung (bandha).`, status: 'paraphrase' },
      { kind: 'oestlich', author: 'Jinasena', work: 'Mahapurana (Adipurana)', year: '9. Jh.', quote: `Manche Toren behaupten, ein Schöpfer habe die Welt gemacht; doch die Welt ist ungeschaffen wie die Zeit selbst, ohne Anfang und Ende.`, status: 'paraphrase', note: 'Bekannt durch Carl Sagan, Cosmos (1980); Übersetzungen des Wortlauts weichen voneinander ab – keine Versangabe ohne kritische Ausgabe.' },
      { kind: 'gegner', author: 'Padmanabh S. Jaini', work: 'The Jaina Path of Purification', year: '1979', quote: `Standarddarstellung der jainischen Lehre von Seele, Karma und Befreiung aus der Innensicht.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Jains verdienen großen Respekt für ihre Gewaltlosigkeit – darin können Christen von ihnen lernen. Aber ohne Schöpfer bleiben zwei Fragen offen: Warum gibt es überhaupt etwas, und warum ist Leben überhaupt wertvoll? Ein unpersönliches Karma-Gesetz kann Ahimsa nicht begründen – und es deutet das Leid eines kranken Kindes als verdiente Folge früherer Taten. Das Christentum sagt: Leben ist kostbar, weil ein liebender Gott es geschaffen hat, und Gott selbst hat die Gewalt am Kreuz erlitten, um sie zu überwinden.`,
  keyPoints: [
    `**Würdigung:** Ahimsa, Vegetarismus und Besitzlosigkeit sind ernsthafte Tugenden; Kopten fasten selbst etwa 200 Tage im Jahr weitgehend ohne tierische Produkte.`,
    `**Begründungsfrage:** Ohne personalen Grund des Seins bleibt offen, warum Leben einen Wert hat und warum ich es schonen *soll*.`,
    `**Kontingenz:** Eine ewige Welt erklärt nicht, warum es sie gibt (Leibniz); die Kosmologie spricht eher für einen Anfang.`,
    `**Karma und Opfer:** Wenn jedes Leiden Folge früherer Taten ist, werden Opfer zu Schuldigen – Jesus widerspricht dem ausdrücklich (Joh 9,3).`,
    `**Selbsterlösung:** Der strenge Weg ist praktisch nur Mönchen offen; christlich ist Heil Gnade, die zur Mitwirkung befähigt (Phil 2,12–13).`,
    `**Ziel:** Das jainische Ziel ist die Lösung der Seele von allem (*kevala* – „allein"); das christliche Ziel ist Gemeinschaft in Liebe mit Gott und dem Nächsten.`,
  ],
  argument: {
    name: 'Das Begründungsproblem der gottlosen Ethik',
    summary: 'Eine Pflicht zur Gewaltlosigkeit braucht einen Grund für den Wert des Lebens, den ein unpersönlicher Kosmos nicht liefert.',
    premises: [
      { text: 'P1: Wenn eine Handlung objektiv geboten ist (z. B. „Du sollst kein Leben verletzen"), braucht dieses Sollen einen hinreichenden Grund.', support: `Auch Jains behaupten nicht, Ahimsa sei bloß Geschmack; sie halten Gewalt für objektiv falsch.` },
      { text: 'P2: Ein unpersönlicher Mechanismus (karmische Materie) kann beschreiben, was geschieht, aber kein Sollen begründen.', support: `Naturgesetze sagen, was ist, nicht, was sein soll (Humes Unterscheidung). Karma soll aber moralisch „gerecht" sortieren – das setzt Maßstäbe voraus, die ein Mechanismus nicht kennt.` },
      { text: 'P3: Ein personaler, guter Schöpfer, der Leben aus Liebe gewollt hat, ist ein hinreichender Grund für den Wert des Lebens.', support: `Ps 145,9; Gen 1,31. Leben ist kostbar, weil es gewollt ist.` },
    ],
    conclusion: 'Die jainische Ethik lebt von einem Wert des Lebens, den ihre eigene Metaphysik nicht begründen kann; der christliche Schöpfungsglaube liefert diese Begründung.',
  },
  voices: [
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler und Kenner des Jainismus',
      text: `Corduan stellt den Jainismus fair und mit Respekt dar und hebt seine ethische Ernsthaftigkeit hervor. Zugleich zeigt er den Kern des Unterschieds: Im Jainismus gibt es keinen Gott, der gnädig eingreift; die Seele muss sich in einem endlosen Kreislauf selbst von karmischer Materie befreien. Für Corduan ist das eine heroische, aber für die meisten Menschen unerreichbare Religion – und eine Religion ohne Gnade.`,
      sources: [{ kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', quote: `Vergleichende Darstellung der Weltreligionen aus christlicher Sicht, einschließlich der Lehren von Karma und Befreiung.`, status: 'paraphrase' }],
    },
    {
      person: 'leibniz',
      role: 'als Philosoph des zureichenden Grundes',
      text: `Leibniz fragte: Warum gibt es überhaupt etwas und nicht vielmehr nichts? Selbst eine ewige Welt erklärt sich nicht selbst. Sein Beispiel: Wenn ein Geometriebuch seit Ewigkeit immer von einem früheren abgeschrieben worden wäre, wüssten wir immer noch nicht, warum es dieses Buch überhaupt gibt. Ebenso braucht eine ewige Abfolge von Weltzuständen einen Grund außerhalb ihrer selbst – ein notwendiges Wesen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Vernunftprinzipien der Natur und der Gnade', ref: '§ 7', year: '1714', quote: `Warum gibt es eher etwas als nichts?`, original: `pourquoi il y a plutôt quelque chose que rien ?`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Über den letzten Ursprung der Dinge (De rerum originatione radicali)', year: '1697', quote: `Das Beispiel eines Geometriebuches, das seit Ewigkeit voneinander abgeschrieben wurde: Die Reihe erklärt nicht, warum es das Buch gibt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'isaak-syrer',
      role: 'als Lehrer des barmherzigen Herzens',
      text: `Isaak zeigt, dass christliche Barmherzigkeit nicht beim Menschen haltmacht. Das Herz, das von Gottes Liebe ergriffen ist, leidet mit jedem Geschöpf und betet für Tiere und sogar für Feinde. Der Unterschied zum Jainismus liegt nicht in der Weite des Mitgefühls, sondern in seiner Quelle: Es ist Teilhabe an Gottes eigener Liebe, nicht Vermeidung karmischer Bindung.`,
      sources: [{ kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Reden', ref: 'Rede 71 (Wensinck)', quote: `Das barmherzige Herz brennt für die ganze Schöpfung.`, status: 'paraphrase' }],
    },
    {
      person: 'mangalwadi',
      role: 'als indischer Philosoph und Sozialreformer',
      text: `Mangalwadi, der in Indien aufwuchs und die Ashrams der Gurus von innen kennenlernte, beschreibt, wie die Karma-Lehre im indischen Alltag das Leiden der Armen und Kranken als verdient erscheinen lassen kann. Er stellt dem die biblische Überzeugung gegenüber, dass jeder Mensch als Bild Gottes Würde hat – unabhängig von seinem vermeintlichen Karma – und dass Gnade Menschen zu tätiger Nächstenliebe befreit.`,
      sources: [{ kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The World of Gurus', year: '1977', quote: `Kritische Innensicht auf indische Gurus und die gesellschaftlichen Folgen der Karma-Lehre.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als christlicher Denker zum Tierleid',
      text: `Lewis nahm das Leiden der Tiere ernster als viele Christen seiner Zeit. In *Über den Schmerz* widmete er ihm ein eigenes Kapitel, und in einem Essay wandte er sich scharf gegen leichtfertige Tierversuche: Gerade wer an die besondere Würde des Menschen glaubt, trägt besondere Verantwortung gegenüber den Schwächeren. Für Lewis folgt aus der Herrschaft des Menschen über die Tiere Fürsorge, nicht Willkür.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain)', ref: 'Kap. 9 („Animal Pain")', year: '1940', quote: `Ausführliche Erörterung des Tierleids aus christlicher Sicht.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Vivisection', year: '1947', quote: `Die Überlegenheit des Menschen begründet Pflichten gegenüber den Tieren, nicht das Recht zu grenzenloser Nutzung.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kein-schoepfer-keine-theodizee',
      objection: `Ohne Schöpfergott gibt es kein Theodizee-Problem. Ihr müsst erklären, warum ein allmächtiger, guter Gott Leid zulässt – wir nicht. Das Karma erklärt jedes Leid gerecht.`,
      objectionBy: 'Jeffery D. Long',
      answer: `Ihr tauscht das Theodizee-Problem gegen ein anderes: Wenn jedes Leid gerecht ist, dann hat das Kind mit Krebs es durch frühere Taten verdient. Das ist eine harte Botschaft für jedes Opfer. Jesus widerspricht genau dieser Logik: „Es hat weder dieser gesündigt noch seine Eltern" (Joh 9,3). Das Christentum nimmt das Böse als wirkliches Unrecht ernst – statt es als verdiente Rechnung zu erklären.`,
      questionsBack: [`Würdest du einer Mutter am Krankenbett ihres Kindes sagen, das Kind trage die Folgen eigener früherer Taten?`],
      followUps: [
        {
          id: 'karma-gerechter-als-gnade',
          objection: `Karma ist vollkommen gerecht: Jeder erntet, was er sät. Gnade dagegen ist ungerecht – sie lässt Schuldige davonkommen.`,
          objectionBy: 'Jainische Apologeten',
          answer: `Gerechtigkeit setzt jemanden voraus, der Absichten erkennt und gewichtet. Nach jainischer Lehre ist Karma aber feine Materie, die von Leidenschaften angezogen wird. Woher „weiß" Materie, was verdient ist? Ein Gesetz, das moralisch sortiert, ohne dass ein Geist dahintersteht, ist ein Gesetz ohne Gesetzgeber. Und Gnade ist nicht Ungerechtigkeit: Am Kreuz trägt Gott selbst die Last der Schuld, statt sie zu übersehen.`,
          followUps: [
            {
              id: 'naturgesetz-ohne-gesetzgeber',
              objection: `Die Schwerkraft braucht auch keinen Gesetzgeber. Karma ist ein Naturgesetz des Geistigen, genauso unpersönlich.`,
              objectionBy: 'Jainische Apologeten / Satish Kumar',
              answer: `Die Schwerkraft beschreibt, was geschieht; sie unterscheidet nicht zwischen Gut und Böse. Karma soll aber genau das tun – moralisch belohnen und bestrafen. Ein Gesetz mit moralischem Inhalt ist etwas völlig anderes als ein physikalisches. Außerdem ist auch die Frage berechtigt, warum es überhaupt verlässliche Naturgesetze gibt – die Ordnung selbst verlangt nach einer Erklärung.`,
              followUps: [
                {
                  id: 'universum-ewig',
                  objection: `Das Universum ist ewig und ungeschaffen, wie Jinasena sagt. Etwas Ewiges braucht keine Ursache.`,
                  objectionBy: 'Jinasena / Carl Sagan',
                  answer: `Leibniz hat gezeigt, dass auch eine ewige Welt erklärungsbedürftig bleibt: Eine unendliche Kette von Ursachen erklärt nicht, warum es die Kette überhaupt gibt. Zudem spricht die heutige Kosmologie – Ausdehnung des Universums, Hintergrundstrahlung, Entropie – eher für einen Anfang. Die jainische Kosmologie mit ihren unendlichen Zeitzyklen ist damit auch empirisch unter Druck.`,
                  detail: `Ehrlich ist zu sagen: Ob das Universum einen absoluten Anfang hatte, ist in der Physik nicht endgültig entschieden; es gibt Modelle ohne Anfang. Das Kontingenzargument von Leibniz gilt aber unabhängig davon: Auch eine anfangslose Welt besteht aus Dingen, die nicht aus sich selbst notwendig sind.`,
                  sources: [{ kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'De rerum originatione radicali', year: '1697', quote: `Auch eine ewige Reihe von Zuständen enthält in sich keinen Grund dafür, dass sie existiert.`, status: 'paraphrase' }],
                  questionsBack: [`Warum gibt es eine Welt mit Seelen und Karma statt gar nichts?`, `Wie verträgt sich die Annahme unendlicher Zeitzyklen mit den Belegen für einen Anfang des Universums?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ahimsa-konsequenter',
      objection: `Jains schützen jedes Leben, bis zum Insekt. Christen essen Fleisch, jagen, halten Massentierhaltung aus. Wer ist hier ethisch konsequenter?`,
      objectionBy: 'Satish Kumar',
      answer: `In der Tierethik haben Jains vielen Christen etwas voraus – das gebe ich zu. Aber auch Gott „erbarmt sich aller seiner Werke" (Ps 145,9), der Gerechte „seines Viehes" (Spr 12,10), und die Schöpfung beginnt und endet im Frieden (Gen 1,29–30; Jes 11,6–9). Kopten fasten rund 200 Tage im Jahr weitgehend vegan. Die eigentliche Frage ist nicht, wer weniger tötet, sondern was den Wert des Lebens begründet.`,
      followUps: [
        {
          id: 'gen-9-anthropozentrisch',
          objection: `Gen 9,3 erlaubt ausdrücklich, Tiere zu töten und zu essen. Eure Bibel ist anthropozentrisch – der Mensch steht über allem.`,
          objectionBy: 'Jeffery D. Long',
          answer: `Die Erlaubnis kommt nach der Flut, in einer gefallenen Welt, und wird sofort begrenzt: kein Blut, denn das Leben gehört Gott (Gen 9,4). Und ja, der Mensch hat als Bild Gottes eine besondere Würde (Gen 9,6). Aber auch der Jainismus braucht eine Rangordnung: Er unterscheidet Lebewesen nach der Zahl ihrer Sinne, und kein Jain hält das Erschlagen einer Mücke für dasselbe wie einen Mord.`,
          followUps: [
            {
              id: 'speziesismus-singer',
              objection: `Den Menschen grundsätzlich über das Tier zu stellen, ist Speziesismus – eine Diskriminierung wie Rassismus.`,
              objectionBy: 'Peter Singer',
              answer: `Wer die besondere Würde des Menschen aufgibt, muss die Konsequenzen tragen: Peter Singer selbst hält es in bestimmten Fällen für vertretbar, schwerstbehinderte Neugeborene zu töten, weil ihnen Eigenschaften fehlen, die manche Tiere haben. Jains würden das entsetzt ablehnen. Gerade die Gottebenbildlichkeit schützt die Schwächsten – den Säugling, den Komapatienten –, deren Wert nicht von ihren Fähigkeiten abhängt.`,
              sources: [{ kind: 'gegner', author: 'Peter Singer', work: 'Practical Ethics', year: '1979', ref: 'Kap. „Taking Life: Humans"', quote: `Singer hält die Tötung schwerstbehinderter Neugeborener in bestimmten Fällen für moralisch vertretbar.`, status: 'paraphrase' }],
              followUps: [
                {
                  id: 'jains-schuetzen-ohne-gott',
                  objection: `Jains schützen auch Säuglinge und Behinderte – ganz ohne eure Gottebenbildlichkeit. Also braucht man sie nicht.`,
                  objectionBy: 'Jeffery D. Long',
                  answer: `Dass Jains Schwache schützen, bestreite ich nicht – es ehrt sie. Die Frage ist, worauf dieser Schutz gründet. In der Karma-Logik leidet ein behindertes Kind an den Folgen eigener früherer Taten, und das höchste Ziel ist, die Seele aus allen Bindungen herauszulösen. Christlich ist das Kind um seiner selbst willen geliebt, und das Ziel ist nicht Isolation (*kevala* heißt „allein"), sondern Gemeinschaft in Liebe.`,
                  questionsBack: [`Worauf gründet im Jainismus der Wert eines Lebens, das nach eurer Lehre gerade Karma abträgt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'ahimsa-unmoeglich',
          objection: `Ihr sagt, Ahimsa sei nicht konsequent lebbar. Na und? Es ist ein Ideal, dem man sich annähert – wie eure Feindesliebe.`,
          objectionBy: 'Padmanabh S. Jaini',
          answer: `Einverstanden, das ist ein fairer Vergleich. Aber dann wird deutlich, dass beide Ethiken einen Weg brauchen, mit dem eigenen Versagen umzugehen. Im Jainismus bindet jede unvermeidliche Verletzung – beim Atmen, Gehen, Ackerbau – erneut Karma, und es gibt keine Vergebung, nur Abtragung. Christlich gibt es Buße, Vergebung und Neuanfang. Das macht die Ethik nicht lascher, sondern lebbar.`,
        },
      ],
    },
    {
      id: 'kreuz-gewalt',
      objection: `Im Zentrum eures Glaubens steht ein blutiges Hinrichtungsinstrument, dazu Tieropfer im Alten Testament und göttlich befohlene Kriege. Die Jains haben nie einen heiligen Krieg geführt.`,
      objectionBy: 'Satish Kumar',
      answer: `Die friedliche Geschichte der Jains erkenne ich ausdrücklich an. Aber das Kreuz verherrlicht keine Gewalt – es zeigt Gott, der Gewalt *erleidet*, statt sie auszuüben, und für seine Henker betet (Lk 23,34). Der Jainismus antwortet auf Gewalt mit Rückzug; das Christentum mit Versöhnung: Der Unschuldige nimmt die Gewalt auf sich und bricht ihren Kreislauf.`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'kreuzzuege-praxis',
          objection: `Schöne Theorie. In der Praxis haben Christen Kreuzzüge, Inquisition und Kolonialkriege geführt.`,
          objectionBy: 'Religionskritiker',
          answer: `Das ist wahr, und es ist Schuld. Aber diese Taten widersprechen dem Gründer, während Ahimsa Mahavira entspricht – das gestehe ich zu. Prüfen wir die Lehre an ihrem Ursprung: Jesus verbot Petrus das Schwert (Mt 26,52). Die frühe Kirche, gerade in Ägypten, war die Kirche der Märtyrer, die Gewalt erlitten. Die koptische Kirche hat die meiste Zeit ihrer Geschichte als verfolgte Minderheit gelebt.`,
          followUps: [
            {
              id: 'tieropfer-at',
              objection: `Und die tausenden Tieropfer im Tempel? Ein Gott, der Blut verlangt, ist ethisch primitiv.`,
              objectionBy: 'Jainische Kritik der vedischen und biblischen Opfer',
              answer: `Interessant ist: Die Propheten selbst kritisieren ein Opfer ohne Herz („Barmherzigkeit will ich und nicht Opfer", Hos 6,6), und der Hebräerbrief erklärt, dass Tierblut keine Sünde wegnehmen kann (Hebr 10,4). Die Opfer weisen über sich hinaus auf das eine Opfer Christi, mit dem sie enden. Seit 70 n. Chr. gibt es keine Tieropfer mehr – und die Kirche hat sie nie wieder eingeführt.`,
              sources: [{ kind: 'bibel', work: 'Hosea', ref: '6,6', quote: `Denn ich habe Lust an der Liebe und nicht am Opfer, und an der Erkenntnis Gottes und nicht am Brandopfer.`, translation: 'Luther 1912', status: 'verbatim' }],
            },
          ],
        },
      ],
    },
    {
      id: 'selbsterloesung-wuerde',
      objection: `Selbsterlösung ehrt den Menschen: Er wird nicht von einem Gott „gerettet" wie ein Kind, sondern befreit sich durch eigene Disziplin. Gnade macht unmündig.`,
      objectionBy: 'Jainische Apologeten',
      answer: `Der jainische Weg ist heroisch – und darum praktisch nur für wenige Asketen gangbar. Nach der Digambara-Lehre kann eine Frau in diesem Leben die Befreiung nicht einmal erreichen. Christliche Gnade macht nicht unmündig: Die koptische Kirche lehrt Synergie – Gott wirkt, und der Mensch wirkt mit („Schaffet, daß ihr selig werdet … denn Gott ist's, der in euch wirkt", Phil 2,12–13). Gnade ist die Kraft, nicht der Ersatz für das Mühen.`,
      sources: [{ kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `… schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'gnade-billig',
          objection: `Gnade ist billig: Man sündigt und lässt sich vergeben. Karma dagegen nimmt jede Tat ernst.`,
          objectionBy: 'Jainische Apologeten',
          answer: `Billige Gnade kritisieren Christen selbst. Die koptische Kirche kennt Buße, Beichte, Fasten und ein lebenslanges Ringen um Heiligkeit. Vergebung heißt nicht, dass die Tat egal wäre – sie hat Christus das Leben gekostet. Aber sie heißt, dass der Mensch nicht unter der Last seiner Vergangenheit begraben bleibt.`,
          followUps: [
            {
              id: 'mahavira-beweist-moeglich',
              objection: `Mahavira hat durch eigene Kraft die Allwissenheit (*kevala jnana*) erreicht. Das beweist, dass Selbstbefreiung möglich ist.`,
              objectionBy: 'Jainische Überlieferung',
              answer: `Das ist eine Glaubensüberlieferung, die sich historisch nicht prüfen lässt; die ältesten Quellen über Mahavira sind Jahrhunderte jünger als er. Der christliche Glaube dagegen gründet auf einem öffentlich behaupteten Ereignis – der Auferstehung Jesu –, das man mit historischen Mitteln untersuchen kann. Wer Allwissenheit beansprucht, müsste sie zudem auch über die Kosmologie bewähren, wo die jainische Lehre von ewigen Zyklen heute unter Druck steht.`,
              questionsBack: [`Welche Belege gibt es für Mahaviras Allwissenheit, die nicht aus der späteren Überlieferung seiner Anhänger stammen?`],
            },
          ],
        },
      ],
    },
    {
      id: 'anekantavada-demut',
      objection: `Anekantavada lehrt: Die Wirklichkeit hat viele Seiten, keiner hat die ganze Wahrheit. Das ist viel demütiger als euer Absolutheitsanspruch.`,
      objectionBy: 'Jeffery D. Long',
      answer: `Intellektuelle Demut ist eine Tugend. Aber auch Anekantavada wird mit Bestimmtheit behauptet, und die Jains halten fest an klaren Lehren: kein Schöpfer, Karma als Materie, Befreiung durch Askese. Niemand lebt ohne Wahrheitsansprüche. Christliche Demut gilt der Person – ich weiß nicht alles –, nicht der Preisgabe dessen, was Gott offenbart hat.`,
      followUps: [
        {
          id: 'blinde-und-elefant',
          objection: `Denk an das alte Gleichnis von den Blinden und dem Elefanten: Jeder ertastet nur einen Teil. So ist es mit allen Religionen.`,
          objectionBy: 'Jainische und pluralistische Tradition',
          answer: `Das Gleichnis hat einen verborgenen Haken: Der Erzähler sieht den ganzen Elefanten. Wer es erzählt, beansprucht genau den Überblick, den er allen anderen abspricht. Lesslie Newbigin hat darauf hingewiesen. Die Frage ist also nicht, ob jemand die ganze Wahrheit beansprucht, sondern wer zu Recht – und Christen sagen: Gott hat sich in Christus selbst gezeigt.`,
          voices: [{ person: 'lesslie-newbigin', role: 'als Missionar in Indien und Religionstheologe', text: `Newbigin, der Jahrzehnte in Südindien lebte, zeigt, dass das Elefanten-Gleichnis einen Standpunkt voraussetzt, von dem aus man das Ganze sieht. Pluralismus ist darum selbst ein umfassender Wahrheitsanspruch – nur ein verborgener.`, sources: [{ kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Gospel in a Pluralist Society', year: '1989', quote: `Das Gleichnis wird von jemandem erzählt, der den ganzen Elefanten sieht – es ist selbst ein Anspruch auf absolute Wahrheit.`, status: 'paraphrase' }] }],
          questionsBack: [`Von welchem Standpunkt aus weißt du, dass jede Religion nur einen Teil sieht?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum ist Leben wertvoll, wenn das Universum unpersönlich ist und kein Geist es gewollt hat?`,
    `Wie unterscheidet karmische Materie zwischen guten und bösen Absichten?`,
    `Hat ein krankes Kind sein Leiden durch frühere Taten verdient?`,
    `Warum gibt es überhaupt eine Welt mit Seelen und Karma statt nichts?`,
    `Was geschieht im Jainismus mit dem, der am strengen Weg scheitert – gibt es Vergebung?`,
  ],
  avoid: [
    `„Jains beten Insekten an" oder ähnliche Spöttereien – völlig falsch und verletzend.`,
    `„Ohne Gott kann niemand gut sein." – Jains sind oft vorbildlich moralisch; das Argument betrifft die *Begründung*, nicht das Verhalten.`,
    `Sallekhana pauschal als „Selbstmordkult" bezeichnen – Jains verstehen es anders; benenne die ethische Frage sachlich.`,
    `Die biblischen Tieropfer und Kriegstexte wegdiskutieren – stelle sie in ihren Zusammenhang und verweise auf ihre Erfüllung und Grenzen.`,
  ],
  concessions: [
    `In Tierethik und Gewaltlosigkeit haben Jains vielen Christen etwas voraus; Christen haben die Fürsorge für die Schöpfung oft vernachlässigt.`,
    `Die Geschichte des Jainismus kennt keine Religionskriege im Namen Mahaviras – die Geschichte der Christen leider schon.`,
    `Ob das Universum einen absoluten Anfang hat, ist physikalisch nicht endgültig entschieden.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Padmanabh S. Jaini', work: 'The Jaina Path of Purification', year: '1979', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain)', year: '1940', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The World of Gurus', year: '1977', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Jainismus', 'Ahimsa', 'Mahavira', 'Karma', 'Tierethik', 'Kontingenz', 'Selbsterlösung'],
  related: [
    'hinduismus/karma-gerechter-als-gnade',
    'hinduismus/reinkarnation-erklaert-leid',
    'gottesbeweise/kontingenz-trugschluss',
    'umwelt-tiere-krieg/speziesismus',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
