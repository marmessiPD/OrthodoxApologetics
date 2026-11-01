import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wohlstandsevangelium',
  title: `„Gott will, dass du reich und gesund bist."`,
  proponents: [
    { name: 'Kenneth E. Hagin', role: 'Begründer der „Word of Faith"-Bewegung (1917–2003)', work: 'Rhema-Bibelschule; Lehre vom „positiven Bekenntnis"' },
    { name: 'Kenneth Copeland', role: 'Fernsehprediger', work: 'The Laws of Prosperity (1974)' },
    { name: 'Oral Roberts', role: 'Heilungsevangelist (1918–2009)', work: 'Lehre vom „Saat-Glauben" (seed faith)' },
    { name: 'Joel Osteen', role: 'Pastor der Lakewood Church, Houston', work: 'Your Best Life Now (2004)' },
    { name: 'Creflo Dollar', role: 'Pastor, World Changers Church International', work: 'Fernsehpredigten zum Wohlstand' },
  ],
  steelman: `Gott ist ein guter Vater; er will nicht, dass seine Kinder in Armut und Krankheit leben. Johannes betet: „Ich wünsche in allen Stücken, dass dir’s wohl gehe und du gesund seist, so wie es deiner Seele wohl geht" (3 Joh 2). Christus „ward arm um euretwillen, auf dass ihr durch seine Armut reich würdet" (2 Kor 8,9). Abraham, Isaak, Jakob, Hiob und Salomo waren reich gesegnet; die Segensverheißungen von Dtn 28 sind eindeutig. Wer den Zehnten bringt, dem öffnet Gott „des Himmels Fenster" (Mal 3,10), und wer um Christi willen etwas lässt, empfängt „hundertfältig jetzt in dieser Zeit" (Mk 10,30). Armut ist ein Fluch, von dem Christus uns erlöst hat (Gal 3,13–14). Unser Glaube und unser Bekenntnis setzen geistliche Gesetze in Kraft; Worte haben Macht (Spr 18,21). Ein armer, kranker Christ ist kein gutes Zeugnis – ein gesegneter Christ zeigt der Welt, wie gut Gott ist. Und reiche Christen können mehr für das Reich Gottes geben.`,
  biblical: {
    summary: `Die Schrift lehrt, dass Gott für die Seinen sorgt (Mt 6,33) und Arbeit und Großzügigkeit segnet. Sie lehrt aber **nicht**, dass Reichtum und Gesundheit ein Anrecht des Glaubens sind. Jesus warnt: „Ihr sollt euch nicht Schätze sammeln auf Erden" (Mt 6,19–21). Paulus verurteilt ausdrücklich Leute, „die da meinen, Gottseligkeit sei ein Gewerbe", und nennt die Geldgier „eine Wurzel alles Übels" (1 Tim 6,5–10). Er selbst hatte „gelernt, Mangel zu leiden" (Phil 4,11–13), trug einen „Pfahl im Fleisch", den Gott nicht wegnahm (2 Kor 12,7–10), und ließ seinen Mitarbeiter Trophimus krank zurück (2 Tim 4,20). Die Glaubenshelden von Hebr 11 gingen „in Schafpelzen und Ziegenfellen, mit Mangel, mit Trübsal" (11,37). Die Lieblingsverse des Wohlstandsevangeliums werden aus dem Zusammenhang gerissen.`,
    detail: `**3 Joh 2** ist eine übliche antike Briefeingangsformel („Ich hoffe, es geht dir gut"), keine Verheißung für alle Christen.

**2 Kor 8,9** steht im Zusammenhang einer Kollekte für die armen Christen in Jerusalem. Paulus fordert die Korinther auf, wie Christus **arm zu werden für andere** – also zu geben, nicht zu gewinnen. Der „Reichtum" ist das Heil.

**Mk 10,29–30** verheißt hundertfach „Häuser und Brüder und Schwestern … **mitten unter Verfolgungen**" – gemeint ist die neue Familie der Kirche, und Verfolgung gehört ausdrücklich dazu. Der Kontext ist der reiche Jüngling, der traurig wegging, weil er viele Güter hatte.

**Mal 3,10** richtet sich an Israel unter dem Bund am Tempel; der Zehnte ist ein Werk des Gehorsams und der Versorgung der Leviten, Witwen und Waisen (Dtn 14,28–29) – keine Investition mit Renditegarantie.

**Dtn 28** sind Bundessegnungen für das Volk Israel im Land. Schon im Alten Testament ringt Hiob damit, dass der Gerechte leidet, und Ps 73 damit, dass es den Gottlosen gut geht. Das Neue Testament nennt die Leidenden und Armen selig (Lk 6,20–24) und kennt den reichen Kornbauern, den Gott einen „Narren" nennt (Lk 12,20).`,
    sources: [
      { kind: 'bibel', work: '1. Timotheus', ref: '6,5–10', quote: `… die da meinen, Gottseligkeit sei ein Gewerbe. Tue dich von solchen! Es ist aber ein großer Gewinn, wer gottselig ist und lässet sich genügen. … Denn Geiz ist eine Wurzel alles Übels; das hat etliche gelüstet und sind vom Glauben irregegangen und machen sich selbst viel Schmerzen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,19–21', quote: `Ihr sollt euch nicht Schätze sammeln auf Erden, da sie die Motten und der Rost fressen und da die Diebe nachgraben und stehlen. Sammelt euch aber Schätze im Himmel … Denn wo euer Schatz ist, da ist auch euer Herz.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '4,11–13', quote: `… denn ich habe gelernt, bei welchen ich bin, mir genügen zu lassen. Ich kann niedrig sein und kann hoch sein; ich bin in allen Dingen und bei allen geschickt, beides, satt sein und hungern, beides, übrighaben und Mangel leiden. Ich vermag alles durch den, der mich mächtig macht, Christus.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '12,9', quote: `Laß dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,37', quote: `Sie sind gesteinigt, zerhackt, zerstochen, durchs Schwert getötet; sie sind umhergegangen in Schafpelzen und Ziegenfellen, mit Mangel, mit Trübsal, mit Ungemach.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '10,29–30', quote: `… der nicht hundertfältig empfange: jetzt in dieser Zeit Häuser und Brüder und Schwestern und Mütter und Kinder und Äcker mitten unter Verfolgungen, und in der zukünftigen Welt das ewige Leben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '3. Johannes', ref: '2', quote: `Mein Lieber, ich wünsche in allen Stücken, daß dir's wohl gehe und du gesund seist, wie es denn deiner Seele wohl geht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ist die **Kirche der Märtyrer**: Ihr Kalender zählt die Jahre seit der Verfolgung unter Diokletian (Anno Martyrum, ab 284), und bis heute sterben Kopten für ihren Glauben. Das Mönchtum, das in Ägypten entstand, beginnt mit dem heiligen Antonius, der nach dem Hören von Mt 19,21 seinen Besitz verkaufte. Die Kirche lehrt: Reichtum ist an sich nicht böse, aber gefährlich; er ist anvertrautes Gut für die Armen. Der Segen Gottes ist vor allem geistlich, und Leiden kann Teilnahme am Kreuz Christi sein (Kol 1,24; Röm 8,17). Den Zehnten und Großzügigkeit lehrt die Kirche als Dank und Liebe, nicht als Geschäft mit Gott.`,
    detail: `**Antonius:** Athanasius berichtet, wie der junge Antonius in der Kirche das Evangelium hörte – „Willst du vollkommen sein, so gehe hin, verkaufe, was du hast, und gib’s den Armen" – und es wörtlich befolgte (Vita Antonii 2). Aus dieser Entscheidung ging das christliche Mönchtum hervor.

**Die 21 Märtyrer von Libyen:** Im Februar 2015 wurden 20 koptische Arbeiter aus Oberägypten und ein Mann aus Ghana von Kämpfern des „Islamischen Staats" an einem libyschen Strand enthauptet; viele riefen dabei den Namen Jesu an. Papst Tawadros II. nahm sie wenige Tage später in das Synaxarium auf; sie werden am 15. Februar gefeiert. 2023 nahm Papst Franziskus sie mit Zustimmung von Papst Tawadros in das römische Martyrologium auf. Diese einfachen, armen Männer waren nicht reich und nicht „gesund" im Sinne des Wohlstandsevangeliums – und doch sind sie die Ehre der ganzen Christenheit.

**Kirchenväter über Reichtum:** Clemens von Alexandrien schrieb die Schrift „Welcher Reiche wird gerettet?" – Reichtum ist ein Werkzeug, das zum Guten oder Bösen gebraucht wird; entscheidend ist die innere Freiheit von ihm. Basilius predigte: Das Brot, das du hortest, gehört dem Hungrigen. Chrysostomus nannte die Armen den „Altar", an dem wir Christus dienen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii (Leben des Antonius)', ref: '2', year: 'um 357', status: 'paraphrase', quote: `Antonius hörte in der Kirche das Wort des Herrn an den reichen Jüngling, ging hinaus und verschenkte das Erbe seiner Eltern.` },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Quis dives salvetur? (Welcher Reiche wird gerettet?)', year: 'um 200', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie über Lk 12,18 („Ich will meine Scheunen abbrechen")', status: 'paraphrase', quote: `Das Brot, das du zurückhältst, gehört dem Hungernden; das Kleid, das du im Schrank verwahrst, dem Nackten.` },
      { kind: 'sonstiges', work: 'Berichte über die Aufnahme der 21 koptischen Märtyrer von Libyen in das Römische Martyrologium (11. Mai 2023)', year: '2015 / 2023', status: 'paraphrase', url: 'https://www.vaticannews.va/en/pope/news/2023-05/pope-francis-tawadros-ii-coptic-orthodox-martyrs-egypt.html', note: 'Gedenktag in beiden Kirchen: 15. Februar.' },
    ],
  },
  quickAnswer: `Gott sorgt für seine Kinder – aber er hat uns nie Reichtum und Gesundheit als Glaubensrecht versprochen. Paulus nennt Leute, die „meinen, Frömmigkeit sei ein Gewerbe", Irrlehrer (1 Tim 6,5) und hat selbst „Mangel leiden gelernt" (Phil 4,12). Jesus hatte nichts, wohin er sein Haupt legen konnte (Mt 8,20). Die koptische Kirche ist eine Kirche der Märtyrer – hatten die 21 Märtyrer von Libyen etwa zu wenig Glauben?`,
  keyPoints: [
    `**1 Tim 6,5–10:** Paulus verurteilt ausdrücklich die Meinung, Frömmigkeit sei ein Mittel zum Gewinn – Geldgier ist eine Wurzel alles Übels.`,
    `**Die Apostel waren arm und litten:** Paulus (Phil 4,11–13; 2 Kor 11,23–27; 12,7–10), Timotheus krank (1 Tim 5,23), Trophimus krank (2 Tim 4,20).`,
    `**Die Lieblingsverse sind aus dem Zusammenhang gerissen:** 3 Joh 2 (Briefformel), 2 Kor 8,9 (Aufruf zum Geben), Mk 10,30 („mitten unter Verfolgungen").`,
    `**Hebr 11,35–38:** Die Glaubenshelden litten Mangel und Folter – ihr Glaube war nicht zu klein, sondern groß.`,
    `**Die Kirche der Märtyrer** – von Diokletian bis zu den 21 Märtyrern von Libyen 2015 – widerlegt die Gleichung „Glaube = Wohlstand".`,
    `**Selbst pfingstliche Gelehrte** wie Gordon Fee und die Lausanner Bewegung haben das Wohlstandsevangelium als Irrlehre bezeichnet.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der Mangel litt',
      text: `Paulus zählt seine „Erfolge" als Apostel auf: Gefängnisse, Schläge, Steinigung, Schiffbruch, „in Hunger und Durst, in viel Fasten, in Frost und Blöße" (2 Kor 11,23–27). Er rühmt sich gerade seiner Schwachheit, weil Christi Kraft darin mächtig ist (12,9–10). Wer Gottseligkeit für ein Gewerbe hält, von dem soll man sich trennen (1 Tim 6,5). Für Paulus ist der Gewinn Christus selbst – alles andere hält er „für Kot" (Phil 3,8).`,
      sources: [{ kind: 'bibel', work: '2. Korinther', ref: '11,23–27; 12,9–10', status: 'paraphrase' }],
    },
    {
      person: 'gordon-fee',
      role: 'als pfingstlicher Neutestamentler',
      text: `Fee, selbst Pfingstler, nannte das Wohlstandsevangelium eine „Krankheit". Er zeigte, dass seine Vertreter die Bibel nach dem Prinzip lesen: Was ich mir wünsche, suche ich mir als Beleg heraus. 3 Joh 2 etwa ist eine gewöhnliche Grußformel antiker Briefe, und die Lehre vom „positiven Bekenntnis" verwandelt den Glauben in ein Mittel, Gott zu manipulieren. Das Evangelium aber ruft zur Nachfolge eines gekreuzigten Herrn.`,
      sources: [{ kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'The Disease of the Health and Wealth Gospels', year: '1985', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als charismatischer Theologe und innerer Kritiker',
      text: `Brown steht selbst in der charismatischen Bewegung und verteidigt die Gaben des Geistes. Gerade deshalb ruft er seine eigene Bewegung zur Umkehr: Geldgier, Manipulation bei Spendenaufrufen und Luxus von Predigern seien ein Skandal, der dem Zeugnis Christi schade. Er unterscheidet zwischen der biblischen Wahrheit, dass Gott versorgt, und der Irrlehre, dass Frömmigkeit ein Weg zum Reichtum sei.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Playing with Holy Fire: A Wake-Up Call to the Pentecostal-Charismatic Church', year: '2018', status: 'paraphrase' }],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Antonius ist das lebendige Gegenbild zum Wohlstandsevangelium: Er hörte Mt 19,21 und verschenkte sein Erbe. Athanasius beschreibt, wie Antonius in der Wüste nicht arm an Gnade, sondern reich an Frieden, Weisheit und Heilungskraft wurde; Menschen kamen von überall, um Rat und Gebet zu suchen. Der wahre Reichtum, so lehrte er die Mönche, sind die Tugenden, die wir in die Ewigkeit mitnehmen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '2–3; 17', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'jesus-war-reich',
      objection: `„Jesus war gar nicht arm: Er hatte einen Schatzmeister (Joh 12,6) und ein nahtloses, teures Gewand (Joh 19,23). Armut ist ein religiöser Mythos."`,
      objectionBy: 'Wort-des-Glaubens-Prediger',
      answer: `Jesus selbst sagt: „Die Füchse haben Gruben, … aber des Menschen Sohn hat nicht, da er sein Haupt hinlege" (Mt 8,20). Er wurde in einem Stall geboren, seine Eltern brachten das Opfer der Armen (Lk 2,24; vgl. Lev 12,8), und er lebte von der Unterstützung einiger Frauen (Lk 8,3). Die gemeinsame Kasse diente auch den Armen (Joh 13,29). Paulus sagt ausdrücklich: „Er ward arm um euretwillen" (2 Kor 8,9).`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '8,20', quote: `Die Füchse haben Gruben, und die Vögel unter dem Himmel haben Nester; aber des Menschen Sohn hat nicht, da er sein Haupt hinlege.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Lukas', ref: '2,24', quote: `… und daß sie gäben das Opfer, wie es gesagt ist im Gesetz des HERRN: »ein Paar Turteltauben oder zwei junge Tauben«.`, translation: 'Luther 1912', status: 'verbatim', note: 'Nach Lev 12,8 das Opfer derer, die sich kein Lamm leisten konnten.' },
      ],
      questionsBack: [`Wenn Jesus reich war – wie verstehst du dann 2 Kor 8,9 „er ward arm um euretwillen"?`],
      followUps: [
        {
          id: 'arm-geworden-damit-wir-reich',
          objection: `„Eben! Er wurde arm, *damit wir reich würden* (2 Kor 8,9). Das ist ein Tausch: unsere Armut gegen seinen Reichtum."`,
          objectionBy: 'Kenneth Copeland',
          answer: `Lies den Zusammenhang: 2 Kor 8–9 handelt von einer Sammlung für die notleidenden Christen in Jerusalem. Paulus sagt: Wie Christus arm wurde, um euch reich zu machen, so gebt auch ihr von eurem Überfluss, damit andere keinen Mangel haben (8,13–15). Der Reichtum, den Christus schenkt, ist „aller Gnade reich" (9,8) – um großzügig zu sein. Ihr dreht den Vers um: aus einem Aufruf zum Geben macht ihr ein Versprechen zum Bekommen.`,
          followUps: [
            {
              id: 'zehnten-pruefet-mich',
              objection: `„Mal 3,10 sagt ausdrücklich: ‚Prüfet mich hierin, ob ich euch nicht des Himmels Fenster auftun werde.' Wer gibt, bekommt mehr zurück. Das ist ein geistliches Gesetz."`,
          objectionBy: 'Oral Roberts (Saat-Glaube)',
              answer: `Großzügigkeit wird gesegnet – das lehrt auch die koptische Kirche, die den Zehnten kennt. Aber Mal 3 ist kein Renditeversprechen: Der Zehnte versorgte die Leviten, Fremden, Witwen und Waisen (Dtn 14,28–29), und der Segen ist zuerst Regen und Ernte für das Land Israel. Wer gibt, um mehr zu bekommen, gibt nicht, sondern investiert. Petrus verflucht Simon, der meinte, Gottes Gabe mit Geld zu erlangen (Apg 8,20).`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,20', quote: `Petrus aber sprach zu ihm: Daß du verdammt werdest mit deinem Gelde, darum daß du meinst, Gottes Gabe werde durch Geld erlangt!`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Wenn ich gebe, um zurückzubekommen – liebe ich dann Gott oder das Geld?`],
            },
          ],
        },
      ],
    },
    {
      id: 'armut-ist-fluch',
      objection: `„Armut ist ein Fluch des Gesetzes (Dtn 28), und Christus hat uns vom Fluch des Gesetzes erlöst (Gal 3,13–14). Also ist ein armer Christ ein Christ, der seine Erlösung nicht in Anspruch nimmt."`,
      objectionBy: 'Kenneth Hagin / Kenneth Copeland',
      answer: `Gal 3,13–14 sagt, wozu Christus uns vom Fluch erlöste: „auf dass der Segen Abrahams unter die Heiden käme … und wir also den verheißenen Geist empfingen durch den Glauben". Der Segen ist die Rechtfertigung und der Heilige Geist, nicht Geld. Sonst wären die Apostel, die hungerten und nackt waren (1 Kor 4,11), Christen gewesen, die ihre Erlösung nicht verstanden hätten.`,
      sources: [
        { kind: 'bibel', work: 'Galater', ref: '3,13–14', quote: `Christus aber hat uns erlöst von dem Fluch des Gesetzes, da er ward ein Fluch für uns … auf daß der Segen Abrahams unter die Heiden käme in Christo Jesu und wir also den verheißenen Geist empfingen durch den Glauben.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '1. Korinther', ref: '4,11', quote: `Bis auf diese Stunde leiden wir Hunger und Durst und sind nackt und werden geschlagen und haben keine gewisse Stätte.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'maertyrer-hatten-zu-wenig-glauben',
          objection: `„Die Märtyrer waren ein Sonderfall der Verfolgungszeit. Heute, in Freiheit, will Gott, dass wir gesegnet leben."`,
          objectionBy: 'Wohlstandsprediger',
          answer: `Verfolgung ist kein Sonderfall, sondern Normalfall christlichen Lebens: „Alle, die gottselig leben wollen in Christo Jesu, müssen Verfolgung leiden" (2 Tim 3,12). Kopten leben bis heute unter Druck; 2015 starben 21 Männer an einem libyschen Strand mit dem Namen Jesu auf den Lippen; 2017 wurden Gläubige am Palmsonntag in Kirchen in Tanta und Alexandria getötet. Ein Evangelium, das nur in amerikanischen Vorstädten funktioniert und in Oberägypten versagt, ist nicht das Evangelium.`,
          sources: [
            { kind: 'bibel', work: '2. Timotheus', ref: '3,12', quote: `Und alle, die gottselig leben wollen in Christo Jesu, müssen Verfolgung leiden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [`Kannst du dein Evangelium einer koptischen Witwe in Minya predigen, deren Mann als Märtyrer starb?`],
        },
      ],
    },
    {
      id: 'positives-bekenntnis',
      objection: `„Worte haben Macht: ‚Tod und Leben stehen in der Zunge Gewalt' (Spr 18,21). Wenn du Armut und Krankheit bekennst, ziehst du sie an. Bekenne Reichtum und Gesundheit im Glauben!"`,
      objectionBy: 'Kenneth Hagin („positive confession")',
      answer: `Spr 18,21 lehrt, dass Worte Folgen haben – sie können verletzen oder heilen. Es lehrt nicht, dass wir durch Aussprechen Wirklichkeit erschaffen. Diese Idee stammt eher aus der „Neugeist"-Bewegung (New Thought) des 19. Jahrhunderts als aus der Bibel, wie der Pfingstler D. R. McConnell nachgewiesen hat. Gott ist kein Automat, den wir mit den richtigen Worten bedienen. Jesus lehrte beten: „Dein Wille geschehe" (Mt 6,10) – und betete selbst so in Gethsemane (Mt 26,39).`,
      sources: [
        { kind: 'fachliteratur', author: 'D. R. McConnell', work: 'A Different Gospel: A Historical and Biblical Analysis of the Modern Faith Movement', year: '1988', status: 'paraphrase', note: 'McConnell, ein Absolvent der Oral Roberts University, führt die Wort-des-Glaubens-Lehre über E. W. Kenyon auf Einflüsse der Neugeist-Bewegung zurück.' },
        { kind: 'bibel', work: 'Matthäus', ref: '26,39', quote: `Mein Vater, ist's möglich, so gehe dieser Kelch von mir; doch nicht wie ich will, sondern wie du willst!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'reiche-geben-mehr',
          objection: `„Aber reiche Christen können mehr für das Reich Gottes geben. Gott braucht finanzstarke Gläubige."`,
          objectionBy: 'Wohlstandsprediger',
          answer: `Jesus lobte die Witwe, die zwei Scherflein gab, mehr als alle Reichen (Mk 12,41–44). Gott braucht nicht unser Geld, sondern unser Herz. Und wenn das Ziel wirklich das Geben wäre, warum leben dann viele Wohlstandsprediger in Villen und fliegen Privatjets? Didache 11, eine der ältesten christlichen Schriften, sagt nüchtern: Wer im Geist sagt „Gib mir Geld", ist ein falscher Prophet.`,
          sources: [
            { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre)', ref: '11,12', year: 'um 100', status: 'paraphrase', quote: `Wer im Geist sagt: Gib mir Geld oder etwas anderes, auf den sollt ihr nicht hören; sagt er aber, man solle für andere Bedürftige geben, so soll ihn niemand richten.` },
          ],
          followUps: [
            {
              id: 'hagin-selbst-korrigierte',
              objection: `„Du karikierst uns. Auch Hagin selbst hat vor Übertreibungen gewarnt."`,
              objectionBy: 'Gemäßigter Wort-des-Glaubens-Anhänger',
              answer: `Das ist richtig und ehrt ihn: Kenneth Hagin hat gegen Ende seines Lebens in „The Midas Touch" (2000) vor Exzessen gewarnt, etwa davor, Spenden als Geldanlage zu verstehen. Das zeigt aber, dass die Bewegung selbst erkannt hat, wohin die Grundidee führt. Die Wurzel – dass Glaube einen Anspruch auf irdischen Wohlstand begründet – bleibt das Problem.`,
              sources: [
                { kind: 'gegner', author: 'Kenneth E. Hagin', work: 'The Midas Touch: A Balanced Approach to Biblical Prosperity', year: '2000', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '3-joh-2-wohlergehen',
      objection: `„3 Joh 2: ‚Mein Lieber, ich wünsche in allen Stücken, dass dir's wohlgehe und du gesund seist, wie es denn deiner Seele wohl geht.' Gott will, dass es dir finanziell und körperlich so gut geht wie deiner Seele."`,
      objectionBy: 'Oral Roberts / Kenneth Copeland',
      answer: `Das ist die übliche Grußformel antiker Briefe – so wie wir heute schreiben: „Ich hoffe, es geht dir gut." Johannes äußert einen Wunsch für einen Freund, keine Verheißung für alle Christen. Der Brief handelt davon, dass Gaius wandernde Missionare gastfreundlich aufnimmt – er lobt seine Freigebigkeit, nicht seinen Wohlstand.`,
      detail: `Antike Papyrusbriefe beginnen regelmäßig mit dem Wunsch, der Empfänger möge gesund sein und es möge ihm wohlergehen. Aus einer Höflichkeitsformel eine Lehre über Gottes Willen für jeden Christen zu machen, verkennt die Gattung. Oral Roberts hat nach eigener Aussage seine Theologie des Wohlstands wesentlich auf diesen Vers gegründet – das zeigt, wie schmal die Textbasis ist.`,
      voices: [
        {
          person: 'gordon-fee',
          role: 'als pfingstlicher Neutestamentler',
          text: `Fee, selbst Pfingstler und Theologe der Assemblies of God, hat das Wohlstandsevangelium als „Krankheit" bezeichnet. Er zeigt, dass 3 Joh 2 eine gewöhnliche Grußformel ist und dass das Neue Testament Besitz durchweg als Gefahr und als Anvertrautes für die Armen behandelt. Seine Kritik wiegt schwer, weil sie aus der eigenen Bewegung kommt.`,
          sources: [{ kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'The Disease of the Health and Wealth Gospels', year: '1985', status: 'paraphrase' }],
        },
      ],
      followUps: [
        {
          id: 'hundertfach-mk-10-30',
          objection: `„Mk 10,29–30: Wer Haus oder Äcker verlässt, ‚der nicht hundertfältig empfange jetzt in dieser Zeit Häuser und Äcker'. Gib zehn Euro, und Gott gibt dir tausend zurück – das ist sein Versprechen."`,
          objectionBy: 'Gloria Copeland („God’s Will Is Prosperity")',
          answer: `Lies den Vers zu Ende: „… Häuser und Brüder und Schwestern und Mütter und Kinder und Äcker **mit Verfolgungen**." Bekommt man auch hundert Mütter zurück? Jesus spricht von der neuen Familie der Kirche, in der Häuser geöffnet und Güter geteilt werden (Apg 2,44–45; 4,32) – und er verheißt Verfolgung gleich mit. Wer daraus eine Investitionsrendite macht, streicht genau das Wort, das nicht ins System passt.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '10,29–30', quote: `… der nicht hundertfältig empfange jetzt in dieser Zeit Häuser und Brüder und Schwestern und Mütter und Kinder und Äcker mit Verfolgungen, und in der zukünftigen Welt das ewige Leben.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'gegner', author: 'Gloria Copeland', work: 'God’s Will Is Prosperity', year: '1978', status: 'paraphrase', note: 'Copeland rechnet hier Mk 10,30 als hundertfache finanzielle Rendite auf Spenden vor.' },
          ],
          followUps: [
            {
              id: 'segen-abrahams-reichtum',
              objection: `„Abraham war ‚sehr reich an Vieh, Silber und Gold' (Gen 13,2), und wir sind Abrahams Same (Gal 3,29). Also gehört materieller Reichtum zum Segen Abrahams."`,
              objectionBy: 'Creflo Dollar',
              answer: `Paulus definiert selbst, was der Segen Abrahams für uns ist: „dass wir den verheißenen Geist empfingen durch den Glauben" (Gal 3,14). Und der Hebräerbrief sagt über Abraham: Er wohnte in Zelten als Fremdling, „denn er wartete auf eine Stadt, die einen Grund hat" – und starb, ohne die Verheißungen empfangen zu haben (Hebr 11,9–13). Abrahams Erbe ist das himmlische Vaterland (11,16), nicht ein Bankkonto.`,
              sources: [
                { kind: 'bibel', work: 'Hebräer', ref: '11,13.16', quote: `Diese alle sind gestorben im Glauben und haben die Verheißung nicht empfangen … Nun aber begehren sie eines besseren, nämlich eines himmlischen.`, translation: 'Luther 1912', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'glaube-als-kraft',
                  objection: `„Glaube ist eine Kraft. Gott hat die Welt durch Glaubensworte geschaffen, und wir sind nach seinem Bild – ‚ihr seid Götter' (Ps 82,6; Joh 10,34). Wer im Glauben spricht, setzt dieselbe Kraft frei."`,
                  objectionBy: 'Kenneth Copeland',
                  answer: `Biblischer Glaube ist Vertrauen auf eine Person, keine Kraft, mit der man Gott oder die Welt steuert. Ps 82 ist eine Gerichtsrede gegen ungerechte Richter – der nächste Vers lautet: „Ihr werdet sterben wie Menschen" (82,7). Die Kirche kennt die Vergöttlichung (*theosis*): „Er wurde Mensch, damit wir vergöttlicht würden" (Athanasius). Aber sie geschieht durch Gnade, Demut und Kreuz – als Teilhabe an Gottes Leben, nicht als Verfügung über seine Macht.`,
                  detail: `Hier liegt der tiefste Unterschied: Bei den Vätern führt der Weg der Vergöttlichung über Selbstentäußerung, Fasten und Liebe zu den Armen – Antonius verschenkte sein Erbe, bevor er in die Wüste ging. Im Wort-des-Glaubens-Denken wird dieselbe Sprache zur Technik der Selbstverwirklichung. Das ist keine kleine Akzentverschiebung, sondern eine Umkehrung der Richtung.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'ca. 318', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, status: 'verbatim' },
                    { kind: 'bibel', work: 'Psalm', ref: '82,6–7', quote: `Ich habe wohl gesagt: Ihr seid Götter und allzumal Kinder des Höchsten; aber ihr werdet sterben wie Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn Glaube eine Kraft ist, die ich einsetze – wer ist dann der Herr: Gott oder ich?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eure-kirche-ist-reich',
      objection: `„Ihr kritisiert Wohlstand – aber eure Kirchen haben goldene Kelche, prächtige Gewänder und Paläste für die Bischöfe. Das ist doch Heuchelei."`,
      objectionBy: 'Wohlstandsprediger',
      answer: `Gold im Gottesdienst ist Gabe an Gott, nicht Bereicherung eines Predigers – wie bei der Stiftshütte, für die das Volk sein Gold gab (Ex 25,1–8). Die Frau, die kostbares Salböl über Jesus goss, wurde von ihm gelobt (Mk 14,6–9). Die Bischöfe der koptischen Kirche werden aus den Mönchen gewählt, die Armut gelobt haben. Wo kirchliche Amtsträger dennoch Luxus suchen, ist das ein Missstand – den die Kirche selbst verurteilt.`,
      detail: `Der Unterschied liegt in der Richtung: Schönheit, die im Gottesdienst Gott dargebracht wird und allen – auch den Ärmsten – gehört, ist etwas anderes als Reichtum, den ein Prediger als Beweis seiner Gesalbtheit für sich beansprucht. Gib ehrlich zu, dass es in jeder Kirche Versuchung zu Prunk und Missbrauch gibt; das stärkt deine Glaubwürdigkeit.`,
      followUps: [
        {
          id: 'privatjet-fuer-das-reich',
          objection: `„Ein Prediger braucht heute einen Privatjet, um das Evangelium effizient zu verbreiten – was zur Zeit Jesu der Esel war, ist heute das Flugzeug."`,
          objectionBy: 'Kenneth Copeland (sinngemäß, Interview 2015)',
          answer: `Es geht nicht um das Verkehrsmittel, sondern um die Haltung, vor der Paulus warnt: Menschen, „die da meinen, Gottseligkeit sei ein Gewerbe" (1 Tim 6,5). Paulus arbeitete mit eigenen Händen, um niemandem zur Last zu fallen (Apg 20,33–35; 2 Thess 3,8). Und die älteste Kirchenordnung sagt: Ein Prophet, der Geld für sich verlangt, ist ein falscher Prophet (Didache 11). Jesus ritt auf einem geliehenen Esel – als Zeichen der Demut (Sach 9,9), nicht der Effizienz.`,
          sources: [
            { kind: 'bibel', work: 'Apostelgeschichte', ref: '20,33–34', quote: `Ich habe euer keines Silber noch Gold noch Kleid begehrt. Denn ihr wisset selbst, dass mir diese Hände zu meiner Notdurft und derer, die mit mir gewesen sind, gedient haben.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre)', ref: '11,12', year: 'um 100', status: 'paraphrase', quote: `Wer im Geist sagt: Gib mir Geld oder sonst etwas, auf den sollt ihr nicht hören.` },
          ],
          followUps: [
            {
              id: 'zeugnisse-beweisen-es',
              objection: `„Tausende bezeugen: Sie haben gegeben und sind reich geworden. Diese Zeugnisse kannst du nicht wegdiskutieren."`,
              objectionBy: 'Wohlstandsprediger',
              answer: `Man hört die Zeugnisse derer, bei denen es „funktioniert" hat – nicht die der vielen, die ihr Letztes gegeben haben und arm geblieben oder ärmer geworden sind. Das ist ein klassischer Auswahlfehler. Die Historikerin Kate Bowler, die die amerikanische Wohlstandsbewegung erforscht hat, beschreibt, wie schwer diese Theologie für Menschen wird, die trotz Glauben krank oder arm bleiben: Sie müssen sich selbst die Schuld geben.`,
              sources: [
                { kind: 'fachliteratur', author: 'Kate Bowler', work: 'Blessed: A History of the American Prosperity Gospel', year: '2013', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Kate Bowler', work: 'Everything Happens for a Reason: And Other Lies I’ve Loved', year: '2018', status: 'paraphrase', note: 'Persönlicher Bericht der Forscherin über ihre Krebserkrankung und die Grenzen der Wohlstandstheologie.' },
              ],
              followUps: [
                {
                  id: 'verherrlicht-ihr-armut',
                  objection: `„Willst du etwa die Armut verherrlichen? Armut zerstört Leben und Familien. Gott wird durch Elend nicht geehrt."`,
                  objectionBy: 'Joel Osteen (sinngemäß)',
                  answer: `Nein. Die Kirche bekämpft die Armut seit den Aposteln: Diakonie, Witwenversorgung, Basilius' Krankenhäuser, die Sozialarbeit der koptischen Kirche heute. Aber freiwillige Armut um Christi willen ist etwas anderes als aufgezwungenes Elend. Chrysostomus sagt: Reichtum ist uns anvertraut, damit wir ihn mit den Armen teilen; wer nicht teilt, beraubt die Armen. Das Ziel ist nicht der arme Christ, sondern der freigebige.`,
                  voices: [
                    {
                      person: 'chrysostomus',
                      role: 'als Prediger der sozialen Verantwortung',
                      text: `In seinen Predigten über den reichen Mann und Lazarus erklärt Chrysostomus, dass die Reichen nicht Eigentümer, sondern Verwalter ihrer Güter sind. Den Armen nichts von seinem Besitz abzugeben, ist für ihn Diebstahl an ihnen – denn was wir besitzen, gehört eigentlich ihnen. Reichtum ist nicht an sich böse, aber er wird zur Anklage, wenn er nicht geteilt wird.`,
                      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Predigten über Lazarus (De Lazaro)', ref: 'Homilie 2', year: 'um 388', status: 'paraphrase' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hatten Paulus, Timotheus und Trophimus zu wenig Glauben?`,
    `Wie passt 1 Tim 6,5–10 zu deiner Lehre?`,
    `Was bedeutet „mitten unter Verfolgungen" in Mk 10,30?`,
    `Würdest du einem armen, kranken, aber treuen Christen sagen, sein Glaube sei schwach?`,
    `Funktioniert dein Evangelium auch für die 21 Märtyrer von Libyen?`,
  ],
  avoid: [
    `Nicht alle Pfingstler oder Charismatiker mit dem Wohlstandsevangelium gleichsetzen – viele lehnen es selbst ab.`,
    `Nicht so tun, als sei Armut an sich heilig und Reichtum an sich Sünde. Abraham und Hiob waren reich und gerecht.`,
    `Nicht mit Spott über einzelne Fernsehprediger argumentieren. Bleib bei der Schrift und dem Zeugnis der Märtyrer.`,
  ],
  concessions: [
    `Gott segnet tatsächlich Arbeit, Großzügigkeit und ein geordnetes Leben, und er sorgt für die Seinen (Mt 6,33; Phil 4,19).`,
    `Das Wohlstandsevangelium spricht oft Menschen in bitterer Armut an, die Hoffnung suchen. Ihre Not ist echt und verdient unsere Antwort in Wort und Tat.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'The Disease of the Health and Wealth Gospels', year: '1985', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'D. R. McConnell', work: 'A Different Gospel', year: '1988', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kate Bowler', work: 'Blessed: A History of the American Prosperity Gospel', year: '2013', status: 'paraphrase', note: 'Historische Darstellung einer Duke-Historikerin; persönlich bewegend ergänzt durch ihr Buch über ihre Krebserkrankung (2018).' },
    { kind: 'fachliteratur', author: 'Costi W. Hinn', work: 'God, Greed, and the (Prosperity) Gospel', year: '2019', status: 'paraphrase', note: 'Der Neffe Benny Hinns berichtet von innen.' },
    { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Welcher Reiche wird gerettet?', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Wohlstandsevangelium', 'Word of Faith', 'Reichtum', 'Leid', 'Märtyrer', 'Pfingstbewegung'],
  related: ['pfingstbewegung/heilung-garantiert', 'pfingstbewegung/neue-apostel-propheten', 'theodizee', 'fasten-liturgie/fasten-gesetzlichkeit'],
};

export default claim;
