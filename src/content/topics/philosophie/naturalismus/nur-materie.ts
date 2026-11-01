import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-materie',
  title: `„Es gibt nur Materie und Energie."`,
  proponents: [
    { name: 'Sean Carroll', role: 'Theoretischer Physiker, Johns Hopkins University', work: 'The Big Picture (2016) – „poetischer Naturalismus" und die „Core Theory"' },
    { name: 'Alex Rosenberg', role: 'Wissenschaftsphilosoph, Duke University', work: 'The Atheist\'s Guide to Reality (2011)' },
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftspublizist', work: 'Cosmos (1980)' },
    { name: 'Richard Lewontin', role: 'Evolutionsgenetiker, Harvard', work: '„Billions and Billions of Demons", New York Review of Books (9. Januar 1997)' },
  ],
  steelman: `Die Geschichte der Wissenschaft ist eine Geschichte der Entzauberung: Blitze, Seuchen, das Leben selbst – alles wurde einmal Geistern, Göttern oder einer Lebenskraft zugeschrieben, und alles wurde durch physikalische Mechanismen erklärt. Heute, so Sean Carroll, kennen wir die Gesetze, die dem Alltagsleben zugrunde liegen, vollständig: die „Core Theory" aus Quantenfeldtheorie und allgemeiner Relativitätstheorie. Es gibt keinen Raum für eine Seele, die Atome im Gehirn anstößt, ohne dass wir es messen würden. Nichtphysikalisches hat noch nie eine überprüfbare Vorhersage geliefert. Sparsamkeit gebietet, nur anzunehmen, was wir nachweisen können – Teilchen, Felder, Raumzeit. Alex Rosenberg bringt es auf den Punkt: Was ist die Natur der Wirklichkeit? Das, was die Physik sagt. Alles andere – Bewusstsein, Moral, Bedeutung – sind nützliche Redeweisen über komplexe Anordnungen von Materie.`,
  biblical: {
    summary: `Die Bibel bejaht die materielle Welt ausdrücklich – „siehe da, es war sehr gut" (Gen 1,31) – und lehrt die Menschwerdung und die leibliche Auferstehung. Sie bestreitet aber, dass die Materie alles ist: Gott ist Geist (Joh 4,24), er schuf „das Sichtbare und Unsichtbare" (Kol 1,16), und der Mensch ist Staub *und* göttlicher Lebensatem (Gen 2,7). Das Christentum ist also weder Materialismus noch materiefeindlicher Spiritualismus.`,
    detail: `- **Gen 2,7:** Der Mensch wird aus „Erdenkloß" (*'afar min ha-'adamah*) geformt und erhält den „lebendigen Odem" (*nischmat chajjim*) – Leib und Geist gehören zusammen.
- **Kol 1,16:** *ta horata kai ta aorata* – „das Sichtbare und das Unsichtbare": Die Schrift kennt Wirklichkeiten, die nicht sinnlich wahrnehmbar sind.
- **2 Kor 4,18:** Das Sichtbare ist „zeitlich", das Unsichtbare „ewig" – keine Abwertung der Materie, sondern eine Rangordnung.
- **Gen 1,31:** Gegen jede Gnosis: Die Materie ist gut, weil Gott sie geschaffen hat. Darum feiert die koptische Kirche Sakramente mit Wasser, Öl, Brot und Wein.`,
    sources: [
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '4,24', quote: `Gott ist Geist, und die ihn anbeten, die müssen ihn im Geist und in der Wahrheit anbeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '4,18', quote: `uns, die wir nicht sehen auf das Sichtbare, sondern auf das Unsichtbare. Denn was sichtbar ist, das ist zeitlich; was aber unsichtbar ist, das ist ewig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '1,31', quote: `Und Gott sah an alles, was er gemacht hatte; und siehe da, es war sehr gut.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt Gott als Schöpfer „der sichtbaren und der unsichtbaren Welt". Der hl. Athanasius argumentiert in „Gegen die Heiden", dass die menschliche Seele vernunftbegabt und vom Leib verschieden ist: Sie denkt über Abwesendes nach, urteilt über die Sinne, betrachtet Unsterbliches und Göttliches – Tätigkeiten, die der Leib allein nicht vollbringen kann. Zugleich ist die orthodoxe Sicht nicht leibfeindlich: Der Mensch ist eine Einheit von Seele und Leib, die Materie wird in den Sakramenten geheiligt, und wir erwarten die Auferstehung des Leibes.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel (381)', ref: 'Art. 1', quote: `… Schöpfer des Himmels und der Erde, der sichtbaren und der unsichtbaren Welt.`, translation: 'gebräuchliche deutsche Fassung', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '30–33', status: 'paraphrase', quote: 'Die vernunftbegabte Seele denkt über Abwesendes und Zukünftiges nach, prüft die Sinneswahrnehmungen und betrachtet Unsterbliches; darin zeigt sie sich vom Leib verschieden.' },
    ],
  },
  opposingView: {
    summary: `In der Philosophie des Geistes ist der Physikalismus die Mehrheitsposition, aber keineswegs Konsens: Ein erheblicher Teil der Fachphilosophen vertritt nichtphysikalistische Positionen (Eigenschaftsdualismus, Panpsychismus, Idealismus, Substanzdualismus). Auch atheistische Philosophen wie Thomas Nagel, David Chalmers und Galen Strawson halten den klassischen Materialismus für unzureichend. In der Physik selbst ist „Materie" längst nicht mehr das Bild kleiner fester Kügelchen; die Grundbegriffe sind Felder, Wellenfunktionen und mathematische Strukturen. Ob die Gesetze der Physik „alles" erklären, ist eine philosophische, keine physikalische Frage.`,
    sources: [
      { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself', year: '2016', status: 'paraphrase', quote: 'Die Gesetze der Physik, die den Phänomenen des Alltagslebens zugrunde liegen, sind vollständig bekannt (Core Theory); Bewusstsein, Moral und Sinn sind „emergente" Beschreibungsebenen.' },
      { kind: 'gegner', author: 'Alex Rosenberg', work: 'The Atheist\'s Guide to Reality', year: '2011', ref: 'Kap. 1', status: 'paraphrase', quote: 'Was ist die Natur der Wirklichkeit? Das, was die Physik sagt.' },
      { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', status: 'paraphrase', quote: 'Der materialistische Naturalismus kann Bewusstsein, Erkenntnis und Werte nicht erklären.', note: 'Nagel ist Atheist.' },
    ],
  },
  quickAnswer: `„Es gibt nur Materie" ist kein Ergebnis der Naturwissenschaft, sondern eine philosophische Behauptung – und sie hat es schwer. Denn es gibt vieles, das real ist, aber nicht aus Materie besteht: logische und mathematische Wahrheiten (2 + 2 = 4 galt auch vor dem ersten Gehirn), dein bewusstes Erleben (wie sich Schmerz oder Rot *anfühlt*), die Bedeutung von Gedanken – und sogar der Satz „Es gibt nur Materie" selbst: Er ist wahr oder falsch, aber Wahrheit besteht nicht aus Atomen. Wer behauptet, nur Materie existiere, benutzt dafür Dinge, die keine Materie sind.`,
  keyPoints: [
    `**Eine Philosophie, keine Messung:** Kein Experiment kann zeigen, dass nur das existiert, was Experimente erfassen. Lewontin gab offen zu, dass der Materialismus eine Voraussetzung ist, kein Ergebnis.`,
    `**Logik und Mathematik:** Ihre Wahrheiten gelten notwendig und überall – auch dort, wo es keine Gehirne gibt. Sie sind entdeckt, nicht erfunden, und lassen sich nicht wiegen oder messen.`,
    `**Bewusstsein:** Die Physik beschreibt Strukturen und Dynamiken; das Erleben – wie es ist, Schmerz zu empfinden – kommt in ihren Gleichungen nicht vor. Siehe „Bewusstsein lässt sich materialistisch erklären".`,
    `**Bedeutung und Wahrheit:** Ein Gedanke ist *über* etwas; Materiezustände sind über nichts. Wenn alles nur Materie ist, sind auch Argumente nur Teilchenbewegungen – auch die Argumente für den Materialismus.`,
    `**Die Physik selbst** spricht nicht von „kleinen Kügelchen", sondern von Feldern und mathematischen Strukturen. Warum die Welt diesen mathematischen Gesetzen folgt, kann die Physik nicht beantworten.`,
  ],
  argument: {
    name: 'Was der Materialismus nicht erfasst',
    summary: 'Es gibt reale Tatsachen, die keine physikalischen Tatsachen sind.',
    premises: [
      {
        text: 'P1: Wenn nur Materie und Energie existieren, dann sind alle Tatsachen physikalische Tatsachen (Tatsachen über Teilchen, Felder und ihre Anordnungen).',
        support: `Das ist die Definition des Materialismus bzw. Physikalismus, wie ihn Rosenberg oder Carroll vertreten.`,
      },
      {
        text: 'P2: Es gibt Tatsachen, die keine physikalischen Tatsachen sind: notwendige logische und mathematische Wahrheiten, die Qualität bewussten Erlebens, die Gerichtetheit (Intentionalität) von Gedanken, die Gültigkeit von Schlüssen.',
        support: `Dass aus „Alle Menschen sind sterblich" und „Sokrates ist ein Mensch" folgt „Sokrates ist sterblich", ist keine Tatsache über Teilchen, sondern über logische Beziehungen – sie gälte in jeder möglichen Welt. Dass Schmerz sich auf eine bestimmte Weise anfühlt, ist aus keiner physikalischen Beschreibung ableitbar (Nagel, Jackson, Chalmers). Und dass ein Gedanke von Paris *handelt*, ist keine Eigenschaft von Neuronen als solchen.`,
        sources: [
          { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Recalcitrant Imago Dei: Human Persons and the Failure of Naturalism', year: '2009', status: 'paraphrase', quote: 'Bewusstsein, freier Wille, Rationalität, die Einheit des Selbst und objektive Werte sind für den Naturalismus „widerspenstige" Tatsachen.' },
        ],
      },
    ],
    conclusion: 'Also existiert nicht nur Materie und Energie; der Materialismus ist falsch.',
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als ehemaliger Materialist',
      text: `Augustinus berichtet in den „Bekenntnissen", dass er als Manichäer lange nichts anderes denken konnte als Körperliches – selbst Gott stellte er sich als eine ausgedehnte, leuchtende Masse vor. Befreiend war für ihn die Entdeckung, dass es unveränderliche Wahrheiten gibt, die über dem menschlichen Geist stehen: die Gesetze der Zahlen und der Weisheit, die für alle denkenden Menschen gleich gelten und die keiner erfunden hat. In „Über den freien Willen" macht er daraus einen Weg zu Gott: Was über unserem veränderlichen Geist steht und ewig wahr ist, verweist auf die Wahrheit selbst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'V,10; VII,1–10', status: 'paraphrase', quote: 'Augustinus konnte sich lange nur Körperliches denken und fand durch die Erkenntnis unveränderlicher Wahrheit zum geistigen Gott.' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über den freien Willen (De libero arbitrio)', ref: 'II,8–15', status: 'paraphrase', quote: 'Die unveränderlichen Wahrheiten der Zahl und der Weisheit stehen über dem Geist und verweisen auf Gott als die Wahrheit.' },
      ],
    },
    {
      person: 'moreland',
      role: 'als Philosoph des Geistes',
      text: `Moreland nennt eine Reihe von Tatsachen, die sich dem Naturalismus „widersetzen": das Bewusstsein, die Einheit des Ich über die Zeit, die Fähigkeit zu rationalem Denken, die freie Handlung und objektive Werte. Nach seiner Analyse kann der Naturalismus diese Tatsachen entweder nur leugnen oder als unerklärte Zufälle stehen lassen, während sie unter der Annahme eines personalen, vernünftigen Schöpfers zu erwarten sind. Das Argument aus dem Bewusstsein ist für Moreland deshalb nicht nur eine Kritik am Materialismus, sondern ein eigener Hinweis auf Gott.`,
      sources: [
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Consciousness and the Existence of God', year: '2008', status: 'paraphrase', quote: 'Das Bewusstsein als Beleg für Gott und gegen den Naturalismus.' },
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Recalcitrant Imago Dei', year: '2009', status: 'paraphrase', quote: 'Fünf Tatsachen, die der Naturalismus nicht erklären kann.' },
      ],
    },
    {
      person: 'polkinghorne',
      role: 'als Quantenphysiker und Priester',
      text: `Polkinghorne, früher Professor für mathematische Physik in Cambridge, betont, dass die moderne Physik das Bild der Materie als kleiner, fester Kügelchen längst hinter sich gelassen hat: Die Grundbegriffe sind Quantenfelder und mathematische Strukturen, deren Verhalten sich oft unserer Anschauung entzieht. Gerade deshalb sei der grobe Materialismus des 19. Jahrhunderts überholt. Dass die Welt mathematisch so tief verständlich ist, sieht er als Hinweis darauf, dass hinter ihr ein Geist steht – die Physik stellt Fragen, die sie selbst nicht beantworten kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase', quote: 'Die Verständlichkeit der Welt und die Natur der Materie in der modernen Physik als Hinweise auf einen Schöpfer.' },
      ],
    },
    {
      person: 'feser',
      role: 'als aristotelischer Philosoph des Geistes',
      text: `Feser argumentiert, dass der Materialismus auf einer methodischen Entscheidung der frühen Neuzeit beruht: Die Naturwissenschaft beschloss, nur das Quantifizierbare zu beschreiben und alles Qualitative – Farbe, Geschmack, Zweck, Bedeutung – in den Geist des Beobachters zu verlegen. Damit wurde der Geist selbst zum Rest, der in diesem Bild keinen Platz hat. Wer nun versucht, auch den Geist materialistisch zu erklären, sägt am Ast, auf dem er sitzt: Er müsste das, was er vorher aus der Natur ausgeschlossen hat, wieder in sie hineinzwängen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Philosophy of Mind: A Beginner\'s Guide', year: '2006', status: 'paraphrase', quote: 'Der neuzeitliche Ausschluss der Qualitäten aus der Natur und die Folgen für die Philosophie des Geistes.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Apologet gegen den heidnischen Materialismus',
      text: `Athanasius verweist darauf, dass der Mensch Dinge tut, die kein bloßer Körper vermag: Er denkt über Abwesendes und Zukünftiges nach, prüft und korrigiert seine Sinneswahrnehmungen, fasst den Gedanken der Unsterblichkeit und strebt zum Göttlichen. Das Auge sieht, aber die Seele urteilt, ob das Gesehene gut ist. Daraus schließt er, dass die vernunftbegabte Seele vom Leib verschieden ist – nicht als Feindin des Leibes, sondern als das, was ihn lenkt, so wie ein Musiker sein Instrument.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '31–33', status: 'paraphrase', quote: 'Die Seele urteilt über die Sinne und denkt Unsterbliches; sie lenkt den Leib wie ein Musiker sein Instrument.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'core-theory-vollstaendig',
      objection: `„Die Gesetze der Physik, die dem Alltagsleben zugrunde liegen, sind vollständig bekannt. Es gibt keinen Raum für eine Seele oder einen Geist, der Atome anstößt – wir würden es messen."`,
      objectionBy: 'Sean Carroll',
      targetsPremise: 1,
      answer: `Die Core Theory beschreibt hervorragend, wie sich Teilchen und Felder verhalten. Aber sie beantwortet nicht, warum es überhaupt Gesetze gibt, warum sie mathematisch sind, warum es sich *anfühlt*, ein Mensch zu sein, und warum logische Schlüsse gültig sind. Eine vollständige Beschreibung des Wie ist noch keine Erklärung von allem. Carroll selbst räumt ein, dass Bewusstsein, Bedeutung und Moral nicht in den Gleichungen stehen – er nennt sie „emergente" Redeweisen.`,
      questionsBack: [`In welcher Gleichung der Core Theory kommt vor, wie sich Schmerz anfühlt?`],
      followUps: [
        {
          id: 'poetischer-naturalismus',
          objection: `„Bewusstsein, Moral und Bedeutung sind eben emergente Beschreibungsebenen – nützliche Arten, über komplexe Systeme zu reden. Das ist poetischer Naturalismus."`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 2,
          answer: `Wenn Bewusstsein, Bedeutung und Wahrheit nur „Redeweisen" sind, dann sind auch Gründe, Argumente und die Wahrheit des Naturalismus nur Redeweisen. Dann hat dein Argument keine echte Geltung, sondern ist nur eine nützliche Art, über Teilchenbewegungen zu sprechen. Und eine Redeweise erklärt nicht, warum ich überhaupt *erlebe* – sie setzt das Erleben voraus.`,
          followUps: [
            {
              id: 'starke-emergenz-natuerlich',
              objection: `„Dann eben starke Emergenz: Aus komplexer Materie entsteht wirklich etwas Neues – Geist. Das ist trotzdem natürlich, nicht übernatürlich."`,
              objectionBy: 'Häufiger Einwand (emergentistischer Naturalismus)',
              targetsPremise: 1,
              answer: `Wenn der Geist wirklich neue Eigenschaften und eigene kausale Kräfte hat, die sich nicht auf Physik zurückführen lassen, dann ist die These „Es gibt nur Materie" aufgegeben – das ist Dualismus mit anderem Namen. Und es stellt sich die Frage, warum Materie überhaupt das Potenzial hat, Geist hervorzubringen. Wenn das Universum von Anfang an auf Geist angelegt war, spricht das eher für einen Geist am Anfang als für blinde Materie.`,
            },
          ],
        },
      ],
    },
    {
      id: 'zahlen-im-kopf',
      objection: `„Zahlen und Logik existieren nur in unseren Köpfen. Sie sind Erfindungen des Gehirns, keine eigene Wirklichkeit."`,
      objectionBy: 'Häufiger naturalistischer Einwand',
      targetsPremise: 2,
      answer: `Dann wäre 2 + 2 = 4 erst wahr geworden, als es Gehirne gab – und vor 13 Milliarden Jahren hätte der Satz vom Widerspruch nicht gegolten. Aber die Physik setzt voraus, dass mathematische Gesetze schon beim Urknall galten. Mathematiker erleben ihre Arbeit als Entdeckung: Die Primzahlen waren unendlich viele, bevor Euklid es bewies. Unsere Begriffe sind im Kopf; die Wahrheiten, die sie erfassen, nicht.`,
      detail: `Siehe „Mathematik ist eine menschliche Erfindung".`,
      followUps: [
        {
          id: 'mathematik-evolution',
          objection: `„Mathematik funktioniert, weil die Evolution unser Gehirn an die Welt angepasst hat. Wer nicht zählen konnte, wurde gefressen."`,
          objectionBy: 'Häufiger Einwand',
          answer: `Die Evolution könnte erklären, warum wir drei Löwen von einem unterscheiden können. Aber nicht, warum hochabstrakte Mathematik – komplexe Zahlen, Gruppentheorie, Riemann'sche Geometrie –, die rein aus innerer Schönheit entwickelt wurde, sich Jahrzehnte später als genau die Sprache erwies, in der Quantenphysik und Relativitätstheorie geschrieben sind. Der Physiker Eugene Wigner nannte das die „unvernünftige Wirksamkeit der Mathematik".`,
          detail: `Siehe „Dass die Welt mathematisch beschreibbar ist, ist Zufall".`,
        },
      ],
    },
    {
      id: 'entzauberung-trend',
      objection: `„Die Geschichte der Wissenschaft ist eine Geschichte der Entzauberung: Blitze, Krankheiten, das Leben – alles war einmal ‚Geist' und ist jetzt Materie. Der Geist wird als Nächstes fallen."`,
      objectionBy: 'Daniel Dennett / Patricia Churchland (sinngemäß)',
      answer: `Die Wissenschaft hat Mechanismen durch bessere Mechanismen ersetzt – aber sie hat dabei den Geist immer vorausgesetzt: Es ist der Geist, der beobachtet, Hypothesen bildet und Schlüsse zieht. Das Bewusstsein ist nicht eine weitere Lücke im Weltbild, sondern das Fenster, durch das wir überhaupt etwas wissen. Aus einem Trend in der Vergangenheit folgt zudem nicht, dass er sich fortsetzen muss – das ist ein Glaubenssatz, den Karl Popper „promissorischen Materialismus" nannte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Karl R. Popper & John C. Eccles', work: 'The Self and Its Brain', year: '1977', ref: 'Teil I, Abschnitt „The New Promissory Materialism"', status: 'paraphrase', quote: 'Der Materialismus vertröstet auf künftige Erklärungen, die er noch nicht liefern kann.' },
      ],
      followUps: [
        {
          id: 'lewontin-ehrlich',
          objection: `„Lewontin hat es ehrlich gesagt: Wissenschaft muss materialistisch sein, sonst könnte man jede Lücke mit Wundern füllen."`,
          objectionBy: 'Richard Lewontin (1997)',
          answer: `Lewontin hat tatsächlich etwas sehr Ehrliches gesagt: dass nicht die Methoden der Wissenschaft uns zu materiellen Erklärungen zwingen, sondern eine „apriorische" Festlegung auf materielle Ursachen – man dürfe „keinen göttlichen Fuß in der Tür" zulassen. Damit gibt er zu, dass der Materialismus eine Vorentscheidung ist, kein Ergebnis. Eine Vorentscheidung kann man aber nicht als Beweis gegen Gott verwenden.`,
          sources: [
            { kind: 'gegner', author: 'Richard Lewontin', work: '„Billions and Billions of Demons", New York Review of Books', year: '1997', quote: `Moreover, that materialism is absolute, for we cannot allow a Divine Foot in the door.`, status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'wechselwirkung-energieerhaltung',
      objection: `„Wenn es etwas Nichtmaterielles gäbe, wie sollte es auf Materie wirken? Das würde die Energieerhaltung verletzen."`,
      objectionBy: 'Daniel Dennett (Consciousness Explained, 1991) / Sean Carroll',
      answer: `Die Energieerhaltung gilt für abgeschlossene physikalische Systeme – ob das Gehirn in diesem Sinn abgeschlossen ist, ist gerade die Frage. Zudem könnte ein Geist Vorgänge lenken, ohne Energie hinzuzufügen, etwa indem er unter physikalisch möglichen Ergebnissen auswählt. Vor allem aber: Dass wir nicht wissen, *wie* Geist und Materie zusammenwirken, ist eine offene Frage, keine Widerlegung – der Materialismus weiß ebenso wenig, wie Materie Erleben hervorbringt.`,
      detail: `Siehe „Die Physik ist kausal geschlossen – für Gott oder Seele ist kein Platz".`,
      followUps: [
        {
          id: 'dualismus-nicht-testbar',
          objection: `„Dualismus ist nicht testbar und deshalb unwissenschaftlich."`,
          objectionBy: 'Lawrence Krauss',
          answer: `Der Materialismus ist ebenso wenig experimentell testbar – „Es gibt nur Materie" ist keine Messung, sondern eine philosophische These. Philosophische Positionen werden nicht im Labor entschieden, sondern daran gemessen, wie gut sie die Gesamtheit der Daten erklären – einschließlich des wichtigsten Datums: dass wir bewusst erleben und denken.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Satz „Es gibt nur Materie" selbst etwas Materielles? Wie viel wiegt er?`,
    `War 2 + 2 = 4 auch wahr, bevor es Gehirne gab?`,
    `Welche physikalische Eigenschaft eines Neurons macht, dass ein Gedanke *von* Paris handelt?`,
    `Wenn deine Gedanken nur Teilchenbewegungen sind – warum sollten sie wahr sein statt nur ablaufen?`,
  ],
  avoid: [
    `Die Materie abwerten („Der Körper ist unwichtig, nur die Seele zählt"). Das ist nicht orthodox – Gott hat die Materie gut geschaffen.`,
    `Mit Quantenmystik argumentieren („Die Quantenphysik beweist, dass Bewusstsein die Realität erschafft").`,
    `Behaupten, die Wissenschaft habe die Seele nachgewiesen. Die Argumente sind philosophisch.`,
  ],
  concessions: [
    `Die Physik beschreibt das Verhalten der Materie mit enormer Präzision; die Core Theory ist eine großartige Leistung.`,
    `Wie Geist und Leib zusammenwirken, ist auch für Christen eine offene Frage.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Recalcitrant Imago Dei', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas Nagel', work: 'Mind and Cosmos', year: '2012', status: 'paraphrase', note: 'Kritik von atheistischer Seite.' },
    { kind: 'fachliteratur', author: 'Edward Feser', work: 'Philosophy of Mind: A Beginner\'s Guide', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Sean Carroll', work: 'The Big Picture', year: '2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Materialismus', 'Physikalismus', 'Naturalismus', 'Abstrakte Objekte', 'Emergenz'],
  related: [
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'naturalismus/vernunft-durch-evolution',
    'mathematik/mathematik-menschliche-erfindung',
    'mathematik/effektivitaet-der-mathematik-zufall',
    'physik/physik-kausal-geschlossen',
    'neurowissenschaften/geist-gleich-gehirn',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
  ],
};

export default claim;
