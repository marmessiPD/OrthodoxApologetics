import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ahnenverehrung-wie-heilige',
  title: `„Ahnenverehrung (Shinto, afrikanische Religionen) ist dasselbe wie Heiligenverehrung."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator (1509–1564)', work: 'Institutio Christianae Religionis III,20,21–27 (gegen die Anrufung der Heiligen)' },
    { name: 'Conyers Middleton', role: 'Anglikanischer Theologe (1683–1750)', work: 'A Letter from Rome, Showing an Exact Conformity between Popery and Paganism (1729)' },
    { name: 'Religionsphänomenologische Vergleiche', role: 'Religionswissenschaftliche Einführungen, die Ahnen- und Heiligenkult als Varianten derselben Struktur („Kult der Toten") behandeln' },
    { name: 'Vertreter afrikanischer und ostasiatischer Traditionen', role: 'Argumentieren, das Christentum verurteile bei ihnen, was es selbst praktiziere' },
  ],
  steelman: `Man betrachte nur, was äußerlich geschieht: In beiden Fällen wenden sich Lebende an Verstorbene, sprechen mit ihnen, bitten um Hilfe und Schutz, zünden Kerzen oder Räucherwerk an, bewahren Bilder oder Reliquien auf, feiern Todestage und glauben, dass die Toten gegenwärtig und wirkmächtig sind. In Japan stehen im Hausaltar die Gedenktafeln der Ahnen; in China wurden Ahnentafeln verehrt; in vielen afrikanischen Kulturen gelten die Ahnen als Mittler zwischen den Lebenden und dem fernen Hochgott – exakt die Rolle, die Heilige als Fürsprecher bei Gott spielen. Die katholische Kirche erlaubte 1939 sogar die konfuzianischen Ahnenriten. Wenn Christen nun afrikanische oder japanische Ahnenverehrung „heidnisch" nennen, die eigene Heiligenverehrung aber „fromm", messen sie mit zweierlei Maß. Protestanten ergänzen: Die Bibel verbietet jede Befragung der Toten (Dtn 18,10–12) und kennt nur einen Mittler (1 Tim 2,5) – also sind beide Praktiken gleichermaßen unbiblisch.`,
  biblical: {
    summary: `Gott ist „nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle" (Lk 20,38). Die Heiligen sind in Christus lebendig, umgeben uns als „Wolke der Zeugen" (Hebr 12,1) und bringen die Gebete der Heiligen vor Gottes Thron (Offb 5,8; 8,3–4); die Seelen der Märtyrer beten (Offb 6,9–10). Fürbitte füreinander ist biblisch geboten (1 Tim 2,1; Jak 5,16) und wird durch den Tod nicht aufgehoben (Röm 8,38–39). Verboten sind dagegen Totenbefragung, Wahrsagerei und Beschwörung (Dtn 18,10–12; Jes 8,19) sowie Opfer an Geister (1 Kor 10,20).`,
    detail: `**Der Unterschied liegt nicht in der Geste, sondern in der Beziehung:**
- *Grundlage:* Heilige werden geehrt, weil sie durch Christus geheiligt sind – nicht wegen Blutsverwandtschaft. Ahnen werden geehrt, weil sie die Vorfahren sind, unabhängig von ihrer Heiligkeit.
- *Richtung:* Heilige brauchen nichts von uns; sie sind bei Gott vollendet. In vielen Ahnentraditionen müssen die Toten versorgt, gespeist und besänftigt werden, sonst können sie Unglück bringen.
- *Opfer:* Der Kirche gilt jedes Opfer allein Gott; die Eucharistie wird Gott dargebracht, nicht den Heiligen.
- *Kommunikation:* Man bittet die Heiligen um Fürbitte – wie einen Freund –, aber man befragt sie nicht als Orakel, ruft sie nicht durch Medien herbei und erwartet keine Auskünfte über die Zukunft.

**Biblische Hinweise auf die Fürbitte Verstorbener:** In 2 Makk 15,12–14 sieht Judas Makkabäus den verstorbenen Propheten Jeremia, „der viel für das Volk betet". Jer 15,1 setzt voraus, dass Mose und Samuel vor Gott fürbitten. Auf dem Berg der Verklärung sprechen Mose und Elia mit Jesus (Mt 17,3).`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '20,38', quote: `Gott aber ist nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '12,1', quote: `Darum auch wir, dieweil wir solchen Haufen Zeugen um uns haben, lasset uns ablegen die Sünde, so uns immer anklebt und träge macht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '5,8', quote: `… und hatten ein jeglicher Harfen und goldene Schalen voll Räuchwerk, das sind die Gebete der Heiligen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '18,10–12', quote: `Unter dir soll niemand gefunden werden, der Wahrsagerei, Zeichendeuterei, Zauberei oder Beschwörung treibt oder die Toten befragt; denn wer solches tut, ist dem HERRN ein Gräuel.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Jesaja', ref: '8,19', quote: `Soll nicht ein Volk seinen Gott fragen? Oder soll man die Toten für die Lebendigen fragen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '15,12–14', quote: `Judas sieht im Traum den Propheten Jeremia, von dem es heißt, er sei ein Freund der Brüder, der viel für das Volk und die heilige Stadt bete.`, status: 'paraphrase', note: 'Deuterokanonisch; in der koptischen Kirche Teil der Schrift.' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ehrt die Heiligen als lebendige Glieder des einen Leibes Christi und bittet um ihre Fürbitte; im Gedächtnis der Heiligen (Diptychen) der Liturgie werden die Gottesgebärerin, Johannes der Täufer, die Apostel, Märtyrer und Väter genannt, und das Synaxarium wird täglich gelesen. Zugleich betet die Kirche für ihre Entschlafenen (am dritten und vierzigsten Tag und am Jahrestag). Angebetet wird allein Gott; das eucharistische Opfer gilt Gott allein. Papst Schenuda III. hat die Fürbitte der Heiligen in seinen Vorträgen zur vergleichenden Theologie biblisch begründet und von jeder Vergötterung abgegrenzt.`,
    detail: `Schon in der Alten Kirche wurde der Vorwurf erhoben, Christen verehrten Tote wie die Heiden. Kaiser Julian („der Abtrünnige") warf den Christen vor, an Gräbern zu beten; der hl. Kyrill von Alexandrien antwortete ihm, dass die Christen die Märtyrer nicht als Götter anbeten, sondern als Kämpfer der Wahrheit ehren. Augustinus formuliert denselben Unterschied: Christen bauen den Märtyrern keine Tempel als Göttern und bringen ihnen keine Opfer dar; das Opfer an ihren Gedenkstätten wird Gott allein dargebracht. Die Kirche zieht die Grenze also nicht bei der Erinnerung an die Toten, sondern bei Opfer, Anbetung und Beschwörung.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'VIII,27', quote: `Wir errichten unseren Märtyrern keine Tempel wie Göttern und bringen ihnen keine Opfer dar; an ihren Gedächtnisstätten wird das Opfer dem einen Gott dargebracht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Gegen Julian (Contra Iulianum)', ref: 'Buch X', quote: `Gegen Julians Vorwurf der Gräberverehrung: Die Christen beten die Märtyrer nicht an, sondern ehren sie als Zeugen der Wahrheit.`, status: 'paraphrase', note: 'Buchangabe nach der üblichen Einteilung; vor wörtlicher Verwendung prüfen.' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie (Comparative Theology)', quote: `Biblische Begründung der Fürbitte der Heiligen und Abgrenzung von jeder Anbetung von Geschöpfen.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Liturgie des hl. Basilius (koptisch)', ref: 'Gedächtnis der Heiligen (Diptychen)', quote: `Die Kirche gedenkt der Gottesgebärerin, des Täufers, der Apostel, Märtyrer und Väter und bittet um ihre Fürbitte.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `„Ahnenverehrung" ist kein einheitliches Phänomen. In vielen afrikanischen Traditionen gelten die Ahnen als „lebende Tote" (John Mbiti): Sie bleiben Teil der Familie, solange sich jemand persönlich an sie erinnert, wirken als Hüter der Sitte und als Mittler zum Hochgott, erwarten aber Gaben und Achtung und können bei Vernachlässigung Unglück senden. Im japanischen Shinto werden Ahnen nach bestimmten Riten zu *kami*. In China war die Ahnenverehrung Teil der konfuzianischen Familienethik. Die Grenze zwischen Ehrung und Anbetung wird innerhalb dieser Traditionen selbst unterschiedlich gezogen.`,
    detail: `**Der Ritenstreit:** Jesuiten wie Matteo Ricci hielten die konfuzianischen Ahnenriten für bürgerliche Pietät; Rom verbot sie 1715 (*Ex illa die*) und bestätigte das Verbot 1742, erlaubte sie aber 1939 (*Plane compertum est*), nachdem sie staatlicherseits als bürgerliche Zeremonien erklärt worden waren. Protestantische Missionen urteilten uneinheitlich.

**Afrikanische Theologie:** Kwame Bediako und andere entwickelten eine „Ahnen-Christologie": Christus ist der wahre, höchste Ahne, der durch Tod und Auferstehung die Rolle der Ahnen erfüllt und überbietet. Kritiker sehen darin die Gefahr des Synkretismus.

**Forschung zur Heiligenverehrung:** Der Historiker Peter Brown (*The Cult of the Saints*, 1981) hat die ältere These, der Heiligenkult sei eine Fortsetzung heidnischer Heroen- und Ahnenkulte durch das „einfache Volk", als zu grob zurückgewiesen; er sieht ihn als neue christliche Form, die aus der Verehrung der Märtyrergräber erwuchs.`,
    sources: [
      { kind: 'fachliteratur', author: 'John S. Mbiti', work: 'African Religions and Philosophy', year: '1969', quote: `Die Verstorbenen bleiben als „lebende Tote" Teil der Familie, solange Lebende sich persönlich an sie erinnern („persönliche Unsterblichkeit").`, original: `the living-dead`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kwame Bediako', work: 'Jesus in Africa: The Christian Gospel in African History and Experience', year: '2000', quote: `Christus als der höchste Ahne, der die Rolle der Ahnen erfüllt und ihre Macht relativiert.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Peter Brown', work: 'The Cult of the Saints: Its Rise and Function in Latin Christianity', year: '1981', quote: `Kritik am „Zwei-Stufen-Modell", das den Heiligenkult als Fortsetzung des Heidentums im Volk erklärt.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Instruktion „Plane compertum est" der Kongregation für die Glaubensverbreitung', year: '1939', quote: `Erlaubnis bestimmter Ehrenbezeugungen vor Konfuzius und den Ahnen, da sie als bürgerliche Zeremonien gelten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Äußerlich ähnelt sich manches – Kerzen, Bilder, Gedenktage. Aber Heilige werden nicht wegen Blutsverwandtschaft geehrt, sondern weil sie in Christus heilig und bei Gott lebendig sind (Lk 20,38). Sie brauchen von uns weder Nahrung noch Besänftigung, und wir bringen ihnen keine Opfer, sondern bitten sie um ihr Gebet – wie man einen Freund bittet. Befragung der Toten, Beschwörung und Opfer an Geister verbietet die Bibel; das tut die Kirche nicht.`,
  keyPoints: [
    `**Grundlage:** Heilige sind durch Christus geheiligt; Ahnen werden aufgrund der Abstammung geehrt.`,
    `**Beziehung:** Heilige brauchen nichts von uns; viele Ahnentraditionen kennen Versorgungspflichten und die Furcht vor zürnenden Toten.`,
    `**Opfer:** Die Kirche bringt jedes Opfer allein Gott dar (Augustinus, De civ. Dei VIII,27).`,
    `**Keine Nekromantie:** Fürbitte erbitten ist nicht Totenbefragung (Dtn 18,10–12); kein Medium, kein Orakel.`,
    `**Lebendig in Gott:** Gott ist der Lebendigen Gott (Lk 20,38); die Heiligen beten vor seinem Thron (Offb 5,8).`,
    `**Erfüllung:** Das berechtigte Anliegen – Verbundenheit mit den Vorfahren, Ehrung der Eltern (Ex 20,12) – findet in der Gemeinschaft der Heiligen und im Gebet für die Entschlafenen seinen Ort.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Zeuge der altkirchlichen Unterscheidung',
      text: `Augustinus beschreibt um 420 genau den Unterschied, um den es geht: Christen ehren die Märtyrer, aber sie errichten ihnen keine Tempel und bringen ihnen keine Opfer dar. An den Gräbern der Märtyrer wird das eucharistische Opfer gefeiert – aber es gilt dem Gott der Märtyrer. Damit grenzt er die christliche Praxis bewusst vom heidnischen Totenkult seiner Zeit ab.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'VIII,27', quote: `Den Märtyrern werden keine Opfer dargebracht, sondern dem Gott der Märtyrer.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Apologet gegen Kaiser Julian',
      text: `Kyrill musste sich mit dem schärfsten antiken Kritiker auseinandersetzen: Julian warf den Christen vor, das Grab eines Gekreuzigten und die Gräber der Märtyrer zu verehren wie Heiden ihre Toten. Kyrill antwortet, dass die Christen keine Toten anbeten, sondern Christus, der lebt, und dass sie die Märtyrer ehren, weil diese bis zum Tod für die Wahrheit Zeugnis gaben – ihre Ehre fällt auf Christus zurück.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Contra Iulianum', quote: `Verteidigung der Märtyrerehrung gegen den Vorwurf heidnischen Totenkults.`, status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Lehrer der Fürbitte',
      text: `Papst Schenuda III. erklärte seinen Gemeinden, dass die Fürbitte der Heiligen aus der Liebe folgt: Wer auf Erden für andere betete, hört damit im Himmel nicht auf. Er grenzte scharf ab: Heilige sind keine Götter, sie wirken nichts aus eigener Macht und empfangen keine Anbetung. Ihre Fürbitte ist Gebet zu Gott, nicht Ersatz für Gott.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Comparative Theology', quote: `Die Fürbitte der Heiligen als Ausdruck der Liebe im einen Leib Christi.`, status: 'paraphrase' }],
    },
    {
      person: 'kwame-bediako',
      role: 'als afrikanischer Theologe',
      text: `Bediako, Theologe aus Ghana, nahm die Ahnen ernst, ohne sie zu vergöttern. Er deutet Christus als den einen wahren Ahnen: Er ist Mensch geworden, gestorben und auferstanden, er sitzt zur Rechten Gottes und erfüllt die Funktion, die afrikanische Menschen von den Ahnen erwarteten – Schutz, Fürsprache, Verbindung mit Gott. Dadurch werden die Ahnen nicht verachtet, aber entmachtet: Wer Christus hat, muss die Toten nicht mehr fürchten.`,
      sources: [{ kind: 'fachliteratur', author: 'Kwame Bediako', work: 'Jesus in Africa', year: '2000', quote: `Christus als höchster Ahne, der die Furcht vor den Ahnengeistern überwindet.`, status: 'paraphrase' }],
    },
    {
      person: 'john-mbiti',
      role: 'als Erforscher afrikanischer Religionen',
      text: `Mbiti beschrieb die Ahnen afrikanischer Gesellschaften als „lebende Tote", die so lange zur Familie gehören, wie sich Lebende persönlich an sie erinnern. Gerade diese Beschreibung zeigt den Unterschied zur Gemeinschaft der Heiligen: Die Fortexistenz der Ahnen hängt am Gedächtnis der Nachkommen; die Heiligen leben, weil sie in Gott leben – unabhängig davon, ob jemand sich an sie erinnert.`,
      sources: [{ kind: 'fachliteratur', author: 'John S. Mbiti', work: 'African Religions and Philosophy', year: '1969', quote: `Die „lebenden Toten" und ihre „persönliche Unsterblichkeit" im Gedächtnis der Lebenden.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'gleiche-struktur',
      objection: `Phänomenologisch ist es dasselbe: Man spricht mit Verstorbenen, bittet um Hilfe, zündet Kerzen an, hat Bilder und Gedenktage. Der Unterschied ist nur das Etikett.`,
      objectionBy: 'Religionsphänomenologischer Vergleich',
      answer: `Gleiche Gesten können völlig Verschiedenes bedeuten – ein Kuss kann Liebe sein oder Verrat (Lk 22,48). Entscheidend sind Grund und Inhalt: Heilige werden geehrt, weil sie in Christus heilig sind, nicht weil sie meine Vorfahren sind. Sie brauchen von mir weder Speise noch Besänftigung. Und ihnen wird kein Opfer gebracht – nur Gott.`,
      questionsBack: [`Wäre für dich ein Kuss von Judas dasselbe wie ein Kuss einer Mutter, weil die Geste gleich ist?`],
      followUps: [
        {
          id: 'afrikaner-bitten-nur',
          objection: `Viele Afrikaner bitten ihre Ahnen auch nur, beim Hochgott Fürsprache einzulegen. Das ist exakt die Rolle eurer Heiligen.`,
          objectionBy: 'Afrikanische Religionswissenschaftler',
          answer: `Hier gibt es echte Nähe – das gebe ich zu, und afrikanische Theologen wie Kwame Bediako haben sie ernst genommen. Aber es bleiben Unterschiede: Ahnen erhalten ihren Rang durch Abstammung und richtige Bestattung, nicht durch Heiligkeit; sie erwarten Trankopfer und Gaben und können strafen, wenn man sie vernachlässigt. Die Heiligen wollen nichts für sich und strafen niemanden. Christus erfüllt die Sehnsucht nach einem Fürsprecher – und nimmt die Furcht.`,
          followUps: [
            {
              id: 'kopten-bringen-gaben',
              objection: `Auch Kopten bringen Kerzen, Weihrauch und Gelübde-Gaben zu den Heiligen, schreiben Briefe an ihre Gräber und feiern Volksfeste an ihren Gedenktagen. Das sind doch Gaben an Tote!`,
              objectionBy: 'Religionsethnologische Beobachtung',
              answer: `In der Volksfrömmigkeit verschwimmen manchmal Grenzen – das ist ehrlich zuzugeben. Die Lehre der Kirche ist aber klar: Die Kerze ist ein Zeichen des Gebets, Gelübde-Gaben gehen an die Kirche und die Armen, der Weihrauch wird Gott dargebracht und ehrt die Person, die auf der Ikone dargestellt ist (Offb 8,3–4). Niemand glaubt, dass der Heilige die Kerze „braucht" oder zürnt, wenn sie fehlt.`,
              followUps: [
                {
                  id: 'theorie-vs-praxis',
                  objection: `Schön, eure offizielle Lehre. Aber im gelebten Volksglauben ist kein Unterschied zu erkennen.`,
                  objectionBy: 'Religionsethnologen',
                  answer: `Dann vergleichen wir fair: Lehre mit Lehre, Volksglauben mit Volksglauben. Die Kirche hat eine Norm, an der sie Missbräuche messen und korrigieren kann – und Priester tun das. Ein Missbrauch hebt den rechten Gebrauch nicht auf. Gerade weil die Kirche zwischen Ehrung und Anbetung unterscheidet, kann sie Aberglauben überhaupt als Aberglauben benennen.`,
                  questionsBack: [`Gibt es in der Ahnenverehrung eine Instanz, die festlegt, wann Ehrung zur Anbetung wird?`],
                },
              ],
            },
          ],
        },
        {
          id: 'warum-nicht-direkt',
          objection: `Wenn ihr ohnehin zu Gott betet – warum dann überhaupt die Heiligen anrufen? Das ist doch derselbe Umweg wie bei den Ahnen.`,
          objectionBy: 'Protestantische Kritik',
          answer: `Wir beten direkt zu Gott – in jeder Liturgie und jedem Stundengebet der Agpeya. Die Bitte um Fürbitte ist kein Umweg, sondern Gemeinschaft: So wie Paulus die Gemeinden bat, für ihn zu beten (Röm 15,30), bitten wir die Glieder des Leibes Christi, die schon bei Gott sind. „Des Gerechten Gebet vermag viel" (Jak 5,16).`,
          sources: [{ kind: 'bibel', work: 'Jakobus', ref: '5,16', quote: `Des Gerechten Gebet vermag viel, wenn es ernstlich ist.`, translation: 'Luther 1912', status: 'verbatim' }],
        },
      ],
    },
    {
      id: 'tote-befragen-verboten',
      objection: `Die Bibel verbietet ausdrücklich, sich an Tote zu wenden (Dtn 18,10–12). Heiligenanrufung ist also genauso verboten wie afrikanische Ahnenbefragung.`,
      objectionBy: 'Protestantische Kritiker (z. B. in der Tradition Calvins)',
      answer: `Dtn 18 verbietet Totenbefragung: das Einholen von Auskünften über Verborgenes und Zukünftiges durch Medien, Beschwörung und Wahrsagerei. Niemand in der Kirche ruft Heilige herbei, um Auskünfte zu erhalten. Wir bitten sie zu beten – so wie man einen lebenden Freund bittet. Und die Heiligen sind lebendig: „Gott ist nicht der Toten, sondern der Lebendigen Gott; denn sie leben ihm alle" (Lk 20,38).`,
      followUps: [
        {
          id: 'heilige-hoeren-nicht',
          objection: `Wie sollen Heilige Millionen Gebete gleichzeitig hören? Dafür müssten sie allwissend sein wie Gott.`,
          objectionBy: 'Protestantische Kritiker',
          answer: `Sie müssen nicht allwissend sein; sie wissen, was Gott ihnen zu wissen gibt. Die Offenbarung zeigt die Ältesten mit den „Gebeten der Heiligen" vor dem Thron (Offb 5,8), und Jesus sagt, dass im Himmel Freude ist über einen Sünder, der umkehrt (Lk 15,7.10) – man weiß dort also, was auf Erden geschieht. Außerdem sind sie nicht mehr an unsere Zeit gebunden.`,
          followUps: [
            {
              id: 'ein-mittler',
              objection: `„Es ist ein Mittler zwischen Gott und den Menschen, der Mensch Christus Jesus" (1 Tim 2,5). Jede weitere Fürsprache verdunkelt Christus.`,
              objectionBy: 'Protestantische Kritiker',
              answer: `Lies den Zusammenhang: Unmittelbar davor ruft Paulus zu „Bitte, Gebet, Fürbitte und Danksagung für alle Menschen" auf (1 Tim 2,1). Die Mittlerschaft Christi ist die der Erlösung – sie teilt er mit niemandem. Fürbitte unter den Gliedern seines Leibes verdunkelt ihn nicht, sie lebt von ihm. Wenn deine Gemeinde für dich betet, nimmt sie Christus nichts weg.`,
              sources: [{ kind: 'bibel', work: '1. Timotheus', ref: '2,5', quote: `Denn es ist ein Gott und ein Mittler zwischen Gott und den Menschen, nämlich der Mensch Christus Jesus.`, translation: 'Luther 1912', status: 'verbatim' }],
              followUps: [
                {
                  id: 'tote-schlafen',
                  objection: `Die Toten wissen gar nichts (Pred 9,5). Sie schlafen bis zur Auferstehung. Also können sie auch nicht beten.`,
                  objectionBy: 'Adventistische und andere Seelenschlaf-Lehren',
                  answer: `Der Prediger beschreibt das Leben „unter der Sonne" – aus irdischer Sicht hat der Tote keinen Anteil mehr an dem, was hier geschieht. Das Neue Testament zeigt mehr: Paulus will „abscheiden und bei Christus sein" (Phil 1,23), dem Schächer wird „heute" das Paradies verheißen (Lk 23,43), die Seelen der Märtyrer rufen zu Gott (Offb 6,9–10). „Schlafen" ist ein Bild für den Tod des Leibes, nicht für bewusstloses Nichtsein der Seele.`,
                  questionsBack: [`Wie kann Paulus das Sterben „Gewinn" nennen (Phil 1,21), wenn es bewusstloses Nichts wäre?`],
                },
              ],
            },
          ],
        },
        {
          id: 'endor-samuel',
          objection: `In 1 Sam 28 erscheint Samuel wirklich, als Saul die Totenbeschwörerin aufsucht. Kontakt mit Toten funktioniert also – und genau das macht ihr mit euren Heiligen.`,
          objectionBy: 'Spiritistische und religionswissenschaftliche Deutung',
          answer: `Die Geschichte ist eine Warnung, kein Vorbild: Saul starb, „weil er die Wahrsagerin fragte" (1 Chr 10,13). Die Kirche sucht keine Erscheinungen und befragt keine Toten. Zwischen der Bitte „Bete für mich" und der Beschwörung eines Geistes, um die Zukunft zu erfahren, liegt genau der Unterschied, den die Bibel zieht.`,
          sources: [{ kind: 'bibel', work: '1. Chronik', ref: '10,13', quote: `Saul starb um seiner Missetat willen, weil er sich am HERRN versündigt hatte und auch die Wahrsagerin gefragt hatte.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase' }],
        },
      ],
    },
    {
      id: 'christen-entehren-ahnen',
      objection: `Das Christentum zwingt Afrikaner und Japaner, ihre Ahnen zu verleugnen. Das ist kulturelle Gewalt – die Missionare haben uns gelehrt, unsere eigenen Großeltern zu verachten.`,
      objectionBy: 'Afrikanische und japanische Kritiker der Mission',
      answer: `Manche Missionare waren hier unsensibel – das ist wahr. Aber die Bibel gebietet, Vater und Mutter zu ehren (Ex 20,12; Eph 6,2). Die koptische Kirche betet für ihre Entschlafenen am dritten und vierzigsten Tag und an jedem Jahrestag. Abgelehnt werden Opfer an Geister und die Furcht vor zürnenden Toten – nicht die Erinnerung, nicht die Dankbarkeit, nicht die Liebe.`,
      followUps: [
        {
          id: 'ahnen-verloren',
          objection: `Und meine Großeltern, die nie von Christus gehört haben? Sind sie nach eurer Lehre verloren? Dann kann ich doch nicht Christ werden!`,
          objectionBy: 'Persönliche Frage vieler Konvertiten',
          answer: `Diese Frage verdient Ehrfurcht, keine schnelle Formel. Wir sprechen über niemanden das Urteil – das steht Gott allein zu, und er richtet gerecht nach dem Licht, das jemand empfangen hat (Röm 2,14–16). Die Kirche bekennt, dass Christus nach seinem Tod in das Totenreich hinabstieg und den Gerechten die Befreiung brachte (1 Petr 3,19; 4,6). Vertraue deine Großeltern Gottes Barmherzigkeit an – sie ist größer als unsere.`,
          followUps: [
            {
              id: 'fuer-ahnen-beten',
              objection: `Darf ich dann wenigstens für meine nichtchristlichen Ahnen beten?`,
              objectionBy: 'Persönliche Frage',
              answer: `Das liturgische Gebet der Kirche gilt den entschlafenen Gläubigen. Aber niemand verbietet dir, in deinem persönlichen Gebet deine Vorfahren der Barmherzigkeit Gottes zu empfehlen – ohne Opfer, ohne Furcht, im Vertrauen auf Christus. Sprich darüber auch mit deinem Beichtvater. So wird aus der Sorge um die Ahnen ein Gebet, statt eines Ritus der Besänftigung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'chinesische-riten',
      objection: `Die katholische Kirche hat 1939 die konfuzianischen Ahnenriten erlaubt. Wenn Christen selbst das als vereinbar ansehen, ist der Unterschied zur Heiligenverehrung offenbar nicht so groß.`,
      objectionBy: 'Religionshistorischer Einwand',
      answer: `Gerade dieser Fall zeigt, dass der Unterschied zählt: Rom erlaubte die Riten erst, als sie als *bürgerliche* Zeremonien der Pietät galten – nicht als religiöse Verehrung von Geistern. Die Frage ist immer: Was bedeutet der Ritus im Zusammenhang? Ein Foto der Großeltern, Blumen, ein dankbares Gedenken – unbedenklich. Opfer an die Geister, um ihr Wohlwollen zu sichern – mit dem ersten Gebot unvereinbar (1 Kor 10,20).`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '10,20', quote: `Ich sage aber, daß die Heiden, was sie opfern, das opfern sie den Teufeln und nicht Gott.`, translation: 'Luther 1912', status: 'verbatim' }],
      voices: [{ person: 'matteo-ricci', role: 'als Jesuitenmissionar in China', text: `Ricci beobachtete die konfuzianischen Riten genau und kam zu dem Schluss, dass viele Gelehrte sie als Ausdruck kindlicher Pietät verstanden, nicht als Gebet zu Geistern, die etwas bewirken. Seine Unterscheidung zwischen bürgerlicher Ehrung und religiöser Anbetung war umstritten – zeigt aber, dass Christen die Frage nach der Bedeutung des Ritus stellten, statt jede Geste pauschal zu verwerfen.`, sources: [{ kind: 'fachliteratur', author: 'Matteo Ricci', work: 'Tianzhu Shiyi (Die wahre Bedeutung des Herrn des Himmels)', year: '1603', quote: `Unterscheidung zwischen der Ehrung der Vorfahren und der Anbetung des einen Herrn des Himmels.`, status: 'paraphrase' }] }],
      followUps: [
        {
          id: 'shinto-kami',
          objection: `Im Shinto werden Ahnen zu *kami*. Für Japaner ist das Kultur, nicht Religion. Wer verbietet, dass ein christlicher Japaner vor dem Hausaltar betet?`,
          objectionBy: 'Japanische Kritiker',
          answer: `Dann muss man ehrlich fragen: Wird der Ahne als göttliches Wesen angerufen, das über Glück und Unglück verfügt? Dann ist es Anbetung und mit dem ersten Gebot unvereinbar. Viele japanische Christen behalten ein Foto ihrer Verstorbenen, gedenken ihrer und beten zu Gott für sie. So bleibt die Liebe zu den Vorfahren – und Gott bleibt Gott.`,
          followUps: [
            {
              id: 'heilige-wie-schutzgoetter',
              objection: `Eure Heiligen funktionieren doch auch wie Schutzgötter: einer für Reisende, einer für Kranke, einer für verlorene Dinge. Die Kirche hat einfach die heidnischen Götter durch Heilige ersetzt.`,
              objectionBy: 'Conyers Middleton / Alexander Hislop',
              answer: `Die Forschung, etwa Peter Brown, hat diese These als zu einfach zurückgewiesen: Der Heiligenkult wuchs aus der Verehrung der Märtyrergräber, nicht aus Tempeln heidnischer Götter. Vor allem: Heilige sind Menschen, die selbst Sünder waren und durch Gnade gerettet wurden; sie haben keine eigene Macht. Paulus und Barnabas zerrissen ihre Kleider, als man ihnen opfern wollte (Apg 14,14–15), und der Engel sagt zu Johannes: „Tu es nicht! … Bete Gott an!" (Offb 22,9).`,
              questionsBack: [`Welcher koptische Heilige hat je Anbetung für sich angenommen?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Brauchen die Ahnen in deiner Tradition etwas von den Lebenden – und was geschieht, wenn man es ihnen verweigert?`,
    `Wird der Ahne geehrt, weil er heilig war, oder weil er dein Vorfahr ist?`,
    `Wird in deiner Tradition den Ahnen ein Opfer gebracht – und wem gilt in der Kirche jedes Opfer?`,
    `Wenn Gott ein Gott der Lebendigen ist (Lk 20,38) – warum sollte die Liebe der Heiligen mit dem Tod enden?`,
  ],
  avoid: [
    `„Ahnenverehrung ist Dämonendienst" als Pauschalurteil – verletzt Menschen, die ihre Eltern lieben; unterscheide sorgfältig zwischen Gedenken und Opfer an Geister.`,
    `Volksfromme Übertreibungen in der eigenen Kirche leugnen – gib sie zu und verweise auf die Lehre.`,
    `Mit Hislops „Zwei Babylon" gegen andere argumentieren oder sich von ihr treffen lassen – das Buch gilt historisch als unhaltbar.`,
  ],
  concessions: [
    `Die äußeren Formen (Kerzen, Bilder, Gedenktage) ähneln sich tatsächlich; der Unterschied liegt in Bedeutung und Grund, nicht in jeder Geste.`,
    `Manche Missionare haben afrikanische und asiatische Ahnentraditionen ohne Verständnis verurteilt und Konvertiten in schmerzhafte Konflikte mit ihren Familien gebracht.`,
    `Auch in der koptischen Volksfrömmigkeit gibt es Praktiken, die an der Grenze zum Aberglauben stehen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kwame Bediako', work: 'Jesus in Africa: The Christian Gospel in African History and Experience', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John S. Mbiti', work: 'African Religions and Philosophy', year: '1969', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Brown', work: 'The Cult of the Saints', year: '1981', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'VIII,27', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ahnenverehrung', 'Heiligenverehrung', 'Fürbitte', 'Shinto', 'Afrikanische Religionen', 'Ritenstreit', 'Nekromantie'],
  related: [
    'heilige-ikonen/fuerbitte-der-heiligen',
    'heilige-ikonen/ikonen-goetzenbilder',
    'okkultismus/spiritismus-harmlos',
    'weitere-religionen/religion-aus-animismus',
    'weitere-religionen-2/afrika-religion-der-kolonialherren',
  ],
};

export default claim;
