import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'universum-aus-dem-nichts',
  title: `„Das Universum entstand aus dem Nichts – ohne Gott (Krauss, Hawking)."`,
  proponents: [
    { name: 'Lawrence M. Krauss', role: 'Theoretischer Physiker und Kosmologe (Arizona State University, emeritiert)', work: 'A Universe from Nothing: Why There Is Something Rather than Nothing (2012)' },
    { name: 'Stephen Hawking & Leonard Mlodinow', role: 'Theoretischer Physiker (Cambridge) und Physiker/Wissenschaftsautor', work: 'The Grand Design (2010)' },
    { name: 'Alexander Vilenkin', role: 'Kosmologe, Tufts University', work: '„Creation of Universes from Nothing", Physics Letters B 117 (1982)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker (Caltech, heute Johns Hopkins)', work: 'The Big Picture (2016); Debatte mit W. L. Craig (2014)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'Nachwort zu Krauss, A Universe from Nothing (2012)' },
  ],
  steelman: `Die Quantenphysik hat die alte Frage „Warum gibt es etwas statt nichts?" verwandelt. Das leere Vakuum ist instabil: Darin entstehen ständig Teilchen-Antiteilchen-Paare. Die Gesamtenergie des Universums ist nach gängigen Abschätzungen nahe null – die positive Energie der Materie wird durch die negative Energie der Gravitation ausgeglichen –, sodass seine Entstehung keinen „Preis" kostet. Vilenkin hat ein Modell vorgelegt, in dem ein winziges, geschlossenes Universum durch Quantentunneln aus einem Zustand ohne klassischen Raum und ohne Zeit hervorgeht; danach bläht die Inflation es auf. Hawking und Mlodinow folgern: Weil es ein Gesetz wie die Gravitation gibt, kann und wird sich ein Universum spontan selbst erschaffen. Ursache und Wirkung sind Begriffe, die innerhalb der Raumzeit funktionieren; auf die Entstehung der Raumzeit selbst angewendet, verlieren sie ihren Sinn. Wer trotzdem einen Gott „davor" setzt, fügt eine zusätzliche, unerklärte Größe hinzu, ohne irgendetwas besser zu erklären – und muss sich fragen lassen, woher dieser Gott kommt.`,
  biblical: {
    summary: `Die Schrift lehrt, dass Gott alles ins Dasein gerufen hat, ohne auf ein vorhandenes Material zurückzugreifen. „Aus dem Nichts" (*ex nihilo*) heißt dabei nicht, dass „das Nichts" eine Art Rohstoff wäre, sondern: **nicht aus irgendetwas** – Gott allein ist die Ursache, kein Stoff ist vorgegeben. Genau hier liegt der Unterschied zu Krauss: Sein Universum entsteht weder „aus nichts" noch „durch nichts", sondern aus einem physikalischen Zustand mit Gesetzen.`,
    detail: `- **1 Mose 1,1** eröffnet mit einem absoluten Anfang: *bereschit bara Elohim* – „Im Anfang schuf Gott". Das Verb *bara* hat in der Hebräischen Bibel immer Gott zum Subjekt und nennt nie ein Material.
- **Hebräer 11,3** sagt ausdrücklich, dass das Sichtbare nicht aus Erscheinendem hervorging.
- **Römer 4,17** beschreibt Gott als den, der „dem, das nicht ist, ruft, dass es sei".
- **2 Makkabäer 7,28** (deuterokanonisch, für die koptische Kirche kanonisch): Gott hat Himmel und Erde „nicht aus Seiendem" gemacht. Fair ist der Hinweis, dass Exegeten streiten, ob der Vers schon die spätere philosophische Lehre der *creatio ex nihilo* im strengen Sinn meint; in Verbindung mit Hebr 11,3, Röm 4,17 und Joh 1,3 ist die Linie aber eindeutig.
- **Johannes 1,3** und **Kolosser 1,16–17**: Alles – ohne Ausnahme – ist durch den Logos geworden und „besteht" in ihm. Die Schöpfung ist also nicht nur ein Startereignis, sondern dauerndes Getragensein (Hebr 1,3).

Wichtig für das Gespräch: Die Bibel behauptet nicht, Physik könne nie Übergänge zwischen physikalischen Zuständen beschreiben. Sie behauptet, dass **alles Physikalische überhaupt** – Felder, Gesetze, Raum und Zeit – sein Dasein von Gott empfängt.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, original: `בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '4,17', quote: `… vor Gott, dem du geglaubt hast, der da lebendig macht die Toten und ruft dem, das nicht ist, daß es sei.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,28', quote: `… dass Gott sie nicht aus Seiendem gemacht hat …`, original: `ὅτι οὐκ ἐξ ὄντων ἐποίησεν αὐτὰ ὁ θεός`, translation: 'eigene, wörtliche Übersetzung', status: 'verbatim', note: 'Ob der Vers bereits die philosophisch ausformulierte creatio ex nihilo meint, ist exegetisch umstritten (vgl. B. Schmitz, „Geschaffen aus dem Nichts?"). Ehrlich so benennen.' },
      { kind: 'bibel', work: 'Johannes', ref: '1,3', quote: `Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt im Glaubensbekenntnis von Nizäa-Konstantinopel den einen Gott als „Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren". Die Väter haben die *creatio ex nihilo* gegen zwei antike Alternativen verteidigt, die erstaunlich modern klingen: gegen die Epikureer (die Welt sei aus zufällig bewegten Atomen von selbst entstanden) und gegen die Platoniker (Gott habe nur einen ewig vorhandenen Stoff geformt).`,
    detail: `Der hl. **Athanasius** weist in *De Incarnatione* 2–3 beide Positionen zurück: Ein Zufallsursprung erklärt die Ordnung nicht, und ein Gott, der nur vorhandenen Stoff bearbeitet, wäre ein Handwerker, nicht Schöpfer. Gott hat vielmehr durch seinen Logos alles aus dem Nichtsein ins Sein gerufen. Ähnlich argumentieren schon **Theophilus von Antiochien** (*Ad Autolycum* II,4) und der hl. **Irenäus** (*Adversus Haereses* II,10,4). In der koptischen Liturgie (Gregorius-Anaphora) dankt die Gemeinde Gott dafür, den Menschen aus dem Nichtsein ins Dasein gebracht zu haben. Für die koptische Kirche ist die Schöpfung aus dem Nichts verbindliche Lehre; wie Gott dabei mit Naturgesetzen und Zeitskalen verfährt, ist **kein** Dogma.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.`, original: `ποιητὴν οὐρανοῦ καὶ γῆς, ὁρατῶν τε πάντων καὶ ἀοράτων`, translation: 'gebräuchliche deutsche Fassung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '2–3', year: 'ca. 318', quote: `Gegen Epikureer (Zufall) und Platoniker (ewige Materie): Gott hat durch seinen Logos alles aus dem Nichtsein ins Sein gerufen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'II,10,4', year: 'um 180', quote: `Gott ist darin den Menschen überlegen, dass er die Materie seines Werkes selbst ins Dasein gerufen hat, die zuvor nicht war.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie des hl. Gregorius (Anaphora)', quote: `Dank an Gott, der den Menschen aus dem Nichtsein ins Dasein gebracht hat.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Forschungsstand: Es gibt seriöse physikalische Modelle für die „Quantenentstehung" eines Universums (Tryon 1973, Vilenkin 1982, Hartle–Hawking 1983). Keines ist empirisch bestätigt; alle setzen eine noch unbekannte Theorie der Quantengravitation voraus. Vor allem aber setzen alle einen gesetzmäßigen quantenmechanischen Rahmen voraus – Felder, Wellenfunktionen, Zustandsräume, Gesetze. Ein solches „Nichts" ist nach dem Urteil des Physikers und Philosophen David Albert schlicht etwas.`,
    detail: `- **Quantenvakuum:** Der tiefste Energiezustand von Quantenfeldern. Er hat Struktur, Energie und messbare Eigenschaften (z. B. Casimir-Effekt). „Teilchen, die aus dem Nichts auftauchen" ist eine Metapher für Fluktuationen dieser Felder.
- **Null-Energie-Universum:** Die Idee geht auf Edward Tryon (*Nature* 246, 1973) zurück. In der Allgemeinen Relativitätstheorie ist eine globale Gesamtenergie allerdings nur in Spezialfällen sauber definiert – darauf weist ausgerechnet Sean Carroll selbst hin („Energy Is Not Conserved", 2010).
- **Vilenkins Tunnelmodell:** „Nichts" bedeutet hier: kein klassischer Raum, keine klassische Zeit. Die Gesetze der Quantenmechanik und der Gravitation werden vorausgesetzt. Vilenkin selbst hat in *Many Worlds in One* (2006) offen gefragt, woher diese Gesetze kommen.
- **Kritik:** Albert (*New York Times*, 23./25. März 2012) verriss Krauss' Buch; Krauss nannte Albert im *Atlantic* einen „moronic philosopher" (April 2012) – Albert ist promovierter theoretischer Physiker – und entschuldigte sich später in *Scientific American* für seine pauschale Abwertung der Philosophie.
- **Offene Frage:** Ob Raum und Zeit „emergent" sind, ist Gegenstand aktueller Forschung (Quantengravitation). Theologisch ändert das nichts: Auch eine emergente Raumzeit hätte eine Grundlage, die selbst nicht nichts ist.`,
    sources: [
      { kind: 'gegner', author: 'Lawrence M. Krauss', work: 'A Universe from Nothing', year: '2012', quote: `Das Vakuum ist instabil; „Nichts" im physikalischen Sinn – leerer Raum oder sogar das Fehlen von Raum und Zeit – erzeugt nach den Gesetzen der Quantenmechanik zwangsläufig etwas.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'David Albert', work: '„On the Origin of Everything" (Rezension von Krauss), New York Times Book Review', ref: 'Ausgabe vom 25.03.2012 (online 23.03.2012)', year: '2012', quote: `Vakuumzustände relativistischer Quantenfelder sind ebenso wie Giraffen oder Kühlschränke bestimmte Anordnungen physikalischen Stoffs; dass Teilchen auftauchen und verschwinden, wenn sich Felder umordnen, ist so wenig geheimnisvoll, wie dass eine Faust erscheint und verschwindet, wenn sich meine Finger umordnen. Mit einer Schöpfung aus dem Nichts hat das nichts zu tun.`, original: `Relativistic-quantum-field-theoretical vacuum states — no less than giraffes or refrigerators or solar systems — are particular arrangements of elementary physical stuff.`, status: 'paraphrase', url: 'https://www.nytimes.com/2012/03/25/books/review/a-universe-from-nothing-by-lawrence-m-krauss.html', note: 'Albert ist Philosoph (Columbia) mit Promotion in theoretischer Physik – kein Theist. Der englische Kernsatz (original) ist im Wortlaut bestätigt (Prüfung 11/2026); die deutsche Wiedergabe fasst den Absatz sinngemäß zusammen.' },
      { kind: 'wissenschaft', author: 'Edward P. Tryon', work: '„Is the Universe a Vacuum Fluctuation?", Nature 246', year: '1973', quote: `Vorschlag, das Universum könne eine Vakuumfluktuation mit Gesamtenergie null sein.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Alexander Vilenkin', work: '„Creation of Universes from Nothing", Physics Letters B 117', year: '1982', quote: `Ein geschlossenes Universum kann durch Quantentunneln aus einem Zustand ohne klassische Raumzeit entstehen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Sean Carroll', work: '„Energy Is Not Conserved", Blog Preposterous Universe / Cosmic Variance (Discover)', year: '22.02.2010', quote: `In einem expandierenden Universum ist Energie global nicht erhalten; Energieerhaltung folgt aus Zeittranslationssymmetrie, die hier fehlt.`, status: 'paraphrase', url: 'https://preposterousuniverse.com/blog/2010/02/22/energy-is-not-conserved/' },
    ],
  },
  quickAnswer: `Krauss' „Nichts" ist ein Quantenvakuum oder ein Zustand, der den Gesetzen der Quantengravitation gehorcht – und das ist nicht nichts, sondern etwas sehr Reiches. Hawkings Satz „weil es ein Gesetz wie die Gravitation gibt" setzt die Gravitation schon voraus. Physik beschreibt, wie aus einem physikalischen Zustand ein anderer hervorgeht; warum es überhaupt Gesetze, Felder und Zustände gibt, kann sie nicht beantworten. Genau diese Frage beantwortet die Schöpfung aus dem Nichts.`,
  keyPoints: [
    `**Vakuum ≠ Nichts:** Das Quantenvakuum hat Energie, Struktur und gehorcht Gesetzen. „Nichts" heißt: keine Felder, keine Gesetze, keine Eigenschaften – gar nichts.`,
    `**Gesetze erschaffen nichts:** Naturgesetze beschreiben, was geschieht, wenn etwas existiert. Newtons Gesetze haben noch nie eine Billardkugel bewegt (Lennox).`,
    `**Selbsterschaffung ist widersprüchlich:** Um sich selbst zu erschaffen, müsste das Universum existieren, bevor es existiert.`,
    `**Null-Energie ist nicht Null-Dasein:** +100 und −100 ergeben null, aber es sind 200 Einheiten realer Dinge. Außerdem ist globale Energie in der Relativitätstheorie meist gar nicht wohldefiniert.`,
    `**Alle Modelle sind spekulativ:** Es gibt keine bestätigte Theorie der Quantengravitation; die Kritik von Feldbrugge, Lehners und Turok (2017) zeigt, wie offen die Lage ist.`,
    `**Die Frage bleibt:** Selbst wenn ein Modell stimmte, verschiebt es die Frage nur – warum gibt es gerade diesen gesetzmäßigen Rahmen? Hawking selbst fragte: Was haucht den Gleichungen Feuer ein?`,
  ],
  argument: {
    name: 'Das Argument vom vorausgesetzten Rahmen',
    summary: 'Jede physikalische „Entstehung aus dem Nichts" setzt etwas voraus und lässt daher die Grundfrage offen.',
    premises: [
      {
        text: 'P1: Was Energie, Struktur, Felder oder Gesetze besitzt, ist nicht „nichts".',
        support: `Das folgt aus der Bedeutung des Wortes. „Nichts" ist kein besonders dünnes Etwas, sondern die Abwesenheit von allem. Selbst Krauss räumt ein, dass das Vakuum Energie und Eigenschaften hat.`,
        sources: [{ kind: 'fachliteratur', author: 'David Albert', work: '„On the Origin of Everything", New York Times Book Review', year: '2012', quote: `Krauss' Nichts ist eine Anordnung physikalischen Stoffs, kein Nichts.`, status: 'paraphrase' }],
      },
      {
        text: 'P2: Alle bekannten physikalischen „Aus-dem-Nichts"-Modelle setzen Quantenfelder, eine Wellenfunktion, einen Zustandsraum oder Naturgesetze voraus.',
        support: `Das gilt für Tryon (Vakuumfluktuation), Vilenkin (Tunneln nach den Gesetzen der Quantengravitation), Hartle–Hawking (Wellenfunktion des Universums) und Krauss. Ohne diese Voraussetzungen lässt sich keine einzige Gleichung hinschreiben.`,
      },
      {
        text: 'P3: Ein Modell, das etwas voraussetzt, erklärt nicht, warum es überhaupt etwas gibt – sondern nur, wie aus einem physikalischen Zustand ein anderer wird.',
        support: `Eine Erklärung, die das zu Erklärende (Existenz von irgendetwas) voraussetzt, ist zirkulär. Physik ist hervorragend darin, Übergänge zu beschreiben; die Existenz des Beschriebenen ist ihr vorgegeben.`,
      },
    ],
    inferences: ['Krauss und Hawking haben die Frage nach der Existenz nicht beantwortet, sondern umdefiniert.'],
    conclusion: 'Die physikalische Kosmologie widerlegt die Schöpfung aus dem Nichts nicht. Die Frage „Warum gibt es überhaupt etwas – einschließlich der Gesetze?" bleibt offen und verlangt entweder einen Grund jenseits des physikalischen Systems oder den Verzicht auf jede Erklärung.',
  },
  voices: [
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox hat Hawkings *Grand Design* in *God and Stephen Hawking* (2011) Satz für Satz geprüft. Sein Hauptpunkt: Naturgesetze sind Beschreibungen, keine Akteure. Die Gesetze der Arithmetik haben noch nie Geld auf ein Konto gebracht; man muss erst etwas einzahlen, dann sagen sie, was herauskommt. Ebenso setzen physikalische Gesetze voraus, dass es etwas gibt, worauf sie zutreffen. Hawkings Satz, das Universum erschaffe sich wegen der Gravitation selbst, verwechselt Beschreibung mit Verursachung und ist zudem in sich widersprüchlich: Wer sich selbst erschafft, muss schon da sein.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God and Stephen Hawking: Whose Design Is It Anyway?', year: '2011', quote: `Unsinn bleibt Unsinn, auch wenn ihn weltberühmte Wissenschaftler reden.`, original: `Nonsense remains nonsense, even when talked by world-famous scientists.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater gegen antike Selbstentstehungs-Theorien',
      text: `Athanasius kannte bereits die Epikureer, die lehrten, die Welt sei ohne Planer aus von selbst bewegten Atomen entstanden. Für ihn zeigt gerade die geordnete Vielfalt der Welt, dass sie nicht aus sich selbst stammt; und eine Schöpfung aus vorgegebenem Stoff würde Gott zum bloßen Handwerker herabsetzen. Der Logos ruft alles aus dem Nichtsein ins Sein und hält es dort – ohne ihn würde die Schöpfung ins Nichts zurückfallen (*De Incarnatione* 4–5). Damit ist die Schöpfung kein einmaliges Anstoßen, sondern dauernde Abhängigkeit des Seins von Gott.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '2–5', year: 'ca. 318', quote: `Gott schuf aus dem Nichts; die Schöpfung hätte ohne den Logos die Tendenz, ins Nichtsein zurückzufallen.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Philosoph der Kosmologie',
      text: `Craig unterscheidet scharf zwischen „nichts" als Abwesenheit allen Seins und den physikalischen Zuständen, die Krauss so nennt. Der alte Grundsatz *ex nihilo nihil fit* – aus nichts wird nichts – sei keine Hypothese, die ein Experiment widerlegen könnte, sondern eine metaphysische Einsicht: Hätte Nichts die Fähigkeit, ein Universum hervorzubringen, gäbe es keinen Grund, warum aus ihm nicht beliebige andere Dinge jederzeit auftauchen. Für die philosophische Gesamtdebatte um das kosmologische Kalam-Argument verweist Craig auf die Verbindung von Anfang und Ursache.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", in: Blackwell Companion to Natural Theology', year: '2009', quote: `Das Quantenvakuum ist ein energiereicher Zustand mit physikalischer Struktur und kann deshalb nicht als „nichts" gelten.`, status: 'paraphrase' }],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer analysiert in *Return of the God Hypothesis* (2021) die Quantenkosmologie von Hawking und Vilenkin. Sein Befund: Die „Wellenfunktion des Universums" ist ein hochspezifisches mathematisches Objekt. Wer sie zur Erklärung des Universums heranzieht, erklärt das Physische durch etwas Mathematisch-Abstraktes. Mathematische Strukturen existieren aber nach unserer gesamten Erfahrung in einem Geist. Die Quantenkosmologie verschiebt die Frage daher in eine Richtung, die eher auf einen Geist als auf blinde Selbstentstehung hindeutet.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', quote: `Die Quantenkosmologie setzt mathematische Strukturen voraus, deren Wirksamkeit selbst erklärungsbedürftig ist und auf einen Geist verweist.`, status: 'paraphrase' }],
    },
    {
      person: 'lemaitre',
      role: 'als Priester und Begründer der Urknall-Kosmologie',
      text: `Lemaître, der als Erster 1931 einen quantenphysikalischen Anfang des Universums vorschlug, warnte ausdrücklich davor, den Urknall als physikalischen Gottesbeweis zu verkaufen. Physik und Glaube beantworten verschiedene Fragen. Gerade deshalb ist er ein starker Zeuge gegen Krauss: Was die Physik über den Anfang sagen kann, betrifft den frühesten physikalischen Zustand – die Frage nach dem Grund allen Seins liegt auf einer anderen Ebene und wird von der Physik weder beantwortet noch erledigt.`,
      sources: [{ kind: 'wissenschaft', author: 'Georges Lemaître', work: '„The Beginning of the World from the Point of View of Quantum Theory", Nature 127, 706', year: '1931', quote: `Vorschlag eines Anfangs der Welt als einzelnes Quantum; Raum und Zeit erhalten erst danach einen sinnvollen Gehalt.`, status: 'paraphrase' }],
    },
    {
      person: 'hart',
      role: 'als Religionsphilosoph des klassischen Theismus',
      text: `Hart betont in *The Experience of God* (2013), dass der Gott des klassischen Theismus kein Ding unter Dingen und kein erstes Glied einer physikalischen Kausalkette ist, sondern der Grund des Seins von allem. Deshalb kann keine physikalische Theorie – wie elegant auch immer – ihn ersetzen: Sie beschreibt Beziehungen zwischen Seiendem, setzt aber das Sein schon voraus. Wer meint, Gott werde durch Quantenkosmologie überflüssig, verwechselt ihn mit einem Demiurgen.`,
      sources: [{ kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God: Being, Consciousness, Bliss', year: '2013', quote: `Gott ist nicht ein Seiendes neben anderen, sondern der Grund, dass überhaupt etwas ist; Physik kann diese Frage nicht einmal stellen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'vakuum-ist-das-nichts',
      objection: `Das Quantenvakuum ist das einzige Nichts, das die Physik kennt. Dein philosophisches „absolutes Nichts" ist ein leeres Wortspiel – es kommt in der Natur nicht vor.`,
      objectionBy: 'Lawrence Krauss',
      targetsPremise: 1,
      answer: `Gerade weil das Vakuum in der Natur vorkommt, ist es nicht nichts. Es hat Energie, Felder und gehorcht Gesetzen. Wenn du „nichts" umdefinierst, hast du nicht erklärt, warum es etwas gibt, sondern das Thema gewechselt. Dein Buch heißt aber „Warum es etwas gibt statt nichts" – im ganz gewöhnlichen Sinn.`,
      detail: `David Albert – Physiker und Philosoph, kein Theist – formulierte es in der *New York Times* so: Vakuumzustände relativistischer Quantenfelder sind ebenso Anordnungen physikalischen Stoffs wie Giraffen oder Kühlschränke. Dass Teilchen entstehen, wenn sich Felder umordnen, ist so wenig eine Schöpfung aus dem Nichts, wie eine Faust aus dem Nichts entsteht, wenn sich Finger krümmen. „Nichts" ist kein physikalischer Zustand, sondern die Abwesenheit aller Zustände. Gerade diese Abwesenheit kann nichts hervorbringen – nicht, weil wir es nicht messen können, sondern weil es nichts gibt, was etwas tun könnte.`,
      sources: [
        { kind: 'fachliteratur', author: 'David Albert', work: '„On the Origin of Everything", New York Times Book Review', year: '2012', quote: `Krauss liegt völlig falsch; seine religiösen und philosophischen Kritiker haben recht.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Hat dein Vakuum Energie und gehorcht es den Gesetzen der Quantenfeldtheorie? Wenn ja – in welchem Sinn ist es dann „nichts"?`,
        `Wenn „nichts" in deinem Buch etwas anderes bedeutet als im Untertitel, welche Frage hast du dann eigentlich beantwortet?`,
      ],
      followUps: [
        {
          id: 'vilenkins-nichts',
          objection: `Gut, dann nimm Vilenkins Modell: kein Raum, keine Zeit, keine Materie. Daraus tunnelt ein Universum. Mehr Nichts geht nicht.`,
          objectionBy: 'Lawrence Krauss / Alexander Vilenkin',
          targetsPremise: 2,
          answer: `Auch Vilenkins Modell braucht die Gesetze der Quantenmechanik und der Gravitation – sonst gibt es keine Tunnelwahrscheinlichkeit, die man ausrechnen könnte. Vilenkin selbst hat gefragt, woher diese Gesetze kommen. Ein „Nichts", für das Gesetze gelten, ist kein Nichts.`,
          detail: `Vilenkins „Nichts" ist präzise definiert als Fehlen einer klassischen Raumzeit. Das Tunneln wird durch eine Wellenfunktion beschrieben, die eine Gleichung erfüllt (Wheeler-DeWitt-Gleichung). Damit sind ein Konfigurationsraum, Quantenregeln und gravitative Dynamik vorausgesetzt. In *Many Worlds in One* (2006) räumt Vilenkin ein, dass sein Modell die Frage nach dem Ursprung der Gesetze offenlässt und dass man sie sich „irgendwie vor dem Universum" denken müsse. Das ist eine bemerkenswert ehrliche Aussage – und genau unser Punkt.`,
          sources: [{ kind: 'gegner', author: 'Alexander Vilenkin', work: 'Many Worlds in One: The Search for Other Universes', year: '2006', quote: `Das Tunnelmodell setzt die Gesetze der Physik voraus; woher diese kommen, bleibt offen – sie müssten in gewissem Sinn schon vor dem Universum da sein.`, status: 'paraphrase' }],
          questionsBack: [`Wo „existieren" die Gesetze, nach denen das Universum aus dem Nichts tunnelt, wenn es noch nichts gibt?`],
          followUps: [
            {
              id: 'gesetze-nur-beschreibungen',
              objection: `Gesetze sind keine Dinge, die irgendwo „existieren". Sie sind nur unsere Beschreibungen. Du verdinglichst Mathematik.`,
              objectionBy: 'Sean Carroll',
              targetsPremise: 2,
              answer: `Einverstanden – dann können sie aber auch nichts bewirken. Das ist ein Dilemma: Entweder sind die Gesetze real und wirksam – dann sind sie etwas und kein Nichts. Oder sie sind bloße Beschreibungen – dann kann kein Universum „wegen eines Gesetzes wie der Gravitation" entstehen. Beschreibungen erschaffen nichts.`,
              detail: `Diese Gabelung ist der Kern der ganzen Debatte. Hawkings Satz lebt davon, dass das Gesetz eine Art schöpferische Kraft hat. Carrolls humeanische Sicht (Gesetze als Muster im Gesamtmosaik der Ereignisse) ist philosophisch respektabel – sie bedeutet aber, dass das Gesetz das Universum nicht erklärt, sondern umgekehrt: Das Universum (sein Muster) „erklärt" das Gesetz. Dann steht man wieder vor der nackten Frage, warum es dieses Mosaik überhaupt gibt.`,
              voices: [{ person: 'lennox', role: 'als Mathematiker', text: `Lennox' Vergleich: Die Gesetze der Arithmetik sagen, dass 100 plus 100 Euro 200 ergeben. Aber wenn ich kein Geld einzahle, bleibt das Konto leer. Gesetze sagen, was geschieht, wenn etwas da ist – sie bringen nichts hervor.` }],
              questionsBack: [`Wenn Gesetze nur Beschreibungen sind – was genau „erschafft" dann nach Hawking das Universum?`],
              followUps: [
                {
                  id: 'universum-rohe-tatsache',
                  objection: `Dann ist das Universum eben eine rohe Tatsache. Es ist einfach da. Nicht alles braucht eine Erklärung.`,
                  objectionBy: 'Sean Carroll / Bertrand Russell',
                  answer: `Das ist eine philosophische Entscheidung, kein Ergebnis der Physik – und eine, die du sonst nirgends akzeptierst. Kein Kosmologe sagt über ein Phänomen im Universum „es ist halt so". Warum soll das Erklärungsprinzip ausgerechnet beim Größten und Wichtigsten aufhören? Außerdem ist das Universum offensichtlich kontingent: Es hätte andere Gesetze, andere Anfangsbedingungen haben können.`,
                  detail: `Russell sagte 1948 in der BBC-Debatte mit Frederick Copleston, das Universum sei „einfach da, und das ist alles". Das ist konsequent, aber teuer: Wer die Frage nach dem Grund des Ganzen verbietet, verabschiedet sich an der entscheidenden Stelle vom Erklärungsanspruch der Vernunft. Die ausführliche Diskussion gehört zum Kontingenzargument.`,
                  sources: [{ kind: 'gegner', author: 'Bertrand Russell', work: 'BBC-Rundfunkdebatte mit Frederick Copleston', year: '1948', quote: `Das Universum ist einfach da, und das ist alles.`, original: `I should say that the universe is just there, and that's all.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
                  questionsBack: [`Würdest du akzeptieren, wenn ein Kollege bei einem rätselhaften Messergebnis sagt: „Es ist einfach so, keine Erklärung nötig"?`, `Was macht das Universum als Ganzes zu einer Ausnahme vom Erklärungsprinzip?`],
                  followUps: [
                    {
                      id: 'wer-schuf-dann-gott',
                      objection: `Und Gott ist dann keine rohe Tatsache? Wer hat Gott erschaffen? Du hörst einfach eine Stufe später auf.`,
                      objectionBy: 'Richard Dawkins',
                      answer: `Nein: Der Unterschied ist, *was* am Ende steht. Das Universum ist zusammengesetzt, veränderlich und hätte anders sein können – es trägt den Grund seines Daseins nicht in sich. Gott ist nach christlichem Verständnis nicht geworden, nicht zusammengesetzt und existiert notwendig. Die Frage „Wer schuf das Ungeschaffene?" ist ein Kategorienfehler, wie „Wer ist der Junggeselle, der mit dieser Junggesellin verheiratet ist?".`,
                      detail: `Niemand verlangt eine Ursache für alles, sondern für alles, was zu existieren beginnt oder kontingent ist. Ausführlich im Claim „Wer hat dann Gott erschaffen?".`,
                      questionsBack: [`Verlangst du eine Ursache für alles, was existiert – oder für alles, was kontingent ist bzw. einen Anfang hat?`],
                    },
                  ],
                },
                {
                  id: 'gesetze-aus-multiversum',
                  objection: `Krauss sagt im Buch selbst: Vielleicht sind sogar die Gesetze zufällig entstanden, in einem Multiversum, in dem verschiedene Gesetze gelten.`,
                  objectionBy: 'Lawrence Krauss',
                  answer: `Dann gibt es ein Multiversum mit einem Mechanismus, der Gesetze variiert – und das ist wieder etwas, mit eigenen Meta-Gesetzen. Die Frage wandert nur eine Etage höher: Warum gibt es diesen Generator? Ein unendlicher Regress von Mechanismen erklärt nicht, warum es überhaupt Mechanismen gibt.`,
                  detail: `Außerdem ist das Multiversum empirisch unbestätigt und unter Physikern selbst umstritten (George Ellis, Roger Penrose, Sabine Hossenfelder). Siehe den Claim zum Multiversum im Themenblock Feinabstimmung.`,
                  questionsBack: [`Welche Gesetze gelten in dem Multiversum, das die Gesetze erzeugt – und woher kommen diese?`],
                },
              ],
            },
            {
              id: 'null-energie-kostet-nichts',
              objection: `Die Gesamtenergie des Universums ist null: Positive Massenenergie und negative Gravitationsenergie heben sich auf. Ein Universum kostet also nichts – es braucht keinen Schöpfer.`,
              objectionBy: 'Lawrence Krauss / Stephen Hawking',
              answer: `Eine Bilanz von null ist nicht dasselbe wie Nichtexistenz. Wenn ich 100 Euro Guthaben und 100 Euro Schulden habe, ist mein Saldo null – aber es gibt das Geld und die Schulden. Außerdem ist eine globale Gesamtenergie in der Allgemeinen Relativitätstheorie meist gar nicht sauber definiert; darauf hat Sean Carroll selbst hingewiesen.`,
              detail: `Das Null-Energie-Argument (Tryon 1973) zeigt höchstens, dass die Entstehung eines Universums nicht gegen einen Energieerhaltungssatz verstoßen muss. Es sagt nichts darüber, warum es Masse, Gravitation, Felder und die Gesetze gibt, die diese Bilanz ermöglichen. Erhaltungssätze regeln Übergänge innerhalb eines Systems; sie sind keine Erklärung für das Dasein des Systems.`,
              sources: [{ kind: 'gegner', author: 'Sean Carroll', work: '„Energy Is Not Conserved"', year: '2010', quote: `Im expandierenden Universum ist Energie nicht global erhalten; die Rede von der „Energie des Gravitationsfeldes" sei eher irreführend.`, status: 'paraphrase', url: 'https://preposterousuniverse.com/blog/2010/02/22/energy-is-not-conserved/' }],
              questionsBack: [`Folgt aus „die Summe ist null", dass die Summanden nicht existieren?`],
              followUps: [
                {
                  id: 'keine-erhaltung-keine-ursache',
                  objection: `Wenn kein Erhaltungssatz verletzt wird, braucht der Vorgang keine Ursache. Ursachen sind nur nötig, wo etwas „bezahlt" werden muss.`,
                  objectionBy: 'Victor Stenger',
                  answer: `Das verwechselt Energiebilanz mit Kausalität. Auch ein Vorgang, der energetisch neutral ist, geschieht nicht ohne Grund: Ein Ball, der auf ebenem Boden ruht, beginnt nicht ohne Anstoß zu rollen, obwohl das keine Energie kostet. Die Frage nach der Ursache betrifft das Dasein, nicht die Buchhaltung.`,
                },
              ],
            },
          ],
        },
        {
          id: 'philosophen-irrelevant',
          objection: `Albert ist Philosoph. Philosophen haben in der Kosmologie nichts mehr zu melden; was „nichts" bedeutet, entscheidet heute die Physik.`,
          objectionBy: 'Lawrence Krauss (Atlantic-Interview 2012)',
          answer: `Albert hat einen Doktor in theoretischer Physik. Und Krauss selbst hat sich nach diesem Interview in *Scientific American* für seine Abwertung der Philosophie entschuldigt. Vor allem aber: Die Bedeutung von Wörtern wie „nichts" ist keine Messgröße. Wer sie umdefiniert, beantwortet eine andere Frage.`,
          detail: `Dass Physiker die Begriffe ihrer Theorien präzisieren, ist legitim. Aber die Frage „Warum gibt es etwas statt nichts?" ist eine Frage der Metaphysik. Wer behauptet, nur die Physik dürfe sie beantworten, macht eine philosophische Aussage über die Grenzen der Erkenntnis – die sich mit physikalischen Mitteln nicht begründen lässt.`,
          sources: [{ kind: 'gegner', author: 'Lawrence M. Krauss', work: 'Interview mit Ross Andersen: „Has Physics Made Philosophy and Religion Obsolete?", The Atlantic', year: '23.04.2012', quote: `Krauss bezeichnet Albert als „moronic philosopher" und wirft der Philosophie vor, im Gegensatz zur Physik keinen Fortschritt zu machen.`, status: 'paraphrase', note: 'Krauss nahm die Pauschalkritik an der Philosophie später in Scientific American teilweise zurück.' }],
          followUps: [
            {
              id: 'frage-ist-sinnlos',
              objection: `Dann ist die Frage „Warum gibt es überhaupt etwas?" eben sinnlos, weil man sie nicht empirisch prüfen kann.`,
              objectionBy: 'Lawrence Krauss',
              answer: `Dann hat dein Buch eine sinnlose Frage im Untertitel. Und der Satz „Nur empirisch Prüfbares ist sinnvoll" ist selbst nicht empirisch prüfbar – er widerlegt sich selbst. Die Frage ist sinnvoll; sie ist nur nicht physikalisch.`,
              detail: `Der logische Positivismus, der genau diese Position vertrat, ist in der Philosophie seit Jahrzehnten aufgegeben – unter anderem weil sein eigenes Sinnkriterium den Test nicht besteht. Siehe den Claim zum Szientismus.`,
              questionsBack: [`Ist der Satz „Nur empirisch prüfbare Aussagen sind sinnvoll" selbst empirisch prüfbar?`],
            },
          ],
        },
      ],
    },
    {
      id: 'gesetz-wie-gravitation',
      objection: `Hawking hat es klar gesagt: Weil es ein Gesetz wie die Gravitation gibt, kann und wird sich das Universum selbst aus dem Nichts erschaffen. Man muss Gott nicht bemühen, um die Zündschnur anzuzünden.`,
      objectionBy: 'Stephen Hawking & Leonard Mlodinow',
      targetsPremise: 3,
      answer: `Der Satz enthält drei Probleme. Erstens: Gravitation ist nicht nichts – wer sie voraussetzt, beginnt nicht beim Nichts. Zweitens: „Sich selbst erschaffen" ist widersprüchlich; man müsste existieren, bevor man existiert. Drittens: Gesetze verursachen nichts, sie beschreiben. Hawkings Satz ist Philosophie – und zwar keine gute.`,
      detail: `Der Gott der Bibel ist auch nicht der Zünder eines Feuerwerks, das danach von selbst läuft. Hawking widerlegt einen deistischen Lückenbüßer, den die Kirche nie gelehrt hat. Christlich ist Gott der Grund, warum es Gravitation, Felder und Gesetze überhaupt gibt – und warum sie fortbestehen (Kol 1,17; Hebr 1,3).`,
      sources: [
        { kind: 'gegner', author: 'Stephen Hawking & Leonard Mlodinow', work: 'The Grand Design', ref: 'Kap. 8', year: '2010', quote: `Weil es ein Gesetz wie die Gravitation gibt, kann und wird sich das Universum selbst aus dem Nichts erschaffen. Spontane Schöpfung ist der Grund, warum es etwas gibt statt nichts, warum das Universum existiert, warum wir existieren. Es ist nicht nötig, Gott anzurufen, um die Zündschnur anzuzünden und das Universum in Gang zu setzen.`, original: `Because there is a law such as gravity, the universe can and will create itself from nothing. Spontaneous creation is the reason there is something rather than nothing, why the universe exists, why we exist. It is not necessary to invoke God to light the blue touch paper and set the universe going.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'bibel', work: 'Kolosser', ref: '1,17', quote: `Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Existiert das Gesetz der Gravitation, bevor das Universum existiert? Wenn ja, wo und als was? Wenn nein, wie kann es dann das Universum hervorbringen?`,
        `Kann etwas sich selbst hervorbringen, ohne vorher schon da zu sein?`,
      ],
      followUps: [
        {
          id: 'selbsterschaffung-nur-populaer',
          objection: `„Selbsterschaffung" ist populär formuliert. Gemeint ist: Die Wellenfunktion des Universums erlaubt einen Übergang in einen Zustand mit Raumzeit. Das ist saubere Physik.`,
          objectionBy: 'Sean Carroll',
          answer: `Dann ist das ehrlicher – aber es beantwortet die Frage nicht mehr. Eine Wellenfunktion ist ein mathematisches Objekt, das einen Quantenzustand beschreibt. Warum gibt es diese Wellenfunktion, warum gehorcht sie dieser Gleichung, warum ist sie physikalisch verwirklicht? Hawking selbst fragte 1988: Was haucht den Gleichungen Feuer ein?`,
          sources: [{ kind: 'gegner', author: 'Stephen Hawking', work: 'A Brief History of Time', ref: 'Schlusskapitel', year: '1988', quote: `Selbst wenn es nur eine mögliche vereinheitlichte Theorie gibt, ist sie nur ein Satz von Regeln und Gleichungen. Was ist es, das den Gleichungen Feuer einhaucht und ein Universum schafft, das sie beschreiben können?`, original: `Even if there is only one possible unified theory, it is just a set of rules and equations. What is it that breathes fire into the equations and makes a universe for them to describe?`, translation: 'eigene Übersetzung', status: 'verbatim' }],
          questionsBack: [`Warum ist von allen denkbaren Wellenfunktionen gerade diese physikalisch real?`],
          followUps: [
            {
              id: 'm-theorie-10-hoch-500',
              objection: `Die M-Theorie erlaubt etwa 10^500 Universen mit verschiedenen Gesetzen. Wir brauchen keinen „Feuer-Einhaucher" – alle Möglichkeiten werden verwirklicht.`,
              objectionBy: 'Stephen Hawking & Leonard Mlodinow',
              answer: `Die M-Theorie ist bis heute nicht einmal vollständig formuliert, geschweige denn bestätigt. Und eine Landschaft von 10^500 Vakua ist wieder etwas – mit Strings, Branen, Extra-Dimensionen und Regeln. Die Frage, warum es diesen Rahmen gibt, verschwindet nicht, sie wird nur größer.`,
              detail: `Selbst säkulare Physiker wie George Ellis, Roger Penrose oder Sabine Hossenfelder halten die Landschaft nicht für prüfbare Wissenschaft. Siehe den Claim „Das Multiversum erklärt die Feinabstimmung".`,
              followUps: [
                {
                  id: 'wissenschaft-wird-es-klaeren',
                  objection: `Wir wissen es noch nicht – aber die Wissenschaft wird es klären. Gott ist nur ein Platzhalter für unsere Unwissenheit, eine schrumpfende Lücke.`,
                  objectionBy: 'Neil deGrasse Tyson',
                  answer: `Hier geht es nicht um eine Lücke im Wissen, sondern um eine andere Art von Frage. Jede physikalische Erklärung setzt Physik voraus – Gesetze, Zustände, Felder. Darum kann keine noch so fortgeschrittene Physik erklären, warum es überhaupt Physik gibt. Das ist keine schrumpfende Lücke, sondern eine logische Grenze.`,
                  detail: `Tyson beschreibt Gott als „immer weiter zurückweichende Tasche wissenschaftlicher Unwissenheit" (*Natural History*, November 2005, „The Perimeter of Ignorance"). Das trifft einen Lückenbüßer-Gott – nicht den Schöpfer, der Grund der Gesetze ist, die die Wissenschaft entdeckt. Newton, Kepler und Maxwell suchten Gesetze, *weil* sie an einen rationalen Gesetzgeber glaubten.`,
                  sources: [{ kind: 'gegner', author: 'Neil deGrasse Tyson', work: '„The Perimeter of Ignorance", Natural History', year: 'November 2005', quote: `Gott sei eine immer weiter zurückweichende Tasche wissenschaftlicher Unwissenheit.`, status: 'paraphrase' }],
                  questionsBack: [`Welche denkbare physikalische Entdeckung könnte erklären, warum es überhaupt physikalische Gesetze gibt, ohne schon Gesetze vorauszusetzen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'philosophie-ist-tot',
          objection: `Hawking schreibt gleich am Anfang des Buches: Die Philosophie ist tot. Fragen nach dem Warum beantwortet heute die Physik.`,
          objectionBy: 'Stephen Hawking & Leonard Mlodinow',
          answer: `„Die Philosophie ist tot" ist ein philosophischer Satz – kein physikalischer. Und *The Grand Design* ist voller Philosophie: Es entwickelt eine eigene Erkenntnistheorie („modellabhängiger Realismus") und zieht metaphysische Schlüsse über Gott. Wer die Philosophie für tot erklärt, philosophiert – nur ohne es zu merken.`,
          sources: [{ kind: 'gegner', author: 'Stephen Hawking & Leonard Mlodinow', work: 'The Grand Design', ref: 'Kap. 1', year: '2010', quote: `Die Philosophie ist tot. Die Philosophie hat mit den modernen Entwicklungen der Wissenschaft, besonders der Physik, nicht Schritt gehalten.`, original: `Philosophy is dead. Philosophy has not kept up with modern developments in science, particularly physics.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
        },
      ],
    },
    {
      id: 'kausalitaet-nur-in-der-zeit',
      objection: `Ursache und Wirkung gibt es nur in der Zeit: Die Ursache kommt vorher. Vor dem Urknall gab es keine Zeit – also gibt es auch keine Ursache, und die Frage nach einem Schöpfer ist sinnlos.`,
      objectionBy: 'Stephen Hawking / Sean Carroll',
      answer: `Ursachen müssen ihren Wirkungen nicht zeitlich vorausgehen; sie können gleichzeitig sein oder ihnen dem Sein nach vorausgehen. Christen sagen seit Augustinus, dass Gott die Zeit *mit* der Welt geschaffen hat – also sind wir uns einig, dass es kein „vorher" im zeitlichen Sinn gibt. Gefragt ist nicht, was zeitlich davor war, sondern worauf das Ganze gründet.`,
      detail: `Augustinus (*De civitate Dei* XI,6): Die Welt ist nicht *in* der Zeit, sondern *mit* der Zeit geschaffen. Kant gab das berühmte Beispiel gleichzeitiger Verursachung: Eine Bleikugel, die auf einem Kissen liegt, verursacht die Mulde, ohne ihr zeitlich vorauszugehen. Ausführlicher im Claim „Was vor dem Urknall war, ist eine sinnlose Frage".`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XI,6', year: 'ca. 417', quote: `… ohne Zweifel ist die Welt nicht in der Zeit, sondern mit der Zeit geschaffen.`, original: `procul dubio non est mundus factus in tempore, sed cum tempore.`, translation: 'eigene Übersetzung', status: 'verbatim' }],
      questionsBack: [`Wenn es ohne Zeit keine Ursachen gibt – wie kann dann die Physik sinnvoll von der „Entstehung" der Zeit sprechen?`],
      followUps: [
        {
          id: 'kausalitaet-nicht-fundamental',
          objection: `In der fundamentalen Physik gibt es überhaupt keine „Ursachen", nur Gesetze, die Zustände miteinander verbinden. Kausalität ist ein Alltagsbegriff.`,
          objectionBy: 'Sean Carroll',
          answer: `Dann kann die Physik auch keine kausale Erklärung für die Entstehung des Universums liefern – auch keine naturalistische. Wenn es keine Ursachen gibt, gibt es keine Erklärung im Sinne von „weil". Du gibst dann nicht eine bessere Antwort als ich, sondern verzichtest auf jede Antwort.`,
          detail: `Carrolls „poetischer Naturalismus" unterscheidet fundamentale Beschreibung (Gesetze) und emergente Redeweisen (Ursachen). Aber gerade wissenschaftliches Denken stützt sich auf Ursachen: Experimente sind Eingriffe, deren Wirkung wir messen. Und die Frage nach dem Grund der Existenz ist keine Frage innerhalb der Physik, sondern über sie.`,
          followUps: [
            {
              id: 'quanten-sind-ursachenlos',
              objection: `Außerdem zeigt die Quantenmechanik ohnehin, dass Ereignisse ohne Ursache geschehen – radioaktiver Zerfall zum Beispiel.`,
              objectionBy: 'Victor Stenger',
              answer: `Quantenereignisse sind nur statistisch vorhersagbar, nicht ursachenlos: Ein Atomkern zerfällt nur, weil es den Kern, die Felder und die Gesetze gibt. Und ob die Quantenmechanik überhaupt indeterministisch ist, hängt von der Interpretation ab – Sean Carroll selbst vertritt die vollständig deterministische Viele-Welten-Deutung.`,
              detail: `Ausführlich im Claim „Die Quantenmechanik zeigt Ereignisse ohne Ursache".`,
            },
          ],
        },
      ],
    },
    {
      id: 'warum-nicht-physikalische-ursache',
      objection: `Selbst wenn das Universum eine Ursache bräuchte: Warum gleich Gott? Es könnte eine unbekannte physikalische Ursache sein, die wir eines Tages finden.`,
      objectionBy: 'Victor Stenger / Lawrence Krauss',
      answer: `Eine Ursache aller physikalischen Wirklichkeit – Raum, Zeit, Materie, Energie und Gesetze – kann nicht selbst Teil dieser Wirklichkeit sein. Sie muss jenseits von Raum und Zeit, nicht-materiell und ungeheuer mächtig sein. Das ist kein Lückenschluss, sondern folgt aus der Rolle, die sie spielt. Und eine Ursache, die aus Freiheit wählt, ein Universum hervorzubringen, nennen wir personal.`,
      detail: `Wer eine „physikalische Ursache des Physikalischen" sucht, sucht in Wahrheit ein größeres physikalisches System (Multiversum, Mutteruniversum) – und dann stellt sich dieselbe Frage erneut. Wie man von hier zum christlichen Gott kommt (und warum nicht nur zu einem Deisten-Gott), ist Gegenstand eigener Claims im Themenblock Gottesbeweise.`,
      questionsBack: [`Wie soll eine Ursache von Raum und Zeit selbst räumlich und zeitlich sein?`],
      followUps: [
        {
          id: 'gott-der-luecken-kosmologie',
          objection: `Das ist klassischer „Gott der Lücken": Wo du nicht weiterweißt, setzt du Gott ein.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Ein Lückenbüßer-Argument lautet: „Wir wissen nicht, wie X entstand, also war es Gott." Mein Argument lautet: „Wir wissen etwas über die Eigenschaften, die jede Ursache des Universums haben muss – und diese passen auf Gott." Das ist ein Schluss aus Wissen, nicht aus Unwissen.`,
          detail: `Vergleich: Ein Archäologe, der aus einer beschrifteten Tontafel auf einen Schreiber schließt, füllt keine Lücke, sondern zieht einen Schluss aus positiven Merkmalen. Siehe auch den Claim „Gott ist nur ein Lückenbüßer".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hat dein „Nichts" Eigenschaften, Energie oder Gesetze? Wenn ja – warum nennst du es Nichts?`,
    `Wo existieren die Naturgesetze, bevor es ein Universum gibt?`,
    `Wenn Gesetze nur Beschreibungen sind – wie können sie etwas erschaffen?`,
    `Ist „Das Universum ist einfach da" eine wissenschaftliche Erkenntnis oder eine philosophische Entscheidung?`,
    `Welche physikalische Entdeckung könnte grundsätzlich erklären, warum es überhaupt Physik gibt?`,
  ],
  avoid: [
    `„Der Urknall beweist Gott." – Der Urknall beweist einen heißen, dichten frühen Zustand. Für einen absoluten Anfang sprechen gute, aber nicht zwingende Gründe. Argumentiere sauber mit Wahrscheinlichkeiten und mit der Existenzfrage.`,
    `„Das Quantenvakuum verletzt den Energieerhaltungssatz." – Physikalisch falsch. Kritisiere nicht die Physik, sondern die philosophischen Schlussfolgerungen daraus.`,
    `„Hawking hat sich am Lebensende zu Gott bekehrt." – Dafür gibt es keinen Beleg. Hawking blieb bis zuletzt Atheist (vgl. *Brief Answers to the Big Questions*, 2018).`,
    `Die Physiker als dumm oder unehrlich hinstellen. Krauss und Hawking sind brillante Wissenschaftler; ihr Fehler liegt in der Philosophie, nicht in der Mathematik.`,
  ],
  concessions: [
    `Die physikalischen Modelle (Tryon, Vilenkin, Hartle–Hawking) sind ernsthafte Wissenschaft und nicht einfach Unsinn. Es ist legitim und spannend, den frühesten Zustand des Universums physikalisch zu beschreiben.`,
    `Im Quantenvakuum entstehen tatsächlich virtuelle Teilchenpaare bzw. Feldfluktuationen; das ist experimentell gut belegt.`,
    `Die Schöpfung aus dem Nichts ist eine metaphysische, keine physikalische These. Kein Experiment kann sie direkt beweisen – aber auch keines widerlegen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God and Stephen Hawking: Whose Design Is It Anyway?', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Bentley Hart', work: 'The Experience of God', year: '2013', status: 'paraphrase' },
    { kind: 'gegner', author: 'Lawrence M. Krauss', work: 'A Universe from Nothing', year: '2012', status: 'paraphrase', note: 'Die Gegenposition im Original lesen.' },
    { kind: 'fachliteratur', author: 'David Albert', work: '„On the Origin of Everything", New York Times Book Review', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Krauss', 'Hawking', 'Quantenvakuum', 'creatio ex nihilo', 'Naturgesetze', 'Urknall'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'atheismus/wer-schuf-gott',
    'naturalismus/lueckenbuesser-gott',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'kosmologie/hawking-keine-grenze',
    'kosmologie/vor-dem-urknall-sinnlos',
    'feinabstimmung/multiversum',
    'physik/quanten-ohne-ursache',
    'physik/naturgesetze-erklaeren-sich-selbst',
  ],
};

export default claim;
