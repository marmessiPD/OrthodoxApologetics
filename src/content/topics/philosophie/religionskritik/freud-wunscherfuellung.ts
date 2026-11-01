import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'freud-wunscherfuellung',
  title: `„Religion ist infantile Wunscherfüllung und kollektive Neurose (Freud)."`,
  proponents: [
    {
      name: 'Sigmund Freud',
      role: 'Neurologe, Begründer der Psychoanalyse (1856–1939)',
      work: 'Die Zukunft einer Illusion (1927); Totem und Tabu (1912/13); Zwangshandlungen und Religionsübungen (1907); Das Unbehagen in der Kultur (1930)',
    },
    {
      name: 'Richard Dawkins',
      role: 'Evolutionsbiologe, Oxford',
      work: 'The God Delusion (Der Gotteswahn, 2006)',
    },
    {
      name: 'Jesse Bering',
      role: 'Psychologe, University of Otago',
      work: 'The Belief Instinct (2011)',
    },
  ],
  steelman: `Freud fragt nicht zuerst, ob religiöse Lehren wahr sind, sondern warum Menschen sie so verzweifelt festhalten. Seine Antwort: Sie sind „nicht Niederschläge der Erfahrung oder Endresultate des Denkens, sondern Illusionen, Erfüllungen der ältesten, stärksten, dringendsten Wünsche der Menschheit". Das hilflose Kind sucht Schutz beim allmächtigen Vater. Der Erwachsene steht den Naturgewalten, dem Schicksal und dem Tod genauso hilflos gegenüber – und erschafft sich einen erhöhten Vater im Himmel, der ihn beschützt, belohnt und ewig leben lässt. Es ist doch sehr auffällig, dass alles genau so ist, wie wir es uns wünschen müssen: eine gütige Vorsehung, eine sittliche Weltordnung, ein Leben nach dem Tod. Religion gleicht zudem einer Zwangsneurose: starre Rituale, Schuldgefühle, Verbote; sie stammt wie die kindliche Neurose aus dem Ödipuskomplex, der ambivalenten Beziehung zum Vater. Die Menschheit muss erwachsen werden. „Erziehung zur Realität" heißt, auf den himmlischen Vater zu verzichten und sich der Wissenschaft anzuvertrauen – „unsere Wissenschaft ist keine Illusion".`,
  biblical: {
    summary: `Die Bibel nennt Gott „Vater" – aber nicht als Wunschbild, sondern als Offenbarung durch den Sohn: „Niemand kennt den Vater denn nur der Sohn, und wem es der Sohn will offenbaren" (Mt 11,27). Die Gotteskindschaft ist Geschenk durch den Geist, der uns „Abba, lieber Vater" rufen lässt (Röm 8,15). Und dieser Vater ist zugleich der Heilige, vor dem man erschrickt (Jes 6,5; Hebr 10,31), der Selbstverleugnung verlangt (Mt 16,24) und seinen eigenen Sohn nicht verschonte (Röm 8,32). Die Schrift selbst weiß um die Täuschbarkeit des menschlichen Herzens (Jer 17,9) – sie ist also keineswegs naiv gegenüber Wunschdenken. Sie fordert reife, nicht kindische Erkenntnis: „Werdet nicht Kinder an dem Verständnis" (1 Kor 14,20).`,
    detail: `- **Vaterschaft als Offenbarung:** Im Alten Testament wird Gott nur zurückhaltend „Vater" genannt (z. B. Jes 63,16); Jesus spricht ihn als „Abba" an und schenkt diese Anrede seinen Jüngern (Mt 6,9; Röm 8,15; Gal 4,6).
- **Kein bequemer Gott:** Jesaja ruft beim Anblick Gottes „Weh mir, ich vergehe!" (Jes 6,5). Hiob erlebt Gott als unbegreiflich. Der Gekreuzigte schreit „Mein Gott, mein Gott, warum hast du mich verlassen?" (Mt 27,46). Ein Wunschgott sähe anders aus.
- **Kindlich ist nicht kindisch:** Mt 18,3 ruft zum Vertrauen der Kinder auf; 1 Kor 14,20 verlangt erwachsenes Verständnis; Hebr 5,12–14 tadelt geistliche Unreife.
- **Ehrlich:** Ps 27,10 sagt: „Denn mein Vater und meine Mutter verlassen mich; aber der HERR nimmt mich auf." Die Bibel kennt also die Verbindung von irdischer Vaterlosigkeit und Gottesnähe – sie deutet sie aber als Gottes Treue, nicht als Kompensation.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '11,27', quote: `… und niemand kennt den Sohn denn nur der Vater; und niemand kennt den Vater denn nur der Sohn und wem es der Sohn will offenbaren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,15', quote: `Denn ihr habt nicht einen knechtischen Geist empfangen, daß ihr euch abermals fürchten müßtet; sondern ihr habt einen kindlichen Geist empfangen, durch welchen wir rufen: Abba, lieber Vater!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '6,5', quote: `Da sprach ich: Weh mir, ich vergehe! denn ich bin unreiner Lippen und wohne unter einem Volk von unreinen Lippen; denn ich habe den König, den HERRN Zebaoth, gesehen mit meinen Augen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '14,20', quote: `Liebe Brüder, werdet nicht Kinder an dem Verständnis; sondern an der Bosheit seid Kinder, an dem Verständnis aber seid vollkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '17,9', quote: `Es ist das Herz ein trotzig und verzagt Ding; wer kann es ergründen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '27,10', quote: `Denn mein Vater und meine Mutter verlassen mich; aber der HERR nimmt mich auf.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Tradition ist sich der Gefahr bewusst, dass Menschen sich Gott nach ihren Wünschen formen. Deshalb betont sie zweierlei: **Offenbarung** – Gott wird erkannt, weil er sich in Christus zeigt, nicht weil wir ihn erdenken – und **Apophatik** – Gott übersteigt alle unsere Begriffe und Bilder. Die Wüstenväter Ägyptens haben die menschliche Psyche mit erstaunlicher Tiefe beobachtet: Sie kannten die Macht der Gedanken (*logismoi*), Selbsttäuschung und falsche Frömmigkeit, und sie verlangten Unterscheidung der Geister. Ihr geistliches Leben war kein Rückzug in kindliche Geborgenheit, sondern ein Kampf in der Wüste, in dem gerade die Wunschbilder des Ich zerbrechen. Reife ist in dieser Tradition das Ziel: das „Maß des vollkommenen Alters Christi" (Eph 4,13).`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '4,13–14', quote: `… bis daß wir alle hinankommen zu einerlei Glauben und Erkenntnis des Sohnes Gottes und ein vollkommener Mann werden, der da sei im Maße des vollkommenen Alters Christi, auf daß wir nicht mehr Kinder seien …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', ref: 'II,165', year: 'um 390', quote: `Jeder Begriff, den der Verstand von Gott bildet, wird zum Götzenbild, wenn man ihn für Gott selbst hält.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Apophthegmata Patrum (Sprüche der Wüstenväter)', work: 'Alphabetische Sammlung', year: '4.–5. Jh.', quote: `Die Wüstenväter lehrten, die eigenen Gedanken zu prüfen und dem geistlichen Vater zu eröffnen, weil das Herz sich selbst leicht täuscht.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Freuds Religionstheorie gilt in der heutigen Psychologie und Anthropologie **nicht als empirisch bestätigt**. Seine Urgeschichte in *Totem und Tabu* (Vatermord in der Urhorde, Totemmahl) wurde schon 1920 von dem Anthropologen Alfred Kroeber zurückgewiesen; E. E. Evans-Pritchard zählte sie zu den spekulativen „Just-so-Geschichten". Die These, Religion sei eine Neurose, widerspricht der heutigen Datenlage: Große Studien zeigen im Durchschnitt positive Zusammenhänge zwischen religiöser Praxis und psychischer Gesundheit (Koenig, VanderWeele). Freud selbst räumte ein, dass eine Illusion nicht notwendig ein Irrtum ist – seine Theorie kann also nur erklären, *warum* jemand glaubt, nicht *ob* der Glaube wahr ist. Die Bindungsforschung (Kirkpatrick, Granqvist) zeigt komplexe Zusammenhänge zwischen Elternbild und Gottesbild, die weder Freud noch seine Kritiker einfach bestätigen.`,
    detail: `- **Freud gesteht selbst zu:** „Eine Illusion ist nicht dasselbe wie ein Irrtum, sie ist auch nicht notwendig ein Irrtum." Er definiert Illusion über ihre Motivation (Wunscherfüllung), nicht über ihre Falschheit.
- **Gegenstimme aus Freuds Umfeld:** Sein Freund, der Schweizer Pfarrer und Psychoanalytiker Oskar Pfister, antwortete 1928 mit *Die Illusion einer Zukunft* – Freud veröffentlichte die Erwiderung in seiner eigenen Zeitschrift *Imago*.
- **Harvard-Psychiater Armand Nicholi** hat in *The Question of God* (2002) Freud und C. S. Lewis über Jahrzehnte im Hörsaal einander gegenübergestellt.
- **Ehrlich:** Es gibt ungesunde, angstbesetzte Religiosität (religiöse Skrupulosität). Freud hat reale Phänomene beobachtet – er hat sie aber unzulässig verallgemeinert.`,
    sources: [
      { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', ref: 'Kap. VI', year: '1927', quote: `Eine Illusion ist nicht dasselbe wie ein Irrtum, sie ist auch nicht notwendig ein Irrtum.`, status: 'verbatim' },
      { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', ref: 'Kap. VI', year: '1927', quote: `[Die religiösen Vorstellungen] sind nicht Niederschläge der Erfahrung oder Endresultate des Denkens, es sind Illusionen, Erfüllungen der ältesten, stärksten, dringendsten Wünsche der Menschheit.`, status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Alfred L. Kroeber', work: 'Totem and Taboo: An Ethnologic Psychoanalysis', ref: 'American Anthropologist 22', year: '1920', quote: `Freuds Rekonstruktion der Urgeschichte (Urhorde, Vatermord, Totemmahl) ist ethnologisch unbegründet.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna B. Carson', work: 'Handbook of Religion and Health (2. Aufl.)', year: '2012', quote: `Die Mehrzahl der Studien zeigt positive Zusammenhänge zwischen religiöser Beteiligung und psychischer Gesundheit (weniger Depression, Suizid, Substanzmissbrauch).`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Oskar Pfister', work: 'Die Illusion einer Zukunft', ref: 'Imago 14', year: '1928', quote: `Freuds Wissenschaftsglaube ist selbst eine Illusion, wenn er meint, Wissenschaft könne die Fragen beantworten, die die Religion beantwortet.`, status: 'paraphrase', note: 'Pfister war Pfarrer, Psychoanalytiker und langjähriger Freund Freuds.' },
    ],
  },
  quickAnswer: `Freud selbst sagt: Eine Illusion ist nicht notwendig ein Irrtum. Seine Theorie erklärt also höchstens, *warum* jemand glauben *könnte* – nicht, ob Gott existiert. Und sie schneidet in beide Richtungen: Der Wunsch, dass es keinen Gott und kein Gericht gibt, ist mindestens ebenso stark – der Atheist Thomas Nagel gibt das offen zu. Außerdem ist der christliche Gott alles andere als bequem: Er richtet, er verlangt Selbstverleugnung, er führt ans Kreuz. Und die heutige Forschung zeigt: Gelebter Glaube geht im Durchschnitt mit besserer, nicht schlechterer psychischer Gesundheit einher.`,
  keyPoints: [
    `**Freuds eigenes Zugeständnis:** „Eine Illusion ist … nicht notwendig ein Irrtum." Wunscherfüllung erklärt Motive, nicht Wahrheit (genetischer Fehlschluss).`,
    `**Das Argument schneidet in beide Richtungen:** Auch Unglaube kann Wunscherfüllung sein – keine Rechenschaft, keine Autorität (Nagel, Huxley). Paul Vitz hat Freuds eigene Methode auf berühmte Atheisten angewandt.`,
    `**Der christliche Gott ist kein Wunschbild:** Gericht, Heiligkeit, Kreuz, Selbstverleugnung – ein selbstgemachter Gott wäre bequemer.`,
    `**Die empirischen Grundlagen sind zerfallen:** Freuds Urhorden-Theorie ist ethnologisch widerlegt; die Neurose-These widerspricht den Gesundheitsdaten.`,
    `**Wer zuerst psychologisiert, überspringt die Wahrheitsfrage:** Erst muss man zeigen, *dass* jemand irrt, dann kann man erklären, *warum* (C. S. Lewis' „Bulverismus").`,
    `**Wenn Gott existiert, ist die Sehnsucht nach ihm kein Defekt, sondern eine Ausrichtung** – wie Durst auf Wasser verweist (Plantinga).`,
  ],
  argument: {
    name: 'Das Symmetrie-Argument gegen die Wunscherfüllungs-These',
    summary: 'Warum Freuds Argument die Gottesfrage nicht entscheiden kann.',
    premises: [
      {
        text: `P1: Freuds Argument zeigt höchstens, dass der Gottesglaube starken menschlichen Wünschen entspricht.`,
        support: `Freud selbst definiert Illusion über die Motivation („wenn sich in ihrer Motivierung die Wunscherfüllung vordrängt"), nicht über ihren Wahrheitswert.`,
      },
      {
        text: `P2: Dass eine Überzeugung einem Wunsch entspricht, entscheidet nicht über ihre Wahrheit.`,
        support: `Freud räumt das ausdrücklich ein: Eine Illusion ist nicht notwendig ein Irrtum. Ein Verdurstender wünscht sich Wasser – es gibt trotzdem Wasser. Die Herkunft einer Überzeugung von ihrer Gültigkeit abhängig zu machen, ist der genetische Fehlschluss.`,
        sources: [
          { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', ref: 'Kap. VI', year: '1927', quote: `Eine Illusion ist nicht dasselbe wie ein Irrtum, sie ist auch nicht notwendig ein Irrtum.`, status: 'verbatim' },
        ],
      },
      {
        text: `P3: Auch der Unglaube entspricht starken Wünschen – etwa nach Autonomie, nach einem Universum ohne Richter, nach moralischer Freiheit; nach Freuds eigener Theorie könnte er sogar ödipaler Auflehnung gegen den Vater entspringen.`,
        support: `Thomas Nagel bekennt: „Ich will, dass der Atheismus wahr ist" (The Last Word, 1997); Aldous Huxley nannte die „Philosophie der Sinnlosigkeit" ein Instrument der Befreiung (Ends and Means, 1937). Paul Vitz hat in *Faith of the Fatherless* (1999) Freuds Ödipus-Theorie auf den Atheismus angewandt.`,
        sources: [
          { kind: 'gegner', author: 'Thomas Nagel', work: 'The Last Word', ref: 'S. 130–131', year: '1997', quote: `Ich will, dass der Atheismus wahr ist, und es beunruhigt mich, dass einige der intelligentesten und gebildetsten Menschen, die ich kenne, religiös sind.`, original: `I want atheism to be true and am made uneasy by the fact that some of the most intelligent and well-informed people I know are religious believers.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: `P4: Ein Argument, das sich mit gleichem Recht gegen eine These und gegen ihr Gegenteil wenden lässt, kann die Frage zwischen beiden nicht entscheiden.`,
        support: `Das ist ein formales Prinzip: Wenn „Wunschmotiv" den Glauben verdächtig macht, macht es den Unglauben ebenso verdächtig – beide Verdachtsmomente heben sich auf.`,
      },
    ],
    conclusion: `Die Wunscherfüllungs-These ist argumentativ neutral. Die Gottesfrage muss mit Gründen entschieden werden – Kosmologie, Feinabstimmung, Moral, Bewusstsein, die historische Frage nach Jesus –, nicht mit Psychologie.`,
  },
  voices: [
    {
      person: 'vitz',
      role: 'als Psychologe und Freud-Kritiker',
      text: `Paul Vitz, emeritierter Psychologieprofessor der New York University und selbst als junger Mann Atheist, hat Freuds Methode umgedreht. Wenn Freud recht hat, dass der Gottesglaube aus dem Verhältnis zum Vater entsteht, dann müsste auch der Unglaube dort Wurzeln haben. In *Faith of the Fatherless* (1999) untersucht er die Biografien berühmter Atheisten und findet auffällig oft einen früh verstorbenen, abwesenden oder schwachen Vater – bei Nietzsche, Hume, Russell, Sartre, Camus, Schopenhauer und anderen. Er nennt das die „Hypothese des defekten Vaters". Vitz betont selbst, dass dies kein Beweis gegen den Atheismus ist; es zeigt nur, dass Freuds Psychologisierung in beide Richtungen funktioniert und deshalb nichts entscheidet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', quote: `Bei vielen bekannten Atheisten findet sich ein früh verstorbener, abwesender oder schwacher Vater – Freuds eigene Theorie erklärt den Unglauben mindestens so gut wie den Glauben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Alvin Plantinga untersucht in *Warranted Christian Belief* (2000) den „Freud-und-Marx-Einwand": Der Glaube sei nicht gerechtfertigt, weil er aus Wunschdenken bzw. gesellschaftlicher Fehlfunktion entstehe. Plantingas Pointe: Ob der Glaube aus einer *Fehlfunktion* stammt, hängt davon ab, ob er wahr ist. Wenn Gott existiert und den Menschen so geschaffen hat, dass er sich nach ihm sehnt und ihn erkennen kann, dann ist die Sehnsucht nach Gott keine Störung, sondern das richtige Funktionieren unserer Erkenntnisvermögen – so wie der Durst richtig funktioniert, weil es Wasser gibt. Freuds Einwand setzt also den Atheismus voraus und kann ihn nicht begründen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', ref: 'Kap. 5 („The F&M Complaint")', year: '2000', quote: `Ob der Gottesglaube aus Wunschdenken und kognitiver Fehlfunktion stammt, hängt davon ab, ob Gott existiert; der Einwand setzt den Atheismus voraus, statt ihn zu begründen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und früherer Atheist',
      text: `C. S. Lewis kannte Freuds Thesen genau und war selbst lange Atheist. Er beschreibt seine Bekehrung (1929) nicht als Erfüllung eines Wunsches, sondern als widerwillige Kapitulation: Er sei der „niedergeschlagenste und widerstrebendste Bekehrte in ganz England" gewesen (*Surprised by Joy*, 1955). Damit stellt er Freuds Schema auf den Kopf: Lewis *wollte* nicht, dass es Gott gibt – er wollte, dass man ihn in Ruhe lässt. In seinem Essay über den „Bulverismus" verlangt er außerdem, dass man erst über die Wahrheit einer Behauptung streitet, bevor man psychologische Erklärungen für sie sucht.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Surprised by Joy (Überrascht von Freude)', ref: 'Kap. 14', year: '1955', quote: `Ich gab nach, gab zu, dass Gott Gott ist, kniete nieder und betete – vielleicht der niedergeschlagenste und widerstrebendste Bekehrte in ganz England.`, original: `… perhaps, that night, the most dejected and reluctant convert in all England.`, translation: 'eigene Übersetzung (gekürzt)', status: 'paraphrase', note: 'Der Schlussteil („the most dejected and reluctant convert in all England") ist wörtlich belegt.' },
      ],
    },
    {
      person: 'koenig',
      role: 'als Psychiater und Gesundheitsforscher',
      text: `Harold G. Koenig, Psychiater an der Duke University, hat mit Kollegen tausende Studien zum Zusammenhang von Religion und Gesundheit ausgewertet (*Handbook of Religion and Health*). Das Ergebnis widerspricht Freuds Neurose-These: Im Durchschnitt gehen religiöse Beteiligung und Praxis mit weniger Depression, geringerer Suizidrate, weniger Drogen- und Alkoholmissbrauch und höherem Wohlbefinden einher. Koenig betont zugleich, dass es auch negative religiöse Bewältigungsformen gibt (etwa die Vorstellung eines strafenden Gottes, der Krankheit schickt) – Glaube ist kein Allheilmittel, aber keine Neurose.`,
    },
    {
      person: 'kierkegaard',
      role: 'als Philosoph des Glaubens als Wagnis',
      text: `Søren Kierkegaard hat lange vor Freud gezeigt, dass echter Glaube nicht bequeme Geborgenheit ist, sondern „Furcht und Zittern". In seinem Buch dieses Titels (1843) betrachtet er Abraham, der seinen Sohn opfern soll – ein Glaube, der jede menschliche Berechnung und jeden Wunsch durchkreuzt. Für Kierkegaard ist die bürgerliche Christenheit, die Gott als Garanten ihres Wohlstands benutzt, gerade *kein* Glaube. Freuds Kritik trifft also eine Religion, die Kierkegaard selbst schon scharf verurteilt hatte.`,
    },
  ],
  dialog: [
    {
      id: 'gott-ist-vaterprojektion',
      objection: `Gott ist der erhöhte Vater. Das hilflose Kind sucht Schutz beim allmächtigen Vater; der hilflose Erwachsene projiziert diesen Vater in den Himmel. Das ist keine Theologie, sondern Psychologie.`,
      objectionBy: 'Sigmund Freud',
      targetsPremise: 1,
      answer: `Freud erklärt, wie der Glaube entstehen *könnte*, falls es keinen Gott gibt. Er setzt also voraus, was er zeigen müsste. Er selbst gesteht zu, dass eine Illusion nicht notwendig ein Irrtum ist. Und wenn Gott existiert, dann ist die Sehnsucht nach einem himmlischen Vater kein Defekt, sondern ein Hinweis – wie der Durst auf das Wasser verweist.`,
      detail: `Freud definiert Illusion ausdrücklich über die Motivation, nicht über die Falschheit. Sein Beispiel: Kolumbus glaubte, einen neuen Seeweg nach Indien gefunden zu haben – eine Illusion, weil der Wunsch die Überzeugung trug. Dass eine Überzeugung von Wünschen getragen ist, sagt also nichts darüber, ob sie wahr ist. Plantinga zeigt zudem: Ob der Gottesglaube eine „Fehlfunktion" ist, hängt davon ab, ob Gott existiert.`,
      questionsBack: [
        `Wenn es Gott gäbe – wäre es dann nicht zu erwarten, dass Menschen sich nach ihm sehnen?`,
        `Freud sagt selbst, eine Illusion sei nicht notwendig ein Irrtum. Woher weißt du also, dass dieser Glaube ein Irrtum ist?`,
      ],
      followUps: [
        {
          id: 'keine-belege-also-psychologie',
          objection: `Da es keine Belege für Gott gibt, bleibt nur die Frage, warum Menschen trotzdem glauben. Und die beantwortet die Psychologie.`,
          objectionBy: 'Sigmund Freud / Richard Dawkins',
          targetsPremise: 2,
          answer: `Genau dort liegt die eigentliche Debatte – bei den Belegen, nicht bei der Psychologie. Die psychologische Erklärung wird erst relevant, *nachdem* die Beweisfrage negativ entschieden ist; sie kann sie nicht selbst entscheiden. Also lass uns über die Gründe sprechen: Warum gibt es überhaupt etwas? Warum ist das Universum feinabgestimmt? Woher kommen objektive moralische Pflichten? Was geschah mit dem Leichnam Jesu?`,
          detail: `Freud schreibt in Kapitel VI, die religiösen Lehren seien ebenso unbeweisbar wie unwiderlegbar. Damit gibt er zu, dass er die Wahrheitsfrage gar nicht entschieden hat. Die Psychologie ist hier Hilfswissenschaft, nicht Richterin. Siehe die Claims „Es gibt keine Beweise für Gott" und den Themenblock „Gottesbeweise".`,
          followUps: [
            {
              id: 'beweislast-beim-glaeubigen',
              objection: `Die Beweislast liegt bei dir. Wer behauptet, dass es Gott gibt, muss es beweisen. Ich muss gar nichts.`,
              objectionBy: 'Richard Dawkins',
              answer: `Jeder, der eine Behauptung aufstellt, trägt Beweislast. Freud behauptet nicht einfach „Ich weiß es nicht", sondern „Religion ist eine Illusion und Neurose" – das ist eine positive These, und für sie muss er Belege bringen. Ich übernehme gern meinen Teil: Ich habe Gründe für meinen Glauben und lege sie offen. Ich erwarte dasselbe von dir für deine These.`,
              detail: `Siehe den Claim „Die Beweislast liegt bei dir – Atheismus ist nur fehlender Glaube". Wer die starke These vertritt, Religion sei Neurose, verlässt die bequeme Position des bloßen Zweifels.`,
              followUps: [
                {
                  id: 'ockham-psychologie',
                  objection: `Selbst wenn es Argumente gibt: Die psychologische Erklärung ist einfacher. Ockhams Rasiermesser – warum einen unsichtbaren Gott annehmen, wenn Wünsche und Ängste den Glauben schon erklären?`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Ockhams Rasiermesser wählt zwischen Erklärungen *derselben Daten*. Die Psychologie erklärt aber nur ein Datum: dass Menschen glauben. Sie erklärt nicht, warum das Universum einen Anfang hat, warum seine Naturkonstanten lebensfreundlich abgestimmt sind, warum es objektive moralische Pflichten gibt, warum es Bewusstsein gibt, und was mit dem Grab Jesu geschah. Eine Erklärung, die die meisten Daten gar nicht berührt, ist nicht einfacher – sie ist unvollständig.`,
                  detail: `Siehe den Claim „Ockhams Rasiermesser: Gott ist eine unnötige Hypothese". Wichtig: Christen sollten nicht bestreiten, dass psychologische Faktoren beim Glauben mitwirken – sie wirken bei jeder Überzeugung mit. Die Frage ist, ob sie alles erklären.`,
                },
              ],
            },
          ],
        },
        {
          id: 'genau-wie-gewuenscht',
          objection: `Es ist doch sehr auffällig, dass alles genau so ist, wie wir es uns wünschen müssen: ein gütiger Vater, Gerechtigkeit am Ende, ein ewiges Leben. Das riecht nach Wunschdenken.`,
          objectionBy: 'Sigmund Freud (Die Zukunft einer Illusion, Kap. VI)',
          targetsPremise: 3,
          answer: `Ist es wirklich so, wie wir es uns wünschen? Der christliche Gott sieht alles, auch das Verborgenste. Er richtet. Er verlangt, dass ich meine Feinde liebe, mich selbst verleugne, mein Kreuz trage. Er lässt Leid zu und führt seinen eigenen Sohn ans Kreuz. Viele Menschen wünschen sich gerade *keinen* solchen Gott – der Atheist Thomas Nagel sagt offen: „Ich hoffe, dass es keinen Gott gibt." Ein Wunschgott sähe aus wie eine kosmische Großmutter, die nichts verlangt.`,
          detail: `Freud übersieht die unbequemen Seiten des Glaubens. Die Bibel verkündet nicht nur Trost, sondern auch Gericht (Mt 25,31–46), und das Kreuz ist „den Juden ein Ärgernis und den Griechen eine Torheit" (1 Kor 1,23). C. S. Lewis bemerkt, dass die Wirklichkeit gewöhnlich etwas ist, das man nicht hätte erraten können – und das Christentum habe genau diese Eigenschaft.`,
          followUps: [
            {
              id: 'hoelle-auch-wunsch',
              objection: `Auch das Gericht ist Wunscherfüllung: Rachefantasien gegen die Feinde. Himmel für uns, Hölle für die anderen – psychologisch perfekt.`,
              objectionBy: 'Religionskritiker',
              answer: `Jetzt wird alles Wunscherfüllung: der Trost und die Drohung, der Himmel und die Hölle. Eine Theorie, die jedes denkbare Ergebnis erklärt, erklärt nichts – sie ist nicht mehr prüfbar. Außerdem stellt das Neue Testament das Gericht gerade nicht als Strafe für „die anderen" dar: Jesus warnt seine eigenen Jünger (Mt 7,21–23) und gebietet, die Feinde zu lieben und für sie zu beten (Mt 5,44).`,
              detail: `Karl Popper kritisierte an der Psychoanalyse genau diese Eigenschaft: Sie konnte jedes Verhalten „bestätigen" und war deshalb unwissenschaftlich. Wer sagt, ein gütiger Gott sei Wunsch *und* ein richtender Gott sei Wunsch, hat seine These gegen jede Prüfung immunisiert.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '7,21', quote: `Es werden nicht alle, die zu mir sagen: HERR, HERR! ins Himmelreich kommen, sondern die den Willen tun meines Vaters im Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Ich aber sage euch: Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'glaube-auch-unfalsifizierbar',
                  objection: `Dein Glaube ist doch genauso unwiderlegbar. Was immer passiert, ihr habt eine Erklärung: Gebet erhört – Gott ist gut; nicht erhört – Gott weiß es besser.`,
                  objectionBy: 'Karl Popper (Rezeption) / Religionskritiker',
                  answer: `Nein – das Christentum hat eine klare Stelle, an der es widerlegbar ist: die Auferstehung Jesu. Paulus schreibt: „Ist aber Christus nicht auferstanden, so ist … euer Glaube vergeblich" (1 Kor 15,14–17). Das ist eine historische Behauptung über ein Grab in Jerusalem. Wenn man zeigen könnte, dass Jesus tot geblieben ist, wäre der christliche Glaube widerlegt. Freuds Wunschtheorie dagegen hat keine solche Stelle.`,
                  detail: `Das ist eine starke apologetische Pointe: Der christliche Glaube stellt sich der historischen Prüfung (siehe Themenblock Auferstehung). Beim Gebet ist der Einwand berechtigter – dort muss man ehrlich sein (siehe den Claim „Gott erhört Gebete nicht"). Aber der Glaube als Ganzes ist nicht immun gegen Gegenbelege.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,17', quote: `Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zwangsneurose',
      objection: `Religion ist die allgemein menschliche Zwangsneurose. Die Rituale gleichen Zwangshandlungen: starr wiederholt, mit Schuldgefühlen, Angst vor Strafe und Verboten. Sie stammt wie die Neurose des Kindes aus dem Ödipuskomplex.`,
      objectionBy: 'Sigmund Freud (Zwangshandlungen und Religionsübungen, 1907; Die Zukunft einer Illusion, Kap. VIII)',
      answer: `Eine Neurose ist durch Leiden und Funktionsstörung definiert. Die heutige Forschung zeigt aber im Durchschnitt das Gegenteil: Gelebter Glaube geht mit weniger Depression, weniger Suizid, weniger Sucht und mehr Lebenszufriedenheit einher (Koenig, VanderWeele). Eine Neurose, die Menschen im Schnitt gesünder macht, ist keine Neurose. Und ein Ritual wie das gemeinsame Gebet ist etwas anderes als der Zwang, sich hundertmal die Hände zu waschen.`,
      detail: `Freud verglich in seinem Aufsatz von 1907 religiöse Riten mit den Zwangshandlungen seiner Patienten. Die Ähnlichkeit ist oberflächlich: Zwangshandlungen sind privat, sinnentleert und quälend; liturgische Handlungen sind gemeinschaftlich, symbolisch reich und werden überwiegend als befreiend erlebt. Die Agpeya-Gebete der koptischen Kirche etwa strukturieren den Tag mit Psalmen und Evangelien – sie verbinden den Einzelnen mit der Gemeinschaft der Kirche über Jahrhunderte.`,
      sources: [
        { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', ref: 'Kap. VIII', year: '1927', quote: `Die Religion wäre die allgemein menschliche Zwangsneurose, sie stammte wie die des Kindes aus dem Ödipuskomplex, der Vaterbeziehung.`, status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Tyler J. VanderWeele', work: 'Religion and Health: A Synthesis', ref: 'in: Spirituality and Religion within the Culture of Medicine (Hg. Balboni/Peteet)', year: '2017', quote: `Längsschnittstudien zeigen, dass regelmäßiger Gottesdienstbesuch mit geringerer Sterblichkeit, weniger Depression und weniger Suiziden verbunden ist.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'religion-auch-schaedlich',
          objection: `Religion kann aber auch krank machen: Schuldgefühle, Höllenangst, Skrupulosität, Sekten. Das habe ich bei Menschen gesehen.`,
          objectionBy: 'Psychotherapeut',
          answer: `Das stimmt, und das muss man ernst nehmen. Es gibt ungesunde, angstbesetzte Religiosität – auch in Kirchen. Die orthodoxe Tradition kennt das: Die Väter warnen vor Skrupulosität und falscher Frömmigkeit, und ein guter Beichtvater befreit, statt zu bedrücken. Aber Ausnahmen widerlegen nicht den Durchschnitt: Missbrauch der Medizin widerlegt nicht die Medizin.`,
          detail: `Koenig unterscheidet zwischen positiver und negativer religiöser Bewältigung („religious coping"): Wer Gott als liebend und unterstützend erlebt, profitiert; wer Gott als strafend und verlassend erlebt, leidet eher. Das spricht nicht gegen den Glauben, sondern für die Wahrheit des biblischen Gottesbildes: „Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus" (1 Joh 4,18). Siehe auch den Claim „Religion schadet der psychischen Gesundheit".`,
          followUps: [
            {
              id: 'korrelation-kausalitaet',
              objection: `Korrelation ist keine Kausalität. Vielleicht gehen einfach gesündere Menschen häufiger in die Kirche.`,
              objectionBy: 'Methodenkritiker',
              answer: `Ein berechtigter Einwand. Die besseren Studien – etwa VanderWeeles Längsschnittstudien mit zehntausenden Teilnehmerinnen – kontrollieren den vorherigen Gesundheitszustand, und der Zusammenhang bleibt bestehen. Aber ich behaupte gar nicht, dass Gesundheit den Glauben beweist. Ich behaupte nur: Die These „Religion ist Neurose" ist empirisch nicht haltbar. Das reicht für diesen Punkt.`,
              detail: `Fairness: Ursächliche Schlüsse sind in Beobachtungsstudien immer vorsichtig zu ziehen. Der Zusammenhang betrifft vor allem gemeinschaftliche Praxis (Gottesdienstbesuch), nicht bloße private Überzeugung. Nicht überziehen – die Gesundheitsdaten sind ein Gegenargument gegen Freud, kein Beweis für Gott.`,
            },
          ],
        },
      ],
    },
    {
      id: 'urhorde-vatermord',
      objection: `Freud hat in „Totem und Tabu" gezeigt, woher Religion kommt: In der Urhorde töteten die Söhne den Vater, verzehrten ihn und erhöhten ihn aus Schuldgefühl zum Totem und später zu Gott. Das Abendmahl ist noch heute ein Echo dieses Totemmahls.`,
      objectionBy: 'Sigmund Freud (Totem und Tabu, 1912/13)',
      answer: `Diese Theorie hat die Anthropologie schon zu Freuds Lebzeiten zurückgewiesen. Alfred Kroeber zeigte 1920, dass es für die Urhorde, den Vatermord und einen universellen Totemismus keine Belege gibt; der Ethnologe Evans-Pritchard zählte solche Theorien zu den „Just-so-Geschichten". Selbst viele Freud-Bewunderer haben sie aufgegeben. Eine Theorie über den Ursprung der Religion, die keinen empirischen Halt hat, kann die Religion nicht widerlegen.`,
      detail: `Freud selbst nannte seine Rekonstruktion eine Hypothese und verteidigte sie dennoch bis zu *Der Mann Moses und die monotheistische Religion* (1939). Die Eucharistie hat ihre Wurzeln im jüdischen Passa und im letzten Abendmahl Jesu, nicht in einem prähistorischen Totemmahl – das ist historisch gut belegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'E. E. Evans-Pritchard', work: 'Theories of Primitive Religion', year: '1965', quote: `Die psychologischen Ursprungstheorien der Religion – auch die Freuds – sind spekulative Rekonstruktionen ohne ethnografische Grundlage.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kern-bleibt-vaterkomplex',
          objection: `Gut, die Details der Urhorde mögen falsch sein. Aber der Kern bleibt: Das Gottesbild hängt am Vaterbild. Wer einen guten Vater hatte, glaubt an einen guten Gott.`,
          objectionBy: 'Moderner Psychoanalytiker',
          answer: `Die empirische Bindungsforschung zeigt ein komplexeres Bild: Manche Menschen übertragen ihr Elternbild auf Gott, andere finden gerade in Gott, was ihnen ihre Eltern nicht geben konnten. Beides kommt vor. Und wenn das Vaterbild den Glauben prägt, dann prägt es auch den Unglauben: Paul Vitz hat gezeigt, wie viele prominente Atheisten einen früh verstorbenen, abwesenden oder schwachen Vater hatten – Nietzsche, Hume, Russell, Sartre, Camus.`,
          detail: `Die Forschung von Lee Kirkpatrick und Pehr Granqvist unterscheidet „Korrespondenz" (das Gottesbild entspricht dem Elternbild) und „Kompensation" (Gott ersetzt fehlende Bindung). Für die Wahrheitsfrage ist entscheidend: Keines dieser Muster sagt etwas darüber, ob Gott existiert. Sie zeigen nur, wie Menschen ihn erleben.`,
          followUps: [
            {
              id: 'vitz-anekdotisch',
              objection: `Vitz pickt sich berühmte Atheisten mit toten Vätern heraus – das ist Anekdotensammlung, keine Wissenschaft.`,
              objectionBy: 'Kritiker von Vitz',
              answer: `Das ist ein fairer Einwand – Vitz' Liste ist keine kontrollierte Studie, und er behauptet das auch nicht. Sein Punkt ist ein anderer: Wenn man Freuds Methode ernst nimmt, lässt sie sich genauso gut auf den Atheismus anwenden. Es geht um die Symmetrie, nicht darum, Atheisten psychische Defekte zu unterstellen.`,
              detail: `Vitz schreibt ausdrücklich, dass seine Hypothese nicht jeden Atheisten erklärt und dass Menschen aus vielen Gründen zum Unglauben kommen. Sie ist ein Spiegel, den man Freud vorhält – kein neues Dogma.`,
              followUps: [
                {
                  id: 'christen-psychologisieren-auch',
                  objection: `Dann psychologisierst du jetzt die Atheisten. Das ist genauso unfair wie das, was du Freud vorwirfst.`,
                  objectionBy: 'Kritiker',
                  answer: `Genau – und deshalb schlage ich vor, dass wir beide damit aufhören. C. S. Lewis nannte das „Bulverismus": Man nimmt an, dass der andere unrecht hat, und erklärt dann, wie er so dumm werden konnte. Erst muss man zeigen, *dass* jemand irrt. Also lass uns die Psychologie beider Seiten beiseitelegen und über die Gründe sprechen. Welches Argument gegen Gott hältst du für das stärkste?`,
                  detail: `Das ist das strategische Ziel dieses ganzen Dialogzweigs: Die psychologische Debatte führt zu einem Patt, und der Gesprächspartner wird eingeladen, zur Sachfrage zurückzukehren. Der Ton bleibt freundlich – es geht nicht darum zu gewinnen, sondern die Wahrheitsfrage frei zu machen.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Bulverism (in: God in the Dock)', year: '1941', quote: `Man muss zuerst zeigen, dass jemand im Unrecht ist, bevor man erklärt, warum er im Unrecht ist.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erwachsen-werden',
      objection: `Die Menschheit muss erwachsen werden. Sie kann nicht ewig Kind bleiben und sich an einen himmlischen Vater klammern. Erziehung zur Realität heißt: auf diesen Trost verzichten und sich der Wissenschaft anvertrauen. Unsere Wissenschaft ist keine Illusion.`,
      objectionBy: 'Sigmund Freud (Die Zukunft einer Illusion, Kap. IX–X)',
      answer: `Erwachsensein heißt, der Wirklichkeit ins Auge zu sehen – auch der Möglichkeit, dass es einen Gott gibt, dem ich verantwortlich bin. Reifer Glaube ist nicht kindische Geborgenheit: Er kennt Hiob, das Kreuz, die Wüste, den Zweifel. Und Freuds letzter Satz ist selbst ein Glaubensbekenntnis: Dass die Wissenschaft uns alles geben könne, was wir brauchen – auch Sinn, Moral und Hoffnung –, ist keine wissenschaftliche Aussage.`,
      detail: `Freud schließt mit den Worten: „Nein, unsere Wissenschaft ist keine Illusion. Eine Illusion aber wäre es zu glauben, daß wir anderswoher bekommen könnten, was sie uns nicht geben kann." Sein Freund Oskar Pfister antwortete, gerade dieser Wissenschaftsglaube sei die eigentliche Illusion. Die Wissenschaft beschreibt, wie die Welt funktioniert; ob das Leben Sinn hat und was gut ist, kann sie mit ihren Methoden nicht beantworten (siehe den Claim „Nur die Naturwissenschaft liefert echtes Wissen").`,
      sources: [
        { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', ref: 'Kap. X (Schluss)', year: '1927', quote: `Nein, unsere Wissenschaft ist keine Illusion. Eine Illusion aber wäre es zu glauben, daß wir anderswoher bekommen könnten, was sie uns nicht geben kann.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jesus-sagt-werdet-wie-kinder',
          objection: `Jesus selbst sagt doch: „Werdet wie die Kinder." Das ist das Eingeständnis, dass Glaube infantil ist.`,
          objectionBy: 'Religionskritiker',
          answer: `Jesus meint kindliches Vertrauen und Demut, nicht kindisches Denken. Derselbe Paulus, der von der Gotteskindschaft spricht, schreibt: „Werdet nicht Kinder an dem Verständnis … an dem Verständnis aber seid vollkommen" (1 Kor 14,20). Ein Erwachsener, der einem verlässlichen Arzt vertraut, ist nicht infantil – er ist vernünftig. Die Frage ist nur, ob das Vertrauen begründet ist.`,
          detail: `Mt 18,3–4 erklärt selbst, was gemeint ist: „Wer nun sich selbst erniedrigt wie dies Kind, der ist der Größte im Himmelreich." Es geht um Demut, nicht um Denkverzicht. Die Kirchenväter waren hochgebildete Denker; die alexandrinische Katechetenschule verband Glauben mit Philosophie, Mathematik und Naturkunde.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '18,3–4', quote: `Wahrlich ich sage euch: Es sei denn, daß ihr euch umkehret und werdet wie die Kinder, so werdet ihr nicht ins Himmelreich kommen. Wer nun sich selbst erniedrigt wie dies Kind, der ist der Größte im Himmelreich.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Freud sagt selbst, eine Illusion sei nicht notwendig ein Irrtum. Woher weißt du, dass der Glaube ein Irrtum ist?`,
    `Gilt Freuds Argument auch für den Wunsch, dass es keinen Gott und kein Gericht gibt?`,
    `Ist der christliche Gott – heilig, richtend, gekreuzigt – wirklich das, was sich Menschen wünschen würden?`,
    `Welche empirischen Belege gibt es heute für Freuds Urhorden-Theorie?`,
    `Wenn es Gott gäbe – wäre es nicht zu erwarten, dass wir uns nach ihm sehnen?`,
  ],
  avoid: [
    `Freud persönlich angreifen („Er hatte doch selbst einen Vaterkomplex") – das ist derselbe Fehlschluss, den wir ihm vorwerfen.`,
    `Behaupten, Atheisten seien alle psychisch geschädigt – Vitz' These ist ein Spiegel, kein Diagnoseinstrument.`,
    `Die Gesundheitsstudien als Gottesbeweis verkaufen – sie widerlegen Freuds Neurose-These, beweisen aber nicht die Wahrheit des Glaubens.`,
    `Leugnen, dass es ungesunde Religiosität gibt – das ist unglaubwürdig und unbarmherzig gegenüber Betroffenen.`,
  ],
  concessions: [
    `Menschen glauben manchmal aus Wunschdenken; auch Christen können sich einen bequemen Gott zurechtlegen. Freud hat reale Phänomene beobachtet.`,
    `Es gibt angstbesetzte, krankmachende Religiosität; das ist ein Missbrauch des Glaubens, der seelsorglich ernst genommen werden muss.`,
    `Die Gesundheitsdaten sind Beobachtungsdaten; sie zeigen Zusammenhänge, keine bewiesene Ursache.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Armand M. Nicholi Jr.', work: 'The Question of God: C. S. Lewis and Sigmund Freud Debate God, Love, Sex, and the Meaning of Life', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief, Kap. 5', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Oskar Pfister', work: 'Die Illusion einer Zukunft', year: '1928', status: 'paraphrase' },
    { kind: 'gegner', author: 'Sigmund Freud', work: 'Die Zukunft einer Illusion', year: '1927', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Freud', 'Wunscherfüllung', 'Illusion', 'Neurose', 'Psychoanalyse', 'Vitz', 'Genetischer Fehlschluss', 'Bulverismus'],
  related: [
    'religionskritik/projektion-feuerbach',
    'psychologie/religion-schadet-psyche',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'atheismus/keine-beweise-fuer-gott',
    'atheismus/beweislast-mangel-an-glauben',
    'naturalismus/ockham-unnoetige-hypothese',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'auferstehung/halluzinationen',
  ],
};

export default claim;
