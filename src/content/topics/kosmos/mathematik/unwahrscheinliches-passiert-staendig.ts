import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'unwahrscheinliches-passiert-staendig',
  title: `„Unwahrscheinliche Dinge passieren ständig – Wahrscheinlichkeitsargumente sind wertlos."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 4; Climbing Mount Improbable (1996)' },
    { name: 'David J. Hand', role: 'Statistiker, Imperial College London', work: 'The Improbability Principle (2014)' },
    { name: 'Elliott Sober', role: 'Wissenschaftsphilosoph, University of Wisconsin', work: 'Fitelson, Stephens & Sober, „How Not to Detect Design", Philosophy of Science 66 (1999)' },
    { name: 'Jeffrey Shallit & Wesley Elsberry', role: 'Informatiker bzw. Biologe, Kritiker von Dembski', work: 'Kritik der „spezifizierten Komplexität"' },
    { name: 'Persi Diaconis & Frederick Mosteller', role: 'Statistiker (Stanford, Harvard)', work: '„Methods for Studying Coincidences", Journal of the American Statistical Association 84 (1989)' },
  ],
  steelman: `Jede bestimmte Reihenfolge eines gemischten Kartenspiels hat eine Wahrscheinlichkeit von etwa 1 zu 8 × 10⁶⁷ – und doch tritt bei jedem Mischen eine solche Reihenfolge ein. Unwahrscheinlichkeit allein bedeutet also nichts. Design-Argumente malen nachträglich eine Zielscheibe um den Einschuss („Texas-Scharfschütze"), berechnen Wahrscheinlichkeiten unter der unrealistischen Annahme reinen Zufalls und ignorieren, dass die natürliche Selektion kleine Schritte kumuliert. Nach dem „Gesetz der wirklich großen Zahlen" (Diaconis und Mosteller) ist bei genügend Versuchen praktisch jeder verblüffende Zufall zu erwarten – und das Universum ist riesig und alt. Außerdem kennen wir die Wahrscheinlichkeitsräume oft gar nicht (wie wahrscheinlich ist „ein Universum"?). Und schließlich: Ein Designer, der so etwas Komplexes erschafft, wäre selbst noch unwahrscheinlicher – das ultimative Boeing 747 (Dawkins).`,
  biblical: {
    summary: `Die Bibel kennt keinen „reinen Zufall", der Gott entzogen wäre: „Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will" (Spr 16,33). Zugleich zeigt sie die Logik des **Zeichens**: Ein Ereignis wird bedeutsam, wenn es einem vorher angekündigten, unabhängigen Muster entspricht – Elia kündigt an, dass Feuer auf den Altar fällt (1 Kön 18), Gideon legt das Vlies mit einer vorher festgelegten Bedingung aus (Ri 6,36–40). Genau das ist die Struktur, die Statistiker heute „Spezifikation" nennen.`,
    detail: `- **Spr 16,33**: Auch was dem Menschen als Zufall erscheint, steht unter Gottes Vorsehung. Christen unterscheiden deshalb nicht zwischen „Gott" und „Zufall", sondern zwischen Gottes gewöhnlichem Wirken in gesetzmäßigen Prozessen und besonderen Zeichen.
- **1 Kön 18,22–39**: Das Gottesurteil auf dem Karmel ist eine öffentliche, vorher definierte Probe – kein nachträglich gedeutetes Ereignis.
- **Joh 9,32**: „Von der Welt an ist's nicht erhört, daß jemand einem geborenen Blinden die Augen aufgetan habe" – die Zeitgenossen argumentieren mit der extremen Seltenheit des Ereignisses im Verhältnis zu allen bekannten Fällen.
- **Missverständnis vermeiden:** Die Bibel enthält keine Wahrscheinlichkeitsrechnung. Sie zeigt aber, dass schon die Antike zwischen bloß Seltenem und bedeutungsvoll Seltenem unterschied.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '16,33', quote: `Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '18,22–39', quote: `Elia legt vor dem Volk fest, dass der Gott, der mit Feuer antwortet, der wahre Gott ist – und das Feuer fällt auf seinen mit Wasser übergossenen Altar.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Richter', ref: '6,36–40', quote: `Gideon legt vorher fest, woran er Gottes Zusage erkennen will: Tau nur auf dem Vlies, dann nur auf dem Boden.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '9,32', quote: `Von der Welt an ist's nicht erhört, daß jemand einem geborenen Blinden die Augen aufgetan habe.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Schon im 3. Jahrhundert setzte sich Dionysius der Große, Papst von Alexandrien, mit den epikureischen Atomisten auseinander, die die Welt aus zufälligen Zusammenstößen von Atomen erklärten. Er argumentierte: Ordnung, Zweckmäßigkeit und Schönheit eines Hauses, eines Gewandes oder einer Stadt entstehen nicht durch zufälliges Zusammenwürfeln – erst recht nicht der Kosmos. Athanasius knüpfte daran an: Die Welt ist kein Werk des Zufalls (*automaton*), sondern des Logos. Diese Väter dachten keine Wahrscheinlichkeitstheorie, aber sie erfassten die Kernintuition: Zweckvolle Ordnung verlangt nach Vernunft.`,
    sources: [
      { kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Über die Natur (Peri physeōs), Fragmente', ref: 'überliefert bei Eusebius, Praeparatio Evangelica XIV,23–27', year: '3. Jh.', quote: `Dionysius hält den Atomisten entgegen, dass zweckmäßige, schöne Gebilde wie Häuser oder Gewänder nicht durch zufälliges Zusammentreffen ihrer Teile entstehen, sondern einen Baumeister voraussetzen – umso mehr der Kosmos.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '2', quote: `Athanasius weist die Lehre der Epikureer zurück, alles sei von selbst und zufällig entstanden; die Verschiedenheit und Ordnung der Dinge zeigt einen Schöpfer.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Wahrscheinlichkeitstheorie unterscheidet sauber: **Unwahrscheinlichkeit allein ist kein Beleg** für irgendetwas. Entscheidend ist der Vergleich von Hypothesen (Likelihood-Prinzip, Bayes): Ein Ereignis E bestätigt Hypothese D gegenüber Z, wenn E unter D deutlich wahrscheinlicher ist als unter Z. Hinzu kommt der Begriff der **Spezifikation** (Dembski): ein unabhängig gegebenes Muster. Diese Logik ist in der Praxis allgegenwärtig: Signifikanztests (Fisher), Betrugserkennung in Casinos, Kryptographie, Plagiatserkennung, Forensik, SETI.`,
    detail: `**Fairer Stand der Debatte:**
- Dembskis „Design Inference" (1998) wurde von Sober, Fitelson, Elsberry, Shallit u. a. scharf kritisiert: Die Definition der Spezifikation sei unscharf, die relevanten Wahrscheinlichkeiten seien in der Biologie oft unbekannt, und man müsse Design-Hypothesen ebenfalls mit Wahrscheinlichkeiten versehen. Diese Kritik ist ernst zu nehmen.
- Unstrittig bleibt: Das Muster „extrem unwahrscheinlich unter Zufall + unabhängiges Muster + plausibler Urheber" wird in allen genannten Feldern legitim verwendet.
- **Grenzen der Ressourcen:** Émile Borel hielt Ereignisse mit Wahrscheinlichkeit unter etwa 10⁻⁵⁰ für praktisch unmöglich auf kosmischer Skala. Dembskis „universelle Wahrscheinlichkeitsgrenze" von 10⁻¹⁵⁰ ergibt sich aus der großzügigen Abschätzung aller Elementarereignisse im beobachtbaren Universum (ca. 10⁸⁰ Teilchen × 10⁴⁵ Zustandsänderungen pro Sekunde × 10²⁵ Sekunden).
- Beim Feinabstimmungsargument haben McGrew, McGrew und Vestrup (2001) auf ein Normierungsproblem bei unendlichen Parameterbereichen hingewiesen; Robin Collins und andere antworten mit eingeschränkten Bereichen. Offene Fachfrage.`,
    sources: [
      { kind: 'fachliteratur', author: 'William A. Dembski', work: 'The Design Inference: Eliminating Chance through Small Probabilities', year: '1998', quote: `Design wird erschlossen, wenn ein Ereignis sowohl extrem unwahrscheinlich als auch unabhängig spezifiziert ist.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Émile Borel', work: 'Les probabilités et la vie (engl. Probabilities and Life, 1962)', year: '1943', quote: `Ereignisse mit einer Wahrscheinlichkeit unter etwa 10⁻⁵⁰ sind auf kosmischer Skala als praktisch unmöglich anzusehen („einziges Gesetz des Zufalls").`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Branden Fitelson, Christopher Stephens, Elliott Sober', work: 'How Not to Detect Design', ref: 'Philosophy of Science 66 (1999), 472–488', status: 'paraphrase' },
      { kind: 'gegner', author: 'Persi Diaconis & Frederick Mosteller', work: 'Methods for Studying Coincidences', ref: 'Journal of the American Statistical Association 84 (1989)', quote: `Bei einer hinreichend großen Stichprobe wird jedes noch so seltsame Ereignis wahrscheinlich eintreten („Gesetz der wirklich großen Zahlen").`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Timothy McGrew, Lydia McGrew, Eric Vestrup', work: 'Probabilities and the Fine-Tuning Argument: A Sceptical View', ref: 'Mind 110 (2001)', status: 'paraphrase', note: 'Christliche Autoren, die ein Problem beim Feinabstimmungsargument benennen – Zeichen ehrlicher Debatte.' },
    ],
  },
  quickAnswer: `Unwahrscheinlich ist nicht dasselbe wie verdächtig. Jede Kartenhand ist unwahrscheinlich – aber wenn der Geber zehnmal hintereinander einen Royal Flush bekommt, ruft jeder Statistiker den Sicherheitsdienst. Entscheidend ist: **extrem unwahrscheinlich + unabhängiges Muster**. Mit genau dieser Logik arbeiten Casinos, Forensiker, Kryptographen und SETI. Die Frage ist nicht, ob Unwahrscheinliches passiert, sondern welche Erklärung die Daten erwartbar macht.`,
  keyPoints: [
    `**Spezifikation:** Ein Ereignis wird erst dann bedeutsam, wenn es einem unabhängig vorgegebenen Muster entspricht (Funktion, Sprache, Vorhersage).`,
    `**Ressourcen zählen:** Ein Lottogewinn ist für *irgendwen* fast sicher (viele Lose); derselbe Neffe fünfmal hintereinander – nicht.`,
    `**Die Grenzen sind endlich:** Das beobachtbare Universum bietet höchstens rund 10¹⁵⁰ Elementarereignisse. Wahrscheinlichkeiten weit darunter lassen sich nicht mit „Zeit und Größe" wegerklären.`,
    `**Hypothesenvergleich:** Es geht nicht um Unwahrscheinlichkeit an sich, sondern um das Verhältnis: Wie viel wahrscheinlicher ist der Befund unter Design als unter Zufall?`,
    `**Fair bleiben:** Wo Selektion wirkt, sind Rechnungen mit „reinem Zufall" Strohmänner. Das Argument greift dort, wo Selektion (noch) nicht wirken kann oder funktionale Inseln weit auseinanderliegen.`,
  ],
  argument: {
    name: 'Design-Inferenz (Likelihood-Fassung)',
    summary: 'Ein spezifiziertes, unter Zufall extrem unwahrscheinliches Ereignis bestätigt Design gegenüber Zufall.',
    premises: [
      {
        text: 'P1: Das Ereignis E entspricht einem unabhängig gegebenen Muster (Spezifikation).',
        support: `Das Muster muss ohne Kenntnis von E formulierbar sein – z. B. eine biochemische Funktion, ein sprachlicher Sinn, eine Vorhersage. Damit ist der „Texas-Scharfschütze" ausgeschlossen.`,
      },
      {
        text: 'P2: Unter den relevanten Zufallshypothesen ist E extrem unwahrscheinlich – auch unter Berücksichtigung aller verfügbaren Versuche (probabilistische Ressourcen).',
        support: `Die Ressourcen des beobachtbaren Universums sind endlich (Borel, Dembski). Wo Selektion wirkt, muss sie in die Rechnung eingehen.`,
      },
      {
        text: 'P3: Unter einer Design-Hypothese (ein Urheber mit Grund, ein solches Muster hervorzubringen) ist E nicht extrem unwahrscheinlich.',
        support: `Intelligente Akteure bringen erfahrungsgemäß Funktion, Code und Sprache hervor – das ist unsere einzige bekannte Ursache solcher Muster.`,
      },
    ],
    conclusion: 'E bestätigt Design gegenüber Zufall stark (Likelihood-Prinzip). Das ist dieselbe Logik, die in Forensik, Kryptographie und Betrugserkennung täglich verwendet wird.',
  },
  voices: [
    {
      person: 'pascal',
      role: 'als Mitbegründer der Wahrscheinlichkeitsrechnung',
      text: `Pascal begründete 1654 im Briefwechsel mit Fermat die mathematische Wahrscheinlichkeitsrechnung. Für ihn war sie ein Werkzeug vernünftigen Urteilens unter Ungewissheit – nicht ein Mittel, Ordnung und Sinn wegzuerklären. Er sah klar, dass Zufall eine Rechengröße ist, keine Ursache: Wer sagt, etwas sei „zufällig" entstanden, hat noch nicht erklärt, warum es geschah.`,
      sources: [
        { kind: 'wissenschaft', author: 'Blaise Pascal & Pierre de Fermat', work: 'Briefwechsel über das Teilungsproblem', year: '1654', status: 'paraphrase' },
      ],
    },
    {
      person: 'dionysius-alexandrien',
      role: 'als Papst von Alexandrien gegen die Atomisten',
      text: `Dionysius der Große schrieb ein Werk „Über die Natur" gegen die epikureischen Atomisten. Er wandte ein, dass niemand ein Haus, ein Gewand oder eine wohlgeordnete Stadt für das Ergebnis zufällig zusammenstoßender Teilchen hält. Zweckmäßige Ordnung zeigt den Baumeister. Diese alexandrinische Kritik am „Zufall als Schöpfer" ist der Urahn der modernen Debatte über Zufall und Design.`,
      sources: [
        { kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Über die Natur (Fragmente bei Eusebius, Praeparatio Evangelica XIV,23–27)', status: 'paraphrase' },
      ],
    },
    {
      person: 'dembski',
      role: 'als Mathematiker und Wahrscheinlichkeitstheoretiker',
      text: `Dembski formalisiert, was wir intuitiv tun: Wir schließen auf Design, wenn ein Ereignis erstens unter allen Zufallserklärungen extrem unwahrscheinlich ist und zweitens einem unabhängigen Muster entspricht. Er betont, dass Unwahrscheinlichkeit allein nicht reicht – sonst wäre jede Kartenhand designt. Erst die Verbindung von Komplexität und Spezifikation trägt den Schluss.`,
      sources: [
        { kind: 'fachliteratur', author: 'William A. Dembski', work: 'The Design Inference', year: '1998', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'William A. Dembski & Winston Ewert', work: 'The Design Inference (2. Aufl.)', year: '2023', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der Bestätigungstheorie',
      text: `Swinburne formuliert Gottesargumente konsequent bayesianisch: Ein Befund zählt als Beleg für den Theismus, wenn er unter Theismus wahrscheinlicher ist als unter seiner Verneinung. Damit entgeht er dem Einwand „Unwahrscheinliches passiert immer": Es kommt nicht auf die absolute Unwahrscheinlichkeit an, sondern auf das Verhältnis der Wahrscheinlichkeiten unter konkurrierenden Hypothesen. Zudem argumentiert er, dass die Hypothese eines einzigen, unbegrenzten Geistes besonders einfach ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God (2. Aufl.)', year: '2004', status: 'paraphrase' },
      ],
    },
    {
      person: 'robin-collins',
      role: 'als Philosoph der Feinabstimmung',
      text: `Collins antwortet auf das Normierungsproblem bei der Feinabstimmung, indem er nur den Bereich physikalischer Parameterwerte betrachtet, für den unsere Theorien gelten („epistemisch beleuchteter Bereich"). Innerhalb dieses Bereichs bleibt der lebensfreundliche Teil winzig. So vermeidet er Rechnungen über unendliche Bereiche und zeigt, dass Wahrscheinlichkeitsargumente präzise und vorsichtig geführt werden können.`,
      sources: [
        { kind: 'fachliteratur', author: 'Robin Collins', work: 'The Teleological Argument: An Exploration of the Fine-Tuning of the Universe', ref: 'in: The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'jede-kartenhand',
      objection: `Jede einzelne Kartenhand hat eine Wahrscheinlichkeit von 1 zu 8 × 10⁶⁷. Trotzdem tritt bei jedem Mischen eine ein. Unwahrscheinlichkeit beweist gar nichts.`,
      objectionBy: 'David Hand',
      targetsPremise: 2,
      answer: `Völlig richtig – Unwahrscheinlichkeit **allein** beweist nichts. Aber eine zufällige Kartenhand entspricht keinem unabhängigen Muster. Wenn dagegen die Karten exakt nach Farben und Werten sortiert herauskommen oder der Geber zehnmal hintereinander einen Royal Flush hat, schließt jeder vernünftige Mensch auf Absicht. Das ist der Unterschied zwischen Unwahrscheinlichkeit und **spezifizierter** Unwahrscheinlichkeit.`,
      questionsBack: [
        `Wenn dein Pokerpartner zehnmal hintereinander einen Royal Flush hat – sagst du dann auch „Unwahrscheinliches passiert ständig"?`,
      ],
      followUps: [
        {
          id: 'spezifikation-nachtraeglich',
          objection: `Spezifikation ist nachträgliches Bemalen der Zielscheibe – der Texas-Scharfschütze schießt auf die Scheunenwand und malt dann den Kreis drumherum.`,
          objectionBy: 'Elliott Sober',
          targetsPremise: 1,
          answer: `Gegen nachträglich erfundene Muster ist der Einwand berechtigt. Echte Spezifikation ist aber **unabhängig** vom Ereignis: Dass ein Protein eine Reaktion katalysiert oder ein Text einen Sinn ergibt, hängt nicht davon ab, wer ihn findet. Die Zielscheibe „funktionierende Maschine" oder „sinnvoller Satz" war schon da, bevor wir hinsahen.`,
          followUps: [
            {
              id: 'funktion-auch-nachtraeglich',
              objection: `Auch „Funktion" ist nachträglich: Wir nennen funktional, was zufällig überlebt hat.`,
              objectionBy: 'Jeffrey Shallit',
              answer: `Funktion ist physikalisch definiert – Bindung, Katalyse, Faltung –, nicht durch unseren Geschmack. Die eigentliche Frage ist empirisch: Wie selten sind funktionale Sequenzen im Raum aller möglichen? Douglas Axe schätzte für eine bestimmte Proteindomäne etwa 1 zu 10⁷⁷; andere Forscher kommen zu höheren Anteilen. Diese Debatte wird im Labor entschieden, nicht durch den Vorwurf der Nachträglichkeit.`,
              sources: [
                { kind: 'wissenschaft', author: 'Douglas D. Axe', work: 'Estimating the Prevalence of Protein Sequences Adopting Functional Enzyme Folds', ref: 'Journal of Molecular Biology 341 (2004), 1295–1315', year: '2004', status: 'paraphrase', note: 'Die Schätzung ist in der Fachwelt umstritten; ehrlich als Schätzung präsentieren.' },
              ],
            },
          ],
        },
        {
          id: 'lotterie-irgendeiner',
          objection: `In der Lotterie gewinnt immer irgendwer. Der Gewinner staunt – aber zu Unrecht.`,
          answer: `Richtig, denn dass **irgendein** Los gewinnt, ist bei Millionen Losen fast sicher – die Ressourcen sind groß. Wenn aber der Neffe des Lotteriechefs fünfmal hintereinander gewinnt, wird ermittelt. Es kommt darauf an, ob das spezifizierte Ergebnis im Verhältnis zu den verfügbaren Versuchen unwahrscheinlich ist.`,
        },
      ],
    },
    {
      id: 'gesetz-grosser-zahlen',
      objection: `Nach dem Gesetz der wirklich großen Zahlen passiert bei genug Versuchen alles einmal. Das Universum ist riesig und 13,8 Milliarden Jahre alt.`,
      objectionBy: 'Diaconis & Mosteller / Richard Dawkins',
      targetsPremise: 2,
      answer: `Dann rechnen wir die Versuche aus: Das beobachtbare Universum enthält etwa 10⁸⁰ Teilchen; selbst wenn jedes seit dem Urknall in jeder Planck-Zeit seinen Zustand änderte, kommt man auf höchstens rund 10¹⁵⁰ Ereignisse. „Riesig" ist endlich. Wahrscheinlichkeiten von 10⁻²⁰⁰ oder kleiner lassen sich mit Zeit und Raum nicht wegerklären.`,
      followUps: [
        {
          id: 'grenze-willkuerlich',
          objection: `Dembskis Grenze von 10⁻¹⁵⁰ ist willkürlich gewählt.`,
          objectionBy: 'Jeffrey Shallit',
          answer: `Sie ist bewusst großzügig: eine obere Schranke für **alle** physikalischen Elementarereignisse im beobachtbaren Universum. Man kann über den genauen Wert streiten – Borel setzte 10⁻⁵⁰ an –, aber nicht darüber, dass die Ressourcen endlich sind. Wer das bestreitet, muss unendlich viele Versuche postulieren.`,
          followUps: [
            {
              id: 'multiversum-unendlich',
              objection: `Genau: Im Multiversum gibt es unendlich viele Versuche. Dann ist alles sicher.`,
              objectionBy: 'Max Tegmark',
              answer: `Dann ist aber auch sicher, dass es unzählige „Boltzmann-Gehirne" gibt – spontan entstandene Beobachter mit falschen Erinnerungen –, und du könntest nicht ausschließen, einer zu sein. Sean Carroll selbst nennt solche Theorien „kognitiv instabil": Sie untergraben das Vertrauen in die Beobachtungen, auf denen sie beruhen. Unendliche Versuche erklären nicht nur alles, sie zerstören jede Wissenschaft.`,
              sources: [
                { kind: 'gegner', author: 'Sean M. Carroll', work: 'Why Boltzmann Brains Are Bad', ref: 'arXiv:1702.00850', year: '2017', quote: `Theorien, die von Boltzmann-Gehirnen dominiert werden, sind kognitiv instabil: Man kann ihnen nicht zugleich glauben und rational begründet glauben.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn unendlich viele Versuche alles erklären – womit schließt du dann aus, dass deine Erinnerung an das gestrige Experiment eine Zufallsfluktuation ist?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evolution-kein-zufall',
      objection: `Evolution ist kein Zufall. Die Selektion kumuliert kleine Schritte – Dawkins' „Mount Improbable", sein WEASEL-Programm erreicht den Zielsatz in wenigen Generationen.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 2,
      answer: `Fair: Wer gegen die Evolution rechnet, als würde ein Protein auf einen Schlag zufällig zusammengewürfelt, kämpft gegen einen Strohmann. Aber Selektion braucht einen funktionierenden Ausgangspunkt und einen Weg aus kleinen, jeweils vorteilhaften Schritten. Vor der ersten Replikation (Ursprung des Lebens) und zwischen weit auseinanderliegenden funktionalen „Inseln" kann sie nicht helfen – dort zählen die Wahrscheinlichkeiten wieder.`,
      followUps: [
        {
          id: 'weasel-illustration',
          objection: `WEASEL war nur eine Illustration – Dawkins hat selbst gesagt, dass es in die Irre führt, weil es ein Ziel hat.`,
          objectionBy: 'Richard Dawkins',
          answer: `Genau – und das ist der Punkt: Das Programm funktionierte, weil der Zielsatz einprogrammiert war. Robert Marks und William Dembski haben gezeigt, dass erfolgreiche evolutionäre Algorithmen allgemein „aktive Information" ihrer Programmierer enthalten. Die Frage verschiebt sich damit in die reale Biologie: Wie dicht liegen funktionale Proteine im Sequenzraum? Das ist eine empirische Frage, die wir offen diskutieren sollten.`,
          sources: [
            { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'gott-noch-unwahrscheinlicher',
      objection: `Ein Designer, der so etwas Komplexes erschafft, wäre selbst noch komplexer und unwahrscheinlicher – das ultimative Boeing 747.`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 4)',
      targetsPremise: 3,
      answer: `Das Argument behandelt Gott wie ein physikalisches Objekt, das aus Teilen zusammengesetzt wurde. Die klassische christliche Lehre versteht Gott aber als einfach, nicht zusammengesetzt und notwendig – er wurde nicht „gewürfelt". Außerdem muss man eine Erklärung nicht selbst erklären können, um sie als beste zu erkennen: Archäologen schließen auf Handwerker, ohne deren Entstehung zu erklären.`,
      followUps: [
        {
          id: 'allwissender-geist-komplex',
          objection: `Ein Geist, der alles weiß, ist doch maximal komplex.`,
          answer: `Die Fülle dessen, was er weiß, ist etwas anderes als eine Zusammensetzung aus Teilen. Swinburne argumentiert sogar umgekehrt: Eine Person mit unbegrenzter Macht und unbegrenztem Wissen ist die einfachste denkbare Hypothese – „null Grenzen" ist einfacher als jede willkürliche endliche Grenze. Die Frage „Wer schuf Gott?" setzt voraus, dass Gott ein Geschöpf wäre.`,
          detail: `Vertiefung im Themenblock Atheismus (Claim „Wer hat dann Gott erschaffen?").`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wann würdest du bei einem Pokerspiel auf Betrug schließen – und warum gilt diese Logik nicht für die Biologie?`,
    `Wie viele Versuche stehen im beobachtbaren Universum maximal zur Verfügung?`,
    `Kennst du irgendeinen Fall, in dem funktionaler Code ohne Geist entstand – außer dem, der gerade strittig ist?`,
    `Wenn unendlich viele Universen alles erklären: Woran merkst du, dass du kein Boltzmann-Gehirn bist?`,
  ],
  avoid: [
    `Fred Hoyles „Tornado im Schrottplatz, der eine Boeing 747 baut" als Argument gegen die Evolution – es beschreibt zufällige Zusammensetzung auf einen Schlag und trifft daher die Selektion nicht.`,
    `Riesige Zahlen wie „1 zu 10⁴⁰⁰⁰⁰" ohne Erklärung, woher sie stammen und was sie voraussetzen – ein Fachmann fragt sofort nach den Annahmen.`,
    `Behaupten, Wahrscheinlichkeitsargumente seien „mathematisch bewiesen" – sie beruhen auf empirischen Schätzungen, die man offenlegen muss.`,
  ],
  concessions: [
    `Unwahrscheinlichkeit allein ist tatsächlich kein Beleg; ohne Spezifikation ist das Argument wertlos.`,
    `Die Kritik an Dembskis Formalismus (Unschärfe der Spezifikation, unbekannte Wahrscheinlichkeiten) ist teilweise berechtigt.`,
    `Wo natürliche Selektion wirkt, sind „reine Zufallsrechnungen" unangemessen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'William A. Dembski & Winston Ewert', work: 'The Design Inference: Eliminating Chance through Small Probabilities (2. Aufl.)', year: '2023', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2004', status: 'paraphrase' },
    { kind: 'gegner', author: 'David J. Hand', work: 'The Improbability Principle', year: '2014', status: 'paraphrase' },
    { kind: 'gegner', author: 'Elliott Sober', work: 'Evidence and Evolution: The Logic Behind the Science', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Wahrscheinlichkeit', 'Spezifikation', 'Design-Inferenz', 'Zufall', 'Bayes'],
  related: [
    'feinabstimmung/multiversum',
    'feinabstimmung/feinabstimmung-illusion',
    'ursprung-des-lebens/genug-zeit',
    'chemie-biochemie/dna-ist-keine-information',
    'evolution/neue-proteine-leicht',
    'atheismus/wer-schuf-gott',
  ],
};

export default claim;
