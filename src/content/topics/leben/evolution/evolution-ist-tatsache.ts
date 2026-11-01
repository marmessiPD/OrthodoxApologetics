import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evolution-ist-tatsache',
  title: `„Evolution ist eine Tatsache wie die Schwerkraft."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Greatest Show on Earth (2009); The Blind Watchmaker (1986)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Stephen Jay Gould', role: 'Paläontologe, Harvard (1941–2002)', work: '„Evolution as Fact and Theory", Discover 2 (1981)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University; römisch-katholischer Christ und Kritiker von ID', work: 'Only a Theory (2008); Finding Darwin\'s God (1999)' },
    { name: 'Donald Prothero', role: 'Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007, 2. Aufl. 2017)' },
  ],
  steelman: `Kein seriöser Biologe bezweifelt heute, dass sich das Leben über Hunderte Millionen Jahre verändert hat und dass alle Organismen durch gemeinsame Abstammung verwandt sind. Die Belege kommen aus völlig unabhängigen Disziplinen und passen zusammen: die Abfolge der Fossilien in den Gesteinsschichten, die geografische Verteilung der Arten, die vergleichende Anatomie, die Embryologie und vor allem die Genome, deren verschachtelte Ähnlichkeitsmuster bis hin zu gemeinsamen „Fehlern" (Pseudogene, endogene Retroviren) genau dem Stammbaum entsprechen. Wir beobachten Evolution direkt – bei Bakterien, Viren, Insekten und Fischen. Wie die Schwerkraft ist Evolution ein Faktum; die Evolutionstheorie ist, wie Gravitationstheorien, die Erklärung dieses Faktums. Wer das bestreitet, bestreitet nicht eine Hypothese, sondern das Fundament der gesamten Biologie: „Nichts in der Biologie ergibt Sinn außer im Licht der Evolution" (Dobzhansky) – und Dobzhansky war selbst gläubiger orthodoxer Christ.`,
  biblical: {
    summary: `Die Bibel lehrt, **dass** Gott Schöpfer aller Dinge ist und den Menschen nach seinem Bild geschaffen hat – sie ist kein Lehrbuch über biologische Mechanismen. Bemerkenswert ist, dass Genesis die Erde selbst „hervorbringen" lässt (Gen 1,24): Gott wirkt auch durch geschaffene Ursachen. Zugleich unterscheidet der Text den Menschen klar: Er ist aus „Erde" geformt (Kontinuität mit der übrigen Schöpfung) **und** empfängt Gottes Lebensatem (Gen 2,7) und ist Gottes Bild (Gen 1,27). Unvereinbar mit der Schrift ist daher nicht „Veränderung" oder „Abstammung" als solche, sondern die Behauptung, alles sei **ungelenkt, ziellos und rein materiell** entstanden.`,
    detail: `- Gen 1,24 „Die Erde bringe hervor" – die Väter (Basilius, Augustinus) lasen hierin eine dem Geschaffenen von Gott verliehene Wirkkraft.
- Gen 2,7 nennt zwei Dinge: den Stoff (Erdenkloß) und den Lebensatem Gottes. Die koptische Tradition sieht im Menschen eine Einheit aus Leib und vernunftbegabter Seele.
- Röm 1,20 betont, dass Gottes Wirken an der Schöpfung **erkennbar** ist. Ein Weltbild, das jede Erkennbarkeit grundsätzlich ausschließt, steht in Spannung dazu.
- Missverständnis vermeiden: Die Bibel lehrt keine „Artkonstanz" im Sinne Linnés. Das hebräische *mîn* („Art") in Gen 1 ist keine biologische Spezies.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,24', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott sprach: Die Erde bringe hervor lebendige Tiere, ein jegliches nach seiner Art: Vieh, Gewürm und Tier auf Erden, ein jegliches nach seiner Art. Und es geschah also.` },
      { kind: 'bibel', work: 'Genesis', ref: '2,7', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.` },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.` },
      { kind: 'bibel', work: 'Römer', ref: '1,20', translation: 'Luther 1912', status: 'verbatim', quote: `Denn sein unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.` },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt: Gott hat alles aus dem Nichts geschaffen; der Mensch ist nach Gottes Bild mit vernunftbegabter Seele geschaffen; Adam und Eva sind reale Personen, der Sündenfall ist real. Über **Erdalter und biologische Mechanismen gibt es kein Dogma**. Unvereinbar mit dem Glauben ist der **ungelenkte Materialismus**, also die philosophische Behauptung, die Natur sei ein zielloser Prozess ohne Schöpfer und der Mensch nichts als Materie.`,
    detail: `Athanasius beschreibt den Logos als den, der die ganze Schöpfung ordnet und erhält; Gottes Wirken ist keine „Ursache neben anderen", die in Konkurrenz zu natürlichen Ursachen träte. Basilius und Augustinus sprechen von einer der Schöpfung verliehenen Wirkkraft (Augustinus: *rationes causales/seminales*). Das erlaubt Christen unterschiedliche Modelle – von der theistischen Evolution (Collins, Conway Morris, Dobzhansky) bis zu Intelligent Design (Behe, Meyer, Axe). Entscheidend sind die Grenzen: Gott lenkt und erhält; der Mensch ist mehr als Biologie; Adam ist eine reale Person.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '41–42', status: 'paraphrase', quote: `Der Logos durchwaltet und ordnet die ganze Schöpfung, hält sie zusammen und führt die verschiedenen Elemente zu einer einzigen Harmonie – wie ein Musiker, der die Saiten einer Leier stimmt.` },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den Wortlaut der Genesis (De Genesi ad litteram)', ref: 'V,23; VI,10–11', status: 'paraphrase', quote: `Gott schuf am Anfang auch die „ursächlichen Keimkräfte", aus denen sich im Lauf der Zeit die Geschöpfe entfalten.`, note: 'Augustinus lehrte keine Evolution im modernen Sinn; er zeigt aber, dass die Väter Gottes Schöpfungshandeln nicht auf einzelne Eingriffe reduzierten.' },
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilie 5', status: 'paraphrase', quote: `Das Wort „Die Erde bringe hervor" wirkt in der Natur fort; der erste Befehl Gottes ist wie ein Gesetz, das der Erde ihre Fruchtbarkeit verleiht.` },
    ],
  },
  opposingView: {
    summary: `Die Fachwissenschaft unterscheidet zwischen (1) der Veränderung von Organismen über die Zeit, (2) der gemeinsamen Abstammung und (3) den Mechanismen. Für (1) und (2) besteht in der Biologie ein breiter Konsens; die gemeinsame Abstammung gilt als eines der am besten gestützten Ergebnisse der Wissenschaft. Über (3) wird – auch unter nicht-religiösen Biologen – lebhaft gestritten: Wie viel leisten natürliche Selektion, genetische Drift, Gen-Duplikation, horizontaler Gentransfer, Epigenetik oder Entwicklungsbiologie? Ob die Evolutionstheorie eine „Erweiterte Synthese" braucht, war 2014 Gegenstand einer Kontroverse in *Nature* und 2016 einer Tagung der Royal Society.`,
    detail: `Ehrlich festzuhalten:
- Gould selbst (1981) unterschied Fakt und Theorie: Fakten seien „die Daten der Welt", Theorien „Strukturen von Ideen", die Fakten erklären. Gerade diese Unterscheidung ist für Christen hilfreich.
- Die Mehrheit der Biologen hält die Standardtheorie für erweiterbar, aber grundsätzlich ausreichend (Wray, Hoekstra, Futuyma, Lenski u. a. in *Nature* 2014). Eine Minderheit (Laland, Müller, Jablonka, Noble, Shapiro – keine ID-Vertreter!) fordert eine tiefere Revision.
- Intelligent-Design-Vertreter sind eine kleine Minderheit. Einige von ihnen (z. B. Behe) akzeptieren die gemeinsame Abstammung; andere (Nelson, Meyer) sind skeptisch gegenüber universaler gemeinsamer Abstammung.
- Das Wort „ungelenkt" ist kein Messergebnis, sondern eine philosophische Zusatzbehauptung.`,
    sources: [
      { kind: 'gegner', author: 'Stephen Jay Gould', work: '„Evolution as Fact and Theory", Discover 2', ref: 'S. 34–37', year: '1981', status: 'verbatim', quote: `In der Wissenschaft kann „Tatsache" nur bedeuten: „in solchem Maß bestätigt, dass es verkehrt wäre, die vorläufige Zustimmung zu verweigern".`, original: `In science "fact" can only mean "confirmed to such a degree that it would be perverse to withhold provisional assent."`, translation: 'eigene Übersetzung' },
      { kind: 'gegner', author: 'Stephen Jay Gould', work: '„Evolution as Fact and Theory", Discover 2', year: '1981', status: 'verbatim', quote: `Fakten sind die Daten der Welt. Theorien sind Strukturen von Ideen, die Fakten erklären und deuten.`, original: `Facts are the world's data. Theories are structures of ideas that explain and interpret facts.`, translation: 'eigene Übersetzung' },
      { kind: 'wissenschaft', author: 'Kevin Laland, Tobias Uller, Marc Feldman u. a. / Gregory A. Wray, Hopi E. Hoekstra, Douglas Futuyma, Richard Lenski u. a.', work: '„Does evolutionary theory need a rethink?", Nature 514', ref: 'S. 161–164', year: '2014', status: 'paraphrase', quote: `Pro und Contra in einem Heft: „Ja, dringend" (Erweiterte Synthese) gegen „Nein, alles in Ordnung" (die Theorie integriert neue Befunde).`, url: 'https://doi.org/10.1038/514161a' },
      { kind: 'wissenschaft', author: 'Eugene V. Koonin', work: '„The Origin at 150: is a new evolutionary synthesis in sight?", Trends in Genetics 25 (11)', ref: 'S. 473–475', year: '2009', status: 'verbatim', quote: `Das Gebäude der Modernen Synthese ist zusammengebrochen, anscheinend irreparabel.`, original: `The edifice of the Modern Synthesis has crumbled, apparently, beyond repair.`, translation: 'eigene Übersetzung', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2784144/', note: 'Koonin ist kein ID-Vertreter, sondern meint, die Genomik ersetze die Moderne Synthese durch ein komplexeres naturalistisches Bild. In späteren Arbeiten formulierte er moderater. Nicht als „Koonin lehnt Evolution ab" zitieren!' },
    ],
  },
  quickAnswer: `Das hängt davon ab, was du mit „Evolution" meinst. Dass sich Lebewesen verändern, ist eine Tatsache; dass Organismen gemeinsame Vorfahren haben, ist gut belegt und wird auch von vielen Christen akzeptiert. Aber dass ein **ungelenkter** Prozess aus Mutation und Selektion **alle** Baupläne, Proteine und den menschlichen Geist hervorgebracht hat, ist keine Beobachtung wie ein fallender Apfel – darüber streiten sogar Evolutionsbiologen. Und „ungelenkt" ist überhaupt keine wissenschaftliche, sondern eine philosophische Aussage.`,
  keyPoints: [
    `**Drei Bedeutungen unterscheiden** (Meyer): (1) Veränderung über die Zeit, (2) gemeinsame Abstammung, (3) die Behauptung, dass Mutation und Selektion als ungelenkter Mechanismus alles erklären. Die Debatte dreht sich um (3).`,
    `**Gould selbst trennt Fakt und Theorie:** Der Fall des Apfels ist ein Faktum, Newtons und Einsteins Erklärungen sind Theorien. Ebenso ist die Veränderung ein Faktum, die Erklärung ihres Mechanismus eine Theorie – und die ist offen.`,
    `**Selbst unter Fachleuten umstritten:** Laland et al. (Nature 2014), die Royal-Society-Tagung 2016 und Koonin (2009) zeigen, dass die Hinlänglichkeit der klassischen Mechanismen auch ohne jede Religion debattiert wird.`,
    `**„Ungelenkt" ist Metaphysik:** Keine Messung kann zeigen, dass Gott nicht durch Naturprozesse wirkt. Wer das behauptet, verlässt die Biologie und betreibt Philosophie.`,
    `**Christen sind sich über den Mechanismus nicht einig:** Theistische Evolution (Collins, Conway Morris, Dobzhansky) und Intelligent Design (Behe, Meyer) sind innerchristliche Positionen. Für die koptische Kirche ist der Mechanismus keine Dogmenfrage.`,
    `**Die nicht verhandelbaren Punkte:** Gott ist Schöpfer und Erhalter; der Mensch hat eine geistige Seele nach Gottes Bild; Adam und Eva sind reale Personen.`,
  ],
  argument: {
    name: 'Das Äquivokationsargument (Bedeutungswechsel bei „Evolution")',
    summary: 'Wer von „Evolution als Tatsache" auf „ungelenkte Evolution erklärt alles" schließt, wechselt unbemerkt die Bedeutung des Wortes.',
    premises: [
      { text: `P1: „Evolution" hat mindestens drei Bedeutungen: Veränderung über die Zeit, gemeinsame Abstammung und die Hinlänglichkeit ungelenkter Mechanismen (Mutation, Selektion, Drift).`, support: `Diese Unterscheidung treffen nicht nur ID-Vertreter (Meyer & Keas 2003), sondern implizit auch Gould (Fakt vs. Theorie) und die Debatte um die Erweiterte Synthese.` },
      { text: `P2: Die Belege für Bedeutung 1 sind erdrückend, für Bedeutung 2 stark; Bedeutung 3 ist dagegen auch unter Fachleuten umstritten.`, support: `Siehe Laland et al. 2014, Royal Society 2016, Koonin 2009; empirische Grenzen bei Behe 2007/2010, Axe 2004, Durrett & Schmidt 2008.` },
      { text: `P3: Die Aussage, der Prozess sei „ungelenkt" und „ziellos", ist keine empirische Messung, sondern eine philosophische Interpretation.`, support: `Gottes Wirken als Erstursache konkurriert nicht mit Zweitursachen (Athanasius, Thomas). Kein Experiment kann die Abwesenheit von Lenkung nachweisen.` },
    ],
    inferences: [`Aus der Sicherheit von Bedeutung 1 (und 2) folgt nichts über die Wahrheit von Bedeutung 3.`],
    conclusion: `„Evolution ist eine Tatsache" begründet nicht, dass ungelenkte Prozesse alles erklären – und schon gar nicht, dass es keinen Schöpfer gibt.`,
  },
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer weist darauf hin, dass „Evolution" in Lehrbüchern und Debatten in mehreren Bedeutungen verwendet wird. Gemeinsam mit Michael Keas unterschied er sechs Bedeutungen; in populären Darstellungen fasst er sie meist zu drei zusammen: Veränderung über die Zeit, universale gemeinsame Abstammung und die schöpferische Kraft des Mechanismus aus Zufallsmutation und natürlicher Selektion. Wer die unbestrittene erste Bedeutung beweist und daraus die dritte folgert, begeht nach Meyer eine Äquivokation. Die eigentliche wissenschaftliche Frage sei der Ursprung neuer biologischer Information.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer, Michael N. Keas', work: '„The Meanings of Evolution", in: J. A. Campbell, S. C. Meyer (Hg.), Darwinism, Design, and Public Education', year: '2003', status: 'paraphrase', quote: `Unterscheidung mehrerer Bedeutungen von „Evolution", von bloßer Veränderung bis zur Behauptung eines ungelenkten Mechanismus.` },
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt", year: '2013', status: 'paraphrase', quote: `Die Debatte betrifft nicht die Veränderung an sich, sondern die Fähigkeit des Mechanismus, neue Information und neue Baupläne hervorzubringen.` },
      ],
    },
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe ist ein wichtiges Beispiel dafür, dass Kritik am Mechanismus nicht Leugnung der Veränderung bedeutet: Er akzeptiert die gemeinsame Abstammung, auch die des Menschen mit den Menschenaffen, und hält das alte Erdalter für gesichert. Sein Einwand richtet sich gegen die Behauptung, Zufallsmutation und Selektion seien in der Lage, komplexe, aufeinander abgestimmte molekulare Systeme hervorzubringen. Seine Arbeiten versuchen, diese Grenze empirisch zu bestimmen – etwa anhand der Daten zur Chloroquinresistenz von Malariaerregern.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', ref: 'Kap. 4', status: 'paraphrase', quote: `Gemeinsame Abstammung ist gut belegt; die Frage ist, ob Zufallsmutation die Hauptquelle der Neuerungen sein kann.` },
      ],
    },
    {
      person: 'dobzhansky',
      role: 'als Evolutionsgenetiker und orthodoxer Christ (Position der theistischen Evolution)',
      text: `Dobzhansky, einer der Architekten der Modernen Synthese, verstand sich als gläubiger Christ der russisch-orthodoxen Tradition. In seinem berühmten Aufsatz von 1973 griff er den Junge-Erde-Kreationismus an, betonte aber zugleich, dass Evolution und Schöpfung für ihn keine Gegensätze seien: Evolution sei die Methode, durch die Gott schaffe. Seine Stimme steht hier für die innerchristliche Position der theistischen Evolution – sie zeigt, dass die Annahme der Evolutionstheorie nicht automatisch Materialismus bedeutet.`,
      sources: [
        { kind: 'wissenschaft', author: 'Theodosius Dobzhansky', work: '„Nothing in Biology Makes Sense Except in the Light of Evolution", The American Biology Teacher 35 (3)', ref: 'S. 125–129', year: '1973', status: 'verbatim', quote: `Ich bin ein Kreationist und ein Evolutionist.`, original: `I am a creationist and an evolutionist.`, translation: 'eigene Übersetzung', note: 'Im Kontext: Evolution sei Gottes (bzw. der Natur) Schöpfungsmethode. Dobzhansky war stark von Teilhard de Chardin beeinflusst; seine Theologie ist nicht deckungsgleich mit koptischer Lehre.' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (Position der theistischen Evolution)',
      text: `Collins hält die gemeinsame Abstammung aller Lebewesen – einschließlich des Menschen – für durch die Genomdaten eindeutig belegt. Zugleich lehnt er den Schluss ab, damit sei Gott überflüssig: Die Naturgesetze, die Feinabstimmung des Universums und vor allem das Moralgesetz im Menschen verweisen für ihn auf einen Schöpfer. Collins zeigt, dass der eigentliche Konflikt nicht zwischen Biologie und Glauben, sondern zwischen Glauben und materialistischer Weltanschauung liegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase', quote: `Evolution als Mechanismus und der Glaube an einen Schöpfergott schließen sich nicht aus; der Materialismus ist eine philosophische Zusatzannahme.` },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Schöpfung durch den Logos',
      text: `Für Athanasius ist Gott nicht ein Handwerker, der von Zeit zu Zeit in eine sonst eigenständige Natur eingreift, sondern der Logos ist es, der die ganze Schöpfung in jedem Augenblick trägt, ordnet und zur Harmonie fügt. Aus dieser Sicht ist die Frage „Natur oder Gott?" falsch gestellt. Eine Naturwissenschaft, die Regelmäßigkeiten beschreibt, beschreibt die Ordnung, die der Logos der Welt gegeben hat. Unvereinbar ist erst die Behauptung, es gebe keinen Logos – keine Vernunft hinter der Welt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '35–42', status: 'paraphrase', quote: `Die Ordnung und Harmonie der Schöpfung verkünden ihren Urheber wie Schriftzeichen; der Logos hält alles zusammen.` },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Plantinga argumentiert, der Konflikt liege nicht zwischen Wissenschaft und Theismus, sondern zwischen Wissenschaft und Naturalismus. Die Evolutionstheorie als solche sage nicht, dass der Prozess ungelenkt sei; das sei eine philosophische Beimischung. Ironischerweise untergrabe gerade die Kombination „Naturalismus plus Evolution" das Vertrauen in unsere Vernunft: Wenn unsere kognitiven Fähigkeiten nur auf Überlebensvorteil, nicht auf Wahrheit selektiert wurden, haben wir keinen Grund, ihnen bei abstrakten Fragen – etwa dem Naturalismus selbst – zu trauen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', status: 'paraphrase', quote: `Es gibt einen oberflächlichen Konflikt, aber tiefe Übereinstimmung zwischen Wissenschaft und theistischer Religion – und eine oberflächliche Übereinstimmung, aber einen tiefen Konflikt zwischen Wissenschaft und Naturalismus.` },
      ],
    },
  ],
  dialog: [
    {
      id: 'tatsache-wie-heliozentrik',
      objection: `Evolution ist so sicher bewiesen wie die Tatsache, dass die Erde um die Sonne kreist. Wer daran zweifelt, ist schlicht uninformiert.`,
      objectionBy: 'Richard Dawkins',
      answer: `Bevor wir streiten: Was genau meinst du mit „Evolution"? Wenn du Veränderung über die Zeit meinst – einverstanden. Wenn du gemeinsame Abstammung meinst – gut belegt, und viele Christen akzeptieren sie. Wenn du meinst, dass ein ungelenkter Mechanismus aus Mutation und Selektion alle biologische Komplexität erklärt – das ist keine Beobachtung, sondern eine Theorie, über die selbst Evolutionsbiologen streiten.`,
      detail: `Dawkins' berühmter Satz aus seiner Rezension von 1989 lautet, wer nicht an Evolution glaube, sei „unwissend, dumm oder verrückt (oder böse …)". Solche Sätze leben von der Unschärfe des Wortes „Evolution". Lege die drei Bedeutungen offen auf den Tisch und frage, über welche ihr streitet. Meist zeigt sich: Über die ersten beiden gibt es zwischen dir und deinem Gegenüber wenig Dissens – die Debatte betrifft die Kraft des Mechanismus und die philosophische Behauptung der Ungelenktheit.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: '„Put Your Money on Evolution", The New York Times Book Review', year: '1989', status: 'verbatim', quote: `Man kann mit absoluter Sicherheit sagen: Wenn man jemandem begegnet, der behauptet, nicht an die Evolution zu glauben, ist diese Person unwissend, dumm oder verrückt (oder böse, aber das möchte ich lieber nicht in Betracht ziehen).`, original: `It is absolutely safe to say that if you meet somebody who claims not to believe in evolution, that person is ignorant, stupid or insane (or wicked, but I'd rather not consider that).`, translation: 'eigene Übersetzung' },
      ],
      questionsBack: [
        `Welche der drei Bedeutungen von „Evolution" verteidigst du gerade?`,
        `Ist „ungelenkt" für dich ein Messergebnis oder eine Interpretation?`,
      ],
      followUps: [
        {
          id: 'haarspalterei-mechanismus-geklaert',
          objection: `Das ist Haarspalterei. Alle drei sind belegt. Der Mechanismus ist Lehrbuchwissen: Mutation, Selektion, Drift, Rekombination. Darüber streitet niemand ernsthaft.`,
          objectionBy: 'Jerry Coyne',
          answer: `Doch – und zwar in den führenden Fachzeitschriften. 2014 diskutierte *Nature* unter dem Titel „Braucht die Evolutionstheorie ein Umdenken?" ein Pro und Contra; 2016 veranstaltete die Royal Society eine Tagung zu „neuen Trends in der Evolutionsbiologie"; der Genomforscher Eugene Koonin schrieb 2009, das Gebäude der Modernen Synthese sei „zusammengebrochen". Keiner dieser Forscher ist ID-Vertreter. Wenn sie über die Hinlänglichkeit des Mechanismus streiten, darf ich das auch.`,
          detail: `Wichtig: Die Kritiker der Standardtheorie (Laland, Müller, Jablonka, Noble, Shapiro) lehnen Intelligent Design ab. Du zitierst sie nicht als Verbündete für ID, sondern als Beleg dafür, dass der Satz „der Mechanismus ist geklärt" so nicht stimmt.`,
          sources: [
            { kind: 'wissenschaft', author: 'Royal Society', work: 'Wissenschaftliche Tagung „New trends in evolutionary biology: biological, philosophical and social science perspectives", London (Tagungsband in Interface Focus 7, 2017)', year: '2016', status: 'paraphrase', quote: `Tagung über die Frage, ob Entwicklungsbiologie, Epigenetik und Nischenkonstruktion eine Erweiterung der Evolutionstheorie erfordern.` },
            { kind: 'wissenschaft', author: 'Gerd B. Müller', work: '„Why an extended evolutionary synthesis is necessary", Interface Focus 7', year: '2017', status: 'paraphrase', quote: `Die Standardtheorie erkläre gut die Veränderung von Merkmalen, weniger gut die Entstehung neuer Merkmale und Baupläne.`, note: 'Müller ist kein ID-Vertreter.' },
          ],
          followUps: [
            {
              id: 'ees-sind-keine-id-leute',
              objection: `Du missbrauchst diese Leute. Laland, Müller und Noble wollen Ergänzungen, keine Abschaffung – und sie halten ID für Unsinn.`,
              objectionBy: 'Larry Moran',
              answer: `Völlig richtig, und das sage ich ausdrücklich. Ich behaupte nicht, dass sie ID unterstützen. Ich behaupte nur, was sie selbst sagen: dass die klassische Theorie die Entstehung neuer Formen nicht ausreichend erklärt. Ob ihre naturalistischen Ergänzungen das leisten, ist eine offene Frage – aber „Lehrbuchwissen, das niemand bezweifelt" ist es eben nicht.`,
              followUps: [
                {
                  id: 'mehrheit-sagt-alles-gut',
                  objection: `Die Mehrheit – Wray, Hoekstra, Futuyma, Lenski – sagt in demselben Nature-Artikel: Alles in Ordnung, die Theorie integriert die neuen Befunde. Die Mehrheit hat recht.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Mehrheiten sind wichtig, aber sie ersetzen keine Erklärung. Die Frage ist konkret: Gibt es für ein komplexes System – sagen wir eine neue Proteinfaltung oder einen neuen Bauplan – einen nachgewiesenen, schrittweisen Weg mit realistischen Wahrscheinlichkeiten? Wenn ja, zeig ihn mir. „Die Theorie kann das integrieren" heißt nur, dass sie flexibel ist – nicht, dass sie es erklärt hat.`,
                  detail: `Eine Theorie, die jeden neuen Befund nachträglich „integriert", gewinnt an Flexibilität, verliert aber an Erklärungsschärfe. Lenke das Gespräch auf konkrete Fälle (Protein-Ursprung, Kambrium, Flagellum), wo Zahlen und Experimente vorliegen. Siehe die Claims zu neuen Proteinen und zur Wartezeit.`,
                  questionsBack: [
                    `Kannst du mir einen experimentell nachgewiesenen Weg zur Entstehung einer neuen Proteinfaltung nennen?`,
                    `Ab welcher Datenlage würdest du sagen, dass der Mechanismus an seine Grenzen stößt?`,
                  ],
                },
              ],
            },
            {
              id: 'kumulative-selektion-nicht-zufall',
              objection: `Natürliche Selektion ist das Gegenteil von Zufall. Kumulative Selektion erklimmt den „Berg der Unwahrscheinlichkeit" in kleinen Schritten.`,
              objectionBy: 'Richard Dawkins',
              answer: `Einverstanden: Selektion ist nicht zufällig. Aber sie kann nur auswählen, was Mutation bereits angeboten hat – und nur, wenn jeder Zwischenschritt einen Vorteil bringt. Die entscheidende Frage ist also, ob es diese gangbaren kleinen Schritte zu komplexen Funktionen gibt. Das ist eine empirische Frage, die man nicht durch Analogien, sondern durch Experimente beantworten muss.`,
              detail: `Hier lohnt der Übergang zum Claim „Mutation und Selektion erklären alle biologische Komplexität" (Wartezeiten, Seltenheit funktionaler Proteine, Chloroquin-Daten).`,
            },
          ],
        },
      ],
    },
        {
          id: 'fakt-und-theorie-wie-gravitation',
          objection: `Du verwechselst Fakt und Theorie. Auch die Gravitation ist ein Fakt mit einer Theorie dazu. Genauso Evolution: Fakt plus Theorie.`,
          objectionBy: 'Kenneth Miller',
          answer: `Genau das ist mein Punkt – du hast Gould auf deiner Seite und ich auch. Dass Äpfel fallen, ist das Faktum; wie Gravitation funktioniert, erklären Newton und Einstein, und die Quantengravitation ist bis heute offen. Ebenso ist Veränderung das Faktum; welcher Mechanismus sie hervorbringt, ist die Theorie. Ich bestreite nicht das Faktum, sondern frage, ob die Theorie ungelenkter Mechanismen alles erklärt.`,
          detail: `Zudem hinkt der Vergleich: Gravitation ist im Labor jederzeit wiederholbar messbar; die Entstehung des Vogelflugs oder des Säugetierohrs ist ein einmaliges historisches Ereignis, das nur indirekt rekonstruiert werden kann. Das macht historische Wissenschaft nicht unwissenschaftlich – es verlangt aber den Schluss auf die beste Erklärung.`,
          followUps: [
            {
              id: 'historische-wissenschaft-ist-wissenschaft',
              objection: `Historische Wissenschaften sind genauso Wissenschaft – Geologie, Kosmologie, Forensik. Du konstruierst einen künstlichen Unterschied.`,
              objectionBy: 'Donald Prothero',
              answer: `Einverstanden, und das hilft mir. Historische Wissenschaften schließen von Spuren auf Ursachen, die wir heute als wirksam kennen – das war Darwins und Lyells Methode. Genau diese Methode verwendet Meyer: Die einzige Ursache, von der wir aus Erfahrung wissen, dass sie große Mengen neuer funktionaler Information erzeugt, ist Intelligenz. Wenn historische Schlüsse legitim sind, ist auch der Schluss auf Design zumindest als Kandidat legitim.`,
              followUps: [
                {
                  id: 'design-nennt-keinen-mechanismus',
                  objection: `ID ist keine Erklärung, weil es keinen Mechanismus nennt. „Ein Designer hat's gemacht" erklärt gar nichts.`,
                  objectionBy: 'Nick Matzke',
                  answer: `Archäologen erkennen eine Pfeilspitze als Werkzeug, ohne zu wissen, wer sie wann mit welchen Bewegungen geschlagen hat; SETI würde ein Signal als intelligent erkennen, ohne den Sender zu kennen. Die Ursache „Intelligenz" ist eine bekannte, real wirkende Ursache (*vera causa*). Die Frage nach dem genauen Wie ist legitim – aber sie ist eine zweite Frage, nicht die Voraussetzung, um Design überhaupt zu erkennen.`,
                  questionsBack: [
                    `Wenn du eine Inschrift auf dem Mars fändest – bräuchtest du den „Mechanismus", um auf Intelligenz zu schließen?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'christ-warum-kaempfen',
          objection: `Als Christ: Warum kämpfst du überhaupt? Gemeinsame Abstammung ist einfach Gottes Methode. Dobzhansky war orthodoxer Christ, Collins ist Evangelikaler.`,
          objectionBy: 'Dennis Venema',
          answer: `Das ist eine faire Frage unter Christen, und ich nehme sie ernst. Für die koptische Kirche ist der biologische Mechanismus keine Dogmenfrage; theistische Evolution und Intelligent Design sind beides christliche Positionen. Nicht verhandelbar ist: Gott lenkt und erhält die Schöpfung, der Mensch hat eine geistige Seele nach Gottes Bild, Adam und Eva sind reale Personen. Mein Widerspruch richtet sich gegen den ungelenkten Materialismus – nicht gegen dich.`,
          detail: `Kennzeichne die Gemeinsamkeit klar: Collins, Conway Morris und ID-Vertreter lehnen gemeinsam den Materialismus ab. Der Unterschied liegt darin, ob Gottes Wirken in der Biologie empirisch erkennbar ist (ID) oder sich nur in der Ordnung der Naturgesetze zeigt (theistische Evolution).`,
          followUps: [
            {
              id: 'gelenkt-empirisch-leer',
              objection: `Aber „gelenkte Evolution" ist empirisch nicht von ungelenkter zu unterscheiden. Dann ist dein Wort „gelenkt" wissenschaftlich leer.`,
              objectionBy: 'Dennis Venema',
              answer: `Dann ist das Wort „ungelenkt" ebenso wissenschaftlich leer – und genau das ist mein Punkt. Es gibt zwei christliche Antworten: Entweder wirkt Gott durch Zweitursachen, die wir als Naturgesetze beschreiben (so Augustinus und viele theistische Evolutionisten) – dann ist Lenkung theologisch real, aber nicht messbar. Oder Gottes Wirken hinterlässt erkennbare Spuren wie spezifizierte Information (so ID). Beide Wege lehnen die Behauptung ab, Wissenschaft habe die Ziellosigkeit bewiesen.`,
              followUps: [
                {
                  id: 'gelenkt-kreationismus-hintertuer',
                  objection: `Gelenkte Evolution ist Kreationismus durch die Hintertür. Die Natur zeigt keine Lenkung: 99 % aller Arten sind ausgestorben, überall Leid und Verschwendung.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Jetzt wechselst du von der Biologie zur Theologie – das ist legitim, aber dann reden wir über das Problem des Leids, nicht über Genetik. Dass Arten aussterben, ist eine Beobachtung; dass dahinter kein Sinn steht, ist eine Deutung. Bekannte Evolutionsbiologen wie George Gaylord Simpson oder Douglas Futuyma haben die Ziellosigkeit ausdrücklich als weltanschauliche Konsequenz formuliert – das zeigt, dass sie nicht aus den Daten selbst stammt.`,
                  sources: [
                    { kind: 'gegner', author: 'George Gaylord Simpson', work: 'The Meaning of Evolution', year: '1949 (rev. 1967)', status: 'paraphrase', quote: `Der Mensch sei das Ergebnis eines zwecklosen, natürlichen Prozesses, der ihn nicht im Sinn hatte.` },
                    { kind: 'gegner', author: 'Douglas J. Futuyma', work: 'Evolutionary Biology (3. Aufl.)', year: '1998', status: 'paraphrase', quote: `Darwin habe durch die Verbindung ungerichteter Variation mit der „blinden" Selektion theologische Erklärungen der Lebensvorgänge überflüssig gemacht.` },
                  ],
                  questionsBack: [
                    `Welches Experiment hat gezeigt, dass Gott nicht durch Naturprozesse wirkt?`,
                  ],
                },
              ],
            },
            {
              id: 'theistische-evolution-feige',
              objection: `Theistische Evolution ist eine feige Mischung. Darwin hat Gott überflüssig gemacht – entweder Gott oder Evolution.`,
              objectionBy: 'Richard Dawkins',
              answer: `Hier sind sich Dawkins und der radikalste Fundamentalist erstaunlich einig – beide setzen voraus, Gott sei eine Ursache neben anderen, die mit Naturursachen konkurriert. Die Kirchenväter sahen das anders: Für Athanasius trägt der Logos die ganze Schöpfung in jedem Augenblick. Wer eine Naturursache entdeckt, hat Gott nicht verdrängt, sondern beschrieben, wie seine Schöpfung funktioniert. „Entweder Gott oder Natur" ist eine falsche Alternative.`,
              sources: [
                { kind: 'gegner', author: 'Richard Dawkins', work: 'The Blind Watchmaker', ref: 'Kap. 1', year: '1986', status: 'verbatim', quote: `Darwin hat es möglich gemacht, ein intellektuell erfüllter Atheist zu sein.`, original: `Darwin made it possible to be an intellectually fulfilled atheist.`, translation: 'eigene Übersetzung' },
              ],
            },
          ],
        },
        {
          id: 'wissenschaftsleugner',
          objection: `Ihr Kreationisten leugnet doch alles: Erdalter, Fossilien, Genetik. Das ist Wissenschaftsleugnung wie beim Klimawandel.`,
          objectionBy: 'Richard Dawkins',
          answer: `Ich leugne weder das Erdalter noch die Abfolge der Fossilien; die koptische Kirche hat kein Junge-Erde-Dogma. Ich akzeptiere die Daten. Ich bezweifle eine bestimmte Erklärung dieser Daten – dass ungelenkte Mechanismen allein ausreichen. Das ist keine Leugnung, sondern eine Debatte über Erklärungskraft, wie es sie in jeder lebendigen Wissenschaft gibt.`,
          followUps: [
            {
              id: 'behe-akzeptiert-abstammung',
              objection: `Deine ID-Leute sind doch selbst gespalten. Behe akzeptiert sogar die gemeinsame Abstammung von Mensch und Affe – also ist er Evolutionist!`,
              objectionBy: 'Jerry Coyne',
              answer: `Richtig – und das zeigt, dass es eben nicht um „Evolution ja oder nein" geht. Behe akzeptiert Veränderung und gemeinsame Abstammung und bestreitet nur, dass Zufallsmutation und Selektion die Hauptquelle komplexer Neuerungen sein können. Das ist genau die Unterscheidung, die ich am Anfang getroffen habe.`,
              followUps: [
                {
                  id: 'behe-gott-lenkt-mutationen-unwissenschaftlich',
                  objection: `Dann glaubt Behe eben, Gott habe die richtigen Mutationen gesteuert. Das ist völlig unwissenschaftlich und nicht prüfbar.`,
                  objectionBy: 'Larry Moran',
                  answer: `Behes Kernbehauptung ist sehr wohl prüfbar: Er sagte 2007 voraus, dass die Chloroquinresistenz beim Malariaerreger mindestens zwei spezifische Mutationen erfordert, bevor ein Vorteil entsteht – was Summers et al. 2014 in PNAS bestätigten. Wer seine Grenzschätzung widerlegen will, kann zeigen, dass vielteilige Neuerungen mit realistischer Wahrscheinlichkeit entstehen. Das ist ein empirisches Programm.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Robert L. Summers u. a.', work: '„Diverse mutational pathways converge on saturable chloroquine transport via the malaria parasite\'s chloroquine resistance transporter", PNAS 111 (17)', ref: 'E1759–E1767', year: '2014', status: 'paraphrase', quote: `Ein geringes Maß an Chloroquin-Transport wird durch mindestens zwei Mutationen im PfCRT-Protein ermöglicht; es gibt mehrere Mutationswege.`, url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4035986/', note: 'Die Autoren sind keine ID-Vertreter. Kritiker betonen die Vielfalt der Wege; Behe betont die Mindestzahl von zwei Mutationen.' },
                  ],
                },
              ],
            },
            {
              id: 'konsens-999-prozent',
              objection: `99,9 % der Biologen akzeptieren Evolution. Willst du klüger sein als die gesamte Fachwelt?`,
              objectionBy: 'Donald Prothero',
              answer: `Der Konsens betrifft vor allem Veränderung und gemeinsame Abstammung – und den teile ich weitgehend bzw. lasse ihn als Christ offen. Ob ungelenkte Mechanismen alles erklären, ist dagegen nicht Gegenstand eines einstimmigen Konsenses, wie die Debatte um die Erweiterte Synthese zeigt. Und unter den Biologen, die Evolution akzeptieren, sind zahlreiche überzeugte Christen. Die Frage ist nicht die Kopfzahl, sondern die Beweislage.`,
            },
          ],
        },
        {
          id: 'nichts-ergibt-sinn',
          objection: `„Nichts in der Biologie ergibt Sinn außer im Licht der Evolution." Ohne Evolution gäbe es keine moderne Medizin, keine Impfstoffe, keine Genetik.`,
          objectionBy: 'Jerry Coyne',
          answer: `Dobzhanskys Satz ist berühmt – und er schrieb im selben Aufsatz: „Ich bin ein Kreationist und ein Evolutionist." Er sah also keinen Gegensatz zum Schöpferglauben. Die praktische Medizin braucht Variation, Vererbung und Selektion (etwa bei Resistenzen) – das bestreitet niemand. Sie braucht aber nicht die Zusatzbehauptung, dass der gesamte Ursprung biologischer Komplexität ungelenkt war.`,
          followUps: [
            {
              id: 'medizin-braucht-gemeinsame-abstammung',
              objection: `Doch: Tiermodelle in der Medizin funktionieren nur, weil Mäuse und Menschen verwandt sind.`,
              objectionBy: 'Nathan Lents',
              answer: `Tiermodelle funktionieren, weil Mäuse und Menschen ähnliche Biochemie und Physiologie haben. Ob man diese Ähnlichkeit durch gemeinsame Abstammung oder gemeinsamen Bauplan erklärt, ändert am Laborversuch nichts. Und selbst wer gemeinsame Abstammung akzeptiert, hat damit noch nicht gezeigt, dass der Prozess ungelenkt war. Die Medizin entscheidet diese weltanschauliche Frage nicht.`,
            },
          ],
        },
  ],
  questionsToAsk: [
    `Was genau meinst du mit „Evolution" – Veränderung, gemeinsame Abstammung oder die Hinlänglichkeit ungelenkter Mechanismen?`,
    `Welches Experiment hat gezeigt, dass der Prozess „ungelenkt" ist?`,
    `Warum fordern dann renommierte, nicht-religiöse Biologen eine „Erweiterte Synthese"?`,
    `Wenn Gould zwischen Fakt und Theorie unterscheidet – auf welcher Seite steht die Behauptung, Mutation und Selektion erklärten alles?`,
    `Ist für dich Francis Collins ein Wissenschaftsleugner, weil er an einen Schöpfer glaubt?`,
  ],
  avoid: [
    `„Evolution ist nur eine Theorie." – Das Wort „Theorie" bedeutet in der Wissenschaft ein gut gestütztes Erklärungssystem; der Satz klingt nach Unkenntnis und verspielt sofort die Glaubwürdigkeit.`,
    `„Darwin hat auf dem Sterbebett widerrufen." – Das ist eine Legende (Lady-Hope-Geschichte), die Darwins Familie bestritt.`,
    `„Niemand hat je Evolution beobachtet." – Veränderung innerhalb von Populationen (Resistenzen, Lenski-Experiment) ist beobachtet. Bestreite nicht das Beobachtete.`,
    `Mikro- und Makroevolution als „zwei völlig verschiedene Dinge" darstellen, ohne zu begründen, wo die Grenze liegt und warum.`,
  ],
  concessions: [
    `Die gemeinsame Abstammung ist in der Biologie breit akzeptiert und durch viele unabhängige Datenquellen gestützt; auch zahlreiche Christen (Collins, Conway Morris, Dobzhansky, Behe) akzeptieren sie.`,
    `Veränderung über die Zeit und Anpassung durch Selektion sind beobachtete Tatsachen.`,
    `Intelligent Design ist in der Fachwelt eine kleine Minderheitenposition.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: "Darwin's Doubt: The Explosive Origin of Animal Life and the Case for Intelligent Design", year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies', year: '2011', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jerry A. Coyne', work: 'Why Evolution Is True', year: '2009', status: 'paraphrase', note: 'Die beste populäre Darstellung der Gegenseite.' },
    { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', year: '2006', status: 'paraphrase', note: 'Position der theistischen Evolution.' },
    { kind: 'wissenschaft', author: 'Kevin Laland u. a.', work: '„Does evolutionary theory need a rethink?", Nature 514, 161–164', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Evolution', 'Wissenschaftstheorie', 'Fakt und Theorie', 'Theistische Evolution', 'Materialismus'],
  related: [
    'evolution/mutation-selektion-erklaeren-alles',
    'evolution/id-keine-wissenschaft',
    'genetik/pseudogene-ervs',
    'naturalismus/vernunft-durch-evolution',
    'naturalismus/lueckenbuesser-gott',
    'genesis/vaeter-lasen-woertlich',
  ],
};

export default claim;
