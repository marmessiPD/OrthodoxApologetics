import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'reformation-noetig',
  title: `„Die Reformation war nötig – Luther hat das Evangelium wiederentdeckt."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: '95 Thesen (1517); Von der Freiheit eines Christenmenschen (1520); Vorrede zu den lateinischen Schriften (1545) über seine Entdeckung von Röm 1,17' },
    { name: 'Jean-Henri Merle d’Aubigné', role: 'Reformierter Kirchenhistoriker (19. Jh.)', work: 'Histoire de la Réformation du seizième siècle – die Reformation als Wiederentdeckung des Evangeliums' },
    { name: 'Michael Reeves', role: 'Evangelikaler Theologe (Großbritannien)', work: 'The Unquenchable Flame. Discovering the Heart of the Reformation (2009)' },
    { name: 'Evangelische Kirchen am Reformationstag', role: 'Landeskirchen und Freikirchen', work: 'Gedenken am 31. Oktober: „Wiederentdeckung der Gnade"' },
  ],
  steelman: `Am Vorabend der Reformation war die westliche Kirche in einem erschütternden Zustand: Renaissance-Päpste wie Alexander VI. lebten offen in Unmoral, Bischofsämter wurden gekauft, und der Ablassprediger Tetzel verkaufte Sündenstrafen gegen Geld, um den Bau des Petersdoms zu finanzieren. Das einfache Volk verstand die lateinische Messe nicht, kannte die Bibel kaum und lebte in Angst vor Fegefeuer und Gericht. Jan Hus, der Reformen forderte, wurde 1415 verbrannt. In diese Finsternis hinein entdeckte Luther in Röm 1,17 neu: „Der Gerechte wird aus Glauben leben" – das Heil ist ein Geschenk, kein Lohn. Er übersetzte die Bibel in die Sprache des Volkes, gab den Laien den Kelch zurück, erlaubte den Pfarrern zu heiraten und befreite die Gewissen von der Tyrannei des Papstes. Selbst die katholische Kirche hat sich erst unter dem Druck der Reformation auf dem Konzil von Trient erneuert, und 1999 bestätigte die Gemeinsame Erklärung zur Rechtfertigungslehre, dass Luthers Anliegen berechtigt war. Ohne die Reformation wäre das Evangelium unter Werken, Ablässen und Menschensatzungen begraben geblieben.`,
  biblical: {
    summary: `Die Schrift verheißt, dass die Kirche das Evangelium **nie verlieren** wird: „Die Pforten der Hölle sollen sie nicht überwältigen" (Mt 16,18); „Ich bin bei euch alle Tage bis an der Welt Ende" (Mt 28,20); der Geist „wird euch in alle Wahrheit leiten" (Joh 16,13); die Kirche ist „ein Pfeiler und eine Grundfeste der Wahrheit" (1 Tim 3,15). Wenn das Evangelium von etwa 100 bis 1517 verschüttet gewesen wäre, hätten diese Verheißungen versagt. Zugleich kennt die Schrift echte **Reform**: Propheten rufen ein abtrünniges Volk zur Umkehr (Jer 7), Paulus widersteht Petrus ins Angesicht (Gal 2,11). Reform heißt Rückkehr zum Glauben der Väter – nicht Erfindung eines neuen Kirchenverständnisses.`,
    detail: `**Röm 1,17 im Kontext:** „Darinnen wird offenbart die Gerechtigkeit, die vor Gott gilt, welche kommt aus Glauben in Glauben." Die Kirchenväter haben diesen Vers nie vergessen: Für sie offenbart das Evangelium Gottes rettende Gerechtigkeit, die im Glauben empfangen wird und den Menschen erneuert. Luthers Übersetzung „die vor Gott gilt" ist bereits eine Deutung im Sinne seines eigenen Verständnisses; das Griechische sagt schlicht *dikaiosynē theou* – „Gerechtigkeit Gottes".

**Reform ja – aber wohin?** Die Frage ist nicht, ob die westliche Kirche des 15. Jahrhunderts Reform brauchte (das bestritten nicht einmal ihre treuesten Söhne), sondern ob die Reformatoren zur ganzen apostolischen Überlieferung zurückkehrten. Die Orthodoxie antwortet: In wichtigen Punkten ja (Kelch für Laien, Volkssprache, verheiratete Priester, Ablehnung von Ablass und Papstherrschaft), in anderen nein (Sakramente, Liturgie, Heilige, Fasten, Amt).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '16,18', quote: `… und auf diesen Felsen will ich bauen meine Gemeinde, und die Pforten der Hölle sollen sie nicht überwältigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,20', quote: `… und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '16,13', quote: `Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '3,15', quote: `… welches ist die Gemeinde des lebendigen Gottes, ein Pfeiler und eine Grundfeste der Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,17', quote: `Sintemal darin offenbart wird die Gerechtigkeit, die vor Gott gilt, welche kommt aus Glauben in Glauben; wie denn geschrieben steht: „Der Gerechte wird seines Glaubens leben."`, original: `δικαιοσύνη γὰρ θεοῦ ἐν αὐτῷ ἀποκαλύπτεται ἐκ πίστεως εἰς πίστιν`, translation: 'Luther 1912', status: 'verbatim', note: '„die vor Gott gilt" ist eine deutende Übersetzung Luthers; wörtlich: „Gerechtigkeit Gottes".' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche erkennt an, dass die Reformation auf **reale Missstände im lateinischen Westen** reagierte. Aber sie betont: **Die Orthodoxie kannte diese Missstände in ihrer Lehre nie** – keinen Ablass, keinen „Schatz der Verdienste", kein Fegefeuer, keinen Papst als Haupt der ganzen Kirche, kein Filioque, keinen Pflichtzölibat der Priester, keine Kelchverweigerung für Laien und keine Liturgie in einer unverständlichen Sprache. Die Reformation war die Antwort auf ein **westliches Problem**. Das Evangelium war nie verloren: Die Kirchen des Ostens haben es in Liturgie, Schrift, Vätern und Martyrium durch alle Jahrhunderte verkündet. Als die lutherischen Theologen von Tübingen 1573–1581 den Patriarchen von Konstantinopel um Anerkennung ihres Bekenntnisses baten, gab ihnen Jeremias II. in manchem recht, widersprach aber in zentralen Punkten.`,
    detail: `**Der Briefwechsel mit Jeremias II.:** 1573 reiste der Tübinger Theologe Stephan Gerlach als Gesandtschaftsprediger nach Konstantinopel; die Professoren Jakob Andreae und Martin Crusius schickten über ihn Briefe und eine griechische Fassung des Augsburger Bekenntnisses an Patriarch Jeremias II. Dieser antwortete 1576 ausführlich, Artikel für Artikel, aus Schrift und Vätern. Nach weiteren Briefen (Tübingen 1577 und 1580) schloss Jeremias 1581 den Lehraustausch: Die Lutheraner mögen ihren Weg gehen und ihm künftig nicht mehr über Lehrfragen, sondern nur noch in Freundschaft schreiben. Zustimmung fand der Patriarch etwa beim Kelch für die Laien und der Priesterehe; Widerspruch u. a. beim Filioque, bei „allein durch den Glauben", der Zahl der Sakramente, der Heiligenverehrung, dem Mönchtum und der Tradition.

**Schon Melanchthon** hatte 1559 eine griechische Übersetzung des Augsburger Bekenntnisses an Patriarch Joasaph II. gesandt; eine Antwort ist nicht bekannt. Und Luther selbst berief sich 1519 in der Leipziger Disputation auf die griechische Kirche, die nie unter dem Papst gestanden und doch Heilige wie Basilius und Gregor hervorgebracht habe.

**Die koptische Erfahrung:** Als im 19. Jahrhundert amerikanische presbyterianische Missionare nach Ägypten kamen (ab 1854), entstand eine evangelische Kirche, auch aus Kopten. Die koptische Kirche antwortete mit eigener Erneuerung von innen: Papst Kyrill IV. („Vater der Reform", 1854–1861) gründete Schulen, Habib Girgis die Sonntagsschulbewegung. Reform ohne Bruch mit der apostolischen Kirche.`,
    sources: [
      { kind: 'fachliteratur', author: 'George Mastrantonis (Hg.)', work: 'Augsburg and Constantinople. The Correspondence between the Tübingen Theologians and Patriarch Jeremiah II of Constantinople on the Augsburg Confession', year: '1982', status: 'paraphrase', note: 'Vollständige Edition des Briefwechsels 1573–1581 mit den drei Antworten des Patriarchen.' },
      { kind: 'fachliteratur', work: 'Briefwechsel Jeremias II. – Tübinger Theologen, Abschlussbrief des Patriarchen', year: '6. Juni 1581', status: 'paraphrase', quote: `Geht euren Weg und schreibt uns künftig nicht mehr über Lehrfragen, sondern, wenn ihr wollt, nur noch um der Freundschaft willen.` },
      { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 2: The Spirit of Eastern Christendom (600–1700)', year: '1974', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich gebe dir recht, dass die Kirche im Westen um 1500 schwere Missstände hatte – Ablasshandel, käufliche Ämter, Verdienstdenken. Aber die orthodoxe Kirche kannte das nie: keinen Ablass, kein Fegefeuer, keinen Papst über der ganzen Kirche, keinen Pflichtzölibat, keine Liturgie in fremder Sprache. Die Reformation war eine Antwort auf ein westliches Problem. Und das Evangelium war nie verloren – Christus hat versprochen, dass die Pforten der Hölle seine Kirche nicht überwältigen (Mt 16,18). Als Luthers Erben 1573–1581 den Patriarchen von Konstantinopel fragten, gab er ihnen gegen Rom teilweise recht, zeigte aber, dass sie in Sakramenten, Heiligen und Tradition die apostolische Kirche verlassen hatten.`,
  keyPoints: [
    `**Zugeben:** Ablasshandel, Ämterkauf und Verdienstfrömmigkeit im spätmittelalterlichen Westen waren reale Missstände.`,
    `**Aber westlich:** Die Orthodoxie kannte weder Ablass noch Fegefeuer, Papstherrschaft, Filioque, Pflichtzölibat noch Kelchentzug.`,
    `**Das Evangelium war nie verloren:** Mt 16,18; 28,20; Joh 16,13; 1 Tim 3,15 – und die Liturgien und Väter des Ostens bezeugen es.`,
    `**Luthers Forderungen waren im Osten längst erfüllt:** Volkssprache, Kelch für Laien, verheiratete Priester, kein Ablass. Luther selbst berief sich 1519 auf die Griechen.`,
    `**Der Test von 1573–1581:** Patriarch Jeremias II. antwortete den Tübinger Lutheranern: teils Zustimmung, in Kernfragen Widerspruch.`,
    `**Reform von innen:** Die koptische Kirche erneuerte sich im 19./20. Jahrhundert ohne Bruch (Kyrill IV., Habib Girgis, Sonntagsschulen).`,
  ],
  voices: [
    {
      person: 'pelikan',
      role: 'als lutherischer Dogmenhistoriker, der orthodox wurde',
      text: `Jaroslav Pelikan war lutherischer Pastor und kannte Luther wie kaum ein anderer – er gab die amerikanische Luther-Ausgabe mit heraus. Früh nannte er die Reformation eine „tragische Notwendigkeit": notwendig wegen der Missstände der westlichen Kirche, tragisch, weil sie die Einheit zerbrach. In seiner Geschichte der christlichen Lehre zeigte er, dass die Kirchen des Ostens eine eigene, ungebrochene Überlieferung besaßen, die von den westlichen Streitfragen um Ablass und Verdienst kaum berührt war. 1998 trat er selbst in die orthodoxe Kirche ein – für viele seiner Kollegen das Ergebnis eines lebenslangen Studiums der Väter.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Riddle of Roman Catholicism', year: '1959', status: 'paraphrase', note: 'Die Reformation als „tragic necessity".' },
        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 2 und 4', year: '1974/1984', status: 'paraphrase' },
      ],
    },
    {
      person: 'jeremias-ii',
      role: 'als Patriarch, der den Lutheranern antwortete',
      text: `Patriarch Jeremias II. nahm das Augsburger Bekenntnis, das ihm die Tübinger Theologen 1573/74 schickten, ernst und antwortete 1576 Artikel für Artikel. Er stimmte den Lutheranern zu, wo sie mit der alten Kirche übereinstimmten, etwa bei der Kommunion unter beiden Gestalten und der Ehe der Priester. Doch er widersprach beim Filioque, bei der Rechtfertigung allein durch den Glauben, bei der Reduktion der Sakramente, bei der Verwerfung der Heiligenanrufung, des Mönchtums und der Überlieferung. Seine Methode war die der Orthodoxie: nicht eigene Meinung, sondern Schrift, Konzilien und Väter. Als die Tübinger 1580 erneut ihre Position verteidigten, beendete er 1581 freundlich, aber bestimmt den Lehraustausch.`,
      sources: [
        { kind: 'fachliteratur', author: 'George Mastrantonis (Hg.)', work: 'Augsburg and Constantinople', year: '1982', status: 'paraphrase' },
      ],
    },
    {
      person: 'kallistos-ware',
      role: 'als östlich-orthodoxer Theologe',
      text: `Kallistos Ware beschreibt in „The Orthodox Church", wie die Orthodoxen die Reformation sahen: als innerwestlichen Streit, in dem beide Seiten von denselben Voraussetzungen ausgingen. Er zitiert den russischen Laientheologen Alexei Chomjakow, Papsttum und Protestantismus seien zwei Seiten derselben Medaille – beide stellten dieselben Fragen, nur mit entgegengesetzten Antworten. Die Orthodoxie stand außerhalb dieses Gegensatzes, weil sie die mittelalterlichen westlichen Entwicklungen nicht mitgemacht hatte.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', ref: 'Kap. „Reformation and Counter-Reformation"', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Prediger der Gnade im 4. Jahrhundert',
      text: `Wer meint, das Evangelium der Gnade sei vor Luther verschüttet gewesen, sollte Athanasius lesen. In „Über die Menschwerdung des Logos" erklärt er, dass der Mensch sich nicht selbst aus dem Verderben retten konnte; nur der Logos selbst, der Mensch wurde, konnte das Bild Gottes erneuern und den Tod besiegen. „Er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54) – das ist Gnade pur, Geschenk von Anfang bis Ende. Die koptische Kirche hat dieses Evangelium in jeder Liturgie verkündet, lange bevor es einen Ablassstreit gab.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'um 318', status: 'paraphrase' }],
    },
    {
      person: 'peter-gillquist',
      role: 'als Evangelikaler auf der Suche nach der Kirche des NT',
      text: `Peter Gillquist und eine Gruppe evangelikaler Leiter von Campus Crusade for Christ wollten in den 1970er-Jahren die Kirche des Neuen Testaments wiederherstellen und lasen dazu die frühesten Väter. Sie stellten fest, dass die Kirche des 2. Jahrhunderts bischöflich, liturgisch und sakramental war – und dass sie nicht neu erfunden, sondern gefunden werden musste. Ihre Suche führte 1987 viele von ihnen in die orthodoxe Kirche. Gillquist beschrieb das als Entdeckung: Das Evangelium war nie verloren; es lebte in einer Kirche, die er als Evangelikaler gar nicht gekannt hatte.`,
      sources: [{ kind: 'fachliteratur', author: 'Peter E. Gillquist', work: 'Becoming Orthodox. A Journey to the Ancient Christian Faith', year: '1989', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'ablass-missstand',
      objection: `„Ablasshandel, Ämterkauf, unmoralische Päpste – die Kirche war um 1500 durch und durch verdorben. Wie kannst du sagen, die Reformation war nicht nötig?"`,
      objectionBy: 'Evangelischer Kirchenhistoriker',
      answer: `Ich sage nicht, dass der Westen keine Reform brauchte – die Missstände waren real, und Luthers Protest gegen den Ablasshandel war berechtigt. Aber all das war ein Problem der lateinischen Kirche. Die orthodoxe Kirche kannte keinen Ablass, kein Fegefeuer, keinen Papst über der ganzen Kirche. Luther reagierte auf eine westliche Krankheit – und warf dabei auch Dinge über Bord, die die ganze alte Kirche in Ost und West teilte.`,
      followUps: [
        {
          id: 'osten-auch-verfallen',
          objection: `„Die Ostkirchen waren damals auch nicht besser: Unwissenheit, Aberglaube, Simonie unter den Osmanen. Die Orthodoxie hätte genauso eine Reformation gebraucht."`,
          objectionBy: 'Evangelischer Kirchenhistoriker',
          answer: `Moralische Schwächen, Armut und Unbildung gab es unter osmanischer und islamischer Herrschaft reichlich – das gebe ich zu. Aber es gibt einen Unterschied zwischen einer Reform des *Lebens* und einer Änderung des *Glaubens*. Die Orthodoxie brauchte Bildung und Umkehr, und sie hat sie bekommen – in Ägypten durch Kyrill IV. und die Sonntagsschulbewegung. Sie brauchte keine neue Lehre, denn ihre Lehre hatte sich nicht vom Glauben der Väter entfernt.`,
          followUps: [
            {
              id: 'lehre-auch-falsch',
              objection: `„Doch, eure Lehre hat dieselben Fehler wie Rom: Heiligenverehrung, Werke, Tradition, Priester. Die Reformation trifft euch genauso."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Das sind genau die Punkte, die schon die Kirche des 2. bis 4. Jahrhunderts bezeugt – Ignatius, Irenäus, Athanasius, Basilius –, lange vor jeder römischen Sonderentwicklung. Die spezifisch westlichen Lehren, gegen die Luther kämpfte – Ablass, Verdienstschatz, Fegefeuer, päpstliche Vollgewalt –, hat die Orthodoxie nie gelehrt. Wer die Reformation auch gegen die Orthodoxie wendet, muss sie gegen die ganze alte Kirche wenden.`,
              followUps: [
                {
                  id: 'jeremias-nur-konservativ',
                  objection: `„Der Patriarch Jeremias war eben ein konservativer Kirchenführer unter türkischer Herrschaft. Seine Antwort beweist nur, dass die Griechen geistig stehen geblieben waren."`,
                  objectionBy: 'Lutherischer Theologe',
                  answer: `Seine Antworten waren keine bloße Abwehr, sondern eine sorgfältige, artikelweise Prüfung aus Schrift, Konzilien und Vätern – und er stimmte den Lutheranern dort zu, wo sie mit der alten Kirche übereinstimmten. Die Tübinger selbst hatten ihn ja gerade deshalb gefragt, weil sie hofften, die alte Ostkirche werde ihren Glauben als apostolisch bestätigen. Die Antwort war ehrlich: in manchem ja, in vielem nein. Wer den Zeugen selbst ausgesucht hat, kann sein Urteil nicht einfach verwerfen, weil es nicht gefällt.`,
                  questionsBack: [`Warum haben die Tübinger Lutheraner überhaupt den Patriarchen von Konstantinopel um Bestätigung gebeten – wenn nicht, weil sie in ihm einen Zeugen der alten Kirche sahen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evangelium-wiederentdeckt',
      objection: `„Luther hat in Röm 1,17 das Evangelium wiederentdeckt: Gerechtigkeit als Geschenk, nicht als Leistung. Das war über Jahrhunderte verschüttet."`,
      objectionBy: 'Lutherischer Pfarrer',
      answer: `Für Luther persönlich war es eine Befreiung, und das respektiere ich. Aber das Evangelium der Gnade war nie verschüttet. Athanasius schrieb im 4. Jahrhundert, dass nur der menschgewordene Logos uns retten konnte – „Er wurde Mensch, damit wir vergöttlicht würden". Die koptische Liturgie bekennt in jeder Feier, dass Christus uns aus Gnade erlöst hat. Wenn das Evangelium tausend Jahre verloren gewesen wäre, hätte Christi Verheißung versagt (Mt 16,18).`,
      followUps: [
        {
          id: 'angst-vor-luther',
          objection: `„Aber die Menschen vor Luther lebten in Angst – sie wussten nie, ob sie genug getan hatten. Gewissheit des Heils gab es nicht."`,
          objectionBy: 'Lutherischer Pfarrer',
          answer: `Diese Angst war vor allem ein Phänomen der spätmittelalterlichen westlichen Frömmigkeit mit ihrem Verdienst- und Ablasssystem. In der koptischen Liturgie betet die Gemeinde voll Vertrauen zu dem Gott, „der uns liebt"; die Väter sprechen von der Hoffnung, die nicht zuschanden wird (Röm 5,5). Orthodoxe Heilsgewissheit ist Vertrauen in Christus, verbunden mit Demut – nicht die Sorge, ob man genug Ablässe gesammelt hat.`,
          followUps: [
            {
              id: 'augustinus-vorlaeufer',
              objection: `„Luther hat nur Augustinus wiederentdeckt. Augustinus lehrte schon die Gnade allein – die Reformation ist Rückkehr zu ihm."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Augustinus ist ein wichtiger Zeuge der Gnade, aber gerade er versteht Rechtfertigung nicht rein forensisch: „Gerechtfertigt werden" heißt bei ihm „gerecht gemacht werden" – innere Erneuerung durch die Liebe, die der Geist ins Herz gießt (Röm 5,5). Und Augustinus ist einer unter vielen Vätern; die Orthodoxie liest ihn im Licht des Konsenses der Väter. Wer sich auf ihn beruft, muss auch seine Lehre von Kirche, Sakramenten und Heiligen annehmen.`,
              sources: [
                { kind: 'kirchenvater', author: 'Augustinus', work: 'Über den Geist und den Buchstaben (De spiritu et littera)', ref: '26,45', year: '412', status: 'paraphrase', quote: `Was heißt „sie werden gerechtfertigt" anderes als „sie werden gerecht gemacht"?`, original: `iustificabuntur … quid est aliud quam iusti facti erunt` },
              ],
              followUps: [
                {
                  id: 'gemeinsame-erklaerung-1999',
                  objection: `„Selbst die katholische Kirche hat 1999 in der Gemeinsamen Erklärung zur Rechtfertigungslehre anerkannt, dass Luther recht hatte."`,
                  objectionBy: 'Ökumenisch engagierter Lutheraner',
                  answer: `Die Erklärung von 1999 hat einen „Konsens in Grundwahrheiten" festgestellt und zugleich bleibende Unterschiede benannt; die katholische Seite betont dort weiterhin die innere Erneuerung des Menschen. Vor allem zeigt sie, dass dies ein innerwestlicher Streit war. Die Orthodoxie war daran nicht beteiligt, weil sie die Frage nie so gestellt hat: Für sie ist Heil Vereinigung mit Gott, Vergebung *und* Verwandlung zugleich.`,
                  sources: [
                    { kind: 'konzil', work: 'Gemeinsame Erklärung zur Rechtfertigungslehre (Lutherischer Weltbund und Römisch-katholische Kirche)', year: '1999', status: 'paraphrase', note: 'Spricht von einem „Konsens in Grundwahrheiten" bei verbleibenden Unterschieden in der Entfaltung.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'luther-gab-bibel',
          objection: `„Luther hat den Menschen die Bibel in ihrer Sprache gegeben. Vorher war sie den Laien verschlossen."`,
          objectionBy: 'Evangelikaler Gemeindeleiter',
          answer: `Im Osten war die Bibel nie verschlossen: Die Kopten hatten sie seit dem 3./4. Jahrhundert auf Koptisch, später auf Arabisch; Syrer, Armenier, Äthiopier, Georgier und Slawen in ihren Sprachen – und die Liturgie wurde in der Volkssprache gefeiert. Auch im Westen gab es vor Luther gedruckte deutsche Bibeln (etwa die Mentelin-Bibel von 1466). Luthers Übersetzung ist eine große sprachliche Leistung – aber sie war keine erste Befreiung der Schrift.`,
          sources: [
            { kind: 'fachliteratur', work: 'Mentelin-Bibel (erste gedruckte deutsche Vollbibel)', year: '1466', status: 'paraphrase', note: 'Vor Luther erschienen mehrere gedruckte deutsche Bibelausgaben.' },
          ],
        },
      ],
    },
    {
      id: 'zersplitterung-preis',
      objection: `„Die Spaltung in viele Kirchen ist ein Preis, den man für die Wahrheit zahlen muss. Entscheidend ist die unsichtbare Einheit im Geist."`,
      objectionBy: 'Freikirchlicher Theologe',
      answer: `Jesus betete um eine *sichtbare* Einheit: „dass sie alle eins seien … *auf dass die Welt glaube*" (Joh 17,21) – eine unsichtbare Einheit kann die Welt nicht sehen. Paulus beschwört die Korinther: „Lasset nicht Spaltungen unter euch sein" (1 Kor 1,10). Die Zersplitterung ist keine Nebenwirkung der Wahrheit, sondern eine Wunde – und sie folgt strukturell aus dem Grundsatz, dass jeder die Schrift letztlich selbst auslegt.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '17,21', quote: `… auf daß sie alle eins seien, gleichwie du, Vater, in mir und ich in dir; daß auch sie in uns eins seien, auf daß die Welt glaube, du habest mich gesandt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'orthodoxe-auch-gespalten',
          objection: `„Die Orthodoxen sind doch selbst gespalten – Kopten und Griechen seit 451, und heute streiten Moskau und Konstantinopel. Wer im Glashaus sitzt …"`,
          objectionBy: 'Freikirchlicher Theologe',
          answer: `Das stimmt, und es schmerzt uns. Der Unterschied ist: Wir sehen Spaltung als Sünde und Wunde, die geheilt werden muss – deshalb die Dialoge zwischen orientalischen und östlichen Orthodoxen seit 1964, die 1989/1990 den gemeinsamen Glauben an Christus festhielten. Die Spaltungen unter Orthodoxen betreffen vor allem Begriffe und Jurisdiktionen; die Liturgie, die Sakramente und der Glaube der ersten Konzilien sind gemeinsam.`,
          followUps: [
            {
              id: 'suende-nicht-prinzip',
              objection: `„Nicht Sola Scriptura ist schuld an den Spaltungen, sondern die menschliche Sünde. Auch die alte Kirche hatte Spaltungen."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Sünde spaltet überall, einverstanden. Aber die alte Kirche hatte ein Mittel, Streit zu entscheiden: die Konzilien und den Konsens der Väter, an den man sich gebunden wusste. Wenn dagegen jeder Einzelne oder jede Gemeinde letzte Instanz der Auslegung ist, gibt es kein Mittel mehr, Streit über die Taufe, das Abendmahl oder die Kirche zu entscheiden – außer der nächsten Gemeindegründung. Das ist kein moralisches, sondern ein strukturelles Problem.`,
              questionsBack: [`Wer entscheidet bei dir, wenn ein Baptist und ein Lutheraner beide mit der Bibel begründen, ob Kinder getauft werden dürfen?`],
            },
          ],
        },
      ],
    },
    {
      id: 'freiheit-bildung',
      objection: `„Die Reformation hat Gewissensfreiheit, Bildung für alle und letztlich die moderne Freiheit gebracht. Das spricht für sich."`,
      objectionBy: 'Kulturprotestantischer Historiker',
      answer: `Die Reformation hatte bedeutende kulturelle Folgen – Schulen, Bibellektüre, Gewissen. Aber die Bilanz ist gemischt: Luther rief 1525 zur Niederschlagung der aufständischen Bauern auf, schrieb 1543 die judenfeindliche Schrift „Von den Juden und ihren Lügen", und in Zürich wurden Täufer ertränkt. Vor allem: Kulturelle Wirkungen beweisen nicht die Wahrheit einer Lehre. Die Frage ist, ob die Reformatoren den Glauben der Apostel bewahrt haben.`,
      followUps: [
        {
          id: 'luther-wollte-nur-reform',
          objection: `„Luther wollte die Kirche ja gar nicht spalten, sondern nur reformieren. Rom hat ihn exkommuniziert."`,
          objectionBy: 'Lutherischer Pfarrer',
          answer: `Das ist richtig, und es macht die Geschichte tragisch – Pelikan nannte die Reformation eine „tragische Notwendigkeit". Aber gerade deshalb ist die Frage berechtigt: Wohin hätte eine echte Reform zurückkehren müssen? Zu den Quellen – den Aposteln, den Vätern, den Konzilien der ungeteilten Kirche. Diese Quellen haben die Kirchen des Ostens ungebrochen bewahrt. Viele Protestanten, die heute „zurück zu den Quellen" gehen, finden deshalb zur Orthodoxie.`,
        },
      ],
    },
    {
      id: 'orthodoxie-gleich-rom',
      objection: `„Für mich ist die Orthodoxie im Kern dasselbe wie der Katholizismus, nur mit Bärten und Weihrauch. Was die Reformation gegen Rom sagte, gilt auch für euch."`,
      objectionBy: 'Evangelikaler Prediger',
      answer: `Die Unterschiede sind gerade dort, wo die Reformation ansetzte: Die Orthodoxie hat keinen Papst als Haupt der ganzen Kirche, kein Filioque, keine Ablässe, kein Fegefeuer, keinen „Schatz der Verdienste", keinen Pflichtzölibat für Priester, und die Laien empfangen immer den Kelch. Schon die Tübinger Lutheraner wandten sich 1573 an Konstantinopel, weil sie wussten, dass die Ostkirche nicht Rom ist.`,
      followUps: [
        {
          id: 'werkgerechtigkeit-gemeinsam',
          objection: `„Aber der Kern ist gleich: Ihr lehrt wie Rom, dass man durch Werke mitwirken muss. Das ist Werkgerechtigkeit."`,
          objectionBy: 'Evangelikaler Prediger',
          answer: `Die Orthodoxie lehrt keine Verdienste, mit denen man Gott etwas schuldig macht. Sie lehrt Synergie: Gottes Gnade schenkt alles, und der Mensch antwortet frei – so wie Paulus sagt: „Schaffet, dass ihr selig werdet, mit Furcht und Zittern; denn Gott ist's, der in euch wirket beides, das Wollen und das Vollbringen" (Phil 2,12–13). Werke sind Frucht und Mitwirkung, nicht Bezahlung. Das ist nicht römisches Verdienstdenken, sondern die Sprache der Schrift.`,
          sources: [
            { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `… schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn das Evangelium vor Luther verschüttet war – was ist dann aus Christi Verheißung in Mt 16,18 geworden?`,
    `Welche der Missstände, gegen die Luther protestierte, gab es in der koptischen oder griechischen Kirche?`,
    `Warum haben die Tübinger Lutheraner 1573 den Patriarchen von Konstantinopel um Bestätigung gebeten – und kennst du seine Antwort?`,
    `Wohin hätte eine Reform „zurück zu den Quellen" zurückkehren müssen, wenn nicht zur Kirche der Väter?`,
    `Wer entscheidet heute verbindlich zwischen Lutheranern, Reformierten, Baptisten und Pfingstlern, wenn alle sich auf die Bibel berufen?`,
  ],
  avoid: [
    `Luther nicht als Bösewicht oder Ketzer beschimpfen; er war ein ernsthaft ringender Christ, und seine Kritik am Ablasshandel war berechtigt.`,
    `Keine überhöhten Zahlen über „33.000 Denominationen" nennen; diese Zahlen sind umstritten und angreifbar.`,
    `Nicht behaupten, die orthodoxe Kirche habe nie Reform gebraucht oder sei moralisch immer vorbildlich gewesen.`,
    `Lutheraner, Reformierte und Freikirchler nicht in einen Topf werfen – Luther selbst hielt an Taufwiedergeburt und Realpräsenz fest.`,
  ],
  concessions: [
    `Die Missstände im spätmittelalterlichen Westen – Ablasshandel, Ämterkauf, Verdienstfrömmigkeit – waren real, und die Reformation hat sie zu Recht angeprangert.`,
    `Die orthodoxen Kirchen litten in derselben Zeit unter Armut, mangelnder Bildung und politischer Abhängigkeit; auch sie brauchten Erneuerung.`,
    `Die Reformation hat bleibende Verdienste: Bibelübersetzungen, Katechismen, Kirchenlieder, Bildung – und viele Protestanten leben eine tiefe Liebe zu Christus.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'George Mastrantonis (Hg.)', work: 'Augsburg and Constantinople', year: '1982', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 4: Reformation of Church and Dogma (1300–1700)', year: '1984', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Josiah Trenham', work: 'Rock and Sand. An Orthodox Appraisal of the Protestant Reformers and Their Teachings', year: '2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter E. Gillquist', work: 'Becoming Orthodox', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Reformation', 'Luther', 'Ablass', 'Jeremias II.', 'Augsburger Bekenntnis', 'Kirchengeschichte'],
  related: ['sola-scriptura/kirche-war-verdorben', 'sola-fide/allein-durch-glauben', 'katholizismus/ablass-verdienste', 'katholizismus/fegefeuer', 'reformation/imputierte-gerechtigkeit', 'orthodoxie-oekumene/alle-kirchen-gleich'],
};

export default claim;
