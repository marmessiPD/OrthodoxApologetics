import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'naturreligion-urspruenglich',
  title: `„Naturreligionen und Wicca sind ursprünglicher und naturverbundener."`,
  proponents: [
    { name: 'Gerald B. Gardner', role: 'Begründer der modernen Wicca-Bewegung (1884–1964)', work: 'Witchcraft Today (1954); The Meaning of Witchcraft (1959)' },
    { name: 'Starhawk (Miriam Simos)', role: 'Wicca-Autorin, Ökofeministin', work: 'The Spiral Dance (1979)' },
    { name: 'Marija Gimbutas', role: 'Archäologin (1921–1994)', work: 'The Language of the Goddess (1989) – These eines friedlichen, göttinnenverehrenden „Alteuropa"' },
    { name: 'Lynn White Jr.', role: 'Mediävist und Technikhistoriker (1907–1987)', work: 'The Historical Roots of Our Ecologic Crisis, Science 155 (1967)' },
    { name: 'Margaret Murray', role: 'Ägyptologin und Volkskundlerin (1863–1963)', work: 'The Witch-Cult in Western Europe (1921)' },
  ],
  steelman: `Lange bevor Missionare kamen, verehrten die Völker Europas – Kelten, Germanen, Slawen – die Natur, die Jahreszeiten, die Mutter Erde und die Ahnen. Diese Religionen kannten keine Dogmen und keine Hölle, sondern Feste im Rhythmus des Jahres und Ehrfurcht vor heiligen Hainen und Quellen. Das Christentum hat sie mit Gewalt verdrängt: Bonifatius fällte 723 die Donar-Eiche bei Geismar, Karl der Große ließ 782 bei Verden Tausende Sachsen hinrichten und erzwang die Taufe, Kaiser verboten die alten Kulte, in Ägypten zerstörten Mönche Tempel. Später wurden in den Hexenverfolgungen Hunderttausende, wenn nicht Millionen weise Frauen verbrannt – die letzten Hüterinnen des alten Wissens. Die Wicca-Bewegung knüpft an diese alte Religion an und ehrt das göttliche Weibliche. Archäologinnen wie Marija Gimbutas haben gezeigt, dass das frühe Europa friedliche, göttinnenverehrende Kulturen kannte. Und Lynn White zeigte in *Science*, dass der christliche Auftrag „Macht euch die Erde untertan" die Natur entzaubert und die ökologische Krise mitverursacht hat. Die Religionsgeschichte begann mit Animismus und Naturverehrung; der Monotheismus kam spät.`,
  biblical: {
    summary: `Die Bibel ist durch und durch naturverbunden – aber sie verehrt die Natur nicht, sondern ihren Schöpfer. „Die Himmel erzählen die Ehre Gottes" (Ps 19,2); Psalm 104 besingt Quellen, Bäume, Wildtiere und das Meer als Werk Gottes; Jesus verweist auf die Vögel des Himmels und die Lilien des Feldes (Mt 6,26–29). Der Mensch soll den Garten „bebauen und bewahren" (Gen 2,15); „die Erde ist des HERRN" (Ps 24,1) – nicht Besitz des Menschen. Paulus beschreibt den Kern der Religionsgeschichte als **Niedergang**, nicht als Aufstieg: Die Menschen erkannten Gott aus der Schöpfung, ehrten ihn aber nicht, sondern „dienten dem Geschöpf mehr als dem Schöpfer" (Röm 1,20–25). Die Propheten verspotten den, der zum Baum sagt: „Du bist mein Vater" (Jer 2,27).`,
    detail: `**Gen 1,28 richtig verstanden:** „Herrschen" ist im Alten Orient die Aufgabe des Königs, der für sein Land und dessen Wohl verantwortlich ist (vgl. Ps 72). Der Mensch ist Statthalter Gottes, nicht Eigentümer; Gen 2,15 („bebauen und bewahren") erklärt den Auftrag. Das Sabbatjahr gibt sogar dem Land Ruhe (Lev 25,2–5).

**Lystra (Apg 14,15–17):** Paulus ruft die Menschen von den „nichtigen Göttern" zum „lebendigen Gott, der Himmel und Erde gemacht hat" und der sich nicht unbezeugt gelassen hat, indem er „Regen und fruchtbare Zeiten" gab – die Natur ist Gottes Zeugnis, nicht Gott.

**Die Schöpfung wartet auf Erlösung:** Nach Röm 8,19–22 seufzt die ganze Schöpfung und wartet auf ihre Befreiung – das Christentum hat eine Hoffnung **für** die Natur, nicht nur eine Verehrung **der** Natur.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,20–21.25', quote: `Damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben … die Gottes Wahrheit haben verwandelt in die Lüge und haben geehrt und gedient dem Geschöpfe mehr denn dem Schöpfer.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis (1. Mose)', ref: '2,15', quote: `Und Gott der HERR nahm den Menschen und setzte ihn in den Garten Eden, daß er ihn baute und bewahrte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '24,1', quote: `Die Erde ist des HERRN und was darinnen ist, der Erdboden und was darauf wohnt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '2,27', quote: `die zum Holz sagen: „Du bist mein Vater", und zum Stein: „Du hast mich gezeugt."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,15.17', quote: `… daß ihr euch bekehren sollt von diesen falschen zu dem lebendigen Gott, welcher gemacht hat Himmel und Erde … und hat sich selbst nicht unbezeugt gelassen, hat uns viel Gutes getan und vom Himmel Regen und fruchtbare Zeiten gegeben.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die historische Forschung – auch von Wissenschaftlern, die dem Neuheidentum wohlwollend gegenüberstehen – zeigt: **Wicca ist eine Religion des 20. Jahrhunderts.** Der Historiker Ronald Hutton (Bristol) hat in „The Triumph of the Moon" (1999) nachgewiesen, dass es keine kontinuierliche Überlieferung von antiken Kulten zu Gardners Hexenkult gibt; Wicca entstand aus Freimaurerei, ritueller Magie des 19. Jahrhunderts (u. a. Aleister Crowley), Romantik und Volkskunde. Margaret Murrays These eines überlebenden Hexenkultes gilt seit Langem als widerlegt. Die Zahl der Opfer der Hexenverfolgungen wird heute auf etwa 40.000 bis 60.000 geschätzt, nicht auf Millionen, und die Opfer waren keine Priesterinnen einer alten Religion. Gimbutas' Matriarchatsthese wird von der Fachwelt überwiegend abgelehnt (Cynthia Eller). Die These eines linearen Wegs vom Animismus zum Monotheismus (E. B. Tylor, 19. Jh.) gilt in ihrer starren Form als überholt.`,
    detail: `**Ehrliche Zugeständnisse:** Die Christianisierung Europas geschah auch mit Gewalt: Karls Sachsenkriege, das Blutgericht von Verden (782), Zwangstaufen, die Zerstörung heiliger Stätten. In Ägypten gingen christliche Mönche im 4. und 5. Jahrhundert teils gewaltsam gegen heidnische Tempel und Bilder vor – auch der hl. Schenute. Die Hexenverfolgungen der frühen Neuzeit, an denen katholische und protestantische Obrigkeiten beteiligt waren, sind ein dunkles Kapitel; ein großer Teil der Hinrichtungen fand in deutschsprachigen Gebieten statt.

**Gegenstimmen in der Kirche:** Schon Alkuin, Berater Karls des Großen, mahnte, der Glaube müsse freiwillig sein und könne nicht durch Zwang erzeugt werden. Der Jesuit Friedrich Spee kritisierte 1631 in seiner *Cautio Criminalis* die Hexenprozesse scharf.

**Antikes Heidentum** war nicht das romantische Bild der Gegenwart: Römische Autoren berichten von Menschenopfern bei Galliern (Caesar) und Germanen (Tacitus); diese Berichte sind teilweise tendenziös, aber Moorleichen und andere Funde zeigen, dass rituelle Tötungen vorkamen. Viele heutige heidnische Gruppen distanzieren sich zudem ausdrücklich von völkischen und rechtsextremen Strömungen, die das Germanentum im 19. und 20. Jahrhundert politisch missbrauchten.

**Ökologie:** Lynn Whites These ist umstritten. Peter Harrison zeigte, dass die ausbeuterische Deutung von Gen 1,28 vor allem ein Phänomen der frühen Neuzeit ist; ökologische Zerstörung gab es auch in vor- und nichtchristlichen Kulturen.`,
    sources: [
      { kind: 'fachliteratur', author: 'Ronald Hutton', work: 'The Triumph of the Moon: A History of Modern Pagan Witchcraft', year: '1999', quote: `Wicca hat keine kontinuierliche Verbindung zu antiken Kulten; Entstehung im 20. Jahrhundert aus verschiedenen modernen Quellen. Hutton nennt sie die einzige voll ausgebildete Religion, die England der Welt geschenkt habe.`, status: 'paraphrase', note: 'Hutton steht dem Neuheidentum wohlwollend gegenüber – sein Befund wiegt daher besonders.' },
      { kind: 'fachliteratur', author: 'Brian P. Levack', work: 'The Witch-Hunt in Early Modern Europe', year: '1987 (4. Aufl. 2016)', quote: `Schätzung von rund 45.000 bis 60.000 Hinrichtungen in Europa.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Cynthia Eller', work: 'The Myth of Matriarchal Prehistory', year: '2000', quote: `Kritik an der These eines prähistorischen, friedlichen Matriarchats.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Lynn White Jr.', work: 'The Historical Roots of Our Ecologic Crisis', ref: 'Science 155 (1967), 1203–1207', year: '1967', quote: `Das westliche Christentum habe durch seine Entzauberung der Natur zur ökologischen Krise beigetragen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Peter Harrison', work: 'Subduing the Earth: Genesis 1, Early Modern Science, and the Exploitation of Nature', ref: 'The Journal of Religion 79 (1999), 86–109', year: '1999', quote: `Die ausbeuterische Deutung des Herrschaftsauftrags ist vor allem ein Phänomen der frühen Neuzeit.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Friedrich Spee', work: 'Cautio Criminalis', year: '1631', quote: `Scharfe Kritik eines Jesuiten an Folter und Verfahren der Hexenprozesse.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat eine tiefe Liebe zur Schöpfung bewahrt, ohne sie zu vergöttlichen. In der Liturgie betet sie im Wechsel der Jahreszeiten für das Steigen der Nilwasser, für die Saaten und für die Früchte und Pflanzen – eine Frömmigkeit, die ganz im Rhythmus der Natur lebt. Die Wüstenväter lebten in Frieden mit Tieren; vom hl. Antonius ist überliefert, er habe einem Philosophen gesagt: „Mein Buch ist die Natur der geschaffenen Dinge; wann immer ich die Worte Gottes lesen will, liegt es vor mir." Der hl. Athanasius erklärt in *Gegen die Heiden*, wie die Menschen sich vom Schöpfer abwandten und Sonne, Sterne, Erde und Tiere vergöttlichten. Der hl. Kyrill von Alexandrien schrieb eine große Widerlegung Kaiser Julians, der im 4. Jahrhundert versucht hatte, die heidnischen Kulte wiederzubeleben.`,
    detail: `Die Kirche nimmt die Natur ernst, gerade weil sie Gottes Werk ist: Wasser, Öl, Brot und Wein werden in den Sakramenten geheiligt; an Theophanie wird das Wasser gesegnet. Zugleich weiß die koptische Kirche aus eigener Leidensgeschichte, was Zwang in Glaubensdingen bedeutet. Die Gewalt, die auch Christen gegen Heiden ausübten, widerspricht dem Evangelium und ist ehrlich zu bekennen; sie widerlegt aber nicht die Wahrheit des Glaubens, so wenig wie die Verfolgung der Christen durch heidnische Kaiser das Heidentum widerlegte.`,
    sources: [
      { kind: 'sonstiges', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'IV,23', quote: `Antonius: Mein Buch ist die Natur der geschaffenen Dinge; wenn ich die Worte Gottes lesen will, liegt es vor mir.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '8–9; 27–29', quote: `Abwendung vom Schöpfer und Vergöttlichung der Geschöpfe; die Ordnung der Schöpfung als Hinweis auf den einen Schöpfer.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Gegen Julian (Contra Julianum)', quote: `Widerlegung der Schrift Kaiser Julians „Gegen die Galiläer" und seiner Erneuerung des Heidentums.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie: Fürbitten für die Wasser, die Saaten und die Früchte', quote: `Je nach Jahreszeit bittet die Kirche um das Steigen der Nilwasser, das Gedeihen der Saaten bzw. der Pflanzen und Früchte.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wicca ist nicht uralt: Selbst der dem Neuheidentum wohlgesinnte Historiker Ronald Hutton zeigt, dass Gerald Gardner sie in den 1950er-Jahren aus modernen Quellen zusammengesetzt hat. Und die Bibel ist zutiefst naturverbunden – sie verehrt nur nicht die Natur, sondern den, der sie gemacht hat: „Die Himmel erzählen die Ehre Gottes." Die koptische Kirche betet bis heute im Jahreslauf für Nilwasser, Saaten und Früchte. Dass auch Christen Gewalt gegen Heiden geübt haben, gebe ich ehrlich zu – es widerspricht dem Evangelium.`,
  keyPoints: [
    `**Wicca ist modern:** Gardner (1950er), Murrays These widerlegt, keine Kontinuität (Hutton 1999).`,
    `**Hexenverfolgung:** ca. 40.000–60.000 Opfer, nicht Millionen; keine Priesterinnen einer alten Religion – aber ein echtes Unrecht.`,
    `**Naturverbunden ohne Naturvergötterung:** Ps 19; Ps 104; Mt 6; Gen 2,15; Röm 8,19–22.`,
    `**Röm 1: Religionsgeschichte als Abstieg** vom Schöpfer zur Schöpfung – Urmonotheismus-Hinweise bei vielen Völkern.`,
    `**Ökologie:** „Herrschen" heißt verantwortliche Statthalterschaft; Lynn Whites These ist umstritten (Harrison).`,
    `**Ehrlichkeit:** Gewalt bei der Christianisierung zugestehen – mit Gegenstimmen wie Alkuin und Spee.`,
  ],
  voices: [
    {
      person: 'antonius',
      role: 'als Wüstenvater im Einklang mit der Schöpfung',
      text: `Antonius lebte Jahrzehnte in der Wüste, umgeben von Felsen, Quellen und wilden Tieren. Als ein gebildeter Besucher ihn fragte, wie er ohne Bücher leben könne, antwortete er nach dem Bericht des Kirchenhistorikers Sokrates, sein Buch sei die Natur der geschaffenen Dinge, in der er jederzeit die Worte Gottes lesen könne. Für die koptischen Wüstenväter war die Natur ein offenes Buch über den Schöpfer – nicht selbst ein Gott.`,
      sources: [{ kind: 'sonstiges', author: 'Sokrates Scholastikos', work: 'Kirchengeschichte', ref: 'IV,23', quote: `Die Natur als Buch Gottes.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Verfasser von „Gegen die Heiden"',
      text: `Athanasius beschreibt in seinem Frühwerk, wie die Menschen, nachdem sie sich vom Schöpfer abwandten, die sichtbaren Dinge vergöttlichten: Himmel, Sonne, Mond, Sterne, Erde, Wasser, schließlich Tiere und Menschen. Er wertet die Natur dabei nicht ab – im Gegenteil: Ihre Ordnung und Harmonie weisen auf einen einzigen, weisen Schöpfer hin, so wie eine gut gestimmte Leier auf den Musiker. Naturverehrung verwechselt das Instrument mit dem Spieler.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '8–9; 35–39', quote: `Vergöttlichung der Natur als Folge der Abwendung vom Schöpfer; die Ordnung der Welt als Hinweis auf den einen Gott.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Widerleger Kaiser Julians',
      text: `Kaiser Julian, der „Abtrünnige", versuchte nach 361, die heidnischen Kulte als geordnete Staatsreligion wiederzubeleben, und schrieb gegen die Christen. Kyrill antwortete Jahrzehnte später ausführlich. Er zeigt, dass die heidnischen Mythen Widersprüche und moralische Abgründe enthalten, während die Schrift von dem einen Gott spricht, der die Welt gut geschaffen hat. Julians Experiment scheiterte nicht an Verboten, sondern daran, dass das alte Heidentum keine lebendige Kraft mehr hatte.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Contra Julianum', quote: `Auseinandersetzung mit Julians Erneuerung des Heidentums.`, status: 'paraphrase' }],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler (Urmonotheismus)',
      text: `Corduan hat die Forschung zum „Urmonotheismus" neu bewertet, die mit Andrew Lang und Wilhelm Schmidt begann: Bei vielen Stammesvölkern – auch bei Jägern und Sammlern – findet sich die Vorstellung eines höchsten Himmelsgottes, des Schöpfers, der oft als fern gilt, während man sich im Alltag an Geister und Ahnen wendet. Corduan räumt ein, dass Schmidts Theorie in ihrer starken Form überzogen war, hält aber fest, dass das evolutionäre Schema „vom Animismus zum Monotheismus" den Befund nicht besser erklärt. Röm 1 beschreibt eher einen Abstieg als einen Aufstieg.`,
      sources: [{ kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God: A Fresh Look at the Case for Original Monotheism', year: '2013', quote: `Neubewertung der Urmonotheismus-These.`, status: 'paraphrase' }],
    },
    {
      person: 'peter-harrison',
      role: 'als Wissenschaftshistoriker',
      text: `Harrison hat die These von Lynn White historisch geprüft. Er zeigt, dass die Kirchenväter und mittelalterlichen Ausleger Gen 1,28 überwiegend auf die Herrschaft des Menschen über seine eigenen Leidenschaften oder auf verantwortliche Ordnung deuteten. Erst in der frühen Neuzeit wurde der Herrschaftsauftrag als Programm zur technischen Beherrschung der Natur gelesen. Die ökologische Krise lässt sich daher nicht einfach dem biblischen Text anlasten.`,
      sources: [{ kind: 'fachliteratur', author: 'Peter Harrison', work: 'Subduing the Earth', ref: 'The Journal of Religion 79 (1999)', quote: `Geschichte der Auslegung von Gen 1,28.`, status: 'paraphrase' }],
    },
    {
      person: 'chesterton',
      role: 'als Deuter des Heidentums',
      text: `Chesterton sprach mit großem Respekt vom Heidentum: Seine Mythen seien Träume der Menschheit, in denen die Sehnsucht nach Gott durchschimmert. Aber er hielt das Heidentum für ein großartiges Suchen, das in eine Sackgasse geriet – Naturverehrung führt nicht zur Natur zurück, sondern verliert sie, weil Natur ohne Schöpfer grausam und gleichgültig wird. Erst das Christentum erlaubt, die Natur als Schwester zu lieben, nicht als Mutter anzubeten.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Everlasting Man', year: '1925', quote: `Das Heidentum als großes Suchen der Menschheit, das im Christentum seine Erfüllung findet.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', year: '1908', quote: `Die Natur ist nicht unsere Mutter, sondern unsere Schwester.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'wicca-uralt',
      objection: `Wicca ist die alte Religion Europas – die Religion der weisen Frauen, die das Christentum verfolgt und in den Untergrund gedrängt hat.`,
      objectionBy: 'Gerald Gardner / Starhawk',
      answer: `Das sagte Gardner, gestützt auf Margaret Murray – aber die Forschung hat das widerlegt. Der Historiker Ronald Hutton, der dem Neuheidentum wohlgesonnen ist, zeigt in „The Triumph of the Moon", dass Wicca in den 1940er- und 1950er-Jahren aus Freimaurerei, ritueller Magie, Romantik und Volkskunde entstand. Es gibt keine nachweisbare Kontinuität zu antiken Kulten.`,
      followUps: [
        {
          id: 'kontinuitaet-egal',
          objection: `Ob historisch durchgängig oder nicht – spirituell knüpfen wir an die Ahnen und die alten Götter an. Das ist doch legitim.`,
          objectionBy: 'Moderne Pagane',
          answer: `Diese Ehrlichkeit respektiere ich – viele heutige Heiden sagen das offen. Dann ist das Argument „älter und ursprünglicher" aber vom Tisch, und es bleibt die Frage, ob es wahr ist. Die Bibel sagt, dass die Sehnsucht nach dem Göttlichen in der Natur berechtigt ist – sie zeigt auf den Schöpfer (Röm 1,20), nicht auf die Geschöpfe als Götter.`,
          followUps: [
            {
              id: 'millionen-hexen',
              objection: `Die Kirche hat Millionen weise Frauen als Hexen verbrannt.`,
              objectionBy: 'Populäre Darstellungen („Burning Times")',
              answer: `Die Hexenverfolgungen waren ein schweres Unrecht, und ich beschönige nichts – viele der Hinrichtungen fanden in deutschen Gebieten statt, durch katholische und protestantische Obrigkeiten. Aber die Forschung schätzt etwa 40.000 bis 60.000 Opfer, nicht Millionen, und sie waren gewöhnliche Christen, keine Priesterinnen einer alten Religion. Und es gab christlichen Widerstand: Der Jesuit Friedrich Spee prangerte 1631 die Prozesse in seiner *Cautio Criminalis* an.`,
              followUps: [
                {
                  id: 'tempel-zerstoert',
                  objection: `Christen haben heilige Haine gefällt und Tempel zerstört – Bonifatius, Karl der Große, und in Ägypten eure eigenen Mönche wie Schenute.`,
                  objectionBy: 'Neuheidnische Kritiker',
                  answer: `Das stimmt, und ich gebe es ehrlich zu: Es gab Zwangstaufen, das Blutgericht von Verden und gewaltsame Zerstörungen, auch in Ägypten. Schon Alkuin mahnte Karl den Großen, der Glaube müsse freiwillig sein. Die koptische Kirche weiß aus eigener langer Verfolgungsgeschichte, wie falsch Zwang im Glauben ist. Aber die Sünden von Christen widerlegen Christus nicht – so wenig wie die Christenverfolgungen römischer Kaiser das Heidentum widerlegten. Die Frage bleibt: Was ist wahr?`,
                  questionsBack: [`Beurteilst du eine Lehre nach dem Verhalten ihrer schlechtesten Anhänger oder nach ihrem Inhalt und ihrem Stifter?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'oekologie-untertan',
      objection: `Mit „Macht euch die Erde untertan" hat das Christentum die Natur entheiligt und ausgebeutet – das hat Lynn White schon 1967 in *Science* gezeigt. Naturreligionen schützen die Natur.`,
      objectionBy: 'Lynn White Jr. / ökospirituelle Bewegungen',
      answer: `Gen 1,28 steht neben Gen 2,15: Der Mensch soll den Garten „bebauen und **bewahren**", und „die Erde ist des HERRN" (Ps 24,1) – er ist Verwalter, nicht Eigentümer. Der Historiker Peter Harrison zeigt, dass die ausbeuterische Deutung erst in der frühen Neuzeit aufkam. Und Raubbau gab es auch in vorchristlichen Kulturen, etwa die Versalzung der Böden in Mesopotamien.`,
      followUps: [
        {
          id: 'natur-heilig',
          objection: `Die Natur ist heilig – Mutter Erde, die große Göttin. Darum verehren wir sie.`,
          objectionBy: 'Starhawk / Göttinnenbewegung',
          answer: `Die Natur ist kostbar, weil Gott sie gemacht hat – „und siehe, es war sehr gut" (Gen 1,31). Aber wer die Natur selbst verehrt, verehrt auch ihre Grausamkeit: Fressen und Gefressenwerden, Seuchen, Erdbeben. Paulus nennt das „dem Geschöpf dienen statt dem Schöpfer" (Röm 1,25). Das Christentum hat eine Hoffnung für die seufzende Schöpfung: ihre Befreiung (Röm 8,21).`,
          followUps: [
            {
              id: 'gimbutas-matriarchat',
              objection: `Ursprünglich lebten die Menschen in friedlichen Matriarchaten und verehrten die Große Göttin – das hat Marija Gimbutas gezeigt.`,
              objectionBy: 'Marija Gimbutas',
              answer: `Gimbutas war eine bedeutende Archäologin, aber ihre Matriarchatsthese wird von der Fachwelt überwiegend abgelehnt. Die Religionswissenschaftlerin Cynthia Eller hat gezeigt, dass Frauenfiguren der Steinzeit vieldeutig sind und kein friedliches Matriarchat belegen. Archäologische Funde zeigen auch in diesen Kulturen Gewalt.`,
              sources: [{ kind: 'fachliteratur', author: 'Cynthia Eller', work: 'The Myth of Matriarchal Prehistory', year: '2000', quote: `Kritik an der These eines friedlichen prähistorischen Matriarchats.`, status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'animismus-ursprung',
      objection: `Religion begann mit Animismus und Naturverehrung. Der Monotheismus ist eine späte Entwicklung – also sind Naturreligionen ursprünglicher.`,
      objectionBy: 'E. B. Tylor (Primitive Culture, 1871) / Religionsevolutionisten',
      answer: `Das evolutionäre Schema des 19. Jahrhunderts gilt heute in seiner starren Form als überholt. Bei vielen Stammesvölkern weltweit fanden Forscher wie Andrew Lang und Wilhelm Schmidt die Vorstellung eines höchsten Schöpfergottes, der oft als fern gilt – neben Geistern und Ahnen. Das passt zu Röm 1: Die Menschen kannten Gott und wandten sich dann den Geschöpfen zu.`,
      followUps: [
        {
          id: 'schmidt-ueberholt',
          objection: `Wilhelm Schmidts Urmonotheismus gilt als widerlegt – er war katholischer Priester und hatte eine Agenda.`,
          objectionBy: 'Religionswissenschaftler',
          answer: `Schmidts starke These war überzogen, das stimmt. Aber auch Tylor und Frazer hatten eine Agenda – den Fortschrittsglauben ihrer Zeit. Winfried Corduan hat die Befunde neu gesichtet: Hochgottvorstellungen sind weit verbreitet, und das Schema „vom Animismus zum Monotheismus" erklärt sie nicht besser. Das „Ursprünglichere" lässt sich historisch nicht einfach dem Animismus zuschreiben.`,
          questionsBack: [`Wie erklärt das evolutionäre Schema, dass viele Stammesvölker einen höchsten Schöpfergott kennen?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass Wicca älter ist als die 1950er-Jahre?`,
    `Wenn die Natur göttlich ist – ist dann auch ihre Grausamkeit göttlich?`,
    `Hast du Ronald Huttons „The Triumph of the Moon" gelesen?`,
    `Was gibt dir mehr Grund, die Natur zu schützen: dass sie Gott ist, oder dass Gott sie dir anvertraut hat?`,
  ],
  avoid: [
    `Gewalt bei der Christianisierung und die Hexenverfolgungen leugnen oder kleinreden.`,
    `Heutige Heiden pauschal als Satanisten oder Rechtsextreme bezeichnen – die meisten sind beides nicht.`,
    `„Die Bibel kennt keinen Naturschutz." – Sie kennt Gen 2,15, das Sabbatjahr für das Land und Röm 8,19–22.`,
  ],
  concessions: [
    `Die Christianisierung Europas und Ägyptens war teilweise mit Zwang und Gewalt verbunden, auch durch Heilige.`,
    `Die Hexenverfolgungen waren ein schweres Unrecht, an dem Christen beider Konfessionen beteiligt waren.`,
    `Christen haben Gen 1,28 in der Neuzeit teilweise als Freibrief zur Ausbeutung missverstanden.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ronald Hutton', work: 'The Triumph of the Moon', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God', year: '2013', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'The Everlasting Man (dt. Der unsterbliche Mensch)', year: '1925', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Neuheidentum', 'Wicca', 'Naturreligion', 'Hexenverfolgung', 'Ökologie', 'Urmonotheismus'],
  related: [
    'weitere-religionen/religion-aus-animismus',
    'religion-gewalt/inquisition-hexen',
    'christentum-gesellschaft/christentum-kolonialismus',
    'kirchengeschichte-mythen/hypatia-bibliothek',
    'okkultismus/spiritismus-harmlos',
  ],
};

export default claim;
