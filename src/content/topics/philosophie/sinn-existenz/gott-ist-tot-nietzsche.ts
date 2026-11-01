import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gott-ist-tot-nietzsche',
  title: `„Gott ist tot – der Mensch muss seine eigenen Werte schaffen (Nietzsche)."`,
  proponents: [
    {
      name: 'Friedrich Nietzsche',
      role: 'Philosoph und klassischer Philologe (1844–1900)',
      work: 'Die fröhliche Wissenschaft (1882), § 125; Also sprach Zarathustra (1883–1885); Zur Genealogie der Moral (1887); Der Antichrist (1888)',
    },
    {
      name: 'Jean-Paul Sartre',
      role: 'Existenzialistischer Philosoph (1905–1980)',
      work: 'Der Existentialismus ist ein Humanismus (1946)',
    },
    {
      name: 'Yuval Noah Harari',
      role: 'Historiker, Hebräische Universität Jerusalem',
      work: 'Homo Deus (2015) – Humanismus als neue „Religion", der Mensch auf dem Weg zum Gott',
    },
  ],
  steelman: `Nietzsche behauptet nicht einfach, Gott existiere nicht – er stellt ein kulturelles Ereignis fest: Der Glaube an den christlichen Gott ist für den modernen Menschen unglaubwürdig geworden, und wir haben ihn selbst „getötet" – durch Wissenschaft, Geschichtskritik und die eigene Wahrhaftigkeit, die das Christentum uns anerzogen hat. Die Konsequenzen sind ungeheuer: Die christliche Moral ist nach Nietzsche eine „Sklavenmoral", geboren aus dem Ressentiment der Schwachen gegen die Starken; sie hat Demut, Mitleid und Schuldgefühl zu Tugenden erklärt und das Leben selbst vergiftet. Jetzt, da ihr Fundament fällt, müssen wir den Mut haben, „jenseits von Gut und Böse" zu stehen und neue Werte zu schaffen – der Mensch muss sich selbst überwinden und sein eigener Gesetzgeber werden. Wer weiter christliche Moral ohne christlichen Gott predigt, ist feige und inkonsequent. Die Zukunft gehört dem Menschen, der sich nicht mehr vor einem Himmel beugt, sondern die Erde liebt.`,
  biblical: {
    summary: `Die Bibel kennt den Satz „Es ist kein Gott" – als Satz des Toren, der in seinem Herzen spricht (Ps 14,1), also als Entscheidung des Willens, nicht als Ergebnis des Denkens. Der Versuch, „sein wie Gott" zu werden und selbst zu bestimmen, was gut und böse ist, ist die Urversuchung (Gen 3,5). Zugleich bestätigt die Bibel Nietzsches Beobachtung, dass das Christentum die Werte der antiken Welt umgestürzt hat: Gott hat „was schwach ist vor der Welt" erwählt (1 Kor 1,27), der Größte soll Diener aller sein (Mk 10,43–45), und der Sohn Gottes „entäußerte sich selbst und nahm Knechtsgestalt an" (Phil 2,7). Nur ist das nach der Schrift nicht Ressentiment, sondern die Kraft göttlicher Liebe.`,
    detail: `- **Gen 3,5:** „Ihr werdet sein wie Gott und wissen, was gut und böse ist." Der Wunsch, selbst Quelle der Werte zu sein, ist kein moderner Fortschritt, sondern die älteste Versuchung.
- **1 Kor 1,26–29:** Paulus beschreibt die Gemeinde als Gemeinschaft der Nicht-Mächtigen, der Nicht-Edlen – Nietzsche hat das richtig gelesen. Aber Paulus deutet es als Gottes Weisheit, die den Stolz zuschanden macht, nicht als Rache der Schwachen.
- **2 Kor 12,9:** „Meine Kraft ist in den Schwachen mächtig." Christliche Schwachheit ist nicht Lebensverneinung, sondern Raum für eine Kraft, die nicht aus der Selbstbehauptung kommt.
- **Mk 10,42–45:** Jesus kennt die „Herrenmoral" der Völker – „die Mächtigen unter ihnen haben Gewalt. Aber also soll es unter euch nicht sein." Die Umwertung, die Nietzsche bekämpft, ist bewusst gesetzt.
- **Röm 1,21–25:** Wer die Wahrheit Gottes in Lüge verkehrt, verehrt das Geschöpf statt des Schöpfers – sei es ein Götzenbild, die Nation oder der „Übermensch".`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '14,1', quote: `Die Toren sprechen in ihrem Herzen: Es ist kein Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis (1. Mose)', ref: '3,5', quote: `… sondern Gott weiß, daß, welches Tages ihr davon esset, so werden eure Augen aufgetan, und werdet sein wie Gott und wissen, was gut und böse ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '1,27', quote: `… sondern was töricht ist vor der Welt, das hat Gott erwählt, daß er die Weisen zu Schanden mache; und was schwach ist vor der Welt, das hat Gott erwählt, daß er zu Schanden mache, was stark ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '10,42–45', quote: `Ihr wisset, daß die weltlichen Fürsten herrschen, und die Mächtigen unter ihnen haben Gewalt. Aber also soll es unter euch nicht sein; sondern welcher will groß werden unter euch, der soll euer Diener sein … Denn auch des Menschen Sohn ist nicht gekommen, daß er sich dienen lasse, sondern daß er diene und gebe sein Leben zur Bezahlung für viele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,6–7', quote: `… welcher, ob er wohl in göttlicher Gestalt war, hielt er's nicht für einen Raub, Gott gleich sein, sondern entäußerte sich selbst und nahm Knechtsgestalt an.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche kennt ein Ziel des Menschen, das kühner ist als Nietzsches Übermensch: die **Vergöttlichung** (*theosis*). Athanasius: Der Logos „wurde Mensch, damit wir vergöttlicht würden" (De Incarnatione 54). Der Unterschied liegt im Weg: Nietzsche fragt, ob wir nicht „selber zu Göttern werden" müssen, um der Tat des Gottesmordes würdig zu sein (Fröhliche Wissenschaft § 125) – die Väter antworten, dass der Mensch Gott nur durch Gnade, Demut und Teilhabe ähnlich wird, nicht durch Selbstvergottung. Die Wüstenväter Ägyptens haben die Demut nicht als Schwäche, sondern als die eigentliche Stärke beschrieben: Antonius sah die Fallstricke des Feindes über die ganze Erde gespannt und hörte, dass allein die Demut ihnen entkommt.`,
    detail: `- **Athanasius, Contra Gentes 8–9:** Der Mensch, der sich von Gott abwendet, beginnt, das Geschaffene – auch sich selbst – zu vergöttlichen. Die Folge ist nicht Befreiung, sondern Knechtschaft unter den Leidenschaften.
- **Antonius (Apophthegmata Patrum):** „Ich sah die Schlingen des Feindes über die Erde ausgebreitet und sagte seufzend: Wer kann ihnen entgehen? Und ich hörte eine Stimme: die Demut."
- **Die koptische Kirche** lebt diese Umwertung praktisch: Ihre größten Gestalten – Antonius, Makarius, Schenute, die Märtyrer – waren nach weltlichen Maßstäben machtlos und haben doch Weltgeschichte geprägt. Athanasius stand in fünf Verbannungen allein gegen Kaiser („Athanasius contra mundum") – Demut vor Gott und Unbeugsamkeit vor Menschen gehören zusammen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', year: 'ca. 318–335', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Antonius der Große (Apophthegmata Patrum)', work: 'Sprüche der Wüstenväter, Antonius', ref: 'Nr. 7 (alphabetische Sammlung)', year: '4. Jh.', quote: `Ich sah alle Schlingen des Feindes über die Erde ausgebreitet und sprach seufzend: Wer kann ihnen entkommen? Und ich hörte eine Stimme, die zu mir sagte: Die Demut.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '8–9', year: 'ca. 335', quote: `Die Seele, die sich vom Schöpfer abwandte, begann, das Geschaffene und sich selbst zu vergöttlichen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Nietzsche-Forschung gilt „Gott ist tot" als **kulturelle Diagnose**, nicht als ausgearbeiteter Beweis gegen Gottes Existenz. Nietzsche war kein Antisemit und kein Vorläufer des Nationalsozialismus im direkten Sinn; seine Schwester Elisabeth Förster-Nietzsche hat seinen Nachlass tendenziös bearbeitet („Der Wille zur Macht"), und Walter Kaufmann hat ihn nach 1945 von dieser Vereinnahmung befreit. Soziologisch hat sich Nietzsches Prophezeiung nur teilweise erfüllt: Peter L. Berger, einst Vertreter der Säkularisierungsthese, erklärte 1999, die Annahme einer säkularisierten Welt sei falsch; weltweit wächst die Zahl der Christen, besonders in Afrika und Asien – während Westeuropa sich stark säkularisiert.`,
    detail: `- **Nietzsche als ehrlicher Gegner:** Viele christliche Denker (Hart, Holland, schon Chesterton) schätzen Nietzsche, weil er klarer als die meisten Atheisten sah, dass mit dem Gottesglauben auch die christliche Moral ihre Grundlage verliert.
- **Tom Holland** (*Dominion*, 2019), Historiker und kein kirchlicher Apologet, argumentiert, dass die Werte des modernen Westens – Menschenwürde, Fürsorge für die Schwachen, Menschenrechte, sogar der säkulare Humanismus – zutiefst christlichen Ursprungs sind. Er nennt Nietzsche als einen der wenigen, die das in voller Schärfe erkannten.
- **Jürgen Habermas** hat den egalitären Universalismus der Moderne als unmittelbares Erbe der jüdischen Gerechtigkeits- und christlichen Liebesethik bezeichnet.`,
    sources: [
      { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind (dt. Herrschaft)', year: '2019', quote: `Die Werte, die der säkulare Westen für selbstverständlich hält – die Würde jedes Einzelnen, die Sorge für die Schwachen –, sind christlichen Ursprungs; Nietzsche gehörte zu den wenigen, die das klar erkannten.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Zeit der Übergänge', year: '2001', quote: `Der egalitäre Universalismus, aus dem die Ideen von Freiheit und solidarischem Zusammenleben, von Menschenrechten und Demokratie hervorgegangen sind, ist unmittelbar ein Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik.`, status: 'paraphrase', note: 'Habermas versteht sich als „religiös unmusikalisch"; das Zitat wird oft zugespitzt wiedergegeben – Wortlaut vor wörtlicher Verwendung prüfen.' },
      { kind: 'fachliteratur', author: 'Peter L. Berger (Hg.)', work: 'The Desecularization of the World: Resurgent Religion and World Politics', year: '1999', quote: `Die Annahme, wir lebten in einer säkularisierten Welt, ist falsch; die Welt ist heute so religiös wie eh und je, in manchen Gegenden mehr denn je.`, status: 'paraphrase', note: 'Berger hatte zuvor selbst die Säkularisierungsthese vertreten.' },
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'The Future of World Religions: Population Growth Projections, 2010–2050', year: '2015', quote: `Das Christentum bleibt bis 2050 voraussichtlich die größte Religion der Welt; sein Schwerpunkt verlagert sich nach Afrika südlich der Sahara.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Nietzsche ist der ehrlichste Atheist: Er sah, dass mit Gott auch die christliche Moral fällt – die Würde jedes Menschen, das Mitgefühl mit den Schwachen. Die meisten, die heute „Gott ist tot" sagen, wollen diese Werte aber behalten. Dann stehen sie vor Nietzsches Wahl: entweder die Werte aufgeben – wohin das führt, hat das 20. Jahrhundert gezeigt – oder neu fragen, ob die Wurzel, aus der sie gewachsen sind, nicht doch wahr ist. Und übrigens: Gott ist nicht tot. Noch nie haben so viele Menschen an Christus geglaubt wie heute.`,
  keyPoints: [
    `**Nietzsche als Zeuge:** Er sah klarer als die „bequemen" Atheisten: Wer den christlichen Glauben aufgibt, zieht sich das Recht zur christlichen Moral unter den Füßen weg (Götzen-Dämmerung).`,
    `**Unsere Werte sind christliches Erbe:** Menschenwürde, Gleichheit, Fürsorge für Schwache sind historisch aus dem Glauben an den Menschen als Gottes Ebenbild erwachsen – das bestätigen Holland und Habermas.`,
    `**„Eigene Werte schaffen" heißt: Es gibt keine wahren Werte.** Dann wären auch die Werte eines Tyrannen „geschaffen" und gleich gültig. Nietzsche akzeptierte das („jenseits von Gut und Böse") – die meisten Menschen können es nicht.`,
    `**Die christliche Umwertung ist nicht Ressentiment, sondern Liebe:** Der Gott, der Knechtsgestalt annimmt (Phil 2,7), handelt aus Stärke, nicht aus Neid.`,
    `**Die Kirche bietet mehr als den Übermenschen:** Theosis – der Mensch wird durch Gnade Gott ähnlich. Der Weg ist Demut, nicht Selbstvergottung.`,
    `**Gott ist nicht tot:** Die Säkularisierungsthese ist weltweit gescheitert (Berger 1999); das Christentum wächst, besonders im globalen Süden.`,
  ],
  argument: {
    name: 'Nietzsches Dilemma für den säkularen Humanismus',
    summary: 'Wer „Gott ist tot" sagt, aber an Menschenwürde festhält, muss eine Wahl treffen.',
    premises: [
      {
        text: `P1: Die Grundwerte des modernen Humanismus – gleiche Würde jedes Menschen, Vorrang der Schwachen, Feindesliebe, Menschenrechte – sind historisch und begrifflich im christlichen Glauben verwurzelt, vor allem in der Lehre vom Menschen als Ebenbild Gottes und in der Menschwerdung Gottes.`,
        support: `Das ist kein christliches Wunschdenken, sondern wird von nichtkirchlichen Historikern und Philosophen bestätigt (Holland, Habermas). Die antike Welt kannte keinen allgemeinen Begriff der Würde aller Menschen; Aussetzung von Säuglingen und Gladiatorenspiele galten als normal.`,
      },
      {
        text: `P2: Wenn man die Wurzel entfernt, verlieren diese Werte ihre Begründung und bestehen nur noch als kulturelle Gewohnheit fort.`,
        support: `Das ist Nietzsches eigene These (Götzen-Dämmerung, Streifzüge 5): Das Christentum ist ein System; bricht man den Glauben an Gott heraus, zerbricht das Ganze.`,
        sources: [
          { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Götzen-Dämmerung', ref: 'Streifzüge eines Unzeitgemässen 5', year: '1889', quote: `Wenn man den christlichen Glauben aufgiebt, zieht man sich damit das Recht zur christlichen Moral unter den Füssen weg.`, status: 'verbatim', note: 'Originalorthografie. Nietzsche richtet dies gegen George Eliot und die englischen Freidenker.' },
        ],
      },
      {
        text: `P3: Die meisten Menschen, die „Gott ist tot" sagen, wollen an diesen Werten festhalten.`,
        support: `Kaum ein heutiger Atheist will Nietzsches „Herrenmoral"; die meisten verstehen sich als Humanisten und berufen sich auf Menschenrechte.`,
      },
    ],
    conclusion: `Wer „Gott ist tot" sagt und zugleich an der gleichen Würde aller Menschen festhält, muss eine von drei Möglichkeiten wählen.`,
    horns: [
      { label: 'Horn A: Mit Nietzsche die Werte umwerten', text: `Konsequent, aber unannehmbar: Die Verachtung des Schwachen und die Herrschaft der Starken widerspricht dem Gewissen fast aller Menschen, und das 20. Jahrhundert hat gezeigt, was geschieht, wenn Menschen „eigene Werte" über die Würde der Schwachen stellen.` },
      { label: 'Horn B: Eine neue säkulare Begründung liefern', text: `Möglich, aber bisher nicht überzeugend: Empathie ist selektiv, Nützlichkeit kann Minderheiten opfern, und „nackte" Werttatsachen passen schlecht in ein materialistisches Weltbild (siehe Themenblock „Moral ohne Gott?").` },
      { label: 'Horn C: Die Wurzel neu prüfen', text: `Wenn die Werte, an denen wir am meisten hängen, nur auf christlichem Boden wirklich begründet sind, ist das ein starker Grund, die Wahrheit dieses Bodens ernsthaft zu prüfen.` },
    ],
  },
  voices: [
    {
      person: 'dostojewski',
      role: 'als Schriftsteller, der den Nihilismus von innen kannte',
      text: `Dostojewski hat Nietzsches Fragen literarisch durchgespielt, bevor Nietzsche sie formulierte. In *Die Dämonen* (1872) zieht der Ingenieur Kirillow die Folgerung: Wenn es keinen Gott gibt, dann bin ich Gott – und beweist seine Freiheit durch Selbstmord. In *Die Brüder Karamasow* (1880) entwickelt Iwan die Idee, dass ohne Unsterblichkeit „alles erlaubt" sei, und sein Halbbruder Smerdjakow setzt sie in einen Mord um. Wichtig: Der berühmte Satz „Wenn Gott nicht existiert, ist alles erlaubt" steht so nicht wörtlich im Roman, sondern ist eine Zusammenfassung von Iwans Gedanken (Sartre zitiert ihn so). Dostojewskis Antwort ist nicht ein Argument, sondern eine Gestalt: der Starez Sossima und Aljoscha, die in tätiger Liebe zeigen, was Iwans Logik nicht widerlegen, aber überwinden kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Dämonen (Besy)', ref: 'Teil III, Kap. 6', year: '1872', quote: `Kirillow: Wenn es keinen Gott gibt, dann bin ich Gott.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Kulturkritiker des modernen Skeptizismus',
      text: `G. K. Chesterton beschreibt in *Orthodoxy* (1908), Kapitel „Der Selbstmord des Denkens", wie die moderne Skepsis an jedem Maßstab sägt, bis ihr selbst kein Maßstab mehr bleibt, um überhaupt etwas zu kritisieren. Wer alle Werte „umwerten" will, braucht einen Wert, nach dem er umwertet – sonst ist seine Revolte richtungslos. Chesterton bewundert Nietzsches Mut, hält ihm aber entgegen, dass der Wille, der nur noch sich selbst will, in die Leere läuft: Wer alles wollen darf, kann nichts mehr wirklich wählen, denn jede Wahl ist Ausschluss.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', ref: 'Kap. 3 („The Suicide of Thought")', year: '1908', quote: `Der Kult des reinen Willens zerstört sich selbst: Jede Wahl ist eine Begrenzung, und wer nichts begrenzen will, kann nichts wollen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hart',
      role: 'als Kulturhistoriker der christlichen Revolution',
      text: `David Bentley Hart argumentiert in *Atheist Delusions* (2009), dass Nietzsche das Christentum besser verstanden hat als die meisten „Neuen Atheisten": Er sah, dass das Evangelium eine Revolution war, die die Werte der antiken Welt – Ruhm, Stärke, Verachtung der Schwachen – umgestürzt hat. Der heutige säkulare Humanismus lebt, so Hart, vom moralischen Kapital dieser Revolution, ohne ihre Voraussetzungen zu teilen. Nietzsche verdient Respekt dafür, dass er diese Inkonsequenz nicht duldete. (Hinweis: Harts eschatologische Positionen teilt die koptische Kirche nicht; hier spricht er als Historiker.)`,
      sources: [
        { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions: The Christian Revolution and Its Fashionable Enemies', year: '2009', quote: `Die Moderne zehrt vom moralischen Erbe der christlichen Revolution, während sie deren Glauben verwirft; Nietzsche erkannte diese Abhängigkeit klarer als seine Nachfolger.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Vergöttlichung',
      text: `Für Athanasius ist das tiefste Verlangen des Menschen nicht falsch: Er ist dazu bestimmt, an Gottes Leben teilzuhaben. Falsch ist der Weg, den Nietzsche vorschlägt – die Selbstvergottung. Athanasius beschreibt in *Contra Gentes*, wie die Seele, die sich vom Schöpfer abwandte, begann, Geschöpfe und sich selbst zu vergöttlichen, und gerade dadurch in Knechtschaft geriet. Der wahre Weg ist umgekehrt: Gott wurde Mensch, damit der Mensch durch Teilhabe vergöttlicht werde. Die Erhöhung des Menschen kommt von oben, als Geschenk – nicht von unten, als Willensakt.`,
    },
  ],
  dialog: [
    {
      id: 'sklavenmoral',
      objection: `Die christliche Moral ist Sklavenmoral. Die Schwachen konnten sich an den Starken nicht rächen, also erklärten sie ihre Schwäche zur Tugend: Demut, Mitleid, Sanftmut. Das ist Ressentiment, das sich als Liebe verkleidet – und es hat das Leben vergiftet.`,
      objectionBy: 'Friedrich Nietzsche (Zur Genealogie der Moral)',
      answer: `Nietzsche hat richtig gesehen, dass das Christentum die Werte der Antike umgestürzt hat: Gott erwählt die Schwachen (1 Kor 1,27). Aber „Ressentiment" ist eine psychologische Unterstellung, keine Beobachtung. Christus war nicht schwach aus Unvermögen – er nahm Knechtsgestalt freiwillig an (Phil 2,7) und betete für seine Mörder. Und die eigentliche Frage ist: Willst du die Alternative? Eine Moral, in der der Starke den Schwachen verachten darf?`,
      detail: `Nietzsche, *Zur Genealogie der Moral* I,10: „Der Sklavenaufstand in der Moral beginnt damit, dass das Ressentiment selbst schöpferisch wird und Werthe gebiert." Christen können Nietzsche in der Beschreibung zustimmen – das Christentum *hat* die Werte umgewertet. Sie widersprechen in der Deutung: Nicht Neid, sondern die Offenbarung der göttlichen Liebe hat den Menschen gezeigt, dass jeder Mensch, auch der schwächste, unendlichen Wert hat. Tom Holland beschreibt eindrücklich, wie radikal das in einer Welt war, in der man behinderte Kinder aussetzte.`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Zur Genealogie der Moral', ref: 'I,10', year: '1887', quote: `Der Sklavenaufstand in der Moral beginnt damit, dass das Ressentiment selbst schöpferisch wird und Werthe gebiert.`, status: 'verbatim', note: 'Originalorthografie.' },
      ],
      questionsBack: [
        `Wenn Mitleid mit den Schwachen nur Ressentiment ist – wie begründest du dann den Schutz von Behinderten, Kranken und Kindern?`,
        `Ist Christus am Kreuz, der für seine Mörder betet, ein Bild von Rachsucht?`,
      ],
      followUps: [
        {
          id: 'nietzsche-kein-nazi',
          objection: `Komm mir jetzt nicht mit den Nazis. Nietzsche verachtete Antisemiten und Nationalisten; seine Schwester hat seine Texte verfälscht. Ihn für Hitler verantwortlich zu machen ist billig.`,
          objectionBy: 'Walter Kaufmann (Nietzsche-Forscher)',
          answer: `Einverstanden – das wäre unfair. Nietzsche verachtete den Antisemitismus, und seine Schwester hat seinen Nachlass manipuliert. Mein Punkt ist kein Schuldvorwurf, sondern ein logischer: Wenn das Mitgefühl mit den Schwachen keine Grundlage mehr hat, gibt es nichts mehr, was diejenigen aufhält, die „eigene Werte" schaffen und die Schwachen verachten. Die Eugenik des frühen 20. Jahrhunderts war übrigens weitgehend säkular-wissenschaftlich begründet – in England und den USA genauso wie in Deutschland.`,
          detail: `Fairness stärkt die Glaubwürdigkeit: Nietzsche schrieb scharf gegen Antisemiten (auch gegen seinen Schwager Bernhard Förster). Elisabeth Förster-Nietzsche stellte aus dem Nachlass das Werk „Der Wille zur Macht" zusammen und rückte ihren Bruder in die Nähe des Nationalsozialismus. Der Punkt bleibt: Nietzsche selbst hat die Frage gestellt, welche Werte nach dem Tod Gottes tragen – und er hat keine Garantie gegeben, dass es menschenfreundliche sein werden.`,
          followUps: [
            {
              id: 'humanismus-ohne-gott',
              objection: `Wir brauchen weder Gott noch Nietzsches Übermenschen. Säkularer Humanismus begründet Würde und Mitgefühl durch Vernunft und Empathie. Das funktioniert seit der Aufklärung prächtig.`,
              objectionBy: 'Steven Pinker (Enlightenment Now, 2018)',
              answer: `Genau diese Position hat Nietzsche als „englische Folgerichtigkeit" verspottet: den christlichen Gott loswerden und die christliche Moral behalten wollen. Empathie ist selektiv – sie gilt zuerst der eigenen Gruppe. Und die Vernunft allein liefert keine gleiche Würde aller: Aristoteles war hochvernünftig und hielt manche Menschen für Sklaven von Natur. Die Idee, dass jeder Mensch unendlichen Wert hat, ist historisch aus dem Glauben an das Ebenbild Gottes gewachsen.`,
              detail: `Ausführlich im Themenblock „Moral ohne Gott?". Hier genügt: Christen bestreiten nicht, dass säkulare Humanisten moralisch handeln – oft vorbildlich. Sie fragen, ob deren Weltbild die *Begründung* liefert, die ihre Moral voraussetzt. Nietzsche war überzeugt: nein.`,
              sources: [
                { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Götzen-Dämmerung', ref: 'Streifzüge eines Unzeitgemässen 5', year: '1889', quote: `Sie sind den christlichen Gott los und glauben nun um so mehr die christliche Moral festhalten zu müssen: das ist eine englische Folgerichtigkeit.`, status: 'verbatim', note: 'Originalorthografie; gegen George Eliot gerichtet.' },
              ],
              followUps: [
                {
                  id: 'genetischer-fehlschluss-holland',
                  objection: `Selbst wenn unsere Werte historisch aus dem Christentum stammen: Das ist ein genetischer Fehlschluss. Die Herkunft einer Idee sagt nichts über ihre Gültigkeit. Die Astronomie stammt aus der Astrologie – und ist trotzdem wahr.`,
                  objectionBy: 'Säkularer Philosoph',
                  answer: `Völlig richtig: Herkunft entscheidet nicht über Gültigkeit. Aber meine Frage ist nicht die nach der Herkunft, sondern nach der *Begründung*. Die Astronomie hat sich von der Astrologie gelöst und eigene Begründungen gefunden. Hat der säkulare Humanismus eine eigene, gleichwertige Begründung für die unbedingte Würde jedes Menschen gefunden – oder lebt er noch von Voraussetzungen, die er selbst nicht begründen kann? Das ist Hollands und Nietzsches Punkt.`,
                  detail: `Der Philosoph Ernst-Wolfgang Böckenförde formulierte 1967 für den Staat: „Der freiheitliche, säkularisierte Staat lebt von Voraussetzungen, die er selbst nicht garantieren kann." Dasselbe gilt für eine säkulare Moral. Der Christ sagt nicht „Deine Werte sind gestohlen, also falsch", sondern: „Deine Werte sind wahr – und gerade deshalb weisen sie über dein Weltbild hinaus."`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Ernst-Wolfgang Böckenförde', work: 'Die Entstehung des Staates als Vorgang der Säkularisation', year: '1967', quote: `Der freiheitliche, säkularisierte Staat lebt von Voraussetzungen, die er selbst nicht garantieren kann.`, status: 'verbatim', note: 'Das „Böckenförde-Diktum"; Böckenförde war Verfassungsrichter und Katholik.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-kulturell-tot',
      objection: `„Gott ist tot" ist einfach eine Feststellung. In der modernen Welt ist der Glaube unglaubwürdig geworden. Die Kirchen leeren sich, die Wissenschaft erklärt die Welt. Nietzsche hat nur ausgesprochen, was geschah.`,
      objectionBy: 'Säkularer Kulturdiagnostiker',
      answer: `Weltweit stimmt das nicht. Der Soziologe Peter Berger, früher selbst ein Vertreter der Säkularisierungsthese, hat 1999 eingeräumt, dass die Welt so religiös ist wie eh und je. Noch nie haben so viele Menschen an Christus geglaubt wie heute – in Afrika, Asien, Lateinamerika. Die koptische Kirche lebt unter Druck und ist lebendiger denn je. Und vor allem: Ob Gott existiert, entscheidet keine Mehrheit und keine Mode.`,
      detail: `Nietzsches „toller Mensch" in § 125 feiert übrigens nicht: Er fragt erschüttert, wie wir das Meer austrinken und den Horizont wegwischen konnten, und wer uns das Blut abwischt. Nietzsche sah im Tod Gottes eine Katastrophe von ungeheurer Tragweite, die die Menschen noch gar nicht begriffen hatten. Wer „Gott ist tot" als fröhliche Befreiungsparole verwendet, hat Nietzsche nicht gelesen.`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Die fröhliche Wissenschaft', ref: '§ 125 („Der tolle Mensch")', year: '1882', quote: `Gott ist todt! Gott bleibt todt! Und wir haben ihn getödtet! Wie trösten wir uns, die Mörder aller Mörder?`, status: 'verbatim', note: 'Originalorthografie der Erstausgabe.' },
      ],
      followUps: [
        {
          id: 'europa-saekular',
          objection: `Mag sein, dass Afrika religiös ist. Aber in Europa, wo Bildung und Wohlstand am höchsten sind, stirbt der Glaube. Das zeigt die Richtung.`,
          objectionBy: 'Säkularisierungstheoretiker',
          answer: `In Westeuropa geht die Kirchenbindung tatsächlich stark zurück – das muss man zugeben. Aber Europa ist eher die Ausnahme als das Muster: Auch in hochgebildeten, wohlhabenden Gesellschaften wie den USA oder Südkorea ist der Glaube stark. Und Europas Krise der Werte – die Frage, worauf Menschenwürde eigentlich beruht – ist genau das, was Nietzsche vorausgesagt hat. Dass Europa Gott verliert, ist nicht der Beweis, dass es ihn nicht gibt, sondern vielleicht der Grund für seine Orientierungslosigkeit.`,
          detail: `Die Religionssoziologin Grace Davie prägte für Großbritannien die Formel „believing without belonging" (Glauben ohne Zugehörigkeit). Spirituelle Suche verschwindet nicht, sie verlagert sich. Siehe auch den Claim „Religion stirbt mit Wohlstand und Bildung aus" (Themenblock Soziologie).`,
          followUps: [
            {
              id: 'skandinavien-gluecklich',
              objection: `Und die säkularsten Länder – Dänemark, Schweden, Norwegen – sind die glücklichsten und friedlichsten der Welt. Gott fehlt dort niemandem.`,
              objectionBy: 'Phil Zuckerman (Society without God, 2008)',
              answer: `Skandinavien ist ein faszinierender Fall – aber ein Beleg für meinen Punkt. Sein Sozialstaat, seine Gleichheit, seine Fürsorge für Schwache sind aus tausend Jahren christlich-lutherischer Prägung gewachsen. Die Frage ist, ob diese Werte ohne ihre Wurzel über Generationen tragen. Glücksindizes messen vor allem Wohlstand, Sicherheit und Vertrauen – und Vertrauen ist Kapital, das lange vorhält, bevor man merkt, dass es aufgebraucht wird.`,
              detail: `Zuckermans Studie ist seriös und verdient eine faire Antwort. Ausführlich im Claim „Säkulare Gesellschaften sind glücklicher und moralischer". Dort auch: Innerhalb vieler Länder sind religiös praktizierende Menschen im Durchschnitt zufriedener und sozial engagierter.`,
            },
          ],
        },
      ],
    },
    {
      id: 'eigene-werte-schaffen',
      objection: `Ohne Gott sind wir endlich frei, unsere eigenen Werte zu schaffen. Der Mensch muss sich selbst überwinden, sein eigener Gesetzgeber werden – das ist die größte Befreiung der Geschichte.`,
      objectionBy: 'Friedrich Nietzsche / Jean-Paul Sartre',
      answer: `Wenn Werte geschaffen und nicht entdeckt werden, gibt es keine wahren Werte – dann sind die Werte des Folterers genauso „geschaffen" wie die der Krankenschwester. Nietzsche war konsequent genug, das zu akzeptieren: „jenseits von Gut und Böse". Fast niemand kann so leben. Und das Christentum bietet eine größere Erhebung des Menschen als der Übermensch: Theosis – der Mensch wird durch Gnade Gott ähnlich. Aber nicht durch Selbstvergottung, sondern durch Liebe.`,
      detail: `Nietzsche fragt in § 125: „Müssen wir nicht selber zu Göttern werden, um nur ihrer [der Tat] würdig zu erscheinen?" Das ist eine bemerkenswerte Parallele und zugleich ein Gegensatz zu Athanasius' „Er wurde Mensch, damit wir vergöttlicht würden". Beide sehen, dass der Mensch über sich hinaus will. Die Bibel nennt den einen Weg die Urversuchung (Gen 3,5: „ihr werdet sein wie Gott"), den anderen die Erlösung (2 Petr 1,4: „teilhaftig werdet der göttlichen Natur").`,
      sources: [
        { kind: 'bibel', work: '2. Petrus', ref: '1,4', quote: `… auf daß ihr durch dieselben teilhaftig werdet der göttlichen Natur …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn du deine Werte selbst schaffst – kann ein anderer Mensch, der andere Werte schafft, dann im Unrecht sein?`,
        `Welche Werte hast du eigentlich selbst geschaffen, die nicht christlichen Ursprungs sind?`,
      ],
      followUps: [
        {
          id: 'theosis-machtwille',
          objection: `„Theosis" ist doch nur derselbe Wille zur Macht in religiöser Verkleidung. Auch ihr wollt Götter werden.`,
          objectionBy: 'Nietzscheanischer Einwand',
          answer: `Der Weg ist genau entgegengesetzt. Der Übermensch erhebt sich durch Selbstbehauptung über andere. Die Theosis geschieht durch Empfangen und Demut, nach dem Bild Christi, der „nicht für einen Raub hielt, Gott gleich zu sein, sondern sich selbst entäußerte" (Phil 2,6–7). Der Gott der Christen zeigt seine Macht als dienende Liebe. Antonius hörte, dass allein die Demut den Fallstricken des Bösen entkommt – nicht die Stärke.`,
          detail: `Der Unterschied lässt sich an den Früchten erkennen: Die Heiligen, die nach Theosis strebten – die Wüstenväter, die Märtyrer, Mutter Irini, Papst Kyrill VI. –, wurden nicht herrischer, sondern sanfter, dienender, freier. Das ist das Gegenteil eines Machtwillens.`,
          followUps: [
            {
              id: 'demut-ist-schwaeche',
              objection: `Demut ist Schwäche. Wer sich ständig klein macht, lebt in Selbstverachtung. Ein gesunder Mensch bejaht sich selbst.`,
              objectionBy: 'Nietzscheanischer Einwand',
              answer: `Demut ist nicht Selbstverachtung, sondern Wahrheit über sich selbst: weder aufgeblasen noch erniedrigt, sondern so, wie Gott mich sieht – geschaffen, geliebt, begnadigt. Gerade die Demütigsten waren oft die Stärksten: Athanasius wurde fünfmal verbannt und stand allein gegen Kaiser und Mehrheiten – „Athanasius gegen die Welt". Demut befreit vom ständigen Vergleichen, und wer sich nicht mehr vergleichen muss, kann furchtlos sein.`,
              detail: `Nietzsche verwechselt christliche Demut mit dem, was die Väter selbst als Laster bekämpften: Kleinmut und Verzagtheit. Die Wüstenväter warnten ausdrücklich vor falscher Demut, die nur verkleideter Stolz ist. Echte Demut ist die Voraussetzung echter Kühnheit (griechisch *parrhesia*), mit der die Märtyrer vor Kaiser und Richter traten.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Gott tot ist – worauf gründest du die gleiche Würde eines Menschen mit schwerer Behinderung?`,
    `Hat Nietzsche recht, dass man ohne christlichen Glauben kein Recht auf christliche Moral hat? Wenn nein, warum nicht?`,
    `Welche deiner Werte hast du wirklich selbst geschaffen?`,
    `Hast du gelesen, wie erschüttert Nietzsches „toller Mensch" über den Tod Gottes ist?`,
  ],
  avoid: [
    `„Nietzsche ist wahnsinnig geworden – das zeigt, wohin Atheismus führt." – Sein Zusammenbruch 1889 hatte medizinische Ursachen; das ist ein Ad-hominem-Argument und respektlos.`,
    `„Nietzsche war der Philosoph der Nazis." – Historisch unfair; seine Schwester hat ihn vereinnahmt. Das zerstört deine Glaubwürdigkeit bei jedem, der Nietzsche kennt.`,
    `„Wenn Gott nicht existiert, ist alles erlaubt" als wörtliches Dostojewski-Zitat ausgeben – der Satz steht so nicht im Roman.`,
    `Behaupten, Atheisten könnten nicht moralisch sein – die Frage ist die Begründung, nicht das Verhalten.`,
  ],
  concessions: [
    `Nietzsche hat einen wahren Kern getroffen: Ein Christentum, das nur noch aus Moral und Schuldgefühl besteht und das Leben verneint, ist eine Karikatur – Christen haben dazu manchmal Anlass gegeben.`,
    `In Westeuropa ist die Säkularisierung real und tiefgreifend.`,
    `Viele säkulare Humanisten leben vorbildlich nach den Werten, deren Begründung wir bezweifeln.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion (dt. Herrschaft: Die Entstehung des Westens)', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'Atheist Delusions', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie (Orthodoxy)', year: '1908', status: 'paraphrase' },
    { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Die fröhliche Wissenschaft, § 125; Götzen-Dämmerung', year: '1882/1889', status: 'paraphrase', note: 'Im Original lesen – kurz und eindrucksvoll.' },
  ],
  difficulty: 2,
  tags: ['Nietzsche', 'Tod Gottes', 'Nihilismus', 'Sklavenmoral', 'Theosis', 'Humanismus', 'Säkularisierung'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'moral-und-gott/moral-kulturell-relativ',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'religion-gewalt/atheistische-regime',
    'soziologie/saekularisierung-unaufhaltsam',
    'soziologie/saekulare-gesellschaften-gluecklicher',
    'sinn-existenz/kein-objektiver-sinn',
  ],
};

export default claim;
