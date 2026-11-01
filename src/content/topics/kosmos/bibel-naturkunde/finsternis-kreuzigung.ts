import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'finsternis-kreuzigung',
  title: `„Eine Sonnenfinsternis bei der Kreuzigung ist unmöglich – zu Passa ist Vollmond."`,
  proponents: [
    { name: 'Edward Gibbon', role: 'Historiker der Aufklärung', work: 'The History of the Decline and Fall of the Roman Empire, Bd. 1 (1776), Kap. 15' },
    { name: 'Richard Carrier', role: 'Althistoriker und Religionskritiker', work: '„Thallus and the Darkness at Christ\'s Death", Journal of Greco-Roman Christianity and Judaism 8 (2011–2012)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Did Jesus Exist? (2012)' },
    { name: 'Dale C. Allison Jr.', role: 'Neutestamentler, Princeton Theological Seminary', work: 'The End of the Ages Has Come (1985)' },
  ],
  steelman: `Die Evangelien behaupten, bei Jesu Tod sei von der sechsten bis zur neunten Stunde eine Finsternis „über das ganze Land" gekommen (Mk 15,33), und Lukas sagt sogar, „die Sonne verfinsterte sich" – griechisch *tou hēliou eklipontos*, der Fachausdruck für eine Sonnenfinsternis (Lk 23,45). Das ist astronomisch unmöglich: Das Passafest fällt auf den 14./15. Nisan, also auf Vollmond, und eine Sonnenfinsternis kann nur bei Neumond stattfinden. Außerdem dauert eine totale Sonnenfinsternis höchstens etwa siebeneinhalb Minuten, nicht drei Stunden. Kein einziger zeitgenössischer Autor berichtet von einer solchen Finsternis – nicht Seneca, nicht Plinius der Ältere, der in seiner Naturgeschichte ungewöhnliche Finsternisse sammelte; Edward Gibbon hat das schon 1776 bemerkt. Die angeblichen Zeugen Thallus und Phlegon kennen wir nur aus späten christlichen Zitaten, und Phlegon meinte wohl eine echte Sonnenfinsternis des Jahres 29. Die Erklärung ist literarisch: Amos 8,9 verheißt, Gott werde „die Sonne am Mittag untergehen lassen", und auch beim Tod Caesars soll sich die Sonne verdunkelt haben. Die Finsternis ist ein apokalyptisches Motiv, kein Ereignis.`,
  biblical: {
    summary: `Markus und Matthäus sprechen nicht von einer Sonnen*finsternis*, sondern von einer **Finsternis** (*skotos*) „über das ganze Land" von der sechsten bis zur neunten Stunde, also etwa von 12 bis 15 Uhr (Mk 15,33; Mt 27,45). Lukas schreibt *tou hēliou eklipontos* – wörtlich „als die Sonne aussetzte/versagte". Das Verb *ekleipō* heißt allgemein „aufhören, ausgehen, versagen"; Lukas benutzt es selbst in Lk 22,32 („daß dein Glaube nicht aufhöre", *mē eklipē*) und Lk 16,9 („wenn ihr nun darbet"). Die Evangelisten behaupten also **keine astronomische Sonnenfinsternis**, sondern dass das Licht der Sonne für drei Stunden ausfiel. „Das ganze Land" (*gē*) bezeichnet im Kontext wahrscheinlich das Land Judäa, nicht die ganze Erde. Die Finsternis trägt die Bedeutung von Amos 8,9–10: Gericht und Trauer „wie über den einzigen Sohn".`,
    detail: `**Textkritik.** Die ältesten Handschriften (u. a. Papyrus 75, Codex Sinaiticus, Codex Vaticanus) lesen in Lk 23,45 *tou hēliou eklipontos*; viele spätere Handschriften lesen „und die Sonne wurde verfinstert" (*kai eskotisthē ho hēlios*). Schreiber haben also offenbar bemerkt, dass „Eklipse" missverstanden werden konnte, und glätteten den Text. Die ältere Lesart ist wahrscheinlich ursprünglich – aber auch sie meint nicht zwingend eine astronomische Eklipse.

**Amos 8,9–10.** „Ich will die Sonne am Mittag untergehen lassen … und will ein Trauern schaffen, wie man trauert über den einzigen Sohn." Für die Evangelisten erfüllt sich dieses Gerichtswort am Kreuz des einzigen Sohnes Gottes.

**Apg 2,20.** Petrus zitiert am Pfingsttag Joel 3,4: „Die Sonne soll sich verkehren in Finsternis und der Mond in Blut" – und sagt, das geschehe „jetzt" (Apg 2,16). Manche sehen darin eine Anspielung auf Ereignisse um die Kreuzigung, die den Zuhörern bekannt waren.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '27,45', quote: `Und von der sechsten Stunde an ward eine Finsternis über das ganze Land bis zu der neunten Stunde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,44–45', quote: `Und es war um die sechste Stunde, und es ward eine Finsternis über das ganze Land bis an die neunte Stunde, und die Sonne verlor ihren Schein, und der Vorhang des Tempels zerriß mitten entzwei.`, original: 'τοῦ ἡλίου ἐκλιπόντος', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '22,32', quote: `Ich aber habe für dich gebeten, daß dein Glaube nicht aufhöre.`, original: 'ἵνα μὴ ἐκλίπῃ ἡ πίστις σου', translation: 'Luther 1912', status: 'verbatim', note: 'Dasselbe Verb ekleipō im allgemeinen Sinn „aufhören, versagen".' },
      { kind: 'bibel', work: 'Amos', ref: '8,9–10', quote: `Zur selben Zeit, spricht der Herr HERR, will ich die Sonne am Mittag untergehen lassen und das Land am hellen Tage lassen finster werden. … und will ein Trauern schaffen, wie man trauert über den einzigen Sohn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,20', quote: `Die Sonne soll sich verkehren in Finsternis und der Mond in Blut, ehe denn der große und offenbare Tag des HERRN kommt.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Finsternis nie als gewöhnliche Sonnenfinsternis verstanden. Schon **Julius Africanus** (frühes 3. Jh.) widersprach dem heidnischen Historiker Thallus, der die Finsternis als Eklipse „wegerklärte": Eine Sonnenfinsternis bei Vollmond sei unmöglich – es sei eine von Gott gewirkte Finsternis gewesen. **Origenes** hielt die Finsternis für ein auf Judäa begrenztes Wunder und vermutete sogar, die Lesart „Eklipse" in manchen Lukas-Handschriften sei eine Verfälschung. Die koptische Kirche gedenkt der Kreuzigung täglich: In der **Agpeya** erinnert das Gebet der sechsten Stunde an die Kreuzigung, das der neunten Stunde an den Tod Christi; am Karfreitag (in der Paschawoche) wird der Leidensweg Stunde für Stunde gelesen. Schon die *Traditio Apostolica* begründete das Gebet zur sechsten Stunde mit der Kreuzigung und der Finsternis.`,
    sources: [
      { kind: 'kirchenvater', author: 'Julius Africanus', work: 'Chronographiae (Fragment bei Georgios Synkellos)', ref: 'Frg. 18 (nach der Ausgabe von Wallraff)', year: 'um 221', quote: `Diese Finsternis erklärt Thallus im dritten Buch seiner Geschichte als Sonnenfinsternis – zu Unrecht, wie mir scheint; denn die Hebräer feiern das Passa am 14. Tag nach dem Mond, und eine Sonnenfinsternis kann nicht eintreten, wenn der Mond der Sonne gegenübersteht.`, status: 'paraphrase', note: 'Nur in späterer Überlieferung erhalten; Fragmentzählung je nach Ausgabe verschieden.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Commentariorum series in Matthaeum', ref: '134', year: 'nach 244', quote: `Die Finsternis sei auf das Land Judäa beschränkt gewesen; dass manche Handschriften des Lukas von einer Sonnenfinsternis sprechen, könne auf eine Verfälschung zurückgehen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hippolyt von Rom (zugeschrieben)', work: 'Traditio Apostolica', ref: '41', year: 'frühes 3. Jh.', quote: `Zur sechsten Stunde soll man beten, weil Christus da ans Holz des Kreuzes gehängt wurde und der Tag sich teilte und große Finsternis entstand.`, status: 'paraphrase', note: 'Verfasserschaft umstritten.' },
      { kind: 'liturgie', work: 'Agpeya (koptisches Stundengebet), Gebete der sechsten und neunten Stunde', quote: `Die sechste Stunde gedenkt der Kreuzigung, die neunte des Todes Christi am Kreuz.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Astronomisch ist unbestritten: Zum Passafest herrschte Vollmond, eine Sonnenfinsternis war unmöglich, und keine Sonnenfinsternis dauert drei Stunden. Historisch gibt es **keinen sicheren außerbiblischen Beleg** für die Finsternis. Thallus ist nur durch Julius Africanus bekannt; seine Datierung (1. oder 2. Jh.) und der genaue Wortlaut sind umstritten. Phlegon von Tralles berichtete von einer großen Sonnenfinsternis und einem Erdbeben in Bithynien in der 202. Olympiade; viele Forscher beziehen das auf die totale Sonnenfinsternis vom 24. November 29 n. Chr., die in Kleinasien sichtbar war. Neutestamentler wie Dale Allison und Raymond Brown deuten die Finsternis vor allem als theologisch-apokalyptisches Motiv. Colin Humphreys und Graeme Waddington (Nature 1983) haben auf eine partielle Mondfinsternis am Abend des 3. April 33 hingewiesen, die mit Apg 2,20 („Mond in Blut") zusammenhängen könnte; Bradley Schaefer hielt sie für in Jerusalem kaum wahrnehmbar.`,
    sources: [
      { kind: 'wissenschaft', author: 'Colin J. Humphreys; W. Graeme Waddington', work: '„Dating the Crucifixion", Nature 306', ref: 'S. 743–746', year: '1983', quote: `Die Autoren datieren die Kreuzigung auf Freitag, den 3. April 33 n. Chr., und weisen auf eine partielle Mondfinsternis hin, die an diesem Abend beim Mondaufgang in Jerusalem eingesetzt habe; sie verbinden sie mit dem „Mond in Blut" von Apg 2,20.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Bradley E. Schaefer', work: '„Lunar Visibility and the Crucifixion", Quarterly Journal of the Royal Astronomical Society 31', year: '1990', quote: `Die Mondfinsternis vom 3. April 33 habe stattgefunden, sei aber in Jerusalem beim Mondaufgang kaum bemerkbar gewesen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard Carrier', work: '„Thallus and the Darkness at Christ\'s Death", Journal of Greco-Roman Christianity and Judaism 8', year: '2011–2012', status: 'paraphrase' },
      { kind: 'gegner', author: 'Edward Gibbon', work: 'The History of the Decline and Fall of the Roman Empire', ref: 'Bd. 1, Kap. 15', year: '1776', quote: `Gibbon wundert sich, dass weder Seneca noch Plinius der Ältere eine so außergewöhnliche Finsternis erwähnen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Da hast du völlig recht – und die Evangelien behaupten auch keine Sonnenfinsternis. Markus und Matthäus sprechen von einer „Finsternis", und Lukas' Wort *ekleipō* heißt einfach „aussetzen, versagen"; er benutzt es auch für den Glauben, der „nicht aufhören" soll (Lk 22,32). Schon Julius Africanus argumentierte im 3. Jahrhundert genau wie du: Bei Vollmond ist keine Eklipse möglich – darum war es ein Zeichen Gottes. Die Finsternis lag wohl über dem Land Judäa, nicht über der ganzen Welt, und erfüllt Amos 8,9: „Ich will die Sonne am Mittag untergehen lassen."`,
  keyPoints: [
    `**Volle Zustimmung zur Astronomie:** Bei Vollmond gibt es keine Sonnenfinsternis, und keine dauert drei Stunden – das behaupten die Evangelien auch nicht.`,
    `**Wortlaut prüfen:** Markus und Matthäus sagen *skotos* (Finsternis); *ekleipō* bei Lukas heißt „aussetzen, versagen" (vgl. Lk 22,32).`,
    `**Die Väter wussten es:** Julius Africanus (3. Jh.) widerlegte Thallus mit dem Vollmond-Argument; Origenes hielt die Finsternis für ein auf Judäa begrenztes Wunder.`,
    `**„Das ganze Land" = Judäa:** Eine regionale Verdunkelung würde in Rom nicht verzeichnet – das Schweigen von Seneca und Plinius ist kein starkes Argument.`,
    `**Ehrlich zu Thallus und Phlegon:** Beide sind unsichere Zeugen; Phlegon meinte wohl die Sonnenfinsternis vom November 29 n. Chr.`,
    `**Symbol und Ereignis schließen sich nicht aus:** Die Finsternis trägt die Bedeutung von Amos 8,9–10 – das macht sie nicht unhistorisch.`,
  ],
  voices: [
    {
      person: 'julius-africanus',
      role: 'als christlicher Chronograph',
      text: `Julius Africanus, der erste christliche Weltchronist, setzte sich mit dem heidnischen Historiker Thallus auseinander, der die Finsternis bei Jesu Tod als natürliche Sonnenfinsternis erklärt hatte. Africanus hielt das für unmöglich: Das Passa wird bei Vollmond gefeiert, und eine Eklipse ist nur möglich, wenn der Mond zwischen Erde und Sonne steht. Bemerkenswert ist zweierlei: Ein Christ des 3. Jahrhunderts argumentierte astronomisch exakt – und wenn das Fragment zuverlässig ist, kannte schon ein heidnischer Autor die christliche Behauptung einer Finsternis und suchte eine natürliche Erklärung.`,
      sources: [{ kind: 'kirchenvater', author: 'Julius Africanus', work: 'Chronographiae (Fragment bei Georgios Synkellos)', year: 'um 221', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Textkritiker und Apologet',
      text: `Origenes setzte sich mehrfach mit der Finsternis auseinander. In *Contra Celsum* (II,33; II,59) verweist er auf Phlegon, der in seinen Chroniken eine Finsternis und Erdbeben unter Tiberius erwähne. In seinem Matthäuskommentar argumentiert er dagegen vorsichtiger: Die Finsternis sei auf Judäa beschränkt gewesen, und die Lesart „Sonnenfinsternis" in manchen Lukas-Handschriften könne auf Verfälschung durch Gegner zurückgehen, die den Evangelien einen Fehler anhängen wollten. Origenes zeigt damit, wie früh Christen das astronomische Problem kannten und ehrlich diskutierten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'II, 33; II, 59', year: 'um 248', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Origenes', work: 'Commentariorum series in Matthaeum', ref: '134', year: 'nach 244', status: 'paraphrase' },
      ],
    },
    {
      person: 'lukas',
      role: 'als sorgfältiger Historiker',
      text: `Lukas betont in seinem Prolog, dass er „alles von Anfang an erkundet" und Augenzeugen befragt habe (Lk 1,1–4). Ein so sorgfältiger Autor, der Zeitangaben gern mit Herrschern verbindet (Lk 3,1–2), hätte kaum gemeint, eine dreistündige natürliche Sonnenfinsternis bei Vollmond habe stattgefunden. Seine Formulierung „die Sonne setzte aus" beschreibt das Erlebte – das Licht verschwand –, ohne eine astronomische Erklärung zu geben.`,
      sources: [{ kind: 'bibel', work: 'Lukas', ref: '1,1–4; 23,44–45', status: 'paraphrase' }],
    },
    {
      person: 'colin-humphreys',
      role: 'als Physiker',
      text: `Colin Humphreys und der Astrophysiker Graeme Waddington berechneten 1983 in *Nature*, dass am Abend des 3. April 33 eine partielle Mondfinsternis stattfand, die beim Mondaufgang in Jerusalem schon begonnen hatte. Sie verbinden das mit Petrus' Pfingstpredigt über den „Mond in Blut" (Apg 2,20) und mit der Datierung der Kreuzigung auf dieses Jahr. Die Hypothese erklärt nicht die Finsternis am Mittag, und ihre Sichtbarkeit ist umstritten – sie zeigt aber, dass die Evangelienberichte mit konkreten astronomischen Daten ins Gespräch gebracht werden können.`,
      sources: [{ kind: 'wissenschaft', author: 'Colin J. Humphreys; W. Graeme Waddington', work: '„Dating the Crucifixion", Nature 306', year: '1983', status: 'paraphrase' }],
    },
    {
      person: 'tertullian',
      role: 'als Apologet',
      text: `Tertullian schreibt in seinem *Apologeticum* (21), dass bei Christi Tod der Tag am Mittag verschwand und manche, die nicht wussten, dass dies vorhergesagt war, es für eine Eklipse hielten. Er behauptet, die Römer hätten das Ereignis in ihren Archiven. Diese Behauptung ist rhetorisch und nicht überprüfbar; man sollte sie nicht als Beleg verwenden. Bemerkenswert ist aber, dass auch Tertullian die Finsternis ausdrücklich von einer gewöhnlichen Eklipse unterscheidet. Tertullian ist Apologet, keine Lehrautorität.`,
      sources: [{ kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '21, 19', year: '197', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'vollmond-unmoeglich',
      objection: `Passa fällt auf Vollmond. Eine Sonnenfinsternis ist bei Vollmond astronomisch unmöglich, und sie dauert höchstens siebeneinhalb Minuten – nicht drei Stunden.`,
      objectionBy: 'Edward Gibbon',
      answer: `Völlig richtig – und genau deshalb behaupten die Evangelien keine natürliche Sonnenfinsternis. Markus und Matthäus sprechen von einer „Finsternis" über dem Land, nicht von einer Eklipse. Schon im 3. Jahrhundert argumentierte der Christ Julius Africanus mit deinem Argument gegen den Heiden Thallus: Bei Vollmond ist keine Eklipse möglich, also war es ein Zeichen Gottes. Dein Einwand trifft eine Behauptung, die die Bibel gar nicht aufstellt.`,
      followUps: [
        {
          id: 'lukas-eklipse',
          objection: `Lukas schreibt aber *tou hēliou eklipontos* – „als die Sonne eine Eklipse erlitt". Das ist der Fachbegriff. Lukas hat sich geirrt.`,
          objectionBy: 'Richard Carrier',
          answer: `*Ekleipō* ist zunächst ein ganz gewöhnliches Verb für „aufhören, ausgehen, versagen". Lukas selbst benutzt es so: Jesus betet, dass Petrus' Glaube „nicht aufhöre" (*mē eklipē*, Lk 22,32), und spricht von der Zeit, „wenn es [das Geld] ausgeht" (Lk 16,9). „Die Sonne setzte aus" beschreibt das Erlebte: Das Licht verschwand. Ein Autor, der wie Lukas sorgfältig recherchierte, hätte schwerlich eine dreistündige natürliche Eklipse bei Vollmond behauptet.`,
          followUps: [
            {
              id: 'textvariante',
              objection: `Spätere Schreiber haben „die Sonne verfinsterte sich" daraus gemacht – sie haben den Fehler also selbst bemerkt und vertuscht.`,
              objectionBy: 'Bart D. Ehrman',
              answer: `Ja, viele spätere Handschriften glätten zu *kai eskotisthē ho hēlios*, und die ältere Lesart *eklipontos* (Papyrus 75, Sinaiticus, Vaticanus) ist wahrscheinlich ursprünglich – das ist textkritisch ehrlich. Aber die Glättung zeigt nur, dass Schreiber ein Missverständnis vermeiden wollten, nicht dass Lukas eine Eklipse im astronomischen Sinn meinte. Der Vorgang ist offen dokumentiert; schon Origenes hat ihn im 3. Jahrhundert diskutiert. Vertuscht wurde nichts.`,
              followUps: [
                {
                  id: 'dann-nur-wunder',
                  objection: `Dann bleibt dir nur: „Es war übernatürlich." Das ist unbelegbar.`,
                  objectionBy: 'Richard Carrier',
                  answer: `Es gibt mehrere ehrliche Möglichkeiten: eine von Gott gewirkte Verdunkelung, wie die Väter meinten; eine natürliche Ursache, die Gott zum Zeichen machte – etwa eine schwere Wolken- oder Staubwetterlage über Judäa (Origenes dachte an eine regionale Verdunkelung); oder, wie manche Exegeten meinen, eine vor allem symbolische Darstellung. Ich halte die erste oder zweite Möglichkeit für am besten zum Text passend. Sicher ist: Die Finsternis gehört zur frühesten Passionsüberlieferung (Markus), und wenn Gott existiert und Christus von den Toten auferstand, ist ein Zeichen bei seinem Tod nicht unvernünftig.`,
                  questionsBack: [`Schließt du übernatürliche Ereignisse grundsätzlich aus? Dann entscheidet nicht die Geschichtswissenschaft, sondern deine Weltanschauung.`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-zeitgenosse',
      objection: `Eine dreistündige Finsternis – und kein Seneca, kein Plinius, kein einziger heidnischer Zeitgenosse erwähnt sie.`,
      objectionBy: 'Edward Gibbon',
      answer: `„Über das ganze Land" (*epi pasan tēn gēn*) meint im Kontext sehr wahrscheinlich das Land Judäa, nicht die ganze Erde – so verstand es schon Origenes. Eine regionale Verdunkelung über Jerusalem und Umgebung hätte in Rom niemand bemerkt. Aus der Antike sind zudem nur Bruchteile der Geschichtsschreibung erhalten. Das Schweigen römischer Autoren über ein lokales Ereignis in einer Randprovinz ist ein schwaches Argument.`,
      followUps: [
        {
          id: 'thallus-unsicher',
          objection: `Christen berufen sich auf Thallus – aber den kennen wir nur aus einem späten Zitat des Julius Africanus, und niemand weiß, wann Thallus schrieb oder was genau er sagte.`,
          objectionBy: 'Richard Carrier',
          answer: `Das stimmt, und ich würde Thallus nicht als sicheren Beweis verwenden. Seine Datierung ist umstritten, sein Werk ist verloren, und wir kennen nur Africanus' Zusammenfassung. Falls die Notiz zuverlässig ist, zeigt sie lediglich, dass ein heidnischer Autor die christliche Rede von einer Finsternis kannte und eine natürliche Erklärung suchte – nicht, dass er die Finsternis selbst bezeugte. Ehrlichkeit ist hier stärker als Übertreibung.`,
          followUps: [
            {
              id: 'phlegon-29',
              objection: `Und Phlegon von Tralles? Er berichtet von einer großen Sonnenfinsternis in der 202. Olympiade – aber die einzige echte totale Sonnenfinsternis in der Region war am 24. November 29 n. Chr.`,
              objectionBy: 'Richard Carrier',
              answer: `Das ist sehr wahrscheinlich richtig: Phlegon spricht von einer echten Sonnenfinsternis, bei der am Mittag Sterne sichtbar wurden, und von einem Erdbeben in Bithynien – das passt zur totalen Sonnenfinsternis vom November 29, die in Kleinasien sichtbar war. Die Väter (Origenes, Eusebius) haben das mit der Kreuzigung verbunden, was wohl ein Irrtum war. Ich verwende Phlegon deshalb nicht als Beleg.`,
              followUps: [
                {
                  id: 'kein-ausserbiblischer-beleg',
                  objection: `Also gibt es keinen einzigen außerbiblischen Beleg für die Finsternis.`,
                  objectionBy: 'Bart D. Ehrman',
                  answer: `Ja, einen sicheren unabhängigen Beleg gibt es nicht – das gebe ich offen zu. Aber das ist bei vielen Einzelheiten der antiken Geschichte so. Die Kreuzigung Jesu selbst ist durch Tacitus, Josephus und die Evangelien sehr gut bezeugt; die Finsternis ist ein Detail der Passionsüberlieferung, das wir auf das Zeugnis der Evangelien hin annehmen oder nicht. Der christliche Glaube hängt nicht an der Finsternis, sondern an dem, der in ihr starb und am dritten Tag auferstand.`,
                  sources: [{ kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: 'XV, 44', year: 'um 116', quote: `Der Urheber dieses Namens, Christus, war unter der Herrschaft des Tiberius vom Prokurator Pontius Pilatus hingerichtet worden.`, status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'apokalyptisches-motiv',
      objection: `Die Finsternis ist ein literarisches Motiv. Amos 8,9: „Ich will die Sonne am Mittag untergehen lassen." Auch beim Tod Caesars soll sich die Sonne verdunkelt haben (Vergil, Georgica I).`,
      objectionBy: 'Dale C. Allison Jr.',
      answer: `Die Finsternis trägt sicher die Bedeutung von Amos 8,9–10 – sogar die „Trauer wie über den einzigen Sohn" passt. Aber symbolische Bedeutung schließt Geschichtlichkeit nicht aus: Die Evangelien deuten auch die Kreuzigung selbst theologisch, und doch ist sie ein historisches Ereignis. Interessant ist übrigens das Caesar-Beispiel: Die Verdunkelung der Sonne nach 44 v. Chr. hatte nach heutiger Forschung eine reale Ursache – einen gewaltigen Vulkanausbruch des Okmok in Alaska 43 v. Chr., der das Klima im Mittelmeerraum verdunkelte und abkühlte.`,
      sources: [
        { kind: 'sonstiges', author: 'Vergil', work: 'Georgica', ref: 'I, 463–468', year: 'um 29 v. Chr.', quote: `Die Sonne habe beim Tod Caesars aus Mitleid mit Rom ihr strahlendes Haupt in düsteres Dunkel gehüllt.`, status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Joseph R. McConnell u. a.', work: '„Extreme climate after massive eruption of Alaska\'s Okmok volcano in 43 BCE and effects on the late Roman Republic and Ptolemaic Kingdom", Proceedings of the National Academy of Sciences 117', year: '2020', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'markus-theologie',
          objection: `Markus schreibt Theologie, nicht Geschichte. Die Stundenangaben – dritte, sechste, neunte Stunde – sind liturgische Gliederung.`,
          objectionBy: 'Dale C. Allison Jr.',
          answer: `Markus schreibt beides. Die Passionsgeschichte gehört nach Ansicht vieler Forscher zu den ältesten Überlieferungen der Evangelien, und sie enthält viele konkrete Einzelheiten – Simon von Kyrene, „der Vater des Alexander und Rufus" (Mk 15,21), die Frauen am Kreuz, Josef von Arimathäa. Die Stundenangaben können zugleich historische Erinnerung und Grundlage des Gebets sein. Dass die Kirche ihr Gebet danach ordnete, zeigt, wie früh diese Erinnerung festgehalten wurde.`,
          followUps: [
            {
              id: 'agpeya-zirkel',
              objection: `Dass eure Gebetszeiten auf diesen Stunden beruhen, beweist doch nichts – das ist ein Zirkelschluss.`,
              answer: `Als Beweis für die Finsternis taugt es nicht, da hast du recht. Es zeigt etwas anderes: Schon die *Traditio Apostolica* (frühes 3. Jahrhundert) begründete das Gebet zur sechsten Stunde ausdrücklich mit der Kreuzigung und der Finsternis. Die Erinnerung daran war also sehr früh fester Bestandteil des christlichen Lebens, nicht eine spätere Ausschmückung. Die koptische Agpeya bewahrt diese Gebetsordnung bis heute.`,
            },
          ],
        },
      ],
    },
    {
      id: 'humphreys-mondfinsternis',
      objection: `Und die Mondfinsternis-These von Humphreys? Schaefer hat gezeigt, dass sie in Jerusalem kaum zu sehen war.`,
      objectionBy: 'Bradley E. Schaefer',
      answer: `Das ist eine faire Kritik. Humphreys und Waddington (Nature 1983) haben eine partielle Mondfinsternis am Abend des 3. April 33 errechnet, die beim Mondaufgang bereits im Gang war; Schaefer (1990) argumentierte, dass sie wegen des tiefen Mondstands kaum auffiel. Selbst wenn sie sichtbar war, erklärt sie nicht die Finsternis am Mittag. Ich würde sie höchstens als möglichen Hinweis auf das Kreuzigungsjahr 33 und auf Apg 2,20 erwähnen, nicht als Beweis.`,
      followUps: [
        {
          id: 'joel-bildsprache',
          objection: `Petrus zitiert Joel – „Sonne in Finsternis, Mond in Blut". Das ist prophetische Bildsprache, kein Augenzeugenbericht.`,
          answer: `Das stimmt: Petrus zitiert eine Prophetie, er beschreibt nicht. Aber er sagt, sie erfülle sich „jetzt" (Apg 2,16), vor Zuhörern in Jerusalem, die sieben Wochen zuvor die Kreuzigung miterlebt hatten. Es ist möglich, dass er damit auf Zeichen anspielt, die sie selbst gesehen hatten – beweisen lässt sich das nicht. Ich würde es als Hinweis, nicht als Argument verwenden.`,
        },
      ],
    },
    {
      id: 'tertullian-archive',
      objection: `Tertullian behauptete, die Finsternis sei in den römischen Archiven verzeichnet. Und Dionysius Areopagita will sie in Heliopolis in Ägypten beobachtet haben. Christen haben also Belege erfunden.`,
      answer: `Tertullians Hinweis auf „eure Archive" (*Apologeticum* 21) ist rhetorisch und nicht nachprüfbar – ich würde ihn nicht verwenden. Die Briefe unter dem Namen des Dionysius Areopagita stammen aus der Zeit um 500 und sind pseudepigraphisch; auch sie taugen nicht als Zeugnis. Dass solche Überlieferungen entstanden, zeigt, wie sehr die Christen das Ereignis beschäftigte – aber eine gute Verteidigung des Glaubens braucht keine schwachen Belege.`,
      followUps: [
        {
          id: 'dionysius-tradition',
          objection: `Aber gehört die Heliopolis-Erzählung nicht zu eurer ägyptischen Tradition?`,
          answer: `Die Legende verbindet Dionysius mit Heliopolis, also mit Ägypten – aber sie stammt aus den pseudo-dionysischen Schriften, deren Verfasser sich als Paulusschüler aus Apg 17,34 ausgab, tatsächlich aber um 500 schrieb. Die koptische Kirche gründet ihr Bekenntnis nicht auf solche Erzählungen, sondern auf die Schrift und die Väter. Ehrlichkeit in solchen Fragen ist ein Teil unseres Zeugnisses.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du nachgeprüft, ob die Evangelien wirklich von einer Sonnen*finsternis* sprechen – oder nur von einer Finsternis?`,
    `Wusstest du, dass Christen schon im 3. Jahrhundert genau dein Vollmond-Argument gegen eine natürliche Erklärung verwendeten?`,
    `Warum sollte eine regionale Verdunkelung über Judäa in Rom verzeichnet worden sein?`,
    `Schließt du Zeichen Gottes grundsätzlich aus – und wenn ja, ist das ein historisches oder ein weltanschauliches Urteil?`,
  ],
  avoid: [
    `Behaupten, es habe eine natürliche Sonnenfinsternis gegeben – das ist astronomisch unmöglich.`,
    `Thallus und Phlegon als sichere unabhängige Zeugen der Finsternis anführen.`,
    `Tertullians „römische Archive" oder die Heliopolis-Legende des Pseudo-Dionysius als Beleg verwenden.`,
    `Die Mondfinsternis-Hypothese von Humphreys als Beweis darstellen.`,
  ],
  concessions: [
    `Es gibt keinen sicheren außerbiblischen Beleg für die Finsternis bei der Kreuzigung.`,
    `Die Väter haben Phlegons Bericht vermutlich irrtümlich auf die Kreuzigung bezogen.`,
    `Die Finsternis hat in den Evangelien eine starke symbolische Bedeutung; manche gläubige Exegeten deuten sie vor allem symbolisch.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Colin J. Humphreys', work: 'The Mystery of the Last Supper: Reconstructing the Final Days of Jesus', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah', ref: 'Bd. 2', year: '1994', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard Carrier', work: '„Thallus and the Darkness at Christ\'s Death", JGRChJ 8', year: '2011–2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Robert E. Van Voorst', work: 'Jesus Outside the New Testament', year: '2000', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kreuzigung', 'Finsternis', 'Sonnenfinsternis', 'Thallus', 'Phlegon', 'Julius Africanus', 'Textkritik'],
  related: [
    'historischer-jesus/ausserbiblische-quellen-gefaelscht',
    'neues-testament/evangelien-widersprechen-sich',
    'physik/wunder-verletzen-naturgesetze',
    'auferstehung/wunder-historisch-unmoeglich',
    'bibel-naturkunde/stern-von-betlehem',
  ],
};

export default claim;
