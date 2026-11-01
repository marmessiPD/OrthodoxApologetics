import type { Claim, Source } from '../../../schema.ts';

const terrace1979: Source = {
  kind: 'wissenschaft',
  author: 'Herbert S. Terrace, Laura A. Petitto, Richard J. Sanders, Thomas G. Bever',
  work: '„Can an Ape Create a Sentence?", Science 206, S. 891–902',
  year: '1979',
  quote: `Die Analyse von Videoaufnahmen des Schimpansen „Nim Chimpsky" ergab: Seine Gebärdenfolgen waren großenteils Wiederholungen oder Nachahmungen vorausgehender Gebärden der Betreuer; die durchschnittliche Länge seiner Äußerungen nahm nicht zu, und es fand sich keine Syntax. Ähnliche Muster zeigten Filme anderer Affen-Projekte.`,
  status: 'paraphrase',
  note: 'Terrace begann das Projekt in der Erwartung, Sprachfähigkeit nachzuweisen – sein negatives Ergebnis wiegt daher schwer.',
};

const terrace2019: Source = {
  kind: 'wissenschaft',
  author: 'Herbert S. Terrace',
  work: 'Why Chimpanzees Can\'t Learn Language and Only Humans Can',
  year: '2019',
  quote: `Terrace bilanziert Jahrzehnte der Affensprachforschung: Menschenaffen lernen Zeichen vor allem, um Belohnungen zu erhalten; ihnen fehlt die gemeinsame Aufmerksamkeit und der Wunsch, sich über Dinge auszutauschen, die bei Kindern der Sprache vorausgehen.`,
  status: 'paraphrase',
};

const savageRumbaugh1993: Source = {
  kind: 'gegner',
  author: 'E. Sue Savage-Rumbaugh u. a.',
  work: '„Language Comprehension in Ape and Child", Monographs of the Society for Research in Child Development 58 (3–4)',
  year: '1993',
  quote: `Der Bonobo Kanzi verstand gesprochene englische Aufforderungen, darunter viele neuartige, etwa in ähnlichem Umfang wie ein zweijähriges Mädchen (Alia), mit dem er verglichen wurde.`,
  status: 'paraphrase',
};

const pepperberg1999: Source = {
  kind: 'gegner',
  author: 'Irene M. Pepperberg',
  work: 'The Alex Studies: Cognitive and Communicative Abilities of Grey Parrots',
  year: '1999',
  quote: `Der Graupapagei Alex lernte Bezeichnungen für Dutzende Objekte, Farben, Formen und Materialien, beantwortete Fragen nach „gleich" und „verschieden" und nach Mengen.`,
  status: 'paraphrase',
  note: 'Pepperberg formuliert vorsichtig und spricht eher von einem Kommunikationscode zwischen Tier und Mensch als von „Sprache" im vollen Sinn.',
};

const pilley2011: Source = {
  kind: 'wissenschaft',
  author: 'John W. Pilley, Alliston K. Reid',
  work: '„Border collie comprehends object names as verbal referents", Behavioural Processes 86, S. 184–195',
  year: '2011',
  quote: `Die Border-Collie-Hündin Chaser lernte die Namen von über tausend Spielzeugen und konnte sie zuverlässig zuordnen.`,
  status: 'paraphrase',
};

const berthet2025: Source = {
  kind: 'gegner',
  author: 'Mélissa Berthet, Martin Surbeck, Simon W. Townsend',
  work: '„Extensive compositionality in the vocal system of bonobos", Science',
  year: '2025',
  quote: `Wildlebende Bonobos kombinieren Rufe so, dass sich die Bedeutung der Kombination aus den Bedeutungen der Teile ergibt – teils auch auf nicht-triviale Weise.`,
  status: 'paraphrase',
  note: 'Jahrgang und Seiten vor Zitierung prüfen. Die Studie belegt kompositionelle Kombinationen weniger Rufe, keine unbegrenzte hierarchische Syntax.',
};

const pfungst1907: Source = {
  kind: 'wissenschaft',
  author: 'Oskar Pfungst',
  work: 'Das Pferd des Herrn von Osten (Der Kluge Hans)',
  year: '1907',
  quote: `Pfungst wies nach, dass das „rechnende" Pferd Hans auf unwillkürliche, winzige Körpersignale der Fragesteller reagierte – nicht auf die Aufgaben selbst.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'tiere-haben-sprache',
  title: `„Menschenaffen und Papageien zeigen, dass Tiere auch Sprache haben."`,
  proponents: [
    { name: 'E. Sue Savage-Rumbaugh', role: 'Primatologin, Language Research Center, Georgia State University', work: 'Kanzi: The Ape at the Brink of the Human Mind (1994)' },
    { name: 'Francine „Penny" Patterson', role: 'Psychologin, Gorilla Foundation', work: 'The Education of Koko (1981)' },
    { name: 'Roger Fouts', role: 'Primatologe, Central Washington University', work: 'Next of Kin (1997) – Washoe-Projekt' },
    { name: 'Irene M. Pepperberg', role: 'Vergleichende Psychologin, Harvard/Brandeis', work: 'The Alex Studies (1999); Alex & Me (2008)' },
    { name: 'Frans de Waal', role: 'Primatologe (1948–2024)', work: 'Are We Smart Enough to Know How Smart Animals Are? (2016)' },
  ],
  steelman: `Die Grenze zwischen Mensch und Tier verschwimmt, je genauer wir hinsehen. Die Schimpansin Washoe lernte in den 1960er-Jahren Hunderte Gebärden der amerikanischen Gebärdensprache und soll einen Schwan als „Wasser-Vogel" bezeichnet haben. Die Gorilladame Koko benutzte über tausend Gebärden, sprach über Gefühle und trauerte um ihre Katze. Der Bonobo Kanzi versteht gesprochenes Englisch etwa auf dem Niveau eines Kleinkinds und kommuniziert mit Hunderten Symbolen. Der Graupapagei Alex konnte Farben, Formen und Mengen benennen, „gleich" und „verschieden" unterscheiden und hatte sogar ein Konzept von „Null". Neuere Feldstudien zeigen, dass Bonobos Rufe kompositionell kombinieren und Pottwale ein kombinatorisches „Lautinventar" besitzen. Dass Menschen mehr können, bestreitet niemand – aber der Unterschied ist einer des Grades, nicht der Art. Die Behauptung einer exklusiv menschlichen Sprache ist der letzte Rest eines vorwissenschaftlichen Menschenbildes.`,
  biblical: {
    summary: `Die Bibel achtet die Tiere als Gottes Geschöpfe: Er sorgt für sie (Ps 104; Mt 6,26), sie loben ihn auf ihre Weise (Ps 148,10), und der Gerechte „erbarmt sich seines Viehes" (Spr 12,10). Zugleich unterscheidet sie den Menschen als Gottes Bild (Gen 1,26–27), der den Tieren Namen gibt (Gen 2,19–20) – und unter ihnen kein „Gegenüber" findet, das ihm entspricht (Gen 2,20). Bileams Eselin, die redet (Num 22,28), wird ausdrücklich als Wunder erzählt: „Der HERR tat der Eselin den Mund auf" – die Bibel setzt also voraus, dass Tiere normalerweise nicht sprechen.`,
    detail: `- **Gen 2,20:** Nach der Namensgebung heißt es, für Adam „ward keine Gehilfin gefunden, die um ihn wäre" – unter den Tieren gibt es kein ebenbürtiges Gegenüber im Gespräch.
- **Hiob 12,7:** „Frage doch das Vieh, das wird dich's lehren" – Tiere „lehren" durch ihr Dasein, nicht durch Worte.
- **Ps 148:** Die ganze Schöpfung lobt Gott – jedes Geschöpf auf seine Weise.`,
    sources: [
      { kind: 'bibel', work: '4. Mose', ref: '22,28', quote: `Da tat der HERR der Eselin den Mund auf, und sie sprach zu Bileam: Was habe ich dir getan, daß du mich geschlagen hast nun dreimal?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '2,20', quote: `Und der Mensch gab einem jeglichen Vieh und Vogel unter dem Himmel und Tier auf dem Felde seinen Namen; aber für den Menschen ward keine Gehilfin gefunden, die um ihn wäre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter bewunderten die Fähigkeiten der Tiere und unterschieden sie zugleich von der menschlichen Vernunft. Basilius staunt im *Hexaemeron* über Tiere, die ohne Unterricht Erstaunliches leisten – ein Zeichen der Weisheit des Schöpfers, nicht eigener Vernunft. Athanasius beschreibt den Menschen als *logikos*, als Geschöpf mit Anteil am Logos. Die koptische Tradition kennt viele Erzählungen von Heiligen, die in Frieden mit wilden Tieren lebten – Achtung vor den Tieren und die Würde des Menschen gehören zusammen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 9', quote: `Basilius beschreibt die erstaunlichen natürlichen Fähigkeiten der Tiere, die ohne Belehrung handeln, und sieht darin die Weisheit des Schöpfers; dem Menschen allein sei die Vernunft gegeben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3', quote: `Gott schuf die Menschen nicht wie die vernunftlosen Tiere, sondern gab ihnen Anteil an seinem Logos.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Affensprachprojekte der 1960er- bis 1990er-Jahre zeigten erstaunliche Lernleistungen: Hunderte Zeichen, Verständnis einfacher, auch neuer Aufforderungen (Kanzi, Savage-Rumbaugh u. a. 1993). Die kritische Auswertung (Terrace u. a. 1979) ergab aber: Die Äußerungen waren großenteils nachgeahmt oder durch die Betreuer angeregt, ihre Länge stieg nicht, eine Syntax war nicht nachweisbar; Kokos Fähigkeiten wurden nie in streng kontrollierten, begutachteten Studien dokumentiert. Tiere zeigen bemerkenswerte kognitive Fähigkeiten: Alex (Pepperberg) beherrschte Bezeichnungen und Kategorien, Chaser (Pilley & Reid 2011) über tausend Objektnamen. Feldstudien belegen Kombinationen von Rufen mit zusammengesetzter Bedeutung (Japanmeisen; Bonobos, Berthet u. a. 2025) und kombinatorische Strukturen bei Pottwalen. Konsens ist: Keine Tierart besitzt nach heutigem Wissen eine Kommunikation mit unbegrenzter, hierarchisch-rekursiver Syntax und frei kombinierbaren Symbolen für Abwesendes und Abstraktes.`,
    detail: `- **Was die Befürworter richtig sehen:** Tiere sind intelligenter und kommunikativer, als man lange dachte. Das sollte man ohne Vorbehalt anerkennen.
- **Was die Daten nicht zeigen:** Syntax mit Einbettung, spontane Fragen über die Welt, Erzählen, Sprechen über Vergangenes oder Abstraktes, Weitergabe einer Sprache an die eigenen Jungen.
- **Methodische Vorsicht:** Der „Kluge-Hans-Effekt" (Pfungst 1907) – unbewusste Hinweise der Menschen – erfordert blinde Versuchsanordnungen.`,
    sources: [terrace1979, savageRumbaugh1993, pepperberg1999, pilley2011, berthet2025],
  },
  quickAnswer: `Tiere sind erstaunlich klug – Kanzi versteht einfache Sätze, Alex konnte Farben und Mengen benennen, Hunde lernen Hunderte Wörter. Aber Wörter zu lernen ist nicht dasselbe wie Sprache. Als Herbert Terrace die Videos des Schimpansen „Nim Chimpsky" auswertete, fand er Nachahmung statt Syntax; und kein Affe ist über Zwei- bis Dreiwortkombinationen hinausgekommen, während jedes Kind mit vier Jahren unbegrenzt verschachtelte Sätze bildet. Kein Tier stellt Fragen über die Welt, erzählt Geschichten oder bringt seinen Jungen eine Sprache bei. Der Unterschied ist nicht nur ein Grad, sondern eine Art.`,
  keyPoints: [
    `**Wörter sind nicht Sprache:** Bezeichnungen lernen (Chaser, Alex, Kanzi) ist beeindruckend, aber Sprache verlangt eine Grammatik, die unbegrenzt neue, verschachtelte Sätze erzeugt.`,
    `**Terraces Befund:** Nims „Sätze" waren großenteils Nachahmungen; ihre Länge wuchs nicht – ein Forscher, der das Gegenteil beweisen wollte, kam zu diesem Ergebnis.`,
    `**Die Asymmetrie:** Jahrzehnte intensivsten Trainings führen Affen zu Kleinkindniveau – gehörlose Kinder erfinden ohne Vorbild eine Grammatik.`,
    `**Kombination ist nicht Rekursion:** Zwei Rufe mit zusammengesetzter Bedeutung (Bonobos, Meisen) sind faszinierend, aber keine unbegrenzte hierarchische Syntax.`,
    `**Kluger Hans mahnt:** Ohne blinde Protokolle deuten Menschen leicht ihre eigenen Erwartungen in Tiere hinein.`,
    `**Achtung vor den Tieren:** Die Sonderstellung des Menschen begründet Verantwortung, nicht Verachtung (Spr 12,10).`,
  ],
  argument: {
    name: 'Das Argument aus den Merkmalen der Sprache',
    summary: 'Sprache wird an Merkmalen gemessen, nicht an Eindrücken.',
    premises: [
      {
        text: `P1: Sprache im vollen Sinn umfasst mindestens: frei kombinierbare Symbole, unbegrenzte hierarchische Syntax, Bezug auf Abwesendes und Abstraktes, Fragen und Erzählen, Weitergabe an die nächste Generation.`,
        support: `Klassische Merkmalslisten (Hockett 1960) und die heutige Linguistik (Berwick & Chomsky 2016).`,
        sources: [{ kind: 'wissenschaft', author: 'Charles F. Hockett', work: '„The Origin of Speech", Scientific American 203 (3), S. 88–96', year: '1960', status: 'paraphrase' }],
      },
      {
        text: `P2: Kein bisher untersuchtes Tier erfüllt diese Merkmale; die besten Leistungen (Kanzi, Alex, Chaser) betreffen Wortverständnis, Bezeichnungen und kurze Kombinationen.`,
        support: `Terrace u. a. 1979; Savage-Rumbaugh u. a. 1993; Pepperberg 1999; Pilley & Reid 2011; Terrace 2019.`,
        sources: [terrace1979, terrace2019, savageRumbaugh1993],
      },
      {
        text: `P3: Menschliche Kinder erwerben diese Merkmale spontan in wenigen Jahren – selbst ohne Vorbild (Nicaragua).`,
        support: `Spracherwerbsforschung; Senghas u. a. 2004.`,
      },
    ],
    conclusion: `Tiere kommunizieren, und manche lernen Wörter – aber Sprache im vollen Sinn ist nach heutigem Wissen dem Menschen eigen. Das passt zur biblischen Sicht des Menschen als vernunftbegabtes Ebenbild Gottes.`,
  },
  voices: [
    {
      person: 'mortimer-adler',
      role: 'als Philosoph der Differenz von Mensch und Tier',
      text: `Adler prüfte die Affensprachexperimente seiner Zeit und hielt fest: Entscheidend ist nicht, ob ein Tier Zeichen mit Dingen verknüpfen kann – das können viele –, sondern ob es Begriffe bildet, die über das Wahrnehmbare hinausgehen, und darüber spricht. Er betonte, dass die Frage empirisch ist: Sollte ein Tier je echte begriffliche Sprache zeigen, müsste man die These eines Artunterschieds aufgeben. Bislang, so Adler, sprechen die Befunde für diesen Unterschied.`,
      sources: [{ kind: 'fachliteratur', author: 'Mortimer J. Adler', work: 'The Difference of Man and the Difference It Makes', year: '1967', status: 'paraphrase' }],
    },
    {
      person: 'feser',
      role: 'als Philosoph (Intellekt und Wahrnehmung)',
      text: `Feser unterscheidet in aristotelisch-thomistischer Tradition zwischen Wahrnehmung und Vorstellung, die Menschen und Tiere teilen, und dem Intellekt, der allgemeine, abstrakte Begriffe erfasst – etwa „Dreieckigkeit", „Gerechtigkeit" oder „Zahl" als solche. Ein Papagei kann lernen, auf drei Gegenstände mit „drei" zu antworten; ob er den Begriff der Zahl erfasst, ist eine andere Frage. Die Fähigkeit, Bedeutungen eindeutig und allgemein zu erfassen, sieht Feser als Kennzeichen eines immateriellen Intellekts.`,
      sources: [{ kind: 'fachliteratur', author: 'Edward Feser', work: 'Philosophy of Mind: A Beginner\'s Guide', year: '2006', status: 'paraphrase' }],
    },
    {
      person: 'thomas-aquin',
      role: 'als Philosoph der Seelenvermögen',
      text: `Thomas schreibt den Tieren eine „Schätzkraft" (*vis aestimativa*) zu: Sie erkennen, was ihnen nützt oder schadet – das Schaf flieht den Wolf, der Vogel sammelt Halme für das Nest –, ohne die Gründe dafür zu begreifen. Der Mensch besitzt darüber hinaus den Intellekt, der das Allgemeine erkennt und urteilt. Darum, so Thomas, haben Tiere Stimmen, mit denen sie ihre Empfindungen anzeigen, aber keine Sprache, die Begriffe ausdrückt.`,
      sources: [{ kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 78, a. 4', status: 'paraphrase' }],
    },
    {
      person: 'kenneth-pike',
      role: 'als Feldlinguist',
      text: `Pike arbeitete jahrzehntelang mit Sprachen, die zuvor nie beschrieben worden waren, und zeigte, dass jede menschliche Sprache – auch die einer kleinen, schriftlosen Gemeinschaft – ein vielschichtiges System aus Lauten, Formen, Satzstrukturen und Bedeutungen ist. Für ihn war die Würde jeder Sprache ein Spiegel der Würde des Menschen als Wesen, das von Gott angesprochen wird und antworten kann. Kein Tierkommunikationssystem zeigt diese Vielschichtigkeit.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth L. Pike', work: 'Linguistic Concepts: An Introduction to Tagmemics', year: '1982', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Beobachter der Tierwelt',
      text: `Basilius beschreibt mit großer Freude die Fähigkeiten der Tiere: Vögel, die ihre Nester bauen, Fische, die zu ihren Laichplätzen wandern, Tiere, die ohne Belehrung das Richtige tun. Er deutet sie als Zeugnis der Weisheit des Schöpfers, die in ihre Natur gelegt ist. Für Basilius schmälert die Sonderstellung des Menschen die Tiere nicht; vielmehr soll der Mensch von ihnen lernen – und darüber staunen, dass er selbst als einziges Geschöpf Gott mit Worten loben kann.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien 7–9', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kanzi-versteht',
      objection: `Kanzi versteht gesprochenes Englisch auf dem Niveau eines zweijährigen Kindes und kommuniziert mit Hunderten Symbolen. Das ist Sprache.`,
      objectionBy: 'Sue Savage-Rumbaugh',
      targetsPremise: 2,
      answer: `Kanzis Leistungen sind beeindruckend, und ich erkenne sie an. Aber er blieb auf diesem Niveau stehen, während das Kind weiterwächst – mit vier Jahren bildet es unbegrenzt verschachtelte Sätze, stellt Warum-Fragen und erzählt Geschichten. Kanzis eigene Äußerungen waren meist kurze Bitten – Essen, Spielen, Ortswechsel –, ohne hierarchische Grammatik.`,
      sources: [savageRumbaugh1993],
      questionsBack: [`Hat Kanzi je eine Frage über die Welt gestellt oder eine Geschichte erzählt?`],
      followUps: [
        {
          id: 'kanzi-neue-saetze',
          objection: `Kanzi verstand sogar völlig neue Sätze wie „Leg die Seife auf die Tomate". Das ist mehr als Dressur.`,
          objectionBy: 'Sue Savage-Rumbaugh',
          targetsPremise: 2,
          answer: `Ja, das ist mehr als Dressur: Er kann Wörter mit Handlungen und Gegenständen verknüpfen und einfache Wortfolgen deuten. Aber Verstehen einfacher Aufforderungen zeigen auch Hunde – Chaser kannte über tausend Spielzeugnamen. Das ist Bezugslernen. Was fehlt, ist die eigene Erzeugung unbegrenzt neuer, verschachtelter Sätze.`,
          sources: [pilley2011],
          followUps: [
            {
              id: 'gradunterschied',
              objection: `Das ist ein Gradunterschied. Kanzi hat die Vorstufen; Kinder haben mehr davon.`,
              objectionBy: 'Frans de Waal',
              targetsPremise: 2,
              answer: `Prüfen wir das: Ein Bonobo, der nach Jahrzehnten intensivsten Trainings über Zwei- bis Dreiwortkombinationen nicht hinauskommt, und ein Kind, das diese Grenze ohne Unterricht in wenigen Monaten sprengt – das sieht nicht nach mehr oder weniger derselben Fähigkeit aus, sondern nach einer anderen. Die Psychologen Penn, Holyoak und Povinelli nannten Darwins These vom bloßen Gradunterschied deshalb „Darwins Fehler".`,
              sources: [{ kind: 'wissenschaft', author: 'Derek C. Penn, Keith J. Holyoak, Daniel J. Povinelli', work: '„Darwin\'s mistake: Explaining the discontinuity between human and nonhuman minds", Behavioral and Brain Sciences 31, S. 109–130', year: '2008', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'falsche-umgebung',
                  objection: `Wir haben den Affen nur nicht die richtige Umgebung gegeben. In einer echten Sprachkultur würden sie viel mehr erreichen.`,
                  objectionBy: 'Sue Savage-Rumbaugh',
                  answer: `Kanzi wuchs von klein auf in der reichsten Sprachumgebung auf, die je ein Tier hatte – umgeben von Menschen, die mit ihm sprachen. Umgekehrt entwickeln Kinder selbst unter ärmsten Bedingungen Sprache; gehörlose Kinder in Nicaragua schufen sie sogar ohne Vorbild. Diese Asymmetrie ist das Entscheidende: Die Umgebung entfaltet beim Menschen eine Fähigkeit, die beim Tier fehlt.`,
                  followUps: [
                    {
                      id: 'sonderstellung-ausbeutung',
                      objection: `Ihr wollt die Sonderstellung des Menschen doch nur retten, um Tiere weiter ausbeuten zu dürfen.`,
                      objectionBy: 'Peter Singer',
                      answer: `Nein. Für Christen sind Tiere Gottes Geschöpfe, für die er sorgt und die ihn loben; „der Gerechte erbarmt sich seines Viehes". Die Sonderstellung des Menschen bedeutet Verantwortung, nicht Freibrief: Gerade weil der Mensch Vernunft hat, kann und soll er für die Tiere sorgen. Grausamkeit gegen Tiere ist Sünde. Ich verteidige die Würde des Menschen, nicht die Verachtung der Tiere.`,
                      sources: [{ kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehes; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' }],
                      questionsBack: [`Wer außer dem Menschen könnte überhaupt Verantwortung für die Tiere übernehmen?`],
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
      id: 'koko-gebaerden',
      objection: `Die Gorilladame Koko beherrschte über tausend Gebärden, sprach über ihre Gefühle und trauerte um ihre Katze. Wie kannst du das leugnen?`,
      objectionBy: 'Penny Patterson',
      targetsPremise: 2,
      answer: `Ich bezweifle nicht, dass Koko intelligent und gefühlvoll war. Aber ihre angeblichen Sprachleistungen wurden nie in streng kontrollierten, begutachteten Studien dokumentiert; vieles beruht auf Deutungen ihrer Betreuer. Als Herbert Terrace beim Schimpansen Nim Videoaufnahmen systematisch auswertete, zeigten sich die meisten „Sätze" als Nachahmung der Betreuer – und ihre Länge nahm nicht zu.`,
      sources: [terrace1979],
      followUps: [
        {
          id: 'terrace-methodik',
          objection: `Terraces Studie war methodisch schwach: Nim wurde von ständig wechselnden Betreuern in einem Labor gehalten. Kein Wunder, dass er wenig lernte.`,
          objectionBy: 'Roger Fouts',
          answer: `Diese Kritik hat etwas für sich – die Bedingungen waren nicht ideal. Aber Terrace wertete auch Filme anderer Projekte aus, etwa von Washoe, und fand ähnliche Muster. In den Jahrzehnten seither hat kein Projekt unter besseren Bedingungen eine echte Syntax nachgewiesen; Terrace hat seine Analyse 2019 in einem Buch noch vertieft.`,
          sources: [terrace2019],
          followUps: [
            {
              id: 'washoe-wasservogel',
              objection: `Washoe nannte einen Schwan „Wasser Vogel" – eine kreative Wortneuschöpfung! Das ist Sprache.`,
              objectionBy: 'Roger Fouts',
              answer: `Eine berühmte Anekdote. Aber sie lässt eine einfachere Deutung zu: Washoe sah Wasser und gebärdete „Wasser", sah einen Vogel und gebärdete „Vogel". Eine einzelne Anekdote kann systematische Daten nicht ersetzen – und gerade bei so emotional aufgeladenen Projekten ist Vorsicht vor Überinterpretation geboten.`,
              followUps: [
                {
                  id: 'kluger-hans-unfair',
                  objection: `Du unterstellst den Forschern Selbsttäuschung. Das ist unfair.`,
                  objectionBy: 'Roger Fouts',
                  answer: `Ich unterstelle niemandem Unehrlichkeit. Der „Kluge-Hans-Effekt" betrifft alle Menschen: 1907 zeigte Oskar Pfungst, dass ein angeblich rechnendes Pferd auf unwillkürliche Körpersignale seiner Fragesteller reagierte – niemand hatte betrogen. Genau deshalb braucht man blinde Versuchsanordnungen. Das ist keine Kritik an Personen, sondern gute Wissenschaft.`,
                  sources: [pfungst1907],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'alex-papagei',
      objection: `Alex, der Graupapagei von Irene Pepperberg, konnte Farben, Formen und Mengen benennen, „gleich" und „verschieden" unterscheiden und hatte sogar ein Konzept von Null.`,
      objectionBy: 'Irene Pepperberg',
      targetsPremise: 2,
      answer: `Alex war ein außergewöhnliches Tier, und Pepperbergs Arbeit hat unser Bild von Vögeln zu Recht verändert. Bemerkenswert ist, dass sie selbst vorsichtig formuliert und eher von einem Kommunikationscode spricht als von Sprache im vollen Sinn. Alex beantwortete Fragen über Eigenschaften anwesender Gegenstände. Er bildete keine verschachtelten Sätze, sprach nicht über Vergangenes und erzählte nichts.`,
      sources: [pepperberg1999, { kind: 'wissenschaft', author: 'Irene M. Pepperberg, Jesse D. Gordon', work: '„Number comprehension by a grey parrot (Psittacus erithacus), including a zero-like concept", Journal of Comparative Psychology 119, S. 197–209', year: '2005', status: 'paraphrase' }],
      followUps: [
        {
          id: 'konzepte-sind-sprache',
          objection: `Wenn Alex abstrakte Konzepte wie „gleich" und „verschieden" verstand, hat er doch die Grundlage von Sprache.`,
          objectionBy: 'Irene Pepperberg',
          targetsPremise: 1,
          answer: `Hier lohnt eine Unterscheidung: Es gibt Kategorien, die an Wahrnehmbarem hängen – „gleiche Farbe" bei zwei Klötzen –, und Begriffe, die über alles Wahrnehmbare hinausgehen: Gerechtigkeit, Unendlichkeit, Wahrheit. Die klassische Philosophie nennt Ersteres Wahrnehmungsurteil, Letzteres Intellekt. Alex zeigte beeindruckende Wahrnehmungskategorien. Sprache im menschlichen Sinn drückt auch das Zweite aus.`,
          voices: [
            {
              person: 'feser',
              role: 'als Philosoph',
              text: `Feser betont, dass ein Tier lernen kann, auf bestimmte Reizmuster mit bestimmten Lauten zu reagieren, ohne einen allgemeinen Begriff zu besitzen. Der Mensch dagegen erfasst Bedeutungen, die eindeutig und allgemein sind – das ist mehr als ein verfeinertes Reiz-Reaktions-Muster.`,
              sources: [{ kind: 'fachliteratur', author: 'Edward Feser', work: 'Philosophy of Mind', year: '2006', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'hunde-knoepfe',
              objection: `Heute bilden Hunde mit Sprechknöpfen ganze Sätze – Videos zeigen, wie sie nach Spielzeug fragen oder sagen, dass sie traurig sind.`,
              objectionBy: 'Christina Hunger',
              answer: `Erste Studien, etwa aus der Gruppe von Federico Rossano in San Diego, deuten darauf hin, dass manche Hunde auf bestimmte Knopfwörter sinnvoll reagieren – das ist interessant. Aber die vermeintlichen „Sätze" in sozialen Medien sind ausgewählte Ausschnitte ohne Kontrolle; systematische Grammatik ist nicht belegt. Hunde lernen Wörter – das wussten wir schon von Chaser. Sprache ist mehr.`,
              sources: [{ kind: 'wissenschaft', author: 'Gruppe um Federico Rossano (UC San Diego)', work: 'Studien zu Hunden mit Soundboards, u. a. in PLOS ONE', year: '2024', status: 'paraphrase', note: 'Genaue Autoren und Titel vor Zitierung prüfen.' }],
              followUps: [
                {
                  id: 'pottwale-alphabet',
                  objection: `Pottwale haben ein „phonetisches Alphabet", wie das Projekt CETI 2024 zeigte. Bald wird KI ihre Sprache entschlüsseln.`,
                  objectionBy: 'David Gruber',
                  answer: `Die Studie zeigte kombinatorische Strukturen in den Klicklauten der Pottwale – Rhythmus, Tempo und Verzierungen werden kombiniert. Das ist faszinierend. Aber Kombinatorik von Lauten ist noch keine Grammatik mit Bedeutungen, und was die Laute bedeuten, weiß niemand. Wenn Wale eine Sprache hätten, wäre das kein Problem für den Glauben – aber die Behauptung ist verfrüht.`,
                  sources: [{ kind: 'wissenschaft', author: 'Pratyusha Sharma u. a.', work: '„Contextual and combinatorial structure in sperm whale vocalisations", Nature Communications 15', year: '2024', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bonobo-kompositionalitaet',
      objection: `Neue Feldstudien zeigen, dass Bonobos Rufe kompositionell kombinieren – die Bedeutung des Ganzen ergibt sich aus den Teilen. Syntax ist nicht einzigartig menschlich.`,
      objectionBy: 'Simon Townsend',
      targetsPremise: 1,
      answer: `Diese Forschung ist spannend, und ich nehme sie ernst. Sie zeigt, dass Bonobos – wie auch Japanmeisen – zwei Rufe so verbinden können, dass eine zusammengesetzte Bedeutung entsteht. Das ist eine Form von Kompositionalität. Was fehlt, ist das, was menschliche Grammatik ausmacht: unbegrenzte Einbettung, Bezug auf Abwesendes, freie Neuschöpfung von Aussagen über alles Denkbare.`,
      sources: [berthet2025, { kind: 'wissenschaft', author: 'Toshitaka N. Suzuki, David Wheatcroft, Michael Griesser', work: '„Experimental evidence for compositional syntax in bird calls", Nature Communications 7, 10986', year: '2016', status: 'paraphrase' }],
      followUps: [
        {
          id: 'nur-frage-der-zeit',
          objection: `Jedes Jahr fällt eine Grenze. Bald wird man auch Rekursion bei Tieren finden.`,
          objectionBy: 'Simon Townsend',
          answer: `Möglich – ich bin offen für Daten. Bisher gibt es aber keinen überzeugenden Nachweis: Die Behauptung von 2006, Stare könnten rekursive Muster lernen, wurde kritisiert, weil die Vögel einfachere Strategien nutzen konnten. Nach Jahrzehnten intensiver Suche gilt unbegrenzte hierarchische Syntax weiterhin als menschliches Merkmal.`,
          sources: [{ kind: 'wissenschaft', author: 'Timothy Q. Gentner u. a.', work: '„Recursive syntactic pattern learning by songbirds", Nature 440, S. 1204–1207', year: '2006', status: 'paraphrase', note: 'Die Deutung als echte Rekursion wurde in der Folge kritisiert.' }],
          followUps: [
            {
              id: 'menschenbild-erledigt',
              objection: `Und wenn man sie findet, ist euer ganzes Menschenbild erledigt.`,
              objectionBy: 'Jerry Coyne',
              answer: `Nein. Die Lehre vom Menschen als Gottes Bild hängt nicht an einem einzelnen sprachlichen Merkmal, sondern an der vernunftbegabten Seele, der moralischen Verantwortung und der Berufung zur Gemeinschaft mit Gott. Erstaunliche Fähigkeiten von Tieren würden Gottes Großzügigkeit in der Schöpfung zeigen. Ich müsste dann ein apologetisches Argument anpassen – nicht meinen Glauben.`,
              followUps: [
                {
                  id: 'ebenbild-leer',
                  objection: `Dann ist „Ebenbild Gottes" unwiderlegbar und damit leer.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Das Ebenbild hat einen klaren Inhalt, der sich im Verhalten zeigt: Menschen treiben Mathematik und Philosophie, schaffen Kunst, beten, fragen, warum es überhaupt etwas gibt, und halten sich moralisch verpflichtet, auch Fremden zu helfen – und sie streiten darüber, ob sie „nur Tiere" sind. Diese Merkmale sind beobachtbar und zeigen sich in jeder menschlichen Kultur und bei keinem Tier. Leer ist das nicht.`,
                  questionsBack: [`Kennst du ein Tier, das darüber nachdenkt, ob es nur ein Tier ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hat je ein Affe eine Frage über die Welt gestellt oder eine Geschichte erzählt?`,
    `Warum kommt ein Bonobo nach Jahrzehnten Training nicht über Zwei- bis Dreiwortkombinationen hinaus, ein Kind aber ohne Training schon?`,
    `Hat je ein Tier seinen Jungen eine erlernte Zeichensprache beigebracht?`,
    `Wie schließt du den Kluge-Hans-Effekt in diesen Studien aus?`,
    `Ist das Verbinden zweier Rufe dasselbe wie eine Grammatik, die unbegrenzt neue Sätze erzeugt?`,
  ],
  avoid: [
    `Tierintelligenz kleinreden („Tiere sind Automaten") – das ist widerlegt und unbiblisch.`,
    `Die Forscher lächerlich machen; ihre Arbeit ist ernsthaft und hat viel über Tiere gelehrt.`,
    `Behaupten, die Frage sei „für immer" entschieden – sie ist empirisch; bleib offen für Daten.`,
  ],
  concessions: [
    `Tiere besitzen erstaunliche kognitive und kommunikative Fähigkeiten, darunter Wortverständnis und einfache Kombinationen.`,
    `Terraces Nim-Projekt hatte methodische Schwächen.`,
    `Die Forschung zu Tierkommunikation (Bonobos, Wale) ist in Bewegung; künftige Befunde könnten unser Bild verfeinern.`,
  ],
  furtherReading: [
    terrace2019,
    terrace1979,
    { kind: 'fachliteratur', author: 'Mortimer J. Adler', work: 'The Difference of Man and the Difference It Makes', year: '1967', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Thomas Suddendorf', work: 'The Gap: The Science of What Separates Us from Other Animals', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Tiersprache', 'Kanzi', 'Koko', 'Washoe', 'Nim Chimpsky', 'Alex', 'Pepperberg', 'Bonobos', 'Kluger Hans'],
  related: ['evolutionaere-psychologie/mensch-nur-tier', 'ursprung-der-sprache/sprache-graduell', 'neurowissenschaften/geist-gleich-gehirn', 'naturalismus/bewusstsein-materiell-erklaerbar'],
};

export default claim;
