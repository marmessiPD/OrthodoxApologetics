import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'spiritismus-harmlos',
  title: `„Kontakt mit Verstorbenen, Tarot und Pendeln sind harmlos."`,
  proponents: [
    { name: 'Allan Kardec', role: 'Begründer des Spiritismus (1804–1869)', work: 'Le Livre des Esprits (1857); Das Evangelium im Lichte des Spiritismus (1864)' },
    { name: 'Arthur Conan Doyle', role: 'Schriftsteller und Spiritist (1859–1930)', work: 'The History of Spiritualism (1926)' },
    { name: 'John Edward / James Van Praagh', role: 'Fernsehmedien', work: 'Crossing Over with John Edward (TV, 2000–2004); Talking to Heaven (1997)' },
    { name: 'Rachel Pollack', role: 'Tarot-Autorin (1945–2023)', work: 'Seventy-Eight Degrees of Wisdom (1980)' },
  ],
  steelman: `Mediale Sitzungen schenken Trauernden Trost: Viele berichten, das Medium habe Details gewusst, die es nicht wissen konnte, und sie hätten endlich Abschied nehmen können. Tarot ist ein psychologisches Werkzeug: Die Bilder sind Archetypen im Sinne C. G. Jungs und helfen, das eigene Unbewusste zu befragen. Das Pendel bewegt sich tatsächlich, auch wenn man es ganz ruhig hält. Das Ouija-Brett wird als Gesellschaftsspiel im Spielwarenhandel verkauft. Der Spiritismus Allan Kardecs, etwa in Brasilien von Millionen gelebt, verbindet den Kontakt mit Geistern mit Nächstenliebe und Jesus als moralischem Vorbild. Die Bibel selbst berichtet, dass König Saul durch eine Totenbeschwörerin mit dem verstorbenen Samuel sprach (1 Sam 28) – Kontakt ist also möglich. Und orthodoxe Christen sprechen doch selbst ständig mit Verstorbenen: mit den Heiligen, mit Maria. Wo ist der Unterschied? Wenn niemand zu Schaden kommt, ist das alles harmlos.`,
  biblical: {
    summary: `Die Schrift verbietet die Befragung der Toten und alle Formen der Wahrsagerei unmissverständlich: „Ihr sollt euch nicht wenden zu den Wahrsagern und forscht nicht von den Zeichendeutern" (Lev 19,31); „dass nicht unter dir gefunden werde … ein Zeichendeuter oder der die Toten frage" (Dtn 18,10–12). Jesaja fragt: „Soll nicht ein Volk seinen Gott fragen? Oder soll man die Toten für die Lebendigen fragen?" (Jes 8,19). Saul starb, so sagt die Chronik, auch deshalb, weil er „die Wahrsagerin fragte" statt den HERRN (1 Chr 10,13–14). Jesus lässt Abraham im Gleichnis sagen, dass ein Bote von den Toten nicht nötig ist: „Sie haben Mose und die Propheten" (Lk 16,29–31). Und in Philippi weissagte eine Magd durch einen „Wahrsagergeist" sogar Wahres über Paulus – und Paulus trieb den Geist aus (Apg 16,16–18): Richtige Auskünfte beweisen keine gute Quelle.`,
    detail: `**1 Sam 28 genau gelesen:** Als Samuel erscheint, schreit die Frau laut auf (28,12) – sie hatte offenbar nicht mit einer echten Erscheinung gerechnet. Gott griff hier ausnahmsweise ein, und Samuels Botschaft ist ein Gerichtswort: Saul und seine Söhne werden am nächsten Tag sterben. Das deuterokanonische Buch Jesus Sirach bestätigt, dass Samuel nach seinem Tod weissagte (Sir 46,20 bzw. 46,23 je nach Zählung). Die Kirchenväter waren geteilt: Origenes hielt die Erscheinung für den echten Samuel, Eustathius von Antiochien für ein dämonisches Trugbild. Einig waren sie darin, dass Saul sündigte.

**Ephesus (Apg 19,18–19):** Viele, die zum Glauben kamen, bekannten ihre okkulten Praktiken und verbrannten öffentlich ihre Zauberbücher im Wert von 50.000 Silberstücken.

**Die geistliche Dimension:** „Der Satan verstellt sich zum Engel des Lichts" (2 Kor 11,14); unser Kampf gilt nicht nur Fleisch und Blut, sondern geistigen Mächten (Eph 6,12). „Widersteht dem Teufel, so flieht er von euch. Nahet euch zu Gott, so naht er sich zu euch" (Jak 4,7–8).`,
    sources: [
      { kind: 'bibel', work: 'Levitikus (3. Mose)', ref: '19,31', quote: `Ihr sollt euch nicht wenden zu den Wahrsagern, und forscht nicht von den Zeichendeutern, daß ihr nicht an ihnen verunreinigt werdet; denn ich bin der HERR, euer Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '8,19', quote: `Wenn sie aber zu euch sagen: Ihr müßt die Wahrsager und Zeichendeuter fragen, die da flüstern und murmeln, so sprecht: Soll nicht ein Volk seinen Gott fragen? oder soll man die Toten für die Lebendigen fragen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Chronik', ref: '10,13–14', quote: `Also starb Saul in seiner Missetat, die er wider den HERRN getan hatte … und weil er die Wahrsagerin fragte und fragte den HERRN nicht.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Lukas', ref: '16,29.31', quote: `Abraham sprach zu ihm: Sie haben Mose und die Propheten; laß sie dieselben hören. … Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '16,16–18', quote: `Es geschah aber, da wir zu dem Gebet gingen, daß eine Magd uns begegnete, die hatte einen Wahrsagergeist … Die folgte allenthalben Paulus und uns nach, schrie und sprach: Diese Menschen sind die Knechte Gottes des Allerhöchsten … Paulus aber … sprach zu dem Geist: Ich gebiete dir in dem Namen Jesu Christi, daß du von ihr ausfahrest.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,19', quote: `Viele aber, die da vorwitzige Kunst getrieben hatten, brachten die Bücher zusammen und verbrannten sie öffentlich und überrechneten, was sie wert waren, und fanden des Geldes fünfzigtausend Groschen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die meisten Phänomene lassen sich psychologisch erklären. **Kaltes Lesen** (*cold reading*): Medien arbeiten mit allgemeinen Aussagen, Rückmeldungen und Wahrscheinlichkeiten; Zuhörer erinnern sich an Treffer und vergessen Fehlschläge (Ray Hyman 1977). **Ideomotorischer Effekt:** Unbewusste Muskelbewegungen erklären Pendel, Wünschelrute, Tischrücken und Ouija-Brett – beschrieben von William Carpenter (1852), experimentell gezeigt von Michael Faraday (1853) beim Tischrücken und von Michel-Eugène Chevreul beim Pendel. Die Fox-Schwestern, mit denen der moderne Spiritismus 1848 in Hydesville begann, gestanden 1888 öffentlich, die „Klopfgeräusche" mit den Zehengelenken erzeugt zu haben (Margaret Fox widerrief das Geständnis später). Der Zauberkünstler Harry Houdini entlarvte in den 1920er-Jahren zahlreiche Medien. **Tarot** war ursprünglich ein italienisches Kartenspiel des 15. Jahrhunderts; seine okkulte Deutung begann erst 1781 mit Antoine Court de Gébelin, der fälschlich einen altägyptischen Ursprung behauptete.`,
    detail: `**Ehrlich:** Einige Parapsychologen berichten von Versuchen mit Medien unter kontrollierten Bedingungen, deren Ergebnisse sie für unerklärt halten; diese Studien sind methodisch umstritten. Die christliche Position lautet ohnehin nicht „alles ist Betrug": Die Bibel rechnet mit realen geistigen Mächten. Sie verbietet okkulte Praktiken nicht, weil sie immer wirkungslos wären, sondern weil sie – ob Selbsttäuschung oder echte Geistkontakte – vom lebendigen Gott wegführen.

**Ägypten und Tarot:** Court de Gébelin behauptete 1781, das Tarot sei das „Buch des Thot" altägyptischer Priester. Die Hieroglyphen konnten damals niemand lesen; erst Champollion entzifferte sie 1822 – mit Hilfe der koptischen Sprache. Seitdem ist klar: Mit dem alten Ägypten hat Tarot nichts zu tun (Michael Dummett).`,
    sources: [
      { kind: 'wissenschaft', author: 'Ray Hyman', work: '„Cold Reading": How to Convince Strangers That You Know All About Them', ref: 'The Zetetic (Skeptical Inquirer) 1 (1977)', year: '1977', quote: `Techniken, mit denen Wahrsager und Medien den Eindruck übernatürlichen Wissens erzeugen.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Michael Faraday', work: 'Experimental Investigation of Table-Moving', ref: 'The Athenaeum (Juli 1853); Brief an The Times (30. Juni 1853)', year: '1853', quote: `Faraday zeigte mit einer einfachen Apparatur, dass die Teilnehmer den Tisch unbewusst selbst bewegten.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'William B. Carpenter', work: 'On the Influence of Suggestion in Modifying and Directing Muscular Movement, Independently of Volition', ref: 'Proceedings of the Royal Institution (1852)', year: '1852', quote: `Beschreibung des ideomotorischen Effekts.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Michael Dummett', work: 'The Game of Tarot', year: '1980', quote: `Tarot entstand als Kartenspiel im Italien des 15. Jahrhunderts; die okkulte Deutung ist eine Erfindung des späten 18. Jahrhunderts.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Harry Houdini', work: 'A Magician Among the Spirits', year: '1924', quote: `Entlarvung zahlreicher spiritistischer Medien.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche weiß um die Wirklichkeit geistiger Mächte, ohne in Angst oder Faszination zu verfallen. Bei jeder Taufe wendet sich der Täufling (bzw. sein Pate) nach **Westen** und sagt sich vom Satan, all seinen Werken und all seinem Dienst los, dann nach **Osten**, um Christus zu bekennen; Exorzismusgebete gehören zum Taufritus. Der hl. Antonius lehrte seine Mönche nach der Vita des Athanasius, dass die Dämonen die Zukunft nicht wirklich kennen: Sie sind nur schneller als Menschen und können etwa vom Regen in Äthiopien berichten, bevor die Nilflut Ägypten erreicht – und tun damit, als wüssten sie Kommendes. Athanasius stellt fest, dass mit dem Kommen Christi die heidnischen Orakel verstummten und das Kreuzzeichen alle Magie zunichtemacht.`,
    detail: `**Gemeinschaft der Heiligen ist kein Spiritismus:** Die Kirche bittet die Heiligen, für uns zu Gott zu beten – wie man einen Freund um Fürbitte bittet (Offb 5,8; 6,9–10; Hebr 12,1). Sie ruft keine Toten herbei, sucht keine Auskünfte und Botschaften, benutzt keine Techniken, Medien oder Hilfsmittel. Das Band zwischen Lebenden und Entschlafenen ist Christus selbst, der „ein Gott der Lebendigen" ist (Lk 20,38); die Initiative für jede Erscheinung liegt allein bei Gott. In der Liturgie betet die Kirche für die Entschlafenen – Liebe über den Tod hinaus, ohne Grenzüberschreitung.`,
    sources: [
      { kind: 'liturgie', work: 'Koptischer Taufritus', quote: `Absage an den Satan mit dem Blick nach Westen und Bekenntnis zu Christus mit dem Blick nach Osten; Exorzismusgebete vor der Taufe.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '31–33', quote: `Die Dämonen kennen die Zukunft nicht; sie sind nur schneller und melden etwa den Regen in Äthiopien, bevor die Nilflut kommt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '47–48', quote: `Seit Christus erschienen ist, verstummen die Orakel; durch das Zeichen des Kreuzes wird alle Magie zunichte.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Meistens steckt hinter Medien, Pendel und Ouija ganz natürliche Psychologie – kaltes Lesen und unbewusste Muskelbewegungen, wie schon der gläubige Physiker Michael Faraday 1853 zeigte. Aber die Bibel warnt trotzdem: In Philippi sagte ein Wahrsagergeist sogar Wahres – und Paulus trieb ihn aus (Apg 16,16–18). Ob Selbsttäuschung oder echte Geister: Beides führt weg vom lebendigen Gott. Unsere Toten sind bei Christus geborgen; wir beten für sie und mit den Heiligen zu Gott, statt sie herbeizurufen.`,
  keyPoints: [
    `**Klares biblisches Verbot:** Lev 19,31; Dtn 18,10–12; Jes 8,19; 1 Chr 10,13–14.`,
    `**Richtige Auskünfte beweisen keine gute Quelle:** Apg 16,16–18; 2 Kor 11,14.`,
    `**Psychologische Erklärungen:** kaltes Lesen, ideomotorischer Effekt (Carpenter, Faraday, Chevreul), Geständnis der Fox-Schwestern.`,
    `**Tarot:** italienisches Kartenspiel, okkult erst seit 1781; der „ägyptische Ursprung" ist erfunden.`,
    `**Heilige ≠ Spiritismus:** Fürbitte zu Gott statt Herbeirufen und Befragen; Gott hat die Initiative.`,
    `**Koptische Praxis:** Absage an den Satan bei der Taufe; Antonius über die vermeintliche Zukunftskenntnis der Dämonen.`,
  ],
  voices: [
    {
      person: 'antonius',
      role: 'als Vater der Unterscheidung der Geister',
      text: `Antonius erklärte seinen Mönchen, warum die Dämonen manchmal scheinbar Zukünftiges ankündigen: Sie sehen etwa den Regen in Äthiopien und eilen voraus, um die Nilflut anzukündigen, bevor Menschen davon wissen können. Ihr „Wissen" ist Geschwindigkeit, nicht Prophetie – und es dient der Täuschung. Darum solle man ihnen nicht glauben, auch wenn sie Wahres sagen. Gegen alle Anfechtung empfahl er Gebet, Fasten, das Kreuzzeichen und den Glauben an Christus.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '31–35', quote: `Die scheinbare Zukunftskenntnis der Dämonen und die rechte Haltung des Christen.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Zeuge des Verstummens der Orakel',
      text: `Athanasius lädt in *Über die Menschwerdung* jeden ein, es selbst zu prüfen: Wo früher Orakel und Zauberei blühten, hören sie auf, sobald Christus verkündet wird; wer das Kreuzzeichen macht, vertreibt die Täuschungen der Dämonen. Für ihn ist das ein Beweis für die Macht des Auferstandenen. Der Christ braucht deshalb keine Angst vor okkulten Mächten zu haben – aber er hat auch keinen Grund, sich ihnen zu öffnen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '31; 47–48', quote: `Das Ende der Orakel und die Kraft des Kreuzes über Magie.`, status: 'paraphrase' }],
    },
    {
      person: 'faraday',
      role: 'als Physiker und gläubiger Christ',
      text: `Faraday, einer der größten Experimentalphysiker und ein frommer Christ der Sandemanianer, untersuchte 1853 das damals modische Tischrücken. Mit einer einfachen Vorrichtung aus Kartonlagen und einem Zeiger zeigte er, dass die Teilnehmer den Tisch unbewusst selbst bewegten; sobald sie die eigene Bewegung sehen konnten, blieb der Tisch still. Faraday ärgerte sich über die Leichtgläubigkeit seiner Zeitgenossen – sein Glaube an Gott machte ihn nicht leichtgläubig, sondern nüchtern.`,
      sources: [{ kind: 'wissenschaft', author: 'Michael Faraday', work: 'Experimental Investigation of Table-Moving', ref: 'The Athenaeum (1853)', quote: `Experimenteller Nachweis unbewusster Muskelbewegung beim Tischrücken.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über das Böse',
      text: `Lewis beschrieb im Vorwort der „Dienstanweisung für einen Unterteufel" zwei gleich große und entgegengesetzte Fehler im Umgang mit den Teufeln: an ihre Existenz nicht zu glauben – oder an sie zu glauben und ein übermäßiges, ungesundes Interesse an ihnen zu haben. Beides gefalle ihnen gleichermaßen. Diese doppelte Warnung ist die christliche Mitte: weder Spott noch Faszination.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Screwtape Letters (dt. Dienstanweisung für einen Unterteufel)', ref: 'Vorwort', year: '1942', quote: `Es gibt zwei gleiche und entgegengesetzte Fehler, in die unser Geschlecht hinsichtlich der Teufel fallen kann. Der eine ist, an ihre Existenz nicht zu glauben. Der andere ist, an sie zu glauben und ein übermäßiges und ungesundes Interesse an ihnen zu haben.`, original: `There are two equal and opposite errors into which our race can fall about the devils. One is to disbelieve in their existence. The other is to believe, and to feel an excessive and unhealthy interest in them.`, status: 'verbatim' }],
    },
    {
      person: 'origenes',
      role: 'als Ausleger von 1 Sam 28',
      text: `Origenes hielt in einer Predigt über die „Bauchrednerin" von En-Dor die Erscheinung für den echten Samuel und begründete das mit dem Wortlaut des Textes; Eustathius von Antiochien widersprach ihm später und sah darin ein dämonisches Trugbild. Die Debatte zeigt: Die Kirche nahm den Text ernst. Unstrittig war bei allen, dass Saul mit der Befragung der Toten gegen Gottes Gebot handelte – und dass die Botschaft für ihn Gericht bedeutete.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Homilie über 1 Sam 28 („Über die Bauchrednerin", De engastrimytho)', quote: `Die Erscheinung sei der wirkliche Samuel gewesen.`, status: 'paraphrase', note: 'Origenes ist für die koptische Kirche keine Lehrautorität.' },
        { kind: 'kirchenvater', author: 'Eustathius von Antiochien', work: 'Über die Bauchrednerin, gegen Origenes', quote: `Die Erscheinung sei ein dämonisches Trugbild gewesen.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'trost-fuer-trauernde',
      objection: `Medien schenken Trauernden Trost und Abschied. Was soll daran falsch sein?`,
      objectionBy: 'John Edward / James Van Praagh',
      answer: `Ich verstehe die Sehnsucht – Trauer ist schwer, und der Wunsch nach einem letzten Wort ist zutiefst menschlich. Aber ein Trost, der auf Täuschung beruht oder auf Kontakt mit unbekannten Geistern, kann Menschen abhängig machen und in die Irre führen. Christen haben einen tieferen Trost: Unsere Toten sind bei Christus geborgen (Phil 1,23), wir beten in der Liturgie für sie, und wir werden sie in der Auferstehung wiedersehen.`,
      followUps: [
        {
          id: 'medium-wusste-details',
          objection: `Aber das Medium wusste Dinge, die es unmöglich wissen konnte!`,
          objectionBy: 'Teilnehmer an Sitzungen',
          answer: `Oft erklärt sich das durch „kaltes Lesen": allgemeine Aussagen, Rückfragen, Körpersprache – und unser Gedächtnis behält die Treffer und vergisst die Fehlschläge. Manchmal werden auch vorher Informationen gesammelt. Und wenn tatsächlich etwas Unerklärliches geschieht, zeigt Apg 16: Auch ein Wahrsagergeist kann Wahres sagen – das macht ihn nicht vertrauenswürdig.`,
          followUps: [
            {
              id: 'daemonen-aberglaube',
              objection: `Jetzt kommst du mit Dämonen – das ist mittelalterlicher Aberglaube.`,
              objectionBy: 'Skeptiker',
              answer: `Ich sage ja selbst: Das meiste ist Psychologie. Aber Jesus und die Apostel rechneten mit realen geistigen Mächten, und C. S. Lewis hat die richtige Mitte beschrieben: Zwei Fehler gefallen den Teufeln gleich – nicht an sie zu glauben oder ein ungesundes Interesse an ihnen zu haben. Das biblische Verbot hängt nicht davon ab, dass ich Dämonen beweise; es schützt dich in beiden Fällen.`,
              followUps: [
                {
                  id: 'kardec-christlich',
                  objection: `Der Spiritismus Allan Kardecs ist doch christlich – mit Nächstenliebe und Jesus als Vorbild. In Brasilien tun Spiritisten viel Gutes.`,
                  objectionBy: 'Kardecistische Spiritisten',
                  answer: `Ihre Nächstenliebe verdient Respekt. Aber Kardec lehrt Reinkarnation, leugnet die Gottheit Christi und die Erlösung durch das Kreuz, und er macht Geistermitteilungen zur Quelle neuer Offenbarung. Paulus sagt: Selbst wenn ein Engel vom Himmel ein anderes Evangelium verkündete, wäre es nicht von Gott (Gal 1,8). Ein „Jesus als Vorbild" ohne den gekreuzigten und auferstandenen Herrn ist nicht der Jesus der Evangelien.`,
                  questionsBack: [`Woran prüfst du, ob ein Geist, der sich „Jesus" oder „Engel" nennt, die Wahrheit sagt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'endor-samuel',
      objection: `In der Bibel spricht Saul durch eine Totenbeschwörerin mit Samuel (1 Sam 28). Also ist Kontakt mit Verstorbenen möglich und biblisch.`,
      objectionBy: 'Spiritisten',
      answer: `Lies genau: Als Samuel erscheint, schreit die Frau entsetzt auf (28,12) – sie hatte damit offenbar nicht gerechnet; Gott griff ausnahmsweise ein. Samuels Botschaft ist ein Gerichtswort: Morgen wirst du sterben. Und die Chronik sagt, Saul starb auch, „weil er die Wahrsagerin fragte und den HERRN nicht fragte" (1 Chr 10,13–14). Die Geschichte ist eine Warnung, keine Anleitung.`,
      followUps: [
        {
          id: 'ihr-redet-mit-heiligen',
          objection: `Ihr Orthodoxen redet doch selbst ständig mit Toten – mit Maria und den Heiligen. Wo ist da der Unterschied?`,
          objectionBy: 'Spiritisten und protestantische Kritiker',
          answer: `Der Unterschied ist grundlegend: Wir rufen niemanden herbei, wir suchen keine Botschaften oder Zukunftsauskünfte, wir benutzen keine Medien oder Techniken. Wir beten zu Gott und bitten die Heiligen, mit uns und für uns zu beten – so wie man einen Freund um Fürbitte bittet. Sie leben in Christus, „denn sie leben ihm alle" (Lk 20,38), und die Offenbarung zeigt sie vor Gottes Thron mit den Gebeten der Heiligen (Offb 5,8).`,
          followUps: [
            {
              id: 'erscheinungen',
              objection: `Und eure Marienerscheinungen, etwa in Zeitoun 1968? Das ist doch auch Kontakt mit dem Jenseits.`,
              objectionBy: 'Kritiker',
              answer: `Wenn Gott eine Erscheinung schenkt, liegt die Initiative bei ihm – niemand hat sie herbeigerufen, kein Ritual erzwungen. Die Kirche prüft solche Ereignisse sorgfältig, und ihr Inhalt führt zu Christus, zu Buße und Gebet, nicht zu Neugier und neuen Lehren. Das ist das Gegenteil von Spiritismus, wo Menschen versuchen, über die Grenze zu greifen.`,
              followUps: [
                {
                  id: 'lichtgestalt-pruefen',
                  objection: `Euer eigener Antonius warnte doch, dass Dämonen als Lichtgestalten erscheinen. Woher wisst ihr, dass eine Marienerscheinung nicht genauso eine Täuschung ist wie das, was im Medium spricht?`,
                  objectionBy: 'Skeptiker / Spiritisten',
                  answer: `Eine berechtigte Frage – und genau deshalb prüft die Kirche, statt einfach zu glauben. Antonius gibt die Kriterien: Was von Gott kommt, bringt Ruhe, Demut und Freude und führt zu Christus; was vom Feind kommt, bringt Unruhe, Furcht, Stolz und Neugier. Man prüft auch den Inhalt: Bringt die Erscheinung neue Lehren oder Botschaften über die Zukunft? Oder ruft sie zu Gebet, Buße und zur Kirche? Eine Erscheinung, die man nicht gesucht und nicht beschworen hat und die keine neue Offenbarung bringt, sondern zu Christus führt, unterscheidet sich grundlegend von einer Sitzung, in der Geister auf Bestellung sprechen.`,
                  detail: `Die koptische Kirche ist bei Erscheinungen zurückhaltend: Sie sind nie Glaubensgrundlage, die Offenbarung in Christus ist abgeschlossen. Was die Kirche über Zeitoun (1968–1971) bezeugte, war gerade, dass die Erscheinungen nicht sprachen, keine Botschaften brachten und Menschen verschiedener Religionen ins Gebet führten. Der Unterschied zum Spiritismus liegt also nicht darin, dass das eine übernatürlich wäre und das andere nicht, sondern in Initiative, Inhalt und Frucht – genau die Maßstäbe, die Antonius lehrte. Ausführlicher: Claim zu Zeitoun im Themenblock Medizin und Wunder.`,
                  voices: [
                    {
                      person: 'antonius',
                      role: 'als Lehrer der Unterscheidung der Geister',
                      text: `Antonius lehrt nach dem Bericht des Athanasius, dass die Gegenwart der Heiligen ruhig und sanft ist und Freude, Mut und Liebe zu Gott in die Seele bringt, während die Dämonen Verwirrung, Lärm und Furcht verbreiten und Gedanken des Stolzes eingeben. Wer eine Erscheinung sieht, soll ruhig fragen: Wer bist du? Und er soll Christus anrufen – das Gute bleibt, das Böse weicht.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '35–43', quote: `Regeln zur Unterscheidung der Geister: Frieden und Freude als Zeichen des Guten, Unruhe und Furcht als Zeichen des Bösen.`, status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Hat die Erscheinung, von der du sprichst, neue Lehren und Zukunftsbotschaften gebracht – oder Menschen zu Gebet und Umkehr geführt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tarot-psychologisch',
      objection: `Tarot ist nur ein psychologisches Werkzeug zur Selbstreflexion – die Karten sind Archetypen im Sinne C. G. Jungs.`,
      objectionBy: 'Rachel Pollack / psychologisches Tarot',
      answer: `Tarot entstand im 15. Jahrhundert in Italien als Kartenspiel; die okkulte Deutung erfand 1781 Antoine Court de Gébelin, der behauptete, die Karten stammten aus dem alten Ägypten – bevor jemand Hieroglyphen lesen konnte. Seit Champollion sie 1822 mit Hilfe des Koptischen entzifferte, wissen wir: Das stimmt nicht. Und wenn es nur um Selbstreflexion geht – warum befragen dann so viele die Karten über ihre Zukunft?`,
      followUps: [
        {
          id: 'pendel-bewegt-sich',
          objection: `Aber das Pendel bewegt sich wirklich – ich halte es ganz still!`,
          objectionBy: 'Anwender',
          answer: `Das ist der ideomotorische Effekt: Winzige, unbewusste Muskelbewegungen, die der Erwartung folgen. Der Chemiker Chevreul zeigte das schon im 19. Jahrhundert beim Pendel, Michael Faraday 1853 beim Tischrücken. Mach den Test: Lass jemand anderen die Frage verdeckt aufschreiben, sodass du die „richtige" Antwort nicht kennst – dann schwingt das Pendel nur noch zufällig.`,
          followUps: [
            {
              id: 'ouija-spiel',
              objection: `Ouija gibt es sogar im Spielwarenladen – es ist ein harmloses Partyspiel.`,
              objectionBy: 'Jugendliche',
              answer: `Physikalisch bewegen die Teilnehmer den Zeiger selbst – auch das ist der ideomotorische Effekt. Geistlich zählt aber die Absicht: Man will Geister rufen. Seelsorger berichten immer wieder von Menschen, die danach in Angst und Unruhe gerieten. Warum sollte man eine Tür öffnen, vor der die Bibel ausdrücklich warnt? „Widersteht dem Teufel, so flieht er von euch. Nahet euch zu Gott, so naht er sich zu euch" (Jak 4,7–8).`,
              sources: [{ kind: 'bibel', work: 'Jakobus', ref: '4,7–8', quote: `So seid nun Gott untertänig. Widerstehet dem Teufel, so flieht er von euch; nahet euch zu Gott, so naht er sich zu euch.`, translation: 'Luther 1912', status: 'verbatim' }],
              questionsBack: [`Wenn es nur ein Spiel ist – mit wem genau willst du dabei sprechen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass der Geist, der sich meldet, wirklich dein Verstorbener ist?`,
    `Warum warnt die Bibel so eindringlich davor, wenn es harmlos ist?`,
    `Hast du einmal einen verdeckten Test mit dem Pendel gemacht?`,
    `Was gibt dir mehr Hoffnung: eine Botschaft durch ein Medium oder die Auferstehung Christi?`,
  ],
  avoid: [
    `Jede okkulte Erfahrung sofort als Dämonie deuten – oft sind es Psychologie oder psychische Not; ziehe bei Bedarf auch ärztliche Hilfe hinzu.`,
    `Behaupten, alle Medien seien bewusste Betrüger – viele glauben aufrichtig an ihre Gabe.`,
    `Mit Horrorgeschichten Angst machen – Christen stehen unter dem Schutz Christi, nicht unter der Macht der Finsternis.`,
  ],
  concessions: [
    `Viele Menschen erleben bei Medien tatsächlich Trost.`,
    `Die Kirchenväter waren uneins, ob in 1 Sam 28 der echte Samuel erschien.`,
    `Einige Parapsychologen halten bestimmte Ergebnisse für unerklärt; die Bibel selbst rechnet mit realen geistigen Phänomenen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Dienstanweisung für einen Unterteufel (The Screwtape Letters)', year: '1942', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael Dummett / Ronald Decker / Thierry Depaulis', work: 'A Wicked Pack of Cards: The Origins of the Occult Tarot', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Harry Houdini', work: 'A Magician Among the Spirits', year: '1924', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Spiritismus', 'Okkultismus', 'Tarot', 'Pendel', 'Ouija', 'Endor', 'Antonius'],
  related: [
    'psychiatrie/daemonen-sind-krankheiten',
    'heilige-ikonen/fuerbitte-der-heiligen',
    'medizin-wunder/zeitoun-erscheinungen',
    'esoterik-new-age/astrologie-heilsteine',
    'mormonen/brennen-im-herzen',
  ],
};

export default claim;
