import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nichtreduzierbare-komplexitaet-widerlegt',
  title: `„Nichtreduzierbare Komplexität ist widerlegt (Flagellum, Typ-III-Sekretionssystem)."`,
  proponents: [
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University; Sachverständiger im Dover-Prozess; katholischer Christ', work: '„The Flagellum Unspun: The Collapse of ‚Irreducible Complexity‘", in: Dembski & Ruse (Hg.), Debating Design (2004)' },
    { name: 'Nicholas J. Matzke', role: 'Evolutionsbiologe (früher National Center for Science Education), University of Auckland', work: 'Pallen & Matzke, „From The Origin of Species to the origin of bacterial flagella", Nature Reviews Microbiology 4 (2006)' },
    { name: 'Mark J. Pallen', role: 'Mikrobiologe', work: 'Pallen & Matzke 2006' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Behe definierte ein nichtreduzierbar komplexes System als eines, bei dem das Entfernen eines Teils die Funktion zerstört – und folgerte, es könne nicht schrittweise entstanden sein. Doch das übersieht indirekte Wege: Teile können vorher andere Aufgaben gehabt haben (Kooption), Gerüste können später wegfallen, Systeme können zuerst redundant und dann unverzichtbar werden – das hat der Genetiker Hermann J. Muller schon vor über hundert Jahren beschrieben. Beim Flagellum zeigt sich genau das: Ein Teil seiner Proteine bildet ein eigenständig funktionierendes Injektionssystem (Typ-III-Sekretionssystem), andere Komponenten haben Verwandte in Transport- und Motorproteinen. Pallen und Matzke haben ein plausibles Szenario skizziert, Abby und Rocha (2012) zeigen, dass sich eine komplexe molekulare Maschine in eine andere, gleich komplexe verwandeln kann. Behes Argument ist damit im Kern ein Argument aus Unwissen – und im Dover-Prozess 2005 konnte er die vorgelegte Fachliteratur zur Evolution des Immunsystems nicht entkräften.`,
  biblical: {
    summary: `Die Schrift preist die kunstvolle Gestaltung der Geschöpfe (Ps 139,14; Hiob 38–39) und lehrt, dass Gottes Kraft „an den Werken" erkennbar ist (Röm 1,20). Sie macht aber den Glauben nicht von einem einzelnen biologischen Beispiel abhängig. Ob das Flagellum ein gutes Design-Argument ist, ist eine wissenschaftliche Frage; dass die Schöpfung Weisheit verrät, ist eine Aussage des Glaubens, die nicht mit einem Molekül steht oder fällt.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '139,14', translation: 'Luther 1912', status: 'verbatim', quote: `Ich danke dir darüber, daß ich wunderbar gemacht bin; wunderbar sind deine Werke, und das erkennt meine Seele wohl.` },
      { kind: 'bibel', work: 'Römer', ref: '1,20', translation: 'Luther 1912', status: 'verbatim', quote: `Denn sein unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.` },
      { kind: 'bibel', work: 'Weisheit', ref: '13,5', translation: 'Luther 1912 (Apokryphen)', status: 'paraphrase', quote: `Aus der Größe und Schönheit der Geschöpfe wird durch Vergleich ihr Schöpfer erkannt.`, note: 'Das Buch der Weisheit gehört zum Kanon der koptischen Kirche.' },
    ],
  },
  church: {
    summary: `Die Väter sahen in der Ordnung der Schöpfung einen Hinweis auf den Logos, nicht in einzelnen „Lücken". Athanasius vergleicht die Schöpfung mit Schriftzeichen, die auf ihren Verfasser verweisen. Für die koptische Kirche ist das Design-Argument daher eine **Ergänzung** der natürlichen Theologie, kein Glaubensartikel: Selbst wenn ein bestimmtes System eines Tages schrittweise erklärt würde, bliebe die Frage, warum die Welt überhaupt so geordnet ist, dass solche Systeme möglich sind.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '34–35', status: 'paraphrase', quote: `Gott hat die Schöpfung so geordnet, dass man durch ihre Ordnung und Harmonie den Schöpfer erkennen kann, wie man aus einem Werk auf den Künstler schließt.` },
    ],
  },
  opposingView: {
    summary: `In der Biologie gilt das Argument der nichtreduzierbaren Komplexität weithin als widerlegt, weil indirekte Evolutionswege (Kooption, Gerüstabbau, Funktionswechsel) grundsätzlich möglich sind und viele Flagellenproteine Homologe in anderen Systemen haben. Ehrlich ist aber auch: Ein vollständiger, Schritt für Schritt belegter Weg mit Selektionsvorteilen für jeden Zwischenschritt liegt für das Flagellum nicht vor. Phylogenomische Analysen sprechen zudem eher dafür, dass das nicht-flagelläre Typ-III-Sekretionssystem **aus** dem Flagellum entstanden ist und nicht umgekehrt (Abby & Rocha 2012).`,
    detail: `- **Darwin selbst** formulierte das Kriterium: Ließe sich ein komplexes Organ nachweisen, das nicht durch zahlreiche, aufeinanderfolgende, leichte Veränderungen entstanden sein kann, würde seine Theorie zusammenbrechen.
- **Homologie ist nicht gleich Weg:** Dass einzelne Teile Verwandte haben, zeigt gemeinsamen Ursprung von Bausteinen, nicht den Bauweg des Ganzen.
- **Abby & Rocha (2012):** Das T3SS (Injektisom) entstand nach ihrer Analyse durch Umnutzung eines Teils des Flagellums – damit taugt das T3SS nicht als Vorstufe des Flagellums. Die Autoren betonen zugleich, dass dies zeige, wie eine komplexe Maschine durch Deletionen, Neuerungen und Rekrutierung in eine andere übergehen kann.`,
    sources: [
      { kind: 'wissenschaft', author: 'Sophie S. Abby, Eduardo P. C. Rocha', work: '„The non-flagellar type III secretion system evolved from the bacterial flagellum and diversified into host-cell adapted systems", PLoS Genetics 8 (9)', ref: 'e1002983', year: '2012', status: 'paraphrase', quote: `Das nicht-flagelläre T3SS entstand durch Exaptation eines Teils der Flagellenstruktur; eine Vorläuferform ohne die für Beweglichkeit wesentlichen Elemente existiert noch bei Myxococcales.`, url: 'https://doi.org/10.1371/journal.pgen.1002983', note: 'Die Autoren sind keine ID-Vertreter; ihre Arbeit widerlegt aber die populäre Behauptung, das T3SS sei die Vorstufe des Flagellums.' },
      { kind: 'gegner', author: 'Mark J. Pallen, Nicholas J. Matzke', work: '„From The Origin of Species to the origin of bacterial flagella", Nature Reviews Microbiology 4 (10)', ref: 'S. 784–790', year: '2006', status: 'paraphrase', quote: `Das Flagellum sei kein einheitliches System, sondern eine Familie variabler Strukturen mit homologen Teilen; ein schrittweiser Ursprung sei plausibel.` },
      { kind: 'gegner', author: 'Charles Darwin', work: 'On the Origin of Species', ref: 'Kap. 6 (1. Aufl.)', year: '1859', status: 'verbatim', quote: `Ließe sich nachweisen, dass irgendein komplexes Organ existiert, das unmöglich durch zahlreiche, aufeinanderfolgende, leichte Veränderungen entstanden sein kann, so würde meine Theorie völlig zusammenbrechen.`, original: `If it could be demonstrated that any complex organ existed, which could not possibly have been formed by numerous, successive, slight modifications, my theory would absolutely break down.`, translation: 'eigene Übersetzung' },
    ],
  },
  quickAnswer: `Dass ein Teil des Flagellums eine andere Funktion haben kann, zeigt noch keinen Bauweg zum ganzen Rotationsmotor. Neuere Analysen (Abby & Rocha 2012) sprechen sogar dafür, dass das Typ-III-Sekretionssystem aus dem Flagellum entstanden ist – also gerade keine Vorstufe war. Einen Schritt für Schritt belegten Weg mit Vorteilen für jede Zwischenstufe gibt es bis heute nicht. Nichtreduzierbare Komplexität ist daher nicht „widerlegt", sondern eine offene Herausforderung.`,
  keyPoints: [
    `**Teilfunktion ist kein Bauweg:** Dass 10 der rund 30–40 Flagellenproteine ein Injektionssystem bilden, erklärt nicht, wie der Rest – Rotor, Stator, Haken, Filament, Montagesteuerung – schrittweise hinzukam.`,
    `**Die Abstammungsrichtung spricht gegen Miller:** Laut Abby & Rocha (2012) entstand das T3SS aus dem Flagellum, nicht umgekehrt.`,
    `**Homologie zeigt gemeinsame Bausteine, nicht den Weg.** Ein Bauplan mit Standardteilen ist auch das Kennzeichen von Ingenieursarbeit.`,
    `**Indirekte Wege sind möglich, aber teuer:** Jede Kooption erfordert gleichzeitige Anpassungen mehrerer Teile (Andockstellen, Zusammenbaureihenfolge).`,
    `**Darwins eigenes Kriterium** zeigt, dass das Argument wissenschaftlich prüfbar ist – also kein „Glaubensargument".`,
    `**Positiver Schluss:** Integrierte, mehrteilige Funktionssysteme kennen wir aus Erfahrung nur als Produkte von Intelligenz.`,
  ],
  argument: {
    name: 'Das Argument der nichtreduzierbaren Komplexität (Behe)',
    summary: 'Ein abduktiver Schluss vom Aufbau integrierter molekularer Maschinen auf Design.',
    premises: [
      { text: `P1: Ein System ist nichtreduzierbar komplex, wenn es aus mehreren aufeinander abgestimmten Teilen besteht und das Entfernen eines Teils seine Grundfunktion zerstört.`, support: `Beim bakteriellen Flagellum fallen bei Mutation vieler Strukturgene Beweglichkeit oder Zusammenbau aus (genetische Knock-out-Studien).` },
      { text: `P2: Ein solches System kann nicht auf direktem Weg (durch schrittweise Verbesserung derselben Funktion) entstehen.`, support: `Die Zwischenstufen hätten die Grundfunktion noch nicht.` },
      { text: `P3: Indirekte Wege (Kooption) erfordern das koordinierte Umbauen mehrerer Teile und werden mit der Teilezahl rasch unwahrscheinlich; für das Flagellum ist kein solcher Weg im Detail nachgewiesen.`, support: `Pallen & Matzke liefern ein Szenario, keinen experimentell belegten Weg; Abby & Rocha kehren die angenommene Richtung T3SS → Flagellum um.` },
      { text: `P4: Intelligente Akteure bringen erfahrungsgemäß integrierte, mehrteilige Funktionssysteme hervor.`, support: `Motoren, Pumpen, Montagelinien – der einzige beobachtete Ursprung solcher Systeme ist Planung.` },
    ],
    conclusion: `Design ist die beste derzeit verfügbare Erklärung für das bakterielle Flagellum – solange kein detaillierter, plausibler ungelenkter Weg gezeigt wird.`,
  },
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker, Urheber des Begriffs',
      text: `Behe betont, dass seine Definition auf die Grundfunktion des Gesamtsystems zielt: Beim Flagellum ist das die Rotation zur Fortbewegung. Dass Teile anderswo eine andere Funktion haben, war ihm bekannt; entscheidend sei, ob sich ein durchgängiger Weg zeigen lasse, auf dem jede Zwischenstufe einen Vorteil bietet und die nötigen gleichzeitigen Anpassungen realistisch sind. Seine Kritik an Kooptions-Szenarien: Sie benennen Kandidaten für Bausteine, rechnen aber nicht aus, wie viele koordinierte Änderungen nötig wären, um sie passend zusammenzufügen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: "Darwin's Black Box: The Biochemical Challenge to Evolution", year: '1996 (Neuauflage 2006 mit Nachwort)', status: 'paraphrase', quote: `Ein nichtreduzierbar komplexes System besteht aus mehreren gut aufeinander abgestimmten, interagierenden Teilen, die zur Grundfunktion beitragen; das Entfernen eines Teils lässt das System praktisch funktionsunfähig werden.` },
      ],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker mit Blick auf Konstruktionsprinzipien',
      text: `Brian Miller lenkt den Blick vom Bauteil auf den Bauablauf: Das Flagellum wird in einer streng geregelten Reihenfolge montiert, mit Kontrollpunkten, die erst die nächsten Gene aktivieren, wenn ein Bauabschnitt fertig ist. Solche Regelkreise kennt man aus der Systemtechnik. Ein Szenario, das nur fragt, woher die Teile kommen, aber nicht, woher Montageplan und Steuerlogik stammen, erklärt nach Miller nur einen Bruchteil des Problems.`,
      sources: [
        { kind: 'fachliteratur', author: 'Brian Miller', work: 'Beiträge zu Systembiologie und Design auf evolutionnews.org und in Thinking about Evolution (Hg. Discovery Institute)', status: 'unverified', note: 'Fundstellen vor Verwendung genau prüfen; das Argument zur hierarchischen Genregulation beim Flagellenaufbau ist in der Mikrobiologie unstrittig.' },
      ],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer stellt klar, dass das Design-Argument kein Argument aus Unwissen ist, sondern ein Schluss auf die beste Erklärung: Gesucht ist eine Ursache, von der wir aus Erfahrung wissen, dass sie integrierte, funktional spezifizierte Systeme hervorbringt. Für Motoren, Codes und Steuerungen kennen wir genau eine solche Ursache – Intelligenz. Der Hinweis auf mögliche Vorläufer einzelner Teile ersetzt nicht den Nachweis, dass ein ungelenkter Prozess das Gesamtsystem realistisch zusammenfügen kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
      ],
    },
    {
      person: 'paley',
      role: 'als klassischer Vertreter des Design-Arguments',
      text: `Paleys berühmte Uhr-Analogie zielt auf genau diesen Punkt: Eine Uhr verrät ihren Konstrukteur nicht durch ein einzelnes Rädchen, sondern durch das Zusammenwirken vieler Teile zu einem Zweck. Paleys Biologie ist in vielem überholt, aber seine Grundbeobachtung – dass funktionale Integration auf Planung verweist – ist durch die Entdeckung molekularer Maschinen in neuer Weise aktuell geworden.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Paley', work: 'Natural Theology', ref: 'Kap. 1–2', year: '1802', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater',
      text: `Athanasius argumentiert nicht mit einzelnen Organen, sondern mit der Ordnung des Ganzen: Wie man aus einer Stadt mit geordneten Straßen und Gesetzen auf einen Herrscher schließt, so aus der Harmonie der Welt auf den Logos. Das bewahrt vor einer Engführung: Das christliche Zeugnis hängt nicht am Flagellum, wohl aber an der Einsicht, dass die erkennbare Ordnung der Natur auf Vernunft verweist.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '38–39', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 't3ss-teilfunktion',
      objection: `Das Typ-III-Sekretionssystem besteht aus einem Teil der Flagellenproteine und funktioniert trotzdem – als Giftspritze. Also ist das Flagellum nicht nichtreduzierbar: Nimm Teile weg, und du hast immer noch eine Funktion.`,
      objectionBy: 'Kenneth Miller',
      targetsPremise: 1,
      answer: `Behes Definition bezieht sich auf die Grundfunktion des Gesamtsystems – die Fortbewegung durch Rotation. Dass ein Teil davon eine andere Funktion hat, zeigt nicht, wie aus diesem Teil schrittweise der Motor wurde. Und neuere Analysen (Abby & Rocha 2012) sprechen dafür, dass das T3SS **aus** dem Flagellum entstanden ist – dann war es gar keine Vorstufe.`,
      followUps: [
        {
          id: 'abby-rocha-zeigt-umwandlung',
          objection: `Gerade Abby & Rocha zeigen, dass sich eine komplexe Maschine durch Deletionen und Rekrutierung in eine andere komplexe Maschine verwandelt hat. Das ist doch genau, was Behe bestreitet!`,
          objectionBy: 'Nick Matzke',
          targetsPremise: 3,
          answer: `Sie zeigen, dass aus einem vorhandenen Flagellum durch Verlust von Teilen und Umbau ein Injektionssystem wurde. Das passt zu Behes späterer These, dass Abbau und Umnutzung bestehender Teile leicht sind. Die offene Frage bleibt die ursprüngliche Konstruktion des Flagellums selbst – und dazu liefert die Arbeit keinen Weg, weil sie das Flagellum als Ausgangspunkt voraussetzt.`,
          followUps: [
            {
              id: 'pallen-matzke-szenario',
              objection: `Unser Modell von 2006 skizziert plausible Schritte: Sekretionssystem, Adhäsionsfilament, Motor aus Ionenkanälen. Fast jedes Teil hat Homologe.`,
              objectionBy: 'Nick Matzke',
              targetsPremise: 3,
              answer: `Ein plausibles Szenario ist ein Forschungsprogramm, kein Nachweis. Es benennt Kandidaten für Bausteine, aber nicht die konkreten Mutationen, die Zwischenstufen mit ihren Vorteilen oder die Wahrscheinlichkeiten der nötigen gleichzeitigen Anpassungen. Außerdem haben nicht alle Flagellenproteine bekannte Homologe außerhalb von Flagellensystemen. Homologie zeigt gemeinsame Bausteine – Ingenieure verwenden auch Standardteile.`,
              followUps: [
                {
                  id: 'id-stoppt-forschung',
                  objection: `Fehlende Details sind keine Gegenbelege. ID will nur, dass wir aufhören zu forschen und „Gott war's" sagen.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Niemand muss aufhören zu forschen – im Gegenteil: Die Erforschung des Flagellenaufbaus mit Kryo-Elektronentomografie hat immer mehr Feinmechanik zutage gefördert. Ein Design-Ansatz fragt: Wie funktioniert dieses System, welche Konstruktionsprinzipien stecken darin? Das ist eine fruchtbare Frage. Was ich ablehne, ist nur die Behauptung, das Problem sei bereits „gelöst".`,
                  questionsBack: [
                    `Welche konkrete Forschung hat ID-Denken je verhindert?`,
                    `Würdest du zugeben, dass ein vollständiger Weg mit Selektionsvorteilen für jeden Schritt bisher nicht gezeigt wurde?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'muller-gerust',
      objection: `Schon Hermann Muller hat 1918 erklärt, wie Teile zuerst nützlich und dann unverzichtbar werden: Ein Teil wird hinzugefügt, später passen sich die anderen an, und schließlich geht ohne ihn nichts mehr. Nichtreduzierbarkeit ist ein erwartetes Ergebnis der Evolution.`,
      objectionBy: 'Jerry Coyne',
      targetsPremise: 2,
      answer: `Mullers Mechanismus ist logisch möglich und kann für manche Systeme zutreffen. Aber „möglich" heißt nicht „gezeigt". Für jedes konkrete System muss man nachweisen, welche Teile wann dazukamen, welchen Vorteil sie jeweils brachten und wie viele gleichzeitige Anpassungen nötig waren. Behe bestreitet nicht, dass Abhängigkeiten entstehen können – er bestreitet, dass dies für hochintegrierte Maschinen wie das Flagellum realistisch belegt ist.`,
      followUps: [
        {
          id: 'mausefalle-krawattenklammer',
          objection: `Behes eigenes Beispiel, die Mausefalle, ist widerlegt: Nimm Teile weg, und du hast eine funktionierende Krawattenklammer.`,
          objectionBy: 'Kenneth Miller',
          answer: `Die Krawattenklammer zeigt, dass Teile einer Mausefalle anders genutzt werden können – aber nicht, wie aus der Klammer schrittweise eine Mausefalle wird, ohne dass jemand die Teile gezielt umformt und neu anordnet. Die Analogie illustriert eher, wie viel Planung nötig ist, um ein Teil in ein neues System einzupassen.`,
          followUps: [
            {
              id: 'mcdonald-mausefallen',
              objection: `John McDonald hat eine Reihe immer einfacherer Mausefallen gezeichnet, bis hinunter zu einem einzigen gebogenen Draht – jede davon fängt Mäuse. Nimmt man ein Teil weg und biegt den Rest um, funktioniert es weiter.`,
              objectionBy: 'Kenneth Miller',
              answer: `Das ist eine hübsche Illustration, aber sie bestätigt unfreiwillig den Punkt: Zwischen den Stufen muss jemand den Draht gezielt umbiegen, verlängern und neu anordnen – das ist intelligente Planung, keine blinde Variation. Behe hat geantwortet, dass gerade die Zahl und Präzision der nötigen Umformungen zwischen zwei Stufen das Problem ausmacht. Die Mausefalle war außerdem nur eine Veranschaulichung; das Argument steht und fällt mit den molekularen Systemen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Michael J. Behe', work: '„A Mousetrap Defended: Response to Critics" (Discovery Institute)', year: '2000', status: 'paraphrase', note: 'Antwort auf McDonalds Mausefallen-Reihe; Erscheinungsjahr nach Discovery-Institute-Archiv, nicht am Original geprüft.' },
              ],
              questionsBack: [
                `Wer hat in McDonalds Zeichnungen die Teile zwischen den Stufen umgebogen?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dover-buecherstapel',
      objection: `Im Dover-Prozess wurde Behe mit Dutzenden Büchern und Artikeln zur Evolution des Immunsystems konfrontiert. Er sagte, sie seien nicht ausreichend – das ist Realitätsverweigerung.`,
      objectionBy: 'Nick Matzke',
      answer: `Behe sagte nicht, die Literatur existiere nicht, sondern dass sie keine detaillierten, schrittweisen Wege mit Wahrscheinlichkeitsabschätzungen liefert. Ein Stapel Literatur ist kein Argument, solange niemand zeigt, wo darin der verlangte Nachweis steht. Und ein Richter entscheidet Rechtsfragen, nicht offene Fragen der Biochemie.`,
      followUps: [
        {
          id: 'doolittle-blutgerinnung',
          objection: `Russell Doolittle hat die Evolution der Blutgerinnungskaskade über Jahrzehnte rekonstruiert – durch Gen-Duplikationen.`,
          objectionBy: 'Kenneth Miller',
          answer: `Doolittles Arbeiten zeigen, dass die Gerinnungsfaktoren verwandt sind und durch Duplikationen entstanden sein könnten – das ist Homologie. Behe kritisierte, dass daraus noch kein gangbarer Weg mit funktionierenden Zwischenstufen folgt. In der öffentlichen Debatte der 1990er-Jahre wurde zudem ein Mausexperiment als Beleg angeführt, dessen Tiere nach Behes Darstellung keine funktionierende Gerinnung, sondern schwere Störungen zeigten. Die Frage nach dem Bauweg bleibt offen.`,
          sources: [
            { kind: 'gegner', author: 'Russell F. Doolittle', work: '„A Delicate Balance", Boston Review (Februar/März)', year: '1997', status: 'paraphrase', quote: `Doolittle führte Knock-out-Mäuse, denen sowohl Plasminogen als auch Fibrinogen fehlt, als Hinweis darauf an, dass sich Teile der Kaskade ohne Funktionsverlust entfernen lassen.`, note: 'Rezension von „Darwin\'s Black Box"; Behe wies später darauf hin, dass diesen Mäusen ein funktionierendes Gerinnungssystem fehlt. Kritiker (z. B. Panda\'s Thumb, 2005) halten Behes Lesart von Doolittle für unfair. Den genauen Wortlaut Doolittles nicht am Original geprüft.' },
            { kind: 'wissenschaft', author: 'Thomas H. Bugge u. a.', work: '„Loss of fibrinogen rescues mice from the pleiotropic effects of plasminogen deficiency", Cell 87', year: '1996', status: 'paraphrase', quote: `Das Fehlen von Fibrinogen verhindert die frühe Erkrankung und den vorzeitigen Tod plasminogendefizienter Mäuse – die doppelt defizienten Tiere können allerdings kein Fibringerinnsel bilden.`, note: 'Die von Doolittle angeführte Studie; Inhalt per Sekundärquellen bestätigt.' },
          ],
          followUps: [
            {
              id: 'wale-ohne-faktor-zwoelf',
              objection: `Wale und Delfine haben keinen funktionsfähigen Faktor XII, Kugelfische kommen mit noch weniger Faktoren aus, und Neunaugen haben nach Genomanalysen ein deutlich einfacheres Gerinnungssystem. Die Kaskade funktioniert also mit weniger Teilen – sie ist nicht nichtreduzierbar.`,
              objectionBy: 'Kenneth Miller',
              answer: `Behe hat in „Darwin's Black Box" ausdrücklich die Faktoren der Kontaktaktivierung (wie Faktor XII) aus seinem nichtreduzierbaren Kern ausgenommen; dass Wale ohne sie auskommen, bestätigt also eher seine Abgrenzung. Und das einfachere System der Neunaugen ist selbst eine mehrstufige Kaskade aus Gewebefaktor, Faktor X, Prothrombin und Fibrinogen. Ein einfacherer Verwandter ist kein Bauweg – er verschiebt die Frage nur auf ein kleineres, aber immer noch vielteiliges System.`,
              detail: `Fair bleiben: Doolittle und andere haben mit Genomvergleichen gezeigt, dass die Gerinnungssysteme verschiedener Wirbeltiere unterschiedlich viele Komponenten haben. Das ist ein echter Befund und passt zu der Vorstellung, dass Faktoren durch Duplikation hinzukamen. Entscheidend für Behes Argument ist aber nicht, ob es irgendwo ein kleineres System gibt, sondern ob man eine Folge funktionsfähiger Zwischenstufen mit selektierbarem Vorteil benennen kann – vom Fehlen jeder Kaskade bis zum Kernsystem aus Protease, Aktivator und Substrat. Diese Folge ist bis heute eine Rekonstruktion von Verwandtschaft, nicht ein nachgewiesener Weg.`,
              voices: [
                {
                  person: 'michael-behe',
                  role: 'als Biochemiker',
                  text: `Behe unterscheidet zwischen der Feststellung, dass Proteine verwandt sind, und der Erklärung, wie ein voneinander abhängiges System Schritt für Schritt entstand. Für die Gerinnung betont er, dass schon die einfachste denkbare Kaskade mehrere aufeinander abgestimmte Komponenten braucht – und dass eine unregulierte Gerinnung ebenso tödlich ist wie gar keine.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Michael J. Behe', work: "Darwin's Black Box", ref: 'Kap. 4', year: '1996', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Welche Funktion hatte das System, bevor die zweite Protease hinzukam – und wie wurde verhindert, dass es unkontrolliert gerinnt?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'argument-aus-unwissen',
      objection: `Nichtreduzierbare Komplexität ist ein klassisches Argument aus Unwissen: „Wir wissen nicht, wie es entstand, also war es Gott."`,
      objectionBy: 'Nathan Lents',
      targetsPremise: 4,
      answer: `Das Argument hat zwei Teile: einen negativen (bekannte ungelenkte Mechanismen sind nicht nachweislich ausreichend) und einen positiven (wir kennen eine Ursache, die solche Systeme regelmäßig erzeugt – Intelligenz). Das ist dieselbe Logik, mit der Archäologen ein Werkzeug von einem Kiesel unterscheiden. Ein Argument aus Unwissen hätte nur den ersten Teil.`,
      followUps: [
        {
          id: 'design-liefert-keine-forschung',
          objection: `Selbst wenn – Design-Denken bringt keine Forschungsergebnisse. Es ist wissenschaftlich unfruchtbar.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Die Systembiologie arbeitet ganz selbstverständlich mit Ingenieurskonzepten: Regelkreise, Modularität, Robustheit, Fehlerkorrektur. Uri Alon, kein ID-Vertreter, hat ein Lehrbuch über die „Konstruktionsprinzipien biologischer Schaltkreise" geschrieben. Wer Biologie als Ingenieurswerk betrachtet, stellt fruchtbare Fragen. Man kann das tun, ohne den Designer zu benennen – aber es zeigt, dass die Design-Perspektive Forschung fördert.`,
          sources: [
            { kind: 'wissenschaft', author: 'Uri Alon', work: 'An Introduction to Systems Biology: Design Principles of Biological Circuits', year: '2006 (2. Aufl. 2019)', status: 'paraphrase', note: 'Alon ist kein Vertreter von Intelligent Design; das Buch zeigt aber die Fruchtbarkeit des Ingenieursblicks.' },
          ],
        },
      ],
    },
    {
      id: 'avida-komplexe-merkmale',
      objection: `Lenski, Ofria, Pennock und Adami haben 2003 in Nature gezeigt, wie im Computerprogramm Avida komplexe Funktionen entstehen, die man Teil für Teil nicht mehr zerlegen kann. Nichtreduzierbare Komplexität entsteht also ganz natürlich – manchmal sogar über zwischenzeitlich schädliche Mutationen.`,
      objectionBy: 'Dan Stern Cardinale',
      answer: `Avida ist ein lehrreiches Experiment – aber lies das Kleingedruckte: Die komplexe Funktion EQU entstand nur, wenn die Programmierer einfachere Teilfunktionen gezielt belohnten. Ohne diese Zwischenbelohnungen entstand sie in keinem einzigen Lauf. Das zeigt genau, was Behe sagt: Komplexe Systeme entstehen schrittweise nur, wenn jeder Schritt selbst einen Vorteil bringt. Ob es diese Schritte in der Biochemie gibt, ist die offene Frage – die Simulation setzt sie voraus.`,
      detail: `Die Autoren berichten selbst, dass EQU in Kontrollumgebungen ohne Belohnung der einfacheren logischen Funktionen nicht auftrat. Die Informatiker Winston Ewert, William Dembski und Robert Marks analysierten Avida später im Detail und argumentierten, dass die Erfolgsrate stark von der vorgegebenen Belohnungsstruktur abhängt – also von Information, die das Programm von außen mitbringt. Außerdem sind Avida-Organismen kurze Befehlsfolgen in einem für Mutationen sehr toleranten Raum; Proteine sind dagegen dreidimensionale Faltungen, bei denen die meisten Sequenzen gar keine stabile Struktur bilden.`,
      voices: [
        {
          person: 'robert-marks',
          role: 'als Informationstechniker',
          text: `Marks untersucht evolutionäre Suchalgorithmen und betont, dass jede erfolgreiche Suche nur so gut ist wie die Information, die in Zielvorgabe und Belohnungsstruktur steckt. Avida liefert nach seiner Analyse kein Gegenbeispiel, sondern ein Beispiel dafür, dass „aktive Information" vom Programmierer kommt.`,
          sources: [
            { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'wissenschaft', author: 'Richard E. Lenski, Charles Ofria, Robert T. Pennock, Christoph Adami', work: '„The evolutionary origin of complex features", Nature 423', ref: 'S. 139–144', year: '2003', status: 'paraphrase', quote: `Die komplexe Funktion EQU entstand nur in Umgebungen, die einfachere Teilfunktionen belohnten.` },
      ],
      questionsBack: [
        `Wie oft entstand EQU in den Läufen, in denen die einfacheren Funktionen nicht belohnt wurden?`,
      ],
      followUps: [
        {
          id: 'v-atpase-thornton',
          objection: `Dann nimm echte Biochemie: Joe Thorntons Labor hat 2012 in Nature rekonstruiert, wie der Ring der V-ATPase in Pilzen von zwei auf drei unverzichtbare Komponenten anwuchs – durch Genduplikation und wenige Mutationen. Das ist ein Zuwachs an nichtreduzierbarer Komplexität, Schritt für Schritt belegt.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Ein elegantes Experiment, das ich ernst nehme. Aber schau auf den Mechanismus: Nach der Duplikation verlor jede Kopie die Fähigkeit, an einer bestimmten Stelle des Rings zu binden – erst dadurch wurden beide unverzichtbar. Die Komplexität wuchs also durch **Verlust** von Bindungsfähigkeiten, nicht durch den Bau neuer Schnittstellen. Das passt genau zu Behes These, dass Abbau leicht ist; die Entstehung des Rings selbst und seiner Rotationsmechanik bleibt unberührt.`,
          voices: [
            {
              person: 'michael-behe',
              role: 'als Biochemiker',
              text: `Behe hat die Arbeit von Finnigan, Thornton und Kollegen ausdrücklich gewürdigt und zugleich darauf hingewiesen, dass die neue Abhängigkeit durch den Verlust vorhandener Bindungsflächen entstand. Für ihn ist das ein Beispiel für seine „erste Regel der adaptiven Evolution": Funktionen werden leichter zerstört oder eingeschränkt als neu aufgebaut.`,
              sources: [
                { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', year: '2019', status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'wissenschaft', author: 'Gregory C. Finnigan, Victor Hanson-Smith, Tom H. Stevens, Joseph W. Thornton', work: '„Evolution of increased complexity in a molecular machine", Nature 481', year: '2012', status: 'paraphrase', quote: `Ein dritter Ringbaustein der V-ATPase wurde unverzichtbar, nachdem duplizierte Kopien komplementär Bindungsflächen verloren hatten.` },
          ],
          followUps: [
            {
              id: 'konstruktive-neutrale-evolution',
              objection: `Genau das nennen wir konstruktive neutrale Evolution: Teile werden durch Verluste voneinander abhängig, ganz ohne Selektion. Gray, Lukeš, Doolittle und andere haben 2010 in Science gezeigt, wie leicht so nichtreduzierbare Komplexität entsteht.`,
              objectionBy: 'Larry Moran',
              answer: `Konstruktive neutrale Evolution erklärt, wie bereits **vorhandene**, zusammenwirkende Teile voneinander abhängig werden können. Sie erklärt nicht, woher die Teile und ihre gemeinsame Funktion kommen – ein Motor, der sich dreht, eine Pumpe, die Protonen bewegt. Wenn also Abhängigkeit billig ist, aber Funktion teuer, dann ist die eigentliche Frage nicht die Unverzichtbarkeit, sondern der Ursprung der Funktion. Und genau dafür liefert der Mechanismus keine Antwort.`,
              detail: `Das Science-Essay von 2010 trug bezeichnenderweise den Titel „Irremediable Complexity?" und bezog sich vor allem auf zelluläre Komplexe wie das Spleißosom. Die Autoren argumentieren, dass sich Komplexität durch neutrale Abhängigkeiten wie mit einer Ratsche erhöhen kann. Für den Laien wichtig: Das ist eine ernsthafte Hypothese aus der Fachwelt, kein Strohmann – aber sie setzt funktionierende Maschinen voraus und erklärt ihre Vernetzung, nicht ihre Erfindung.`,
              sources: [
                { kind: 'wissenschaft', author: 'Michael W. Gray, Julius Lukeš, John M. Archibald, Patrick J. Keeling, W. Ford Doolittle', work: '„Irremediable complexity?", Science 330', ref: 'S. 920–921', year: '2010', status: 'paraphrase', quote: `Zelluläre Komplexität kann durch neutrale Abhängigkeiten zwischen vorhandenen Komponenten ratschenartig zunehmen.` },
              ],
              questionsBack: [
                `Erklärt konstruktive neutrale Evolution, warum ein Flagellum sich dreht – oder nur, warum seine Teile voneinander abhängen?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gibt es einen veröffentlichten, Schritt für Schritt belegten Weg zum Flagellum mit Selektionsvorteil für jede Zwischenstufe?`,
    `Wenn das T3SS aus dem Flagellum entstand (Abby & Rocha 2012) – wie kann es dann seine Vorstufe sein?`,
    `Woher kommen Montagereihenfolge und Steuerlogik des Flagellenaufbaus?`,
    `Welches Ergebnis würde dich überzeugen, dass ein System tatsächlich nicht schrittweise entstanden sein kann – oder ist das prinzipiell ausgeschlossen?`,
  ],
  avoid: [
    `„Das Flagellum hat 40 Teile, also ist die Wahrscheinlichkeit 1 zu 10^X." – Ohne Berücksichtigung möglicher Kooption wirkt das naiv.`,
    `„Kein Teil des Flagellums hat eine andere Funktion." – Falsch; das T3SS und weitere Homologe sind gut belegt.`,
    `Das Flagellum als „Gottesbeweis" präsentieren. Es ist ein Indiz für Design, kein Beweis für den Gott der Bibel.`,
  ],
  concessions: [
    `Viele Flagellenproteine haben Verwandte in anderen Systemen; indirekte Evolutionswege sind grundsätzlich denkbar.`,
    `Die Mehrheit der Biologen hält das Argument für widerlegt; ID-Vertreter sind hier in der Minderheit.`,
    `Aus dem Fehlen eines Weges allein folgt kein Design – das Argument braucht seinen positiven Teil.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: "Darwin's Black Box", year: '1996/2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'William A. Dembski, Michael Ruse (Hg.)', work: 'Debating Design: From Darwin to DNA (mit Beiträgen von Behe und Miller)', year: '2004', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Sophie S. Abby, Eduardo P. C. Rocha', work: 'PLoS Genetics 8 (9), e1002983', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Nichtreduzierbare Komplexität', 'Flagellum', 'Typ-III-Sekretionssystem', 'Kooption', 'Behe'],
  related: [
    'evolution/mutation-selektion-erklaeren-alles',
    'evolution/id-keine-wissenschaft',
    'chemie-biochemie/dna-ist-keine-information',
    'naturalismus/lueckenbuesser-gott',
  ],
};

export default claim;
