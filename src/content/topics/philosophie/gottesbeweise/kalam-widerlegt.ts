import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kalam-widerlegt',
  title: `„Das kosmologische Kalam-Argument ist widerlegt."`,
  proponents: [
    { name: 'Sean Carroll', role: 'Theoretischer Physiker, Caltech (heute Johns Hopkins University)', work: 'Debatte mit W. L. Craig „God and Cosmology" (New Orleans, 2014); The Big Picture (2016)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006), Kap. 3; Philosophical Perspectives on Infinity (2006)' },
    { name: 'Lawrence Krauss', role: 'Theoretischer Physiker und Kosmologe', work: 'A Universe from Nothing (2012)' },
    { name: 'Wes Morriston', role: 'Religionsphilosoph, University of Colorado Boulder', work: '„Must the Beginning of the Universe Have a Personal Cause?", Faith and Philosophy 17 (2000)' },
    { name: 'Adolf Grünbaum', role: 'Wissenschaftsphilosoph, University of Pittsburgh', work: '„The Pseudo-Problem of Creation in Physical Cosmology", Philosophy of Science 56 (1989)' },
  ],
  steelman: `Das Kalam-Argument wirkt nur auf den ersten Blick zwingend. Seine erste Prämisse – „Alles, was zu existieren beginnt, hat eine Ursache" – stammt aus unserer Alltagserfahrung mit Dingen *innerhalb* des Universums; ob sie auf das Universum als Ganzes anwendbar ist, ist völlig offen. Die Quantenmechanik kennt Ereignisse ohne determinierende Ursache, und die fundamentale Physik, so Sean Carroll, spricht gar nicht von „Ursachen", sondern von Gesetzen, die Zustände verbinden: Das Universum „kann einfach sein". Die zweite Prämisse – „Das Universum hat zu existieren begonnen" – stützt sich auf das Borde-Guth-Vilenkin-Theorem, das aber nur für klassische Raumzeiten gilt; über die Quantengravitation wissen wir fast nichts, und es gibt Modelle ohne absoluten Anfang. Sogar Alan Guth, Mitautor des Theorems, hält das Universum für wahrscheinlich ewig. Die philosophischen Argumente gegen eine unendliche Vergangenheit verwechseln Seltsamkeit mit Widersprüchlichkeit; die Mengenlehre zeigt, dass das aktual Unendliche widerspruchsfrei ist. Nach der B-Theorie der Zeit „entsteht" ohnehin nichts. Und selbst wenn das Universum eine Ursache hätte, ist der Sprung zu einem zeitlosen, personalen Gott reine Spekulation.`,
  biblical: {
    summary: `Die Bibel beginnt mit einem Anfang: „Am Anfang schuf Gott Himmel und Erde" (Gen 1,1). Sie unterscheidet scharf zwischen dem ewigen Gott und der Welt, die geworden ist (Ps 90,2; Joh 1,1–3), und lehrt die Schöpfung aus dem Nichts (Hebr 11,3; Röm 4,17; 2 Makk 7,28). Psalm 102 sagt sogar, dass Himmel und Erde „veralten wie ein Gewand" – während Gott bleibt. Das Kalam-Argument bestätigt mit den Mitteln von Philosophie und Kosmologie, was die Schrift seit jeher bekennt.`,
    detail: `- **Gen 1,1:** *Bereschit bara Elohim* – das Verb *bara* wird im AT ausschließlich mit Gott als Subjekt gebraucht. Ob Gen 1,1 grammatisch einen absoluten Anfang meint, ist unter Exegeten diskutiert; die jüdische und christliche Auslegung hat es überwiegend so gelesen, und Joh 1,1–3 setzt es voraus.
- **Hebr 11,3:** „aus nichts geworden" – die Welt ist nicht aus vorhandenem Stoff geformt.
- **2 Makk 7,28** (deuterokanonisch, in der koptischen Bibel kanonisch): Die Mutter der sieben Brüder sagt, Gott habe Himmel und Erde „aus dem Nichtseienden" gemacht – eines der frühesten ausdrücklichen Zeugnisse der *creatio ex nihilo*.
- **Ps 102,26–28:** Die Welt altert, Gott bleibt – eine dichterische Aussage, die erstaunlich gut zum zweiten Hauptsatz der Thermodynamik passt (ohne dass man den Psalm als Physiklehrbuch lesen sollte).
- **Vorsicht:** Die Bibel lehrt keinen bestimmten kosmologischen Mechanismus. Das Argument steht und fällt mit Philosophie und Physik, nicht mit einer bestimmten Auslegung von Gen 1.`,
    sources: [
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, original: 'בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '4,17', quote: `… vor Gott, dem du geglaubt hast, der da lebendig macht die Toten und rufet dem, das nicht ist, daß es sei.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '102,26–28', quote: `Du hast vorhin die Erde gegründet, und die Himmel sind deiner Hände Werk. Sie werden vergehen, aber du bleibst. Sie werden alle veralten wie ein Gewand; sie werden verwandelt wie ein Kleid, wenn du sie verwandeln wirst. Du aber bleibst, wie du bist, und deine Jahre nehmen kein Ende.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,28', quote: `Sieh Himmel und Erde an und alles, was darin ist, und erkenne, dass Gott dies alles aus dem Nichts gemacht hat und dass auch das Menschengeschlecht so entstanden ist.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt Gott als „Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren" und lehrt die Schöpfung aus dem Nichts. Der hl. Basilius warnte in seinen Predigten über das Sechstagewerk davor, aus der Kreisbewegung der Himmelskörper auf eine anfangslose Welt zu schließen. Und in Alexandrien entwickelte im 6. Jahrhundert der miaphysitische Philosoph Johannes Philoponos als einer der Ersten das philosophische Herzstück des Kalam-Arguments: Eine unendliche Reihe vergangener Ereignisse hätte nie durchlaufen werden können. Über die arabische Philosophie (al-Kindi, al-Ghazali) gelangte der Gedanke ins Mittelalter und zu William Lane Craig.`,
    detail: `Der Name „Kalam" stammt aus der islamischen scholastischen Theologie (*ʿilm al-kalām*), deren Vertreter wie al-Ghazali (gest. 1111) das Argument gegen die aristotelische Lehre von der Ewigkeit der Welt verwendeten. Historisch liegen seine Wurzeln jedoch im christlichen Alexandrien: Philoponos' Schrift „Gegen Proklos über die Ewigkeit der Welt" (529) ist der Ausgangspunkt der Debatte. Athanasius hatte schon früher betont, dass die Welt „aus dem Nichts" ins Dasein gerufen wurde und ohne den Logos ins Nichts zurückfiele (De Incarnatione 3–4).`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'I,3', status: 'paraphrase', quote: 'Man soll nicht meinen, die Welt sei ohne Anfang, nur weil die Himmelskörper sich im Kreis bewegen und kein Anfangspunkt sichtbar ist.' },
      { kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'Gegen Proklos über die Ewigkeit der Welt (De aeternitate mundi contra Proclum)', year: '529', status: 'paraphrase', quote: 'Wäre die Welt ewig, so wäre eine unendliche Zahl von Ereignissen bereits durchlaufen worden – das Unendliche aber lässt sich nicht durchschreiten.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '3', status: 'paraphrase', quote: 'Gott hat alles aus dem Nichts ins Dasein gerufen, nicht aus vorhandener Materie.' },
    ],
  },
  opposingView: {
    summary: `Stand der Kosmologie: Das Universum hat sich vor etwa 13,8 Milliarden Jahren aus einem extrem heißen, dichten Zustand entwickelt (Urknallmodell) – das ist Konsens. Ob dieser Zustand ein absoluter Anfang war, ist offen, weil die bekannte Physik an der Planck-Grenze versagt. Das Borde-Guth-Vilenkin-Theorem (2003) zeigt, dass jede Raumzeit, die im Mittel expandiert, in Vergangenheitsrichtung unvollständig ist – also einen Rand hat. Strittig ist, ob Quantengravitation diesen Rand vermeiden kann. Alexander Vilenkin selbst hält einen Anfang für sehr wahrscheinlich; Sean Carroll und Alan Guth neigen zu einem ewigen Universum. Philosophisch gehört das Kalam-Argument zu den meistdiskutierten Argumenten der Gegenwart; es wird in Fachzeitschriften sowohl angegriffen als auch verteidigt.`,
    detail: `- **BGV-Theorem:** Die Voraussetzung ist eine im Durchschnitt positive Expansionsrate entlang vergangener Weltlinien; die Autoren betonen, dass keine Energiebedingungen benötigt werden. Kritiker wenden ein, dass die klassische Raumzeitbeschreibung nahe dem Rand nicht mehr gilt.
- **Modelle ohne Anfang:** Vorgeschlagen wurden u. a. zyklische Modelle, emergente Modelle (statischer Anfangszustand), das Carroll-Chen-Modell (Zeitrichtung umgekehrt „vor" einem Minimum) und Quantenkosmologien. Jedes hat bekannte Schwierigkeiten (Entropiezunahme, Instabilität, Feinabstimmung des Anfangszustands); keines ist etabliert.
- **Mithani & Vilenkin (2012)** kommen in „Did the universe have a beginning?" zu dem Schluss: „wahrscheinlich ja". Carroll antwortete, er neige zu „wahrscheinlich nein", aber niemand wisse es sicher.
- **Philosophische Debatte:** Gegen die Unmöglichkeit einer unendlichen Vergangenheit argumentieren u. a. Oppy, Morriston und Alex Malpass; dafür u. a. Craig, Koons und Pruss (Kausalfinitismus).
- **Ehrlich:** „Widerlegt" ist das Argument nicht – aber auch nicht unumstritten. Wer es verwendet, sollte die Debatte kennen.`,
    sources: [
      { kind: 'wissenschaft', author: 'Arvind Borde, Alan H. Guth & Alexander Vilenkin', work: '„Inflationary Spacetimes Are Incomplete in Past Directions", Physical Review Letters 90', year: '2003', ref: '151301', status: 'paraphrase', quote: 'Eine Raumzeit, deren mittlere Expansionsrate entlang vergangener Geodäten positiv ist, ist in Vergangenheitsrichtung unvollständig.', url: 'https://doi.org/10.1103/PhysRevLett.90.151301' },
      { kind: 'wissenschaft', author: 'Alexander Vilenkin', work: 'Many Worlds in One: The Search for Other Universes', year: '2006', ref: 'S. 176', quote: `With the proof now in place, cosmologists can no longer hide behind the possibility of a past-eternal universe. There is no escape: they have to face the problem of a cosmic beginning.`, status: 'verbatim', note: 'Vilenkin ist kein Theist; er hält eine naturwissenschaftliche Erklärung des Anfangs (Quantentunneln „aus dem Nichts") für möglich.' },
      { kind: 'wissenschaft', author: 'Audrey Mithani & Alexander Vilenkin', work: '„Did the universe have a beginning?" (arXiv-Preprint)', year: '2012', status: 'paraphrase', quote: 'Antwort der Autoren: wahrscheinlich ja.' },
      { kind: 'gegner', author: 'Sean Carroll', work: 'Debatte mit W. L. Craig „God and Cosmology" und nachfolgende Blogbeiträge', year: '2014', status: 'paraphrase', quote: 'Das BGV-Theorem betrifft klassische Raumzeiten; ewige Quantenkosmologien sind leicht vorstellbar; „wahrscheinlich nein", aber niemand weiß es.' },
    ],
  },
  quickAnswer: `Das Kalam-Argument lautet: (1) Alles, was zu existieren beginnt, hat eine Ursache. (2) Das Universum hat zu existieren begonnen. (3) Also hat das Universum eine Ursache. Prämisse 1 ist der Grundsatz „Aus nichts wird nichts", den jede Wissenschaft voraussetzt. Prämisse 2 stützen Philosophie (eine unendliche Vergangenheit kann nicht durchlaufen werden) und Physik (das Borde-Guth-Vilenkin-Theorem: Ein im Mittel expandierendes Universum hat einen Anfang – Vilenkin sagt: „There is no escape"). Die Ursache von Raum, Zeit und Materie muss zeitlos, raumlos, immateriell, ungeheuer mächtig und personal sein. Es gibt ernsthafte Einwände – aber „widerlegt" ist das Argument nicht; es gehört zu den meistverteidigten der heutigen Philosophie.`,
  keyPoints: [
    `**Prämisse 1 ist fundamental:** Wenn Dinge ohne Ursache aus dem Nichts entstehen könnten, wäre unverständlich, warum das nicht ständig und überall geschieht. Quantenereignisse geschehen nicht aus dem Nichts, sondern in einem Quantenvakuum mit Gesetzen und Energie.`,
    `**Prämisse 2 – philosophisch:** Eine aktual unendliche Reihe vergangener Ereignisse hätte nie bis heute durchlaufen werden können. Hilberts Hotel und das Grim-Reaper-Paradox zeigen die Absurditäten eines konkreten Unendlichen.`,
    `**Prämisse 2 – physikalisch:** Das BGV-Theorem (Physical Review Letters 2003) zeigt, dass jedes Universum, das im Mittel expandiert, einen Anfang hat – auch ein inflationäres Multiversum. Der zweite Hauptsatz der Thermodynamik weist in dieselbe Richtung.`,
    `**Die Ursache:** Was Raum, Zeit und Materie hervorbringt, kann selbst nicht räumlich, zeitlich oder materiell sein. Zeitlose, immaterielle Dinge sind entweder abstrakte Objekte (die nichts bewirken) oder ein Geist – also ist die Ursache personal.`,
    `**Ehrlichkeit:** Die Kosmologie jenseits der Planck-Zeit ist offen, und die Zeitphilosophie spielt eine Rolle. Darum ist das Kontingenzargument eine wichtige Ergänzung: Es funktioniert auch bei einem ewigen Universum.`,
    `**Wurzeln in Alexandrien:** Das philosophische Kernargument geht auf den alexandrinischen Christen Johannes Philoponos (529) zurück.`,
  ],
  argument: {
    name: 'Das kosmologische Kalam-Argument',
    summary: 'Was zu existieren beginnt, hat eine Ursache; das Universum hat begonnen; also hat es eine Ursache – und diese muss Gott sein.',
    premises: [
      {
        text: 'P1: Alles, was zu existieren beginnt, hat eine Ursache seiner Existenz.',
        support: `Das ist eine metaphysische Grundintuition (*ex nihilo nihil fit*), die durch ausnahmslose Erfahrung bestätigt wird. Ihre Verneinung führt zu Absurditäten: Wenn etwas aus absolut nichts entstehen könnte, warum dann ein Universum und nicht auch ein Pferd oder Bier? „Nichts" hat keine Eigenschaften, die irgendetwas auswählen oder einschränken könnten. Auch die Quantenphysik widerspricht dem nicht: Virtuelle Teilchen entstehen in einem Vakuum voller Energie, das von Gesetzen bestimmt ist.`,
        sources: [
          { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", in: Craig & Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase', quote: 'Ausführliche Verteidigung beider Prämissen gegen die Einwände der Fachliteratur.' },
        ],
      },
      {
        text: 'P2: Das Universum hat zu existieren begonnen.',
        support: `**Philosophisch:** (a) Eine aktual unendliche Menge konkreter Dinge führt zu Widersprüchen (Hilberts Hotel: Wenn alle Gäste mit ungerader Zimmernummer abreisen, sind unendlich viele gegangen und unendlich viele geblieben; wenn alle ab Zimmer 4 abreisen, bleiben drei – dieselbe Operation liefert widersprüchliche Ergebnisse). (b) Eine Reihe, die durch sukzessives Hinzufügen entsteht, kann nie aktual unendlich werden; man kann nicht von minus unendlich bis heute zählen. **Physikalisch:** (c) Das BGV-Theorem zeigt, dass jede Raumzeit mit mittlerer positiver Expansion einen Vergangenheitsrand hat. (d) Ein ewiges Universum hätte nach dem zweiten Hauptsatz längst den thermodynamischen Gleichgewichtszustand erreicht.`,
        sources: [
          { kind: 'wissenschaft', author: 'Borde, Guth & Vilenkin', work: 'Physical Review Letters 90, 151301', year: '2003', status: 'paraphrase', quote: 'Inflationäre Raumzeiten sind in Vergangenheitsrichtung unvollständig.' },
          { kind: 'fachliteratur', author: 'David Hilbert', work: '„Über das Unendliche", Mathematische Annalen 95', year: '1926', quote: `Das Unendliche findet sich nirgends realisiert; es ist weder in der Natur vorhanden, noch als Grundlage in unserem verstandesmäßigen Denken zulässig.`, status: 'paraphrase', note: 'Häufig zitierte Passage; Wortlaut vor wörtlicher Verwendung am Original prüfen.' },
        ],
      },
    ],
    inferences: [
      'C1: Also hat das Universum eine Ursache seiner Existenz.',
      'Begriffsanalyse: Da die Ursache Raum, Zeit und Materie hervorbringt, ist sie selbst ohne Anfang, zeitlos (ohne die Schöpfung), raumlos, immateriell und ungeheuer mächtig.',
      'Eine zeitlose, immaterielle Ursache ist entweder ein abstraktes Objekt (z. B. eine Zahl) oder ein Geist. Abstrakte Objekte bewirken nichts. Also ist die Ursache ein Geist.',
      'Eine zeitlose Ursache, die eine zeitliche Wirkung hervorbringt, ist am besten als freier Wille zu verstehen, der wählt, die Welt zu erschaffen.',
    ],
    conclusion: 'Also existiert ein ungeschaffener, personaler Schöpfer des Universums, der ohne Anfang, zeitlos, raumlos, immateriell und ungeheuer mächtig ist.',
  },
  voices: [
    {
      person: 'craig',
      role: 'als Erneuerer des Kalam-Arguments',
      text: `Craig hat das Argument 1979 in seiner Dissertation wiederbelebt und seither gegen nahezu alle bedeutenden Kritiker verteidigt. Seine Strategie: Jede Prämisse muss nur plausibler sein als ihre Verneinung. Prämisse 1 sei plausibler als die Behauptung, Dinge könnten ohne Ursache aus dem Nichts entstehen; Prämisse 2 werde sowohl durch philosophische Argumente gegen das aktual Unendliche als auch durch die Kosmologie gestützt. In der Debatte mit Sean Carroll (2014) formulierte er sein Argument bewusst so, dass es nicht von der klassischen Raumzeit abhängt: Auch Quantenmodelle ohne Anfang hätten entweder einen Anfang ihres expandierenden Teils oder unlösbare Probleme (Entropie, Instabilität).`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'The Kalam Cosmological Argument', year: '1979', status: 'paraphrase', quote: 'Grundlegende Monografie zu Geschichte und Verteidigung des Arguments.' },
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', ref: 'Kap. 3', status: 'paraphrase', quote: 'Allgemeinverständliche Darstellung mit Antwort auf Einwände.' },
      ],
    },
    {
      person: 'johannes-philoponos',
      role: 'als alexandrinischer Naturphilosoph',
      text: `Philoponos widersprach im Jahr 529 dem Neuplatoniker Proklos und der aristotelischen Lehre von der Ewigkeit der Welt. Sein Kernargument: Wäre die Welt ohne Anfang, so wäre bis heute eine unendliche Zahl von Generationen und Ereignissen bereits durchlaufen worden – das Unendliche lasse sich aber nicht durchschreiten und auch nicht vermehren. Da jeder neue Tag die Zahl der vergangenen Tage vergrößert, müsste das Unendliche größer werden, was absurd sei. Damit begründete Philoponos philosophisch, was die Kirche aus der Schrift bekannte: Die Welt hat einen Anfang.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'Gegen Proklos über die Ewigkeit der Welt', year: '529', status: 'paraphrase', quote: 'Eine unendliche Reihe kann nicht durchlaufen und nicht vergrößert werden; also kann die Vergangenheit nicht unendlich sein.' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Prediger über die Schöpfung',
      text: `Basilius beginnt seine Predigten über das Sechstagewerk mit dem Hinweis, dass schon das erste Wort der Bibel – „Im Anfang" – den Irrtum ausschließt, die Welt sei ewig und von selbst entstanden. Er greift die Philosophen an, die aus der scheinbar endlosen Kreisbewegung der Gestirne auf eine anfangslose Welt schlossen: Dass wir an einem Kreis keinen Anfangspunkt sehen, heiße nicht, dass er keinen Anfang habe. Was einen Anfang hat, so Basilius, wird auch ein Ende haben – die Welt ist ein Werk, kein Gott.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'I,2–3', status: 'paraphrase', quote: 'Gegen die Lehre von einer anfangslosen Welt; was begonnen hat, wird auch enden.' },
      ],
    },
    {
      person: 'robert-koons',
      role: 'als Metaphysiker',
      text: `Koons hat das Argument mit dem „Grim-Reaper"-Paradox (ursprünglich von José Benardete) gestärkt: Man stelle sich unendlich viele Sensenmänner vor, von denen jeder einen Menschen tötet, falls er noch lebt – der letzte um 13 Uhr, der vorletzte um 12:30, der davor um 12:15 und so fort. Dann ist logisch sicher, dass der Mensch um 13 Uhr tot ist, aber kein einzelner Sensenmann kann ihn getötet haben. Koons argumentiert, dass die beste Erklärung solcher Paradoxien der „Kausalfinitismus" ist: Nichts kann unendlich viele Ursachen in seiner Vorgeschichte haben. Daraus folgt, dass die Kette der Ursachen in der Vergangenheit endlich ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Robert C. Koons', work: '„A New Kalam Argument: Revenge of the Grim Reaper", Noûs 48', year: '2014', status: 'paraphrase', quote: 'Grim-Reaper-Paradoxien sprechen für die Endlichkeit der kausalen Vergangenheit.' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer zeichnet in „Return of the God Hypothesis" nach, wie die Kosmologie des 20. Jahrhunderts – von Einsteins Gleichungen über Hubbles Beobachtungen und die Hintergrundstrahlung bis zu den Singularitätstheoremen von Hawking und Penrose und dem BGV-Theorem – die Vorstellung eines ewigen, statischen Universums verdrängt hat. Er betont, dass viele Physiker diesen Befund ausdrücklich als weltanschaulich unbequem empfanden. Für Meyer ist ein Anfang des Universums ein Befund, der unter dem Theismus erwartet wird, unter dem Naturalismus dagegen überrascht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Return of the God Hypothesis', year: '2021', ref: 'Teil I', status: 'paraphrase', quote: 'Kosmologische Belege für einen Anfang des Universums und ihre weltanschauliche Bedeutung.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'quanten-ohne-ursache',
      objection: `„Prämisse 1 ist falsch. In der Quantenmechanik geschehen Ereignisse ohne Ursache – etwa der radioaktive Zerfall oder virtuelle Teilchen, die aus dem Vakuum auftauchen."`,
      objectionBy: 'Lawrence Krauss / Sean Carroll',
      targetsPremise: 1,
      answer: `Indeterministisch heißt nicht unverursacht. Ein Atomkern zerfällt nicht aus dem Nichts, sondern weil er existiert, instabil ist und Naturgesetzen unterliegt – nur der genaue Zeitpunkt ist nicht vorherbestimmt. Virtuelle Teilchen entstehen nicht aus dem Nichts, sondern aus einem Quantenvakuum, das Energie, Struktur und Gesetze hat. Und es gibt deterministische Deutungen der Quantenmechanik (etwa die von David Bohm), die empirisch gleichwertig sind. Die Quantenphysik zeigt also nicht, dass Dinge ohne Ursache *zu existieren beginnen*.`,
      questionsBack: [`Ist das Quantenvakuum für dich „nichts" – oder etwas mit Energie und Gesetzen?`],
      followUps: [
        {
          id: 'kein-zureichender-grund-zerfall',
          objection: `„Aber du kannst nicht sagen, *warum* das Atom genau jetzt zerfällt. Es gibt keine hinreichende Ursache. Damit ist deine Prämisse zumindest nicht universell."`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 1,
          answer: `Prämisse 1 verlangt keine deterministische Ursache, die den genauen Zeitpunkt festlegt, sondern eine Ursache der *Existenz* von etwas. Beim Zerfall existiert der Kern vorher, die Zerfallsprodukte stammen aus ihm, und die Wahrscheinlichkeit ist durch Gesetze festgelegt. Die Frage „Warum jetzt?" ist eine andere als „Warum überhaupt etwas?" Beim Anfang des Universums gibt es aber gar nichts vorher – weder Kern noch Vakuum noch Gesetz.`,
          detail: `Siehe „Die Quantenmechanik zeigt Ereignisse ohne Ursache".`,
          followUps: [
            {
              id: 'krauss-aus-dem-nichts',
              objection: `„Lawrence Krauss hat gezeigt, wie ein Universum aus dem Nichts entstehen kann – durch Quantenfluktuationen. Ein Schöpfer ist überflüssig."`,
              objectionBy: 'Lawrence Krauss (A Universe from Nothing, 2012)',
              answer: `Krauss' „Nichts" ist ein Quantenvakuum oder ein Quantenfeld mit Gesetzen – also etwas. Der Wissenschaftsphilosoph David Albert (Columbia University), selbst kein Theist, hat das in seiner Rezension in der New York Times scharf kritisiert: Relativistische Quantenfeldtheorien seien nicht das Nichts, und Krauss beantworte die Frage, warum es überhaupt etwas gibt, gar nicht. Krauss hat das Problem umbenannt, nicht gelöst.`,
              sources: [
                { kind: 'fachliteratur', author: 'David Albert', work: '„On the Origin of Everything", New York Times Book Review (Rezension zu Krauss)', year: '2012', status: 'paraphrase', quote: 'Quantenfelder und ihre Gesetze sind nicht „nichts"; Krauss erklärt nicht, woher sie kommen.' },
              ],
              detail: `Siehe „Das Universum entstand aus dem Nichts – ohne Gott".`,
              followUps: [
                {
                  id: 'gesetze-notwendig',
                  objection: `„Dann sind eben die Quantengesetze das Letzte. Sie existieren notwendig, und aus ihnen folgt das Universum."`,
                  objectionBy: 'Lawrence Krauss / Max Tegmark (sinngemäß)',
                  answer: `Naturgesetze sind Beschreibungen dessen, wie sich existierende Dinge verhalten – sie sind keine Akteure, die etwas hervorbringen. Stephen Hawking stellte selbst die Frage, was den Gleichungen „Feuer einhaucht" und ein Universum schafft, das sie beschreiben können. Zudem scheinen unsere Gesetze und Konstanten nicht notwendig: Physiker behandeln sie als variierbare Parameter, und gerade ihre Feinabstimmung ist erklärungsbedürftig. Hier mündet das Gespräch ins Kontingenzargument.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Stephen Hawking', work: 'A Brief History of Time', year: '1988', ref: 'Kap. 11 (Schluss)', quote: `What is it that breathes fire into the equations and makes a universe for them to describe?`, status: 'verbatim' },
                  ],
                  questionsBack: [`Kann eine mathematische Gleichung etwas verursachen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kausalitaet-nur-im-universum',
      objection: `„Kausalität ist ein Begriff, der nur *innerhalb* des Universums gilt. Ursachen setzen Zeit voraus – und ‚vor' dem Urknall gab es keine Zeit. Also ist die Frage nach einer Ursache des Universums sinnlos."`,
      objectionBy: 'Adolf Grünbaum / Sean Carroll',
      targetsPremise: 1,
      answer: `Prämisse 1 ist kein physikalisches Gesetz, das nur in der Raumzeit gilt, sondern ein metaphysischer Grundsatz über das Werden überhaupt: Aus nichts wird nichts. Wenn er am Anfang des Universums nicht gälte, wäre unverständlich, warum er sonst ausnahmslos gilt. Und Ursachen müssen ihren Wirkungen nicht zeitlich vorausgehen – sie können gleichzeitig sein, wie eine Kugel, die auf einem Kissen liegt und die Mulde verursacht. Die Ursache des Universums geht ihm *ursächlich*, nicht zeitlich voraus.`,
      followUps: [
        {
          id: 'carroll-keine-ursachen',
          objection: `„In der fundamentalen Physik gibt es gar keine ‚Ursachen' – nur Gesetze, die Zustände miteinander verbinden. Die Frage nach der Ursache ist ein Überbleibsel aristotelischen Denkens."`,
          objectionBy: 'Sean Carroll (Debatte 2014; The Big Picture)',
          targetsPremise: 1,
          answer: `Dass die Gleichungen der Physik das Wort „Ursache" nicht enthalten, entscheidet keine metaphysische Frage. Die Physik beschreibt, *wie* sich Zustände entwickeln; sie setzt voraus, dass es Zustände gibt. Jedes Experiment beruht auf Ursache-Wirkungs-Denken: Ich verändere etwas, um zu sehen, was es bewirkt. Wenn es keine Ursachen gäbe, gäbe es auch keine Erklärungen – auch nicht für die Physik selbst.`,
          followUps: [
            {
              id: 'universum-kann-einfach-sein',
              objection: `„Das Universum kann einfach *sein*, ohne Erklärung. Nicht jede Frage hat eine Antwort."`,
              objectionBy: 'Sean Carroll',
              answer: `Logisch ist das denkbar – aber es ist ein Verzicht auf Erklärung an genau der Stelle, an der sie am meisten gebraucht wird. Wir würden das bei keinem anderen Ding akzeptieren: Ein Auto, eine Zelle oder ein Stern, die „einfach da sind", würde kein Wissenschaftler hinnehmen. Warum sollte ausgerechnet das Größte und Feinste – das ganze Universum mit seinen fein abgestimmten Gesetzen – ohne Grund existieren? Russell sagte 1948: „Das Universum ist einfach da, und das ist alles." Das ist ehrlich, aber keine Widerlegung.`,
              detail: `Siehe „Das Kontingenzargument ist ein Trugschluss – das Universum ist einfach da".`,
              questionsBack: [`Wenn das Universum einfach sein kann, warum dann nicht auch ein Pferd, das einfach so in deinem Wohnzimmer auftaucht?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kompositionsfehlschluss',
      objection: `„Das ist ein Kompositionsfehlschluss: Weil alles *im* Universum eine Ursache hat, schließt du, dass das Universum *als Ganzes* eine braucht. Jeder Mensch hat eine Mutter, aber die Menschheit hat keine Mutter."`,
      objectionBy: 'Bertrand Russell (Debatte mit Copleston 1948, sinngemäß) / Graham Oppy',
      targetsPremise: 1,
      answer: `Das Kalam-Argument schließt gar nicht von den Teilen auf das Ganze. Prämisse 1 gilt für *alles*, was zu existieren beginnt – und das Universum ist selbst etwas, das (nach Prämisse 2) zu existieren begonnen hat. Es fällt also direkt unter die Prämisse, nicht über den Umweg seiner Teile. Zudem ist nicht jeder Schluss vom Teil aufs Ganze falsch: Eine Mauer aus roten Ziegeln ist rot.`,
      followUps: [
        {
          id: 'universum-kein-ding',
          objection: `„Das Universum ist kein Ding, sondern einfach die Gesamtheit aller Dinge. Für eine Gesamtheit braucht es keine eigene Ursache."`,
          objectionBy: 'Graham Oppy',
          answer: `Wenn die Gesamtheit nichts anderes ist als ihre Teile, und alle Teile – Raum, Zeit, Materie, Energie – einen gemeinsamen Anfang haben, dann hat auch die Gesamtheit einen Anfang. Eine Raumzeit mit einem Vergangenheitsrand ist im Übrigen sehr wohl ein einheitliches physikalisches Objekt, das die Kosmologie als Ganzes beschreibt. Der Einwand verschiebt das Problem, statt es zu lösen.`,
        },
      ],
    },
    {
      id: 'bgv-nur-klassisch',
      objection: `„Das BGV-Theorem gilt nur für klassische Raumzeiten. Nahe am Urknall braucht man Quantengravitation, und die kennen wir nicht. Es gibt Modelle ohne Anfang – ich habe selbst eines vorgeschlagen."`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 2,
      answer: `Vilenkin, Mitautor des Theorems, sieht das anders: Mit dem Beweis könnten sich Kosmologen nicht länger hinter der Möglichkeit eines ewigen Universums verstecken – „there is no escape". Die vorgeschlagenen Modelle ohne Anfang haben jeweils bekannte Probleme: Zyklische Modelle häufen Entropie an, emergente Modelle sind instabil, und das Carroll-Chen-Modell verlegt den Anfang in einen Zustand, der selbst einen Rand der Zeitrichtung bildet. 2012 fragten Mithani und Vilenkin ausdrücklich: Hatte das Universum einen Anfang? Antwort: wahrscheinlich ja.`,
      followUps: [
        {
          id: 'guth-ewig',
          objection: `„Sogar Alan Guth, der Mitautor des Theorems, sagt, er vermute, dass das Universum ewig ist."`,
          objectionBy: 'Sean Carroll (Folie in der Debatte 2014)',
          targetsPremise: 2,
          answer: `Das ist eine persönliche Vermutung Guths, kein Ergebnis des Theorems – fair zugestanden, dass auch Fachleute hier uneins sind. Entscheidend ist, was die Mathematik zeigt: Jedes Universum, das im Mittel expandiert, ist in Vergangenheitsrichtung unvollständig. Wer einen Anfang vermeiden will, muss eine Phase *ohne* durchschnittliche Expansion annehmen – und dafür gibt es bisher kein überzeugendes, stabiles Modell. Vermutungen sind keine Daten.`,
          followUps: [
            {
              id: 'vorlaeufige-kosmologie',
              objection: `„Du baust deinen Gott auf eine vorläufige Kosmologie. Wenn sich die Physik ändert, fällt dein Argument."`,
              objectionBy: 'Graham Oppy',
              targetsPremise: 2,
              answer: `Erstens beruht Prämisse 2 auch auf philosophischen Argumenten, die von keinem physikalischen Modell abhängen. Zweitens: Wir müssen nach der besten verfügbaren Evidenz urteilen – das tut auch der Naturalist, wenn er sich auf das Multiversum beruft. Drittens hängt der christliche Schöpfungsglaube nicht an einem Modell: Die Kirche bekannte die Schöpfung aus dem Nichts, lange bevor es eine Urknalltheorie gab, als die Wissenschaft noch ein ewiges Universum annahm.`,
              followUps: [
                {
                  id: 'kalam-gott-der-luecken',
                  objection: `„Dann ist dein Argument ein Gott der Lücken: Wo die Physik nicht weiterweiß, setzt du Gott ein."`,
                  objectionBy: 'Lawrence Krauss',
                  answer: `Nein – das Argument stützt sich auf das, was wir *wissen* (dass das Universum nach allen verfügbaren Belegen einen Anfang hat), nicht auf das, was wir nicht wissen. Die Lücke liegt eher auf der anderen Seite: „Irgendein künftiges Modell wird den Anfang schon wegerklären" ist ein Versprechen ohne Deckung. Und ein Schöpfer des Universums ist keine Konkurrenz zur Physik, sondern beantwortet eine Frage, die die Physik prinzipiell nicht stellen kann: Warum gibt es überhaupt etwas, das sich physikalisch beschreiben lässt?`,
                  detail: `Siehe „Gott ist nur ein Lückenbüßer – die Wissenschaft schließt die Lücken".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hilberts-hotel-nur-seltsam',
      objection: `„Hilberts Hotel zeigt nur, dass das Unendliche seltsam ist, nicht dass es widersprüchlich ist. Cantors Mengenlehre ist widerspruchsfrei, und Physiker arbeiten ständig mit Unendlichkeiten."`,
      objectionBy: 'Graham Oppy',
      targetsPremise: 2,
      answer: `Mathematische Widerspruchsfreiheit heißt nicht, dass etwas in der Wirklichkeit existieren kann. Die Mengenlehre arbeitet in einem abstrakten Rahmen mit festgelegten Regeln; Hilbert selbst betonte, das Unendliche finde sich nirgends realisiert. Bei realen Gästen und Zimmern führt dieselbe Operation – „unendlich viele reisen ab" – je nach Auswahl zu unendlich vielen, drei oder null verbleibenden Gästen. In der Physik sind Unendlichkeiten übrigens meist ein Zeichen, dass ein Modell zusammenbricht, nicht eine Entdeckung.`,
      followUps: [
        {
          id: 'kein-durchlaufen-noetig',
          objection: `„Eine unendliche Vergangenheit muss nicht ‚durchlaufen' werden. Jedes vergangene Ereignis liegt nur endlich weit zurück – es gibt keinen Startpunkt, von dem aus man unendlich weit gehen müsste."`,
          objectionBy: 'J. L. Mackie (The Miracle of Theism, 1982) / Graham Oppy',
          targetsPremise: 2,
          answer: `Das gilt für jedes einzelne Ereignis, aber die *ganze* Reihe muss trotzdem vollständig abgelaufen sein, damit wir heute hier sind. Stell dir jemanden vor, der seit Ewigkeit rückwärts zählt und heute bei null ankommt: Warum gerade heute und nicht gestern? Er hätte seit Ewigkeit Zeit gehabt – zu jedem früheren Zeitpunkt hätte er schon fertig sein müssen. Das zeigt, dass die Bildung einer aktual unendlichen Reihe durch Hinzufügen Schritt für Schritt nicht gelingt.`,
          followUps: [
            {
              id: 'grim-reaper-beschraenkt',
              objection: `„Die Grim-Reaper-Paradoxien zeigen höchstens, dass bestimmte Anordnungen unmöglich sind – nicht, dass eine unendliche Vergangenheit unmöglich ist."`,
              objectionBy: 'Alex Malpass / Graham Oppy',
              targetsPremise: 2,
              answer: `Pruss und Koons argumentieren, dass all diese Paradoxien eine gemeinsame Wurzel haben: unendlich viele Ursachen, die zusammen etwas bewirken. Die einfachste Erklärung ist der Kausalfinitismus – nichts kann unendlich viele Ursachen in seiner Vorgeschichte haben. Wenn das stimmt, ist eine unendliche kausale Vergangenheit ausgeschlossen. Ehrlich gesagt: Das ist in der Fachphilosophie umstritten. Aber „umstritten" ist nicht „widerlegt" – und die Kritiker müssen jedes Paradox einzeln entschärfen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase', quote: 'Kausalfinitismus als einheitliche Lösung zahlreicher Paradoxien des Unendlichen.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'b-theorie-zeit',
      objection: `„Nach der Relativitätstheorie gibt es kein objektives Jetzt; alle Zeitpunkte sind gleich real (Blockuniversum, B-Theorie). Dann ‚entsteht' das Universum nicht, es hat nur einen zeitlichen Rand – wie ein Lineal, das bei null beginnt, ohne erschaffen zu werden."`,
      objectionBy: 'Adolf Grünbaum / Sean Carroll (sinngemäß)',
      targetsPremise: 1,
      answer: `Das ist ein ernster Einwand, und er zeigt, dass das Kalam-Argument eine dynamische (A-)Theorie der Zeit voraussetzt. Craig verteidigt sie ausführlich; die Relativitätstheorie ist mit einer A-Theorie empirisch vereinbar (etwa in neo-Lorentz'schen Deutungen). Vor allem aber: Selbst ein vierdimensionaler Block mit einem ersten Rand ist ein endliches, kontingentes Ganzes, das nicht aus sich selbst existiert. Dann greift das Kontingenzargument – der Block braucht einen Grund, warum er existiert und nicht vielmehr nichts.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'The Tensed Theory of Time (2000) und The Tenseless Theory of Time (2000)', status: 'paraphrase', quote: 'Verteidigung der A-Theorie und Kritik der B-Theorie der Zeit.' },
      ],
    },
    {
      id: 'warum-personal',
      objection: `„Selbst wenn das Universum eine Ursache hat: Warum sollte sie personal sein? Warum ausgerechnet Gott? Vielleicht ist es ein unpersönlicher Mechanismus, den wir noch nicht kennen."`,
      objectionBy: 'Wes Morriston',
      answer: `Die Ursache von Raum, Zeit und Materie kann selbst nicht räumlich, zeitlich oder materiell sein. Wir kennen nur zwei Arten zeitloser, immaterieller Dinge: abstrakte Objekte wie Zahlen – die bewirken aber nichts – und Geist. Zudem: Eine zeitlose Ursache, die mechanisch wirkt, müsste ihre Wirkung ebenfalls ewig haben. Dass aus einer zeitlosen Ursache eine Welt mit Anfang hervorgeht, versteht man am besten durch einen freien Willen, der wählt zu erschaffen.`,
      followUps: [
        {
          id: 'zeitloser-geist-inkohaerent',
          objection: `„Ein zeitloser Geist ist inkohärent. Denken, Wählen und Handeln sind Vorgänge, und Vorgänge brauchen Zeit."`,
          objectionBy: 'Wes Morriston / Graham Oppy',
          answer: `Menschliches Denken ist schrittweise, weil wir endlich sind; ein vollkommener Geist muss nicht nacheinander denken, sondern kann alles in einem Akt erkennen. Ein Entschluss muss kein zeitliches Abwägen sein. Craig vertritt zudem die Ansicht, dass Gott ohne die Schöpfung zeitlos und mit der Schöpfung zeitlich ist – andere christliche Philosophen deuten es anders. Hier gibt es offene Fragen innerhalb des Theismus, aber keinen Widerspruch, der das Argument zu Fall bringt.`,
          detail: `Zur weiteren Ableitung der göttlichen Eigenschaften siehe „Gottesbeweise beweisen höchstens einen Deisten-Gott".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn etwas aus absolut nichts entstehen kann – warum geschieht das dann nicht ständig?`,
    `Welches kosmologische Modell ohne Anfang hältst du für etabliert – und wie geht es mit der Entropie um?`,
    `Kann man von minus unendlich bis heute zählen? Warum wäre man gerade heute fertig geworden?`,
    `Was könnte Raum, Zeit und Materie verursachen, das selbst nicht räumlich, zeitlich und materiell ist – außer einem Geist?`,
    `Wäre ein Universum, das „einfach da ist", für dich eine Erklärung oder ein Verzicht auf Erklärung?`,
  ],
  avoid: [
    `„Die Wissenschaft hat bewiesen, dass Gott das Universum erschaffen hat." – Die Physik zeigt (wahrscheinlich) einen Anfang; dass die Ursache Gott ist, ist ein philosophischer Schluss.`,
    `„Der Urknall steht in Genesis 1." – Konkordistische Gleichsetzungen sind angreifbar und nicht nötig.`,
    `„Alles hat eine Ursache." – Dann kommt sofort „Wer schuf Gott?". Richtig: „Alles, was zu existieren *beginnt*."`,
    `Das BGV-Theorem als absoluten Beweis ausgeben und Vilenkin als Theisten darstellen – er ist es nicht.`,
  ],
  concessions: [
    `Die Physik nahe der Planck-Zeit ist unbekannt; ob es einen absoluten Anfang gab, ist kosmologisch nicht endgültig entschieden.`,
    `Das Argument setzt eine dynamische Theorie der Zeit voraus, die philosophisch umstritten ist.`,
    `Führende Kosmologen (Carroll, Guth) neigen zu einem ewigen Universum; die Fachwelt ist gespalten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", in: The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', year: '3. Aufl. 2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'Arguing about Gods', year: '2006', ref: 'Kap. 3', status: 'paraphrase' },
    { kind: 'sonstiges', work: 'Debatte William Lane Craig – Sean Carroll: „God and Cosmology" (Video und Transkript)', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Kalam', 'Kosmologie', 'Unendlichkeit', 'BGV-Theorem', 'Kausalität', 'Philoponos'],
  related: [
    'kosmologie/universum-aus-dem-nichts',
    'kosmologie/universum-ewig-zyklisch',
    'kosmologie/hawking-keine-grenze',
    'kosmologie/vor-dem-urknall-sinnlos',
    'physik/quanten-ohne-ursache',
    'mathematik/aktual-unendliche-vergangenheit',
    'gottesbeweise/kontingenz-trugschluss',
    'gottesbeweise/hoechstens-deismus',
    'atheismus/wer-schuf-gott',
    'naturalismus/lueckenbuesser-gott',
  ],
};

export default claim;
