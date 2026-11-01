import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mutation-selektion-erklaeren-alles',
  title: `„Mutation und Selektion erklären alle biologische Komplexität."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Climbing Mount Improbable (1996); The Blind Watchmaker (1986)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Richard E. Lenski', role: 'Mikrobiologe, Michigan State University (Langzeitexperiment mit E. coli)', work: 'Lenski u. a., „The evolutionary origin of complex features", Nature 423 (2003)' },
    { name: 'Nathan H. Lents', role: 'Biologe, John Jay College (CUNY)', work: 'Lents, Swamidass & Lenski, „The end of evolution?", Science 363 (2019) – Rezension von Behes „Darwin Devolves"' },
    { name: 'Dan Stern Cardinale', role: 'Evolutionsbiologe und Wissenschaftskommunikator', work: 'Videokritiken zu Behe und zum Discovery Institute' },
  ],
  steelman: `Natürliche Selektion ist kein Zufall, sondern ein Sieb, das über Millionen Generationen kleine Vorteile anhäuft. Gen-Duplikationen liefern Rohmaterial, das frei variieren kann; Rekombination mischt erfolgreiche Varianten; neutrale Drift erkundet riesige Netzwerke funktionsgleicher Sequenzen, aus denen gelegentlich neue Funktionen erreichbar werden; bestehende Teile werden für neue Aufgaben umfunktioniert (Kooption). Wir sehen das in Echtzeit: Bakterien entwickeln Resistenzen, Lenskis E. coli lernten Citrat zu verwerten, Antarktisfische bauten aus einem Verdauungsenzym-Gen und nichtkodierender DNA ein Frostschutzprotein. Bei Bakterienpopulationen von Billionen Zellen und Zeiträumen von Milliarden Jahren ist das „Unwahrscheinliche" unvermeidlich. Wer behauptet, irgendein System sei unerreichbar, argumentiert aus persönlicher Ungläubigkeit – und die Geschichte der Biologie ist voll von solchen „Unmöglichkeiten", die später erklärt wurden.`,
  biblical: {
    summary: `Die Schrift kennt keinen „Zufall", der Gott Konkurrenz macht: Selbst das geworfene Los fällt, „wie der HERR will" (Spr 16,33), und kein Sperling fällt ohne den Vater (Mt 10,29). Was der Wissenschaft als statistisch zufällig erscheint, kann im Glauben zugleich von Gottes Vorsehung umfangen sein. Die Bibel behauptet daher nicht, dass Mutation und Selektion unmöglich wirken – wohl aber, dass die Schöpfung Weisheit verrät (Ps 104,24) und Gottes Lebensatem Geschöpfe hervorbringt (Ps 104,30).`,
    detail: `Für das Gespräch heißt das: Du musst nicht beweisen, dass Gott „Lücken" füllt. Die eigentliche Frage ist eine empirische: Können die bekannten Mechanismen das leisten, was ihnen zugeschrieben wird? Diese Frage darf man mit Zahlen und Experimenten untersuchen – und gerade dort zeigen sich bemerkenswerte Grenzen.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '16,33', translation: 'Luther 1912', status: 'verbatim', quote: `Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will.` },
      { kind: 'bibel', work: 'Matthäus', ref: '10,29', translation: 'Luther 1912', status: 'verbatim', quote: `Kauft man nicht zwei Sperlinge um einen Pfennig? Noch fällt deren keiner auf die Erde ohne euren Vater.` },
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', translation: 'Luther 1912', status: 'verbatim', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.` },
      { kind: 'bibel', work: 'Psalmen', ref: '104,30', translation: 'Luther 1912', status: 'verbatim', quote: `Du lässest aus deinen Odem, so werden sie geschaffen, und erneuerst die Gestalt der Erde.` },
    ],
  },
  church: {
    summary: `Die koptische Kirche legt keinen biologischen Mechanismus dogmatisch fest. Sie lehrt aber, dass Gott die Schöpfung nicht nur am Anfang ins Dasein rief, sondern sie fortwährend erhält und lenkt. Ein Mechanismus, der als **ausschließlich** zufällig und ziellos verstanden wird, widerspricht dieser Lehre; ein Mechanismus, in dem Gott durch geschaffene Ursachen wirkt, nicht.`,
    detail: `Basilius sieht im Schöpfungsbefehl ein in die Natur gelegtes Gesetz, das fortwirkt. Athanasius betont, dass der Logos die Welt ordnet und erhält. Daher kann ein Christ sagen: Selbst wenn Mutation und Selektion vieles erklären, erklären sie nicht sich selbst – nicht die Naturgesetze, nicht die Feinabstimmung der Biochemie, nicht die Existenz von Information, auf der die Selektion operiert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilie 5', status: 'paraphrase', quote: `Der erste Befehl „Die Erde bringe hervor" ist wie ein Gesetz der Natur, das in der Erde bleibt und ihr für alle Zeit Fruchtbarkeit verleiht.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '43–44', status: 'paraphrase', quote: `Der Logos lenkt das All mit seiner Weisheit und erhält jedes Geschöpf im Sein.` },
    ],
  },
  opposingView: {
    summary: `Die Standardtheorie nennt als Evolutionsfaktoren Mutation (einschließlich Duplikation, Insertion, Rekombination), natürliche Selektion, genetische Drift und Genfluss; hinzu kommen horizontaler Gentransfer und Kooption. Viele Biologen halten diese Faktoren für grundsätzlich ausreichend. Andere betonen die Rolle neutraler Prozesse (Kimura, Lynch, Moran) oder fordern Erweiterungen (Entwicklungsbiologie, Epigenetik). Experimentell gut belegt sind Anpassungen durch wenige Mutationen, häufig durch Modifikation oder Verlust bestehender Funktionen. Wie oft und wie leicht wirklich **neue, vielteilige** Funktionen entstehen, ist der eigentliche Streitpunkt.`,
    detail: `Ehrlich festhalten: (1) Beispiele für echte Neuerungen existieren – etwa das Frostschutz-Glykoprotein der Antarktisfische (Chen, DeVries & Cheng 1997) oder Cit+ im Lenski-Experiment. (2) Diese Beispiele betreffen jedoch einfache, repetitive Proteine oder Umschaltungen der Regulation bestehender Gene. (3) Empirische Grenzschätzungen stammen nicht nur von ID-Vertretern: Durrett & Schmidt (Genetics 2008) berechneten für koordinierte Mutationspaare in der menschlichen Linie sehr lange Wartezeiten – auch wenn sie Behes Folgerungen ausdrücklich kritisieren.`,
    sources: [
      { kind: 'wissenschaft', author: 'Liangbiao Chen, Arthur L. DeVries, Chi-Hing C. Cheng', work: '„Evolution of antifreeze glycoprotein gene from a trypsinogen gene in Antarctic notothenioid fish", PNAS 94', ref: 'S. 3811–3816', year: '1997', status: 'paraphrase', quote: `Das Frostschutz-Glykoprotein-Gen entstand aus Teilen eines Trypsinogen-Gens und einem kurzen, vielfach wiederholten Sequenzabschnitt.` },
      { kind: 'wissenschaft', author: 'Rick Durrett, Deena Schmidt', work: '„Waiting for two mutations: with applications to regulatory sequence evolution and the limits of Darwinian evolution", Genetics 180', ref: 'S. 1501–1509', year: '2008', status: 'paraphrase', quote: `Für ein Paar koordinierter Mutationen in der menschlichen Linie, bei dem die erste allein keinen Vorteil bringt, errechnen die Autoren eine Wartezeit von rund 216 Millionen Jahren; zugleich kritisieren sie Behes Anwendung solcher Zahlen.` },
      { kind: 'gegner', author: 'Nathan H. Lents, S. Joshua Swamidass, Richard E. Lenski', work: '„The end of evolution?", Science 363', ref: 'S. 590', year: '2019', status: 'paraphrase', quote: `Behe vernachlässige Beispiele für Funktionsgewinne und unterschätze Prozesse wie Duplikation und neutrale Evolution.` },
    ],
  },
  quickAnswer: `Mutation und Selektion erklären nachweislich Anpassungen – Resistenzen, Schnabelformen, Farbmuster. Aber ob sie **alles** erklären, ist eine Frage von Zahlen: Viele komplexe Funktionen brauchen mehrere aufeinander abgestimmte Änderungen, bevor sie einen Vorteil bringen. Bei Malariaerregern – Billionen Zellen pro Patient – entsteht Resistenz gegen Chloroquin, die mindestens zwei spezifische Mutationen erfordert, nur etwa einmal unter 10^20 Parasiten. Für Tiere mit kleinen Populationen und langen Generationen wird das schnell unerreichbar.`,
  keyPoints: [
    `**Selektion wählt nur aus, was angeboten wird.** Sie hat keine Voraussicht und kann keinen Zwischenschritt belohnen, der keinen Vorteil bringt.`,
    `**Mehrstufige Neuerungen sind exponentiell teurer.** Jede zusätzliche notwendige Mutation vervielfacht die Wartezeit (Behe 2007; Durrett & Schmidt 2008).`,
    `**Die größte natürliche „Versuchsanordnung"** – Malariaerreger mit ca. 10^20 Zellen – liefert eine empirische Eichung: Zwei koordinierte Mutationen sind schon an der Grenze (White 2004; Summers et al. 2014).`,
    `**Anpassung geschieht oft durch Funktionsverlust** (Behe, Quarterly Review of Biology 2010): Kaputtmachen ist leichter als Bauen.`,
    `**Funktionale Proteine sind selten** im Raum möglicher Sequenzen (Axe 2004; Hayashi et al. 2006). Neue Faltungen sind schwer zu erreichen.`,
    `**Computersimulationen** wie Avida funktionieren nur, weil Programmierer Zwischenschritte belohnen (Lenski et al. 2003; Ewert, Dembski & Marks).`,
  ],
  argument: {
    name: 'Das Argument von der Grenze der Evolution (Edge of Evolution)',
    summary: 'Empirisch geeichte Wahrscheinlichkeiten zeigen, dass Neuerungen mit mehreren koordinierten Mutationen für Mutation und Selektion kaum erreichbar sind.',
    premises: [
      { text: `P1: Viele komplexe Funktionen erfordern mehrere aufeinander abgestimmte Mutationen, bevor ein selektierbarer Vorteil entsteht.`, support: `Beispiele: Chloroquinresistenz (mindestens zwei Mutationen in PfCRT, Summers et al. 2014); Protein-Protein-Bindungsstellen; Umwandlung eines Enzyms in ein verwandtes (Gauger & Axe 2011: mindestens sieben Änderungen).` },
      { text: `P2: Die Wahrscheinlichkeit koordinierter Mehrfachmutationen sinkt exponentiell mit ihrer Anzahl; die Natur liefert dafür eine empirische Eichung.`, support: `Chloroquinresistenz entsteht de novo etwa einmal unter 10^20 Parasiten (White 2004). Durrett & Schmidt errechnen für ein koordiniertes Paar in der menschlichen Linie ca. 216 Millionen Jahre.` },
      { text: `P3: Höhere Tiere haben weit kleinere Populationen und längere Generationszeiten als Mikroben.`, support: `Die effektive Populationsgröße früher Homininen wird auf etwa 10^4 geschätzt, bei Generationszeiten von 20–25 Jahren.` },
    ],
    inferences: [`Neuerungen, die mehr als zwei oder drei koordinierte Mutationen erfordern, liegen für Tiere jenseits dessen, was Mutation und Selektion realistisch leisten.`],
    conclusion: `Mutation und Selektion erklären Anpassungen im Kleinen, aber nicht alle biologische Komplexität. Eine zusätzliche Ursache ist erforderlich – Intelligent Design oder zumindest bisher unbekannte Prinzipien.`,
  },
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe nutzt die Malaria- und HIV-Daten als „natürliches Großexperiment". Bei Plasmodium falciparum wurden in der Menschheitsgeschichte unvorstellbar viele Parasiten durchgespielt; dennoch entstand Chloroquinresistenz nur selten, weil sie zwei bestimmte Mutationen gleichzeitig verlangt. Daraus leitet er eine Grenze ab: Was mehr als etwa zwei koordinierte Proteinänderungen erfordert, ist für Mutation und Selektion bei Tieren praktisch unerreichbar. In „Darwin Devolves" ergänzt er, dass adaptive Mutationen überwiegend Gene beschädigen oder abschalten – sie helfen kurzfristig, bauen aber keine neuen Maschinen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution: The Search for the Limits of Darwinism', year: '2007', status: 'paraphrase', quote: `Die Chloroquinresistenz erfordert mindestens zwei spezifische Mutationen und tritt etwa einmal unter 10^20 Parasiten auf; das markiert eine Grenze dessen, was Zufallsmutation leisten kann.` },
        { kind: 'wissenschaft', author: 'Michael J. Behe', work: '„Experimental evolution, loss-of-function mutations, and ‚the first rule of adaptive evolution‘", The Quarterly Review of Biology 85 (4)', ref: 'S. 419–445', year: '2010', status: 'paraphrase', quote: `In Laborevolutionsexperimenten beruhen die meisten adaptiven Mutationen auf Verlust oder Abschwächung bestehender Funktionen.` },
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'douglas-axe',
      role: 'als Proteinforscher',
      text: `Axe untersuchte experimentell, wie viele Aminosäuresequenzen eine funktionierende Enzymfaltung bilden. Für eine Domäne von etwa 150 Aminosäuren schätzte er die Häufigkeit auf rund 1 zu 10^77. Wenn funktionale Faltungen derart vereinzelt im Sequenzraum liegen, kann eine ungerichtete Suche sie kaum finden – egal wie viele Generationen zur Verfügung stehen. Selektion hilft erst, wenn bereits eine Funktion da ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'Douglas D. Axe', work: '„Estimating the prevalence of protein sequences adopting functional enzyme folds", Journal of Molecular Biology 341 (5)', ref: 'S. 1295–1315', year: '2004', status: 'paraphrase', quote: `Die Häufigkeit von Sequenzen, die eine funktionale Faltung der untersuchten Beta-Lactamase-Domäne annehmen, liegt in der Größenordnung von 1 zu 10^77.` },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Entwicklungsbiologin',
      text: `Gauger testete zusammen mit Axe, ob sich ein Enzym (Kbl) in ein strukturell eng verwandtes Enzym mit anderer Funktion (BioF) umwandeln lässt. Ergebnis: Selbst zwischen nahen Verwandten wären wahrscheinlich sieben oder mehr gleichzeitige Änderungen nötig – weit jenseits dessen, was in der Erdgeschichte zu erwarten ist. Wenn schon kleine Funktionswechsel so schwer sind, ist der Ursprung ganz neuer Enzymfamilien erst recht erklärungsbedürftig.`,
      sources: [
        { kind: 'wissenschaft', author: 'Ann K. Gauger, Douglas D. Axe', work: '„The evolutionary accessibility of new enzyme functions: a case study from the biotin pathway", BIO-Complexity 2011 (1)', year: '2011', status: 'paraphrase', quote: `Die Umwandlung von Kbl zu BioF würde wahrscheinlich sieben oder mehr gleichzeitige Mutationen erfordern.`, note: 'BIO-Complexity ist ein von ID-nahen Forschern herausgegebenes Journal; das sollte man offen sagen.' },
      ],
    },
    {
      person: 'marcos-eberlin',
      role: 'als Chemiker',
      text: `Eberlin weist auf Systeme hin, die „Voraussicht" verlangen: Zellmembranen, die gleichzeitig dicht und selektiv durchlässig sein müssen, DNA-Reparatursysteme, die schon bei den ersten Kopierfehlern nötig sind, oder chemische Schutzmechanismen, die erst nützen, wenn mehrere Komponenten zusammen vorhanden sind. Ein Prozess ohne Ziel kann nicht für künftige Bedürfnisse vorsorgen; Planung ist aber genau das, was wir von intelligenten Akteuren kennen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight: How the Chemistry of Life Reveals Planning and Purpose', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater und Naturbeobachter',
      text: `Basilius bewundert im Hexaemeron die zweckmäßige Ausstattung der Tiere und sieht darin die Weisheit des Schöpfers. Zugleich beschreibt er das Wirken Gottes nicht als ständiges Eingreifen von außen, sondern als ein in die Natur gelegtes, fortwirkendes Gesetz. Für das heutige Gespräch heißt das: Ein Christ muss nicht jede Naturursache bestreiten – er bestreitet nur, dass die Natur sich selbst ihre Ordnung und ihren Reichtum gegeben hat.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilien 7–9', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'weasel-kumulative-selektion',
      objection: `Kumulative Selektion macht das Unwahrscheinliche wahrscheinlich. Mein „Weasel"-Programm erreicht den Satz „METHINKS IT IS LIKE A WEASEL" in wenigen Dutzend Generationen statt in astronomischen Zeiträumen.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 2,
      answer: `Das Weasel-Programm kennt sein Ziel im Voraus und belohnt jeden Buchstaben, der näher an den Zielsatz heranführt – auch wenn das Zwischenergebnis keinerlei Sinn ergibt. Die Natur hat kein Ziel und kann nur belohnen, was jetzt schon nützt. Die Frage ist also, ob es zu komplexen Funktionen einen Weg gibt, auf dem **jeder** Schritt funktional ist. Das zeigt das Programm nicht – es setzt es voraus.`,
      detail: `Dawkins selbst räumte in „The Blind Watchmaker" ein, dass das Programm in diesem Punkt irreführend ist; es sollte nur den Unterschied zwischen Ein-Schritt- und kumulativer Selektion illustrieren. Würdige das fair – und lenke dann auf die empirische Frage.`,
      followUps: [
        {
          id: 'jeder-zwischenschritt-hat-vorteil',
          objection: `Natürlich ist Weasel nur eine Illustration. In der Natur bietet jeder Zwischenschritt einen kleinen Vorteil – ein halbes Auge ist besser als kein Auge.`,
          objectionBy: 'Richard Dawkins',
          targetsPremise: 1,
          answer: `Für manche Strukturen mag das stimmen. Aber auf der molekularen Ebene ist das eine empirische Behauptung, die man testen kann – und die Tests sind ernüchternd: Bei Plasmodium bringt die erste Mutation im Chloroquin-Transporter allein keinen Resistenzvorteil; erst die Kombination wirkt. Bei Enzymen liegen funktionale Varianten oft durch mehrere nicht-funktionale Schritte voneinander getrennt (Gauger & Axe 2011).`,
          followUps: [
            {
              id: 'neutrale-netzwerke',
              objection: `Die Fitnesslandschaften sind von neutralen Netzwerken durchzogen. Proteine können über viele funktionsgleiche Sequenzen driften und so neue Funktionen erreichen – das hat Andreas Wagner gezeigt.`,
              objectionBy: 'Nathan Lents',
              answer: `Neutrale Netzwerke gibt es, das ist ein echter Befund. Aber Drift ist ungerichtet, und ob ein Netzwerk an eine neue, ganz andere Faltung angrenzt, muss gezeigt werden. Das Experiment von Hayashi et al. (2006) an einem Virusprotein ergab eine sehr zerklüftete Fitnesslandschaft: Um aus einer Zufallsbibliothek die natürliche Aktivität zu erreichen, wäre eine Bibliothek in der Größenordnung von 10^70 Varianten nötig gewesen.`,
              sources: [
                { kind: 'wissenschaft', author: 'Yuuki Hayashi u. a.', work: '„Experimental rugged fitness landscape in protein sequence space", PLoS ONE 1 (1)', ref: 'e96', year: '2006', status: 'paraphrase', quote: `Die adaptive Wanderung von einer Zufallssequenz zur Wildtyp-Funktion stagnierte; die Autoren schätzen, dass eine Bibliothek von etwa 10^70 Sequenzen nötig wäre.` },
                { kind: 'gegner', author: 'Andreas Wagner', work: 'Arrival of the Fittest', year: '2014', status: 'paraphrase', quote: `Neutrale Netzwerke im Genotypraum machen Innovation leichter erreichbar als gedacht.` },
              ],
              followUps: [
                {
                  id: 'labor-ist-nicht-natur',
                  objection: `Ein Laborexperiment mit einem Protein und ein paar Milliarden Molekülen ist nicht die Natur mit Billionen Organismen und Milliarden Jahren.`,
                  objectionBy: 'Nick Matzke',
                  answer: `Genau deshalb lohnt der Blick auf die größte Stichprobe, die die Natur selbst geliefert hat: Malariaerreger. In einem einzigen infizierten Menschen leben bis zu etwa 10^12 Parasiten, weltweit über Jahrzehnte enorm viel mehr. Trotzdem entstand Chloroquinresistenz nur wenige Male unabhängig – Nicholas White schätzte etwa einmal unter 10^20 Parasiten. Das ist keine Laborrechnung, sondern eine Beobachtung in der Natur.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Nicholas J. White', work: '„Antimalarial drug resistance", Journal of Clinical Investigation 113 (8)', ref: 'S. 1084–1092', year: '2004', status: 'paraphrase', quote: `Die de-novo-Entstehung von Chloroquinresistenz wird auf etwa ein Ereignis pro 10^20 Parasiten geschätzt.`, note: 'White ist Malariaforscher, kein ID-Vertreter; Behe übernimmt diese Schätzung.' },
                  ],
                  questionsBack: [
                    `Wenn zwei koordinierte Mutationen bei 10^20 Zellen schon an der Grenze liegen – wie viele Versuche hatte eine Säugetierlinie für Neuerungen, die fünf oder zehn erfordern?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'avida-computerevolution',
          objection: `Digitale Evolution in Avida hat komplexe logische Funktionen hervorgebracht – ohne dass jemand sie hineinprogrammiert hätte.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Lies das Originalpaper genau: Lenski et al. (Nature 2003) berichten selbst, dass die komplexe Funktion (EQU) nur entstand, wenn auch einfachere Teilfunktionen belohnt wurden – ohne diese Zwischenbelohnungen entstand sie nie. Die Programmierer haben also eine Landschaft mit Stufen gebaut. Ewert, Dembski und Marks haben gezeigt, wie viel „aktive Information" dadurch hineingelegt wird. Avida bestätigt damit eher, dass Ergebnisse von der vorab gestalteten Umgebung abhängen.`,
          sources: [
            { kind: 'wissenschaft', author: 'Richard E. Lenski, Charles Ofria, Robert T. Pennock, Christoph Adami', work: '„The evolutionary origin of complex features", Nature 423', ref: 'S. 139–144', year: '2003', status: 'paraphrase', quote: `Die komplexe Funktion EQU entwickelte sich in einem Teil der Populationen – jedoch nicht, wenn einfachere Funktionen nicht belohnt wurden.` },
            { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase', quote: `Erfolgreiche evolutionäre Suchalgorithmen nutzen „aktive Information", die von den Programmierern stammt.` },
          ],
        },
      ],
    },
    {
      id: 'summers-widerlegt-behe',
      objection: `Behes „Edge of Evolution" ist widerlegt. Summers et al. 2014 haben gezeigt, dass es viele verschiedene Mutationswege zur Chloroquinresistenz gibt.`,
      objectionBy: 'Dan Stern Cardinale',
      targetsPremise: 1,
      answer: `Summers et al. haben gezeigt, dass es mehrere Wege gibt – und dass **jeder** davon mindestens zwei Mutationen erfordert, bevor überhaupt Chloroquin transportiert wird. Das war genau Behes Vorhersage von 2007. Die Vielfalt der Wege ist bereits in der beobachteten Häufigkeit von etwa 1 zu 10^20 enthalten, denn diese Zahl misst, wie oft die Natur **irgendeinen** dieser Wege gefunden hat.`,
      sources: [
        { kind: 'wissenschaft', author: 'Robert L. Summers u. a.', work: '„Diverse mutational pathways converge on saturable chloroquine transport via the malaria parasite\'s chloroquine resistance transporter", PNAS 111 (17)', ref: 'E1759–E1767', year: '2014', status: 'paraphrase', quote: `Ein geringer Chloroquin-Transport wird bereits durch zwei Mutationen ermöglicht; es gibt zwei Hauptlinien von Mutationswegen.`, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4035986/' },
      ],
      followUps: [
        {
          id: 'mutationen-nacheinander',
          objection: `Die zweite Mutation muss nicht gleichzeitig kommen. Die erste kann neutral sein, sich in der Population ausbreiten und dann auf die zweite warten. Behe multipliziert einfach Wahrscheinlichkeiten – das ist naiv.`,
          objectionBy: 'Kenneth Miller',
          targetsPremise: 2,
          answer: `Behes Zahl ist nicht durch Multiplizieren errechnet, sondern beobachtet: Sie gibt an, wie oft Resistenz in der Natur tatsächlich entstand – einschließlich aller Wege, bei denen die erste Mutation sich vorher ausbreiten konnte. Wenn das Nacheinander die Sache leicht machte, müsste Resistenz viel häufiger entstanden sein. Die Daten zeigen das Gegenteil.`,
          followUps: [
            {
              id: 'plasmodium-kein-modell',
              objection: `Plasmodium ist kein Modell für Säugetiere. Sexuelle Fortpflanzung und Rekombination beschleunigen die Kombination günstiger Mutationen enorm.`,
              objectionBy: 'Larry Moran',
              targetsPremise: 3,
              answer: `Plasmodium vermehrt sich im Mücken-Stadium ebenfalls sexuell. Und der entscheidende Unterschied wirkt in die andere Richtung: Säugetiere haben winzige Populationen und lange Generationen. Durrett & Schmidt – ausgewiesene Populationsgenetiker – berechneten für ein koordiniertes Mutationspaar in der menschlichen Linie rund 216 Millionen Jahre. Das ist länger als die gesamte Zeit seit dem Ursprung der Säugetiere.`,
              followUps: [
                {
                  id: 'durrett-kritisiert-behe',
                  objection: `Durrett & Schmidt haben ausdrücklich gegen Behe geschrieben! Du zitierst Leute, die deiner Position widersprechen.`,
                  objectionBy: 'Dan Stern Cardinale',
                  answer: `Das stimmt, und ich sage es offen: Durrett & Schmidt halten Behes Schlussfolgerungen für falsch, unter anderem weil es in der Natur viele mögliche Ziele gebe, nicht nur eines. Ich zitiere nicht ihre Meinung über Behe, sondern ihr eigenes Rechenergebnis: Für eine bestimmte koordinierte Doppeländerung beim Menschen ist die Wartezeit enorm. Ob es genug alternative Ziele gibt, um das auszugleichen, ist genau die offene empirische Frage.`,
                  detail: `So verlierst du nichts, sondern gewinnst Glaubwürdigkeit. Die Gegenfrage lautet: Wie viele funktional gleichwertige Ziele gibt es, und wie dicht liegen sie? Hier schließt sich der Kreis zu Axes Messungen der Seltenheit funktionaler Sequenzen.`,
                  questionsBack: [
                    `Wie viele alternative Ziele bräuchte es, um 216 Millionen Jahre auf ein paar Hunderttausend zu drücken – und wo ist der Beleg, dass es so viele gibt?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'darwin-devolves-einseitig',
          objection: `„Darwin Devolves" ist einseitig. Natürlich sind viele adaptive Mutationen Funktionsverluste – aber Gen-Duplikation, neue Regulation und Funktionsgewinne sind ebenso dokumentiert.`,
          objectionBy: 'Nathan Lents',
          answer: `Behe bestreitet nicht, dass es Gewinne gibt. Seine These ist, dass in den gut untersuchten Fällen Verluste und Abschwächungen überwiegen, weil sie leichter zu erreichen sind – ein Gen zu zerstören gelingt auf viele Weisen, ein neues zu bauen auf sehr wenige. Das ist für die Frage „Erklärt der Mechanismus **alles**?" entscheidend.`,
          followUps: [
            {
              id: 'lenski-cit-plus-neuerung',
              objection: `Im Lenski-Experiment entstand mit Cit+ eine echte Neuerung – die Fähigkeit, unter Sauerstoff Citrat zu verwerten.`,
              objectionBy: 'Richard Lenski',
              answer: `Cit+ ist ein schönes Ergebnis, und man sollte es würdigen. Aber die Genomanalyse (Blount et al., Nature 2012) zeigt: Eine Duplikation stellte den bereits vorhandenen Citrat-Transporter unter die Kontrolle eines bereits vorhandenen, unter Sauerstoff aktiven Promotors – nach rund 31.000 Generationen. Das ist eine Umschaltung bestehender Teile, keine neue Maschine. Siehe den Claim zu Lenskis Experiment.`,
              sources: [
                { kind: 'wissenschaft', author: 'Zachary D. Blount u. a.', work: '„Genomic analysis of a key innovation in an experimental Escherichia coli population", Nature 489', ref: 'S. 513–518', year: '2012', status: 'paraphrase', quote: `Das Cit+-Merkmal entstand durch eine Tandem-Duplikation, die einen unter Sauerstoff aktiven Promotor vor einen zuvor stillen Citrat-Transporter brachte.`, url: 'https://pubmed.ncbi.nlm.nih.gov/22992527/' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'duplikation-divergenz',
      objection: `Gen-Duplikation plus Divergenz erzeugt ständig neue Gene: Globine, Opsine, Hox-Gene – ganze Familien sind so entstanden.`,
      objectionBy: 'Jerry Coyne',
      targetsPremise: 1,
      answer: `Duplikation kopiert vorhandene Information – das erklärt, warum es Genfamilien gibt. Die Frage ist, ob die Kopie eine **neue** Funktion erreicht, bevor Mutationen sie zerstören oder sie verloren geht. Gauger & Axe haben das an zwei eng verwandten Enzymen getestet: Selbst dort wären wohl sieben oder mehr gleichzeitige Änderungen nötig. Und der Ursprung der allerersten Faltung jeder Familie bleibt ohnehin unerklärt.`,
      followUps: [
        {
          id: 'falsche-enzyme-gewaehlt',
          objection: `Gauger & Axe haben einen Denkfehler gemacht: Evolution verwandelt nicht ein heutiges Enzym in ein anderes heutiges, sondern beide stammen von einem gemeinsamen Vorfahren ab.`,
          objectionBy: 'Nick Matzke',
          answer: `Das ist ein berechtigter Einwand, den man nicht wegwischen sollte. Allerdings sind die rekonstruierten Vorfahren selbst Hypothesen, und wer behauptet, der Weg über den Vorfahren sei leicht, muss ihn experimentell zeigen. Die Beweislast liegt bei der Behauptung, dass Funktionswechsel generell leicht sind.`,
          followUps: [
            {
              id: 'thornton-ahnenrekonstruktion',
              objection: `Joe Thornton hat genau das gemacht: Er rekonstruierte uralte Hormonrezeptoren und zeigte, wie sie mit wenigen Mutationen neue Spezifität gewannen.`,
              objectionBy: 'Nathan Lents',
              answer: `Thorntons Arbeiten (Bridgham et al., Science 2006) sind bemerkenswert. Sie zeigen, wie ein Rezeptor, der bereits verwandte Hormone band, durch wenige Änderungen spezifischer wurde – innerhalb derselben Faltung. Das passt zu Behes Grenze von ein bis zwei Schritten. Interessanterweise zeigte Thorntons Gruppe später, dass der Weg wegen Wechselwirkungen zwischen Mutationen nicht umkehrbar ist – Evolution kann Türen auch verschließen.`,
              sources: [
                { kind: 'wissenschaft', author: 'Jamie T. Bridgham, Sean M. Carroll, Joseph W. Thornton', work: '„Evolution of hormone-receptor complexity by molecular exploitation", Science 312', ref: 'S. 97–101', year: '2006', status: 'paraphrase' },
              ],
            },
          ],
        },
        {
          id: 'antifrostprotein',
          objection: `Antarktisfische haben ein Frostschutzprotein aus einem Stück Trypsinogen-Gen und nichtkodierender DNA gebaut. Das ist ein brandneues Gen.`,
          objectionBy: 'Jerry Coyne',
          answer: `Das ist ein echtes und faszinierendes Beispiel, das ich gern zugestehe. Beachte aber, was entstanden ist: ein Protein aus einer immer wieder wiederholten Drei-Aminosäuren-Einheit, das an Eiskristalle bindet – keine komplexe Enzymfaltung mit präzisem aktivem Zentrum. Es zeigt, dass einfache Funktionen erreichbar sind; es zeigt nicht, dass komplexe es ebenso sind.`,
        },
      ],
    },
    {
      id: 'persoenliche-unglaeubigkeit',
      objection: `Das ist ein Argument aus persönlicher Ungläubigkeit. Nur weil du dir nicht vorstellen kannst, wie etwas entstanden ist, heißt das nicht, dass es nicht so geschah.`,
      objectionBy: 'Richard Dawkins',
      answer: `Ich argumentiere nicht mit meiner Vorstellungskraft, sondern mit gemessenen Zahlen: Häufigkeiten funktionaler Proteine, beobachtete Raten bei Malariaerregern, populationsgenetische Wartezeiten. Und ich argumentiere positiv: Wir kennen eine Ursache, die regelmäßig neue funktionale Information hervorbringt – Intelligenz. Der Schluss auf die beste Erklärung ist kein Unglaube, sondern die Methode, mit der auch Darwin argumentierte.`,
      followUps: [
        {
          id: 'luecken-wurden-immer-geschlossen',
          objection: `Die Wissenschaft hat schon so viele Lücken geschlossen. Euer Designer wird wie alle Lückenbüßer-Götter schrumpfen.`,
          objectionBy: 'Jerry Coyne',
          answer: `Manche Lücken schließen sich, andere werden mit mehr Wissen größer – der Ursprung der Information wurde mit der Molekularbiologie nicht leichter, sondern schwieriger. Außerdem ist der christliche Gott kein Lückenfüller: Er ist Schöpfer und Erhalter auch dessen, was wir verstehen. Design-Argumente beruhen nicht auf Nichtwissen, sondern auf dem, was wir über Ursachen von Information wissen.`,
          questionsBack: [
            `Kennst du ein Beispiel, in dem ein ungelenkter Prozess nachweislich eine neue Proteinfaltung hervorgebracht hat?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele koordinierte Mutationen kann Selektion realistisch überbrücken – und woher stammt diese Zahl?`,
    `Warum entstand Chloroquinresistenz trotz 10^20 Parasiten so selten, wenn kumulative Selektion so mächtig ist?`,
    `Kannst du ein experimentell belegtes Beispiel für die Entstehung einer neuen Proteinfaltung nennen?`,
    `Warum funktionieren evolutionäre Computerprogramme nur, wenn Zwischenschritte gezielt belohnt werden?`,
    `Ist „Zufall" für dich ein mathematischer Begriff – oder eine Aussage, dass niemand dahintersteht?`,
  ],
  avoid: [
    `„Evolution kann keine neue Information erzeugen." – In dieser Pauschalität falsch; Duplikation und Mutation verändern Information. Präzisiere: komplexe, neue, funktionale Information.`,
    `„Mutationen sind immer schädlich." – Es gibt nützliche Mutationen; die Frage ist ihre Art und Häufigkeit.`,
    `„Die Wahrscheinlichkeit für ein Protein ist 1 zu 10^X, also unmöglich" – ohne die Rolle der Selektion zu diskutieren. Das wirkt naiv; verweise stattdessen auf empirische Messungen.`,
  ],
  concessions: [
    `Mutation und Selektion erklären nachweislich viele Anpassungen, auch einige echte Neuerungen (Frostschutzprotein, Cit+).`,
    `Selektion ist kein reiner Zufall; sie kann kleine Vorteile wirksam anhäufen.`,
    `Behes Folgerungen sind unter Fachleuten stark umstritten, und die von ihm zitierten Populationsgenetiker teilen seine Schlussfolgerungen nicht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Douglas Axe', work: 'Undeniable: How Biology Confirms Our Intuition That Life Is Designed', year: '2016', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard Dawkins', work: 'Climbing Mount Improbable', year: '1996', status: 'paraphrase' },
    { kind: 'gegner', author: 'Nathan H. Lents, S. Joshua Swamidass, Richard E. Lenski', work: '„The end of evolution?", Science 363, 590', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Mutation', 'Selektion', 'Edge of Evolution', 'Malaria', 'Proteine', 'Wahrscheinlichkeit'],
  related: [
    'evolution/neue-proteine-leicht',
    'evolution/evolution-in-aktion',
    'evolution/nichtreduzierbare-komplexitaet-widerlegt',
    'genetik/wartezeitproblem',
    'ursprung-des-lebens/genug-zeit',
    'mathematik/unwahrscheinliches-passiert-staendig',
  ],
};

export default claim;
