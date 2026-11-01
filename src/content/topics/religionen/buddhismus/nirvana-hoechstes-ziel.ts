import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nirvana-hoechstes-ziel',
  title: `„Nirvana ist das höchste Ziel."`,
  proponents: [
    { name: 'Siddhartha Gautama, der Buddha', role: 'Begründer des Buddhismus', work: 'Dhammapada 203–204; Udana 8' },
    { name: 'Walpola Rahula', role: 'Sri-lankischer Mönch und Gelehrter', work: 'What the Buddha Taught (1959), Kap. 4 über Nirvana' },
    { name: 'Thich Nhat Hanh', role: 'Vietnamesischer Zen-Mönch', work: 'No Death, No Fear (2002)' },
    { name: 'Ajahn Chah', role: 'Thailändischer Meister der Waldtradition (1918–1992)', work: 'Lehrreden (gesammelt u. a. in Food for the Heart)' },
  ],
  steelman: `Nirvana ist das Erlöschen von Gier, Hass und Verblendung (SN 38,1) und damit das Ende allen Leidens – „das höchste Glück" (Dhammapada 204). Es ist kein Nichts, sondern ein unbedingter Frieden jenseits aller Begriffe: So wie man von einem erloschenen Feuer nicht sagen kann, es sei nach Norden oder Süden gegangen, so passen unsere Kategorien nicht auf den Vollendeten (MN 72). Und Nirvana kann schon in diesem Leben verwirklicht werden; der Weg dorthin ist überprüfbar. Der christliche Himmel dagegen wirkt wie eine Projektion irdischer Wünsche: ein ewiges Weiterexistieren des Ich, das an sich selbst festhält – genau der „Durst nach Werden", den der Buddha als Ursache des Leidens erkannt hat. Ewiges persönliches Leben wäre am Ende unerträglich. Was kann höher sein als vollkommener Friede?`,
  biblical: {
    summary: `Auch die Bibel verheißt das Ende allen Leidens (Offb 21,4) und einen Frieden, „der höher ist als alle Vernunft" (Phil 4,7). Aber ihr Ziel ist nicht vor allem die Abwesenheit von Leid, sondern die **Gegenwart Gottes**: „Das ist das ewige Leben, dass sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesus Christus, erkennen" (Joh 17,3). Die Vollendung ist Begegnung „von Angesicht zu Angesicht" (1 Kor 13,12), Verwandlung in Christi Bild (1 Joh 3,2), Freude in Fülle (Ps 16,11) und eine erneuerte, leibliche Schöpfung (1 Kor 15; Offb 21). Das ewige Leben beginnt schon jetzt (Joh 5,24).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '17,3', quote: `Das ist aber das ewige Leben, daß sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesum Christum, erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '16,11', quote: `Du tust mir kund den Weg zum Leben: vor dir ist Freude die Fülle und liebliches Wesen zu deiner Rechten ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '3,2', quote: `Wir wissen aber, wenn es erscheinen wird, daß wir ihm gleich sein werden; denn wir werden ihn sehen, wie er ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,3', quote: `Siehe da, die Hütte Gottes bei den Menschen! und er wird bei ihnen wohnen, und sie werden sein Volk sein, und er selbst, Gott mit ihnen, wird ihr Gott sein.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche betet für die Entschlafenen um Ruhe „im Schoß unserer heiligen Väter Abraham, Isaak und Jakob … im Paradies der Freude, dem Ort, von dem Kummer, Trauer und Seufzen geflohen sind". Ruhe ist hier nicht Erlöschen, sondern Geborgenheit bei Gott und in der Gemeinschaft der Heiligen. Gregor von Nyssa hat die Vollendung als unendliches Fortschreiten in Gott beschrieben (*Epektasis*, nach Phil 3,13): Weil Gott unerschöpflich ist, wächst die Seele ewig in seiner Liebe, ohne je Überdruss zu empfinden. Athanasius fasst das Ziel in der Vergöttlichung zusammen: Teilhabe am Leben Gottes durch Gnade, nicht Auflösung.`,
    sources: [
      { kind: 'liturgie', work: 'Gedächtnis der Entschlafenen (Liturgie des hl. Basilius, koptisch)', quote: `Lass sie ruhen im Schoß unserer heiligen Väter Abraham, Isaak und Jakob, auf grüner Weide am Wasser der Ruhe, im Paradies der Freude, dem Ort, von dem Kummer, Trauer und Seufzen geflohen sind, im Licht deiner Heiligen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,239', year: 'ca. 390', quote: `Das ist in Wahrheit Gott schauen: niemals gesättigt werden im Verlangen, ihn zu sehen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', original: 'Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, status: 'verbatim', translation: 'eigene Übersetzung' },
    ],
  },
  opposingView: {
    summary: `*Nibbana* bedeutet wörtlich „Erlöschen" (wie ein Feuer). Der Kanon unterscheidet das Nirvana „mit Rest" (der lebende Vollendete) und „ohne Rest" (nach dem Tod; Itivuttaka 44). Was nach dem endgültigen Erlöschen ist, gehört zu den Fragen, die der Buddha nicht beantwortete: Ob der Vollendete nach dem Tod ist, nicht ist, beides oder keins von beiden, sei eine unangemessene Frage – wie die Frage, wohin ein erloschenes Feuer gegangen ist (MN 72). Buddhisten betonen, dass Nirvana keine Vernichtung (*ucchedavada*) sei. Im Mahayana lehrt Nagarjuna sogar, zwischen Samsara und Nirvana bestehe nicht der geringste Unterschied (MMK 25,19–20).`,
    sources: [
      { kind: 'oestlich', work: 'Dhammapada', ref: '204', original: 'nibbānaṃ paramaṃ sukhaṃ', quote: `Nirvana ist das höchste Glück.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Samyutta-Nikaya 38,1 (Jambukhadaka-Sutta)', original: 'yo kho, āvuso, rāgakkhayo dosakkhayo mohakkhayo – idaṃ vuccati nibbānaṃ', quote: `Das Versiegen der Gier, das Versiegen des Hasses, das Versiegen der Verblendung – das, Freund, nennt man Nirvana.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Sutta-Nipata', ref: '1074–1076 (Fragen des Upasiva)', quote: `Wie eine vom Wind verwehte Flamme erlischt und nicht mehr zu benennen ist, so ist der Weise, der frei geworden ist, nicht mehr zu benennen; für ihn gibt es kein Maß mehr, mit dem man ihn erfassen könnte.`, status: 'paraphrase' },
      { kind: 'oestlich', work: 'Majjhima-Nikaya 72 (Aggivacchagotta-Sutta)', status: 'paraphrase', quote: `Gleichnis vom erloschenen Feuer: Die Frage, wohin es gegangen sei, trifft nicht zu; ebenso ist der Vollendete tief, unermesslich, schwer zu ergründen wie der Ozean.` },
      { kind: 'oestlich', author: 'Nagarjuna', work: 'Mulamadhyamakakarika', ref: '25,19–20', year: 'ca. 2. Jh.', status: 'paraphrase', quote: `Zwischen Samsara und Nirvana besteht nicht der geringste Unterschied.` },
    ],
  },
  quickAnswer: `Auch Christen hoffen auf das Ende allen Leids – „Gott wird abwischen alle Tränen". Aber das christliche Ziel ist mehr als Abwesenheit von Leid: Es ist die Gegenwart der Liebe – Gott von Angesicht zu Angesicht zu sehen und mit allen Geliebten in ihm vereint zu sein. Was ist höher: ein Feuer, das erlischt, oder eine Liebe, die nie aufhört? Und weil Gott unendlich ist, wird die Ewigkeit nicht langweilig, sondern ein ewiges Wachsen in Freude.`,
  keyPoints: [
    `**Abwesenheit oder Gegenwart:** Nirvana wird vor allem als Erlöschen von Gier, Hass, Verblendung und Leid beschrieben; das Reich Gottes als Fülle der Gegenwart Gottes (Ps 16,11; Offb 21,3).`,
    `**Wo bleibt die Liebe?** Wenn alle Bindung losgelassen werden muss, ist der höchste Zustand liebelos. Die Bibel sagt: „Die Liebe hört nimmer auf" (1 Kor 13,8).`,
    `**Nicht beschreibbar – nicht personal:** Über den Vollendeten nach dem Tod schweigt der Buddha (MN 72; Sn 1074–1076). Die christliche Hoffnung ist ausdrücklich personal: sehen, erkennen, bei ihm sein.`,
    `**Keine Langeweile:** Gregor von Nyssa: ewiges Wachsen in Gott, der unerschöpflich ist (Epektasis).`,
    `**Ewiges Leben beginnt jetzt:** Joh 17,3; 5,24 – das Christentum ist keine bloße Vertröstung.`,
    `**Grund der Hoffnung:** Die christliche Hoffnung gründet in der geschichtlichen Auferstehung Jesu, nicht nur in innerer Erfahrung.`,
  ],
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Mystiker der unendlichen Gottesschau',
      text: `Gregor von Nyssa deutet den Aufstieg des Mose auf den Sinai als Bild der Seele, die immer tiefer in Gott hineingeht. Weil Gott unendlich ist, gibt es kein Ende des Fortschritts: Jede Erfüllung weckt ein größeres Verlangen, und jedes Verlangen wird erfüllt. Die Vollendung ist darum kein Stillstand und kein Erlöschen, sondern ewige, freudige Bewegung der Liebe. Das ist die christliche Antwort auf den Einwand, ein ewiges Leben müsse langweilig werden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De vita Moysis', ref: 'II,219–255', status: 'paraphrase', quote: `Die wahre Gottesschau besteht darin, im Verlangen nach ihm nie gesättigt zu werden.` },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker der Sehnsucht',
      text: `C. S. Lewis argumentiert, dass natürliche Wünsche auf wirkliche Gegenstände verweisen: Hunger auf Nahrung, Durst auf Wasser. Wenn wir eine Sehnsucht in uns finden, die nichts in dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass wir für eine andere Welt gemacht sind. Und er warnt: Unser Problem ist nicht, dass wir zu viel begehren, sondern zu wenig – wir geben uns mit Sandburgen zufrieden, während uns ein Urlaub am Meer angeboten wird.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', original: 'If I find in myself a desire which no experience in this world can satisfy, the most probable explanation is that I was made for another world.', quote: `Wenn ich in mir ein Verlangen finde, das keine Erfahrung in dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt geschaffen bin.`, status: 'verbatim', translation: 'eigene Übersetzung' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory (Predigt)', year: '1941', original: 'We are far too easily pleased.', quote: `Wir sind viel zu leicht zufrieden.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Denker des unruhigen Herzens',
      text: `Augustinus beginnt seine Bekenntnisse mit dem Satz, der die christliche Antwort auf das Begehren zusammenfasst: Nicht das Begehren ist das Problem, sondern dass es an Vergänglichem keine Ruhe findet. Ruhe gibt es nicht durch das Auslöschen des Herzens, sondern indem es in Gott ankommt. Augustinus wird hier als geistlicher Schriftsteller zitiert, dessen Satz Christen aller Traditionen teilen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Confessiones', ref: 'I,1,1', original: 'fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te', quote: `Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'paul-williams',
      role: 'als ehemaliger Buddhist',
      text: `Paul Williams beschreibt, dass ihn am Ende die Frage bewegte, was das Nirvana für ihn als Person bedeutet. Wenn es keine Fortdauer der Person gibt, dann ist das endgültige Nirvana für den Menschen, der jetzt liebt, sucht und hofft, kein Ziel, das er erreicht, sondern sein Ende. Die christliche Hoffnung dagegen richtet sich auf die Vollendung gerade dieser Person in der Gemeinschaft mit Gott.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul Williams', work: 'The Unexpected Way', year: '2002', status: 'paraphrase' },
      ],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Mönchsvater und Lehrer des Gebets',
      text: `Vater Matta el-Meskeen beschreibt das Gebet nicht als Technik zur Beruhigung, sondern als lebendige Gemeinschaft mit Christus, die schon jetzt Freude und Frieden schenkt. Für ihn ist das ewige Leben die Vollendung dessen, was im Gebet begonnen hat: eine persönliche Beziehung der Liebe, die durch den Tod nicht beendet, sondern vollendet wird. Die Erfahrung der koptischen Mönche ist darum kein Erlöschen, sondern ein Erwachen zur Gegenwart Gottes.`,
      sources: [
        { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: 'engl. 2003 (arab. Original 1952)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ende-allen-leidens',
      objection: `Nirvana ist das Ende allen Leidens, das höchste Glück (Dhammapada 204). Was könnte es Höheres geben?`,
      objectionBy: 'Walpola Rahula',
      answer: `Auch das Christentum verheißt das Ende allen Leids (Offb 21,4). Aber es verheißt mehr: die Gegenwart dessen, der die Liebe ist, und die Gemeinschaft mit allen, die in ihm leben. Nicht nur Abwesenheit von Schmerz, sondern „Freude die Fülle" (Ps 16,11). Was ist höher – die Abwesenheit von Leid oder die Gegenwart der Liebe?`,
      followUps: [
        {
          id: 'liebe-ist-anhaften',
          objection: `Liebe ist Anhaften, und Anhaften erzeugt Leid. Auch die Liebe muss am Ende losgelassen werden.`,
          objectionBy: 'Ajahn Chah (Linie)',
          answer: `In einer Welt des Todes erzeugt Liebe tatsächlich Schmerz – weil Geliebte sterben. Aber die christliche Antwort ist, den Tod zu besiegen, nicht die Liebe. Wenn am Ende sogar die Liebe gehen muss, dann ist der höchste Zustand liebelos. Die Bibel sagt das Gegenteil: „Die Liebe hört nimmer auf" (1 Kor 13,8).`,
          followUps: [
            {
              id: 'metta-bleibt',
              objection: `Metta, die liebende Güte, ist keine anhaftende Liebe, sondern gleichmütiges Wohlwollen. Das bleibt.`,
              objectionBy: 'Thich Nhat Hanh (sinngemäß)',
              answer: `Metta ist schön, und Christen können viel davon lernen. Aber wen liebt der Buddha nach seinem endgültigen Erlöschen? Die Tradition schweigt. Und wenn die Wesen, denen das Wohlwollen gilt, letztlich keine Personen sind, wem gilt es dann? Im Christentum liebt der ewige Gott von Ewigkeit her, und die Geliebten bleiben, um geliebt zu werden und zu lieben.`,
              questionsBack: [`Gibt es im endgültigen Nirvana noch jemanden, der liebt, und jemanden, der geliebt wird?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-nichts-jenseits',
      objection: `Nirvana ist kein Nichts. Es ist jenseits aller Begriffe – wie ein Feuer, das erlischt und nicht irgendwohin geht (MN 72).`,
      objectionBy: 'Thich Nhat Hanh',
      answer: `Das nehme ich ernst: Buddhisten lehnen die Vernichtungslehre ab. Aber wenn nichts Positives mehr gesagt werden kann, kann man dann noch sagen, es sei „Glück"? Die Texte nennen es Glück und Frieden – und sagen zugleich, dass der Vollendete nicht mehr zu benennen ist (Sn 1074–1076). Was immer es ist, es ist keine Gemeinschaft von Personen. Die christliche Hoffnung lässt sich dagegen klar sagen: Wir werden ihn sehen, erkennen und „bei dem Herrn sein allezeit" (1 Thess 4,17).`,
      followUps: [
        {
          id: 'himmel-projektion-langweilig',
          objection: `Euer Himmel ist nur eine Projektion irdischer Wünsche – Wolken, Harfen, endloses Weiterexistieren. Das wäre unerträglich langweilig.`,
          objectionBy: 'Sam Harris (sinngemäß)',
          answer: `Das ist eine Karikatur. Die Bibel spricht von einer neuen Schöpfung, von auferstandenen Leibern und vom unendlichen Gott. Gregor von Nyssa beschrieb die Ewigkeit als unendliches Wachsen in Gottes unerschöpfliche Güte – Langeweile ist unmöglich, wo das Gegenüber unendlich ist. C. S. Lewis sagte: Unser Problem ist nicht, dass wir zu viel wollen, sondern dass wir „viel zu leicht zufrieden" sind.`,
          followUps: [
            {
              id: 'unendliches-begehren-leid',
              objection: `Unendliches Wachsen heißt unendliches Begehren – also unendliches Leiden!`,
              objectionBy: 'Walpola Rahula (sinngemäß)',
              answer: `Nur wenn Begehren immer Mangel und Frustration bedeutet. In Gott fallen Verlangen und Erfüllung zusammen: Jede Erfüllung macht das Herz weiter, und jede Weite wird erfüllt – wie eine Liebe zwischen Eheleuten, die wächst, ohne an Mangel zu leiden. Das buddhistische Wort für Gier (*tanha*) beschreibt ein Begehren, das nie satt wird, weil es das Falsche sucht. Das Verlangen nach Gott findet, was es sucht.`,
            },
          ],
        },
      ],
    },
    {
      id: 'hier-und-jetzt',
      objection: `Nirvana kann man hier und jetzt verwirklichen. Euer Himmel ist nur ein Versprechen für nach dem Tod.`,
      objectionBy: 'Stephen Batchelor',
      answer: `Das ewige Leben beginnt jetzt: „Wer mein Wort hört und glaubt dem, der mich gesandt hat, der **hat** das ewige Leben" (Joh 5,24). Die koptischen Wüstenväter bezeugen Frieden und Freude mitten in diesem Leben. Und unsere Hoffnung nach dem Tod ist kein vages Versprechen, sondern gründet in der Auferstehung Jesu.`,
      followUps: [
        {
          id: 'auferstehung-mythos-nirvana-pruefbar',
          objection: `Die Auferstehung ist ein Mythos. Nirvana dagegen kann jeder durch eigene Praxis überprüfen.`,
          objectionBy: 'Stephen Batchelor',
          answer: `Kann er das wirklich? Wie prüft man, ob jemand das Nirvana erlangt hat – und erst recht das endgültige nach dem Tod, über das der Buddha selbst nichts sagt? Die Auferstehung dagegen ist eine öffentliche, geschichtliche Behauptung mit benannten Zeugen und einem leeren Grab, die man mit historischen Mitteln untersuchen kann (1 Kor 15,3–8).`,
        },
      ],
    },
    {
      id: 'ewiges-leben-ego',
      objection: `Ein ewiges persönliches Leben ist Ego-Verlängerung – genau der „Durst nach Werden", den der Buddha als Ursache des Leidens erkannte.`,
      objectionBy: 'Walpola Rahula',
      answer: `Der Christ will nicht sich selbst ewig so, wie er ist, sondern verwandelt (1 Kor 15,51–53). Sein Verlangen richtet sich auf Gott, nicht auf das eigene Ich. Ewiges Leben ist Geschenk, nicht Besitz, den man festhält. Und die tiefe Sehnsucht nach Gemeinschaft ist kein Fehler, sondern ein Hinweis: „Unruhig ist unser Herz, bis es ruht in dir" (Augustinus).`,
      followUps: [
        {
          id: 'sehnsucht-beweist-nichts',
          objection: `Sehnsucht beweist gar nichts. Durst beweist nicht, dass es Wasser gibt.`,
          objectionBy: 'Sam Harris',
          answer: `Kein Beweis, aber ein starker Hinweis: Natürliche Bedürfnisse entsprechen wirklichen Gegenständen – Hunger der Nahrung, Durst dem Wasser, Einsamkeit der Freundschaft. C. S. Lewis: Wenn ich ein Verlangen finde, das nichts in dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass ich für eine andere Welt gemacht bin. Die Gewissheit aber kommt nicht aus der Sehnsucht, sondern aus der Auferstehung.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gibt es im endgültigen Nirvana noch Liebe – und jemanden, der liebt?`,
    `Ist die Abwesenheit von Leid dasselbe wie die Gegenwart von Glück?`,
    `Wie kann man überprüfen, ob jemand das Nirvana erlangt hat?`,
    `Wenn du wählen könntest: ein Feuer, das erlischt, oder eine Liebe, die nie aufhört – was wäre höher?`,
  ],
  avoid: [
    `Sage nicht „Nirvana ist einfach Nichts" – Buddhisten widersprechen dem zu Recht, und du verlierst an Glaubwürdigkeit.`,
    `Male den Himmel nicht als Wolkenidylle mit Harfen – das bestätigt die Karikatur.`,
    `Behaupte nicht, Buddhisten seien „lebensverneinend" – viele leben mit großer Freude und Mitgefühl.`,
  ],
  concessions: [
    `Der Buddhismus hat recht, dass ein unersättliches Begehren nach Vergänglichem unglücklich macht – das lehren auch die Wüstenväter.`,
    `Christen haben die Hoffnung auf den Himmel manchmal als bloße Vertröstung missbraucht und die Gegenwart Gottes im Jetzt vernachlässigt.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose', year: 'ca. 390', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Weight of Glory', year: '1941', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Keith Yandell / Harold Netland', work: 'Buddhism: A Christian Exploration and Appraisal', year: '2009', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Nirvana', 'Himmel', 'Ewiges Leben', 'Epektasis', 'Sehnsucht'],
  related: [
    'buddhismus/kein-selbst-anatta',
    'buddhismus/erloesung-durch-eigene-kraft',
    'sinn-existenz/tod-ist-das-ende',
    'auferstehung/halluzinationen',
    'religionskritik/projektion-feuerbach',
  ],
};

export default claim;
