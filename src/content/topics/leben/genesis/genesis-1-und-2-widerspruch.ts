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
              followUps: [
                {
                  id: 'cassuto-veraltet',
                  objection: `Cassuto schrieb in den 1940er-Jahren. Seitdem hat sich die Forschung weiterentwickelt. Und die Bibel ist nun einmal nicht einstimmig: Sie enthält viele Stimmen, die sich nicht immer decken. Das zu leugnen, ist Apologetik, keine Wissenschaft.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Das Alter eines Arguments widerlegt es nicht – Wellhausen ist noch älter. Und gerade die neuere Forschung hat das klassische Modell, gegen das Cassuto schrieb, selbst erschüttert. Bei der Vielstimmigkeit gebe ich dir recht: Die Bibel spricht mit vielen Stimmen und Perspektiven. Aber verschiedene Perspektiven sind noch kein Widerspruch. Ein Widerspruch liegt erst vor, wenn zwei Texte dasselbe im selben Sinn bejahen und verneinen.`,
                  detail: `**Die Forschungslage ehrlich:** Rolf Rendtorff (1977) und Erhard Blum (1984) haben die Annahme durchgehender Quellenschriften im Pentateuch grundlegend in Frage gestellt; in der europäischen Forschung dominieren heute andere Modelle. Die „Neo-Documentarians" in Nordamerika (Joel Baden u. a.) halten dagegen an Quellen fest. Es gibt also keinen Konsens, auf den man sich einfach berufen könnte.

**Vielstimmigkeit zugestehen:** McClellan betont zu Recht, dass die Bibel keine einheitliche Stimme hat und dass Leser sie nicht künstlich glätten sollen. Die Kirche hat das nie bestritten – sie hat vier Evangelien, nicht eines, und die Väter sahen in der Vielfalt der Zeugen eine Stärke.

**Der Maßstab:** Genesis 1 sagt, *dass* Gott alles schuf und den Menschen als Mann und Frau; Genesis 2 erzählt, *wie* er den Menschen formte und in den Garten setzte. Wo genau bejaht der eine Text, was der andere im selben Sinn verneint? Diese Frage hilft, zwischen Spannung und Widerspruch zu unterscheiden.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Rolf Rendtorff', work: 'Das überlieferungsgeschichtliche Problem des Pentateuch (BZAW 147)', year: '1977', quote: `Rendtorff stellt die Annahme durchgehender Quellenschriften (J, E) im Pentateuch grundsätzlich in Frage.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wo genau bejaht Genesis 1 etwas, das Genesis 2 im selben Sinn verneint?`],
                },
              ],
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
              followUps: [
                {
                  id: 'antike-kein-problem-mit-spannung',
                  objection: `Genau: Die antiken Redaktoren hatten kein Problem damit, verschiedene Überlieferungen nebeneinanderzustellen, auch wenn sie sich in Details widersprechen. Erst die moderne Irrtumslosigkeitslehre macht daraus ein Problem, das ihr dann wegharmonisieren müsst.`,
                  objectionBy: 'Peter Enns',
                  answer: `Da sind wir näher beieinander, als du denkst: Ich stimme zu, dass die antiken Autoren Perspektiven bewusst nebeneinanderstellten und darin keinen Widerspruch sahen – das ist gerade mein Argument. Aber ich verteidige keine moderne, rein chronologische Irrtumslosigkeit. Die orthodoxe Kirche liest die Schrift als inspiriertes Wort Gottes im wörtlichen und im geistlichen Sinn, mit den Vätern. Schon Origenes und Augustinus bemerkten Spannungen im Text und sahen in ihnen Hinweise auf tiefere Bedeutung, nicht auf Fehler.`,
                  detail: `**Enns' Anliegen:** In *Inspiration and Incarnation* (2005) schlägt Enns vor, die Schrift „inkarnatorisch" zu verstehen: Wie Christus wahrhaft Mensch wurde, so spricht Gottes Wort wahrhaft in menschlicher, antiker Sprache – mit allen Eigenheiten ihrer Zeit. Er kritisiert eine Apologetik, die jede Spannung zwanghaft auflöst.

**Was ein koptischer Christ dazu sagt:** Die alexandrinische Tradition kennt die Analogie zwischen Inkarnation und Schrift seit Origenes. Sie führt aber nicht zur Annahme, die Schrift irre in dem, was sie lehren will. Der Weg der Väter war: Den Wortsinn ernst nehmen, Spannungen nicht verstecken, und den geistlichen Sinn suchen, auf den der Heilige Geist durch die Gestalt des Textes hinweist.

**Für die Debatte:** Du musst keine moderne Harmonisierungsakrobatik verteidigen. Es reicht zu zeigen: Die Texte sind komplementär gemeint (Toledot-Formel, JHWH Elohim), und die frühesten Leser – jüdische wie christliche – lasen sie als Einheit.`,
                  voices: [
                    {
                      person: 'origenes',
                      role: 'als Bibelwissenschaftler der Schule von Alexandrien',
                      text: `Origenes lehrt in *De Principiis* IV, dass der Heilige Geist bisweilen „Anstöße" in den Wortsinn gelegt habe – Stellen, die für sich genommen schwierig erscheinen –, um den Leser zur Suche nach dem tieferen Sinn zu führen. Er leugnet den Wortsinn nicht grundsätzlich, sondern hält ihn in den meisten Fällen für wahr; die Spannungen sind für ihn Einladungen, nicht Fehler.`,
                      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Über die Prinzipien (De Principiis / Peri Archon)', ref: 'IV,2,9', status: 'paraphrase', quote: `Der Geist habe manche Anstöße und Unmöglichkeiten in die Erzählung eingefügt, damit der Leser nicht beim Buchstaben stehen bleibe, sondern zum geistlichen Sinn aufsteige.`, note: 'Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; hier als Zeuge der alexandrinischen Auslegungsmethode zitiert.' }],
                    },
                  ],
                  sources: [{ kind: 'gegner', author: 'Peter Enns', work: 'Inspiration and Incarnation: Evangelicals and the Problem of the Old Testament', year: '2005', quote: `Enns schlägt ein „inkarnatorisches" Schriftverständnis vor, das die antiken menschlichen Züge der Bibel ernst nimmt.`, status: 'paraphrase' }],
                  questionsBack: [`Wenn die antiken Redaktoren keinen Widerspruch sahen – warum sollten wir ihnen einen unterstellen, den sie selbst nicht kannten?`],
                },
              ],
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
          followUps: [
            {
              id: 'priesterschrift-bleibt',
              objection: `Der Jahwist ist umstritten, zugegeben. Aber dass Genesis 1 zur Priesterschrift gehört, ist in fast allen Modellen Konsens – in Europa wie in Amerika. Zwei verschiedene Hände bleiben also.`,
              objectionBy: 'Joel Baden',
              answer: `Das stimmt: Die Zuordnung von Genesis 1 zu einer priesterlichen Tradition ist der stabilste Teil der Quellenkritik, das gestehe ich zu. Aber auch dann bleibt die entscheidende Frage: Warum stellte jemand, der beide Texte kannte, sie direkt hintereinander – mit einer Überschrift (Gen 2,4), die den zweiten ausdrücklich als Fortsetzung des ersten markiert? Wer mit Quellen rechnet, muss den Redaktor ernst nehmen, und der sah keinen Widerspruch.`,
              detail: `**Konzession:** Ob man Genesis 1 einer Priesterschrift zuschreibt oder nicht – für die Frage des Widerspruchs ist das zweitrangig. Auch ein Text aus zwei Händen kann ein kohärentes Ganzes bilden, wenn er bewusst komponiert wurde.

**Die Toledot-Formel:** „Dies sind die Toledot …" gliedert die Genesis in rund zehn Abschnitte. Sie leitet jeweils über zu dem, was aus dem Genannten hervorging. Wer Gen 2,4 an dieser Stelle setzte, wollte offensichtlich, dass Gen 2 als „was aus Himmel und Erde wurde" gelesen wird – also als Fortsetzung, nicht als Konkurrenz.

**Jüdische Leser:** Die rabbinische Tradition hat Genesis 1 und 2 stets als Einheit gelesen und die Unterschiede als bedeutsame Nuancen ausgelegt – lange vor jeder christlichen Apologetik.`,
              sources: [{ kind: 'gegner', author: 'Joel S. Baden', work: 'The Composition of the Pentateuch: Renewing the Documentary Hypothesis', year: '2012', quote: `Baden verteidigt ein erneuertes Quellenmodell mit unabhängigen, durchgehenden Erzählfäden und einem Kompilator, der sie möglichst vollständig bewahren wollte.`, status: 'paraphrase' }],
              questionsBack: [`Warum hätte ein Kompilator, der möglichst alles bewahren wollte, zwei Texte direkt hintereinandergestellt, wenn er sie für unvereinbar hielt?`],
              followUps: [
                {
                  id: 'zwei-menschenbilder',
                  objection: `Es geht nicht nur um Reihenfolgen. Die beiden Kapitel haben verschiedene Menschenbilder: In Genesis 1 ist der Mensch Gottes Ebenbild und Herrscher – königliche Ideologie. In Genesis 2 ist er ein aus Staub geformter Gärtner, der den Boden bearbeitet. Das sind zwei Theologien.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Zwei Akzente, ja – zwei unvereinbare Theologien, nein. Der Mensch ist beides: von königlicher Würde als Bild Gottes und demütig aus Staub, abhängig von Gottes Odem. Gerade diese Spannung macht das biblische Menschenbild so tief – Ps 8 vereint beides: „Was ist der Mensch, dass du seiner gedenkst? … mit Ehre und Schmuck hast du ihn gekrönt." Die koptische Liturgie betet bis heute mit beiden Kapiteln zugleich.`,
                  detail: `**Würde und Demut:** Genesis 1 betont die Stellung des Menschen in der Schöpfung (Bild Gottes, Auftrag zur Herrschaft); Genesis 2 betont seine Herkunft und Abhängigkeit (Staub, Odem Gottes, Garten als Gabe). Ein Text ohne den anderen wäre einseitig: Würde ohne Demut führt zu Hochmut, Demut ohne Würde zur Verachtung des Menschen.

**Die Väter:** Gregor von Nyssa und die alexandrinische Tradition beschreiben den Menschen als „Grenzwesen" zwischen geistiger und materieller Welt – genau die Verbindung, die Gen 1 und 2 gemeinsam ausdrücken.

**Die Liturgie:** In der Anaphora des heiligen Gregorius, die in der koptischen Kirche gefeiert wird, wendet sich der Priester an Christus und dankt ihm, dass er den Menschen geschaffen, ihm das Paradies der Wonne geschenkt und ihn mit seinem Bild geehrt hat. Hier fließen beide Kapitel ganz selbstverständlich zusammen.`,
                  sources: [
                    { kind: 'bibel', work: 'Psalmen', ref: '8,5–6', quote: `Was ist der Mensch, daß du seiner gedenkst, und des Menschen Kind, daß du dich seiner annimmst? Du hast ihn wenig niedriger gemacht denn Gott, und mit Ehre und Schmuck hast du ihn gekrönt.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'liturgie', work: 'Anaphora des heiligen Gregorius (koptische Liturgie)', quote: `Dank an Christus, der den Menschen erschaffen, ihn in das Paradies der Wonne gesetzt und ihm die Erkenntnis seiner Gottheit geschenkt hat.`, status: 'paraphrase', note: 'Sinngemäße Wiedergabe des Schöpfungsteils der Gregorius-Anaphora; Wortlaut je nach Übersetzung verschieden.' },
                  ],
                  questionsBack: [`Schließen sich königliche Würde und Herkunft aus dem Staub aus – oder beschreiben sie gemeinsam, was ein Mensch ist?`],
                },
              ],
            },
          ],
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
          followUps: [
            {
              id: 'jesus-mensch-seiner-zeit',
              objection: `Jesus war ein Jude des ersten Jahrhunderts und argumentierte innerhalb der Annahmen seiner Zeit. Dass er Genesis zitiert, sagt nichts über die Entstehung oder Einheit der Texte – er benutzt sie einfach für seine Ehelehre.`,
              objectionBy: 'Dan McClellan',
              answer: `Mein Punkt ist bescheidener, als du denkst: Jesus liest Gen 1,27 und Gen 2,24 als *eine* Lehre über die Ehe – also als theologische Einheit, nicht als widerstreitende Quellen. Über Verfasserfragen hat er sich nicht geäußert. Ob man seine Auslegung als bloße Zeitgebundenheit abtun darf, hängt allerdings davon ab, wer Jesus ist. Für die Kirche ist er der menschgewordene Logos, durch den die Welt geschaffen wurde – und das ist eine eigene Debatte, die wir gern führen können.`,
              detail: `**Zwei Ebenen trennen:**
1. **Historisch-literarisch:** Schon im ersten Jahrhundert wurden Genesis 1 und 2 als zusammengehörige Schrift gelesen – das belegt Jesu Argument unabhängig davon, wie man seine Person beurteilt.
2. **Christologisch:** Die Frage, ob Jesus sich in seinem Schriftgebrauch einfach den Annahmen seiner Zeit „anpasste", hängt am Verständnis seiner Person. Die koptische Kirche bekennt mit dem hl. Kyrill, dass der Logos selbst Mensch wurde – ohne Vermischung und ohne Trennung. Der, der Genesis auslegt, ist nach christlichem Glauben der, von dem Genesis spricht (Joh 1,1–3).

**Für das Gespräch:** Bleib zunächst auf Ebene 1. Wenn dein Gegenüber auf Ebene 2 wechselt, sag offen: „Jetzt sprechen wir über die Gottheit Christi – gern, aber das ist eine andere Frage als die nach Genesis 1 und 2."`,
              sources: [
                mt194,
                { kind: 'bibel', work: 'Johannes', ref: '1,3', quote: `Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Unabhängig davon, wer Jesus war: Lasen Juden des ersten Jahrhunderts Genesis 1 und 2 als widersprüchliche Quellen oder als eine Schrift?`],
            },
          ],
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
