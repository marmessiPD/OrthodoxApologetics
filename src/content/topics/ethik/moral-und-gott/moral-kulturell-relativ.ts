import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'moral-kulturell-relativ',
  title: `„Moral ist kulturell relativ."`,
  proponents: [
    { name: 'Ruth Benedict', role: 'Kulturanthropologin, Columbia University', work: 'Patterns of Culture (1934); „Anthropology and the Abnormal" (1934)' },
    { name: 'Melville Herskovits', role: 'Anthropologe, Northwestern University', work: 'Cultural Relativism (1972)' },
    { name: 'Richard Rorty', role: 'Philosoph, Stanford', work: 'Contingency, Irony, and Solidarity (1989)' },
    { name: 'Michael Ruse', role: 'Wissenschaftsphilosoph', work: 'Taking Darwin Seriously (1986)' },
  ],
  steelman: `Ein Blick in die Ethnologie zeigt eine verwirrende Vielfalt: In manchen Kulturen war Polygamie die Norm, in anderen Kindesaussetzung, Blutrache, Witwenverbrennung oder rituelle Kopfjagd. Was in einer Gesellschaft als heilige Pflicht galt, war in einer anderen ein Verbrechen. Die Anthropologin Ruth Benedict folgerte: Moral ist ein bequemer Ausdruck für sozial gebilligte Gewohnheiten. Wer behauptet, seine Moral sei die objektiv richtige, verwechselt die Normen seiner eigenen Kultur mit universellen Wahrheiten – genau diese Arroganz hat Kolonialismus und Missionierung angetrieben. Die moralisch reife Haltung ist Toleranz: Andere Kulturen nach ihren eigenen Maßstäben verstehen, statt sie nach unseren zu verurteilen. Auch die Bibel selbst zeigt Wandel: Polygamie war im AT erlaubt, im NT nicht; Sklaverei wurde geduldet, heute verurteilt. Moral entwickelt sich – sie ist nicht ewig.`,
  biblical: {
    summary: `Die Bibel kennt die Vielfalt menschlicher Sitten, aber sie lehrt eine **gemeinsame Menschheit** und ein **gemeinsames Gewissen**: Gott hat „aus einem Blut aller Menschen Geschlechter gemacht" (Apg 17,26), und das Gesetz ist allen „ins Herz geschrieben" (Röm 2,15). Die Propheten Israels verurteilten nicht nur Israel, sondern auch fremde Völker für Grausamkeiten, die diese nach keinem geschriebenen Gesetz kannten – etwa das Aufschlitzen schwangerer Frauen (Am 1,13). Das setzt voraus, dass es Maßstäbe gibt, die für alle gelten. Zugleich zeigt die Schrift eine **fortschreitende Offenbarung**: Jesus erklärt, dass Mose manches „wegen eurer Herzenshärtigkeit" zuließ, „von Anfang an aber ist's nicht also gewesen" (Mt 19,8). Die Anwendung ändert sich, das Prinzip bleibt.`,
    detail: `**Amos 1–2** ist ein Schlüsseltext: Der Prophet verkündet Gottes Gericht über Damaskus, Gaza, Tyrus, Edom, Ammon und Moab – Völker, die nicht unter der Tora standen – wegen Kriegsgräueln, Menschenhandel und Vertragsbruch. Erst dann kommt er zu Juda und Israel. Die Botschaft: Es gibt eine Moral, die jeder Mensch kennen kann und für die jeder verantwortlich ist.

**Fortschreitende Offenbarung ist kein Relativismus.** Dass Gott ein Volk Schritt für Schritt zu höherer Einsicht führt (Polygamie geduldet, aber nie als Ideal; Mt 19,4–8 verweist auf den Schöpfungsanfang), zeigt einen *festen Maßstab*, auf den hin sich das Volk bewegt. Relativismus kennt keinen solchen Maßstab und damit auch keinen Fortschritt.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', quote: `…und hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Amos', ref: '1,13', quote: `Um drei und vier Laster willen der Kinder Ammon will ich ihrer nicht schonen, darum daß sie die Schwangeren in Gilead zerrissen haben.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '19,8', quote: `Mose hat euch erlaubt zu scheiden von euren Weibern wegen eures Herzens Härtigkeit; von Anbeginn aber ist's nicht also gewesen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter erkannten in den Sitten der Völker sowohl Verdunkelung als auch Wahrheitsspuren. Augustinus formulierte den Grundsatz, dass ein ungerechtes Gesetz kein Gesetz ist – es gibt also einen Maßstab über jedem menschlichen Gesetz (De libero arbitrio I,5,11). Die koptische Kirche hat in ihrer Mission – nach Nubien, Äthiopien und heute weltweit – die Kultur der Völker geachtet, Liturgien in deren Sprachen gefeiert und zugleich das Evangelium als Maßstab für alle Kulturen verkündet: Christus ist nicht Besitz einer Kultur, sondern Richter und Erlöser aller.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'De libero arbitrio', ref: 'I,5,11', year: 'um 388–395', quote: `Ein Gesetz, das nicht gerecht ist, scheint mir kein Gesetz zu sein.`, original: 'Nam mihi lex esse non videtur, quae iusta non fuerit.', translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der heutigen Ethnologie gilt der radikale normative Relativismus der 1930er-Jahre als überholt. Der Anthropologe Donald E. Brown hat in *Human Universals* (1991) Hunderte Merkmale zusammengestellt, die in allen bekannten Kulturen vorkommen – darunter Unterscheidungen von richtig und falsch, Verbote von Mord und Inzest innerhalb der Gruppe, Gegenseitigkeit, Empathie und Schuldgefühle. Moralpsychologen wie Jonathan Haidt beschreiben eine begrenzte Zahl universeller moralischer „Grundlagen", die unterschiedlich gewichtet werden. In der Philosophie unterscheidet man **deskriptiven** Relativismus (Kulturen urteilen verschieden – unstrittig) von **normativem** Relativismus (was richtig ist, hängt von der Kultur ab – unter Fachphilosophen eine Minderheitenposition).`,
    sources: [
      { kind: 'wissenschaft', author: 'Donald E. Brown', work: 'Human Universals', year: '1991', quote: `Liste von Merkmalen, die in allen bekannten Kulturen vorkommen, darunter moralische Unterscheidungen, Gegenseitigkeit, Verbote von Mord und Inzest.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Ruth Benedict', work: '„Anthropology and the Abnormal", Journal of General Psychology 10', year: '1934', quote: `Moral sei ein bequemer Ausdruck für sozial gebilligte Gewohnheiten.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jonathan Haidt', work: 'The Righteous Mind', year: '2012', quote: `Moralisches Empfinden beruht auf wenigen universellen Grundlagen (Fürsorge, Fairness, Loyalität, Autorität, Heiligkeit, Freiheit), die Kulturen unterschiedlich gewichten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass Kulturen verschieden urteilen, stimmt – aber daraus folgt nicht, dass niemand recht hat. Oft streiten sie über Tatsachen, nicht über Werte, und unter der Vielfalt liegt eine erstaunliche Übereinstimmung: Mord, Verrat und Grausamkeit gegen Unschuldige gelten überall als falsch. Und wenn Moral nur Kultur wäre, dann wären Martin Luther King und die Gegner der Witwenverbrennung im Unrecht gewesen, weil sie gegen ihre Gesellschaft standen. Sogar die Forderung nach Toleranz setzt voraus, dass Toleranz *für alle* gut ist – also eine objektive Moral.`,
  keyPoints: [
    `**Verschiedenheit ≠ Beliebigkeit:** Dass Kulturen verschieden urteilen (deskriptiv), heißt nicht, dass alle recht haben (normativ).`,
    `**Streit über Tatsachen:** Wer an Hexen glaubte, verbrannte sie; wir glauben nicht an solche Hexen – der Unterschied liegt im Weltbild, nicht im Wert „Schutz der Gemeinschaft" (C. S. Lewis).`,
    `**Gemeinsame Grundlage:** Ethnologen finden universelle Moralmerkmale (Donald Brown); Lewis nannte es das „Tao".`,
    `**Das Reformer-Problem:** Im Relativismus sind Wilberforce, Martin Luther King und die Gegner der Witwenverbrennung per Definition im Unrecht.`,
    `**Toleranz widerlegt Relativismus:** „Jeder soll tolerant sein" ist selbst ein universeller Anspruch.`,
    `**Nürnberg:** Die Angeklagten beriefen sich auf geltendes Recht; die Welt berief sich auf ein höheres Recht.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Kenner der Weltliteratur',
      text: `Lewis hat im Anhang von *The Abolition of Man* (1943) Moralsätze aus altägyptischen, babylonischen, chinesischen, indischen, griechischen, nordischen und biblischen Quellen nebeneinandergestellt – Gebote zur Güte, zur Pflicht gegenüber Eltern und Kindern, zur Ehrlichkeit, zur Gerechtigkeit, zur Barmherzigkeit. Er nannte diese gemeinsame Grundlage das „Tao". Seine Pointe: Die Unterschiede zwischen den Kulturen sind real, aber sie sind Unterschiede innerhalb einer gemeinsamen moralischen Welt – nicht zwischen völlig fremden Moralen.

In *Mere Christianity* fügt er hinzu: Dass wir heute keine Hexen mehr verbrennen, liegt nicht daran, dass wir moralischer sind, sondern dass wir nicht mehr glauben, dass es Menschen gibt, die sich dem Teufel verschrieben haben, um ihre Nachbarn zu töten.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', ref: 'Anhang „Illustrations of the Tao"', year: '1943', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I, Kap. 2', year: '1952', status: 'paraphrase' },
      ],
    },
    {
      person: 'martin-luther-king',
      role: 'als Bürgerrechtler',
      text: `In seinem *Brief aus dem Gefängnis von Birmingham* (1963) musste King erklären, warum er Gesetze brach, die in seiner Gesellschaft gültig waren. Seine Antwort war eine Absage an den Relativismus: Es gibt gerechte und ungerechte Gesetze. Ein gerechtes Gesetz stimmt mit dem Sittengesetz oder dem Gesetz Gottes überein; ein ungerechtes nicht. King beruft sich ausdrücklich auf Augustinus („ein ungerechtes Gesetz ist überhaupt kein Gesetz") und Thomas von Aquin. Ohne einen Maßstab über der Gesellschaft wäre die Bürgerrechtsbewegung nur eine Interessengruppe gewesen – mit ihm war sie eine prophetische Bewegung.`,
      sources: [
        { kind: 'sonstiges', author: 'Martin Luther King Jr.', work: 'Letter from Birmingham Jail', year: '1963', quote: `Ich stimme dem hl. Augustinus zu, dass „ein ungerechtes Gesetz überhaupt kein Gesetz ist". … Ein gerechtes Gesetz ist eine von Menschen gemachte Regel, die mit dem Sittengesetz oder dem Gesetz Gottes übereinstimmt.`, original: 'I would agree with St. Augustine that "an unjust law is no law at all." … A just law is a man-made code that squares with the moral law or the law of God.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'mangalwadi',
      role: 'als indischer Sozialreformer',
      text: `Vishal Mangalwadi erzählt in *The Book That Made Your World* (2011) die Geschichte der Reformen in Indien aus indischer Perspektive. Die Abschaffung der Witwenverbrennung (Sati) 1829 war nicht einfach ein „westlicher" Import: Sie wurde von dem Hindu-Reformer Ram Mohan Roy ebenso vorangetrieben wie von dem Missionar William Carey, der Fälle dokumentierte und öffentlich Druck machte. Mangalwadi argumentiert, dass die biblische Lehre von der Würde jedes Menschen – auch der Witwe – den Maßstab lieferte, an dem eine jahrhundertealte Praxis als Unrecht erkannt wurde. Ein Relativist hätte sie als „kulturelle Eigenart" respektieren müssen.`,
      sources: [{ kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The Book That Made Your World', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Rechtsphilosoph',
      text: `Augustinus unterscheidet zwischen dem zeitlichen Gesetz, das Staaten erlassen und das sich ändern kann, und dem ewigen Gesetz, an dem alles zeitliche Recht gemessen wird. Ein Gesetz, das diesem ewigen Maßstab widerspricht, verdient den Namen nicht. Berühmt ist auch sein Wort aus dem *Gottesstaat*: Was sind Reiche ohne Gerechtigkeit anderes als große Räuberbanden? Ohne einen Maßstab der Gerechtigkeit über dem Staat lässt sich zwischen einem Rechtsstaat und einer Bande nicht unterscheiden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'De libero arbitrio', ref: 'I,5,11; I,6,15', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'De civitate Dei', ref: 'IV,4', year: '413–426', quote: `Was sind Reiche, wenn die Gerechtigkeit fehlt, anderes als große Räuberbanden?`, original: 'Remota itaque iustitia quid sunt regna nisi magna latrocinia?', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Missionar in vielen Kulturen',
      text: `Paulus bewegte sich zwischen Juden, Griechen, Römern und „Barbaren". Er passte sich kulturell an („den Juden ein Jude, den Griechen ein Grieche", 1 Kor 9,20–22) und achtete Sitten, wo sie nicht im Widerspruch zum Evangelium standen. Zugleich verkündete er auf dem Areopag allen Völkern, dass Gott „allen Menschen an allen Enden gebietet, Buße zu tun" (Apg 17,30) – ein Maßstab, der für alle Kulturen gilt. Kulturelle Anpassung in der Form, Universalität in der Sache: Das ist die christliche Antwort auf den Relativismus.`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26–31', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kulturen-verschieden',
      objection: `Was in einer Kultur gut ist, ist in einer anderen böse: Polygamie, Kannibalismus, Witwenverbrennung, Blutrache. Wer bist du, andere Kulturen zu verurteilen?`,
      objectionBy: 'Ruth Benedict',
      answer: `Dass Kulturen verschieden urteilen, bestreite ich nicht. Aber erstens streiten sie oft über Tatsachen, nicht über Werte: Wer glaubte, Hexen töteten Kinder, verbrannte sie; wir verbrennen keine, weil wir das nicht glauben – den Wert „Schutz der Kinder" teilen wir. Zweitens gibt es eine erstaunliche Übereinstimmung: In allen bekannten Kulturen gelten Mord innerhalb der Gemeinschaft, Verrat und grundlose Grausamkeit als falsch. Und drittens: Wenn niemand andere Kulturen beurteilen dürfte, dürften wir auch die Sklaverei nicht verurteilen.`,
      questionsBack: [
        `Ist es für dich falsch, dass in manchen Kulturen Mädchen beschnitten oder Witwen verbrannt wurden – oder nur „anders"?`,
      ],
      followUps: [
        {
          id: 'sati-echter-konflikt',
          objection: `Bei der Witwenverbrennung ging es aber nicht um Tatsachen, sondern um echte Werte: Ehre, Treue, religiöse Pflicht. Das war ein echter Wertekonflikt.`,
          objectionBy: 'Melville Herskovits',
          answer: `Gut, dann frage ich: War das Verbot der Witwenverbrennung 1829 moralischer Fortschritt oder kultureller Imperialismus? Der Hindu-Reformer Ram Mohan Roy kämpfte ebenso dagegen wie der Missionar William Carey – es war also kein Konflikt „Westen gegen Osten", sondern ein Konflikt um die Würde der Frau. Wenn du sagst, es war Fortschritt, gibst du einen Maßstab über den Kulturen zu. Wenn nicht, musst du sagen, dass die verbrannten Frauen kein Unrecht erlitten haben.`,
          followUps: [
            {
              id: 'fortschritt-illusion',
              objection: `Moralischer „Fortschritt" ist eine Illusion. Wir nennen einfach unsere heutigen Werte „Fortschritt", weil sie unsere sind.`,
              objectionBy: 'Richard Rorty',
              answer: `Dann war die Abschaffung der Sklaverei kein Fortschritt, das Frauenwahlrecht kein Fortschritt, das Ende der Rassentrennung kein Fortschritt – nur Geschmackswandel. Kaum jemand kann das ernsthaft vertreten, auch du lebst nicht danach. Martin Luther King hat sich gerade nicht auf „unsere Werte" berufen, sondern auf ein Gesetz über allen Gesetzen: Ein ungerechtes Gesetz, sagte er mit Augustinus, ist überhaupt kein Gesetz.`,
            },
          ],
        },
      ],
    },
    {
      id: 'relativismus-toleranz',
      objection: `Relativismus führt zu Toleranz. Wer an eine absolute Moral glaubt, wird intolerant und missioniert, unterdrückt, führt Kreuzzüge.`,
      objectionBy: 'Richard Rorty',
      answer: `Merkst du, dass „Man soll tolerant sein" selbst ein absoluter moralischer Anspruch ist? Im konsequenten Relativismus wäre Intoleranz in einer intoleranten Kultur genauso „richtig" wie Toleranz in einer toleranten. Echte Toleranz setzt etwas anderes voraus: Ich bin überzeugt, dass du irrst, und achte dich trotzdem – weil du Gottes Ebenbild bist. Diese Achtung kann der Relativismus nicht begründen, das christliche Menschenbild schon.`,
      followUps: [
        {
          id: 'christen-unterdrueckt',
          objection: `Aber gerade Christen haben im Namen absoluter Wahrheit andere unterdrückt – Ketzer verbrannt, Kulturen zerstört.`,
          objectionBy: 'Ruth Benedict',
          answer: `Das ist wahr, und ich verschweige es nicht. Aber das Heilmittel gegen eine falsch angewandte Moral ist eine bessere Moral, nicht gar keine. Der Relativismus hätte diese Unterdrückung gar nicht verurteilen können – er hätte sagen müssen: Für die damalige Kultur war es richtig. Christen, die andere verfolgten, haben gegen den Christus gehandelt, der sagte: „Stecke dein Schwert an seinen Ort." Die koptische Kirche weiß aus eigener Geschichte, wie es ist, verfolgt zu werden – auch von anderen Christen.`,
        },
      ],
    },
    {
      id: 'gesellschaftsvertrag',
      objection: `Moral ist das, worauf sich eine Gesellschaft demokratisch einigt. Dafür braucht man weder Gott noch absolute Wahrheiten.`,
      objectionBy: 'Richard Rorty',
      answer: `Bei den Nürnberger Prozessen beriefen sich die Angeklagten genau darauf: Sie hätten nach geltendem deutschen Recht gehandelt. Das Gericht verurteilte sie trotzdem – wegen „Verbrechen gegen die Menschlichkeit", also nach einem Maßstab über jedem nationalen Recht. Der Rechtsphilosoph Gustav Radbruch, vorher selbst Rechtspositivist, formulierte danach: Unerträglich ungerechtes Gesetz ist „gesetzliches Unrecht", über dem ein „übergesetzliches Recht" steht. Die Erfahrung des 20. Jahrhunderts hat den reinen Gesellschaftsvertrag widerlegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gustav Radbruch', work: '„Gesetzliches Unrecht und übergesetzliches Recht", Süddeutsche Juristen-Zeitung', year: '1946', quote: `Wo ein Gesetz in unerträglichem Maß der Gerechtigkeit widerspricht, muss es als „unrichtiges Recht" der Gerechtigkeit weichen.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'siegerjustiz',
          objection: `Nürnberg war Siegerjustiz. Die Sieger haben einfach ihre Werte durchgesetzt.`,
          objectionBy: 'Melville Herskovits',
          answer: `Man kann über Verfahrensfragen in Nürnberg streiten. Aber würdest du wirklich sagen, der Holocaust sei nur relativ zu den Werten der Alliierten falsch gewesen – und nach den Werten des Dritten Reiches richtig? Wenn du zögerst, das zu sagen, dann glaubst du an einen Maßstab, der über allen Gesellschaften steht. Genau das behaupte ich.`,
        },
      ],
    },
    {
      id: 'bibel-moral-wandel',
      objection: `Selbst die biblische Moral ändert sich: Im AT ist Polygamie erlaubt, im NT nicht; Sklaverei wurde geduldet, heute verurteilt. Also ist auch eure Moral kulturell bedingt.`,
      objectionBy: 'Michael Ruse',
      answer: `Die Bibel unterscheidet selbst zwischen dem Prinzip und dem, was Gott „wegen eurer Herzenshärtigkeit" zuließ: „Von Anbeginn aber ist's nicht also gewesen" (Mt 19,8). Das Ideal – ein Mann und eine Frau, die Würde jedes Menschen – stand von Anfang an fest (Gen 1–2); die Anwendung entwickelte sich darauf zu. Das ist das Gegenteil von Relativismus: Es gibt einen festen Punkt, auf den sich die Geschichte zubewegt. Ohne festen Punkt gäbe es keine Bewegung „nach vorn".`,
    },
  ],
  questionsToAsk: [
    `Kann eine ganze Kultur moralisch im Irrtum sein? Wenn ja – woran gemessen?`,
    `Waren Wilberforce, Martin Luther King und die Gegner der Witwenverbrennung im Recht oder nur Abweichler?`,
    `Ist „Jeder soll tolerant sein" für dich eine universelle Wahrheit oder nur deine Vorliebe?`,
    `War der Holocaust nur relativ zu unseren Werten falsch?`,
  ],
  avoid: [
    `Andere Kulturen pauschal abwerten – das bestätigt den Vorwurf der Arroganz. Viele Kulturen haben Wahrheitsspuren (Justin: Samen des Logos).`,
    `Jede kulturelle Verschiedenheit (Essen, Kleidung, Höflichkeitsformen) zur moralischen Frage machen.`,
    `So tun, als hätten Christen nie im Namen der Wahrheit Unrecht getan.`,
  ],
  concessions: [
    `Viele moralische Urteile sind tatsächlich kulturell geprägt, und Christen haben oft eigene Sitten mit dem Evangelium verwechselt.`,
    `Kolonialmächte haben im Namen einer „überlegenen" Moral Kulturen zerstört; die Kritik daran ist berechtigt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', year: '1943', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Donald E. Brown', work: 'Human Universals', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis J. Beckwith; Gregory Koukl', work: 'Relativism: Feet Firmly Planted in Mid-Air', year: '1998', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Martin Luther King Jr.', work: 'Letter from Birmingham Jail', year: '1963', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Relativismus', 'Kultur', 'Toleranz', 'Nürnberg', 'Martin Luther King', 'Tao'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'christentum-gesellschaft/christentum-kolonialismus',
    'at-ethik/bibel-befuerwortet-sklaverei',
  ],
};

export default claim;
