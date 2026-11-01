import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'genesis-vs-urknall',
  title: `„Die Genesis widerspricht dem Urknall und dem Alter des Universums."`,
  proponents: [
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago (emeritiert)', work: 'Faith vs. Fact: Why Science and Religion Are Incompatible (2015)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006); The Magic of Reality (2011)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Hayden Planetarium New York', work: 'Cosmos: A Spacetime Odyssey (2014); öffentliche Vorträge' },
    { name: 'Lawrence M. Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012); Debatten' },
  ],
  steelman: `Genesis 1 beschreibt eine Schöpfung in sechs Tagen, mit Licht vor der Sonne (Tag 1 gegenüber Tag 4), Pflanzen vor den Sternen und einem festen Himmelsgewölbe (*raqia*), über dem Wasser lagert. Die Kosmologie sagt: Das Universum ist 13,8 Milliarden Jahre alt, die Sonne entstand lange vor der Erde, Sterne lange vor Pflanzen, und es gibt kein Himmelsgewölbe. Wer Genesis jetzt „nicht wörtlich" lesen will, verschiebt die Torpfosten: Jahrhundertelang haben Christen sie wörtlich gelesen, und erst als die Wissenschaft sie widerlegte, wurde sie zur „Poesie". Die Bibel spiegelt das Weltbild des Alten Orients – sie ist keine göttliche Auskunft über den Kosmos.`,
  biblical: {
    summary: `Die zentrale Aussage von Genesis 1 lautet: Das Universum hat einen Anfang und ist von Gott geschaffen – Sonne, Mond und Sterne sind keine Götter, sondern Geschöpfe. Diese Aussage stand jahrhundertelang im Widerspruch zur Annahme eines ewigen Universums und wurde durch die Urknallkosmologie eindrucksvoll gestützt. Über das **Alter** des Universums macht der Text keine ausdrückliche Angabe; die Zahl von rund 6000 Jahren ist eine spätere Berechnung aus Geschlechtsregistern (etwa James Ussher, 1650).`,
    detail: `- **Gen 1,1** steht als Überschrift und absoluter Anfang vor den sechs Tagen.
- **Gen 1,16** nennt Sonne und Mond auffällig nicht beim Namen, sondern spricht von „zwei großen Lichtern" – vermutlich bewusst, weil *schemesch* und *jareach* in der Umwelt Götternamen waren. Genesis 1 ist eine Absage an die Vergötterung der Gestirne, keine astrophysikalische Tabelle.
- **Raqia („Feste")** ist Beobachtungssprache: So erscheint der Himmel dem Auge. Auch wir sagen „Sonnenaufgang", ohne Geozentriker zu sein.
- **Licht vor der Sonne:** Schon Origenes bemerkte im 3. Jahrhundert, dass es „Tage" ohne Sonne gibt, und schloss daraus, dass nicht alles chronologisch-wörtlich gemeint sei. Interessanterweise gab es auch nach dem Urknallmodell Licht (Strahlung) Milliarden Jahre vor der Sonne – das sollte man aber nicht als Beweis überstrapazieren.
- **Hebr 11,3** fasst den Kern zusammen: Die Welt ist durch Gottes Wort geschaffen.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '1,16', quote: `Und Gott machte zwei große Lichter: ein großes Licht, das den Tag regiere, und ein kleines Licht, das die Nacht regiere, dazu auch Sterne.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Gerhard F. Hasel', work: '„The Polemic Nature of the Genesis Cosmology", Evangelical Quarterly 46', year: '1974', quote: `Genesis 1 setzt sich bewusst polemisch von altorientalischen Kosmologien ab, etwa indem Sonne und Mond nicht benannt und zu bloßen „Lampen" degradiert werden.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt verbindlich: Gott schuf alles aus dem Nichts; Adam und Eva sind reale Personen; der Sündenfall ist real. Über das **Alter von Erde und Universum** gibt es **kein Dogma**. Schon die Väter lasen die Schöpfungstage unterschiedlich: Basilius eher wörtlich, Origenes und Augustinus (und mit ihnen ein Teil der alexandrinischen Tradition) auch geistlich und nicht streng chronologisch. Das geschah lange vor jeder modernen Geologie oder Kosmologie.`,
    detail: `- **Origenes, De Principiis IV,3,1:** Wer könnte vernünftigerweise annehmen, dass der erste, zweite und dritte Tag mit Abend und Morgen ohne Sonne, Mond und Sterne existierten? Daraus folgert er, dass manche Aussagen bildhaft zu lesen sind. (Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; er ist hier Zeuge für die frühe Auslegungsvielfalt, nicht Lehrautorität.)
- **Augustinus, De Genesi ad litteram:** Er erwog eine Schöpfung in einem Augenblick und verstand die Tage als Ordnungsstruktur. In I,19,39 warnt er Christen, die über Naturdinge Unsinn reden und damit den Glauben lächerlich machen.
- **Basilius, Hexaemeron 9,1:** „Wenn ich Gras höre, denke ich an Gras" – er verteidigt den Literalsinn gegen übertriebene Allegorie.
- Der katholische Priester **Georges Lemaître** begründete die Urknallkosmologie; als Pius XII. 1951 den Urknall als Bestätigung der Schöpfung feierte, mahnte Lemaître zur Zurückhaltung.
Ausführlich: Claim „Die Kirchenväter lasen die Genesis wörtlich".`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'De Principiis (Peri Archon)', ref: 'IV,3,1', year: 'ca. 220–230', quote: `Wer wäre so töricht zu glauben, der erste, zweite und dritte Tag, mit Abend und Morgen, hätten ohne Sonne, Mond und Sterne bestanden?`, status: 'paraphrase', note: 'Origenes ist nicht als Heiliger anerkannt; hier nur als Zeuge der frühen Auslegung.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', year: 'ca. 401–415', quote: `Es ist schändlich und verderblich, wenn ein Ungläubiger einen Christen über Himmel, Erde und Gestirne Unsinn reden hört, der angeblich auf der Schrift beruht; dann werden die Schriftsteller der Bibel für ungebildet gehalten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 9,1', year: 'ca. 370', quote: `Wenn ich „Gras" höre, denke ich an Gras; Pflanze, Fisch und Tier nehme ich so, wie sie genannt werden.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Nach den Daten der Planck-Mission ist das Universum etwa 13,8 Milliarden Jahre alt (Planck 2018: 13,787 ± 0,020 Mrd. Jahre), die Erde etwa 4,54 Milliarden Jahre. Bemerkenswert ist die Wissenschaftsgeschichte: Die Idee eines Anfangs stieß im 20. Jahrhundert gerade wegen ihrer theologischen Nähe auf Widerstand. Eddington nannte den Gedanken eines Anfangs 1931 „abstoßend"; Fred Hoyle prägte den Begriff „Big Bang" 1949 in einer BBC-Radiosendung als Vertreter des konkurrierenden Steady-State-Modells.`,
    detail: `- **Eddington** (*Nature* 127, 1931; auch *Mathematical Gazette*): Philosophisch sei ihm die Vorstellung eines Anfangs der gegenwärtigen Naturordnung abstoßend.
- **Hoyle** verteidigte bis zuletzt Alternativen zum Urknall (Steady-State-Modell, später Quasi-Steady-State-Kosmologie).
- **Robert Jastrow**, Gründungsdirektor des Goddard Institute for Space Studies der NASA und bekennender Agnostiker, schloss *God and the Astronomers* (1978) mit dem Bild vom Bergsteiger, der den höchsten Gipfel erklimmt und dort von Theologen begrüßt wird, die seit Jahrhunderten dort sitzen.
- **Offene Fragen:** Das Alter ist gut belegt; die Hubble-Spannung (unterschiedliche Messwerte der Expansionsrate) betrifft Details, nicht die Größenordnung.`,
    sources: [
      { kind: 'wissenschaft', author: 'Planck Collaboration', work: '„Planck 2018 results. VI. Cosmological parameters", Astronomy & Astrophysics 641, A6', year: '2020', quote: `Alter des Universums: 13,787 ± 0,020 Milliarden Jahre (ΛCDM).`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Arthur S. Eddington', work: '„The End of the World (from the Standpoint of Mathematical Physics)", Nature 127, 447', year: '1931', quote: `Philosophisch ist mir die Vorstellung eines Anfangs der gegenwärtigen Ordnung der Natur abstoßend.`, original: `Philosophically, the notion of a beginning of the present order of Nature is repugnant to me.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Vortrag vor der Mathematical Association, 5. Januar 1931; auch in The Mathematical Gazette abgedruckt.' },
      { kind: 'sonstiges', author: 'Robert Jastrow', work: 'God and the Astronomers', ref: 'Schluss des Buches', year: '1978', quote: `Er hat die Berge der Unwissenheit erklommen; er ist dabei, den höchsten Gipfel zu bezwingen; als er sich über den letzten Felsen zieht, wird er von einer Schar Theologen begrüßt, die dort seit Jahrhunderten sitzen.`, original: `He has scaled the mountains of ignorance; he is about to conquer the highest peak; as he pulls himself over the final rock, he is greeted by a band of theologians who have been sitting there for centuries.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Jastrow war Agnostiker – das Zugeständnis wiegt deshalb schwer.' },
      { kind: 'sonstiges', author: 'Fred Hoyle', work: 'BBC-Radiosendung (Third Programme)', year: '28.03.1949', quote: `Hoyle prägt beiläufig den Ausdruck „Big Bang" für das konkurrierende Modell eines Anfangs.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Kernaussage der Genesis – das Universum hat einen Anfang und ist geschaffen – wurde von vielen Wissenschaftlern bis ins 20. Jahrhundert abgelehnt und dann durch die Urknallkosmologie gestützt, die ein katholischer Priester (Lemaître) begründete. Über das Alter des Universums hat die koptische Kirche kein Dogma; schon Origenes und Augustinus lasen die Tage nicht streng chronologisch – lange vor jeder modernen Wissenschaft. Genesis beantwortet die Fragen „Wer?" und „Wozu?", nicht die nach Messwerten.`,
  keyPoints: [
    `**Der Anfang:** Ewiges Universum (Aristoteles, Steady State) gegen Genesis 1,1 – die Kosmologie des 20. Jahrhunderts gab der Genesis recht.`,
    `**Gegenwind aus Weltanschauung:** Eddington fand einen Anfang „abstoßend", Hoyle bekämpfte ihn; der Agnostiker Jastrow sah die Theologen schon auf dem Gipfel sitzen.`,
    `**Kein Dogma zum Alter:** Die 6000 Jahre stammen aus späteren Berechnungen, nicht aus einer kirchlichen Definition.`,
    `**Vielfalt seit der Väterzeit:** Origenes (3. Jh.) und Augustinus (5. Jh.) lasen die Tage nicht streng chronologisch – nicht unter dem Druck der Wissenschaft.`,
    `**Polemik gegen Götzen:** Genesis 1 entgöttert Sonne, Mond und Sterne – die Voraussetzung, dass man sie überhaupt nüchtern erforschen kann.`,
    `**Kein Konkordismus:** Wir behaupten nicht, Genesis habe den Urknall „vorhergesagt"; wir zeigen nur, dass kein echter Widerspruch besteht.`,
  ],
  voices: [
    {
      person: 'lemaitre',
      role: 'als Priester und Begründer der Urknall-Kosmologie',
      text: `Lemaître verstand sich als Wissenschaftler und als Priester – und hielt beide Wege sauber auseinander. In einem Interview mit der *New York Times* (1933) sagte er sinngemäß, es gebe zwei Wege zur Wahrheit, und er habe sich entschieden, beiden zu folgen. Die Bibel wolle nicht Physik lehren, sondern den Weg zum Heil. Gerade deshalb ist er der beste Zeuge gegen die Behauptung, Genesis und Urknall stünden im Krieg: Der Mann, der den Urknall erdachte, sah darin keinen Widerspruch zu seinem Glauben – und warnte zugleich davor, die Physik als Gottesbeweis zu missbrauchen.`,
      sources: [{ kind: 'sonstiges', author: 'Duncan Aikman', work: '„Lemaître Follows Two Paths to Truth", New York Times Magazine', year: '19.02.1933', quote: `Lemaître: Es gibt zwei Wege zur Wahrheit; ich habe beschlossen, beiden zu folgen. Die Schreiber der Bibel waren über die Erlösung erleuchtet, nicht über Physik.`, status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis',
      text: `Augustinus schrieb mehrere Kommentare zur Genesis und rang lebenslang mit ihrer Auslegung. In *De Genesi ad litteram* erwägt er, dass Gott alles in einem Augenblick geschaffen habe und die sechs Tage eine Ordnung der Erkenntnis seien. Vor allem mahnt er zur Demut: Wenn Christen über Naturdinge Unhaltbares behaupten und sich dafür auf die Bibel berufen, machen sie den Glauben vor Gebildeten lächerlich und verschließen ihnen den Zugang zum Evangelium.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', year: 'ca. 401–415', quote: `Christen sollen nicht über Naturdinge Unsinn verbreiten und ihn der Schrift zuschreiben – sonst verachten Ungläubige auch die Botschaft vom Heil.`, status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als alexandrinischer Exeget',
      text: `Origenes bemerkte schon im 3. Jahrhundert, dass Genesis 1 von Tagen mit Abend und Morgen spricht, bevor die Sonne erschaffen ist (Tag 4). Er schloss daraus nicht, die Bibel irre, sondern dass die Schrift Wahrheiten in Bildern mitteilt, die man geistlich lesen muss. Damit zeigt er: Die nicht streng chronologische Lesart ist kein modernes Zurückweichen vor der Wissenschaft, sondern alexandrinisches Erbe. (Origenes wird hier als Zeuge der frühen Auslegung herangezogen, nicht als Lehrautorität.)`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'De Principiis', ref: 'IV,3,1', year: 'ca. 220–230', quote: `Die ersten drei Tage ohne Sonne zeigen, dass der Text auf eine geistliche Bedeutung hinweist.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Prediger des Sechstagewerks',
      text: `Basilius vertritt in seinen Homilien über das Sechstagewerk eher den wörtlichen Sinn und warnt vor willkürlicher Allegorie. Doch auch er betont, dass die Schrift nicht geschrieben wurde, um Neugier über Maße und Formen der Himmelskörper zu befriedigen, sondern zur Erbauung und zur Erkenntnis des Schöpfers. Seine Stimme zeigt: In der Kirche gab es von Anfang an verschiedene Lesarten – vereint im Bekenntnis zum Schöpfer.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 9,1', year: 'ca. 370', quote: `Mose hat über Gestalt und Maße der Erde geschwiegen, weil es ihm um das ging, was der Seele nützt.`, status: 'paraphrase' }],
    },
    {
      person: 'galilei',
      role: 'als Physiker und gläubiger Ausleger',
      text: `Galilei – oft als Märtyrer der Wissenschaft gegen die Bibel dargestellt – war gläubiger Katholik. In seinem Brief an die Großherzogin Christina (1615) zitiert er zustimmend Kardinal Baronius: Der Heilige Geist wolle uns lehren, wie man in den Himmel kommt, nicht, wie der Himmel geht. Zwei Bücher stammen vom selben Autor – das Buch der Schrift und das Buch der Natur – und können einander nicht wirklich widersprechen.`,
      sources: [{ kind: 'fachliteratur', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina von Lothringen', year: '1615', quote: `Die Absicht des Heiligen Geistes ist es, uns zu lehren, wie man in den Himmel kommt, nicht, wie der Himmel geht.`, status: 'paraphrase', note: 'Galilei schreibt den Gedanken Kardinal Baronius zu.' }],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker (eine von mehreren christlichen Positionen)',
      text: `Hugh Ross vertritt eine „Tag-Zeitalter"-Lesart: Das hebräische *jom* könne auch einen längeren Zeitraum bezeichnen, und die Reihenfolge der Schöpfungstage lasse sich aus der Perspektive eines Beobachters auf der Erdoberfläche (Gen 1,2) verstehen – etwa wenn sich eine dichte Uratmosphäre erst lichtet und Sonne und Sterne am vierten Tag sichtbar werden. Diese Deutung ist eine von mehreren christlichen Optionen; sie zeigt, dass Gläubige die Daten der Kosmologie ernst nehmen können, ohne die Schrift preiszugeben.`,
      sources: [{ kind: 'fachliteratur', author: 'Hugh Ross', work: 'The Creator and the Cosmos', year: '1993 (mehrere Neuauflagen)', quote: `Die Urknallkosmologie passt zur biblischen Lehre eines transzendenten Anfangs; die Schöpfungstage lassen sich als lange Zeiträume verstehen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'licht-vor-sonne',
      objection: `Licht am ersten Tag, die Sonne erst am vierten – das ist wissenschaftlich unmöglich. Pflanzen am dritten Tag vor der Sonne ebenso.`,
      objectionBy: 'Richard Dawkins / Jerry Coyne',
      answer: `Das ist keine moderne Entdeckung: Origenes hat genau das im 3. Jahrhundert bemerkt und daraus geschlossen, dass die Tage nicht streng chronologisch gemeint sind. Genesis 1 ordnet die Schöpfung in zwei Dreiergruppen: Räume (Licht, Himmel/Meer, Land) und ihre Bewohner (Gestirne, Vögel/Fische, Landtiere und Mensch). Die Botschaft ist: Alles ist Gottes Werk, nichts davon ist göttlich.`,
      detail: `Diese „Rahmendeutung" ist eine von mehreren Lesarten. Andere (z. B. Hugh Ross) erklären die Reihenfolge aus der Perspektive eines Beobachters auf der Erde. Kurios, aber nicht als Beweis zu verwenden: Auch im Urknallmodell gab es Strahlung lange vor der Sonne.`,
      questionsBack: [`Wenn ein Kirchenvater des 3. Jahrhunderts dieselbe Beobachtung machte – warum sollte sie dann beweisen, dass die Auslegung erst unter dem Druck der modernen Wissenschaft entstand?`],
      followUps: [
        {
          id: 'konkordismus-vorwurf',
          objection: `Jetzt machst du genau das, was du bei Muslimen kritisierst: Du liest moderne Wissenschaft in einen alten Text hinein.`,
          objectionBy: 'Jerry Coyne',
          answer: `Ein fairer Punkt – deshalb behaupte ich nicht, Genesis habe den Urknall wissenschaftlich vorhergesagt. Ich sage nur zweierlei: Die Kernaussage – Anfang und Schöpfung – stimmt mit der Kosmologie überein, und die Details verlangen keinen Widerspruch. Lemaître selbst warnte davor, die Bibel als Physikbuch zu lesen.`,
          followUps: [
            {
              id: 'auslegung-nach-bedarf',
              objection: `Aber die Kirche hat die Genesis jahrhundertelang wörtlich gelesen. Ihr ändert die Auslegung immer dann, wenn die Wissenschaft euch dazu zwingt.`,
              objectionBy: 'Jerry Coyne',
              answer: `Das stimmt historisch nicht. Origenes im 3. und Augustinus im 5. Jahrhundert haben die Tage nicht streng chronologisch gelesen – über tausend Jahre vor der modernen Geologie. Andere Väter wie Basilius lasen wörtlicher. Diese Vielfalt bestand von Anfang an, und die Kirche hat sie nie durch ein Dogma beendet.`,
              detail: `Ausführlich im Claim „Die Kirchenväter lasen die Genesis wörtlich – heute wissen wir es besser".`,
              followUps: [
                {
                  id: 'text-sagt-nichts-mehr',
                  objection: `Wenn die Tage wörtlich, bildlich, als Rahmen oder als Zeitalter gelesen werden dürfen, dann kann der Text alles bedeuten – und sagt damit nichts mehr. Eine Schrift, die mit jedem Befund vereinbar ist, ist unwiderlegbar und deshalb inhaltsleer.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Die Auslegungen unterscheiden sich in der *Form* der Tage, nicht im *Inhalt* der Aussage. Und dieser Inhalt ist sehr wohl riskant: Die Welt hat einen Anfang; sie ist aus dem Nichts geschaffen, nicht aus ewiger Materie; Sonne und Sterne sind Geschöpfe, keine Götter; die Natur ist geordnet und gut. Gerade der Anfang war jahrhundertelang angreifbar – Aristoteles und noch die Steady-State-Kosmologie des 20. Jahrhunderts lehrten ein ewiges Universum. Der Text hätte sich als falsch erweisen können. Er hat es nicht.`,
                  detail: `Genesis 1 grenzt sich scharf von den Schöpfungsmythen seiner Umwelt ab: Im babylonischen *Enuma Elisch* entsteht die Welt aus dem Kampf der Götter, der Himmel aus dem Leib der getöteten Tiamat. In Genesis 1 gibt es keinen Kampf, keine Rivalen, keine göttlichen Gestirne – die Sonne wird nicht einmal beim Namen genannt, sondern „das große Licht" (1 Mo 1,16). Das ist eine klare, inhaltliche Weltanschauung: ein einziger, transzendenter Schöpfer und eine entgötterte, verstehbare Natur. Historiker wie Stanley Jaki haben darin eine der Voraussetzungen für die Entstehung der Naturwissenschaft gesehen.`,
                  voices: [
                    { person: 'stanley-jaki', role: 'als Physiker und Wissenschaftshistoriker', text: `Jaki argumentierte, dass die Naturwissenschaft dort lebensfähig wurde, wo man die Welt als geschaffen, geordnet und kontingent verstand: geordnet, damit man Gesetze suchen kann; kontingent, damit man sie durch Beobachtung finden muss, statt sie aus reinem Denken abzuleiten. Zyklische Weltbilder mit ewiger Wiederkehr hätten dagegen zu Totgeburten der Wissenschaft geführt.` },
                  ],
                  questionsBack: [`Welche Aussage von Genesis 1 – Anfang, ein Schöpfer, entgötterte Gestirne, geordnete Natur – hat sich als falsch erwiesen?`],
                  followUps: [
                    {
                      id: 'ex-nihilo-nicht-im-text',
                      objection: `Viele Bibelwissenschaftler übersetzen Genesis 1,1 heute: „Als Gott anfing, Himmel und Erde zu schaffen, war die Erde wüst und leer …" Dann setzt der Text ein vorhandenes Chaos voraus. Die „Schöpfung aus dem Nichts" ist eine spätere theologische Erfindung.`,
                      objectionBy: 'Jerry Coyne (unter Berufung auf Bibelwissenschaftler)',
                      answer: `Die Übersetzung ist umstritten; die Septuaginta und die jüdische Tradition lesen 1,1 als selbstständigen Satz: „Im Anfang schuf Gott …" Vor allem aber hängt die Lehre nicht an einem einzigen Vers. Sie steht ausdrücklich in 2 Makk 7,28 (Gott hat alles „nicht aus Seiendem" gemacht), in Hebr 11,3 und Röm 4,17, und Johannes 1,3 sagt: Ohne den Logos ist nichts geworden. Spätestens im 2. Jahrhundert formulieren Theophilus von Antiochien und Irenäus sie gegen die Lehre von ewiger Materie.`,
                      detail: `Das 2. Makkabäerbuch gehört zum Kanon der koptisch-orthodoxen Kirche. Die Mutter der sieben Märtyrer sagt dort zu ihrem Sohn, er solle Himmel und Erde ansehen und erkennen, dass Gott dies „nicht aus Seiendem" (griech. *ouk ex ontōn*) gemacht hat. Das ist – rund 150 Jahre vor Christus – die früheste ausdrückliche Formulierung der Schöpfung aus dem Nichts. Ehrlich ist: Ob Gen 1,1 grammatisch als Hauptsatz oder Zeitsatz zu lesen ist, diskutieren Hebraisten weiter. Die Lehre der Kirche ruht aber auf dem Zeugnis der ganzen Schrift.`,
                      sources: [
                        { kind: 'bibel', work: '2. Makkabäer', ref: '7,28', quote: `Sieh Himmel und Erde an und alles, was darin ist, und erkenne, dass Gott es nicht aus Seiendem gemacht hat.`, original: `ὅτι οὐκ ἐξ ὄντων ἐποίησεν αὐτὰ ὁ θεός`, status: 'paraphrase', note: 'Deuterokanonisch; Teil des koptisch-orthodoxen Kanons.' },
                        { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben erkennen wir, dass die Welt durch Gottes Wort bereitet ist, sodass das Sichtbare nicht aus Erscheinendem geworden ist.`, status: 'paraphrase' },
                        { kind: 'kirchenvater', author: 'Theophilus von Antiochien', work: 'An Autolykus', ref: 'II,4 und II,10', year: 'ca. 180', quote: `Gott hat alles aus dem Nichtseienden ins Sein gebracht; wäre die Materie ungeworden wie Gott, wäre Gott nicht mehr der Schöpfer aller Dinge.`, status: 'paraphrase' },
                      ],
                      questionsBack: [`Selbst wenn Gen 1,1 ein Zeitsatz wäre – wie erklärst du 2 Makk 7,28, Joh 1,3 und Hebr 11,3?`],
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
      id: 'alter-6000-jahre',
      objection: `Die Erde ist 4,5 Milliarden Jahre alt, das Universum 13,8 Milliarden – nicht 6000 Jahre, wie die Bibel sagt.`,
      objectionBy: 'Lawrence Krauss / Neil deGrasse Tyson',
      answer: `Die Bibel nennt kein Alter des Universums. Die 6000 Jahre sind eine spätere Berechnung aus Geschlechtsregistern, etwa durch Erzbischof Ussher im 17. Jahrhundert. Die koptisch-orthodoxe Kirche hat dazu kein Dogma; Christen vertreten hier unterschiedliche Positionen.`,
      followUps: [
        {
          id: 'genealogien-ergeben-6000',
          objection: `Aber wenn man die Geschlechtsregister zusammenzählt und sechs Tage annimmt, kommt man eben auf etwa 6000 Jahre.`,
          objectionBy: 'Gesprächspartner',
          answer: `Biblische Geschlechtsregister sind nicht lückenlos gemeint. Matthäus 1,8 springt zum Beispiel von Joram zu Usija und lässt drei Könige aus, die das Buch der Könige nennt. „Sohn" kann auch „Nachkomme" heißen. Ob und wie man Genealogien und Schöpfungstage zur Altersberechnung nutzen darf, ist eine offene Auslegungsfrage, kein Glaubensartikel.`,
          detail: `Für die naturwissenschaftliche Seite des Erdalters siehe den Themenblock „Erdalter, Sintflut und Datierung".`,
        },
      ],
    },
    {
      id: 'himmelsgewoelbe',
      objection: `Die Bibel beschreibt den Himmel als festes Gewölbe (*raqia*), mit Wassern darüber. Das ist das primitive Weltbild des Alten Orients.`,
      objectionBy: 'Jerry Coyne',
      answer: `Die Bibel verwendet Beobachtungssprache: So erscheint der Himmel dem Auge, und Wasser kommt von oben. Wir sagen heute noch „die Sonne geht auf", ohne Geozentriker zu sein. Gott hat sich in der Sprache der Menschen mitgeteilt, an die er sich wandte. Gelehrt wird nicht eine Himmelsmechanik, sondern dass Gott Herr über Himmel und Wasser ist.`,
      followUps: [
        {
          id: 'irrtum-beim-himmel',
          objection: `Wenn die Bibel sich hier irrt, warum sollte ich ihr dann glauben, wenn sie von Gott spricht?`,
          objectionBy: 'Richard Dawkins',
          answer: `Beobachtungssprache ist kein Irrtum, so wenig wie der Wetterbericht irrt, wenn er den Sonnenaufgang ankündigt. Ein Irrtum liegt nur vor, wenn ein Text etwas *lehrt*, das falsch ist. Genesis lehrt, dass der Himmel geschaffen ist – nicht, aus welchem Material er besteht.`,
        },
      ],
    },
    {
      id: 'kirche-gegen-wissenschaft',
      objection: `Die Kirche hat die Wissenschaft immer bekämpft – denk an Galilei.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Ausgerechnet bei der Urknall-Frage war es umgekehrt: Begründet hat die Theorie ein Priester, Lemaître; Widerstand kam unter anderem von Eddington, dem ein Anfang „abstoßend" war, und von Hoyle, der den Begriff „Big Bang" als Etikett für das konkurrierende Modell prägte. Der Galilei-Fall ist komplexer, als die Legende sagt – und Galilei selbst war gläubiger Katholik.`,
      detail: `Zum Fall Galilei siehe den Claim „Der Fall Galilei beweist die Wissenschaftsfeindlichkeit der Kirche".`,
      sources: [{ kind: 'wissenschaft', author: 'Arthur S. Eddington', work: '„The End of the World", Nature 127', year: '1931', quote: `Philosophically, the notion of a beginning of the present order of Nature is repugnant to me.`, status: 'verbatim' }],
    },
  ],
  questionsToAsk: [
    `Welche Kernaussage der Genesis – nicht welche Detail-Deutung – widerspricht der Kosmologie?`,
    `Wenn Origenes schon im 3. Jahrhundert die Tage nicht wörtlich-chronologisch las: War das Druck durch die moderne Wissenschaft?`,
    `Warum war Eddington ein Anfang des Universums „abstoßend"?`,
    `Wer hat die Urknalltheorie begründet – und welchen Beruf hatte er?`,
  ],
  avoid: [
    `„Die Genesis sagt den Urknall genau voraus." – Überzogener Konkordismus. Die Kernaussage passt, die Details sind kein Physiklehrbuch.`,
    `„NASA hat einen fehlenden Tag gefunden" (Josua 10). – Eine moderne Legende ohne Beleg; damit verlierst du jede Debatte.`,
    `„Hiob 26,7 (die Erde hängt an nichts) beweist moderne Astronomie." – Poetische Sprache; als „wissenschaftliches Wunder" verwendet, machst du denselben Fehler wie Koran-Wunder-Apologeten.`,
    `Das Erdalter zur Glaubensfrage machen. Die koptische Kirche hat dazu kein Dogma.`,
  ],
  concessions: [
    `Genesis 1 verwendet die Bildsprache ihrer Zeit (Himmelsfeste, Wasser darüber); sie ist kein naturwissenschaftlicher Bericht im modernen Sinn.`,
    `Viele Christen der Vergangenheit haben die Tage wörtlich als 24-Stunden-Tage verstanden; diese Lesart wird auch heute vertreten.`,
    `Die Reihenfolge in Genesis 1 lässt sich nicht einfach mit der kosmologischen Reihenfolge zur Deckung bringen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', year: 'ca. 401–415', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', year: 'ca. 370', status: 'paraphrase' },
    { kind: 'sonstiges', author: 'Robert Jastrow', work: 'God and the Astronomers', year: '1978', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Seven Days That Divide the World', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Genesis', 'Urknall', 'Lemaître', 'Erdalter', 'Kirchenväter', 'Konkordismus'],
  related: [
    'genesis/vaeter-lasen-woertlich',
    'genesis/genesis-1-und-2-widerspruch',
    'genesis/genesis-von-babylon-kopiert',
    'erdalter/erde-alt-bibel-widerlegt',
    'kirchengeschichte-mythen/galilei',
    'kosmologie/universum-aus-dem-nichts',
  ],
};

export default claim;
