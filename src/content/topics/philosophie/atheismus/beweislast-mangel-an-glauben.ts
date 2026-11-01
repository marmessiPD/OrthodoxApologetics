import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'beweislast-mangel-an-glauben',
  title: `„Die Beweislast liegt bei dir – Atheismus ist nur fehlender Glaube."`,
  proponents: [
    { name: 'Antony Flew', role: 'Philosoph (damals Atheist), University of Calgary / Reading', work: '„The Presumption of Atheism", Canadian Journal of Philosophy 2/1 (1972); Buchfassung 1976' },
    { name: 'Matt Dillahunty', role: 'Atheistischer Debattierer', work: 'Kaugummi-Glas-Analogie (gumball analogy) in Debatten und Sendungen' },
    { name: 'Michael Martin', role: 'Religionsphilosoph, Boston University', work: 'Atheism: A Philosophical Justification (1990) – Unterscheidung negativer/positiver Atheismus' },
    { name: 'Christopher Hitchens', role: 'Publizist', work: 'God Is Not Great (2007) – „Hitchens\' Rasiermesser"' },
  ],
  steelman: `Im Gerichtssaal gilt die Unschuldsvermutung: Nicht der Angeklagte muss seine Unschuld beweisen, sondern der Ankläger die Schuld. Antony Flew hat 1972 vorgeschlagen, die Gottesfrage genauso zu behandeln: Der Theist behauptet etwas Außergewöhnliches, also trägt er die Beweislast; der „negative Atheist" behauptet nichts, er ist einfach nicht überzeugt. Matt Dillahunty veranschaulicht das mit einem Glas voller Kaugummikugeln: Wenn jemand behauptet, ihre Zahl sei gerade, und ich das nicht glaube, behaupte ich damit nicht, sie sei ungerade. Ich halte mich zurück, bis Belege vorliegen. Atheismus ist demnach keine Weltanschauung, sondern die Abwesenheit einer bestimmten Überzeugung – so wie man „A-Leprechaunist" ist, ohne ein Programm zu haben. Wer etwas behauptet, muss es belegen; was ohne Belege behauptet wird, darf ohne Belege verworfen werden.`,
  biblical: {
    summary: `Die Bibel kennt keine „Neutralität" in der Gottesfrage: „Es ist kein Gott" ist für den Psalmisten eine *Aussage*, die jemand „in seinem Herzen spricht" (Ps 14,1). Zugleich übernimmt die Bibel bereitwillig eine Begründungspflicht: Christen sollen „allezeit bereit" sein, Rechenschaft (*apologia*) zu geben (1 Petr 3,15), und Paulus „legte vor und bewies" aus der Schrift (Apg 17,2–3). Wir drücken uns also nicht vor der Beweislast – wir bestehen nur darauf, dass auch die Gegenposition begründet werden muss.`,
    detail: `- **Ps 14,1:** Das hebräische *'amar nabal belibbo 'en 'elohim* beschreibt nicht bloß fehlende Information, sondern eine Haltung („der Tor" – *nabal* – ist im AT der moralisch Verschlossene, nicht der Dumme).
- **1 Petr 3,15:** *apologia* ist der juristische Begriff für die Verteidigungsrede, *logos* die Begründung. Der Christ nimmt seine Begründungspflicht also an – „mit Sanftmütigkeit und Furcht".
- **Apg 17,2–3:** Paulus „redete" (*dielexato*, führte Streitgespräche), „tat auf" (*dianoigōn*) und „legte vor" (*paratithemenos*) – das Vokabular rationaler Beweisführung.
- **Röm 1,20:** Nach Paulus sind Gottes Kraft und Gottheit an der Schöpfung erkennbar, „also daß sie keine Entschuldigung haben" – die Schrift sieht den Unglauben nicht als neutralen Ausgangspunkt.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '14,1', quote: `Die Toren sprechen in ihrem Herzen: Es ist kein Gott.`, original: 'אָמַר נָבָל בְּלִבּוֹ אֵין אֱלֹהִים', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,15', quote: `Seid allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht.`, original: 'ἕτοιμοι ἀεὶ πρὸς ἀπολογίαν παντὶ τῷ αἰτοῦντι ὑμᾶς λόγον περὶ τῆς ἐν ὑμῖν ἐλπίδος', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,2–3', quote: `Nachdem nun Paulus gewohnt war, ging er zu ihnen hinein und redete mit ihnen an drei Sabbaten aus der Schrift, tat sie ihnen auf und legte es ihnen vor, daß Christus mußte leiden und auferstehen von den Toten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die frühen Christen wurden selbst als „Atheisten" angeklagt, weil sie die Götter Roms leugneten – und sie antworteten nicht mit dem Rückzug auf „fehlenden Glauben", sondern mit ausführlichen Begründungen. Justin, Athenagoras und Origenes übernahmen die Beweislast für ihren Glauben **und** begründeten ihre Ablehnung der Götter. Origenes betont gegen Kelsos, dass es besser ist, den Glauben mit Vernunft und Prüfung anzunehmen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'I,9–10', quote: `Kelsos behauptet, Christen sagten nur „Prüfe nicht, sondern glaube". Origenes antwortet: Wo möglich, sei es weit besser, die Lehren mit Vernunft und Weisheit anzunehmen; der einfache Glaube sei nur für jene ein Notbehelf, die keine Zeit zum Studium haben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '6', quote: `Wir bekennen, dass wir in Bezug auf solche vermeintlichen Götter Atheisten sind, nicht aber in Bezug auf den wahrhaftigsten Gott.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `In der Fachphilosophie wird „Atheismus" überwiegend als die *Behauptung* verstanden, dass es keinen Gott gibt. Die Stanford Encyclopedia of Philosophy (Artikel „Atheism and Agnosticism", Paul Draper) behandelt Atheismus als Aussage, nicht als psychologischen Zustand. Auch Graham Oppy, einer der führenden atheistischen Philosophen, definiert Atheismus als die Behauptung, dass es keine Götter gibt, und übernimmt dafür ausdrücklich Begründungslasten. Flew selbst räumte 1972 ein, dass er eine *neue* Verwendung des Wortes vorschlug.`,
    detail: `Flews Aufsatz unterscheidet „positiven" Atheismus (Behauptung der Nichtexistenz) von „negativem" Atheismus (bloßes Nicht-Theist-Sein) und schlägt vor, das Wort im zweiten Sinn zu verwenden – im Bewusstsein, dass dies vom üblichen Sprachgebrauch abweicht. Er vergleicht die „Präsumtion des Atheismus" mit der Unschuldsvermutung und betont, dass sie widerlegbar ist. Viele Debattierer der Gegenwart (Dillahunty u. a.) übernehmen Flews Vorschlag, oft ohne zu wissen, dass Flew sich später dem Theismus zuwandte.`,
    sources: [
      { kind: 'gegner', author: 'Antony Flew', work: '„The Presumption of Atheism", Canadian Journal of Philosophy 2/1', year: '1972', ref: 'S. 29–46', quote: `Flew unterscheidet positiven Atheismus (Behauptung, dass es keinen Gott gibt) vom negativen Atheismus (einfach kein Theist sein) und schlägt vor, „Atheist" im negativen Sinn zu verwenden; die Präsumtion sei wie die Unschuldsvermutung widerlegbar.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Graham Oppy', work: 'Atheism: The Basics', year: '2019', quote: `Atheismus ist die Behauptung, dass es keine Götter gibt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Paul Draper', work: '„Atheism and Agnosticism", Stanford Encyclopedia of Philosophy', status: 'paraphrase', quote: 'Atheismus wird im philosophischen Gebrauch als Proposition (es gibt keinen Gott) verstanden.', url: 'https://plato.stanford.edu/entries/atheism-agnosticism/' },
    ],
  },
  quickAnswer: `Einverstanden: Wer etwas behauptet, muss es begründen – und ich begründe gern, warum ich an Gott glaube. Aber das gilt für beide Seiten. Wenn du sagst „Es gibt keinen Gott" oder „Die Natur ist alles, was existiert", ist das ebenfalls eine Behauptung über die Wirklichkeit. Wenn du dagegen wirklich *nur* nicht überzeugt bist, beschreibst du deinen Seelenzustand – dann hast du aber auch kein Argument gegen meine Gründe. Übrigens: Antony Flew, der die Idee 1972 populär machte, gab selbst zu, dass er das Wort „Atheismus" damit umdefinierte.`,
  keyPoints: [
    `**Jede Behauptung trägt Beweislast** – auch „Es gibt keinen Gott" und „Nur die Natur existiert". In einer Debatte über die Frage „Gibt es Gott?" müssen beide Seiten Gründe liefern.`,
    `**„Fehlender Glaube" ist ein psychologischer Zustand, keine These.** Auch Babys, Katzen und Steine „glauben nicht an Gott". Eine Definition, die Steine zu Atheisten macht, sagt nichts über die Wahrheitsfrage.`,
    `**Wer nur „nicht überzeugt" ist, hat keine Gegenargumente.** Sobald jemand sagt, der Theismus sei falsch, irrational oder unwahrscheinlich, stellt er eine Behauptung auf.`,
    `**Flew selbst** sprach 1972 offen von einem Vorschlag, das Wort neu zu verwenden. In der Fachphilosophie (Stanford Encyclopedia, Oppy) bleibt Atheismus die Behauptung der Nichtexistenz Gottes.`,
    `**Die Unschuldsvermutung** ist eine praktische Schutzregel des Strafrechts, keine erkenntnistheoretische Wahrheit. Der neutrale Ausgangspunkt wäre Agnostizismus, nicht Atheismus.`,
    `**Christen nehmen ihre Beweislast an** (1 Petr 3,15) – die frühen Apologeten begründeten sowohl ihren Glauben als auch ihre Ablehnung der Götter.`,
  ],
  argument: {
    name: 'Das Dilemma des „Mangels an Glauben"',
    summary: 'Entweder behauptet der Atheist etwas – dann trägt er Beweislast – oder er behauptet nichts – dann hat er keine Gegenposition.',
    premises: [
      {
        text: 'P1: Entweder behauptet der Atheist, dass Gott nicht existiert (oder dass der Theismus unwahrscheinlich/irrational ist), oder er beschreibt lediglich, dass er selbst keine Gottesüberzeugung hat.',
        support: `Dies ist eine vollständige Disjunktion: Entweder wird etwas über die Wirklichkeit (oder über die Belegelage) ausgesagt, oder nur über den eigenen Bewusstseinszustand.`,
      },
      {
        text: 'P2: Wer etwas über die Wirklichkeit oder die Belegelage behauptet, trägt dafür Beweislast.',
        support: `Das ist genau das Prinzip, auf das sich der Atheist selbst beruft. „Die Belege für Gott sind unzureichend" ist ebenfalls eine Behauptung, die gezeigt werden muss – durch Auseinandersetzung mit den Belegen.`,
      },
      {
        text: 'P3: Wer nur seinen Bewusstseinszustand beschreibt, liefert kein Argument gegen den Theismus.',
        support: `„Ich bin nicht überzeugt" ist eine autobiografische Aussage. Sie ist mit der Wahrheit des Theismus ebenso vereinbar wie mit seiner Falschheit.`,
      },
    ],
    conclusion: 'Also muss der Atheist entweder seine Position begründen oder zugeben, dass er keine Gegenposition zum Theismus vertritt.',
    horns: [
      { label: 'Horn A – Behauptung', text: 'Der Atheist sagt: „Es gibt keinen Gott" oder „Der Theismus ist unbegründet." → Er muss Gründe liefern und sich mit den theistischen Argumenten auseinandersetzen.' },
      { label: 'Horn B – bloßer Zustand', text: 'Der Atheist sagt nur: „Ich glaube nicht." → Dann ist er im klassischen Sinn Agnostiker, und seine Aussage widerlegt nichts. Das Gespräch kann sich ganz den Belegen widmen.' },
    ],
  },
  voices: [
    {
      person: 'flew',
      role: 'als Urheber der „Präsumtion des Atheismus", der später Theist wurde',
      text: `Flew prägte 1972 die Idee, Atheismus als bloße Abwesenheit des Theismus zu definieren und die Beweislast allein dem Theisten zuzuweisen. Er betonte dabei selbst, dass diese Präsumtion widerlegbar sei, und dass er eine vom üblichen Sprachgebrauch abweichende Verwendung des Wortes vorschlage. Später erklärte er, er sei zeitlebens dem sokratischen Grundsatz gefolgt, dem Argument zu folgen, wohin es führt – und dieser Grundsatz führte ihn schließlich zur Annahme eines Schöpfers. Die Präsumtion war für Flew also nie ein Freibrief, sich den Argumenten zu entziehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Antony Flew & Gary Habermas', work: '„My Pilgrimage from Atheism to Theism", Philosophia Christi 6/2', year: '2004', status: 'paraphrase', quote: 'Flew beruft sich auf das sokratische Prinzip, dem Argument zu folgen, wohin es führt.' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Plantinga hat in „God and Other Minds" (1967) gezeigt, dass der Glaube an Gott erkenntnistheoretisch im selben Boot sitzt wie der Glaube an das Bewusstsein anderer Menschen: Für keines von beiden gibt es einen zwingenden Beweis, und doch ist es vernünftig, beides zu glauben. Später argumentierte er, der Gottesglaube könne „eigentlich basal" (properly basic) sein – vernünftig, ohne auf Argumente gestützt zu sein, so wie der Glaube an die Realität der Vergangenheit. Damit bestreitet er die Voraussetzung, dass der Theist allein in der Beweispflicht stehe und der Atheismus der neutrale Normalzustand sei.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', status: 'paraphrase', quote: 'Der Glaube an Gott ist epistemisch dem Glauben an andere Personen mit Bewusstsein vergleichbar.' },
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„Reason and Belief in God", in: Plantinga & Wolterstorff (Hg.), Faith and Rationality', year: '1983', status: 'paraphrase', quote: 'Der Gottesglaube kann eigentlich basal und dennoch rational sein.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Debattierer',
      text: `Craig weist in Debatten darauf hin, dass „fehlender Glaube" ein psychologischer Zustand ist, keine Position: Auch Babys hätten keinen Gottesglauben, ohne deshalb ein Argument zu vertreten. Wer in einer Debatte die Frage „Gibt es Gott?" mit Nein beantwortet, müsse sagen, warum. Zur „Präsumtion des Atheismus" bemerkt er: Das Fehlen von Belegen ist nur dann ein Beleg für das Fehlen einer Sache, wenn man mehr Belege erwarten müsste, falls sie existierte – und genau das sei bei Gott keineswegs klar.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', ref: 'Kap. 2', status: 'paraphrase', quote: 'Die Präsumtion des Atheismus; Fehlen von Belegen ist nur bei begründeter Erwartung von Belegen ein Beleg des Fehlens.' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen den Philosophen Kelsos',
      text: `Kelsos warf den Christen um 178 vor, sie verlangten blinden Glauben. Origenes übernahm in seiner achtbändigen Antwort die volle Begründungslast: Er prüfte jeden Einwand einzeln, verwies auf die erfüllten Prophetien, auf die Glaubwürdigkeit der Jünger, die für ihr Zeugnis litten, und auf die verwandelnde Kraft des Evangeliums. Zugleich zeigte er, dass auch Kelsos' eigene Philosophie auf unbewiesenen Grundannahmen ruhte – niemand steht außerhalb der Begründungspflicht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'I,9–11', status: 'paraphrase', quote: 'Auch Anhänger philosophischer Schulen übernehmen ihre Grundsätze im Vertrauen auf ihre Lehrer; Christen wollen ihren Glauben mit Gründen annehmen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'atheismus-nur-ohne-theismus',
      objection: `„Atheismus heißt wörtlich ‚ohne Theismus'. Babys sind Atheisten. Ich habe keine Weltanschauung zu verteidigen, ich bin einfach nicht überzeugt."`,
      objectionBy: 'Matt Dillahunty',
      answer: `Nach dieser Definition sind auch Katzen und Steine Atheisten – sie sagt also nichts darüber, ob es Gott gibt. Uns interessiert aber die Wahrheitsfrage. In der Fachphilosophie bedeutet Atheismus die Behauptung, dass es keinen Gott gibt; selbst Antony Flew, der die neue Definition 1972 vorschlug, sprach offen von einer Umdeutung. Wenn du wirklich nur deinen Bewusstseinszustand beschreibst, ist das in Ordnung – dann lass uns über die Belege sprechen.`,
      questionsBack: [
        `Glaubst du, dass es Gott gibt, nicht gibt, oder hast du keine Meinung? Welche der drei Antworten ist deine?`,
        `Hältst du den Theismus für falsch oder nur für unbewiesen?`,
      ],
      followUps: [
        {
          id: 'definitionen-konvention',
          objection: `„Definitionen sind Konventionen. Ich darf mich nennen, wie ich will, und viele Atheisten verwenden das Wort so."`,
          objectionBy: 'Matt Dillahunty',
          answer: `Völlig richtig – Wörter sind Konventionen, und ich will mich nicht über Etiketten streiten. Aber dann gilt: Mit dieser Definition hast du keine Position zur Frage, ob Gott existiert. Du kannst dann nicht zugleich sagen, mein Glaube sei falsch oder irrational, denn das wäre eine Behauptung. Lass uns also festhalten, was du tatsächlich behauptest, und das prüfen.`,
          followUps: [
            {
              id: 'belege-unzureichend',
              objection: `„Ich behaupte nicht, dass Gott nicht existiert. Ich sage nur: Die Belege, die ich bisher gesehen habe, reichen nicht."`,
              objectionBy: 'Matt Dillahunty',
              answer: `Das ist fair, aber „Die Belege reichen nicht" ist ein Urteil, das man begründen muss – es setzt voraus, dass man die Belege geprüft und gewichtet hat. Dann reden wir über konkrete Argumente: Welche Prämisse des Kalam-Arguments, des Kontingenzarguments oder des historischen Arguments für die Auferstehung hältst du für falsch? So wird aus einem Etikett ein Gespräch.`,
              questionsBack: [`Welches Argument für Gott hältst du für das stärkste – und woran scheitert es deiner Meinung nach?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kaugummi-glas',
      objection: `„Stell dir ein Glas mit Kaugummikugeln vor. Du behauptest, die Zahl sei gerade. Ich glaube dir nicht – heißt das, ich behaupte, sie sei ungerade? Nein! Genau so verhalte ich mich zu Gott."`,
      objectionBy: 'Matt Dillahunty',
      answer: `Die Analogie passt nur, wenn es keinerlei Belege gibt und beide Möglichkeiten gleich wahrscheinlich sind – beim Kaugummiglas ist es eben 50:50. Bei der Gottesfrage liegen aber Belege auf dem Tisch: der Anfang des Universums, die Feinabstimmung, das Bewusstsein, die Auferstehung. Außerdem zählen die meisten Atheisten in der Praxis nicht bloß nicht, sondern argumentieren aktiv, dass Gott nicht existiert – etwa mit dem Leid. Dann verlassen sie das Kaugummiglas.`,
      followUps: [
        {
          id: 'unschuldsvermutung',
          objection: `„Denk an das Gericht: Unschuldig, bis die Schuld bewiesen ist. Gott existiert nicht, bis seine Existenz bewiesen ist."`,
          objectionBy: 'Antony Flew (1972)',
          answer: `Die Unschuldsvermutung ist eine bewusst einseitige Schutzregel: Lieber zehn Schuldige freilassen als einen Unschuldigen verurteilen. Sie sagt nichts darüber, was wahr ist – „nicht schuldig" heißt nicht „unschuldig". Flew selbst nannte die Präsumtion ausdrücklich widerlegbar. Der wirklich neutrale Ausgangspunkt wäre Agnostizismus; sobald man aber Belege prüft, muss man beide Seiten wiegen.`,
          followUps: [
            {
              id: 'hitchens-rasiermesser',
              objection: `„Was ohne Belege behauptet werden kann, kann auch ohne Belege verworfen werden."`,
              objectionBy: 'Christopher Hitchens',
              answer: `Einverstanden – deshalb bringe ich Belege. Aber beachte: Dieser Satz wird selbst ohne Belege behauptet; nach seinem eigenen Maßstab dürfte ich ihn verwerfen. Sinnvoll verstanden heißt er nur: Unbegründete Behauptungen verdienen keine Zustimmung. Das gilt dann aber auch für „Das Universum ist einfach da" und „Bewusstsein ist nur Neuronenfeuer".`,
              sources: [
                { kind: 'gegner', author: 'Christopher Hitchens', work: 'God Is Not Great', year: '2007', quote: `What can be asserted without evidence can also be dismissed without evidence.`, status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'einhoerner',
      objection: `„Ich muss auch nicht beweisen, dass es keine Einhörner gibt. Die Nichtexistenz von etwas muss man nicht beweisen."`,
      objectionBy: 'Richard Dawkins (sinngemäß)',
      answer: `Bei Einhörnern ist das Fehlen von Belegen tatsächlich ein Beleg für ihr Fehlen: Wären sie physische Tiere auf der Erde, müssten wir Spuren, Knochen und Sichtungen erwarten. Gott ist aber kein Gegenstand *in* der Welt, sondern wird als ihr Grund behauptet – und dafür gibt es Belege eigener Art. Zudem kann man Nichtexistenz durchaus begründen: Mathematiker beweisen, dass es keine größte Primzahl gibt.`,
      detail: `Die Regel „Absence of evidence is evidence of absence" gilt nur, wenn man im Fall der Existenz mehr Belege erwarten müsste, als man hat. Bei Gott ist umstritten, welche Belege man erwarten müsste – und die vorhandenen sprechen nach christlicher Überzeugung gerade für ihn. Siehe auch „Gott ist wie Russells Teekanne oder das Fliegende Spaghettimonster".`,
      followUps: [
        {
          id: 'naturalismus-null-hypothese',
          objection: `„Der Naturalismus ist einfach die Null-Hypothese. Ich nehme nur an, was wir sicher wissen: die Natur."`,
          objectionBy: 'Sean Carroll (sinngemäß, The Big Picture 2016)',
          answer: `Der metaphysische Naturalismus behauptet sehr viel: dass es *nur* Natur gibt, keine Seele, keinen Gott, keine objektiven Werte außerhalb der Natur – und dass das Universum keine Erklärung braucht oder sich selbst erklärt. Das ist eine kühne These über das Ganze der Wirklichkeit, keine Nullhypothese. Sie muss erklären, warum es überhaupt etwas gibt, warum die Natur mathematisch verständlich ist und wie Bewusstsein und Vernunft entstehen.`,
          followUps: [
            {
              id: 'methode-statt-metaphysik',
              objection: `„Naturalismus ist doch nur die Methode der Wissenschaft. Sie funktioniert – das genügt als Rechtfertigung."`,
              objectionBy: 'Jerry Coyne',
              answer: `Hier verwechselst du zwei Dinge. Der *methodische* Naturalismus sagt: In der Naturwissenschaft suchen wir natürliche Ursachen – dem stimmen auch die meisten gläubigen Forscher zu. Der *metaphysische* Naturalismus sagt: Es gibt nichts außer der Natur. Aus dem Erfolg einer Methode folgt aber nicht, dass nur das existiert, was diese Methode erfassen kann – so wie aus dem Erfolg eines Metalldetektors nicht folgt, dass es nur Metall gibt.`,
              questionsBack: [`Welches Experiment könnte zeigen, dass nur das existiert, was Experimente erfassen können?`],
            },
          ],
        },
      ],
    },
    {
      id: 'oppy-weltbildvergleich',
      objection: `„Gut, lassen wir die Etiketten. Beide Seiten tragen eine Last – dann vergleichen wir eben die Weltbilder als Ganze. Naturalismus und Theismus müssen dieselben Daten erklären. Der Naturalismus kommt dabei mit weniger aus: keine übernatürlichen Ursachen, nur die natürliche Welt. Bei gleicher Erklärungskraft gewinnt die einfachere Theorie."`,
      objectionBy: 'Graham Oppy',
      answer: `Damit sind wir endlich im echten Gespräch – und du hast zugegeben, dass es keine „Standardposition" gibt, die sich nicht rechtfertigen muss. Aber beide Prämissen sind strittig: Der Naturalismus muss die Existenz eines kontingenten Universums, seine Feinabstimmung, das Bewusstsein und die Gültigkeit der Vernunft als unerklärte Grundtatsachen hinnehmen. Der Theismus führt all das auf *eine* Quelle zurück. Einfachheit zählt nur bei gleicher Erklärungskraft – und genau die bestreite ich.`,
      detail: `Oppy ist der fairste Gegner in dieser Frage: Er lehnt die „lack of belief"-Strategie ab und vertritt den Naturalismus als positive These, die sich am Theismus messen lassen muss (*Arguing about Gods*, 2006; *Atheism: The Basics*, 2019). Sein Kernargument ist ein Theorienvergleich nach theoretischen Tugenden: Einfachheit, Erklärungskraft, Übereinstimmung mit den Daten.

Die christliche Antwort setzt an zwei Stellen an:
- **Erklärungskraft:** Wer am Ende sagt „Das Universum, seine Gesetze und Anfangsbedingungen sind einfach da", hat diese Tatsachen nicht erklärt, sondern zur Grenze der Erklärung erklärt.
- **Einfachheit:** Nicht die Zahl der Wesen-*Arten* entscheidet allein, sondern auch, wie viele unerklärte, willkürlich wirkende Einzeltatsachen eine Theorie braucht. Swinburne argumentiert, dass eine Person mit unbegrenzter Macht, unbegrenztem Wissen und vollkommener Freiheit die denkbar einfachste Erklärung ist – unbegrenzte Größen brauchen keine weitere Festlegung.`,
      voices: [
        {
          person: 'swinburne',
          role: 'als Religionsphilosoph und Theoretiker der Erklärung',
          text: `Swinburne behandelt den Theismus ausdrücklich wie eine wissenschaftliche Hypothese, die an Einfachheit und Erklärungskraft gemessen wird. Für ihn ist Gott die einfachste denkbare letzte Erklärung: eine einzige Person ohne willkürliche Grenzen. Der Naturalismus müsse dagegen eine Vielzahl einzelner Konstanten, Gesetze und Anfangsbedingungen als rohe Tatsachen hinnehmen.`,
          sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', status: 'paraphrase', quote: 'Theismus als einfachste vollständige Erklärung; Einfachheit als Kriterium der A-priori-Wahrscheinlichkeit.' }],
        },
      ],
      sources: [
        { kind: 'gegner', author: 'Graham Oppy', work: 'Arguing about Gods', year: '2006', status: 'paraphrase', quote: 'Theismus und Naturalismus als konkurrierende Gesamttheorien; der Naturalismus sei bei gleicher Erklärungskraft ontologisch sparsamer.' },
        { kind: 'gegner', author: 'Graham Oppy', work: 'Atheism: The Basics', year: '2019', status: 'paraphrase' },
      ],
      questionsBack: [
        `Welche Tatsachen nimmst du in deinem Weltbild als unerklärt hin – und warum sind das weniger als in meinem?`,
        `Ist eine Theorie einfacher, wenn sie weniger Arten von Dingen annimmt, aber mehr willkürliche Einzeltatsachen unerklärt lassen muss?`,
      ],
      followUps: [
        {
          id: 'theismus-auch-brute-fact',
          objection: `„Auch du hast unerklärte Grundtatsachen: Gottes Existenz und seine Entscheidung zu erschaffen. Jede Erklärungskette endet irgendwo. Der Theismus fügt nur eine zusätzliche Schicht hinzu."`,
          objectionBy: 'Graham Oppy',
          answer: `Jede Kette endet irgendwo – aber nicht jedes Ende ist gleich gut. Ein Ende in etwas, das genauso gut hätte anders sein können, ist ein willkürlicher Abbruch. Ein Ende in etwas, das notwendig existiert und nicht anders sein kann, ist ein echter Abschluss. Das Universum mit seinen konkreten Massen, Konstanten und Anfangsbedingungen sieht durch und durch kontingent aus; ein unbegrenztes, notwendiges Sein nicht.`,
          detail: `Der Punkt ist nicht, dass Theisten *keine* Grundtatsache haben, sondern welche Art: Die klassische Tradition (Leibniz, Thomas von Aquin, heute Pruss und Rasmussen) unterscheidet zwischen kontingenten Dingen, die eine Erklärung außerhalb ihrer selbst brauchen, und einem notwendigen Sein, das den Grund seiner Existenz in seinem Wesen hat. Gottes freie Entscheidung zu erschaffen wird durch seine Gründe (die Güte des Geschaffenen) erklärt – auch wenn sie nicht erzwungen ist. Siehe auch „Das Kontingenzargument ist ein Trugschluss".`,
          voices: [
            {
              person: 'alexander-pruss',
              role: 'als analytischer Metaphysiker',
              text: `Pruss verteidigt eine Form des Prinzips vom zureichenden Grund und zeigt, dass seine Leugnung auch die Wissenschaft untergräbt: Wenn kontingente Tatsachen grundlos auftreten könnten, wüssten wir nie, ob ein Messergebnis eine Ursache hat. Freie Entscheidungen sind für ihn durch Gründe erklärt, ohne determiniert zu sein – so lässt sich Gottes Schöpfungsakt erklären, ohne ihn notwendig zu machen.`,
              sources: [{ kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'The Principle of Sufficient Reason: A Reassessment', year: '2006', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'naturzustand-notwendig',
              objection: `„Dann sage ich: Der erste Zustand der natürlichen Welt existiert notwendig. Du kannst nicht beweisen, dass er kontingent ist. Damit habe ich dasselbe Ende wie du – nur ohne Gott."`,
              objectionBy: 'Graham Oppy',
              answer: `Das ist Oppys ehrlichster Zug – aber er hat einen hohen Preis. Dann wären auch alle Werte dieses Anfangszustands notwendig: die Stärke der Schwerkraft, die extrem niedrige Anfangsentropie, die Massen der Teilchen. Diese Größen wirken gerade nicht notwendig, sondern wie Zahlen, die auch anders hätten ausfallen können – deshalb fragen Physiker ja, *warum* sie so sind. Ein notwendiges Sein ohne willkürliche Grenzen ist weit plausibler als eine notwendige, aber hochspezifische Zahlenreihe.`,
              detail: `Joshua Rasmussen nennt dies das Problem der **willkürlichen Grenzen**: Alles, was eine bestimmte Größe, Form oder Grenze hat, wirft die Frage auf, warum gerade diese – und lädt damit zur Erklärung ein. Ein Fundament, das notwendig ist, sollte keine solchen Grenzen haben. Der naturalistische Anfangszustand hat sie in Fülle. Zudem passt die Feinabstimmung schlecht zu einer Notwendigkeit, die blind auf genau die schmalen lebensfreundlichen Werte gefallen wäre.`,
              voices: [
                {
                  person: 'joshua-rasmussen',
                  role: 'als Metaphysiker des notwendigen Seins',
                  text: `Rasmussen argumentiert, dass ein notwendiges Fundament der Wirklichkeit keine willkürlichen Grenzen haben kann, weil jede solche Grenze eine weitere Erklärung verlangen würde. Ein physikalischer Anfangszustand mit bestimmten Größen und Werten erfüllt diese Bedingung nicht; ein unbegrenztes, geistiges Sein dagegen schon.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Joshua Rasmussen', work: 'How Reason Can Lead to God', year: '2019', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Joshua Rasmussen & Felipe Leon', work: 'Is God the Best Explanation of Things? A Dialogue', year: '2019', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [`Wenn der Anfangszustand notwendig ist: Warum ist es dann sinnvoll, dass Physiker nach einer tieferen Erklärung seiner Werte suchen?`],
              followUps: [
                {
                  id: 'gott-ebenso-willkuerlich',
                  objection: `„Gott ist doch genauso willkürlich: Warum gerade dieser Gott mit genau diesen Eigenschaften? ‚Vollkommenes Wesen' ist eine bloße Festsetzung, die du dir zurechtlegst."`,
                  objectionBy: 'Sean Carroll',
                  answer: `Gerade nicht: Ein vollkommenes Wesen ist das *einzige* Fundament, bei dem es nichts festzulegen gibt. Unbegrenzte Macht, unbegrenztes Wissen und vollkommene Güte brauchen keinen Zahlenwert und keinen Regler – sie sind keine Auswahl aus vielen Möglichkeiten, sondern das Fehlen jeder Begrenzung. Und der christliche Glaube stützt sich nicht nur darauf: Er verweist zusätzlich auf eine geschichtliche Selbstoffenbarung, die man prüfen kann – die Auferstehung Jesu.`,
                  detail: `Schon Athanasius argumentierte in *Contra Gentes*, dass das Geordnete und Zusammengesetzte auf einen einen, einfachen Urheber verweist, nicht auf viele konkurrierende Prinzipien. In der analytischen Philosophie formuliert Swinburne denselben Gedanken als Einfachheitsargument: Null und Unendlich sind „einfachere" Werte als beliebige endliche Zahlen. Zugeständnis: Ob der Begriff eines vollkommenen Wesens widerspruchsfrei ist, muss eigens verteidigt werden (siehe „Das ontologische Argument ist ein Wortspiel"). Aber der Vorwurf der Willkür trifft ihn nicht.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Apologet gegen die Heiden',
                      text: `In *Contra Gentes* schließt Athanasius aus der Ordnung und Harmonie der Welt, deren gegensätzliche Elemente zusammenwirken, auf einen einzigen ordnenden Logos. Viele Götter oder mehrere Urprinzipien würden die Einheit des Kosmos nicht erklären; nur ein einziger Schöpfer, der selbst nicht zusammengesetzt ist, kann ihr Grund sein.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '35–39', status: 'paraphrase', quote: 'Die Ordnung des Alls zeigt einen einzigen Lenker und Schöpfer, nicht viele.' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'carroll-bayes-prior',
          objection: `„Rechnen wir es bayesianisch: Die Beweislast ist nichts als Prior mal Likelihood. Ein unsichtbarer, allmächtiger Geist ist eine hochkomplexe Hypothese mit winzigem Prior – und die Daten passen mindestens so gut zum Naturalismus."`,
          objectionBy: 'Sean Carroll',
          answer: `Ich nehme das Bayes-Spiel gern an. Aber Priors für ganze Weltbilder lassen sich nicht aus Häufigkeiten ablesen – sie spiegeln, was man für einfach und natürlich hält. Wer Geist von vornherein als späten, komplexen Zufallsbefund der Materie behandelt, hat den Materialismus schon in den Prior gesteckt. Und bei den Likelihoods sieht es für den Theismus gut aus: Ein Universum mit Anfang, Feinabstimmung, Bewusstsein und Moral ist unter Gott erwartbarer als unter blinder Natur.`,
          detail: `Carroll vertritt seinen „poetischen Naturalismus" ausdrücklich bayesianisch (*The Big Picture*, 2016) und hat in der Debatte mit Craig (Greer-Heard-Forum, New Orleans 2014) argumentiert, der Theismus sei zu vage, um echte Vorhersagen zu machen. Die Antwort: Der Theismus sagt durchaus etwas voraus – eine geordnete, mathematisch verständliche Welt, in der vernünftige, moralische Personen entstehen können. Genau das finden wir.`,
          sources: [
            { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself', year: '2016', status: 'paraphrase', quote: 'Bayesianisches Abwägen von Weltbildern; Naturalismus als besser bestätigte Theorie.' },
            { kind: 'gegner', author: 'Sean Carroll & William Lane Craig', work: 'Debatte „God and Cosmology", Greer-Heard Point-Counterpoint Forum, New Orleans', year: '2014', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'feinabstimmung-gegen-gott',
              objection: `„Die Feinabstimmung spricht sogar *gegen* Gott: Ein allmächtiger Gott könnte Leben in jedem beliebigen Universum erschaffen, mit beliebigen Konstanten. Nur unter dem Naturalismus *müssen* wir ein lebensfreundliches Universum beobachten."`,
              objectionBy: 'Sean Carroll',
              answer: `Unter dem Naturalismus erklärt der Beobachtereffekt nur, warum wir *kein* lebensfeindliches Universum sehen – nicht, warum es überhaupt ein lebensfreundliches gibt, solange man kein Multiversum annimmt. Und Gott hat einen guten Grund, Leben gerade durch stabile, feinabgestimmte Naturgesetze hervorzubringen: Nur in einer gesetzmäßigen Welt können Geschöpfe die Folgen ihres Handelns vorhersehen, verantwortlich handeln und die Welt erforschen.`,
              detail: `Carrolls Einwand setzt voraus, ein Gott würde Leben ohne regelmäßige Naturgesetze durch ständige Eingriffe erhalten. Theisten wie Swinburne und Robin Collins argumentieren umgekehrt: Ein Gott, der verantwortliche, forschende Geschöpfe will, hat Grund, eine Welt mit festen, mathematisch erfassbaren Gesetzen zu schaffen. Collins verweist zusätzlich darauf, dass die Konstanten nicht nur Leben, sondern auch die **Entdeckbarkeit** der Welt durch Wissenschaft begünstigen.`,
              voices: [
                {
                  person: 'robin-collins',
                  role: 'als Philosoph und Physiker',
                  text: `Collins formuliert das Feinabstimmungsargument als Wahrscheinlichkeitsvergleich: Ein lebensfreundliches Universum ist unter Theismus nicht überraschend, unter einem Einzeluniversum ohne Gott dagegen höchst überraschend. Er antwortet auf den Einwand, Gott brauche keine Feinabstimmung, mit dem Hinweis auf den Wert einer gesetzmäßigen, für verkörperte Wesen erforschbaren Welt.`,
                  sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: W. L. Craig & J. P. Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' }],
                },
              ],
              questionsBack: [`Warum sollte ein Gott, der verantwortliche Geschöpfe will, eine Welt ohne verlässliche Naturgesetze schaffen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass Gott *nicht* existiert, oder hast du nur keine Meinung? Was genau ist deine Position?`,
    `Wenn du sagst, die Belege reichen nicht: Welche hast du konkret geprüft?`,
    `Trägt der Satz „Nur die Natur existiert" keine Beweislast?`,
    `Ist die Unschuldsvermutung eine Regel über Wahrheit oder eine Schutzregel für Angeklagte?`,
  ],
  avoid: [
    `„Atheismus ist auch ein Glaube, genau wie meiner!" – Das klingt nach Retourkutsche und lädt zum Etikettenstreit ein. Besser: „Welche Behauptung vertrittst du, und wie begründest du sie?"`,
    `Sich über die Definition „lack of belief" lustig machen. Nimm sie ernst – und zeige dann ruhig, welche Folgen sie hat.`,
    `Die eigene Beweislast abstreiten („Du musst beweisen, dass Gott nicht existiert, ich nicht"). Christen sollen Rechenschaft geben (1 Petr 3,15).`,
  ],
  concessions: [
    `Wer behauptet, dass Gott existiert, trägt eine Beweislast – das nehmen Christen ausdrücklich an.`,
    `Viele Menschen sind tatsächlich einfach unentschieden oder haben sich nie mit der Frage befasst; ihnen gegenüber ist Geduld angebracht, keine Logik-Falle.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Antony Flew', work: 'The Presumption of Atheism and Other Philosophical Essays on God, Freedom and Immortality', year: '1976', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'Atheism: The Basics', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Atheismus', 'Beweislast', 'Definition', 'Flew', 'Agnostizismus'],
  related: [
    'atheismus/keine-beweise-fuer-gott',
    'atheismus/teekanne-spaghettimonster',
    'atheismus/aussergewoehnliche-belege',
    'erkenntnistheorie/agnostizismus',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'naturalismus/nur-materie',
  ],
};

export default claim;
