import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'papstprimat-unfehlbarkeit',
  title: `„Der Bischof von Rom ist das Haupt der ganzen Kirche und unfehlbar."`,
  proponents: [
    { name: 'Erstes Vatikanisches Konzil', role: 'Konzil der katholischen Kirche (1869/70)', work: 'Pastor Aeternus (1870), Kap. 3–4' },
    { name: 'Robert Bellarmin', role: 'Kardinal, Kirchenlehrer (1542–1621)', work: 'De Romano Pontifice' },
    { name: 'Scott Hahn', role: 'Katholischer Theologe und Apologet', work: 'Rome Sweet Home (1993)' },
    { name: 'Erick Ybarra', role: 'Katholischer Apologet', work: 'The Papacy: Revisiting the Debate Between Catholics and Orthodox (2022)' },
  ],
  steelman: `Christus hat seine Kirche nicht führungslos gelassen. Er gab Simon einen neuen Namen – Kepha, Fels – und sagte: „Auf diesen Felsen will ich bauen meine Gemeinde … Ich will dir des Himmelreichs Schlüssel geben" (Mt 16,18–19). Die Schlüssel sind nach Jes 22,22 das Zeichen eines Amtes, das weitergegeben wird. Christus betete, dass Petri Glaube nicht aufhöre, damit er seine Brüder stärke (Lk 22,32), und beauftragte ihn: „Weide meine Schafe" (Joh 21,15–17). Petrus starb in Rom; seine Nachfolger sind die Bischöfe von Rom. Schon um 96 greift Rom in Korinth ein (1. Klemensbrief), Ignatius nennt die römische Kirche die, „die den Vorsitz in der Liebe führt", Irenäus sagt, mit dieser Kirche müsse wegen ihres vorzüglicheren Ursprungs jede Kirche übereinstimmen (Adv. Haer. III,3,2), und in Chalcedon riefen die Väter beim Tomus Leos: „Petrus hat durch Leo gesprochen!" Ohne ein sichtbares Haupt zerfällt die Kirche – das zeigt der Protestantismus. Die Unfehlbarkeit bedeutet nicht Sündlosigkeit, sondern dass der Heilige Geist den Papst bewahrt, wenn er feierlich eine Glaubens- oder Sittenlehre für die ganze Kirche definiert. Das ist nur konsequent: Wenn Gott seine Kirche in der Wahrheit bewahren will, braucht sie eine letzte, sichtbare Instanz.`,
  biblical: {
    summary: `Petrus hat im Neuen Testament einen echten Vorrang: Er wird zuerst genannt, spricht für die Zwölf, empfängt in Mt 16,18 eine besondere Verheißung und wird nach seiner Verleugnung neu beauftragt (Joh 21). Die koptische Kirche ehrt ihn hoch. Aber das Neue Testament sagt **nichts** von einer Nachfolge Petri in **Rom** mit **Jurisdiktion über die ganze Kirche**. Die Binde- und Lösegewalt erhalten **alle Apostel** (Mt 18,18; Joh 20,22–23). Beim Apostelkonzil fasst **Jakobus** den Beschluss zusammen (Apg 15,13–21). Paulus widersteht Petrus „ins Angesicht" (Gal 2,11) und nennt ihn eine von drei „Säulen" (Gal 2,9). Petrus selbst nennt sich „Mitältester" (1 Petr 5,1). Das Fundament der Kirche sind „die Apostel und Propheten" mit Christus als Eckstein (Eph 2,20); die Grundsteine des himmlischen Jerusalem tragen die Namen aller zwölf Apostel (Offb 21,14). Die „Schlüssel Davids" aus Jes 22,22 trägt nach Offb 3,7 Christus selbst.`,
    detail: `**Mt 16,18 in der Auslegung:** Fair ist zuzugeben: Viele Exegeten – auch protestantische – halten es für wahrscheinlich, dass Jesus mit dem „Felsen" Petrus selbst meint (aramäisch *Kepha* – *Kepha*). Die Väter legen den Vers aber vielfältig aus: Der Fels ist das **Bekenntnis** des Petrus (Chrysostomus, Hom. 54 zu Mt), **Christus** selbst (Augustinus, Retract. I,21 – er lässt dem Leser die Wahl), Petrus als **Typus aller Bischöfe** (Cyprian, De unitate 4) oder **jeder**, der wie Petrus bekennt (Origenes, Mt-Kommentar XII,10–11). Keine dieser Auslegungen leitet daraus eine Jurisdiktion des römischen Bischofs über alle Kirchen ab.

**Die Schlüssel:** Mt 16,19 und Mt 18,18 verwenden dieselbe Formel „binden und lösen" – einmal an Petrus, einmal an alle Jünger. Nach Joh 20,23 erhalten alle Apostel die Vollmacht, Sünden zu vergeben.

**Lk 22,32 und Joh 21,15–17:** Beide Stellen stehen im Zusammenhang der **dreifachen Verleugnung** Petri: Jesus betet, dass sein Glaube nicht völlig versage, und setzt ihn nach dem dreifachen Nein mit einer dreifachen Frage wieder ein. Das ist Wiederherstellung des Apostels, nicht Stiftung eines römischen Amtes.

**Jakobus und das Apostelkonzil:** In Apg 15 berichtet Petrus, aber Jakobus spricht das abschließende Urteil („darum urteile ich", 15,19) – und die Entscheidung ergeht im Namen der „Apostel und Ältesten mit der ganzen Gemeinde" (15,22).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '16,18–19', quote: `Und ich sage dir auch: Du bist Petrus, und auf diesen Felsen will ich bauen meine Gemeinde, und die Pforten der Hölle sollen sie nicht überwältigen. Und ich will dir des Himmelreichs Schlüssel geben: alles, was du auf Erden binden wirst, soll auch im Himmel gebunden sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '18,18', quote: `Wahrlich ich sage euch: Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein, und was ihr auf Erden lösen werdet, soll auch im Himmel los sein.`, translation: 'Luther 1912', status: 'verbatim', note: 'Hier an alle Jünger gerichtet (Plural).' },
      { kind: 'bibel', work: 'Galater', ref: '2,9.11', quote: `… Jakobus und Kephas und Johannes, die für Säulen angesehen waren … Da aber Petrus gen Antiochien kam, widerstand ich ihm unter Augen; denn es war Klage über ihn gekommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '5,1', quote: `Die Ältesten, so unter euch sind, ermahne ich, der Mitälteste und Zeuge der Leiden, die in Christo sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '3,7', quote: `Das sagt der Heilige, der Wahrhaftige, der da hat den Schlüssel Davids, der auftut, und niemand schließt zu, der zuschließt, und niemand tut auf.`, translation: 'Luther 1912', status: 'verbatim', note: 'Die Formulierung aus Jes 22,22 wird hier auf Christus angewandt.' },
      { kind: 'bibel', work: 'Epheser', ref: '2,20', quote: `… erbaut auf den Grund der Apostel und Propheten, da Jesus Christus der Eckstein ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche erkennt an, dass der Bischof von Rom in der Alten Kirche einen **Ehrenvorrang** unter den großen Sitzen hatte – nach der alten Ordnung Rom, Alexandrien, Antiochien (Nizäa 325, Kanon 6). Sie lehnt aber einen **universalen Jurisdiktionsprimat** und eine **persönliche Unfehlbarkeit** des Papstes ab. Die Kirche wird nach orthodoxem Verständnis **synodal** geleitet: Die Bischöfe sind gemeinsam Nachfolger der Apostel, und die höchste Lehrautorität sind die von der ganzen Kirche angenommenen Konzilien. Der Heilige Geist bewahrt die **Kirche als ganze** in der Wahrheit (Joh 16,13; 1 Tim 3,15), nicht einen einzelnen Bischof unabhängig von ihr. Bemerkenswert: Der Titel **„Papst"** (*papas*, Vater) wird für den Bischof von Alexandrien schon im 3. Jahrhundert bezeugt – für Heraklas (Eusebius, KG VII,7,4) –, bevor er in Rom üblich wurde.`,
    detail: `**Nizäa, Kanon 6 (325):** „Die alten Gebräuche in Ägypten, Libyen und der Pentapolis sollen in Kraft bleiben, dass der Bischof von Alexandrien über alle diese Gewalt habe, da dies auch für den Bischof von Rom Brauch ist." Rom dient hier als Analogie für die regionale Jurisdiktion Alexandriens – nicht als oberste Instanz über Alexandrien.

**Konstantinopel (381), Kanon 3, und Chalcedon (451), Kanon 28:** Konstantinopel erhält den Ehrenrang nach Rom, „weil es das neue Rom ist"; Chalcedon begründet Roms Vorrechte damit, dass die Väter sie „dem Thron des alten Rom verliehen haben, weil diese Stadt die Kaiserstadt war". Papst Leo protestierte gegen Kanon 28 – aber die Formulierung zeigt, wie der Osten den Vorrang verstand: als kirchenrechtlich verliehen, nicht als göttliches Recht. *(Chalcedon ist für die koptische Kirche kein ökumenisches Konzil; der Kanon ist hier nur historisches Zeugnis.)*

**Cyprian von Karthago:** „Die übrigen Apostel waren, was Petrus war, mit gleicher Teilhabe an Ehre und Gewalt ausgestattet" (De unitate 4, gängige Fassung). Auf der Synode von Karthago 256 sagte er: Keiner von uns macht sich zum „Bischof der Bischöfe" – eine Spitze gegen Papst Stephan, dem er im Ketzertaufstreit widersprach.

**Gregor der Große (590–604)** wies den Titel „universaler Bischof" scharf zurück – auch als Patriarch Eulogius von Alexandrien ihn „universalen Papst" nannte: Wenn er selbst universaler Papst sei, wären die anderen nicht mehr Bischöfe.

**Honorius I.** wurde vom 6. ökumenischen Konzil (Konstantinopel III, 680/81) als Häretiker verurteilt, und Papst Leo II. bestätigte die Verurteilung. Für den Monotheletismus ist die koptische Kirche nicht Partei; das historische Faktum zeigt aber, dass die Kirche des ersten Jahrtausends einen Papst verurteilen konnte.`,
    sources: [
      { kind: 'konzil', work: 'Konzil von Nizäa, Kanon 6', year: '325', quote: `Die alten Gebräuche in Ägypten, Libyen und der Pentapolis sollen in Kraft bleiben, dass der Bischof von Alexandrien über alle diese Gewalt habe, da dies auch für den Bischof von Rom Brauch ist.`, status: 'verbatim', translation: 'eigene Übersetzung nach der Übersetzung in NPNF II/14' },
      { kind: 'konzil', work: 'Konzil von Chalcedon, Kanon 28', year: '451', quote: `Denn dem Thron des alten Rom haben die Väter mit Recht die Vorrechte verliehen, weil jene Stadt die Kaiserstadt war.`, status: 'paraphrase', note: 'Von Papst Leo I. zurückgewiesen; für die koptische Kirche kein ökumenisches Konzil – hier nur als Zeugnis des östlichen Verständnisses.' },
      { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'De ecclesiae catholicae unitate', ref: '4', year: '251', quote: `Das waren gewiss auch die übrigen Apostel, was Petrus war, mit gleicher Teilhabe an Ehre und Gewalt ausgestattet.`, original: `Hoc erant utique et ceteri apostoli quod fuit Petrus, pari consortio praediti et honoris et potestatis.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Fair: Von Kap. 4 existieren zwei Fassungen; die zweite (der sog. „Primatstext") betont den Primat Petri stärker. Beide Fassungen gelten vielen Forschern als von Cyprian selbst.' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'VII,7,4', status: 'paraphrase', quote: `Dionysius von Alexandrien spricht in einem Brief von „unserem seligen Papst (papas) Heraklas".`, note: 'Älteste bekannte Verwendung des Titels „Papst" für einen Bischof; manche Übersetzungen geben das Wort mit „Vater" wieder.' },
    ],
  },
  quickAnswer: `Wir ehren Petrus und erkennen an, dass Rom in der Alten Kirche den ersten Ehrenrang hatte. Aber Christus gab die Binde- und Lösegewalt allen Aposteln (Mt 18,18), Jakobus leitete das Apostelkonzil (Apg 15), und Paulus widerstand Petrus (Gal 2,11). Das Konzil von Nizäa stellte den Bischof von Alexandrien für Ägypten neben den von Rom (Kanon 6). Die Kirche des ersten Jahrtausends wurde von Konzilien geleitet und hat sogar einen Papst – Honorius – als Häretiker verurteilt. Einen Papst über allen Bischöfen, unfehlbar „aus sich selbst", kannte sie nicht.`,
  keyPoints: [
    `**Petrus hat einen echten Vorrang** im NT – aber die Schlüsselgewalt gilt allen Aposteln (Mt 18,18; Joh 20,23), und von einer römischen Nachfolge mit Weltjurisdiktion sagt die Schrift nichts.`,
    `**Die Väter deuten den „Felsen" vielfältig** (Bekenntnis, Christus, alle Bischöfe, jeder Gläubige) – keiner leitet daraus eine Jurisdiktion Roms über alle Kirchen ab.`,
    `**Nizäa Kanon 6:** Alexandrien hat in Ägypten dieselbe Gewalt wie Rom in seinem Bereich; Konstantinopel 381 und Chalcedon 451 begründen Roms Rang mit der Kaiserstadt.`,
    `**Praxis des ersten Jahrtausends:** Konzilien, vom Kaiser einberufen, prüften auch päpstliche Schreiben; Cyprian widersprach Stephan; Irenäus ermahnte Viktor; ein Konzil verurteilte Honorius.`,
    `**Gregor der Große** lehnte den Titel „universaler Bischof/Papst" ab – ausgerechnet gegenüber dem Patriarchen von Alexandrien.`,
    `**Vatikanum I (1870):** Die Definitionen des Papstes seien „aus sich selbst, nicht aber aufgrund der Zustimmung der Kirche unabänderlich" – eine Formel, die der Alten Kirche fremd ist.`,
  ],
  argument: {
    name: 'Das Argument aus der Praxis des ersten Jahrtausends',
    summary: 'Ein göttlich eingesetzter, heilsnotwendiger Universalprimat hätte in der ungeteilten Kirche erkennbar bekannt und praktiziert werden müssen.',
    premises: [
      {
        text: 'P1: Wenn Christus dem Bischof von Rom eine universale, unmittelbare Jurisdiktion und persönliche Unfehlbarkeit als heilsnotwendige Grundordnung der Kirche gegeben hätte, dann hätte die Kirche des ersten Jahrtausends dies erkennbar geglaubt und praktiziert.',
        support: `Vatikanum I sagt selbst, es lehre den „alten und beständigen Glauben der Kirche". Eine Grundordnung, die so zentral ist, dass ihre Leugnung den Glauben verletzt, kann nicht tausend Jahre lang unbemerkt geblieben sein. Katholische Theologen wie Joseph Ratzinger haben deshalb selbst das erste Jahrtausend als Maßstab für den Dialog mit dem Osten vorgeschlagen.`,
        sources: [
          { kind: 'gegner', author: 'Joseph Ratzinger', work: 'Theologische Prinzipienlehre', year: '1982', status: 'paraphrase', quote: `Rom muss vom Osten nicht mehr an Primatslehre fordern, als auch im ersten Jahrtausend formuliert und gelebt wurde.`, note: 'Ursprünglich ein Vortrag in Graz 1976; Ratzinger wurde später Papst Benedikt XVI.' },
        ],
      },
      {
        text: 'P2: Die Kirche des ersten Jahrtausends praktizierte keinen solchen Primat.',
        support: `Die ökumenischen Konzilien wurden vom Kaiser einberufen und entschieden als Synoden; Nizäa Kanon 6 stellt Alexandrien neben Rom; Konstantinopel und Chalcedon begründen Roms Rang politisch; Cyprian, Irenäus und die afrikanischen Bischöfe (im Fall des Apiarius, 418–424) widersprachen römischen Ansprüchen; Gregor der Große lehnte den Titel „universaler Bischof" ab; das 6. Konzil verurteilte Papst Honorius.`,
        sources: [
          { kind: 'konzil', work: 'Drittes Konzil von Konstantinopel (6. ökumenisches Konzil)', ref: '13. und 16. Sitzung', year: '681', status: 'paraphrase', quote: `Verurteilung des Sergius, Pyrrhus … und des Honorius, einst Papst des älteren Rom, weil er in allem dessen (des Sergius) Meinung folgte.`, note: 'Papst Leo II. bestätigte die Verurteilung (682/683).' },
        ],
      },
    ],
    conclusion: 'Also ist der universale Jurisdiktionsprimat mit persönlicher Unfehlbarkeit, wie ihn Vatikanum I definiert, keine von Christus gestiftete Grundordnung, sondern eine spätere westliche Entwicklung. Der Bischof von Rom hatte in der ungeteilten Kirche einen Ehrenvorrang innerhalb der Gemeinschaft gleichberechtigter Bischöfe.',
  },
  voices: [
    {
      person: 'cyprian',
      role: 'als afrikanischer Bischof und Märtyrer des 3. Jahrhunderts',
      text: `Cyprian liebte die Einheit der Kirche wie kaum ein anderer – und sah sie im **einen Episkopat**, an dem jeder Bischof ganz Anteil hat. Petrus ist für ihn der Ursprung und das Sinnbild dieser Einheit, aber die anderen Apostel waren, was Petrus war, mit gleicher Ehre und Gewalt. Als Papst Stephan von Rom im Ketzertaufstreit (um 256) den Afrikanern seine Praxis aufzwingen wollte, widersprach Cyprian mit einer Synode von 87 Bischöfen: Keiner von uns setzt sich als „Bischof der Bischöfe" ein. Cyprian starb in Gemeinschaft mit der Kirche als Märtyrer und wird in Ost und West als Heiliger verehrt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Sententiae episcoporum (Synode von Karthago)', year: '256', status: 'paraphrase', quote: `Keiner von uns setzt sich als Bischof der Bischöfe ein oder zwingt seine Mitbischöfe mit tyrannischem Schrecken zum Gehorsam.` },
      ],
    },
    {
      person: 'athanasius',
      role: 'als alexandrinischer Papst im arianischen Streit',
      text: `Athanasius stand mit Rom in enger Gemeinschaft: Papst Julius I. nahm ihn auf und eine römische Synode erklärte ihn 340/341 für unschuldig. Aber Athanasius berichtet auch, wie Papst Liberius nach zwei Jahren Verbannung unter Todesdrohung nachgab und eine arianisierende Formel unterschrieb (Hist. Arian. 41). Der Glaube von Nizäa wurde in diesen Jahren nicht durch einen unfehlbaren Bischof, sondern durch Bekenner wie Athanasius bewahrt – „Athanasius gegen die Welt". Die Wahrheit liegt in der Treue der ganzen Kirche zur apostolischen Überlieferung.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Historia Arianorum', ref: '35–41', status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Papst von Alexandrien und Verbündeter Roms',
      text: `Kyrill ist ein Beispiel für die gute Zusammenarbeit von Rom und Alexandrien: Im Streit mit Nestorius schrieb er an Papst Coelestin und informierte ihn, wie es alter Brauch zwischen den Kirchen war; Coelestin beauftragte Kyrill, in seinem Namen zu handeln. Aber entschieden wurde die Frage auf dem Konzil von Ephesus (431), in dem Kyrill den Vorsitz führte und das Konzil als Ganzes Nestorius absetzte. Rom und Alexandrien handelten als Schwesterkirchen in einer synodalen Gemeinschaft, nicht als Haupt und Glied.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Briefe (u. a. Ep. 11 an Coelestin)', status: 'paraphrase', note: 'Fair: Katholische Autoren sehen in diesem Briefwechsel eine Anerkennung römischer Autorität; aus orthodoxer Sicht zeigt er Gemeinschaft und Ehrenvorrang.' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Papst im Dialog mit Rom',
      text: `Papst Schenuda III. war der erste koptische Patriarch seit über 1500 Jahren, der den Bischof von Rom besuchte (1973). Er unterzeichnete mit Paul VI. ein gemeinsames christologisches Bekenntnis und setzte sich für den Dialog ein – zugleich vertrat er klar die koptische Ekklesiologie: Die Einheit der Kirche gründet im gemeinsamen apostolischen Glauben und in der Gemeinschaft gleichberechtigter apostolischer Kirchen, nicht in der Unterordnung unter einen Bischof.`,
      sources: [{ kind: 'konzil', work: 'Gemeinsame Erklärung von Papst Paul VI. und Papst Schenuda III.', year: '10. Mai 1973', status: 'paraphrase', url: 'https://www.vatican.va/content/paul-vi/en/speeches/1973/may/documents/hf_p-vi_spe_19730510_dichiarazione-comune.html' }],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Theologe',
      text: `Ware fasst die orthodoxe Sicht so zusammen: Die Orthodoxie bestreitet nicht, dass Rom in der Alten Kirche den ersten Platz hatte – Ignatius nennt die römische Kirche die, „die den Vorsitz in der Liebe führt". Rom war „Erster unter Gleichen". Strittig ist der Schritt vom Vorrang der Ehre und des Dienstes zu einer Oberhoheit der Jurisdiktion über die ganze Kirche und zur Unfehlbarkeit. Er sieht in einer erneuerten, dienenden Form des römischen Primats eine Chance für die Einheit.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'du-bist-petrus',
      objection: `„Mt 16,18 ist eindeutig: Jesus nennt Simon Kepha – Fels – und baut auf ihn die Kirche. Sogar protestantische Exegeten geben zu, dass der Fels Petrus ist."`,
      objectionBy: 'Scott Hahn',
      answer: `Das kann man zugeben – viele Ausleger sehen in Petrus den Felsen, und die Kirche ehrt ihn dafür. Aber der Vers sagt nichts über **Nachfolger**, nichts über **Rom** und nichts über **Jurisdiktion über andere Apostel**. Die Väter haben ihn deshalb vielfältig ausgelegt: als Bekenntnis (Chrysostomus), als Christus (Augustinus), als Bild aller Bischöfe (Cyprian). Kein Vater des ersten Jahrtausends las ihn wie Vatikanum I.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Hom. 54', year: 'um 390', status: 'paraphrase', quote: `„Auf diesen Felsen" – das heißt: auf den Glauben seines Bekenntnisses.`, note: 'In manchen Zählungen Hom. 55. Chrysostomus ehrt Petrus zugleich sehr hoch als „Haupt der Apostel".' },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Retractationes', ref: 'I,21', year: '426/427', status: 'paraphrase', quote: `Ich habe früher gesagt, Petrus sei der Fels; später habe ich oft erklärt, der Fels sei Christus, den Petrus bekannte. Der Leser möge wählen, welche Deutung wahrscheinlicher ist.` },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Kommentar zum Matthäusevangelium', ref: 'XII,10–11', status: 'paraphrase', quote: `Jeder, der wie Petrus bekennt, wird ein Fels; auf jeden solchen wird die Kirche gebaut.` },
      ],
      questionsBack: [`Welcher Kirchenvater des ersten Jahrtausends hat aus Mt 16,18 eine Jurisdiktion des römischen Bischofs über Alexandrien und Antiochien abgeleitet?`],
      followUps: [
        {
          id: 'petros-petra',
          objection: `„Und komm mir nicht mit ‚petros = kleiner Stein, petra = großer Fels'. Im Aramäischen steht beide Male *Kepha*."`,
          objectionBy: 'Katholischer Apologet',
          answer: `Einverstanden – das ist ein schwaches protestantisches Argument, das ich nicht benutze. Mein Punkt ist ein anderer: Selbst wenn Petrus der Fels ist, ist er es als **Apostel**, und das Fundament der Kirche sind nach Eph 2,20 und Offb 21,14 **alle** Apostel. Die Frage ist nicht, ob Petrus Fels ist, sondern ob der Bischof von Rom deshalb über allen anderen Bischöfen steht.`,
          followUps: [
            {
              id: 'schluessel-jes-22',
              objection: `„Die Schlüssel in Mt 16,19 spielen auf Jes 22,22 an: Eljakim erhält den Schlüssel des Hauses David – ein Hausverwalteramt mit Nachfolgern. Petrus erhält ein Amt, das weitergegeben wird."`,
              objectionBy: 'Scott Hahn / Taylor Marshall',
              answer: `Die typologische Verbindung ist möglich. Aber das Neue Testament selbst wendet Jes 22,22 an – und zwar auf **Christus**: Er „hat den Schlüssel Davids, der auftut, und niemand schließt zu" (Offb 3,7). Und die Vollmacht zu binden und zu lösen erhalten in Mt 18,18 alle Jünger. Die Schlüssel sind die Vollmacht der Apostel, die in allen rechtmäßigen Bischöfen weiterlebt – in Alexandrien wie in Rom.`,
              followUps: [
                {
                  id: 'irenaeus-rom',
                  objection: `„Irenäus sagt: Mit der Kirche von Rom muss wegen ihres vorzüglicheren Ursprungs jede Kirche übereinstimmen (Adv. Haer. III,3,2). Das ist der Primat!"`,
                  objectionBy: 'Erick Ybarra',
                  answer: `Irenäus begründet Roms Gewicht mit der Gründung durch **Petrus und Paulus** und mit der öffentlichen, bewährten apostolischen Überlieferung – gegen die Geheimlehren der Gnostiker. Der Satz ist sprachlich umstritten (er ist nur lateinisch erhalten). Und als Papst Viktor um 190 die Kirchen Kleinasiens wegen des Osterdatums exkommunizieren wollte, war es gerade Irenäus, der ihn ermahnte, den Frieden nicht zu brechen (Eusebius, KG V,24). Irenäus ehrte Rom – und widersprach seinem Bischof.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,2', status: 'paraphrase', note: 'Der Ausdruck „potentior principalitas" ist nur in lateinischer Übersetzung erhalten und wird unterschiedlich übersetzt.' },
                    { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'V,24,9–18', status: 'paraphrase', quote: `Irenäus ermahnte Viktor in geziemender Weise, nicht ganze Kirchen Gottes abzuschneiden, die eine alte Überlieferung bewahrten.` },
                  ],
                  questionsBack: [`Wenn Irenäus den Bischof von Rom für das unfehlbare Haupt hielt – warum ermahnte er Viktor öffentlich?`],
                  followUps: [
                    {
                      id: 'drei-petrus-sitze',
                      objection: `„Aber nur Rom ist der Sitz Petri, wo er starb."`,
                      objectionBy: 'Katholischer Apologet',
                      answer: `Die Alte Kirche sah das anders: Petrus wirkte zuerst in Antiochien, und Alexandrien wurde von seinem Schüler Markus gegründet. Gregor der Große selbst schrieb an Patriarch Eulogius von Alexandrien, der Stuhl Petri bestehe gewissermaßen an drei Orten – Rom, Alexandrien und Antiochien. Auch die alexandrinische Kirche ist also eine „petrinische" Kirche. Der Vorrang Roms lag in der Ordnung der Gemeinschaft, nicht in einem Monopol auf Petrus.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Gregor der Große', work: 'Registrum epistularum', ref: 'Brief an Eulogius von Alexandrien (VII,37 bzw. VII,40, je nach Zählung)', year: 'um 597', status: 'paraphrase', quote: `Obwohl es viele Apostel gibt, hat doch allein der Stuhl des Apostelfürsten Autorität erlangt – der Stuhl eines Einzigen, der aber an drei Orten besteht: in Rom, wo er starb, in Alexandrien, wohin er seinen Schüler Markus sandte, und in Antiochien, wo er sieben Jahre saß.`, note: 'Briefzählung variiert zwischen den Ausgaben.' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'konzilien-anerkannten-rom',
      objection: `„Die Konzilien selbst erkannten den Vorrang Roms an: Nizäa Kanon 6, Konstantinopel Kanon 3 – Rom an erster Stelle!"`,
      objectionBy: 'Katholischer Kirchenhistoriker',
      answer: `Ja, sie erkannten einen **Vorrang** an – das bestreiten wir nicht. Aber welcher Art? Nizäa Kanon 6 vergleicht die Gewalt Alexandriens in Ägypten mit der Roms in seinem Gebiet – parallel, nicht untergeordnet. Konstantinopel gibt der neuen Hauptstadt den zweiten Rang, „weil es das neue Rom ist" – die Logik ist der Rang der Städte. Ein Ehrenvorrang ist etwas anderes als die „volle und höchste Jurisdiktionsgewalt über die ganze Kirche" (Vatikanum I).`,
      sources: [
        { kind: 'konzil', work: 'Erstes Konzil von Konstantinopel, Kanon 3', year: '381', quote: `Der Bischof von Konstantinopel soll den Ehrenvorrang nach dem Bischof von Rom haben, weil diese Stadt das neue Rom ist.`, status: 'paraphrase' },
        { kind: 'gegner', work: 'Erstes Vatikanisches Konzil, Pastor Aeternus', ref: 'Kap. 3', year: '1870', status: 'paraphrase', quote: `Der Römische Bischof hat die volle und höchste Jurisdiktionsgewalt über die ganze Kirche, nicht nur in Glaubens- und Sittenfragen, sondern auch in Disziplin und Leitung.` },
      ],
      followUps: [
        {
          id: 'leo-gegen-kanon-28',
          objection: `„Papst Leo hat Kanon 28 von Chalcedon verworfen – und sich durchgesetzt. Das zeigt, dass Roms Rang nicht politisch, sondern petrinisch begründet ist."`,
          objectionBy: 'Erick Ybarra',
          answer: `Leo hat protestiert, ja – unter Berufung auf Nizäa. Aber die Konzilsväter von Chalcedon haben den Kanon formuliert, und der Osten hat ihn praktiziert; Konstantinopel wurde faktisch zweiter Sitz, was Rom später selbst anerkannte. Der Streit zeigt gerade: Das Verständnis des Vorrangs war zwischen Ost und West umstritten. Wäre der römische Universalprimat allgemein anerkannter Glaube gewesen, hätte ein ökumenisches Konzil den Rang Roms nicht politisch begründen können.`,
          followUps: [
            {
              id: 'petrus-durch-leo',
              objection: `„In Chalcedon riefen die Väter nach der Verlesung des Tomus: ‚Petrus hat durch Leo gesprochen!' Klarer kann man den Primat nicht anerkennen."`,
              objectionBy: 'Katholischer Apologet',
              answer: `Dieser Ruf erfolgte, nachdem die Väter den Tomus geprüft und mit Kyrill verglichen hatten – einige Bischöfe hatten Bedenken angemeldet, und es wurde eigens eine Prüfung vorgenommen. Ein Konzil, das ein päpstliches Schreiben prüft und **dann** zustimmt, ist das Gegenteil der Formel „aus sich selbst, nicht aufgrund der Zustimmung der Kirche". Und für Kopten kommt hinzu: Gerade der Tomus und Chalcedon wurden von einem großen Teil des Ostens abgelehnt – ein päpstliches Dokument hat hier die Einheit nicht gesichert, sondern die größte Spaltung der Alten Kirche mit ausgelöst.`,
              followUps: [
                {
                  id: 'sardika-appellation',
                  objection: `„Die Synode von Sardika (343) gab Rom das Recht, Berufungen von Bischöfen aus der ganzen Kirche anzunehmen (Kanones 3–5)."`,
                  objectionBy: 'Katholischer Kirchenhistoriker',
                  answer: `Sardika war eine westliche Synode – die östlichen Bischöfe zogen ab und tagten getrennt. Die Kanones gewähren das Berufungsrecht ausdrücklich „zur Ehre des Andenkens an Petrus" als synodale Regelung – also ein von einer Synode verliehenes Recht, kein göttliches. Und als Rom sich im Fall des Presbyters Apiarius (418–424) auf diese Kanones berief, als seien sie nizänisch, widersprachen die afrikanischen Bischöfe und baten Papst Coelestin, keine Berufungen aus Afrika mehr anzunehmen.`,
                  sources: [
                    { kind: 'konzil', work: 'Synode von Karthago, Schreiben an Papst Coelestin („Optaremus")', year: 'um 424', status: 'paraphrase', note: 'Die afrikanischen Bischöfe verweisen auf Nizäa, wonach Angelegenheiten in der eigenen Provinz entschieden werden sollen.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ohne-papst-zerfall',
      objection: `„Ohne Papst zerfällt die Kirche – siehe die zehntausenden protestantischen Denominationen. Christus wollte ein sichtbares Prinzip der Einheit."`,
      objectionBy: 'Scott Hahn',
      answer: `Die Zersplitterung des Protestantismus beklagen wir mit dir. Aber die orthodoxen Kirchen haben ohne römischen Primat seit 1500 Jahren denselben Glauben, dieselben Sakramente und dieselbe bischöfliche Ordnung bewahrt – die koptische Kirche unter Verfolgung, ohne politische Macht. Die Einheit liegt im gemeinsamen apostolischen Glauben, in der Eucharistie und im Episkopat. Und historisch hat gerade die Ausweitung des römischen Anspruchs (1054, 1870) zu Spaltungen beigetragen.`,
      followUps: [
        {
          id: 'orthodoxe-streiten-auch',
          objection: `„Aber die Orthodoxen sind in nationale Kirchen zersplittert und streiten heftig – siehe Moskau und Konstantinopel seit 2018."`,
          objectionBy: 'Katholischer Apologet',
          answer: `Das ist wahr und schmerzlich – administrative und politische Konflikte gibt es. Aber sie betreffen die Jurisdiktion, nicht den Glauben: Es gibt keine orthodoxe Kirche, die eine andere Christologie oder andere Sakramente lehrt. Auch die katholische Kirche kennt heute tiefe innere Gegensätze, trotz Papst. Ein sichtbares Haupt garantiert keine Einheit; Treue zum gemeinsamen Glauben tut es eher.`,
          followUps: [
            {
              id: 'staerke-deine-brueder',
              objection: `„Lk 22,32: ‚Wenn du dich bekehrst, so stärke deine Brüder.' Und Joh 21: ‚Weide meine Schafe.' Petrus erhält ein Hirtenamt über die ganze Herde."`,
              objectionBy: 'Katholischer Apologet',
              answer: `Beide Stellen gehören zur Geschichte der **Verleugnung**: Jesus kündigt an, dass Petrus fallen wird, und betet, dass sein Glaube nicht ganz erlischt; in Joh 21 fragt er dreimal „Hast du mich lieb?" – nach dem dreimaligen Nein. Es ist die liebevolle Wiedereinsetzung eines gefallenen Apostels. Und Petrus selbst gibt den Hirtenauftrag an alle Ältesten weiter: „Weidet die Herde Christi, so euch befohlen ist" (1 Petr 5,2) – als „Mitältester".`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '22,31–32', quote: `Simon, Simon, siehe, der Satanas hat euer begehrt, daß er euch möchte sichten wie den Weizen; ich aber habe für dich gebeten, daß dein Glaube nicht aufhöre. Und wenn du dereinst dich bekehrst, so stärke deine Brüder.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'unfehlbarkeit-nur-ex-cathedra',
      objection: `„Unfehlbarkeit heißt nicht, dass der Papst nicht sündigt oder sich nie irrt. Nur wenn er ex cathedra eine Glaubenslehre für die ganze Kirche definiert – das geschah nur zweimal (1854, 1950). Ihr glaubt doch auch, dass der Geist die Kirche vor Irrtum bewahrt."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Ja, wir glauben, dass der Geist die **Kirche** in der Wahrheit bewahrt (Joh 16,13; 1 Tim 3,15). Aber Vatikanum I sagt, die Definitionen des Papstes seien „**aus sich selbst, nicht aber aufgrund der Zustimmung der Kirche**" unabänderlich. Damit wird ein Bischof von der Gemeinschaft der Kirche unabhängig gemacht. Die Alte Kirche kannte das nicht: Selbst ökumenische Konzilien galten erst, wenn die Kirche sie annahm – und ein Konzil verurteilte einen Papst.`,
      sources: [
        { kind: 'gegner', work: 'Erstes Vatikanisches Konzil, Pastor Aeternus', ref: 'Kap. 4', year: '18. Juli 1870', quote: `… dass daher solche Definitionen des Römischen Bischofs aus sich selbst, nicht aber aufgrund der Zustimmung der Kirche unabänderlich sind.`, original: `… ideoque eiusmodi Romani Pontificis definitiones ex sese, non autem ex consensu Ecclesiae, irreformabiles esse.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'honorius-nicht-ex-cathedra',
          objection: `„Honorius hat nicht ex cathedra gesprochen, sondern in privaten Briefen – und er wurde wegen Nachlässigkeit verurteilt, nicht wegen Häresie."`,
          objectionBy: 'Erick Ybarra',
          answer: `Die Unterscheidung „ex cathedra" wurde erst 1870 genau definiert – das sechste Konzil kannte sie nicht und verurteilte Honorius ausdrücklich zusammen mit den Häretikern, weil er „in allem" der Meinung des Sergius gefolgt sei. Papst Leo II. bestätigte die Verurteilung, und über Jahrhunderte verurteilten neue Päpste in ihrem Amtseid Honorius mit. Dass man ihn heute entschuldigt, zeigt eher, wie sehr die spätere Lehre die frühere Geschichte nachträglich deuten muss.`,
          sources: [
            { kind: 'sonstiges', work: 'Liber Diurnus Romanorum Pontificum (Glaubensbekenntnis neu gewählter Päpste)', year: 'früh- bis hochmittelalterlich', status: 'paraphrase', note: 'Das Bekenntnis nennt Honorius unter den Verurteilten. Genaue Formulierung und Gebrauchszeitraum in der Forschung diskutiert.' },
          ],
          followUps: [
            {
              id: 'wer-weiss-was-ex-cathedra',
              objection: `„Ex cathedra ist klar definiert: eine Lehre über Glaube oder Sitten, für die ganze Kirche, als endgültig zu halten. Da gibt es keine Unklarheit."`,
              objectionBy: 'Katholischer Apologet',
              answer: `Dann frage ich: Wie viele Ex-cathedra-Entscheidungen gibt es? Katholische Theologen sind sich darüber selbst nicht einig – manche nennen zwei, andere zählen weitere päpstliche Lehrentscheidungen hinzu. Ein Kriterium, das man meist nur im Nachhinein und umstritten anwenden kann, ist als „letzte sichtbare Instanz" wenig hilfreich.`,
              followUps: [
                {
                  id: 'unam-sanctam',
                  objection: `„Nenne mir eine Lehrentscheidung, die die katholische Kirche zurücknehmen musste."`,
                  objectionBy: 'Katholischer Apologet',
                  answer: `Bonifaz VIII. erklärte 1302 in „Unam Sanctam", es sei für jedes menschliche Geschöpf „durchaus heilsnotwendig, dem Römischen Bischof unterworfen zu sein". Viele Theologen halten zumindest diesen Schlusssatz für eine feierliche Definition. Heute lehrt die katholische Kirche, dass die orthodoxen Kirchen wahre Sakramente haben und „Kirchen" sind (Vatikanum II, Unitatis Redintegratio 15), und unterzeichnet gemeinsame Erklärungen mit dem koptischen Papst. Das ist gut – aber es zeigt, dass ein scheinbar „unabänderlicher" Satz neu gedeutet werden musste.`,
                  sources: [
                    { kind: 'gegner', author: 'Bonifaz VIII.', work: 'Bulle Unam Sanctam', year: '1302', quote: `Wir erklären, sagen und definieren, dass es für jedes menschliche Geschöpf durchaus heilsnotwendig ist, dem Römischen Bischof unterworfen zu sein.`, original: `Porro subesse Romano Pontifici omni humanae creaturae declaramus, dicimus, definimus et pronunciamus omnino esse de necessitate salutis.`, translation: 'eigene Übersetzung', status: 'verbatim' },
                    { kind: 'gegner', work: 'Zweites Vatikanisches Konzil, Unitatis Redintegratio', ref: '15', year: '1964', status: 'paraphrase', note: 'Die Ostkirchen besitzen wahre Sakramente, vor allem das Priestertum und die Eucharistie.' },
                  ],
                  questionsBack: [`Sind die Kopten nach katholischer Lehre heute „außerhalb des Heils", weil sie dem Papst nicht unterstehen – wie Unam Sanctam es wörtlich sagt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kopten-haben-auch-papst',
      objection: `„Ihr Kopten nennt euren Patriarchen doch selbst ‚Papst'. Ihr kennt also auch ein Papsttum!"`,
      objectionBy: 'Katholischer Gesprächspartner',
      answer: `Ja – und zwar länger als Rom: Der Titel *papas* („Vater") ist für den Bischof von Alexandrien schon im 3. Jahrhundert für Heraklas bezeugt (Eusebius, KG VII,7,4); in Rom wurde er erst später exklusiv. Aber der koptische Papst hat keine Jurisdiktion über andere Patriarchate und ist nicht unfehlbar; er leitet seine Kirche mit dem Heiligen Synod. Gerade das zeigt: „Papst" war ein Ehrentitel väterlicher Liebe, kein Anspruch auf Weltherrschaft.`,
      followUps: [
        {
          id: 'gregor-nur-titel',
          objection: `„Gregor der Große lehnte nur den Titel ‚universaler Bischof' ab, nicht die römische Jurisdiktion. Er hat sehr wohl Autorität ausgeübt."`,
          objectionBy: 'Katholischer Kirchenhistoriker',
          answer: `Gregor übte im Westen große Autorität aus, das stimmt. Aber seine Begründung ist aufschlussreich: Als Eulogius von Alexandrien ihn „universalen Papst" nannte, antwortete er, das solle nicht geschehen; wenn er universaler Papst sei, hörten die anderen auf, Bischöfe zu sein. Wer sich „universaler Bischof" nenne, sei in seinem Stolz ein Vorläufer des Antichristen. Diese Sprache passt zur synodalen Ordnung, nicht zu Vatikanum I.`,
          sources: [
            { kind: 'kirchenvater', author: 'Gregor der Große', work: 'Registrum epistularum, Brief an Eulogius von Alexandrien', ref: 'VIII,29 bzw. VIII,30 (je nach Zählung)', year: '598', status: 'paraphrase', quote: `Wenn Eure Heiligkeit mich universalen Papst nennt, bestreitet Ihr Euch selbst, was Ihr mir universal zuschreibt.` },
            { kind: 'kirchenvater', author: 'Gregor der Große', work: 'Registrum epistularum, Brief an Kaiser Maurikios', ref: 'VII,30 bzw. VII,33 (je nach Zählung)', status: 'paraphrase', quote: `Wer sich universalen Priester nennt oder so genannt werden will, ist in seiner Überhebung ein Vorläufer des Antichristen.` },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Kirchenvater des ersten Jahrtausends lehrte, dass die Definitionen des römischen Bischofs „aus sich selbst, nicht aufgrund der Zustimmung der Kirche" unabänderlich sind?`,
    `Warum verurteilte das 6. ökumenische Konzil Papst Honorius – und warum bestätigte Papst Leo II. das?`,
    `Warum vergleicht Nizäa Kanon 6 die Gewalt Alexandriens mit der Roms, statt Alexandrien Rom zu unterstellen?`,
    `Warum ermahnte Irenäus Papst Viktor, und warum widersprach Cyprian Papst Stephan – beide Heilige auch eurer Kirche?`,
    `Was meinte Gregor der Große, als er den Titel „universaler Papst" gegenüber dem Patriarchen von Alexandrien ablehnte?`,
  ],
  avoid: [
    `Nicht das Argument „petros = kleiner Stein, petra = großer Fels" benutzen. Es ist sprachlich schwach und wird von guten Apologeten sofort widerlegt.`,
    `Unfehlbarkeit nicht mit Sündlosigkeit verwechseln. Kein Katholik behauptet, der Papst sündige nicht.`,
    `Keine Skandal-Listen über Päpste (Renaissance-Päpste usw.) als Argument benutzen. Moralische Fehler widerlegen kein Amt – auch nicht ein orthodoxes.`,
    `Nicht so tun, als habe Rom in der Alten Kirche gar keinen Vorrang gehabt. Das ist historisch falsch.`,
  ],
  concessions: [
    `Petrus hat im Neuen Testament eine herausragende Stellung, und Mt 16,18 meint sehr wahrscheinlich ihn persönlich als Felsen.`,
    `Die römische Kirche hatte in der Alten Kirche den ersten Ehrenrang und großes moralisches Gewicht (Ignatius: „Vorsitz in der Liebe"); Alexandrien und Rom handelten oft gemeinsam.`,
    `Auch die orthodoxe Welt kennt ernste Jurisdiktionskonflikte; die Frage einer dienenden Form des Primats ist für die Einheit der Christen wichtig, und Papst Johannes Paul II. hat in „Ut unum sint" (1995) selbst um Vorschläge gebeten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Meyendorff (Hg.)', work: 'The Primacy of Peter: Essays in Ecclesiology and the Early Church', year: '1963; Neuausgabe 1992', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Klaus Schatz', work: 'Der päpstliche Primat: Seine Geschichte von den Ursprüngen bis zur Gegenwart', year: '1990', status: 'paraphrase', note: 'Katholischer Jesuit; ehrliche historische Darstellung, die auch die Grenzen der frühen Belege nennt.' },
    { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Einheit der katholischen Kirche', status: 'paraphrase' },
    { kind: 'gegner', author: 'Erick Ybarra', work: 'The Papacy: Revisiting the Debate Between Catholics and Orthodox', year: '2022', status: 'paraphrase', note: 'Die gründlichste aktuelle katholische Verteidigung.' },
  ],
  difficulty: 3,
  tags: ['Papsttum', 'Primat', 'Unfehlbarkeit', 'Vatikanum I', 'Ekklesiologie', 'Petrus'],
  related: ['evangelikale-sonderlehren/keine-hierarchie-noetig', 'katholizismus/filioque', 'katholizismus/unbefleckte-empfaengnis', 'christologie-chalcedon/chalcedon-mass-der-orthodoxie', 'sola-scriptura/kirche-war-verdorben'],
};

export default claim;
