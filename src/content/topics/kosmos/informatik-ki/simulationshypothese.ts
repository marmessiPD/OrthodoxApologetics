import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'simulationshypothese',
  title: `„Wir leben wahrscheinlich in einer Simulation."`,
  proponents: [
    { name: 'Nick Bostrom', role: 'Philosoph (zuvor Oxford)', work: '„Are You Living in a Computer Simulation?", Philosophical Quarterly 53 (2003), 243–255' },
    { name: 'David J. Chalmers', role: 'Philosoph, New York University', work: 'Reality+: Virtual Worlds and the Problems of Philosophy (2022)' },
    { name: 'Elon Musk', role: 'Unternehmer', work: 'Code Conference 2016: Die Chance, in der Basisrealität zu leben, sei „eins zu Milliarden"' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: 'Isaac Asimov Memorial Debate (2016)' },
  ],
  steelman: `Bostroms Argument ist ein logisch sauberes Trilemma: Entweder (1) sterben fast alle Zivilisationen aus, bevor sie technisch „posthuman" werden, oder (2) fast keine posthumane Zivilisation interessiert sich dafür, ihre Vorfahren zu simulieren, oder (3) wir leben mit an Sicherheit grenzender Wahrscheinlichkeit in einer Simulation. Denn wenn solche Zivilisationen existieren und Simulationen laufen lassen, gibt es unvorstellbar viel mehr simulierte als reale Bewusstseine – und nach dem Indifferenzprinzip sollten wir annehmen, zu der viel größeren Gruppe zu gehören. Angesichts des exponentiellen Fortschritts der Rechentechnik und fotorealistischer Videospiele ist (3) keineswegs abwegig. Chalmers ergänzt: Auch eine simulierte Welt wäre real im Sinn von „wirklich existierend" – und wir können nicht ausschließen, in einer zu leben.`,
  biblical: {
    summary: `Die Schrift lehrt, dass die Welt **wirklich** ist – von Gott geschaffen und „sehr gut" (Gen 1,31) – und zugleich in jedem Augenblick von ihm getragen wird: „In ihm leben, weben und sind wir" (Apg 17,28), „es besteht alles in ihm" (Kol 1,17), er „trägt alle Dinge mit seinem kräftigen Wort" (Hebr 1,3). Die Simulationshypothese spiegelt also eine christliche Wahrheit verzerrt wider: Unsere Existenz hängt tatsächlich von einem Geist ab. Aber der biblische Gott ist kein Programmierer in einem höheren Universum, sondern der Schöpfer aus dem Nichts, der selbst kein Teil irgendeiner Welt ist. Und die Menschwerdung bestätigt die Wirklichkeit der Materie: Die Apostel bezeugen, was „unsere Hände betastet haben" (1 Joh 1,1).`,
    detail: `- **Gen 1,31**: Die geschaffene Welt ist gut und real – keine Illusion, kein Schattenspiel.
- **Apg 17,28**: Paulus zitiert vor den Athenern einen griechischen Dichter; die Abhängigkeit allen Seins von Gott ist ein Gedanke, den auch Heiden ahnten.
- **Kol 1,16–17; Hebr 1,3**: Christus, der Logos, ist Schöpfer und Erhalter – das „Betriebssystem" der Welt ist eine Person, keine Rechenanlage.
- **1 Joh 1,1–3**: Gegen die Doketen, die Christi Leib für Schein hielten, betont Johannes die handgreifliche Wirklichkeit des fleischgewordenen Wortes.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,31', quote: `Und Gott sah an alles, was er gemacht hatte; und siehe da, es war sehr gut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,17', quote: `Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,3', quote: `… und trägt alle Dinge mit seinem kräftigen Wort.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,1', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat von Anfang an gegen zwei Irrtümer gekämpft, die in der Simulationshypothese wiederkehren: gegen die **Gnosis**, nach der unsere Welt das Werk eines untergeordneten „Demiurgen" in einer höheren Sphäre ist (Irenäus, *Adversus Haereses*), und gegen den **Doketismus**, nach dem Christi Leib nur Schein war (Kyrill, Athanasius). Die Simulationshypothese ist gewissermaßen eine digitale Gnosis: Ein endlicher „Weltbaumeister" in einem übergeordneten Universum erschafft eine Scheinwelt. Die orthodoxe Lehre hält dagegen: Der eine Gott schafft aus dem Nichts eine wirkliche Welt; die Sakramente gebrauchen reale Materie (Wasser, Brot, Wein, Öl), weil die Schöpfung gut ist und vom Heiligen Geist geheiligt werden kann.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I–II; bes. II,1–2', year: 'um 180', quote: `Irenäus widerlegt die gnostische Lehre, die Welt sei von einem unwissenden Demiurgen oder von Engeln geschaffen; der eine Gott, der Vater, hat alles durch sein Wort gemacht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '41–42', quote: `Der Logos durchwaltet und erhält die ganze Schöpfung, damit sie nicht ins Nichts zurückfällt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Bostroms Argument gilt als formal geschickt; viele Philosophen halten aber seine Voraussetzungen für fragwürdig: (a) die **Substratunabhängigkeit** des Bewusstseins (simulierte Gehirne wären bewusst), (b) die Wahl der **Referenzklasse** beim Indifferenzprinzip, (c) die **Rechenkosten** einer Simulation mit Quantendetails. Der Astronom David Kipping (2020) kam in einer bayesianischen Analyse zu dem Ergebnis, dass die Wahrscheinlichkeit, in einer Simulation zu leben, selbst unter Bostroms Annahmen bei höchstens etwa 50 % liegt – leicht zugunsten der Basisrealität. Physiker wie Sabine Hossenfelder nennen die Hypothese unwissenschaftlich; andere (Beane, Davoudi, Savage 2012/2014) haben mögliche Tests vorgeschlagen.`,
    sources: [
      { kind: 'gegner', author: 'Nick Bostrom', work: 'Are You Living in a Computer Simulation?', ref: 'Philosophical Quarterly 53 (2003), 243–255', year: '2003', status: 'paraphrase' },
      { kind: 'gegner', author: 'David J. Chalmers', work: 'Reality+: Virtual Worlds and the Problems of Philosophy', year: '2022', quote: `Chalmers diskutiert ausdrücklich, dass ein Simulator in mancher Hinsicht die Rolle eines Gottes für die simulierte Welt spielen würde (Kapitel „Is God a hacker in the next universe up?").`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'David Kipping', work: 'A Bayesian Approach to the Simulation Argument', ref: 'Universe 6 (2020), 109', year: '2020', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Silas R. Beane, Zohreh Davoudi, Martin J. Savage', work: 'Constraints on the Universe as a Numerical Simulation', ref: 'European Physical Journal A 50 (2014)', year: '2014', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Spannend: Die Simulationshypothese gibt zu, dass unsere Welt das Werk einer Intelligenz sein könnte, die ihre Naturgesetze festgelegt hat – sie ist ein verkapptes Design-Argument. Aber sie schiebt die Frage nur eine Etage höher: Wer hat die Basisrealität gemacht? Der Regress endet nur bei einem notwendigen, ungeschaffenen Schöpfer. Außerdem setzt sie voraus, dass Rechnen Bewusstsein erzeugt, und sie untergräbt die Daten, auf denen sie beruht. Das Christentum sagt: Die Welt ist keine Simulation, sondern eine wirkliche Schöpfung, getragen von Gott.`,
  keyPoints: [
    `**Verkapptes Design-Argument:** Wer die Simulation für wahrscheinlich hält, kann einen kosmischen Urheber nicht mehr als „unwissenschaftlich" abtun.`,
    `**Regress:** Jeder Simulator ist selbst ein endliches, zusammengesetztes Wesen in einer Welt mit Gesetzen – er braucht wieder eine Erklärung. Nur ein notwendiges Wesen, das nicht Teil einer Welt ist, beendet die Kette.`,
    `**Versteckte Prämisse:** Das Argument setzt voraus, dass simulierte Gehirne bewusst wären (Substratunabhängigkeit) – genau das ist umstritten.`,
    `**Selbstuntergrabung:** Die Prämissen (Physik, Rechentechnik, Geschichte) stammen aus unserer Welt. Wenn sie wahrscheinlich simuliert ist, sind diese Daten unzuverlässig – und damit auch das Argument.`,
    `**Digitale Gnosis:** Ein Programmierer in einer höheren Welt ähnelt dem gnostischen Demiurgen, nicht dem biblischen Schöpfer aus dem Nichts.`,
  ],
  argument: {
    name: 'Die Simulationshypothese als verkapptes Design-Argument',
    summary: 'Konsequent zu Ende gedacht führt die Simulationshypothese zur Frage nach einem notwendigen Schöpfer.',
    premises: [
      {
        text: 'P1: Wenn wir in einer Simulation leben, dann wurden unser Universum und seine Gesetze von einem intelligenten Akteur absichtlich gestaltet.',
        support: `Das liegt im Begriff der Simulation: Jemand hat Anfangsbedingungen, Gesetze und Rechenregeln festgelegt.`,
      },
      {
        text: 'P2: Prominente Vertreter (Bostrom, Chalmers, Musk) halten die Simulationshypothese für ernsthaft möglich oder sogar wahrscheinlich.',
        support: `Siehe Bostrom 2003, Chalmers 2022, Musks Äußerung 2016.`,
      },
      {
        text: 'P3: Jeder Simulator wäre selbst ein kontingentes, zusammengesetztes Wesen innerhalb einer Wirklichkeit mit eigenen Gesetzen und bedürfte einer Erklärung; ein unendlicher Regress solcher Wesen erklärt nichts.',
        support: `Leibniz: Eine unendliche Reihe von Büchern, die jeweils vom vorigen abgeschrieben wurden, erklärt nicht, warum es überhaupt Bücher mit diesem Inhalt gibt. Zudem bräuchte jede Ebene mehr Rechenressourcen als die simulierte.`,
        sources: [
          { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'De rerum originatione radicali (Über den letzten Ursprung der Dinge)', year: '1697', status: 'paraphrase' },
        ],
      },
    ],
    inferences: ['Aus P1 und P2: Wer die Simulation ernst nimmt, kann einen intelligenten Urheber der Weltgesetze nicht als prinzipiell unwissenschaftlich verwerfen.'],
    conclusion: 'Die Simulationshypothese, konsequent durchdacht, verweist auf einen notwendigen, nicht-simulierten Grund aller Wirklichkeit – die klassische Gottesfrage.',
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Widerleger der Gnosis',
      text: `Irenäus setzte sich mit Lehrern auseinander, die behaupteten, unsere Welt sei von einem untergeordneten Weltbaumeister gemacht, der selbst nicht der höchste Gott sei. Er hielt dagegen: Es gibt nur einen Gott, der durch sein Wort und seine Weisheit alles geschaffen hat, und die Schöpfung ist sein gutes Werk, nicht ein Produkt minderer Mächte. Die heutige Vorstellung eines Programmierers in einer höheren Welt wiederholt strukturell das gnostische Modell – und Irenäus' Antwort gilt weiterhin.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'II,1–2; IV,20,1', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph gegen den Skeptizismus',
      text: `Augustinus antwortete auf die Skeptiker seiner Zeit, die meinten, wir könnten uns in allem täuschen: „Wenn ich mich täusche, bin ich." Selbst im Fall der umfassendsten Täuschung bleibt die Gewissheit der eigenen Existenz, des eigenen Denkens und Wollens. Das zeigt: Skeptische Szenarien – vom Traum bis zur Simulation – zerstören nicht alle Erkenntnis; sie setzen ein wirkliches, denkendes Ich voraus, das sich nicht wegsimulieren lässt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XI,26', year: 'um 417', quote: `Wenn ich mich täusche, bin ich.`, original: 'Si enim fallor, sum.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Schöpfung und Erhaltung',
      text: `Athanasius lehrt, dass die Schöpfung aus dem Nichts stammt und von Natur aus wieder ins Nichts zurückfallen würde, wenn der Logos sie nicht in jedem Augenblick erhielte. Diese Abhängigkeit ist radikaler als jede Simulation: Ein Programm hängt von einer Maschine ab, die selbst nach Gesetzen läuft; die Schöpfung hängt von Gott ab, der selbst von nichts abhängt. Und doch ist die Schöpfung wirklich – keine Illusion, sondern gewolltes, geliebtes Sein.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '41–42', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3–4', status: 'paraphrase' },
      ],
    },
    {
      person: 'feser',
      role: 'als Vertreter des klassischen Theismus',
      text: `Feser betont den Unterschied zwischen dem Gott des klassischen Theismus und einem „Demiurgen": Ein noch so mächtiger Programmierer wäre ein Wesen unter Wesen – zusammengesetzt, veränderlich, von Gesetzen abhängig – und bräuchte selbst eine Ursache seines Seins. Gott dagegen ist das reine Sein selbst, die Ursache dafür, dass überhaupt etwas existiert, auch der Programmierer und seine Welt. Die Simulationshypothese beantwortet daher nicht die Gottesfrage, sondern verschiebt sie.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
      ],
    },
    {
      person: 'robert-marks',
      role: 'als Informatiker',
      text: `Aus informatischer Sicht weist Marks darauf hin, dass Simulationen Rechenressourcen verbrauchen und nur das enthalten, was ihre Programmierer an Information und Regeln hineingelegt haben. Ein Regress von Simulationen in Simulationen bräuchte auf jeder höheren Ebene mehr Ressourcen; und die Hypothese setzt voraus, dass Bewusstsein berechenbar ist – was er bestreitet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Robert J. Marks II', work: 'Non-Computable You', year: '2022', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'bostroms-trilemma',
      objection: `Bostroms Trilemma ist logisch gültig. Wenn Zivilisationen nicht aussterben und Ahnen simulieren, sind wir fast sicher simuliert.`,
      objectionBy: 'Nick Bostrom',
      answer: `Als Wenn-dann-Satz ist es gültig. Aber es setzt voraus, dass simulierte Gehirne bewusst wären. Wenn Rechnen kein Bewusstsein erzeugt, sind simulierte „Menschen" keine Beobachter wie wir – und das Zählargument bricht zusammen. Bostrom nimmt diese Substratunabhängigkeit ausdrücklich als Voraussetzung an.`,
      followUps: [
        {
          id: 'substratunabhaengigkeit-plausibel',
          objection: `Substratunabhängigkeit ist die plausibelste Annahme der Kognitionswissenschaft.`,
          objectionBy: 'David Chalmers',
          answer: `Sie ist eine verbreitete Arbeitshypothese, aber kein Ergebnis. Searles Chinesisches Zimmer, Blocks „China-Gehirn" und Kochs Integrierte Informationstheorie sprechen dagegen. Siehe die Debatte „KI wird Bewusstsein entwickeln".`,
          followUps: [
            {
              id: 'nur-arbeitshypothese',
              objection: `Bostrom sagt ja nur: Wenn man sie annimmt, folgt das Trilemma.`,
              answer: `Dann ist das Ergebnis nur so stark wie diese Annahme – und die Schlagzeile „Wir leben wahrscheinlich in einer Simulation" ist übertrieben. Korrekt wäre: „Falls Bewusstsein berechenbar ist und falls posthumane Zivilisationen Ahnen simulieren, dann …" Das klingt deutlich weniger spektakulär.`,
              followUps: [
                {
                  id: 'simulation-ist-real',
                  objection: `Selbst wenn wir simuliert sind, ist das kein Skeptizismus: Tische, Bäume und Menschen wären dann eben digitale Objekte – aber real. Virtuelle Realität ist echte Realität. Nichts von Bedeutung geht verloren.`,
                  objectionBy: 'David Chalmers (Reality+, 2022)',
                  answer: `Chalmers' Antwort ist klug – und sie hat eine bemerkenswerte Folge, die er selbst ausspricht: Der Simulator wäre für uns so etwas wie ein **Schöpfer**. Damit ist die Simulationshypothese keine Alternative zur Gottesfrage, sondern stellt sie neu: Wer hat die Welt des Simulators hervorgebracht? Ein endlicher Programmierer verschiebt die Frage nur – erst ein notwendiges, nicht geschaffenes Sein beantwortet sie.`,
                  detail: `In *Reality+* widmet Chalmers ein ganzes Kapitel der Frage, ob ein Simulator ein Gott wäre. Er unterscheidet zwischen einem „Simulationsgott" (mächtig und wissend in Bezug auf unsere Welt, aber selbst ein Geschöpf in einer höheren Welt) und dem Gott der klassischen Theologie. Genau diese Unterscheidung brauchst du: Der Gott der Bibel ist nicht der mächtigste Bewohner der Wirklichkeit, sondern ihr Grund – „In ihm leben, weben und sind wir" (Apg 17,28).`,
                  sources: [
                    { kind: 'gegner', author: 'David J. Chalmers', work: 'Reality+: Virtual Worlds and the Problems of Philosophy', year: '2022', status: 'paraphrase', note: 'Chalmers ist Agnostiker; er diskutiert den Simulator ausdrücklich als möglichen „Gott" unserer Welt.' },
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,28', quote: `Denn in ihm leben, weben und sind wir.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Wenn der Simulator unser Schöpfer wäre – wer hat dann seine Welt erschaffen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'programmierer-ist-gott',
      objection: `Als Christ müsstest du die Simulationshypothese doch lieben – der Programmierer ist ja dein Gott!`,
      objectionBy: 'Skeptiker',
      answer: `Ich finde sie tatsächlich aufschlussreich: Sie ist ein verkapptes Design-Argument – sie räumt ein, dass ein Geist hinter den Naturgesetzen stehen könnte. Aber ein Programmierer in einer höheren Welt ist nicht Gott, sondern eher der „Demiurg" der Gnostiker: ein endliches Wesen, das selbst Gesetzen unterliegt.`,
      followUps: [
        {
          id: 'gott-oberster-simulator',
          objection: `Dann ist dein Gott eben der Simulator der obersten Ebene.`,
          answer: `Der Unterschied ist grundsätzlich: Ein Simulator existiert innerhalb einer Wirklichkeit, ist zusammengesetzt und kontingent – er hätte nicht existieren können. Gott ist nicht ein weiteres Ding in einer Welt, sondern der Grund dafür, dass es überhaupt Welten gibt. Nur ein solches notwendiges Sein beendet die Kette der Erklärungen.`,
          followUps: [
            {
              id: 'unendlicher-regress',
              objection: `Vielleicht ist es eben ein unendlicher Regress von Simulationen – ohne oberste Ebene.`,
              answer: `Ein unendlicher Regress abhängiger Dinge erklärt nichts – wie eine unendliche Kette von Waggons ohne Lokomotive. Außerdem bräuchte jede höhere Ebene mehr Rechenleistung als die darunterliegende; eine unendliche Hierarchie wachsender Ressourcen ist kaum denkbar. Und gegen eine aktual unendliche Kette von Ursachen sprechen eigene Argumente (siehe „Eine unendliche Vergangenheit ist mathematisch möglich").`,
              followUps: [
                {
                  id: 'oberste-ebene-rohe-tatsache',
                  objection: `Dann gibt es eben eine oberste physikalische Ebene, die einfach existiert – eine rohe Tatsache. Warum sollte die eine Erklärung brauchen?`,
                  objectionBy: 'Sean Carroll / Graham Oppy',
                  answer: `Weil sie, wie jede physikalische Welt, auch **nicht** hätte existieren oder anders hätte sein können – sie ist kontingent. Und hier liegt eine Ironie: Das ganze Simulationsargument lebt davon, dass wir nach **Erklärungen** für unsere Welt suchen. Wer an der obersten Ebene plötzlich sagt „gibt es halt einfach", hätte das gleich bei unserer Welt sagen können – dann bräuchte man keine Simulation.`,
                  detail: `Leibniz formulierte das Prinzip vom zureichenden Grund: Für jede kontingente Tatsache gibt es einen Grund, warum sie so ist und nicht anders. Alexander Pruss hat es ausführlich verteidigt: Wer es aufgibt, verliert die Grundlage für Wissenschaft – denn wenn Dinge ohne Grund geschehen können, kann man keiner Beobachtung trauen, dass sie eine Ursache hat. Die letzte Erklärung muss etwas sein, das nicht kontingent ist: ein notwendiges Sein. Das ist der Gott der klassischen Theologie, kein Programmierer.`,
                  voices: [
                    {
                      person: 'leibniz',
                      role: 'als Philosoph des zureichenden Grundes',
                      text: `Leibniz fragt in *Die Vernunftprinzipien der Natur und der Gnade* (§ 7): „Warum gibt es eher etwas als nichts?" Die Antwort kann nicht in der Reihe der kontingenten Dinge selbst liegen, wie lang man sie auch denkt, sondern nur in einem Wesen, das den Grund seines Daseins in sich selbst trägt.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Gottfried Wilhelm Leibniz', work: 'Principes de la nature et de la grâce, fondés en raison', ref: '§§ 7–8', year: '1714', status: 'paraphrase' },
                      ],
                    },
                    {
                      person: 'alexander-pruss',
                      role: 'als Verteidiger des Prinzips vom zureichenden Grund',
                      text: `Pruss argumentiert in *The Principle of Sufficient Reason: A Reassessment* (2006), dass ohne dieses Prinzip unser alltägliches und wissenschaftliches Schließen auf Ursachen grundlos würde: Wenn kontingente Ereignisse einfach so geschehen könnten, wüssten wir nicht, warum sie das nicht ständig tun.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'The Principle of Sufficient Reason: A Reassessment', year: '2006', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Wenn die oberste Ebene keinen Grund braucht – warum braucht dann unsere Welt einen Simulator als Grund?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mehr-simulierte-als-reale',
      objection: `Die Rechnung ist eindeutig: Simulierte Wesen würden reale um Größenordnungen übertreffen. Also bist du sehr wahrscheinlich simuliert.`,
      objectionBy: 'Elon Musk',
      answer: `Das Argument sägt am eigenen Ast: Seine Prämissen – wie schnell Computer werden, wie Physik funktioniert, wie Zivilisationen sich entwickeln – stammen aus unserer Welt. Wenn diese Welt sehr wahrscheinlich simuliert ist, können ihre Daten beliebige Parameter einer Simulation sein und sagen nichts über die Basisrealität. Die Schlussfolgerung untergräbt ihre eigenen Gründe.`,
      followUps: [
        {
          id: 'simulation-treu',
          objection: `Eine Ahnensimulation würde die Basisrealität aber treu nachbilden – also stimmen die Daten.`,
          answer: `Dann schließt du von innen auf außen und setzt voraus, was du nicht wissen kannst – welcher Art von Simulation du angehörst. Der Astronom David Kipping hat das bayesianisch durchgerechnet: Selbst unter Bostroms Annahmen kommt man auf höchstens etwa 50 %, leicht zugunsten der Basisrealität. „Wahrscheinlich simuliert" ist also nicht gedeckt.`,
          sources: [
            { kind: 'wissenschaft', author: 'David Kipping', work: '„A Bayesian Approach to the Simulation Argument", Universe 6 (8), 109', year: '2020', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'kipping-nur-priors',
              objection: `Kippings Ergebnis hängt an seinen Annahmen. Mit anderen Ausgangswahrscheinlichkeiten kommt man auf 99 % Simulation.`,
              objectionBy: 'Nick Bostrom',
              answer: `Genau – und das ist der Punkt. Wenn das Ergebnis vollständig davon abhängt, welche unbeweisbaren Ausgangswahrscheinlichkeiten man wählt, dann ist „wir leben wahrscheinlich in einer Simulation" kein Ergebnis, sondern eine Projektion der eigenen Annahmen. Bostrom selbst ist hier vorsichtiger als seine Fans: Er hält jedes der drei Hörner seines Trilemmas für ernsthaft möglich.`,
              detail: `Bostrom hat in Interviews betont, dass er nicht behauptet, wir seien wahrscheinlich simuliert, sondern nur, dass mindestens eine der drei Möglichkeiten zutrifft (Aussterben, Desinteresse an Simulationen oder Simulation). Diese Zurückhaltung kannst du würdigen – sie entzieht den Schlagzeilen von Musk und anderen den Boden.`,
              sources: [
                { kind: 'gegner', author: 'Nick Bostrom', work: '„Are You Living in a Computer Simulation?", Philosophical Quarterly 53', ref: '243–255', year: '2003', status: 'paraphrase', note: 'Schlussfolgerung des Aufsatzes ist eine Disjunktion, keine Wahrscheinlichkeitsaussage für die Simulation allein.' },
              ],
              questionsBack: [
                `Woher nimmst du die Ausgangswahrscheinlichkeit, dass posthumane Zivilisationen Ahnen simulieren wollen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'erklaert-leid',
      objection: `Die Simulation erklärt sogar das Leid besser als euer Gott: Der Programmierer ist eben gleichgültig oder experimentierfreudig.`,
      objectionBy: 'Skeptiker',
      answer: `Dann erbt die Simulationshypothese das Problem des Bösen – aber ohne Antwort und ohne Hoffnung. Der christliche Gott dagegen ist in seine Schöpfung eingetreten, hat in Christus selbst gelitten, ist gestorben und auferstanden und verheißt, jede Träne abzuwischen. Kein Programmierer steigt in sein Spiel hinab, um für seine Figuren zu sterben.`,
      followUps: [
        {
          id: 'beides-unpruefbar',
          objection: `Egal – beides ist unprüfbar. Simulation und Gott sind gleich spekulativ.`,
          objectionBy: 'Sabine Hossenfelder (sinngemäß)',
          answer: `Nicht ganz: Das Christentum macht historisch prüfbare Aussagen – vor allem über die Auferstehung Jesu, die man mit den Methoden der Geschichtswissenschaft untersuchen kann. Die Simulationshypothese bietet nichts Vergleichbares. Und die philosophischen Gründe für einen notwendigen Schöpfer (Kontingenz, Anfang, Ordnung) stehen auf eigenen Füßen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn wir in einer Simulation leben – wer hat dann die Welt des Programmierers gemacht?`,
    `Warum sollte ein simuliertes Gehirn bewusst sein, wenn ein simuliertes Gewitter niemanden nass macht?`,
    `Wenn deine Daten über Physik und Technik aus einer Simulation stammen könnten – warum vertraust du ihnen dann für dein Argument?`,
    `Ist es nicht bemerkenswert, dass du einen Designer der Naturgesetze für möglich hältst – aber nur, solange er kein Gott ist?`,
  ],
  avoid: [
    `Die Simulationshypothese als Gottesbeweis verkaufen („Siehst du, es gibt einen Programmierer!") – sie liefert keinen Gott, nur ein verschobenes Problem.`,
    `Die Hypothese als lächerlich abtun – sie wird von ernsthaften Philosophen diskutiert; wer sie verspottet, wirkt uninformiert.`,
    `„Quantenmechanik beweist, dass die Welt eine Simulation ist" – populäre Fehlinterpretation, physikalisch unbegründet.`,
  ],
  concessions: [
    `Bostroms Trilemma ist als Konditional logisch gültig.`,
    `Die Hypothese lässt sich mit heutigen Mitteln weder beweisen noch sicher widerlegen.`,
    `Auch eine simulierte Welt wäre in gewissem Sinn „real" (Chalmers) – das Argument „dann wäre alles bedeutungslos" ist zu einfach.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Nick Bostrom', work: 'Are You Living in a Computer Simulation?', ref: 'Philosophical Quarterly 53 (2003)', status: 'paraphrase' },
    { kind: 'gegner', author: 'David J. Chalmers', work: 'Reality+: Virtual Worlds and the Problems of Philosophy', year: '2022', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses (Gegen die Häresien)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Simulation', 'Bostrom', 'Design', 'Gnosis', 'Kontingenz'],
  related: [
    'informatik-ki/ki-wird-bewusst',
    'gottesbeweise/kontingenz-trugschluss',
    'mathematik/aktual-unendliche-vergangenheit',
    'feinabstimmung/multiversum',
    'gnosis/geheimes-wissen-elite',
  ],
};

export default claim;
