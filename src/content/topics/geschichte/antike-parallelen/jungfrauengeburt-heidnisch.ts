import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jungfrauengeburt-heidnisch',
  title: `„Die Jungfrauengeburt ist ein heidnischer Mythos."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'How Jesus Became God (2014)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Kelsos', role: 'Heidnischer Philosoph (2. Jh.)', work: 'Wahres Wort (überliefert bei Origenes, Contra Celsum)' },
    { name: 'Andrew T. Lincoln', role: 'Neutestamentler, Gloucestershire (christlich-kritisch)', work: 'Born of a Virgin? (2013)' },
  ],
  steelman: `Die Antike war voller Geschichten von Helden mit göttlichem Vater: Perseus, Sohn des Zeus und der Jungfrau Danaë; Herakles; Alexander der Große, dessen Mutter Olympias angeblich von Zeus empfing; Augustus, den Apollon in Gestalt einer Schlange gezeugt haben soll; selbst Platon galt manchen als Sohn Apollons. Eine göttliche Geburt war das übliche Ehrenzeichen großer Männer. Matthäus und Lukas haben Jesus diese Ehre verliehen – gestützt auf eine Fehlübersetzung von Jes 7,14, wo das hebräische *ʿalmāh* „junge Frau" bedeutet. Paulus und Markus, die ältesten Zeugen, wissen nichts von einer Jungfrauengeburt. Schon der Heide Kelsos hielt sie für eine Kopie der Danaë-Sage.`,
  biblical: {
    summary: `Matthäus und Lukas berichten unabhängig voneinander – mit sehr unterschiedlichen Erzählungen, Stammbäumen und Blickwinkeln (Josef bzw. Maria) –, dass Maria Jesus ohne Mann empfing, durch das Wirken des Heiligen Geistes. Beide Berichte sind tief jüdisch geprägt; Lukas 1–2 ist voller Anklänge an die Samuelgeschichte und an die Psalmen. Es gibt keinerlei erotisches Element: Der Geist „überschattet" Maria – dasselbe Wort, mit dem die Wolke der Herrlichkeit Gottes das Zelt der Begegnung erfüllt (Ex 40,35 LXX). Es geht um Gottes Schöpferkraft, nicht um eine Verbindung zwischen einem Gott und einer Frau.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '1,34–35', quote: `Da sprach Maria zu dem Engel: Wie soll das zugehen, da ich von keinem Manne weiß? Der Engel antwortete und sprach zu ihr: Der heilige Geist wird über dich kommen, und die Kraft des Höchsten wird dich überschatten; darum auch das Heilige, das von dir geboren wird, wird Gottes Sohn genannt werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '1,18', quote: `Die Geburt Christi war aber also getan. Als Maria, seine Mutter, dem Joseph vertraut war, ehe er sie heimholte, erfand sich's, daß sie schwanger war von dem heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '6,3', quote: `Ist er nicht der Zimmermann, Marias Sohn?`, status: 'paraphrase', note: 'Ungewöhnlich: Ein Mann wurde gewöhnlich nach dem Vater benannt.' },
      { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllt ward, sandte Gott seinen Sohn, geboren von einem Weibe.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt Christus als „Fleisch geworden aus dem Heiligen Geist und aus Maria, der Jungfrau" (Nizäno-Konstantinopolitanum) und ehrt Maria als Theotokos und immerwährende Jungfrau. Die Jungfrauengeburt ist kein Ehrentitel für einen großen Menschen, sondern Zeichen der Menschwerdung: Der ewige Sohn, der keinen Anfang hat, nimmt aus der Jungfrau die menschliche Natur an. Deshalb verteidigte der hl. Kyrill von Alexandrien in Ephesus (431) den Titel „Gottesgebärerin" – er sagt etwas über die Person Christi: Der von Maria Geborene ist Gott, der Logos selbst.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `… der für uns Menschen und um unseres Heiles willen vom Himmel herabgestiegen ist und Fleisch angenommen hat aus dem Heiligen Geist und Maria, der Jungfrau, und Mensch geworden ist.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', year: '430', quote: `Der Logos hat sich mit dem aus der heiligen Jungfrau angenommenen Fleisch hypostatisch geeint; darum nennen die Väter die heilige Jungfrau Gottesgebärerin.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '19,1', year: 'ca. 110', quote: `Dem Fürsten dieser Welt blieben die Jungfräulichkeit Marias und ihr Gebären verborgen, ebenso der Tod des Herrn.`, status: 'paraphrase', note: 'Früher Beleg (um 110), unabhängig von Matthäus und Lukas formuliert.' },
    ],
  },
  opposingView: {
    summary: `Viele kritische Exegeten halten die Kindheitsgeschichten für theologische Erzählungen; manche vermuten Einfluss hellenistischer Göttergeburtssagen, andere jüdischer Motive (wunderbare Geburten bei Isaak, Samuel). Der katholische Exeget Raymond Brown kam in seiner umfassenden Studie zu dem Ergebnis, dass die heidnischen Geschichten keine echten Parallelen zur jungfräulichen Empfängnis bieten, weil es sich um göttliche Zeugungen durch geschlechtliche Vereinigung oder deren Ersatz handelt. Historisch hielt er die Frage mit wissenschaftlichen Mitteln für nicht abschließend entscheidbar, betonte aber, dass die Parallelenthese sie nicht erklärt.`,
    sources: [
      { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1977 (erw. 1993)', quote: `Die nichtjüdischen Parallelen sind keine jungfräulichen Empfängnisse im Sinne von Matthäus und Lukas, sondern Formen der heiligen Hochzeit, bei der ein göttliches männliches Wesen eine Frau durch Geschlechtsverkehr oder eine Ersatzform davon befruchtet.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Andrew T. Lincoln', work: 'Born of a Virgin? Reconceiving Jesus in the Bible, Tradition, and Theology', year: '2013', quote: `Die Jungfrauengeburt sei theologisch zu verstehen; die historische Grundlage sei schwach.`, status: 'paraphrase', note: 'Lincoln ist christlicher Theologe – ehrlich nennen.' },
      { kind: 'sonstiges', author: 'Plutarch', work: 'Alexander', ref: '2–3', year: 'ca. 100 n. Chr.', quote: `Erzählungen über einen Blitz, der Olympias' Schoß traf, und eine Schlange an ihrer Seite – Plutarch berichtet auch, Olympias selbst habe solche Gerüchte zurückgewiesen.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Sueton', work: 'Augustus', ref: '94,4', year: 'ca. 120 n. Chr.', quote: `Atia sei im Apollontempel eingeschlafen, eine Schlange sei zu ihr gekommen; zehn Monate später sei Augustus geboren worden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Schau dir die heidnischen Geschichten genau an: Zeus begehrt Danaë und kommt als Goldregen zu ihr, Apollon nähert sich Atia als Schlange, Olympias' Schoß wird von einem Blitz getroffen. Das sind Zeugungen durch einen Gott – meist mit verheirateten Frauen und immer mit körperlicher Vereinigung oder deren Ersatz. Bei Matthäus und Lukas gibt es nichts davon: Gottes Geist schafft neues Leben, wie am Anfang der Schöpfung. Selbst der katholische Gelehrte Raymond Brown, der kritisch arbeitete, fand keine echte Parallele. Und die ersten Christen waren Juden, für die Göttergeschichten Götzendienst waren.`,
  keyPoints: [
    `**Heidnische Göttergeburten sind sexuell:** Zeus und Danaë, Apollon und Atia, Zeus und Olympias – ein Gott zeugt mit einer Frau (heilige Hochzeit). Das Evangelium kennt keinen göttlichen Liebhaber.`,
    `**Der Inhalt ist einzigartig:** Kein Halbgott entsteht, sondern der ewige Sohn nimmt die menschliche Natur an.`,
    `**Jüdisches Milieu:** Matthäus ist das jüdischste Evangelium, Lk 1–2 ist voller Anklänge an das AT; Göttersagen waren für Juden Götzendienst.`,
    `**Zwei unabhängige Zeugen:** Matthäus und Lukas unterscheiden sich stark, stimmen aber im Kern überein; Ignatius (um 110) setzt die Jungfrauengeburt als bekannt voraus.`,
    `**Frühe Spuren:** „Marias Sohn" (Mk 6,3) und der Vorwurf der unehelichen Geburt (vgl. Joh 8,41; Kelsos) zeigen, dass Jesu Geburt früh als ungewöhnlich galt.`,
    `**Jes 7,14 war nicht der Auslöser:** Das Judentum erwartete keinen jungfräulich geborenen Messias; Lukas erzählt ohne Jesaja-Zitat.`,
  ],
  voices: [
    {
      person: 'raymond-brown',
      role: 'als Exeget der Kindheitsgeschichten',
      text: `Brown hat die Kindheitsgeschichten in einem über 700 Seiten starken Kommentar Vers für Vers untersucht und dabei alle vorgeschlagenen religionsgeschichtlichen Parallelen geprüft. Sein Ergebnis: Die heidnischen Erzählungen handeln von göttlichen Zeugungen, bei denen ein männliches göttliches Wesen eine Frau körperlich befruchtet. Bei Matthäus und Lukas gibt es dagegen keine göttliche Partnerschaft, sondern das schöpferische Wirken des Geistes. Brown hielt es deshalb für unwahrscheinlich, dass die Jungfrauengeburt aus heidnischen Vorbildern entstanden ist. Er war ein vorsichtiger, kritischer Exeget – gerade deshalb hat sein Urteil Gewicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1993', quote: `Prüfung der religionsgeschichtlichen Erklärungen der jungfräulichen Empfängnis.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als Apologet im Gespräch mit dem Juden Tryphon',
      text: `Schon Tryphon, Justins jüdischer Gesprächspartner, brachte den Einwand vor: Die Griechen erzählen, Perseus sei von der Jungfrau Danaë geboren worden, als Zeus als Goldregen zu ihr kam – die Christen sollten sich schämen, Ähnliches zu behaupten. Justin antwortet, dass die Prophetie die Jungfrauengeburt angekündigt habe und dass zwischen der begehrlichen Zeugung der Mythen und der heiligen Empfängnis durch Gottes Kraft ein Wesensunterschied bestehe. Der Einwand ist also fast 1900 Jahre alt – und die Antwort auch.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '67; 70', year: 'ca. 160', quote: `Tryphon vergleicht die Jungfrauengeburt mit der Danaë-Sage; Justin weist auf die Prophetie und den Unterschied zur Begierde der Göttermythen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Verteidiger der apostolischen Überlieferung',
      text: `Irenäus kannte bereits die jüdischen Übersetzungen des 2. Jahrhunderts (Theodotion, Aquila), die in Jes 7,14 „junge Frau" statt „Jungfrau" übersetzten. Er verteidigt die ältere Übersetzung der Septuaginta, die jüdische Gelehrte lange vor Christus angefertigt hatten – sie konnten nicht von christlichen Interessen beeinflusst sein. Für Irenäus ist die Jungfrauengeburt Teil des Heilsplans: Wie Adam aus jungfräulicher Erde gebildet wurde, so nimmt der neue Adam sein Fleisch aus der Jungfrau.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,21,1–10', year: 'ca. 180', quote: `Verteidigung der Septuaginta-Lesart „Jungfrau" gegen Theodotion und Aquila; Christus als neuer Adam aus der Jungfrau.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der Menschwerdung',
      text: `Für Kyrill ist die Jungfrauengeburt untrennbar mit der Einheit Christi verbunden: Der aus Maria Geborene ist nicht ein Mensch, auf den später eine Gottheit herabkam, sondern der ewige Logos selbst, der aus ihr Fleisch angenommen hat. Darum ist Maria Theotokos. Ein heidnischer Halbgott ist halb Gott, halb Mensch, eine Mischung; Christus ist nach Kyrill ganz Gott und ganz Mensch, ohne Vermischung und ohne Trennung – eine Aussage, für die es in der Mythologie kein Gegenstück gibt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Briefe an Nestorius; Über den rechten Glauben', year: '429–431', quote: `Der Logos ist aus der Jungfrau Fleisch geworden; deshalb ist sie Gottesgebärerin.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'goettersoehne-ueberall',
      objection: `Perseus, Herakles, Alexander, Augustus, Platon – göttliche Geburten gab es überall. Das war die Standardehre für große Männer, und die Christen haben sie Jesus verliehen.`,
      objectionBy: 'Richard Carrier',
      answer: `In all diesen Geschichten zeugt ein Gott mit einer Frau – Zeus begehrt Danaë, Apollon kommt als Schlange zu Atia, Olympias wird vom Blitz getroffen; oft sind die Frauen verheiratet. Das ist eine „heilige Hochzeit". Bei Matthäus und Lukas gibt es keinen göttlichen Liebhaber und keinen Halbgott, sondern Gottes Geist, der schöpferisch wirkt, wie über den Wassern am Anfang. Raymond Brown hat alle Parallelen geprüft und keine echte gefunden.`,
      followUps: [
        {
          id: 'danae-goldregen',
          objection: `Danaë war Jungfrau, und Zeus kam als Goldregen – das ist doch nicht sexuell, sondern genauso übernatürlich wie bei Maria.`,
          objectionBy: 'Richard Carrier',
          answer: `Die antiken Autoren verstanden die Geschichte als Liebesabenteuer des Zeus: Er begehrt Danaë und dringt in Gestalt des Goldes zu ihr ein, die bildende Kunst stellt die Szene erotisch dar. Es ist ein Gott, der eine Frau körperlich befruchtet. Lukas dagegen betont Marias Frage, Gottes Schöpferkraft und das Heilige, das geboren wird – ohne jedes erotische Element, in einem jüdischen Rahmen, in dem solche Göttergeschichten als Götzendienst galten.`,
          followUps: [
            {
              id: 'nur-semantik',
              objection: `Das ist Semantik. In beiden Fällen empfängt eine Jungfrau durch göttliches Eingreifen.`,
              objectionBy: 'Richard Carrier',
              answer: `Nein, der Unterschied liegt im Inhalt: Im Mythos zeugt ein Gott aus Begierde einen Halbgott, der vorher nicht existierte. Im Evangelium nimmt der ewige Sohn, der schon vor aller Zeit ist, durch den Geist aus der Jungfrau die menschliche Natur an. Das eine ist eine Verbindung zweier Wesen, das andere Menschwerdung. Wer beides gleichsetzt, muss die Pointe beider Erzählungen ignorieren.`,
            },
          ],
        },
      ],
    },
    {
      id: 'jesaja-fehluebersetzung',
      objection: `Die ganze Idee beruht auf einer Fehlübersetzung: ʿalmāh in Jes 7,14 heißt „junge Frau". Matthäus las die griechische Übersetzung parthenos und machte daraus eine Jungfrauengeburt.`,
      objectionBy: 'Tovia Singer',
      answer: `Die Übersetzung parthenos stammt von jüdischen Gelehrten, Jahrhunderte vor Christus – keine christliche Erfindung. Vor allem aber: Das Judentum erwartete keinen jungfräulich geborenen Messias. Niemand hätte aus Jes 7,14 eine solche Geschichte erfunden. Es ist umgekehrt: Die Überlieferung von der wunderbaren Empfängnis lag vor, und Matthäus fand dann in Jesaja einen Text, der sie deutet. Lukas erzählt dieselbe Sache, ohne Jesaja überhaupt zu zitieren.`,
      followUps: [
        {
          id: 'paulus-markus-schweigen',
          objection: `Paulus und Markus, die ältesten Quellen, erwähnen die Jungfrauengeburt nicht. Sie ist eine spätere Legende.`,
          objectionBy: 'Bart Ehrman',
          answer: `Ein Argument aus dem Schweigen: Paulus erwähnt auch keine Wunder Jesu und kaum Gleichnisse, Markus beginnt erst mit der Taufe. Aber es gibt Spuren: Markus nennt Jesus „Marias Sohn" (6,3), was für einen Mann ungewöhnlich war; Paulus sagt „geboren von einer Frau" (Gal 4,4). Matthäus und Lukas sind voneinander unabhängig und setzen eine ältere Überlieferung voraus, und Ignatius behandelt sie um 110 als bekannte Grundwahrheit.`,
          followUps: [
            {
              id: 'panthera-unehelich',
              objection: `Vielleicht war die Wahrheit eine uneheliche Geburt – Kelsos nennt einen römischen Soldaten Panthera als Vater. Die Jungfrauengeburt sollte das vertuschen.`,
              objectionBy: 'Kelsos',
              answer: `Interessanterweise bestätigt der Vorwurf, dass Jesu Geburt früh als ungewöhnlich bekannt war – vgl. die spitze Bemerkung „Wir sind nicht unehelich geboren" (Joh 8,41). Die Gegner reagierten auf eine christliche Behauptung, die es also schon gab. Damit bleiben zwei Optionen: Unehelichkeit oder jungfräuliche Empfängnis. Jesu Familie – sein Bruder Jakobus leitete die Jerusalemer Gemeinde – kannte die Umstände; sie hätte eine Vertuschung kaum mitgetragen und dafür ihr Leben riskiert.`,
              sources: [
                { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos', ref: 'I,28; I,32', year: 'ca. 248', quote: `Kelsos lässt einen Juden behaupten, Jesu Mutter sei wegen Ehebruchs mit einem Soldaten namens Panthera verstoßen worden.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hellenistisches-publikum',
      objection: `Matthäus und Lukas schrieben für ein griechisch-römisches Publikum, das von großen Männern eine göttliche Geburt erwartete. Sie haben das Motiv angepasst.`,
      objectionBy: 'Dan McClellan',
      answer: `Dann hätten sie das Motiv sehr ungeschickt angepasst: Matthäus ist das jüdischste Evangelium, und Lukas 1–2 klingt wie das Alte Testament – Hannas Lied wird zum Magnificat, Zacharias und Elisabet sind Priesterfamilie. Es fehlt alles, was ein Grieche erwartet hätte: der göttliche Liebhaber, der Halbgott, die Heldentaten. Ein Motiv, das für Heiden angepasst wurde, sähe heidnischer aus.`,
      followUps: [
        {
          id: 'philo-isaak',
          objection: `Auch der jüdische Philosoph Philo sagt, Gott habe Isaak und andere Patriarchensöhne „gezeugt". Die Idee gab es also im hellenistischen Judentum.`,
          objectionBy: 'Dan McClellan',
          answer: `Philo spricht allegorisch: Die Frauen der Patriarchen stehen für Tugenden, die Gott in der Seele hervorbringt. Er bestreitet nicht, dass Abraham Isaaks Vater war – es ist Philosophie, kein Bericht. Ehrlich ist: Das zeigt, dass hellenistische Juden bildlich von göttlicher Zeugung sprechen konnten. Matthäus und Lukas erzählen aber ein konkretes Ereignis mit Ort, Zeit und Personen und betonen ausdrücklich, dass kein Mann beteiligt war.`,
          sources: [
            { kind: 'juedisch', author: 'Philo von Alexandrien', work: 'Über die Cherubim (De Cherubim)', ref: '40–52', year: '1. Jh. n. Chr.', quote: `Allegorische Deutung: Gott bewirkt in den Tugenden, für die die Frauen der Patriarchen stehen, die Empfängnis.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'buddha-krishna',
      objection: `Auch Buddha und Krishna wurden von Jungfrauen geboren. Das ist ein universelles Motiv.`,
      objectionBy: 'Esoterische Literatur (z. B. Kersey Graves)',
      answer: `Buddhas Mutter Maya war mit König Suddhodana verheiratet; die Legende vom weißen Elefanten, der im Traum in ihre Seite eingeht, steht in Quellen wie dem Buddhacarita aus dem 1./2. Jahrhundert n. Chr. Krishna ist das achte Kind von Devaki und Vasudeva. Keine dieser Geschichten erzählt von einer Jungfrauengeburt im Sinne der Evangelien – und das Buddhacarita ist jünger als die Evangelien.`,
    },
  ],
  questionsToAsk: [
    `Welche heidnische Erzählung kennst du, in der ein Gott ohne jede körperliche Verbindung in einer Jungfrau Leben schafft?`,
    `Warum hätten jüdische Autoren eine heidnische Göttergeschichte übernehmen sollen, die sie als Götzendienst verabscheuten?`,
    `Wenn Jes 7,14 der Auslöser war – warum erwartete dann kein Jude einen jungfräulich geborenen Messias?`,
    `Warum nennt Markus Jesus „Marias Sohn" statt „Josefs Sohn"?`,
  ],
  avoid: [
    `Behaupten, die Jungfrauengeburt sei historisch „beweisbar" – sie ist ein Glaubensgegenstand, für den man Plausibilitätsgründe nennen kann.`,
    `Jes 7,14 als alleinigen Beweis verwenden und das hebräische ʿalmāh als eindeutiges „Jungfrau" ausgeben – das Wort bedeutet „junge Frau im heiratsfähigen Alter".`,
  ],
  concessions: [
    `Die Antike kannte viele Geschichten über göttliche Abstammung großer Männer.`,
    `Paulus und Markus erwähnen die Jungfrauengeburt nicht ausdrücklich.`,
    `Auch manche christliche Exegeten (Lincoln) halten die Historizität für unsicher.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1993', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. Gresham Machen', work: 'The Virgin Birth of Christ', year: '1930', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Über die Einheit Christi', year: 'ca. 437', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Jungfrauengeburt', 'Theotokos', 'Mythen', 'Danaë', 'Jesaja 7'],
  related: ['antike-parallelen/jesus-kopie-horus-mithras', 'judentum-messias/jesaja-7-14-almah', 'antike-parallelen/sterbende-auferstehende-goetter'],
};

export default claim;
