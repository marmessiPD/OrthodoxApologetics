import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'beichte-unbiblisch',
  title: `„Beichte vor einem Priester ist unbiblisch – nur Gott vergibt Sünden."`,
  proponents: [
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church', work: 'Predigten gegen die katholische Beichtpraxis' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe', work: 'Systematic Theology (1994), Kap. zur Vergebung und Kirchenzucht' },
    { name: 'James R. White', role: 'Reformierter Baptist', work: 'The Roman Catholic Controversy (1996)' },
    { name: 'Johannes Calvin', role: 'Reformator in Genf (1509–1564)', work: 'Institutio III,4 – Kritik der Ohrenbeichte' },
  ],
  steelman: `Als Jesus einem Gelähmten die Sünden vergab, empörten sich die Schriftgelehrten zu Recht über das Prinzip: „Wer kann Sünden vergeben denn allein Gott?" (Mk 2,7) – Jesus konnte es, weil er Gott ist; ein Priester ist es nicht. David bekannte seine Sünde direkt Gott: „An dir allein habe ich gesündigt" (Ps 51,6); „Ich sprach: Ich will dem HERRN meine Übertretungen bekennen. Da vergabst du mir" (Ps 32,5). Das NT sagt: „So wir unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt" (1 Joh 1,9) – *er*, nicht ein Priester. Wir haben einen großen Hohenpriester und dürfen „hinzutreten mit Freudigkeit zu dem Gnadenstuhl" (Hebr 4,14–16); es gibt nur einen Mittler (1 Tim 2,5). Jak 5,16 sagt „bekenne einer dem andern" – gegenseitig, nicht einem Kleriker. Joh 20,23 galt den Aposteln und meint die Verkündigung des Evangeliums, durch die Glaubenden vergeben wird. Die Pflicht zur Ohrenbeichte wurde erst 1215 vom 4. Laterankonzil eingeführt und hat in der Geschichte Gewissen geknechtet und Priestern Macht über Menschen gegeben.`,
  biblical: {
    summary: `Nur Gott vergibt Sünden – aber er hat Menschen die Vollmacht gegeben, in seinem Namen zu vergeben. Das Volk „pries Gott, der solche Macht den Menschen gegeben hat" (Mt 9,8). Der Auferstandene haucht die Apostel an: „Nehmet hin den heiligen Geist! Welchen ihr die Sünden erlasset, denen sind sie erlassen; und welchen ihr sie behaltet, denen sind sie behalten" (Joh 20,22–23). Erlassen oder Behalten setzt voraus, dass man die Sünden kennt – also Bekenntnis. Jak 5,14–16 verbindet das Rufen der Presbyter mit Gebet, Salbung, Vergebung und Bekenntnis. Schon im AT bekannte der Sünder seine Schuld, und der Priester „versöhnte" sie (Lev 5,5–6); Nathan sprach David die Vergebung zu (2 Sam 12,13).`,
    detail: `**Joh 20,21–23:** „Gleichwie mich der Vater gesandt hat, so sende ich euch." Die Sendung der Apostel setzt die Sendung Christi fort – einschließlich der Vollmacht, Sünden zu vergeben, die Jesus „auf Erden" ausübte (Mk 2,10). Das Anhauchen (*enephysēsen*) erinnert an Gen 2,7: eine Neuschöpfung. Der Text spricht nicht allgemein von Predigt, sondern von einem Urteil über konkrete Personen: „welchen ihr … erlasset … behaltet".

**Mt 9,6–8:** Jesus beweist, „daß des Menschen Sohn Macht habe, auf Erden die Sünden zu vergeben". Die Reaktion: Sie priesen Gott, „der solche Macht *den Menschen* gegeben hat" – Mehrzahl.

**Mt 16,19; 18,18:** Die Vollmacht, zu „binden und lösen", gilt im Himmel.

**2 Kor 2,10; 5,18–20:** Paulus vergibt „an Christi Statt" (*en prosōpō Christou*); Gott hat „uns das Amt gegeben, das die Versöhnung predigt".

**Jak 5,14–16 im Zusammenhang:** „Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde … und so er hat Sünden getan, werden sie ihm vergeben sein. Bekenne einer dem andern seine Sünden" – das „darum" (*oun*, in manchen Handschriften) verbindet das Bekennen mit der Szene der Presbyter.

**AT:** Lev 5,5–6 und Num 5,6–7: Der Schuldige bekennt seine Sünde und bringt ein Opfer, „und der Priester soll ihm seine Sünde versöhnen". David bekennt Nathan: „Ich habe gesündigt wider den HERRN", und der Prophet spricht: „So hat auch der HERR deine Sünde weggenommen" (2 Sam 12,13).

**NT-Praxis:** Bei Johannes dem Täufer „bekannten sie ihre Sünden" (Mt 3,6); in Ephesus „kamen auch viele derer, die gläubig waren geworden, und bekannten und verkündigten, was sie ausgerichtet hatten" (Apg 19,18).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,21–23', quote: `Da sprach Jesus abermals zu ihnen: Friede sei mit euch! Gleichwie mich der Vater gesandt hat, so sende ich euch. Und da er das gesagt, blies er sie an und spricht zu ihnen: Nehmet hin den heiligen Geist! Welchen ihr die Sünden erlasset, denen sind sie erlassen; und welchen ihr sie behaltet, denen sind sie behalten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '9,6–8', quote: `Auf daß ihr aber wisset, daß des Menschen Sohn Macht habe, auf Erden die Sünden zu vergeben (sprach er zu dem Gichtbrüchigen): Stehe auf, hebe dein Bett auf und gehe heim! … Da das Volk das sah, verwunderte es sich und pries Gott, der solche Macht den Menschen gegeben hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '18,18', quote: `Wahrlich ich sage euch: Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein, und was ihr auf Erden lösen werdet, soll auch im Himmel los sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–16', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten; und so er hat Sünden getan, werden sie ihm vergeben sein. Bekenne einer dem andern seine Sünden und betet füreinander, daß ihr gesund werdet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Samuel', ref: '12,13', quote: `Da sprach David zu Nathan: Ich habe gesündigt wider den HERRN. Nathan sprach zu David: So hat auch der HERR deine Sünde weggenommen; du wirst nicht sterben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '3. Mose', ref: '5,5–6', quote: `Wer sich verschuldet hat, soll bekennen, womit er gesündigt hat, und sein Schuldopfer bringen; und der Priester soll ihm seine Sünde versöhnen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,18', quote: `Es kamen auch viele derer, die gläubig waren geworden, und bekannten und verkündigten, was sie ausgerichtet hatten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche zählt Buße und Beichte zu den sieben Sakramenten. Der Gläubige bekennt seine Sünden vor Gott in Gegenwart des Priesters – meist seines frei gewählten „Beichtvaters" –, empfängt geistlichen Rat und die Lossprechung. Die Absolution ist ein Gebet zu Gott: Nicht der Priester aus eigener Kraft, sondern Christus vergibt durch den Dienst, den er seinen Aposteln und ihren Nachfolgern übertragen hat. Die Beichte ersetzt das persönliche Gebet um Vergebung nicht, sondern vollendet es – sie ist Arznei, Demut und Versöhnung mit der Kirche.`,
    detail: `**Frühe Zeugnisse:**
- **Didache** (um 100): „In der Gemeinde sollst du deine Übertretungen bekennen" (4,14); vor der sonntäglichen Eucharistie „nachdem ihr eure Übertretungen bekannt habt, damit euer Opfer rein sei" (14,1).
- **Origenes** (3. Jh.) nennt unter den Wegen der Vergebung die Buße, wenn der Sünder „sich nicht schämt, dem Priester des Herrn seine Sünde zu bekennen und Heilung zu suchen" – und zitiert dazu Jak 5,14 (Lev-Homilie 2,4).
- **Cyprian** (um 251) ermahnt die Gläubigen, ihre Sünden – selbst die in Gedanken erwogenen – vor den Priestern Gottes zu bekennen, solange noch Zeit ist (De lapsis 28–29).
- **Johannes Chrysostomus** staunt über die Vollmacht der Priester: Gott hat ihnen gegeben, was er weder Engeln noch Erzengeln gab; was sie auf Erden binden, bestätigt Gott im Himmel (Über das Priestertum III,5).

**Ehrlich:** Die äußere Form hat sich entwickelt. In der frühen Kirche wurden schwere Sünden oft öffentlich bekannt und durch eine öffentliche Bußzeit gesühnt (*exomologēsis*); die private Beichte setzte sich später durch – aus seelsorglicher Barmherzigkeit. Die *Pflicht* zur jährlichen Beichte wurde 1215 vom 4. Laterankonzil für die lateinische Kirche festgelegt; die koptische Kirche stand nie unter diesem Konzil und kennt die Beichte dennoch.

**Die Reformation selbst:** Das Augsburger Bekenntnis (Art. XI) lehrt, „daß man in der Kirchen privatam absolutionem erhalten und nicht fallen lassen soll". Luthers Kleiner Katechismus erklärt: Die Beichte begreift zwei Stücke – „eins, daß man die Sünde bekenne; das andere, daß man die Absolution oder Vergebung vom Beichtiger empfange als von Gott selbst". Die Ablehnung der Beichte ist also nicht einmal reformatorischer Konsens.

**Papst Schenuda III.** beschreibt in *Das Leben der Buße und Reinheit* die Beichte als Weg der Demut: Wer sich vor einem Menschen schämt, flieht künftig die Sünde; wer bekennt, erhält Rat; wer die Lossprechung hört, empfängt Frieden.`,
    sources: [
      { kind: 'kirchenvater', work: 'Didache', ref: '4,14; 14,1', year: 'um 100', quote: `In der Gemeinde sollst du deine Übertretungen bekennen und nicht mit bösem Gewissen zu deinem Gebet gehen … Am Herrentag kommt zusammen, brecht das Brot und sagt Dank, nachdem ihr zuvor eure Übertretungen bekannt habt, damit euer Opfer rein sei.`, translation: 'eigene Übersetzung (nach Lightfoot)', status: 'verbatim' },
      { kind: 'gegner', author: 'Martin Luther', work: 'Der Kleine Katechismus', ref: 'Wie man die Einfältigen soll lehren beichten', year: '1529', quote: `Was ist die Beichte? Antwort: Die Beichte begreift zwei Stücke in sich: eins, daß man die Sünde bekenne; das andere, daß man die Absolution oder Vergebung vom Beichtiger empfange als von Gott selbst und ja nicht daran zweifle, sondern fest glaube, die Sünden seien dadurch vergeben vor Gott im Himmel.`, translation: 'Original', status: 'verbatim' },
      { kind: 'gegner', work: 'Augsburger Bekenntnis (Confessio Augustana)', ref: 'Art. XI', year: '1530', quote: `Von der Beichte wird also gelehret, daß man in der Kirchen privatam absolutionem erhalten und nicht fallen lassen soll …`, translation: 'Original (Schreibweise leicht modernisiert)', status: 'verbatim' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit', quote: `Die Beichte als Weg der Demut, des geistlichen Rates und des Friedens durch die Lossprechung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, nur Gott vergibt Sünden – aber er hat Menschen die Vollmacht gegeben, in seinem Namen zu vergeben. Der Auferstandene sagte zu den Aposteln: „Nehmt hin den Heiligen Geist! Welchen ihr die Sünden erlasst, denen sind sie erlassen" (Joh 20,23). Wie soll man Sünden erlassen oder behalten, ohne sie zu kennen? Jak 5,14–16 verbindet das Bekenntnis mit den Presbytern. Und selbst Luther lehrte, man solle die Vergebung „vom Beichtiger empfangen als von Gott selbst".`,
  keyPoints: [
    `**Joh 20,22–23:** Christus überträgt die Vollmacht, Sünden zu erlassen und zu behalten – das setzt Bekenntnis voraus.`,
    `**Mt 9,8:** Gott hat „solche Macht den Menschen gegeben".`,
    `**Jak 5,14–16:** Presbyter, Gebet, Salbung, Vergebung und Bekenntnis gehören zusammen.`,
    `**AT-Muster:** Bekenntnis vor dem Priester (Lev 5,5–6), Nathans Zuspruch an David (2 Sam 12,13).`,
    `**Frühe Kirche:** Didache, Origenes, Cyprian, Chrysostomus – lange vor 1215.`,
    `**Reformation:** Luther und das Augsburger Bekenntnis behielten die Privatbeichte bei.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Verfasser von „Über das Priestertum"',
      text: `Chrysostomus beschreibt in seinem berühmten Dialog „Über das Priestertum" die Würde und die Last dieses Amtes. Die Priester, so sagt er, haben eine Vollmacht empfangen, die Gott weder Engeln noch Erzengeln gegeben hat: „Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein." Was die Priester unten tun, bestätigt Gott oben.

Das ist für Chrysostomus keine Erhöhung des Menschen über Gott, sondern Ausdruck von Gottes Herablassung: Er wirkt das Heil durch schwache Menschen, so wie er durch Wasser tauft und durch Brot nährt. Gerade deshalb fürchtete Chrysostomus das Priesteramt und floh zunächst davor.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über das Priestertum (De sacerdotio)', ref: 'III,5', year: 'um 386', quote: `Den Priestern ist eine Vollmacht gegeben, die Gott weder Engeln noch Erzengeln gab; was sie auf Erden binden, bestätigt Gott im Himmel.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cyprian',
      role: 'als Bischof nach der Verfolgung',
      text: `Nach der Verfolgung unter Decius kamen viele Gefallene zur Kirche zurück. Cyprian lobt besonders jene, die nicht einmal geopfert, sondern nur daran *gedacht* hatten – und dies dennoch „vor den Priestern Gottes mit Schmerz und Aufrichtigkeit" bekannten. Er ruft alle auf, ihre Sünde zu bekennen, solange sie leben, solange ihr Bekenntnis angenommen werden kann und die durch die Priester gewährte Genugtuung und Vergebung vor dem Herrn gilt.

Bei Cyprian sieht man: Bekenntnis vor dem Priester, Buße und Versöhnung durch die Kirche waren Mitte des 3. Jahrhunderts selbstverständlich.`,
      sources: [
        { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Gefallenen (De lapsis)', ref: '28–29', year: '251', quote: `Cyprian lobt die, die selbst ihre bloßen Gedanken an den Abfall vor den Priestern Gottes bekennen, und mahnt alle, ihre Sünde zu bekennen, solange das Bekenntnis noch angenommen werden kann.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Zeuge der Bußpraxis (mit Vorbehalt)',
      text: `Origenes zählt in einer Predigt über Levitikus sieben Wege der Sündenvergebung auf: Taufe, Martyrium, Almosen, Vergebung gegenüber anderen, Bekehrung eines Sünders, Fülle der Liebe – und als siebten die mühevolle Buße, wenn der Sünder „sein Lager mit Tränen wäscht" und sich nicht schämt, dem Priester des Herrn seine Sünde zu bekennen und Arznei zu suchen. Dazu zitiert er ausdrücklich Jak 5,14: „Ist jemand krank, der rufe die Ältesten der Gemeinde."

In einer Psalmenpredigt rät Origenes, sich sorgfältig einen erfahrenen „Arzt" zu suchen, dem man die Sünde bekennt und der beurteilt, ob ein öffentliches Bekenntnis nötig ist – ein frühes Bild des „Beichtvaters".`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Levitikus', ref: '2,4', quote: `Der siebte Weg der Vergebung ist die Buße, wenn der Sünder sich nicht schämt, dem Priester des Herrn seine Sünde zu bekennen und Heilung zu suchen, nach Jak 5,14.`, status: 'paraphrase', note: 'In Rufins lateinischer Übersetzung erhalten.' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zu Psalm 37', ref: '2,6', quote: `Rat, sich einen erfahrenen geistlichen Arzt zu suchen, dem man die Sünde bekennt und der über ein öffentliches Bekenntnis urteilt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Buße',
      text: `Papst Schenuda III. hat die Beichte für Generationen von Kopten als befreiende Erfahrung beschrieben – nicht als Verhör. Der Beichtvater ist Vater, Arzt und Wegbegleiter; die Beichte ist zugleich Bekenntnis vor Gott, Demütigung des Stolzes, geistliche Beratung und Empfang der Vergebung durch das Gebet der Kirche. Er betont, dass niemand gezwungen ist, einen bestimmten Priester zu wählen, und dass das Beichtgeheimnis absolut ist.

Für Schenuda widerspricht die Beichte nicht dem direkten Gebet zu Gott – sie setzt es voraus: Wer in der Beichte nur aufzählt, ohne vorher vor Gott Reue empfunden zu haben, hat ihren Sinn nicht verstanden.`,
    },
  ],
  dialog: [
    {
      id: 'wer-kann-vergeben',
      objection: `„‚Wer kann Sünden vergeben denn allein Gott?' (Mk 2,7). Ein Priester ist ein Mensch und hat keine Vollmacht, Sünden zu vergeben."`,
      objectionBy: 'John MacArthur',
      answer: `Das war der Einwand der Schriftgelehrten – und Jesus widerlegte ihn: Der Menschensohn hat Macht, *auf Erden* Sünden zu vergeben (Mk 2,10). Das Volk pries daraufhin Gott, „der solche Macht *den Menschen* gegeben hat" (Mt 9,8). Nach seiner Auferstehung gab er diese Vollmacht den Aposteln (Joh 20,23). Der Priester vergibt nicht aus eigener Kraft, sondern als Diener Christi – die koptische Absolution ist ein Gebet zu Gott.`,
      followUps: [
        {
          id: 'nur-aposteln',
          objection: `„Joh 20,23 galt nur den Aposteln persönlich – nicht späteren Priestern."`,
          objectionBy: 'Wayne Grudem',
          answer: `Mit derselben Begründung könntest du sagen, auch der Taufbefehl (Mt 28,19) galt nur den Aposteln. Den wendest du aber auf heute an – weil Christus hinzufügt: „Ich bin bei euch alle Tage bis an der Welt Ende." Die Apostel setzten Nachfolger ein (Apg 14,23; 2 Tim 2,2), und Clemens von Rom bezeugt um 96, dass sie für die Nachfolge im Amt sorgten (1 Clem 44). Die Vollmacht war für die Kirche gegeben, nicht nur für zwölf Männer.`,
          followUps: [
            {
              id: 'verkuendigung-gemeint',
              objection: `„Joh 20,23 meint die Verkündigung des Evangeliums: Wer glaubt, dem sind die Sünden vergeben; wer nicht glaubt, dem bleiben sie."`,
              objectionBy: 'reformierte Ausleger',
              answer: `Der Text spricht nicht allgemein von Predigt, sondern von einem Urteil über Personen: „welchen ihr erlasset … welchen ihr behaltet". Um Sünden zu „behalten", muss man sie kennen – das setzt Bekenntnis voraus. Und Luther selbst verstand es nicht als bloße Predigt: Er lehrt, man solle die Absolution „vom Beichtiger empfangen als von Gott selbst und ja nicht daran zweifeln".`,
              questionsBack: [
                `Wie kann jemand Sünden „behalten", ohne zu wissen, welche Sünden er behält?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'einander-bekennen',
      objection: `„Jak 5,16 sagt: ‚Bekenne einer dem andern seine Sünden.' Das ist gegenseitig, unter allen Gläubigen – nicht einem Priester."`,
      objectionBy: 'James White',
      answer: `Lies V. 14–15 mit: „Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde … und so er hat Sünden getan, werden sie ihm vergeben sein." Erst dann: „Bekenne einer dem andern seine Sünden." Die Szene ist die der Presbyter. „Einander" schließt den Presbyter nicht aus – so wie „seid einander untertan" (Eph 5,21) die besonderen Rollen nicht aufhebt. Die koptische Kirche kennt beides: das Bekenntnis vor dem Priester und die gegenseitige Versöhnung, etwa vor der Liturgie.`,
      followUps: [
        {
          id: 'freund-beichten',
          objection: `„Dann kann ich genauso gut einem Freund beichten."`,
          objectionBy: 'James White',
          answer: `Einem Freund seine Last anzuvertrauen und ihn um Gebet zu bitten, ist gut und biblisch. Aber die Vollmacht, im Namen Christi loszusprechen (Joh 20,23), hat Christus nicht jedem gegeben, sondern denen, die er sandte. So wie jeder Christ einen Rat geben, aber nicht jeder in der Kirche ordinieren kann (1 Tim 5,22; Tit 1,5). Ordnung im Leib Christi ist kein Misstrauen gegen die Laien, sondern ein Geschenk an sie.`,
        },
      ],
    },
    {
      id: 'direkter-zugang',
      objection: `„Christus ist unser einziger Hohepriester; durch ihn haben wir direkten Zugang zum Gnadenthron (Hebr 4,14–16). Wozu brauche ich einen menschlichen Vermittler?"`,
      objectionBy: 'R. C. Sproul',
      answer: `Den direkten Zugang haben wir – Kopten beten jeden Tag mit der Agpeya und bitten Gott persönlich um Vergebung. Der Priester ersetzt diesen Zugang nicht, er ist ein Werkzeug Christi. Gott wirkt gern durch Menschen: Paulus wurde nach seiner Begegnung mit Christus zu Hananias geschickt, um sehend und getauft zu werden (Apg 9,17–18); David hörte die Vergebung aus Nathans Mund. Und Jak 5,16 nennt den Sinn: „daß ihr gesund werdet".`,
      followUps: [
        {
          id: 'machtmissbrauch',
          objection: `„Die Beichte macht abhängig vom Priester und öffnet dem Machtmissbrauch die Tür – die Geschichte zeigt das."`,
          objectionBy: 'John MacArthur',
          answer: `Ehrlich: Missbrauch ist möglich und ist vorgekommen – wie bei jeder geistlichen Autorität, auch bei Predigern. Die Kirche schützt die Beichtenden: Das Beichtgeheimnis ist absolut, der Priester ist selbst ein Beichtender, und in der koptischen Praxis wählt man seinen Beichtvater frei. Der Missbrauch einer Gabe hebt die Gabe nicht auf – sonst müsste man auch das Predigen abschaffen, weil es Irrprediger gibt.`,
        },
      ],
    },
    {
      id: 'lateran-1215',
      objection: `„Die Ohrenbeichte wurde erst 1215 vom 4. Laterankonzil eingeführt. Sie ist eine mittelalterliche Erfindung."`,
      objectionBy: 'Johannes Calvin / populäre Literatur',
      answer: `Das 4. Laterankonzil hat die jährliche Beichte für die lateinische Kirche zur *Pflicht* gemacht – erfunden hat es die Beichte nicht. Sie ist bezeugt in der Didache (um 100), bei Irenäus, Tertullian, Origenes, Cyprian, Basilius und Chrysostomus. Und die koptische Kirche stand nie unter einem Laterankonzil – trotzdem kennt sie die Beichte seit alters. Ehrlich ist: Die äußere Form hat sich entwickelt, von der öffentlichen Buße für schwere Sünden zur privaten Beichte.`,
      sources: [
        { kind: 'konzil', work: '4. Laterankonzil', ref: 'Kanon 21 („Omnis utriusque sexus")', year: '1215', quote: `Pflicht für alle Gläubigen der lateinischen Kirche, wenigstens einmal im Jahr dem eigenen Priester zu beichten.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'nur-oeffentliche-busse',
          objection: `„Die frühe Kirche kannte nur öffentliche Buße für schwere Sünden – keine Privatbeichte. Das ist ein großer Unterschied."`,
          objectionBy: 'Kirchenhistoriker',
          answer: `Die Form hat sich entwickelt, der Kern blieb: Bekenntnis der Sünden vor dem Diener der Kirche und Versöhnung durch ihn. Schon Cyprian beschreibt das Bekenntnis vor den Priestern, und Origenes rät, sich einen erfahrenen geistlichen Arzt zu suchen, dem man privat bekennt und der entscheidet, ob ein öffentliches Bekenntnis nötig ist. Die private Beichte entstand aus Barmherzigkeit – um Sündern die öffentliche Beschämung zu ersparen.`,
          followUps: [
            {
              id: 'luther-freiwillig',
              objection: `„Luther hat die Beichte zwar beibehalten – aber freiwillig und ohne die Pflicht, alle Sünden aufzuzählen."`,
              objectionBy: 'lutherische Theologen',
              answer: `Richtig – und das zeigt, dass die Beichte selbst nach reformatorischen Maßstäben nicht „unbiblisch" ist (Augsburger Bekenntnis XI). Die meisten heutigen Evangelikalen haben sogar diese lutherische Praxis aufgegeben. Auch die koptische Beichte ist kein mechanisches Aufzählen; ihr Ziel ist Heilung und Versöhnung, nicht ein vollständiges Protokoll.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was bedeutet für dich Joh 20,23: „Welchen ihr die Sünden erlasst, denen sind sie erlassen"?`,
    `Warum pries das Volk Gott, „der solche Macht *den Menschen* gegeben hat" (Mt 9,8)?`,
    `Wie verstehst du, dass Jak 5 das Bekennen der Sünden mit dem Rufen der Presbyter verbindet?`,
    `Wusstest du, dass Luther und das Augsburger Bekenntnis die Privatbeichte beibehielten?`,
  ],
  avoid: [
    `Sagen, der Priester vergebe aus eigener Macht. Er ist Diener Christi; die Absolution ist ein Gebet zu Gott.`,
    `Behaupten, die Beichte sei in ihrer heutigen Form seit den Aposteln unverändert. Die äußere Gestalt hat sich entwickelt.`,
    `Den Eindruck erwecken, Kopten bräuchten kein persönliches Gebet um Vergebung. Das Gegenteil ist der Fall.`,
  ],
  concessions: [
    `Die Form der Beichte hat sich entwickelt: von der öffentlichen Buße für schwere Sünden zur privaten Beichte.`,
    `Im spätmittelalterlichen Westen wurde die Beichte teils mit Angst und Machtausübung verbunden – die Kritik der Reformatoren hatte Anlass.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über das Priestertum (De sacerdotio)', year: 'um 386', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Gefallenen (De lapsis)', year: '251', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Beichte', 'Buße', 'Absolution', 'Priestertum', 'Johannes 20'],
  related: [
    'sakramente/kein-besonderes-priestertum',
    'sakramente/myron-krankensalbung-erfunden',
    'sola-fide/einmal-gerettet-immer-gerettet',
    'heilige-ikonen/fuerbitte-der-heiligen',
  ],
};

export default claim;
