import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'prophet-wie-mose-dtn-18',
  title: `„Mohammed ist der Prophet wie Mose (Dtn 18,18)."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'What the Bible Says about Muhammad (1976)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Muhammad in the Bible"' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, Halifax', work: 'Muhammad in the Bible (Vortragsreihe)' },
    { name: 'Rahmatullah Kairanawi', role: 'Indischer Gelehrter (1818–1891)', work: 'Iẓhār al-Ḥaqq (1864)' },
  ],
  steelman: `Der Koran sagt, dass Juden und Christen den Gesandten „bei sich in der Tora und im Evangelium aufgeschrieben finden" (7:157). Deuteronomium 18,18 ist die klarste Stelle: „Ich will ihnen einen Propheten, wie du bist, erwecken aus ihren Brüdern und meine Worte in seinen Mund geben." Die „Brüder" Israels sind die Ismaeliten – Ismael war der Bruder Isaaks, und von ihm heißt es, er werde „all seinen Brüdern gegenüber" wohnen (Gen 16,12; 25,18). Und wer gleicht Mose? Mose und Muhammad wurden natürlich geboren, heirateten, hatten Kinder, waren Gesetzgeber, Staatsführer und Heerführer, wurden schließlich von ihrem Volk angenommen und starben eines natürlichen Todes. Jesus dagegen wurde nach christlicher Lehre jungfräulich geboren, blieb unverheiratet, herrschte nie, wurde von seinem Volk verworfen und starb am Kreuz – er gleicht Mose nicht. Zudem empfing Muhammad Worte, die ihm „in den Mund gelegt" wurden, denn er konnte nicht lesen (vgl. Jes 29,12). Und Dtn 34,10 sagt ausdrücklich, dass „kein Prophet in Israel" wie Mose aufstand – also muss er von außerhalb Israels kommen.`,
  biblical: {
    summary: `Der Text selbst bestimmt den Sinn: „Einen Propheten wie mich wird dir der HERR, dein Gott, erwecken **aus deiner Mitte, aus deinen Brüdern**" (Dtn 18,15; hebr. *mi-qirbekha me-achecha*). Im unmittelbaren Kontext heißen die Brüder die anderen Stämme Israels: Die Leviten „sollen kein Erbteil haben unter ihren Brüdern" (18,1–2), und der König muss „aus deinen Brüdern" sein, nicht ein „Fremder, der nicht dein Bruder ist" (17,15). Was „wie Mose" heißt, sagt die Tora selbst: Mit Mose redet Gott „von Mund zu Mund" (Num 12,6–8); er kannte den HERRN „von Angesicht zu Angesicht" und tat Zeichen und Wunder (Dtn 34,10–12). Das NT bezieht die Verheißung auf Jesus (Apg 3,22–23; 7,37; Joh 1,45; 6,14).`,
    detail: `- **„Aus deiner Mitte" (*mi-qirbekha*)** steht in 18,15 vor „aus deinen Brüdern" – ein Prophet aus Israel. Dieselbe Wendung steht beim König (17,15).
- **Dtn 18,1–2:** „Brüder" = die übrigen Stämme Israels, im selben Kapitel.
- **Num 12,6–8 / Dtn 34,10–12:** Die Mose-Ähnlichkeit besteht im unmittelbaren Umgang mit Gott und in Zeichen und Wundern.
- **Jesus wie Mose:** Er entging als Kind einem Kindermord (Ex 1,22 / Mt 2,16), kam aus Ägypten (Mt 2,15), fastete 40 Tage (Ex 34,28 / Mt 4,2), lehrte auf dem Berg (Mt 5), speiste das Volk in der Wüste (Joh 6), sein Angesicht leuchtete (Ex 34,29 / Mt 17,2), er stiftete einen Bund mit Blut (Ex 24,8 / Mk 14,24) und trat für sein Volk ein (Ex 32,32 / Joh 17). Er kennt den Vater wie niemand sonst (Joh 1,18; Mt 11,27).
- **Jüdische Erwartung:** In Qumran wird Dtn 18,18–19 in einer Sammlung messianischer Texte zitiert (4QTestimonia = 4Q175); die Samaritaner erwarteten einen Propheten wie Mose (vgl. Joh 4,25).`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '18,15', quote: `Einen Propheten wie mich wird dir der HERR, dein Gott, erwecken aus dir und aus deinen Brüdern; dem sollt ihr gehorchen.`, original: `נָבִיא מִקִּרְבְּךָ מֵאַחֶיךָ כָּמֹנִי יָקִים לְךָ יְהוָה אֱלֹהֶיךָ`, translation: 'Luther 1912', status: 'verbatim', note: 'Hebräisch wörtlich: „aus deiner Mitte, aus deinen Brüdern".' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '18,18', quote: `Ich will ihnen einen Propheten, wie du bist, erwecken aus ihren Brüdern und meine Worte in seinen Mund geben; der soll zu ihnen reden alles, was ich ihm gebieten werde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '17,15', quote: `… du sollst aber aus deinen Brüdern einen zum König über dich setzen. Du kannst nicht irgend einen Fremden, der nicht dein Bruder ist, über dich setzen.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut leicht gekürzt.' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '34,10–11', quote: `Und es stand hinfort kein Prophet in Israel auf wie Mose, den der HERR erkannt hätte von Angesicht zu Angesicht, zu allerlei Zeichen und Wundern …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '3,22', quote: `Denn Moses hat gesagt zu den Vätern: „Einen Propheten wird euch der HERR, euer Gott, erwecken aus euren Brüdern gleich wie mich; den sollt ihr hören in allem, was er zu euch sagen wird."`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche liest Dtn 18 seit den Aposteln christologisch: Jesus ist der verheißene Prophet wie Mose – und mehr als Mose. „Denn das Gesetz ist durch Mose gegeben; die Gnade und Wahrheit ist durch Jesus Christus geworden" (Joh 1,17); Mose war „treu als Knecht", Christus „als Sohn über sein Haus" (Hebr 3,5–6). Die alexandrinische Auslegung (Kyrill, Origenes in den Homilien) sieht in Mose ein Vorbild (Typos) Christi: Befreiung aus der Knechtschaft, Bund, Speisung in der Wüste, Fürbitte für das Volk. Bereits im Gespräch mit dem Kalifen al-Mahdi (781) hat Timotheus I. die islamische Deutung von Dtn 18 mit dem Hinweis auf die „Brüder" als Israeliten beantwortet.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '3,5–6', quote: `Und Mose zwar war treu in seinem ganzen Hause als ein Knecht … Christus aber als ein Sohn über sein Haus.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase', note: 'Timotheus deutet die „Brüder" in Dtn 18 auf die Kinder Israels und bezieht die Stelle auf Christus.' },
    ],
  },
  quickAnswer: `Dtn 18,15 sagt: ein Prophet „aus deiner Mitte, aus deinen Brüdern" – und im selben Kapitel sind die „Brüder" die anderen Stämme Israels (18,1–2; vgl. 17,15). Was „wie Mose" heißt, erklärt die Tora selbst: Gott redet mit ihm von Angesicht zu Angesicht, und er tut Zeichen und Wunder (Dtn 34,10–12). Jesus erfüllt das; nach islamischer Überlieferung selbst sah Muhammad Gott nicht, und der Koran sagt, ihm seien keine Zeichen wie den früheren gegeben worden (17:59).`,
  keyPoints: [
    `**„Aus deiner Mitte, aus deinen Brüdern" (18,15):** Der Prophet kommt aus Israel; „Brüder" heißen im selben Abschnitt die Stämme Israels (18,1–2; 17,15).`,
    `**Die Tora definiert „wie Mose":** Umgang mit Gott von Angesicht zu Angesicht und Zeichen und Wunder (Num 12,6–8; Dtn 34,10–12) – nicht Ehe, Kinder oder Kriegsführung.`,
    `**Jesus gleicht Mose in den biblisch entscheidenden Zügen:** Bund im Blut, Speisung in der Wüste, Gesetz auf dem Berg, Fürbitte, Zeichen und Wunder, einzigartige Gotteskenntnis (Joh 1,18).`,
    `**Deedats Liste ist selektiv:** Mit derselben Methode ließe sich fast jeder Führer zum „Propheten wie Mose" machen; sie ignoriert die Kriterien des Textes.`,
    `**„Meine Worte in seinen Mund"** ist eine übliche Prophetenformel (Jer 1,9; Jes 51,16) und kein Hinweis auf Analphabetismus.`,
    `**Apostolische Deutung:** Petrus und Stephanus beziehen Dtn 18 öffentlich in Jerusalem auf Jesus (Apg 3,22; 7,37).`,
  ],
  voices: [
    {
      person: 'michael-brown',
      role: 'als promovierter Semitist',
      text: `Michael Brown weist darauf hin, dass das hebräische *achim* („Brüder") im Deuteronomium fast immer Mit-Israeliten bezeichnet, und dass Dtn 18,15 durch *mi-qirbekha* („aus deiner Mitte") jeden Zweifel ausräumt. Er betont zudem, dass die jüdische Tradition selbst Dtn 18 auf eine Gestalt aus Israel bezog – sei es auf die Kette der Propheten oder, wie in Qumran, auf eine endzeitliche Gestalt. Eine Deutung auf einen nichtisraelitischen Propheten kennt die jüdische Auslegung nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Timotheus I. wurde von al-Mahdi gefragt, ob Muhammad in der Schrift angekündigt sei, und auf Dtn 18 angesprochen. Er antwortet höflich, aber klar: Die „Brüder" der Kinder Israels sind die Kinder Israels selbst, und die Verheißung erfüllt sich in Christus, der aus Israel kam. Bemerkenswert ist sein Ton: Er spricht respektvoll über Muhammad und sagt, dieser sei „den Weg der Propheten gegangen", weil er gegen den Götzendienst kämpfte – bestreitet aber, dass die Schrift ihn ankündige.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase', note: 'Englisch: A. Mingana, Woodbrooke Studies 2 (1928). Die Wendung „walked in the path of the prophets" wird häufig zitiert; Wortlaut nach Mingana prüfen.' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als alexandrinischer Ausleger',
      text: `Kyrill liest Mose in der alexandrinischen Tradition als Vorbild Christi: Mose befreit Israel aus Ägypten, Christus befreit die Menschheit aus der Knechtschaft der Sünde; Mose vermittelt den Bund am Sinai, Christus stiftet den neuen Bund in seinem Blut; Mose gibt Manna, Christus ist das Brot des Lebens. Für Kyrill ist Christus der Prophet „wie Mose" und zugleich unendlich mehr: Mose war Diener, Christus ist der Sohn und Herr des Hauses.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra (Auslegungen zum Pentateuch); Kommentar zum Johannesevangelium', status: 'paraphrase' }],
    },
    {
      person: 'david-wood',
      role: 'als Islam-Apologet',
      text: `David Wood hat Deedats Vergleichsliste ins Absurde geführt: Mit Kriterien wie „hatte Eltern, heiratete, hatte Kinder, war Anführer, starb eines natürlichen Todes" lassen sich viele Personen zum „Propheten wie Mose" erklären. Wood fordert, die Kriterien des Textes selbst anzuwenden – „aus deiner Mitte", „von Angesicht zu Angesicht", „Zeichen und Wunder" – und zeigt, dass die islamischen Quellen selbst Muhammad diese Merkmale nicht zuschreiben: Der Koran verweigert Wunderzeichen (17:59), und Aisha bestritt, dass Muhammad Gott gesehen habe.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wood', work: 'Debatten und Videos zu „Muhammad in the Bible"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'brueder-sind-ismaeliten',
      objection: `„Aus ihren Brüdern" – das sind die Brüder der Israeliten, also die Ismaeliten. Hätte Gott einen Israeliten gemeint, hätte er „aus ihnen selbst" gesagt.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Das sagt der Text: „aus deiner Mitte, aus deinen Brüdern" (Dtn 18,15). Und im selben Kapitel heißen die Brüder die übrigen Stämme Israels: Die Leviten haben „kein Erbteil unter ihren Brüdern" (18,2). Ein Kapitel vorher: Der König muss „aus deinen Brüdern" sein, „nicht ein Fremder, der nicht dein Bruder ist" (17,15). Würdest du sagen, Israel sollte einen ismaelitischen König einsetzen?`,
      questionsBack: [`Wer sind die „Brüder" der Leviten in Dtn 18,2 – die Ismaeliten oder die anderen Stämme Israels?`],
      followUps: [
        {
          id: 'edomiter-heissen-brueder',
          objection: `Aber in Dtn 2,4 werden die Edomiter, die Kinder Esaus, ausdrücklich „eure Brüder" genannt. Also kann „Brüder" auch verwandte Völker meinen.`,
          objectionBy: 'Islamischer Apologet mit Bibelkenntnis',
          answer: `Das ist dein stärkstes Argument, und es stimmt: „Brüder" kann verwandte Völker meinen. Aber der Kontext entscheidet, und in Dtn 18,15 steht zusätzlich „aus deiner Mitte". Außerdem: Wenn „Brüder" hier verwandte Völker meinte, wären die Edomiter – ausdrücklich so genannt – näherliegend als die Ismaeliten. Und der König in 17,15 „aus deinen Brüdern" musste offensichtlich ein Israelit sein.`,
          sources: [
            { kind: 'bibel', work: 'Deuteronomium', ref: '2,4', quote: `Und gebiete dem Volk und sprich: Ihr werdet durch das Gebiet eurer Brüder, der Kinder Esau, ziehen …`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'ismael-gegenueber-seinen-bruedern',
              objection: `Von Ismael heißt es, er werde „all seinen Brüdern gegenüber wohnen" (Gen 16,12; 25,18). Die Bibel nennt die Israeliten also ausdrücklich Ismaels Brüder.`,
              objectionBy: 'Zakir Naik',
              answer: `In Gen 16,12 und 25,18 sind die „Brüder" Ismaels die Söhne Abrahams und deren Nachkommen – eine Beschreibung seines Wohnorts, nicht eine Definition für Dtn 18. Die Frage ist nicht, ob Israel und Ismael verwandt sind, sondern wen Mose in Dtn 18 mit „aus deiner Mitte, aus deinen Brüdern" meint, wenn er zu Israel spricht. Und dort ist der Bund klar: „Meinen Bund aber will ich aufrichten mit Isaak" (Gen 17,21) – Ismael wird gesegnet (17,20), aber die Bundeslinie und die Propheten kommen durch Isaak.`,
              followUps: [
                {
                  id: 'in-18-18-fehlt-aus-deiner-mitte',
                  objection: `Achte auf den Unterschied: In 18,15 spricht Mose „aus deiner Mitte", aber in 18,18 spricht Gott nur „aus ihren Brüdern" – ohne „aus deiner Mitte". Gottes eigene Worte schließen also gerade nicht auf Israel ein.`,
                  objectionBy: 'Ahmed Deedat',
                  answer: `Schau in den hebräischen Text: Auch 18,18 sagt *mi-qerev ʾaḥêhem* – „aus der **Mitte** ihrer Brüder". Das Wort *qerev* („Mitte, Inneres") steht in beiden Versen. Und genau dieselbe Formel steht ein Kapitel vorher beim König: „Du sollst aus der Mitte deiner Brüder einen König über dich setzen; du darfst nicht einen Fremden über dich setzen, der nicht dein Bruder ist" (Dtn 17,15). Niemand liest daraus, Israels König solle ein Ismaelit sein.`,
                  detail: `Dtn 18,15: *nāvîʾ mi-qirbᵉkā mē-ʾaḥêkā* – „einen Propheten aus deiner Mitte, aus deinen Brüdern". Dtn 18,18: *nāvîʾ ʾāqîm lāhem mi-qerev ʾaḥêhem kāmôkā* – „einen Propheten will ich ihnen erwecken aus der Mitte ihrer Brüder, wie du". Viele englische Übersetzungen geben *mi-qerev* in 18,18 nur mit „from among" wieder; daraus entstand das Missverständnis, die „Mitte" fehle. Dtn 17,15 zeigt, wie das Deuteronomium diese Sprache verwendet: „Brüder" sind Israeliten im Gegensatz zum „Fremden" (*nokrî*). Für das Gespräch: Bitte dein Gegenüber, den hebräischen Text oder eine wörtliche Übersetzung (Elberfelder) nebeneinanderzulegen.`,
                  voices: [
                    { person: 'michael-brown', role: 'als Hebraist', text: `Brown weist darauf hin, dass das Deuteronomium „deine Brüder" konsequent für Mit-Israeliten verwendet – beim König (17,15), beim Leviten (18,2.7), beim Schuldenerlass (15,3.7) – und den „Fremden" ausdrücklich davon abgrenzt. Eine Deutung auf ein anderes Volk widerspricht dem Sprachgebrauch des ganzen Buches.` },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '18,18', quote: `Ich will ihnen einen Propheten, wie du bist, erwecken aus ihren Brüdern und meine Worte in seinen Mund geben; der soll zu ihnen reden alles, was ich ihm gebieten werde.`, original: `נָבִיא אָקִים לָהֶם מִקֶּרֶב אֲחֵיהֶם כָּמוֹךָ`, translation: 'Luther 1912', status: 'verbatim', note: 'Luther übersetzt mi-qerev hier knapp mit „aus"; wörtlich: „aus der Mitte ihrer Brüder".' },
                    { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '17,15', quote: `… so sollst du den zum König über dich setzen, den der HERR, dein Gott, erwählen wird. Du sollst aber aus deinen Brüdern einen zum König über dich setzen. Du kannst nicht irgend einen Fremden, der nicht dein Bruder ist, über dich setzen.`, original: `מִקֶּרֶב אַחֶיךָ תָּשִׂים עָלֶיךָ מֶלֶךְ`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut an Luther 1912 angelehnt.' },
                  ],
                  questionsBack: [
                    `Steht in Dtn 18,18 im Hebräischen *mi-qerev* („aus der Mitte") – ja oder nein?`,
                    `Wenn „aus der Mitte deiner Brüder" in Dtn 17,15 einen Israeliten meint – warum soll dieselbe Formel ein Kapitel später einen Araber meinen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-gleicht-mose-nicht',
      objection: `Mose und Muhammad: natürliche Geburt, Ehe, Kinder, Gesetzgeber, Staatsoberhaupt, natürlicher Tod. Jesus: Jungfrauengeburt, unverheiratet, kein Herrscher, gekreuzigt. Wer gleicht Mose?`,
      objectionBy: 'Ahmed Deedat',
      answer: `Die Liste wählt Merkmale, die die Tora gar nicht nennt. Die Tora definiert die Mose-Ähnlichkeit selbst: von Angesicht zu Angesicht mit Gott und Zeichen und Wunder (Num 12,6–8; Dtn 34,10–12). Ehe, Kinder und Feldzüge teilt Mose mit Millionen Menschen. Jesus dagegen gleicht Mose in den biblischen Zügen: Er stiftet einen Bund mit Blut, speist das Volk in der Wüste, lehrt auf dem Berg, tut Zeichen und Wunder und kennt den Vater wie niemand sonst.`,
      followUps: [
        {
          id: 'jesus-herrschte-nicht',
          objection: `Aber Mose war Herrscher und Gesetzgeber eines Volkes – Jesus hatte nie politische Macht. Muhammad schon.`,
          objectionBy: 'Jamal Badawi',
          answer: `Auch Mose wurde zunächst von seinem Volk verworfen: „Wer hat dich zum Obersten oder Richter über uns gesetzt?" (Ex 2,14; vgl. Apg 7,35), und Israel wollte sich einen anderen Führer wählen (Num 14,4). Jesus gibt ein neues Gebot (Joh 13,34), legt die Tora mit eigener Vollmacht aus (Mt 5,21–48) und herrscht als König, dessen Reich „nicht von dieser Welt" ist (Joh 18,36) und der wiederkommt, um zu richten (Mt 25,31). Politische Macht war nie das biblische Kriterium.`,
          followUps: [
            {
              id: 'jesus-kein-gesetzgeber',
              objection: `Mose brachte ein Gesetz, eine Scharia. Jesus sagte, er sei nicht gekommen, das Gesetz aufzulösen – er brachte kein neues Gesetz. Muhammad brachte wie Mose eine vollständige Scharia. Das ist die eigentliche Ähnlichkeit.`,
              objectionBy: 'Jamal Badawi',
              answer: `Das Zentrum des Mose-Amtes ist nicht ein Gesetzbuch, sondern der Bund: Mose war der Mittler des Bundes am Sinai, besiegelt mit Blut (Ex 24,8: „Das ist das Blut des Bundes"). Jesus nimmt genau diese Worte beim letzten Abendmahl auf: „Das ist mein Blut des neuen Bundes" (Mk 14,24; Lk 22,20) – die Erfüllung der Verheißung eines neuen Bundes (Jer 31,31–34). Und er spricht als Gesetzgeber mit eigener Vollmacht: „Ihr habt gehört, dass gesagt ist … Ich aber sage euch" (Mt 5,21–48). Kein Prophet nach Mose hat so gesprochen.`,
              detail: `Der Hebräerbrief entfaltet den Vergleich ausdrücklich: Mose war „treu in Gottes ganzem Haus als Diener", Christus aber „als Sohn über sein Haus" (Hebr 3,5–6); er ist „Mittler eines besseren Bundes" (Hebr 8,6). Matthäus stellt Jesus bewusst als neuen Mose dar: Bewahrung vor dem Kindermord, Aufenthalt in Ägypten, vierzig Tage in der Wüste, Lehre auf dem Berg. Die Bergpredigt ist dabei nicht weniger, sondern mehr als ein Gesetz – sie zielt auf das Herz (Mt 5,28) und erfüllt Jeremias Verheißung: „Ich will mein Gesetz in ihr Herz schreiben" (Jer 31,33).`,
              sources: [
                { kind: 'bibel', work: 'Exodus (2. Mose)', ref: '24,8', quote: `Da nahm Mose das Blut und besprengte das Volk damit und sprach: Sehet, das ist das Blut des Bundes, den der HERR mit euch macht über allen diesen Worten.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Jeremia', ref: '31,31.33', quote: `Siehe, es kommt die Zeit, spricht der HERR, da will ich mit dem Hause Israel und mit dem Hause Juda einen neuen Bund machen … Ich will mein Gesetz in ihr Herz geben und in ihren Sinn schreiben.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
              ],
              questionsBack: [
                `Wer war nach der Tora Mittler des Bundes mit Blut – und wer spricht beim letzten Abendmahl vom „Blut des neuen Bundes"?`,
                `Welcher Prophet nach Mose sagt „Ich aber sage euch" und stellt sein Wort neben die Tora?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-prophet-in-israel-34-10',
      objection: `Dtn 34,10 sagt: „Es stand hinfort kein Prophet in Israel auf wie Mose." Also kann der verheißene Prophet nicht aus Israel kommen.`,
      objectionBy: 'Zakir Naik',
      answer: `Der Vers blickt zurück: Bis zur Zeit des Verfassers war kein solcher Prophet aufgetreten – das hält die Erwartung von Dtn 18 offen, statt sie nach außen zu verlagern. Und derselbe Vers definiert, was fehlte: einer, den der HERR „von Angesicht zu Angesicht" kannte, mit Zeichen und Wundern. Jesus sagt: „Niemand hat Gott je gesehen; der eingeborene Sohn, der in des Vaters Schoß ist, der hat es uns verkündigt" (Joh 1,18).`,
      followUps: [
        {
          id: 'muhammad-sprach-mit-gott-miradsch',
          objection: `Muhammad sprach in der Himmelsreise (Miʿradsch) mit Allah selbst. Er erfüllt also auch das Kriterium „von Angesicht zu Angesicht".`,
          objectionBy: 'Yasir Qadhi',
          answer: `Ob Muhammad Gott gesehen hat, war schon unter den Gefährten umstritten: Nach einer Überlieferung bei Bukhari sagte Aisha, wer behaupte, Muhammad habe seinen Herrn gesehen, der lüge. Und für die meisten Offenbarungen nennt der Islam selbst einen Vermittler – den Engel Gabriel (2:97). Mose dagegen sprach mit Gott „von Mund zu Mund" ohne Vermittler (Num 12,8). Auch das Wunderkriterium fehlt nach dem Koran: „Uns hat nichts davon abgehalten, die Zeichen zu senden, als dass die Früheren sie für Lüge erklärten" (17:59).`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4855 (Buch des Tafsir, zu Sure 53 an-Najm; vgl. Muslim 177)', quote: `Aisha sagte: Wer dir erzählt, dass Muhammad seinen Herrn gesehen hat, der lügt.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:4855', note: 'Nummer nach sunnah.com-Zählung geprüft (2026): Bericht des Masruq; Aisha beruft sich auf 6:103 und erklärt, Muhammad habe Gabriel zweimal in seiner wahren Gestalt gesehen. Andere Gefährten (z. B. Ibn ʿAbbas, vgl. Tirmidhi 3279) vertraten eine Schau – nach manchen Berichten mit dem Herzen.' },
            { kind: 'koran', work: 'Sure 17 (al-Isra)', ref: '17:59', quote: `Und nichts hielt Uns davon ab, die Zeichen zu senden, außer dass die Früheren sie für Lüge erklärten.`, original: `wa-mā manaʿanā an nursila bi-l-āyāti illā an kadhdhaba bihā l-awwalūn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/17/59' },
          ],
          followUps: [
            {
              id: 'ibn-abbas-schau-mit-dem-herzen',
              objection: `Aishas Meinung ist nur eine von mehreren. Ibn ʿAbbas überliefert, dass Muhammad seinen Herrn gesehen hat – mit dem Herzen. Das ist eine Gottesbegegnung, die der des Mose gleichkommt.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Eine Schau „mit dem Herzen" ist etwas anderes als das, was die Tora über Mose sagt: „Mündlich rede ich mit ihm, und er sieht den HERRN in seiner Gestalt" (Num 12,8). Und Dtn 34,10–12 nennt ein zweites Merkmal: die Zeichen und Wunder, die Mose „vor den Augen ganz Israels" tat. Gerade hier lässt der Koran Muhammad mehrfach ablehnen: Als man Zeichen forderte, sollte er antworten: „Bin ich denn etwas anderes als ein Mensch, ein Gesandter?" (17:93), und: „Die Zeichen sind allein bei Allah, und ich bin nur ein deutlicher Warner" (29:50).`,
              detail: `In 17:90–93 verlangen die Mekkaner konkrete Zeichen – eine Quelle aus der Erde, einen Garten, dass der Himmel herabfalle, einen Aufstieg zum Himmel mit einem Buch. Die Antwort lautet: „Preis sei meinem Herrn! Bin ich denn etwas anderes als ein Mensch, ein Gesandter?" Das Deuteronomium dagegen verbindet die Einzigartigkeit des Mose ausdrücklich mit öffentlichen Machttaten vor Pharao und dem ganzen Volk. Jesus erfüllt beides: Er kennt den Vater wie niemand sonst (Mt 11,27; Joh 1,18) und tut öffentlich Zeichen vor dem ganzen Volk – was selbst seine Gegner nicht bestritten, sondern dämonischer Macht zuschrieben (Mk 3,22). Auch der Koran bezeugt Jesu Wunder (3:49; 5:110).`,
              sources: [
                { kind: 'hadith', work: 'Sahih Muslim', ref: '176 (Kitab al-Iman)', quote: `Ibn ʿAbbas sagte: Er hat ihn mit seinem Herzen gesehen, zweimal.`, translation: 'sinngemäß', status: 'paraphrase', note: 'Nummer nach gängiger sunnah.com-Zählung; nicht eigens geprüft.' },
                { kind: 'koran', work: 'Sure 29 (al-ʿAnkabut)', ref: '29:50', quote: `Und sie sagen: „Warum wurden ihm keine Zeichen von seinem Herrn herabgesandt?" Sag: Die Zeichen sind allein bei Allah, und ich bin nur ein deutlicher Warner.`, original: `qul innamā l-āyātu ʿinda llāhi wa-innamā ana nadhīrun mubīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/29/50' },
                { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '34,10–12', quote: `Und es stand hinfort kein Prophet in Israel auf wie Mose, den der HERR erkannt hätte von Angesicht zu Angesicht, zu allerlei Zeichen und Wundern … und zu aller dieser mächtigen Hand und den großen Gesichten, die Mose tat vor den Augen des ganzen Israel.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
              ],
              questionsBack: [
                `Welche Zeichen tat Muhammad nach dem Koran selbst „vor den Augen" seines ganzen Volkes – wie Mose vor Pharao?`,
              ],
              followUps: [
                {
                  id: 'koran-ist-das-wunder',
                  objection: `Der Koran selbst ist das größte Wunder – unnachahmlich in Sprache und Inhalt. Und die Hadithe berichten von vielen weiteren Zeichen: der Spaltung des Mondes (54:1), Wasser, das aus seinen Fingern floss, Speise, die sich vermehrte.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Die literarische Schönheit des Korans erkenne ich an – aber sie ist ein anderes Zeichen als das, was Dtn 34 beschreibt: Machttaten vor einem ganzen Volk. Literarische Einzigartigkeit beanspruchen auch andere Werke, und ihr Urteil hängt am Geschmack der Leser. Die Wunderberichte der Hadithe stammen aus Sammlungen, die rund zwei Jahrhunderte nach Muhammad entstanden, und stehen in Spannung zu den koranischen Versen, in denen er Zeichen ablehnt (17:59; 17:93; 29:50). Und 54:1 deuten auch muslimische Ausleger teils endzeitlich: „Die Stunde ist nahegekommen, und der Mond hat sich gespalten."`,
                  detail: `Die Herausforderung, etwas Gleichwertiges wie den Koran hervorzubringen (*taḥaddī*, z. B. 2:23), ist für Muslime ein starkes Argument. Fair bleiben: Viele Araber haben die Sprache des Korans als überwältigend erlebt. Der Haken ist methodisch: Wer bestimmt, was „gleichwertig" ist, und nach welchen Maßstäben? Das Kriterium der Tora dagegen ist öffentlich und überprüfbar. Bei den Wunderhadithen gilt: Die Berichte sind respektvoll zu behandeln, aber sie sind spät gesammelt und stehen im Widerspruch zur koranischen Linie, nach der Muhammad gerade *kein* Wundertäter sein sollte. Auch die frühe christliche Polemik (etwa Johannes von Damaskus) wies darauf hin, dass Muhammad nach dem Koran keine Zeichen vorweisen wollte.`,
                  voices: [
                    { person: 'johannes-damaskus', role: 'als früher christlicher Kenner des Islam', text: `Johannes von Damaskus fragt in seiner Darstellung des Islam, warum Mose seine Sendung durch öffentliche Zeichen am Sinai vor dem ganzen Volk bestätigt bekam, Muhammad aber nach eigener Aussage keine Zeichen bringen sollte. Für ihn ist die öffentliche Bezeugung ein Kennzeichen wahrer Prophetie nach der Ordnung der Schrift.` },
                  ],
                  sources: [
                    { kind: 'koran', work: 'Sure 54 (al-Qamar)', ref: '54:1', quote: `Die Stunde ist nahegekommen, und der Mond hat sich gespalten.`, original: `iqtarabati s-sāʿatu wa-nshaqqa l-qamar`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/54/1' },
                    { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien, Kap. 100 (101)', year: 'ca. 743', status: 'paraphrase', note: 'Fragt nach Zeugen und Zeichen für Muhammads Sendung im Vergleich zu Mose am Sinai.' },
                  ],
                  questionsBack: [
                    `Warum lehnt Muhammad im Koran mehrfach ab, Zeichen zu wirken, wenn die Hadithe später so viele berichten?`,
                    `Nach welchem objektiven Maßstab soll ein Außenstehender die Unnachahmlichkeit des Korans prüfen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'worte-in-seinen-mund-ummi',
      objection: `„Ich will meine Worte in seinen Mund legen" – genau so war es bei Muhammad: Er konnte nicht lesen, und der Engel diktierte ihm, was er rezitieren sollte.`,
      objectionBy: 'Ahmed Deedat',
      answer: `„Ich lege meine Worte in deinen Mund" ist eine gewöhnliche Formel für jeden wahren Propheten: Gott sagt sie zu Jeremia (Jer 1,9) und zu Israel (Jes 51,16). Sie bedeutet: Der Prophet spricht Gottes Botschaft, nicht seine eigene. Jesus sagt genau das von sich: „Ich habe nicht von mir selber geredet, sondern der Vater, der mich gesandt hat, der hat mir ein Gebot gegeben, was ich tun und reden soll" (Joh 12,49).`,
      sources: [
        { kind: 'bibel', work: 'Jeremia', ref: '1,9', quote: `Und der HERR reckte seine Hand aus und rührte meinen Mund und sprach zu mir: Siehe, ich lege meine Worte in deinen Mund.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Johannes', ref: '12,49', quote: `Denn ich habe nicht von mir selber geredet; sondern der Vater, der mich gesandt hat, der hat mir ein Gebot gegeben, was ich tun und reden soll.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'jesaja-29-12-ich-kann-nicht-lesen',
          objection: `Jesaja 29,12 sagt sogar: „Man gibt das Buch einem, der nicht lesen kann, und spricht: Lies! Er aber spricht: Ich kann nicht lesen." Das ist die erste Offenbarung an Muhammad (Bukhari 3: „Ich kann nicht lesen").`,
          objectionBy: 'Zakir Naik',
          answer: `Lies den Zusammenhang: Jesaja spricht über Jerusalem („Ariel", 29,1) und ihre geistliche Blindheit. Die Offenbarung ist ihnen wie ein versiegeltes Buch: Der Gelehrte sagt „Es ist versiegelt", der Ungelehrte „Ich kann nicht lesen" (29,11–12) – beide versagen. Das ist eine Gerichtsrede über Israels Verstocktheit, keine Ankündigung eines Propheten. Jesus zitiert das Kapitel in diesem Sinn (Mt 15,8–9 nach Jes 29,13).`,
          followUps: [
            {
              id: 'qera-ist-iqra',
              objection: `Aber das hebräische Wort in Jes 29,12 ist *qᵉrāʾ* – „Lies!" –, genau das arabische *iqraʾ* aus Sure 96,1. Und die Antwort „Ich kann nicht lesen" entspricht wörtlich Muhammads *mā ana bi-qāriʾ*. Das kann kein Zufall sein.`,
              objectionBy: 'Zakir Naik',
              answer: `*Qaraʾa* ist im Hebräischen wie im Arabischen das gewöhnliche Wort für „lesen, rufen, vortragen" – es kommt in der Bibel hunderte Male vor. Ein gemeinsames Verb in zwei verwandten Sprachen ist kein Hinweis auf eine Prophezeiung. Entscheidend ist der Zusammenhang: In Jes 29,11–12 geht es um ein *versiegeltes* Buch, das *niemand* versteht – weder der Gelehrte noch der Ungelehrte. Das Bild beschreibt Israels Verstocktheit, und der nächste Vers sagt warum: „Dies Volk naht sich mir mit seinem Munde … aber ihr Herz ist ferne von mir" (29,13).`,
              detail: `Hinzu kommt: In Jes 29,12 wird dem Ungelehrten ein Buch gereicht, das er lesen soll – in den Berichten von der ersten Offenbarung (Bukhari 3) gibt es kein Buch, sondern der Engel fordert zum Vortragen auf. Wer einzelne Wörter isoliert, kann fast jede Gestalt der Geschichte in der Bibel „finden". Darum ist die Grundregel jeder Auslegung, die auch muslimische Gelehrte für den Koran beanspruchen: Ein Vers wird aus seinem Zusammenhang verstanden (*siyāq*). Für das Gespräch: Lies Jes 29,9–14 gemeinsam vor; der Zusammenhang spricht für sich.`,
              sources: [
                { kind: 'bibel', work: 'Jesaja', ref: '29,11–13', quote: `… daß ihr all die Gesichte sein werden wie die Worte eines versiegelten Buches … Oder gleich als wenn man's gäbe dem, der nicht lesen kann, und spräche: Lieber, lies das! und er spräche: Ich kann nicht lesen. Und der HERR spricht: Darum daß dies Volk zu mir naht mit seinem Munde und mit seinen Lippen mich ehrt, aber ihr Herz ferne von mir ist …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
              ],
              questionsBack: [
                `Über wen spricht Jesaja in 29,13 – „dies Volk, das sich mir mit dem Munde naht"?`,
                `Wird Muhammad in der Höhle Hira ein versiegeltes Buch gereicht?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'petrus-deutet-falsch',
      objection: `Dass Petrus Dtn 18 auf Jesus bezieht (Apg 3,22), ist christliche Deutung. Für uns zählt der Text der Tora, nicht die spätere Auslegung.`,
      objectionBy: 'Shabir Ally',
      answer: `Einverstanden, dass der Text der Tora entscheidet – und der sagt „aus deiner Mitte, aus deinen Brüdern". Petrus' Deutung zeigt aber, dass schon die ersten jüdischen Jesus-Anhänger in Jerusalem, mitten unter Toralehrern, Dtn 18 so verstanden: als Verheißung eines israelitischen Propheten. Die islamische Deutung dagegen erscheint erst Jahrhunderte später. Wer hat den Text näher an seiner eigenen Welt gelesen?`,
      questionsBack: [`Kennst du einen jüdischen Ausleger vor dem Islam, der Dtn 18 auf einen Nicht-Israeliten bezogen hat?`],
    },
  ],
  questionsToAsk: [
    `Wer sind die „Brüder" in Dtn 18,2 und 17,15?`,
    `Warum steht in Dtn 18,15 „aus deiner Mitte"?`,
    `Welche Merkmale nennt die Tora selbst für die Mose-Ähnlichkeit (Num 12,6–8; Dtn 34,10–12)?`,
    `Hat Muhammad nach den islamischen Quellen Gott von Angesicht zu Angesicht gesehen und Wunderzeichen gewirkt?`,
  ],
  avoid: [
    `Nicht behaupten, „Brüder" könne nie verwandte Völker bezeichnen – Dtn 2,4 zeigt das Gegenteil. Argumentiere mit dem Kontext.`,
    `Keine Gegenliste aufstellen, die ebenso selektiv ist wie Deedats. Stütze dich auf die Kriterien des Textes.`,
    `Nicht sagen, Muhammad habe „gar keine" Wunder getan – die Hadithliteratur berichtet Wunder (z. B. Mondspaltung, 54:1). Der Punkt ist, was der Koran selbst über Zeichen sagt.`,
  ],
  concessions: [
    `„Brüder" kann im Hebräischen auch verwandte Völker bezeichnen (Dtn 2,4.8).`,
    `Deedats Liste enthält zutreffende Ähnlichkeiten zwischen Mose und Muhammad (Gesetzgeber, politische Führung); sie sind aber nicht die Kriterien des Textes.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ahmed Deedat', work: 'What the Bible Says about Muhammad', year: '1976', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi (Woodbrooke Studies 2, 1928)', year: '781/782', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Mohammed in der Bibel', 'Deuteronomium 18', 'Prophet wie Mose', 'Deedat'],
  related: [
    'islam-mohammed/paraklet-ist-mohammed',
    'islam-mohammed/weitere-bibelstellen-mohammed',
    'islam-mohammed/mohammed-wahrer-prophet',
    'prophetie/prophezeiungen-vage',
  ],
};

export default claim;
