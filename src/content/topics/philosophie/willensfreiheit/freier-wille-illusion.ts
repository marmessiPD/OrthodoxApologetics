import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'freier-wille-illusion',
  title: `„Der freie Wille ist eine Illusion (Determinismus)."`,
  proponents: [
    {
      name: 'Robert M. Sapolsky',
      role: 'Neuroendokrinologe und Primatenforscher, Stanford University',
      work: 'Determined: A Science of Life Without Free Will (2023); Behave (2017)',
    },
    {
      name: 'Sam Harris',
      role: 'Neurowissenschaftler und Autor, „Neuer Atheismus"',
      work: 'Free Will (2012)',
    },
    {
      name: 'Jerry A. Coyne',
      role: 'Evolutionsbiologe, University of Chicago (em.)',
      work: '„Why You Don\'t Really Have Free Will", USA Today (2012); Faith versus Fact (2015)',
    },
    {
      name: 'Wolf Singer',
      role: 'Hirnforscher, Max-Planck-Institut für Hirnforschung, Frankfurt',
      work: '„Verschaltungen legen uns fest: Wir sollten aufhören, von Freiheit zu sprechen", in: C. Geyer (Hg.), Hirnforschung und Willensfreiheit (2004)',
    },
    {
      name: 'Daniel C. Dennett',
      role: 'Philosoph, Tufts University (1942–2024) – Kompatibilist: Determinismus ja, aber „Freiheit, die des Wollens wert ist"',
      work: 'Elbow Room (1984); Freedom Evolves (2003)',
    },
  ],
  steelman: `Alles, was in der Natur geschieht, hat Ursachen – und das Gehirn ist Teil der Natur. Jede „Entscheidung" ist ein Hirnzustand, und jeder Hirnzustand ist das Ergebnis von Genen, die du dir nicht ausgesucht hast, von Hormonen, die eine Sekunde, eine Stunde oder ein Jahr vorher ausgeschüttet wurden, von deiner Kindheit, deiner Kultur, deiner Ernährung, deinem Schlaf. Robert Sapolsky fordert: Zeig mir ein einziges Neuron, das ein Verhalten unabhängig von der Summe seiner biologischen Vorgeschichte ausgelöst hat. Niemand kann das. Und wer auf die Quantenphysik ausweicht, gewinnt nichts: Zufall ist keine Freiheit – ein Würfel im Kopf macht dich nicht verantwortlicher. Entweder sind unsere Handlungen festgelegt oder zufällig; in keinem Fall sind sie „frei" im Sinn eines unverursachten Urhebers. Galen Strawson hat es zugespitzt: Um für dein Handeln letztverantwortlich zu sein, müsstest du für das verantwortlich sein, was du bist – also *causa sui*, Ursache deiner selbst. Das ist unmöglich. Das Gefühl der Freiheit ist eine nützliche Illusion des Gehirns. Die Konsequenz ist nicht Nihilismus, sondern Menschlichkeit: Ohne die Fiktion des freien Willens fällt die Rechtfertigung für Hass, Vergeltung und Hölle weg; wir können Täter wie Kranke behandeln – schützen, behandeln, aber nicht verdammen.`,
  biblical: {
    summary: `Die Schrift setzt durchgehend voraus, dass der Mensch wirklich wählen kann – „Leben und Tod … daß du das Leben erwählest" (Dtn 30,19) – und dass Gott diese Wahl ernst nimmt, bis zu seiner Klage über Jerusalem: „ihr habt nicht gewollt" (Mt 23,37). Zugleich kennt sie eine tiefere Unfreiheit: die Knechtschaft der Sünde (Joh 8,34; Röm 7,19), aus der Christus befreit. Biblische Freiheit ist also zweistufig: die geschöpfliche Fähigkeit zur Selbstbestimmung (sie bleibt auch nach dem Fall) und die Freiheit zum Guten, die durch Gnade geheilt und vollendet wird. Determinismus, ob naturalistisch oder theologisch, widerspricht beidem.`,
    detail: `- **Wahl als Grundstruktur des Bundes:** Mose stellt Israel vor die Entscheidung zwischen Leben und Tod (Dtn 30,15–19), Josua fordert „erwählet euch heute, wem ihr dienen wollt" (Jos 24,15). Gott warnt Kain *vor* der Tat: „du aber herrsche über sie" (Gen 4,7) – eine Warnung an einen Determinierten wäre sinnlos.
- **Deuterokanonisch, für die koptische Kirche kanonisch:** Jesus Sirach 15,14–17 sagt sinngemäß, Gott habe den Menschen am Anfang geschaffen und ihn „der Macht seines Entschlusses" überlassen; Feuer und Wasser, Leben und Tod liegen vor ihm. Diese Stelle zitierten die Väter gegen den Fatalismus.
- **Gottes Wirken und menschliches Wollen zugleich:** „Schaffet, daß ihr selig werdet … Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen" (Phil 2,12–13). Paulus sieht darin keinen Widerspruch: Gottes Wirken ersetzt das menschliche Wollen nicht, es ermöglicht es (Synergie, vgl. 1 Kor 3,9 „Gottes Mitarbeiter").
- **Unfreiheit durch Sünde:** Joh 8,34–36 und Röm 7 beschreiben keine physikalische Determination, sondern eine moralische Gebundenheit – der Mensch tut, was er nicht will. Gerade diese Erfahrung setzt einen Willen voraus, der sich selbst als gespalten erlebt.
- **Missverständnis vermeiden:** Spr 16,9 („Des Menschen Herz schlägt seinen Weg an; aber der HERR allein gibt, daß er fortgehe") lehrt Gottes Vorsehung, nicht die Aufhebung menschlicher Planung – der Mensch „schlägt an", Gott führt.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '30,19', quote: `Ich nehme Himmel und Erde heute über euch zu Zeugen: ich habe euch Leben und Tod, Segen und Fluch vorgelegt, daß du das Leben erwählest und du und dein Same leben mögest.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '23,37', quote: `Jerusalem, Jerusalem, die du tötest die Propheten und steinigst, die zu dir gesandt sind! wie oft habe ich deine Kinder versammeln wollen, wie eine Henne versammelt ihre Küchlein unter ihre Flügel; und ihr habt nicht gewollt!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis (1. Mose)', ref: '4,7', quote: `Ist's nicht also? Wenn du fromm bist, so bist du angenehm; bist du aber nicht fromm, so ruht die Sünde vor der Tür, und nach dir hat sie Verlangen; du aber herrsche über sie.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '15,14–17', quote: `Gott hat den Menschen am Anfang geschaffen und ihn der Macht seiner eigenen Entscheidung überlassen; vor dem Menschen liegen Leben und Tod – was er will, wird ihm gegeben.`, status: 'paraphrase', note: 'Deuterokanonisch; in der koptischen Kirche Teil des Kanons.' },
      { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `… schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,34.36', quote: `Wer Sünde tut, der ist der Sünde Knecht. … So euch nun der Sohn frei macht, so seid ihr recht frei.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter haben die Selbstbestimmung des Menschen (griechisch *autexousion*) einmütig gegen den Fatalismus ihrer Zeit verteidigt – gegen die stoische Heimarmene, die Astrologie und die gnostische Lehre von festgelegten „Naturen". Irenäus, Origenes, Athanasius und Johannes von Damaskus sehen im freien Willen einen Kern der Gottebenbildlichkeit. Die koptisch-orthodoxe Kirche lehrt die **Synergie**: Das Heil ist ganz Gabe Gottes, wird aber vom freien Willen angenommen und mitgetragen (Papst Schenuda III., *Das Heil im orthodoxen Verständnis*). Sie lehnt deshalb jeden Determinismus ab – den materialistischen ebenso wie die calvinistische Lehre von der unwiderstehlichen Gnade.`,
    detail: `- **Irenäus von Lyon** liest gerade Mt 23,37 als Beweis für das „alte Gesetz der menschlichen Freiheit": Gott habe den Menschen von Anfang an frei geschaffen, mit eigener Macht wie mit eigener Seele, damit er Gottes Willen freiwillig und nicht gezwungen befolge (Adv. Haer. IV,37,1).
- **Origenes** nennt die Willensfreiheit ausdrücklich einen Teil der kirchlichen Verkündigung (De principiis, Vorrede 5) und widmet ihr das erste große christliche Traktat über die Freiheit (De principiis III,1). Sein Hauptargument: Ohne Selbstbestimmung wären Lob, Tadel, Gebote und Gericht sinnlos.
- **Athanasius** erklärt die Entstehung des Bösen nicht aus einer bösen Natur, sondern aus der Abwendung der freien Seele von Gott (Contra Gentes 3–7).
- **Johannes von Damaskus** fasst die Tradition zusammen: Gott weiß alles im Voraus, bestimmt aber nicht alles im Voraus; was in unserer Macht steht, erkennt er vorher, ohne es zu verursachen (Expositio fidei II,30).
- **Koptische Gegenwart:** Papst Schenuda III. betont gegen protestantische und calvinistische Positionen, dass der Mensch mit der Gnade zusammenwirkt – Glaube, Taufe, Buße und gute Werke sind nicht Verdienst, aber echte, freie Antwort.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'IV,37,1', year: 'um 180', quote: `Damit hat er das alte Gesetz der Freiheit des Menschen offenbart: Gott hat ihn von Anfang an frei gemacht, mit eigener Macht wie mit eigener Seele, um Gottes Ratschluss freiwillig und nicht von Gott gezwungen zu folgen.`, original: `… veterem legem libertatis hominis manifestavit, quia liberum eum Deus fecit ab initio, habentem suam potestatem sicut et suam animam, ad utendum sententia Dei voluntarie, et non coactum a Deo.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Irenäus kommentiert hier Mt 23,37.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Über die Grundlehren (De principiis)', ref: 'Vorrede 5; III,1', year: 'um 220–230', quote: `Zur kirchlichen Verkündigung gehört, dass jede vernunftbegabte Seele freien Willen und Entscheidungskraft besitzt; ohne sie wären Gebot, Lob und Tadel sinnlos.`, status: 'paraphrase', note: 'Origenes wird als Apologet zitiert, nicht als Lehrautorität (vgl. Personenregister).' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (Expositio fidei)', ref: 'II,30', year: '8. Jh.', quote: `Gott weiß zwar alles im Voraus, aber er bestimmt nicht alles im Voraus.`, original: `… while God knows all things beforehand, yet He does not predetermine all things.`, translation: 'eigene Übersetzung nach NPNF II/9', status: 'verbatim' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', quote: `Das Heil ist Gnade Gottes, die der Mensch in freier Mitwirkung annimmt; Gnade und freier Wille wirken zusammen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Frage ist **philosophisch offen, nicht naturwissenschaftlich entschieden**. In der größten Umfrage unter Fachphilosophen (PhilPapers 2020) vertreten rund 59 % den Kompatibilismus, knapp 19 % den Libertarismus (echte Wahlfreiheit) und nur etwa 11 % die These „kein freier Wille". Die Physik ist nach den Standarddeutungen der Quantenmechanik nicht durchgängig deterministisch; ein lückenloser Determinismus der Hirnvorgänge ist eine metaphysische Annahme, kein Messergebnis. Die neurowissenschaftlichen Experimente (Libet 1983, Soon u. a. 2008) betreffen spontane, bedeutungslose Bewegungen und werden heute deutlich zurückhaltender gedeutet (Schurger u. a. 2012).`,
    detail: `- **Ehrlich zugestehen:** Unser Wille ist stark beeinflusst – durch Gene, Hormone, Prägung, Sucht, Hirnerkrankungen. Sapolsky dokumentiert das eindrucksvoll. Die Frage ist nicht, *ob* Einflüsse existieren, sondern ob sie *alles* festlegen.
- **Drei Hauptpositionen:** (1) *Harter Determinismus/Illusionismus* (Sapolsky, Harris, Coyne): alles ist festgelegt, Freiheit ist Illusion. (2) *Kompatibilismus* (Dennett, die Mehrheit): Determinismus und eine Art Freiheit (Handeln nach eigenen Gründen ohne Zwang) vertragen sich. (3) *Libertarismus* (van Inwagen, Kane, O'Connor, Swinburne): echte Alternativen, oft mit Akteurskausalität.
- **Libet & Co.:** Siehe den eigenen Claim zu den Libet-Experimenten (Paket Neurowissenschaften). Das Bereitschaftspotenzial lässt sich als Rauschen eines Akkumulator-Prozesses deuten, nicht als „verborgene Entscheidung"; Vorhersagen in fMRT-Studien liegen bei etwa 60 % – kaum über Zufall.
- **Offen:** Wie mentale Verursachung genau funktioniert, ist ungelöst – für Christen wie für Naturalisten. Ehrlichkeit verlangt, das zuzugeben.`,
    sources: [
      { kind: 'fachliteratur', author: 'David Bourget, David J. Chalmers', work: 'Philosophers on Philosophy: The 2020 PhilPapers Survey', year: '2023', quote: `Kompatibilismus ca. 59 %, Libertarismus ca. 19 %, kein freier Wille ca. 11 % (gerundet).`, status: 'paraphrase', note: 'Erschienen in Philosophers\' Imprint 23 (2023). Werte gerundet.' },
      { kind: 'wissenschaft', author: 'Aaron Schurger, Jacobo D. Sitt, Stanislas Dehaene', work: 'An accumulator model for spontaneous neural activity prior to self-initiated movement', ref: 'PNAS 109 (42)', year: '2012', quote: `Das Bereitschaftspotenzial kann als Ergebnis zufälliger neuronaler Schwankungen gedeutet werden, die sich bis zu einer Schwelle aufsummieren – nicht als unbewusst gefällte Entscheidung.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Chun Siong Soon u. a.', work: 'Unconscious determinants of free decisions in the human brain', ref: 'Nature Neuroscience 11', year: '2008', quote: `Aus Hirnaktivität ließ sich eine einfache Links-rechts-Wahl einige Sekunden vorher mit etwa 60 % Trefferquote vorhersagen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Robert M. Sapolsky', work: 'Determined: A Science of Life Without Free Will', year: '2023', quote: `Wir sind nichts anderes als das kumulative biologische und umweltbedingte Glück (bzw. Pech), über das wir keine Kontrolle hatten und das uns zu diesem Moment gebracht hat.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass unser Wille beeinflusst wird, ist unbestritten – dass er vollständig festgelegt ist, ist eine Weltanschauung, kein Messergebnis. Und diese Weltanschauung sägt an dem Ast, auf dem sie sitzt: Wenn jeder Gedanke nur das zwangsläufige Produkt von Molekülbewegungen ist, dann ist auch der Gedanke „der Determinismus ist wahr" nur ein Molekülereignis – kein Ergebnis von Gründen. Wer mich mit Argumenten überzeugen will, setzt voraus, dass ich Gründe abwägen und meine Meinung ändern kann. Genau das nennen wir freien Willen.`,
  keyPoints: [
    `**Einfluss ist nicht Determination:** Gene, Hormone und Prägung beeinflussen uns stark – daraus folgt nicht, dass sie jede Entscheidung festlegen. Der Sprung von „viele Ursachen" zu „nur Ursachen ohne Urheber" ist philosophisch, nicht empirisch.`,
    `**Pragmatische Selbstaufhebung:** Wer für den Determinismus argumentiert, appelliert an meine Fähigkeit, Gründe zu prüfen und mich umzuentscheiden. Wären alle Überzeugungen bloß verursacht, hätte auch die Überzeugung des Deterministen keinen rationalen Vorrang.`,
    `**Falsches Dilemma „festgelegt oder zufällig":** Es setzt voraus, dass es nur Ereignis-Ursachen gibt. Die klassische Alternative ist die Akteurskausalität: Eine Person selbst ist Ursache ihrer Entscheidung – aus Gründen, nicht aus Zufall.`,
    `**Die Physik ist nicht deterministisch:** Die Standarddeutungen der Quantenmechanik sind indeterministisch. Determinismus der Hirnvorgänge ist eine Annahme, keine Entdeckung.`,
    `**Die Fachwelt teilt den Illusionismus nicht:** Nur etwa jeder neunte Fachphilosoph bestreitet den freien Willen ganz (PhilPapers 2020).`,
    `**Menschenwürde hängt an Verantwortung:** Wer Täter nur noch als „defekte Maschinen" verwaltet, verliert nicht nur die Schuld, sondern auch die Person (C. S. Lewis). Barmherzigkeit setzt Verantwortung voraus – sonst gäbe es nichts zu vergeben.`,
    `**Christliche Sicht:** Freiheit ist Geschenk und Gottebenbildlichkeit, verwundet durch die Sünde, geheilt durch die Gnade (Synergie) – weder Zufall noch Selbsterschaffung.`,
  ],
  argument: {
    name: 'Das Argument aus der Rationalität des Urteilens (Selbstaufhebung des naturalistischen Determinismus)',
    summary: 'Wer den harten Determinismus vernünftig begründen will, setzt praktisch voraus, was er theoretisch bestreitet.',
    premises: [
      {
        text: `P1: Rational argumentieren heißt, eine Überzeugung aufgrund der Einsicht in Gründe zu bilden – und sie angesichts besserer Gründe ändern zu können.`,
        support: `Das ist die Voraussetzung jeder Debatte, jedes Peer-Review, jedes Buches wie „Determined". Niemand schreibt 500 Seiten, um Hirne zu verändern, die ohnehin nur ablaufen, ohne zu erwarten, dass Leser Argumente *prüfen*.`,
      },
      {
        text: `P2: Nach dem naturalistischen harten Determinismus ist jede Überzeugung vollständig durch vorausgehende physische Zustände nach Naturgesetzen festgelegt – Gründe als Gründe spielen dabei keine eigene Rolle.`,
        support: `So formulieren es die Vertreter selbst: Gedanken „erscheinen" einfach im Bewusstsein (Harris); jedes Verhalten ist die Summe der biologischen Vorgeschichte (Sapolsky). Naturgesetze „kennen" keine Logik; Moleküle folgen Kräften, nicht Schlussregeln.`,
      },
      {
        text: `P3: Eine Überzeugung, die vollständig durch nicht-rationale Ursachen festgelegt ist, hat keinen Anspruch darauf, als Ergebnis rationaler Einsicht zu gelten.`,
        support: `Bereits J. B. S. Haldane (1927) und C. S. Lewis (Miracles, Kap. 3) haben das formuliert: Wenn meine Gedanken nur durch Atombewegungen festgelegt sind, habe ich keinen Grund anzunehmen, dass sie wahr sind – auch nicht den Gedanken, dass mein Gehirn aus Atomen besteht.`,
        sources: [
          { kind: 'gegner', author: 'J. B. S. Haldane', work: 'Possible Worlds', ref: 'S. 209', year: '1927', quote: `Wenn meine geistigen Vorgänge vollständig durch die Bewegungen von Atomen in meinem Gehirn bestimmt sind, habe ich keinen Grund anzunehmen, dass meine Überzeugungen wahr sind. Sie mögen chemisch einwandfrei sein, aber das macht sie nicht logisch einwandfrei. Und daher habe ich keinen Grund anzunehmen, dass mein Gehirn aus Atomen besteht.`, original: `If my mental processes are determined wholly by the motions of atoms in my brain, I have no reason to suppose that my beliefs are true. They may be sound chemically, but that does not make them sound logically. And hence I have no reason for supposing my brain to be composed of atoms.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Ehrlicher Hinweis: Haldane, Biologe und später Marxist, hat dieses Argument 1954 („I Repent an Error") selbst zurückgenommen, weil Rechenmaschinen korrekt rechnen. Die Antwort darauf siehe Dialog („Taschenrechner").' },
        ],
      },
    ],
    inferences: [
      `Aus P2 und P3: Ist der harte Determinismus wahr, dann ist auch die Überzeugung „der harte Determinismus ist wahr" kein Ergebnis rationaler Einsicht.`,
      `Aus P1: Wer den Determinismus dennoch mit Argumenten verteidigt, beansprucht genau die Fähigkeit, die seine These bestreitet.`,
    ],
    conclusion: `Der naturalistische harte Determinismus ist pragmatisch selbstaufhebend: Er kann zwar behauptet, aber nicht als rational begründet vertreten werden. Das widerlegt nicht jede Form von Kausalität im Geist – wohl aber die These, Gründe seien nur Molekülbewegungen und Freiheit nur Illusion.`,
  },
  voices: [
    {
      person: 'origenes',
      role: 'als erster christlicher Theoretiker der Willensfreiheit (mit Vorbehalt)',
      text: `Origenes verteidigt im dritten Buch von *De principiis* die Selbstbestimmung gegen Astrologen und Gnostiker, die den Menschen von Sternen oder angeborenen „Naturen" festgelegt sahen. Sein Kernargument ist bis heute schlagend: Wäre der Mensch nicht Herr seiner Entscheidungen, wären Ermahnungen, Gebote, Lob und Tadel – ja das Gericht Gottes selbst – sinnlos. Äußere Reize, so Origenes, wirken auf uns ein, aber die Vernunft *urteilt* über sie und stimmt zu oder verweigert die Zustimmung. Genau diese Urteilsinstanz ist es, die der moderne Determinismus übersieht. Zu beachten: Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; seine spekulativen Lehren (Präexistenz, Apokatastasis) wurden verworfen – seine Verteidigung der Freiheit dagegen ist Gemeingut der Väter.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis', ref: 'III,1,1–5', year: 'um 220–230', quote: `Die äußeren Eindrücke liegen nicht in unserer Macht, wohl aber, wie wir sie beurteilen und gebrauchen; darin liegt das Wesen der Selbstbestimmung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Systematiker der östlichen Tradition',
      text: `Johannes von Damaskus fasst im 8. Jahrhundert die ganze Väterlehre zusammen: Der Mensch ist vernunftbegabt und deshalb selbstbestimmt; wo Vernunft ist, da ist Überlegung, und wo Überlegung ist, da ist Wahl. Er unterscheidet sorgfältig zwischen dem, was in unserer Macht steht (Entscheidungen), und dem, was nicht in unserer Macht steht (Naturereignisse, Zufälle). Gottes Vorherwissen umfasst beides, aber Gott *bestimmt* nur das Zweite vorher, während er das Erste in seiner Freiheit lässt. Für die Debatte mit Sapolsky heißt das: Christen bestreiten nicht, dass vieles nicht in unserer Macht steht – sie bestreiten nur, dass *nichts* in unserer Macht steht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Expositio fidei', ref: 'II,25–30', year: '8. Jh.', quote: `Was in unserer Macht steht, sind die Dinge, über die wir beraten und frei entscheiden; Gott weiß sie vorher, bestimmt sie aber nicht vorher.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet des „Arguments aus der Vernunft"',
      text: `C. S. Lewis entwickelt in *Miracles* (1947, Kap. 3 überarbeitet 1960) das Argument, dass der Naturalismus die Vernunft untergräbt: Jeder Gedanke, der vollständig durch nicht-rationale Ursachen erklärt wird, verliert seinen Anspruch auf Wahrheit. Lewis nahm die scharfe Kritik der Philosophin Elizabeth Anscombe (Sokratischer Club, Oxford 1948) ernst und schärfte das Argument: Es geht um den Unterschied zwischen *Ursache und Wirkung* und *Grund und Folge*. Ein Gedanke ist rational, wenn er *weil* etwas anderes wahr ist, gedacht wird – nicht bloß, weil Neuronen so gefeuert haben. In *The Humanitarian Theory of Punishment* (1949) warnt Lewis zudem: Wer Strafe nur als „Therapie" versteht, entzieht dem Menschen die Würde, für sein Tun verantwortlich zu sein, und öffnet der unbefristeten „Behandlung" durch Experten die Tür.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', ref: 'Kap. 3 („The Cardinal Difficulty of Naturalism", rev. 1960)', year: '1947/1960', quote: `Ein Denkakt ist nur dann eine Einsicht, wenn er durch Gründe und nicht bloß durch Ursachen zustande kommt; der Naturalismus kann diesen Unterschied nicht bewahren.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Humanitarian Theory of Punishment (in: God in the Dock)', year: '1949', quote: `Bestraft zu werden, weil man es verdient hat, heißt, als Person behandelt zu werden, die nach Gottes Bild geschaffen ist.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als analytischer Religionsphilosoph',
      text: `Richard Swinburne argumentiert in *Mind, Brain, and Free Will* (2013), dass sich bewusste Entscheidungen unter moralischem Konflikt grundsätzlich nicht aus Gehirnzuständen vorhersagen lassen: Gerade dort, wo wir zwischen gleich starken Gründen abwägen (Pflicht gegen Neigung), wäre selbst eine vollständige Hirnkenntnis nicht ausreichend, weil die Vorgänge chaotisch und quantenbedingt offen sind. Experimente vom Typ Libet betreffen nur triviale, gleichgültige Bewegungen – nicht Entscheidungen, bei denen wir Gründe gewichten. Swinburne vertritt eine substanzdualistische Sicht: Die Person ist eine Seele, die mit dem Gehirn in Wechselwirkung steht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', quote: `Entscheidungen zwischen moralischen Gründen und Begierden sind durch Gehirnzustände nicht vollständig vorherbestimmt; die neurowissenschaftlichen Experimente betreffen andere, triviale Handlungen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'van-inwagen',
      role: 'als führender Metaphysiker der Willensfreiheit',
      text: `Peter van Inwagen hat mit dem **Konsequenz-Argument** (*An Essay on Free Will*, 1983) die stärkste Kritik am Kompatibilismus formuliert: Wenn der Determinismus wahr ist, sind unsere Handlungen Folgen der Naturgesetze und der fernen Vergangenheit. Weder die Vergangenheit vor unserer Geburt noch die Naturgesetze stehen in unserer Macht – also auch nicht ihre Folgen, unsere heutigen Handlungen. Zugleich ist van Inwagen ehrlich: Er nennt die Willensfreiheit ein *Mysterium*, weil auch der Indeterminismus schwer zu verstehen ist. Doch er hält an ihr fest, weil die moralische Verantwortung zu gewiss ist, um sie einer Theorie zu opfern – wer an Verantwortung glaubt, hat bessere Gründe für die Freiheit als der Determinist für seine Prämissen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter van Inwagen', work: 'An Essay on Free Will', year: '1983', quote: `Wenn der Determinismus wahr ist, sind unsere Handlungen Folgen der Naturgesetze und der fernen Vergangenheit; da beides nicht in unserer Macht steht, stehen auch unsere Handlungen nicht in unserer Macht.`, status: 'paraphrase', note: 'Das „Konsequenz-Argument" (Consequence Argument).' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Papst und Lehrer der Synergie',
      text: `Papst Schenuda III. hat in seinen Schriften zum Heil und in seinen wöchentlichen Mittwochsvorträgen immer wieder betont, dass Gott den Menschen nicht als Maschine, sondern als freies Wesen geschaffen hat, das die Gnade annehmen oder zurückweisen kann. Die Gnade wirkt, aber sie zwingt nicht; der Mensch antwortet mit Glauben, Buße und Werken der Liebe. Diese Sicht schließt die beiden Extreme aus, die in der Freiheitsdebatte immer wieder auftauchen: den Determinismus (ob durch Gene oder durch einen „alles verursachenden" Gott) und den Stolz der Selbsterlösung.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis', quote: `Gnade und freier Wille wirken zusammen; Gott zwingt niemanden zum Heil.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'alles-hat-ursachen',
      objection: `Zeig mir ein einziges Neuron, das ohne Ursache gefeuert hat. Jede Entscheidung ist ein Hirnvorgang, jeder Hirnvorgang hat Ursachen – Sekunden, Jahre, Jahrmillionen zurück. Da ist kein Platz für einen „freien" Willen.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Einverstanden: Alles hat Ursachen – ich behaupte keinen unverursachten Willen. Die Frage ist, *welche Art* von Ursache am Ende steht: nur Ereignisse, die blind ablaufen, oder auch eine Person, die aus Gründen handelt. Freiheit heißt nicht „ohne Ursache", sondern „ich selbst bin Ursache". Dass Hirnvorgänge *ausnahmslos* durch vorangehende physische Zustände festgelegt sind, hast du nicht gemessen – das setzt du voraus.`,
      detail: `Sapolskys Herausforderung klingt empirisch, ist aber eine Beweislastumkehr. Kein Neurowissenschaftler kann für eine komplexe Entscheidung zeigen, dass sie vollständig aus vorausgehenden physischen Zuständen *folgte*; man kann nur Korrelationen und Einflüsse messen. Die Väter haben übrigens nie behauptet, der Wille sei ein „unverursachtes Neuron". Sie sprachen von *autexousion* – Selbstmacht: Äußere Reize wirken, aber die Vernunft beurteilt sie und stimmt zu oder nicht (Origenes, De principiis III,1). Das ist keine Lücke in der Kausalität, sondern eine eigene Art von Kausalität: die einer Person. Beachte auch: Die Physik selbst ist nach den Standarddeutungen der Quantenmechanik nicht deterministisch. „Alles ist festgelegt" ist also nicht die Aussage der Physik, sondern eine Weltanschauung.`,
      questionsBack: [
        `Welches Experiment hat gezeigt, dass eine komplexe moralische Entscheidung vollständig aus vorangehenden Hirnzuständen folgte – nicht nur von ihnen beeinflusst war?`,
        `Wenn die Quantenphysik indeterministisch ist, worauf stützt du den lückenlosen Determinismus des Gehirns?`,
      ],
      followUps: [
        {
          id: 'zufall-ist-keine-freiheit',
          objection: `Quantenzufall hilft dir nicht. Wenn deine Entscheidung von einem zufälligen Quantenereignis abhängt, bist du nicht freier, sondern nur unberechenbarer. Entweder festgelegt oder zufällig – Freiheit ist beides nicht.`,
          objectionBy: 'Sam Harris',
          answer: `Richtig – ich begründe Freiheit nicht mit Zufall. Der Indeterminismus schafft nur den Spielraum; gefüllt wird er nicht durch Würfeln, sondern durch eine Person, die Gründe abwägt. Dein Dilemma „festgelegt oder zufällig" setzt voraus, dass es nur Ereignis-Ursachen gibt. Wenn eine Person selbst Ursache sein kann – Akteurskausalität –, gibt es eine dritte Möglichkeit: weder erzwungen noch zufällig, sondern begründet.`,
          detail: `Das Dilemma (oft „Luck-Argument" genannt) ist die stärkste Waffe gegen den Libertarismus. Es funktioniert aber nur unter der Prämisse, dass jede Ursache ein *Ereignis* sein muss. Roderick Chisholm formulierte 1964 die Gegenposition zugespitzt: Wenn wir handeln, ist jeder von uns ein „erster Beweger, selbst unbewegt" – nicht im absoluten Sinn Gottes, sondern als Ursprung einer neuen Kausalkette. Timothy O'Connor (*Persons and Causes*, 2000) hat diese Akteurskausalität ausgearbeitet. Für Christen ist sie naheliegend: Der Mensch ist nach dem Bild eines Gottes geschaffen, der selbst *Person* ist und nicht ein Mechanismus.`,
          sources: [
            { kind: 'fachliteratur', author: 'Roderick M. Chisholm', work: 'Human Freedom and the Self (Lindley Lecture, University of Kansas)', year: '1964', quote: `Wenn wir handeln, ist jeder von uns ein erster Beweger, selbst unbewegt.`, original: `… each of us, when we act, is a prime mover unmoved.`, translation: 'eigene Übersetzung', status: 'verbatim' },
            { kind: 'fachliteratur', author: 'Timothy O\'Connor', work: 'Persons and Causes: The Metaphysics of Free Will', year: '2000', quote: `Akteurskausalität: Eine Person verursacht als Substanz ihre Absicht, ohne dass diese durch vorangehende Ereignisse festgelegt ist.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Warum sollte es nur Ereignis-Ursachen geben? Ist das ein Ergebnis der Wissenschaft oder eine Vorentscheidung?`,
          ],
          followUps: [
            {
              id: 'akteurskausalitaet-mysterioes',
              objection: `„Akteurskausalität" ist ein Zauberwort. Wie soll ein „Selbst" Neuronen anstoßen? Das ist der Geist in der Maschine – Magie mit philosophischem Vokabular.`,
              objectionBy: 'Daniel Dennett',
              answer: `Jede Theorie hat einen Grundbegriff, den sie nicht weiter zerlegen kann. Auch Ereigniskausalität hat noch nie jemand „gesehen" – schon Hume bemerkte, dass wir nur Abfolgen beobachten, nie das Bewirken selbst. Die Akteurskausalität dagegen kennen wir von innen, jedes Mal, wenn wir uns entscheiden. Es ist nicht magischer, dass Personen wirken, als dass Ereignisse wirken – es ist nur ungewohnt für ein materialistisches Weltbild.`,
              detail: `Der Vorwurf „Magie" verschiebt die Last: Das Problem, wie Bewusstsein und Intentionalität überhaupt in eine rein physikalische Welt passen, hat der Materialismus selbst nicht gelöst (siehe den Claim zum Bewusstsein im Themenblock Naturalismus). Wenn der Materialist erklären müsste, wie Moleküle *über etwas* nachdenken können, steht er vor einem mindestens ebenso großen Rätsel. Gegen ein Rätsel ein anderes auszuspielen, entscheidet nichts. Entscheidend ist, welche Sicht unsere Erfahrung von Abwägen, Verantwortung und Vernunft ernst nimmt – und welche sie zur Illusion erklären muss.`,
              sources: [
                { kind: 'fachliteratur', author: 'David Hume', work: 'An Enquiry Concerning Human Understanding', ref: 'Abschnitt VII', year: '1748', quote: `Wir beobachten nur, dass ein Ereignis auf ein anderes folgt; die verknüpfende Kraft selbst nehmen wir nie wahr.`, status: 'paraphrase', note: 'Hume war kein Theist – das Zugeständnis ist neutral.' },
              ],
              followUps: [
                {
                  id: 'energieerhaltung',
                  objection: `Die Physik des Alltags ist vollständig verstanden. Wenn eine Seele Atome im Gehirn bewegen würde, würde sie Energie ins System bringen – das verletzt die Energieerhaltung. Für eine immaterielle Ursache ist schlicht kein Platz.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Der Energieerhaltungssatz gilt für geschlossene Systeme. Ob das Gehirn ein kausal geschlossenes System ist, ist genau die Frage, um die es geht – du setzt die Antwort voraus. Außerdem muss eine strukturierende Ursache keine Energie hinzufügen: Wer zwischen energetisch gleichwertigen Möglichkeiten auswählt, verletzt keine Erhaltungssätze. Und wenn die Quantenphysik offene Ausgänge kennt, ist die Physik selbst nicht „geschlossen" im deterministischen Sinn.`,
                  detail: `Carrolls Argument (Core Theory) ist ernst zu nehmen, beweist aber nur: Eine Seele, die wie ein zusätzlicher physikalischer Kraftstoß wirkt, wäre messbar. Die klassische christliche Anthropologie versteht die Seele aber nicht als „Kraft neben anderen Kräften", sondern als Form und Lebensprinzip des Leibes (so die aristotelisch-thomistische Tradition, vgl. Feser) oder als personales Subjekt, das in die offenen Spielräume der Natur hineinwirkt (Swinburne). Beide Modelle kollidieren nicht mit Erhaltungssätzen. Mehr dazu im Claim zur kausalen Geschlossenheit der Physik.`,
                  questionsBack: [
                    `Woher weißt du, dass das Gehirn ein kausal geschlossenes System ist – hast du das gemessen oder vorausgesetzt?`,
                    `Wie erklärst du in der „Core Theory", dass Moleküle über Physik nachdenken und Argumente prüfen?`,
                  ],
                },
              ],
            },
            {
              id: 'strawson-causa-sui',
              objection: `Um wirklich verantwortlich zu sein, müsstest du für dein Ich verantwortlich sein – für deinen Charakter, deine Neigungen. Dafür müsstest du dich selbst erschaffen haben, causa sui. Das kann niemand. Also gibt es keine echte Verantwortung.`,
              objectionBy: 'Galen Strawson',
              answer: `Die Prämisse verlangt zu viel. Um für eine Handlung verantwortlich zu sein, muss ich nicht Ursache meiner ganzen Existenz sein, sondern Ursprung *dieser* Entscheidung. Christen stimmen dir sogar zu: Wir sind nicht causa sui – das ist allein Gott. Unsere Freiheit ist eine geschenkte Freiheit. Verantwortlich sind wir nicht dafür, *dass* wir sie haben, sondern dafür, *wie* wir sie gebrauchen.`,
              detail: `Strawsons „Basic Argument" (1994) beweist zu viel: Nach ihm wäre auch kein Mathematiker für seinen Beweis „verantwortlich", weil er seine Begabung nicht selbst erschaffen hat. Unsere moralische Praxis kennt abgestufte Verantwortung: Ein Kind, ein Süchtiger, ein Kranker sind weniger verantwortlich – aber eben nicht null. Die Kirche kennt diese Abstufung seit jeher (Lk 12,47–48: wer den Willen des Herrn kennt, wird strenger beurteilt). Der Mensch formt seinen Charakter zudem durch viele kleine Entscheidungen – die Väter nennen das Tugend und Laster als „zweite Natur".`,
              sources: [
                { kind: 'gegner', author: 'Galen Strawson', work: 'The Impossibility of Moral Responsibility', ref: 'Philosophical Studies 75', year: '1994', quote: `Um für das eigene Handeln letztverantwortlich zu sein, müsste man causa sui sein – zumindest in bestimmten geistigen Hinsichten. Das ist unmöglich.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Lukas', ref: '12,47–48', quote: `Der Knecht aber, der seines Herrn Willen weiß, und hat sich nicht bereitet … wird viel Streiche leiden müssen. Der es aber nicht weiß, hat aber getan, was der Streiche wert ist, wird wenig Streiche leiden.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt.' },
              ],
            },
          ],
        },
        {
          id: 'libet-beweist',
          objection: `Die Neurowissenschaft hat es längst gezeigt: Libet maß, dass das Gehirn eine Bewegung vorbereitet, bevor du dich bewusst entscheidest. Soon und Kollegen konnten Entscheidungen Sekunden vorher aus dem Hirnscan vorhersagen.`,
          objectionBy: 'Jerry Coyne',
          answer: `Libet selbst hielt am freien Willen fest – er sah ein bewusstes „Veto". Die Experimente betreffen spontane, bedeutungslose Fingerbewegungen, keine Abwägung von Gründen. Das Bereitschaftspotenzial lässt sich heute als neuronales Rauschen deuten, nicht als verborgene Entscheidung (Schurger 2012). Und die Vorhersage bei Soon lag bei etwa 60 % – knapp über Münzwurf.`,
          detail: `Ausführlich behandelt im Claim zu den Libet-Experimenten (Themenblock Neurowissenschaften). Für das Gespräch genügt: Wer aus der Vorbereitung eines Fingerzuckens auf die Unfreiheit von Ehe, Bekehrung oder Gewissensentscheidung schließt, verallgemeinert weit über die Daten hinaus.`,
          sources: [
            { kind: 'wissenschaft', author: 'Benjamin Libet u. a.', work: 'Time of conscious intention to act in relation to onset of cerebral activity (readiness-potential)', ref: 'Brain 106', year: '1983', quote: `Das Bereitschaftspotenzial beginnt einige hundert Millisekunden vor dem berichteten Zeitpunkt des bewussten Handlungswunsches.`, status: 'paraphrase', note: 'Libet selbst vertrat die Möglichkeit eines bewussten Vetos.' },
          ],
          followUps: [
            {
              id: 'zukuenftige-neurowissenschaft',
              objection: `Heute vielleicht nur 60 %. Aber die Neurowissenschaft ist jung. In fünfzig Jahren werden wir jede Entscheidung vorhersagen können. Es ist nur eine Frage der Zeit.`,
              objectionBy: 'Jerry Coyne',
              answer: `Das ist ein Wechsel auf die Zukunft, kein Argument. Man kann keine Weltanschauung auf Ergebnisse gründen, die es noch nicht gibt. Und selbst eine perfekte Vorhersage würde das Grundproblem nicht lösen: Wenn deine Überzeugung vom Determinismus nur das Ergebnis von Hirnchemie ist, hat sie keinen rationalen Vorrang vor meiner.`,
              detail: `Der Philosoph Karl Popper nannte solche Versprechen „promissory materialism" (Versprechens-Materialismus): Die Lösung wird stets für später angekündigt. Ehrlich bleibt: Auch Christen sollten nicht behaupten, die Neurowissenschaft *könne* bestimmte Dinge nie entdecken. Unser Argument hängt nicht an Messlücken, sondern an der Logik: Rationales Urteilen lässt sich nicht widerspruchsfrei als bloßes Ablaufen beschreiben.`,
              sources: [
                { kind: 'fachliteratur', author: 'Karl R. Popper, John C. Eccles', work: 'The Self and Its Brain', year: '1977', quote: `Der „Versprechens-Materialismus" verschiebt die Erklärung des Geistes auf künftige Forschung, statt sie zu liefern.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gefuehl-der-freiheit-illusion',
      objection: `Beobachte deinen nächsten Gedanken. Woher kommt er? Er taucht einfach auf. Du bist nicht der Autor deiner Gedanken – du bist ihr Zeuge. Das Gefühl, frei zu wählen, ist eine Illusion, die das Gehirn nachträglich erzeugt.`,
      objectionBy: 'Sam Harris',
      answer: `Dass Einfälle spontan auftauchen, stimmt. Aber Abwägen ist etwas anderes als Einfallen: Wenn ich zwischen Pflicht und Bequemlichkeit entscheide, prüfe ich Gründe, verwerfe, korrigiere. Wer diese universale Erfahrung zur Illusion erklärt, braucht Belege, die stärker sind als die Erfahrung selbst. Und er muss erklären, warum ausgerechnet die Erfahrung, Argumente zu prüfen – mit der er mich überzeugen will –, eine Ausnahme von der Illusion sein soll.`,
      detail: `Harris' Meditationsübung ist geschickt gewählt: Sie lenkt den Blick auf das passive Auftauchen von Einfällen und blendet das aktive Prüfen aus. Die christliche Askese kennt diese Unterscheidung genau: Die Wüstenväter lehrten, dass Gedanken (*logismoi*) kommen, ohne dass wir sie rufen – Sünde beginnt erst mit der *Zustimmung*. Freiheit liegt nicht im Ursprung jedes Einfalls, sondern im Umgang mit ihm. Thomas Reid hat außerdem darauf hingewiesen: Wer der Erfahrung des Handelns grundsätzlich misstraut, hat keinen Grund, der Erfahrung des Denkens zu trauen – und damit seinen eigenen Argumenten.`,
      questionsBack: [
        `Wenn du ein Argument prüfst und verwirfst – ist das auch nur „Auftauchen"? Und wenn ja: Warum sollte ich deinem Auftauchen mehr trauen als meinem?`,
        `Was wäre für dich ein Beleg *für* den freien Willen? Wenn nichts denkbar ist, ist deine These dann noch empirisch?`,
      ],
      followUps: [
        {
          id: 'taschenrechner',
          objection: `Dein Selbstaufhebungs-Argument ist ein Taschenspielertrick. Ein Taschenrechner ist vollständig determiniert und rechnet trotzdem richtig. Determinierte Überzeugungen können wahr sein.`,
          objectionBy: 'Daniel Dennett',
          answer: `Der Taschenrechner bestätigt meinen Punkt: Er rechnet richtig, *weil* ein intelligenter Konstrukteur ihn so gebaut hat, dass seine Abläufe mathematische Wahrheiten abbilden. Determinierte Abläufe können Wahrheit abbilden – wenn Vernunft sie so eingerichtet hat. Der Naturalist hat aber keinen Konstrukteur, nur einen blinden Prozess, der auf Überleben optimiert, nicht auf Wahrheit. Woher nimmst du dann das Vertrauen, dass deine philosophischen Überzeugungen wahr sind?`,
          detail: `Das war genau der Einwand, mit dem J. B. S. Haldane 1954 sein eigenes Argument zurücknahm. Doch der Einwand verschiebt das Problem nur: Rechenmaschinen sind Produkte von Geist. Sie zeigen, dass Vernunft *Materie* ordnen kann, nicht dass Materie ohne Vernunft vernünftig wird. Wichtig ist die ehrliche Reichweite: Das Argument widerlegt nicht, dass determinierte Systeme korrekte Ergebnisse liefern *können*. Es zeigt, dass der Naturalist sein Vertrauen in die eigene Vernunft nicht aus seinem Weltbild begründen kann – der Theist dagegen schon (der Logos, nach dessen Bild wir geschaffen sind).`,
          sources: [
            { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', ref: 'Kap. 10', year: '2011', quote: `Wenn unsere kognitiven Fähigkeiten durch ungelenkte Evolution entstanden sind, ist die Wahrscheinlichkeit, dass sie verlässlich sind, gering oder unbestimmbar – das untergräbt den Naturalismus selbst.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'evolution-trackt-wahrheit',
              objection: `Evolution selektiert sehr wohl auf Wahrheit. Ein Affe, der den Löwen für ungefährlich hält, wird gefressen. Wahre Überzeugungen sind nützlich, deshalb haben wir verlässliche Vernunft.`,
              objectionBy: 'Steven Pinker',
              answer: `Für Löwen und Früchte mag das gelten. Aber Selektion wirkt auf Verhalten, nicht auf Wahrheit: Falsche Überzeugungen können genauso nützliches Verhalten hervorbringen. Und für hochabstrakte Überzeugungen – Metaphysik, Determinismus, Mathematik der Quantenfelder – gab es nie einen Selektionsdruck. Gerade die Überzeugung, um die wir streiten, kann die Evolution nicht absichern.`,
              detail: `Ausführlich in Plantingas „Evolutionärem Argument gegen den Naturalismus" (EAAN), siehe den Claim „Die Evolution hat uns verlässliche Vernunft gegeben". Für das Freiheitsgespräch genügt: Der Determinist braucht für seine These genau die abstrakte Urteilskraft, für deren Verlässlichkeit sein Weltbild keine Garantie bietet.`,
              followUps: [
                {
                  id: 'gruende-sind-ursachen',
                  objection: `Gründe *sind* Ursachen. Neuronale Muster können Gründe verkörpern – das Gehirn ist eine gründe-sensitive Maschine. Dafür braucht es keinen Geist, keine Seele, keine Akteurskausalität.`,
                  objectionBy: 'Daniel Dennett',
                  answer: `Dann muss ein physischer Zustand *aufgrund seines Inhalts* wirken – weil er „über" etwas ist, weil er logisch aus einem anderen folgt. Physikalische Ursachen wirken aber nur aufgrund physikalischer Eigenschaften: Ladung, Masse, Struktur. Wenn die Physik schon alles Bewirken erledigt, ist der Inhalt kausal überflüssig. Das ist kein christlicher Einwand, sondern das bekannte Exklusionsproblem der Philosophie des Geistes, das der Materialismus bis heute nicht gelöst hat.`,
                  detail: `Jaegwon Kim, selbst kein Dualist, hat das Problem scharf formuliert: Wenn jedes physische Ereignis eine hinreichende physische Ursache hat, bleibt für mentale Eigenschaften als solche keine kausale Rolle – sie werden zu Epiphänomenen. Dann aber wirken Gründe *nicht als Gründe*, und die „gründe-sensitive Maschine" ist nur eine Metapher. Der Christ sagt: Gründe wirken, weil Personen wirken – und Personen sind mehr als ihre Moleküle, ohne von ihnen getrennt zu sein (die Einheit von Seele und Leib).`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Jaegwon Kim', work: 'Mind in a Physical World', year: '1998', quote: `Wenn die physische Welt kausal geschlossen ist, droht mentalen Eigenschaften der Ausschluss aus jeder eigenen kausalen Rolle (Exklusionsproblem).`, status: 'paraphrase', note: 'Kim war physikalistisch orientiert; das Problem ist innerhalb des Materialismus anerkannt.' },
                  ],
                  questionsBack: [
                    `Wirkt ein Gedanke in deinem Gehirn, *weil* er logisch gültig ist – oder nur, weil seine Moleküle so angeordnet sind? Wenn Letzteres: Wo bleibt die Logik?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kompatibilismus-genuegt',
          objection: `Wir haben alle Freiheit, die des Wollens wert ist: Wir handeln nach unseren eigenen Gründen, ohne Zwang. Dass diese Gründe Ursachen haben, ändert nichts. Kompatibilismus ist die Mehrheitsposition – du kämpfst gegen ein Gespenst.`,
          objectionBy: 'Daniel Dennett',
          answer: `Der Kompatibilismus ist klüger als der Illusionismus – das gestehe ich gern zu. Aber er hat ein Problem: Wenn alles durch Naturgesetze und die Zeit vor meiner Geburt festgelegt ist, und beides nicht in meiner Macht steht, dann stehen auch die Folgen – meine heutigen Handlungen – nicht in meiner Macht. „Ohne äußeren Zwang" reicht nicht, wenn der innere Ablauf genauso festgelegt ist wie ein Uhrwerk.`,
          detail: `Das ist van Inwagens Konsequenz-Argument. Sam Harris – selbst Determinist – wirft dem Kompatibilismus übrigens vor, er „wechsle das Thema": Er verteidige nicht die Freiheit, die Menschen tatsächlich zu haben glauben. In diesem Punkt geben Christen Harris recht. Zugleich sollte man fair sein: Kompatibilisten wie Dennett nehmen Verantwortung ernst und wollen keine Entmenschlichung. Die christliche Sicht kann Elemente des Kompatibilismus aufnehmen – Freiheit hat Grade, Charakter prägt Entscheidungen, Sucht schwächt den Willen –, besteht aber darauf, dass die Person letztlich Ursprung ihrer Wahl ist.`,
          sources: [
            { kind: 'gegner', author: 'Sam Harris', work: 'Free Will', year: '2012', quote: `Der Kompatibilismus verteidigt nicht die Freiheit, die die meisten Menschen zu haben meinen, sondern ersetzt sie durch etwas anderes.`, status: 'paraphrase', note: 'Harris ist selbst Determinist – seine Kritik am Kompatibilismus ist daher unverdächtig.' },
          ],
          followUps: [
            {
              id: 'frankfurt-faelle',
              objection: `Harry Frankfurt hat gezeigt, dass alternative Möglichkeiten für Verantwortung gar nicht nötig sind: Jemand, der von sich aus handelt, ist verantwortlich, auch wenn ein heimlicher Neurochirurg eingegriffen hätte, falls er anders gewollt hätte.`,
              objectionBy: 'Harry Frankfurt / John Martin Fischer',
              answer: `Selbst wenn Frankfurt recht hätte, wäre nur gezeigt, dass alternative Möglichkeiten nicht immer nötig sind. Entscheidend bleibt, dass die Person selbst *Ursprung* ihrer Handlung ist – und genau das ist im Frankfurt-Fall gegeben, weil der Neurochirurg gar nicht eingreift. Im Determinismus dagegen „greift" die Vergangenheit immer ein. Frankfurt-Fälle zeigen also nicht, dass Verantwortung mit Determinismus vereinbar ist.`,
              detail: `In der Fachdiskussion haben Robert Kane und David Widerker eingewandt, dass Frankfurt-Fälle entweder schon Determinismus voraussetzen (dann sind sie zirkulär) oder einen „Freiheitsflacker" lassen, der die Verantwortung trägt. Daraus entstand der *Ursprungs-Inkompatibilismus*: Nicht die Alternativen, sondern die Urheberschaft ist der Kern. Das passt zur patristischen Sicht, die von *autexousion*, Selbstmacht, spricht.`,
              sources: [
                { kind: 'gegner', author: 'Harry G. Frankfurt', work: 'Alternate Possibilities and Moral Responsibility', ref: 'Journal of Philosophy 66', year: '1969', quote: `Eine Person kann moralisch verantwortlich sein für das, was sie getan hat, auch wenn sie nicht anders hätte handeln können.`, status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Robert Kane', work: 'The Significance of Free Will', year: '1996', quote: `Freiheit erfordert letztgültige Verantwortung: Der Ursprung der Handlung muss im Handelnden selbst liegen.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'strafe-und-mitgefuehl',
      objection: `Der Abschied vom freien Willen macht uns menschlicher. Niemand „verdient" Strafe oder Hass. Einen Mörder behandeln wir dann wie ein Auto mit defekten Bremsen: Wir halten es von der Straße fern, aber wir hassen es nicht. Ihr Christen braucht den freien Willen doch nur, um die Hölle zu rechtfertigen.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Mitgefühl mit Tätern ist ein christliches Anliegen – „Vater, vergib ihnen". Aber Barmherzigkeit setzt Verantwortung voraus: Vergeben kann man nur Schuld, nicht einen Bremsdefekt. Wer den Menschen zur defekten Maschine erklärt, nimmt ihm mit der Schuld auch die Würde. Dann entscheiden Experten, wie lange jemand „repariert" werden muss – ohne Grenze durch das, was er verdient hat. Das ist nicht menschlicher, sondern gefährlicher.`,
      detail: `C. S. Lewis hat das 1949 in *The Humanitarian Theory of Punishment* vorausgesehen: Wenn Strafe nicht mehr an Verdienst gebunden ist, sondern nur an „Heilung" oder „Abschreckung", gibt es keine gerechte Obergrenze mehr – man kann jemanden unbefristet „behandeln", auch für Gesinnungen. Das 20. Jahrhundert hat mit der politischen Psychiatrie in der Sowjetunion gezeigt, dass diese Sorge nicht theoretisch ist. Zur Hölle: Die christliche Lehre vom freien Willen ist älter und breiter als die Eschatologie – sie begründet Liebe (die nur frei sein kann), Reue, Vergebung und Wachstum. Und die Hölle ist nach christlichem Verständnis gerade die *respektierte* Freiheit, nicht ihr Missbrauch durch Gott (siehe Themenblock Hölle).`,
      voices: [
        {
          person: 'cs-lewis',
          role: 'als Kritiker der „humanitären" Strafe',
          text: `Lewis argumentiert, dass der Begriff des *Verdienstes* die einzige Brücke zwischen Strafe und Gerechtigkeit ist. Fällt er weg, ist eine Strafe weder gerecht noch ungerecht – nur wirksam oder unwirksam. Damit wird der Mensch vom Rechtssubjekt zum Objekt therapeutischer Verwaltung. Bestraft zu werden, weil man es verdient hat, heiße dagegen, als Person ernst genommen zu werden, die nach Gottes Bild geschaffen ist.`,
        },
      ],
      questionsBack: [
        `Wenn niemand etwas verdient – verdient dann auch das Opfer keine Gerechtigkeit?`,
        `Wer entscheidet in deinem Modell, wann eine „defekte Maschine" wieder auf die Straße darf – und woran wird diese Entscheidung gemessen?`,
      ],
      followUps: [
        {
          id: 'sollen-ohne-koennen',
          objection: `Ich sage nicht, dass irgendjemand etwas „soll". Ich beschreibe nur, dass eine Gesellschaft ohne die Fiktion des freien Willens besser funktioniert – weniger Leid, weniger Vergeltung.`,
          objectionBy: 'Robert Sapolsky',
          answer: `„Besser" nach welchem Maßstab – und warum sollte ich ihn übernehmen? Du schreibst Bücher, hältst Vorträge, willst Richter und Gesetzgeber überzeugen. Das alles hat nur Sinn, wenn Menschen Gründe prüfen und daraufhin ihr Verhalten ändern können. Du lebst und argumentierst wie jemand, der an Freiheit glaubt.`,
          detail: `Kants Grundsatz „Sollen impliziert Können" bringt es auf den Punkt: Jede Reformforderung setzt Adressaten voraus, die anders handeln können. Sapolsky ist sich dieser Spannung bewusst und spricht offen davon, dass er selbst nicht ohne das Gefühl der Freiheit leben könne. Das ist ehrlich – und es zeigt, dass die These praktisch nicht lebbar ist. Eine Weltanschauung, die man nicht leben kann, verdient Misstrauen.`,
          sources: [
            { kind: 'fachliteratur', author: 'Kathleen D. Vohs, Jonathan W. Schooler', work: 'The Value of Believing in Free Will: Encouraging a Belief in Determinism Increases Cheating', ref: 'Psychological Science 19 (1)', year: '2008', quote: `Versuchspersonen, die einen Text gegen den freien Willen gelesen hatten, betrogen in einer anschließenden Aufgabe häufiger.`, status: 'paraphrase', note: 'Achtung: Der Befund ließ sich in späteren Replikationsversuchen nicht zuverlässig bestätigen – nicht als Hauptargument verwenden.' },
          ],
          followUps: [
            {
              id: 'vohs-schooler-repliziert-nicht',
              objection: `Die Studie, nach der Menschen ohne Glauben an Willensfreiheit mehr betrügen, ist nicht repliziert worden. Dein Nützlichkeitsargument fällt in sich zusammen.`,
              objectionBy: 'Kritiker aus der Replikationsforschung',
              answer: `Zugestanden – ich stütze mich nicht darauf. Mein Argument ist nicht, dass der Glaube an Freiheit nützlich ist, sondern dass das Argumentieren selbst Freiheit voraussetzt. Ob eine Überzeugung nützlich ist, entscheidet nicht, ob sie wahr ist – das gilt für deine Position genauso wie für meine.`,
              detail: `Ein gutes Beispiel für ehrliche Apologetik: Schwache empirische Stützen räumt man ein, die logische Hauptlinie bleibt. Wer an einer wackligen Studie festhält, verliert Glaubwürdigkeit für das ganze Argument.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gott-determiniert',
      objection: `Ihr Christen seid doch selbst Deterministen: Gott hat alles vorherbestimmt, sagen Augustinus und Calvin, und Römer 9 klingt auch so. Warum regt ihr euch über naturalistischen Determinismus auf, wenn ihr einen göttlichen habt?`,
      objectionBy: 'Jerry Coyne (und calvinistische Theologen von der anderen Seite)',
      answer: `Die koptisch-orthodoxe Kirche lehrt keinen theologischen Determinismus. Mit den Vätern sagt sie: Gott weiß alles im Voraus, aber er bestimmt nicht alles im Voraus (Johannes von Damaskus). Das Heil ist Synergie – Gottes Gnade und unsere freie Antwort. Calvins doppelte Prädestination ist eine westliche Sonderentwicklung, die wir ausdrücklich ablehnen.`,
      detail: `Hier hilft die konfessionelle Klarheit: Ein Kopte muss nicht verteidigen, was Calvin lehrte. Die östlichen Väter – Irenäus, Athanasius, Johannes Chrysostomus – sind einhellig: Gott will, dass alle Menschen gerettet werden (1 Tim 2,4), und die Verlorenheit ist Folge freier Ablehnung (Mt 23,37). Augustinus ist in seinen späten antipelagianischen Schriften in eine Richtung gegangen, die die orthodoxe Tradition nicht übernommen hat; in *De libero arbitrio* verteidigt er dagegen die Freiheit. Zu Römer 9 siehe den eigenen Claim im Themenblock Calvinismus: Paulus spricht dort von Gottes Erwählung von Völkern zu heilsgeschichtlichen Aufgaben, nicht von der ewigen Verdammung Einzelner.`,
      sources: [
        { kind: 'bibel', work: '1. Timotheus', ref: '2,4', quote: `… welcher will, daß allen Menschen geholfen werde und sie zur Erkenntnis der Wahrheit kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'synergie-widerspruch',
          objection: `„Synergie" ist ein schönes Wort für einen Widerspruch. Entweder Gott bewirkt deine Entscheidung, dann bist du nicht frei, oder du bewirkst sie, dann ist Gott nicht allmächtig. Beides zugleich geht nicht.`,
          objectionBy: 'Philosophischer Kritiker',
          answer: `Das wäre ein Widerspruch, wenn Gott eine Ursache *neben* uns auf derselben Ebene wäre – wie zwei Menschen, die an einem Seil ziehen. Gott ist aber der Schöpfer, der uns das Sein *und* die Freiheit selbst schenkt. Er konkurriert nicht mit unserer Freiheit, er trägt sie. Wie ein Autor, der eine Figur nicht „wegschiebt", sondern ihr überhaupt erst Raum gibt – nur dass Gott wirkliche Freiheit schenkt.`,
          detail: `Die klassische Theologie unterscheidet Erstursache (Gott, der das Sein gibt) und Zweitursachen (Geschöpfe, die wirklich wirken). Diese Sicht ist nicht kompetitiv: Je mehr Gott wirkt, desto mehr ist das Geschöpf es selbst. Phil 2,12–13 hält genau das zusammen. Die Väter vergleichen es mit dem Sonnenlicht: Das Auge sieht wirklich, aber nicht ohne Licht. Ehrlich bleibt: Wie genau göttliches und menschliches Wirken ineinandergreifen, ist ein Geheimnis – aber ein Geheimnis ist kein Widerspruch.`,
          followUps: [
            {
              id: 'gott-urheber-des-boesen',
              objection: `Wenn Gott jede freie Handlung im Sein erhält, dann erhält er auch die böse Tat. Dann ist er der Urheber der Sünde.`,
              objectionBy: 'Philosophischer Kritiker',
              answer: `Gott erhält das *Sein* der Handlung – die Kraft, den Willen, die Bewegung. Das Böse daran ist aber kein zusätzliches Sein, sondern ein Mangel: die Abwendung von dem Guten, auf das der Wille ausgerichtet ist. Diesen Mangel bewirkt nicht Gott, sondern das Geschöpf, das sich abwendet. So sehen es Athanasius und Basilius: Das Böse hat kein eigenes Wesen.`,
              detail: `Athanasius erklärt in *Contra Gentes*, dass das Böse ursprünglich nicht existierte und keine eigene Substanz hat; es entstand, als die Seele sich vom Guten abwandte. Basilius hält eine ganze Homilie unter dem Titel *Dass Gott nicht der Urheber des Bösen ist*. Für die Theodizee siehe ausführlich den Themenblock „Das Problem des Leids".`,
              sources: [
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '6–7', year: 'ca. 335', quote: `Das Böse hat kein eigenes Sein; es entstand, als die Seele sich vom Guten abwandte und das Nichtseiende ersann.`, status: 'paraphrase' },
                { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie: Dass Gott nicht der Urheber des Bösen ist (Quod Deus non est auctor malorum)', year: '4. Jh.', quote: `Das Böse ist keine lebendige, beseelte Substanz, sondern ein Zustand der Seele, der der Tugend entgegengesetzt ist und aus der Abkehr vom Guten entsteht.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn deine Überzeugung vom Determinismus nur das Ergebnis deiner Hirnchemie ist – warum sollte ich ihr mehr trauen als meiner, die ebenfalls Hirnchemie ist?`,
    `Warum schreibst du Bücher, um Menschen zu überzeugen, wenn sie ohnehin nur tun, was ihre Neuronen festlegen?`,
    `Welches Experiment hat eine komplexe moralische Entscheidung vollständig aus vorangehenden Hirnzuständen abgeleitet?`,
    `Wenn niemand etwas verdient, verdient dann das Opfer eines Verbrechens Gerechtigkeit?`,
    `Lebst du im Alltag – wenn dich jemand belügt oder dir hilft – wirklich so, als hätte er nicht anders handeln können?`,
  ],
  avoid: [
    `„Die Quantenphysik beweist den freien Willen." – Zufall ist keine Freiheit; Quantenindeterminismus schafft höchstens Spielraum, beweist aber nichts. Wer das behauptet, läuft direkt in Harris' Dilemma.`,
    `„Libet ist widerlegt, also ist alles frei." – Die Neuinterpretation entkräftet ein Argument gegen die Freiheit, beweist sie aber nicht. Nicht überziehen.`,
    `„Ohne freien Willen gäbe es keine Moral, also muss es ihn geben." – Das ist ein Wunschargument. Richtig ist: Moralische Verantwortung ist ein starker Beleg, und der Determinismus ist praktisch nicht lebbar – aber Nützlichkeit beweist keine Wahrheit.`,
    `Den Gegnern unterstellen, sie seien deshalb unmoralisch. Sapolsky und Harris treten für Mitgefühl ein – das anerkennen.`,
  ],
  concessions: [
    `Unser Wille ist tiefgreifend beeinflusst und kann durch Krankheit, Sucht oder Trauma stark eingeschränkt sein. Die Kirche hat das immer gewusst (abgestufte Verantwortung, Barmherzigkeit mit Schwachen) – Sapolskys Forschung schärft diesen Blick.`,
    `Wie Geist und Gehirn genau zusammenwirken, ist ungeklärt – auch Christen haben keine fertige Theorie der mentalen Verursachung.`,
    `Das Selbstaufhebungs-Argument widerlegt nicht jede Form von Kausalität im Denken; es trifft den naturalistischen harten Determinismus, nicht jede kompatibilistische Position.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter van Inwagen', work: 'An Essay on Free Will', year: '1983', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles), Kap. 3', year: '1947/1960', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis, Buch III,1 (Über die Willensfreiheit)', year: 'um 220–230', status: 'paraphrase' },
    { kind: 'gegner', author: 'Robert M. Sapolsky', work: 'Determined: A Science of Life Without Free Will', year: '2023', status: 'paraphrase', note: 'Die stärkste aktuelle Gegenposition – kennen, bevor man debattiert.' },
  ],
  difficulty: 3,
  tags: ['Determinismus', 'Willensfreiheit', 'Sapolsky', 'Harris', 'Kompatibilismus', 'Akteurskausalität', 'Synergie', 'Argument aus der Vernunft'],
  related: [
    'neurowissenschaften/libet-experimente',
    'naturalismus/vernunft-durch-evolution',
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'physik/physik-kausal-geschlossen',
    'willensfreiheit/vorherwissen-schliesst-freiheit-aus',
    'calvinismus/doppelte-praedestination',
    'theodizee/logisches-problem-des-uebels',
  ],
};

export default claim;
