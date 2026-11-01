import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'pascals-wette',
  title: `„Pascals Wette ist ein feiges und irrationales Argument."`,
  proponents: [
    { name: 'Denis Diderot', role: 'Philosoph der Aufklärung (1713–1784)', work: 'Pensées philosophiques (1746), Nr. 59 – „Ein Imam könnte genauso argumentieren"' },
    { name: 'Voltaire', role: 'Schriftsteller und Philosoph (1694–1778)', work: 'Lettres philosophiques (1734), 25. Brief „Über die Pensées des Herrn Pascal"' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 3 – „Pascal\'s Wager"' },
    { name: 'Michael Martin', role: 'Religionsphilosoph, Boston University (1932–2015)', work: '„Pascal\'s Wager as an Argument for Not Believing in God", Religious Studies 19 (1983)' },
    { name: 'Alan Hájek', role: 'Philosoph, Australian National University', work: '„Waging War on Pascal\'s Wager", Philosophical Review 112 (2003)' },
  ],
  steelman: `Pascals Wette lautet: Wenn du an Gott glaubst und er existiert, gewinnst du unendliches Glück; existiert er nicht, verlierst du wenig. Glaubst du nicht und er existiert, droht dir unendlicher Verlust. Also ist Glauben die klügere Wette. Das klingt schlau, ist aber in jeder Hinsicht schwach. Erstens ist es feige: Man soll aus Angst vor der Hölle glauben, nicht aus Überzeugung. Zweitens funktioniert es für jede Religion – Diderot bemerkte schon 1746, ein Imam könne genauso argumentieren; man müsste also auf unzählige Götter gleichzeitig wetten. Drittens kann man nicht einfach beschließen, etwas zu glauben, wie Dawkins betont. Viertens: Ein allwissender Gott würde den berechnenden Wett-Glauben durchschauen – vielleicht belohnt er gerade ehrliche Zweifler. Fünftens bricht die Entscheidungstheorie mit unendlichen Werten zusammen: Alan Hájek zeigte, dass dann jede Strategie mit auch nur winziger Chance auf späteren Glauben denselben unendlichen Erwartungswert hat. Und wer auf solche Rechnungen hereinfällt, kann von jedem „Pascal-Räuber" ausgenommen werden, der unendlichen Lohn verspricht. Die Wette zeigt vor allem eines: Wer sie braucht, hat keine Belege.`,
  biblical: {
    summary: `Die Bibel kennt den Ernst der Entscheidung und spricht auch vom Abwägen: „Was hülfe es dem Menschen, so er die ganze Welt gewönne und nähme doch Schaden an seiner Seele?" (Mt 16,26). Jesus lobt den, der „die Kosten überschlägt" (Lk 14,28), und vergleicht das Himmelreich mit einem Schatz, für den ein Mensch „vor Freuden" alles verkauft (Mt 13,44). Elia fragte das Volk: „Wie lange hinket ihr auf beiden Seiten?" (1 Kön 18,21). Aber das letzte Motiv ist nicht Furcht, sondern Liebe: „Die völlige Liebe treibt die Furcht aus" (1 Joh 4,18). Und Gott verheißt, sich von denen finden zu lassen, die ihn „von ganzem Herzen suchen" (Jer 29,13).`,
    detail: `- **Mt 16,26:** Jesus selbst argumentiert mit dem unermesslichen Wert der Seele – das ist kein „feiges" Argument, sondern eine Einladung zur Ehrlichkeit über das, was auf dem Spiel steht.
- **Mt 13,44:** Der Mann verkauft alles *vor Freude*, nicht aus Angst – die richtige Haltung des Wettenden.
- **Jer 29,13–14 / Hebr 11,6:** Gott ist ein „Vergelter" derer, die ihn *suchen*. Pascals Wette zielt genau darauf: das Suchen zu beginnen.
- **Jos 24,15 / 1 Kön 18,21:** Neutralität ist in der Schrift keine dauerhafte Option – das entspricht Pascals „Ihr seid schon eingeschifft".`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '16,26', quote: `Was hülfe es dem Menschen, so er die ganze Welt gewönne, und nähme doch Schaden an seiner Seele? Oder was kann der Mensch geben, damit er seine Seele wieder löse?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '13,44', quote: `Abermals ist gleich das Himmelreich einem verborgenen Schatz im Acker, welchen ein Mensch fand und verbarg ihn und ging hin vor Freuden über denselben und verkaufte alles, was er hatte, und kaufte den Acker.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '29,13–14', quote: `Ihr werdet mich suchen und finden. Denn so ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen, spricht der HERR.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,18', quote: `Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Josua', ref: '24,15', quote: `Gefällt es euch aber nicht, daß ihr dem HERRN dienet, so erwählt euch heute, welchem ihr dienen wollt … Ich aber und mein Haus wollen dem HERRN dienen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter kennen keine „Wette" im mathematischen Sinn, aber sie kennen das Abwägen von Zeit und Ewigkeit. Der hl. Antonius, Vater der Mönche aus Ägypten, sagte nach dem Bericht des Athanasius seinen Schülern: Niemand solle meinen, er habe Großes aufgegeben, denn die ganze Erde sei klein im Vergleich zum ganzen Himmel; wer der Tugend wegen etwas lässt, tauscht Kleines gegen Großes ein. Zugleich betont die orthodoxe Tradition, dass der Glaube nicht aus Berechnung, sondern aus Umkehr, Gebet und Liebe wächst – genau der Weg, den Pascal dem Zögernden am Ende seines Fragments empfiehlt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Das Leben des Antonius (Vita Antonii)', ref: '16–17', year: 'um 360', status: 'paraphrase', quote: 'Niemand meine, er habe Großes verlassen; die ganze Erde ist gering gegenüber dem ganzen Himmel. Wer der Tugend wegen auf Irdisches verzichtet, gibt Weniges und empfängt Hundertfaches.' },
    ],
  },
  quickAnswer: `Pascals Wette ist kein Gottesbeweis und war nie als solcher gedacht – Pascal hat in seinen „Pensées" vor allem mit Belegen argumentiert (Christus, Prophetie, die Lage des Menschen). Die Wette richtet sich an jemanden, der meint, die Vernunft könne nicht entscheiden. Ihr Kern ist: Du kannst dich nicht heraushalten – „Ihr seid schon eingeschifft" –, und wenn so viel auf dem Spiel steht, ist es vernünftig, ernsthaft zu suchen. Dass man Glauben nicht per Knopfdruck beschließen kann, wusste Pascal selbst; er rät, Hindernisse abzubauen und zu beten. Ehrlich gesagt: Die Wette ist ein Anstoß zum Suchen, nicht das Hauptargument.`,
  keyPoints: [
    `**Kein Gottesbeweis:** Die Wette setzt die Gottesfrage als offen voraus und fragt, wie man sich *verhalten* soll. Pascals eigentliche Apologetik ist evidenzbasiert.`,
    `**Man ist schon eingeschifft:** Nicht-Wetten ist nicht möglich – wer nicht sucht, lebt faktisch so, als gäbe es Gott nicht.`,
    `**Viele Götter:** Die Wette gilt nur zwischen *ernsthaften* Möglichkeiten; welche Religion wahr ist, entscheiden Belege, nicht die Wette.`,
    `**Glaube ist nicht willkürlich – Pascal wusste das:** Sein Rat: Leidenschaften mindern, Gebet und Gottesdienst üben, die Belege prüfen.`,
    `**Gott belohnt Suchende:** Die Wette zielt nicht auf geheuchelten Glauben, sondern auf ehrliches Suchen (Jer 29,13; Hebr 11,6).`,
    `**Ehrlich:** Die entscheidungstheoretischen Einwände (unendliche Werte, Hájek) sind ernst; man sollte die Wette nie allein verwenden.`,
  ],
  argument: {
    name: 'Pascals Wette (Pensées, Fragment „Infini rien", Lafuma 418 / Brunschvicg 233)',
    summary: 'Wenn die Vernunft nicht entscheidet, gebietet die Klugheit, auf Gott zu setzen – und ihn ernsthaft zu suchen.',
    premises: [
      {
        text: 'P1: Ob Gott existiert, kann (nach Ansicht des Gesprächspartners) die Vernunft allein nicht entscheiden.',
        support: `Pascal spricht einen Skeptiker an, der meint, die Argumente hielten sich die Waage. Er selbst hielt die Gründe für den Glauben für stark – die Wette ist eine Antwort auf eine bestimmte Gesprächssituation.`,
      },
      {
        text: 'P2: Man muss wetten – sich nicht entscheiden ist auch eine Entscheidung.',
        support: `„Il faut parier. Cela n'est pas volontaire, vous êtes embarqué." Wer nicht sucht und nicht glaubt, lebt so, als gäbe es Gott nicht.`,
        sources: [
          { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées, Fragment „Infini rien"', ref: 'Lafuma 418 / Brunschvicg 233', year: 'postum 1670', quote: `Man muss wetten. Das ist nicht freiwillig; ihr seid schon eingeschifft.`, original: 'Il faut parier. Cela n\'est pas volontaire, vous êtes embarqué.', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P3: Auf Gott zu setzen, hat einen unermesslichen möglichen Gewinn und einen vergleichsweise geringen möglichen Verlust.',
        support: `„Wenn ihr gewinnt, gewinnt ihr alles; wenn ihr verliert, verliert ihr nichts." Pascal fügt hinzu, dass man schon in diesem Leben gewinnt: treu, ehrlich, demütig, dankbar, wohltätig, ein aufrichtiger Freund zu werden.`,
        sources: [
          { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées, Fragment „Infini rien"', ref: 'Lafuma 418 / Brunschvicg 233', quote: `Wenn ihr gewinnt, gewinnt ihr alles; wenn ihr verliert, verliert ihr nichts. Wettet also, dass er ist, ohne zu zögern.`, original: 'Si vous gagnez, vous gagnez tout; si vous perdez, vous ne perdez rien. Gagez donc qu\'il est, sans hésiter.', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
    ],
    conclusion: 'Also ist es klug, auf Gott zu setzen – das heißt praktisch: ihn ernsthaft zu suchen, die Hindernisse des Herzens abzubauen und die Gründe des Glaubens zu prüfen.',
  },
  voices: [
    {
      person: 'pascal',
      role: 'als Mathematiker und Apologet',
      text: `Pascal, Mitbegründer der Wahrscheinlichkeitsrechnung, schrieb das Wett-Fragment auf zwei eng beschriebene, vielfach korrigierte Blätter; es war Teil einer unvollendeten Verteidigung des Christentums. Er wusste, dass man nicht auf Befehl glauben kann. Darum lässt er den Gesprächspartner einwenden: „Ich bin so gemacht, dass ich nicht glauben kann." Pascals Antwort: Arbeite daran, dich zu überzeugen – nicht durch Vermehrung der Gottesbeweise, sondern durch Verminderung deiner Leidenschaften. Lerne von denen, die vor dir gezweifelt haben, und tu, was sie taten. Und er nennt nur zwei Arten vernünftiger Menschen: die, die Gott von ganzem Herzen dienen, weil sie ihn kennen, und die, die ihn von ganzem Herzen suchen, weil sie ihn nicht kennen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées, Fragment „Infini rien"', ref: 'Lafuma 418 / Brunschvicg 233', quote: `Arbeitet also daran, euch zu überzeugen – nicht durch Vermehrung der Gottesbeweise, sondern durch Verminderung eurer Leidenschaften.`, original: 'Travaillez donc à vous convaincre, non pas par l\'augmentation des preuves de Dieu, mais par la diminution de vos passions.', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Lafuma 427 / Brunschvicg 194', status: 'paraphrase', quote: 'Es gibt nur zwei Arten von Menschen, die man vernünftig nennen kann: die Gott von ganzem Herzen dienen, weil sie ihn kennen, und die ihn von ganzem Herzen suchen, weil sie ihn nicht kennen.' },
      ],
    },
    {
      person: 'peter-kreeft',
      role: 'als Pascal-Ausleger',
      text: `Kreeft hat Pascals „Pensées" für heutige Leser kommentiert („Christianity for Modern Pagans", 1993). Er betont, dass die Wette nicht an Gläubige, sondern an Gleichgültige gerichtet ist: an Menschen, die die Gottesfrage verdrängen, indem sie sich zerstreuen. Ihr Zweck ist, aufzurütteln – wie ein Feueralarm, nicht wie ein Lehrbuch. Kreeft hebt hervor, dass Pascal unmittelbar nach der Wette die Belege des Christentums anführen wollte; die Wette ist die Tür, nicht das Haus.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter Kreeft', work: 'Christianity for Modern Pagans: Pascal\'s Pensées Edited, Outlined and Explained', year: '1993', status: 'paraphrase', quote: 'Die Wette richtet sich an Gleichgültige und soll zum Suchen bewegen; sie ersetzt nicht die Belege.' },
      ],
    },
    {
      person: 'jeff-jordan',
      role: 'als Religionsphilosoph und Entscheidungstheoretiker',
      text: `Jordan hat in „Pascal's Wager: Pragmatic Arguments and Belief in God" (2006) die modernen Einwände – viele Götter, unendliche Werte, gemischte Strategien – systematisch geprüft. Er verteidigt eine vorsichtigere, „jamesianische" Fassung: Wenn die Belege für zwei ernsthafte Möglichkeiten etwa gleich stark sind und viel auf dem Spiel steht, ist es rational erlaubt, sich von den praktischen Folgen leiten zu lassen. Die Wette gilt dann nicht zwischen beliebig erfundenen Göttern, sondern zwischen „lebendigen" Optionen, für die es tatsächliche Gründe gibt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jeff Jordan', work: 'Pascal\'s Wager: Pragmatic Arguments and Belief in God', year: '2006', status: 'paraphrase', quote: 'Verteidigung einer eingeschränkten pragmatischen Wette zwischen ernsthaften Optionen gegen die Standard-Einwände.' },
      ],
    },
    {
      person: 'kierkegaard',
      role: 'als Philosoph der Entscheidung',
      text: `Kierkegaard hat wie Pascal betont, dass die Gottesfrage keine Zuschauerfrage ist. Der „objektive" Betrachter, der alle Gründe sammelt und die Entscheidung endlos aufschiebt, verfehlt die Wahrheit, die ihn persönlich angeht. Existieren heißt wählen. Kierkegaard verachtete einen bequemen Kulturchristentum-Glauben ohne persönliche Hingabe ebenso wie die Haltung des Schöngeistes, der sich nie festlegt. Seine Botschaft trifft den Kern der Wette: Wer nicht wählt, hat schon gewählt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Entweder – Oder (1843); Abschließende unwissenschaftliche Nachschrift (1846)', status: 'paraphrase', quote: 'Die religiöse Wahrheit verlangt persönliche Entscheidung; der bloße Zuschauer verfehlt sie.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'feige-aus-angst',
      objection: `„Die Wette ist feige: Man soll glauben, weil man Angst vor der Hölle hat. Ein solcher Glaube ist nichts wert – er ist Versicherungsdenken."`,
      objectionBy: 'Voltaire (Lettres philosophiques, 1734, sinngemäß) / Richard Dawkins',
      answer: `Zu bedenken, was auf dem Spiel steht, ist nicht Feigheit, sondern Ehrlichkeit – Jesus selbst fragt: „Was hülfe es dem Menschen, so er die ganze Welt gewönne und nähme Schaden an seiner Seele?" (Mt 16,26). Aber die Wette ist nur ein Anstoß. Ihr Ziel ist, dass jemand anfängt zu suchen; das letzte Motiv des Glaubens ist Liebe, nicht Furcht (1 Joh 4,18). Der Mann im Gleichnis verkauft alles für den Schatz „vor Freuden" (Mt 13,44).`,
      sources: [
        { kind: 'gegner', author: 'Voltaire', work: 'Lettres philosophiques, 25. Brief („Sur les Pensées de M. Pascal")', year: '1734', status: 'paraphrase', quote: 'Der Gedanke einer Wette mit Gewinn und Verlust sei der Würde des Gegenstands unangemessen.', note: 'Wortlaut nicht am Original geprüft; nur sinngemäß verwenden.' },
      ],
      followUps: [
        {
          id: 'gott-durchschaut-wetter',
          objection: `„Ein allwissender Gott würde doch durchschauen, dass du nur aus Berechnung glaubst. Wahrscheinlich belohnt er eher einen ehrlichen Zweifler als einen berechnenden Wetter."`,
          objectionBy: 'Richard Dawkins (The God Delusion, Kap. 3)',
          answer: `Einverstanden: Ein geheuchelter Glaube nützt nichts. Aber genau das empfiehlt Pascal nicht. Er sagt: Suche Gott von ganzem Herzen. Und der Gott der Bibel verheißt: „Wenn ihr mich von ganzem Herzen suchen werdet, will ich mich von euch finden lassen" (Jer 29,13). Ein ehrlicher Zweifler, der sucht, ist genau der Mensch, den Pascal vernünftig nennt. Die Wette ruft nicht zur Heuchelei, sondern zum Suchen auf.`,
          followUps: [
            {
              id: 'perverser-gott',
              objection: `„Vielleicht gibt es aber einen Gott, der Gläubige bestraft und Atheisten belohnt. Das ist genauso möglich – und dann hebt sich deine Wette auf."`,
              objectionBy: 'Michael Martin (Religious Studies, 1983)',
              answer: `Logisch möglich ist vieles, aber nicht alles ist gleich wahrscheinlich. Für einen Gott, der Unglauben an sich selbst belohnt, gibt es keinerlei Gründe – keine Offenbarung, keine Geschichte, kein Argument; er ist für den Einwand erfunden. Für den Gott der Bibel gibt es Gründe: das Dasein und die Ordnung der Welt, die Auferstehung Jesu, das moralische Gesetz. Darum gilt die Wette nur zwischen *ernsthaften* Möglichkeiten.`,
              sources: [
                { kind: 'gegner', author: 'Michael Martin', work: '„Pascal\'s Wager as an Argument for Not Believing in God", Religious Studies 19', year: '1983', status: 'paraphrase', quote: 'Ein Gott, der Ungläubige belohnt, sei ebenso denkbar; die Wette könne daher sogar gegen den Glauben sprechen.' },
              ],
              followUps: [
                {
                  id: 'wer-entscheidet-ernsthaft',
                  objection: `„Und wer entscheidet, was ‚ernsthaft' ist? Wahrscheinlichkeiten für Götter sind rein subjektiv."`,
                  objectionBy: 'Alan Hájek / Graham Oppy (sinngemäß)',
                  answer: `Die Belege entscheiden – und genau deshalb ist die Wette allein nicht genug. Auch du hältst nicht jede Möglichkeit für gleich wahrscheinlich: Du fürchtest dich nicht vor Zeus und nicht vor dem fliegenden Spaghettimonster. Im Alltag urteilen wir ständig über Plausibilität. Darum gehört die Wette mit den Argumenten zusammen: Erst die Gründe prüfen, dann erkennen, wie viel auf dem Spiel steht.`,
                  detail: `Siehe „Der Glaube an Gott ist wie der Glaube an Russells Teekanne oder das Spaghettimonster".`,
                  questionsBack: [`Hältst du die Möglichkeit, dass der Gott der Bibel existiert, für genauso unwahrscheinlich wie Zeus? Warum?`],
                },
              ],
            },
          ],
        },
        {
          id: 'diesseits-kosten',
          objection: `„Pascal sagt, man verliere nichts. Falsch: Man verliert ein Leben voller Regeln, Fasten, Sonntagspflichten und schlechtem Gewissen – und vielleicht seine intellektuelle Redlichkeit."`,
          objectionBy: 'Richard Dawkins / Christopher Hitchens (sinngemäß)',
          answer: `Pascal sah das anders: Wer auf Gott setzt, gewinnt schon in diesem Leben – er wird „treu, ehrlich, demütig, dankbar, wohltätig, ein aufrichtiger Freund". Die koptischen Christen erleben das Fasten nicht als Verlust, sondern als Freiheit und Freude, die zum Fest führt. Und intellektuelle Redlichkeit verlangt gerade, die Gründe des Glaubens zu prüfen, statt sie ungeprüft abzulehnen. Ehrlich ist aber auch: Der Glaube kostet etwas – Jesus sagt, man solle „die Kosten überschlagen" (Lk 14,28).`,
          sources: [
            { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées, Fragment „Infini rien"', ref: 'Lafuma 418 / Brunschvicg 233', status: 'paraphrase', quote: 'Ihr werdet treu, ehrlich, demütig, dankbar, wohltätig, ein aufrichtiger, wahrhaftiger Freund sein.' },
          ],
        },
      ],
    },
    {
      id: 'viele-goetter',
      objection: `„Diderot hat es schon 1746 gesagt: Ein Imam könnte genauso argumentieren. Auch der Islam droht mit der Hölle, auch der Hinduismus hat Götter. Auf welchen Gott soll ich wetten?"`,
      objectionBy: 'Denis Diderot (Pensées philosophiques, 1746)',
      answer: `Die Wette entscheidet nicht zwischen den Religionen – das müssen die Belege tun. Sie zeigt nur, dass die Gottesfrage zu wichtig ist, um sie zu ignorieren. Pascal selbst wollte nach der Wette zeigen, warum gerade das Christentum glaubwürdig ist: durch Christus, die Prophetie und die Geschichte. Der Einwand vieler Götter ist also kein Grund, nicht zu suchen, sondern ein Grund, *sorgfältig* zu suchen.`,
      sources: [
        { kind: 'gegner', author: 'Denis Diderot', work: 'Pensées philosophiques', ref: 'Nr. 59', year: '1746', status: 'paraphrase', quote: 'Ein Imam könne mit demselben Argument für seine Religion werben.' },
      ],
      followUps: [
        {
          id: 'islam-gleiche-drohung',
          objection: `„Nach dem Koran ist der Glaube an die Trinität eine schwere Sünde. Nach deiner eigenen Wettlogik müsstest du also lieber Muslim werden – sicher ist sicher."`,
          objectionBy: 'Mohammed Hijab / Diderot-Argument (sinngemäß)',
          answer: `Die Wette ist kein Instrument, um zwischen Religionen zu wählen; dafür braucht es historische und theologische Prüfung. Ein Beispiel: Der Koran bestreitet die Kreuzigung Jesu (Sure 4:157), die aber zu den am besten gesicherten Fakten der antiken Geschichte gehört – auch säkulare Historiker sind sich darin nahezu einig. Mit Respekt vor Muslimen: Wer die Religionen vergleicht, muss solche Fragen ernsthaft prüfen, nicht Drohungen gegeneinander aufrechnen.`,
          sources: [
            { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:157', quote: '… und sie haben ihn nicht getötet und haben ihn nicht gekreuzigt, sondern es kam ihnen nur so vor.', translation: 'nach Bubenheim/Elyas', status: 'paraphrase', url: 'https://quran.com/4/157' },
          ],
          detail: `Siehe die Themenblöcke zum Islam, besonders „Das Islamische Dilemma".`,
          followUps: [
            {
              id: 'unendlich-viele-goetter',
              objection: `„Es gibt unendlich viele mögliche Götter. Dann ist die Wahrscheinlichkeit für jeden einzelnen null, und die Wette ist wertlos."`,
              objectionBy: 'Graham Oppy / Alan Hájek (sinngemäß)',
              answer: `Nur, wenn man allen Möglichkeiten dieselbe Wahrscheinlichkeit gibt – und das tut niemand, auch in der Wissenschaft nicht. Zu jeder Beobachtung gibt es unendlich viele logisch mögliche Erklärungen, und trotzdem halten wir die einfachste, best begründete für wahrscheinlich. Ein erfundener Gott ohne Offenbarung, Geschichte und Argumente bekommt keine ernsthafte Wahrscheinlichkeit. Die ernsthaften Kandidaten sind wenige.`,
            },
          ],
        },
      ],
    },
    {
      id: 'glaube-nicht-willentlich',
      objection: `„Glauben ist keine Entscheidung. Ich kann mich nicht dazu entschließen, an Gott zu glauben, nur weil es nützlich wäre – so wenig, wie ich mich entschließen kann, zu glauben, dass der Himmel grün ist."`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 3)',
      answer: `Völlig richtig – und Pascal wusste das genau. Er lässt seinen Gesprächspartner sagen: „Ich bin so gemacht, dass ich nicht glauben kann." Seine Antwort: Man kann nicht direkt beschließen zu glauben, aber man kann sich auf den Weg machen – die eigenen Widerstände ehrlich ansehen, beten, die Gründe prüfen, mit Gläubigen leben. So wie man nicht beschließen kann, Bach zu lieben, aber sich ihm öffnen kann, indem man ihn hört.`,
      followUps: [
        {
          id: 'abetira-gehirnwaesche',
          objection: `„Pascal sagt sogar, Weihwasser und Messen würden einen ‚verdummen' (abêtir). Das ist Selbstgehirnwäsche!"`,
          objectionBy: 'Richard Dawkins / Voltaire (sinngemäß)',
          answer: `„Abêtir" wird oft als „verdummen" übersetzt; viele Ausleger verstehen es als „einfach werden wie ein Kind" – den stolzen Widerstand ablegen, der den Blick verstellt (vgl. Mt 18,3). Pascal rät nicht, die Vernunft abzuschalten – direkt vorher sagt er, man solle nicht die Beweise, sondern die *Leidenschaften* verringern. Gewohnheiten formen unsere Wahrnehmung immer: Wer nie Musik hört, wird sie nie verstehen; wer Gott nie sucht, wird ihn kaum finden. Und auch das Vermeiden von Gebet und Kirche ist eine Gewohnheit, die prägt.`,
          sources: [
            { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées, Fragment „Infini rien"', ref: 'Lafuma 418 / Brunschvicg 233', quote: `Das wird euch glauben machen und euch einfältig machen.`, original: 'Naturellement même cela vous fera croire et vous abêtira.', translation: 'eigene Übersetzung (abêtir: wörtlich „zum Tier/einfältig machen"; Deutung umstritten)', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'gewohnheit-falsche-ueberzeugungen',
              objection: `„Aber mit Gewohnheiten und Ritualen kann man Menschen alles einreden – das machen Sekten genauso."`,
              objectionBy: 'Peter Boghossian (sinngemäß)',
              answer: `Richtig – deshalb ersetzen Rituale nicht die Prüfung der Wahrheit, und das Christentum fordert diese Prüfung selbst: „Prüfet alles" (1 Thess 5,21), „Ist Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,14). Pascals Rat räumt Hindernisse weg; er ersetzt nicht die Gründe. Eine Sekte verbietet Fragen; die christliche Tradition von Justin bis heute hat sich den Fragen der Philosophen gestellt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'unendliche-werte',
      objection: `„Entscheidungstheoretisch ist die Wette ungültig. Mit unendlichen Werten hat jede ‚gemischte' Strategie – etwa: eine Münze werfen und nur bei Kopf glauben – denselben unendlichen Erwartungswert wie das direkte Glauben. Die Rechnung bricht zusammen."`,
      objectionBy: 'Alan Hájek (Philosophical Review, 2003)',
      answer: `Das ist ein ernster, technischer Einwand, den man ehrlich anerkennen sollte. Es gibt Antworten – etwa, mit sehr großen statt unendlichen Werten zu rechnen oder Unendlichkeiten genauer zu vergleichen (Jordan, Bartha) –, aber die Debatte ist nicht abgeschlossen. Der Kern bleibt davon unberührt: Wenn etwas von unermesslichem Wert auf dem Spiel steht und die Möglichkeit ernst ist, ist es vernünftig, die Frage gründlich zu untersuchen, statt sie beiseitezuschieben.`,
      sources: [
        { kind: 'gegner', author: 'Alan Hájek', work: '„Waging War on Pascal\'s Wager", The Philosophical Review 112', year: '2003', status: 'paraphrase', quote: 'Mit unendlichen Nutzwerten haben auch gemischte Strategien unendlichen Erwartungswert; die Wette in ihrer klassischen Form ist ungültig.' },
      ],
      followUps: [
        {
          id: 'pascals-raeuber',
          objection: `„Nach deiner Logik müsste ich jedem Straßenräuber meine Brieftasche geben, der mir verspricht, mich dafür in einem anderen Universum unendlich zu belohnen – die Wahrscheinlichkeit ist winzig, aber der Gewinn unendlich. Das ist ‚Pascals Raubüberfall'."`,
          objectionBy: 'Nick Bostrom („Pascal\'s Mugging", Analysis 69, 2009)',
          answer: `Genau deshalb darf man die Wette nie allein verwenden. Der „Räuber" stellt eine willkürliche Behauptung ohne jeden Beleg auf. Der christliche Glaube dagegen beruft sich auf Gründe, die man prüfen kann – vom Dasein der Welt bis zur Auferstehung Jesu. Die Lehre aus Bostroms Gedankenexperiment ist: Erst die Plausibilität prüfen, dann den Einsatz bedenken. Das ist genau die richtige Reihenfolge.`,
          sources: [
            { kind: 'gegner', author: 'Nick Bostrom', work: '„Pascal\'s Mugging", Analysis 69', year: '2009', status: 'paraphrase', quote: 'Gedankenexperiment: Ein Räuber verspricht astronomischen Gewinn für eine kleine Gabe; naive Erwartungswertrechnung wird ausnutzbar.' },
          ],
          questionsBack: [`Ist der christliche Glaube für dich wirklich so belegfrei wie das Versprechen eines Straßenräubers – oder gibt es Gründe, die du prüfen müsstest?`],
        },
      ],
    },
    {
      id: 'wette-ersetzt-belege',
      objection: `„Dass ihr überhaupt eine Wette braucht, zeigt: Ihr habt keine Belege. Die Wette ist ein Eingeständnis der Schwäche."`,
      objectionBy: 'Richard Dawkins / Christopher Hitchens',
      answer: `Pascals „Pensées" sind zum größten Teil Belege: über das Elend und die Größe des Menschen, über die Prophetie, über Christus. Die Wette richtet sich an einen bestimmten Gesprächspartner, der meint, die Vernunft könne nicht entscheiden. Ehrlich gesagt: Ich würde die Wette nie als Hauptargument verwenden. Sie ist ein Weckruf – die Gründe für den Glauben stehen woanders: Kosmologie, Moral, Bewusstsein, die Auferstehung Jesu.`,
      followUps: [
        {
          id: 'kierkegaard-blinder-sprung',
          objection: `„Am Ende ist Glaube also doch ein blinder Sprung ins Dunkle – wie Kierkegaard sagt."`,
          objectionBy: 'populäre Kierkegaard-Lesart',
          answer: `Kierkegaards „Sprung" meint nicht, gegen die Vernunft zu springen, sondern sich persönlich festzulegen, wo es keine mathematische Gewissheit gibt – so wie man heiratet, ohne die Zukunft beweisen zu können. Jeder Mensch tut das in den großen Fragen des Lebens. Der orthodoxe Glaube ist begründetes Vertrauen: Er geht über das Beweisbare hinaus, aber nicht gegen die Gründe.`,
          followUps: [
            {
              id: 'einfach-agnostisch-bleiben',
              objection: `„Dann wette ich eben gar nicht und bleibe Agnostiker. Ich lege mich nicht fest."`,
              objectionBy: 'Agnostiker (sinngemäß)',
              answer: `Das ist Pascals Pointe: „Ihr seid schon eingeschifft." Man lebt jeden Tag entweder so, als ob Gott wichtig wäre, oder so, als ob er es nicht wäre – betet oder betet nicht, sucht oder sucht nicht. Agnostizismus als ehrliche Zwischenstation ist gut, wenn man sucht. Als Dauerzustand ist er praktisch eine Entscheidung. Josua sagte: „Erwählt euch heute, wem ihr dienen wollt" (Jos 24,15).`,
              detail: `Siehe „Agnostizismus ist die einzig ehrliche Position".`,
              questionsBack: [`Lebst du im Alltag eher so, als gäbe es Gott, oder so, als gäbe es ihn nicht?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn so viel auf dem Spiel steht – hast du die Gründe für den christlichen Glauben ernsthaft geprüft?`,
    `Kann man sich aus der Gottesfrage wirklich heraushalten, oder lebt man faktisch schon eine Antwort?`,
    `Hältst du alle Götter für gleich wahrscheinlich? Warum fürchtest du dich nicht vor Zeus?`,
    `Was würde es für dich bedeuten, Gott „von ganzem Herzen zu suchen"?`,
  ],
  avoid: [
    `Die Wette als Hauptargument oder gar als Gottesbeweis verwenden – sie ist es nicht und war nie so gemeint.`,
    `Mit der Hölle drohen, um jemanden zum Glauben zu „bewegen". Das verzerrt Pascal und das Evangelium.`,
    `So tun, als hätten die entscheidungstheoretischen Einwände (Hájek) keine Kraft – sie sind ernst.`,
  ],
  concessions: [
    `Die klassische Wette mit unendlichen Werten hat ernste entscheidungstheoretische Probleme, die nicht abschließend gelöst sind.`,
    `Die Wette allein kann nicht zwischen Religionen entscheiden; sie setzt voraus, dass man die Belege prüft.`,
    `Ein Glaube, der nur aus Furcht oder Berechnung entsteht, ist nicht der Glaube, den das Evangelium meint.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment „Infini rien" (Lafuma 418 / Brunschvicg 233)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Kreeft', work: 'Christianity for Modern Pagans', year: '1993', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jeff Jordan', work: 'Pascal\'s Wager: Pragmatic Arguments and Belief in God', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William James', work: '„The Will to Believe"', year: '1896', status: 'paraphrase' },
    { kind: 'gegner', author: 'Alan Hájek', work: '„Waging War on Pascal\'s Wager", Philosophical Review 112', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Pascal', 'Wette', 'Entscheidungstheorie', 'Glaube und Wille', 'Agnostizismus'],
  related: [
    'erkenntnistheorie/agnostizismus',
    'atheismus/teekanne-spaghettimonster',
    'erkenntnistheorie/glaube-ohne-beweise',
    'sehnsucht-schoenheit-wette/sehnsucht-beweist-nichts',
    'hoelle/hoelle-angstmache',
    'islam-dilemma',
  ],
};

export default claim;
