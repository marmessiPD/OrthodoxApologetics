import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christentum-umweltkrise',
  title: `„Das Christentum ist schuld an der Umweltkrise (Lynn White)."`,
  proponents: [
    { name: 'Lynn White Jr.', role: 'Mediävist und Technikhistoriker, UCLA', work: '„The Historical Roots of Our Ecologic Crisis", Science 155 (1967), S. 1203–1207' },
    { name: 'Arnold J. Toynbee', role: 'Historiker', work: '„The Religious Background of the Present Environmental Crisis" (1972)' },
    { name: 'Ian McHarg', role: 'Landschaftsarchitekt und Umweltplaner', work: 'Design with Nature (1969)' },
    { name: 'Yuval Noah Harari', role: 'Historiker, Hebräische Universität Jerusalem', work: 'Homo Deus (2015)' },
  ],
  steelman: `Lynn White Jr. hat 1967 in *Science* eine der einflussreichsten Thesen der Umweltethik formuliert: Die ökologische Krise hat religiöse Wurzeln. Das westliche Christentum sei „die anthropozentrischste Religion, die die Welt je gesehen hat". Es habe den heidnischen Animismus zerstört, in dem jeder Baum, jede Quelle einen Schutzgeist hatte, und damit die Scheu vor der Natur beseitigt. Gen 1,28 – „Machet sie euch untertan und herrschet" – habe dem Menschen die Natur als Rohstoff übergeben, und die westliche Verbindung von Wissenschaft und Technik, die aus diesem Weltbild hervorging, habe die heutige Zerstörung möglich gemacht. Darum trage das Christentum eine „riesige Schuldenlast". Andere wie Arnold Toynbee und Ian McHarg sahen im biblischen Monotheismus und im Herrschaftsauftrag ebenfalls den Freibrief zur Ausbeutung. Und tatsächlich: Die Industrialisierung, die Abholzung, die Verschmutzung begann in den christlichen Ländern Europas – und viele Christen, besonders in den USA, gehören bis heute zu den lautesten Leugnern des Klimawandels, weil ihnen die Erde ohnehin bald vergehen werde.`,
  biblical: {
    summary: `Der Herrschaftsauftrag (Gen 1,28) steht im Rahmen der **Gottebenbildlichkeit**: Der Mensch soll über die Schöpfung herrschen, wie Gott herrscht – als guter König und Hirte, nicht als Tyrann. Gen 2,15 präzisiert den Auftrag: Der Mensch soll den Garten „bauen und bewahren" (hebr. *ʿāḇaḏ* – dienen, bearbeiten; *šāmar* – hüten, bewahren). Das Land gehört Gott, nicht dem Menschen (Lev 25,23; Ps 24,1); es hat seinen eigenen Sabbat (Lev 25,2–7), Fruchtbäume dürfen selbst im Krieg nicht gefällt werden (Dtn 20,19), und Gott freut sich an Geschöpfen, die dem Menschen gar nicht nützen (Ps 104; Hiob 38–41). Die Schöpfung wartet nicht auf Vernichtung, sondern auf Befreiung (Röm 8,19–22), und Gott wird „verderben, die die Erde verderbt haben" (Offb 11,18).`,
    detail: `**Die Verben in Gen 1,28.** *Kāḇaš* („untertan machen") und *rāḏāh* („herrschen") sind starke Wörter; das muss man zugeben. Aber im Alten Testament wird königliche Herrschaft am Maßstab Gottes gemessen: Der gute König rettet den Armen und Schwachen (Ps 72,12–14); die schlechten Hirten, die die Herde ausbeuten, verurteilt Gott (Hes 34,2–4). Herrschaft als Ebenbild Gottes heißt also: Herrschaft im Stil Gottes, der „allen gütig" ist und sich „aller seiner Werke" erbarmt (Ps 145,9).

**Die Schöpfung lobt Gott – nicht den Menschen.** Ps 104 und Ps 148 zeigen eine theozentrische, nicht anthropozentrische Welt: Die Löwen suchen ihre Speise von Gott, der Leviathan spielt im Meer, die Berge sind den Steinböcken gegeben. In Hiob 38–41 stellt Gott dem Menschen Geschöpfe vor Augen, die ihm völlig entzogen sind.

**Der Mensch als Priester der Schöpfung.** In der orthodoxen Tradition bringt der Mensch die Schöpfung Gott dar – in der Liturgie werden Brot und Wein, Früchte der Erde und der Arbeit, Gott „von dem Seinen" geopfert.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,15', quote: `Und Gott der HERR nahm den Menschen und setzte ihn in den Garten Eden, daß er ihn baute und bewahrte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '1,28', quote: `Und Gott segnete sie und sprach zu ihnen: Seid fruchtbar und mehret euch und füllet die Erde und machet sie euch untertan und herrschet über die Fische im Meer und über die Vögel unter dem Himmel und über alles Getier, das auf Erden kriecht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '24,1', quote: `Die Erde ist des HERRN und was darinnen ist, der Erdboden und was darauf wohnt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Levitikus', ref: '25,23', quote: `Darum sollt ihr das Land nicht verkaufen für immer; denn das Land ist mein, und ihr seid Fremdlinge und Gäste vor mir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '20,19', quote: `Auch bei einer Belagerung sollst du die Fruchtbäume nicht umhauen; du darfst von ihnen essen, aber sie nicht fällen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Offenbarung', ref: '11,18', quote: `…und zu verderben, die die Erde verderbt haben.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche betet seit Jahrhunderten in jeder Liturgie für die Schöpfung: In den jahreszeitlichen Fürbitten bittet sie Gott, die Wasser des Flusses (des Nils), die Saaten und Pflanzen des Feldes sowie die Luft des Himmels und die Früchte der Erde zu segnen. Das ägyptische Mönchtum lebte in größter Einfachheit; der hl. Antonius nannte nach einer alten Überlieferung die Natur der geschaffenen Dinge sein „Buch", in dem er Gottes Worte lese. Die Väter – Basilius in seinen Homilien zum Sechstagewerk, Athanasius in *Contra Gentes* – sahen in der Ordnung und Schönheit der Welt einen Hinweis auf den Schöpfer. Im östlichen Christentum hat der Ökumenische Patriarch Bartholomaios I. die Zerstörung der Schöpfung ausdrücklich als Sünde bezeichnet.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Liturgie (Basilius-Liturgie), jahreszeitliche Fürbitten für die Wasser, die Saaten und die Früchte', quote: `Die Kirche bittet je nach Jahreszeit, Gott möge die Wasser des Flusses steigen lassen und segnen, die Saaten und Pflanzen wachsen lassen und die Luft des Himmels und die Früchte der Erde segnen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'IV, 23', year: 'um 440', quote: `Einem Philosophen, der fragte, wie er ohne Bücher leben könne, antwortete Antonius: Mein Buch ist die Natur der geschaffenen Dinge; sie liegt vor mir, wann immer ich die Worte Gottes lesen will.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', ref: 'bes. Hom. 5 und 7–9', year: 'um 370', status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Ökumenischer Patriarch Bartholomaios I.', work: 'Ansprache in Santa Barbara (Kalifornien)', year: '1997', quote: `Ein Verbrechen gegen die natürliche Welt ist eine Sünde – auch gegen uns selbst und gegen Gott.`, status: 'paraphrase', note: 'Östlich-orthodoxer Patriarch; vielfach zitierte Ansprache vom November 1997.' },
    ],
  },
  opposingView: {
    summary: `Whites Aufsatz löste eine jahrzehntelange Debatte aus. Viele Historiker halten seine These heute für zu pauschal: Umweltzerstörung gab es auch in nichtchristlichen Kulturen (Entwaldung im alten China und im Mittelmeerraum, Aussterben der Megafauna nach der Ankunft des Menschen), und die moderne Ausbeutung hat stärkere wirtschaftliche und technische als theologische Ursachen. Peter Harrison zeigte, dass die Lesart von Gen 1,28 als Auftrag zur technischen Naturbeherrschung vor allem eine Entwicklung des 17. Jahrhunderts (Francis Bacon) ist, nicht der patristischen und mittelalterlichen Auslegung. Zugleich hat White auf eine echte Gefahr hingewiesen: Ein Christentum, das den Menschen absolut setzt, kann die Natur zum bloßen Material degradieren.`,
    detail: `Bemerkenswert ist, dass White selbst das östliche Christentum ausnahm: Die griechische Tradition habe die Natur eher kontemplativ als Symbolsprache Gottes betrachtet, die lateinische eher aktiv beherrscht. Und White schlug keinen Abschied vom Christentum vor, sondern Franziskus von Assisi als „Schutzpatron der Ökologen": Die Lösung müsse ebenfalls religiös sein. Empirische Studien zu Religiosität und Umweltbewusstsein ergeben ein gemischtes Bild; in den USA korreliert konservativer Protestantismus teilweise mit Skepsis gegenüber Klimapolitik, was eher politische als theologische Gründe hat.`,
    sources: [
      { kind: 'gegner', author: 'Lynn White Jr.', work: '„The Historical Roots of Our Ecologic Crisis", Science 155, Nr. 3767', ref: 'S. 1203–1207, hier S. 1205', year: '1967', quote: `Besonders in seiner westlichen Form ist das Christentum die anthropozentrischste Religion, die die Welt gesehen hat.`, original: 'Especially in its Western form, Christianity is the most anthropocentric religion the world has seen.', translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://doi.org/10.1126/science.155.3767.1203' },
      { kind: 'fachliteratur', author: 'Peter Harrison', work: '„Subduing the Earth: Genesis 1, Early Modern Science, and the Exploitation of Nature", The Journal of Religion 79', year: '1999', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Yi-Fu Tuan', work: '„Discrepancies between Environmental Attitude and Behaviour: Examples from Europe and China", The Canadian Geographer 12', year: '1968', quote: `Trotz daoistischer und buddhistischer Naturideale wurden in China über Jahrhunderte großflächig Wälder vernichtet.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel gibt dem Menschen die Erde nicht als Beute, sondern als anvertrauten Garten: „bebauen und bewahren" (Gen 2,15). Die Erde gehört Gott (Ps 24,1), und er wird „verderben, die die Erde verderben" (Offb 11,18). Umweltzerstörung gibt es in allen Kulturen – auch im daoistischen China und im atheistischen Sowjetreich. Selbst Lynn White hat das östliche Christentum ausgenommen und seine Lösung in einem christlichen Heiligen gesucht. Das Problem ist nicht der Glaube an den Schöpfer, sondern die menschliche Gier, die ihn vergisst.`,
  keyPoints: [
    `**Bebauen und bewahren:** Der Herrschaftsauftrag (Gen 1,28) wird durch Gen 2,15 ausgelegt – Dienst und Bewahrung, nicht Ausbeutung.`,
    `**Herrschaft nach Gottes Art:** Der Mensch ist Ebenbild eines Gottes, der „allen gütig" ist (Ps 145,9); gute Könige sind Hirten, nicht Ausbeuter (Ps 72; Hes 34).`,
    `**Die Erde gehört Gott:** Land-Sabbat, Schutz der Fruchtbäume, Freude an nutzlosen Geschöpfen – die Bibel ist theozentrisch, nicht anthropozentrisch (Lev 25; Dtn 20,19; Ps 104).`,
    `**Historisch zu pauschal:** Umweltzerstörung gab es in allen Kulturen; die „Herrschafts"-Lesart als technischer Auftrag ist eine Entwicklung der frühen Neuzeit (Harrison).`,
    `**Der Osten als Gegenbeispiel:** Selbst White nahm das östliche Christentum aus; koptische Liturgie betet seit Jahrhunderten für Wasser, Pflanzen und Früchte.`,
    `**Zugeständnis:** Christen haben die Schöpfung oft vergessen – das ist Ungehorsam gegen die Bibel, nicht ihre Konsequenz.`,
  ],
  voices: [
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius hielt seine Homilien zum Hexaemeron vor einfachen Arbeitern in Caesarea und lehrte sie, die Welt als „Schule" der Gotteserkenntnis zu betrachten. Er beschreibt mit Staunen die Pflanzen, die Fische, die Vögel und die Ordnung der Jahreszeiten und folgert daraus nicht Ausbeutung, sondern Dankbarkeit und Ehrfurcht. Basilius gründete zudem die „Basileias", eine Stadt der Barmherzigkeit mit Hospital und Armenhaus – sein Schöpfungsglaube war praktisch.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', ref: 'Hom. 1, 6 (die Welt als Schule der Gotteserkenntnis)', year: 'um 370', status: 'paraphrase' }],
    },
    {
      person: 'peter-harrison',
      role: 'als Wissenschaftshistoriker',
      text: `Peter Harrison hat in seinen Arbeiten (u. a. *The Bible, Protestantism, and the Rise of Natural Science*, 1998) gezeigt, dass die Väter und mittelalterlichen Ausleger die „Herrschaft" über die Schöpfung meist moralisch und geistlich verstanden – als Herrschaft der Vernunft über die eigenen Leidenschaften. Erst im 17. Jahrhundert, besonders bei Francis Bacon, wurde Gen 1,28 als Auftrag zur technischen Naturbeherrschung gelesen. Whites These trifft also eine bestimmte neuzeitliche Lesart, nicht das Christentum als solches.`,
      sources: [{ kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Bible, Protestantism, and the Rise of Natural Science', year: '1998', status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Bibelwissenschaftler',
      text: `Richard Bauckham argumentiert in *Bible and Ecology* (2010) und *Living with Other Creatures* (2011), dass die Bibel den Menschen nicht über, sondern in die „Gemeinschaft der Geschöpfe" stellt. Hiob 38–41 relativiere menschliche Herrschaft radikal, und die Psalmen zeigen alle Geschöpfe als Mitlobende Gottes. Die Herrschaft in Gen 1 sei eine Verantwortung innerhalb dieser Gemeinschaft, nicht ein Freibrief.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Bible and Ecology: Rediscovering the Community of Creation', year: '2010', status: 'paraphrase' }],
    },
    {
      person: 'francis-schaeffer',
      role: 'als evangelikaler Apologet',
      text: `Schon 1970 antwortete Francis Schaeffer in *Pollution and the Death of Man* direkt auf Lynn White. Er gab zu, dass Christen ihre Verantwortung für die Natur vernachlässigt hatten, und nannte das eine Schuld. Aber er argumentierte, dass gerade der biblische Glaube der Natur einen eigenen Wert gibt, weil Gott sie geschaffen hat – während ein materialistisches Weltbild keinen Grund hat, einen Baum mehr zu achten als einen Haufen Atome.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis A. Schaeffer', work: 'Pollution and the Death of Man: The Christian View of Ecology', year: '1970', status: 'paraphrase' }],
    },
    {
      person: 'bartholomaios',
      role: 'als „grüner Patriarch"',
      text: `Bartholomaios I. hat die ökologische Verantwortung zu einem Schwerpunkt seines Amtes gemacht und internationale Symposien über Religion und Umwelt veranstaltet. Er spricht von der „eucharistischen" Haltung: Der Mensch empfängt die Welt als Gabe und bringt sie Gott dankend dar, statt sie zu verbrauchen. Die Zerstörung der Schöpfung nennt er eine Sünde. Die koptische Kirche teilt diese östliche Sicht der Schöpfung als Gabe.`,
      sources: [{ kind: 'sonstiges', author: 'Ökumenischer Patriarch Bartholomaios I.', work: 'On Earth as in Heaven: Ecological Vision and Initiatives', year: '2012', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'macht-euch-untertan',
      objection: `„Machet sie euch untertan und herrschet" (Gen 1,28) – das ist der Freibrief zur Ausbeutung. Genau so wurde die Natur behandelt.`,
      objectionBy: 'Ian McHarg',
      answer: `Der Vers steht direkt nach „Gott schuf den Menschen zu seinem Bilde". Der Mensch soll herrschen wie Gott herrscht – und Gott „ist allen gütig und erbarmt sich aller seiner Werke" (Ps 145,9). Gen 2,15 erklärt den Auftrag: Der Mensch soll den Garten „bauen und bewahren". Ein Verwalter, der den Garten seines Herrn verwüstet, hat seinen Auftrag nicht erfüllt, sondern verraten.`,
      sources: [{ kind: 'bibel', work: 'Psalmen', ref: '145,9', quote: `Der HERR ist allen gütig und erbarmt sich aller seiner Werke.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'kabasch-gewaltsam',
          objection: `Das hebräische *kāḇaš* heißt „niedertreten", *rāḏāh* „herrschen, unterjochen". Das sind gewaltsame Wörter.`,
          objectionBy: 'Lynn White Jr.',
          answer: `Das stimmt, die Wörter sind stark – das gebe ich zu. Aber in der Bibel wird jede Herrschaft am Maßstab Gottes gemessen: Der gerechte König „errettet den Armen" (Ps 72,12), und Gott verurteilt Hirten, die die Herde ausbeuten (Hes 34,2–4). Königliche Herrschaft heißt Verantwortung, nicht Willkür. Und Gott klagt: „Ihr habt mein Land verunreinigt" (Jer 2,7) – die Erde zu verwüsten ist Sünde.`,
          followUps: [
            {
              id: 'praxis-zerstoerung',
              objection: `Egal, was die Texte meinen: In der Praxis hat die christliche Zivilisation die Natur zerstört. Die Industrialisierung begann im christlichen Europa.`,
              objectionBy: 'Lynn White Jr.',
              answer: `Die Industrialisierung begann in Europa, aber Umweltzerstörung ist kein christliches Monopol. Das antike China hat trotz daoistischer Naturideale riesige Wälder vernichtet; die Sowjetunion, ein atheistischer Staat, hat den Aralsee fast ausgetrocknet; die Megafauna Australiens und Amerikas verschwand großenteils nach der Ankunft des Menschen. Die Ursache ist menschliche Gier und Macht, die sich jede Rechtfertigung sucht – auch eine religiöse.`,
              followUps: [
                {
                  id: 'bacon-genesis',
                  objection: `Aber Francis Bacon und die Puritaner haben sich ausdrücklich auf Gen 1,28 berufen, um die technische Naturbeherrschung zu rechtfertigen.`,
                  objectionBy: 'Lynn White Jr.',
                  answer: `Das ist richtig, und Peter Harrison hat es genau dokumentiert. Bacon verstand die Naturforschung als Wiederherstellung der Herrschaft Adams vor dem Fall. Aber das ist eine neuzeitliche Lesart, die sich von den Vätern deutlich unterscheidet – und die Ostkirche hat sie nie übernommen. White selbst bemerkte, dass das griechische Christentum die Natur eher betrachtend als beherrschend sah. Die Kritik trifft also eine bestimmte westliche Entwicklung, nicht die Bibel oder das Christentum insgesamt.`,
                  voices: [
                    {
                      person: 'peter-harrison',
                      role: 'als Historiker der frühen Neuzeit',
                      text: `Harrison zeigt in „Subduing the Earth" (1999), dass die Väter die Herrschaft in Gen 1,28 vorwiegend allegorisch-moralisch deuteten. Die neue wörtliche Lesart der Reformationszeit verband sich mit dem Programm Bacons, durch Wissenschaft den Verlust des Paradieses teilweise rückgängig zu machen. Diese Verbindung war folgenreich – aber historisch bedingt, nicht biblisch zwingend.`,
                      sources: [{ kind: 'fachliteratur', author: 'Peter Harrison', work: '„Subduing the Earth", The Journal of Religion 79', year: '1999', status: 'paraphrase' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anthropozentrisch-animismus',
      objection: `Das Christentum ist die anthropozentrischste Religion der Welt. Es hat den Animismus zerstört – die Geister in Bäumen und Quellen – und damit jede Scheu vor der Natur.`,
      objectionBy: 'Lynn White Jr.',
      answer: `Die Bibel ist nicht anthropozentrisch, sondern theozentrisch: Alles ist geschaffen zur Ehre Gottes, nicht zum Nutzen des Menschen (Ps 104; Ps 148). Dass Bäume keine Götter sind, heißt nicht, dass sie wertlos sind – sie sind Gottes Werke, die er „sehr gut" nannte (Gen 1,31). Ehrfurcht vor dem Schöpfer schließt Ehrfurcht vor seinem Werk ein. Und dieselbe „Entgötterung" der Natur hat die Naturwissenschaft erst möglich gemacht.`,
      followUps: [
        {
          id: 'indigene-im-einklang',
          objection: `Indigene, animistische Kulturen haben im Einklang mit der Natur gelebt – bis das Christentum kam.`,
          answer: `Viele indigene Traditionen haben tiefe ökologische Weisheit, die wir achten sollten. Aber das Bild vom „ökologisch edlen Wilden" ist romantisiert; der Anthropologe Shepard Krech hat es in *The Ecological Indian* (1999) differenziert untersucht. Das Aussterben großer Tierarten nach der Besiedlung Australiens, Amerikas oder Neuseelands und die Abholzung mancher Inseln zeigen: Der Mensch hat überall die Fähigkeit, seine Umwelt zu zerstören. Das ist eine Folge der menschlichen Natur, nicht des Christentums.`,
          sources: [{ kind: 'wissenschaft', author: 'Shepard Krech III', work: 'The Ecological Indian: Myth and History', year: '1999', status: 'paraphrase' }],
          followUps: [
            {
              id: 'herabsetzung-indigener',
              objection: `Das ist eine kolonialistische Herabsetzung indigener Völker.`,
              answer: `Das Gegenteil ist gemeint: Ich nehme indigene Völker als vollwertige Menschen ernst – mit denselben Stärken und Schwächen wie alle anderen. Herablassend wäre es, sie als naturhafte Wesen ohne Verantwortung zu romantisieren. Die biblische Sicht sagt: Alle Menschen sind Ebenbilder Gottes und alle sind Sünder; Gier ist kein europäisches Privileg.`,
            },
          ],
        },
        {
          id: 'entzauberung',
          objection: `Die „Entzauberung" der Natur war gerade die Voraussetzung, um sie als bloße Ressource auszubeuten.`,
          objectionBy: 'Arnold J. Toynbee',
          answer: `Die Natur ist im biblischen Denken nicht „entzaubert", sondern verwandelt: Sie ist nicht göttlich, aber Gottes Gabe und Zeichen seiner Herrlichkeit (Ps 19,2). In der orthodoxen Liturgie wird die Schöpfung Gott dankend dargebracht – Brot und Wein, Früchte der Erde, „das Deine von dem Deinen". Wer die Welt als Gabe empfängt, verbraucht sie nicht gedankenlos. Ausbeutung beginnt dort, wo man den Geber vergisst.`,
          followUps: [
            {
              id: 'orthodoxe-laender',
              objection: `Schöne Worte. Aber auch orthodoxe Länder wie Russland oder Griechenland haben massive Umweltprobleme.`,
              answer: `Das stimmt – Christen sündigen in allen Konfessionen. Die Frage ist aber nicht, ob Christen fehlbar sind, sondern ob ihr Glaube Umweltzerstörung *fordert* oder *verbietet*. Wenn ein orthodoxer Patriarch die Zerstörung der Schöpfung öffentlich als Sünde bezeichnet, zeigt das, dass der Glaube hier Maßstab und Korrektiv ist, nicht Ursache.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kirchen-schwiegen',
      objection: `Die Kirchen haben jahrhundertelang zur Umweltzerstörung geschwiegen. Erst seit „Laudato si'" (2015) entdecken sie das Thema – als Trittbrettfahrer.`,
      answer: `Teilweise hast du recht: Viele Kirchen haben das Thema spät ernst genommen. Aber Francis Schaeffer antwortete schon 1970 auf Lynn White, der Ökumenische Patriarch Dimitrios erklärte 1989 den 1. September zum Gebetstag für die Schöpfung, und die koptische Liturgie betet seit Jahrhunderten für die Wasser des Nils, die Saaten und die Früchte der Erde. Das ägyptische Mönchtum lebte die Genügsamkeit, die heute als ökologische Tugend entdeckt wird.`,
      followUps: [
        {
          id: 'liturgie-nutzen',
          objection: `Die Gebete für Nil und Ernte sind doch rein nutzenorientiert – es geht um das eigene Essen.`,
          answer: `Zum Teil ja – und das ist ehrlich: Der Mensch hängt von der Schöpfung ab, und die Kirche lehrt ihn, das dankbar vor Gott zu bringen statt es für selbstverständlich zu halten. Aber die Tradition geht weiter: Die Wüstenväter lebten mit wilden Tieren in Frieden, und Isaak der Syrer beschreibt das „barmherzige Herz" als ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel und Tiere.`,
          followUps: [
            {
              id: 'wuestenvaeter-weltflucht',
              objection: `Die Wüstenväter flohen doch gerade die Welt. Sie verachteten die Schöpfung.`,
              answer: `Sie flohen die *Welt* im Sinn von 1 Joh 2,15 – Gier, Eitelkeit, Machtstreben –, nicht die Schöpfung. Antonius soll einem Philosophen gesagt haben, sein Buch sei die Natur der geschaffenen Dinge, in der er Gottes Worte lese. In der *Vita Antonii* bittet er Tiere, die seinen Garten beschädigten, sanft, fortzubleiben. Die Wüste war für die Väter kein Ort der Verachtung, sondern der Begegnung mit Gott in einer ungezähmten Schöpfung.`,
              voices: [
                {
                  person: 'antonius',
                  role: 'als Vater des Mönchtums',
                  text: `Athanasius erzählt in der *Vita Antonii*, wie wilde Tiere zu Antonius' kleinem Garten in der Wüste kamen und die Pflanzen beschädigten. Antonius fing eines sanft und sagte, sinngemäß: Warum schadet ihr mir, wo ich euch doch nicht schade? Geht und kommt im Namen des Herrn nicht mehr hierher. Und sie blieben fort. Die Szene zeigt das Ideal des wiederhergestellten Friedens zwischen Mensch und Tier – ein Abglanz des Paradieses.`,
                  sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '50', year: 'um 357', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'endzeit-gleichgueltig',
      objection: `Wer an einen baldigen Weltuntergang und einen Himmel jenseits glaubt, dem ist die Erde egal. Nicht zufällig leugnen viele evangelikale Endzeitgläubige den Klimawandel.`,
      answer: `Es gibt solche Haltungen, das muss man zugeben – besonders in Teilen der amerikanischen Politik. Aber sie widersprechen dem christlichen Glauben. Die Bibel erwartet nicht die Vernichtung der Schöpfung, sondern ihre Befreiung (Röm 8,21) und eine Auferstehung des Leibes – Materie ist Gott nicht gleichgültig. Und die Offenbarung warnt ausdrücklich, Gott werde „verderben, die die Erde verderbt haben" (Offb 11,18). Wer die Erde verwüstet, weil sie ohnehin vergeht, könnte genauso seinen Körper verwüsten, weil er ohnehin stirbt.`,
      sources: [{ kind: 'bibel', work: 'Römer', ref: '8,21–22', quote: `…daß auch die Kreatur frei werden wird vom Dienst des vergänglichen Wesens zu der herrlichen Freiheit der Kinder Gottes. Denn wir wissen, daß alle Kreatur sehnt sich mit uns und ängstet sich noch immerdar.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'zweiter-petrus-feuer',
          objection: `In 2 Petr 3,10 steht: Die Erde und die Werke darauf werden verbrennen. Wozu sie dann schützen?`,
          answer: `Das Feuer in 2 Petr 3 ist ein Bild für Gericht und Läuterung, auf das ein „neuer Himmel und eine neue Erde" folgen (2 Petr 3,13). Der Text ist zudem unsicher überliefert: Viele alte Handschriften lesen nicht „werden verbrennen", sondern „werden offenbar werden" bzw. „gefunden werden" – also aufgedeckt vor Gottes Gericht. Vor allem aber: Was am Ende geschieht, hebt die Pflicht von heute nicht auf. Auch unser Leib wird sterben, und doch sollen wir ihn als Tempel Gottes ehren (1 Kor 6,19).`,
          sources: [{ kind: 'fachliteratur', work: 'Textkritischer Apparat zu 2 Petr 3,10 (Nestle-Aland)', quote: `Neben „katakaēsetai" (wird verbrennen) sind Lesarten wie „heurethēsetai" (wird gefunden/offenbar werden) gut bezeugt; die neuere Textausgabe wählt eine Lesart, die vom Aufgedecktwerden spricht.`, status: 'paraphrase' }],
          followUps: [
            {
              id: 'tempel-analogie',
              objection: `Der Vergleich mit dem Körper hinkt: Den Körper braucht man jetzt, die Erde in hundert Jahren nicht mehr, wenn Christus kommt.`,
              answer: `Jesus sagt: „Von dem Tage aber und von der Stunde weiß niemand" (Mt 24,36). Christen haben seit zweitausend Jahren mit seiner Wiederkunft gerechnet – und sollen sich so verhalten, dass der Herr sie bei treuer Arbeit findet (Mt 24,45–46). Ein Verwalter, der das Haus verkommen lässt, weil der Herr bald kommen könnte, ist im Gleichnis gerade der schlechte Knecht (Mt 24,48–51).`,
            },
          ],
        },
      ],
    },
    {
      id: 'mehret-euch',
      objection: `„Seid fruchtbar und mehret euch" – die Bibel treibt die Überbevölkerung an, die Hauptursache der Umweltzerstörung.`,
      objectionBy: 'Paul R. Ehrlich',
      answer: `Der Segen in Gen 1,28 gilt der Menschheit am Anfang, nicht als Befehl, jede Familie so groß wie möglich zu machen. Die düsteren Vorhersagen von Paul Ehrlichs *The Population Bomb* (1968) über Massenhungersnöte in den 1970er- und 1980er-Jahren sind nicht eingetroffen, und in vielen Ländern liegt die Geburtenrate heute unter dem Ersatzniveau. Der Mensch ist nicht nur ein Mund, der isst, sondern auch ein Geist, der Lösungen findet. Entscheidend für die Umwelt ist weniger die Zahl der Menschen als ihr Konsum – und gegen maßlosen Konsum predigt die Bibel deutlich (Lk 12,15).`,
      sources: [{ kind: 'gegner', author: 'Paul R. Ehrlich', work: 'The Population Bomb', year: '1968', quote: `Ehrlich sagte für die 1970er-Jahre Hungersnöte voraus, in denen Hunderte Millionen Menschen sterben würden.`, status: 'paraphrase' }],
    },
  ],
  questionsToAsk: [
    `Wenn die Natur nur ein zufälliges Ergebnis ohne Schöpfer ist – woher kommt dann ihr Eigenwert, den du verteidigst?`,
    `Warum hat das atheistische Sowjetsystem die Natur nicht besser behandelt als das christliche Europa?`,
    `Hast du Gen 2,15 – „bauen und bewahren" – schon einmal neben Gen 1,28 gelesen?`,
    `Ist das Problem der Glaube an einen Schöpfer – oder die Gier, die ihn vergisst?`,
  ],
  avoid: [
    `Den Klimawandel oder Umweltprobleme pauschal leugnen, um das Christentum zu verteidigen – das ist unehrlich und unbiblisch.`,
    `Das berühmte „Tiergebet des hl. Basilius" zitieren – es stammt nach heutigem Kenntnisstand nicht von Basilius und steht in keiner Fassung der Basilius-Liturgie; vermutlich geht es auf Walter Rauschenbusch (1910) zurück.`,
    `Behaupten, die Kirche habe immer vorbildlich gehandelt – das ist offensichtlich falsch.`,
    `Indigene Kulturen herabsetzen, um das Christentum aufzuwerten.`,
  ],
  concessions: [
    `Christen – besonders im Westen – haben ihre Verantwortung für die Schöpfung lange vernachlässigt; Lynn White hat auf ein reales Versagen hingewiesen.`,
    `Die Deutung von Gen 1,28 als Auftrag zur Naturbeherrschung wurde in der frühen Neuzeit tatsächlich von Christen vertreten.`,
    `Manche christlichen Milieus verbinden Endzeiterwartung mit Gleichgültigkeit gegenüber der Umwelt – das widerspricht der Schrift.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Lynn White Jr.', work: '„The Historical Roots of Our Ecologic Crisis", Science 155', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Bible and Ecology: Rediscovering the Community of Creation', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis A. Schaeffer', work: 'Pollution and the Death of Man', year: '1970', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Bible, Protestantism, and the Rise of Natural Science', year: '1998', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ökologie', 'Lynn White', 'Herrschaftsauftrag', 'Schöpfung', 'Bewahrung', 'Gen 1,28'],
  related: [
    'umwelt-tiere-krieg/speziesismus',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'theodizee/tierleid',
    'kosmologie/genesis-vs-urknall',
    'evolutionaere-psychologie/mensch-nur-tier',
  ],
};

export default claim;
