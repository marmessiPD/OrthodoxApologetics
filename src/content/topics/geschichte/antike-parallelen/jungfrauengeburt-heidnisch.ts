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
              followUps: [
                {
                  id: 'augustus-propaganda',
                  objection: `Dann nimm Augustus: Seine Mutter Atia soll im Apollontempel von einer Schlange empfangen haben. Lukas nennt Jesus „Retter", spricht von „Frieden auf Erden" und datiert die Geburt mit einem Erlass des Augustus. Das ist Kaiserpropaganda, christlich umgeschrieben.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Dass Lukas Jesus bewusst dem Kaiser gegenüberstellt, sehe ich genauso – das betonen auch N. T. Wright und John Dominic Crossan. Aber Gegenüberstellung ist das Gegenteil von Übernahme: Lukas sagt, der wahre Retter liegt nicht im Palast, sondern in einer Krippe. Seine Titel stammen aus Jesaja („ein Kind ist uns geboren … Friedefürst", Jes 9,5). Und die Atia-Geschichte ist eindeutig körperlich: Die Schlange hinterlässt ein Mal auf ihrem Leib, und Atia war verheiratet. Lukas' Erzählung hat damit nur die Bühne gemeinsam.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Sueton', work: 'Leben des Augustus (Divus Augustus)', ref: '94,4', year: 'ca. 121', quote: `Nach Asklepiades von Mendes sei Atia im Apollontempel eingeschlafen, eine Schlange sei zu ihr gekommen; danach habe sie ein schlangenförmiges Mal am Körper getragen, und im zehnten Monat sei Augustus geboren worden.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Jesaja', ref: '9,5', quote: `Denn uns ist ein Kind geboren, ein Sohn ist uns gegeben … und er heißt Wunderbar, Rat, Kraft, Held, Ewig-Vater, Friedefürst.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [`Ist eine Erzählung, die den Kaiser bewusst entthront, eine Kopie seiner Propaganda – oder ihre Widerlegung?`],
                },
              ],
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
              followUps: [
                {
                  id: 'pantera-grabstein',
                  objection: `Es gibt sogar einen Grabstein: Tiberius Iulius Abdes Pantera, ein Bogenschütze aus Sidon, diente zur Zeit Jesu und starb in Germanien. James Tabor hält es für möglich, dass er Jesu Vater war.`,
                  objectionBy: 'James Tabor',
                  answer: `Der Grabstein aus Bingerbrück ist echt – aber er beweist nur, dass ein Soldat namens Pantera existierte. Der Name war unter Soldaten nicht selten, und nichts verbindet diesen Mann mit Nazareth. Die Panthera-Geschichte taucht erst rund 150 Jahre nach Jesu Geburt bei Kelsos auf, als Polemik gegen eine christliche Behauptung. Viele Forscher vermuten in „Panthera" ein spöttisches Wortspiel mit *parthenos*, Jungfrau. Ein Grabstein plus ein später Spottname ergeben keine historische Vaterschaft.`,
                  detail: `Tabor (*The Jesus Dynasty*, 2006) stellt die Verbindung ausdrücklich als Möglichkeit dar, nicht als Beweis. Für dich wichtig: Selbst diese Hypothese bestätigt, dass Jesu Herkunft schon früh als ungewöhnlich galt – sie bestätigt nicht, dass Christen eine heidnische Göttergeburt übernahmen. Die beiden Einwände („heidnischer Mythos" und „uneheliche Geburt") schließen sich gegenseitig aus.`,
                  sources: [
                    { kind: 'gegner', author: 'James D. Tabor', work: 'The Jesus Dynasty', year: '2006', quote: `Der Grabstein des Tiberius Iulius Abdes Pantera als mögliche Spur zur Panthera-Überlieferung.`, status: 'paraphrase' },
                    { kind: 'sonstiges', work: 'Grabstein des Tiberius Iulius Abdes Pantera (gefunden 1859 in Bingerbrück; Römerhalle Bad Kreuznach)', year: '1. Jh. n. Chr.', quote: `Grabinschrift eines Bogenschützen aus Sidon in römischen Diensten.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Vertrittst du nun, dass die Jungfrauengeburt aus heidnischen Mythen stammt – oder dass sie eine uneheliche Geburt verdecken sollte? Beides zugleich erklärt sich gegenseitig weg.`],
                },
              ],
            },
          ],
        },
        {
          id: 'jes-7-ahas-kontext',
          objection: `Jesaja 7,14 war ein Zeichen für König Ahas im 8. Jahrhundert v. Chr. Das Kind sollte damals geboren werden, bevor die beiden feindlichen Könige fallen (7,16). Mit Jesus hat das nichts zu tun.`,
          objectionBy: 'Tovia Singer',
          answer: `Richtig, das Zeichen hatte einen unmittelbaren Horizont – das sagen auch viele christliche Ausleger. Aber Jesaja verknüpft den Immanuel mit dem Kind aus Kapitel 9, das „starker Gott" heißt und auf Davids Thron ewig herrscht (9,5–6), und mit dem Spross aus Isais Stamm (11,1). Die Kapitel 7–11 bilden eine Einheit, die über Ahas hinausweist. Matthäus liest Jes 7,14 in diesem größeren Zusammenhang – und, wie gesagt, er leitet das Ereignis nicht aus dem Vers ab, sondern deutet ein Ereignis mit ihm.`,
          sources: [
            { kind: 'bibel', work: 'Jesaja', ref: '7,14', quote: `Darum so wird euch der Herr selbst ein Zeichen geben: Siehe, eine Jungfrau ist schwanger und wird einen Sohn gebären, den wird sie heißen Immanuel.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'betulah-statt-almah',
              objection: `Hätte Jesaja „Jungfrau" gemeint, hätte er *betulah* geschrieben. *ʿAlmāh* ist schlicht eine junge Frau.`,
              objectionBy: 'Tovia Singer',
              answer: `Auch *betulah* ist nicht eindeutig: Gen 24,16 muss eigens hinzufügen „und kein Mann hatte sie erkannt", und in Joël 1,8 trauert eine *betulah* um den Mann ihrer Jugend. Umgekehrt bezeichnet *ʿalmāh* in keiner einzigen Stelle des AT nachweislich eine verheiratete Frau – Rebekka vor der Ehe (Gen 24,43), Mirjam als Mädchen (Ex 2,8). Darum übersetzten jüdische Gelehrte der Septuaginta mit *parthenos*. Ehrlich ist: Das Wort allein beweist keine Jungfrauengeburt; es schließt sie aber auch nicht aus.`,
              sources: [
                { kind: 'bibel', work: 'Genesis', ref: '24,16', quote: `Und die Dirne war sehr schön von Angesicht, eine Jungfrau, die noch von keinem Manne wusste.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Hebräisch betulah – das Wort braucht hier eine erläuternde Ergänzung.' },
                { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', quote: `Diskussion von ʿalmāh und betulah; ʿalmāh bezeichnet im AT junge, unverheiratete Frauen.`, status: 'paraphrase' },
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
          followUps: [
            {
              id: 'christologie-rueckwaerts',
              objection: `Man sieht die Entwicklung: Zuerst wurde Jesus bei der Auferstehung Sohn Gottes (Röm 1,4), dann bei der Taufe (Markus), dann bei der Empfängnis (Matthäus, Lukas), schließlich präexistent (Johannes). Die Jungfrauengeburt ist nur eine Stufe dieser Legendenbildung.`,
              objectionBy: 'Bart Ehrman',
              answer: `Das Schema scheitert an Paulus: Schon in den 50er-Jahren – vor allen Evangelien – spricht er von Christus, der „in göttlicher Gestalt war" und sich entäußerte (Phil 2,6–7), durch den alles geschaffen ist (1 Kor 8,6), und den Gott „sandte, geboren von einer Frau" (Gal 4,4). Die Präexistenz ist also die *früheste* greifbare Stufe, nicht die späteste. Röm 1,4 spricht von der Einsetzung des Sohnes „in Kraft", nicht von einer Adoption. Larry Hurtado und Richard Bauckham haben gezeigt, wie früh Jesus kultisch verehrt wurde.`,
              voices: [
                {
                  person: 'bauckham',
                  role: 'als Neutestamentler',
                  text: `Bauckham argumentiert, dass die frühesten Christen Jesus in die „göttliche Identität" des einen Gottes Israels einbezogen – etwa, wenn Paulus in 1 Kor 8,6 das Schma Israel aufspaltet und Jesus als den „einen Herrn" nennt, durch den alles ist. Diese „hohe Christologie" ist nach ihm kein Endpunkt einer langen Entwicklung, sondern von Anfang an da.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', quote: `Frühe Christologie der göttlichen Identität: Jesus wird in das Schma einbezogen (1 Kor 8,6).`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllet ward, sandte Gott seinen Sohn, geboren von einem Weibe und unter das Gesetz getan.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'phil-2-adam',
                  objection: `Philipper 2 spricht nicht von Präexistenz, sondern ist Adam-Christologie: Jesus ist der Mensch, der anders als Adam nicht nach Gottgleichheit griff. James Dunn hat das gezeigt.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Dunns Lesart ist eine Minderheitsposition, und sie erklärt das „Sich-Entäußern" und „Den-Menschen-gleich-Werden" (Phil 2,7) schlecht – wer schon Mensch ist, wird nicht erst Menschen gleich. Bemerkenswert: Selbst Bart Ehrman liest Phil 2 als Aussage über ein präexistentes himmlisches Wesen. Wenn also selbst Kritiker die Präexistenz bei Paulus sehen, ist die These einer späten „Aufwärtsentwicklung" bis zur Jungfrauengeburt nicht haltbar.`,
                  sources: [
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Paulus verstand Christus als präexistentes, engelgleiches Himmelswesen, das Mensch wurde (Deutung von Phil 2).`, status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'James D. G. Dunn', work: 'Christology in the Making', year: '1980', quote: `Phil 2,6–11 als Adam-Christologie ohne Präexistenzaussage.`, status: 'paraphrase', note: 'Minderheitsposition, von vielen Exegeten zurückgewiesen.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'buddha-krishna',
      objection: `Auch Buddha und Krishna wurden von Jungfrauen geboren. Das ist ein universelles Motiv.`,
      objectionBy: 'Esoterische Literatur (z. B. Kersey Graves)',
      answer: `Buddhas Mutter Maya war mit König Suddhodana verheiratet; die Legende vom weißen Elefanten, der im Traum in ihre Seite eingeht, steht in Quellen wie dem Buddhacarita aus dem 1./2. Jahrhundert n. Chr. Krishna ist das achte Kind von Devaki und Vasudeva. Keine dieser Geschichten erzählt von einer Jungfrauengeburt im Sinne der Evangelien – und das Buddhacarita ist jünger als die Evangelien.`,
      followUps: [
        {
          id: 'elefant-ohne-verkehr',
          objection: `Aber Maya empfing Buddha ohne Geschlechtsverkehr, durch den weißen Elefanten. Eine übernatürliche Empfängnis ist es trotzdem – und die Überlieferung ist älter als die schriftlichen Fassungen.`,
          objectionBy: 'Esoterische Literatur (z. B. Kersey Graves)',
          answer: `Die ältesten Pali-Texte über Buddhas Geburt (z. B. das Acchariyabbhuta-Sutta, Majjhima-Nikaya 123) erzählen von Wundern bei der Geburt, nennen Maya aber nicht Jungfrau; sie ist die verheiratete Königin. Der Elefantentraum ist ein Vorzeichen, kein Ersatz für die Ehe. Und selbst wenn man ihn als übernatürliche Empfängnis deutet: Wie hätte eine indische Legende zwei judenchristliche Autoren in Palästina erreichen sollen, die sie nirgends erwähnen und deren Erzählungen ganz aus dem AT gespeist sind?`,
          questionsBack: [`Welche Quelle zeigt, dass Matthäus oder Lukas buddhistische Texte kannten?`],
        },
      ],
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
