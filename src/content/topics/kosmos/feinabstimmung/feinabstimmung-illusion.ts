import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'feinabstimmung-illusion',
  title: `„Die Feinabstimmung ist eine Illusion."`,
  proponents: [
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker, University of Hawaii', work: 'The Fallacy of Fine-Tuning: Why the Universe Is Not Designed for Us (2011)' },
    { name: 'Sabine Hossenfelder', role: 'Theoretische Physikerin, Wissenschaftskommunikatorin', work: 'Lost in Math: How Beauty Leads Physics Astray (2018)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'Debatte mit W. L. Craig (2014); The Big Picture (2016)' },
    { name: 'Fred C. Adams', role: 'Astrophysiker, University of Michigan', work: '„The Degree of Fine-Tuning in Our Universe – and Others", Physics Reports (2019)' },
  ],
  steelman: `Die angebliche Feinabstimmung beruht auf drei Fehlern. Erstens variiert man meist nur eine Konstante und lässt die anderen fest; verändert man mehrere gleichzeitig, öffnen sich weite lebensfreundliche Bereiche – Stenger zeigte das mit seinem Programm „MonkeyGod", Adams für die Existenz von Sternen. Zweitens wissen wir nicht, welche Werte die Konstanten überhaupt hätten annehmen können; ohne Wahrscheinlichkeitsverteilung ist „unwahrscheinlich" ein leeres Wort (Hossenfelder; McGrew, McGrew und Vestrup). Vielleicht legt eine tiefere Theorie die Werte fest wie die Mathematik den Wert von π. Drittens sind mehrere Paradebeispiele bei genauerem Hinsehen eingebrochen: Hoyles „anthropische" Vorhersage war historisch keine, ein gebundenes Diproton hätte nicht allen Wasserstoff verbrannt, und es wurde ein Universum ganz ohne schwache Kernkraft konstruiert, das trotzdem Sterne und Chemie hat. Feinabstimmung ist eher ein Mangel an Vorstellungskraft als eine Eigenschaft der Natur.`,
  biblical: {
    summary: `Die Schrift beschreibt die Welt als von Gott mit Maß und Ordnung eingerichtet: „Du hast alles geordnet mit Maß, Zahl und Gewicht" (Weish 11,20). Gott hat die Erde nicht „leer" gemacht, sondern „bereitet, dass man darauf wohnen solle" (Jes 45,18). Die „Ordnungen des Himmels und der Erde" sind Ausdruck seiner Treue (Jer 33,25). Die Feinabstimmung ist keine biblische Lehre, aber sie passt genau zu diesem Bild eines Kosmos, der auf Leben hin angelegt ist.`,
    detail: `- **Weish 11,20** (deuterokanonisch, Zählung je nach Ausgabe 11,20/21): Maß, Zahl, Gewicht – Augustinus hat diesen Vers oft zitiert.
- **Jes 45,18:** Die Bewohnbarkeit ist Ziel der Schöpfung.
- **Hiob 38,33:** „Weißt du des Himmels Ordnungen?" – Gott verweist Hiob auf die Gesetzmäßigkeit des Kosmos.
- **Röm 1,20:** Gottes Kraft und Gottheit werden an den Werken der Schöpfung wahrgenommen.

Wichtig: Der Glaube an den Schöpfer hängt nicht an einer einzelnen Zahl. Wenn sich ein Beispiel als schwächer erweist, fällt nicht der Glaube – sondern nur dieses Beispiel.`,
    sources: [
      { kind: 'bibel', work: 'Weisheit', ref: '11,20', quote: `Aber du hast alles geordnet mit Maß, Zahl und Gewicht.`, translation: 'Luther 1912', status: 'verbatim', note: 'Versnummerierung je nach Ausgabe 11,20 oder 11,21.' },
      { kind: 'bibel', work: 'Jesaja', ref: '45,18', quote: `Denn so spricht der HERR, der den Himmel geschaffen hat, der Gott, der die Erde bereitet hat … und sie nicht gemacht hat, daß sie leer soll sein, sondern sie bereitet hat, daß man darauf wohnen solle.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `So spricht der HERR: Halte ich meinen Bund nicht mit Tag und Nacht noch die Ordnung des Himmels und der Erde …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,20', quote: `Damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter sahen in der Harmonie gegensätzlicher Kräfte einen Hinweis auf den einen Schöpfer. Der hl. Athanasius argumentiert in *Contra Gentes*, dass Elemente, die von Natur aus gegeneinander streben (Warm und Kalt, Feucht und Trocken), nicht von selbst zu einer stabilen Ordnung zusammenfinden würden; ihre Eintracht verweist auf einen ordnenden Logos. Das ist in vormoderner Sprache genau die Struktur des Feinabstimmungsarguments.`,
    detail: `Athanasius vergleicht den Kosmos mit einer Leier, deren Saiten so gestimmt sind, dass sie zusammen eine Harmonie ergeben, und mit einem Chor, in dem verschiedene Stimmen zu einem Lied verschmelzen (*Contra Gentes* 35–43). Basilius nennt die Welt eine „Schule", in der vernünftige Seelen Gott erkennen sollen (*Hexaemeron* 1,6).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '36–38', year: 'ca. 318', quote: `Gegensätzliche Elemente würden einander bekämpfen; dass sie in Harmonie bestehen, zeigt einen einzigen Ordner, der über ihnen steht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,6', year: 'ca. 370', quote: `Die Welt ist eine Schule und ein Übungsplatz, an dem vernünftige Seelen Gott erkennen lernen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass viele grundlegende Größen nur in engen Bereichen mit komplexem Leben vereinbar sind, ist in der Fachwelt weithin anerkannt – gerade auch von Nichttheisten. Martin Rees (*Just Six Numbers*, 1999), Leonard Susskind, Steven Weinberg und viele andere sehen darin ein echtes Erklärungsproblem und greifen deshalb zum Multiversum. Luke Barnes' Übersichtsartikel (*Publications of the Astronomical Society of Australia*, 2012) fasst die Literatur zusammen und zeigt, dass Stengers Einwände in zentralen Punkten nicht tragen. Umstritten ist nicht die physikalische Empfindlichkeit, sondern ihre Deutung – und bei einzelnen Beispielen der Grad der Empfindlichkeit.`,
    detail: `- **Kosmologische Konstante:** Der beobachtete Wert ist gemessen an naiven quantenfeldtheoretischen Abschätzungen extrem klein; je nach angenommener Energieskala ergibt sich eine Diskrepanz von etwa 50 bis 120 Größenordnungen (Weinberg, *Rev. Mod. Phys.* 61, 1989). Wäre sie deutlich größer, hätten sich keine Galaxien gebildet.
- **Anfangsentropie:** Penrose schätzt den Anteil des Phasenraums, der einem so geordneten Anfang entspricht, auf etwa 1 zu 10^(10^123) (*The Emperor's New Mind*, 1989).
- **Kohlenstoff:** Die Lage der Hoyle-Resonanz (7,65 MeV) ist empfindlich gegenüber der starken und elektromagnetischen Kraft (Oberhummer, Csótó & Schlattl, *Science* 289, 2000). Neuere Gitter-Rechnungen (Epelbaum u. a., *PRL* 110, 2013) zeigen Spielräume von wenigen Prozent bei den leichten Quarkmassen.
- **Ehrliche Korrekturen:** Ein gebundenes Diproton hätte nach MacDonald & Mullan (2009) nicht zwingend allen Wasserstoff verbrannt; Harnik, Kribs & Perez (2006) entwarfen ein Universum ohne schwache Wechselwirkung (bei Nachjustierung anderer Parameter); Adams (2019) findet für Sterne größere Spielräume. Der Wissenschaftshistoriker Helge Kragh hat gezeigt, dass Hoyles Vorhersage von 1953 erst später als „anthropisch" erzählt wurde.
- **Wahrscheinlichkeitsfrage:** Das Normierungsproblem (McGrew, McGrew & Vestrup, *Mind* 110, 2001) ist eine ernsthafte philosophische Debatte; Robin Collins und andere haben Antworten vorgelegt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Luke A. Barnes', work: '„The Fine-Tuning of the Universe for Intelligent Life", Publications of the Astronomical Society of Australia 29, 529–564', year: '2012', quote: `Übersicht über die Feinabstimmung der Konstanten und Anfangsbedingungen; Stengers Einwände werden im Einzelnen geprüft und in zentralen Punkten zurückgewiesen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Victor J. Stenger', work: 'The Fallacy of Fine-Tuning', year: '2011', quote: `Bei gleichzeitiger Variation mehrerer Konstanten sind langlebige Sterne und damit Leben in einem großen Teil des Parameterraums möglich.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Martin Rees', work: 'Just Six Numbers: The Deep Forces That Shape the Universe', year: '1999', quote: `Sechs Zahlen bestimmen die Struktur des Universums; wäre auch nur eine davon „verstimmt", gäbe es keine Sterne und kein Leben.`, status: 'paraphrase', note: 'Rees ist kein Theist; er favorisiert ein Multiversum.' },
      { kind: 'wissenschaft', author: 'Fred Hoyle', work: '„The Universe: Past and Present Reflections", Engineering and Science (Caltech)', year: 'November 1981', quote: `Eine vernünftige Deutung der Tatsachen legt nahe, dass eine Superintelligenz an der Physik wie auch an der Chemie und Biologie herumgebastelt hat und dass es in der Natur keine nennenswerten blinden Kräfte gibt.`, original: `A common sense interpretation of the facts suggests that a superintellect has monkeyed with physics, as well as with chemistry and biology, and that there are no blind forces worth speaking about in nature.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Hoyle war kein Christ; er dachte an eine kosmische Intelligenz, nicht an den Gott der Bibel. Seitenangabe vor Verwendung prüfen.' },
      { kind: 'wissenschaft', author: 'Steven Weinberg', work: '„The Cosmological Constant Problem", Reviews of Modern Physics 61, 1–23', year: '1989', quote: `Die beobachtete Vakuumenergie ist um viele Größenordnungen kleiner als theoretisch erwartet – das größte Feinabstimmungsproblem der Physik.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Heinz Oberhummer, Attila Csótó & Helmut Schlattl', work: '„Stellar Production Rates of Carbon and Its Abundance in the Universe", Science 289, 88–90', year: '2000', quote: `Schon Änderungen der starken Kraft um etwa 0,5 % oder der elektromagnetischen um etwa 4 % würden die Kohlenstoff- bzw. Sauerstoffproduktion in Sternen drastisch reduzieren.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Timothy McGrew, Lydia McGrew & Eric Vestrup', work: '„Probabilities and the Fine-Tuning Argument: A Sceptical View", Mind 110, 1027–1037', year: '2001', quote: `Bei unendlichem Wertebereich lässt sich keine normierte Gleichverteilung definieren; das Feinabstimmungsargument werde dadurch problematisch.`, status: 'paraphrase', note: 'Die Autoren sind selbst Christen – ein Beispiel für faire innerchristliche Kritik.' },
    ],
  },
  quickAnswer: `Dass unser Universum feinabgestimmt ist, ist keine Erfindung von Apologeten, sondern ein Befund, den führende Nichttheisten anerkennen: Martin Rees, Leonard Susskind, Steven Weinberg. Genau deshalb greifen sie zum Multiversum. Stenger war mit seiner Leugnung eine Minderheit, und der Astrophysiker Luke Barnes hat 2012 seine Fehler im Detail nachgewiesen. Ob man die Feinabstimmung mit Gott oder einem Multiversum erklärt, ist die eigentliche Debatte – die Tatsache selbst steht.`,
  keyPoints: [
    `**Kein Apologeten-Mythos:** Rees, Susskind und Weinberg – alle keine Theisten – erkennen die Feinabstimmung an und suchen nach einer Erklärung.`,
    `**Spitzenbeispiele:** kosmologische Konstante (je nach Annahme 50–120 Größenordnungen), Anfangsentropie (Penrose: 1 zu 10^(10^123)), Kohlenstoff-Resonanz.`,
    `**Stenger widerlegt:** Barnes (PASA 2012) zeigt, dass Stenger zu wenige Parameter und zu grobe Lebenskriterien betrachtete.`,
    `**Eine tiefere Theorie hilft nicht:** Legte eine „Theorie von allem" lebensfreundliche Werte fest, wäre die Feinabstimmung nur in die Theorie verschoben – unter allen denkbaren Theorien wäre sie die seltene, die Leben erlaubt.`,
    `**Ehrlich korrigieren:** Einige ältere Beispiele (Diproton, Hoyle-Geschichte) waren überzogen. Das Gesamtbild bleibt.`,
  ],
  argument: {
    name: 'Feinabstimmungsargument (Likelihood-Fassung nach Robin Collins)',
    summary: 'Die Lebensfreundlichkeit der Naturkonstanten ist unter Design wahrscheinlicher als unter einem einzigen, ungelenkten Universum.',
    premises: [
      {
        text: 'P1: Unter der Hypothese eines Schöpfers, der verkörperte, vernünftige Geschöpfe will, ist ein lebensfreundliches Universum nicht unerwartet.',
        support: `Ein vernünftiger, guter Schöpfer hätte Gründe, eine Welt zu schaffen, in der verkörperte moralische Wesen leben, handeln und die Welt erkennen können. Das setzt stabile Gesetze und lebensfreundliche Konstanten voraus.`,
      },
      {
        text: 'P2: Unter der Hypothese eines einzigen, ungelenkten Universums ist ein lebensfreundliches Universum sehr unwahrscheinlich.',
        support: `Die lebensfreundlichen Bereiche vieler Parameter sind im Vergleich zu den physikalisch sinnvollen Wertebereichen winzig (Barnes 2012; Rees 1999). Zufall müsste viele unabhängige Treffer zugleich erzielen.`,
        sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes', work: 'PASA 29', year: '2012', quote: `Der lebensfreundliche Bereich im Parameterraum ist sehr klein.`, status: 'paraphrase' }],
      },
      {
        text: 'P3: Ein Befund bestätigt diejenige von zwei Hypothesen, unter der er wahrscheinlicher ist (Likelihood-Prinzip).',
        support: `Dieses Prinzip verwenden wir in Wissenschaft, Rechtsprechung und Alltag ständig, etwa wenn ein Fingerabdruck einen Verdächtigen belastet.`,
      },
    ],
    conclusion: 'Die Feinabstimmung ist ein starker Beleg für einen Schöpfer gegenüber einem einzigen, zufälligen Universum. (Die Multiversum-Alternative wird gesondert behandelt.)',
  },
  voices: [
    {
      person: 'luke-barnes',
      role: 'als Astrophysiker',
      text: `Barnes hat in seinem Übersichtsartikel (2012) Stengers Buch Kapitel für Kapitel geprüft. Sein Ergebnis: Stenger untersuchte meist nur ein einziges Kriterium – etwa die Lebensdauer von Sternen – und ignorierte, dass ein lebensfreundliches Universum viele Bedingungen zugleich erfüllen muss: stabile Atome, Chemie, Sterne, Planeten, kosmische Strukturen. Wer mehrere Parameter gleichzeitig variiert, findet nicht weite lebensfreundliche Bereiche, sondern kleine Inseln. Barnes betont zugleich, dass Feinabstimmung zunächst ein physikalischer Befund ist – ihre Deutung ist ein weiterer Schritt.`,
      sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe: Life in a Finely Tuned Cosmos', year: '2016', quote: `Die Feinabstimmung ist ein robustes Ergebnis der Physik; die Frage ist, wie man sie erklärt.`, status: 'paraphrase' }],
    },
    {
      person: 'robin-collins',
      role: 'als Philosoph und Physiker',
      text: `Collins hat das Argument präzise als Likelihood-Vergleich formuliert und auf das Normierungsproblem geantwortet: Man braucht keine Wahrscheinlichkeitsverteilung über unendliche Wertebereiche, sondern nur über den „epistemisch erhellten" Bereich – die Werte, für die wir mit unserer Physik beurteilen können, ob Leben möglich wäre. Schon innerhalb dieses Bereichs ist der lebensfreundliche Anteil winzig. Zudem weist er darauf hin, dass die Feinabstimmung sich nicht auflöst, wenn eine tiefere Theorie die Konstanten festlegt – sie verschiebt sich auf die Ebene der Gesetze.`,
      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: Blackwell Companion to Natural Theology', year: '2009', quote: `Wahrscheinlichkeiten werden über den epistemisch erhellten Bereich bestimmt; dort ist der lebensfreundliche Anteil sehr klein.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater',
      text: `Athanasius sah in der Eintracht widerstreitender Elemente den Fingerabdruck des einen Logos. Feuer und Wasser, Warm und Kalt würden einander zerstören, wenn sie sich selbst überlassen wären; dass sie zusammen eine stabile Welt ergeben, verlangt nach einem, der sie ordnet. Seine Bilder – die gestimmte Leier, der vielstimmige Chor – beschreiben genau, was die moderne Physik „Feinabstimmung" nennt: viele unabhängige Größen, die zusammenpassen müssen, damit etwas Lebendiges entstehen kann.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '37–38; 42–43', year: 'ca. 318', quote: `Die Harmonie der Gegensätze im Kosmos zeigt den einen ordnenden Logos, wie die Harmonie einer Leier den Musiker zeigt.`, status: 'paraphrase' }],
    },
    {
      person: 'newton',
      role: 'als Begründer der klassischen Physik',
      text: `Newton schloss im *Allgemeinen Scholium* der zweiten Auflage seiner *Principia* (1713) aus der Anordnung des Sonnensystems – Planeten in nahezu gleicher Ebene und gleicher Umlaufrichtung – auf einen intelligenten Urheber. Heute wissen wir, dass sich manches davon physikalisch erklären lässt; Newtons Grundintuition hat sich aber auf eine tiefere Ebene verlagert: nicht die Bahnen der Planeten, sondern die Gesetze und Konstanten selbst zeigen die Abstimmung. (Newton wird hier nur als Naturforscher zitiert; seine antitrinitarischen Privatansichten teilt die Kirche nicht.)`,
      sources: [{ kind: 'wissenschaft', author: 'Isaac Newton', work: 'Philosophiae Naturalis Principia Mathematica, Scholium Generale', year: '1713', quote: `Dieses überaus schöne System von Sonne, Planeten und Kometen konnte nur aus dem Ratschluss und der Herrschaft eines intelligenten und mächtigen Wesens hervorgehen.`, original: `This most beautiful system of the sun, planets, and comets, could only proceed from the counsel and dominion of an intelligent and powerful Being.`, translation: 'nach der englischen Übersetzung von A. Motte (1729)', status: 'verbatim' }],
    },
    {
      person: 'polkinghorne',
      role: 'als Teilchenphysiker und Priester',
      text: `Polkinghorne betonte, dass die Feinabstimmung nicht einzelne Lücken betrifft, die die Wissenschaft schließen könnte, sondern die Grundlagen, auf denen jede wissenschaftliche Erklärung aufbaut. Ein Universum, das zur Fruchtbarkeit fähig ist, verlangt Gesetze von besonderer Art. Er hielt Design für die natürlichere Deutung, ohne daraus einen zwingenden Beweis zu machen: Das Argument macht den Glauben vernünftig, nicht überflüssig.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Religion in Quest of Truth', year: '2011', quote: `Die anthropische Feinabstimmung ist ein Hinweis auf einen Schöpfer, der einem fruchtbaren Universum seine Gesetze gibt – eine Einsicht, kein Zwangsbeweis.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'monkeygod-mehrere-parameter',
      objection: `Stenger hat mit seinem Programm „MonkeyGod" gezeigt: Wenn man mehrere Konstanten gleichzeitig variiert, sind lebensfreundliche Universen häufig. Die Feinabstimmung ist ein Artefakt der Ein-Parameter-Betrachtung.`,
      objectionBy: 'Victor Stenger',
      targetsPremise: 2,
      answer: `Stenger variierte nur vier Größen und prüfte im Wesentlichen ein einziges Kriterium: die Lebensdauer von Sternen. Ein lebensfreundliches Universum braucht aber vieles zugleich – stabile Atome, Chemie, Planeten, Strukturbildung. Barnes hat das 2012 im Detail gezeigt. Wer alle Kriterien berücksichtigt, findet nicht weite Felder, sondern kleine Inseln.`,
      sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes', work: 'PASA 29, 529–564', year: '2012', quote: `Stengers Analyse beschränkt sich auf wenige Parameter und Kriterien und übersieht die meisten Bedingungen für Leben.`, status: 'paraphrase' }],
      questionsBack: [`Welche Kriterien für Leben hat Stengers Programm geprüft – und welche nicht?`],
      followUps: [
        {
          id: 'adams-sterne-robust',
          objection: `Fred Adams hat 2019 in *Physics Reports* gezeigt, dass Sterne über große Bereiche der Konstanten funktionieren. Die Feinabstimmung ist also viel schwächer als behauptet.`,
          objectionBy: 'Fred C. Adams',
          answer: `Das ist ein ehrlicher Befund, und ich nehme ihn ernst: Manche Parameter sind weniger empfindlich als früher behauptet. Aber Sterne allein sind noch kein Leben, und zentrale Fälle wie die kosmologische Konstante und die Anfangsentropie bleiben bestehen. Feinabstimmung ist eine Kumulation vieler Bedingungen – nicht eine einzige Zahl.`,
          followUps: [
            {
              id: 'nicht-optimal-also-kein-design',
              objection: `Adams zeigt sogar, dass ein Universum noch lebensfreundlicher sein könnte. Ein Designer hätte es besser gemacht.`,
              objectionBy: 'Fred C. Adams / Sean Carroll',
              answer: `Design heißt nicht Maximierung einer einzigen Größe. Ein Schöpfer kann mehrere Ziele zugleich verfolgen – etwa ein Universum, das nicht nur bewohnbar, sondern auch erforschbar, stabil und für moralische Wesen geeignet ist. Ein Architekt baut auch kein Haus mit maximal vielen Fenstern.`,
              detail: `Robin Collins und Guillermo Gonzalez haben auf eine „Feinabstimmung für Entdeckbarkeit" hingewiesen: Unser Universum ist nicht nur lebensfreundlich, sondern auch auffallend gut erforschbar. Siehe den Claim „Das Universum ist fast überall lebensfeindlich".`,
            },
          ],
        },
      ],
    },
    {
      id: 'keine-wahrscheinlichkeitsverteilung',
      objection: `Wir haben keine Wahrscheinlichkeitsverteilung für die Naturkonstanten. Vielleicht konnten sie nur diese Werte haben. Ohne Verteilung ist „unwahrscheinlich" ein bedeutungsloses Wort.`,
      objectionBy: 'Sabine Hossenfelder',
      targetsPremise: 2,
      answer: `Drei Punkte. Erstens: Genau diese Art von Argument – „Natürlichkeit" – verwenden theoretische Physiker routinemäßig, etwa beim Hierarchieproblem; Hossenfelder kritisiert das konsequent, aber sie ist damit in der Minderheit. Zweitens reicht der Bereich, den wir physikalisch beurteilen können (Collins). Drittens: Wenn eine tiefere Theorie die Werte festlegt, ist eben diese Theorie die seltene, die Leben erlaubt.`,
      sources: [{ kind: 'gegner', author: 'Sabine Hossenfelder', work: 'Lost in Math', year: '2018', quote: `Natürlichkeitsargumente setzen eine Wahrscheinlichkeitsverteilung für Naturkonstanten voraus, die wir nicht kennen; sie sind ästhetische, keine empirischen Kriterien.`, status: 'paraphrase' }],
      questionsBack: [`Wenn eine tiefere Theorie die Konstanten festlegt: Ist es dann nicht erstaunlich, dass gerade diese Theorie lebensfreundliche Werte liefert?`],
      followUps: [
        {
          id: 'normierungsproblem',
          objection: `McGrew, McGrew und Vestrup haben gezeigt: Bei unendlichem Wertebereich kann man keine normierte Gleichverteilung definieren. Das Argument bricht mathematisch zusammen.`,
          objectionBy: 'Philosophische Fachdebatte',
          answer: `Das ist ein ernsthafter Einwand – interessanterweise von christlichen Philosophen. Antworten: Viele Konstanten haben natürliche Grenzen (etwa die Planck-Skala als Obergrenze für Energiedichten), sodass der Bereich nicht unendlich ist. Und Collins beschränkt die Wahrscheinlichkeit auf den physikalisch beurteilbaren Bereich. Zudem: Würde das Normierungsproblem das Argument töten, töte es auch die Natürlichkeitsargumente der Physik.`,
          followUps: [
            {
              id: 'dann-auch-naturalness-unwissenschaftlich',
              objection: `Gut – dann sind Natürlichkeitsargumente eben auch unwissenschaftlich. Genau das sage ich in „Lost in Math".`,
              objectionBy: 'Sabine Hossenfelder',
              answer: `Das ist konsequent, und ich schätze es. Dann musst du aber auch das Multiversum als Erklärung der Feinabstimmung ablehnen – was du tust. Und es bleibt ein Fall, in dem die Wahrscheinlichkeitsfrage gut definiert ist: die Anfangsentropie. Hier gibt es ein natürliches Maß (das Liouville-Maß im Phasenraum), und Penrose kommt auf 1 zu 10^(10^123).`,
              detail: `Hossenfelder hält sowohl Feinabstimmungs- als auch Multiversum-Argumente für unwissenschaftlich. Das neutralisiert die Feinabstimmung nicht, sondern erklärt sie zur rohen Tatsache – eine philosophische, keine physikalische Position.`,
            },
          ],
        },
        {
          id: 'theorie-von-allem',
          objection: `Vielleicht gibt es eine Theorie von allem, die alle Konstanten eindeutig festlegt – wie die Mathematik den Wert von π.`,
          objectionBy: 'Brian Greene / Steven Weinberg (Hoffnung der 1980er)',
          answer: `Die Stringtheorie, die größte Hoffnung darauf, hat das Gegenteil geliefert: eine Landschaft von etwa 10^500 Lösungen mit verschiedenen Konstanten. Und selbst wenn eine solche Theorie gefunden würde: Unter allen denkbaren Theorien wäre sie diejenige, die zufällig Leben erlaubt. Die Feinabstimmung zöge nur eine Etage höher.`,
        },
      ],
    },
    {
      id: 'beispiele-eingebrochen',
      objection: `Eure Paradebeispiele brechen weg: Hoyles Vorhersage war gar nicht anthropisch, das Diproton hätte nicht allen Wasserstoff verbrannt, und es gibt ein Universum ohne schwache Kernkraft, das funktioniert.`,
      objectionBy: 'Victor Stenger / Fred Adams',
      answer: `Das stimmt teilweise, und Christen sollten diese Korrekturen anerkennen. Aber die stärksten Fälle sind davon nicht betroffen: die kosmologische Konstante, die Anfangsentropie und die Empfindlichkeit der Kohlenstoff- und Sauerstoffproduktion. Und das Universum ohne schwache Kraft funktioniert nur, weil andere Parameter gezielt nachjustiert wurden – das ist selbst ein Feinabstimmungsbefund.`,
      detail: `Zur Hoyle-Resonanz: Der Wissenschaftshistoriker Helge Kragh hat gezeigt, dass die anthropische Erzählung („Hoyle sagte die Resonanz voraus, weil es uns gibt") erst später entstand. Die physikalische Empfindlichkeit der Resonanz ist davon unabhängig (Oberhummer u. a. 2000; Epelbaum u. a. 2013).`,
      followUps: [
        {
          id: 'kein-festes-faktum',
          objection: `Also ist Feinabstimmung kein festes Faktum. Man findet immer Auswege.`,
          objectionBy: 'Victor Stenger',
          answer: `Einzelne Beispiele werden schwächer, andere bleiben robust – so funktioniert Wissenschaft. Entscheidend ist das Gesamtbild, und das ist in der Fachwelt nicht umstritten: Deshalb diskutieren Rees, Susskind und Weinberg das Multiversum. Wenn die Feinabstimmung eine Illusion wäre, bräuchten sie es nicht.`,
          questionsBack: [`Warum brauchen Rees, Susskind und Weinberg ein Multiversum, wenn die Feinabstimmung eine Illusion ist?`],
        },
      ],
    },
    {
      id: 'gott-braucht-keine-feinabstimmung',
      objection: `Ein allmächtiger Gott bräuchte keine Feinabstimmung. Er könnte Leben in jedem beliebigen Universum erhalten. Feinabstimmung spricht eher gegen Gott – sie ist genau das, was man ohne Gott erwartet: Leben nur unter engen Bedingungen.`,
      objectionBy: 'Sean Carroll (Debatte mit W. L. Craig, 2014)',
      targetsPremise: 1,
      answer: `Gott *könnte* das – aber ein Gott, der eine verlässliche, gesetzmäßige, erforschbare Welt will, in der Geschöpfe handeln und verstehen können, schafft sie durch stabile Gesetze. Und stabile Gesetze, die Leben ermöglichen, müssen eben feinabgestimmt sein. Außerdem erklärt der Naturalismus gar nicht, warum es überhaupt einen lebensfreundlichen Bereich gibt.`,
      detail: `C. S. Lewis argumentierte in *The Problem of Pain* (Kap. 2), dass eine gemeinsame, feste Natur mit eigenen Gesetzen Voraussetzung dafür ist, dass Geschöpfe miteinander und mit der Welt verantwortlich umgehen können. Eine Welt, in der Gott ständig Ausnahmen macht, wäre keine verlässliche Bühne für freies Handeln.`,
      sources: [{ kind: 'gegner', author: 'Sean Carroll', work: 'Debatte mit W. L. Craig, „God and Cosmology"', year: '2014', quote: `Ein Gott könnte Leben unter beliebigen physikalischen Bedingungen erhalten; dass Leben enge Bedingungen braucht, erwartet man eher im Naturalismus.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'gott-mit-allem-vereinbar',
          objection: `Dann ist Gott mit jeder Beobachtung vereinbar – unfalsifizierbar.`,
          objectionBy: 'Sean Carroll',
          answer: `Nein. Wäre das Universum chaotisch, ohne Gesetze, unverständlich oder lebensfeindlich, würde der Theismus unwahrscheinlicher. Ein Gott, der vernünftige Geschöpfe will, lässt eine geordnete, lebensfreundliche, erforschbare Welt erwarten – und genau die finden wir.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum suchen Nichttheisten wie Rees, Susskind und Weinberg nach einem Multiversum, wenn die Feinabstimmung eine Illusion ist?`,
    `Wie erklärst du die extrem niedrige Anfangsentropie ohne Feinabstimmung?`,
    `Wenn eine tiefere Theorie die Konstanten festlegt – warum gerade eine, die Leben erlaubt?`,
    `Welche Lebenskriterien hat Stengers Programm berücksichtigt?`,
  ],
  avoid: [
    `Übertriebene oder veraltete Zahlen zitieren (etwa „Änderung der Gravitation um 1 zu 10^40 vernichtet alles") ohne Quelle. Nutze die gut belegten Fälle: kosmologische Konstante, Anfangsentropie, Kohlenstoff.`,
    `„Hoyle hat die Kohlenstoff-Resonanz anthropisch vorhergesagt" als historische Tatsache darstellen – das ist nach Kragh eine spätere Legende.`,
    `Die Feinabstimmung als Beweis für den christlichen Gott ausgeben. Sie spricht für einen intelligenten Schöpfer; den Weg zu Christus gehen andere Argumente (v. a. die Auferstehung).`,
  ],
  concessions: [
    `Manche früheren Feinabstimmungsbeispiele waren überzogen (Diproton, Hoyle-Geschichte); einige Parameter sind weniger empfindlich als behauptet (Adams 2019).`,
    `Das Normierungsproblem der Wahrscheinlichkeiten ist eine ernsthafte philosophische Frage, die nicht vollständig geklärt ist.`,
    `Man kann nicht ausschließen, dass eine künftige Theorie einige Konstanten festlegt.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', year: '2016', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Luke A. Barnes', work: '„The Fine-Tuning of the Universe for Intelligent Life", PASA 29', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument", Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Martin Rees', work: 'Just Six Numbers', year: '1999', status: 'paraphrase' },
    { kind: 'gegner', author: 'Victor J. Stenger', work: 'The Fallacy of Fine-Tuning', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Feinabstimmung', 'Stenger', 'Barnes', 'kosmologische Konstante', 'Penrose', 'Hoyle'],
  related: [
    'feinabstimmung/multiversum',
    'feinabstimmung/anthropisches-prinzip',
    'feinabstimmung/leben-haette-sich-angepasst',
    'feinabstimmung/universum-lebensfeindlich',
    'mathematik/unwahrscheinliches-passiert-staendig',
    'gottesbeweise/hoechstens-deismus',
  ],
};

export default claim;
