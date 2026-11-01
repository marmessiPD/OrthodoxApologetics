import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'neue-proteine-leicht',
  title: `„Neue Proteine und Funktionen entstehen leicht."`,
  proponents: [
    { name: 'Jack W. Szostak', role: 'Biochemiker, Nobelpreis für Medizin 2009', work: 'Keefe & Szostak, „Functional proteins from a random-sequence library", Nature 410 (2001)' },
    { name: 'Diethard Tautz', role: 'Evolutionsgenetiker, Max-Planck-Institut für Evolutionsbiologie, Plön', work: 'Tautz & Domazet-Lošo, „The evolutionary origin of orphan genes", Nature Reviews Genetics 12 (2011)' },
    { name: 'Arthur Hunt', role: 'Pflanzenbiologe, University of Kentucky; Kritiker von Douglas Axe', work: 'Blogbeiträge auf The Panda\'s Thumb' },
    { name: 'Larry Moran', role: 'Biochemiker, University of Toronto', work: 'Blog „Sandwalk"; What\'s in Your Genome? (2023)' },
    { name: 'Nathan H. Lents', role: 'Biologe, John Jay College (CUNY)', work: 'Science-Rezension von „Darwin Devolves" (2019)' },
  ],
  steelman: `Die Vorstellung, funktionale Proteine seien astronomisch selten, beruht auf fragwürdigen Experimenten. Keefe und Szostak fanden in einer Bibliothek von Zufallssequenzen ATP-bindende Proteine mit einer Häufigkeit von etwa 1 zu 10^11 – das ist bei Bakterienpopulationen eine Kleinigkeit. Proteine entstehen zudem nicht aus dem Nichts, sondern aus Bruchstücken älterer Proteine, durch Domänen-Rekombination und Duplikation; viele Faltungen teilen gemeinsame Kurzmotive, die auf eine uralte „Peptidwelt" hindeuten. Und die Genomik zeigt, dass ständig neue Gene aus vorher nichtkodierender DNA entstehen: De-novo-Gene sind beim Menschen, bei Fruchtfliegen und Hefen gut dokumentiert. Axe' Zahl von 1 zu 10^77 stammt aus Messungen an einem bereits destabilisierten Enzym und überschätzt die Seltenheit drastisch. Bakterien haben in wenigen Jahrzehnten Enzyme zum Abbau von Nylon und Pestiziden entwickelt.`,
  biblical: {
    summary: `Die Schrift beschreibt die Schöpfung als Werk göttlicher Weisheit (Spr 3,19; Ps 104,24). Sie sagt nichts über Aminosäuresequenzen – aber sie gibt dem Christen die Gelassenheit, die Frage nüchtern zu prüfen: Wenn neue Proteine leicht entstünden, wäre das ebenso Teil der von Gott gegebenen Ordnung; wenn sie extrem selten sind, wirft das die Frage nach ihrem Ursprung neu auf.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '3,19', translation: 'Luther 1912', status: 'verbatim', quote: `Denn der HERR hat die Erde durch Weisheit gegründet und durch seinen Rat die Himmel bereitet.` },
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', translation: 'Luther 1912', status: 'verbatim', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.` },
    ],
  },
  church: {
    summary: `Die alexandrinische Tradition spricht vom Logos, der die Welt vernünftig ordnet. Dass Leben auf präzise gefalteten Molekülen beruht, deren Bauplan in einer Sequenz festgelegt ist, fügt sich in dieses Bild: Die Schöpfung ist von Vernunft durchdrungen. Wie genau Gott Proteine ins Dasein rief – durch Prozesse oder unmittelbar –, ist keine Dogmenfrage.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '40–41', status: 'paraphrase', quote: `Der Logos des Vaters hat alles geordnet; nichts in der Schöpfung ist ohne Vernunft und Plan.` },
    ],
  },
  opposingView: {
    summary: `Wie häufig funktionale Sequenzen sind, hängt stark von der Art der Funktion ab. Für einfache Bindungsaufgaben fanden Keefe & Szostak etwa 1 zu 10^11; für eine stabile, enzymatisch aktive Faltung einer Beta-Lactamase-Domäne schätzte Axe etwa 1 zu 10^77; andere Studien liegen dazwischen. De-novo-Gene sind ein aktives Forschungsfeld: Viele Kandidaten sind kurz, schwach exprimiert und strukturell wenig geordnet; ihre Zahl und Funktion werden kontrovers diskutiert. Unstrittig ist, dass die meisten Proteinfamilien aus älteren Familien durch Duplikation und Rekombination hervorgehen – der Ursprung der ursprünglichen Faltungen ist dagegen weitgehend ungeklärt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Anthony D. Keefe, Jack W. Szostak', work: '„Functional proteins from a random-sequence library", Nature 410', ref: 'S. 715–718', year: '2001', status: 'paraphrase', quote: `Aus einer Bibliothek von Zufallssequenzen mit 80 variablen Aminosäuren wurden ATP-bindende Proteine mit einer geschätzten Häufigkeit von etwa 1 zu 10^11 isoliert.` },
      { kind: 'wissenschaft', author: 'Douglas D. Axe', work: '„Estimating the prevalence of protein sequences adopting functional enzyme folds", Journal of Molecular Biology 341 (5)', ref: 'S. 1295–1315', year: '2004', status: 'paraphrase', quote: `Für eine Domäne von rund 150 Aminosäuren liegt der Anteil funktionsfähiger Sequenzen in der Größenordnung von 1 zu 10^77.` },
      { kind: 'wissenschaft', author: 'Diethard Tautz, Tomislav Domazet-Lošo', work: '„The evolutionary origin of orphan genes", Nature Reviews Genetics 12', ref: 'S. 692–702', year: '2011', status: 'paraphrase', quote: `Waisengene ohne erkennbare Verwandte sind in allen Genomen verbreitet; ein Teil davon entsteht de novo aus nichtkodierender Sequenz.` },
      { kind: 'wissenschaft', author: 'Anne-Ruxandra Carvunis u. a.', work: '„Proto-genes and de novo gene birth", Nature 487', ref: 'S. 370–374', year: '2012', status: 'paraphrase', quote: `In der Hefe werden zahlreiche kurze offene Leserahmen translatiert, die als Vorstufen neuer Gene („Proto-Gene") dienen könnten.` },
    ],
  },
  quickAnswer: `Es kommt darauf an, welche Funktion man meint. Ein Zufallsprotein, das schwach an ATP bindet, findet man etwa unter 10^11 Sequenzen; eine stabile Enzymfaltung nach Axe' Messungen erst unter etwa 10^77 – das sind 66 Zehnerpotenzen Unterschied. Die meisten „neuen" Proteine entstehen durch Umbau vorhandener, und die bekannten Beispiele (Nylonase, Cit+) sind Abwandlungen bestehender Faltungen. Wie die ursprünglichen Faltungen entstanden, ist ungeklärt.`,
  keyPoints: [
    `**Funktion ist nicht gleich Funktion:** Schwache Bindung (Keefe & Szostak) ist viel leichter als eine präzise gefaltete Enzymstruktur (Axe).`,
    `**Seltenheit ist mehrfach gemessen:** Neben Axe (1 zu 10^77) schätzten etwa Reidhaar-Olson & Sauer (1990) für ein kleineres Protein ca. 1 zu 10^63; Hayashi et al. (2006) fanden eine stark zerklüftete Fitnesslandschaft.`,
    `**Umbau statt Neubau:** Duplikation und Domänen-Rekombination erklären Variation **innerhalb** bekannter Faltungen, nicht den Ursprung der rund tausend bis einige tausend Grundfaltungen.`,
    `**Nylonase entstand aus einem vorhandenen Enzym** durch wenige Mutationen – eine Modifikation, kein neues Faltungsmuster.`,
    `**De-novo-Gene** sind meist kurz und strukturell wenig geordnet; dass sie existieren, zeigt eher, dass „nichtkodierende" DNA funktionales Potenzial birgt.`,
  ],
  voices: [
    {
      person: 'douglas-axe',
      role: 'als Proteinforscher',
      text: `Axe betont, dass seine Messung eine bestimmte Frage beantwortet: Wie viele Sequenzen bilden eine Faltung, die eine echte enzymatische Funktion trägt? Um nicht nur Extremfälle zu erfassen, arbeitete er bewusst mit einer temperaturempfindlichen Variante, an der man die Toleranz gegenüber Veränderungen messen kann. Das Ergebnis – eine Größenordnung von 1 zu 10^77 – bedeutet, dass funktionale Faltungen im Sequenzraum wie winzige Inseln in einem riesigen Ozean liegen. Selektion kann eine Insel erst „sehen", wenn sie schon erreicht ist.`,
      sources: [
        { kind: 'wissenschaft', author: 'Douglas D. Axe', work: 'Journal of Molecular Biology 341 (5), 1295–1315', year: '2004', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Douglas Axe', work: 'Undeniable', year: '2016', status: 'paraphrase' },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Entwicklungsbiologin',
      text: `Gauger testete an zwei Enzymen aus der Biotin-Synthese, die sich strukturell sehr ähnlich sind, ob man eines durch wenige Mutationen in das andere umwandeln kann. Trotz intensiver Suche gelang das nicht; ihre Abschätzung lag bei sieben oder mehr nötigen Änderungen. Für Gauger zeigt das: Selbst innerhalb derselben Faltung sind echte Funktionswechsel schwer – erst recht der Sprung zu einer neuen Faltung.`,
      sources: [
        { kind: 'wissenschaft', author: 'Ann K. Gauger, Douglas D. Axe', work: '„The evolutionary accessibility of new enzyme functions: a case study from the biotin pathway", BIO-Complexity 2011 (1)', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'matti-leisola',
      role: 'als Bioverfahrenstechniker und Enzym-Ingenieur',
      text: `Leisola arbeitete jahrzehntelang an der gezielten Veränderung von Enzymen für industrielle Prozesse. Seine Erfahrung: Selbst mit gezieltem Design, Hochdurchsatz-Screening und gerichteter Evolution im Labor gelingt es meist nur, bestehende Funktionen abzuwandeln – etwa Stabilität, Spezifität oder Optimum zu verschieben. Wirklich neue katalytische Funktionen sind selbst für Ingenieure mit klarem Ziel außerordentlich schwer zu erreichen. Das macht die Behauptung, ungelenkte Prozesse schüfen sie „leicht", für ihn unplausibel.`,
      sources: [
        { kind: 'fachliteratur', author: 'Matti Leisola, Jonathan Witt', work: 'Heretic: One Scientist\'s Journey from Darwin to Design', year: '2018', status: 'paraphrase' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer verbindet die Proteinfrage mit der Informationsfrage: Eine funktionale Proteinsequenz ist hochspezifisch angeordnete Information. Wenn Kritiker darauf verweisen, neue Proteine entstünden aus alten, verschiebe das das Problem nur zurück, bis zu den ersten Faltungen. Gerade für die kambrische Explosion, in der zahlreiche neue Zelltypen und damit neue Proteine auftauchen, sei die Seltenheit funktionaler Sequenzen eine zentrale Herausforderung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", ref: 'Kap. 9–10', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater',
      text: `Für Athanasius ist die Welt nicht vernunftlos zusammengewürfelt, sondern vom Logos geordnet. Die moderne Entdeckung, dass Leben auf Molekülen beruht, deren Funktion von einer präzisen Abfolge abhängt, ist für einen alexandrinischen Christen keine Überraschung, sondern eine Bestätigung: Die Schöpfung ist bis in ihre kleinsten Bausteine „logisch" verfasst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '40–42', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'keefe-szostak-zehn-hoch-elf',
      objection: `Keefe und Szostak haben in einer Zufallsbibliothek ATP-bindende Proteine mit einer Häufigkeit von 1 zu 10^11 gefunden. Funktion ist also gar nicht so selten – Axe' 10^77 ist Unsinn.`,
      objectionBy: 'Arthur Hunt',
      answer: `Die beiden Zahlen messen verschiedene Dinge. Keefe & Szostak suchten nach irgendeiner schwachen Bindung an ATP und mussten die Kandidaten in mehreren Runden mit Mutagenese verbessern. Axe maß, wie viele Sequenzen eine stabile Faltung mit echter Enzymfunktion tragen. Dass einfache Bindung häufiger ist als präzise Katalyse, ist kein Widerspruch – es zeigt gerade, dass die Anforderungen einer Zelle entscheidend sind.`,
      detail: `Spätere Strukturuntersuchungen des selektierten Proteins zeigten eine ungewöhnliche, von Zink abhängige Faltung, die sich von natürlichen ATP-bindenden Proteinen unterscheidet. Es handelt sich um ein Laborprodukt mit Minimalfunktion – interessant, aber kein Modell für den Ursprung der Enzymfamilien.`,
      sources: [
        { kind: 'wissenschaft', author: 'P. Lo Surdo, M. A. Walsh, M. Sollazzo', work: '„A novel ADP- and zinc-binding fold from function-directed in vitro evolution", Nature Structural & Molecular Biology 11', ref: 'S. 382', year: '2004', status: 'paraphrase', quote: `Erste Kristallstruktur eines durch In-vitro-Evolution gewonnenen Proteins: eine neuartige, durch ein Zinkion stabilisierte Nukleotid-bindende Faltung.`, url: 'https://doi.org/10.1038/nsmb745', note: 'Bibliografische Angaben und Kernaussage per PDB-Eintrag 1UW1 bestätigt (Strukturanalyse eines Abkömmlings des Keefe-Szostak-Proteins).' },
      ],
      followUps: [
        {
          id: 'trotzdem-nicht-selten',
          objection: `Selbst wenn – 10^11 zeigt, dass Funktion im Sequenzraum nicht astronomisch selten ist. Bakterienpopulationen überbrücken das spielend.`,
          objectionBy: 'Larry Moran',
          answer: `Für einfache Bindungsfunktionen vielleicht. Aber eine Zelle braucht Enzyme, die Reaktionen um viele Größenordnungen beschleunigen, in Komplexen zusammenarbeiten und präzise reguliert sind. Zwischen 10^11 und 10^77 liegen 66 Zehnerpotenzen – das zeigt, dass die Seltenheit mit der Anspruchshöhe der Funktion dramatisch zunimmt. Und die meisten Funktionen in der Zelle sind anspruchsvoll.`,
          followUps: [
            {
              id: 'axe-destabilisiertes-enzym',
              objection: `Axe hat mit einem künstlich destabilisierten Enzym gearbeitet. Dadurch wirkt jede Mutation schädlicher, und er überschätzt die Seltenheit um viele Größenordnungen.`,
              objectionBy: 'Arthur Hunt',
              answer: `Die Wahl einer empfindlichen Variante war beabsichtigt, um zu messen, welche Veränderungen eine Faltung überhaupt verträgt; die Kritik daran ist bekannt und wird ernsthaft diskutiert. Aber selbst wenn man Axe' Zahl um viele Größenordnungen korrigiert, bleibt das Bild: Andere Studien kommen ebenfalls auf extrem kleine Anteile – Reidhaar-Olson & Sauer etwa für einen kleineren Proteinabschnitt auf grob 1 zu 10^63. Selbst 1 zu 10^40 wäre für eine ungerichtete Suche unerreichbar.`,
              sources: [
                { kind: 'wissenschaft', author: 'John F. Reidhaar-Olson, Robert T. Sauer', work: '„Functionally acceptable substitutions in two α-helical regions of λ repressor", Proteins 7', ref: 'S. 306–316', year: '1990', status: 'paraphrase', note: 'Die häufig zitierte Hochrechnung (ca. 1 zu 10^63) beruht auf Extrapolation; sie wird u. a. von Meyer verwendet. Vor Verwendung die genaue Ableitung prüfen.' },
              ],
              questionsBack: [
                `Welche Häufigkeit funktionaler Faltungen hältst du für realistisch – und auf welche Messung stützt du dich?`,
              ],
              followUps: [
                {
                  id: 'alte-peptid-vokabular',
                  objection: `Ihr tut so, als müsse die Evolution den Sequenzraum blind durchsuchen. Alva, Söding und Lupas haben 2015 gezeigt, dass viele Faltungen aus einem kleinen „Vokabular" uralter Peptidfragmente zusammengesetzt sind. Proteine entstanden durch Kombination bewährter Bausteine – Axe' Seltenheitszahlen sind irrelevant.`,
                  objectionBy: 'Joshua Swamidass',
                  answer: `Die Vokabular-Hypothese ist ernsthafte Forschung und erklärt gut, warum ähnliche Motive in verschiedenen Faltungen wiederkehren. Aber sie verschiebt die Frage: Woher kamen die rund vierzig funktionstüchtigen Urfragmente, und wie wahrscheinlich ist es, dass ihre Kombination eine stabile, katalytisch aktive Faltung ergibt? Experimente, in denen man Fragmente neu kombiniert, liefern meist instabile oder funktionslose Produkte. Wiederverwendung erklärt Verwandtschaft – nicht den ersten Ursprung funktionaler Faltungen.`,
                  detail: `Die Autoren selbst verorten diese Fragmente in einer hypothetischen RNA-Peptid-Welt vor den ersten gefalteten Proteinen – also genau in dem Bereich, in dem die Ursprungsfrage am offensten ist. Für das Gespräch heißt das: Du kannst die Forschung würdigen und zugleich festhalten, dass sie ein Szenario beschreibt, keinen experimentell nachvollzogenen Weg. Axe' Messung betrifft die Frage, wie dicht funktionale Faltungen im Sequenzraum liegen; eine Hypothese über alte Bausteine ändert an dieser Dichte nichts, solange man nicht zeigt, dass Kombinationen solcher Bausteine häufig funktionieren.`,
                  voices: [
                    {
                      person: 'douglas-axe',
                      role: 'als Proteinforscher',
                      text: `Axe betont, dass Proteinfaltung ein Ganzes ist: Ob ein Abschnitt eine stabile Struktur bildet, hängt von seinen Wechselwirkungen mit dem Rest der Kette ab. Deshalb lassen sich Fragmente nicht wie Legosteine beliebig kombinieren; die Zahl der Kombinationen, die eine stabile und funktionstüchtige Faltung ergeben, bleibt nach seinen Experimenten winzig.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Douglas Axe', work: 'Undeniable: How Biology Confirms Our Intuition That Life Is Designed', year: '2016', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'wissenschaft', author: 'Vikram Alva, Johannes Söding, Andrei N. Lupas', work: '„A vocabulary of ancient peptides at the origin of folded proteins", eLife 4', year: '2015', status: 'paraphrase', quote: `Rund 40 Fragmente, die in verschiedenen Faltungsklassen wiederkehren, könnten Überbleibsel einer Peptidwelt vor den ersten gefalteten Proteinen sein.` },
                  ],
                  questionsBack: [
                    `Gibt es ein Experiment, in dem die Kombination solcher Urfragmente zuverlässig ein neues, aktives Enzym ergab?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'de-novo-gene',
      objection: `De-novo-Gene entstehen laufend aus nichtkodierender DNA – beim Menschen, bei Fliegen, bei Hefen. Neue Proteine sind also kein Problem.`,
      objectionBy: 'Diethard Tautz',
      answer: `De-novo-Gene sind ein faszinierendes Forschungsfeld, und ich bestreite sie nicht. Viele dieser Kandidaten sind jedoch kurz, schwach exprimiert und strukturell kaum geordnet; ob sie stabile Enzymfaltungen bilden, ist meist unbekannt. Interessant ist außerdem: Wenn aus „Junk-DNA" funktionale Gene entstehen können, zeigt das, dass nichtkodierende DNA mehr Potenzial hat, als man früher dachte.`,
      sources: [
        { kind: 'wissenschaft', author: 'David G. Knowles, Aoife McLysaght', work: '„Recent de novo origin of human protein-coding genes", Genome Research 19', ref: 'S. 1752–1759', year: '2009', status: 'paraphrase', quote: `Drei menschliche Protein-kodierende Gene ohne Entsprechung bei Schimpansen, die wahrscheinlich aus nichtkodierender Sequenz entstanden.` },
      ],
      followUps: [
        {
          id: 'proto-gene-selektion',
          objection: `In der Hefe sieht man den Prozess sogar in Zwischenstufen: Proto-Gene werden translatiert, und die nützlichen werden durch Selektion zu richtigen Genen.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Das ist ein plausibles Modell für kurze Peptide mit einfachen Aufgaben. Der Schritt von einem kurzen, ungeordneten Peptid zu einer komplexen, präzise gefalteten Domäne ist aber genau die Lücke, um die es geht. Auch hier gilt: Ein Weg muss gezeigt, nicht nur postuliert werden.`,
          followUps: [
            {
              id: 'de-novo-gene-essentiell',
              objection: `Bei Drosophila wurden junge De-novo-Gene beschrieben, die schnell unverzichtbar wurden, und Strukturuntersuchungen zeigen bei einzelnen De-novo-Proteinen geordnete, helikale Abschnitte. Aus nichtkodierender DNA entstehen also echte, gefaltete und wichtige Proteine.`,
              objectionBy: 'Dennis Venema',
              answer: `Das ist ein spannendes Feld, und ich verfolge es mit Interesse. Aber zwei Dinge gehören zur Ehrlichkeit: Spätere Untersuchungen mit präziseren Methoden (CRISPR) fanden, dass viele junge Gene **nicht** unverzichtbar sind – frühere RNAi-Ergebnisse waren zum Teil Artefakte. Und die bisher strukturell untersuchten De-novo-Proteine sind kurz, teilweise ungeordnet und tragen keine komplexen katalytischen Zentren. Das ist genau die Grenze, über die wir reden.`,
              detail: `Fair bleiben: De-novo-Genentstehung ist kein Randphänomen der ID-Debatte, sondern ein etabliertes Forschungsgebiet (Tautz, Carvunis, Bornberg-Bauer, Long u. a.). Die Frage ist nicht, ob neue offene Leseraster entstehen und translatiert werden – das tun sie –, sondern ob auf diesem Weg die Art von Proteinen entsteht, die eine Zelle als Grundausstattung braucht: Enzyme mit tiefen Bindungstaschen, präzise positionierten katalytischen Resten und stabiler Tertiärstruktur. Hierfür gibt es bisher kein dokumentiertes Beispiel.`,
              questionsBack: [
                `Kennst du ein De-novo-Gen, das ein Enzym mit stabil gefaltetem aktivem Zentrum codiert?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aus-alten-proteinen',
      objection: `Niemand behauptet, Proteine entstünden aus reinen Zufallssequenzen. Sie entstehen aus vorhandenen Proteinen, durch Duplikation, Domänen-Rekombination und Fragmente einer alten Peptidwelt.`,
      objectionBy: 'Nick Matzke',
      answer: `Das erklärt gut, warum es Proteinfamilien und gemeinsame Motive gibt. Aber es verschiebt die Frage nur: Woher kamen die rund tausend bis einige tausend grundlegenden Faltungen selbst? Und Umwandlungen zwischen Funktionen sind auch innerhalb einer Familie nicht trivial, wie die Experimente von Gauger & Axe zeigen.`,
      followUps: [
        {
          id: 'wenige-mutationen-neue-funktion',
          objection: `Labore zeigen ständig, dass zwei oder drei Mutationen eine neue Enzymspezifität erzeugen. Evolution ist flexibel.`,
          objectionBy: 'Nathan Lents',
          answer: `Innerhalb einer bestehenden Faltung, ausgehend von einer verwandten Funktion – ja. Das entspricht genau der Grenze, die Behe beschreibt: ein bis zwei Schritte sind erreichbar. Die eigentliche Frage betrifft Neuerungen, die viele koordinierte Änderungen oder eine neue Faltung erfordern.`,
          followUps: [
            {
              id: 'torpfosten-verschoben',
              objection: `Ihr verschiebt ständig die Torpfosten: Erst sollte es keine neuen Funktionen geben, jetzt muss es eine ganz neue Faltung sein.`,
              objectionBy: 'Joshua Swamidass',
              answer: `Nicht ich verschiebe die Torpfosten – die Frage war von Anfang an, ob ungelenkte Prozesse **alle** biologische Komplexität erklären. Dass kleine Funktionsverschiebungen möglich sind, bestreiten Axe und Behe nicht. Ihr Punkt ist immer derselbe gewesen: Die Entstehung neuer Faltungen und vielteiliger Systeme ist der Engpass.`,
            },
          ],
        },
      ],
    },
    {
      id: 'nylonase',
      objection: `Bakterien haben in wenigen Jahrzehnten ein Enzym entwickelt, das Nylon abbaut – ein Stoff, den es vor 1935 gar nicht gab. Das ist ein brandneues Protein.`,
      objectionBy: 'Richard Dawkins',
      answer: `Die Nylonase (NylB) gehört nach Strukturuntersuchungen zur Familie der Esterasen bzw. Beta-Lactamase-artigen Enzyme; ihre Aktivität gegenüber Nylon-Abbauprodukten wurde durch wenige Punktmutationen gesteigert. Die ältere Hypothese, sie sei durch eine Leserasterverschiebung völlig neu entstanden, hat sich nicht bestätigt. Das ist ein schönes Beispiel für Anpassung – innerhalb einer bestehenden Faltung.`,
      sources: [
        { kind: 'wissenschaft', author: 'Seiji Negoro u. a.', work: '„X-ray crystallographic analysis of 6-aminohexanoate-dimer hydrolase", Journal of Biological Chemistry 280', year: '2005', status: 'paraphrase', quote: `Die Nylon-Oligomer-Hydrolase besitzt eine Faltung der Beta-Lactamase/Esterase-Familie; wenige Aminosäureaustausche erhöhen die Aktivität.` },
      ],
      followUps: [
        {
          id: 'modifikation-zaehlt-auch',
          objection: `Und? Evolution arbeitet immer mit Vorhandenem. Modifikation ist genau der Mechanismus.`,
          objectionBy: 'Jerry Coyne',
          answer: `Einverstanden, Modifikation ist ein realer Mechanismus. Dann sollten wir aber nicht sagen, „neue Proteine entstehen leicht", sondern: „Vorhandene Proteine lassen sich leicht abwandeln." Das ist ein gewaltiger Unterschied – denn irgendwann muss es die ersten Faltungen gegeben haben.`,
        },
      ],
    },
    {
      id: 'frostschutzprotein',
      objection: `Antarktische Eisfische haben ein Frostschutz-Glykoprotein aus einem Trypsinogen-Gen und einem Stück nichtkodierender DNA gebaut, und arktische Dorsche haben ein ähnliches Protein unabhängig – sogar weitgehend aus nichtkodierender Sequenz – entwickelt. Ein völlig neues Protein mit neuer, lebenswichtiger Funktion. Was willst du mehr?`,
      objectionBy: 'Richard Dawkins',
      answer: `Ein wunderbares Beispiel – und ein sehr aufschlussreiches. Das Frostschutz-Glykoprotein besteht im Kern aus einer vielfach wiederholten, einfachen Dreiereinheit (Threonin-Alanin-Alanin) mit Zuckerresten; es braucht keine komplexe Faltung und kein aktives Zentrum. Einfache Wiederholungssequenzen lassen sich durch Verdopplung kurzer Abschnitte leicht vervielfältigen. Das liegt genau in dem Bereich, den auch Behe und Axe für erreichbar halten – es sagt nichts über Enzyme mit präzise gefalteten Bindungstaschen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Liangbiao Chen, Arthur L. DeVries, Chi-Hing C. Cheng', work: '„Evolution of antifreeze glycoprotein gene from a trypsinogen gene in Antarctic notothenioid fish", PNAS 94', year: '1997', status: 'paraphrase', quote: `Das Frostschutz-Glykoprotein-Gen entstand aus Teilen eines Trypsinogen-Gens und einer vielfach verdoppelten kurzen Sequenz.` },
      ],
      followUps: [
        {
          id: 'wo-ist-die-grenze',
          objection: `Damit gibst du zu, dass neue Gene mit neuer Funktion aus nichtkodierender DNA entstehen. Deine Grenze wandert immer genau dorthin, wo es noch kein Beispiel gibt.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Die Grenze ist nicht willkürlich, sondern lässt sich benennen: Wie viele bestimmte Bausteine müssen **gleichzeitig** stimmen, damit eine Funktion überhaupt da ist? Bei einer einfachen Wiederholung mit Frostschutzwirkung sind es wenige; bei einem Enzym mit gefaltetem aktivem Zentrum sind es viele, und Zwischenstufen haben oft keinen Vorteil. Das ist seit Jahren dieselbe Linie – Axe hat sie 2004 quantitativ gefasst, Behe 2007 an Malaria-Daten. Bring mir ein Beispiel jenseits dieser Linie, und ich nehme es ernst.`,
          questionsBack: [
            `Kannst du ein beobachtetes Beispiel nennen, bei dem eine neue Funktion mehr als zwei oder drei gleichzeitig nötige Mutationen erforderte?`,
          ],
          followUps: [
            {
              id: 'information-kein-biologiebegriff',
              objection: `„Funktionale Information" ist kein biologischer Begriff, sondern ein Design-Konstrukt, das ihr in die Biologie schmuggelt.`,
              objectionBy: 'Larry Moran',
              answer: `Der Begriff stammt aus der Hauptströmung: Jack Szostak – Nobelpreisträger und selbst Ursprungsforscher – schlug 2003 in Nature vor, „funktionale Information" als Maß für den Anteil der Sequenzen zu definieren, die eine bestimmte Funktion mindestens in einem bestimmten Grad erfüllen. Hazen, Szostak und Kollegen haben das 2007 in PNAS ausgearbeitet. Wir verwenden also ein Maß, das Evolutionsbiologen selbst vorgeschlagen haben – und fragen nur, wie viel davon ungelenkte Prozesse nachweislich erzeugen.`,
              sources: [
                { kind: 'wissenschaft', author: 'Jack W. Szostak', work: '„Functional information: Molecular messages", Nature 423', year: '2003', status: 'paraphrase', quote: `Funktionale Information misst, wie selten Sequenzen sind, die eine gegebene Funktion in einem bestimmten Grad erfüllen.` },
                { kind: 'wissenschaft', author: 'Robert M. Hazen, Patrick L. Griffin, James M. Carothers, Jack W. Szostak', work: '„Functional information and the emergence of biocomplexity", PNAS 104 (Suppl. 1)', year: '2007', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Meinst du mit „Funktion" eine schwache Bindung oder eine präzise Enzymkatalyse?`,
    `Welches Beispiel kennst du, bei dem nachweislich eine neue Faltung – nicht eine Abwandlung – entstanden ist?`,
    `Woher stammen die ersten Grundfaltungen, aus denen alle Familien hervorgingen?`,
    `Warum gelingen selbst Enzym-Ingenieuren mit klarem Ziel neue katalytische Funktionen nur selten?`,
  ],
  avoid: [
    `„Ein Protein durch Zufall ist so unwahrscheinlich wie ein Tornado, der eine Boeing baut." – Die Analogie (nach Fred Hoyle) ignoriert Selektion und wirkt rhetorisch, nicht wissenschaftlich.`,
    `Axe' Zahl als unumstritten darstellen. Sie ist eine wichtige Messung, aber methodisch kritisiert.`,
    `De-novo-Gene leugnen. Sie sind ein reales Phänomen; die Frage ist ihre Struktur und Funktion.`,
  ],
  concessions: [
    `Einfache Bindungsfunktionen können in Zufallssequenzen relativ häufig sein (Keefe & Szostak 2001).`,
    `Neue Gene können aus nichtkodierender DNA hervorgehen; die Abwandlung bestehender Enzyme durch wenige Mutationen ist gut belegt.`,
    `Axe' Methode ist umstritten; die genaue Häufigkeit funktionaler Faltungen ist nicht abschließend bekannt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Douglas Axe', work: 'Undeniable', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Matti Leisola, Jonathan Witt', work: 'Heretic', year: '2018', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Diethard Tautz, Tomislav Domazet-Lošo', work: '„The evolutionary origin of orphan genes", Nature Reviews Genetics 12', year: '2011', status: 'paraphrase', note: 'Die Sicht der Gegenseite.' },
  ],
  difficulty: 3,
  tags: ['Proteine', 'Sequenzraum', 'De-novo-Gene', 'Axe', 'Nylonase'],
  related: [
    'evolution/mutation-selektion-erklaeren-alles',
    'palaeontologie/kambrische-explosion-kein-problem',
    'chemie-biochemie/dna-ist-keine-information',
    'genetik/junk-dna',
  ],
};

export default claim;
