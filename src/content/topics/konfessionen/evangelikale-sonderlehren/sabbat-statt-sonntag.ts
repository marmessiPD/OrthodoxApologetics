import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sabbat-statt-sonntag',
  title: `„Christen müssen den Sabbat halten, nicht den Sonntag."`,
  proponents: [
    { name: 'Ellen G. White', role: 'Mitbegründerin der Siebenten-Tags-Adventisten (1827–1915)', work: 'Der große Kampf (The Great Controversy, 1888/1911)' },
    { name: 'Siebenten-Tags-Adventisten', role: 'Weltweite Freikirche (gegründet 1863)', work: 'Glaubensüberzeugungen, Art. 20 „Der Sabbat"' },
    { name: 'Samuele Bacchiocchi', role: 'Adventistischer Kirchenhistoriker (1938–2008)', work: 'From Sabbath to Sunday (1977)' },
    { name: 'Doug Batchelor', role: 'Adventistischer Evangelist, Amazing Facts', work: 'Fernseh- und Internetpredigten' },
  ],
  steelman: `Der Sabbat ist kein jüdisches Sondergesetz, sondern eine Schöpfungsordnung: Gott ruhte am siebten Tag, segnete und heiligte ihn (Gen 2,2–3) – lange vor Mose und vor Israel. Er steht mitten in den Zehn Geboten, die niemand für abgeschafft hält: „Gedenke des Sabbattags, dass du ihn heiligest" (Ex 20,8). Jesus hielt den Sabbat „nach seiner Gewohnheit" (Lk 4,16), ebenso Paulus (Apg 17,2), und die Frauen ruhten am Sabbat „nach dem Gesetz", nachdem Jesus gestorben war (Lk 23,56). Nirgends im Neuen Testament wird der Sabbat aufgehoben oder auf den Sonntag verlegt. Die Verlegung geschah später: Im 2. Jahrhundert distanzierten sich Christen in Rom aus antijüdischen Motiven vom Sabbat, und der Sonntag – der Tag des Sonnengottes – wurde unter Konstantin (321) zum staatlichen Ruhetag. Daniel hatte vorausgesagt, eine Macht werde versuchen, „Zeit und Gesetz zu ändern" (Dan 7,25). Wer Gott gehorchen will, hält sein Gebot – nicht die Tradition Roms.`,
  biblical: {
    summary: `Der Sabbat ist eine gute Gabe Gottes und Erinnerung an die Schöpfung. Im Neuen Bund gehört er aber zu den „Schatten" des Kommenden, deren Wirklichkeit Christus ist: „So lasset nun niemand euch Gewissen machen über … Sabbate; welches ist der Schatten von dem, das zukünftig ist; aber der Körper selbst ist in Christo" (Kol 2,16–17). Paulus stellt die Haltung bestimmter Tage frei (Röm 14,5) und warnt Heidenchristen, die wieder „Tage, Monate, Feste und Jahre" halten (Gal 4,10–11). Die Christen versammelten sich „am ersten Tage der Woche", um das Brot zu brechen (Apg 20,7; 1 Kor 16,2), und Johannes nennt diesen Tag „des Herrn Tag" (Offb 1,10). Der Sabbat ist nach Ex 31,13–17 ein **Bundeszeichen zwischen Gott und Israel**; die wahre Sabbatruhe ist die Ruhe in Christus (Hebr 4,9–10; Mt 11,28).`,
    detail: `**Kol 2,16–17** nennt ausdrücklich „Sabbate" neben Speisen, Festen und Neumonden – die klassische alttestamentliche Reihe (vgl. 1 Chr 23,31; Hos 2,13). Die adventistische Deutung, gemeint seien nur „zeremonielle" Sabbate (Feiertage), passt nicht zur Reihung, die die Wochensabbate als dritten Teil nach Jahresfesten und Neumonden nennt.

**Der Sabbat als Bundeszeichen:** „Darum sollen die Kinder Israel den Sabbat halten … Er ist ein ewiges Zeichen zwischen mir und den Kindern Israel" (Ex 31,16–17). Wie die Beschneidung war er ein Zeichen des Sinaibundes, das Heidenchristen nach Apg 15 nicht auferlegt wurde – das Apostelkonzil nennt vier Bedingungen, der Sabbat ist nicht darunter.

**Die Zehn Gebote im NT:** Neun der zehn Gebote werden im Neuen Testament als Gebote für Christen wiederholt (z. B. Röm 13,9; Eph 6,2; 1 Kor 10,14); das Sabbatgebot nicht.

**Jesus und der Sabbat:** Jesus hielt als Jude unter dem Gesetz (Gal 4,4) den Sabbat, erklärte sich aber zum „Herrn des Sabbats" (Mk 2,28). Paulus ging am Sabbat in die Synagogen, weil dort die Juden versammelt waren, denen er predigen wollte (Apg 17,2–3) – nicht, um den Sabbat als christliche Pflicht zu lehren.

**Der erste Tag:** Christus ist am ersten Tag auferstanden (Mt 28,1), erschien an diesem Tag den Jüngern (Joh 20,19) und acht Tage später wieder (20,26); der Geist kam an Pfingsten, ebenfalls einem Sonntag. Die Gemeinde versammelte sich am ersten Tag zum Brotbrechen (Apg 20,7) und legte an diesem Tag die Kollekte zurück (1 Kor 16,2).`,
    sources: [
      { kind: 'bibel', work: 'Kolosser', ref: '2,16–17', quote: `So lasset nun niemand euch Gewissen machen über Speise oder über Trank oder über bestimmte Feiertage oder Neumonde oder Sabbate; welches ist der Schatten von dem, das zukünftig ist; aber der Körper selbst ist in Christo.`, translation: 'Luther 1912', status: 'verbatim', original: `ἢ σαββάτων` },
      { kind: 'bibel', work: 'Römer', ref: '14,5', quote: `Einer hält einen Tag vor dem andern; der andere aber hält alle Tage gleich. Ein jeglicher sei in seiner Meinung gewiß.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,10–11', quote: `Ihr haltet Tage und Monate und Feste und Jahre. Ich fürchte für euch, daß ich vielleicht umsonst habe an euch gearbeitet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '20,7', quote: `Am ersten Tage der Woche aber, da die Jünger zusammenkamen, das Brot zu brechen, predigte ihnen Paulus.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '16,2', quote: `An jeglichem ersten Tag der Woche lege bei sich selbst ein jeglicher unter euch zurück und sammle, was ihm wohl gefällt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '1,10', quote: `Ich war im Geist an des HERRN Tag und hörte hinter mir eine große Stimme wie einer Posaune.`, translation: 'Luther 1912', status: 'verbatim', original: `ἐν τῇ κυριακῇ ἡμέρᾳ` },
      { kind: 'bibel', work: '2. Mose', ref: '31,16–17', quote: `Darum sollen die Kinder Israel den Sabbat halten, daß sie ihn auch bei ihren Nachkommen halten zum ewigen Bund. Er ist ein ewiges Zeichen zwischen mir und den Kindern Israel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,9–10', quote: `Darum ist noch eine Ruhe vorhanden dem Volke Gottes. Denn wer zu seiner Ruhe gekommen ist, der ruht auch von seinen Werken gleichwie Gott von seinen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche feiert den **Sonntag** als „Tag des Herrn", den Tag der Auferstehung und des achten, neuen Schöpfungstages – wie die Kirche seit den Aposteln. Zugleich **ehrt sie den Samstag** als Festtag der Schöpfung und als Tag, an dem Christus im Grab ruhte: An Samstagen wird – wie am Sonntag – nicht streng gefastet, mit Ausnahme des Karsamstags, und es wird Liturgie gefeiert. Die Kirche verwirft aber, den Sabbat als heilsnotwendiges Gesetz aufzuerlegen. Die koptische Kirche ist zudem der lebendige Beweis, dass der Sonntag keine „Erfindung Roms" ist: Sie hält ihn seit ältester Zeit und hat nie unter römischer Jurisdiktion gestanden.`,
    detail: `**Die frühesten Zeugnisse (alle vor Konstantin):**
- **Didache 14,1** (um 100): „Am Herrentag des Herrn versammelt euch, brecht das Brot und sagt Dank."
- **Ignatius von Antiochien** (um 110), über Judenchristen, die zum neuen Glauben kamen: Sie leben „nicht mehr nach dem Sabbat, sondern nach dem Herrentag", an dem auch unser Leben aufging (Magn. 9,1).
- **Barnabasbrief 15** (wohl aus Alexandrien, frühes 2. Jh.): „Deshalb begehen wir den achten Tag mit Freude, an dem auch Jesus von den Toten auferstand."
- **Justin der Märtyrer** (um 155): Am „Tag der Sonne" versammeln sich alle in Stadt und Land; man liest die Schriften, betet und feiert die Eucharistie, weil Gott am ersten Tag die Welt schuf und Christus an diesem Tag auferstand (1 Apol. 67).

**Die Ehre des Samstags im Osten:** Die Apostolischen Konstitutionen (4. Jh.) mahnen, Sabbat und Herrentag festlich zu begehen – den einen als Gedächtnis der Schöpfung, den anderen der Auferstehung. Der 64. Apostolische Kanon verbietet das Fasten am Sonntag und am Samstag (außer dem einen Samstag vor Ostern). Die koptische Kirche hat diese Ordnung bewahrt.

**Konstantin (321)** erließ ein Gesetz über die Sonntagsruhe – aber da feierten die Christen den Sonntag schon seit fast drei Jahrhunderten. Er hat ihn nicht eingeführt, sondern staatlich geschützt.`,
    sources: [
      { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre)', ref: '14,1', year: 'um 100', quote: `Am Herrentag des Herrn aber versammelt euch, brecht das Brot und sagt Dank, nachdem ihr zuvor eure Übertretungen bekannt habt.`, original: `Κατὰ κυριακὴν δὲ κυρίου συναχθέντες κλάσατε ἄρτον καὶ εὐχαριστήσατε`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Magnesier', ref: '9,1', year: 'um 110', quote: `… die nicht mehr den Sabbat halten, sondern nach dem Herrentag leben, an dem auch unser Leben aufging durch ihn und seinen Tod.`, original: `μηκέτι σαββατίζοντες, ἀλλὰ κατὰ κυριακὴν ζῶντες`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', work: 'Barnabasbrief', ref: '15,9', year: 'frühes 2. Jh.', quote: `Deshalb begehen wir auch den achten Tag mit Freude, an dem auch Jesus von den Toten auferstand.`, status: 'paraphrase', note: 'Entstehung wahrscheinlich in Alexandrien.' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '67', year: 'um 155', status: 'paraphrase', quote: `Am Tag, den man Sonntag nennt, kommen alle, die in Städten oder auf dem Land wohnen, zusammen … weil es der erste Tag ist, an dem Gott die Welt schuf, und an dem Jesus Christus, unser Erlöser, von den Toten auferstand.` },
      { kind: 'konzil', work: 'Apostolische Kanones, Kanon 64', year: '4. Jh.', status: 'paraphrase', quote: `Wer am Herrentag oder am Sabbat fastet – außer an dem einen –, wird, wenn er Kleriker ist, abgesetzt, wenn Laie, ausgeschlossen.` },
    ],
  },
  quickAnswer: `Der Sabbat ist eine gute Gabe Gottes – die koptische Kirche ehrt den Samstag bis heute als Festtag und fastet an ihm nicht (außer am Karsamstag). Aber Paulus sagt: Niemand soll euch wegen der Sabbate richten, sie sind „Schatten" – die Wirklichkeit ist Christus (Kol 2,16–17). Die ersten Christen versammelten sich am „ersten Tag der Woche" (Apg 20,7) – dem „Tag des Herrn" (Offb 1,10), dem Tag der Auferstehung. Das bezeugen Didache, Ignatius und Justin lange vor Konstantin.`,
  keyPoints: [
    `**Kol 2,16–17; Röm 14,5; Gal 4,10:** Der Sabbat ist „Schatten" – Christen dürfen wegen der Sabbathaltung nicht gerichtet werden.`,
    `**Apg 20,7; 1 Kor 16,2; Offb 1,10:** Versammlung und Brotbrechen am ersten Tag – dem „Tag des Herrn".`,
    `**Ex 31,16–17:** Der Sabbat ist Bundeszeichen zwischen Gott und Israel; Apg 15 erlegt ihn den Heidenchristen nicht auf.`,
    `**Vor Konstantin:** Didache 14 (um 100), Ignatius Magn. 9 (um 110), Barnabas 15, Justin 1 Apol. 67 (um 155) – der Sonntag ist apostolische Praxis, keine römische Erfindung.`,
    `**Die koptische Kirche** feiert den Sonntag und ehrt zugleich den Samstag – sie hat nie unter Rom gestanden und widerlegt damit die These einer „römischen Verlegung".`,
  ],
  voices: [
    {
      person: 'ignatius-antiochien',
      role: 'als Zeuge der Zeit um 110',
      text: `Ignatius schreibt an die Magnesier über Christen, die aus dem Judentum kamen: Sie haben die alte Lebensweise verlassen und leben „nicht mehr nach dem Sabbat, sondern nach dem Herrentag", an dem unser Leben durch Christus aufging. Das ist besonders wichtig, weil Ignatius aus Antiochien in Syrien stammt – nicht aus Rom – und nur wenige Jahrzehnte nach den Aposteln schreibt. Der Sonntag war also schon im ersten Viertel des 2. Jahrhunderts im Osten das Kennzeichen christlichen Lebens.`,
      sources: [{ kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Magnesier', ref: '8–10', status: 'paraphrase' }],
    },
    {
      person: 'justin',
      role: 'als Apologet, der dem Kaiser den christlichen Gottesdienst beschrieb',
      text: `Justin erklärt um 155 dem Kaiser Antoninus Pius, was Christen tun: Am Sonntag versammeln sie sich, lesen „die Denkwürdigkeiten der Apostel oder die Schriften der Propheten", der Vorsteher predigt, man betet, bringt Brot, Wein und Wasser, und es wird die Eucharistie gefeiert. Er begründet den Tag doppelt: Schöpfungsbeginn und Auferstehung. In seinem Dialog mit dem Juden Tryphon erklärt er außerdem, warum Christen den Sabbat nicht halten: Er war Israel als Zeichen gegeben; der wahre Sabbat ist die beständige Abkehr von der Sünde.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '67', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit Tryphon', ref: '12; 18–21', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als alexandrinischer Theologe der neuen Schöpfung',
      text: `Die unter dem Namen des Athanasius überlieferte Schrift „Über Sabbat und Beschneidung" (ihre Echtheit ist umstritten) deutet den Übergang vom Sabbat zum Herrentag heilsgeschichtlich: Der Sabbat war das Ende der ersten Schöpfung; der Herrentag ist der Anfang der zweiten, neuen Schöpfung in Christus. Früher wurde der Sabbat geehrt, nun der Herrentag, weil die Erneuerung der Schöpfung vollendet ist. Diese Sicht prägt die alexandrinische und koptische Tradition: Der Sonntag ist der „achte Tag", der Tag der Ewigkeit.`,
      sources: [{ kind: 'kirchenvater', author: 'Pseudo-Athanasius (unter dem Namen des Athanasius überliefert)', work: 'De sabbatis et circumcisione', ref: 'PG 28, 133–141 (CPG 2244)', year: '4. Jh.?', status: 'paraphrase', note: 'Fundstelle geprüft: Migne druckt die Schrift unter den zweifelhaften Werken; die Mauriner hielten sie für unecht, Karl Holl (1899) trat für die Echtheit ein, Willy Rordorf (1972) widersprach. Daher nicht als sicheres Athanasius-Wort zitieren, sondern als alexandrinische Überlieferung unter seinem Namen.' }],
    },
    {
      person: 'pelikan',
      role: 'als Dogmenhistoriker',
      text: `Pelikan betont, dass die frühe Kirche ihre Identität in der Feier des Herrentags fand: Die Eucharistie am Tag der Auferstehung war das Zentrum des christlichen Lebens, lange bevor es staatliche Regelungen gab. Die These einer späteren „Verlegung" durch Rom oder Konstantin lässt sich mit den Quellen des 2. Jahrhunderts aus Syrien, Kleinasien und Ägypten nicht vereinbaren.`,
      sources: [{ kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1', year: '1971', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'sabbat-ist-schoepfungsordnung',
      objection: `„Der Sabbat stammt aus der Schöpfung (Gen 2,2–3), nicht vom Sinai. Er gilt also für alle Menschen, nicht nur für Israel."`,
      objectionBy: 'Doug Batchelor',
      answer: `Gott ruhte am siebten Tag und heiligte ihn – das ehren wir. Aber in Genesis wird nirgends berichtet, dass Adam, Noah oder Abraham einen Sabbat hielten; das Gebot an Menschen erscheint erst in Ex 16 und am Sinai, und dort ausdrücklich als „Zeichen zwischen mir und den Kindern Israel" (Ex 31,17). Die Schöpfungsruhe Gottes erfüllt sich für Christen in der Ruhe, in die Christus uns führt (Hebr 4,9–10) – und in der neuen Schöpfung, die mit der Auferstehung am ersten Tag beginnt.`,
      questionsBack: [`Wo in Genesis wird erzählt, dass ein Mensch vor Mose den Sabbat hielt?`],
      followUps: [
        {
          id: 'zehn-gebote-ewig',
          objection: `„Aber der Sabbat steht in den Zehn Geboten! Willst du etwa sagen, dass wir jetzt stehlen und töten dürfen?"`,
          objectionBy: 'Adventistischer Evangelist',
          answer: `Natürlich nicht. Das moralische Gesetz gilt, und neun der zehn Gebote werden im Neuen Testament für Christen ausdrücklich wiederholt. Das Sabbatgebot als Bindung an den siebten Tag wird dagegen nie wiederholt, sondern in Kol 2,16–17 den „Schatten" zugeordnet. Sein moralischer Kern – Gott Zeit zu weihen und zu ruhen – bleibt und wird im Herrentag erfüllt.`,
          followUps: [
            {
              id: 'kolosser-nur-zeremonielle-sabbate',
              objection: `„Kol 2,16 meint nur die zeremoniellen Sabbate – die jährlichen Feiertage –, nicht den Wochensabbat."`,
              objectionBy: 'Samuele Bacchiocchi',
              answer: `Paulus nennt „Feiertage" (Jahresfeste), „Neumonde" (Monatsfeste) **und** „Sabbate" – genau die Reihe, mit der das Alte Testament die jährlichen, monatlichen und wöchentlichen heiligen Zeiten zusammenfasst (1 Chr 23,31; 2 Chr 2,3; Hos 2,13). Wenn die Jahresfeiertage schon genannt sind, wären „Sabbate" eine bloße Wiederholung. Die natürliche Lesart: auch der Wochensabbat.`,
              sources: [
                { kind: 'bibel', work: '1. Chronik', ref: '23,31', quote: `… und die Brandopfer dem HERRN zu opfern auf die Sabbate, Neumonde und Feste.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'rom-und-konstantin',
      objection: `„Der Sonntag wurde im 2. Jahrhundert in Rom aus antijüdischen Gründen eingeführt und unter Konstantin, einem Sonnenverehrer, zum Gesetz. Das ist die Änderung von ‚Zeit und Gesetz' aus Dan 7,25."`,
      objectionBy: 'Samuele Bacchiocchi / Ellen G. White',
      answer: `Die ältesten Zeugen für den Sonntag kommen **nicht** aus Rom: Ignatius aus Antiochien (um 110), die Didache wahrscheinlich aus Syrien, der Barnabasbrief wahrscheinlich aus Alexandrien. Und das NT selbst nennt den ersten Tag als Versammlungstag (Apg 20,7). Konstantins Gesetz von 321 kam fast drei Jahrhunderte später und schützte eine bestehende Praxis. Und die koptische Kirche – die nie unter Rom stand und sich nach 451 sogar von Rom trennte – hat den Sonntag immer gefeiert.`,
      sources: [
        { kind: 'gegner', author: 'Samuele Bacchiocchi', work: 'From Sabbath to Sunday: A Historical Investigation of the Rise of Sunday Observance in Early Christianity', year: '1977', status: 'paraphrase', note: 'Dissertation an der Päpstlichen Universität Gregoriana in Rom; die beste wissenschaftliche Darstellung der adventistischen Sicht.' },
        { kind: 'fachliteratur', author: 'D. A. Carson (Hg.)', work: 'From Sabbath to Lord’s Day: A Biblical, Historical and Theological Investigation', year: '1982', status: 'paraphrase', note: 'Ausführliche wissenschaftliche Antwort auf Bacchiocchi.' },
      ],
      questionsBack: [`Wenn Rom den Sonntag erfunden hat – warum feiern ihn dann auch die koptische, äthiopische, armenische und syrische Kirche, die nie unter Rom standen?`],
      followUps: [
        {
          id: 'herrentag-ist-sabbat',
          objection: `„‚Des Herrn Tag' in Offb 1,10 ist der Sabbat – Jesus nennt sich ‚Herr des Sabbats' (Mk 2,28)."`,
          objectionBy: 'Adventistischer Lehrer',
          answer: `Das griechische Wort *kyriakē* („herrlich", „dem Herrn gehörend") wird in der frühchristlichen Literatur, die Offb am nächsten steht, ausnahmslos für den Sonntag gebraucht: Didache 14,1, Ignatius Magn. 9,1 („nicht mehr sabbatisierend, sondern nach dem Herrentag lebend") – dort steht der Herrentag dem Sabbat sogar gegenüber. Kein früher Christ hat den Ausdruck für den Samstag verwendet.`,
          followUps: [
            {
              id: 'mal-des-tieres',
              objection: `„Am Ende der Zeit wird der Sonntag durch Gesetz erzwungen werden – das ist das Malzeichen des Tieres (Offb 13). Du solltest dich jetzt entscheiden."`,
              objectionBy: 'Ellen G. White (nach Der große Kampf)',
              answer: `Fairerweise: Adventisten sagen nicht, dass heutige Sonntagschristen das Malzeichen tragen. Aber die Deutung von Offb 13 als Sonntagsgesetz findet sich in keinem Text der Offenbarung selbst, sondern stammt aus Ellen Whites Visionen im 19. Jahrhundert. Die Offenbarung beschreibt das Malzeichen als Zeichen der Anbetung des Tieres – nicht als Wochentag. Die Märtyrer der koptischen Kirche starben am Sonntag wie am Samstag für Christus, nicht für einen Kalender.`,
              questionsBack: [`Steht in Offb 13 oder 14 irgendwo das Wort „Sonntag" oder „Sabbat"?`],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-und-paulus-hielten-sabbat',
      objection: `„Jesus ging ‚nach seiner Gewohnheit' am Sabbat in die Synagoge (Lk 4,16), Paulus ebenso (Apg 17,2). Wir folgen ihrem Beispiel."`,
      objectionBy: 'Adventistischer Evangelist',
      answer: `Jesus lebte als Jude „unter dem Gesetz" (Gal 4,4) – er hielt auch Passa, ging zu den Tempelfesten und wurde beschnitten. Niemand folgert daraus, dass Christen beschnitten werden müssen. Paulus ging am Sabbat in die Synagoge, weil dort die Juden versammelt waren, denen er Christus verkündigen wollte („und redete mit ihnen … und tat ihnen auf und legte ihnen vor, dass Christus musste leiden", Apg 17,2–3). Seine eigene Lehre über den Sabbat steht in Kol 2 und Röm 14.`,
      followUps: [
        {
          id: 'kopten-halten-doch-samstag',
          objection: `„Interessant: Du sagst selbst, dass die Kopten den Samstag ehren. Dann gibst du uns ja recht!"`,
          objectionBy: 'Adventistischer Gesprächspartner',
          answer: `Wir ehren den Samstag als Festtag der Schöpfung und als Tag der Grabesruhe Christi – das ist alte, gemeinsame Tradition, die auch adventistische Autoren schon anerkannt haben. Aber wir machen ihn nicht zum heilsnotwendigen Gebot und stellen ihn nicht über den Tag der Auferstehung. Die Kirche hat beides bewahrt: die Ehre des siebten Tages und die Freude des achten. Gerade das zeigt, dass der Sonntag den Sabbat nicht aus Feindschaft verdrängt hat, sondern ihn in Christus erfüllt.`,
          sources: [
            { kind: 'sonstiges', work: 'Saturday and Sunday in the Coptic Church', year: '1945', status: 'paraphrase', url: 'https://www.ministrymagazine.org/archive/1945/11/saturday-and-sunday-in-the-coptic-church', note: 'Artikel in der adventistischen Zeitschrift „Ministry", der die koptische Ehre des Samstags dokumentiert.' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie verstehst du „Sabbate … welches ist der Schatten" in Kol 2,16–17?`,
    `Warum nennt das Apostelkonzil (Apg 15) den Sabbat nicht unter den Bedingungen für Heidenchristen?`,
    `Wie erklärst du Didache 14 und Ignatius Magn. 9 – beide aus dem Osten, beide vor 120?`,
    `Warum feiern Kirchen, die nie unter Rom standen (Kopten, Äthiopier, Armenier, Syrer), den Sonntag?`,
    `Ist ein Christ, der am Sonntag die Auferstehung feiert, deshalb ungehorsam gegen Gott?`,
  ],
  avoid: [
    `Nicht behaupten, Adventisten seien keine Christen oder leugneten die Trinität. Die Siebenten-Tags-Adventisten bekennen die Trinität und die Gottheit Christi.`,
    `Nicht behaupten, der Sonntag sei durch Konstantin eingeführt worden – dann hättest du das Argument der Gegenseite übernommen.`,
    `Nicht abwertend über den Sabbat sprechen. Die koptische Kirche ehrt den Samstag.`,
  ],
  concessions: [
    `Der Sabbat ist eine gute Ordnung Gottes, und die Schöpfungsruhe in Gen 2 ist für alle Menschen bedeutsam.`,
    `Konstantins Sonntagsgesetz (321) und spätere staatliche Regelungen haben die Sonntagsruhe gefördert; die Verbindung zum „Tag der Sonne" spielte in der römischen Umwelt eine Rolle (Justin benutzt den Namen selbst).`,
    `Manche frühe Christen hielten aus jüdischer Herkunft weiterhin auch den Sabbat; das Verhältnis war im 1. Jahrhundert nicht überall gleich geregelt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'D. A. Carson (Hg.)', work: 'From Sabbath to Lord’s Day', year: '1982', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie, Kap. 65–67', status: 'paraphrase' },
    { kind: 'kirchenvater', work: 'Didache, Kap. 9–14', status: 'paraphrase' },
    { kind: 'gegner', author: 'Samuele Bacchiocchi', work: 'From Sabbath to Sunday', year: '1977', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sabbat', 'Sonntag', 'Adventisten', 'Herrentag', 'Didache', 'Ignatius'],
  related: ['fasten-liturgie/liturgie-tote-rituale', 'kirchengeschichte-mythen/konstantin-verfaelschte', 'judentum-messias/tora-ewig-gueltig', 'antike-parallelen/christliche-feste-heidnisch'],
};

export default claim;
