import type { Claim, Source } from '../../../schema.ts';

const crickOrgel1973: Source = {
  kind: 'gegner',
  author: 'Francis H. C. Crick, Leslie E. Orgel',
  work: '„Directed Panspermia", Icarus 19, S. 341–346',
  year: '1973',
  quote: `Die Autoren erwägen, dass Mikroorganismen absichtlich von einer außerirdischen Zivilisation per Raumfahrzeug auf die Erde gebracht worden sein könnten, und nennen u. a. die Universalität des genetischen Codes als Indiz.`,
  status: 'paraphrase',
  note: 'Crick und Orgel bezeichneten die Idee selbst als spekulativ.',
};

const crick1981: Source = {
  kind: 'gegner',
  author: 'Francis Crick',
  work: 'Life Itself: Its Origin and Nature (New York: Simon & Schuster)',
  ref: 'S. 88',
  year: '1981',
  quote: `Ein ehrlicher Mensch, ausgestattet mit allem Wissen, das uns heute zur Verfügung steht, könnte nur feststellen, dass der Ursprung des Lebens in gewissem Sinne im Augenblick fast wie ein Wunder erscheint, so viele sind die Bedingungen, die erfüllt gewesen sein müssten, um ihn in Gang zu setzen.`,
  original: 'An honest man, armed with all the knowledge available to us now, could only state that in some sense, the origin of life appears at the moment to be almost a miracle, so many are the conditions which would have had to have been satisfied to get it going.',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Wortlaut und Seite (S. 88 der US-Ausgabe 1981) nach der Zitatdatenbank todayinsci.com, die den Satz vollständig mit Fundstelle wiedergibt; kürzere Fassungen in der Sekundärliteratur („seems almost to be a miracle") sind ungenau. Crick fährt fort, man könne den genauen Hergang mangels experimenteller Daten aus jener Zeit nicht kennen. Crick war Atheist und meinte kein echtes Wunder – fair zitieren!',
};

const kelvin1871: Source = {
  kind: 'wissenschaft',
  author: 'William Thomson (Lord Kelvin)',
  work: 'Präsidentenrede vor der British Association for the Advancement of Science, Edinburgh',
  year: '1871',
  quote: `Kelvin hielt es für möglich, dass Keime auf Meteoriten zur Erde gelangten, betonte aber zugleich, tote Materie werde nach allem, was die Wissenschaft lehre, nicht ohne den Einfluss bereits lebender Materie lebendig.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'panspermie',
  title: `„Das Leben kam aus dem All (Panspermie)."`,
  proponents: [
    { name: 'Francis Crick und Leslie Orgel', role: 'Molekularbiologe (Nobelpreis 1962) und präbiotischer Chemiker', work: '„Directed Panspermia", Icarus 19 (1973); Crick, Life Itself (1981)' },
    { name: 'Fred Hoyle und Chandra Wickramasinghe', role: 'Astrophysiker', work: 'Evolution from Space (1981)' },
    { name: 'Svante Arrhenius', role: 'Chemiker, Nobelpreis 1903', work: 'Das Werden der Welten (1907)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'Interview in der Dokumentation „Expelled" (2008): Erwägung einer außerirdischen Aussaat' },
  ],
  steelman: `Der Weltraum ist voller organischer Chemie: Der Murchison-Meteorit enthält Dutzende Aminosäuren und Nukleobasen, in Meteoriten wurde auch Ribose nachgewiesen, und Proben der Asteroiden Ryugu und Bennu brachten weitere Bausteine zur Erde. Bakteriensporen überstehen erstaunlich lange Vakuum und Strahlung; Gesteinsbrocken werden durch Einschläge zwischen Mars und Erde ausgetauscht. Vielleicht entstand Leben also auf einem Himmelskörper mit günstigeren Bedingungen und kam dann zur Erde. Francis Crick, Mitentdecker der DNA-Struktur, ging noch weiter: Die Universalität des genetischen Codes passe zur Idee, dass eine fortgeschrittene Zivilisation das Leben bewusst aussäte. Panspermie ist naturwissenschaftlich prüfbar und braucht keinen Gott.`,
  biblical: {
    summary: `Für die Bibel ist das All kein gottfreier Raum: „Am Anfang schuf Gott Himmel und Erde" (Gen 1,1); durch Christus ist alles geschaffen, „das im Himmel und auf Erden ist, das Sichtbare und das Unsichtbare" (Kol 1,16). Ob Bausteine oder sogar Leben aus dem All kamen, ist theologisch unproblematisch – auch das All ist Schöpfung. Panspermie verlagert die Frage nur an einen anderen Ort.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,16–17', quote: `Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und das Unsichtbare … Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Dass Meteoriten und Kometen organische Bausteine zur frühen Erde brachten, ist breit akzeptiert. Die Panspermie im engeren Sinn – lebende Keime aus dem All – ist eine Minderheitenposition: Überleben über interstellare Distanzen ist fraglich, und es gibt keine Belege für außerirdisches Leben. Für einen Transfer innerhalb des Sonnensystems (Mars–Erde) hält man es für denkbar. Die gerichtete Panspermie (Crick/Orgel) ist spekulativ und derzeit nicht prüfbar. Vor allem: Beide Varianten lösen das Ursprungsproblem nicht, sondern verlagern es.`,
    sources: [crickOrgel1973,
      { kind: 'wissenschaft', author: 'Yoshihiro Furukawa u. a.', work: '„Extraterrestrial ribose and other sugars in primitive meteorites", PNAS 116, S. 24440–24445', year: '2019', status: 'paraphrase', quote: `Nachweis von Ribose und anderen Zuckern in Meteoriten in sehr geringen Konzentrationen.` },
    ],
  },
  quickAnswer: `Panspermie löst das Rätsel nicht, sie verschiebt es nur auf einen anderen Planeten – dort gelten dieselben Gesetze der Chemie. Die Bausteine aus Meteoriten sind die gleichen gemischten, racemischen Produkte, ohne Ketten und ohne Code. Und dass Francis Crick eine gezielte Aussaat durch Außerirdische erwog, zeigt vor allem, wie schwer ihm eine Entstehung auf der Erde fiel – er nannte sie „fast ein Wunder".`,
  keyPoints: [
    `**Verlagerung, keine Erklärung:** Ob auf der Erde, dem Mars oder einem fernen Planeten – Hydrolyse, Händigkeit und Information sind universelle Probleme der Chemie.`,
    `**Bausteine ja, Leben nein:** Meteoriten liefern ein breites Gemisch, überwiegend nicht-biologische Moleküle, keine Polymere, keinen Code.`,
    `**Cricks Eingeständnis:** Der Atheist Crick nannte den Ursprung des Lebens „fast ein Wunder" und erwog intelligente Aussaat – ein Zugeständnis, dass Intelligenz als Ursache ernsthaft in Betracht kommt.`,
    `**Regress:** Gerichtete Panspermie erklärt das Leben durch Lebewesen, deren eigener Ursprung wieder erklärt werden muss.`,
    `**Konsistenz:** Wer gerichtete Panspermie für Wissenschaft hält, kann den Schluss auf Intelligenz nicht grundsätzlich für unwissenschaftlich erklären.`,
  ],
  voices: [
    {
      person: 'kelvin',
      role: 'als Physiker (historische Stimme)',
      text: `Lord Kelvin, gläubiger Christ und einer der großen Physiker des 19. Jahrhunderts, schlug 1871 selbst vor, dass Keime auf Meteoriten zur Erde gelangt sein könnten. Zugleich hielt er daran fest, dass nach aller Erfahrung tote Materie nicht ohne bereits lebende Materie lebendig wird. Seine Panspermie war also ausdrücklich keine Antwort auf die Frage nach dem *ersten* Ursprung – sie verschob ihn nur. Ein schönes Beispiel dafür, dass ein Christ solche Hypothesen nüchtern erwägen kann, ohne die Schöpferfrage zu verdrängen.`,
      sources: [kelvin1871],
    },
    {
      person: 'pasteur',
      role: 'als Mikrobiologe',
      text: `Pasteurs Experimente begründeten den Erfahrungssatz, dass Leben nur aus Leben hervorgeht. Panspermie respektiert diesen Satz auf eigentümliche Weise: Sie erklärt irdisches Leben durch anderes Leben. Damit bleibt aber die Frage offen, wie das *erste* Leben irgendwo im Universum entstand – und für diese Frage gilt Pasteurs Befund unverändert.`,
      sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Sorbonne-Vortrag über die Urzeugung', ref: '7. April 1864', status: 'paraphrase', quote: `Widerlegung der Urzeugung von Mikroorganismen in sterilisierten Nährlösungen.` }],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer greift Cricks gerichtete Panspermie auf: Ein Nobelpreisträger, der die Information der DNA so gut verstand wie kaum ein anderer, hielt eine intelligente Ursache für eine ernsthafte Option. Das zeigt, dass der Schluss von Information auf Intelligenz nicht religiös motiviert sein muss. Die Außerirdischen verschieben das Problem allerdings nur: Woher stammt die Information *ihres* Lebens? Am Ende braucht es eine Intelligenz, die nicht selbst ein biologisches, informationsabhängiges Wesen ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Debattenredner',
      text: `Lennox kommentiert gern Dawkins' Bemerkung aus „Expelled", das Leben könne von einer außerirdischen Zivilisation entworfen worden sein: Dawkins sei offen für intelligentes Design – nur nicht für Gott. Doch jede außerirdische Intelligenz ist selbst ein kontingentes, komplexes Wesen, das eine Erklärung verlangt. Der christliche Gott dagegen ist kein Glied in der Kette, sondern ihr ungeschaffener Grund.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God / God\'s Undertaker (Debattenbeiträge)', year: '2009–2011', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bausteine-aus-dem-all',
      objection: `Meteoriten enthalten Aminosäuren, Zucker und Nukleobasen. Die Bausteine des Lebens kamen aus dem All.`,
      objectionBy: 'Dave Farina',
      answer: `Einverstanden – Bausteine wurden sehr wahrscheinlich auch aus dem All geliefert. Aber das ist der leichteste Schritt. Meteoriten zeigen, was ungelenkte Chemie liefert: ein breites Gemisch, racemisch, überwiegend nicht-biologisch, Ribose nur in Spuren – keine Polymere, kein Code.`,
      followUps: [
        {
          id: 'leben-zwangslaeufig',
          objection: `Wenn die Bausteine überall im Universum sind, ist Leben zwangsläufig.`,
          objectionBy: 'Lee Cronin',
          answer: `Aus „Buchstaben gibt es überall" folgt nicht „Bücher entstehen zwangsläufig". „Zwangsläufig" verlangt einen Mechanismus, und genau der fehlt. Bausteine sind notwendig, aber nicht hinreichend.`,
          followUps: [
            {
              id: 'anderer-planet-besser',
              objection: `Dann entstand das Leben eben auf einem anderen Planeten mit besseren Bedingungen.`,
              objectionBy: 'Chandra Wickramasinghe',
              answer: `Welche Bedingungen wären besser? Dass Wasser Biopolymere spaltet, Zucker zu Teer werden und Information nicht aus Chemie folgt, sind keine Eigenheiten der Erde, sondern Gesetze der Chemie. Ein anderer Ort ändert sie nicht.`,
              questionsBack: [`Welche konkrete Eigenschaft dieses anderen Planeten löst das Hydrolyse- oder das Informationsproblem?`],
            },
          ],
        },
      ],
    },
    {
      id: 'crick-gerichtete-panspermie',
      objection: `Francis Crick, der Mitentdecker der DNA, hielt gerichtete Panspermie für möglich. Kein Gott nötig.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das ist aufschlussreich: Crick war überzeugter Atheist. Er schrieb, der Ursprung des Lebens erscheine „fast wie ein Wunder", und erwog eine gezielte Aussaat durch Intelligenz. Damit gibt er zu, dass eine intelligente Ursache für die Information des Lebens eine ernsthafte Option ist.`,
      sources: [crick1981, crickOrgel1973],
      followUps: [
        {
          id: 'aliens-natuerlich',
          objection: `Außerirdische sind natürliche Wesen. Das ist Wissenschaft, keine Religion.`,
          objectionBy: 'Richard Dawkins',
          answer: `Gut – aber dann muss der Ursprung *ihres* Lebens erklärt werden, und wir stehen wieder am Anfang. Am Ende einer solchen Kette braucht es eine Intelligenz, die nicht selbst aus Information zusammengesetzt ist. Und der Schluss „Information weist auf Intelligenz" ist in deinem Szenario schon akzeptiert.`,
          followUps: [
            {
              id: 'wer-schuf-gott-panspermie',
              objection: `Und wer hat dann Gott erschaffen?`,
              objectionBy: 'Richard Dawkins',
              answer: `Gott ist nach christlichem Verständnis nicht ein weiteres zusammengesetztes Wesen, sondern ungeschaffen und notwendig – sonst wäre er nicht Gott. Außerirdische sind dagegen kontingente, biologische Wesen, die selbst eine Ursache brauchen. Diese Frage wird im Themenblock Atheismus ausführlich behandelt.`,
              followUps: [
                {
                  id: 'gott-komplexer-als-leben',
                  objection: `Das ist eine Ausrede. Ein Gott, der ein Universum und das Leben entwerfen kann, müsste noch komplexer sein als alles, was er erklären soll – also noch unwahrscheinlicher. Das ist die ultimative Boeing 747.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Das Argument verwechselt zwei Arten von „Komplexität". Dawkins meint Dinge, die aus vielen physischen Teilen zusammengesetzt sind und deshalb eine Bauursache brauchen. Gott ist nach klassischem christlichem Verständnis gerade *nicht* aus Teilen zusammengesetzt, sondern einfach, geistig und ungeschaffen. Und eine Erklärung braucht nicht selbst erst erklärt zu werden, um gültig zu sein: Archäologen erkennen ein Werkzeug als gemacht, ohne den Werkzeugmacher erklären zu können.`,
                  detail: `**Zwei Antworten, die du kennen solltest:**

1. **Göttliche Einfachheit:** Die Kirchenväter lehren einmütig, dass Gott nicht zusammengesetzt ist. Athanasius betont gegen die Arianer, dass Gott nicht aus Teilen besteht und nicht wird, sondern ist. Ein Geist, der weiß und will, ist nicht im Sinn einer Maschine „komplex" – er hat keine Bauteile, die zufällig hätten zusammenkommen müssen.

2. **Erklärung ohne Regress:** Der Philosoph Alvin Plantinga hat darauf hingewiesen, dass wir ständig auf Ursachen schließen, deren eigene Herkunft wir nicht kennen. Wer auf dem Mond eine Maschine fände, dürfte auf Intelligenz schließen, auch ohne zu wissen, wer sie baute.

**Der Unterschied zu den Außerirdischen:** Cricks Aussäer wären biologische, informationsabhängige Wesen – sie *haben* Bauteile und brauchen deshalb selbst eine Ursache. Genau das unterscheidet sie vom Gott der Bibel, „der allein Unsterblichkeit hat" (1 Tim 6,16).`,
                  voices: [
                    {
                      person: 'plantinga',
                      role: 'als Religionsphilosoph',
                      text: `Plantinga hat Dawkins' Argument in seiner Rezension von *The God Delusion* ausführlich kritisiert: Nach klassischem Theismus ist Gott einfach und nicht aus Teilen zusammengesetzt; zudem sei es keine Bedingung einer guten Erklärung, dass man die Erklärung ihrerseits erklären kann. Sonst könnte überhaupt nichts erklärt werden.`,
                      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: '„The Dawkins Confusion: Naturalism ad absurdum", Books & Culture', year: '2007', status: 'paraphrase', quote: `Gott sei nach klassischem Verständnis einfach; und eine Erklärung verliere nicht ihren Wert, weil man ihre Ursache nicht kennt.` }],
                    },
                    {
                      person: 'athanasius',
                      role: 'als Lehrer über Gottes Wesen',
                      text: `Athanasius verteidigt gegen die Arianer, dass Gott nicht zusammengesetzt ist und nicht wie Geschöpfe aus Teilen entsteht. Darum ist der Vater, der durch seinen Logos alles schafft, selbst nicht ein Glied in der Kette der Geschöpfe, sondern ihr Ursprung.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Decretis Nicaenae Synodi', ref: '22', status: 'paraphrase', quote: `Gott ist einfach und nicht zusammengesetzt.` }],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion (Der Gotteswahn)', ref: 'Kap. 4', year: '2006', quote: `Ein Designer müsse selbst mindestens so komplex und unwahrscheinlich sein wie das, was er erklären soll („the Ultimate Boeing 747").`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Timotheus', ref: '6,16', quote: `der allein Unsterblichkeit hat, der da wohnt in einem Licht, da niemand zukommen kann`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Müssen wir die Herkunft eines Werkzeugmachers erklären können, bevor wir ein Werkzeug als gemacht erkennen dürfen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lithopanspermie-mars',
      objection: `Bakteriensporen überleben im All. Gesteinstransfer zwischen Mars und Erde ist realistisch.`,
      answer: `Für das Sonnensystem halte ich das für denkbar – das gebe ich zu. Aber es verlagert den Ursprung auf den Mars, wo die chemischen Grundprobleme dieselben waren. Ein Umzug ist keine Entstehungsgeschichte.`,
      followUps: [
        {
          id: 'mars-bessere-chemie',
          objection: `Der Mars hatte vielleicht bessere Bedingungen – Borate, trockenere Phasen. Steven Benner hat das vorgeschlagen.`,
          objectionBy: 'Steven Benner',
          answer: `Interessant: Ein führender OOL-Chemiker hielt die irdischen Bedingungen offenbar für so ungünstig, dass er den Mars ins Spiel brachte. Das zeigt die Schwere der Probleme. Selbst wenn Borate die Ribose stabilisieren, bleiben Händigkeit, Polymerisation und Information.`,
          sources: [{ kind: 'wissenschaft', author: 'Alonso Ricardo, Matthew A. Carrigan, Alison N. Olcott, Steven A. Benner', work: '„Borate Minerals Stabilize Ribose", Science 303, S. 196', year: '2004', status: 'paraphrase' }],
          followUps: [
            {
              id: 'leben-auf-dem-mars-finden',
              objection: `Dann schauen wir nach. Der Rover Perseverance hat im Jezero-Krater Gestein mit möglichen Biosignaturen gefunden. Wenn wir auf dem Mars eine zweite, unabhängige Entstehung von Leben nachweisen, zeigt das: Leben entsteht leicht, wo die Bedingungen stimmen.`,
              objectionBy: 'Bill Nye',
              answer: `Ich würde mich über jede Entdeckung freuen – und sie wäre für den christlichen Glauben kein Problem, denn auch der Mars ist Schöpfung. Aber drei Dinge muss man auseinanderhalten: Erstens hat die NASA ausdrücklich nur von *möglichen* Biosignaturen gesprochen. Zweitens wäre Marsleben mit derselben Chemie wie unserer eher ein Hinweis auf Gesteinstransfer als auf eine zweite Entstehung. Drittens wüsste man selbst dann nicht, *wie* es entstand – nur, *dass* es dort auch Leben gab.`,
              detail: `**Stand der Funde:** 2024 untersuchte Perseverance ein Gestein mit auffälligen „Leopardenflecken" (Cheyava Falls); die NASA bezeichnete die Befunde als mögliche Biosignatur, die auch nicht-biologisch entstanden sein könnte. Eine endgültige Klärung erfordert die Rückführung der Proben zur Erde.

**Was ein Fund bedeuten würde:**
- **Gleiche Biochemie** (L-Aminosäuren, D-Zucker, gleicher Code): spricht eher für einen gemeinsamen Ursprung und Transfer zwischen Mars und Erde – dann bleibt es bei *einer* Entstehung.
- **Völlig andere Biochemie:** wäre eine echte Sensation und ein Argument, dass Leben mehrfach entstehen kann. Aber auch dann hätten wir einen *Befund*, keinen *Mechanismus*.

**Theologisch:** Die Schrift sagt nichts darüber, ob Gott nur auf der Erde Leben schuf. Ps 104 preist Gott für die Fülle des Lebens; mehr Leben im All würde diese Fülle nur vergrößern. Siehe dazu den Themenblock Astrobiologie.`,
              sources: [{ kind: 'sonstiges', author: 'NASA / Jet Propulsion Laboratory', work: 'Mitteilungen zum Gestein „Cheyava Falls" (Mars-Rover Perseverance, Jezero-Krater)', year: '2024–2025', quote: `Die Merkmale gelten als mögliche Biosignatur; nicht-biologische Erklärungen sind nicht ausgeschlossen, eine Bestätigung erfordert weitere Analysen.`, status: 'paraphrase' }],
              questionsBack: [`Woran würdest du erkennen, ob Marsleben unabhängig entstanden oder von der Erde (oder zur Erde) verfrachtet worden ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'panspermie-wissenschaftlich',
      objection: `Panspermie ist zumindest eine wissenschaftliche Hypothese. Schöpfung ist es nicht.`,
      answer: `Gerichtete Panspermie ist eine Design-Hypothese: Sie erklärt Leben durch eine Intelligenz. Wenn sie als wissenschaftlich gilt, kann der Schluss auf eine intelligente Ursache nicht grundsätzlich unwissenschaftlich sein – unabhängig davon, wer der Urheber ist.`,
      followUps: [
        {
          id: 'panspermie-testbar',
          objection: `Panspermie ist testbar, etwa durch Signaturen im Erbgut oder Funde auf dem Mars.`,
          answer: `Dann ist auch der Designschluss in demselben Sinn prüfbar: Man untersucht, ob ein Muster Merkmale trägt, die bekanntermaßen nur Intelligenz erzeugt – genau wie SETI. Siehe den Claim „Intelligent Design ist keine Wissenschaft" im Themenblock Evolution.`,
        },
      ],
    },
    {
      id: 'bennu-ryugu-proben',
      objection: `Die Proben der Asteroiden Ryugu und Bennu wurden unverschmutzt zur Erde gebracht. In Bennu fand man 14 der 20 Aminosäuren, die das Leben nutzt, und alle fünf Nukleobasen von DNA und RNA, dazu Salzlaken. Die Chemie des Lebens ist kosmisch – sie entsteht überall von selbst.`,
      objectionBy: 'Dave Farina',
      answer: `Das ist ein großartiger Befund, und er bestätigt, was ich schon zugestanden habe: Bausteine entstehen im All. Aber schau genau hin: Die Aminosäuren in Bennu waren praktisch zu gleichen Teilen links- und rechtshändig, und neben den 14 biologischen fand man viele, die das Leben gar nicht verwendet. Keine Ketten, keine Sequenzen, kein Code. Bennu zeigt die typische Handschrift ungelenkter Chemie: Vielfalt ohne Auswahl.`,
      detail: `**Die Befunde:** Die Auswertung der OSIRIS-REx-Proben (Glavin et al., Nature Astronomy 2025) ergab Dutzende Aminosäuren – darunter 14 der 20 proteinogenen – sowie die Nukleobasen Adenin, Guanin, Cytosin, Thymin und Uracil, außerdem Ammoniak in hoher Konzentration. Eine Begleitstudie (McCoy et al., Nature 2025) beschrieb Mineralien, die aus verdunstenden Salzlaken stammen. In Ryugu wurde bereits zuvor Uracil nachgewiesen.

**Die Händigkeit:** Anders als einige Messungen am Murchison-Meteoriten zeigten die Bennu-Aminosäuren nahezu racemische Verhältnisse. Das ist gerade ein Hinweis darauf, dass die Einhändigkeit des Lebens nicht einfach aus dem All „mitgeliefert" wurde.

**Für dich:** Freue dich offen über die Entdeckung. Dann stelle die entscheidende Frage: Was fehlt zwischen diesem Gemisch und der ersten Zelle? Die Antwort ist dieselbe wie bei Miller: fast alles, was Leben ausmacht.`,
      sources: [
        { kind: 'wissenschaft', author: 'Daniel P. Glavin, Jason P. Dworkin u. a.', work: '„Abundant ammonia and nitrogen-rich soluble organic matter in samples from asteroid (101955) Bennu", Nature Astronomy', year: '2025', quote: `In den Bennu-Proben finden sich 14 der 20 proteinogenen Aminosäuren, alle fünf kanonischen Nukleobasen und viel Ammoniak; die Aminosäuren sind weitgehend racemisch.`, status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Timothy J. McCoy u. a.', work: '„An evaporite sequence from ancient brine recorded in Bennu samples", Nature', year: '2025', quote: `Mineralabfolge aus verdunstender Salzlake auf dem Mutterkörper Bennus.`, status: 'paraphrase' },
      ],
      questionsBack: [`Was genau fehlt zwischen dem Gemisch aus Bennu und einer lebenden Zelle – und welcher dieser Schritte ist ohne Lenkung gezeigt?`],
      followUps: [
        {
          id: 'isovalin-ueberschuss',
          objection: `Im Murchison-Meteoriten gibt es aber Überschüsse an linkshändigem Isovalin, teils deutlich über zehn Prozent. Die Händigkeit des Lebens könnte im All entstanden sein – etwa durch zirkular polarisiertes Licht.`,
          objectionBy: 'Jason Dworkin',
          answer: `Das ist ein echter und interessanter Befund. Aber Isovalin ist eine Aminosäure, die das Leben in Proteinen gar nicht verwendet; die Überschüsse sind klein, schwanken zwischen Proben und hängen offenbar mit der wässrigen Veränderung im Mutterkörper zusammen. Das Leben braucht nicht zehn Prozent Überschuss, sondern praktisch hundert Prozent Einhändigkeit – über alle Aminosäuren und Zucker hinweg. Und Bennu war racemisch.`,
          detail: `Glavin und Dworkin (PNAS 2009) fanden in einigen kohligen Chondriten L-Überschüsse von Isovalin bis zu etwa 18 Prozent und brachten sie mit wässriger Veränderung in Verbindung. Das ist ein ernstzunehmender Hinweis, dass kleine Ungleichgewichte natürlich entstehen können.

Der Weg von kleinen Ungleichgewichten zu vollständiger Homochiralität verlangt jedoch Verstärkungsmechanismen (etwa die Soai-Reaktion oder Kristallisationseffekte), die bislang nur unter sehr speziellen Laborbedingungen funktionieren – siehe den Claim „Die Homochiralität ist erklärt" im Themenblock Chemie und Biochemie.

Louis Pasteur, der die molekulare Händigkeit entdeckte, sah in ihr eine Grenzlinie zwischen der Chemie des Lebens und der Chemie toter Materie. Diese Grenze ist bis heute nicht überbrückt.`,
          voices: [
            {
              person: 'pasteur',
              role: 'als Entdecker der molekularen Chiralität',
              text: `Pasteur trennte 1848 die Kristalle der Weinsäure in links- und rechtshändige Formen und erkannte, dass lebende Organismen stets nur eine Händigkeit herstellen, während Laborsynthesen beide gleich verteilt liefern. Er hielt diese Asymmetrie für ein Kennzeichen der Lebensvorgänge. Spätere Forschung hat Mechanismen für kleine Ungleichgewichte gefunden – den Sprung zur vollständigen Einhändigkeit unter natürlichen Bedingungen aber nicht.`,
              sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Untersuchungen zur molekularen Asymmetrie (Vorträge vor der Société chimique de Paris)', year: '1860', status: 'paraphrase', quote: `Die molekulare Asymmetrie natürlicher organischer Produkte unterscheidet die Chemie des Lebens von der Chemie der toten Natur.` }],
            },
          ],
          sources: [{ kind: 'gegner', author: 'Daniel P. Glavin, Jason P. Dworkin', work: '„Enrichment of the amino acid L-isovaline by aqueous alteration on CI and CM meteorite parent bodies", PNAS 106 (14), S. 5487–5492', year: '2009', quote: `In kohligen Chondriten finden sich L-Überschüsse von Isovalin bis zu etwa 18 Prozent, verbunden mit wässriger Veränderung auf den Mutterkörpern.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'assembly-theory-lebensnachweis',
              objection: `Wir brauchen gar keine Erdbiochemie als Maßstab. Mit der Assembly Theory können wir Leben auf anderen Welten an der Komplexität seiner Moleküle erkennen. Leben ist ein kosmisches Phänomen der Selektion – keine irdische Ausnahme.`,
              objectionBy: 'Lee Cronin',
              answer: `Als Messwerkzeug für die Suche nach Leben ist das eine kreative Idee. Aber beachte, was der Assembly-Index misst: dass ein Prozess „mit Gedächtnis" am Werk war. Nach Cronins eigener Darstellung haben auch technische Produkte, also Werke von Intelligenz, hohe Assembly-Werte. Das Werkzeug kann also gerade nicht zwischen ungelenkter Selektion und Planung unterscheiden – und es erklärt nicht, wie der erste solche Prozess entstand.`,
              detail: `Die Assembly Theory (Sharma, Cronin, Walker u. a., Nature 2023) definiert einen „Assembly-Index": die minimale Zahl von Verknüpfungsschritten, mit denen ein Molekül aus Grundbausteinen aufgebaut werden kann. Moleküle mit hohem Index in großer Stückzahl gelten als Zeichen eines selektierenden Prozesses, weil der Zufall sie nicht in Menge erzeugt.

Das ist im Kern dieselbe Intuition, die hinter dem Designargument steht: Bestimmte Muster entstehen nicht durch Zufall und einfache Gesetzmäßigkeit. Die Assembly Theory sagt „Selektion", der Designbefürworter sagt „Intelligenz" – und für den *ersten* Prozess, vor jeder biologischen Selektion, ist Intelligenz die einzige bekannte Ursache solcher Muster.

William Dembski spricht hier von „spezifizierter Komplexität": unwahrscheinlich *und* einem unabhängigen Muster entsprechend. Frage freundlich, worin sich ein hoher Assembly-Index davon unterscheidet.`,
              voices: [
                {
                  person: 'dembski',
                  role: 'als Mathematiker (Design-Inferenz)',
                  text: `Dembski argumentiert, dass wir in vielen Disziplinen – Archäologie, Kryptografie, SETI – zuverlässig auf intelligente Ursachen schließen, wenn ein Ereignis zugleich unwahrscheinlich und unabhängig spezifiziert ist. Ein Maß, das komplexe Strukturen in hoher Stückzahl als Spur eines gedächtnisbehafteten Prozesses erkennt, erfasst nach seiner Sicht dasselbe Phänomen; offen bleibt, welche Ursache den ersten solchen Prozess hervorbrachte.`,
                  sources: [{ kind: 'fachliteratur', author: 'William A. Dembski, Winston Ewert', work: 'The Design Inference: Eliminating Chance through Small Probabilities', ref: '2. Aufl.', year: '2023', status: 'paraphrase' }],
                },
              ],
              sources: [{ kind: 'gegner', author: 'Abhishek Sharma, Dániel Czégel, Michael Lachmann, Christopher P. Kempes, Sara I. Walker, Leroy Cronin', work: '„Assembly theory explains and quantifies selection and evolution", Nature 622, S. 321–328', year: '2023', quote: `Komplexe Objekte in großer Kopienzahl gelten als Signatur von Selektion; der Assembly-Index misst die minimale Zahl von Aufbauschritten.`, status: 'paraphrase' }],
              questionsBack: [`Woran würde der Assembly-Index ein Molekül aus ungelenkter Selektion von einem Molekül aus einem Chemielabor unterscheiden?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches chemische Problem des Lebensursprungs löst ein anderer Planet?`,
    `Warum erwog ein Atheist wie Crick eine intelligente Aussaat?`,
    `Woher stammt die Information im Leben der hypothetischen Außerirdischen?`,
    `Wenn gerichtete Panspermie wissenschaftlich ist – warum dann nicht jeder Schluss auf intelligente Ursachen?`,
  ],
  avoid: [
    `„Crick glaubte an Wunder" – falsch; er war Atheist und meinte „fast ein Wunder" als Ausdruck der Schwierigkeit.`,
    `Außerirdisches Leben als Bedrohung für den Glauben darstellen – die Bibel verbietet es nicht (siehe Themenblock Astrobiologie).`,
  ],
  concessions: [
    `Organische Bausteine wurden sehr wahrscheinlich auch durch Meteoriten und Kometen zur frühen Erde gebracht.`,
    `Ein Gesteinstransfer zwischen Mars und Erde ist physikalisch möglich.`,
  ],
  furtherReading: [
    crick1981,
    crickOrgel1973,
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Panspermie', 'Francis Crick', 'Meteoriten', 'Außerirdische'],
  related: ['ursprung-des-lebens/ool-nur-wissensluecke', 'ursprung-des-lebens/miller-urey', 'astrobiologie/ausserirdische-widerlegen-bibel', 'atheismus/wer-schuf-gott', 'evolution/id-keine-wissenschaft'],
};

export default claim;
