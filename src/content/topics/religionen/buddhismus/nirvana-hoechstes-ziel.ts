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
              followUps: [
                {
                  id: 'personen-sind-konvention',
                  objection: `Das Wohlwollen gilt dem Leiden, nicht einer ewigen Substanz. Personen sind Konventionen – Ströme von Ereignissen, die ineinander verwoben sind („Intersein"). Liebe braucht kein ewiges Ich, sie braucht nur Achtsamkeit für das, was jetzt leidet.`,
                  objectionBy: 'Thich Nhat Hanh (sinngemäß)',
                  answer: `Das ist ehrlich – und genau hier liegt der Unterschied. Wenn mein Kind nur ein Strom von Ereignissen ist, dann gilt meine Liebe am Ende einem Vorgang, der vergeht. Jeder, der wirklich liebt, spürt aber: Ich liebe nicht einen Prozess, sondern dich – dieses unverwechselbare Gesicht. Das Christentum gibt dieser Erfahrung recht: Jede Person ist von Gott gewollt, bei ihrem Namen gerufen (Jes 43,1) und zur ewigen Gemeinschaft bestimmt. Die Liebe hat recht, nicht die Analyse, die sie auflöst.`,
                  detail: `Matta el-Meskeen (Vater Matta der Arme) beschreibt die Vereinigung mit Gott nie als Auflösung der Person, sondern als Gemeinschaft, in der der Mensch erst ganz er selbst wird. Die Väter unterscheiden darum zwischen der Natur, die wir teilen, und der Person (Hypostase), die unverwechselbar ist – nach dem Vorbild der Dreieinigkeit, in der drei Personen ein Wesen sind, ohne ineinander aufzugehen.

Thich Nhat Hanhs Gedanke des „Interseins" enthält eine tiefe Wahrheit: Wir sind miteinander verbunden, niemand existiert für sich allein. Das Christentum sagt dasselbe – wir sind Glieder eines Leibes (1 Kor 12,26). Aber Glieder sind keine bloßen Ereignisse; sie bleiben sie selbst, gerade in der Verbundenheit.`,
                  voices: [
                    { person: 'matta-el-meskeen', role: 'als koptischer Mönchsvater', text: `Vater Matta betont, dass die Vereinigung mit Gott durch Christus geschieht, der die Person nicht auslöscht, sondern heiligt. Das geistliche Leben ist für ihn ein Weg der Liebe, in dem der Mensch sich Gott schenkt und von Gott verwandelt wird – nicht ein Erlöschen, sondern ein Erblühen der Person in der Gemeinschaft mit Gott.`, sources: [
                      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: '2003 (engl. Ausgabe)', status: 'paraphrase', quote: `Gebet als Gemeinschaft der Liebe mit Gott, in der der Mensch verwandelt und nicht ausgelöscht wird.` },
                    ] },
                  ],
                  questionsBack: [`Wenn du am Grab eines geliebten Menschen stehst – trauerst du um einen Ereignisstrom oder um ihn?`],
                },
              ],
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
              followUps: [
                {
                  id: 'saekularer-buddhismus-jetzt',
                  objection: `Ich brauche überhaupt keine Jenseitshoffnung. Der säkulare Buddhismus will nichts glauben, sondern hier und jetzt gut leben: Nirvana ist die Freiheit von Gier, Hass und Verblendung in diesem Leben. Wiedergeburt und Himmel sind Metaphysik, die man nicht braucht.`,
                  objectionBy: 'Stephen Batchelor',
                  answer: `Dann hast du mehr aufgegeben als den Himmel: auch Wiedergeburt, Karma über den Tod hinaus und das endgültige Nirvana – den Kern dessen, was der Buddha nach dem Pali-Kanon lehrte. Viele Buddhisten sehen darin eine Verkürzung. Und die Frage bleibt dir trotzdem: Was ist mit denen, die gelitten haben und gestorben sind, ohne je frei zu werden? Eine Hoffnung nur für die Gesunden, Gebildeten und Meditierenden ist keine Hoffnung für die Welt.`,
                  detail: `Stephen Batchelor ist ein ernsthafter Denker und ehrlicher Gesprächspartner – er war selbst Mönch in tibetischer und koreanischer Tradition. Sein „Buddhismus ohne Glauben" gesteht aber ein, dass der überlieferte Buddhismus sehr wohl metaphysische Aussagen enthält. Damit bestätigt er indirekt: Die Frage nach dem Tod lässt sich nicht wegmeditieren.

Das Christentum nimmt das Hier und Jetzt ebenfalls ernst – das ewige Leben beginnt schon jetzt (Joh 17,3). Aber es endet nicht an der Grenze des Todes. Für das Kind, das mit fünf Jahren an Krebs stirbt, hat der säkulare Buddhismus nichts mehr zu sagen; das Evangelium sagt: „Gott wird abwischen alle Tränen" (Offb 21,4).`,
                  sources: [
                    { kind: 'gegner', author: 'Stephen Batchelor', work: 'Buddhism Without Beliefs: A Contemporary Guide to Awakening', year: '1997', status: 'paraphrase', quote: `Der Dharma als Praxis, nicht als Glaubenssystem; Wiedergeburt und Karma als entbehrliche Metaphysik.` },
                    { kind: 'gegner', author: 'Stephen Batchelor', work: 'After Buddhism: Rethinking the Dharma for a Secular Age', year: '2015', status: 'paraphrase', quote: `Ein säkularer Buddhismus, der sich auf ein gutes Leben in dieser Welt konzentriert.` },
                  ],
                  questionsBack: [`Welche Hoffnung hat dein säkularer Buddhismus für die Menschen, die gestorben sind, bevor sie meditieren lernten?`],
                },
              ],
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
          followUps: [
            {
              id: 'meister-bezeugen-frieden',
              objection: `Es gibt lebende Meister, deren tiefer Frieden für jeden sichtbar ist. Das ist der Beweis, dass der Weg funktioniert. Wo ist euer vergleichbarer Beweis?`,
              objectionBy: 'Der Dalai Lama (sinngemäß)',
              answer: `Ich glaube dir, dass es solche Menschen gibt – und ich achte sie. Aber dieser Frieden zeigt, dass eine Praxis Früchte trägt, nicht, dass ihre Lehre über das Letzte wahr ist. Tiefen Frieden findest du auch bei christlichen Heiligen: bei den Wüstenvätern, bei Vater Matta el-Meskeen, bei Papst Kyrillos VI., der jahrzehntelang in Gebet und Stille lebte. Wenn Frieden der Maßstab ist, haben beide Seiten Zeugen. Die Wahrheitsfrage entscheidet sich anderswo – an der Frage, ob Jesus auferstanden ist.`,
              detail: `Das Argument aus der Heiligkeit ist wertvoll, aber es beweist zu viel: Es gäbe allen Traditionen recht, die heiligmäßige Menschen hervorgebracht haben – und diese Traditionen widersprechen einander. Darum braucht es zusätzlich eine Wahrheitsprüfung. Das Christentum lädt dazu ein: Die Auferstehung ist ein Ereignis, für das Paulus Zeugen nennt, die man befragen konnte (1 Kor 15,6).

Bemerkenswert: Die christlichen Heiligen selbst verweisen nie auf ihren eigenen Frieden als Beweis, sondern auf Christus. Antonius sagte nach der Überlieferung, er fürchte Gott nicht mehr, sondern liebe ihn – denn „die Liebe treibt die Furcht aus" (1 Joh 4,18).`,
              voices: [
                { person: 'kyrillos-vi', role: 'als betender Patriarch der koptischen Kirche', text: `Papst Kyrillos VI. (1902–1971) lebte vor seiner Wahl als Einsiedler und blieb auch als Patriarch ein Mann des täglichen Gebets und der Liturgie. Viele, die ihm begegneten, berichteten von seinem tiefen Frieden. Er selbst verwies nie auf sich, sondern auf Christus und die Fürbitte der Heiligen.` },
              ],
              questionsBack: [`Wenn ein christlicher und ein buddhistischer Heiliger beide tiefen Frieden ausstrahlen, aber Gegensätzliches lehren – wer hat recht?`],
            },
          ],
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
          followUps: [
            {
              id: 'evolution-erklaert-sehnsucht',
              objection: `Die Evolution erklärt die Sehnsucht nach Ewigkeit vollständig – ein Nebenprodukt des Überlebenstriebs und der Todesangst. Dafür braucht es weder Gott noch Nirvana.`,
              objectionBy: 'Sam Harris (sinngemäß)',
              answer: `Woher eine Überzeugung stammt, entscheidet nicht, ob sie wahr ist – das wäre ein genetischer Fehlschluss. Die Evolution erklärt auch, warum wir rechnen können, und trotzdem ist 2 + 2 = 4. Und das Argument schneidet in beide Richtungen: Wenn unser Denken nur auf Überleben getrimmt ist, warum sollten wir ihm dann bei der Frage nach Wahrheit trauen – auch bei deiner These, dass es keinen Gott gibt?`,
              detail: `Alvin Plantinga hat dieses Problem zugespitzt: Wenn unsere kognitiven Fähigkeiten durch einen ungelenkten Prozess entstanden sind, der nur Überlebensvorteile belohnt, dann ist die Wahrscheinlichkeit, dass sie zuverlässig wahre Überzeugungen über Metaphysik hervorbringen, gering oder unbestimmbar. Der Naturalist sägt damit am Ast, auf dem er sitzt. Der Theist hat dieses Problem nicht: Wenn wir nach dem Bild eines vernünftigen Gottes geschaffen sind, ist zu erwarten, dass unsere Vernunft auf Wahrheit hin angelegt ist.

Für das Gespräch mit Buddhisten gilt dasselbe wie oben: Harris argumentiert als Naturalist. Ein Buddhist, der dieses Argument übernimmt, verliert auch Wiedergeburt, Karma und Nirvana.`,
              voices: [
                { person: 'plantinga', role: 'als Erkenntnistheoretiker', text: `Plantingas „evolutionäres Argument gegen den Naturalismus" zeigt, dass die Verbindung von Naturalismus und Evolution sich selbst untergräbt: Wer beides glaubt, hat einen Grund, an der Zuverlässigkeit seines eigenen Denkens zu zweifeln – und damit auch am Naturalismus.`, sources: [
                  { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', status: 'paraphrase', quote: `Naturalismus und Evolution zusammen untergraben das Vertrauen in die Zuverlässigkeit unserer kognitiven Fähigkeiten.` },
                ] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nirvana-wie-gott-jenseits',
      objection: `Nirvana ist wie euer Gott jenseits aller Begriffe. Eure Mystiker sagen doch selbst, Gott sei unbeschreiblich. Ihr nennt es Gott, wir nennen es Nirvana – die letzte Dimension ist dieselbe.`,
      objectionBy: 'Thich Nhat Hanh (sinngemäß)',
      answer: `Die Väter sagen tatsächlich, dass Gottes Wesen unbegreiflich ist. Aber sie sagen nie, dass er unpersönlich ist. Der unbegreifliche Gott schafft, spricht, liebt, vergibt und ist in Christus Mensch geworden. Nirvana dagegen schafft nicht, spricht nicht und vergibt nicht – das sagt der Buddhismus selbst. Gemeinsame Begriffslosigkeit macht zwei Wirklichkeiten noch nicht gleich: Auch über das Nichts und über die Fülle kann man schweigen.`,
      detail: `Gregor von Nyssa beschreibt in seinem *Leben des Mose* den Aufstieg in das „göttliche Dunkel": Je näher Mose Gott kommt, desto mehr erkennt er, dass Gott alle Begriffe übersteigt. Aber dieses Dunkel ist kein leeres Erlöschen, sondern die Gegenwart dessen, der mit Mose „von Angesicht zu Angesicht redete, wie ein Mann mit seinem Freunde redet" (Ex 33,11). Die apophatische Theologie schützt das Geheimnis eines persönlichen Gottes – sie hebt es nicht auf.

Der Buddhismus wiederum besteht darauf, dass Nirvana kein Schöpfer und kein Erlöser ist. Wer beides gleichsetzt, muss entweder Gott entpersönlichen oder Nirvana personalisieren – und täte damit beiden Traditionen Unrecht.`,
      voices: [
        { person: 'gregor-nyssa', role: 'als Lehrer der mystischen Theologie', text: `Gregor beschreibt die Gotteserkenntnis als unendlichen Aufstieg in ein Licht, das zugleich Dunkel ist, weil Gottes Wesen jedes Begreifen übersteigt. Doch wer aufsteigt, begegnet einem Du: Die Seele ist Braut, Gott der Bräutigam. Unbegreiflichkeit und persönliche Liebe gehören bei ihm zusammen.`, sources: [
          { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,162–169', year: 'ca. 390', status: 'paraphrase', quote: `Das wahre Sehen Gottes besteht darin, zu erkennen, dass er unsichtbar ist; Mose tritt in das Dunkel ein, in dem Gott ist.` },
        ] },
      ],
      sources: [
        { kind: 'bibel', work: '2. Mose (Exodus)', ref: '33,11', quote: `Der HERR aber redete mit Mose von Angesicht zu Angesicht, wie ein Mann mit seinem Freunde redet.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'person-ist-begrenzung',
          objection: `„Person" ist doch eine Begrenzung – ein Ich, das sich von anderen abgrenzt. Das Letzte muss jenseits davon sein.`,
          objectionBy: 'Thich Nhat Hanh (sinngemäß)',
          answer: `Person heißt nicht Abgrenzung, sondern Beziehungsfähigkeit: erkennen, lieben, sich verschenken. Ein Stein ist unpersönlich – ist er deshalb weniger begrenzt als ein Mensch? Das Unpersönliche ist nicht mehr, sondern weniger als das Persönliche. Die Dreieinigkeit zeigt: Am Grund allen Seins steht nicht ein abgeschlossenes Ich, sondern ewige Gemeinschaft – Vater, Sohn und Geist, die einander ganz durchdringen und doch nicht ineinander aufgehen.`,
          questionsBack: [`Ist das Fähigste, was wir kennen – Erkennen und Lieben – eine Begrenzung oder ein Reichtum?`],
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
