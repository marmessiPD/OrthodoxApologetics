import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gott-war-mensch',
  title: `„Gott war einst ein Mensch, und Menschen können Götter werden."`,
  proponents: [
    { name: 'Joseph Smith Jr.', role: 'Gründer der HLT-Kirche', work: 'King-Follett-Predigt, Nauvoo, 7. April 1844' },
    { name: 'Lorenzo Snow', role: '5. Präsident der HLT-Kirche (1814–1901)', work: 'Couplet „As man now is, God once was; as God now is, man may be" (nach eigener Angabe 1840)' },
    { name: 'Kirche Jesu Christi der HLT', role: 'Offizielle Lehre', work: 'Lehre und Bündnisse 130,22; 132,20; Gospel Topics Essay „Becoming Like God" (2014)' },
    { name: 'Stephen E. Robinson', role: 'HLT-Theologe, BYU (1947–2018)', work: 'How Wide the Divide? (1997, mit Craig Blomberg)' },
  ],
  steelman: `Gott schuf den Menschen „nach seinem Bild" (Gen 1,26) – also hat Gott eine Gestalt, einen Körper. Jakob sah Gott „von Angesicht zu Angesicht" (Gen 32,31), Mose redete mit ihm wie mit einem Freund (Ex 33,11). Jesus sagte: „Ihr sollt vollkommen sein, wie euer Vater im Himmel vollkommen ist" (Mt 5,48), zitierte „Ihr seid Götter" (Joh 10,34; Ps 82,6) und versprach: „Wer überwindet, dem will ich geben, mit mir auf meinem Thron zu sitzen" (Offb 3,21). Wir sind „Erben Gottes und Miterben Christi" (Röm 8,17) und sollen „teilhaftig werden der göttlichen Natur" (2 Petr 1,4). Die frühen Kirchenväter wussten das noch: Irenäus sagte, Christus sei geworden, was wir sind, damit wir würden, was er ist; Clemens von Alexandrien und Athanasius lehrten, Gott sei Mensch geworden, damit der Mensch Gott werde. Die östlichen Kirchen nennen das bis heute *Theosis*. Joseph Smith hat diese verlorene Wahrheit wiederhergestellt: „Gott selbst war einst, wie wir jetzt sind, und ist ein erhöhter Mensch." Gerade die orthodoxe Kirche bestätigt also im Grunde die mormonische Lehre.`,
  biblical: {
    summary: `Die Bibel verkündet einen Gott, der **von Ewigkeit zu Ewigkeit** Gott ist (Ps 90,2), sich nicht wandelt (Mal 3,6) und ausdrücklich **kein Mensch** ist (Num 23,19; Hos 11,9). „Gott ist Geist" (Joh 4,24), der „unsichtbare Gott" (Kol 1,15), „der allein Unsterblichkeit hat" (1 Tim 6,16). Vor allem schließt Jesaja beides aus, was die HLT-Lehre behauptet: einen Gott **vor** Gott (dessen Vater) und Götter **nach** ihm (erhöhte Menschen): „Vor mir ist kein Gott gemacht, so wird auch nach mir keiner sein" (Jes 43,10); „Ist auch ein Gott außer mir? … ich weiß ja keinen" (Jes 44,8). Die Verheißung, „wie Gott zu werden", spricht in der Bibel zuerst die Schlange aus (Gen 3,5).`,
    detail: `**„Nach seinem Bild":** Das Bild Gottes besteht in Vernunft, Freiheit, Herrschaftsauftrag und Beziehungsfähigkeit, nicht in einer Körperform – sonst hätte auch Gott Geschlechtsorgane und Verdauung. Wo die Bibel von Gottes „Hand" oder „Angesicht" spricht, sind das Anthropomorphismen, wie auch von seinen „Flügeln" die Rede ist (Ps 91,4). Jakobs Ringen (Gen 32) ist eine Erscheinung des Engels des HERRN (Hos 12,4–5); „kein Mensch wird leben, der mich sieht" (Ex 33,20).

**Ps 82 und Joh 10,34:** In Ps 82 werden ungerechte Richter „Götter" genannt – und sofort angekündigt: „Ihr werdet sterben wie Menschen" (82,7). Jesus argumentiert vom Kleineren zum Größeren: Wenn schon sie so heißen, wie viel mehr darf der vom Vater Gesandte sich Sohn Gottes nennen.

**2 Petr 1,4 im Zusammenhang:** Teilhaftig der göttlichen Natur werden wir „durch die teuren und allergrößten Verheißungen", indem wir „entfliehen der Verderbnis der Welt" – es geht um Heiligkeit und Unvergänglichkeit, die Gott schenkt, nicht um ein eigenes Gottsein mit eigener Welt.

**Röm 8,17 und Offb 21,7:** Wir sind Erben durch Annahme an Kindes statt (*huiothesia*, Röm 8,15). Und in der Ewigkeit bleibt die Ordnung: „Ich werde sein Gott sein, und er wird mein Sohn sein" (Offb 21,7); „seine Knechte werden ihm dienen" (Offb 22,3).`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '43,10', quote: `… daß vor mir kein Gott gemacht ist, so wird auch nach mir keiner sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '44,6.8', quote: `Ich bin der Erste, und ich bin der Letzte, und außer mir ist kein Gott. … Ist auch ein Gott außer mir? Es ist kein Hort, ich weiß ja keinen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Numeri (4. Mose)', ref: '23,19', quote: `Gott ist nicht ein Mensch, daß er lüge, noch ein Menschenkind, daß ihn etwas gereue.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '4,24', quote: `Gott ist Geist, und die ihn anbeten, die müssen ihn im Geist und in der Wahrheit anbeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,4', quote: `… durch welche uns die teuren und allergrößten Verheißungen geschenkt sind, nämlich, daß ihr dadurch teilhaftig werdet der göttlichen Natur, so ihr fliehet die vergängliche Lust der Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', author: 'Joseph Smith', work: 'King-Follett-Predigt (Times and Seasons, 15. Aug. 1844; Teachings of the Prophet Joseph Smith, S. 345–346)', year: '1844', quote: `Gott selbst war einst, wie wir jetzt sind, und ist ein erhöhter Mensch und thront in jenen Himmeln! … Ihr müsst lernen, selbst Götter zu werden.`, original: `God himself was once as we are now, and is an exalted man, and sits enthroned in yonder heavens! … you have got to learn how to be Gods yourselves`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Die Predigt ist aus Mitschriften mehrerer Schreiber zusammengesetzt; der englische Wortlaut entspricht der Standardfassung.' },
      { kind: 'gegner', author: 'Lorenzo Snow', work: 'Couplet (zit. u. a. in: Teachings of Presidents of the Church: Lorenzo Snow)', quote: `Wie der Mensch jetzt ist, war Gott einst; wie Gott jetzt ist, kann der Mensch werden.`, original: `As man now is, God once was: As God now is, man may be.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', work: 'Lehre und Bündnisse', ref: '130,22', quote: `Der Vater hat einen Körper aus Fleisch und Gebein, so fühlbar wie der eines Menschen; ebenso der Sohn; der Heilige Geist aber hat keinen Körper aus Fleisch und Gebein, sondern ist eine Person aus Geist.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Lehre von der **Theosis** (Vergöttlichung) und die HLT-Lehre von der Erhöhung klingen ähnlich, sind aber im Kern gegensätzlich. Für die Väter gilt unverrückbar: Gott ist **ungeschaffen**, ewig und ohne Anfang; alles andere ist von ihm **aus dem Nichts** geschaffen. Diese Kluft zwischen Schöpfer und Geschöpf bleibt in Ewigkeit bestehen. Vergöttlichung heißt: Teilhabe an Gottes Leben, Heiligkeit und Unvergänglichkeit **aus Gnade**, durch Christus im Heiligen Geist und in den Sakramenten – niemals Teilhabe am **Wesen** Gottes, niemals ein eigenes Gottsein. Athanasius: Der Sohn ist Sohn **von Natur**, wir werden Söhne **aus Gnade**. Der Mensch bleibt ewig Geschöpf und Anbetender.`,
    detail: `**Die koptische Zurückhaltung beim Begriff:** In der koptischen Kirche wird der Ausdruck „Vergöttlichung" bewusst vorsichtig gebraucht. Papst Schenuda III. warnte in Vorträgen und Schriften davor, von einer Teilhabe des Menschen an der göttlichen Natur so zu sprechen, als könne der Mensch Gott werden oder Gottes Wesen erlangen; er betonte, dass wir am Wirken und an den Gaben des Heiligen Geistes, an Heiligkeit und Gemeinschaft mit Gott teilhaben, nicht an seiner Gottheit. Vater Matta el-Meskeen griff dagegen in seinen patristischen Schriften, besonders zu Athanasius, die Sprache der Väter von der Vergöttlichung auf und verstand sie als Gnadenteilhabe in Christus. Beide verteidigen dieselbe Grenze: **Der Mensch wird nie Gott dem Wesen nach.** Der Unterschied liegt im Gebrauch eines Begriffs, nicht im Glauben an den einen, ewigen Schöpfer.

**Drei Prüffragen**, die Theosis und HLT-Erhöhung unterscheiden:
1. War Gott je etwas anderes als Gott? – Väter: Nie. HLT: Gott war einst ein Mensch.
2. Ist Gott Schöpfer aus dem Nichts? – Väter: Ja (Irenäus, Athanasius). HLT: Gott ordnete ewig vorhandene Materie; die Intelligenz des Menschen ist ungeschaffen (LuB 93,29).
3. Werden Erlöste angebetet und regieren eigene Welten? – Väter: Nein, sie beten in Ewigkeit den einen Gott an. HLT: Erhöhte werden Götter (LuB 132,20).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '54,3', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'I,39; III,19–20', quote: `Er war nicht Mensch und wurde danach Gott, sondern er war Gott und wurde danach Mensch, um uns zu vergöttlichen. – Wir werden Söhne nicht wie er, von Natur, sondern durch Gnade (Annahme).`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'II,10,4; V, Vorrede', quote: `Gott hat die Materie selbst aus dem Nichts geschaffen. – Christus wurde, was wir sind, um uns zu vollenden zu dem, was er ist.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vorträge und Schriften zur Frage der „Vergöttlichung des Menschen"', quote: `Warnung vor einem Verständnis, als könne der Mensch an der göttlichen Natur teilhaben oder Gott werden; Teilhabe am Wirken des Geistes und an der Heiligkeit, nicht an der Gottheit.`, status: 'unverified', note: 'Inhaltlich gut bekannte Position; genaue Titel und Erscheinungsjahre der einschlägigen arabischen Schriften vor Zitat prüfen.' },
      { kind: 'koptisch', author: 'Vater Matta el-Meskeen', work: 'Patristische Schriften, bes. zu Athanasius dem Apostolischen', quote: `Aufnahme der väterlichen Sprache von der Vergöttlichung als Gnadenteilhabe des Menschen am Leben Gottes in Christus.`, status: 'unverified', note: 'Genaue Werke und Stellen vor Zitat prüfen.' },
    ],
  },
  quickAnswer: `Die Bibel sagt: „Gott ist nicht ein Mensch" (Num 23,19), er ist Gott „von Ewigkeit zu Ewigkeit" (Ps 90,2), und „vor mir ist kein Gott gemacht, und nach mir wird keiner sein" (Jes 43,10). Wenn die Väter von „Vergöttlichung" sprechen, meinen sie: Wir empfangen aus Gnade Anteil an Gottes Leben und Heiligkeit – aber wir bleiben ewig Geschöpfe, die den einen, ungeschaffenen Gott anbeten. Gott war nie ein Mensch, bevor er in Christus Mensch **wurde**, und wir werden nie Götter eigener Welten.`,
  keyPoints: [
    `**Ewiger Gott:** Ps 90,2; Mal 3,6; Num 23,19; Hos 11,9 – Gott war nie etwas anderes als Gott.`,
    `**Jes 43,10 schließt beides aus:** einen Gott vor Gott und Götter nach ihm.`,
    `**Gott ist Geist:** Joh 4,24; Kol 1,15; 1 Tim 6,16 – das „Bild Gottes" ist keine Körperform.`,
    `**Theosis ≠ Erhöhung:** Teilhabe aus Gnade an Gottes Leben, nie an seinem Wesen; die Schöpfer-Geschöpf-Grenze bleibt.`,
    `**Koptische Vorsicht:** Papst Schenuda III. warnte vor missverständlichem Gebrauch des Begriffs; Matta el-Meskeen gebrauchte ihn patristisch – beide verwerfen ein Gottwerden dem Wesen nach.`,
    `**Ewige Anbetung:** Auch in der Vollendung bleibt Gott unser Gott und wir seine Knechte (Offb 21,7; 22,3).`,
  ],
  argument: {
    name: 'Drei-Fragen-Test: Theosis oder Erhöhung?',
    summary: 'Ähnliche Worte, gegensätzliche Ontologie – drei Fragen zeigen den Unterschied.',
    premises: [
      { text: 'P1: Nach der Schrift und den Vätern ist Gott ewig Gott und nie Mensch gewesen, bevor er in Christus Mensch wurde.', support: `Ps 90,2; Mal 3,6; Athanasius, Reden gegen die Arianer I,39: „Er war Gott und wurde danach Mensch."` },
      { text: 'P2: Nach der Schrift und den Vätern ist Gott Schöpfer aller Dinge aus dem Nichts; nichts außer ihm ist ungeschaffen.', support: `Gen 1,1; Joh 1,3; Hebr 11,3; Irenäus, Gegen die Häresien II,10,4.` },
      { text: 'P3: Nach der Schrift bleibt Gott in Ewigkeit der allein Angebetete; die Erlösten sind seine Kinder und Knechte.', support: `Offb 21,7; 22,3; Jes 44,6.8.` },
      { text: 'P4: Die HLT-Lehre bejaht, dass Gott einst Mensch war, dass Intelligenz und Materie ungeschaffen sind und dass Erhöhte Götter werden.', support: `King-Follett-Predigt (1844); LuB 93,29; 130,22; 132,20; Snow-Couplet.` },
    ],
    conclusion: 'Die HLT-Erhöhungslehre widerspricht der Schrift und ist mit der patristischen Theosis nicht vereinbar, sondern ihr Gegenteil: Theosis überbrückt aus Gnade eine bleibende Kluft; die HLT-Lehre leugnet die Kluft.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Vergöttlichung',
      text: `Athanasius ist der Kronzeuge, den HLT-Apologeten gern zitieren – aber für ihn ist die Vergöttlichung nur möglich, **weil** der Sohn von Natur Gott ist und wir es nicht sind. Der ewige Logos nahm unsere Natur an, damit wir durch ihn Anteil an Unvergänglichkeit erhalten. Er unterscheidet scharf: Der Sohn ist Sohn von Natur, wir werden Söhne durch Gnade und Annahme. Ein Gott, der selbst erst Gott geworden ist, wäre für Athanasius ein Geschöpf – und könnte niemanden vergöttlichen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer', ref: 'III,19–20', quote: `Wir werden Söhne und Götter durch Gnade, nicht von Natur.`, status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge des 2. Jahrhunderts',
      text: `Irenäus wird für den Satz zitiert, Christus sei geworden, was wir sind, um uns zu dem zu machen, was er ist. Derselbe Irenäus lehrt aber kompromisslos, dass es nur einen Gott, den Schöpfer, gibt, der alles – auch die Materie – aus dem Nichts geschaffen hat. Er bekämpfte die Gnostiker gerade deshalb, weil sie eine Reihe von Göttern und göttlichen Wesen über- und untereinander annahmen. Ein Gott, der Vater eines anderen Gottes ist und selbst einen Vater hatte, wäre für Irenäus genau die gnostische Götterkette.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,22,1; II,1,1; II,10,4', quote: `Ein Gott, Schöpfer aller Dinge aus dem Nichts; Ablehnung gnostischer Götterreihen.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger von Joh 1,12–13',
      text: `Kyrill erklärt in seinem Johanneskommentar, dass die Gläubigen „Götter und Söhne Gottes" genannt werden, weil Christus durch den Geist in ihnen wohnt – aber stets durch Gnade und Teilhabe, während der Sohn es von Natur ist. Die Teilhabe setzt den Unterschied voraus: Nur wer anders ist als Gott, kann an Gott teilhaben. Für Kyrill ist gerade die bleibende Unterscheidung die Bedingung der Gemeinschaft.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 1,12–13', quote: `Wir sind Söhne und Götter durch Gnade, er durch Natur.`, status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Wächter der koptischen Lehre',
      text: `Papst Schenuda III. hielt den Begriff „Vergöttlichung" für missverständlich und warnte in seinen Vorträgen davor, aus Stellen wie 2 Petr 1,4 eine Teilhabe des Menschen an der Gottheit selbst abzuleiten. Für ihn bedeutet die Teilhabe an der göttlichen Natur, am Wirken des Heiligen Geistes, an Heiligkeit und an Gottes Gaben teilzuhaben. Gerade die HLT-Lehre zeigt, wovor er warnte: Wo der Unterschied zwischen Schöpfer und Geschöpf verschwimmt, kann der Mensch sich am Ende selbst zum Gott erklären.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vorträge zur Frage der „Vergöttlichung des Menschen"', quote: `Teilhabe am Wirken des Geistes, nicht an der Gottheit.`, status: 'unverified', note: 'Genaue Fundstellen vor Zitat prüfen.' }],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als patristischer Lehrer des geistlichen Lebens',
      text: `Matta el-Meskeen schöpfte aus Athanasius und Kyrill und sprach mit ihnen von der Vergöttlichung als dem Ziel des Lebens in Christus: Der Mensch wird durch die Gnade des Geistes in die Gemeinschaft mit Gott hineingenommen und verwandelt. Doch auch bei ihm ist diese Gemeinschaft Geschenk, empfangen in Demut, Gebet und Sakramenten – das Gegenteil eines Weges zur eigenen Gottheit. Seine Theologie bleibt Anbetung, nicht Selbsterhöhung.`,
      sources: [{ kind: 'koptisch', author: 'Vater Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben; Schriften zu Athanasius', quote: `Gemeinschaft mit Gott als Gnadengeschenk im Geist.`, status: 'unverified', note: 'Genaue Fundstellen vor Zitat prüfen.' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Autor, den HLT-Redner gern zitieren',
      text: `Lewis schrieb, Gott wolle uns zu „Göttern und Göttinnen" machen, zu strahlenden, unsterblichen Geschöpfen – ein beliebtes Zitat in HLT-Ansprachen. Doch Lewis spricht durchgehend von **Geschöpfen**: Gott verwandelt uns, damit wir seine Herrlichkeit widerspiegeln wie ein Spiegel das Licht. Der Unterschied zwischen dem Schöpfer, der aus sich selbst ist, und dem Geschöpf, das alles empfängt, ist für Lewis die Grundtatsache des Universums.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (dt. Pardon, ich bin Christ)', ref: 'Buch IV, Kap. 9', year: '1952', quote: `Gott will uns zu strahlenden, unsterblichen Geschöpfen machen, die seine Herrlichkeit widerspiegeln.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'vaeter-lehrten-theosis',
      objection: `Eure eigenen Väter lehrten Vergöttlichung! Athanasius sagt: Gott wurde Mensch, damit der Mensch Gott werde. Das ist genau unsere Lehre – ihr habt sie nur vergessen.`,
      objectionBy: 'HLT-Apologeten (vgl. Gospel Topics Essay „Becoming Like God")',
      answer: `Athanasius sagt das – aber im selben Atemzug sagt er, dass der Sohn **von Natur** Gott ist und wir es **aus Gnade** werden, als Geschöpfe, die aus dem Nichts geschaffen sind. Für ihn war Gott nie ein Mensch, bevor er in Christus Mensch wurde, und kein Erlöster wird je angebetet. Er würde Joseph Smiths Satz „Gott war einst, wie wir jetzt sind" als Arianismus in Reinform verurteilen.`,
      followUps: [
        {
          id: 'nur-wortstreit',
          objection: `Das ist doch nur ein Wortstreit. Ihr sagt „Teilhabe", wir sagen „Erhöhung" – gemeint ist dasselbe.`,
          objectionBy: 'Stephen E. Robinson',
          answer: `Drei Fragen zeigen, dass es kein Wortstreit ist. Erstens: War Gott jemals nicht Gott? Zweitens: Ist Gott Schöpfer aus dem Nichts, oder sind Materie und Intelligenz ewig neben ihm? Drittens: Werden Erlöste selbst angebetet und regieren eigene Welten? Die Väter antworten nein, ja, nein – die HLT-Lehre ja, nein, ja. Das ist nicht derselbe Glaube mit anderen Worten.`,
          followUps: [
            {
              id: 'inkarnation-gott-mensch',
              objection: `Aber ihr glaubt doch selbst, dass Gott Mensch wurde – Jesus! Also war Gott ein Mensch wie wir.`,
              objectionBy: 'HLT-Missionare',
              answer: `Die Richtung ist entscheidend: Der ewige Gott **nahm** in der Zeit unser Menschsein **an**, ohne aufzuhören, Gott zu sein (Joh 1,14; Phil 2,6–7). Die HLT-Lehre sagt das Gegenteil: Ein Mensch **wurde** durch Fortschritt zu Gott. Die koptische Liturgie bekennt am Ende: Er hat das Menschsein mit seiner Gottheit geeint „ohne Vermischung, ohne Vermengung und ohne Verwandlung" – Gott bleibt Gott.`,
              followUps: [
                {
                  id: 'vater-hat-koerper',
                  objection: `Jesus sagte nach der Auferstehung: „Ein Geist hat nicht Fleisch und Bein, wie ihr seht, dass ich habe" (Lk 24,39). Gott hat also einen Körper – wie LuB 130,22 sagt.`,
                  objectionBy: 'HLT-Missionare',
                  answer: `Lk 24,39 spricht vom auferstandenen, menschgewordenen **Sohn** – sein Leib ist das angenommene Menschsein. Über den Vater sagt Jesus: „Gott ist Geist" (Joh 4,24); Paulus nennt ihn den „unsichtbaren Gott" (Kol 1,15), „den kein Mensch gesehen hat noch sehen kann" (1 Tim 6,16). Und Gott selbst sagt zu Mose: „Kein Mensch wird leben, der mich sieht" (Ex 33,20).`,
                  questionsBack: [`Wenn der Vater einen Körper „so fühlbar wie der eines Menschen" hat – wie kann ihn dann „kein Mensch sehen" (1 Tim 6,16)?`],
                },
              ],
            },
          ],
        },
        {
          id: 'schenuda-gegen-theosis',
          objection: `Selbst euer Papst Schenuda III. hat die Theosis bekämpft, während Matta el-Meskeen sie lehrte. Ihr seid euch untereinander gar nicht einig.`,
          objectionBy: 'HLT-Apologeten / kritische Beobachter',
          answer: `Das stimmt – in der koptischen Kirche wurde um den Begriff gerungen, und Papst Schenuda hielt ihn für missverständlich. Aber beachte, worüber beide einig waren: Der Mensch wird nie Gott dem Wesen nach, Gott war nie ein Mensch vor der Menschwerdung, und es gibt nur einen ewigen Schöpfer. Gerade die HLT-Lehre zeigt, wovor Papst Schenuda warnte. Unser Streit war, wie vorsichtig man ein Wort gebraucht – nicht, ob es mehrere Götter gibt.`,
        },
      ],
    },
    {
      id: 'jes-43-nur-diese-welt',
      objection: `Jes 43,10 meint nur: Für **uns** gibt es keinen anderen Gott. Andere Götter regieren andere Welten – davon spricht Jesaja nicht.`,
      objectionBy: 'HLT-Apologeten',
      answer: `Jesaja sagt nicht „für euch", sondern absolut: „Ist auch ein Gott außer mir? … ich weiß ja **keinen**" (Jes 44,8). Wenn der allwissende Gott keinen anderen Gott kennt, gibt es keinen. Und 1 Kor 8,5–6 spricht von „sogenannten" Göttern (*legomenoi*) – nicht von echten Göttern anderer Welten.`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '8,5–6', quote: `Und wiewohl es sind, die Götter genannt werden, es sei im Himmel oder auf Erden … so haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen HERRN, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'ihr-seid-goetter',
          objection: `Jesus selbst zitiert Ps 82: „Ihr seid Götter" (Joh 10,34). Also können Menschen Götter sein.`,
          objectionBy: 'HLT-Missionare',
          answer: `Lies Ps 82 weiter: „Ihr werdet sterben wie Menschen und wie ein Tyrann zugrunde gehen" (82,7). Gemeint sind ungerechte Richter, die Gottes Amt ausübten – mit bitterer Ironie. Jesus argumentiert vom Kleineren zum Größeren: Wenn schon diese Richter so heißen, darf der vom Vater Gesandte erst recht Sohn Gottes heißen. Er verheißt niemandem, ein Gott zu werden.`,
          followUps: [
            {
              id: 'miterben-christi',
              objection: `Wir sind „Miterben Christi" (Röm 8,17) – wir erben alles, was der Vater hat, also auch das Gottsein.`,
              objectionBy: 'HLT-Missionare',
              answer: `Wir erben durch **Annahme an Kindes statt** (Röm 8,15), nicht durch Natur – Herrlichkeit, Reich und ewiges Leben, nicht Gottes Wesen. Die Offenbarung beschreibt das Erbe: „Wer überwindet, der wird es alles ererben, und ich werde sein Gott sein, und er wird mein Sohn sein" (Offb 21,7). Auch im Erbe bleibt Gott **unser** Gott, und „seine Knechte werden ihm dienen" (22,3).`,
              sources: [{ kind: 'bibel', work: 'Offenbarung', ref: '21,7', quote: `Wer überwindet, der wird es alles ererben, und ich werde sein Gott sein, und er wird mein Sohn sein.`, translation: 'Luther 1912', status: 'verbatim' }],
            },
          ],
        },
      ],
    },
    {
      id: 'keine-offizielle-lehre',
      objection: `Das ist keine zentrale Lehre mehr. Präsident Hinckley sagte 1997 in einem Interview, er wisse nicht, ob wir das so lehren oder betonen.`,
      objectionBy: 'HLT-Mitglieder',
      answer: `Präsident Hinckley wurde tatsächlich so zitiert und hat danach auf der Generalkonferenz klargestellt, dass er die Lehre nicht leugne. Lehre und Bündnisse 132,20 steht weiterhin im Kanon: „Dann werden sie Götter sein." Und der offizielle Essay „Becoming Like God" (2014) bekräftigt die Erhöhung. Wenn die Lehre falsch ist, sollte man sie öffentlich verwerfen, nicht nur weniger betonen.`,
      sources: [{ kind: 'gegner', work: 'Lehre und Bündnisse', ref: '132,20', quote: `Dann werden sie Götter sein, weil sie kein Ende haben.`, original: `Then shall they be gods, because they have no end`, translation: 'eigene Übersetzung', status: 'verbatim' }],
      followUps: [
        {
          id: 'egal-glauben-an-jesus',
          objection: `Ist doch egal – wichtig ist, dass wir wie ihr an Jesus Christus glauben.`,
          objectionBy: 'HLT-Missionare',
          answer: `Die Frage ist, **welchen** Jesus (2 Kor 11,4). In der HLT-Lehre ist Jesus der erstgeborene Geistsohn himmlischer Eltern, ein Bruder aller Geister – auch Luzifers –, der zum Gott fortschritt. Die Bibel und die Kirche bekennen ihn als ewigen Sohn, durch den alles geschaffen ist (Joh 1,3), „wahrer Gott vom wahren Gott". Derselbe Name, aber eine andere Person.`,
          followUps: [
            {
              id: 'ihr-sprecht-uns-christsein-ab',
              objection: `Ihr sprecht uns das Christsein ab. Das ist lieblos – wir leben unseren Glauben ernsthafter als viele Christen.`,
              objectionBy: 'HLT-Mitglieder',
              answer: `Ich bewundere euer Familienleben, eure Hilfsbereitschaft und eure Disziplin – das sage ich ehrlich. Es geht nicht um den Wert eines Menschen, sondern um eine Definition: Seit Nizäa bekennen Christen den einen, ewigen Gott und Christus als wahren Gott. Übrigens sagt die HLT-Lehre selbst, alle anderen Kirchen seien abgefallen und ihre Bekenntnisse ein Greuel. Wir können einander ehrlich sagen, wo wir uns unterscheiden, und trotzdem respektvoll bleiben – so wie Blomberg und Robinson es vorgemacht haben.`,
              questionsBack: [`Wenn deine Kirche lehrt, alle anderen Bekenntnisse seien ein Greuel – ist es dann lieblos, wenn ich ehrlich sage, wo ich widerspreche?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `War Gott jemals nicht Gott? Wie passt deine Antwort zu Ps 90,2?`,
    `Wenn Gott keinen anderen Gott kennt (Jes 44,8) – wie kann es Götter vor oder nach ihm geben?`,
    `Ist die Materie ewig oder hat Gott sie aus dem Nichts geschaffen?`,
    `Wird ein erhöhter Mensch in der Ewigkeit angebetet werden?`,
    `Wer hat Gott Vater zum Gott gemacht, wenn er einst ein Mensch war?`,
  ],
  avoid: [
    `Die orthodoxe Theosis verschweigen oder leugnen – ein informierter Mormone kennt Athanasius und wird dir Unkenntnis vorwerfen. Erkläre den Unterschied.`,
    `Behaupten, Matta el-Meskeen habe ein Gottwerden dem Wesen nach gelehrt – das ist falsch und unfair.`,
    `Sich über Vorstellungen wie „Kolob" oder „himmlische Mutter" lustig machen – bleib bei der Gotteslehre.`,
  ],
  concessions: [
    `Die Kirchenväter sprechen tatsächlich von „Vergöttlichung" (Theosis), und HLT-Apologeten zitieren sie korrekt im Wortlaut.`,
    `Innerhalb der koptischen Kirche wurde der Gebrauch des Begriffs kontrovers diskutiert.`,
    `Die Bibel verwendet anthropomorphe Sprache für Gott und nennt in Ps 82 Menschen „Götter".`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig L. Blomberg / Stephen E. Robinson', work: 'How Wide the Divide?', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Norman L. Russell', work: 'The Doctrine of Deification in the Greek Patristic Tradition', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis J. Beckwith / Carl Mosser / Paul Owen (Hg.)', work: 'The New Mormon Challenge', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Mormonen', 'Gotteslehre', 'Theosis', 'Vergöttlichung', 'Athanasius', 'Monotheismus'],
  related: [
    'mormonen/grosser-abfall',
    'hinduismus/atman-ist-brahman',
    'esoterik-new-age/christusbewusstsein',
    'islam-trinitaet/trinitaet-ist-schirk',
  ],
};

export default claim;
