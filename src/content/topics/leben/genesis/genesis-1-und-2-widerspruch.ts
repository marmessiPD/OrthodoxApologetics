import type { Claim, Source } from '../../../schema.ts';

const gen24: Source = {
  kind: 'bibel',
  work: 'Genesis',
  ref: '2,4',
  quote: `Also ist Himmel und Erde geworden, da sie geschaffen sind, zu der Zeit, da Gott der HERR Erde und Himmel machte.`,
  original: 'ʾēlleh tôlədôt haššāmayim wəhāʾāreṣ („Dies sind die Toledot – das, was hervorging aus – Himmel und Erde")',
  translation: 'Luther 1912',
  status: 'verbatim',
};

const gen25: Source = {
  kind: 'bibel',
  work: 'Genesis',
  ref: '2,5',
  quote: `Und allerlei Bäume auf dem Felde waren noch nicht auf Erden, und allerlei Kraut auf dem Felde war noch nicht gewachsen; denn Gott der HERR hatte noch nicht regnen lassen auf Erden, und es war kein Mensch, der das Land baute.`,
  original: 'śîaḥ haśśādeh … ʿēśeb haśśādeh („Gesträuch des Feldes … Kraut des Feldes")',
  translation: 'Luther 1912',
  status: 'verbatim',
};

const gen219: Source = {
  kind: 'bibel',
  work: 'Genesis',
  ref: '2,19',
  quote: `Denn als Gott der HERR gemacht hatte von der Erde allerlei Tiere auf dem Felde und allerlei Vögel unter dem Himmel, brachte er sie zu dem Menschen, daß er sähe, wie er sie nennte; …`,
  translation: 'Luther 1912',
  status: 'verbatim',
  note: 'Luther übersetzt das hebräische wayyiṣer hier im Plusquamperfekt („gemacht hatte").',
};

const mt194: Source = {
  kind: 'bibel',
  work: 'Matthäus',
  ref: '19,4–5',
  quote: `Habt ihr nicht gelesen, daß, der im Anfang den Menschen gemacht hat, der machte, daß ein Mann und Weib sein sollte, und sprach: „Darum wird ein Mensch Vater und Mutter verlassen und an seinem Weibe hangen, und werden die zwei ein Fleisch sein"?`,
  translation: 'Luther 1912',
  status: 'paraphrase',
  note: 'Jesus verbindet Gen 1,27 und Gen 2,24 in einem Satz.',
};

const collins1995: Source = {
  kind: 'fachliteratur',
  author: 'C. John Collins',
  work: `„The Wayyiqtol as ‚Pluperfect': When and Why", Tyndale Bulletin 46 (1), S. 117–140`,
  year: '1995',
  quote: `Collins untersucht, unter welchen Bedingungen die hebräische Erzählform wayyiqtol im Kontext eine vorzeitige Handlung („hatte gemacht") ausdrücken kann.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'genesis-1-und-2-widerspruch',
  title: `„Genesis 1 und 2 widersprechen sich."`,
  proponents: [
    { name: 'Richard Elliott Friedman', role: 'Bibelwissenschaftler', work: 'Who Wrote the Bible? (1987)' },
    { name: 'Julius Wellhausen', role: 'Alttestamentler (1844–1918)', work: 'Prolegomena zur Geschichte Israels (1883) – Urkundenhypothese' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, populärer YouTuber', work: 'Videos zu Widersprüchen in der Genesis' },
    { name: 'Joel S. Baden', role: 'Alttestamentler, Yale', work: 'The Composition of the Pentateuch (2012)' },
  ],
  steelman: `Wer Genesis 1 und 2 nebeneinander liest, findet zwei verschiedene Schöpfungsberichte. In Genesis 1 erschafft Gott zuerst Pflanzen, dann Tiere und am Ende Mann und Frau gemeinsam. In Genesis 2 gibt es noch keine Pflanzen, als Gott den Mann formt (2,5–7); danach pflanzt er einen Garten, erst dann bildet er die Tiere (2,19) und schließlich die Frau aus der Rippe. Die Gottesnamen unterscheiden sich (Elohim gegenüber JHWH Elohim), ebenso der Stil: In Genesis 1 ein erhabener Gott, der durch sein Wort schafft, in Genesis 2 ein menschlich handelnder Gott, der formt, pflanzt und Odem einbläst. Auch das Weltbild unterscheidet sich – dort Urflut, hier trockenes Land. Die historisch-kritische Forschung erklärt das seit über hundert Jahren mit zwei Quellen (Priesterschrift und Jahwist), die ein Redaktor zusammenfügte. Wer das harmonisiert, verbiegt die Texte.`,
  biblical: {
    summary: `Genesis 2,4 eröffnet mit der Formel „Dies sind die *Toledot* von Himmel und Erde" einen neuen Abschnitt. Die Toledot-Formel gliedert das ganze Buch (Gen 5,1; 6,9; 11,10 …) und leitet stets über zu dem, was *aus* dem Genannten hervorging – also: Was wurde aus Himmel und Erde? Genesis 1 ist die Weitwinkelaufnahme der ganzen Schöpfung, Genesis 2 die Nahaufnahme von Garten, Mensch und Beziehung. Die Pflanzen in 2,5 sind „Gesträuch des Feldes" und „Kraut des Feldes" – Kulturpflanzen, die Regen und einen Bauern brauchen. Und Gen 2,19 lässt sich vorzeitig übersetzen („als Gott gemacht hatte"), wie Luther es tut. Jesus zitiert beide Kapitel in einem Atemzug (Mt 19,4–5).`,
    detail: `**Gen 2,5 genau gelesen:** Der Text gibt zwei Gründe für das Fehlen dieser Pflanzen: Es hatte nicht geregnet, und es gab keinen Menschen, der das Land bebaute. Beide Gründe betreffen Ackerbau und Feldvegetation in einem bestimmten Land (*ʾereṣ* = Land), nicht die gesamte Pflanzenwelt. Dasselbe „Kraut des Feldes" isst der Mensch nach dem Fall im Schweiße seines Angesichts (Gen 3,18–19) – gemeint ist Getreide.

**Gen 2,19:** Das hebräische *wayyiṣer* kann im Zusammenhang vorzeitig verstanden werden (vgl. Collins 1995); Luther 1912 übersetzt so. Alternativ formt Gott vor Adams Augen einzelne Tiere für den Garten. In beiden Fällen geht es nicht um die Reihenfolge der Schöpfung, sondern um die Benennung und die Suche nach einer „Gehilfin".

**Gen 1,27 und Gen 2:** „Als Mann und Frau schuf er sie" fasst zusammen; Gen 2 erzählt, *wie*.

**Gottesnamen:** Elohim betont den universalen Schöpfer, JHWH den Bundesgott Israels. Die Doppelform „JHWH Elohim" in Gen 2–3 identifiziert bewusst den Bundesgott mit dem Schöpfer.`,
    sources: [gen24, gen25, gen219, mt194,
      { kind: 'bibel', work: 'Genesis', ref: '1,27', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter lasen Genesis 1 und 2 als eine zusammenhängende Schrift. Ephräm der Syrer legt Genesis 2 als ausführliche Darstellung dessen aus, was Genesis 1 über den Menschen zusammenfasst. Augustinus versteht Gen 2,4ff. als Rückblick („Rekapitulation") auf die Schöpfung mit Blick auf den Menschen. Die koptische Tradition liest beide Kapitel wörtlich und geistlich zugleich: Gen 1 zeigt Gott als allmächtigen Schöpfer, Gen 2 als liebenden Vater, der den Menschen mit eigenen Händen formt und ihm seinen Odem schenkt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Kommentar zur Genesis (Commentarius in Genesim)', ref: 'II', quote: `Ephräm erläutert, dass Mose in Genesis 2 ausführlich darlegt, was er zuvor über die Erschaffung des Menschen nur kurz gesagt hatte.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'V', quote: `Gen 2,4ff. blickt auf das Schöpfungswerk zurück und entfaltet es mit Blick auf den Menschen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Urkundenhypothese (Wellhausen) ordnete Gen 1,1–2,4a der Priesterschrift (P) und Gen 2,4b–25 dem Jahwisten (J) zu; viele Fachleute sehen bis heute zwei Traditionen. Zugleich ist das klassische Modell in der europäischen Forschung seit den 1970er-Jahren stark erschüttert (Rendtorff, Blum, Schmid); über die Existenz eines durchgehenden Jahwisten wird gestritten. Auch wer zwei Quellen annimmt, muss erklären, warum ein kundiger Redaktor sie bewusst nebeneinanderstellte – offenbar sah er keinen Widerspruch. Jüdische Gelehrte wie Umberto Cassuto haben die Urkundenhypothese grundsätzlich kritisiert und die Kapitel als komplementär gelesen.`,
    sources: [
      { kind: 'gegner', author: 'Richard Elliott Friedman', work: 'Who Wrote the Bible?', year: '1987', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Umberto Cassuto', work: 'The Documentary Hypothesis and the Composition of the Pentateuch (hebr. 1941, engl. 1961)', status: 'paraphrase', quote: `Cassuto, ein jüdischer Bibelwissenschaftler, kritisiert die Kriterien der Urkundenhypothese (Gottesnamen, Stil, Doppelungen) als nicht tragfähig.` },
      { kind: 'fachliteratur', author: 'Gordon J. Wenham', work: 'Genesis 1–15 (Word Biblical Commentary 1)', year: '1987', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Genesis 1 ist die Weitwinkelaufnahme – das ganze Universum, durch Gottes Wort geordnet. Genesis 2 zoomt in den Garten und auf die Erschaffung von Mann und Frau; es beginnt mit einer eigenen Überschrift (Gen 2,4). Die Pflanzen in 2,5 sind Feldpflanzen, die Regen und einen Bauern brauchen, und 2,19 kann man „als Gott die Tiere gemacht hatte" übersetzen – so steht es bei Luther. Jesus zitiert beide Kapitel in einem Satz (Mt 19,4–5).`,
  keyPoints: [
    `**Neue Überschrift:** Gen 2,4 („Dies sind die Toledot von Himmel und Erde") beginnt einen neuen Abschnitt, der erzählt, was aus der Schöpfung wurde.`,
    `**Weitwinkel und Nahaufnahme:** Gen 1 kosmisch und geordnet, Gen 2 lokal und beziehungsorientiert – zwei Perspektiven, ein Gott.`,
    `**Feldpflanzen, nicht alle Pflanzen:** Gen 2,5 nennt Regen und Ackerbau als Gründe – es geht um Kulturpflanzen eines Landes.`,
    `**Vorzeitigkeit möglich:** Gen 2,19 lässt sich als „hatte gemacht" verstehen (Luther 1912).`,
    `**Jesus liest beide zusammen:** Mt 19,4–5 verbindet Gen 1,27 und Gen 2,24.`,
    `**Auch bei zwei Quellen kein Widerspruch:** Der Redaktor stellte sie bewusst nebeneinander – Überblick plus Entfaltung ist ein bekanntes altorientalisches Muster (Kitchen).`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Altorientalist',
      text: `Kenneth Kitchen weist darauf hin, dass altorientalische Texte häufig einen knappen Gesamtüberblick an den Anfang stellen und ihn anschließend an einem Teilaspekt ausführlich entfalten. Solche „Doppelungen" sind in ägyptischen und mesopotamischen Inschriften gängige Stilmittel und kein Beweis für verschiedene Autoren. Wer Gen 1 und 2 nach den Maßstäben ihrer eigenen Welt liest, findet ein vertrautes literarisches Muster.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'meredith-kline',
      role: 'als Alttestamentler',
      text: `Kline zeigte in „Because It Had Not Rained" (1958), dass Gen 2,5 eine ganz natürliche Begründung gibt: Bestimmte Pflanzen fehlten, weil es noch nicht geregnet hatte und kein Mensch das Land bebaute. Damit setzt der Text normale Abläufe der Vorsehung voraus und beschreibt eine konkrete Situation – nicht eine Gegen-Schöpfungsgeschichte zu Genesis 1. Gen 2 setzt Gen 1 voraus und füllt es für den Menschen aus.`,
      sources: [{ kind: 'fachliteratur', author: 'Meredith G. Kline', work: '„Because It Had Not Rained", Westminster Theological Journal 20, S. 146–157', year: '1958', status: 'paraphrase' }],
    },
    {
      person: 'john-walton',
      role: 'als Alttestamentler (altorientalischer Hintergrund)',
      text: `Walton liest Genesis 2 vor dem Hintergrund altorientalischer Tempel- und Gartenvorstellungen: Der Garten ist ein Heiligtum, in dem Gott dem Menschen begegnet, und Adam erhält eine priesterliche Aufgabe („bebauen und bewahren"). Genesis 1 beschreibt dagegen die Einrichtung des ganzen Kosmos. Beide Texte beantworten unterschiedliche Fragen – den Rahmen der Welt und die Rolle des Menschen darin – und widersprechen sich deshalb nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'John H. Walton', work: 'The Lost World of Genesis One', year: '2009', status: 'paraphrase' }],
    },
    {
      person: 'ephraem',
      role: 'als syrischer Ausleger der Genesis',
      text: `Ephräm der Syrer, der die Schöpfungstage wörtlich verstand, sah zwischen Genesis 1 und 2 keinen Widerspruch: Mose berichte im zweiten Kapitel ausführlicher, was er im ersten über die Erschaffung des Menschen knapp gesagt habe. Für Ephräm ist Genesis 2 eine liebevolle Vertiefung – Gott formt den Menschen mit eigenen Händen und pflanzt ihm einen Garten.`,
      sources: [{ kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Kommentar zur Genesis', ref: 'II', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `In der patristischen Auslegung, die Tadros Malaty für die koptische Kirche zusammenträgt, stehen Genesis 1 und 2 für zwei Seiten desselben Gottes: den allmächtigen Schöpfer, der durch sein Wort ruft, und den liebenden Vater, der den Menschen persönlich formt und ihm seinen Odem einhaucht. Diese Doppelperspektive ist für die alexandrinische Theologie kein Problem, sondern ein Reichtum – wörtlicher und geistlicher Sinn ergänzen sich.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Genesis', status: 'paraphrase', note: 'Inhaltliche Wiedergabe; konkrete Seitenangabe nicht geprüft.' }],
    },
  ],
  dialog: [
    {
      id: 'pflanzen-reihenfolge',
      objection: `In Genesis 1 entstehen die Pflanzen vor dem Menschen, in Genesis 2,5–7 gibt es noch keine Pflanzen, als der Mensch geschaffen wird.`,
      objectionBy: 'Richard Elliott Friedman',
      answer: `Gen 2,5 spricht vom „Gesträuch des Feldes" und „Kraut des Feldes" und nennt zwei Gründe: Es hatte nicht geregnet, und niemand bebaute das Land. Das betrifft Feld- und Kulturpflanzen, nicht die gesamte Vegetation. Dasselbe „Kraut des Feldes" isst Adam nach dem Fall im Schweiße seines Angesichts (Gen 3,18) – Getreide.`,
      sources: [gen25],
      followUps: [
        {
          id: 'harmonisierung',
          objection: `Das ist Harmonisierung. Der natürliche Sinn ist: Es gab noch keine Pflanzen.`,
          objectionBy: 'Dan McClellan',
          answer: `Der natürliche Sinn ergibt sich aus den Gründen, die der Text selbst nennt: kein Regen, kein Bauer. Diese Gründe erklären das Fehlen von Ackerpflanzen, nicht von Wäldern. Zudem kann *ʾereṣ* hier „Land" heißen – ein bestimmtes Gebiet.`,
          followUps: [
            {
              id: 'kline-apologet',
              objection: `Kline ist ein evangelikaler Apologet – natürlich findet er eine Lösung.`,
              answer: `Das Argument ist philologisch und überprüfbar. Und auch der jüdische Bibelwissenschaftler Umberto Cassuto, gewiss kein evangelikaler Apologet, las Genesis 1 und 2 als einander ergänzend und kritisierte die Urkundenhypothese grundlegend.`,
            },
          ],
        },
      ],
    },
    {
      id: 'tiere-nach-mensch',
      objection: `In Genesis 2,19 erschafft Gott die Tiere nach dem Menschen, in Genesis 1 davor.`,
      objectionBy: 'Dan McClellan',
      answer: `Das hebräische Verb kann im Zusammenhang vorzeitig verstanden werden: „Als Gott der HERR … gemacht hatte, brachte er sie zu dem Menschen" – so übersetzt Luther 1912. Der Vers erzählt nicht die Reihenfolge der Schöpfung, sondern wie Gott die Tiere zu Adam bringt, um sie zu benennen.`,
      sources: [gen219],
      followUps: [
        {
          id: 'wayyiqtol-akrobatik',
          objection: `Die hebräische Erzählform wayyiqtol ist kein Plusquamperfekt. Das ist grammatische Akrobatik.`,
          objectionBy: 'Dan McClellan',
          answer: `Unter Hebraisten ist umstritten, wann wayyiqtol vorzeitig verstanden werden kann; C. John Collins hat Bedingungen dafür in einer Fachstudie untersucht. Und selbst ohne Plusquamperfekt bleibt eine schlichte Lesart: Gott formt vor Adams Augen Tiere für den Garten. Ein Widerspruch ist das nicht zwingend.`,
          sources: [collins1995],
          followUps: [
            {
              id: 'warum-zwei-texte',
              objection: `Selbst wenn – warum stehen dann zwei so verschiedene Texte nebeneinander?`,
              answer: `Weil sie zwei Fragen beantworten: Wie ist die Welt geordnet, und was ist der Mensch in ihr? Überblick und Entfaltung sind ein bekanntes altorientalisches Muster. Und die Gottesnamen zeigen das Programm: Der universale Schöpfer (Elohim) ist kein anderer als der Bundesgott (JHWH).`,
            },
          ],
        },
      ],
    },
    {
      id: 'gottesnamen-quellen',
      objection: `Die unterschiedlichen Gottesnamen beweisen zwei Quellen – J und P.`,
      objectionBy: 'Julius Wellhausen',
      answer: `Gottesnamen tragen Theologie: Elohim betont den Schöpfer aller Welt, JHWH den Bundesgott. Die Doppelform „JHWH Elohim" in Gen 2–3 setzt beide bewusst gleich. Und die klassische Urkundenhypothese ist in der Forschung selbst stark umstritten.`,
      followUps: [
        {
          id: 'forschung-einig',
          objection: `Aber die moderne Bibelwissenschaft ist sich doch einig.`,
          objectionBy: 'Joel Baden',
          answer: `Nicht mehr: Seit den 1970er-Jahren haben Forscher wie Rolf Rendtorff, Erhard Blum und Konrad Schmid das klassische Modell grundlegend in Frage gestellt; ob es einen durchgehenden Jahwisten gab, ist offen. Und selbst mehrere Quellen bedeuten nicht automatisch Widerspruch. Siehe auch den Claim zur Urkundenhypothese.`,
        },
      ],
    },
    {
      id: 'mann-frau-gleichzeitig',
      objection: `In Genesis 1 werden Mann und Frau gleichzeitig geschaffen, in Genesis 2 die Frau später aus der Rippe.`,
      answer: `Gen 1,27 fasst zusammen: „Als Mann und Frau schuf er sie". Gen 2 erzählt, *wie* das geschah. Jesus verbindet beide Stellen sogar in einem Satz (Mt 19,4–5).`,
      sources: [mt194],
      followUps: [
        {
          id: 'jesus-beweist-nichts',
          objection: `Dass Jesus beide zitiert, beweist nicht, dass sie zusammenpassen.`,
          answer: `Es zeigt zumindest, dass die frühesten und kundigsten Leser keinen Widerspruch sahen – sie lasen beide Kapitel als eine Schrift mit einer Lehre über Mann und Frau. Die Beweislast liegt bei dem, der einen echten Widerspruch behauptet: dass beide Texte dasselbe im selben Sinn verneinen und bejahen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was bedeutet die Formel „Dies sind die Toledot" an den anderen Stellen der Genesis?`,
    `Welche Gründe nennt Gen 2,5 für das Fehlen der Pflanzen – und auf welche Pflanzen passen sie?`,
    `Warum hätte ein Redaktor zwei Texte zusammengefügt, die sich seiner Meinung nach widersprechen?`,
    `Was ist für dich ein echter Widerspruch – zwei Perspektiven oder zwei unvereinbare Behauptungen?`,
  ],
  avoid: [
    `„Es gibt überhaupt keine Unterschiede" – die Unterschiede in Stil und Perspektive sind offensichtlich; erkläre sie.`,
    `Die Urkundenhypothese als „von Atheisten erfunden" abtun – sie wurde von Theologen entwickelt.`,
  ],
  concessions: [
    `Genesis 1 und 2 unterscheiden sich deutlich in Stil, Gottesnamen und Perspektive.`,
    `Viele Fachleute rechnen mit zwei ursprünglich getrennten Traditionen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. John Collins', work: 'Genesis 1–4: A Linguistic, Literary, and Theological Commentary', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gordon J. Wenham', work: 'Genesis 1–15 (Word Biblical Commentary)', year: '1987', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Genesis 1', 'Genesis 2', 'Toledot', 'Urkundenhypothese', 'Widersprüche'],
  related: ['at-archaeologie/dokumentenhypothese', 'genesis/vaeter-lasen-woertlich', 'genesis/genesis-von-babylon-kopiert'],
};

export default claim;
