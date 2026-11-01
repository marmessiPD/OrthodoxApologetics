import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'geheimes-wissen-elite',
  title: `„Jesus lehrte geheimes Wissen für Eingeweihte."`,
  proponents: [
    { name: 'Valentinianische Gnostiker (2. Jh.)', role: 'Gnostische Schule nach Valentinus', work: 'Lehre von geheimer apostolischer Überlieferung; Einteilung der Menschen in Pneumatiker, Psychiker und Hyliker' },
    { name: 'Helena P. Blavatsky', role: 'Mitbegründerin der Theosophischen Gesellschaft (1831–1891)', work: 'Isis Unveiled (1877); The Secret Doctrine (1888)' },
    { name: 'Morton Smith', role: 'Althistoriker, Columbia University (1915–1991)', work: 'Clement of Alexandria and a Secret Gospel of Mark (1973)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979)' },
  ],
  steelman: `Jesus selbst unterschied zwischen innen und außen: „Euch ist gegeben, das Geheimnis des Reiches Gottes zu wissen; denen aber draußen widerfährt es alles durch Gleichnisse" (Mk 4,11), und „besonders aber legte er's seinen Jüngern alles aus" (Mk 4,34). Er sagte: „Ich habe euch noch viel zu sagen; aber ihr könnt's jetzt nicht tragen" (Joh 16,12), und warnte, die Perlen nicht vor die Säue zu werfen (Mt 7,6). Paulus spricht von einer „verborgenen Weisheit" für die „Vollkommenen" (1 Kor 2,6–7) und unterscheidet Milch von fester Speise (Hebr 5,12–14). Die frühe Kirche schickte die Katechumenen vor der Eucharistie hinaus (Arkandisziplin), und Clemens von Alexandrien sprach vom „wahren Gnostiker" und einer ungeschriebenen Überlieferung. Morton Smith fand 1958 einen Brief des Clemens, der ein „geheimes Markusevangelium" für Fortgeschrittene erwähnt. Das Thomasevangelium beginnt mit den Worten: „Dies sind die geheimen Worte, die der lebendige Jesus sprach." Die Großkirche hat diese innere Lehre den Massen vorenthalten; Mysterienschulen, Theosophen und Rosenkreuzer bewahren sie.`,
  biblical: {
    summary: `Jesus sagt vor dem Hohenpriester ausdrücklich: „Ich habe frei öffentlich geredet vor der Welt … und habe **nichts im Winkel** geredet" (Joh 18,20). Unmittelbar nach Mk 4,11 fügt er hinzu: „Es ist nichts verborgen, das es nicht offenbar werde" (Mk 4,22) – das Geheimnis ist zur Offenbarung bestimmt. „Was ich euch sage in der Finsternis, das redet im Licht; und was ihr hört in das Ohr, das predigt auf den Dächern" (Mt 10,27). Der Missionsbefehl gilt allen Völkern: „lehret sie halten **alles**, was ich euch befohlen habe" (Mt 28,20). Paulus hat „nichts verhalten" und „den ganzen Rat Gottes verkündigt" (Apg 20,20.27), und er bezeugt vor König Agrippa: „Solches ist nicht im Winkel geschehen" (Apg 26,26).`,
    detail: `**„Geheimnis" (*mystērion*) im NT** bedeutet nicht Geheimwissen, sondern Gottes Ratschluss, der früher verborgen war und **jetzt allen offenbart** ist: „das Geheimnis, das verborgen gewesen ist von der Welt her …, nun aber offenbart ist seinen Heiligen" (Kol 1,26); „nun aber offenbart … unter allen Heiden bekanntgemacht" (Röm 16,25–26). Paulus betont dreimal „jeden Menschen": „und vermahnen alle Menschen und lehren alle Menschen mit aller Weisheit, auf daß wir darstellen einen jeglichen Menschen vollkommen in Christo Jesu" (Kol 1,28) – eine bewusste Absage an eine Elite.

**1 Kor 2:** Der Inhalt der „verborgenen Weisheit" ist „Jesus Christus, den Gekreuzigten" (2,2); der Geist offenbart sie allen Gläubigen (2,10–12). Die „Vollkommenen" (*teleioi*) sind die geistlich Gereiften – und Paulus nennt dieselben Korinther im nächsten Atemzug „fleischlich" (3,1–3), ohne ihnen etwas vorzuenthalten.

**Joh 16,12–13:** Was die Jünger noch nicht tragen konnten, sollte der Geist sie lehren – erfüllt an Pfingsten und in der öffentlichen Verkündigung der Apostel, die „einmal" den Heiligen übergeben wurde (Jud 3).

**Gottes Weg** führt gerade an der Elite vorbei: „Du hast solches den Weisen und Klugen verborgen und hast es den Unmündigen offenbart" (Mt 11,25; vgl. 1 Kor 1,26–29).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '18,20', quote: `Jesus antwortete ihm: Ich habe frei öffentlich geredet vor der Welt; ich habe allezeit gelehrt in der Schule und in dem Tempel, da alle Juden zusammenkommen, und habe nichts im Winkel geredet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '4,22', quote: `Denn es ist nichts verborgen, das es nicht offenbar werde, und ist nichts Heimliches, das nicht hervorkomme.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,27', quote: `Was ich euch sage in der Finsternis, das redet im Licht; und was ihr hört in das Ohr, das predigt auf den Dächern.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '26,26', quote: `Denn der König weiß solches wohl, zu welchem ich freudig rede. Denn ich achte, ihm sei der keines verborgen; denn solches ist nicht im Winkel geschehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,26.28', quote: `… das Geheimnis, das verborgen gewesen ist von der Welt her und von den Zeiten her, nun aber offenbart ist seinen Heiligen … den verkündigen wir und vermahnen alle Menschen und lehren alle Menschen mit aller Weisheit, auf daß wir darstellen einen jeglichen Menschen vollkommen in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '20,27', quote: `Denn ich habe euch nichts verhalten, daß ich nicht verkündigt hätte all den Rat Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Irenäus antwortete den Gnostikern: Hätten die Apostel geheime Mysterien gekannt, die sie den Vollkommenen gesondert und im Verborgenen lehrten, dann hätten sie diese vor allem den Männern übergeben, denen sie die Kirchen selbst anvertrauten. Die apostolische Überlieferung liegt öffentlich in allen Kirchen vor. Tertullian argumentierte ebenso: Die Apostel haben nichts verborgen. Clemens von Alexandrien gebrauchte das Wort „Gnostiker" für den reifen Christen, der in Glaube, Liebe und Gebet wächst – innerhalb der Kirche, mit derselben Lehre wie alle Gläubigen. In der koptischen Kirche heißen die Sakramente „Mysterien" (*asrar*) – und diese „Geheimnisse" werden jedem Getauften gespendet, sogar Säuglingen.`,
    detail: `**Arkandisziplin:** Ab dem 3./4. Jahrhundert wurden Taufbewerber schrittweise in die Sakramente eingeführt und vor der Eucharistie entlassen. Das war Pädagogik und Ehrfurcht vor dem Heiligen, keine andere Lehre: Das Glaubensbekenntnis wurde jedem Täufling übergeben, die Schrift öffentlich gelesen, und nach der Taufe empfing jeder dasselbe Mysterium. Basilius spricht von ungeschriebenen Überlieferungen – etwa dem Kreuzzeichen und dem Gebet nach Osten –, also liturgischen Bräuchen, die jeder Gläubige kannte, nicht von einer Geheimlehre, die der Schrift widerspricht.

**Der hl. Antonius**, der keine Schulbildung hatte, beschämte nach seiner Vita gebildete heidnische Philosophen, die ihn besuchten: Die Erkenntnis Gottes steht dem einfachen Gläubigen offen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,1', quote: `Hätten die Apostel verborgene Mysterien gekannt, die sie die Vollkommenen gesondert lehrten, so hätten sie diese vor allem denen übergeben, denen sie die Kirchen anvertrauten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Die Prozesseinrede gegen die Häretiker (De praescriptione haereticorum)', ref: '22–26', quote: `Die Apostel haben nichts verborgen und nicht die einen öffentlich, die anderen heimlich gelehrt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'VII', quote: `Der „wahre Gnostiker" ist der in Glaube und Liebe gereifte Christ innerhalb der Kirche.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist', ref: '27,66', quote: `Ungeschriebene Überlieferungen wie das Kreuzzeichen und die Gebetsrichtung nach Osten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jesus sagt selbst: „Ich habe öffentlich zur Welt geredet … und nichts im Winkel" (Joh 18,20), und befiehlt, was er ins Ohr sagt, „von den Dächern" zu predigen (Mt 10,27). „Geheimnis" heißt im Neuen Testament: früher verborgen, **jetzt allen offenbart** (Kol 1,26). Und Paulus will „jeden Menschen" lehren – das Christentum war von Anfang an für Fischer, Sklaven und Frauen, nicht für eine Elite.`,
  keyPoints: [
    `**Öffentliche Lehre:** Joh 18,20; Mt 10,27; Apg 26,26 – „nichts im Winkel".`,
    `**Mk 4,11 im Zusammenhang:** Gleich danach: „Nichts ist verborgen, das nicht offenbar werde" (4,22).`,
    `***Mystērion* = offenbartes Geheimnis:** Kol 1,26–28; Röm 16,25–26 – für „alle Menschen".`,
    `**Alles an alle:** Mt 28,20; Apg 20,27 – der ganze Rat Gottes, nichts zurückgehalten.`,
    `**Irenäus' Argument:** Geheimlehren hätten die Apostel zuerst den Bischöfen übergeben.`,
    `**Gnosis ist elitär:** Pneumatiker, Psychiker, Hyliker – das Evangelium dagegen ist für die „Unmündigen" (Mt 11,25).`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Widerleger der Gnosis',
      text: `Irenäus kannte die gnostische Behauptung, die Apostel hätten den Vollkommenen eine geheime Lehre weitergegeben. Seine Antwort ist historisch: Die Bischöfe, die die Apostel einsetzten, sind namentlich bekannt, ihre Nachfolger ebenso, und keiner von ihnen lehrte solche Mythen. Wer die Wahrheit sucht, kann in jeder apostolischen Kirche die Überlieferung prüfen. Eine Lehre, die nur ein Lehrer des 2. Jahrhunderts kennt, kann nicht von den Aposteln stammen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,1–3; III,4,1', quote: `Öffentliche Sukzession als Prüfstein gegen behauptete Geheimüberlieferungen.`, status: 'paraphrase' }],
    },
    {
      person: 'tertullian',
      role: 'als juristisch geschulter Apologet',
      text: `Tertullian stellte eine Art Rechtseinrede gegen die Häretiker auf: Die Schrift gehört der Kirche, die von den Aposteln her besteht. Gegen die Behauptung, die Apostel hätten nicht alles offenbart oder nicht allen alles gesagt, verweist er darauf, dass Paulus Timotheus ermahnt, das anvertraute Gut zu bewahren – nicht eine Geheimlehre, sondern dasselbe Evangelium, das öffentlich gepredigt wurde.`,
      sources: [{ kind: 'kirchenvater', author: 'Tertullian', work: 'De praescriptione haereticorum', ref: '22–26', quote: `Die Apostel hielten nichts zurück.`, status: 'paraphrase', note: 'Tertullian wird für Apologetik zitiert, nicht als Lehrautorität.' }],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der Katechetenschule von Alexandrien',
      text: `Clemens nahm den Begriff „Gnosis" bewusst in Anspruch: Der wahre Gnostiker ist der Christ, der aus dem Glauben zur Erkenntnis heranreift, in Liebe, Gebet und sittlicher Vollkommenheit. Diese Erkenntnis wächst aus demselben Glauben, den alle Getauften teilen – sie ist Vertiefung, nicht Sonderlehre. Clemens zeigt, dass die alexandrinische Kirche das Verlangen nach Erkenntnis ernst nahm und es in die Kirche hineinholte, statt es einer Sekte zu überlassen.`,
      sources: [{ kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromateis', ref: 'VII', quote: `Das Bild des wahren Gnostikers.`, status: 'paraphrase' }],
    },
    {
      person: 'antonius',
      role: 'als ungelehrter Mönch im Gespräch mit Philosophen',
      text: `Nach der Vita, die Athanasius verfasste, besuchten griechische Philosophen den Wüstenvater Antonius, um ihn als ungebildeten Mann zu verspotten. Antonius fragte sie, was früher sei – der Verstand oder die Buchstaben – und verwies darauf, dass der Glaube an Christus Menschen sichtbar verwandelt, während ihre Weisheit niemanden von den Götzen abbringe. Die Erkenntnis Gottes ist kein Privileg der Gelehrten oder Eingeweihten.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius', ref: '72–80', quote: `Gespräche des Antonius mit den Philosophen.`, status: 'paraphrase' }],
    },
    {
      person: 'chesterton',
      role: 'als Verteidiger der „Demokratie der Toten"',
      text: `Chesterton nannte die Tradition „die Demokratie der Toten": Sie gibt auch den einfachen Menschen früherer Generationen eine Stimme, statt nur der kleinen, hochmütigen Gruppe der Gegenwart. Für ihn ist das Christentum zutiefst demokratisch – der Glaube des Bauern ist derselbe wie der des Gelehrten. Geheimlehren für Eingeweihte sind das Gegenteil: Sie schaffen eine Aristokratie des Wissens.`,
      sources: [{ kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', year: '1908', ref: 'Kap. 4 „The Ethics of Elfland"', quote: `Tradition heißt, der obskursten aller Klassen eine Stimme zu geben: unseren Vorfahren. Sie ist die Demokratie der Toten.`, original: `Tradition means giving votes to the most obscure of all classes, our ancestors. It is the democracy of the dead.`, status: 'verbatim' }],
    },
  ],
  dialog: [
    {
      id: 'mk-4-11-geheimnis',
      objection: `Jesus sagt in Mk 4,11 selbst: Euch ist das Geheimnis gegeben, denen draußen alles in Gleichnissen. Er hatte also eine innere Lehre für Eingeweihte.`,
      objectionBy: 'Esoterische Autoren / Theosophie',
      answer: `Lies weiter: In Mk 4,21–22 sagt Jesus, ein Licht stelle man nicht unter den Scheffel, „denn es ist nichts verborgen, das es nicht offenbar werde". Was er den Jüngern erklärte, sollten sie später öffentlich verkünden (Mt 10,27). Und das „Geheimnis" ist kein Wissen, sondern das Reich Gottes, das in ihm selbst gekommen ist – „draußen" ist, wer nicht glauben will, nicht wer nicht eingeweiht ist.`,
      followUps: [
        {
          id: 'joh-16-12',
          objection: `In Joh 16,12 sagt Jesus: „Ich habe euch noch viel zu sagen; ihr könnt es jetzt nicht tragen." Das kam später durch geheime Überlieferung.`,
          objectionBy: 'Gnostiker / Esoteriker',
          answer: `Der nächste Vers sagt, wie es kommen sollte: „Wenn aber jener, der Geist der Wahrheit, kommen wird, der wird euch in alle Wahrheit leiten" (16,13). Das geschah an Pfingsten, und die Apostel verkündeten es öffentlich – sie hielten nichts zurück (Apg 20,27). Der Glaube ist „einmal" den Heiligen übergeben (Jud 3), nicht in Raten an Geheimzirkel.`,
          followUps: [
            {
              id: 'ihr-habt-auch-tradition',
              objection: `Ihr Orthodoxen glaubt doch selbst an eine mündliche Überlieferung außerhalb der Bibel. Das ist nichts anderes als Geheimlehre!`,
              objectionBy: 'Protestantische und esoterische Kritiker',
              answer: `Unsere Überlieferung ist öffentlich, überall in der Kirche gleich und stimmt mit der Schrift überein – das ist das Gegenteil einer Geheimlehre. Basilius nennt als Beispiele ungeschriebener Überlieferung das Kreuzzeichen und das Gebet nach Osten: Bräuche, die jedes Kind in der Kirche kennt. Eine Geheimlehre dagegen ist nur Eingeweihten bekannt und widerspricht oft der Schrift.`,
              followUps: [
                {
                  id: 'arkandisziplin',
                  objection: `Es gab doch die Arkandisziplin: Katechumenen mussten vor der Eucharistie hinausgehen. Also gab es Geheimes!`,
                  objectionBy: 'Kirchenkritische Autoren',
                  answer: `Das war Pädagogik und Ehrfurcht, keine Sonderlehre: Taufbewerber wurden Schritt für Schritt eingeführt, empfingen das Glaubensbekenntnis und nach der Taufe dieselben Mysterien wie alle anderen. In der koptischen Kirche empfangen sogar getaufte Säuglinge die Eucharistie. Eine „Geheimlehre", die jedes getaufte Kind empfängt, ist keine Elitelehre.`,
                  questionsBack: [`Welche Lehre der Kirche wurde Getauften vorenthalten?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '1-kor-2-vollkommene',
      objection: `Paulus spricht in 1 Kor 2,6–7 von einer verborgenen Weisheit, die er nur unter den „Vollkommenen" lehrt.`,
      objectionBy: 'Valentinianische Gnostiker / Elaine Pagels',
      answer: `Paulus sagt, was diese Weisheit ist: „Jesus Christus, den Gekreuzigten" (2,2). Der Geist offenbart sie allen, die glauben (2,10–12). Und dieselben Korinther nennt er im nächsten Kapitel „fleischlich" und „unmündig in Christus" (3,1) – trotzdem verkündet er ihnen das ganze Evangelium. „Vollkommen" heißt gereift, nicht eingeweiht.`,
      followUps: [
        {
          id: 'geheimes-markusevangelium',
          objection: `Morton Smith fand einen Brief des Clemens von Alexandrien über ein „geheimes Markusevangelium" für Fortgeschrittene. Das beweist eine christliche Geheimlehre.`,
          objectionBy: 'Morton Smith',
          answer: `Die Echtheit dieses Briefes ist hoch umstritten: Die Handschrift ist verschollen, es gibt nur Fotos, und Forscher wie Stephen Carlson und Peter Jeffery halten ihn für eine moderne Fälschung, andere verteidigen ihn. Selbst wenn er echt wäre, beschreibt er eine Erweiterung des Markusevangeliums im 2. Jahrhundert in Alexandrien – und der Brief selbst nennt eine gnostische Gruppe, die Karpokratianer, als Verfälscher.`,
          followUps: [
            {
              id: 'mysterienschulen-heute',
              objection: `Rosenkreuzer, Theosophen und Freimaurer haben dieses alte Mysterienwissen bis heute bewahrt.`,
              objectionBy: 'Esoterische Autoren',
              answer: `Ihre Ursprünge sind gut bekannt – und modern: Die Rosenkreuzer-Manifeste erschienen 1614–1616 in Kassel, die erste Großloge der spekulativen Freimaurerei wurde 1717 in London gegründet, die Theosophische Gesellschaft 1875 in New York. Eine nachweisbare Kette zu Jesus oder den Aposteln gibt es nicht. Die Kirche dagegen kann ihre Bischöfe bis zu den Aposteln aufzählen.`,
              questionsBack: [`Kannst du eine historische Quelle nennen, die eine Verbindung deiner Schule zu Jesus vor dem 17. Jahrhundert belegt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'kirche-unterdrueckte-wahrheit',
      objection: `Die Kirche hat die eigentliche, innere Lehre unterdrückt, um Macht über die Massen zu behalten.`,
      objectionBy: 'Dan Brown / esoterische Autoren',
      answer: `Es ist umgekehrt: Geheimwissen schafft Macht für Eingeweihte. Die Valentinianer teilten die Menschen in „Pneumatiker", „Psychiker" und bloß materielle „Hyliker" ein – eine Hierarchie von Natur aus. Das Evangelium wurde Sklaven, Frauen, Fischern und Analphabeten verkündet; Gott hat es „den Unmündigen offenbart" (Mt 11,25). Die Bibel wurde in die Volkssprachen übersetzt – auch ins Koptische –, damit jeder sie hören kann.`,
      followUps: [
        {
          id: 'jeder-kann-erwachen',
          objection: `Heute ist es nicht mehr elitär: Die Esoterik sagt, jeder kann erwachen und das innere Wissen finden.`,
          objectionBy: 'New-Age-Autoren',
          answer: `Dann bleibt das Prinzip: Rettung durch Erkenntnis oder Technik – durch das, was ich weiß oder übe. Das Evangelium sagt: „Aus Gnade seid ihr selig geworden durch den Glauben, und das nicht aus euch: Gottes Gabe ist es" (Eph 2,8). Christus ist nicht der Lehrer eines Geheimnisses, sondern selbst „das Geheimnis Gottes …, in welchem verborgen liegen alle Schätze der Weisheit und der Erkenntnis" (Kol 2,2–3).`,
          sources: [{ kind: 'bibel', work: 'Kolosser', ref: '2,3', quote: `in welchem verborgen liegen alle Schätze der Weisheit und der Erkenntnis.`, translation: 'Luther 1912', status: 'verbatim' }],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie verstehst du Joh 18,20: „Ich habe nichts im Winkel geredet"?`,
    `Wenn die Apostel eine Geheimlehre hatten – warum gaben sie diese nicht den Bischöfen weiter, die sie einsetzten?`,
    `Welche historische Quelle verbindet deine Lehre mit den Aposteln?`,
    `Wer entscheidet in deiner Lehre, wer „eingeweiht" ist?`,
  ],
  avoid: [
    `„Das geheime Markusevangelium ist sicher eine Fälschung." – Die Frage ist umstritten; sag ehrlich, dass Fachleute uneins sind.`,
    `Behaupten, die frühe Kirche habe überhaupt keine Stufen der Einführung gekannt – die Arkandisziplin gab es.`,
    `Freimaurer oder Theosophen pauschal als bösartig darstellen – kritisiere die Behauptung, nicht die Personen.`,
  ],
  concessions: [
    `Jesus erklärte seinen Jüngern manches gesondert (Mk 4,34).`,
    `Die Alte Kirche führte Taufbewerber schrittweise in die Mysterien ein (Arkandisziplin).`,
    `Clemens von Alexandrien gebrauchte den Begriff „Gnosis" positiv und sprach von ungeschriebener Überlieferung.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch III', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Tertullian', work: 'Die Prozesseinrede gegen die Häretiker', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Darrell L. Bock', work: 'The Missing Gospels', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Stephen C. Carlson', work: 'The Gospel Hoax: Morton Smith\'s Invention of Secret Mark', year: '2005', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gnosis', 'Geheimlehre', 'Esoterik', 'Mysterium', 'Arkandisziplin', 'Irenäus'],
  related: [
    'gnosis/gnostische-evangelien-wahres-christentum',
    'esoterik-new-age/christusbewusstsein',
    'sola-scriptura/tradition-menschenlehre',
    'mormonen/grosser-abfall',
  ],
};

export default claim;
