import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'stern-von-betlehem',
  title: `„Der Stern von Betlehem ist ein Mythos."`,
  proponents: [
    { name: 'Aaron Adair', role: 'Physiker und Autor', work: 'The Star of Bethlehem: A Skeptical View (2013)' },
    { name: 'Geza Vermes', role: 'Judaist, Oxford', work: 'The Nativity: History and Legend (2006)' },
    { name: 'Raymond E. Brown', role: 'Katholischer Neutestamentler', work: 'The Birth of the Messiah (1977, erw. 1993)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus, Interrupted (2009)' },
  ],
  steelman: `Kein Himmelskörper kann tun, was Matthäus beschreibt: Ein Stern führt die Magier von Jerusalem nach Betlehem, geht „vor ihnen hin" und bleibt „oben über dem Haus" stehen, in dem das Kind ist (Mt 2,9). Planeten, Kometen und Novae bewegen sich mit dem Himmel von Ost nach West; keiner zeigt auf ein einzelnes Haus. Die vielen „wissenschaftlichen" Erklärungen – Keplers Jupiter-Saturn-Konjunktion, ein Komet, eine Nova, eine Bedeckung des Jupiter durch den Mond – widersprechen sich und passen alle nicht zum Text. Viel einfacher ist die literarische Erklärung: Matthäus hat die Szene aus der Bileam-Weissagung „Es wird ein Stern aus Jakob aufgehen" (Num 24,17) und Jes 60 („Die Heiden werden in deinem Licht wandeln … aus Saba werden sie alle kommen, Gold und Weihrauch bringen") komponiert. Astrologen aus dem Osten, die einem Stern folgen, sind ein typisches Legendenmotiv für die Geburt großer Herrscher. Der Kindermord des Herodes wird von Josephus, der Herodes' Gräueltaten ausführlich schildert, nicht erwähnt. Und Lukas weiß nichts von Stern, Magiern und Flucht nach Ägypten. Der Stern ist Theologie in Erzählform, kein historisches Ereignis.`,
  biblical: {
    summary: `Matthäus berichtet, dass Magier (*magoi*, persisch-babylonische Sterndeuter) „im Aufgang" (*en tē anatolē*) seinen Stern sahen und nach Jerusalem kamen, um den neugeborenen König der Juden anzubeten (Mt 2,1–2). Herodes muss sie erst fragen, wann der Stern erschienen sei (Mt 2,7) – der Stern war also für andere nicht auffällig. Auf dem Weg nach Betlehem, das südlich von Jerusalem liegt, „ging der Stern vor ihnen hin, bis daß er kam und stand oben über, da das Kindlein war" (Mt 2,9). Matthäus beschreibt damit **ein außergewöhnliches Zeichen Gottes** – ob ein natürliches Himmelsphänomen, das Gott als Zeichen gebrauchte, oder eine übernatürliche Erscheinung, lässt der Text offen. Bemerkenswert: Matthäus zitiert im Kapitel ausdrücklich Micha 5,1 und Hosea 11,1, **nicht** aber Num 24,17 – seltsam, wenn er die Szene daraus erfunden hätte.`,
    detail: `**„Im Aufgang".** Die Wendung *en tē anatolē* kann „im Osten" bedeuten, in der astronomischen Fachsprache aber auch den heliakischen Aufgang eines Gestirns – sein erstes Erscheinen am Morgenhimmel. Das passt zu Sterndeutern.

**„Stand oben über".** Auf dem Weg von Jerusalem nach Betlehem geht man nach Süden. Ein Himmelsobjekt, das am Südhimmel stand, „ging vor ihnen her". Dass es „über dem Ort" stand, kann phänomenologisch gemeint sein (es stand über der Richtung, in der Betlehem lag) – oder ein Wunderzeichen beschreiben. Johannes Chrysostomus hielt die zweite Deutung für zwingend.

**Die Freude der Magier.** „Da sie den Stern sahen, wurden sie hoch erfreut" (Mt 2,10) – das klingt nach einem Wiedererscheinen, nicht nach einer ständigen Begleitung.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '2,2', quote: `Wo ist der neugeborene König der Juden? Wir haben seinen Stern gesehen im Morgenland und sind gekommen, ihn anzubeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '2,7', quote: `Da berief Herodes die Weisen heimlich und erlernte mit Fleiß von ihnen, wann der Stern erschienen wäre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '2,9–10', quote: `Und siehe, der Stern, den sie im Morgenland gesehen hatten, ging vor ihnen hin, bis daß er kam und stand oben über, da das Kindlein war. Da sie den Stern sahen, wurden sie hoch erfreut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Numeri', ref: '24,17', quote: `Es wird ein Stern aus Jakob aufgehen und ein Zepter aus Israel aufkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Micha', ref: '5,1', quote: `Und du, Bethlehem Ephrata, die du klein bist unter den Tausenden in Juda, aus dir soll mir der kommen, der in Israel Herr sei.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter deuteten den Stern unterschiedlich – und gerade das ist lehrreich. Origenes hielt ihn für einen neuen Stern, den Kometen ähnlich, wie sie bei großen Ereignissen erscheinen (*Contra Celsum* I,58–59). Johannes Chrysostomus dagegen argumentierte, er sei kein gewöhnlicher Stern gewesen, sondern eine unsichtbare Macht in Sterngestalt, weil er von Norden nach Süden zog, bei Tag leuchtete, sich zeigte und verbarg und über einem Haus stehen blieb (Hom. in Mt 6). Ignatius von Antiochien beschreibt um 110 einen Stern, der alle Sterne überstrahlte und dessen Erscheinen die Macht der Magie brach (*An die Epheser* 19). Für die koptische Kirche, die am 29. Kiahk das Geburtsfest feiert, ist entscheidend: Gott ruft die Heiden durch die Sprache, die sie verstehen – die Sterndeuter durch einen Stern –, und führt sie zu Christus, vor dem alle Sterndeuterei endet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I, 58–60', year: 'um 248', quote: `Der Stern, der im Osten erschien, war nach unserer Auffassung ein neuer Stern, keinem der bekannten gleich, von der Art der Kometen, wie sie bei großen Ereignissen und Herrscherwechseln erscheinen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Hom. 6, 2–3', year: 'um 390', quote: `Dieser Stern war keiner von den vielen, ja überhaupt kein Stern, sondern eine unsichtbare Kraft, die die Gestalt eines Sterns annahm; denn er zog von Norden nach Süden, leuchtete am hellen Tag, erschien und verbarg sich und blieb über dem Ort stehen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '19, 2–3', year: 'um 110', quote: `Ein Stern strahlte am Himmel auf, heller als alle Sterne; daraufhin wurde alle Zauberei aufgelöst.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der historisch-kritischen Forschung gelten die Kindheitsgeschichten bei Matthäus und Lukas vielen als stark theologisch geformt; Raymond Brown hielt die Historizität des Sterns für wenig wahrscheinlich, ohne sie auszuschließen. Astronomen haben dennoch seit Kepler nach einem realen Ereignis gesucht. Die wichtigsten Kandidaten: die dreifache Konjunktion von Jupiter und Saturn im Sternbild Fische 7 v. Chr. (Kepler), die Ansammlung von Jupiter, Saturn und Mars 6 v. Chr., ein in chinesischen Chroniken für 5 v. Chr. verzeichnetes neues Himmelsobjekt, das etwa 70 Tage sichtbar war (Colin Humphreys deutet es als Komet, andere als Nova), sowie die Bedeckung des Jupiter durch den Mond im Sternbild Widder am 17. April 6 v. Chr. (Michael Molnar). Keiner dieser Kandidaten ist allgemein anerkannt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Colin J. Humphreys', work: '„The Star of Bethlehem – a Comet in 5 BC – and the Date of the Birth of Christ", Quarterly Journal of the Royal Astronomical Society 32', ref: 'S. 389–407', year: '1991', quote: `Humphreys schlägt eine Abfolge vor: die dreifache Jupiter-Saturn-Konjunktion 7 v. Chr., die Planetenansammlung 6 v. Chr. und einen in chinesischen Quellen bezeugten Kometen 5 v. Chr.; die Geburt Jesu datiert er zwischen März und Mai 5 v. Chr.`, status: 'paraphrase', url: 'https://ui.adsabs.harvard.edu/abs/1991QJRAS..32..389H/abstract' },
      { kind: 'wissenschaft', author: 'Michael R. Molnar', work: 'The Star of Bethlehem: The Legacy of the Magi', year: '1999', status: 'paraphrase' },
      { kind: 'gegner', author: 'Aaron Adair', work: 'The Star of Bethlehem: A Skeptical View', year: '2013', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Birth of the Messiah', year: '1977, erw. 1993', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Matthäus beschreibt kein gewöhnliches astronomisches Ereignis, sondern ein Zeichen Gottes – schon die Kirchenväter waren sich uneinig, ob es ein natürlicher „neuer Stern" war (Origenes) oder eine übernatürliche Erscheinung (Chrysostomus). Die Zeit um 7–5 v. Chr. war astronomisch auffallend reich: Keplers Jupiter-Saturn-Konjunktion, ein in China verzeichnetes neues Himmelsobjekt, eine Bedeckung des Jupiter. Dass Herodes die Magier erst fragen musste, wann der Stern erschien (Mt 2,7), passt gut zu einem Zeichen, das nur Kenner bemerkten. Und wenn es einen Gott gibt, der Mensch wird, ist ein Zeichen am Himmel nicht unglaubwürdiger als jede andere Tat Gottes.`,
  keyPoints: [
    `**Zeichen, nicht Fahrplan:** Matthäus beschreibt ein außergewöhnliches Zeichen; ob natürlich oder übernatürlich, lässt der Text offen – schon die Väter waren uneins.`,
    `**Kandidaten gibt es:** Jupiter-Saturn-Konjunktion 7 v. Chr. (Kepler), Objekt in chinesischen Chroniken 5 v. Chr. (Humphreys), Jupiterbedeckung 6 v. Chr. (Molnar).`,
    `**Nur für Kenner auffällig:** Herodes musste nach dem Zeitpunkt fragen (Mt 2,7) – das passt zu einer astrologisch bedeutsamen, aber unspektakulären Konstellation.`,
    `**Keine Konstruktion aus Num 24,17:** Matthäus zitiert den Vers nicht; Jes 60 erwähnt Kamele und Könige – Matthäus beides nicht.`,
    `**Magier, die einem König huldigen, sind historisch plausibel:** 66 n. Chr. reiste der armenische König Tiridates mit Magiern nach Rom, um Nero zu huldigen.`,
    `**Herodes' Charakter passt:** Er ließ Frau, Söhne und Rivalen töten; die Ermordung weniger Kinder in einem Dorf wäre für Josephus kaum erwähnenswert.`,
  ],
  voices: [
    {
      person: 'kepler',
      role: 'als Astronom',
      text: `Johannes Kepler beobachtete 1603 eine Konjunktion von Jupiter und Saturn und 1604 eine Supernova („Keplers Stern"). Er rechnete zurück und fand, dass es im Jahr 7 v. Chr. eine dreifache Konjunktion von Jupiter und Saturn im Sternbild Fische gab. In *De stella nova* (1606) und späteren Schriften schlug er vor, dass der Stern von Betlehem mit dieser Konjunktion zusammenhängen könnte – wobei Kepler selbst an einen zusätzlichen neuen Stern dachte, ähnlich der Nova von 1604. Kepler, Begründer der modernen Planetengesetze, hielt die Frage für ernsthafter wissenschaftlicher Untersuchung würdig.`,
      sources: [{ kind: 'wissenschaft', author: 'Johannes Kepler', work: 'De stella nova in pede Serpentarii', year: '1606', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Apologet gegen Kelsos',
      text: `Origenes antwortet dem heidnischen Philosophen Kelsos, der die Magiergeschichte verspottete. Er argumentiert, der Stern sei ein neuer Stern gewesen, ähnlich den Kometen, die nach antiker Überlieferung beim Wechsel von Herrschern und bei großen Ereignissen erscheinen; er beruft sich dafür auf das Kometenbuch des Stoikers Chairemon. Für die Geburt dessen, der die Menschheit erneuern sollte, sei ein solches Zeichen angemessen. Origenes wird in der koptischen Kirche nicht als Heiliger verehrt, seine apologetischen Werke bleiben wertvoll.`,
      sources: [{ kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I, 58–59', year: 'um 248', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Ausleger des Matthäusevangeliums',
      text: `Chrysostomus nimmt den Text genau: Der Stern zog von Persien aus nach Westen und dann von Jerusalem nach Süden, leuchtete auch am Tag, verschwand in Jerusalem und erschien wieder, und blieb über einem einzelnen Ort stehen. Kein Gestirn verhalte sich so. Daraus folgert er, es sei eine göttliche Kraft in Gestalt eines Sterns gewesen. Zugleich erklärt er, warum Gott gerade Sterndeuter auf diese Weise rief: Er führte sie durch das, womit sie vertraut waren, und hob ihre Kunst damit auf, denn sie beteten vor dem Kind an.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Hom. 6–7', year: 'um 390', status: 'paraphrase' }],
    },
    {
      person: 'colin-humphreys',
      role: 'als Physiker in Cambridge',
      text: `Der Materialwissenschaftler Colin Humphreys hat 1991 im *Quarterly Journal of the Royal Astronomical Society* eine detaillierte Hypothese vorgelegt: Die Jupiter-Saturn-Konjunktion 7 v. Chr. und die Planetenansammlung 6 v. Chr. hätten die Magier auf ein Ereignis in Juda aufmerksam gemacht; ein Komet, der in chinesischen Chroniken für das Frühjahr 5 v. Chr. als „Besenstern" verzeichnet ist und etwa 70 Tage sichtbar war, habe sie dann aufbrechen lassen. Ein Komet mit senkrecht stehendem Schweif könne den Eindruck erwecken, er „stehe über" einem Ort. Die Deutung des chinesischen Objekts als Komet ist umstritten.`,
      sources: [{ kind: 'wissenschaft', author: 'Colin J. Humphreys', work: '„The Star of Bethlehem – a Comet in 5 BC", QJRAS 32', ref: 'S. 389–407', year: '1991', status: 'paraphrase' }],
    },
    {
      person: 'keener',
      role: 'als Neutestamentler',
      text: `Craig Keener zeigt in seinem Matthäuskommentar, dass die Erzählung gut in ihre Zeit passt: Magier aus dem Osten galten als Experten für Himmelszeichen; die Erwartung eines Weltherrschers aus Judäa ist auch bei Tacitus und Sueton bezeugt; und Herodes' Grausamkeit gegenüber jeder vermeintlichen Bedrohung seines Throns ist bei Josephus reich belegt. Die Geschichte trägt theologische Bedeutung, ohne deshalb unhistorisch zu sein.`,
      sources: [{ kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of Matthew: A Socio-Rhetorical Commentary', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'sterne-wandern-nicht',
      objection: `Kein Stern kann vor jemandem herziehen und über einem einzelnen Haus stehen bleiben (Mt 2,9). Das ist physikalisch unmöglich.`,
      objectionBy: 'Aaron Adair',
      answer: `Für einen gewöhnlichen Fixstern hast du recht – darum sagte schon Johannes Chrysostomus im 4. Jahrhundert, dieser Stern sei keiner der gewöhnlichen gewesen. Es gibt zwei vernünftige Lesarten: Entweder beschreibt Matthäus aus der Sicht der Reisenden ein Himmelsobjekt am Südhimmel, das auf dem Weg nach Betlehem (südlich von Jerusalem) „vor ihnen her" ging; oder er beschreibt ein übernatürliches Zeichen. In beiden Fällen ist das kein Widerspruch zur Physik, sondern eine Frage, ob Gott handeln kann.`,
      followUps: [
        {
          id: 'wunder-ausrede',
          objection: `Wenn es nicht passt, ist es eben ein Wunder. Damit wird jede Geschichte unwiderlegbar.`,
          objectionBy: 'Aaron Adair',
          answer: `Ich sage nicht: „Es ist ein Wunder, also ist es wahr." Ich sage: Wenn es einen Gott gibt, der Mensch wird, dann ist ein Zeichen bei seiner Geburt nicht von vornherein unmöglich. Ob es geschah, entscheidet die historische Prüfung des Berichts – und da passen viele Einzelheiten gut in die Zeit: Magier als Sterndeuter, Herodes' Paranoia, die Messiaserwartung. Wer Wunder von vornherein ausschließt, hat die Frage nicht historisch, sondern weltanschaulich entschieden.`,
          followUps: [
            {
              id: 'kindermord-josephus',
              objection: `Den Kindermord in Betlehem erwähnt Josephus nicht – obwohl er alle Gräueltaten des Herodes genau beschreibt.`,
              objectionBy: 'Geza Vermes',
              answer: `Betlehem war ein Dorf; Schätzungen gehen von wenigen, vielleicht zehn bis zwanzig Jungen unter zwei Jahren aus. Herodes ließ seine Frau Mariamne, drei eigene Söhne und viele Adlige töten und soll nach Josephus angeordnet haben, bei seinem Tod angesehene Männer hinzurichten, damit das Land trauere. Gemessen daran wäre ein Massaker in einem kleinen Dorf für Josephus kaum erwähnenswert. Das Schweigen einer Quelle beweist nicht, dass etwas nicht geschah.`,
              sources: [{ kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: 'XVII, 174–179', year: 'um 93/94', quote: `Herodes lässt vor seinem Tod angesehene Juden im Hippodrom von Jericho einsperren und befiehlt, sie bei seinem Tod zu töten, damit das Land weine.`, status: 'paraphrase' }],
              followUps: [
                {
                  id: 'macrobius',
                  objection: `Christen zitieren gern Macrobius' Witz des Augustus, es sei besser, Herodes' Schwein zu sein als sein Sohn – aber das ist um 400 n. Chr. geschrieben und von der christlichen Geschichte beeinflusst.`,
                  answer: `Da stimme ich dir zu: Macrobius (*Saturnalia* II,4,11) schreibt um 400 und verbindet den Witz mit der Tötung von Kindern unter zwei Jahren – das könnte bereits vom Matthäusevangelium beeinflusst sein. Ich würde ihn nicht als unabhängigen Beleg verwenden. Der Witz selbst zeigt nur, was ohnehin bekannt ist: Herodes tötete seine eigenen Söhne. Die Plausibilität des Berichts ruht auf Herodes' gut belegtem Charakter, nicht auf Macrobius.`,
                  sources: [{ kind: 'sonstiges', author: 'Macrobius', work: 'Saturnalia', ref: 'II, 4, 11', year: 'um 400', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aus-num24-konstruiert',
      objection: `Matthäus hat die Szene aus Num 24,17 („Ein Stern geht auf aus Jakob") und Jes 60 („Könige … bringen Gold und Weihrauch") komponiert. Das ist Midrasch, keine Geschichte.`,
      objectionBy: 'Raymond E. Brown',
      answer: `Merkwürdig ist dann, was fehlt: Matthäus, der sonst jede Erfüllung ausdrücklich zitiert, zitiert Num 24,17 gerade nicht. Jes 60 spricht von Königen und Kamelen – Matthäus erwähnt weder Könige noch Kamele (die kamen erst durch spätere Auslegung in die Krippenspiele). Eine Erzählung, die ein Schriftwort erfinden will, nennt dieses Schriftwort. Wahrscheinlicher ist, dass Matthäus ein überliefertes Ereignis erzählt, dessen Bezug zu den Prophetien die Leser selbst erkennen sollten.`,
      followUps: [
        {
          id: 'magier-legendenmotiv',
          objection: `Sterndeuter aus dem Osten, die einem neugeborenen König huldigen, sind ein typisches Legendenmotiv.`,
          objectionBy: 'Geza Vermes',
          answer: `Es ist auch ein historisch belegtes Verhalten: Im Jahr 66 n. Chr. reiste der armenische König Tiridates mit einem Gefolge von Magiern nach Rom, um Nero als seinen Herrn zu huldigen; Plinius der Ältere und Cassius Dio berichten davon. Dass Magier sich auf Grund von Himmelszeichen auf den Weg machten, um einen König zu ehren, entsprach also der Welt des 1. Jahrhunderts. Römische Historiker wie Tacitus und Sueton bezeugen zudem eine verbreitete Erwartung, aus Judäa werde ein Weltherrscher kommen.`,
          sources: [
            { kind: 'sonstiges', author: 'Plinius der Ältere', work: 'Naturalis historia', ref: 'XXX, 16–17', year: 'um 77', quote: `Plinius erwähnt den Magier Tiridates, der zu Nero kam und ihn in die Mahlzeiten der Magier einführte.`, status: 'paraphrase' },
            { kind: 'sonstiges', author: 'Sueton', work: 'Vespasian', ref: '4, 5', year: 'um 120', quote: `Im ganzen Orient habe sich eine alte, feste Meinung verbreitet, es sei bestimmt, dass zu dieser Zeit Männer aus Judäa die Weltherrschaft erlangen würden.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'astrologie-verboten',
              objection: `Die Bibel verbietet Astrologie. Warum sollte Gott ausgerechnet Astrologen durch einen Stern führen?`,
              answer: `Weil Gott Menschen dort abholt, wo sie stehen – das war schon die Antwort des Chrysostomus. Matthäus empfiehlt die Astrologie nicht: Der Stern führt die Magier nicht zu einem Horoskop, sondern zu Christus, vor dem sie niederfallen und anbeten. Ignatius von Antiochien schrieb um 110, mit dem Erscheinen dieses Sterns sei die Macht der Magie zerbrochen. Die Geschichte ist eine Überwindung der Astrologie, nicht ihre Bestätigung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'erklaerungen-widersprechen',
      objection: `Christen erklären den Stern mal als Konjunktion, mal als Komet, mal als Nova, mal als Jupiterbedeckung. Das zeigt nur, dass niemand es weiß.`,
      objectionBy: 'Aaron Adair',
      answer: `Richtig – niemand weiß es sicher, und das sollten wir offen sagen. Aber die Vielzahl der Kandidaten zeigt auch: Die Jahre um 7–5 v. Chr. waren astronomisch ungewöhnlich ereignisreich, und für babylonische Sterndeuter gab es mehrere Konstellationen, die sie auf die Geburt eines Königs in Juda deuten konnten. Vor allem hängt die Glaubwürdigkeit des Berichts nicht an der Identifizierung: Auch wer eine übernatürliche Erscheinung annimmt, wie Chrysostomus, muss kein Astronom sein.`,
      followUps: [
        {
          id: 'kometen-unheil',
          objection: `Kometen galten in der Antike als Unglückszeichen. Kein Sterndeuter hätte einen Kometen als Geburt eines Königs gedeutet.`,
          objectionBy: 'Aaron Adair',
          answer: `Nicht ausschließlich: Der Komet nach Caesars Ermordung 44 v. Chr. (*sidus Iulium*) wurde von Augustus als Zeichen der Vergöttlichung Caesars und des Beginns einer neuen Zeit gedeutet und auf Münzen geprägt. Origenes schrieb, Kometen erschienen bei großen Ereignissen und Herrscherwechseln – im Guten wie im Schlechten. Die Deutung hing vom Kontext ab, besonders vom Sternbild, in dem das Objekt erschien.`,
          followUps: [
            {
              id: 'chinesische-quellen-unsicher',
              objection: `Die chinesischen Aufzeichnungen sind unsicher – Komet oder Nova? Und die Datierung ist umstritten.`,
              answer: `Das stimmt, und ich würde Humphreys' Hypothese nicht als bewiesen darstellen. Die Notiz in der Geschichte der Han-Dynastie ist knapp, und Fachleute streiten über die Deutung. Sie zeigt aber, dass es in diesem Zeitraum ein auffälliges neues Himmelsobjekt gab. Für die Frage der Historizität genügt das nicht als Beweis – es zeigt nur, dass die Geschichte nicht gegen die astronomischen Möglichkeiten der Zeit verstößt.`,
            },
          ],
        },
        {
          id: 'kepler-astrologe',
          objection: `Kepler war doch selbst Astrologe – kein seriöser Zeuge.`,
          answer: `Kepler erstellte Horoskope, weil es damals zum Beruf eines Hofmathematikers gehörte, und stand der Astrologie kritisch gegenüber. Vor allem entdeckte er die Gesetze der Planetenbewegung, auf denen die moderne Astronomie beruht. Seine Berechnung der Konjunktion von 7 v. Chr. ist astronomisch korrekt und wird von heutigen Programmen bestätigt; nur ihre Deutung als „Stern" ist offen.`,
        },
      ],
    },
    {
      id: 'datum-widerspricht-lukas',
      objection: `Matthäus datiert Jesu Geburt unter Herodes, also vor 4 v. Chr.; Lukas verbindet sie mit dem Zensus des Quirinius, der nach Josephus 6 n. Chr. stattfand. Die Geburtsgeschichten widersprechen sich.`,
      objectionBy: 'Bart D. Ehrman',
      answer: `Das ist eine bekannte, ernsthafte Schwierigkeit, und ich will sie nicht kleinreden. Es gibt Lösungsvorschläge – etwa dass Lk 2,2 einen Zensus „vor" dem des Quirinius meint oder dass Quirinius schon früher eine Rolle in Syrien hatte –, aber keiner ist allgemein anerkannt. Wichtiger ist: Matthäus und Lukas erzählen unabhängig voneinander und stimmen in Kernpunkten überein – Geburt in Betlehem, zur Zeit des Herodes (Lk 1,5), Jungfrauengeburt, Aufwachsen in Nazareth.`,
      followUps: [
        {
          id: 'betlehem-erfunden',
          objection: `Betlehem ist erfunden, um die Micha-Prophetie zu erfüllen. Jesus stammte aus Nazareth.`,
          objectionBy: 'Geza Vermes',
          answer: `Zwei voneinander unabhängige Evangelien bezeugen Betlehem, mit ganz unterschiedlichen Erzählungen, wie die Familie dorthin bzw. von dort nach Nazareth kam. Johannes setzt die Spannung sogar ironisch voraus: Die Gegner sagen, der Messias müsse aus Betlehem kommen – und wissen nicht, dass Jesus von dort stammt (Joh 7,42). Schon im 2. Jahrhundert wurde in Betlehem eine Höhle als Geburtsort gezeigt, wie Justin und Origenes berichten.`,
          sources: [
            { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '78', year: 'um 160', status: 'paraphrase' },
            { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'I, 51', year: 'um 248', quote: `In Betlehem zeigt man die Höhle, in der er geboren wurde, und in der Höhle die Krippe; das ist an jenem Ort weithin bekannt, auch bei den Nichtgläubigen.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'geburtsjahr-egal',
              objection: `Und warum feiert ihr dann Weihnachten an einem Datum, das niemand kennt?`,
              answer: `Das Geburtsfest ist ein Fest des Ereignisses, nicht ein historisch gesichertes Datum – das hat die Kirche nie anders behauptet. Die koptische Kirche feiert es am 29. Kiahk (meist am 7. Januar nach dem gregorianischen Kalender). Das genaue Jahr und den Tag kennen wir nicht; dass Jesus um 6–4 v. Chr. unter Herodes geboren wurde, ist dagegen in der Forschung weithin akzeptiert.`,
            },
          ],
        },
      ],
    },
    {
      id: 'warum-nur-magier',
      objection: `Wenn ein spektakulärer Stern am Himmel stand, warum sahen ihn nur die Magier – und nicht die Astronomen des Herodes oder die Römer?`,
      answer: `Gerade das sagt der Text selbst: Herodes musste die Magier fragen, wann der Stern erschienen war (Mt 2,7) – er hatte nichts bemerkt. Matthäus beschreibt also kein grelles Himmelsspektakel, sondern ein Zeichen, dessen Bedeutung nur Kenner erfassten. Das passt zu einer Planetenkonstellation, deren astrologischen Sinn nur Sterndeuter verstanden – oder zu einem Zeichen, das Gott bestimmten Menschen gab.`,
      followUps: [
        {
          id: 'dann-unbeweisbar',
          objection: `Dann war es so unauffällig, dass es historisch nicht nachweisbar ist. Also bleibt es unbeweisbar.`,
          answer: `Viele Ereignisse der Antike sind nur durch eine einzige Quelle bezeugt, und Historiker halten sie dennoch für wahrscheinlich, wenn die Quelle sonst zuverlässig ist und der Bericht zu den bekannten Umständen passt. Den Stern selbst können wir nicht beweisen – aber wir können zeigen, dass er weder astronomisch noch historisch unmöglich ist. Für den christlichen Glauben ist der Stern nicht das Fundament; das Fundament ist der Gekreuzigte und Auferstandene. Der Stern weist nur auf ihn hin.`,
          questionsBack: [`Welche anderen antiken Ereignisse lehnst du ab, weil sie nur in einer Quelle bezeugt sind?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Matthäus die Szene aus Num 24,17 erfunden hat – warum zitiert er den Vers dann nicht, wie er es sonst tut?`,
    `Hältst du übernatürliche Zeichen grundsätzlich für unmöglich – oder nur in diesem Fall für unbelegt?`,
    `Warum musste Herodes die Magier fragen, wann der Stern erschienen war, wenn er so auffällig gewesen sein soll?`,
    `Ist das Schweigen des Josephus über ein Dorf mit wenigen Kindern wirklich ein starkes Argument?`,
  ],
  avoid: [
    `Eine bestimmte astronomische Erklärung (Konjunktion, Komet, Supernova) als „bewiesen" darstellen.`,
    `Behaupten, die „Heiligen Drei Könige" seien Könige gewesen oder es seien sicher drei gewesen – der Text sagt weder das eine noch das andere.`,
    `Macrobius als unabhängigen Beleg für den Kindermord anführen.`,
    `Die Datierungsprobleme (Herodes/Quirinius) verschweigen.`,
  ],
  concessions: [
    `Es gibt keinen außerbiblischen Beleg für den Stern oder den Kindermord in Betlehem.`,
    `Die zeitliche Einordnung des Zensus des Quirinius bei Lukas ist eine ungelöste Schwierigkeit.`,
    `Viele seriöse Neutestamentler, auch gläubige wie Raymond Brown, halten die Kindheitsgeschichten für stark theologisch gestaltet.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Colin J. Humphreys', work: '„The Star of Bethlehem – a Comet in 5 BC", QJRAS 32', year: '1991', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Michael R. Molnar', work: 'The Star of Bethlehem: The Legacy of the Magi', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'The Gospel of Matthew: A Socio-Rhetorical Commentary', year: '2009', status: 'paraphrase' },
    { kind: 'gegner', author: 'Aaron Adair', work: 'The Star of Bethlehem: A Skeptical View', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Stern von Betlehem', 'Magier', 'Kepler', 'Konjunktion', 'Komet', 'Kindheitsgeschichte', 'Herodes'],
  related: [
    'neues-testament/evangelien-widersprechen-sich',
    'antike-parallelen/jungfrauengeburt-heidnisch',
    'physik/wunder-verletzen-naturgesetze',
    'prophetie/jesus-inszenierte-erfuellung',
    'historischer-jesus/jesus-hat-nie-existiert',
  ],
};

export default claim;
