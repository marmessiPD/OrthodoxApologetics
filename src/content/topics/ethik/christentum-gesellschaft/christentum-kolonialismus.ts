import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christentum-kolonialismus',
  title: `„Das Christentum hat Kolonialismus und Unterdrückung gerechtfertigt."`,
  proponents: [
    { name: 'R. S. Sugirtharajah', role: 'Bibelwissenschaftler, University of Birmingham', work: 'The Bible and the Third World (2001); Postcolonial Criticism and Biblical Interpretation (2002)' },
    { name: 'Musa W. Dube', role: 'Neutestamentlerin, Botswana', work: 'Postcolonial Feminist Interpretation of the Bible (2000)' },
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Hector Avalos', role: 'Religionswissenschaftler', work: 'Slavery, Abolitionism, and the Ethics of Biblical Scholarship (2011)' },
  ],
  steelman: `Kreuz und Schwert kamen gemeinsam. Päpstliche Bullen wie *Romanus Pontifex* (1455) und *Inter caetera* (1493) gaben Portugal und Spanien das Recht, die Länder der „Ungläubigen" zu erobern und ihre Bewohner zu unterwerfen; daraus entstand die „Doktrin der Entdeckung", auf die sich noch im 19. Jahrhundert amerikanische Gerichte beriefen. Den Ureinwohnern Amerikas wurde das *Requerimiento* auf Spanisch vorgelesen – wer sich nicht unterwarf, durfte bekriegt und versklavt werden. Missionare zerstörten Tempel, verboten Sprachen, Tänze und Riten; in kirchlich geführten Internatsschulen in Kanada wurden indigene Kinder ihren Familien entrissen, misshandelt, viele starben. Die Theologie der Apartheid in Südafrika berief sich auf die Bibel. Ein bekanntes Wort fasst es zusammen: „Als die Missionare kamen, hatten sie die Bibel und wir das Land. Sie sagten: Lasst uns beten. Als wir die Augen öffneten, hatten wir die Bibel und sie das Land." Das Christentum war nicht Opfer, sondern Ideologie des Kolonialismus.`,
  biblical: {
    summary: `Die Bibel liefert die stärksten Argumente **gegen** jede Unterdrückung: Alle Menschen sind Gottes Ebenbild (Gen 1,27), Gott hat „aus einem Blut aller Menschen Geschlechter gemacht" (Apg 17,26), und in Christus „ist kein Jude noch Grieche, kein Knecht noch Freier" (Gal 3,28). Der Missionsauftrag lautet, Menschen zu Jüngern zu machen (Mt 28,19), nicht zu Untertanen; Jesu Reich ist „nicht von dieser Welt" (Joh 18,36). An Pfingsten hört jeder das Evangelium „in seiner eigenen Sprache" (Apg 2,6–11) – nicht in der Sprache einer Weltmacht. Die Vision der Offenbarung ist eine Menge „aus allen Nationen und Geschlechtern und Völkern und Sprachen" (Offb 7,9): Die Vielfalt der Kulturen wird im Reich Gottes nicht ausgelöscht, sondern vollendet.`,
    detail: `**Pfingsten und die Würde der Sprachen.** Anders als Religionen, die an eine heilige Sprache gebunden sind, wurde das Christentum von Anfang an übersetzt: Die Evangelien selbst sind Übersetzungen der Worte Jesu ins Griechische, und schon früh entstanden koptische, syrische, lateinische, äthiopische und armenische Bibeln. Der Missionswissenschaftler Lamin Sanneh hat darin das „Übersetzungsprinzip" des Christentums gesehen: Jede Sprache ist würdig, Gottes Wort zu tragen.

**Prophetische Kritik der Macht.** Die Propheten klagen Könige an, die Land rauben (1 Kön 21: Nabots Weinberg; Jes 5,8: „Weh denen, die ein Haus an das andere ziehen"). Die Offenbarung beschreibt das Weltreich Rom als „Babylon", das sich am Blut der Heiligen berauscht (Offb 17–18). Die Bibel ist ein Buch, das Imperien kritisiert, nicht heiligt.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', quote: `…und hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,6.11', quote: `…denn es hörte ein jeglicher, daß sie mit seiner Sprache redeten … wir hören sie mit unsern Zungen die großen Taten Gottes reden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '7,9', quote: `…eine große Schar, welche niemand zählen konnte, aus allen Heiden und Völkern und Sprachen, vor dem Stuhl stehend und vor dem Lamm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '5,8', quote: `Weh denen, die ein Haus an das andere ziehen und einen Acker zum andern bringen, bis daß kein Raum mehr da sei.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat **nie kolonisiert**. Sie war über anderthalb Jahrtausende selbst eine Kirche unter fremder Herrschaft – unter byzantinischen Statthaltern, arabischen Kalifen, Mamluken, Osmanen und britischer Besatzung. Ihre Mission geschah ohne Schwert: Der koptische Papst **Athanasius** weihte im 4. Jahrhundert Frumentius zum ersten Bischof von Aksum und legte damit den Grund der äthiopischen Kirche – ohne Heer, ohne Eroberung. Die äthiopische Tochterkirche hat sich später dem italienischen Kolonialismus widersetzt; ihr Bischof Abuna Petros wurde 1936 von der italienischen Besatzungsmacht hingerichtet, weil er sich weigerte, die Eroberung zu segnen. Heute wirkt die koptische Kirche in vielen afrikanischen Ländern durch Schulen, Kliniken und Gemeinden – als afrikanische Kirche unter Afrikanern.`,
    sources: [
      { kind: 'kirchenvater', author: 'Rufinus von Aquileia', work: 'Kirchengeschichte', ref: 'X,9–10', year: 'um 402', quote: `Bericht über Frumentius, den Athanasius von Alexandrien zum Bischof für das Reich von Aksum weihte.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Hinrichtung des äthiopischen Bischofs Abuna Petros durch die italienische Besatzungsmacht', year: '1936', status: 'paraphrase', note: 'Er wird in Äthiopien als Märtyrer und Nationalheld verehrt.' },
    ],
  },
  opposingView: {
    summary: `Die Geschichtswissenschaft zeichnet ein **gemischtes Bild**. Unbestritten ist, dass Kirchen und Missionen in koloniale Strukturen eingebunden waren, dass päpstliche Bullen des 15. Jahrhunderts Eroberung und Versklavung legitimierten und dass kirchliche Internatsschulen (etwa in Kanada) indigenen Kindern schweres Unrecht zufügten; Papst Franziskus bat dafür 2022 in Kanada um Vergebung, und der Vatikan wies 2023 die „Doktrin der Entdeckung" förmlich zurück. Zugleich zeigen Forschungen, dass Missionare oft die schärfsten Kritiker kolonialer Gewalt waren. Der Politikwissenschaftler **Robert Woodberry** wies in der *American Political Science Review* (2012) statistisch nach, dass das Wirken protestantischer Missionare – durch Massenbildung, Buchdruck, Zeitungen, Freiwilligenorganisationen und Druck für koloniale Reformen – einen großen Teil der Unterschiede in der Demokratieentwicklung außerhalb Europas erklärt. **Lamin Sanneh** zeigte, dass Bibelübersetzungen viele afrikanische Sprachen erstmals verschriftlichten und lokale Kulturen stärkten. Das Christentum ist zudem gerade in Afrika *nach* dem Ende der Kolonialzeit am stärksten gewachsen.`,
    sources: [
      { kind: 'wissenschaft', author: 'Robert D. Woodberry', work: '„The Missionary Roots of Liberal Democracy", American Political Science Review 106 (2), S. 244–274', year: '2012', quote: `Konversionsorientierte protestantische Missionare waren ein entscheidender Faktor für die Verbreitung von Bildung, Buchdruck, Zivilgesellschaft und kolonialen Reformen – und damit für stabile Demokratien außerhalb Europas.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message: The Missionary Impact on Culture', year: '1989', quote: `Durch die Übersetzung der Bibel in Volkssprachen gaben Missionen lokalen Sprachen und Kulturen Würde und Selbstbewusstsein – oft gegen koloniale Interessen.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Gemeinsame Note des Dikasteriums für Kultur und Bildung und des Dikasteriums für den Dienst zugunsten der ganzheitlichen Entwicklung des Menschen zur „Doktrin der Entdeckung"', year: '2023', quote: `Zurückweisung der „Doktrin der Entdeckung"; die päpstlichen Dokumente des 15. Jahrhunderts seien politisch instrumentalisiert worden und nie Teil der katholischen Glaubenslehre gewesen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, Christen haben Kolonialismus gerechtfertigt – päpstliche Bullen des 15. Jahrhunderts, Zwangsmissionierung und kirchliche Internatsschulen sind Schuld, die man nicht beschönigen darf. Aber die schärfsten Kritiker der Kolonialgewalt waren oft selbst Christen, wie Bartolomé de las Casas, und eine große Studie in der führenden Fachzeitschrift der Politikwissenschaft zeigt, dass Missionare Bildung, Buchdruck und Demokratie in vielen Ländern entscheidend gefördert haben. Und die koptische Kirche hat nie kolonisiert – sie war selbst 1.500 Jahre lang unterdrückt. Das Christentum ist keine europäische Religion: Es kam aus Asien nach Afrika, Jahrhunderte bevor es Nordeuropa erreichte.`,
  keyPoints: [
    `**Schuld benennen:** *Romanus Pontifex* (1455), *Inter caetera* (1493), *Requerimiento*, Zwangsbekehrungen, kanadische Internatsschulen.`,
    `**Christliche Kritiker der Kolonialgewalt:** Antonio de Montesinos (1511), Bartolomé de las Casas, *Sublimis Deus* (1537), Missionare gegen die Gräuel im Kongo.`,
    `**Missionen förderten Demokratie:** Woodberry (APSR 2012) – Bildung, Buchdruck, Zivilgesellschaft und Reformen.`,
    `**Übersetzung statt Auslöschung:** Bibelübersetzungen verschriftlichten unzählige Sprachen und stärkten lokale Kulturen (Lamin Sanneh).`,
    `**Keine „weiße" Religion:** Das Christentum kam aus Asien nach Afrika (Ägypten, Äthiopien, Nubien) lange vor Nordeuropa; heute leben die meisten Christen im Globalen Süden.`,
    `**Die koptische Kirche hat nie kolonisiert:** Mission ohne Schwert (Frumentius in Aksum) und jahrhundertelange eigene Unterdrückung.`,
  ],
  voices: [
    {
      person: 'las-casas',
      role: 'als „Verteidiger der Indios"',
      text: `Bartolomé de las Casas kam als Kolonist nach Amerika und besaß selbst Indios in der Encomienda. Unter dem Eindruck der Predigt des Dominikaners Antonio de Montesinos („Sind diese nicht Menschen?", 1511) und der Lektüre von Jesus Sirach 34 bekehrte er sich, gab seine Indios frei und wurde Dominikaner. Sein Leben lang kämpfte er gegen die Versklavung und Ausbeutung der Ureinwohner; in der Disputation von Valladolid (1550–1551) widersprach er Juan Ginés de Sepúlveda, der die Indios mit Aristoteles zu „Sklaven von Natur" erklären wollte. Las Casas argumentierte mit der Gottebenbildlichkeit aller Menschen. Ehrlich ist zu sagen: Er schlug zeitweise vor, afrikanische Sklaven einzusetzen, um die Indios zu schonen – und bereute dies später zutiefst, als er erkannte, dass die Versklavung der Afrikaner ebenso ungerecht war.`,
      sources: [
        { kind: 'sonstiges', author: 'Bartolomé de las Casas', work: 'Kurzgefasster Bericht von der Verwüstung der Westindischen Länder (Brevísima relación de la destrucción de las Indias)', year: '1552', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Bartolomé de las Casas', work: 'Historia de las Indias', status: 'paraphrase', note: 'Enthält seine spätere Reue über den Vorschlag, afrikanische Sklaven einzusetzen.' },
      ],
    },
    {
      person: 'lamin-sanneh',
      role: 'als afrikanischer Missionswissenschaftler',
      text: `Lamin Sanneh, aufgewachsen als Muslim in Gambia, später Christ und Professor in Yale, stellte die gängige Erzählung auf den Kopf. Er zeigte, dass die Missionen durch die Übersetzung der Bibel in Volkssprachen etwas taten, was den Interessen der Kolonialmächte oft zuwiderlief: Sie gaben afrikanischen Sprachen Schrift, Grammatiken und Wörterbücher und damit Würde. Wer die Bibel in seiner eigenen Sprache las, konnte sie auch gegen die Kolonisatoren lesen – und viele afrikanische Unabhängigkeitsführer gingen aus Missionsschulen hervor. Für Sanneh ist das Christentum von seinem Wesen her übersetzbar und damit keiner Kultur, auch nicht der westlichen, ausschließlich zu eigen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message: The Missionary Impact on Culture', year: '1989', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Whose Religion Is Christianity? The Gospel Beyond the West', year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'robert-woodberry',
      role: 'als Sozialwissenschaftler',
      text: `Robert Woodberry hat über viele Jahre Daten aus zahlreichen ehemaligen Kolonien zusammengetragen. Sein Ergebnis, veröffentlicht 2012 in der *American Political Science Review*: Wo konversionsorientierte, vom Staat unabhängige protestantische Missionare wirkten, entstanden häufiger Massenbildung, Buchdruck, Zeitungen, Freiwilligenvereine und Reformbewegungen gegen koloniale Missstände – und später stabilere Demokratien. Der Einfluss blieb auch unter Berücksichtigung zahlreicher anderer Faktoren bestehen. Woodberry betont, dass Missionare keine Heiligen waren und oft mit Kolonialbeamten kooperierten; aber gerade die von der Kolonialmacht unabhängigen Missionare wurden häufig zu ihren schärfsten Kritikern.`,
      sources: [{ kind: 'wissenschaft', author: 'Robert D. Woodberry', work: '„The Missionary Roots of Liberal Democracy", American Political Science Review 106 (2)', year: '2012', status: 'paraphrase' }],
    },
    {
      person: 'mangalwadi',
      role: 'als indischer Sozialreformer',
      text: `Vishal Mangalwadi erzählt die Geschichte der Mission in Indien aus indischer Sicht. Der baptistische Missionar William Carey, der 1793 nach Bengalen kam, übersetzte die Bibel in zahlreiche indische Sprachen, gründete Schulen und ein College, förderte die bengalische Literatur und kämpfte gegen die Witwenverbrennung – oft gegen den Widerstand der Ostindien-Kompanie, die Missionare zunächst aus ihren Gebieten fernhalten wollte. Für Mangalwadi zeigt Carey: Die Bibel hat in Indien nicht Fremdherrschaft begründet, sondern Reformen angestoßen, die Inder selbst weitertrugen.`,
      sources: [{ kind: 'fachliteratur', author: 'Vishal Mangalwadi; Ruth Mangalwadi', work: 'The Legacy of William Carey: A Model for the Transformation of a Culture', year: '1999', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als koptischer Papst und Missionsbischof',
      text: `Als der junge Syrer Frumentius, der am Hof von Aksum Christen gesammelt hatte, nach Alexandria kam und um einen Bischof für Äthiopien bat, weihte Athanasius ihn selbst. So entstand die äthiopische Kirche – nicht durch Eroberung, sondern durch das Zeugnis eines Einzelnen und die Fürsorge der Kirche von Alexandrien. Bis ins 20. Jahrhundert empfing die äthiopische Kirche ihre Metropoliten aus der koptischen Kirche. Dieses Modell – Mission ohne Machtpolitik, eine einheimische Kirche mit eigener Sprache und Liturgie – ist die koptische Antwort auf den Vorwurf des Kolonialismus.`,
      sources: [{ kind: 'kirchenvater', author: 'Rufinus von Aquileia', work: 'Kirchengeschichte', ref: 'X,9–10', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bibel-und-land',
      objection: `„Als die Missionare kamen, hatten sie die Bibel und wir das Land. Sie sagten: Lasst uns beten. Als wir die Augen öffneten, hatten wir die Bibel und sie das Land." Mehr muss man über christliche Mission nicht sagen.`,
      objectionBy: 'Musa W. Dube',
      answer: `Das Wort trifft eine bittere Wahrheit: Mission und Kolonialherrschaft waren oft verflochten, und Christen haben davon profitiert. Aber es ist nicht die ganze Geschichte. Missionare wie Las Casas in Amerika oder die Missionare, die die Gräuel im Kongo des belgischen Königs Leopold II. dokumentierten, waren die schärfsten Kritiker der Kolonialgewalt. Und eine große Studie in der führenden politikwissenschaftlichen Fachzeitschrift zeigt, dass Missionen Bildung und Demokratie gefördert haben. Übrigens wird das Wort meist Desmond Tutu zugeschrieben – einem anglikanischen Erzbischof, der mit derselben Bibel gegen die Apartheid kämpfte.`,
      detail: `Die Zuschreibung des Satzes ist unsicher; er wird Desmond Tutu, Jomo Kenyatta und anderen zugeschrieben. Tutu selbst blieb zeitlebens Christ und begründete seinen Kampf gegen die Apartheid theologisch – mit der Gottebenbildlichkeit aller Menschen. Das zeigt: Afrikaner haben die Bibel nicht nur empfangen, sondern gegen ihre Unterdrücker gelesen.`,
      questionsBack: [
        `Wenn das Christentum nur ein Werkzeug der Kolonialherren war – warum ist es in Afrika gerade nach dem Ende der Kolonialzeit so stark gewachsen?`,
      ],
      followUps: [
        {
          id: 'papstbullen',
          objection: `Die Päpste selbst haben mit *Romanus Pontifex* und *Inter caetera* die Eroberung und Versklavung der „Ungläubigen" erlaubt. Das ist keine Randerscheinung, das ist offizielle Kirchenpolitik.`,
          objectionBy: 'R. S. Sugirtharajah',
          answer: `Das stimmt, und es ist eine schwere Schuld der römischen Kirche. Der Vatikan hat 2023 die darauf aufbauende „Doktrin der Entdeckung" förmlich zurückgewiesen. Aber schon im 16. Jahrhundert gab es den Widerspruch aus der Kirche selbst: Papst Paul III. erklärte 1537 in *Sublimis Deus*, die Ureinwohner seien wahre Menschen, die ihrer Freiheit und ihres Besitzes nicht beraubt werden dürfen, auch wenn sie keine Christen sind. Las Casas kämpfte jahrzehntelang mit der Gottebenbildlichkeit gegen die Lehre von den „Sklaven von Natur".`,
          followUps: [
            {
              id: 'las-casas-sklaven',
              objection: `Las Casas ist ein schlechtes Beispiel: Er hat vorgeschlagen, afrikanische Sklaven zu importieren, um die Indios zu schonen. Auch er war ein Rassist.`,
              objectionBy: 'Hector Avalos',
              answer: `Das ist richtig, und ich verschweige es nicht: Las Casas machte diesen Vorschlag – und bereute ihn später zutiefst. In seiner *Geschichte Westindiens* schrieb er, er habe erkannt, dass die Versklavung der Afrikaner ebenso ungerecht sei wie die der Indios. Das zeigt etwas Wichtiges: Derselbe Maßstab – jeder Mensch ist Gottes Ebenbild –, mit dem er für die Indios kämpfte, führte ihn zur Einsicht über seinen eigenen Irrtum. Moralischer Fortschritt kam hier aus der konsequenteren Anwendung christlicher Prinzipien.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kulturen-zerstoert',
      objection: `Missionare haben indigene Kulturen, Sprachen und Religionen zerstört. In Kanada haben Kirchen Internatsschulen betrieben, in denen Kinder misshandelt wurden und starben.`,
      objectionBy: 'Musa W. Dube',
      answer: `Die kanadischen Internatsschulen sind ein entsetzliches Kapitel: Kinder wurden ihren Familien entrissen, ihrer Sprache beraubt, viele misshandelt, viele starben. Die beteiligten Kirchen haben um Vergebung gebeten, Papst Franziskus 2022 bei einer Bußreise in Kanada. Zugleich gibt es die andere Seite: Missionare haben für Tausende Sprachen erstmals Alphabete, Grammatiken und Wörterbücher geschaffen und sie damit vor dem Vergessen bewahrt. Der afrikanische Gelehrte Lamin Sanneh hat gezeigt, dass Bibelübersetzungen lokale Kulturen oft gestärkt haben.`,
      followUps: [
        {
          id: 'uebersetzung-imperialismus',
          objection: `Auch Bibelübersetzung ist Kulturimperialismus: Man ersetzt die eigenen Götter und Geschichten durch fremde.`,
          objectionBy: 'R. S. Sugirtharajah',
          answer: `Sanneh, der selbst aus einer muslimischen Familie in Gambia stammte, sah es umgekehrt: Wer Gottes Wort in die eigene Sprache übersetzt, erklärt diese Sprache für würdig, das Höchste zu tragen. Afrikaner haben die übersetzte Bibel schnell gegen die Kolonisatoren gelesen und eigene Kirchen gegründet. Und das Christentum ist in Afrika gerade nach dem Ende der Kolonialzeit am stärksten gewachsen – von einer kleinen Minderheit um 1900 auf fast die Hälfte der Bevölkerung heute. Das lässt sich kaum als Zwang erklären.`,
        },
      ],
    },
    {
      id: 'weisse-religion',
      objection: `Das Christentum ist eine weiße, europäische Religion, die anderen Völkern aufgezwungen wurde.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Historisch ist das falsch: Das Christentum entstand in Asien, in Jerusalem, und kam nach Afrika, Jahrhunderte bevor es Skandinavien oder das Baltikum erreichte. Der erste Nichtjude, von dessen Taufe die Apostelgeschichte erzählt, war ein Äthiopier (Apg 8). Die koptische Kirche in Ägypten, die äthiopische und die nubische Kirche gehören zu den ältesten Kirchen der Welt; Augustinus war Nordafrikaner. Heute lebt die Mehrheit der Christen in Afrika, Asien und Lateinamerika.`,
      followUps: [
        {
          id: 'westen-herrschaftsinstrument',
          objection: `Trotzdem hat der Westen das Christentum als Herrschaftsinstrument benutzt. Das Christentum lässt sich offenbar gut für Macht missbrauchen.`,
          objectionBy: 'Hector Avalos',
          answer: `Jede Idee mit großer Anziehungskraft lässt sich missbrauchen – auch Freiheit, Fortschritt oder Wissenschaft. Die Frage ist, ob der Missbrauch aus der Sache folgt oder ihr widerspricht. Jesus wurde von einem Imperium hingerichtet; die Offenbarung nennt Rom „Babylon". Die koptische Kirche ist das Beispiel einer Kirche, die das Christentum 1.500 Jahre lang unter fremder Herrschaft gelebt hat – als Kirche der Unterdrückten, nicht der Unterdrücker.`,
        },
      ],
    },
    {
      id: 'woodberry-apologet',
      objection: `Woodberry ist doch selbst Christ. Seine Studie ist Apologetik im wissenschaftlichen Gewand.`,
      objectionBy: 'Hector Avalos',
      answer: `Seine Studie erschien 2012 in der *American Political Science Review*, der führenden Fachzeitschrift der Politikwissenschaft, nach dem dort üblichen strengen Begutachtungsverfahren. Sie beruht auf umfangreichen, offen gelegten Daten und prüft zahlreiche alternative Erklärungen. Man kann über einzelne Ergebnisse streiten – das ist Wissenschaft –, aber die persönliche Konfession eines Forschers widerlegt keine Daten. Sonst müsste man auch jede Studie eines atheistischen Forschers über Religion verwerfen.`,
    },
  ],
  questionsToAsk: [
    `Wenn das Christentum nur ein Werkzeug der Kolonialherren war – warum wuchs es in Afrika gerade nach der Kolonialzeit so stark?`,
    `Kennst du Las Casas, Montesinos oder die Missionare, die die Kongo-Gräuel öffentlich machten?`,
    `Auf welcher Grundlage verurteilst du den Kolonialismus – und woher stammt die Überzeugung, dass alle Völker gleiche Würde haben?`,
    `Weißt du, dass die äthiopische und die koptische Kirche älter sind als die meisten europäischen Kirchen?`,
  ],
  avoid: [
    `Den Kolonialismus verharmlosen oder als „Zivilisierungsmission" verteidigen.`,
    `Das „Bibel und Land"-Zitat einer bestimmten Person sicher zuschreiben – die Herkunft ist unklar.`,
    `So tun, als hätten Missionare immer auf der Seite der Unterdrückten gestanden. Das Bild ist gemischt.`,
  ],
  concessions: [
    `Päpstliche Bullen des 15. Jahrhunderts legitimierten Eroberung und Versklavung nichtchristlicher Völker.`,
    `Kirchen betrieben Internatsschulen, in denen indigene Kinder schweres Unrecht erlitten.`,
    `Viele Missionare teilten die rassistischen Vorurteile ihrer Zeit und arbeiteten eng mit Kolonialverwaltungen zusammen.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Robert D. Woodberry', work: '„The Missionary Roots of Liberal Democracy", APSR 106 (2)', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Whose Religion Is Christianity?', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brian Stanley', work: 'The Bible and the Flag: Protestant Missions and British Imperialism', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom: The Coming of Global Christianity', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kolonialismus', 'Mission', 'Las Casas', 'Woodberry', 'Afrika', 'Äthiopien'],
  related: [
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'at-ethik/bibel-befuerwortet-sklaverei',
    'religion-gewalt/kreuzzuege',
    'moral-und-gott/moral-kulturell-relativ',
  ],
};

export default claim;
