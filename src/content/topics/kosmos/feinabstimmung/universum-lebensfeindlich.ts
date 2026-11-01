import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'universum-lebensfeindlich',
  title: `„Das Universum ist fast überall lebensfeindlich – schlechtes Design."`,
  proponents: [
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker, Hayden Planetarium', work: 'Death by Black Hole (2007); Vorträge („Das Universum will uns umbringen")' },
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker', work: 'God: The Failed Hypothesis (2007)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: '„Does the Universe Need God?", in: Blackwell Companion to Science and Christianity (2012)' },
    { name: 'Bertrand Russell (†1970)', role: 'Philosoph und Mathematiker', work: 'Religion and Science (1935), Kap. „Cosmic Purpose"' },
  ],
  steelman: `Wenn das Universum für Leben gemacht wäre, sähe es ganz anders aus. Über 99,99… Prozent seines Volumens sind fast leeres, eiskaltes Vakuum, durchzogen von tödlicher Strahlung. Sterne explodieren, Gammastrahlenblitze sterilisieren ganze Regionen, Schwarze Löcher verschlingen alles. Selbst auf der Erde ist Leben ständig durch Asteroideneinschläge, Vulkanismus und Eiszeiten bedroht, und in einigen Milliarden Jahren wird die Sonne die Erde verbrennen. Am Ende steht der Wärmetod. Warum zwei Billionen Galaxien und 13,8 Milliarden Jahre für eine einzige Spezies auf einem Staubkorn? Ein Ingenieur, der so verschwenderisch und gefährlich baut, wäre ein schlechter Ingenieur. Das Universum sieht genau so aus, wie man es erwartet, wenn es gleichgültig gegenüber dem Leben ist.`,
  biblical: {
    summary: `Die Bibel behauptet nirgends, das Universum existiere nur für den Menschen oder sei überall bewohnbar. „Die Himmel erzählen die Ehre Gottes" (Ps 19,2) – ihre Größe dient zuerst Gottes Ehre. Die Weite des Himmels führt den Psalmisten nicht zur Verzweiflung, sondern zum Staunen über Gottes Zuwendung (Ps 8,4–5; Jes 40,26). In Gottes Rede an Hiob (Hiob 38–41) erscheinen gerade die wilden, menschenfeindlichen Teile der Schöpfung als Gottes Freude. Und die Schrift kennt eine Schöpfung, die der Vergänglichkeit unterworfen ist und auf Erlösung wartet (Röm 8,20–22).`,
    detail: `- **Ps 19,2:** Zweck des Himmels ist das Gotteslob, nicht menschliches Wohnen.
- **Hiob 38–41:** Meer, Wüste, wilde Tiere, Leviathan – Gott freut sich an einer Schöpfung, die nicht auf den Menschen zugeschnitten ist.
- **Ps 104:** Gott sorgt für Löwen, Steinböcke und das Meer – ein Kosmos voller eigenständiger Geschöpfe.
- **Jes 40,26:** Die ungezählten Sterne zeigen die Größe dessen, der sie beim Namen ruft.
- **Röm 8,20–22; Offb 21,1:** Die gegenwärtige Schöpfung ist nicht der Endzustand.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '40,26', quote: `Hebet eure Augen in die Höhe und sehet! Wer hat solche Dinge geschaffen und führt ihr Heer bei der Zahl heraus? Er ruft sie alle mit Namen …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '8,4–5', quote: `Wenn ich sehe die Himmel, deiner Finger Werk, den Mond und die Sterne, die du bereitet hast: was ist der Mensch, daß du seiner gedenkst …?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '38,4–7', quote: `Wo warst du, da ich die Erde gründete? … da mich die Morgensterne miteinander lobten und jauchzten alle Kinder Gottes?`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter wussten, dass die Erde im Vergleich zum Himmel winzig ist – schon Ptolemäus nannte sie im Verhältnis zur Fixsternsphäre einen Punkt, und Boethius griff das auf. Für Basilius ist die Größe und Schönheit des Himmels ein Weg, die noch größere Größe des Schöpfers zu ahnen. Die Weite des Kosmos war nie ein Einwand gegen den Glauben, sondern Anlass zur Anbetung.`,
    detail: `- **Basilius, Hexaemeron 6,1:** Wenn das Sichtbare so groß und schön ist, wie groß muss der sein, der es geschaffen hat?
- **Boethius, Consolatio Philosophiae II,7:** Die ganze Erde ist im Verhältnis zum Himmel nur ein Punkt.
- In der koptischen Psalmodie wird die ganze Schöpfung – Sonne, Mond, Sterne, Meere – zum Lob Gottes aufgerufen (vgl. das Lied der drei Jünglinge, Dan 3, LXX).`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 6,1', year: 'ca. 370', quote: `Wenn die sichtbaren Dinge so schön sind, wie viel schöner ist der unsichtbare Schöpfer; wenn sie so groß sind, wie unermesslich ist der, der sie gemacht hat.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Boethius', work: 'Consolatio Philosophiae', ref: 'II,7', year: 'ca. 524', quote: `Die ganze Erde hat im Vergleich zum Raum des Himmels die Ausdehnung eines Punktes.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Psalmodie (Lob der drei Jünglinge, vgl. Daniel 3 LXX)', quote: `Sonne und Mond, Sterne des Himmels, Regen und Tau – preiset den Herrn.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass der größte Teil des Universums für Leben unbewohnbar ist, ist unbestritten. Strittig ist die Deutung. Robert Dicke zeigte 1961 in *Nature*, dass ein Universum, in dem Beobachter aus Kohlenstoff existieren, mindestens einige Milliarden Jahre alt sein muss: So lange brauchen Sterne, um die schweren Elemente zu erbrüten. In einem expandierenden Universum hängen Alter und Größe direkt zusammen – ein Milliarden Jahre altes Universum ist zwangsläufig Milliarden Lichtjahre groß. Größe und Alter sind also keine Verschwendung, sondern Voraussetzung.`,
    detail: `- **Dicke 1961** (*Nature* 192, 440): Das Alter des Universums ist nicht beliebig, sondern durch die Lebensdauer von Sternen und die Bildung schwerer Elemente eingeschränkt.
- **Elemente:** Kohlenstoff, Sauerstoff und Stickstoff entstehen in Sternen; Eisen und schwerere Elemente auch in Supernovae und Neutronenstern-Verschmelzungen. Die „lebensfeindlichen" Vorgänge sind die Fabriken des Lebens.
- **Galaktische habitable Zone** (Gonzalez, Brownlee & Ward, *Icarus* 152, 2001): Gefahren (Supernovae, Strahlung) und Ressourcen (Metallizität) zusammen ergeben bewohnbare Bereiche.
- **Offene Fragen:** Ob das Universum effizienter lebensfreundlich hätte sein können (Adams 2019), ist Gegenstand der Forschung.`,
    sources: [
      { kind: 'wissenschaft', author: 'Robert H. Dicke', work: '„Dirac’s Cosmology and Mach’s Principle", Nature 192, 440–441', year: '1961', quote: `Das gegenwärtige Alter des Universums ist nicht zufällig, sondern durch die Bedingung eingeschränkt, dass es Physiker geben muss – also Sterne, die Kohlenstoff erzeugt haben.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Guillermo Gonzalez, Donald Brownlee & Peter Ward', work: '„The Galactic Habitable Zone: Galactic Chemical Evolution", Icarus 152, 185–200', year: '2001', quote: `Nur ein Teilbereich der Milchstraße bietet die Kombination aus ausreichender Metallizität und geringen Gefahren für komplexes Leben.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Victor J. Stenger', work: 'God: The Failed Hypothesis', year: '2007', quote: `Ein Universum, das für den Menschen geschaffen wäre, wäre nicht zu fast 100 Prozent lebensfeindlich.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Größe und das Alter des Universums sind keine Verschwendung, sondern Voraussetzung: Kohlenstoff und Sauerstoff werden in Sternen über Milliarden Jahre erbrütet, und ein expandierendes Universum, das Milliarden Jahre alt ist, ist zwangsläufig Milliarden Lichtjahre groß (Dicke 1961). Ein kleineres Universum wäre ein totes Universum. Und die Bibel sagt nie, das All sei nur für uns da: „Die Himmel erzählen die Ehre Gottes."`,
  keyPoints: [
    `**Alter ist nötig:** Schwere Elemente entstehen in Sternen über Milliarden Jahre (Dicke 1961).`,
    `**Größe folgt aus dem Alter:** In einem expandierenden Universum sind Alter und Größe gekoppelt.`,
    `**Die „Gefahren" sind Fabriken:** Supernovae haben das Eisen in deinem Blut und das Kalzium in deinen Knochen erzeugt.`,
    `**Verschwendung ist ein Begriff für knappe Mittel:** Für einen unendlichen Schöpfer gibt es keine „Materialkosten".`,
    `**Biblisch:** Der Himmel dient zuerst der Ehre Gottes (Ps 19), und die gegenwärtige Schöpfung ist nicht der Endzustand (Röm 8; Offb 21).`,
  ],
  voices: [
    {
      person: 'guillermo-gonzalez',
      role: 'als Astronom',
      text: `Gonzalez hat das Konzept der galaktischen habitablen Zone mitentwickelt: Zu nah am galaktischen Zentrum drohen Supernovae und Strahlung, zu weit draußen fehlen schwere Elemente für Gesteinsplaneten. Die Gefahren, die Tyson aufzählt, sind also nicht einfach „Fehler", sondern Teil eines Systems, in dem dieselben Prozesse Leben ermöglichen und begrenzen. Zusammen mit Jay Richards zeigt er außerdem, dass unser Standort nicht nur bewohnbar, sondern auffallend gut für die Erforschung des Universums geeignet ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Guillermo Gonzalez & Jay W. Richards', work: 'The Privileged Planet', year: '2004', quote: `Die Bedingungen, die Leben ermöglichen, fallen auffällig mit den Bedingungen zusammen, die wissenschaftliche Entdeckung ermöglichen.`, status: 'paraphrase' }],
    },
    {
      person: 'luke-barnes',
      role: 'als Kosmologe',
      text: `Barnes beantwortet die Frage „Warum ist das Universum so groß?" mit Physik: Ein Universum, das lange genug existiert, um Sterne mehrerer Generationen und damit schwere Elemente hervorzubringen, muss sich entsprechend lange ausgedehnt haben. Seine Größe ist die Kehrseite seines Alters, und sein Alter ist Bedingung für Chemie. Wer ein „sparsameres" Universum fordert, fordert ein Universum, in dem niemand leben könnte.`,
      sources: [{ kind: 'wissenschaft', author: 'Luke A. Barnes & Geraint F. Lewis', work: 'A Fortunate Universe', year: '2016', quote: `Größe und Alter des Universums sind Voraussetzungen für die Entstehung von Leben, keine Verschwendung.`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet',
      text: `Lewis wies darauf hin, dass das Argument aus der Größe des Universums kein modernes ist: Schon Ptolemäus wusste, dass die Erde im Vergleich zum Himmel ein Punkt ist, und das mittelalterliche Christentum lebte gut damit. Wäre das Universum klein, würde man Christen vorwerfen, sie glaubten an ein enges, auf den Menschen zugeschnittenes Weltbild. Ist es groß, wirft man ihnen Bedeutungslosigkeit des Menschen vor. Ein Argument, das in beide Richtungen „funktioniert", beweist nichts.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', ref: 'Kap. 7 „A Chapter of Red Herrings"', year: '1947', quote: `Die Kleinheit der Erde im Verhältnis zum Universum war schon Ptolemäus bekannt; das Argument aus der Größe ist kein Ergebnis der modernen Wissenschaft.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater',
      text: `Basilius sah in der Weite und Pracht des Himmels nicht einen Grund zur Gleichgültigkeit, sondern eine Leiter zur Gotteserkenntnis: Wenn schon die sichtbaren Dinge so groß und schön sind, wie unermesslich muss ihr Schöpfer sein. Die Größe des Kosmos ist für ihn Predigt – sie zeigt, dass Gott größer ist als alles, was der Mensch sich vorstellen kann.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 6,1', year: 'ca. 370', quote: `Aus der Größe der sichtbaren Dinge schließen wir auf den, der unermesslich größer ist.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'universum-will-uns-toeten',
      objection: `Das Universum versucht uns umzubringen: Asteroiden, Gammastrahlenblitze, Supernovae, Schwarze Löcher, das eiskalte Vakuum. Das ist kein Haus für uns.`,
      objectionBy: 'Neil deGrasse Tyson',
      answer: `Viele Orte sind tödlich, ja. Aber wir leben in einer schmalen, geschützten Nische – genau das, was die Feinabstimmung erwarten lässt. Und die „tödlichen" Prozesse haben uns gemacht: Supernovae haben das Eisen in deinem Blut und das Kalzium in deinen Knochen erzeugt. Ohne explodierende Sterne kein Leben.`,
      followUps: [
        {
          id: 'designer-ohne-gammablitze',
          objection: `Ein guter Designer hätte keine tödlichen Gammastrahlenblitze gebraucht.`,
          objectionBy: 'Victor Stenger',
          answer: `Eine Welt mit stabilen, verlässlichen Gesetzen hat zwangsläufig auch gefährliche Erscheinungen – dieselbe Gravitation, die uns auf der Erde hält, lässt Sterne kollabieren. C. S. Lewis argumentierte, dass eine feste Natur mit eigenen Gesetzen die Voraussetzung für eine geordnete Welt freier Geschöpfe ist. Die Frage nach dem Leid in der Natur ist ernst; sie gehört zur Theodizee.`,
          followUps: [
            {
              id: 'allmacht-sicheres-universum',
              objection: `Ein allmächtiger Gott hätte ein sicheres Universum mit anderen Gesetzen erschaffen können.`,
              objectionBy: 'Sean Carroll',
              answer: `Kannst du mir eine konkrete Physik nennen, die stabile Materie, Chemie, Sterne und Leben erlaubt, aber keine gefährlichen Phänomene? Jede gesetzmäßige Welt hat Zielkonflikte. Die Behauptung, es gäbe ein besseres Gesamtsystem, ist leicht aufgestellt, aber schwer belegt – die Beweislast liegt beim, der sie aufstellt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'verschwendung-galaxien',
      objection: `Zwei Billionen Galaxien, wenn es nur um Menschen auf einem Planeten ginge? Das ist absurde Verschwendung.`,
      objectionBy: 'Sean Carroll / Victor Stenger',
      answer: `Erstens ist die Größe physikalisch nötig: Ein Universum, das alt genug für Kohlenstoff ist, muss so groß sein (Dicke 1961). Zweitens ist „Verschwendung" ein Begriff für begrenzte Mittel – ein unendlicher Schöpfer hat keine Materialkosten. Drittens geht es der Bibel nicht nur um Menschen: Der Himmel erzählt die Ehre Gottes.`,
      followUps: [
        {
          id: 'ad-hoc-so-wollte-gott',
          objection: `Das ist ad hoc. Egal wie das Universum aussähe – ihr würdet immer sagen: „So wollte Gott es."`,
          objectionBy: 'Sean Carroll',
          answer: `Nein. Dass ein kleines, junges Universum leblos wäre, ist ein physikalisches Ergebnis (Dicke 1961), keine apologetische Ausrede – und es wurde von einem Physiker ohne theologisches Interesse gefunden. Es ist eine überprüfbare Aussage: Ein Universum mit Kohlenstoff-Beobachtern muss alt und groß sein.`,
          followUps: [
            {
              id: 'kleines-universum-mit-wundern',
              objection: `Gott hätte ein kleines Universum schaffen und Leben durch Wunder erhalten können.`,
              objectionBy: 'Gesprächspartner',
              answer: `Möglich – aber dann wäre die Welt nicht gesetzmäßig, nicht erforschbar und nicht verlässlich. Der Gott der Bibel handelt durch Ordnungen, auf die man sich verlassen kann (Jer 33,25), und lässt den Menschen die Welt verstehen. Ein Universum, dessen Größe aus seinen Gesetzen folgt, passt genau zu diesem Gott.`,
            },
          ],
        },
      ],
    },
    {
      id: 'waermetod-sinnlos',
      objection: `Am Ende steht der Wärmetod. Alles Leben erlischt, alle Sterne verglühen. Das ist kein Plan, das ist Sinnlosigkeit.`,
      objectionBy: 'Bertrand Russell / Brian Greene (Until the End of Time, 2020)',
      answer: `Das Christentum hat nie erwartet, dass dieser Kosmos ewig besteht: „Sie werden vergehen, aber du bleibst" (Ps 102,27). Die Hoffnung ruht nicht auf der Physik, sondern auf dem Schöpfer, der eine neue Schöpfung verheißt. Der Wärmetod ist ein Problem für jede rein naturalistische Hoffnung – nicht für den christlichen Glauben.`,
      sources: [{ kind: 'bibel', work: 'Psalm', ref: '102,27', quote: `Sie werden vergehen, aber du bleibst. Sie werden alle veralten wie ein Gewand …`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'neue-schoepfung-wunschdenken',
          objection: `Eine „neue Schöpfung" ist reines Wunschdenken – unbeweisbar.`,
          objectionBy: 'Bertrand Russell',
          answer: `Die christliche Hoffnung gründet auf einem historischen Ereignis: der Auferstehung Christi, die Paulus „Erstling" der neuen Schöpfung nennt (1 Kor 15,20). Ob sie stattgefunden hat, ist eine historische Frage, die man prüfen kann – und die Belege dafür sind erstaunlich stark.`,
          detail: `Siehe den Themenblock „Die Auferstehung Jesu".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Jahre brauchen Sterne, um Kohlenstoff zu erbrüten – und wie groß muss ein so altes, expandierendes Universum sein?`,
    `Welche konkrete Physik erlaubt Leben, aber keine gefährlichen Phänomene?`,
    `Wofür wäre ein kleines Universum „sparsamer", wenn der Schöpfer unbegrenzt ist?`,
    `Worauf gründet deine Hoffnung angesichts des Wärmetods?`,
  ],
  avoid: [
    `Bestreiten, dass der größte Teil des Universums lebensfeindlich ist. Das ist eine Tatsache.`,
    `Behaupten, das Universum sei nur für den Menschen da. Das ist weder biblisch noch nötig.`,
  ],
  concessions: [
    `Der weitaus größte Teil des Universums ist für Leben unbewohnbar, und Leben auf der Erde ist zeitlich begrenzt.`,
    `Die Frage nach Leid und Gefahr in der Natur ist ein ernstes theologisches Thema (Theodizee), das man nicht mit einem Satz erledigen kann.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Robert H. Dicke', work: '„Dirac’s Cosmology and Mach’s Principle", Nature 192', year: '1961', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Guillermo Gonzalez & Jay W. Richards', work: 'The Privileged Planet', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', year: '1947', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Größe des Universums', 'Dicke', 'Supernovae', 'Wärmetod', 'Design'],
  related: [
    'feinabstimmung/feinabstimmung-illusion',
    'astrobiologie/mensch-unbedeutend',
    'astrobiologie/erde-durchschnittlich',
    'theodizee/natuerliche-uebel',
    'auferstehung/halluzinationen',
    'evolution/schlechtes-design',
  ],
};

export default claim;
