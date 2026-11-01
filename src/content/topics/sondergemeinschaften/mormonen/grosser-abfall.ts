import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'grosser-abfall',
  title: `„Die Kirche fiel nach den Aposteln ab – Joseph Smith hat sie wiederhergestellt."`,
  proponents: [
    { name: 'Joseph Smith Jr.', role: 'Gründer der Kirche Jesu Christi der Heiligen der Letzten Tage (1805–1844)', work: 'Köstliche Perle, Joseph Smith – Lebensgeschichte 1,19 (Bericht der ersten Vision)' },
    { name: 'James E. Talmage', role: 'HLT-Apostel und Theologe (1862–1933)', work: 'The Great Apostasy (1909)' },
    { name: 'Hugh Nibley', role: 'HLT-Gelehrter, Brigham Young University (1910–2005)', work: 'The World and the Prophets (1954); Mormonism and Early Christianity' },
    { name: 'Kirche Jesu Christi der HLT', role: 'Offizielle Lehre', work: 'Missionarsleitfaden „Verkündet mein Evangelium", Lektion „Die Wiederherstellung"' },
  ],
  steelman: `Das Neue Testament selbst sagt einen Abfall voraus: Vor dem Tag des Herrn „kommt zuvor der Abfall" (2 Thess 2,3); „nach meinem Abschied werden reißende Wölfe zu euch kommen" (Apg 20,29–30); „es wird eine Zeit sein, da sie die heilsame Lehre nicht leiden werden" (2 Tim 4,3–4); Amos kündigt einen „Hunger nach dem Wort des HERRN" an (Am 8,11–12). Tatsächlich starben die Apostel, und mit ihnen ging die Vollmacht des Priestertums verloren. In den folgenden Jahrhunderten vermischte die Kirche das einfache Evangelium mit griechischer Philosophie – Adolf von Harnack nannte das die „Hellenisierung des Christentums". Die Konzilien schufen Glaubensbekenntnisse mit unbiblischen Begriffen wie *homoousios*. 1820 erschienen Gott Vater und Jesus Christus dem jungen Joseph Smith und sagten ihm, alle Kirchen seien im Irrtum. 1829 gaben Johannes der Täufer sowie Petrus, Jakobus und Johannes ihm und Oliver Cowdery das Priestertum zurück. Daniel 2,44 kündigte ein Reich an, das Gott in den letzten Tagen aufrichten würde; Offb 14,6 sieht einen Engel mit dem „ewigen Evangelium" – den Engel Moroni.`,
  biblical: {
    summary: `Die Bibel kündigt Irrlehren und Abfall **in** der Kirche an, aber nie das **Verschwinden** der Kirche. Jesus verspricht: „Die Pforten der Hölle sollen sie nicht überwältigen" (Mt 16,18), „Ich bin bei euch alle Tage bis an der Welt Ende" (Mt 28,20), und der Geist werde „bei euch bleiben ewiglich" (Joh 14,16). Paulus preist Gott „in der Gemeinde … zu aller Zeit, von Ewigkeit zu Ewigkeit" (Eph 3,21). Das Gleichnis vom Unkraut zeigt Weizen und Unkraut **nebeneinander bis zur Ernte** (Mt 13,30) – nie eine Zeit nur mit Unkraut. Dan 2,44 sagt gerade, dass Gottes Reich „nimmermehr zerstört" wird.`,
    detail: `**Teilweiser, nicht totaler Abfall:** 1 Tim 4,1 sagt, „etliche" werden vom Glauben abfallen; Apg 20,29–30 warnt die Ältesten von Ephesus, wachsam zu sein – ein Auftrag, der nur Sinn hat, wenn die Herde bestehen bleibt. 2 Thess 2,3 verbindet den Abfall mit dem Auftreten des „Menschen der Sünde" unmittelbar vor der Wiederkunft, nicht mit dem 2. Jahrhundert.

**Weitergabe des Amtes:** Die Apostel setzten Älteste ein (Apg 14,23; Tit 1,5) und gaben Anweisung zur Weitergabe über mehrere Generationen: „Was du von mir gehört hast …, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren" (2 Tim 2,2). Die Gemeinde ist „erbaut auf den Grund der Apostel und Propheten" (Eph 2,20) – ein Fundament wird einmal gelegt, nicht in jeder Generation neu.

**Das Priestertum Melchisedeks** gehört nach Hebr 7,24 Christus allein: Er hat „ein unvergängliches Priestertum" (*aparabatos* – unübertragbar, unveränderlich). Ein „Melchisedekisches Priestertum", das Menschen tragen und weitergeben, kennt das Neue Testament nicht.

**Jud 3:** Der Glaube ist „einmal" (*hapax*, ein für alle Mal) den Heiligen übergeben.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '16,18', quote: `Und ich sage dir auch: Du bist Petrus, und auf diesen Felsen will ich bauen meine Gemeinde, und die Pforten der Hölle sollen sie nicht überwältigen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,20', quote: `… und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '3,21', quote: `dem sei Ehre in der Gemeinde, die in Christo Jesu ist, zu aller Zeit, von Ewigkeit zu Ewigkeit! Amen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '2,2', quote: `Und was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '7,24', quote: `dieser aber darum, daß er bleibt ewiglich, hat er ein unvergängliches Priestertum.`, original: `ἀπαράβατον ἔχει τὴν ἱερωσύνην`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', author: 'Joseph Smith', work: 'Köstliche Perle, Joseph Smith – Lebensgeschichte', ref: '1,19', quote: `… daß sie alle im Irrtum seien; und die Person, die zu mir sprach, sagte, alle ihre Glaubensbekenntnisse seien ihm ein Greuel …`, original: `… for they were all wrong; and the Personage who addressed me said that all their creeds were an abomination in his sight …`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche kann ihre ununterbrochene Geschichte dokumentieren. Clemens von Rom (um 96) bezeugt, dass die Apostel Nachfolger einsetzten; Ignatius von Antiochien (um 110) kennt Bischöfe, Presbyter und Diakone; Irenäus (um 180) nennt die Bischofslisten der apostolischen Kirchen als öffentliches Zeugnis der Wahrheit. Die koptische Kirche führt ihre Bischofsreihe auf den Evangelisten **Markus** zurück; Papst Tawadros II. ist der 118. Patriarch auf dem Stuhl des hl. Markus. Ihr Kalender zählt die Jahre seit 284, dem Beginn der Verfolgung unter Diokletian – der „Ära der Märtyrer". Eine Kirche, die Tausende Märtyrer für das Bekenntnis zu Christus hervorbrachte, war nicht „abgefallen".`,
    detail: `Papst Schenuda III. hat in seinen Schriften zur Vergleichenden Theologie betont, dass das Priestertum durch Handauflegung von den Aposteln her weitergegeben wird – sichtbar, überprüfbar, in einer Kette von Personen, nicht durch eine Vision, für die es nur zwei Zeugen gibt. Wichtig ist auch die Gegenfrage: Die spezifischen HLT-Lehren (Gott mit Körper aus Fleisch und Knochen, ewiger Fortschritt zum Gottsein, Tempelsiegelung, Taufe für Verstorbene als Heilsritus) finden sich bei **keiner** christlichen Gemeinschaft der ersten Jahrhunderte – weder bei den Rechtgläubigen noch bei den Häretikern.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '42; 44', year: 'um 96', quote: `Die Apostel setzten Bischöfe und Diakone ein und verfügten, dass nach deren Tod andere erprobte Männer ihren Dienst übernehmen sollten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,1–3', quote: `Die Überlieferung der Apostel ist in der ganzen Welt offenkundig; wir können die von den Aposteln eingesetzten Bischöfe und ihre Nachfolger bis in unsere Zeit aufzählen.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie (Comparative Theology)', quote: `Das Priestertum wird durch Handauflegung in ununterbrochener Folge von den Aposteln weitergegeben.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jesus hat versprochen, dass die Pforten der Hölle seine Kirche nicht überwältigen und er alle Tage bei ihr ist (Mt 16,18; 28,20). Ein 1700-jähriger Totalabfall würde ihn zum Lügner machen. Die koptische Kirche kann ihre Bischöfe lückenlos bis zum Evangelisten Markus aufzählen und hat in jedem Jahrhundert Märtyrer für Christus hervorgebracht – und keine einzige Gemeinde der frühen Jahrhunderte glaubte, was Joseph Smith später „wiederherstellte".`,
  keyPoints: [
    `**Christi Verheißung:** Mt 16,18; 28,20; Joh 14,16; Eph 3,21 – die Kirche bleibt bis zum Ende.`,
    `**Abfall ≠ Verschwinden:** Die NT-Warnungen betreffen Irrlehrer in der Kirche, nicht ihr Erlöschen (Mt 13,30).`,
    `**Sichtbare Sukzession:** Clemens, Ignatius, Irenäus; die koptische Bischofsreihe seit Markus.`,
    `**Hebr 7,24:** Das melchisedekische Priestertum gehört Christus allein und ist unübertragbar.`,
    `**Keine Spur der „wiederhergestellten" Lehren** in irgendeiner frühen Gemeinde.`,
    `**Hellenisierung? Umgekehrt:** Die Väter widersprachen der griechischen Philosophie bei Schöpfung, Menschwerdung und Auferstehung.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Zeuge der apostolischen Überlieferung',
      text: `Irenäus, Schüler des Polykarp, der seinerseits den Apostel Johannes kannte, stand selbst in der Kette, die die Mormonen für zerbrochen halten. Gegen die Gnostiker, die ebenfalls behaupteten, die eigentliche Lehre sei verloren und nur ihnen bekannt, argumentierte er: Die Überlieferung der Apostel liegt offen in allen Kirchen, ihre Bischöfe sind namentlich bekannt, und sie lehren überall denselben Glauben. Hätten die Apostel eine andere Lehre gehabt, hätten sie diese den Männern übergeben, denen sie die Kirchen anvertrauten.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,3,1–4', quote: `Öffentlichkeit und Kontinuität der apostolischen Überlieferung.`, status: 'paraphrase' }],
    },
    {
      person: 'pelikan',
      role: 'als Dogmenhistoriker',
      text: `Pelikan, einer der bedeutendsten Dogmenhistoriker des 20. Jahrhunderts, hat die These von der „Hellenisierung" des Christentums differenziert: In entscheidenden Punkten war die Entwicklung der Lehre eher eine **Ent-Hellenisierung**. Die Schöpfung aus dem Nichts, die Menschwerdung Gottes und die leibliche Auferstehung widersprachen dem griechischen Denken direkt. Die Väter benutzten philosophische Begriffe, um den biblischen Glauben gegen philosophische Missdeutungen zu schützen – nicht um ihn zu ersetzen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Emergence of the Catholic Tradition (100–600)', year: '1971', quote: `Die Lehrentwicklung war in zentralen Punkten eher eine Ent-Hellenisierung.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'Christianity and Classical Culture', year: '1993', quote: `Die Kappadokier und die Spannung zwischen biblischem Glauben und griechischer Philosophie.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Vergleichenden Theologie',
      text: `Papst Schenuda III. hat in zahllosen Vorträgen erklärt, dass das Priestertum in der Kirche nicht durch persönliche Erlebnisse, sondern durch die Handauflegung der Bischöfe in ununterbrochener Folge seit den Aposteln weitergegeben wird. Die koptische Kirche selbst ist für ihn ein lebendiger Beweis: verfolgt unter Römern, Byzantinern und späteren Herrschern, aber nie erloschen und nie von ihrem Glauben abgewichen.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', quote: `Apostolische Sukzession durch Handauflegung.`, status: 'paraphrase' }],
    },
    {
      person: 'blomberg',
      role: 'als evangelikaler Gesprächspartner der HLT-Theologie',
      text: `Blomberg hat mit dem HLT-Theologen Stephen E. Robinson das Buch „How Wide the Divide?" verfasst – ein respektvolles Gespräch, in dem beide Seiten ihre Positionen klar benennen. Blomberg zeigt, dass die Frage nach dem Abfall nicht mit Polemik, sondern historisch zu klären ist: Was glaubten die Christen der ersten Jahrhunderte tatsächlich? Die Quellen zeigen Irrlehren, aber auch eine kontinuierliche Kirche, die die Gottheit Christi und die Einzigkeit Gottes bekannte.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig L. Blomberg / Stephen E. Robinson', work: 'How Wide the Divide? A Mormon & an Evangelical in Conversation', year: '1997', quote: `Respektvoller Dialog über Schrift, Gott, Christus und Heil.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'abfall-vorhergesagt',
      objection: `Die Bibel sagt den Abfall selbst voraus: 2 Thess 2,3, Apg 20,29, 2 Tim 4,3. Genau das ist passiert.`,
      objectionBy: 'HLT-Missionare',
      answer: `Diese Stellen warnen vor Irrlehrern **in** der Kirche – und fordern die Gemeinden auf, wachsam zu bleiben. Das ergibt nur Sinn, wenn die Kirche weiterbesteht. 1 Tim 4,1 spricht von „etlichen", nicht von allen. Und 2 Thess 2,3 verbindet den Abfall mit dem Menschen der Sünde vor der Wiederkunft Christi, nicht mit dem 2. Jahrhundert.`,
      questionsBack: [`Wie passt ein vollständiger Abfall zu Jesu Versprechen in Mt 16,18 und 28,20?`],
      followUps: [
        {
          id: 'priestertum-verloren',
          objection: `Mit dem Tod der Apostel ging die Priestertumsvollmacht verloren. Ohne Vollmacht keine gültigen Verordnungen.`,
          objectionBy: 'HLT-Missionare',
          answer: `Die Apostel haben ihre Vollmacht ausdrücklich weitergegeben: Sie setzten in jeder Gemeinde Älteste ein (Apg 14,23), Paulus beauftragte Titus, in jeder Stadt Älteste einzusetzen (Tit 1,5), und Timotheus, das Empfangene an treue Menschen weiterzugeben, die wiederum andere lehren (2 Tim 2,2) – vier Generationen in einem Vers. Clemens von Rom bestätigt um 96 genau diese Praxis.`,
          followUps: [
            {
              id: 'petrus-jakobus-johannes',
              objection: `Darum erschienen 1829 Petrus, Jakobus und Johannes Joseph Smith und Oliver Cowdery und gaben das Melchisedekische Priestertum zurück.`,
              objectionBy: 'HLT-Lehre (LuB 27,12)',
              answer: `Für dieses Ereignis gibt es nur zwei Zeugen, und es wird erst Jahre später schriftlich erwähnt; selbst HLT-Historiker können das genaue Datum nicht angeben. Vor allem aber sagt Hebr 7,24, dass Christus ein Priestertum hat, das **unübertragbar** ist. Ein menschliches „Melchisedekisches Priestertum" kennt das Neue Testament nicht – Christus ist der eine Hohepriester nach der Ordnung Melchisedeks.`,
              questionsBack: [`Wo im Neuen Testament trägt ein Apostel oder Ältester den Titel „Hoherpriester nach der Ordnung Melchisedeks"?`],
              followUps: [
                {
                  id: 'aparabatos-unveraenderlich',
                  objection: `*Aparabatos* in Hebr 7,24 heißt „unveränderlich" oder „dauerhaft", nicht „unübertragbar". Der Vers sagt nur, dass Christi Priestertum ewig ist – nicht, dass er keine Priester unter sich bevollmächtigen kann.`,
                  objectionBy: 'FAIR (HLT-Apologetik)',
                  answer: `Einverstanden, dass das Wort „bleibend, unvergänglich" bedeuten kann. Aber lies den Gedankengang: Die levitischen Priester waren „viele, weil der Tod sie nicht bleiben ließ; dieser aber, weil er ewig bleibt, hat ein unvergängliches Priestertum" (7,23–24). Der Hebräerbrief sagt: Christus braucht **keine Nachfolger** im Hohepriesteramt, weil er nicht stirbt. Ein Amt „Hoherpriester nach der Ordnung Melchisedeks" für Tausende Männer widerspricht genau dieser Logik.`,
                  detail: `Das Neue Testament kennt ein Priestertum aller Gläubigen (1 Petr 2,5.9; Offb 1,6) und den Dienst von Bischöfen, Presbytern und Diakonen, die an Christi einem Priestertum teilhaben. Die koptische Kirche weiht Priester – aber nie als „Hohepriester nach der Ordnung Melchisedeks" neben Christus, sondern als Diener, durch die Christus selbst in den Sakramenten handelt. Im HLT-System dagegen gibt es zwei getrennte, durch Engelboten 1829 neu übertragene Priestertümer mit eigenen Ämtern – eine Struktur, für die das Neue Testament keinen Beleg bietet.`,
                  sources: [{ kind: 'bibel', work: 'Hebräer', ref: '7,23–24', quote: `Und jener sind viele, die Priester wurden, darum daß sie der Tod nicht bleiben ließ; dieser aber hat darum, daß er bleibt ewiglich, ein unvergängliches Priestertum.`, original: `ἀπαράβατον ἔχει τὴν ἱερωσύνην`, translation: 'Luther 1912', status: 'verbatim' }],
                  questionsBack: [`Warum braucht ein Hoherpriester, der „ewig bleibt", eine Nachfolge von menschlichen Hohepriestern?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hellenisierung',
      objection: `Die Konzilien haben das einfache Evangelium mit griechischer Philosophie vermischt – Begriffe wie „homoousios" stehen nicht in der Bibel. Das hat sogar Harnack gezeigt.`,
      objectionBy: 'Hugh Nibley / HLT-Apologeten',
      answer: `Die Väter benutzten einen griechischen Begriff, um einen biblischen Inhalt gegen eine philosophische Verzerrung zu schützen: Arius machte Christus zu einem Mittelwesen nach platonischem Muster. Die griechische Philosophie lehnte gerade das ab, was die Kirche bekannte: Schöpfung aus dem Nichts, Gott wird Mensch, der Leib aufersteht. Und ironischerweise ist die HLT-Vorstellung, Gott habe ewig vorhandene Materie nur geordnet, viel näher an Platons Weltbildner im *Timaios*.`,
      followUps: [
        {
          id: 'bekenntnisse-greuel',
          objection: `Gott selbst hat Joseph Smith gesagt, alle Glaubensbekenntnisse seien ihm ein Greuel (JS–LG 1,19). Das genügt mir.`,
          objectionBy: 'HLT-Missionare',
          answer: `Dann müssen wir diese Botschaft prüfen, wie die Bibel es verlangt (Gal 1,8; 1 Joh 4,1). Das Nizänum bekennt nichts anderes als Joh 1,1, 1,14 und 20,28: Jesus ist wahrer Gott und wahrer Mensch. Wenn eine Vision das Bekenntnis zu Joh 1,1 einen Greuel nennt, widerspricht sie der Schrift. Zudem gibt es mehrere Berichte der ersten Vision, die sich in wichtigen Punkten unterscheiden.`,
          followUps: [
            {
              id: 'erste-vision-berichte',
              objection: `Mehrere Berichte sind normal. Auch die Evangelien unterscheiden sich, und Paulus' Bekehrung wird in der Apostelgeschichte dreimal unterschiedlich erzählt.`,
              objectionBy: 'FAIR (HLT-Apologetik)',
              answer: `Das ist ein fairer Punkt – Unterschiede in Details sind normal. Aber im frühesten, von Smith selbst geschriebenen Bericht von 1832 erscheint nur „der Herr"; erst im Bericht von 1838 sind es zwei getrennte Personen, Vater und Sohn. Genau das ist der Kern der HLT-Gotteslehre. Bei Paulus bleibt der Kern in allen drei Berichten gleich: Jesus erscheint und beruft ihn.`,
              detail: `Die HLT-Kirche hat die verschiedenen Berichte in ihrem Gospel-Topics-Essay „First Vision Accounts" offen dargestellt – das verdient Anerkennung. Für das Gespräch heißt das: Nicht von „Lüge" sprechen, sondern sachlich fragen, warum das zentrale Element der späteren Lehre im ältesten Bericht fehlt.`,
              questionsBack: [`Warum fehlt die Erscheinung des Vaters im ältesten, eigenhändigen Bericht von 1832?`],
              followUps: [
                {
                  id: 'der-herr-umfasst-beide',
                  objection: `„Der Herr" im Bericht von 1832 schließt den Vater nicht aus – Smith konzentrierte sich auf die Botschaft. Und schon 1835 spricht er von „zwei Personen". Die Entwicklung betrifft die Darstellung, nicht die Sache.`,
                  objectionBy: 'FAIR / Gospel Topics Essay „First Vision Accounts"',
                  answer: `Dann schau in das Buch Mormon von 1830, das Smith nach eigener Aussage durch Gottes Gabe übersetzte: Dort ist Christus „der Vater und der Sohn" (Mosia 15,1–4; Ether 3,14), und Gott ist ein Geist (Alma 18,26–28). Das ist eine Gotteslehre, die dem späteren HLT-Glauben an Vater und Sohn als getrennte Wesen mit Körpern widerspricht. Die Gotteslehre der HLT-Kirche hat sich zwischen 1830 und 1844 sichtbar entwickelt – bis zur King-Follett-Predigt. Das passt schlecht zu einer Vision von 1820, die angeblich alles klärte.`,
                  detail: `Auch HLT-Historiker sprechen von einer Entwicklung der Gotteslehre Joseph Smiths. Das Gespräch wird fruchtbarer, wenn du nicht „Lüge" sagst, sondern fragst: Welche Gotteslehre ist die maßgebliche – die des Buches Mormon von 1830 oder die von Lehre und Bündnisse 130,22 (1843)? Wenn der „große Abfall" in einer falschen Gotteslehre bestand, warum brauchte dann die Wiederherstellung selbst noch 14 Jahre, um ihre Gotteslehre zu finden?`,
                  sources: [
                    { kind: 'gegner', work: 'Buch Mormon', ref: 'Mosia 15,1–4', quote: `Gott selbst wird herabkommen … und weil er im Fleische wohnt, wird er der Sohn Gottes genannt … der Vater und der Sohn – sie sind ein Gott, ja, der wahre Ewige Vater des Himmels und der Erde.`, status: 'paraphrase' },
                    { kind: 'gegner', work: 'Buch Mormon', ref: 'Ether 3,14', quote: `Siehe, ich bin Jesus Christus. Ich bin der Vater und der Sohn.`, status: 'paraphrase' },
                    { kind: 'gegner', work: 'Lehre und Bündnisse', ref: '130,22', year: '1843', quote: `Der Vater hat einen Körper aus Fleisch und Gebein, so fühlbar wie der eines Menschen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Welche Gotteslehre ist für dich verbindlich: Mosia 15 („der Vater und der Sohn – ein Gott") oder LuB 130,22 (zwei getrennte Wesen mit Körpern)?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wo-sind-apostel-propheten',
      objection: `Die Kirche Christi hatte Apostel und Propheten (Eph 4,11). Eure Kirche hat keine – unsere schon. Das zeigt, wo die wahre Kirche ist.`,
      objectionBy: 'HLT-Missionare',
      answer: `Eph 2,20 sagt, die Kirche ist „erbaut auf den Grund der Apostel und Propheten" – ein Fundament legt man einmal. Die Apostel waren Augenzeugen des Auferstandenen (Apg 1,21–22; 1 Kor 9,1); dieses Amt ist nicht wiederholbar. Die Kirche setzt ihren Dienst durch die Bischöfe fort, die die Apostel einsetzten. Die Didache zeigt um 100 genau diesen Übergang.`,
      followUps: [
        {
          id: 'kopten-auch-abgefallen',
          objection: `Gerade eure Kirche mit Ikonen, Kindertaufe und Weihrauch zeigt doch den Abfall von der Einfachheit der Urkirche.`,
          objectionBy: 'HLT-Missionare',
          answer: `Die Kindertaufe bezeugen schon Hippolyt und Origenes im frühen 3. Jahrhundert als apostolische Überlieferung; Weihrauch kennt die Offenbarung im himmlischen Gottesdienst (Offb 8,3–4). Aber die eigentliche Frage ist eine andere: Nenne mir einen einzigen Christen des 1. bis 4. Jahrhunderts, der lehrte, Gott habe einen Körper aus Fleisch und Knochen oder Menschen könnten Götter eigener Welten werden.`,
          followUps: [
            {
              id: 'belege-vernichtet',
              objection: `Die Belege wurden eben vernichtet – das Buch Mormon sagt, „klare und kostbare Teile" seien aus der Bibel entfernt worden (1 Nephi 13).`,
              objectionBy: 'Buch Mormon, 1 Nephi 13,26–28',
              answer: `Diese Behauptung ist nicht überprüfbar – und die Funde sprechen dagegen: Die Jesaja-Rolle aus Qumran (um 125 v. Chr.) bestätigt den Text des Alten Testaments; Tausende NT-Handschriften, manche aus dem 2. Jahrhundert, zeigen keine verlorenen „kostbaren Teile". Und das Buch Mormon zitiert lange Jesaja-Abschnitte im Wortlaut der englischen King-James-Bibel von 1611, samt deren Übersetzungseigenheiten.`,
              followUps: [
                {
                  id: 'joseph-smith-uebersetzung',
                  objection: `Darum hat Joseph Smith in seiner inspirierten Übersetzung der Bibel (JST) die verlorenen Teile wiederhergestellt.`,
                  objectionBy: 'HLT-Lehre',
                  answer: `Keine einzige Änderung der JST wird von einer Handschrift gestützt. Bezeichnend: In Gen 50 fügt die JST eine Prophezeiung Josefs über einen künftigen Seher namens Joseph ein, dessen Vater ebenfalls Joseph heißt – also über Joseph Smith selbst. Eine „Wiederherstellung", die den Wiederhersteller in den Text schreibt, sollte uns vorsichtig machen.`,
                  questionsBack: [`Gibt es irgendeine alte Handschrift, die die Ergänzungen der Joseph-Smith-Übersetzung enthält?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fruehe-christen-koerperlicher-gott',
      objection: `Die frühesten Christen glaubten, was wir glauben: Tertullian schrieb, Gott sei ein Körper; Melito von Sardes verfasste eine Schrift „Über den verkörperten Gott"; und die ägyptischen Mönche stellten sich Gott in menschlicher Gestalt vor. Erst die Platoniker haben Gott zu einem gestaltlosen Geist gemacht. Das ist der Abfall.`,
      objectionBy: 'Daniel C. Peterson / David L. Paulsen (HLT-Philosoph, BYU)',
      answer: `Tertullian meinte mit „Körper" (*corpus*) im Sinn der Stoiker: Alles, was wirklich ist, hat Substanz – auch Geist ist für ihn „Körper eigener Art". Von Fleisch und Knochen spricht er nicht. Bei Melito kennen wir nur den Titel, nicht den Inhalt. Und die Mönche, die sich Gott menschengestaltig vorstellten, wurden in Ägypten selbst korrigiert. Vor allem: **Keiner** dieser Autoren lehrte, Gott sei einst ein Mensch gewesen oder Menschen würden Götter eigener Welten.`,
      detail: `Tertullian, *Gegen Praxeas* 7: „Wer wird leugnen, dass Gott ein Körper ist, obwohl Gott Geist ist? Denn auch der Geist ist ein Körper eigener Art in seiner eigenen Gestalt." In *Über das Fleisch Christi* 11 erklärt er, alles Seiende sei Körper eigener Art, nur das Nichtseiende sei unkörperlich – eine stoische Ontologie, keine Lehre vom Gott mit menschlichem Leib. Origenes widerlegt in *Über die Prinzipien* I,1 ausdrücklich die Vorstellung eines körperlichen Gottes aus der Schrift (Joh 4,24; 1 Joh 1,5). Die Väter waren in dieser Frage nicht Platoniker, sondern Schriftausleger: „Gott ist nicht ein Mensch" (Num 23,19).`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Gegen Praxeas (Adversus Praxean)', ref: '7', quote: `Wer wird leugnen, dass Gott ein Körper ist, obwohl Gott Geist ist? Denn der Geist ist ein Körper eigener Art in seiner eigenen Gestalt.`, original: `Quis enim negabit deum corpus esse, etsi deus spiritus est? Spiritus enim corpus sui generis in sua effigie.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Über die Prinzipien (De Principiis)', ref: 'I,1,1–6', quote: `Widerlegung der Ansicht, Gott sei körperlich; Auslegung von Joh 4,24 und 1 Joh 1,5.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'IV,26,2', quote: `Unter den Schriften Melitos wird ein Werk „Über den verkörperten Gott" (*Peri ensōmatou theou*) aufgezählt.`, status: 'paraphrase', note: 'Nur der Titel ist überliefert; ob er die Menschwerdung oder einen körperlichen Gott meint, ist unklar.' },
        { kind: 'gegner', author: 'David L. Paulsen', work: 'Early Christian Belief in a Corporeal Deity: Origen and Augustine as Reluctant Witnesses', ref: 'Harvard Theological Review 83 (1990)', quote: `These, ein Teil der frühen Christen habe an einen körperlichen Gott geglaubt.`, status: 'paraphrase' },
      ],
      questionsBack: [`Kannst du einen einzigen Kirchenvater nennen, der lehrte, dass Gott einmal ein Mensch war, der zum Gott erhöht wurde?`],
      followUps: [
        {
          id: 'anthropomorphiten-aegypten',
          objection: `Aber die Anthropomorphiten unter den ägyptischen Wüstenmönchen hielten noch um 400 an einem menschengestaltigen Gott fest – sie waren die einfachen Bewahrer des ursprünglichen Glaubens, bis der Bischof von Alexandrien sie unterdrückte.`,
          objectionBy: 'HLT-Apologeten (nach D. Paulsen)',
          answer: `Johannes Cassian, der selbst unter diesen Mönchen lebte, erzählt die Geschichte des Abbas Serapion: Ein frommer, aber ungebildeter Mönch, der sich Gott menschengestaltig vorstellte, wurde von Abbas Paphnutius und einem gelehrten Diakon anhand von Gen 1,26 und Joh 4,24 überzeugt – und weinte: „Man hat mir meinen Gott genommen." Das war nicht ein Urglaube, sondern ein volkstümliches Missverständnis, das von innen korrigiert wurde. Und auch Serapion glaubte nicht, Gott sei einst ein Mensch gewesen.`,
          detail: `Cassian berichtet im zehnten seiner *Unterredungen mit den Vätern* (Collationes), dass der Osterbrief des Patriarchen Theophilus von Alexandrien (399) gegen die Anthropomorphiten unter den Mönchen von Sketis heftigen Widerspruch auslöste. Die Episode ist ehrlich überliefert – die Kirche hat ihre Konflikte nicht versteckt. Sie zeigt aber das Gegenteil eines Beweises für den HLT-Glauben: Die Frage war, wie man sich Gott beim Gebet vorstellt, nicht, ob Gott ein erhöhter Mensch ist. Die koptische Tradition bewahrt die Antwort des Paphnutius: Das Bild Gottes im Menschen ist geistig – Vernunft, Freiheit, Heiligkeit.`,
          voices: [
            {
              person: 'johannes-cassian',
              role: 'als Augenzeuge des ägyptischen Mönchtums',
              text: `Cassian verbrachte Jahre bei den Vätern der sketischen Wüste und gab ihre Lehre an den Westen weiter. In der zehnten Unterredung schildert er Serapions Bekehrung als Lehrstück: Das Gebet reift von Bildern zur reinen Gegenwart Gottes. Wer Gott in menschlicher Gestalt festhält, betet ein Bild an, nicht den lebendigen Gott, der „Geist ist". Cassian schildert die Mönche mit großer Zuneigung, aber auch mit Klarheit über ihren Irrtum.`,
              sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'X,2–3', quote: `Abbas Serapion, von seinem Irrtum überzeugt, klagt: Man hat mir meinen Gott genommen, und ich weiß nicht, wen ich anbeten soll.`, status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'joh-4-24-jst',
              objection: `Joh 4,24 „Gott ist Geist" ist falsch übersetzt. Joseph Smith hat den Vers in seiner inspirierten Übersetzung richtiggestellt: Gott hat denen, die ihn anbeten, seinen Geist **verheißen**. Und Mose sah Gott „von Angesicht zu Angesicht" (Ex 33,11).`,
              objectionBy: 'HLT-Lehre (Joseph-Smith-Übersetzung, Joh 4,26)',
              answer: `Für die Änderung der JST gibt es keine einzige Handschrift – der griechische Text lautet einhellig *pneuma ho theos*, „Geist ist Gott". Und die Schrift sagt dasselbe auch an anderen Stellen: „Gott ist nicht ein Mensch, dass er lüge" (Num 23,19), „Ich bin Gott und nicht ein Mensch" (Hos 11,9), Gott ist „der unsichtbare" (Kol 1,15; 1 Tim 1,17). „Von Angesicht zu Angesicht" in Ex 33,11 beschreibt die Vertrautheit – wenige Verse später sagt Gott zu Mose: „Mein Angesicht kannst du nicht sehen" (33,20).`,
              detail: `Hier zeigt sich ein methodisches Muster: Wo die Bibel der späteren HLT-Lehre widerspricht, wird entweder eine Übersetzungsfehlerthese oder eine Inspirationsänderung angeführt – ohne Handschriftenbeleg. Jesus selbst unterscheidet klar: „Ein Geist hat nicht Fleisch und Bein, wie ihr seht, dass ich habe" (Lk 24,39) – er sagt das von seinem **menschlichen** Auferstehungsleib, nicht vom Vater. Dass der Sohn einen verherrlichten Leib hat, glauben wir auch; dass der Vater einen hat, lehrt die Schrift nirgends.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '4,24', quote: `Gott ist Geist, und die ihn anbeten, die müssen ihn im Geist und in der Wahrheit anbeten.`, original: `πνεῦμα ὁ θεός`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Hosea', ref: '11,9', quote: `Denn ich bin Gott und nicht ein Mensch und bin der Heilige unter dir.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: '2. Mose', ref: '33,20', quote: `Mein Angesicht kannst du nicht sehen; denn kein Mensch wird leben, der mich sieht.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Wenn eine „inspirierte Übersetzung" ohne jede Handschrift den Text ändern darf – wie könnte man dann eine Lehre überhaupt noch an der Bibel prüfen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Kirche vollständig abfiel – hat Jesus dann sein Versprechen aus Mt 16,18 und 28,20 gebrochen?`,
    `Welche christliche Gemeinde der ersten vier Jahrhunderte lehrte, dass Gott einen Körper aus Fleisch und Knochen hat?`,
    `Warum brauchte die Wiederherstellung ein neues Priestertum, wenn Hebr 7,24 sagt, Christi Priestertum sei unübertragbar?`,
    `Wie erklärst du, dass die koptische Kirche ihre Bischöfe lückenlos bis Markus aufzählen kann?`,
  ],
  avoid: [
    `Die HLT-Kirche als „Sekte voller Lügner" bezeichnen – viele Mitglieder sind aufrichtig und vorbildlich in Familie und Nächstenliebe.`,
    `Behaupten, die frühe Kirche habe keinerlei Irrlehren und Konflikte gekannt – sie hatte viele; entscheidend ist die Kontinuität.`,
    `Mit Gerüchten über Joseph Smiths Privatleben anfangen – bleibe bei Lehre und Geschichte.`,
  ],
  concessions: [
    `Das Neue Testament sagt tatsächlich Irrlehren und Abfall Einzelner voraus.`,
    `Die Kirche gebrauchte philosophische Begriffe, die nicht wörtlich in der Bibel stehen.`,
    `Die HLT-Kirche hat Schwierigkeiten ihrer Geschichte (z. B. die verschiedenen Visionsberichte) in offiziellen Essays offen angesprochen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig L. Blomberg / Stephen E. Robinson', work: 'How Wide the Divide?', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Emergence of the Catholic Tradition', year: '1971', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch III', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Walter Martin', work: 'The Maze of Mormonism', year: '1962 (erw. 1978)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mormonen', 'Großer Abfall', 'Apostolische Sukzession', 'Priestertum', 'Kirchengeschichte'],
  related: [
    'zeugen-jehovas/wachtturm-gottes-kanal',
    'sola-scriptura/kirche-war-verdorben',
    'antitrinitarier/trinitaet-in-nizaa-erfunden',
    'mormonen/buch-mormon-historisch',
  ],
};

export default claim;
