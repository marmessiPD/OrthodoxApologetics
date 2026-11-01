import type { Topic } from '../../../schema.ts';
import nurDieBibel from './nur-die-bibel.ts';
import traditionMenschenlehre from './tradition-menschenlehre.ts';
import deuterokanonenKeineBibel from './deuterokanonen-keine-bibel.ts';
import jederLegtSelbstAus from './jeder-legt-selbst-aus.ts';
import kircheWarVerdorben from './kirche-war-verdorben.ts';

const topic: Topic = {
  id: 'sola-scriptura',
  category: 'konfessionen',
  group: 'Protestantismus',
  order: 1,
  title: `Schrift und Tradition`,
  subtitle: `Sola Scriptura, Kanon, Auslegung und die Frage nach der wahren Kirche`,
  icon: 'book-marked',
  overview: `Fast jedes Gespräch zwischen Kopten und Protestanten landet früher oder später bei der Frage der **Autorität**: „Wo steht das in der Bibel?" Hinter dieser Frage steht das reformatorische Prinzip *Sola Scriptura* – die Schrift allein ist die einzige unfehlbare Norm des Glaubens. Wer diese Frage nicht durchschaut, wird bei jedem Einzelthema (Eucharistie, Taufe, Beichte, Heilige, Fasten) in die Defensive gedrängt. Wer sie durchschaut, kann jedes Einzelthema in Ruhe biblisch und historisch begründen.

Die stärksten protestantischen Gesprächspartner – James White, R. C. Sproul, Keith Mathison, Gavin Ortlund – vertreten kein naives „Ich und meine Bibel", sondern eine durchdachte Position: Die Schrift ist die oberste Norm (*norma normans*), Väter und Konzilien sind wertvoll, aber fehlbar und untergeordnet (*norma normata*). Ortlund kennt die Väter gut und zitiert sie geschickt; White ist ein erfahrener Debattierer, der seine Gegner zu präzisen Definitionen zwingt.

Die orthodoxe Antwort ist nicht „Tradition statt Schrift", sondern **Schrift in der Tradition**: Die Kirche existierte vor dem geschriebenen NT; sie hat die Bücher geschrieben, bewahrt, im Gottesdienst gelesen und den Kanon erkannt – vollständig zuerst der koptische Papst Athanasius im Jahr 367. Derselbe Geist, der die Schrift eingab, führt die Kirche in die Wahrheit. Darum liest die koptische Kirche die Bibel mit dem Glaubensbekenntnis, der Liturgie und den Vätern.

Dieser Themenblock behandelt die fünf typischen Einwände: Sola Scriptura selbst, den Vorwurf der „Menschensatzung" (Mk 7), die deuterokanonischen Bücher, das Recht der persönlichen Auslegung und die These, die Kirche sei bis zur Reformation verdorben gewesen.`,
  strategy: `**1. Zuerst Gemeinsamkeit, dann Differenz.** Beginne damit, dass du die Schrift als inspiriertes Wort Gottes liebst und ehrst – das entwaffnet. Die Frage ist nicht, *ob* die Bibel Autorität hat, sondern *wie* sie richtig gelesen wird.

**2. Definitionen klären.** Frage: „Was genau meinst du mit Sola Scriptura? Die Schrift als einzige unfehlbare Norm – oder als einzige Quelle überhaupt?" Seriöse Reformierte meinen das Erste. Greife nicht die schwächste Form („Solo Scriptura") an, sondern die stärkste.

**3. Die drei Schlüsselfragen** (in dieser Reihenfolge):
- „Wo lehrt die Bibel, dass allein die Bibel unfehlbare Norm ist?" (2 Thess 2,15; 1 Tim 3,15 entgegenhalten)
- „Woher weißt du, welche 27 Bücher ins NT gehören?" (Kanonfrage – Athanasius 367)
- „Wenn zwei aufrichtige Bibelleser in einer Heilsfrage uneins sind – wer entscheidet?" (Marburg 1529)

**4. Von der Theorie zur Geschichte.** Lade dein Gegenüber ein, die frühesten Christen zu lesen: Didache, Clemens, Ignatius, Justin, Irenäus. Dort findet man Bischöfe, Eucharistie als Leib Christi, Taufe zur Wiedergeburt, Fasten am Mittwoch und Freitag – vor Konstantin.

**5. Das koptische Argument.** Die koptische Kirche stand nie unter dem Papst und kannte weder Ablass noch Fegefeuer – und hat trotzdem dieselben Sakramente. Das entkräftet den Einwand, das alles seien „römische Verderbnisse".

**Fallen:**
- Gib ehrlich zu, was stimmt: Athanasius zählte einige Deuterokanonen zu den „lesenswerten" Büchern; manche Väter betonen die Genügsamkeit der Schrift sehr stark; im spätmittelalterlichen Westen gab es echte Missstände.
- Benutze keine unsicheren Zahlen („40.000 Konfessionen") ohne Erklärung der Zählweise.
- Behaupte nie eine geheime mündliche Zusatzoffenbarung – die apostolische Überlieferung ist öffentlich.
- Bleib geschwisterlich: Viele Protestanten lieben Christus und die Schrift aufrichtig. Du willst gewinnen – den Bruder, nicht die Debatte.`,
  keyOpponents: [
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries; Debattierer zu Sola Scriptura', work: 'Scripture Alone (2004); The Roman Catholic Controversy (1996)' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Ligonier Ministries (1939–2017)', work: 'Scripture Alone (2005); Knowing Scripture (1977)' },
    { name: 'Keith A. Mathison', role: 'Reformierter Theologe', work: 'The Shape of Sola Scriptura (2001)' },
    { name: 'Gavin Ortlund', role: 'Baptistischer Theologe, YouTube „Truth Unites", Kritiker der Orthodoxie', work: 'What It Means to Be Protestant (2024)' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe, Phoenix Seminary', work: 'Systematic Theology (1994; 2. Aufl. 2020)' },
    { name: 'Martin Luther', role: 'Reformator (1483–1546)', work: 'Rede in Worms (1521); Vorreden zur Bibel (1522/1534)' },
  ],
  claims: [nurDieBibel, traditionMenschenlehre, deuterokanonenKeineBibel, jederLegtSelbstAus, kircheWarVerdorben],
  newPeople: [
    {
      id: 'ignatius-antiochien',
      name: 'Hl. Ignatius von Antiochien',
      years: 'gest. ca. 110',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Antiochien, Märtyrer',
      fields: ['Eucharistie', 'Kirchenamt', 'Einheit der Kirche', 'Christologie'],
      bio: 'Bischof von Antiochien in Syrien, wurde unter Kaiser Trajan nach Rom gebracht und dort den wilden Tieren vorgeworfen. Auf dem Weg schrieb er sieben Briefe an Gemeinden in Kleinasien, an die Römer und an Polykarp – frühe Zeugnisse für das dreigliedrige Amt (Bischof, Presbyter, Diakone) und für den Glauben an die Eucharistie als Fleisch Christi. Er nannte sich selbst „Theophoros" (Gottesträger); Ost und West verehren ihn als Heiligen.',
      keyWorks: ['Brief an die Epheser', 'Brief an die Smyrnäer', 'Brief an die Trallianer', 'Brief an die Philadelphier', 'Brief an die Römer'],
      caveat: 'Die Echtheit der sieben Briefe (mittlere Rezension) ist in der Forschung weitgehend anerkannt; die Datierung schwankt meist zwischen 105 und 115, einzelne Forscher setzen sie später an.',
    },
    {
      id: 'polykarp',
      name: 'Hl. Polykarp von Smyrna',
      years: 'ca. 69–155/156',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Smyrna, Märtyrer',
      fields: ['Apostolische Überlieferung', 'Märtyrerverehrung'],
      bio: 'Nach Irenäus Schüler des Apostels Johannes und von Aposteln als Bischof von Smyrna eingesetzt. Sein Brief an die Philipper und der Bericht über sein Martyrium (Martyrium Polycarpi) gehören zu den ältesten christlichen Schriften nach dem NT; der Märtyrerbericht bezeugt die frühe Verehrung der Märtyrer und ihrer Gebeine.',
      keyWorks: ['Brief an die Philipper', 'Martyrium des Polykarp (Bericht der Gemeinde von Smyrna)'],
      caveat: 'Das Todesjahr ist umstritten (meist 155/156, teils 167 angesetzt).',
    },
    {
      id: 'clemens-rom',
      name: 'Hl. Clemens von Rom',
      years: 'gest. ca. 100',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Rom, Apostolischer Vater',
      fields: ['Kirchenamt', 'Apostolische Sukzession', 'Liturgie'],
      bio: 'Nach Irenäus dritter Nachfolger der Apostel in Rom, der die Apostel noch gekannt hatte. Der ihm zugeschriebene 1. Clemensbrief an die Gemeinde in Korinth (meist um 96 datiert) ist eines der ältesten christlichen Schriftstücke außerhalb des NT und spricht ausdrücklich von der Einsetzung der Amtsträger durch die Apostel und ihrer geordneten Nachfolge.',
      keyWorks: ['1. Clemensbrief'],
      caveat: 'Der Brief nennt keinen Verfasser; die Zuschreibung an Clemens ist alte Überlieferung (Dionysius von Korinth, Irenäus). Die Ämterbezeichnungen sind noch nicht im späteren Sinn scharf abgegrenzt.',
    },
    {
      id: 'cyprian',
      name: 'Hl. Cyprian von Karthago',
      years: 'ca. 200/210–258',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Karthago, Märtyrer',
      fields: ['Ekklesiologie', 'Buße', 'Taufe', 'Eucharistie'],
      bio: 'Gebildeter Rhetor, der sich um 246 taufen ließ und bald Bischof von Karthago wurde. Er leitete die Kirche durch die Verfolgungen unter Decius und Valerian und starb 258 als Märtyrer. Seine Schrift über die Einheit der Kirche und seine Briefe sind Hauptquellen für Taufe, Buße und Eucharistie im 3. Jahrhundert.',
      keyWorks: ['Über die Einheit der katholischen Kirche (De unitate)', 'Über die Gefallenen (De lapsis)', 'Briefe'],
      caveat: 'In der Frage der Ketzertaufe vertrat er eine strenge Position, die sich in der Gesamtkirche nicht durchsetzte.',
    },
    {
      id: 'kyrill-jerusalem',
      name: 'Hl. Kyrill von Jerusalem',
      years: 'ca. 313–386/387',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Bischof von Jerusalem',
      fields: ['Katechese', 'Sakramente', 'Eucharistie', 'Kanon'],
      bio: 'Hielt um 350 in der Grabeskirche seine berühmten Katechesen für Taufbewerber. Die fünf Mystagogischen Katechesen erklären den Neugetauften Taufe, Myronsalbung und Eucharistie. Teilnehmer des Konzils von Konstantinopel 381.',
      keyWorks: ['Katechesen (Catecheses ad illuminandos)', 'Mystagogische Katechesen'],
      caveat: 'Die Verfasserschaft der Mystagogischen Katechesen ist umstritten (Kyrill oder sein Nachfolger Johannes von Jerusalem); sie spiegeln in jedem Fall die Jerusalemer Praxis des späten 4. Jahrhunderts.',
    },
    {
      id: 'vinzenz-lerin',
      name: 'Hl. Vinzenz von Lérins',
      years: 'gest. vor 450',
      era: 'patristisch',
      tradition: 'ungeteilt',
      title: 'Mönch im Kloster Lérins (Südgallien)',
      fields: ['Tradition', 'Schriftauslegung', 'Dogmenentwicklung'],
      bio: 'Verfasste 434 das „Commonitorium", das fragt, wie man inmitten vieler Schriftauslegungen den wahren Glauben erkennt. Seine Antwort: die Schrift im Licht dessen auslegen, was „überall, immer und von allen" geglaubt wurde, und echten Fortschritt von Veränderung unterscheiden.',
      keyWorks: ['Commonitorium (434)'],
      caveat: 'Westlicher Mönch; manche Forscher sehen im Commonitorium eine versteckte Kritik an Augustins Gnadenlehre.',
    },
    {
      id: 'josiah-trenham',
      name: 'Erzpriester Josiah Trenham',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Orthodoxer Priester (Antiochenische Erzdiözese, USA), Patristiker',
      fields: ['Reformation', 'Protestantismus', 'Patristik'],
      bio: 'Promovierter Patristiker und Gemeindepfarrer in Kalifornien. Sein Buch „Rock and Sand" vergleicht die Lehren Luthers, Zwinglis, Calvins und der Täufer systematisch mit der Lehre der Väter.',
      keyWorks: ['Rock and Sand: An Orthodox Appraisal of the Protestant Reformers and Their Teachings (2015)'],
      caveat: 'Östlich-orthodox (chalcedonensisch); in christologischen Formulierungen nicht in allem deckungsgleich mit der koptischen Terminologie.',
    },
    {
      id: 'john-whiteford',
      name: 'Erzpriester John Whiteford',
      years: 'zeitgenössisch',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Priester der Russischen Orthodoxen Kirche im Ausland (Texas)',
      fields: ['Sola Scriptura', 'Protestantismus'],
      bio: 'Früherer Protestant, der zur Orthodoxie fand. Seine kurze Schrift „Sola Scriptura" gehört zu den meistgelesenen orthodoxen Analysen der reformatorischen Schriftlehre.',
      keyWorks: ['Sola Scriptura: An Orthodox Analysis of the Cornerstone of Reformation Theology (1996)'],
      caveat: 'Östlich-orthodox (chalcedonensisch); in christologischen Formulierungen nicht in allem deckungsgleich mit der koptischen Terminologie.',
    },
    {
      id: 'florovsky',
      name: 'Georges Florovsky',
      years: '1893–1979',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Priester und Patristiker (Paris, Harvard, Princeton)',
      fields: ['Tradition', 'Patristik', 'Ekklesiologie'],
      bio: 'Einer der einflussreichsten orthodoxen Theologen des 20. Jahrhunderts und Wegbereiter der „neopatristischen Synthese". Er betonte, dass die Tradition kein zweiter Offenbarungsstrom neben der Schrift ist, sondern die im Geist der Väter richtig verstandene Schrift.',
      keyWorks: ['Bible, Church, Tradition: An Eastern Orthodox View (1972)', 'Wege der russischen Theologie (1937)'],
      caveat: 'Östlich-orthodox (chalcedonensisch).',
    },
    {
      id: 'kallistos-ware',
      name: 'Metropolit Kallistos Ware',
      years: '1934–2022',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Bischof von Diokleia, Dozent für orthodoxe Studien in Oxford',
      fields: ['Orthodoxe Lehre', 'Tradition', 'Gebet', 'Ikonen'],
      bio: 'Als Anglikaner geboren, trat 1958 zur Orthodoxie über. Sein Buch „The Orthodox Church" (1963, mehrfach überarbeitet) ist die meistgelesene Einführung in die Orthodoxie in westlichen Sprachen; er würdigt darin auch die orientalisch-orthodoxen Kirchen fair.',
      keyWorks: ['The Orthodox Church (1963)', 'The Orthodox Way (1979)'],
      caveat: 'Östlich-orthodox (chalcedonensisch); zählt sieben ökumenische Konzilien, die koptische Kirche drei.',
    },
    {
      id: 'peter-gillquist',
      name: 'Peter E. Gillquist',
      years: '1938–2012',
      era: 'modern',
      tradition: 'orthodox',
      title: 'Früherer Mitarbeiter von Campus Crusade for Christ, später orthodoxer Erzpriester',
      fields: ['Kirchengeschichte', 'Evangelikalismus', 'Konversion'],
      bio: 'Suchte mit einer Gruppe evangelikaler Leiter in den 1970er-Jahren anhand des NT und der frühesten Väterschriften nach der „Kirche des Neuen Testaments". Die Suche führte die Gruppe 1987 mit zahlreichen Gemeindegliedern in die Antiochenisch-Orthodoxe Kirche.',
      keyWorks: ['Becoming Orthodox: A Journey to the Ancient Christian Faith (1989)'],
      caveat: 'Östlich-orthodox (chalcedonensisch).',
    },
    {
      id: 'jnd-kelly',
      name: 'J. N. D. Kelly',
      years: '1909–1997',
      era: 'modern',
      tradition: 'anglikanisch',
      title: 'Patristiker, Principal von St Edmund Hall, Oxford',
      fields: ['Dogmengeschichte', 'Patristik'],
      bio: 'Anglikanischer Kirchenhistoriker, dessen Standardwerk „Early Christian Doctrines" (1958) bis heute an Universitäten verwendet wird. Gerade weil er kein orthodoxer Apologet ist, wiegen seine Befunde zur frühen Eucharistie- und Traditionslehre schwer.',
      keyWorks: ['Early Christian Doctrines (1958; 5. Aufl. 1977)', 'Early Christian Creeds (1950)', 'Jerome (1975)'],
    },
  ],
};

export default topic;
