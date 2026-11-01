import type { Claim, Source } from '../../../schema.ts';

const prigogine1972: Source = {
  kind: 'gegner',
  author: 'Ilya Prigogine, Grégoire Nicolis, Agnessa Babloyantz',
  work: '„Thermodynamics of Evolution", Physics Today 25 (11), S. 23–28',
  year: '1972',
  quote: `Die Wahrscheinlichkeit, dass sich bei gewöhnlichen Temperaturen eine makroskopische Zahl von Molekülen zu den hochgeordneten Strukturen und koordinierten Funktionen lebender Organismen zusammenfügt, sei verschwindend gering; die Autoren setzen ihre Hoffnung auf Strukturbildung fern vom Gleichgewicht.`,
  status: 'paraphrase',
  note: 'Prigogine (Nobelpreis Chemie 1977) als Zeuge für die Größe des Problems – und zugleich als Vertreter der Selbstorganisations-Hoffnung. Fair darstellen.',
};

const kauffman1995: Source = {
  kind: 'gegner',
  author: 'Stuart Kauffman',
  work: 'At Home in the Universe: The Search for the Laws of Self-Organization and Complexity',
  year: '1995',
  quote: `In hinreichend vielfältigen chemischen Gemischen entstünden kollektiv autokatalytische Mengen mit großer Wahrscheinlichkeit („order for free").`,
  status: 'paraphrase',
};

const orgel2008: Source = {
  kind: 'gegner',
  author: 'Leslie E. Orgel',
  work: '„The Implausibility of Metabolic Cycles on the Prebiotic Earth", PLoS Biology 6 (1), e18',
  year: '2008',
  quote: `Orgel hält sich selbst organisierende Stoffwechselzyklen ohne Enzyme für unplausibel, weil die dafür nötigen Katalysatoren mit der erforderlichen Spezifität in einer präbiotischen Umgebung nicht zu erwarten seien.`,
  status: 'paraphrase',
  note: 'Orgel war einer der Väter der RNA-Welt-Hypothese – kein ID-Vertreter.',
};

const claim: Claim = {
  id: 'selbstorganisation',
  title: `„Selbstorganisation erklärt biologische Ordnung (Prigogine, Kauffman)."`,
  proponents: [
    { name: 'Ilya Prigogine', role: 'Physikochemiker (1917–2003), Nobelpreis für Chemie 1977', work: 'Theorie der dissipativen Strukturen' },
    { name: 'Stuart Kauffman', role: 'Theoretischer Biologe, Santa Fe Institute', work: 'The Origins of Order (1993); At Home in the Universe (1995)' },
    { name: 'Jeremy England', role: 'Physiker (zuvor MIT)', work: '„Statistical physics of self-replication", Journal of Chemical Physics 139 (2013)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")' },
  ],
  steelman: `Ordnung entsteht in der Natur ständig von selbst, sobald Energie durch ein System fließt: Bénard-Zellen in erhitztem Öl, die pulsierenden Muster der Belousov-Zhabotinsky-Reaktion, Wirbelstürme, Schneeflocken. Ilya Prigogine erhielt den Nobelpreis dafür, dass er zeigte, wie fern vom thermodynamischen Gleichgewicht neue, geordnete „dissipative Strukturen" entstehen. Der Zweite Hauptsatz verbietet das nicht, denn die Erde ist ein offenes System, das von der Sonne gespeist wird. Stuart Kauffman hat gezeigt, dass in hinreichend vielfältigen chemischen Gemischen autokatalytische Netzwerke beinahe zwangsläufig entstehen – „Ordnung gratis". Im Labor haben sich selbst replizierende Peptide und kooperative RNA-Netzwerke gebildet. Jeremy England argumentiert, dass getriebene Systeme physikalisch dazu tendieren, Energie zu dissipieren und sich zu replizieren. Leben ist die natürliche Fortsetzung dieser Selbstorganisation – ein Designer ist überflüssig.`,
  biblical: {
    summary: `Christen müssen Selbstorganisation nicht fürchten. Die Genesis beschreibt, wie Gottes Geist über dem ungeordneten Wasser schwebt (Gen 1,2) und Gottes Wort Ordnung schafft; die Erde „bringt hervor" auf Gottes Befehl (Gen 1,11.24). Die Fähigkeiten der Natur, Muster und Strukturen zu bilden, sind Gaben des Schöpfers. Die Frage ist nicht, ob Natur sich organisiert, sondern ob Selbstorganisation die spezifische Information des Lebens hervorbringt.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,2', quote: `Und die Erde war wüst und leer, und es war finster auf der Tiefe; und der Geist Gottes schwebte auf dem Wasser.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '1,11', quote: `Und Gott sprach: Es lasse die Erde aufgehen Gras und Kraut, das sich besame, und fruchtbare Bäume, da ein jeglicher nach seiner Art Frucht trage und habe seinen eigenen Samen bei sich selbst auf Erden. Und es geschah also.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter bejahten von Gott verliehene Eigenkräfte der Natur. Basilius sieht im Befehl „Die Erde bringe hervor" ein bleibendes Naturgesetz; Augustinus spricht von „Keimgründen" (rationes seminales), die Gott in die Schöpfung gelegt hat und die sich zur rechten Zeit entfalten. Eine sich selbst ordnende Natur ist also mit dem Schöpfungsglauben vereinbar – vorausgesetzt, man verwechselt die geschaffene Fähigkeit nicht mit dem Schöpfer.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: '5,10', quote: `Der Befehl Gottes wurde zu einem bleibenden Gesetz der Natur, das der Erde ihre Fruchtbarkeit verleiht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'VI', quote: `Gott legte „Keimgründe" (rationes seminales) in die Schöpfung, aus denen sich die Dinge zu ihrer Zeit entfalten.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Selbstorganisation ist real und wichtig: Musterbildung, Konvektion, Reaktions-Diffusions-Systeme (Turing) und Kristallisation sind gut verstanden. Sie erzeugen Ordnung aus Naturgesetzen und Randbedingungen. Umstritten ist, ob sie die *spezifizierte, aperiodische* Information biologischer Makromoleküle erklärt. Kauffmans autokatalytische Mengen sind überwiegend theoretische Modelle; experimentelle Beispiele (selbstreplizierende Peptide nach Ghadiri, kooperative RNA-Netzwerke) verwenden von Chemikern entworfene, gereinigte Komponenten. Orgel hielt sich selbst organisierende präbiotische Stoffwechselzyklen für unplausibel. Prigogine selbst hielt die zufällige Selbstassemblierung lebender Strukturen für verschwindend unwahrscheinlich und setzte seine Hoffnung auf Nichtgleichgewichtsprozesse – ein konkreter Weg zum Leben ist daraus nicht hervorgegangen.`,
    sources: [prigogine1972, kauffman1995, orgel2008,
      { kind: 'wissenschaft', author: 'David H. Lee, Juan R. Granja, Jose A. Martinez, Kay Severin, M. Reza Ghadiri', work: '„A self-replicating peptide", Nature 382, S. 525–528', year: '1996', status: 'paraphrase', quote: `Ein entworfenes 32-Aminosäuren-Peptid katalysiert seine eigene Bildung aus zwei vorgefertigten Fragmenten.` },
    ],
  },
  quickAnswer: `Selbstorganisation erzeugt Ordnung – sich wiederholende Muster wie Wirbel, Wellen oder Kristalle –, aber keine spezifische, informationsreiche Abfolge. Ein Wirbelsturm ist beeindruckend, aber er schreibt kein Rezept. Kauffmans Netzwerke sind Computermodelle; die Laborbeispiele nutzen von Chemikern entworfene Moleküle. Und Christen haben mit Selbstorganisation kein Problem: Sie ist eine Fähigkeit, die Gott der Natur gegeben hat.`,
  keyPoints: [
    `**Zugeständnis:** Offene Systeme bilden spontan Ordnung; der Zweite Hauptsatz ist hier kein gutes Argument für Christen.`,
    `**Ordnung ≠ Information:** Selbstorganisation liefert regelmäßige, von Randbedingungen bestimmte Muster; Leben braucht aperiodische, funktional festgelegte Sequenzen.`,
    `**Je mehr Gesetz, desto weniger Botschaft:** Würden Naturgesetze die DNA-Folge festlegen, könnte sie kaum Information tragen (Polanyi).`,
    `**Modelle und entworfene Moleküle:** Autokatalytische Netzwerke sind theoretisch; Laborbeispiele beruhen auf entworfenen, gereinigten Komponenten.`,
    `**Energie braucht Kopplung:** Rohe Energie zerstört eher, als sie aufbaut; Leben koppelt Energie über Maschinen an bestimmte Reaktionen.`,
    `**Theologisch entspannt:** Basilius und Augustinus bejahen von Gott verliehene Eigenkräfte der Natur.`,
  ],
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer unterscheidet drei Arten von Abfolgen: **Ordnung** (repetitiv, z. B. „ABABAB" oder ein Kristall), **Komplexität** (unregelmäßig, z. B. Zufallsfolgen) und **spezifizierte Komplexität** (unregelmäßig und funktional, z. B. ein Satz oder ein Gen). Selbstorganisation erklärt Ordnung, Zufall erklärt Komplexität – aber keine von beiden erklärt spezifizierte Komplexität. Meyer berichtet, dass der Biophysiker Dean Kenyon, Mitautor des einflussreichen Selbstorganisations-Buchs *Biochemical Predestination* (1969), seine eigene Theorie später verwarf, weil chemische Affinitäten die Reihenfolge von Aminosäuren und Nukleotiden nicht bestimmen.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 11', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour betont aus der Praxis des Labors: Energie ohne Richtung zerstört. Wer ein organisches Gemisch erhitzt oder bestrahlt, erhält keine zunehmend lebensähnliche Ordnung, sondern Zersetzung und Teer. Synthesechemie gelingt, weil der Chemiker Energie gezielt einsetzt – in einer bestimmten Reaktion, zu einem bestimmten Zeitpunkt, mit bestimmten Partnern. Die Behauptung, Selbstorganisation übernehme diese Rolle, müsse an konkreten Reaktionen gezeigt werden, nicht an Konvektionszellen.`,
      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: 'Vortragsreihe „Abiogenesis: The Origin of Life" (YouTube)', year: '2023', status: 'paraphrase' }],
    },
    {
      person: 'brian-miller',
      role: 'als Physiker (Thermodynamik)',
      text: `Brian Miller erläutert, dass offene Systeme zwar lokale Ordnung bilden können, dass aber die Art der Ordnung entscheidend ist. Dissipative Strukturen wie Bénard-Zellen verschwinden, sobald der Energiefluss aufhört, und speichern keine Information. Lebende Systeme dagegen bauen hochspezifische, langlebige Moleküle auf, deren Struktur nicht durch den Energiefluss bestimmt wird. Dafür braucht es Maschinen, die Energie in gezielte chemische Arbeit umsetzen – deren Entstehung die Selbstorganisation voraussetzt, statt sie zu erklären.`,
      sources: [{ kind: 'fachliteratur', author: 'Brian Miller', work: 'Beitrag zur Thermodynamik in: The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase' }],
    },
    {
      person: 'boyle',
      role: 'als Begründer der modernen Chemie',
      text: `Robert Boyle warnte schon im 17. Jahrhundert davor, „die Natur" wie eine handelnde Person zu behandeln, die selbst plant und ordnet. Für ihn ist Natur das geordnete Wirken der Gesetze und Mechanismen, die Gott der Welt gegeben hat – vergleichbar mit einer kunstvollen Uhr, deren Teile nach dem Plan ihres Erbauers zusammenwirken. Wer sagt, „die Selbstorganisation" habe das Leben hervorgebracht, verleiht einem Prozess eine Schöpferrolle, die nach Boyle nur einem Urheber zukommt.`,
      sources: [{ kind: 'wissenschaft', author: 'Robert Boyle', work: 'A Free Enquiry into the Vulgarly Received Notion of Nature', year: '1686', status: 'paraphrase', quote: `Boyle kritisiert die Personifizierung der „Natur" als eigenständig handelnde Instanz und vergleicht die Welt mit einem kunstvollen Uhrwerk (etwa der Straßburger Uhr).` }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius liest „Die Erde bringe hervor" als Befehl, der der Erde eine bleibende Fruchtbarkeit einprägt. Eine Natur mit echten Eigenkräften ist für ihn kein Konkurrent Gottes, sondern sein Werk. Damit bietet die patristische Tradition einen Rahmen, in dem Selbstorganisation ohne Angst bejaht werden kann – bei gleichzeitiger Weigerung, sie zum Schöpfer zu erklären.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: '5,10', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'offene-systeme-ordnung',
      objection: `Offene Systeme mit Energiezufuhr erzeugen spontan Ordnung: Bénard-Zellen, Wirbelstürme. Der Zweite Hauptsatz ist kein Problem.`,
      objectionBy: 'Dave Farina',
      answer: `Einverstanden – ich benutze das Argument mit dem Zweiten Hauptsatz nicht. Aber Ordnung ist nicht Information. Bénard-Zellen sind durch Temperaturgefälle und Gefäßform bestimmt, verschwinden ohne Energiezufuhr und codieren nichts. Leben braucht Moleküle, deren Abfolge eine Funktion festlegt.`,
      questionsBack: [`Welche selbstorganisierte Struktur speichert eine Abfolge, die etwas anderes codiert?`],
      followUps: [
        {
          id: 'information-ist-ordnung',
          objection: `Information ist doch auch nur eine Form niedriger Entropie, also Ordnung.`,
          answer: `Nicht ganz: Ein Kristall hat niedrige Entropie und fast keine Information. Thermodynamische und informationelle Größen sind verschieden. Ein Energiefluss wählt keine bestimmte Sequenz aus; dazu braucht es einen Mechanismus, der die Energie gezielt an bestimmte Reaktionen koppelt.`,
          followUps: [
            {
              id: 'england-dissipation',
              objection: `Jeremy England zeigt, dass getriebene Systeme physikalisch zur Selbstreplikation tendieren.`,
              objectionBy: 'Jeremy England',
              answer: `Ein interessanter theoretischer Rahmen. Er beschreibt allgemeine thermodynamische Tendenzen; ein konkretes chemisches System, das so zu einem informationstragenden Replikator wurde, zeigt er nicht. Für die Frage nach dem Ursprung des Lebens ist es eine Hoffnung, kein Mechanismus.`,
              sources: [{ kind: 'gegner', author: 'Jeremy L. England', work: '„Statistical physics of self-replication", Journal of Chemical Physics 139, 121923', year: '2013', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'kauffman-autokatalyse',
      objection: `Kauffman: In hinreichend komplexen Gemischen entstehen autokatalytische Netzwerke zwangsläufig – Ordnung gratis.`,
      objectionBy: 'Stuart Kauffman',
      answer: `Kauffmans Modelle nehmen an, dass jedes Molekül mit einer festen Wahrscheinlichkeit die Bildung anderer katalysiert. Reale präbiotische Chemie hat Nebenreaktionen, Teerbildung und Verdünnung. Leslie Orgel, einer der Väter der RNA-Welt, hielt sich selbst organisierende präbiotische Zyklen deshalb für unplausibel.`,
      sources: [kauffman1995, orgel2008],
      followUps: [
        {
          id: 'ghadiri-vaidya',
          objection: `Ghadiri hat ein selbstreplizierendes Peptid gezeigt, andere Gruppen kooperative RNA-Netzwerke.`,
          answer: `Mit entworfenen, gereinigten Peptiden bzw. RNA-Fragmenten aus bekannten Ribozymen. Das sind beeindruckende Experimente, die zeigen, was gut entworfene Komponenten können – nicht, wie sie aus einem ungeordneten Gemisch entstehen.`,
          followUps: [
            {
              id: 'reine-stoffe-normal',
              objection: `Jedes Experiment arbeitet mit reinen Stoffen – das ist normale Methodik.`,
              answer: `Natürlich. Dann darf man aber nicht ohne Nachweis auf schmutzige präbiotische Gemische hochrechnen. Tour nennt das den Massentransfer: Wie kommen die richtigen Stoffe in ausreichender Reinheit und Menge zusammen?`,
            },
          ],
        },
      ],
    },
    {
      id: 'kristalle-dna',
      objection: `Kristalle und Schneeflocken zeigen Komplexität aus Naturgesetzen. Warum nicht auch die DNA?`,
      objectionBy: 'Stuart Kauffman',
      answer: `Weil Gesetze regelmäßige Muster erzeugen. Würden Naturgesetze die DNA-Sequenz festlegen, wäre sie eintönig wie ein Kristall und könnte kaum Information tragen. Genau diese Einsicht brachte Dean Kenyon, einen führenden Vertreter der chemischen Selbstorganisation, dazu, seine eigene Theorie aufzugeben.`,
      followUps: [
        {
          id: 'kenyon-kreationist',
          objection: `Kenyon ist später Kreationist geworden – kein glaubwürdiger Zeuge.`,
          answer: `Es geht um sein Argument, nicht um seine Person – und das ist überprüfbare Chemie: Es gibt keine Bindungsaffinitäten, die festlegen, welche Base oder Aminosäure auf die nächste folgt. Wenn du solche Affinitäten kennst, nenne sie.`,
        },
      ],
    },
    {
      id: 'gegen-selbstorganisation',
      objection: `Du bist nur gegen Selbstorganisation, weil sie Gott überflüssig macht.`,
      answer: `Nein. Ich bejahe Selbstorganisation als Fähigkeit, die Gott der Natur gegeben hat – Basilius und Augustinus haben genau so gedacht. Meine Frage ist nur, ob sie Codes und funktionale Sequenzen erzeugt. Bisher ist das nicht gezeigt.`,
      followUps: [
        {
          id: 'gott-nur-zuschauer',
          objection: `Dann erklärt die Selbstorganisation am Ende doch alles, und Gott ist nur Zuschauer.`,
          answer: `Selbst dann bliebe die Frage, warum die Naturgesetze und die Chemie überhaupt so beschaffen sind, dass sie Leben ermöglichen. Gesetze erklären, wie Dinge ablaufen, nicht warum es sie gibt. Gott ist in christlicher Sicht nicht Zuschauer, sondern Urheber und Erhalter dieser Ordnung.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche selbstorganisierte Struktur trägt eine Botschaft, die etwas anderes codiert?`,
    `Welches Experiment zeigt ein autokatalytisches Netzwerk aus nicht entworfenen Molekülen?`,
    `Warum hielt Leslie Orgel präbiotische Stoffwechselzyklen für unplausibel?`,
    `Wenn Gesetze die DNA-Sequenz festlegten – wie könnte sie dann unterschiedliche Proteine codieren?`,
  ],
  avoid: [
    `„Der Zweite Hauptsatz verbietet Ordnung" – falsch für offene Systeme; damit verlierst du jeden Physiker.`,
    `Selbstorganisation als „Mythos" abtun – sie ist gut belegte Physik und Chemie.`,
  ],
  concessions: [
    `Offene Systeme bilden spontan Ordnung; Prigogines Arbeiten sind bahnbrechend.`,
    `Selbstreplizierende Peptide und kooperative RNA-Netzwerke sind echte Laborbefunde.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 11', year: '2009', status: 'paraphrase' },
    kauffman1995,
    orgel2008,
  ],
  difficulty: 2,
  tags: ['Selbstorganisation', 'Prigogine', 'Kauffman', 'Thermodynamik', 'Ordnung'],
  related: ['chemie-biochemie/dna-ist-keine-information', 'ursprung-des-lebens/genug-zeit', 'ursprung-des-lebens/hydrothermale-quellen', 'physik/naturgesetze-erklaeren-sich-selbst'],
};

export default claim;
