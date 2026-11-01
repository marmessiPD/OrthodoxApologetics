import type { Claim, Source } from '../../../schema.ts';

const crick1968: Source = {
  kind: 'gegner',
  author: 'Francis H. C. Crick',
  work: '„The Origin of the Genetic Code", Journal of Molecular Biology 38, S. 367–379',
  year: '1968',
  quote: `Crick erörtert stereochemische Erklärungen und die Hypothese des „eingefrorenen Zufalls" (frozen accident): Die Zuordnung sei einmal zufällig entstanden und dann erhalten geblieben, weil jede spätere Änderung für den Organismus verheerend gewesen wäre.`,
  status: 'paraphrase',
};

const freelandHurst1998: Source = {
  kind: 'wissenschaft',
  author: 'Stephen J. Freeland, Laurence D. Hurst',
  work: '„The genetic code is one in a million", Journal of Molecular Evolution 47 (3), S. 238–248',
  year: '1998',
  quote: `Unter einer Million zufällig erzeugter alternativer Codes war der Standardcode beim Abpuffern der Folgen von Punktmutationen und Lesefehlern besser als nahezu alle Alternativen.`,
  status: 'paraphrase',
  url: 'https://doi.org/10.1007/pl00006381',
  note: 'Die Autoren deuten dies als Ergebnis natürlicher Selektion, nicht als Design – fair zitieren.',
};

const kooninNovozhilov2009: Source = {
  kind: 'gegner',
  author: 'Eugene V. Koonin, Artem S. Novozhilov',
  work: '„Origin and Evolution of the Genetic Code: The Universal Enigma", IUBMB Life 61, S. 99–111',
  year: '2009',
  quote: `Trotz umfangreicher und teils raffinierter Modellierungen der Code-Optimierung, der Koevolutionstheorie und zahlreicher Experimente sei bislang sehr wenig definitiver Fortschritt bei der Frage nach dem Ursprung des Codes erzielt worden.`,
  status: 'paraphrase',
  note: 'Schon der Titel („universelles Rätsel") ist ein Zugeständnis zweier führender Evolutionsbiologen.',
};

const polanyi1968: Source = {
  kind: 'wissenschaft',
  author: 'Michael Polanyi',
  work: '„Life\'s Irreducible Structure", Science 160, S. 1308–1312',
  year: '1968',
  quote: `Die Information der DNA ist nicht durch die Chemie ihrer Bestandteile festgelegt; gerade weil die Basenfolge chemisch unbestimmt ist, kann sie Information tragen – so wie die Physik des Papiers nicht den Text bestimmt.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'genetischer-code-zufall',
  title: `„Der genetische Code ist ein eingefrorener Zufall."`,
  proponents: [
    { name: 'Francis Crick', role: 'Molekularbiologe, Nobelpreis 1962', work: '„The Origin of the Genetic Code", J. Mol. Biol. 38 (1968)' },
    { name: 'Eugene V. Koonin', role: 'Evolutionsbiologe, NCBI (NIH)', work: 'Koonin & Novozhilov, IUBMB Life 61 (2009)' },
    { name: 'Stephen J. Freeland', role: 'Evolutionsbiologe, University of Maryland, Baltimore County', work: '„The genetic code is one in a million" (1998) – deutet die Optimierung als Selektion' },
    { name: 'Michael Yarus', role: 'Biochemiker, University of Colorado Boulder', work: 'Life from an RNA World (2010) – stereochemische Hypothese' },
  ],
  steelman: `Der genetische Code ordnet 64 Basentripletts (Codons) 20 Aminosäuren und drei Stoppsignalen zu. Er ist nahezu universell – aber nicht ganz: Mitochondrien und manche Bakterien verwenden leicht abweichende Varianten. Das zeigt: Der Code ist nicht notwendig, sondern kontingent. Crick erklärte schon 1968, warum er trotzdem überall fast gleich ist: Einmal etabliert, wäre jede Änderung tödlich gewesen – er ist „eingefroren". Für seine Entstehung gibt es drei naturalistische Theorien: Stereochemie (Aminosäuren binden an ihre Codons), Koevolution (der Code wuchs mit den Biosynthesewegen) und adaptive Optimierung (Selektion auf Fehlertoleranz). Dass der Code so gut gegen Fehler gepuffert ist, belegt gerade die Wirkung natürlicher Selektion. Ein Designer hätte keinen Code mit Varianten und Ungereimtheiten gewählt.`,
  biblical: {
    summary: `Die Schrift beschreibt Gottes Schöpfung als Werk des Wortes: „Im Anfang war das Wort (Logos)" (Joh 1,1), „Gott sprach … und es geschah" (Gen 1). Der Logos ist zugleich Vernunft und Rede – eine Welt, die durch das Wort geschaffen ist, darf Sinn, Ordnung und Zeichenhaftigkeit enthalten. Man sollte Ps 139 („alle Tage auf dein Buch geschrieben") nicht als DNA-Prophezeiung missbrauchen; aber die biblische Grundintuition, dass das Leben „geschrieben" ist, passt erstaunlich gut zu einem echten Code.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,1', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.`, original: 'Ἐν ἀρχῇ ἦν ὁ λόγος', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '139,16', quote: `Deine Augen sahen mich, da ich noch unbereitet war, und waren alle Tage auf dein Buch geschrieben, die noch werden sollten, als derselben keiner da war.`, translation: 'Luther 1912', status: 'verbatim', note: 'Poetischer Text über Gottes Vorsehung – keine Aussage über DNA.' },
    ],
  },
  church: {
    summary: `Für Athanasius ist der Logos das ordnende Prinzip der Schöpfung, das allem Maß und Zusammenhang gibt. Die alexandrinische Theologie sieht deshalb in der Vernünftigkeit der Natur einen Widerschein des göttlichen Logos – nicht einen Beweis aus Lücken, sondern eine Deutung des Ganzen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '40–41', quote: `Der Logos des Vaters ordnet das All und verleiht ihm Bestand und Vernunftgestalt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Stand: Der Ursprung des genetischen Codes ist ungelöst – Koonin und Novozhilov nennen ihn ein „universelles Rätsel" mit wenig definitivem Fortschritt. Die Hypothese des „eingefrorenen Zufalls" erklärt die Universalität (warum er sich nicht mehr ändert), nicht die Entstehung. Freeland und Hurst zeigten, dass der Standardcode Fehler außerordentlich gut abpuffert („one in a million"); spätere Analysen betonen, dass er sehr gut, aber nicht absolut optimal ist. Stereochemische Affinitäten wurden für einige Aminosäuren berichtet, sind aber umstritten. Das Kernproblem: Der Code wird von Aminoacyl-tRNA-Synthetasen umgesetzt – Proteinen, die selbst nach diesem Code gebaut werden. Laborexperimente, in denen der Code um künstliche Aminosäuren erweitert wird, zeigen, dass die Zuordnung chemisch nicht zwingend ist, sondern eine Konvention.`,
    sources: [kooninNovozhilov2009, freelandHurst1998, crick1968],
  },
  quickAnswer: `„Eingefrorener Zufall" erklärt nur, warum sich der Code heute nicht mehr ändert – nicht, wie überhaupt ein Code entstand. Ein Code ist eine Zuordnungsregel zwischen Symbolen und Bedeutung; in der Zelle wird sie von 20 spezialisierten Enzymen umgesetzt, die selbst nach diesem Code gebaut sind. Und der Code ist außergewöhnlich gut gegen Fehler optimiert – „one in a million". Eine optimierte Symbolzuordnung ist nach aller Erfahrung das Kennzeichen eines Geistes.`,
  keyPoints: [
    `**Einfrieren ≠ Entstehen:** Crick erklärte die Stabilität des Codes, nicht seinen Ursprung; dieser gilt bis heute als „universelles Rätsel" (Koonin & Novozhilov).`,
    `**Ein echter Code:** Die Zuordnung Codon → Aminosäure ist nicht chemisch erzwungen, sondern wird über Adaptermoleküle (tRNA) und Synthetasen hergestellt – eine Konvention wie in Sprache oder Morse.`,
    `**Henne-Ei:** Ohne Synthetasen kein Code, ohne Code keine Synthetasen.`,
    `**Optimiert:** Der Standardcode puffert Mutationen und Lesefehler besser als fast alle von einer Million Zufallscodes (Freeland & Hurst 1998).`,
    `**Spannung:** Ein Code, der „eingefroren" ist, weil Änderungen tödlich sind, kann schwer gleichzeitig durch viele Änderungen optimiert worden sein.`,
    `**Beliebigkeit spricht für Information:** Gerade weil die Zuordnung chemisch frei ist, kann sie Information tragen (Polanyi).`,
  ],
  voices: [
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph (Information)',
      text: `Meyer betont, dass der genetische Code die Merkmale eines echten semiotischen Systems hat: Symbole (Codons), die nicht durch ihre chemischen Eigenschaften, sondern durch eine Zuordnungsregel für etwas anderes stehen (Aminosäuren). Diese Regel wird von einem Übersetzungsapparat umgesetzt – Ribosomen, tRNAs und Synthetasen –, der selbst wieder nach dem Code hergestellt wird. Ein solches System aus Code und Decodierapparat kennen wir aus Erfahrung nur als Werk intelligenter Akteure (Sprache, Computer). Die naturalistischen Theorien setzen jeweils einen Teil des Apparats schon voraus.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'marcos-eberlin',
      role: 'als Chemiker',
      text: `Eberlin sieht in der Fehlertoleranz des Codes ein Beispiel für „Voraussicht": Ähnliche Codons codieren häufig chemisch ähnliche Aminosäuren, sodass viele Punktmutationen oder Lesefehler nur geringe Folgen haben. Ein System, das mögliche künftige Fehler schon in seine Grundstruktur einbaut, deutet er als Merkmal planender Intelligenz – vergleichbar mit Ingenieuren, die Redundanz und Fehlerkorrektur von Anfang an vorsehen.`,
      sources: [{ kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight: How the Chemistry of Life Reveals Planning and Purpose', year: '2019', status: 'paraphrase' }],
    },
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour nennt in „Time Out" den Ursprung des Codes als eine der Fragen, die die OOL-Forschung offen zugeben sollte. Als Chemiker betont er, dass zwischen Nukleotiden und Aminosäuren keine chemische Notwendigkeit besteht, die die heutige Zuordnung erzwingen würde. Der Code ist daher keine Folge der Molekülchemie, sondern eine Ordnung, die über ihr liegt.`,
      sources: [{ kind: 'wissenschaft', author: 'James M. Tour', work: '„Time Out", Inference: International Review of Science 4/4', year: '2019', status: 'paraphrase', url: 'https://inference-review.com' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Athanasius beschreibt den Logos als den, der der Schöpfung Ordnung, Zusammenhang und Vernunft verleiht. Der Gedanke, dass die Grundlagen des Lebens in einer Art „Sprache" geschrieben sind, ist dieser alexandrinischen Sicht nicht fremd: Eine durch das Wort geschaffene Welt trägt Spuren des Wortes. Das ist kein naturwissenschaftliches Argument, sondern der Deutungsrahmen, in dem der Befund eines echten Codes sinnvoll erscheint.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '40–44', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'crick-frozen-accident',
      objection: `Crick hat gezeigt: Der Code ist ein eingefrorener Zufall. Da wurde nichts geplant.`,
      objectionBy: 'Dave Farina',
      answer: `Crick erklärte, warum der Code sich heute nicht mehr ändert: Jede Änderung wäre tödlich. Das ist eine Erklärung für das Einfrieren, nicht für das Entstehen. Und das Wort „Zufall" passt schlecht zu einem Code, der Fehler besser abpuffert als fast alle von einer Million Alternativen.`,
      sources: [crick1968, freelandHurst1998],
      followUps: [
        {
          id: 'varianten-beliebig',
          objection: `Die Abweichungen in Mitochondrien zeigen: Der Code ist beliebig, nicht entworfen.`,
          answer: `Beliebigkeit ist gerade das Merkmal von Codes: Dass „Hund" einen Hund bedeutet, folgt nicht aus der Chemie der Tinte. Die Varianten sind kleine, abgeleitete Umbelegungen einzelner Codons und ändern nichts am Grundprinzip einer Zuordnungsregel mit Decodierapparat.`,
          followUps: [
            {
              id: 'designer-notwendiger-code',
              objection: `Ein Designer hätte einen chemisch notwendigen, eindeutigen Code gewählt – keinen beliebigen.`,
              answer: `Ein chemisch erzwungener Code wäre gar kein Code: Wenn die Chemie festlegte, welche Sequenz entsteht, könnte die Sequenz keine Information tragen. Michael Polanyi hat das schon 1968 in *Science* gezeigt: Gerade die chemische Unbestimmtheit macht Information möglich.`,
              sources: [polanyi1968],
            },
          ],
        },
      ],
    },
    {
      id: 'selektion-optimiert',
      objection: `Freeland und Hurst zeigen doch: Natürliche Selektion hat den Code optimiert.`,
      objectionBy: 'Stephen Freeland',
      answer: `Sie zeigen, dass er hochgradig optimiert ist – das ist der Befund. Wie die Optimierung entstand, ist eine zweite Frage. Um Codes nach ihrer Fitness zu vergleichen, muss es schon Leben mit Übersetzungsapparat geben, und in einem funktionierenden Organismus ist das Umbelegen von Codons katastrophal. Genau deshalb ist der Code ja „eingefroren".`,
      sources: [freelandHurst1998],
      questionsBack: [`Wie kann ein Code gleichzeitig eingefroren sein (weil Änderungen tödlich sind) und durch viele Änderungen optimiert worden sein?`],
      followUps: [
        {
          id: 'fruehe-optimierung',
          objection: `Die Optimierung geschah früh, schrittweise, als der Code mit neuen Aminosäuren wuchs.`,
          objectionBy: 'Eugene Koonin',
          answer: `Das sind Modelle – sie setzen tRNAs, Synthetasen und Ribosomen bereits voraus. Koonin und Novozhilov schreiben selbst, dass trotz raffinierter Modellierung sehr wenig definitiver Fortschritt erzielt wurde, und nennen den Code ein „universelles Rätsel".`,
          sources: [kooninNovozhilov2009],
          followUps: [
            {
              id: 'koonin-szenario',
              objection: `Inzwischen gibt es plausible Szenarien.`,
              objectionBy: 'Eugene Koonin',
              answer: `Szenarien sind keine Demonstrationen. Welches Experiment hat die Entstehung eines Übersetzungssystems gezeigt? Koonin selbst hielt 2007 ausgerechnet die Entstehung eines gekoppelten Replikations-Translations-Systems für so unwahrscheinlich, dass er ein Multiversum bemühte.`,
              sources: [{ kind: 'gegner', author: 'Eugene V. Koonin', work: 'Biology Direct 2:15', year: '2007', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'stereochemie',
      objection: `Stereochemie: Aminosäuren binden an ihre Codons oder Anticodons. Der Code ist chemisch bedingt.`,
      objectionBy: 'Michael Yarus',
      answer: `Für einige Aminosäuren wurden in Laborexperimenten Affinitäten zu bestimmten RNA-Sequenzen berichtet; ihre Deutung ist umstritten. Entscheidend ist aber: Heute erfolgt die Zuordnung nicht durch direkte Bindung zwischen Codon und Aminosäure, sondern über Adapter (tRNA) und Synthetasen. Genau dieser Adapter entkoppelt Chemie und Bedeutung – das hat schon Crick vorhergesagt.`,
      followUps: [
        {
          id: 'synthetasen-schrittweise',
          objection: `Dann sind die Synthetasen eben schrittweise entstanden.`,
          answer: `Die Synthetasen sind Proteine, die nach dem Code gebaut werden, den sie selbst umsetzen. Ohne sie kein Code, ohne Code keine sie. Ein schrittweiser Aufbau braucht schon ein funktionierendes Übersetzungssystem.`,
          followUps: [
            {
              id: 'ribozym-synthetasen',
              objection: `Die RNA-Welt löst das: Ribozyme können Aminosäuren an RNA hängen – die ersten Synthetasen.`,
              objectionBy: 'Jack Szostak',
              answer: `Es gibt im Labor selektierte Ribozyme, die Aminosäuren an tRNA koppeln – eine echte chemische Möglichkeit. Aber der Code verlangt einen *Satz* aufeinander abgestimmter, spezifischer Erkennungen für 20 Aminosäuren. Ein einzelnes, im Labor gezüchtetes Ribozym ist davon weit entfernt. Siehe den Claim zur RNA-Welt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'code-metapher',
      objection: `„Code" ist nur eine Metapher. In der Zelle gibt es nur Chemie.`,
      answer: `Nirenberg und Khorana erhielten 1968 den Nobelpreis dafür, den genetischen Code zu „entschlüsseln". Biologen sprechen seither vom Code im strengen Sinn einer Zuordnungstabelle – und Labore erweitern ihn heute sogar gezielt um künstliche Aminosäuren. Ausführlich dazu der Claim „DNA ist nur Chemie".`,
    },
  ],
  questionsToAsk: [
    `Erklärt „eingefroren" auch, wie der Code entstanden ist?`,
    `Wie entstanden Synthetasen, die nach dem Code gebaut sind, den sie umsetzen?`,
    `Wie kann ein Code eingefroren und zugleich durch Änderungen optimiert sein?`,
    `Kennst du ein anderes System aus Code und Decodierapparat, das ohne Intelligenz entstand?`,
  ],
  avoid: [
    `„Der Code ist perfekt" – Fachleute zeigen, dass er sehr gut, aber nicht absolut optimal ist; sag „hochgradig optimiert".`,
    `Ps 139 als „Vorhersage der DNA" zitieren.`,
    `Behaupten, es gebe keine Code-Varianten – es gibt sie (Mitochondrien, manche Bakterien).`,
  ],
  concessions: [
    `Es gibt leicht abweichende Code-Varianten; der Code ist nicht chemisch notwendig.`,
    `Freeland und Hurst deuten die Optimierung selbst als Folge natürlicher Selektion.`,
  ],
  furtherReading: [
    kooninNovozhilov2009,
    freelandHurst1998,
    { kind: 'fachliteratur', author: 'Marcos Eberlin', work: 'Foresight', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Genetischer Code', 'Frozen Accident', 'Information', 'Synthetasen'],
  related: ['chemie-biochemie/dna-ist-keine-information', 'ursprung-des-lebens/rna-welt', 'ursprung-des-lebens/ool-nur-wissensluecke'],
};

export default claim;
