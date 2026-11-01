import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kein-objektiver-sinn',
  title: `„Das Leben hat keinen objektiven Sinn – wir geben ihm selbst Sinn."`,
  proponents: [
    {
      name: 'Jean-Paul Sartre',
      role: 'Philosoph und Schriftsteller, Begründer des französischen Existenzialismus (1905–1980)',
      work: 'Der Existentialismus ist ein Humanismus (1946); Das Sein und das Nichts (1943)',
    },
    {
      name: 'Albert Camus',
      role: 'Schriftsteller und Philosoph, Literaturnobelpreis 1957 (1913–1960)',
      work: 'Der Mythos des Sisyphos (1942)',
    },
    {
      name: 'Bertrand Russell',
      role: 'Philosoph, Mathematiker, Literaturnobelpreis 1950 (1872–1970)',
      work: 'A Free Man\'s Worship (1903)',
    },
    {
      name: 'Sean Carroll',
      role: 'Theoretischer Physiker, „poetischer Naturalismus"',
      work: 'The Big Picture: On the Origins of Life, Meaning, and the Universe Itself (2016)',
    },
    {
      name: 'Richard Dawkins',
      role: 'Evolutionsbiologe, Oxford',
      work: 'River Out of Eden (1995), Kap. 4',
    },
  ],
  steelman: `Die Wissenschaft hat uns nirgends einen „Sinn des Universums" gezeigt. Dawkins bringt es auf den Punkt: Das Universum hat genau die Eigenschaften, die man erwarten würde, wenn es im Grunde keinen Plan, keinen Zweck, kein Gut und kein Böse gibt – nur blinde, erbarmungslose Gleichgültigkeit. Doch daraus folgt keine Verzweiflung, sondern Freiheit. Sartre: Beim Menschen geht die Existenz der Essenz voraus – wir sind nicht wie ein Brieföffner für einen Zweck gemacht, sondern entwerfen uns selbst. Sinn wird nicht gefunden, sondern geschaffen: in der Liebe zu unseren Kindern, in Musik, Forschung, Freundschaft, Gerechtigkeit. Dieser Sinn ist für uns vollkommen real. Ein von Gott verordneter Sinn wäre dagegen entwürdigend – dann wären wir Werkzeuge eines fremden Plans, wie ein Hammer. Und er löst nichts: Woher bekommt Gottes Plan seinen Sinn? Entweder kann Sinn in sich selbst begründet sein – dann auch bei uns – oder es droht ein endloser Regress. Camus hat gezeigt, wie man ehrlich lebt: Man nimmt das Absurde an, revoltiert, liebt das Leben – „man muss sich Sisyphos als glücklichen Menschen vorstellen".`,
  biblical: {
    summary: `Die Bibel hat das stärkste Buch über die Sinnlosigkeit selbst im Kanon: den Prediger (Kohelet). „Es ist alles ganz eitel" (Pred 1,2) – hebräisch *hevel*, Hauch, Dunst. Kohelet macht das Experiment, Sinn selbst zu schaffen – durch Lust, Besitz, Bauprojekte, Weisheit (Pred 2,1–11) – und kommt zu dem Ergebnis: „Darum verdroß mich zu leben" (Pred 2,17). Entscheidend ist die wiederkehrende Formel **„unter der Sonne"**: Ohne den Blick über die Sonne hinaus ist das Leben tatsächlich Hauch. Zugleich sagt Kohelet, Gott habe dem Menschen „die Ewigkeit ins Herz gelegt" (Pred 3,11, hebr. *ʿolam*) – eine Sehnsucht, die nichts unter der Sonne stillt.`,
    detail: `- **Der Prediger nimmt Camus vorweg:** Er beschreibt den Kreislauf der Natur (Pred 1,4–7), das Vergessenwerden (1,11), den gleichen Tod für Weise und Narren (2,14–16). Die Bibel verschweigt das Absurde nicht.
- **Pred 3,11:** Der hebräische Text spricht davon, dass Gott *ha-ʿolam* („die Ewigkeit" bzw. „die ferne Zeit") ins Herz der Menschen gelegt hat, ohne dass sie Gottes Werk von Anfang bis Ende ergründen können. Luther 1912 übersetzt die Stelle anders („läßt ihr Herz sich ängsten"); die meisten modernen Übersetzungen lesen „Ewigkeit".
- **Die Auflösung:** „Fürchte Gott und halte seine Gebote; denn das gehört allen Menschen zu" (Pred 12,13). Sinn liegt in der Beziehung zum Schöpfer.
- **Neues Testament:** Alles ist „durch ihn und zu ihm geschaffen" (Kol 1,16) – Christus ist Ursprung *und Ziel*. Jesus verspricht „das Leben und volle Genüge" (Joh 10,10), und das ewige Leben besteht darin, Gott zu erkennen (Joh 17,3). Paulus sagt den Epikureern auf dem Areopag, Gott habe die Menschen geschaffen, „daß sie den Herrn suchen sollten" (Apg 17,27).
- **Sinn ist Gabe, nicht Zwang:** Der Mensch ist nicht Werkzeug, sondern Ebenbild (Gen 1,26–27) und zur Gemeinschaft berufen (1 Joh 1,3).`,
    sources: [
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '1,2', quote: `Es ist alles ganz eitel, sprach der Prediger, es ist alles ganz eitel.`, translation: 'Luther 1912', status: 'verbatim', original: `הֲבֵל הֲבָלִים אָמַר קֹהֶלֶת הֲבֵל הֲבָלִים הַכֹּל הָבֶל`, note: 'Hebr. hevel = Hauch, Dunst, Vergänglichkeit.' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '2,17', quote: `Darum verdroß mich zu leben; denn es gefiel mir übel, was unter der Sonne geschieht, daß alles eitel ist und Haschen nach dem Wind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '3,11', quote: `Gott hat alles schön gemacht zu seiner Zeit, auch die Ewigkeit hat er in ihr Herz gelegt – nur dass der Mensch das Werk Gottes nicht von Anfang bis Ende ergründen kann.`, status: 'paraphrase', original: `גַּם אֶת־הָעֹלָם נָתַן בְּלִבָּם`, note: 'Hebr. ha-ʿolam; Luther 1912 übersetzt abweichend.' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '12,13', quote: `Laßt uns die Hauptsumme aller Lehre hören: Fürchte Gott und halte seine Gebote; denn das gehört allen Menschen zu.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,16', quote: `… es ist alles durch ihn und zu ihm geschaffen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '17,3', quote: `Das ist aber das ewige Leben, daß sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesum Christum, erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die Väter ist der Sinn des Menschen nicht ein Auftrag von außen, sondern die Erfüllung seines Wesens: Er ist nach Gottes Bild geschaffen, um Gott zu erkennen und in Gemeinschaft mit ihm zu leben – bis zur Vergöttlichung (*theosis*). Athanasius: Der Logos „wurde Mensch, damit wir vergöttlicht würden" (De Incarnatione 54). Augustinus fasst die Erfahrung der Unruhe in den berühmten Satz: „Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir" (Bekenntnisse I,1). Die koptische Liturgie des hl. Gregor bekennt, dass Gott den Menschen nicht aus Bedürftigkeit schuf, sondern aus Menschenliebe – nicht Gott brauchte unseren Dienst, sondern wir brauchen seine Herrschaft.`,
    detail: `- **Athanasius** (De Incarnatione 3–4; Contra Gentes 2): Gott schuf den Menschen aus dem Nichts und gab ihm Anteil an seinem Logos, damit er in der Erkenntnis Gottes glückselig lebe. Die Abwendung von Gott führt zurück ins Nichts – Verderbnis und Tod.
- **Die Gregorius-Liturgie** (in der koptischen Kirche gefeiert) betont: Gott erschuf den Menschen als Liebender; er bedurfte unseres Dienstes nicht. Sinn ist also nicht Instrumentalisierung, sondern geschenkte Gemeinschaft.
- **Theosis:** Ziel des Lebens ist nicht bloß moralische Pflichterfüllung, sondern Teilhabe an Gottes Leben (2 Petr 1,4) – durch Sakramente, Gebet, Liebe. Das ist ein Sinn, der jeden menschlichen Entwurf übersteigt, ohne ihn auszulöschen: Liebe, Arbeit, Kunst werden darin aufgenommen und vollendet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'I,1', year: 'ca. 397–401', quote: `Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir.`, original: `fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '54,3', year: 'ca. 318–335', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'liturgie', work: 'Anaphora des hl. Gregor des Theologen (koptische Gregorius-Liturgie)', quote: `Du hast mich als Mensch erschaffen als Menschenliebender; du bedurftest nicht meines Dienstes, sondern ich bedarf deiner Herrschaft.`, status: 'paraphrase', note: 'Sinngemäß nach dem arabischen/koptischen Text; Wortlaut je nach Übersetzung verschieden.' },
    ],
  },
  opposingView: {
    summary: `Die Philosophie des Lebenssinns unterscheidet heute vor allem drei Positionen: **Supernaturalismus** (Sinn hängt an Gott und Unsterblichkeit), **Naturalismus** in zwei Varianten – subjektivistisch (Sinn ist, was jemand zutiefst will; Sartre, Richard Taylor) und objektivistisch (Sinn entsteht, wo subjektive Hingabe auf objektiv Wertvolles trifft; Susan Wolf) – sowie **Nihilismus** (Camus' Absurdes in radikaler Form, Alex Rosenberg). Auffällig ist: Die meisten säkularen Philosophen lehnen den reinen Subjektivismus ab, weil er absurde Lebensentwürfe (etwa das lebenslange Zählen von Grashalmen) gleich sinnvoll machen würde. Damit räumen sie objektive Maßstäbe ein – deren Grundlage im Naturalismus aber umstritten ist.`,
    detail: `- **Susan Wolf** (*Meaning in Life and Why It Matters*, 2010): Sinn entsteht, „wenn subjektive Anziehung auf objektive Anziehungskraft trifft". Sie ist keine Theistin – ihr Zugeständnis objektiver Werte ist daher bemerkenswert.
- **Empirisch:** Erlebter Lebenssinn hängt mit Gesundheit und Lebensdauer zusammen; regelmäßiger Gottesdienstbesuch geht in großen Langzeitstudien mit weniger Depression und Suizid einher (VanderWeele u. a.). Das beweist nicht die Wahrheit des Glaubens, widerlegt aber die These, Religion sei eine schädliche Illusion.
- **Ehrlich:** Viele Atheisten führen ein erfülltes, sinnvolles Leben. Die Frage ist nicht, ob sie *subjektiv* Sinn erleben, sondern ob ihr Weltbild diesen Sinn *begründen* kann.`,
    sources: [
      { kind: 'fachliteratur', author: 'Susan Wolf', work: 'Meaning in Life and Why It Matters', year: '2010', quote: `Sinn entsteht, wenn subjektive Anziehung auf objektive Anziehungskraft trifft.`, status: 'paraphrase', note: 'Säkulare Philosophin – sie lehnt reinen Subjektivismus ab.' },
      { kind: 'fachliteratur', author: 'John Rawls', work: 'A Theory of Justice', ref: '§ 65', year: '1971', quote: `Gedankenexperiment eines hochintelligenten Menschen, dessen einzige Freude es ist, Grashalme auf Rasenflächen zu zählen.`, status: 'paraphrase', note: 'Das Beispiel wird in der Sinn-Debatte oft gegen reinen Subjektivismus verwendet.' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'River Out of Eden', ref: 'Kap. 4', year: '1995', quote: `Das Universum, das wir beobachten, hat genau die Eigenschaften, die wir erwarten sollten, wenn es im Grunde keinen Plan, keinen Zweck, kein Böses, kein Gutes gibt – nichts als blinde, erbarmungslose Gleichgültigkeit.`, original: `The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil, no good, nothing but blind, pitiless indifference.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Shanshan Li, Meir J. Stampfer, David R. Williams, Tyler J. VanderWeele', work: 'Association of Religious Service Attendance With Mortality Among Women', ref: 'JAMA Internal Medicine 176 (6)', year: '2016', quote: `Häufiger Gottesdienstbesuch war in der Nurses' Health Study mit deutlich geringerer Sterblichkeit verbunden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich stimme dir zu, dass Liebe, Freundschaft und Arbeit dein Leben mit Sinn füllen – das sind Gaben Gottes. Aber sind sie sinnvoll, *weil du es entscheidest*, oder weil sie *wirklich wertvoll* sind? Wenn nur deine Entscheidung zählt, wäre ein Leben mit Grashalmezählen genauso sinnvoll wie ein Leben für deine Kinder. Das glaubst du selbst nicht. Du lebst, als gäbe es echten Wert – ich glaube, es gibt ihn, weil es einen Gott gibt, der das Gute selbst ist und uns zu sich hin geschaffen hat.`,
  keyPoints: [
    `**Selbstgesetzter Sinn ist willkürlich:** Wenn Sinn nur aus meiner Entscheidung kommt, ist jeder Lebensentwurf gleich sinnvoll – auch triviale oder grausame. Fast niemand glaubt das wirklich.`,
    `**Säkulare Philosophen geben das zu:** Susan Wolf und andere verlangen objektiv Wertvolles für echten Sinn – aber woher kommt objektiver Wert in einem Universum „blinder, erbarmungsloser Gleichgültigkeit" (Dawkins)?`,
    `**Der Prediger kannte das Absurde vor Camus:** „Unter der Sonne" ist alles Hauch (Pred 1,2). Die Bibel verschweigt die Leere nicht, sie zeigt den Blick über die Sonne hinaus.`,
    `**Die Sehnsucht ist ein Hinweis:** Augustinus' „unruhiges Herz" und Kohelets „Ewigkeit im Herzen" beschreiben eine Sehnsucht, die nichts Endliches stillt. Natürliche Sehnsüchte entsprechen gewöhnlich realen Gegenständen (C. S. Lewis).`,
    `**Gottes Sinn ist keine Instrumentalisierung:** Gott braucht uns nicht – er erschuf uns aus Liebe zur Gemeinschaft (Gregorius-Liturgie). Sinn heißt, zu werden, wozu man geschaffen ist: Freund Gottes.`,
    `**Konsequenter Atheismus führt zur Verzweiflung – sagt Russell selbst:** Er wollte die Seele auf das „feste Fundament unnachgiebiger Verzweiflung" bauen. Wer das ablehnt, lebt von geliehenem Sinn.`,
  ],
  argument: {
    name: 'Das Dilemma des selbstgesetzten Sinns',
    summary: 'Warum „Wir geben dem Leben selbst Sinn" entweder beliebig wird oder objektive Werte voraussetzt.',
    premises: [
      {
        text: `P1: Wenn Sinn ausschließlich selbst gesetzt ist, dann ist jeder ernsthaft gewählte Lebensentwurf gleich sinnvoll.`,
        support: `Das folgt aus der Definition: Gibt es keinen Maßstab außerhalb der Wahl, kann keine Wahl besser oder schlechter sein. Sartre selbst sah das: Der Mensch ist „zur Freiheit verurteilt" und ohne vorgegebene Werte.`,
      },
      {
        text: `P2: Nicht jeder ernsthaft gewählte Lebensentwurf ist gleich sinnvoll – ein Leben für Kranke und Kinder ist sinnvoller als ein Leben des Grashalmezählens oder der Grausamkeit.`,
        support: `Das ist eine der stärksten Intuitionen überhaupt. Auch säkulare Philosophen wie Susan Wolf halten an ihr fest und lehnen deshalb den reinen Subjektivismus ab.`,
        sources: [
          { kind: 'fachliteratur', author: 'Susan Wolf', work: 'Meaning in Life and Why It Matters', year: '2010', quote: `Ein Leben ist nicht schon dadurch sinnvoll, dass jemand es als befriedigend erlebt; es muss sich auf etwas richten, das tatsächlich wertvoll ist.`, status: 'paraphrase' },
        ],
      },
      {
        text: `P3: Also gibt es objektive Maßstäbe dafür, was ein Leben sinnvoll macht.`,
        support: `Folgt aus P1 und P2 (Modus tollens).`,
      },
      {
        text: `P4: Objektive Werte und ein Ziel des Menschen lassen sich in einem Universum ohne Plan und Zweck schwer begründen; im christlichen Theismus haben sie eine Grundlage: Gott ist das Gute selbst, und der Mensch ist auf ihn hin geschaffen.`,
        support: `Dawkins selbst beschreibt das naturalistische Universum als ohne Gut und Böse. Wer objektive Werte als „nackte Tatsachen" annimmt (Wielenberg), muss erklären, wie sie in eine rein materielle Welt passen und warum unser evolviertes Gehirn sie erkennt.`,
      },
    ],
    conclusion: `Wer „wir geben dem Leben selbst Sinn" sagt und zugleich überzeugt ist, dass manche Leben wirklich sinnvoller sind als andere, setzt objektive Werte voraus. Diese passen besser zu einer Welt, die von einem guten Gott auf ein Ziel hin geschaffen ist, als zu blinder Gleichgültigkeit.`,
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph der Sehnsucht',
      text: `Augustinus hat in den *Bekenntnissen* seine eigene Sinnsuche beschrieben: Erfolg als Rhetoriklehrer, Liebe, Philosophie, Freundschaft – alles echt, alles schön, und doch blieb eine Unruhe. Sein berühmter Eröffnungssatz ist keine fromme Floskel, sondern eine philosophische Diagnose: Das menschliche Herz ist so gebaut, dass kein endliches Gut es letztlich stillt. Für Augustinus ist das kein Mangel, sondern eine Spur – die Unruhe weist auf das hin, wozu wir geschaffen sind. Endliche Güter sind nicht schlecht; sie werden erst dann zur Last, wenn wir von ihnen verlangen, was nur Gott geben kann.`,
    },
    {
      person: 'pascal',
      role: 'als Mathematiker und Analytiker der menschlichen Lage',
      text: `Blaise Pascal beobachtet in den *Pensées*, dass Menschen kaum allein in einem Zimmer still sitzen können: Sie flüchten in Zerstreuung (*divertissement*) – Spiel, Jagd, Arbeit, Unterhaltung –, um nicht über ihre Lage nachdenken zu müssen. Hinter dieser Flucht sieht Pascal einen „unendlichen Abgrund" im Menschen, der nur durch ein unendliches und unwandelbares Objekt ausgefüllt werden kann, das heißt durch Gott selbst. Pascal kannte auch das Erschrecken des modernen Menschen: „Das ewige Schweigen dieser unendlichen Räume macht mir Angst." Er nimmt die Erfahrung des Absurden ernst – und deutet sie als Hinweis, nicht als Endpunkt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 139 (Brunschvicg) / 136 (Lafuma)', year: 'postum 1670', quote: `Das ganze Unglück der Menschen kommt aus einer einzigen Sache: dass sie nicht ruhig in einem Zimmer bleiben können.`, original: `… tout le malheur des hommes vient d'une seule chose, qui est de ne savoir pas demeurer en repos dans une chambre.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 206 (Brunschvicg) / 201 (Lafuma)', year: 'postum 1670', quote: `Das ewige Schweigen dieser unendlichen Räume macht mir Angst.`, original: `Le silence éternel de ces espaces infinis m'effraie.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées', ref: 'Fragment 425 (Brunschvicg) / 148 (Lafuma)', year: 'postum 1670', quote: `Dieser unendliche Abgrund kann nur durch ein unendliches und unwandelbares Objekt ausgefüllt werden, das heißt durch Gott selbst.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kierkegaard',
      role: 'als Philosoph der Existenz und der Verzweiflung',
      text: `Søren Kierkegaard – oft als Vater des Existenzialismus bezeichnet – teilte mit Sartre die Überzeugung, dass der Mensch sich nicht wie ein Ding vorfindet, sondern sich wählen muss. Doch in *Die Krankheit zum Tode* (1849) zeigt er, dass das Selbst, das sich nur auf sich selbst gründen will, in Verzweiflung gerät: entweder verzweifelt es daran, es selbst sein zu wollen, oder daran, nicht es selbst sein zu wollen. Erst wenn das Selbst sich „durchsichtig gründet in der Macht, die es setzte", ist die Verzweiflung überwunden. Der Mensch ist kein Selbstschöpfer; er findet sich, indem er sich von Gott empfängt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Die Krankheit zum Tode', year: '1849', quote: `Das Selbst wird von der Verzweiflung nur frei, wenn es sich, indem es sich zu sich selbst verhält und es selbst sein will, durchsichtig in der Macht gründet, die es gesetzt hat.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet der Sehnsucht',
      text: `C. S. Lewis nennt die Sehnsucht, die nichts in dieser Welt erfüllt, einen der stärksten Hinweise auf Gott. Geschöpfe werden nicht mit Wünschen geboren, für die es keine Erfüllung gibt: Hunger entspricht Nahrung, Durst Wasser. Wenn ich in mir eine Sehnsucht finde, die keine Erfahrung dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt geschaffen bin. Lewis betont: Die irdischen Freuden sind nicht falsch, sondern „Abbilder" – Wegweiser, die man nicht mit dem Ziel verwechseln darf.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch III, Kap. 10 („Hope")', year: '1952', quote: `Wenn ich in mir ein Verlangen finde, das keine Erfahrung in dieser Welt befriedigen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt geschaffen wurde.`, original: `If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung und Vergöttlichung',
      text: `Athanasius erklärt in *De Incarnatione*, dass Gott den Menschen nicht einfach wie die übrigen Lebewesen schuf, sondern ihm Anteil an seinem eigenen Logos gab, damit er in der Erkenntnis Gottes das wahre, glückselige Leben führe. Der Sinn des Menschen ist also keine äußere Funktion, sondern Teilhabe. Indem der Mensch sich von Gott abwandte, fiel er zurück in Verderbnis und Nichtigkeit – Kohelets „Hauch" ist genau dieser Zustand. Die Menschwerdung des Logos stellt den ursprünglichen Sinn wieder her und übersteigt ihn: Er wurde Mensch, damit wir vergöttlicht würden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '3–4', year: 'ca. 318–335', quote: `Gott schuf den Menschen nach seinem Bild und gab ihm Anteil an der Kraft seines Logos, damit er, im Besitz dieses Abbilds, im Paradies das wahre Leben der Heiligen führe.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'sinn-selbst-geben',
      objection: `Ich brauche keinen Gott für Sinn. Meine Kinder, meine Frau, meine Forschung, Musik – das erfüllt mein Leben. Sinn wird nicht gefunden, sondern gemacht. Und dieser Sinn ist für mich vollkommen real.`,
      objectionBy: 'Sean Carroll',
      answer: `Ich glaube dir, dass dein Leben erfüllt ist – und Christen erleben dieselben Dinge als Gaben Gottes. Die Frage ist: Sind deine Kinder wertvoll, *weil du es entscheidest*, oder entdeckst du einen Wert, der schon da ist? Wenn nur deine Entscheidung zählt, wäre ein Leben des Grashalmezählens genauso sinnvoll. Wenn nicht, dann gibt es objektiven Wert – und den muss dein Weltbild erklären.`,
      detail: `Das ist die Kernfrage der Debatte. Carrolls „poetischer Naturalismus" sagt, Bedeutung sei eine nützliche Beschreibungsebene, wie „Temperatur" – real, aber nicht fundamental. Gut, dann aber: Ist es auf dieser Ebene *wahr*, dass ein Leben für die eigenen Kinder sinnvoller ist als Grashalmezählen – oder nur *gefühlt*? Wenn wahr: Was macht es wahr? Wenn nur gefühlt: Dann ist dein Sinn eine Vorliebe wie die für Schokolade. Die meisten Menschen spüren, dass das zu wenig ist.`,
      questionsBack: [
        `Wäre das Leben eines Menschen, der sich ernsthaft entscheidet, sein Leben dem Zählen von Grashalmen zu widmen, genauso sinnvoll wie deins? Wenn nein – woran misst du das?`,
        `Ist der Wert deiner Kinder etwas, das du ihnen gibst, oder etwas, das du an ihnen erkennst?`,
      ],
      followUps: [
        {
          id: 'objektiver-wert-ohne-gott',
          objection: `Dann gibt es eben objektive Werte ohne Gott. Liebe und Leidminderung sind gut an sich – eine grundlegende ethische Tatsache, die keine weitere Begründung braucht. Ein Gott fügt nichts hinzu.`,
          objectionBy: 'Erik Wielenberg / Susan Wolf',
          answer: `Damit hast du mir den wichtigsten Punkt zugestanden: Sinn ist nicht bloß selbst gemacht. Jetzt stellt sich die Frage, wie solche Werte in ein Universum ohne Plan und Zweck passen – Dawkins sagt ja, darin gebe es weder Gut noch Böse. Und warum sollte ein Gehirn, das für das Überleben geformt wurde, ausgerechnet „nackte" Werttatsachen erkennen? Im Theismus ist das Gute in Gott verankert, und wir sind nach seinem Bild geschaffen, um es zu erkennen.`,
          detail: `Wielenbergs *Value and Virtue in a Godless Universe* (2005) ist die beste säkulare Verteidigung objektiver Werte. Sie verdient Respekt. Aber sie nimmt Werte als unerklärte Grundtatsachen an – in einem Weltbild, das sonst alles naturwissenschaftlich erklären will. Mehr dazu im Themenblock „Moral ohne Gott?". Für die Sinnfrage kommt hinzu: Selbst wenn es objektive Werte gibt, bleibt die Frage nach einem *letzten* Sinn – wozu existiert der Mensch überhaupt, und hat irgendetwas bleibenden Bestand?`,
          sources: [
            { kind: 'fachliteratur', author: 'Erik J. Wielenberg', work: 'Value and Virtue in a Godless Universe', year: '2005', quote: `Ethische Grundtatsachen bestehen notwendig und bedürfen keiner Begründung in Gott.`, status: 'paraphrase', note: 'Stärkste säkulare Position – fair darstellen.' },
          ],
          followUps: [
            {
              id: 'waermetod-egal',
              objection: `Dass das Universum in 10 hoch 100 Jahren im Wärmetod endet, macht mein Leben heute nicht sinnlos. Ein Konzert ist nicht sinnlos, weil es endet.`,
              objectionBy: 'Sean Carroll / Thomas Nagel',
              answer: `Zugestanden: Endliche Güter sind echte Güter, ein Konzert ist schön, auch wenn es endet. Aber ein Konzert hat Sinn auch darum, weil es Menschen verändert, die sich erinnern und weitergeben. Wenn am Ende jede Erinnerung, jede Person, jede Spur für immer erlischt, hat das Gute keinen Ort mehr, an dem es bleibt. Der Prediger sagt: „Man gedenkt nicht derer, die zuvor gewesen sind." Paulus dagegen: „eure Arbeit ist nicht vergeblich in dem HERRN."`,
              detail: `Hier ist Ehrlichkeit wichtig: Christen sollten nicht behaupten, ohne Gott sei *alles* sinnlos – die Freude über ein Lächeln ist auch für einen Atheisten echt. Der Punkt ist feiner: Ohne Gott gibt es keinen *letzten* Sinn, keine Gewähr, dass Liebe und Gerechtigkeit Bestand haben. Christliche Hoffnung sagt: Nichts, was in Liebe getan wurde, geht verloren, weil der lebendige Gott es bewahrt und in der Auferstehung vollendet.`,
              sources: [
                { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '1,11', quote: `Man gedenkt nicht derer, die zuvor gewesen sind; also auch derer, so hernach kommen, wird man nicht gedenken bei denen, die darnach sein werden.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '1. Korinther', ref: '15,58', quote: `Darum, meine lieben Brüder, seid fest, unbeweglich, und nehmet immer zu in dem Werk des HERRN, sintemal ihr wisset, daß eure Arbeit nicht vergeblich ist in dem HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'wunschdenken-sinn',
                  objection: `Du willst eben einen bleibenden Sinn. Aber dass du dir etwas wünschst, macht es nicht wahr. Das ist Wunschdenken.`,
                  objectionBy: 'Bertrand Russell / Sigmund Freud',
                  answer: `Richtig – Wünschen macht nichts wahr. Ich argumentiere auch nicht „ich will es, also ist es so". Ich sage zweierlei: Erstens, der ehrliche Atheist muss die Konsequenzen tragen, wie Russell es tat, als er die Seele auf „unnachgiebige Verzweiflung" bauen wollte – statt sich Sinn zu borgen. Zweitens ist die Sehnsucht selbst ein Datum, das erklärt werden muss. Und Wunschdenken gibt es in beide Richtungen: Mancher wünscht sich, dass es keinen Gott gibt, dem er verantwortlich ist.`,
                  detail: `Thomas Nagel hat offen eingestanden, dass er wünscht, der Atheismus sei wahr („I want atheism to be true"; *The Last Word*, 1997, S. 130–131). Wer Wunschdenken als Argument gegen den Glauben verwendet, muss es auch auf den Unglauben anwenden – und dann heben sich beide Vorwürfe auf. Entscheidend sind die Gründe. Ausführlich im Themenblock Religionskritik (Freud, Feuerbach).`,
                  sources: [
                    { kind: 'gegner', author: 'Bertrand Russell', work: 'A Free Man\'s Worship', year: '1903', quote: `… nur im Gerüst dieser Wahrheiten, nur auf dem festen Fundament unnachgiebiger Verzweiflung kann die Behausung der Seele fortan sicher gebaut werden.`, original: `… only within the scaffolding of these truths, only on the firm foundation of unyielding despair, can the soul's habitation henceforth be safely built.`, translation: 'eigene Übersetzung', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'gottgegebener-sinn-entwuerdigend',
          objection: `Ein von Gott verordneter Sinn wäre entwürdigend. Dann wäre ich ein Werkzeug für fremde Zwecke – wie ein Hammer. Gerade dass wir uns selbst entwerfen, macht unsere Würde aus.`,
          objectionBy: 'Kurt Baier / Jean-Paul Sartre',
          answer: `Es gibt einen Unterschied zwischen *benutzt* und *geliebt* werden. Ein Hammer existiert für den Zweck eines anderen. Ein Kind existiert nicht, damit die Eltern etwas davon haben – sein „Sinn" ist, geliebt zu werden und lieben zu lernen. So versteht die koptische Liturgie die Schöpfung: Gott brauchte unseren Dienst nicht, er schuf uns aus Liebe zur Gemeinschaft. Das ist nicht Instrumentalisierung, sondern die höchste denkbare Würde.`,
          detail: `Kurt Baier (*The Meaning of Life*, 1957) argumentierte, dass ein Sinn, der uns von einem Schöpfer zugewiesen wird, uns zu Artefakten degradiert. Der Einwand trifft ein Bild von Gott als Fabrikant, nicht den Gott der Bibel, der den Menschen zu seinem Ebenbild und Freund beruft (Joh 15,15: „Ich sage hinfort nicht, daß ihr Knechte seid … Euch aber habe ich gesagt, daß ihr Freunde seid"). Und der christliche Sinn lässt Raum für die Freiheit: Gott beruft, er zwingt nicht.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '15,15', quote: `Ich sage hinfort nicht, daß ihr Knechte seid; denn ein Knecht weiß nicht, was sein Herr tut. Euch aber habe ich gesagt, daß ihr Freunde seid.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'regress-gottes-sinn',
              objection: `Und woher bekommt Gottes Plan seinen Sinn? Entweder kann etwas in sich selbst sinnvoll sein – dann kann ich das auch –, oder du landest in einem endlosen Regress.`,
              objectionBy: 'Philosophischer Kritiker (z. B. Thaddeus Metz referiert diesen Einwand)',
              answer: `Irgendetwas muss in sich selbst wertvoll sein, da hast du recht. Die Frage ist nur, *was*: ein endliches, vergängliches Wesen wie ich, das morgen sterben kann – oder das ewige, vollkommene Gute selbst. Gott braucht keinen weiteren Zweck, weil er nicht ein Gut unter anderen ist, sondern die Quelle allen Gutseins. Mein Leben ist sinnvoll, weil es auf ihn hin ausgerichtet ist; seins ist es, weil er die Fülle ist.`,
              detail: `Der Regress endet also nicht willkürlich, sondern dort, wo er enden muss: beim Unbedingten. Das ist dieselbe Logik wie beim kosmologischen Argument. Der Mensch kann nicht sein eigener Endzweck sein, weil er nicht die Fülle in sich trägt – sonst gäbe es das „unruhige Herz" nicht.`,
            },
          ],
        },
      ],
    },
    {
      id: 'sisyphos-gluecklich',
      objection: `Camus hat es ehrlich gesagt: Wir sehnen uns nach Sinn, und das Universum schweigt. Das ist das Absurde. Die Antwort ist weder Selbstmord noch der „philosophische Selbstmord" der Religion, sondern Revolte. Man muss sich Sisyphos als glücklichen Menschen vorstellen.`,
      objectionBy: 'Albert Camus',
      answer: `Camus ist ehrlicher als viele: Er gibt zu, dass die Sehnsucht nach Sinn real ist und dass ein Universum ohne Gott darauf schweigt. Damit bestätigt er die Diagnose von Augustinus und Pascal. Aber seine Revolte hat keinen Boden: Wenn nichts Sinn hat, hat auch die Revolte keinen. „Man muss sich Sisyphos glücklich *vorstellen*" – das ist kein Grund, sondern eine heroische Pose. Ich frage lieber: Warum gibt es die Sehnsucht überhaupt?`,
      detail: `*Der Mythos des Sisyphos* beginnt mit dem Satz: „Es gibt nur ein wirklich ernstes philosophisches Problem: den Selbstmord." Camus nimmt die Frage nach dem Sinn so ernst, wie sie es verdient. Er weist den Glauben als Flucht zurück – aber gerade sein Werk zeigt, wie schwer es ist, ohne Grund weiterzuleben. **Pastoraler Hinweis:** Wenn dein Gesprächspartner nicht theoretisch, sondern persönlich mit Sinnlosigkeit oder Suizidgedanken ringt, ist jetzt nicht die Zeit für Argumente, sondern für Zuwendung, Zuhören und gegebenenfalls professionelle Hilfe (Telefonseelsorge: Deutschland 0800 111 0 111, Österreich 142, Schweiz 143).`,
      sources: [
        { kind: 'gegner', author: 'Albert Camus', work: 'Der Mythos des Sisyphos (Le Mythe de Sisyphe)', year: '1942', quote: `Es gibt nur ein wirklich ernstes philosophisches Problem: den Selbstmord.`, original: `Il n'y a qu'un problème philosophique vraiment sérieux : c'est le suicide.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'gegner', author: 'Albert Camus', work: 'Der Mythos des Sisyphos', year: '1942', quote: `Man muss sich Sisyphos als glücklichen Menschen vorstellen.`, original: `Il faut imaginer Sisyphe heureux.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      questionsBack: [
        `Wenn das Universum schweigt – woher kommt dann die Sehnsucht nach Sinn, die Camus so eindringlich beschreibt?`,
        `Warum sollte Revolte sinnvoller sein als Resignation, wenn es keinen Sinn gibt?`,
      ],
      followUps: [
        {
          id: 'sehnsucht-beweist-nichts',
          objection: `Eine Sehnsucht beweist nichts. Ich sehne mich auch nach einem Einhorn oder nach einem Lottogewinn. Das macht sie nicht real.`,
          objectionBy: 'Skeptischer Einwand',
          answer: `Das ist ein Unterschied zwischen einem *Wunsch* und einer *natürlichen Sehnsucht*. Nach Einhörnern sehnt man sich, weil man von ihnen gehört hat; das ist erlernt und individuell. Hunger, Durst, das Bedürfnis nach Gemeinschaft sind natürlich und allgemein – und ihnen entspricht jeweils etwas Reales. Die Sehnsucht nach einem Sinn, den nichts Endliches stillt, findet sich in allen Kulturen und Zeiten. Das ist kein Beweis, aber ein starker Hinweis.`,
          detail: `So argumentiert C. S. Lewis (*Mere Christianity* III,10). Die Bibel kennt dieselbe Struktur: „Wie der Hirsch schreit nach frischem Wasser, so schreit meine Seele, Gott, zu dir" (Ps 42,2). Wichtig: Das Argument aus der Sehnsucht ist ein Indizienargument, kein zwingender Beweis. Es passt in eine Gesamtschau mit anderen Gründen.`,
          sources: [
            { kind: 'bibel', work: 'Psalm', ref: '42,2', quote: `Wie der Hirsch schreit nach frischem Wasser, so schreit meine Seele, Gott, zu dir.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'evolution-erklaert-sehnsucht',
              objection: `Die Evolution erklärt diese Sehnsucht problemlos: Wer immer ein bisschen unzufrieden ist, strebt nach mehr und überlebt besser. Die Unruhe ist ein Anpassungsvorteil, kein Hinweis auf Gott.`,
              objectionBy: 'Evolutionspsychologischer Einwand',
              answer: `Evolution kann erklären, warum wir mit dem Gegebenen unzufrieden sind und nach *mehr* streben – nach mehr Nahrung, Status, Sicherheit. Sie erklärt schlechter, warum wir uns nach etwas sehnen, das *jedes mögliche endliche Gut übersteigt*: nach dem Ewigen, nach vollkommener Gerechtigkeit, nach einer Liebe, die nicht stirbt. Und selbst wenn sie es erklärte: Die Herkunft einer Überzeugung entscheidet nicht über ihre Wahrheit – sonst wäre auch unser Vertrauen in die Mathematik widerlegt.`,
              detail: `Das ist der genetische Fehlschluss (siehe Themenblock Religionskritik). Ein Christ kann ohne Weiteres annehmen, dass Gott die Sehnsucht nach sich durch natürliche Prozesse in den Menschen gelegt hat – Kohelet sagt, Gott habe die Ewigkeit ins Herz gelegt, nicht wie.`,
            },
          ],
        },
        {
          id: 'camus-ehrlicher',
          objection: `Camus war wenigstens ehrlich. Christen flüchten sich in tröstliche Illusionen, statt der Wirklichkeit ins Auge zu sehen.`,
          objectionBy: 'Säkularer Humanist',
          answer: `Camus verdient Respekt – und er hat das Gespräch mit Christen gesucht, statt sie zu verachten. Aber das Christentum schaut der Wirklichkeit nicht weniger ins Auge, sondern mehr: Sein Zentrum ist ein Gekreuzigter. Die Bibel enthält Hiob, den Prediger, die Klagelieder. Der Glaube leugnet das Absurde nicht – er bezweifelt nur, dass es das letzte Wort hat.`,
          detail: `Camus hielt 1946 vor Dominikanern in Paris einen Vortrag („Der Ungläubige und die Christen"), in dem er Christen aufforderte, laut und klar gegen das Böse ihrer Zeit Stellung zu nehmen; er suchte gemeinsame Sache im Kampf gegen das Leid. Das ist ein guter Ausgangspunkt für ein Gespräch: Christen und ehrliche Atheisten teilen den Protest gegen das Böse. Die Frage ist, woher dieser Protest seine Berechtigung nimmt.`,
          sources: [
            { kind: 'gegner', author: 'Albert Camus', work: 'Der Ungläubige und die Christen (L\'incroyant et les chrétiens), Vortrag im Dominikanerkloster Latour-Maubourg', year: '1946', quote: `Camus forderte die Christen auf, klar und unmissverständlich gegen das Böse ihrer Zeit Stellung zu nehmen, und suchte das Gespräch statt der Abgrenzung.`, status: 'paraphrase', note: 'Veröffentlicht in „Actuelles" (1950); Jahresangabe des Vortrags in der Literatur meist 1946/1948.' },
          ],
        },
      ],
    },
    {
      id: 'falscher-trost',
      objection: `Religion bietet tröstlichen Sinn, aber Trost ist kein Wahrheitskriterium. Ein ehrlicher Mensch baut auf Tatsachen, auch wenn sie bitter sind. Russell hatte recht: Wir sind das Produkt von Ursachen, die kein Ziel vor Augen hatten.`,
      objectionBy: 'Bertrand Russell',
      answer: `Einverstanden: Trost ist kein Wahrheitskriterium – in keine Richtung. Ob der Naturalismus wahr ist, entscheidet sich an Gründen, nicht daran, wie bitter er schmeckt. Aber Russell hat ehrlich gezeigt, was folgt, wenn er wahr ist: Verzweiflung als Fundament. Und bemerkenswerterweise hat er in persönlichen Briefen eine Sehnsucht nach „etwas jenseits dessen, was die Welt enthält" beschrieben, die er sein Leben lang nicht loswurde.`,
      detail: `Russells Essay *A Free Man's Worship* (1903) ist eines der eindrucksvollsten Bekenntnisse des naturalistischen Weltbilds. Ein später oft zitierter Brief Russells (an Constance Malleson, um 1916–1918) spricht von einem „schrecklichen Schmerz" im Zentrum seines Wesens, einer Suche nach etwas Verklärtem und Unendlichem, die er „Gott" nennt, ohne es zu finden. Wortlaut und Datum stützen sich auf Sekundärquellen – deshalb vorsichtig zitieren. Die Pointe ist nicht Spott, sondern Mitgefühl: Auch ein großer Denker kann die Sehnsucht nicht abschalten.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: 'A Free Man\'s Worship', year: '1903', quote: `Der Mensch ist das Produkt von Ursachen, die keine Voraussicht auf das Ziel hatten, das sie erreichten.`, original: `… Man is the product of causes which had no prevision of the end they were achieving …`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'gegner', author: 'Bertrand Russell', work: 'Brief an Constance Malleson (Colette O\'Niel)', year: 'um 1916–1918', quote: `Das Zentrum meines Wesens ist immer und ewig ein schrecklicher Schmerz … eine Suche nach etwas jenseits dessen, was die Welt enthält, etwas Verklärtem und Unendlichem.`, status: 'unverified', note: 'Vielfach zitiert (u. a. in Russell-Biografien); per WebSearch im Briefverzeichnis BRACERS (McMaster) nicht eindeutig auffindbar (Stand Nov. 2026) – Datum und Wortlaut weiter offen, nur vorsichtig verwenden.' },
      ],
      followUps: [
        {
          id: 'sinnstudien-egal',
          objection: `Dass religiöse Menschen mehr Sinn erleben und gesünder sind, ist Psychologie, nicht Wahrheit. Auch Placebos wirken.`,
          objectionBy: 'Säkularer Psychologe',
          answer: `Richtig, Nutzen beweist keine Wahrheit. Aber die Daten widerlegen eine verbreitete Behauptung der Religionskritik: dass Glaube eine schädliche Neurose sei. Und eine Weltsicht, in der man sich Glück „vorstellen" muss, während die ehrliche Grundlage Verzweiflung ist, hat nicht automatisch den Anspruch, realistischer zu sein.`,
          detail: `Die Harvard-Forschungsgruppe um Tyler VanderWeele hat in großen Kohortenstudien gezeigt, dass regelmäßiger Gottesdienstbesuch mit geringerer Sterblichkeit, weniger Depression und deutlich weniger Suiziden verbunden ist. Wichtig: Nicht übertreiben – Korrelation ist nicht Kausalität, und es geht um Gemeinschaftspraxis, nicht um bloße Meinung. Siehe auch den Claim „Religion schadet der psychischen Gesundheit".`,
          sources: [
            { kind: 'wissenschaft', author: 'Tyler J. VanderWeele, Shanshan Li u. a.', work: 'Association Between Religious Service Attendance and Lower Suicide Rates Among US Women', ref: 'JAMA Psychiatry 73 (8)', year: '2016', quote: `Frauen, die mindestens einmal wöchentlich einen Gottesdienst besuchten, hatten ein deutlich geringeres Suizidrisiko als Frauen, die nie teilnahmen.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'netter-nihilismus',
              objection: `Ich akzeptiere den Nihilismus voll: kein Sinn, kein Zweck, keine Moral im kosmischen Sinn. Na und? Man kann trotzdem nett sein und das Leben genießen – „netter Nihilismus".`,
              objectionBy: 'Alex Rosenberg',
              answer: `Das ist konsequent – und es zeigt, wie hoch der Preis ist. Rosenberg geht so weit zu sagen, dass im wissenschaftlichen Weltbild nicht einmal unsere Gedanken wirklich „von etwas handeln". Dann handelt aber auch dein Argument von nichts. Ein Weltbild, das die Bedeutung der eigenen Sätze auflösen muss, hat sich selbst widerlegt. Dass du trotzdem nett bist, ehrt dich – aber es folgt nicht aus deinem Weltbild.`,
              detail: `Rosenberg, *The Atheist's Guide to Reality* (2011), ist bemerkenswert ehrlich: Er zieht aus dem Szientismus die Konsequenz, dass es keinen Sinn, keinen freien Willen, kein Selbst und keine echte Intentionalität gibt. Viele Atheisten halten das für zu radikal. Gerade deshalb ist er ein wertvoller Zeuge: Er zeigt, wohin der Weg führt, wenn man ihn zu Ende geht.`,
              sources: [
                { kind: 'gegner', author: 'Alex Rosenberg', work: 'The Atheist\'s Guide to Reality: Enjoying Life without Illusions', year: '2011', quote: `Der Szientismus führt zu einem „netten Nihilismus": kein Sinn, kein Zweck, kein freier Wille – und doch kann man gut leben.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist ein Leben, das ernsthaft dem Grashalmezählen gewidmet ist, genauso sinnvoll wie ein Leben für Kranke? Wenn nein, woran misst du das?`,
    `Ist der Wert deiner Kinder etwas, das du ihnen gibst, oder etwas, das du entdeckst?`,
    `Woher kommt die Sehnsucht nach einem Sinn, den nichts in dieser Welt erfüllt?`,
    `Wenn am Ende alle Erinnerung erlischt – wo bleibt dann das Gute, das du getan hast?`,
    `Lebst du so, als sei Sinn nur deine Vorliebe – oder so, als sei er wirklich?`,
  ],
  avoid: [
    `„Atheisten können kein sinnvolles Leben führen." – Falsch und verletzend. Viele führen ein erfülltes Leben. Die Frage ist, ob ihr Weltbild diesen Sinn *begründen* kann.`,
    `„Ohne Gott würdest du dich umbringen." – Unangemessen und manipulativ, besonders bei einem so ernsten Thema.`,
    `Die Sehnsucht als zwingenden Gottesbeweis ausgeben – sie ist ein Indiz, kein Beweis.`,
  ],
  concessions: [
    `Endliche Güter – Liebe, Freundschaft, Kunst, Erkenntnis – sind auch für Atheisten echte Güter; Christen sollten das anerkennen und sich darüber freuen.`,
    `Der Glaube schützt nicht vor Sinnkrisen; Heilige wie Kohelet, Hiob und viele Väter kannten tiefe Dunkelheit.`,
    `Dass Glaube Sinn stiftet und gesund ist, beweist nicht, dass er wahr ist.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones), Buch I–X', year: 'ca. 397–401', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', year: 'postum 1670', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Søren Kierkegaard', work: 'Die Krankheit zum Tode', year: '1849', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thaddeus Metz', work: 'Meaning in Life', year: '2013', status: 'paraphrase', note: 'Fachphilosophischer Überblick über alle Positionen.' },
    { kind: 'gegner', author: 'Albert Camus', work: 'Der Mythos des Sisyphos', year: '1942', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sinn des Lebens', 'Existenzialismus', 'Camus', 'Sartre', 'Russell', 'Kohelet', 'Sehnsucht', 'Nihilismus'],
  related: [
    'sinn-existenz/tod-ist-das-ende',
    'sinn-existenz/gott-ist-tot-nietzsche',
    'moral-und-gott/gut-ohne-gott',
    'religionskritik/freud-wunscherfuellung',
    'astrobiologie/mensch-unbedeutend',
    'psychologie/religion-schadet-psyche',
  ],
};

export default claim;
