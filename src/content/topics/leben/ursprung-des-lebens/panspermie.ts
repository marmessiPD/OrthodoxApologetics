import type { Claim, Source } from '../../../schema.ts';

const crickOrgel1973: Source = {
  kind: 'gegner',
  author: 'Francis H. C. Crick, Leslie E. Orgel',
  work: '„Directed Panspermia", Icarus 19, S. 341–346',
  year: '1973',
  quote: `Die Autoren erwägen, dass Mikroorganismen absichtlich von einer außerirdischen Zivilisation per Raumfahrzeug auf die Erde gebracht worden sein könnten, und nennen u. a. die Universalität des genetischen Codes als Indiz.`,
  status: 'paraphrase',
  note: 'Crick und Orgel bezeichneten die Idee selbst als spekulativ.',
};

const crick1981: Source = {
  kind: 'gegner',
  author: 'Francis Crick',
  work: 'Life Itself: Its Origin and Nature (New York: Simon & Schuster)',
  year: '1981',
  quote: `Ein ehrlicher Mensch, ausgestattet mit allem heute verfügbaren Wissen, könne nur feststellen, dass der Ursprung des Lebens in gewissem Sinne gegenwärtig fast wie ein Wunder erscheine, so viele Bedingungen hätten erfüllt sein müssen, um es in Gang zu setzen.`,
  original: 'An honest man, armed with all the knowledge available to us now, could only state that in some sense, the origin of life appears at the moment to be almost a miracle, so many are the conditions which would have had to have been satisfied to get it going.',
  status: 'paraphrase',
  note: 'Vielfach zitiert; der genaue Wortlaut variiert in der Sekundärliteratur, die Seitenangabe (oft S. 88) ist nicht geprüft. Crick war Atheist und meinte kein echtes Wunder – fair zitieren!',
};

const kelvin1871: Source = {
  kind: 'wissenschaft',
  author: 'William Thomson (Lord Kelvin)',
  work: 'Präsidentenrede vor der British Association for the Advancement of Science, Edinburgh',
  year: '1871',
  quote: `Kelvin hielt es für möglich, dass Keime auf Meteoriten zur Erde gelangten, betonte aber zugleich, tote Materie werde nach allem, was die Wissenschaft lehre, nicht ohne den Einfluss bereits lebender Materie lebendig.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'panspermie',
  title: `„Das Leben kam aus dem All (Panspermie)."`,
  proponents: [
    { name: 'Francis Crick und Leslie Orgel', role: 'Molekularbiologe (Nobelpreis 1962) und präbiotischer Chemiker', work: '„Directed Panspermia", Icarus 19 (1973); Crick, Life Itself (1981)' },
    { name: 'Fred Hoyle und Chandra Wickramasinghe', role: 'Astrophysiker', work: 'Evolution from Space (1981)' },
    { name: 'Svante Arrhenius', role: 'Chemiker, Nobelpreis 1903', work: 'Das Werden der Welten (1907)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'Interview in der Dokumentation „Expelled" (2008): Erwägung einer außerirdischen Aussaat' },
  ],
  steelman: `Der Weltraum ist voller organischer Chemie: Der Murchison-Meteorit enthält Dutzende Aminosäuren und Nukleobasen, in Meteoriten wurde auch Ribose nachgewiesen, und Proben der Asteroiden Ryugu und Bennu brachten weitere Bausteine zur Erde. Bakteriensporen überstehen erstaunlich lange Vakuum und Strahlung; Gesteinsbrocken werden durch Einschläge zwischen Mars und Erde ausgetauscht. Vielleicht entstand Leben also auf einem Himmelskörper mit günstigeren Bedingungen und kam dann zur Erde. Francis Crick, Mitentdecker der DNA-Struktur, ging noch weiter: Die Universalität des genetischen Codes passe zur Idee, dass eine fortgeschrittene Zivilisation das Leben bewusst aussäte. Panspermie ist naturwissenschaftlich prüfbar und braucht keinen Gott.`,
  biblical: {
    summary: `Für die Bibel ist das All kein gottfreier Raum: „Am Anfang schuf Gott Himmel und Erde" (Gen 1,1); durch Christus ist alles geschaffen, „das im Himmel und auf Erden ist, das Sichtbare und das Unsichtbare" (Kol 1,16). Ob Bausteine oder sogar Leben aus dem All kamen, ist theologisch unproblematisch – auch das All ist Schöpfung. Panspermie verlagert die Frage nur an einen anderen Ort.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,16–17', quote: `Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und das Unsichtbare … Und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Dass Meteoriten und Kometen organische Bausteine zur frühen Erde brachten, ist breit akzeptiert. Die Panspermie im engeren Sinn – lebende Keime aus dem All – ist eine Minderheitenposition: Überleben über interstellare Distanzen ist fraglich, und es gibt keine Belege für außerirdisches Leben. Für einen Transfer innerhalb des Sonnensystems (Mars–Erde) hält man es für denkbar. Die gerichtete Panspermie (Crick/Orgel) ist spekulativ und derzeit nicht prüfbar. Vor allem: Beide Varianten lösen das Ursprungsproblem nicht, sondern verlagern es.`,
    sources: [crickOrgel1973,
      { kind: 'wissenschaft', author: 'Yoshihiro Furukawa u. a.', work: '„Extraterrestrial ribose and other sugars in primitive meteorites", PNAS 116, S. 24440–24445', year: '2019', status: 'paraphrase', quote: `Nachweis von Ribose und anderen Zuckern in Meteoriten in sehr geringen Konzentrationen.` },
    ],
  },
  quickAnswer: `Panspermie löst das Rätsel nicht, sie verschiebt es nur auf einen anderen Planeten – dort gelten dieselben Gesetze der Chemie. Die Bausteine aus Meteoriten sind die gleichen gemischten, racemischen Produkte, ohne Ketten und ohne Code. Und dass Francis Crick eine gezielte Aussaat durch Außerirdische erwog, zeigt vor allem, wie schwer ihm eine Entstehung auf der Erde fiel – er nannte sie „fast ein Wunder".`,
  keyPoints: [
    `**Verlagerung, keine Erklärung:** Ob auf der Erde, dem Mars oder einem fernen Planeten – Hydrolyse, Händigkeit und Information sind universelle Probleme der Chemie.`,
    `**Bausteine ja, Leben nein:** Meteoriten liefern ein breites Gemisch, überwiegend nicht-biologische Moleküle, keine Polymere, keinen Code.`,
    `**Cricks Eingeständnis:** Der Atheist Crick nannte den Ursprung des Lebens „fast ein Wunder" und erwog intelligente Aussaat – ein Zugeständnis, dass Intelligenz als Ursache ernsthaft in Betracht kommt.`,
    `**Regress:** Gerichtete Panspermie erklärt das Leben durch Lebewesen, deren eigener Ursprung wieder erklärt werden muss.`,
    `**Konsistenz:** Wer gerichtete Panspermie für Wissenschaft hält, kann den Schluss auf Intelligenz nicht grundsätzlich für unwissenschaftlich erklären.`,
  ],
  voices: [
    {
      person: 'kelvin',
      role: 'als Physiker (historische Stimme)',
      text: `Lord Kelvin, gläubiger Christ und einer der großen Physiker des 19. Jahrhunderts, schlug 1871 selbst vor, dass Keime auf Meteoriten zur Erde gelangt sein könnten. Zugleich hielt er daran fest, dass nach aller Erfahrung tote Materie nicht ohne bereits lebende Materie lebendig wird. Seine Panspermie war also ausdrücklich keine Antwort auf die Frage nach dem *ersten* Ursprung – sie verschob ihn nur. Ein schönes Beispiel dafür, dass ein Christ solche Hypothesen nüchtern erwägen kann, ohne die Schöpferfrage zu verdrängen.`,
      sources: [kelvin1871],
    },
    {
      person: 'pasteur',
      role: 'als Mikrobiologe',
      text: `Pasteurs Experimente begründeten den Erfahrungssatz, dass Leben nur aus Leben hervorgeht. Panspermie respektiert diesen Satz auf eigentümliche Weise: Sie erklärt irdisches Leben durch anderes Leben. Damit bleibt aber die Frage offen, wie das *erste* Leben irgendwo im Universum entstand – und für diese Frage gilt Pasteurs Befund unverändert.`,
      sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Sorbonne-Vortrag über die Urzeugung', ref: '7. April 1864', status: 'paraphrase', quote: `Widerlegung der Urzeugung von Mikroorganismen in sterilisierten Nährlösungen.` }],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer greift Cricks gerichtete Panspermie auf: Ein Nobelpreisträger, der die Information der DNA so gut verstand wie kaum ein anderer, hielt eine intelligente Ursache für eine ernsthafte Option. Das zeigt, dass der Schluss von Information auf Intelligenz nicht religiös motiviert sein muss. Die Außerirdischen verschieben das Problem allerdings nur: Woher stammt die Information *ihres* Lebens? Am Ende braucht es eine Intelligenz, die nicht selbst ein biologisches, informationsabhängiges Wesen ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Debattenredner',
      text: `Lennox kommentiert gern Dawkins' Bemerkung aus „Expelled", das Leben könne von einer außerirdischen Zivilisation entworfen worden sein: Dawkins sei offen für intelligentes Design – nur nicht für Gott. Doch jede außerirdische Intelligenz ist selbst ein kontingentes, komplexes Wesen, das eine Erklärung verlangt. Der christliche Gott dagegen ist kein Glied in der Kette, sondern ihr ungeschaffener Grund.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God / God\'s Undertaker (Debattenbeiträge)', year: '2009–2011', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bausteine-aus-dem-all',
      objection: `Meteoriten enthalten Aminosäuren, Zucker und Nukleobasen. Die Bausteine des Lebens kamen aus dem All.`,
      objectionBy: 'Dave Farina',
      answer: `Einverstanden – Bausteine wurden sehr wahrscheinlich auch aus dem All geliefert. Aber das ist der leichteste Schritt. Meteoriten zeigen, was ungelenkte Chemie liefert: ein breites Gemisch, racemisch, überwiegend nicht-biologisch, Ribose nur in Spuren – keine Polymere, kein Code.`,
      followUps: [
        {
          id: 'leben-zwangslaeufig',
          objection: `Wenn die Bausteine überall im Universum sind, ist Leben zwangsläufig.`,
          objectionBy: 'Lee Cronin',
          answer: `Aus „Buchstaben gibt es überall" folgt nicht „Bücher entstehen zwangsläufig". „Zwangsläufig" verlangt einen Mechanismus, und genau der fehlt. Bausteine sind notwendig, aber nicht hinreichend.`,
          followUps: [
            {
              id: 'anderer-planet-besser',
              objection: `Dann entstand das Leben eben auf einem anderen Planeten mit besseren Bedingungen.`,
              objectionBy: 'Chandra Wickramasinghe',
              answer: `Welche Bedingungen wären besser? Dass Wasser Biopolymere spaltet, Zucker zu Teer werden und Information nicht aus Chemie folgt, sind keine Eigenheiten der Erde, sondern Gesetze der Chemie. Ein anderer Ort ändert sie nicht.`,
              questionsBack: [`Welche konkrete Eigenschaft dieses anderen Planeten löst das Hydrolyse- oder das Informationsproblem?`],
            },
          ],
        },
      ],
    },
    {
      id: 'crick-gerichtete-panspermie',
      objection: `Francis Crick, der Mitentdecker der DNA, hielt gerichtete Panspermie für möglich. Kein Gott nötig.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das ist aufschlussreich: Crick war überzeugter Atheist. Er schrieb, der Ursprung des Lebens erscheine „fast wie ein Wunder", und erwog eine gezielte Aussaat durch Intelligenz. Damit gibt er zu, dass eine intelligente Ursache für die Information des Lebens eine ernsthafte Option ist.`,
      sources: [crick1981, crickOrgel1973],
      followUps: [
        {
          id: 'aliens-natuerlich',
          objection: `Außerirdische sind natürliche Wesen. Das ist Wissenschaft, keine Religion.`,
          objectionBy: 'Richard Dawkins',
          answer: `Gut – aber dann muss der Ursprung *ihres* Lebens erklärt werden, und wir stehen wieder am Anfang. Am Ende einer solchen Kette braucht es eine Intelligenz, die nicht selbst aus Information zusammengesetzt ist. Und der Schluss „Information weist auf Intelligenz" ist in deinem Szenario schon akzeptiert.`,
          followUps: [
            {
              id: 'wer-schuf-gott-panspermie',
              objection: `Und wer hat dann Gott erschaffen?`,
              objectionBy: 'Richard Dawkins',
              answer: `Gott ist nach christlichem Verständnis nicht ein weiteres zusammengesetztes Wesen, sondern ungeschaffen und notwendig – sonst wäre er nicht Gott. Außerirdische sind dagegen kontingente, biologische Wesen, die selbst eine Ursache brauchen. Diese Frage wird im Themenblock Atheismus ausführlich behandelt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'lithopanspermie-mars',
      objection: `Bakteriensporen überleben im All. Gesteinstransfer zwischen Mars und Erde ist realistisch.`,
      answer: `Für das Sonnensystem halte ich das für denkbar – das gebe ich zu. Aber es verlagert den Ursprung auf den Mars, wo die chemischen Grundprobleme dieselben waren. Ein Umzug ist keine Entstehungsgeschichte.`,
      followUps: [
        {
          id: 'mars-bessere-chemie',
          objection: `Der Mars hatte vielleicht bessere Bedingungen – Borate, trockenere Phasen. Steven Benner hat das vorgeschlagen.`,
          objectionBy: 'Steven Benner',
          answer: `Interessant: Ein führender OOL-Chemiker hielt die irdischen Bedingungen offenbar für so ungünstig, dass er den Mars ins Spiel brachte. Das zeigt die Schwere der Probleme. Selbst wenn Borate die Ribose stabilisieren, bleiben Händigkeit, Polymerisation und Information.`,
          sources: [{ kind: 'wissenschaft', author: 'Alonso Ricardo, Matthew A. Carrigan, Alison N. Olcott, Steven A. Benner', work: '„Borate Minerals Stabilize Ribose", Science 303, S. 196', year: '2004', status: 'paraphrase' }],
        },
      ],
    },
    {
      id: 'panspermie-wissenschaftlich',
      objection: `Panspermie ist zumindest eine wissenschaftliche Hypothese. Schöpfung ist es nicht.`,
      answer: `Gerichtete Panspermie ist eine Design-Hypothese: Sie erklärt Leben durch eine Intelligenz. Wenn sie als wissenschaftlich gilt, kann der Schluss auf eine intelligente Ursache nicht grundsätzlich unwissenschaftlich sein – unabhängig davon, wer der Urheber ist.`,
      followUps: [
        {
          id: 'panspermie-testbar',
          objection: `Panspermie ist testbar, etwa durch Signaturen im Erbgut oder Funde auf dem Mars.`,
          answer: `Dann ist auch der Designschluss in demselben Sinn prüfbar: Man untersucht, ob ein Muster Merkmale trägt, die bekanntermaßen nur Intelligenz erzeugt – genau wie SETI. Siehe den Claim „Intelligent Design ist keine Wissenschaft" im Themenblock Evolution.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches chemische Problem des Lebensursprungs löst ein anderer Planet?`,
    `Warum erwog ein Atheist wie Crick eine intelligente Aussaat?`,
    `Woher stammt die Information im Leben der hypothetischen Außerirdischen?`,
    `Wenn gerichtete Panspermie wissenschaftlich ist – warum dann nicht jeder Schluss auf intelligente Ursachen?`,
  ],
  avoid: [
    `„Crick glaubte an Wunder" – falsch; er war Atheist und meinte „fast ein Wunder" als Ausdruck der Schwierigkeit.`,
    `Außerirdisches Leben als Bedrohung für den Glauben darstellen – die Bibel verbietet es nicht (siehe Themenblock Astrobiologie).`,
  ],
  concessions: [
    `Organische Bausteine wurden sehr wahrscheinlich auch durch Meteoriten und Kometen zur frühen Erde gebracht.`,
    `Ein Gesteinstransfer zwischen Mars und Erde ist physikalisch möglich.`,
  ],
  furtherReading: [
    crick1981,
    crickOrgel1973,
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Panspermie', 'Francis Crick', 'Meteoriten', 'Außerirdische'],
  related: ['ursprung-des-lebens/ool-nur-wissensluecke', 'ursprung-des-lebens/miller-urey', 'astrobiologie/ausserirdische-widerlegen-bibel', 'atheismus/wer-schuf-gott', 'evolution/id-keine-wissenschaft'],
};

export default claim;
