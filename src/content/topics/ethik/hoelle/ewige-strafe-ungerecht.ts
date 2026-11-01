import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ewige-strafe-ungerecht',
  title: `„Ewige Strafe für endliche Sünden ist ungerecht."`,
  proponents: [
    {
      name: 'Bertrand Russell',
      role: 'Philosoph, Literaturnobelpreis 1950 (1872–1970)',
      work: 'Why I Am Not a Christian (Vortrag 1927)',
    },
    {
      name: 'Bart D. Ehrman',
      role: 'Neutestamentler, University of North Carolina',
      work: 'Heaven and Hell: A History of the Afterlife (2020)',
    },
    {
      name: 'David Bentley Hart',
      role: 'Orthodoxer Religionsphilosoph – vertritt die Allversöhnung',
      work: 'That All Shall Be Saved: Heaven, Hell, and Universal Salvation (2019)',
    },
    {
      name: 'Edward W. Fudge',
      role: 'Evangelikaler Theologe (1944–2017) – vertrat den Annihilationismus',
      work: 'The Fire That Consumes (1982)',
    },
  ],
  steelman: `Gerechtigkeit verlangt Verhältnismäßigkeit. Ein Mensch lebt siebzig oder achtzig Jahre; selbst seine schlimmsten Taten sind endlich. Eine Strafe, die ewig dauert, ist aber unendlich – jede endliche Schuld wäre nach einer Million Jahren Qual mehr als gesühnt, und doch hätte die Strafe gerade erst begonnen. Kein irdischer Richter, der einen Menschen für einen Diebstahl oder auch für einen Mord endlos foltern ließe, würde als gerecht gelten. Eine Strafe ohne Ende kann auch nicht bessern – sie ist reine Vergeltung ohne Zweck. Bertrand Russell sah darin einen schweren Mangel im Charakter Jesu: Kein wahrhaft menschlicher Mensch könne an ewige Strafe glauben. Selbst innerhalb des Christentums gibt es gewichtige Stimmen dagegen: Origenes, Gregor von Nyssa und Isaak der Syrer hofften auf die Wiederherstellung aller; David Bentley Hart argumentiert, dass das griechische *aiōnios* „zum kommenden Zeitalter gehörig" heißt, nicht „endlos", und dass *kolasis* eine bessernde Züchtigung bezeichnet. Andere, wie Edward Fudge und John Stott, meinten, die Bibel lehre die endgültige Vernichtung der Verlorenen, nicht ihre ewige Qual. Ein Gott, der endlose Folter verhängt, wäre schlimmer als jeder Tyrann der Geschichte.`,
  biblical: {
    summary: `Das Neue Testament spricht ernst und wiederholt von einem endgültigen Gericht – am häufigsten aus dem Mund Jesu selbst. Am deutlichsten ist Mt 25,46: „Und sie werden in die ewige Pein gehen, aber die Gerechten in das ewige Leben." Hier steht dasselbe griechische Wort *aiōnios* für das Leben und für die Strafe. Paulus spricht vom „ewigen Verderben, von dem Angesicht des HERRN" (2 Thess 1,9), Jesus vom Ort, „da ihr Wurm nicht stirbt und ihr Feuer nicht verlöscht" (Mk 9,48), die Offenbarung von Qual „von Ewigkeit zu Ewigkeit" (Offb 14,11; 20,10). Zugleich zeigt die Schrift, dass das Gericht kein willkürlicher Racheakt ist: Es gibt Abstufungen nach Wissen und Verantwortung (Lk 12,47–48; Mt 11,22–24), Gott hat keinen Gefallen am Tod des Gottlosen (Hes 33,11), und das Wesen des Gerichts ist, dass Menschen „die Finsternis mehr liebten als das Licht" (Joh 3,19). Die Bilder – Feuer und Finsternis zugleich – beschreiben eine Wirklichkeit, deren Kern die Trennung „vom Angesicht des Herrn" ist.`,
    detail: `- **Mt 25,46:** *kolasin aiōnion* – *zōēn aiōnion*. Augustinus argumentiert, dass man das Wort nicht im selben Satz zweimal verschieden verstehen kann: Entweder ist beides befristet oder beides ohne Ende (De civitate Dei XXI,23).
- **2 Thess 1,9:** *olethron aiōnion apo prosōpou tou kyriou* – „ewiges Verderben, fern vom Angesicht des Herrn". Der Kern der Strafe ist die Trennung von Gott, der Quelle des Lebens.
- **Feuer und Finsternis:** Jesus spricht von „Feuer" (Mt 25,41) und von „äußerster Finsternis" (Mt 8,12). Beides wörtlich zugleich zu nehmen, ist schwierig; die Bilder weisen auf eine Wirklichkeit, die schlimmer ist als jedes Bild, nicht harmloser.
- **Abstufungen:** „Der Knecht aber, der seines Herrn Willen weiß … wird viel Streiche leiden müssen. Der es aber nicht weiß … wird wenig Streiche leiden" (Lk 12,47–48). Nicht alle Verlorenen erleiden dasselbe.
- **Kein Gefallen am Tod:** Hes 33,11; 1 Tim 2,4; 2 Petr 3,9 – Gott will das Heil aller. Die Hölle ist nicht sein Wunsch.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '25,46', quote: `Und sie werden in die ewige Pein gehen, aber die Gerechten in das ewige Leben.`, translation: 'Luther 1912', status: 'verbatim', original: `καὶ ἀπελεύσονται οὗτοι εἰς κόλασιν αἰώνιον, οἱ δὲ δίκαιοι εἰς ζωὴν αἰώνιον.` },
      { kind: 'bibel', work: '2. Thessalonicher', ref: '1,9', quote: `… welche werden Pein leiden, das ewige Verderben, von dem Angesichte des HERRN und von seiner herrlichen Macht.`, translation: 'Luther 1912', status: 'verbatim', original: `οἵτινες δίκην τίσουσιν ὄλεθρον αἰώνιον ἀπὸ προσώπου τοῦ κυρίου …` },
      { kind: 'bibel', work: 'Markus', ref: '9,48', quote: `… da ihr Wurm nicht stirbt und ihr Feuer nicht verlöscht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '20,10', quote: `Und der Teufel, der sie verführte, ward geworfen in den feurigen Pfuhl und Schwefel, da auch das Tier und der falsche Prophet war; und sie werden gequält werden Tag und Nacht von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,47–48', quote: `Der Knecht aber, der seines Herrn Willen weiß, und hat sich nicht bereitet, auch nicht nach seinem Willen getan, der wird viel Streiche leiden müssen. Der es aber nicht weiß, hat aber getan, was der Streiche wert ist, wird wenig Streiche leiden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '3,19', quote: `Das ist aber das Gericht, daß das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr als das Licht; denn ihre Werke waren böse.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt die Wiederkunft Christi, die allgemeine Auferstehung, das Gericht, das ewige Leben und die ewige Strafe. Sie lehrt **keine Allversöhnung** als Dogma und **kein Fegefeuer**, betet aber für die Entschlafenen. Die Väter haben die ewige Strafe nicht als willkürliche Folter verstanden, sondern als Folge einer endgültigen Abwendung von Gott. In der östlichen Tradition ist der Gedanke verbreitet, dass Gottes Gegenwart selbst von den Liebenden als Licht und Freude, von denen, die ihn hassen, als brennendes Feuer erfahren wird: Isaak der Syrer sagt, die in der Gehenna Bestraften würden von der Geißel der Liebe gegeißelt. Die Lehre des Origenes von der Wiederherstellung aller (*Apokatastasis*) hat die Kirche nicht angenommen: Schon Papst **Theophilus von Alexandrien** verurteilte um 400 auf einer Synode die origenistischen Lehren; später verwarf die byzantinische Reichskirche (Edikt Justinians 543, Konzil von Konstantinopel 553, das die koptische Kirche nicht als ökumenisch zählt) ausdrücklich die Lehre, die Strafe der Gottlosen sei befristet.`,
    detail: `- **Basilius der Große** antwortet in seinen Kurzen Regeln (Nr. 267) auf die Frage, ob die Strafe ein Ende habe, mit Mt 25,46: Wenn das Leben ewig ist, ist es auch die Strafe.
- **Augustinus** (De civitate Dei XXI,23): „Wenn beides ewig ist, dann ist gewiss entweder beides mit einem Ende langwährend oder beides ohne Ende immerwährend."
- **Isaak der Syrer:** Die Liebe Gottes wirkt auf zweierlei Weise: Sie quält die Sünder und erfreut die, die nach ihr gelebt haben. Hinweis: Im später entdeckten „Zweiten Teil" seiner Schriften hofft Isaak auf ein Ende der Gehenna; diese Hoffnung hat die Kirche nicht übernommen.
- **Origenes und Gregor von Nyssa** haben die Hoffnung auf die Wiederherstellung aller vertreten – Origenes als Spekulation, Gregor vorsichtiger. Das ist ehrlich anzuerkennen; Lehre der Kirche wurde es nicht.
- **Die Agpeya** ruft im Mitternachtsgebet mit dem Gleichnis von den zehn Jungfrauen (Mt 25,1–13) zur Wachsamkeit auf: Die Tür kann sich schließen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XXI,23', year: '413–426', quote: `Wenn beides ewig ist, dann ist gewiss entweder beides mit einem Ende langwährend oder beides ohne Ende immerwährend.`, original: `… si utrumque aeternum, profecto aut utrumque cum fine diuturnum aut utrumque sine fine perpetuum debet intellegi.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Augustinus kommentiert Mt 25,46 gegen die Origenisten seiner Zeit.' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Kurze Regeln (Regulae brevius tractatae)', ref: '267', year: 'um 370', quote: `Wer sagt, die Strafe habe ein Ende, widerspricht dem Herrn, der sagt: „Diese werden in die ewige Strafe gehen, die Gerechten aber in das ewige Leben."`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien (Erster Teil)', ref: 'Homilie 28 (Zählung der Übersetzung des Holy Transfiguration Monastery, 1984); in anderen Ausgaben abweichend nummeriert', year: '7. Jh.', quote: `Ich sage, dass die in der Gehenna Bestraften von der Geißel der Liebe gegeißelt werden … Die Kraft der Liebe wirkt auf zweierlei Weise: Sie quält die Sünder und erfreut die, die ihr gemäß gelebt haben.`, original: `… those who are punished in Gehenna are scourged by the scourge of love.`, status: 'paraphrase', note: 'Stelle geprüft: Ascetical Homilies I/28 (HTM 1984); die Wendung „scourged by the scourge of love“ ist dort belegt, der deutsche Text ist gekürzt. Isaak gehörte zur Kirche des Ostens.' },
      { kind: 'konzil', work: 'Edikt Kaiser Justinians gegen Origenes, Anathematismus 9', year: '543', quote: `Wer sagt oder meint, die Strafe der Dämonen und gottlosen Menschen sei zeitlich und werde einmal ein Ende haben, … der sei ausgeschlossen.`, status: 'paraphrase', note: 'Byzantinisches Dokument; die koptische Kirche erkennt nur die ersten drei ökumenischen Konzilien an, teilt aber die Ablehnung der Apokatastasis.' },
    ],
  },
  quickAnswer: `Die Hölle ist keine Folterkammer, in der Gott für jede einzelne Sünde eine Strafe abzählt. Sie ist die Folge einer frei gewählten, andauernden Abwendung von Gott – der Quelle allen Lebens und aller Freude. Die Dauer richtet sich nicht nach der Zeit, die eine Tat brauchte – auch ein Mord dauert nur Sekunden –, sondern nach dem Zustand eines Willens, der sich nicht ändern will. C. S. Lewis sagt: Die Türen der Hölle sind von innen verschlossen. Und die orthodoxe Tradition sagt: Es ist dieselbe Liebe Gottes, die der eine als Licht und der andere als Feuer erfährt.`,
  keyPoints: [
    `**Die Dauer einer Strafe richtet sich nicht nach der Dauer der Tat:** Ein Mord dauert Sekunden, die Strafe Jahrzehnte. Entscheidend ist die Schwere und der Zustand des Täters.`,
    `**Hölle ist andauernde Abwendung, nicht eine Rechnung für vergangene Taten:** Wer sich endgültig gegen Gott verschließt, bleibt in diesem Zustand (Lewis: „von innen verschlossen").`,
    `**Der Kern ist Trennung von Gott:** „ewiges Verderben, vom Angesicht des HERRN" (2 Thess 1,9). Fern von der Quelle des Lebens zu sein, ist an sich Verlust und Qual.`,
    `**Dieselbe Liebe – Licht oder Feuer:** Die östliche Tradition (Isaak der Syrer, Basilius) versteht das Feuer als Gottes Gegenwart, die von den Hassenden als Qual erfahren wird.`,
    `**Es gibt Abstufungen:** Nicht alle Verlorenen erleiden dasselbe (Lk 12,47–48; Mt 11,22–24).`,
    `**„Ewig" bedeutet ewig:** In Mt 25,46 steht dasselbe Wort für das Leben und die Strafe (Augustinus).`,
    `**Allversöhnung und Annihilation sind ernst zu nehmen, aber nicht Lehre der Kirche:** Origenes' Apokatastasis wurde schon in Alexandrien unter Papst Theophilus verworfen.`,
  ],
  argument: {
    name: 'Die Hölle als respektierte Freiheit',
    summary: 'Warum ewige Strafe nicht willkürliche Grausamkeit, sondern die Folge andauernder, frei gewählter Abwendung von Gott ist.',
    premises: [
      {
        text: `P1: Gott ist die Quelle allen Lebens, aller Freude und aller Liebe; die Gemeinschaft mit ihm ist die höchste Seligkeit des Menschen.`,
        support: `Das ist christliche Grundüberzeugung (Joh 17,3; Ps 16,11) und wird auch vom Gegner im Rahmen der internen Kritik vorausgesetzt.`,
      },
      {
        text: `P2: Liebe kann nicht erzwungen werden; Gott achtet die freie Entscheidung geschaffener Personen – auch ihre Ablehnung.`,
        support: `Eine erzwungene Liebe ist keine Liebe. Jesus klagt über Jerusalem: „wie oft habe ich … versammeln wollen … und ihr habt nicht gewollt!" (Mt 23,37). Gott „gibt dahin" an das Gewählte (Röm 1,24).`,
        sources: [
          { kind: 'bibel', work: 'Römer', ref: '1,24', quote: `Darum hat sie auch Gott dahingegeben in ihrer Herzen Gelüste …`, translation: 'Luther 1912', status: 'verbatim' },
        ],
      },
      {
        text: `P3: Es ist möglich, dass Personen sich endgültig gegen Gott verschließen und diese Haltung andauert – nicht weil Gott ihnen die Umkehr verweigert, sondern weil sie sie nicht wollen.`,
        support: `Die Erfahrung zeigt, dass Charakter sich verfestigt: Wer sich wiederholt gegen das Gute entscheidet, wird unfähiger, es zu wollen. Der reiche Mann in Lk 16 behandelt Lazarus auch im Hades noch als Diener („sende Lazarus"). C. S. Lewis: Die Verlorenen sind „Rebellen bis zum Ende".`,
        sources: [
          { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 8', year: '1940', quote: `Ich glaube gern, dass die Verdammten in gewissem Sinn erfolgreich sind, Rebellen bis zum Ende; dass die Türen der Hölle von innen verschlossen sind.`, original: `I willingly believe that the damned are, in one sense, successful, rebels to the end; that the doors of hell are locked on the inside.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: `P4: Getrenntsein von der Quelle allen Lebens und aller Freude ist seinem Wesen nach Verlust und Qual – unabhängig von zusätzlich „verhängten" Strafen.`,
        support: `Wenn Gott das höchste Gut ist, ist sein Verlust das größte Übel. Die Bilder von Feuer und Finsternis beschreiben diese Wirklichkeit. Dostojewskis Sossima: Die Hölle ist „das Leiden, nicht mehr lieben zu können".`,
      },
    ],
    conclusion: `Ewige Strafe ist nicht eine unverhältnismäßige Folter für endliche Taten, sondern die Folge einer andauernden, frei gewählten Abwendung von Gott, die Gott in seiner Liebe respektiert. Sie widerspricht weder seiner Gerechtigkeit noch seiner Liebe – und sie ist keine Lehre, mit der man anderen droht, sondern eine Warnung, die jeder zuerst auf sich selbst bezieht.`,
  },
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Apologet, der die Lehre am liebsten abgeschafft hätte',
      text: `C. S. Lewis schreibt in *The Problem of Pain* (Kap. 8) offen: Es gebe keine Lehre, die er lieber aus dem Christentum entfernen würde als diese, wenn es in seiner Macht stünde. Aber sie habe die volle Unterstützung der Schrift und besonders der Worte Jesu. Er deutet die Hölle als respektierte Freiheit: Die Verdammten sind in gewissem Sinn erfolgreich, Rebellen bis zum Ende; die Türen der Hölle sind von innen verschlossen. In *The Great Divorce* (1945) fasst er es zusammen: Es gibt am Ende nur zwei Arten von Menschen – die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott am Ende sagt: „Dein Wille geschehe." Alle, die in der Hölle sind, haben sie gewählt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 8', year: '1940', quote: `Es gibt keine Lehre, die ich lieber aus dem Christentum entfernen würde als diese, wenn es in meiner Macht stünde.`, original: `There is no doctrine which I would more willingly remove from Christianity than this, if it lay in my power.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Great Divorce (Die große Scheidung)', ref: 'Kap. 9', year: '1945', quote: `Es gibt am Ende nur zwei Arten von Menschen: die, die zu Gott sagen „Dein Wille geschehe", und die, zu denen Gott am Ende sagt: „Dein Wille geschehe." Alle, die in der Hölle sind, wählen sie.`, original: `There are only two kinds of people in the end: those who say to God, 'Thy will be done,' and those to whom God says, in the end, 'Thy will be done.' All that are in Hell, choose it.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'isaak-syrer',
      role: 'als Mystiker der Liebe Gottes (mit Vorbehalt)',
      text: `Isaak der Syrer hat das östliche Verständnis der Hölle tief geprägt. Er weist die Vorstellung zurück, die Verdammten seien von der Liebe Gottes ausgeschlossen. Im Gegenteil: Die Liebe Gottes ist allen gegenwärtig, aber sie wirkt auf zweierlei Weise – für die, die nach ihr gelebt haben, als Freude, für die Sünder als Qual. Es gebe keinen härteren Schmerz als den der Reue über die verschmähte Liebe. Die Hölle ist also nicht Gottes Abwesenheit, sondern das Leiden an seiner Gegenwart, die man nicht lieben will. Hinweis: Isaak gehörte zur Kirche des Ostens, und in seinem „Zweiten Teil" äußert er die Hoffnung auf ein Ende der Gehenna – eine Hoffnung, die die Kirche nicht zur Lehre gemacht hat.`,
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater, der Mt 25,46 auslegte',
      text: `Basilius der Große kannte die Meinung, die Strafen der Hölle würden einmal enden, und wies sie in seinen *Kurzen Regeln* mit Mt 25,46 zurück: Wenn der Herr dasselbe Wort für die Strafe und für das Leben gebraucht, darf man das eine nicht befristen, ohne auch das andere zu befristen. In seiner Homilie zum 28. (29.) Psalm deutet Basilius das Feuer, das Gott „zerteilt": Es gibt ein Feuer, das erleuchtet, und eines, das brennt – dasselbe göttliche Feuer wird den Heiligen zum Licht und den Gottlosen zur Qual. Das ist eine Wurzel der orthodoxen Deutung der Hölle als erfahrene Gegenwart Gottes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie zu Psalm 28 (29)', ref: '6', year: '4. Jh.', quote: `Die Stimme des Herrn zerteilt die Feuerflamme: Das Feuer, das dem Teufel bereitet ist, wird geteilt – seine brennende Kraft für die Strafe, sein Licht für die Freude der Heiligen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger gegen die Origenisten',
      text: `Augustinus setzt sich im 21. Buch von *De civitate Dei* ausführlich mit den „Barmherzigen" seiner Zeit auseinander, die die ewige Strafe ablehnten – manche für alle Menschen, manche für Getaufte. Sein exegetisches Hauptargument ist Mt 25,46: Dasselbe Wort, im selben Satz, über Strafe und Leben. Wer die Strafe befristet, muss auch das ewige Leben befristen. Augustinus betont zugleich, dass die Strafen nach der Schwere der Schuld verschieden sind. Hinweis: In der Eschatologie folgt die koptische Kirche hier der gemeinsamen Lehre der Väter; Augustinus' westliche Sonderakzente (z. B. zur Erbschuld) sind davon zu unterscheiden.`,
    },
    {
      person: 'dostojewski',
      role: 'als Schriftsteller, der die Hölle als Unfähigkeit zu lieben beschrieb',
      text: `Dostojewski lässt den Starez Sossima in *Die Brüder Karamasow* (Buch 6) über die Hölle nachdenken: Was ist die Hölle? Das Leiden, nicht mehr lieben zu können. Der Mensch wurde auf Erden mit der Fähigkeit beschenkt, tätig zu lieben; wer diese Gabe verschmäht hat, erkennt im Jenseits, was er verloren hat, und leidet daran, dass er nicht mehr lieben kann. Sossima weist die Vorstellung eines bloß äußerlichen, materiellen Feuers nicht ab, sagt aber, die eigentliche Qual sei innerlich. Diese Deutung steht der östlichen Tradition nahe und macht die Hölle verständlich – nicht als Rache, sondern als selbstgewählter Verlust.`,
      sources: [
        { kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Brüder Karamasow', ref: 'Buch 6, Kap. 3 (i) „Über Hölle und Höllenfeuer"', year: '1880', quote: `Väter und Lehrer, ich denke darüber nach: „Was ist die Hölle?" Ich sage: Das Leiden darüber, nicht mehr lieben zu können.`, original: `Fathers and teachers, I ponder 'What is hell?' I maintain that it is the suffering of being unable to love.`, translation: 'eigene Übersetzung nach Garnett', status: 'verbatim' },
      ],
    },
    {
      person: 'theophilus-alexandrien',
      role: 'als Papst von Alexandrien, der den Origenismus verwarf (mit Vorbehalt)',
      text: `Theophilus, der 23. Papst von Alexandrien und Onkel des hl. Kyrill, war zunächst den Origenisten unter den ägyptischen Mönchen zugeneigt, wandte sich dann aber gegen sie und ließ um 400 auf einer Synode in Alexandrien die Lehren des Origenes verurteilen. Seine Synodal- und Festbriefe, die zum Teil in lateinischer Übersetzung des Hieronymus erhalten sind, kritisieren origenistische Spekulationen. Für die koptische Kirche ist damit festzuhalten: Die Ablehnung der Apokatastasis ist nicht erst eine byzantinische Entscheidung von 543/553, sondern hat eine alexandrinische Vorgeschichte. Ehrlicher Vorbehalt: Theophilus' Vorgehen war auch von Kirchenpolitik geprägt (Konflikt mit den „Langen Brüdern" und mit Johannes Chrysostomus).`,
      sources: [
        { kind: 'kirchenvater', author: 'Theophilus von Alexandrien (lat. bei Hieronymus)', work: 'Synodalbrief (Hieronymus, Brief 92) und Festbriefe (Hieronymus, Briefe 96, 98, 100)', year: '400–404', quote: `Theophilus verurteilt auf einer alexandrinischen Synode die Lehren des Origenes und kritisiert in seinen Festbriefen origenistische Spekulationen.`, status: 'paraphrase', note: 'Zählung der Hieronymus-Briefe (NPNF II/6, geprüft): Brief 92 = Synodalbrief der alexandrinischen Synode (400); Briefe 96, 98 und 100 = Osterfestbriefe des Theophilus von 401, 402 und 404 (98 v. a. gegen Apollinaris und Origenes).' },
      ],
    },
  ],
  dialog: [
    {
      id: 'endlich-vs-unendlich',
      objection: `Ein Mensch sündigt siebzig Jahre lang – also endlich. Eine ewige Strafe ist unendlich. Das ist die unverhältnismäßigste Strafe, die man sich denken kann. Nach einer Million Jahren wäre jede Schuld abgegolten.`,
      objectionBy: 'Bertrand Russell / Bart Ehrman',
      targetsPremise: 3,
      answer: `Die Dauer einer Strafe richtet sich nie nach der Dauer der Tat: Ein Mord dauert Sekunden, die Strafe Jahrzehnte. Aber wichtiger: Die Hölle ist nach christlichem Verständnis keine Rechnung für eine abgeschlossene Liste vergangener Taten. Sie ist der Zustand eines Menschen, der sich endgültig gegen Gott verschlossen hat – und diese Abwendung dauert an. Lewis sagt: Die Türen der Hölle sind von innen verschlossen. Und die Schrift kennt Abstufungen: Nicht alle Verlorenen erleiden dasselbe (Lk 12,47–48).`,
      detail: `Russells Einwand setzt ein Modell voraus, in dem Gott für jede Sünde eine bestimmte Strafzeit verhängt und diese dann endlos verlängert. Die orthodoxe Tradition denkt anders: Die Strafe ist die innere Folge der Abwendung von Gott, nicht eine äußere Zugabe. Wenn ein Mensch die Quelle des Lebens dauerhaft ablehnt, bleibt er dauerhaft getrennt – nicht weil Gott nachträgt, sondern weil er nicht anders will.`,
      questionsBack: [
        `Richtet sich bei uns die Dauer einer Strafe nach der Dauer der Tat? Wie lange dauert ein Mord?`,
        `Wenn jemand nach dem Tod weiter hasst und Gott weiter ablehnt – sollte Gott ihn dann gegen seinen Willen in seine Gegenwart zwingen?`,
      ],
      followUps: [
        {
          id: 'wuerden-sofort-bereuen',
          objection: `Unsinn. Jeder in der Hölle würde sofort bereuen, wenn er könnte. Niemand würde freiwillig ewig leiden wollen.`,
          objectionBy: 'Säkularer Kritiker',
          targetsPremise: 3,
          answer: `Wer aus der Qual heraus will, bereut noch nicht – er will nur dem Schmerz entkommen. Reue heißt, Gott zu lieben und das Böse zu hassen, weil es böse ist. Jesus zeigt im Gleichnis vom reichen Mann, dass dieser auch im Hades noch Lazarus als Diener behandelt: „Sende Lazarus, daß er … mir die Zunge kühle" (Lk 16,24). Er will Linderung, nicht Gott. Und wir kennen aus dem Leben, wie Menschen das wählen, was sie zerstört – Sucht, Hass, Stolz –, auch wenn sie leiden.`,
          detail: `C. S. Lewis hat in *The Great Divorce* (1945) diese Psychologie eindrücklich beschrieben: Geister aus der Hölle dürfen den Himmel besuchen und bleiben, wenn sie wollen – doch fast alle kehren um, weil sie ihren Groll, ihren Stolz oder ihre Selbstbezogenheit nicht aufgeben wollen. Das ist eine Parabel, keine Lehraussage über den Ablauf des Jenseits, aber sie macht verständlich, wie eine Wahl gegen Gott andauern kann.`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '16,24', quote: `Vater Abraham, erbarme dich mein und sende Lazarus, daß er das Äußerste seines Fingers ins Wasser tauche und kühle meine Zunge; denn ich leide Pein in dieser Flamme.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'umkehr-nach-tod',
              objection: `Warum soll mit dem Tod alles festgelegt sein? Ein liebender Gott würde auch nach dem Tod noch Umkehr ermöglichen. Der Tod ist eine willkürliche Frist.`,
              objectionBy: 'Thomas Talbott / David Bentley Hart',
              targetsPremise: 3,
              answer: `Die Schrift spricht davon, dass nach dem Tod das Gericht folgt (Hebr 9,27) und dass zwischen den Bereichen eine „große Kluft" besteht (Lk 16,26). Die Väter verstehen den Tod als den Moment, in dem sich die Ausrichtung der Seele vollendet: Das Leben ist die Zeit der Umkehr. Zugleich betet die koptische Kirche für die Entschlafenen und vertraut sie Gottes Barmherzigkeit an – über die Einzelheiten des Zwischenzustands spricht sie zurückhaltend. Ein Fegefeuer im römisch-katholischen Sinn lehrt sie nicht.`,
              detail: `Ehrlich bleibt: Manche orthodoxe Theologen äußern die Hoffnung, dass Gottes Liebe auch nach dem Tod noch Wege findet. Lehre der Kirche ist das nicht. Für das Gespräch entscheidend: Es geht nicht um eine willkürliche Frist, sondern um die Frage, ob ein Wille, der sich ein Leben lang verfestigt hat, sich ändern will. Gott verweigert niemandem die Umkehr – aber er erzwingt sie auch nicht.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '16,26', quote: `Und über das alles ist zwischen uns und euch eine große Kluft befestigt, daß, die da wollten von hinnen hinabfahren zu euch, können nicht, und auch nicht von dannen zu uns herüberfahren.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'liebe-gibt-nie-auf',
                  objection: `Liebe gibt nie auf. Ein Gott, der seine Geschöpfe irgendwann ihrem Schicksal überlässt, liebt nicht wirklich. Am Ende muss die Liebe siegen.`,
                  objectionBy: 'Thomas Talbott (The Inescapable Love of God, 1999)',
                  targetsPremise: 2,
                  answer: `Gott hört nicht auf zu lieben – nach der orthodoxen Tradition ist gerade seine Liebe das „Feuer", das die Verlorenen quält. Aber Liebe zwingt nicht. Eine Liebe, die den Widerstand eines anderen am Ende mit Gewalt bricht, wäre keine Liebe mehr, sondern Überwältigung. Gott „gibt dahin" (Röm 1,24) – er gibt dem Menschen, was der Mensch gewählt hat. Das ist kein Aufgeben, sondern äußerster Respekt vor der Person, die er geschaffen hat.`,
                  detail: `Talbott argumentiert, dass Gott jeden Menschen schließlich überzeugen wird, weil eine vollständig informierte Person Gott nicht ablehnen könne. Dagegen steht die biblische und menschliche Erfahrung, dass Ablehnung nicht nur aus Unwissen kommt, sondern aus dem Willen: „Die Menschen liebten die Finsternis mehr als das Licht" (Joh 3,19). Der Satan der christlichen Tradition kennt Gott bestens – und lehnt ihn ab.`,
                },
              ],
            },
          ],
        },
        {
          id: 'kein-richter-foltert-ewig',
          objection: `Kein irdischer Richter, auch nicht der grausamste Diktator, würde einen Menschen ewig foltern lassen. Euer Gott ist schlimmer als jeder Tyrann der Geschichte.`,
          objectionBy: 'Christopher Hitchens / Bertrand Russell',
          targetsPremise: 4,
          answer: `Die Hölle ist kein Folterkeller, in dem Gott persönlich Schmerzen zufügt. Der Kern der biblischen Aussage ist „ewiges Verderben, vom Angesicht des HERRN" (2 Thess 1,9) – Getrenntsein von der Quelle des Lebens. Die orthodoxe Tradition sagt: Dieselbe Gegenwart Gottes, die die Liebenden als Licht erfahren, erfahren die Hassenden als Feuer. Isaak der Syrer spricht von der „Geißel der Liebe". Die Qual kommt nicht aus Gottes Rachsucht, sondern aus dem Widerstand des Menschen gegen die Liebe.`,
          detail: `Ein Vergleich, der oft gebraucht wird: Dieselbe Sonne lässt Wachs schmelzen und Ton hart werden – der Unterschied liegt im Material, nicht in der Sonne. Basilius deutet das göttliche Feuer als zerteilt: Licht für die Heiligen, Brennen für die Gottlosen. Damit fällt das Bild des Folterers weg. Was bleibt, ist ernst genug: Wer Gott nicht will, verliert alles, was gut ist.`,
          followUps: [
            {
              id: 'feuer-woertlich',
              objection: `Die Bibel spricht doch von wörtlichem Feuer, Würmern und Zähneknirschen. Jetzt deutet ihr es um, weil es euch peinlich ist.`,
              objectionBy: 'Bibelkritischer Skeptiker',
              targetsPremise: 4,
              answer: `Jesus spricht von Feuer (Mt 25,41) *und* von äußerster Finsternis (Mt 8,12) – beides gleichzeitig wörtlich zu nehmen ist schwierig, denn Feuer leuchtet. Die Bilder weisen auf eine Wirklichkeit hin, die sich menschlicher Vorstellung entzieht. Die Väter haben sie unterschiedlich ausgelegt; einig waren sie darin, dass der Kern der Strafe der Verlust Gottes ist. Bilder sind dabei nicht harmloser als die Wirklichkeit, sondern ein Hinweis auf etwas noch Ernsteres.`,
              detail: `Das Bild vom „Wurm, der nicht stirbt, und dem Feuer, das nicht verlöscht" (Mk 9,48) stammt aus Jes 66,24 und beschreibt dort Leichname vor der Stadt. Jesus greift ein prophetisches Bild auf. Die alexandrinische Auslegung kennt seit jeher den wörtlichen und den geistlichen Sinn; sie verharmlost nicht, sondern vertieft.`,
              followUps: [
                {
                  id: 'metapher-verharmlost',
                  objection: `Also verwässert ihr die Hölle zur Metapher, um modern zu wirken. Das ist bequemes Christentum.`,
                  objectionBy: 'Konservativer Kritiker von beiden Seiten',
                  answer: `Nein – eine Metapher für etwas Ernstes ist selbst ernst. Wenn ich sage, jemand habe „ein gebrochenes Herz", verharmlose ich seinen Schmerz nicht. Die Hölle bedeutet nach christlicher Lehre den Verlust Gottes, des einzigen wahren Gutes – das ist schrecklicher als jedes physische Feuer. Die Väter sagen, dass es schlimmer sei, von Gottes Herrlichkeit ausgeschlossen zu sein, als jede körperliche Qual.`,
                  detail: `Johannes Chrysostomus betont in seinen Homilien mehrfach, dass der Verlust der Gemeinschaft mit Christus schwerer wiegt als das Feuer selbst. Die orthodoxe Deutung ist also nicht „weicher" als die westliche Höllenmalerei, sondern verlegt das Schreckliche dorthin, wo es wirklich liegt: in die selbstgewählte Trennung von der Liebe.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'u. a. Hom. 23', year: 'um 390', quote: `Der Verlust der Herrlichkeit Christi ist schlimmer als tausend Höllen.`, status: 'unverified', note: 'Der Gedanke (Verlust der Herrlichkeit schwerer als die Gehenna) ist bei Chrysostomus belegt; Wortlaut „tausend Höllen“ und Homilie-Nummer per WebSearch (Nov. 2026) nicht bestätigt – nur sinngemäß verwenden.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aionios-zeitalter',
      objection: `Ihr übersetzt falsch. Das griechische *aiōnios* heißt nicht „ewig", sondern „zum kommenden Zeitalter gehörig". Und *kolasis* bedeutet bessernde Züchtigung – Aristoteles unterscheidet sie ausdrücklich von der Vergeltungsstrafe. Mt 25,46 spricht also von einer heilsamen Strafe im kommenden Äon, nicht von endloser Qual.`,
      objectionBy: 'David Bentley Hart / Ilaria Ramelli',
      answer: `Wenn *aiōnios* in Mt 25,46 nur „zeitalterlich" und damit befristet hieße, dann wäre auch das ewige Leben im selben Satz befristet – denn dort steht dasselbe Wort. Das hat schon Augustinus eingewandt, und Basilius vor ihm. Und *kolasis* hat in der griechischen Bibel und der jüdischen Literatur keineswegs nur bessernden Sinn: 1 Joh 4,18 sagt, „die Furcht hat Pein (*kolasis*)". Die Offenbarung gebraucht die stärkste griechische Formel für Ewigkeit: „von Ewigkeit zu Ewigkeit" (Offb 14,11; 20,10).`,
      detail: `Harts Übersetzung des Neuen Testaments (2017) und Ramellis Untersuchungen zur Apokatastasis sind gelehrt und verdienen eine faire Antwort. Es stimmt, dass *aiōn* das „Zeitalter" bezeichnen kann und *aiōnios* den Bezug zum kommenden Äon ausdrückt. Aber der kommende Äon ist im Neuen Testament gerade das unvergängliche Zeitalter Gottes; das ewige Leben, das Gott schenkt, hat kein Ende. Die Parallele in Mt 25,46 bleibt das stärkste exegetische Argument.`,
      sources: [
        { kind: 'bibel', work: 'Offenbarung', ref: '14,11', quote: `Und der Rauch ihrer Qual wird aufsteigen von Ewigkeit zu Ewigkeit; und sie haben keine Ruhe Tag und Nacht …`, translation: 'Luther 1912', status: 'verbatim', original: `εἰς αἰῶνας αἰώνων` },
        { kind: 'bibel', work: '1. Johannes', ref: '4,18', quote: `Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus; denn die Furcht hat Pein.`, translation: 'Luther 1912', status: 'verbatim', original: `ὁ φόβος κόλασιν ἔχει` },
      ],
      followUps: [
        {
          id: 'vaeter-universalisten',
          objection: `Die größten Väter waren Universalisten: Origenes, Gregor von Nyssa, Isaak der Syrer. Die Allversöhnung ist gut patristisch – eure Höllenlehre ist eine spätere Verengung.`,
          objectionBy: 'David Bentley Hart',
          answer: `Das muss man ehrlich zugeben: Origenes hat die Wiederherstellung aller gelehrt, Gregor von Nyssa hat sie erhofft, und Isaak der Syrer äußert in seinen späteren Schriften eine ähnliche Hoffnung. Aber die Kirche hat diese Meinung nicht übernommen. Die Mehrheit der Väter – Basilius, Johannes Chrysostomus, Augustinus, Kyrill und viele andere – lehrte die ewige Strafe. Schon Papst Theophilus von Alexandrien ließ um 400 die origenistischen Lehren verurteilen, und die byzantinische Kirche verwarf 543 ausdrücklich die Lehre, die Strafe der Gottlosen ende einmal.`,
          detail: `Für die koptische Kirche ist wichtig: Sie erkennt das Konzil von 553 nicht als ökumenisch an, teilt aber die Ablehnung der Apokatastasis. Die alexandrinische Verwerfung des Origenismus unter Theophilus und der Kampf des Schenute von Atripe gegen origenistische Strömungen gehören zur eigenen Geschichte der koptischen Kirche. Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; seine apologetischen Schriften werden geschätzt, seine Spekulationen nicht übernommen.`,
          followUps: [
            {
              id: 'theophilus-kirchenpolitik',
              objection: `Theophilus' Verurteilung des Origenes war doch reine Kirchenpolitik – er wollte die origenistischen Mönche loswerden und Chrysostomus stürzen. Das ist kein theologisches Argument.`,
              objectionBy: 'Kirchenhistoriker',
              answer: `Teilweise hast du recht: Theophilus' Vorgehen war auch kirchenpolitisch motiviert, und sein Umgang mit Chrysostomus war ungerecht. Aber die theologische Ablehnung der Apokatastasis hängt nicht an Theophilus. Basilius hatte schon vorher mit Mt 25,46 gegen das Ende der Strafen argumentiert, Augustinus tat es unabhängig im Westen, und die Kirche hat die Allversöhnung in keiner Tradition – weder koptisch noch byzantinisch noch lateinisch – zur Lehre gemacht.`,
              detail: `Ehrliche Kirchengeschichte stärkt die Glaubwürdigkeit. Die Frage nach der ewigen Strafe entscheidet sich zuletzt an den Worten Jesu, nicht an der Persönlichkeit eines Patriarchen.`,
              followUps: [
                {
                  id: 'hoffen-erlaubt',
                  objection: `Darf ein Kopte nicht wenigstens hoffen, dass am Ende alle gerettet werden?`,
                  objectionBy: 'Suchender Christ',
                  answer: `Für alle Menschen zu beten und ihr Heil zu wünschen, ist zutiefst christlich – „Gott will, daß allen Menschen geholfen werde" (1 Tim 2,4), und die Kirche betet in jeder Liturgie für die ganze Welt. Wir wissen auch nicht, wer verloren geht, und dürfen niemanden für verdammt erklären. Aber die Allversöhnung als *Gewissheit* zu lehren, widerspricht den ernsten Warnungen Christi und ist nicht der Glaube der Kirche. Die Warnung ist uns gegeben, damit wir umkehren, nicht damit wir über andere spekulieren.`,
                  detail: `Die Haltung der Kirche ist also: Hoffnung im Gebet, Zurückhaltung im Urteil über andere, Ernst in der Warnung an sich selbst. Jesus beantwortet die Frage „Sind's wenige, die da selig werden?" nicht mit einer Zahl, sondern mit dem Aufruf: „Ringet darnach, daß ihr durch die enge Pforte eingehet" (Lk 13,23–24).`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '13,23–24', quote: `Es sprach aber einer zu ihm: HERR, meinst du, daß wenige selig werden? Er aber sprach zu ihnen: Ringet darnach, daß ihr durch die enge Pforte eingehet.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'annihilation-gerechter',
      objection: `Dann ist wenigstens die Vernichtung der Verlorenen gerechter als ewige Qual. Die Bibel spricht von „verderben" (Mt 10,28), von „Verderben" (2 Thess 1,9), vom Tod als Sold der Sünde (Röm 6,23). Wer verbrennt, hört auf zu existieren. Selbst John Stott hielt das für möglich.`,
      objectionBy: 'Edward Fudge / John Stott',
      answer: `Das ist eine ernsthafte, biblisch argumentierte Position, und man sollte sie fair behandeln. Aber sie scheitert an mehreren Stellen: In Mt 25,46 steht die Strafe parallel zum ewigen Leben; die Offenbarung spricht von Qual „Tag und Nacht von Ewigkeit zu Ewigkeit" (Offb 20,10); und „Verderben" (*olethros*) bedeutet Ruin und Zugrundegehen, nicht Nichtsein – 2 Thess 1,9 erklärt es als Trennung „vom Angesicht des Herrn". Die Väter haben die Annihilation nicht gelehrt, und die koptische Kirche lehnt sie ab.`,
      detail: `Annihilationismus wird heute vor allem von einigen evangelikalen Theologen und von Gruppen wie den Siebenten-Tags-Adventisten und den Zeugen Jehovas vertreten (siehe den Claim „Die Seele ist sterblich; es gibt keine Hölle"). Papst Schenuda III. hat sich in seinen Schriften zur vergleichenden Theologie mit solchen Lehren auseinandergesetzt. Fairness: Stott äußerte seine Neigung zur Annihilation vorsichtig und tentativ (in *Essentials*, 1988, mit David Edwards).`,
      followUps: [
        {
          id: 'unsterblichkeit-platonisch',
          objection: `Die Unsterblichkeit der Seele ist platonische Philosophie, nicht biblische Lehre. Die Bibel lehrt bedingte Unsterblichkeit: Nur die Erlösten leben ewig.`,
          objectionBy: 'Annihilationistischer Theologe',
          answer: `Die Bibel lehrt nicht nur eine Unsterblichkeit der Seele, sondern die Auferstehung beider: „die da Gutes getan haben, zur Auferstehung des Lebens, die aber Übles getan haben, zur Auferstehung des Gerichts" (Joh 5,29). Schon Daniel spricht von denen, die zum ewigen Leben, und denen, die „zu ewiger Schmach und Schande" auferstehen (Dan 12,2). Das Fortbestehen der Verlorenen gründet also nicht in Platon, sondern in Gottes Auferweckung aller Menschen zum Gericht.`,
          detail: `Richtig ist, dass die Bibel den Menschen als Einheit von Leib und Seele sieht und die Auferstehung betont. Gerade deshalb ist die Annihilation schwer zu halten: Die Ungerechten werden auferweckt – wozu, wenn nicht zu einem bleibenden Zustand?`,
          sources: [
            { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Und viele, so unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '5,28–29', quote: `… es kommt die Stunde, in welcher alle, die in den Gräbern sind, werden seine Stimme hören, und werden hervorgehen, die da Gutes getan haben, zur Auferstehung des Lebens, die aber Übles getan haben, zur Auferstehung des Gerichts.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'himmel-nicht-selig',
      objection: `Wie sollen die Geretteten im Himmel glücklich sein, wenn sie wissen, dass ihre Kinder, Eltern, Freunde ewig leiden? Entweder ist der Himmel kein Himmel oder die Seligen sind herzlos.`,
      objectionBy: 'David Bentley Hart',
      answer: `Das ist eine der schwersten Fragen, und ich habe keine einfache Antwort. Aber eines ist zu bedenken: Wenn die, die Gott und das Gute verweigern, damit den Himmel für alle anderen unmöglich machen könnten, dann hätte die Verweigerung das letzte Wort über die Liebe. C. S. Lewis nennt das den Anspruch der Lieblosen, das Universum zu erpressen: dass die Hölle ein Vetorecht über den Himmel haben soll. Wie Gott die Tränen der Seligen abwischt, wissen wir nicht – aber wir wissen, dass er es tut (Offb 21,4).`,
      detail: `Lewis entfaltet diesen Gedanken in *The Great Divorce* (Kap. 13): Die Forderung, niemand dürfe Freude erleben, solange einer sich weigert, glücklich zu sein, gibt dem Elend Macht über die Freude. Das ist eine ernste Überlegung, aber kein vollständiger Trost. Ehrlichkeit verlangt zuzugeben, dass hier ein Geheimnis bleibt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Great Divorce', ref: 'Kap. 13', year: '1945', quote: `… dass die Hölle ein Vetorecht über den Himmel haben soll.`, original: `… that Hell should be able to veto Heaven.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gott-hat-sie-erschaffen',
          objection: `Gott hat diese Menschen erschaffen, obwohl er wusste, dass sie verloren gehen würden. Damit trägt er die Verantwortung für ihr ewiges Leid.`,
          objectionBy: 'Bart Ehrman',
          answer: `Gott hat ihnen das Dasein, die Freiheit und echte Möglichkeiten zur Umkehr geschenkt. Wissen ist nicht Verursachen (siehe den Claim zum Vorherwissen). Hätte Gott nur Wesen erschaffen dürfen, die ihn garantiert lieben, hätte er keine freien Personen erschaffen können. Und Gott hat den Preis für die Freiheit selbst getragen: Er ist am Kreuz gestorben, damit niemand verloren gehen muss. Wer verloren geht, geht an einem ausgestreckten Arm vorbei.`,
          detail: `Siehe den Claim „Wenn Gott alles vorherweiß, sind wir nicht frei" (Themenblock Willensfreiheit), dort auch der Dialogzweig zur Frage, warum Gott Menschen erschafft, die verloren gehen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Richtet sich bei uns die Dauer einer Strafe nach der Dauer der Tat?`,
    `Sollte Gott Menschen, die ihn nicht wollen, gegen ihren Willen in seine Gegenwart zwingen?`,
    `Wenn in Mt 25,46 die Strafe nur befristet ist – ist es dann auch das ewige Leben im selben Satz?`,
    `Was wäre schlimmer: ein äußeres Feuer oder der endgültige Verlust aller Liebe und Freude?`,
    `Hast du die Hölle schon einmal als Warnung an dich selbst gelesen – statt als Urteil über andere?`,
  ],
  avoid: [
    `Mit der Hölle drohen oder anderen Menschen die Verdammnis zusprechen – niemand außer Gott kennt das Herz.`,
    `Mittelalterliche Höllenbilder (Dante, Foltermalerei) als kirchliche Lehre ausgeben.`,
    `Die Allversöhnung oder Annihilation als „Ketzerei von Dummköpfen" abtun – ihre Vertreter argumentieren ernsthaft und oft aus Liebe.`,
    `Das Problem kleinreden – C. S. Lewis' Ehrlichkeit („keine Lehre würde ich lieber entfernen") ist überzeugender als Gleichgültigkeit.`,
  ],
  concessions: [
    `Einige bedeutende Väter (Origenes, Gregor von Nyssa, Isaak der Syrer in seinen späteren Schriften) hofften auf die Wiederherstellung aller.`,
    `Die Verurteilung des Origenismus war historisch auch von Kirchenpolitik begleitet.`,
    `Die Lehre von der ewigen Strafe ist emotional schwer zu tragen; auch überzeugte Christen ringen mit ihr.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die große Scheidung (The Great Divorce)', year: '1945', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain), Kap. 8', year: '1940', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jerry L. Walls', work: 'Hell: The Logic of Damnation', year: '1992', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei, Buch XXI', year: '413–426', status: 'paraphrase' },
    { kind: 'gegner', author: 'David Bentley Hart', work: 'That All Shall Be Saved', year: '2019', status: 'paraphrase', note: 'Die stärkste heutige Gegenposition aus orthodoxer Feder.' },
  ],
  difficulty: 3,
  tags: ['Hölle', 'Ewige Strafe', 'Gerechtigkeit', 'Allversöhnung', 'Annihilationismus', 'Apokatastasis', 'Isaak der Syrer', 'C. S. Lewis'],
  related: [
    'hoelle/liebender-gott-keine-hoelle',
    'hoelle/hoelle-angstmache',
    'willensfreiheit/vorherwissen-schliesst-freiheit-aus',
    'theodizee/kinderleid-karamasow',
    'zeugen-jehovas/pfahl-seele-hoelle',
    'katholizismus/fegefeuer',
    'kirchengeschichte-mythen/reinkarnation-553-gestrichen',
  ],
};

export default claim;
