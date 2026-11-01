import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gottheit-jesu-spaet-erfunden',
  title: `„Die Gottheit Jesu wurde erst später erfunden – Jesus selbst und seine ersten Anhänger hielten ihn nicht für Gott."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'How Jesus Became God: The Exaltation of a Jewish Preacher from Galilee (2014)' },
    { name: 'Wilhelm Bousset', role: 'Religionsgeschichtliche Schule', work: 'Kyrios Christos (1913)' },
    { name: 'Maurice Casey', role: 'Neutestamentler, Nottingham', work: 'From Jewish Prophet to Gentile God (1991)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler, Social-Media-Kommentator', work: 'Videos und Beiträge zur „göttlichen Agentschaft" und zum Monotheismus' },
  ],
  steelman: `Der historische Jesus war ein jüdischer Endzeitprediger, der das Reich Gottes verkündete – nicht sich selbst als Gott. Nach seinem Tod hatten einige Jünger Visionen und schlossen daraus, Gott habe ihn zu sich erhöht. Die älteste Christologie war eine **Erhöhungschristologie**: Gott „machte" Jesus bei der Auferstehung zum Herrn und Messias (Apg 2,36) und setzte ihn als Sohn ein (Röm 1,3–4; Apg 13,33). Dann wanderte der Moment der Sohnschaft rückwärts: bei Markus zur Taufe, bei Matthäus und Lukas zur Empfängnis, bei Johannes in die Ewigkeit. Paulus dachte Jesus vermutlich als einen präexistenten Engel, der Mensch wurde (Gal 4,14; Phil 2). In der antiken Welt gab es ein ganzes Spektrum des Göttlichen – Kaiser, Heroen, Engel, Mose (bei Philo „Gott" genannt) –, und frühe Christen sahen Jesus irgendwo darin, aber nicht als den mit dem Vater gleichwesentlichen Gott des Nizänums. Das ist das Ergebnis einer jahrhundertelangen Entwicklung, die 325 politisch besiegelt wurde. – So etwa Bart Ehrman.`,
  biblical: {
    summary: `Die frühesten datierbaren christlichen Texte – Paulusbriefe aus den 50er Jahren, die ihrerseits noch ältere Bekenntnisse und Hymnen zitieren – zeigen bereits eine **hohe Christologie**: Jesus wird in das Schma Israels eingeschlossen (1 Kor 8,6), ihm wird die Anbetung zugesprochen, die Jesaja ausschließlich JHWH vorbehält (Phil 2,10–11 / Jes 45,23), er wird auf Aramäisch angerufen („Maranatha", 1 Kor 16,22), und alttestamentliche JHWH-Texte werden auf ihn angewandt (Röm 10,13 / Joel 3,5). Auch Markus erzählt Jesus mit den Farben der Gottesoffenbarung (Mk 2,7; 4,41; 6,48–50).`,
    detail: `**Die frühen Schlüsseltexte:**

- **1 Kor 8,6 (ca. 54):** „so haben wir doch nur einen Gott, den Vater … und einen HERRN, Jesus Christus" – Richard Bauckham zeigt: Paulus nimmt die Worte des Schma (Dtn 6,4 LXX: „der Herr, unser Gott, ist ein Herr") und verteilt „Gott" und „Herr" auf Vater und Jesus. Zugleich ist Jesus der, „durch welchen alle Dinge sind" – Schöpfungsmittler.
- **Phil 2,6–11 (ca. 55–62, vermutlich vorpaulinischer Hymnus):** Jesus war „in göttlicher Gestalt" und „Gott gleich", entäußerte sich, und nun beugen sich vor ihm „alle Knie" und „alle Zungen bekennen" – wörtliche Aufnahme von Jes 45,23, wo JHWH schwört, dass dies **ihm allein** gilt („Ich bin Gott, und keiner mehr", Jes 45,22).
- **1 Kor 16,22:** „Maran atha" – „Unser Herr, komm!" Ein aramäischer Gebetsruf, den Paulus griechischen Lesern unübersetzt weitergibt: Er stammt aus der aramäischsprachigen Urgemeinde.
- **Röm 10,9–13:** „Wer den Namen des HERRN wird anrufen, soll selig werden" (Joel 3,5 – dort JHWH) – bezogen auf Jesus.
- **Mk 6,48–50:** Jesus geht auf dem Meer, „wollte an ihnen vorübergehen" und sagt „Ich bin's (egō eimi)" – vgl. Hi 9,8 („er geht auf den Wogen des Meeres") und Ex 33,22; 34,6 (Gott „geht vorüber").

**Ergebnis:** Die hohe Christologie ist nicht das Ende einer langen Entwicklung, sondern liegt am **Anfang** des schriftlichen Befunds.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '8,6', quote: `so haben wir doch nur einen Gott, den Vater, von welchem alle Dinge sind und wir zu ihm; und einen HERRN, Jesus Christus, durch welchen alle Dinge sind und wir durch ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '6,4', quote: `Höre, Israel, der HERR, unser Gott, ist ein einiger HERR.`, original: `ἄκουε, Ισραηλ· κύριος ὁ θεὸς ἡμῶν κύριος εἷς ἐστιν (LXX)`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,9–11', quote: `Darum hat ihn auch Gott erhöht und hat ihm einen Namen gegeben, der über alle Namen ist, daß in dem Namen Jesu sich beugen sollen aller derer Kniee, die im Himmel und auf Erden und unter der Erde sind, und alle Zungen bekennen sollen, daß Jesus Christus der HERR sei, zur Ehre Gottes, des Vaters.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '45,22–23', quote: `Denn ich bin Gott, und keiner mehr. Ich schwöre bei mir selbst, und ein Wort der Gerechtigkeit geht aus meinem Munde, dabei soll es bleiben: Mir sollen sich alle Kniee beugen und alle Zungen schwören.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '16,22', quote: `So jemand den HERRN Jesus Christus nicht liebhat, der sei Anathema. Maran atha!`, original: `μαρανα θα (aramäisch: „Unser Herr, komm!")`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '9,8', quote: `Er breitet den Himmel aus allein und geht auf den Wogen des Meeres.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt mit Nizäa (325), dass der Sohn „Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater" ist. Nizäa hat diesen Glauben nicht erfunden, sondern gegen Arius' Neuerung (der Sohn sei ein Geschöpf) verteidigt – in Worten, die das Zeugnis der Schrift und der Väter vor ihm festhielten. Der hl. Athanasius, der als junger Diakon Bischof Alexander nach Nizäa begleitete, argumentierte vor allem von der **Anbetung** und vom **Heil** her: Ein Geschöpf anzubeten wäre Götzendienst; und nur Gott selbst kann uns mit Gott vereinen.`,
    detail: `**Athanasius' Hauptargumente (Contra Arianos, De Incarnatione):**
1. Die Kirche hat Christus immer angebetet und auf seinen Namen getauft (Mt 28,19). Wäre er ein Geschöpf, wäre das Götzendienst.
2. Nur der Schöpfer kann die verdorbene Schöpfung erneuern; nur wer Gott ist, kann uns vergöttlichen: „Er wurde Mensch, damit wir vergöttlicht würden" (De Inc. 54).

Papst Schenuda III. hat diese Linie in seinem Buch „Die Gottheit Christi" für Laien aufbereitet, mit Betonung der Schriftbeweise: göttliche Titel, göttliche Werke (Schöpfung, Sündenvergebung, Gericht), göttliche Anbetung. In der miaphysitischen Christologie des hl. Kyrill bekennt die Kirche „eine fleischgewordene Natur des Gott-Logos" – der Gekreuzigte ist kein anderer als der ewige Sohn.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa', year: '325', quote: `… Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater …`, original: `ὁμοούσιον τῷ πατρί`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', year: 'ca. 318', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: `αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν`, status: 'verbatim' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Gottheit Christi (Lahut al-Masih)', quote: `Darlegung der Gottheit Christi aus seinen Titeln, Werken und der ihm erwiesenen Anbetung in der Schrift.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung hat sich seit Bousset (1913) deutlich verschoben. Bousset meinte, die Verehrung Jesu als „Kyrios" sei erst in heidenchristlichen Gemeinden unter hellenistischem Einfluss entstanden. Seit Martin Hengel, Larry Hurtado und Richard Bauckham (die sogenannte „Early High Christology Club") vertritt eine starke Forschungsrichtung, dass die Verehrung Jesu **sehr früh** und **in jüdischen** Kreisen begann. Ehrman selbst hat seine Sicht in „How Jesus Became God" (2014) teilweise geändert: Er räumt ein, dass schon Paulus Jesus als präexistentes göttliches Wesen sah – deutet dieses aber als Engel, nicht als Gott im vollen Sinn.`,
    detail: `**Wo die Debatte heute wirklich steht:** Es geht nicht mehr darum, ob die frühen Christen Jesus „göttlich" nannten (das bestreitet kaum jemand für die 50er Jahre), sondern **in welchem Sinn**:
- *Ehrman / McClellan:* Göttlichkeit als Spektrum; Jesus als hoher Agent Gottes, Engel oder erhöhter Mensch.
- *Hurtado:* Entscheidend ist die kultische Praxis – Jesus erhält Gebet, Anrufung, Lieder, Taufe in seinem Namen, Herrenmahl: eine „binitarische" Verehrung ohne Parallele im Judentum.
- *Bauckham:* Jüdischer Monotheismus definierte Gott als **einzigen Schöpfer und Herrscher aller Dinge**; Jesus wird genau in diese Identität eingeschlossen („Christologie der göttlichen Identität").

**Antwortbuch:** Michael F. Bird, Craig A. Evans, Simon Gathercole, Charles E. Hill und Chris Tilling, „How God Became Jesus" (2014), erschien zeitgleich als direkte Erwiderung auf Ehrman.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Ehrman deutet die früheste Christologie als Erhöhungschristologie und sieht bei Paulus einen präexistenten Engel, der Mensch wurde.`, status: 'paraphrase', note: 'Ehrman beschreibt in seinem Blog, dass er seine Sicht zur Engelchristologie bei Paulus beim Schreiben des Buches geändert hat.' },
      { kind: 'fachliteratur', author: 'Michael F. Bird / Craig A. Evans / Simon Gathercole / Charles E. Hill / Chris Tilling', work: 'How God Became Jesus: The Real Origins of Belief in Jesus’ Divine Nature – A Response to Bart D. Ehrman', year: '2014', status: 'paraphrase', quote: `Kapitelweise Erwiderung auf Ehrmans Thesen.` },
      { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase', quote: `Die kultische Verehrung Jesu entstand sehr früh, in jüdisch-christlichen Kreisen, als „Mutation" innerhalb des jüdischen Monotheismus.` },
      { kind: 'fachliteratur', author: 'Wilhelm Bousset', work: 'Kyrios Christos', year: '1913', status: 'paraphrase', quote: `Die Kyrios-Verehrung sei in hellenistischen heidenchristlichen Gemeinden entstanden.`, note: 'Heute in diesem Punkt weitgehend überholt.' },
    ],
  },
  quickAnswer: `Die Gottheit Jesu steht nicht am Ende, sondern am Anfang der Quellen. Schon Paulus – um 54 n. Chr., gut 20 Jahre nach der Kreuzigung – setzt Jesus in das jüdische Grundbekenntnis „Höre Israel" ein: „ein Gott, der Vater … und ein Herr, Jesus Christus" (1 Kor 8,6). Er zitiert einen Hymnus, der Jesus die Anbetung zuspricht, die Gott in Jes 45 nur für sich selbst beansprucht (Phil 2,10–11). Und die aramäisch sprechende Urgemeinde betete zu Jesus: „Maranatha – unser Herr, komm!" Nizäa hat diesen Glauben 325 nicht erfunden, sondern verteidigt.`,
  keyPoints: [
    `**Früheste Texte, höchste Christologie:** 1 Kor 8,6, Phil 2,6–11, Maranatha – alles aus den 50er Jahren, teils noch älter (vorpaulinisch).`,
    `**Das Schma neu gelesen:** Paulus verteilt „Gott" und „Herr" aus Dtn 6,4 auf Vater und Sohn und macht Jesus zum Schöpfungsmittler (Bauckham).`,
    `**Anbetung im jüdischen Kontext:** Juden starben lieber, als einen Menschen oder Kaiser kultisch zu verehren – dass jüdische Christen zu Jesus beteten, setzt seine Einbeziehung in Gottes Identität voraus (Hurtado).`,
    `**Kein Streit mit Jerusalem:** Paulus streitet heftig über Beschneidung und Speisegebote, aber nie über die Verehrung Jesu – sie war gemeinsamer Besitz mit Petrus und Jakobus.`,
    `**Markus erzählt Gott:** Jesus vergibt Sünden, stillt den Sturm, geht auf dem Meer, „geht vorüber" und sagt „Ich bin" – Bilder der Gottesoffenbarung des AT.`,
    `**Außerchristliche Bestätigung:** Plinius (ca. 112): Christen singen „Christus wie einem Gott"; Ignatius (ca. 110): „unser Gott Jesus Christus".`,
    `**Nizäa:** Nicht eine knappe Abstimmung über „Gott oder nicht", sondern die Abwehr von Arius' Lehre, der Sohn sei geschaffen – fast alle der rund 300 Bischöfe unterschrieben.`,
  ],
  argument: {
    name: 'Argument aus der frühen Anbetung',
    summary: 'Warum die kultische Verehrung Jesu durch jüdische Christen eine frühe Gottesidentität voraussetzt.',
    premises: [
      {
        text: `P1: Die ersten Christen waren Juden, die streng am Monotheismus festhielten: Kultische Anbetung gebührt allein dem einen Gott Israels.`,
        support: `Vgl. das Schma (Dtn 6,4), das Bilderverbot, das Martyrium der Makkabäer, den Widerstand gegen Caligulas Statue im Tempel (Josephus, Ant. 18,261–309). Engel weisen Anbetung zurück (Offb 19,10; 22,8–9).`,
        sources: [{ kind: 'bibel', work: 'Offenbarung', ref: '22,8–9', status: 'paraphrase', quote: `Johannes fällt vor dem Engel nieder; der Engel wehrt ab: „Siehe zu, tu es nicht! … Bete Gott an!"` }],
      },
      {
        text: `P2: Innerhalb der ersten zwei Jahrzehnte erhielt Jesus in diesen Gemeinden kultische Verehrung: Gebet und Anrufung, Hymnen, Taufe in seinem Namen, Herrenmahl, Bekenntnis „Jesus ist Herr".`,
        support: `Belege: 1 Kor 16,22 (Maranatha, aramäisch); 1 Kor 1,2 („die den Namen unseres Herrn Jesus Christus anrufen"); Phil 2,6–11 (Hymnus); Röm 10,9–13; 1 Kor 11,20–26. Hurtado hat dieses Muster ausführlich dokumentiert.`,
        sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ', year: '2003', status: 'paraphrase', quote: `Dokumentation des „binitarischen" Verehrungsmusters in den frühesten Quellen.` }],
      },
      {
        text: `P3: Kultische Verehrung durch Monotheisten bedeutet, dass der Verehrte in die Identität des einen Gottes einbezogen wird – sonst wäre es Götzendienst.`,
        support: `Im Judentum gab es hohe Mittlerfiguren (Engel, Weisheit, erhöhte Patriarchen), aber keine erhielten einen etablierten Kult. Wo die rabbinische Tradition eine Gefahr sah (Metatron, b. Chagiga 15a), wurde sie scharf zurückgewiesen.`,
      },
    ],
    conclusion: `Also verstanden die frühesten jüdischen Christen Jesus nicht als bloßen Propheten oder erhöhten Menschen, sondern als in die Identität des einen Gottes einbezogen – Jahrzehnte vor Johannes und drei Jahrhunderte vor Nizäa.`,
  },
  voices: [
    {
      person: 'paulus',
      role: 'als ehemaliger Pharisäer und frühester Zeuge',
      text: `Paulus war ein streng monotheistischer Pharisäer, der die Gemeinde verfolgte (Gal 1,13–14; Phil 3,5–6). Wenige Jahre später schreibt er Sätze, die das Schma auf Vater und Sohn verteilen (1 Kor 8,6), nennt Jesus den, „durch welchen alle Dinge sind", und übernimmt einen Hymnus, der Jesus die Huldigung zuspricht, die Jesaja dem einen Gott vorbehält. Bemerkenswert ist, dass er dies nicht verteidigen muss: In keinem Brief streitet er mit den Jerusalemer Aposteln über die Verehrung Jesu – sie war gemeinsames Fundament (1 Kor 15,11).`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,11', quote: `Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'athanasius',
      role: 'als Verteidiger von Nizäa (Alexandrien)',
      text: `Athanasius argumentiert gegen Arius vom gelebten Glauben der Kirche her: Die Christen haben Christus immer angebetet, auf seinen Namen getauft und ihn als Schöpfer bekannt. Wenn er ein Geschöpf wäre, wäre die ganze Kirche von Anfang an dem Götzendienst verfallen. Zudem: Nur der Schöpfer kann das Bild Gottes im Menschen erneuern (De Inc. 13–14). Für Athanasius hat Nizäa daher keinen neuen Glauben „beschlossen", sondern den alten gegen eine Neuerung mit einem präzisen Wort (homoousios) geschützt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Orationes contra Arianos', ref: 'II,23–24', year: 'ca. 356–360', status: 'paraphrase', quote: `Wenn der Sohn ein Geschöpf wäre, dürfte man ihn nicht anbeten; da die Kirche ihn aber anbetet, ist er nicht Geschöpf, sondern wahrer Gott.` }],
    },
    {
      person: 'shenouda-iii',
      role: 'als koptischer Katechet',
      text: `Papst Schenuda III. hat für Gläubige, die mit muslimischen und anderen Einwänden konfrontiert sind, die Gottheit Christi aus der Schrift in drei Linien dargelegt: göttliche **Namen und Titel** (Herr, Gott, Ich bin, der Erste und der Letzte), göttliche **Werke** (Schöpfung, Sündenvergebung, Auferweckung, Gericht) und göttliche **Ehre** (Anbetung, Gebet, Taufe auf seinen Namen). Für ihn ist entscheidend, dass diese Linien in allen Teilen des NT zusammenlaufen, nicht nur bei Johannes.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Gottheit Christi', status: 'paraphrase', quote: `Gliederung der Schriftbeweise nach Titeln, Werken und Anbetung.` }],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühchristlichen Frömmigkeit',
      text: `Hurtado zeigte, dass man die Frage nicht nur an Titeln („Sohn Gottes", „Herr") festmachen darf, sondern an der **Praxis**: Die frühesten Gemeinden beteten zu Jesus, riefen ihn an, sangen Lieder auf ihn, tauften in seinem Namen und feierten das „Mahl des Herrn". Dieses Muster erscheint schon in den Paulusbriefen als selbstverständlich und ist nicht auf heidenchristliche Gemeinden beschränkt. Er nennt es eine „Mutation" des jüdischen Monotheismus – keine Übernahme heidnischer Vergöttlichung.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'How on Earth Did Jesus Become a God? Historical Questions about Earliest Devotion to Jesus', year: '2005', status: 'paraphrase', quote: `Die Verehrung Jesu brach früh, explosionsartig und innerhalb jüdischer Kreise auf.` }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler (St Andrews / Cambridge)',
      text: `Bauckham fragt: Was unterschied für Juden des Zweiten Tempels den einen Gott von allem anderen? Antwort: Er allein ist **Schöpfer** aller Dinge und **Herrscher** über alle Dinge, und er allein empfängt Anbetung. Das NT schreibt Jesus genau diese drei Merkmale zu – Schöpfungsmittlerschaft (1 Kor 8,6; Kol 1,16; Joh 1,3; Hebr 1,10), Sitzen auf Gottes Thron (Ps 110,1 als meistzitierter AT-Vers im NT) und Anbetung. Das ist keine „niedrige" Agentenchristologie, sondern die höchste denkbare: Jesus gehört zur göttlichen Identität.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel: God Crucified and Other Studies on the New Testament’s Christology of Divine Identity', year: '2008', status: 'paraphrase', quote: `Christologie der göttlichen Identität: Jesus wird in die einzigartige Identität des einen Gottes eingeschlossen.` }],
    },
    {
      person: 'martin-hengel',
      role: 'als Historiker des antiken Judentums (Tübingen)',
      text: `Hengel wies nach, dass die Zeitspanne zwischen Kreuzigung und den ersten Paulusbriefen zu kurz ist für eine schrittweise heidnische „Vergöttlichung". In weniger als zwei Jahrzehnten sei christologisch mehr geschehen als in den folgenden Jahrhunderten der Dogmengeschichte. Zudem sei das palästinische Judentum längst hellenisiert gewesen – die Gegenüberstellung „jüdisch-palästinisch = niedrige Christologie" vs. „hellenistisch = hohe Christologie" sei künstlich.`,
      sources: [{ kind: 'fachliteratur', author: 'Martin Hengel', work: 'Between Jesus and Paul: Studies in the Earliest History of Christianity', year: '1983', status: 'paraphrase', quote: `In weniger als zwei Jahrzehnten geschah in der Christologie mehr als in den folgenden sieben Jahrhunderten.` }],
    },
  ],
  dialog: [
    {
      id: 'adoptianismus-roem-1',
      objection: `Die älteste Christologie war adoptianisch. Röm 1,3–4: Jesus wurde „eingesetzt als Sohn Gottes in Kraft … durch die Auferstehung". Apg 2,36: „Gott hat ihn zum Herrn und Christus gemacht". Apg 13,33: „Du bist mein Sohn, heute habe ich dich gezeugt" – bezogen auf die Auferstehung. Erst später wurde die Sohnschaft rückdatiert.`,
      objectionBy: 'Bart Ehrman',
      answer: `In Röm 1,3 ist Jesus bereits **vor** der Auferstehung Gottes Sohn – „von seinem Sohn, der geboren ist aus dem Samen Davids". Eingesetzt wird er als Sohn Gottes „in Kraft" – im Gegensatz zur Schwachheit seines irdischen Lebens. Apg 2,36 und 13,33 sprechen von der **Inthronisation** nach Ps 2 und Ps 110: Ein Königssohn wird nicht bei der Krönung Sohn, sondern als Sohn gekrönt. Und derselbe Paulus spricht ausdrücklich von Präexistenz: „Gott sandte seinen Sohn" (Gal 4,4), „ob er wohl reich ist, ward er doch arm" (2 Kor 8,9).`,
      detail: `**Röm 1,3–4 genau gelesen:** „… von seinem Sohn (V. 3), der geboren ist aus dem Samen Davids nach dem Fleisch und eingesetzt als Sohn Gottes in Kraft nach dem Geist der Heiligkeit durch die Auferstehung von den Toten (V. 4)". Der Satz hat ein Subjekt – „sein Sohn" –, über das zwei Stufen ausgesagt werden: Davidssohn nach dem Fleisch, Gottessohn in Macht seit der Auferstehung.

**Apg 2:** Petrus zitiert vorher Ps 16 und sagt, David habe von der Auferstehung des Christus „zuvor gesehen" (2,31) – Jesus war also schon vorher der Christus, der nun öffentlich inthronisiert wird.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '1,3–4', quote: `von seinem Sohn, der geboren ist von dem Samen Davids nach dem Fleisch und kräftig erwiesen als ein Sohn Gottes nach dem Geist, der da heiligt, seit der Zeit er auferstanden ist von den Toten,`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '2. Korinther', ref: '8,9', quote: `Denn ihr wisset die Gnade unsers HERRN Jesu Christi, daß, ob er wohl reich ist, ward er doch arm um euretwillen, auf daß ihr durch seine Armut reich würdet.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [
        `Wie kann jemand, der erst bei der Auferstehung Sohn wird, schon in Röm 1,3 „sein Sohn" heißen?`,
        `Wenn Paulus adoptianisch dachte – wie passt dazu Gal 4,4 „Gott sandte seinen Sohn"?`,
      ],
      followUps: [
        {
          id: 'vorpaulinische-formel',
          objection: `Röm 1,3–4 ist eine vorpaulinische Formel – sie zeigt den Glauben vor Paulus. Paulus hat sie übernommen und durch seine eigene Präexistenzchristologie überlagert. Die ursprüngliche Schicht war adoptianisch.`,
          objectionBy: 'Bart Ehrman',
          answer: `Dann muss man konsequent sein: Auch Phil 2,6–11 gilt weithin als vorpaulinischer Hymnus, ebenso 1 Kor 8,6 als Bekenntnisformel und Maranatha als aramäischer Gebetsruf der Urgemeinde. Die „vorpaulinische Schicht" enthält also gerade die **höchste** Christologie. Es gibt keinen nachweisbaren Zeitpunkt, an dem nur eine Erhöhungschristologie existierte. Zudem stellt Paulus die Formel einer Gemeinde vor, die er nicht gegründet hat (Rom) – offensichtlich hielt er sie für vereinbar mit dem, was alle glaubten.`,
          sources: [
            { kind: 'fachliteratur', author: 'Ernst Lohmeyer', work: 'Kyrios Jesus. Eine Untersuchung zu Phil 2,5–11', year: '1928', quote: `Begründung der These, Phil 2,6–11 sei ein vorpaulinischer Christushymnus.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'phil-2-engel',
              objection: `Phil 2 zeigt keinen Gott, sondern einen Engel: „in Gestalt Gottes" sind auch Engel; er „hielt es nicht für einen Raub, Gott gleich zu sein" heißt, er war es eben **nicht** und griff nicht danach – anders als Adam. Erst **nach** dem Tod erhöht ihn Gott über alles. Das ist eine Belohnung, keine ewige Gottheit.`,
              objectionBy: 'Bart Ehrman',
              answer: `Der Text sagt, dass er „in Gestalt Gottes **war**" (hyparchōn) und das Gott-gleich-Sein nicht als etwas „ausnutzte" – so die philologisch begründete Deutung von harpagmos (R. Hoover, 1971): Er besaß es und gebrauchte es nicht zum eigenen Vorteil, sondern entäußerte sich. Und die Erhöhung besteht darin, dass er „den Namen über alle Namen" empfängt – im jüdischen Kontext der Gottesname – und die Huldigung, die Gott in Jes 45,23 für sich allein beansprucht. Kein Engel erhält in jüdischen Texten Gottes Namen samt universaler Anbetung; Gott sagt: „Ich will meine Ehre keinem andern geben" (Jes 42,8).`,
              detail: `**Philologie:** Roy W. Hoover zeigte, dass „etwas nicht als harpagmos betrachten" im Griechischen eine idiomatische Wendung ist: etwas, das man hat, nicht zum eigenen Vorteil ausnutzen. Damit setzt V. 6 die Gottgleichheit voraus.

**Struktur:** „in Gestalt Gottes" (V. 6) steht parallel zu „Knechtsgestalt" (V. 7). So wirklich er Knecht wurde, so wirklich war er in Gottes Gestalt.

**Jes 45 im Hintergrund:** Der ganze Abschnitt Jes 45,18–25 ist ein einziger Protest gegen jeden zweiten Gott: „Ich bin der HERR, und ist sonst keiner mehr." Ausgerechnet dieser Text wird auf Jesus angewandt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Roy W. Hoover', work: 'The Harpagmos Enigma: A Philological Solution. Harvard Theological Review 64', year: '1971', quote: `Harpagmos in der Wendung bezeichnet etwas, das man besitzt, aber nicht zum eigenen Vorteil ausnutzt.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Jesaja', ref: '42,8', quote: `Ich, der HERR, das ist mein Name; und will meine Ehre keinem andern geben noch meinen Ruhm den Götzen.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Philipper', ref: '2,6–7', quote: `welcher, ob er wohl in göttlicher Gestalt war, hielt er's nicht für einen Raub, Gott gleich sein, sondern entäußerte sich selbst und nahm Knechtsgestalt an, ward gleich wie ein anderer Mensch und an Gebärden als ein Mensch erfunden;`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'zur-ehre-des-vaters',
                  objection: `Aber am Ende steht: „zur Ehre Gottes, des Vaters". Jesus bleibt der Agent, durch den der Vater geehrt wird. Göttlichkeit war in der Antike ein Spektrum – du liest nizänische Kategorien in einen Text des 1. Jahrhunderts hinein.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Gerade das ist die Pointe: Jesus empfängt die Anbetung, die nach Jes 45 nur dem einen Gott zusteht – und **dadurch** wird der Vater geehrt, nicht beraubt. Für einen jüdischen Monotheisten ist das nur denkbar, wenn der Sohn nicht außerhalb, sondern innerhalb der Identität des einen Gottes steht. Genau das formuliert die Kirche später: ein Wesen, unterschiedene Hypostasen; der Sohn ist Gott und verherrlicht den Vater. Eine Ordnung der Personen (der Vater als Quelle) ist keine Unterordnung des Wesens. Nizäa hat Begriffe gefunden – den Sachverhalt fand es in Texten wie diesem vor.`,
                  detail: `**Zum „Spektrum der Göttlichkeit":** In der paganen Welt gab es tatsächlich Abstufungen (Götter, Heroen, vergöttlichte Kaiser). Das jüdische Denken des Zweiten Tempels zog aber eine scharfe Linie zwischen dem Schöpfer und allem Geschaffenen, so hoch es auch stehen mochte (Bauckham). Engel, Weisheit oder erhöhte Patriarchen stehen auf der Seite der Geschöpfe. Die Frage ist also: Auf welcher Seite der Linie steht Jesus in den frühesten Texten? 1 Kor 8,6 und Phil 2 setzen ihn auf die Seite des Schöpfers.`,
                  voices: [
                    {
                      person: 'kyrill-alexandrien',
                      text: `Kyrill betont, dass der Sohn den Vater gerade dadurch verherrlicht, dass er als wahrer Gott Mensch wurde und für uns gehorsam war. Die Erhöhung in Phil 2 betrifft das angenommene Menschsein: Was der Logos von Natur aus besitzt, empfängt er „ökonomisch" als Mensch für uns, damit die menschliche Natur in ihm erhöht werde.`,
                    },
                  ],
                  questionsBack: [
                    `Welche andere Gestalt in jüdischen Texten empfängt die Huldigung aus Jes 45,23?`,
                    `Wenn der Vater durch die Anbetung Jesu geehrt wird – wie unterscheidet sich das von dem, was die Kirche lehrt?`,
                  ],
                },
              ],
            },
            {
              id: 'gal-4-14-engel',
              objection: `Paulus schreibt in Gal 4,14: „ihr nahmt mich auf wie einen Engel Gottes, ja wie Christus Jesus". Da setzt er Christus doch mit einem Engel gleich – genau das ist meine These einer Engelchristologie.`,
              objectionBy: 'Bart Ehrman',
              answer: `Der Satz ist eine **Steigerung**: „wie einen Engel Gottes – ja, wie Christus Jesus selbst". Paulus sagt: Ihr habt mich nicht nur wie einen himmlischen Boten aufgenommen, sondern sogar wie Christus. Wäre Christus ein Engel, wäre die Steigerung sinnlos. Paulus nennt Jesus nirgends einen Engel; er sagt, Christen würden über Engel richten (1 Kor 6,3), und der Hebräerbrief widmet sein erstes Kapitel dem Nachweis, dass der Sohn über allen Engeln steht und von ihnen angebetet wird (Hebr 1,6).`,
              sources: [
                { kind: 'bibel', work: 'Galater', ref: '4,14', quote: `… sondern wie einen Engel Gottes nahmet ihr mich auf, ja wie Christus Jesus.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
                { kind: 'bibel', work: 'Hebräer', ref: '1,6', quote: `Und abermal, da er einführt den Erstgeborenen in die Welt, spricht er: „Und es sollen ihn alle Gottesengel anbeten."`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'fachliteratur', author: 'Simon Gathercole', work: `What Did the First Christians Think about Jesus? In: M. F. Bird u. a., How God Became Jesus`, year: '2014', status: 'paraphrase', quote: `Kritik an Ehrmans Engelchristologie, u. a. zu Gal 4,14.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'juedisch-unmoeglich',
      objection: `Ein palästinischer Jude hätte niemals einen Menschen als Gott verehrt. Die Vergöttlichung Jesu ist erst in heidenchristlichen Gemeinden entstanden, wo man vergöttlichte Kaiser und Heroen kannte – das hat schon Bousset gezeigt.`,
      objectionBy: 'Maurice Casey / Wilhelm Bousset',
      answer: `Die Belege zeigen das Gegenteil. „Maranatha" ist **aramäisch** – ein Gebetsruf der Urgemeinde in Judäa, den Paulus seinen griechischen Lesern unübersetzt weitergibt. Paulus, ein Pharisäer, streitet mit Jerusalem leidenschaftlich über Beschneidung und Speisegebote – aber nie über die Verehrung Jesu. Sie war also gemeinsamer Glaube mit Petrus und Jakobus. Und die Zeitspanne ist zu kurz: Zwischen Kreuzigung und den ersten Paulusbriefen liegen kaum 20 Jahre; die vorpaulinischen Formeln reichen noch weiter zurück.`,
      detail: `**Warum Bousset überholt ist:** Hengel zeigte, dass auch Judäa längst hellenisiert war; Hurtado und Bauckham zeigten, dass die frühesten Formen der Jesusverehrung jüdische Kategorien verwenden (Schma, Gottesname, Thron Gottes, Ps 110), nicht pagane Apotheose-Muster. Eine Apotheose macht einen Menschen nach dem Tod zu einem von vielen Göttern – die Christen dagegen hielten am einen Gott fest und schlossen Jesus in ihn ein.`,
      sources: [
        { kind: 'kirchenvater', work: 'Didache (Lehre der zwölf Apostel)', ref: '10,6', year: 'ca. 80–120', quote: `Es komme die Gnade, und es vergehe diese Welt! … Maranatha. Amen.`, status: 'paraphrase', note: 'Frühchristliche Gemeindeordnung; Maranatha im eucharistischen Gebet.' },
        { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Judentum und Hellenismus', year: '1969', quote: `Nachweis der tiefgreifenden Hellenisierung auch des palästinischen Judentums.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn die Vergöttlichung heidnisch war – warum ist das älteste Gebet zu Jesus aramäisch?`,
        `Warum gibt es in den Paulusbriefen keinen einzigen Streit mit Jerusalem über die Anbetung Jesu?`,
      ],
      followUps: [
        {
          id: 'maranatha-nur-bitte',
          objection: `„Maranatha" heißt nur „Unser Herr, komm!" – eine Bitte um die Wiederkunft des Messias. Das ist kein Gebet an einen Gott; man ruft einen erhöhten Menschen herbei.`,
          objectionBy: 'Maurice Casey',
          answer: `Es ist die liturgische Anrufung einer Person im Himmel durch die versammelte Gemeinde – im Judentum genau das, was man Gebet nennt. Paulus verbindet es mit der Formel, Christen seien die, „die den Namen unseres Herrn Jesus Christus anrufen" (1 Kor 1,2) – im AT die Beschreibung der Gottesverehrung („den Namen des HERRN anrufen", Gen 4,26; Joel 3,5). Und Röm 10,13 wendet genau diesen Joel-Vers auf Jesus an.`,
          sources: [
            { kind: 'bibel', work: 'Römer', ref: '10,13', quote: `Denn „wer den Namen des HERRN wird anrufen, soll selig werden."`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Joel', ref: '3,5', quote: `Und soll geschehen, wer des HERRN Namen anrufen wird, der soll errettet werden.`, translation: 'Luther 1912', status: 'verbatim', note: 'Im hebräischen Text steht hier das Tetragramm JHWH.' },
          ],
          followUps: [
            {
              id: 'kyrios-nur-herr',
              objection: `„Kyrios" heißt auch einfach „Herr", „Meister" – so redet ein Sklave seinen Besitzer an. Du machst aus einem Höflichkeitstitel einen Gottesnamen.`,
              objectionBy: 'Dan McClellan',
              answer: `Richtig, kyrios kann „mein Herr" heißen – der Zusammenhang entscheidet. Bei Paulus entscheidet er eindeutig: Er wendet Stellen auf Jesus an, in denen kyrios in der Septuaginta das Tetragramm JHWH wiedergibt – Joel 3,5 (Röm 10,13), Jes 45,23 (Phil 2,10–11), Jes 40,13 (1 Kor 2,16), Sach 14,5 (1 Thess 3,13), Jes 2,10.19 (2 Thess 1,9). Kein Sklavenhalter wurde je so zitiert.`,
              followUps: [
                {
                  id: 'goettliche-agentschaft',
                  objection: `Im Judentum konnte ein Agent Gottes Gottes Namen tragen und Gottes Werke tun, ohne Gott zu sein: Vom Engel des HERRN heißt es „mein Name ist in ihm" (Ex 23,21); später gibt es Jahoel und Metatron, den „kleinen JHWH". Jesus ist ein solcher Agent – nicht Gott selbst.`,
                  objectionBy: 'Dan McClellan / Bart Ehrman',
                  answer: `Der entscheidende Unterschied: Keine dieser Gestalten ist **Schöpfer** und keine empfängt einen etablierten **Kult**. Jesus dagegen ist der, „durch welchen alle Dinge sind" (1 Kor 8,6; Kol 1,16; Joh 1,3), und der Hebräerbrief wendet sogar einen Schöpfungspsalm über JHWH auf ihn an (Hebr 1,10–12 / Ps 102,26–28). Metatron stammt aus deutlich späteren Quellen (3. Henoch, Talmud) – und der Talmud zeigt gerade, dass die Rabbinen jede Tendenz zu „zwei Mächten im Himmel" scharf zurückwiesen: Metatron wird dort mit sechzig Feuerschlägen bestraft, damit niemand ihn für einen zweiten Gott hält (b. Chagiga 15a).`,
                  detail: `**Bauckhams Unterscheidung:** Im Judentum des Zweiten Tempels gab es zwei Klassen von „Mittlern": (1) personifizierte Aspekte Gottes selbst (Wort, Weisheit, Geist), die zur göttlichen Identität gehören, und (2) geschaffene Diener (Engel, Patriarchen). Jesus wird in den frühen Texten mit Wort und Weisheit identifiziert (Joh 1; 1 Kor 1,24; Kol 1,15–17) – also mit Klasse (1). Das ist keine Agentschaft, sondern Identität.`,
                  sources: [
                    { kind: 'juedisch', work: 'Babylonischer Talmud, Chagiga', ref: '15a', quote: `Elischa ben Abuja sieht Metatron sitzend und schließt, es gebe „zwei Mächte im Himmel"; daraufhin wird Metatron mit sechzig Feuerschlägen gestraft.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Hebräer', ref: '1,10', quote: `Und: „Du, HERR, hast von Anfang die Erde gegründet, und die Himmel sind deiner Hände Werk."`, translation: 'Luther 1912', status: 'verbatim', note: 'Zitat aus Ps 102,26, im Hebräerbrief an den Sohn gerichtet.' },
                  ],
                  questionsBack: [
                    `Welcher Engel oder Agent wird im Judentum als Schöpfer aller Dinge bezeichnet und im Gottesdienst angerufen?`,
                    `Warum mussten die Rabbinen Metatron „bestrafen", wenn hohe Agenten unproblematisch waren?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'henoch-menschensohn',
          objection: `Die Bilderreden in 1 Henoch (Kap. 48; 62) zeigen einen Menschensohn, der vor der Schöpfung erwählt wird und vor dem sich alle niederwerfen. Juden konnten also eine überirdische Gestalt verehren, ohne sie für Gott zu halten. Jesus passt in dieses Muster.`,
          objectionBy: 'Bart Ehrman / Daniel Boyarin (rezipiert)',
          answer: `Interessant ist, wo der Menschensohn in 1 Henoch sitzt: auf **Gottes Thron der Herrlichkeit**. Bauckham deutet das gerade als Einbeziehung in die göttliche Herrschaft. Und selbst wenn man den Text anders liest: Er beschreibt eine Vision vom Ende, keinen Gottesdienst, den eine Gemeinde praktizierte. Die Christen dagegen beteten tatsächlich zu Jesus. Wenn 1 Henoch überhaupt etwas zeigt, dann dass jüdische Denkformen für eine Gestalt auf Gottes Thron existierten – die frühe hohe Christologie braucht also gar keine heidnischen Einflüsse.`,
          sources: [
            { kind: 'juedisch', work: '1. Henoch (Bilderreden)', ref: '48,2–6; 62,5–9', quote: `Der Menschensohn wird vor der Erschaffung der Gestirne benannt; alle, die auf dem Festland wohnen, werden vor ihm niederfallen; er sitzt auf dem Thron seiner Herrlichkeit.`, status: 'paraphrase', note: 'Datierung der Bilderreden umstritten (1. Jh. v. bis 1. Jh. n. Chr.).' },
          ],
        },
        {
          id: 'kaiser-wurden-auch-verehrt',
          objection: `Kultische Verehrung beweist gar nichts. Im Römischen Reich wurden Kaiser mit Altären, Opfern und Hymnen verehrt. „Christus wie einem Gott" singen heißt nicht, dass er Gott im nizänischen Sinn war.`,
          objectionBy: 'Paula Fredriksen / Dan McClellan',
          answer: `Für Heiden stimmt das. Aber die ersten Christen waren Juden – und Juden waren im Reich gerade dafür bekannt, dass sie lieber starben, als dem Kaiser kultische Ehren zu erweisen. Als Caligula um 40 n. Chr. seine Statue im Jerusalemer Tempel aufstellen lassen wollte, boten Tausende Juden ihr Leben an (Josephus, Ant. 18,261–309). Dass Menschen aus genau diesem Volk innerhalb weniger Jahre zu einem Gekreuzigten beteten, ist nur verständlich, wenn sie ihn als zum einen Gott gehörig verstanden.`,
          sources: [
            { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,261–309', year: 'ca. 93/94', quote: `Bericht über den Widerstand der Juden gegen Caligulas Plan, seine Statue im Tempel aufzustellen.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'synoptiker-kein-gott',
      objection: `In den ersten drei Evangelien ist Jesus Messias und „Sohn Gottes" im königlichen Sinn – auch Israels Könige hießen so (Ps 2,7). Erst Johannes, 60 Jahre später, schreibt „Das Wort war Gott". Markus kennt keine Gottheit Jesu.`,
      objectionBy: 'Bart Ehrman',
      answer: `Markus beginnt mit Jes 40,3: „Bereitet den Weg des HERRN" – im Hebräischen JHWH – und Johannes der Täufer bereitet den Weg **Jesu**. Danach vergibt Jesus Sünden, was nach den Schriftgelehrten „allein Gott" kann (Mk 2,7); er stillt den Sturm, was in Ps 107,29 Gottes Tat ist; er geht auf dem Meer, was nach Hi 9,8 Gott „allein" tut. Markus sagt es nicht in Johannes' Worten, sondern **erzählt** es mit den Bildern der alttestamentlichen Gottesoffenbarung.`,
      detail: `**Markus' narrative Christologie (vgl. Richard B. Hays, Echoes of Scripture in the Gospels, 2016):**
- Mk 1,2–3: Jes 40,3 / Mal 3,1 – der Weg JHWHs = der Weg Jesu.
- Mk 2,1–12: Sündenvergebung – „Wer kann Sünden vergeben denn allein Gott?"
- Mk 4,35–41: Sturmstillung – „Wer ist der, dem Wind und Meer gehorsam sind?" (vgl. Ps 89,10; 107,28–29).
- Mk 6,45–52: Seewandel, „vorübergehen", „Ich bin".
- Mk 14,62: Menschensohn zur Rechten der Macht.

Die Frage „Wer ist dieser?" durchzieht das Evangelium; die Antwort gibt der Leser aus dem AT selbst.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '1,2–3', quote: `… Es ist eine Stimme eines Predigers in der Wüste: Bereitet den Weg des HERRN, macht seine Steige richtig!`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'bibel', work: 'Markus', ref: '2,7', quote: `Wie redet dieser solche Gotteslästerung? Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'fachliteratur', author: 'Richard B. Hays', work: 'Echoes of Scripture in the Gospels', year: '2016', quote: `Die Evangelien – auch Markus – identifizieren Jesus durch alttestamentliche Anspielungen mit dem Gott Israels.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wessen Weg bereitet der Rufer in Jes 40,3 – und wessen Weg bereitet Johannes bei Markus?`,
        `Wer geht nach Hiob 9,8 „auf den Wogen des Meeres"?`,
      ],
      followUps: [
        {
          id: 'meer-wandeln-nur-wunder',
          objection: `Auch Elia und Elisa vollbrachten Naturwunder – Elia teilte den Jordan. Auf dem Wasser gehen macht niemanden zu Gott; es macht ihn zu einem großen Wundertäter.`,
          objectionBy: 'Bart Ehrman',
          answer: `Elia schlug das Wasser im Auftrag Gottes – Jesus dagegen tut, was der Text **Gott** zuschreibt. Markus hebt drei Signale hervor: Jesus geht „auf dem Meer" (Hi 9,8: Gott allein), er „wollte an ihnen vorübergehen" – die Sprache der Gotteserscheinung vor Mose und Elia (Ex 33,19–22; 1 Kön 19,11) –, und er sagt „Fürchtet euch nicht, ich bin's" (egō eimi), anklingend an Gottes Selbstvorstellung (Ex 3,14; Jes 43,10). Matthäus zieht die Konsequenz: Die Jünger fallen vor ihm nieder (Mt 14,33).`,
          voices: [
            {
              person: 'markus',
              role: 'als Evangelist und Gründer der Kirche von Alexandrien',
              text: `Der Evangelist Markus, den die koptische Kirche als ihren Gründer verehrt, erzählt den Seewandel bewusst mit den Worten der Gotteserscheinung: Jesus „wollte an ihnen vorübergehen" – so wie der HERR an Mose vorüberging, als dieser seine Herrlichkeit sehen wollte. Markus erklärt nicht, er lässt die Schrift sprechen und überlässt dem Hörer die Frage der Jünger: „Wer ist der?"`,
            },
          ],
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '6,48–50', quote: `… und um die vierte Wache der Nacht kam er zu ihnen und wandelte auf dem Meer; und er wollte an ihnen vorübergehen. … Seid getrost, ich bin's; fürchtet euch nicht!`, original: `ἤθελεν παρελθεῖν αὐτούς … θαρσεῖτε, ἐγώ εἰμι· μὴ φοβεῖσθε`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
            { kind: 'bibel', work: '2. Mose (Exodus)', ref: '33,22', quote: `Wenn denn nun meine Herrlichkeit vorübergeht, will ich dich in der Felskluft lassen stehen, und meine Hand soll ob dir halten, bis ich vorübergehe.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'ego-eimi-normal',
              objection: `„Egō eimi" heißt im Griechischen einfach „Ich bin's". Der geheilte Blinde in Joh 9,9 sagt dasselbe. Du baust eine Theologie auf eine Alltagsfloskel.`,
              objectionBy: 'Dan McClellan',
              answer: `Einverstanden: Für sich allein kann egō eimi alltäglich sein, und ich würde nie nur damit argumentieren. Entscheidend ist die Häufung im selben Satz: Gehen auf dem Meer, „vorübergehen wollen", „Fürchtet euch nicht", „Ich bin" – jedes Element hat einen klaren Hintergrund in alttestamentlichen Gotteserscheinungen. Markus arbeitet oft mit solchen Doppelbedeutungen. Das Argument ist kumulativ, nicht ein einzelnes Wort.`,
            },
          ],
        },
        {
          id: 'sohn-gottes-koeniglich',
          objection: `„Sohn Gottes" ist bei Markus ein Königstitel nach Ps 2,7 – „Du bist mein Sohn, heute habe ich dich gezeugt". Auch David und Salomo hießen so. Das hat mit Gottheit nichts zu tun.`,
          objectionBy: 'Bart Ehrman',
          answer: `Teilweise richtig – der Titel hat königliche Wurzeln. Aber Markus füllt ihn anders: Im Weinberggleichnis (Mk 12,1–9) unterscheidet Jesus zwischen den Knechten (den Propheten) und dem einen „geliebten Sohn" des Besitzers – eine kategoriale, nicht nur graduelle Unterscheidung. In Mk 13,32 entsteht eine Rangfolge: Menschen – Engel im Himmel – der Sohn – der Vater. Der Sohn steht über den Engeln, unmittelbar beim Vater. Kein König Israels wurde je so beschrieben.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '12,6', quote: `Da hatte er noch einen einzigen Sohn, der war ihm lieb; den sandte er zum letzten auch zu ihnen und sprach: Sie werden sich vor meinem Sohn scheuen.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'nizaea-abstimmung',
      objection: `Seien wir ehrlich: Die Gottheit Jesu wurde 325 in Nizäa unter dem Druck Kaiser Konstantins per Abstimmung beschlossen – und das Ergebnis war knapp. Vorher gab es ein buntes Spektrum von Meinungen.`,
      objectionBy: 'Populärliteratur (Dan Brown, „Sakrileg"); verbreitet auch in muslimischer Apologetik',
      answer: `In Nizäa ging es nicht um die Frage „Gott oder bloßer Mensch", sondern um Arius' These, der Sohn sei das erste und höchste **Geschöpf**. Von rund 300 Bischöfen verweigerten nur zwei die Unterschrift – von „knapp" keine Spur. Und lange vor Nizäa bezeugen Christen die Gottheit Jesu: Ignatius um 110 („unser Gott Jesus Christus"), Plinius um 112 („Christus wie einem Gott"), Justin um 155, Melito von Sardes um 170 („Gott ist ermordet worden"), Irenäus, Tertullian, Origenes.`,
      detail: `**Vornizänische Zeugen (Auswahl):**
- Ignatius von Antiochien, An die Epheser 18,2: „Denn unser Gott, Jesus der Christus, wurde von Maria im Schoß getragen nach Gottes Heilsplan."
- Plinius, Briefe X,96,7: „carmen Christo quasi deo dicere".
- Justin, Dialog mit Tryphon 48; 1. Apologie 63: Christus, der erstgeborene Logos, ist auch Gott.
- Melito von Sardes, Vom Passa 96: „Gott ist ermordet worden" (ho theos pephoneutai).
- Tertullian, Gegen Praxeas (ca. 213): erste lateinische Verwendung von „trinitas" im theologischen Sinn.

Mehr dazu im Claim „Die Trinität wurde 325 in Nizäa erfunden" (Antitrinitarier).`,
      voices: [
        {
          person: 'ignatius-antiochien',
          role: 'als Bischof und Märtyrer um 110',
          text: `Ignatius, nach der Überlieferung Hörer der Apostel, schrieb auf dem Weg zu seinem Martyrium in Rom sieben Briefe. Er nennt Jesus Christus mehrfach ganz selbstverständlich „unseren Gott" – nicht als neue These, sondern als gemeinsamen Glauben der Gemeinden in Kleinasien und Rom, an die er schreibt. Zugleich betont er die volle Menschheit gegen die Doketen. Die Verbindung beider Aussagen ist genau das, was die Kirche später in Nizäa und Ephesus bekennt.`,
          sources: [{ kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '18,2', year: 'ca. 110', quote: `Denn unser Gott, Jesus der Christus, wurde von Maria im Schoß getragen nach Gottes Heilsplan …`, original: `ὁ γὰρ θεὸς ἡμῶν Ἰησοῦς ὁ Χριστὸς ἐκυοφορήθη ὑπὸ Μαρίας κατ᾽ οἰκονομίαν θεοῦ`, translation: 'eigene Übersetzung', status: 'verbatim' }],
        },
      ],
      sources: [
        { kind: 'kirchenvater', author: 'Melito von Sardes', work: 'Vom Passa (Peri Pascha)', ref: '96', year: 'ca. 170', quote: `Gott ist ermordet worden.`, original: `ὁ θεὸς πεφόνευται`, status: 'verbatim' },
      ],
      questionsBack: [
        `Wie viele Bischöfe haben in Nizäa gegen das Bekenntnis gestimmt?`,
        `Wie erklärst du „unser Gott Jesus Christus" bei Ignatius, 215 Jahre vor Nizäa?`,
      ],
      followUps: [
        {
          id: 'arius-mehrheit',
          objection: `Aber nach Nizäa war der Osten jahrzehntelang arianisch, Kaiser Konstantius unterstützte die Arianer. Die Orthodoxie hat nicht durch Argumente gesiegt, sondern weil später Theodosius sie zur Staatsreligion machte.`,
          objectionBy: 'Bart Ehrman (sinngemäß) / Zeugen Jehovas',
          answer: `Gerade die Zeit nach Nizäa widerlegt die These vom kaiserlich verordneten Glauben: Konstantius II. und andere Kaiser förderten die Arianer, und Athanasius wurde fünfmal verbannt. Das nizänische Bekenntnis überlebte **gegen** die kaiserliche Macht – getragen von Gläubigen und Mönchen, nicht zuletzt in Ägypten, wo die koptischen Christen und die Wüstenväter treu zu ihrem Papst standen. „Athanasius gegen die Welt" ist kein Bild staatlicher Durchsetzung, sondern geistlichen Widerstands.`,
          voices: [
            {
              person: 'athanasius',
              text: `Athanasius verbrachte rund 17 Jahre seines Episkopats in fünf Verbannungen, oft versteckt bei den Mönchen der ägyptischen Wüste. Er hielt am Nizänum fest, obwohl Kaiser, Synoden und viele Bischöfe gegen ihn standen. Sein Argument blieb dasselbe: Wenn der Sohn nicht wahrer Gott ist, sind wir nicht erlöst, und die Anbetung der Kirche ist Götzendienst.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Text vor 1 Kor 8,6 und Phil 2 zeigt eine „niedrigere" Christologie, aus der sich diese entwickelt haben soll?`,
    `Warum beteten aramäisch sprechende Juden zu einem gekreuzigten Menschen – „Maranatha"?`,
    `Welche Gestalt außer Jesus wird im NT oder im Judentum als Schöpfer aller Dinge bezeichnet und angebetet?`,
    `Wenn Ehrman selbst einräumt, dass Paulus Jesus als präexistentes göttliches Wesen sah – was bleibt dann von „später erfunden"?`,
    `Wie viele Bischöfe stimmten in Nizäa gegen das Bekenntnis?`,
  ],
  avoid: [
    `Nur mit Johannes argumentieren (Joh 1,1; 8,58; 20,28) – der Gegner datiert Johannes spät und weicht aus. Beginne mit Paulus und Markus.`,
    `Behaupten, Jesus habe in den Synoptikern wörtlich „Ich bin Gott" gesagt – das tut er nicht; zeige stattdessen die impliziten Ansprüche.`,
    `Kol 1,15–20 als unbestritten paulinisch ausgeben – die Verfasserschaft ist umstritten; nutze ihn ergänzend.`,
    `Nizäa als „Abstimmung über die Gottheit" bezeichnen – damit übernimmst du die falsche Rahmung des Gegners.`,
  ],
  concessions: [
    `Die volle begriffliche Klärung (homoousios, Hypostasen) erfolgte erst im 4. Jahrhundert – die Sache war älter, die Begriffe wurden später geschärft.`,
    `Die Evangelien zeigen eine Entwicklung in der Ausdrücklichkeit: Johannes formuliert direkter als Markus.`,
    `Im Judentum des Zweiten Tempels gab es tatsächlich hohe Mittlergestalten; die Abgrenzung zur Christologie muss sorgfältig gezeigt werden.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael F. Bird u. a.', work: 'How God Became Jesus', year: '2014', status: 'paraphrase', note: 'Direkte Antwort auf Ehrman.' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Gottheit Christi', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Christologie', 'Ehrman', 'Hurtado', 'Bauckham', 'Philipperhymnus', 'Schma', 'Nizäa'],
  related: [
    'islam-gottheit-christi/jesus-sagte-nie-ich-bin-gott',
    'antitrinitarier/trinitaet-in-nizaa-erfunden',
    'judentum-messias/schma-schliesst-trinitaet-aus',
    'zeugen-jehovas/jesus-ist-michael-geschoepf',
    'kirchengeschichte-mythen/konstantin-verfaelschte',
    'historischer-jesus/jesus-nur-apokalyptiker',
  ],
};

export default claim;
