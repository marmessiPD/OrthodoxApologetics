import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jeder-legt-selbst-aus',
  title: `„Jeder Gläubige kann die Bibel mit dem Heiligen Geist selbst auslegen."`,
  proponents: [
    { name: 'Martin Luther', role: 'Reformator', work: 'An den christlichen Adel deutscher Nation (1520); Dass eine christliche Versammlung Recht und Macht habe, alle Lehre zu urteilen (1523)' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe', work: 'Systematic Theology (1994), Kap. 6 „The Clarity of Scripture"' },
    { name: 'R. C. Sproul', role: 'Reformierter Theologe, Ligonier Ministries', work: 'Knowing Scripture (1977)' },
    { name: 'Gavin Ortlund', role: 'Baptistischer Theologe, „Truth Unites"', work: 'What It Means to Be Protestant (2024)' },
  ],
  steelman: `Gottes Wort ist „meines Fußes Leuchte" (Ps 119,105) und „macht die Unverständigen weise" (Ps 19,8); Timotheus kannte die Schrift „von Kind auf" (2 Tim 3,15). Jesus hielt einfachen Juden vor: „Habt ihr nicht gelesen?" (Mt 12,3; 19,4) – er setzte voraus, dass sie die Schrift verstehen konnten. Jeder Gläubige hat den Heiligen Geist und „die Salbung", die „allerlei lehrt" (1 Joh 2,20.27); der geistliche Mensch „richtet alles" (1 Kor 2,15); alle Gläubigen sind ein „königliches Priestertum" (1 Petr 2,9). Die Geschichte zeigt, wohin das Auslegungsmonopol einer Hierarchie führt: Die Bibel blieb in einer Sprache, die das Volk nicht verstand; William Tyndale wurde 1536 hingerichtet, weil er sie „dem Pflugknecht" geben wollte. Die Unterschiede unter Protestanten betreffen meist Nebenfragen, während sie im Evangelium einig sind. Und schließlich: Auch der Orthodoxe muss selbst entscheiden, welcher Kirche er glaubt – Rom, Konstantinopel oder Alexandria. Am Ende urteilt jeder selbst; das Prinzip der persönlichen Prüfung ist unvermeidlich.`,
  biblical: {
    summary: `Die Bibel ermutigt jeden zum Lesen, warnt aber zugleich: „Keine Weissagung in der Schrift geschieht aus eigener Auslegung" (2 Petr 1,20); in den Paulusbriefen ist „etliches schwer zu verstehen, welches die Ungelehrigen und Leichtfertigen verdrehen … zu ihrer eigenen Verdammnis" (2 Petr 3,16). Der Kämmerer fragt: „Wie kann ich, so mich nicht jemand anleitet?" (Apg 8,31). Gott gibt der Kirche Lehrer, damit wir nicht „von jedem Wind der Lehre" umhergetrieben werden (Eph 4,11–14). Und 1 Joh 2,27 bindet die „Salbung" ausdrücklich an das, „was ihr gehört habt von Anfang an" (2,24) – also an die apostolische Verkündigung.`,
    detail: `**1 Joh 2,20–27 im Zusammenhang:** Johannes schreibt gegen „Antichristen", die die Gemeinschaft verlassen haben (2,19) und leugnen, dass Jesus der Christus ist (2,22). Er sagt den Gläubigen nicht, sie bräuchten keine Lehrer – er belehrt sie ja gerade in einem Brief! –, sondern dass sie die neuen Lehrer, die sie „verführen" wollen (2,26), nicht brauchen. Maßstab ist: „Was ihr nun gehört habt von Anfang, das bleibe bei euch" (2,24). Die Salbung führt also in die ursprüngliche apostolische Lehre, nicht in individuelle Neuauslegung. Die Väter verbanden diese Salbung mit der Myronsalbung nach der Taufe – sie ist eine Gabe, die man in der Kirche empfängt.

**Die biblische Ordnung der Auslegung:**
- **Neh 8,8:** Die Leviten „lasen im Gesetzbuch Gottes klar und verständlich, daß man verstand, was gelesen ward" – das Volk hörte die Schrift *mit Erklärung*.
- **Mal 2,7:** „Des Priesters Lippen sollen die Lehre bewahren, daß man aus seinem Munde das Gesetz suche."
- **Lk 24,27.45:** Selbst die Jünger verstanden die Schrift erst, als der Auferstandene sie ihnen auslegte und „ihnen das Verständnis öffnete".
- **Apg 15:** Eine strittige Auslegungsfrage (Beschneidung der Heiden) wird nicht durch jeden Einzelnen, sondern durch die Apostel und Ältesten in Jerusalem entschieden.
- **Jak 3,1:** „Liebe Brüder, unterwinde sich nicht jedermann, Lehrer zu sein."

**Joh 16,13** („Der Geist der Wahrheit wird euch in alle Wahrheit leiten") ist an die versammelten Apostel gerichtet – eine Verheißung an die Kirche, nicht an jeden isolierten Leser.`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '1,20', quote: `… und das sollt ihr für das Erste wissen, daß keine Weissagung in der Schrift geschieht aus eigener Auslegung.`, original: `πᾶσα προφητεία γραφῆς ἰδίας ἐπιλύσεως οὐ γίνεται`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '3,16', quote: `… in welchen sind etliche Dinge schwer zu verstehen, welche die Ungelehrigen und Leichtfertigen verdrehen, wie auch die andern Schriften, zu ihrer eigenen Verdammnis.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,30–31', quote: `Da lief Philippus hinzu und hörte, daß er den Propheten Jesaja las, und sprach: Verstehst du auch, was du liesest? Er aber sprach: Wie kann ich, so mich nicht jemand anleitet?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '4,14', quote: `… auf daß wir nicht mehr Kinder seien und uns wägen und wiegen lassen von allerlei Wind der Lehre durch Schalkheit der Menschen und Täuscherei, womit sie uns erschleichen zu verführen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '2,24.27', quote: `Was ihr nun gehört habt von Anfang, das bleibe bei euch … Und die Salbung, die ihr von ihm empfangen habt, bleibt bei euch, und ihr bedürfet nicht, daß euch jemand lehre …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Nehemia', ref: '8,8', quote: `Und sie lasen im Gesetzbuch Gottes klar und verständlich, daß man verstand, was gelesen ward.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Maleachi', ref: '2,7', quote: `Denn des Priesters Lippen sollen die Lehre bewahren, daß man aus seinem Munde das Gesetz suche; denn er ist ein Engel des HERRN Zebaoth.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche will, dass jeder Gläubige die Bibel liest, auswendig lernt und betet – die Sonntagsschulbewegung des hl. Habib Girgis und die Bibelstunden Papst Schenudas III. sind dafür berühmt. Aber sie liest die Schrift **gemeinsam**: mit dem Glaubensbekenntnis, der Liturgie und den Vätern. Der Heilige Geist ist der ganzen Kirche gegeben; er widerspricht sich nicht. Wo eine private Auslegung dem gemeinsamen Glauben der Kirche aller Zeiten widerspricht, ist Demut geboten.`,
    detail: `Schon im 5. Jahrhundert beschrieb Vinzenz von Lérins das Problem, das die Reformation neu aufwarf: Weil die Schrift so tief ist, versteht sie nicht jeder im selben Sinn – „der eine so, der andere anders, sodass sie so viele Auslegungen zuzulassen scheint, wie es Ausleger gibt". Novatian, Arius, Pelagius – alle beriefen sich auf die Schrift. Darum braucht die Auslegung eine Richtschnur: den Glauben der Kirche.

Die Erfahrung der Reformation bestätigt das: Luther und Zwingli, beide gelehrte, fromme, schriftgebundene Männer, konnten sich beim Marburger Religionsgespräch (1529) nicht über die Worte „Das ist mein Leib" einigen. Es folgten Täufer, Spiritualisten und Antitrinitarier – jeder mit der Bibel in der Hand. Heute gibt es tausende protestantische Denominationen, die sich gerade in Heilsfragen widersprechen: Was geschieht in der Taufe? Ist Christus im Abendmahl gegenwärtig? Kann man das Heil verlieren?

Die Kirche hat der Bibel nie misstraut, sondern dem isolierten Menschen. Der hl. Antonius, Vater der Mönche, war ein koptischer Bauernsohn; er hörte im Gottesdienst das Evangelium vorlesen und setzte es sofort um (Athanasius, Leben des Antonius 2). So sieht orthodoxe „Laienbibel" aus: Die Schrift wird in der Kirche gehört und im Leben vollzogen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,5', year: '434', quote: `Wegen der Tiefe der Heiligen Schrift nehmen sie nicht alle in ein und demselben Sinn an, sondern der eine legt ihre Worte so aus, der andere anders, sodass sie beinahe so viele Auslegungen zuzulassen scheint, wie es Ausleger gibt.`, translation: 'eigene Übersetzung (nach NPNF II/11)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '2', quote: `Antonius betritt die Kirche, als gerade das Evangelium verlesen wird: „Willst du vollkommen sein, so gehe hin, verkaufe, was du hast, und gib's den Armen" (Mt 19,21) – und er tut es.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Hl. Habib Girgis', work: 'Grundzüge der Glaubenslehren der koptisch-orthodoxen Kirche (arab. Ḫulāṣat al-uṣūl al-īmāniyya fī muʿtaqadāt al-kanīsa al-qibṭiyya al-urṯūḏuksiyya)', year: '1919', note: 'Arabischer Titel und Jahr (2 Bde., Kairo 1919) per Bibliothekskatalog bestätigt (Websuche Nov. 2026).', quote: `Katechetische Darstellung des Glaubens, die die Schriftlesung der Gläubigen mit der Lehre der Kirche verbindet.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wir sollen die Bibel alle lesen – aber nicht allein auslegen. Petrus sagt: „Keine Weissagung der Schrift geschieht aus eigener Auslegung" (2 Petr 1,20), und manches bei Paulus ist „schwer zu verstehen" und wird verdreht (2 Petr 3,16). Der Heilige Geist ist der ganzen Kirche gegeben, nicht nur mir. Das Ergebnis der Selbstauslegung sieht man seit 1529: Luther und Zwingli konnten sich nicht einmal über „Das ist mein Leib" einigen.`,
  keyPoints: [
    `**2 Petr 1,20 und 3,16:** Die Schrift selbst warnt vor eigenmächtiger Auslegung und vor dem Verdrehen schwieriger Stellen.`,
    `**Apg 8,31; Lk 24,45; Neh 8,8:** Das biblische Muster ist Lesen mit Anleitung durch die von Gott Beauftragten.`,
    `**1 Joh 2,27 im Kontext:** Die Salbung bindet an das, „was ihr gehört habt von Anfang an" (2,24) – die apostolische Lehre.`,
    `**Der Geist ist der Kirche gegeben** (Joh 16,13; Apg 15,28) und widerspricht sich nicht.`,
    `**Die Früchte:** Marburg 1529, Täufer, Antitrinitarier, heute tausende Denominationen, die sich in Heilsfragen widersprechen.`,
    `**Orthodoxie ist nicht bibelfeindlich:** Koptische Bibelübersetzungen schon im 3./4. Jahrhundert, Sonntagsschulen, Bibelstunden.`,
  ],
  voices: [
    {
      person: 'vinzenz-lerin',
      role: 'als Analytiker des Auslegungsproblems',
      text: `Vinzenz stellt im Jahr 434 die Frage, die jeder Protestant und jeder Orthodoxe beantworten muss: Wenn der Kanon der Schrift vollständig ist und für alles genügt – warum braucht man dann noch die Autorität der kirchlichen Auslegung? Seine Antwort: weil Novatian, Sabellius, Donatus, Arius, Eunomius, Pelagius und Nestorius alle die Schrift zitierten, aber jeder anders. Die Häretiker „wandern durch die Bücher" der Schrift und reißen Verse aus dem Zusammenhang.

Darum soll man die Schrift nach der Richtschnur des kirchlichen Glaubens auslegen: was überall, immer und von allen geglaubt wurde. Vinzenz ist kein Gegner der Schrift – er ist ihr Anwalt gegen ihren Missbrauch.`,
      sources: [
        { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,4–6', quote: `Frage nach der Notwendigkeit der kirchlichen Auslegung trotz vollständigen Kanons; Antwort mit Hinweis auf die vielen Häretiker, die sich auf die Schrift beriefen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger, der Laien zum Bibellesen drängte',
      text: `Kaum ein Kirchenvater hat die Laien so eindringlich zum Lesen der Schrift ermahnt wie Johannes Chrysostomus: Man solle sich Bücher anschaffen, die Arzneien für die Seele sind, und zu Hause nachlesen, was in der Kirche gepredigt wurde. Unkenntnis der Schrift sei die Ursache vieler Übel.

Aber derselbe Chrysostomus legt die Schrift als Bischof in der Liturgie aus und warnt vor denen, die sich anmaßen, ohne Demut und ohne die Lehre der Kirche zu urteilen. Bibellesen und kirchliche Auslegung gehören für ihn zusammen wie Essen und Verdauen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Kolosserbrief', ref: 'Homilie 9', quote: `Aufforderung an Laien, sich Bücher der Schrift als „Arzneien für die Seele" anzuschaffen und zu Hause zu lesen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'habib-girgis',
      role: 'als Erneuerer der koptischen Katechese',
      text: `Der hl. Habib Girgis gründete Anfang des 20. Jahrhunderts die koptische Sonntagsschulbewegung, weil er sah, dass viele Kopten ihren Glauben nicht kannten und dadurch anfällig für fremde Missionsbewegungen waren. Seine Antwort war nicht, den Menschen die Bibel wegzunehmen, sondern sie ihnen **mit** der Lehre der Kirche in die Hand zu geben: Bibelkenntnis, Katechismus, Liturgieverständnis, Heiligenleben. Generationen von Kopten, darunter Papst Schenuda III., sind aus dieser Bewegung hervorgegangen.`,
    },
    {
      person: 'antonius',
      role: 'als einfacher Christ, der die Schrift in der Kirche hörte',
      text: `Antonius war Sohn christlicher Bauern in Oberägypten und konnte nach der Überlieferung kaum lesen. Er hörte das Wort „Willst du vollkommen sein …" im Gottesdienst und tat es. Sein Leben zeigt, dass die Schrift in der Kirche nicht „verschlossen", sondern lebendig wird – nicht durch gelehrte Privatauslegung, sondern durch gehorsames Hören im Leib Christi.`,
    },
    {
      person: 'john-whiteford',
      role: 'als ehemaliger Protestant',
      text: `Whiteford weist darauf hin, dass die Vielfalt protestantischer Lehren kein Zufall, sondern die logische Folge des Prinzips ist: Wenn jeder Einzelne letzte Instanz der Auslegung ist, gibt es kein Verfahren, um Auslegungsstreitigkeiten verbindlich zu lösen – außer der Gründung einer neuen Gemeinde. Protestanten, so Whiteford, lesen die Bibel faktisch immer durch die Brille ihrer eigenen Tradition; der Unterschied ist nur, dass diese Tradition jung ist und sich selbst nicht als Tradition erkennt.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Whiteford', work: 'Sola Scriptura: An Orthodox Analysis of the Cornerstone of Reformation Theology', year: '1996', quote: `Auch Protestanten lesen die Schrift durch eine Tradition; Sola Scriptura führt mangels verbindlicher Auslegungsinstanz zur Zersplitterung.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'salbung-lehrt-alles',
      objection: `„1 Joh 2,27: ‚Ihr bedürfet nicht, daß euch jemand lehre, sondern wie euch die Salbung allerlei lehrt.' Der Geist lehrt jeden Gläubigen direkt – ohne Priester."`,
      objectionBy: 'Wayne Grudem / charismatische Ausleger',
      answer: `Johannes schreibt diesen Satz in einem Lehrbrief – er belehrt sie also gerade! Gemeint ist: Ihr braucht die neuen Lehrer nicht, die euch verführen wollen (2,26). Der Maßstab steht drei Verse vorher: „Was ihr gehört habt von Anfang, das bleibe bei euch" (2,24). Die Salbung hält im ursprünglichen apostolischen Glauben fest – gegen die, die die Gemeinschaft verlassen haben (2,19).`,
      followUps: [
        {
          id: 'geist-in-jedem',
          objection: `„Trotzdem: Der Geist wohnt in jedem Gläubigen. Warum sollte ich einen Priester oder die Väter brauchen, um die Bibel zu verstehen?"`,
          objectionBy: 'R. C. Sproul',
          answer: `Derselbe Geist wohnte auch in den Gläubigen der vergangenen Jahrhunderte – in Athanasius, Basilius, Kyrill und in Millionen Märtyrern. Wenn du auf den Geist hören willst, dann höre ihn in der *ganzen* Kirche, nicht nur in dir selbst. Der Geist widerspricht sich nicht: Wenn deine Auslegung dem einmütigen Verständnis der Kirche von 1500 Jahren widerspricht, ist es wahrscheinlicher, dass du irrst, als dass alle anderen irrten.`,
          questionsBack: [
            `Wenn der Geist dich und einen ebenso aufrichtigen Bruder zu gegensätzlichen Auslegungen führt – wer von euch hat ihn missverstanden?`,
          ],
          followUps: [
            {
              id: 'athanasius-contra-mundum',
              objection: `„Die Mehrheit kann irren. Athanasius stand gegen die ganze Welt – ‚Athanasius contra mundum'. Genau das ist das Recht des Einzelnen mit der Schrift."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Athanasius ist das Gegenteil eines Privatauslegers. Er verteidigte nicht eine neue eigene Deutung, sondern den Glauben des Konzils von Nizäa und „die Überlieferung, Lehre und den Glauben der katholischen Kirche von Anfang an" gegen eine vorübergehende, kaiserlich gestützte Mehrheit. „Athanasius gegen die Welt" heißt: Überlieferung gegen Neuerung – nicht Einzelner gegen Kirche.`,
              voices: [
                {
                  person: 'athanasius',
                  role: 'als Verteidiger der Überlieferung',
                  text: `Athanasius beruft sich immer wieder darauf, dass er nichts Neues lehre: Die Väter von Nizäa hätten den Glauben nicht erfunden, sondern bezeugt, was sie empfangen hatten. Für ihn ist die Neuerung das Kennzeichen der Häresie, die Kontinuität das Kennzeichen der Wahrheit.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Beschlüsse der Synode von Nizäa (De Decretis)', ref: '27', quote: `Athanasius betont, dass der nizänische Glaube von Vätern zu Vätern überliefert wurde, während die Arianer keinen Vater für ihre Lehre nennen können.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'klar-in-heilsfragen',
      objection: `„Die Schrift ist in den heilsnotwendigen Dingen klar (Ps 119,105; 2 Tim 3,15). Die Unterschiede unter Protestanten betreffen nur Nebensachen."`,
      objectionBy: 'Wayne Grudem',
      answer: `Sind die Taufe (Joh 3,5; Mk 16,16), das Abendmahl (1 Kor 11,29: wer den Leib nicht unterscheidet, isst sich zum Gericht), die Frage, ob man das Heil verlieren kann, und die Rechtfertigung selbst Nebensachen? Genau darüber streiten Lutheraner, Reformierte, Baptisten, Methodisten und Pfingstler. Luther sagte Zwingli in Marburg sinngemäß: Ihr habt einen anderen Geist als wir. Das klingt nicht nach einer Nebensache.`,
      sources: [
        { kind: 'sonstiges', work: 'Marburger Religionsgespräch', year: '1529', quote: `Luther und Zwingli einigten sich in 14 von 15 Artikeln, nicht aber über die Gegenwart Christi im Abendmahl. Luther schrieb nach den Berichten „Hoc est corpus meum" mit Kreide auf den Tisch.`, status: 'paraphrase', note: 'Das Wort „Ihr habt einen andern Geist als wir" (an Bucer gerichtet) ist in mehreren Berichten überliefert; genauer Wortlaut nicht gesichert.' },
      ],
      followUps: [
        {
          id: 'kernbotschaft-einig',
          objection: `„In der Kernbotschaft – Christus starb für unsere Sünden und ist auferstanden – sind sich alle Protestanten einig."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Gott sei Dank dafür – das verbindet uns tief. Aber zum Evangelium gehört auch, wie man es empfängt: „Tut Buße, und lasse sich ein jeglicher taufen … zur Vergebung der Sünden" (Apg 2,38). Genau das ist strittig. Und „Christus starb und ist auferstanden" bekennen auch die Arianer und heutige Gruppen, die seine Gottheit leugnen – mit der Bibel in der Hand. Selbst der Kern braucht das Bekenntnis der Kirche, um geschützt zu sein.`,
          followUps: [
            {
              id: 'zeugen-kein-argument',
              objection: `„Die Zeugen Jehovas sind kein faires Beispiel – sie haben eine manipulierte Übersetzung und eine autoritäre Organisation."`,
              objectionBy: 'James White',
              answer: `Einverstanden. Aber die Arianer des 4. Jahrhunderts hatten dieselbe griechische Bibel wie Athanasius und waren brillante Exegeten. Besiegt wurden sie nicht durch bessere Einzel-Exegese, sondern durch den Glauben des Konzils von Nizäa, den die Kirche als apostolisch erkannte. Und historisch entstanden die Antitrinitarier des 16. Jahrhunderts (Servet, die Sozinianer) im Umfeld der Reformation – ebenfalls unter Berufung auf die Schrift allein. Das beweist nicht, dass das Prinzip sie verursachte, aber es hatte kein Mittel, sie verbindlich zurückzuweisen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'tu-quoque-entscheidung',
      objection: `„Auch ihr müsst selbst entscheiden, welcher Kirche ihr glaubt. Am Ende urteilt jeder selbst – ihr seid nicht besser dran als wir."`,
      objectionBy: 'R. C. Sproul / Gavin Ortlund',
      answer: `Es ist ein Unterschied, ob ich mit meinem Verstand eine Autorität **erkenne** oder ob ich selbst die letzte Autorität **bin**. Ein Patient wählt seinen Arzt nach vernünftigen Gründen – dann vertraut er dessen Diagnose, statt sich selbst zu operieren. So führt die Vernunft auch zum Glauben an Christus, und dann unterwirft sie sich ihm. Die Kirche hat überprüfbare Kennzeichen: apostolische Sukzession, ununterbrochene Kontinuität, die Liturgie, die Väter.`,
      followUps: [
        {
          id: 'welche-kirche',
          objection: `„Aber welche Kirche? Rom, Konstantinopel und Alexandria behaupten alle, die wahre zu sein. Am Ende ist es doch deine Wahl."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Eine echte Frage – und ich nehme sie ernst. Aber beachte: Alle alten apostolischen Kirchen stimmen **gegen** die protestantische Position überein – bei Eucharistie, Taufe, Priesteramt, Heiligen und Gebet für die Entschlafenen. Ihr Streit betrifft andere Dinge (Chalcedon-Terminologie, Papstprimat, Filioque). Der erste Schritt ist also, zu erkennen, dass der apostolische Glaube sakramental und kirchlich ist. Dann kann man die Unterschiede prüfen – und die koptische Kirche zeigt die Kontinuität mit dem Alexandria des Athanasius und Kyrill, ohne die späteren lateinischen Zusätze.`,
          followUps: [
            {
              id: 'doch-private-wahl',
              objection: `„Dann bleibt am Ende eben doch nur deine private Wahl zwischen Rom und Alexandria."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Die Entscheidung ist persönlich – wie der Glaube an Christus persönlich ist. Aber ihr Maßstab ist nicht mein Geschmack, sondern öffentliche Geschichte: Welche Kirche hat den Glauben der Väter unverändert bewahrt? Eine persönliche Entscheidung *für* eine Autorität ist etwas anderes als eine private Auslegung *gegen* jede Autorität. Nach der Entscheidung lerne ich – wie ein Kind die Muttersprache in der Familie.`,
            },
          ],
        },
      ],
    },
    {
      id: 'laien-bibel-vorenthalten',
      objection: `„Die Hierarchie hat den Laien jahrhundertelang die Bibel vorenthalten – Latein, Verbote, und Tyndale wurde hingerichtet, weil er die Bibel dem Pflugknecht geben wollte."`,
      objectionBy: 'R. C. Sproul',
      answer: `Das ist die Geschichte des spätmittelalterlichen lateinischen Westens, nicht der koptischen Kirche. Die Kopten übersetzten die Bibel schon im 3. und 4. Jahrhundert in die Volkssprache (sahidisch, später bohairisch) – für Bauern und Mönche. Antonius hörte das Evangelium im Gottesdienst in seiner Sprache. Später folgten arabische Übersetzungen. Heute fördern Sonntagsschulen und Bibelstunden das Lesen der Schrift. Wir wollen, dass jeder die Bibel liest – in der Kirche.`,
      followUps: [
        {
          id: 'dann-eigene-schluesse',
          objection: `„Wenn jeder lesen soll, darf er auch zu eigenen Schlüssen kommen – sonst ist das Lesen sinnlos."`,
          objectionBy: 'Wayne Grudem',
          answer: `Natürlich: Persönliches Verstehen, Betrachten und Wachsen in der Schrift ist erwünscht – die Väter sind voll davon. Die Grenze liegt dort, wo eine private Schlussfolgerung dem gemeinsamen Glauben widerspricht: dem Bekenntnis, den Sakramenten. Dann ist Demut gefragt: „Unterwinde sich nicht jedermann, Lehrer zu sein" (Jak 3,1). Das Verstehen wächst *im* Glauben der Kirche, wie ein Kind die Sprache in der Familie lernt und später selbst schöne Gedichte schreibt.`,
          sources: [
            { kind: 'bibel', work: 'Jakobus', ref: '3,1', quote: `Liebe Brüder, unterwinde sich nicht jedermann, Lehrer zu sein, und wisset, daß wir desto mehr Urteil empfangen werden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'laie-mit-schrift',
      objection: `„Ein einfacher Laie, der die Schrift hat, ist mehr zu glauben als Papst und Konzil ohne die Schrift. Konzilien haben geirrt und einander widersprochen – die Schrift nie."`,
      objectionBy: 'Martin Luther (historisch, Leipziger Disputation 1519)',
      answer: `Dem zweiten Teil stimme ich zu: Ein Konzil „ohne die Schrift" hat keine Autorität – die orthodoxen Konzilien verstanden sich ausdrücklich als Ausleger der Schrift. Aber die wirkliche Lage war nie „Laie mit Schrift gegen Konzil ohne Schrift". In Nizäa hatten Arius und Athanasius **dieselbe** Schrift. Und Luther selbst erlebte das zehn Jahre später in Marburg: Zwingli hatte ebenfalls die Schrift – Luther schrieb „Das ist mein Leib" mit Kreide auf den Tisch, und man trennte sich. Wer entscheidet, wenn zwei Laien mit der Schrift einander widersprechen?`,
      detail: `Der Satz aus der Leipziger Disputation (1519) wird meist sinngemäß zitiert; er drückt Luthers Protest gegen eine Kirchenautorität aus, die sich über die Schrift stellte. Diesen Protest kann ein orthodoxer Christ respektieren: Auch für die koptische Kirche steht kein Konzil über dem Wort Gottes.

Die Schwäche des Prinzips zeigte sich aber schnell. Beim **Marburger Religionsgespräch** (1529) konnten Luther und Zwingli sich über die Abendmahlsworte nicht einigen, obwohl beide „die Schrift hatten" und beide sich auf den Heiligen Geist beriefen. Seitdem haben sich Lutheraner, Reformierte, Täufer, Methodisten, Pfingstler usw. jeweils mit Berufung auf die Schrift getrennt.

Die altkirchliche Lösung lautet nicht „Konzil statt Schrift", sondern: **Schrift, gelesen in der Gemeinschaft der Kirche**, deren Auslegung durch die Väter und die von der ganzen Kirche angenommenen Konzilien öffentlich und überprüfbar ist.`,
      sources: [
        { kind: 'gegner', author: 'Martin Luther', work: 'Leipziger Disputation mit Johannes Eck', year: '1519', quote: `Ein einfacher Laie, der die Schrift für sich hat, verdient mehr Glauben als Papst und Konzil ohne die Schrift.`, status: 'paraphrase', note: 'Meist sinngemäß zitiert; der genaue Wortlaut variiert in den Berichten.' },
        { kind: 'fachliteratur', work: 'Marburger Religionsgespräch', year: '1529', quote: `Luther schrieb die Worte „Hoc est corpus meum" (Das ist mein Leib) mit Kreide auf den Tisch und beharrte auf ihrem Wortsinn; Zwingli deutete „ist" als „bedeutet". Die Einigung in der Abendmahlsfrage scheiterte.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn Luther und Zwingli beide die Schrift hatten – wessen Auslegung war „mehr zu glauben"?`,
        `Welches Konzil der Alten Kirche hat nach deiner Ansicht „ohne die Schrift" entschieden?`,
      ],
      followUps: [
        {
          id: 'autoritaet-ohne-unfehlbarkeit',
          objection: `„Wir sind keine Individualisten. Wir haben Bekenntnisse, Kommentare und Lehrer – wir halten sie nur nicht für unfehlbar. Das ist Autorität ohne Unfehlbarkeit, und die reicht."`,
          objectionBy: 'R. C. Sproul',
          answer: `Das ist ein ehrlicher und viel besserer Ansatz als Privatauslegung – und ich schätze ihn. Aber er verschiebt die Frage nur: **Welche** Bekenntnisse und Lehrer? Westminster oder Augsburg, Spurgeon oder Wesley? Wenn sie einander widersprechen, wählt am Ende doch wieder der Einzelne. Die orthodoxe Kirche hält auch keinen einzelnen Bischof für unfehlbar – aber sie hält den gemeinsamen Glauben der Kirche, wie ihn die Väter einmütig bezeugen und die Konzilien formuliert haben, für den vom Geist bewahrten Glauben (Joh 16,13; 1 Tim 3,15).`,
          detail: `R. C. Sproul betont in *Knowing Scripture*, das Recht auf eigene Auslegung sei keine Lizenz zur Verzerrung; der Gläubige solle Lehrer und Kommentare benutzen. Das entspricht der reformatorischen Unterscheidung zwischen Schrift als *norma normans* (normierende Norm) und Bekenntnis als *norma normata* (normierte Norm).

Die Frage ist aber, **wer** zwischen konkurrierenden *normae normatae* entscheidet. Weil sich protestantische Bekenntnisse in Taufe, Abendmahl, Prädestination und Heilsgewissheit widersprechen, bleibt die letzte Instanz praktisch das Urteil des Einzelnen bzw. der Gemeinde, die sich ihr Bekenntnis wählt. Die Orthodoxie dagegen ist nicht unfehlbar in einzelnen Personen, sondern in der Gesamtheit der Kirche: Was die ganze Kirche in Gebet, Sakrament und Bekenntnis angenommen hat, gilt als vom Geist bewahrt.`,
          sources: [
            { kind: 'gegner', author: 'R. C. Sproul', work: 'Knowing Scripture', year: '1977 (überarb. 2009)', quote: `Private Auslegung bedeutet das Recht und die Pflicht jedes Christen, die Schrift selbst zu lesen – nicht die Freiheit, sie nach Belieben zu verdrehen; Lehrer und Kommentare sind dabei unentbehrlich.`, status: 'paraphrase' },
            { kind: 'bibel', work: '1. Timotheus', ref: '3,15', quote: `… die Gemeinde des lebendigen Gottes, ein Pfeiler und Grundfeste der Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'vaeterkonsens-mythos',
              objection: `„Der ‚einmütige Konsens der Väter' ist ein Mythos. Die Väter widersprechen einander ständig – Origenes, Augustinus, Hieronymus, Chrysostomus. Ihr pickt euch die passenden Stellen heraus, genau wie wir."`,
              objectionBy: 'John MacArthur',
              answer: `In Nebenfragen widersprechen sie einander, ja – in der Auslegung einzelner Verse, in Spekulationen (Origenes!). Aber in den Kernfragen ist ihre Übereinstimmung frappierend: Dreieinigkeit, Gottheit Christi, Taufe als Wiedergeburt, Eucharistie als Leib und Blut, Bischofsamt, Gebet für die Entschlafenen. Selbst der anglikanische Patristiker J. N. D. Kelly stellt fest, dass die frühe Eucharistielehre „im Allgemeinen fraglos realistisch" war. Ein Konsens, der Ägypten, Syrien, Kleinasien, Rom und Gallien umspannt, ist kein Rosinenpicken.`,
              voices: [
                {
                  person: 'jnd-kelly',
                  role: 'als anglikanischer Dogmenhistoriker',
                  text: `Kelly zeichnet in *Early Christian Doctrines* die Lehrentwicklung der ersten fünf Jahrhunderte nüchtern nach und benennt Unterschiede zwischen den Vätern offen. Gerade deshalb wiegt sein Befund schwer, dass die Eucharistielehre im Allgemeinen realistisch war und Taufe als Wiedergeburt und Sündenvergebung verstanden wurde – ein Urteil, das nicht aus orthodoxer Parteinahme kommt.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'J. N. D. Kelly', work: 'Early Christian Doctrines', year: '1958 (5. Aufl. 1977)', quote: `Die frühe Eucharistielehre war im Allgemeinen fraglos realistisch; die Taufe galt als Mittel der Wiedergeburt und Sündenvergebung.`, status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Nenne mir einen Vater der ersten drei Jahrhunderte, der das Abendmahl rein symbolisch verstand und die Taufwiedergeburt ablehnte.`,
              ],
            },
          ],
        },
        {
          id: 'kopten-verwerfen-chalcedon',
          objection: `„Eure ‚einmütige Kirche' gibt es gar nicht: Die Kopten verwerfen das Konzil von Chalcedon, das die Griechen und Lateiner für ökumenisch halten. Auch ihr seid über die Auslegung gespalten – seit 451."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Das ist der stärkste Einwand, und ich nehme ihn ernst: 451 ist eine echte Wunde. Aber schau, was diese Spaltung **nicht** bewirkt hat: Kopten und Byzantiner haben 1500 Jahre getrennt gelebt und doch dieselben sieben Mysterien, dieselbe Liturgiestruktur, dieselbe Verehrung der Theotokos, dieselben Väter bis Kyrill. In den offiziellen Dialogen (1989/1990) erklärten beide Seiten, im Glauben an Christus denselben Inhalt in unterschiedlicher Terminologie zu bekennen. Der Protestantismus dagegen hat sich innerhalb einer Generation über den **Inhalt** von Taufe und Abendmahl gespalten.`,
          detail: `Die koptische Kirche lehnte Chalcedon ab, weil sie in der Formel „in zwei Naturen" eine Nähe zum Nestorianismus fürchtete; sie bekennt mit dem hl. Kyrill „die eine fleischgewordene Natur des Gott-Logos" – ohne Vermischung, ohne Verwandlung, ohne Trennung. Die Gemeinsame Kommission der orthodoxen und orientalisch-orthodoxen Kirchen hielt im Anba-Bischoi-Kloster (1989) und in Chambésy (1990) fest, dass beide Familien denselben orthodoxen Glauben bewahrt haben und die Unterschiede wesentlich terminologisch sind.

Das zeigt den Unterschied: Eine Familie, die über die richtige *Sprache* für ein gemeinsames Bekenntnis streitet, ist etwas anderes als Gemeinschaften, die über die *Sache* selbst uneins sind – ob die Taufe rettet, ob Christus im Abendmahl wahrhaft gegenwärtig ist, ob man das Heil verlieren kann.`,
          voices: [
            {
              person: 'shenouda-iii',
              role: 'als Patriarch, der die christologischen Dialoge mittrug',
              text: `Papst Schenuda III. legte großen Wert darauf, dass die koptische Kirche nicht „monophysitisch" ist, sondern mit Kyrill die eine Natur des fleischgewordenen Logos bekennt, in der Gottheit und Menschheit ohne Vermischung und ohne Trennung geeint sind. Er unterstützte die Dialoge, die zeigten, dass die Trennung von 451 mehr auf Begriffen und Missverständnissen als auf einem anderen Christusglauben beruht.`,
              sources: [
                { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Natur Christi (The Nature of Christ)', quote: `Die koptische Kirche bekennt die eine Natur des fleischgewordenen Logos, ohne Vermischung, ohne Vermengung und ohne Trennung, und verwirft sowohl Nestorius als auch Eutyches.`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'konzil', work: 'Gemeinsame Kommission für den theologischen Dialog zwischen der orthodoxen Kirche und den orientalisch-orthodoxen Kirchen – Erste und Zweite Vereinbarte Erklärung', year: '1989 (Anba-Bischoi-Kloster) / 1990 (Chambésy)', quote: `Beide Kirchenfamilien haben stets denselben authentischen orthodoxen christologischen Glauben bewahrt, obwohl sie christologische Begriffe unterschiedlich gebraucht haben.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'auch-ihr-braucht-dialog',
              objection: `„Dann gebt ihr zu: Auch eure Kirche braucht Auslegung, Kommissionen und Dialoge – genau wie wir. Der Unterschied ist nur graduell."`,
              objectionBy: 'James White',
              answer: `Nein, er ist grundsätzlich. Unsere Dialoge suchen, wie man **denselben** überlieferten Glauben gemeinsam ausdrückt – das Glaubensbekenntnis, die Sakramente, die Väter stehen nicht zur Disposition. Im Protestantismus steht der Inhalt selbst zur Debatte, und jede Generation darf die vorige an der eigenen Exegese „reformieren". Ein Familienstreit am gemeinsamen Tisch ist etwas anderes, als bei jeder Meinungsverschiedenheit auszuziehen und ein neues Haus zu bauen.`,
              questionsBack: [
                `Welche Instanz könnte heute einen Streit zwischen Baptisten und Lutheranern über die Taufe verbindlich entscheiden?`,
                `Was bleibt vom Glauben der Alten Kirche übrig, wenn jede Generation das Recht hat, ihn an der eigenen Exegese neu zu prüfen?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn der Heilige Geist jeden Gläubigen in alle Wahrheit führt – warum sind Lutheraner und Baptisten sich über die Taufe uneins?`,
    `Wer hatte in Marburg 1529 den Heiligen Geist auf seiner Seite – Luther oder Zwingli?`,
    `Was bedeutet für dich 2 Petr 1,20: „keine Weissagung der Schrift geschieht aus eigener Auslegung"?`,
    `Wenn deine Auslegung einer Stelle gegen das Verständnis aller Kirchenväter steht – wie wahrscheinlich ist es, dass du recht hast?`,
  ],
  avoid: [
    `Den Eindruck erwecken, Laien sollten die Bibel nicht lesen. Das widerspricht der koptischen Tradition und wirkt abstoßend.`,
    `Die Uneinigkeit der Protestanten hämisch ausschlachten. Sie ist für viele ernsthafte Protestanten selbst ein Schmerz – sprich darüber mit Mitgefühl.`,
    `Behaupten, die Orthodoxen seien sich in allem einig. Es gibt die Spaltung von 451 und Streit über Einzelfragen – ehrlich benennen und den Unterschied zu Heilsfragen erklären.`,
  ],
  concessions: [
    `Die Schrift ist in ihrer Grundbotschaft tatsächlich verständlich, und Gott spricht durch sie zu jedem, der sie mit offenem Herzen liest – das bezeugen auch die Väter.`,
    `Im spätmittelalterlichen Westen war der Zugang der Laien zur Bibel tatsächlich eingeschränkt; der Wunsch der Reformatoren nach einer Volksbibel war berechtigt.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', year: '434', status: 'paraphrase', note: 'Kurz und erstaunlich aktuell.' },
    { kind: 'fachliteratur', author: 'John Whiteford', work: 'Sola Scriptura', year: '1996', status: 'paraphrase' },
    { kind: 'gegner', author: 'R. C. Sproul', work: 'Knowing Scripture', year: '1977', status: 'paraphrase', note: 'Klassische Darstellung des Rechts auf persönliche Auslegung.' },
  ],
  difficulty: 1,
  tags: ['Auslegung', 'Hermeneutik', 'Heiliger Geist', 'Denominationen'],
  related: [
    'sola-scriptura/nur-die-bibel',
    'sola-scriptura/kirche-war-verdorben',
    'sakramente/abendmahl-symbolisch',
    'sakramente/kein-besonderes-priestertum',
    'sakramente/myron-krankensalbung-erfunden',
  ],
};

export default claim;
