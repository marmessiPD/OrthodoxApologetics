import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religioese-saetze-sinnlos',
  title: `„Religiöse Sätze sind kognitiv sinnlos (Ayer)."`,
  proponents: [
    { name: 'A. J. Ayer', role: 'Philosoph, Oxford (1910–1989)', work: 'Language, Truth and Logic (1936), Kap. 1 und 6' },
    { name: 'Rudolf Carnap', role: 'Philosoph, Wiener Kreis (1891–1970)', work: '„Überwindung der Metaphysik durch logische Analyse der Sprache", Erkenntnis 2 (1931)' },
    { name: 'Kai Nielsen', role: 'Religionsphilosoph, University of Calgary (1926–2021)', work: 'Contemporary Critiques of Religion (1971); An Introduction to the Philosophy of Religion (1982)' },
    { name: 'Antony Flew (früh)', role: 'Philosoph, damals Atheist', work: 'God and Philosophy (1966)' },
  ],
  steelman: `Der logische Positivismus des Wiener Kreises, in England vor allem durch A. J. Ayer bekannt gemacht, schlägt ein klares Kriterium vor: Ein Satz hat nur dann einen Tatsachengehalt, wenn er entweder analytisch wahr ist (wie „Alle Junggesellen sind unverheiratet") oder sich durch Erfahrung überprüfen lässt. Sätze wie „Gott existiert", „Gott ist Liebe" oder „Die Seele ist unsterblich" sind weder das eine noch das andere. Keine Beobachtung könnte sie bestätigen oder widerlegen, denn ein transzendenter Gott hat definitionsgemäß keine beobachtbaren Eigenschaften. Solche Sätze sind daher nicht falsch, sondern *sinnlos* – sie haben die grammatische Form von Behauptungen, sagen aber nichts. Sie drücken bestenfalls Gefühle aus, wie Musik. Das ist keine Beleidigung der Gläubigen, sondern Sprachhygiene: Wer Sätze ohne Gehalt für Wissen hält, betrügt sich selbst. Ayer war dabei konsequent: Auch der Satz „Es gibt keinen Gott" ist sinnlos – die Gottesfrage ist keine echte Frage.`,
  biblical: {
    summary: `Die Bibel macht Aussagen, die einen klaren Gehalt haben und an der Wirklichkeit hängen: Gott hat die Welt erschaffen (Gen 1,1), er hat in der Geschichte gehandelt, Jesus „gekreuzigt unter Pontius Pilatus" ist auferstanden. Der Johannesbrief betont gerade das Erfahrbare: „was wir gehört haben, was wir gesehen haben mit unseren Augen … und unsere Hände betastet haben" (1 Joh 1,1). Zugleich weiß die Schrift, dass menschliche Sprache an Grenzen stößt: Gottes Gedanken sind höher als unsere (Jes 55,8–9), und „niemand hat Gott je gesehen" – der Sohn hat ihn kundgemacht (Joh 1,18). Das ist keine Sinnlosigkeit, sondern ein Überschuss an Sinn.`,
    detail: `- **1 Joh 1,1–3:** Das Christentum versteht sich als Zeugnis von Erfahrenem, nicht als Spekulation.
- **Röm 1,20:** Gottes unsichtbares Wesen wird „ersehen" an seinen Werken – die Welt ist ein Hinweis, der verstanden werden kann.
- **Joh 1,18:** Der unsichtbare Gott wird im Sohn „ausgelegt" (griech. *exēgēsato*). Die Rede von Gott hat ihren Maßstab in Christus.
- **Jes 55,8–9 / Röm 11,33:** Die Unbegreiflichkeit Gottes ist biblisch – aber sie bedeutet, dass Gott *mehr* ist, als wir sagen können, nicht dass unsere Worte leer sind.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '1,1', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,18', quote: `Niemand hat Gott je gesehen; der eingeborene Sohn, der in des Vaters Schoß ist, der hat es uns verkündigt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,20', quote: `… damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '55,8–9', quote: `Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege, spricht der HERR; sondern soviel der Himmel höher ist denn die Erde, so sind auch meine Wege höher denn eure Wege und meine Gedanken denn eure Gedanken.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Tradition kennt zwei Weisen, von Gott zu sprechen: die bejahende (kataphatische) und die verneinende (apophatische). Die koptischen Anaphoren preisen Gott als unaussprechlich, unsichtbar und unbegreiflich – und bekennen im selben Gebet sehr konkret, was er getan hat: erschaffen, gesprochen, Mensch geworden, gekreuzigt, auferstanden. Gregor von Nyssa sagt, die wahre Gotteserkenntnis bestehe darin, zu sehen, dass Gott unsichtbar ist – ein „Sehen im Nicht-Sehen". Das ist das Gegenteil von Ayers Sinnlosigkeit: Die Väter verneinen nicht den Gehalt der Rede von Gott, sondern ihre Begrenztheit.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,163', year: 'um 390', status: 'paraphrase', quote: 'Das ist die wahre Erkenntnis des Gesuchten: dass er über alles Erkennen hinausgeht; das ist das Sehen, das im Nicht-Sehen besteht.' },
      { kind: 'liturgie', work: 'Koptische Anaphoren (Basilius- und Gregorius-Liturgie)', status: 'paraphrase', quote: 'Gott wird gepriesen als unaussprechlich, unsichtbar, unbegreiflich – und zugleich als der, der erschaffen hat, Mensch geworden ist und uns erlöst hat.', note: 'Allgemeine Charakterisierung; genaue Wortlaute je nach Ausgabe des Euchologions.' },
    ],
  },
  quickAnswer: `Ayers Kriterium widerlegt sich selbst: Der Satz „Nur analytische oder empirisch überprüfbare Sätze sind sinnvoll" ist weder analytisch noch empirisch überprüfbar – nach seinem eigenen Maßstab also sinnlos. Darum ist der logische Positivismus seit den 1960er-Jahren praktisch aufgegeben; Ayer selbst sagte 1978 im Rückblick, der Hauptfehler seines Buches sei, dass „nahezu alles darin falsch" war. Außerdem: Wir verstehen „Gott existiert" gut genug, um darüber zu streiten – sonst könnte der Atheist ihn auch nicht verneinen.`,
  keyPoints: [
    `**Selbstwiderlegung:** Das Verifikationsprinzip ist selbst weder analytisch noch empirisch prüfbar. Nach seinem eigenen Maßstab ist es sinnlos.`,
    `**Es beweist zu viel:** Naturgesetze (allgemeine Sätze), Aussagen über die Vergangenheit, über andere Bewusstseine und die Ethik würden ebenfalls „sinnlos".`,
    `**Verstehen kommt vor Überprüfen:** Wir verstehen einen Satz, *bevor* wir wissen, wie man ihn prüft – sonst könnten wir nicht einmal feststellen, dass er unprüfbar ist (Swinburne).`,
    `**Historisch gescheitert:** Alle Formulierungen des Kriteriums waren entweder zu streng oder zu weit (Hempel 1950, Church 1949). Ayer selbst: „nahezu alles falsch".`,
    `**Auch Atheismus wäre sinnlos:** Ayer sagte das ausdrücklich. Wer sich auf ihn beruft, kann nicht zugleich behaupten, Gott existiere nicht.`,
    `**Analogie und Apophatik:** Christen sprechen von Gott in Analogien (Thomas) und wissen um die Grenzen der Sprache (Gregor von Nyssa) – das ist Ehrfurcht, keine Leere.`,
  ],
  argument: {
    name: 'Die Selbstwiderlegung des Verifikationsprinzips',
    summary: 'Das Kriterium, das religiöse Sätze für sinnlos erklärt, erfüllt sein eigenes Kriterium nicht.',
    premises: [
      {
        text: 'P1: Nach dem Verifikationsprinzip (VP) ist ein Satz nur dann sinnvoll, wenn er analytisch wahr oder empirisch überprüfbar ist.',
        support: `So formuliert Ayer in „Language, Truth and Logic" (1936), Kap. 1, in Anlehnung an den Wiener Kreis.`,
        sources: [
          { kind: 'gegner', author: 'A. J. Ayer', work: 'Language, Truth and Logic', ref: 'Kap. 1', year: '1936', quote: `Ein Satz ist für jemanden dann und nur dann tatsachenbezogen sinnvoll, wenn er weiß, wie die Aussage zu verifizieren ist, die der Satz auszudrücken vorgibt.`, original: 'a sentence is factually significant to any given person, if, and only if, he knows how to verify the proposition which it purports to express', translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Das VP selbst ist weder analytisch wahr (es folgt nicht aus der Bedeutung der Wörter) noch empirisch überprüfbar (kein Experiment kann zeigen, dass nur prüfbare Sätze Sinn haben).',
        support: `Das ist allgemein anerkannt; Ayer selbst behandelte das Prinzip in der zweiten Auflage (1946) deshalb als „Definition" bzw. Vorschlag.`,
      },
    ],
    inferences: ['C1: Also ist das VP nach seinem eigenen Maßstab sinnlos.', 'C2: Ein sinnloser Satz kann nicht zeigen, dass andere Sätze sinnlos sind.'],
    conclusion: 'Also liefert das Verifikationsprinzip keinen Grund, religiöse Sätze für kognitiv sinnlos zu halten.',
  },
  voices: [
    {
      person: 'plantinga',
      role: 'als Analytiker des Verifikationismus',
      text: `Plantinga hat in „God and Other Minds" (1967) die verschiedenen Formulierungen des Verifikationsprinzips einzeln untersucht und gezeigt, dass keine davon zugleich die Religion ausschließt und die Wissenschaft zulässt. Entweder ist das Kriterium so streng, dass auch Naturgesetze und Aussagen über andere Menschen sinnlos werden, oder es ist so weit, dass auch „Gott existiert" hindurchschlüpft. Er zog den Schluss, dass das Prinzip keine Entdeckung über Sprache ist, sondern ein willkürlicher Ausschluss, für den keine Begründung vorliegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', ref: 'Kap. 7', status: 'paraphrase', quote: 'Keine Formulierung des Verifikationsprinzips schließt den Theismus aus, ohne auch sinnvolle wissenschaftliche Sätze auszuschließen.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der religiösen Sprache',
      text: `Swinburne beginnt „The Coherence of Theism" mit der Frage, ob religiöse Sätze überhaupt Sinn haben. Sein bekanntes Gegenbeispiel: „Manche Spielsachen, die tagsüber im Schrank liegen, kommen nachts heraus und tanzen, wenn niemand zusieht." Niemand kann das je überprüfen – und doch verstehen wir genau, was gemeint ist. Verstehen beruht darauf, dass wir die Wörter und ihre Verbindung kennen, nicht auf einem Prüfverfahren. Sätze über Gott bestehen aus verständlichen Wörtern („Person", „wissen", „können", „gut") in verständlicher Verbindung – sie sind also sinnvoll, wahr oder falsch.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', year: '1977, 2. Aufl. 2016', ref: 'Teil I', status: 'paraphrase', quote: 'Das Beispiel der nachts tanzenden Spielsachen: Unprüfbare Sätze können vollkommen verständlich sein.' },
      ],
    },
    {
      person: 'william-alston',
      role: 'als Sprachphilosoph und Erkenntnistheoretiker',
      text: `Alston hat sich gegen alle Versuche gewandt, religiöse Rede als bloßen Gefühlsausdruck oder als bedeutungslose Wortkette zu deuten. In „Divine Nature and Human Language" (1989) zeigt er, dass Prädikate wie „wissen", „wollen" oder „handeln" einen gemeinsamen Kern haben, der auf Gott und Menschen anwendbar ist – auch wenn Gott sie auf unendlich vollkommenere Weise erfüllt. Für Alston ist religiöse Sprache realistisch: Sie will sagen, wie es sich wirklich verhält.`,
      sources: [
        { kind: 'fachliteratur', author: 'William P. Alston', work: 'Divine Nature and Human Language: Essays in Philosophical Theology', year: '1989', status: 'paraphrase', quote: 'Psychologische Prädikate lassen sich mit einem gemeinsamen Bedeutungskern von Gott und Menschen aussagen.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Lehrer der Analogie',
      text: `Thomas unterscheidet drei Arten, ein Wort zu gebrauchen: eindeutig (univok, wie „Hund" für Dackel und Pudel), mehrdeutig (äquivok, wie „Bank" für Sitzbank und Geldinstitut) und analog. Von Gott sprechen wir analog: Wenn wir sagen „Gott ist gut", meinen wir weder genau dasselbe wie bei Menschen noch etwas völlig anderes. Die Güte ist in Gott ursprünglich und vollkommen, in uns abgeleitet und begrenzt – so wie „gesund" ursprünglich vom Körper und abgeleitet von einer Speise gesagt wird. Analoge Rede ist genau, aber nicht erschöpfend.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.13 a.5', status: 'paraphrase', quote: 'Was von Gott und den Geschöpfen ausgesagt wird, wird weder rein univok noch rein äquivok, sondern analog ausgesagt.' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Mystiker und Theologe',
      text: `Gregor deutet Moses' Gang in das Dunkel am Sinai (Ex 20,21) als Bild der Gotteserkenntnis: Je weiter der Geist voranschreitet, desto klarer erkennt er, dass Gott alles Begreifen übersteigt. Die wahre Erkenntnis besteht darin, zu sehen, dass er unsichtbar ist. Für Gregor ist das kein Scheitern der Sprache, sondern ihr Ziel: Sie führt bis an die Schwelle eines Geheimnisses, das reicher ist als alle Begriffe. Ayers „Sinnlosigkeit" und Gregors „Unbegreiflichkeit" stehen sich daher diametral gegenüber: Die eine behauptet, es gebe nichts zu verstehen; die andere, es gebe mehr zu verstehen, als ein endlicher Geist je ausschöpfen kann.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', ref: 'II,162–164', status: 'paraphrase', quote: 'Moses tritt in das Dunkel ein, in dem Gott ist: Die wahre Schau besteht im Nicht-Sehen.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ayer-nicht-pruefbar',
      objection: `„‚Gott existiert' ist weder eine Tautologie noch durch Erfahrung überprüfbar. Also ist der Satz weder wahr noch falsch, sondern kognitiv sinnlos – wie ‚Das Nichts nichtet'."`,
      objectionBy: 'A. J. Ayer (Language, Truth and Logic, 1936) / Rudolf Carnap (1931)',
      targetsPremise: 1,
      answer: `Dann wende das Prinzip auf sich selbst an: „Nur analytische oder empirisch überprüfbare Sätze sind sinnvoll" – ist dieser Satz analytisch? Nein. Ist er empirisch überprüfbar? Welches Experiment sollte das zeigen? Also ist er nach seinem eigenen Maßstab sinnlos. Ein Kriterium, das an sich selbst scheitert, kann keine anderen Sätze aussortieren.`,
      questionsBack: [`Mit welcher Beobachtung hast du überprüft, dass nur beobachtbare Sätze sinnvoll sind?`],
      followUps: [
        {
          id: 'prinzip-als-definition',
          objection: `„Das Prinzip ist keine Tatsachenbehauptung, sondern eine Definition – ein Vorschlag, wie wir das Wort ‚sinnvoll' gebrauchen sollten. Definitionen müssen nicht verifizierbar sein."`,
          objectionBy: 'A. J. Ayer (Vorwort zur 2. Auflage, 1946)',
          answer: `Dann ist es eine Empfehlung, und ich kann sie ablehnen. Ein Vorschlag zum Sprachgebrauch kann nicht zeigen, dass Sätze über Gott tatsächlich nichts bedeuten – er legt es nur fest. Warum sollte ich eine Definition annehmen, die Sätze ausschließt, die Milliarden Menschen verstehen, und zugleich große Teile der Wissenschaft und Ethik? Ohne Begründung ist das kein Argument, sondern eine Setzung.`,
          followUps: [
            {
              id: 'schwache-verifikation',
              objection: `„Dann nimm die schwache Fassung: Ein Satz ist sinnvoll, wenn irgendeine Beobachtung für seine Wahrheit oder Wahrscheinlichkeit relevant ist. Für ‚Gott existiert' gilt das nicht."`,
              objectionBy: 'A. J. Ayer (schwaches Verifikationsprinzip) / Kai Nielsen',
              answer: `Doch, gerade dann gilt es. Dass es überhaupt ein Universum gibt, dass es einen Anfang hat, dass seine Konstanten lebensfreundlich abgestimmt sind, dass es Bewusstsein und Moral gibt, dass Jesus' Grab leer war – all das ist für die Wahrscheinlichkeit des Gottesglaubens relevant, wie Swinburne zeigt. Außerdem haben Logiker wie Alonzo Church schon 1949 gezeigt, dass Ayers verbesserte Fassung so weit ist, dass sie fast jeden beliebigen Satz zulässt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alonzo Church', work: 'Rezension zu Ayer, Language, Truth and Logic (2. Aufl.), Journal of Symbolic Logic 14', year: '1949', status: 'paraphrase', quote: 'Ayers revidiertes Kriterium lässt zu jedem beliebigen Satz entweder diesen oder seine Verneinung als sinnvoll zu.' },
                { kind: 'fachliteratur', author: 'Carl G. Hempel', work: '„Problems and Changes in the Empiricist Criterion of Meaning", Revue Internationale de Philosophie 4', year: '1950', status: 'paraphrase', quote: 'Alle Fassungen des empiristischen Sinnkriteriums sind entweder zu eng oder zu weit.', note: 'Hempel war selbst ein führender logischer Empirist.' },
              ],
              followUps: [
                {
                  id: 'transzendent-keine-folgen',
                  objection: `„Ein transzendenter Gott hat definitionsgemäß keine beobachtbaren Folgen. Jede Beobachtung ist mit ihm vereinbar – also ist keine relevant."`,
                  objectionBy: 'Kai Nielsen (sinngemäß)',
                  answer: `Transzendent heißt: nicht Teil der Welt – nicht: ohne Wirkung in der Welt. Ein Autor ist nicht Teil seines Romans, und doch verrät jede Seite etwas über ihn. Vereinbar-Sein heißt auch nicht Irrelevant-Sein: Eine fein abgestimmte Welt ist mit Zufall *vereinbar*, aber unter der Annahme eines Schöpfers viel wahrscheinlicher. Und das Christentum sagt sogar: Der Transzendente ist in die Welt eingetreten – „das Wort ward Fleisch … und wir sahen seine Herrlichkeit" (Joh 1,14).`,
                  questionsBack: [`Ist ein Autor bedeutungslos, nur weil man ihn nicht als Figur in seinem Roman findet?`],
                },
              ],
            },
          ],
        },
        {
          id: 'positivismus-tot-kern-bleibt',
          objection: `„Gut, der logische Positivismus als Schule ist tot. Aber sein Kern bleibt richtig: Aussagen ohne empirischen Gehalt sind müßig. Wissen gibt es nur durch Wissenschaft."`,
          objectionBy: 'Lawrence Krauss / Peter Atkins (sinngemäß)',
          answer: `Das ist Szientismus – und er hat dasselbe Problem: Der Satz „Wissen gibt es nur durch Wissenschaft" ist selbst keine wissenschaftliche Erkenntnis, sondern eine philosophische Behauptung. Außerdem wissen wir vieles ohne Experiment: dass 2 + 2 = 4, dass Grausamkeit um ihrer selbst willen falsch ist, dass andere Menschen ein Innenleben haben. Die Wissenschaft selbst ruht auf solchen nicht-empirischen Voraussetzungen – etwa dass die Natur geordnet und die Logik gültig ist.`,
          detail: `Siehe „Nur die Naturwissenschaft liefert echtes Wissen (Szientismus)".`,
          followUps: [
            {
              id: 'ayer-zugestaendnis-autoritaet',
              objection: `„Und dass Ayer später gesagt haben soll, fast alles in seinem Buch sei falsch, ist ein Autoritätsargument. Er kann sich auch geirrt haben, als er sich korrigierte."`,
              objectionBy: 'populärer Einwand',
              answer: `Einverstanden – das Zugeständnis ist kein Beweis. Der Beweis ist die Selbstwiderlegung des Prinzips, und die steht unabhängig von Ayer. Das Zugeständnis zeigt nur, dass sogar der bekannteste Vertreter des Positivismus die Probleme erkannte. Ayer sagte 1978 im Gespräch mit Bryan Magee, der wichtigste Mangel sei gewesen, dass „nahezu alles davon falsch" war – fügte aber hinzu, er halte den allgemeinen Ansatz weiter für richtig. Fair zitiert, ist das ein ehrliches, aber kein vernichtendes Zitat.`,
              sources: [
                { kind: 'gegner', author: 'A. J. Ayer im Gespräch mit Bryan Magee', work: 'Men of Ideas (BBC-Fernsehreihe und Buch)', year: '1978', ref: 'S. 131', quote: `Ich nehme an, der wichtigste Mangel war, dass nahezu alles davon falsch war.`, original: 'I suppose the most important of the defects was that nearly all of it was false.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Ayer fügte hinzu, er halte den allgemeinen Ansatz weiterhin für richtig. Die Druckfassung ist laut Sekundärliteratur leicht vereinfacht. Fair zitieren!' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'naturgesetze-im-prinzip-pruefbar',
      objection: `„Deine Gegenbeispiele ziehen nicht: Naturgesetze, Aussagen über die Vergangenheit oder über andere Menschen sind im Prinzip prüfbar. Gott dagegen nicht einmal im Prinzip."`,
      objectionBy: 'A. J. Ayer / Moritz Schlick (sinngemäß)',
      answer: `Ein allgemeines Naturgesetz („Alle Elektronen haben dieselbe Ladung") ist nie endgültig verifizierbar – das hat schon Popper gegen den Wiener Kreis eingewandt. Dass ein anderer Mensch Schmerz *empfindet*, kann ich nie direkt beobachten. Und über Gott ist sehr wohl „im Prinzip" etwas überprüfbar: John Hick hat gezeigt, dass der Glaube eschatologisch verifizierbar ist, und die Auferstehung ist sogar historisch prüfbar.`,
      followUps: [
        {
          id: 'spielzeug-im-schrank',
          objection: `„Swinburnes Beispiel mit den Spielsachen, die nachts tanzen, wenn niemand zusieht, ist eben auch sinnlos. Das zeigt gar nichts."`,
          objectionBy: 'Kai Nielsen (sinngemäß)',
          answer: `Aber du verstehst den Satz – sonst wüsstest du nicht, dass er unprüfbar ist. Ein Kind versteht ihn, ein Drehbuchautor kann einen Film darüber drehen, und wir wissen genau, wie die Welt wäre, wenn er wahr wäre. Genau das heißt „einen Sinn haben". Wer sagt, er verstehe den Satz nicht, verwechselt „Ich kann nicht prüfen, ob es so ist" mit „Ich weiß nicht, was gemeint ist".`,
          questionsBack: [`Wenn der Satz sinnlos wäre – woher wüsstest du dann, dass man ihn nicht überprüfen kann?`],
        },
      ],
    },
    {
      id: 'ignostizismus',
      objection: `„Ich sage gar nicht, dass es keinen Gott gibt. Ich sage: Das Wort ‚Gott' hat keinen klaren Inhalt. Bevor du mir nicht sagst, was du meinst, ist die Frage sinnlos – ich bin ‚Ignostiker'."`,
      objectionBy: 'Theologischer Nonkognitivismus („Ignostizismus")',
      answer: `Das ist eine faire Bitte, und sie lässt sich erfüllen: Mit „Gott" meine ich eine Person ohne Körper, die notwendig existiert, allmächtig, allwissend und vollkommen gut ist und alles andere erschaffen hat und erhält (so etwa Swinburne). Jedes dieser Wörter verstehst du. Ayer selbst war konsequent: Wenn „Gott existiert" sinnlos ist, dann auch „Es gibt keinen Gott" – du könntest also auch keine Argumente *gegen* Gott vorbringen.`,
      followUps: [
        {
          id: 'definition-widerspruechlich',
          objection: `„Deine Definition klingt verständlich, aber sie ist innerlich widersprüchlich: Allmacht, Allwissenheit, Zeitlosigkeit – das passt nicht zusammen."`,
          objectionBy: 'Michael Martin (The Impossibility of God, 2003)',
          answer: `Dann sind wir schon einen großen Schritt weiter: Ein widersprüchlicher Begriff ist nicht sinnlos, sondern *falsch* – du hast den Satz also verstanden. Und die Widerspruchsvorwürfe lassen sich einzeln prüfen: Allmacht heißt nicht, Unsinn tun zu können; Allwissenheit und Unveränderlichkeit lassen sich mit Boethius' Ewigkeitsbegriff vereinbaren; ein körperloser Geist ist ungewohnt, aber nicht widersprüchlich.`,
          detail: `Siehe den Themenblock „Gottes Eigenschaften", besonders „Kann Gott einen Stein erschaffen, den er nicht heben kann?" und „Allwissenheit und Unveränderlichkeit widersprechen sich".`,
        },
      ],
    },
    {
      id: 'analogie-leere-woerter',
      objection: `„Wenn ‚gut', ‚weise' und ‚liebend' bei Gott nicht dasselbe bedeuten wie bei Menschen, dann sind es leere Wörter. Schon Hume hat gefragt: Worin unterscheidet sich ein Mystiker, der Gott für völlig unbegreiflich hält, von einem Atheisten?"`,
      objectionBy: 'David Hume (Dialoge über natürliche Religion, Teil IV) / Antony Flew',
      answer: `Thomas von Aquin hat dafür die Lehre von der Analogie entwickelt: Wenn wir „Gott ist gut" sagen, meinen wir weder genau dasselbe wie bei Menschen (sonst wäre Gott ein großer Mensch) noch etwas völlig anderes (sonst wäre der Satz leer). Die Güte ist in Gott ursprünglich und vollkommen, in uns abgeleitet und begrenzt. Der Kern bleibt erkennbar: Gott will das Wohl seiner Geschöpfe – und das hat er in Christus gezeigt.`,
      sources: [
        { kind: 'gegner', author: 'David Hume', work: 'Dialoge über natürliche Religion (Dialogues concerning Natural Religion)', ref: 'Teil IV', year: '1779', status: 'paraphrase', quote: 'Cleanthes fragt, worin sich Mystiker, die die völlige Unbegreiflichkeit Gottes behaupten, von Skeptikern oder Atheisten unterscheiden.' },
      ],
      followUps: [
        {
          id: 'apophatik-gibt-ayer-recht',
          objection: `„Eure eigene orthodoxe Tradition sagt doch, Gott sei jenseits aller Begriffe – apophatische Theologie. Dann gebt ihr Ayer recht: Über Gott kann man nichts sagen."`,
          objectionBy: 'Kai Nielsen / religionswissenschaftlicher Einwand',
          answer: `Apophatik ist nicht Schweigen aus Leere, sondern aus Fülle. Die Väter verneinen an Gott alle Begrenzungen unserer Begriffe – nicht seine Wirklichkeit. Gregor von Nyssa sagt: Die wahre Erkenntnis besteht darin, zu sehen, dass Gott unsichtbar ist. Und dieselbe Tradition bekennt sehr bestimmte Sätze: Gott ist dreieinig, er hat erschaffen, der Logos ist Fleisch geworden, unter Pontius Pilatus gekreuzigt und auferstanden. Ayer sagt: Es gibt nichts zu verstehen. Die Väter sagen: Es gibt mehr, als wir je ausschöpfen können.`,
          followUps: [
            {
              id: 'geheimnis-ausrede',
              objection: `„‚Geheimnis' ist eine bequeme Ausrede, um nichts Bestimmtes sagen zu müssen. Sobald es schwierig wird, sagt ihr ‚Mysterium'."`,
              objectionBy: 'Richard Dawkins (sinngemäß)',
              answer: `Das Christentum sagt sehr Bestimmtes, das man prüfen und bestreiten kann: Jesus wurde unter Pontius Pilatus gekreuzigt, er ist am dritten Tag auferstanden, Gott hat die Welt aus dem Nichts erschaffen. Ein Geheimnis ist nicht etwas, worüber man nichts weiß, sondern etwas, das man nie ganz ausschöpft – wie die Quantenwirklichkeit, über die Physiker präzise Sätze formulieren, obwohl sie sich jeder anschaulichen Vorstellung entzieht.`,
              followUps: [
                {
                  id: 'wittgenstein-schweigen',
                  objection: `„Wittgenstein hat es auf den Punkt gebracht: ‚Wovon man nicht sprechen kann, darüber muss man schweigen.' Also schweigt doch über Gott."`,
                  objectionBy: 'Wiener Kreis (Lektüre des Tractatus)',
                  answer: `Wittgenstein war kein Positivist und ärgerte sich über diese Lektüre. Im selben Werk schreibt er: „Es gibt allerdings Unaussprechliches. Dies zeigt sich, es ist das Mystische." Für ihn war das Unsagbare gerade das Wichtigste, nicht das Unsinnige. Gegenüber seinem Freund Maurice Drury sagte er sinngemäß, er sei kein religiöser Mensch, könne aber nicht anders, als jedes Problem von einem religiösen Standpunkt aus zu sehen.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Ludwig Wittgenstein', work: 'Tractatus logico-philosophicus', ref: '6.522 und 7', year: '1921', quote: `Es gibt allerdings Unaussprechliches. Dies zeigt sich, es ist das Mystische. … Wovon man nicht sprechen kann, darüber muß man schweigen.`, status: 'verbatim' },
                    { kind: 'fachliteratur', author: 'M. O\'C. Drury', work: '„Conversations with Wittgenstein", in: R. Rhees (Hg.), Recollections of Wittgenstein', year: '1984', status: 'paraphrase', quote: 'Wittgenstein: Er sei kein religiöser Mensch, könne aber nicht umhin, jedes Problem von einem religiösen Standpunkt aus zu sehen.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ethik-auch-sinnlos',
      objection: `„Ayer war wenigstens konsequent: Auch moralische Sätze sind nur Gefühlsausdruck. ‚Folter ist falsch' heißt ‚Folter – pfui!'. Warum sollte ich das für ein Problem halten?"`,
      objectionBy: 'A. J. Ayer (Emotivismus, LTL Kap. 6)',
      answer: `Weil es offenkundig falsch ist. Wenn „Der Holocaust war ein Verbrechen" nur „Holocaust – pfui!" bedeutet, dann haben die Richter in Nürnberg nur ihre Gefühle geäußert, und wer anders fühlte, hatte nicht unrecht. Kaum ein Philosoph vertritt den Emotivismus heute noch in dieser Form. Dass das Verifikationsprinzip zu diesem Ergebnis führt, ist eine Widerlegung durch Absurdität.`,
      detail: `Siehe den Themenblock „Moral und Gott".`,
      followUps: [
        {
          id: 'kugel-beissen',
          objection: `„Ein konsequenter Positivist kann in diesen sauren Apfel beißen. Moral ist eben Gefühl und Konvention."`,
          objectionBy: 'Alex Rosenberg (The Atheist\'s Guide to Reality, 2011, sinngemäß)',
          answer: `Er kann – aber dann kann er auch nicht mehr sagen, Religion sei schädlich, unmoralisch oder unterdrückend, und er kann sich nicht für Menschenrechte einsetzen, außer als Ausdruck seines Geschmacks. Der Preis zeigt, dass mit der Theorie etwas nicht stimmt. Und es ist bezeichnend, dass gerade die Theorie, die Gott für sinnlos erklärt, auch das Gute für sinnlos erklären muss.`,
          questionsBack: [`Wenn „Folter ist falsch" nur dein Gefühl ausdrückt – hätte ein Folterer, der anders fühlt, dann unrecht?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Satz „Nur empirisch überprüfbare Sätze sind sinnvoll" selbst empirisch überprüfbar?`,
    `Wenn „Gott existiert" sinnlos ist – ist dann „Gott existiert nicht" auch sinnlos? Bist du dann noch Atheist?`,
    `Verstehst du den Satz „Gott hat das Universum erschaffen"? Wenn ja – wie kann er dann sinnlos sein?`,
    `Ist „Folter um ihrer selbst willen ist falsch" für dich nur Gefühlsausdruck?`,
  ],
  avoid: [
    `„Gott ist so groß, dass man gar nichts über ihn sagen kann." – Das klingt fromm, gibt aber Ayer recht. Sag, *was* man sagen kann und wo die Grenze liegt.`,
    `Ayers Zitat „nahezu alles falsch" ohne seinen Nachsatz (er hielt den Ansatz weiter für richtig) bringen – das wäre unfair und angreifbar.`,
    `Den Positivismus als „Atheistenverschwörung" darstellen. Er war eine ernsthafte philosophische Bewegung, deren Scheitern selbst lehrreich ist.`,
  ],
  concessions: [
    `Die Frage, wie menschliche Wörter auf Gott anwendbar sind, ist ernst; die Lehre von der Analogie ist eine anspruchsvolle Antwort, keine einfache.`,
    `Manche religiöse Rede ist tatsächlich vage oder rein gefühlsbetont; die Kritik der Positivisten hat zu mehr begrifflicher Klarheit in der Theologie beigetragen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'A. J. Ayer', work: 'Language, Truth and Logic', year: '1936', ref: 'Kap. 1 und 6', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', year: '2. Aufl. 2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William P. Alston', work: 'Divine Nature and Human Language', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Verifikationsprinzip', 'Ayer', 'Wiener Kreis', 'religiöse Sprache', 'Analogie', 'Apophatik'],
  related: [
    'religioese-sprache/gaertner-parabel',
    'religioese-sprache/glaube-als-sprachspiel',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'gottes-eigenschaften/stein-paradox',
    'moral-und-gott',
  ],
};

export default claim;
