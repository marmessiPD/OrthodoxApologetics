import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gaertner-parabel',
  title: `„Gott ist wie Flews unsichtbarer Gärtner – eine unfalsifizierbare Hypothese."`,
  proponents: [
    { name: 'Antony Flew (früh)', role: 'Philosoph, damals führender Atheist (1923–2010)', work: '„Theology and Falsification" (1950), in: Flew & MacIntyre (Hg.), New Essays in Philosophical Theology (1955)' },
    { name: 'John Wisdom', role: 'Philosoph, Cambridge (1904–1993)', work: '„Gods", Proceedings of the Aristotelian Society 45 (1944/45) – Vorlage der Gärtner-Parabel' },
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftsautor (1934–1996)', work: 'The Demon-Haunted World (1995), Kap. 10 „The Dragon in My Garage"' },
    { name: 'Kai Nielsen', role: 'Religionsphilosoph, University of Calgary (1926–2021)', work: 'Contemporary Critiques of Religion (1971)' },
  ],
  steelman: `Antony Flew erzählte 1950 – nach einer Vorlage von John Wisdom – ein Gleichnis: Zwei Forscher finden im Dschungel eine Lichtung mit Blumen und Unkraut. Der eine sagt: „Ein Gärtner pflegt dieses Stück Land." Der andere widerspricht. Sie stellen Zelte auf und wachen – kein Gärtner erscheint. Vielleicht ist er unsichtbar? Sie ziehen einen Stacheldrahtzaun, setzen ihn unter Strom, patrouillieren mit Bluthunden. Kein Schrei, keine Bewegung im Draht, kein Bellen. Doch der Gläubige bleibt dabei: Es gibt einen Gärtner – unsichtbar, unberührbar, unempfindlich gegen Strom, ohne Geruch, ohne Geräusch. Da fragt der Skeptiker: Wie unterscheidet sich ein solcher Gärtner von einem eingebildeten – oder von gar keinem? So geht es mit dem Gottesglauben: Jede Gegenbeobachtung – das Leid eines Kindes, unerhörte Gebete, das Schweigen des Himmels – wird durch eine neue Einschränkung abgefangen („Gottes Liebe ist nicht menschlich", „seine Wege sind unerforschlich"). Eine kühne Behauptung stirbt so „den Tod der tausend Einschränkungen". Was nichts ausschließt, behauptet nichts.`,
  biblical: {
    summary: `Das Christentum hat sich von Anfang an *überprüfbar* gemacht. Paulus schreibt: „Ist aber Christus nicht auferstanden, so ist unsere Predigt vergeblich, so ist auch euer Glaube vergeblich" (1 Kor 15,14) – und nennt Zeugen, von denen „noch viele leben" (15,6). Die Schrift fordert: „Prüfet aber alles" (1 Thess 5,21), gibt Kriterien für falsche Propheten (Dtn 18,22) und erzählt, wie Elia die Wahrheitsfrage öffentlich stellt (1 Kön 18,21–39). Der Glaube der Bibel ist kein unwiderlegbares Gefühl, sondern ein Vertrauen, das sich auf Geschehenes beruft.`,
    detail: `- **1 Kor 15,14–17:** Ausdrücklich formulierte Bedingung, unter der der Glaube falsch wäre. Kaum eine Weltanschauung legt ihre Widerlegungsbedingung so offen auf den Tisch.
- **1 Kor 15,6:** Über fünfhundert Brüder sahen den Auferstandenen, „deren noch viele leben" – eine Einladung zur Nachprüfung, etwa 20–25 Jahre nach den Ereignissen.
- **Lk 1,1–4:** Lukas will, dass Theophilus „den gewissen Grund der Lehre" erfährt – auf Grundlage von Augenzeugen und sorgfältiger Erkundung.
- **2 Petr 1,16:** „Wir sind nicht klugen Fabeln gefolgt", sondern waren Augenzeugen.
- **Ehrlich:** Die Bibel kennt auch Glaubensprüfungen, in denen Gott verborgen scheint (Hiob, Ps 22). Sie verschweigt die „Gegenbeobachtungen" nicht – sie nimmt sie ins Gebet.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,14.17', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich. … Ist Christus aber nicht auferstanden, so ist euer Glaube eitel, so seid ihr noch in euren Sünden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Danach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '18,21', quote: `Wie lange hinket ihr auf beiden Seiten? Ist der HERR Gott, so wandelt ihm nach; ist's aber Baal, so wandelt ihm nach.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche versteht den Glauben nicht als Flucht vor der Wirklichkeit, sondern als Antwort auf ein geschichtliches Handeln Gottes. Das Glaubensbekenntnis nennt bewusst einen römischen Beamten: „gekreuzigt unter Pontius Pilatus" – der Glaube wird in der überprüfbaren Geschichte verankert. Die Väter, etwa Athanasius in „Über die Menschwerdung", berufen sich auf sichtbare Wirkungen: die Furchtlosigkeit der Märtyrer vor dem Tod und die Ausbreitung des Glaubens als Zeichen, dass Christus lebt. Die koptische Kirche, Kirche der Märtyrer, versteht ihr eigenes Zeugnis in dieser Linie.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `… gekreuzigt für uns unter Pontius Pilatus, hat gelitten und ist begraben worden, ist am dritten Tage auferstanden nach der Schrift …`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '27–30', status: 'paraphrase', quote: 'Dass Christen den Tod verachten und der Glaube sich ausbreitet, ist ein sichtbares Zeichen dafür, dass der Tod besiegt ist und Christus lebt.' },
    ],
  },
  quickAnswer: `Das Christentum ist gerade *nicht* unfalsifizierbar: Paulus sagt selbst, wenn Christus nicht auferstanden ist, ist unser Glaube vergeblich (1 Kor 15,14). Die Auferstehung ist ein historischer Anspruch – mit Grab, Zeugen und Datum. Außerdem hängt am Gottesglauben vieles, was man prüfen kann: dass das Universum einen Anfang hat, fein abgestimmt ist, Bewusstsein und Moral hervorbringt. Und Flews Gärtner ist ein schiefes Bild: Gott ist kein Wesen *im* Garten, das man mit Bluthunden aufspüren müsste, sondern der Grund, warum es überhaupt einen Garten gibt. Übrigens: Flew selbst kam im Alter aufgrund von Befunden der Wissenschaft zum Gottesglauben.`,
  keyPoints: [
    `**Offene Widerlegungsbedingung:** 1 Kor 15,14–17 nennt ausdrücklich, was den Glauben widerlegen würde. Das ist das Gegenteil von Immunisierung.`,
    `**Gott ist kein Gärtner im Garten:** Flews Bild setzt einen Gott voraus, der wie ein Gegenstand in der Welt aufspürbar sein müsste. Der Gott der Bibel ist der Grund des Gartens – man erkennt ihn an seinem Werk, wie einen Autor an seinem Buch.`,
    `**Falsifizierbarkeit ist kein Sinnkriterium:** Karl Popper selbst hielt sie für ein Abgrenzungskriterium der Naturwissenschaft, nicht für ein Kriterium des Sinns. Viele sinnvolle Sätze sind nicht falsifizierbar („Es gibt andere Bewusstseine").`,
    `**Basil Mitchells Partisan:** Gegenevidenz (z. B. Leid) zählt gegen den Glauben, aber nicht entscheidend, wenn er auf starken Gründen beruht – wie Vertrauen in einen bewährten Freund.`,
    `**John Hicks eschatologische Verifikation:** Der Glaube ist im Prinzip überprüfbar – spätestens am Ende des Weges.`,
    `**Ironie der Geschichte:** Flew selbst wandte sich 2004 einem Gottesglauben zu – wegen Feinabstimmung und DNA. Er behandelte die Gottesfrage also am Ende selbst als evidenzbezogen.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel und Zeuge der Auferstehung',
      text: `Paulus bindet in 1 Kor 15 den ganzen Glauben an ein Ereignis: Christus ist gestorben, begraben, am dritten Tag auferweckt und vielen Zeugen erschienen – Kephas, den Zwölf, über fünfhundert Brüdern, Jakobus, allen Aposteln und zuletzt ihm selbst. Er zieht die Konsequenz ohne Ausflucht: Wenn Christus nicht auferstanden ist, ist der Glaube nichtig, die Apostel sind falsche Zeugen, und die Christen sind „die elendesten unter allen Menschen". Paulus kennt also keine unwiderlegbare Glaubensburg, sondern ein Zeugnis, das an der Wirklichkeit hängt.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,3–19', status: 'paraphrase', quote: 'Das Evangelium hängt an Tod, Begräbnis, Auferweckung und Erscheinungen Christi; ohne Auferstehung wäre der Glaube nichtig.' },
      ],
    },
    {
      person: 'basil-mitchell',
      role: 'als Teilnehmer des ursprünglichen Symposiums (1950)',
      text: `Mitchell antwortete Flew im selben Symposium mit einer Gegen-Parabel: Ein Mitglied des Widerstands in einem besetzten Land begegnet einem Fremden, der ihn tief beeindruckt und sagt, er sei der Anführer des Widerstands. Später sieht der Partisan den Fremden manchmal Widerstandskämpfern helfen, manchmal aber in der Uniform der Polizei Partisanen den Besatzern übergeben. Der Partisan vertraut trotzdem – nicht, weil ihm nichts gegen den Fremden spricht, sondern weil er ihn kennengelernt hat. Mitchell betont: Der Christ leugnet nicht, dass das Leid gegen den Glauben zählt. Es ist eine echte Prüfung. Aber er lässt es nicht *entscheidend* zählen, weil sein Vertrauen auf Gründen beruht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Basil Mitchell', work: 'Beitrag zu „Theology and Falsification", in: Flew & MacIntyre (Hg.), New Essays in Philosophical Theology', year: '1955 (Symposium 1950)', status: 'paraphrase', quote: 'Die Parabel vom Partisan und dem Fremden: Gegenevidenz zählt, aber nicht entscheidend, wenn das Vertrauen begründet ist.' },
      ],
    },
    {
      person: 'john-hick',
      role: 'als Religionsphilosoph',
      text: `Hick antwortete 1960 mit dem Gedanken der „eschatologischen Verifikation": Zwei Wanderer gehen denselben Weg. Der eine glaubt, er führe zur Himmlischen Stadt, der andere, er führe nirgendwohin. Unterwegs erleben beide dieselben Freuden und Mühen und deuten sie verschieden. Doch ihr Streit ist kein leerer Wortstreit: Am Ende des Weges wird sich zeigen, wer recht hatte. Der christliche Glaube macht also eine Behauptung, die prinzipiell überprüfbar ist – auch wenn die Überprüfung nicht im Labor, sondern am Ende des Lebens geschieht.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Hick', work: '„Theology and Verification", Theology Today 17', year: '1960', status: 'paraphrase', quote: 'Die Parabel von der Himmlischen Stadt: Der Gottesglaube ist eschatologisch verifizierbar und daher kognitiv sinnvoll.' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Wissenschaftstheoretiker des Theismus',
      text: `Swinburne behandelt den Theismus wie eine große erklärende Hypothese. Er fragt, wie wahrscheinlich bestimmte Befunde – dass es ein Universum gibt, dass es naturgesetzlich geordnet ist, dass es feinabgestimmt ist, dass es bewusste, moralisch fähige Wesen gibt, dass Wunder und religiöse Erfahrungen berichtet werden – unter der Annahme Gottes sind und wie wahrscheinlich ohne sie. Damit steht die Gottesfrage mitten im Feld der Belege. Gerade weil der Theismus solche Befunde *erwarten lässt*, ist er keine leere Behauptung, sondern eine prüfbare Erklärung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', status: 'paraphrase', quote: 'Kumulatives, wahrscheinlichkeitstheoretisches Argument für den Theismus als beste Erklärung.' },
      ],
    },
    {
      person: 'flew',
      role: 'als Urheber der Parabel, der seine Meinung änderte',
      text: `Flew hat jahrzehntelang mit der Gärtner-Parabel gegen den Gottesglauben argumentiert. 2004 erklärte er öffentlich, unter anderem im Gespräch mit Gary Habermas, er glaube nun an einen Gott – nicht an den christlichen, sondern an eine schöpferische Intelligenz –, und zwar wegen der Befunde zur Feinabstimmung des Universums und zur Komplexität der DNA. Er sagte, er habe sein Leben lang versucht, dem Argument zu folgen, wohin es führt. Damit behandelte er die Gottesfrage am Ende selbst als eine Frage der Evidenz – genau das, was seine Parabel bestritten hatte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Antony Flew & Gary Habermas', work: '„My Pilgrimage from Atheism to Theism: An Exclusive Interview", Philosophia Christi 6', year: '2004', status: 'paraphrase', quote: 'Flew begründet seine Abkehr vom Atheismus mit Feinabstimmung und der Komplexität der DNA; er wolle dem Argument folgen, wohin es führt.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'was-wuerde-widerlegen',
      objection: `„Sag mir: Was müsste geschehen, damit du zugibst, dass Gott dich nicht liebt oder nicht existiert? Wenn nichts – dann sagt dein Satz ‚Gott existiert' auch nichts."`,
      objectionBy: 'Antony Flew (Theology and Falsification, 1950)',
      answer: `Eine faire Frage – und Paulus hat sie vor 1900 Jahren beantwortet: Wenn Christus nicht auferstanden ist, ist unser Glaube vergeblich (1 Kor 15,14). Wird der Leichnam Jesu gefunden oder lässt sich zeigen, dass die Erscheinungen erfunden waren, ist das Christentum widerlegt. Darüber hinaus hängt der Gottesglaube an vielen prüfbaren Dingen: dass das Universum einen Anfang hat, dass es feinabgestimmt ist, dass es Bewusstsein gibt.`,
      sources: [
        { kind: 'gegner', author: 'Antony Flew', work: '„Theology and Falsification", in: New Essays in Philosophical Theology', year: '1955 (zuerst 1950)', quote: `Was müsste geschehen oder geschehen sein, um für dich ein Beweis gegen die Liebe Gottes oder gegen seine Existenz zu sein?`, original: 'Just what would have to occur or to have occurred to constitute for you a disproof of the love of, or of the existence of, God?', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'knochen-wuerdest-nicht-akzeptieren',
          objection: `„Das sagst du jetzt. Aber wenn morgen jemand die Knochen Jesu fände, würdest du sagen, sie seien gefälscht. In der Praxis lässt du nichts gegen deinen Glauben gelten."`,
          objectionBy: 'Peter Boghossian / Kai Nielsen (sinngemäß)',
          answer: `Menschen – Gläubige wie Atheisten – können Belege verdrängen; das ist ein psychologisches, kein logisches Problem. Logisch entscheidend ist, dass der Anspruch prüfbar ist. Und er wurde geprüft: Die Apostel verkündeten die Auferstehung in Jerusalem, wenige Minuten vom Grab entfernt, vor Gegnern, die nur den Leichnam hätten vorzeigen müssen. Als 2007 das „Jesus-Familiengrab" von Talpiot behauptet wurde, antworteten Archäologen mit Belegen – nicht mit „Das ist unwiderlegbar".`,
          detail: `Siehe „Der Leichnam wurde gestohlen oder man ging zum falschen Grab" und „Die Auferstehung ist eine Legende, die sich über Jahrzehnte entwickelte".`,
          followUps: [
            {
              id: 'gott-existiert-selbst-unfalsifizierbar',
              objection: `„Gut, die Auferstehung ist eine historische Behauptung. Aber der Satz ‚Gott existiert' selbst – der bleibt unfalsifizierbar. Selbst wenn Jesus nicht auferstanden wäre, könntest du an irgendeinen Gott glauben."`,
              objectionBy: 'Antony Flew / Graham Oppy',
              answer: `Erstens: Falsifizierbarkeit ist kein Kriterium für Sinn. Karl Popper hat sie als Abgrenzung der Naturwissenschaft vorgeschlagen und ausdrücklich betont, dass metaphysische Sätze sinnvoll sein können. Viele sinnvolle Sätze sind nicht falsifizierbar: „Es gibt andere Bewusstseine außer meinem", „Die Welt existiert länger als fünf Minuten", „Alles, was existiert, ist physisch". Zweitens ist der Theismus mit prüfbaren Erwartungen verbunden – Swinburne zeigt, wie Befunde ihn wahrscheinlicher oder unwahrscheinlicher machen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Karl R. Popper', work: 'Logik der Forschung', year: '1934/35', status: 'paraphrase', quote: 'Falsifizierbarkeit ist ein Abgrenzungskriterium empirischer Wissenschaft, kein Sinnkriterium; metaphysische Sätze sind nicht sinnlos.' },
              ],
              followUps: [
                {
                  id: 'naturalismus-ist-falsifizierbar',
                  objection: `„Im Unterschied zu deinem Glauben ist mein Naturalismus falsifizierbar: Ein einziges echtes Wunder würde ihn widerlegen."`,
                  objectionBy: 'Sean Carroll (sinngemäß)',
                  answer: `Gut – dann sind wir uns einig, dass es um Belege geht, und können über die Auferstehung Jesu und andere gut bezeugte Ereignisse sprechen. Aber Vorsicht: Viele Naturalisten erklären Wunder im Voraus für unmöglich oder für historisch nie feststellbar (seit David Hume). Wer so vorgeht, hat seinen Naturalismus gerade unfalsifizierbar gemacht – er ist dann der Gläubige in Flews Garten, der jede Beobachtung umdeutet.`,
                  detail: `Siehe „Historiker können grundsätzlich kein Wunder feststellen".`,
                  questionsBack: [`Welches konkrete, gut bezeugte Ereignis würdest du als Wunder anerkennen – oder hast du dich schon vorher festgelegt, dass es keines gibt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'flew-bekehrung-alter',
          objection: `„Flews ‚Bekehrung' kam im hohen Alter, und die New York Times hat berichtet, dass sein Buch ‚There Is a God' großenteils von einem christlichen Koautor geschrieben wurde. Das ist kein Argument."`,
          objectionBy: 'Richard Carrier / Mark Oppenheimer (New York Times Magazine, 2007, sinngemäß)',
          answer: `Richtig, Flews Meinungswechsel ist kein Argument für Gott – und das Buch ist tatsächlich stark von Roy Varghese geprägt. Aber Flew hat seine Gründe selbst in Interviews dargelegt, etwa 2004 mit Gary Habermas: Feinabstimmung und DNA. Der Punkt ist nicht seine Autorität, sondern dass der Urheber der Gärtner-Parabel am Ende selbst die Gottesfrage als Frage der Evidenz behandelte. Entscheidend sind die Argumente, nicht die Biografie.`,
          questionsBack: [`Würdest du einem Argument weniger glauben, weil ein alter Mann es vorträgt?`],
        },
      ],
    },
    {
      id: 'tod-der-tausend-einschraenkungen',
      objection: `„Ein Kind stirbt qualvoll an Krebs. Sein irdischer Vater tut alles, um zu helfen; der himmlische Vater tut nichts. Und ihr sagt: ‚Gottes Liebe ist eben nicht wie menschliche Liebe.' So stirbt eine Behauptung den Tod der tausend Einschränkungen."`,
      objectionBy: 'Antony Flew (Theology and Falsification, 1950)',
      answer: `Das ist der stärkste Teil von Flews Text, und er verdient eine ehrliche Antwort: Ja, Leid zählt *gegen* den Glauben – Christen leugnen das nicht, sie beten mit Hiob und Psalm 22. Basil Mitchell antwortete Flew: Gegenevidenz zählt, aber nicht entscheidend, wenn der Glaube auf starken Gründen beruht – so wie ein Partisan seinem Anführer vertraut, auch wenn dessen Verhalten manchmal rätselhaft ist. Das ist keine Immunisierung, sondern begründetes Vertrauen.`,
      sources: [
        { kind: 'gegner', author: 'Antony Flew', work: '„Theology and Falsification"', year: '1950', quote: `Eine schöne, kühne Hypothese kann so zentimeterweise getötet werden – der Tod durch tausend Einschränkungen.`, original: 'A fine brash hypothesis may thus be killed by inches, the death by a thousand qualifications.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'vertrauen-ist-immunisierung',
          objection: `„‚Nicht entscheidend zählen lassen' ist genau die Immunisierung, die ich meine. Du hast dich entschieden, nichts entscheidend zählen zu lassen."`,
          objectionBy: 'Antony Flew / Kai Nielsen',
          answer: `Nein. Mitchell sagt ausdrücklich: Es gibt einen Punkt, an dem das Vertrauen nicht mehr vernünftig wäre. Vertrauen ist dann rational, wenn es auf positiven Gründen beruht – beim Partisanen die Begegnung mit dem Fremden, beim Christen die Auferstehung Jesu, die Gründe für Gottes Existenz und die Erfahrung seiner Treue. So vertraust du auch einem langjährigen Freund, wenn du ihn einmal in einer zweideutigen Situation siehst – ohne dass dein Vertrauen deshalb unwiderlegbar wäre.`,
          questionsBack: [`Wenn du deinen besten Freund in einer zweideutigen Situation sähest – würdest du sofort an ihm zweifeln, oder wäre dein Vertrauen nicht gerade dann vernünftig?`],
          followUps: [
            {
              id: 'vater-der-nichts-tut',
              objection: `„Ein Vater, der zusieht, wie sein Kind an Krebs stirbt, und nichts tut, liebt nicht. Punkt. Kein Partisanen-Gleichnis ändert das."`,
              objectionBy: 'Bart Ehrman (God\'s Problem, 2008, sinngemäß)',
              answer: `Hier muss man zuerst still werden: Wer ein Kind verliert, braucht Beistand, nicht ein Argument. Philosophisch zwei Punkte: Christen glauben nicht an einen Gott, der „nichts tut", sondern der in Christus selbst gelitten hat und den Tod besiegt hat – das Kind ist nicht vergessen, sondern zur Auferstehung bestimmt (Offb 21,4). Und dass wir die Gründe Gottes nicht kennen, ist kein Beweis, dass es keine gibt – ein Kind versteht auch nicht, warum die Eltern eine schmerzhafte Behandlung zulassen.`,
              detail: `Siehe den Themenblock „Das Problem des Leids", besonders „Das Leid unschuldiger Kinder ist durch nichts zu rechtfertigen" und „Das Ausmaß sinnlosen Leids macht Gott unwahrscheinlich".`,
            },
          ],
        },
      ],
    },
    {
      id: 'unsichtbarer-drache',
      objection: `„Carl Sagan hat es gezeigt: Ich behaupte, in meiner Garage lebt ein Drache – unsichtbar, schwebend, mit Feuer ohne Hitze. Jede Prüfung wird abgewehrt. Was ist der Unterschied zwischen diesem Drachen und gar keinem? Genauso mit Gott."`,
      objectionBy: 'Carl Sagan (The Demon-Haunted World, 1995, Kap. 10)',
      answer: `Der Drache ist als Gegenstand *in* der Garage gedacht – also müsste er Spuren hinterlassen; wer das abwehrt, immunisiert. Gott ist aber kein Gegenstand im Universum, sondern der Grund, warum es ein Universum gibt. Man findet Shakespeare nicht als Figur in Hamlets Schloss – und doch ist er im ganzen Stück zu erkennen. So wird Gott nicht mit Bluthunden gesucht, sondern aus dem Dasein, der Ordnung und dem Sinn der Welt erschlossen.`,
      followUps: [
        {
          id: 'gebet-messbar',
          objection: `„Aber ihr behauptet, Gott erhört Gebete und tut Wunder – das sind messbare Wirkungen. Die große Gebetsstudie von 2006 (STEP) fand keinerlei Effekt. Gott fällt beim Test durch."`,
          objectionBy: 'Richard Dawkins (The God Delusion, Kap. 2) / Victor Stenger',
          answer: `Die Studie (Benson u. a. 2006) fand tatsächlich keinen messbaren Effekt fremder Fürbitte auf Herzoperationen – das sollte man ehrlich sagen. Aber sie testet einen Gebetsautomaten, keinen personalen Gott. Jesus lehnte Zeichen auf Bestellung ab (Mt 12,39) und zitierte: „Du sollst Gott, deinen Herrn, nicht versuchen" (Mt 4,7). Würdest du die Liebe deiner Frau mit einer Doppelblindstudie prüfen? Personen erkennt man an ihrem freien Handeln, nicht an Wiederholbarkeit.`,
          sources: [
            { kind: 'wissenschaft', author: 'Herbert Benson u. a.', work: '„Study of the Therapeutic Effects of Intercessory Prayer (STEP)", American Heart Journal 151', year: '2006', status: 'paraphrase', quote: 'Fürbitte durch Fremde hatte keinen nachweisbaren Einfluss auf Komplikationen nach Bypass-Operationen.' },
            { kind: 'bibel', work: 'Matthäus', ref: '4,7', quote: `Da sprach Jesus zu ihm: Wiederum steht auch geschrieben: »Du sollst Gott, deinen HERRN, nicht versuchen.«`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'person-ausrede',
              objection: `„‚Gott ist eine Person, man kann ihn nicht testen' ist eine Ausrede. Auch Personen erkennt man an ihren Wirkungen – ich schließe von Spuren auf einen Einbrecher."`,
              objectionBy: 'Victor Stenger (God: The Failed Hypothesis, 2007, sinngemäß)',
              answer: `Genau! Und genau das tun die Argumente für Gott: Sie schließen von Wirkungen auf einen Geist – vom Anfang des Universums auf eine Ursache, von der Feinabstimmung auf Absicht, von der Information im Leben auf Intelligenz, vom moralischen Gesetz auf einen Gesetzgeber. Und Christen sagen: Diese Person hat sich in Jesus von Nazareth in der Geschichte gezeigt. Damit sind wir mitten in der Debatte über Belege – also weit weg von „unfalsifizierbar".`,
              questionsBack: [`Wenn man Personen an ihren Wirkungen erkennt – welche Wirkungen würdest du einem Schöpfer des Universums zuschreiben?`],
            },
          ],
        },
      ],
    },
    {
      id: 'hick-verifikation-billig',
      objection: `„Hicks ‚eschatologische Verifikation' ist billig. Eine Überprüfung nach dem Tod nützt uns jetzt nichts. Und wenn es kein Leben nach dem Tod gibt, ist niemand mehr da, der den Irrtum bemerkt."`,
      objectionBy: 'Kai Nielsen',
      answer: `Hick wollte nicht zeigen, dass wir *jetzt* eine Bestätigung haben, sondern dass der Satz „Gott existiert" einen echten Inhalt hat – und das gelingt: Es macht einen Unterschied, wie die Wirklichkeit am Ende ist. Dass eine Behauptung nur einseitig überprüfbar ist, ist bei Existenzaussagen normal: „Irgendwo im Universum gibt es einen Planeten mit Ozeanen aus Methan" kann man bestätigen, aber kaum widerlegen – und doch ist der Satz sinnvoll.`,
      followUps: [
        {
          id: 'existenzsatz-wissenschaft',
          objection: `„Aber in der Wissenschaft akzeptieren wir nur Hypothesen, die man testen kann. Deine Gotteshypothese gehört nicht dazu."`,
          objectionBy: 'Jerry Coyne (Faith vs. Fact, 2015, sinngemäß)',
          answer: `Die Gottesfrage ist keine naturwissenschaftliche Hypothese im engen Sinn, sondern eine philosophische und historische Frage – wie die Frage, ob es Naturgesetze gibt oder ob die Vergangenheit real ist. Auch in der Physik werden Theorien wie das Multiversum ernsthaft diskutiert, obwohl sie kaum testbar sind. Und dort, wo der christliche Glaube die Geschichte berührt – bei der Auferstehung –, ist er der historischen Prüfung ausgesetzt.`,
          detail: `Siehe „Nur die Naturwissenschaft liefert echtes Wissen (Szientismus)" und „Das Multiversum erklärt die Feinabstimmung".`,
        },
      ],
    },
    {
      id: 'hare-bliks',
      objection: `„Sogar ein christlicher Teilnehmer der Debatte, R. M. Hare, hat zugegeben, dass religiöse Überzeugungen keine Behauptungen sind, sondern ‚Bliks' – Grundeinstellungen wie die eines Verrückten, der glaubt, alle Professoren wollten ihn ermorden."`,
      objectionBy: 'Antony Flew (Erwiderung im Symposium) / Kai Nielsen',
      answer: `Hare hat etwas Richtiges gesehen: Jeder Mensch lebt aus Grundüberzeugungen, die er nicht im Labor prüft – etwa dass die Welt geordnet ist und die Vernunft verlässlich. Aber die Kirche hat Hares Deutung nie übernommen. Der christliche Glaube ist nicht nur eine Einstellung zur Welt, sondern behauptet Tatsachen: Gott existiert, Jesus ist auferstanden. Paulus und Petrus sprechen nicht von einer Haltung, sondern von dem, was sie gesehen haben (2 Petr 1,16).`,
      detail: `Siehe „Religion ist nur ein Sprachspiel ohne Wahrheitsanspruch" – dort ausführlich zur nicht-kognitiven Deutung des Glaubens.`,
      followUps: [
        {
          id: 'jeder-hat-bliks',
          objection: `„Dann gibst du ja zu: Auch dein Glaube ruht letztlich auf einem Blik, einer Grundeinstellung, die du nicht beweisen kannst."`,
          objectionBy: 'R. M. Hare / Kai Nielsen (sinngemäß)',
          answer: `Jeder Mensch hat Grundüberzeugungen – auch der Atheist, der der Wissenschaft und der Logik vertraut. Alvin Plantinga hat gezeigt, dass solche „basalen" Überzeugungen rational sein können, ohne aus anderen abgeleitet zu sein. Aber basal heißt nicht unbegründet oder unwiderruflich: Der christliche Glaube wird zusätzlich durch Argumente und historische Belege gestützt und könnte, wie Paulus zeigt, an der Wirklichkeit scheitern. Er ist also kein Blik, sondern ein begründetes Vertrauen.`,
          sources: [
            { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', status: 'paraphrase', quote: 'Glaube an Gott kann „basal" und dennoch gerechtfertigt sein, wie der Glaube an andere Bewusstseine oder an die Vergangenheit.' },
          ],
          questionsBack: [`Auf welchen unbewiesenen Grundüberzeugungen ruht dein eigenes Weltbild – etwa das Vertrauen in die Verlässlichkeit deines Denkens?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was würde *dich* davon überzeugen, dass es Gott gibt? Gibt es da etwas – oder ist dein Atheismus unfalsifizierbar?`,
    `Ist „Es gibt andere Bewusstseine außer meinem" falsifizierbar? Ist der Satz deshalb sinnlos?`,
    `Warum sollte ein Schöpfer des Universums sich wie ein Gärtner im Garten aufspüren lassen müssen, statt am Garten selbst erkennbar zu sein?`,
    `Paulus nennt die Bedingung, unter der sein Glaube falsch wäre. Welche Weltanschauung tut das sonst so klar?`,
  ],
  avoid: [
    `„Gott kann man nicht beweisen und nicht widerlegen – man muss einfach glauben." – Damit bestätigst du Flews These.`,
    `„Gegen den Glauben gibt es keine Gegenargumente." – Doch: Das Leid ist ein echtes Gegenargument, das man ehrlich behandeln muss.`,
    `Flews späte Wende als „Bekehrung zum Christentum" darstellen – er wurde Deist, kein Christ.`,
  ],
  concessions: [
    `Manche Gläubige reagieren auf Einwände tatsächlich mit immer neuen Ausflüchten; Flews Kritik trifft diese Haltung zu Recht.`,
    `Der Satz „Gott existiert" ist nicht im naturwissenschaftlichen Sinn experimentell prüfbar; er wird philosophisch und historisch begründet.`,
    `Das Buch „There Is a God" (2007) ist zu großen Teilen von Roy Varghese verfasst; man sollte sich auf Flews eigene Interviews stützen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Antony Flew, R. M. Hare & Basil Mitchell', work: '„Theology and Falsification", in: Flew & MacIntyre (Hg.), New Essays in Philosophical Theology', year: '1955', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Hick', work: '„Theology and Verification", Theology Today 17', year: '1960', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God and Other Minds', year: '1967', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Coherence of Theism', ref: 'Teil I (religiöse Sprache)', year: '2. Aufl. 2016', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Falsifikation', 'Flew', 'religiöse Sprache', 'Popper', 'Mitchell', 'Hick'],
  related: [
    'religioese-sprache/religioese-saetze-sinnlos',
    'religioese-sprache/glaube-als-sprachspiel',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'atheismus/teekanne-spaghettimonster',
    'auferstehung/wunder-historisch-unmoeglich',
    'theodizee/evidentielles-problem',
    'theodizee/unerhoerte-gebete',
  ],
};

export default claim;
