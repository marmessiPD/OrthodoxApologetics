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
          followUps: [
            {
              id: 'italienisch-nur-uebersetzung',
              objection: `Die italienische Handschrift ist doch nur eine späte Übersetzung. Das Original kann aramäisch oder hebräisch gewesen sein – die Fehler stammen vom Übersetzer.`,
              objectionBy: 'Muhammad Ata ur-Rahim',
              answer: `Für ein aramäisches Original gibt es keine Spur – keine Handschrift, kein Zitat, keine Erwähnung. Der italienische Text dagegen trägt die Handschrift seiner Entstehungszeit: Er enthält Anklänge an Dantes „Göttliche Komödie" (etwa die Wendung von den „falschen und lügnerischen Göttern"), setzt das mittelalterliche Jubeljahr voraus und spiegelt Verhältnisse des spätmittelalterlichen Europa. Ein Übersetzer übersetzt – er dichtet nicht Dante und päpstliche Jubeljahre in einen Text des 1. Jahrhunderts hinein.`,
              detail: `Die italienische Handschrift liegt heute in der Österreichischen Nationalbibliothek in Wien (aus dem Besitz des Prinzen Eugen von Savoyen); Lonsdale und Laura Ragg haben sie 1907 in Oxford ediert und übersetzt. Eine spanische Fassung, lange verschollen, wurde in den 1970er-Jahren in Sydney wiederentdeckt. Die Forschung datiert das Werk überwiegend ins 14. bis 16. Jahrhundert und sucht seinen Ursprung im Umfeld von Konvertiten oder Morisken. Der Wortlaut „nel tempo de li dèi falsi e bugiardi" steht bei Dante im ersten Gesang des Inferno (Vers 72).`,
              sources: [
                { kind: 'fachliteratur', author: 'Lonsdale Ragg, Laura Ragg (Hg.)', work: 'The Gospel of Barnabas, edited and translated from the Italian MS. in the Imperial Library at Vienna', year: '1907', quote: `Die Herausgeber verweisen auf zahlreiche mittelalterliche Züge des Textes, u. a. Anklänge an Dante.`, status: 'paraphrase' },
                { kind: 'sonstiges', author: 'Dante Alighieri', work: 'Divina Commedia, Inferno', ref: 'I,72', quote: `… zur Zeit der falschen und lügnerischen Götter.`, original: `nel tempo de li dèi falsi e bugiardi`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              questionsBack: [
                `Wie kommen Formulierungen Dantes (gest. 1321) in ein angeblich aramäisches Evangelium des 1. Jahrhunderts?`,
              ],
              followUps: [
                {
                  id: 'diatessaron-alte-quelle',
                  objection: `Der Forscher Jan Joosten hat gezeigt, dass das Barnabasevangelium Lesarten des Diatessaron enthält – einer Evangelienharmonie aus dem 2. Jahrhundert. Es hat also doch eine alte Quelle!`,
                  objectionBy: 'Paul Williams (Blogging Theology)',
                  answer: `Joosten zeigt, dass der Verfasser eine mittelalterliche italienische Evangelienharmonie benutzte, die in der Überlieferung des Diatessaron steht. Aber schau, was das Diatessaron ist: Tatians Zusammenfassung der *vier kanonischen Evangelien* um 170 – mit Kreuzigung und Auferstehung. Wenn das Barnabasevangelium aus dieser Quelle schöpft, dann schöpft es aus unseren Evangelien und streicht, was nicht passt. Die alte Quelle widerlegt das Buch, statt es zu stützen.`,
                  detail: `Joosten hat außerdem erwogen, dass einzelne Motive auf ältere, judenchristliche Überlieferungen zurückgehen könnten. Selbst wenn das zuträfe: Auch die judenchristlichen Gruppen der Antike, von denen die Kirchenväter berichten, bekannten die Kreuzigung Jesu. Einzelne alte Motive in einem spätmittelalterlichen Werk machen es nicht zu einem Evangelium des 1. Jahrhunderts – so wenig wie ein moderner Roman mit Bibelzitaten antik wird.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Jan Joosten', work: 'The Gospel of Barnabas and the Diatessaron', ref: 'Harvard Theological Review 95 (2002)', year: '2002', quote: `Der Verfasser benutzte eine mittelalterliche Evangelienharmonie aus der Diatessaron-Überlieferung.`, status: 'paraphrase' },
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'IV,29,6', year: 'um 325', quote: `Tatian stellte aus den vier Evangelien ein zusammenhängendes Werk her, das er „Diatessaron" nannte.`, status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Wenn das Barnabasevangelium aus einer Harmonie der vier Evangelien schöpft – woher stammen dann die Kreuzigung und Auferstehung, die es weglässt?`,
                  ],
                },
              ],
            },
          ],
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
          followUps: [
            {
              id: 'weitere-widersprueche-zum-koran',
              objection: `Gut, beim Messias-Titel mag es hapern. Aber im Großen und Ganzen bestätigt das Barnabasevangelium den Koran.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Es gibt weitere Widersprüche: Das Barnabasevangelium lässt Maria ohne Schmerzen gebären – der Koran sagt, die Wehen trieben sie zum Stamm der Palme (19:23). Es spricht von neun Himmeln – der Koran von sieben (z. B. 2:29; 67:3). Ein Buch, das an mehreren Stellen dem Koran widerspricht, kann nicht das Injil sein, das der Koran bestätigt. Es stützt den Koran nur dort, wo sein Verfasser den Koran schon kannte.`,
              detail: `Das ist der entscheidende methodische Punkt: Das Barnabasevangelium verrät, dass es *nach* dem Koran entstanden ist – es übernimmt islamische Motive (z. B. das Glaubensbekenntnis in abgewandelter Form) und bringt zugleich Vorstellungen aus dem christlichen Mittelalter mit. Es ist kein unabhängiger Zeuge, sondern ein Echo.`,
              sources: [
                { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:23', quote: `Da ließen die Wehen sie zum Stamm der Palme gehen.`, original: `fa-ajāʾahā l-makhāḍu ilā jidhʿi n-nakhla`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/19/23' },
                { kind: 'koran', work: 'Sure 67 (al-Mulk)', ref: '67:3', quote: `Der sieben Himmel in Schichten erschaffen hat.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/67/3' },
                { kind: 'fachliteratur', author: 'Lonsdale Ragg, Laura Ragg (Hg.)', work: 'The Gospel of Barnabas', ref: 'Kap. 3 (schmerzlose Geburt); Kap. 178 (neun Himmel)', year: '1907', quote: `Maria gebiert ohne Schmerz; die Himmel sind neun.`, status: 'paraphrase', note: 'Kapitelangaben nach der Ragg-Ausgabe; vor wörtlicher Verwendung prüfen.' },
              ],
            },
          ],
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
        {
          id: 'vatikan-fra-marino',
          objection: `Das Original liegt im Vatikan versteckt. Ein Mönch namens Fra Marino hat es in der Privatbibliothek von Papst Sixtus V. gefunden und ist deshalb Muslim geworden.`,
          objectionBy: 'Vorworte verbreiteter Ausgaben',
          answer: `Diese Geschichte stammt aus dem Vorwort der spanischen Handschrift des Barnabasevangeliums selbst – das Buch beglaubigt sich also mit einer Legende, die es selbst erzählt. Es gibt dafür keinen unabhängigen Beleg. Die erhaltene italienische Handschrift liegt nicht im Vatikan, sondern öffentlich zugänglich in Wien, und sie ist seit über hundert Jahren ediert.`,
          detail: `Sixtus V. war Papst von 1585 bis 1590 – auch das passt zur Entstehung des Textes im 16. Jahrhundert. Das Argument „Es liegt im Vatikan" ist unwiderlegbar, weil es sich jeder Prüfung entzieht. Wer es verwendet, sollte gefragt werden, ob er dieselbe Beweisführung akzeptieren würde, wenn jemand sagte, das „echte" Original des Korans liege in einem geheimen Archiv.`,
          questionsBack: [
            `Würdest du ein Buch akzeptieren, dessen einziger Echtheitsbeweis eine Geschichte im eigenen Vorwort ist?`,
          ],
        },
      ],
    },
    {
      id: 'barnabas-trennte-sich-von-paulus',
      objection: `Barnabas trennte sich von Paulus (Apg 15,39), weil er dessen neue Lehre ablehnte. Das Barnabasevangelium zeigt, was Barnabas wirklich glaubte.`,
      objectionBy: 'Muhammad Ata ur-Rahim',
      answer: `Die Apostelgeschichte nennt den Grund: Es ging um Johannes Markus, den Barnabas mitnehmen wollte und Paulus nicht (Apg 15,37–39) – ein Streit über eine Person, nicht über die Lehre. Barnabas hatte Paulus selbst bei den Aposteln eingeführt (Apg 9,27), und später nennt Paulus ihn wieder als Mitarbeiter (1 Kor 9,6; Kol 4,10). Es gibt kein antikes Zeugnis, dass Barnabas eine andere Botschaft hatte.`,
      detail: `In Gal 2,13 berichtet Paulus, Barnabas habe sich in Antiochia von der Tischgemeinschaft mit Heidenchristen zurückgezogen – ein Streit über die Praxis, nicht über Jesu Tod oder Gottessohnschaft. Nach koptischer und allgemein kirchlicher Überlieferung wirkte Barnabas auf Zypern und starb dort als Märtyrer; Markus, sein Vetter, wurde der Gründer der Kirche von Alexandrien.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,37–39', quote: `Barnabas aber riet, dass sie mit sich nähmen Johannes, mit dem Zunamen Markus. Paulus aber achtete es billig, dass sie nicht mit sich nähmen einen solchen … Und sie kamen scharf aneinander.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '9,27', quote: `Barnabas aber nahm ihn zu sich und führte ihn zu den Aposteln.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [
        `Wo steht, dass Barnabas und Paulus über die Lehre stritten – und nicht über Johannes Markus?`,
      ],
      followUps: [
        {
          id: 'barnabasbrief',
          objection: `Es gibt aber einen alten Barnabasbrief aus dem 2. Jahrhundert. Das zeigt, dass unter Barnabas' Namen eine eigene Tradition existierte.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Richtig – und dieser Brief ist das älteste Schriftstück unter Barnabas' Namen. Was lehrt er? „Dazu nämlich hat der Herr es auf sich genommen, sein Fleisch dem Verderben preiszugeben, damit wir durch die Vergebung der Sünden geheiligt würden" (Barn 5,1). Er nennt Jesus den Sohn Gottes (5,9; 7,2) und deutet die ausgebreiteten Arme des Mose als Bild des Kreuzes (12,2). Die alte Barnabas-Tradition bekennt also genau das, was das Barnabasevangelium bestreitet.`,
          detail: `Der Barnabasbrief stammt nach den meisten Forschern aus der Zeit zwischen 70 und 135 und ist wohl nicht vom Apostel selbst verfasst; Codex Sinaiticus überliefert ihn im Anschluss an das Neue Testament, und Klemens von Alexandrien zitiert ihn. Für die Debatte entscheidend: Wer eine „Barnabas-Tradition" sucht, findet in der Antike eine Tradition des gekreuzigten Gottessohnes – nicht des Barnabasevangeliums.`,
          voices: [
            {
              person: 'clemens-alexandrien',
              role: 'als früher Zeuge des Barnabasbriefs',
              text: `Klemens von Alexandrien, Lehrer der alexandrinischen Katechetenschule, zitiert den Barnabasbrief mehrfach und schreibt ihn dem Apostel Barnabas zu. Damit ist bezeugt, was in Alexandrien um 200 unter dem Namen Barnabas gelesen wurde: ein Brief, der das Kreuz Christi im Alten Testament vorgebildet sieht. Ein Evangelium, das die Kreuzigung leugnet, kennt Klemens nicht.`,
              sources: [
                { kind: 'kirchenvater', author: 'Klemens von Alexandrien', work: 'Stromateis', ref: 'II,6–7 u. ö.', year: 'um 200', quote: `Klemens zitiert den Barnabasbrief als Schrift des Apostels Barnabas.`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'kirchenvater', work: 'Barnabasbrief', ref: '5,1', year: 'zwischen 70 und 135', quote: `Dazu hat der Herr es auf sich genommen, sein Fleisch dem Verderben hinzugeben, damit wir durch die Vergebung der Sünden geheiligt würden.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
            { kind: 'kirchenvater', work: 'Barnabasbrief', ref: '12,2', year: 'zwischen 70 und 135', quote: `Mose breitet die Hände aus – ein Bild des Kreuzes und dessen, der leiden sollte.`, status: 'paraphrase' },
          ],
          questionsBack: [
            `Wenn die älteste Schrift unter Barnabas' Namen den Tod Christi für unsere Sünden lehrt – warum sollte ein Text aus dem 16. Jahrhundert Barnabas besser kennen?`,
          ],
        },
      ],
    },
    {
      id: 'kein-gelehrter-stuetzt-sich-darauf',
      objection: `Ich gebe zu, das Barnabasevangelium ist spät und unzuverlässig. Kein seriöser muslimischer Gelehrter stützt sich heute darauf. Das ändert aber nichts am Koran.`,
      objectionBy: 'Shabir Ally',
      answer: `Ich schätze diese Ehrlichkeit sehr. Aber sie hat eine Folge: Wenn das Barnabasevangelium wegfällt, gibt es *keinen einzigen* Text aus den ersten sechs Jahrhunderten, der berichtet, Jesus sei nicht gekreuzigt worden und habe Mohammed angekündigt. Das einzige „Evangelium", das zum Koran passt, ist eine mittelalterliche Fälschung. Alle frühen Quellen – christliche, jüdische, römische – berichten die Kreuzigung.`,
      detail: `Das ist der ehrliche Ertrag dieses Themas: Nicht der Spott über ein gefälschtes Buch, sondern die Beobachtung, dass die islamische Darstellung Jesu in der historischen Überlieferung vor dem Koran keine Stütze hat. Das Barnabasevangelium ist geradezu der Versuch, diese Lücke nachträglich zu füllen.`,
      questionsBack: [
        `Wenn das Barnabasevangelium wegfällt – welche Quelle vor dem 7. Jahrhundert stützt dann die koranische Darstellung, Jesus sei nicht gekreuzigt worden?`,
      ],
      followUps: [
        {
          id: 'koran-braucht-keine-bestaetigung',
          objection: `Der Koran braucht keine historische Bestätigung. Er ist Gottes Wort – er ist selbst die Quelle.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann verlässt du das Feld der Geschichte und bittest mich, einem Bericht aus dem 7. Jahrhundert mehr zu glauben als allen Quellen des 1. Jahrhunderts – nur weil er sich selbst für göttlich erklärt. Und der Koran selbst geht anders vor: Er verweist Zweifelnde an die, „die vor dir die Schrift lasen" (10:94), und sagt: „Fragt die Leute der Ermahnung, wenn ihr es nicht wisst" (16:43). Der Koran beruft sich auf das Zeugnis der früheren Schrift – also darf man ihn auch daran messen.`,
          detail: `Ein Glaube, der jede Überprüfung ablehnt, kann nicht zugleich behaupten, die Bibel sei *historisch* verfälscht. Wer Tahrif behauptet, macht eine historische Aussage – und muss sie mit historischen Mitteln belegen. Das Barnabasevangelium war genau dieser Versuch, und er ist gescheitert.`,
          sources: [
            { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:94', quote: `Wenn du über das, was Wir zu dir herabgesandt haben, im Zweifel bist, so frage diejenigen, die vor dir die Schrift lesen.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/10/94' },
            { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:43', quote: `So fragt die Leute der Ermahnung, wenn ihr nicht Bescheid wisst.`, translation: 'Bubenheim/Elyas (sinngemäß)', status: 'paraphrase', url: 'https://quran.com/16/43' },
          ],
          questionsBack: [
            `Wenn die Tahrif-These eine historische Behauptung ist – mit welchen historischen Belegen stützt du sie?`,
          ],
          followUps: [
            {
              id: 'historiker-nicht-neutral',
              objection: `Historiker sind nicht neutral. Sie schließen Wunder methodisch aus – also sind sie für Offenbarungsfragen gar nicht zuständig. Gottes Eingreifen, auch die Rettung Jesu vom Kreuz, kann die Geschichtswissenschaft nicht beurteilen.`,
              objectionBy: 'Paul Williams (Blogging Theology)',
              answer: `Über Wunder kann man streiten – aber die Kreuzigung ist kein Wunder. Dass ein jüdischer Wanderprediger unter Pontius Pilatus hingerichtet wurde, ist ein ganz gewöhnliches historisches Ereignis, genau das Feld, auf dem Historiker zuständig sind. Deshalb halten auch nichtchristliche Forscher wie Bart Ehrman, Gerd Lüdemann oder John Dominic Crossan die Kreuzigung für eine der sichersten Tatsachen über Jesus. Wer sie bestreitet, bestreitet nicht ein Wunder, sondern einen gewöhnlichen Befund.`,
              detail: `Bemerkenswert: Der Koran selbst behauptet in 4:157 ein *Wunder* – „es wurde ihnen ähnlich gemacht" (*shubbiha lahum*). Die Beweislast liegt also bei dem, der ein übernatürliches Täuschungsgeschehen gegen die übereinstimmenden Quellen behauptet. Neben dem Neuen Testament berichten Tacitus (Annalen 15,44) und Josephus (Antiquitates 18,63–64, im Kern) von der Hinrichtung. Kein antiker Gegner des Christentums – weder jüdische Polemik noch Kelsos – hat behauptet, Jesus sei gar nicht gekreuzigt worden.`,
              voices: [
                {
                  person: 'habermas',
                  role: 'als Erforscher der Forschungslage zu Tod und Auferstehung Jesu',
                  text: `Habermas hat über Jahrzehnte die Fachliteratur zur Auferstehungsfrage ausgewertet. Sein Ergebnis: Die Kreuzigung Jesu gehört zu den „minimalen Fakten", die nahezu alle Fachleute anerkennen – unabhängig davon, ob sie gläubig, agnostisch oder atheistisch sind. Gerade weil sie so breit anerkannt ist, eignet sie sich als gemeinsamer Ausgangspunkt jeder ehrlichen Debatte.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Gary R. Habermas, Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', quote: `Die Kreuzigung Jesu gehört zu den von nahezu allen Fachleuten anerkannten Fakten.`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'John Dominic Crossan', work: 'Jesus: A Revolutionary Biography', year: '1994', quote: `Dass Jesus gekreuzigt wurde, ist so sicher, wie etwas Historisches nur sein kann.`, status: 'paraphrase', note: 'Crossan ist ein liberaler, nicht an die Auferstehung im kirchlichen Sinn glaubender Forscher – das Zugeständnis wiegt daher schwer.' },
              ],
              questionsBack: [
                `Ist die Hinrichtung eines Menschen durch die Römer ein Wunder – oder ein gewöhnliches historisches Ereignis?`,
              ],
            },
          ],
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
