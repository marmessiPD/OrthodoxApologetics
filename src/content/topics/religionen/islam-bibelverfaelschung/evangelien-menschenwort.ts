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
