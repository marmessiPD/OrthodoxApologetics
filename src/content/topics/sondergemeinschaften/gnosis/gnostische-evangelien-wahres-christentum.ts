import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gnostische-evangelien-wahres-christentum',
  title: `„Die gnostischen Evangelien (Thomas, Judas, Maria) zeigen das wahre Christentum."`,
  proponents: [
    { name: 'Elaine Pagels', role: 'Religionshistorikerin, Princeton University', work: 'The Gnostic Gospels (1979); Beyond Belief: The Secret Gospel of Thomas (2003)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'Lost Christianities (2003); Lost Scriptures (2003)' },
    { name: 'Karen L. King', role: 'Kirchenhistorikerin, Harvard Divinity School', work: 'The Gospel of Mary of Magdala (2003); What Is Gnosticism? (2003)' },
    { name: 'Walter Bauer', role: 'Neutestamentler, Göttingen (1877–1960)', work: 'Rechtgläubigkeit und Ketzerei im ältesten Christentum (1934)' },
    { name: 'Dan Brown', role: 'Romanautor (popularisierende Wirkung)', work: 'Sakrileg / The Da Vinci Code (2003)' },
  ],
  steelman: `Im Dezember 1945 fanden Bauern bei Nag Hammadi in Oberägypten einen Krug mit dreizehn Lederkodizes – über fünfzig Schriften, darunter das Thomasevangelium, das Philippusevangelium und das Evangelium der Wahrheit. Später wurden das Evangelium der Maria und das Judasevangelium (Codex Tchacos) bekannt. Diese Texte zeigen: Das frühe Christentum war vielfältig. Es gab Christen, die Jesus als Lehrer innerer Erkenntnis verehrten, für die das Reich Gottes „in euch" ist (Thomas 3) und die Frauen wie Maria Magdalena als führende Jüngerinnen anerkannten. Walter Bauer zeigte schon 1934, dass in Regionen wie Ägypten die später „Häresie" genannten Formen sogar zuerst da waren. Die „Orthodoxie" ist einfach die Partei, die sich mit Hilfe von Bischöfen, Kaisern und Konzilien durchsetzte und die Geschichte umschrieb. Athanasius verbot 367 in seinem Osterfestbrief die „apokryphen" Bücher – kurz darauf vergruben Mönche in der Nähe die Nag-Hammadi-Schriften, um sie vor der Vernichtung zu retten. Manche Forscher datieren den Kern des Thomasevangeliums ins 1. Jahrhundert; es könnte älter sein als die kanonischen Evangelien.`,
  biblical: {
    summary: `Die kanonischen Evangelien und Paulusbriefe sind die **ältesten** erhaltenen christlichen Zeugnisse (ca. 50–100 n. Chr.) und beruhen auf Augenzeugen (Lk 1,1–4; 1 Joh 1,1–3). Schon das Neue Testament setzt sich mit Vorformen gnostischer Ideen auseinander: mit der Leugnung, dass Christus „im Fleisch gekommen" ist (1 Joh 4,2–3), mit der „fälschlich so genannten Erkenntnis" (*pseudōnymos gnōsis*, 1 Tim 6,20) und mit Spekulationen über himmlische Mächte, denen Paulus entgegenhält: „In ihm wohnt die ganze Fülle der Gottheit **leibhaftig**" (Kol 2,9). Gegen die gnostische Verachtung der Materie steht die gute Schöpfung (Gen 1,31; 1 Tim 4,4) und die leibliche Auferstehung (Lk 24,39).`,
    detail: `**Frauen:** Die kanonischen Evangelien machen Frauen zu den **ersten Zeuginnen** der Auferstehung (Mk 16,1–8; Joh 20,11–18) – in einer Kultur, in der ihr Zeugnis wenig galt; das spricht für die Geschichtlichkeit der Berichte. Das Thomasevangelium dagegen endet mit Logion 114: Petrus sagt, Maria solle die Jünger verlassen, „denn Frauen sind des Lebens nicht würdig", und Jesus antwortet, er werde sie „männlich machen", denn jede Frau, die sich männlich macht, werde ins Himmelreich eingehen. Von einem frauenfreundlicheren Christentum kann man hier kaum sprechen.

**Weltbild:** Viele Nag-Hammadi-Texte (besonders die „sethianischen", etwa das Apokryphon des Johannes) lehren, die Welt sei von einem unwissenden oder bösen Demiurgen geschaffen, und der Gott Israels sei dieser niedere Schöpfer. Das ist das Gegenteil des jüdischen Monotheismus, in dem Jesus lebte und betete.`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '4,2–3', quote: `Daran sollt ihr den Geist Gottes erkennen: ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott; und ein jeglicher Geist, der da nicht bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist nicht von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '6,20', quote: `O Timotheus! bewahre, was dir vertraut ist, und meide die ungeistlichen losen Geschwätze und das Gezänke der falsch berühmten Kunst.`, original: `τῆς ψευδωνύμου γνώσεως`, translation: 'Luther 1912', status: 'verbatim', note: 'Elberfelder: „der fälschlich so genannten Kenntnis".' },
      { kind: 'bibel', work: 'Kolosser', ref: '2,8–9', quote: `Sehet zu, daß euch niemand beraube durch die Philosophie und lose Verführung nach der Menschen Lehre und nach der Welt Satzungen, und nicht nach Christo. Denn in ihm wohnt die ganze Fülle der Gottheit leibhaftig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '1,1', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', work: 'Thomasevangelium (NHC II,2)', ref: 'Logion 114', quote: `Simon Petrus sagte zu ihnen: Maria soll von uns weggehen, denn die Frauen sind des Lebens nicht würdig. Jesus sagte: Siehe, ich werde sie führen, um sie männlich zu machen, damit auch sie ein lebendiger Geist werde, der euch Männern gleicht. Denn jede Frau, die sich männlich macht, wird in das Reich der Himmel eingehen.`, translation: 'eigene Übersetzung nach dem koptischen Text', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Der Forschungsstand: Die Nag-Hammadi-Kodizes sind koptische Abschriften des 4. Jahrhunderts von meist griechischen Originalen des 2. und 3. Jahrhunderts. Das **Thomasevangelium** wird von der Mehrheit ins 2. Jahrhundert datiert (Simon Gathercole: zwischen etwa 135 und 200); griechische Fragmente aus Oxyrhynchus stammen aus der Zeit um 200. Eine Minderheit (z. B. Stephen Patterson, April DeConick mit einem frühen Kern) vermutet ältere Schichten. Gathercole, Mark Goodacre und andere zeigen, dass Thomas redaktionelle Eigenheiten des Matthäus und Lukas voraussetzt; Nicholas Perrin sieht eine Abhängigkeit von syrischer Evangelientradition (Tatians Diatessaron). Das **Evangelium der Maria** und das **Judasevangelium** stammen aus dem 2. Jahrhundert. Die kanonischen Evangelien entstanden nach breitem Konsens zwischen ca. 65 und 100.`,
    detail: `**Walter Bauers These** gilt in ihrer starken Form als widerlegt: Der Papyrologe Colin H. Roberts zeigte anhand der frühesten christlichen Papyri aus Ägypten, dass dort keineswegs zuerst gnostische Texte verbreitet waren; die frühesten Funde sind überwiegend Texte, die später kanonisch wurden (z. B. P52, P66, P75). Richtig ist aber: Das frühe Christentum kannte Gruppen mit sehr verschiedenen Lehren, und schon Paulus kämpfte mit Irrlehrern.

**Nag Hammadi und die Mönche:** Die Kodizes wurden in der Nähe pachomianischer Klöster gefunden; in den Einbänden fanden sich Briefe und Dokumente aus den 340er-Jahren. Die These, Mönche hätten die Bücher nach Athanasius' 39. Osterfestbrief (367) vergraben, ist eine **Hypothese**. Hugo Lundhaug und Lance Jenott argumentieren, die Kodizes seien in einem monastischen Umfeld gelesen und abgeschrieben worden – Mönche lasen solche Texte offenbar auch kritisch oder erbaulich.

**Das Judasevangelium:** Die Erstveröffentlichung durch National Geographic (2006) stellte Judas als Helden dar. April DeConick und andere Koptologen kritisierten die Übersetzung: Judas wird darin als „dreizehnter Dämon" bezeichnet und bleibt eine tragische, vom Heil ausgeschlossene Figur.

**Fälschungen:** Das 2012 vorgestellte „Evangelium der Frau Jesu" erwies sich 2016 als moderne Fälschung; Karen King räumte das ein.`,
    sources: [
      { kind: 'fachliteratur', author: 'Simon J. Gathercole', work: 'The Gospel of Thomas: Introduction and Commentary', year: '2014', quote: `Datierung des Thomasevangeliums etwa zwischen 135 und 200; Kenntnis der synoptischen Evangelien.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Simon J. Gathercole', work: 'The Composition of the Gospel of Thomas: Original Language and Influences', year: '2012', quote: `Thomas setzt Matthäus und Lukas voraus; ursprünglich griechisch verfasst.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Nicholas Perrin', work: 'Thomas and Tatian: The Relationship between the Gospel of Thomas and the Diatessaron', year: '2002', quote: `Abhängigkeit des Thomasevangeliums von syrischer Evangelientradition.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Mark Goodacre', work: 'Thomas and the Gospels: The Case for Thomas\'s Familiarity with the Synoptics', year: '2012', quote: `Thomas enthält redaktionelle Eigenheiten der Synoptiker.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Colin H. Roberts', work: 'Manuscript, Society and Belief in Early Christian Egypt', year: '1979', quote: `Die frühesten christlichen Papyri Ägyptens stützen Bauers These einer ursprünglich gnostischen Prägung nicht.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Hugo Lundhaug / Lance Jenott', work: 'The Monastic Origins of the Nag Hammadi Codices', year: '2015', quote: `Die Kodizes stammen wahrscheinlich aus monastischem Umfeld; die Vergrabung nach 367 ist nicht gesichert.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'April D. DeConick', work: 'The Thirteenth Apostle: What the Gospel of Judas Really Says', year: '2007', quote: `Judas erscheint als „dreizehnter Dämon", nicht als Held.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Der hl. Irenäus von Lyon schrieb um 180 sein Werk *Entlarvung und Widerlegung der fälschlich so genannten Erkenntnis* (*Adversus Haereses*) und kannte viele dieser Gruppen und Schriften – auch ein „Judasevangelium". Er bezeugt die **vier** Evangelien als von der Kirche überall angenommen. Der hl. Athanasius listete 367 in seinem 39. Osterfestbrief die 27 Bücher des Neuen Testaments auf – nicht um einen Kanon zu erfinden, sondern um den in den Kirchen gebrauchten zu bestätigen und vor Schriften zu warnen, die unter Apostelnamen kursierten. Die Nag-Hammadi-Texte sind in **koptischer** Sprache erhalten: Die Auseinandersetzung mit der Gnosis ist Teil der Geschichte der koptischen Kirche selbst. Der hl. Schenute von Atripe wandte sich im 5. Jahrhundert scharf gegen das Lesen häretischer und apokrypher Bücher.`,
    detail: `Clemens von Alexandrien gebrauchte den Begriff „Gnostiker" positiv für den reifen Christen, der in Glaube und Liebe zur Erkenntnis Gottes heranwächst – innerhalb der Kirche, nicht gegen sie. Das zeigt: Die alexandrinische Kirche wollte echte Erkenntnis, aber keine Erkenntnis, die die Schöpfung verachtet und den Schöpfer vom Vater Jesu trennt. Die koptische Kirche bewahrte die kanonischen Evangelien in sahidischer und bohairischer Übersetzung; sie werden bis heute in der Liturgie gelesen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'III,11,8', quote: `Es kann nicht mehr und nicht weniger als vier Evangelien geben – wie es vier Himmelsrichtungen und vier Hauptwinde gibt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,31,1', quote: `Erwähnung eines „Judasevangeliums", das in häretischen Kreisen gebraucht wurde.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Aufzählung der 27 Bücher des Neuen Testaments als „Quellen des Heils"; Warnung vor apokryphen Schriften, die unter alten Namen verfasst wurden.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Schenute von Atripe', work: 'Gegen die Origenisten (Contra Origenistas, „I Am Amazed"), hg. T. Orlandi', year: '5. Jh.', quote: `Polemik gegen den Gebrauch häretischer und apokrypher Schriften.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die gnostischen Evangelien sind fast alle im 2. und 3. Jahrhundert entstanden – deutlich nach den Evangelien des Neuen Testaments, die auf Augenzeugen zurückgehen. Irenäus kannte sie schon um 180 und wusste, woher sie stammten. Und sie sind kein „freundlicheres" Christentum: Viele lehren, die Welt sei von einem bösen Gott geschaffen, und das Thomasevangelium endet damit, dass eine Frau „männlich werden" müsse, um gerettet zu werden.`,
  keyPoints: [
    `**Spätere Entstehung:** Thomas meist 2. Jh. (Gathercole: 135–200), Maria und Judas 2. Jh. – die kanonischen Evangelien 1. Jh.`,
    `**Abhängigkeit:** Thomas kennt Matthäus und Lukas (Gathercole, Goodacre) bzw. syrische Tradition (Perrin).`,
    `**Anderes Weltbild:** Böser Demiurg, Verachtung der Materie – unvereinbar mit dem jüdischen Glauben Jesu.`,
    `**Kein Frauenevangelium:** Thomas 114 vs. Frauen als erste Auferstehungszeuginnen in den Evangelien.`,
    `**Bauer-These widerlegt:** Die frühesten Papyri Ägyptens sind überwiegend kanonische Texte (Roberts).`,
    `**Koptisches Erbe:** Irenäus, Athanasius (367), Schenute – die Gnosis ist Teil der Geschichte der ägyptischen Kirche.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Zeitgenosse und Kenner der gnostischen Systeme',
      text: `Irenäus kannte die Gnostiker aus erster Hand – ihre Lehrer, ihre Schriften und ihre Mythen von Äonen, Demiurg und himmlischer Fülle. Er hielt ihnen entgegen: Die Lehre der Apostel ist öffentlich und überall gleich, in Gallien wie in Ägypten; die Gnostiker dagegen widersprechen einander und erfinden ständig neue Systeme. Die vier Evangelien sind die von der ganzen Kirche angenommene Grundlage; neuere Schriften, die sich auf geheime Überlieferung berufen, verraten sich durch ihre Neuheit.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,10,2; III,3,1; III,11,8–9', quote: `Einheit der apostolischen Lehre gegenüber der Vielfalt der gnostischen Systeme.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Verfasser des 39. Osterfestbriefs',
      text: `Athanasius schrieb 367 als Patriarch von Alexandrien an die ägyptischen Kirchen und Klöster einen Osterfestbrief mit der Liste der kanonischen Bücher. Sein Anliegen war pastoral: Gläubige sollten nicht durch Schriften verwirrt werden, die unter dem Namen alter Heiliger neu verfasst wurden. Er bestätigte damit, was die Kirchen längst lasen – die Liste entspricht dem Gebrauch, den schon Irenäus und Origenes bezeugen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Kanonliste und Warnung vor Apokryphen.`, status: 'paraphrase' }],
    },
    {
      person: 'schenute',
      role: 'als koptischer Abt im Oberägypten der Nag-Hammadi-Zeit',
      text: `Schenute wirkte im 5. Jahrhundert nur wenige Dutzend Kilometer von Nag Hammadi entfernt. In seinen koptischen Schriften wandte er sich gegen Mönche und Laien, die häretische und apokryphe Bücher lasen und ihre Lehren verbreiteten, und verteidigte den Glauben von Nizäa und die Lehre des Athanasius. Er zeigt, dass die koptische Kirche diese Texte kannte – und sie bewusst als unvereinbar mit dem apostolischen Glauben erkannte.`,
      sources: [{ kind: 'koptisch', author: 'Schenute von Atripe', work: 'Contra Origenistas („I Am Amazed")', quote: `Gegen häretische Lehren und Bücher.`, status: 'paraphrase' }],
    },
    {
      person: 'simon-gathercole',
      role: 'als Spezialist für das Thomasevangelium',
      text: `Gathercole hat die beiden umfassendsten neueren Studien zum Thomasevangelium vorgelegt. Er zeigt, dass Thomas ursprünglich griechisch verfasst wurde und Formulierungen voraussetzt, die typisch für die Bearbeitung durch Matthäus und Lukas sind. Er datiert das Werk ins 2. Jahrhundert. Damit ist Thomas eine wertvolle Quelle für das Christentum des 2. Jahrhunderts – aber kein unabhängiger, älterer Zugang zum historischen Jesus.`,
      sources: [{ kind: 'fachliteratur', author: 'Simon J. Gathercole', work: 'The Gospel of Thomas: Introduction and Commentary', year: '2014', quote: `Abhängigkeit von den Synoptikern; Datierung ins 2. Jahrhundert.`, status: 'paraphrase' }],
    },
    {
      person: 'hurtado',
      role: 'als Handschriftenhistoriker',
      text: `Hurtado hat die frühesten christlichen Handschriften untersucht und gezeigt, dass die Schriften, die später kanonisch wurden, in den frühesten Funden deutlich überwiegen und schon früh in Gottesdienst und Lehre gebraucht wurden. Zugleich zeigt er, dass die Verehrung Jesu als göttlicher Herr bereits in den ersten Jahrzehnten bei jüdischen Christen fest verankert war – lange vor den gnostischen Systemen des 2. Jahrhunderts.`,
      sources: [
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'The Earliest Christian Artifacts', year: '2006', quote: `Verteilung und Gebrauch der frühesten christlichen Handschriften.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ', year: '2003', quote: `Frühe Christusverehrung im jüdischen Christentum.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'thomas-frueh',
      objection: `Das Thomasevangelium ist so alt wie die kanonischen Evangelien, vielleicht älter. Das Jesus-Seminar hat es als „fünftes Evangelium" gleichrangig behandelt.`,
      objectionBy: 'Elaine Pagels / Jesus-Seminar',
      answer: `Die Mehrheit der Fachleute datiert Thomas ins 2. Jahrhundert. Die gründlichsten neueren Studien zeigen, dass Thomas Formulierungen kennt, die erst Matthäus und Lukas geprägt haben – er setzt sie also voraus. Die ältesten Fragmente stammen aus der Zeit um 200. Das Jesus-Seminar war eine Minderheitenposition, auch unter kritischen Forschern.`,
      followUps: [
        {
          id: 'logien-urspruenglicher',
          objection: `Viele Logien bei Thomas wirken ursprünglicher: kürzer, ohne Allegorie, ohne Deutung. Das spricht für eine frühe, unabhängige Überlieferung.`,
          objectionBy: 'Stephen J. Patterson / Helmut Koester',
          answer: `Kürze ist kein Beweis für Alter – Bearbeiter kürzen auch, besonders wenn sie Gleichnisse von ihrem Zusammenhang lösen, um sie als „geheime Worte" zu präsentieren. Nicholas Perrin hat zudem gezeigt, dass Thomas Stichwortverbindungen enthält, die im Syrischen funktionieren und auf syrische Evangelientradition des 2. Jahrhunderts verweisen.`,
          followUps: [
            {
              id: 'thomas-tiefer',
              objection: `Thomas zeigt einen Jesus der inneren Erkenntnis – ohne Kreuz, ohne Sünde, ohne Dogma. Das ist doch spirituell tiefer.`,
              objectionBy: 'Elaine Pagels',
              answer: `Gerade das macht ihn historisch unwahrscheinlicher: Die Kreuzigung Jesu ist eine der sichersten Tatsachen der Antike, bezeugt sogar von Tacitus. Ein Jesus ohne Kreuz ist ein Jesus, der aus seiner Geschichte gelöst wurde. Und Thomas ist nicht so mild, wie oft behauptet: Logion 114 erklärt Frauen für „des Lebens nicht würdig", solange sie nicht „männlich" werden.`,
              followUps: [
                {
                  id: 'nur-bewertung',
                  objection: `Das ist nur deine Bewertung. Historisch sind beide Formen gleichermaßen „christlich" – es gab eben viele Christentümer.`,
                  objectionBy: 'Bart D. Ehrman',
                  answer: `Die historische Frage lautet: Welche Form steht Jesus am nächsten? Die ältesten Quellen – Paulus um 50, mit einem Bekenntnis, das er wenige Jahre nach Ostern empfing (1 Kor 15,3–8) – stellen Tod und Auferstehung ins Zentrum. Die Gnosis trennt den Schöpfergott vom Vater Jesu und verachtet die Materie; das ist mit dem jüdischen Glauben Jesu an den einen Schöpfer unvereinbar. Vielfalt gab es – aber nicht alle Formen sind gleich nah an ihrem Ursprung.`,
                  questionsBack: [`Welche Quelle aus dem 1. Jahrhundert stützt ein gnostisches Christentum ohne Kreuz und Auferstehung?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bauer-sieger',
      objection: `Die Orthodoxie hat einfach gewonnen und die Geschichte umgeschrieben. In Ägypten war die „Häresie" sogar zuerst da – das hat Walter Bauer gezeigt.`,
      objectionBy: 'Walter Bauer / Bart D. Ehrman',
      answer: `Bauer argumentierte vor allem aus dem Schweigen der Quellen. Seitdem wurden viele frühe Papyri gefunden: Colin Roberts zeigte, dass die frühesten christlichen Texte aus Ägypten überwiegend Schriften sind, die später kanonisch wurden – etwa P52, P66 und P75 mit dem Johannesevangelium. Zudem zeigen schon die Briefe des Paulus und Johannes einen festen Kern: Christus gestorben, auferstanden, im Fleisch gekommen.`,
      followUps: [
        {
          id: 'kanon-konstantin',
          objection: `Den Kanon hat dann Konstantin festgelegt und die anderen Evangelien verbrennen lassen.`,
          objectionBy: 'Dan Brown / populäre Darstellungen',
          answer: `Irenäus bezeugt die vier Evangelien schon um 180 – 150 Jahre vor Konstantin, in einer Zeit der Verfolgung. Das Konzil von Nizäa hat über den Kanon gar nicht beraten. Kein Historiker, auch Bart Ehrman nicht, vertritt die Konstantin-These.`,
          followUps: [
            {
              id: 'nag-hammadi-vergraben',
              objection: `Aber die Mönche mussten die Nag-Hammadi-Schriften nach Athanasius' Osterfestbrief 367 vergraben. Das ist ein Beweis für Unterdrückung.`,
              objectionBy: 'Elaine Pagels / James M. Robinson',
              answer: `Das ist eine Hypothese, kein Befund. Neuere Forschung (Lundhaug und Jenott) zeigt, dass die Kodizes wohl in Klöstern gelesen und abgeschrieben wurden – offenbar auch kritisch. Und selbst wenn sie vergraben wurden: Dass eine Kirche bestimmte Bücher nicht im Gottesdienst lesen will, macht diese nicht wahr. Athanasius' Brief zeigt vielmehr, dass der Kanon 367 längst in Gebrauch war – er bestätigte ihn, er erfand ihn nicht.`,
              questionsBack: [`Wenn eine Kirche sagt, welche Bücher sie im Gottesdienst liest – ist das schon Unterdrückung?`],
            },
          ],
        },
      ],
    },
    {
      id: 'maria-fuehrerin',
      objection: `Das Evangelium der Maria zeigt: Frauen waren in der frühen Kirche Leiterinnen. Die Männerkirche hat Maria Magdalena später zur Sünderin gemacht und verdrängt.`,
      objectionBy: 'Karen L. King',
      answer: `Die kanonischen Evangelien machen Maria Magdalena zur ersten Zeugin des Auferstandenen (Joh 20,11–18) – die Ostkirche nennt sie „apostelgleich". Die Gleichsetzung mit der „Sünderin" stammt aus der westlichen Tradition (Gregor der Große), nicht aus den Evangelien und nicht aus der koptischen Kirche. Das Evangelium der Maria stammt aus dem 2. Jahrhundert; sein Streit zwischen Petrus und Maria spiegelt Debatten jener Zeit, nicht der Jünger Jesu.`,
      followUps: [
        {
          id: 'jesus-kuesste-maria',
          objection: `Das Philippusevangelium sagt, Jesus küsste Maria auf den Mund – sie war seine Gefährtin, wahrscheinlich seine Frau.`,
          objectionBy: 'Dan Brown / populäre Darstellungen',
          answer: `An der entscheidenden Stelle hat die Handschrift eine Lücke – „auf den Mund" ist eine Ergänzung. Das Philippusevangelium ist ein Text des 3. Jahrhunderts, in dem der Kuss ein Bild für geistliche Zeugung ist („die Vollkommenen empfangen durch einen Kuss"). Und das 2012 vorgestellte „Evangelium der Frau Jesu" hat sich 2016 als moderne Fälschung erwiesen.`,
          sources: [{ kind: 'gegner', work: 'Philippusevangelium (NHC II,3)', ref: '59; 63–64', quote: `Der Kuss als Bild geistlicher Empfängnis; Lücke in der Handschrift an der Stelle über Maria Magdalena.`, status: 'paraphrase' }],
        },
      ],
    },
    {
      id: 'judas-held',
      objection: `Das Judasevangelium zeigt Judas als den einzigen Jünger, der Jesus wirklich verstand und ihm half, sich vom Körper zu befreien.`,
      objectionBy: 'National Geographic (Erstveröffentlichung 2006)',
      answer: `Irenäus kannte dieses Evangelium schon um 180 und ordnete es einer gnostischen Gruppe zu – es ist also ein Text des 2. Jahrhunderts, kein Bericht eines Augenzeugen. Zudem haben Koptologen wie April DeConick gezeigt, dass die erste Übersetzung verzerrt war: Judas wird darin als „dreizehnter Dämon" bezeichnet. Und die Idee, Jesus müsse von seinem Körper befreit werden, widerspricht der leiblichen Auferstehung (Lk 24,39).`,
      questionsBack: [`Was sagt uns ein Text aus dem 2. Jahrhundert über das, was Judas um das Jahr 30 tatsächlich tat?`],
    },
  ],
  questionsToAsk: [
    `Welches gnostische Evangelium lässt sich sicher ins 1. Jahrhundert datieren?`,
    `Wie passt ein böser Schöpfergott zum jüdischen Glauben Jesu an den einen Schöpfer?`,
    `Hast du Logion 114 des Thomasevangeliums gelesen?`,
    `Warum zitieren gnostische Texte die kanonischen Evangelien, aber nicht umgekehrt?`,
  ],
  avoid: [
    `„Die gnostischen Texte sind alle Fälschungen des Mittelalters." – Falsch; sie sind echte antike Texte des 2.–4. Jahrhunderts.`,
    `Die Vielfalt des frühen Christentums leugnen – es gab sie; entscheidend ist, welche Form auf die Apostel zurückgeht.`,
    `„Athanasius hat die Nag-Hammadi-Bücher verbrennen lassen." – Dafür gibt es keinen Beleg.`,
  ],
  concessions: [
    `Im frühen Christentum gab es tatsächlich verschiedene Gruppen mit stark abweichenden Lehren.`,
    `Einige Forscher vermuten einen frühen Kern im Thomasevangelium; die Datierung ist nicht völlig geklärt.`,
    `Die These, die Nag-Hammadi-Kodizes seien wegen des Osterfestbriefs von 367 vergraben worden, ist möglich, aber unbewiesen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Simon J. Gathercole', work: 'The Gospel of Thomas: Introduction and Commentary', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Darrell L. Bock', work: 'The Missing Gospels: Unearthing the Truth Behind Alternative Christianities', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andreas J. Köstenberger / Michael J. Kruger', work: 'The Heresy of Orthodoxy', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig A. Evans', work: 'Fabricating Jesus: How Modern Scholars Distort the Gospels', year: '2006', status: 'paraphrase' },
    { kind: 'gegner', author: 'Elaine Pagels', work: 'The Gnostic Gospels', year: '1979', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gnosis', 'Nag Hammadi', 'Thomasevangelium', 'Judasevangelium', 'Kanon', 'Koptische Handschriften'],
  related: [
    'neues-testament/kanon-von-konstantin',
    'neues-testament/evangelien-spaet-anonym',
    'gnosis/geheimes-wissen-elite',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'islam-bibelverfaelschung/barnabasevangelium',
  ],
};

export default claim;
