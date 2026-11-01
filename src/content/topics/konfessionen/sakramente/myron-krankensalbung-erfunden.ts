import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'myron-krankensalbung-erfunden',
  title: `„Myronsalbung und Krankensalbung sind menschliche Erfindungen."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio IV,19 – Ablehnung von Firmung und Letzter Ölung als Sakramente' },
    { name: 'Martin Luther', role: 'Reformator', work: 'Von der babylonischen Gefangenschaft der Kirche (1520)' },
    { name: 'John MacArthur', role: 'Pastor, Vertreter des Cessationismus', work: 'Charismatic Chaos (1992); Strange Fire (2013) – Heilungsgaben auf die Apostelzeit beschränkt' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe', work: 'Systematic Theology (1994), Kap. zu Taufe, Geistesgaben und Sakramenten' },
  ],
  steelman: `Christus hat nur zwei Handlungen mit sichtbarem Zeichen und Verheißung eingesetzt: die Taufe (Mt 28,19) und das Abendmahl (Lk 22,19). Die Siebenzahl der Sakramente ist eine mittelalterliche Systematisierung. Den Heiligen Geist empfängt jeder Gläubige mit Glauben und Taufe (Apg 2,38; Röm 8,9) – dafür braucht es kein zweites Ritual mit einem vom Bischof geweihten Öl, das nirgends in der Bibel steht. Apg 8 ist ein Sonderfall: Gott verzögerte den Geistempfang der Samariter, damit ihre Einheit mit der Jerusalemer Gemeinde sichtbar wurde. In Jak 5,14 bedeutet *aleiphō* „einreiben" – Öl war damals Medizin, wie beim barmherzigen Samariter (Lk 10,34); Jakobus empfiehlt ärztliche Mittel plus Gebet. Die Heilungen der Apostelzeit (Mk 6,13) waren Zeichengaben, die mit den Aposteln aufhörten. Dass Rom aus der Krankensalbung die „Letzte Ölung" für Sterbende machte, zeigt, wie frei die Kirche mit dem Text umging. Luther sagte zu Recht: Selbst wenn ein Apostel den Jakobusbrief geschrieben hätte, könnte ein Apostel kein Sakrament einsetzen; Calvin nannte die Ölung ein heuchlerisches Schauspiel.`,
  biblical: {
    summary: `**Myron:** In Samaria waren Menschen getauft, hatten den Heiligen Geist aber noch nicht empfangen, bis die Apostel Petrus und Johannes ihnen die Hände auflegten (Apg 8,14–17); in Ephesus folgte auf die Taufe die Handauflegung des Paulus (Apg 19,5–6). Hebr 6,2 zählt das „Händeauflegen" neben der Taufe zu den Grundlehren. Paulus und Johannes sprechen von „Salbung" und „Versiegelung" der Gläubigen (2 Kor 1,21–22; 1 Joh 2,20.27; Eph 1,13). **Krankensalbung:** „Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN … und so er hat Sünden getan, werden sie ihm vergeben sein" (Jak 5,14–15); schon die Apostel „salbten viele Sieche mit Öl und machten sie gesund" (Mk 6,13).`,
    detail: `**Apg 8,14–17 – ein eigener Akt nach der Taufe:** Philippus, einer der Sieben, hatte die Samariter getauft. Erst als die Apostel kamen, beteten und die Hände auflegten, empfingen sie den Heiligen Geist. Der Text unterscheidet klar zwischen Taufe und Geistmitteilung – und bindet diese an die Apostel. In Apg 19,5–6 wiederholt sich das Muster: Taufe auf den Namen Jesu, dann Handauflegung durch Paulus, dann der Geist.

**Hebr 6,1–2:** „Grund legen … von der Taufe, von der Lehre, vom Händeauflegen, von der Toten Auferstehung und vom ewigen Gericht" – das Händeauflegen gehört zu den Anfangsgründen des Glaubens, nicht zu einer Ausnahmesituation.

**Salbung und Siegel:** „Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt (*chrisas*) und versiegelt (*sphragisamenos*) und in unsre Herzen das Pfand, den Geist, gegeben hat" (2 Kor 1,21–22). „Ihr habt die Salbung (*chrisma*) von dem, der heilig ist" (1 Joh 2,20). Jesus selbst wurde „gesalbt mit dem heiligen Geist und Kraft" (Apg 10,38); „Christus" heißt „Gesalbter", und Christen sind die, die an seiner Salbung teilhaben. Im AT ließ Gott ein heiliges Salböl aus Olivenöl und kostbaren Gewürzen bereiten, mit dem Priester und heilige Geräte gesalbt wurden (Ex 30,22–33) – die koptische Kirche bereitet das Myron bis heute nach diesem Vorbild.

**Jak 5,14–15 genau gelesen:**
- Gerufen werden die **Ältesten der Gemeinde** – Amtsträger, keine Ärzte und keine charismatischen Heiler.
- Gesalbt wird „**in dem Namen des HERRN**" – eine gottesdienstliche Handlung.
- Die Verheißung ist doppelt: „Der HERR wird ihn aufrichten" und „so er hat Sünden getan, werden sie ihm vergeben sein".
- Öl war kein Heilmittel gegen jede Krankheit; als bloße Medizin hätte man einen Arzt gerufen, nicht die Presbyter.
- Jakobus schreibt an die ganze Kirche („den zwölf Geschlechtern, die da sind hin und her", 1,1) ohne zeitliche Begrenzung.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,14–17', quote: `Da aber die Apostel hörten zu Jerusalem, daß Samarien das Wort Gottes angenommen hatte, sandten sie zu ihnen Petrus und Johannes. Welche, da sie hinabkamen, beteten sie über sie, daß sie den heiligen Geist empfingen. (Denn er war noch auf keinen gefallen, sondern sie waren allein getauft in dem Namen Christi Jesu.) Da legten sie die Hände auf sie, und sie empfingen den heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,5–6', quote: `Da sie das hörten, ließen sie sich taufen auf den Namen des HERRN Jesu. Und da Paulus die Hände auf sie legte, kam der heilige Geist auf sie, und sie redeten mit Zungen und weissagten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '6,1–2', quote: `Darum wollen wir die Lehre vom Anfang christlichen Lebens jetzt lassen und zur Vollkommenheit fahren, nicht abermals Grund legen von Buße der toten Werke, vom Glauben an Gott, von der Taufe, von der Lehre, vom Händeauflegen, von der Toten Auferstehung und vom ewigen Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '1,21–22', quote: `Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt und versiegelt und in unsre Herzen das Pfand, den Geist, gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '2,20', quote: `Und ihr habt die Salbung von dem, der heilig ist, und wisset alles.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten; und so er hat Sünden getan, werden sie ihm vergeben sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '6,13', quote: `… und trieben viel Teufel aus und salbten viele Sieche mit Öl und machten sie gesund.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche zählt die **Myronsalbung** und die **Krankensalbung** zu den sieben Sakramenten. Das Myron – heiliges Salböl aus Olivenöl und vielen Gewürzen – wird vom Papst von Alexandrien mit den Bischöfen geweiht; mit ihm wird jeder Neugetaufte unmittelbar nach der Taufe an 36 Stellen des Körpers gesalbt und empfängt so das Siegel der Gabe des Heiligen Geistes. Die Krankensalbung („Sakrament der Lampe", *Kandil*) wird nach Jak 5 von Priestern mit sieben Gebeten, sieben Lesungen und sieben Dochten gefeiert – für die Heilung von Leib und Seele, nicht nur für Sterbende.`,
    detail: `**Die frühe Kirche:**
- **Theophilus von Antiochien** (um 180): „Wir werden deshalb Christen genannt, weil wir mit dem Öl Gottes gesalbt sind" (An Autolykus I,12).
- **Tertullian** (um 200): Nach dem Taufbad „werden wir mit gesegnetem Salböl gesalbt"; dann „wird uns die Hand aufgelegt, die den Heiligen Geist durch den Segen herbeiruft" (De baptismo 7–8).
- Die Hippolyt zugeschriebene **Traditio Apostolica** (21–22) beschreibt Salbungen nach der Taufe und die Handauflegung des Bischofs.
- **Kyrill von Jerusalem**: Wie das eucharistische Brot nach der Epiklese nicht mehr bloßes Brot ist, so ist auch das heilige Salböl nach der Anrufung „nicht mehr einfaches Salböl, sondern Christi Gnadengabe" (Myst. Kat. 3,3).
- Für die Krankensalbung: **Origenes** zitiert Jak 5,14 (Lev-Homilie 2,4); das **Euchologion des Serapion von Thmuis** – Bischof in Ägypten und Freund des Athanasius, 4. Jh. – enthält ein Gebet über das Öl der Kranken; **Chrysostomus** nennt Jak 5,14–15 als Zeugnis, dass die Priester auch nach der Taufe Sünden vergeben (Über das Priestertum III,6).

**Koptische Überlieferung:** Nach einer alten Tradition geht das Myron der koptischen Kirche auf die Gewürze zurück, mit denen der Leib Christi bestattet wurde (Joh 19,39–40), und wurde in Alexandrien zur Zeit des hl. Athanasius neu bereitet. Das ist fromme Überlieferung, kein historischer Beweis – aber sie drückt den Glauben aus, dass das Siegel des Geistes vom gekreuzigten und auferstandenen Christus kommt. Papst Schenuda III. hat das Myron während seiner Amtszeit mehrfach feierlich geweiht.

**Ehrlich:** Die Zählung von genau „sieben" Sakramenten ist eine spätere Systematisierung (im Westen seit dem 12. Jahrhundert, im Osten danach übernommen). Die Wirklichkeiten selbst sind aber biblisch und altkirchlich.`,
    sources: [
      { kind: 'kirchenvater', author: 'Theophilus von Antiochien', work: 'An Autolykus', ref: 'I,12', year: 'um 180', quote: `Wir werden deshalb Christen genannt, weil wir mit dem Öl Gottes gesalbt sind.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Taufe (De baptismo)', ref: '7–8', year: 'um 200', quote: `Danach, aus dem Bad heraufgestiegen, werden wir gründlich mit gesegnetem Salböl gesalbt … Darauf wird uns die Hand aufgelegt, die durch den Segen den Heiligen Geist herbeiruft und einlädt.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim', note: 'Tertullian apologetisch zitiert.' },
      { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '3,3', quote: `Hüte dich zu meinen, dies sei bloßes Salböl. Denn wie das Brot der Eucharistie nach der Anrufung des Heiligen Geistes nicht mehr bloßes Brot ist, sondern Leib Christi, so ist auch dieses heilige Salböl nach der Anrufung nicht mehr einfaches oder gewöhnliches Salböl, sondern Christi Gnadengabe.`, translation: 'eigene Übersetzung (nach NPNF II/7)', status: 'verbatim', note: 'Verfasserschaft umstritten (Kyrill oder Johannes von Jerusalem).' },
      { kind: 'liturgie', author: 'Serapion von Thmuis', work: 'Euchologion (Gebetbuch)', year: '4. Jh.', quote: `Gebet über das Öl der Kranken um Heilung von Krankheit, Vertreibung der Dämonen und Vergebung der Sünden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Beides steht in der Bibel. In Samaria waren Menschen getauft, empfingen aber den Heiligen Geist erst, als die Apostel ihnen die Hände auflegten (Apg 8,14–17) – ein eigener Akt nach der Taufe; Paulus spricht von „gesalbt und versiegelt" (2 Kor 1,21–22). Und Jakobus schreibt: „Ist jemand krank, der rufe die Ältesten der Gemeinde, dass sie über ihm beten und ihn mit Öl salben im Namen des Herrn … und hat er Sünden getan, werden sie ihm vergeben" (Jak 5,14–15). Erfunden hat die Kirche nur die Zahl „sieben" als Zusammenfassung – die Sache ist apostolisch.`,
  keyPoints: [
    `**Apg 8,14–17; 19,5–6:** Geistmitteilung durch Handauflegung der Apostel als eigener Akt nach der Taufe.`,
    `**Hebr 6,2:** Das „Händeauflegen" gehört zu den Grundlehren.`,
    `**2 Kor 1,21–22; 1 Joh 2,20.27:** Salbung und Siegel des Geistes – Christen sind „Gesalbte".`,
    `**Jak 5,14–15:** Presbyter, Öl, Name des Herrn, Heilung und Vergebung – keine bloße Medizin.`,
    `**Frühe Kirche:** Theophilus, Tertullian, Traditio Apostolica, Kyrill von Jerusalem, Serapion von Thmuis, Chrysostomus.`,
    `**Koptische Praxis:** Myron unmittelbar nach der Taufe; Krankensalbung für Leib und Seele, nicht nur für Sterbende.`,
  ],
  voices: [
    {
      person: 'kyrill-jerusalem',
      role: 'als Katechet der Neugetauften',
      text: `Kyrill widmet die dritte Mystagogische Katechese ganz dem heiligen Salböl. Er erklärt den Neugetauften: Christus wurde nach seiner Taufe im Jordan mit dem Heiligen Geist gesalbt; so werdet auch ihr nach eurer Taufe gesalbt und werdet „Christen" – Gesalbte. Die Stirn wird gesalbt, damit ihr die Schande ablegt; die Ohren, damit ihr die göttlichen Geheimnisse hört; die Nase, damit ihr sagen könnt: „Wir sind Christi Wohlgeruch" (2 Kor 2,15); die Brust, damit ihr die Waffenrüstung der Gerechtigkeit anzieht.

Entscheidend ist seine Parallele zur Eucharistie: Nach der Anrufung des Geistes ist das Öl nicht mehr bloßes Öl, sondern Träger der Gnade.`,
    },
    {
      person: 'tertullian',
      role: 'als Zeuge der Taufpraxis um 200 (mit Vorbehalt)',
      text: `Tertullian beschreibt in seiner Schrift über die Taufe den Ablauf, wie er in Karthago üblich war: Taufbad, dann Salbung mit gesegnetem Öl – „nach der alten Ordnung, nach der man zum Priestertum mit Öl aus dem Horn gesalbt wurde, wie Aaron von Mose" –, dann Handauflegung mit Anrufung des Heiligen Geistes. Er nennt die Salbung ausdrücklich mit dem Namen „Christus", der vom Chrisma kommt. Tertullian ist kein Lehrer der koptischen Kirche, aber ein unverdächtiger Zeuge dafür, dass Salbung und Handauflegung nach der Taufe um 200 selbstverständlich waren.`,
    },
    {
      person: 'chrysostomus',
      role: 'als Lehrer über das Priesteramt',
      text: `Chrysostomus zitiert in „Über das Priestertum" Jak 5,14–15, um zu zeigen, dass die Priester nicht nur in der Taufe, sondern auch danach Sünden vergeben: Wer krank ist, rufe die Presbyter; sie salben ihn, und wenn er Sünden getan hat, werden sie ihm vergeben. Für Chrysostomus ist die Krankensalbung also ein kirchlicher, priesterlicher Dienst, der Leib und Seele zugleich betrifft – keine bloße ärztliche Empfehlung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über das Priestertum', ref: 'III,6', quote: `Chrysostomus führt Jak 5,14–15 als Beleg an, dass die Priester auch nach der Taufe die Vollmacht haben, Sünden zu vergeben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'habib-girgis',
      role: 'als Katechet der sieben Sakramente',
      text: `Der hl. Habib Girgis erklärt in seinem Buch über die sieben Sakramente die Myronsalbung als „Siegel der Gabe des Heiligen Geistes", die den Getauften stärkt, heiligt und zum Tempel des Geistes macht (1 Kor 6,19). Er betont, dass in der koptischen Kirche Taufe, Myron und Eucharistie eine Einheit bilden: Das Kind wird getauft, gesalbt und empfängt sofort die Kommunion. Die Krankensalbung beschreibt er als Sakrament der Barmherzigkeit für Leib und Seele, das auf Jak 5 gründet und nicht auf die Sterbestunde beschränkt ist.`,
      sources: [
        { kind: 'koptisch', author: 'Hl. Habib Girgis', work: 'Die sieben Sakramente der Kirche (arab. Asrār al-kanīsa as-sabʿa)', quote: `Myron als Siegel der Gabe des Heiligen Geistes; Einheit von Taufe, Myron und Eucharistie; Krankensalbung für Leib und Seele nach Jak 5.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-zwei-sakramente',
      objection: `„Christus hat nur zwei Sakramente eingesetzt: Taufe und Abendmahl. Alles andere sind menschliche Zusätze."`,
      objectionBy: 'Johannes Calvin / Martin Luther',
      answer: `Ehrlich: Die Zahl „sieben" als Liste ist eine spätere Zusammenfassung. Aber die Wirklichkeiten stehen im NT: Handauflegung bzw. Salbung nach der Taufe (Apg 8,14–17; 2 Kor 1,21), Krankensalbung durch die Presbyter (Jak 5,14–15), Sündenvergebung (Joh 20,23), Weihe (2 Tim 1,6), Ehe als „großes Geheimnis" (*mystērion*, Eph 5,32). Selbst Luther zählte 1520 zunächst drei Sakramente (Taufe, Abendmahl, Buße), und Melanchthon war offen dafür, auch die Ordination ein Sakrament zu nennen.`,
      followUps: [
        {
          id: 'einsetzungswort-fehlt',
          objection: `„Ein Sakrament braucht ein ausdrückliches Einsetzungswort Christi mit Zeichen und Verheißung. Das fehlt bei Myron und Ölung."`,
          objectionBy: 'reformierte Theologen',
          answer: `Diese Definition ist selbst eine Konstruktion des 16. Jahrhunderts, kein Bibelwort. Aber selbst nach ihr: Christus sandte die Apostel aus, und sie „salbten viele Sieche mit Öl" (Mk 6,13); Jak 5 nennt Zeichen (Öl), Diener (Presbyter) und Verheißung (Aufrichtung und Vergebung). Christus handelt durch seine Apostel: „Wer euch höret, der höret mich" (Lk 10,16).`,
          followUps: [
            {
              id: 'apostel-kein-sakrament',
              objection: `„Luther sagte: Selbst wenn ein Apostel den Jakobusbrief geschrieben hätte, könnte ein Apostel kein Sakrament einsetzen."`,
              objectionBy: 'Martin Luther',
              answer: `Dann könnte auch Paulus nichts Verbindliches anordnen – doch seine Briefe sind Gottes Wort (2 Petr 3,15–16). Die Frage ist nicht, welcher Apostel schreibt, sondern ob die inspirierte Schrift es lehrt. Hier zeigt sich wieder Luthers Problem mit dem Jakobusbrief: Wer einen kanonischen Brief abwertet, weil er der eigenen Lehre widerspricht, macht die eigene Theologie zum Maßstab der Schrift.`,
              sources: [
                { kind: 'gegner', author: 'Martin Luther', work: 'Von der babylonischen Gefangenschaft der Kirche (De captivitate Babylonica)', year: '1520', quote: `Luther bestreitet, dass der Jakobusbrief apostolisch sei, und erklärt, ein Apostel habe ohnehin nicht die Vollmacht, aus eigenem Recht ein Sakrament einzusetzen.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'samaria-ausnahme',
      objection: `„Apg 8 ist eine Ausnahme: Gott verzögerte den Geistempfang, damit die Einheit der Samariter mit Jerusalem sichtbar wurde. Normalerweise empfängt man den Geist bei Glauben und Taufe (Apg 2,38)."`,
      objectionBy: 'Wayne Grudem',
      answer: `Apg 2,38 verbindet die Gabe des Geistes mit der Taufe – darin stimmen wir überein: In der koptischen Kirche werden Taufe und Myron in einer einzigen Feier gespendet. Aber Apg 8 und 19 zeigen, dass die Geistmitteilung ein eigener Akt ist, der an die Apostel gebunden war: Philippus konnte taufen, aber nicht den Geist mitteilen. Und Hebr 6,2 nennt das Händeauflegen unter den Grundlehren – also keine Ausnahme, sondern Grundbestand.`,
      followUps: [
        {
          id: 'haende-nicht-oel',
          objection: `„Händeauflegen ist nicht dasselbe wie Salbung mit Öl. Woher kommt euer Myron?"`,
          objectionBy: 'Wayne Grudem',
          answer: `Das NT spricht selbst von der „Salbung" (*chrisma*) der Gläubigen (2 Kor 1,21; 1 Joh 2,20.27). Im AT ließ Gott ein heiliges Salböl aus Öl und Gewürzen bereiten (Ex 30,22–33). Um 180 sagt Theophilus: „Wir heißen Christen, weil wir mit dem Öl Gottes gesalbt sind"; um 200 beschreibt Tertullian Salbung und Handauflegung nach der Taufe. Das äußere Öl macht sichtbar, was das NT die Salbung mit dem Geist nennt.`,
          followUps: [
            {
              id: 'salbung-nur-geistlich',
              objection: `„1 Joh 2,20 meint eine rein geistliche Salbung, kein Öl."`,
              objectionBy: 'James White',
              answer: `Der Geist ist die Salbung, das Öl ist ihr Zeichen und Werkzeug – so wie bei der Taufe Wasser und Geist zusammengehören (Joh 3,5). Die Sprache „Chrisma" ist vom sichtbaren Akt genommen; Jesus selbst wurde „gesalbt mit dem heiligen Geist und Kraft" (Apg 10,38), als der Geist bei seiner Taufe sichtbar herabkam. Gott wirkt in seiner Kirche durch geistliche Wirklichkeit in sichtbaren Zeichen – das ist die Logik der Menschwerdung.`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,38', quote: `… wie Gott diesen Jesus von Nazareth gesalbt hat mit dem heiligen Geist und Kraft …`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'oel-als-medizin',
      objection: `„In Jak 5,14 heißt ‚salben' (aleiphō) einreiben. Öl war damals Medizin (Lk 10,34). Jakobus empfiehlt ärztliche Behandlung plus Gebet – kein Sakrament."`,
      objectionBy: 'John MacArthur',
      answer: `Warum ruft man dann die Ältesten der Gemeinde und nicht einen Arzt – Lukas war einer? Warum geschieht es „in dem Namen des HERRN"? Und warum folgt die Verheißung „so er hat Sünden getan, werden sie ihm vergeben sein"? Öl heilt nicht jede Krankheit. Schon die Apostel salbten Kranke im Auftrag Jesu (Mk 6,13), und die Väter – Origenes, Serapion von Thmuis, Chrysostomus – verstanden Jak 5 als kirchliche Handlung.`,
      followUps: [
        {
          id: 'heilungsgaben-aufgehoert',
          objection: `„Die Heilungsgaben der Apostelzeit haben aufgehört. Jak 5 gehört zu den Zeichengaben der Anfangszeit."`,
          objectionBy: 'John MacArthur',
          answer: `Jakobus spricht nicht von charismatischen Heilern, sondern von den Presbytern – einem bleibenden Amt – und schreibt an die ganze zerstreute Kirche (Jak 1,1). Übrigens salben heute viele Evangelikale und Pfingstler Kranke mit Öl, gerade wegen Jak 5. Die Verheißung ist nicht automatische Heilung, sondern: „Der HERR wird ihn aufrichten" – an Leib, Seele oder beidem.`,
          followUps: [
            {
              id: 'nicht-gesund',
              objection: `„Und wenn der Kranke nicht gesund wird – war die Salbung dann wirkungslos?"`,
              objectionBy: 'skeptische Protestanten',
              answer: `Das Sakrament schenkt Gnade für Leib und Seele nach Gottes Willen: Trost, Vergebung, Kraft im Leiden, manchmal leibliche Heilung – die koptische Kirche kennt viele solche Zeugnisse –, immer aber Frieden mit Gott. Paulus ließ Trophimus krank in Milet zurück (2 Tim 4,20) und trug selbst einen „Pfahl im Fleisch" (2 Kor 12,7–9). Gottes Wille ist weiser als unser Wunsch; die Salbung legt den Kranken in seine Hände.`,
              sources: [
                { kind: 'bibel', work: '2. Timotheus', ref: '4,20', quote: `Erastus blieb zu Korinth; Trophimus aber ließ ich zu Milet krank.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'letzte-oelung',
      objection: `„Dass Rom aus der Krankensalbung die ‚Letzte Ölung' für Sterbende gemacht hat, zeigt doch, wie die Kirche Jak 5 verdreht hat. Calvin nannte das ein Schauspiel."`,
      objectionBy: 'Johannes Calvin',
      answer: `Da hast du einen Punkt: Die mittelalterliche lateinische Praxis hat die Krankensalbung weitgehend auf Sterbende verengt – die Kritik der Reformatoren daran war berechtigt (Rom selbst hat das später wieder geöffnet). Die koptische Kirche hat diese Verengung nie gekannt: Das „Sakrament der Lampe" wird für Kranke an Leib und Seele gefeiert, mit sieben Gebeten, Lesungen und Dochten, oft auch gemeinsam für eine ganze Gemeinde. Die Kritik an Rom trifft die koptische Praxis nicht.`,
      sources: [
        { kind: 'gegner', author: 'Johannes Calvin', work: 'Unterricht in der christlichen Religion (Institutio)', ref: 'IV,19,18–21', year: '1559', quote: `Calvin lehnt die Letzte Ölung als Sakrament ab: Die Heilungsgabe von Jak 5 sei eine zeitlich begrenzte Gabe gewesen; die römische Praxis sei bloßes Schauspiel.`, status: 'paraphrase' },
      ],
    },
    {
      id: 'salbung-beim-glaeubigwerden',
      objection: `„2 Kor 1,21–22 und 1 Joh 2,20: Gott hat uns gesalbt und versiegelt und den Geist als Pfand gegeben – im Moment des Gläubigwerdens, ohne Öl und ohne Bischof. Eine eigene ‚Myronsalbung' kennt die frühe Kirche nicht; das ist spätere Ritualisierung."`,
      objectionBy: 'Wayne Grudem',
      answer: `Die frühe Kirche hat diese Salbung sehr konkret verstanden. Theophilus von Antiochien schreibt um 180 einem Heiden: „Wir heißen Christen, weil wir mit dem Öl Gottes gesalbt sind." Tertullian (um 200) beschreibt, wie die Neugetauften nach dem Bad „mit gesegnetem Öl gesalbt" werden und danach die Handauflegung zur Herabrufung des Geistes empfangen. Die Jerusalemer Katechesen (4. Jh.) widmen dem heiligen Myron eine eigene Unterweisung. Von Antiochien über Karthago bis Jerusalem dasselbe Bild – das ist keine späte Erfindung.`,
      detail: `Paulus verbindet in 2 Kor 1,21–22 drei Begriffe: salben (*chriein*), versiegeln (*sphragizesthai*) und das Pfand des Geistes geben. Genau diese Begriffe prägen die alte Taufliturgie: Das „Siegel der Gabe des Heiligen Geistes" ist bis heute die Spendeformel des Myron in den östlichen Kirchen.

Die Quellen der ersten Jahrhunderte:
- **Theophilus von Antiochien**, *An Autolykos* I,12 (um 180): Der Name „Christ" kommt von der Salbung mit dem Öl Gottes.
- **Tertullian**, *Über die Taufe* 7–8 (um 200): Nach der Taufe Salbung mit gesegnetem Öl, dann Handauflegung mit Anrufung des Geistes.
- **Traditio Apostolica** (3./4. Jh., traditionell Hippolyt zugeschrieben): Salbung durch den Presbyter, Handauflegung und Salbung durch den Bischof.
- **Mystagogische Katechesen** 3 (Jerusalem, spätes 4. Jh.): eigene Katechese über das Myron.

Ehrlich bleibt: Die Riten unterscheiden sich im Detail zwischen den Regionen, und die Zählung als eigenes „Sakrament" kam später. Aber die Salbung als Gabe des Geistes nach der Taufe ist früh und breit bezeugt.`,
      voices: [
        {
          person: 'kyrill-jerusalem',
          role: 'als Mystagoge der Neugetauften (Verfasserschaft der Mystagogischen Katechesen umstritten)',
          text: `Die Mystagogischen Katechesen erklären den Neugetauften, dass sie „Christen" heißen, weil sie mit dem Chrisma gesalbt wurden, so wie Christus nach seiner Taufe im Jordan vom Geist gesalbt wurde. Das Myron sei nach der Anrufung des Geistes nicht mehr bloßes Salböl, sondern Gabe Christi, die durch die Gegenwart des Geistes wirkt – vergleichbar dem eucharistischen Brot, das nach der Epiklese nicht mehr gewöhnliches Brot ist.`,
          sources: [
            { kind: 'kirchenvater', author: 'Kyrill von Jerusalem (zugeschrieben)', work: 'Mystagogische Katechesen', ref: '3,1–3', year: 'spätes 4. Jh.', quote: `Wie das Brot der Eucharistie nach der Anrufung des Heiligen Geistes nicht mehr gewöhnliches Brot ist, so ist auch dieses heilige Myron nach der Anrufung nicht mehr bloßes oder gewöhnliches Öl, sondern Gabe Christi, die durch die Gegenwart des Heiligen Geistes wirksam wird.`, status: 'paraphrase', note: 'Verfasserschaft umstritten (Kyrill oder Johannes von Jerusalem).' },
          ],
        },
      ],
      sources: [
        { kind: 'kirchenvater', author: 'Theophilus von Antiochien', work: 'An Autolykos (Ad Autolycum)', ref: 'I,12', year: 'um 180', quote: `Wir werden Christen genannt, weil wir mit dem Öl Gottes gesalbt sind.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Taufe (De baptismo)', ref: '7–8', year: 'um 200', quote: `Nach dem Bad werden wir mit gesegnetem Öl gesalbt, nach der alten Ordnung, nach der man zum Priestertum gesalbt wurde; danach wird die Hand aufgelegt und durch Segnung der Heilige Geist herabgerufen.`, status: 'paraphrase', note: 'Tertullian wird als Zeuge der Praxis zitiert, nicht als Lehrautorität.' },
        { kind: 'bibel', work: '2. Korinther', ref: '1,21–22', quote: `Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt und versiegelt und in unsre Herzen das Pfand, den Geist, gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Warum sagt ein Bischof um 180, Christen hießen so, weil sie „mit dem Öl Gottes gesalbt" sind, wenn es keine Salbung gab?`,
        `Woher stammt deiner Meinung nach die überall gleiche Praxis der Salbung nach der Taufe in Syrien, Afrika und Palästina?`,
      ],
      followUps: [
        {
          id: 'theophilus-wortspiel',
          objection: `„Theophilus spielt nur mit Worten: Christos – chriō. Ein Wortspiel beweist kein Sakrament."`,
          objectionBy: 'James White',
          answer: `Ein Wortspiel funktioniert nur, wenn der Leser die Praxis kennt oder sie ihm erklärt wird – Theophilus argumentiert gegenüber einem Heiden mit etwas, das Christen *tun*. Und er steht nicht allein: Tertullian, die Traditio Apostolica und die Jerusalemer Katechesen beschreiben die konkrete Salbung mit Öl nach der Taufe. Wenn unabhängige Zeugen in verschiedenen Regionen dasselbe berichten, ist das kein Wortspiel mehr, sondern ein historischer Befund.`,
          followUps: [
            {
              id: 'luther-babylonische-gefangenschaft',
              objection: `„Luther hat in ‚Von der babylonischen Gefangenschaft der Kirche' gezeigt: Firmung und Ölung haben keine göttliche Verheißung mit eingesetztem Zeichen. Als frommen Brauch kann man sie behalten – aber nicht als Sakrament."`,
              objectionBy: 'Martin Luther (historisch)',
              answer: `Interessant ist, wie Luther in derselben Schrift rechnet: Zuerst erklärt er, es gebe nicht sieben, sondern vorerst drei Sakramente – Taufe, Buße und Brot. Am Ende bleiben nur zwei übrig, weil der Buße das sichtbare Zeichen fehle. Die Zahl hängt also an seiner Definition – nicht an der Schrift. Die Schrift fragt nicht nach einer Liste, sondern danach, ob Gott durch diese Handlungen wirkt. Und das bezeugt sie: Durch die Handauflegung der Apostel empfingen die Getauften den Geist (Apg 8,17; 19,6), und durch die Salbung der Ältesten werden dem Kranken „die Sünden vergeben" (Jak 5,15).`,
              detail: `In *De captivitate Babylonica ecclesiae praeludium* (1520) setzt Luther als Maßstab an, ein Sakrament müsse eine von Christus selbst gegebene Verheißung mit einem eingesetzten Zeichen haben. Daran misst er die sieben und behält zuletzt nur Taufe und Abendmahl. Die Beichte schätzt er weiterhin hoch – ohne sie „Sakrament" zu nennen.

Die orthodoxe Kirche spricht lieber von **Mysterien** und hat lange keine feste Zahl gekannt; die Siebenzahl ist eine spätere Zusammenfassung (das räumen wir offen ein). Entscheidend ist nicht die Liste, sondern dass Christus in seiner Kirche durch sichtbare Handlungen und das Gebet der Kirche unsichtbare Gnade schenkt. Wer die Definition eng genug zieht, kann jede Zahl begründen – Zwingli kam mit einer noch engeren Sicht auf gar kein Gnadenmittel im eigentlichen Sinn mehr.`,
              sources: [
                { kind: 'gegner', author: 'Martin Luther', work: 'Von der babylonischen Gefangenschaft der Kirche (De captivitate Babylonica ecclesiae)', year: '1520', quote: `Luther bestreitet die Siebenzahl, nimmt zunächst drei Sakramente an (Taufe, Buße, Brot) und kommt am Ende zu dem Schluss, im strengen Sinn seien es nur zwei, da der Buße das sichtbare, von Gott eingesetzte Zeichen fehle.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,6', quote: `Und da Paulus die Hände auf sie legte, kam der heilige Geist auf sie, und sie redeten mit Zungen und weissagten.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn Luther in derselben Schrift erst drei und dann zwei Sakramente zählt – woher kommt die Zahl: aus der Bibel oder aus der Definition?`,
              ],
              followUps: [
                {
                  id: 'gnade-durch-oel-magie',
                  objection: `„Gnade durch Öl ist Magie. Gott wirkt durch sein Wort und den Glauben, nicht durch Substanzen, die ein Priester segnet."`,
                  objectionBy: 'John MacArthur',
                  answer: `Dann müsstest du auch die Bibel der Magie verdächtigen: Naaman wird im Jordan rein (2 Kön 5,14), Jesus heilt mit Speichel und Erde (Joh 9,6–7), Kranke werden durch Tücher des Paulus gesund (Apg 19,12), die Frau durch die Berührung des Gewandes Jesu (Mk 5,27–30). Gott gebraucht Materie, weil er sie geschaffen hat und im Sohn selbst Fleisch geworden ist. Magie will Gott zwingen; ein Mysterium empfängt im Gebet, was Gott verheißen hat. Jakobus nennt es ausdrücklich „das Gebet des Glaubens" (Jak 5,15).`,
                  detail: `Der Vorwurf der Magie verkennt den Charakter der Mysterien. Das Myron wird nicht durch eine Zauberformel wirksam, sondern durch die Epiklese – die Bitte der Kirche an den Vater, den Heiligen Geist zu senden. Der Geist wirkt frei; die Kirche bittet im Vertrauen auf Christi Verheißung.

Hinter dem Einwand steht oft ein unbewusster Dualismus zwischen „Geist" und „Materie", der der Bibel fremd ist: Gott sah alles an, was er gemacht hatte, „und siehe, es war sehr gut" (Gen 1,31). In der Menschwerdung hat der Logos Materie angenommen und geheiligt. Darum heiligt Gott den Menschen nicht an seinem Leib vorbei, sondern durch Wasser, Öl, Brot und Wein – so wie er uns in einem Leib erlöst hat.`,
                  voices: [
                    {
                      person: 'habib-girgis',
                      role: 'als koptischer Katechet der Sakramente',
                      text: `Habib Girgis erklärt in seiner Darstellung der sieben Mysterien, dass das Myron das Siegel der Gabe des Heiligen Geistes ist und mit Taufe und Eucharistie eine Einheit bildet. Er betont, dass die Wirkung nicht vom Öl als solchem kommt, sondern vom Heiligen Geist, der durch das Gebet der Kirche und das von Christus gegebene Zeichen wirkt.`,
                      sources: [
                        { kind: 'koptisch', author: 'Hl. Habib Girgis', work: 'Die sieben Sakramente der Kirche (arab. Asrār al-kanīsa as-sabʿa)', quote: `Das Myron als Siegel der Gabe des Heiligen Geistes; seine Wirkung kommt vom Geist, der durch das Gebet der Kirche wirkt, nicht vom Stoff als solchem.`, status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '9,6–7', quote: `Da er solches gesagt, spützte er auf die Erde und machte einen Kot aus dem Speichel und schmierte den Kot auf des Blinden Augen und sprach zu ihm: Gehe hin zu dem Teich Siloah … und kam sehend.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Jakobus', ref: '5,15', quote: `Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten; und so er hat Sünden getan, werden sie ihm vergeben sein.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `War die Heilung Naamans im Jordan Magie oder Gehorsam gegenüber Gottes Wort?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'warum-nur-patriarch',
          objection: `„Und warum darf nur euer Patriarch das Myron weihen? Das ist Klerikalismus – der Geist braucht keine Zentrale."`,
          objectionBy: 'Wayne Grudem',
          answer: `Es geht um Einheit, nicht um Macht. Als in Samaria Menschen getauft worden waren, sandten die Apostel in Jerusalem Petrus und Johannes, die ihnen die Hände auflegten, damit sie den Geist empfingen (Apg 8,14–17). So wurden die Neugetauften sichtbar mit der apostolischen Kirche verbunden. Das eine Myron, das der Patriarch gemeinsam mit den Bischöfen weiht und das jeder Priester bei jeder Taufe verwendet, verbindet jeden koptischen Christen weltweit mit dieser einen Kirche – vom Dorf in Oberägypten bis zur Gemeinde in Wien.`,
          sources: [
            { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,14–17', quote: `Da aber die Apostel hörten zu Jerusalem, daß Samarien das Wort Gottes angenommen hatte, sandten sie zu ihnen Petrus und Johannes … Da legten sie die Hände auf sie, und sie empfingen den heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was empfingen die getauften Samariter in Apg 8,17, das sie vorher nicht hatten?`,
    `Warum zählt Hebr 6,2 das „Händeauflegen" zu den Grundlehren des Glaubens?`,
    `Wenn Jak 5 nur ärztlichen Rat gibt – warum soll man die Presbyter rufen, und warum werden dabei Sünden vergeben?`,
    `Gibt es in deiner Gemeinde eine Praxis, die Jak 5,14 wörtlich umsetzt? Wenn nein – warum nicht?`,
  ],
  avoid: [
    `Die koptische Überlieferung über die Herkunft des Myron (Gewürze vom Begräbnis Christi) als historischen Beweis anführen. Sie ist fromme Tradition.`,
    `Behaupten, die Siebenzahl der Sakramente sei schon im NT als Liste zu finden. Sie ist eine spätere Zusammenfassung.`,
    `Die Krankensalbung als Garantie für körperliche Heilung darstellen.`,
  ],
  concessions: [
    `Die Zählung von genau sieben Sakramenten stammt aus dem Mittelalter; frühere Väter zählten nicht so.`,
    `Die mittelalterliche „Letzte Ölung" hat Jak 5 im Westen verengt – die Kritik der Reformatoren daran war berechtigt.`,
    `Der Übergang von der Handauflegung (Apg 8) zur Salbung mit Öl ist eine Entwicklung der frühen Jahrhunderte, auch wenn das NT bereits von „Salbung" spricht.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Hl. Habib Girgis', work: 'Die sieben Sakramente der Kirche (arab. Asrār al-kanīsa as-sabʿa)', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen (bes. Katechese 3)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'Of Water and the Spirit: A Liturgical Study of Baptism', year: '1974', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Myron', 'Firmung', 'Krankensalbung', 'Sakramente', 'Jakobus 5'],
  related: [
    'sakramente/taufe-nur-symbol-keine-kindertaufe',
    'sakramente/beichte-unbiblisch',
    'sakramente/kein-besonderes-priestertum',
    'pfingstbewegung/heilung-garantiert',
    'sola-scriptura/jeder-legt-selbst-aus',
  ],
};

export default claim;
