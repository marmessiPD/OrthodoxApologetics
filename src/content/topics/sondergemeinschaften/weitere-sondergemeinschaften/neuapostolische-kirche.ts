import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'neuapostolische-kirche',
  title: `„Die Stammapostel der Neuapostolischen Kirche setzen das Apostelamt fort."`,
  proponents: [
    { name: 'Jean-Luc Schneider', role: 'Stammapostel der Neuapostolischen Kirche International seit 2013', work: 'Predigten und Schreiben als Kirchenleiter' },
    { name: 'Wilhelm Leber', role: 'Stammapostel 2005–2013', work: 'Stellungnahme zur „Botschaft" von Stammapostel Bischoff (2013)' },
    { name: 'Neuapostolische Kirche International', role: 'Offizielle Lehrdarstellung', work: 'Katechismus der Neuapostolischen Kirche (2012)' },
  ],
  steelman: `Christus hat Apostel eingesetzt, und Paulus sagt ausdrücklich, dass er „etliche zu Aposteln" gegeben hat, „bis daß wir alle hinankommen zur Einheit des Glaubens" (Eph 4,11–13). Diese Einheit ist noch nicht erreicht – also muss es weiterhin Apostel geben. In der frühen Kirche ging das lebendige Apostelamt verloren; die Kirche erstarrte in Ämtern ohne apostolische Vollmacht. Im 19. Jahrhundert rief Gott in der Katholisch-apostolischen Gemeinde wieder Apostel, und seit 1863 setzt die Neuapostolische Kirche dieses Amt fort. Nur Apostel können die Gabe des Heiligen Geistes spenden – so wie in Samaria, wo erst Petrus und Johannes kommen mussten (Apg 8,14–17). Der Stammapostel führt als Nachfolger in der Rolle des Petrus die weltweite Apostelschaft und sichert ihre Einheit. Die Kirche hat sich erneuert: einen Katechismus (2012) veröffentlicht, sich ökumenisch geöffnet und sich 2013 für die Fehler um die „Botschaft" Bischoffs entschuldigt. Und die „apostolische Sukzession" der alten Kirchen ist historisch genauso unbeweisbar wie jede andere Berufung.`,
  biblical: {
    summary: `Das Neue Testament nennt klare Kennzeichen eines Apostels im engeren Sinn: Er muss den Auferstandenen gesehen haben und Zeuge seiner Auferstehung sein (Apg 1,21–22; 1 Kor 9,1). Paulus nennt sich ausdrücklich den **letzten**, dem der Auferstandene erschien (1 Kor 15,8). Die Apostel sind das **Fundament** der Kirche (Eph 2,20; Offb 21,14) – ein Fundament legt man einmal, man legt es nicht in jeder Generation neu. Was weitergegeben wird, ist der „Glaube, der **einmal** den Heiligen übergeben ist" (Jud 3), und das Hirtenamt, das die Apostel durch Handauflegung an Bischöfe und Presbyter übertrugen (Apg 14,23; Tit 1,5; 2 Tim 1,6) – nicht ein neues Apostelamt. Die Gemeinde in Ephesus wird gelobt, weil sie die prüfte, „so da sagen, sie seien Apostel, und sind's nicht" (Offb 2,2).`,
    detail: `**Eph 4,11–13 im Zusammenhang:** Paulus beschreibt die Gaben, mit denen der erhöhte Christus seine Kirche aufbaut. Er sagt nicht, dass jede Gabe in jeder Generation in derselben Form vorhanden sein muss. Die Apostel wirken bis zur Vollendung fort – durch ihr Wort (die Schrift) und durch die Hirten, die sie eingesetzt haben. Bezeichnend: In derselben Liste stehen die „Propheten". Das Prophetenamt spielte in den Anfängen der neuapostolischen Bewegung eine zentrale Rolle (der Prophet Heinrich Geyer berief 1862/63 neue Apostel), trat aber später zurück. Wer aus Eph 4,11 die Fortdauer der Apostel ableitet, müsste ebenso die Fortdauer der Propheten fordern.

**Apg 8,14–17:** Die Apostel legen den Samaritanern die Hände auf, und sie empfangen den Geist. Aber in Apg 9,17 legt Ananias – kein Apostel – Saulus die Hände auf, damit er mit dem Geist erfüllt werde, und in Apg 10,44 fällt der Geist ohne Handauflegung auf Kornelius. Die Kirche hat die Gabe des Geistes von Anfang an in der Myronsalbung durch die Nachfolger der Apostel weitergegeben.

**Prophetie und Prüfung:** „Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat" (Dtn 18,22).`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '2,20', quote: `… erbaut auf den Grund der Apostel und Propheten, da Jesus Christus der Eckstein ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,11–13', quote: `Und er hat etliche zu Aposteln gesetzt, etliche aber zu Propheten, etliche zu Evangelisten, etliche zu Hirten und Lehrern, daß die Heiligen zugerichtet werden zum Werk des Amts, dadurch der Leib Christi erbaut werde, bis daß wir alle hinankommen zur Einheit des Glaubens …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,21–22', quote: `Einer der Männer, die von der Taufe des Johannes bis zur Himmelfahrt bei Jesus waren, soll mit den Elf Zeuge seiner Auferstehung werden.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,8', quote: `Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,14', quote: `Und die Mauer der Stadt hatte zwölf Gründe und auf ihnen die Namen der zwölf Apostel des Lammes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '2,2', quote: `… und hast versucht die, so da sagen, sie seien Apostel, und sind's nicht, und hast sie als Lügner erfunden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist Apostolizität **Kontinuität**: derselbe Glaube, der von den Aposteln überliefert wurde, und dieselbe ununterbrochene Handauflegung. Der Evangelist Markus gründete die Kirche von Alexandrien; Papst Tawadros II. ist sein 118. Nachfolger. Die Apostel setzten Bischöfe und Diakone ein und ordneten an, dass bewährte Männer ihnen nachfolgen (1. Clemensbrief 42; 44). Irenäus von Lyon verwies um 180 gegen die Gnostiker auf die öffentlich bekannte Reihe der Bischöfe, die die Lehre der Apostel unverfälscht bewahrt hätten. Die Gabe des Heiligen Geistes wird seit apostolischer Zeit in der Myronsalbung gespendet, deren heiliges Öl der Papst von Alexandrien weiht.`,
    detail: `Die Kirche kennt keine neue Offenbarung nach den Aposteln. Bischöfe sind nicht neue Apostel, sondern Hüter des apostolischen Glaubens. Sie können irren – darum entscheidet nicht ein einzelner „Oberapostel", sondern die Gemeinschaft der Bischöfe in Übereinstimmung mit Schrift und Überlieferung. Eine Bewegung, die im 19. Jahrhundert neue Apostel durch Prophetenworte beruft, ohne Verbindung mit der Kirche der vorangegangenen 1800 Jahre, setzt das Apostelamt nicht fort, sondern beginnt etwas Neues.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '42; 44', year: 'um 96', quote: `Die Apostel empfingen das Evangelium von Christus, setzten ihre Erstlinge als Bischöfe und Diakone ein und verfügten, dass nach deren Tod andere bewährte Männer ihren Dienst übernehmen sollten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1–3', quote: `Die Überlieferung der Apostel ist in der ganzen Welt offenbar; man kann die von den Aposteln eingesetzten Bischöfe und ihre Nachfolger bis heute aufzählen. Hätten die Apostel geheime Mysterien gekannt, hätten sie diese vor allem denen übergeben, denen sie die Kirchen anvertrauten.`, status: 'paraphrase' },
      { kind: 'koptisch', work: 'Weihe des heiligen Myron durch den Papst von Alexandrien', quote: `Die Gabe des Heiligen Geistes wird in der Myronsalbung nach der Taufe gespendet; das Myron wird vom Patriarchen geweiht.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Geschichte:** Die Neuapostolische Kirche (NAK) geht auf die Katholisch-apostolische Gemeinde zurück, in der ab 1832 in England durch Prophetenworte zwölf Apostel berufen wurden; man erwartete die Wiederkunft Christi vor dem Tod des letzten Apostels. Als einige Apostel starben, berief der Prophet Heinrich Geyer 1862/63 in Hamburg ohne Zustimmung der verbliebenen Apostel neue Apostel; die Hamburger Gemeinde unter Friedrich Wilhelm Schwarz wurde 1863 ausgeschlossen – das gilt als Gründungsjahr der NAK. Der letzte der ursprünglichen Apostel starb 1901. Im frühen 20. Jahrhundert bildete sich das Amt des Stammapostels als Leiter der weltweiten Kirche heraus.`,
    detail: `**Die „Botschaft":** Stammapostel Johann Gottfried Bischoff (Stammapostel 1930–1960) verkündete ab Weihnachten 1951, der Herr werde zu seinen Lebzeiten wiederkommen. 1954 wurde dies faktisch zum Dogma erhoben; der Glaube daran wurde Voraussetzung für Ordinationen und Versiegelungen, und Apostel, die widersprachen, wurden ausgeschlossen. Bischoff starb am 6. Juli 1960. Sein Nachfolger Walter Schmidt erklärte, der Herr habe seinen Willen geändert. 2013 stellte Stammapostel Wilhelm Leber fest, die Botschaft sei eine persönliche Überzeugung Bischoffs gewesen und hätte mangels biblischer Grundlage nie zum Dogma erhoben werden dürfen; er entschuldigte sich bei allen, die darunter gelitten hatten.

**Heute:** Die NAK hat einen Katechismus (2012) veröffentlicht, sich ökumenisch geöffnet und erkennt die trinitarische Taufe anderer Kirchen an. Sie kennt drei Sakramente: Taufe, Heilige Versiegelung (nur durch Apostel) und Abendmahl; dreimal im Jahr finden Gottesdienste für Entschlafene statt, in denen Sakramente stellvertretend für Verstorbene gespendet werden. In Deutschland zählte sie 2023 rund 300.000 Mitglieder, weltweit nach eigenen Angaben mehrere Millionen, die große Mehrheit in Afrika.`,
    sources: [
      { kind: 'gegner', author: 'Neuapostolische Kirche International', work: 'Katechismus der Neuapostolischen Kirche', year: '2012', ref: 'Kap. 7 (Das Amt) und Kap. 8 (Sakramente)', quote: `Das Apostelamt ist von Jesus Christus gestiftet und in der Neuapostolischen Kirche wieder besetzt; die Heilige Versiegelung wird durch Apostel gespendet.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Wilhelm Leber', work: 'Stellungnahme zur Botschaft von Stammapostel Johann Gottfried Bischoff', year: '2013', quote: `Die Botschaft war eine persönliche Überzeugung Bischoffs; sie hätte mangels biblischer Begründung nie zum Dogma erhoben werden dürfen. Dass der Glaube daran Voraussetzung für Ordinationen und Versiegelungen wurde, „war nicht gut". Entschuldigung bei allen, die darunter litten.`, status: 'paraphrase', url: 'https://nak.org/de/db/14043/Bekanntmachungen/Stammapostel-Wilhelm-Leber-aeussert-sich-zur-Botschaft' },
      { kind: 'fachliteratur', author: 'Kurt Hutten', work: 'Seher, Grübler, Enthusiasten', year: '1950 (zahlreiche Neuauflagen)', ref: 'Kapitel zur Neuapostolischen Kirche', quote: `Darstellung der Entstehung aus der Katholisch-apostolischen Gemeinde, des Hamburger Schismas und der Entwicklung des Stammapostelamtes.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ein Apostel im biblischen Sinn ist ein Augenzeuge des Auferstandenen (Apg 1,21–22), und Paulus nennt sich ausdrücklich den letzten (1 Kor 15,8). Die Apostel sind das Fundament der Kirche (Eph 2,20) – ein Fundament legt man einmal. Fortgesetzt werden ihr Glaube und ihr Hirtenamt durch die Bischöfe, die sie einsetzten – so in der koptischen Kirche seit dem Evangelisten Markus. Und die „Botschaft" Bischoffs von 1951, die zum Dogma wurde und nicht eintraf, zeigt gerade, dass auch ein Stammapostel eine ganze Kirche in die Irre führen kann.`,
  keyPoints: [
    `**Kennzeichen eines Apostels:** Augenzeuge des Auferstandenen (Apg 1,21–22; 1 Kor 9,1); Paulus ist der „letzte" (1 Kor 15,8).`,
    `**Fundament:** Die Apostel sind der einmal gelegte Grund (Eph 2,20; Offb 21,14); weitergegeben wird der Glaube, „der einmal übergeben ist" (Jud 3).`,
    `**Eph 4,11 beweist zu viel:** Wer daraus fortdauernde Apostel ableitet, müsste auch Propheten verlangen – deren Amt die NAK nicht mehr kennt.`,
    `**Kontinuität statt Neubeginn:** Die alten Kirchen haben eine ununterbrochene Reihe der Handauflegung; die NAK beginnt 1832/1863 durch Prophetenworte.`,
    `**Die Botschaft:** Ein Dogma, das zur Bedingung für Ämter und Sakramente gemacht wurde und nicht eintraf – die NAK selbst hat sich 2013 dafür entschuldigt.`,
    `**Geistgabe:** Seit apostolischer Zeit in der Myronsalbung gespendet – niemand musste 1800 Jahre auf neue Apostel warten.`,
  ],
  argument: {
    name: 'Das Argument vom einmal gelegten Fundament',
    summary: 'Das Apostelamt im engeren Sinn war an die Zeugenschaft der Auferstehung gebunden und ist darum nicht wiederholbar.',
    premises: [
      { text: 'P1: Ein Apostel im engeren Sinn ist ein von Christus selbst gesandter Augenzeuge seiner Auferstehung.', support: `Apg 1,21–22; 1 Kor 9,1; 15,5–8. Paulus begründet sein Apostelamt ausdrücklich damit, den Herrn gesehen zu haben.` },
      { text: 'P2: Paulus bezeichnet sich als den letzten, dem der Auferstandene so erschienen ist.', support: `1 Kor 15,8: „Am letzten nach allen".`, sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,8', quote: `Am letzten nach allen ist er auch von mir … gesehen worden.`, translation: 'Luther 1912', status: 'verbatim' }] },
      { text: 'P3: Die Apostel setzten nicht neue Apostel, sondern Bischöfe/Presbyter und Diakone als Nachfolger im Hirtendienst ein.', support: `Apg 14,23; Tit 1,5; 1. Clemensbrief 42; 44; Irenäus, Adv. Haer. III,3.` },
    ],
    conclusion: 'Das Apostelamt im engeren Sinn ist mit der apostolischen Generation abgeschlossen; seine Fortsetzung liegt im überlieferten Glauben und in der bischöflichen Sukzession, nicht in einer Neuberufung von Aposteln im 19. Jahrhundert.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel, der die Kennzeichen des Apostelamts benennt',
      text: `Paulus verteidigt sein Apostelamt mit dem Hinweis, den Herrn gesehen zu haben (1 Kor 9,1), und nennt sich zugleich den letzten Zeugen des Auferstandenen (1 Kor 15,8). Er warnt vor „falschen Aposteln", die sich als Apostel Christi verstellen (2 Kor 11,13), und beschreibt die Apostel als das Fundament der Kirche (Eph 2,20). Für die Zeit nach sich selbst setzt er Älteste und Bischöfe ein und überträgt Timotheus und Titus den Hirtendienst – keine neuen Apostel.`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '9,1', quote: `Bin ich nicht ein Apostel? Bin ich nicht frei? Habe ich nicht unsern Herrn Jesus Christus gesehen?`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'clemens-rom',
      role: 'als Zeuge der Generation nach den Aposteln',
      text: `Clemens, der die Apostel noch gekannt haben dürfte, schreibt um 96 an die Korinther: Die Apostel setzten Bischöfe und Diakone ein und trafen Vorsorge, dass nach deren Tod andere bewährte Männer ihren Dienst übernehmen. Das ist das früheste Zeugnis für die Art, wie die Kirche das apostolische Erbe weitergab – durch geordnete Nachfolge im Hirtenamt, nicht durch neue Apostel.`,
      sources: [{ kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '42; 44', quote: `Die Apostel setzten Bischöfe und Diakone ein und regelten deren Nachfolge.`, status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Verteidiger der öffentlichen apostolischen Überlieferung',
      text: `Irenäus argumentiert gegen Gruppen, die sich auf besondere Offenbarungen beriefen: Die Lehre der Apostel ist öffentlich, in allen Kirchen bekannt und durch die Reihe der Bischöfe verbürgt. Wer behauptet, die Apostel hätten Wesentliches nicht weitergegeben oder ihr Amt sei verloren gegangen, muss erklären, warum die Kirchen, die die Apostel gründeten, davon nichts wissen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1', quote: `Die Überlieferung der Apostel ist in jeder Kirche für alle sichtbar.`, status: 'paraphrase' }],
    },
    {
      person: 'kurt-hutten',
      role: 'als Kenner der Sondergemeinschaften im deutschsprachigen Raum',
      text: `Hutten hat die Entstehung der Neuapostolischen Kirche aus der Katholisch-apostolischen Gemeinde sachlich nachgezeichnet: die Berufung von Aposteln durch Prophetenworte, die Naherwartung, das Hamburger Schisma von 1863 und die Entwicklung zu einer streng hierarchischen Kirche mit dem Stammapostel an der Spitze. Seine Darstellung zeigt, dass das neuapostolische Apostelamt keine Fortsetzung, sondern eine Neugründung des 19. Jahrhunderts ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Kurt Hutten', work: 'Seher, Grübler, Enthusiasten', year: '1950 ff.', quote: `Kirchengeschichtliche Darstellung der Neuapostolischen Kirche.`, status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Patriarch einer apostolischen Kirche',
      text: `Papst Schenuda III. lehrte, dass das Priestertum in der Kirche nicht von unten gewählt oder durch private Berufungen begründet wird, sondern durch Handauflegung in ununterbrochener Linie von den Aposteln her weitergegeben wurde. Die Kirche von Alexandrien kann ihre Patriarchen bis zum Evangelisten Markus zurückverfolgen; diese Kontinuität ist für ihn ein Zeichen der Treue Christi zu seiner Verheißung, bei seiner Kirche zu bleiben bis ans Ende der Welt.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie (Comparative Theology)', quote: `Das Priestertum als von den Aposteln durch Handauflegung überliefertes Amt.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'eph-4-bis-zur-einheit',
      objection: `Eph 4,11–13 sagt: Christus hat Apostel gegeben, „bis daß wir alle hinankommen zur Einheit des Glaubens". Diese Einheit ist noch nicht erreicht – also muss es Apostel geben bis zur Wiederkunft.`,
      objectionBy: 'Katechismus der Neuapostolischen Kirche',
      answer: `Paulus beschreibt die Gaben, durch die Christus seine Kirche aufbaut – nicht, dass jede Gabe in jeder Generation in derselben Form da sein muss. Im selben Brief nennt er die Apostel das Fundament (Eph 2,20): Ein Fundament legt man einmal, und es trägt bis zum Schluss. Die Apostel wirken fort – durch ihr Wort in der Schrift und durch die Hirten, die sie eingesetzt haben.`,
      questionsBack: [`Wenn Eph 4,11 fortdauernde Apostel verlangt – warum dann nicht auch fortdauernde Propheten?`],
      followUps: [
        {
          id: 'propheten-anders',
          objection: `Die prophetische Gabe wirkt heute anders, durch den Geist in den Gottesdiensten. Ein eigenes Prophetenamt braucht es nicht mehr.`,
          objectionBy: 'Neuapostolische Gesprächspartner',
          answer: `Dann gestehst du zu, dass eine Gabe aus Eph 4,11 heute in anderer Form weiterwirken kann als zu Beginn. Genau das sagen wir über die Apostel: Ihr Dienst lebt im apostolischen Glauben und im Hirtenamt der Bischöfe fort. Dein Argument trägt also nicht – oder es trägt für beide Ämter.`,
          followUps: [
            {
              id: 'nur-apostel-versiegeln',
              objection: `Aber nur Apostel können den Heiligen Geist spenden. In Samaria musste Philippus warten, bis Petrus und Johannes kamen (Apg 8,14–17).`,
              objectionBy: 'Katechismus der Neuapostolischen Kirche',
              answer: `In Apg 8 waren es Apostel – aber in Apg 9,17 legt Ananias, ein einfacher Jünger, Saulus die Hände auf, damit er mit dem Geist erfüllt werde, und in Apg 10,44 fällt der Geist ohne jede Handauflegung auf Kornelius. Die Kirche hat die Gabe des Geistes seit den Aposteln in der Myronsalbung durch deren Nachfolger weitergegeben – die Kopten bis heute, mit dem vom Patriarchen geweihten Myron.`,
              sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '9,17', quote: `Ananias legte die Hände auf Saulus und sprach: Der Herr hat mich gesandt, dass du wieder sehend und mit dem heiligen Geist erfüllt werdest.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'sukzession-unbeweisbar',
                  objection: `Eure apostolische Sukzession ist doch selbst ein Mythos. Die frühen Bischofslisten sind späte Konstruktionen, und das Bischofsamt hat sich erst entwickelt.`,
                  objectionBy: 'Neuapostolische Apologeten mit Verweis auf historische Kritik',
                  answer: `Dass sich die Form des Bischofsamtes entwickelt hat und einzelne frühe Listen Lücken haben, gebe ich zu. Aber schon um 96 bezeugt Clemens von Rom die geordnete Nachfolge, um 180 nennt Irenäus die Bischöfe Roms namentlich, und Eusebius überliefert die Nachfolger des Markus in Alexandrien. Entscheidend ist Irenäus' Punkt: Die Lehre der Apostel war öffentlich und überall dieselbe. Die neuapostolischen Apostel dagegen entstanden 1832 und 1863 durch Prophetenworte, ohne jede Verbindung zu den Kirchen der vorangegangenen 1800 Jahre – das ist keine Fortsetzung, sondern ein Neubeginn.`,
                  questionsBack: [`Durch wessen Handauflegung, die auf die Apostel zurückgeht, wurden die Apostel von 1832 und 1863 eingesetzt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bischoff-persoenlicher-irrtum',
      objection: `Die Botschaft Bischoffs war ein persönlicher Irrtum. Auch Petrus hat geirrt (Gal 2,11). Und wir haben uns 2013 offiziell entschuldigt. Damit ist die Sache erledigt.`,
      objectionBy: 'Neuapostolische Gesprächspartner',
      answer: `Die Entschuldigung von 2013 ist ehrenwert, und ich erkenne sie an. Aber es war kein privater Irrtum: Die Botschaft wurde als göttliche Offenbarung verkündet, 1954 faktisch zum Dogma erhoben, zur Bedingung für Ordination und Versiegelung gemacht, und widersprechende Apostel wurden ausgeschlossen. Petrus' Fehler in Antiochia war ein Fehlverhalten, das Paulus öffentlich korrigierte – keine Prophezeiung, die er der ganzen Kirche als Glaubenssatz auferlegte.`,
      sources: [{ kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '18,22', quote: `Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat; der Prophet hat's aus Vermessenheit geredet, darum scheue dich nicht vor ihm.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'gott-aenderte-willen',
          objection: `Gott kann seinen Willen ändern – denk an Ninive bei Jona. Stammapostel Schmidt hat das 1960 so erklärt.`,
          objectionBy: 'Walter Schmidt (Stammapostel 1960–1975)',
          answer: `Jonas Gerichtswort war bedingt, und die Bedingung trat sichtbar ein: Ninive tat Buße (Jona 3,10; vgl. Jer 18,7–8). Bischoffs Botschaft war unbedingt: Der Herr kommt zu meinen Lebzeiten. Und die heutige Leitung deiner Kirche hat 2013 nicht gesagt, Gott habe seinen Willen geändert, sondern die Botschaft sei Bischoffs persönliche Überzeugung gewesen. Damit räumt sie ein, dass sie nicht von Gott kam.`,
          followUps: [
            {
              id: 'alle-kirchen-irren',
              objection: `Jede Kirche hat sich schon geirrt – auch die orthodoxen. Warum misst du uns strenger?`,
              objectionBy: 'Neuapostolische Gesprächspartner',
              answer: `Ich messe euch an eurem eigenen Anspruch: Die NAK lehrt, dass lebende Apostel nötig sind, um die Kirche heute in der Wahrheit zu führen. Wenn aber der höchste Apostel einen Irrtum zum Dogma machen und die ganze Apostelschaft mitziehen kann, dann bietet dieses Amt gerade nicht die Sicherheit, für die es angeblich da ist. Die orthodoxe Kirche beansprucht keine neuen Offenbarungen, sondern die Treue zum Glauben, „der einmal übergeben ist" (Jud 3).`,
              followUps: [
                {
                  id: 'orthodoxe-neue-dogmen',
                  objection: `Auch eure Konzilien haben neue Dogmen geschaffen – Nizäa zum Beispiel. Das ist doch nichts anderes.`,
                  objectionBy: 'Neuapostolische Apologeten',
                  answer: `Nizäa hat keine neue Offenbarung verkündet, sondern gegen Arius festgehalten, was die Schrift über den Sohn sagt – mit biblischen Gründen und in Übereinstimmung mit der Überlieferung. Bischoffs Botschaft war eine neue Vorhersage über die Zukunft, ohne biblische Grundlage, wie Stammapostel Leber selbst einräumte. Vinzenz von Lérins unterscheidet genau das: Wachstum im Verständnis desselben Glaubens ist legitim, eine Veränderung in etwas Neues nicht.`,
                  questionsBack: [`Welche biblische Stelle hatte Bischoff für seine Botschaft – und warum hat deine Kirche 2013 gesagt, es gebe keine?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'versiegelung-noetig',
      objection: `Nur wer durch einen Apostel die Heilige Versiegelung empfängt, kann zur Brautgemeinde gehören und bei der Wiederkunft entrückt werden (Offb 7; 14,1).`,
      objectionBy: 'Katechismus der Neuapostolischen Kirche',
      answer: `Im Neuen Testament versiegelt Gott selbst mit dem Heiligen Geist alle, die glauben und getauft sind (Eph 1,13; 2 Kor 1,21–22). Keine Stelle sagt, dass nur die 1863 berufenen Apostel versiegeln können. Wäre es so, hätte zwischen dem 1. und dem 19. Jahrhundert niemand den Geist empfangen – nicht Athanasius, nicht Antonius, nicht die Märtyrer Ägyptens. Das ist schwer zu glauben.`,
      sources: [{ kind: 'bibel', work: 'Epheser', ref: '1,13', quote: `… durch welchen auch ihr, da ihr glaubtet, versiegelt worden seid mit dem heiligen Geist der Verheißung.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase' }],
      followUps: [
        {
          id: 'gott-andere-wege',
          objection: `In der Zeit ohne Apostel hatte Gott eben andere Wege. Heute aber, wo es wieder Apostel gibt, ist ihre Versiegelung der Weg.`,
          objectionBy: 'Neuapostolische Gesprächspartner',
          answer: `Dann ist die Versiegelung durch eure Apostel nicht heilsnotwendig – sonst hätte Gott 1800 Jahre lang niemanden vollständig retten können. Und Christus hat verheißen, dass die Pforten der Hölle seine Kirche nicht überwältigen (Mt 16,18) und dass er bei ihr ist „alle Tage bis an der Welt Ende" (Mt 28,20). Eine 1800-jährige Lücke im Apostelamt passt nicht zu dieser Verheißung.`,
          sources: [{ kind: 'bibel', work: 'Matthäus', ref: '28,20', quote: `Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'abfall-der-kirche',
              objection: `Die Kirche ist nach den Aposteln abgefallen und erstarrt. Darum musste Gott das Apostelamt wiederherstellen.`,
              objectionBy: 'Neuapostolische Geschichtsdeutung',
              answer: `Dieselbe Begründung verwenden auch die Mormonen für Joseph Smith – mit ganz anderem Ergebnis. Die Geschichte zeigt aber keine abgefallene, sondern eine lebendige Kirche: Märtyrer, Mönche, Konzilien, die den Glauben an die Dreieinigkeit verteidigten, den auch die NAK bekennt. Wenn die Kirche ganz abgefallen wäre – woher hättet ihr dann die Bibel, das Glaubensbekenntnis und die Taufe auf den dreieinigen Gott?`,
              questionsBack: [`Wenn die Kirche abgefallen war – warum übernehmt ihr dann ihren Kanon, ihr Glaubensbekenntnis und ihre Taufe?`],
            },
          ],
        },
      ],
    },
    {
      id: 'entschlafenenwesen',
      objection: `Durch die Apostel können auch Verstorbene Taufe, Versiegelung und Abendmahl empfangen. Paulus erwähnt die Taufe für die Toten (1 Kor 15,29), und Christus predigte den Geistern im Gefängnis (1 Petr 3,19).`,
      objectionBy: 'Neuapostolische Lehre zu den Entschlafenengottesdiensten',
      answer: `1 Kor 15,29 ist eine der dunkelsten Stellen der Bibel: Paulus erwähnt einen Brauch „mancher" in Korinth, um die Auferstehung zu begründen – er empfiehlt ihn nicht und lehrt ihn nirgends. 1 Petr 3,19 spricht von Christi eigener Verkündigung, nicht von stellvertretenden Sakramenten durch Apostel. Und Hebr 9,27 sagt: „Wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht."`,
      sources: [{ kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'ihr-betet-auch',
          objection: `Ihr Kopten betet doch auch für eure Toten. Wo ist der Unterschied?`,
          objectionBy: 'Neuapostolische Gesprächspartner',
          answer: `Wir beten für die Entschlafenen und vertrauen sie Gottes Barmherzigkeit an – das ist Fürbitte. Stellvertretend Sakramente an Verstorbenen zu vollziehen, um ihren Stand zu verändern, ist etwas anderes: Es beansprucht eine Vollmacht, die keine Schrift und keine Überlieferung bezeugt. Die Sakramente sind Gaben an die Lebenden, die sie im Glauben empfangen.`,
          followUps: [
            {
              id: 'liebe-zu-verstorbenen',
              objection: `Aber ist es nicht ein Ausdruck großer Liebe, das Heil auch den Verstorbenen bringen zu wollen?`,
              objectionBy: 'Neuapostolische Gesprächspartner',
              answer: `Das Motiv ist liebevoll, und ich achte es. Aber die Liebe Gottes zu den Verstorbenen ist größer als unsere Rituale. Die Kirche bekennt, dass Christus in das Totenreich hinabstieg und die Gerechten befreite. Wir dürfen unsere Toten ihm anvertrauen, statt zu meinen, ihr Heil hänge an einem Gottesdienst, den nur eine Kirche des 19. Jahrhunderts feiern kann.`,
            },
          ],
        },
      ],
    },
    {
      id: 'oekumenisch-geoeffnet',
      objection: `Die NAK hat sich verändert: Wir erkennen die Taufe anderer Kirchen an, arbeiten ökumenisch mit und sehen andere Christen nicht mehr als verloren an. Warum also noch Kritik?`,
      objectionBy: 'Neuapostolische Kirche (Selbstdarstellung)',
      answer: `Diese Entwicklung ist erfreulich, und ich begegne dir als Bruder in Christus, der die Dreieinigkeit bekennt. Aber sie verschärft eine Frage: Wenn andere Kirchen ohne eure Apostel wirklich Kirche sind und gültig taufen – wozu braucht es dann den Stammapostel und die Versiegelung durch eure Apostel? Entweder ist das Apostelamt heilsnotwendig, oder es ist eine Besonderheit eurer Gemeinschaft.`,
      followUps: [
        {
          id: 'apostel-als-dienst',
          objection: `Das Apostelamt ist ein Dienst, kein exklusiver Anspruch. Wir wollen niemanden ausschließen.`,
          objectionBy: 'Neuapostolische Gesprächspartner',
          answer: `Wenn das so ist, freut mich das. Dann lade ich dich ein, die Begründung ehrlich zu prüfen: Was unterscheidet einen neuapostolischen Apostel von einem Bischof der alten Kirchen – außer dass dieser in einer 2000-jährigen Linie steht und jener in einer Linie von 1863? Und was lehrt euer Katechismus weiterhin über die Brautgemeinde und die Notwendigkeit der Versiegelung?`,
          questionsBack: [`Wenn die Versiegelung nicht heilsnotwendig ist – warum dann nur durch eure Apostel?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woran erkennt man nach Apg 1,21–22 und 1 Kor 9,1 einen Apostel – und erfüllt ein heutiger Apostel diese Kennzeichen?`,
    `Warum nennt sich Paulus den letzten Zeugen des Auferstandenen (1 Kor 15,8)?`,
    `Wenn Eph 4,11 fortdauernde Apostel verlangt – warum nicht auch fortdauernde Propheten?`,
    `Wie kann ein Amt, dessen höchster Träger eine falsche Prophezeiung zum Dogma machte, besondere Sicherheit in der Wahrheit bieten?`,
    `Haben die Märtyrer und Väter der ersten 1800 Jahre den Heiligen Geist empfangen – und durch wen?`,
  ],
  avoid: [
    `Die NAK als „Sekte" abstempeln, ohne ihre Entwicklung (Katechismus, Ökumene, Entschuldigung 2013) zu würdigen – das wirkt uninformiert.`,
    `Mit der Botschaft Bischoffs triumphieren – sprich sachlich und mit Respekt vor Menschen, die damals schwer enttäuscht wurden.`,
    `Behaupten, die NAK leugne die Dreieinigkeit – sie bekennt das trinitarische Glaubensbekenntnis.`,
  ],
  concessions: [
    `Die NAK hat sich in den letzten Jahrzehnten deutlich geöffnet und 2013 die Botschaft Bischoffs aufgearbeitet und sich entschuldigt.`,
    `Die Form des Bischofsamtes hat sich in den ersten Jahrhunderten entwickelt; einzelne frühe Bischofslisten sind historisch nicht lückenlos.`,
    `Viele Neuapostolische leben einen ernsthaften, frommen Glauben an Christus.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kurt Hutten', work: 'Seher, Grübler, Enthusiasten', year: '1950 ff.', status: 'paraphrase' },
    { kind: 'gegner', author: 'Neuapostolische Kirche International', work: 'Katechismus der Neuapostolischen Kirche', year: '2012', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'Buch III', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Neuapostolische Kirche', 'Stammapostel', 'Apostelamt', 'Bischoff-Botschaft', 'Apostolische Sukzession', 'Versiegelung'],
  related: [
    'pfingstbewegung/neue-apostel-propheten',
    'mormonen/grosser-abfall',
    'zeugen-jehovas/wachtturm-gottes-kanal',
    'evangelikale-sonderlehren/keine-hierarchie-noetig',
    'katholizismus/papstprimat-unfehlbarkeit',
  ],
};

export default claim;
