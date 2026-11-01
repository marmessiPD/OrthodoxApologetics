import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mensch-nur-tier',
  title: `„Der Mensch ist nur ein Tier – kein qualitativer Unterschied."`,
  proponents: [
    { name: 'Charles Darwin', role: 'Naturforscher (1809–1882)', work: 'The Descent of Man (1871)' },
    { name: 'Peter Singer', role: 'Philosoph, Princeton University', work: 'Animal Liberation (1975); Practical Ethics (1979/2011)' },
    { name: 'Frans de Waal', role: 'Primatologe, Emory University (gest. 2024)', work: 'Are We Smart Enough to Know How Smart Animals Are? (2016)' },
    { name: 'Yuval Noah Harari', role: 'Historiker, Hebräische Universität Jerusalem', work: 'Sapiens: A Brief History of Humankind (2011/2014)' },
    { name: 'Desmond Morris', role: 'Zoologe', work: 'The Naked Ape (1967)' },
  ],
  steelman: `Darwin hat es klar gesagt: Der Unterschied zwischen dem Geist des Menschen und dem der höheren Tiere ist, so groß er auch sein mag, ein Unterschied des Grades und nicht der Art. Wir teilen den größten Teil unseres Erbguts mit Schimpansen. Krähen bauen Werkzeuge, Schimpansen haben regionale Kulturen, Elefanten trauern, Ratten befreien gefangene Artgenossen, Häher planen für die Zukunft, Bonobos wie Kanzi verstehen Hunderte Wörter. Jede Grenze, die man zwischen Mensch und Tier ziehen wollte – Werkzeuggebrauch, Sprache, Kultur, Empathie, Selbsterkennung im Spiegel – ist gefallen. Die Vorstellung einer besonderen Gottebenbildlichkeit ist religiöse Überheblichkeit, „Speziesismus", wie Peter Singer sagt: dieselbe Logik wie Rassismus, nur gegen andere Arten gerichtet. Sie hat dazu geführt, dass wir Tiere und die Natur rücksichtslos ausbeuten. Und Menschenrechte? Nach Harari sind sie ein gemeinsamer Mythos, eine nützliche Fiktion wie Geld oder Nationen.`,
  biblical: {
    summary: `Die Bibel betont zunächst, was Mensch und Tier gemeinsam haben: Beide sind Geschöpfe, beide aus Erde gebildet (Gen 2,7.19), beide atmen und sterben (Pred 3,19). Zugleich schafft Gott den Menschen allein „zu seinem Bilde" (Gen 1,26–27), haucht ihm persönlich den Lebensatem ein (Gen 2,7) und lässt ihn die Tiere benennen (Gen 2,19–20) – Sprache und Erkenntnis. Der Psalmist staunt: „Was ist der Mensch, dass du sein gedenkst? … Du hast ihn wenig niedriger gemacht denn Gott" (Ps 8,5–6). Die Herrschaft über die Schöpfung ist ein Auftrag, sie „zu bebauen und zu bewahren" (Gen 2,15), keine Lizenz zur Grausamkeit: „Der Gerechte erbarmt sich seines Viehes" (Spr 12,10).`,
    detail: `- **Pred 3,19–21:** „Es geht dem Menschen wie dem Vieh" – Kohelet spricht hier bewusst aus der Perspektive „unter der Sonne", also des reinen Diesseits. Er fragt: „Wer weiß, ob der Odem des Menschen aufwärts fahre?" und antwortet später: „Der Geist kehrt zu Gott zurück, der ihn gegeben hat" (12,7).
- **Gen 9,6:** Mord ist verboten, „denn Gott hat den Menschen zu seinem Bilde gemacht" – die Gottebenbildlichkeit begründet die Unantastbarkeit jedes menschlichen Lebens.
- **Mt 6,26; 10,29–31:** Gott sorgt für die Vögel – und die Menschen sind „besser als viele Sperlinge". Tiere haben Wert, Menschen eine besondere Würde.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,26–27', quote: `Und Gott sprach: Lasset uns Menschen machen, ein Bild, das uns gleich sei, die da herrschen über die Fische im Meer und über die Vögel unter dem Himmel und über das Vieh und über die ganze Erde und über alles Gewürm, das auf Erden kriecht. Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '8,5–7', quote: `was ist der Mensch, daß du sein gedenkst, und des Menschen Kind, daß du dich sein annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt. Du hast ihn zum Herrn gemacht über deiner Hände Werk; alles hast du unter seine Füße getan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '3,19', quote: `Denn es geht dem Menschen wie dem Vieh: wie dies stirbt, so stirbt er auch, und haben alle einerlei Odem, und der Mensch hat nichts mehr denn das Vieh; denn es ist alles eitel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '2,19–20', status: 'paraphrase', quote: `Gott brachte die Tiere zu dem Menschen, dass er sähe, wie er sie nennte; und wie der Mensch jedes Tier nennen würde, so sollte es heißen.` },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt mit den Vätern, dass der Mensch nach dem Bild Gottes mit einer vernunftbegabten (*logikos*) Seele geschaffen ist: Er hat Anteil am Logos, kann Gott erkennen, frei entscheiden, sprechen, lieben und schöpferisch tätig sein. Athanasius erklärt in „Über die Menschwerdung", dass Gott den Menschen nicht wie die vernunftlosen Tiere schuf, sondern ihm Anteil an seinem eigenen Wort gab. Gregor von Nyssa beschreibt den Menschen als königliches Geschöpf, dessen aufrechte Gestalt und freie Hände auf Vernunft und Sprache hingeordnet sind. Diese Würde verpflichtet zur Sorge für die Schöpfung, nicht zu ihrer Ausbeutung.`,
    detail: `- **Athanasius, De Incarnatione 3:** Gott schuf die Menschen nach seinem Bild und gab ihnen Anteil an der Kraft seines Logos, damit sie, gleichsam mit einem Abglanz des Logos ausgestattet und vernunftbegabt, in der Seligkeit bleiben könnten.
- **Gregor von Nyssa, Über die Erschaffung des Menschen, Kap. 4, 8 und 16:** die königliche Würde des Menschen; die aufrechte Gestalt und die Hände, die den Mund für die Sprache freimachen; das Bild Gottes vor allem in Geist, Freiheit und Liebe.
- Der Mensch steht nach den Vätern an der Grenze zwischen sichtbarer und geistiger Welt – Teil der Natur und zugleich zu Gott hin offen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3', status: 'paraphrase', quote: `Gott schuf die Menschen nicht wie alle vernunftlosen Lebewesen auf der Erde, sondern nach seinem Bild, und gab ihnen Anteil an der Kraft seines eigenen Logos, damit sie vernunftbegabt (logikoi) seien und in der Seligkeit bleiben könnten.` },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 4, 8, 16', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die vergleichende Kognitionsforschung hat viele Fähigkeiten, die man früher für exklusiv menschlich hielt, in Vorformen bei Tieren gefunden: Werkzeuggebrauch, kulturelle Traditionen, Empathie, Zukunftsplanung, Selbsterkennung. Zugleich beschreiben auch säkulare Forscher eine tiefe Kluft: Nur Menschen verfügen über eine rekursive, unbegrenzt kombinierbare Sprache (Hauser, Chomsky & Fitch 2002; Berwick & Chomsky 2016), kumulative Kultur, bei der Wissen über Generationen aufgebaut wird (Tomasello), geteilte Absichten und verschachtelte Zukunftsszenarien (Suddendorf 2013), abstraktes relationales Denken (Penn, Holyoak & Povinelli 2008), Mathematik, Kunst, Wissenschaft, Religion und moralische Systeme. Ob der Unterschied „graduell" oder „prinzipiell" ist, ist wissenschaftlich umstritten; Darwins Aussage gilt nicht als gesichert.`,
    detail: `- **Darwin (1871):** Der Unterschied sei einer des Grades, nicht der Art. **Alfred Russel Wallace**, Mitentdecker der natürlichen Selektion, widersprach schon damals: Die geistigen Fähigkeiten des Menschen überstiegen, was natürliche Selektion erklären könne.
- **Terrace u. a. (Science 1979):** Der Schimpanse „Nim Chimpsky" lernte Zeichen, aber keine Syntax; seine „Sätze" waren weitgehend Wiederholungen und Nachahmungen.
- **Penn, Holyoak & Povinelli (2008):** „Darwins Fehler" – Menschen unterscheiden sich in der Fähigkeit zu abstraktem, relationalem Denken grundlegend von anderen Tieren.
- **Suddendorf (2013):** Zwei Merkmale bilden „die Kluft": die Fähigkeit zu verschachtelten Szenarien (Vorstellung, Planung, Reflexion) und der Drang, den eigenen Geist mit anderen zu verbinden.
- **Berwick & Chomsky (2016):** Die Grundoperation der Sprache („Merge") sei relativ plötzlich und spät in der Menschheitsgeschichte aufgetreten und habe keine echten Vorläufer bei anderen Arten.
- **Marc Hauser** prägte 2009 im Scientific American den Begriff „humaniqueness" (generatives Rechnen, freie Kombination von Ideen, mentale Symbole, abstraktes Denken). **Achtung:** Hauser wurde später von der Harvard-Universität und der US-Aufsichtsbehörde ORI wissenschaftliches Fehlverhalten in anderen Studien nachgewiesen; er sollte daher nicht als Autorität zitiert werden.`,
    sources: [
      { kind: 'gegner', author: 'Charles Darwin', work: 'The Descent of Man, and Selection in Relation to Sex', year: '1871', status: 'verbatim', quote: `Dennoch ist der Unterschied zwischen dem Geist des Menschen und dem der höheren Tiere, so groß er auch ist, gewiss ein Unterschied des Grades und nicht der Art.`, original: `Nevertheless the difference in mind between man and the higher animals, great as it is, certainly is one of degree and not of kind.`, translation: 'eigene Übersetzung' },
      { kind: 'wissenschaft', author: 'M. D. Hauser, N. Chomsky, W. T. Fitch', work: 'The faculty of language: What is it, who has it, and how did it evolve?', ref: 'Science 298 (2002), 1569–1579', year: '2002', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Robert C. Berwick, Noam Chomsky', work: 'Why Only Us: Language and Evolution', year: '2016', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'D. C. Penn, K. J. Holyoak, D. J. Povinelli', work: 'Darwin\'s mistake: Explaining the discontinuity between human and nonhuman minds', ref: 'Behavioral and Brain Sciences 31 (2008), 109–130', year: '2008', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Thomas Suddendorf', work: 'The Gap: The Science of What Separates Us from Other Animals', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'H. S. Terrace, L. A. Petitto, R. J. Sanders, T. G. Bever', work: 'Can an ape create a sentence?', ref: 'Science 206 (1979), 891–902', year: '1979', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Michael Tomasello', work: 'A Natural History of Human Thinking', year: '2014', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Marc D. Hauser', work: 'The possibility of impossible cultures / Origin of the Mind', ref: 'Scientific American 301 (September 2009)', year: '2009', status: 'unverified', note: 'Titel des Artikels vor Zitierung prüfen. Hauser wurde später wissenschaftliches Fehlverhalten nachgewiesen (Harvard 2010, ORI 2012) – nicht als Autorität verwenden.' },
    ],
  },
  quickAnswer: `Natürlich ist der Mensch biologisch auch ein Lebewesen wie die Tiere – die Bibel sagt selbst, er ist „aus Erde" (Gen 2,7). Aber kein Tier betreibt Mathematik, komponiert Sinfonien, fragt nach dem Sinn des Lebens, baut Krankenhäuser für Fremde oder diskutiert, ob es „nur ein Tier" ist. Selbst säkulare Forscher wie Thomas Suddendorf („The Gap") oder Robert Berwick und Noam Chomsky („Why Only Us") beschreiben eine tiefe Kluft, vor allem durch die rekursive Sprache. Wer sagt „Der Mensch ist nur ein Tier", benutzt dazu genau die Fähigkeiten, die ihn von allen Tieren unterscheiden.`,
  keyPoints: [
    `**Zugeständnis:** Der Mensch teilt Körper, Gene und viele Fähigkeiten mit Tieren; viele früher behauptete Grenzen haben sich als Vorformen bei Tieren gezeigt.`,
    `**Die Kluft ist real:** Rekursive Sprache, kumulative Kultur, abstraktes Denken, Mathematik, Kunst, Religion und Moral sind einzigartig menschlich – das betonen auch säkulare Forscher.`,
    `**Der performative Widerspruch:** Wer argumentiert, der Mensch sei nur ein Tier, nutzt Sprache, Logik und Wahrheitsanspruch – genau das, was kein Tier tut.`,
    `**Würde unabhängig von Leistung:** Die Gottebenbildlichkeit (Gen 1,27; 9,6) schützt jeden Menschen, auch Säuglinge und Schwerstbehinderte; eine rein fähigkeitsbasierte Ethik (Singer) tut das nicht.`,
    `**Biblisch ausgewogen:** Gemeinsamkeit mit den Tieren (Gen 2,7; Pred 3,19) und besondere Würde (Ps 8) – und ein Auftrag zur Fürsorge für die Schöpfung (Gen 2,15; Spr 12,10).`,
    `**Ohne Gott wird Würde zur Fiktion:** Harari sagt offen, Menschenrechte seien ein gemeinsamer Mythos – eine Konsequenz, die die meisten nicht akzeptieren wollen.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Kirchenvater der Gottebenbildlichkeit',
      text: `Athanasius unterscheidet den Menschen grundlegend von den „vernunftlosen Lebewesen": Gott gab dem Menschen Anteil an seinem Logos, an seiner Vernunft, damit er Gott erkennen und in Gemeinschaft mit ihm leben kann. Das Bild Gottes ist für Athanasius keine bloße Steigerung tierischer Fähigkeiten, sondern eine Beziehung zum Logos. Durch die Sünde wurde dieses Bild verdunkelt; darum wurde der Logos selbst Mensch, um es zu erneuern – so wie man ein verblasstes Porträt nur erneuern kann, wenn die abgebildete Person selbst noch einmal Modell sitzt (De Incarnatione 14).`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3; 14', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Kirchenvater und Anthropologe',
      text: `Gregor von Nyssa widmet eine ganze Schrift der Erschaffung des Menschen. Er betont, dass der Mensch biologisch viel mit den Tieren teilt und in seiner Leiblichkeit sogar schwächer ausgestattet ist – ohne Fell, Krallen oder Hörner. Gerade diese scheinbare Schwäche verweise auf seine Bestimmung: Die Hände ersetzen alle Werkzeuge der Tiere und machen den Mund frei für die Sprache; die aufrechte Gestalt zeigt seine königliche Würde. Das Bild Gottes liegt für Gregor vor allem im Geist, in der Freiheit und in der Fähigkeit zu lieben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 4, 7–8, 16', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker des Reduktionismus',
      text: `In „Die Abschaffung des Menschen" warnt C. S. Lewis vor einer Bildung, die Werte als bloße Gefühle erklärt und den Menschen auf seine Natur reduziert. Wer den Menschen nur noch als Naturprodukt betrachtet, verliert den Maßstab, an dem er Gut und Böse, Würde und Entwürdigung messen kann. Das Ergebnis seien „Menschen ohne Brust" – und am Ende eine kleine Gruppe von „Konditionierern", die über die Natur der anderen verfügen. Lewis sieht in der Reduktion des Menschen auf ein Tier keine Befreiung, sondern den Weg zu seiner Unterwerfung.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man (Die Abschaffung des Menschen)', year: '1943', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Apologet',
      text: `John Lennox weist darauf hin, dass gerade die Fähigkeit des Menschen, die Natur mathematisch zu verstehen, erklärungsbedürftig ist: Warum sollte ein Gehirn, das sich zum Überleben in der Savanne entwickelt hat, die Gesetze des Universums in Formeln fassen können? Für Lennox ist das ein Hinweis darauf, dass der menschliche Geist und die Ordnung des Kosmos denselben vernünftigen Ursprung haben. Er betont zudem, dass die Gottebenbildlichkeit die Grundlage der Menschenwürde ist – ein Gedanke, der gerade im Zeitalter künstlicher Intelligenz und transhumanistischer Visionen an Bedeutung gewinnt.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: '2084: Artificial Intelligence and the Future of Humanity', year: '2020', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'darwin-grad',
      objection: `Darwin: Der Unterschied zwischen Mensch und höheren Tieren ist einer des Grades, nicht der Art. Schimpansen haben Werkzeuge, Kultur, sogar Politik.`,
      objectionBy: 'Frans de Waal',
      answer: `Viele Fähigkeiten haben bei Tieren Vorformen, das gebe ich zu – und de Waal hat hier wichtige Forschung geleistet. Aber bestimmte Leistungen zeigen eine tiefe Kluft: Kein Tier hat eine Sprache mit rekursiver Grammatik, keines baut Wissen über Generationen kumulativ auf, keines treibt Mathematik, Wissenschaft oder Theologie. Schon Darwins Mitentdecker Alfred Russel Wallace widersprach ihm in diesem Punkt.`,
      questionsBack: [`Welches Tier hat jemals eine Frage über die Welt gestellt – oder darüber diskutiert, ob es nur ein Tier ist?`],
      followUps: [
        {
          id: 'torpfosten',
          objection: `Ihr verschiebt ständig die Torpfosten: Erst war es Werkzeuggebrauch, dann Sprache, dann Kultur – und jedes Mal haben Tiere die Hürde geschafft.`,
          objectionBy: 'Frans de Waal',
          answer: `Das ist ein berechtigter Vorwurf an manche frühere Behauptungen – Christen und Philosophen haben die Grenze oft zu grob gezogen. Aber die verbleibende Kluft ist nicht kleiner geworden: In 60.000 Jahren haben Menschen Kunst, Schrift, Mathematik, Raumfahrt und Gebet hervorgebracht, Schimpansen knacken Nüsse wie vor Jahrtausenden. Auch säkulare Kognitionswissenschaftler wie Penn, Holyoak und Povinelli sprechen von „Darwins Fehler" und einer grundlegenden Diskontinuität im abstrakten Denken.`,
          sources: [
            { kind: 'wissenschaft', author: 'D. C. Penn, K. J. Holyoak, D. J. Povinelli', work: 'Darwin\'s mistake: Explaining the discontinuity between human and nonhuman minds', ref: 'Behavioral and Brain Sciences 31 (2008), 109–130', year: '2008', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'kanzi',
              objection: `Der Bonobo Kanzi versteht Hunderte Wörter und sogar einfache neue Sätze. Das ist Sprache.`,
              objectionBy: 'Frans de Waal',
              answer: `Kanzis Leistungen sind beeindruckend – sein Verständnis einfacher Sätze wurde mit dem eines etwa zweijährigen Kindes verglichen. Aber das Kind wächst weiter zu unbegrenzter, rekursiver Sprache; Kanzi bleibt stehen. Schon beim Schimpansen „Nim Chimpsky" zeigte sich, dass trainierte Affen Zeichen lernen, aber keine Syntax aufbauen. Kein Affe hat je eine Frage über die Welt gestellt oder eine Geschichte erzählt.`,
              followUps: [
                {
                  id: 'sprache-mutation',
                  objection: `Sprache ist eben auch nur ein Werkzeug der Evolution – eine „kognitive Revolution" vor rund 70.000 Jahren durch zufällige Mutationen.`,
                  objectionBy: 'Yuval Noah Harari',
                  answer: `Selbst Robert Berwick und Noam Chomsky – keine Christen – betonen, dass die Grundoperation der Sprache relativ plötzlich auftrat und bei anderen Arten keine echten Vorstufen hat; ihre schrittweise Entstehung durch Selektion ist ungeklärt. „Zufällige Mutationen" ist hier ein Platzhalter, keine Erklärung. Und selbst wenn man den Mechanismus fände: Die Frage, wie ein Wesen entsteht, das Wahrheit erkennt, abstrakte Begriffe bildet und nach Gott fragt, ist eine philosophische, keine nur biologische.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Robert C. Berwick, Noam Chomsky', work: 'Why Only Us: Language and Evolution', year: '2016', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'speziesismus',
      objection: `Die Gottebenbildlichkeit ist religiöser Speziesismus – dieselbe Logik wie Rassismus. Moralisch zählt die Leidensfähigkeit, nicht die Artzugehörigkeit.`,
      objectionBy: 'Peter Singer',
      answer: `Leidensfähigkeit zählt, da stimme ich zu – „der Gerechte erbarmt sich seines Viehes" (Spr 12,10), und Tierquälerei ist Sünde. Aber schau, wohin dein Ansatz führt: Wenn nur aktuelle Fähigkeiten zählen, haben Neugeborene und schwerst geistig behinderte Menschen weniger moralischen Status als manche Tiere – du selbst hast in „Practical Ethics" die Tötung schwerstbehinderter Neugeborener unter bestimmten Umständen für vertretbar erklärt. Die Gottebenbildlichkeit schützt gerade die Schwächsten, unabhängig von ihren Fähigkeiten.`,
      sources: [
        { kind: 'gegner', author: 'Peter Singer', work: 'Practical Ethics', ref: 'Kap. 7', year: '3. Aufl. 2011', status: 'paraphrase' },
        { kind: 'bibel', work: 'Genesis', ref: '9,6', quote: `Wer Menschenblut vergießt, des Blut soll auch durch Menschen vergossen werden; denn Gott hat den Menschen zu seinem Bilde gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'embryo-schimpanse',
          objection: `Meine Position ist wenigstens konsequent. Eure ist willkürlich: Warum soll ein Embryo mehr zählen als ein erwachsener Schimpanse?`,
          objectionBy: 'Peter Singer',
          answer: `Weil Würde an der Natur eines Wesens hängt, nicht an seinem momentanen Leistungsstand. Ein menschlicher Embryo ist ein Mensch in einem frühen Stadium, mit der Natur eines vernunftbegabten Wesens; ein Schimpanse bleibt, auch erwachsen, ein Schimpanse. Wer Würde an aktuelle Fähigkeiten bindet, muss sie auch Schlafenden, Komatösen und Demenzkranken absprechen.`,
          detail: `Zur Embryodebatte: ‚bioethik/embryo-zellhaufen'.`,
          followUps: [
            {
              id: 'natur-unscharf',
              objection: `„Natur" und „Art" sind biologisch unscharfe Begriffe – die Evolution kennt fließende Übergänge.`,
              objectionBy: 'Peter Singer',
              answer: `Über evolutionäre Zeiträume mag es Übergänge geben; heute ist die Grenze zwischen Menschen und anderen Tieren aber eindeutig. Die philosophische Tradition spricht von der Person als einem „individuellen Wesen vernunftbegabter Natur" (Boethius) – entscheidend ist die Art des Wesens, nicht seine momentane Leistung. Gerade dieses Verständnis hat in der Geschichte die Schwachen geschützt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kohelet',
      objection: `Eure eigene Bibel sagt: „Es geht dem Menschen wie dem Vieh … der Mensch hat nichts mehr denn das Vieh" (Pred 3,19).`,
      objectionBy: 'Richard Dawkins',
      answer: `Kohelet spricht dort bewusst aus der Perspektive „unter der Sonne" – also so, wie die Welt aussieht, wenn man nur das Diesseits betrachtet. Aus dieser Sicht sterben Mensch und Tier gleich. Kohelet nennt diese Sicht „eitel", nichtig, und fragt im nächsten Vers, ob der Geist des Menschen nicht doch aufwärts fährt (3,21). Am Ende antwortet er: Der Geist kehrt zu Gott zurück (12,7). Der Vers beschreibt also genau das naturalistische Weltbild – und zeigt seine Trostlosigkeit.`,
      sources: [
        { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '3,21', quote: `Wer weiß, ob der Odem des Menschen aufwärts fahre und der Odem des Viehes unterwärts unter die Erde fahre?`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'bibel-schwankt',
          objection: `Also gibst du zu, dass die Bibel selbst schwankt.`,
          objectionBy: 'Richard Dawkins',
          answer: `Die Weisheitsliteratur spielt bewusst Perspektiven durch – das ist ihre literarische Form, keine Unentschiedenheit. Kohelet endet mit dem Fazit: „Fürchte Gott und halte seine Gebote; denn das gehört allen Menschen zu" (Pred 12,13). Ein Text, der das Leben ohne Gott ehrlich durchdenkt und dann zu Gott führt, ist eher eine Stärke der Bibel.`,
        },
      ],
    },
    {
      id: 'menschenrechte-fiktion',
      objection: `Menschenrechte sind, wie Harari sagt, eine gemeinsame Fiktion – nützliche Mythen wie Geld oder Nationen, keine biologische Tatsache.`,
      objectionBy: 'Yuval Noah Harari',
      answer: `Harari ist hier bemerkenswert ehrlich: Wenn der Mensch nur ein Tier ist, dann sind Menschenrechte tatsächlich eine Fiktion. Christen sehen das anders: Die Würde des Menschen ist keine Erfindung, sondern in seiner Erschaffung nach Gottes Bild begründet (Gen 1,27; 9,6). Historisch wurzelt die Idee der gleichen Würde aller Menschen gerade in diesem biblischen Gedanken.`,
      sources: [
        { kind: 'gegner', author: 'Yuval Noah Harari', work: 'Sapiens: A Brief History of Humankind', ref: 'Kap. 2', year: '2014', status: 'paraphrase', quote: `Außerhalb der gemeinsamen Vorstellungskraft der Menschen gibt es im Universum keine Götter, keine Nationen, kein Geld, keine Menschenrechte, keine Gesetze und keine Gerechtigkeit.` },
      ],
      followUps: [
        {
          id: 'pinker-wuerde',
          objection: `Menschenwürde braucht keinen Gott – Aufklärung und Vernunft genügen.`,
          objectionBy: 'Steven Pinker',
          answer: `Interessanterweise hast du selbst 2008 einen Essay mit dem Titel „The Stupidity of Dignity" geschrieben, in dem du den Begriff der Würde als unbrauchbar kritisiert hast. Das zeigt das Problem: Ohne einen Grund jenseits der Biologie wird „Würde" schwer zu begründen. Die Aufklärung hat die Menschenwürde nicht erfunden, sondern aus einer christlich geprägten Kultur übernommen.`,
          sources: [
            { kind: 'gegner', author: 'Steven Pinker', work: 'The Stupidity of Dignity', ref: 'The New Republic, 28. Mai 2008', year: '2008', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'autonomie-reicht',
              objection: `Ich habe nur den Missbrauch des Begriffs durch religiöse Bioethiker kritisiert. Autonomie und die Vermeidung von Leid reichen als Grundlage völlig aus.`,
              objectionBy: 'Steven Pinker',
              answer: `Autonomie als Grundlage hat eine gefährliche Lücke: Wer keine Autonomie hat – Neugeborene, Menschen mit schwerer geistiger Behinderung oder fortgeschrittener Demenz –, fällt durch das Raster. Die Gottebenbildlichkeit gilt dagegen jedem Menschen, unabhängig davon, was er kann. Genau deshalb ist sie die stärkere Grundlage für die Würde der Schwächsten.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches Tier hat jemals darüber diskutiert, ob es nur ein Tier ist?`,
    `Wenn der Mensch nur ein Tier ist – woher kommt dann die Würde, die wir jedem Menschen zuschreiben?`,
    `Wenn moralischer Status von Fähigkeiten abhängt – was folgt dann für Säuglinge und schwer behinderte Menschen?`,
    `Warum kann ein für die Savanne entstandenes Gehirn die Gesetze des Universums in Formeln fassen?`,
  ],
  avoid: [
    `Tieren jede Empfindung, Intelligenz oder Empathie absprechen – das widerspricht der Forschung.`,
    `Marc Hauser als Autorität zitieren – ihm wurde wissenschaftliches Fehlverhalten nachgewiesen.`,
    `Die Gottebenbildlichkeit als Rechtfertigung für rücksichtslosen Umgang mit Tieren und Natur darstellen – die Bibel fordert Fürsorge (Gen 2,15; Spr 12,10).`,
    `Behaupten, der Mensch habe biologisch nichts mit Tieren gemeinsam.`,
  ],
  concessions: [
    `Der Mensch teilt Körperbau, Gene und viele kognitive Fähigkeiten mit Tieren; viele früher behauptete „exklusiv menschliche" Fähigkeiten haben sich als Vorformen bei Tieren gezeigt.`,
    `Christen haben die Herrschaft über die Schöpfung in der Geschichte manchmal als Lizenz zur Ausbeutung missverstanden.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Thomas Suddendorf', work: 'The Gap: The Science of What Separates Us from Other Animals', year: '2013', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Robert C. Berwick, Noam Chomsky', work: 'Why Only Us: Language and Evolution', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', year: '1943', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mensch und Tier', 'Gottebenbildlichkeit', 'Sprache', 'Speziesismus', 'Menschenwürde', 'Darwin'],
  related: [
    'evolutionaere-psychologie/altruismus-evolutionaer',
    'genetik/mensch-schimpanse-99-prozent',
    'palaeontologie/menschliche-evolution-belegt',
    'bioethik/embryo-zellhaufen',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'informatik-ki/ki-wird-bewusst',
  ],
};

export default claim;
