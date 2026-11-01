import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'goettliche-verborgenheit',
  title: `„Wenn Gott existiert, warum zeigt er sich nicht eindeutig?"`,
  proponents: [
    { name: 'J. L. Schellenberg', role: 'Religionsphilosoph, Mount Saint Vincent University (Kanada)', work: 'Divine Hiddenness and Human Reason (1993); The Hiddenness Argument (2015)' },
    { name: 'Theodore Drange', role: 'Philosoph, West Virginia University', work: 'Nonbelief and Evil (1998) – Argument aus dem Unglauben' },
    { name: 'Stephen Maitzen', role: 'Philosoph, Acadia University', work: '„Divine Hiddenness and the Demographics of Theism", Religious Studies 42 (2006)' },
    { name: 'Alex O\'Connor', role: 'Philosoph und Podcaster', work: 'Within Reason; Gespräche mit Schellenberg und christlichen Philosophen' },
  ],
  steelman: `J. L. Schellenberg argumentiert so: Ein vollkommen liebender Gott wäre immer offen für eine persönliche Beziehung mit jedem endlichen Menschen. Eine solche Beziehung setzt voraus, dass man glaubt, dass Gott existiert. Also würde ein liebender Gott dafür sorgen, dass niemand, der sich nicht aktiv gegen ihn sperrt, ohne diesen Glauben bleibt. Aber es gibt solche „nicht widerständigen Ungläubigen": Menschen, die jahrelang aufrichtig gesucht und gebetet haben und den Glauben trotzdem verloren; Menschen in Kulturen, die nie vom Gott Abrahams hörten; Menschen, die gern glauben würden, aber nicht können. Also existiert kein vollkommen liebender Gott. Die Verteilung des Glaubens folgt zudem verdächtig genau geografischen und kulturellen Grenzen (Maitzen). Ein Vater, der sich vor seinen Kindern versteckt und sie dann dafür verantwortlich macht, dass sie ihn nicht finden, wäre kein liebender Vater.`,
  biblical: {
    summary: `Die Bibel kennt die Erfahrung der Verborgenheit Gottes sehr genau – nicht als Argument gegen ihn, sondern als Teil des Weges mit ihm: „Fürwahr, du bist ein verborgener Gott" (Jes 45,15); „Wie lange verbirgst du dein Antlitz vor mir?" (Ps 13,2). Zugleich verheißt sie: Wer Gott von ganzem Herzen sucht, wird ihn finden (Jer 29,13–14; Mt 7,7). Sie sagt nüchtern, dass selbst eine Erscheinung von den Toten Unwillige nicht überzeugen würde (Lk 16,31) – und dass Gott sich nicht verborgen, sondern in Christus sichtbar gemacht hat (Joh 1,14.18; 14,9).`,
    detail: `- **Jes 45,15:** *'aken 'attah 'el mistatter* – „wahrhaftig, du bist ein Gott, der sich verbirgt". Der Vers steht mitten in einem Kapitel, das Gottes öffentliches Handeln in der Geschichte (Kyrus) preist: Verborgenheit und Offenbarung schließen sich nicht aus.
- **Apg 17,27:** Gott hat die Menschen so gestellt, „daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten" – das Suchen ist gewollt.
- **Joh 3,19:** Das Gericht besteht darin, „daß das Licht in die Welt gekommen ist, und die Menschen liebten die Finsternis mehr denn das Licht" – die Bibel nennt neben dem Verstand auch den Willen.
- **Ps 13; 22; Hiob:** Die Schrift erlaubt die Klage über Gottes Schweigen – der Gläubige darf sie Gott selbst entgegenhalten.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '45,15', quote: `Fürwahr, du bist ein verborgener Gott, du Gott Israels, der Heiland.`, original: 'אָכֵן אַתָּה אֵל מִסְתַּתֵּר', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '13,2', quote: `HERR, wie lange willst du mein so gar vergessen? Wie lange verbirgst du dein Antlitz vor mir?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '29,13–14', quote: `Ihr werdet mich suchen und finden. Denn so ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen, spricht der HERR.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '16,31', quote: `Er sprach zu ihm: Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,9', quote: `Wer mich sieht, der sieht den Vater.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Tradition hält zwei Wahrheiten zusammen: Gott ist seinem Wesen nach unbegreiflich und „wohnt in einem Licht, da niemand zukommen kann" (1 Tim 6,16) – und er hat sich in Christus sichtbar, hörbar und berührbar gemacht (1 Joh 1,1). Der hl. Athanasius erklärt die Menschwerdung gerade als Gottes Antwort auf die menschliche Blindheit: Weil die Menschen Gott nur noch in sinnlichen Dingen suchten, kam der Logos in einen sichtbaren Leib, um ihnen dort zu begegnen. Gregor von Nyssa lehrt, dass die Gotteserkenntnis ein unendlicher Aufstieg ist, in dem Gott sich zugleich zeigt und entzieht – wie Mose ihn in der „Finsternis" am Sinai fand.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '14–16', status: 'paraphrase', quote: 'Weil die Menschen Gott in den sichtbaren Dingen suchten, nahm der Logos einen Leib an, damit sie ihn durch die Werke seines Leibes erkennen.' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,162–165', status: 'paraphrase', quote: 'Die wahre Erkenntnis Gottes besteht darin zu sehen, dass er unsichtbar ist – ein Sehen im Nicht-Sehen, wie Mose in der Finsternis.' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,1', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Das Verborgenheitsargument gilt seit Schellenbergs Buch (1993) als eines der stärksten neueren Argumente gegen den Theismus und hat eine umfangreiche Fachdebatte ausgelöst. Christliche Philosophen antworten u. a. mit: (1) dem Verweis auf die Freiheit und Reife der Liebe (Swinburne, Murray), (2) dem skeptischen Theismus (wir kennen Gottes Gründe nicht), (3) der Bestreitung, dass es nicht widerständige Ungläubige im relevanten Sinn gibt oder dass ihr Zustand endgültig ist, und (4) Michael Reas These, dass Schellenbergs Bild von „vollkommener Liebe" zu menschenähnlich ist. Die Debatte ist offen.`,
    sources: [
      { kind: 'gegner', author: 'J. L. Schellenberg', work: 'The Hiddenness Argument: Philosophy\'s New Challenge to Belief in God', year: '2015', status: 'paraphrase', quote: 'Ein vollkommen liebender Gott wäre stets offen für eine Beziehung; es gibt nicht widerständigen Unglauben; also gibt es keinen vollkommen liebenden Gott.' },
      { kind: 'fachliteratur', author: 'Michael C. Rea', work: 'The Hiddenness of God', year: '2018', status: 'paraphrase', quote: 'Göttliche Verborgenheit ist im Licht von Gottes transzendenter Andersartigkeit verständlich und kein Zeichen mangelnder Liebe.' },
      { kind: 'fachliteratur', author: 'Daniel Howard-Snyder & Paul K. Moser (Hg.)', work: 'Divine Hiddenness: New Essays', year: '2002', status: 'paraphrase', quote: 'Sammelband mit Beiträgen beider Seiten.' },
    ],
  },
  quickAnswer: `Das Christentum sagt: Gott hat sich gezeigt – in der Schöpfung, im Gewissen und vor allem in Jesus Christus, öffentlich und vor Zeugen. Aber Gott will nicht nur, dass wir wissen, dass es ihn gibt, sondern dass wir ihn lieben – und Liebe lässt sich nicht erzwingen. Pascal sagt: Es gibt genug Licht für die, die sehen wollen, und genug Dunkel für die, die es nicht wollen. Jesus verheißt: „Suchet, so werdet ihr finden." Und ich will niemandem unterstellen, er suche nicht ehrlich – nur Gott kennt das Herz, und Verborgenheit kann eine Phase sein, nicht das Ende.`,
  keyPoints: [
    `**Gott hat sich gezeigt:** Das Christentum behauptet keinen schweigenden Gott, sondern die Menschwerdung – Gott ist so konkret geworden, dass man ihn „betasten" konnte (1 Joh 1,1).`,
    `**Liebe will Freiheit:** Gott sucht nicht bloße Zustimmung („die Teufel glauben's auch und zittern", Jak 2,19), sondern eine Beziehung, die verwandelt. Überwältigende Gegenwart könnte Liebe in Berechnung oder Furcht verwandeln.`,
    `**Genug Licht:** Gott gibt hinreichende Gründe für die Suchenden (Pascal), ohne die Unwilligen zu zwingen. Selbst eine Erscheinung von den Toten würde Unwillige nicht überzeugen (Lk 16,31).`,
    `**„Nicht widerständig" ist schwer zu beurteilen:** Wir kennen weder unser eigenes Herz ganz noch das anderer. Und Unglaube jetzt heißt nicht Unglaube für immer – Gottes Zeitrahmen ist das ganze Leben und die Ewigkeit.`,
    `**Verborgenheit ist eine Erfahrung auch der Gläubigen** (Ps 13; 22; Hiob) – die Bibel nimmt sie ernst und macht sie zum Gebet.`,
  ],
  argument: {
    name: 'Verborgenheit und die Natur der Liebe',
    summary: 'Die Art von Verborgenheit, die wir erleben, ist mit einem vollkommen liebenden Gott vereinbar.',
    premises: [
      {
        text: 'P1: Vollkommene Liebe sucht eine freie, verwandelnde Beziehung, nicht bloß die Anerkennung einer Tatsache.',
        support: `Auch menschliche Liebe will nicht nur „zur Kenntnis genommen" werden. Die Schrift unterscheidet den Glauben, „daß ein Gott ist", vom Vertrauen und von der Liebe (Jak 2,19; 1 Kor 13,2).`,
      },
      {
        text: 'P2: Eine überwältigende, unausweichliche Gegenwart Gottes könnte freie, ungezwungene Hinwendung erschweren und die Motive von Liebe zu Furcht oder Berechnung verschieben.',
        support: `Wenn Gottes Gegenwart so offensichtlich wäre wie die Sonne, würde Gehorsam leicht zur Klugheit vor einer allgegenwärtigen Macht. C. S. Lewis: Gott „kann nicht vergewaltigen, er kann nur werben". Swinburne und Michael Murray haben dies philosophisch ausgearbeitet.`,
      },
      {
        text: 'P3: Gott gibt jedem Menschen hinreichendes Licht, ihn zu suchen – durch Schöpfung, Gewissen und das Zeugnis von Christus – und verheißt den Suchenden, dass sie finden.',
        support: `Röm 1,19–20; 2,14–15; Apg 14,17; 17,27; Jer 29,13; Mt 7,7. Pascal: genug Licht für die, die sehen wollen.`,
      },
    ],
    conclusion: 'Also ist die göttliche Verborgenheit, wie wir sie erleben, kein Beleg gegen einen liebenden Gott, sondern mit seiner Liebe vereinbar – und lädt zum Suchen ein.',
  },
  voices: [
    {
      person: 'pascal',
      role: 'als Apologet des verborgenen Gottes',
      text: `Pascal hat das Thema der Verborgenheit Gottes in den Mittelpunkt seiner geplanten Apologie gestellt. Gott habe sich so gezeigt, dass er für die, die ihn von ganzem Herzen suchen, erkennbar ist, und zugleich so verborgen, dass er für die, die ihn nicht suchen, verborgen bleibt. Wäre er völlig verborgen, könnte niemand ihn finden; wäre er völlig offenbar, bliebe kein Raum für die Umkehr des Herzens. Für Pascal entspricht diese Mischung aus Licht und Dunkel genau der Lage des Menschen, der zugleich elend und groß ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment 149 (Zählung Lafuma; Brunschvicg 430)', quote: `Es gibt genug Licht für die, die nichts anderes wünschen als zu sehen, und genug Dunkelheit für die, die eine entgegengesetzte Neigung haben.`, original: `Il y a assez de lumière pour ceux qui ne désirent que de voir, et assez d'obscurité pour ceux qui ont une disposition contraire.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Quellenprüfung Nov. 2026: Wortlaut und Zählung Brunschvicg 430 über die englische Trotter-Übersetzung (nach Brunschvicg gezählt) bestätigt; Lafuma 149 nach der Standardkonkordanz. Bei Zitaten immer die Zählung angeben, da die Ausgaben verschieden nummerieren.' },
      ],
    },
    {
      person: 'michael-rea',
      role: 'als analytischer Religionsphilosoph',
      text: `Rea argumentiert, dass Schellenbergs Argument ein zu menschenähnliches Bild von Gottes Liebe voraussetzt: Es nimmt an, dass vollkommene Liebe sich so äußern müsse, wie wir es bei einem idealen menschlichen Elternteil erwarten. Gott ist aber transzendent und in seiner Persönlichkeit von uns verschieden; seine Liebe ist nicht geringer, aber anders. Zudem sei Gott nicht abwesend, sondern auf vermittelte Weise gegenwärtig – in der Schrift, in der Liturgie, in der Gemeinschaft der Glaubenden. Verborgenheit ist dann nicht ein Zeichen von Gleichgültigkeit, sondern Ausdruck göttlicher Andersartigkeit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael C. Rea', work: 'The Hiddenness of God', year: '2018', status: 'paraphrase', quote: 'Göttliche Transzendenz und vermittelte Gegenwart als Antwort auf das Verborgenheitsargument.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Athanasius sieht die Menschwerdung als Gottes Antwort auf die Blindheit des Menschen. Gott hatte sich durch die Schöpfung, durch das Gesetz und die Propheten zu erkennen gegeben; doch die Menschen wandten sich den sinnlichen Dingen zu und suchten Gott im Geschaffenen. Darum, so Athanasius, kam der Logos selbst in einen sichtbaren Leib: Wer Gott nur noch mit den Sinnen suchte, sollte ihn in den Werken des Leibes Christi finden. Gott hat sich also nicht versteckt – er ist dem Menschen bis in dessen Verwirrung nachgegangen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '11–16', status: 'paraphrase', quote: 'Gott gab sich durch Schöpfung, Gesetz und Propheten zu erkennen; als die Menschen sich dem Sinnlichen zuwandten, kam der Logos im Leib.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Schriftsteller über Gottes Werben',
      text: `In den „Dienstanweisungen für einen Unterteufel" lässt Lewis den Teufel Screwtape erklären, warum Gott sich nicht mit überwältigender Macht zeigt: Er wolle keine Sklaven, sondern Söhne; der Unwiderstehliche und der Unbestreitbare seien die beiden Waffen, die ihm gerade sein Plan verbiete. Gott ziehe sich manchmal zurück, damit der Mensch lerne, aus eigenem Willen zu gehen. Lewis kannte die Verborgenheit auch persönlich – in „Über die Trauer" beschreibt er nach dem Tod seiner Frau das Gefühl einer verschlossenen Tür.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Screwtape Letters (Dienstanweisung für einen Unterteufel)', ref: 'Brief 8', year: '1942', quote: `He cannot ravish. He can only woo.`, status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'A Grief Observed (Über die Trauer)', year: '1961', status: 'paraphrase', quote: 'Erfahrung der verschlossenen Tür Gottes in der Trauer.' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Mystiker und Theologe',
      text: `Gregor von Nyssa deutet Moses Aufstieg auf den Sinai als Bild der Gotteserkenntnis: Zuerst erscheint Gott im Licht des brennenden Dornbuschs, später in der Wolke, schließlich in der Finsternis. Je weiter der Mensch fortschreitet, desto mehr erkennt er, dass Gott alles Begreifen übersteigt – und gerade darin besteht die wahre Erkenntnis. Für Gregor ist Gottes „Verborgenheit" also nicht Abwesenheit, sondern Unerschöpflichkeit: Man findet ihn, indem man immer weiter sucht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,162–169', status: 'paraphrase', quote: 'Licht, Wolke und Finsternis als Stufen der Gotteserkenntnis; Gott sehen heißt, ihm unablässig zu folgen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'schellenberg-nichtwiderstaendig',
      objection: `„Ein vollkommen liebender Gott wäre immer offen für eine Beziehung zu jedem Menschen. Dafür muss man an ihn glauben. Also gäbe es keine ehrlichen, nicht widerständigen Ungläubigen. Es gibt sie aber. Also gibt es keinen vollkommen liebenden Gott."`,
      objectionBy: 'J. L. Schellenberg',
      answer: `Gottes Offenheit für eine Beziehung heißt nicht, dass sie sofort und zu unseren Bedingungen beginnen muss. Gottes Zeitrahmen ist das ganze Leben und die Ewigkeit; dass jemand *jetzt* nicht glaubt, heißt nicht, dass er nie finden wird. Zudem verheißt die Schrift, dass Suchende finden (Jer 29,13). Ob jemand im tiefsten Sinn „nicht widerständig" ist, kann ich nicht beurteilen – aber auch Schellenberg kann es nicht. Die Prämisse ist schwerer zu belegen, als sie klingt.`,
      questionsBack: [`Woher wissen wir, dass ein bestimmter Mensch sein ganzes Leben lang nicht finden wird?`],
      followUps: [
        {
          id: 'glaube-zwingt-nicht',
          objection: `„Der bloße Glaube, *dass* Gott existiert, zwingt niemanden zu lieben – er ist nur die Voraussetzung. Gott könnte allen diese Überzeugung geben und die Freiheit trotzdem lassen."`,
          objectionBy: 'J. L. Schellenberg',
          targetsPremise: 2,
          answer: `Teilweise stimmt das: Auch die Dämonen „glauben und zittern" (Jak 2,19). Aber für Menschen, die moralisch erst reifen, verändert eine unausweichliche, überwältigende Gegenwart Gottes die Lage: Gehorsam würde leicht zur Klugheit vor einer allgegenwärtigen Macht, Liebe zur Berechnung. Ein gewisser Abstand schafft Raum, sich aus freien Stücken dem Guten zuzuwenden. Gott gibt genug Licht, um zu finden, aber nicht so viel, dass das Suchen überflüssig wird.`,
          followUps: [
            {
              id: 'glaeubige-erleben-gott',
              objection: `„Aber viele Gläubige berichten, Gott ständig zu erleben – und sie sind trotzdem frei. Warum gibt Gott das nicht allen?"`,
              objectionBy: 'Alex O\'Connor',
              targetsPremise: 2,
              answer: `Gott begegnet Menschen verschieden und zu seiner Zeit – das sehen wir auch in der Bibel: Paulus vor Damaskus, Thomas, der erst später berührte, die Emmausjünger, die ihn erst beim Brotbrechen erkannten. Dass manche jetzt keine solche Erfahrung haben, zeigt nicht, dass sie nie eine haben werden. Ehrlich gesagt: Warum Gott im einzelnen Fall so handelt, weiß ich nicht. Aber dass ich Gottes Gründe nicht kenne, ist kein Beleg dafür, dass er keine hat.`,
            },
          ],
        },
        {
          id: 'ich-habe-gesucht',
          objection: `„Ich habe jahrelang aufrichtig gebetet und gesucht – und nichts. Willst du mir sagen, ich hätte nicht ehrlich gesucht?"`,
          objectionBy: 'Alex O\'Connor / viele ehemalige Christen',
          answer: `Nein, das sage ich nicht – ich kann dein Herz nicht beurteilen und will es auch nicht. Die Bibel selbst kennt Menschen, die Gottes Schweigen erlebten: „Wie lange verbirgst du dein Antlitz vor mir?" (Ps 13,2) – und Jesus selbst rief am Kreuz: „Mein Gott, warum hast du mich verlassen?" Schweigen ist nicht dasselbe wie Abwesenheit. Ich möchte dich nur ermutigen, die Tür nicht für immer zu schließen – manchmal kommt die Antwort anders oder später, als wir erwarten.`,
          detail: `Pastoral: Hier geht es oft um Verletzung, nicht um Philosophie. Zuhören, Mitgefühl zeigen, nicht mit Argumenten „gewinnen" wollen. Auf Christus verweisen, der selbst die Gottverlassenheit durchlitten hat.`,
        },
      ],
    },
    {
      id: 'isolierte-kulturen',
      objection: `„Warum verteilt sich der Glaube so genau nach Geografie und Kultur? Menschen in isolierten Kulturen hatten nie eine Chance, vom Gott der Bibel zu hören."`,
      objectionBy: 'Stephen Maitzen',
      answer: `Nach der Bibel hat Gott sich niemandem unbezeugt gelassen (Apg 14,17): Die Schöpfung und das Gewissen sprechen zu allen Menschen (Röm 1,19–20; 2,14–15), und Gott richtet jeden nach dem Licht, das er empfangen hat. Religionswissenschaftler haben zudem bei vielen Völkern die Vorstellung eines höchsten Himmelsgottes gefunden. Dass die volle Offenbarung in Christus sich geschichtlich ausbreitet, heißt nicht, dass Gott den anderen fern war.`,
      detail: `Siehe „Was ist mit denen, die nie von Jesus gehört haben?" und „Religion entwickelte sich vom Animismus zum Monotheismus".`,
      followUps: [
        {
          id: 'gerechtigkeit-unklar',
          objection: `„Dann weißt du also gar nicht, was mit ihnen geschieht. Das ist eine bequeme Ausrede."`,
          objectionBy: 'Stephen Maitzen',
          answer: `Ich weiß nicht jedes Detail – aber ich kenne Gottes Charakter, wie er sich in Christus gezeigt hat: Er ist gekommen, „zu suchen und selig zu machen, das verloren ist" (Lk 19,10). Abraham fragte schon: „Sollte der Richter aller Welt nicht recht richten?" (Gen 18,25). Ein Gott, der seinen Sohn für die Welt hingibt, wird niemanden ungerecht behandeln. Das ist keine Ausrede, sondern Vertrauen auf der Grundlage dessen, was er offenbart hat.`,
          sources: [
            { kind: 'bibel', work: '1. Mose (Genesis)', ref: '18,25', quote: `Sollte der Richter aller Welt nicht recht richten?`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'grausames-versteckspiel',
      objection: `„Ein Gott, der sich versteckt und dann die bestraft, die ihn nicht finden, spielt ein grausames Versteckspiel. Ein guter Vater würde so nicht handeln."`,
      objectionBy: 'Friedrich Nietzsche (sinngemäß) / Richard Dawkins',
      answer: `Das Christentum erzählt die umgekehrte Geschichte: Nicht der Mensch sucht einen versteckten Gott, sondern Gott sucht den Menschen – wie der Hirte das verlorene Schaf (Lk 15). Er ist in Christus gekommen, hat unter uns gelebt und ist für uns gestorben. Das Problem ist nach der Schrift weniger, dass Gott sich versteckt, als dass wir die Finsternis manchmal mehr lieben als das Licht (Joh 3,19).`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Morgenröte', ref: '§ 91', year: '1881', status: 'paraphrase', quote: 'Ein allwissender und allmächtiger Gott, der nicht einmal dafür sorgt, dass seine Absicht von seinen Geschöpfen verstanden wird – sollte das ein Gott der Güte sein?' },
      ],
      followUps: [
        {
          id: 'jesus-2000-jahre',
          objection: `„Aber das Kommen Jesu liegt 2000 Jahre zurück. Heute erlebe ich davon nichts."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Christus ist nicht nur ein Ereignis der Vergangenheit, sondern in seiner Kirche gegenwärtig – im Wort, in den Sakramenten, im Leben der Heiligen bis heute. Die Einladung des Evangeliums lautet: „Komm und sieh es!" (Joh 1,46). Lies ein Evangelium mit offenem Herzen, besuche eine Liturgie, sprich ein ehrliches Gebet wie: „Gott, wenn es dich gibt, zeige dich mir." Viele, die so gesucht haben, haben gefunden.`,
        },
      ],
    },
    {
      id: 'rea-macht-liebe-bedeutungslos',
      objection: `„Wenn du sagst, Gottes Liebe sei ‚ganz anders' als menschliche Liebe, dann wird der Begriff bedeutungslos. Eine Liebe, die nie erkennbar wird, ist keine Liebe."`,
      objectionBy: 'J. L. Schellenberg (gegen Michael Rea)',
      answer: `Gottes Liebe ist nicht *weniger* als menschliche, sondern größer und anders in der Art, wie sie sich äußert – wie die Liebe eines Vaters zu einem kleinen Kind sich anders zeigt als zwischen Freunden. Und sie ist nicht unerkennbar: Sie zeigt sich am deutlichsten am Kreuz. „Darin steht die Liebe: nicht, daß wir Gott geliebt haben, sondern daß er uns geliebt hat und gesandt seinen Sohn" (1 Joh 4,10). Wer wissen will, wie Gottes Liebe aussieht, kann auf Christus schauen.`,
    },
    {
      id: 'verborgenheit-beleg-naturalismus',
      objection: `„Rechnen wir nüchtern: Unter dem Naturalismus erwarten wir genau, was wir sehen – Menschen, die über Gott uneins sind, Glauben, der sich nach Herkunft verteilt, und keinen eindeutigen Hinweis. Unter dem Theismus erwarten wir einen Gott, dessen Existenz für alle offenkundig ist. Also ist die Verborgenheit ein Beleg für den Naturalismus."`,
      objectionBy: 'Paul Draper / J. L. Schellenberg',
      answer: `Das wäre richtig, wenn der christliche Theismus einen offenkundigen Gott *vorhersagen* würde. Er tut aber das Gegenteil: Die Schrift spricht selbst vom „verborgenen Gott" (Jes 45,15) und erwartet eine Welt mit genug Licht für den Suchenden und genug Dunkel für den, der nicht sucht. Der Naturalismus dagegen erwartet nicht, dass die überwältigende Mehrheit aller Menschen zu allen Zeiten nach dem Göttlichen fragt, betet und von Gotteserfahrungen berichtet. Die Datenlage ist gemischt – und genau so beschreibt sie das Christentum.`,
      detail: `Pascal hat diese „Mischung" zum Kern seiner Apologetik gemacht: Gott wollte sich denen zeigen, die ihn von ganzem Herzen suchen, und sich vor denen verbergen, die ihn fliehen; darum gebe es genug Licht für die einen und genug Dunkel für die anderen. Bayesianisch gesprochen: Eine Hypothese, die genau eine gemischte Beweislage vorhersagt, wird durch eine gemischte Beweislage nicht geschwächt. Draper würde antworten, der *bloße* Theismus sage Offenkundigkeit voraus – aber das Gespräch geht um den christlichen Gott, nicht um einen beliebigen.`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '45,15', status: 'paraphrase', quote: 'Fürwahr, du bist ein verborgener Gott, du Gott Israels, der Heiland.' },
      ],
      questionsBack: [`Sagt der Naturalismus voraus, dass fast alle Kulturen der Menschheitsgeschichte beten und nach Gott fragen?`],
      followUps: [
        {
          id: 'pascal-verleumdet-zweifler',
          objection: `„Pascals ‚genug Dunkel für die mit entgegengesetzter Neigung' heißt im Klartext: Wer nicht glaubt, will nicht glauben. Das ist eine Verleumdung ehrlicher Zweifler – und es gibt nachweislich nicht-widerständige Nichtgläubige."`,
          objectionBy: 'J. L. Schellenberg',
          answer: `Pascal beschreibt die Gesamtordnung, kein Urteil über jeden Einzelnen – und die Kirche maßt sich ein solches Urteil nicht an. Eine „Neigung" kann zudem unbewusst sein und steckt in uns allen, auch in Gläubigen. Vor allem aber ist die Geschichte eines Menschen mit Gott nicht nach einem Augenblick abgeschlossen: Augustinus suchte jahrelang vergeblich, C. S. Lewis nannte sich den „widerwilligsten Bekehrten Englands". Dass jemand *heute* nicht glaubt, zeigt nicht, dass Gott sich ihm *nie* zeigt.`,
          detail: `Schellenbergs Argument braucht die Prämisse, dass es zu irgendeinem Zeitpunkt Menschen gibt, die zu einer Beziehung mit Gott fähig sind und ohne eigenen Widerstand nicht glauben. Christen können diese Prämisse zugestehen und trotzdem bestreiten, dass ein liebender Gott jeden Augenblick die Gottesgewissheit herstellen *müsste*. Die entscheidende Frage ist also, ob Liebe auch warten darf (siehe nächster Zug).`,
          voices: [
            {
              person: 'cs-lewis',
              role: 'als später Bekehrter und Apologet',
              text: `Lewis beschreibt in seiner Autobiografie, wie er jahrelang als überzeugter Atheist lebte und sich am Ende gegen seinen Willen dem Gott ergab, den er nicht hatte finden wollen. Seine Erfahrung zeigt, dass der Weg zu Gott Zeit braucht und dass Gott Menschen auch durch lange Phasen des Unglaubens hindurch sucht.`,
              sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Surprised by Joy (Überrascht von Freude)', year: '1955', ref: 'Kap. 14', status: 'paraphrase', quote: 'Lewis beschreibt sich bei seiner Bekehrung zum Theismus als den wohl niedergeschlagensten und widerwilligsten Bekehrten in ganz England.' }],
            },
          ],
          followUps: [
            {
              id: 'aufschub-liebesmangel',
              objection: `„Aber ein vollkommen liebender Gott würde dafür sorgen, dass jeder, der zu einer Beziehung fähig ist, sie *jederzeit* eingehen kann. Schon der Aufschub ist ein Mangel an Liebe."`,
              objectionBy: 'J. L. Schellenberg',
              answer: `Menschliche Liebe zeigt das Gegenteil: Gute Eltern und Lehrer schaffen bewusst Abstand, damit ein Kind wachsen, selbst suchen und frei antworten kann. Irenäus von Lyon lehrte, dass der Mensch nicht fertig, sondern wie ein Kind geschaffen wurde und in die Gemeinschaft mit Gott hineinwachsen soll. Eine Liebe, die nur sofortige Gewissheit kennt, ließe keinen Raum für dieses Wachsen.`,
              detail: `Irenäus beschreibt den Menschen als „Kind", das Gott nicht sofort mit der vollen Vollkommenheit überhäufen konnte, weil es sie noch nicht hätte fassen können; der Mensch soll wachsen und reifen (Adversus Haereses IV,38). Moderne Philosophen sprechen von „epistemischer Distanz": Ein gewisser Abstand ermöglicht eine freie, nicht erzwungene Antwort. Das erklärt nicht jeden Einzelfall, zeigt aber, dass Aufschub mit vollkommener Liebe vereinbar ist.`,
              voices: [
                {
                  person: 'irenaeus',
                  role: 'als Theologe des Wachstums',
                  text: `Für Irenäus ist der Mensch von Anfang an zur Gemeinschaft mit Gott bestimmt, aber nicht fertig geschaffen: Er muss wachsen, sich üben und reifen, um Gott zu „fassen". Gott hätte ihm die Vollkommenheit nicht sofort geben können, ohne seine Natur als Geschöpf zu übergehen – wie eine Mutter ihrem Säugling noch keine feste Speise gibt.`,
                  sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'IV,38,1–2', year: 'um 180', status: 'paraphrase', quote: 'Der Mensch war wie ein Kind; Gott gab ihm nicht sofort die Vollkommenheit, weil er sie noch nicht hätte tragen können.' }],
                },
              ],
              followUps: [
                {
                  id: 'eltern-sind-offensichtlich-da',
                  objection: `„Deine Eltern-Analogie spricht gegen dich: Gute Eltern verstecken sich nicht vor ihren Kindern. Ein Kind weiß, dass seine Mutter existiert – und ist trotzdem frei. Gott könnte genauso offenkundig da sein, ohne jemanden zu überwältigen."`,
                  objectionBy: 'J. L. Schellenberg',
                  answer: `Gott hat genau das getan – in der Weise, die wir ertragen können: Er wurde Mensch. „Wer mich sieht, der sieht den Vater" (Joh 14,9). Athanasius erklärt, dass der Logos einen Leib annahm, weil die Menschen nur noch auf das Sichtbare schauten – er kam ihnen auf ihrer eigenen Ebene entgegen. Und er bleibt gegenwärtig: in der Kirche, im Wort, in der Eucharistie. Dass viele diese Gegenwart nicht als solche erkennen, ist eher wie bei einem Kind, das die Liebe seiner Eltern für selbstverständlich hält, als bei Eltern, die sich verstecken.`,
                  detail: `Die Analogie hat außerdem eine Grenze: Eltern sind endliche Personen in der Welt; ihre Gegenwart lässt Raum, weil sie begrenzt ist. Die ungeschützte Gegenwart des unendlichen Gottes wäre etwas anderes – „kein Mensch wird leben, der mich sieht" (Ex 33,20). Darum ist die Menschwerdung die Antwort der Kirche auf die Verborgenheit: Gott verbirgt seine Herrlichkeit, um sich in Demut zeigen zu können.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Theologe der Menschwerdung',
                      text: `Athanasius argumentiert, dass die Menschen sich von der Betrachtung Gottes abgewandt und den Blick auf die sinnlichen Dinge gerichtet hatten. Darum nahm der Logos einen Leib an und begegnete ihnen dort, wo sie suchten: in sichtbaren Werken, damit sie durch das, was der Herr im Leib tat, zur Erkenntnis des Vaters gelangten.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '14–16', year: 'ca. 318–335', status: 'paraphrase', quote: 'Weil die Menschen auf das Sinnliche blickten, kam der Logos ihnen im Leib entgegen.' }],
                    },
                  ],
                  questionsBack: [`Wenn Gott sich in einem Menschen gezeigt hätte – woran würdest du das erkennen, und hast du Jesus daraufhin geprüft?`],
                },
              ],
            },
          ],
        },
        {
          id: 'schrift-am-himmel',
          objection: `„Gott könnte jede Nacht ‚Jesus ist der Herr' in Leuchtschrift an den Himmel schreiben, in jeder Sprache. Das würde niemanden zwingen, ihn zu lieben – aber jeder wüsste Bescheid."`,
          objectionBy: 'Theodore Drange / Richard Dawkins',
          answer: `Jesus hat diese Erwartung selbst beantwortet: „Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, wenn jemand von den Toten aufstünde" (Lk 16,31). Menschen würden die Schrift am Himmel bald als Naturphänomen, Technik oder Massentäuschung erklären. Vor allem aber verändert ein Spektakel das Herz nicht. Und ein Gott, der ununterbrochen mit überwältigender Macht gegenwärtig wäre und zugleich Gericht ankündigt, würde Gehorsam aus Angst erzeugen, nicht Liebe.`,
          detail: `Michael Murray hat dieses Argument philosophisch ausgearbeitet: Wenn Gottes Existenz und die Folgen von Gut und Böse für jeden überwältigend offenkundig wären, stünde jede Entscheidung unter dem Druck einer übermächtigen Drohung – wie bei einem Menschen, dem jemand eine Pistole an den Kopf hält. Eine echte, freie Hinwendung zum Guten verlangt einen gewissen Spielraum.`,
          voices: [
            {
              person: 'michael-murray',
              role: 'als Religionsphilosoph',
              text: `Murray argumentiert, dass eine ständige, überwältigende Gewissheit über Gott und seine Gerichtsandrohung die menschliche Freiheit faktisch aufheben würde, so wie eine massive Drohung eine Handlung erzwingt. Gottes teilweise Verborgenheit schützt den Raum, in dem Menschen den Charakter ausbilden können, den Gott in ihnen wachsen lassen will.`,
              sources: [{ kind: 'fachliteratur', author: 'Michael J. Murray', work: '„Coercion and the Hiddenness of God", American Philosophical Quarterly 30', year: '1993', status: 'paraphrase' }],
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '16,31', status: 'paraphrase', quote: 'Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, ob jemand von den Toten aufstünde.' },
          ],
          followUps: [
            {
              id: 'juenger-bekamen-beweise',
              objection: `„Aber die Jünger bekamen genau solche Beweise – sie sahen den Auferstandenen und waren trotzdem frei. Warum sie und nicht ich?"`,
              objectionBy: "Alex O'Connor",
              answer: `Sie bekamen sie nicht als Privileg, sondern als Auftrag: Sie sollten Zeugen für alle anderen sein (Apg 1,8). Gott handelt in der Geschichte durch Zeugen – so wie du von den meisten historischen Ereignissen durch Zeugen weißt. Jesus sagte zu Thomas: „Selig sind, die nicht sehen und doch glauben!" (Joh 20,29) – nicht als Lob blinden Glaubens, sondern weil das Zeugnis der Augenzeugen ein echter Weg zur Wahrheit ist. Und viele Menschen berichten bis heute, dass Christus ihnen auf eigene Weise begegnet ist.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '20,29', status: 'paraphrase', quote: 'Selig sind, die nicht sehen und doch glauben!' },
              ],
              questionsBack: [`Glaubst du anderen historischen Berichten nur, wenn du die Ereignisse selbst gesehen hast?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Art von Zeichen würde dich überzeugen – und würdest du es morgen nicht vielleicht als Einbildung deuten?`,
    `Glaubst du, dass Liebe erzwungen werden kann – auch durch überwältigende Gegenwart?`,
    `Hast du schon einmal die Evangelien gelesen mit der Frage: Hat Gott sich hier gezeigt?`,
    `Ist es möglich, dass Gott dich gerade durch dieses Fragen sucht?`,
  ],
  avoid: [
    `„Du hast eben nicht ehrlich gesucht." – Das ist verletzend und anmaßend. Nur Gott kennt das Herz.`,
    `Die Verborgenheit kleinreden. Die Bibel selbst nimmt sie ernst (Ps 13; 22; Hiob).`,
    `Versprechen, dass Gott sich bei jedem auf eine bestimmte Weise oder zu einem bestimmten Zeitpunkt zeigen wird.`,
  ],
  concessions: [
    `Schellenbergs Argument ist eines der stärksten neueren Argumente gegen den Theismus und wird in der Fachphilosophie ernst genommen.`,
    `Es gibt Menschen, die aufrichtig gesucht und den Glauben verloren haben; ihr Schmerz ist real.`,
    `Warum Gott im einzelnen Fall verborgen bleibt, können wir oft nicht sagen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael C. Rea', work: 'The Hiddenness of God', year: '2018', status: 'paraphrase' },
    { kind: 'gegner', author: 'J. L. Schellenberg', work: 'The Hiddenness Argument', year: '2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel Howard-Snyder & Paul K. Moser (Hg.)', work: 'Divine Hiddenness: New Essays', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Verborgenheit Gottes', 'Schellenberg', 'Pascal', 'Freiheit', 'Liebe', 'Menschwerdung'],
  related: [
    'atheismus/keine-beweise-fuer-gott',
    'erkenntnistheorie/agnostizismus',
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'pluralismus/nie-von-jesus-gehoert',
    'theodizee/evidentielles-problem',
    'theodizee/unerhoerte-gebete',
    'weitere-religionen/religion-aus-animismus',
  ],
};

export default claim;
