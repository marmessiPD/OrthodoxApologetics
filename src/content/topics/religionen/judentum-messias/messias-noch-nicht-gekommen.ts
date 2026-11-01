import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'messias-noch-nicht-gekommen',
  title: `„Der Messias ist noch nicht gekommen."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel zu Daniel 9 (2014)' },
    { name: 'Rabbi Stuart Federow', role: 'Rabbiner in Houston, Radiosendung „What Would Moses Say?"', work: 'Judaism and Christianity: A Contrast (2012)' },
    { name: 'Moses Maimonides (Rambam)', role: 'Rechtsgelehrter und Philosoph, 1138–1204', work: '13 Glaubensgrundsätze, Nr. 12 (Kommentar zur Mischna, Sanhedrin 10)' },
    { name: 'Raschi', role: 'Bibelkommentator, 1040–1105', work: 'Kommentar zu Daniel 9,24–27' },
  ],
  steelman: `Das Judentum lebt in der Erwartung: „Ich glaube mit vollkommenem Glauben an das Kommen des Messias, und auch wenn er säumt, warte ich doch jeden Tag auf sein Kommen" (12. Glaubensgrundsatz). Die christlichen „Zeitbeweise" halten einer genauen Prüfung nicht stand. In Dan 9,25–26 steht „maschiach" ohne Artikel – „ein Gesalbter", also ein Priester oder König; nach den masoretischen Akzenten kommt der „Gesalbte, ein Fürst" schon nach sieben Wochen (49 Jahren) – gemeint ist Kyros oder der Hohepriester Josua –, und der nach 62 Wochen „ausgerottete Gesalbte" ist ein späterer Amtsträger (Raschi denkt an König Agrippa, die historisch-kritische Forschung an den 171 v. Chr. ermordeten Hohepriester Onias III.). Christen selbst können sich seit Jahrhunderten nicht auf eine Berechnung einigen. Haggai 2,9 – die Herrlichkeit des zweiten Hauses größer als die des ersten – erfüllte sich in Herodes' prachtvollem Ausbau; der Talmud sagt: größer an Bau und an Dauer. Gen 49,10 ist dunkel („Schilo"), und Juda hatte das Königtum schon 586 v. Chr. verloren; die Hasmonäer waren Leviten, Herodes Idumäer. Und Mal 3,1 spricht von Gott selbst und vom Propheten Elija (3,23), nicht von einem göttlichen Messias.`,
  biblical: {
    summary: `Mehrere Prophetien binden das Kommen des Gesalbten an die Zeit des **Zweiten Tempels**: Nach Dan 9,26 wird ein Gesalbter „ausgerottet", und danach zerstört das Volk eines kommenden Fürsten „die Stadt und das Heiligtum" – das geschah 70 n. Chr. Nach Hag 2,6–9 soll gerade dieses zweite Haus mit Herrlichkeit (kavod) erfüllt werden, die die des ersten übertrifft. Nach Mal 3,1 kommt „der Herr, den ihr sucht, plötzlich zu seinem Tempel" – der Tempel muss also stehen. Gen 49,10 kündigt an, dass das Zepter nicht von Juda weicht, „bis Schilo kommt". Wie man die Einzelheiten auch berechnet: Alle diese Texte weisen in die Zeit **vor 70 n. Chr.**`,
    detail: `**Dan 9,24–27:** Siebzig „Wochen" (Jahrwochen, 490 Jahre) sind bestimmt, „um die Übertretung zu beenden, die Sünde zu versiegeln, die Schuld zu sühnen, ewige Gerechtigkeit zu bringen, Gesicht und Prophet zu versiegeln und ein Hochheiliges zu salben" (9,24). Die Reihenfolge in 9,26 ist eindeutig: erst wird der Gesalbte ausgerottet, dann werden Stadt und Heiligtum zerstört. Ob die masoretischen Akzente die sieben und die 62 Wochen trennen oder nicht und welcher Erlass der Ausgangspunkt ist (Kyros 539, Artaxerxes 457 oder 445 v. Chr.) – an dieser Reihenfolge ändert sich nichts. Die rabbinische Chronik Seder Olam Rabba lässt die 490 Jahre selbst mit der Zerstörung des Zweiten Tempels enden.

**Hag 2,3–9:** Haggai spricht zu Menschen, die den ersten Tempel noch gesehen haben (2,3), über „dieses Haus". „Kavod" (Herrlichkeit) ist das Wort für Gottes Gegenwart, die Stiftshütte und Salomos Tempel erfüllte (Ex 40,34; 1 Kön 8,11). Nach dem Talmud fehlten dem Zweiten Tempel aber fünf Dinge, darunter die Schechina (bYoma 21b).

**Mal 3,1:** „Siehe, ich sende meinen Boten, der vor mir her den Weg bereiten soll; und plötzlich wird zu seinem Tempel kommen der Herr (ha-adon), den ihr sucht, und der Engel des Bundes." Der Vorläufer ist Johannes der Täufer (Mt 11,10.14), der Herr kommt in Jesus in den Tempel (Lk 2,22–32; Joh 2,13–22).

**Gen 49,10:** Der Targum Onkelos übersetzt: „bis der Messias kommt, dem das Königtum gehört".`,
    sources: [
      { kind: 'bibel', work: 'Daniel', ref: '9,26', quote: `Und nach den zweiundsechzig Wochen wird ein Gesalbter ausgerottet werden und nichts haben; und das Volk eines Fürsten, der kommen wird, wird die Stadt und das Heiligtum zerstören.`, original: 'וְאַחֲרֵי הַשָּׁבֻעִים שִׁשִּׁים וּשְׁנַיִם יִכָּרֵת מָשִׁיחַ וְאֵין לוֹ וְהָעִיר וְהַקֹּדֶשׁ יַשְׁחִית עַם נָגִיד הַבָּא', translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Haggai', ref: '2,7.9', quote: `Und ich will dieses Haus mit Herrlichkeit erfüllen, spricht der HERR der Heerscharen … Die künftige Herrlichkeit dieses Hauses wird größer sein als die erste … und an diesem Ort will ich Frieden geben.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Maleachi', ref: '3,1', quote: `Siehe, ich will meinen Engel senden, der vor mir her den Weg bereiten soll. Und bald wird kommen zu seinem Tempel der HERR, den ihr suchet; und der Engel des Bundes, des ihr begehret, siehe, er kommt! spricht der HERR Zebaoth.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '49,10', quote: `Es wird das Zepter von Juda nicht entwendet werden noch der Stab des Herrschers von seinen Füßen, bis daß der Held komme; und demselben werden die Völker anhangen.`, translation: 'Luther 1912', status: 'verbatim', note: 'Luther übersetzt „Schilo" mit „der Held"; die Deutung des Wortes ist umstritten.' },
      { kind: 'juedisch', work: 'Targum Onkelos zu Genesis', ref: '49,10', quote: `… bis der Messias kommt, dem das Königtum gehört, und ihm werden die Völker gehorchen.`, original: 'עד דייתי משיחא דדיליה היא מלכותא', translation: 'eigene Übersetzung aus dem Aramäischen', status: 'paraphrase' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Yoma', ref: '21b', quote: `Fünf Dinge unterschieden das erste Heiligtum vom zweiten: die Lade mit Deckel und Cheruben, das Feuer, die Schechina, der heilige Geist (der Prophetie) und die Urim und Tummim.`, status: 'paraphrase', url: 'https://www.sefaria.org/Yoma.21b' },
    ],
  },
  church: {
    summary: `Die Väter haben das zeitliche Argument früh entfaltet. Athanasius von Alexandrien fragt in „Über die Menschwerdung": Wann haben in Israel Prophet und Vision aufgehört, wann sind Jerusalem und der Tempel untergegangen – wenn nicht seit Christus gekommen ist? Daniel habe angekündigt, dass „Gesicht und Prophet versiegelt" werden, wenn der Hochheilige gesalbt wird (Dan 9,24). Eusebius von Caesarea hat in der „Demonstratio Evangelica" die Berechnungen der 70 Wochen (u. a. des Julius Africanus) gesammelt. Hieronymus zählt in seinem Danielkommentar viele verschiedene Deutungen auf – christliche und jüdische – und wagt kein abschließendes Urteil: ein ehrliches Vorbild.`,
    detail: `Für die koptische Kirche hat das Kommen Christi „in der Fülle der Zeit" (Gal 4,4) auch eine ägyptische Note: Jes 19,1 kündigt an, dass „der HERR auf einer schnellen Wolke reitet und nach Ägypten kommt", und die Kirche feiert die Flucht der Heiligen Familie nach Ägypten (Mt 2,13–15) als Erfüllung und Segen für ihr Land (vgl. Jes 19,19–25: „Gesegnet sei Ägypten, mein Volk"). Gegenüber jüdischen Gesprächspartnern betont die Kirche: Die Zeit der ersten Ankunft ist erfüllt; die Hoffnung Israels auf die Vollendung teilen wir.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '39–40', year: 'ca. 318', quote: `Wann hörten in Israel Prophet und Vision auf? War es nicht jetzt, seit Christus, der Heilige der Heiligen, gekommen ist? … Wenn noch nicht gekommen ist, der erwartet wurde, so zeigt uns einen König, einen Propheten, eine Vision unter euch.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Demonstratio Evangelica', ref: 'VIII,2', year: 'um 315', status: 'paraphrase', quote: `Sammlung und Erörterung der Berechnungen der siebzig Wochen, darunter die des Julius Africanus.` },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Kommentar zu Daniel', ref: 'zu 9,24–27', year: '407', status: 'paraphrase', quote: `Hieronymus referiert die Deutungen von Africanus, Eusebius, Hippolyt, Apollinaris, Clemens, Origenes, Tertullian und der Juden und überlässt dem Leser das Urteil.` },
    ],
  },
  opposingView: {
    summary: `Die jüdische Tradition hält am künftigen Kommen des Messias fest und warnt zugleich vor Berechnungen: „Es mögen die Gebeine derer zerbersten, die das Ende berechnen" (bSanhedrin 97b, Rabbi Jonatan). Zugleich bezeugt derselbe Talmud, dass die von den Weisen erwarteten Zeiten verstrichen sind: „Alle Termine sind abgelaufen, und die Sache hängt nur noch von Umkehr und guten Taten ab" (Rav, bSanhedrin 97b). Die historisch-kritische Forschung datiert Daniel überwiegend in die Makkabäerzeit (um 165 v. Chr.) und bezieht den „ausgerotteten Gesalbten" auf Onias III.`,
    detail: `Ehrlich festzuhalten: Die Rechnungen christlicher Ausleger (z. B. Artaxerxes 457 v. Chr. bis ca. 27 n. Chr.; 445 v. Chr. mit „prophetischen" 360-Tage-Jahren bis 33 n. Chr., so Harold Hoehner) unterscheiden sich, und die masoretischen Akzente in Dan 9,25 trennen „sieben Wochen" von „62 Wochen". Unabhängig davon berichten Josephus, Tacitus und Sueton, dass im 1. Jahrhundert eine verbreitete Erwartung bestand, nach den jüdischen Schriften werde um diese Zeit ein Herrscher aus Judäa die Welt regieren – Josephus bezog das Orakel auf Vespasian. Die Zeitnähe der Erwartung ist also auch außerhalb des Christentums bezeugt.`,
    sources: [
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '97b', quote: `Rav sagte: Alle Termine (kizzin) sind abgelaufen, und die Sache hängt nur noch von Umkehr und guten Taten ab. … Rabbi Jonatan sagte: Es mögen die Gebeine derer zerbersten, die das Ende berechnen.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.97b' },
      { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdischer Krieg', ref: 'VI,312–313', year: 'um 75', quote: `Was sie am meisten zum Krieg antrieb, war ein zweideutiger Spruch in ihren heiligen Schriften, dass um diese Zeit einer aus ihrem Land die Herrschaft über die Welt erlangen werde … der Spruch bezog sich aber auf die Herrschaft Vespasians.`, status: 'paraphrase' },
      { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: 'X,276', year: 'um 94', quote: `Daniel schrieb auch über die Herrschaft der Römer und dass unser Land von ihnen verwüstet werden würde.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Raschi', work: 'Kommentar zu Daniel', ref: '9,26', year: '11. Jh.', quote: `Der ausgerottete Gesalbte ist König Agrippa, der zur Zeit der Zerstörung herrschte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Harold W. Hoehner', work: 'Chronological Aspects of the Life of Christ', year: '1977', status: 'paraphrase', quote: `Berechnung der 69 Jahrwochen von 444/445 v. Chr. bis zum Einzug Jesu in Jerusalem 33 n. Chr. mit 360-Tage-Jahren.` },
    ],
  },
  quickAnswer: `Mehrere Prophetien verlangen, dass der Messias kommt, solange der Zweite Tempel steht: Nach Dan 9,26 wird ein Gesalbter ausgerottet, **bevor** Stadt und Heiligtum zerstört werden; nach Hag 2 und Mal 3 kommt die Herrlichkeit bzw. der Herr in **dieses** Haus. Der Tempel wurde 70 n. Chr. zerstört. Entweder kam der Messias davor – oder diese Prophetien sind gescheitert. Sogar der Talmud sagt: „Alle Termine sind abgelaufen" (bSanhedrin 97b). Jesus kam genau in diesem Zeitfenster.`,
  keyPoints: [
    `**Daniel 9,26:** Erst wird ein Gesalbter ausgerottet, dann werden Stadt und Heiligtum zerstört – das Zeitfenster schließt sich 70 n. Chr.`,
    `**Haggai 2,7–9:** Gottes Herrlichkeit (kavod) soll gerade das Zweite Haus erfüllen – das nach dem Talmud keine Schechina hatte (bYoma 21b).`,
    `**Maleachi 3,1:** Der Herr kommt plötzlich „zu seinem Tempel" – nach einem Vorläufer, der ihm den Weg bereitet.`,
    `**Genesis 49,10:** Der Targum Onkelos liest „bis der Messias kommt"; das Zepter Judas endet spätestens mit 70 n. Chr.`,
    `**Der Talmud selbst:** „Alle Termine sind abgelaufen" (Rav, bSanhedrin 97b).`,
    `**Ehrlich bleiben:** Die genaue Berechnung der 70 Wochen ist umstritten – die Reihenfolge der Ereignisse nicht.`,
  ],
  argument: {
    name: 'Das Zeitfenster-Argument',
    summary: 'Die Prophetien verlangen das Kommen des Messias vor der Zerstörung des Zweiten Tempels.',
    premises: [
      {
        text: 'P1: Nach Dan 9,26 wird ein Gesalbter ausgerottet, bevor die Stadt und das Heiligtum zerstört werden.',
        support: 'Die Reihenfolge steht im Text, unabhängig von der Berechnung der Wochen.',
      },
      {
        text: 'P2: Nach Hag 2,7–9 und Mal 3,1 kommt Gottes Herrlichkeit bzw. der Herr in den Zweiten Tempel.',
        support: 'Haggai spricht von „diesem Haus", das seine Zuhörer bauten; Maleachi setzt einen stehenden Tempel voraus.',
      },
      {
        text: 'P3: Der Zweite Tempel und Jerusalem wurden 70 n. Chr. zerstört.',
        support: 'Historisch unstrittig (Josephus, Jüdischer Krieg VI).',
      },
      {
        text: 'P4: Wenn diese Prophetien wahr sind, muss ihr Gegenstand vor 70 n. Chr. eingetreten sein.',
        support: 'Logische Folge aus P1–P3.',
      },
    ],
    conclusion: 'Der verheißene Gesalbte ist vor 70 n. Chr. gekommen; Jesus von Nazareth ist der einzige ernsthafte Kandidat, der in diesem Zeitfenster auftrat, getötet wurde und dessen Botschaft den Gott Israels zu den Völkern brachte.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als alexandrinischer Apologet gegenüber jüdischen Einwänden',
      text: `Athanasius stellt den jüdischen Gesprächspartnern eine einfache Frage: Wenn der Messias noch nicht gekommen ist, warum gibt es dann seit Christus in Israel weder König noch Prophet noch Vision, weder Jerusalem noch Tempel? Daniel habe angekündigt, dass mit der Salbung des „Hochheiligen" Gesicht und Prophet „versiegelt" würden (Dan 9,24). Für Athanasius ist das Ende der Prophetie selbst ein Zeichen, dass der, auf den sie hinwies, gekommen ist.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '39–40', year: 'ca. 318', status: 'paraphrase' },
      ],
    },
    {
      person: 'hieronymus',
      role: 'als Philologe und Kenner jüdischer Auslegung',
      text: `Hieronymus, der Hebräisch bei jüdischen Lehrern gelernt hatte, legt im Danielkommentar die verschiedenen Berechnungen der 70 Wochen nebeneinander – auch die jüdische Deutung – und sagt offen, dass er es nicht wagt, ein endgültiges Urteil zu fällen. Gerade diese Ehrlichkeit ist für die Debatte wertvoll: Der Kern des Arguments hängt nicht an einer bestimmten Jahreszahl.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Kommentar zu Daniel', ref: 'zu 9,24–27', year: '407', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Apologet',
      text: `Brown formuliert das Argument zugespitzt: Nach der Hebräischen Bibel musste der Messias kommen, **bevor** der Zweite Tempel zerstört wurde – denn er sollte Sühne schaffen, solange das Heiligtum noch stand, und in diesen Tempel kommen. Entweder ist der Messias vor 70 n. Chr. gekommen, oder die Propheten haben sich geirrt. Brown hält fest, dass nur einer in diesem Zeitfenster auftrat, der bis heute als Messias verehrt wird.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Chronologe',
      text: `Eusebius sammelt die frühchristlichen Berechnungen der 70 Wochen, besonders die des Julius Africanus, der mit Mondjahren vom Erlass des Artaxerxes bis in die Zeit Jesu rechnete. Für Eusebius ist das Zusammentreffen von Zeitangabe, Ende des jüdischen Hohepriestertums nach der alten Ordnung und Untergang Jerusalems ein kumulativer Beweis.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Demonstratio Evangelica', ref: 'VIII,2', year: 'um 315', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'daniel-kein-messias',
      objection: `Daniel 9 spricht gar nicht von „dem Messias": „Maschiach" ohne Artikel heißt „ein Gesalbter" – ein Priester oder König. Und nach den masoretischen Akzenten kommt der „Gesalbte, ein Fürst" schon nach sieben Wochen – das ist Kyros oder Serubbabel.`,
      objectionBy: 'Tovia Singer',
      answer: `Beides gestehe ich zu: Es steht kein Artikel, und die Akzente trennen die sieben von den 62 Wochen. Aber mein Argument hängt daran nicht. In 9,26 wird nach den 62 Wochen ein Gesalbter ausgerottet – und danach werden Stadt und Heiligtum zerstört. Und 9,24 nennt als Ziel dieser Zeit: Sünde beenden, Schuld sühnen, ewige Gerechtigkeit bringen, ein Hochheiliges salben. Das ist mehr als irgendein Amtsträger. Sogar Seder Olam lässt die 490 Jahre mit der Zerstörung des Zweiten Tempels enden.`,
      questionsBack: [
        `Wer hat vor 70 n. Chr. „die Schuld gesühnt" und „ewige Gerechtigkeit gebracht" (Dan 9,24)?`,
      ],
      followUps: [
        {
          id: 'onias-agrippa',
          objection: `Der ausgerottete Gesalbte ist Onias III., der 171 v. Chr. ermordete Hohepriester – oder nach Raschi König Agrippa. Kein Grund, an Jesus zu denken.`,
          objectionBy: 'Stuart Federow',
          answer: `Bei Onias III. passt die Fortsetzung nicht: Antiochus IV. entweihte den Tempel, zerstörte aber weder Stadt noch Heiligtum, und der Tempel wurde 164 v. Chr. neu geweiht. Raschi denkt an Agrippa, der zur Zeit der Zerstörung König war – doch Agrippa II. überlebte den Krieg auf römischer Seite um Jahrzehnte, er wurde nicht „ausgerottet". Die Zerstörung von Stadt **und** Heiligtum durch das Volk eines kommenden Fürsten trifft 70 n. Chr. – und davor wurde Jesus hingerichtet.`,
          followUps: [
            {
              id: 'daniel-spaet',
              objection: `Daniel wurde ohnehin erst um 165 v. Chr. geschrieben – als „Prophetie" nach den Ereignissen unter Antiochus.`,
              objectionBy: 'Historisch-kritische Exegese (aufgegriffen von Tovia Singer)',
              answer: `Selbst mit dieser Spätdatierung liegt die Zerstörung von 70 n. Chr. 235 Jahre **nach** der Abfassung – das macht die Sache nicht kleiner, sondern größer. Für ein jüdisches Gegenüber kommt hinzu: Daniel gehört zur Heiligen Schrift des Judentums, und schon Josephus schrieb, Daniel habe die Verwüstung des Landes durch die Römer vorhergesagt. Wer Daniels Prophetie bestreitet, untergräbt den eigenen Kanon.`,
              sources: [
                { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: 'X,276', year: 'um 94', quote: `Daniel schrieb auch über die Herrschaft der Römer und dass unser Land von ihnen verwüstet werden würde.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'christen-uneinig-rechnung',
                  objection: `Ihr Christen seid euch über die Rechnung selbst nicht einig: 457 oder 445 v. Chr., Sonnen- oder Mondjahre, 27 oder 33 n. Chr. Das ist Zahlenakrobatik, kein Beweis.`,
                  objectionBy: 'Tovia Singer',
                  answer: `Das stimmt, und schon Hieronymus hat die verschiedenen Rechnungen aufgezählt, ohne sich festzulegen. Deshalb baue ich nicht auf einen bestimmten Tag. Aber die Reihenfolge – Gesalbter ausgerottet, dann Stadt und Heiligtum zerstört – und das ungefähre Fenster von rund 490 Jahren ab einem persischen Erlass weisen ins 1. Jahrhundert. So sahen es übrigens auch die Juden dieser Zeit: Josephus berichtet von einem Spruch in den heiligen Schriften, dass gerade damals einer aus ihrem Land die Welt regieren werde.`,
                  sources: [
                    { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdischer Krieg', ref: 'VI,312–313', year: 'um 75', status: 'paraphrase', quote: `Ein zweideutiger Spruch in den heiligen Schriften kündigte an, dass um diese Zeit einer aus ihrem Land die Weltherrschaft erlangen werde.` },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'haggai-herodes',
      objection: `Hag 2,9 – die Herrlichkeit des zweiten Hauses größer als die des ersten – hat Herodes erfüllt, der den Tempel prachtvoll ausbaute. Der Talmud sagt: größer an Bau und an Dauer (bBava Batra 3a).`,
      objectionBy: 'Stuart Federow',
      answer: `Haggai verwendet „kavod" – das Wort für Gottes Gegenwart, die Stiftshütte und Salomos Tempel erfüllte (Ex 40,34; 1 Kön 8,11): „Ich will dieses Haus mit Herrlichkeit erfüllen." Nach dem Talmud fehlte dem Zweiten Tempel aber gerade die Schechina (bYoma 21b). Worin bestand also die größere Herrlichkeit? Maleachi antwortet: „Plötzlich kommt zu seinem Tempel der Herr." Simeon nennt das Kind im Tempel „die Herrlichkeit deines Volkes Israel" (Lk 2,32).`,
      sources: [
        { kind: 'juedisch', work: 'Babylonischer Talmud, Bava Batra', ref: '3a', quote: `Rav und Schmuel: Einer sagt, größer im Bau; der andere sagt, größer an Jahren (Dauer).`, status: 'paraphrase', url: 'https://www.sefaria.org/Bava_Batra.3a' },
      ],
      followUps: [
        {
          id: 'kavod-reichtum',
          objection: `„Kavod" kann auch Pracht und Reichtum bedeuten – direkt davor heißt es: „Mein ist das Silber, mein ist das Gold" (Hag 2,8).`,
          objectionBy: 'Tovia Singer',
          answer: `Richtig, der Zusammenhang nennt auch Schätze. Aber selbst dann gilt: Haggai erwartet die Erfüllung, solange **dieses** Haus steht. Wenn die Herrlichkeit nur Gold war, ist sie mit dem Tempel 70 n. Chr. untergegangen. Wenn sie Gottes persönliches Kommen war, wurde sie vorher erfüllt. Und Haggai fügt hinzu: „An diesem Ort will ich Frieden geben" – schalom, nicht Gold.`,
          followUps: [
            {
              id: 'dritter-tempel',
              objection: `Haggai spricht vom Tempel an diesem Ort allgemein. Der Dritte Tempel wird die Herrlichkeit bringen.`,
              objectionBy: 'Michael Skobac',
              answer: `Haggai vergleicht ausdrücklich „dieses Haus" mit dem ersten und fragt seine Zuhörer: „Wer unter euch hat dieses Haus in seiner früheren Herrlichkeit gesehen?" (2,3). Er spricht über das Gebäude, das sie gerade bauen. Ein Dritter Tempel ist nicht im Blick – sonst hätte die Ermutigung an die Bauleute keinen Sinn.`,
              questionsBack: [
                `Warum sollte Haggai Bauleute mit einer Herrlichkeit ermutigen, die erst ein anderes, späteres Gebäude haben wird?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'genesis-49-zepter',
      objection: `Gen 49,10: „Schevet" heißt Stamm oder Stab. Juda verlor das Königtum schon 586 v. Chr.; die Hasmonäer waren Leviten, Herodes war Idumäer. Dein „Zepter wich erst nach Jesus" ist historisch falsch.`,
      objectionBy: 'Tovia Singer',
      answer: `Ein fairer Einwand – ich baue nicht allein auf Gen 49,10, es ist ein unterstützender Text. Aber beachte: Der alte jüdische Targum Onkelos liest „bis der Messias kommt, dem das Königtum gehört", und der Talmud sagt: „Schilo ist sein Name" (bSanhedrin 98b). „Zepter" muss nicht ein König sein, sondern kann die rechtliche Eigenständigkeit Judas meinen, die bis ins 1. Jahrhundert bestand und mit 70 n. Chr. unterging.`,
      sources: [
        { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '98b', quote: `Wie ist sein (des Messias) Name? Die Schule Rabbi Schilas sagte: Schilo ist sein Name, denn es heißt: „bis dass Schilo kommt".`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.98b' },
      ],
      followUps: [
        {
          id: 'gefaelschtes-zitat',
          objection: `Christliche Missionare zitieren gern den Talmud: „Wehe uns, das Zepter ist von Juda gewichen, und der Messias ist nicht gekommen." Dieses Zitat gibt es im Talmud gar nicht.`,
          objectionBy: 'Michael Skobac',
          answer: `Da hast du völlig recht – für dieses Zitat gibt es keine nachprüfbare Fundstelle im Talmud, und ich verwende es nicht. Ich stütze mich auf den Targum Onkelos zu Gen 49,10, auf bSanhedrin 98b und auf die Nachricht, dass das Synhedrion vierzig Jahre vor der Zerstörung seinen Sitz verlegte und keine Kapitalprozesse mehr führte (bAvoda Sara 8b).`,
          sources: [
            { kind: 'juedisch', work: 'Babylonischer Talmud, Avoda Sara', ref: '8b', quote: `Vierzig Jahre vor der Zerstörung des Tempels wurde das Synhedrion verbannt und ließ sich in den Kaufhallen nieder … um nicht mehr über Kapitalverbrechen urteilen zu müssen.`, status: 'paraphrase', url: 'https://www.sefaria.org/Avodah_Zarah.8b', note: 'Parallelen in bSchabbat 15a und bSanhedrin 41a. Vgl. Joh 18,31.' },
          ],
          followUps: [
            {
              id: 'avoda-sara-kein-messias',
              objection: `Selbst Avoda Sara 8b sagt nur, das Synhedrion habe den Ort gewechselt. Mit dem Messias hat das nichts zu tun.`,
              objectionBy: 'Stuart Federow',
              answer: `Stimmt – der Talmud zieht diese Verbindung nicht, ich ziehe sie. Mein Punkt ist kumulativ: Daniel 9 verlangt das Kommen vor der Zerstörung, Haggai und Maleachi verlangen einen stehenden Tempel, Gen 49 verbindet das Kommen mit dem Ende der Eigenständigkeit Judas. Alle Linien laufen auf dasselbe Fenster zu: vor 70 n. Chr. Wer außer Jesus trat in diesem Fenster als Messias auf und brachte den Gott Israels zu den Völkern (Gen 49,10: „ihm werden die Völker gehorchen")?`,
              detail: `Manche Apologeten verweisen zusätzlich auf bYoma 39b: In den letzten vierzig Jahren vor der Zerstörung – also etwa ab 30 n. Chr. – sei das Los „für den HERRN" am Versöhnungstag nicht mehr in die rechte Hand gekommen, der karmesinrote Faden nicht mehr weiß geworden, das westliche Licht der Menora erloschen, und die Tempeltore hätten sich von selbst geöffnet, bis Rabban Jochanan ben Sakkai sie anfuhr. Der Talmud deutet das als Vorzeichen der Zerstörung, **nicht** messianisch. Wenn du die Stelle anführst, dann nur als auffällige zeitliche Koinzidenz, nicht als „Eingeständnis der Rabbinen".`,
              sources: [
                { kind: 'juedisch', work: 'Babylonischer Talmud, Yoma', ref: '39b', quote: `Vierzig Jahre vor der Zerstörung des Heiligtums kam das Los nicht mehr in die Rechte, der karmesinrote Streifen wurde nicht mehr weiß, das westliche Licht brannte nicht, und die Tore des Tempels öffneten sich von selbst.`, status: 'paraphrase', url: 'https://www.sefaria.org/Yoma.39b' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ende-verborgen',
      objection: `Gott hat das Ende verborgen. Der Talmud sagt: „Es mögen die Gebeine derer zerbersten, die das Ende berechnen" (bSanhedrin 97b). Wir warten jeden Tag – das ist unser Glaube.`,
      objectionBy: 'Stuart Federow',
      answer: `Ich achte diese tägliche Erwartung sehr. Aber derselbe Talmud überliefert auf derselben Seite Ravs Satz: „Alle Termine sind abgelaufen." Wenn die von den Propheten gesetzten Zeiten verstrichen sind, gibt es zwei Möglichkeiten: Entweder ist der Messias gekommen, oder die Prophetien haben sich nicht erfüllt. Wir Christen sagen: Er kam genau zu der Zeit, auf die Daniel hinwies.`,
      followUps: [
        {
          id: 'umkehr-gute-taten',
          objection: `Rav meint damit: Die Erlösung hängt jetzt nur noch von Umkehr und guten Taten ab – nicht, dass der Messias heimlich schon gekommen sei.`,
          objectionBy: 'Tovia Singer',
          answer: `Richtig, das ist seine Folgerung. Und hier sind wir einander näher, als man denkt: Auch Petrus sagt, Umkehr gehe den „Zeiten der Erquickung" und der Sendung des Messias voraus (Apg 3,19–21). Der Unterschied: Wir glauben, dass der Messias zuerst kam, um Sühne zu schaffen, und wiederkommen wird, wenn Israel sagt: „Gesegnet sei, der da kommt im Namen des HERRN" (Ps 118,26; Mt 23,39).`,
          questionsBack: [
            `Wenn alle Termine abgelaufen sind – worauf stützt sich dann die Hoffnung, dass die alten Zeitangaben der Propheten noch gelten?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer wurde nach Dan 9,26 vor der Zerstörung von Stadt und Heiligtum „ausgerottet"?`,
    `Worin bestand die größere Herrlichkeit des Zweiten Tempels, wenn ihm die Schechina fehlte (bYoma 21b)?`,
    `Wie kann der Herr „zu seinem Tempel" kommen (Mal 3,1), wenn es seit 70 n. Chr. keinen Tempel gibt?`,
    `Was bedeutet Ravs Satz „Alle Termine sind abgelaufen" für die Zeitangaben der Propheten?`,
  ],
  avoid: [
    `Nicht das angebliche Talmudzitat „Wehe uns, das Zepter ist von Juda gewichen, und der Messias ist nicht gekommen" verwenden – es hat keine nachprüfbare Fundstelle.`,
    `Nicht eine bestimmte Berechnung der 70 Wochen als „mathematischen Beweis" auf den Tag genau präsentieren. Die Rechnungen sind umstritten; überzeugend ist die Reihenfolge der Ereignisse.`,
    `Nicht die Zerstörung des Tempels als „Strafe Gottes an den Juden für die Kreuzigung" darstellen. Das ist Antijudaismus und widerspricht Röm 11.`,
  ],
  concessions: [
    `In Dan 9,25–26 steht „maschiach" ohne Artikel, und die masoretischen Akzente trennen die sieben von den 62 Wochen.`,
    `Die christlichen Berechnungen der 70 Wochen unterscheiden sich; schon Hieronymus legte sich nicht fest.`,
    `Gen 49,10 ist sprachlich schwierig („Schilo"), und Juda hatte das Königtum lange vor Jesus verloren – das Argument ist unterstützend, nicht tragend.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Harold W. Hoehner', work: 'Chronological Aspects of the Life of Christ', year: '1977', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione), Kap. 33–40', year: 'ca. 318', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael Rydelnik, Edwin Blum (Hg.)', work: 'The Moody Handbook of Messianic Prophecy', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Daniel 9', 'Haggai 2', 'Maleachi 3', 'Genesis 49', 'Zweiter Tempel', 'Zeitprophetie'],
  related: [
    'prophetie/daniel-spaetdatierung',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
    'judentum-messias/jesaja-53-ist-israel',
    'prophetie/prophezeiungen-vage',
  ],
};

export default claim;
