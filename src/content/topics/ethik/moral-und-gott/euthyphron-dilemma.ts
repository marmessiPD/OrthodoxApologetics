import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'euthyphron-dilemma',
  title: `„Ist etwas gut, weil Gott es will, oder will Gott es, weil es gut ist?"`,
  proponents: [
    { name: 'Walter Sinnott-Armstrong', role: 'Philosoph, Duke University', work: 'God? A Debate between a Christian and an Atheist (mit W. L. Craig, 2004); Morality Without God? (2009)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Debatte mit W. L. Craig (2011)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Erik Wielenberg', role: 'Philosoph, DePauw University', work: 'Value and Virtue in a Godless Universe (2005)' },
  ],
  steelman: `In Platons Dialog *Euthyphron* (10a) fragt Sokrates: Ist das Fromme fromm, weil die Götter es lieben, oder lieben sie es, weil es fromm ist? Übertragen auf den Monotheismus entsteht ein Dilemma, dem man nicht entkommt. Wenn etwas gut ist, *weil* Gott es befiehlt, dann ist Moral willkürlich: Hätte Gott befohlen, Kinder zu quälen, wäre das gut gewesen – und der Satz „Gott ist gut" wäre eine leere Tautologie („Gott tut, was Gott will"). Wenn Gott dagegen etwas befiehlt, *weil* es gut ist, dann existiert das Gute unabhängig von Gott; Gott ist nur ein Bote, der einen Maßstab übermittelt, den es auch ohne ihn gäbe. Dann aber braucht die Moral Gott nicht als Grundlage. Beide Hörner sind für den Theisten tödlich: Entweder ist seine Moral willkürlich, oder Gott ist für die Moral überflüssig.`,
  biblical: {
    summary: `Die Bibel bewegt sich nicht in den Kategorien des Dilemmas. Gott ist weder ein Herrscher, der beliebige Befehle erteilt, noch ein Bote, der einem höheren Gesetz untersteht – er **ist** gut. „Niemand ist gut denn der einige Gott" (Mk 10,18); „Gott ist die Liebe" (1 Joh 4,8); „Gott ist Licht, und in ihm ist keine Finsternis" (1 Joh 1,5). Seine Gebote entspringen seinem Wesen: „Ihr sollt heilig sein, denn ich bin heilig" (Lev 19,2). Darum kann Gott nicht lügen (Hebr 6,18; Tit 1,2) und sich nicht selbst verleugnen (2 Tim 2,13) – nicht, weil ihn etwas Äußeres hindert, sondern weil es seinem Wesen widerspräche.`,
    detail: `**Lev 19,2** ist der Schlüssel: Die Begründung der Gebote ist nicht „weil ich es sage" und nicht „weil es ein abstraktes Gesetz gibt", sondern „weil ich so bin". Die Moral ist Nachahmung Gottes (vgl. Mt 5,48; Eph 5,1).

**Gott kann nicht lügen** (Hebr 6,18). Diese „Unfähigkeit" ist keine Schwäche, sondern Ausdruck vollkommener Wahrhaftigkeit. Ebenso wenig könnte Gott befehlen, Unschuldige aus Grausamkeit zu quälen, weil das seinem Wesen als Liebe widerspräche.

**Das Doppelgebot der Liebe** (Mt 22,37–40) zeigt, dass Gottes Gebote nicht willkürliche Einzelbefehle sind, sondern Entfaltungen der Liebe, die Gott selbst ist.`,
    sources: [
      { kind: 'bibel', work: 'Levitikus', ref: '19,2', quote: `Ihr sollt heilig sein; denn ich bin heilig, der HERR, euer Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '6,18', quote: `…durch zwei Stücke, die nicht wanken (denn es ist unmöglich, daß Gott lüge)…`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,13', quote: `Glauben wir nicht, so bleibt er treu; er kann sich selbst nicht leugnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,5', quote: `…daß Gott Licht ist und in ihm ist keine Finsternis.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben das Dilemma der Sache nach längst aufgelöst: Gott ist nicht *gut* wie ein Mensch gut ist, sondern er ist die **Quelle aller Güte**. Athanasius schreibt, Gott sei gut, ja vielmehr der Quell der Güte, und der Gute missgönne niemandem etwas – deshalb habe er die Welt aus Liebe ins Dasein gerufen (De Incarnatione 3). Augustinus lädt dazu ein, von „diesem Guten und jenem Guten" abzusehen und das Gute selbst zu schauen – das ist Gott (De Trinitate VIII,3). Für die koptische Theologie gilt: Die Gebote sind kein fremdes Joch, sondern der Weg, auf dem der Mensch dem ähnlich wird, dessen Bild er ist.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3', year: 'um 318', quote: `Gott ist gut, ja vielmehr der Quell aller Güte; der Gute aber missgönnt niemandem etwas.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'De Trinitate', ref: 'VIII,3,4', year: 'um 410', quote: `Dies ist gut und jenes ist gut – nimm „dies" und „jenes" weg und schau das Gute selbst, wenn du kannst: So wirst du Gott schauen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Religionsphilosophie gilt das Euthyphron-Dilemma gegenüber einer reinen, voluntaristischen Gebotstheorie („gut ist, was Gott beliebig will") als stark. Gegenüber der klassischen Position, dass das Gute in Gottes Wesen gründet (Augustinus, Thomas, heute Robert Adams, William Alston, W. L. Craig), lautet der verbreitete Einwand, das Dilemma werde nur verschoben: Ist Gottes Natur gut, weil sie gut ist, oder weil sie Gottes ist? Theistische Philosophen antworten, Gottes Natur sei der Maßstab selbst und nicht an einem weiteren Maßstab zu messen. Die Debatte gilt als offen, die „dritte Option" wird aber auch von atheistischen Fachphilosophen als ernstzunehmende Antwort anerkannt.`,
    sources: [
      { kind: 'sonstiges', author: 'Platon', work: 'Euthyphron', ref: '10a', year: 'um 399 v. Chr. (Dialogzeit)', quote: `Wird das Fromme von den Göttern geliebt, weil es fromm ist, oder ist es fromm, weil es geliebt wird?`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'William P. Alston', work: '„Some Suggestions for Divine Command Theorists", in: Christian Theism and the Problems of Philosophy', year: '1990', quote: `Gott selbst ist der höchste Maßstab des Guten, vergleichbar einem Urmaß, das nicht an einem anderen Maß gemessen wird.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Walter Sinnott-Armstrong', work: 'Morality Without God?', year: '2009', quote: `Moral brauche keine religiöse Grundlage; die Berufung auf Gottes Natur verschiebe das Euthyphron-Problem nur.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das ist ein falsches Dilemma, weil es eine dritte Möglichkeit gibt: Etwas ist gut, weil es Gottes **Wesen** entspricht. Gott befiehlt nicht willkürlich, und er gehorcht auch keinem Maßstab über sich – er ist selbst die Güte. Seine Gebote fließen aus seinem Charakter, so wie ehrliche Worte aus einem ehrlichen Menschen. Deshalb könnte Gott nie Grausamkeit befehlen: nicht weil ihn jemand hindert, sondern weil er Liebe ist.`,
  keyPoints: [
    `**Falsches Dilemma:** Neben „Gottes Wille" und „Maßstab über Gott" gibt es die dritte Option: Gottes Wesen ist das Gute.`,
    `**Nicht willkürlich:** Gottes Gebote fließen notwendig aus seinem Wesen (Lev 19,2) – er kann so wenig Grausamkeit befehlen, wie er lügen kann (Hebr 6,18).`,
    `**Nicht überflüssig:** Das Gute ist kein abstraktes Gesetz neben Gott, sondern Gott selbst (Mk 10,18; 1 Joh 4,8).`,
    `**Das Urmaß-Argument:** Ein Maßstab wird nicht an einem anderen Maßstab gemessen; Gottes Natur ist der letzte Bezugspunkt (Alston).`,
    `**Keine Tautologie:** „Gott ist gut" ist informativ wie „Wasser ist H₂O" – eine entdeckte Identität, keine leere Definition.`,
    `**Das Dilemma trifft den Atheisten selbst:** Auch er muss sagen, warum *seine* letzte Grundlage (Wohlergehen, „brute facts") gut ist.`,
  ],
  argument: {
    name: 'Auflösung des Euthyphron-Dilemmas durch die Wesens-Option',
    premises: [
      {
        text: 'P1: Moralische Werte (gut/böse) gründen in Gottes Wesen, das notwendig vollkommen gut ist (Liebe, Gerechtigkeit, Treue).',
        support: 'Mk 10,18; 1 Joh 4,8; Athanasius, De Inc. 3; Augustinus, De Trin. VIII,3; Thomas, Summa theologiae I q. 6.',
      },
      {
        text: 'P2: Moralische Pflichten (richtig/falsch) gründen in Gottes Geboten, die notwendig aus seinem Wesen fließen.',
        support: 'Lev 19,2; Mt 22,37–40; Robert Adams, Finite and Infinite Goods (1999).',
      },
      {
        text: 'P3: Ein Maßstab, der notwendig und selbst der letzte Bezugspunkt ist, ist weder willkürlich noch einem höheren Maßstab unterworfen.',
        support: 'Gott kann sein Wesen nicht ändern (Mal 3,6; 2 Tim 2,13); kein Wesen über Gott (Jes 40,25).',
      },
    ],
    conclusion: 'Also ist Moral weder willkürlich (Horn 1) noch unabhängig von Gott (Horn 2). Das Dilemma ist falsch.',
    horns: [
      { label: 'Horn 1: Gut, weil Gott es will', text: 'Gilt nur für einen reinen Voluntarismus (Gott könnte beliebig befehlen). Diesen vertritt die orthodoxe Tradition nicht: Gottes Wille ist nie von seinem Wesen getrennt.' },
      { label: 'Horn 2: Gott will es, weil es gut ist', text: 'Gilt nur, wenn das Gute ein Maßstab *außerhalb* Gottes wäre. Die Tradition sagt: Das Gute ist nicht außerhalb, sondern Gott selbst.' },
    ],
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph des höchsten Gutes',
      text: `Augustinus nimmt Platons Frage auf und verwandelt sie: Das Gute ist keine Idee, die über Gott stünde, sondern Gott selbst ist das höchste und unwandelbare Gut, an dem alles andere teilhat. In *De Trinitate* VIII lädt er dazu ein, von allen einzelnen guten Dingen – einem guten Acker, einem guten Haus, einem guten Freund – abzusehen und das Gute selbst zu schauen, durch das alles gut ist. Dieses Gute ist Gott. Damit fällt das Dilemma: Gott ist nicht dem Guten unterworfen, und das Gute ist nicht Gottes Laune.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus', work: 'De Trinitate', ref: 'VIII,3,4–5', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als alexandrinischer Theologe',
      text: `Athanasius begründet die Schöpfung und die Menschwerdung mit Gottes Güte: Gott ist gut, ja der Quell aller Güte, und der Gute ist nicht neidisch; darum hat er alles aus dem Nichts ins Dasein gerufen und den Menschen nach seinem Bild geschaffen (De Incarnatione 3). Und als der Mensch verfiel, wäre es „Gottes unwürdig" gewesen, sein Werk zugrunde gehen zu lassen (De Incarnatione 6). Bei Athanasius handelt Gott immer seinem Wesen gemäß – „würdig" seiner Güte. Diese Rede setzt voraus, dass Gottes Handeln aus seinem Wesen fließt und nicht willkürlich ist.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3; 6', status: 'paraphrase' }],
    },
    {
      person: 'anselm',
      role: 'als Philosoph der Vollkommenheit Gottes',
      text: `Anselm fragt im *Proslogion*, wie Gott allmächtig sein könne, wenn er doch nicht lügen, nicht sündigen und nicht vergehen kann. Seine Antwort: Solches „Können" wäre kein Vermögen, sondern Ohnmacht. Wer lügen kann, kann sich selbst schaden; Gott ist umso mächtiger, je weniger er dazu fähig ist. Das ist die Antwort auf die Frage „Könnte Gott Grausamkeit befehlen?": Nein – und das ist keine Grenze seiner Macht, sondern Ausdruck seiner Vollkommenheit.`,
      sources: [{ kind: 'kirchenvater', author: 'Anselm von Canterbury', work: 'Proslogion', ref: 'Kap. 7', year: '1077/78', status: 'paraphrase' }],
    },
    {
      person: 'thomas-aquin',
      role: 'als Systematiker',
      text: `Thomas von Aquin lehrt, dass Gott nicht nur gut ist, sondern das Gute in Person – *ipsum esse* und *ipsa bonitas*. Alles Geschaffene ist gut durch Teilhabe an Gottes Güte. Das natürliche Sittengesetz ist für Thomas die Teilhabe der vernünftigen Kreatur am ewigen Gesetz Gottes. Gottes Gebote sind daher keine fremden Befehle, sondern Wegweiser zur Erfüllung der menschlichen Natur, wie Gott sie geschaffen hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q. 6 a. 2–4', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I–II q. 91 a. 2', status: 'paraphrase' },
      ],
    },
    {
      person: 'robert-adams',
      role: 'als analytischer Moralphilosoph',
      text: `Robert Merrihew Adams hat die einflussreichste moderne Fassung einer „modifizierten Gebotstheorie" entwickelt. Er unterscheidet: Das *Gute* (Werte) gründet in Gott als dem höchsten Gut, dem alle endlichen Güter ähneln; das *moralisch Gebotene* (Pflichten) gründet in den Geboten dieses guten Gottes. Weil die Gebote von einem Wesen stammen, das vollkommen gut und liebend ist, sind sie nicht willkürlich; weil Pflichten soziale, personale Verhältnisse voraussetzen, braucht es einen Gebieter. Adams zeigt damit, dass die Gebotstheorie dem Euthyphron-Einwand standhält.`,
      sources: [{ kind: 'fachliteratur', author: 'Robert Merrihew Adams', work: 'Finite and Infinite Goods: A Framework for Ethics', year: '1999', status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Debattierer',
      text: `Craig hat in Debatten mit Walter Sinnott-Armstrong und Sam Harris immer wieder erklärt, dass der Theist das Dilemma „durchschneidet": Weder ist das Gute von Gott unabhängig, noch ist es willkürlich, sondern Gottes Natur ist das Paradigma des Guten, und seine Gebote sind Ausdruck dieser Natur. Er weist zudem darauf hin, dass der Atheist an derselben Stelle eine letzte Grundlage braucht – nur dass dessen Grundlage (etwa das menschliche Wohlergehen) keine Pflichten erklären kann.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig; Walter Sinnott-Armstrong', work: 'God? A Debate between a Christian and an Atheist', year: '2004', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'dilemma-klassisch',
      objection: `Ganz einfach: Ist Folter falsch, weil Gott sie verbietet? Dann hätte er sie auch erlauben können. Oder verbietet er sie, weil sie falsch ist? Dann ist sie auch ohne Gott falsch.`,
      objectionBy: 'Walter Sinnott-Armstrong',
      answer: `Folter ist falsch, weil sie Gottes Wesen widerspricht – seiner Liebe und Gerechtigkeit. Gottes Verbot ist nicht willkürlich, weil es aus seinem Wesen fließt; und das Gute ist nicht unabhängig von Gott, weil es sein Wesen *ist*. Das ist die dritte Möglichkeit, die das Dilemma unterschlägt – und sie ist nicht neu, sondern die klassische Position von Augustinus bis heute.`,
      questionsBack: [
        `Welche der beiden Optionen hätte Augustinus vertreten – oder siehst du, dass er eine dritte vertritt?`,
      ],
      followUps: [
        {
          id: 'dilemma-verschoben',
          objection: `Du verschiebst das Dilemma nur: Ist Gottes Natur gut, weil sie einem Maßstab des Guten entspricht? Dann gibt es einen Maßstab über Gott. Oder ist sie gut, nur weil sie Gottes Natur ist? Dann ist es wieder willkürlich.`,
          objectionBy: 'Erik Wielenberg',
          targetsPremise: 3,
          answer: `Weder noch. Gottes Natur ist selbst der Maßstab – so wie das Urmeter früher der Maßstab für einen Meter war und nicht selbst an einem anderen Meter gemessen wurde. Sie ist auch nicht willkürlich, denn willkürlich ist nur, was auch anders sein könnte. Gottes Natur ist notwendig; sie hätte nicht anders sein können. Jede Moraltheorie hat einen letzten Bezugspunkt – beim Theisten ist es ein vollkommen guter, notwendiger Gott.`,
          detail: `Der Philosoph William Alston hat das Bild vom Urmaß verwendet: Bevor der Meter physikalisch definiert wurde, war ein bestimmter Platin-Iridium-Stab in Paris *der* Meter. Es war sinnlos zu fragen, ob dieser Stab „wirklich" einen Meter lang ist. Analog ist Gott nicht gut, weil er einem Maßstab entspricht, sondern er *ist* der Maßstab. Der Unterschied zum Stab: Gott ist kein zufälliges Ding, sondern das notwendige, vollkommene Sein.`,
          followUps: [
            {
              id: 'tautologie',
              objection: `Dann ist „Gott ist gut" eine leere Tautologie. Du sagst nur: „Gott ist wie Gott."`,
              objectionBy: 'Richard Dawkins',
              answer: `Nein, denn wir kennen die Bedeutung von „gut" schon, bevor wir wissen, worin es gründet: Liebe, Gerechtigkeit, Treue, Barmherzigkeit. „Gott ist gut" sagt, dass Gott genau diese Eigenschaften in vollkommener Weise hat. Das ist so informativ wie „Wasser ist H₂O": Die Menschen kannten Wasser lange, bevor sie entdeckten, was es *ist*. Die Identität ist entdeckt, nicht definiert.`,
              followUps: [
                {
                  id: 'andere-natur',
                  objection: `Und wenn Gottes Natur anders wäre – grausam statt liebend –, wäre dann Grausamkeit gut?`,
                  objectionBy: 'Walter Sinnott-Armstrong',
                  answer: `Die Frage setzt etwas Unmögliches voraus: Gottes Natur ist notwendig, sie kann nicht anders sein – so wie es keine Welt gibt, in der 2 + 2 = 5 ist. Fragen der Art „Was wäre, wenn das Unmögliche wahr wäre?" führen in der Logik zu keinem sinnvollen Ergebnis. Und übrigens müsste der Atheist dieselbe Frage beantworten: Wäre Grausamkeit gut, wenn die „notwendigen moralischen Tatsachen" anders wären?`,
                  followUps: [
                    {
                      id: 'boeser-gott-herausforderung',
                      objection: `Du behauptest einfach, Gottes Natur sei notwendig gut. Mit genau denselben Argumenten könnte man einen notwendig **bösen** Gott verteidigen – das Leid in der Welt passt sogar besser zu ihm. Warum ist deine Wahl nicht beliebig?`,
                      objectionBy: 'Stephen Law',
                      answer: `Die Symmetrie trägt nicht. In der klassischen Philosophie ist das Böse kein eigenes Seiendes, sondern ein Mangel an Gutem – wie Blindheit ein Mangel an Sehen ist. Ein „maximal böses" Wesen wäre also ein Wesen mit maximalem Mangel, das heißt fast nichts; es könnte nicht zugleich allmächtig und allwissend sein. Vollkommenes Sein und vollkommene Güte gehören zusammen. Dazu kommt: Die Welt ist voller Schönheit, Liebe und Gewissen – und vor allem ist in Christus Gottes Gesicht sichtbar geworden.`,
                      detail: `Stephen Law hat die „Evil-God Challenge" 2010 in der Zeitschrift *Religious Studies* formuliert: Wenn man die Existenz eines bösen Gottes wegen des Guten in der Welt ablehnt, müsse man aus Gründen der Symmetrie auch einen guten Gott wegen des Bösen ablehnen. Theistische Philosophen antworten unter anderem mit der Privationslehre (Augustinus, Athanasius: das Böse ist Abwendung vom Sein), mit dem Hinweis, dass Moral selbst – unser Gefühl der Verpflichtung zum Guten – auf einen guten Ursprung weist, und mit den historischen Argumenten für die Auferstehung, die einen bestimmten Gott offenbaren. Das Theodizee-Problem selbst wird in einem eigenen Themenblock behandelt.`,
                      voices: [
                        { person: 'athanasius', role: 'als Lehrer der Schöpfung', text: `Athanasius beschreibt in *Gegen die Heiden* das Böse als etwas, das kein eigenes Wesen hat: Es entsteht, wenn sich die Seele vom Guten abwendet und dem Nichtseienden zuwendet. Das Böse ist darum immer Parasit am Guten, niemals ein gleichrangiges Prinzip.` },
                      ],
                      sources: [
                        { kind: 'gegner', author: 'Stephen Law', work: '„The Evil-God Challenge", Religious Studies 46', year: '2010', status: 'paraphrase' },
                        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '4–7', year: 'um 318', status: 'paraphrase' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'at-befehle-grausam',
          objection: `Aber Gott hat im Alten Testament doch offensichtlich Grausames befohlen – die Kanaaniter, Isaak. Also ist seine Natur offenbar nicht „gut" in unserem Sinn.`,
          objectionBy: 'Richard Dawkins',
          answer: `Das ist eine eigene, ernsthafte Frage, die ich gern im Einzelnen bespreche – Kanaaniter und Abraham haben eigene Themen. Hier nur so viel: Gott als Geber des Lebens hat Rechte, die kein Mensch hat; manches, was für uns verboten ist, ist es für ihn nicht. Und deine Empörung über diese Texte setzt einen objektiven Maßstab des Guten voraus – genau den, den du gerade ohne Gott begründen willst.`,
        },
      ],
    },
    {
      id: 'gott-befiehlt-kinderquaelen',
      objection: `Konkrete Frage: Wenn Gott dir befehlen würde, ein Kind zu quälen – wäre das dann gut, und würdest du es tun?`,
      objectionBy: 'Sam Harris',
      answer: `Gott kann das nicht befehlen, so wie er nicht lügen kann (Hebr 6,18) – nicht weil ihn etwas Äußeres hindert, sondern weil es seinem Wesen als Liebe widerspräche. Deine Frage ist wie: „Wenn ein runder Würfel …" – sie beschreibt etwas Unmögliches. Und praktisch: Eine „Stimme", die so etwas fordert, käme nicht von Gott, sondern wäre an Christus als falsch zu erkennen.`,
      followUps: [
        {
          id: 'nicht-allmaechtig',
          objection: `Dann ist Gott nicht allmächtig, wenn er etwas nicht kann.`,
          objectionBy: 'Sam Harris',
          answer: `Allmacht heißt nicht, Widersprüchliches zu können, sondern alles, was in sich möglich und mit Gottes vollkommenem Wesen vereinbar ist. Anselm hat es so gesagt: Lügen-Können wäre keine Macht, sondern Schwäche – wer lügen kann, kann sich selbst verderben. Gott ist gerade deshalb vollkommen mächtig, weil er nicht zum Bösen fähig ist. Auch du würdest einen Menschen nicht für „mächtiger" halten, weil er zu Grausamkeit fähig ist.`,
          followUps: [
            {
              id: 'natur-als-zweites-horn',
              objection: `Moment: Wenn Gott durch seine Natur gebunden ist, dann ist diese Natur ein Maßstab, an den sein Wille gebunden ist. Du hast nur das zweite Horn umbenannt: Das Gute ist unabhängig von Gottes Willen.`,
              objectionBy: 'Sam Harris',
              answer: `Unabhängig von Gottes **Willen** vielleicht – aber nicht unabhängig von **Gott**. Das zweite Horn behauptet einen Maßstab **außerhalb** Gottes, dem er sich unterwerfen muss. Meine These ist: Der Maßstab ist Gott selbst. Die klassische Theologie lehrt, dass in Gott Wille und Wesen nicht zwei verschiedene Dinge sind; Gott will das Gute, weil er das Gute ist. Ein Wesen, das „an sich selbst gebunden" ist, ist nicht unfrei, sondern vollkommen.`,
              detail: `Thomas von Aquin spricht von der göttlichen Einfachheit: Gott hat seine Güte nicht wie eine Eigenschaft, die man auch verlieren könnte, sondern **ist** seine Güte. Darum ist es kein Mangel, dass er nicht böse handeln kann, so wie es kein Mangel ist, dass ein Kreis nicht eckig sein kann. Wer frei ist, Böses zu tun, ist nicht freier, sondern noch nicht vollkommen frei – die Väter nennen die wahre Freiheit die ungehinderte Bewegung zum Guten.`,
              sources: [
                { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 3, a. 4; q. 6, a. 3', year: '1265–1273', quote: `Gott allein ist durch sein Wesen gut; in ihm sind Sein und Wesen identisch.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'atheisten-erkennen-gutes',
      objection: `Wenn das Gute in Gottes Wesen gründet, wie können dann Atheisten das Gute erkennen? Sie kennen Gott doch gar nicht.`,
      objectionBy: 'Erik Wielenberg',
      answer: `So wie man Licht sehen kann, ohne Physik studiert zu haben. Jeder Mensch ist nach Gottes Bild geschaffen und hat das Gesetz „in sein Herz geschrieben" (Röm 2,15). Man kann erkennen, *dass* etwas gut ist, ohne zu wissen, *warum* es gut ist. Die Wesens-These ist eine Aussage über die Grundlage der Moral, nicht über den Weg, auf dem wir sie erkennen.`,
      followUps: [
        {
          id: 'brute-ethische-fakten',
          objection: `Wenn Atheisten das Gute ohne Gott erkennen, ist Gott für die Moral überflüssig. Ich vertrete: Grundlegende ethische Wahrheiten sind notwendig wahr und brauchen kein Fundament – Schmerz zuzufügen, nur um Spaß zu haben, ist einfach falsch. Punkt. Ockhams Rasiermesser schneidet Gott weg.`,
          objectionBy: 'Erik Wielenberg',
          answer: `Hier werden zwei Fragen vermischt: wie wir das Gute **erkennen** und worin es **gründet**. Dass ein Atheist erkennt, dass Grausamkeit falsch ist, bestreite ich nicht. Aber deine Sicht hat ein Erklärungsproblem: Es gibt abstrakte, kausal wirkungslose moralische Tatsachen – und Gehirne, die durch blinde Selektion entstanden sind und zufällig genau diese Tatsachen erfassen. Warum sollten beide zueinanderpassen? Im Theismus haben Moral und Geist dieselbe Quelle: Ein guter Gott schuf Wesen, die das Gute erkennen können. Das ist nicht überflüssig, das ist die Erklärung.`,
          detail: `Wielenberg hat in *Robust Ethics* (2014) die wohl stärkste atheistische Theorie objektiver Moral vorgelegt und versucht, die Passung durch einen „dritten Faktor" zu erklären: Dieselben Eigenschaften, die moralisch relevant sind (z. B. Leidensfähigkeit), hätten auch die Evolution unserer moralischen Überzeugungen beeinflusst. Kritiker wie William Lane Craig halten das für einen bemerkenswerten Zufall, den der Theismus nicht braucht. Wichtig für dein Gespräch: Du musst nicht behaupten, Atheisten könnten nicht gut sein oder nichts Gutes wissen – das wäre falsch und unfair. Deine These betrifft das **Fundament**, nicht die Erkenntnis.`,
          voices: [
            { person: 'craig', role: 'als Gesprächspartner Wielenbergs', text: `Craig hat mit Wielenberg 2018 öffentlich debattiert. Er argumentiert, dass Wielenbergs Moralfakten „in der Luft hängen": Pflichten ohne jemanden, dem gegenüber man verpflichtet ist, und eine glückliche Übereinstimmung zwischen evolvierten Überzeugungen und abstrakten Wahrheiten, die ohne einen Schöpfer unerklärt bleibt.` },
          ],
          sources: [
            { kind: 'gegner', author: 'Erik J. Wielenberg', work: 'Robust Ethics: The Metaphysics and Epistemology of Godless Normative Realism', year: '2014', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'ein-brute-fact-gegen-viele',
              objection: `Auch dein Gott ist ein unerklärter Grundfakt – ein notwendiges Wesen, das einfach gut ist. Du hast ein unerklärtes Fundament, ich habe einige. Warum soll deins besser sein?`,
              objectionBy: 'Erik Wielenberg',
              answer: `Weil ein einziges Fundament, das vieles erklärt, besser ist als viele, die nichts weiter erklären. Gott erklärt nicht nur, **dass** es Werte gibt, sondern auch, warum es **Pflichten** gibt – denn Pflichten sind etwas, das man **jemandem schuldet** –, warum wir für unser Handeln Rechenschaft ablegen, warum Personen unbedingten Wert haben und warum unser Geist auf moralische Wahrheit ausgerichtet ist. Deine Grundfakten stehen nebeneinander; im Theismus fließen sie aus einer personalen Quelle.`,
              detail: `Der Philosoph Robert Adams hat gezeigt, dass Pflicht ein **sozialer** Begriff ist: Wir sind jemandem verpflichtet, wir können jemandem etwas schulden, jemand kann uns zur Rechenschaft ziehen. Werte (das Gute) gründen nach Adams in Gottes Wesen, Pflichten in den Geboten eines liebenden Gottes. Ein unpersönliches Reich abstrakter Tatsachen kann das Gute vielleicht beschreiben, aber es kann niemandem etwas befehlen, und man kann ihm nichts schulden.`,
              voices: [
                { person: 'robert-adams', role: 'als Moralphilosoph', text: `Adams vertritt in *Finite and Infinite Goods* (1999) eine modifizierte Gebotstheorie: Das Gute ist Gott selbst als Urbild aller Vortrefflichkeit; moralische Verpflichtung entsteht durch die Gebote eines Gottes, der gut und liebend ist. So entgeht er dem Euthyphron-Dilemma und erklärt zugleich den sozialen, verpflichtenden Charakter der Moral.` },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'Robert Merrihew Adams', work: 'Finite and Infinite Goods: A Framework for Ethics', year: '1999', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'pflichten-untereinander',
                  objection: `Pflichten brauchen keinen göttlichen Befehlshaber. Ich schulde meinen Mitmenschen Respekt, und sie mir. Die moralische Gemeinschaft der Menschen reicht völlig.`,
                  objectionBy: 'Walter Sinnott-Armstrong',
                  answer: `Pflichten zwischen Gleichen kann man aushandeln – und auch wieder auflösen, wenn alle zustimmen. Aber manche Pflichten gelten selbst dann, wenn eine ganze Gesellschaft anderer Meinung ist: Die Pflicht, Juden nicht zu ermorden, galt auch 1942 in Deutschland, als die herrschende „moralische Gemeinschaft" das Gegenteil verlangte. Woher kommt eine Pflicht, die **gegen** die Gemeinschaft bindet? Sie braucht eine Autorität, die über jeder menschlichen Mehrheit steht.`,
                  detail: `Der Punkt ist nicht, dass Atheisten solche Pflichten nicht anerkennen – viele tun es mit großem Ernst. Die Frage ist, ob ihre Weltanschauung erklären kann, **warum** es solche unbedingten, gemeinschaftsübergreifenden Pflichten gibt. Die Antwort „sie sind einfach da" ist möglich, aber sie ist eine Kapitulation der Erklärung, kein Argument.`,
                  questionsBack: [
                    `Wenn eine ganze Gesellschaft beschließt, eine Minderheit sei rechtlos – woran misst du dann, dass sie sich irrt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kant-autonomie',
      objection: `Wer gut handelt, weil Gott es befiehlt, handelt nicht moralisch, sondern gehorsam. Kant hat gezeigt: Moral muss autonom sein, sonst ist sie Fremdbestimmung.`,
      objectionBy: 'Walter Sinnott-Armstrong',
      answer: `Christliche Moral ist nicht Kadavergehorsam, sondern Liebe zu einem Gott, der selbst die Liebe ist – „wir lieben, weil er uns zuerst geliebt hat" (1 Joh 4,19). Gottes Gebote sind keine fremden Befehle, sondern beschreiben, wofür wir geschaffen sind; sie zu befolgen heißt, wahrhaft Mensch zu werden. Interessant übrigens: Kant selbst hielt Gott für ein notwendiges Postulat der praktischen Vernunft, damit Moral und Glückseligkeit nicht auseinanderfallen.`,
      sources: [
        { kind: 'sonstiges', author: 'Immanuel Kant', work: 'Kritik der praktischen Vernunft', ref: 'Dialektik, II. Hauptstück, V', year: '1788', quote: `Das Dasein Gottes ist als Postulat der reinen praktischen Vernunft anzunehmen, damit das höchste Gut – Sittlichkeit und ihr entsprechende Glückseligkeit – möglich ist.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'gebote-fremdbestimmung',
          objection: `Trotzdem: Gebote von außen sind Fremdbestimmung. Ein moralischer Mensch braucht keine Befehle.`,
          objectionBy: 'Sam Harris',
          answer: `Gottes Gebote kommen nicht „von außen" wie die eines fremden Herrschers, sondern vom Schöpfer, der unsere Natur kennt und will, dass wir gedeihen. In der orthodoxen Tradition sind die Gebote Wegweiser zur Vergöttlichung – dazu, dem ähnlich zu werden, dessen Bild wir sind. Paulus sagt: „Die Liebe ist des Gesetzes Erfüllung" (Röm 13,10). Wer liebt, erlebt die Gebote nicht als Zwang, sondern als Beschreibung dessen, was er ohnehin will.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du die klassische dritte Antwort auf das Dilemma – dass das Gute in Gottes Wesen gründet?`,
    `Was ist in deinem Weltbild der letzte Maßstab des Guten – und warum ist *er* gut?`,
    `Würdest du einen Menschen für mächtiger halten, weil er zu Grausamkeit fähig ist?`,
    `Wem gegenüber bist du verpflichtet, wenn das Gute nur eine abstrakte Tatsache ist?`,
  ],
  avoid: [
    `„Gut ist einfach, was Gott befiehlt – Punkt." Das ist das erste Horn des Dilemmas und macht Moral willkürlich.`,
    `„Gott hält sich an die Moral wie wir." Das ist das zweite Horn und macht Gott zum bloßen Boten.`,
    `Die Rückfrage „Und was ist dein Maßstab?" als Ausweichmanöver einsetzen, ohne zuerst die dritte Option zu erklären.`,
  ],
  concessions: [
    `Gegenüber einer reinen Willenstheorie („gut ist, was Gott beliebig will") ist das Dilemma tatsächlich stark – manche mittelalterliche Voluntaristen haben sich ihm ausgesetzt.`,
    `Auch die dritte Option wirft weitere philosophische Fragen auf (etwa zur Notwendigkeit von Gottes Geboten); die Debatte ist nicht abgeschlossen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Robert Merrihew Adams', work: 'Finite and Infinite Goods', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Baggett; Jerry L. Walls', work: 'Good God: The Theistic Foundations of Morality', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig; Walter Sinnott-Armstrong', work: 'God? A Debate between a Christian and an Atheist', year: '2004', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Augustinus', work: 'De Trinitate', ref: 'Buch VIII', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Euthyphron', 'Gebotstheorie', 'Platon', 'Güte Gottes', 'Allmacht', 'Metaethik'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'moral-und-gott/wissenschaft-begruendet-moral',
    'at-ethik/abraham-isaak',
    'at-ethik/kanaaniter-voelkermord',
  ],
};

export default claim;
