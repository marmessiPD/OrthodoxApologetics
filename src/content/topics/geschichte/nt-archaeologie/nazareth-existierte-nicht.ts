import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nazareth-existierte-nicht',
  title: `„Nazareth existierte zur Zeit Jesu nicht."`,
  proponents: [
    { name: 'René Salm', role: 'Autor, Vertreter des Jesus-Mythizismus', work: 'The Myth of Nazareth. The Invented Town of Jesus (2008); NazarethGate (2015)' },
    { name: 'Frank R. Zindler', role: 'Herausgeber bei American Atheist Press', work: 'Artikel und Vorträge über „Where Jesus Never Walked"; The Jesus the Jews Never Knew (2003)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014) – deutet „Nazoräer" als Sektenbezeichnung' },
    { name: 'Robert M. Price', role: 'Bibelwissenschaftler, Mythizist', work: 'The Incredible Shrinking Son of Man (2003)' },
  ],
  steelman: `Nazareth wird weder im Alten Testament noch bei Josephus, der Dutzende galiläische Orte nennt und im nur wenige Kilometer entfernten Japha selbst kommandierte, noch in Mischna oder Talmud erwähnt. Die archäologischen Funde aus dem Becken von Nazareth stammen – so René Salm – überwiegend aus der Bronze- und Eisenzeit und dann wieder aus spätrömischer Zeit; für das frühe 1. Jahrhundert fehle eine eindeutig datierte Besiedlung. Die jüdischen Schiebestollengräber (Kokhim) seien nach 70 n. Chr. anzusetzen, und Gräber an Stellen, an denen angeblich Häuser standen, zeigten, dass dort niemand wohnte. Die Bezeichnung „Nazoräer" habe ursprünglich eine religiöse Gruppe oder einen messianischen Titel (hebr. *nezer*, „Spross", Jes 11,1) bezeichnet; erst Markus oder seine Leser hätten daraus einen Herkunftsort gemacht, und byzantinische Pilger hätten den Ort dann „gefunden". Wenn aber der Heimatort Jesu eine Erfindung ist, dann sind die Evangelien keine historischen Berichte, sondern Literatur.`,
  biblical: {
    summary: `Die Evangelien nennen Nazareth als Heimatort Jesu übereinstimmend und beiläufig: Lukas verortet die Verkündigung und die Kindheit dort (Lk 1,26; 2,39.51), Markus nennt Jesus „von Nazareth in Galiläa" (Mk 1,9), Johannes überliefert Nathanaels spöttische Frage „Was kann von Nazareth Gutes kommen?" (Joh 1,46). Matthäus deutet den Ortsnamen typologisch (Mt 2,23 „Er soll Nazarenus heißen") – er setzt den Ort voraus, er erfindet ihn nicht. Gerade die Unbedeutendheit Nazareths ist auffällig: Niemand, der einen Messias erfindet, gibt ihm ein Dorf zur Heimat, über das man spottet, statt Betlehem oder Jerusalem.`,
    detail: `**Mehrfache, unabhängige Bezeugung:** Markus, Q-Stoff (Mt 4,13/Lk 4,16 „Nazara"), lukanisches und johanneisches Sondergut sowie die Apostelgeschichte („Jesus von Nazareth", Apg 2,22; 10,38) nennen den Ort. Der Spottname „Nazarener" für die Christen (Apg 24,5) wäre unverständlich, wenn er nicht an einen bekannten, kleinen Ort erinnerte.

**Kriterium der Peinlichkeit:** Joh 1,46 und Mk 6,1–6 (die Ablehnung in der eigenen Vaterstadt) passen nicht zu einer verherrlichenden Erfindung.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,46', quote: `Und Nathanael sprach zu ihm: Was kann von Nazareth Gutes kommen? Philippus spricht zu ihm: Komm und sieh es!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '1,9', quote: `Und es begab sich zu derselben Zeit, daß Jesus aus Galiläa von Nazareth kam und ließ sich taufen von Johannes im Jordan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,16.29', quote: `Jesus kommt nach Nazareth, wo er erzogen war, geht nach seiner Gewohnheit am Sabbat in die Synagoge; die Menge führt ihn an den Abhang des Berges, auf dem ihre Stadt gebaut war.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Fachwelt – einschließlich nichtchristlicher Historiker wie Bart Ehrman – hält die Existenz Nazareths im 1. Jahrhundert für gesichert. Archäologisch belegt sind u. a. ein 2009 von Yardenna Alexandre (Israelische Antikenbehörde) ausgegrabenes Wohnhaus aus der frühen römischen Zeit nahe der Verkündigungsbasilika, ein von Ken Dark (Nazareth Archaeological Project) unter dem Kloster der Schwestern von Nazareth neu datiertes Hofhaus des 1. Jahrhunderts, jüdische Kokhim-Gräber rund um den Ort, Keramik und Kalksteingefäße, landwirtschaftliche Terrassen und Funde am Marienbrunnen. Nazareth war allerdings ein kleines Dorf von wohl einigen hundert Einwohnern – mehr behauptet das Neue Testament auch nicht. Offen und umstritten sind einzelne Datierungen sowie die Frage, ob bestimmte Häuser mit der Familie Jesu verbunden werden können.`,
    detail: `**Zentrale Belege:**
- **Haus Alexandre (2009):** Mauerreste, Hof, Zisterne, Versteckgrube, Keramik der frühen römischen Zeit und Fragmente von Kalksteingefäßen, die auf jüdische Reinheitspraxis hinweisen. Die Ausgrabung wurde im Dezember 2009 von der Antikenbehörde bekanntgegeben.
- **Schwestern von Nazareth (Ken Dark, Grabungen 2006–2010, Publikationen 2012 und 2020):** ein teilweise in den Fels gehauenes, teils gemauertes Hofhaus, das Dark ins 1. Jahrhundert datiert; später wurde der Bereich für Bestattungen genutzt (Hinweis auf Verlagerung oder Schrumpfung der Siedlung). Darüber eine byzantinische Kirche, die Dark mit der im 7. Jahrhundert (De Locis Sanctis) beschriebenen „Kirche der Ernährung" identifiziert, in der man das Haus der Kindheit Jesu verehrte. Dark betont selbst, dass sich archäologisch nicht entscheiden lässt, ob dies das Haus Jesu war.
- **Inschrift von Caesarea:** Fragmente einer hebräischen Liste der 24 Priesterabteilungen, 1962 von Michael Avi-Yonah in Caesarea gefunden, meist ins 3./4. Jahrhundert datiert (Datenbanken nennen eine Spanne von ca. 200–500). Die 18. Abteilung, Happizzez, wird in Nazareth verortet – ein jüdischer Ort, der nach 135 n. Chr. Priesterfamilien aufnahm.
- **Julius Africanus (frühes 3. Jh.)**, bei Eusebius überliefert: Verwandte Jesu stammten aus den jüdischen Dörfern Nazara und Kochaba.`,
    sources: [
      { kind: 'fachliteratur', author: 'Ken R. Dark', work: 'Early Roman-Period Nazareth and the Sisters of Nazareth Convent. The Antiquaries Journal 92', year: '2012', quote: `Neubewertung eines teils felsgehauenen Baus als Wohnhaus des 1. Jahrhunderts n. Chr., vielleicht ein Hofhaus; spätere Nutzung des Areals für Bestattungen.`, status: 'paraphrase', url: 'https://centaur.reading.ac.uk/29782/' },
      { kind: 'fachliteratur', author: 'Ken R. Dark', work: 'The Sisters of Nazareth Convent. A Roman-period, Byzantine and Crusader site in central Nazareth', year: '2020', quote: `Vollständige Vorlage der Grabungsdaten; Identifikation der byzantinischen Kirche mit der in De Locis Sanctis beschriebenen Kirche.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Michael Avi-Yonah', work: 'A List of Priestly Courses from Caesarea. Israel Exploration Journal 12', ref: 'S. 137–139', year: '1962', quote: `Rekonstruktion einer Liste der 24 Priesterabteilungen mit ihren galiläischen Wohnorten; die 18. Abteilung (Happizzez) in Nazareth.`, status: 'paraphrase', url: 'https://search.inscriptionsisraelpalestine.org/inscriptions/caes0684' },
      { kind: 'gegner', author: 'René Salm', work: 'The Myth of Nazareth. The Invented Town of Jesus', year: '2008', quote: `Für die Zeit um die Zeitenwende fehle eine Besiedlung; die römischen Funde stammten aus der Zeit nach dem Jüdischen Krieg.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Bart D. Ehrman', work: 'Did Jesus Exist? The Historical Argument for Jesus of Nazareth', year: '2012', quote: `Ehrman – selbst Agnostiker – weist die These, Nazareth habe nicht existiert, als archäologisch widerlegt zurück.`, status: 'paraphrase', note: 'Gewichtiges Zeugnis eines Nichtchristen gegen den Mythizismus.' },
    ],
  },
  quickAnswer: `Doch, Nazareth existierte – das bestätigt heute auch der Agnostiker Bart Ehrman. Archäologen haben Wohnhäuser aus der frühen römischen Zeit gefunden (Yardenna Alexandre 2009, Ken Dark unter dem Kloster der Schwestern von Nazareth), dazu jüdische Felsgräber, Kalksteingefäße und Terrassen. Eine Inschrift aus Caesarea nennt Nazareth als Wohnort einer jüdischen Priesterfamilie. Es war ein kleines Dorf – genau deshalb erwähnt es Josephus nicht, und genau deshalb spottet Nathanael: „Was kann von Nazareth Gutes kommen?"`,
  keyPoints: [
    `**Archäologie:** Wohnbauten des 1. Jahrhunderts (Alexandre 2009; Dark 2012/2020), jüdische Kokhim-Gräber im Umkreis, Kalksteingefäße, Keramik, Terrassen und Funde am Marienbrunnen.`,
    `**Inschrift von Caesarea (3./4. Jh.):** Nazareth als Wohnort der Priesterabteilung Happizzez – älteste außerbiblische Erwähnung, eindeutig jüdisch.`,
    `**Schweigen ist kein Gegenbeweis:** Josephus und der Talmud nennen viele Dörfer nicht; Nazareth war militärisch und religiös bedeutungslos – und entstand wohl erst in hellenistisch-hasmonäischer Zeit, darum fehlt es im Alten Testament.`,
    `**Peinlichkeit als Echtheitsindiz:** Ein erfundener Messias hätte keine verspottete Provinzheimat (Joh 1,46).`,
    `**Frühe christliche Zeugen:** Julius Africanus (frühes 3. Jh.) kennt Verwandte Jesu in Nazara – lange vor Konstantin und den Pilgern.`,
    `**Nicht überziehen:** Ob ein bestimmtes Haus das Haus Jesu war, lässt sich nicht beweisen – und muss es auch nicht.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker, der Orte und Lebensumstände genau benennt',
      text: `Lukas, der nach eigener Aussage allem von Anfang an sorgfältig nachgegangen ist (Lk 1,3), nennt Nazareth nicht als Symbol, sondern als konkreten Lebensort: eine „Stadt in Galiläa" (Lk 1,26), in der Jesus aufwuchs (Lk 2,51), mit Synagoge (Lk 4,16) und an einem Berghang gelegen (Lk 4,29). Das griechische *polis* gebraucht er auch für kleine Orte wie Nain oder Betlehem; eine Großstadt behauptet er nicht. Seine Angaben passen zur heutigen Rekonstruktion eines Dorfes an den Hängen eines Hügelkamms.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,3', quote: `Lukas will allem von Anfang an sorgfältig nachgegangen sein und es der Reihe nach aufschreiben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pj-williams',
      role: 'als Neutestamentler zur Orts- und Namenskenntnis der Evangelien',
      text: `Williams weist darauf hin, dass die Evangelien eine Fülle von Orts- und Personennamen enthalten, die zur tatsächlichen Verteilung im Palästina des 1. Jahrhunderts passen – auch kleine, unbedeutende Orte. Spätere, außerhalb Palästinas entstandene apokryphe Evangelien zeigen diese Ortskenntnis dagegen kaum. Ein Ort wie Nazareth, der keinerlei symbolischen Gewinn bringt, ist gerade deshalb ein Hinweis auf Erinnerung und nicht auf Erfindung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Peter J. Williams', work: 'Can We Trust the Gospels?', year: '2018', quote: `Die Evangelien zeigen genaue Kenntnis von Geographie, Namen und Bräuchen Palästinas, die für Autoren fern vom Geschehen schwer zu erwerben gewesen wäre.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'edwin-yamauchi',
      role: 'als Althistoriker zum Umgang mit dem Argument aus dem Schweigen',
      text: `Yamauchi hat immer wieder betont, dass nur ein Bruchteil der antiken Wirklichkeit in Texten und Ausgrabungen erhalten ist. Das Fehlen eines Ortes in einer bestimmten Quelle sagt deshalb wenig; entscheidend ist, was die vorhandenen Funde zeigen. Gerade bei Dörfern, die bis heute überbaut sind – wie Nazareth mit seiner modernen Stadt –, ist das Schweigen der Archäologie besonders schwach.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'The Stones and the Scriptures', year: '1972', quote: `Die Fragmentarität der Quellen mahnt zur Vorsicht gegenüber Argumenten aus dem Schweigen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Kirchenhistoriker, der Julius Africanus überliefert',
      text: `Eusebius bewahrt in seiner Kirchengeschichte einen Brief des Julius Africanus (frühes 3. Jahrhundert) auf. Darin heißt es, die Verwandten des Herrn – die *Desposynoi* – stammten aus den jüdischen Dörfern Nazara und Kochaba und hätten die Erinnerung an ihre Abstammung gepflegt. Das ist rund hundert Jahre vor Konstantin und den byzantinischen Pilgern und zeigt, dass Nazareth Christen als realer jüdischer Ort bekannt war.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'I,7,14', year: 'frühes 4. Jh. (zitiert Julius Africanus, frühes 3. Jh.)', quote: `Die Verwandten des Erlösers seien von den jüdischen Dörfern Nazara und Kochaba aus durch das Land gezogen.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'keine-erwaehnung',
      objection: `Nazareth kommt im Alten Testament nicht vor, Josephus nennt es nicht, Mischna und Talmud nennen es nicht. Ein Ort, den niemand kennt, hat es nicht gegeben.`,
      objectionBy: 'Frank Zindler',
      answer: `Dass ein Dorf in bestimmten Texten fehlt, beweist nicht, dass es nicht existierte. Das Alte Testament schweigt, weil Nazareth nach dem archäologischen Befund erst in hellenistisch-hasmonäischer Zeit (wieder) besiedelt wurde. Josephus und die rabbinischen Texte nennen nur einen Bruchteil der galiläischen Dörfer. Und spätestens die Inschrift von Caesarea nennt Nazareth ausdrücklich als jüdischen Ort.`,
      followUps: [
        {
          id: 'josephus-japha',
          objection: `Josephus war Befehlshaber in Galiläa, kämpfte im zwei Kilometer entfernten Japha und listet Dutzende Orte. Wenn er Nazareth nicht nennt, gab es dort nichts.`,
          objectionBy: 'Frank Zindler',
          answer: `Josephus nennt Orte, die in seinem Krieg eine Rolle spielten – befestigte Städte, Schauplätze von Kämpfen. Ein Weiler ohne Mauern und strategischen Wert taucht in einer Kriegsgeschichte nicht auf. Josephus nennt auch Kana kaum und übergeht zahllose Dörfer. Dass er Japha erwähnt, zeigt nur, dass die Gegend besiedelt war – und das spricht eher für als gegen Nazareth.`,
          followUps: [
            {
              id: 'schweigen-tausend-jahre',
              objection: `Es geht nicht um eine Quelle, sondern um das kumulative Schweigen aller Quellen über Jahrhunderte. Irgendwann wird Schweigen zum Beweis.`,
              objectionBy: 'René Salm',
              answer: `Ein Schweigen wird nur dann zum Beweis, wenn man eine Erwähnung erwarten müsste. Bei einem Dorf von einigen hundert Einwohnern, das erst wenige Generationen vor Jesus entstand, ist das nicht der Fall. Und das Schweigen ist gar nicht vollständig: Neben den Evangelien haben wir Julius Africanus (frühes 3. Jh.) und die Priesterliste von Caesarea – beide unabhängig von byzantinischen Pilgern.`,
              questionsBack: [
                `Welche Quelle hätte ein galiläisches Dorf ohne politische Bedeutung um 20 n. Chr. erwähnen müssen?`,
                `Wie viele der heute archäologisch belegten galiläischen Dörfer nennt Josephus überhaupt?`,
              ],
              followUps: [
                {
                  id: 'talmud-schweigt',
                  objection: `Aber die Rabbinen kannten Galiläa genau. Wenn sie Nazareth nicht nennen, war es kein jüdischer Ort.`,
                  objectionBy: 'René Salm',
                  answer: `Gerade eine jüdische Quelle nennt Nazareth: die hebräische Priesterliste aus Caesarea, die Nazareth als Sitz der 18. Priesterabteilung Happizzez führt. Nach 135 n. Chr. siedelten Priesterfamilien in galiläischen Orten mit jüdischer Bevölkerung – niemand hätte sie in eine heidnische oder unbewohnte Stätte verlegt. Auch spätere synagogale Dichtungen über die Priesterabteilungen kennen diese Zuordnung.`,
                  sources: [
                    { kind: 'juedisch', work: 'Inschrift der Priesterabteilungen aus Caesarea', year: '3./4. Jh. (Spanne in Datenbanken: ca. 200–500)', quote: `Die 18. Abteilung, Happizzez – Nazareth.`, status: 'paraphrase', url: 'https://search.inscriptionsisraelpalestine.org/inscriptions/caes0684', note: 'Hebräische Schreibung mit Tsade (נצרת).' },
                    { kind: 'juedisch', work: 'Pijjutim (synagogale Dichtungen) über die 24 Priesterabteilungen', year: 'spätantik/frühmittelalterlich', quote: `Die Dichtungen ordnen die Priesterabteilungen galiläischen Orten zu, darunter Nazareth.`, status: 'unverified', note: 'Nur als Zusatzhinweis verwenden; Hauptbeleg ist die Inschrift.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'nazoraeer-titel',
          objection: `„Nazoräer" war ursprünglich ein Titel oder Sektenname – vom hebräischen *nezer*, „Spross". Markus hat daraus einen Ort gemacht, den es nicht gab.`,
          objectionBy: 'Richard Carrier',
          answer: `Markus schreibt nicht nur „Nazarener", sondern ganz geographisch: Jesus kam „von Nazareth in Galiläa" (Mk 1,9). Matthäus' Wortspiel (Mt 2,23) setzt einen bekannten Ortsnamen voraus und spielt mit ihm – ein Wortspiel erfindet keinen Ort. Die hebräische Schreibung mit Tsade in der Inschrift von Caesarea passt zudem gut zur Ableitung „Nazoräer" von Nazareth.`,
          followUps: [
            {
              id: 'epiphanius-nasaraeer',
              objection: `Epiphanius kennt eine vorchristliche Sekte der „Nasaräer". Daher kommt der Name, nicht von einem Dorf.`,
              objectionBy: 'Robert M. Price',
              answer: `Epiphanius schrieb im späten 4. Jahrhundert, und seine Sektenkataloge sind gerade bei solchen Gruppen verworren; viele Forscher halten seine Angaben hier für unzuverlässig. Selbst wenn es eine solche Gruppe gab, erklärt das nicht, warum alle Evangelien Jesus einem konkreten galiläischen Dorf zuordnen, in dem er aufwuchs, abgelehnt wurde und dessen Synagoge er besuchte. Eine späte, unsichere Notiz kann die frühe, mehrfache Bezeugung nicht aufwiegen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'keine-funde',
      objection: `Archäologisch gibt es für das frühe 1. Jahrhundert in Nazareth nichts Eindeutiges. Die Funde sind bronze- und eisenzeitlich oder spätrömisch.`,
      objectionBy: 'René Salm',
      answer: `Das ist überholt. 2009 legte Yardenna Alexandre von der Israelischen Antikenbehörde ein Wohnhaus aus der frühen römischen Zeit mit Hof, Zisterne, Keramik und Kalksteingefäßen frei. Ken Dark datierte ein Hofhaus unter dem Kloster der Schwestern von Nazareth ins 1. Jahrhundert. Dazu kommen jüdische Kokhim-Gräber rund um den Ort, Terrassen und Funde am Marienbrunnen. Deshalb hält die Forschung – auch der Agnostiker Ehrman – die Existenz Nazareths für gesichert.`,
      detail: `**Kalksteingefäße** sind bezeichnend: Sie galten nach jüdischem Reinheitsrecht als nicht verunreinigungsfähig und sind typisch für jüdische Haushalte vor allem des 1. Jahrhunderts. Ihr Fund deutet auf eine jüdische Bevölkerung, die die Reinheitsgebote beachtete – genau das Milieu der Evangelien.`,
      followUps: [
        {
          id: 'dark-datierung',
          objection: `Darks Datierung ist umstritten. Und unter dem Kloster liegen Gräber – nach jüdischem Recht durfte man nicht im Ort bestatten. Also war dort kein Dorf.`,
          objectionBy: 'René Salm',
          answer: `Dark selbst beschreibt, dass das Haus zuerst bewohnt und das Areal später für Bestattungen genutzt wurde – ein Hinweis darauf, dass sich die Siedlung verlagerte oder schrumpfte, nicht dass sie nie existierte. Gräber außerhalb der Wohnfläche sind gerade das, was man bei einem jüdischen Dorf erwartet; und Gräber setzen Lebende voraus, die sie anlegen. Über einzelne Datierungen darf man streiten – das Gesamtbild aus mehreren Grabungen bleibt.`,
          followUps: [
            {
              id: 'kokhim-spaet',
              objection: `Die Kokhim-Gräber stammen aus der Zeit nach 70 n. Chr. Sie beweisen nichts für die Zeit Jesu.`,
              objectionBy: 'René Salm',
              answer: `Schiebestollengräber sind in der Region seit hasmonäischer Zeit belegt und wurden bis ins 2. Jahrhundert genutzt; die Zeit Jesu liegt mitten in dieser Spanne. Einige Gräber in Nazareth werden mit Funden der herodianischen Zeit in Verbindung gebracht. Selbst wenn einzelne Gräber später sind, widerlegt das nicht die Wohnfunde aus dem 1. Jahrhundert.`,
              followUps: [
                {
                  id: 'nur-weiler',
                  objection: `Gut, vielleicht ein Weiler. Aber Lukas nennt Nazareth eine „Stadt" mit Synagoge auf einem Berg mit Abhang. Das passt nicht zu ein paar Hütten.`,
                  objectionBy: 'Frank Zindler',
                  answer: `Lukas gebraucht *polis* auch für Nain oder Betlehem – kleine Orte. Schätzungen für Nazareth liegen bei einigen hundert Einwohnern; das Neue Testament behauptet nichts Größeres, Joh 1,46 betont sogar die Bedeutungslosigkeit. „Synagoge" meint zunächst die Versammlung, die auch in einem schlichten Raum stattfinden konnte. Und das antike Dorf lag tatsächlich an Hängen eines Hügelkamms mit steilen Abbrüchen in der Umgebung.`,
                },
              ],
            },
          ],
        },
        {
          id: 'haus-jesu-sensation',
          objection: `Christliche Medien jubeln, man habe „das Haus Jesu" gefunden. Das ist Sensationsmache ohne Beleg.`,
          objectionBy: 'Skeptischer Kritiker',
          answer: `Da stimme ich zu: Ken Dark selbst sagt, archäologisch lasse sich nicht entscheiden, ob es das Haus Jesu war – es gebe nur keinen guten Grund, die Identifikation auszuschließen. Für die Frage, ob Nazareth existierte, brauchen wir das Haus Jesu gar nicht. Es genügt, dass dort im 1. Jahrhundert Menschen wohnten.`,
        },
      ],
    },
    {
      id: 'pilger-erfunden',
      objection: `Nazareth als heiliger Ort wurde von byzantinischen Pilgern im 4. Jahrhundert „gefunden" – nach Konstantin und Helena. Davor gab es keinen Ort dieses Namens mit christlicher Erinnerung.`,
      objectionBy: 'René Salm',
      answer: `Julius Africanus schrieb im frühen 3. Jahrhundert – lange vor Konstantin –, dass Verwandte Jesu aus den jüdischen Dörfern Nazara und Kochaba stammten. Die Priesterliste von Caesarea zeigt Nazareth als jüdischen Ort. Die byzantinischen Kirchen wurden über einem bereits bestehenden Dorf errichtet, nicht an einem leeren Platz.`,
      followUps: [
        {
          id: 'africanus-legende',
          objection: `Africanus gibt Familienlegenden wieder. Das ist keine Geschichte.`,
          objectionBy: 'Richard Carrier',
          answer: `Selbst wenn man die Familienerzählungen offenlässt: Der Text zeigt, dass Christen um 220 Nazara als real existierendes jüdisches Dorf kannten, in dem Menschen lebten. Mehr brauchen wir an dieser Stelle nicht. Die Behauptung, der Ort sei erst von Pilgern im 4. Jahrhundert „erfunden" worden, ist damit widerlegt.`,
        },
      ],
    },
    {
      id: 'beweist-nichts',
      objection: `Und selbst wenn Nazareth existierte – das beweist doch nichts über Jesus. Auch Romane spielen an echten Orten.`,
      objectionBy: 'Richard Carrier',
      answer: `Richtig – Nazareth beweist nicht, dass Jesus der Sohn Gottes ist. Aber das Argument „Nazareth gab es nicht" wird benutzt, um die Evangelien als Fiktion zu entlarven. Wenn es zusammenbricht, bleibt das Gegenteil: Die Evangelien kennen einen unbedeutenden Ort, den ein Romanautor fern von Palästina kaum gewählt hätte.`,
      followUps: [
        {
          id: 'romane-lokalkolorit',
          objection: `Gute Romanautoren recherchieren ihr Lokalkolorit. Das ist kein Argument für Geschichtlichkeit.`,
          objectionBy: 'Richard Carrier',
          answer: `Genaues Lokalkolorit allein beweist nichts, da hast du recht. Es ist ein Mosaikstein: frühe Abfassung, mehrfache unabhängige Bezeugung, peinliche Details und außerbiblische Zeugnisse über Jesus kommen hinzu. Die apokryphen Evangelien des 2. und 3. Jahrhunderts zeigen übrigens, wie Texte aussehen, die fern von Palästina entstanden: Sie haben kaum Ortskenntnis.`,
          questionsBack: [`Welcher Romanautor des 1. Jahrhunderts hätte seinem Helden ausgerechnet eine verspottete Dorfheimat gegeben?`],
        },
      ],
    },
    {
      id: 'synagoge-fehlt',
      objection: `In Nazareth wurde keine Synagoge des 1. Jahrhunderts gefunden. Lukas 4 ist also erfunden.`,
      objectionBy: 'René Salm',
      answer: `Nazareth ist heute eine dicht bebaute Stadt; großflächige Grabungen im alten Ortskern sind kaum möglich. In vielen Orten, die wir sicher kennen, ist keine Synagoge des 1. Jahrhunderts gefunden worden – in Magdala wurde eine erst 2009 entdeckt. „Synagoge" bezeichnet zudem zuerst die Versammlung, die in einem Wohnhaus oder schlichten Raum stattfinden konnte.`,
      followUps: [
        {
          id: 'immer-ausreden',
          objection: `Immer, wenn etwas fehlt, habt ihr eine Ausrede: überbaut, noch nicht gefunden …`,
          objectionBy: 'Frank Zindler',
          answer: `Das ist keine Ausrede, sondern Methode – dieselbe, die Archäologen bei jedem überbauten Ort anwenden. Entscheidend ist, dass wir positive Funde haben: Wohnhäuser, Gräber, Kalksteingefäße, eine Inschrift. Wer aus fehlenden Einzelbauten das Fehlen des ganzen Ortes ableitet, muss die vorhandenen Funde wegerklären – und das gelingt der Mythizismus-These nicht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du das 2009 von der Israelischen Antikenbehörde ausgegrabene Wohnhaus aus der frühen römischen Zeit?`,
    `Warum führt eine jüdische Priesterliste aus Caesarea Nazareth als Wohnort einer Priesterabteilung, wenn der Ort erfunden war?`,
    `Welcher Autor, der einen Messias erfinden will, wählt ein Dorf, über das man spottet?`,
    `Warum lehnen auch nichtchristliche Fachhistoriker wie Bart Ehrman diese These ab?`,
  ],
  avoid: [
    `Behaupten, man habe „das Haus Jesu" sicher gefunden – das sagt nicht einmal der Ausgräber.`,
    `Die „Nazareth-Inschrift" (kaiserliches Edikt gegen Grabschändung) als Beleg für Nazareth anführen – ihr Fundort ist unbekannt, eine Isotopenanalyse weist auf Marmor von der Insel Kos.`,
    `Nazareth zur bedeutenden Stadt aufwerten – es war ein Dorf, und das spricht gerade für die Evangelien.`,
  ],
  concessions: [
    `Nazareth wird im Alten Testament, bei Josephus und in Mischna/Talmud tatsächlich nicht erwähnt.`,
    `Einzelne Datierungen (Gräber, Hausbefunde) sind in der Fachdiskussion umstritten, und die Identifikation eines Hauses mit der Familie Jesu ist unbeweisbar.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Ken R. Dark', work: 'Roman-Period and Byzantine Nazareth and Its Hinterland', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ken R. Dark', work: 'Has Jesus\' Nazareth House Been Found? Biblical Archaeology Review 41/2', year: '2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bart D. Ehrman', work: 'Did Jesus Exist?', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jonathan L. Reed', work: 'Archaeology and the Galilean Jesus', year: '2000', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Nazareth', 'Archäologie', 'Mythizismus', 'Ken Dark', 'Caesarea'],
  related: ['historischer-jesus/jesus-hat-nie-existiert', 'historischer-jesus/ausserbiblische-quellen-gefaelscht', 'nt-archaeologie/pilatus-falsch-dargestellt'],
};

export default claim;
