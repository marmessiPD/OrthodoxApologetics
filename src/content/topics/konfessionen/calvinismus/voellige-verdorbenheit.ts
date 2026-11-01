import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'voellige-verdorbenheit',
  title: `„Der Mensch ist völlig verdorben und hat keinen freien Willen zum Guten."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'De servo arbitrio – Vom unfreien Willen (1525)' },
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio (1559) II,1–3' },
    { name: 'Synode von Dordrecht', role: 'Reformierte Generalsynode (1618/19)', work: 'Lehrregeln, 3./4. Hauptstück' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe', work: 'Chosen by God (1986); Willing to Believe (1997)' },
  ],
  steelman: `„Ihr wart tot durch Übertretungen und Sünden" (Eph 2,1). Ein Toter kann nichts tun – auch nicht die Hand nach dem Retter ausstrecken. Paulus fasst das Urteil der Schrift zusammen: „Da ist nicht, der gerecht sei, auch nicht einer … da ist nicht, der nach Gott frage" (Röm 3,10–11). Das Herz ist „trotzig und verzagt" (Jer 17,9), das Trachten des Fleisches ist Feindschaft gegen Gott und „vermag es auch nicht" (Röm 8,7). Völlige Verdorbenheit heißt nicht, dass jeder Mensch so böse ist wie möglich, sondern dass die Sünde jeden Bereich des Menschen – Verstand, Wille, Gefühl – durchdrungen hat und er aus sich heraus Gott weder suchen noch wählen kann. Wer dem Menschen einen „freien Willen zum Guten" zuschreibt, macht die Gnade zu einer bloßen Hilfe und den Menschen zum Mit-Erlöser seiner selbst. Nur wenn wir ganz unfähig sind, gehört die Ehre ganz Gott.`,
  biblical: {
    summary: `Die Schrift beschreibt die Sünde als tief und universal (Röm 3,23; 5,12) und den Menschen als unfähig, sich selbst zu retten. Sie sagt aber **nicht**, dass das Bild Gottes zerstört oder der Wille ausgelöscht ist: Auch nach dem Fall ist der Mensch „nach dem Bild Gottes gemacht" (Gen 9,6; Jak 3,9), Heiden tun „von Natur des Gesetzes Werk" (Röm 2,14–15), Kornelius’ Gebete und Almosen sind vor Gott gekommen, bevor er Christ wurde (Apg 10,4.31.35). Die Schrift ruft ständig zur Umkehr und Wahl auf (Dtn 30,19; Jos 24,15; Ez 18,31) – das setzt Ansprechbarkeit voraus. „Tot" ist ein Bild für die Trennung vom Leben Gottes, nicht für Unfähigkeit zu jeder Antwort (Lk 15,24).`,
    detail: `**Röm 3,10–18** ist eine Kette von Psalmzitaten (Ps 14; 53; 5; 140; 10; 36; Jes 59). Paulus zeigt damit, dass Juden wie Heiden unter der Sünde sind (3,9) – nicht, dass kein Mensch je ein Verlangen nach Gott haben könne. Derselbe Psalm 14 spricht im nächsten Atemzug vom „Geschlecht der Gerechten" (Ps 14,5).

**Eph 2,1 – „tot":** Dasselbe Bild verwendet Jesus für den verlorenen Sohn: „Dieser mein Sohn war **tot** und ist wieder lebendig geworden" (Lk 15,24) – und doch „ging er in sich" und kehrte um (15,17–18). Tot heißt: getrennt vom Vater, nicht: zu keiner Regung fähig.

**Das Bild Gottes nach dem Fall:** Gen 9,6 begründet das Tötungsverbot nach der Sintflut damit, dass der Mensch Gottes Bild ist; Jak 3,9 nennt die Menschen, die wir verfluchen, „nach dem Bilde Gottes gemacht". Das Bild ist beschädigt, nicht vernichtet.

**Der Ruf zur Wahl:** „Ich habe euch Leben und Tod … vorgelegt, dass du das Leben erwählest" (Dtn 30,19); „Machet euch ein neues Herz" (Ez 18,31) – neben „Ich will euch ein neues Herz geben" (Ez 36,26). Gott wirkt, und der Mensch antwortet.`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '9,6', quote: `Wer Menschenblut vergießt, des Blut soll auch durch Menschen vergossen werden; denn Gott hat den Menschen zu seinem Bilde gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '3,9', quote: `Durch sie loben wir Gott, den Vater, und durch sie fluchen wir den Menschen, nach dem Bilde Gottes gemacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '2,14–15', quote: `Denn so die Heiden, die das Gesetz nicht haben, doch von Natur tun des Gesetzes Werk, sind dieselben, dieweil sie das Gesetz nicht haben, sich selbst ein Gesetz, als die da beweisen, des Gesetzes Werk sei geschrieben in ihren Herzen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,4.35', quote: `Deine Gebete und deine Almosen sind hinaufgekommen ins Gedächtnis vor Gott. … sondern in allerlei Volk, wer ihn fürchtet und recht tut, der ist ihm angenehm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose', ref: '30,19', quote: `Ich nehme Himmel und Erde heute über euch zu Zeugen: ich habe euch Leben und Tod, Segen und Fluch vorgelegt, daß du das Leben erwählest und du und dein Same leben mögest.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hesekiel', ref: '18,31', quote: `Werfet von euch alle eure Übertretung, damit ihr übertreten habt, und machet euch ein neues Herz und neuen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt: Durch den Fall Adams kamen Tod, Verderbnis und die Neigung zur Sünde über alle Menschen; der Mensch kann sich nicht selbst retten und braucht die Gnade Christi ganz und gar. Aber das **Bild Gottes** (Vernunft, Freiheit, Personsein) bleibt, wenn auch verdunkelt; verloren ging die **Ähnlichkeit** (die gelebte Gemeinschaft mit Gott), die in Christus wiederhergestellt wird. Der Wille ist **geschwächt und krank, nicht tot** – er kann auf Gottes Ruf antworten, sobald die Gnade ihn berührt.`,
    detail: `**Bild und Ähnlichkeit:** Schon Irenäus unterscheidet zwischen dem Bild (*imago*), das dem Menschen als Geschöpf bleibt, und der Ähnlichkeit (*similitudo*), die durch den Geist geschenkt und durch die Sünde verloren wird (Adv. Haer. V,6,1; V,16,2). Die alexandrinische Tradition spricht ähnlich.

**Athanasius’ Bild vom Porträt:** In *De Incarnatione* 14 vergleicht Athanasius den gefallenen Menschen mit einem Porträt, das durch Schmutz unkenntlich geworden ist. Der Maler wirft die Holztafel nicht weg, sondern kommt selbst wieder, damit das Bild auf derselben Tafel erneuert wird. So kam der Logos, das Urbild, um das Bild im Menschen zu erneuern. Die Tafel – die menschliche Natur mit ihrer Freiheit – bleibt.

**Kein Pelagianismus:** Die koptische Kirche lehrt ebenso klar, dass der Mensch ohne Gnade nicht gerettet werden kann. Die Taufe ist Wiedergeburt aus Wasser und Geist (Joh 3,5); im Myron wird der Geist geschenkt; das ganze christliche Leben ist Mitwirken mit der Gnade. Die Formel ist nicht „der Mensch kann allein", sondern „Gott wirkt, und der Mensch wirkt mit".`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '14', year: 'um 318–335', quote: `Wenn ein auf Holz gemaltes Bild durch äußeren Schmutz unkenntlich geworden ist, muss der Dargestellte selbst wiederkommen, damit das Bild auf demselben Material erneuert werden kann. So kam der Sohn des Vaters, um den nach seinem Bild geschaffenen Menschen zu erneuern.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'V,6,1; V,16,2', status: 'paraphrase', quote: `Der Mensch hat das Bild durch seine Natur; die Ähnlichkeit erlangt er durch den Geist – sie war verloren und wird durch das Wort wiederhergestellt.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '2–4', status: 'paraphrase', note: 'Die Seele ist frei, sich dem Guten oder dem Bösen zuzuwenden; die Sünde ist Abwendung, nicht Naturzwang.' },
    ],
  },
  quickAnswer: `Wir stimmen zu: Die Sünde hat den ganzen Menschen verwundet, und niemand kann sich selbst retten. Aber die Bibel sagt auch nach dem Sündenfall, dass der Mensch „nach dem Bild Gottes" gemacht ist (Gen 9,6; Jak 3,9). Das Bild ist beschmutzt, nicht zerstört – Christus kam, um es zu erneuern. Gott ruft den Menschen zur Umkehr und zur Wahl (Dtn 30,19; Ez 18,31); das ergibt nur Sinn, wenn der Mensch – von der Gnade berührt – antworten kann.`,
  keyPoints: [
    `**Das Bild Gottes bleibt nach dem Fall** (Gen 9,6; Jak 3,9): verdunkelt, nicht vernichtet. Verloren ging die Ähnlichkeit, die Christus wiederherstellt.`,
    `**„Tot in Sünden" ist ein Bild** für Trennung von Gott, nicht für völlige Reaktionsunfähigkeit – der „tote" verlorene Sohn kehrt um (Lk 15,17–24).`,
    `**Röm 3,10–18 ist eine Psalmenkette** über die Universalität der Sünde bei Juden und Heiden, kein Lehrsatz über die Unfähigkeit, auf Gottes Ruf zu antworten.`,
    `**Die Schrift ruft ständig zur Wahl:** Dtn 30,19; Jos 24,15; Ez 18,31 – Gottes Gebote wären sonst Spott.`,
    `**Die Väter einmütig:** Irenäus, Athanasius, Kyrill, Chrysostomus lehren einen geschwächten, aber freien Willen – ohne Pelagianismus, denn ohne Gnade kein Heil.`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Erneuerung des Bildes',
      text: `Athanasius sieht den Fall als Abwendung des Menschen vom Logos hin zum Nichts – ein Prozess der Verderbnis, der zum Tod führt. Doch Gott lässt sein Werk nicht untergehen: Es wäre seiner Güte unwürdig. Sein berühmtes Bild vom übermalten Porträt zeigt, dass die Grundlage – die menschliche Natur mit Vernunft und Freiheit – bleibt und erneuert wird. Die Erlösung ist Wiederherstellung, nicht Neuschöpfung aus dem Nichts.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '4–14', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Umkehr',
      text: `Chrysostomus betont in seinen Homilien immer wieder, dass Gott niemanden zwingt: Er ruft, ermahnt, wartet und hilft – aber das Wollen bleibt Sache des Menschen. Ohne diese Freiheit wären seine eigenen Bußpredigten sinnlos. Zugleich lehrt er, dass alles Gute im Menschen durch Gottes Gnade vollendet wird: Wir bringen den Willen, Gott schenkt die Kraft.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Johannesevangelium und zum Hebräerbrief', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Vater Tadros Malaty erklärt in seinen patristischen Kommentaren die koptische Sicht der Ursünde: Der Mensch erbt von Adam die verdorbene, sterbliche Natur und die Neigung zur Sünde; deshalb braucht er die Wiedergeburt in der Taufe. Aber die alexandrinische Tradition spricht nicht von einer Zerstörung der menschlichen Natur, sondern von ihrer Krankheit – und Christus ist der Arzt, der die Natur heilt, indem er sie annimmt.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristische Kommentare (u. a. zu Genesis und Römerbrief)', status: 'paraphrase' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Theologe',
      text: `Ware beschreibt die östliche Sicht so: Der Fall hat das Bild Gottes im Menschen verdunkelt, aber nicht ausgelöscht; der Mensch ist nach dem Fall krank, nicht tot. Deshalb hat die Orthodoxie nie eine Lehre der „völligen Verdorbenheit" angenommen. Die menschliche Freiheit ist zwar eingeschränkt, aber sie bleibt – und Gott achtet sie, weil er Liebe ist und Liebe nicht erzwungen werden kann.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'tot-heisst-tot',
      objection: `„Eph 2,1: ‚Ihr wart tot.' Ein Toter kann nichts tun. Lazarus musste erst lebendig gemacht werden, bevor er aus dem Grab kommen konnte. Genauso muss Gott erst wiedergebären, bevor jemand glauben kann."`,
      objectionBy: 'R. C. Sproul',
      answer: `Wenn „tot" bedeutet „zu keiner Reaktion fähig", dann könnte ein Toter auch nicht sündigen – aber Paulus sagt, die Toten „wandelten" in Sünden (Eph 2,2). Das Bild betont die Trennung vom Leben Gottes, nicht absolute Passivität. Jesus nennt den verlorenen Sohn „tot", und doch „ging er in sich" und kehrte heim (Lk 15,17–24). Und Paulus nennt die Getauften „tot für die Sünde" (Röm 6,11) – sind sie deshalb unfähig zu sündigen?`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '15,24', quote: `… denn dieser mein Sohn war tot und ist wieder lebendig geworden; er war verloren und ist gefunden worden.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Epheser', ref: '2,1–2', quote: `Und auch euch, da ihr tot waret durch Übertretungen und Sünden, in welchen ihr weiland gewandelt habt …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Wenn „tot" absolute Unfähigkeit bedeutet – wie kann ein Toter dann „wandeln" und sündigen?`],
      followUps: [
        {
          id: 'wiedergeburt-vor-glauben',
          objection: `„1 Joh 5,1 sagt: ‚Wer da glaubt …, der ist von Gott geboren' – Perfekt! Die Wiedergeburt geht dem Glauben voraus."`,
          objectionBy: 'James White',
          answer: `Das Perfekt beschreibt einen Zustand, keine zeitliche Reihenfolge. Nach derselben Logik ginge in 1 Joh 2,29 („wer recht tut, der ist von ihm geboren") die Wiedergeburt auch dem Rechttun voraus – das bestreitet niemand, aber es beweist nicht, dass das Rechttun unmöglich wäre, bevor man „geboren" ist. Joh 1,12 sagt umgekehrt: „Wie viele ihn aber aufnahmen, denen gab er Macht, Gottes Kinder zu werden." Erst Aufnahme, dann Kindschaft.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '1,12', quote: `Wie viele ihn aber aufnahmen, denen gab er Macht, Gottes Kinder zu werden, die an seinen Namen glauben.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'taufe-wiedergeburt',
              objection: `„Und wann genau wird man nach deiner Lehre wiedergeboren?"`,
              objectionBy: 'Reformierter Gesprächspartner',
              answer: `In der Taufe: „Es sei denn, dass jemand geboren werde aus Wasser und Geist, so kann er nicht in das Reich Gottes kommen" (Joh 3,5); Gott rettet uns „durch das Bad der Wiedergeburt und Erneuerung des Heiligen Geistes" (Tit 3,5). Vorher wirkt die zuvorkommende Gnade, die zum Glauben ruft und befähigt (Apg 16,14: „Der Herr tat Lydia das Herz auf"), danach das ganze Leben der Mitwirkung. Das ist die Lehre der Kirche seit den Aposteln.`,
              sources: [
                { kind: 'bibel', work: 'Titus', ref: '3,5', quote: `… machte er uns selig nicht um der Werke willen der Gerechtigkeit, die wir getan hatten, sondern nach seiner Barmherzigkeit durch das Bad der Wiedergeburt und Erneuerung des heiligen Geistes.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'niemand-sucht-gott',
      objection: `„Röm 3,11: ‚Da ist nicht, der nach Gott frage.' Kein einziger Mensch sucht Gott von sich aus. Also kann kein unwiedergeborener Mensch Christus wählen."`,
      objectionBy: 'John MacArthur',
      answer: `Paulus zitiert Ps 14 und 53, um zu zeigen, dass Juden **und** Heiden unter der Sünde stehen (Röm 3,9) – also dass niemand sich durch eigene Gerechtigkeit retten kann. Das bestreiten wir nicht. Aber dieselbe Schrift sagt: „Suchet den HERRN, solange er zu finden ist" (Jes 55,6) und „So ihr mich von ganzem Herzen suchen werdet, so will ich mich finden lassen" (Jer 29,13). Gott zieht und weckt das Suchen – und der Mensch kann folgen.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '3,9–12', quote: `Denn wir haben droben bewiesen, daß beide, Juden und Griechen, alle unter der Sünde sind, wie denn geschrieben steht: »Da ist nicht, der gerecht sei, auch nicht einer. Da ist nicht, der verständig sei; da ist nicht, der nach Gott frage.«`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26–27', quote: `… daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten; und fürwahr, er ist nicht ferne von einem jeglichen unter uns.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'kornelius-war-schon-erwaehlt',
          objection: `„Kornelius (Apg 10) war eben schon wiedergeboren oder zumindest von der Gnade ergriffen – er beweist nichts gegen uns."`,
          objectionBy: 'Reformierter Exeget',
          answer: `Dass die Gnade bei Kornelius schon wirkte, sagen wir auch – das ist die zuvorkommende Gnade, die allen Menschen gilt. Aber Kornelius war nicht getauft, kannte das Evangelium noch nicht und hatte den Geist noch nicht empfangen (10,44–48). Trotzdem waren seine Gebete und Almosen vor Gott „angenehm". Das zeigt: Der Mensch vor der Wiedergeburt ist nicht unfähig zu jeder Gott wohlgefälligen Regung.`,
          followUps: [
            {
              id: 'heiden-gute-werke-glaenzende-laster',
              objection: `„Auch die guten Werke der Heiden sind vor Gott nur ‚glänzende Laster', weil sie nicht aus Glauben geschehen (Röm 14,23)."`,
              objectionBy: 'Reformierter Theologe (in Anlehnung an eine Augustinus zugeschriebene Formel)',
              answer: `Röm 14,23 spricht von Christen, die gegen ihr eigenes Gewissen essen – nicht von den Werken der Heiden. Und Paulus lobt in Röm 2,14–15 ausdrücklich Heiden, die „von Natur des Gesetzes Werk" tun. Die Formel „glänzende Laster" steht übrigens so nicht bei Augustinus, sondern ist eine spätere Zuspitzung. Gott hat das Gute im Menschen nicht ausgelöscht – er vollendet es in Christus.`,
              questionsBack: [`War es vor Gott ein Laster, als heidnische Ägypter wie Schifra und Pua die hebräischen Kinder retteten (Ex 1,17–21 – Gott „tat den Wehmüttern Gutes")?`],
            },
          ],
        },
      ],
    },
    {
      id: 'sonst-ruhm-beim-menschen',
      objection: `„Wenn der Mensch einen freien Willen zum Guten hat, dann kann er sich rühmen: ‚Ich habe mich entschieden, der andere nicht.' Dann gehört die Ehre nicht mehr ganz Gott (1 Kor 1,29)."`,
      objectionBy: 'John Piper',
      answer: `Niemand rühmt sich, weil er einen Rettungsring ergriffen hat, den ein anderer ihm zuwarf. Das Annehmen eines Geschenks ist keine Leistung. Paulus sagt selbst: „Was hast du aber, das du nicht empfangen hast?" (1 Kor 4,7) – auch die Fähigkeit zu glauben ist Geschenk. Dass ein Geschenk abgelehnt werden kann, macht es nicht weniger zum Geschenk.`,
      followUps: [
        {
          id: 'luther-servo-arbitrio',
          objection: `„Luther hat in ‚Vom unfreien Willen' gegen Erasmus gezeigt: Der Wille ist wie ein Reittier – entweder reitet ihn Gott oder der Teufel. Einen neutralen freien Willen gibt es nicht."`,
          objectionBy: 'Lutherischer oder reformierter Theologe',
          answer: `Luthers Bild ist eindrucksvoll, aber es macht den Menschen zum Tier ohne Personsein – genau das, was die Schrift nicht tut, wenn sie ihn zur Wahl ruft. Die Kirche hat nie einen „neutralen" Willen gelehrt, der ohne Gott zum Heil fähig wäre. Sie lehrt einen verwundeten Willen, den die Gnade heilt und befähigt, und der in Freiheit Ja oder Nein sagen kann. Erasmus’ Anliegen war in diesem Punkt näher an den Vätern als Luthers Polemik.`,
          sources: [
            { kind: 'gegner', author: 'Martin Luther', work: 'De servo arbitrio (Vom unfreien Willen)', year: '1525', status: 'paraphrase', quote: `Der menschliche Wille ist in der Mitte gestellt wie ein Lasttier: Sitzt Gott darauf, so will er und geht, wohin Gott will; sitzt der Satan darauf, so will und geht er, wohin der Satan will.` },
          ],
          questionsBack: [`Wenn der Mensch wie ein Reittier ist – warum ruft Gott ihn dann immer wieder auf, sich zu entscheiden (Jos 24,15)?`],
        },
        {
          id: 'ihr-seid-pelagianer',
          objection: `„Was du lehrst, ist Pelagianismus oder bestenfalls Semipelagianismus."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Pelagius lehrte, der Mensch könne ohne innere Gnade das Gute tun und sündlos leben. Das lehnt die koptische Kirche ab: Ohne Christus „könnt ihr nichts tun" (Joh 15,5). Wir lehren, dass die Gnade **allem** Guten vorausgeht und es begleitet – aber den Willen nicht ersetzt, sondern heilt. Das ist die gemeinsame Lehre der Väter des Ostens, nicht Pelagius.`,
          followUps: [
            {
              id: 'orange-529-verurteilt-euch',
              objection: `„Die Synode von Orange (529) hat genau eure Position verurteilt: Schon der Anfang des Glaubens ist Gnade, nicht Mitwirkung des Menschen. Die Kirche hat also Augustinus recht gegeben, nicht Cassian."`,
              objectionBy: 'Reformierter Kirchenhistoriker',
              answer: `Orange sagt: Der Anfang des Glaubens ist Gnade – das bekennen wir auch, darum sprechen wir von der zuvorkommenden Gnade. Aber dieselbe Synode verflucht im Schlussbekenntnis ausdrücklich jeden, der lehrt, Gott habe Menschen zum Bösen vorherbestimmt, und sie sagt, alle Getauften **können und sollen** mit Christi Hilfe tun, was zum Heil nötig ist. Das ist keine Lehre der unwiderstehlichen Gnade oder doppelten Prädestination. Zudem war Orange eine regionale Synode in Gallien, kein ökumenisches Konzil.`,
              detail: `Orange II wird in reformierter Literatur gern als Beleg für die Unfähigkeit des Willens angeführt. Liest man das Ganze, ergibt sich ein differenzierteres Bild: Die Synode lehrt die Notwendigkeit der Gnade von Anfang an, schweigt aber über die Unwiderstehlichkeit und verwirft eine Vorherbestimmung zum Bösen „mit allem Abscheu". Der Osten hat die augustinische Zuspitzung nie übernommen; die griechischen und ägyptischen Väter vor und nach Augustinus lehren übereinstimmend, dass die Gnade vorangeht und der Mensch frei mitwirkt. Johannes Cassian, der lange unter den ägyptischen Mönchen lebte, gibt deren Erfahrung wieder: Manchmal kommt Gott dem guten Willen zuvor, manchmal antwortet er auf einen ersten Funken – immer aber ist es Gnade, die das Gute vollendet.`,
              voices: [
                {
                  person: 'johannes-cassian',
                  role: 'als Zeuge der ägyptischen Mönchstheologie',
                  text: `Cassian lässt in der 13. Unterredung den Abba Chairemon erklären, dass Gnade und freier Wille einander nicht ausschließen. Gott ruft und zieht alle, er weckt im Menschen den Anfang des guten Willens, aber er tut dies so, dass der Wille frei bleibt. Wer dies als Selbsterlösung deutet, übersieht, dass Cassian ohne Unterlass von der Notwendigkeit der Gnade spricht – er bestreitet nur, dass sie den Willen ausschaltet.`,
                  sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes (Unterredungen mit den Vätern)', ref: 'XIII', year: 'um 426', status: 'paraphrase' }],
                },
              ],
              sources: [
                { kind: 'konzil', work: 'Synode von Orange (Arausicanum II), Schlussbekenntnis', year: '529', status: 'paraphrase', quote: `Dass aber einige durch göttliche Macht zum Bösen vorherbestimmt seien, glauben wir nicht nur nicht, sondern wenn es welche gibt, die so Böses glauben wollen, sprechen wir mit allem Abscheu das Anathema über sie.` },
              ],
              questionsBack: [`Akzeptierst du dann auch den Satz von Orange, dass alle Getauften mit Christi Hilfe tun können, was zum Heil nötig ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'roemer-8-unvermoegen',
      objection: `„Röm 8,7–8: ‚Fleischlich gesinnt sein ist eine Feindschaft wider Gott … denn es vermag's auch nicht. Die aber fleischlich sind, mögen Gott nicht gefallen.' Das ist das Wort ‚vermag nicht' – Unfähigkeit, nicht bloß Unwilligkeit."`,
      objectionBy: 'R. C. Sproul',
      answer: `Einverstanden: Der Mensch, der nur aus sich selbst und für sich selbst lebt („Fleisch"), kann Gott nicht gefallen. Darüber streiten wir nicht. Die Frage ist, ob Gott den Menschen in diesem Zustand allein lässt – und die Schrift sagt nein: Christus ist das Licht, „welches alle Menschen erleuchtet" (Joh 1,9), und die heilsame Gnade ist „allen Menschen" erschienen (Tit 2,11). Die Unfähigkeit des Fleisches ist real, aber die Gnade geht jedem Menschen voraus.`,
      detail: `„Fleisch" (*sarx*) meint bei Paulus in Röm 8 nicht die menschliche Natur als solche (Christus kam „im Fleisch"), sondern die von Gott abgewandte Lebensausrichtung. Paulus stellt zwei Weisen zu leben gegenüber, nicht zwei Klassen von Menschen, von denen eine ohne jede Gnade bleibt. Die orthodoxe Lehre unterscheidet: Der Mensch kann sich nicht selbst retten, nicht einmal den ersten Schritt aus eigener Kraft tun. Aber Gott wirkt in jedem Menschen durch seinen Logos, durch das Gewissen (Röm 2,14–15) und durch die zuvorkommende Gnade. Der calvinistische Schluss „Also wirkt Gott nur in den Erwählten unwiderstehlich" folgt aus Röm 8 nicht.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '1,9', quote: `Das war das wahrhaftige Licht, welches alle Menschen erleuchtet, die in diese Welt kommen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Titus', ref: '2,11', quote: `Denn es ist erschienen die heilsame Gnade Gottes allen Menschen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'joh-1-9-nur-aeusseres-licht',
          objection: `„Joh 1,9 meint nur, dass das Licht in die Welt kam und allen äußerlich zugänglich ist – nicht eine innere, befähigende Gnade für jeden einzelnen."`,
          objectionBy: 'James White',
          answer: `Der Text sagt nicht „das allen zugänglich ist", sondern „das alle Menschen erleuchtet". Die Väter haben ihn genau so verstanden: Chrysostomus fragt in seiner Auslegung, wie es dann sein kann, dass so viele im Dunkeln bleiben, und antwortet: Das Licht erleuchtet von sich aus alle; wer die Augen seines Geistes verschließt, bleibt im Dunkel – nicht wegen der Natur des Lichts, sondern wegen seiner eigenen Weigerung.`,
          detail: `Die Frage, ob „kommend in die Welt" sich auf das Licht oder auf jeden Menschen bezieht, ist grammatisch offen. Aber auch wenn man es auf das Licht bezieht, bleibt das Objekt: *panta anthrōpon* – jeden Menschen. Eine reine „Zugänglichkeit" ohne innere Wirkung ist eine theologische Eintragung, die man nur braucht, weil das System eine allgemeine Gnade nicht zulässt.`,
          voices: [
            {
              person: 'chrysostomus',
              role: 'als Ausleger des Johannesevangeliums',
              text: `Chrysostomus legt Joh 1,9 so aus, dass Christus seinerseits alle Menschen erleuchtet. Wenn manche dennoch im Dunkel bleiben, dann deshalb, weil sie die Augen ihres Geistes freiwillig verschließen und die Strahlen nicht annehmen wollen. Für ihn liegt die Ursache des Verlorengehens im Menschen, die Ursache des Heils in Gott.`,
              sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Johannesevangelium', ref: 'Homilie 8 (zu Joh 1,9)', year: 'um 391', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'dann-entscheidet-der-mensch',
              objection: `„Wenn alle dieselbe Gnade bekommen und einige glauben, andere nicht, dann ist am Ende doch der menschliche Wille das Entscheidende. Du machst den Menschen souverän und Gott zum Bittsteller."`,
              objectionBy: 'John Piper',
              answer: `Nein. Die Ursache des Heils ist allein Gott: Er ruft, erleuchtet, gibt Glauben und vollendet. Der Mensch ist nicht Ursache, sondern Empfänger. „Entscheidend" ist der Mensch nur in einem traurigen Sinn – wenn er sich verweigert. Wer die Sonne nicht sieht, weil er die Augen schließt, ist nicht „souverän über die Sonne". Gott hat sich in seiner Liebe selbst begrenzt, weil Liebe ohne Freiheit keine Liebe ist.`,
              detail: `Der Einwand setzt voraus, dass jedes Mitwirken des Menschen ein Konkurrent zu Gottes Wirken sein muss – als ob es nur ein begrenztes Maß an Ursächlichkeit gäbe, das entweder Gott oder der Mensch ausfüllt. Die Väter denken anders: Gottes Wirken begründet und trägt das menschliche Wirken, statt es zu ersetzen. Gregor von Nyssa: Die menschliche Freiheit ist selbst ein Teil der Gottebenbildlichkeit; sie aufzuheben hieße, das Bild zu zerstören, das Gott erneuern will.`,
              voices: [
                {
                  person: 'gregor-nyssa',
                  role: 'als Theologe der Gottebenbildlichkeit',
                  text: `Für Gregor von Nyssa gehört die Selbstbestimmung (*autexousion*) wesentlich zum Bild Gottes im Menschen. Ein Wesen, das nur durch Zwang gut wäre, wäre nicht Bild des freien Gottes. Darum wirkt Gott auf den Menschen nicht wie auf eine Sache, sondern wie auf eine Person – durch Ruf, Erleuchtung und Liebe.`,
                  sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Große Katechese (Oratio catechetica)', ref: '5', year: 'um 385', status: 'paraphrase' }],
                },
              ],
              questionsBack: [`Ist ein Bettler, der ein Geschenk annimmt, „souverän" über den Schenkenden?`],
              followUps: [
                {
                  id: 'phil-2-13-wollen-und-vollbringen',
                  objection: `„Phil 2,13: ‚Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen.' Sogar dein Wollen ist Gottes Werk – also bleibt für den Menschen nichts."`,
                  objectionBy: 'R. C. Sproul',
                  answer: `Lies den Vers davor: „Schaffet, dass ihr selig werdet, mit Furcht und Zittern" (Phil 2,12). Paulus stellt beides nebeneinander – der Mensch soll schaffen, **weil** Gott in ihm wirkt. Das ist genau die Synergie: Gottes Wirken ermöglicht und trägt das menschliche Wollen, es ersetzt es nicht. Wäre der Mensch nur passiv, wäre die Mahnung in Vers 12 sinnlos.`,
                  detail: `Phil 2,12–13 ist der klassische Synergie-Text der Ostkirche. Paulus sagt nicht: „Ihr braucht nichts zu tun, denn Gott tut alles", sondern: „Arbeitet, denn Gott wirkt." Die Gnade ist die Quelle, die Antwort des Menschen ist echt. Kallistos Ware fasst die orthodoxe Haltung so zusammen, dass Gnade und Freiheit keine Konkurrenten sind; der Mensch kann ohne Gott nichts tun, Gott aber will den Menschen nicht ohne dessen Zustimmung retten.`,
                  voices: [
                    {
                      person: 'kallistos-ware',
                      role: 'als orthodoxer Theologe',
                      text: `Ware beschreibt die Synergie als Zusammenwirken, in dem Gottes Anteil unvergleichlich größer ist als der menschliche, der menschliche aber unverzichtbar bleibt. Er verweist auf den oft zitierten Satz, Gott könne den Menschen ohne dessen Mitwirkung erschaffen, aber nicht ohne dessen Mitwirkung retten.`,
                      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Way', year: '1979', status: 'paraphrase' }],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `Schaffet, dass ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'gen-6-5-nur-boese',
          objection: `„Gen 6,5 und 8,21: ‚Alles Dichten und Trachten ihres Herzens war nur böse immerdar' – ‚von Jugend auf'. Deutlicher kann die Schrift die völlige Verdorbenheit nicht ausdrücken."`,
          objectionBy: 'John MacArthur',
          answer: `Derselbe Abschnitt sagt drei Verse später: „Noah war ein frommer Mann und ohne Tadel" (Gen 6,9). Gen 8,21 beschreibt eine Neigung „von Jugend auf", keine völlige Unfähigkeit – und Gott schließt gleich danach einen Bund mit den Menschen und macht sie für Blutvergießen verantwortlich, „denn Gott hat den Menschen zu seinem Bilde gemacht" (Gen 9,6). Die Verse beschreiben die Generation der Flut und die Neigung zur Sünde, nicht die Zerstörung des Gottesbildes.`,
          detail: `Auch die jüdische Auslegung liest Gen 8,21 als Beschreibung des „bösen Triebs" (*jezer ha-ra*), dem der Mensch mit Gottes Hilfe widerstehen kann und soll (vgl. Gen 4,7: „du aber herrsche über sie"). Die orthodoxe Lehre sagt dasselbe mit anderen Worten: Die Natur ist verwundet und zur Sünde geneigt, aber nicht in ein Wesen verwandelt, das Gott nicht mehr hören kann.`,
          sources: [
            { kind: 'bibel', work: '1. Mose', ref: '6,9', quote: `Noah war ein frommer Mann und ohne Tadel zu seinen Zeiten; er wandelte mit Gott.`, status: 'paraphrase' },
            { kind: 'bibel', work: '1. Mose', ref: '4,7', quote: `Die Sünde lauert vor der Tür, nach dir hat sie Verlangen; du aber herrsche über sie.`, status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Mensch nach Gen 9,6 und Jak 3,9 auch nach dem Fall noch Bild Gottes – und was bleibt dann von diesem Bild?`,
    `Warum gebietet Gott in Ez 18,31 „Machet euch ein neues Herz", wenn der Mensch keinerlei Fähigkeit zur Antwort hat?`,
    `Konnte der verlorene Sohn, den Jesus „tot" nennt, „in sich gehen"?`,
    `Wenn ein Mensch nicht anders kann als sündigen – wie kann Gott ihn dann für das Nichtglauben verantwortlich machen?`,
  ],
  avoid: [
    `Nicht so tun, als sei der Mensch eigentlich gesund und brauche Gott nur als Nachhilfe. Die koptische Kirche nimmt die Sünde und den Tod sehr ernst.`,
    `Nicht behaupten, Calvinisten hielten jeden Menschen für maximal böse. „Völlige" Verdorbenheit meint bei ihnen die Durchdringung aller Bereiche, nicht maximale Bosheit.`,
    `Nicht mit modernen Psychologie-Argumenten („Jeder Mensch ist im Grunde gut") antworten – das ist weder biblisch noch patristisch.`,
  ],
  concessions: [
    `Die Schrift beschreibt die Sünde tatsächlich als universal und tiefgreifend; kein Mensch kann sich selbst erlösen. Hier haben die Reformatoren ein echtes Anliegen.`,
    `Auch die Väter sprechen davon, dass der gefallene Mensch ohne Gnade nicht zum Heil gelangt. Der Unterschied liegt nicht in der Notwendigkeit der Gnade, sondern darin, ob sie den Willen ersetzt oder heilt.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Way', year: '1979', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase' },
    { kind: 'gegner', author: 'R. C. Sproul', work: 'Willing to Believe: The Controversy over Free Will', year: '1997', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Calvinismus', 'Erbsünde', 'freier Wille', 'Bild Gottes', 'Anthropologie'],
  related: ['calvinismus/doppelte-praedestination', 'calvinismus/unwiderstehliche-gnade', 'sola-fide/wiedergeburt-durch-entscheidung', 'sakramente/taufe-nur-symbol-keine-kindertaufe', 'islam-kreuzigung/keine-erbsuende-fitra', 'willensfreiheit/freier-wille-illusion'],
};

export default claim;
