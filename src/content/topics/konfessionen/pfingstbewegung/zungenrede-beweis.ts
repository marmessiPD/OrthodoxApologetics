import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'zungenrede-beweis',
  title: `„Zungenrede ist der Beweis der Geistestaufe."`,
  proponents: [
    { name: 'Charles F. Parham', role: 'Gründer der Bethel Bible School in Topeka (1873–1929)', work: 'Lehre von der Zungenrede als „biblischem Beweis" (1901)' },
    { name: 'Assemblies of God', role: 'Größte klassische Pfingstkirche', work: 'Statement of Fundamental Truths, Art. 8 („initial physical evidence")' },
    { name: 'Stanley M. Horton', role: 'Pfingstlicher Theologe (1916–2014)', work: 'What the Bible Says About the Holy Spirit (1976)' },
    { name: 'Charismatische Gemeinden', role: 'Freikirchliche und überkonfessionelle Gruppen', work: 'Praxis des „Gebets um die Geistestaufe"' },
  ],
  steelman: `Lies die Apostelgeschichte: Zu Pfingsten wurden alle mit dem Geist erfüllt „und fingen an zu predigen mit andern Zungen" (Apg 2,4). Im Haus des Kornelius erkannten die Judenchristen, dass die Heiden den Geist empfangen hatten, „denn sie hörten, dass sie mit Zungen redeten" (10,46). In Ephesus kam der Geist auf die Jünger, „und sie redeten mit Zungen und weissagten" (19,6). Selbst in Samarien (Apg 8) muss Simon der Zauberer etwas Sichtbares wahrgenommen haben, sonst hätte er die Gabe nicht kaufen wollen. Das Muster ist klar: Die Taufe im Geist ist eine eigene, oft spätere Erfahrung nach der Bekehrung, und ihr erstes äußeres Zeichen ist die Zungenrede. Paulus selbst sagt: „Ich danke Gott, dass ich mehr mit Zungen rede als ihr alle" (1 Kor 14,18), und er wünscht, „dass ihr alle mit Zungen reden könntet" (14,5). Wer diese Gabe ablehnt, verzichtet auf die Kraft, die die Urgemeinde hatte – kein Wunder, dass traditionelle Kirchen oft kraftlos wirken.`,
  biblical: {
    summary: `Die Apostelgeschichte berichtet tatsächlich mehrmals von Zungenrede beim Empfang des Geistes (Apg 2; 10; 19), aber **nicht immer**: Bei den 3000 Getauften zu Pfingsten (2,41), in Samarien (8,17), bei Paulus (9,17–18) und beim Kämmerer (8,38–39) wird sie nicht erwähnt. Paulus fragt rhetorisch: „Reden sie alle mit Zungen?" (1 Kor 12,30) – im Griechischen mit der Partikel *mē*, die die Antwort „Nein" erwartet. Der Geist teilt die Gaben aus, „wie er will" (12,11). Zu Pfingsten waren die Zungen **verstehbare Fremdsprachen** (Apg 2,6–11). Das Zeichen der Geisterfüllung ist nach Paulus die **Frucht des Geistes** und die **Liebe**, ohne die Zungenrede „ein tönend Erz" ist (1 Kor 13,1; Gal 5,22).`,
    detail: `**1 Kor 12,29–30:** „Sind sie alle Apostel? Sind sie alle Propheten? … Reden sie alle mit Zungen? Können sie alle auslegen?" Jede dieser Fragen beginnt griechisch mit *mē* – eine Konstruktion, die eine verneinende Antwort erwartet. Paulus sagt also ausdrücklich, dass **nicht** alle mit Zungen reden – und zwar gerade zu Christen, die den Geist haben (12,13: „wir sind durch einen Geist alle zu einem Leibe getauft").

**Pfingsten (Apg 2):** Die Menge hörte „ein jeglicher seine Sprache, darin wir geboren sind" (2,8), und eine Liste von Völkern folgt. Das war Xenolalie – das Sprechen echter Fremdsprachen –, ein Zeichen, dass das Evangelium allen Völkern gilt und Babel umgekehrt wird.

**Apostelgeschichte als Erzählung:** Lukas beschreibt Schlüsselmomente der Ausbreitung des Evangeliums: Jerusalem (Juden, Apg 2), Samarien (8), Heiden (10), Johannesjünger (19) – jeweils mit sichtbarer Bestätigung durch Gott. Daraus folgt nicht, dass jede Geisterfüllung so aussehen muss. Gordon Fee, selbst Pfingstler, hat gezeigt, dass historische Erzählungen nicht ohne Weiteres zur verbindlichen Lehre gemacht werden können.

**Taufe und Geist:** Petrus verheißt den Geist mit der Taufe: „Lasse sich ein jeglicher taufen … so werdet ihr empfangen die Gabe des heiligen Geistes" (Apg 2,38). In Samarien kam der Geist durch die **Handauflegung der Apostel** (8,17) – die biblische Wurzel der Myronsalbung.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '12,29–30', quote: `Sind sie alle Apostel? Sind sie alle Propheten? Sind sie alle Lehrer? Sind sie alle Wundertäter? Haben sie alle Gaben, gesund zu machen? Reden sie alle mit Zungen? Können sie alle auslegen?`, translation: 'Luther 1912', status: 'verbatim', original: `μὴ πάντες γλώσσαις λαλοῦσιν;` },
      { kind: 'bibel', work: '1. Korinther', ref: '12,11', quote: `Dies aber alles wirkt derselbe einige Geist und teilt einem jeglichen seines zu, nach dem er will.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,6–8', quote: `… und wurden bestürzt; denn es hörte ein jeglicher, daß sie mit seiner Sprache redeten. … Wie hören wir denn ein jeglicher seine Sprache, darin wir geboren sind?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,38', quote: `Petrus sprach zu ihnen: Tut Buße und lasse sich ein jeglicher taufen auf den Namen Jesu Christi zur Vergebung der Sünden, so werdet ihr empfangen die Gabe des heiligen Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,17', quote: `Da legten sie die Hände auf sie, und sie empfingen den heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '13,1', quote: `Wenn ich mit Menschen- und mit Engelzungen redete und hätte der Liebe nicht, so wäre ich ein tönend Erz oder eine klingende Schelle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '5,22', quote: `Die Frucht aber des Geistes ist Liebe, Freude, Friede, Geduld, Freundlichkeit, Gütigkeit, Glaube, Sanftmut, Keuschheit.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt: Jeder Getaufte empfängt den Heiligen Geist in der **Myronsalbung** unmittelbar nach der Taufe (Apg 8,17; 2 Kor 1,21–22; 1 Joh 2,20.27). Es gibt keine zweite, davon getrennte „Geistestaufe", die erst durch ein bestimmtes Zeichen bewiesen werden müsste. Der Geist wirkt in jedem Christen verschiedene Gaben, wie er will; das Zeichen eines geisterfüllten Lebens ist Heiligkeit, Demut und Liebe. Die Kirche hat die Gaben nie für erloschen erklärt, aber sie warnt mit den Wüstenvätern vor dem Streben nach außergewöhnlichen Erfahrungen, das zu geistlichem Hochmut und Täuschung führen kann.`,
    detail: `**Die Väter zur Zungenrede:** Irenäus bezeugt um 180, dass es in der Kirche Brüder gibt, die prophetische Gaben haben und „durch den Geist in allerlei Sprachen reden" (Adv. Haer. V,6,1). Johannes Chrysostomus dagegen bemerkt zu 1 Kor 12, die ganze Stelle sei dunkel, weil die damaligen Ereignisse zu seiner Zeit nicht mehr vorkämen (Hom. 29 zu 1 Kor). Augustinus sagt, die Zungenrede sei ein Zeichen für jene Zeit gewesen, dass das Evangelium in alle Sprachen gehen werde; nun spreche die Kirche selbst in allen Sprachen der Welt (Tractatus in Epistolam Ioannis 6,10).

**Montanismus als Warnung:** Im 2. Jahrhundert traten in Phrygien Montanus und die Prophetinnen Priscilla und Maximilla auf, die in ekstatischem Zustand redeten und neue Offenbarungen beanspruchten. Die Kirche verwarf die Bewegung; ein Kritiker betonte, ein wahrer Prophet rede nicht in Ekstase (Eusebius, Kirchengeschichte V,16–17).

**Koptische Praxis:** Im Myron wird der Täufling mit 36 Salbungen gesalbt, und der Priester spricht: „Empfange den Heiligen Geist" bzw. betet um die Gabe des Geistes. Damit ist jeder Kopte „geisterfüllt" im biblischen Sinn – und aufgerufen, diese Gabe durch Gebet, Sakramente und Gehorsam zu entfalten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'V,6,1', status: 'paraphrase', quote: `Wir hören viele Brüder in der Kirche, die prophetische Gaben haben und durch den Geist in allerlei Sprachen reden.`, note: 'Ehrlich: Irenäus bezeugt Zungenrede noch im 2. Jahrhundert. Eusebius zitiert die Stelle (KG V,7,6).' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Korintherbrief', ref: 'Hom. 29,1', year: 'um 392', status: 'paraphrase', quote: `Diese ganze Stelle ist sehr dunkel; die Dunkelheit entsteht aus unserer Unkenntnis der Tatsachen, die damals geschahen, jetzt aber nicht mehr vorkommen.` },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Tractatus in Epistolam Ioannis ad Parthos', ref: '6,10', status: 'paraphrase', quote: `Die Zungenrede war ein Zeichen, der Zeit angemessen: Das Evangelium sollte durch alle Sprachen über die ganze Erde gehen. Das ist geschehen und vorübergegangen.` },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'V,16–17', status: 'paraphrase', note: 'Bericht über Montanus und die frühe Kritik an ekstatischer Prophetie (u. a. Miltiades, „Dass ein Prophet nicht in Ekstase reden soll").' },
      { kind: 'bibel', work: '2. Korinther', ref: '1,21–22', quote: `Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt und versiegelt und in unsre Herzen das Pfand, den Geist, gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  quickAnswer: `Wir glauben an das Wirken des Heiligen Geistes – aber die Bibel macht die Zungenrede nicht zum Beweis. Paulus fragt: „Reden sie alle mit Zungen?" (1 Kor 12,30) – und die Antwort lautet im Griechischen eindeutig: Nein. Der Geist gibt Gaben, „wie er will" (12,11). Jeder Getaufte empfängt den Geist (Apg 2,38); das Kennzeichen ist die Frucht des Geistes und die Liebe, ohne die selbst Engelzungen nur „tönendes Erz" sind (1 Kor 13,1).`,
  keyPoints: [
    `**1 Kor 12,30:** „Reden sie alle mit Zungen?" – griechisch mit *mē*, Antwort: Nein. Paulus spricht zu geistgetauften Christen (12,13).`,
    `**Nicht jeder Geistempfang in der Apostelgeschichte erwähnt Zungen:** 2,41; 8,17; 9,17–18; 8,38–39.`,
    `**Pfingsten waren echte Fremdsprachen** (Apg 2,6–11) – ein Zeichen für die Mission zu allen Völkern, nicht ekstatisches Lallen.`,
    `**Erzählung ist nicht automatisch Lehre:** Selbst der pfingstliche Gelehrte Gordon Fee warnt davor, aus der Apostelgeschichte eine verbindliche Zeichenlehre abzuleiten.`,
    `**Der Geist wird in Taufe und Myron geschenkt** (Apg 2,38; 8,17); das Zeichen ist die Frucht (Gal 5,22) und die Liebe (1 Kor 13).`,
    `**Die Kirche kennt die Gefahr** ekstatischer Bewegungen seit dem Montanismus im 2. Jahrhundert.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der die Gaben in Korinth ordnete',
      text: `Paulus schätzt die Zungenrede und übt sie selbst – aber er relativiert sie radikal. In der Gemeinde will er lieber „fünf Worte mit meinem Sinn reden … denn sonst zehntausend Worte mit Zungen" (1 Kor 14,19). Ohne Auslegung soll der Zungenredner schweigen (14,28). Und das ganze Kapitel über die Gaben mündet in das Hohelied der Liebe: Die Liebe hört nimmer auf, während „die Zungen aufhören werden" (13,8). Die Rangordnung ist eindeutig: Liebe, Prophetie zur Erbauung, und erst dann Zungen.`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '14,19', quote: `Aber ich will in der Gemeinde lieber fünf Worte reden mit meinem Sinn, auf daß ich auch andere unterweise, denn sonst zehntausend Worte mit Zungen.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'gordon-fee',
      role: 'als pfingstlicher Neutestamentler',
      text: `Fee, selbst Mitglied der Assemblies of God, stellte die Lehre von der Zungenrede als „erstem Beweis" offen in Frage. Sein hermeneutisches Argument: Lukas erzählt in der Apostelgeschichte, was geschah, aber er will damit nicht in jedem Detail eine Norm für alle Zeiten aufstellen. Ein historischer Präzedenzfall wird erst dann verbindlich, wenn der Autor ihn ausdrücklich so lehren will. Zugleich betonte Fee, dass die Erfahrung des Geistes für Paulus dynamisch und erfahrbar ist – ohne dass ein bestimmtes Zeichen vorgeschrieben wäre.`,
      sources: [{ kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'Gospel and Spirit: Issues in New Testament Hermeneutics', year: '1991', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Ausleger des 1. Korintherbriefs',
      text: `Chrysostomus erklärt, dass Gott den ersten Christen sichtbare Zeichen gab, weil sie noch schwach waren und das Evangelium neu in die Welt trat; der reife Glaube braucht diese Zeichen nicht in derselben Weise. Er warnt die Korinther, die sich der Zungenrede rühmten, und betont, dass die größere Gabe die ist, die den Bruder aufbaut. Für ihn ist das größte Wunder die Umwandlung des Lebens: aus einem Hochmütigen einen Demütigen, aus einem Habgierigen einen Barmherzigen zu machen.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Korintherbrief', ref: 'Hom. 29–35', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Vater Tadros Malaty erklärt in seinen Schriften über die Sakramente, dass der Heilige Geist im Myron als „Siegel der Gabe des Heiligen Geistes" jedem Getauften geschenkt wird. Die Fülle des Geistes zeigt sich im Wachstum in der Heiligkeit, in der Teilnahme an der Eucharistie und im Leben der Buße. Für die koptische Tradition ist der „geisterfüllte" Mensch vor allem der heilige Mensch, nicht der ekstatische.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Schriften über die Sakramente der Kirche', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'apg-muster',
      objection: `„Das Muster der Apostelgeschichte ist eindeutig: Apg 2, 10 und 19 – jedes Mal Zungenrede. Und in Apg 8 muss Simon etwas gesehen haben, sonst hätte er die Gabe nicht kaufen wollen."`,
      objectionBy: 'Klassisch-pfingstlicher Prediger',
      answer: `Drei Stellen mit Zungen stehen mehreren Stellen ohne Zungen gegenüber – bei den 3000 zu Pfingsten, beim Kämmerer, bei Paulus. Was Simon in Samarien sah, sagt Lukas nicht; vielleicht Prophetie, Freude oder Wunder. Wer dort Zungen einträgt, liest seine Lehre in den Text hinein. Und die Fälle mit Zungenrede markieren Wendepunkte der Mission (Juden, Heiden, Johannesjünger), bei denen Gott sichtbar bestätigt, dass auch diese Gruppe dazugehört (Apg 11,17).`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '11,17', quote: `So nun Gott ihnen gleiche Gabe gegeben hat wie auch uns, die da glauben an den HERRN Jesus Christus: wer war ich, daß ich konnte Gott wehren?`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Wo steht in Apg 8, dass die Samariter in Zungen redeten?`, `Haben die 3000 in Apg 2,41 nach ihrer Taufe alle in Zungen geredet? Wo steht das?`],
      followUps: [
        {
          id: 'gaben-zungen-vs-zeichen-zungen',
          objection: `„Du verwechselst zwei Dinge: Die *Gabe* der Zungenrede (1 Kor 12) haben nicht alle – aber das *Zeichen* der Zungenrede bei der Geistestaufe haben alle. Darum widerspricht 1 Kor 12,30 unserer Lehre nicht."`,
          objectionBy: 'Assemblies-of-God-Theologe',
          answer: `Diese Unterscheidung zwischen „Zeichen-Zungen" und „Gaben-Zungen" steht nirgends in der Bibel – sie wurde nachträglich eingeführt, um 1 Kor 12,30 mit der Lehre zu versöhnen. Lukas und Paulus benutzen dasselbe Wort (*glōssais lalein*). Wenn alle Geistgetauften zumindest einmal in Zungen reden müssen, dann wäre Paulus’ Frage „Reden sie alle mit Zungen?" mit „Ja, jedenfalls einmal" zu beantworten – das Gegenteil dessen, was er meint.`,
          followUps: [
            {
              id: 'fee-ist-ausnahme',
              objection: `„Gordon Fee ist eine Ausnahme. Die überwiegende Mehrheit der Pfingstkirchen hält an der Lehre vom ‚ersten Zeichen' fest."`,
              objectionBy: 'Pfingstpastor',
              answer: `Mehrheiten entscheiden keine Exegese. Und auch empirisch deuten Umfragen (etwa des Pew Research Center, „Spirit and Power", 2006) darauf hin, dass ein erheblicher Teil der Pfingstler selbst selten oder nie in Zungen redet – wären sie alle nicht geistgetauft? Die Lehre stammt von Charles Parham (1901), nicht aus der Alten Kirche. Keine Kirche der ersten 1900 Jahre hat sie gelehrt.`,
              questionsBack: [`Welcher Kirchenvater oder welches Konzil lehrte vor 1901, dass die Zungenrede der notwendige Beweis der Geisterfüllung sei?`],
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-wollte-alle',
      objection: `„Paulus sagt doch: ‚Ich wollte, dass ihr alle mit Zungen reden könntet' (1 Kor 14,5). Also ist es Gottes Wille für jeden."`,
      objectionBy: 'Charismatischer Prediger',
      answer: `Lies den ganzen Vers: „… aber viel mehr, dass ihr weissagtet." Paulus sagt mit derselben Formel in 1 Kor 7,7: „Ich wollte aber lieber, alle Menschen wären, wie ich bin" – nämlich unverheiratet. Niemand schließt daraus, Ehelosigkeit sei Pflicht. Es ist ein Wunsch, kein Gebot – und er stellt sofort klar, dass Prophetie zur Erbauung wichtiger ist.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '14,5', quote: `Ich wollte, daß ihr alle mit Zungen reden könntet; aber viel mehr, daß ihr weissagtet.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '1. Korinther', ref: '7,7', quote: `Ich wollte aber lieber, alle Menschen wären, wie ich bin; aber ein jeglicher hat seine eigene Gabe von Gott, einer so, der andere so.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gebetssprache',
          objection: `„Es gibt zwei Arten: Die öffentliche Zungenrede braucht Auslegung, aber die private Gebetssprache ist für jeden – ‚wer mit Zungen redet, der redet nicht den Menschen, sondern Gott' (1 Kor 14,2)."`,
          objectionBy: 'Charismatischer Lehrer',
          answer: `Paulus erwähnt das persönliche Beten in Zungen, ja (14,2.14.28). Aber auch dort betont er: „Ich will beten mit dem Geist und will auch beten mit dem Verstand" (14,15). Und eine Gabe zu haben ist etwas anderes, als sie zum Kriterium der Geisterfüllung zu machen. Die Kirche betet seit jeher mit dem Herzen und dem Verstand – in den Psalmen, der Agpeya, dem Jesusgebet. Das ist nicht weniger geistlich.`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '14,15', quote: `Wie soll es aber denn sein? Ich will beten mit dem Geist und will beten auch im Sinn; ich will Psalmen singen im Geist und will auch Psalmen singen mit dem Sinn.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'eure-kirchen-kraftlos',
      objection: `„Eure traditionellen Kirchen sind kraftlos, weil ihr die Geistestaufe ablehnt. Bei uns geschehen Bekehrungen, Heilungen und Wachstum – an den Früchten sollt ihr sie erkennen!"`,
      objectionBy: 'Pfingstlicher Evangelist',
      answer: `Ich freue mich über jede echte Bekehrung. Aber Wachstum allein ist kein Wahrheitskriterium – sonst müssten wir auch Mormonen oder den Islam für wahr halten. Die Frucht, an der man Christen erkennt, nennt Paulus: Liebe, Freude, Friede, Geduld … (Gal 5,22). Und die koptische Kirche hat eine Frucht, die sich sehen lassen kann: 2000 Jahre Treue unter Verfolgung, Mönchtum, Märtyrer bis in unsere Tage. Das ist die Kraft des Geistes.`,
      followUps: [
        {
          id: 'mythos-tote-orthodoxie',
          objection: `„Aber bei euch sieht man keine Wunder, nur Rituale."`,
          objectionBy: 'Charismatischer Jugendleiter',
          answer: `Die koptische Kirche ist voller Wunderberichte – von den Wüstenvätern über die Lebensgeschichten heiliger Päpste bis zu Heilungen heute, für die in der Krankensalbung (Jak 5,14) gebetet wird. Aber wir stellen Wunder nicht ins Schaufenster. Die Väter lehren, dass das größte Wunder ein verwandeltes Herz ist, und sie warnen davor, Zeichen zu suchen (Mt 12,39). Die „Rituale" sind übrigens Gebete, die der Geist seit Jahrhunderten trägt.`,
          followUps: [
            {
              id: 'gefahr-taeuschung',
              objection: `„Warum seid ihr so misstrauisch gegenüber Erfahrungen? Gott will doch, dass wir ihn erleben."`,
              objectionBy: 'Charismatischer Jugendleiter',
              answer: `Weil auch die Schrift misstrauisch ist: „Prüfet die Geister" (1 Joh 4,1); „der Satan selbst verstellt sich zum Engel des Lichts" (2 Kor 11,14). Die Wüstenväter haben aus langer Erfahrung gelernt, dass das Verlangen nach außergewöhnlichen Erlebnissen den Hochmut nährt und zur Täuschung führen kann. Die sichere Gotteserfahrung geschieht in der Demut, in den Sakramenten und im stillen Gebet – „der Geist der Wahrheit führt in alle Wahrheit" (Joh 16,13), nicht in Ekstase.`,
              sources: [
                { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viel falsche Propheten ausgegangen in die Welt.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mk-16-17-neue-zungen',
      objection: `„Jesus selbst sagt in Mk 16,17: ‚Die Zeichen aber, die da folgen werden denen, die da glauben, sind die: … mit neuen Zungen reden.' Das ist eine Verheißung für alle Gläubigen."`,
      objectionBy: 'Pfingstprediger',
      answer: `In derselben Liste stehen: Schlangen aufheben und Tödliches trinken (Mk 16,18). Niemand macht daraus einen Prüfstein der Geistestaufe. Die Zeichen „folgen den Glaubenden" als Gemeinschaft – sie begleiten die Verkündigung der Kirche (16,20), nicht jeden Einzelnen als Pflichtnachweis. Die Kirche hat solche Zeichen immer erlebt, aber nie verlangt, dass jeder Christ sie vorweist.`,
      detail: `Verzichte hier auf das textkritische Argument, Mk 16,9–20 fehle in den ältesten Handschriften (Sinaiticus, Vaticanus): Die koptische Kirche liest den Abschnitt als kanonisch, und ein Pfingstler wird das Argument als Ausweichen empfinden. Stärker ist der Text selbst: Vers 20 sagt, der Herr „bekräftigte das Wort durch mitfolgende Zeichen" – die Zeichen dienen der Verkündigung, sie sind kein Zertifikat für den einzelnen Gläubigen.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '16,17–20', quote: `Die Zeichen aber, die da folgen werden denen, die da glauben, sind die: In meinem Namen werden sie Teufel austreiben, mit neuen Zungen reden, Schlangen vertreiben, und so sie etwas Tödliches trinken, wird's ihnen nicht schaden … und der Herr wirkte mit ihnen und bekräftigte das Wort durch mitfolgende Zeichen.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      questionsBack: [`Wenn Mk 16,17 jeden Einzelnen zur Zungenrede verpflichtet – gilt dann Vers 18 (Schlangen, Gift) auch für jeden?`],
      followUps: [
        {
          id: 'apg-2-4-alle-redeten',
          objection: `„Apg 2,4: ‚Sie wurden **alle** voll des heiligen Geistes und fingen an zu predigen mit andern Zungen.' Alle – nicht einige."`,
          objectionBy: 'Stanley M. Horton',
          answer: `Zu Pfingsten waren die Zungen verständliche Fremdsprachen: „Wir hören sie mit unsern Zungen die großen Taten Gottes reden" (2,11). Es war ein Zeichen für die Völker – die Umkehrung von Babel – und gehört zum einmaligen Gründungsereignis, wie das Brausen und die Feuerzungen (2,2–3), die auch niemand bei jeder Geistestaufe verlangt. Und die 3000, die am selben Tag getauft wurden und den Geist empfingen (2,38–41), reden nach dem Bericht nicht in Zungen.`,
          voices: [
            {
              person: 'kyrill-jerusalem',
              role: 'als Katechet der Jerusalemer Kirche',
              text: `Kyrill erklärt in seinen Katechesen über den Heiligen Geist, dass die Apostel zu Pfingsten in den wirklichen Sprachen der anwesenden Völker redeten – der Galiläer Petrus und Andreas sprachen Persisch und Medisch. Für ihn ist das Wunder ein Zeichen, dass das Evangelium allen Völkern gilt.`,
              sources: [{ kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '17 (über den Heiligen Geist)', year: 'um 350', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'engelszungen',
              objection: `„Nicht jede Zungenrede ist eine menschliche Sprache. Paulus spricht von ‚Menschen- und Engelszungen' (1 Kor 13,1). Unsere Gebetssprache kann eine himmlische Sprache sein."`,
              objectionBy: 'Charismatischer Lehrer',
              answer: `Paulus spricht dort hypothetisch – „wenn ich … redete" – und kommt zu dem Schluss, dass alles ohne Liebe nur „tönendes Erz" ist. Selbst wenn es Engelszungen gibt, macht das sie nicht zum notwendigen Beweis der Geistestaufe. Sprachwissenschaftler wie William Samarin haben zudem gezeigt, dass heutige Glossolalie in der Regel keine Sprachstruktur hat – das bestreitet nicht, dass sie ein ehrliches Gebet sein kann, aber es ist etwas anderes als das Pfingstwunder der Apostelgeschichte.`,
              sources: [
                { kind: 'fachliteratur', author: 'William J. Samarin', work: 'Tongues of Men and Angels: The Religious Language of Pentecostalism', year: '1972', status: 'paraphrase', note: 'Linguistische Feldstudie; Samarin beschreibt Glossolalie als sprachähnliche, aber nicht sprachliche Lautäußerung.' },
              ],
              followUps: [
                {
                  id: 'linguisten-urteilen-nicht',
                  objection: `„Linguisten können eine geistliche Gabe nicht beurteilen. Das ist Unglaube im Gewand der Wissenschaft."`,
                  objectionBy: 'Pfingstpastor',
                  answer: `Richtig – ob Gott in einem Gebet wirkt, kann kein Linguist messen. Aber wenn behauptet wird, es handle sich um wirkliche Sprachen wie in Apg 2, dann ist das prüfbar. Die frühe Pfingstbewegung erwartete das: Charles Parham und andere glaubten, Missionare würden fremde Sprachen ohne Lernen sprechen; manche reisten mit dieser Erwartung aus und wurden enttäuscht. Daraus wurde später die Lehre von der „Gebetssprache". Das ist kein Spott, sondern ein Grund, die eigenen Kategorien ehrlich zu prüfen.`,
                  detail: `Der Pfingsthistoriker Gary B. McGee hat diese Episode der frühen Bewegung sorgfältig dokumentiert. Paulus gibt das bleibende Kriterium: „Lasset es alles geschehen zur Besserung" (1 Kor 14,26). Wo Zungengebet in Demut und Liebe geschieht, verurteilen wir es nicht – wir bestreiten nur, dass es das Kennzeichen des Geistbesitzes ist.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Gary B. McGee', work: '„Shortcut to Language Preparation? Radical Evangelicals, Missions, and the Gift of Tongues", International Bulletin of Missionary Research 25', year: '2001', status: 'paraphrase', note: 'McGee war selbst Historiker an einer Hochschule der Assemblies of God.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'geist-mit-euch-nicht-auf-euch',
      objection: `„Ihr Kopten seid als Säuglinge getauft und habt nie die Geistestaufe empfangen. Apg 8 zeigt es: Die Samariter glaubten und waren getauft – und hatten den Geist trotzdem noch nicht. Es gibt eine zweite Erfahrung nach der Bekehrung."`,
      objectionBy: 'Pfingstprediger',
      answer: `Apg 8 ist gerade unser Text! Die Samariter empfingen den Geist, als die Apostel ihnen die Hände auflegten (8,17) – eine von der Wassertaufe unterschiedene Gabe des Geistes. Genau das feiert die koptische Kirche im Sakrament der **Myronsalbung**, das unmittelbar nach der Taufe gespendet wird. Wir stimmen also zu, dass es eine besondere Geistesgabe gibt – sie wird aber durch die Kirche gegeben, und ihr Kennzeichen ist nicht die Zungenrede, sondern die Frucht des Geistes (Gal 5,22).`,
      detail: `Auch Apg 19,6 verbindet den Geistempfang mit der Handauflegung des Apostels nach der Taufe. Paulus spricht von Salbung und Versiegelung: „Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt und versiegelt und in unsre Herzen das Pfand, den Geist, gegeben hat" (2 Kor 1,21–22). Die Myronsalbung ist die kirchliche Gestalt dieser apostolischen Handauflegung.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,14–17', quote: `Da legten sie die Hände auf sie, und sie empfingen den heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '2. Korinther', ref: '1,21–22', quote: `Gott ist's aber, der uns befestigt samt euch in Christum und uns gesalbt und versiegelt und in unsre Herzen das Pfand, den Geist, gegeben hat.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'myron-nur-ritual',
          objection: `„Ein Ölritual ist doch keine echte Erfahrung der Kraft Gottes. Bei uns spürt man den Geist."`,
          objectionBy: 'Charismatischer Lehrer',
          answer: `Auch die Handauflegung der Apostel war eine sichtbare, leibliche Handlung – und durch sie kam der Geist (Apg 8,18). Johannes schreibt den Christen: „Ihr habt die Salbung (*chrisma*) von dem, der heilig ist" (1 Joh 2,20.27). Kyrill von Jerusalem erklärt den Neugetauften: Das heilige Myron ist nach der Anrufung nicht mehr bloßes Öl, sondern Gabe Christi und des Heiligen Geistes. Ob man etwas „spürt", entscheidet nicht darüber, ob Gott gehandelt hat.`,
          voices: [
            {
              person: 'kyrill-jerusalem',
              role: 'als Lehrer der Mysterien',
              text: `In der dritten mystagogischen Katechese vergleicht Kyrill das Myron mit dem eucharistischen Brot: Wie das Brot nach der Anrufung des Geistes nicht mehr gewöhnliches Brot ist, so ist auch das heilige Salböl nicht mehr gewöhnliches Öl, sondern Gnadengabe Christi, die durch die Gegenwart des Geistes wirksam wird.`,
              sources: [{ kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '3,3', year: 'um 350 (Zuschreibung z. T. an Johannes von Jerusalem)', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'warum-keine-kraft',
              objection: `„Wenn ihr den Geist als Säuglinge empfangen habt – warum sieht man dann bei so vielen Kopten keine Kraft und kein Feuer?"`,
              objectionBy: 'Pfingstevangelist',
              answer: `Eine ehrliche Frage. Paulus schreibt Timotheus: „Erwecke die Gabe Gottes, die in dir ist" (2 Tim 1,6) – eine empfangene Gabe kann schlummern und muss angefacht werden, durch Buße, Gebet, Fasten und die Sakramente. Und die Kraft, die Jesus verheißt, ist zuerst Kraft zum Zeugnis: „Ihr werdet die Kraft des heiligen Geistes empfangen … und werdet meine Zeugen sein" (Apg 1,8). Diese Kraft haben koptische Christen in Jahrhunderten der Bedrängnis bis zum Martyrium gezeigt – etwa die 21 Märtyrer von Libyen 2015, die mit dem Namen Jesu auf den Lippen starben.`,
              followUps: [
                {
                  id: 'meine-erfahrung',
                  objection: `„Ich habe es selbst erlebt: Ich habe in Zungen geredet und Gottes Gegenwart wie nie zuvor gespürt. Meine Erfahrung kannst du mir nicht absprechen."`,
                  objectionBy: 'Charismatischer Jugendleiter',
                  answer: `Ich spreche dir deine Begegnung mit Gott nicht ab – ich freue mich, wenn du Gott näher gekommen bist. Die Frage ist nur die Deutung: War diese Erfahrung der eine, notwendige Beweis der Geistestaufe, den alle anderen Christen auch haben müssen? Erfahrungen sind kostbar, aber sie brauchen die Unterscheidung durch Schrift und Kirche. Viele Heilige hatten den Geist in Fülle, ohne je in Zungen zu reden.`,
                  detail: `Pastoral wichtig: Werte die Erfahrung deines Gegenübers nicht ab. Biete ihm stattdessen den größeren Rahmen an: die Fülle des geistlichen Lebens in der Kirche, die Frucht des Geistes (Gal 5,22–23) und das Wort Jesu: „An ihren Früchten sollt ihr sie erkennen" (Mt 7,16). Eine Erfahrung, die zu Demut, Liebe und Treue führt, trägt das Siegel des Geistes – unabhängig von ihrer äußeren Form.`,
                  questionsBack: [`Hat deine Erfahrung dich demütiger gemacht – oder dazu verleitet, auf Christen ohne diese Erfahrung herabzusehen?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Antwort erwartet Paulus auf seine Frage: „Reden sie alle mit Zungen?" (1 Kor 12,30)?`,
    `Waren die Zungen zu Pfingsten echte Sprachen? Sind die Zungen, die du heute hörst, echte Sprachen?`,
    `Welche Kirche vor dem Jahr 1901 lehrte, dass Zungenrede der notwendige Beweis der Geistestaufe sei?`,
    `Ist ein Christ, der nie in Zungen geredet hat, aber in Liebe, Demut und Treue lebt, ohne den Heiligen Geist?`,
  ],
  avoid: [
    `Nicht behaupten, die Zungenrede sei dämonisch oder alle Pfingstler seien Betrüger. Das ist lieblos und nicht zu beweisen.`,
    `Nicht die These vertreten, alle Geistesgaben hätten mit den Aposteln aufgehört (Cessationismus). Das ist nicht koptische Lehre.`,
    `Nicht mit linguistischen Studien allein argumentieren, als sei damit die Frage erledigt; das Hauptargument ist die Schrift.`,
  ],
  concessions: [
    `Zungenrede kommt im Neuen Testament wirklich vor, und Paulus übte sie selbst (1 Kor 14,18). Irenäus bezeugt sie noch im 2. Jahrhundert.`,
    `Viele Pfingstler leben ein ernsthaftes Gebetsleben und haben eine Sehnsucht nach Gott, die manchen traditionellen Christen beschämen kann.`,
    `Sprachwissenschaftliche Untersuchungen (z. B. William Samarin, 1972) zeigen, dass heutige Glossolalie meist keine echte Fremdsprache ist – das widerlegt aber nicht automatisch jede geistliche Erfahrung; es zeigt nur, dass sie nicht mit Apg 2 identisch ist.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'The First Epistle to the Corinthians (NICNT)', year: '1987', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gordon D. Fee', work: 'Gospel and Spirit: Issues in New Testament Hermeneutics', year: '1991', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'William J. Samarin', work: 'Tongues of Men and Angels: The Religious Language of Pentecostalism', year: '1972', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte, Buch V, Kap. 16–19 (Montanismus)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Pfingstbewegung', 'Zungenrede', 'Heiliger Geist', 'Geistestaufe', 'Myron', 'Montanismus'],
  related: ['pfingstbewegung/neue-apostel-propheten', 'sakramente/myron-krankensalbung-erfunden', 'sola-fide/wiedergeburt-durch-entscheidung', 'sakramente/taufe-nur-symbol-keine-kindertaufe'],
};

export default claim;
