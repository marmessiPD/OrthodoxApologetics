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
              followUps: [
                {
                  id: 'hermes-trismegistos',
                  objection: `Die Wurzel ist viel älter: die Weisheit des Hermes Trismegistos, des ägyptischen Thot. Das Corpus Hermeticum ist uraltes ägyptisches Mysterienwissen, älter als Mose – Jesus und Paulus haben daraus geschöpft.`,
                  objectionBy: 'Hermetische und theosophische Autoren',
                  answer: `Genau das glaubte man in der Renaissance – bis der Philologe Isaac Casaubon 1614 nachwies, dass die Sprache und die Gedanken des Corpus Hermeticum aus der römischen Kaiserzeit stammen, also aus dem 2. bis 3. Jahrhundert **nach** Christus. Die Texte setzen griechische Philosophie, teils auch jüdische und christliche Motive voraus. Sie können Jesus nicht beeinflusst haben, weil sie nach ihm entstanden.`,
                  detail: `Interessant für Kopten: Einige hermetische Schriften sind in koptischer Übersetzung im Nag-Hammadi-Kodex VI erhalten – sie gehören in dieselbe spätantike Welt wie die gnostischen Texte. Die ägyptische Kirche kannte diese Strömungen, setzte sich mit ihnen auseinander und hielt an der öffentlichen apostolischen Lehre fest. Die moderne Forschung bestätigt Casaubons Datierung im Grundsatz, auch wenn sie in den Texten Elemente älterer ägyptischer Religiosität wiedererkennt.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Isaac Casaubon', work: 'De rebus sacris et ecclesiasticis exercitationes XVI', year: '1614', quote: `Philologischer Nachweis, dass das Corpus Hermeticum nicht aus mosaischer Zeit, sondern aus der nachchristlichen Kaiserzeit stammt.`, status: 'paraphrase' },
                    { kind: 'gegner', work: 'Nag-Hammadi-Kodex VI (u. a. Asclepius, Über die Achtheit und Neunheit)', quote: `Hermetische Texte in koptischer Übersetzung, 4. Jh.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn das Corpus Hermeticum aus dem 2. oder 3. Jahrhundert nach Christus stammt – wie soll Jesus daraus geschöpft haben?`],
                },
              ],
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
          followUps: [
            {
              id: 'gnade-zu-billig',
              objection: `„Aus Gnade" klingt bequem. Erwachen verlangt Arbeit an sich selbst: Meditation, Disziplin, Läuterung. Ein Gott, der einfach schenkt, macht den Menschen passiv.`,
              objectionBy: 'Esoterische und gnostische Lehrer',
              answer: `Die koptische Kirche ist das Gegenteil von bequem: rund 200 Fastentage im Jahr, das Stundengebet der Agpeya, Wachen, Beichte, die Wüstenväter mit ihrem lebenslangen Kampf. Aber diese Mühe ist **Antwort** auf Gottes Gnade, nicht Technik zur Selbsterlösung. Wir sprechen von Synergie: Gott schenkt, und der Mensch wirkt in Freiheit mit. Der Unterschied zur Esoterik liegt nicht zwischen Mühe und Bequemlichkeit, sondern darin, ob ich mich selbst erlöse oder vom lebendigen Gott erlöst und verwandelt werde.`,
              detail: `Die Wüstenväter warnten gerade vor dem Hochmut des Fortgeschrittenen, der sich für erleuchtet hält. Ein bekanntes Wort aus den Vätersprüchen: Antonius sah die Schlingen des Feindes über die ganze Erde ausgebreitet und fragte seufzend, wer ihnen entkommen könne – und hörte die Antwort: die Demut. Erkenntnis ohne Demut bläht auf (1 Kor 8,1). Darum ist der Weg der Kirche nicht der eines inneren Aufstiegs aus eigener Kraft, sondern der Weg der Liebe, die Gott zuerst geschenkt hat (1 Joh 4,19).`,
              voices: [
                {
                  person: 'antonius',
                  role: 'als Vater des Mönchtums',
                  text: `Antonius lebte Jahrzehnte in äußerster Askese – und lehrte doch, dass nicht die Übung rettet, sondern Christus. In den Vätersprüchen erscheint er als der, der die Fallen des Feindes überall sieht und als einzigen Ausweg die Demut erkennt. Die Askese der Wüste war Antwort auf die Liebe Gottes und Kampf gegen den eigenen Stolz – nicht ein Weg, durch Technik ein göttliches Selbst zu entdecken.`,
                  sources: [{ kind: 'kirchenvater', work: 'Apophthegmata Patrum (Vätersprüche), Antonius', ref: '7', quote: `Antonius sah die Schlingen des Feindes über die Erde gebreitet und fragte, wer ihnen entgehen könne; eine Stimme antwortete: die Demut.`, status: 'paraphrase', note: 'Zählung nach der alphabetischen Sammlung.' }],
                },
              ],
              sources: [{ kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `Schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' }],
              questionsBack: [`Wenn ich mich durch eigene Übung erlöse – wofür brauche ich dann Christus?`],
            },
          ],
        },
      ],
    },
    {
      id: 'christentum-mysterienreligion',
      objection: `Das Christentum war selbst eine Mysterienreligion: Einweihung durch Taufe, heiliges Mahl, ein sterbender und auferstehender Gott – wie bei Isis, Osiris und Mithras. Paulus spricht die Sprache der Mysterien: *mystērion*, die „Vollkommenen". Die äußere Kirche hat nur die Hülle bewahrt, die innere Gnosis war das eigentliche Christentum.`,
      objectionBy: 'Timothy Freke / Peter Gandy (The Jesus Mysteries, 1999)',
      answer: `Die Mysterienkulte verpflichteten ihre Eingeweihten zu strengem Schweigen – Apuleius weigert sich ausdrücklich, die Isis-Weihe zu beschreiben. Die Christen dagegen predigten ihre „Mysterien" auf Straßen und Plätzen, und die Taufe stand jedem offen, auch Sklaven, ohne Weihegebühr. Und Paulus' Wort *mystērion* kommt nicht aus den Kulten, sondern aus der jüdischen Bibel: In Daniel 2 offenbart Gott „verborgene Dinge" (*mystēria*) – ein Geheimnis, das Gott enthüllt, nicht eines, das Menschen hüten.`,
      detail: `Die Forschung hat die These der Abhängigkeit des Christentums von den Mysterienkulten weitgehend aufgegeben: Die meisten Belege für die Kulte stammen aus dem 2. bis 4. Jahrhundert, also aus der Zeit nach dem Neuen Testament; manche Parallelen (etwa das Taurobolium als „Wiedergeburt") sind erst spät bezeugt und womöglich vom Christentum beeinflusst. Osiris „aufersteht" nicht in einen verwandelten Leib, sondern wird Herrscher der Unterwelt. Ronald Nash und andere haben die Parallelen Punkt für Punkt geprüft. Ausführlich: Themenblock „Antike Parallelen".`,
      voices: [
        {
          person: 'ronald-nash',
          role: 'als Philosoph und Kenner der hellenistischen Religionen',
          text: `Nash untersucht in „The Gospel and the Greeks" die Behauptung, Paulus habe aus den Mysterienkulten geschöpft. Er zeigt, dass die Quellen zu den Kulten überwiegend jünger sind als das Neue Testament, dass die angeblichen Parallelen oft erst durch christliche Begriffe in die Beschreibung der Kulte hineingetragen wurden und dass Paulus' Sprache aus dem Alten Testament und dem Judentum verständlich ist. Ein Glaube, der sich auf ein geschichtliches Ereignis unter Pontius Pilatus beruft, unterscheidet sich grundlegend von zyklischen Naturmythen.`,
          sources: [{ kind: 'fachliteratur', author: 'Ronald H. Nash', work: 'The Gospel and the Greeks: Did the New Testament Borrow from Pagan Thought?', year: '2. Aufl. 2003', quote: `Prüfung der Abhängigkeitsthese; späte Quellenlage der Mysterienkulte; jüdischer Hintergrund der paulinischen Sprache.`, status: 'paraphrase' }],
        },
      ],
      sources: [
        { kind: 'bibel', work: 'Daniel', ref: '2,28', quote: `Aber es ist ein Gott im Himmel, der kann verborgene Dinge offenbaren.`, translation: 'Luther 1912', status: 'verbatim', note: 'Die Septuaginta gebraucht hier *mystēria*.' },
        { kind: 'gegner', author: 'Apuleius', work: 'Metamorphosen (Der goldene Esel)', ref: 'XI,23', year: '2. Jh.', quote: `Der Erzähler weigert sich, die Einzelheiten der Isis-Weihe preiszugeben – Schweigepflicht der Eingeweihten.`, status: 'paraphrase' },
      ],
      questionsBack: [`Welche Mysterienreligion hat ihre heiligsten Handlungen öffentlich gepredigt und jedem Sklaven ohne Gebühr geöffnet?`],
      followUps: [
        {
          id: 'isis-horus-maria',
          objection: `Gerade eure koptische Kunst verrät die Herkunft: Maria, die den kleinen Jesus stillt, ist das alte Bild der Isis, die Horus stillt. Eure Gottesmutter ist Isis im christlichen Gewand.`,
          objectionBy: 'Religionsvergleichende und esoterische Autoren',
          answer: `Dass koptische Künstler eine vertraute Bildform der Mutter mit dem stillenden Kind aufgriffen, ist gut möglich – das gestehe ich ehrlich zu. Aber eine Bildform ist keine Lehre. Was die Kirche über Maria glaubt, stammt aus dem Lukasevangelium – Verkündigung, Jungfrauengeburt, „Mutter meines Herrn" (Lk 1,43) – und aus dem Konzil von Ephesus (431), das sie *Theotokos* nannte, um die Gottheit Christi zu schützen. Isis ist eine Göttin; Maria ist ein Mensch, eine Magd des Herrn, die wir ehren, aber nicht anbeten.`,
          detail: `Die Kirche Ägyptens hat aus ihrer Umwelt Formen übernommen und mit neuem Inhalt gefüllt – auch das Anch-Zeichen wurde zum koptischen Kreuz. Das ist ein Zeichen von Inkulturation, nicht von Abhängigkeit in der Sache. Entscheidend ist die Frage: Woher stammt der Glaube? Die Mariologie der Kirche wurzelt in der jüdischen Welt Palästinas (Lk 1–2) und in der Christologie: Weil der Sohn wahrer Gott ist, ist seine Mutter Gottesgebärerin. Der hl. Kyrill hat genau das in Ephesus verteidigt.`,
          sources: [
            { kind: 'bibel', work: 'Lukas', ref: '1,38.43', quote: `Maria aber sprach: Siehe, ich bin des HERRN Magd … (Elisabeth:) Und woher kommt mir das, daß die Mutter meines HERRN zu mir kommt?`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'konzil', work: 'Konzil von Ephesus', year: '431', quote: `Bestätigung des Titels Theotokos (Gottesgebärerin) gegen Nestorius.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'joh-17-3-erkenntnis',
              objection: `Selbst das Johannesevangelium sagt: „Das ist das ewige Leben, dass sie dich erkennen" (Joh 17,3). Erlösung durch Erkenntnis – das ist Gnosis pur!`,
              objectionBy: 'Gnostische und esoterische Ausleger',
              answer: `Lies den ganzen Vers: „… dass sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesus Christus, erkennen." Gemeint ist nicht die Erkenntnis des göttlichen Funkens in mir, sondern die persönliche Gemeinschaft mit dem einen Gott und mit dem geschichtlichen Jesus. „Erkennen" heißt in der Bibel wie im Hebräischen (*jada'*) vertraute Beziehung. Und Johannes sagt, woran man diese Erkenntnis prüft: „Wer da sagt: Ich kenne ihn, und hält seine Gebote nicht, der ist ein Lügner" (1 Joh 2,4).`,
              detail: `In der Gnosis rettet die Erkenntnis, dass das wahre Selbst göttlichen Ursprungs ist und dem Gefängnis der Materie entfliehen kann. Im Johannesevangelium dagegen wird das Wort Fleisch (1,14), stirbt am Kreuz und steht leiblich auf (20,27). Die Erkenntnis Gottes führt nicht aus der Welt heraus, sondern in die Liebe zu den Brüdern (1 Joh 4,7–8). Gerade Johannes ist der schärfste Gegner des Doketismus im Neuen Testament.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '17,3', quote: `Das ist aber das ewige Leben, daß sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesum Christum, erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '1. Johannes', ref: '2,4', quote: `Wer da sagt: Ich kenne ihn, und hält seine Gebote nicht, der ist ein Lügner, und in solchem ist keine Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'pneumatiker-nur-reife',
                  objection: `Auch Paulus unterscheidet „pneumatische" und „psychische" Menschen (1 Kor 2,14–15). Die Valentinianer haben das nur systematisiert – Pneumatiker, Psychiker, Hyliker sind Stufen der Reife, nicht Klassen. Das zeigt Elaine Pagels in „The Gnostic Paul".`,
                  objectionBy: 'Elaine Pagels (The Gnostic Paul, 1975)',
                  answer: `Bei Paulus wird man „geistlich", indem man den Geist Gottes empfängt – und das ist allen Glaubenden verheißen (1 Kor 2,12; 12,13: „wir sind alle durch einen Geist zu einem Leibe getauft"). Nach dem Bericht des Irenäus lehrten die Valentinianer dagegen, die Pneumatiker würden **von Natur** gerettet, unabhängig von ihrem Wandel, die Hyliker gingen von Natur zugrunde. Das ist keine Stufe der Reife, sondern ein Unterschied des Wesens. Paulus kennt nur eine Menschheit, die gefallen ist und durch Christus erlöst wird.`,
                  detail: `Pagels' Studie zeigt, wie die Valentinianer Paulus gelesen haben – das ist historisch aufschlussreich. Aber dass eine Gruppe des 2. Jahrhunderts Paulus für sich beanspruchte, beweist nicht, dass Paulus ihre Lehre teilte. Im selben Brief verkündet Paulus die leibliche Auferstehung (1 Kor 15) und den einen Gott, „von dem alle Dinge sind" (8,6) – den Schöpfer, den die Valentinianer unter den höchsten Gott stellten. Irenäus berichtet die valentinianische Dreiteilung ausführlich in Gegen die Häresien I,6–7.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,6,1–2; I,7,5', quote: `Nach valentinianischer Lehre wird das Pneumatische von Natur gerettet, gleich wie es handelt; das Hylische geht von Natur zugrunde.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '12,13', quote: `Denn wir sind durch einen Geist alle zu einem Leibe getauft, wir seien Juden oder Griechen, Knechte oder Freie, und sind alle zu einem Geist getränkt.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'gegner', author: 'Elaine Pagels', work: 'The Gnostic Paul: Gnostic Exegesis of the Pauline Letters', year: '1975', quote: `Untersuchung der valentinianischen Paulusauslegung.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn manche Menschen „von Natur" gerettet werden und andere „von Natur" verloren sind – wozu dann die Predigt an alle?`],
                },
              ],
            },
          ],
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
