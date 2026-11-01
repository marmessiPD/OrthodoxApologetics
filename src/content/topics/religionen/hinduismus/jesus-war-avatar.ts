import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-war-avatar',
  title: `„Jesus war ein Avatar oder Yogi wie Krishna."`,
  proponents: [
    { name: 'Swami Vivekananda', role: 'Hindu-Mönch (1863–1902)', work: 'Vortrag „Christ, the Messenger" (Los Angeles 1900)' },
    { name: 'Paramahansa Yogananda', role: 'Yogalehrer, Gründer der Self-Realization Fellowship (1893–1952)', work: 'The Second Coming of Christ (posthum 2004)' },
    { name: 'Deepak Chopra', role: 'Arzt und Autor', work: 'The Third Jesus: The Christ We Cannot Ignore (2008)' },
    { name: 'Swami Prabhavananda', role: 'Mönch des Ramakrishna-Ordens, Vedanta Society of Southern California (1893–1976)', work: 'The Sermon on the Mount According to Vedanta (1963)' },
    { name: 'Mohandas K. Gandhi', role: 'Führer der indischen Unabhängigkeitsbewegung (1869–1948)', work: 'Autobiographie: Die Geschichte meiner Experimente mit der Wahrheit (1927/1929)' },
  ],
  steelman: `Hindus ehren Jesus aufrichtig. Krishna verkündet in der Bhagavad Gita: „Wann immer das Dharma verfällt und das Unrecht überhandnimmt, bringe ich mich selbst hervor … von Zeitalter zu Zeitalter" (4,7–8). Jesus ist ein solcher göttlicher Abstieg – wie Rama, Krishna und der Buddha. Seine Lehre ist zutiefst vedantisch: „Das Reich Gottes ist inwendig in euch" (Lk 17,21), „Ich und der Vater sind eins" (Joh 10,30). Er war ein vollkommen verwirklichter Yogi, der das Christusbewusstsein lebte, das jedem Menschen offensteht. Gandhi hat die Bergpredigt ernster genommen als die meisten Christen. Erst die Kirche hat aus dem universalen Lehrer ein exklusives Dogma gemacht. Wer Jesus wirklich liebt, sollte ihn nicht einsperren, sondern ihn in die Familie der großen Gottesboten einreihen.`,
  biblical: {
    summary: `Das Neue Testament beschreibt Jesus nicht als einen von vielen Abstiegen, sondern als die **einmalige, geschichtliche und bleibende Menschwerdung** des ewigen Wortes: „Das Wort ward Fleisch" (Joh 1,14), „ein für allemal" (Hebr 9,26–28; 10,10), der „eingeborene" Sohn (Joh 3,16). Er kam nicht, um die Übeltäter zu vernichten (Gita 4,8), sondern „zu suchen und selig zu machen, was verloren ist" (Lk 19,10) und sein Leben als Lösegeld zu geben (Mk 10,45). Er ist leiblich auferstanden und bleibt Mensch (Lk 24,39; Apg 1,11).`,
    detail: `- **Lk 17,21** (Luther: „inwendig in euch"): Jesus spricht hier zu **Pharisäern** (17,20). Das griechische *entos hymōn* bedeutet sehr wahrscheinlich „mitten unter euch" – das Reich ist in Jesu Person gegenwärtig, nicht eine verborgene Göttlichkeit in jedem Menschen.
- **Joh 10,30:** Die Zuhörer verstehen den Satz als Anspruch, Gott zu sein (10,33) – einen Anspruch, der allein ihm gilt. Jesus unterscheidet stets „mein Vater" und „euer Vater" (Joh 20,17).
- **1 Joh 4,2–3:** Wer bekennt, dass Jesus Christus „im Fleisch gekommen" ist, ist aus Gott – eine bewusste Abgrenzung gegen die Lehre eines nur scheinbaren Leibes.
- **Hebr 1,1–2:** Gott hat „vorzeiten manchmal und auf mancherlei Weise" gesprochen – „am letzten in diesen Tagen" aber durch den Sohn. Frühere Offenbarung wird anerkannt, aber der Sohn ist ihre Vollendung, nicht eine Station unter vielen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '9,26', quote: `Nun aber, am Ende der Welt, ist er einmal erschienen, durch sein eigen Opfer die Sünde aufzuheben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '10,45', quote: `Denn auch des Menschen Sohn ist nicht gekommen, daß er sich dienen lasse, sondern daß er diene und gebe sein Leben zur Bezahlung für viele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,2', quote: `Ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '17,20–21', quote: `Da er aber gefragt ward von den Pharisäern: Wann kommt das Reich Gottes? … Denn sehet, das Reich Gottes ist inwendig in euch.`, original: 'ἡ βασιλεία τοῦ θεοῦ ἐντὸς ὑμῶν ἐστιν', translation: 'Luther 1912', status: 'verbatim', note: 'Gesprächspartner sind Pharisäer; entos hymōn wird heute meist mit „mitten unter euch" wiedergegeben.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Christologie ist das Gegenteil einer Avatar-Lehre: Der ewige Logos hat aus der Theotokos wahres, vollständiges menschliches Fleisch mit vernünftiger Seele angenommen und es mit seiner Gottheit „ohne Vermischung, ohne Verwandlung, ohne Vermengung und ohne Trennung" geeint – „eine fleischgewordene Natur des Gott-Logos" (Kyrill). Das ist keine vorübergehende Erscheinung, sondern eine **ewige** Vereinigung. Schon die frühe Kirche verwarf den Doketismus (Jesus habe nur scheinbar einen Leib gehabt), weil ein Scheinleib keine wirkliche Menschheit erlösen kann: „Was nicht angenommen ist, ist nicht geheilt."`,
    sources: [
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Succensus', year: 'ca. 438', original: 'μία φύσις τοῦ θεοῦ λόγου σεσαρκωμένη', quote: `Eine fleischgewordene Natur des Gott-Logos.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Brief 101 an Kledonios', year: 'ca. 382', original: 'τὸ γὰρ ἀπρόσληπτον, ἀθεράπευτον', quote: `Denn was nicht angenommen ist, ist nicht geheilt.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'liturgie', work: 'Bekenntnis vor der Kommunion (koptische Liturgie)', quote: `Ich glaube … dass dies das lebenspendende Fleisch ist, das dein eingeborener Sohn … von unserer Herrin, der Gottesgebärerin, angenommen und mit seiner Gottheit geeint hat ohne Vermischung, ohne Vermengung und ohne Verwandlung.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Trallianer', ref: '9–10', year: 'ca. 110', quote: `Jesus Christus wurde wahrhaft geboren, aß und trank, wurde wahrhaft unter Pontius Pilatus verfolgt, wahrhaft gekreuzigt und starb … Wenn er aber, wie manche sagen, nur zum Schein gelitten hätte – dann sind sie selbst nur Schein.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die klassische Avatar-Lehre findet sich in der Bhagavad Gita (4,6–8) und in den Puranas. Bekannt sind die zehn Avatare Vishnus (Dashavatara: u. a. Fisch, Schildkröte, Eber, Mannlöwe, Zwerg, Parashurama, Rama, Krishna, Buddha bzw. Balarama, Kalki); das Bhagavata Purana nennt die Avatare sogar unzählbar. Avatare kommen zyklisch, in jedem Weltzeitalter (*yuge yuge*). Nach Gita 4,6 nimmt der Herr Gestalt an „durch seine eigene Maya" (*ātma-māyayā*); in vielen Schulen gilt der Leib Krishnas nicht als gewöhnlich-materiell. Die Geschichtlichkeit Krishnas ist historisch nicht greifbar; das Mahabharata, in dem die Gita steht, wuchs über Jahrhunderte (grob zwischen ca. 400 v. Chr. und 400 n. Chr.).`,
    sources: [
      { kind: 'oestlich', work: 'Bhagavad Gita', ref: '4,7–8', original: 'yadā yadā hi dharmasya glānir bhavati bhārata / abhyutthānam adharmasya tadātmānaṃ sṛjāmy aham // paritrāṇāya sādhūnāṃ vināśāya ca duṣkṛtām / dharma-saṃsthāpanārthāya sambhavāmi yuge yuge', quote: `Wann immer das Dharma verfällt, o Bharata, und das Unrecht sich erhebt, dann bringe ich mich selbst hervor. Zum Schutz der Guten, zur Vernichtung der Übeltäter und um das Dharma fest zu begründen, entstehe ich von Zeitalter zu Zeitalter.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Bhagavad Gita', ref: '4,6', original: 'ajo \'pi sann avyayātmā … sambhavāmy ātma-māyayā', quote: `Obwohl ungeboren und von unvergänglichem Wesen … entstehe ich durch meine eigene Maya (Wunderkraft).`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Bhagavata Purana', ref: '1,3', status: 'paraphrase', quote: `Aufzählung von über zwanzig Inkarnationen; die Avatare des Herrn seien unzählbar wie Bäche aus einem unerschöpflichen See.` },
      { kind: 'gegner', author: 'Paramahansa Yogananda', work: 'The Second Coming of Christ', year: '2004 (posthum)', status: 'paraphrase', quote: `Jesus als vollendeter Yogi, dessen Lehre mit der Gita übereinstimmt; „Christusbewusstsein" als universales Bewusstsein, das jeder erlangen kann.` },
    ],
  },
  quickAnswer: `Ich freue mich, dass Hindus Jesus ehren. Aber Jesus passt nicht in das Avatar-Muster: Avatare kommen immer wieder, in mythischer Zeit, mit einem Leib „durch Maya", um die Bösen zu vernichten. Jesus kam einmal, in nachprüfbarer Geschichte, mit wirklichem Fleisch – und er kam, um für die Bösen zu sterben. Und er beanspruchte, der einzige Weg zum Vater zu sein (Joh 14,6). Ihn als einen Avatar unter vielen zu ehren, heißt, ihm in genau dem zu widersprechen, was er über sich selbst sagte.`,
  keyPoints: [
    `**Geschichte statt Mythos:** Jesus wurde „unter Pontius Pilatus" gekreuzigt – bezeugt auch von Tacitus und Josephus. Krishnas Geschichtlichkeit ist nicht greifbar; die Avatare gehören in zyklische Weltzeitalter.`,
    `**Wahres Fleisch statt Erscheinung:** Nach Gita 4,6 erscheint der Herr „durch seine eigene Maya". Christus hat wirkliches Fleisch aus Maria angenommen, hungerte, blutete, starb (1 Joh 4,2; Kyrill).`,
    `**Retten statt vernichten:** Avatare kommen „zur Vernichtung der Übeltäter" (Gita 4,8). Jesus kam, um für Sünder zu sterben (Röm 5,8; Lk 19,10).`,
    `**Einmal für immer:** Avatare sind wiederholbar und zahllos; Christus ist „ein für allemal" erschienen und bleibt auch nach der Himmelfahrt Gott und Mensch (Hebr 9,26; Apg 1,11).`,
    `**Jesu eigener Anspruch:** „Ich bin der Weg …; niemand kommt zum Vater denn durch mich" (Joh 14,6). Wer ihn als einen unter vielen ehrt, muss ihn in diesem Punkt korrigieren.`,
    `**Die Vedanta-Deutung von Lk 17,21 und Joh 10,30 hält dem Kontext nicht stand** (Pharisäer als Hörer; Steinigungsversuch wegen Gotteslästerung).`,
  ],
  voices: [
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der wahren Menschwerdung',
      text: `Für Kyrill ist entscheidend, dass derselbe ewige Sohn, der vor allen Zeiten aus dem Vater geboren ist, in der Zeit aus der Jungfrau Maria dem Fleisch nach geboren wurde. Es gibt nicht zwei Söhne und keine bloße Einwohnung Gottes in einem Menschen – und schon gar keinen Schein. Darum nennt er Maria Theotokos und sagt, dass der Logos „im Fleisch gelitten hat". Eine Avatar-Lehre, in der der Herr nur Gestalt annimmt und wieder ablegt, wäre für Kyrill eine Leugnung der Erlösung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Dritter Brief an Nestorius, 12. Anathematismus', year: '430', quote: `Wer nicht bekennt, dass der Logos Gottes im Fleisch gelitten hat, im Fleisch gekreuzigt wurde und im Fleisch den Tod gekostet hat … der sei ausgeschlossen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Athanasius betont, dass der Logos einen Leib „nicht anders als den unseren" annahm. Er aß, trank und wurde geboren – wirklich, nicht zum Schein –, damit der Tod in einem wirklichen menschlichen Leib besiegt würde. Ein Scheinleib hätte den Tod nicht berühren und darum auch nicht überwinden können. Darin liegt der Kern des Unterschieds zur Avatar-Idee.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '8; 18', status: 'paraphrase', quote: `Der Logos nahm einen Leib, der dem unseren nicht fremd ist … und er tat das, was dem Leib eigen ist, wirklich: Er wurde geboren, aß und trank.` },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler, der Mythen und Geschichte verglich',
      text: `Lewis kannte die Mythen sterbender und wiederkehrender Götter genau und liebte sie. Seine These: Im Christentum ist der Mythos Tatsache geworden – der „sterbende Gott" steigt vom Himmel der Legende auf die Erde der Geschichte herab, an einem bestimmten Ort, zu einer bestimmten Zeit, unter einem namentlich bekannten römischen Statthalter. Und er warnte vor der bequemsten Ausflucht: Jesus als großen Lehrer anzunehmen, seinen Anspruch, Gott zu sein, aber abzulehnen. Ein bloßer Mensch, der sagte, was Jesus sagte, wäre kein großer Lehrer.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Myth Became Fact, in: God in the Dock', year: '1944', original: 'The heart of Christianity is a myth which is also a fact.', quote: `Das Herz des Christentums ist ein Mythos, der zugleich eine Tatsache ist.`, status: 'verbatim', translation: 'eigene Übersetzung' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 3', year: '1952', original: 'I\'m ready to accept Jesus as a great moral teacher, but I don\'t accept His claim to be God. That is the one thing we must not say.', quote: `„Ich bin bereit, Jesus als großen Morallehrer anzunehmen, aber seinen Anspruch, Gott zu sein, nehme ich nicht an." Genau das dürfen wir nicht sagen.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühesten Christusverehrung',
      text: `Larry Hurtado hat gezeigt, dass die Verehrung Jesu als Herrn neben dem einen Gott nicht eine späte, hellenistische Entwicklung war, sondern schon in den ersten Jahren unter jüdischen Monotheisten auftrat – belegt in den frühesten Paulusbriefen und in vorpaulinischen Formeln wie dem Philipperhymnus. Damit entfällt die These, die Kirche habe aus einem universalen Weisheitslehrer später ein exklusives Dogma gemacht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase', quote: `Die kultische Verehrung Jesu ist ein Phänomen der allerersten christlichen Generation.` },
      ],
    },
    {
      person: 'sundar-singh',
      role: 'als indischer Christ, der Hindu- und Sikh-Frömmigkeit von innen kannte',
      text: `Sundar Singh lebte als christlicher Sadhu ganz in indischer Form – mit safranfarbenem Gewand, Wanderschaft und Armut. Er schätzte die Gottsuche Indiens, bezeugte aber, dass ihm nicht eine weitere Lehre, sondern die Begegnung mit dem lebendigen, auferstandenen Christus den Frieden gab, den er vergeblich gesucht hatte. Er ist ein lebendiges Beispiel dafür, dass man indische Kultur bejahen und zugleich Christus als den einzigartigen Herrn bekennen kann.`,
      sources: [
        { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu: A Study in Mysticism and Practical Religion', year: '1921', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gita-4-7-avatar',
      objection: `Krishna sagt in der Gita: „Wann immer das Dharma verfällt, komme ich – von Zeitalter zu Zeitalter." Jesus ist ein solcher Abstieg, wie Rama und Krishna. Warum wollt ihr ihn für euch allein?`,
      objectionBy: 'Swami Vivekananda',
      answer: `Ich danke dir, dass du Jesus ehrst. Aber vergleiche genau: Der Avatar kommt immer wieder, „zur Vernichtung der Übeltäter" (Gita 4,8), mit einer Gestalt „durch seine eigene Maya" (4,6). Jesus kam einmal, in datierbarer Geschichte, mit wirklichem Fleisch – und er starb für die Übeltäter. Und er selbst sagte, er sei der einzige Weg zum Vater. Das ist nicht unser Besitzanspruch, sondern seiner.`,
      followUps: [
        {
          id: 'einmaligkeit-dogmatisch',
          objection: `Die Einmaligkeit ist eure dogmatische Einengung. Gott kann sich offenbaren, so oft er will.`,
          objectionBy: 'Deepak Chopra',
          answer: `Natürlich kann Gott vielfach sprechen – die Bibel sagt selbst: „vorzeiten manchmal und auf mancherlei Weise" (Hebr 1,1). Aber die Menschwerdung ist mehr als eine Botschaft: Gott hat sich mit der menschlichen Natur für immer vereint. Christus hat seinen Leib nicht wieder abgelegt, sondern ist mit ihm auferstanden und aufgefahren. Eine ewige Vereinigung kann man nicht beliebig wiederholen – sie ist ihrem Wesen nach einmalig.`,
          followUps: [
            {
              id: 'auferstehung-auch-mythos',
              objection: `Die Auferstehung ist doch auch nur eine Legende – wie Krishnas Rückkehr in seine himmlische Welt.`,
              objectionBy: 'Deepak Chopra (sinngemäß)',
              answer: `Der Unterschied liegt in der Art der Quellen. Paulus überliefert schon wenige Jahre nach Jesu Tod ein Bekenntnis mit Namen von Augenzeugen, von denen viele noch lebten (1 Kor 15,3–8). Die Krishna-Erzählungen stehen in Epen und Puranas, die über Jahrhunderte wuchsen und keine Augenzeugen-Geschichtsschreibung beanspruchen. Man kann die Auferstehung ablehnen – aber man kann sie nicht mit denselben Argumenten wie einen Mythos behandeln.`,
              detail: `Siehe ausführlich die Topics „Die Auferstehung Jesu" und „Antike Parallelen". Auch skeptische Historiker erkennen an, dass die Jünger überzeugt waren, Jesus lebendig gesehen zu haben, und dass diese Überzeugung sehr früh entstand.`,
            },
          ],
        },
        {
          id: 'krishna-leib-geistig',
          objection: `Krishnas Leib ist nicht gewöhnlich, sondern geistig und ewig. Er kam also auch wirklich – nur nicht in vergänglicher Materie.`,
          objectionBy: 'A. C. Bhaktivedanta Swami Prabhupada (Linie)',
          answer: `Genau darin liegt der Unterschied. Christi Fleisch war gewöhnliches, menschliches Fleisch aus Maria – es wurde müde, hungrig, verwundet und starb. Die Kirche hat jeden Scheinleib verworfen, weil ein Leib, der nicht wirklich unserer ist, unsere wirkliche Menschheit nicht heilen kann. Gregor von Nazianz: „Was nicht angenommen ist, ist nicht geheilt."`,
          voices: [
            {
              person: 'gregor-nazianz',
              role: 'als Theologe der vollständigen Menschheit Christi',
              text: `Gregor argumentierte gegen Apollinaris, der Christus eine menschliche Vernunftseele absprach: Wenn der Sohn nicht die ganze menschliche Natur angenommen hat, dann ist auch nicht der ganze Mensch erlöst. Das Prinzip trifft jede Christologie, die Christus nur eine besondere, nicht wirklich menschliche Leiblichkeit zuschreibt.`,
              sources: [
                { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Brief 101 an Kledonios', original: 'τὸ γὰρ ἀπρόσληπτον, ἀθεράπευτον', quote: `Was nicht angenommen ist, ist nicht geheilt.`, status: 'verbatim', translation: 'eigene Übersetzung' },
              ],
            },
          ],
          followUps: [
            {
              id: 'leiden-gottes-unwuerdig',
              objection: `Warum sollte Gott leiden und sterben wollen? Das ist seiner unwürdig. Ein Avatar steht über dem Leiden.`,
              objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
              answer: `Weil Liebe sich erniedrigt. Gott wurde Mensch, um uns dort zu begegnen, wo wir sind – im Leid und im Tod (Phil 2,6–8). Der Gott, der über dem Leiden thront, kann den Leidenden nur von oben trösten; der Gott, der gekreuzigt wurde, ist bei ihm. Die Kirche sagt dabei sorgfältig: Der leidensunfähige Gott hat in seinem eigenen Fleisch gelitten (Kyrill) – nicht seine Gottheit wurde verwandelt, sondern er hat das Leiden wirklich zu seinem eigenen gemacht.`,
              questionsBack: [`Welcher Gott kann einem sterbenden Kind näher sein – einer, der den Tod nie kannte, oder einer, der ihn selbst erlitten hat?`],
              followUps: [
                {
                  id: 'lila-statt-kreuz',
                  objection: `Bei uns ist das Erscheinen Gottes *Lila* – göttliches Spiel, Freude, Schönheit. Warum musste es bei euch so blutig sein? Das klingt nach einem Gott, der Opfer braucht.`,
                  objectionBy: 'A. C. Bhaktivedanta Swami Prabhupada (Linie)',
                  answer: `Weil das Problem der Welt kein Spiel ist. Kinder sterben, Menschen werden gefoltert, der Tod nimmt uns alle. Ein Gott, der in dieser Welt nur spielt, berührt ihre Wunden nicht. Christus ist in den Tod hineingegangen, um ihn von innen zu entmachten – „damit er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte" (Hebr 2,14). Gott brauchte kein Opfer, wir brauchten einen Retter.`,
                  detail: `Die Schönheit der Krishna-Frömmigkeit – Musik, Tanz, Liebe – verdient Achtung. Aber die Lila-Vorstellung beantwortet nicht die Frage, die das Leid stellt. Athanasius erklärt in *De Incarnatione*, dass der Logos einen sterblichen Leib annahm, damit er sterben konnte, und dass er als der Unsterbliche den Tod in diesem Leib vernichtete. Das Kreuz ist darum kein Zugeständnis an einen blutrünstigen Gott, sondern der Sieg des Lebens über den Tod. Die koptische Liturgie singt in der Karwoche „Dein ist die Kraft und die Herrlichkeit" – am Kreuz, nicht trotz des Kreuzes, offenbart sich Gottes Macht.`,
                  voices: [
                    { person: 'athanasius', role: 'als Lehrer der Menschwerdung', text: `Für Athanasius konnte der Logos als Gott nicht sterben; darum nahm er einen Leib an, der sterben konnte, um ihn stellvertretend für alle in den Tod zu geben und durch seine Auferstehung allen die Unverweslichkeit zu schenken. Der Tod wurde nicht umgangen, sondern besiegt.`, sources: [
                      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '9', year: 'ca. 318', status: 'paraphrase', quote: `Da der Logos als Unsterblicher nicht sterben konnte, nahm er einen Leib an, der sterben konnte, um ihn für alle darzubringen.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Hebräer', ref: '2,14–15', status: 'paraphrase', quote: `Weil die Kinder Fleisch und Blut haben, hat auch er es angenommen, damit er durch den Tod die Macht nähme dem, der des Todes Gewalt hatte, und die erlöste, die durch Furcht vor dem Tod ihr Leben lang Knechte sein mussten.` },
                  ],
                  questionsBack: [`Was sagt die Lila-Vorstellung einer Mutter, deren Kind gestorben ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-lehrte-vedanta',
      objection: `Jesus lehrte Vedanta: „Das Reich Gottes ist inwendig in euch" (Lk 17,21), „Ich und der Vater sind eins" (Joh 10,30). Er war ein erleuchteter Yogi, der seine Einheit mit Gott verwirklicht hatte.`,
      objectionBy: 'Paramahansa Yogananda',
      answer: `Lies den Zusammenhang: Lk 17,21 sagt Jesus zu Pharisäern, die ihn ablehnten – kaum, um ihnen ihre innere Göttlichkeit zu bescheinigen. Das griechische *entos hymōn* heißt sehr wahrscheinlich „mitten unter euch": Das Reich ist in Jesus selbst gegenwärtig. Und nach Joh 10,30 wollen die Zuhörer ihn steinigen, „weil du ein Mensch bist und machst dich selbst zu Gott" (10,33) – ein Anspruch, der ihn von allen anderen unterscheidet.`,
      followUps: [
        {
          id: 'verlorene-jahre-indien',
          objection: `Jesus verbrachte die „verlorenen Jahre" zwischen 12 und 30 in Indien und Tibet und lernte bei Yogis. Notovitch hat das in einem tibetischen Kloster entdeckt.`,
          objectionBy: 'Nicolas Notovitch (1894)',
          answer: `Dafür gibt es keinen Beleg. Notovitchs angebliches Manuskript aus dem Kloster Hemis wurde nie vorgelegt; Max Müller prüfte die Behauptung, und der Lehrer J. Archibald Douglas reiste nach Hemis, wo der Abt erklärte, es gebe weder ein solches Dokument noch einen solchen Besucher. Die Evangelien setzen voraus, dass Jesus in Nazareth als Bauhandwerker bekannt war (Mk 6,3).`,
          sources: [
            { kind: 'fachliteratur', author: 'F. Max Müller', work: 'The Alleged Sojourn of Christ in India, in: The Nineteenth Century', year: '1894', status: 'paraphrase', quote: `Kritische Prüfung von Notovitchs Behauptungen.` },
            { kind: 'fachliteratur', author: 'J. Archibald Douglas', work: 'The Chief Lama of Himis on the Alleged „Unknown Life of Christ", in: The Nineteenth Century', year: '1896', status: 'paraphrase', quote: `Bericht über den Besuch in Hemis; der Abt bestreitet die Existenz des Manuskripts.` },
          ],
        },
        {
          id: 'christus-ist-bewusstsein',
          objection: `„Christus" ist ein Bewusstseinszustand. Jesus war nur sein vollkommenster Träger – jeder kann Christusbewusstsein erlangen.`,
          objectionBy: 'Deepak Chopra',
          answer: `„Christus" ist die griechische Übersetzung von „Messias", dem Gesalbten – ein jüdischer Titel für eine bestimmte Person, keinen Bewusstseinszustand. Das Neue Testament wehrt sich ausdrücklich gegen eine Trennung von „Jesus" und „Christus" (1 Joh 2,22; 4,2–3). Christen werden mit Christus vereint – aber durch Gnade und Glauben an ihn, nicht indem sie selbst Christus werden.`,
        },
      ],
    },
    {
      id: 'gandhi-bergpredigt',
      objection: `Gandhi hat die Bergpredigt mehr gelebt als die meisten Christen – und dazu brauchte er keine Dogmen über Jesus. Ist das nicht das wahre Christentum?`,
      objectionBy: 'Mohandas K. Gandhi (Linie)',
      answer: `Das ist wahr und beschämend für uns Christen – und wir sollten es ehrlich zugeben. Aber die Bergpredigt selbst enthält Jesu Anspruch: „Ich aber sage euch" stellt er über die Tora (Mt 5,22), Verfolgung leidet man „um meinetwillen" (Mt 5,11), und am Ende ist er der Richter, zu dem man „Herr, Herr" sagen wird (Mt 7,21–23). Man kann die Bergpredigt nicht ohne den haben, der sie hielt.`,
      sources: [
        { kind: 'gegner', author: 'Mohandas K. Gandhi', work: 'An Autobiography or The Story of My Experiments with Truth', ref: 'Teil I, Kap. 20', year: '1927', status: 'paraphrase', quote: `Das Neue Testament, besonders die Bergpredigt, ging mir direkt zu Herzen.` },
        { kind: 'gegner', author: 'Mohandas K. Gandhi', work: 'An Autobiography or The Story of My Experiments with Truth', ref: 'Teil II', year: '1927', status: 'paraphrase', quote: `Gandhi konnte nicht glauben, dass Jesus der einzige fleischgewordene Sohn Gottes sei; wenn Gott Söhne haben könne, seien wir alle seine Söhne.` },
      ],
      followUps: [
        {
          id: 'grosser-lehrer-nicht-gott',
          objection: `Dann ist Jesus eben ein großer Lehrer, aber nicht Gott. Warum geht das nicht?`,
          objectionBy: 'Mohandas K. Gandhi (Linie)',
          answer: `Weil ein bloßer Mensch, der Sünden vergibt (Mk 2,5–7), sich über die Tora stellt und sich als Richter der Welt bezeichnet, kein großer Lehrer wäre, sondern entweder ein Betrüger oder im Wahn. Diese Alternative ist unbequem, aber ehrlich: Entweder war er, was er sagte, oder wir sollten ihn nicht als Vorbild ehren.`,
          followUps: [
            {
              id: 'evangelien-spaet-vergoettlicht',
              objection: `Die Evangelien haben Jesus nachträglich vergöttlicht. Der historische Jesus war ein Weisheitslehrer – genau wie ein indischer Guru.`,
              objectionBy: 'Deepak Chopra (unter Berufung auf liberale Bibelkritik)',
              answer: `Die frühesten Quellen sprechen dagegen. Schon Paulus – in Briefen etwa 20 Jahre nach Jesus – zitiert Bekenntnisse, die Jesus als Herrn neben dem einen Gott verehren (1 Kor 8,6; Phil 2,6–11), und das aramäische Gebet „Maranatha" („Unser Herr, komm!", 1 Kor 16,22) stammt aus der Jerusalemer Urgemeinde. Die Verehrung Jesu begann bei jüdischen Monotheisten in der ersten Generation, nicht Jahrhunderte später.`,
              followUps: [
                {
                  id: 'paulus-hat-vergoettlicht',
                  objection: `Dann war es eben Paulus, der Jesus vergöttlicht hat. Er kannte den historischen Jesus gar nicht und machte aus einem jüdischen Weisheitslehrer einen hellenistischen Gott.`,
                  objectionBy: 'Deepak Chopra (unter Berufung auf liberale Bibelkritik)',
                  answer: `Paulus sagt ausdrücklich, dass er das Bekenntnis „empfangen" hat (1 Kor 15,3). Er war zwei Wochen bei Petrus in Jerusalem und traf Jakobus, den Bruder des Herrn (Gal 1,18–19); später erkannten die Jerusalemer Säulen sein Evangelium an (Gal 2,9). Und das aramäische „Maranatha" zeigt: Die aramäisch sprechende Urgemeinde rief Jesus schon als Herrn an – lange bevor Paulus Briefe schrieb. Er hat die Verehrung Jesu vorgefunden, nicht erfunden.`,
                  detail: `Die These vom „hellenistischen" Paulus stammt vor allem aus der religionsgeschichtlichen Schule um 1900 (Wilhelm Bousset). Sie gilt heute weitgehend als überholt. Larry Hurtado hat gezeigt, dass die Verehrung Jesu – Gebet zu ihm, Taufe auf seinen Namen, Anrufung im Gottesdienst – schon in den frühesten, jüdisch-christlichen Gemeinden geschah, und zwar bei Menschen, die streng am einen Gott Israels festhielten. Das ist historisch erklärungsbedürftig: Fromme Juden verehrten keinen Menschen neben Gott – es sei denn, sie waren überzeugt, dass Gott selbst dies verlangt, etwa durch die Auferweckung Jesu.

Paulus selbst wäre der unwahrscheinlichste Erfinder: Er war ein strenger Pharisäer und Verfolger der Gemeinde, bis ihm nach eigenem Zeugnis der Auferstandene begegnete.`,
                  voices: [
                    { person: 'hurtado', role: 'als Erforscher der frühchristlichen Jesusverehrung', text: `Hurtado zeigt, dass die gottesdienstliche Verehrung Jesu ein „explosionsartig" frühes Phänomen innerhalb des jüdischen Monotheismus war – kein langsamer Prozess heidnischer Vergöttlichung über Generationen hinweg. Die Verehrung Jesu als Herr ist in den ältesten Texten bereits selbstverständlich vorausgesetzt.`, sources: [
                      { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase', quote: `Die Verehrung Jesu entstand sehr früh und innerhalb jüdisch-monotheistischer Kreise, nicht erst durch spätere hellenistische Einflüsse.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Galater', ref: '1,18–19', quote: `Darnach über drei Jahre kam ich gen Jerusalem, Petrus zu schauen, und blieb fünfzehn Tage bei ihm. Der andern Apostel aber sah ich keinen außer Jakobus, des HERRN Bruder.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn Paulus Jesus vergöttlicht hätte – warum widersprechen ihm Petrus und Jakobus in diesem Punkt nirgends, obwohl sie über andere Fragen heftig stritten?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wer-ist-tolerant',
      objection: `Wir Hindus ehren Jesus, ihr lehnt Krishna ab. Wer ist hier der Tolerante?`,
      objectionBy: 'Sarvepalli Radhakrishnan (Linie)',
      answer: `Jemanden aufzunehmen, indem man ihn umdeutet, ist keine Ehrung. Es ist, als würde ich einen Freund loben, aber sagen, er habe über seine Identität gelogen. Echter Respekt nimmt ernst, was jemand über sich sagt. Christen achten Krishna-Verehrer als Menschen und erkennen Wahres in ihrer Suche an (Justin sprach vom „Samen des Logos" in allen Völkern) – aber wir können widersprüchliche Aussagen nicht zugleich bejahen.`,
      followUps: [
        {
          id: 'trotzdem-arrogant',
          objection: `Trotzdem ist es arrogant zu sagen, nur Jesus sei der Weg.`,
          objectionBy: 'Sarvepalli Radhakrishnan (Linie)',
          answer: `Auch der Vedanta ordnet ein: Vivekananda sah im Dualismus eine Vorstufe, die im Advaita gipfelt – das Christentum steht da auf einer unteren Stufe. Jeder, der eine Wahrheit vertritt, hält Gegenteiliges für falsch. Die Frage ist nicht, ob jemand urteilt, sondern ob er es mit Gründen und in Demut tut. Und der Anspruch „Ich bin der Weg" stammt nicht von mir, sondern von Jesus.`,
          followUps: [
            {
              id: 'mission-zerstoert-kultur',
              objection: `Und dann kommt ihr mit Mission. Gandhi hat Bekehrungen abgelehnt – sie reißen Menschen aus ihrer Kultur und Familie. Das ist kultureller Imperialismus.`,
              objectionBy: 'Mohandas K. Gandhi (Linie)',
              answer: `Gandhis Sorge war berechtigt, wo Bekehrung mit Geld, Druck oder Verachtung der eigenen Kultur verbunden war – das lehne ich ebenso ab. Aber das Christentum ist in Indien nicht westlich: Die Thomaschristen in Kerala leben seit mindestens 1500 Jahren dort – ihre Liturgie ist syrisch, ihre Kultur indisch. Sadhu Sundar Singh blieb ein indischer Sadhu und folgte Christus. Und Indiens Verfassung schützt ausdrücklich das Recht, seinen Glauben zu bekennen, auszuüben und zu verbreiten.`,
              detail: `Man sollte den Vorwurf nicht abtun: Es gab koloniale Missionsformen, die indische Kultur verachteten. Aber es gab auch das Gegenteil – Christen, die indische Sprachen verschriftlichten, Schulen für Dalits und Mädchen gründeten und die Witwenverbrennung bekämpften. Vishal Mangalwadi hat das ausführlich dargestellt.

Wichtig ist der Unterschied zwischen Zwang und Zeugnis. Die Kirche lehnt jeden Zwang ab; der Glaube muss frei sein. Zeugnis dagegen ist eine Form von Respekt: Ich halte dich für fähig, Wahrheitsfragen selbst zu prüfen. Artikel 25 der indischen Verfassung garantiert jedem das Recht, Religion „frei zu bekennen, auszuüben und zu verbreiten" (*profess, practise and propagate*).`,
              voices: [
                { person: 'sundar-singh', role: 'als indischer Christ und Sadhu', text: `Sundar Singh betonte, dass Indien Christus nicht in europäischer Kleidung brauche. Er trug das safranfarbene Gewand des Sadhu, wanderte barfuß und predigte in indischen Bildern – und war gleichzeitig unbeirrbar in seinem Bekenntnis, dass Jesus der lebendige Herr ist. Sein bekanntes Bild: Indien brauche das Wasser des Lebens, aber in einer indischen Schale.`, sources: [
                  { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu: A Study in Mysticism and Practical Religion', year: '1921', status: 'paraphrase', quote: `Sundar Singhs Bild vom Wasser des Lebens, das Indien in einer indischen Schale gereicht werden müsse.`, note: 'Vielfach überlieferte Anekdote; als Bild, nicht als wörtliches Zitat verwenden.' },
                ] },
                { person: 'mangalwadi', role: 'als indischer Kulturhistoriker', text: `Mangalwadi zeigt, wie stark Bibelübersetzung und christliche Bildungsarbeit die modernen indischen Sprachen, das Schulwesen und die Reformbewegungen gegen Kastenunrecht und Witwenverbrennung geprägt haben. Für ihn hat das Evangelium Indiens Kultur nicht zerstört, sondern viele ihrer Schwächsten befreit.`, sources: [
                  { kind: 'fachliteratur', author: 'Vishal Mangalwadi', work: 'The Book That Made Your World', year: '2011', status: 'paraphrase', quote: `Die Bibel als Kraft hinter Bildung, Sprachentwicklung und sozialen Reformen, auch in Indien.` },
                ] },
              ],
              sources: [
                { kind: 'sonstiges', work: 'Verfassung der Republik Indien', ref: 'Art. 25 Abs. 1', year: '1950', original: 'all persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion', quote: `Alle Personen haben gleichermaßen Anspruch auf Gewissensfreiheit und das Recht, Religion frei zu bekennen, auszuüben und zu verbreiten.`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'theophanien-mehrfach',
      objection: `Auch in eurer Bibel erscheint Gott mehrfach – Abraham bei Mamre, Mose im Dornbusch, Jakob im Ringkampf. Das sind doch auch Herabkünfte. Warum dann bei Jesus „ein für alle Mal"?`,
      objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
      answer: `Die Erscheinungen im Alten Testament waren vorübergehend: Gott zeigte sich, sprach und zog sich zurück. Viele Väter, schon Justin, sahen darin den Logos, der seine Menschwerdung vorbereitete. Bei Jesus geschieht etwas anderes: Gott nimmt eine wirkliche menschliche Natur an – und legt sie nie wieder ab. Der Auferstandene fährt mit seinem verklärten Leib auf und wird „so kommen, wie ihr ihn gesehen habt" (Apg 1,11). Ein Avatar verlässt seine Gestalt; Christus bleibt Mensch.`,
      detail: `Justin der Märtyrer argumentiert im *Dialog mit Tryphon*, dass der „Engel des Herrn", der Abraham, Jakob und Mose erschien, nicht der Vater war, sondern ein „anderer Gott und Herr", der Logos, der später Mensch wurde. Die alttestamentlichen Theophanien sind also Vorboten, keine Konkurrenz der Menschwerdung.

Der entscheidende Unterschied zum Avatar-Gedanken: Nach der Gita bedient sich Krishna seiner Maya, um zu erscheinen (4,6), und kehrt nach getaner Arbeit in seine Welt zurück. In Christus dagegen ist die Menschheit mit der Gottheit „ohne Vermischung, ohne Verwandlung und ohne Trennung" geeint – für immer. Das bekennt die koptische Liturgie am Ende jeder Eucharistiefeier.`,
      voices: [
        { person: 'justin', role: 'als Apologet im Gespräch mit dem Judentum', text: `Justin zeigt Tryphon anhand der Theophanien, dass schon das Alte Testament einen von Gott dem Vater unterschiedenen, aber göttlichen Herrn kennt, der den Patriarchen erscheint. Für Justin ist dies der Logos, der in den letzten Tagen aus der Jungfrau Mensch wurde.`, sources: [
          { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '56–62', year: 'ca. 160', status: 'paraphrase', quote: `Der den Patriarchen erschien, ist ein anderer als der Schöpfer aller Dinge – der Zahl nach, nicht dem Willen nach: der Logos, der später Mensch wurde.` },
        ] },
      ],
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,11', quote: `Dieser Jesus, welcher von euch ist aufgenommen gen Himmel, wird kommen, wie ihr ihn gesehen habt gen Himmel fahren.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'warum-fuer-immer-mensch',
          objection: `Warum sollte Gott für immer Mensch bleiben wollen? Ein Leib ist eine Begrenzung. Das Göttliche ist doch frei von jeder Form.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Weil es Gott nicht um einen Auftritt ging, sondern um Heilung. Gregor von Nazianz sagt: „Was nicht angenommen ist, ist nicht geheilt." Christus hat unsere Natur nicht wie ein Kostüm getragen, sondern sie mit sich vereint, damit sie in Gottes Leben hineingenommen wird. Darum ist der Leib im Christentum kein Gefängnis, das man abstreift, sondern Teil der Person, die auferstehen und verherrlicht werden soll. Das ist keine Begrenzung Gottes, sondern die Erhöhung des Menschen.`,
          detail: `Hier liegt einer der tiefsten Unterschiede zwischen indischer und christlicher Spiritualität. Wenn die Form Begrenzung ist, dann ist das Ziel des Menschen, die Form – Leib, Individualität, Geschichte – zu überwinden. Wenn Gott selbst aber eine menschliche Natur für immer angenommen hat, dann ist das Ziel nicht die Auflösung, sondern die Verklärung. Athanasius fasst das Heil darin zusammen: „Er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54) – vergöttlicht durch Gnade, nicht aufgelöst in einem unpersönlichen Absoluten. Die Ikone des verklärten Christus auf dem Tabor zeigt dieses Ziel: menschliches Antlitz, von göttlichem Licht durchdrungen.`,
          sources: [
            { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Brief 101 an Kledonios', original: 'τὸ γὰρ ἀπρόσληπτον, ἀθεράπευτον', quote: `Denn was nicht angenommen ist, ist nicht geheilt.`, status: 'verbatim', translation: 'eigene Übersetzung' },
          ],
          questionsBack: [`Wenn der Leib nur Begrenzung ist – warum fühlt sich die Liebe zwischen zwei konkreten Menschen nicht wie eine Begrenzung an, sondern wie Erfüllung?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Gita 4,8 sagt, der Avatar komme zur Vernichtung der Übeltäter. Jesus starb für die Übeltäter. Ist das wirklich dasselbe Muster?`,
    `Wenn Jesus ein Avatar war – warum lehrte er dann nicht Karma und Wiedergeburt, sondern ein Leben und das Gericht?`,
    `Welche geschichtlichen Belege gibt es für Krishna, vergleichbar mit denen für Jesus?`,
    `Ehrst du Jesus, wenn du ihm in dem widersprichst, was er über sich selbst sagte (Joh 14,6)?`,
  ],
  avoid: [
    `Spotte nicht über Krishna-Erzählungen oder Götterbilder – Hindus empfinden das als tiefe Verletzung, und es ersetzt kein Argument.`,
    `Behaupte nicht, „Krishna ist eine Kopie von Christus" (oder umgekehrt). Ähnliche Namen und Motive sind kein Beleg für Abhängigkeit.`,
    `Zitiere Gandhi nicht mit unbelegten Sätzen wie „Ich mag euren Christus, aber nicht eure Christen".`,
  ],
  concessions: [
    `Die Ehrfurcht vieler Hindus vor Jesus ist aufrichtig und oft tiefer als die mancher Namenschristen.`,
    `Gandhi hat Teile der Bergpredigt (Gewaltlosigkeit) konsequenter gelebt als viele Christen seiner Zeit.`,
    `Christen in Indien haben das Evangelium oft in fremder, westlicher Form gebracht; Sundar Singh zeigt, dass es auch anders geht.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Über die Einheit Christi (Quod unus sit Christus)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Myth Became Fact (in: God in the Dock)', year: '1944', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'How on Earth Did Jesus Become a God?', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Avatar', 'Bhagavad Gita', 'Inkarnation', 'Christologie', 'Gandhi', 'Yogananda'],
  related: [
    'gnosis/jesus-in-indien',
    'esoterik-new-age/christusbewusstsein',
    'liberale-theologie/jesus-nur-morallehrer',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'antike-parallelen/jesus-kopie-horus-mithras',
    'christologie-chalcedon/kopten-sind-monophysiten',
    'pluralismus/arrogant-nur-jesus',
  ],
};

export default claim;
