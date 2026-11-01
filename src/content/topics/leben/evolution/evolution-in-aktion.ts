import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evolution-in-aktion',
  title: `„Lenskis Experiment und Antibiotikaresistenz zeigen Evolution in Aktion."`,
  proponents: [
    { name: 'Richard E. Lenski', role: 'Mikrobiologe, Michigan State University; Begründer des E.-coli-Langzeitexperiments (LTEE, seit 1988)', work: 'Blount, Borland & Lenski, PNAS 105 (2008); Blount u. a., Nature 489 (2012)' },
    { name: 'Zachary D. Blount', role: 'Mikrobiologe, Erstautor der Cit+-Studien', work: '„Historical contingency and the evolution of a key innovation in an experimental population of Escherichia coli", PNAS 105 (2008)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Greatest Show on Earth (2009), Kap. 5' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Seit 1988 vermehren sich zwölf Populationen von E. coli im Labor – inzwischen über 75.000 Generationen, mit eingefrorenen Proben aus allen Phasen, die man jederzeit wiederbeleben kann. Die Bakterien sind fitter geworden, größer, haben sich an ihr Medium angepasst – und um Generation 31.000 entwickelte eine Population die Fähigkeit, Citrat unter Sauerstoff zu verwerten, ein Merkmal, das E. coli als Art geradezu definiert. Die Analyse zeigte vorbereitende („potenzierende") Mutationen, eine Duplikation als Durchbruch und anschließende Verfeinerung – genau den Ablauf, den die Evolutionstheorie vorhersagt. Außerhalb des Labors erleben wir dasselbe täglich: Bakterien werden gegen Antibiotika resistent, Insekten gegen Pestizide, Viren entkommen Impfstoffen. Eidechsen auf einer kroatischen Insel entwickelten binnen Jahrzehnten neue Darmstrukturen. Wer bei so viel beobachteter Evolution noch an Grenzen glaubt, muss erklären, wo genau sie liegen und warum.`,
  biblical: {
    summary: `Die Bibel lehrt keine starre Unveränderlichkeit der Lebewesen. Das „nach seiner Art" in Gen 1 beschreibt geordnete Fruchtbarkeit, keine biologische Artdefinition. Variation und Anpassung widersprechen der Schrift nicht; sie können als Teil der von Gott in die Schöpfung gelegten Fruchtbarkeit und Anpassungsfähigkeit verstanden werden („Seid fruchtbar und mehret euch und füllet die Erde", Gen 1,22.28).`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,24', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott sprach: Die Erde bringe hervor lebendige Tiere, ein jegliches nach seiner Art: Vieh, Gewürm und Tier auf Erden, ein jegliches nach seiner Art. Und es geschah also.` },
      { kind: 'bibel', work: 'Psalmen', ref: '104,30', translation: 'Luther 1912', status: 'verbatim', quote: `Du lässest aus deinen Odem, so werden sie geschaffen, und erneuerst die Gestalt der Erde.` },
    ],
  },
  church: {
    summary: `Die Kirchenväter kannten keine Lehre von der absoluten Konstanz der Arten; diese Vorstellung wurde erst in der Frühen Neuzeit (u. a. bei Linné) prägend. Basilius bewundert im Hexaemeron die Vielfalt und Anpassung der Tiere an ihre Lebensräume. Beobachtete Anpassung ist für den koptischen Glauben daher kein Problem, sondern ein Zeichen der Weisheit, mit der Gott die Geschöpfe ausgestattet hat.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilien 7–9', status: 'paraphrase', quote: `Jedes Tier ist mit dem ausgestattet, was es für seine Lebensweise braucht; darin zeigt sich die Weisheit des Schöpfers.` },
    ],
  },
  opposingView: {
    summary: `Das LTEE ist eines der bedeutendsten Experimente der Evolutionsbiologie: Es dokumentiert Fitnesszuwachs, parallele Anpassungen, historische Kontingenz und mit Cit+ eine „Schlüsselinnovation". Die Genomanalyse (Blount et al. 2012) ergab, dass eine Tandem-Duplikation einen bereits vorhandenen, aber unter Sauerstoff stummen Citrat-Transporter (citT) unter die Kontrolle eines unter Sauerstoff aktiven Promotors brachte. Antibiotikaresistenz entsteht durch Punktmutationen, veränderte Regulation (z. B. Effluxpumpen) und vor allem durch horizontale Übertragung bereits existierender Resistenzgene, die teils uralt sind (D'Costa et al. 2011). Unstrittig ist: Das ist echte Evolution. Umstritten ist, ob sie als Modell für die Entstehung neuer Baupläne dienen kann.`,
    detail: `Ehrlich festhalten:
- Viele adaptive Mutationen im LTEE schalten Gene ab oder schwächen sie (z. B. parallele Verluste der Ribose-Verwertung, Cooper et al. 2001).
- Van Hofwegen, Hovde & Minnich (2016) erzielten Cit+-Varianten unter direkter Selektion innerhalb weniger Wochen; auch hier über Amplifikation und Umordnung von citT und dctA.
- Lenski und Blount betonen, dass Cit+ mehrere Schritte (Potenzierung, Aktualisierung, Verfeinerung) brauchte – was nach ihrer Sicht gerade die Kreativität der Evolution zeigt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Zachary D. Blount, Christina Z. Borland, Richard E. Lenski', work: '„Historical contingency and the evolution of a key innovation in an experimental population of Escherichia coli", PNAS 105 (23)', ref: 'S. 7899–7906', year: '2008', status: 'paraphrase', quote: `Cit+ entstand in nur einer von zwölf Populationen; Wiederholungsexperimente deuten auf eine vorbereitende genetische Vorgeschichte hin.` },
      { kind: 'wissenschaft', author: 'Zachary D. Blount u. a.', work: '„Genomic analysis of a key innovation in an experimental Escherichia coli population", Nature 489', ref: 'S. 513–518', year: '2012', status: 'paraphrase', quote: `Das Cit+-Merkmal entstand durch eine Tandem-Duplikation, die einen unter Sauerstoff exprimierten Promotor vor einen zuvor stillen Citrat-Transporter brachte; das Merkmal trat um Generation 31.000 auf.`, url: 'https://pubmed.ncbi.nlm.nih.gov/22992527/' },
      { kind: 'wissenschaft', author: 'Dustin J. Van Hofwegen, Carolyn J. Hovde, Scott A. Minnich', work: '„Rapid evolution of citrate utilization by Escherichia coli by direct selection requires citT and dctA", Journal of Bacteriology 198 (7)', year: '2016', status: 'paraphrase', quote: `Unter direkter Selektion entstanden Cit+-Mutanten innerhalb von Wochen, über Amplifikation von citT und dctA und anschließende Umordnungen.`, note: 'Minnich steht ID nahe; Lenski und Blount haben auf die Studie geantwortet.' },
      { kind: 'wissenschaft', author: 'Vanessa M. D\'Costa u. a.', work: '„Antibiotic resistance is ancient", Nature 477', ref: 'S. 457–461', year: '2011', status: 'paraphrase', quote: `In 30.000 Jahre altem Permafrost-Sediment fanden sich Gene für Resistenz gegen Beta-Lactame, Tetracyclin und Vancomycin.` },
    ],
  },
  quickAnswer: `Ja – das ist echte Evolution, und ich bestreite sie nicht. Aber schau genau hin, **was** sich entwickelt hat: Bei Cit+ wurde ein vorhandener Transporter durch eine Duplikation unter einen vorhandenen Schalter gesetzt – nach 31.000 Generationen, was beim Menschen über 600.000 Jahren entspräche. Resistenzen entstehen meist, indem Bakterien Zielstrukturen beschädigen oder uralte Resistenzgene austauschen. Das zeigt, wie Lebewesen sich anpassen, nicht wie neue molekulare Maschinen entstehen.`,
  keyPoints: [
    `**Echte Evolution – zugestanden.** Veränderung durch Mutation und Selektion ist beobachtet; das zu bestreiten wäre unehrlich.`,
    `**Cit+ ist Umschaltung, nicht Neubau:** Transporter und Promotor existierten bereits; neu war ihre Verbindung durch eine Duplikation (Blount et al. 2012).`,
    `**Viele Anpassungen sind Funktionsverluste:** Im LTEE gingen z. B. parallel Fähigkeiten zur Ribose-Verwertung verloren (Cooper et al. 2001; Behe 2010).`,
    `**Resistenzgene sind uralt:** Viele wurden nicht neu erfunden, sondern per horizontalem Transfer weitergereicht (D'Costa et al. 2011).`,
    `**Der Maßstab:** Über 75.000 Bakteriengenerationen entsprechen beim Menschen (ca. 20–25 Jahre pro Generation) rund 1,5 bis 1,9 Millionen Jahren – mit vielfach größeren Populationen.`,
    `**Eingebaute Anpassungsfähigkeit:** Programmierte Variationsmechanismen (SOS-Antwort, Phasenvariation, somatische Hypermutation) deuten auf Voraussicht.`,
  ],
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe hat die Ergebnisse des LTEE und anderer Laborevolutionsexperimente systematisch ausgewertet. Sein Befund: Die meisten nützlichen Mutationen beschädigen oder deaktivieren Gene, weil das der schnellste Weg zu einem Vorteil ist („erste Regel der adaptiven Evolution"). Cit+ ordnet er als „Modifikation einer Funktion" ein: Vorhandene Teile wurden neu verschaltet. Das sei echte Evolution, aber genau die Art, die man für Mutation und Selektion erwarten würde – nicht der Aufbau neuer, vielteiliger Systeme.`,
      sources: [
        { kind: 'wissenschaft', author: 'Michael J. Behe', work: '„Experimental evolution, loss-of-function mutations, and ‚the first rule of adaptive evolution‘", The Quarterly Review of Biology 85 (4)', ref: 'S. 419–445', year: '2010', status: 'paraphrase', quote: `„Erste Regel der adaptiven Evolution": Zerbrich oder schwäche jedes funktionale kodierte Element, dessen Verlust einen Netto-Fitnessgewinn brächte.` },
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', ref: 'Kap. 7', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer unterscheidet zwischen der Bedeutung „Veränderung über die Zeit", die durch solche Experimente eindrucksvoll belegt ist, und der Behauptung, derselbe Mechanismus habe Baupläne, neue Zelltypen und Organe hervorgebracht. Die Extrapolation vom Kleinen aufs Große sei keine Beobachtung, sondern eine Hypothese – und die quantitative Frage, wie viel neue Information pro Zeiteinheit entstehen kann, werde durch die Experimente eher verschärft.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'marcos-eberlin',
      role: 'als Chemiker',
      text: `Eberlin lenkt den Blick auf die Mechanismen, mit denen Bakterien sich anpassen: geregelte Stressantworten, Systeme, die bei Bedarf die Mutationsrate erhöhen, Werkzeuge zum Austausch von Genen. Für ihn ist es bemerkenswert, dass Organismen mit „Werkzeugkästen" für Anpassung ausgestattet sind. Ein Konstrukteur, der robuste Systeme für wechselnde Umgebungen baut, würde genau so vorgehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (Position der theistischen Evolution)',
      text: `Collins sieht in Resistenzentwicklung und Laborevolution ein Fenster in denselben Mechanismus, der nach seiner Überzeugung auch die Vielfalt des Lebens hervorgebracht hat. Er versteht diesen Mechanismus als Gottes Schöpfungsweise. Seine Stimme erinnert daran, dass Christen dieselben Daten unterschiedlich gewichten – und dass auch die Annahme großer Reichweite des Mechanismus nicht zum Materialismus zwingt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater und Naturbeobachter',
      text: `Basilius hat mit wachem Blick beschrieben, wie Tiere an ihre Lebensräume angepasst sind, und darin Gottes Weisheit erkannt. Eine Kirche, die solche Naturbeobachtung als Lob des Schöpfers verstand, muss die Entdeckung, dass Lebewesen sich verändern und anpassen können, nicht fürchten. Sie fragt nur weiter: Woher stammt die Fähigkeit, sich anzupassen?`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilie 9', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'cit-plus-innovation',
      objection: `Cit+ ist eine echte evolutionäre Innovation. E. coli kann unter Sauerstoff normalerweise kein Citrat verwerten – das ist geradezu ein Bestimmungsmerkmal der Art. Und genau das hat sich vor unseren Augen entwickelt.`,
      objectionBy: 'Richard Lenski',
      answer: `Ein bemerkenswertes Ergebnis, das ich gern würdige. Aber E. coli besitzt bereits Gene zur Citrat-Aufnahme und -Verwertung – es nutzt sie nur ohne Sauerstoff. Die entscheidende Mutation war eine Duplikation, die den vorhandenen Transporter unter einen vorhandenen, unter Sauerstoff aktiven Schalter setzte. Und das dauerte rund 31.000 Generationen. Es zeigt Umschaltung vorhandener Teile, nicht den Bau neuer.`,
      followUps: [
        {
          id: 'potenzierung-verfeinerung',
          objection: `Die Duplikation allein reichte nicht. Es brauchte vorbereitende Mutationen und danach Verfeinerung, z. B. am Transporter dctA. Das ist genau der mehrstufige Weg, den die Evolutionstheorie erwartet.`,
          objectionBy: 'Zachary Blount',
          answer: `Einverstanden, und gerade das ist aufschlussreich: Selbst eine regulatorische Umschaltung zwischen schon vorhandenen Bauteilen brauchte eine glückliche Vorgeschichte und Zehntausende Generationen in riesigen Populationen – und trat nur in einer von zwölf Populationen auf. Wenn schon das so viel braucht, was bedeutet das für neue Proteine oder Organe?`,
          followUps: [
            {
              id: 'information-nie-definiert',
              objection: `Ihr definiert „neue Information" immer so, dass nichts zählt. Egal was wir zeigen – es ist immer „nur Modifikation".`,
              objectionBy: 'Richard Lenski',
              answer: `Das ist ein fairer Vorwurf, deshalb nenne ich ein klares Kriterium: Zeig mir die Entstehung einer neuen Proteinfaltung mit neuer enzymatischer Funktion oder eines neuen Systems aus mehreren neuen, aufeinander abgestimmten Teilen. Das wäre ein Fall, bei dem ich sagen würde: Hier ist mehr geschehen als Umschalten oder Abbauen.`,
              questionsBack: [
                `Hat sich im LTEE nach über 75.000 Generationen irgendein neues Protein mit neuer Faltung gebildet?`,
              ],
            },
          ],
        },
        {
          id: 'minnich-schnell',
          objection: `Minnich hat Cit+ unter direkter Selektion in wenigen Wochen erzeugt. Ist das nicht ein Beweis, dass Evolution schnell und kreativ ist?`,
          objectionBy: 'Kenneth Miller',
          answer: `Es zeigt, dass die Umschaltung leicht erreichbar ist, wenn starke Selektion direkt darauf wirkt – über Amplifikation und Umordnung vorhandener Gene. Das bestätigt die Einordnung als Regulationsänderung bestehender Bauteile. Die Autoren um Minnich deuteten ihr Ergebnis so, dass Cit+ eher eine leicht zugängliche Anpassung als ein seltenes Innovationsereignis sei; Lenski und Blount widersprachen dieser Deutung.`,
        },
      ],
    },
    {
      id: 'antibiotikaresistenz',
      objection: `Antibiotikaresistenz entsteht vor unseren Augen und tötet jedes Jahr Hunderttausende. Wer das leugnet, gefährdet Menschenleben – das ist Evolution.`,
      objectionBy: 'Jerry Coyne',
      answer: `Niemand sollte das leugnen, und die Medizin muss es ernst nehmen. Aber die Mechanismen sind aufschlussreich: Punktmutationen verändern oder beschädigen die Zielstruktur des Medikaments, Effluxpumpen werden hochreguliert, und vor allem werden Resistenzgene zwischen Bakterien ausgetauscht – Gene, die zum Teil uralt sind. Es entsteht Anpassung, aber keine neue molekulare Maschine.`,
      followUps: [
        {
          id: 'beta-lactamasen-herkunft',
          objection: `Und woher kommen Beta-Lactamasen und die anderen Resistenzgene? Die hat doch auch die Evolution hervorgebracht.`,
          objectionBy: 'Kenneth Miller',
          answer: `Das ist genau die offene Frage. Resistenzgene wie Beta-Lactamasen sind nach Datierungen sehr alt; wir sehen heute ihre Verbreitung und Abwandlung, nicht ihren Ursprung. Interessanterweise ist die Beta-Lactamase genau das Enzym, an dem Douglas Axe die Seltenheit funktionaler Faltungen gemessen hat.`,
        },
        {
          id: 'resistenz-ist-kreativ',
          objection: `Resistenz durch Punktmutation zeigt doch: Evolution ist schnell und erfinderisch.`,
          objectionBy: 'Nathan Lents',
          answer: `Schnell ja – erfinderisch im Sinne von Neubau eher nicht. Oft hat die Resistenz einen Preis: Die veränderte Zielstruktur funktioniert schlechter, und ohne Antibiotikum sind die resistenten Stämme häufig weniger fit, bis Kompensationsmutationen das teilweise ausgleichen. Das ist eher eine Notreparatur als eine Erfindung.`,
        },
      ],
    },
    {
      id: 'mikro-plus-zeit-makro',
      objection: `Mikroevolution plus Zeit ergibt Makroevolution. Es gibt keine magische Grenze. Wenn Bakterien sich in 30 Jahren so verändern, was schaffen dann Millionen Jahre?`,
      objectionBy: 'Richard Dawkins',
      answer: `Die Extrapolation ist die Hypothese, die geprüft werden muss – nicht ihr Beweis. Das LTEE selbst gibt einen Maßstab: Über 75.000 Generationen entsprechen beim Menschen rund 1,5 bis 1,9 Millionen Jahren, bei weit größeren Populationen. Ergebnis: Anpassung, viel Abbau, eine Umschaltung. Wenn das die Leistung ist, wird die Behauptung, dieselben Prozesse bauten Augen, Gehirne und Baupläne, nicht plausibler, sondern erklärungsbedürftiger.`,
      sources: [
        { kind: 'wissenschaft', author: 'Vaughn S. Cooper, Dominique Schneider, Michel Blot, Richard E. Lenski', work: '„Mechanisms causing rapid and parallel losses of ribose catabolism in evolving populations of Escherichia coli B", Journal of Bacteriology 183 (9)', ref: 'S. 2834–2841', year: '2001', status: 'paraphrase', quote: `Alle zwölf Populationen verloren rasch und parallel die Fähigkeit zur Ribose-Verwertung, meist durch Deletionen.` },
      ],
      followUps: [
        {
          id: 'makro-andere-mechanismen',
          objection: `Funktionsverlust ist nicht alles. Makroevolution läuft über Duplikationen, Regulation und lange Zeiträume – das LTEE ist dafür viel zu kurz.`,
          objectionBy: 'Larry Moran',
          answer: `Dann sollten wir aber nicht behaupten, Lenski zeige „Evolution in Aktion" im Sinne der großen Neuerungen. Entweder das Experiment ist ein Modell für die Kraft des Mechanismus – dann ist sein Ergebnis ernüchternd. Oder es ist zu kurz – dann kann es auch nicht als Beleg für Makroevolution dienen.`,
          followUps: [
            {
              id: 'mensch-hatte-millionen-jahre',
              objection: `Der Mensch hatte seit der Trennung vom Schimpansen über sechs Millionen Jahre, und wir kennen die Gene, die sich verändert haben: HAR1, FOXP2 und andere.`,
              objectionBy: 'Nathan Lents',
              answer: `Sechs Millionen Jahre sind bei einer Generationszeit von 20–25 Jahren nur etwa 250.000 bis 300.000 Generationen, bei einer effektiven Populationsgröße von grob 10.000. Dass einzelne Gene sich verändert haben, ist belegt; ob die Zeit für alle nötigen koordinierten Änderungen reicht, ist die Frage des Wartezeitproblems – siehe dort.`,
            },
          ],
        },
      ],
    },
    {
      id: 'christ-warum-problem',
      objection: `Als Christ verstehe ich nicht, warum du hier überhaupt widersprichst. Gott wirkt durch Prozesse – auch durch Resistenzentwicklung und Selektion.`,
      objectionBy: 'Dennis Venema',
      answer: `Ich widerspreche nicht der Beobachtung, sondern ihrer Überdehnung. Dass Gott durch Prozesse wirkt, ist mit koptischer Lehre gut vereinbar. Mein Punkt ist nur: Diese Experimente zeigen Anpassung und Umbau, und man sollte sie nicht als Beweis dafür ausgeben, dass derselbe Prozess allein alles Komplexe erklärt. Die Anpassungsfähigkeit selbst kann man als Teil der weisen Ausstattung der Geschöpfe verstehen.`,
      followUps: [
        {
          id: 'eingebaute-anpassung-ad-hoc',
          objection: `„Eingebaute Anpassungsfähigkeit" ist eine Ad-hoc-Behauptung, um jede Beobachtung umzudeuten.`,
          objectionBy: 'Jerry Coyne',
          answer: `Sie ist prüfbar: Zellen besitzen nachweislich Mechanismen, die Variation gezielt erzeugen – die SOS-Antwort bei Stress, Phasenvariation bei Krankheitserregern, CRISPR als adaptives Immungedächtnis, die somatische Hypermutation im menschlichen Immunsystem. James Shapiro, kein ID-Vertreter, spricht von „natürlicher genetischer Ingenieurskunst". Das sind geregelte Systeme zur Erzeugung von Vielfalt, nicht bloß Zufallsfehler.`,
          sources: [
            { kind: 'wissenschaft', author: 'James A. Shapiro', work: 'Evolution: A View from the 21st Century', year: '2011', status: 'paraphrase', quote: `Zellen verfügen über aktive, regulierte Systeme zur Umgestaltung ihres Genoms („natural genetic engineering").`, note: 'Shapiro lehnt Intelligent Design ab; er vertritt eine naturalistische „Third Way"-Position.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche neuen Proteine mit neuer Faltung sind in über 75.000 Generationen im LTEE entstanden?`,
    `Wie viele der nützlichen Mutationen im LTEE beruhen auf Verlust oder Abschwächung von Genfunktionen?`,
    `Woher stammen die Resistenzgene, die zwischen Bakterien ausgetauscht werden?`,
    `Wenn eine Umschaltung vorhandener Teile 31.000 Generationen brauchte – wie lange braucht ein neues Organ?`,
  ],
  avoid: [
    `„Bakterien bleiben doch Bakterien." – Das klingt nach Ausweichen; niemand erwartet in 30 Jahren eine neue Großgruppe. Argumentiere stattdessen mit der Art der beobachteten Veränderungen.`,
    `Antibiotikaresistenz herunterspielen. Sie ist real und medizinisch dramatisch.`,
    `Behaupten, Cit+ sei „gar nichts". Es ist ein echter Befund; ordne ihn ein, statt ihn kleinzureden.`,
  ],
  concessions: [
    `Das LTEE dokumentiert echte Evolution einschließlich einer bemerkenswerten Neuerung (Cit+).`,
    `Antibiotikaresistenz ist ein reales, durch Mutation und Selektion verursachtes Phänomen.`,
    `Für Lenski und die meisten Biologen zeigen diese Befunde die Kreativität der Evolution; die Einordnung als „bloße Modifikation" ist eine umstrittene Deutung.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Zachary D. Blount u. a.', work: 'Nature 489, 513–518', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', year: '2019', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard Dawkins', work: 'The Greatest Show on Earth', ref: 'Kap. 5', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Lenski', 'LTEE', 'Cit+', 'Antibiotikaresistenz', 'Mikroevolution', 'Makroevolution'],
  related: [
    'evolution/mutation-selektion-erklaeren-alles',
    'evolution/neue-proteine-leicht',
    'genetik/wartezeitproblem',
    'evolution/evolution-ist-tatsache',
  ],
};

export default claim;
