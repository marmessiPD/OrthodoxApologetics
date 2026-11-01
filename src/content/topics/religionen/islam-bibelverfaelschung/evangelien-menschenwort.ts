import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evangelien-menschenwort',
  title: `„Die Evangelien wurden von unbekannten Menschen geschrieben, nicht von Gott herabgesandt."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten über Inspiration und Verfasserschaft' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Is the Bible God\'s Word? (1980)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vorträge über Offenbarungsverständnis in Islam und Christentum' },
  ],
  steelman: `„Der Koran ist Gottes direkte Rede, Wort für Wort durch den Engel Gabriel herabgesandt und vom Propheten wörtlich weitergegeben. Die Evangelien sind etwas völlig anderes: Sie wurden Jahrzehnte nach Jesus auf Griechisch geschrieben, von Autoren, die sich nicht namentlich nennen – die Überschriften ‚nach Matthäus' usw. kamen später hinzu. Lukas sagt offen, er habe recherchiert und Berichte anderer gesammelt (Lk 1,1–4). Matthäus und Lukas schreiben große Teile von Markus ab. Das ist menschliche Geschichtsschreibung, keine Offenbarung. Selbst wenn sie gute Absichten hatten – ihr Werk ist Menschenwort über Jesus, nicht Gottes Wort an die Menschen."`,
  biblical: {
    summary: `Das christliche Verständnis von Inspiration ist kein Diktat: Gott spricht **durch** Menschen, mit ihrer Sprache, ihrem Stil und auch ihrer Recherche – „die heiligen Menschen Gottes haben geredet, getrieben von dem heiligen Geist" (2 Petr 1,21); „alle Schrift, von Gott eingegeben" (*theopneustos*, 2 Tim 3,16). Die Evangelien wurden innerhalb der Lebenszeit von Augenzeugen geschrieben und von Anfang an einheitlich Matthäus, Markus, Lukas und Johannes zugeschrieben (Papias, Irenäus). Dass Lukas Augenzeugen befragte (Lk 1,1–4), ist kein Einwand gegen seine Zuverlässigkeit, sondern ihr Fundament.`,
    detail: `**Die frühe Bezeugung der Verfasser:** Papias (frühes 2. Jh., bei Eusebius) nennt Markus als Dolmetscher des Petrus und erwähnt Matthäus; Irenäus (um 180) nennt alle vier. Es gibt in der gesamten Handschriftenüberlieferung keine konkurrierenden Namen – ein auffälliger Befund, wenn die Titel erfunden wären. Warum hätte man zwei Evangelien Nicht-Aposteln (Markus, Lukas) zugeschrieben, wenn man frei erfand?

**Offenbarung in Christus:** Für den christlichen Glauben ist die höchste Offenbarung nicht ein Buch, sondern eine Person: „Das Wort ward Fleisch" (Joh 1,14). Die Evangelien sind das apostolische Zeugnis von diesem Wort. Deshalb haben sie die Form von Berichten über Jesus.`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '1,21', quote: `Denn es ist noch nie eine Weissagung aus menschlichem Willen hervorgebracht; sondern die heiligen Menschen Gottes haben geredet, getrieben von dem heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '3,16', quote: `Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Strafe, zur Besserung, zur Züchtigung in der Gerechtigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Lukas will nach sorgfältiger Erkundung von Anfang an der Reihe nach berichten, was die Augenzeugen und Diener des Wortes überliefert haben, damit Theophilus die Zuverlässigkeit der Lehre erkenne.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ehrt den Evangelisten Markus als ihren Gründer und ersten Bischof von Alexandrien. Die Väter bezeugen einmütig die vier Evangelisten: Papias und Irenäus im 2. Jahrhundert, Clemens von Alexandrien und Origenes im 3. Die Kirche hat die Evangelien nicht „gemacht", sondern als apostolisches Zeugnis empfangen, in der Liturgie gelesen und gegen Fälschungen verteidigt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius (nach Papias)', work: 'Kirchengeschichte', ref: 'III,39,15', year: 'um 325 (Papias frühes 2. Jh.)', quote: `Markus, der Dolmetscher des Petrus, schrieb sorgfältig auf, was er von den Worten und Taten des Herrn aus der Erinnerung des Petrus wusste.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1', year: 'um 180', quote: `Matthäus schrieb für die Hebräer, Markus überlieferte die Predigt des Petrus, Lukas die des Paulus, Johannes schrieb in Ephesus.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der kritischen Forschung werden die Evangelien meist zwischen etwa 65 und 95 n. Chr. datiert; viele Forscher halten die traditionellen Verfasserangaben für spätere Zuschreibungen, andere (Bauckham, Hengel, P. J. Williams) verteidigen sie mit guten Gründen. Einigkeit besteht darüber, dass die Evangelien antike Biografien sind, die auf Augenzeugenüberlieferung zurückgreifen, und dass sie zu den am frühesten bezeugten Biografien der Antike gehören.`,
    sources: [
      { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006/2017', quote: `Die Evangelien beruhen auf dem Zeugnis benannter Augenzeugen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Martin Hengel', work: 'The Four Gospels and the One Gospel of Jesus Christ', year: '2000', quote: `Die Evangelientitel waren von Anfang an mit den Schriften verbunden; es gab keine anonyme Phase.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Christen glauben nicht, dass Gott diktierte, sondern dass er durch Menschen sprach – mit ihrer Sprache und auch ihrer Recherche (2 Petr 1,21). Die Evangelien entstanden zu Lebzeiten von Augenzeugen und werden von Anfang an einhellig Matthäus, Markus, Lukas und Johannes zugeschrieben. Und der Koran selbst verweist die Christen seiner Zeit auf genau dieses Evangelium (5:47). Muslime vertrauen beim Leben ihres Propheten übrigens auf Überlieferungen, die erst 150–200 Jahre später gesammelt wurden.`,
  keyPoints: [
    `**Inspiration ist kein Diktat:** Gott spricht durch Menschen (2 Petr 1,21; 2 Tim 3,16) – ein anderes, nicht minderwertiges Offenbarungsverständnis.`,
    `**Frühe, einheitliche Zuschreibung:** Papias, Irenäus, alle Handschriften – keine konkurrierenden Verfassernamen.`,
    `**Zeitnähe:** Die Evangelien entstanden innerhalb von etwa 30–60 Jahren nach Jesus, solange Augenzeugen lebten.`,
    `**Recherche stärkt Glaubwürdigkeit:** Lukas befragt Augenzeugen (Lk 1,1–4) – so arbeiten Historiker.`,
    `**Der Koran verweist auf dieses Evangelium:** Die Christen des 7. Jahrhunderts sollten nach ihm richten (5:47) – siehe das Islamische Dilemma.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker und Evangelist',
      text: `Lukas stellt seinem Evangelium ein Vorwort voran, das dem Stil antiker Geschichtsschreiber entspricht: Er hat allem „von Anfang an sorgfältig nachgeforscht", sich auf die „Augenzeugen und Diener des Wortes" gestützt und will „der Reihe nach" berichten, damit sein Leser Gewissheit erlangt. Für Lukas sind historische Sorgfalt und Gottes Wirken kein Gegensatz – Gott handelt in der Geschichte, und darum muss man sie genau erzählen.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Vorwort des Lukas über seine Quellen und Methode.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler',
      text: `Bauckham argumentiert, dass die Evangelien eng an benannte Augenzeugen gebunden sind: Namen wie Simon von Kyrene „der Vater des Alexander und Rufus" (Mk 15,21) verweisen auf Personen, die die ersten Leser noch befragen konnten. Die Evangelien sind nicht das Produkt anonymer Gemeinden, sondern Augenzeugenzeugnis in literarischer Form.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006/2017', quote: `Benannte Personen als Hinweis auf Augenzeugen als Quellen der Evangelien.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler (Ortskenntnis und Namensstatistik)',
      text: `Williams zeigt, dass die Evangelien genaue Kenntnisse über Orte, Bräuche und sogar die Häufigkeit von Personennamen im Palästina des 1. Jahrhunderts enthalten – etwa dass die häufigsten Namen (Simon, Josef, Maria) in den Evangelien entsprechend oft vorkommen und durch Zusätze unterschieden werden. Solche Details konnten spätere Autoren fern von Palästina kaum erfinden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Orts- und Namenskenntnis der Evangelien als Hinweis auf Nähe zu den Ereignissen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der Überlieferung im 2. Jahrhundert',
      text: `Irenäus war Schüler des Polykarp, der den Apostel Johannes gekannt hatte. Er bezeugt um 180, wer die Evangelien schrieb und in welcher Situation, und kennt bereits die feste Sammlung von vier Evangelien. Zwischen den Aposteln und Irenäus liegt eine einzige Generation von Lehrern – eine ungewöhnlich kurze und nachprüfbare Kette.`,
      sources: [
        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,1,1', year: 'um 180', quote: `Angaben zu den vier Evangelisten.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'anonym-titel-spaeter',
      objection: `Die Evangelien sind anonym. Kein Autor nennt seinen Namen im Text. Die Titel „nach Matthäus" usw. wurden erst im 2. Jahrhundert hinzugefügt.`,
      objectionBy: 'Bart D. Ehrman (aufgegriffen von Shabir Ally)',
      answer: `Viele antike Werke nennen den Autor nicht im Text, sondern im Titel – das war üblich. Entscheidend ist: In der gesamten Überlieferung gibt es keine konkurrierenden Namen. Hätte man die Titel frei erfunden, hätte man berühmtere Namen gewählt als Markus und Lukas, die keine Apostel waren. Und schon Papias im frühen 2. Jahrhundert kennt Markus als Dolmetscher des Petrus.`,
      questionsBack: [
        `Kennst du eine Handschrift, die eines der Evangelien einem anderen Autor zuschreibt?`,
      ],
      followUps: [
        {
          id: 'koran-verfasser-sicher',
          objection: `Beim Koran wissen wir genau, wer ihn empfing und weitergab – das ist der Unterschied.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Auch der Koran wurde nach Mohammeds Tod von anderen gesammelt und unter Uthman in eine Standardfassung gebracht (Bukhari 4986–4987). Und das Wissen über Mohammeds Leben stammt aus Hadithsammlungen und Biografien, die 150 bis 200 Jahre nach ihm entstanden – al-Bukhari starb 870. Die Evangelien liegen viel näher an Jesus als diese Quellen an Mohammed. Wenn du diesen Quellen traust, kannst du den Evangelien nicht wegen „Späte" misstrauen.`,
          detail: `Dieser Vergleich ist kein Angriff auf die islamischen Quellen, sondern eine Bitte um gleiche Maßstäbe. Ibn Ishaqs Prophetenbiografie (gest. 767) ist nur in späteren Bearbeitungen erhalten, vor allem bei Ibn Hisham (gest. um 833).`,
          followUps: [
            {
              id: 'koran-ist-mutawatir',
              objection: `Du verwechselst Koran und Hadith. Der Koran ist *mutawātir* überliefert – in jeder Generation von so vielen Menschen, dass ein Irrtum ausgeschlossen ist. Das gibt es bei keinem anderen Buch.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Die massenhafte Überlieferung des uthmanischen Textes gestehe ich gern zu – sie ist beeindruckend. Aber sie beginnt *nach* einem Engpass: Zaid sammelte die Verse aus verstreuten Quellen (Sahih al-Bukhari 4986), Uthman ließ die anderen Kodizes verbrennen (4987), und eure eigenen Sammlungen berichten von Versen, die nicht mehr im Mushaf stehen (z. B. Sahih Muslim 1050; Sahih al-Bukhari 6829). Breite Überlieferung ab einem bestimmten Punkt sagt nichts darüber, was vor diesem Punkt verloren ging. Die Evangelien dagegen wurden von Anfang an auf vielen unabhängigen Wegen überliefert, ohne zentrale Vereinheitlichung.`,
              detail: `Auch beim Neuen Testament gibt es eine „Massenüberlieferung" – in Liturgie, Väterzitaten und Übersetzungen über alle Kirchen hinweg. Der Unterschied ist nicht die Menge, sondern die Geschichte: Beim Koran steht am Anfang eine staatliche Vereinheitlichung, beim Neuen Testament ein Netz voneinander unabhängiger Gemeinden. Für die Frage „Was war ursprünglich?" ist das zweite das bessere Fundament.`,
              sources: [
                { kind: 'hadith', work: 'Sahih Muslim', ref: '1050', quote: `Abu Musa al-Asch'ari: Wir pflegten eine Sure zu rezitieren, die an Länge und Strenge der Sure Bara'a glich; ich habe sie vergessen, außer einem Satz.`, status: 'paraphrase', url: 'https://sunnah.com/muslim:1050' },
              ],
              questionsBack: [
                `Wenn Abu Musa eine ganze Sure vergaß, die die Gefährten rezitierten – was genau wurde dann massenhaft überliefert?`,
              ],
              followUps: [
                {
                  id: 'naskh-at-tilawa',
                  objection: `Diese Verse wurden von Gott selbst abrogiert – ihre Rezitation wurde aufgehoben (*naskh at-tilāwa*). „Was Wir an Versen aufheben oder in Vergessenheit geraten lassen …" (2:106). Gott hat sie entfernt, nicht die Menschen.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Dann muss die Behauptung „perfekt bewahrt" eingeschränkt werden: Nach eurer eigenen Tradition gab es offenbarte Verse, die nicht mehr im Koran stehen – im Fall der Steinigung sogar mit fortgeltendem Gebot. Umar fürchtete laut Sahih al-Bukhari 6829, man werde einmal sagen: „Wir finden den Steinigungsvers nicht im Buch Allahs." Die Abrogationslehre ist eine nachträgliche Erklärung für einen Befund. Ich respektiere sie als Glaubenslehre – aber dann darfst du der Bibel nicht vorwerfen, dass bei ihr Varianten sichtbar sind.`,
                  detail: `Die klassische Lehre unterscheidet drei Arten von *naskh*: Aufhebung des Gebots bei bleibendem Text, Aufhebung des Textes bei bleibendem Gebot (Steinigungsvers) und Aufhebung von beidem (etwa die „zehn Stillungen" nach Sahih Muslim 1452). Für Christen ist der Vergleich lehrreich: Was im Islam als göttliche Abrogation gilt, würde bei der Bibel als Beweis für Verlust und Verfälschung gewertet. Gleiche Maßstäbe würden beide Schriften fairer beurteilen.`,
                  sources: [
                    { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:106', quote: `Was Wir an Versen aufheben oder in Vergessenheit geraten lassen, dafür bringen Wir einen besseren oder einen gleichwertigen.`, original: `mā nansakh min āyatin aw nunsihā naʾti bi-khayrin minhā aw mithlihā`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/2/106' },
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6829', quote: `Umar: Ich fürchte, dass nach langer Zeit jemand sagt: Wir finden die Steinigung nicht im Buch Allahs – und man so durch Unterlassen einer Pflicht, die Allah herabsandte, in die Irre geht.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6829' },
                  ],
                  questionsBack: [
                    `Wenn ein offenbarter Vers nicht mehr im Koran steht, sein Gebot aber gilt – in welchem Sinn ist der Koran dann vollständig bewahrt?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'matthaeus-kopiert-markus',
      objection: `Matthäus und Lukas schreiben große Teile von Markus ab. Ein Augenzeuge wie Matthäus hätte doch nicht von Markus abschreiben müssen. Das ist menschliches Kompilieren, keine Offenbarung.`,
      objectionBy: 'Shabir Ally',
      answer: `Antike Historiker benutzten selbstverständlich gute Quellen – auch Augenzeugen griffen auf bewährte Berichte zurück. Wenn Markus die Predigt des Petrus festhielt, hatte selbst ein Apostel allen Grund, diesen Bericht zu übernehmen. Gottes Geist kann durch Sammeln und Ordnen genauso wirken wie durch Eingebung. Und dass drei Evangelien so eng übereinstimmen, zeigt, wie sorgfältig sie mit der Überlieferung umgingen.`,
      followUps: [
        {
          id: 'inspiration-durch-recherche-unmoeglich',
          objection: `Wenn Gott spricht, braucht er keine Recherche. Offenbarung heißt: Gott diktiert. Alles andere ist Menschenwerk.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Das ist das islamische Offenbarungsmodell – du setzt es als Maßstab für alle Offenbarung voraus. Aber auch im Koran gibt es Passagen, in denen Menschen sprechen, etwa die Fatiha („Dich allein beten wir an") oder Engel („Wir kommen nur auf Befehl deines Herrn herab", 19:64). Muslime erklären das mit einem gedachten „Sprich!". Gott kann also auch nach islamischem Verständnis durch menschliche Rede sprechen.`,
          detail: `Die christliche Lehre: Die Schrift ist ganz Gottes Wort und ganz menschliches Wort – Gott bedient sich der Persönlichkeit, Sprache und Arbeit der Verfasser. Die Väter verglichen das mit der Menschwerdung: Wie das ewige Wort Fleisch annahm, so nimmt das geschriebene Wort menschliche Sprache an.`,
          followUps: [
            {
              id: 'lukas-recherchierte',
              objection: `Lukas gibt doch selbst zu, dass er nur recherchiert hat: „nachdem ich alles von Anfang an genau erkundet habe" (Lk 1,3). Kein Wort von Offenbarung – er ist ein Historiker, kein Prophet.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Genau das macht ihn wertvoll: Lukas beruft sich auf Augenzeugen (*autoptai*, Lk 1,2) und will seinem Leser „Gewissheit" geben (1,4). Ein Bericht, der sich auf überprüfbare Zeugen stützt, ist historisch stärker als einer, der sich nur auf eine private Eingebung beruft. Und Inspiration schließt Forschung nicht aus: Der Geist Gottes kann einen Menschen gerade beim sorgfältigen Prüfen leiten. Lukas' Genauigkeit lässt sich übrigens prüfen – Titel von Beamten, Orte und Personen in der Apostelgeschichte haben sich durch Inschriften immer wieder als zutreffend erwiesen.`,
              detail: `Beispiele: Die „Politarchen" von Thessaloniki (Apg 17,6) sind durch Inschriften belegt; der Prokonsul Gallio in Korinth (Apg 18,12) durch die Gallio-Inschrift von Delphi, die zugleich eine Datierung des Paulus-Aufenthalts erlaubt. Colin Hemer hat Dutzende solcher Details zusammengetragen. Ein Autor, der im Kleinen so genau ist, verdient auch im Großen Vertrauen.`,
              voices: [
                {
                  person: 'lukas',
                  role: 'als Historiker des Urchristentums',
                  text: `Lukas stellt sein Werk bewusst in die Tradition antiker Geschichtsschreibung: Er nennt seinen Adressaten, beschreibt seine Methode, beruft sich auf Augenzeugen und Diener des Wortes und datiert das Auftreten des Täufers nach den Regierungsjahren des Tiberius und den Amtsträgern seiner Zeit (Lk 3,1–2). Er will kein Mythenerzähler sein, sondern ein Zeuge dessen, was „unter uns geschehen ist".`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Sintemal sich's viele unterwunden haben, zu stellen die Rede von den Geschichten, so unter uns ergangen sind, wie uns das gegeben haben, die es von Anfang selbst gesehen und Diener des Worts gewesen sind: habe ich's auch für gut angesehen, nachdem ich's alles von Anbeginn mit Fleiß erkundet habe, dass ich's dir, mein guter Theophilus, in Ordnung schriebe, auf dass du gewissen Grund erfahrest der Lehre, in welcher du unterrichtet bist.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis wiedergegeben; vor wörtlicher Verwendung prüfen.' },
                  ],
                },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'Colin J. Hemer', work: 'The Book of Acts in the Setting of Hellenistic History', year: '1989', quote: `Zahlreiche Einzelangaben der Apostelgeschichte lassen sich durch Inschriften und andere Quellen bestätigen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Was ist für einen Historiker glaubwürdiger: ein Bericht, der sich auf benannte Augenzeugen stützt, oder einer, der sich nur auf eine unprüfbare Eingebung beruft?`,
              ],
              followUps: [
                {
                  id: 'paulus-nicht-der-herr',
                  objection: `Paulus sagt sogar ausdrücklich: „Den andern aber sage ich, nicht der Herr" (1 Kor 7,12). Er unterscheidet selbst zwischen Gottes Wort und seiner eigenen Meinung!`,
                  objectionBy: 'Shabir Ally',
                  answer: `Paulus unterscheidet zwischen einem Wort, das Jesus in seinem Erdenleben gesprochen hat (zur Scheidung, 1 Kor 7,10: „nicht ich, sondern der Herr"), und einer Frage, zu der Jesus nichts gesagt hatte – Ehen mit Ungläubigen. Dort spricht er mit seiner apostolischen Vollmacht und sagt am Ende: „Ich meine aber, ich habe auch den Geist Gottes" (7,40). Gerade diese Sorgfalt zeigt: Paulus legt Jesus keine Worte in den Mund, die er nicht gesagt hat. Ein Fälscher hätte das einfach getan.`,
                  detail: `An anderer Stelle beansprucht Paulus, dass seine Weisungen „des Herrn Gebote" sind (1 Kor 14,37). Die Unterscheidung in 1 Kor 7 betrifft also die Quelle (Jesuswort oder apostolische Weisung), nicht die Autorität. Für die Debatte ist das ein starkes Argument für die Ehrlichkeit der Überlieferung: Die frühen Christen hielten Jesusworte und eigene Lehre auseinander.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '7,10.12', quote: `Den Ehelichen aber gebiete nicht ich, sondern der Herr … Den andern aber sage ich, nicht der Herr …`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: '1. Korinther', ref: '7,40', quote: `Ich halte aber, ich habe auch den Geist Gottes.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Ist es ein Zeichen von Fälschung oder von Ehrlichkeit, wenn ein Apostel sagt: „Hierzu hat Jesus nichts gesagt"?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zu-spaet-geschrieben',
      objection: `Die Evangelien wurden 40 bis 70 Jahre nach Jesus geschrieben. In dieser Zeit entstehen Legenden.`,
      objectionBy: 'Bart D. Ehrman (aufgegriffen von Muslimen)',
      answer: `40 bis 60 Jahre sind für antike Biografien ungewöhnlich früh – die ältesten erhaltenen Darstellungen Alexanders des Großen (Diodor, später Plutarch und Arrian) entstanden erst Jahrhunderte nach seinem Tod. Augenzeugen lebten noch; Paulus nennt um 55 n. Chr. Hunderte Zeugen, von denen „die meisten noch leben" (1 Kor 15,6). Und für das Islamische Dilemma ist die Frage ohnehin anders: Der Koran verweist die Christen auf das Evangelium, das sie im 7. Jahrhundert hatten – das sind diese vier.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Danach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'legenden-in-30-jahren',
          objection: `Legenden können sich auch in wenigen Jahren bilden – siehe moderne Gerüchte und Verschwörungstheorien.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Gerüchte entstehen schnell – aber sie verdrängen nicht den historischen Kern, solange Zeugen leben und widersprechen können. Die Jerusalemer Gemeinde mit Petrus und Jakobus existierte bis in die 60er Jahre mitten unter Menschen, die die Ereignisse erlebt hatten. Und das älteste Bekenntnis (1 Kor 15,3–7) geht nach den meisten Forschern auf die ersten Jahre nach der Kreuzigung zurück.`,
          detail: `Siehe Claim „Die Auferstehung ist eine Legende, die sich über Jahrzehnte entwickelte" (Topic „Die Auferstehung Jesu").`,
          followUps: [
            {
              id: 'kindheitsevangelien-legenden',
              objection: `Die apokryphen Kindheitsevangelien zeigen doch, wie schnell fromme Legenden über Jesus entstanden. Warum sollten die kanonischen Evangelien davon frei sein?`,
              objectionBy: 'Paul Williams (Blogging Theology)',
              answer: `Der Vergleich zeigt gerade den Unterschied: Die Kindheitsevangelien aus dem 2. Jahrhundert und später sind voller fantastischer Wunder ohne Sinn, die kanonischen Evangelien dagegen nüchtern und in ihrer Zeit verankert. Und bedenke: Einige Erzählungen des Korans haben auffallende Parallelen genau in diesen späteren Texten – Jesus formt Vögel aus Ton und lässt sie fliegen (3:49; 5:110) wie im Kindheitsevangelium nach Thomas, und Jesus spricht in der Wiege (19:29–33) wie im arabischen Kindheitsevangelium. Wenn späte Legenden disqualifizieren, trifft das den Koran stärker als die Evangelien.`,
              detail: `Das Kindheitsevangelium nach Thomas (wohl 2. Jh.) erzählt, wie der fünfjährige Jesus am Sabbat zwölf Spatzen aus Lehm formt und sie auf sein Wort davonfliegen. Das arabische Kindheitsevangelium (in seiner erhaltenen Form später, mit syrischen Vorstufen) beginnt mit einem Wort Jesu in der Wiege. Muslime deuten solche Parallelen oft so, dass der Koran wahre Ereignisse bestätigt, die in den Apokryphen bewahrt blieben. Dann muss man aber zugeben, dass diese Apokryphen neben Wahrem auch Legenden enthalten – und dass die kanonischen Evangelien gerade *nicht* zu dieser Gattung gehören.`,
              voices: [
                {
                  person: 'gabriel-reynolds',
                  role: 'als Islamwissenschaftler, der den Koran mit früheren Traditionen vergleicht',
                  text: `Reynolds zeigt in seinem Kommentar, dass der Koran an vielen Stellen mit jüdischen und christlichen Überlieferungen im Gespräch steht, darunter auch mit apokryphen Erzählungen über Jesu Kindheit. Er wertet das nicht als Plagiat, sondern als Hinweis darauf, dass der Koran ein Publikum voraussetzt, das diese Geschichten kannte – und sie in eigener Deutung aufnimmt.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Qur\'an and the Bible: Text and Commentary', year: '2018', quote: `Der Koran nimmt Erzählungen auf, die aus jüdischen und christlichen, auch apokryphen Überlieferungen bekannt sind.`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:49', quote: `Ich erschaffe euch aus Lehm etwas, das wie ein Vogel aussieht, dann hauche ich hinein, und es wird mit Allahs Erlaubnis ein Vogel.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/3/49' },
                { kind: 'sonstiges', work: 'Kindheitsevangelium nach Thomas', ref: '2', year: 'wohl 2. Jh.', quote: `Der fünfjährige Jesus formt am Sabbat zwölf Spatzen aus Lehm; auf sein Wort fliegen sie davon.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Wenn Erzählungen aus den Kindheitsevangelien Legenden sind – wie beurteilst du dann die Vogel-Erzählung in 3:49?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nicht-herabgesandt-dritte-person',
      objection: `Ein Gotteswort muss von Gott herabgesandt sein – in Gottes eigener Rede, wie der Koran. Die Evangelien reden in der dritten Person *über* Jesus und Gott. Schon die Form zeigt: Das ist Menschenwort.`,
      objectionBy: 'Ali Ataie',
      answer: `Das ist die islamische Definition von Offenbarung – und selbst der Koran erfüllt sie nicht durchgehend: Sure 1 ist ein Gebet von Menschen an Gott, und Sure 112 sagt: „Sprich: *Er* ist Allah, ein Einziger" – Gott in der dritten Person. Im christlichen Verständnis ist die höchste Offenbarung kein Diktat, sondern eine Person: „Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat … hat er am letzten in diesen Tagen zu uns geredet durch den Sohn" (Hebr 1,1–2). Die Evangelien bezeugen diesen Sohn – darum erzählen sie von ihm.`,
      detail: `Johannes sagt ausdrücklich, wozu sein Evangelium geschrieben ist: „dass ihr glaubet, Jesus sei Christus, der Sohn Gottes, und dass ihr durch den Glauben das Leben habet in seinem Namen" (Joh 20,31). Die Form des Berichts entspricht dem Inhalt: Wenn Gott in einem Menschen gehandelt hat, ist der treue Bericht über diesen Menschen die angemessene Form der Offenbarung. Die koptische Kirche ehrt das Evangelium in der Liturgie mit Kerzen, Weihrauch und dem Ruf „Steht auf in Gottesfurcht und hört das heilige Evangelium" – weil in ihm Christus selbst spricht.`,
      sources: [
        { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'koran', work: 'Sure 112 (al-Ikhlas)', ref: '112:1', quote: `Sag: Er ist Allah, ein Einziger.`, original: `qul huwa llāhu aḥad`, translation: 'Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/112/1' },
      ],
      questionsBack: [
        `Ist Sure 1 – „Dich allein beten wir an" – Gottes Rede in der ersten Person oder ein Gebet von Menschen?`,
      ],
      followUps: [
        {
          id: 'warum-vier-versionen',
          objection: `Wenn Gott sich offenbart – warum braucht er dann vier verschiedene Versionen? Ein Gott, eine Botschaft, ein Buch!`,
          objectionBy: 'Ahmed Deedat',
          answer: `Vier Zeugen sind stärker als einer: Schon die Tora verlangt für eine Sache „zwei oder drei Zeugen" (Dtn 19,15). Die Evangelien sind vier Zeugnisse desselben Evangeliums aus verschiedenen Blickwinkeln – darum sprach Irenäus vom „viergestaltigen Evangelium". Und der Koran erzählt die Geschichte Moses ebenfalls mehrfach, mit unterschiedlichen Details (etwa in den Suren 7, 20, 26 und 28). Muslime sehen darin Reichtum, nicht Widerspruch. Dasselbe gilt für die Evangelien.`,
          detail: `Gerade die Unterschiede zwischen den Evangelien sprechen gegen eine Absprache oder Fälschung: Eine Kirche, die ein einheitliches Bild erzwingen wollte, hätte die vier Berichte zu einem verschmolzen. Genau das tat Tatian mit dem Diatessaron (um 170) – doch die Kirche hielt an den vier eigenständigen Evangelien fest. Sie nahm lieber Spannungen in Kauf, als die Zeugen zu glätten.`,
          sources: [
            { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '19,15', quote: `In dem Munde zweier oder dreier Zeugen soll die Sache bestehen.`, translation: 'Luther 1912', status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,11,8', year: 'um 180', quote: `Das Wort hat uns das Evangelium viergestaltig gegeben, zusammengehalten von einem Geist.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'nt-nennt-sich-nicht-schrift',
      objection: `2 Timotheus 3,16 („Alle Schrift, von Gott eingegeben") bezieht sich nur auf das Alte Testament. Das Neue Testament behauptet nirgends, selbst Heilige Schrift zu sein. Erst die Kirche hat es später dazu gemacht.`,
      objectionBy: 'Shabir Ally',
      answer: `Das Neue Testament zeigt den Übergang schon selbst: 2 Petr 3,16 stellt die Briefe des Paulus neben „die anderen Schriften", und 1 Tim 5,18 zitiert unter der Einleitung „die Schrift sagt" zuerst Dtn 25,4 und dann ein Jesuswort, das in Lk 10,7 steht. Jesus versprach den Aposteln den Geist, der sie „an alles erinnern" wird, was er gesagt hat (Joh 14,26). Die Kirche hat die Schriften nicht zu Schrift *gemacht*, sondern erkannt, was sie von Anfang an waren.`,
      detail: `Schon die Apostolischen Väter (Klemens von Rom, Ignatius, Polykarp) zitieren die Evangelien und Paulusbriefe mit Autorität; um 150 beschreibt Justin, dass im sonntäglichen Gottesdienst die „Erinnerungen der Apostel" neben den Propheten gelesen werden (1 Apol 67). Das alles liegt Jahrhunderte vor Mohammed.`,
      sources: [
        { kind: 'bibel', work: '2. Petrus', ref: '3,15–16', quote: `… wie auch unser lieber Bruder Paulus nach der Weisheit, die ihm gegeben ist, euch geschrieben hat … welche verdrehen die Ungelehrigen und Leichtfertigen, wie auch die andern Schriften, zu ihrer eigenen Verdammnis.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: '1. Timotheus', ref: '5,18', quote: `Denn es spricht die Schrift: „Du sollst dem Ochsen nicht das Maul verbinden, der da drischt", und: „Ein Arbeiter ist seines Lohnes wert."`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '67', year: 'um 155', quote: `Am Sonntag werden die Erinnerungen der Apostel oder die Schriften der Propheten vorgelesen, solange es die Zeit erlaubt.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn schon 1 Tim 5,18 ein Wort aus dem Lukasevangelium „Schrift" nennt – wann genau soll die Kirche das NT „später" zur Schrift gemacht haben?`,
      ],
      followUps: [
        {
          id: 'pastoralbriefe-pseudonym',
          objection: `2 Petrus und 1 Timotheus gelten bei den meisten kritischen Forschern als pseudonym, also nicht von Petrus und Paulus. Damit fallen deine Belege weg.`,
          objectionBy: 'Paul Williams (Blogging Theology), nach Bart Ehrman',
          answer: `Die Verfasserschaft wird diskutiert, und es gibt ernsthafte Forscher auf beiden Seiten. Aber selbst bei der spätesten kritischen Datierung stammen diese Briefe aus dem frühen 2. Jahrhundert – und zeigen dann, dass Christen *spätestens* zu dieser Zeit apostolische Schriften als Heilige Schrift behandelten. Das ist rund 500 Jahre vor dem Koran. Für die Frage, welches Buch die Christen zur Zeit Mohammeds als Injil hatten, ändert die Verfasserfrage nichts.`,
          detail: `Michael Kruger hat gezeigt, dass das Bewusstsein, eigene autoritative Schriften zu besitzen, im frühen Christentum nicht erst durch kirchliche Beschlüsse entstand, sondern von Anfang an mit der Autorität der Apostel verbunden war. Die Kanonlisten des 4. Jahrhunderts – am klarsten der 39. Osterfestbrief des hl. Athanasius (367) – bestätigen einen längst gelebten Gebrauch.`,
          voices: [
            {
              person: 'michael-kruger',
              role: 'als Kanonforscher',
              text: `Kruger argumentiert, dass der neutestamentliche Kanon kein spätes Produkt kirchlicher Machtpolitik ist. Die Schriften trugen von Anfang an die Autorität der Apostel in sich und wurden in den Gemeinden entsprechend gelesen; die späteren Listen erkannten an, was sich längst durchgesetzt hatte.`,
              sources: [
                { kind: 'fachliteratur', author: 'Michael J. Kruger', work: 'Canon Revisited: Establishing the Origins and Authority of the New Testament Books', year: '2012', quote: `Der Kanon entstand nicht durch spätere Beschlüsse, sondern aus der von Anfang an anerkannten apostolischen Autorität der Schriften.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass Offenbarung nur als Diktat geschehen kann?`,
    `Warum hätten Fälscher zwei Evangelien Nicht-Aposteln zuschreiben sollen?`,
    `Welche Quellen über Mohammed liegen zeitlich näher an ihm als die Evangelien an Jesus?`,
    `Welches Evangelium hatten die Christen zur Zeit Mohammeds, auf das der Koran sie verweist?`,
  ],
  avoid: [
    `Nicht behaupten, die Verfasserschaft der Evangelien sei in der Forschung unumstritten – sie ist umstritten. Argumentiere mit den Gründen für die Tradition.`,
    `Nicht behaupten, die Hadithe seien „wertlos" – das beleidigt und hilft nicht. Bitte um gleiche Maßstäbe.`,
  ],
  concessions: [
    `Die Evangelien nennen ihre Verfasser im Text nicht; die Zuschreibung stammt aus Titeln und früher kirchlicher Überlieferung.`,
    `Viele kritische Forscher halten die traditionellen Verfasserangaben für spätere Zuschreibungen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006/2017', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'The Four Gospels and the One Gospel of Jesus Christ', year: '2000', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Evangelien', 'Inspiration', 'Verfasserschaft', 'Islam'],
  related: [
    'islam-dilemma/injil-ist-nicht-das-nt',
    'islam-dilemma/das-islamische-dilemma',
    'neues-testament/evangelien-spaet-anonym',
    'auferstehung/legende-entwickelte-sich',
  ],
};

export default claim;
