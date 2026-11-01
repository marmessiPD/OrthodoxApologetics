import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'speziesismus',
  title: `„Das Christentum macht Tiere zu Sachen – das ist Speziesismus (Peter Singer)."`,
  proponents: [
    { name: 'Peter Singer', role: 'Ethiker, Princeton University', work: 'Animal Liberation (1975), Kap. 5 „Man\'s Dominion"; Practical Ethics (1979, 2. Aufl. 1993)' },
    { name: 'Richard D. Ryder', role: 'Psychologe und Tierrechtler', work: 'Prägte 1970 den Begriff „speciesism"' },
    { name: 'Tom Regan', role: 'Philosoph, North Carolina State University', work: 'The Case for Animal Rights (1983)' },
    { name: 'Yuval Noah Harari', role: 'Historiker', work: 'Homo Deus (2015)' },
  ],
  steelman: `Rassismus bevorzugt Menschen der eigenen Hautfarbe, Sexismus das eigene Geschlecht – und „Speziesismus" (Richard Ryder, 1970) die eigene Art. Peter Singer argumentiert in *Animal Liberation* (1975): Moralisch relevant ist nicht, zu welcher Spezies ein Wesen gehört, sondern ob es leiden kann. Schon Jeremy Bentham schrieb: Die Frage ist nicht, ob sie denken oder sprechen können, sondern ob sie leiden können. Ein Schwein empfindet Schmerz und Angst wie ein Kleinkind. Trotzdem werden jährlich Milliarden Tiere in Massentierhaltung gequält und getötet. Singer macht dafür ausdrücklich die jüdisch-christliche Tradition mitverantwortlich: Sie habe dem Menschen die „Herrschaft" über die Tiere gegeben (Gen 1,28), ihm allein eine unsterbliche Seele zugesprochen, Tiere zu Opferzwecken schlachten lassen und Gen 9,3 erlaube, „alles, was sich regt", zu essen. Descartes' Lehre von Tieren als seelenlosen Maschinen und die Gleichgültigkeit vieler Kirchen gegenüber Tierleid seien die Früchte dieses Denkens. Wer menschliches Leben allein wegen der Artzugehörigkeit für heilig hält, folgt einem religiösen Vorurteil, nicht einem Argument.`,
  biblical: {
    summary: `Die Bibel stellt den Menschen als **Bild Gottes** (Gen 1,27) in eine besondere Würde und Verantwortung – aber sie macht Tiere **nicht zu Sachen**. Tiere sind „lebendige Seelen" (hebr. *nep̄eš ḥayyāh*, Gen 1,20.24 – derselbe Ausdruck wie beim Menschen in Gen 2,7), Gott schließt seinen Bund nach der Flut auch „mit allem lebendigen Getier" (Gen 9,9–10), sie haben Anteil am Sabbat (Ex 20,10; 23,12), der dreschende Ochse darf nicht geknebelt werden (Dtn 25,4), und das Vogelnest ist geschützt (Dtn 22,6–7). „Der Gerechte erbarmt sich seines Viehs" (Spr 12,10); Gott „ist allen gütig und erbarmt sich aller seiner Werke" (Ps 145,9), er versorgt die Tiere (Ps 104,21.27) und sorgt sich um das Vieh Ninives (Jona 4,11). Jesus sagt: Kein Sperling fällt zur Erde ohne den Vater (Mt 10,29) – und zugleich: „Ihr seid besser denn viele Sperlinge" (Mt 10,31).`,
    detail: `**Würde und Mitgeschöpflichkeit.** Das biblische Bild ist nicht „Mensch gegen Tier", sondern eine abgestufte Gemeinschaft der Geschöpfe: Alle verdanken sich Gott, alle loben ihn (Ps 148), aber nur der Mensch ist zum Bild Gottes und zur Verantwortung für die anderen geschaffen. Diese Würde begründet nicht Willkür, sondern Pflicht.

**Ursprünglich pflanzliche Nahrung.** Nach Gen 1,29–30 ist die ursprüngliche Nahrung für Mensch und Tier pflanzlich; die Erlaubnis zum Fleischessen (Gen 9,3) kommt erst nach der Flut und ist mit dem Blutverbot verbunden (Gen 9,4) – einem Zeichen der Ehrfurcht vor dem Leben, das Gott gehört. Die prophetische Vision ist der Tierfrieden (Jes 11,6–9).

**Die Schöpfung wartet auf Erlösung.** Paulus schreibt, dass „alle Kreatur" mit uns seufzt und auf die Befreiung hofft (Röm 8,21–22). Tiere sind in die Heilsgeschichte einbezogen, nicht von ihr ausgeschlossen.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '12,10', quote: `Der Gerechte erbarmt sich seines Viehs; aber das Herz der Gottlosen ist unbarmherzig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '145,9', quote: `Der HERR ist allen gütig und erbarmt sich aller seiner Werke.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jona', ref: '4,11', quote: `Und mich sollte nicht jammern Ninives, solcher großen Stadt, in welcher sind mehr denn hundertundzwanzigtausend Menschen, die nicht wissen Unterschied, was rechts oder links ist, dazu auch viel Tiere?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,29.31', quote: `Kauft man nicht zwei Sperlinge um einen Pfennig? Dennoch fällt deren keiner auf die Erde ohne euren Vater. … Darum fürchtet euch nicht; ihr seid besser denn viele Sperlinge.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '25,4', quote: `Du sollst dem Ochsen, der da drischt, nicht das Maul verbinden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '9,9–10', quote: `Siehe, ich richte mit euch einen Bund auf und mit eurem Samen nach euch und mit allem lebendigen Getier bei euch.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Tradition kennt eine bemerkenswerte Nähe der Heiligen zu den Tieren: Nach der *Vita Pauli* des Hieronymus brachte ein Rabe dem Einsiedler Paulus von Theben täglich Brot, und Löwen gruben sein Grab; Antonius bat wilde Tiere sanft, seinen Garten zu verschonen (Vita Antonii 50). Isaak der Syrer, dessen Schriften in den koptischen Klöstern viel gelesen werden, beschreibt das „barmherzige Herz" als ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel, Tiere und sogar die Dämonen. Praktisch bedeutsam ist das **Fasten**: Die koptische Kirche hält an über 200 Tagen im Jahr ein Fasten ohne tierische Produkte; viele Mönche essen nie Fleisch. Die Kirche lehrt zugleich, dass nur der Mensch nach Gottes Bild mit einer vernunftbegabten, unsterblichen Seele geschaffen ist – das begründet seine Würde und seine Verantwortung für die Tiere.`,
    sources: [
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Vita Pauli (Leben des Paulus von Theben)', ref: '10; 16', year: 'um 376', quote: `Ein Rabe bringt dem Einsiedler täglich Brot; nach seinem Tod kommen zwei Löwen und graben mit ihren Pranken sein Grab.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', ref: 'Hom. 71 (Zählung der Holy-Transfiguration-Ausgabe; in anderen Ausgaben Hom. 81)', year: '7. Jh.', quote: `Was ist ein barmherziges Herz? Ein Brennen des Herzens für die ganze Schöpfung – für die Menschen, die Vögel, die Tiere, die Dämonen und für jedes Geschöpf.`, status: 'paraphrase', note: 'Vielzitierte Stelle; Nummerierung je nach Ausgabe verschieden.' },
      { kind: 'koptisch', work: 'Fastenordnung der koptisch-orthodoxen Kirche', quote: `An Mittwochen und Freitagen sowie in den großen Fastenzeiten verzichten die Gläubigen auf tierische Produkte; insgesamt sind es über 200 Fastentage im Jahr.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Singers Präferenzutilitarismus ist in der akademischen Ethik einflussreich, aber auch heftig umstritten. Zu seinen Konsequenzen gehört, dass nicht die Zugehörigkeit zur Spezies Mensch, sondern Eigenschaften wie Selbstbewusstsein und Zukunftsbezug über den Wert eines Lebens entscheiden. In *Practical Ethics* folgert er, dass die Tötung eines schwer behinderten Neugeborenen nicht der Tötung einer Person gleichkomme und oft gar nicht falsch sei. Behindertenrechtler wie Harriet McBryde Johnson haben ihm vehement widersprochen. Viele Philosophen, auch säkulare, suchen deshalb nach einer Begründung menschlicher Gleichheit, die nicht an graduellen Fähigkeiten hängt.`,
    detail: `Ehrlich anerkennen muss man: Singer hat auf reales, massenhaftes Tierleid hingewiesen, besonders in der industriellen Tierhaltung, und viele Menschen – auch Christen – zum Nachdenken gebracht. Er ist persönlich großzügig (Effektiver Altruismus) und argumentiert konsequent. Die Kritik richtet sich nicht gegen das Mitgefühl mit Tieren, sondern gegen die Abwertung schwacher Menschen, die aus seiner Begründung folgt.`,
    sources: [
      { kind: 'gegner', author: 'Peter Singer', work: 'Animal Liberation', ref: 'Kap. 5 („Man\'s Dominion: A Short History of Speciesism")', year: '1975', quote: `Singer führt die westliche Abwertung der Tiere wesentlich auf die jüdisch-christliche Tradition zurück: Herrschaftsauftrag, Sonderstellung der menschlichen Seele und die Lehre, Tiere seien um des Menschen willen da.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Peter Singer', work: 'Practical Ethics', ref: 'Kap. 7 („Taking Life: Humans"), 2. Aufl. 1993, S. 191', year: '1993', quote: `Die Tötung eines behinderten Säuglings ist moralisch nicht gleichwertig mit der Tötung einer Person. Sehr oft ist sie überhaupt nicht unrecht.`, original: 'Killing a defective infant is not morally equivalent to killing a person. Very often it is not wrong at all.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Singer hat bestätigt, dass das Zitat korrekt ist, aber betont, es sei nur mit seinem Begriff von „Person" (selbstbewusstes Wesen mit Zukunftsbezug) zu verstehen. Seitenzahl nach der 2. Auflage.' },
      { kind: 'sonstiges', author: 'Harriet McBryde Johnson', work: '„Unspeakable Conversations", The New York Times Magazine', year: '2003', quote: `Die Juristin, selbst schwer körperbehindert, berichtet von ihrer Debatte mit Singer und verteidigt den Wert behinderten Lebens.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel macht Tiere nicht zu Sachen: Sie sind „lebendige Seelen", Gott schließt seinen Bund mit ihnen, sie haben Anteil am Sabbat, und „der Gerechte erbarmt sich seines Viehs" (Spr 12,10). Die koptische Kirche fastet über 200 Tage im Jahr ohne tierische Produkte. Aber sie unterscheidet: Der Mensch ist Bild Gottes und trägt deshalb Verantwortung für die Tiere. Wer diesen Unterschied leugnet, landet – wie Singer selbst zugibt – bei der Abwertung behinderter Kinder. Die christliche Antwort ist nicht weniger Mitgefühl für Tiere, sondern Würde für jeden Menschen und Barmherzigkeit für alle Geschöpfe.`,
  keyPoints: [
    `**Tiere sind Mitgeschöpfe:** *nep̄eš ḥayyāh* (Gen 1,20.24), Bund mit den Tieren (Gen 9,10), Sabbat für das Vieh (Ex 20,10), Barmherzigkeitsgebot (Spr 12,10; Dtn 25,4).`,
    `**Würde ist kein Freibrief:** Die Gottebenbildlichkeit begründet Verantwortung, nicht Willkür; Tierquälerei ist nach der Bibel Zeichen des Gottlosen (Spr 12,10).`,
    `**Nicht Artzugehörigkeit, sondern Natur:** Christen begründen Menschenwürde nicht mit „Spezies", sondern mit der vernunftbegabten Natur nach Gottes Bild – unabhängig vom aktuellen Entwicklungsstand.`,
    `**Singers Preis:** Wer Würde an Fähigkeiten knüpft, muss Neugeborenen, Schwerbehinderten und Dementen einen geringeren Wert zusprechen – Singer zieht diese Konsequenz offen.`,
    `**Christliche Praxis:** Die ersten Tierschutzgesellschaften wurden von Christen gegründet (RSPCA 1824); koptisches Fasten verzichtet an über 200 Tagen auf tierische Produkte.`,
    `**Tierleid ernst nehmen:** Massentierhaltung ist mit Spr 12,10 schwer vereinbar – hier sollten Christen Singer in der Sache teilweise recht geben.`,
  ],
  voices: [
    {
      person: 'basilius',
      role: 'als Naturbeobachter und Bischof',
      text: `In seinen Homilien zum Hexaemeron beschreibt Basilius die Tiere mit Liebe und Staunen: die Fürsorge der Störche für ihre alten Eltern, die Klugheit der Ameise, die Treue der Turteltaube. Er nutzt sie als Spiegel menschlicher Tugenden und betont, dass jedes Geschöpf die Weisheit des Schöpfers zeigt. Tiere sind für ihn keine Maschinen, sondern beseelte Wesen mit einer eigenen, wenn auch nicht vernunftbegabten Seele.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', ref: 'Hom. 7–9', year: 'um 370', status: 'paraphrase' }],
    },
    {
      person: 'isaak-syrer',
      role: 'als Lehrer des barmherzigen Herzens',
      text: `Isaak von Ninive beschreibt den Gipfel des geistlichen Lebens als ein Herz, das vor Mitleid für alle Geschöpfe brennt. Ein solcher Mensch könne nicht ertragen, dass irgendeinem Geschöpf auch nur das geringste Leid zugefügt werde, und bete unter Tränen auch für die Tiere. Diese Spiritualität ist in koptischen Klöstern lebendig. Sie zeigt, dass das östliche Christentum Mitgefühl mit Tieren als Frucht der Heiligkeit versteht.`,
      sources: [{ kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', ref: 'Hom. 71 (Holy-Transfiguration-Zählung)', year: '7. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Gegner der Vivisektion',
      text: `Lewis schrieb 1947 einen Essay gegen die Vivisektion. Seine Pointe richtet sich gegen beide Seiten: Christen dürften die Sonderstellung des Menschen nicht als Lizenz zur Grausamkeit missbrauchen – die Überlegenheit des Menschen verpflichte ihn gerade zur Fürsorge. Und wer die christliche Lehre vom wesenhaften Unterschied zwischen Mensch und Tier aufgebe, verliere jedes Argument dagegen, auch an „minderwertigen" Menschen Experimente durchzuführen.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Vivisection" (in: God in the Dock)', year: '1947', quote: `Sobald die alte christliche Idee eines totalen Wesensunterschieds zwischen Mensch und Tier aufgegeben ist, lässt sich kein Argument für Tierversuche finden, das nicht auch ein Argument für Versuche an minderwertigen Menschen wäre.`, status: 'paraphrase' }],
    },
    {
      person: 'andrew-linzey',
      role: 'als anglikanischer Tiertheologe',
      text: `Andrew Linzey kritisiert in *Animal Theology* (1994) scharf, dass viele Christen Tiere als bloße Ressourcen behandelt haben. Er argumentiert aber nicht gegen das Christentum, sondern aus ihm: Wenn Gott der Schöpfer aller ist und Christus der Herr der ganzen Schöpfung, dann haben Tiere ein „Theos-Recht" – einen Anspruch, der in Gott gründet. Die Überlegenheit des Menschen sei als dienende Herrschaft nach dem Vorbild Christi zu verstehen, der nicht herrschte, sondern diente.`,
      sources: [{ kind: 'fachliteratur', author: 'Andrew Linzey', work: 'Animal Theology', year: '1994', status: 'paraphrase' }],
    },
    {
      person: 'francis-beckwith',
      role: 'als Bioethiker',
      text: `Francis Beckwith verteidigt in *Defending Life* (2007) die „Substanzauffassung" der Person: Ein Mensch ist von Anfang an ein Wesen mit einer vernunftbegabten Natur, auch wenn er ihre Fähigkeiten noch nicht oder nicht mehr ausüben kann. Würde hängt an dem, was ein Wesen *ist*, nicht an dem, was es gerade *kann*. Nur diese Auffassung schützt Neugeborene, Schwerbehinderte und Demenzkranke vor einer Abstufung ihres Lebensrechts, wie Singer sie vornimmt.`,
      sources: [{ kind: 'fachliteratur', author: 'Francis J. Beckwith', work: 'Defending Life: A Moral and Legal Case Against Abortion Choice', year: '2007', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'tiere-als-sachen',
      objection: `Die Bibel macht Tiere zu Sachen. Descartes' „Tiermaschinen" sind das logische Erbe dieser Theologie.`,
      objectionBy: 'Peter Singer',
      answer: `Descartes ist nicht die Bibel. Die Bibel nennt Tiere „lebendige Seelen" mit demselben Ausdruck wie den Menschen (Gen 1,20.24; 2,7), Gott schließt seinen Bund mit ihnen (Gen 9,10), gibt ihnen den Sabbat (Ex 20,10) und sorgt sich um das Vieh Ninives (Jona 4,11). „Der Gerechte erbarmt sich seines Viehs" (Spr 12,10). Die Kirchenväter wie Basilius beschrieben Tiere mit Staunen als beseelte Wesen – Descartes' Maschinenmodell war ein neuzeitlicher Bruch mit dieser Tradition.`,
      followUps: [
        {
          id: 'tierkaempfe-geschichte',
          objection: `Trotzdem haben christliche Gesellschaften Tierhetzen, Stierkämpfe und grausame Tierversuche betrieben.`,
          answer: `Das stimmt, und Christen haben dabei gegen ihre eigene Schrift gehandelt. Aber es ist bemerkenswert, wer die ersten Tierschutzbewegungen gründete: Die Londoner „Society for the Prevention of Cruelty to Animals" (1824, später RSPCA) wurde von dem anglikanischen Pfarrer Arthur Broome initiiert, und zu den Gründern gehörte William Wilberforce, der Kämpfer gegen die Sklaverei. Die Motivation war ausdrücklich christlich.`,
          voices: [
            {
              person: 'wilberforce',
              role: 'als Mitgründer der ersten Tierschutzgesellschaft',
              text: `Wilberforce gehörte 1824 zu den Gründungsmitgliedern der Society for the Prevention of Cruelty to Animals. Für ihn und seine Mitstreiter aus der evangelikalen „Clapham-Sekte" gehörten der Kampf gegen die Sklaverei und gegen Tierquälerei zusammen: Beides war Ausdruck der Überzeugung, dass Macht über Schwächere eine Verantwortung vor Gott ist.`,
              sources: [{ kind: 'fachliteratur', work: 'Gründungsgeschichte der Society for the Prevention of Cruelty to Animals (London 1824)', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'gen9-alles-essen',
              objection: `Wenn ihr Tiere achtet, warum esst ihr sie dann? Gen 9,3 erlaubt euch alles, was sich regt.`,
              answer: `Nach Gen 1,29–30 war die ursprüngliche Nahrung pflanzlich; die Erlaubnis zum Fleischessen kam erst nach der Flut und war sofort mit dem Blutverbot verbunden (Gen 9,4) – einem Zeichen, dass das Leben Gott gehört. Die prophetische Hoffnung ist der Tierfrieden (Jes 11,6–9). Und die koptische Kirche lebt das: Über 200 Fastentage im Jahr ohne Fleisch, Milch und Eier, Mönche oft lebenslang ohne Fleisch. Kaum eine Tradition der Welt verzichtet praktisch so viel auf tierische Produkte.`,
              followUps: [
                {
                  id: 'massentierhaltung',
                  objection: `Fasten hin oder her – die meisten Christen kaufen das billigste Fleisch aus der Massentierhaltung wie alle anderen.`,
                  answer: `Da hast du leider recht, und das ist ein ernstes Problem. Wenn „der Gerechte sich seines Viehs erbarmt" (Spr 12,10), dann ist ein System, das Tiere als reine Produktionseinheiten behandelt, mit christlicher Ethik schwer vereinbar. Christliche Autoren wie Matthew Scully (*Dominion*, 2002) oder Andrew Linzey haben die industrielle Tierhaltung gerade aus christlichen Gründen kritisiert. Hier kann Singer Christen in der Sache an ihre eigenen Maßstäbe erinnern.`,
                  sources: [{ kind: 'fachliteratur', author: 'Matthew Scully', work: 'Dominion: The Power of Man, the Suffering of Animals, and the Call to Mercy', year: '2002', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wie-rassismus',
      objection: `Den Menschen nur deshalb zu bevorzugen, weil er zur Spezies Homo sapiens gehört, ist genauso willkürlich wie Rassismus.`,
      objectionBy: 'Peter Singer',
      answer: `Rassismus ist falsch, weil er Wesen derselben Natur ungleich behandelt – alle Menschen haben dieselbe vernunftbegabte Natur. Der Unterschied zwischen Mensch und Tier ist dagegen kein willkürliches Merkmal wie die Hautfarbe, sondern ein Unterschied der Natur: Nur der Mensch kann moralisch urteilen, Verantwortung übernehmen, nach Wahrheit fragen und Gott anbeten. Christen begründen Würde nicht mit der „Spezies" als biologischer Kategorie, sondern mit dieser Natur nach Gottes Bild.`,
      followUps: [
        {
          id: 'faehigkeiten-statt-art',
          objection: `Dann zählen eben Fähigkeiten. Ein erwachsener Schimpanse ist rationaler und selbstbewusster als ein Neugeborenes.`,
          objectionBy: 'Peter Singer',
          answer: `Genau hier liegt der Kern: Wenn Würde an aktuellen Fähigkeiten hängt, hat ein Neugeborenes, ein schwer geistig Behinderter oder ein Demenzkranker weniger Wert als ein gesunder Schimpanse. Singer zieht diese Konsequenz offen und hält die Tötung schwer behinderter Säuglinge oft nicht für unrecht. Die christliche Sicht sagt: Würde hängt an dem, was ein Mensch *ist* – ein Wesen mit vernunftbegabter Natur –, nicht an dem, was er gerade *kann*.`,
          followUps: [
            {
              id: 'singer-konsequent',
              objection: `Singer ist eben konsequent. Lieber konsequent als religiös inkonsequent.`,
              answer: `Konsequenz ist eine Tugend, wenn die Prämissen stimmen. Wenn aber eine Prämisse dazu führt, dass die Tötung behinderter Kinder oft nicht unrecht sein soll, ist das für die meisten Menschen ein starkes Indiz, dass die Prämisse falsch ist – ein Beweis durch Widerlegung (*reductio ad absurdum*). Die Juristin Harriet McBryde Johnson, selbst schwer behindert, hat Singer persönlich widersprochen: Ihr Leben sei nicht weniger wert.`,
              followUps: [
                {
                  id: 'ebenbild-unbegruendet',
                  objection: `„Ebenbild Gottes" ist doch nur eine religiöse Behauptung. Damit kannst du nichts begründen.`,
                  objectionBy: 'Peter Singer',
                  answer: `Sie erklärt etwas, das wir alle für wahr halten, besser als jede Alternative: dass alle Menschen gleich an Würde sind, obwohl sie sich in allen messbaren Fähigkeiten unterscheiden. Fähigkeiten gibt es nur in Graden – Intelligenz, Selbstbewusstsein, Empathie. Wer die Gleichheit darauf gründet, bekommt eine Rangordnung des Menschenwerts. Selbst säkulare Rechtsphilosophen wie Jeremy Waldron (*One Another's Equals*, 2017) ringen offen damit, wie sich menschliche Gleichheit ohne religiöse Grundlage begründen lässt.`,
                  sources: [{ kind: 'fachliteratur', author: 'Jeremy Waldron', work: 'One Another\'s Equals: The Basis of Human Equality', year: '2017', status: 'paraphrase', note: 'Waldron argumentiert säkular, nimmt aber religiöse Begründungen ernst.' }],
                  questionsBack: [`Worauf gründest du die gleiche Würde eines Hochbegabten und eines schwer geistig behinderten Menschen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'koennen-sie-leiden',
          objection: `Bentham hat es auf den Punkt gebracht: Die Frage ist nicht, ob sie denken oder sprechen können, sondern ob sie leiden können.`,
          objectionBy: 'Peter Singer',
          answer: `Da stimme ich zu einem großen Teil zu: Leidensfähigkeit ist moralisch bedeutsam, und unnötiges Leid zuzufügen ist Sünde – das sagt schon Spr 12,10. Aber aus der Leidensfähigkeit folgt eine Pflicht zur Barmherzigkeit, nicht die Gleichheit des Lebensrechts. Ein Mensch, der keine Schmerzen empfinden kann (es gibt solche Krankheiten), verliert dadurch nicht seine Würde.`,
          sources: [{ kind: 'gegner', author: 'Jeremy Bentham', work: 'An Introduction to the Principles of Morals and Legislation', ref: 'Kap. 17, Fußnote', year: '1789', quote: `Die Frage ist nicht: Können sie denken? oder: Können sie sprechen?, sondern: Können sie leiden?`, original: 'The question is not, Can they reason? nor, Can they talk? but, Can they suffer?', translation: 'eigene Übersetzung', status: 'verbatim' }],
          followUps: [
            {
              id: 'gleiches-leid-gleich',
              objection: `Gleiches Leid muss gleich zählen, egal bei welcher Art.`,
              objectionBy: 'Peter Singer',
              answer: `Unnötiges Leid ist bei jedem Geschöpf ein Übel – das teile ich. Aber Singers Prinzip der „gleichen Interessenabwägung" führt in Konfliktfällen dazu, dass das Wohl mehrerer Tiere das Leben eines Menschen überwiegen kann. Die meisten Menschen würden ein Kind aus einem brennenden Haus retten, bevor sie zwei Hunde retten – und halten das nicht für ein Vorurteil, sondern für richtig. Diese Intuition hat einen Grund: den Wert der Person.`,
            },
          ],
        },
      ],
    },
    {
      id: 'tiere-keine-seele',
      objection: `Christen sagen, Tiere hätten keine Seele und kämen nicht in den Himmel. Also sind sie wertlos.`,
      answer: `Die Bibel sagt das so nicht. Tiere haben eine *nep̄eš*, eine Lebensseele (Gen 1,20.24); die Väter unterschieden die vernunftbegabte, unsterbliche Seele des Menschen von der Seele der Tiere – nicht Seele von Nichts. Wert hängt auch nicht an Unsterblichkeit: Eine Blume ist schön, obwohl sie verwelkt. Und die Schrift sieht die ganze Schöpfung in die Erlösung einbezogen (Röm 8,21; Jes 11,6–9). Ob und wie Tiere in der neuen Schöpfung sein werden, hat die Kirche nicht dogmatisch festgelegt.`,
      followUps: [
        {
          id: 'tierleid-vor-menschen',
          objection: `Und Millionen Jahre Tierleid, Fressen und Gefressenwerden, lange bevor es Menschen gab? Wie passt das zu einem guten Schöpfer?`,
          answer: `Das ist eine ernste Frage, die einen eigenen Claim verdient (Theodizee: Tierleid). Kurz: Viele Christen sehen die Schöpfung als von Anfang an auf die Erlösung hin angelegt; andere verbinden das Leid mit dem Fall geistiger Mächte. Sicher ist: Die Bibel verspricht nicht nur die Erlösung der Menschen, sondern die Befreiung „aller Kreatur" vom Dienst des vergänglichen Wesens (Röm 8,21). Gott ist dem Leid der Tiere nicht gleichgültig.`,
        },
      ],
    },
    {
      id: 'tieropfer-verachtung',
      objection: `Der Gott der Bibel verlangte massenhaft Tieropfer. Das zeigt seine Verachtung für Tiere.`,
      answer: `Tieropfer waren in der ganzen antiken Welt verbreitet; die Bibel hat sie nicht erfunden, sondern begrenzt und geheiligt: Das Fleisch vieler Opfer wurde gegessen, das Töten wurde aus dem Alltag gehoben und vor Gott verantwortet. Die Propheten betonen, dass Gott keine Opfer braucht: „Alle Tiere im Walde sind mein" (Ps 50,10). Und das Christentum hat die blutigen Tieropfer beendet – weil Christus das eine Opfer ist (Hebr 10,4–10). Wo das Christentum sich ausbreitete, verschwanden die Tieropfer der heidnischen Tempel.`,
      followUps: [
        {
          id: 'schweine-gerasa',
          objection: `Jesus hat 2000 Schweine im See ertrinken lassen (Mk 5,13). Schon Bertrand Russell hat das kritisiert.`,
          objectionBy: 'Bertrand Russell',
          answer: `Russell hat das tatsächlich in *Why I Am Not a Christian* angeführt. Im Text sind es die Dämonen, die in die Schweine fahren und sie in den Tod treiben; Jesus lässt es zu, um einen gequälten Menschen zu befreien und die zerstörerische Natur des Bösen sichtbar zu machen. Die Geschichte zeigt eine Rangordnung: Ein Mensch ist mehr wert als eine Herde Schweine. Das ist kein Beweis der Tierverachtung, sondern genau die Unterscheidung, um die es in dieser Debatte geht.`,
        },
      ],
    },
    {
      id: 'harari-agrarrevolution',
      objection: `Die theistischen Religionen haben die Agrarrevolution und die Unterwerfung der Tiere gerechtfertigt: Gott gab dem Menschen die Herrschaft, also durfte er alles.`,
      objectionBy: 'Yuval Noah Harari',
      answer: `Die Domestizierung von Tieren begann Jahrtausende vor der Bibel und überall auf der Welt – sie ist kein biblisches Projekt. Auffällig ist vielmehr, wie viele Schutzbestimmungen die Tora für Nutztiere enthält: Sabbatruhe (Ex 23,12), kein Maulkorb beim Dreschen (Dtn 25,4), Hilfe für das gestürzte Tier sogar des Feindes (Ex 23,4–5), Schonung der Vogelmutter (Dtn 22,6–7). Harari zeichnet ein breites Panorama, aber bei der Bibel übersieht er die Details.`,
      followUps: [
        {
          id: 'christen-vegan',
          objection: `Dann müsste ein konsequenter Christ Veganer sein.`,
          answer: `Die koptische Fastenpraxis zeigt, dass der Verzicht auf tierische Produkte ein geistliches Ideal ist. Aber die Bibel macht ihn nicht zur Pflicht: Jesus aß Fisch (Lk 24,42–43) und das Passalamm, und Paulus warnt davor, sich gegenseitig wegen Speisen zu richten (Röm 14,2–3). Christen haben Freiheit – aber eine Freiheit in Verantwortung, die Tierquälerei ausschließt und Maß kennt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Worauf gründest du die gleiche Würde aller Menschen, wenn sich Menschen in allen Fähigkeiten unterscheiden?`,
    `Hältst du es wirklich für vertretbar, dass die Tötung eines behinderten Neugeborenen „oft nicht unrecht" ist?`,
    `Kennst du Spr 12,10 oder Dtn 25,4? Passt das zu einer Religion, die Tiere zu Sachen macht?`,
    `Wenn der Mensch nur ein Tier ist – warum sollte er dann eine Verantwortung für andere Tiere haben, die kein Tier für ihn hat?`,
  ],
  avoid: [
    `Das „Tiergebet des hl. Basilius" zitieren – es stammt nach heutigem Kenntnisstand nicht von Basilius und steht in keiner Fassung der Basilius-Liturgie, auch nicht der koptischen; vermutlich geht es auf Walter Rauschenbusch (1910) zurück.`,
    `Tierleid kleinreden („Tiere sind nur Instinktmaschinen") – das ist Descartes, nicht die Bibel, und widerspricht der Erfahrung.`,
    `Singer persönlich verunglimpfen; er ist ein ernsthafter Denker, dessen Prämissen man kritisieren sollte, nicht seinen Charakter.`,
    `Massentierhaltung als „biblisch erlaubt" verteidigen.`,
  ],
  concessions: [
    `Christen haben Tiere oft gedankenlos und grausam behandelt; die Sonderstellung des Menschen wurde als Lizenz missverstanden.`,
    `Singer hat zu Recht auf das enorme Leid in der industriellen Tierhaltung hingewiesen.`,
    `Descartes' Bild vom Tier als Maschine wurde auch von christlichen Denkern übernommen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Peter Singer', work: 'Animal Liberation', year: '1975', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andrew Linzey', work: 'Animal Theology', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Matthew Scully', work: 'Dominion: The Power of Man, the Suffering of Animals, and the Call to Mercy', year: '2002', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Living with Other Creatures: Green Exegesis and Theology', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Tierethik', 'Speziesismus', 'Peter Singer', 'Menschenwürde', 'Ebenbild Gottes', 'Fasten'],
  related: [
    'umwelt-tiere-krieg/christentum-umweltkrise',
    'theodizee/tierleid',
    'evolutionaere-psychologie/mensch-nur-tier',
    'bioethik/embryo-zellhaufen',
    'bioethik/sterbehilfe-barmherzig',
  ],
};

export default claim;
