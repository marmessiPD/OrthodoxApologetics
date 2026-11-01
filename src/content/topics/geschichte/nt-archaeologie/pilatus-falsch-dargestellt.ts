import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'pilatus-falsch-dargestellt',
  title: `„Die Evangelien stellen Pilatus falsch dar."`,
  proponents: [
    { name: 'S. G. F. Brandon', role: 'Religionshistoriker, Manchester (†1971)', work: 'Jesus and the Zealots (1967)' },
    { name: 'Paul Winter', role: 'Jüdischer Historiker (†1969)', work: 'On the Trial of Jesus (1961)' },
    { name: 'John Dominic Crossan', role: 'Neutestamentler, Jesus Seminar', work: 'Who Killed Jesus? (1995)' },
    { name: 'Reza Aslan', role: 'Religionswissenschaftler, Publizist', work: 'Zealot. The Life and Times of Jesus of Nazareth (2013)' },
  ],
  steelman: `Philo von Alexandrien und Flavius Josephus – beide Zeitgenossen bzw. Beinahe-Zeitgenossen – zeichnen Pontius Pilatus als harten, unbeugsamen und grausamen Präfekten: Er provozierte die Juden mit Kaiserbildern und Weiheschilden in Jerusalem, finanzierte eine Wasserleitung aus dem Tempelschatz und ließ protestierende Menschen niederknüppeln, er richtete Menschen ohne Prozess hin und wurde schließlich nach einem Massaker an Samaritanern abberufen. In den Evangelien dagegen erscheint ein schwankender, fast gutmütiger Beamter, der dreimal Jesu Unschuld feststellt, ihn freilassen will, sich die Hände in Unschuld wäscht und schließlich nur dem Druck der jüdischen Menge nachgibt. Die Erklärung liegt auf der Hand: Die Christen wollten im Römischen Reich nicht als Anhänger eines von Rom hingerichteten Aufrührers dastehen und schoben die Schuld den Juden zu. Diese Verzerrung hat eine furchtbare Wirkungsgeschichte gehabt – und sie setzt sich fort, bis Pilatus in der äthiopischen Kirche sogar als Heiliger verehrt wird.`,
  biblical: {
    summary: `Die Evangelien entlasten Pilatus nicht – sie belasten ihn sogar schwerer: Er erkennt die Unschuld Jesu und lässt ihn trotzdem geißeln und kreuzigen. Lukas berichtet von Galiläern, „deren Blut Pilatus mit ihren Opfern vermischt hatte" (Lk 13,1); Johannes zeigt einen Machtmenschen („Weißt du nicht, dass ich Macht habe, dich zu kreuzigen?", Joh 19,10), der sich am Ende aus Furcht um seine Stellung beugt („Lässt du diesen los, so bist du des Kaisers Freund nicht", Joh 19,12). Das Glaubensbekenntnis, das jeder Kopte betet, nennt ihn als Verantwortlichen: „gekreuzigt für uns unter Pontius Pilatus".`,
    detail: `**Pilatus in den Evangelien – kein Heiliger:**
- Er lässt einen Unschuldigen geißeln (Mk 15,15; Joh 19,1) und überlässt ihn der Kreuzigung, um „dem Volk genugzutun" (Mk 15,15).
- Er spottet über die Juden mit der Kreuzesinschrift „König der Juden" und weigert sich, sie zu ändern (Joh 19,19–22).
- Lukas notiert seine zynische Freundschaft mit Herodes Antipas (Lk 23,12) und sein Massaker an Galiläern (Lk 13,1).

**Verantwortung nach dem Neuen Testament:** Die Apostelgeschichte nennt Herodes, Pilatus, „die Heiden und das Volk Israel" gemeinsam (Apg 4,27). Theologisch starb Christus für die Sünden aller Menschen – alle sind beteiligt, niemand kann sich auf Kosten anderer entlasten.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '13,1', quote: `Es waren aber zu derselben Zeit etliche dabei, die verkündigten ihm von den Galiläern, deren Blut Pilatus samt ihrem Opfer vermischt hatte.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '19,12', quote: `Von da an trachtete Pilatus, wie er ihn losließe. Die Juden aber schrieen und sprachen: Läßt du diesen los, so bist du des Kaisers Freund nicht; denn wer sich zum König macht, der ist wider den Kaiser.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,27', quote: `Herodes und Pontius Pilatus mit den Heiden und dem Volk Israel haben sich versammelt wider dein heiliges Kind Jesus.`, status: 'paraphrase' },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `… der für uns gekreuzigt wurde unter Pontius Pilatus, gelitten hat und begraben wurde …`, status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Pilatus ist historisch gut bezeugt: durch Philo (Legatio ad Gaium 299–305), Josephus (Ant. 18,55–62.85–89; Bellum 2,169–177), Tacitus (Annalen 15,44) und die 1961 in Caesarea gefundene Pilatus-Inschrift, die ihn als *praefectus Iudaeae* nennt. Die Forschung – etwa Helen Bond (Pontius Pilate in History and Interpretation, 1998) – betont, dass jede Quelle ihr eigenes Interesse hat: Philo schreibt eine politische Anklageschrift, Josephus moralisierende Geschichte, die Evangelien eine theologische Passionserzählung. Bond sieht in den Evangelien durchaus unterschiedliche, je theologisch gezeichnete Pilatusbilder, aber kein unvereinbares Gegenbild zum Pilatus des Josephus. Umstritten bleiben das Passa-Amnestie-Brauchtum (außerbiblisch nicht belegt) und die Frage, wie stark die Evangelien die Rolle der Tempelaristokratie betonen.`,
    detail: `**Josephus zeigt einen Pilatus, der nachgibt:** Beim Streit um die Kaiserbilder (Feldzeichen) in Jerusalem drohte Pilatus den Protestierenden in Caesarea mit dem Tod – als sie ihre Nacken entblößten und lieber sterben als das Gesetz verletzen wollten, ließ er die Bilder entfernen (Ant. 18,55–59). Das ist genau das Muster der Evangelien: ein harter Präfekt, der unter massivem Druck einer Menge einlenkt.

**Philo zeigt einen Pilatus, der den Kaiser fürchtet:** Im Streit um die Weiheschilde drohten die Juden, sich an Tiberius zu wenden; Pilatus fürchtete, dass eine Gesandtschaft seine übrigen Vergehen aufdecken würde (Legatio 302–303). Tiberius ließ die Schilde nach Caesarea bringen. Auch hier: ein Statthalter, der sich vor einer Beschwerde in Rom fürchtet – vgl. Joh 19,12.

**Die Pilatus-Inschrift (1961):** Ein Kalksteinblock aus dem Theater von Caesarea, entdeckt von einem italienischen Team unter Antonio Frova, nennt einen von [Pon]tius Pilatus errichteten Bau zu Ehren des Tiberius (*Tiberieum*) und den Titel *[praef]ectus Iuda[ea]e*. Sie bestätigt Name, Amt und Zeit.

**Die Freilassung eines Gefangenen:** Eine direkte außerbiblische Bestätigung der Passa-Amnestie fehlt. Diskutiert werden als Analogien ein ägyptischer Papyrus (P. Florentinus 61, 85 n. Chr.), in dem ein Präfekt einen Angeklagten „den Menschenmengen schenkt", und Mischna Pesachim 8,6 über einen, dem man die Freilassung aus dem Gefängnis zugesagt hat.`,
    sources: [
      { kind: 'sonstiges', author: 'Philo von Alexandrien', work: 'Legatio ad Gaium', ref: '299–305', year: 'ca. 41', quote: `Pilatus sei von Natur unbeugsam, eigenwillig und unerbittlich gewesen; man werfe ihm Bestechlichkeit, Gewalttaten, Beleidigungen, Hinrichtungen ohne Urteil und fortgesetzte Grausamkeit vor. Er habe gefürchtet, eine Gesandtschaft an den Kaiser könne seine Vergehen aufdecken.`, status: 'paraphrase', note: 'Philo legt die Anklage einem Brief Agrippas I. in den Mund – eine bewusst polemische Darstellung.' },
      { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,55–59; 18,85–89', year: 'ca. 93/94', quote: `Pilatus ließ die Kaiserbilder nach Jerusalem bringen; als die Protestierenden in Caesarea lieber sterben als das Gesetz brechen wollten, ließ er sie entfernen. Nach einem gewaltsamen Vorgehen gegen Samaritaner am Garizim wurde er von Vitellius nach Rom geschickt.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '15,44', year: 'ca. 116', quote: `Der Urheber dieses Namens, Christus, war unter der Herrschaft des Tiberius durch den Prokurator Pontius Pilatus hingerichtet worden.`, original: `auctor nominis eius Christus Tiberio imperitante per procuratorem Pontium Pilatum supplicio adfectus erat`, status: 'verbatim' },
      { kind: 'sonstiges', work: 'Pilatus-Inschrift aus Caesarea Maritima', year: 'entdeckt 1961', quote: `[…]S TIBERIEUM / [PON]TIUS PILATUS / [PRAEF]ECTUS IUDA[EA]E – Bau zu Ehren des Tiberius, errichtet von Pontius Pilatus, Präfekt von Judäa.`, status: 'paraphrase', note: 'Heute im Israel-Museum, Jerusalem; Rekonstruktion der Lücken in Einzelheiten umstritten.' },
      { kind: 'fachliteratur', author: 'Helen K. Bond', work: 'Pontius Pilate in History and Interpretation', year: '1998', quote: `Jede Quelle zeichnet Pilatus mit eigenem Interesse; die Evangelien bieten theologisch geformte Bilder, die mit einem harten, aber politisch vorsichtigen Präfekten vereinbar sind.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Evangelien zeichnen Pilatus gar nicht als netten Mann: Er erkennt Jesu Unschuld und lässt ihn trotzdem geißeln und kreuzigen – das ist schlimmer als bloße Grausamkeit. Lukas erwähnt sogar sein Blutbad an Galiläern. Und Josephus berichtet selbst, dass Pilatus einmal vor einer entschlossenen jüdischen Menge einknickte; Philo zeigt, wie er eine Beschwerde beim Kaiser fürchtete. Genau das sehen wir in Joh 19,12: „Wenn du ihn freilässt, bist du kein Freund des Kaisers." Hart und zugleich politisch erpressbar – das passt zusammen.`,
  keyPoints: [
    `**Historisch gesichert:** Philo, Josephus, Tacitus und die Pilatus-Inschrift (1961) bestätigen Name, Amt (*praefectus Iudaeae*) und Zeit.`,
    `**Kein Weißwaschen:** In den Evangelien verurteilt Pilatus wissentlich einen Unschuldigen, lässt ihn geißeln und kreuzigen; Lk 13,1 nennt sein Massaker.`,
    `**Josephus bestätigt das Muster:** Im Bilderstreit gab Pilatus vor einer todesbereiten Menge nach (Ant. 18,55–59).`,
    `**Erpressbarkeit:** Philo zeigt seine Angst vor einer Beschwerde bei Tiberius – vgl. „des Kaisers Freund" (Joh 19,12).`,
    `**Das Credo nennt ihn:** „gekreuzigt unter Pontius Pilatus" – die Kirche hat Pilatus nie aus der Verantwortung entlassen.`,
    `**Ehrlich zur Wirkungsgeschichte:** Christen haben Passionstexte zu Judenhass missbraucht – das war Sünde; theologisch starb Christus für die Sünden aller.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Historiker',
      text: `Lukas ist der Evangelist, der Pilatus am deutlichsten in die Zeitgeschichte einordnet (Lk 3,1) und zugleich seine Gewalt festhält (Lk 13,1). In seinem Prozessbericht erklärt Pilatus dreimal, keine Schuld zu finden (Lk 23,4.14.22), und gibt dann doch nach – Lukas stellt damit nicht Pilatus' Güte heraus, sondern die Unschuld Jesu und das Versagen der Macht. Zugleich nennt er auch die Rolle des Herodes Antipas, die nur er überliefert.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '23,4.14.22.24', quote: `Pilatus findet dreimal keine Schuld an Jesus und urteilt dann doch, dass ihre Bitte geschehe.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'raymond-brown',
      role: 'als Exeget der Passionserzählungen',
      text: `Brown hat in seinem großen Werk über die Passionsberichte die Pilatusszenen aller vier Evangelien Vers für Vers untersucht. Er sieht in ihnen theologische Gestaltung, betont aber, dass das Grundgerüst historisch gut verankert ist: Ein römischer Präfekt fällte das Todesurteil, die Tempelaristokratie wirkte mit, und Pilatus handelte aus politischer Vorsicht, nicht aus Gerechtigkeitssinn. Brown warnt zugleich eindringlich davor, aus den Texten eine Kollektivschuld „der Juden" abzuleiten – das widerspreche sowohl der Geschichte als auch dem Evangelium.`,
      sources: [
        { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah', year: '1994', quote: `Ausführliche Analyse der Pilatusszenen; historische Kernaussagen werden von theologischer Gestaltung unterschieden; Warnung vor antijüdischem Missbrauch.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'blomberg',
      role: 'als Historiker des Johannesevangeliums',
      text: `Blomberg weist darauf hin, dass Johannes' Darstellung des Prozesses viele historisch plausible Details enthält: das Prätorium, den Steinpflasterplatz (Gabbatha), das Fehlen des Rechts zur Todesstrafe für die jüdischen Behörden (Joh 18,31) und den politischen Druck des Vorwurfs, Pilatus sei kein „Freund des Kaisers". Gerade die Mischung aus Härte, Spott und Furcht passt zum Pilatus der außerbiblischen Quellen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of John\'s Gospel', year: '2001', quote: `Die johanneische Prozessdarstellung enthält zahlreiche historisch plausible Einzelheiten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als früher Zeuge der späteren Pilatus-Tradition',
      text: `Tertullian berichtet um 197, Pilatus habe dem Kaiser Tiberius über Christus Bericht erstattet und sei „seinem Gewissen nach schon Christ" gewesen. Das zeigt, dass schon früh eine pilatusfreundliche Überlieferung außerhalb der Evangelien entstand – die später in apokryphen Pilatusakten und in der äthiopischen Heiligenverehrung weiterwuchs. Für die Debatte ist wichtig: Diese Entwicklung ist nach-neutestamentlich; die kanonischen Evangelien selbst kennen keinen „christlichen" Pilatus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '21,24', year: 'ca. 197', quote: `Dies alles über Christus meldete Pilatus, der seinem Gewissen nach selbst schon Christ war, dem damaligen Kaiser Tiberius.`, original: `Ea omnia super Christo Pilatus, et ipse iam pro sua conscientia Christianus, Caesari tunc Tiberio nuntiavit.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Tertullian ist für die koptische Kirche keine Lehrautorität.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'philo-josephus-grausam',
      objection: `Philo und Josephus zeigen einen brutalen Pilatus, die Evangelien einen schwachen, zögernden. Beides kann nicht stimmen.`,
      objectionBy: 'S. G. F. Brandon',
      answer: `Doch, beides passt zusammen – und Josephus selbst zeigt es: Im Bilderstreit drohte Pilatus mit dem Tod, gab aber nach, als die Menge lieber sterben wollte. Philo berichtet, wie Pilatus eine Beschwerde beim Kaiser fürchtete. Ein harter Präfekt, der unter politischem Druck einknickt, ist genau der Pilatus aus Joh 19,12.`,
      followUps: [
        {
          id: 'philo-quelle-genauer',
          objection: `Philo war Zeitgenosse. Wenn er Pilatus als grausam und unbeugsam beschreibt, sollte man ihm mehr glauben als späten christlichen Texten.`,
          objectionBy: 'Paul Winter',
          answer: `Philo schreibt eine Anklageschrift gegen Caligula und legt die Vorwürfe einem Brief des Königs Agrippa in den Mund – die Liste der Laster ist bewusst polemisch. Und selbst Philo zeigt, wie Pilatus am Ende den Rückzug antreten musste, weil er den Kaiser fürchtete. Die Evangelien sind zudem nicht „spät": Markus entstand etwa eine Generation nach den Ereignissen.`,
          followUps: [
            {
              id: 'sejan-spekulation',
              objection: `Christliche Apologeten erklären Pilatus' Schwäche mit dem Sturz des Sejanus 31 n. Chr. Das ist reine Spekulation.`,
              objectionBy: 'Kritischer Historiker',
              answer: `Richtig, die Verbindung zwischen Pilatus und Sejanus ist eine Hypothese – wir wissen nicht sicher, ob Pilatus ein Schützling des Sejanus war. Ich brauche sie auch nicht: Dass ein Präfekt eine Beschwerde in Rom fürchtete, zeigen Philo und Josephus unabhängig davon. Der Titel „Freund des Kaisers" war eine reale Ehrenstellung, deren Verlust gefährlich war.`,
              followUps: [
                {
                  id: 'bond-urteil',
                  objection: `Helen Bond sagt doch, jedes Evangelium zeichne seinen eigenen Pilatus. Also sind die Bilder theologisch, nicht historisch.`,
                  objectionBy: 'Kritischer Historiker',
                  answer: `Bond zeigt, dass jedes Evangelium Pilatus mit eigener Akzentsetzung darstellt – das gilt aber auch für Philo und Josephus. Theologisch gestaltet heißt nicht unhistorisch. Entscheidend ist, dass die verschiedenen Bilder einen gemeinsamen Kern haben: ein machtbewusster Präfekt, der Jesus aus politischem Kalkül hinrichten ließ. Das bestreitet in der Forschung praktisch niemand.`,
                },
              ],
            },
          ],
        },
        {
          id: 'pilatus-wusste-unschuld',
          objection: `Kein römischer Präfekt hätte dreimal die Unschuld eines Angeklagten erklärt und ihn dann doch hingerichtet. Das ist theologische Konstruktion.`,
          objectionBy: 'John Dominic Crossan',
          answer: `Die Unschulderklärungen sind theologisch bedeutsam, ja – Lukas will zeigen, dass Jesus kein Aufrührer war. Aber dass ein Statthalter einen Mann opfert, den er für ungefährlich hält, um Unruhe und eine Beschwerde zu vermeiden, ist politisch alltäglich. Für Pilatus war ein galiläischer Wanderprediger wenig wert, der Friede zum Passafest und seine Karriere dagegen viel.`,
        },
      ],
    },
    {
      id: 'schuld-auf-juden',
      objection: `Die Evangelien entlasten die Römer, um den Christen das Leben im Imperium zu erleichtern, und schieben die Schuld den Juden zu. Das Ergebnis waren Jahrhunderte des Judenhasses.`,
      objectionBy: 'Paul Winter',
      answer: `Die furchtbare Wirkungsgeschichte ist wahr: Christen haben Passionstexte missbraucht, um Juden als „Gottesmörder" zu verfolgen. Das war Sünde, und ich benenne sie. Aber die Evangelien entlasten Rom nicht: Ein römischer Präfekt verurteilt, römische Soldaten geißeln, verspotten und kreuzigen. Und die Kirche bekennt in jeder Liturgie: gekreuzigt „unter Pontius Pilatus" – für unsere Sünden, also für die Sünden aller.`,
      followUps: [
        {
          id: 'blut-ueber-uns',
          objection: `„Sein Blut komme über uns und unsere Kinder" (Mt 27,25) – dieser Vers hat Pogrome gerechtfertigt.`,
          objectionBy: 'Paul Winter',
          answer: `Ja, er wurde schrecklich missbraucht. Im Zusammenhang spricht eine Menge vor dem Prätorium, nicht „das jüdische Volk aller Zeiten"; und Matthäus selbst war Jude, wie Jesus, Maria und alle Apostel. Christlich gelesen ist das Blut Christi zudem Blut der Vergebung (Mt 26,28), kein Fluch. Wer daraus Hass ableitet, liest gegen das Evangelium.`,
          followUps: [
            {
              id: 'tempelaristokratie-rolle',
              objection: `Dann gib zu, dass die jüdischen Autoritäten gar keine Rolle spielten – es war ein rein römisches Verfahren gegen einen Aufrührer.`,
              objectionBy: 'Reza Aslan',
              answer: `Das wäre eine neue Einseitigkeit. Josephus selbst schreibt im Testimonium Flavianum, Pilatus habe Jesus „auf Anzeige der ersten Männer unter uns" gekreuzigt – auch der jüdische Historiker kennt also eine Mitwirkung der Tempelaristokratie. Das ist keine Schuld „der Juden", sondern einer kleinen politischen Führungsschicht, die mit Rom zusammenarbeitete.`,
              sources: [
                { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '18,63–64', year: 'ca. 93/94', quote: `Pilatus verurteilte ihn auf Anzeige der ersten Männer unter uns zum Kreuz.`, status: 'paraphrase', note: 'Teil des Testimonium Flavianum; dieser Satz gilt bei den meisten Forschern als ursprünglich, andere Teile als christlich überarbeitet.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'passa-amnestie',
      objection: `Einen Brauch, zum Passafest einen Gefangenen freizulassen, gab es nie. Das Barabbas-Motiv ist erfunden, um die Juden zu belasten.`,
      objectionBy: 'Paul Winter',
      answer: `Eine direkte außerbiblische Bestätigung fehlt – das gebe ich zu. Es gibt aber Analogien: Ein ägyptischer Papyrus von 85 n. Chr. zeigt einen Präfekten, der einen Angeklagten „der Menge schenkt", und die Mischna kennt den Fall eines Gefangenen, dem man die Freilassung zum Passa zugesagt hat. Ein lokaler Gnadenbrauch ist also denkbar, auch wenn wir ihn nicht beweisen können.`,
      followUps: [
        {
          id: 'barabbas-name',
          objection: `Barabbas heißt „Sohn des Vaters" – ein symbolischer Name. Das verrät die Erfindung.`,
          objectionBy: 'Robert M. Price',
          answer: `Bar-Abba ist ein belegter aramäischer Personenname bzw. Vatersname; „Sohn des Abba" kommt in jüdischen Quellen vor. Dass er für christliche Leser eine bittere Ironie enthält, ist eine Deutung, kein Beweis der Erfindung. Echte Namen haben oft eine Bedeutung.`,
        },
      ],
    },
    {
      id: 'pilatus-heiliger',
      objection: `Am Ende verehrt die äthiopische Kirche Pilatus sogar als Heiligen. Das zeigt, wohin die christliche Reinwaschung führt.`,
      objectionBy: 'Kritiker in der Debatte',
      answer: `Es stimmt, dass die äthiopische Kirche Pilatus und seine Frau Procla verehrt; die Frau des Pilatus wird auch in anderen Kirchen geehrt. Diese Überlieferung ist nach-neutestamentlich, gespeist aus apokryphen Pilatusschriften und der Hoffnung, dass auch ein Schuldiger umkehren kann. Ob die koptische Kirche selbst Pilatus kommemoriert, ist in den Quellen unsicher. Die Evangelien kennen keinen heiligen Pilatus – sie zeigen den Mann, der einen Unschuldigen kreuzigen ließ.`,
      followUps: [
        {
          id: 'tertullian-christ',
          objection: `Schon Tertullian nennt Pilatus „im Gewissen Christ". Die Entlastung beginnt also sehr früh.`,
          objectionBy: 'Kritiker in der Debatte',
          answer: `Ja, um 197 – über 150 Jahre nach der Kreuzigung und außerhalb des Neuen Testaments. Das zeigt, dass spätere Christen über Pilatus spekulierten, nicht dass die Evangelien ihn verfälschen. Maßstab ist das Credo, das seit dem 4. Jahrhundert in allen Kirchen gebetet wird: „gekreuzigt unter Pontius Pilatus".`,
        },
      ],
    },
    {
      id: 'pilatus-nie-existiert',
      objection: `Bis 1961 gab es gar keinen archäologischen Beleg für Pilatus. Vielleicht ist auch der Rest der Passionsgeschichte Fiktion.`,
      objectionBy: 'Mythizistischer Kritiker',
      answer: `Pilatus war schon vor 1961 durch Philo, Josephus und Tacitus gut bezeugt. Die Inschrift von Caesarea hat dann zusätzlich Name und genauen Titel bestätigt: *praefectus Iudaeae* – nicht „Prokurator", wie Tacitus anachronistisch schreibt. Die Evangelien nennen ihn übrigens schlicht „Statthalter" (*hēgemōn*) und vermeiden damit den Fehler.`,
      followUps: [
        {
          id: 'inschrift-beweist-wenig',
          objection: `Dass Pilatus existierte, beweist nicht, dass er Jesus verurteilte.`,
          objectionBy: 'Richard Carrier',
          answer: `Richtig, die Inschrift beweist nur den Rahmen. Dass Jesus unter Pilatus hingerichtet wurde, bezeugen aber unabhängig voneinander die vier Evangelien, Tacitus und Josephus. Die Kreuzigung unter Pilatus gilt deshalb auch bei säkularen Historikern als eine der sichersten Tatsachen über Jesus.`,
          questionsBack: [`Welche Tatsache aus dem Leben Jesu hältst du für sicherer bezeugt als seine Hinrichtung unter Pilatus?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo genau entlasten die Evangelien Pilatus, wenn er dort einen Unschuldigen wissentlich kreuzigen lässt?`,
    `Wie erklärst du, dass Josephus selbst einen Pilatus zeigt, der vor einer entschlossenen Menge nachgibt?`,
    `Warum nennt das christliche Glaubensbekenntnis seit dem 4. Jahrhundert ausgerechnet Pilatus?`,
    `Kennst du die Pilatus-Inschrift aus Caesarea und den Titel, den sie nennt?`,
  ],
  avoid: [
    `Den Missbrauch der Passionstexte gegen Juden kleinreden.`,
    `Die Sejanus-Hypothese als gesicherte Tatsache darstellen.`,
    `Die Passa-Amnestie als außerbiblisch „bewiesen" ausgeben.`,
  ],
  concessions: [
    `Die Evangelien betonen theologisch die Unschuld Jesu und gestalten die Pilatusszenen entsprechend.`,
    `Der Passa-Gnadenbrauch ist außerbiblisch nicht direkt belegt.`,
    `Christen haben die Passionsberichte über Jahrhunderte zur Rechtfertigung von Judenhass missbraucht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Helen K. Bond', work: 'Pontius Pilate in History and Interpretation', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig L. Blomberg', work: 'The Historical Reliability of John\'s Gospel', year: '2001', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Pilatus', 'Pilatus-Inschrift', 'Philo', 'Josephus', 'Passion', 'Antijudaismus'],
  related: ['historischer-jesus/ausserbiblische-quellen-gefaelscht', 'neues-testament/evangelien-widersprechen-sich', 'islam-kreuzigung/nicht-gekreuzigt-4-157', 'nt-archaeologie/nazareth-existierte-nicht'],
};

export default claim;
