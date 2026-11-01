import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'multiversum',
  title: `„Das Multiversum erklärt die Feinabstimmung."`,
  proponents: [
    { name: 'Leonard Susskind', role: 'Theoretischer Physiker, Stanford, Mitbegründer der Stringtheorie', work: 'The Cosmic Landscape: String Theory and the Illusion of Intelligent Design (2005)' },
    { name: 'Max Tegmark', role: 'Kosmologe, MIT', work: 'Our Mathematical Universe (2014)' },
    { name: 'Brian Greene', role: 'Theoretischer Physiker, Columbia University', work: 'The Hidden Reality: Parallel Universes and the Deep Laws of the Cosmos (2011)' },
    { name: 'Martin Rees', role: 'Astrophysiker, Cambridge, Astronomer Royal', work: 'Just Six Numbers (1999); Before the Beginning (1997)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016); Debatte mit W. L. Craig (2014)' },
  ],
  steelman: `Das Multiversum ist keine Ausrede, sondern eine Folgerung aus unseren besten Theorien. Die Inflationstheorie, durch die Hintergrundstrahlung gut gestützt, ist in vielen Varianten „ewig": Sie erzeugt fortlaufend neue Blasenuniversen. Die Stringtheorie besitzt eine „Landschaft" von grob 10^500 möglichen Vakuumzuständen mit unterschiedlichen Naturkonstanten. Beides zusammen ergibt eine riesige Zahl von Universen mit verschiedenen Konstanten. Dann ist es keine Überraschung, dass einige lebensfreundlich sind – und dass wir uns in einem davon befinden, ist ein simpler Auswahleffekt. Diese Denkweise hat sogar eine Vorhersage geliefert: Steven Weinberg schätzte 1987 anthropisch eine kleine, aber von null verschiedene kosmologische Konstante ab – elf Jahre bevor die beschleunigte Expansion 1998 entdeckt wurde. Die Design-Hypothese dagegen sagt nichts Konkretes voraus und erklärt alles und nichts.`,
  biblical: {
    summary: `Die Bibel schließt ein Multiversum nicht aus. Sie spricht von Gott als Schöpfer „des Sichtbaren und Unsichtbaren" (Kol 1,16) und verwendet für die geschaffene Wirklichkeit gelegentlich einen Plural: Durch den Sohn hat Gott „die Welten" (*tous aiōnas*) gemacht (Hebr 1,2; vgl. 11,3). Ein Christ hat also kein theologisches Problem mit vielen Universen. Der Einwand gegen das Multiversum als Ersatz für Gott ist ein wissenschaftlicher und philosophischer, kein dogmatischer.`,
    detail: `- **Hebr 1,2 / 11,3:** *aiōnes* bedeutet zunächst „Zeitalter", kann aber die Welt als Ganzes in ihrer zeitlichen Erstreckung meinen. Man sollte daraus kein Multiversum herauslesen – nur festhalten, dass die Schrift die geschaffene Wirklichkeit nicht auf das Sichtbare beschränkt.
- **Kol 1,16:** „Das Sichtbare und das Unsichtbare" – alles ist durch und zu Christus geschaffen.
- **Ps 19,2; Jes 40,26:** Die Größe des Geschaffenen verkündet die Größe des Schöpfers. Je größer die Wirklichkeit, desto größer der, der sie trägt.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '1,2', quote: `… hat er am letzten in diesen Tagen zu uns geredet durch den Sohn, welchen er gesetzt hat zum Erben über alles, durch welchen er auch die Welt gemacht hat.`, original: `δι’ οὗ καὶ ἐποίησεν τοὺς αἰῶνας`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,16', quote: `Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und Unsichtbare …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '40,26', quote: `Hebet eure Augen in die Höhe und sehet! Wer hat solche Dinge geschaffen und führt ihr Heer bei der Zahl heraus? Er ruft sie alle mit Namen …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche hat keine Lehre über die Zahl der Universen. Das Glaubensbekenntnis bekennt Gott als Schöpfer „alles Sichtbaren und Unsichtbaren". Historisch interessant: 1277 verurteilte der Bischof von Paris, Étienne Tempier, unter anderem die These, Gott könne nicht mehrere Welten erschaffen – nicht, weil es mehrere Welten gebe, sondern weil man Gottes Allmacht nicht durch aristotelische Physik begrenzen dürfe.`,
    detail: `Origenes spekulierte über eine Abfolge von Welten (*De Principiis* II,3); diese Spekulation hat die Kirche nicht übernommen, weil sie mit Seelenwanderungsideen verbunden war. Ein physikalisches Multiversum ist etwas anderes und theologisch offen. Entscheidend für die Kirche: Was immer existiert, existiert durch den Logos.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.`, translation: 'gebräuchliche deutsche Fassung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Étienne Tempier, Bischof von Paris', work: 'Verurteilung von 219 Thesen', year: '1277', quote: `Unter den verurteilten Thesen: dass die erste Ursache nicht mehrere Welten erschaffen könne.`, status: 'paraphrase', note: 'Westliches (lateinisches) Dokument; hier nur als historischer Beleg, dass mehrere Welten im christlichen Denken nicht als undenkbar galten.' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Stand: Die Inflation ist gut gestützt, aber ob sie „ewig" ist und Blasenuniversen erzeugt, hängt von Annahmen über das Inflatonfeld ab und ist nicht beobachtet. Die String-Landschaft ist eine theoretische Möglichkeit ohne experimentelle Bestätigung. Das Multiversum ist daher eine ernsthafte, aber spekulative Hypothese. Prominente Physiker kritisieren es scharf: George Ellis (*Scientific American*, August 2011) nennt es wissenschaftlich motivierte philosophische Spekulation; Roger Penrose, Paul Steinhardt und Sabine Hossenfelder halten es für unprüfbar. Ein zentrales ungelöstes Problem ist das „Maßproblem": In einem unendlichen Multiversum geschieht alles unendlich oft, und es gibt kein anerkanntes Verfahren, Wahrscheinlichkeiten zu definieren.`,
    detail: `- **Inflation und ihre Kritik:** Ijjas, Steinhardt und Loeb (*Scientific American*, Februar 2017, „Pop Goes the Universe") argumentierten, die Inflation sei so flexibel, dass sie kaum noch prüfbar sei; 33 Physiker, darunter Guth, Linde und Hawking, widersprachen in einem offenen Brief. Die Debatte ist offen.
- **Weinbergs Vorhersage** (*Phys. Rev. Lett.* 59, 2607, 1987): eine anthropische Obergrenze für die kosmologische Konstante. Echte Leistung – aber sie bestätigt „Leben erfordert einen kleinen Wert", nicht „es gibt viele Universen".
- **Boltzmann-Gehirne:** In vielen Multiversum-Szenarien entstehen isolierte, durch Fluktuation gebildete Beobachter viel häufiger als geordnete Universen mit Evolution. Carroll nennt solche Theorien „kognitiv instabil": Wären sie wahr, könnten wir unseren eigenen Erinnerungen und Messungen nicht trauen.
- **Inverser Spielerfehlschluss:** Ian Hacking (*Mind* 96, 1987) argumentierte, der Schluss vom einen feinabgestimmten Universum auf viele andere sei ein Fehlschluss; John Leslie und P. J. McGrath widersprachen 1988. Die Debatte gilt als nicht entschieden.`,
    sources: [
      { kind: 'wissenschaft', author: 'George F. R. Ellis', work: '„Does the Multiverse Really Exist?", Scientific American 305 (2)', year: 'August 2011', quote: `Multiversum-Vorschläge sind wissenschaftlich motivierte philosophische Spekulation; weil sie fast alles erklären können, lässt sich jede Beobachtung mit irgendeiner Variante vereinbaren.`, status: 'paraphrase', note: 'Ellis ist Kosmologe von Weltrang (Templeton-Preis 2004) und Quäker; seine Kritik ist wissenschaftlich, nicht apologetisch motiviert.' },
      { kind: 'gegner', author: 'Leonard Susskind', work: 'The Cosmic Landscape', year: '2005', quote: `Die String-Landschaft und die ewige Inflation erklären die scheinbare Feinabstimmung ohne Designer.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Steven Weinberg', work: '„Anthropic Bound on the Cosmological Constant", Physical Review Letters 59, 2607', year: '1987', quote: `Die kosmologische Konstante muss klein genug sein, damit sich gravitativ gebundene Strukturen bilden können.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Ian Hacking', work: '„The Inverse Gambler’s Fallacy: The Argument from Design. The Anthropic Principle Applied to Wheeler Universes", Mind 96 (383), 331–340', year: '1987', quote: `Aus einem einzigen unwahrscheinlichen Ergebnis darauf zu schließen, dass es viele Versuche gab, ist ein Fehlschluss.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Anna Ijjas, Paul J. Steinhardt & Abraham Loeb', work: '„Pop Goes the Universe", Scientific American', year: 'Februar 2017', quote: `Die Inflation (und mit ihr das Multiversum) sei so anpassungsfähig, dass sie sich nicht mehr empirisch prüfen lasse.`, status: 'paraphrase', note: 'Umstritten; 33 Physiker, darunter Guth, Linde und Hawking, widersprachen.' },
    ],
  },
  quickAnswer: `Erstens ist das Multiversum eine Spekulation ohne Beobachtungsbeleg – selbst säkulare Physiker wie Ellis, Penrose und Hossenfelder nennen es unprüfbar. Zweitens: Selbst wenn es existiert, braucht der „Universen-Generator" (Inflation plus String-Landschaft) selbst fein abgestimmte Gesetze. Drittens führt es zu absurden Vorhersagen (Boltzmann-Gehirne), die die Wissenschaft selbst untergraben. Und viertens: Ein Multiversum ist mit Gott vereinbar – es ersetzt ihn nicht, es vergrößert nur seine Schöpfung.`,
  keyPoints: [
    `**Spekulativ:** Kein Beleg; Kritiker sind keine Apologeten, sondern Kosmologen wie George Ellis, Roger Penrose, Paul Steinhardt und Sabine Hossenfelder.`,
    `**Der Generator braucht Feinabstimmung:** Inflatonfeld mit passendem Potenzial, Mechanismus zur Variation der Konstanten, Einsteins Gleichungen, Quantenmechanik, Pauli-Prinzip – ohne all das entsteht kein einziges lebensfreundliches Universum (Collins).`,
    `**Boltzmann-Gehirne:** Viele Multiversum-Modelle sagen voraus, dass zufällig fluktuierte Einzelbeobachter häufiger sind als wir – eine Theorie, die ihre eigene Evidenz untergräbt.`,
    `**Maßproblem:** In einem unendlichen Multiversum gibt es kein anerkanntes Verfahren, Wahrscheinlichkeiten zu berechnen; Vorhersagen werden beliebig.`,
    `**Einfachheit:** Ein einziger Schöpfer ist eine einfachere Erklärung als 10^500 und mehr unbeobachtbare Universen (Swinburne).`,
    `**Kein Gegensatz zum Glauben:** Christen können ein Multiversum akzeptieren (Don Page); die Frage nach dem Grund des Ganzen bleibt.`,
  ],
  argument: {
    name: 'Das Generator- und Boltzmann-Argument',
    summary: 'Das Multiversum beseitigt das Feinabstimmungsproblem nicht, sondern verlagert es und erzeugt neue Probleme.',
    premises: [
      {
        text: 'P1: Ein Multiversum-Generator, der lebensfreundliche Universen hervorbringen kann, braucht selbst spezifische Gesetze und Anfangsbedingungen.',
        support: `Dazu gehören ein Inflatonfeld mit geeignetem Potenzial, ein Mechanismus zur Variation der Konstanten (etwa Kompaktifizierung zusätzlicher Dimensionen), die Allgemeine Relativitätstheorie, Quantenmechanik und Prinzipien wie das Pauli-Verbot, ohne die es keine stabile Materie gäbe.`,
        sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument", Blackwell Companion to Natural Theology, Abschnitt zum Multiversum', year: '2009', quote: `Ein Universen-Generator ist wie eine Brotmaschine: Er erzeugt nur dann Brot, wenn er richtig gebaut ist und die richtigen Zutaten hat.`, status: 'paraphrase' }],
      },
      {
        text: 'P2: Diese Grundlagen sind ihrerseits fein abgestimmt oder zumindest erklärungsbedürftig.',
        support: `Schon kleine Änderungen (etwa ein anderes Inflaton-Potenzial, andere Grundgesetze) liefern keine Vielfalt lebensfreundlicher Universen, sondern leere oder sofort kollabierende. Die Frage „Warum diese Gesetze?" taucht eine Ebene höher wieder auf.`,
      },
      {
        text: 'P3: Ein Multiversum, in dem typische Beobachter Boltzmann-Gehirne sind, untergräbt die Gründe, aus denen man an es glaubt.',
        support: `Wenn die meisten Beobachter zufällig entstandene Gehirne mit falschen Erinnerungen wären, wären auch unsere Messdaten wahrscheinlich Illusionen. Sean Carroll selbst nennt solche Theorien „kognitiv instabil".`,
        sources: [{ kind: 'gegner', author: 'Sean Carroll', work: '„Why Boltzmann Brains Are Bad"', year: '2017', quote: `Eine Kosmologie, die von Boltzmann-Gehirnen dominiert wird, ist kognitiv instabil: Wäre sie wahr, hätten wir keinen Grund, ihr zu glauben.`, status: 'paraphrase' }],
      },
      {
        text: 'P4: Design erklärt die Feinabstimmung ohne diese Kosten und ist zugleich mit einem Multiversum vereinbar.',
        support: `Ein Schöpfer kann ein einziges Universum oder viele schaffen. Die Design-Hypothese erwartet zudem geordnete, verstehbare Welten mit echten Beobachtern – keine Boltzmann-Gehirne.`,
      },
    ],
    conclusion: 'Das Multiversum widerlegt das Feinabstimmungsargument nicht. Es verschiebt die Feinabstimmung auf den Generator, erzeugt neue Probleme und lässt die Frage nach dem Grund des Ganzen offen.',
  },
  voices: [
    {
      person: 'robin-collins',
      role: 'als Philosoph und Physiker',
      text: `Collins' Generator-Argument ist der wichtigste Baustein: Auch ein Multiversum ist kein „Gratis-Mittagessen". Damit überhaupt verschiedene Universen mit verschiedenen Konstanten entstehen und einige davon Leben tragen, braucht man eine sehr spezielle Kombination von Gesetzen: ein Feld, das Inflation antreibt, einen Mechanismus, der die Konstanten variiert, eine Gravitation, die Strukturen bildet, Quantenregeln, die stabile Atome erlauben. Ohne Feinabstimmung des Generators gibt es keine lebensfreundlichen Universen – egal wie viele erzeugt werden.`,
      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument", Blackwell Companion to Natural Theology', year: '2009', quote: `Der Multiversum-Generator benötigt selbst die richtigen Gesetze; die Feinabstimmung wird verschoben, nicht beseitigt.`, status: 'paraphrase' }],
    },
    {
      person: 'luke-barnes',
      role: 'als Kosmologe',
      text: `Barnes betont, dass das Multiversum nur dann eine Erklärung ist, wenn es eine wohldefinierte Wahrscheinlichkeitsverteilung über Universen liefert – und genau daran scheitert es bisher (Maßproblem). Je nach gewähltem Maß dominieren junge Universen, leere Universen oder Boltzmann-Gehirne. Eine Theorie, die je nach Rechenvorschrift Beliebiges vorhersagt, kann die Feinabstimmung nicht „erklären". Barnes hält das Multiversum für eine legitime wissenschaftliche Hypothese, aber nicht für eine bewährte.`,
      sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', ref: 'Kap. zum Multiversum', year: '2016', quote: `Ohne Lösung des Maßproblems macht das Multiversum keine klaren Vorhersagen; Boltzmann-Gehirne sind ein ernstes Warnsignal.`, status: 'paraphrase' }],
    },
    {
      person: 'don-page',
      role: 'als christlicher Quantenkosmologe',
      text: `Page, langjähriger Mitarbeiter Stephen Hawkings, hat in einem Aufsatz mit dem Titel „Does God So Love the Multiverse?" (2008) argumentiert, dass ein Multiversum mit dem christlichen Glauben gut vereinbar ist: Ein Schöpfer, der Fülle und Schönheit liebt, könnte eine ungeheure Vielfalt von Welten schaffen, und elegante Gesetze, die eine solche Vielfalt hervorbringen, passen zu einem rationalen Gott. Damit entzieht Page dem Multiversum den Charakter eines Gegenarguments.`,
      sources: [{ kind: 'fachliteratur', author: 'Don N. Page', work: '„Does God So Love the Multiverse?", in: M. Y. Stewart (Hg.), Science and Religion in Dialogue', year: '2008/2010', quote: `Ein Multiversum ist mit dem Theismus vereinbar und könnte sogar besonders gut zu einem Gott passen, der Fülle und elegante Gesetze liebt.`, status: 'paraphrase' }],
    },
    {
      person: 'bruce-gordon',
      role: 'als Philosoph der Physik',
      text: `Gordon hat in *The Nature of Nature* (2011) die Multiversum-Kosmologie einer detaillierten Kritik unterzogen. Sein Punkt: Inflationäre Multiversum-Modelle setzen hochspezifische Anfangsbedingungen und Felder voraus, und die String-Landschaft ist theoretisch nicht einmal sauber konstruiert. Wer das Multiversum als Alternative zu Design anbietet, tauscht eine einfache Erklärung gegen ein unbeobachtbares, fein abgestimmtes und mit dem Maßproblem behaftetes Gebilde.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce L. Gordon', work: '„Balloons on a String: A Critique of Multiverse Cosmology", in: B. L. Gordon & W. A. Dembski (Hg.), The Nature of Nature', year: '2011', quote: `Multiversum-Modelle verlagern die Feinabstimmung in ihre eigenen Voraussetzungen und bieten keine echte Erklärung.`, status: 'paraphrase' }],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph (Einfachheit und Wahrscheinlichkeit)',
      text: `Swinburne argumentiert, dass bei der Wahl zwischen Erklärungen die einfachere vorzuziehen ist. Ein einziges personales Wesen mit unbegrenzter Macht, Erkenntnis und Freiheit ist eine denkbar einfache Hypothese – keine willkürlichen Zahlen, keine Grenzen. Eine riesige Zahl von Universen mit einem Mechanismus, der sie erzeugt, ist dagegen ein extrem komplexer Postulatenapparat. Ockhams Rasiermesser spricht deshalb eher gegen das Multiversum als gegen Gott.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: '2. Aufl., Kap. 8', year: '2004', quote: `Die Annahme eines Schöpfers ist einfacher als die Annahme unzähliger unbeobachtbarer Universen und erklärt die Feinabstimmung besser.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'folgt-aus-besten-theorien',
      objection: `Das Multiversum ist keine Ad-hoc-Erfindung gegen Gott. Es folgt aus der ewigen Inflation und der Stringtheorie – unseren besten Theorien.`,
      objectionBy: 'Leonard Susskind / Max Tegmark',
      targetsPremise: 1,
      answer: `„Folgt aus" ist zu stark. Ewige Inflation ist eine Extrapolation bestimmter Inflationsmodelle; die String-Landschaft ist unbestätigt, und am LHC fanden sich keine Hinweise auf Supersymmetrie. Paul Steinhardt, einer der Väter der Inflation, ist heute einer ihrer schärfsten Kritiker. Und selbst wenn man alles zugesteht, bleibt die Frage nach dem Generator.`,
      questionsBack: [`Welche Beobachtung bestätigt die String-Landschaft?`],
      followUps: [
        {
          id: 'inflation-bestaetigt',
          objection: `Die Inflation ist durch den kosmischen Mikrowellenhintergrund bestätigt: Flachheit, nahezu skaleninvariante Fluktuationen. Und Inflation ist generisch ewig.`,
          objectionBy: 'Alan Guth / Andrei Linde',
          answer: `Die Vorhersagen der Inflation passen gut zu den Daten – das ist eine echte Leistung. Ob sie „ewig" ist, hängt aber vom angenommenen Potenzial ab und ist nicht beobachtet. Ijjas, Steinhardt und Loeb haben 2017 argumentiert, die Theorie sei so flexibel, dass sie kaum noch prüfbar sei; 33 Physiker widersprachen. Die Lage ist offen – und meine Hauptpunkte gelten unabhängig davon.`,
          followUps: [
            {
              id: 'generator-gegeben-kein-gott',
              objection: `Gut, nehmen wir an, es gibt den Generator. Dann brauchen wir keinen Gott mehr – das Multiversum erzeugt alle Möglichkeiten.`,
              objectionBy: 'Sean Carroll',
              targetsPremise: 2,
              answer: `Der Generator erzeugt nur dann lebensfreundliche Universen, wenn er selbst richtig gebaut ist: Inflatonfeld mit passendem Potenzial, ein Mechanismus zur Variation der Konstanten, Gravitation, Quantenmechanik, Pauli-Prinzip. Eine Brotmaschine erzeugt nur Brot, wenn sie richtig konstruiert ist und die richtigen Zutaten hat. Die Feinabstimmung wandert eine Etage höher.`,
              followUps: [
                {
                  id: 'generator-gesetze-einfach',
                  objection: `Die Gesetze des Generators sind einfach und elegant. Einfachheit ist doch das Gegenteil von Feinabstimmung.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Dass die tiefsten Gesetze der Natur einfach, elegant und mathematisch sind, ist selbst erklärungsbedürftig – Wigner nannte es ein Wunder, das wir weder verstehen noch verdienen. Der Naturalismus hat keinen Grund, elegante Gesetze zu erwarten; ein rationaler Schöpfer schon. Außerdem heißt „kurz aufschreibbar" nicht „wahrscheinlich unter allen möglichen Gesetzen".`,
                  sources: [{ kind: 'wissenschaft', author: 'Eugene P. Wigner', work: '„The Unreasonable Effectiveness of Mathematics in the Natural Sciences", Communications on Pure and Applied Mathematics 13, 1–14', year: '1960', quote: `Das Wunder der Angemessenheit der Sprache der Mathematik für die Formulierung der physikalischen Gesetze ist ein wunderbares Geschenk, das wir weder verstehen noch verdienen.`, original: `The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
                  followUps: [
                    {
                      id: 'tegmark-level-4',
                      objection: `Tegmark geht weiter: Alle mathematischen Strukturen existieren physikalisch (Multiversum der Ebene IV). Dann gibt es bei den Gesetzen überhaupt keinen Zufall mehr.`,
                      objectionBy: 'Max Tegmark',
                      answer: `Dann gibt es unendlich viele chaotische, hässliche, unordentliche Strukturen mit Beobachtern – und die Frage, warum wir in einer so einfachen, geordneten Welt leben, wird unlösbar. Tegmark selbst nennt das Maßproblem eine der größten Krisen der Kosmologie. Außerdem erklärt Ebene IV nicht, wie abstrakte Mathematik physikalisch wirklich werden soll.`,
                      sources: [{ kind: 'gegner', author: 'Max Tegmark', work: 'Our Mathematical Universe', year: '2014', quote: `Das Maßproblem – wie man in einem unendlichen Multiversum Wahrscheinlichkeiten definiert – ist eine ungelöste Grundfrage.`, status: 'paraphrase' }],
                      questionsBack: [`Wenn alle mathematischen Strukturen existieren: Warum erleben wir eine so einfache, gesetzmäßige?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'weinberg-vorhersage',
          objection: `Das anthropische Multiversum hat eine echte Vorhersage geliefert: Weinberg hat 1987 eine kleine, positive kosmologische Konstante abgeschätzt – 1998 wurde sie entdeckt.`,
          objectionBy: 'Steven Weinberg / Leonard Susskind',
          answer: `Eine beachtliche Leistung. Aber sie bestätigt die Aussage „Leben erfordert eine kleine kosmologische Konstante" – und die ist mit Design genauso vereinbar: Ein Schöpfer, der Leben will, „sagt" ebenfalls einen lebensfreundlichen Wert voraus. Die Beobachtung unterscheidet also nicht zwischen Multiversum und Design.`,
          detail: `Zudem liegt der beobachtete Wert nach späteren Rechnungen eher am unteren Rand dessen, was man anthropisch erwarten würde. Weinbergs Arbeit ist ein Argument dafür, dass die Konstante lebensfreundlich sein muss – nicht dafür, dass es andere Universen gibt.`,
          followUps: [
            {
              id: 'theismus-sagt-nichts-voraus',
              objection: `Aber der Theismus sagt nichts Konkretes vorher. Er ist mit allem vereinbar.`,
              objectionBy: 'Sean Carroll',
              answer: `Doch: Er lässt eine geordnete, gesetzmäßige, mathematisch verstehbare, lebensfreundliche und erforschbare Welt mit echten Beobachtern erwarten. Ein chaotisches, unverständliches oder von Boltzmann-Gehirnen dominiertes Universum würde ihn schwächen. Robin Collins und Guillermo Gonzalez haben zudem auf die auffällige Entdeckbarkeit unseres Universums hingewiesen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'genug-universen-auswahleffekt',
      objection: `Wenn es genügend Universen gibt, muss irgendeines lebensfreundlich sein – und nur in so einem können wir sitzen und uns wundern. Kein Wunder nötig.`,
      objectionBy: 'Martin Rees / Sean Carroll',
      answer: `Das funktioniert nur, wenn es die vielen Universen tatsächlich gibt – und dafür haben wir keinen unabhängigen Beleg. Aus unserer einen Beobachtung auf viele andere zu schließen, nannte der Philosoph Ian Hacking den „inversen Spielerfehlschluss": Wer einen Doppelsechser sieht, darf nicht folgern, dass vorher schon oft gewürfelt wurde.`,
      sources: [{ kind: 'fachliteratur', author: 'Ian Hacking', work: '„The Inverse Gambler’s Fallacy", Mind 96 (383), 331–340', year: '1987', quote: `Ein einzelnes unwahrscheinliches Ergebnis macht es nicht wahrscheinlicher, dass es viele Versuche gab.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'hacking-widerlegt',
          objection: `Hackings Einwand wurde widerlegt. Leslie und McGrath haben gezeigt, dass der Beobachter-Auswahleffekt die Lage verändert.`,
          objectionBy: 'Philosophische Fachdebatte',
          answer: `Ehrlich gesagt: Die Debatte ist nicht entschieden, und ich stütze mich nicht allein auf Hacking. Selbst wenn der Schluss erlaubt wäre, bräuchte das Multiversum noch einen Generator mit fein abgestimmten Gesetzen und eine Lösung des Boltzmann-Problems.`,
          followUps: [
            {
              id: 'multiversum-wahrscheinlicher-als-gott',
              objection: `Mag sein – aber ein Multiversum ist immer noch wahrscheinlicher als ein unsichtbarer Designer.`,
              objectionBy: 'Richard Dawkins',
              answer: `Warum? Ein einziger Schöpfer ist eine einfachere Hypothese als 10^500 oder unendlich viele unbeobachtbare Universen samt Generator. Außerdem erklärt der Schöpfer mehr als nur die Feinabstimmung: die Existenz von etwas überhaupt, die mathematische Verstehbarkeit, das Bewusstsein, das Moralgesetz. Das Multiversum erklärt nichts davon.`,
              questionsBack: [`Nach welchem Kriterium ist eine unendliche Zahl unbeobachtbarer Universen einfacher als ein einziger Geist?`],
            },
          ],
        },
        {
          id: 'boltzmann-masswahl',
          objection: `Boltzmann-Gehirne? Das ist ein technisches Problem der Maßwahl. Das lösen wir mit der richtigen Rechenvorschrift.`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 3,
          answer: `Du selbst hast in „Why Boltzmann Brains Are Bad" geschrieben, dass eine Kosmologie, die von solchen Gehirnen dominiert wird, kognitiv instabil ist. Um sie zu vermeiden, muss man das Maß oder die Kosmologie gezielt so wählen, dass sie nicht auftreten – das ist eine weitere Feinabstimmung, diesmal am Multiversum selbst.`,
          detail: `Ein Boltzmann-Gehirn ist ein Beobachter, der durch eine zufällige Fluktuation samt falscher Erinnerungen entsteht. In einem unendlich lange existierenden, sich ausdehnenden Universum sind solche Fluktuationen viel wahrscheinlicher als ein ganzes geordnetes Universum mit 13,8 Milliarden Jahren Geschichte. Don Page hat das Problem als Argument dafür gedeutet, dass unser Universum nicht unbegrenzt fortbestehen darf.`,
          followUps: [
            {
              id: 'mass-wie-parameter',
              objection: `Dann wählt man eben das richtige Maß – so wie man in jeder Theorie Parameter festlegt.`,
              objectionBy: 'Kosmologe (Fachdiskussion)',
              answer: `Genau das ist das Problem: Wenn man das Maß nach dem gewünschten Ergebnis wählt, sagt die Theorie nichts mehr voraus. George Ellis formulierte es so: Ein Multiversum kann fast alles erklären – und damit nichts. Eine Erklärung, die durch passende Wahl jedes Ergebnis liefert, ist keine Erklärung.`,
              followUps: [
                {
                  id: 'gott-erklaert-auch-alles',
                  objection: `Auch „Gott wollte es so" erklärt alles und damit nichts.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Nein. Der Theismus erwartet ganz bestimmte Dinge: eine geordnete, verstehbare, lebensfreundliche Welt mit echten, vernünftigen Beobachtern, ein Moralgesetz und – im christlichen Fall – ein konkretes historisches Ereignis, die Auferstehung Christi. Ein von Boltzmann-Gehirnen dominiertes Universum würde er nicht erwarten.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'multiversum-ist-physik',
      objection: `Ein Multiversum ist wenigstens Physik. Gott ist Magie.`,
      objectionBy: 'Lawrence Krauss / Neil deGrasse Tyson',
      answer: `Andere Universen liegen prinzipiell jenseits unseres Horizonts; wir können sie nie beobachten. George Ellis, Roger Penrose und Sabine Hossenfelder – keine Apologeten – sagen deshalb, es sei derzeit keine prüfbare Wissenschaft. Beide Hypothesen sind Schlüsse auf die beste Erklärung jenseits des Beobachtbaren; dann muss man sie nach Einfachheit und Erklärungskraft vergleichen.`,
      followUps: [
        {
          id: 'blasenkollisionen',
          objection: `Es gibt prüfbare Vorhersagen: Kollisionen mit anderen Blasenuniversen könnten Spuren im Mikrowellenhintergrund hinterlassen.`,
          objectionBy: 'Max Tegmark / Anthony Aguirre',
          answer: `Danach wurde gesucht, bisher ohne überzeugenden Befund. Und ein Nichtfund widerlegt das Multiversum nicht – man kann immer sagen, Kollisionen seien selten oder außerhalb unseres Sichtfelds. Eine Theorie, die durch Beobachten nur bestätigt, aber nie widerlegt werden kann, ist praktisch nicht prüfbar.`,
        },
        {
          id: 'hossenfelder-gegen-beide',
          objection: `Hossenfelder kritisiert das Multiversum – aber auch dein Feinabstimmungsargument. Sie hält beides für unwissenschaftlich.`,
          objectionBy: 'Sabine Hossenfelder',
          answer: `Richtig, und sie ist darin konsequent. Dann ist die Feinabstimmung für sie eine rohe Tatsache ohne Erklärung. Das ist eine philosophische Entscheidung. Ich halte es für vernünftiger, nach einer Erklärung zu fragen, wie wir es überall sonst tun – und beim Vergleich der Erklärungen schneidet Design besser ab.`,
        },
      ],
    },
    {
      id: 'designer-komplexer',
      objection: `Ein Designer müsste noch komplexer sein als das Universum, das er entwirft. Wer hat ihn entworfen? Gott ist die „ultimative Boeing 747".`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 4)',
      answer: `Gott ist nach klassischem Verständnis nicht aus Teilen zusammengesetzt, also nicht „komplex" im Sinn eines Mechanismus. Und um eine Erklärung als beste anzuerkennen, muss man nicht die Erklärung der Erklärung haben: Ein Archäologe darf aus einer Inschrift auf einen Schreiber schließen, ohne zu wissen, wer den Schreiber hervorgebracht hat.`,
      sources: [{ kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 4', year: '2006', quote: `Ein Designer, der ein so komplexes Universum entwirft, müsste selbst noch unwahrscheinlicher und erklärungsbedürftiger sein.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'allwissender-geist-komplex',
          objection: `Ein Geist, der alles weiß und alle Naturgesetze im Blick hat, ist unendlich komplex.`,
          objectionBy: 'Richard Dawkins',
          answer: `Komplexität des Wissens ist nicht Komplexität des Aufbaus. Ein Geist ist eine Einheit, kein Bausatz aus Teilen, die zufällig zusammenpassen müssten. Swinburne argumentiert sogar, dass ein Wesen ohne Grenzen – unbegrenzte Macht, Erkenntnis, Freiheit – die einfachste denkbare Hypothese ist, weil es keine willkürlichen Zahlen enthält.`,
          detail: `Ausführlich im Claim „Wer hat dann Gott erschaffen?".`,
        },
      ],
    },
    {
      id: 'multiversum-gegen-bibel',
      objection: `Ihr lehnt das Multiversum doch nur ab, weil es mit der Bibel unvereinbar ist.`,
      objectionBy: 'Gesprächspartner',
      answer: `Nein. Die Bibel schließt viele Universen nicht aus – der christliche Physiker Don Page hält ein Multiversum sogar für sehr gut mit dem Glauben vereinbar. Mein Einwand ist wissenschaftlich und philosophisch: fehlende Belege, Generator-Feinabstimmung, Boltzmann-Gehirne, Maßproblem. Wenn sich ein Multiversum bestätigt, ist es eben Gottes größere Schöpfung.`,
    },
  ],
  questionsToAsk: [
    `Welche Beobachtung bestätigt die Existenz anderer Universen?`,
    `Wie erzeugt der Generator lebensfreundliche Universen, ohne selbst fein abgestimmt zu sein?`,
    `Wie löst dein Modell das Boltzmann-Gehirn-Problem, ohne das Maß passend zu wählen?`,
    `Warum ist eine unendliche Zahl unbeobachtbarer Universen einfacher als ein einziger Schöpfer?`,
    `Würde dich ein bestätigtes Multiversum zum Theisten machen, wenn sich zeigte, dass sein Generator fein abgestimmt ist?`,
  ],
  avoid: [
    `„Das Multiversum ist reine Science-Fiction." – Es ist eine ernsthafte, von namhaften Physikern vertretene Hypothese. Sag: „spekulativ und unbestätigt".`,
    `„Die Bibel verbietet ein Multiversum." – Sie tut es nicht; damit schadest du dir selbst.`,
    `Behaupten, Weinbergs Vorhersage sei wertlos. Sie war eine echte Leistung – sie unterscheidet nur nicht zwischen Multiversum und Design.`,
  ],
  concessions: [
    `Das Multiversum ist eine legitime wissenschaftliche Hypothese, die aus ernsthaften Theorien (Inflation, Stringtheorie) motiviert ist.`,
    `Weinbergs anthropische Abschätzung der kosmologischen Konstante war eine beeindruckende Leistung.`,
    `Ob der „inverse Spielerfehlschluss" das Multiversum-Argument wirklich trifft, ist unter Philosophen umstritten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument", Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', year: '2016', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'George F. R. Ellis', work: '„Does the Multiverse Really Exist?", Scientific American', year: '2011', status: 'paraphrase' },
    { kind: 'gegner', author: 'Leonard Susskind', work: 'The Cosmic Landscape', year: '2005', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Roger Penrose', work: 'Fashion, Faith, and Fantasy in the New Physics of the Universe', year: '2016', status: 'paraphrase', note: 'Penrose ist kein Theist; seine Kritik an String-Landschaft und Multiversum ist rein wissenschaftlich.' },
  ],
  difficulty: 3,
  tags: ['Multiversum', 'Stringtheorie', 'Inflation', 'Boltzmann-Gehirne', 'Maßproblem', 'Feinabstimmung'],
  related: [
    'feinabstimmung/feinabstimmung-illusion',
    'feinabstimmung/anthropisches-prinzip',
    'atheismus/wer-schuf-gott',
    'naturalismus/ockham-unnoetige-hypothese',
    'mathematik/effektivitaet-der-mathematik-zufall',
    'informatik-ki/simulationshypothese',
    'kosmologie/universum-aus-dem-nichts',
  ],
};

export default claim;
