import type { Claim, Source } from '../../../schema.ts';

const pinkerBloom1990: Source = {
  kind: 'gegner',
  author: 'Steven Pinker, Paul Bloom',
  work: '„Natural language and natural selection", Behavioral and Brain Sciences 13, S. 707–784',
  year: '1990',
  quote: `Die menschliche Sprachfähigkeit sei eine komplexe Anpassung für die Kommunikation, die – wie das Auge – schrittweise durch natürliche Selektion entstanden sei.`,
  status: 'paraphrase',
};

const berwickChomsky2016: Source = {
  kind: 'wissenschaft',
  author: 'Robert C. Berwick, Noam Chomsky',
  work: 'Why Only Us: Language and Evolution',
  year: '2016',
  quote: `Die Grundoperation der Syntax („Merge"), die hierarchische und unbegrenzt erweiterbare Strukturen erzeugt, sei relativ plötzlich und spät in der Menschheitsgeschichte aufgetreten; es gebe keine „halbe" Merge-Operation und keine echten Vorläufer bei Tieren. Sprache sei in erster Linie ein Instrument des Denkens, erst in zweiter Linie der Kommunikation.`,
  status: 'paraphrase',
  note: 'Berwick und Chomsky sind keine Kreationisten; sie vertreten eine evolutionäre, aber nicht-graduelle Entstehung. Gerade deshalb wiegt ihre Kritik am Gradualismus.',
};

const bolhuis2014: Source = {
  kind: 'wissenschaft',
  author: 'Johan J. Bolhuis, Ian Tattersall, Noam Chomsky, Robert C. Berwick',
  work: '„How Could Language Have Evolved?", PLOS Biology 12 (8), e1001934',
  year: '2014',
  quote: `Die Autoren argumentieren, die Sprachfähigkeit sei erst innerhalb der letzten rund 100.000 Jahre und in kurzer Zeit entstanden; Tierkommunikation biete keine echten Vorstufen der hierarchischen Syntax.`,
  status: 'paraphrase',
};

const hauser2014: Source = {
  kind: 'wissenschaft',
  author: 'Marc D. Hauser, Charles Yang, Robert C. Berwick, Ian Tattersall, Michael J. Ryan, Jeffrey Watumull, Noam Chomsky, Richard C. Lewontin',
  work: '„The mystery of language evolution", Frontiers in Psychology 5, 401',
  year: '2014',
  quote: `Acht Forscher aus Linguistik, Biologie und Paläoanthropologie kommen zu dem Schluss, dass die grundlegenden Fragen nach Ursprung und Evolution der menschlichen Sprachfähigkeit trotz jahrzehntelanger Forschung weitgehend ungeklärt sind.`,
  status: 'paraphrase',
  note: 'Hinweis: Dem Erstautor Marc Hauser wurde in anderen Studien wissenschaftliches Fehlverhalten nachgewiesen (Harvard 2010, ORI 2012). Der Artikel wird hier wegen der Mitautoren (u. a. Chomsky, Lewontin, Tattersall) und als Stimmungsbild zitiert, nicht als Autorität Hausers.',
};

const fedorenko2016: Source = {
  kind: 'wissenschaft',
  author: 'Evelina Fedorenko, Rosemary Varley',
  work: '„Language and thought are not the same thing: evidence from neuroimaging and neurological patients", Annals of the New York Academy of Sciences 1369, S. 132–153',
  year: '2016',
  quote: `Patienten mit schwerer globaler Aphasie können trotz weitgehenden Sprachverlusts noch rechnen, logische Aufgaben lösen und über die Gedanken anderer nachdenken; Sprach- und Denknetzwerke im Gehirn sind teilweise getrennt.`,
  status: 'paraphrase',
};

const senghas2004: Source = {
  kind: 'wissenschaft',
  author: 'Ann Senghas, Sotaro Kita, Aslı Özyürek',
  work: '„Children Creating Core Properties of Language: Evidence from an Emerging Sign Language in Nicaragua", Science 305, S. 1779–1782',
  year: '2004',
  quote: `Gehörlose Kinder in Nicaragua, die ohne sprachliches Vorbild zusammenkamen, entwickelten innerhalb weniger Jahrzehnte eine Gebärdensprache mit grammatischen Kernmerkmalen (Zerlegung in Einheiten, geordnete Kombination); jüngere Kohorten verfeinerten die Grammatik.`,
  status: 'paraphrase',
};

const atkinson2018: Source = {
  kind: 'wissenschaft',
  author: 'Elizabeth Grace Atkinson u. a.',
  work: '„No Evidence for Recent Selection at FOXP2 among Diverse Human Populations", Cell 174, S. 1424–1435',
  year: '2018',
  quote: `Mit größeren und vielfältigeren Datensätzen ließ sich die frühere Annahme einer jungen, starken Selektion auf FOXP2 beim modernen Menschen nicht bestätigen.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'sprache-graduell',
  title: `„Sprache entstand graduell aus Tierlauten."`,
  proponents: [
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'Pinker & Bloom, „Natural language and natural selection" (1990); The Language Instinct (1994)' },
    { name: 'W. Tecumseh Fitch', role: 'Kognitionsbiologe, Universität Wien', work: 'The Evolution of Language (2010)' },
    { name: 'Michael Tomasello', role: 'Entwicklungs- und Vergleichspsychologe, früher MPI für evolutionäre Anthropologie, Leipzig', work: 'Origins of Human Communication (2008)' },
    { name: 'Daniel L. Everett', role: 'Linguist, Bentley University', work: 'How Language Began (2017)' },
    { name: 'Derek Bickerton', role: 'Linguist (1926–2018)', work: 'Language and Species (1990); Adam\'s Tongue (2009)' },
  ],
  steelman: `Sprache ist ein biologisches Merkmal wie jedes andere und muss deshalb eine Evolutionsgeschichte haben. Schimpansen verständigen sich mit Gesten, Grüne Meerkatzen haben unterschiedliche Warnrufe für Leopard, Adler und Schlange, Bonobos und Schimpansen kombinieren Rufe zu neuen Bedeutungen, Singvögel lernen komplexe Gesangsstrukturen. Unsere nächsten Verwandten verfügen über die kognitiven Bausteine: Werkzeuggebrauch, Planung, soziale Intelligenz. Pinker und Bloom haben gezeigt, dass Sprache alle Merkmale einer komplexen Anpassung trägt, die schrittweise durch Selektion entstanden ist – über eine „Protosprache" aus Wörtern ohne Grammatik bis zur heutigen Syntax. Gene wie FOXP2 belegen eine genetische Grundlage, der abgesenkte Kehlkopf eine anatomische. Kinder durchlaufen ebenfalls Stufen: vom Lallen über Einwortsätze zu komplexer Grammatik. Wer hier einen übernatürlichen Sprung behauptet, ersetzt Forschung durch Mystik.`,
  biblical: {
    summary: `Die Bibel beginnt mit einem sprechenden Gott: „Und Gott sprach: Es werde Licht!" (Gen 1,3). Der Mensch wird als sein Bild geschaffen (Gen 1,27) und gibt den Tieren Namen (Gen 2,19–20) – er ordnet die Welt durch Sprache. Im Johannesprolog ist der ewige Sohn „das Wort" (*Logos*), durch das alles gemacht ist (Joh 1,1–3). Sprache ist in der Bibel nicht bloß Kommunikationsmittel, sondern Ausdruck von Vernunft, Beziehung und Ebenbildlichkeit. Über biologische Mechanismen der Sprachfähigkeit sagt die Schrift nichts.`,
    detail: `- **Gen 2,19:** Gott „brachte sie zu dem Menschen, daß er sähe, wie er sie nennte" – der Mensch benennt, Gott schaut zu. Die Namensgebung setzt Begriffe und Unterscheidungen voraus.
- **Logos** bedeutet im Griechischen zugleich „Wort", „Vernunft" und „Sinn". Die Väter sahen den Menschen als *logikos*, als vernunft- und sprachbegabtes Wesen, das am göttlichen Logos teilhat.
- **Ps 19,2–4:** Die Himmel „erzählen" ohne Worte – die Bibel unterscheidet zwischen dem stummen Zeugnis der Schöpfung und der Rede des Menschen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,1', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '2,19', quote: `Denn als Gott der HERR gemacht hatte von der Erde allerlei Tiere auf dem Felde und allerlei Vögel unter dem Himmel, brachte er sie zu dem Menschen, daß er sähe, wie er sie nennte; denn wie der Mensch allerlei lebendige Tiere nennen würde, so sollten sie heißen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass der Mensch mit einer vernunftbegabten Seele nach Gottes Bild geschaffen ist; Sprache ist Ausdruck dieser Vernunft. Athanasius beschreibt die Menschen als *logikoi* – Geschöpfe, die am Logos teilhaben (*De Incarnatione* 3). Gregor von Nyssa verteidigte gegen Eunomius, dass Gott dem Menschen die **Fähigkeit** zur Sprache gab, die konkreten Wörter aber Menschen erfinden – eine bemerkenswert moderne Unterscheidung. Augustinus beschreibt ein „inneres Wort" des Geistes, das keiner bestimmten Sprache angehört und den gesprochenen Wörtern vorausgeht. Über die biologische Geschichte der Sprachfähigkeit hat die Kirche kein Dogma.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3', quote: `Gott schuf die Menschen nicht wie die vernunftlosen Tiere, sondern nach seinem Bild und gab ihnen Anteil an der Kraft seines eigenen Logos, damit sie vernünftig (logikoi) seien.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Contra Eunomium II (in manchen Übersetzungen Buch XII)', quote: `Gott hat der menschlichen Natur die Fähigkeit zu denken und zu sprechen geschenkt; die Namen der Dinge aber bilden die Menschen selbst.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Trinitate', ref: 'XV,10,19–11,20', quote: `Es gibt ein Wort im Herzen, das weder griechisch noch lateinisch noch einer anderen Sprache zugehört; die gesprochenen Wörter sind seine Zeichen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ob Sprache graduell oder relativ abrupt entstand, ist in der Fachwelt heftig umstritten. Gradualisten (Pinker & Bloom 1990, Fitch, Tomasello, Everett) sehen eine schrittweise Entwicklung aus Gesten, Rufen und sozialer Kognition. Die Gegenposition (Berwick & Chomsky 2016; Bolhuis u. a. 2014) betont, dass der Kern der Sprache – eine rekursive, hierarchische Kombinationsoperation („Merge") – keine Zwischenstufen kennt und spät und rasch auftrat. Ein Überblick von acht Forschern (Hauser u. a. 2014) kam zu dem Schluss, dass die grundlegenden Fragen der Sprachevolution weitgehend ungeklärt sind. FOXP2 ist kein „Sprachgen", sondern ein Regulator der Feinmotorik, der u. a. bei Vögeln und Mäusen vorkommt; Neandertaler hatten dieselbe Variante; eine junge Selektion beim modernen Menschen ließ sich nicht bestätigen (Atkinson u. a. 2018). Die Anatomie des Stimmtrakts scheint weniger entscheidend als früher gedacht – die Grenze liegt im Gehirn.`,
    detail: `- **Konsens:** Nur Menschen besitzen eine Sprache mit unbegrenzter, hierarchischer Kombinierbarkeit, Symbolen mit Bezug auf Abwesendes und Abstraktes und spontaner Weitergabe an Kinder.
- **Dissens:** Zeitpunkt (vor 100.000 Jahren oder vor über einer Million?), Tempo (abrupt oder graduell), Treiber (Denken, Kommunikation, Kooperation, Werkzeugbau?), Rolle der Neandertaler.
- **Tierkommunikation:** Kombinationen von Rufen (z. B. bei Bonobos, Schimpansen, Japanmeisen) werden intensiv erforscht; sie zeigen begrenzte Kompositionalität, aber keine unbegrenzte hierarchische Syntax.`,
    sources: [pinkerBloom1990, berwickChomsky2016, bolhuis2014, hauser2014, atkinson2018],
  },
  quickAnswer: `Ob Sprache graduell entstand, ist unter Fachleuten selbst heftig umstritten – Noam Chomsky und Robert Berwick, keine Kreationisten, halten das für unmöglich: Der Kern der Sprache, die Fähigkeit, Wörter zu unbegrenzt verschachtelten Sätzen zu verbinden, kennt keine „halbe" Stufe, und kein Tier besitzt sie. Acht führende Forscher nannten den Ursprung der Sprache 2014 ein „Mysterium". Tierrufe sind begrenzte Signale; menschliche Sprache drückt abstraktes Denken aus. Das passt zur biblischen Sicht, dass der Mensch als vernunftbegabtes Ebenbild des „Wortes" geschaffen ist.`,
  keyPoints: [
    `**Die Fachwelt ist gespalten:** Berwick und Chomsky bestreiten den Gradualismus; Hauser u. a. (2014) nennen den Ursprung der Sprache weitgehend ungeklärt.`,
    `**Rekursion hat keine Hälfte:** Man kann einen Satz in einen Satz einbetten oder nicht – eine „halbe" hierarchische Syntax ist schwer vorstellbar.`,
    `**Tierlaute sind anders:** begrenzt, meist an Situationen gebunden, ohne unbegrenzte Neukombination; Kombinationen von zwei Rufen sind keine Grammatik.`,
    `**FOXP2 ist kein Sprachgen:** Es steuert Feinmotorik, kommt bei vielen Tieren vor, und eine junge Selektion beim Menschen ist nicht bestätigt.`,
    `**Kinder zeigen eine fertige Fähigkeit:** Gehörlose Kinder in Nicaragua erfanden innerhalb weniger Jahrzehnte eine Sprache mit Grammatik – keine jahrtausendelange Stufenfolge.`,
    `**Sprache drückt Denken aus:** Augustinus' „inneres Wort", Gregor von Nyssas „gottgegebene Fähigkeit, menschliche Wörter" – die Väter unterschieden Fähigkeit und Einzelsprache.`,
  ],
  argument: {
    name: 'Das Argument aus der Kluft der Sprache',
    summary: 'Abduktiv: Welche Sicht erklärt die einzigartige Struktur menschlicher Sprache am besten?',
    premises: [
      {
        text: `P1: Menschliche Sprache besitzt Eigenschaften, die in keiner Tierkommunikation vorkommen: unbegrenzte hierarchische Kombination, Bezug auf Abwesendes und Abstraktes, spontane Weitergabe an Kinder.`,
        support: `Weitgehender Konsens, auch bei Gradualisten; Berwick & Chomsky 2016; Bolhuis u. a. 2014.`,
        sources: [berwickChomsky2016, bolhuis2014],
      },
      {
        text: `P2: Für den Kern dieser Eigenschaften (Merge) sind keine funktionsfähigen Zwischenstufen bekannt, und ihr Ursprung gilt selbst führenden Forschern als ungeklärt.`,
        support: `Hauser u. a. 2014; die Debatte zwischen Gradualisten und Saltationisten zeigt, dass keine Seite eine überzeugende Erklärung hat.`,
        sources: [hauser2014],
      },
      {
        text: `P3: Sprache ist eng mit abstraktem, begrifflichem Denken verbunden, das sich nicht auf Lautsignale reduzieren lässt.`,
        support: `Berwick & Chomsky: Sprache primär als Instrument des Denkens; Fedorenko & Varley 2016: Denken bleibt bei Sprachverlust teilweise erhalten – es ist mehr als Sprechen.`,
        sources: [fedorenko2016],
      },
    ],
    conclusion: `Die These „Sprache entstand graduell aus Tierlauten" ist kein gesichertes Ergebnis, sondern eine umstrittene Hypothese. Die einzigartige Struktur der Sprache passt gut zur christlichen Sicht des Menschen als vernunftbegabtes Ebenbild Gottes – ohne dass man biologische Forschung ablehnen müsste.`,
  },
  voices: [
    {
      person: 'kenneth-pike',
      role: 'als Linguist',
      text: `Pike, einer der einflussreichsten Feldlinguisten des 20. Jahrhunderts, analysierte Dutzende bis dahin unbeschriebene Sprachen und prägte die Unterscheidung zwischen „emischer" (innerer) und „etischer" (äußerer) Beschreibung. Für ihn ist Sprache immer eingebettet in die ganze Person: in Absicht, Bedeutung, Beziehung und Kultur. Als überzeugter Christ sah er in der menschlichen Sprachfähigkeit einen Ausdruck der Gottebenbildlichkeit – der Mensch als Wesen, das von einem redenden Gott angeredet wird und antworten kann. Dass jede Sprache, auch die eines kleinen Stammes, unermesslich reich und regelhaft ist, war für ihn ein tägliches Zeugnis dieser Würde.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth L. Pike', work: 'Language in Relation to a Unified Theory of the Structure of Human Behavior', year: '1954–1960 (2. Aufl. 1967)', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Kenneth L. Pike', work: 'With Heart and Mind: A Personal Synthesis of Scholarship and Devotion', year: '1962', status: 'paraphrase' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Egnor argumentiert aus der klinischen Neurochirurgie: Das Gehirn ist für Wahrnehmung, Bewegung und Sprache notwendig, aber abstraktes Denken – Begriffe wie Gerechtigkeit, Zahl oder Wahrheit – lässt sich nicht auf einen bestimmten Hirnort festlegen. Patienten können nach schweren Hirnschäden erstaunlich viel an Denkfähigkeit behalten. Für Egnor stützt das die klassische Sicht, dass der Intellekt eine immaterielle Fähigkeit ist, die das Gehirn nutzt – und Sprache ist sein Ausdruck.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind: A Neurosurgeon\'s Case for the Existence of the Soul', year: '2025', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Sprachphilosoph',
      text: `Augustinus beschreibt in den *Bekenntnissen*, wie er als Kind sprechen lernte, indem er beobachtete, wie Erwachsene Dinge benannten – Wittgenstein machte diese Passage berühmt. In *De Trinitate* geht er tiefer: Vor jedem gesprochenen Wort gibt es ein „inneres Wort", einen Gedanken, der keiner Einzelsprache angehört. Gesprochene Sprachen sind Zeichen dieses inneren Wortes. Moderne Linguisten wie Chomsky, die Sprache primär als Instrument des Denkens verstehen, stehen dieser Sicht näher als die Vorstellung, Sprache sei nur verfeinerte Lautkommunikation.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'I,8,13', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Trinitate', ref: 'XV,10,19–11,20', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe gegen Eunomius',
      text: `Eunomius behauptete, die Namen der Dinge seien von Gott selbst festgelegt und offenbarten ihr Wesen. Gregor widersprach: Gott hat dem Menschen die Fähigkeit zu denken und zu sprechen geschenkt; die konkreten Wörter bilden die Menschen selbst, und darum gibt es viele Sprachen. Diese Unterscheidung zwischen gottgegebener Sprachfähigkeit und menschlich gewachsenen Einzelsprachen ist für heutige Debatten wertvoll: Christen müssen nicht leugnen, dass Sprachen sich historisch entwickeln, um die Fähigkeit zur Sprache als Gabe Gottes zu verstehen.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Contra Eunomium II', status: 'paraphrase' }],
    },
    {
      person: 'mortimer-adler',
      role: 'als Philosoph',
      text: `Adler untersuchte in *The Difference of Man and the Difference It Makes* (1967) die Frage, ob sich der Mensch von den Tieren im Grad oder in der Art unterscheidet. Sein zentrales Kriterium war das begriffliche Denken, das sich in der Sprache zeigt: Menschen sprechen über Abwesendes, Allgemeines und Abstraktes, Tiere nicht. Adler hielt diese Frage für empirisch prüfbar – und kam zu dem Ergebnis, dass die Befunde für einen Artunterschied sprechen.`,
      sources: [{ kind: 'fachliteratur', author: 'Mortimer J. Adler', work: 'The Difference of Man and the Difference It Makes', year: '1967', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'komplexe-anpassung',
      objection: `Sprache ist eine komplexe Anpassung wie das Auge. Pinker und Bloom haben gezeigt, dass sie schrittweise durch natürliche Selektion entstanden ist.`,
      objectionBy: 'Steven Pinker',
      targetsPremise: 2,
      answer: `Das ist eine Position – aber führende Linguisten widersprechen ihr scharf. Berwick und Chomsky, beide keine Kreationisten, argumentieren, dass der Kern der Sprache, die Fähigkeit, Wörter zu unbegrenzt verschachtelten Strukturen zu verbinden, keine Zwischenstufen kennt und spät und rasch auftrat. Acht Forscher kamen 2014 zu dem Schluss, die grundlegenden Fragen der Sprachevolution seien weitgehend ungeklärt. „Graduell" ist also kein gesichertes Ergebnis.`,
      sources: [pinkerBloom1990, berwickChomsky2016, hauser2014],
      questionsBack: [`Wie sieht eine „halbe" Rekursion aus – ein Satz, der zur Hälfte in einen anderen eingebettet ist?`],
      followUps: [
        {
          id: 'protosprache',
          objection: `Eine Protosprache aus Wörtern ohne Grammatik wäre bereits nützlich – Derek Bickerton hat das ausgearbeitet.`,
          objectionBy: 'Derek Bickerton',
          targetsPremise: 2,
          answer: `Bickertons Protosprache ist eine kluge Idee. Aber auffällig ist: Er selbst sah den Übergang von Wortketten zur hierarchischen Syntax als großen, eher abrupten Schritt. Und schon die „Wörter" sind ein Rätsel: willkürliche Symbole, die sich auf Abwesendes beziehen, benutzt kein Tier in freier Wildbahn. Die Protosprache verschiebt die Frage, sie beantwortet sie nicht.`,
          sources: [{ kind: 'gegner', author: 'Derek Bickerton', work: 'Language and Species', year: '1990', status: 'paraphrase' }],
          followUps: [
            {
              id: 'prometheus-mutation',
              objection: `Chomskys Idee, eine einzige Mutation habe Merge hervorgebracht, ist biologisch absurd – eine „Prometheus-Mutation".`,
              objectionBy: 'W. Tecumseh Fitch',
              targetsPremise: 2,
              answer: `Viele Biologen halten das für unplausibel – da stimme ich dir zu. Aber sieh, was das bedeutet: Die Gradualisten können die Struktur der Sprache nicht erklären, die Saltationisten nicht die Biologie. Gerade dieses Dilemma zeigt, dass eine rein materialistische Erklärung fehlt. Christen müssen sich nicht zwischen „langsamer Mechanismus" und „Glückstreffer" entscheiden: Sie sehen die Sprachfähigkeit als Ausdruck der vernunftbegabten Seele.`,
              followUps: [
                {
                  id: 'wissenschaftsstopper',
                  objection: `„Gott gab die Sprache" ist keine Erklärung, sondern ein Wissenschaftsstopper.`,
                  objectionBy: 'Daniel Dennett',
                  answer: `Ich will die Erforschung der Hirngrundlagen und der Genetik nicht stoppen – im Gegenteil. Meine Aussage betrifft etwas anderes: was Sprache *ist*. Sie drückt begriffliches Denken aus – Allgemeines, Abstraktes, Wahres und Falsches. Augustinus nannte das das „innere Wort". Dass ein Wesen Begriffe wie „Gerechtigkeit" oder „unendlich" erfassen kann, ist eine philosophische Frage, die keine Hirnkarte allein beantwortet.`,
                  followUps: [
                    {
                      id: 'aphasie-gehirn',
                      objection: `Aphasien zeigen doch: Sprache sitzt im Gehirn, im Broca- und Wernicke-Areal. Wird es beschädigt, ist die Sprache weg. Keine Seele nötig.`,
                      objectionBy: 'Patricia Churchland',
                      targetsPremise: 3,
                      answer: `Dass Sprache das Gehirn braucht, bestreitet niemand – ein Pianist braucht auch ein Klavier. Aber Abhängigkeit ist nicht Identität. Bemerkenswert ist: Patienten mit schwerer globaler Aphasie können trotz Sprachverlust noch rechnen, logisch schließen und über die Gedanken anderer nachdenken. Das Denken ist also mehr als die Sprachmaschinerie – genau das, was die klassische Sicht des Intellekts erwarten lässt.`,
                      sources: [fedorenko2016],
                      questionsBack: [`Wenn Denken bei Sprachverlust erhalten bleibt – ist Sprache dann wirklich nur ein Produkt des Sprachzentrums?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'foxp2-sprachgen',
      objection: `Mit FOXP2 hat man das Sprachgen gefunden – das Labor von Svante Pääbo fand 2002 sogar Hinweise auf eine junge Selektion beim Menschen. Die Evolution der Sprache ist also genetisch nachweisbar.`,
      objectionBy: 'Populäre Wissenschaftsberichterstattung (gestützt auf Enard u. a. 2002)',
      answer: `FOXP2 ist kein Sprachgen. Es ist ein Regulator, der viele andere Gene steuert; seine Mutation in der britischen „KE-Familie" beeinträchtigte vor allem die Feinmotorik von Mund und Gesicht. FOXP2 kommt bei Mäusen, Fledermäusen und Singvögeln vor. Neandertaler hatten dieselbe Variante wie wir, und eine junge, starke Selektion beim modernen Menschen ließ sich mit besseren Daten nicht bestätigen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Cecilia S. L. Lai u. a.', work: '„A forkhead-domain gene is mutated in a severe speech and language disorder", Nature 413, S. 519–523', year: '2001', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Wolfgang Enard u. a. (Gruppe Svante Pääbo)', work: '„Molecular evolution of FOXP2, a gene involved in speech and language", Nature 418, S. 869–872', year: '2002', status: 'paraphrase', note: 'Die Autoren sprachen von einem an Sprache und Sprechen beteiligten Gen, nicht von „dem Sprachgen"; die Selektionshypothese wurde später nicht bestätigt (Atkinson u. a. 2018).' },
        { kind: 'wissenschaft', author: 'Johannes Krause u. a.', work: '„The Derived FOXP2 Variant of Modern Humans Was Shared with Neandertals", Current Biology 17, S. 1908–1912', year: '2007', status: 'paraphrase' },
        atkinson2018,
      ],
      followUps: [
        {
          id: 'neandertaler-sprache',
          objection: `Neandertaler hatten dasselbe FOXP2 und ein modernes Zungenbein. Sie sprachen also – Sprache ist alt und graduell entstanden.`,
          objectionBy: 'Dan Dediu',
          answer: `Ob Neandertaler sprachen, ist offen; Dediu und Levinson vertreten das, andere bezweifeln es. Aber selbst wenn – das verschiebt den Ursprung zeitlich, macht ihn aber nicht graduell. Und theologisch ist die Frage offen: Manche christlichen Denker zählen Neandertaler zu den Menschen, also zu den Nachkommen Adams. „Mensch" ist für uns keine Artbezeichnung, sondern ein Wesen mit vernunftbegabter Seele.`,
          sources: [{ kind: 'wissenschaft', author: 'Dan Dediu, Stephen C. Levinson', work: '„On the antiquity of language: the reinterpretation of Neandertal linguistic capacities and its consequences", Frontiers in Psychology 4, 397', year: '2013', status: 'paraphrase' }],
          followUps: [
            {
              id: 'adam-wann',
              objection: `Wann soll Adam denn gelebt haben – vor zehntausend oder vor 750.000 Jahren? Ihr wisst es selbst nicht.`,
              objectionBy: 'Jerry Coyne',
              answer: `Ehrlich gesagt: Darüber gibt es in der koptischen Kirche kein Dogma, und Christen vertreten verschiedene Modelle. William Lane Craig etwa verortet Adam sehr früh, vor dem gemeinsamen Vorfahren von Neandertalern und modernen Menschen. Fest steht für uns: Adam und Eva sind reale Personen, und die Menschheit hat als Gottes Ebenbild einen einzigartigen Ursprung. Die Datierung ist eine offene Frage, die Würde des Menschen nicht.`,
              sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam: A Biblical and Scientific Exploration', year: '2021', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'populationsgenetik-adam',
                  objection: `Die Populationsgenetik zeigt, dass die menschliche Population nie unter etwa zehntausend Individuen fiel. Ein Urpaar ist ausgeschlossen.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Die Daten schließen ein Urpaar in jüngerer Zeit aus, wenn man annimmt, dass alle Menschen *nur* von ihm abstammen. Der Genetiker Joshua Swamidass hat gezeigt, dass ein „genealogischer" Adam – Stammvater aller heute Lebenden, ohne dass er der einzige genetische Vorfahr wäre – mit den Daten vereinbar ist; andere Modelle setzen ein Urpaar weit zurück. Das ist ein eigenes Thema; ausführlich im Claim zu Adam und Eva und der Genetik.`,
                  sources: [{ kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry', year: '2019', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-schrittweise',
      objection: `Kinder lernen Sprache schrittweise – vom Lallen zu Einwortsätzen zu Grammatik. So kann Sprache auch in der Stammesgeschichte schrittweise entstanden sein.`,
      objectionBy: 'Michael Tomasello',
      answer: `Kinder lernen schrittweise, aber in atemberaubendem Tempo und mit einer Fähigkeit, die von Anfang an vollständig angelegt ist. Das eindrucksvollste Beispiel: Gehörlose Kinder in Nicaragua, die ohne sprachliches Vorbild zusammenkamen, erfanden innerhalb weniger Jahrzehnte eine Gebärdensprache mit Grammatik. Kein junger Schimpanse tut das, auch wenn er unter Menschen aufwächst. Das spricht für eine fertige Fähigkeit im Menschen, nicht für eine lange Stufenfolge.`,
      sources: [senghas2004],
      followUps: [
        {
          id: 'nicaragua-kohorten',
          objection: `Auch die nicaraguanische Gebärdensprache entwickelte sich über mehrere Kohorten – das zeigt die Rolle der Kultur, nicht einer angeborenen Grammatik.`,
          objectionBy: 'Michael Tomasello',
          answer: `Richtig, jüngere Kohorten verfeinerten die Grammatik. Aber das geschah innerhalb weniger Jahrzehnte, durch Kinder, ohne Vorbild. Das ist das Gegenteil eines jahrtausendelangen biologischen Gradualismus: Die Fähigkeit war in jedem einzelnen Kind vollständig vorhanden; die Kultur lieferte nur die Gelegenheit.`,
          followUps: [
            {
              id: 'piraha-rekursion',
              objection: `Die Pirahã-Sprache im Amazonas hat keine Rekursion, wie Daniel Everett zeigte. Chomskys Universalgrammatik ist damit widerlegt.`,
              objectionBy: 'Daniel Everett',
              answer: `Everetts Deutung ist stark umstritten; Nevins, Pesetsky und Rodrigues haben seine Daten anders analysiert. Aber selbst wenn das Pirahã an der Oberfläche keine Einbettung nutzte: Pirahã-Kinder können Portugiesisch mit voller Rekursion lernen. Eine Fähigkeit nicht zu nutzen heißt nicht, sie nicht zu haben. Die Menschheit besitzt sie in jeder Kultur, kein Tier in irgendeiner.`,
              sources: [
                { kind: 'gegner', author: 'Daniel L. Everett', work: '„Cultural Constraints on Grammar and Cognition in Pirahã", Current Anthropology 46, S. 621–646', year: '2005', status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Andrew Nevins, David Pesetsky, Cilene Rodrigues', work: '„Pirahã Exceptionality: A Reassessment", Language 85, S. 355–404', year: '2009', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'erectus-sprache',
                  objection: `Everett argumentiert, schon Homo erectus habe vor fast zwei Millionen Jahren gesprochen – Sprache ist uralt und wuchs mit der Kultur.`,
                  objectionBy: 'Daniel Everett',
                  answer: `Das ist eine sehr spekulative These; die Belege – etwa mögliche Seefahrten nach Flores – sind umstritten. Aber selbst wenn sie stimmte, bliebe die Frage, woher die symbolische Fähigkeit kommt, und die Kluft zu allen heutigen Tieren bliebe bestehen. Theologisch muss ich mich auf kein Datum festlegen. Entscheidend ist, *was* Sprache ist – nicht, wann sie zum ersten Mal erklang.`,
                  sources: [{ kind: 'gegner', author: 'Daniel L. Everett', work: 'How Language Began: The Story of Humanity\'s Greatest Invention', year: '2017', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'chomsky-atheist',
      objection: `Du zitierst Chomsky – der ist Atheist und vertritt die Evolution. Er glaubt nicht an Schöpfung.`,
      objectionBy: 'Steven Pinker',
      answer: `Richtig, und ich vereinnahme ihn nicht. Ich zitiere ihn für linguistische Befunde, nicht für Theologie. Gerade weil er kein religiöses Motiv hat, wiegt sein Urteil: Der Kern der Sprache kennt keine Zwischenstufen, kein Tier besitzt ihn, und Sprache ist zuerst ein Instrument des Denkens. Wenn ein solcher Forscher den Gradualismus ablehnt, ist „Sprache entstand graduell aus Tierlauten" kein gesichertes Wissen.`,
      sources: [berwickChomsky2016],
      followUps: [
        {
          id: 'mysterium-nicht-gott',
          objection: `Ein Mysterium ist kein Argument für Gott – nur ein Eingeständnis von Unwissen.`,
          objectionBy: 'Richard Lewontin',
          answer: `Einverstanden: Ein Rätsel allein beweist nichts. Mein Argument ist positiv: Sprache drückt begriffliches, vernünftiges Denken aus, macht „unendlichen Gebrauch von endlichen Mitteln" (Wilhelm von Humboldt) und richtet sich auf Wahrheit. Eine Welt, die von einem vernünftigen „Wort" erschaffen ist, das Wesen nach seinem Bild schafft, lässt genau das erwarten. Der Naturalismus muss es mühsam erklären; der Theismus sagt es voraus.`,
          followUps: [
            {
              id: 'logos-wortspiel',
              objection: `Das „Logos"-Argument ist bloße Wortspielerei: Weil Johannes „Wort" schreibt, soll Sprache göttlich sein.`,
              objectionBy: 'Jerry Coyne',
              answer: `Es geht nicht um ein Wortspiel. *Logos* bedeutet Wort und Vernunft. Die Aussage lautet: Die Wirklichkeit ist vernünftig geordnet, und der Mensch hat Anteil an dieser Vernunft. Athanasius schrieb, Gott habe die Menschen als *logikoi* geschaffen, als Geschöpfe, die am Logos teilhaben. Dass wir die Welt in Begriffen erfassen und darüber reden können, ist der Kern dieser Lehre – und eine erstaunliche Tatsache, die jeder Wissenschaft vorausgeht.`,
              sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'nur-kommunikationswerkzeug',
                  objection: `Sprache ist ein Kommunikationswerkzeug für Kooperation – nichts Metaphysisches.`,
                  objectionBy: 'Michael Tomasello',
                  answer: `Berwick und Chomsky argumentieren gerade umgekehrt: Die Struktur der Sprache ist für das Denken optimiert, nicht für die Kommunikation – sie verwendet hierarchische Strukturen, die für das Rechnen effizient, für das Sprechen oft umständlich sind. Und selbst Kommunikation setzt voraus, dass wir Wahrheit erfassen und mitteilen können. Wer Sprache nur als Werkzeug der Kooperation sieht, muss erklären, warum wir mit ihr über Mathematik, Moral und Gott nachdenken.`,
                  questionsBack: [`Welchen Kooperationsvorteil hatte die Fähigkeit, über unendliche Mengen oder die Existenz Gottes nachzudenken?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie sieht eine „halbe" Rekursion aus?`,
    `Warum halten Berwick und Chomsky – keine Kreationisten – den Gradualismus für falsch?`,
    `Warum erfindet kein Schimpanse, der unter Menschen aufwächst, eine Grammatik – gehörlose Kinder aber schon?`,
    `Wenn Denken bei Sprachverlust erhalten bleibt, ist Sprache dann nur ein Produkt des Sprachzentrums?`,
    `Welchen Überlebensvorteil hatte die Fähigkeit, über Unendlichkeit, Moral und Gott nachzudenken?`,
  ],
  avoid: [
    `„Die Wissenschaft hat bewiesen, dass Sprache nicht evolvieren kann" – das ist überzogen; die Frage ist offen.`,
    `Chomsky als Verbündeten des Kreationismus darstellen – er ist es nicht.`,
    `FOXP2 als „Beweis" für eine Seite verwenden – es ist kein Sprachgen.`,
    `Tierkommunikation herabsetzen („Tiere können gar nichts") – sie ist erstaunlich, nur eben keine Sprache.`,
  ],
  concessions: [
    `Die Sprachfähigkeit hat biologische Grundlagen in Gehirn, Genen und Anatomie, die Christen nicht bestreiten.`,
    `Tierkommunikation ist reicher als früher angenommen; Kombinationen von Rufen werden intensiv erforscht.`,
    `Ob und wie Neandertaler sprachen, ist offen – auch theologisch.`,
  ],
  furtherReading: [
    berwickChomsky2016,
    hauser2014,
    { kind: 'fachliteratur', author: 'Mortimer J. Adler', work: 'The Difference of Man and the Difference It Makes', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Vern S. Poythress', work: 'In the Beginning Was the Word: Language – A God-Centered Approach', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Sprache', 'Chomsky', 'Merge', 'Rekursion', 'FOXP2', 'Neandertaler', 'Logos', 'Ebenbild'],
  related: ['evolutionaere-psychologie/mensch-nur-tier', 'ursprung-der-sprache/tiere-haben-sprache', 'ursprung-der-sprache/babel-mythos', 'neurowissenschaften/geist-gleich-gehirn', 'genetik/adam-eva-genetisch-unmoeglich', 'naturalismus/vernunft-durch-evolution'],
};

export default claim;
