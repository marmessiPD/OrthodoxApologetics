import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'barnabasevangelium',
  title: `„Das Barnabasevangelium ist das wahre Evangelium."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Verbreitung des Barnabasevangeliums in Massenauflage' },
    { name: 'Muhammad Ata ur-Rahim', role: 'Pakistanischer Autor', work: 'Jesus, Prophet of Islam (1977)' },
    { name: 'Volkstümliche islamische Apologetik', role: 'Internetseiten, Flugblätter, Straßenmission', work: 'Ausgaben des Barnabasevangeliums mit Vorwort' },
  ],
  steelman: `„Barnabas war ein echter Begleiter Jesu und ein Apostel (Apg 14,14), der sich von Paulus trennte (Apg 15,39). Sein Evangelium erzählt, dass Jesus nicht gekreuzigt wurde, sondern Judas an seiner Stelle, dass Jesus nicht Gottes Sohn ist und dass er das Kommen Mohammeds ankündigte – genau wie der Koran. Schon das Decretum Gelasianum aus dem 6. Jahrhundert verbietet ein ‚Evangelium nach Barnabas'; die Kirche hat es unterdrückt, weil es ihre paulinische Lehre widerlegte. Dass es heute nur in späten Handschriften erhalten ist, beweist nur, wie gründlich es verfolgt wurde."`,
  biblical: {
    summary: `Das heute bekannte „Barnabasevangelium" ist in **zwei Handschriften** erhalten: einer italienischen (Wien, Österreichische Nationalbibliothek, wohl spätes 16. Jahrhundert) und einer spanischen (erhalten in einer Abschrift des 18. Jahrhunderts). Es enthält eindeutige Anachronismen aus dem europäischen Spätmittelalter – vor allem ein **Jubeljahr alle hundert Jahre**, das erst Papst Bonifaz VIII. im Jahr 1300 einführte. Und es **widerspricht dem Koran**: Es lässt Jesus bestreiten, der Messias zu sein, und nennt Mohammed den Messias – während der Koran Jesus ausdrücklich „al-Masih" nennt (3:45). Der biblische Barnabas dagegen verkündete Jesus als Herrn (Apg 11,20–24).`,
    detail: `**Anachronismen und Fehler (Auswahl):**
- **Jubeljahr alle 100 Jahre** (Kap. 82): Das Gesetz kennt ein Jubeljahr alle 50 Jahre (Lev 25,10–11). Das hundertjährige Jubeljahr gab es nur zwischen der Bulle Bonifaz' VIII. (1300) und der Verkürzung durch Clemens VI. (1343) – ein deutlicher Hinweis auf die Entstehungszeit im 14. Jahrhundert oder später.
- **Pilatus als Statthalter bei Jesu Geburt** (Kap. 3): Pilatus regierte von 26 bis 36 n. Chr.
- **Mit dem Schiff nach Nazareth** (Kap. 20): Nazareth liegt im Bergland, nicht am See.
- **Schmerzlose Geburt Jesu** (Kap. 3) – während der Koran sagt, die Wehen trieben Maria an den Stamm der Palme (19:23).
- **Jesus: „Ich bin nicht der Messias"** (u. a. Kap. 42 und 82) – gegen 3:45 und weitere Koranverse, die Jesus „al-Masih" nennen.

**Das echte frühe Barnabas-Schreiben:** Der sogenannte *Barnabasbrief* (um 130), den Clemens von Alexandrien und Origenes kannten, lehrt den Kreuzestod Jesu und nennt ihn Sohn Gottes.`,
    sources: [
      { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:45', quote: `O Maria, Allah verkündet dir ein Wort von Ihm, dessen Name al-Masih Jesus, der Sohn Marias, ist.`, original: `ismuhu l-masīḥu ʿīsā bnu maryam`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/45' },
      { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:23', quote: `Da trieben sie die Wehen zum Stamm der Palme.`, original: `fa-ajāʾahā l-makhāḍu ilā jidhʿi n-nakhla`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/19/23' },
      { kind: 'bibel', work: '3. Mose (Levitikus)', ref: '25,10–11', quote: `Das fünfzigste Jahr soll ein Halljahr (Jubeljahr) sein.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Lonsdale Ragg / Laura Ragg (Übers.)', work: 'The Gospel of Barnabas, edited and translated from the Italian MS. in the Imperial Library at Vienna', year: '1907', quote: `Englische Ausgabe der Wiener italienischen Handschrift mit Einleitung zu Datierung und Herkunft.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche kennt Barnabas als „Sohn des Trostes" (Apg 4,36), der Paulus in Jerusalem einführte (Apg 9,27), mit ihm das Evangelium in Antiochien und Zypern verkündete und dort nach der Überlieferung das Martyrium erlitt. Die Kirche von Alexandrien kannte ein frühes Schreiben unter seinem Namen – den Barnabasbrief –, das den Kreuzestod Christi bezeugt. Ein Evangelium, das Mohammed ankündigt, kennt kein Kirchenvater, kein Häresiologe und kein muslimischer Autor vor der Neuzeit.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '11,22–24', quote: `Barnabas wird nach Antiochien gesandt, freut sich über die Gnade Gottes und ermahnt alle, mit festem Herzen beim Herrn zu bleiben; und viel Volk wird dem Herrn zugetan.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Barnabasbrief (anonym, Barnabas zugeschrieben)', work: 'Barnabasbrief', ref: '5 und 7', year: 'um 130', quote: `Der Sohn Gottes hat gelitten, um uns lebendig zu machen; Christus wurde am Kreuz mit Essig und Galle getränkt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Forschung – christlich, säkular und auch unter vielen muslimischen Fachleuten – gilt das Barnabasevangelium als Werk des späten Mittelalters oder der frühen Neuzeit, wahrscheinlich aus einem Milieu im Mittelmeerraum, in dem christliche und islamische Traditionen zusammentrafen (diskutiert werden u. a. Konvertiten in Italien oder Moriskenkreise in Spanien). Die erste sichere Erwähnung stammt aus dem frühen 18. Jahrhundert. Das im Decretum Gelasianum genannte „Evangelium nomine Barnabae" ist nur ein Titel ohne bekannten Inhalt.`,
    sources: [
      { kind: 'fachliteratur', author: 'Lonsdale Ragg / Laura Ragg', work: 'Einleitung zur Ausgabe des Barnabasevangeliums', year: '1907', quote: `Datierung der Wiener Handschrift in die Neuzeit und Nachweis mittelalterlicher Hintergründe.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Decretum Gelasianum de libris recipiendis et non recipiendis', year: '6. Jh.', quote: `Nennt in einer Liste abgelehnter Schriften ein „Evangelium unter dem Namen des Barnabas" – ohne Inhaltsangabe.`, original: `Evangelium nomine Barnabae`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das Barnabasevangelium ist in Handschriften aus dem 16. bzw. 18. Jahrhundert erhalten und verrät seine Entstehungszeit selbst: Es kennt ein Jubeljahr „alle hundert Jahre", das es erst seit Papst Bonifaz VIII. im Jahr 1300 gab. Vor allem widerspricht es dem Koran: Jesus sagt darin, er sei nicht der Messias – der Koran nennt ihn ausdrücklich „al-Masih" (3:45). Wer es als Beweis anführt, stützt sich auf ein Buch, das den Koran widerlegt.`,
  keyPoints: [
    `**Späte Handschriften:** Italienisch (Wien, wohl spätes 16. Jh.) und Spanisch (Abschrift des 18. Jh.) – keine antike oder mittelalterliche Handschrift, kein Zitat vor der Neuzeit.`,
    `**Das Jubeljahr verrät die Zeit:** Alle 100 Jahre – das gab es nur zwischen 1300 (Bonifaz VIII.) und 1343 (Clemens VI.).`,
    `**Es widerspricht dem Koran:** Mohammed als „Messias" gegen 3:45; schmerzlose Geburt gegen 19:23.`,
    `**Geografische und historische Fehler:** Pilatus bei Jesu Geburt; mit dem Schiff nach Nazareth.`,
    `**Der echte Barnabas predigte das Kreuz:** Apostelgeschichte und der frühe Barnabasbrief bezeugen Jesus als gekreuzigten Sohn Gottes.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker der Urkirche',
      text: `Lukas überliefert, was wir über den historischen Barnabas wissen: ein Levit aus Zypern, der seinen Acker verkaufte (Apg 4,36–37), Paulus bei den Aposteln einführte (9,27), in Antiochien die Gemeinde stärkte (11,22–26) und mit Paulus die Heiden missionierte (13–14). Sein Streit mit Paulus betraf die Frage, ob Markus mitkommen solle (15,37–39) – nicht die Lehre. Nichts an diesem Barnabas passt zu einem Evangelium gegen Kreuz und Gottessohnschaft.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,37–39', quote: `Barnabas wollte Johannes Markus mitnehmen, Paulus nicht; sie trennten sich, und Barnabas fuhr mit Markus nach Zypern.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der alexandrinischen Katechetenschule',
      text: `Clemens von Alexandrien zitiert gegen Ende des 2. Jahrhunderts mehrfach den Barnabasbrief und schreibt ihn dem Apostel Barnabas zu. Das zeigt, welches „Barnabas"-Schreiben die alte Kirche von Alexandrien kannte: einen Brief, der Christus als den leidenden und gekreuzigten Sohn Gottes verkündet. Von einem Barnabasevangelium mit islamischem Inhalt weiß Clemens nichts.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis (Teppiche)', ref: 'u. a. II,6–7', year: 'um 200', quote: `Zitate aus dem Barnabasbrief, den Clemens dem Apostel Barnabas zuschreibt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als alexandrinischer Gelehrter',
      text: `Auch Origenes kennt den „katholischen Brief des Barnabas" und zitiert ihn in seiner Schrift gegen Kelsos. Die alexandrinische Tradition, aus der die koptische Kirche hervorging, hat das Barnabas-Erbe also gekannt und bewahrt – und es bestätigt den Kreuzesglauben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I,63', year: 'um 248', quote: `Origenes zitiert den „katholischen Brief des Barnabas".`, status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Mitarbeiter des Barnabas',
      text: `Paulus spricht noch Jahre nach der Trennung respektvoll von Barnabas als Mitarbeiter (1 Kor 9,6) und berichtet, dass Barnabas mit ihm von den Jerusalemer „Säulen" die Hand der Gemeinschaft empfing (Gal 2,9). Barnabas teilte also das Evangelium, das Paulus verkündete: Christus, der für unsere Sünden starb und auferstand.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '9,6', quote: `Oder haben allein ich und Barnabas nicht Macht, nicht zu arbeiten?`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'decretum-gelasianum',
      objection: `Das Decretum Gelasianum aus dem 6. Jahrhundert verbietet ausdrücklich ein „Evangelium nach Barnabas". Also gab es dieses Evangelium schon vor Mohammed – und die Kirche hat es unterdrückt.`,
      objectionBy: 'Muhammad Ata ur-Rahim',
      answer: `Das Dekret nennt nur einen Titel in einer langen Liste – ohne ein Wort über den Inhalt. Dass es irgendwann ein Buch unter Barnabas' Namen gab, beweist nicht, dass es das Buch ist, das heute im Umlauf ist. Das heutige Buch kennt ein Jubeljahr alle hundert Jahre, eingeführt im Jahr 1300 – es kann also nicht das Buch aus dem 6. Jahrhundert sein.`,
      questionsBack: [
        `Kennst du ein einziges Zitat aus dem heutigen Barnabasevangelium bei einem Autor vor dem 16. Jahrhundert – christlich oder muslimisch?`,
      ],
      followUps: [
        {
          id: 'jubeljahr-spaeter-eingefuegt',
          objection: `Vielleicht wurde das Jubeljahr nur später eingefügt. Der Kern kann trotzdem alt sein.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Dann gibst du zu, dass das Buch verändert wurde – mit welchem Recht behauptest du dann, ausgerechnet der Rest sei echt? Außerdem ist das Jubeljahr nicht der einzige Fehler: Pilatus bei Jesu Geburt, das Schiff nach Nazareth, die Ablehnung des Messias-Titels. Und es gibt keine einzige ältere Handschrift, die einen „Kern" ohne diese Fehler zeigt.`,
          detail: `Wer bei der Bibel 5.000 Handschriften für „unzuverlässig" erklärt, kann nicht ein Buch mit zwei späten Handschriften und ohne jede frühe Bezeugung für das wahre Evangelium halten.`,
        },
      ],
    },
    {
      id: 'barnabas-bestaetigt-koran',
      objection: `Das Barnabasevangelium stimmt doch mit dem Koran überein: Jesus wird nicht gekreuzigt, Judas stirbt an seiner Stelle, und Mohammed wird angekündigt.`,
      objectionBy: 'Ahmed Deedat',
      answer: `In manchem ja – aber an entscheidender Stelle widerspricht es dem Koran: Es lässt Jesus sagen, er sei nicht der Messias, und gibt diesen Titel Mohammed. Der Koran nennt Jesus elfmal „al-Masih" (z. B. 3:45; 4:171) und Mohammed nie. Ein Buch, das das Wort Gottes im Koran korrigiert, kann ein Muslim nicht als wahres Evangelium annehmen.`,
      followUps: [
        {
          id: 'messias-unterschiedlich-verstanden',
          objection: `Das Wort „Messias" wird im Barnabasevangelium eben anders gebraucht – als Titel für den letzten Propheten.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Genau das ist der Punkt: Der Verfasser kannte offenbar nicht die Bedeutung des Titels. *Messias* heißt „Gesalbter" und war im Judentum der Titel des erwarteten Königs aus dem Haus Davids – Jesus. Ein Jünger des 1. Jahrhunderts hätte diesen Fehler nie gemacht. Ein europäischer Autor des Spätmittelalters, der den Islam stützen wollte, konnte ihn leicht machen.`,
        },
      ],
    },
    {
      id: 'kirche-unterdrueckte-barnabas',
      objection: `Dass es keine alten Handschriften gibt, zeigt nur, wie gründlich die Kirche das Barnabasevangelium vernichtet hat.`,
      objectionBy: 'Muhammad Ata ur-Rahim',
      answer: `Das ist ein Argument aus dem Schweigen, das nie widerlegt werden kann. Aber es stimmt mit nichts überein: Die Kirche hat die Werke ihrer Gegner sogar zitiert, um sie zu widerlegen – von Kelsos bis zu den Gnostikern. Und warum hätten Muslime ein solches Evangelium 900 Jahre lang nicht erwähnt? Kein muslimischer Gelehrter vor der Neuzeit – weder Ibn Hazm noch Ibn Taymiyya – zitiert es, obwohl es ihnen ideal gedient hätte.`,
      questionsBack: [
        `Warum haben Ibn Hazm und Ibn Taymiyya, die ausführlich gegen die Evangelien schrieben, dieses Evangelium nie erwähnt?`,
      ],
      followUps: [
        {
          id: 'gnostische-evangelien-auch-unterdrueckt',
          objection: `Die gnostischen Evangelien wurden auch unterdrückt – und dann in Nag Hammadi gefunden. Warum nicht auch Barnabas?`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Die Nag-Hammadi-Texte sind in Handschriften des 4. Jahrhunderts erhalten und wurden schon von Kirchenvätern wie Irenäus beschrieben – sie haben also eine echte antike Spur. Das Barnabasevangelium hat keine. Außerdem lehren die gnostischen Evangelien Dinge, die ein Muslim ablehnt. Die Funde aus der Antike stützen nirgends ein „islamisches" Evangelium.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du, dass das Barnabasevangelium Jesus den Messias-Titel abspricht, den der Koran ihm gibt?`,
    `Wann wurde das hundertjährige Jubeljahr eingeführt?`,
    `Wenn du 5.000 Bibelhandschriften nicht traust – warum traust du zwei späten Handschriften des Barnabasevangeliums?`,
    `Warum erwähnt kein muslimischer Gelehrter vor der Neuzeit dieses Evangelium?`,
  ],
  avoid: [
    `Nicht mit Spott über Muslime reagieren, die das Buch ehrlich für echt halten. Viele kennen nur das Vorwort einer Ausgabe.`,
    `Nicht behaupten, „alle Muslime" verwendeten es – viele muslimische Gelehrte lehnen es selbst ab.`,
    `Keine unsicheren Details über die Verfasserschaft (bestimmte Namen) als Tatsache ausgeben; die genaue Herkunft ist in der Forschung offen.`,
  ],
  concessions: [
    `Es gab in der Antike Schriften unter dem Namen des Barnabas (der Barnabasbrief; der Titel im Decretum Gelasianum).`,
    `Wer das heutige Barnabasevangelium verfasst hat, ist nicht sicher geklärt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Lonsdale Ragg / Laura Ragg', work: 'The Gospel of Barnabas (Ausgabe und Übersetzung der Wiener Handschrift)', year: '1907', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Sox', work: 'The Gospel of Barnabas', year: '1984', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Barnabas', 'Apokryphen', 'Islam', 'Fälschung'],
  related: [
    'islam-dilemma/injil-ist-nicht-das-nt',
    'islam-dilemma/juenger-waren-muslime',
    'islam-mohammed/weitere-bibelstellen-mohammed',
    'gnosis/gnostische-evangelien-wahres-christentum',
  ],
};

export default claim;
