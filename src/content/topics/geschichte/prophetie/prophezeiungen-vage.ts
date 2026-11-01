import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'prophezeiungen-vage',
  title: `„Prophezeiungen sind vage oder wurden nachträglich angepasst."`,
  proponents: [
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Jesus, Interrupted (2009)' },
    { name: 'Richard Carrier', role: 'Althistoriker, Mythizist', work: 'On the Historicity of Jesus (2014)' },
    { name: 'Tovia Singer', role: 'Rabbiner, Outreach Judaism', work: 'Let\'s Get Biblical (2010/2014)' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler und Wissenschaftskommunikator', work: 'Data Over Dogma' },
  ],
  steelman: `Die angeblichen messianischen Prophezeiungen sind entweder so vage, dass sie auf jeden passen, oder sie wurden von den Evangelisten nachträglich auf Jesus zugeschnitten. Matthäus zitiert Hos 11,1 („aus Ägypten habe ich meinen Sohn gerufen"), obwohl der Vers eindeutig vom Volk Israel und vom Exodus spricht. Er beruft sich auf eine Prophetie „er soll Nazoräer heißen" (Mt 2,23), die es nirgends gibt. Wo die Bibel wirklich konkret wird, scheitert sie: Tyrus sollte nie wieder aufgebaut werden (Ez 26,14) – es existiert bis heute; Nebukadnezar konnte es nicht einnehmen, was Ezechiel selbst zugeben muss (Ez 29,18). Und die Nennung des Kyrus (Jes 44,28; 45,1) beweist nur, dass dieser Teil des Jesajabuches zur Zeit des Kyrus geschrieben wurde.`,
  biblical: {
    summary: `Das Neue Testament verwendet „erfüllen" (*plēroō*) in einem weiteren Sinn als wir: nicht nur für eingetroffene Vorhersagen, sondern auch für **Typologie** (ein Geschehen der Geschichte Israels findet in Christus seine Vollendung) und für **Anklänge**. Hos 11,1 ist Typologie: Israel ist Gottes „Sohn", Christus der wahre Sohn, der den Weg Israels – nach Ägypten und zurück – stellvertretend geht. Daneben stehen echte Vorhersagen mit konkretem Inhalt: der Geburtsort Bethlehem (Mi 5,1), der leidende Gottesknecht (Jes 53), der König auf dem Esel (Sach 9,9), das Zeitfenster vor der Zerstörung des Tempels (Dan 9,26).`,
    detail: `**Drei Kategorien unterscheiden:**
1. **Direkte Vorhersage:** Mi 5,1; Jes 52,13–53,12; Sach 9,9; Dan 9,24–26. Hier gibt es vorchristliche oder frühjüdische messianische Deutungen.
2. **Typologie:** Hos 11,1 (Mt 2,15); Jer 31,15 (Mt 2,18) – Muster der Geschichte Israels, die in Christus zur Vollendung kommen.
3. **Anklang/Wortspiel:** Mt 2,23 („Nazoräer") spielt wohl auf *nēṣer* („Spross", Jes 11,1) an; Matthäus spricht ausdrücklich von „den Propheten" im Plural, nicht von einem bestimmten Vers.

Nur Kategorie 1 hat Beweiskraft im strengen Sinn. Wer das offen sagt, gewinnt Glaubwürdigkeit.`,
    sources: [
      { kind: 'bibel', work: 'Micha', ref: '5,1', quote: `Und du, Bethlehem Ephrata, die du klein bist unter den Tausenden in Juda, aus dir soll mir der kommen, der in Israel Herr sei, welches Ausgang von Anfang und von Ewigkeit her gewesen ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '53,5', quote: `Aber er ist um unsrer Missetat willen verwundet und um unsrer Sünde willen zerschlagen. Die Strafe liegt auf ihm, auf daß wir Frieden hätten, und durch seine Wunden sind wir geheilt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sacharja', ref: '9,9', quote: `Aber du, Tochter Zion, freue dich sehr, und du, Tochter Jerusalem, jauchze! Siehe, dein König kommt zu dir, ein Gerechter und ein Helfer, arm und reitet auf einem Esel und auf einem jungen Füllen der Eselin.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '11,1', quote: `Da Israel jung war, hatte ich ihn lieb und rief ihn, meinen Sohn, aus Ägypten.`, translation: 'Luther 1912', status: 'verbatim', note: 'Typologie, keine direkte Vorhersage.' },
      { kind: 'bibel', work: 'Johannes', ref: '7,42', quote: `Spricht nicht die Schrift, von dem Geschlecht Davids und aus dem Flecken Bethlehem, da David war, solle Christus kommen?`, translation: 'Luther 1912', status: 'verbatim', note: 'Zeigt, dass die Bethlehem-Erwartung im Volk verbreitet war.' },
    ],
  },
  church: {
    summary: `Der Beweis aus der Prophetie gehört zu den ältesten Argumenten der Kirche: Justin der Märtyrer widmet ihm große Teile seiner Apologie und seines Dialogs mit dem Juden Tryphon; Irenäus, Eusebius und Athanasius führen ihn fort. Die alexandrinische Tradition hat dabei nie nur „Treffer" gezählt, sondern die ganze Schrift christozentrisch gelesen: Das Alte Testament ist voller Vorbilder, die in Christus ihren Sinn finden. Die koptische Liturgie liest in der Karwoche (Pascha-Woche) die Prophetien des AT neben den Evangelien – gerade um diesen Zusammenhang erfahrbar zu machen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '31–53', year: 'ca. 155', quote: `Ausführlicher Beweis aus der Prophetie: Die Propheten haben Geburt, Leiden und Herrlichkeit Christi lange vorher angekündigt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'I,51', year: 'ca. 248', quote: `In Bethlehem zeige man die Höhle, in der Jesus geboren wurde; das sei in der Gegend selbst bei Nichtchristen bekannt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Kritische Exegeten betonen, dass die meisten von Matthäus zitierten Stellen im ursprünglichen Kontext nicht vom Messias handeln und dass die Evangelisten frühjüdische Auslegungsmethoden (Pescher, Midrasch) verwendeten. Viele halten die Bethlehem-Geburt für eine theologische Konstruktion. Für Jes 40–55 (Deuterojesaja) gilt eine Abfassung um 540 v. Chr. als Konsens. Unbestritten ist dagegen: Die große Jesajarolle von Qumran (1QIsa^a) ist vorchristlich; die Messiaserwartung des Judentums der Zeitenwende war real, und frühjüdische Texte (Targumim) deuten Mi 5,1 und Jes 52,13 messianisch.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus, Interrupted', year: '2009', quote: `Die Evangelisten lasen ihre Überzeugungen über Jesus in die Schrift hinein; viele „Erfüllungen" entstehen erst durch diese Lektüre.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Targum Jonathan zu Jesaja', ref: '52,13', quote: `Siehe, mein Knecht, der Messias, wird Erfolg haben.`, status: 'paraphrase', note: 'Der Targum deutet den Knecht messianisch, überträgt aber das Leiden in Kap. 53 weitgehend auf andere.' },
      { kind: 'juedisch', work: 'Targum Jonathan zu Micha', ref: '5,1', quote: `Aus dir wird vor mir der Messias hervorgehen.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Große Jesajarolle aus Qumran (1QIsa^a)', year: '2. Jh. v. Chr.', quote: `Vollständiger Jesajatext einschließlich Jes 53 aus vorchristlicher Zeit.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Du hast in einem Punkt recht: Nicht jedes „damit erfüllt würde" im Neuen Testament ist eine Vorhersage – manches ist Typologie, wie Hos 11,1. Das sage ich offen. Aber es bleiben konkrete Vorhersagen, die schon Juden vor Jesus messianisch lasen: der Geburtsort Bethlehem, der leidende Knecht in Jesaja 53 – vorchristlich belegt in Qumran –, der König auf dem Esel und das Zeitfenster vor der Zerstörung des Tempels in Daniel 9. Das ist nicht vage, und das konnten die Evangelisten nicht im Nachhinein in die Texte schreiben.`,
  keyPoints: [
    `**Ehrlich unterscheiden:** direkte Vorhersage, Typologie, Anklang. Nur die erste Kategorie ist Beweis im strengen Sinn.`,
    `**Vorchristliche Texte:** Die Jesajarolle aus Qumran (2. Jh. v. Chr.) zeigt, dass Jes 53 nicht nachträglich angepasst wurde.`,
    `**Jüdische Deutung vor und neben dem NT:** Targumim lesen Mi 5,1 und Jes 52,13 messianisch; Joh 7,42 und Mt 2,5–6 zeigen, dass die Bethlehem-Erwartung verbreitet war.`,
    `**Konkrete Inhalte:** Ort (Bethlehem), Art (leidend, stellvertretend, mit Reichen begraben), Zeit (vor der Zerstörung des Tempels), Zeichen (Esel).`,
    `**Problemfälle nicht verstecken:** Tyrus (Ez 26) und Kyrus (Jes 44–45) sind keine guten Beweistexte – lass sie weg oder diskutiere sie ehrlich.`,
  ],
  voices: [
    {
      person: 'justin',
      role: 'als erster systematischer Apologet der Prophetie',
      text: `Justin, selbst aus Samarien stammend und philosophisch gebildet, kam nach eigenem Bericht über die Propheten zum Glauben. In seiner Apologie an den Kaiser legt er dar, dass die Propheten Jahrhunderte vorher Geburt aus der Jungfrau, Geburtsort, Leiden, Kreuzigung und die Bekehrung der Heiden angekündigt hätten – und dass diese Bücher von den Juden selbst, den Gegnern der Christen, bewahrt würden. Gerade das macht für ihn den Beweis stark: Die Christen konnten die Texte nicht fälschen, weil sie in den Händen ihrer Kritiker lagen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '31', year: 'ca. 155', quote: `Die prophetischen Bücher seien von den Juden selbst aufbewahrt und ins Griechische übersetzt worden – sie lesen sie, verstehen aber ihren Sinn nicht.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'edersheim',
      role: 'als Kenner der rabbinischen Literatur',
      text: `Edersheim stellte in seinem Werk über das Leben Jesu eine Liste von 456 alttestamentlichen Stellen zusammen, die in der alten rabbinischen Literatur messianisch gedeutet werden. Damit zeigt er: Die messianische Lektüre des AT ist keine christliche Erfindung, sondern hatte breite Wurzeln im Judentum. Die Kirche las die Texte nicht willkürlich, sondern in einem Rahmen, den auch die Synagoge kannte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alfred Edersheim', work: 'The Life and Times of Jesus the Messiah', ref: 'Anhang IX', year: '1883', quote: `Liste von 456 Stellen des AT, die in der alten rabbinischen Literatur messianisch gedeutet werden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als Semitist im jüdisch-christlichen Gespräch',
      text: `Brown betont, dass die stärksten Prophetien nicht einzelne Verse, sondern Linien sind: der Messias als König aus dem Haus David, als Priester, als leidender Knecht, als Menschensohn. Erst in Jesus kommen diese Linien zusammen. Zu Jes 53 verweist er darauf, dass der Knecht für die Sünden „meines Volkes" geschlagen wird (53,8), also vom Volk unterschieden ist, und dass er als unschuldig beschrieben wird – beides passt schlecht auf das Volk Israel, das Jesaja an anderer Stelle für seine Sünden tadelt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3', year: '2003', quote: `Jes 53 beschreibt einen unschuldigen, stellvertretend leidenden Einzelnen, der vom Volk unterschieden ist.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'pascal',
      role: 'als Religionsphilosoph',
      text: `Pascal hielt die Prophetien für einen der stärksten Gründe des Glaubens, gerade weil sie über viele Jahrhunderte und von vielen Autoren stammen und in einem Volk bewahrt wurden, das Jesus mehrheitlich ablehnte. Für ihn ist das Zeugnis der Juden für die Echtheit der Schriften und zugleich ihre Ablehnung Jesu Teil des Beweises: Feinde bewahren die Urkunden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Abschnitte über die Prophetien)', year: 'posthum 1670', quote: `Die Prophetien als größter Beweis Jesu Christi; die Juden als bewahrende Zeugen der Schrift.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'matthaeus-zurechtgebogen',
      objection: `Matthäus biegt die Schrift zurecht: Hos 11,1 handelt vom Exodus Israels, nicht von Jesus. Und „er soll Nazoräer heißen" steht nirgends im Alten Testament.`,
      objectionBy: 'Bart Ehrman',
      answer: `Richtig: Hos 11,1 ist im Kontext Israel. Matthäus liest ihn typologisch – Israel ist Gottes Sohn, Christus der wahre Sohn, der den Weg Israels stellvertretend geht. Das ist eine bewusste Auslegungsmethode, keine Vorhersage im engen Sinn, und ich verwende sie nicht als Beweis. Bei „Nazoräer" spricht Matthäus von „den Propheten" im Plural; er spielt wohl auf den „Spross" (nēṣer) aus Jes 11,1 an.`,
      followUps: [
        {
          id: 'dann-nichts-beweiskraeftig',
          objection: `Wenn du die Typologie zugibst, bleibt doch nichts übrig. Dann ist alles nur fromme Lektüre.`,
          objectionBy: 'Dan McClellan',
          answer: `Nein. Beweiskraft haben die Stellen, die schon im Judentum messianisch gelesen wurden und konkrete Inhalte haben: Mi 5,1 (Bethlehem) – der Targum liest „der Messias"; Jes 52,13–53,12 – ebenfalls messianisch im Targum, vorchristlich bezeugt in Qumran; Sach 9,9; Dan 9. Die Typologie zeigt die Tiefe der Schrift; die direkten Vorhersagen tragen das Argument.`,
          followUps: [
            {
              id: 'jesaja-53-israel',
              objection: `Jesaja 53 handelt von Israel. Jesaja nennt Israel ausdrücklich „mein Knecht" (Jes 41,8; 49,3).`,
              objectionBy: 'Tovia Singer',
              answer: `Jesaja nennt Israel tatsächlich Knecht – aber einen blinden und tauben Knecht, der für seine eigenen Sünden leidet (Jes 42,19.24). Der Knecht in Jes 53 dagegen ist unschuldig (53,9), leidet freiwillig für andere und wird „um der Missetat meines Volkes willen" geschlagen (53,8) – er ist also vom Volk unterschieden. In Jes 49,5–6 hat der Knecht sogar den Auftrag, Israel zurückzubringen.`,
              followUps: [
                {
                  id: 'targum-leiden-uebertragen',
                  objection: `Der Targum nennt den Knecht zwar Messias, überträgt aber das Leiden auf Israel und die Völker. Er stützt deine Lesart also gerade nicht.`,
                  objectionBy: 'Tovia Singer',
                  answer: `Das ist richtig, und ich sage es offen. Aber es zeigt zweierlei: Die messianische Deutung des Abschnitts war alt und verbreitet – und das Leiden des Messias war dem Targum so anstößig, dass er es umdeuten musste. Der hebräische Text selbst lässt den Knecht leiden. Die Umdeutung beweist, wie stark der Text auf einen leidenden Einzelnen hinweist.`,
                  questionsBack: [`Warum musste der Targum die Leiden umdeuten, wenn der Text ohnehin vom Volk handelt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wie-horoskope',
      objection: `Prophezeiungen funktionieren wie Horoskope: vage genug, dass man im Nachhinein immer etwas findet.`,
      objectionBy: 'Richard Carrier',
      answer: `Ein Horoskop sagt „Sie begegnen bald einer wichtigen Person". Micha sagt: aus Bethlehem, dem kleinen Ort in Juda. Sacharja: ein König, der arm auf einem Esel reitet. Daniel: der Gesalbte kommt und wird getötet, bevor Stadt und Tempel zerstört werden. Das sind Ort, Art und Zeit – das Gegenteil von vage.`,
      followUps: [
        {
          id: 'bethlehem-erfunden',
          objection: `Gerade Bethlehem ist erfunden: Jesus kam aus Nazareth, und Matthäus und Lukas haben Bethlehem wegen Micha in die Geschichte geschrieben.`,
          objectionBy: 'Bart Ehrman',
          answer: `Matthäus und Lukas erzählen unabhängig voneinander sehr unterschiedliche Kindheitsgeschichten – und stimmen trotzdem in Bethlehem überein. Hätten sie Bethlehem erfunden, hätten sie sich das Problem „Nazareth" selbst geschaffen. Dass beide Bethlehem und Nazareth erklären müssen, spricht eher dafür, dass ihnen beides als Überlieferung vorlag.`,
          followUps: [
            {
              id: 'mt-lk-widerspruch',
              objection: `Ihre Erklärungen widersprechen sich: Bei Matthäus wohnen Josef und Maria in Bethlehem, bei Lukas reisen sie aus Nazareth an. Das zeigt die Erfindung.`,
              objectionBy: 'Bart Ehrman',
              answer: `Matthäus sagt nicht, wo das Paar vor der Geburt wohnte; er beginnt in Bethlehem. Die Erzählungen setzen unterschiedliche Schwerpunkte, sind aber nicht unvereinbar. Wichtiger: Sie stimmen in den Kernpunkten überein – Bethlehem, Nazareth, Maria, Josef, Abstammung von David, Zeit des Herodes, jungfräuliche Empfängnis. Gemeinsame Kerne in unabhängigen Erzählungen deuten auf ältere Tradition, nicht auf Erfindung.`,
              followUps: [
                {
                  id: 'quirinius-zensus',
                  objection: `Und Lukas' Zensus ist nachweislich falsch: Quirinius führte die Schätzung in Judäa 6 n. Chr. durch, Herodes starb 4 v. Chr. Lukas brauchte einen Grund, Jesus nach Bethlehem zu bringen – und erfand ihn.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Das ist eine echte historische Schwierigkeit, die ich nicht kleinrede. Es gibt Lösungsvorschläge – etwa, dass Lk 2,2 grammatisch auch „vor der Statthalterschaft des Quirinius" heißen kann, oder dass Quirinius schon früher eine Funktion im Osten hatte –, aber keiner ist allgemein anerkannt. Entscheidend für unsere Frage ist: Bethlehem hängt nicht an Lukas allein. Matthäus bezeugt es unabhängig und ohne Zensus. Selbst wenn Lukas sich in der Begründung irrte, wäre der Geburtsort damit nicht widerlegt.`,
                  detail: `Fair bleiben: Viele Historiker halten Lk 2,1–5 für einen Irrtum oder eine Konstruktion. Konservative Forscher (z. B. Darrell Bock, Kommentar zu Lukas) diskutieren die Alternativen ausführlich, räumen aber ein, dass die Frage offen ist. Ein Laie sollte daher nicht behaupten, der Zensus sei „bewiesen", sondern zeigen, dass die Bethlehem-Tradition auf zwei unabhängigen Zeugen ruht. Bemerkenswert ist auch Joh 7,42: Die Gegner Jesu werfen ihm vor, aus Galiläa statt aus Bethlehem zu kommen – der Evangelist lässt den Einwand stehen, als wüssten seine Leser die Antwort.`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '2,2', quote: `Und diese Schätzung war die allererste und geschah zur Zeit, da Kyrenius Landpfleger in Syrien war.`, translation: 'Luther 1912', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Darrell L. Bock', work: 'Luke 1:1–9:50 (Baker Exegetical Commentary)', ref: 'Exkurs zum Zensus', year: '1994', quote: `Diskussion der Lösungsvorschläge zum Zensus des Quirinius; die Frage bleibt offen.`, status: 'paraphrase' },
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus, Interrupted', year: '2009', quote: `Der Zensus unter Quirinius passe nicht in die Zeit des Herodes; Lukas habe ihn benutzt, um Jesus nach Bethlehem zu bringen.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn Lukas Bethlehem erfunden hätte – woher hat Matthäus es, der Lukas nicht kennt und eine ganz andere Geschichte erzählt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tyrus-fehlschlag',
      objection: `Nimm Ezechiel 26: Tyrus soll nie wieder aufgebaut werden – es existiert bis heute. Und Ezechiel muss in 29,18 zugeben, dass Nebukadnezar keinen Lohn für die Belagerung bekam. Das ist eine gescheiterte Prophetie.`,
      objectionBy: 'Richard Carrier',
      answer: `Tyrus ist ein schwieriger Fall, und ich benutze ihn nicht als Beweis. Bemerkenswert ist aber: Ezechiel selbst überliefert in 29,17–20, dass Nebukadnezar keine Beute machte – ein Prophetenbuch, das seine eigenen Spannungen nicht vertuscht. Der Text spricht von „vielen Völkern", die wie Wellen kommen (26,3), und wechselt vom „er" Nebukadnezars zum „sie" (26,12); Alexander der Große schüttete 332 v. Chr. die Trümmer der Festlandstadt ins Meer, um den Damm zur Inselstadt zu bauen.`,
      followUps: [
        {
          id: 'also-falscher-prophet',
          objection: `Nach Dtn 18,22 ist ein Prophet, dessen Wort nicht eintrifft, ein falscher Prophet. Also war Ezechiel einer.`,
          objectionBy: 'Richard Carrier',
          answer: `Gerichtsworte sind in der Bibel oft bedingt (Jer 18,7–10; Jona 3) und bedienen sich prophetischer Hyperbel; Tyrus verlor nach Alexander für immer seine Stellung als unabhängige Seemacht. Man kann darüber streiten, ob das genügt – darum baue ich mein Argument nicht auf Tyrus, sondern auf die Messiasprophetien, die konkret und vorchristlich bezeugt sind.`,
          questionsBack: [`Würdest du Jona auch einen falschen Propheten nennen, weil Ninive nach seiner Predigt nicht unterging?`],
        },
      ],
    },
    {
      id: 'kyrus-deuterojesaja',
      objection: `Jesaja nennt Kyrus beim Namen – 150 Jahre vor seiner Geburt? Natürlich nicht: Jes 40–55 stammt von einem Propheten im Exil um 540 v. Chr.`,
      objectionBy: 'Dan McClellan',
      answer: `Das ist die Mehrheitsmeinung der kritischen Forschung, das gebe ich zu. Die Tradition sieht es anders: Jesus Sirach (um 180 v. Chr.) schreibt die Trostbotschaft Jesaja zu, Joh 12,38–41 zitiert beide Teile als Jesaja, und Josephus berichtet, Kyrus habe seinen Namen bei Jesaja gelesen. Aber ich baue nicht darauf. Mein Punkt ist ein anderer: Selbst um 540 v. Chr. datiert, liegt Jesaja 53 über fünfhundert Jahre vor Jesus.`,
      followUps: [
        {
          id: 'jes53-exilsthema',
          objection: `Jes 53 ist Teil von Deuterojesaja und handelt vom Leiden der Exilierten. Es geht um das 6. Jahrhundert, nicht um Jesus.`,
          objectionBy: 'Dan McClellan',
          answer: `Selbst dann bleibt die Frage, warum dieser Text – vorchristlich in Qumran bezeugt – so genau auf Jesus passt: ein Unschuldiger, der freiwillig für die Schuld anderer stirbt, wie ein Lamm schweigt, „bei Reichen" begraben wird und nach seinem Tod „Nachkommen sehen" und „lange leben" wird (53,10). Kein Exilierter und kein Kollektiv erfüllt diese Abfolge von stellvertretendem Tod und Rechtfertigung danach so wie Jesus.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche konkreten Vorhersagen – Ort, Art, Zeit – würdest du als „nicht vage" akzeptieren?`,
    `Wie konnten die Evangelisten Jes 53 nachträglich anpassen, wenn der Text vorchristlich in Qumran vorliegt?`,
    `Warum deuteten jüdische Targumim Mi 5,1 und Jes 52,13 messianisch, wenn die Stellen gar nicht vom Messias handeln?`,
    `Unterscheidest du zwischen Typologie und Vorhersage – oder wirfst du beides zusammen?`,
  ],
  avoid: [
    `Lange Listen mit „300 erfüllten Prophezeiungen" vortragen, in denen Typologien und Anklänge als Vorhersagen gezählt werden.`,
    `Wahrscheinlichkeitsrechnungen à la „1 zu 10 hoch 17" (Peter Stoner) – die Einzelwahrscheinlichkeiten sind geschätzt und nicht unabhängig.`,
    `Tyrus oder Kyrus als Hauptbeweise anführen.`,
  ],
  concessions: [
    `Viele Erfüllungszitate bei Matthäus sind Typologie oder Anklang, keine direkte Vorhersage.`,
    `Die kritische Forschung datiert Jes 40–55 mehrheitlich ins 6. Jahrhundert v. Chr.`,
    `Ezechiel 26 ist ein ernsthaft diskutierter Problemfall.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard B. Hays', work: 'Echoes of Scripture in the Gospels', year: '2016', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', year: 'ca. 160', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Prophetie', 'Messias', 'Typologie', 'Jesaja 53', 'Micha 5'],
  related: ['prophetie/daniel-spaetdatierung', 'prophetie/jesus-inszenierte-erfuellung', 'judentum-messias/jesaja-53-ist-israel', 'judentum-messias/messias-noch-nicht-gekommen'],
};

export default claim;
