import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'weihwasser-oel-magie',
  title: `„Weihwasser, geweihtes Öl und Segnungen sind Magie."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio IV,19 – Kritik an der Krankensalbung und den Weihen als „theatralische" Zeremonien' },
    { name: 'Huldrych Zwingli', role: 'Reformator in Zürich', work: 'Zeichen bezeugen die Gnade nur, sie vermitteln sie nicht (u. a. Fidei ratio, 1530)' },
    { name: 'Keith Thomas', role: 'Historiker, Oxford', work: 'Religion and the Decline of Magic (1971) – mittelalterliche Sakramentalien als quasi-magische Praxis' },
    { name: 'Evangelikale Sektenkunde und Gemeindelehrer', role: 'Freikirchliche Kritiker der „Volksfrömmigkeit"', work: '„Gott ist Geist" – Glaube braucht keine geweihten Gegenstände' },
  ],
  steelman: `Magie ist der Versuch, mit bestimmten Stoffen und Formeln übernatürliche Wirkungen hervorzubringen. Genau das geschieht beim Weihwasser: Ein Priester spricht eine Formel über Wasser, und danach soll es Dämonen vertreiben, Häuser schützen und Kranke heilen. Das Neue Testament kennt nichts dergleichen. „Gott ist Geist, und die ihn anbeten, die müssen ihn im Geist und in der Wahrheit anbeten" (Joh 4,24). Die Reinigungsriten mit der Asche der roten Kuh (Num 19) sind nach dem Hebräerbrief Schatten, die in Christus erfüllt und abgetan sind (Hebr 9,13–14) – wer sie christlich wiederbelebt, fällt in den Alten Bund zurück. Das Öl in Jak 5,14 war schlicht Medizin, wie beim barmherzigen Samariter (Lk 10,34). Historisch stammt das Weihwasser aus der heidnischen Lustration, und im Mittelalter benutzte man geweihtes Wasser, Salz und Glocken gegen Hexen, Gewitter und Viehseuchen – das ist Volksmagie im kirchlichen Gewand. Bis heute tragen manche Christen geweihte Gegenstände wie Amulette. Die Reformation hat das zu Recht abgeschafft: Gnade empfängt man durch das Wort und den Glauben, nicht durch Stoffe.`,
  biblical: {
    summary: `Die Schrift zeigt durchgehend, dass Gott **durch Materie** handelt – nicht weil die Materie Macht hätte, sondern weil er sie in seinen Dienst nimmt. Jesus „spützte auf die Erde und machte einen Kot aus dem Speichel" und sandte den Blinden zum Teich Siloah (Joh 9,6–7). Die Apostel „salbten viele Sieche mit Öl und machten sie gesund" (Mk 6,13), und Jakobus gebietet, die Ältesten sollen den Kranken „mit Öl salben in dem Namen des Herrn" – und „das Gebet des Glaubens wird dem Kranken helfen" (Jak 5,14–15). Naaman wurde rein, als er sich siebenmal im Jordan wusch (2 Kön 5,14). Der Grundsatz steht in 1 Tim 4,4–5: Alles Geschaffene ist gut und „wird geheiligt durch das Wort Gottes und Gebet". Genau das ist eine Segnung: Gebet über Gottes gute Schöpfung.`,
    detail: `**Magie oder Gebet?** Die Bibel unterscheidet scharf: Simon der Zauberer wollte die Gabe Gottes kaufen und wurde verurteilt (Apg 8,18–24); die Söhne des Skeva benutzten den Namen Jesu wie eine Formel – und wurden von dem Besessenen überwältigt (Apg 19,13–16). Jesus konnte in Nazareth wegen des Unglaubens kaum Wunder tun (Mk 6,5–6). Das heißt: **Ohne Glauben und ohne Gott wirkt kein Ritus.** Magie will Mächte durch Technik zwingen; christliche Segnung bittet den freien, persönlichen Gott.

**Num 19 und Hebr 9:** Der Hebräerbrief sagt nicht, dass Gott keine materiellen Zeichen mehr gebraucht, sondern dass die alttestamentlichen Opfer und Reinigungen auf Christus hinwiesen. Das christliche Weihwasser ist nicht die Asche der roten Kuh, sondern Wasser, über dem im Namen Christi gebetet wird – eine Erinnerung an die Taufe (Joh 3,5; Tit 3,5). Num 19 zeigt nur das Prinzip: Gott bindet Reinigung an sichtbare Zeichen.

**Jak 5,14–15 ist mehr als Medizin:** Gerufen werden die *Ältesten (presbyteroi)* der Gemeinde, nicht Ärzte; gesalbt wird „im Namen des Herrn"; die Wirkung ist das „Gebet des Glaubens"; und die Verheißung umfasst die Vergebung der Sünden (Jak 5,15). Mk 6,13 verbindet die Salbung mit Dämonenaustreibung – auch das ist nicht Arzneikunde.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '9,6–7', quote: `Da er solches gesagt, spützte er auf die Erde und machte einen Kot aus dem Speichel und schmierte den Kot auf des Blinden Augen und sprach zu ihm: Gehe hin zu dem Teich Siloah (das ist verdolmetscht: gesandt) und wasche dich! Da ging er hin und wusch sich und kam sehend.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '6,13', quote: `… und trieben viel Teufel aus und salbten viele Sieche mit Öl und machten sie gesund.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '4,4–5', quote: `Denn alle Kreatur Gottes ist gut, und nichts verwerflich, das mit Danksagung empfangen wird; denn es wird geheiligt durch das Wort Gottes und Gebet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Könige', ref: '5,14', quote: `Da stieg er ab und taufte sich im Jordan siebenmal, wie der Mann Gottes geredet hatte; und sein Fleisch ward wieder erstattet wie ein Fleisch eines jungen Knaben, und er ward rein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,13–16', status: 'paraphrase', quote: `Die sieben Söhne des Skeva beschworen die Besessenen „bei Jesus, den Paulus predigt" – doch der böse Geist antwortete: Jesus kenne ich, und Paulus weiß ich wohl; wer seid ihr aber? und überwältigte sie.` },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche segnet Wasser, Öl, Brot, Häuser und Gläubige, weil Gott seine Schöpfung gut geschaffen und in der Menschwerdung Christi die Materie geheiligt hat. Sie feiert die **Lakan-Gebete** (Wasserweihe mit Fußwaschung bzw. Segnung) am Fest der Theophanie, am Gründonnerstag und am Apostelfest, salbt Kranke im Sakrament der **Krankensalbung** (mit sieben Gebeten) und segnet Häuser mit Wasser. Diese Segnungen sind **Gebete**, keine Zauberformeln: Sie wirken nicht automatisch, sondern durch Gottes freie Gnade, die im Glauben und in der Umkehr empfangen wird. Wer geweihte Dinge wie Amulette gebraucht oder sie vom Leben in der Kirche trennt, missbraucht sie.`,
    detail: `**Altes Zeugnis aus Ägypten:** Das Gebetbuch (Euchologion) des Bischofs Serapion von Thmuis, eines Freundes des hl. Athanasius und des hl. Antonius (Mitte 4. Jh.), enthält Gebete über Öl, Wasser und Brot für die Kranken, damit Gott durch sie Heilung schenke. Schon die sogenannte Apostolische Überlieferung (3. Jh.) kennt ein Dankgebet über Öl, das Kraft und Gesundheit schenken soll.

**Basilius der Große** zählt in „Über den Heiligen Geist" (27,66) die Weihe des Taufwassers und des Salböls zu den Bräuchen, die nicht aus einem geschriebenen Text, sondern aus der stillen apostolischen Überlieferung stammen – zusammen mit dem Kreuzzeichen und dem Gebet nach Osten.

**Gegen Missbrauch:** Johannes Chrysostomus predigte scharf gegen Amulette und Beschwörungen, die manche Christen trugen, und verwies sie stattdessen auf das Kreuz und das Gebet. Die koptische Kirche kennt in ihrer Geschichte durchaus volksmagische Praktiken – die sogenannten koptischen Zaubertexte der Spätantike zeigen das –, aber sie hat sie immer als Aberglauben bekämpft.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', ref: '27,66', year: 'um 375', status: 'paraphrase', quote: `Wir segnen das Wasser der Taufe und das Öl der Salbung … Aus welcher Schrift? Nicht aus der stillen und geheimen Überlieferung?` },
      { kind: 'liturgie', author: 'Serapion von Thmuis', work: 'Euchologion (Gebetbuch)', year: 'Mitte 4. Jh.', status: 'paraphrase', quote: `Gebet über Öl, Wasser und Brot, die für die Kranken dargebracht werden: Gott möge ihnen heilende Kraft verleihen.`, note: 'Ägyptische Quelle; Serapion war ein Vertrauter des Athanasius.' },
      { kind: 'liturgie', work: 'Koptische Lakan-Gebete (Theophanie, Gründonnerstag, Apostelfest)', status: 'paraphrase', note: 'Wasserweihe mit Lesungen, Gebeten und Segnung der Gläubigen.' },
      { kind: 'koptisch', author: 'Habib Girgis', work: 'Die sieben Sakramente der Kirche', status: 'paraphrase', note: 'Darlegung der Krankensalbung (Jak 5,14) als Sakrament, das im Glauben empfangen wird.' },
    ],
  },
  quickAnswer: `Magie will übernatürliche Mächte durch Technik zwingen. Eine Segnung ist das Gegenteil: ein Gebet zum freien, persönlichen Gott, der seine gute Schöpfung in Dienst nimmt. Genau so handelt Jesus selbst – mit Speichel, Erde und dem Wasser von Siloah (Joh 9,6–7) –, und die Apostel salbten Kranke mit Öl (Mk 6,13; Jak 5,14). Paulus sagt, alles Geschaffene „wird geheiligt durch das Wort Gottes und Gebet" (1 Tim 4,5). Ohne Glauben wirkt kein Ritus – das zeigen die Söhne des Skeva (Apg 19,13–16). Wo jemand Weihwasser wie ein Amulett benutzt, ist das Missbrauch, den auch unsere Kirche verurteilt.`,
  keyPoints: [
    `**Unterschied Magie – Segnung:** Magie zwingt Mächte durch Technik; Segnung bittet den freien Gott und wird im Glauben empfangen.`,
    `**Biblisches Prinzip:** Gott wirkt durch Materie – Siloah (Joh 9), Jordan (2 Kön 5), Öl (Mk 6,13; Jak 5,14), Tücher (Apg 19,12).`,
    `**1 Tim 4,4–5:** Die Schöpfung wird „geheiligt durch das Wort Gottes und Gebet" – das ist die Definition einer Segnung.`,
    `**Kein Automatismus:** Simon der Zauberer (Apg 8) und die Söhne des Skeva (Apg 19) zeigen, dass Riten ohne Glauben nichts bewirken.`,
    `**Alte Praxis:** Basilius (De Spiritu Sancto 27,66), Serapion von Thmuis (4. Jh., Ägypten), koptische Lakan-Gebete und Krankensalbung.`,
    `**Auch Protestanten gebrauchen Materie:** Taufwasser, Brot und Wein, Handauflegung – und viele Pfingstgemeinden salben mit Öl.`,
  ],
  voices: [
    {
      person: 'basilius',
      role: 'als Zeuge der apostolischen Überlieferung',
      text: `Basilius verteidigt in „Über den Heiligen Geist" die Bräuche der Kirche, die nicht ausdrücklich in der Schrift stehen, aber aus apostolischer Überlieferung kommen: das Kreuzzeichen, das Gebet nach Osten, das dreimalige Untertauchen – und die Weihe des Taufwassers und des Salböls. Wer diese Bräuche verwirft, so Basilius, verletzt das Evangelium selbst, weil sie denselben Glauben ausdrücken, den die Schrift verkündet. Für ihn sind sie nicht Magie, sondern Gebet der Kirche, die in der Kraft des Geistes Gottes Gaben segnet.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', ref: '27,66', status: 'paraphrase' }],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Theologe der geheiligten Materie',
      text: `Johannes von Damaskus formuliert den Grund, warum Christen Materie nicht verachten: Er betet nicht die Materie an, sondern den Schöpfer der Materie, der um unseretwillen Materie wurde und durch Materie unser Heil wirkte. Das Holz des Kreuzes, die Tinte der Evangelien, das Wasser der Taufe, Brot und Wein der Eucharistie – durch all das hat Gott gehandelt. Wer Materie grundsätzlich als ungeeignet für Gottes Gnade ansieht, steht näher an der Gnosis als am Evangelium der Menschwerdung.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Erste Rede gegen die Bilderstürmer', ref: '16', year: 'um 730', status: 'paraphrase', quote: `Ich bete nicht die Materie an, sondern den Schöpfer der Materie, der um meinetwillen Materie wurde.` }],
    },
    {
      person: 'schmemann',
      role: 'als Liturgiewissenschaftler',
      text: `Alexander Schmemann beschreibt in „For the Life of the World" die Welt als Gabe, die der Mensch Gott in Dank zurückbringen soll. Die Segnung des Wassers am Fest der Theophanie ist für ihn kein Zauber, sondern die Offenbarung dessen, was die Schöpfung eigentlich ist: Trägerin der Gegenwart Gottes. Nicht die Kirche „verzaubert" das Wasser, sondern sie bittet Gott, es wieder zu dem zu machen, wozu er es geschaffen hat – zum Mittel der Gemeinschaft mit ihm. Die säkulare Welt, die Materie für bloßen Rohstoff hält, ist das eigentlich „entzauberte" Missverständnis.`,
      sources: [{ kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'For the Life of the World', year: '1963', status: 'paraphrase' }],
    },
    {
      person: 'habib-girgis',
      role: 'als Katechet der koptischen Kirche',
      text: `Habib Girgis erklärte den Kopten des 20. Jahrhunderts die Sakramente und Segnungen aus der Schrift, gerade weil protestantische Missionare in Ägypten sie als unbiblisch angriffen. Für die Krankensalbung verweist er auf Mk 6,13 und Jak 5,14–15 und betont, dass die Wirkung von Gott kommt, durch das Gebet der Priester und den Glauben des Kranken – verbunden mit Umkehr und Sündenvergebung. Ein Sakrament ohne Glauben und Buße ist kein Heilmittel, sondern ein leeres Zeichen.`,
      sources: [{ kind: 'koptisch', author: 'Habib Girgis', work: 'Die sieben Sakramente der Kirche', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'magie-definition',
      objection: `„Ein Priester spricht eine Formel über Wasser, und danach soll es Dämonen vertreiben. Stoff plus Formel gleich übernatürliche Wirkung – das ist die Definition von Magie."`,
      objectionBy: 'Evangelikaler Sektenexperte',
      answer: `Nein, Magie ist der Versuch, Mächte durch Technik zu *zwingen* – unabhängig von Gottes Willen und vom Glauben. Eine Segnung ist ein *Gebet* zu Gott, der frei entscheidet. Die Bibel selbst zeigt den Unterschied: Die Söhne des Skeva benutzten den Namen Jesu wie eine Formel und wurden überwältigt (Apg 19,13–16). Wenn Wasser ohne Gott und Glauben wirken würde, hätten sie Erfolg gehabt. Unsere Kirche lehrt: Ohne Glauben und Umkehr wirkt keine Segnung.`,
      followUps: [
        {
          id: 'doch-automatisch',
          objection: `„Aber in der Praxis glaubt ihr doch, dass Weihwasser Dämonen vertreibt, egal was der Mensch glaubt. Das ist Automatismus."`,
          objectionBy: 'Evangelikaler Sektenexperte',
          answer: `Die Kirche lehrt keinen Automatismus. Jesus konnte in Nazareth wegen des Unglaubens kaum Wunder tun (Mk 6,5–6), und Jakobus spricht ausdrücklich vom „Gebet des Glaubens" (Jak 5,15). Wir glauben, dass Gott Gebete erhört, die die Kirche über Wasser oder Öl spricht – so wie er Gebete über Kranke erhört. Ob und wie er wirkt, bleibt seine freie Gnade. Das ist Vertrauen, nicht Technik.`,
          followUps: [
            {
              id: 'volksfroemmigkeit-amulette',
              objection: `„In Ägypten tragen viele Christen geweihte Gegenstände wie Amulette, und es gibt sogar koptische Zaubertexte aus der Antike. Eure Volksfrömmigkeit ist voller Magie."`,
              objectionBy: 'Religionshistoriker',
              answer: `Das ist ein ehrlicher Punkt: Es gab und gibt volksmagische Praktiken, auch unter Kopten, und die spätantiken koptischen Zauberpapyri sind gut bekannt. Aber die Kirche hat sie immer als Aberglauben verurteilt – Chrysostomus predigte gegen Amulette, und koptische Priester warnen bis heute davor. Dass Christen sündigen, widerlegt die Lehre nicht; auch Bibelverse werden manchmal als Talisman missbraucht.`,
              sources: [
                { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Kolosserbrief', ref: 'Hom. 8', year: 'um 399', status: 'paraphrase', quote: `Chrysostomus tadelt Christen, die Amulette und Beschwörungen gebrauchen, und verweist sie auf das Kreuz und das Gebet.` },
              ],
              followUps: [
                {
                  id: 'wo-ist-die-grenze',
                  objection: `„Wo ist dann die Grenze zwischen einem gesegneten Öl und einem Amulett? Beides sind Gegenstände, von denen man Schutz erwartet."`,
                  objectionBy: 'Religionshistoriker',
                  answer: `Drei Unterschiede: Erstens die **Richtung** – das Amulett soll aus sich wirken, die Segnung ist Bitte an Gott. Zweitens die **Bindung an Christus und die Kirche** – keine geheimen Formeln, sondern öffentliche Gebete im Namen Christi, eingebettet in Sakramente, Buße und Glauben. Drittens **keine Garantie** – wer gesegnetes Öl empfängt, bleibt ganz auf Gottes freie Gnade angewiesen. Wo einer dieser drei Punkte fehlt, wird aus Segen Aberglaube.`,
                  questionsBack: [`Wenn ein Christ für einen Kranken betet und ihm die Hände auflegt – ist das Magie? Und wenn er dabei Öl verwendet, wie Jak 5,14 es sagt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'skeva-trifft-euch',
          objection: `„Gerade die Söhne des Skeva zeigen doch, dass ritualisierter Gebrauch des Namens Jesu nichts bringt. Das trifft eure Riten!"`,
          objectionBy: 'Charismatischer Prediger',
          answer: `Es trifft jeden Ritus ohne Glauben – auch ein Gebet „im Namen Jesu" in einer Freikirche, das als Formel gesprochen wird. Skeva hatte keine Beziehung zu Christus und war nicht Teil der Gemeinde. Die Segnungen der Kirche werden von Getauften im Glauben gesprochen, für Gläubige, innerhalb des Leibes Christi. Das ist genau das Gegenteil von Skeva.`,
        },
      ],
    },
    {
      id: 'hebraeer-9-schatten',
      objection: `„Num 19 mit der Asche der roten Kuh ist nach Hebr 9,13–14 abgetan. Wer heute Weihwasser benutzt, fällt in den Schattendienst des Alten Bundes zurück."`,
      objectionBy: 'Reformierter Theologe',
      answer: `Einverstanden: Die alttestamentlichen Reinigungen waren Schatten, erfüllt in Christus. Aber das christliche Weihwasser ist nicht die Asche der roten Kuh, sondern Wasser, über dem im Namen Christi gebetet wird – eine Erinnerung an die Taufe, in der wir „durch das Bad der Wiedergeburt" gerettet wurden (Tit 3,5). Hebr 9 schafft nicht Gottes Gebrauch der Materie ab: Derselbe Neue Bund kennt Taufwasser, Brot, Wein, Öl und Handauflegung.`,
      sources: [
        { kind: 'bibel', work: 'Titus', ref: '3,5', quote: `… nicht um der Werke willen der Gerechtigkeit, die wir getan hatten, sondern nach seiner Barmherzigkeit machte er uns selig durch das Bad der Wiedergeburt und Erneuerung des heiligen Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'joh-9-einmalig',
          objection: `„Jesus hat mit Speichel und Erde geheilt, aber auch nur durch ein Wort (Mt 8,8). Das war einmalig – daraus folgt keine kirchliche Praxis."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Gerade weil Jesus auch ohne Materie heilen konnte, ist es bedeutsam, dass er Materie *wählte*. Er wollte zeigen, dass die Schöpfung Werkzeug seiner Gnade sein kann. Die Apostel haben das fortgesetzt: Sie salbten mit Öl (Mk 6,13), Tücher des Paulus heilten (Apg 19,12), und Jakobus macht die Salbung zur Gemeindeordnung (Jak 5,14). Das ist keine Einmaligkeit, sondern eine Linie.`,
          followUps: [
            {
              id: 'jak-5-medizin',
              objection: `„Das Öl in Jak 5 war Medizin – Olivenöl war das gängige Heilmittel der Antike, siehe den barmherzigen Samariter (Lk 10,34)."`,
              objectionBy: 'Evangelikaler Exeget',
              answer: `Dann wäre seltsam, dass Jakobus die *Ältesten* der Gemeinde ruft statt eines Arztes, dass sie „im Namen des Herrn" salben, dass die Wirkung dem „Gebet des Glaubens" zugeschrieben wird und dass die Verheißung die Vergebung der Sünden umfasst (Jak 5,15). Bei Mk 6,13 steht die Salbung neben der Dämonenaustreibung. Ein Arzneimittel braucht weder Älteste noch den Namen des Herrn.`,
              followUps: [
                {
                  id: 'heute-aerzte',
                  objection: `„Heute haben wir Ärzte und Medikamente. Wer mit Öl salbt, verleitet Kranke dazu, auf medizinische Hilfe zu verzichten."`,
                  objectionBy: 'Säkularer Mediziner',
                  answer: `Die orthodoxe Kirche ist nicht gegen Medizin – die Schrift sagt: „Ehre den Arzt … denn der Herr hat ihn geschaffen" (Sir 38,1), und Lukas war Arzt. Die Krankensalbung ersetzt keine Behandlung, sondern bittet Gott um Heilung an Leib und Seele, um Vergebung und Kraft im Leiden. Koptische Gemeinden betreiben selbst Krankenhäuser und Ambulanzen. Wer Medizin verweigert, handelt nicht im Sinn der Kirche.`,
                  sources: [
                    { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–4', status: 'paraphrase', quote: `Ehre den Arzt mit gebührender Verehrung, damit du ihn hast, wenn du ihn brauchst; denn der Herr hat ihn geschaffen … Der Herr lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht.`, note: 'Deuterokanonisches Buch, in der koptischen Bibel Teil des Kanons.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heidnischer-ursprung',
      objection: `„Weihwasser stammt aus heidnischen Reinigungsriten – die Römer besprengten sich auch mit Wasser beim Betreten der Tempel."`,
      objectionBy: 'Religionsgeschichtler',
      answer: `Dass viele Religionen Wasser zur Reinigung verwenden, liegt daran, dass Wasser reinigt – nicht an Abhängigkeit. Israel kannte Reinigungswasser (Num 19), Waschungen und das Tauchbad, Johannes taufte im Jordan, und die christliche Taufe verwendet Wasser. Ähnlichkeit ist kein Beweis für Herkunft. Die entscheidende Frage ist, zu wem gebetet wird: Das christliche Wasser wird im Namen der Dreieinigkeit gesegnet und erinnert an die Taufe in Christus.`,
      followUps: [
        {
          id: 'segnung-nicht-in-bibel',
          objection: `„Aber die Segnung von Wasser als Ritus steht nirgends in der Bibel."`,
          objectionBy: 'Evangelikaler Bibellehrer',
          answer: `Das Prinzip steht da: „Alle Kreatur Gottes … wird geheiligt durch das Wort Gottes und Gebet" (1 Tim 4,4–5). Und die konkrete Praxis ist sehr alt: Basilius nennt die Weihe des Taufwassers und des Salböls um 375 eine apostolische Überlieferung; das ägyptische Gebetbuch des Serapion von Thmuis enthält im 4. Jahrhundert Gebete über Öl und Wasser für Kranke. Auch du segnest dein Essen vor der Mahlzeit – das ist genau dasselbe Prinzip.`,
          questionsBack: [`Wenn du vor dem Essen betest – heiligst du dann nicht auch eine Speise „durch das Wort Gottes und Gebet"?`],
          followUps: [
            {
              id: 'basilius-menschenlehre',
              objection: `„Basilius ist 4. Jahrhundert – das ist schon Tradition und Menschenlehre (Mk 7,8)."`,
              objectionBy: 'Evangelikaler Bibellehrer',
              answer: `Jesus verurteilt in Mk 7 Überlieferungen, die Gottes Gebot aufheben – etwa das Korban, mit dem man sich der Elternpflicht entzog. Eine Segnung hebt kein Gebot Gottes auf; sie erfüllt 1 Tim 4,5. Paulus selbst gebietet, an den Überlieferungen festzuhalten, „es sei durch unser Wort oder Brief" (2 Thess 2,15). Und Basilius war derselbe Bischof, dessen Verteidigung der Gottheit des Heiligen Geistes du im Glaubensbekenntnis von 381 mitbekennst.`,
              sources: [
                { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Brief.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'geist-und-wahrheit',
      objection: `„Gott ist Geist, und die ihn anbeten, müssen ihn im Geist und in der Wahrheit anbeten (Joh 4,24). Der Glaube braucht keine Gegenstände."`,
      objectionBy: 'Freikirchlicher Prediger',
      answer: `Joh 4,24 stellt Geist und Wahrheit gegen die Bindung an *einen Ort* (Garizim oder Jerusalem), nicht gegen die Materie. Derselbe Johannes überliefert, dass das Wort Fleisch wurde (Joh 1,14), dass man „aus Wasser und Geist" geboren wird (Joh 3,5), dass Jesus sein Fleisch zu essen gibt (Joh 6,53) und mit Speichel heilt (Joh 9,6). Im Geist anzubeten heißt nicht, ohne Leib anzubeten, sondern in der Kraft des Heiligen Geistes.`,
      followUps: [
        {
          id: 'zeichen-nur-erinnerung',
          objection: `„Zeichen sind nur Erinnerungshilfen. Die Gnade wirkt innerlich durch den Geist – Wasser und Öl sind dafür nicht nötig."`,
          objectionBy: 'Reformierter Theologe (in der Linie Zwinglis)',
          answer: `Gott braucht nichts – aber er hat sich entschieden, durch Zeichen zu wirken. Der Blinde wurde sehend, *als* er sich in Siloah gewaschen hatte (Joh 9,7), Naaman wurde rein, *als* er im Jordan untertauchte (2 Kön 5,14). Hätten sie sich geweigert, weil Wasser „nur ein Zeichen" sei, wären sie nicht geheilt worden – Naaman wollte genau das zuerst und wurde von seinen Knechten umgestimmt (2 Kön 5,11–13). Zwischen Magie und bloßer Erinnerung steht die biblische Wahrheit: Gott wirkt wirklich durch Zeichen, die er verheißen hat.`,
          questionsBack: [`Warum ließ Jesus den Blinden erst nach Siloah gehen, wenn das Wasser „nur ein Zeichen" war?`],
        },
      ],
    },
    {
      id: 'pfingstler-salben-auch',
      objection: `„Wir Pfingstler salben auch mit Öl und beten für Kranke – aber ohne Weihe, ohne Priester und ohne Sakrament. Jeder Gläubige kann das tun."`,
      objectionBy: 'Pfingstpastor',
      answer: `Das ist eine wertvolle Gemeinsamkeit: Du glaubst also auch, dass Gott durch Öl und Gebet handelt – dann ist es keine Magie. Der Unterschied liegt in Jak 5,14: Gerufen werden „die Ältesten (presbyteroi) der Gemeinde" – das ist das Amt, das wir Priester nennen. Natürlich darf jeder Christ für Kranke beten; die sakramentale Salbung aber vertraut die Schrift den Presbytern an.`,
      followUps: [
        {
          id: 'gebetstuecher',
          objection: `„Manche unserer Prediger verschicken sogar gesalbte Gebetstücher nach Apg 19,12. Ist das dann auch legitim?"`,
          objectionBy: 'Pfingstpastor',
          answer: `Das zeigt, wie stark der biblische Gedanke ist, dass Gott durch Gegenstände wirkt – sogar in Kirchen, die sonst Sakramentalien ablehnen. Problematisch wird es dort, wo damit Geld verdient oder Heilung garantiert wird; dann gilt das Wort an Simon den Zauberer (Apg 8,20). Die Kirche bindet Segnungen deshalb an das Gebet der Gemeinde, an ihr geordnetes Amt und an Glauben und Umkehr – nicht an Versand oder Spendenquittungen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie definierst du Magie – und ist ein Gebet über Kranke mit Handauflegung dann auch Magie?`,
    `Warum hat Jesus mit Speichel und Erde geheilt und den Blinden nach Siloah geschickt, wenn Materie unwichtig ist?`,
    `Was bedeutet „geheiligt durch das Wort Gottes und Gebet" (1 Tim 4,5)?`,
    `Warum ruft Jakobus die Ältesten und nicht einen Arzt, wenn das Öl nur Medizin war?`,
  ],
  avoid: [
    `Nicht behaupten, Weihwasser oder Öl wirkten aus sich selbst oder garantiert – das ist genau der Magievorwurf.`,
    `Volksmagische Praktiken unter Christen nicht beschönigen oder verteidigen.`,
    `Nicht so tun, als stehe die Wasserweihe als Ritus wörtlich in der Bibel; ehrlich: Prinzip biblisch, Form aus der frühen Überlieferung.`,
  ],
  concessions: [
    `Die konkrete Form der Wasser- und Ölweihe ist nicht im Neuen Testament beschrieben, sondern in der frühen kirchlichen Überlieferung (Basilius, Serapion).`,
    `Im Volksglauben – im mittelalterlichen Westen wie im Orient, auch unter Kopten – wurden geweihte Gegenstände oft magisch missverstanden.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', year: 'um 375', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'For the Life of the World. Sacraments and Orthodoxy', year: '1963', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Habib Girgis', work: 'Die sieben Sakramente der Kirche', status: 'paraphrase' },
    { kind: 'gegner', author: 'Keith Thomas', work: 'Religion and the Decline of Magic', year: '1971', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Segnungen', 'Weihwasser', 'Krankensalbung', 'Öl', 'Magie', 'Sakramentalien', 'Lakan'],
  related: ['sakramente/myron-krankensalbung-erfunden', 'moenchtum-reliquien/reliquien-aberglaube', 'fasten-liturgie/liturgie-tote-rituale', 'sola-scriptura/tradition-menschenlehre', 'pfingstbewegung/heilung-garantiert'],
};

export default claim;
