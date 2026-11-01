import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sikhismus-ein-gott-ohne-inkarnation',
  title: `„Guru Nanak lehrte einen Gott ohne Inkarnation."`,
  proponents: [
    { name: 'Guru Nanak', role: 'Begründer des Sikhismus (1469–1539)', work: 'Japji (Anfang des Guru Granth Sahib)' },
    { name: 'Guru Arjan', role: 'Fünfter Guru der Sikhs, Kompilator des Adi Granth (1563–1606)', work: 'Guru Granth Sahib, Raag Bhairao (Ang 1136)' },
    { name: 'Nikky-Guninder Kaur Singh', role: 'Religionswissenschaftlerin, Colby College', work: 'Sikhism: An Introduction (2011)' },
    { name: 'Pashaura Singh', role: 'Sikh-Gelehrter, University of California, Riverside', work: 'The Guru Granth Sahib: Canon, Meaning and Authority (2000)' },
  ],
  steelman: `Der Sikhismus bekennt einen strengen, reinen Monotheismus. Das Grundbekenntnis, die Mul Mantar, nennt Gott „zeitlose Gestalt, ungeboren, aus sich selbst seiend" (*akal murat, ajuni, saibhang*). Ein Gott, der geboren wird, wäre begrenzt, wandelbar, ein Geschöpf unter Geschöpfen. Guru Arjan formuliert es scharf: „Verbrannt sei der Mund, der sagt, der Herr unterliege der Geburt" (Guru Granth Sahib, Ang 1136). Gott offenbart sich durch sein Wort (*Shabad*), durch den Guru und durch seine Gnade (*nadar*, *gurprasad*) – dazu braucht er weder Menschwerdung noch Kreuz. Der Sikhismus verwirft Kasten, Götzenbilder und Priesterherrschaft und lebt Gleichheit in der Gemeinschaftsküche (*Langar*). Die christliche Inkarnation wirkt daneben wie ein Rückfall in das Avatar-Denken, das Guru Nanak überwunden hat.`,
  biblical: {
    summary: `Auch die Bibel lehrt, dass Gott in seinem göttlichen Wesen ungeschaffen, ewig, unsichtbar und unwandelbar ist (Ps 90,2; Mal 3,6; 1 Tim 6,16). Die Menschwerdung bedeutet nicht, dass Gott zu existieren beginnt oder sich in ein Geschöpf verwandelt, sondern dass das ewige Wort, „durch das alle Dinge gemacht sind", eine menschliche Natur annimmt: „Das Wort ward Fleisch" (Joh 1,3.14). Er „entäußerte sich selbst" (Phil 2,7), ohne aufzuhören, Gott zu sein: In ihm „wohnt die ganze Fülle der Gottheit leibhaftig" (Kol 2,9). Wie im Sikhismus offenbart sich Gott durch sein Wort – doch im Evangelium kommt das Wort selbst.`,
    sources: [
      { kind: 'bibel', work: 'Maleachi', ref: '3,6', quote: `Denn ich bin der HERR und wandle mich nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,18', quote: `Niemand hat Gott je gesehen; der eingeborene Sohn, der in des Vaters Schoß ist, der hat es uns verkündigt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,6–7', quote: `…welcher, ob er wohl in göttlicher Gestalt war, hielt er's nicht für einen Raub, Gott gleich sein, sondern entäußerte sich selbst und nahm Knechtsgestalt an, ward gleich wie ein anderer Mensch …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '2,9', quote: `Denn in ihm wohnt die ganze Fülle der Gottheit leibhaftig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,15', quote: `Denn wir haben nicht einen Hohenpriester, der nicht könnte Mitleiden haben mit unsrer Schwachheit, sondern der versucht ist allenthalben gleichwie wir, doch ohne Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt mit dem hl. Kyrill: Der Logos wurde Mensch, ohne sich zu verwandeln; seine Gottheit blieb unveränderlich und leidensunfähig, während er das Fleisch wahrhaft zu seinem eigenen machte. Der hl. Athanasius betont ausdrücklich, dass der Logos durch die Menschwerdung nicht im Leib eingeschlossen wurde: Während er im Leib war, belebte und lenkte er zugleich das ganze All. Genau das trennt die Menschwerdung von der Vorstellung eines Gottes, der „der Geburt unterliegt" wie die Seelen im Kreislauf der Wiedergeburt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '17', year: 'ca. 318', quote: `Der Logos war nicht im Leib eingeschlossen, noch war er, während er im Leib war, anderswo abwesend; vielmehr belebte er, während er den Leib bewegte, zugleich das All und war im All und doch außerhalb von allem.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', year: '430', quote: `Wir sagen nicht, dass die Natur des Logos verwandelt und Fleisch geworden sei, sondern dass der Logos sich das Fleisch, beseelt von einer vernünftigen Seele, auf unaussprechliche Weise geeint hat.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Sikhismus entstand im Punjab mit Guru Nanak (1469–1539) und neun weiteren menschlichen Gurus; seit 1708 gilt die Schrift, der Guru Granth Sahib, als ewiger Guru. Er lehrt einen Gott (*Ik Onkar*), der Schöpfer, ungeboren und aus sich selbst seiend ist. Zugleich übernimmt er Karma und Seelenwanderung aus dem indischen Umfeld, lehrt aber, dass die Befreiung durch die Gnade Gottes kommt und durch das Gedenken an den göttlichen Namen (*Naam simran*). Bemerkenswert ist, dass der Guru Granth Sahib auch Hymnen hinduistischer und muslimischer Heiliger (etwa Kabir und Baba Farid) enthält.`,
    sources: [
      { kind: 'oestlich', work: 'Guru Granth Sahib, Mul Mantar', ref: 'Ang 1', original: 'ik oankār sati nāmu karatā purakhu nirabhau niravairu akāl mūrati ajūnī saibhaṅ gur prasādi', quote: `Ein Gott, dessen Name Wahrheit ist, die schöpferische Person, ohne Furcht, ohne Feindschaft, zeitlose Gestalt, ungeboren, aus sich selbst seiend – (erkannt) durch die Gnade des Gurus.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'oestlich', work: 'Guru Granth Sahib, Raag Bhairao, Mahalla 5 (Guru Arjan)', ref: 'Ang 1136', quote: `Verbrannt sei der Mund, der sagt, unser Herr und Meister unterliege der Geburt. Er wird nicht geboren und stirbt nicht; er kommt und geht nicht im Kreislauf der Wiedergeburt.`, translation: 'eigene Übersetzung nach gängigen englischen Fassungen', status: 'paraphrase', url: 'https://searchgurbani.com/guru-granth-sahib/ang/1136' },
      { kind: 'oestlich', work: 'Guru Granth Sahib, Japji 4', ref: 'Ang 2', original: 'karamī āvai kapaṛā nadarī mokhu duāru', quote: `Durch Karma erhält man das Gewand (den Leib); durch Seinen gnädigen Blick das Tor der Befreiung.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'gegner', author: 'Nikky-Guninder Kaur Singh', work: 'Sikhism: An Introduction', year: '2011', status: 'paraphrase', quote: `Einführung in Lehre, Geschichte und Praxis des Sikhismus aus Sikh-Perspektive.` },
    ],
  },
  quickAnswer: `Christen stimmen zu: Gott ist in seinem göttlichen Wesen ungeboren, ewig und wandelt sich nicht. Die Menschwerdung heißt nicht, dass Gott zu existieren beginnt oder in den Kreislauf der Geburten gerät – das hat Guru Arjan zu Recht abgelehnt. Sie heißt: Das ewige Wort nimmt eine menschliche Natur an, ohne aufzuhören, Gott zu sein. Der Sikhismus sagt, Gott offenbart sich durch sein Wort und durch menschliche Gurus. Das Evangelium sagt: Das Wort selbst ist gekommen – nicht nur ein Bote, sondern Gott in Person.`,
  keyPoints: [
    `**Gemeinsamer Boden:** Ein Gott, Schöpfer, ungeboren, ewig, gnädig. Das Christentum bejaht die Mul Mantar in Bezug auf Gottes Wesen.`,
    `**Menschwerdung ist kein Avatar:** Gott tritt nicht in den Kreislauf der Wiedergeburten; der ewige Sohn nimmt einmalig und bleibend eine menschliche Natur an (Joh 1,14).`,
    `**Unbegrenzt auch im Leib:** Athanasius: Der Logos war nicht im Leib eingeschlossen, sondern lenkte zugleich das All (De Inc. 17).`,
    `**Auch der Sikhismus kennt menschliche Mittler:** Zehn menschliche Gurus vermittelten Gottes Wort. Warum sollte Gott nicht selbst kommen?`,
    `**Gnade – woher?** Sikhismus und Christentum betonen Gnade. Das Kreuz zeigt, wie Gnade und Gerechtigkeit zusammenkommen (Röm 3,26).`,
    `**Ein lebendiger Zeuge:** Sadhu Sundar Singh wuchs als frommer Sikh auf und fand in Christus, was er gesucht hatte.`,
  ],
  voices: [
    {
      person: 'sundar-singh',
      role: 'als ehemaliger Sikh',
      text: `Sundar Singh wurde 1889 in eine angesehene Sikh-Familie im Punjab geboren und von seiner frommen Mutter in den heiligen Schriften unterwiesen. Als Jugendlicher verbrannte er demonstrativ eine Bibel. In tiefer Verzweiflung, weil er trotz aller Frömmigkeit keinen Frieden fand, betete er, Gott möge sich zeigen – und erlebte nach eigenem Zeugnis eine Begegnung mit dem lebendigen Christus. Er blieb dem Erbe seiner Kindheit in Achtung verbunden, bezeugte aber, dass er in Christus nicht nur eine Lehre über Gott, sondern Gottes eigene Nähe gefunden habe.`,
      sources: [
        { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu: A Study in Mysticism and Practical Religion', year: '1921', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Sadhu Sundar Singh', work: 'At the Master\'s Feet', year: '1922', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Athanasius antwortet auf genau die Sorge, die Guru Arjan bewegte: Wird Gott durch einen Leib begrenzt? Nein – der Logos war im Leib, ohne darin eingeschlossen zu sein. Wie die Sonne, die die Erde bescheint, ohne von ihr beschmutzt zu werden, so heiligte er den Leib, ohne von ihm verändert zu werden. Die Menschwerdung ist nicht Gottes Erniedrigung zu einem bloßen Geschöpf, sondern die Erhebung des Geschöpfs durch Gottes Herablassung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '17', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der unveränderlichen Gottheit Christi',
      text: `Kyrill hielt mit großer Sorgfalt beides fest: Der Logos ist unveränderlich und leidensunfähig – und doch hat er das Fleisch so zu seinem eigenen gemacht, dass man wahrhaft sagen muss, Gott sei aus der Jungfrau geboren und habe im Fleisch gelitten. Das ist keine Verwandlung Gottes in einen Menschen, sondern eine Vereinigung ohne Vermischung. Damit unterscheidet sich die christliche Lehre grundlegend von einem Gott, der „der Geburt unterliegt".`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', status: 'paraphrase' },
      ],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Winfried Corduan stellt den Sikhismus in seiner Einführung fair dar: als eigenständige Religion mit einem strengen Monotheismus, einer hohen Wertschätzung der Gnade und einer beeindruckenden Ethik der Gleichheit und des Dienstes. Er empfiehlt Christen, mit Sikhs bei diesen Gemeinsamkeiten zu beginnen und dann behutsam die Frage zu stellen, wie Gott sich am vollständigsten offenbart: durch Worte und Boten – oder in Person.`,
      sources: [
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', ref: 'Kapitel zum Sikhismus', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ajuni-mund-verbrannt',
      objection: `Gott ist *ajuni* – ungeboren. Guru Arjan sagt: Verbrannt sei der Mund, der sagt, der Herr werde geboren (Ang 1136). Eine Inkarnation erniedrigt Gott zu einem Geschöpf.`,
      objectionBy: 'Pashaura Singh (Linie)',
      answer: `Dem ersten Teil stimme ich zu: Gott wird in seinem göttlichen Wesen nicht geboren, stirbt nicht und wandert nicht durch Wiedergeburten – das bekennen Christen ebenso. Guru Arjan wandte sich gegen die Vorstellung eines Gottes, der wie die Seelen in den Kreislauf der Geburten tritt. Die Menschwerdung ist etwas anderes: Der ewige Sohn nimmt eine menschliche Natur an, ohne aufzuhören, Gott zu sein. Seine Gottheit beginnt nicht und verändert sich nicht.`,
      followUps: [
        {
          id: 'begrenzt-oder-unbegrenzt',
          objection: `Das ist ein Widerspruch: Entweder ist Gott unbegrenzt, oder er steckt in einem Körper. Beides geht nicht.`,
          objectionBy: 'Nikky-Guninder Kaur Singh (sinngemäß)',
          answer: `Athanasius hat genau das bedacht: Der Logos war im Leib, aber nicht darin eingeschlossen; während er im Leib wirkte, belebte und lenkte er zugleich das ganze All (De Inc. 17). Ein Bild: Ein Autor kann sich selbst als Figur in seinen Roman schreiben, ohne aufzuhören, der Autor des ganzen Buches zu sein. Das ist kein Widerspruch, sondern ein Geheimnis, das die Vernunft übersteigt, ohne ihr zu widersprechen.`,
          followUps: [
            {
              id: 'wozu-inkarnation-shabad',
              objection: `Aber warum sollte Gott das überhaupt tun? Er kann durch sein Wort (Shabad) und durch die Gurus wirken.`,
              objectionBy: 'Pashaura Singh (sinngemäß)',
              answer: `Auch der Sikhismus brauchte zehn menschliche Gurus, um Gottes Wort zu vermitteln – Gott offenbart sich also auch nach eurer Lehre durch Menschen. Das Evangelium sagt: Am Ende kam nicht ein weiterer Bote, sondern das Wort selbst (Hebr 1,1–2). Ein Vater kann Briefe schicken – oder selbst kommen. Liebe will Gegenwart. Und nur ein Gott, der unser Leben teilt, kann „Mitleiden haben mit unsrer Schwachheit" (Hebr 4,15).`,
              questionsBack: [`Wenn Gott durch menschliche Gurus sprechen kann – warum sollte er nicht selbst menschliche Natur annehmen können, ohne aufzuhören, Gott zu sein?`],
              followUps: [
                {
                  id: 'granth-ist-lebendiger-guru',
                  objection: `Bei uns ist das Wort selbst der lebendige Guru – der Guru Granth Sahib. Seit Guru Gobind Singh brauchen wir keinen menschlichen Mittler mehr. Das Wort genügt; ein Gottmensch ist überflüssig.`,
                  objectionBy: 'Pashaura Singh (sinngemäß)',
                  answer: `Ich achte die Ehrfurcht, mit der Sikhs das Wort Gottes behandeln. Aber das Evangelium sagt etwas Erstaunliches: „Das Wort ward Fleisch und wohnte unter uns" (Joh 1,14) – nicht Buch, sondern Person. Ein Buch kann trösten und lehren, aber es kann nicht mit dir leiden, für dich sterben und auferstehen. Bemerkenswert finde ich: Sikhs behandeln den Granth mit großer persönlicher Ehrfurcht – man trägt ihn unter einem Baldachin, bettet ihn zur Nacht. Das zeigt die tiefe Sehnsucht nach Gottes Gegenwart. Christen glauben, dass diese Sehnsucht in Christus erfüllt ist.`,
                  detail: `Der Sikhismus hat eine tiefe Theologie des Wortes (*shabad*, *gurbani*): Gott offenbart sich durch das göttliche Wort, das die Gurus empfingen. Christen können hier viel Gemeinsames entdecken – auch für sie ist Gottes Wort „lebendig und kräftig" (Hebr 4,12). Der Unterschied liegt im Johannesprolog: Der ewige Logos, durch den alles geschaffen ist, hat Fleisch angenommen. Für Kyrill von Alexandrien ist das der Kern des Heils: Weil das Wort Fleisch wurde, kann unser Fleisch am Leben Gottes teilhaben – in der Eucharistie empfangen Christen nicht nur Worte über Gott, sondern den lebendigmachenden Leib des Wortes selbst.`,
                  voices: [
                    { person: 'kyrill-alexandrien', role: 'als Lehrer der Menschwerdung', text: `Kyrill betont, dass der Logos sich das Fleisch so zu eigen gemacht hat, dass es „lebendigmachendes Fleisch" wurde. Darum ist die Eucharistie für ihn Teilhabe am Leben des menschgewordenen Wortes – mehr als Belehrung, nämlich Vereinigung.`, sources: [
                      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 6', year: 'ca. 425–428', status: 'paraphrase', quote: `Das Fleisch des Logos ist lebendigmachend, weil es das eigene Fleisch des Lebens selbst ist.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn Gottes Wort so lebendig ist, dass ihr ihm wie einer Person begegnet – warum sollte es undenkbar sein, dass es Person geworden ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gnade-ohne-kreuz',
      objection: `Auch wir kennen Gnade – Gurprasad, Nadar. „Durch Karma der Leib, durch Gnade das Tor der Befreiung" (Japji 4). Dafür braucht es keine Kreuzigung.`,
      objectionBy: 'Nikky-Guninder Kaur Singh (Linie)',
      answer: `Die Betonung der Gnade ist eine wunderbare Brücke zwischen uns. Aber eine Frage bleibt: Wenn Karma wirklich und gerecht ist – wie verhält sich die Gnade zur Gerechtigkeit? Wird das Unrecht einfach übergangen? Im Kreuz zeigt Gott, dass er „gerecht ist und gerecht macht" (Röm 3,26): Er vergibt, indem er die Folgen der Schuld selbst trägt. Gnade ist bei uns nicht weniger souverän, aber sie ist teuer.`,
      followUps: [
        {
          id: 'gott-souveraen',
          objection: `Gott ist souverän. Er schuldet niemandem eine Rechtfertigung für seine Gnade.`,
          objectionBy: 'Pashaura Singh (sinngemäß)',
          answer: `Das stimmt: Gott schuldet uns nichts. Aber Gottes Gnade ist nicht willkürlich, sondern im Einklang mit seiner Heiligkeit und Gerechtigkeit – sonst wäre er wie ein Richter, der einen Mörder freispricht, als wäre nichts geschehen. Das Kreuz offenbart beides zugleich: die vollkommene Barmherzigkeit und die vollkommene Gerechtigkeit Gottes (vgl. den Claim „Karma ist gerechter als Gnade").`,
          followUps: [
            {
              id: 'hukam-statt-suehne',
              objection: `Alles geschieht nach Gottes *Hukam*, seinem Willen und seiner Ordnung. Wer sich dem Hukam fügt, wird frei. Ein Sühnetod ist dafür überflüssig – Gott verlangt Hingabe, kein Opfer.`,
              objectionBy: 'Nikky-Guninder Kaur Singh (sinngemäß)',
              answer: `Die Hingabe an Gottes Willen ist auch für Christen das Herz des Glaubens – Jesus betete in Gethsemane: „Nicht mein, sondern dein Wille geschehe" (Lk 22,42). Aber die ehrliche Frage ist: Wer fügt sich wirklich ganz? Ich jedenfalls nicht. Christus ist der eine Mensch, der sich Gottes Willen vollkommen hingegeben hat – bis zum Tod –, und er tut es für uns und in uns. Das Kreuz ist kein Opfer, das Gott braucht, sondern die vollkommene Hingabe, die wir nicht leisten können.`,
              detail: `Die erste Strophe des Japji endet mit dem Gedanken, dass der Mensch frei wird, indem er im Hukam, im Willen Gottes, wandelt. Das ist eine tiefe und schöne Einsicht. Christen sehen in Jesus Christus die Verwirklichung genau dieses Ideals: Er „ward gehorsam bis zum Tode, ja zum Tode am Kreuz" (Phil 2,8). In der Taufe werden wir mit ihm vereint, damit sein Gehorsam unser Leben verwandelt. So wird aus dem Ideal der Hingabe, an dem wir scheitern, eine geschenkte Wirklichkeit.`,
              sources: [
                { kind: 'oestlich', work: 'Guru Granth Sahib, Japji 1', ref: 'Ang 1', original: 'hukami rajāī calaṇā nānak likhiā nāli', quote: `Im Hukam seines Willens zu wandeln, o Nanak – das ist (dem Menschen) aufgeschrieben.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
                { kind: 'bibel', work: 'Lukas', ref: '22,42', quote: `Vater, willst du, so nimm diesen Kelch von mir; doch nicht mein, sondern dein Wille geschehe!`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'haumai-statt-suende',
                  objection: `Unser Problem heißt nicht „Sünde", sondern *Haumai* – die Ich-Verhaftung. Sie wird durch *Nam Simran*, das beständige Gedenken des göttlichen Namens, überwunden. Dafür braucht es keinen Erlöser.`,
                  objectionBy: 'Pashaura Singh (sinngemäß)',
                  answer: `Die Diagnose ist der christlichen sehr nahe: Auch die Väter sehen im Stolz, dem Kreisen um das eigene Ich, die Wurzel aller Sünden. Aber kann das Ich sich selbst überwinden? Interessant ist: Auch im Sikhismus geschieht das Gedenken des Namens durch *gur prasad* – durch die Gnade des Gurus, wie es am Ende des Mul Mantar heißt. Ihr bekennt also selbst, dass der Mensch Gnade braucht. Das Evangelium sagt, wie diese Gnade zu uns gekommen ist: in einer Person, die sich selbst erniedrigte, um unser Ich zu heilen.`,
                  detail: `Die christliche Tradition kennt eine dem Nam Simran verwandte Praxis: das Jesusgebet, das beständige Anrufen des Namens Jesu, das die Wüstenväter Ägyptens pflegten. Der Unterschied liegt nicht in der Praxis, sondern darin, wessen Name angerufen wird und was dieser Name bedeutet: „Jesus" heißt „Gott rettet" (Mt 1,21). Das Ich wird nicht durch Willensanstrengung zum Schweigen gebracht, sondern durch die Liebe dessen geheilt, der zuerst geliebt hat.`,
                  sources: [
                    { kind: 'oestlich', work: 'Guru Granth Sahib, Mul Mantar', ref: 'Ang 1', original: 'gur prasādi', quote: `(Erkannt) durch die Gnade des Gurus.`, translation: 'eigene Übersetzung', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn die Überwindung des Haumai durch Gnade geschieht – was genau ist diese Gnade, und woher kommt sie?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sikhismus-gerechter',
      objection: `Der Sikhismus ist moderner und gerechter: keine Kasten, keine Priesterkaste, Gleichheit von Mann und Frau, die Gemeinschaftsküche für alle.`,
      objectionBy: 'Nikky-Guninder Kaur Singh',
      answer: `Der Einsatz der Sikhs für Gleichheit und Dienst ist bewundernswert – der Langar ist ein großartiges Zeugnis. Christen teilen dieses Ideal: „Hier ist kein Jude noch Grieche, kein Knecht noch Freier, kein Mann noch Weib; denn ihr seid allzumal einer in Christo" (Gal 3,28). Aber die Ethik entscheidet nicht die Frage, wer Jesus ist. Und die christliche Gleichheit gründet gerade darin, dass Gott selbst unsere gemeinsame Menschheit angenommen hat.`,
      followUps: [
        {
          id: 'kirchen-kasten-indien',
          objection: `Eure Kirchen in Indien haben Kastendenken aber auch geduldet.`,
          objectionBy: 'Pashaura Singh (sinngemäß)',
          answer: `Das ist leider wahr, und es widerspricht dem Evangelium (Jak 2,1–4). Ehrlicherweise haben auch viele Sikh-Gemeinschaften bis heute mit Kastendenken zu kämpfen – etwa die Entstehung eigener Gemeinden von Dalit-Sikhs zeigt das. Das Versagen von Anhängern widerlegt in beiden Fällen nicht die Lehre. Die Frage bleibt: Ist Jesus der, der er zu sein beanspruchte?`,
          followUps: [
            {
              id: 'guru-tegh-bahadur',
              objection: `Unsere Gurus sind für die Freiheit anderer gestorben: Guru Tegh Bahadur ließ sich 1675 hinrichten, weil er Hindus gegen Zwangsbekehrung verteidigte. Auch wir kennen Selbsthingabe für andere – dazu brauchen wir keinen Gottmenschen am Kreuz.`,
              objectionBy: 'Nikky-Guninder Kaur Singh (sinngemäß)',
              answer: `Das Martyrium Guru Tegh Bahadurs für die Gewissensfreiheit anderer verdient tiefe Achtung – ein Mensch, der für den Glauben fremder Menschen stirbt, ist ein großes Zeugnis. Christen kennen solche Märtyrer ebenfalls, bis zu den Kopten unserer Tage. Aber der Unterschied liegt nicht im Mut, sondern in der Person: Wenn ein Mensch für andere stirbt, ist das edel; wenn Gott selbst in Christus für seine Feinde stirbt und den Tod besiegt, ist das Erlösung. Ein Märtyrer bezeugt die Wahrheit – Christus ist die Wahrheit, die bezeugt wird.`,
              detail: `Das Neue Testament unterscheidet sorgfältig zwischen dem Tod der Zeugen (griechisch *martyres*) und dem Tod Christi. Stephanus stirbt im Blick auf Christus (Apg 7,55–60); Christus stirbt „für unsere Sünden" (1 Kor 15,3). Die koptische Kirche ehrt ihre Märtyrer so sehr, dass sie ihren Kalender mit der „Ära der Märtyrer" (284 n. Chr.) beginnen lässt – aber sie betet nicht zu ihnen als Erlösern, sondern bittet um ihre Fürbitte bei dem einen Erlöser.`,
              questionsBack: [`Kann der Tod eines Menschen, so edel er ist, den Tod selbst besiegen?`],
            },
          ],
        },
      ],
    },
    {
      id: 'sundar-singh-vision',
      objection: `Sundar Singh war ein verzweifelter Jugendlicher. Seine Vision beweist gar nichts.`,
      objectionBy: 'Pashaura Singh (sinngemäß)',
      answer: `Eine Vision allein beweist tatsächlich nichts. Aber Sundar Singh hat nicht unter Druck konvertiert, sondern nachdem er die Bibel verbrannt hatte, und er lebte danach jahrzehntelang in Armut, Dienst und Verfolgung – das macht ihn zu einem glaubwürdigen Zeugen. Die eigentliche Begründung des christlichen Glaubens liegt aber nicht in Visionen, sondern in der öffentlichen, geschichtlichen Auferstehung Jesu.`,
      followUps: [
        {
          id: 'nanak-offenbarung',
          objection: `Auch Guru Nanak hatte eine Offenbarung, als er im Fluss Vein verschwand und drei Tage später zurückkehrte. Warum zählt seine Erfahrung weniger?`,
          objectionBy: 'Nikky-Guninder Kaur Singh (sinngemäß)',
          answer: `Ich achte Guru Nanaks Gotteserfahrung und seine Hingabe. Aber persönliche Offenbarungserlebnisse lassen sich von außen nicht prüfen – das gilt für jede Tradition. Das Christentum verweist auf öffentliche Ereignisse: den Tod Jesu unter Pontius Pilatus und die Begegnungen vieler Zeugen mit dem Auferstandenen. Und Jesus beanspruchte, der einzige Weg zum Vater zu sein (Joh 14,6) – wer beide ehren will, muss diese Aussage prüfen.`,
          followUps: [
            {
              id: 'nanak-gegen-ritual',
              objection: `Guru Nanak hat leere Rituale, Priester und Bilderverehrung scharf kritisiert. Eure Sakramente, Ikonen und Priester sind genau der Ritualismus, gegen den er aufstand.`,
              objectionBy: 'Pashaura Singh (sinngemäß)',
              answer: `Leere Rituale haben auch die Propheten und Jesus kritisiert: „Dies Volk naht sich zu mir mit seinem Munde … aber ihr Herz ist ferne von mir" (Mt 15,8). Darin stimme ich Guru Nanak zu. Aber die Sakramente sind keine menschlichen Erfindungen, sondern Gaben, die Christus selbst gestiftet hat: „Tut dies zu meinem Gedächtnis." Und der Mensch ist Leib und Seele – darum braucht Glaube auch Zeichen. Auch der Sikhismus kennt Amrit-Weihe, Ardas, Langar und die fünf Ks. Leibhaftige Religion ist nicht Ritualismus, sondern menschlich.`,
              detail: `Die orthodoxe Kirche lehrt, dass die Sakramente nicht mechanisch wirken, sondern Begegnung mit Christus im Glauben sind. Ikonen werden nicht angebetet, sondern verehrt; die Ehre geht auf das Urbild über, wie schon Basilius der Große sagte (Über den Heiligen Geist 18,45). Der Grund für Ikonen ist gerade die Menschwerdung: Weil Gott ein sichtbares Gesicht angenommen hat, darf man ihn darstellen.

Guru Nanaks Kritik richtete sich gegen Heuchelei und gegen Rituale, die das Herz nicht verändern. Diese Kritik können Christen teilen – sie trifft auch christliche Gewohnheitsfrömmigkeit. Aber sie trifft nicht die Gaben, durch die Christus selbst sich schenkt.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '15,8', quote: `Dies Volk naht sich zu mir mit seinem Munde und ehrt mich mit seinen Lippen; aber ihr Herz ist ferne von mir.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Ist die Amrit-Weihe für dich ein leeres Ritual – oder ein Zeichen, durch das Gott wirkt? Warum sollte das bei der Taufe anders sein?`],
            },
          ],
        },
      ],
    },
    {
      id: 'ik-onkar-gegen-trinitaet',
      objection: `*Ik Onkar* – Gott ist Einer. Darin ist der Sikhismus klar und kompromisslos monotheistisch, wie der Islam. Eure Dreieinigkeit klingt dagegen nach drei Göttern.`,
      objectionBy: 'Pashaura Singh (sinngemäß)',
      answer: `Christen bekennen ebenso kompromisslos: „Wir glauben an den einen Gott." Die Dreieinigkeit heißt nicht drei Götter, sondern ein Gott, ein Wesen in drei Personen – Vater, Sohn und Heiliger Geist. Interessant ist, dass der Mul Mantar Gott *karta purakh* nennt, die schöpferische Person. Auch ihr bekennt also einen persönlichen Gott. Die Dreieinigkeit beantwortet eine Frage, die sich daraus ergibt: Wenn Gott Liebe ist, wen liebte er vor der Schöpfung? In Gott selbst gibt es ewige Gemeinschaft der Liebe.`,
      detail: `Gregor von Nazianz, „der Theologe", fasst die kirchliche Lehre so: Die Gottheit ist ungeteilt in den unterschiedenen Personen – wie drei Sonnen, die ineinander sind und ein einziges Licht ausstrahlen. Es gibt keinen Rang, keine Trennung, keine Vermischung. Das Bekenntnis von Nizäa und Konstantinopel, das die koptische Kirche in jeder Liturgie spricht, beginnt mit dem Wort „ein".

Für das Gespräch mit Sikhs ist hilfreich: Der Sikhismus betont, dass Gott sowohl *nirgun* (ohne Eigenschaften, jenseits aller Begriffe) als auch *sargun* (mit Eigenschaften, in der Schöpfung gegenwärtig) ist. Er kennt also selbst die Spannung zwischen Gottes Unbegreiflichkeit und seiner Nähe. Die Dreieinigkeit ist die christliche Antwort darauf, wie der unbegreifliche Gott wirklich nahe sein kann, ohne aufzuhören, der eine Gott zu sein.`,
      voices: [
        { person: 'gregor-nazianz', role: 'als Lehrer der Dreieinigkeit', text: `Gregor betont in seinen Theologischen Reden, dass die Christen einen Gott verehren: Die Gottheit ist eine, ungeteilt in den drei Personen, und jede ist ganz Gott. Die Dreiheit zerteilt die Einheit nicht, und die Einheit vermischt die Personen nicht.`, sources: [
          { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Fünfte Theologische Rede (Rede 31)', ref: '14', year: '380', status: 'paraphrase', quote: `Für uns gibt es einen Gott; die Gottheit ist ungeteilt in den Unterschiedenen, wie in drei Sonnen, die einander umschließen, ein einziges Licht.` },
        ] },
      ],
      sources: [
        { kind: 'oestlich', work: 'Guru Granth Sahib, Mul Mantar', ref: 'Ang 1', original: 'ik oankār … karatā purakhu', quote: `Ein Gott … die schöpferische Person.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
        { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen …`, status: 'verbatim' },
      ],
      questionsBack: [`Wenn Gott Liebe ist – wen liebte er, bevor irgendetwas geschaffen war?`],
    },
  ],
  questionsToAsk: [
    `Wenn Gott durch zehn menschliche Gurus sprechen konnte – warum sollte er nicht selbst eine menschliche Natur annehmen können?`,
    `Wie verhält sich Gottes Gnade zu seiner Gerechtigkeit, wenn Karma wirklich ist?`,
    `Meint Guru Arjan in Ang 1136 einen Gott, der in den Kreislauf der Wiedergeburten tritt – oder die christliche Menschwerdung?`,
    `Was würdest du tun, wenn Gott selbst gekommen wäre, um dich zu suchen?`,
  ],
  avoid: [
    `Bezeichne den Sikhismus nicht als „Mischung aus Hinduismus und Islam" – Sikhs empfinden das als herabsetzend; er ist eine eigenständige Religion.`,
    `Verwechsle Sikhs nicht mit Muslimen oder Hindus und mach dich nicht über Turban oder Kirpan lustig.`,
    `Behaupte nicht, die Mul Mantar widerspreche dem christlichen Gottesbild in allem – sie stimmt über Gottes Wesen weitgehend mit christlichem Bekenntnis überein.`,
  ],
  concessions: [
    `Der Sikhismus lebt Gleichheit und Dienst (Langar, Seva) vorbildlich – oft konsequenter als christliche Gemeinden.`,
    `Die Mul Mantar beschreibt Gottes Wesen in Worten, die Christen weitgehend bejahen können.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'W. Owen Cole / Piara Singh Sambhi', work: 'The Sikhs: Their Religious Beliefs and Practices', year: '1978', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'B. H. Streeter / A. J. Appasamy', work: 'The Sadhu', year: '1921', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sikhismus', 'Guru Nanak', 'Mul Mantar', 'Inkarnation', 'Gnade', 'Sundar Singh'],
  related: [
    'hinduismus/jesus-war-avatar',
    'hinduismus/karma-gerechter-als-gnade',
    'islam-gottheit-christi/jesus-betete-ass-schlief',
    'christologie-chalcedon/kopten-sind-monophysiten',
    'pluralismus/alle-religionen-gleich-wahr',
  ],
};

export default claim;
