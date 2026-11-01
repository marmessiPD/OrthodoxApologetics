import type { Claim, Source } from '../../../schema.ts';

const wald1954: Source = {
  kind: 'gegner',
  author: 'George Wald',
  work: '„The Origin of Life", Scientific American 191 (2), S. 44–53',
  year: '1954',
  quote: `Die Zeit sei der eigentliche Held der Geschichte: Bei so viel Zeit werde das „Unmögliche" möglich, das Mögliche wahrscheinlich und das Wahrscheinliche nahezu gewiss; man müsse nur warten, die Zeit selbst wirke die Wunder.`,
  original: 'Time is in fact the hero of the plot. … One only has to wait: time itself performs the miracles.',
  status: 'paraphrase',
  note: 'Den Satz „One only has to wait: time itself performs the miracles." belegt die Zitatdatenbank todayinsci.com mit Scientific American 191 (2), S. 46; „hero of the plot" ist vielfach zitiert, aber nicht einzeln am Original geprüft. Darum sinngemäß zitieren. Wald erhielt 1967 den Nobelpreis für Medizin.',
};

const larralde1995: Source = {
  kind: 'wissenschaft',
  author: 'Rosa Larralde, Michael P. Robertson, Stanley L. Miller',
  work: '„Rates of decomposition of ribose and other sugars: implications for chemical evolution", PNAS 92, S. 8158–8160',
  year: '1995',
  quote: `Ribose und andere Zucker zerfallen bei neutralem pH so rasch, dass ihre Verwendung in der präbiotischen Chemie fraglich ist: Halbwertszeit der Ribose bei pH 7,0 rund 73 Minuten bei 100 °C und 44 Jahre bei 0 °C; die Autoren folgern, das erste genetische Material habe wohl keine Ribose enthalten.`,
  status: 'paraphrase',
  url: 'https://doi.org/10.1073/pnas.92.18.8158',
  note: 'Zahlen im Abstract bestätigt (PNAS 92 (18), 1995). Im Haupttext für pD 7,4 außerdem ca. 300 Tage bei 25 °C.',
};

const levyMiller1998: Source = {
  kind: 'wissenschaft',
  author: 'Matthew Levy, Stanley L. Miller',
  work: '„The stability of the RNA bases: Implications for the origin of life", PNAS 95, S. 7933–7938',
  year: '1998',
  quote: `Besonders Cytosin zerfällt (durch Desaminierung) bei höheren Temperaturen rasch; die Autoren folgern, dass ein heißer Ursprung des Lebens mit RNA-Basen problematisch ist.`,
  status: 'paraphrase',
};

const lazcanoMiller1996: Source = {
  kind: 'gegner',
  author: 'Antonio Lazcano, Stanley L. Miller',
  work: '„The Origin and Early Evolution of Life: Prebiotic Chemistry, the Pre-RNA World, and Time", Cell 85, S. 793–798',
  year: '1996',
  quote: `Die Autoren argumentieren, dass wegen der Instabilität vieler präbiotischer Verbindungen eher kurze Zeiträume (geologisch gesprochen) für die Entstehung des Lebens anzunehmen seien – lange Zeiträume helfen nicht, wenn die Produkte zerfallen.`,
  status: 'paraphrase',
};

const dembski: Source = {
  kind: 'fachliteratur',
  author: 'William A. Dembski',
  work: 'The Design Inference: Eliminating Chance through Small Probabilities',
  year: '1998 (2. Aufl. mit Winston Ewert 2023)',
  quote: `Dembski schätzt die „probabilistischen Ressourcen" des beobachtbaren Universums (Zahl der Teilchen × Zahl der möglichen Zustandsänderungen seit dem Urknall) und leitet daraus eine universelle Wahrscheinlichkeitsschranke von etwa 1 zu 10^150 ab.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'genug-zeit',
  title: `„Mit genug Zeit ist alles möglich."`,
  proponents: [
    { name: 'George Wald', role: 'Biochemiker, Nobelpreis für Medizin 1967', work: '„The Origin of Life", Scientific American (1954)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Climbing Mount Improbable (1996)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")' },
    { name: 'Lawrence Krauss', role: 'Theoretischer Physiker', work: 'Debatten zu Wahrscheinlichkeitsargumenten' },
  ],
  steelman: `Menschen haben keine Intuition für Zeiträume von Hunderten Millionen Jahren und für Ozeane mit unvorstellbar vielen Molekülen, die jede Sekunde Milliarden von Reaktionen eingehen. Was in einem Labor in einer Woche unwahrscheinlich ist, wird über geologische Zeit und auf einem ganzen Planeten fast unvermeidlich. Unwahrscheinliche Ereignisse passieren ständig: Jede gemischte Kartenhand ist astronomisch unwahrscheinlich, und trotzdem bekommt man bei jedem Spiel eine. Dazu kommt ein Auswahleffekt: Wir können nur auf einem Planeten über den Ursprung des Lebens nachdenken, auf dem es geklappt hat. Wahrscheinlichkeitsargumente der Kreationisten sind daher wertlos – sie ignorieren Zeit, Zahl der Versuche und schrittweise Prozesse. George Wald hat es 1954 auf den Punkt gebracht: Zeit ist der Held der Geschichte.`,
  biblical: {
    summary: `Die Bibel fürchtet lange Zeiträume nicht: „Tausend Jahre sind vor dir wie der Tag, der gestern vergangen ist" (Ps 90,4; vgl. 2 Petr 3,8). Zeit ist selbst Geschöpf – Gott ist vor allem Zeitlichen (Ps 90,2). Darum hängt der christliche Glaube nicht an kurzen oder langen Zeiträumen. Die Frage ist eine andere: Hat Zeit selbst schöpferische Kraft? Zeit ist kein Akteur, sondern der Rahmen, in dem Ursachen wirken.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '90,4', quote: `Denn tausend Jahre sind vor dir wie der Tag, der gestern vergangen ist, und wie eine Nachtwache.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '3,8', quote: `Eins aber sei euch unverhalten, ihr Lieben, daß ein Tag vor dem HERRN ist wie tausend Jahre, und tausend Jahre wie ein Tag.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Augustinus betonte, dass Gott nicht *in* der Zeit, sondern *mit* der Zeit die Welt schuf: Die Zeit selbst ist ein Geschöpf. Daraus folgt für die Debatte: Zeit kann nicht an die Stelle des Schöpfers treten, denn sie ist selbst Teil dessen, was erklärt werden muss.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'XI,13,15–16', quote: `Gott ist der Schöpfer aller Zeiten; es gab keine Zeit, in der Gott nichts geschaffen hätte, weil die Zeit selbst von ihm geschaffen ist.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De Civitate Dei)', ref: 'XI,6', quote: `Die Welt wurde nicht in der Zeit, sondern mit der Zeit geschaffen.`, original: 'procul dubio non est mundus factus in tempore, sed cum tempore', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Zeit ist in der Evolutionstheorie ein wichtiger Faktor, weil Selektion kleine Schritte über viele Generationen summieren kann – vorausgesetzt, es gibt bereits Vermehrung mit Vererbung. Für die Chemie *vor* dem Leben gilt das nicht: Ohne Selektion streben Reaktionsgemische dem thermodynamischen Gleichgewicht zu, also Zerfallsprodukten und Teer. Viele Lebensbausteine (Ribose, Cytosin, aktivierte Nukleotide) sind instabil. Darum argumentieren selbst OOL-Forscher wie Lazcano und Miller, dass lange Zeiträume nicht helfen. Zudem ist das Zeitfenster eng: Die Erde war wohl ab etwa 4,4 Milliarden Jahren flüssiges Wasser tragend; mögliche (umstrittene) Lebensspuren reichen bis 3,7–4,1 Milliarden Jahre zurück.`,
    sources: [lazcanoMiller1996, larralde1995, levyMiller1998,
      { kind: 'gegner', author: 'Charles H. Lineweaver, Tamara M. Davis', work: '„Does the Rapid Appearance of Life on Earth Suggest that Life Is Common in the Universe?", Astrobiology 2, S. 293–304', year: '2002', status: 'paraphrase', quote: `Das frühe Auftreten von Leben auf der Erde wird als Hinweis gedeutet, dass Leben leicht entsteht.` },
    ],
  },
  quickAnswer: `Zeit ist in der Chemie nicht der Held, sondern der Feind: Ohne Lenkung zerfallen Zuckermoleküle und RNA-Bausteine, und Gemische laufen zu Teer. Jeder Chemiker weiß, dass man eine Reaktion rechtzeitig stoppen muss. Und Zeit kann zwar beliebige Ergebnisse erzeugen, aber kein bestimmtes, funktionierendes – eine zufällige Kartenhand ist etwas anderes als zehnmal hintereinander ein Royal Flush.`,
  keyPoints: [
    `**Zeit ist kein Akteur:** Sie gibt Ursachen Gelegenheit – aber auch den zerstörenden Ursachen, und die sind in der Chemie meist schneller.`,
    `**Gleichgewicht = Zerfall:** Ohne Selektion laufen Gemische zum thermodynamischen Gleichgewicht: Monomere, Zersetzungsprodukte, Teer (Benners „Asphaltproblem").`,
    `**Instabile Bausteine:** Ribose zerfällt bei Hitze in Stunden, Cytosin desaminiert; je länger man wartet, desto weniger bleibt (Larralde 1995; Levy & Miller 1998).`,
    `**Beliebig vs. spezifiziert:** Unwahrscheinliches „passiert ständig" nur für beliebige Ergebnisse. Leben verlangt ein funktional festgelegtes Ergebnis (Dembski; Szostaks „funktionale Information").`,
    `**Begrenzte Versuche:** Auch das ganze Universum hat endlich viele „Würfe" (Dembskis Schranke ca. 10^150); die Seltenheit funktionaler Sequenzen (Axe) kann diese Zahl übersteigen.`,
    `**Selektion braucht Vererbung:** Darwins Mechanismus summiert Schritte erst, wenn Replikation schon existiert – vorher gibt es nichts zu summieren.`,
  ],
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour dreht Walds Satz um: Für den Chemiker ist Zeit der Feind. Im Labor überwacht man eine Reaktion und beendet sie („quencht" sie) im richtigen Moment, weil das gewünschte Produkt sonst weiterreagiert oder zerfällt. Ein Gemisch, das man über Wochen sich selbst überlässt, wird nicht komplexer im biologischen Sinn, sondern zu einem braunen, unbrauchbaren Teer – dem thermodynamisch begünstigten Endzustand. Zucker wie Ribose sind dafür das Paradebeispiel.

Tour betont außerdem: Die präbiotische Chemie hat kein Ziel. Ohne Ziel gibt es keinen Grund, warum ein instabiles Zwischenprodukt nicht einfach wieder zerfällt, bevor der nächste Schritt eintritt. Lange Zeiträume vermehren diese Rückschritte ebenso wie die Fortschritte.`,
      sources: [
        { kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', quote: `Tour erläutert, dass präbiotische Reaktionen über die Zeit zu Zersetzung und Teerbildung führen und dass Chemiker Reaktionen gezielt stoppen müssen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'dembski',
      role: 'als Mathematiker',
      text: `Dembski unterscheidet zwischen bloßer Unwahrscheinlichkeit und **spezifizierter** Unwahrscheinlichkeit: Ein beliebiges Ergebnis (eine Kartenhand, ein Würfelwurf) ist immer unwahrscheinlich, aber nicht auffällig. Auffällig ist ein unwahrscheinliches Ergebnis, das einem unabhängig gegebenen Muster entspricht – z. B. eine Funktion. Um Zufall auszuschließen, muss man die „probabilistischen Ressourcen" berücksichtigen, also die Zahl aller möglichen Versuche. Dembski schätzt sie für das gesamte beobachtbare Universum ab und kommt auf eine Schranke von rund 10^150. „Genug Zeit" ist also eine berechenbare, endliche Größe – kein Freibrief.`,
      sources: [dembski],
    },
    {
      person: 'douglas-axe',
      role: 'als Molekularbiologe',
      text: `Axe hat experimentell abgeschätzt, wie selten Aminosäuresequenzen sind, die sich zu einer funktionsfähigen Enzymstruktur falten: für eine Domäne von etwa 150 Aminosäuren in der Größenordnung von 1 zu 10^77. Wenn schon ein einzelnes Protein so selten ist, hilft auch geologische Zeit kaum: Die Zahl der Versuche, die auf der frühen Erde realistisch möglich waren, ist um viele Größenordnungen kleiner. Axe betont, dass diese Zahl umstritten ist – aber selbst sehr viel großzügigere Schätzungen lassen das Problem bestehen, weil eine Zelle Hunderte solcher Proteine gleichzeitig braucht.`,
      sources: [{ kind: 'wissenschaft', author: 'Douglas D. Axe', work: '„Estimating the Prevalence of Protein Sequences Adopting Functional Enzyme Folds", Journal of Molecular Biology 341, S. 1295–1315', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker (Thermodynamik)',
      text: `Miller erinnert daran, dass die Thermodynamik die Richtung vorgibt, in die Systeme mit der Zeit laufen: zum Gleichgewicht. Lebende Systeme halten sich nur fern vom Gleichgewicht, weil sie Energie über molekulare Maschinen in bestimmte Reaktionen lenken. Mehr Zeit ohne solche Maschinen bedeutet nicht mehr Ordnung, sondern mehr Gelegenheit zum Abbau.`,
      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Zeit',
      text: `Für Augustinus ist die Zeit selbst geschaffen; sie existiert nur, weil es veränderliche Geschöpfe gibt. Deshalb kann Zeit nicht das sein, was die Existenz und Ordnung der Geschöpfe erklärt – sie ist eine Dimension dieser Ordnung. Augustinus' Einsicht entschärft auch die Sorge vieler Christen vor großen Zeiträumen: Gott steht über der Zeit, ob sie kurz oder lang ist.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI', status: 'paraphrase', quote: `Die Zeit ist mit der Schöpfung entstanden; vor der Schöpfung gab es kein „Damals".` }],
    },
  ],
  dialog: [
    {
      id: 'milliarden-jahre-ozeane',
      objection: `Bei Hunderten Millionen Jahren und Ozeanen voller Moleküle passiert auch das Unwahrscheinlichste. Zeit ist der Held der Geschichte.`,
      objectionBy: 'George Wald (zitiert von Richard Dawkins)',
      answer: `Zeit vervielfacht nicht nur aufbauende, sondern auch zerstörende Reaktionen – und die sind in der Chemie meist schneller und thermodynamisch begünstigt. Jeder Chemiker weiß: Lässt man eine Reaktion zu lange laufen, bekommt man Teer. Ribose zerfällt bei Hitze in Stunden. Zeit ist hier nicht der Held, sondern der Gegenspieler.`,
      sources: [wald1954, larralde1995],
      questionsBack: [
        `Welcher Mechanismus schützt die Zwischenprodukte über Millionen Jahre vor dem Zerfall?`,
        `Kannst du ein Laborexperiment nennen, in dem ein ungelenktes Gemisch mit der Zeit biologisch geordneter wurde?`,
      ],
      followUps: [
        {
          id: 'kaelte-mineralien-schuetzen',
          objection: `Dann bewahren eben Kälte oder Mineraloberflächen die Produkte.`,
          answer: `Kälte verlangsamt den Zerfall – aber genauso die Bildung. Mineralien binden Moleküle, behindern damit aber auch die nächsten Reaktionen und liefern eigene Nebenreaktionen. Tour nennt das Muster: Jede Lösung eines Problems verlangt eine neue, spezielle Bedingung, und diese Bedingungen widersprechen sich oft gegenseitig.`,
          followUps: [
            {
              id: 'rosinen-picken-probleme',
              objection: `Du pickst dir nur die Probleme heraus und ignorierst die Fortschritte.`,
              objectionBy: 'Dave Farina',
              answer: `Diese Probleme stammen nicht von mir, sondern aus der Fachliteratur: Benner spricht vom „Asphalt-" und „Wasserproblem", Lazcano und Miller argumentieren wegen der Instabilität sogar für kurze Zeiträume. Ich erkenne die Fortschritte an – aber sie heben diese Grundprobleme nicht auf.`,
              sources: [lazcanoMiller1996, { kind: 'wissenschaft', author: 'Steven A. Benner', work: '„Paradoxes in the Origin of Life", Origins of Life and Evolution of Biospheres 44, S. 339–343', year: '2014', status: 'paraphrase', quote: `Benner beschreibt grundlegende Paradoxien, u. a. dass organische Gemische unter Energiezufuhr zu Teer werden und Wasser die Bindungen der Biopolymere zerstört.` }],
              followUps: [
                {
                  id: 'benner-borat-loesungen',
                  objection: `Benner hat die Probleme nicht nur benannt, sondern auch Lösungen vorgeschlagen: Borat-Minerale stabilisieren Ribose, Molybdat lenkt die Zucker-Umlagerung, Wüsten lösen das Wasserproblem. Er ist optimistisch.`,
                  objectionBy: 'Steven Benner',
                  answer: `Das stimmt, und Benners Arbeiten gehören zum Besten, was das Feld hat. Aber sieh dir das Muster an: Für Ribose braucht es boratreiche Wüsten, für das Wasserproblem Trockenheit, für Molybdat oxidierende Bedingungen – und Benner selbst hat 2013 vorgeschlagen, das Leben sei deshalb womöglich auf dem Mars entstanden, weil die frühe Erde diese Bedingungen schlecht bot. Wenn jede Lösung eine neue Spezialumgebung verlangt, wird der Weg nicht kürzer, sondern verzweigter.`,
                  detail: `**Was Benner gezeigt hat:** Borat bildet mit Ribose Komplexe, die den Zucker vor dem raschen Zerfall schützen (Ricardo et al., Science 2004). Das ist echte Chemie und ein Fortschritt gegenüber dem „Asphaltproblem".

**Was daraus folgt:** Die Lösung verlangt einen besonderen Ort (boratreiche, wechselfeuchte Wüstenbecken), der wiederum mit anderen Anforderungen konkurrieren kann – etwa der Verfügbarkeit von Phosphat oder den Bedingungen für die Nukleotidbildung. Die Pressemeldungen zu Benners Vortrag auf der Goldschmidt-Konferenz 2013 („Wir alle könnten Marsianer sein") zeigen, wie ernst er die Schwierigkeiten nimmt.

Für dich: Anerkennen, nicht spotten. Dann fragen, ob die verschiedenen Spezialbedingungen am selben Ort und in der richtigen Reihenfolge zusammenkommen – ohne dass jemand die Produkte von einem Becken ins nächste trägt.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Alonso Ricardo, Matthew A. Carrigan, Alison N. Olcott, Steven A. Benner', work: '„Borate Minerals Stabilize Ribose", Science 303, S. 196', year: '2004', quote: `Borat-Minerale stabilisieren Ribose, die sonst unter präbiotischen Bedingungen rasch zerfällt.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Steven A. Benner', work: 'Vortrag auf der Goldschmidt-Konferenz, Florenz (breit berichtet)', year: '2013', quote: `Benner argumentierte, Borat und oxidiertes Molybdän seien auf dem frühen Mars leichter verfügbar gewesen; das Leben könne dort entstanden und per Meteorit zur Erde gelangt sein.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Lassen sich boratreiche Wüste, Phosphatquelle und die Bedingungen für die Nukleotidbildung an einem Ort und in der richtigen Reihenfolge vereinen – ohne Transport durch einen Chemiker?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kartenhand',
      objection: `Unwahrscheinliches passiert ständig. Jede Kartenhand beim Bridge ist astronomisch unwahrscheinlich – trotzdem bekommt jeder eine.`,
      objectionBy: 'Lawrence Krauss',
      answer: `Richtig für *beliebige* Ergebnisse. Aber wenn jemand zehnmal hintereinander den perfekten Royal Flush erhält, ruft man nicht „Unwahrscheinliches passiert ständig", sondern prüft die Karten. Leben verlangt kein beliebiges, sondern ein funktional festgelegtes Ergebnis – Moleküle, die sich falten, katalysieren, kopieren.`,
      sources: [dembski],
      followUps: [
        {
          id: 'texas-scharfschuetze',
          objection: `Die „Spezifikation" legst du erst hinterher fest – wie der texanische Scharfschütze, der die Zielscheibe um das Einschussloch malt.`,
          answer: `Nein: Ob ein Molekül eine Reaktion katalysiert oder sich kopiert, ist unabhängig von meinem Wunsch. Funktion ist ein objektives Kriterium – genau deshalb haben Jack Szostak und Kollegen „funktionale Information" als Maß eingeführt: den Anteil der Sequenzen, die eine bestimmte Funktion erfüllen.`,
          sources: [{ kind: 'wissenschaft', author: 'Robert M. Hazen, Patrick L. Griffin, James M. Carothers, Jack W. Szostak', work: '„Functional information and the emergence of biocomplexity", PNAS 104 (Suppl. 1), S. 8574–8581', year: '2007', status: 'paraphrase' }],
          followUps: [
            {
              id: 'viele-lebensformen',
              objection: `Vielleicht gibt es unzählige mögliche Lebensformen, nicht nur unsere. Dann ist die Zielscheibe riesig.`,
              answer: `Ein faires Argument – niemand kennt die genaue Größe. Aber selbst großzügige Schätzungen helfen wenig: Ein minimal lebensfähiges System braucht viele verschiedene Funktionen gleichzeitig (Vermehrung, Stoffwechsel, Hülle), und die Seltenheiten multiplizieren sich. „Vielleicht gibt es viele Wege" ist eine Hoffnung, keine gezeigte Möglichkeit.`,
            },
          ],
        },
      ],
    },
    {
      id: 'leben-entstand-schnell',
      objection: `Das Leben trat sehr früh in der Erdgeschichte auf. Das zeigt, dass es leicht entsteht.`,
      objectionBy: 'Charles Lineweaver',
      answer: `Interessant – aber damit ist das Argument „genug Zeit" aufgegeben: Wenn Leben schnell auftrat, war wenig Zeit da. Ein früher Ursprung passt ebenso gut zu einer Schöpfung wie zu einem leichten Naturprozess, und wir haben genau einen Fall, die Erde – keine Statistik.`,
      followUps: [
        {
          id: 'anthropischer-auswahleffekt',
          objection: `Auswahleffekt: Wir sehen natürlich nur Planeten, auf denen es geklappt hat.`,
          answer: `Das erklärt, warum *wir* Leben beobachten – nicht, *wie* es entstand. Der Auswahleffekt setzt voraus, dass es genug Versuche gibt, und sagt nichts über die Wahrscheinlichkeit pro Versuch. Wer ihn nutzt, gibt implizit zu, dass der Vorgang sonst unwahrscheinlich ist.`,
          followUps: [
            {
              id: 'koonin-multiversum',
              objection: `Ich sage es offen: In unserem beobachtbaren Universum ist die zufällige Entstehung eines gekoppelten Replikations- und Übersetzungssystems praktisch ausgeschlossen. Aber nach dem Modell der ewigen Inflation gibt es unendlich viele Regionen. Dort geschieht alles, was physikalisch möglich ist, unendlich oft – auch der Ursprung des Lebens. Wir leben eben in einer solchen Region.`,
              objectionBy: 'Eugene Koonin',
              answer: `Ich schätze Koonins Ehrlichkeit: Er gibt den entscheidenden Punkt zu – in unserem Universum reichen Zeit und Material nicht aus. Seine eigene Abschätzung liegt bei einer Wahrscheinlichkeit unter 1 zu 10^1018. Die Rettung ist ein unendliches, prinzipiell unbeobachtbares Multiversum. Damit ist „genug Zeit" durch „unendlich viele Welten" ersetzt – und eine Erklärung, die jedes Ereignis „unvermeidlich" macht, erklärt am Ende nichts Bestimmtes.`,
              detail: `**Was Koonin sagt:** In *Biology Direct* (2007) und ausführlicher in *The Logic of Chance* (2011, Anhang B) schätzt der Evolutionsbiologe Eugene Koonin (NCBI), dass schon ein minimales gekoppeltes System aus Replikation und Übersetzung – Dutzende RNA-Moleküle mit insgesamt etwa 1800 Nukleotiden – zufällig entstehen müsste, bevor Darwins Selektion überhaupt greifen kann. Die Wahrscheinlichkeit dafür in einem einzelnen beobachtbaren Universum gibt er mit kleiner als 10^-1018 an. Erst in einem unendlichen Multiversum werde das Ereignis unvermeidlich.

**Wie du antwortest:**
1. **Würdigen:** Koonin ist kein Kreationist, sondern einer der meistzitierten Evolutionsbiologen. Sein Zugeständnis zeigt, dass das Wahrscheinlichkeitsproblem real ist.
2. **Benennen:** Das Multiversum ist kein chemischer Mechanismus, sondern ein Ausweichen ins Unendliche. Es lässt sich nicht beobachten und nicht testen.
3. **Konsequenz zeigen:** Mit derselben Logik könnte man jedes noch so auffällige Muster – auch ein scheinbar entworfenes – mit „irgendwo musste es passieren" erklären. Dann verliert die Wissenschaft die Möglichkeit, zwischen Zufall und Ursache zu unterscheiden.
4. **Vergleich anbieten:** Zwei Erklärungen stehen nebeneinander – unendlich viele unbeobachtbare Welten oder ein Geist, von dem wir wissen, dass er Information hervorbringt.`,
              voices: [
                {
                  person: 'stephen-meyer',
                  role: 'als Wissenschaftsphilosoph',
                  text: `Meyer bespricht in *Return of the God Hypothesis* das Multiversum als Antwort auf Feinabstimmung und Informationsproblem. Sein Einwand: Ein Multiversum-Generator müsste selbst fein abgestimmt sein, und die Hypothese ist so beschaffen, dass sie jede Beobachtung erklären könnte – damit verliert sie Erklärungskraft. Im Vergleich dazu sei der Schluss auf Intelligenz sparsamer, weil er auf eine bekannte Ursache von Information zurückgreift.`,
                  sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', ref: 'Kap. zum Multiversum', year: '2021', status: 'paraphrase', quote: `Meyer argumentiert, dass Multiversum-Erklärungen einen fein abgestimmten Generator voraussetzen und an Erklärungskraft verlieren, weil sie alles erklären könnten.` }],
                },
              ],
              sources: [
                { kind: 'gegner', author: 'Eugene V. Koonin', work: '„The cosmological model of eternal inflation and the transition from chance to biological evolution in the history of life", Biology Direct 2:15', year: '2007', quote: `Ein gekoppeltes Replikations-Translations-System entstehe in einem Multiversum der ewigen Inflation durch reinen Zufall unendlich oft, obwohl die Wahrscheinlichkeit seines Auftretens in jeder gegebenen Region verschwindend klein sei.`, status: 'paraphrase', url: 'https://doi.org/10.1186/1745-6150-2-15' },
                { kind: 'gegner', author: 'Eugene V. Koonin', work: 'The Logic of Chance: The Nature and Origin of Biological Evolution', ref: 'Kap. 12 und Anhang B', year: '2011', quote: `Die Wahrscheinlichkeit, dass ein gekoppeltes Translations-Replikations-System in einem einzelnen beobachtbaren Universum zufällig entsteht, sei kleiner als 10^-1018.`, status: 'paraphrase', note: 'Zahl und Fundstelle (Anhang B) nach mehreren übereinstimmenden Wiedergaben, u. a. der Rezension von Gert Korthof; Koonin rechnet bewusst mit großzügigen Annahmen.' },
              ],
              questionsBack: [
                `Wenn ein unendliches Multiversum jedes Ereignis unvermeidlich macht – welche Beobachtung könnte diese Erklärung je widerlegen?`,
                `Warum ist eine unendliche Zahl unbeobachtbarer Welten sparsamer als ein Geist, von dem wir wissen, dass er Information erzeugt?`,
              ],
              followUps: [
                {
                  id: 'multiversum-erklaert-alles',
                  objection: `Das Multiversum ist keine Ausrede. Es folgt aus der Inflationstheorie, und die Inflation ist durch Messungen der kosmischen Hintergrundstrahlung gut gestützt.`,
                  objectionBy: 'Lawrence Krauss',
                  answer: `Die Inflation hat Unterstützung, das gebe ich zu. Aber dass sie *ewig* läuft und unendlich viele Blasenuniversen erzeugt, ist eine Extrapolation, die selbst Mitbegründer der Inflationstheorie wie Paul Steinhardt scharf kritisieren – gerade weil sie alles und damit nichts vorhersagt. Und eine Theorie, in der auch zufällig entstehende Beobachter ohne Geschichte unendlich oft vorkommen, untergräbt das Vertrauen in unsere eigenen Beobachtungen.`,
                  detail: `**Steinhardts Kritik:** Paul Steinhardt, einer der Väter der Inflationstheorie, schrieb 2011 in *Scientific American*, ewige Inflation führe zu einem Multiversum, in dem jedes Ergebnis unendlich oft vorkommt; damit verliere die Theorie ihre Vorhersagekraft.

**Das Boltzmann-Gehirn-Problem:** In vielen Multiversum-Szenarien sind einzelne, zufällig aus Fluktuationen entstandene „Beobachter" mit falschen Erinnerungen weit häufiger als Beobachter, die aus einer echten Geschichte hervorgehen. Kosmologen behandeln das als ernstes Problem, weil es die Zuverlässigkeit jeder Messung in Frage stellt.

**Die tiefere Frage:** Selbst ein Multiversum braucht Gesetze, einen Mechanismus und Anfangsbedingungen. Robin Collins hat argumentiert, dass ein Universen-Generator, der lebensfreundliche Welten hervorbringen kann, selbst fein abgestimmt sein müsste. Das Problem wird verschoben, nicht gelöst.

Theologisch erinnert Augustinus daran, dass Zeit und Welt Geschöpfe sind – auch eine unendliche Zahl von Welten wäre Schöpfung und keine Selbsterklärung.`,
                  voices: [
                    {
                      person: 'robin-collins',
                      role: 'als Philosoph der Physik',
                      text: `Collins argumentiert, dass auch der Mechanismus eines Multiversums – etwa ein Inflationsfeld mit passenden Gesetzen – genau die richtigen Eigenschaften haben müsste, um lebensfreundliche Universen hervorzubringen. Der Multiversum-Generator verlangt daher selbst eine Erklärung; er verschiebt die Frage nach der Feinabstimmung eine Ebene höher.`,
                      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: W. L. Craig, J. P. Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' }],
                    },
                  ],
                  sources: [
                    { kind: 'wissenschaft', author: 'Paul J. Steinhardt', work: '„The Inflation Debate: Is the theory at the heart of modern cosmology deeply flawed?", Scientific American 304 (4)', year: '2011', quote: `Ewige Inflation erzeuge ein Multiversum, in dem jedes mögliche Ergebnis unendlich oft eintritt; damit verliere die Theorie ihre Vorhersagekraft.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Welche Vorhersage des Multiversums könnte man so prüfen, dass ein negatives Ergebnis die These widerlegt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evolution-zeigt-zeit',
      objection: `Die Evolution zeigt doch, dass Zeit aus Einfachem Komplexes macht.`,
      objectionBy: 'Richard Dawkins',
      answer: `Darwins Mechanismus summiert kleine Schritte, weil erfolgreiche Varianten sich vermehren und ihre Eigenschaften vererben. Vor dem ersten sich selbst kopierenden System gibt es diese Summierung nicht – jede Verbesserung kann sofort wieder zerfallen. Dawkins' „Berg des Unwahrscheinlichen" hat für den Ursprung des Lebens keine sanfte Rückseite.`,
      followUps: [
        {
          id: 'chemische-evolution-kauffman',
          objection: `Es gibt chemische Evolution: Autokatalytische Netzwerke sind eine Vorform der Selektion (Kauffman).`,
          objectionBy: 'Stuart Kauffman',
          answer: `Als Idee interessant; experimentell gezeigt wurden solche Netzwerke aber nur mit von Chemikern entworfenen, gereinigten Molekülen. Dazu mehr im Claim zur Selbstorganisation.`,
          followUps: [
            {
              id: 'energiefluss-offenes-system',
              objection: `Dein Teer-Argument gilt für einen geschlossenen Kolben. Die frühe Erde war ein offenes System mit ständigem Energiefluss – Sonne, Erdwärme, chemische Gradienten. Energiefluss erzeugt Ordnung, wie Konvektionszellen und Wirbelstürme zeigen. Leben ist im Kern ein Weg, Energiegefälle abzubauen.`,
              objectionBy: 'Nick Lane',
              answer: `Einverstanden: Die Erde ist offen, und der zweite Hauptsatz verbietet Ordnung nicht – das behaupte ich nicht. Aber Energiefluss allein erzeugt einfache, sich wiederholende Muster, die verschwinden, sobald die Energie wegfällt: Konvektionszellen speichern keine Information. Ungelenkte Energie – UV-Licht, Hitze – bricht Bindungen genauso schnell, wie sie welche knüpft. Lebewesen nutzen Energie nur über spezielle Wandler wie die ATP-Synthase. Die Frage ist, wie Energie *ohne* solche Maschinen gezielt in nützliche Arbeit gelenkt wurde.`,
              detail: `**Dissipative Strukturen** (Ilya Prigogine): Bénard-Zellen, Wirbelstürme, chemische Oszillationen. Sie zeigen, dass Ordnung im Energiefluss entstehen kann – aber diese Ordnung ist **Wiederholung**, nicht **Spezifikation**. Ein Wirbelsturm enthält keine Bauanleitung für den nächsten.

**Kopplung als Kernproblem:** Nick Lane betont in *The Vital Question* selbst, dass Zellen Energie über Gradienten und Membranproteine nutzen, und sucht deshalb einen Ort mit natürlichen Gradienten (alkalische Hydrothermalquellen). Die offene Frage bleibt, wie Gradienten ohne Proteine an den Aufbau bestimmter Moleküle gekoppelt wurden – siehe den Claim zu hydrothermalen Quellen.

**Thermodynamik ehrlich:** Der Physiker Brian Miller unterscheidet zwischen Energie*zufuhr* und Energie*lenkung*: Ein Auto wird nicht gebaut, indem man Benzin in einer Fabrikhalle verbrennt.`,
              voices: [
                {
                  person: 'brian-miller',
                  role: 'als Physiker (Thermodynamik)',
                  text: `Miller weist darauf hin, dass Lebewesen sich nicht einfach im Energiefluss befinden, sondern Energie über molekulare Maschinen in ganz bestimmte, sonst ungünstige Reaktionen lenken. Ohne diese Kopplung steigert zusätzliche Energie vor allem die Geschwindigkeit des Zerfalls. Die Entstehung der ersten Energiewandler ist daher selbst Teil des Rätsels, nicht seine Lösung.`,
                  sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
                },
              ],
              sources: [{ kind: 'gegner', author: 'Nick Lane', work: 'The Vital Question: Energy, Evolution, and the Origins of Complex Life', year: '2015', quote: `Lane stellt Energieflüsse und natürliche Protonengradienten ins Zentrum der Frage nach dem Ursprung des Lebens.`, status: 'paraphrase' }],
              questionsBack: [`Welche dissipative Struktur speichert eine Abfolge, die die nächste Generation festlegt?`],
              followUps: [
                {
                  id: 'england-dissipative-anpassung',
                  objection: `Die Physik geht weiter: Getriebene Systeme finden von selbst Anordnungen, die Energie besonders gut aufnehmen und wieder abgeben. Das sieht aus wie Anpassung, ohne dass es dafür schon Darwin braucht – „dissipative Anpassung". Leben ist vielleicht nur der beste Energieverteiler.`,
                  objectionBy: 'Jeremy England',
                  answer: `Englands Arbeiten sind seriöse Physik, und ich gebe zu: Sie zeigen, dass Materie unter Antrieb Strukturen bevorzugen kann, die Energie gut aufnehmen. Aber „gut Energie verteilen" ist etwas anderes als einen Code tragen, der die eigene Herstellung beschreibt. England selbst sagt nicht, er habe den Ursprung des Lebens erklärt – und als praktizierender orthodoxer Jude sieht er seine Physik auch nicht als Widerlegung des Schöpfers.`,
                  detail: `**Was die These leistet:** Englands statistische Physik (u. a. *Journal of Chemical Physics* 2013) beschreibt, wie Selbstreplikation und energieaufnehmende Strukturen in getriebenen Systemen thermodynamisch begünstigt sein können. In *Every Life Is on Fire* (2020) entfaltet er das allgemeinverständlich.

**Was sie nicht leistet:**
- Sie erklärt eine **Tendenz**, keine bestimmte **Architektur** – etwa die Trennung von Bauplan (DNA/RNA) und Bauteilen (Proteine) mit einem Übersetzungscode dazwischen.
- Sie sagt nichts darüber, warum gerade *diese* Sequenzen entstehen sollten.
- Englands Modelle sind Computersimulationen und Gedankenexperimente; ein präbiotischer Weg zur Zelle ist damit nicht gezeigt.

**Fair bleiben:** Benutze England nicht als „Kronzeugen für Gott", sondern als Beispiel dafür, dass auch ein führender Physiker dieser Richtung Naturgesetz und Schöpfer nicht gegeneinanderstellt.`,
                  sources: [
                    { kind: 'gegner', author: 'Jeremy L. England', work: '„Statistical physics of self-replication", Journal of Chemical Physics 139, 121923', year: '2013', quote: `Selbstreplikation wird als Prozess beschrieben, der thermodynamisch mit Wärmeabgabe und Irreversibilität verknüpft ist.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Jeremy England', work: 'Every Life Is on Fire: How Thermodynamics Explains the Origins of Living Things', year: '2020', quote: `England entfaltet die These der „dissipativen Anpassung" und verbindet sie mit Reflexionen über Glaube und biblische Texte.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Welche Simulation dissipativer Anpassung hat einen Code hervorgebracht, bei dem eine Abfolge eine andere festlegt?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was genau tut die Zeit? Welche Ursache wirkt in ihr, die Ordnung aufbaut statt zerstört?`,
    `Warum argumentieren selbst Lazcano und Miller, dass lange Zeiträume wegen der Instabilität nicht helfen?`,
    `Würdest du einen Royal Flush in zehn Runden hintereinander mit „Unwahrscheinliches passiert ständig" erklären?`,
    `Wie viele Versuche hatte die frühe Erde realistisch – und wie selten sind funktionale Sequenzen?`,
  ],
  avoid: [
    `„Die Wahrscheinlichkeit ist 1 zu 10 hoch 40.000, also unmöglich" – ohne Quelle und Rechenweg; wirkt unseriös. Nenne lieber Belege aus der Fachliteratur (Zerfallsraten, Axes Abschätzung mit Vorbehalt).`,
    `„Der Zweite Hauptsatz verbietet Ordnung" – falsch für offene Systeme; verliert jede Debatte mit Physikern.`,
  ],
  concessions: [
    `Unwahrscheinliche beliebige Ereignisse geschehen tatsächlich ständig; das Argument muss sich auf funktional spezifizierte Ergebnisse stützen.`,
    `Genaue Wahrscheinlichkeiten für den Lebensursprung kann niemand berechnen – weder für noch gegen.`,
  ],
  furtherReading: [
    dembski,
    { kind: 'fachliteratur', author: 'Douglas Axe', work: 'Undeniable: How Biology Confirms Our Intuition That Life Is Designed', year: '2016', status: 'paraphrase' },
    lazcanoMiller1996,
  ],
  difficulty: 1,
  tags: ['Zeit', 'Wahrscheinlichkeit', 'Thermodynamik', 'Zerfall'],
  related: ['ursprung-des-lebens/rna-welt', 'chemie-biochemie/selbstorganisation', 'mathematik/unwahrscheinliches-passiert-staendig', 'feinabstimmung/anthropisches-prinzip'],
};

export default claim;
