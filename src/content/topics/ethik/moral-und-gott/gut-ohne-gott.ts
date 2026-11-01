import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gut-ohne-gott',
  title: `„Man kann auch ohne Gott ein guter Mensch sein."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 6–7' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The Moral Landscape (2010); Debatte mit W. L. Craig (2011)' },
    { name: 'Phil Zuckerman', role: 'Religionssoziologe, Pitzer College', work: 'Society Without God (2008)' },
    { name: 'Erik Wielenberg', role: 'Philosoph, DePauw University', work: 'Robust Ethics (2014)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
  ],
  steelman: `Millionen Atheisten leben anständig, ehrlich und hilfsbereit, ohne an Gott zu glauben. Sie spenden, pflegen Angehörige, riskieren ihr Leben für Fremde. Die säkularsten Gesellschaften der Welt – Skandinavien, Japan – gehören zu den friedlichsten und solidarischsten. Moral braucht keinen himmlischen Gesetzgeber: Empathie, Fairness und Kooperation sind in unserer Natur angelegt, und vernünftige Überlegung über das Wohlergehen fühlender Wesen genügt, um zu erkennen, dass Grausamkeit falsch ist. Im Gegenteil: Wer nur deshalb nicht stiehlt und mordet, weil er Angst vor der Hölle hat oder auf Belohnung hofft, ist kein guter, sondern ein berechnender Mensch. Und wer sagt, ohne Gott wäre „alles erlaubt", gesteht ein, dass er selbst nur durch Drohung im Zaum gehalten wird. Atheistische Philosophen wie Erik Wielenberg vertreten zudem einen robusten Moralrealismus: Moralische Wahrheiten existieren objektiv und notwendig, ganz ohne Gott – so wie mathematische Wahrheiten.`,
  biblical: {
    summary: `Die Bibel bestreitet nicht, dass Menschen ohne Glauben an Gott Gutes tun – sie **erklärt** es. Paulus schreibt, dass auch Heiden, die das Gesetz nicht haben, „von Natur tun des Gesetzes Werk", weil es „geschrieben ist in ihren Herzen" und ihr Gewissen es bezeugt (Röm 2,14–15). Jeder Mensch ist nach Gottes Bild geschaffen (Gen 1,27) und trägt die Fähigkeit zur moralischen Erkenntnis in sich. Die christliche Behauptung lautet also **nicht**: „Atheisten können nicht gut sein", sondern: „Das Gute, das Atheisten erkennen und tun, hat seinen Grund in Gott." Die Frage ist nicht die **Erkenntnis** der Moral, sondern ihre **Begründung**.`,
    detail: `**Erkenntnis vs. Begründung.** Ein Atheist kann wissen, dass Folter falsch ist, so wie ein Mensch, der nie von Physik gehört hat, wissen kann, dass ein fallender Stein ihn verletzt. Die Frage des moralischen Arguments ist eine andere: Was *macht* Folter objektiv falsch? Was begründet eine Pflicht, die auch dann gilt, wenn sie mir schadet und niemand zusieht?

**Das Gewissen als Zeuge.** Röm 2,15 spricht von Gedanken, „die sich untereinander verklagen oder entschuldigen". Das Gewissen ist kein evolutionäres Nebenprodukt, sondern ein Zeuge – es verweist über sich hinaus auf einen Richter.

**Gott ist das Gute.** Jesus sagt: „Niemand ist gut denn der einige Gott" (Mk 10,18). Gott *hat* nicht nur Gutes, er *ist* der Maßstab des Guten; „Gott ist die Liebe" (1 Joh 4,8). Moralische Pflichten sind Ausdruck seines Wesens, das sich in seinen Geboten zeigt (Mt 22,37–40).

**Güte ohne Gnade?** Die Bibel unterscheidet zudem zwischen bürgerlicher Anständigkeit und der Heiligung, die zur Gemeinschaft mit Gott führt. Gutes Handeln ist wertvoll, aber es rettet niemanden aus eigener Kraft (Eph 2,8–10) – das ist eine eigene Frage, die man im Gespräch nicht mit der Moralbegründung vermengen sollte.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk, sind dieselben, dieweil sie das Gesetz nicht haben, sich selbst ein Gesetz, als die da beweisen, des Gesetzes Werk sei geschrieben in ihren Herzen, sintemal ihr Gewissen sie bezeugt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '10,18', quote: `Was heißest du mich gut? Niemand ist gut denn der einige Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,8', quote: `Wer nicht liebhat, der kennt Gott nicht; denn Gott ist die Liebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben die moralische Erkenntnis der Heiden nie bestritten. Justin der Märtyrer lehrte, dass der göttliche Logos in jedem Menschen „Samen" der Wahrheit gesät hat (*logos spermatikos*) – darum konnten Sokrates und andere Gutes erkennen. Athanasius beschreibt in *Contra Gentes*, dass die vernunftbegabte Seele, nach Gottes Bild geschaffen, von sich aus zur Erkenntnis Gottes und des Guten fähig ist, solange sie nicht durch Sünde verdunkelt wird. Für die koptische Kirche ist das Gewissen eine Stimme Gottes im Menschen; der Mensch ist zur Gemeinschaft mit Gott, zur Vergöttlichung (*theosis*), berufen – Moral ist der Weg, auf dem das Bild Gottes im Menschen wieder aufleuchtet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '2. Apologie', ref: '8; 10; 13', year: 'um 155', quote: `Jeder hat nach dem Anteil am samenhaft ausgestreuten göttlichen Logos Wahres erkannt und gut geredet.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '30–34', year: 'um 335', quote: `Die vernünftige Seele ist nach dem Bild Gottes geschaffen und kann in sich selbst wie in einem Spiegel Gott und das Gute erkennen, wenn sie vom Schmutz der Sünde gereinigt ist.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der akademischen Philosophie vertritt eine Mehrheit einen **Moralrealismus** – die Auffassung, dass es objektive moralische Wahrheiten gibt (PhilPapers-Umfragen 2009 und 2020). Viele dieser Realisten sind Atheisten (z. B. Erik Wielenberg, David Enoch, Derek Parfit) und halten moralische Tatsachen für notwendige, nicht weiter erklärungsbedürftige Grundtatsachen. Andere Atheisten (J. L. Mackie, Michael Ruse, Alex Rosenberg) ziehen den umgekehrten Schluss: Ohne Gott gebe es keine objektive Moral, und unser Gefühl objektiver Pflicht sei eine Illusion. Mackie räumte sogar ein, dass objektive Werte – wenn es sie gäbe – ein Argument für Gott wären. Die Debatte ist also offen und wird auf hohem Niveau geführt.`,
    detail: `Empirisch ist umstritten, ob religiöse Menschen „moralischer" sind. Studien zeigen Zusammenhänge zwischen regelmäßiger religiöser Praxis und mehr Spenden, Ehrenamt und geringeren Raten an Suizid und Sucht (z. B. VanderWeele u. a.); säkulare Gesellschaften wie Dänemark oder Schweden schneiden bei sozialem Vertrauen dennoch sehr gut ab. Für das moralische Argument ist diese Frage allerdings nebensächlich: Es geht um die Begründung, nicht um das Verhalten.`,
    sources: [
      { kind: 'gegner', author: 'Erik J. Wielenberg', work: 'Robust Ethics: The Metaphysics and Epistemology of Godless Normative Realism', year: '2014', quote: `Moralische Tatsachen seien notwendige, grundlegende („brute") Tatsachen, die keiner Grundlage in Gott bedürfen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'J. L. Mackie', work: 'The Miracle of Theism', year: '1982', quote: `Objektive, an sich vorschreibende Werte wären eine so seltsame Ansammlung von Eigenschaften, dass sie ohne einen allmächtigen Gott, der sie erschafft, kaum im gewöhnlichen Lauf der Dinge entstanden wären.`, status: 'paraphrase', note: 'Mackie war Atheist und folgerte daraus, dass es keine objektiven Werte gibt.' },
      { kind: 'gegner', author: 'Phil Zuckerman', work: 'Society Without God', year: '2008', quote: `Die weitgehend säkularen Gesellschaften Dänemarks und Schwedens seien friedlich, gerecht und lebenswert.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Da stimme ich dir zu: Natürlich können Atheisten gute Menschen sein – die Bibel sagt selbst, dass Gottes Gesetz in jedes Herz geschrieben ist (Röm 2,15). Die Frage ist nicht, ob du ohne Gott gut sein kannst, sondern was „gut" überhaupt bedeutet, wenn es keinen Gott gibt. Wenn wir nur Produkte blinder Evolution sind, woher kommt dann eine Pflicht, die auch gilt, wenn sie mir schadet und niemand zusieht? Ich glaube, dass deine Überzeugung, Grausamkeit sei wirklich falsch, richtig ist – und gerade sie weist auf Gott hin.`,
  keyPoints: [
    `**Zustimmung zuerst:** Atheisten können gut handeln und moralische Wahrheiten erkennen – die Bibel erwartet das (Röm 2,14–15).`,
    `**Erkenntnis ≠ Begründung:** Die Frage ist nicht, *ob* man Gutes erkennt, sondern was es *objektiv gut* macht.`,
    `**Moralisches Argument:** Wenn es Gott nicht gibt, gibt es keine objektiven moralischen Werte und Pflichten; es gibt sie; also gibt es Gott.`,
    `**Konsequente Atheisten stimmen P1 zu:** Mackie, Ruse, Nietzsche und Dawkins („kein Gut und kein Böse") sehen, dass Moral ohne Gott ihren objektiven Halt verliert.`,
    `**Pflichten brauchen eine Person:** Werte könnten vielleicht abstrakt sein – aber Pflichten setzen jemanden voraus, dem gegenüber man verpflichtet ist.`,
    `**Gott ist das Gute selbst:** Gottes Wesen ist Maßstab des Guten, seine Gebote drücken dieses Wesen aus, und wir erkennen es, weil wir sein Bild sind.`,
  ],
  argument: {
    name: 'Das moralische Argument (axiologisch-deontologisch)',
    summary: 'Klassische Form, wie sie William Lane Craig in Debatten verwendet; Wurzeln bei Kant, Newman und C. S. Lewis.',
    premises: [
      {
        text: 'P1: Wenn Gott nicht existiert, gibt es keine objektiven moralischen Werte und Pflichten.',
        support: 'Im Naturalismus ist der Mensch ein Produkt ungelenkter Prozesse; Moral ist dann ein Überlebensmechanismus (Ruse/Wilson), eine Konvention oder eine Gefühlsäußerung. Pflichten setzen eine Autorität voraus, der man verpflichtet ist. Atheisten wie Mackie, Ruse, Nietzsche und Dawkins ziehen genau diesen Schluss.',
        sources: [
          { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Götzen-Dämmerung', ref: 'Streifzüge eines Unzeitgemässen, 5', year: '1889', quote: `Wenn man den christlichen Glauben aufgiebt, zieht man sich damit das Recht zur christlichen Moral unter den Füssen weg.`, status: 'verbatim' },
          { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden', ref: 'Kap. 4', year: '1995', quote: `…kein Plan, kein Zweck, kein Böses und kein Gutes, nichts als blinde, erbarmungslose Gleichgültigkeit.`, original: 'no design, no purpose, no evil and no good, nothing but blind, pitiless indifference', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Es gibt objektive moralische Werte und Pflichten.',
        support: 'Unsere moralische Erfahrung ist so grundlegend wie die Sinneswahrnehmung: Dass es falsch ist, ein Kind zum Vergnügen zu quälen, wissen wir sicherer als fast jede philosophische Theorie, die es bestreiten könnte. Auch die meisten Fachphilosophen sind Moralrealisten. Wer P2 leugnet, kann nichts – auch nicht den Holocaust – als objektiv böse verurteilen.',
      },
    ],
    conclusion: 'K: Also existiert Gott – ein personales, vollkommen gutes Wesen, dessen Natur der Maßstab des Guten ist und dessen Gebote unsere Pflichten begründen.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel der Völker',
      text: `Paulus kannte die moralische Größe der heidnischen Welt – Stoiker wie Seneca lehrten zu seiner Zeit Selbstbeherrschung und Menschenfreundlichkeit. Er erklärt dieses Phänomen in Röm 2,14–15 nicht weg, sondern deutet es: Das Gesetz Gottes ist in die Herzen aller Menschen geschrieben, und das Gewissen ist sein Zeuge. Auf dem Areopag zitiert er heidnische Dichter („Wir sind seines Geschlechts", Apg 17,28) – die Wahrheit, die sie ahnten, hat einen Namen. Für Paulus beweist die moralische Erkenntnis der Heiden nicht die Überflüssigkeit Gottes, sondern seine Gegenwart in jedem Menschen.`,
      sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26–28', status: 'paraphrase' }],
    },
    {
      person: 'justin',
      role: 'als Philosoph und Märtyrer',
      text: `Justin, selbst ein Philosoph, der Christ wurde, lehrte, dass der Logos – Christus – als „Same" in allen Menschen gegenwärtig ist. Deshalb hätten Sokrates und andere Weise gegen Unrecht und Götzendienst gekämpft; was immer bei ihnen gut gesagt ist, „gehört uns Christen". Justins Pointe ist für die heutige Debatte hilfreich: Christen müssen die moralischen Leistungen von Nichtchristen nicht kleinreden. Sie können sie würdigen – als Spuren des Logos, der jeden Menschen erleuchtet (Joh 1,9).`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '46', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '2. Apologie', ref: '10; 13', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Atheist, der zum Glauben fand',
      text: `Lewis beginnt *Mere Christianity* nicht mit der Bibel, sondern mit dem Streit: Wer sagt „Das ist unfair!", beruft sich auf einen Maßstab, den er auch beim anderen voraussetzt. Dieses „Gesetz des richtigen Verhaltens" kennen alle Menschen, und alle brechen es. Lewis berichtet von seinem eigenen Weg: Sein Argument gegen Gott war, dass die Welt grausam und ungerecht sei – bis er sich fragte, woher er überhaupt die Idee von „gerecht" und „ungerecht" habe. Man nennt eine Linie nicht krumm, wenn man keine Vorstellung von einer geraden hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I, Kap. 1–5; Buch II, Kap. 1', year: '1952', quote: `Ein Mensch nennt eine Linie nicht krumm, wenn er keine Vorstellung von einer geraden Linie hat.`, original: 'A man does not call a line crooked unless he has some idea of a straight line.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'craig',
      role: 'als Debattierer',
      text: `Craig betont in jeder Debatte zuerst, was das moralische Argument *nicht* behauptet: nicht, dass man an Gott glauben muss, um gut zu leben, und nicht, dass man Gott kennen muss, um moralische Wahrheiten zu erkennen. Es behauptet, dass es ohne Gott keine *objektiven* Werte (gut/böse) und *objektiven* Pflichten (richtig/falsch) gäbe. Gegen Sam Harris argumentierte er 2011, dass Harris „gut" einfach mit „Wohlergehen" gleichsetze und so das eigentliche Problem nur umbenenne. Pflichten, so Craig, setzen eine Autorität voraus; im Theismus ist das ein vollkommen guter Gott, dessen Gebote aus seinem Wesen fließen.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', ref: 'Kap. 2', year: '3. Aufl. 2008', status: 'paraphrase' },
        { kind: 'sonstiges', work: 'Debatte William Lane Craig vs. Sam Harris: „Is Good from God?", University of Notre Dame', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker',
      text: `Francis Collins, Leiter des Humangenomprojekts, beschreibt in *The Language of God* (2006), wie ihn als jungen Atheisten gerade das Moralgesetz zum Nachdenken brachte. Besonders der selbstlose Altruismus – die Hilfe für einen Fremden, der nie etwas zurückgeben kann – ließ sich für ihn mit den gängigen evolutionären Erklärungen (Verwandtenselektion, Gegenseitigkeit) nicht befriedigend erfassen. Das Moralgesetz wurde für ihn zum Hinweis auf einen Gott, der sich um Menschen sorgt.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 1', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'dostojewski',
      role: 'als Romancier des Nihilismus',
      text: `In den *Brüdern Karamasow* lässt Dostojewski den Intellektuellen Iwan die These vertreten, dass ohne Gott und Unsterblichkeit „alles erlaubt" sei. Sein Halbbruder Smerdjakow nimmt ihn beim Wort und ermordet den Vater. Dostojewski will damit nicht sagen, dass Atheisten zwangsläufig morden, sondern zeigen, wohin eine Idee führt, wenn man sie konsequent zu Ende denkt. Der berühmte Satz ist übrigens kein wörtliches Zitat aus dem Roman, sondern eine Zusammenfassung von Iwans Gedanken.`,
      sources: [{ kind: 'fachliteratur', author: 'Fjodor M. Dostojewski', work: 'Die Brüder Karamasow', year: '1880', quote: `Wenn es keinen Gott und keine Unsterblichkeit gibt, ist alles erlaubt.`, status: 'paraphrase', note: 'Sinngemäße Zusammenfassung von Iwans These, kein wörtliches Romanzitat.' }],
    },
  ],
  dialog: [
    {
      id: 'ich-bin-gut',
      objection: `Ich bin Atheist, und ich bin ein guter Mensch. Ich brauche keinen Gott, um zu wissen, dass man nicht mordet, nicht stiehlt und Schwachen hilft.`,
      objectionBy: 'Richard Dawkins',
      answer: `Da stimme ich dir völlig zu – und die Bibel auch: Paulus sagt, dass Gottes Gesetz jedem Menschen ins Herz geschrieben ist (Röm 2,15). Ich behaupte nicht, dass du ohne Glauben nicht gut sein kannst. Meine Frage ist eine andere: Was *macht* Mord objektiv falsch, wenn es keinen Gott gibt? Du *weißt*, dass er falsch ist – ich frage, *warum* er falsch ist.`,
      detail: `Diese Unterscheidung ist der Schlüssel des ganzen Themas. Viele Debatten scheitern, weil der Christ den Eindruck erweckt, Atheisten seien unmoralisch. Mach am Anfang klar: Es geht nicht um Moralpsychologie (Wer handelt besser?) und nicht um Moralerkenntnis (Wer weiß, was gut ist?), sondern um Moralontologie (Was begründet objektive Werte und Pflichten?).`,
      questionsBack: [
        `Glaubst du, dass Folter zum Vergnügen *objektiv* falsch ist – also auch dann, wenn eine ganze Gesellschaft sie gutheißen würde?`,
        `Wenn ja: Was in einem rein materiellen Universum macht sie falsch?`,
      ],
      followUps: [
        {
          id: 'empathie-wohlergehen',
          objection: `Moral braucht keine metaphysische Grundlage. Sie ergibt sich aus Empathie und dem Wunsch nach Wohlergehen für alle fühlenden Wesen. Das reicht völlig.`,
          objectionBy: 'Sam Harris',
          targetsPremise: 1,
          answer: `Empathie erklärt, warum ich helfen *will* – aber nicht, warum ich helfen *soll*, wenn es mich etwas kostet. Wenn ein Psychopath keine Empathie hat, hat er dann keine Pflichten? Und „Wohlergehen aller" ist ein Wert, den du voraussetzt, nicht begründest: Warum soll mich das Wohlergehen von Fremden verpflichten, wenn meine Gene nur auf mein eigenes Überleben programmiert sind? Aus dem, was *ist*, folgt nicht, was sein *soll* – das hat schon Hume gesehen.`,
          detail: `David Hume stellte im *Treatise of Human Nature* (III,1,1) fest, dass Moralautoren unvermerkt von „ist"-Sätzen zu „soll"-Sätzen übergehen, ohne den Übergang zu begründen. Harris hält das für ein Pseudoproblem, weil er „gut" als „das, was Wohlergehen fördert" definiert – aber damit beantwortet er die Frage nicht, sondern verschiebt sie in die Definition (siehe Claim „Die Wissenschaft kann Moral begründen").`,
          sources: [
            { kind: 'sonstiges', author: 'David Hume', work: 'A Treatise of Human Nature', ref: 'III,1,1', year: '1739/40', quote: `Moralautoren gehen unbemerkt von Sätzen mit „ist" zu Sätzen mit „soll" über; dieser Übergang bedarf einer Begründung, die nie gegeben wird.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'wielenberg-brute-facts',
              objection: `Atheistische Moralrealisten wie Erik Wielenberg sagen: Moralische Wahrheiten sind notwendige Grundtatsachen. Dass Schmerz zufügen um seiner selbst willen schlecht ist, ist einfach wahr – so wie 2 + 2 = 4. Es braucht keinen Gott dafür.`,
              objectionBy: 'Erik Wielenberg',
              targetsPremise: 1,
              answer: `Das ist die stärkste atheistische Antwort, und ich nehme sie ernst. Aber sie hat drei Probleme: Erstens schweben diese moralischen Tatsachen völlig unerklärt im Raum – selbst der Atheist Mackie fand solche Werte „seltsam". Zweitens: Wenn unser Gehirn durch Evolution auf Überleben statt auf Wahrheit getrimmt wurde, warum sollten wir diese abstrakten Tatsachen zuverlässig erkennen? Drittens erklären abstrakte Werte keine *Pflichten*: Eine Pflicht ist immer eine Pflicht *gegenüber jemandem*.`,
              detail: `**Zum ersten Punkt:** Mackie argumentierte, objektive, an sich vorschreibende Werte wären metaphysisch „seltsam" (*queer*) und ohne einen Gott kaum zu erwarten.

**Zum zweiten Punkt:** Sharon Street hat 2006 ein „darwinistisches Dilemma" formuliert: Entweder hängen moralische Tatsachen kausal mit der Selektion zusammen (was der Realist bestreitet), oder es wäre ein riesiger Zufall, dass unsere evolutionär geformten Moralurteile ausgerechnet mit ihnen übereinstimmen. Wielenberg versucht eine Antwort, aber das Problem ist für den atheistischen Realisten besonders drängend. Der Theist hat eine Erklärung: Gott hat uns so geschaffen, dass wir das Gute erkennen können.

**Zum dritten Punkt:** Die Philosophin Elizabeth Anscombe (*Modern Moral Philosophy*, 1958) argumentierte, dass das moralische „Soll" im starken Sinn ein Überbleibsel einer Gesetzesethik sei, die einen göttlichen Gesetzgeber voraussetzt; ohne ihn behalte das Wort nur einen „hypnotischen" Klang.`,
              sources: [
                { kind: 'fachliteratur', author: 'Sharon Street', work: 'A Darwinian Dilemma for Realist Theories of Value', ref: 'Philosophical Studies 127', year: '2006', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'G. E. M. Anscombe', work: 'Modern Moral Philosophy', ref: 'Philosophy 33', year: '1958', quote: `Das moralische „Soll" im besonderen Sinn setze eine gesetzesartige Ethik mit einem Gesetzgeber voraus; ohne diesen Rahmen sei der Begriff nicht mehr verständlich.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'gott-auch-brute',
                  objection: `Aber du machst doch dasselbe: Du hörst einfach bei Gott auf. Gottes Güte ist bei dir genauso eine unerklärte Grundtatsache wie bei Wielenberg die moralischen Fakten.`,
                  objectionBy: 'Erik Wielenberg',
                  answer: `Jede Erklärung endet irgendwo – die Frage ist, wo sie besser endet. Gott als notwendiges, personales Wesen, dessen Natur die Güte selbst ist, erklärt mit *einem* Grund drei Dinge: warum es objektive Werte gibt (Gottes Wesen), warum es Pflichten gibt (Gebote einer Person) und warum wir sie erkennen können (wir sind sein Bild). Wielenberg braucht dafür drei unerklärte Grundtatsachen und einen glücklichen Zufall. Außerdem gibt es unabhängige Gründe, an Gott zu glauben; für frei schwebende moralische Fakten gibt es keine.`,
                  followUps: [
                    {
                      id: 'gott-der-luecken',
                      objection: `Das ist ein klassischer Lückenbüßer-Gott: Wo du etwas nicht erklären kannst, setzt du Gott ein.`,
                      objectionBy: 'Sam Harris',
                      answer: `Nein. Ein Lückenbüßer-Argument sagt: „Die Wissenschaft weiß es noch nicht, also war es Gott." Hier geht es nicht um eine Lücke im naturwissenschaftlichen Wissen, die künftige Forschung füllen könnte, sondern um eine philosophische Frage: Welche Art von Wirklichkeit kann objektive Pflichten begründen? Keine noch so gute Hirnforschung kann zeigen, dass ich etwas tun *soll* – sie kann nur zeigen, was ich tue und fühle. Das ist ein Schluss auf die beste Erklärung, kein Lückenfüller.`,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'keine-objektive-moral',
          objection: `Dann gebe ich eben zu: Es gibt keine objektive Moral. Moral ist ein Produkt der Evolution und der Kultur. Gott brauche ich trotzdem nicht.`,
          objectionBy: 'Michael Ruse',
          targetsPremise: 2,
          answer: `Das ist konsequent – aber bedenke den Preis: Dann war der Holocaust nicht objektiv böse, sondern nur etwas, das dir und mir missfällt. Dann war die Abschaffung der Sklaverei kein moralischer Fortschritt, sondern nur ein Geschmackswandel. Unsere moralische Erfahrung, dass Kinderquälerei wirklich falsch ist, ist so grundlegend wie unsere Wahrnehmung der Außenwelt. Wer sie für eine Illusion erklärt, braucht dafür sehr starke Gründe.`,
          sources: [
            { kind: 'gegner', author: 'Michael Ruse; Edward O. Wilson', work: '„The Evolution of Ethics", New Scientist', year: '1985', quote: `Ethik, wie wir sie verstehen, sei eine Illusion, die uns unsere Gene vorgaukeln, damit wir kooperieren.`, original: 'ethics as we understand it is an illusion fobbed off on us by our genes to get us to cooperate', status: 'paraphrase', note: 'Vielzitierte Formulierung; genaue Seitenangabe vor wörtlicher Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'gefuehl-objektiv',
              objection: `Nur weil sich etwas objektiv *anfühlt*, ist es noch nicht objektiv. Auch Menschen, die an Geister glaubten, hatten starke Erfahrungen.`,
              objectionBy: 'Michael Ruse',
              targetsPremise: 2,
              answer: `Das gilt für alle unsere Grunderfahrungen – auch für die Sinneswahrnehmung und die Logik. Trotzdem ist es vernünftig, ihnen zu vertrauen, solange es keine starken Gegengründe gibt; sonst wäre jede Erkenntnis unmöglich. Und der einzige Gegengrund, den du anbietest, ist die evolutionäre Herkunft – aber die Herkunft einer Überzeugung sagt noch nichts über ihre Wahrheit. Unsere Fähigkeit zu rechnen ist auch evolutionär entstanden, und doch ist 2 + 2 = 4 wahr.`,
              followUps: [
                {
                  id: 'gesellschaft-einigt-sich',
                  objection: `Ich sage ja nicht, dass Folter okay ist. Ich sage: Wir haben uns als Gesellschaft darauf geeinigt, dass sie falsch ist, und das genügt.`,
                  objectionBy: 'Phil Zuckerman',
                  targetsPremise: 2,
                  answer: `Dann frage ich: Die Gesellschaft im nationalsozialistischen Deutschland hatte sich auf etwas anderes geeinigt. War der Judenmord dort also richtig? Und waren Wilberforce, Martin Luther King und Sophie Scholl dann im Unrecht, weil sie gegen den Konsens ihrer Gesellschaft standen? Wenn Moral nur Übereinkunft ist, sind Reformer per Definition Abweichler, nie Propheten.`,
                  questionsBack: [
                    `Kann eine ganze Gesellschaft moralisch im Irrtum sein? Wenn ja – an welchem Maßstab gemessen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'religioese-nicht-besser',
      objection: `Religiöse Menschen sind nicht moralischer. Die säkularsten Länder – Dänemark, Schweden, Japan – haben die niedrigsten Mordraten und das höchste soziale Vertrauen.`,
      objectionBy: 'Phil Zuckerman',
      answer: `Das moralische Argument behauptet gar nicht, dass Gläubige sich besser verhalten – es fragt nach der Begründung der Moral. Aber auch empirisch ist das Bild differenzierter: Regelmäßige religiöse Praxis geht in vielen Studien mit mehr Spenden, mehr Ehrenamt und weniger Suizid und Sucht einher. Und Skandinavien hat seine Werte nicht aus dem Nichts erfunden, sondern aus tausend Jahren christlicher, besonders lutherischer Prägung geerbt.`,
      detail: `Tyler VanderWeele (Harvard) und Kollegen fanden in großen Längsschnittstudien Zusammenhänge zwischen regelmäßigem Gottesdienstbesuch und niedrigerer Sterblichkeit, weniger Depression und weniger „deaths of despair" (Suizid, Drogen, Alkohol). Solche Studien zeigen nicht, dass Gläubige moralisch „besser" sind, aber sie widerlegen die Behauptung, Religion sei für das menschliche Gedeihen schädlich. Ehrlich bleiben: Einzelne Studien sind korrelativ; der Effekt hängt an der Praxis, nicht am bloßen Etikett.`,
      followUps: [
        {
          id: 'skandinavien-ausrede',
          objection: `„Christliches Erbe" ist eine billige Ausrede. Damit kannst du jeden säkularen Erfolg dem Christentum zuschreiben.`,
          objectionBy: 'Phil Zuckerman',
          answer: `Es ist keine Ausrede, sondern eine historische These, die auch Nichtchristen vertreten: Jürgen Habermas nennt den egalitären Universalismus der Moderne „unmittelbar ein Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik". Der Historiker Tom Holland, der als Fachhistoriker und nicht als Apologet schreibt, zeigt in *Dominion*, wie tief unsere Vorstellungen von Gleichheit und Mitgefühl mit den Schwachen christlich geprägt sind. Die Frage ist, ob eine Gesellschaft dieses Kapital auf Dauer verbrauchen kann, ohne es zu erneuern.`,
          sources: [
            { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Zeit der Übergänge (Suhrkamp)', ref: '„Ein Gespräch über Gott und die Welt" (Interview mit Eduardo Mendieta, 1999), S. 174 f.', year: '2001', quote: `Der egalitäre Universalismus, aus dem die Ideen von Freiheit und solidarischem Zusammenleben, von Menschenrechten und Demokratie entsprungen sind, sei unmittelbar ein Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik.`, status: 'paraphrase', note: 'Habermas ist kein Christ. Achtung: Im Internet kursiert eine verfälschte englische Fassung („Christianity, and nothing else …") – nicht verwenden.' },
            { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind', year: '2019', status: 'paraphrase' },
          ],
        },
        {
          id: 'gefaengnisstatistik',
          objection: `In US-Gefängnissen sind Atheisten massiv unterrepräsentiert, Christen überrepräsentiert. Was sagt dir das?`,
          objectionBy: 'Christopher Hitchens',
          answer: `Solche Statistiken sind wenig aussagekräftig: Religionszugehörigkeit wird von Häftlingen selbst angegeben, viele finden erst im Gefängnis zum Glauben, und Atheisten in den USA sind im Durchschnitt besser gebildet und wohlhabender – Faktoren, die Kriminalität stark beeinflussen. Ich würde auf solche Zahlen weder in die eine noch in die andere Richtung eine Argumentation bauen.`,
        },
      ],
    },
    {
      id: 'nur-aus-angst',
      objection: `Wer nur aus Angst vor der Hölle oder in Hoffnung auf den Himmel gut ist, ist kein guter Mensch, sondern ein Opportunist. Wenn du ohne Gott morden würdest, sagt das mehr über dich als über Gott.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das behaupte ich auch nicht. Ich würde ohne Glauben nicht morden – und das moralische Argument handelt nicht von Motivation, sondern von Begründung. Christliche Moral ist im Kern auch nicht Angst, sondern Antwort auf Liebe: „Lasset uns ihn lieben, denn er hat uns zuerst geliebt" (1 Joh 4,19). Der hl. Antonius, Vater der Mönche in Ägypten, soll gesagt haben: Ich fürchte Gott nicht mehr, sondern ich liebe ihn, denn die Liebe treibt die Furcht aus.`,
      voices: [
        {
          person: 'antonius',
          role: 'als Vater des Mönchtums',
          text: `In den *Apophthegmata Patrum*, den Sprüchen der ägyptischen Wüstenväter, wird Antonius ein Wort zugeschrieben, das 1 Joh 4,18 aufnimmt: Er fürchte Gott nicht mehr, sondern liebe ihn, denn die vollkommene Liebe treibe die Furcht aus. Für die koptische Spiritualität ist das der Weg: Man beginnt vielleicht mit der Furcht, aber das Ziel ist die Liebe zu Gott und zum Nächsten, aus der das Gute von selbst fließt.`,
          sources: [{ kind: 'koptisch', work: 'Apophthegmata Patrum (alphabetische Sammlung), Antonius', ref: 'Nr. 32', quote: `Ich fürchte Gott nicht mehr, sondern ich liebe ihn; denn die Liebe treibt die Furcht aus.`, status: 'paraphrase', note: 'Nummerierung nach der alphabetischen Sammlung; vor Verwendung prüfen.' }],
        },
      ],
      followUps: [
        {
          id: 'alles-erlaubt-drohung',
          objection: `Dostojewski: „Wenn es keinen Gott gibt, ist alles erlaubt." Das ist doch eine Drohung: Ohne Gott würdet ihr Christen zu Bestien.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Es ist keine Drohung, sondern eine logische Beobachtung – und übrigens kein wörtliches Romanzitat, sondern eine Zusammenfassung von Iwan Karamasows These. Gemeint ist nicht, dass Atheisten morden, sondern dass es ohne Gott keinen objektiven Grund gibt, warum sie es *nicht dürfen*. Nietzsche, kein Freund des Christentums, sah das genauso: Wer den christlichen Glauben aufgibt, zieht sich das Recht zur christlichen Moral unter den Füßen weg.`,
        },
      ],
    },
    {
      id: 'euthyphron-hilft-nicht',
      objection: `Gott als Grundlage hilft dir gar nicht. Platon hat das schon im Euthyphron gezeigt: Ist etwas gut, weil Gott es will – dann ist es willkürlich –, oder will Gott es, weil es gut ist – dann brauchst du Gott nicht.`,
      objectionBy: 'Sam Harris',
      targetsPremise: 1,
      answer: `Das Dilemma hat eine dritte Möglichkeit, die die christliche Tradition seit Augustinus vertritt: Das Gute ist weder Gottes willkürlicher Wille noch ein Maßstab über Gott, sondern Gottes eigenes Wesen. Gott ist die Güte selbst, und seine Gebote fließen aus seinem Wesen. Dazu gibt es einen eigenen Claim mit allen Folgezügen.`,
    },
    {
      id: 'wunschdenken',
      objection: `Selbst wenn Moral ohne Gott keine objektive Grundlage hätte – das wäre traurig, aber kein Beweis, dass Gott existiert. Vielleicht ist die Welt einfach so hart.`,
      objectionBy: 'Michael Ruse',
      answer: `Richtig – das Argument wäre schwach, wenn es lautete: „Es wäre schön, wenn es objektive Moral gäbe, also gibt es Gott." So lautet es aber nicht. Es lautet: Es gibt objektive moralische Werte – das erkennen wir so sicher wie die Außenwelt –, und Gott ist die beste Erklärung dafür. Es ist ein Schluss von einer Tatsache auf ihre Erklärung, nicht von einem Wunsch auf seine Erfüllung.`,
      followUps: [
        {
          id: 'platonismus-moral',
          objection: `Moralische Wahrheiten könnten einfach existieren wie mathematische Objekte – platonische Ideen. Gerechtigkeit an sich, unabhängig von jedem Gott.`,
          objectionBy: 'Erik Wielenberg',
          targetsPremise: 1,
          answer: `Abstrakte Ideen sind kausal wirkungslos – die Idee „Gerechtigkeit" verpflichtet niemanden zu irgendetwas, sie existiert einfach. Was würde es heißen, dass ich *der Gerechtigkeit an sich* etwas schulde? Pflichten, Schuld, Verantwortung sind personale Begriffe. Die christliche Tradition hat Platons Einsicht aufgenommen, aber personal gedeutet: Das Gute an sich ist keine abstrakte Idee, sondern der lebendige Gott, der liebt und Rechenschaft fordert.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass manche Dinge objektiv falsch sind – auch wenn eine ganze Gesellschaft sie gutheißen würde?`,
    `Wenn das Universum „kein Gut und kein Böse" kennt (Dawkins), woher kommt dann deine Pflicht, Schwachen zu helfen?`,
    `Warum solltest du dem Wohl von Fremden Vorrang vor deinem eigenen Vorteil geben, wenn niemand zusieht?`,
    `Wem gegenüber bist du verpflichtet, wenn du eine moralische Pflicht verletzt?`,
    `Wenn unsere Moral nur ein Überlebensinstinkt ist – warum sollten wir ihr vertrauen, wenn sie mit unserem Vorteil kollidiert?`,
  ],
  avoid: [
    `„Atheisten können keine guten Menschen sein." Das ist falsch, unbiblisch (Röm 2,14–15) und beleidigend – du verlierst sofort.`,
    `Dostojewskis „Wenn Gott nicht existiert, ist alles erlaubt" als wörtliches Zitat ausgeben – es ist eine Zusammenfassung, kein Romanzitat.`,
    `Behaupten, Hitler oder Stalin zeigten, wohin Atheismus führt, als wäre jeder Atheist ein potenzieller Diktator.`,
    `Gefängnis- oder Kriminalitätsstatistiken als Beweis anführen – sie sind in beide Richtungen kaum aussagekräftig.`,
  ],
  concessions: [
    `Viele Atheisten leben moralisch vorbildlicher als viele Christen – das ist eine Beschämung für uns, keine Widerlegung des Arguments.`,
    `Es gibt ernstzunehmende atheistische Moralrealisten (Wielenberg, Enoch, Parfit); die Debatte ist philosophisch nicht entschieden.`,
    `Christen haben oft mit Angst statt mit Liebe moralisch erzogen – das hat der Glaubwürdigkeit christlicher Moral geschadet.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch I', year: '1952', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Baggett; Jerry L. Walls', work: 'Good God: The Theistic Foundations of Morality', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', ref: 'Kap. 2', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Erik J. Wielenberg', work: 'Robust Ethics', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Copan', work: '„The Moral Argument", in: Paul Copan; Paul K. Moser (Hg.), The Rationality of Theism (Routledge)', ref: 'Kap. 8, S. 149 ff.', year: '2003', status: 'paraphrase', note: 'Titel, Band und Seitenbeginn geprüft (Inhaltsverzeichnis, WebSearch 11/2026).' },
  ],
  difficulty: 2,
  tags: ['Moralisches Argument', 'Atheismus', 'Moralrealismus', 'Gewissen', 'Röm 2', 'Nietzsche'],
  related: [
    'moral-und-gott/euthyphron-dilemma',
    'moral-und-gott/moral-durch-evolution',
    'moral-und-gott/moral-kulturell-relativ',
    'moral-und-gott/wissenschaft-begruendet-moral',
    'sinn-existenz/gott-ist-tot-nietzsche',
    'soziologie/saekulare-gesellschaften-gluecklicher',
  ],
};

export default claim;
