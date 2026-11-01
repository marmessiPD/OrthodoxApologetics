import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'keine-hierarchie-noetig',
  title: `„Die Kirche braucht keine Bischöfe – jede Gemeinde ist selbstständig."`,
  proponents: [
    { name: 'Southern Baptist Convention', role: 'Größte protestantische Kirche der USA', work: 'Baptist Faith and Message (2000), Art. VI: die „autonome Ortsgemeinde"' },
    { name: 'Mark Dever', role: 'Baptistischer Pastor, 9Marks', work: `A Display of God's Glory (2001)` },
    { name: 'Wayne Grudem', role: 'Evangelikaler Systematiker', work: 'Systematic Theology (1994), Kap. 47' },
    { name: 'Brüderbewegung', role: 'Freikirchliche Bewegung (seit ca. 1827)', work: 'Ablehnung eines ordinierten Amtes' },
  ],
  steelman: `Im Neuen Testament sind „Bischof" (*episkopos*, Aufseher) und „Ältester" (*presbyteros*) dasselbe Amt: Paulus ruft die **Ältesten** von Ephesus und nennt sie im selben Atemzug **Aufseher** (Apg 20,17.28); Titus soll Älteste einsetzen, denn „ein Bischof soll untadelig sein" (Tit 1,5–7). In Philippi gibt es mehrere „Bischöfe und Diakone" (Phil 1,1). Ein einzelner Bischof über einer Stadt oder gar ein Erzbischof über vielen Gemeinden kommt im Neuen Testament nicht vor. Das letzte Wort in Streitfällen hat die Gemeinde („sage es der Gemeinde", Mt 18,17), und alle Gläubigen sind Priester (1 Petr 2,9). Die spätere Hierarchie ist eine Anpassung an die Verwaltungsstruktur des Römischen Reiches. Sie führte zu Machtmissbrauch und Verweltlichung. Christus allein ist das Haupt der Gemeinde (Kol 1,18) – jede Ortsgemeinde untersteht ihm direkt.`,
  biblical: {
    summary: `Es stimmt: Im Neuen Testament werden *episkopos* und *presbyteros* weitgehend gleich gebraucht. Aber das Neue Testament kennt **keine autonomen Einzelgemeinden**. Über den örtlichen Ältesten stehen die **Apostel** und ihre **Beauftragten**: Timotheus und Titus setzen in mehreren Städten Älteste ein (Tit 1,5), nehmen Anklagen gegen Älteste entgegen (1 Tim 5,19) und ordinieren sie (1 Tim 5,22). In Jerusalem leitet **Jakobus** die Gemeinde (Apg 15,13–21; 21,18; Gal 2,9). Und als ein Lehrstreit die Gemeinden spaltet, entscheidet ein **Konzil** der Apostel und Ältesten verbindlich für alle Gemeinden: „Es gefällt dem Heiligen Geist und uns" (Apg 15,28) – und Paulus überbringt die Beschlüsse „zu halten" (16,4).`,
    detail: `**Überörtliche Autorität im NT:**
- Paulus „ordnete Älteste in jeder Gemeinde" (Apg 14,23) und trägt „die Sorge für alle Gemeinden" (2 Kor 11,28).
- Titus soll „die Städte hin und her mit Ältesten besetzen" (Tit 1,5); Timotheus soll niemandem „die Hände zu bald auflegen" (1 Tim 5,22) und über Anklagen gegen Älteste urteilen (5,19).
- Paulus ordnet von außen Kirchenzucht in Korinth an (1 Kor 5,3–5) und droht, „mit der Rute" zu kommen (4,21).

**Apg 15 – das erste Konzil:** Der Streit um die Beschneidung wird nicht von jeder Gemeinde selbst entschieden. Antiochia schickt Paulus und Barnabas nach Jerusalem; die Apostel und Ältesten beraten; Jakobus fasst zusammen; ein Brief ergeht an die Gemeinden in Antiochia, Syrien und Kilikien (15,23) mit dem Anspruch: „Es gefällt dem Heiligen Geist und uns." Das ist die Urform der synodalen, bischöflichen Kirchenleitung.

**Mt 18,17 („sage es der Gemeinde")** setzt eine Gemeinde mit Leitung voraus, die binden und lösen kann (18,18) – eine Vollmacht, die Christus den Jüngern gibt.

**Allgemeines Priestertum (1 Petr 2,9)** zitiert Ex 19,6: Schon Israel war ein „königliches Priestertum" – und hatte dennoch ein besonderes Priestertum. Beides schließt sich nicht aus.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,28; 16,4', quote: `Denn es gefällt dem heiligen Geist und uns, euch keine Beschwerung mehr aufzulegen als nur diese nötigen Stücke … Wie sie aber durch die Städte zogen, überantworteten sie ihnen, zu halten den Spruch, welcher von den Aposteln und den Ältesten beschlossen war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Titus', ref: '1,5', quote: `Derhalben ließ ich dich in Kreta, daß du solltest vollends ausrichten, was ich gelassen habe, und besetzen die Städte hin und her mit Ältesten, wie ich dir befohlen habe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '5,19.22', quote: `Wider einen Ältesten nimm keine Klage auf außer zwei oder drei Zeugen. … Die Hände lege niemand zu bald auf.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '2,9', quote: `… und erkannten die Gnade, die mir gegeben war, Jakobus und Kephas und Johannes, die für Säulen angesehen waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '13,17', quote: `Gehorchet euren Lehrern und folget ihnen; denn sie wachen über eure Seelen, als die da Rechenschaft dafür geben sollen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lebt die dreigestufte apostolische Ordnung von **Bischof, Presbyter (Priester) und Diakon**, die sich unmittelbar aus der Zeit der Apostel entwickelt hat und um 110 bei Ignatius von Antiochien voll bezeugt ist. Ihr Papst steht in ununterbrochener Nachfolge des Evangelisten Markus. Die Bischöfe leiten nicht als Herren, sondern als Hirten und Diener (1 Petr 5,1–3); wichtige Fragen entscheidet der **Heilige Synod** gemeinschaftlich, wie in Apg 15. Laien sind in das Leben der Kirche eingebunden – an der Wahl des Patriarchen wirken auch gewählte Laienvertreter mit.`,
    detail: `**1. Klemensbrief (um 96, aus Rom an Korinth):** Als in Korinth eine Gruppe die eingesetzten Presbyter absetzte – also „Gemeindeautonomie" praktizierte –, mahnte die Kirche von Rom zur Umkehr: Die Apostel hätten Bischöfe und Diakone eingesetzt und angeordnet, dass bewährte Männer ihnen nachfolgen. Es sei keine geringe Sünde, solche Männer ohne Grund abzusetzen (1 Clem 42; 44).

**Ignatius von Antiochien (um 110):** „Wo der Bischof erscheint, da soll auch die Gemeinde sein, wie da, wo Christus Jesus ist, die katholische Kirche ist" (Smyrn. 8,2). Der Bischof steht „an Gottes Stelle", die Presbyter „an Stelle des Apostelrats" (Magn. 6,1).

**Irenäus (um 180):** Die Lehre der Apostel ist durch die Nachfolge der Bischöfe öffentlich bezeugt; man kann die Bischofslisten der großen Kirchen bis zu den Aposteln zurückverfolgen (Adv. Haer. III,3).

**Alexandrien:** Die koptische Kirche zählt ihre Patriarchen von Markus bis Tawadros II. Hieronymus berichtet, dass in Alexandrien die Presbyter „von Markus bis zu den Bischöfen Heraklas und Dionysius" stets einen aus ihrer Mitte zum Bischof wählten (Ep. 146) – ein Zeugnis für die frühe enge Verbindung von Presbyterium und Bischofsamt in Ägypten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '8,2', year: 'um 110', quote: `Wo der Bischof erscheint, da soll auch die Gemeinde sein, wie da, wo Christus Jesus ist, die katholische Kirche ist.`, original: `ὅπου ἂν φανῇ ὁ ἐπίσκοπος, ἐκεῖ τὸ πλῆθος ἔστω, ὥσπερ ὅπου ἂν ᾖ Χριστὸς Ἰησοῦς, ἐκεῖ ἡ καθολικὴ ἐκκλησία.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Älteste erhaltene Verwendung des Ausdrucks „katholische (allgemeine) Kirche".' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Magnesier', ref: '6,1', year: 'um 110', status: 'paraphrase', quote: `Der Bischof hat den Vorsitz an Gottes Stelle, die Presbyter an Stelle des Apostelrats, und die Diakone sind mit dem Dienst Jesu Christi betraut.` },
      { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '42; 44', year: 'um 96', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 146 (an Evangelus)', ref: '1', status: 'paraphrase', quote: `In Alexandrien wählten die Presbyter von Markus dem Evangelisten bis zu den Bischöfen Heraklas und Dionysius immer einen aus ihrer Mitte, setzten ihn auf eine höhere Stufe und nannten ihn Bischof.`, note: 'Hieronymus will damit die Würde der Presbyter betonen; zugleich bezeugt er das alexandrinische Bischofsamt seit Markus.' },
    ],
  },
  quickAnswer: `Im Neuen Testament gab es keine unabhängigen Einzelgemeinden: Die Apostel und ihre Beauftragten wie Timotheus und Titus setzten Älteste ein und beaufsichtigten sie (Tit 1,5; 1 Tim 5,19–22), und als Streit entstand, entschied ein Konzil für alle Gemeinden: „Es gefällt dem Heiligen Geist und uns" (Apg 15,28). Schon um 110 schreibt Ignatius: „Wo der Bischof ist, da ist die Kirche." Die koptische Kirche bewahrt diese apostolische Ordnung seit dem heiligen Markus.`,
  keyPoints: [
    `**Apg 15:** Das erste Konzil entscheidet verbindlich für viele Gemeinden – das Gegenteil von Gemeindeautonomie.`,
    `**Timotheus und Titus** üben überörtliche Leitung aus: Sie setzen Älteste ein, ordinieren und richten über sie (Tit 1,5; 1 Tim 5,19–22).`,
    `**Jakobus leitet die Jerusalemer Kirche** (Apg 15,13–21; 21,18; Gal 2,9) – ein Vorbild des Ortsbischofs.`,
    `**1 Clem 42–44 (um 96):** Die Apostel setzten Nachfolger ein; die Absetzung legitimer Presbyter durch eine Gemeinde ist Unrecht.`,
    `**Ignatius (um 110):** Bischof, Presbyter und Diakone in den Kirchen Kleinasiens und Syriens – zwei Jahrhunderte vor Konstantin.`,
    `**Ehrlich:** Die Begriffe episkopos/presbyteros sind im NT fließend; die Ordnung hat sich aus der apostolischen Wurzel organisch entfaltet.`,
  ],
  voices: [
    {
      person: 'ignatius-antiochien',
      role: 'als Märtyrerbischof um 110',
      text: `Ignatius schrieb auf dem Weg zu seinem Martyrium in Rom sieben Briefe an Gemeinden in Kleinasien und an die Kirche von Rom. In allen setzt er die Ordnung von einem Bischof, einem Presbyterium und Diakonen als selbstverständlich voraus. Für ihn ist die Einheit mit dem Bischof Ausdruck der Einheit mit Christus: Nur die Eucharistie, die unter dem Bischof oder seinem Beauftragten gefeiert wird, gilt als zuverlässig (Smyrn. 8,1). Er spricht nicht von einer neuen Erfindung, sondern von dem, was die Kirchen bereits leben – nur etwa 15 bis 20 Jahre nach dem Tod des Apostels Johannes.`,
      sources: [{ kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Briefe an die Smyrnäer, Magnesier, Trallianer und Philadelphier', status: 'paraphrase' }],
    },
    {
      person: 'clemens-rom',
      role: 'als Zeuge der Generation nach den Aposteln',
      text: `Der 1. Klemensbrief entstand, als in Korinth einige junge Leute die rechtmäßig eingesetzten Presbyter absetzten. Die Antwort der römischen Kirche ist ein frühes Zeugnis gegen die Vorstellung, eine Gemeinde könne ihre Leitung nach Belieben bestimmen: Die Apostel haben in den Städten ihre Erstlinge als Bischöfe und Diakone eingesetzt, und sie haben Vorsorge getroffen, dass nach ihrem Tod andere bewährte Männer den Dienst übernehmen. Die Ordnung der Kirche spiegelt die Ordnung Gottes.`,
      sources: [{ kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '40–44', status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der apostolischen Nachfolge',
      text: `Irenäus argumentiert gegen Gnostiker, die sich auf Geheimtraditionen beriefen: Wenn die Apostel verborgene Lehren gehabt hätten, hätten sie sie denen anvertraut, denen sie die Kirchen übergaben – den Bischöfen. Man kann die Reihe der Bischöfe in allen Kirchen aufzählen; er nennt beispielhaft die römische Liste bis zu seiner Zeit. Die Nachfolge ist für ihn der öffentliche Garant der Wahrheit.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1–3', status: 'paraphrase' }],
    },
    {
      person: 'pelikan',
      role: 'als Dogmenhistoriker',
      text: `Pelikan, ursprünglich lutherischer Pastor, kam durch das Studium der Kirchengeschichte zur Orthodoxie. Er zeigte, dass das Bischofsamt im 2. Jahrhundert nicht als Machtapparat, sondern als Garant der Kontinuität mit den Aposteln verstanden wurde – gemeinsam mit dem Glaubensbekenntnis und dem Kanon der Schrift. Wer den Kanon des Neuen Testaments annimmt, nimmt das Ergebnis eines Prozesses an, den genau diese bischöflich geleitete Kirche getragen hat.`,
      sources: [{ kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Christian Tradition, Bd. 1', year: '1971', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'bischof-gleich-aeltester',
      objection: `„Apg 20,17.28 und Tit 1,5–7 beweisen: Bischof und Ältester sind dasselbe. Also gibt es kein höheres Bischofsamt – eure Hierarchie ist spätere Erfindung."`,
      objectionBy: 'Wayne Grudem',
      answer: `Einverstanden: Die Wörter waren damals noch nicht getrennt – das gibt die orthodoxe Forschung offen zu. Aber das Amt der überörtlichen Aufsicht gab es trotzdem: Es wurde von den Aposteln und ihren Beauftragten wie Timotheus und Titus ausgeübt, die die Ältesten einsetzten und beaufsichtigten. Als die Apostel starben, ging diese Aufsicht auf Nachfolger über, die man dann „Bischof" nannte. Die Funktion ist apostolisch, nur der Name hat sich spezialisiert.`,
      questionsBack: [`Wer setzte in Tit 1,5 die Ältesten ein – die Gemeinde selbst oder Titus im Auftrag des Paulus?`, `Welches Amt hatte Timotheus, wenn er Anklagen gegen Älteste annehmen durfte?`],
      followUps: [
        {
          id: 'timotheus-war-apostelschueler',
          objection: `„Timotheus und Titus waren apostolische Gehilfen mit einer einmaligen Aufgabe – kein Modell für spätere Bischöfe."`,
          objectionBy: 'Baptistischer Theologe',
          answer: `Woher weißt du, dass ihre Aufgabe einmalig war? Paulus gibt Timotheus ausdrücklich den Auftrag, die Lehre an „treue Menschen" weiterzugeben, „die tüchtig sind, auch andere zu lehren" (2 Tim 2,2) – das sind schon vier Generationen. Und die Kirche des 2. Jahrhunderts hat genau so gehandelt. Wenn die Gemeinden um 110 überall Bischöfe hatten, ohne dass irgendwo ein Protest überliefert ist, ist die einfachste Erklärung, dass sie diese Ordnung von den Aposteln übernommen hatten.`,
          sources: [
            { kind: 'bibel', work: '2. Timotheus', ref: '2,2', quote: `Und was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'ignatius-uebertreibt',
              objection: `„Ignatius übertreibt das Bischofsamt gerade deshalb so, weil es neu und umstritten war. Und in Rom gab es wahrscheinlich bis ins 2. Jahrhundert gar keinen Einzelbischof."`,
              objectionBy: 'Kirchenhistoriker (vgl. Peter Lampe)',
              answer: `Dass die Ordnung sich unterschiedlich schnell ausprägte – in Rom vielleicht etwas später als in Syrien und Kleinasien –, kann man zugeben. Aber Ignatius schreibt an sechs verschiedene Gemeinden und setzt überall Bischöfe voraus; er nennt sie namentlich (z. B. Polykarp von Smyrna, Onesimus von Ephesus). Und selbst wo zunächst ein Kollegium von Presbytern leitete, war es nie eine „autonome Gemeinde", sondern stand in Gemeinschaft mit den anderen Kirchen und unter apostolischer Überlieferung (1 Clem).`,
            },
          ],
        },
      ],
    },
    {
      id: 'christus-allein-haupt',
      objection: `„Christus allein ist das Haupt der Gemeinde (Kol 1,18). Ein Bischof oder Papst schiebt sich zwischen Christus und die Gläubigen."`,
      objectionBy: 'Brüdergemeinde-Ältester',
      answer: `Christus ist das Haupt – und gerade er hat Apostel gesandt (Joh 20,21), Hirten gegeben (Eph 4,11) und Älteste einsetzen lassen. Auch deine Gemeinde hat Älteste, die leiten und lehren; schieben die sich zwischen Christus und dich? Der Bischof ist nicht ein zweites Haupt, sondern Diener des einen Hauptes (1 Petr 5,1–4: „Älteste … weidet die Herde Christi … wenn erscheinen wird der Erzhirte").`,
      sources: [
        { kind: 'bibel', work: '1. Petrus', ref: '5,2–4', quote: `Weidet die Herde Christi, so euch befohlen ist, und sehet wohl zu, nicht gezwungen, sondern williglich … nicht als die übers Volk herrschen, sondern werdet Vorbilder der Herde. So werdet ihr, wenn erscheinen wird der Erzhirte, die unverwelkliche Krone der Ehren empfangen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'machtmissbrauch',
          objection: `„Aber die Geschichte der Bischöfe ist eine Geschichte von Macht, Reichtum und Missbrauch."`,
          objectionBy: 'Freikirchlicher Pastor',
          answer: `Es gab Missbrauch – das gibt die Kirche zu, und Christus wird jeden Hirten richten. Aber Missbrauch hebt den rechten Gebrauch nicht auf; auch unabhängige Gemeinden kennen autoritäre Pastoren, Spaltungen und Skandale – oft ohne jede Instanz, die eingreifen könnte. Die koptische Kirche hat Bischöfe hervorgebracht, die Märtyrer, Mönche und Väter der Armen waren. Und die bischöfliche Ordnung mit ihrem Synod ist gerade ein Schutz gegen Willkür Einzelner.`,
          followUps: [
            {
              id: 'zersplitterung',
              objection: `„Unsere Gemeinden sind frei und lebendig. Wozu brauchen wir eine übergeordnete Struktur?"`,
              objectionBy: 'Freikirchlicher Pastor',
              answer: `Für die Einheit im Glauben. Ohne verbindliche Leitung über die Ortsgemeinde hinaus gibt es keine Instanz, die in Lehrstreitigkeiten wie in Apg 15 entscheiden kann – das Ergebnis ist die Zersplitterung in unzählige Gemeinden und Denominationen mit widersprüchlichen Lehren. Jesus betete, „dass sie alle eins seien" (Joh 17,21). Die koptische Kirche ist seit fast 2000 Jahren eine Kirche – mit einem Glauben, einer Liturgie und einer Hierarchie.`,
              questionsBack: [`Wer entscheidet in deiner Gemeinde verbindlich, wenn zwei Älteste unterschiedliche Lehren über die Taufe vertreten – und wer, wenn die ganze Gemeinde irrt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'reichsverwaltung',
      objection: `„Die Bischofshierarchie mit Metropoliten und Patriarchen ist einfach die Verwaltung des Römischen Reiches, die die Kirche nach Konstantin kopiert hat."`,
      objectionBy: 'Kirchenkritischer Evangelikaler',
      answer: `Die Diözesangliederung nach Provinzen wurde tatsächlich teilweise an die Reichsverwaltung angelehnt – das ist eine Frage der Organisation. Aber das Bischofsamt selbst ist um 110 bezeugt, 200 Jahre vor Konstantin, in einer verfolgten Kirche ohne staatliche Macht. Und der Bischof von Alexandrien hatte schon vor dem Konzil von Nizäa (325) Autorität über Ägypten, Libyen und die Pentapolis – das Konzil bestätigte einen „alten Brauch" (Kanon 6).`,
      sources: [
        { kind: 'konzil', work: 'Konzil von Nizäa, Kanon 6', year: '325', quote: `Die alten Gebräuche in Ägypten, Libyen und der Pentapolis sollen in Kraft bleiben, dass der Bischof von Alexandrien über alle diese Gewalt habe, da dies auch für den Bischof von Rom Brauch ist.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kopten-unter-verfolgung',
          objection: `„Trotzdem: Eine Hierarchie macht eine Kirche schwerfällig und politisch."`,
          objectionBy: 'Freikirchlicher Pastor',
          answer: `Die koptische Kirche hat ihre Hierarchie gerade unter Verfolgung bewahrt – unter Römern, Byzantinern, Kalifen und Mamluken, oft ohne jede politische Macht. Ihre Bischöfe waren häufig Mönche aus der Wüste. Wäre die Hierarchie bloß ein politisches Konstrukt, hätte sie unter so vielen feindlichen Herrschern nicht überlebt.`,
        },
      ],
    },
    {
      id: 'allgemeines-priestertum',
      objection: `„1 Petr 2,9: ‚Ihr seid das königliche Priestertum.' Alle Gläubigen sind Priester. Eine besondere Priesterkaste widerspricht dem Neuen Testament."`,
      objectionBy: 'Mark Dever / Wayne Grudem',
      answer: `Petrus zitiert Ex 19,6 – ein Wort, das ganz Israel galt. Und doch hatte Israel innerhalb dieses priesterlichen Volkes ein besonderes Priestertum. Beides schließt sich nicht aus: Das ganze Volk ist priesterlich, weil es Gott Lob und das eigene Leben darbringt (Röm 12,1); der geweihte Dienst steht im Dienst dieses Volkes. In der koptischen Liturgie handelt die ganze Gemeinde mit – sie antwortet, betet und bestätigt sogar die Weihe mit dem Ruf „Axios" (Er ist würdig).`,
      sources: [
        { kind: 'bibel', work: '2. Mose', ref: '19,6', quote: `Und ihr sollt mir ein priesterlich Königreich und ein heiliges Volk sein.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'christus-einziger-priester',
          objection: `„Hebr 7–10 zeigt: Christus ist der einzige Hohepriester, sein Opfer ist ein für alle Mal geschehen. Jeder menschliche Priester stellt das in Frage."`,
          objectionBy: 'Baptistischer Theologe',
          answer: `Die Priester der Kirche bringen kein zweites Opfer, sie dienen dem einen Priestertum Christi als „Haushalter über Gottes Geheimnisse" (1 Kor 4,1). Paulus beschreibt seinen eigenen Dienst mit priesterlicher Sprache: Er „dient priesterlich dem Evangelium Gottes", damit die Heiden ein Gott wohlgefälliges Opfer werden (Röm 15,16). Christus ist der Priester; der geweihte Diener leiht ihm Hände und Stimme.`,
          voices: [
            {
              person: 'chrysostomus',
              role: 'als Verfasser der Schrift über das Priestertum',
              text: `Chrysostomus beschreibt in „Über das Priestertum" die Würde des Priesteramts gerade darin, dass nicht der Mensch, sondern Christus durch ihn handelt: Was der Priester auf Erden vollzieht, bestätigt Gott im Himmel. Er betont zugleich die erschreckende Verantwortung des Amtes – es ist Dienst, nicht Herrschaft.`,
              sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über das Priestertum (De sacerdotio)', ref: 'III,4–5', year: 'um 386', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'hiereus-nie-fuer-amt',
              objection: `„Das Neue Testament nennt Gemeindeleiter nie *hiereus* (Opferpriester), sondern nur *presbyteros* (Ältester). Das Priesteramt kam erst später."`,
              objectionBy: 'Wayne Grudem',
              answer: `Das stimmt sprachlich, und das geben wir zu – das deutsche Wort „Priester" kommt übrigens selbst von *presbyteros*. Aber sehr früh verbindet die Kirche das Amt mit priesterlicher Ordnung: Klemens von Rom vergleicht um 96 die Ordnung der Gemeinde mit der Ordnung von Hohepriester, Priestern und Leviten (1 Clem 40–44), und die Didache nennt die Eucharistie das reine Opfer aus Mal 1,11 (Didache 14). Das ist keine mittelalterliche Erfindung, sondern Auslegung der ersten Generationen.`,
              sources: [
                { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre)', ref: '14,3', year: 'um 100', status: 'paraphrase', quote: `Denn dies ist das vom Herrn gesagte Wort: An jedem Ort und zu jeder Zeit soll man mir ein reines Opfer darbringen (Mal 1,11).` },
                { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '40–44', year: 'um 96', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'didache-gemeindewahl',
                  objection: `„Gerade die Didache sagt: ‚Wählt euch Bischöfe und Diakone, würdig des Herrn' (Didache 15,1). Die Gemeinde wählt – nicht ein Bischof setzt ein. Das ist Gemeindeautonomie!"`,
                  objectionBy: 'Freikirchlicher Pastor',
                  answer: `Ein guter Punkt – und auch in der koptischen Kirche wirkt das Volk mit: Bei der Wahl des Papstes stimmen Klerus und Laien ab, und jede Weihe wird vom Volk mit „Axios" bestätigt. Aber Wahl ist nicht Weihe. Schon in Apg 6,3–6 wählt die Gemeinde die Sieben aus, und dann legen die Apostel ihnen die Hände auf. Wahl durch das Volk und Handauflegung durch die apostolischen Hirten gehören zusammen – die Didache bestätigt das eine, ohne das andere zu leugnen.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '6,3.6', quote: `Darum, ihr lieben Brüder, sehet unter euch nach sieben Männern … Diese stellten sie vor die Apostel und beteten und legten die Hände auf sie.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zwei-oder-drei',
      objection: `„Mt 18,20: ‚Wo zwei oder drei versammelt sind in meinem Namen, da bin ich mitten unter ihnen.' Wo Gläubige sich versammeln, ist Kirche – dazu braucht es keinen Bischof."`,
      objectionBy: 'Ältester der Brüderbewegung',
      answer: `Christus ist im gemeinsamen Gebet wirklich gegenwärtig – das bestreitet niemand. Aber Mt 18,15–20 handelt von Gemeindezucht: „Hört er die nicht, so sage es der Gemeinde" (18,17), und die Gemeinde hat Vollmacht zu binden und zu lösen (18,18). Der Vers beschreibt eine Kirche mit Ordnung und Autorität, nicht die Selbstgenügsamkeit jeder Kleingruppe. Ignatius sagt wenig später: Wo der Bischof ist, da soll die Gemeinde sein.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '18,17–18', quote: `Hört er die nicht, so sage es der Gemeinde … Wahrlich ich sage euch: Was ihr auf Erden binden werdet, soll auch im Himmel gebunden sein.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'apg-15-ganze-gemeinde',
          objection: `„Beim Apostelkonzil (Apg 15) entschied ‚die ganze Gemeinde' mit. Das ist Gemeindeprinzip, keine Hierarchie."`,
          objectionBy: 'Baptistischer Theologe',
          answer: `Lies genau: „Die Apostel und die Ältesten kamen zusammen, über diese Rede sich zu beraten" (15,6); Jakobus fällt das Urteil (15,19); die Gemeinde stimmt zu. Dann werden Beschlüsse mit dem Satz „Es gefällt dem heiligen Geist und uns" an die Gemeinden in Antiochia, Syrien und Kilikien geschickt (15,23.28), und Paulus übergibt sie den Städten „zu halten" (16,4). Das ist überörtliche, verbindliche Autorität – das Gegenteil von Gemeindeautonomie.`,
          sources: [
            { kind: 'bibel', work: 'Apostelgeschichte', ref: '16,4', quote: `Wie sie aber durch die Städte zogen, überantworteten sie ihnen zu halten den Spruch, welcher von den Aposteln und den Ältesten beschlossen war.`, translation: 'Luther 1912', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'bibel-genuegt-fuer-einheit',
              objection: `„Für die Einheit brauchen wir keine Bischöfe – die Bibel genügt. Wir sind in der Schrift vereint."`,
              objectionBy: 'Freikirchlicher Pastor',
              answer: `Die Erfahrung zeigt etwas anderes: Tausende unabhängiger Gemeinschaften berufen sich auf die Bibel allein und sind über Taufe, Abendmahl, Endzeit und Gemeindeordnung uneins. Die Schrift selbst nennt die Kirche „Pfeiler und Grundfeste der Wahrheit" (1 Tim 3,15). Schon Irenäus stellte fest, dass auch die Gnostiker die Schrift zitierten – entscheidend war die Glaubensregel, die in den apostolischen Kirchen bewahrt wurde.`,
              followUps: [
                {
                  id: 'orthodoxe-auch-gespalten',
                  objection: `„Aber ihr Orthodoxen seid doch auch gespalten – Kopten, Griechen, Russen, die Spaltung von Chalcedon. Die Hierarchie hat die Trennung nicht verhindert."`,
                  objectionBy: 'Freikirchlicher Pastor',
                  answer: `Das ist ein ehrlicher Einwand, und die Spaltung von 451 ist eine Wunde. Aber bemerkenswert ist: Nach rund 1500 Jahren Trennung haben orientalische und östliche Orthodoxe dasselbe Glaubensbekenntnis, dieselben sieben Mysterien, dasselbe Bischofsamt und eine ähnliche Liturgie bewahrt – und die gemeinsamen Erklärungen von 1989 und 1990 stellten denselben christologischen Glauben fest. Die Hierarchie macht niemanden sündlos, aber sie gibt den Rahmen, in dem Glaube bewahrt und Versöhnung möglich wird.`,
                  questionsBack: [`Welche unabhängige Gemeindebewegung hat über 1500 Jahre hinweg dasselbe Bekenntnis und dieselbe Gottesdienstordnung bewahrt?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer entschied in Apg 15 über die Beschneidungsfrage – jede Gemeinde für sich oder ein Konzil für alle?`,
    `Welche Autorität hatten Timotheus und Titus über die Ältesten?`,
    `Kennst du eine christliche Gemeinde des 2. Jahrhunderts, die ohne Bischof lebte und dies als apostolische Ordnung verteidigte?`,
    `Wer hat den Kanon des Neuen Testaments bewahrt und abgegrenzt – autonome Ortsgemeinden oder die bischöflich geleitete Kirche (z. B. Athanasius im 39. Osterfestbrief, 367)?`,
  ],
  avoid: [
    `Nicht behaupten, im Neuen Testament seien die Begriffe Bischof und Presbyter schon klar getrennt. Das ist exegetisch nicht haltbar und kostet Glaubwürdigkeit.`,
    `Nicht jede Kritik an Machtmissbrauch abwehren. Christus wird die Hirten richten (Ez 34).`,
    `Nicht mit dem Papsttum argumentieren, als ob die koptische Kirche eine zentralistische Weltkirche wäre. Die koptische Ordnung ist synodal.`,
  ],
  concessions: [
    `Die Ämterbezeichnungen waren im Neuen Testament noch fließend; die Ordnung Bischof–Presbyter–Diakon hat sich in der ersten Hälfte des 2. Jahrhunderts klar ausgeprägt, regional unterschiedlich schnell.`,
    `Die Freikirchen erinnern zu Recht daran, dass alle Gläubigen Verantwortung in der Gemeinde tragen und dass Leitung dienend sein muss.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Die sieben Briefe', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Francis A. Sullivan', work: 'From Apostles to Bishops: The Development of the Episcopacy in the Early Church', year: '2001', status: 'paraphrase', note: 'Katholischer Jesuit; ehrliche Darstellung der allmählichen Entwicklung des Einzelbischofsamts.' },
    { kind: 'gegner', author: 'Mark Dever', work: `A Display of God's Glory`, year: '2001', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kirchenordnung', 'Bischofsamt', 'apostolische Sukzession', 'Kongregationalismus', 'Ignatius'],
  related: ['pfingstbewegung/neue-apostel-propheten', 'sakramente/kein-besonderes-priestertum', 'sola-scriptura/kirche-war-verdorben', 'katholizismus/papstprimat-unfehlbarkeit'],
};

export default claim;
