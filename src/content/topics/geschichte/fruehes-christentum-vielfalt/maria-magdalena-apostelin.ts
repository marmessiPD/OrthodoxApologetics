import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'maria-magdalena-apostelin',
  title: `„Die Kirche hat Maria Magdalena und die Frauen aus der Geschichte getilgt."`,
  proponents: [
    { name: 'Dan Brown', role: 'Romanautor', work: 'The Da Vinci Code (2003)' },
    { name: 'Karen L. King', role: 'Religionshistorikerin, Harvard', work: 'The Gospel of Mary of Magdala. Jesus and the First Woman Apostle (2003)' },
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton', work: 'The Gnostic Gospels (1979)' },
    { name: 'Jane Schaberg', role: 'Neutestamentlerin (†2012)', work: 'The Resurrection of Mary Magdalene (2002)' },
  ],
  steelman: `Maria Magdalena war nach allen vier Evangelien Zeugin der Kreuzigung, des Begräbnisses und die erste Zeugin der Auferstehung – nach Johannes sandte Jesus sie zu den Jüngern. Das Evangelium der Maria zeigt sie als Lieblingsjüngerin, der der Erlöser Geheimes offenbarte und die Petrus eifersüchtig angriff; das Philippusevangelium nennt sie die „Gefährtin" Jesu, die er küsste. Doch die männliche Kirchenhierarchie hat diese Erinnerung systematisch verdrängt: Papst Gregor der Große erklärte sie 591 zur reuigen Prostituierten, und dieses Bild prägte die westliche Kunst und Frömmigkeit fast 1400 Jahre lang. Die Apostelin Junia wurde in Übersetzungen zum Mann „Junias" gemacht, Frauen wurde das Lehren verboten, gnostische Evangelien mit starken Frauengestalten wurden unterdrückt. Was als „Orthodoxie" siegte, war auch ein Sieg der Männer über die Frauen der Jesusbewegung.`,
  biblical: {
    summary: `Die kanonischen Evangelien haben die Frauen gerade nicht getilgt – sie stellen sie an entscheidende Stellen. Frauen begleiteten und unterstützten Jesus (Lk 8,1–3), standen unter dem Kreuz, als die meisten Jünger geflohen waren (Mk 15,40–41; Joh 19,25), und wurden die ersten Zeuginnen der Auferstehung (Mk 16,1–8; Mt 28,1–10; Lk 24,1–10). Johannes erzählt, wie der Auferstandene Maria Magdalena beim Namen ruft und sie zu den Jüngern sendet (Joh 20,11–18). Das ist umso bemerkenswerter, als das Zeugnis von Frauen in der damaligen Welt wenig galt – kein Erfinder hätte Frauen zu Hauptzeuginnen gemacht. Paulus grüßt Phöbe, die Diakonin der Gemeinde in Kenchreä (Röm 16,1), Priska als Mitarbeiterin (Röm 16,3) und Junia, „angesehen unter den Aposteln" (Röm 16,7).`,
    detail: `**Maria Magdalena im Neuen Testament:** Von ihr waren sieben Dämonen ausgefahren (Lk 8,2; Mk 16,9). Sie wird nirgends als Sünderin oder Prostituierte bezeichnet. Die namenlose Sünderin, die Jesus die Füße salbt (Lk 7,36–50), und Maria von Betanien, die Schwester des Lazarus (Joh 12,1–8), sind andere Personen.

**Frauen als Zeugen:** Josephus (Ant. 4,219) berichtet, nach jüdischem Brauch sei das Zeugnis von Frauen vor Gericht nicht zugelassen worden. Der heidnische Kritiker Kelsos verspottete im 2. Jahrhundert, der Osterglaube beruhe auf einer „halb wahnsinnigen Frau" (Origenes, Contra Celsum II,55).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,17–18', quote: `Gehe aber hin zu meinen Brüdern und sage ihnen: Ich fahre auf zu meinem Vater und zu eurem Vater, zu meinem Gott und zu eurem Gott. Maria Magdalena kommt und verkündigt den Jüngern: Ich habe den HERRN gesehen, und solches hat er zu mir gesagt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '8,2', quote: `… dazu etliche Weiber, die er gesund hatte gemacht von den bösen Geistern und Krankheiten, nämlich Maria, die da Magdalena heißt, von welcher waren sieben Teufel ausgefahren,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '16,1.7', quote: `Phöbe, Dienerin (diakonos) der Gemeinde zu Kenchreä; Andronikus und Junia, meine Gefreundeten und Mitgefangenen, welche sind berühmte Apostel.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Ostkirchen – und mit ihnen die koptische Kirche – haben Maria Magdalena nie mit der Sünderin von Lk 7 gleichgesetzt. Sie ehren sie als Myrrhenträgerin und erste Zeugin der Auferstehung; die byzantinische Tradition nennt sie „apostelgleich". Schon Hippolyt von Rom (frühes 3. Jh.) deutet die Frauen am Grab als Gesandte Christi an die Apostel – daraus erwuchs der Titel „Apostelin der Apostel". Die Gleichsetzung mit der Prostituierten geht auf eine Predigt Papst Gregors I. (591) zurück und prägte nur den lateinischen Westen; die römisch-katholische Kirche hat sie 1969 liturgisch aufgegeben und 2016 Marias Gedenktag zum Fest mit dem Titel „Apostolorum apostola" erhoben. Die koptische Kirche ehrt zahllose Frauen: an erster Stelle die Theotokos, dann Märtyrerinnen wie die hl. Dimiana und Mönchsmütter wie die hl. Marina und Euphrosyne.`,
    sources: [
      { kind: 'kirchenvater', author: 'Hippolyt von Rom', work: 'Kommentar zum Hohenlied', ref: '24–25', year: 'frühes 3. Jh.', quote: `Die Frauen am Grab seien von Christus selbst zu den Aposteln gesandt worden; Christus sei den Aposteln erschienen, damit sie den Frauen glaubten, und so seien die Frauen Apostel Christi geworden und hätten den Ungehorsam Evas durch Gehorsam aufgehoben.`, status: 'paraphrase', note: 'Nur in georgischer, armenischer und slawischer Überlieferung erhalten; „Apostel" hier im Sinn von „Gesandte".' },
      { kind: 'sonstiges', author: 'Papst Gregor I.', work: 'Homiliae in Evangelia', ref: '33,1', year: '591', quote: `Diese aber, die Lukas eine Sünderin, Johannes Maria nennt, glauben wir, ist jene Maria, aus der nach Markus sieben Dämonen ausgetrieben wurden.`, original: `Hanc vero quam Lucas peccatricem mulierem, Ioannes Mariam nominat, illam esse Mariam credimus de qua Marcus septem daemonia eiecta fuisse testatur.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Grundlage der westlichen Gleichsetzung; von den Ostkirchen nie übernommen.' },
    ],
  },
  opposingView: {
    summary: `Die Forschung ist sich einig, dass Maria Magdalena eine historisch bedeutende Jüngerin und erste Osterzeugin war und dass das Bild der Prostituierten eine westliche Fehldeutung ist. Uneinig ist sie über die gnostischen Texte: Das Evangelium der Maria (2. Jh., erhalten in einer koptischen Handschrift des 5. Jh. im Berliner Codex 8502 und in griechischen Fragmenten des 3. Jh. aus Oxyrhynchus und dem Papyrus Rylands 463) zeigt einen Konflikt um Marias Autorität. Karen King liest es als Zeugnis einer frühen Frauenführung; andere (z. B. Christopher Tuckett) sehen in ihm einen gnostischen Text des 2. Jahrhunderts, der Debatten seiner Zeit spiegelt, nicht das Leben Jesu. Dass Jesus mit Maria verheiratet war, vertritt kein ernsthafter Historiker – dafür gibt es keine Quelle.`,
    detail: `**Gnostische Texte im Überblick:**
- **Evangelium der Maria:** Maria tröstet die Jünger, berichtet eine Offenbarung über den Aufstieg der Seele; Andreas und Petrus zweifeln, Levi verteidigt sie. Theologie: Seelenaufstieg durch Erkenntnis, nicht Auferstehung des Leibes.
- **Philippusevangelium** (3. Jh., Nag Hammadi): nennt Maria die *koinōnos* (Gefährtin) des Erlösers; die berühmte Stelle über den Kuss ist lückenhaft – ob dort „Mund" stand, ist eine Ergänzung.
- **Thomasevangelium, Logion 114:** Petrus will Maria fortschicken, „denn Frauen sind des Lebens nicht würdig"; Jesus antwortet, er werde sie „männlich machen", damit sie ein lebendiger Geist werde. Ein frauenfreundliches Programm ist das kaum.`,
    sources: [
      { kind: 'gegner', author: 'Karen L. King', work: 'The Gospel of Mary of Magdala. Jesus and the First Woman Apostle', year: '2003', quote: `Das Evangelium der Maria bezeuge, dass Frauen in der frühen Kirche Führungsrollen beanspruchten und dass diese umstritten waren.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Christopher Tuckett', work: 'The Gospel of Mary (Oxford Early Christian Gospel Texts)', year: '2007', quote: `Das Evangelium der Maria sei ein Text des 2. Jahrhunderts, der eher dessen Debatten als die Zeit Jesu widerspiegle.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Thomasevangelium', ref: 'Logion 114', year: '2. Jh. (koptisch in Nag Hammadi II)', quote: `Simon Petrus sagte: Maria soll von uns weggehen, denn die Frauen sind des Lebens nicht würdig. Jesus sagte: Ich werde sie führen, um sie männlich zu machen …`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55.59', year: 'ca. 248', quote: `Kelsos spottet, der Auferstehungsglaube beruhe auf dem Zeugnis einer halb wahnsinnigen Frau; Origenes widerspricht.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das Gegenteil ist wahr: Die Evangelien machen Maria Magdalena zur ersten Zeugin der Auferstehung – in einer Zeit, in der das Zeugnis von Frauen wenig galt. Die Kirchenväter nannten die Frauen am Grab Gesandte an die Apostel; daraus wurde der Titel „Apostelin der Apostel". Ja, im Westen hat Papst Gregor 591 sie fälschlich mit der Sünderin gleichgesetzt – aber die Ostkirchen, auch die koptische, haben das nie getan. Und die gnostischen Texte sind 100 bis 200 Jahre jünger; das Thomasevangelium lässt Jesus sogar sagen, er werde Maria „männlich machen".`,
  keyPoints: [
    `**Erste Osterzeugin:** Alle vier Evangelien nennen Maria Magdalena am Grab; nach Joh 20 sendet Jesus sie zu den Jüngern.`,
    `**Peinlichkeitskriterium:** Frauenzeugnis galt wenig (Josephus, Ant. 4,219; Kelsos' Spott) – die Evangelisten hätten es nie erfunden.`,
    `**Ehrlich zur Westkirche:** Gregor I. setzte sie 591 mit der Sünderin gleich; Rom korrigierte das 1969 und 2016.`,
    `**Die Ostkirchen nie:** Myrrhenträgerin, „apostelgleich"; schon Hippolyt nennt die Frauen Gesandte an die Apostel.`,
    `**Gnostische Texte sind jünger und nicht feministisch:** Evangelium der Maria (2. Jh.), Philippusevangelium (3. Jh.), Thomas 114 („männlich machen").`,
    `**Frauen im NT:** Phöbe (Diakonin), Priska, Junia „unter den Aposteln"; Johannes Chrysostomus lobte Junia ausdrücklich.`,
  ],
  voices: [
    {
      person: 'hippolyt-rom',
      role: 'als früher Ausleger der Ostergeschichte',
      text: `In seinem Kommentar zum Hohenlied liest Hippolyt die Braut, die den Geliebten sucht, als Bild der Frauen am Ostermorgen. Er betont, dass Christus selbst den Frauen den Auftrag gab, den Aposteln die Auferstehung zu verkünden, und dass er danach den Aposteln erschien, damit sie den Frauen glaubten. So seien die Frauen zu Gesandten (Aposteln) Christi geworden und hätten durch ihren Gehorsam den Ungehorsam Evas wiedergutgemacht. Das ist ein Kirchenvater des frühen 3. Jahrhunderts – lange vor jedem modernen Feminismus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hippolyt von Rom', work: 'Kommentar zum Hohenlied', ref: '24–25', year: 'frühes 3. Jh.', quote: `Die Frauen als Gesandte Christi an die Apostel; Eva-Maria-Typologie.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler zu den Frauen in den Evangelien',
      text: `Bauckham hat in „Gospel Women" gezeigt, dass die Evangelien die Namen der Frauen am Kreuz und am Grab sorgfältig und mit Unterschieden überliefern – ein Hinweis darauf, dass diese Frauen als bekannte Augenzeuginnen hinter den Berichten standen. Er argumentiert, dass Junia in Röm 16,7 eine Frau war, die unter den Aposteln hoch angesehen war, und dass die spätere männliche Lesart „Junias" keinen Rückhalt in antiken Namensbelegen hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Gospel Women. Studies of the Named Women in the Gospels', year: '2002', quote: `Die Frauen am Grab als namentlich überlieferte Augenzeuginnen; Junia als Apostelin.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger und Ausleger des Römerbriefs',
      text: `Johannes Chrysostomus, einer der großen griechischen Väter, kommentiert Röm 16,7 mit Staunen: Es sei schon etwas Großes, Apostel zu sein, aber „angesehen unter den Aposteln" – wie groß müsse die Weisheit dieser Frau gewesen sein, dass sie des Apostelnamens für würdig erachtet wurde. Ein Kirchenvater des 4. Jahrhunderts hat Junia also gerade nicht getilgt, sondern gefeiert.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Römerbrief', ref: '31,2', year: 'ca. 390', quote: `Wie groß muss die Weisheit dieser Frau gewesen sein, dass sie sogar des Namens eines Apostels für würdig gehalten wurde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Der heidnische Philosoph Kelsos verspottete im 2. Jahrhundert, der christliche Osterglaube stütze sich auf eine hysterische Frau. Origenes nimmt den Spott ernst und widerlegt ihn: Die Erscheinungen seien nicht nur Frauen zuteilgeworden, und das Zeugnis der Frauen sei nicht Ausdruck von Wahn. Der Wortwechsel zeigt: Schon die Gegner wussten, dass die Christen Frauen als erste Zeugen nannten – und die Christen hielten daran fest, obwohl es sie angreifbar machte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II,55.59–60', year: 'ca. 248', quote: `Antwort auf Kelsos' Spott über das Zeugnis der Frau am Grab.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'gregor-prostituierte',
      objection: `Die Kirche hat Maria Magdalena zur Hure gemacht! Papst Gregor erklärte sie 591 zur reuigen Prostituierten.`,
      objectionBy: 'Dan Brown',
      answer: `Das stimmt für den Westen: Gregor setzte sie in einer Predigt mit der namenlosen Sünderin aus Lk 7 gleich, und das prägte die westliche Kunst. Aber die Ostkirchen – auch die koptische – haben das nie übernommen; sie ehren Maria Magdalena als Myrrhenträgerin und erste Zeugin der Auferstehung. Und Rom selbst hat die Gleichsetzung 1969 aufgegeben und sie 2016 als „Apostelin der Apostel" gefeiert.`,
      followUps: [
        {
          id: 'absichtlich-diffamiert',
          objection: `Das war Absicht: Man wollte eine mächtige Frau diskreditieren, die Petrus' Autorität bedrohte.`,
          objectionBy: 'Jane Schaberg',
          answer: `Für eine solche Absicht gibt es keinen Beleg. Gregors Predigt ist eine – falsche – Harmonisierung mehrerer Frauengestalten der Evangelien, ein im Westen verbreitetes Vorgehen. Er stellt Maria als Vorbild der Buße und der Liebe dar, nicht als Feindin. Ein exegetischer Fehler ist nicht dasselbe wie eine Verschwörung.`,
          followUps: [
            {
              id: 'folgen-jahrhunderte',
              objection: `Egal ob Absicht oder nicht – das Bild hat Frauen jahrhundertelang geschadet, bis zu den irischen Magdalenenheimen.`,
              objectionBy: 'Jane Schaberg',
              answer: `Das gestehe ich ohne Einschränkung zu: Die Magdalenenheime, in denen Frauen ausgebeutet und gedemütigt wurden, sind ein dunkles Kapitel westlicher Kirchengeschichte. Ein falsches Bild kann reale Opfer fordern. Umso wichtiger ist es, zur Schrift zurückzukehren – und dort ist Maria Magdalena die geheilte Jüngerin und Botin der Auferstehung.`,
              followUps: [
                {
                  id: 'ostkirche-auch-keine-priesterinnen',
                  objection: `Und die Ostkirche? Die ehrt Maria vielleicht, aber Priesterinnen gibt es dort auch nicht. Ehre ohne Macht.`,
                  objectionBy: 'Karen King',
                  answer: `Die Frage der Priesterweihe ist eine eigene Debatte, die ich ehrlich führe. Aber sie ist eine andere Frage als die, ob die Kirche Maria Magdalena „getilgt" hat. Die orthodoxe Kirche ehrt Frauen als Heilige, Märtyrerinnen und Lehrerinnen und nennt Maria Magdalena „apostelgleich" – und über allen Heiligen steht für sie eine Frau, die Gottesgebärerin.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evangelium-der-maria',
      objection: `Das Evangelium der Maria zeigt sie als Führerin der Jünger, der Jesus geheime Lehren anvertraute. Petrus war eifersüchtig – genau das wurde unterdrückt.`,
      objectionBy: 'Karen King',
      answer: `Der Text ist wichtig, und ich lese ihn fair: Er zeigt, dass im 2. Jahrhundert um die Autorität Marias und um Offenbarungen gestritten wurde. Aber er stammt aus dem 2. Jahrhundert und vertritt eine gnostische Theologie des Seelenaufstiegs, nicht die Auferstehung des Leibes. Er spiegelt Debatten seiner Zeit, nicht das Leben Jesu.`,
      followUps: [
        {
          id: 'maria-unterdrueckt',
          objection: `Er wurde unterdrückt und vernichtet. Wir haben nur durch Zufall Fragmente.`,
          objectionBy: 'Elaine Pagels',
          answer: `Interessanterweise wurde er gerade in Ägypten abgeschrieben und bewahrt – griechisch im 3. Jahrhundert und koptisch noch im 5. Jahrhundert. Er wurde von christlichen Lesern über Generationen kopiert. Dass er nicht in den Kanon kam, liegt an seinem späteren Alter und seiner Theologie, nicht daran, dass eine Frau darin spricht – auch Evangelien, in denen Petrus im Mittelpunkt steht, wurden abgelehnt.`,
        },
        {
          id: 'thomas-114',
          objection: `Die gnostischen Texte zeigen wenigstens, dass es Gruppen gab, die Frauen mehr Raum gaben als die Großkirche.`,
          objectionBy: 'Elaine Pagels',
          answer: `Das ist nicht so eindeutig: Im Thomasevangelium (Logion 114) will Petrus Maria fortschicken, „denn Frauen sind des Lebens nicht würdig", und Jesus antwortet, er werde sie „männlich machen". In manchen gnostischen Systemen steht das Weibliche für Mangel und Fall. Ein feministisches Programm ist das nicht. Die kanonischen Evangelien dagegen lassen Frauen als Frauen die ersten Zeuginnen sein.`,
        },
      ],
    },
    {
      id: 'philippus-kuss',
      objection: `Im Philippusevangelium heißt Maria die Gefährtin Jesu, und er küsste sie auf den Mund. Sie waren verheiratet!`,
      objectionBy: 'Dan Brown',
      answer: `Die Stelle ist in der Handschrift beschädigt – das Wort „Mund" steht gar nicht da, es ist eine Ergänzung. Der Text stammt aus dem 3. Jahrhundert und gebraucht „Kuss" an anderer Stelle für eine geistliche Weitergabe der Gnade. Und das griechische Lehnwort *koinōnos* heißt „Gefährtin, Teilhaberin", nicht „Ehefrau".`,
      followUps: [
        {
          id: 'rabbi-verheiratet',
          objection: `Jüdische Männer heirateten, Rabbis sowieso. Dass die Evangelien keine Frau nennen, heißt nicht, dass es keine gab.`,
          objectionBy: 'Dan Brown',
          answer: `Das ist ein Argument aus dem Schweigen in die falsche Richtung: Die Evangelien nennen Jesu Mutter, Brüder und Schwestern, die Frauen in seiner Begleitung und deren Ehemänner (Lk 8,3). Paulus erwähnt, dass die Brüder des Herrn und Petrus Ehefrauen mitnahmen (1 Kor 9,5) – eine Frau Jesu hätte er dort kaum verschwiegen. Ehelose Lebensformen gab es im Judentum auch, etwa bei manchen Essenern und bei Johannes dem Täufer.`,
        },
      ],
    },
    {
      id: 'junia-junias',
      objection: `Die Kirche hat die Apostelin Junia in den Mann „Junias" verwandelt. So tilgt man Frauen.`,
      objectionBy: 'Feministische Exegetin',
      answer: `Das ist ein berechtigter Punkt für manche westlichen Übersetzungen der Neuzeit, die „Junias" lasen. Aber in der Alten Kirche verstand man den Namen als Frauennamen: Johannes Chrysostomus lobte die Weisheit dieser Frau, die unter den Aposteln angesehen war. Die Väter haben sie nicht getilgt, sondern gefeiert.`,
      followUps: [
        {
          id: 'paulus-schweigen',
          objection: `Aber Paulus sagt doch: „Die Frauen sollen schweigen in der Gemeinde" (1 Kor 14,34). Das ist die eigentliche Haltung.`,
          objectionBy: 'Feministische Exegetin',
          answer: `Derselbe Brief setzt voraus, dass Frauen im Gottesdienst beten und prophetisch reden (1 Kor 11,5). Die Stelle in Kapitel 14 ist deshalb im Zusammenhang einer konkreten Ordnungsfrage zu lesen, über deren genauen Sinn Ausleger streiten. Paulus nennt Frauen als Mitarbeiterinnen, Diakonin und Apostelin (Röm 16). Ein generelles „Tilgen" lässt sich daraus nicht ableiten.`,
        },
      ],
    },
    {
      id: 'kelsos-hysterisch',
      objection: `Der ganze Auferstehungsglaube beruht auf dem Gerede einer hysterischen Frau, die Dämonen hatte.`,
      objectionBy: 'Kelsos (2. Jh.)',
      answer: `Genau diesen Spott kannte schon Origenes – und er zeigt, wie unbequem das Frauenzeugnis für die frühen Christen war. Hätten sie die Geschichte erfunden, hätten sie Petrus oder Johannes zuerst ans Grab geschickt. Dass sie Frauen nennen, ist ein starkes Indiz für historische Erinnerung. Und die Erscheinungen betrafen nach 1 Kor 15 auch Petrus, die Zwölf, Jakobus und über fünfhundert Brüder.`,
      followUps: [
        {
          id: 'paulus-nennt-frauen-nicht',
          objection: `Paulus nennt in 1 Kor 15 die Frauen gar nicht. Also hat schon die früheste Überlieferung sie getilgt.`,
          objectionBy: 'Jane Schaberg',
          answer: `Die Formel in 1 Kor 15 ist eine offizielle Zeugenliste für die Verkündigung, und in der damaligen Welt galt Frauenzeugnis wenig – deshalb nennt sie die anerkannten männlichen Zeugen. Das zeigt gerade, dass die Evangelien, die die Frauen trotzdem an die erste Stelle setzen, eine unbequeme Erinnerung bewahrt haben. Getilgt haben sie die Frauen also gerade nicht.`,
        },
      ],
    },
    {
      id: 'koptisch-patriarchal',
      objection: `Eure koptische Kirche ist durch und durch patriarchal. Frauen spielen dort keine Rolle.`,
      objectionBy: 'Säkulare Kritikerin',
      answer: `Das trifft das Bild nicht. Die koptische Kirche verehrt die Theotokos über allen Heiligen, feiert Märtyrerinnen wie die hl. Dimiana und Mönchsmütter wie Marina und Euphrosyne; Frauenklöster gehören zu den ältesten der Welt. Frauen tragen Sonntagsschule, Diakonie und Mission. Dass die Priesterweihe Männern vorbehalten ist, ist eine theologische Frage, die man diskutieren kann – „keine Rolle" ist aber falsch.`,
      followUps: [
        {
          id: 'diakoninnen',
          objection: `Es gab doch in der Alten Kirche Diakoninnen. Warum habt ihr sie abgeschafft?`,
          objectionBy: 'Säkulare Kritikerin',
          answer: `Diakoninnen gab es tatsächlich, schon Phöbe wird so genannt (Röm 16,1), und die Alte Kirche kannte einen Dienst geweihter Frauen, etwa bei der Taufe von Frauen. Das Amt trat im Lauf der Jahrhunderte zurück. In der koptischen Kirche gibt es heute wieder geweihte Frauen im diakonischen Dienst, die in Sozialarbeit, Seelsorge und Unterricht wirken. Hier gibt es Entwicklung, nicht Tilgung.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Kirche Frauen tilgen wollte – warum ließ sie in allen vier Evangelien Frauen als erste Osterzeuginnen stehen?`,
    `Hast du Thomas 114 gelesen, wo Jesus Maria „männlich machen" will?`,
    `Welche Ostkirche hat Maria Magdalena je als Prostituierte bezeichnet?`,
    `Aus welchem Jahrhundert stammen das Evangelium der Maria und das Philippusevangelium?`,
  ],
  avoid: [
    `Gregors Fehldeutung leugnen oder verharmlosen.`,
    `Die gnostischen Texte als wertlose Fälschungen abtun – sie sind wichtige Zeugnisse des 2./3. Jahrhunderts.`,
    `Die Frage der Priesterweihe mit dieser historischen Frage vermischen.`,
  ],
  concessions: [
    `Im lateinischen Westen wurde Maria Magdalena seit Gregor I. (591) fälschlich als reuige Prostituierte dargestellt; das hatte schädliche Folgen.`,
    `Manche neuzeitlichen Übersetzungen machten Junia zu einem Mann „Junias".`,
    `Das Diakoninnenamt trat in der Geschichte der Kirche zurück.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Gospel Women', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Christopher Tuckett', work: 'The Gospel of Mary', year: '2007', status: 'paraphrase' },
    { kind: 'gegner', author: 'Karen L. King', work: 'The Gospel of Mary of Magdala', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bart D. Ehrman', work: 'Peter, Paul, and Mary Magdalene', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Maria Magdalena', 'Frauen', 'Evangelium der Maria', 'Gregor I.', 'Junia', 'Da Vinci Code'],
  related: ['gnosis/gnostische-evangelien-wahres-christentum', 'christentum-gesellschaft/keine-priesterinnen', 'auferstehung/halluzinationen', 'fruehes-christentum-vielfalt/viele-christentuemer-bauer'],
};

export default claim;
