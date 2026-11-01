import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kambrische-explosion-kein-problem',
  title: `„Die kambrische Explosion ist kein Problem für Darwin."`,
  proponents: [
    { name: 'Charles R. Marshall', role: 'Paläontologe, University of California, Berkeley', work: '„When Prior Belief Trumps Scholarship", Science 341 (2013) – Rezension von Meyers „Darwin\'s Doubt"; Debatte mit Meyer bei „Unbelievable?" (2013)' },
    { name: 'Donald Prothero', role: 'Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007, 2. Aufl. 2017)' },
    { name: 'Nicholas J. Matzke', role: 'Evolutionsbiologe, University of Auckland', work: '„Meyer\'s Hopeless Monster, Part II", The Panda\'s Thumb (2013)' },
    { name: 'Douglas H. Erwin & James W. Valentine', role: 'Paläobiologen (Smithsonian / UC Berkeley)', work: 'The Cambrian Explosion: The Construction of Animal Biodiversity (2013)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Die „Explosion" war kein Augenblick, sondern erstreckte sich über rund 20 Millionen Jahre oder mehr – das sind bei kleinen Meerestieren Millionen von Generationen. Ihr gingen die rätselhaften Lebewesen der Ediacara-Fauna voraus, von denen zumindest einige (wie Dickinsonia, nachgewiesen durch Cholesterin-Biomarker) Tiere waren; Spurenfossilien zeigen bilaterale, kriechende Tiere schon vor dem Kambrium. Molekulare Uhren verlegen den Ursprung der Tierstämme Dutzende bis Hunderte Millionen Jahre zurück; die frühen Vertreter waren klein, weichhäutig und fossilisierten kaum. Mit dem Kambrium kamen Hartteile, Räuber-Beute-Wettläufe, mehr Sauerstoff und ein bereits vorhandener genetischer „Werkzeugkasten" (Hox- und Pax-Gene) zusammen. Die meiste „neue Information" bestand in der Neuverschaltung von Genregulationsnetzwerken, nicht in neuen Genen. Paläontologen erforschen das Kambrium seit Jahrzehnten mit großem Erfolg – Meyer, ein Philosoph, setzt nur einen Designer in eine Lücke, die die Fachwissenschaft Stück für Stück schließt.`,
  biblical: {
    summary: `Genesis beschreibt, wie Gott auf sein Wort hin die Wasser „wimmeln" lässt von lebendigen Tieren (Gen 1,20–21). Daraus lässt sich keine Paläontologie ableiten, und Christen sollten den Text nicht als Vorhersage des Kambriums missbrauchen. Was die Schrift lehrt, ist, dass die Fülle des Lebens auf Gottes schöpferisches Wort zurückgeht (Ps 33,6; Hebr 11,3). Ob dieses Wirken sich in abrupten Neuerungen oder in allmählichen Prozessen zeigt, ist eine Frage an die Natur, nicht an den Glauben.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,20', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott sprach: Es errege sich das Wasser mit webenden und lebendigen Tieren, und Gevögel fliege auf Erden unter der Feste des Himmels.` },
      { kind: 'bibel', work: 'Psalmen', ref: '33,6', translation: 'Luther 1912', status: 'verbatim', quote: `Der Himmel ist durch das Wort des HERRN gemacht und all sein Heer durch den Geist seines Mundes.` },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', translation: 'Luther 1912', status: 'verbatim', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.` },
    ],
  },
  church: {
    summary: `Basilius staunt im Hexaemeron über die Fülle der Meerestiere, die auf Gottes Befehl hin hervorgingen, und sieht in ihrer Vielfalt die Weisheit des Schöpfers. Die koptische Kirche legt keinen Ablauf der Erdgeschichte dogmatisch fest. Sie bekennt, dass Gott Ursprung aller Lebensformen ist – ob durch plötzliche Neuerung oder durch Prozesse, die er trägt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilie 7', status: 'paraphrase', quote: `Auf das Wort „Es bringe das Wasser hervor" füllte sich das Meer mit unzähligen Arten von Lebewesen, jede mit der ihr eigenen Gestalt und Lebensweise.` },
    ],
  },
  opposingView: {
    summary: `Die Basis des Kambriums liegt nach der aktuellen geologischen Zeitskala bei etwa 538,8 Millionen Jahren. In einem Zeitraum von grob 20–25 Millionen Jahren erscheinen die meisten Tierstämme mit fossilisierbaren Hartteilen; die berühmten Fossillagerstätten Chengjiang (China, ca. 518 Millionen Jahre) und Burgess-Schiefer (Kanada, ca. 508 Millionen Jahre) zeigen eine verblüffende Vielfalt, darunter bereits frühe Wirbeltierverwandte (Shu et al. 1999). Die vorausgehende Ediacara-Fauna (ca. 575–539 Millionen Jahre) enthält einige Tiere, aber nur wenige plausible Vorfahren der kambrischen Stämme. Molekulare Uhren datieren die Aufspaltung der Tierstämme meist deutlich früher als die Fossilien; die Diskrepanz wird als „Cambrian conundrum" diskutiert (Erwin et al. 2011). Unter Fachleuten gilt die kambrische Explosion als **reales und erklärungsbedürftiges Ereignis**, aber nicht als Widerlegung der Evolution; diskutierte Erklärungen sind ökologische Auslöser, Sauerstoffanstieg, Entwicklungsgenetik und Erhaltungsbedingungen.`,
    detail: `Ehrlich festhalten:
- Meyer ist Wissenschaftsphilosoph, kein Paläontologe; Marshalls Kritik (Science 2013) wirft ihm selektive Darstellung und eine „Lückenbüßer"-Argumentation vor.
- Zugleich ist der weltweit führende Kambrium-Experte Simon Conway Morris (kein ID-Vertreter) der Ansicht, die Explosion sei real und kein bloßes Artefakt lückenhafter Überlieferung.
- Darwin selbst sah im plötzlichen Auftreten der Tiergruppen einen „gültigen Einwand" gegen seine Theorie und hoffte auf künftige Funde.`,
    sources: [
      { kind: 'gegner', author: 'Charles Darwin', work: 'On the Origin of Species', ref: 'Kap. IX (1. Aufl.; ab der 6. Aufl. Kap. X)', year: '1859', status: 'verbatim', quote: `Auf die Frage, warum wir keine Zeugnisse dieser ungeheuren urzeitlichen Perioden finden, kann ich keine befriedigende Antwort geben. … Der Fall muss gegenwärtig unerklärlich bleiben; und er kann zu Recht als gültiges Argument gegen die hier vertretenen Ansichten angeführt werden.`, original: `To the question why we do not find records of these vast primordial periods, I can give no satisfactory answer. … The case at present must remain inexplicable; and may be truly urged as a valid argument against the views here entertained.`, translation: 'eigene Übersetzung', note: 'Darwin erklärte das Problem mit der Unvollständigkeit der geologischen Überlieferung – das sollte man fairerweise dazusagen.' },
      { kind: 'gegner', author: 'Charles R. Marshall', work: '„When Prior Belief Trumps Scholarship", Science 341', ref: 'S. 1344', year: '2013', status: 'paraphrase', quote: `Meyers Buch sei durch mangelndes Fachwissen, eine Lückenbüßer-Argumentation und selektive Literaturauswahl beeinträchtigt; die neue Information der Kambrischen Explosion sei vor allem die Neuverschaltung vorhandener Genregulationsnetzwerke.`, url: 'https://doi.org/10.1126/science.1244515' },
      { kind: 'wissenschaft', author: 'Douglas H. Erwin u. a.', work: '„The Cambrian conundrum: early divergence and later ecological success in the early history of animals", Science 334', ref: 'S. 1091–1097', year: '2011', status: 'paraphrase', quote: `Molekulare Uhren deuten auf eine Entstehung der Tiere im Cryogenium; ökologisch bedeutsam werden sie erst im Kambrium.` },
      { kind: 'wissenschaft', author: 'D.-G. Shu u. a.', work: '„Lower Cambrian vertebrates from south China", Nature 402', ref: 'S. 42–46', year: '1999', status: 'paraphrase', quote: `Haikouichthys und Myllokunmingia aus Chengjiang gehören zu den frühesten bekannten Wirbeltierverwandten.` },
    ],
  },
  quickAnswer: `Darwin selbst nannte das plötzliche Auftreten der Tiergruppen einen „gültigen Einwand" gegen seine Theorie. Seither wurden präkambrische Fossilien gefunden – aber kaum plausible Vorfahren der kambrischen Baupläne, obwohl es Fundstellen gibt, die selbst Embryonen und Weichteile erhalten. In grob 20 Millionen Jahren erscheinen Gliederfüßer mit Komplexaugen, frühe Wirbeltierverwandte und Dutzende neue Baupläne – mit neuen Zelltypen, Proteinen und Genregulationsnetzen. Die Frage ist nicht, ob es vorher Leben gab, sondern woher diese gewaltige Menge neuer Information in so kurzer Zeit kam.`,
  keyPoints: [
    `**Darwins eigener Einwand:** Er hielt das Problem 1859 für „gegenwärtig unerklärlich" und hoffte auf künftige Funde – das ist bis heute nicht in der erwarteten Weise eingetreten.`,
    `**Kurzes Fenster, riesiger Umbau:** In grob 20–25 Millionen Jahren erscheinen die meisten Tierstämme mit völlig neuen Bauplänen.`,
    `**Erhaltung ist nicht das Problem:** Chengjiang erhält Gehirne und Nerven (Ma et al. 2012); präkambrische Lagerstätten erhalten Mikrofossilien und mutmaßliche Embryonen – doch kaum Vorfahren der kambrischen Stämme.`,
    `**Der „Werkzeugkasten" verschiebt die Frage:** Wenn Hox- und Pax-Gene schon vorher existierten, muss man deren Ursprung erklären – und die Neuverschaltung von Genregulationsnetzwerken ist selbst der schwierigste Teil (Davidson & Erwin 2006).`,
    `**Molekulare Uhren lösen das Problem nicht:** Ihre Schätzungen schwanken stark, und wenn sie stimmen, blieben die Vorfahren über 100 Millionen Jahre unsichtbar.`,
    `**Auch Fachleute ohne ID-Hintergrund** (Conway Morris, Erwin, Valentine) betrachten die Explosion als reales, erklärungsbedürftiges Ereignis.`,
  ],
  argument: {
    name: 'Meyers Schluss auf die beste Erklärung für die kambrische Explosion',
    summary: 'Abduktiver Schluss vom plötzlichen Auftreten großer Mengen funktionaler Information auf Intelligenz als Ursache.',
    premises: [
      { text: `P1: Die kambrischen Tiere repräsentieren in geologisch kurzer Zeit einen großen Zuwachs an funktionaler Information: neue Zelltypen, Proteine, Genregulationsnetzwerke und Baupläne.`, support: `Fossilbericht von Chengjiang und Burgess; neue Zelltypen erfordern neue Proteine und Regulation; Konsens über Realität des Ereignisses (Erwin & Valentine 2013; Conway Morris 2006).` },
      { text: `P2: Der neodarwinistische Mechanismus stößt bei der Erzeugung solcher Information auf messbare Grenzen.`, support: `Seltenheit funktionaler Proteinfaltungen (Axe 2004); Wartezeiten für koordinierte Mutationen (Durrett & Schmidt 2008); Mutationen in früh wirkenden Entwicklungsgenen sind fast immer schädlich (Nelson; Davidson & Erwin 2006).` },
      { text: `P3: Alternative naturalistische Erklärungen (Selbstorganisation, Evo-Devo, Erweiterte Synthese) setzen bereits vorhandene Information voraus.`, support: `Der „Werkzeugkasten" und die Netzwerke, die neu verschaltet werden, müssen selbst erklärt werden.` },
      { text: `P4: Intelligenz ist die einzige aus Erfahrung bekannte Ursache, die große Mengen neuer funktionaler Information hervorbringt.`, support: `Software, Sprache, Ingenieursentwürfe – in keinem beobachteten Fall entsteht hochspezifische Information ohne Intelligenz.` },
    ],
    conclusion: `Intelligentes Design ist die beste derzeit verfügbare Erklärung für den Ursprung der Information, die für die kambrischen Baupläne nötig war.`,
  },
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer verlagert die Debatte vom Fossilbericht auf die Information: Ein neuer Bauplan erfordert neue Zelltypen, neue Proteine und vor allem neue Genregulationsnetzwerke, die die Entwicklung vom Ei zum erwachsenen Tier steuern. Er argumentiert, dass jede dieser Ebenen den neodarwinistischen Mechanismus an Grenzen führt – und dass der Hinweis auf einen präkambrischen „Werkzeugkasten" das Problem nur zurückverlegt. In seiner Antwort auf Marshall betont er, dass gerade die Neuverschaltung regulatorischer Netzwerke der schwierigste Schritt sei, weil Eingriffe in die frühen Entwicklungsprogramme fast immer tödlich sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt: The Explosive Origin of Animal Life and the Case for Intelligent Design", year: '2013 (Taschenbuch 2014 mit Epilog zu den Kritiken)', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'David Klinghoffer (Hg.)', work: "Debating Darwin's Doubt", year: '2015', status: 'paraphrase', note: 'Sammlung von Antworten der ID-Seite auf die Kritiken, u. a. auf Marshall.' },
      ],
    },
    {
      person: 'conway-morris',
      role: 'als Paläontologe und Kambrium-Experte',
      text: `Conway Morris, der die Fossilien des Burgess-Schiefers und von Chengjiang über Jahrzehnte erforscht hat, betont, dass die kambrische Explosion ein reales Ereignis ist und nicht bloß ein Artefakt lückenhafter Überlieferung. Er akzeptiert die Evolutionstheorie und lehnt Intelligent Design ab, sieht aber in den rasch entstehenden Bauplänen und der allgegenwärtigen Konvergenz Hinweise auf eine tiefe Ordnung der Natur, die mit einem rein zufälligen Bild schwer vereinbar ist. Seine Stimme zeigt: Die Realität der Explosion ist keine ID-Erfindung.`,
      sources: [
        { kind: 'wissenschaft', author: 'Simon Conway Morris', work: '„Darwin\'s dilemma: the realities of the Cambrian ‚explosion‘", Philosophical Transactions of the Royal Society B 361', ref: 'S. 1069–1083', year: '2006', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Simon Conway Morris', work: 'The Crucible of Creation', year: '1998', status: 'paraphrase' },
      ],
    },
    {
      person: 'paul-nelson',
      role: 'als Wissenschaftsphilosoph mit Schwerpunkt Entwicklungsbiologie',
      text: `Nelson stellt ein Dilemma auf: Um einen neuen Bauplan zu erzeugen, müssten Mutationen früh in der Embryonalentwicklung wirken, wo die Grundarchitektur festgelegt wird. Gerade solche früh wirkenden Mutationen sind aber, wie die großen Mutagenese-Studien an Fruchtfliegen und anderen Modellorganismen zeigen, fast immer tödlich oder schwer schädigend. Spät wirkende Mutationen sind dagegen verträglich, verändern aber nur Details. Die für neue Baupläne nötige Art von Mutation ist also genau die, die selektiv nicht toleriert wird.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul A. Nelson', work: 'Beiträge in „Debating Darwin\'s Doubt" und Vorträge zur Entwicklungsbiologie', year: '2015', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Eric H. Davidson, Douglas H. Erwin', work: '„Gene regulatory networks and the evolution of animal body plans", Science 311', ref: 'S. 796–800', year: '2006', status: 'paraphrase', quote: `Zentrale „Kernel"-Schaltkreise der Genregulationsnetzwerke sind seit dem Kambrium hochkonserviert und gegenüber Veränderungen äußerst widerständig.`, note: 'Davidson und Erwin sind keine ID-Vertreter; sie suchen eine naturalistische Erklärung.' },
      ],
    },
    {
      person: 'bechly',
      role: 'als Paläontologe',
      text: `Bechly, selbst Fachmann für fossile Insekten, sieht in der kambrischen Explosion das bekannteste Beispiel eines allgemeinen Musters: Neue Baupläne erscheinen im Fossilbericht abrupt, gefolgt von langer Stabilität. Er verbindet diesen Befund mit dem populationsgenetischen Wartezeitproblem: Je kürzer das geologische Zeitfenster für einen großen Umbau, desto weniger Generationen stehen für die nötigen koordinierten genetischen Veränderungen zur Verfügung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Günter Bechly', work: 'Beiträge zu abrupten Ursprüngen im Fossilbericht (evolutionnews.org; Vorträge)', status: 'unverified', note: 'Konkrete Fundstellen vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater und Naturbeobachter',
      text: `Basilius preist die Fülle der Meerestiere, die auf Gottes Wort hin hervorgingen, und mahnt zugleich zur Demut gegenüber der Natur, deren Geheimnisse der Mensch nicht vollständig durchschaut. Die Haltung des Basilius ist für die Kambrium-Debatte hilfreich: Staunen über die Vielfalt, Offenheit für die Erforschung ihrer Geschichte und die Überzeugung, dass hinter ihr der Logos steht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilien 7–8', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'zwanzig-millionen-jahre',
      objection: `Die „Explosion" dauerte 20 Millionen Jahre oder mehr. Das ist keine Explosion, sondern eine ganz normale, wenn auch rasche Diversifizierung.`,
      objectionBy: 'Charles Marshall',
      targetsPremise: 1,
      answer: `Über die genaue Dauer kann man streiten, je nachdem, was man mitzählt. Aber auch 20 Millionen Jahre sind geologisch kurz für das, was entsteht: Gliederfüßer mit Komplexaugen, Stachelhäuter, Weichtiere, frühe Wirbeltierverwandte – völlig verschiedene Baupläne mit neuen Zelltypen und Regulationsnetzwerken. Die Frage ist nicht nur das Tempo, sondern die Menge neuer Information pro Zeit.`,
      followUps: [
        {
          id: 'millionen-generationen',
          objection: `20 Millionen Jahre sind bei kleinen Meerestieren mit jährlicher Fortpflanzung 20 Millionen Generationen. Das ist enorm viel Zeit.`,
          objectionBy: 'Donald Prothero',
          targetsPremise: 2,
          answer: `Viele Generationen helfen, wenn jeder Schritt einen Vorteil bringt. Aber neue Proteinfaltungen sind extrem selten im Sequenzraum (Axe 2004), koordinierte Mutationen haben enorme Wartezeiten (Durrett & Schmidt 2008), und die zentralen Schaltkreise der Entwicklung sind gegenüber Veränderungen äußerst widerständig (Davidson & Erwin 2006). Zeit allein ist keine Erklärung – entscheidend ist, ob der Mechanismus in dieser Zeit liefern kann.`,
          followUps: [
            {
              id: 'werkzeugkasten-praekambrisch',
              objection: `Die meisten Gene gab es schon vorher – der genetische Werkzeugkasten mit Hox- und Pax-Genen ist präkambrisch. Die Kambrische Explosion war vor allem eine Neuverschaltung von Genregulationsnetzwerken, keine Neuerfindung.`,
              objectionBy: 'Charles Marshall',
              targetsPremise: 3,
              answer: `Das verschiebt das Problem auf zwei Weisen: Erstens muss der Ursprung des Werkzeugkastens selbst erklärt werden – wer hat die Werkzeuge vor dem Bedarf geschaffen? Zweitens ist die Neuverschaltung regulatorischer Netzwerke nicht der leichte, sondern der schwierigste Teil: Davidson und Erwin zeigten, dass die zentralen Schaltkreise seit dem Kambrium kaum verändert wurden, weil Eingriffe in sie fast immer katastrophal sind.`,
              followUps: [
                {
                  id: 'davidson-selektiv-zitiert',
                  objection: `Davidson war kein ID-Vertreter! Er hielt die Evolution von Genregulationsnetzwerken für naturalistisch erklärbar. Du zitierst ihn selektiv.`,
                  objectionBy: 'Nick Matzke',
                  targetsPremise: 2,
                  answer: `Richtig – Davidson war Naturalist, und ich verwende nicht seine Schlussfolgerung, sondern seinen empirischen Befund: die Konservierung und Störanfälligkeit der Kernel-Schaltkreise. Bemerkenswert ist, dass er selbst die klassische neodarwinistische Erklärung über kleine Schritte für die Entstehung von Bauplänen als unzureichend ansah und eine neue, systembiologische Theorie forderte. Er sah also dasselbe Problem – er suchte nur eine andere Lösung.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Eric H. Davidson', work: '„Evolutionary bioscience as regulatory systems biology", Developmental Biology 357', ref: 'S. 35–40', year: '2011', status: 'paraphrase', quote: `Die klassische neodarwinistische, populationsgenetische Evolutionstheorie könne die Entstehung von Tierbauplänen nicht angemessen erklären; nötig sei eine Theorie auf Basis regulatorischer Systembiologie.`, note: 'Sinngemäß; Davidson lehnte Design ab. Wortlaut vor wörtlicher Verwendung prüfen.' },
                  ],
                  questionsBack: [
                    `Wenn Davidson die klassische Erklärung für unzureichend hielt – welche naturalistische Alternative hat sich seither durchgesetzt?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'weiche-koerper-fossilisieren-nicht',
          objection: `Die Vorfahren waren klein und weichhäutig. Solche Tiere fossilisieren kaum. Die „Explosion" ist vor allem eine Explosion der Fossilisierbarkeit durch Hartteile.`,
          objectionBy: 'Jerry Coyne',
          answer: `Gerade das Kambrium widerlegt dieses Argument teilweise: In Chengjiang und im Burgess-Schiefer sind weiche Körperteile hervorragend erhalten – bis hin zu Gehirnen und Nervensträngen (Ma et al., Nature 2012). Und präkambrische Fundstellen wie Doushantuo in China erhalten mikroskopische Strukturen, die als Tierembryonen gedeutet wurden. Wenn Erhaltung möglich war, ist das weitgehende Fehlen der Vorfahren bemerkenswert.`,
          sources: [
            { kind: 'wissenschaft', author: 'Xiaoya Ma u. a.', work: '„Complex brain and optic lobes in an early Cambrian arthropod", Nature 490', ref: 'S. 258–261', year: '2012', status: 'paraphrase' },
            { kind: 'wissenschaft', author: 'Shuhai Xiao, Yun Zhang, Andrew H. Knoll', work: '„Three-dimensional preservation of algae and animal embryos in a Neoproterozoic phosphorite", Nature 391', ref: 'S. 553–558', year: '1998', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'doushantuo-umstritten',
              objection: `Die Doushantuo-„Embryonen" könnten auch Riesenbakterien oder Einzeller sein – das ist umstritten. Und gute Erhaltungsbedingungen waren selten.`,
              objectionBy: 'Charles Marshall',
              answer: `Das stimmt – die Deutung ist umstritten, manche Forscher sehen darin z. B. Riesen-Schwefelbakterien. Ich gestehe die Unsicherheit zu. Aber das Argument hängt nicht an Doushantuo: Die Ediacara-Fauna ist über zahlreiche Fundstellen weltweit erhalten, und trotzdem sind plausible Vorfahren der kambrischen Stämme rar. Die Hypothese, die Vorfahren seien einfach nicht erhalten, wird umso schwerer zu prüfen, je mehr Fundstellen wir kennen.`,
              sources: [
                { kind: 'wissenschaft', author: 'Jake V. Bailey u. a.', work: '„Evidence of giant sulphur bacteria in Neoproterozoic phosphorites", Nature 445', ref: 'S. 198–201', year: '2007', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ediacara-vorfahren',
      objection: `Die Ediacara-Fauna zeigt präkambrische Tiere. Dickinsonia war nachweislich ein Tier – es enthielt Cholesterin-Biomarker. Die Explosion hatte also Vorläufer.`,
      objectionBy: 'Donald Prothero',
      targetsPremise: 1,
      answer: `Das gestehe ich zu: Dickinsonia war wahrscheinlich ein Tier (Bobrovskiy et al., Science 2018), und auch Kimberella wird als mögliches Weichtier-ähnliches Wesen diskutiert. Aber die meisten Ediacara-Formen lassen sich keinem kambrischen Stamm zuordnen, viele verschwinden einfach. Dass es vorher Tiere gab, bestreitet niemand; die Frage ist, ob sie als Vorfahren der kambrischen Baupläne taugen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Ilya Bobrovskiy u. a.', work: '„Ancient steroids establish the Ediacaran fossil Dickinsonia as one of the earliest animals", Science 361', ref: 'S. 1246–1249', year: '2018', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'spurenfossilien-bilateria',
          objection: `Spurenfossilien zeigen bilaterale, kriechende Tiere vor dem Kambrium. Die Bilateria waren also schon da.`,
          objectionBy: 'Nick Matzke',
          answer: `Einfache Kriechspuren zeigen, dass es kleine, bilateral gebaute, bewegliche Organismen gab. Das ist interessant. Aber ein wurmartiges Kriechtier ist noch kein Gliederfüßer mit Komplexaugen, gegliederten Beinen und Nervensystem. Die Spuren zeigen, dass es Leben gab – nicht, wie die Vielfalt der kambrischen Baupläne entstand.`,
          followUps: [
            {
              id: 'also-gab-es-vorfahren',
              objection: `Also gab es Vorfahren. Ende des Arguments.`,
              objectionBy: 'Jerry Coyne',
              answer: `Dass es frühere Lebewesen gab, war nie das Argument. Das Argument betrifft den Sprung vom Einfachen zur Vielfalt hochkomplexer Baupläne in kurzer Zeit – und die dafür nötige Information. Ein einzelliges Lebewesen ist auch ein „Vorfahr" eines Wals; das erklärt nicht, wie der Wal entstand.`,
            },
          ],
        },
      ],
    },
    {
      id: 'molekulare-uhren',
      objection: `Molekulare Uhren zeigen, dass sich die Tierstämme 100 bis 200 Millionen Jahre vor dem Kambrium trennten. Die „Explosion" ist eine Illusion der Fossilüberlieferung.`,
      objectionBy: 'Nick Matzke',
      answer: `Die Schätzungen molekularer Uhren schwanken für diese tiefen Aufspaltungen enorm – frühere Studien kamen auf über eine Milliarde Jahre (Wray et al. 1996), andere auf rund 670 Millionen (Ayala et al. 1998). Dos Reis et al. (2015) haben die Grenzen der Präzision ausdrücklich betont. Und wenn die Uhren stimmen, haben wir ein neues Rätsel: Vorfahren, die über 100 Millionen Jahre fossil unsichtbar blieben. Erwin und Kollegen nennen das den „Cambrian conundrum".`,
      sources: [
        { kind: 'wissenschaft', author: 'Gregory A. Wray, Jeffrey S. Levinton, Leo H. Shapiro', work: '„Molecular evidence for deep Precambrian divergences among metazoan phyla", Science 274', ref: 'S. 568–573', year: '1996', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Francisco J. Ayala, Andrey Rzhetsky, Francisco J. Ayala', work: '„Origin of the metazoan phyla: molecular clocks confirm paleontological estimates", PNAS 95', ref: 'S. 606–611', year: '1998', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Mario dos Reis u. a.', work: '„Uncertainty in the timing of origin of animals and the limits of precision in molecular timescales", Current Biology 25', year: '2015', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'uhren-kalibriert',
          objection: `Die modernen Methoden sind kalibriert und konvergieren auf etwa 650 bis 800 Millionen Jahre.`,
          objectionBy: 'Dennis Venema',
          answer: `Selbst wenn wir das annehmen, bleibt das Problem: Im Ediacarium gibt es Fundstellen mit hervorragender Weichteilerhaltung – und trotzdem kaum Vorfahren der kambrischen Stämme. Außerdem beruhen molekulare Uhren auf Annahmen über gleichbleibende Raten, die gerade in Phasen schneller Veränderung fragwürdig sind. Fossilien und Uhren widersprechen sich hier – das ist ein offenes Problem, keine Lösung.`,
          followUps: [
            {
              id: 'geisterlinien-normal',
              objection: `Geisterlinien – Abstammungslinien ohne Fossilien – sind in der Paläontologie völlig normal.`,
              objectionBy: 'Nick Matzke',
              answer: `Kurze Geisterlinien sind normal. Aber wenn man für Dutzende Stämme gleichzeitig über 100 Millionen Jahre unsichtbarer Vorfahren annehmen muss, wird die Annahme selbst zur Hilfshypothese, die vor allem dazu dient, die Theorie mit den Daten zu versöhnen. Das ist legitim – aber es ist kein Beleg, sondern ein Erklärungsbedarf.`,
            },
          ],
        },
      ],
    },
    {
      id: 'darwin-problem-geloest',
      objection: `Darwin sah das Problem 1859 – aber seither haben wir präkambrische Fossilien gefunden. Das Problem ist gelöst.`,
      objectionBy: 'Jerry Coyne',
      answer: `Wir haben präkambrische Mikrofossilien und die Ediacara-Fauna gefunden – das ist ein echter Erkenntnisgewinn. Aber Darwins eigentliche Erwartung war eine lange Reihe allmählicher Übergänge zu den kambrischen Tiergruppen. Diese Reihe fehlt weiterhin weitgehend. Simon Conway Morris, der führende Kambrium-Experte, nennt die Explosion ein reales Ereignis.`,
      followUps: [
        {
          id: 'darwin-selektiv-zitiert',
          objection: `Du zitierst Darwin selektiv. Er erklärte das Problem mit der Lückenhaftigkeit der geologischen Überlieferung.`,
          objectionBy: 'Donald Prothero',
          answer: `Richtig, und das sage ich ausdrücklich dazu: Darwin hoffte, die Lücke werde sich durch künftige Funde schließen. Das ist eine prüfbare Hypothese – und nach über 160 Jahren intensiver Suche, einschließlich hervorragend erhaltener Fundstellen, hat sie sich für die Vorfahren der kambrischen Stämme nicht in der erwarteten Weise bestätigt.`,
          followUps: [
            {
              id: 'meyer-kein-palaeontologe',
              objection: `Meyer ist kein Paläontologe. Marshall, ein echter Fachmann, hat sein Buch in Science zerlegt.`,
              objectionBy: 'Charles Marshall',
              answer: `Meyer ist Wissenschaftsphilosoph, das stimmt – und Marshalls Kritik verdient eine ernsthafte Antwort, die Meyer auch gegeben hat. Aber die Realität der Explosion vertritt auch Conway Morris, und Bechly ist Paläontologe. Entscheidend ist das Argument, nicht der Titel: Woher stammt die Information für die neuen Baupläne? Darauf hat auch Marshall keine detaillierte Antwort gegeben, sondern auf die Neuverschaltung vorhandener Netzwerke verwiesen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'design-ist-stopper',
      objection: `Selbst wenn wir es noch nicht wissen: „Ein Designer war's" ist keine Erklärung, sondern ein Forschungsstopper.`,
      objectionBy: 'Charles Marshall',
      targetsPremise: 4,
      answer: `Intelligenz ist eine bekannte, real wirkende Ursache für Information – keine Leerformel. Der Schluss auf Design stoppt keine Forschung: Man kann weiter untersuchen, wann welche Baupläne auftraten, wie ihre Genregulation funktioniert und welche ökologischen Bedingungen herrschten. Was der Schluss bestreitet, ist nur die Behauptung, der neodarwinistische Mechanismus habe die Information bereits erklärt.`,
      followUps: [
        {
          id: 'wer-und-warum-damals',
          objection: `Und wer ist der Designer? Und warum gerade vor 530 Millionen Jahren?`,
          objectionBy: 'Jerry Coyne',
          answer: `Der wissenschaftliche Schluss reicht bis „Intelligenz"; dass es der Schöpfer ist, ist für mich eine theologische Überzeugung, die ich offen sage. Die Frage „Warum damals?" ist berechtigt – und es spricht nichts dagegen, dass ein Schöpfer auf geeignete Umweltbedingungen wie den Sauerstoffanstieg „gewartet" hat. Ökologische Faktoren können notwendige Bedingungen sein, ohne die hinreichende Ursache für neue Information zu sein.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher stammen der präkambrische genetische Werkzeugkasten und die Genregulationsnetzwerke, die angeblich nur neu verschaltet wurden?`,
    `Warum fehlen plausible Vorfahren der kambrischen Stämme, obwohl es Fundstellen mit hervorragender Weichteilerhaltung gibt?`,
    `Wie lange dürfen Vorfahren fossil unsichtbar bleiben, bevor das selbst erklärungsbedürftig wird?`,
    `Welche Mutationen können einen neuen Bauplan erzeugen, wenn früh wirkende Entwicklungsmutationen fast immer tödlich sind?`,
  ],
  avoid: [
    `„Im Kambrium erschien alles Leben auf einmal." – Falsch; es gab präkambrisches Leben, und die Explosion betrifft vor allem Tierstämme.`,
    `„Die Explosion dauerte nur einen Augenblick." – Sie erstreckte sich über Millionen Jahre; sprich von einem geologisch kurzen Zeitraum.`,
    `Darwin zitieren, ohne seine Erklärung (Unvollständigkeit der Überlieferung) zu erwähnen.`,
    `Genesis 1 als „Vorhersage" des Kambriums ausgeben.`,
  ],
  concessions: [
    `Es gab präkambrische Tiere (z. B. Dickinsonia) und Spurenfossilien bilateraler Organismen.`,
    `Viele Paläontologen halten die Explosion für naturalistisch erklärbar; Meyer ist kein Paläontologe, und Marshalls Kritik verdient Beachtung.`,
    `Molekulare Uhren deuten auf eine längere Vorgeschichte der Tiere hin; die Debatte darüber ist offen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", year: '2013', status: 'paraphrase' },
    { kind: 'gegner', author: 'Douglas H. Erwin, James W. Valentine', work: 'The Cambrian Explosion: The Construction of Animal Biodiversity', year: '2013', status: 'paraphrase', note: 'Das Standardwerk der Fachwissenschaft.' },
    { kind: 'wissenschaft', author: 'Simon Conway Morris', work: 'Phil. Trans. R. Soc. B 361, 1069–1083', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Charles R. Marshall', work: 'Science 341, 1344', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Kambrische Explosion', 'Fossilbericht', 'Genregulationsnetzwerke', 'Meyer', 'Ediacara', 'Molekulare Uhren'],
  related: [
    'palaeontologie/luecken-werden-geschlossen',
    'palaeontologie/uebergangsformen',
    'evolution/neue-proteine-leicht',
    'genetik/wartezeitproblem',
    'chemie-biochemie/dna-ist-keine-information',
  ],
};

export default claim;
