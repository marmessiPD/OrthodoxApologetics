import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'universum-ewig-zyklisch',
  title: `„Das Universum ist ewig oder zyklisch (Big Bounce, Penrose)."`,
  proponents: [
    { name: 'Roger Penrose', role: 'Mathematischer Physiker, Oxford, Nobelpreis 2020', work: 'Cycles of Time (2010) – Konforme Zyklische Kosmologie (CCC)' },
    { name: 'Paul J. Steinhardt & Neil Turok', role: 'Kosmologen (Princeton bzw. Perimeter Institute/Edinburgh)', work: '„A Cyclic Model of the Universe", Science 296 (2002); Endless Universe (2007)' },
    { name: 'Martin Bojowald', role: 'Physiker, Penn State, Schleifenquantenkosmologie', work: 'Zurück vor den Urknall (2009)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'Carroll–Chen-Modell (2004); Debatte mit W. L. Craig (2014)' },
  ],
  steelman: `Der „Urknall" bezeichnet zunächst nur den Punkt, an dem unsere heutigen Gleichungen versagen – nicht notwendig den Anfang von allem. Es gibt eine Reihe respektabler Modelle ohne absoluten Anfang: Penroses Konforme Zyklische Kosmologie mit einer unendlichen Folge von „Äonen", das zyklische Modell von Steinhardt und Turok, den „Big Bounce" der Schleifenquantengravitation, in dem ein früheres kollabierendes Universum in unseres übergeht, und Carrolls Modell, in dem Baby-Universen aus einem ewigen Hintergrund entstehen. Das oft zitierte Borde-Guth-Vilenkin-Theorem gilt nur für klassische Raumzeiten; über die Quantengravitation sagt es nichts. Guth selbst hält das Universum für wahrscheinlich ewig. Wer also behauptet, „die Wissenschaft" habe einen Anfang bewiesen, überdehnt die Datenlage – und baut seinen Gottesglauben auf eine Lücke, die sich jederzeit schließen kann.`,
  biblical: {
    summary: `Die Bibel lehrt, dass die Welt einen Anfang hat und nicht ewig ist; ewig ist allein Gott (Ps 90,2). Sie beschreibt die Schöpfung zudem als etwas, das „veraltet wie ein Gewand" (Ps 102,26–27) – eine Aussage, die erstaunlich zum zweiten Hauptsatz der Thermodynamik passt, ohne dass man sie zur Physikvorhersage machen sollte. Bemerkenswert: Das zyklische Modell von Steinhardt und Turok heißt „ekpyrotisch" nach der stoischen *ekpyrosis*, dem periodischen Weltenbrand – also genau nach der antiken Kosmologie ewiger Wiederkehr, der die Kirchenväter die biblische Linie eines einmaligen Anfangs und eines Ziels entgegenstellten.`,
    detail: `- **Ps 90,2:** Ewigkeit wird Gott zugeschrieben, nicht der Welt.
- **Ps 102,26–28 / Hebr 1,10–12:** Himmel und Erde „vergehen" und „veralten" – Gott „bleibt".
- **Röm 8,20–22:** Die Schöpfung ist der „Vergänglichkeit" (*phthora*, Luther: „Eitelkeit") unterworfen und wartet auf Befreiung.
- **Gen 1,1:** Ein absoluter Anfang, kein Kreislauf.

Die Schrift verbietet nicht, dass Gott eine Abfolge von Weltphasen erschaffen könnte; aber eine **ewig aus sich selbst bestehende** Welt widerspricht ihr. Selbst ein physikalisch „ewiges" Universum bliebe nach christlicher Lehre geschaffen – in seinem Dasein abhängig von Gott.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '102,26–27', quote: `Du hast vorhin die Erde gegründet, und die Himmel sind deiner Hände Werk. Sie werden vergehen, aber du bleibst. Sie werden alle veralten wie ein Gewand …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,21–22', quote: `… auch die Kreatur frei werden wird vom Dienst des vergänglichen Wesens … Denn wir wissen, daß alle Kreatur sehnt sich mit uns und ängstet sich noch immerdar.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben sich ausdrücklich mit ewigen und zyklischen Kosmologien auseinandergesetzt. Der hl. Basilius eröffnet sein *Hexaemeron* mit der Feststellung, dass die Welt einen Anfang hat und daher auch ein Ende; Augustinus widerlegt im *Gottesstaat* die Lehre von den ewig wiederkehrenden Weltzeiten mit dem Hinweis, dass Christus „einmal" für unsere Sünden gestorben ist. In Alexandrien schrieb der miaphysitische Philosoph Johannes Philoponos 529 eine große Streitschrift gegen die Ewigkeit der Welt.`,
    detail: `- **Basilius, Hexaemeron I,3:** Weil die Welt einen Anfang hat, ist sie nicht ewig; die Philosophen, die sie für anfangslos halten, verwechseln Geschöpf und Schöpfer.
- **Augustinus, De civitate Dei XII,14 (vgl. XII,13):** Gegen die „Kreisläufe der Zeiten" – Christus starb ein für alle Mal (Röm 6,9); die Geschichte ist kein Kreis, sondern hat Ziel und Richtung.
- **Johannes Philoponos** (Alexandrien, 6. Jh.), *De aeternitate mundi contra Proclum*: Argumente gegen eine anfangslose Vergangenheit, die die spätere arabische Kalam-Tradition und die moderne Debatte prägten. Hinweis: Philoponos wurde wegen tritheistisch klingender Spekulationen später umstritten; als Philosoph ist er ein wichtiger Zeuge der alexandrinischen Tradition.
- **Origenes** spekulierte über aufeinanderfolgende Welten (*De Principiis* II,3); diese Spekulation hat die Kirche nicht übernommen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,3', year: 'ca. 370', quote: `Was einen Anfang in der Zeit hat, wird auch ein Ende haben; die Welt ist nicht ewig wie Gott.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XII,13–14', year: 'ca. 417', quote: `Gegen die Lehre von ewig wiederkehrenden Weltzeiten: Christus ist einmal für unsere Sünden gestorben und stirbt nicht mehr.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'De aeternitate mundi contra Proclum', year: '529', quote: `Eine anfangslose Welt würde eine tatsächlich durchlaufene unendliche Reihe voraussetzen; deshalb hat die Welt einen Anfang.`, status: 'paraphrase', note: 'Alexandrinischer, miaphysitischer Philosoph; wegen späterer trinitätstheologischer Spekulationen umstritten.' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Stand: Das Standardmodell (ΛCDM) beschreibt die Entwicklung seit einem heißen, dichten Zustand vor etwa 13,8 Milliarden Jahren. Ob davor etwas war, ist offen, weil eine Theorie der Quantengravitation fehlt. Es gibt mehrere Modelle ohne absoluten Anfang; jedes hat jedoch ernste theoretische oder empirische Probleme, und keines ist durch Beobachtungen gestützt. Das Borde-Guth-Vilenkin-Theorem (2003) zeigt, dass jede Raumzeit, die im Mittel expandiert, in die Vergangenheit unvollständig ist – unabhängig von Energiebedingungen.`,
    detail: `- **BGV-Theorem** (*Phys. Rev. Lett.* 90, 151301, 2003): Ist die mittlere Expansionsrate entlang einer Vergangenheitsgeodäte positiv, endet diese nach endlicher Eigenzeit. Das Theorem ist kinematisch und setzt keine Energiebedingung voraus. Es gilt für klassische Raumzeiten bzw. dort, wo eine klassische Beschreibung möglich ist; Modelle, die vermeiden wollen, davon erfasst zu werden, brauchen eine Phase, in der die mittlere Expansion nicht positiv ist (Kontraktion, statische Phase).
- **Thermodynamik:** Richard Tolman zeigte bereits 1934, dass in zyklischen Modellen die Entropie von Zyklus zu Zyklus zunimmt und die Zyklen größer werden – rückwärts gedacht konvergieren sie auf einen Anfang.
- **Penrose' CCC:** Die behaupteten Spuren früherer Äonen im kosmischen Mikrowellenhintergrund (Gurzadyan & Penrose 2010, später „Hawking-Punkte") wurden von unabhängigen Analysen nicht bestätigt. CCC setzt zudem voraus, dass im fernen Zukunftsuniversum alle Masse „verschwindet" – eine spekulative Annahme.
- **Steinhardt–Turok:** Die Entropie wird pro Zyklus im beobachtbaren Bereich verdünnt, im Ganzen wächst sie; weil die Zyklen netto expandieren, greift nach Vilenkins Analyse das BGV-Theorem auch hier.
- **Big Bounce (Schleifenquantenkosmologie):** Mathematisch interessant; ein unendlich lange kontrahierendes Vorgängeruniversum hätte aber mit extrem niedriger Entropie beginnen müssen, und Bojowald selbst betont, dass Informationen über die Zeit vor dem Bounce weitgehend verloren sind.
- **Fazit vieler Fachleute** (z. B. Vilenkin): Alle bekannten Versuche, einen Anfang zu vermeiden, scheitern oder erkaufen den Erfolg mit unbestätigten Zusatzannahmen. Andere (Carroll, Guth) halten ein ewiges Universum dennoch für plausibel. Es gibt keinen Konsens.`,
    sources: [
      { kind: 'wissenschaft', author: 'Arvind Borde, Alan H. Guth & Alexander Vilenkin', work: '„Inflationary Spacetimes Are Incomplete in Past Directions", Physical Review Letters 90, 151301', year: '2003', quote: `Ein kosmologisches Modell, das inflationär ist oder einfach hinreichend schnell expandiert, muss in null- und zeitartigen Vergangenheitsrichtungen unvollständig sein – ohne Annahme einer Energiebedingung.`, status: 'paraphrase', url: 'https://doi.org/10.1103/PhysRevLett.90.151301' },
      { kind: 'wissenschaft', author: 'Richard C. Tolman', work: 'Relativity, Thermodynamics and Cosmology', year: '1934', quote: `In oszillierenden Modellen wächst die Entropie von Zyklus zu Zyklus; die Zyklen werden größer und länger.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Roger Penrose', work: 'Cycles of Time: An Extraordinary New View of the Universe', year: '2010', quote: `Unser Urknall ist das konforme Fortsetzungsstück der fernen Zukunft eines vorherigen Äons; die Abfolge der Äonen ist unendlich.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Paul J. Steinhardt & Neil Turok', work: '„A Cyclic Model of the Universe", Science 296, 1436', year: '2002', quote: `Ein Modell, in dem das Universum eine endlose Folge von Expansions- und Kontraktionsphasen durchläuft, getrieben durch Kollisionen von Branen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Martin Bojowald', work: 'Zurück vor den Urknall: Die ganze Geschichte des Universums', year: '2009', quote: `In der Schleifenquantenkosmologie wird die Urknallsingularität durch einen Rückprall ersetzt; über den Zustand davor lässt sich aber nur sehr eingeschränkt etwas wissen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jedes Modell eines ewigen Universums musste bisher einen hohen Preis zahlen: Das Borde-Guth-Vilenkin-Theorem (Expansion im Mittel bedeutet Anfang), der zweite Hauptsatz (zyklische Modelle häufen Entropie an – wir müssten längst im Wärmetod sein), Instabilität, oder fehlende Belege (Penroses Kreise im Mikrowellenhintergrund wurden nicht bestätigt). Ein Anfang ist deshalb die am besten gestützte Annahme. Und selbst ein ewiges Universum bräuchte einen Grund, warum es überhaupt existiert und gerade diese Gesetze hat.`,
  keyPoints: [
    `**BGV-Theorem (2003):** Jede Raumzeit, die im Mittel expandiert hat, ist in die Vergangenheit unvollständig – ohne Energiebedingung. Wer ihm entkommen will, braucht eine Phase ohne Expansion.`,
    `**Zweiter Hauptsatz:** Schon Tolman (1934) zeigte, dass in zyklischen Modellen die Entropie von Zyklus zu Zyklus wächst. Bei unendlich vielen Zyklen wären wir längst im Wärmetod.`,
    `**Penrose' eigener Befund:** Ausgerechnet Penrose hat berechnet, wie extrem niedrig die Anfangsentropie war (1 zu 10^(10^123)). Seine CCC versucht das zu erklären – mit spekulativen, unbestätigten Annahmen.`,
    `**Keine Beobachtungsbelege:** Die behaupteten Spuren früherer Äonen wurden von unabhängigen Teams nicht bestätigt.`,
    `**Ehrlich bleiben:** Es gibt keinen Konsens; die Quantengravitation ist unbekannt. Das christliche Argument hängt nicht allein am Anfang – auch ein ewiges Universum wäre kontingent.`,
  ],
  argument: {
    name: 'Abduktiver Schluss auf einen Anfang',
    summary: 'Alle bekannten Klassen ewiger Modelle stoßen auf ernste Probleme; ein Anfang ist die beste verfügbare Erklärung.',
    premises: [
      {
        text: 'P1: Ein anfangsloses Universum müsste (a) im Mittel ewig expandiert haben, (b) ewig statisch gewesen sein, (c) ewig zyklisch verlaufen oder (d) aus einer unendlich langen Kontraktion hervorgegangen sein.',
        support: `Das sind die in der Literatur diskutierten Grundtypen (vgl. Mithani & Vilenkin 2012; Craig & Sinclair 2009). Mischformen erben die Probleme ihrer Bestandteile.`,
      },
      {
        text: 'P2: (a) ist nach dem BGV-Theorem vergangenheitsunvollständig; (b) ist instabil; (c) scheitert am Entropiezuwachs oder – bei netto wachsenden Zyklen – wieder am BGV-Theorem; (d) verlangt einen unerklärten, extrem geordneten Zustand in der unendlichen Vergangenheit.',
        support: `Diese Einwände stammen aus der Fachliteratur selbst (Borde, Guth, Vilenkin; Tolman; Penrose zur Anfangsentropie). Keines der Modelle ist empirisch bestätigt.`,
        sources: [{ kind: 'wissenschaft', author: 'Audrey Mithani & Alexander Vilenkin', work: '„Did the Universe Have a Beginning?"', year: '2012', quote: `Emergente, zyklische und statische Modelle können einen Anfang nicht dauerhaft vermeiden.`, status: 'paraphrase' }],
      },
    ],
    conclusion: 'Nach heutigem Wissen ist ein Anfang des Universums wahrscheinlicher als eine ewige Vergangenheit – ein Ergebnis, das zur biblischen Lehre passt, ohne dass der Glaube von ihm allein abhängt.',
  },
  voices: [
    {
      person: 'kelvin',
      role: 'als Mitbegründer der Thermodynamik',
      text: `Kelvin formulierte 1852 das Prinzip der Energiedissipation: In der Natur wird nutzbare Energie unumkehrbar in Wärme verwandelt. Er zog daraus selbst den Schluss, dass der gegenwärtige Zustand der Erde und des Sonnensystems nicht unbegrenzt in die Vergangenheit zurückreichen kann und auch nicht ewig fortbestehen wird. Diese thermodynamische Einsicht steht hinter Tolmans Kritik an zyklischen Modellen: Ein Universum, das schon unendlich lange „läuft", hätte seine Ordnung längst verbraucht.`,
      sources: [{ kind: 'wissenschaft', author: 'William Thomson (Lord Kelvin)', work: '„On a Universal Tendency in Nature to the Dissipation of Mechanical Energy", Philosophical Magazine', year: '1852', quote: `In einem endlichen Zeitraum der Vergangenheit muss die Erde für menschliches Leben ungeeignet gewesen sein und wird es in einem endlichen Zeitraum der Zukunft wieder sein.`, status: 'paraphrase' }],
    },
    {
      person: 'lemaitre',
      role: 'als Kosmologe',
      text: `Lemaître antwortete 1931 in *Nature* auf Eddingtons Abneigung gegen einen Anfang mit dem Vorschlag eines „Uratoms": Wenn man die Quantentheorie und den zweiten Hauptsatz ernst nimmt, führt der Rückweg in die Vergangenheit zu einem Zustand minimaler Entropie, mit dem Raum und Zeit erst beginnen. Er sah darin keine Theologie, sondern Physik – und hielt beide Ebenen sauber getrennt. Gerade deshalb war sein Hinweis auf die Entropie so stark: Er stammt nicht aus apologetischem Interesse.`,
      sources: [{ kind: 'wissenschaft', author: 'Georges Lemaître', work: '„The Beginning of the World from the Point of View of Quantum Theory", Nature 127, 706', year: '1931', quote: `Der Rückweg in die Vergangenheit führt zu einem Zustand mit wenigen Quanten bzw. einem einzigen Quantum; der Begriff von Raum und Zeit hätte am Anfang keine sinnvolle Bedeutung.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Philosoph, der die Modelle systematisch untersucht hat',
      text: `Craig hat mit dem Physiker James Sinclair die Familie der ewigen Modelle durchgemustert (Blackwell Companion, 2009). Ihr Befund: Jedes Modell entkommt dem Anfang entweder nur durch Annahmen, die physikalisch instabil oder unplausibel sind, oder es verschiebt den Anfang nur in eine frühere Phase. Craig betont im Gespräch mit Carroll, dass das BGV-Theorem nicht verlangt, dass das Universum „ewig" expandiert hat, sondern nur, dass die mittlere Expansion positiv war – eine viel schwächere Bedingung.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", in: W. L. Craig & J. P. Moreland (Hg.), Blackwell Companion to Natural Theology', year: '2009', quote: `Die Abfolge ewiger Modelle seit den 1960er-Jahren zeigt ein Muster: Jedes scheitert entweder oder impliziert doch einen Anfang.`, status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Kirchenvater gegen die ewige Wiederkehr',
      text: `Augustinus kannte die antiken Lehren vom ewigen Kreislauf der Welten. Er hielt ihnen entgegen, dass die Heilsgeschichte eine Richtung hat: Christus ist ein für alle Mal gestorben und auferstanden; es gibt nicht unzählige Wiederholungen desselben Dramas. Die biblische Zeit ist eine Linie mit Anfang und Vollendung, kein Kreis. Für Augustinus ist das nicht nur Physik, sondern eine Frage der Hoffnung: In einem ewigen Kreislauf gäbe es keine echte Erlösung, nur Wiederholung.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XII,14', year: 'ca. 417', quote: `Die Gottlosen wandeln im Kreis; Christus aber ist einmal gestorben für unsere Sünden.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Schöpfungsberichts',
      text: `Basilius eröffnet seine Homilien über das Sechstagewerk mit den Worten „Im Anfang schuf Gott" und folgert daraus gegen die griechischen Philosophen, dass die Welt nicht gleichewig mit Gott ist. Was einen Anfang hat, ist auf ein Ende hin angelegt. Der Kosmos ist für Basilius Schule und Übungsplatz vernünftiger Seelen, die an ihm den Schöpfer erkennen sollen – nicht ein ewiges, sich selbst genügendes Rad.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,2–3', year: 'ca. 370', quote: `Die Philosophen, die die Welt für gleichewig mit Gott halten, irren; was begonnen hat, wird auch enden.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bgv-nur-klassisch',
      objection: `Das BGV-Theorem gilt nur für klassische Raumzeiten. Es zeigt nur, wo unsere jetzige Physik zusammenbricht – nicht, dass das Universum begonnen hat. Eine Quantenbeschreibung kann ewig sein.`,
      objectionBy: 'Sean Carroll',
      answer: `Richtig: Das Theorem beweist nicht im mathematischen Sinn einen absoluten Anfang. Aber es zeigt, dass jede Vergangenheit, die im Mittel expandiert hat, eine Grenze hat. Wer ewig sein will, muss eine Phase einführen, die nicht expandiert – und alle bisher vorgeschlagenen Phasen dieser Art haben ernste Probleme. „Quantengravitation könnte es retten" ist ein Wechsel auf eine unbekannte Theorie.`,
      detail: `Im Gespräch mit Craig (2014) betonte Carroll, man könne sich leicht ewige Quantenkosmologien vorstellen. Vorstellen ja – aber ein konkretes, konsistentes und empirisch gestütztes Modell gibt es bisher nicht. Das Argument verlangt keinen Beweis, sondern einen Vergleich der Wahrscheinlichkeiten: Was spricht derzeit mehr für sich?`,
      sources: [{ kind: 'gegner', author: 'Sean Carroll', work: 'Debatte mit William Lane Craig, „God and Cosmology", Greer-Heard-Forum New Orleans', year: '2014', quote: `Das BGV-Theorem zeigt, dass unsere gegenwärtige Physik an einem bestimmten Punkt zusammenbricht, nicht, dass das Universum begann.`, status: 'paraphrase' }],
      questionsBack: [`Welches konkrete, konsistente Modell einer ewigen Quantenkosmologie hältst du für das beste – und welche Beobachtung stützt es?`],
      followUps: [
        {
          id: 'guth-glaubt-ewig',
          objection: `Alan Guth – das G in BGV – sagt selbst, er halte das Universum wahrscheinlich für ewig. Ihr missbraucht sein Theorem.`,
          objectionBy: 'Sean Carroll',
          answer: `Guths persönliche Vermutung ist interessant, aber sie ist keine Folgerung aus dem Theorem. Vilenkin, sein Mitautor, deutet dasselbe Resultat als starken Hinweis auf einen Anfang. Wenn die Autoren selbst unterschiedlich interpretieren, entscheidet nicht Autorität, sondern die Frage, welches konkrete Modell besser abschneidet.`,
          detail: `Vilenkin schrieb in *Many Worlds in One* (2006) sinngemäß, nach dem Beweis könnten sich Kosmologen nicht mehr hinter der Möglichkeit eines ewigen Universums verstecken; sie müssten sich dem Problem eines kosmischen Anfangs stellen.`,
          sources: [{ kind: 'gegner', author: 'Alexander Vilenkin', work: 'Many Worlds in One', year: '2006', quote: `Kosmologen können sich nicht mehr hinter der Möglichkeit eines vergangenheitsewigen Universums verstecken; sie müssen sich dem Problem eines kosmischen Anfangs stellen.`, status: 'paraphrase', note: 'Vilenkin ist kein christlicher Apologet; er favorisiert eine quantenphysikalische Entstehung.' }],
          followUps: [
            {
              id: 'vollstaendige-ewige-modelle',
              objection: `Es gibt inzwischen Arbeiten, die geodätisch vollständige, vergangenheitsewige Inflationsmodelle konstruieren. Das BGV-Argument ist überholt.`,
              objectionBy: 'Kosmologe (Fachdiskussion)',
              answer: `Solche Konstruktionen gibt es. Sie erkaufen Vollständigkeit aber gerade dadurch, dass die mittlere Expansion in der Vergangenheit nicht positiv ist – also genau durch die Ausnahme, die das Theorem selbst benennt – oder durch besondere Annahmen über die ferne Vergangenheit. Ob diese physikalisch realistisch sind und wie sie das Entropieproblem lösen, ist offen. Ein Gegenmodell zu haben heißt noch nicht, dass es zutrifft.`,
              questionsBack: [`Wie geht dieses Modell mit dem zweiten Hauptsatz um – warum ist die Entropie nach unendlich langer Vergangenheit so niedrig?`],
              followUps: [
                {
                  id: 'emergentes-universum',
                  objection: `Dann nimm das „emergente Universum" von Ellis und Maartens: Das Universum verharrte unendlich lange in einem statischen Zustand – einem kleinen Einstein-Universum – und begann dann zu expandieren. Keine mittlere Expansion in der Vergangenheit, also greift BGV nicht. Ewig und ohne Anfang.`,
                  objectionBy: 'Kosmologe (Emergent-Universe-Modell nach Ellis & Maartens 2004)',
                  answer: `Das Modell ist elegant, hat aber zwei bekannte Probleme. Erstens ist ein statisches Einstein-Universum instabil – das hat Eddington schon 1930 gezeigt; die kleinste Störung bringt es zum Kollaps oder zur Expansion. Unendlich lange stabil zu bleiben, ist wie eine Nadel, die ewig auf ihrer Spitze steht. Zweitens haben Mithani und Vilenkin 2012 gezeigt: Auch wenn man es klassisch stabilisiert, kann es quantenmechanisch in endlicher Zeit kollabieren. Es kann also nicht ewig existiert haben. Und drittens: Warum hätte es nach unendlich langer Ruhe gerade „vor 13,8 Milliarden Jahren" losgehen sollen?`,
                  detail: `Ellis und Maartens schlugen das Modell ausdrücklich vor, um eine Singularität zu vermeiden, nicht als Gegenargument zum Glauben – Ellis selbst ist Christ (Quäker). Die physikalische Schwierigkeit bleibt dennoch: Ein Zustand, der für eine unendliche Vergangenheit unverändert bleiben soll, darf keinerlei Zerfallswahrscheinlichkeit haben; jede endliche Wahrscheinlichkeit pro Zeiteinheit führt über eine unendliche Zeit sicher zum Zerfall. Daher ist die Fachliteratur hier weitgehend einig, dass emergente Modelle den Anfang nur hinausschieben.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'George F. R. Ellis & Roy Maartens', work: '„The Emergent Universe: Inflationary Cosmology with No Singularity", Classical and Quantum Gravity 21', year: '2004', quote: `Ein geschlossenes Universum, das in der unendlichen Vergangenheit asymptotisch einem statischen Einstein-Zustand entspricht und dann in eine inflationäre Phase übergeht.`, status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Audrey Mithani & Alexander Vilenkin', work: '„Collapse of Simple Harmonic Universe", Journal of Cosmology and Astroparticle Physics', year: '2012', quote: `Ein klassisch stabiles, oszillierendes bzw. statisches Universum kann quantenmechanisch durch Tunneln kollabieren und daher nicht ewig bestanden haben.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wie bleibt ein instabiler Zustand eine unendliche Zeit lang unverändert – und warum endete er dann gerade zu einem bestimmten Zeitpunkt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'gott-in-der-quantengravitation',
          objection: `Ihr parkt Gott in der Quantengravitation – sobald wir sie verstehen, ist er wieder weg. Lückenbüßer-Theologie.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Nein. Mein Argument stützt sich auf das, was wir wissen – BGV, Thermodynamik, das Scheitern konkreter Modelle –, nicht auf das, was wir nicht wissen. Und selbst wenn sich ein ewiges Modell bewähren sollte, bliebe die Frage, warum dieses ewige Universum existiert und diese Gesetze hat. Der christliche Glaube steht nicht und fällt nicht mit einer Singularität.`,
          detail: `Thomas von Aquin hielt es philosophisch sogar für denkbar, dass Gott eine anfangslose Welt erschafft; dass die Welt einen Anfang hat, wusste er aus der Offenbarung. Die Abhängigkeit des Seins von Gott ist unabhängig davon, ob die Zeit einen ersten Moment hat.`,
        },
      ],
    },
    {
      id: 'penrose-ccc',
      objection: `Penroses Konforme Zyklische Kosmologie: unendlich viele Äonen, eins nach dem anderen. Und er hat sogar Spuren früherer Äonen im Mikrowellenhintergrund gefunden – konzentrische Kreise, „Hawking-Punkte".`,
      objectionBy: 'Roger Penrose',
      answer: `Die behaupteten Signale wurden von mehreren unabhängigen Teams untersucht und nicht bestätigt; sie gelten als statistisch nicht signifikant. CCC verlangt zudem, dass in der fernen Zukunft alle massiven Teilchen ihre Masse verlieren – eine Annahme ohne Beleg. Und ausgerechnet Penrose hat gezeigt, wie unglaublich geordnet der Anfangszustand war – die Frage, warum, bleibt.`,
      detail: `Penrose ist ein großer Mathematiker, und seine Arbeiten zu Singularitäten (mit Hawking) gehören zu den Fundamenten der modernen Kosmologie. Seine CCC ist aber eine Minderheitenposition. Für das Gespräch wichtig: Du musst CCC nicht widerlegen; es genügt zu zeigen, dass sie nicht etablierte Wissenschaft ist.`,
      questionsBack: [`Welche unabhängige Gruppe hat die Kreise im Mikrowellenhintergrund bestätigt?`],
      followUps: [
        {
          id: 'penrose-nobelpreis',
          objection: `Penrose hat den Nobelpreis – du bist ein Laie. Wer bist du, ihm zu widersprechen?`,
          objectionBy: 'Gesprächspartner',
          answer: `Ich widerspreche nicht Penrose' Mathematik, sondern weise darauf hin, was die Fachwelt über CCC sagt: Sie ist nicht bestätigt. Den Nobelpreis erhielt er für seine Arbeit über Schwarze Löcher – und genau diese Arbeit zeigt, wie unausweichlich Singularitäten in der klassischen Relativitätstheorie sind. Autorität allein entscheidet hier nichts.`,
        },
        {
          id: 'ccc-entropie-reset',
          objection: `In CCC wird die Entropie durch die konforme Umskalierung praktisch „zurückgesetzt" – das Entropieproblem ist gelöst.`,
          objectionBy: 'Roger Penrose (Verteidiger)',
          answer: `Genau das ist der umstrittenste Punkt. Viele Physiker halten es für unklar, wie eine geometrische Umskalierung den zweiten Hauptsatz aushebeln soll, ohne Information zu vernichten. Penrose' Vorschlag hängt unter anderem daran, dass Information in Schwarzen Löchern verloren geht – eine These, die die Mehrheit der Fachleute heute eher ablehnt.`,
        },
      ],
    },
    {
      id: 'big-bounce',
      objection: `Die Schleifenquantengravitation ersetzt den Urknall durch einen „Big Bounce": Unser Universum ist aus einem vorherigen, kollabierenden Universum hervorgegangen – und so weiter, ohne Anfang.`,
      objectionBy: 'Martin Bojowald',
      answer: `Ein einzelner Bounce verschiebt die Frage nur. Bei unendlich vielen Bounces kommt der zweite Hauptsatz ins Spiel: Die Entropie wächst von Zyklus zu Zyklus, wie Tolman schon 1934 zeigte. Nach unendlich vielen Zyklen wären wir längst im Wärmetod. Und eine unendlich lange Kontraktion hätte in einem extrem geordneten Zustand beginnen müssen – wieder ein Anfangsproblem.`,
      detail: `Bojowald betont selbst, dass Informationen über den Zustand vor dem Bounce weitgehend „vergessen" werden; damit wird das Vorgängeruniversum praktisch unbeobachtbar. Ein Modell, dessen entscheidende Behauptung grundsätzlich nicht prüfbar ist, kann ein beobachtungsgestütztes Argument nicht widerlegen.`,
      questionsBack: [`Wenn die Entropie bei jedem Zyklus zunimmt, wie kann es dann unendlich viele Zyklen vor uns gegeben haben?`],
      followUps: [
        {
          id: 'dunkle-energie-verduennt-entropie',
          objection: `Steinhardt und Turok haben das Entropieproblem gelöst: Die Dunkle Energie verdünnt in jedem Zyklus die Entropie, sodass jeder Zyklus frisch beginnt.`,
          objectionBy: 'Paul Steinhardt / Neil Turok',
          answer: `Die Entropie wird in dem Bereich verdünnt, den wir beobachten können – im Ganzen wächst sie trotzdem, weil das Universum von Zyklus zu Zyklus netto größer wird. Genau deshalb greift auf die Gesamtgeschichte wieder das BGV-Theorem: Die mittlere Expansion ist positiv, also gibt es eine Grenze in der Vergangenheit.`,
          followUps: [
            {
              id: 'zyklen-ohne-ende-rueckwaerts',
              objection: `Und wenn die Zyklen rückwärts gedacht immer kleiner werden, aber nie aufhören?`,
              objectionBy: 'Gesprächspartner',
              answer: `Dann nähert sich die Folge rückwärts einem Minimum – und die mittlere Expansion über die Gesamtgeschichte bleibt positiv. Genau dieser Fall wird vom BGV-Theorem erfasst. Eine unendliche Folge, die rückwärts immer kleiner wird, hat eine endliche Vergangenheit, ähnlich wie 1 + 1/2 + 1/4 + … eine endliche Summe hat.`,
            },
          ],
        },
      ],
    },
    {
      id: 'ewiges-multiversum-statt-gott',
      objection: `Selbst wenn unser Universum einen Anfang hatte: Ein ewiges Multiversum oder ein ewiges Quantenfeld ist genauso gut wie ein ewiger Gott – nur ohne Magie.`,
      objectionBy: 'Sean Carroll',
      answer: `Nicht ganz. Erstens unterliegt auch ein ewig expandierendes Multiversum dem BGV-Theorem. Zweitens: Eine ewige, mechanisch wirkende Ursache müsste ewig wirken – warum entstand unser Universum dann vor einer endlichen Zeit und nicht schon immer? Eine personale Ursache kann aus Freiheit wählen, ein zeitliches Werk hervorzubringen. Und drittens bliebe die Frage, warum dieses Feld mit diesen Gesetzen existiert.`,
      detail: `Das ist das von Craig ausgebaute Argument: Wenn die hinreichenden Bedingungen für die Wirkung ewig vorliegen, wäre die Wirkung ewig. Eine endliche Wirkung aus einer ewigen Ursache ist am besten durch einen freien Willen erklärt.`,
      followUps: [
        {
          id: 'das-ist-philosophie',
          objection: `Das ist reine Philosophie, keine Physik.`,
          objectionBy: 'Sean Carroll',
          answer: `Ja – und die Behauptung „ein ewiges Quantenfeld ist genauso gut" ist ebenfalls Philosophie. Wir sind jetzt auf derselben Ebene und müssen Gründe abwägen. Die Physik liefert Daten (BGV, Entropie); die Deutung ist auf beiden Seiten philosophisch.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches konkrete ewige Modell hältst du für das beste – und welche Beobachtung stützt es?`,
    `Wenn die Entropie in jedem Zyklus wächst – wie kann es unendlich viele Zyklen gegeben haben?`,
    `Warum sehen wir einen Anfangszustand mit so extrem niedriger Entropie, wenn das Universum ewig ist?`,
    `Würde dich ein bestätigter Anfang des Universums in deinem Atheismus erschüttern – oder würdest du dann sagen, er brauche keine Ursache?`,
  ],
  avoid: [
    `„Das BGV-Theorem beweist, dass Gott das Universum erschaffen hat." – Es beweist eine Vergangenheitsgrenze unter bestimmten Bedingungen, nicht Gott. Sauber formulieren.`,
    `Penrose oder Steinhardt lächerlich machen. Ihre Modelle sind ernsthafte Wissenschaft – nur eben unbestätigt.`,
    `„Der zweite Hauptsatz beweist, dass Evolution unmöglich ist." – Gehört nicht hierher und ist in dieser Form falsch (offene Systeme).`,
  ],
  concessions: [
    `Es gibt keinen wissenschaftlichen Konsens darüber, ob das Universum einen absoluten Anfang hat. Ohne Theorie der Quantengravitation bleibt die Frage offen.`,
    `Seriöse Physiker – darunter Alan Guth und Sean Carroll – halten ein ewiges Universum für möglich oder sogar wahrscheinlich.`,
    `Das christliche Argument sollte nicht nur am Anfang hängen: Auch ein ewiges Universum bliebe kontingent und erklärungsbedürftig.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'gegner', author: 'Alexander Vilenkin', work: 'Many Worlds in One', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Roger Penrose', work: 'Cycles of Time', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Martin Bojowald', work: 'Zurück vor den Urknall', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['BGV-Theorem', 'Penrose', 'zyklisches Universum', 'Big Bounce', 'Entropie', 'Thermodynamik'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'mathematik/aktual-unendliche-vergangenheit',
    'kosmologie/universum-aus-dem-nichts',
    'kosmologie/hawking-keine-grenze',
    'feinabstimmung/feinabstimmung-illusion',
  ],
};

export default claim;
