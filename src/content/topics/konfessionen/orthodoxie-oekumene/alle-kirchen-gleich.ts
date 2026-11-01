import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'alle-kirchen-gleich',
  title: `„Konfessionen sind egal – Hauptsache, man glaubt an Jesus."`,
  proponents: [
    { name: 'Überkonfessionelle und „nondenominational" Gemeinden', role: 'Freie evangelikale und charismatische Gemeinden', work: '„Wir sind einfach Christen" – Lehrunterschiede als zweitrangig' },
    { name: 'Liberale Ökumene', role: 'Teile der westlichen Ökumenischen Bewegung', work: 'Einheit in versöhnter Verschiedenheit ohne Klärung der Lehrfragen' },
    { name: 'Leuenberger Konkordie', role: 'Kirchengemeinschaft lutherischer, reformierter und unierter Kirchen Europas (1973)', work: 'Erklärung, frühere Lehrverurteilungen beträfen die heutigen Partner nicht mehr' },
    { name: 'Viele Christen im Alltag', role: 'Gemischtkonfessionelle Familien, junge Christen', work: '„Gott fragt im Gericht nicht nach deiner Konfession."' },
  ],
  steelman: `Jesus hat keine Konfessionen gegründet. Er sagte: „Wer an ihn glaubt, wird nicht verloren" (Joh 3,16), nicht: „Wer koptisch, lutherisch oder katholisch ist." Paulus tadelte die Korinther gerade dafür, dass sie sagten: „Ich bin des Paulus, ich des Apollos, ich des Kephas" (1 Kor 1,12) – genau das sind Konfessionen. Als die Jünger einem Mann verbieten wollten, der in Jesu Namen Dämonen austrieb, aber nicht zu ihnen gehörte, sagte Jesus: „Wer nicht wider uns ist, der ist für uns" (Mk 9,40). Paulus freute sich, wann immer Christus verkündigt wurde (Phil 1,18). Die größte Gabe ist die Liebe, nicht die Erkenntnis (1 Kor 13; 8,1). Konfessionsstreit hat Kriege verursacht, Familien entzweit und junge Menschen aus der Kirche getrieben. Am Ende wird Gott nicht fragen, welcher Kirche du angehört hast, sondern ob du ihn geliebt und den Geringsten gedient hast (Mt 25). Also: Lehrunterschiede über Taufe, Abendmahl und Kirchenämter sind zweitrangig. Hauptsache Jesus.`,
  biblical: {
    summary: `Die Schrift verbindet **Liebe und Wahrheit** untrennbar. Jesus betet um die Einheit seiner Jünger – „auf dass sie alle eins seien … auf dass die Welt glaube" (Joh 17,21) –, aber unmittelbar davor: „Heilige sie in deiner Wahrheit; dein Wort ist die Wahrheit" (Joh 17,17). Die Einheit, die Paulus beschreibt, umfasst „einen Herrn, **einen Glauben**, eine Taufe" (Eph 4,5) und zielt auf „Einigkeit des Glaubens", damit wir nicht mehr „von jedem Wind der Lehre" hin und her getrieben werden (Eph 4,13–14). Paulus ermahnt die Korinther nicht, ihre Unterschiede zu ignorieren, sondern „einerlei Rede" zu führen und „in einem Sinne und in einerlei Meinung" fest aneinander zu halten (1 Kor 1,10). Und er warnt: Wer „ein anderes Evangelium" predigt, „der sei verflucht" (Gal 1,8) – es gibt sogar „einen andern Jesus" (2 Kor 11,4).`,
    detail: `**„Hauptsache Jesus" – aber welcher?** Paulus warnt die Korinther vor Predigern, die „einen andern Jesus" verkünden (2 Kor 11,4). Auch Zeugen Jehovas, Mormonen und Muslime „glauben an Jesus" – aber an einen anderen als den, den die Apostel bezeugen. Schon deshalb kann die Lehre nicht egal sein.

**1 Kor 1,10–13:** Paulus kritisiert Parteien, die sich um Personen scharen. Seine Lösung ist nicht „jeder nach seiner Façon", sondern die Einheit in der einen apostolischen Lehre: „einerlei Rede", „einerlei Meinung". Konfessionen, die sich nach Luther, Calvin oder Wesley benennen, sind eher ein Beispiel für 1 Kor 1,12 als für dessen Überwindung.

**Mk 9,38–40:** Jesus verbietet seinen Jüngern, jemanden zu *hindern*, der in seinem Namen Gutes tut. Die orthodoxe Kirche hindert niemanden und freut sich über jedes Gute. Aber derselbe Jesus sagt auch: „Wer nicht mit mir ist, der ist wider mich" (Mt 12,30). Großherzigkeit gegenüber anderen heißt nicht Gleichgültigkeit gegenüber der Wahrheit.

**Liebe und Wahrheit:** Die Liebe „freut sich … der Wahrheit" (1 Kor 13,6); „lasset uns rechtschaffen sein in der Liebe" (wörtlich: „die Wahrheit sagen in Liebe", Eph 4,15).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '17,17.21', quote: `Heilige sie in deiner Wahrheit; dein Wort ist die Wahrheit … auf daß sie alle eins seien, gleichwie du, Vater, in mir und ich in dir; daß auch sie in uns eins seien, auf daß die Welt glaube, du habest mich gesandt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,4–6', quote: `Ein Leib und ein Geist, wie ihr auch berufen seid auf einerlei Hoffnung eurer Berufung; ein Herr, ein Glaube, eine Taufe; ein Gott und Vater unser aller, der da ist über euch allen und durch euch allen und in euch allen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '1,10', quote: `Ich ermahne euch aber, liebe Brüder, durch den Namen unsers HERRN Jesu Christi, daß ihr allzumal einerlei Rede führet und lasset nicht Spaltungen unter euch sein, sondern haltet fest aneinander in einem Sinne und in einerlei Meinung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '11,4', quote: `Denn so der da zu euch kommt, einen andern Jesus predigte, den wir nicht gepredigt haben, oder ihr einen andern Geist empfinget, den ihr nicht empfangen habt, oder ein ander Evangelium, das ihr nicht angenommen habt, so vertrüget ihr's billig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,14–15', quote: `… auf daß wir nicht mehr Kinder seien und uns wägen und wiegen lassen von allerlei Wind der Lehre … Lasset uns aber rechtschaffen sein in der Liebe und wachsen in allen Stücken an dem, der das Haupt ist, Christus.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt **Liebe zu allen Christen und Treue zur ganzen Wahrheit zugleich**. Sie ehrt alle, die Christus als Gott und Erlöser bekennen, als Brüder und Schwestern, betet für die Einheit und arbeitet in ökumenischen Gremien mit. Aber sie hält fest: Einheit wächst aus dem **einen Glauben** der Apostel, nicht aus Gleichgültigkeit gegenüber der Lehre. Taufe, Eucharistie, Priestertum und das Bekenntnis zu Christus sind keine Nebensachen, sondern Gaben Christi an seine Kirche. Über das ewige Heil anderer Menschen urteilt die Kirche nicht – das ist Gottes Sache. Sie weiß, wo sie die Kirche findet; wo die Kirche nicht ist, maßt sie sich nicht an zu bestimmen.`,
    detail: `**Ökumene ohne Indifferentismus:** Die koptische Kirche ist seit langem in der weltweiten und in der nahöstlichen Ökumene engagiert und führt offizielle Dialoge mit östlich-orthodoxen, katholischen, anglikanischen und anderen Kirchen. Gerade die Dialoge zeigen, dass Lehre zählt: Die Erklärungen von 1989/1990 haben nicht gesagt „Unterschiede sind egal", sondern die Lehre beider Seiten geprüft und eine Übereinstimmung im Glauben festgestellt. Umgekehrt setzte der Heilige Synod der koptischen Kirche 2024 den theologischen Dialog mit der katholischen Kirche aus, nachdem diese eine Erklärung zur Segnung gleichgeschlechtlicher Paare veröffentlicht hatte – Ökumene ist für die Kopten eine Suche nach Wahrheit, nicht deren Preisgabe.

**Die Väter:** Irenäus beschreibt um 180 die Kirche, die über die ganze Welt verstreut ist und doch denselben Glauben bewahrt, „als hätte sie eine Seele, ein Herz und einen Mund". Einheit ist für ihn Einheit im empfangenen Glauben.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'I,10,1–2', year: 'um 180', status: 'paraphrase', quote: `Die Kirche, obwohl über die ganze Welt verstreut, bewahrt diesen Glauben sorgfältig, als bewohnte sie ein Haus; sie glaubt ihn, als hätte sie eine Seele und ein Herz, und verkündet ihn übereinstimmend, als hätte sie einen Mund.` },
      { kind: 'koptisch', work: 'Beschluss des Heiligen Synods der koptisch-orthodoxen Kirche zur Aussetzung des theologischen Dialogs mit der katholischen Kirche', year: '2024', status: 'paraphrase', note: 'Reaktion auf die vatikanische Erklärung „Fiducia supplicans" (Dezember 2023).' },
      { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase', quote: `Wir wissen, wo die Kirche ist; aber wir können nicht sicher sagen, wo sie nicht ist.` },
    ],
  },
  quickAnswer: `Ich liebe alle Christen, und ich urteile nicht über ihr Heil – das ist Gottes Sache. Aber „Hauptsache Jesus" reicht nicht, denn Paulus warnt vor „einem andern Jesus" (2 Kor 11,4) – auch Zeugen Jehovas und Muslime „glauben an Jesus". Jesus betete um Einheit „in der Wahrheit" (Joh 17,17–21), und Paulus nennt als Grundlage der Einheit „einen Herrn, einen Glauben, eine Taufe" (Eph 4,5). Ob ein Kind getauft werden soll oder ob das Abendmahl Christi Leib ist, ist keine Nebensache, sondern eine Frage danach, was Christus uns gegeben hat. Liebe und Wahrheit gehören zusammen – „die Wahrheit sagen in Liebe" (Eph 4,15).`,
  keyPoints: [
    `**Liebe zu allen Christen** – und kein Urteil über ihr ewiges Heil.`,
    `**Welcher Jesus?** 2 Kor 11,4 warnt vor „einem andern Jesus"; Lehre entscheidet, wer Jesus ist.`,
    `**Einheit in der Wahrheit:** Joh 17,17–21; Eph 4,4–6.13–14; 1 Kor 1,10 („einerlei Meinung").`,
    `**Sakramente sind keine Nebensache:** Jesus selbst verbindet Heil mit Taufe (Joh 3,5) und Eucharistie (Joh 6,53).`,
    `**Ökumene ist Wahrheitssuche:** Die Dialoge 1989/1990 prüften die Lehre; die Kopten setzten 2024 einen Dialog aus, als es um Wahrheit ging.`,
    `**„Konfessionen sind egal" ist selbst eine Lehre** – und zwar eine, die keine der alten Kirchen je vertreten hat.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Verfasser von „Mere Christianity"',
      text: `C. S. Lewis wird oft als Zeuge für ein konfessionsloses „bloßes Christentum" angeführt. Doch im Vorwort zu „Mere Christianity" vergleicht er dieses gemeinsame Christentum mit einer Eingangshalle, von der Türen in verschiedene Zimmer führen. Die Halle sei ein Ort zum Warten, nicht zum Wohnen; Feuer, Stühle und Mahlzeiten gebe es nur in den Zimmern. Man solle eine Tür wählen – und zwar nicht danach, welche Farbe einem gefällt, sondern danach, welche wahr ist. Selbst Lewis hielt die Konfessionsfrage also nicht für egal.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Vorwort', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'lesslie-newbigin',
      role: 'als ökumenischer Bischof der Kirche von Südindien',
      text: `Lesslie Newbigin, protestantischer Missionar und Bischof, war ein leidenschaftlicher Ökumeniker – und gerade deshalb ein Gegner der Gleichgültigkeit. In „The Household of God" (1953) argumentierte er, dass die Spaltung der Kirche dem Evangelium selbst widerspricht, weil die Welt eine sichtbare Gemeinschaft sehen soll (Joh 17,21). Eine bloß „geistliche" Einheit unsichtbarer Gläubiger, die sich mit dem Nebeneinander der Denominationen abfindet, hielt er für eine Ausrede. Einheit muss gesucht, errungen und sichtbar werden.`,
      sources: [{ kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Household of God', year: '1953', status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der Einheit im Glauben',
      text: `Irenäus kannte eine Kirche, die von Gallien bis Mesopotamien verstreut war – und doch denselben Glauben bekannte. Für ihn bestand die Einheit nicht in einem Minimalkonsens, sondern in der „Regel der Wahrheit", die alle Kirchen von den Aposteln empfangen hatten. Die Gnostiker dagegen, die sich ebenfalls auf Jesus beriefen, hatten zahllose widersprüchliche Lehren. Die Vielfalt der Meinungen war für Irenäus gerade das Kennzeichen der Irrlehre, die Einmütigkeit das Kennzeichen der Kirche.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,10; III,3–4', year: 'um 180', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als ökumenisch engagierter und lehrtreuer Papst',
      text: `Papst Schenuda III. verband beides: Er pflegte freundschaftliche Beziehungen zu Kirchenführern aller Konfessionen, unterzeichnete 1973 die gemeinsame Erklärung mit Paul VI. und förderte die Dialoge mit den östlich-orthodoxen Kirchen. Zugleich verteidigte er in seinen Schriften und wöchentlichen Vorträgen die orthodoxe Lehre zu Heil, Sakramenten und Heiligen gegen protestantische und andere Einwände. Für ihn war Liebe ohne Wahrheit ebenso unchristlich wie Wahrheit ohne Liebe.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie; Gemeinsame Erklärung mit Paul VI. (1973)', status: 'paraphrase' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Theologe',
      text: `Kallistos Ware formuliert die orthodoxe Haltung so: Die orthodoxe Kirche glaubt, die eine Kirche Christi zu sein, und weiß, wo die Kirche ist – aber sie kann nicht mit Sicherheit sagen, wo sie nicht ist. Daraus folgt Demut gegenüber anderen Christen und zugleich Treue zum Ganzen des Glaubens. Ökumene bedeutet für ihn nicht, sich auf den kleinsten gemeinsamen Nenner zu einigen, sondern gemeinsam zur Fülle der apostolischen Überlieferung zurückzukehren.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', ref: 'Kap. über die Kirche und die Wiedervereinigung', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'hauptsache-jesus',
      objection: `„Konfessionen sind menschliche Etiketten. Entscheidend ist nur, dass man an Jesus glaubt."`,
      objectionBy: 'Evangelikaler Christ aus einer überkonfessionellen Gemeinde',
      answer: `Ich freue mich über jeden, der Jesus liebt, und ich urteile nicht über sein Heil. Aber die Frage ist: An welchen Jesus? Paulus warnt vor „einem andern Jesus" (2 Kor 11,4). Zeugen Jehovas, Mormonen und Muslime glauben auch an „Jesus" – aber nicht an den, der wahrer Gott ist, für uns gekreuzigt wurde und auferstand. Schon das zeigt: Ohne Lehre gibt es kein „Hauptsache Jesus".`,
      followUps: [
        {
          id: 'nur-kernlehren',
          objection: `„Einverstanden: Die Kernlehren – Dreieinigkeit, Gottheit Christi, Auferstehung – sind wichtig. Aber Taufe, Abendmahl und Kirchenämter sind Nebensachen."`,
          objectionBy: 'Evangelikaler Theologe',
          answer: `Wer bestimmt, was „Kern" ist? Jesus selbst sagt: „Es sei denn, dass jemand geboren werde aus Wasser und Geist, so kann er nicht in das Reich Gottes kommen" (Joh 3,5) und „Werdet ihr nicht essen das Fleisch des Menschensohnes … so habt ihr kein Leben in euch" (Joh 6,53). Paulus nennt „eine Taufe" in einem Atemzug mit „einem Herrn" (Eph 4,5). Für Jesus und die Apostel waren die Sakramente keine Nebensache.`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '3,5', quote: `Jesus antwortete: Wahrlich, wahrlich ich sage dir: Es sei denn, daß jemand geboren werde aus Wasser und Geist, so kann er nicht in das Reich Gottes kommen.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '6,53', quote: `Jesus sprach zu ihnen: Wahrlich, wahrlich ich sage euch: Werdet ihr nicht essen das Fleisch des Menschensohnes und trinken sein Blut, so habt ihr kein Leben in euch.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'streit-vertreibt',
              objection: `„Gerade der Streit über solche Fragen hat Kriege verursacht und Menschen aus der Kirche vertrieben."`,
              objectionBy: 'Kirchendistanzierter Christ',
              answer: `Das ist wahr und beschämend – Christen haben einander verfolgt, auch Kopten litten darunter. Aber die Lösung ist nicht, die Wahrheit für egal zu erklären, sondern sie in Liebe zu suchen und zu sagen (Eph 4,15). Auch in der Medizin streiten Ärzte über die richtige Therapie; niemand folgert daraus, dass jede Therapie gleich gut ist. Gerade weil es um Leben geht, ist die Frage wichtig.`,
              followUps: [
                {
                  id: 'liebe-statt-lehre',
                  objection: `„Paulus sagt: Die Erkenntnis bläht auf, die Liebe baut auf (1 Kor 8,1). Und die Liebe ist die größte unter den Gaben (1 Kor 13,13)."`,
                  objectionBy: 'Charismatischer Christ',
                  answer: `Derselbe Paulus schreibt im Liebeskapitel, die Liebe „freut sich nicht der Ungerechtigkeit, sie freut sich aber der Wahrheit" (1 Kor 13,6). Im selben Brief verteidigt er die überlieferte Lehre von der Auferstehung (1 Kor 15,1–3) und vom Abendmahl (1 Kor 11,23–29) mit großem Ernst. Liebe ohne Wahrheit wird sentimental, Wahrheit ohne Liebe wird hart. Johannes grüßt „in der Wahrheit und in der Liebe" (2 Joh 3) – beides zusammen.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '13,6', quote: `… sie freut sich nicht der Ungerechtigkeit, sie freut sich aber der Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Kann man jemanden wirklich lieben und ihm zugleich gleichgültig gegenüberstehen, ob er die Wahrheit kennt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'joh-3-16-genuegt',
          objection: `„Joh 3,16: ‚Wer an ihn glaubt, wird nicht verloren.' Da steht nichts von Kirche oder Konfession."`,
          objectionBy: 'Evangelistischer Prediger',
          answer: `Im selben Kapitel sagt Jesus zu Nikodemus, man müsse „aus Wasser und Geist" geboren werden (Joh 3,5). „Glauben" heißt bei Johannes, Christus anzunehmen, ihm zu folgen und in ihm zu bleiben (Joh 15,4–6) – nicht nur eine Überzeugung zu haben. Die Kirche maßt sich nicht an, über das Heil anderer zu urteilen. Aber die Frage ist nicht nur „Wer wird gerettet?", sondern „Was hat Christus seiner Kirche gegeben, und wollen wir es ganz empfangen?"`,
        },
      ],
    },
    {
      id: 'ich-bin-des-paulus',
      objection: `„Paulus tadelt: ‚Ich bin des Paulus, ich des Apollos, ich des Kephas' (1 Kor 1,12). Wenn du sagst ‚Ich bin koptisch-orthodox', machst du genau das."`,
      objectionBy: 'Freikirchlicher Prediger',
      answer: `Paulus tadelt Parteien, die sich um Personen scharen. Seine Lösung ist aber nicht „jeder glaubt, was er will", sondern „einerlei Rede" und „einerlei Meinung" (1 Kor 1,10) – die Einheit in der einen apostolischen Lehre. Die orthodoxe Kirche benennt sich nicht nach einem Reformator, sondern bekennt sich zur „einen, heiligen, katholischen und apostolischen Kirche" des Glaubensbekenntnisses. Bezeichnungen wie „lutherisch", „calvinistisch" oder „wesleyanisch" passen eher zu 1 Kor 1,12.`,
      followUps: [
        {
          id: 'koptisch-auch-etikett',
          objection: `„Aber ‚koptisch' ist doch auch ein Etikett – sogar ein ethnisches."`,
          objectionBy: 'Freikirchlicher Prediger',
          answer: `„Koptisch" heißt schlicht „ägyptisch" und bezeichnet die Herkunft, nicht einen anderen Glauben – so wie man von der Kirche in Rom oder in Korinth sprach. Die koptische Kirche hat heute Gemeinden und Gläubige auf allen Kontinenten und aus vielen Völkern. Ihr Bekenntnis ist das Nizäno-Konstantinopolitanum, nicht ein Sonderbekenntnis. Der Name sagt, woher wir kommen; das Credo sagt, was wir glauben.`,
          followUps: [
            {
              id: 'dann-groesste-kirche',
              objection: `„Wenn Einheit so wichtig ist, dann tritt doch der größten Kirche bei – der katholischen. Das wäre die konsequente Einheit."`,
              objectionBy: 'Katholischer Gesprächspartner',
              answer: `Einheit entsteht nicht durch Größe, sondern durch den gemeinsamen Glauben der Apostel. Die orthodoxe Kirche kann Lehren wie den Papstprimat mit Jurisdiktion über die ganze Kirche, die Unfehlbarkeit oder das Filioque nicht annehmen, weil die Kirche des ersten Jahrtausends sie nicht kannte. Gerade weil die Wahrheit nicht egal ist, ist Einheit nicht eine Frage der Mitgliederzahl. Aber wir führen den Dialog mit Rom – in Respekt und in der Hoffnung auf Klärung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'wer-nicht-wider-uns',
      objection: `„Jesus sagt: ‚Wer nicht wider uns ist, der ist für uns' (Mk 9,40). Er wollte gerade nicht, dass die Jünger andere ausgrenzen."`,
      objectionBy: 'Ökumenisch gesinnter Pastor',
      answer: `Jesus verbietet seinen Jüngern, einen Mann zu *hindern*, der in seinem Namen Gutes tat – und das tut die koptische Kirche auch nicht: Sie hindert niemanden und freut sich über jedes Gute. Aber Jesus sagt an anderer Stelle auch: „Wer nicht mit mir ist, der ist wider mich" (Mt 12,30). Beide Worte zusammen zeigen: großherzig gegenüber Menschen, klar in der Wahrheit über Christus.`,
      followUps: [
        {
          id: 'phil-1-18',
          objection: `„Paulus freute sich, wenn nur Christus verkündigt wurde, auf welche Weise auch immer (Phil 1,18)."`,
          objectionBy: 'Ökumenisch gesinnter Pastor',
          answer: `Auch wir freuen uns, wo Christus verkündigt wird. Aber in Phil 1 geht es um Prediger mit falschen *Motiven* – Neid und Streitsucht –, nicht mit falscher *Lehre*. Dieselbe Botschaft verkünden sie. Über ein anderes Evangelium hat Paulus sich nicht gefreut, sondern es verflucht (Gal 1,8). Die Motive anderer überlassen wir Gott; über die Wahrheit des Evangeliums dürfen wir nicht schweigen.`,
          followUps: [
            {
              id: 'offenes-abendmahl',
              objection: `„Wenn ihr alle Christen liebt, warum lasst ihr sie dann nicht zur Kommunion zu? Das wäre gelebte Einheit."`,
              objectionBy: 'Evangelischer Pfarrer',
              answer: `Weil die Eucharistie in der Alten Kirche das Siegel einer bereits bestehenden Einheit im Glauben war, nicht ein Mittel, sie herzustellen: Die Urgemeinde blieb „in der Apostel Lehre und in der Gemeinschaft *und* im Brotbrechen" (Apg 2,42). Wer gemeinsam kommuniziert, sagt: Wir glauben dasselbe über diesen Leib und dieses Blut. Solange wir das nicht tun, wäre die gemeinsame Kommunion eine schöne, aber unehrliche Geste. Das schmerzt – und genau deshalb arbeiten wir an der Einheit im Glauben.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '10,17', quote: `Denn ein Brot ist's, so sind wir viele ein Leib, dieweil wir alle eines Brotes teilhaftig sind.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [`Glaubst du, dass im Abendmahl Christi wahrer Leib und wahres Blut gegenwärtig sind? Wenn nicht – was würde dann eine gemeinsame Kommunion mit uns bedeuten?`],
            },
          ],
        },
      ],
    },
    {
      id: 'oekumene-widerspruch',
      objection: `„Eure Kirche führt doch selbst ökumenische Dialoge und arbeitet mit anderen Kirchen zusammen. Damit gebt ihr zu, dass alle Kirchen gleich sind."`,
      objectionBy: 'Liberaler Ökumeniker',
      answer: `Ökumene ist nicht Gleichgültigkeit, sondern Suche nach der Wahrheit in Liebe. Die Dialoge von 1989/1990 haben nicht gesagt „Unterschiede sind egal", sondern die Lehre beider Seiten geprüft und eine Übereinstimmung im Glauben an Christus festgestellt. Und als die katholische Kirche 2023 eine Erklärung zur Segnung gleichgeschlechtlicher Paare veröffentlichte, setzte der koptische Synod 2024 den Dialog aus. Wer dialogiert, nimmt die Wahrheit ernst.`,
      followUps: [
        {
          id: 'arroganz',
          objection: `„Zu behaupten, eure Kirche habe die Fülle der Wahrheit, ist arrogant."`,
          objectionBy: 'Liberaler Ökumeniker',
          answer: `Arroganz wäre, die Wahrheit selbst erfunden zu haben. Wir behaupten nur, empfangen zu haben, was die Apostel überliefert haben – und wir urteilen nicht über das Heil anderer: Wir wissen, wo die Kirche ist, aber nicht mit Sicherheit, wo sie nicht ist. Übrigens ist auch der Satz „Alle Konfessionen sind gleich" ein Wahrheitsanspruch – und zwar einer, der jede Kirche für falsch erklärt, die sich selbst ernst nimmt.`,
          followUps: [
            {
              id: 'sichtbare-einheit-utopie',
              objection: `„Sichtbare Einheit ist eine Utopie. Die geistliche Einheit aller Gläubigen genügt."`,
              objectionBy: 'Evangelikaler Theologe',
              answer: `Jesus betete um eine Einheit, die die *Welt sehen* kann: „auf dass die Welt glaube" (Joh 17,21). Eine unsichtbare Einheit sieht niemand. Selbst protestantische Ökumeniker wie Lesslie Newbigin hielten das Sich-Abfinden mit der Spaltung für einen Widerspruch zum Evangelium. Und die Annäherung zwischen orientalischen und östlichen Orthodoxen zeigt, dass nach 1500 Jahren Bewegung möglich ist. Was bei Menschen unmöglich ist, ist bei Gott möglich.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gericht-fragt-nicht',
      objection: `„Im Jüngsten Gericht wird Gott nicht nach deiner Konfession fragen, sondern ob du den Geringsten gedient hast (Mt 25)."`,
      objectionBy: 'Sozial engagierter Christ',
      answer: `Mt 25 ist ein ernstes Wort, und die Kirche nimmt es ganz ernst: Liebe zu den Geringsten ist Liebe zu Christus. Aber derselbe Jesus sagt: „Lehret sie halten *alles*, was ich euch befohlen habe" (Mt 28,20) – nicht nur ein Minimum. Und er warnt: „Es werden nicht alle, die zu mir sagen: Herr, Herr! in das Himmelreich kommen" (Mt 7,21). Treue in der Lehre und Treue in der Liebe gehören zusammen; wer im Kleinen treu ist, ist auch im Großen treu (Lk 16,10).`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '28,20', quote: `… und lehret sie halten alles, was ich euch befohlen habe. Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gemischte-familie',
          objection: `„Meine Frau ist evangelisch, ich bin Kopte. Heißt das, wir gehören verschiedenen Religionen an?"`,
          objectionBy: 'Gemischtkonfessioneller Ehemann (pastorale Frage)',
          answer: `Nein. Wenn ihr beide an den dreieinigen Gott glaubt und Christus als Gott und Erlöser bekennt, seid ihr Geschwister in Christus, und eure Liebe ist ein Geschenk. Zugleich besteht zwischen euren Kirchen noch keine volle Gemeinschaft im Glauben und in den Sakramenten – das ist ein Schmerz, den ihr ehrlich miteinander tragen dürft. Sprich mit deinem Priester über die konkrete kirchliche Ordnung, betet gemeinsam, lest gemeinsam die Schrift, und lebt die Einheit, die schon da ist, während ihr nach der vollen sucht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `„Hauptsache Jesus" – aber welcher Jesus? Der der Zeugen Jehovas, der Mormonen, des Korans oder der des Nizänums?`,
    `Warum betet Jesus um Heiligung „in der Wahrheit" (Joh 17,17), bevor er um Einheit betet?`,
    `Ist die Frage, ob ein Kind getauft werden soll, wirklich eine Nebensache für das Kind?`,
    `Wer entscheidet, welche Lehren „Kern" und welche „Nebensache" sind?`,
    `Ist der Satz „Alle Konfessionen sind gleich" nicht selbst eine Lehre, die du anderen auferlegst?`,
  ],
  avoid: [
    `Nicht über das ewige Heil anderer Christen urteilen („Protestanten kommen nicht in den Himmel").`,
    `Nicht so tun, als gebe es zwischen den Konfessionen nichts Gemeinsames – Taufe auf den dreieinigen Gott, Liebe zur Schrift, Bekenntnis zu Christus verbinden.`,
    `Die eigene Kirche nicht über ihre ethnische Identität verteidigen, sondern über ihren apostolischen Glauben.`,
  ],
  concessions: [
    `Konfessionsstreit hat Gewalt, Verfolgung und Spaltungen von Familien verursacht – auch Kopten haben darunter gelitten und manchmal selbst unduldsam gehandelt.`,
    `Viele Christen anderer Konfessionen leben eine tiefe, vorbildliche Liebe zu Christus.`,
    `Die Abgrenzung von „Kern" und „Nebensache" ist tatsächlich nicht immer leicht; auch innerhalb der Orthodoxie gibt es legitime Meinungsvielfalt in Randfragen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Vorwort', year: '1952', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Household of God', year: '1953', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch I,10 und III', year: 'um 180', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Ökumene', 'Einheit', 'Wahrheit', 'Indifferentismus', 'Konfessionen', 'Joh 17'],
  related: ['reformation/beziehung-statt-religion', 'reformation/reformation-noetig', 'sola-scriptura/jeder-legt-selbst-aus', 'sakramente/abendmahl-symbolisch', 'pluralismus/alle-religionen-gleich-wahr', 'orthodoxie-oekumene/nur-byzantinische-orthodoxie'],
};

export default claim;
