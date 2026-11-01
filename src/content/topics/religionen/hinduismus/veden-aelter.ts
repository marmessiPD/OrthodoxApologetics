import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'veden-aelter',
  title: `„Die Veden sind älter – der Hinduismus ist die ursprüngliche Religion."`,
  proponents: [
    { name: 'Swami Dayananda Saraswati', role: 'Gründer des Arya Samaj (1824–1883)', work: 'Satyarth Prakash (1875) – die Veden als erste und ewige Offenbarung' },
    { name: 'Bal Gangadhar Tilak', role: 'Gelehrter und Freiheitskämpfer (1856–1920)', work: 'The Orion (1893); The Arctic Home in the Vedas (1903)' },
    { name: 'David Frawley (Vamadeva Shastri)', role: 'Amerikanischer Vedalehrer und Autor', work: 'Gods, Sages and Kings (1991)' },
    { name: 'Swami Vivekananda', role: 'Hindu-Mönch (1863–1902)', work: 'Rede „Paper on Hinduism", Chicago 1893' },
  ],
  steelman: `Der Hinduismus nennt sich selbst *Sanatana Dharma* – die ewige Ordnung. Die Veden gelten als *apaurusheya*, nicht von Menschen verfasst, sondern von den Sehern (Rishis) „gehört" (Shruti). Sie sind die ältesten heiligen Texte, die bis heute in lebendiger Liturgie rezitiert werden, mit einer mündlichen Überlieferungstreue, die ihresgleichen sucht. Manche Forscher wie Tilak haben aus astronomischen Angaben ein Alter von vielen Jahrtausenden abgeleitet. Verglichen damit sind Judentum, Christentum und Islam junge Religionen. Ist es nicht vernünftig anzunehmen, dass die älteste Überlieferung der ursprünglichen Wahrheit am nächsten steht – und dass jüngere Religionen nur Teile davon bewahrt oder entlehnt haben?`,
  biblical: {
    summary: `Die Bibel versteht sich nicht als „junge" Religion, sondern als Geschichte Gottes mit der ganzen Menschheit seit der Schöpfung (Gen 1–11: Adam, Noah, die Völker), mit Verheißungen für alle Völker (Gen 12,3) und Menschen außerhalb Israels, die Gott kannten (Melchisedek, Hiob). Ihr Mittelpunkt ist der ewige Logos, der „im Anfang" war (Joh 1,1) und sagte: „Ehe denn Abraham ward, bin ich" (Joh 8,58). Zugleich lehrt die Schrift, dass Alter keine Wahrheit garantiert: Auch alte Überlieferungen können Menschensatzung sein (Mk 7,8–9), und die Menschheit hat die ursprüngliche Gotteserkenntnis verdunkelt (Röm 1,21–23).`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,1', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,58', quote: `Jesus sprach zu ihnen: Wahrlich, wahrlich, ich sage euch: Ehe denn Abraham ward, bin ich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllet ward, sandte Gott seinen Sohn, geboren von einem Weibe …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,21', quote: `Dieweil sie wußten, daß ein Gott ist, und haben ihn nicht gepriesen als einen Gott noch ihm gedankt, sondern sind in ihrem Dichten eitel geworden, und ihr unverständiges Herz ist verfinstert.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die alexandrinischen Väter kannten die Weisheit Indiens: Clemens von Alexandrien erwähnt um 200 die Brahmanen und als erster griechischer Autor den Buddha, und er räumt ein, dass die Philosophie zuerst bei „Barbaren" blühte. Die frühen Apologeten haben das Altersargument selbst benutzt, um zu zeigen, dass Mose älter sei als die griechischen Philosophen. Doch Tertullian hat den entscheidenden Grundsatz formuliert: „Christus hat sich die Wahrheit genannt, nicht die Gewohnheit." Nicht das Alter, sondern die Wahrheit entscheidet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Verschleierung der Jungfrauen (De virginibus velandis)', ref: '1,1', year: 'ca. 207', original: 'Dominus noster Christus veritatem se, non consuetudinem, cognominavit.', quote: `Unser Herr Christus hat sich die Wahrheit genannt, nicht die Gewohnheit.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromata', ref: 'I,15,71', year: 'ca. 200', quote: `Unter den Indern gibt es auch solche, die den Geboten des Buddha folgen, den sie wegen seiner außerordentlichen Heiligkeit wie einen Gott verehren.`, status: 'paraphrase', note: 'Älteste erhaltene Erwähnung des Buddha in der griechischen Literatur; im selben Abschnitt nennt Clemens Brahmanen und andere „barbarische" Weise.' },
    ],
  },
  opposingView: {
    summary: `Nach dem Konsens der Indologie wurde der Rigveda etwa zwischen 1500 und 1200 v. Chr. mündlich gedichtet und über Jahrhunderte mit bewundernswerter Genauigkeit überliefert; schriftlich fixiert wurde er erst sehr viel später. Ein wichtiges Datum ist ein Vertrag des Mitanni-Reiches (14. Jh. v. Chr.), in dem die Götter Mitra, Varuna, Indra und die Nasatyas angerufen werden. Die Upanishaden, in denen Karma, Wiedergeburt und die Atman-Brahman-Lehre ausgeprägt werden, entstehen etwa ab dem 8./7. Jh. v. Chr.; die Bhagavad Gita und die großen Epen später. Ägyptische Pyramidentexte (ca. 24. Jh. v. Chr.) und sumerische Tempelhymnen sind älter als der Rigveda. Tilaks astronomische Frühdatierungen werden in der Fachwelt nicht übernommen.`,
    detail: `Wichtig ist auch: Die vedische Religion (Opferfeuer, Indra, Agni, Soma, Tieropfer) unterscheidet sich stark vom heutigen Hinduismus mit seiner Bhakti-Frömmigkeit zu Vishnu, Shiva und der Göttin. Der Begriff „Hinduismus" als Name einer einheitlichen Religion ist neuzeitlich. Der Rigveda selbst bekennt im Schöpfungshymnus (10,129) ehrliche Ungewissheit über den Ursprung.`,
    sources: [
      { kind: 'oestlich', work: 'Rigveda', ref: '10,129,6–7 (Nasadiya-Hymnus)', quote: `Wer weiß es wirklich, wer kann es hier verkünden, woher sie entstand, woher diese Schöpfung kam? … Der, der ihr Aufseher ist im höchsten Himmel, der weiß es – oder vielleicht weiß er es nicht.`, translation: 'eigene Übersetzung', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Michael Witzel', work: 'Beiträge zur Datierung und Geschichte der vedischen Texte (u. a. „Early Sanskritization", 1995)', status: 'paraphrase', quote: `Rigveda grob 1500–1200 v. Chr.; spätere vedische Schichten bis etwa 500 v. Chr.`, note: 'Witzel (Harvard) ist ein führender Vedaforscher; die Datierung ist Standard, aber nicht ohne Gegenstimmen.' },
    ],
  },
  quickAnswer: `Selbst wenn die Veden die ältesten heiligen Texte wären – Alter macht nichts wahr. Sonst müssten wir die Religion der Sumerer oder Ägypter annehmen, deren Texte noch älter sind. Außerdem beginnt die Bibel nicht vor 2000 Jahren, sondern mit der Schöpfung, und ihr Mittelpunkt ist das Wort, das „im Anfang" war. Tertullian sagte: Christus nannte sich die Wahrheit, nicht die Gewohnheit. Entscheidend ist also nicht, was älter ist, sondern was wahr ist.`,
  keyPoints: [
    `**Alter ist kein Wahrheitskriterium:** Das wäre ein Fehlschluss (Berufung auf Tradition). Die ältesten erhaltenen religiösen Texte stammen aus Ägypten und Sumer – niemand folgert daraus ihre Wahrheit.`,
    `**Die Fachdatierung:** Rigveda ca. 1500–1200 v. Chr.; Upanishaden ab ca. 8./7. Jh.; Gita und Epen später. Frühdatierungen in viele Jahrtausende sind Außenseiterpositionen.`,
    `**Vedische Religion ist nicht der heutige Hinduismus:** Karma, Wiedergeburt, Advaita und Bhakti treten erst später hervor. Das Altersargument kann die heutigen Lehren nicht stützen.`,
    `**Die Bibel beansprucht den Anfang:** Schöpfung, Noah, die Völker, Verheißung an alle (Gen 12,3) – und der ewige Logos (Joh 1,1; 8,58).`,
    `**Spuren der Wahrheit überall:** Wenn Gott sich der ganzen Menschheit am Anfang offenbarte, sind Wahrheitsspuren in alten Überlieferungen zu erwarten – aber auch Verdunkelung (Röm 1,21). „Älter" heißt nicht automatisch „reiner".`,
    `**Ehrliche Ungewissheit:** Der Rigveda selbst fragt im Schöpfungshymnus, ob überhaupt jemand den Ursprung kennt (10,129).`,
  ],
  voices: [
    {
      person: 'tertullian',
      role: 'als Jurist und Apologet',
      text: `Tertullian kannte das antike Argument, das Alte sei das Wahre, und er kannte den Vorwurf, das Christentum sei eine Neuheit. Sein Grundsatz schneidet beide Richtungen ab: Christus hat sich nicht „die Gewohnheit", sondern „die Wahrheit" genannt. Was gegen die Wahrheit steht, ist Irrtum – gleich, wie alt es ist. Darum darf auch der Christ nicht mit dem Alter seiner eigenen Tradition argumentieren, sondern mit ihrer Wahrheit. Tertullian wird nicht als Lehrautorität, aber als scharfer Apologet zitiert.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'De virginibus velandis', ref: '1,1', original: 'Dominus noster Christus veritatem se, non consuetudinem, cognominavit.', quote: `Unser Herr Christus hat sich die Wahrheit genannt, nicht die Gewohnheit.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Gelehrter der Weltstadt Alexandria',
      text: `Clemens lebte in der Stadt, in der Händler aus Indien verkehrten. Er wusste von Brahmanen, Gymnosophisten und vom Buddha und schrieb ohne Herablassung über sie; er räumte sogar ein, dass Philosophie zuerst bei den „Barbaren" blühte. Doch für ihn sind alle diese Weisheiten Vorbereitung und Teilwahrheit, die ihr Ziel im Logos finden, der in Christus Mensch geworden ist. Alte Weisheit wird gewürdigt – aber am Maßstab Christi geprüft.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromata', ref: 'I,15,71', status: 'paraphrase', quote: `Die Philosophie blühte zuerst bei den Barbaren: bei ägyptischen Propheten, Chaldäern, Druiden, persischen Magiern, indischen Gymnosophisten und den Anhängern des Buddha.` },
      ],
    },
    {
      person: 'johannes-apostel',
      role: 'als Evangelist des ewigen Logos',
      text: `Johannes beginnt sein Evangelium bewusst mit denselben Worten wie die Genesis: „Im Anfang". Das Wort, das in Jesus Fleisch wurde, ist nicht jünger als irgendeine Religion, sondern der Ursprung aller Dinge: „Alle Dinge sind durch dasselbe gemacht" (Joh 1,3). Und es ist „das wahrhaftige Licht, welches alle Menschen erleuchtet" (Joh 1,9) – also auch die Seher Indiens, soweit sie Wahres erkannten.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '1,9', quote: `Das war das wahrhaftige Licht, welches alle Menschen erleuchtet, die in diese Welt kommen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Winfried Corduan beschreibt die Entwicklung von der vedischen Opferreligion über die Upanishaden bis zur Bhakti-Frömmigkeit und zeigt, dass „der Hinduismus" eine Familie sehr verschiedener Traditionen ist. Zugleich weist er – im Anschluss an die Forschungen zum Urmonotheismus – auf Spuren eines Himmelsgottes in alten Schichten hin. Die Frage nach dem Ursprung der Religion sei offener, als es das populäre Schema „vom Primitiven zum Höheren" behauptet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God: A Fresh Look at the Case for Original Monotheism', year: '2013', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'aelteste-schriften',
      objection: `Die Veden sind die ältesten heiligen Schriften der Menschheit. Also sind sie der Urquell der Wahrheit, aus dem alles andere stammt.`,
      objectionBy: 'Swami Dayananda Saraswati (Linie)',
      answer: `Selbst wenn sie die ältesten wären: Alter macht nicht wahr. Sonst müssten wir die Religion der Ägypter oder Sumerer übernehmen, deren Texte noch älter sind. Tertullian sagte: Christus nannte sich die Wahrheit, nicht die Gewohnheit. Übrigens datiert die Fachwelt den Rigveda etwa auf 1500–1200 v. Chr. – das ist sehr alt und ehrwürdig, aber nicht der Anfang der Religionsgeschichte.`,
      followUps: [
        {
          id: 'datierung-kolonial',
          objection: `Diese Datierung ist ein koloniales Vorurteil. Tilak hat aus astronomischen Angaben gezeigt, dass die Veden viel älter sind.`,
          objectionBy: 'Bal Gangadhar Tilak / David Frawley',
          answer: `Die Datierung stützt sich vor allem auf Sprachvergleich – etwa die enge Verwandtschaft mit dem altiranischen Avesta – und auf Funde wie einen Mitanni-Vertrag aus dem 14. Jh. v. Chr., der Mitra, Varuna und Indra nennt. Astronomische Anspielungen lassen viele Deutungen zu. Aber ehrlich: Ich muss den Streit um die Datierung gar nicht gewinnen. Auch wenn die Veden 6000 Jahre alt wären, wären sie dadurch nicht wahr.`,
          followUps: [
            {
              id: 'aeltestes-am-reinsten',
              objection: `Aber das Älteste steht dem Ursprung am nächsten. Spätere Religionen haben nur Teile übernommen oder abgeschrieben.`,
              objectionBy: 'David Frawley (sinngemäß)',
              answer: `Das ist eine Behauptung, die Belege bräuchte. Die Bibel selbst sagt: Am Anfang kannte die ganze Menschheit Gott, und diese Erkenntnis wurde verdunkelt (Röm 1,21–23). Dann sind Wahrheitsspuren in allen alten Überlieferungen zu erwarten – auch in den Veden –, aber ebenso Verfälschungen. „Älter" kann also auch „früher abgewichen" heißen. Weder Alter noch Jugend entscheidet – nur die Prüfung der Wahrheit.`,
              questionsBack: [`Nach welchem Kriterium unterscheidest du in den Veden ursprüngliche Wahrheit von späterer Hinzufügung?`],
              followUps: [
                {
                  id: 'spuren-dann-veden-quelle',
                  objection: `Du gibst also zu, dass die Veden Spuren einer Ur-Offenbarung tragen. Warum nimmst du dann nicht gleich die Veden als Quelle, statt eines jüngeren Buches aus Palästina?`,
                  objectionBy: 'David Frawley (sinngemäß)',
                  answer: `Weil Spuren nicht das Ganze sind. Die Väter haben das schön ausgedrückt: Clemens von Alexandrien sah in der Philosophie der Griechen einen „Erzieher" auf Christus hin, so wie das Gesetz für Israel. Saatkörner der Wahrheit gibt es in vielen Traditionen – ich freue mich über jedes, das ich in den Veden finde. Aber ein Saatkorn ist nicht die Frucht. Die Frage ist, wo Gott sich selbst vollständig gezeigt hat; und das Christentum verweist dafür auf eine Person, nicht auf ein Alter.`,
                  detail: `Interessant ist, dass indische Christen diese Brücke selbst geschlagen haben. Der bengalische Theologe Krishna Mohan Banerjea (19. Jh.) wies etwa auf den Purusha-Hymnus (Rigveda 10,90) hin, in dem die Welt aus dem Opfer eines kosmischen Urmenschen hervorgeht, und sah darin eine Ahnung dessen, was in Christus Wirklichkeit wurde. Ob man dieser Deutung folgt oder nicht: Sie zeigt eine christliche Haltung, die das Erbe Indiens nicht verachtet, sondern als Sehnsucht ernst nimmt, die in Christus ihre Erfüllung findet.

Entscheidend ist der Maßstab. Spuren erkennt man erst, wenn man weiß, wovon sie Spuren sind. Für Christen ist dieser Maßstab Christus (Hebr 1,1–2): „Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat … hat er am letzten in diesen Tagen zu uns geredet durch den Sohn."`,
                  voices: [
                    { person: 'clemens-alexandrien', role: 'als alexandrinischer Lehrer', text: `Clemens von Alexandrien lehrt, dass Gott die Völker auf verschiedene Weise auf Christus vorbereitet hat: die Hebräer durch das Gesetz, die Griechen durch die Philosophie. Was an Wahrheit bei den Völkern zu finden ist, stammt letztlich vom einen Logos – aber es ist Vorbereitung, nicht Vollendung.`, sources: [
                      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'I,5,28', year: 'ca. 200', status: 'paraphrase', quote: `Die Philosophie war für die Griechen ein Erzieher auf Christus hin, wie das Gesetz für die Hebräer; sie bereitete den Weg für den, der in Christus vollendet wird.` },
                    ] },
                  ],
                  sources: [
                    { kind: 'oestlich', work: 'Rigveda', ref: '10,90 (Purusha-Sukta)', status: 'paraphrase', quote: `Die Götter vollziehen das Opfer mit dem Urmenschen (Purusha) als Opfergabe; aus ihm entstehen Welt, Gestirne und Menschenstände.` },
                    { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', status: 'paraphrase', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn.` },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'apaurusheya',
      objection: `Die Veden sind *apaurusheya* – nicht von Menschen verfasst, sondern ewig und von den Sehern nur gehört. Darum haben sie höchste Autorität.`,
      objectionBy: 'Swami Vivekananda (Linie)',
      answer: `Das ist ein Glaubenssatz – wie kann man ihn prüfen? Die Hymnen selbst werden traditionell bestimmten Sehern zugeordnet (etwa Vasishtha oder Vishvamitra) und enthalten sehr menschliche Bitten um Rinder, Söhne und Sieg. Und der berühmte Schöpfungshymnus endet mit der ehrlichen Frage, ob selbst der höchste Aufseher den Ursprung kennt (Rigveda 10,129). Das ist bewundernswert ehrlich – aber kaum der Anspruch zeitloser Allwissenheit.`,
      followUps: [
        {
          id: 'bibel-auch-inspiriert',
          objection: `Bei euch ist es doch dasselbe: Ihr sagt, die Bibel sei von Gott inspiriert. Das kann man genauso wenig prüfen.`,
          objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
          answer: `Ein wichtiger Unterschied: Das Christentum ruht nicht auf dem Anspruch eines zeitlosen Textes, sondern auf einem geschichtlichen Ereignis – der Auferstehung Jesu –, das man mit historischen Mitteln untersuchen kann. Die Bibel ist Gottes Wort in Menschenworten: „Getrieben vom Heiligen Geist haben die heiligen Menschen Gottes geredet" (2 Petr 1,21). Wenn du prüfen willst, ob sie stimmt, fang bei der Auferstehung an.`,
          followUps: [
            {
              id: 'auferstehung-nur-eigene-texte',
              objection: `Die Auferstehung ist doch auch nur in euren eigenen heiligen Texten bezeugt. Du beweist die Bibel mit der Bibel – das ist ein Zirkelschluss.`,
              objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
              answer: `Ich setze die Inspiration gar nicht voraus. Historiker behandeln die neutestamentlichen Schriften als antike Quellen wie jede andere – mehrere unabhängige Berichte, darunter Paulus' Briefe aus den 50er-Jahren. Dass Jesus unter Pontius Pilatus gekreuzigt wurde, bestätigen auch nichtchristliche Autoren wie Tacitus und Josephus. Die Frage ist dann: Was erklärt die Überzeugung der Jünger, das leere Grab und die Bekehrung von Gegnern am besten? Das ist historische Arbeit, kein Zirkel.`,
              detail: `Der Zirkelvorwurf träfe nur, wenn man sagen würde: „Die Bibel ist inspiriert, also ist die Auferstehung wahr." Christliche Apologeten argumentieren umgekehrt: Zuerst werden die Texte als historische Quellen geprüft (Datierung, Augenzeugennähe, Mehrfachbezeugung, peinliche Details wie die Frauen als erste Zeuginnen). Erst wenn die Auferstehung als beste Erklärung gelten kann, folgt daraus, dass Jesu Anspruch bestätigt ist – und von ihm her die Autorität der Schrift.

Richard Bauckham hat gezeigt, dass die Evangelien in großer Nähe zu benannten Augenzeugen stehen. Und Tacitus berichtet unabhängig, dass „Christus" unter Tiberius vom Prokurator Pontius Pilatus hingerichtet wurde (Annalen 15,44).`,
              voices: [
                { person: 'bauckham', role: 'als Neutestamentler', text: `Bauckham argumentiert, dass die Evangelien auf benannten Augenzeugen beruhen und dass die Namen in den Erzählungen oft genau die Zeugen kennzeichnen, auf die sich die Überlieferung stützt. Damit sind sie nicht späte Legenden, sondern Zeugnisliteratur.`, sources: [
                  { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the Eyewitnesses', year: '2006, 2. Aufl. 2017', status: 'paraphrase', quote: `Die Evangelien als Zeugnis, das eng mit benannten Augenzeugen verbunden ist.` },
                ] },
              ],
              sources: [
                { kind: 'sonstiges', author: 'Tacitus', work: 'Annalen', ref: '15,44', year: 'ca. 116', original: 'auctor nominis eius Christus Tiberio imperitante per procuratorem Pontium Pilatum supplicio adfectus erat', quote: `Der Urheber dieses Namens, Christus, war unter der Herrschaft des Tiberius vom Prokurator Pontius Pilatus hingerichtet worden.`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'historiker-keine-wunder',
                  objection: `Historiker können grundsätzlich keine Wunder feststellen. Die wahrscheinlichste Erklärung ist per Definition immer eine natürliche.`,
                  objectionBy: 'Sam Harris (sinngemäß, nach David Hume)',
                  answer: `Historiker können die Fakten feststellen: Tod, Begräbnis, leeres Grab, Erscheinungserlebnisse, Bekehrung von Gegnern. Ob Gott Jesus auferweckt hat, ist dann eine Schlussfolgerung auf die beste Erklärung. Wer Wunder „per Definition" ausschließt, trifft keine historische, sondern eine philosophische Vorentscheidung – den Naturalismus. Wenn es einen Gott gibt, ist eine Auferweckung nicht unwahrscheinlich, sondern genau das, was man erwarten würde, wenn er sich offenbaren will.`,
                  detail: `Michael Licona hat die Methodenfrage ausführlich untersucht: Historische Methode erlaubt es, Hypothesen nach Erklärungskraft, Erklärungsumfang, Plausibilität und Ad-hoc-Charakter zu vergleichen. Das Ergebnis darf nicht schon vorher feststehen. Das gilt übrigens in beide Richtungen: Ich verlange nicht, dass du die Auferstehung voraussetzt – nur, dass du sie nicht vorab ausschließt. Interessant ist, dass der Vedanta selbst nicht naturalistisch ist; ein Swami, der Humes Argument benutzt, sägt am eigenen Ast.`,
                  voices: [
                    { person: 'licona', role: 'als Historiker der Auferstehung', text: `Licona zeigt, dass ein methodischer Ausschluss übernatürlicher Erklärungen keine neutrale historische Regel ist, sondern eine weltanschauliche Vorgabe. Er vergleicht die gängigen naturalistischen Hypothesen mit der Auferstehungshypothese anhand anerkannter Kriterien und kommt zu dem Schluss, dass die Auferstehung die Fakten am besten erklärt.`, sources: [
                      { kind: 'fachliteratur', author: 'Michael R. Licona', work: 'The Resurrection of Jesus: A New Historiographical Approach', year: '2010', status: 'paraphrase', quote: `Historiker sollten übernatürliche Hypothesen nicht von vornherein ausschließen, sondern alle Hypothesen nach denselben Kriterien prüfen.` },
                    ] },
                  ],
                  questionsBack: [`Wenn es einen Gott gibt – warum sollte eine Auferweckung dann unmöglich sein?`, `Du glaubst an Brahman jenseits der Natur – warum dann ein naturalistisches Kriterium für Geschichte?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christentum-jung',
      objection: `Das Christentum ist eine junge Religion: 2000 Jahre gegen mindestens 5000 Jahre Sanatana Dharma.`,
      objectionBy: 'Swami Vivekananda (Linie)',
      answer: `Das Christentum beansprucht nicht, vor 2000 Jahren angefangen zu haben. Es versteht sich als Erfüllung von Gottes Geschichte mit der Menschheit seit der Schöpfung – mit der Verheißung nach dem Sündenfall (Gen 3,15), dem Bund mit Noah und mit Abraham. Und sein Mittelpunkt ist der Logos, der „im Anfang" war (Joh 1,1). Umgekehrt ist „Sanatana Dharma" als eine einheitliche Religion von 5000 Jahren eine moderne Zusammenschau: Die vedische Opferreligion unterscheidet sich stark von der späteren Bhakti und vom Advaita.`,
      followUps: [
        {
          id: 'organische-entwicklung',
          objection: `Der Hinduismus hat sich eben organisch entwickelt. Das zeigt seine Lebendigkeit.`,
          objectionBy: 'Sarvepalli Radhakrishnan (Linie)',
          answer: `Einverstanden – aber dann kannst du nicht das Alter der Veden als Beleg für heutige Lehren wie Karma, Wiedergeburt oder Advaita anführen, die vor allem in späteren Schichten hervortreten. Das Altersargument und das Entwicklungsargument ziehen in entgegengesetzte Richtungen: Entweder ist das Alte maßgeblich, oder die Entwicklung.`,
          followUps: [
            {
              id: 'upanishaden-essenz',
              objection: `Die Upanishaden sind die Essenz der Veden – darum heißt es Vedanta, „Ende der Veden".`,
              objectionBy: 'Swami Sarvapriyananda',
              answer: `Das ist eine Deutung. Die Mimamsa-Schule, ebenfalls streng orthodox, sah den Kern der Veden in den Opfervorschriften, nicht in den Upanishaden. Ihr streitet also innerhalb der Tradition darüber, was das Wesentliche ist. Das ist legitim – zeigt aber, dass das Alter allein keine Antwort gibt.`,
              followUps: [
                {
                  id: 'shankara-harmonisiert',
                  objection: `Shankara hat das längst geklärt: Der Ritualteil der Veden (Karma-Kanda) ist für die Unreifen, der Erkenntnisteil (Jnana-Kanda) für die Reifen. Beides gehört zusammen – mit den Upanishaden als Krönung.`,
                  objectionBy: 'Swami Sarvapriyananda (sinngemäß)',
                  answer: `Das ist eine kluge Deutung – aber eine Deutung aus dem 8. Jahrhundert, also über tausend Jahre nach den Texten. Ramanuja und Madhva lasen dieselben Upanishaden ganz anders: als Zeugnis eines persönlichen Gottes, von dem die Seelen unterschieden bleiben. Wenn dieselben ehrwürdigen Texte so gegensätzliche Lehren tragen, entscheidet nicht ihr Alter, sondern der Schlüssel, mit dem man sie liest. Christen haben einen solchen Schlüssel: Christus selbst, der „die Schrift auslegte" (Lk 24,27) – und seine Autorität ruht auf einem öffentlichen Ereignis.`,
                  detail: `Das ist kein Vorwurf an die indische Tradition, sondern eine Beobachtung: Jede Schrifttradition braucht eine Auslegungsautorität. Im Vedanta gibt es drei große Schulen (Advaita, Vishishtadvaita, Dvaita), die sich gegenseitig widersprechen und alle auf die Upanishaden, die Brahma-Sutras und die Gita berufen. Im orthodoxen Christentum wird die Schrift in der Kirche, mit den Vätern und der Liturgie gelesen – auf Christus hin. Das Alter der Veden kann den Streit zwischen Shankara und Ramanuja nicht schlichten; also kann es auch den Streit zwischen Veden und Evangelium nicht entscheiden.`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '24,27', status: 'paraphrase', quote: `Und er fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren.` },
                  ],
                  questionsBack: [`Wenn Shankara und Ramanuja dieselben Texte gegensätzlich lesen – nach welchem Kriterium entscheidest du zwischen ihnen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-von-mythen-abhaengig',
      objection: `Die biblischen Erzählungen hängen von älteren Mythen ab – der Flutbericht findet sich auch in Indien, etwa die Geschichte von Manu und dem Fisch.`,
      objectionBy: 'David Frawley (sinngemäß)',
      answer: `Flutüberlieferungen gibt es in vielen Kulturen – in Mesopotamien, in Indien (Shatapatha-Brahmana 1,8,1), bei vielen Völkern. Für Christen ist das eher ein Hinweis auf eine gemeinsame Erinnerung der Menschheit als ein Beleg für Abschreiben in eine bestimmte Richtung. Entscheidend sind die Unterschiede: In der Bibel handelt der eine, gerechte Schöpfergott aus moralischen Gründen und schließt einen Bund mit der ganzen Menschheit.`,
      followUps: [
        {
          id: 'gemeinsame-erinnerung-beliebig',
          objection: `„Gemeinsame Erinnerung" ist eine bequeme Ausrede. Genauso gut könnte die Bibel die jüngste, abgeleitete Fassung sein.`,
          objectionBy: 'David Frawley (sinngemäß)',
          answer: `Ähnlichkeit allein beweist keine Abhängigkeit – das gilt für beide Seiten. Mit derselben Logik könnte man die Veden von älteren indoeuropäischen oder mesopotamischen Mythen ableiten. Darum schlage ich vor: Lassen wir das Altersargument ganz beiseite und prüfen die Inhalte und, wo möglich, die Geschichte. Siehe dazu auch den Claim „Die Genesis ist von babylonischen Mythen abgeschrieben".`,
        },
      ],
    },
    {
      id: 'rishis-kannten-wissenschaft',
      objection: `Die Rishis kannten Wahrheiten, die die Wissenschaft erst heute entdeckt: Weltzeitalter von Milliarden Jahren, Atome, ein pulsierendes Universum. Die Bibel spricht von 6000 Jahren. Wer ist hier näher an der Wahrheit?`,
      objectionBy: 'David Frawley / Deepak Chopra (sinngemäß)',
      answer: `Ich bewundere die indische Geistesgeschichte – von ihr haben wir etwa das Dezimalsystem mit der Null. Aber nachträglich hineingelesene Parallelen beweisen nichts: Mit derselben Methode „findet" man moderne Physik auch im Koran oder in der Bibel. Zyklen von Milliarden Jahren sind kein Urknall mit einem Anfang, und indische Atomlehren sind Philosophie, keine Experimente. Und die Kirche hat übrigens kein Dogma über das Erdalter.`,
      detail: `Die koptisch-orthodoxe Kirche legt sich beim Erdalter nicht fest – die Väter lasen die Schöpfungstage unterschiedlich, die alexandrinische Tradition auch geistlich. Der Einwand trifft also einen Strohmann.

Grundsätzlich gilt: Religiöse Texte sind keine naturwissenschaftlichen Lehrbücher, und das „Vorwegnahme"-Argument ist auf allen Seiten schwach. Christen sollten es ebenfalls meiden. Was man fairerweise sagen kann: Die moderne Kosmologie mit einem Anfang des Universums passt besser zur biblischen Schöpfung aus dem Nichts als zu einem anfangslosen Kreislauf – aber auch das ist ein Indiz, kein Beweis. Winfried Corduan rät, die Wahrheit einer Religion an ihren Kernaussagen über Gott, Mensch und Heil zu prüfen, nicht an Randparallelen.`,
      voices: [
        { person: 'corduan', role: 'als Religionswissenschaftler', text: `Corduan stellt die indischen Traditionen in ihrer eigenen Logik dar und warnt vor oberflächlichen Vergleichen in beide Richtungen. Für ihn ist entscheidend, was eine Religion über die letzte Wirklichkeit und die Erlösung des Menschen sagt – dort liegen die wirklichen Unterschiede und die eigentliche Wahrheitsfrage.`, sources: [
          { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths: A Christian Introduction to World Religions', year: '2. Aufl. 2012', status: 'paraphrase', quote: `Religionen sachlich in ihren eigenen Begriffen darstellen und an ihren Kernaussagen prüfen.` },
        ] },
      ],
      questionsBack: [`Wenn ein Muslim dir „wissenschaftliche Wunder" im Koran zeigt – überzeugt dich das? Warum sollte mich die gleiche Methode bei den Veden überzeugen?`],
    },
  ],
  questionsToAsk: [
    `Wenn das Ältere wahrer ist – warum folgst du dann nicht der noch älteren Religion der Sumerer oder Ägypter?`,
    `Lehrt der Rigveda Karma und Wiedergeburt so, wie sie heute geglaubt werden?`,
    `Wie kann man prüfen, ob ein Text „nicht von Menschen verfasst" ist?`,
    `Was bedeutet für dich der Schluss des Schöpfungshymnus: „Vielleicht weiß er es nicht"?`,
  ],
  avoid: [
    `Behaupte nicht, „die Bibel ist das älteste Buch der Welt" – das ist falsch und leicht widerlegbar.`,
    `Verwende nicht die alte Apologeten-These, Platon oder die Inder hätten bei Mose abgeschrieben – dafür gibt es keine Belege.`,
    `Mach die mündliche Überlieferungsleistung der Veden nicht lächerlich – sie ist eine kulturelle Glanzleistung.`,
  ],
  concessions: [
    `Die Veden gehören zu den ältesten bis heute liturgisch gebrauchten religiösen Texten der Welt, und ihre mündliche Überlieferung ist erstaunlich genau.`,
    `Auch christliche Apologeten haben früher mit dem Alter argumentiert (Mose älter als Platon) – das Argument war damals so schwach wie heute.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gavin Flood', work: 'An Introduction to Hinduism', year: '1996', status: 'paraphrase', note: 'Standard-Einführung eines nicht-apologetischen Religionswissenschaftlers.' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Veden', 'Rigveda', 'Alter', 'Sanatana Dharma', 'Datierung'],
  related: [
    'weitere-religionen/religion-aus-animismus',
    'genesis/genesis-von-babylon-kopiert',
    'hinduismus/alle-wege-zum-gipfel',
    'okkultismus/naturreligion-urspruenglich',
  ],
};

export default claim;
