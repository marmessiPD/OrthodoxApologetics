import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kontingenz-trugschluss',
  title: `„Das Kontingenzargument ist ein Trugschluss – das Universum ist einfach da."`,
  proponents: [
    { name: 'Bertrand Russell', role: 'Philosoph und Logiker', work: 'BBC-Rundfunkdebatte mit Frederick Copleston (1948)' },
    { name: 'David Hume', role: 'Philosoph der schottischen Aufklärung', work: 'Dialogues Concerning Natural Religion (1779), Teil IX' },
    { name: 'Immanuel Kant', role: 'Philosoph', work: 'Kritik der reinen Vernunft (1781/1787), „Von der Unmöglichkeit eines kosmologischen Beweises"' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006), Kap. 3' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016) – das Universum als „brute fact"' },
  ],
  steelman: `Das Kontingenzargument steht und fällt mit dem Satz vom zureichenden Grund – der Behauptung, dass alles eine Erklärung haben muss. Aber warum sollte die Wirklichkeit unserem Erklärungsbedürfnis folgen? Jede Erklärungskette endet irgendwo; der Naturalist endet beim Universum oder seinen Grundgesetzen, der Theist bei Gott – beide akzeptieren am Ende einen Brute Fact. Hume hat gezeigt: Wenn ich die Ursache jedes einzelnen von zwanzig Teilchen angebe, ist es unvernünftig, danach noch nach der Ursache „der zwanzig" zu fragen. Und was soll ein „notwendiges Wesen" sein? Alles, was wir als existierend denken können, können wir auch als nichtexistierend denken. Schlimmer noch: Der starke Satz vom zureichenden Grund führt zum „Modalkollaps" – wenn alles einen zureichenden Grund hat, ist alles notwendig, auch dass du heute Kaffee getrunken hast. Und die Quantenmechanik kennt ohnehin Ereignisse ohne zureichenden Grund. Russell hat recht: Das Universum ist einfach da, und das ist alles.`,
  biblical: {
    summary: `Die Bibel beschreibt die ganze Schöpfung als abhängig: Gott „trägt alle Dinge mit seinem kräftigen Wort" (Hebr 1,3), in Christus „besteht alles" (Kol 1,17), „von ihm und durch ihn und zu ihm sind alle Dinge" (Röm 11,36), und durch seinen Willen „haben sie das Wesen" (Offb 4,11). Gott dagegen ist der, der nichts bedarf (Apg 17,25) und der *ist* (Ex 3,14). Das ist genau die Unterscheidung des Kontingenzarguments: abhängiges Sein gegenüber dem Sein, das aus sich selbst ist.`,
    detail: `- **Hebr 1,3:** *pherōn te ta panta* – „tragend das All": nicht nur ein einmaliger Anstoß am Anfang, sondern ein fortwährendes Im-Sein-Halten. Darum funktioniert das Kontingenzargument auch dann, wenn das Universum keinen zeitlichen Anfang hätte.
- **Kol 1,17:** *ta panta en autō synestēken* – „das All hat in ihm Bestand".
- **Offb 4,11:** Die Ältesten begründen ihre Anbetung damit, dass alles „durch deinen Willen" ist – ein Hinweis darauf, dass die Welt nicht notwendig, sondern gewollt ist.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '1,3', quote: `welcher, sintemal er ist der Glanz seiner Herrlichkeit und das Ebenbild seines Wesens und trägt alle Dinge mit seinem kräftigen Wort …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '11,36', quote: `Denn von ihm und durch ihn und zu ihm sind alle Dinge. Ihm sei Ehre in Ewigkeit! Amen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '4,11', quote: `Herr, du bist würdig, zu nehmen Preis und Ehre und Kraft; denn du hast alle Dinge geschaffen, und durch deinen Willen haben sie das Wesen und sind geschaffen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,17', quote: `Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter unterscheiden konsequent das Geschaffene, das veränderlich ist und sein Sein empfängt, vom Ungeschaffenen, das unveränderlich ist und aus sich selbst ist. Johannes von Damaskus formuliert daraus einen Gottesbeweis: Alles Seiende ist entweder geschaffen oder ungeschaffen; was veränderlich ist, ist geschaffen; die ganze sichtbare Welt ist veränderlich; also muss es einen unveränderlichen, ungeschaffenen Schöpfer geben. Athanasius lehrt, dass die Geschöpfe von Natur aus „fließend" sind und ins Nichts zurücksinken würden, wenn der Logos sie nicht hielte.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,3', status: 'paraphrase', quote: 'Alles Seiende ist geschaffen oder ungeschaffen; das Veränderliche ist geschaffen; die Welt ist veränderlich; also gibt es einen ungeschaffenen, unveränderlichen Schöpfer.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '41', status: 'paraphrase', quote: 'Die geschaffene Natur ist aus dem Nichts und von sich aus vergänglich; der Logos hält sie im Sein.' },
    ],
  },
  opposingView: {
    summary: `Das Kontingenzargument hat in der analytischen Religionsphilosophie seit den 1990er-Jahren eine Renaissance erlebt (Koons 1997, Pruss 2006, Pruss & Rasmussen 2018). Die Hauptstreitpunkte sind: (1) die Gültigkeit und Reichweite des Satzes vom zureichenden Grund; (2) der „Modalkollaps"-Einwand (u. a. Peter van Inwagen); (3) Humes Einwand gegen die Erklärung von Gesamtheiten; (4) die Kohärenz eines notwendigen Wesens. Moderne Verteidiger verwenden meist abgeschwächte Fassungen des Prinzips, die nur für die *Existenz* kontingenter Dinge gelten und keinen Modalkollaps erzeugen.`,
    sources: [
      { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'The Principle of Sufficient Reason: A Reassessment', year: '2006', status: 'paraphrase', quote: 'Umfassende Verteidigung des Satzes vom zureichenden Grund gegen die klassischen und modernen Einwände.' },
      { kind: 'fachliteratur', author: 'Alexander R. Pruss & Joshua Rasmussen', work: 'Necessary Existence', year: '2018', status: 'paraphrase', quote: 'Mehrere voneinander unabhängige Argumente für ein notwendig existierendes konkretes Wesen.' },
      { kind: 'gegner', author: 'Peter van Inwagen', work: 'Metaphysics', year: '1993', status: 'paraphrase', quote: 'Der starke Satz vom zureichenden Grund führt dazu, dass alle Wahrheiten notwendig wären (Modalkollaps).', note: 'Van Inwagen ist selbst Christ, hält diese Fassung des Prinzips aber für falsch.' },
    ],
  },
  quickAnswer: `Das Argument lautet: Alles, was existiert, hat eine Erklärung seiner Existenz – entweder in der Notwendigkeit seiner eigenen Natur oder in einer Ursache außerhalb. Das Universum existiert nicht notwendig: Es hätte anders sein oder gar nicht existieren können. Also liegt seine Erklärung außerhalb – in einem notwendigen Wesen, das wir Gott nennen. „Das Universum ist einfach da" ist kein Gegenargument, sondern ein Verzicht auf Erklärung. Wenn du im Wald eine leuchtende Kugel findest, würdest du nicht sagen: „Die ist einfach da." Warum soll es beim ganzen Universum anders sein – nur weil es größer ist?`,
  keyPoints: [
    `**Kontingent heißt:** Es könnte auch nicht sein oder anders sein. Sterne, Planeten, Teilchen, Naturkonstanten – alles im Universum ist kontingent. Das Argument funktioniert auch, wenn das Universum ewig wäre.`,
    `**Die Kugel im Wald (Richard Taylor):** Niemand akzeptiert, dass ein Ding „einfach da" ist. Die Größe ändert daran nichts – ein universumgroßes Ding braucht ebenso eine Erklärung.`,
    `**Ein notwendiges Wesen ist kein Brute Fact,** sondern existiert aus der Notwendigkeit seiner Natur. Zahlen und logische Wahrheiten zeigen, dass der Begriff notwendiger Existenz nicht leer ist.`,
    `**Wer das Prinzip aufgibt, sägt am eigenen Ast:** Wenn Dinge ohne jeden Grund existieren oder geschehen können, gibt es keinen Grund, unseren Wahrnehmungen und Schlüssen zu trauen – auch der Wissenschaft nicht.`,
    `**Die Gesamtheit braucht eine Erklärung:** Dass jedes Glied einer Kette am vorigen hängt, erklärt nicht, warum es die Kette gibt. Eine Bibliothek, in der jedes Buch von einem anderen abgeschrieben ist, erklärt nicht, woher der Text kommt.`,
  ],
  argument: {
    name: 'Das Kontingenzargument (nach Leibniz)',
    summary: 'Die Gesamtheit aller kontingenten Dinge verlangt eine Erklärung, die selbst nicht kontingent ist.',
    premises: [
      {
        text: 'P1: Jedes kontingente Ding (und jede Gesamtheit kontingenter Dinge) hat eine Erklärung seiner Existenz.',
        support: `Dies ist eine bescheidene Fassung des Satzes vom zureichenden Grund: Sie betrifft nur die *Existenz* kontingenter Dinge, nicht jede Wahrheit. Wir setzen sie überall voraus – in Alltag, Wissenschaft und Gericht. Wer sie leugnet, muss erklären, warum Dinge nicht ständig grundlos auftauchen, und verliert den Grund, seinen eigenen Wahrnehmungen zu trauen.`,
        sources: [
          { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Monadologie', ref: '§ 32', year: '1714', quote: `… dass keine Tatsache wahr oder existierend und keine Aussage wahrhaftig sein kann, ohne dass es einen zureichenden Grund gibt, warum es so und nicht anders ist – wenngleich uns diese Gründe meistens nicht bekannt sein können.`, original: `… aucun fait ne saurait se trouver vrai, ou existant, aucune énonciation véritable, sans qu'il y ait une raison suffisante pourquoi il en soit ainsi et non pas autrement, quoique ces raisons le plus souvent ne puissent point nous être connues.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: 'P2: Das Universum – die Gesamtheit aller kontingenten Dinge – ist selbst kontingent.',
        support: `Eine Gesamtheit, die nur aus kontingenten Teilen besteht, könnte nicht existieren, wenn keines ihrer Teile existierte – und jedes könnte fehlen. Zudem hätten die Naturkonstanten und Anfangsbedingungen anders sein können; Physiker behandeln sie als freie Parameter.`,
      },
      {
        text: 'P3: Die Erklärung der Gesamtheit aller kontingenten Dinge kann nicht selbst kontingent sein.',
        support: `Wäre sie kontingent, gehörte sie selbst zu der Gesamtheit, die erklärt werden soll – und erklärte sich damit zirkulär selbst. Also muss sie außerhalb der Gesamtheit liegen und notwendig sein.`,
      },
    ],
    conclusion: 'Also existiert ein notwendiges Wesen, das die Existenz des Universums erklärt. Weitere Analyse zeigt, dass es eines, unveränderlich, immateriell, allmächtig und personal sein muss.',
  },
  voices: [
    {
      person: 'leibniz',
      role: 'als Philosoph und Mathematiker',
      text: `Leibniz stellte die Grundfrage der Metaphysik: Warum gibt es überhaupt etwas und nicht vielmehr nichts? Da „nichts" einfacher und leichter sei als „etwas", verlange die Existenz der Welt einen Grund. Diesen Grund könne man nicht in der Kette der Dinge selbst finden, auch wenn sie unendlich wäre: Jedes Glied ist kontingent, und eine unendliche Reihe kontingenter Glieder bleibt kontingent. Der zureichende Grund müsse daher außerhalb der Reihe liegen – in einer notwendigen Substanz, die den Grund ihrer Existenz in sich trägt. „Und das nennen wir Gott."`,
      sources: [
        { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Die Vernunftprinzipien der Natur und der Gnade', ref: '§ 7–8', year: '1714', quote: `Warum gibt es eher etwas als nichts? Denn das Nichts ist einfacher und leichter als etwas.`, original: `pourquoi il y a plutôt quelque chose que rien? Car le rien est plus simple et plus facile que quelque chose.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Monadologie', ref: '§ 36–38', year: '1714', status: 'paraphrase', quote: 'Der letzte Grund der Dinge muss in einer notwendigen Substanz liegen; diese nennen wir Gott.' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Systematiker der östlichen Väter',
      text: `Johannes von Damaskus fasst im 8. Jahrhundert die Lehre der Väter zusammen und formuliert einen knappen Beweis aus der Veränderlichkeit: Alles, was ist, ist entweder geschaffen oder ungeschaffen. Was geschaffen ist, ist veränderlich, denn was mit einer Veränderung (aus dem Nichts ins Sein) begann, unterliegt auch weiterer Veränderung. Die ganze sinnlich wahrnehmbare Welt und sogar die Engel verändern sich. Also muss es einen Schöpfer geben, der selbst ungeschaffen und unveränderlich ist. Dazu tritt bei ihm der Hinweis auf die Ordnung und den Zusammenhalt der Welt, die einen lenkenden Geist verlangen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,3', status: 'paraphrase', quote: 'Beweis aus der Veränderlichkeit und aus der Ordnung der Welt.' },
      ],
    },
    {
      person: 'alexander-pruss',
      role: 'als Verteidiger des Satzes vom zureichenden Grund',
      text: `Pruss hat die gründlichste moderne Verteidigung des Satzes vom zureichenden Grund vorgelegt. Eines seiner Argumente: Ohne dieses Prinzip könnten wir nicht wissen, dass unsere Wahrnehmungen durch die wahrgenommenen Dinge verursacht sind – sie könnten genauso gut grundlos entstehen. Den Einwand des Modalkollapses beantwortet er mit dem Hinweis, dass eine Erklärung nicht zwingend sein muss: Eine freie Entscheidung aus guten Gründen erklärt eine Handlung, ohne sie notwendig zu machen. Das notwendige Wesen erklärt die Welt also durch eine freie Wahl, nicht durch logische Notwendigkeit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'The Principle of Sufficient Reason: A Reassessment', year: '2006', status: 'paraphrase', quote: 'Verteidigung des PSR; erkenntnistheoretisches Argument; Antwort auf den Modalkollaps durch nicht-zwingende Erklärungen.' },
        { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: '„The Leibnizian Cosmological Argument", in: The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase', quote: 'Moderne Fassung des Kontingenzarguments mit Antwort auf Hume, Kant und van Inwagen.' },
      ],
    },
    {
      person: 'joshua-rasmussen',
      role: 'als Religionsphilosoph',
      text: `Rasmussen entwickelt Fassungen des Kontingenzarguments, die ohne den starken Satz vom zureichenden Grund auskommen. Er geht von einem bescheidenen Prinzip aus: Für Dinge einer Art, deren Existenz eine Erklärung haben *kann*, ist es vernünftig, eine zu erwarten. Dann zeigt er, dass die Gesamtheit aller abhängigen Dinge nicht durch etwas Abhängiges erklärt werden kann – also muss es ein unabhängiges Fundament der Wirklichkeit geben. In einem zweiten Schritt argumentiert er, dass dieses Fundament unbegrenzt, vollkommen und geistig sein muss.`,
      sources: [
        { kind: 'fachliteratur', author: 'Joshua Rasmussen', work: 'How Reason Can Lead to God', year: '2019', status: 'paraphrase', quote: 'Allgemeinverständlicher Weg vom Prinzip der Erklärbarkeit zu einem notwendigen, vollkommenen Fundament.' },
      ],
    },
    {
      person: 'feser',
      role: 'als Metaphysiker',
      text: `In „Five Proofs" verteidigt Feser einen „rationalistischen" Beweis, der vom Satz vom zureichenden Grund ausgeht, und argumentiert, dass niemand dieses Prinzip konsequent leugnen kann: Wer behauptet, etwas sei ohne Grund, nimmt für diese Behauptung selbst Gründe in Anspruch. Er unterscheidet zudem klar zwischen der Frage, warum das Universum einen *Anfang* hat, und der tieferen Frage, warum es *jetzt* existiert. Selbst ein ewiges Universum müsste in jedem Augenblick im Sein gehalten werden – darum ist das Argument von der Kosmologie unabhängig.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 5 (Der rationalistische Beweis)', status: 'paraphrase', quote: 'Verteidigung des PSR und Ableitung eines notwendigen Wesens; Unabhängigkeit vom zeitlichen Anfang.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'universum-einfach-da',
      objection: `„Das Universum ist einfach da, und das ist alles. Es braucht keine Erklärung."`,
      objectionBy: 'Bertrand Russell (1948) / Sean Carroll',
      targetsPremise: 1,
      answer: `Stell dir vor, du findest im Wald eine leuchtende, durchscheinende Kugel. Niemand würde sagen: „Die ist einfach da, ohne jeden Grund." Wenn die Kugel so groß wäre wie ein Auto, ein Planet oder das Universum – würde sie dadurch weniger erklärungsbedürftig? Die Größe ändert nichts. Russells Satz ist ehrlich, aber er ist kein Argument, sondern der Verzicht darauf, an der wichtigsten Stelle eine Erklärung zu suchen.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: 'BBC-Rundfunkdebatte mit F. C. Copleston', year: '1948', quote: `I should say that the universe is just there, and that's all.`, status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Richard Taylor', work: 'Metaphysics', year: '1963', status: 'paraphrase', quote: 'Das Gedankenexperiment der Kugel im Wald: Niemand hält ein Ding für grundlos existierend; die Größe des Dings ändert daran nichts.' },
      ],
      followUps: [
        {
          id: 'gott-auch-brute-fact-kontingenz',
          objection: `„Irgendwo muss jede Erklärung enden. Du endest bei Gott, ich beim Universum. Auch dein Gott ist ein Brute Fact."`,
          objectionBy: 'Graham Oppy',
          targetsPremise: 3,
          answer: `Es gibt einen Unterschied zwischen etwas, das *keine* Erklärung hat, und etwas, das seine Erklärung *in sich selbst* trägt. Ein notwendiges Wesen existiert, weil es gar nicht nicht existieren kann – wie die Wahrheit, dass 2 + 2 = 4 ist, nicht von irgendetwas anderem abhängt. Das Universum dagegen hätte nicht existieren oder anders sein können. Gott ist also nicht ein Brute Fact, sondern der Punkt, an dem das Fragen „Warum?" eine Antwort findet.`,
          followUps: [
            {
              id: 'notwendiges-wesen-leer',
              objection: `„Der Begriff eines notwendigen Wesens ist leer. Alles, was wir als existierend denken, können wir auch als nichtexistierend denken. Also gibt es kein Wesen, dessen Nichtexistenz einen Widerspruch einschließt."`,
              objectionBy: 'David Hume (Dialogues IX)',
              targetsPremise: 3,
              answer: `Dass wir uns etwas als nichtexistierend *vorstellen* können, zeigt nicht, dass es nicht notwendig existiert. Man konnte sich lange vorstellen, dass Wasser nicht H₂O ist – trotzdem ist es das notwendigerweise. Viele Philosophen halten Zahlen oder logische Wahrheiten für notwendig existierend; der Begriff ist also nicht leer. Und Humes Grundsatz selbst ist weder bewiesen noch selbstevident.`,
              sources: [
                { kind: 'gegner', author: 'David Hume', work: 'Dialogues Concerning Natural Religion', year: '1779', ref: 'Teil IX', quote: `Whatever we conceive as existent, we can also conceive as non-existent. There is no being, therefore, whose non-existence implies a contradiction.`, status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'universum-als-notwendiges-wesen',
                  objection: `„Gut, dann ist eben das Universum oder die Materie-Energie selbst das notwendige Wesen."`,
                  objectionBy: 'Graham Oppy',
                  targetsPremise: 2,
                  answer: `Ein notwendiges Wesen könnte nicht anders sein, als es ist. Das Universum aber hat lauter Eigenschaften, die anders sein könnten: seine Naturkonstanten, seine Anfangsbedingungen, die Anordnung seiner Teilchen. Es verändert sich ständig, und seine Teile entstehen und vergehen. Was sich verändert und anders sein könnte, ist gerade das Kennzeichen des Kontingenten. Ein notwendiges Wesen müsste unveränderlich und nicht zusammengesetzt sein – das beschreibt Gott, nicht den Kosmos.`,
                  questionsBack: [`Hätten die Naturkonstanten andere Werte haben können? Wenn ja – wie kann das Universum dann notwendig sein?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hume-zwanzig-teilchen',
      objection: `„Wenn ich die Ursache jedes einzelnen von zwanzig Teilchen angebe, ist es unvernünftig, noch nach der Ursache ‚der zwanzig' zu fragen. Wenn jedes Glied erklärt ist, ist das Ganze erklärt."`,
      objectionBy: 'David Hume (Dialogues IX) / Graham Oppy',
      targetsPremise: 1,
      answer: `Humes Teilchen haben Ursachen *außerhalb* der Gruppe – dann ist das Ganze tatsächlich erklärt. Beim Universum gibt es aber nichts außerhalb, wenn der Naturalismus stimmt. Stell dir eine unendliche Reihe von Büchern vor, von denen jedes vom vorigen abgeschrieben ist: Dass jedes eine Vorlage hat, erklärt nicht, warum es überhaupt diesen Text gibt. Die Gesamtheit aller kontingenten Tatsachen ist selbst eine kontingente Tatsache – und die braucht eine Erklärung.`,
      sources: [
        { kind: 'gegner', author: 'David Hume', work: 'Dialogues Concerning Natural Religion', year: '1779', ref: 'Teil IX', quote: `Did I show you the particular causes of each individual in a collection of twenty particles of matter, I should think it very unreasonable, should you afterwards ask me, what was the cause of the whole twenty.`, status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'modalkollaps',
          objection: `„Die Gesamtheit aller kontingenten Tatsachen kann gar nicht erklärt werden. Entweder ist die Erklärung selbst kontingent – dann gehört sie dazu. Oder sie ist notwendig – dann folgt die Gesamtheit notwendig aus ihr, und alles ist notwendig. Das ist der Modalkollaps."`,
          objectionBy: 'Peter van Inwagen (Einwand) / Graham Oppy',
          targetsPremise: 1,
          answer: `Der Einwand setzt voraus, dass jede Erklärung ihr Ergebnis *logisch erzwingen* muss. Das stimmt nicht: Wenn ich erkläre, warum du heute Wasser getrunken hast – du hattest Durst und hast dich frei dafür entschieden –, ist das eine echte Erklärung, obwohl du dich auch anders hättest entscheiden können. Ebenso erklärt Gottes freie Entscheidung, aus Güte zu erschaffen, die Existenz der Welt, ohne sie notwendig zu machen.`,
          followUps: [
            {
              id: 'freie-wahl-keine-erklaerung',
              objection: `„Eine Erklärung, die das Ergebnis nicht festlegt, ist keine vollständige Erklärung. Dann ist Gottes Wahl selbst ein verkappter Brute Fact."`,
              objectionBy: 'Graham Oppy',
              answer: `Sie ist keine Erklärung im Sinn eines Uhrwerks, wohl aber im Sinn von Gründen und Absichten – und so erklären wir jede menschliche Handlung. Wenn ich frage, warum jemand ein Krankenhaus gebaut hat, und die Antwort lautet „aus Mitleid mit den Kranken", ist die Frage beantwortet, auch wenn er sich anders hätte entscheiden können. Eine personale Erklärung durch Gründe ist eine echte Erklärung – und unendlich viel mehr als „einfach so".`,
            },
          ],
        },
      ],
    },
    {
      id: 'psr-quanten-widerlegt',
      objection: `„Der Satz vom zureichenden Grund ist durch die Quantenmechanik widerlegt. Es gibt Ereignisse, für die es keinen zureichenden Grund gibt, warum sie so und nicht anders eintreten."`,
      objectionBy: 'Sean Carroll / Graham Oppy',
      targetsPremise: 1,
      answer: `Das Argument braucht keinen starken Determinismus, sondern nur, dass die *Existenz* kontingenter Dinge eine Erklärung hat. Quantenereignisse geschehen in einem physikalischen Zusammenhang – Teilchen, Felder, Gesetze – der sie ermöglicht und ihre Wahrscheinlichkeit festlegt. Ob jede Quantenfluktuation einen deterministischen Grund hat, ist eine andere Frage als die, warum es überhaupt Teilchen, Felder und Gesetze gibt. Zudem ist die indeterministische Deutung nicht die einzige.`,
      followUps: [
        {
          id: 'argument-aus-konsequenzen',
          objection: `„Du sagst, ohne das Prinzip würde die Wissenschaft zusammenbrechen. Das ist ein Argument aus den Konsequenzen – nur weil dir etwas nicht gefällt, ist es nicht falsch."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Es geht nicht um Gefallen, sondern um Selbstwiderlegung. Wenn Dinge ohne jeden Grund existieren oder geschehen könnten, dann könnten auch deine Wahrnehmungen und Gedanken ohne Bezug zur Wirklichkeit entstehen – und du hättest keinen Grund, ihnen zu trauen, auch nicht deinem Argument gegen das Prinzip. Wer den Satz vom zureichenden Grund bestreitet, nimmt ihn in Anspruch, sobald er Gründe für seine Bestreitung anführt.`,
          questionsBack: [`Hast du Gründe dafür, dass es Dinge ohne Gründe gibt?`],
        },
      ],
    },
    {
      id: 'warum-gott-statt-zahl',
      objection: `„Selbst wenn es ein notwendiges Wesen gibt – warum Gott? Warum nicht eine Zahl, ein Naturgesetz oder irgendein unbekanntes notwendiges Etwas?"`,
      objectionBy: 'Graham Oppy',
      answer: `Weil das notwendige Wesen die *Existenz konkreter Dinge* erklären muss. Zahlen und abstrakte Gegenstände bewirken nichts – die Zahl 7 hat noch nie etwas hervorgebracht. Naturgesetze beschreiben, wie sich existierende Dinge verhalten. Und damit die Welt nicht selbst notwendig wird, muss das notwendige Wesen sie frei hervorbringen – also wählen können. Ein notwendiges, schöpferisches Wesen, das frei wählt, ist das, was wir einen personalen Gott nennen.`,
      detail: `Siehe „Gottesbeweise beweisen höchstens einen Deisten-Gott" für die weitere Ableitung (Einheit, Allmacht, Allwissenheit, Güte).`,
    },
  ],
  questionsToAsk: [
    `Warum gibt es überhaupt etwas und nicht vielmehr nichts – hast du darauf eine Antwort?`,
    `Würdest du akzeptieren, dass ein beliebiges anderes Ding „einfach da" ist, ohne jeden Grund?`,
    `Hätten die Naturkonstanten anders sein können? Wenn ja, ist das Universum dann notwendig?`,
    `Wenn Dinge ohne Grund existieren können – warum vertraust du dann deinen Wahrnehmungen?`,
  ],
  avoid: [
    `Das Kontingenzargument mit dem Kalam-Argument verwechseln. Es braucht keinen zeitlichen Anfang – es funktioniert auch bei einem ewigen Universum.`,
    `„Alles hat eine Ursache" sagen – richtig ist: „Alles Kontingente hat eine Erklärung."`,
    `Den Modalkollaps-Einwand ignorieren, wenn das Gegenüber ihn kennt. Er ist ernst und hat eine gute Antwort (freie Wahl).`,
  ],
  concessions: [
    `Der Satz vom zureichenden Grund lässt sich nicht im strengen Sinn beweisen; er ist ein Grundprinzip, das man plausibel machen, aber nicht erzwingen kann.`,
    `Die starke Fassung des Prinzips (jede Wahrheit hat einen zwingenden Grund) führt tatsächlich in Schwierigkeiten; moderne Verteidiger verwenden schwächere Fassungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'The Principle of Sufficient Reason: A Reassessment', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Joshua Rasmussen', work: 'How Reason Can Lead to God', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander R. Pruss & Joshua Rasmussen', work: 'Necessary Existence', year: '2018', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Kontingenz', 'Leibniz', 'Satz vom zureichenden Grund', 'Notwendiges Wesen', 'Russell-Copleston'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/hoechstens-deismus',
    'atheismus/wer-schuf-gott',
    'physik/naturgesetze-erklaeren-sich-selbst',
    'physik/quanten-ohne-ursache',
    'feinabstimmung/multiversum',
  ],
};

export default claim;
