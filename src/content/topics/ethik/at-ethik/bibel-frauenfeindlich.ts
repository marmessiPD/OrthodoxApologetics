import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-frauenfeindlich',
  title: `„Die Bibel ist frauenfeindlich."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 2 („misogynistic")' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler, Iowa State University', work: 'The Bad Jesus: The Ethics of New Testament Ethics (2015)' },
    { name: 'Bart Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Forged (2011) – zu den Pastoralbriefen und 1 Kor 14,34–35' },
  ],
  steelman: `Von der ersten Seite an ist die Frau zweitrangig: aus der Rippe des Mannes gemacht, als seine „Gehilfin", verführt und verführend, mit dem Fluch belegt, dass der Mann über sie herrschen soll (Gen 3,16). Die Tora behandelt Frauen als Eigentum von Vätern und Ehemännern: Eine vergewaltigte Jungfrau muss ihren Vergewaltiger heiraten (Dtn 22,28–29), kriegsgefangene Frauen werden zu Ehefrauen gemacht (Dtn 21,10–14), Gelübde einer Frau kann der Mann aufheben (Num 30). Das Neue Testament setzt das fort: „Das Weib schweige in der Gemeinde" (1 Kor 14,34), „einem Weibe gestatte ich nicht, dass sie lehre" (1 Tim 2,12), „die Weiber seien untertan ihren Männern" (Eph 5,22). Kirchenväter wie Tertullian nannten die Frau „die Pforte des Teufels". Bis heute dürfen Frauen in orthodoxen Kirchen nicht Priester werden. Die Bibel hat nicht nur das Patriarchat ihrer Zeit gespiegelt – sie hat es geheiligt und für zwei Jahrtausende zementiert.`,
  biblical: {
    summary: `Die Bibel beginnt mit einer für die Antike revolutionären Aussage: **Mann und Frau sind gemeinsam** Gottes Ebenbild (Gen 1,27) und gemeinsam mit der Herrschaft über die Schöpfung beauftragt (Gen 1,28). Die „Gehilfin" (*ʿēzer kenegdô*) ist kein Dienstmädchen – *ʿēzer* wird meist **für Gott selbst** gebraucht (Ps 121,1–2; Ex 18,4). Die Herrschaft des Mannes in Gen 3,16 ist Folge des Sündenfalls, keine Schöpfungsordnung. Jesus durchbricht die Konventionen seiner Zeit: Frauen folgen ihm als Jüngerinnen (Lk 8,1–3), Maria sitzt zu seinen Füßen wie ein Schüler (Lk 10,39), er spricht öffentlich mit der Samariterin (Joh 4,27), und Frauen sind die **ersten Zeuginnen der Auferstehung** (Joh 20,11–18) – in einer Kultur, in der ihr Zeugnis vor Gericht wenig galt.`,
    detail: `**Gen 2 genau gelesen.** *ʿĒzer kenegdô* heißt wörtlich „eine Hilfe, ihm gegenüber/entsprechend". Von den rund 20 Vorkommen von *ʿēzer* im AT bezieht sich die Mehrheit auf Gott, der seinem Volk hilft. Die „Rippe" (*ṣēlāʿ*) bedeutet auch „Seite" (vgl. Ex 26,20 für die Seite des Heiligtums): Die Frau ist vom selben Wesen, an seiner Seite. Adams Ausruf „Das ist doch Bein von meinem Bein" (Gen 2,23) ist ein Jubel über Gleichheit, nicht ein Besitzanspruch.

**Gen 3,16** beschreibt, was die Sünde anrichtet – so wie Dornen und Disteln (3,18). Niemand liest daraus einen Auftrag, Unkraut zu züchten. Paulus schreibt die Schuld des Falls nicht Eva, sondern Adam zu (Röm 5,12–19).

**Starke Frauen im AT:** Debora als Richterin und Prophetin (Ri 4–5), die Prophetin Hulda, die den König berät (2 Kön 22,14–20), die tüchtige Frau aus Spr 31, die Handel treibt und Land kauft, Rut, Ester.

**Jesus und die Frauen.** Lk 8,1–3 nennt Frauen, die mit Jesus umherzogen und ihn aus ihrem Vermögen unterstützten. Dass die Evangelien Frauen als erste Auferstehungszeuginnen nennen, obwohl dies apologetisch peinlich war, spricht für die Historizität – Josephus berichtet, dass das Zeugnis von Frauen vor Gericht nicht zugelassen wurde (Ant. 4,219).

**Paulus.** Phöbe ist *diakonos* der Gemeinde in Kenchreä und *prostatis* (Förderin, Patronin) vieler (Röm 16,1–2); Junia ist „angesehen unter den Aposteln" (Röm 16,7); Priszilla unterweist gemeinsam mit Aquila den gelehrten Apollos (Apg 18,26). In 1 Kor 11,5 beten und prophezeien Frauen im Gottesdienst. Die Haustafel Eph 5 beginnt mit „Seid einander untertan" (5,21) und verlangt vom Mann, seine Frau zu lieben, „gleichwie Christus geliebt hat die Gemeinde und hat sich selbst für sie gegeben" (5,25) – eine Forderung, die in keiner antiken Haushaltslehre (etwa Aristoteles, Politik I) vorkommt.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '2,18', quote: `Es ist nicht gut, daß der Mensch allein sei; ich will ihm eine Gehilfin machen, die um ihn sei.`, original: 'עֵזֶר כְּנֶגְדּוֹ (ʿēzer kenegdô)', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '121,1–2', quote: `Ich hebe meine Augen auf zu den Bergen, von welchen mir Hilfe kommt. Meine Hilfe kommt vom HERRN, der Himmel und Erde gemacht hat.`, translation: 'Luther 1912', status: 'verbatim', note: 'Dasselbe Wort ʿēzer für Gott.' },
      { kind: 'bibel', work: 'Lukas', ref: '8,1–3', quote: `Die Zwölf waren mit ihm, dazu etliche Weiber … Maria Magdalena, Johanna, Susanna und viele andere, die ihm Handreichung taten von ihrer Habe.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '16,1–2.7', quote: `Phöbe, Dienerin (diakonos) der Gemeinde zu Kenchreä … Andronikus und Junia, angesehen unter den Aposteln.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Epheser', ref: '5,21.25', quote: `Und seid untereinander untertan in der Furcht Gottes. … Ihr Männer, liebet eure Weiber, gleichwie Christus geliebt hat die Gemeinde und hat sich selbst für sie gegeben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer (Antiquitates)', ref: '4,219', year: 'um 94', quote: `Das Zeugnis von Frauen soll wegen des Leichtsinns und der Kühnheit ihres Geschlechts nicht zugelassen werden.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ehrt die **Theotokos** als „höher als die Cherubim und herrlicher als die Seraphim" – keine Kreatur steht in der Liturgie höher als eine Frau. Sie verehrt zahllose heilige Frauen um ihrer eigenen Glaubenstaten willen: die Märtyrerin **Demiana** mit ihren 40 Jungfrauen, die hl. **Marina**, die als Mönch verkleidet lebte und eine falsche Anschuldigung schweigend trug, die hl. **Verena**, die als Koptin in die heutige Schweiz zog und Kranke pflegte, die Wüstenmütter. Heiligkeit, Erlösung und Würde sind für Männer und Frauen gleich. Unterschiedliche Dienste in Kirche und Familie bedeuten keine unterschiedliche Würde.`,
    detail: `Ehrlich ist zuzugeben: Einzelne Väter haben sich abwertend über Frauen geäußert. Tertullian schrieb, die Frau sei „die Pforte des Teufels" (*De cultu feminarum* I,1) – Tertullian ist jedoch kein Heiliger der Kirche und wurde später Montanist. Andere Väter haben das Gegenteil vertreten: Gregor von Nazianz kritisierte in einer Predigt über Mt 19 das römische Recht, das Ehebruch bei Frauen hart, bei Männern aber kaum bestrafte – die Gesetzgeber seien eben Männer gewesen (Or. 37,6). Johannes Chrysostomus verlangte vom Ehemann, für seine Frau notfalls zu sterben, und verurteilte jede Gewalt gegen sie.

In der koptischen Tradition wird die Frau zudem im Stand der geweihten Frauen und Diakonissen in den kirchlichen Dienst einbezogen, besonders in Katechese, Diakonie und Seelsorge an Frauen.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Psalmodie / Theotokien', quote: `Maria wird als höher als die Cherubim und herrlicher als die Seraphim gepriesen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'De cultu feminarum', ref: 'I,1', year: 'um 200', quote: `Du bist die Pforte des Teufels.`, original: 'Tu es diaboli ianua', status: 'verbatim', note: 'Als ehrliches Zugeständnis zitiert; Tertullian ist keine Lehrautorität der koptischen Kirche.' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede 37 (zu Mt 19,1–12)', ref: '6', year: '380', quote: `Die meisten Männer sind den Frauen gegenüber ungerecht gesinnt, und ihre Gesetze sind ungleich – denn die Gesetzgeber waren Männer.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Synaxarium der koptischen Kirche', quote: `Gedenktage der hl. Demiana und der 40 Jungfrauen, der hl. Marina und anderer heiliger Frauen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Feministische Exegeten sind gespalten: Manche (z. B. Phyllis Trible) sehen in Gen 1–2 und in der Jesusbewegung eine egalitäre Kraft, die später patriarchal überlagert wurde; andere halten die Bibel für unrettbar androzentrisch. Historisch gut belegt ist, dass das frühe Christentum überdurchschnittlich viele Frauen anzog, Kindesaussetzung (die vor allem Mädchen traf) ablehnte und von Männern dieselbe eheliche Treue verlangte wie von Frauen. Rodney Stark hat daraus ein soziologisches Modell entwickelt; einzelne seiner Zahlen (etwa zum Geschlechterverhältnis) sind umstritten, die Grundtendenz ist breit akzeptiert. Kritische Neutestamentler wie Bart Ehrman halten 1 Kor 14,34–35 für eine spätere Einfügung und die Pastoralbriefe für nicht paulinisch.`,
    sources: [
      { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 5', year: '1996', quote: `Christliche Frauen genossen höheren Status als heidnische; Ablehnung von Abtreibung und Kindestötung, höhere Heiratsalter, Schutz der Witwen.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Papyrus Oxyrhynchus 744 (Brief des Hilarion an Alis)', year: '1 v. Chr.', quote: `Wenn du ein Kind gebierst: ist es ein Junge, lass es leben; ist es ein Mädchen, setze es aus.`, status: 'paraphrase', note: 'Alltagsbrief eines Ehemanns an seine schwangere Frau – zeigt die Normalität der Aussetzung von Mädchen.' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Forged: Writing in the Name of God', year: '2011', quote: `Die Pastoralbriefe seien nicht von Paulus; ihre Frauenbestimmungen stammten aus einer späteren, stärker patriarchalen Phase.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel beginnt damit, dass Mann **und** Frau gemeinsam Gottes Ebenbild sind – das war in der Antike unerhört. Jesus hatte Jüngerinnen, sprach öffentlich mit Frauen und machte sie zu den ersten Zeuginnen seiner Auferstehung, obwohl ihr Zeugnis damals vor Gericht nichts galt. Die frühen Christen weigerten sich, neugeborene Mädchen auszusetzen, und verlangten von Männern dieselbe Treue wie von Frauen. Dass Christen Frauen auch abgewertet haben, gebe ich zu – aber das geschah gegen, nicht wegen dieser Grundsätze.`,
  keyPoints: [
    `**Gemeinsam Ebenbild Gottes** (Gen 1,27): Mann und Frau tragen dieselbe Würde und denselben Auftrag.`,
    `**„Gehilfin" ist ein Ehrentitel:** *ʿēzer* bezeichnet im AT meist Gott selbst als Helfer; Gen 3,16 beschreibt die Folge der Sünde, nicht Gottes Ideal.`,
    `**Jesus durchbricht Konventionen:** Jüngerinnen (Lk 8,1–3), Gespräch mit der Samariterin (Joh 4), Frauen als erste Zeuginnen der Auferstehung (Joh 20).`,
    `**Paulus' Mitarbeiterinnen:** Phöbe (Diakonin), Junia („angesehen unter den Aposteln"), Priszilla (Lehrerin des Apollos).`,
    `**Eph 5 ist revolutionär:** gegenseitige Unterordnung (5,21) und die Pflicht des Mannes, sich für seine Frau hinzugeben wie Christus (5,25).`,
    `**Historische Wirkung:** Ablehnung der Aussetzung von Mädchen (Didache 2,2; Diognetbrief 5,6), gleiche Treuepflicht für Männer, Schutz der Witwen.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker der Jesusbewegung',
      text: `Lukas ist der Evangelist der Frauen: Er erzählt von Elisabet und Maria, von der Prophetin Hanna, von den Frauen, die Jesus aus ihrem Vermögen unterstützten (Lk 8,1–3), von Maria, die zu Jesu Füßen sitzt und zuhört – die Haltung eines Rabbinenschülers (Lk 10,39) –, und davon, dass Jesus diese Rolle ausdrücklich verteidigt: „Maria hat das gute Teil erwählt" (10,42). In der Apostelgeschichte berichtet er von Lydia, der Purpurhändlerin, deren Haus zur ersten Gemeinde Europas wird (Apg 16,14–15), und von den prophezeienden Töchtern des Philippus (Apg 21,9).`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '10,38–42', status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler',
      text: `Richard Bauckham hat in *Gospel Women* (2002) gezeigt, wie zentral Frauen als Augenzeuginnen für die Evangelientradition sind. Die Namen der Frauen am Grab werden sorgfältig überliefert, weil sie als Gewährsfrauen bekannt waren. Bauckham argumentiert außerdem, dass Junia in Röm 16,7 eine Frau war, die als Apostelin im Sinne einer reisenden Missionarin anerkannt war – die spätere Umdeutung in einen Mann „Junias" ist ohne antiken Beleg.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Gospel Women: Studies of the Named Women in the Gospels', year: '2002', status: 'paraphrase' }],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark zeigt in *The Rise of Christianity*, dass die römische Gesellschaft unter einem Frauenmangel litt – eine Folge der verbreiteten Aussetzung von Mädchen und gefährlicher Abtreibungspraktiken. Christen lehnten beides ab. Christliche Mädchen heirateten im Durchschnitt später und eher mit eigener Zustimmung; Witwen wurden von der Gemeinde versorgt statt zur Wiederheirat gedrängt; und von Männern wurde dieselbe eheliche Treue verlangt wie von Frauen. Für Frauen bedeutete die Hinwendung zum Christentum daher einen deutlichen Statusgewinn – ein Grund für das schnelle Wachstum der Kirche.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 5', year: '1996', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Ehe',
      text: `In seiner 20. Homilie zum Epheserbrief nimmt Chrysostomus Eph 5,25 beim Wort: Der Mann soll für seine Frau Sorge tragen, wie Christus für die Kirche – und wenn es nötig ist, für sie sterben, auch wenn er tausendfach leiden müsste. Er verbietet jede Gewalt gegen die Ehefrau und schildert die Ehe als Freundschaft und gegenseitige Hingabe. Für ihn ist die christliche Ehe ein Abbild der Kirche, nicht ein Herrschaftsverhältnis.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20', status: 'paraphrase' }],
    },
    {
      person: 'gregor-nazianz',
      role: 'als Kritiker der Doppelmoral',
      text: `Gregor von Nazianz greift in seiner Predigt zu Mt 19 (Or. 37) die Doppelmoral des römischen Rechts an, das untreue Frauen hart bestrafte, Männern aber Freiheiten ließ. Seine Begründung ist theologisch: Ein Schöpfer hat Mann und Frau geschaffen, ein Tod Christi hat beide erlöst, eine Auferstehung erwartet beide – also muss auch ein Gesetz der Keuschheit für beide gelten.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede 37', ref: '6–7', year: '380', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'rippe-gehilfin',
      objection: `Eva wird aus Adams Rippe gemacht, als seine „Gehilfin", sie bringt die Sünde in die Welt, und Gott verordnet: „Er soll dein Herr sein." Die Frau ist von Anfang an zweitrangig.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Lies Gen 1,27 zuerst: Beide zusammen sind Gottes Ebenbild. „Gehilfin" heißt auf Hebräisch *ʿēzer* – meistens wird damit Gott selbst bezeichnet: „Meine Hilfe kommt vom HERRN". Die „Rippe" heißt auch „Seite": Sie ist von gleichem Wesen, an seiner Seite. Und „er soll dein Herr sein" steht in der Liste der Folgen der Sünde, neben Dornen und Disteln – es beschreibt, was die Sünde anrichtet, nicht was Gott will.`,
      detail: `Eine alte Auslegung, die sich bei mehreren Kommentatoren findet (bekannt etwa aus dem Kommentar des englischen Puritaners Matthew Henry), fasst es so: Die Frau wurde nicht aus dem Kopf des Mannes gemacht, um über ihn zu herrschen, nicht aus seinen Füßen, um von ihm getreten zu werden, sondern aus seiner Seite, um ihm gleich zu sein, unter seinem Arm, um beschützt zu werden, nahe seinem Herzen, um geliebt zu werden. Paulus sieht die Verantwortung für den Fall übrigens bei Adam (Röm 5,12).`,
      questionsBack: [
        `Wenn ʿēzer „minderwertig" bedeutet – ist Gott dann in Ps 121 Israel untergeordnet?`,
        `Liest du auch Gen 3,18 (Dornen und Disteln) als göttlichen Auftrag?`,
      ],
      followUps: [
        {
          id: 'kirchenvaeter-frauenfeindlich',
          objection: `Schöne Exegese – aber die Kirche hat es anders gelebt. Tertullian nannte die Frau „die Pforte des Teufels". Die Kirchenväter waren durch und durch frauenfeindlich.`,
          objectionBy: 'Hector Avalos',
          answer: `Tertullians Satz ist hässlich, und ich verteidige ihn nicht. Aber Tertullian ist kein Heiliger der Kirche, er wurde später Montanist. Andere Väter haben das Gegenteil gesagt: Gregor von Nazianz hat die Doppelmoral des römischen Eherechts angeprangert, weil „die Gesetzgeber Männer waren", Chrysostomus verlangte vom Mann, notfalls für seine Frau zu sterben. Und die Kirche verehrt eine Frau, die Theotokos, höher als alle Engel.`,
          followUps: [
            {
              id: 'maria-nur-ideal',
              objection: `Die Marienverehrung ist ein Trick: Eine idealisierte Jungfrau auf dem Sockel – und die realen Frauen bleiben in der Küche.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Die koptische Kirche verehrt nicht nur Maria, sondern viele reale Frauen um ihrer eigenen Taten willen: die Märtyrerin Demiana, die mit 40 Gefährtinnen unter Diokletian starb, die hl. Marina, die Wüstenmütter, die hl. Verena, die als Koptin Kranke und Aussätzige pflegte. Die Kirche hat diese Frauen nie als Ausnahme behandelt, sondern als Vorbilder für alle – Männer eingeschlossen. Heiligkeit kennt kein Geschlecht.`,
              sources: [
                { kind: 'koptisch', work: 'Synaxarium der koptischen Kirche', quote: `Lebensbeschreibungen der hl. Demiana, der hl. Marina und weiterer heiliger Frauen.`, status: 'paraphrase', note: 'Hagiographische Überlieferung.' },
              ],
              followUps: [
                {
                  id: 'gott-maennlich-daly',
                  objection: `Das Grundproblem liegt tiefer: Euer Gott ist „Vater", „König", „Herr", sein Sohn ein Mann. „Wenn Gott männlich ist, dann ist der Mann Gott." Solange ihr so von Gott redet, bleibt jede Frau ein Mensch zweiter Ordnung.`,
                  objectionBy: 'Mary Daly',
                  answer: `Die Kirche hat nie gelehrt, dass Gott männlich ist. Gregor von Nazianz verspottet schon im 4. Jahrhundert die Vorstellung, Gott sei ein Mann, weil er „Vater" heißt: Die Namen bezeichnen Beziehungen, nicht ein Geschlecht. Die Schrift spricht von Gott auch wie von einer Mutter, die ihr Kind nicht vergisst (Jes 49,15) und tröstet (Jes 66,13), und Jesus vergleicht sich mit einer Henne, die ihre Küken sammelt (Mt 23,37). Dass der Logos als Mann Mensch wurde, macht Männer nicht göttlicher – er nahm die **menschliche** Natur an, die Mann und Frau gemeinsam haben.`,
                  detail: `Der Vatername steht für Ursprung, Fürsorge und Beziehung zum Sohn – nicht für Geschlechtlichkeit. Gott ist Geist (Joh 4,24) und jenseits von männlich und weiblich; beide Geschlechter sind gemeinsam sein Bild (Gen 1,27). Die Väter betonten: Was Christus nicht angenommen hat, ist nicht geheilt (Gregor von Nazianz, Brief 101). Er hat die ganze menschliche Natur angenommen – darum sind Frauen in ihm ebenso geheilt und vergöttlicht wie Männer.

Zugleich solltest du ehrlich bleiben: Die Kirche behält die Namen „Vater, Sohn und Heiliger Geist" bei, weil Christus sie uns so gegeben hat (Mt 28,19). Das ist kein Machtinstrument, sondern Treue zur Offenbarung. Dass Menschen daraus Männerherrschaft gemacht haben, ist ein Missbrauch der Sprache, nicht ihr Sinn.`,
                  voices: [
                    { person: 'gregor-nazianz', role: 'als „der Theologe" der Trinität', text: `Gregor weist in seiner fünften Theologischen Rede die Unterstellung zurück, man halte Gott für männlich, nur weil er Gott und Vater genannt wird. Die Namen der Trinität bezeichnen für ihn Beziehungen – Ungezeugtsein, Zeugung, Hervorgang –, nicht körperliche Eigenschaften. Wer Gott körperlich denkt, denkt nicht über Gott nach.` },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'Mary Daly', work: 'Beyond God the Father: Toward a Philosophy of Women\'s Liberation', year: '1973', quote: `Wenn Gott männlich ist, dann ist der Mann Gott.`, original: 'If God is male, then the male is God.', status: 'verbatim', note: 'Einer der bekanntesten Sätze der feministischen Theologie; Daly verließ später die Kirche.' },
                    { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Fünfte Theologische Rede (Oratio 31)', ref: '7', year: '380', quote: `Vielleicht hältst du unseren Gott für männlich, weil er Gott und Vater genannt wird … – das wäre ein Denken in Körpern, nicht über Gott.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Jesaja', ref: '49,15', quote: `Kann auch ein Weib ihres Kindleins vergessen, daß sie sich nicht erbarme über den Sohn ihres Leibes? Und ob sie desselben vergäße, so will ich doch dein nicht vergessen.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Matthäus', ref: '23,37', quote: `Wie oft habe ich deine Kinder versammeln wollen, wie eine Henne versammelt ihre Küchlein unter ihre Flügel.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  followUps: [
                    {
                      id: 'maennliche-sprache-maennliche-macht',
                      objection: `Schön gesagt – aber in der Praxis stehen am Altar nur Männer, gebetet wird zu „Vater" und „Herr", und die Frauen der Bibel werden aus der Erinnerung gedrängt. Sprache schafft Wirklichkeit.`,
                      objectionBy: 'Elisabeth Schüssler Fiorenza',
                      answer: `Der Vorwurf, Frauen seien aus der Erinnerung gedrängt worden, trifft die koptische Kirche gerade nicht: Ihr Synaxarium und ihre Liturgie feiern Maria, Demiana, Marina, Katharina, Verena und viele andere Frauen namentlich – oft ausdrücklich als Lehrerinnen und Märtyrerinnen. Dass das Priesteramt Männern vorbehalten ist, folgt nicht aus einer geringeren Würde der Frau, sondern aus dem sakramentalen Verständnis des Priesters als Ikone Christi des Bräutigams. Darüber kann man streiten – aber es ist eine theologische Begründung, keine Abwertung.`,
                      detail: `Schüssler Fiorenza hat mit *In Memory of Her* (1983) zu Recht darauf hingewiesen, dass die Rolle der Frauen in der frühen Jesusbewegung oft übersehen wurde. Vieles davon kann ein orthodoxer Christ dankbar aufnehmen: Frauen begleiteten Jesus, finanzierten seine Mission (Lk 8,1–3), standen unter dem Kreuz, als die Männer geflohen waren, und waren die ersten Zeuginnen der Auferstehung. Die Ostkirche nennt Maria Magdalena darum „apostelgleich". Die Frage nach dem Priestertum wird eigens behandelt (Claim „Keine Priesterinnen").`,
                      sources: [
                        { kind: 'gegner', author: 'Elisabeth Schüssler Fiorenza', work: 'In Memory of Her: A Feminist Theological Reconstruction of Christian Origins', year: '1983', status: 'paraphrase' },
                      ],
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
      id: 'paulus-schweigen',
      objection: `Paulus: „Das Weib schweige in der Gemeinde" (1 Kor 14,34), „einem Weibe gestatte ich nicht, dass sie lehre" (1 Tim 2,12), „die Weiber seien untertan ihren Männern" (Eph 5,22). Deutlicher geht Frauenfeindlichkeit nicht.`,
      objectionBy: 'Richard Dawkins',
      answer: `Derselbe Paulus setzt voraus, dass Frauen im Gottesdienst beten und prophezeien (1 Kor 11,5), er empfiehlt Phöbe als Diakonin, nennt Junia „angesehen unter den Aposteln" und arbeitet mit Priszilla zusammen, die den Gelehrten Apollos unterrichtet. Also kann 1 Kor 14,34 kein generelles Redeverbot sein; der Kontext sind Störungen und Zwischenfragen („sie sollen daheim ihre Männer fragen", V. 35). Und Eph 5 beginnt mit „Seid einander untertan" und verlangt vom Mann, sich für seine Frau hinzugeben wie Christus.`,
      followUps: [
        {
          id: 'ehrman-interpolation',
          objection: `Ehrman sagt doch: 1 Kor 14,34–35 ist eine spätere Einfügung und 1 Timotheus eine Fälschung. Also hat der Kirchenapparat Paulus nachträglich frauenfeindlich gemacht.`,
          objectionBy: 'Bart Ehrman',
          answer: `Interessant – dann gibst du zu, dass der echte Paulus frauenfreundlich war. Die Kirche liest den Kanon als Ganzes und hält 1 Timotheus für paulinisch; aber selbst dort geht es um das liturgische Lehramt in einer konkreten Situation, nicht um den Wert der Frau – derselbe Brief regelt die Versorgung von Witwen und ehrt Frauen, die Gutes tun (1 Tim 5). Unterschiedliche Dienste sind keine unterschiedliche Würde.`,
          followUps: [
            {
              id: 'unterordnung-ist-unterordnung',
              objection: `Unterordnung bleibt Unterordnung. Warum muss sich die Frau unterordnen und nicht der Mann? Das ist Hierarchie, egal wie du es verpackst.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Erstens beginnt der Text mit gegenseitiger Unterordnung (Eph 5,21). Zweitens wird die Rolle des Mannes nicht als Herrschaft, sondern als Selbsthingabe bis zum Tod definiert (5,25) – das ist der härtere Auftrag. Drittens bedeutet Ordnung nicht Minderwertigkeit: Christus wurde dem Vater gehorsam bis zum Kreuz (Phil 2,8) und ist doch gleichen Wesens mit ihm. Und klar: Wer „Unterordnung" als Rechtfertigung für Gewalt missbraucht, sündigt – die Kirche duldet das nicht.`,
              detail: `Zum Vergleich die antike Hauslehre: Bei Aristoteles herrscht der Mann über die Frau „politisch", weil das Männliche von Natur zum Führen geeigneter sei (Politik I). Die Pflichten liegen bei den Untergebenen. Paulus dreht die Richtung: Die schwerste Pflicht liegt beim Mann – zu lieben, wie Christus, der sein Leben gab.`,
              followUps: [
                {
                  id: 'gerettet-durch-kindergebaeren',
                  objection: `Und dann 1 Tim 2,15: Die Frau „wird selig werden durch Kinderzeugen". Männer werden durch Glauben gerettet, Frauen durch Gebären? Deutlicher kann man Frauen nicht auf ihre Gebärmutter reduzieren.`,
                  objectionBy: 'Hector Avalos',
                  answer: `Das ist einer der schwierigsten Verse des Neuen Testaments, und ich gebe zu, dass seine genaue Bedeutung umstritten ist. Klar ist aber: Er kann nicht heißen, dass Frauen durch eine Leistung gerettet werden – der Satz geht weiter: „wenn sie bleiben im Glauben und in der Liebe und in der Heiligung". Viele Ausleger lesen ihn im Licht von Gen 3,15: Durch „das Gebären" – die Geburt des Messias aus einer Frau – kommt das Heil. Die Frau, die in Eden zuerst getäuscht wurde, wird gerade zum Weg, durch den der Erlöser kommt.`,
                  detail: `Im Griechischen steht *dia tēs teknogonias* – mit Artikel, „durch **die** Kindesgeburt". Das hat schon manche Väter an die Geburt Christi aus der Jungfrau denken lassen; andere deuten es als Bewahrung durch die Gefahren der Geburt hindurch. Keine dieser Lesarten macht Mutterschaft zur Heilsbedingung: Paulus selbst empfiehlt Frauen die Ehelosigkeit um des Reiches willen (1 Kor 7,34), und die Kirche verehrt zahllose jungfräuliche Heilige.

Die koptische Tradition sieht in Maria die „neue Eva": Was durch eine Frau in Unordnung geriet, wird durch eine Frau zum Tor des Heils. Das ist das Gegenteil einer Abwertung – es ist die höchste Würde, die die Theologie einem Menschen zuspricht.`,
                  sources: [
                    { kind: 'bibel', work: '1. Timotheus', ref: '2,15', quote: `Sie wird aber selig werden durch Kinderzeugen, so sie bleiben im Glauben und in der Liebe und in der Heiligung samt der Zucht.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,22,4', year: 'um 180', quote: `Der Knoten des Ungehorsams Evas wurde durch den Gehorsam Marias gelöst.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dtn-22-vergewaltigung',
      objection: `Dtn 22,28–29: Wer eine Jungfrau vergewaltigt, zahlt dem Vater 50 Schekel und muss sie heiraten. Das Opfer wird an den Täter ausgeliefert. Und Dtn 21,10–14 erlaubt, kriegsgefangene Frauen zu nehmen.`,
      objectionBy: 'Sam Harris',
      answer: `Bei Vergewaltigung im eigentlichen Sinn bestimmt die Tora in Dtn 22,25–27 die Todesstrafe für den Täter, während die Frau ausdrücklich unschuldig ist. Vers 28 verwendet ein anderes Verb (*tāpaś*, „ergreifen") als V. 25 (*ḥāzaq*, „überwältigen"); viele Ausleger sehen hier – parallel zu Ex 22,15–16, wo der Vater die Heirat verweigern kann – die Verführung eines unverlobten Mädchens. Die Bestimmung schützte die Frau in einer Kultur, in der sie sonst kaum versorgt war: Der Mann haftet lebenslang und darf sie nie verstoßen. Bei Dtn 21 gilt: Die Frau erhält einen Monat Trauerzeit, die vollen Rechte einer Ehefrau und darf nie als Sklavin verkauft werden – in einer Zeit, in der Massenvergewaltigungen im Krieg üblich waren.`,
      detail: `Ehrlich bleiben: Auch mit dieser Auslegung entsprechen beide Gesetze nicht unseren Idealen, und Ausleger streiten über Dtn 22,28. Das Prinzip ist dasselbe wie bei der Sklaverei: Die Tora setzt Grenzen in einer harten Welt, sie formuliert nicht schon das volle Ideal (Mt 19,8).

Zum Vergleich: Die Mittelassyrischen Gesetze (§ 55) bestimmten, dass der Vater einer vergewaltigten Jungfrau die Ehefrau des Täters nehmen und vergewaltigen lassen durfte. Die Tora verbietet, Unschuldige für die Schuld anderer zu bestrafen (Dtn 24,16).`,
      sources: [
        { kind: 'bibel', work: 'Deuteronomium', ref: '22,25–27', quote: `Trifft ein Mann eine verlobte Dirne auf dem Felde und ergreift sie mit Gewalt, so soll der Mann allein sterben; der Dirne aber sollst du nichts tun.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Exodus', ref: '22,15–16', quote: `Weigert sich ihr Vater, sie ihm zu geben, soll er Geld darwägen, wie viel einer Jungfrau zur Morgengabe gebührt.`, status: 'paraphrase' },
        { kind: 'sonstiges', work: 'Mittelassyrische Gesetze', ref: 'Tafel A, § 55', year: 'um 1100 v. Chr.', quote: `Der Vater der vergewaltigten Jungfrau darf die Ehefrau des Täters nehmen und schänden lassen.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'alles-einschraenkung',
          objection: `Du nennst alles Harte einfach „Einschränkung". Damit kannst du jedes Gesetz verteidigen. Das ist moralische Beliebigkeit.`,
          objectionBy: 'Hector Avalos',
          answer: `Nein, das ist ein überprüfbarer Vergleich: Ich lege die Tora neben Hammurabi und die Mittelassyrischen Gesetze und frage, in welche Richtung sie weist. Bei Opferschutz, Sklavenflucht und Verletzungen weist sie messbar in Richtung Menschenwürde. Und das Ziel ist ausdrücklich nicht die Tora als letztes Wort, sondern Christus: „Hier ist kein Mann noch Weib" (Gal 3,28). Christen halten nicht das mosaische Zivilrecht für ihr Gesetzbuch.`,
          followUps: [
            {
              id: 'eifersuchtsordal-num-5',
              objection: `Dann erklär mir Num 5: Ein eifersüchtiger Mann schleppt seine Frau zum Priester, sie muss „bitteres Wasser" trinken, und wenn ihr Bauch anschwillt, ist sie schuldig. Manche Übersetzungen lesen sogar eine herbeigeführte Fehlgeburt heraus. Ein Hexenprozess in der Bibel.`,
              objectionBy: 'Sam Harris',
              answer: `Vergleich es mit der Umwelt: Im Codex Hammurabi (§ 132) musste eine verdächtigte Frau in den Fluss springen – überlebte sie nicht, galt sie als schuldig. Num 5 ersetzt das durch ein harmloses Getränk aus Wasser und Staub; physisch passiert ihr nichts, die Entscheidung bleibt Gott vorbehalten, und der Mann darf nicht selbst Hand anlegen. Faktisch schützte das Verfahren die Frau vor der Willkür eines eifersüchtigen Ehemanns. Und eine Schwangerschaft wird im Text gar nicht erwähnt – die Lesart „Fehlgeburt" ist eine umstrittene Interpretation einer dunklen Formulierung.`,
              detail: `Der Ritus endet mit einer bemerkenswerten Bestimmung: Ist die Frau unschuldig, „soll sie Samen empfangen können" (Num 5,28) – sie wird öffentlich rehabilitiert, und der Verdacht ist erledigt. Die rabbinische Tradition (Mischna Sota 9,9) berichtet, dass Rabbi Jochanan ben Sakkai das Ritual im 1. Jahrhundert abschaffte, weil die Männer selbst nicht mehr treu waren – mit Verweis auf Hos 4,14.

Für die Debatte: Gib zu, dass das Verfahren aus moderner Sicht befremdlich ist. Aber die Frage war, ob die Tora Frauen gegenüber ihrer Umwelt **schlechter** oder **besser** stellt – und hier stellt sie sie besser.`,
              sources: [
                { kind: 'bibel', work: '4. Mose (Numeri)', ref: '5,11–31', status: 'paraphrase' },
                { kind: 'fachliteratur', work: 'Codex Hammurabi', ref: '§ 132', quote: `Wird eine Ehefrau verdächtigt, ohne ertappt zu sein, soll sie für ihren Mann in den Fluss springen.`, status: 'paraphrase' },
                { kind: 'juedisch', work: 'Mischna Sota', ref: '9,9', quote: `Als die Ehebrecher zahlreich wurden, hörte das bittere Wasser auf; Rabbi Jochanan ben Sakkai schaffte es ab.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'ordal-nur-fuer-frauen',
                  objection: `Und warum gibt es kein Ordal für untreue Männer? Das zeigt doch, wessen Eifersucht zählt und wessen nicht.`,
                  objectionBy: 'Hector Avalos',
                  answer: `Da hast du einen Punkt, und ich gebe ihn zu: Das Verfahren ist einseitig, weil es in einer patriarchalen Gesellschaft angesiedelt ist. Aber die Schrift selbst korrigiert diese Einseitigkeit: Hosea lässt Gott sagen, er werde die Töchter nicht strafen, wenn die Männer selbst zu Huren gehen (Hos 4,14). Und Jesus dreht die Szene bei der Ehebrecherin um: Er verlangt, dass der ohne Sünde den ersten Stein werfe – und die Männer gehen (Joh 8,7–9).`,
                  detail: `Im Neuen Testament wird die eheliche Treuepflicht ausdrücklich für beide gleich gemacht: Der Mann hat keine Macht über seinen Leib, sondern die Frau, und umgekehrt (1 Kor 7,4). Johannes Chrysostomus hat genau diesen Punkt gegen die Doppelmoral des römischen Rechts gewandt, das männlichen Ehebruch kaum ahndete. Die Bewegung der Schrift läuft von der Einseitigkeit zur Gegenseitigkeit.`,
                  voices: [
                    { person: 'chrysostomus', role: 'als Prediger der gleichen Treuepflicht', text: `Chrysostomus kritisiert, dass die weltlichen Gesetze Männer für Ehebruch kaum belangen. Vor Gott, betont er, gelte dasselbe Gesetz für Mann und Frau; Untreue des Mannes sei ebenso Ehebruch wie die der Frau.` },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Hosea', ref: '4,14', quote: `Darum soll's auch nicht wundern, wenn eure Töchter und Bräute zu Huren werden; denn ihr haltet's selbst mit den Huren.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '7,4', quote: `Das Weib ist ihres Leibes nicht mächtig, sondern der Mann. Desgleichen der Mann ist seines Leibes nicht mächtig, sondern das Weib.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christentum-patriarchat-geheiligt',
      objection: `Das Christentum hat Frauen nichts gebracht, es hat nur das antike Patriarchat religiös zementiert. Befreit wurden Frauen erst durch den säkularen Feminismus.`,
      objectionBy: 'Steven Pinker',
      answer: `Die Quellen zeigen etwas anderes: In der Antike war es normal, Mädchen auszusetzen – ein Ehemann schreibt im Jahr 1 v. Chr. an seine schwangere Frau: „Ist es ein Mädchen, setze es aus." Die Christen lehnten das kompromisslos ab (Didache 2,2; Diognetbrief 5,6). Sie verlangten von Männern dieselbe Treue wie von Frauen und versorgten Witwen. Deshalb waren Frauen unter den frühen Christen überproportional vertreten. Und die ersten Frauenrechtlerinnen des 19. Jahrhunderts kamen häufig aus christlichen Reformbewegungen.`,
      sources: [
        { kind: 'kirchenvater', work: 'Didache', ref: '2,2', year: 'um 100', quote: `Du sollst ein Kind nicht durch Abtreibung töten und das Neugeborene nicht umbringen.`, original: 'οὐ φονεύσεις τέκνον ἐν φθορᾷ οὐδὲ γεννηθὲν ἀποκτενεῖς', translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', work: 'Brief an Diognet', ref: '5,6', year: '2. Jh.', quote: `Sie heiraten wie alle, sie zeugen Kinder, aber sie setzen die Neugeborenen nicht aus.`, original: 'γαμοῦσιν ὡς πάντες, τεκνογονοῦσιν· ἀλλ᾽ οὐ ῥίπτουσι τὰ γεννώμενα', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'stark-umstritten',
          objection: `Rodney Stark ist umstritten. Seine Zahlen über das Geschlechterverhältnis sind spekulativ.`,
          objectionBy: 'Bart Ehrman',
          answer: `Einzelne Zahlen Starks sind tatsächlich Schätzungen, und das gebe ich zu. Aber die Kernpunkte hängen nicht an ihnen: Die Ablehnung der Kindesaussetzung, die gleiche Treuepflicht und die Versorgung der Witwen sind in den Primärquellen klar belegt – von der Didache bis zu den Klagen heidnischer Kritiker, das Christentum sei eine Religion von „Weibern und Sklaven".`,
          followUps: [
            {
              id: 'coverture-christliche-laender',
              objection: `In christlichen Ländern durften verheiratete Frauen bis ins 19. Jahrhundert kein eigenes Vermögen besitzen, nicht wählen, nicht studieren. Das war die Realität des „christlichen Abendlands".`,
              objectionBy: 'Steven Pinker',
              answer: `Das stimmt, und es war Unrecht. Aber das englische *coverture*-Recht stammt aus dem germanisch-feudalen Gewohnheitsrecht, nicht aus der Bibel – die tüchtige Frau in Spr 31 kauft Felder und treibt Handel, Lydia ist Unternehmerin (Apg 16,14), Phöbe Patronin einer Gemeinde. Und die erste Frauenrechtsbewegung kam großenteils aus christlichen Kreisen: Die Versammlung von Seneca Falls 1848 tagte in einer methodistischen Kapelle, viele Pionierinnen waren Quäkerinnen und Abolitionistinnen, die ihre Forderungen biblisch begründeten.`,
              detail: `Säkulare Aufklärer waren in der Frauenfrage keineswegs durchweg fortschrittlich: Rousseau wollte die Erziehung der Frau ganz auf den Mann ausrichten (*Émile*, Buch V). Umgekehrt haben christliche Frauen wie Sarah Grimké ihre Kritik an der Unterdrückung der Frau ausdrücklich mit der gemeinsamen Gottebenbildlichkeit begründet. Ehrlich bleibt: Kirchen haben die rechtliche Unterordnung der Frau lange mitgetragen. Der Maßstab, an dem man sie heute kritisiert – gleiche Würde von Mann und Frau –, stammt aber aus Gen 1,27 und Gal 3,28.`,
              sources: [
                { kind: 'bibel', work: 'Sprüche', ref: '31,16', quote: `Sie denkt nach einem Acker und kauft ihn, und pflanzt einen Weinberg von den Früchten ihrer Hände.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'sonstiges', author: 'Sarah Grimké', work: 'Letters on the Equality of the Sexes and the Condition of Woman', year: '1838', status: 'paraphrase', note: 'Quäkerin und Abolitionistin; begründet die Gleichheit der Geschlechter aus der Schrift.' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher andere antike Text sagt, dass Mann und Frau gemeinsam das Bild Gottes sind?`,
    `Warum hätten die Evangelisten Frauen als erste Auferstehungszeuginnen erfinden sollen, wenn ihr Zeugnis vor Gericht nicht galt?`,
    `Wie erklärst du, dass Frauen im frühen Christentum überproportional vertreten waren, wenn es so frauenfeindlich war?`,
    `Woher stammt in deinem Weltbild die Überzeugung, dass Frauen und Männer gleiche Würde haben?`,
  ],
  avoid: [
    `„In der Bibel gibt es überhaupt keine schwierigen Texte über Frauen." Dtn 22, Num 30 und 1 Tim 2 sind real und müssen erklärt werden.`,
    `Geschlechterunterschiede so zu betonen, dass der Eindruck entsteht, Frauen seien weniger wert oder weniger fähig.`,
    `Häusliche Gewalt oder Machtmissbrauch mit „Unterordnung" zu entschuldigen – das ist Sünde und widerspricht Eph 5,25.`,
  ],
  concessions: [
    `Einzelne Kirchenväter (besonders Tertullian) haben sich abwertend über Frauen geäußert.`,
    `Christen haben über Jahrhunderte Frauen den Zugang zu Bildung und Mitsprache verwehrt und das mit Bibelstellen begründet.`,
    `Einige Gesetze der Tora (Dtn 22,28–29; Dtn 21,10–14) bleiben auch bei wohlwollender Auslegung für heutige Leser schwer erträglich.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', ref: 'Kap. 5', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Gospel Women', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster?', ref: 'Kap. 9–10', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Frauen', 'Patriarchat', 'Genesis', 'Paulus', 'Kindesaussetzung', 'heilige Frauen'],
  related: [
    'christentum-gesellschaft/keine-priesterinnen',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'sexualethik/sexualmoral-veraltet',
    'at-ethik/grausame-gesetze',
  ],
};

export default claim;
