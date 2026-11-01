import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-die-bibel',
  title: `„Nur die Bibel ist Autorität (Sola Scriptura)."`,
  proponents: [
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'Scripture Alone (2004); zahlreiche Debatten mit katholischen Apologeten über Sola Scriptura' },
    { name: 'Keith A. Mathison', role: 'Reformierter Theologe, Ligonier Ministries', work: 'The Shape of Sola Scriptura (2001)' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Gründer von Ligonier Ministries (1939–2017)', work: 'Scripture Alone: The Evangelical Doctrine (2005)' },
    { name: 'Gavin Ortlund', role: 'Baptistischer Theologe, YouTube-Kanal „Truth Unites"', work: 'What It Means to Be Protestant (2024)' },
    { name: 'Martin Luther', role: 'Reformator (1483–1546)', work: 'Rede vor dem Reichstag zu Worms (1521)' },
  ],
  steelman: `Sola Scriptura heißt nicht „Bibel ohne Tradition" – das wäre „Solo Scriptura", und das lehnen ernsthafte Reformierte selbst ab. Gemeint ist: Die Heilige Schrift ist die **einzige unfehlbare und letztgültige Norm** (*norma normans*), an der alle anderen Autoritäten – Väter, Konzilien, Liturgien, Bekenntnisse – gemessen werden (*norma normata*). Begründung: Nur die Schrift ist „von Gott eingegeben" (2 Tim 3,16); Jesus selbst maß die Überlieferung der Ältesten am geschriebenen Wort und verwarf sie, wo sie Gottes Gebot aufhob (Mk 7); die Beröer prüften sogar Paulus an der Schrift und wurden dafür gelobt (Apg 17,11). Konzilien haben sich nachweislich widersprochen (Ephesus 449 gegen Chalcedon 451; das ikonoklastische Konzil 754 gegen Nizäa 787) – und gerade die Kopten trennten sich 451 von der Mehrheit: Welche „unfehlbare Tradition" gilt also? Wer sich auf eine mündliche apostolische Überlieferung beruft, die nicht in der Schrift steht, kann ihren Inhalt nicht benennen und macht sich unangreifbar. Die Väter selbst stellten die Schrift über alles: Athanasius sagt, die heiligen Schriften genügten zur Verkündigung der Wahrheit, Kyrill von Jerusalem verlangt, ihm nichts zu glauben, was er nicht aus der Schrift beweise. Sola Scriptura ist also nichts anderes als die konsequente Durchführung dessen, was die Väter selbst lehrten.`,
  biblical: {
    summary: `Die Bibel lehrt an keiner Stelle, dass allein das Geschriebene verbindlich sei. Sie verpflichtet vielmehr auf die apostolische Überlieferung (*paradosis*) „durch Wort oder Brief" (2 Thess 2,15), lobt das Festhalten an den Überlieferungen (1 Kor 11,2), ordnet die Weitergabe der Lehre an zuverlässige Männer an (2 Tim 2,2) und nennt die **Kirche** „Pfeiler und Grundfeste der Wahrheit" (1 Tim 3,15). 2 Tim 3,16–17 spricht von der Inspiration und dem *Nutzen* der Schrift – nicht von ihrer Alleingeltung –, und mit „Schrift" ist dort zunächst das Alte Testament gemeint, das Timotheus „von Kind auf" kannte (3,15).`,
    detail: `**Was die Schrift über sich selbst und die Überlieferung sagt:**

- **2 Thess 2,15:** Paulus stellt mündliche und schriftliche Überlieferung auf dieselbe Stufe – beide sind apostolisch und verbindlich. Kein Vers kündigt an, dass die mündliche Form später erlöschen werde.
- **1 Thess 2,13:** Die *mündliche* Predigt der Apostel ist „wahrhaftig Gottes Wort". Das Wort Gottes existierte also in der Kirche, bevor ein einziges Buch des NT geschrieben war.
- **2 Tim 2,2:** Das Modell der Weitergabe ist personal: Apostel → treue Menschen → andere. Genau das nennen die Väter apostolische Sukzession und Überlieferung.
- **1 Tim 3,15:** Nicht die Schrift, sondern „die Gemeinde des lebendigen Gottes" ist „Pfeiler und Grundfeste der Wahrheit" (*stylos kai hedraiōma tēs alētheias*). Schrift und Kirche gehören zusammen.
- **Joh 21,25; 20,30; Apg 1,3:** Vieles, was Jesus tat und lehrte (etwa in den vierzig Tagen nach der Auferstehung), steht nicht im NT – es lebte in der Verkündigung der Kirche weiter.
- **2 Joh 12; 3 Joh 13–14:** Johannes zieht das mündliche Gespräch dem Brief ausdrücklich vor.

**2 Tim 3,16–17 genau gelesen:** Die Schrift ist *ōphelimos* – „nütze", hilfreich – zur Lehre, Zurechtweisung, Besserung und Erziehung, damit der Mensch Gottes *artios* („tüchtig, ausgerüstet") sei. Das ist eine starke Aussage über Inspiration und Nutzen, aber kein Ausschluss anderer Autoritäten. Eph 4,11–13 sagt Ähnliches über Apostel, Propheten, Hirten und Lehrer: Sie sind gegeben „zur Zurüstung der Heiligen", bis wir zur Vollkommenheit gelangen – niemand folgert daraus, man brauche *nur* Hirten. Außerdem: Als Paulus schrieb, war das NT noch nicht abgeschlossen; „die heiligen Schriften", die Timotheus von Kind auf kannte, waren das AT (in der Septuaginta-Gestalt). Wer aus diesem Vers „Sola Scriptura" ableitet, müsste konsequenterweise „Sola AT" lehren.

**Der Kanon steht nicht in der Bibel.** Kein Bibelvers sagt, welche 27 Bücher zum NT gehören. Das Inhaltsverzeichnis der Bibel ist selbst ein Zeugnis der kirchlichen Überlieferung – die erste Liste, die genau unsere 27 Bücher nennt, stammt vom koptischen Papst Athanasius (39. Osterfestbrief, 367).`,
    sources: [
      { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Brief.`, original: `κρατεῖτε τὰς παραδόσεις ἃς ἐδιδάχθητε εἴτε διὰ λόγου εἴτε δι᾽ ἐπιστολῆς ἡμῶν`, translation: 'Luther 1912', status: 'verbatim', note: 'Luther übersetzt paradoseis mit „Satzungen"; wörtlich: „Überlieferungen".' },
      { kind: 'bibel', work: '1. Timotheus', ref: '3,15', quote: `… daß du wissest, wie du wandeln sollst in dem Hause Gottes, welches ist die Gemeinde des lebendigen Gottes, ein Pfeiler und eine Grundfeste der Wahrheit.`, original: `στῦλος καὶ ἑδραίωμα τῆς ἀληθείας`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '3,15–17', quote: `Und weil du von Kind auf die heilige Schrift weißt, kann dich dieselbe unterweisen zur Seligkeit … Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Strafe, zur Besserung, zur Züchtigung in der Gerechtigkeit, daß ein Mensch Gottes sei vollkommen, zu allem guten Werk geschickt.`, original: `πᾶσα γραφὴ θεόπνευστος καὶ ὠφέλιμος`, translation: 'Luther 1912', status: 'verbatim', note: 'ōphelimos = nützlich; die „Schrift von Kind auf" ist das AT.' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '2,13', quote: `… daß ihr, da ihr empfinget von uns das Wort göttlicher Predigt, nahmet ihr's auf nicht als Menschenwort, sondern, wie es denn wahrhaftig ist, als Gottes Wort …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,2', quote: `Und was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '21,25', quote: `Es sind auch viele andere Dinge, die Jesus getan hat; so sie aber sollten eins nach dem andern geschrieben werden, achte ich, die Welt würde die Bücher nicht begreifen, die zu beschreiben wären.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Johannes', ref: '12', quote: `Ich hatte euch viel zu schreiben, aber ich wollte nicht mit Brief und Tinte; sondern ich hoffe, zu euch zu kommen und mündlich mit euch zu reden …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt die Heilige Schrift als inspiriertes Wort Gottes und höchste schriftliche Gestalt der Offenbarung. Sie liest sie aber **in der Kirche**: mit dem Glaubensbekenntnis, der Liturgie, den Vätern und den Konzilien. Die Heilige Überlieferung ist keine zweite Quelle mit neuen Lehren, sondern der lebendige Strom, in dem die Schrift entstand, gesammelt, gelesen und ausgelegt wurde. Schrift und Tradition widersprechen einander nie – die Schrift ist das Herz der Tradition.`,
    detail: `**Die Väter vor 451 sind sich hierin einig:**

- **Irenäus** (um 180) widerlegt die Gnostiker, die ebenfalls die Schrift zitierten, mit der *öffentlichen* apostolischen Überlieferung, die durch die Bischofsfolge in allen Kirchen bezeugt ist (Adv. Haer. III,3–4). Er fragt: Was wäre, wenn die Apostel gar keine Schriften hinterlassen hätten? Dann müsste man der Überlieferung folgen – und tatsächlich glaubten ganze Völker ohne Schrift, „ohne Papier und Tinte".
- **Athanasius**, 20. Papst von Alexandrien, nennt 367 als Erster genau die 27 Bücher des NT und nennt die Schriften „Quellen des Heils". Derselbe Athanasius verweist gegen die Arianer, die ebenfalls Bibelverse zitierten (Spr 8,22), auf „die Überlieferung, Lehre und den Glauben der katholischen Kirche von Anfang an, den der Herr gab, die Apostel verkündeten und die Väter bewahrten" (An Serapion 1,28).
- **Basilius der Große** unterscheidet Lehren aus schriftlicher Unterweisung und solche, die „im Geheimnis" durch die Überlieferung der Apostel empfangen wurden – beide haben „dieselbe Kraft" für die Frömmigkeit (Über den Hl. Geist 27,66). Als Beispiele nennt er Kreuzzeichen, Gebetsrichtung nach Osten, die Worte der Epiklese und das dreimalige Untertauchen bei der Taufe – alles bis heute Praxis der koptischen Kirche.
- **Johannes Chrysostomus** folgert aus 2 Thess 2,15, dass die Apostel nicht alles brieflich überliefert haben: „Es ist Überlieferung – frage nicht weiter."

**Koptische Lehrer:** Papst Schenuda III. erklärt in seiner *Vergleichenden Theologie*, dass die Kirche vor dem NT existierte, dass sie die Bücher bewahrte und den Kanon erkannte, und dass die Tradition nie im Widerspruch zur Schrift stehen darf – Kriterium ist ihre Übereinstimmung mit der Schrift und der ganzen Kirche. Die Glaubenslehre des hl. Habib Girgis und der patristische Kommentar von Vater Tadros Malaty lesen die Schrift durchgehend mit den Vätern.

**Wichtig:** Die Orthodoxie stellt die Kirche nicht *über* die Schrift (wie man es manchmal dem römischen Lehramt vorwirft), sondern sieht beide als *ein* Geschenk des einen Geistes: Derselbe Geist, der die Schrift eingab, führt die Kirche in die Wahrheit (Joh 16,13).`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,4,1', year: 'um 180', quote: `Wie aber, wenn die Apostel uns überhaupt keine Schriften hinterlassen hätten? Müsste man dann nicht der Ordnung der Überlieferung folgen, die sie denen übergaben, denen sie die Kirchen anvertrauten?`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Dies sind die Quellen des Heils, damit, wer dürstet, sich an den Worten, die sie enthalten, sättige. In ihnen allein wird die Lehre der Frömmigkeit verkündet. Niemand füge ihnen etwas hinzu oder nehme etwas von ihnen weg.`, translation: 'eigene Übersetzung (nach NPNF II/4)', status: 'verbatim', note: 'Erste Liste mit genau den 27 Büchern des NT – verfasst von einem koptischen Papst. Protestanten zitieren den Satz „in ihnen allein" gern; Athanasius meint die Abgrenzung gegen apokryphe Geheimschriften, nicht gegen die kirchliche Überlieferung.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion über den Heiligen Geist', ref: '1,28', year: 'um 359/360', quote: `Lasst uns auf die Überlieferung, die Lehre und den Glauben der katholischen Kirche von Anfang an blicken, den der Herr gab, die Apostel verkündeten und die Väter bewahrten. Auf ihn ist die Kirche gegründet.`, translation: 'eigene Übersetzung (nach Shapland 1951)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', ref: '27,66', year: 'um 375', quote: `Von den in der Kirche bewahrten Lehren und Verkündigungen haben wir die einen aus schriftlicher Unterweisung, die anderen haben wir aus der Überlieferung der Apostel, im Geheimnis an uns weitergegeben, empfangen; beide haben für die Frömmigkeit dieselbe Kraft.`, translation: 'eigene Übersetzung (nach NPNF II/8)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 2. Thessalonicherbrief', ref: 'Homilie 4 (zu 2,15)', quote: `Daraus ist klar, dass sie nicht alles durch Briefe überliefert haben, sondern vieles auch ungeschrieben; und das eine wie das andere ist gleich glaubwürdig. Darum lasst uns auch die Überlieferung der Kirche für glaubwürdig halten. Es ist Überlieferung – frage nicht weiter.`, original: `παράδοσίς ἐστι, μηδὲν πλέον ζήτει`, translation: 'eigene Übersetzung (nach NPNF I/13)', status: 'verbatim' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie (al-Lahut al-Muqaran)', quote: `Die Kirche bestand vor dem geschriebenen NT; sie bewahrte die Bücher und erkannte den Kanon. Tradition, die der Schrift widerspricht, wird verworfen; die echte apostolische Überlieferung stimmt mit ihr überein.`, status: 'paraphrase', note: 'Sinngemäße Zusammenfassung des Kapitels über die Überlieferung; genaue Seitenzahl je nach Ausgabe.' },
    ],
  },
  quickAnswer: `Die Bibel selbst lehrt nirgends „nur die Bibel". Sie sagt im Gegenteil: „Haltet an den Überlieferungen, die ihr gelernt habt, sei es durch Wort oder Brief" (2 Thess 2,15), und nennt die Kirche „Pfeiler und Grundfeste der Wahrheit" (1 Tim 3,15). Außerdem steht nirgends in der Bibel, welche Bücher hineingehören – das hat die Kirche erkannt, zuerst vollständig der koptische Papst Athanasius 367. Wir lieben die Schrift über alles – aber wir lesen sie mit der Kirche, die sie uns gegeben hat.`,
  keyPoints: [
    `**Selbstwiderspruch:** Sola Scriptura beansprucht, die Schrift sei die einzige unfehlbare Norm – aber kein Vers lehrt das. Die Lehre selbst steht nicht in der Schrift.`,
    `**Die Schrift verweist auf die Überlieferung:** 2 Thess 2,15; 1 Kor 11,2; 2 Tim 2,2 – mündlich und schriftlich, beide apostolisch.`,
    `**Das Kanonproblem:** Das Inhaltsverzeichnis der Bibel ist nicht inspiriert. Wer die 27 Bücher annimmt, vertraut dem Urteil der Kirche des 2.–4. Jahrhunderts – derselben Kirche, die Bischöfe, reale Gegenwart in der Eucharistie und Kindertaufe kannte.`,
    `**Die Kirche war zuerst da:** Pfingsten (um 30) liegt Jahrzehnte vor dem ersten NT-Buch und rund drei Jahrhunderte vor der ersten vollständigen Kanonliste.`,
    `**2 Tim 3,16 beweist Inspiration, nicht Alleingeltung** – und meint zunächst das AT, das Timotheus „von Kind auf" kannte.`,
    `**Die Väter lesen die Schrift in der Kirche:** Irenäus, Athanasius, Basilius, Chrysostomus – keiner lehrte eine Schrift ohne die kirchliche Überlieferung.`,
  ],
  argument: {
    name: 'Das Argument der Selbstwiderlegung und des Kanons',
    summary: 'Sola Scriptura scheitert an ihrem eigenen Maßstab und setzt die Tradition voraus, die sie verwirft.',
    premises: [
      {
        text: 'P1: Wenn die Schrift die einzige unfehlbare Glaubensnorm ist, dann muss diese Lehre selbst aus der Schrift begründbar sein.',
        support: 'Das folgt aus dem Prinzip selbst: Eine Glaubensaussage, die nicht aus der Schrift stammt, dürfte nach Sola Scriptura nicht verbindlich sein. Reformierte wie Mathison erkennen diese Anforderung an.',
      },
      {
        text: 'P2: Die Schrift lehrt nicht, dass sie allein die unfehlbare Norm ist; sie verpflichtet vielmehr auf mündliche und schriftliche Überlieferung und nennt die Kirche Grundfeste der Wahrheit.',
        support: '2 Thess 2,15; 1 Kor 11,2; 2 Tim 2,2; 1 Tim 3,15. Die Standardbelege für Sola Scriptura (2 Tim 3,16–17; Mk 7; Apg 17,11) sprechen von Inspiration, von der Verwerfung gotteswidriger Menschensatzungen und von der Prüfung neuer Botschaften – nicht von Alleingeltung.',
        sources: [
          { kind: 'bibel', work: '1. Korinther', ref: '11,2', quote: `Ich lobe euch, liebe Brüder, daß ihr an mich gedenket in allen Stücken und haltet die Weise, gleichwie ich sie euch gegeben habe.`, translation: 'Luther 1912', status: 'verbatim', note: 'Griechisch: tas paradoseis katechete – „ihr haltet die Überlieferungen fest".' },
        ],
      },
      {
        text: 'P3: Sola Scriptura setzt einen bekannten Kanon voraus; der Kanon wird aber nicht von der Schrift selbst angegeben, sondern wurde durch die Kirche in ihrer Überlieferung erkannt.',
        support: 'Kein Bibelbuch enthält eine Liste der NT-Bücher. Über Hebräer, Jakobus, 2 Petrus, 2–3 Johannes, Judas und die Offenbarung wurde jahrhundertelang beraten (Eusebius, Kirchengeschichte III,25). Erst Athanasius nennt 367 genau die 27 Bücher.',
        sources: [
          { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'III,25', year: 'um 325', quote: `Eusebius unterscheidet allgemein anerkannte Bücher (homologoumena) von bestrittenen (antilegomena) wie Jakobus, Judas, 2 Petrus, 2–3 Johannes; die Offenbarung führt er unter beiden Rubriken.`, status: 'paraphrase' },
        ],
      },
      {
        text: 'P4: Die Kirche der ersten Jahrhunderte lebte aus Schrift und apostolischer Überlieferung zugleich; kein Vater vor dem 16. Jahrhundert lehrte Sola Scriptura im reformatorischen Sinn.',
        support: 'Irenäus (Adv. Haer. III,3–4), Tertullian (Prozesseinrede 19–21), Athanasius (An Serapion 1,28), Basilius (Über den Hl. Geist 27), Chrysostomus (Hom. 4 zu 2 Thess) berufen sich ausdrücklich auf die Überlieferung als Auslegungsnorm. Selbst Väter, die die Genügsamkeit der Schrift betonen, tun dies innerhalb einer Kirche mit Bischöfen, Liturgie und Bekenntnis.',
      },
    ],
    inferences: [
      'Aus P1 und P2: Sola Scriptura ist nach ihrem eigenen Maßstab nicht verbindlich.',
      'Aus P3: Wer Sola Scriptura vertritt, stützt sich faktisch auf eine kirchliche Überlieferung (den Kanon).',
      'Aus P4: Sola Scriptura ist eine Neuerung des 16. Jahrhunderts, nicht der Glaube der Apostel und Väter.',
    ],
    conclusion: 'Das biblische und apostolische Modell ist nicht „Schrift allein", sondern die Schrift als Krone der lebendigen Überlieferung in der Kirche – so, wie es die koptisch-orthodoxe Kirche bis heute bewahrt.',
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Schüler des Polykarp, der den Apostel Johannes kannte',
      text: `Irenäus stand vor demselben Problem wie wir heute: Die Gnostiker zitierten die Schrift ausgiebig, lasen sie aber völlig anders. Seine Antwort war nicht „mehr Exegese", sondern der Verweis auf die **öffentliche, nachprüfbare Überlieferung**: In jeder Kirche kann man die Reihe der Bischöfe bis zu den Aposteln aufzählen, und alle bezeugen denselben Glauben. Wer die Wahrheit sucht, muss sie nicht bei anderen suchen, denn die Apostel haben sie wie ein Reicher in einer Schatzkammer vollständig in der Kirche niedergelegt.

Für Irenäus ist die Schrift ein Mosaik, das man richtig zusammensetzen muss: Die Häretiker nehmen die Steine eines Königsbildes und legen daraus einen Hund oder Fuchs. Die „Glaubensregel", die man in der Taufe empfängt, ist der Bauplan, mit dem man das Bild des Königs erkennt (Adv. Haer. I,8,1; I,9,4).`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,1', quote: `Die Überlieferung der Apostel, in der ganzen Welt offenbar, kann in jeder Kirche jeder einsehen, der die Wahrheit sehen will; und wir können die aufzählen, die von den Aposteln als Bischöfe in den Kirchen eingesetzt wurden, und ihre Nachfolger bis auf unsere Zeit.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,8,1', quote: `Bild vom Mosaik: Die Häretiker zerlegen das Bild eines Königs und setzen die Steine zu einem Hund oder Fuchs zusammen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Papst, der den Kanon des NT als Erster vollständig nannte',
      text: `Athanasius ist der beste Zeuge gegen die Vorstellung, die Orthodoxie stelle die Tradition gegen die Schrift. Niemand hat die Schrift höher gehalten: Er nennt die kanonischen Bücher „Quellen des Heils" und verbietet, ihnen etwas hinzuzufügen. Aber es war **seine Kirche**, die diesen Kanon in ihrer Überlieferung erkannte – und es war seine Erfahrung mit den Arianern, die ihn lehrte, dass Bibelverse allein nicht genügen: Die Arianer zitierten Spr 8,22 („der Herr hat mich geschaffen") und Joh 14,28 („der Vater ist größer als ich").

Athanasius antwortete mit dem *skopos* – der Gesamtausrichtung – der Schrift, wie die Kirche sie seit den Aposteln glaubt, und verteidigte das nicht-biblische Wort *homoousios* des Konzils von Nizäa als treue Wiedergabe des biblischen Sinns. Schrift, Glaubensregel und Konzil wirken bei ihm zusammen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,28–29', quote: `Athanasius wirft den Arianern vor, den „Skopos" (die Gesamtabsicht) der Schrift und des kirchlichen Glaubens zu verfehlen; dieser Skopos ist das Bekenntnis, dass der Sohn ewig Gott ist und um unseretwillen Mensch wurde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Verteidiger der Gottheit des Heiligen Geistes',
      text: `Basilius musste die Doxologie „Ehre sei dem Vater *mit* dem Sohn *samt* dem Heiligen Geist" gegen Gegner verteidigen, die verlangten, jede Formulierung müsse wörtlich in der Schrift stehen. Seine Antwort ist berühmt: Vieles, was die ganze Kirche selbstverständlich tut, steht nirgends geschrieben – das Kreuzzeichen, das Gebet nach Osten, die Worte der Epiklese über Brot und Kelch, die Weihe des Taufwassers und des Salböls, das dreimalige Untertauchen. Wer die ungeschriebenen Bräuche verwirft, „verstümmelt das Evangelium in seinen Hauptpunkten".

Für Basilius sind das keine Nebensachen, sondern Zeugnisse, aus denen die Kirche ihren Glauben ablesen kann – *lex orandi, lex credendi*: Wie die Kirche betet, so glaubt sie.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', ref: '27,66', quote: `Beispiele ungeschriebener apostolischer Überlieferung: Bezeichnen mit dem Kreuz, Gebet nach Osten, die Worte der Epiklese bei der Eucharistie, Segnung des Taufwassers und des Salböls, dreimaliges Untertauchen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Vergleichenden Theologie',
      text: `Papst Schenuda III. hat Generationen von Kopten beigebracht, im Gespräch mit Protestanten nicht defensiv, sondern biblisch zu antworten. Sein Kernargument: Die Kirche ist älter als das geschriebene NT. Jahrzehntelang lebten die Gläubigen von der mündlichen Predigt der Apostel, von der Taufe, dem Brechen des Brotes und den Gebeten (Apg 2,42). Die Briefe wurden an bestehende Gemeinden geschrieben, die schon glaubten, tauften und Eucharistie feierten – sie setzen diese Praxis voraus, statt sie neu zu begründen.

Schenuda betont zugleich die Grenze: Echte Tradition widerspricht der Schrift nie. Was der Schrift widerspricht, ist keine apostolische Überlieferung, sondern eben jene „Menschensatzung", die Jesus in Mk 7 verurteilt.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', quote: `Die Briefe der Apostel richten sich an Gemeinden, die bereits glaubten, getauft waren und die Sakramente feierten; die Schrift setzt das Leben der Kirche voraus.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pelikan',
      role: 'als Dogmenhistoriker, der als Lutheraner begann',
      text: `Jaroslav Pelikan war lutherischer Pastor und schrieb die maßgebliche fünfbändige Geschichte der christlichen Lehre. Am Ende seines Forscherlebens trat er zur Orthodoxie über. Er unterscheidet scharf: **Tradition** ist der lebendige Glaube der Toten – die Gemeinschaft mit allen, die vor uns geglaubt haben; **Traditionalismus** ist der tote Glaube der Lebenden – das bloße Festhalten am Alten.

Sein historisches Ergebnis: Die Kirche hat die Schrift nie isoliert gelesen. Kanon, Glaubensbekenntnis und Bischofsamt sind gemeinsam entstanden, als dreifache Antwort auf die Gnosis im 2. Jahrhundert – man kann das eine nicht ohne die anderen haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Vindication of Tradition', year: '1984', quote: `Tradition ist der lebendige Glaube der Toten; Traditionalismus ist der tote Glaube der Lebenden.`, original: `Tradition is the living faith of the dead; traditionalism is the dead faith of the living.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'florovsky',
      role: 'als orthodoxer Patristiker',
      text: `Georges Florovsky wehrt das Missverständnis ab, Tradition sei ein zweiter Offenbarungsstrom neben der Bibel, der zusätzliche Lehren liefere. Tradition ist für ihn vielmehr die **Schrift, richtig verstanden** – die Auslegung, die im Leben der Kirche, im „Geist der Väter", bewahrt wird. Die Väter waren in erster Linie Ausleger der Schrift; ihre Theologie ist Exegese.

Daraus folgt: Die Frage ist nie „Schrift *oder* Tradition", sondern „Schrift in welcher Auslegungsgemeinschaft?" Auch der Protestant liest die Bibel innerhalb einer Tradition – nur ist sie jünger.`,
      sources: [
        { kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition: An Eastern Orthodox View', year: '1972', quote: `Tradition ist kein selbstständiger Offenbarungsstrom neben der Schrift, sondern deren authentische Auslegung im Leben der Kirche.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'zwei-tim-3-16',
      objection: `„2 Tim 3,16–17: Die Schrift macht den Menschen Gottes ‚vollkommen, zu allem guten Werk geschickt'. Wenn sie vollständig ausrüstet, braucht man nichts weiter – das ist Sola Scriptura in einem Satz."`,
      objectionBy: 'James White',
      targetsPremise: 2,
      answer: `Der Vers sagt, die Schrift sei „nütze" (*ōphelimos*) – nicht, sie sei *allein* nötig. Eph 4,11–13 sagt fast dasselbe über Hirten und Lehrer: Sie sind gegeben „zur Zurüstung der Heiligen", bis wir zur Vollkommenheit gelangen – trotzdem lehrt niemand „Sola Pastores". Und mit „Schrift" meint Paulus hier die Schriften, die Timotheus „von Kind auf" kannte (V. 15): das Alte Testament. Konsequent angewendet, würdest du „Sola AT" beweisen.`,
      detail: `Die Logik „X ist nützlich, um vollkommen zu machen → also ist nur X nötig" trägt nicht. Jak 1,4 sagt, die Geduld solle ein vollkommenes Werk haben, „auf daß ihr seid vollkommen und ganz" – niemand folgert „Geduld allein". Außerdem steht der Vers in einem Abschnitt, in dem Paulus Timotheus gerade auf **zwei** Dinge verweist: „Du aber bleibe in dem, was du gelernt hast … da du weißt, **von wem** du gelernt hast" (3,14) – also auf die persönliche apostolische Unterweisung – *und* auf die Schrift (3,15). Das ist das orthodoxe Modell: Schrift und lebendige Überlieferung.`,
      sources: [
        { kind: 'bibel', work: 'Epheser', ref: '4,11–13', quote: `Und er hat etliche zu Aposteln gesetzt, etliche aber zu Propheten, etliche zu Evangelisten, etliche zu Hirten und Lehrern, daß die Heiligen zugerichtet werden zum Werk des Dienstes, dadurch der Leib Christi erbaut werde, bis daß wir alle hinkommen zu einerlei Glauben und Erkenntnis des Sohnes Gottes und ein vollkommener Mann werden …`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '2. Timotheus', ref: '3,14', quote: `Du aber bleibe in dem, was du gelernt hast und dir vertraut ist, da du weißt, von wem du gelernt hast.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn „pasa graphē" in 2 Tim 3,16 schon das ganze NT meint – welche Bücher genau, und woher weißt du das aus diesem Vers?`,
        `Bedeutet „nützlich zur Lehre" für dich dasselbe wie „einzige unfehlbare Norm"? Wo steht das Wort „allein"?`,
      ],
      followUps: [
        {
          id: 'pasa-graphe-prinzip',
          objection: `„‚Alle Schrift' umfasst prinzipiell alles Inspirierte – also auch das NT, sobald es geschrieben war. Das Prinzip gilt: Was Gott eingehaucht hat, genügt."`,
          objectionBy: 'James White',
          answer: `Einverstanden: Alles Inspirierte ist Gottes Wort – das glauben wir auch. Die Kirche hat nie bestritten, dass alle heilsnotwendige Lehre in der Schrift enthalten ist; Athanasius sagt das ausdrücklich. Aber der Streitpunkt ist ein anderer: Legt sich die Schrift **ohne** die Kirche selbst aus? Die Arianer hatten dieselbe Bibel wie Athanasius – und lasen daraus, der Sohn sei ein Geschöpf.`,
          detail: `Man muss zwei Dinge unterscheiden:

1. **Materiale Genügsamkeit:** Alle heilsnotwendigen Glaubensinhalte sind in der Schrift enthalten. Das haben viele Väter vertreten (Athanasius, Gegen die Heiden 1; Kyrill von Jerusalem, Katechesen 4,17).
2. **Formale Genügsamkeit / Selbstauslegung:** Die Schrift ist so klar, dass jeder Gläubige ohne die Auslegungsgemeinschaft der Kirche zu ihrem richtigen Sinn kommt, und die Kirche hat keine verbindliche Auslegungsautorität.

Sola Scriptura im reformatorischen Sinn ist Punkt 2. Die Väter vertraten Punkt 1 und verwarfen Punkt 2 – gerade *weil* sie mit Häretikern stritten, die die Bibel zitierten.`,
          sources: [
            { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '1', quote: `Die heiligen und gotteingegebenen Schriften genügen zwar zur Verkündigung der Wahrheit; es gibt aber auch viele Werke unserer seligen Lehrer, die dafür verfasst wurden …`, status: 'paraphrase', note: 'Protestanten zitieren nur den ersten Halbsatz; Athanasius verweist im selben Satz auf die Auslegung der Lehrer.' },
          ],
          followUps: [
            {
              id: 'materiale-suffizienz-protestantisch',
              objection: `„Dann gibst du die materiale Genügsamkeit ja zu! Damit bist du im Kern Protestant. Die Tradition hat dann nur noch eine dienende Funktion – genau wie bei uns."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Nein. Der Unterschied liegt darin, wer im Streitfall das letzte Wort über die Auslegung hat: bei euch das Gewissen des Einzelnen bzw. der einzelnen Denomination, bei den Vätern der Konsens der Kirche. Athanasius vertrat beides zugleich – die Genügsamkeit der Schrift *und* die Bindung an „die Überlieferung, Lehre und den Glauben der katholischen Kirche von Anfang an" (An Serapion 1,28). Für ihn war das kein Widerspruch, weil die Schrift das Buch der Kirche ist.`,
              detail: `Das Konzil von Nizäa (325) entschied den Streit mit den Arianern nicht durch einen Bibelvers, sondern durch das nicht-biblische Wort *homoousios* („wesensgleich"). Die Arianer protestierten genau mit dem Argument der Schriftgemäßheit: Das Wort stehe nicht in der Bibel. Athanasius verteidigte es als treue Wiedergabe des biblischen Sinns – und die Autorität, das festzustellen, lag bei der versammelten Kirche. Jeder trinitarische Protestant steht heute dankbar auf diesem Konzilsentscheid.`,
              voices: [
                {
                  person: 'athanasius',
                  role: 'als Verteidiger von Nizäa',
                  text: `In seiner Schrift über die Beschlüsse von Nizäa (De Decretis) erklärt Athanasius, warum die Väter nicht-biblische Worte wählen mussten: Die Arianer akzeptierten jede biblische Formel und deuteten sie um. Erst ein Wort, das den Sinn der Schrift unmissverständlich festhielt, schloss die Ausflucht.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Beschlüsse der Synode von Nizäa (De Decretis)', ref: '19–21', quote: `Die Bischöfe wählten „aus dem Wesen des Vaters" und „wesensgleich", weil die Arianer alle biblischen Ausdrücke in ihrem Sinn umdeuteten.`, status: 'paraphrase' },
                  ],
                },
              ],
              followUps: [
                {
                  id: 'skopos-aus-schrift',
                  objection: `„Aber Athanasius argumentiert doch exegetisch! Sein ‚Skopos' ist aus der Schrift gewonnen. Er ist ein Beweis für Sola Scriptura, nicht dagegen."`,
                  objectionBy: 'Gavin Ortlund',
                  answer: `Er argumentiert exegetisch – **innerhalb** der Glaubensregel, die er in der Taufe empfangen hat. Das ist der hermeneutische Zirkel jeder Auslegung: Man liest die Schrift mit einem Vorverständnis. Die Frage ist nur, ob dieses Vorverständnis das der apostolischen Kirche ist oder ein späteres. Athanasius sagt ausdrücklich, dass er auf die Überlieferung „von Anfang an" blickt.`,
                  detail: `Irenäus nennt dieses Vorverständnis die *Glaubensregel* (*regula fidei* / *kanōn tēs alētheias*), die man in der Taufe empfängt. Sie ist der Bauplan, mit dem man das Mosaik der Schrift richtig zusammensetzt (Adv. Haer. I,9,4). Exegese und Tradition sind bei den Vätern keine Gegensätze, sondern zwei Seiten derselben Treue.`,
                  followUps: [
                    {
                      id: 'nizaea-weil-schriftgemaess',
                      objection: `„Wir akzeptieren Nizäa, weil es schriftgemäß ist – nicht, weil ein Konzil es gesagt hat."`,
                      objectionBy: 'James White',
                      answer: `Genau das sagten die Arianer über *ihre* Auslegung auch. Wenn jeder Christ selbst prüft, ob ein Konzil schriftgemäß ist, dann ist am Ende der Einzelne die letzte Instanz – ein „Papst in jeder Brust". Die Frage „Wer entscheidet, was schriftgemäß ist?" bleibt offen. Die Väter beantworteten sie: die Kirche, versammelt im Heiligen Geist, wie in Apg 15 („Es gefällt dem Heiligen Geist und uns").`,
                      sources: [
                        { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,28', quote: `Denn es gefällt dem heiligen Geiste und uns, euch keine Beschwerung mehr aufzulegen als nur diese nötigen Stücke …`, translation: 'Luther 1912', status: 'verbatim', note: 'Das Apostelkonzil entscheidet verbindlich – nicht jeder Christ für sich.' },
                      ],
                      questionsBack: [
                        `Wenn ein aufrichtiger Unitarier nach gründlichem Studium sagt, Nizäa sei nicht schriftgemäß – mit welcher Autorität sagst du ihm, dass er irrt?`,
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zeig-mir-eine-lehre',
      objection: `„2 Thess 2,15 meint mündliche Lehre, die die Apostel später aufschrieben – der Inhalt ist identisch mit dem NT. Nenn mir eine einzige verbindliche apostolische Lehre, die nicht in der Schrift steht!"`,
      objectionBy: 'James White',
      targetsPremise: 3,
      answer: `Gern – die wichtigste zuerst: **der Kanon selbst.** Kein Vers sagt, welche 27 Bücher ins NT gehören; trotzdem hältst du diese Lehre für verbindlich. Weitere Beispiele: dass der Sonntag statt des Sabbats der christliche Gottesdiensttag ist, die Taufe mit dreimaligem Untertauchen, die Worte der Epiklese, das Kreuzzeichen (Basilius, Über den Hl. Geist 27). Und: 2 Thess 2,15 sagt nirgends, dass die mündliche Form später auslaufen werde – das ist eine Annahme, die du in den Text hineinträgst.`,
      detail: `Die Herausforderung „Nenne eine Lehre, die nicht in der Schrift steht" verschiebt die Beweislast. Der Protestant muss zeigen, dass die Apostel lehrten, ihre mündliche Überlieferung werde mit dem Tod des letzten Apostels ungültig und vollständig im NT aufgehen. Dafür gibt es keinen Beleg. Die Orthodoxie behauptet übrigens nicht, es gebe eine geheime Zusatzoffenbarung mit neuen Dogmen (das war die Behauptung der Gnostiker, gegen die Irenäus schrieb). Die apostolische Überlieferung ist **öffentlich**, und sie ist vor allem der Schlüssel zum **richtigen Verständnis** der Schrift – sowie die gelebte Praxis von Taufe, Eucharistie und Gebet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', ref: '27,66', quote: `Wer hat uns schriftlich gelehrt, die auf den Namen Christi Hoffenden mit dem Zeichen des Kreuzes zu bezeichnen? Welche Schrift lehrte uns, uns beim Gebet nach Osten zu wenden? Wer von den Heiligen hat uns die Worte der Epiklese bei der Darbringung des eucharistischen Brotes und des Kelches des Segens schriftlich hinterlassen?`, translation: 'eigene Übersetzung (nach NPNF II/8)', status: 'verbatim' },
      ],
      questionsBack: [
        `Wo im NT steht die Liste der 27 Bücher?`,
        `Wo lehrt ein Apostel, dass seine mündliche Überlieferung nach seinem Tod ihre Verbindlichkeit verliert?`,
      ],
      followUps: [
        {
          id: 'kanon-erkannt-nicht-geschaffen',
          objection: `„Der Kanon ist keine ‚Lehre', sondern eine Tatsache der Vorsehung. Die Kirche hat ihn nur **erkannt**, nicht geschaffen (Metzger). Sie ist dabei fehlbar – die Bibel ist eine ‚fehlbare Sammlung unfehlbarer Bücher' (Sproul)."`,
          objectionBy: 'R. C. Sproul / Michael Kruger',
          targetsPremise: 3,
          answer: `Einverstanden: Die Kirche hat den Kanon nicht erfunden, sondern erkannt – das sagen wir auch. Aber dieses Erkennen war ein Akt der Kirche, geleitet vom Geist und mit Kriterien aus der Überlieferung (Apostolizität, Rechtgläubigkeit, gottesdienstlicher Gebrauch in den Kirchen). Und jetzt das Dilemma: Wenn die Sammlung **fehlbar** ist, kannst du nicht sicher sein, dass genau diese 27 Bücher Gottes Wort sind. Wenn das Erkennen aber **zuverlässig** war, dann hat der Geist die Kirche in ihrer Überlieferung in einer entscheidenden Frage geführt – warum dann nicht auch bei Taufe, Eucharistie und Bischofsamt, die dieselbe Kirche zur selben Zeit bezeugte?`,
          detail: `Sprouls Formel „a fallible collection of infallible books" ist ehrlich, aber folgenschwer: Sie bedeutet, dass ein Christ grundsätzlich offen sein müsste, ein Buch zu streichen oder hinzuzufügen. Praktisch tut das kein Protestant – er vertraut faktisch dem Urteil der Kirche des 4. Jahrhunderts. Damit erkennt er an, was er theoretisch bestreitet: die Zuverlässigkeit der kirchlichen Überlieferung.

Metzger selbst betont, dass weder Einzelne noch Konzilien den Kanon „schufen", sondern die Kirche die Bücher als sich selbst bezeugend wahrnahm. Genau: *die Kirche* nahm wahr – im Gottesdienst, über Generationen, durch ihre Bischöfe und Synoden.`,
          sources: [
            { kind: 'gegner', author: 'R. C. Sproul', work: 'Vorträge/Schriften zur Schriftlehre (Formel „fallible collection of infallible books")', quote: `Die Bibel ist eine fehlbare Sammlung unfehlbarer Bücher.`, status: 'paraphrase', note: 'Sproul hat die Formel (nach eigener Angabe von John Gerstner übernommen) mehrfach verwendet; genaue Fundstelle nicht gesichert.' },
            { kind: 'fachliteratur', author: 'Bruce M. Metzger', work: 'The Canon of the New Testament', year: '1987', quote: `Weder Einzelne noch Konzilien haben den Kanon geschaffen; sie haben vielmehr die sich selbst bezeugende Qualität dieser Schriften erkannt und anerkannt.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'selbstbeglaubigung',
              objection: `„Der Kanon beglaubigt sich selbst: ‚Meine Schafe hören meine Stimme' (Joh 10,27). Das innere Zeugnis des Heiligen Geistes (Calvin) lässt Gottes Volk Gottes Wort erkennen."`,
              objectionBy: 'Michael Kruger / Johannes Calvin',
              answer: `Dann frage ich: Warum haben aufrichtige, geisterfüllte Christen jahrhundertelang über Hebräer, Jakobus, 2 Petrus und die Offenbarung gestritten (Eusebius, KG III,25)? Und warum gab das „innere Zeugnis" Luther einen anderen Kanon als Calvin? Luther stellte Hebräer, Jakobus, Judas und die Offenbarung ans Ende seines Neuen Testaments und nannte den Jakobusbrief eine „stroherne Epistel". Selbstbeglaubigung funktioniert offenbar nur **in einer Gemeinschaft** über Generationen – also in der Überlieferung der Kirche.`,
              sources: [
                { kind: 'gegner', author: 'Martin Luther', work: 'Vorrede auf das Neue Testament', year: '1522', quote: `Darum ist Sankt Jakobs Epistel eine rechte stroherne Epistel gegen sie, denn sie doch keine evangelische Art an ihr hat.`, translation: 'Original (Schreibweise modernisiert)', status: 'verbatim', note: '„Gegen sie" = im Vergleich zu Joh, Röm, Gal, Eph, 1 Petr. Der Satz fehlt in späteren Ausgaben der Vorrede. Fair zitieren: Luther lobte den Brief an anderer Stelle auch.' },
                { kind: 'bibel', work: 'Johannes', ref: '10,27', quote: `Denn meine Schafe hören meine Stimme, und ich kenne sie, und sie folgen mir.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'kirche-insgesamt-richtig',
                  objection: `„Luthers Zweifel zeigen nur, dass auch große Christen irren. Die Kirche insgesamt ist trotzdem zum richtigen Ergebnis gekommen."`,
                  objectionBy: 'Gavin Ortlund',
                  answer: `Genau – „die Kirche insgesamt", über Generationen, im Konsens: Das ist die Definition der Heiligen Überlieferung. Du hast gerade das orthodoxe Prinzip beschrieben. Wende es nur konsequent an: Derselbe Konsens der ersten Jahrhunderte, der den Kanon erkannte, bekannte die wirkliche Gegenwart Christi in der Eucharistie, die Taufe zur Wiedergeburt, das Bischofsamt und das Gebet für die Entschlafenen.`,
                  followUps: [
                    {
                      id: 'kanon-ja-rest-nein',
                      objection: `„Die Kirche hat den Kanon richtig bewahrt, sich aber in anderen Fragen geirrt – etwa bei der Heiligenverehrung oder bei den Ikonen."`,
                      objectionBy: 'Gavin Ortlund',
                      answer: `Nach welchem Kriterium unterscheidest du, wo die Kirche zuverlässig war und wo nicht? Wenn das Kriterium „was ich in der Schrift lese" ist, bist du im Zirkel: Du benutzt einen Kanon, den die Kirche dir gegeben hat, um die Kirche zu korrigieren, wo sie deiner Auslegung widerspricht. Und historisch: Die Generation, die den Kanon abschloss (Athanasius, Basilius, Kyrill von Jerusalem), betete für die Entschlafenen, verehrte die Märtyrer und glaubte an die reale Gegenwart. War sie im Gottesdienst so verdorben – warum traust du ihr dann beim Inhaltsverzeichnis deiner Bibel?`,
                      voices: [
                        {
                          person: 'kyrill-jerusalem',
                          role: 'als Zeitgenosse des Athanasius und Katechet',
                          text: `Derselbe Kyrill, dessen Katechesen Protestanten gern für die Genügsamkeit der Schrift zitieren (Kat. 4,17), nennt in seinen Katechesen einen Kanon und erklärt den Neugetauften die reale Gegenwart Christi in Brot und Wein sowie das Gedächtnis der Heiligen und das Gebet für die Entschlafenen in der Liturgie (Myst. Kat. 4–5). Für ihn gehören Schriftgebundenheit und sakramentales Leben selbstverständlich zusammen.`,
                          sources: [
                            { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '4,6', quote: `Betrachte also Brot und Wein nicht als bloße Elemente; denn sie sind nach dem Wort des Herrn Leib und Blut Christi. Auch wenn die Sinne dir etwas anderes nahelegen, soll der Glaube dich festigen.`, translation: 'eigene Übersetzung (nach NPNF II/7)', status: 'verbatim', note: 'Verfasserschaft der Mystagogischen Katechesen umstritten (Kyrill oder sein Nachfolger Johannes); Jerusalemer Praxis des späten 4. Jh.' },
                          ],
                        },
                      ],
                      questionsBack: [
                        `Wenn die Kirche des 4. Jahrhunderts in Gebet und Sakrament geirrt hat – warum vertraust du ausgerechnet ihrer Kanonentscheidung?`,
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'basilius-adiaphora',
          objection: `„Basilius' ungeschriebene Überlieferungen sind Riten – Kreuzzeichen, Gebetsrichtung. Das sind Adiaphora, keine Heilslehren. Lehrmäßig bleibt die Schrift allein Norm."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Basilius führt diese Bräuche gerade in einem **Lehrstreit** an – zur Verteidigung der Gottheit des Heiligen Geistes – und sagt ausdrücklich, beide Formen der Überlieferung hätten „dieselbe Kraft für die Frömmigkeit". Für ihn verrät die Art, wie die Kirche betet und tauft, was sie glaubt. Wer die ungeschriebenen Bräuche verwirft, so Basilius, „verstümmelt das Evangelium in seinen Hauptpunkten".`,
          detail: `Die Unterscheidung „Riten sind Nebensache, Lehre ist Hauptsache" ist modern. In der Alten Kirche ist die Liturgie selbst Bekenntnis: Die dreifache Taufe bezeugt die Dreieinigkeit, die Doxologie bezeugt die Gottheit des Geistes, die Epiklese bezeugt, dass der Geist die Gaben wandelt. *Lex orandi, lex credendi.*`,
          followUps: [
            {
              id: 'basilius-de-fide',
              objection: `„Basilius sagt aber auch: Es ist ein offenkundiger Abfall vom Glauben, etwas zu verwerfen, was geschrieben steht, oder etwas einzuführen, was nicht geschrieben steht (Über den Glauben 1). Das ist Sola Scriptura!"`,
              objectionBy: 'protestantische Patristik-Apologeten (z. B. William Webster)',
              answer: `Ehrlich: Basilius hat diesen Satz geschrieben – und zwar gegen Arianer und Pneumatomachen, die neue, unbiblische Lehren über den Sohn und den Geist einführten. Derselbe Basilius verteidigt die ungeschriebene Überlieferung. Für ihn ist das kein Widerspruch: Die echte Überlieferung führt nichts „Fremdes" ein, sondern ist die Art, wie die Kirche die Schrift versteht und lebt. Wer nur den einen Satz zitiert und den anderen verschweigt, tut genau das, was man uns vorwirft: Er pickt Rosinen.`,
              sources: [
                { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Glauben (De fide), Vorwort zu den Moralia', ref: '1', quote: `Es ist ein offenkundiger Abfall vom Glauben und ein Zeichen von Hochmut, etwas von dem Geschriebenen zu verwerfen oder etwas Ungeschriebenes einzuführen.`, status: 'paraphrase', note: 'Fair zitieren: Kontext ist die Abwehr dogmatischer Neuerungen der Arianer.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'konzilien-widersprechen',
      objection: `„Konzilien haben sich widersprochen: Ephesus 449 gegen Chalcedon 451, das Bilderstürmer-Konzil 754 gegen Nizäa 787. Luther hatte recht in Worms: Päpste und Konzilien haben geirrt. Nur die Schrift irrt nicht."`,
      objectionBy: 'Martin Luther (Worms 1521) / Gavin Ortlund',
      targetsPremise: 4,
      answer: `Nicht jede Versammlung, die sich Konzil nennt, ist von der Kirche angenommen worden – die Rezeption durch die ganze Kirche gehört dazu. Aber beachte: Auch die Schrift braucht eine Kirche, die sie erkennt – und über den Kanon wurde ebenfalls gestritten. Vor allem aber: Wenn schon Konzilien fehlbar sind, dann ist der einzelne Ausleger es noch viel mehr. Luther und Zwingli – beide Sola-Scriptura-Theologen – konnten sich 1529 in Marburg nicht einmal über die vier Worte „Das ist mein Leib" einigen.`,
      detail: `Die Alternative lautet nicht „fehlbare Konzilien oder unfehlbare Schrift", sondern „Schriftauslegung durch den Konsens der Kirche oder Schriftauslegung durch den Einzelnen bzw. die einzelne Denomination". Luther hat in Worms nicht die Schrift gegen Menschen gestellt, sondern **seine Auslegung** der Schrift gegen die Auslegung der Kirche. Das ist der eigentliche Kern.`,
      sources: [
        { kind: 'gegner', author: 'Martin Luther', work: 'Antwort vor dem Reichstag zu Worms', year: '1521', quote: `Wenn ich nicht durch Zeugnisse der Schrift oder einen klaren Vernunftgrund überwunden werde – denn ich glaube weder dem Papst noch den Konzilien allein, da es feststeht, dass sie öfter geirrt und sich selbst widersprochen haben –, so bin ich durch die von mir angeführten Schriftworte überwunden …`, status: 'paraphrase', note: 'Der berühmte Satz „Hier stehe ich, ich kann nicht anders" ist in den frühesten Berichten nicht sicher belegt – nicht als Zitat verwenden.' },
      ],
      followUps: [
        {
          id: 'kopten-selbst-getrennt',
          objection: `„Ihr Kopten habt euch 451 selbst von der Mehrheit getrennt. Welche ‚unfehlbare Tradition' gilt also – eure oder die der Byzantiner? Das beweist doch, dass Tradition kein sicherer Maßstab ist."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Die Trennung von 451 ist eine echte Wunde – das sagen wir offen. Aber schau, worum es ging: um Begriffe, mit denen man den *gemeinsamen* Glauben an Christus als wahren Gott und wahren Menschen in *einer* Person ausdrückt. Die gemeinsamen Erklärungen der orthodoxen Kirchen von 1989 und 1990 halten fest, dass beide denselben Glauben bekennen. Und noch wichtiger: Koptische, byzantinische, armenische, syrische Kirchen – seit 451 getrennt, ohne Absprache – haben **dieselbe** Taufe, Eucharistie, Priesterweihe, Fürbitte der Heiligen und dasselbe Gebet für die Entschlafenen. Das ist ein starkes Indiz, dass all das älter ist als die Trennung – also apostolisch.`,
          detail: `Das ist ein historisches Argument, das ein Protestant ernst nehmen muss: Kirchen, die sich seit dem 5. Jahrhundert gegenseitig misstrauten, können sich nicht auf neue Erfindungen geeinigt haben. Was sie gemeinsam haben, stammt aus der Zeit vor der Trennung. Selbst die Kirche des Ostens („nestorianisch", seit 431 getrennt) kennt Bischöfe, Eucharistie als Opfer und das Gebet für die Toten.`,
          voices: [
            {
              person: 'bishoy',
              role: 'als Teilnehmer der offiziellen orthodoxen Dialoge',
              text: `Metropolit Bischoi gehörte zu den koptischen Vertretern in den Dialogen zwischen orientalisch- und östlich-orthodoxen Kirchen. Die gemeinsamen Erklärungen (Anba-Bischoi-Kloster 1989, Chambésy 1990) halten fest, dass beide Familien denselben christologischen Glauben bekennen, auch wenn sie ihn in unterschiedlicher Terminologie ausdrücken. Für das Gespräch mit Protestanten heißt das: Die Spaltung von 451 betrifft nicht das sakramentale und kirchliche Leben, das beide Seiten unverändert bewahrten.`,
            },
          ],
          followUps: [
            {
              id: 'alt-nicht-apostolisch',
              objection: `„Gemeinsamkeit beweist nur, dass etwas alt ist – nicht, dass es apostolisch ist. Auch Fehler können sehr früh entstehen."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Im Prinzip richtig. Aber dann liegt die Beweislast bei dir: Zeige, wann und wo etwa der Glaube an die reale Gegenwart in der Eucharistie eingedrungen ist. Ignatius (um 110) und Justin (um 150) bezeugen ihn bereits – Ignatius war Schüler der Apostel-Generation. Wenn eine Praxis überall verbreitet, unbestritten und schon eine Generation nach den Aposteln bezeugt ist, ist die apostolische Herkunft die beste Erklärung. Tertullian fragt: Ist es wahrscheinlich, dass so viele und so große Kirchen sich in **denselben** Glauben verirrt haben?`,
              sources: [
                { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Prozesseinrede gegen die Häretiker (De praescriptione haereticorum)', ref: '28', year: 'um 200', quote: `Ist es wahrscheinlich, dass so viele und so große Kirchen sich in ein und denselben Glauben verirrt haben? … Was bei vielen als Eines gefunden wird, ist nicht Irrtum, sondern Überlieferung.`, status: 'paraphrase', note: 'Tertullian wird apologetisch zitiert, nicht als Lehrautorität (später Montanist).' },
                { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '7,1', year: 'um 110', quote: `Von Eucharistie und Gebet halten sie sich fern, weil sie nicht bekennen, dass die Eucharistie das Fleisch unseres Retters Jesus Christus ist, das für unsere Sünden gelitten hat und das der Vater in seiner Güte auferweckt hat.`, original: `εὐχαριστίας καὶ προσευχῆς ἀπέχονται, διὰ τὸ μὴ ὁμολογεῖν τὴν εὐχαριστίαν σάρκα εἶναι τοῦ σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'chiliasmus-irrtum',
                  objection: `„Die frühe Kirche hatte nachweislich Irrtümer: Justin und Irenäus waren Chiliasten (tausendjähriges Reich auf Erden), Tertullian wurde Montanist, Origenes lehrte die Präexistenz der Seelen."`,
                  objectionBy: 'Gavin Ortlund',
                  answer: `Richtig – einzelne Väter haben geirrt, und wir sagen das offen (Origenes und Tertullian sind in der koptischen Kirche keine Lehrautoritäten). Gerade deshalb ist das Kriterium nicht „ein Vater hat es gesagt", sondern der **Konsens** der Kirche: was „überall, immer und von allen" geglaubt wurde (Vinzenz von Lérins). Der Chiliasmus war nie allgemein: Der koptische Papst Dionysius von Alexandrien widerlegte im 3. Jahrhundert den chiliastischen Bischof Nepos – und die Kirche folgte ihm. Die reale Gegenwart in der Eucharistie dagegen hat in der Alten Kirche niemand bestritten.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'VII,24', quote: `Bericht, wie Dionysius von Alexandrien die chiliastische Lehre des ägyptischen Bischofs Nepos in Gesprächen mit den Gemeinden widerlegte und diese ihren Irrtum einsahen.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,6', year: '434', quote: `In der katholischen Kirche selbst ist sehr dafür zu sorgen, dass wir festhalten, was überall, was immer, was von allen geglaubt worden ist.`, original: `quod ubique, quod semper, quod ab omnibus creditum est`, translation: 'eigene Übersetzung', status: 'verbatim' },
                  ],
                  voices: [
                    {
                      person: 'dionysius-alexandrien',
                      role: 'als koptischer Papst, der einen Irrtum durch geduldiges Gespräch heilte',
                      text: `Dionysius reiste in die Gegend von Arsinoë (Fayum), wo die Lehre des Nepos verbreitet war, und diskutierte drei Tage lang mit Presbytern und Lehrern über die Schrift – bis der Hauptvertreter des Chiliasmus seinen Irrtum öffentlich einsah. Ein Musterbeispiel dafür, wie die Kirche Irrtümer einzelner durch Schrift, Gespräch und Konsens korrigiert, nicht durch individuelle Willkür.`,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'beroeer',
      objection: `„Die Beröer prüften täglich in der Schrift, ob es sich so verhielte – und wurden dafür gelobt (Apg 17,11). Sie prüften sogar einen Apostel an der Schrift! Genau das ist Sola Scriptura."`,
      objectionBy: 'Wayne Grudem',
      answer: `Lies das Ergebnis: Die Beröer prüften die mündliche Predigt des Paulus am Alten Testament – und nahmen dann die **mündliche** apostolische Botschaft an, die noch gar nicht aufgeschrieben war. Sie praktizierten also „Schrift + apostolisches Wort", nicht „Schrift allein". Hätten sie nur angenommen, was ausdrücklich im AT steht, hätten sie das Evangelium von der Auferstehung Jesu nie glauben können.`,
      detail: `Die Beröer waren Juden, die eine neue Botschaft an der Schrift prüften, die sie bereits innerhalb ihrer jüdischen Auslegungstradition lasen. Und sie prüften mit dem Apostel zusammen, der ihnen die Schrift öffnete – wie Philippus dem Kämmerer (Apg 8,30–31) und wie Jesus den Emmausjüngern (Lk 24,27). Der Text lobt die Offenheit und Gründlichkeit, nicht ein Prinzip, nach dem der Einzelne über die Lehre der Kirche zu Gericht sitzt.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,11', quote: `Diese aber waren edler denn die zu Thessalonich; die nahmen das Wort auf ganz williglich und forschten täglich in der Schrift, ob sich's also verhielte.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Lukas', ref: '24,27', quote: `Und fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'wir-pruefen-euch',
          objection: `„Genau das tun wir: Wir prüfen eure Traditionen an der Schrift – und viele bestehen die Prüfung nicht."`,
          objectionBy: 'James White',
          answer: `Herzlich willkommen – die Orthodoxie hat davor keine Angst. Prüfe unsere Überlieferung an der Schrift: Eucharistie an Joh 6 und 1 Kor 10–11, Taufe an Joh 3,5 und Tit 3,5, Beichte an Joh 20,23, Krankensalbung an Jak 5,14. Aber prüfe fair: nicht nur unsere Tradition an deiner Auslegung, sondern **beide** Auslegungen an der Schrift **und** an der frühesten Kirche, die die Apostel noch kannte.`,
          followUps: [
            {
              id: 'schrift-ist-klar',
              objection: `„Man braucht keine Brille der Tradition. Die Schrift ist in allen heilsnotwendigen Dingen klar (perspicuitas)."`,
              objectionBy: 'Wayne Grudem',
              answer: `Wenn sie so klar ist, dass jeder aufrichtige Christ zum selben Ergebnis kommt – warum sind sich Lutheraner, Reformierte, Baptisten und Pfingstler uneins darüber, was in der Taufe geschieht, was das Abendmahl ist, ob man das Heil verlieren kann? Das sind keine Randfragen, sondern Fragen des Heils. Selbst die Westminster-Konfession räumt ein, dass nicht alles in der Schrift gleich klar ist. (Mehr dazu im Claim „Jeder kann die Bibel selbst auslegen".)`,
              sources: [
                { kind: 'gegner', work: 'Westminster-Bekenntnis', ref: '1,7', year: '1647', quote: `Nicht alle Dinge in der Schrift sind in sich gleich klar, noch allen gleich deutlich; doch was zum Heil zu wissen, zu glauben und zu befolgen notwendig ist, wird an der einen oder anderen Stelle so deutlich dargelegt, dass nicht nur die Gelehrten, sondern auch die Ungelehrten bei rechtem Gebrauch der gewöhnlichen Mittel zu einem hinreichenden Verständnis gelangen können.`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vaeter-lehrten-sola',
      objection: `„Die Väter lehrten selbst Sola Scriptura: Kyrill von Jerusalem sagt, man solle ihm nichts glauben, was er nicht aus der Schrift beweise (Kat. 4,17), und Athanasius sagt, die Schriften genügten zur Verkündigung der Wahrheit."`,
      objectionBy: 'R. C. Sproul / William Webster',
      targetsPremise: 4,
      answer: `Diese Väter bekennen die höchste Autorität und die inhaltliche Genügsamkeit der Schrift – das tun wir auch. Aber sie sagen es innerhalb einer Kirche mit Bischöfen, Liturgie und Glaubensbekenntnis. Kyrill sagt diesen Satz zu Taufbewerbern, denen er gleichzeitig das Glaubensbekenntnis der Kirche übergibt, und erklärt ihnen später Taufe, Myron und die Eucharistie als wahren Leib und wahres Blut. Die „Schriftbindung" der Väter hat den orthodoxen Glauben hervorgebracht, nicht den protestantischen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '4,17', quote: `Über die göttlichen und heiligen Geheimnisse des Glaubens darf man nicht einmal das Geringste ohne die göttlichen Schriften überliefern … Glaube auch mir nicht, wenn ich dir dies sage, wenn du nicht den Beweis aus den göttlichen Schriften erhältst.`, status: 'paraphrase', note: 'Echter, oft zitierter Satz – Kontext: Katechese für Taufbewerber, denen zugleich das Bekenntnis der Kirche übergeben wird (Kat. 5,12).' },
      ],
      followUps: [
        {
          id: 'rosinenpicken',
          objection: `„Das ist Rosinenpicken: Du deutest jede schriftfreundliche Aussage der Väter im Licht deiner späteren Tradition."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Machen wir einen Test: Nenne mir einen einzigen Vater vor dem 16. Jahrhundert, der mit Berufung auf die Schrift allein die reale Gegenwart in der Eucharistie, die Taufe zur Wiedergeburt, das Bischofsamt oder das Gebet für die Entschlafenen verworfen hat. Die Väter, die du zitierst, lehrten all das. Wer ihre Schriftliebe zitiert, aber ihren Glauben ablehnt, liest sie selektiv – nicht ich.`,
          questionsBack: [
            `Welcher Kirchenvater teilte dein Verständnis von Abendmahl, Taufe und Kirche?`,
          ],
          followUps: [
            {
              id: 'mystagogien-unecht',
              objection: `„Die Mystagogischen Katechesen stammen vielleicht gar nicht von Kyrill, sondern von seinem Nachfolger."`,
              objectionBy: 'patristische Forschung',
              answer: `Das ist möglich – die Verfasserschaft ist umstritten. Aber das ändert nichts: Dann bezeugen sie die Lehre der Kirche von Jerusalem eine Generation später, am selben Ort, für dieselben Taufbewerber. Und dieselbe Lehre findet sich unabhängig davon bei Ignatius, Justin, Irenäus und in allen alten Liturgien – auch in der koptischen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'creatura-verbi',
      objection: `„Die Kirche ist Geschöpf des Wortes (creatura verbi), nicht umgekehrt. Das Wort Gottes war vor der Kirche – also steht die Schrift über der Kirche."`,
      objectionBy: 'Martin Luther / R. C. Sproul',
      answer: `Ja, das Wort Gottes schafft die Kirche – aber welches Wort? Zu Pfingsten war es die **mündliche** Predigt der Apostel, die Paulus „wahrhaftig Gottes Wort" nennt (1 Thess 2,13). Das geschriebene NT entstand danach **in** der Kirche, durch Apostel der Kirche, für Gemeinden der Kirche, und wurde im Gottesdienst der Kirche gelesen und gesammelt. Das Wort, das der Kirche vorausging, war also gerade die apostolische Überlieferung in ihrer ersten Gestalt.`,
      followUps: [
        {
          id: 'kein-zugang-muendlich',
          objection: `„Heute haben wir zur mündlichen Predigt der Apostel aber keinen Zugang mehr – außer durch die Schrift."`,
          objectionBy: 'Keith Mathison',
          answer: `Doch: durch das ununterbrochene Leben der Kirche. Die Taufe mit dem trinitarischen Bekenntnis, die Eucharistie, das Glaubensbekenntnis, die Liturgie (schon die Didache, um 100, enthält Gebete und Ordnungen), die Väter, die Schüler der Apostelschüler waren (Irenäus hörte Polykarp, Polykarp hörte Johannes). Das ist keine Geheimlehre wie bei den Gnostikern, sondern öffentlich und überprüfbar – in jeder Gemeinde.`,
          voices: [
            {
              person: 'polykarp',
              role: 'als Glied der Kette Johannes – Polykarp – Irenäus',
              text: `Irenäus erinnert sich als alter Mann, wie er als Junge den greisen Polykarp in Smyrna erzählen hörte, was er vom Apostel Johannes und anderen Augenzeugen des Herrn gehört hatte. Polykarp hatte von Aposteln gelernt und war von Aposteln als Bischof eingesetzt worden. Diese Kette ist kein Mythos, sondern lebendige Erinnerung innerhalb von zwei Generationen – genau das Modell von 2 Tim 2,2.`,
              sources: [
                { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,4', quote: `Polykarp wurde nicht nur von Aposteln unterwiesen und verkehrte mit vielen, die den Herrn gesehen hatten, sondern wurde auch von Aposteln in Asien als Bischof der Kirche in Smyrna eingesetzt.`, status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Brief an Florinus (bei Eusebius, Kirchengeschichte V,20)', quote: `Irenäus erinnert sich, wie Polykarp von seinem Umgang mit Johannes und den anderen, die den Herrn gesehen hatten, erzählte.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo lehrt die Bibel, dass allein die Bibel die einzige unfehlbare Autorität ist?`,
    `Aus welchem Bibelvers weißt du, welche 27 Bücher ins Neue Testament gehören?`,
    `Was war die verbindliche Lehre der Christen in den rund 20 Jahren zwischen Pfingsten und dem ersten Paulusbrief?`,
    `Wenn zwei aufrichtige, bibeltreue Christen die Schrift in einer Heilsfrage gegensätzlich auslegen – wer entscheidet?`,
    `Nenne einen Kirchenvater vor 1500, der mit Berufung auf „die Schrift allein" Kindertaufe, reale Gegenwart oder Bischofsamt verwarf.`,
  ],
  avoid: [
    `„Die Kirche hat die Bibel geschrieben, also steht die Kirche über der Bibel." – Die Kirche hat den Kanon erkannt, nicht erschaffen; die Orthodoxie stellt sich nicht *über* die Schrift, sondern liest sie *in* der Kirche.`,
    `„Ihr Protestanten habt 40.000 Konfessionen." – Die Zahl (World Christian Encyclopedia / Center for the Study of Global Christianity) zählt Organisationseinheiten in jedem Land und schließt auch katholische und orthodoxe Strukturen ein. Sag besser: „Es gibt tausende unabhängige Denominationen, die sich in Heilsfragen wie Taufe und Abendmahl widersprechen."`,
    `Behaupten, es gebe eine geheime mündliche Zusatzoffenbarung mit neuen Dogmen. Das war die Position der Gnostiker; die apostolische Überlieferung ist öffentlich und stimmt mit der Schrift überein.`,
    `Die Bibel herabsetzen („ohne Priester ist sie nutzlos"). Die koptische Kirche ehrt das Evangelium mit Kerzen, Weihrauch und Prozession – wir verteidigen die Tradition nicht gegen die Schrift, sondern als ihren Lebensraum.`,
  ],
  concessions: [
    `Die Väter (Athanasius, Kyrill von Jerusalem, Basilius) betonen die höchste Autorität und inhaltliche Genügsamkeit der Schrift sehr stark – Protestanten zitieren sie zu Recht. Der Unterschied liegt in der Frage der Auslegungsgemeinschaft.`,
    `Nicht jeder Brauch, der „Tradition" heißt, ist apostolisch. Die Kirche unterscheidet die Heilige Überlieferung von örtlichen Gewohnheiten, und im späten Mittelalter gab es im Westen echte Missstände, gegen die die Reformatoren berechtigt protestierten.`,
    `Seriöse Reformierte (Mathison, Ortlund) vertreten kein „Solo Scriptura"; sie schätzen die altkirchlichen Bekenntnisse. Fair bleiben und nicht die schwächste Form des Arguments angreifen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Whiteford', work: 'Sola Scriptura: An Orthodox Analysis of the Cornerstone of Reformation Theology', year: '1996', status: 'paraphrase', note: 'Kurz, verständlich, orthodox.' },
    { kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition: An Eastern Orthodox View', year: '1972', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Vindication of Tradition', year: '1984', status: 'paraphrase' },
    { kind: 'gegner', author: 'Keith A. Mathison', work: 'The Shape of Sola Scriptura', year: '2001', status: 'paraphrase', note: 'Die stärkste reformierte Darstellung – wer sie kennt, wird nicht überrascht.' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sola Scriptura', 'Tradition', 'Kanon', 'Autorität', 'Reformation'],
  related: [
    'sola-scriptura/tradition-menschenlehre',
    'sola-scriptura/jeder-legt-selbst-aus',
    'sola-scriptura/deuterokanonen-keine-bibel',
    'sola-scriptura/kirche-war-verdorben',
    'neues-testament/kanon-von-konstantin',
    'sakramente/abendmahl-symbolisch',
    'christologie-chalcedon/kopten-sind-monophysiten',
  ],
};

export default claim;
