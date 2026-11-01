import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'menschliche-evolution-belegt',
  title: `„Die Evolution des Menschen ist lückenlos belegt."`,
  proponents: [
    { name: 'Donald Johanson', role: 'Paläoanthropologe, Entdecker von „Lucy" (1974)', work: 'Lucy: The Beginnings of Humankind (1981, mit Maitland Edey)' },
    { name: 'Lee R. Berger', role: 'Paläoanthropologe, University of the Witwatersrand; Entdecker von Homo naledi', work: 'Berger u. a., eLife 4 (2015); Cave of Bones (2023, mit John Hawks)' },
    { name: 'John Hawks', role: 'Paläoanthropologe, University of Wisconsin–Madison', work: 'Arbeiten zu Homo naledi und zur Populationsgeschichte des Menschen' },
    { name: 'Chris Stringer', role: 'Paläoanthropologe, Natural History Museum London', work: 'Lone Survivors (2012)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009), Kap. 8' },
  ],
  steelman: `Wir besitzen heute Tausende Homininen-Fossilien aus sieben Millionen Jahren: Sahelanthropus (ca. 7 Millionen Jahre), Ardipithecus (4,4), zahlreiche Australopithecinen wie „Lucy" (3,2), die versteinerten Fußspuren von Laetoli (3,66), Homo habilis, Homo erectus (ab ca. 1,9 Millionen Jahren), Homo heidelbergensis, Neandertaler und schließlich Homo sapiens, dessen älteste Funde aus Jebel Irhoud in Marokko rund 300.000 Jahre alt sind. Die Gehirngröße nimmt zu, der aufrechte Gang wird perfektioniert, Werkzeugkulturen werden komplexer. Die Genetik bestätigt das Bild: Neandertaler und Denisovaner haben sich mit modernen Menschen vermischt; ihre DNA steckt noch in uns. Homo naledi zeigt mit seinem kleinen Gehirn und womöglich bewusstem Umgang mit Toten, dass „Menschsein" graduell ist. Es gibt keinen Bruch, an dem ein „erster Mensch" auftauchen könnte.`,
  biblical: {
    summary: `Die Schrift lehrt, dass Gott den Menschen nach seinem Bild schuf (Gen 1,26–27), ihn aus „Erde" bildete und ihm seinen Lebensatem gab (Gen 2,7) und ihn mit Würde krönte (Ps 8,5–6). Der Text nennt kein Datum und beschreibt keine Anatomie. Er verbietet nicht, dass es ausgestorbene Homininen gab; er lehrt, dass der Mensch als Person unmittelbar von Gott gewollt ist und von einem ersten Menschenpaar abstammt.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,27', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.` },
      { kind: 'bibel', work: 'Genesis', ref: '2,7', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.` },
      { kind: 'bibel', work: 'Psalmen', ref: '8,5–6', translation: 'Luther 1912', status: 'verbatim', quote: `was ist der Mensch, daß du sein gedenkst, und des Menschen Kind, daß du dich seiner annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt.` },
    ],
  },
  church: {
    summary: `Die Väter bestimmten das Menschsein nicht über Schädelvolumen oder Körperbau, sondern über die vernunftbegabte Seele, die Freiheit und die Berufung zur Gemeinschaft mit Gott (Athanasius, De Incarnatione 3). Gregor von Nyssa deutet die aufrechte Gestalt und die Hände als leibliche Entsprechung der vernünftigen Natur. Die koptische Kirche hält fest: Adam und Eva sind reale Personen, der Mensch ist nach Gottes Bild geschaffen. Wie die Fossilien ausgestorbener Homininen einzuordnen sind, hat sie nicht dogmatisch entschieden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8–9', status: 'paraphrase', quote: `Der Mensch geht aufrecht und blickt nach oben; seine Hände dienen dem Leib, damit der Mund frei wird für das vernünftige Wort.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3', status: 'paraphrase', quote: `Gott gab den Menschen Anteil an der Kraft seines Logos, damit sie, gleichsam Abbilder des Logos, vernünftig seien.` },
    ],
  },
  opposingView: {
    summary: `Der Homininen-Fossilbericht ist umfangreich und wird von der Fachwelt als starker Beleg für die Evolution des Menschen gewertet. „Lückenlos" ist er jedoch nicht, und das sagen auch Paläoanthropologen selbst: Der Stammbaum gleicht eher einem Busch mit vielen Seitenzweigen als einer Leiter; die Zuordnung vieler Funde ist umstritten; Homo habilis gilt manchen als „Sammeltaxon" (Wood & Collard 1999 schlugen vor, habilis und rudolfensis zu Australopithecus zu stellen). Der Übergang von Australopithecus zu Homo erectus, der mit Körperproportionen nahe am modernen Menschen relativ plötzlich auftritt, wird von einigen Fachleuten als deutlicher Sprung beschrieben. Der vollständige Schädel 5 aus Dmanisi (Lordkipanidze et al. 2013) zeigt eine so große Variabilität innerhalb einer Fundstelle, dass mehrere frühe Homo-„Arten" möglicherweise eine einzige variable Linie bilden.`,
    detail: `Ehrlich festhalten:
- Australopithecinen wie Lucy liefen aufrecht, besaßen aber auch Merkmale für das Klettern (lange Arme, gebogene Finger); ihre Lebensweise wird diskutiert.
- Die Vermischung mit Neandertalern und Denisovanern ist genetisch gut belegt (Green et al. 2010; Reich et al. 2010). Für Christen bedeutet das: Neandertaler waren Menschen im vollen Sinn – mit ihnen konnten Kinder gezeugt werden.
- Die These, Homo naledi habe seine Toten bewusst bestattet, wurde 2023 vorgestellt und von Fachgutachtern stark kritisiert; sie ist umstritten.`,
    sources: [
      { kind: 'wissenschaft', author: 'Bernard Wood, Mark Collard', work: '„The human genus", Science 284', ref: 'S. 65–71', year: '1999', status: 'paraphrase', quote: `Homo habilis und Homo rudolfensis erfüllen die Kriterien der Gattung Homo nicht eindeutig und könnten zu Australopithecus gestellt werden.` },
      { kind: 'wissenschaft', author: 'David Lordkipanidze u. a.', work: '„A complete skull from Dmanisi, Georgia, and the evolutionary biology of early Homo", Science 342', ref: 'S. 326–331', year: '2013', status: 'paraphrase', quote: `Die große Variation der Dmanisi-Schädel deutet darauf hin, dass frühe Homo-Formen, die als verschiedene Arten beschrieben wurden, einer einzigen, variablen Linie angehören könnten.` },
      { kind: 'wissenschaft', author: 'Jean-Jacques Hublin u. a.', work: '„New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens", Nature 546', ref: 'S. 289–292', year: '2017', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Richard E. Green u. a.', work: '„A draft sequence of the Neandertal genome", Science 328', ref: 'S. 710–722', year: '2010', status: 'paraphrase', quote: `Nicht-afrikanische heutige Menschen tragen einen kleinen Anteil (wenige Prozent) Neandertaler-DNA.` },
    ],
  },
  quickAnswer: `Es gibt viele Homininen-Fossilien, das ist wahr – aber „lückenlos" sagen nicht einmal Paläoanthropologen. Der Stammbaum ist ein umstrittener Busch, Homo habilis gilt manchen als Sammelkategorie, und Homo erectus erscheint mit fast modernen Körperproportionen relativ plötzlich. Vor allem aber: Was den Menschen zum Menschen macht – Vernunft, Sprache, Gottesbeziehung –, hinterlässt keine Knochen. Ob ein Neandertaler ein Nachkomme Adams war, entscheidet kein Schädelvolumen.`,
  keyPoints: [
    `**Busch statt Leiter:** Die Zuordnung vieler Funde ist umstritten; Abstammungslinien sind Rekonstruktionen, keine Beobachtungen.`,
    `**Der Sprung zu Homo:** Homo erectus erscheint vor rund 1,9 Millionen Jahren mit Körperproportionen nahe am modernen Menschen; Homo habilis ist als Bindeglied umstritten (Wood & Collard 1999).`,
    `**Dmanisi:** Die enorme Variation an einer Fundstelle zeigt, wie unsicher die Abgrenzung früher Homo-„Arten" ist (Lordkipanidze et al. 2013).`,
    `**Lucy ist ein Mosaik:** aufrechter Gang plus Kletter-Anpassungen – ein eigenständiges Wesen, kein „halber Mensch".`,
    `**Neandertaler waren Menschen:** Die Vermischung zeigt, dass sie zur Menschheit gehörten – vereinbar mit Modellen, in denen Adam weit zurückliegt.`,
    `**Das Gottesbild ist nicht fossil:** Vernunft und Seele zeigen sich indirekt (Symbole, Sprache), nie direkt im Knochen.`,
  ],
  voices: [
    {
      person: 'casey-luskin',
      role: 'als Wissenschaftskommunikator mit Schwerpunkt Paläoanthropologie',
      text: `Luskin hat die Fachliteratur zur menschlichen Herkunft ausgewertet und betont, dass viele Paläoanthropologen den Übergang von den Australopithecinen zur Gattung Homo als abrupt beschreiben. Homo habilis sei als Bindeglied umstritten, und die Australopithecinen seien eher affenähnlich als menschenähnlich gewesen. Sein Fazit: Der Fossilbericht zeige eher eine deutliche Kluft zwischen Australopithecus und Homo als eine glatte Übergangsreihe.`,
      sources: [
        { kind: 'fachliteratur', author: 'Casey Luskin', work: '„Human Origins and the Fossil Record", in: A. Gauger, D. Axe, C. Luskin, Science and Human Origins', ref: 'Kap. 3', year: '2012', status: 'paraphrase', note: 'Kapitelzuordnung per Verlags- und Rezensionsangaben bestätigt. Eine erweiterte Fassung erschien als „Missing Transitions: Human Origins and the Fossil Record" in: J. P. Moreland u. a. (Hg.), Theistic Evolution (2017).' },
        { kind: 'wissenschaft', author: 'John Hawks, Keith Hunley, Sang-Hee Lee, Milford Wolpoff', work: '„Population bottlenecks and Pleistocene human evolution", Molecular Biology and Evolution 17 (1)', ref: 'S. 2–22', year: '2000', status: 'paraphrase', quote: `Die Entstehung von Homo sapiens (im weiten Sinn, beginnend mit Homo erectus) sei mit deutlichen anatomischen Veränderungen verbunden, die auf ein punktuelles Ereignis und einen Populationsengpass hindeuten.`, note: 'Die Autoren sind Evolutionsbiologen; Luskin zieht ihre Arbeit für die Abruptheit des Übergangs heran.' },
        { kind: 'gegner', author: 'Ernst Mayr', work: 'What Makes Biology Unique? Considerations on the Autonomy of a Scientific Discipline', year: '2004', status: 'paraphrase', quote: `Die frühesten Homo-Fossilien (Homo rudolfensis, Homo erectus) sind von Australopithecus durch eine große, nicht überbrückte Lücke getrennt; mangels Bindeglieder müsse man auf eine historische Erzählung zurückgreifen.`, original: `… are separated from Australopithecus by a large, unbridged gap.`, note: 'Wortlaut dieses Satzteils durch mehrere übereinstimmende Sekundärzitate bestätigt; die oft genannte Seitenzahl (S. 198) ist nicht am Original geprüft. Mayr war entschiedener Evolutionsbiologe – er beschreibt eine Lücke im Befund, nicht einen Zweifel an der Evolution.' },
      ],
    },
    {
      person: 'ann-gauger',
      role: 'als Biologin',
      text: `Gauger verbindet den Fossilbefund mit der Genetik: Wenn Homo erectus relativ plötzlich mit einem neuen Körperbau auftritt – längere Beine, schmaleres Becken, veränderte Brustkorbform, größeres Gehirn –, müssen in kurzer Zeit viele koordinierte genetische Änderungen geschehen sein. Das verschärft die Frage, ob die populationsgenetisch verfügbare Zeit dafür ausreicht. Zugleich zeigt sie mit Ola Hössjer, dass die genetischen Daten einen realen Ursprung der Menschheit in einem ersten Paar nicht ausschließen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph, der Paläoanthropologie und Theologie verbindet',
      text: `Craig hat in einer umfangreichen Studie die paläoanthropologischen Belege für menschliches Verhalten gesichtet – Werkzeugkultur, Feuergebrauch, Symbolik – und argumentiert, dass bereits Neandertaler und Homo heidelbergensis die Kennzeichen voll menschlicher Fähigkeiten zeigen. Er schlägt daher vor, Adam und Eva als Stammeltern aller dieser Menschen sehr früh anzusetzen, vor etwa 750.000 Jahren oder mehr. Sein Modell ist nicht Lehre der koptischen Kirche, zeigt aber, dass der Fossilbericht einen realen Adam nicht ausschließt.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam', ref: 'Teil 3', year: '2021', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Anthropologe der Väterzeit',
      text: `Gregor sieht im aufrechten Gang und in den Händen des Menschen Zeichen seiner vernünftigen Natur: Die Hände entlasten den Mund, sodass er für die Sprache frei wird; der aufrechte Blick richtet sich nach oben. Er versteht den Leib als Werkzeug des Geistes. Das hilft heute bei der Einordnung von Fossilien: Ein aufrecht gehender Hominine ist noch nicht dadurch Mensch im vollen Sinn – entscheidend ist der Geist, der sich in Sprache, Symbol und Gottesbeziehung äußert.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8–10', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Gottesbildes',
      text: `Für Athanasius ist der Mensch dadurch Mensch, dass er Anteil am Logos hat und zur Erkenntnis Gottes fähig ist. Diese Bestimmung ist keine Frage der Gehirngröße. Sie erklärt, warum Christen die Frage „Ab wann ist ein Fossil ein Mensch?" nicht allein der Anatomie überlassen können – und zugleich, warum sie die Fossilien nicht fürchten müssen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3; 11–12', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'schoene-reihe',
      objection: `Wir haben eine schöne Reihe: Australopithecus, Homo habilis, Homo erectus, Homo heidelbergensis, Homo sapiens. Jedes Lehrbuch zeigt sie. Was willst du mehr?`,
      objectionBy: 'Jerry Coyne',
      answer: `Die „Reihe" ist eine Rekonstruktion, und Fachleute sprechen eher von einem Busch mit vielen umstrittenen Zweigen. Besonders der Übergang von Australopithecus zu Homo erectus ist auffällig: Homo erectus erscheint vor rund 1,9 Millionen Jahren mit Körperproportionen, die denen moderner Menschen schon recht nahekommen. Einige Paläoanthropologen haben diesen Übergang als deutlichen Sprung beschrieben.`,
      followUps: [
        {
          id: 'habilis-fuellt-luecke',
          objection: `Homo habilis und Homo rudolfensis füllen genau diese Lücke – mit größerem Gehirn als Australopithecus und ersten Steinwerkzeugen.`,
          objectionBy: 'John Hawks',
          answer: `Gerade diese Formen sind umstritten: Wood und Collard schlugen 1999 in Science vor, habilis und rudolfensis wegen ihrer Körperproportionen und ihrer Entwicklung eher zu Australopithecus zu stellen. Homo habilis wird von manchen als Sammelkategorie für recht unterschiedliche Funde betrachtet. Das macht ihn als glattes Bindeglied fragwürdig.`,
          followUps: [
            {
              id: 'dmanisi-variabilitaet',
              objection: `Dmanisi zeigt die enorme Variabilität früher Homo. Wenn eine Population so variabel war, gibt es keine Lücke – nur eine variable, sich wandelnde Linie.`,
              objectionBy: 'Donald Prothero',
              answer: `Dmanisi zeigt tatsächlich, dass verschiedene als eigene Arten beschriebene frühe Homo-Formen womöglich zu einer einzigen variablen Linie gehören. Das kann man aber auch umgekehrt lesen: Es reduziert die Zahl der vermeintlichen Zwischenstufen innerhalb von Homo. Den Übergang von Australopithecus zu Homo überbrückt es nicht – es zeigt vor allem, wie unsicher die Einordnung von Einzelfunden ist.`,
              followUps: [
                {
                  id: 'ledi-geraru-kiefer',
                  objection: `Seit 2015 haben wir den Unterkiefer von Ledi-Geraru, rund 2,8 Millionen Jahre alt, mit Merkmalen früher Homo. Die Gattung Homo reicht damit fast bis zu den späten Australopithecinen zurück. Die angebliche Lücke ist geschlossen.`,
                  objectionBy: 'John Hawks',
                  answer: `Ein wichtiger Fund – aber es ist ein Unterkieferfragment mit Zähnen. Die eigentliche Frage beim Übergang zu Homo erectus betrifft den ganzen Körperbau: lange Beine, schmales Becken, Ausdauerlaufen, veränderte Proportionen und ein größeres Gehirn. Dafür braucht man Skelettfunde, und gerade aus dem Zeitraum zwischen etwa 2,8 und 2 Millionen Jahren sind sie spärlich. Ein Kiefer kann ein frühes Datum für bestimmte Zahnmerkmale belegen – den Umbau des Körpers belegt er nicht.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Brian Villmoare u. a.', work: '„Early Homo at 2.8 Ma from Ledi-Geraru, Afar, Ethiopia", Science 347', year: '2015', status: 'paraphrase', quote: `Ein rund 2,8 Millionen Jahre alter Unterkiefer (LD 350-1) zeigt eine Kombination aus ursprünglichen und für Homo typischen Merkmalen.` },
                  ],
                  questionsBack: [
                    `Welche Skelettfunde aus der Zeit vor zwei Millionen Jahren zeigen den Übergang im Körperbau zu Homo erectus?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'lucy-aufrechter-gang',
      objection: `Lucy beweist den aufrechten Gang bei einem Vorfahren mit affenartigem Gehirn vor 3,2 Millionen Jahren. Das ist der Übergang schlechthin.`,
      objectionBy: 'Donald Johanson',
      answer: `Lucy lief aufrecht, das ist gut belegt, auch durch die Fußspuren von Laetoli. Zugleich hatte sie lange Arme, gebogene Finger und weitere Merkmale, die auf häufiges Klettern hindeuten. Sie war ein Mosaik – ein eigenständiges, faszinierendes Wesen. Ob sie unser Vorfahr war oder ein Seitenzweig, ist eine Frage der Rekonstruktion.`,
      followUps: [
        {
          id: 'mosaik-vorhergesagt',
          objection: `Genau so ein Mosaik sagt die Evolution voraus.`,
          objectionBy: 'Jerry Coyne',
          answer: `Ein Mosaik ist auch mit einer eigenständigen Art aufrecht gehender Menschenaffen vereinbar, die ausgestorben ist. Für den christlichen Glauben ist das kein Problem: Nichts in der Schrift verbietet ausgestorbene zweibeinige Primaten. Die Frage, wann und wie das Bild Gottes in die Welt kam, entscheidet sich nicht an einem Becken.`,
          followUps: [
            {
              id: 'sediba-zwischenform',
              objection: `Australopithecus sediba, 2010 von Lee Berger beschrieben, ist genau die Zwischenform: australopithecinenartiges Gehirn, aber menschenähnliche Hand, Becken und Zähne. Das Mosaik zwischen Australopithecus und Homo liegt auf dem Tisch.`,
              objectionBy: 'Donald Prothero',
              answer: `Sediba ist ein faszinierendes Mosaik – aber seine Datierung von knapp zwei Millionen Jahren macht ihn jünger als die frühesten Homo-Funde wie Ledi-Geraru. Er kann also kaum der Vorfahre von Homo sein; viele Fachleute halten ihn für einen Seitenzweig. Das zeigt, was der Fossilbericht der Homininen häufig liefert: Merkmalskombinationen, die in verschiedenen Linien auftauchen, ohne dass sich eine klare Ahnenreihe ergibt.`,
              sources: [
                { kind: 'wissenschaft', author: 'Lee R. Berger u. a.', work: '„Australopithecus sediba: a new species of Homo-like australopith from South Africa", Science 328', year: '2010', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'naledi-graduell',
      objection: `Homo naledi hatte ein Gehirn kaum größer als das eines Schimpansen – und hat womöglich seine Toten bestattet und Symbole geritzt. Menschsein ist graduell; es gibt keine Grenze.`,
      objectionBy: 'Lee Berger',
      answer: `Die Bestattungs- und Symbolthesen zu Homo naledi wurden 2023 vorgestellt und von Fachgutachtern scharf kritisiert; sie sind umstritten. Aber selbst wenn sie zuträfen, würde das zeigen, dass Menschsein nicht an der Gehirngröße hängt – und genau das sagt die christliche Tradition: Das Bild Gottes liegt im Geist, nicht im Schädelvolumen.`,
      followUps: [
        {
          id: 'wo-grenze-gottesbild',
          objection: `Wenn naledi Rituale hatte – wo ziehst du dann die Grenze zum „Bild Gottes"? Du kannst sie nicht benennen.`,
          objectionBy: 'John Hawks',
          answer: `Ehrlich: Ich kann sie im Fossilbericht nicht mit dem Lineal ziehen, und das muss ich auch nicht. Die Seele hinterlässt keine Knochen; Hinweise auf sie sind indirekt – Symbole, Sprache, Sorge um die Toten. Die Theologie sagt, **dass** es eine Schwelle gibt – personale Gottesbeziehung –, nicht, an welchem Fossil man sie ablesen kann. Unsicherheit über die Grenze ist kein Beweis, dass es keine gibt.`,
          questionsBack: [
            `Ist für dich die Unschärfe einer Grenze ein Beweis, dass es keinen Unterschied gibt – wie zwischen Tag und Nacht in der Dämmerung?`,
          ],
          followUps: [
            {
              id: 'seele-unsichtbar-unwiderlegbar',
              objection: `Also ist deine Seele unsichtbar und hinterlässt keine Spuren. Dann ist sie empirisch leer – eine Behauptung, die sich nie überprüfen lässt.`,
              objectionBy: 'Jerry Coyne',
              answer: `Nicht jede Wahrheit ist eine Messgröße – auch nicht die Gültigkeit der Logik oder der Wert eines Menschenlebens. Aber die Seele ist nicht spurlos: Ihre Wirkungen zeigen sich in symbolischem Denken, rekursiver Sprache, Mathematik, Kunst und Gottesverehrung – also in genau den Fähigkeiten, die wir im archäologischen Befund als Zeichen des Menschseins lesen. Die Theologie sagt allerdings nicht, dass die Gottebenbildlichkeit ein Knochenmerkmal ist; sie ist eine Beziehung und eine Berufung, die sich in Vernunft und Freiheit ausdrückt.`,
              voices: [
                {
                  person: 'gregor-nyssa',
                  role: 'als Kirchenvater',
                  text: `Gregor betont, dass die Gottebenbildlichkeit nicht in der äußeren Gestalt liegt, sondern in Vernunft, Freiheit und der Fähigkeit zur Tugend. Der aufrechte Gang und die Hände dienen nach ihm dem Geist – sie sind Werkzeuge der Vernunft, nicht ihr Ursprung.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 5 und 8', year: '379', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neandertaler-denisovaner',
      objection: `Neandertaler und Denisovaner haben sich mit modernen Menschen vermischt; ihre DNA steckt in uns. Es gab viele Menschenformen nebeneinander. Wo bleibt da euer Adam?`,
      objectionBy: 'Chris Stringer',
      answer: `Die Vermischung zeigt vor allem eines: Neandertaler und Denisovaner gehörten zur Menschheit – man konnte mit ihnen Kinder haben. Das ist gut vereinbar mit Modellen, in denen Adam und Eva weit vor der Aufspaltung dieser Gruppen lebten, etwa bei Craig vor rund 750.000 Jahren oder mehr. Dann sind auch Neandertaler Nachkommen Adams.`,
      sources: [
        { kind: 'wissenschaft', author: 'David Reich u. a.', work: '„Genetic history of an archaic hominin group from Denisova Cave in Siberia", Nature 468', ref: 'S. 1053–1060', year: '2010', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'adam-vor-500000-jahren',
          objection: `Dann lebte Adam vor über einer halben Million Jahren – lange vor allem, was die Genesis beschreibt: Ackerbau, Städte, Metallbearbeitung.`,
          objectionBy: 'Jerry Coyne',
          answer: `Das ist eine echte Spannung, die ich nicht verschweige. Es gibt verschiedene christliche Antworten: Craig liest Gen 1–11 als Erzählung realer Ereignisse in symbolisch geprägter Form; Swamidass hält Adam jung und erklärt die Abstammung aller Menschen genealogisch. Die koptische Kirche hat kein Datum festgelegt. Verbindlich ist, dass Adam eine reale Person ist – siehe den Claim zu Adam und Eva.`,
          followUps: [
            {
              id: 'genealogischer-adam-option',
              objection: `Es gibt einen Ausweg, den du nicht ausschließen musst: Nach meinem genealogischen Modell könnten Adam und Eva vor etwa 6.000 bis 10.000 Jahren gelebt haben und trotzdem genealogische Vorfahren aller heute lebenden Menschen sein – neben anderen Menschen außerhalb des Gartens.`,
              objectionBy: 'Joshua Swamidass',
              answer: `Das Modell ist mathematisch ernst zu nehmen, und ich respektiere den Versuch, Schrift und Daten zusammenzubringen. Aus koptischer Sicht müssen allerdings einige Fragen geklärt werden: Wie verhalten sich die Menschen „außerhalb des Gartens" zur Gottebenbildlichkeit und zur Solidarität aller Menschen mit Adam, von der Röm 5,12 spricht? Die Tradition liest Adam als ersten Menschen und Stammvater aller. Das Modell ist eine diskutierte Option, keine kirchlich rezipierte Lehre – man darf es fair vorstellen, ohne es zur Grundlage zu machen.`,
              voices: [
                {
                  person: 'joshua-swamidass',
                  role: 'als Computerbiologe',
                  text: `Swamidass stützt sich auf Arbeiten zur genealogischen Vorfahrenschaft (Rohde, Olson und Chang 2004), nach denen der jüngste gemeinsame genealogische Vorfahr aller heute lebenden Menschen nur wenige Jahrtausende zurückliegen dürfte. Er unterscheidet strikt zwischen genetischer und genealogischer Abstammung und hält ein de-novo-erschaffenes Paar Adam und Eva als universale genealogische Vorfahren für mit den Daten vereinbar.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry', year: '2019', status: 'paraphrase' },
                  ],
                },
                {
                  person: 'athanasius',
                  role: 'als Kirchenvater',
                  text: `Für Athanasius hängt das Heil daran, dass der Logos die ganze Menschennatur annahm, die in Adam gefallen war. Jedes Modell der Menschheitsgeschichte muss daher festhalten, dass alle Menschen an dieser einen Natur teilhaben, die Christus geheilt hat.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '8–10', year: 'ca. 318', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '5,12', status: 'paraphrase', quote: `Durch einen Menschen ist die Sünde in die Welt gekommen und durch die Sünde der Tod, und so ist der Tod zu allen Menschen durchgedrungen.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jebel-irhoud-mosaik',
      objection: `Jebel Irhoud in Marokko zeigt Homo sapiens vor rund 315.000 Jahren – mit modernem Gesicht, aber noch länglichem, altertümlichem Hirnschädel. Unsere Art entstand mosaikartig über Hunderttausende Jahre in ganz Afrika. Da gibt es keinen Moment, an dem plötzlich „Adam" auftaucht.`,
      objectionBy: 'Chris Stringer',
      answer: `Die Funde sind wichtig, und ich bestreite das hohe Alter nicht. Sie passen aber gut zu christlichen Modellen, die Adam weit vor dem Auftreten der heutigen Schädelform ansetzen: William Lane Craig etwa sieht in Adam einen Vertreter von Homo heidelbergensis, den gemeinsamen Vorfahren von Neandertalern, Denisovanern und modernen Menschen. Dann ist das mosaikartige Herausbilden der heutigen Anatomie eine Geschichte **innerhalb** der Menschheit, nicht ihr Anfang. Die Schrift beschreibt die Erschaffung des Menschen, nicht die Entstehung einer bestimmten Schädelform.`,
      voices: [
        {
          person: 'craig',
          role: 'als Philosoph und Theologe',
          text: `Craig argumentiert, dass die Fähigkeiten, die man mit Gottebenbildlichkeit verbindet – abstraktes Denken, Sprache, symbolisches Verhalten –, bereits bei den gemeinsamen Vorfahren von Neandertalern und modernen Menschen erkennbar sind. Er datiert Adam und Eva deshalb vor mindestens 750.000 Jahren und liest Gen 1–11 als Erzählung über reale Ereignisse in bildhafter Form.`,
          sources: [
            { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam: A Biblical and Scientific Exploration', year: '2021', status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'wissenschaft', author: 'Jean-Jacques Hublin u. a.', work: '„New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens", Nature 546', year: '2017', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'neandertaler-kunst',
          objection: `Dann musst du auch Neandertaler als Ebenbilder Gottes anerkennen. Höhlenmalereien in Spanien sind über 64.000 Jahre alt – älter als moderne Menschen in Europa. Neandertaler hatten Symbole, Schmuck, Bestattungen.`,
          objectionBy: 'John Hawks',
          answer: `Das ist für mich kein Problem, sondern eine stimmige Folgerung: Wer zur Menschheit gehört, eine vernunftbegabte Seele hat und mit modernen Menschen fruchtbare Nachkommen zeugte – was die Genetik für Neandertaler zeigt –, stammt nach christlichem Verständnis von Adam ab und trägt Gottes Bild. Fair bleiben: Die Datierung der spanischen Höhlenkunst auf über 64.000 Jahre wird von anderen Fachleuten bestritten. Aber selbst wenn sie zutrifft, bestätigt sie nur, dass Neandertaler Menschen waren.`,
          sources: [
            { kind: 'wissenschaft', author: 'Dirk L. Hoffmann u. a.', work: '„U-Th dating of carbonate crusts reveals Neandertal origin of Iberian cave art", Science 359', year: '2018', status: 'paraphrase', note: 'Datierung umstritten; Kritiker bezweifeln die Methode an diesen Proben.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Homininen-Stammbaum eine beobachtete Reihe oder eine umstrittene Rekonstruktion?`,
    `Warum schlagen Fachleute vor, Homo habilis zu Australopithecus zu stellen?`,
    `Woran erkennst du an einem Knochen Vernunft, Sprache oder Gottesbeziehung?`,
    `Wenn Neandertaler und moderne Menschen gemeinsame Kinder hatten – waren Neandertaler dann nicht Menschen im vollen Sinn?`,
  ],
  avoid: [
    `„Alle Homininen-Fossilien sind entweder reine Affen oder reine Menschen." – Das wird der Datenlage nicht gerecht.`,
    `Piltdown oder „Nebraska-Mensch" als Beleg anführen, dass die Paläoanthropologie unseriös sei – diese Fälle sind ein Jahrhundert alt und wurden von der Wissenschaft selbst aufgeklärt.`,
    `Behaupten, Neandertaler seien „Tiere" gewesen – die Genetik zeigt das Gegenteil.`,
  ],
  concessions: [
    `Der Homininen-Fossilbericht ist umfangreich und zeigt eine Abfolge von Formen mit zunehmend menschenähnlichen Merkmalen.`,
    `Neandertaler und Denisovaner haben sich mit modernen Menschen vermischt.`,
    `Aufrechter Gang ist bei Australopithecinen gut belegt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam', year: '2021', status: 'paraphrase' },
    { kind: 'gegner', author: 'Chris Stringer', work: 'Lone Survivors: How We Came to Be the Only Humans on Earth', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Menschliche Evolution', 'Homininen', 'Lucy', 'Homo naledi', 'Dmanisi', 'Neandertaler', 'Adam'],
  related: [
    'genetik/adam-eva-genetisch-unmoeglich',
    'genetik/mensch-schimpanse-99-prozent',
    'evolutionaere-psychologie/mensch-nur-tier',
    'palaeontologie/uebergangsformen',
  ],
};

export default claim;
