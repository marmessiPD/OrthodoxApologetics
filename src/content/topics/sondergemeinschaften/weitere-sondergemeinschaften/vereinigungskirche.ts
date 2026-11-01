import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'vereinigungskirche',
  title: `„Sun Myung Moon vollendet die Mission, an der Jesus gescheitert ist."`,
  proponents: [
    { name: 'Sun Myung Moon', role: 'Gründer der Vereinigungskirche (1954, Seoul; 1920–2012)', work: 'Wolli Kangron – Das Göttliche Prinzip (1966; engl. Exposition of the Divine Principle, 1996)' },
    { name: 'Hak Ja Han Moon', role: 'Witwe Moons, Leiterin der Familienföderation für Weltfrieden und Vereinigung', work: 'Lehre von den „Wahren Eltern"' },
    { name: 'Young Oon Kim', role: 'Frühe Theologin und Missionarin der Vereinigungskirche (1914–1989)', work: 'Unification Theology (1980)' },
  ],
  steelman: `Gottes ursprünglicher Plan war eine vollkommene Familie: Adam und Eva sollten in Gottes Liebe reifen, heiraten und sündlose Kinder zeugen. Doch Eva ließ sich von Luzifer verführen – ein geistiger und dann auch körperlicher Fall –, und so wurde die Menschheit in eine gefallene Abstammungslinie hineingeboren. Jesus kam als zweiter Adam, um diese Aufgabe zu erfüllen: eine Braut zu finden, die wahre Familie zu gründen und die Menschheit geistig **und** leiblich wiederherzustellen. Doch Johannes der Täufer, der ihm den Weg hätte bereiten sollen, folgte ihm nicht und zweifelte sogar (Mt 11,3); die religiösen Führer verwarfen ihn. Darum wählte Gott einen zweiten Weg: das Kreuz. Es brachte die **geistige** Erlösung, aber die leibliche Wiederherstellung blieb unvollendet – das sieht man daran, dass auch getaufte Christen weiterhin sündigen und ihre Kinder mit der Erbsünde geboren werden. Jesus selbst weinte über Jerusalem: „Ihr habt nicht gewollt" (Mt 23,37). Deshalb erwarten auch Christen eine Wiederkunft, die vollendet, was offen blieb. Sun Myung Moon und Hak Ja Han sind als „Wahre Eltern" gekommen, um durch die Segnung (Ehesegnung) die Menschen in eine neue, von Gott gesegnete Linie aufzunehmen.`,
  biblical: {
    summary: `Das Neue Testament beschreibt das Kreuz nicht als Notlösung, sondern als Gottes Plan, den Jesus selbst angekündigt hat: „Des Menschen Sohn **muß** viel leiden" (Mk 8,31). Als Petrus ihn davon abhalten wollte, antwortete Jesus: „Hebe dich, Satan, von mir! … du meinst nicht, was göttlich, sondern was menschlich ist" (Mt 16,23). Jesus wurde „aus bedachtem Rat und Vorsehung Gottes" ausgeliefert (Apg 2,23), er gab sein Leben freiwillig hin (Joh 10,17–18) und sprach am Kreuz: „Es ist vollbracht!" (Joh 19,30). Die Erlösung umfasst auch den Leib: Christus ist leiblich auferstanden als „Erstling" der Auferstehung (1 Kor 15,20). Die Wiederkunft ist die Wiederkunft „dieses Jesus", sichtbar auf den Wolken (Apg 1,11; Offb 1,7) – nicht die Geburt eines neuen Messias; und Jesus warnte ausdrücklich vor solchen Ansprüchen (Mt 24,23–27).`,
    detail: `**Gethsemane:** „Ist's möglich, so gehe dieser Kelch von mir; doch nicht wie ich will, sondern wie du willst!" (Mt 26,39) zeigt die wahre menschliche Natur Christi und seine Angst – und zugleich, dass der Wille des Vaters der Weg des Kreuzes war. Bei Johannes sagt Jesus: „Darum bin ich in diese Stunde gekommen" (Joh 12,27).

**Johannes der Täufer:** Er zeigte öffentlich auf Jesus: „Siehe, das ist Gottes Lamm, welches der Welt Sünde trägt!" (Joh 1,29) – also gerade auf den Opfertod. Er nannte sich den „Freund des Bräutigams", dessen Freude erfüllt ist (Joh 3,29–30). Jesus nannte ihn den Größten unter den von Frauen Geborenen (Mt 11,11).

**Die Braut Christi** ist die Kirche (Eph 5,25–32; Offb 19,7; 21,2). Die „wahre Familie" ist nicht eine biologische Linie, sondern die Gemeinschaft derer, die den Willen Gottes tun (Mk 3,35) und in Christus neu geboren sind (Joh 1,12–13).

**Der neue Adam** ist Christus (1 Kor 15,45; Röm 5,12–21); in ihn werden wir durch die Taufe eingepflanzt (Röm 6,3–5; Gal 3,27).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '19,30', quote: `Da nun Jesus den Essig genommen hatte, sprach er: Es ist vollbracht! und neigte das Haupt und verschied.`, original: `τετέλεσται`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '8,31', quote: `Und hob an sie zu lehren: Des Menschen Sohn muß viel leiden und verworfen werden von den Ältesten und Hohenpriestern und Schriftgelehrten und getötet werden und über drei Tage auferstehen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '16,22–23', quote: `Und Petrus nahm ihn zu sich, fuhr ihn an und sprach: HERR, schone dein selbst; das widerfahre dir nur nicht! Aber er wandte sich um und sprach zu Petrus: Hebe dich, Satan, von mir! du bist mir ärgerlich; denn du meinst nicht, was göttlich, sondern was menschlich ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,23', quote: `… denselben (nachdem er aus bedachtem Rat und Vorsehung Gottes ergeben war) habt ihr genommen durch die Hände der Ungerechten und ihn angeheftet und erwürget.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '10,17–18', quote: `Darum liebt mich mein Vater, daß ich mein Leben lasse, auf daß ich's wiedernehme. Niemand nimmt es von mir, sondern ich lasse es von mir selber.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '24,26', quote: `Mußte nicht Christus solches leiden und zu seiner Herrlichkeit eingehen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,11', quote: `… dieser Jesus, welcher von euch ist aufgenommen gen Himmel, wird kommen, wie ihr ihn gesehen habt gen Himmel fahren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,23.27', quote: `So alsdann jemand zu euch wird sagen: Siehe, hier ist Christus! oder: da! so sollt ihr's nicht glauben. … Denn gleich wie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, also wird auch sein die Zukunft des Menschensohnes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist das Kreuz der **Thron des Sieges**. In der Karwoche singt sie Hunderte Male: „Dein ist die Kraft und die Herrlichkeit und der Segen und die Macht in Ewigkeit" – gerade im Angesicht des Leidens. Der hl. Athanasius erklärt in *De Incarnatione*, warum der Tod am Kreuz der angemessene Weg war: öffentlich, vor aller Augen, damit die Auferstehung umso gewisser bezeugt würde, und mit ausgebreiteten Armen, um Juden und Heiden zu sich zu ziehen. Der hl. Kyrill betont, dass Christus freiwillig litt: Er war nicht Opfer eines gescheiterten Plans, sondern der Herr, der sein Leben hingab. Die Erlösung umfasst Seele und Leib – darum empfangen die Gläubigen Leib und Blut Christi in der Eucharistie, das „Pfand der Auferstehung".`,
    detail: `Irenäus von Lyon lehrt die „Rekapitulation": Christus, der neue Adam, durchläuft das ganze menschliche Leben und macht an jeder Stelle gut, was Adam verdarb – durch Gehorsam bis zum Tod am Holz heilt er den Ungehorsam am Baum. Diese Erlösung ist vollständig; ihre volle Offenbarung geschieht bei der Wiederkunft, aber sie fehlt nicht in einem Teil, den ein anderer nachholen müsste. Die Ehe ist für die koptische Kirche ein heiliges Sakrament – aber nicht das Mittel der Erlösung; die Erbsünde wird nicht durch eine neue Abstammungslinie überwunden, sondern durch die Wiedergeburt in der Taufe.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '21–25', quote: `Christus starb nicht einen verborgenen Tod, sondern vor aller Augen am Kreuz, damit seine Auferstehung bezeugt würde; mit ausgebreiteten Armen zieht er Juden und Heiden zu sich.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 10,18 und 19,30', quote: `Christus litt freiwillig; niemand nahm ihm das Leben gegen seinen Willen; am Kreuz vollendete er das Werk der Erlösung.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,18,1; V,21,1', quote: `Christus fasst die ganze Geschichte des Menschen in sich zusammen (Rekapitulation) und besiegt den Feind, der uns in Adam gefangen hatte.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Karwoche (Pascha-Woche)', quote: `„Dein ist die Kraft und die Herrlichkeit und der Segen und die Macht in Ewigkeit. Amen. Emmanuel, unser Gott und unser König."`, original: `Thok te ti gom nem pi oou …`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Geschichte:** Sun Myung Moon (1920–2012), im heutigen Nordkorea geboren, berichtete, Jesus sei ihm 1935 an Ostern erschienen und habe ihn gebeten, seine unvollendete Mission zu vollenden. 1954 gründete er in Seoul die „Gesellschaft des Heiligen Geistes zur Vereinigung des Weltchristentums"; das *Göttliche Prinzip* erschien 1966. Bekannt wurde die Bewegung durch Massenhochzeiten („Segnungen") – etwa 1982 im Madison Square Garden mit über 2.000 Paaren, später mit Zehntausenden. Moon wurde 1982 in den USA wegen Steuerdelikten verurteilt und verbüßte 1984/85 rund 13 Monate Haft; seine Anhänger sahen darin Verfolgung. Nach seinem Tod 2012 zerfiel die Bewegung in mehrere Zweige (Hak Ja Han; die Söhne Hyung Jin Moon und Hyun Jin Moon).`,
    detail: `**Japan:** Nach der Ermordung des früheren Premierministers Shinzo Abe im Juli 2022 durch den Sohn eines Mitglieds, dessen Mutter durch hohe Spenden ruiniert worden war, beantragte die Regierung die Auflösung der japanischen Organisation. Das Bezirksgericht Tokio ordnete sie im März 2025 an; das Obergericht Tokio bestätigte dies am 4. März 2026 und stellte fest, dass über rund 40 Jahre mindestens 506 Menschen durch unlautere Spendenwerbung um insgesamt etwa 7,4 Milliarden Yen gebracht worden seien. Die Organisation legte Sonderbeschwerde beim Obersten Gerichtshof ein; religiöse Aktivitäten als freie Vereinigung bleiben möglich.

**Korea:** Hak Ja Han wurde im September 2025 im Zusammenhang mit einer Bestechungsaffäre um die Frau des früheren Präsidenten Yoon Suk Yeol in Untersuchungshaft genommen; sie bestreitet die Vorwürfe.

**Forschung:** Die Soziologin Eileen Barker zeigte in *The Making of a Moonie* (1984), dass die Vorstellung einer unwiderstehlichen „Gehirnwäsche" nicht zutrifft: Die meisten Interessenten traten nicht bei, und viele Mitglieder verließen die Bewegung nach einigen Jahren wieder.`,
    sources: [
      { kind: 'gegner', author: 'Sun Myung Moon (Vereinigungskirche)', work: 'Exposition of the Divine Principle', year: '1966/1996', ref: 'Teil I, Kap. „Christologie" und „Die Mission des Messias"', quote: `Die Kreuzigung war nicht der ursprüngliche Wille Gottes, sondern ein zweiter Weg, nachdem Jesus wegen des Unglaubens seine Mission nicht erfüllen konnte; das Kreuz brachte nur die geistige Erlösung, die leibliche bleibt dem Herrn der Wiederkunft.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Entscheidung des Obergerichts Tokio zur Auflösung der japanischen Vereinigungskirche', year: '4. März 2026', quote: `Bestätigung der Auflösungsanordnung von 2025; mindestens 506 Geschädigte, rund 7,4 Mrd. Yen über etwa 40 Jahre.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Eileen Barker', work: 'The Making of a Moonie: Choice or Brainwashing?', year: '1984', quote: `Empirische Studie: Die These einer unwiderstehlichen Gehirnwäsche lässt sich nicht halten; die meisten Interessenten traten nicht bei.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jesus ist nicht gescheitert. Er hat sein Leiden selbst angekündigt („Des Menschen Sohn muß viel leiden", Mk 8,31), Petrus, der ihn davon abhalten wollte, mit „Hebe dich, Satan, von mir!" zurückgewiesen und am Kreuz gesagt: „Es ist vollbracht!" (Joh 19,30). Seine leibliche Auferstehung zeigt, dass die Erlösung auch den Leib umfasst. Und wiederkommen wird „dieser Jesus" auf den Wolken (Apg 1,11) – Jesus selbst warnte: Wenn jemand sagt „Hier ist Christus", glaubt es nicht (Mt 24,23).`,
  keyPoints: [
    `**Das Kreuz war Plan, nicht Panne:** Mk 8,31; Lk 24,26; Apg 2,23; Jes 53.`,
    `**Petrus' Fehler:** Wer das Kreuz für unnötig hält, steht dort, wo Petrus stand – „Hebe dich, Satan, von mir!" (Mt 16,23).`,
    `**Vollendet:** „Es ist vollbracht!" (Joh 19,30); „ich habe vollendet das Werk" (Joh 17,4).`,
    `**Auch der Leib ist erlöst:** Leibliche Auferstehung Christi als Erstling (1 Kor 15,20); Eucharistie als Pfand.`,
    `**Wiederkunft desselben Jesus:** sichtbar, auf den Wolken, für alle Augen (Apg 1,11; Mt 24,27; Offb 1,7).`,
    `**Der neue Adam ist Christus:** Wir werden in ihn hineingetauft (Gal 3,27), nicht in eine neue Abstammungslinie.`,
  ],
  argument: {
    name: 'Das Argument aus Jesu eigenem Selbstverständnis',
    summary: 'Wenn Jesus selbst das Kreuz als notwendigen Weg verstand und als vollendet bezeichnete, kann es kein Scheitern sein.',
    premises: [
      { text: 'P1: Jesus kündigte sein Leiden, seinen Tod und seine Auferstehung wiederholt als notwendig („muss") an.', support: `Mk 8,31; 9,31; 10,33–34; Lk 24,26.46.`, sources: [{ kind: 'bibel', work: 'Markus', ref: '8,31', quote: `Des Menschen Sohn muß viel leiden … und getötet werden und über drei Tage auferstehen.`, translation: 'Luther 1912', status: 'verbatim' }] },
      { text: 'P2: Er wies den Versuch, ihn vom Kreuz abzuhalten, als satanisch zurück.', support: `Mt 16,21–23.` },
      { text: 'P3: Er gab sein Leben freiwillig und erklärte sein Werk am Kreuz für vollendet.', support: `Joh 10,17–18; 17,4; 19,30.` },
      { text: 'P4: Gott bestätigte dies durch die leibliche Auferstehung.', support: `Apg 2,23–24; 1 Kor 15,3–8.20.` },
    ],
    conclusion: 'Das Kreuz war Gottes Weg der Erlösung und keine Ersatzlösung; eine Lehre, die Jesu Mission für gescheitert erklärt, widerspricht Jesu eigenem Zeugnis.',
  },
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Augenzeuge unter dem Kreuz',
      text: `Johannes stand unter dem Kreuz und überliefert das letzte Wort Jesu: *tetelestai* – „Es ist vollbracht". Das griechische Wort bezeichnet ein abgeschlossenes, erfülltes Werk. Für Johannes ist das Kreuz die „Stunde" der Verherrlichung, auf die das ganze Evangelium zuläuft (Joh 12,23–33; 17,1). Wer darin ein Scheitern sieht, liest das Evangelium gegen seinen Augenzeugen.`,
      sources: [{ kind: 'bibel', work: 'Johannes', ref: '17,4', quote: `Ich habe dich verklärt auf Erden und vollendet das Werk, das du mir gegeben hast, daß ich's tun sollte.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer, warum der Logos am Kreuz starb',
      text: `Athanasius beantwortet ausführlich die Frage, warum der Erlöser gerade am Kreuz sterben musste: Der Tod musste öffentlich sein, damit die Auferstehung glaubwürdig bezeugt würde; er musste ein Tod sein, den andere ihm zufügten, damit er nicht als Schwäche erschien; und er musste am Kreuz geschehen, weil er dort mit ausgebreiteten Armen alle Völker zu sich zieht. Für Athanasius ist das Kreuz der Ort, an dem der Tod besiegt wird – Gottes Plan von Anfang an.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '21–26', quote: `Warum der Erlöser den Tod am Kreuz wählte – öffentlich, zum Sieg über den Tod.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger des freiwilligen Leidens',
      text: `Kyrill betont in seiner Johannesauslegung, dass Christus Herr über sein Leiden war: Er lieferte sich aus, als seine Stunde gekommen war, und nicht vorher; niemand nahm ihm das Leben. Das menschliche Zittern in Gethsemane zeigt die Wirklichkeit seiner Menschheit, doch der eine Christus, der fleischgewordene Gott-Logos, ging den Weg zum Kreuz aus freiem Willen – zur Erlösung der ganzen Welt.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu Joh 10,18; 12,27; 19,30', quote: `Christus litt freiwillig und vollendete am Kreuz die Erlösung.`, status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Lehrer der Rekapitulation',
      text: `Für Irenäus ist Christus der neue Adam, der die ganze Geschichte der Menschheit in sich zusammenfasst und an jeder Stelle heilt, was Adam verdarb: Gehorsam am Holz des Kreuzes gegen den Ungehorsam am Baum, Maria gegen Eva. Diese Erlösung ist vollständig – sie braucht keinen „dritten Adam". Die Vereinigungskirche setzt Moon genau an die Stelle, die Irenäus ausschließlich Christus zuspricht.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,18,1; V,19,1; V,21,1', quote: `Christus als neuer Adam rekapituliert die Menschheit; Maria als neue Eva.`, status: 'paraphrase' }],
    },
    {
      person: 'walter-martin',
      role: 'als Analytiker der Vereinigungstheologie',
      text: `Martin zeigte, dass die Vereinigungskirche zwar christliche Begriffe benutzt, aber die Gottheit Christi, die Vollständigkeit seines Erlösungswerkes und seine leibliche Wiederkunft umdeutet. Für ihn ist der Kernpunkt die Frage nach dem Kreuz: Wer es zu einem Scheitern erklärt, hat ein anderes Evangelium (Gal 1,8).`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'Kapitel zur Vereinigungskirche (spätere Auflagen)', quote: `Analyse des Göttlichen Prinzips im Vergleich mit der Bibel.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'jesus-sollte-heiraten',
      objection: `Jesus kam, um zu heiraten und die sündlose Familie zu gründen, die Adam und Eva verfehlt hatten. Weil man ihn verwarf, wurde das Kreuz zum zweiten Weg.`,
      objectionBy: 'Göttliches Prinzip (Sun Myung Moon)',
      answer: `Jesus selbst sah das anders: „Des Menschen Sohn **muß** viel leiden … und getötet werden" (Mk 8,31). Als Petrus ihm das ausreden wollte, sagte Jesus: „Hebe dich, Satan, von mir! … du meinst nicht, was göttlich, sondern was menschlich ist" (Mt 16,23). Das Kreuz war schon 700 Jahre vorher angekündigt (Jes 53). Und eine Braut hat Jesus: die Kirche (Eph 5,25–32; Offb 19,7).`,
      questionsBack: [`Wenn das Kreuz nicht Gottes Wille war – warum nannte Jesus den Versuch, ihn davon abzuhalten, satanisch?`],
      followUps: [
        {
          id: 'gethsemane-kelch',
          objection: `In Gethsemane betete Jesus: „Ist's möglich, so gehe dieser Kelch von mir." Er wollte das Kreuz also nicht.`,
          objectionBy: 'Göttliches Prinzip',
          answer: `Das Gebet zeigt, dass Jesus wahrer Mensch war, der vor dem Leiden zitterte – das bekennt die koptische Kirche ausdrücklich. Aber es endet: „Doch nicht wie ich will, sondern wie du willst!" (Mt 26,39). Der Wille des Vaters war das Kreuz. Bei Johannes sagt Jesus: „Darum bin ich in diese Stunde gekommen" (Joh 12,27).`,
          sources: [{ kind: 'bibel', work: 'Johannes', ref: '12,27', quote: `Jetzt ist meine Seele betrübt. Und was soll ich sagen? Vater, hilf mir aus dieser Stunde? Doch darum bin ich in diese Stunde gekommen.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'menschen-schuld',
              objection: `Apg 2,23 sagt auch: „Ihr habt ihn … erwürget." Also war es menschliche Schuld und kein Plan Gottes.`,
              objectionBy: 'Vereinigungstheologen',
              answer: `Der Vers sagt beides im selben Satz: „aus bedachtem Rat und Vorsehung Gottes ergeben" – und „durch die Hände der Ungerechten". Menschliche Schuld und Gottes Plan schließen sich nicht aus, wie bei Josef: „Ihr gedachtet's böse mit mir zu machen; aber Gott gedachte es gut zu machen" (Gen 50,20). Menschliches Versagen kann Gottes Ratschluss nicht scheitern lassen. Gott hat den Gekreuzigten auferweckt – ein Gott, der scheitert, bestätigt sein Scheitern nicht durch die Auferstehung.`,
              followUps: [
                {
                  id: 'nur-geistiges-heil',
                  objection: `Selbst wenn das Kreuz geplant war: Es brachte nur geistiges Heil. Christen sündigen weiter, ihre Kinder werden mit Erbsünde geboren – die leibliche Erlösung fehlt.`,
                  objectionBy: 'Göttliches Prinzip',
                  answer: `Christus ist **leiblich** auferstanden, als „Erstling" derer, die entschlafen sind (1 Kor 15,20); die Gläubigen empfangen seinen Leib und sein Blut als Pfand der Auferstehung. Dass Christen noch kämpfen, zeigt nicht, dass Christi Werk unvollständig ist, sondern dass seine Vollendung bei der Wiederkunft offenbar wird („schon jetzt – noch nicht"). Und ehrlich gefragt: Sind die Kinder der gesegneten Paare ohne Sünde? Gibt es in diesen Ehen keine Schuld, keine Trennung?`,
                  questionsBack: [`Wo sieht man die angeblich vollendete leibliche Erlösung bei den Familien, die die Segnung empfangen haben?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'taeufer-versagte',
      objection: `Johannes der Täufer hat versagt: Er folgte Jesus nicht nach und zweifelte im Gefängnis („Bist du, der da kommen soll?", Mt 11,3). Darum fand Jesus keine Grundlage in Israel.`,
      objectionBy: 'Göttliches Prinzip',
      answer: `Johannes zeigte öffentlich auf Jesus: „Siehe, das ist Gottes Lamm, welches der Welt Sünde trägt!" (Joh 1,29) – und bezeugte damit gerade den Opfertod. Seine Frage aus dem Gefängnis ist menschliche Anfechtung; Jesus antwortet mit den Zeichen aus Jesaja und nennt ihn im selben Atemzug den Größten unter den von Frauen Geborenen (Mt 11,11). Von einem Scheitern, das Gottes Plan zerstört hätte, spricht der Text nicht.`,
      followUps: [
        {
          id: 'johannes-folgte-nicht',
          objection: `Aber Johannes wurde nicht Jesu Jünger. Er blieb bei seiner eigenen Bewegung.`,
          objectionBy: 'Vereinigungstheologen',
          answer: `Seine Sendung war die des Vorläufers, nicht des Jüngers (Lk 1,17). Er schickte seine eigenen Jünger zu Jesus – Andreas folgte Jesus auf das Zeugnis des Täufers hin (Joh 1,35–40). Und er sagte: „Wer die Braut hat, der ist der Bräutigam; der Freund aber des Bräutigams … freut sich hoch … Er muß wachsen, ich aber muß abnehmen" (Joh 3,29–30). So spricht kein Gescheiterter, sondern einer, der seine Aufgabe erfüllt hat.`,
          sources: [{ kind: 'bibel', work: 'Johannes', ref: '3,29–30', quote: `Wer die Braut hat, der ist der Bräutigam; der Freund aber des Bräutigams steht und hört ihm zu und freut sich hoch über des Bräutigams Stimme. Diese meine Freude ist nun erfüllt. Er muß wachsen, ich aber muß abnehmen.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'bibel-symbolisch',
              objection: `Das Göttliche Prinzip liest die Bibel tiefer, als Verschlüsselung der Wiederherstellungsvorsehung. Deine wörtliche Lesart bleibt an der Oberfläche.`,
              objectionBy: 'Young Oon Kim',
              answer: `Die alexandrinische Tradition kennt den geistlichen Schriftsinn sehr gut – Kyrill und Didymus lasen die Schrift auf mehreren Ebenen. Aber der geistliche Sinn widerspricht nie dem Wortsinn, er vertieft ihn. Eine „tiefere" Lesart, die aus Jesu „Es ist vollbracht" ein „Ich bin gescheitert" macht, ist nicht tiefer, sondern das Gegenteil. Wer bestimmt dann noch, was der Text sagt?`,
              questionsBack: [`Wenn man „Es ist vollbracht" als „Es ist gescheitert" lesen darf – gibt es dann noch eine Grenze der Auslegung?`],
            },
          ],
        },
      ],
    },
    {
      id: 'wiederkunft-korea',
      objection: `Christen warten selbst auf die Wiederkunft. Der Herr der Wiederkunft musste als Mensch geboren werden – im Osten, wie Offb 7,2 sagt: „vom Aufgang der Sonne". Das ist Korea, und das ist Sun Myung Moon.`,
      objectionBy: 'Göttliches Prinzip',
      answer: `Die Bibel sagt, wer wiederkommt: „**dieser** Jesus, welcher von euch ist aufgenommen gen Himmel, wird kommen, wie ihr ihn gesehen habt gen Himmel fahren" (Apg 1,11). Nicht ein anderer, nicht neu geboren. Und Jesus selbst warnte: „So alsdann jemand zu euch wird sagen: Siehe, hier ist Christus! … so sollt ihr's nicht glauben", denn sein Kommen wird sein wie der Blitz von Osten bis Westen (Mt 24,23–27). Offb 7,2 spricht von einem Engel, nicht von einem Messias.`,
      followUps: [
        {
          id: 'wolken-symbolisch',
          objection: `Die „Wolken" sind symbolisch – sie stehen für die Menge der Gläubigen, wie die „Wolke der Zeugen" in Hebr 12,1.`,
          objectionBy: 'Göttliches Prinzip',
          answer: `In Apg 1,9 wird Jesus vor den Augen der Jünger aufgehoben, „und eine Wolke nahm ihn auf" – kein Bild für Gläubige, sondern ein sichtbarer Vorgang. Und er kommt „wie ihr ihn gesehen habt". Offb 1,7 sagt: „Es werden ihn sehen alle Augen." Ein 1920 in einem koreanischen Dorf geborenes Kind wurde nicht von allen Augen auf den Wolken gesehen.`,
          sources: [{ kind: 'bibel', work: 'Offenbarung', ref: '1,7', quote: `Siehe, er kommt mit den Wolken, und es werden ihn sehen alle Augen und die ihn zerstochen haben.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'moon-fruechte',
              objection: `Erkennt Moon an seinen Früchten: Friedensinitiativen, Universitäten, Zeitungen, interreligiöse Konferenzen, Millionen gesegnete Familien.`,
              objectionBy: 'Familienföderation für Weltfrieden und Vereinigung',
              answer: `Manches davon erkenne ich an. Aber zu den Früchten gehören auch die Verurteilung Moons wegen Steuerdelikten in den USA (1982), die gerichtlich festgestellte unlautere Spendenwerbung in Japan mit mindestens 506 Geschädigten, die 2026 zur bestätigten Auflösung führte, und die Spaltung seiner eigenen Familie nach seinem Tod. Vor allem aber nennt Jesus selbst den entscheidenden Prüfstein für jeden, der sich als Christus ausgibt: Mt 24,23–27.`,
              followUps: [
                {
                  id: 'verfolgung-wie-jesus',
                  objection: `Auch Jesus wurde verurteilt und verfolgt. Dass Moon und die Kirche verfolgt werden, beweist gerade ihre Gerechtigkeit.`,
                  objectionBy: 'Mitglieder der Vereinigungskirche',
                  answer: `Leiden an sich beweist nichts: „Niemand aber unter euch leide als ein Mörder oder Dieb oder Übeltäter … leidet er aber als ein Christ, so schäme er sich nicht" (1 Petr 4,15–16). Die japanischen Gerichte haben nicht über Glaubensinhalte geurteilt, sondern über zivilrechtlich festgestellte Schäden durch Spendenpraktiken. Das ist kein Martyrium. Ich wünsche den Mitgliedern dennoch, dass sie fair behandelt werden – die meisten sind aufrichtige Menschen.`,
                  questionsBack: [`Ist jede Verurteilung eine Verfolgung – auch wenn Gerichte konkrete Geschädigte feststellen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'segnung-erbsuende',
      objection: `Durch die Segnung (Ehesegnung) der Wahren Eltern werden die Paare in eine neue, sündlose Abstammungslinie eingepfropft. So wird die Erbsünde wirklich überwunden.`,
      objectionBy: 'Lehre der Vereinigungskirche',
      answer: `Der neue Adam ist Christus: „Der erste Mensch, Adam, ward zu einer lebendigen Seele, und der letzte Adam zum Geist, der da lebendig macht" (1 Kor 15,45). In ihn werden wir eingepfropft – durch die Taufe: „Denn wie viel euer getauft sind, die haben Christum angezogen" (Gal 3,27). Die Ehe ist heilig, für die koptische Kirche sogar ein Sakrament – aber nicht das Mittel der Erlösung. Und Christi Gnade ist für alle offen, unabhängig von Spenden oder Zeremonien einer Organisation.`,
      sources: [{ kind: 'bibel', work: '1. Korinther', ref: '15,45', quote: `Der erste Mensch, Adam, ward zu einer lebendigen Seele, und der letzte Adam zum Geist, der da lebendig macht.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'fall-sexuell',
          objection: `Der Sündenfall war sexuell: Eva hatte eine Beziehung mit Luzifer, dann mit Adam. Darum schämten sie sich ihrer Nacktheit und bedeckten ihre Geschlechtsteile.`,
          objectionBy: 'Göttliches Prinzip',
          answer: `Gen 3 spricht vom Essen einer verbotenen Frucht – vom Ungehorsam gegen Gottes Wort und vom Misstrauen gegen seine Güte („ihr werdet sein wie Gott", Gen 3,5). Die Scham folgt als Folge des zerbrochenen Vertrauens. Eine sexuelle Deutung steht nicht im Text. Im Gegenteil: Gott hatte Adam und Eva vor dem Fall gesegnet: „Seid fruchtbar und mehret euch" (Gen 1,28) – die Geschlechtlichkeit ist gute Schöpfung, nicht Ursprung der Sünde.`,
          followUps: [
            {
              id: 'gesegnete-kinder',
              objection: `Die Kinder gesegneter Paare werden ohne Erbsünde geboren – das ist die sichtbare Frucht der leiblichen Erlösung.`,
              objectionBy: 'Lehre der Vereinigungskirche',
              answer: `Diese Behauptung lässt sich an der Wirklichkeit messen: Auch diese Kinder sündigen, streiten, scheitern – und selbst in Moons eigener Familie kam es nach seinem Tod zu tiefen Zerwürfnissen. Christen behaupten nicht, sündlose Kinder zu haben; sie bekennen ihren täglichen Bedarf an Gnade. Gerade das ist ehrlicher und entspricht der Wirklichkeit des Menschen.`,
              questionsBack: [`Kennst du ein Kind aus einer gesegneten Familie, das nie gesündigt hat?`],
            },
          ],
        },
      ],
    },
    {
      id: 'jerusalem-wollte-nicht',
      objection: `Jesus weinte über Jerusalem: „Wie oft habe ich deine Kinder versammeln wollen … und ihr habt nicht gewollt!" (Mt 23,37). Da sieht man, dass Gottes Plan durch menschliche Ablehnung gescheitert ist.`,
      objectionBy: 'Göttliches Prinzip',
      answer: `Jesu Tränen zeigen, dass Gott die Freiheit des Menschen ernst nimmt und über die Ablehnung trauert. Aber im selben Zusammenhang kündigt Jesus seinen Tod an und verheißt: „Ihr werdet mich nicht sehen, bis ihr sprecht: Gelobt sei, der da kommt im Namen des Herrn!" (Mt 23,39). Die Ablehnung durch viele in Jerusalem hat das Heil nicht verhindert, sondern zu den Völkern getragen (Röm 11,11).`,
      followUps: [
        {
          id: 'gottes-plan-scheitern',
          objection: `Also können Gottes Pläne doch scheitern, wenn Menschen nicht mitwirken?`,
          objectionBy: 'Vereinigungstheologen',
          answer: `Einzelne Menschen können Gottes Ratschluss für sich verwerfen (Lk 7,30) – das ist die Würde und das Risiko der Freiheit, die die koptische Kirche mit ihrer Lehre von der Synergie ernst nimmt. Aber Gottes Heilsplan in Christus ist nicht gescheitert: Gott hat „uns wissen lassen das Geheimnis seines Willens … daß alle Dinge zusammengefaßt würden in Christo" (Eph 1,9–10). Christus hat vollbracht, was der Vater ihm aufgetragen hat (Joh 17,4; 19,30).`,
          questionsBack: [`Wenn Christus gescheitert sein kann – woher weißt du, dass Moon nicht auch gescheitert ist?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum nannte Jesus Petrus „Satan", als dieser ihn vom Kreuz abhalten wollte (Mt 16,23)?`,
    `Was meinte Jesus mit „Es ist vollbracht" (Joh 19,30), wenn seine Mission gescheitert war?`,
    `Wer kommt nach Apg 1,11 wieder – „dieser Jesus" oder ein anderer?`,
    `Wie verstehst du Jesu Warnung in Mt 24,23: „Wenn jemand sagt: Hier ist Christus – glaubt es nicht"?`,
    `Wenn Christus scheitern konnte – woher weißt du, dass Moon nicht gescheitert ist?`,
  ],
  avoid: [
    `Mitglieder pauschal als „gehirngewaschen" bezeichnen – die Forschung (Eileen Barker) widerspricht dieser Vorstellung, und es verletzt aufrichtige Menschen.`,
    `Die Ermordung Shinzo Abes der Kirche als Täterin zuschreiben – der Täter handelte allein; die Gerichte urteilten über Spendenpraktiken.`,
    `Laufende Strafverfahren (z. B. gegen Hak Ja Han) als erwiesene Schuld darstellen – es gilt die Unschuldsvermutung.`,
    `Über Massenhochzeiten spotten – sprich über die Theologie, nicht über die Form.`,
  ],
  concessions: [
    `Viele Mitglieder der Vereinigungskirche sind idealistisch, familienorientiert und aufrichtig um Frieden bemüht.`,
    `Die Vorstellung einer unwiderstehlichen „Gehirnwäsche" hat sich empirisch nicht bestätigt.`,
    `Jesu Gebet in Gethsemane zeigt echte menschliche Angst vor dem Leiden – das ist ernst zu nehmen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'Kapitel zur Vereinigungskirche', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Eileen Barker', work: 'The Making of a Moonie: Choice or Brainwashing?', year: '1984', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '19–32', status: 'paraphrase' },
    { kind: 'gegner', author: 'Sun Myung Moon (Vereinigungskirche)', work: 'Exposition of the Divine Principle', year: '1996', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Vereinigungskirche', 'Sun Myung Moon', 'Göttliches Prinzip', 'Kreuz', 'Wiederkunft', 'Massenhochzeit', 'Falsche Messiasse'],
  related: [
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'prophetie/wiederkunft-falsche-prophetie',
    'weitere-religionen/bahai-progressive-offenbarung',
    'mormonen/grosser-abfall',
    'weitere-sondergemeinschaften/neuapostolische-kirche',
  ],
};

export default claim;
