import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'beziehung-statt-religion',
  title: `„Christsein ist eine persönliche Beziehung zu Jesus, keine Religion mit Kirche."`,
  proponents: [
    { name: 'Jefferson Bethke', role: 'Evangelikaler Autor und YouTuber', work: 'Video „Why I Hate Religion, But Love Jesus" (2012); Buch „Jesus > Religion" (2013)' },
    { name: 'Bill Bright', role: 'Gründer von Campus Crusade for Christ', work: '„Die vier geistlichen Gesetze" – Glaube als persönliche Beziehung, beginnend mit einer Entscheidung' },
    { name: 'Karl Barth', role: 'Reformierter Theologe', work: 'Kirchliche Dogmatik I/2, § 17 „Gottes Offenbarung als Aufhebung der Religion" („Religion ist Unglaube")' },
    { name: 'Bewegung „spirituell, aber nicht religiös"', role: 'Breite Strömung der Gegenwart', work: 'Glaube an Jesus ohne Bindung an Kirche, Liturgie oder Lehre' },
  ],
  steelman: `Jesus hat nie eine Religion gegründet. Seine schärfsten Gegner waren die Frommen: die Pharisäer mit ihren Regeln, die Priester mit ihrem Tempel. Er warf ihnen vor, Gott mit den Lippen zu ehren, während ihr Herz fern ist (Mk 7,6), und zitierte Hosea: „Ich habe Wohlgefallen an Barmherzigkeit und nicht am Opfer" (Mt 9,13). Er sagte zur Samariterin, die wahren Anbeter würden Gott weder auf diesem Berg noch in Jerusalem anbeten, sondern „im Geist und in der Wahrheit" (Joh 4,23). Ewiges Leben heißt, Gott zu *kennen* (Joh 17,3); Jesus nennt uns Freunde (Joh 15,15) und steht vor der Tür und klopft an (Offb 3,20) – das ist eine persönliche Einladung, keine Mitgliedschaft in einer Institution. Religion ist der Versuch des Menschen, durch Riten und Leistungen zu Gott zu gelangen; das Evangelium ist Gottes Weg zum Menschen. Karl Barth nannte Religion deshalb „Unglaube". Und die Geschichte zeigt, was Institutionen anrichten: Machtkämpfe, Kreuzzüge, Missbrauch, tote Rituale, die niemand versteht. Was zählt, ist dein Herz und deine Beziehung zu Jesus – nicht, welcher Kirche du angehörst.`,
  biblical: {
    summary: `Die Schrift kennt den Gegensatz „Beziehung statt Religion" nicht. Jakobus nennt den wahren Glauben ausdrücklich **Religion** (*thrēskeia*): „Ein reiner und unbefleckter Gottesdienst vor Gott dem Vater ist der: die Waisen und Witwen in ihrer Trübsal besuchen und sich von der Welt unbefleckt erhalten" (Jak 1,27). Er unterscheidet nicht Religion von Beziehung, sondern **eitle** von **reiner** Religion (Jak 1,26–27). Die Urgemeinde lebte ihre Beziehung zu Christus von Anfang an gemeinschaftlich und geordnet: „Sie blieben aber beständig in der Apostel Lehre und in der Gemeinschaft und im Brotbrechen und im Gebet" (Apg 2,42). Und Christi Liebe gilt einer **Braut**, der Kirche: „Christus hat geliebt die Gemeinde und hat sich selbst für sie gegeben … Das Geheimnis ist groß; ich sage aber von Christus und der Gemeinde" (Eph 5,25.32). Wer den Bräutigam will, bekommt die Braut mit.`,
    detail: `**Jesus selbst praktizierte „Religion":** Er ging „nach seiner Gewohnheit" am Sabbat in die Synagoge (Lk 4,16), zog zu den Festen nach Jerusalem (Joh 7,10), feierte das Passa, betete die Psalmen, lehrte ein festes Gebet (das Vaterunser), fastete, setzte Taufe und Abendmahl ein und betete in Gethsemane dreimal „dieselben Worte" (Mt 26,44).

**Jesu Kritik an den Pharisäern** richtete sich gegen Heuchelei, nicht gegen den Gottesdienst: „Ihr verzehntet die Minze … und lasset dahinten das Schwerste im Gesetz, nämlich das Gericht, die Barmherzigkeit und den Glauben! Dies sollte man tun und jenes nicht lassen" (Mt 23,23) – beides, nicht entweder–oder.

**Die Apostel nach Pfingsten** gingen „um die neunte Stunde, da man pflegt zu beten" in den Tempel (Apg 3,1) – feste Gebetszeiten, wie sie die Agpeya bis heute bewahrt. Die Gemeinde hatte Älteste (Apg 14,23), Diakone (Apg 6), Gemeindezucht (Mt 18,17) und ein Konzil (Apg 15).

**Offb 3,20** ist an eine *Gemeinde* gerichtet (Laodizea), und das Bild ist ein gemeinsames Mahl („das Abendmahl mit ihm halten").`,
    sources: [
      { kind: 'bibel', work: 'Jakobus', ref: '1,27', quote: `Ein reiner und unbefleckter Gottesdienst vor Gott dem Vater ist der: die Waisen und Witwen in ihrer Trübsal besuchen und sich von der Welt unbefleckt erhalten.`, original: `θρησκεία καθαρὰ καὶ ἀμίαντος παρὰ τῷ θεῷ καὶ πατρὶ αὕτη ἐστίν`, translation: 'Luther 1912', status: 'verbatim', note: 'Luthers „Gottesdienst" gibt das griechische thrēskeia wieder, das genau „Religion, Gottesverehrung" bedeutet.' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,42', quote: `Sie blieben aber beständig in der Apostel Lehre und in der Gemeinschaft und im Brotbrechen und im Gebet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '5,25.32', quote: `Ihr Männer, liebet eure Weiber, gleichwie Christus auch geliebt hat die Gemeinde und hat sich selbst für sie gegeben … Das Geheimnis ist groß; ich sage aber von Christo und der Gemeinde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,16', quote: `Und er kam gen Nazareth, da er erzogen war, und ging in die Schule nach seiner Gewohnheit am Sabbattage und stand auf und wollte lesen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '23,23', quote: `Weh euch, Schriftgelehrte und Pharisäer, ihr Heuchler, die ihr verzehntet die Minze, Dill und Kümmel, und lasset dahinten das Schwerste im Gesetz, nämlich das Gericht, die Barmherzigkeit und den Glauben! Dies sollte man tun und jenes nicht lassen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '10,25', quote: `… und nicht verlassen unsere Versammlung, wie etliche pflegen, sondern untereinander ermahnen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Kirche lehrt die **persönlichste Beziehung zu Gott**, die man sich denken kann: die Vereinigung mit ihm, die Theosis – im Gebet, in der Beichte, in der Kommunion mit dem Leib und Blut Christi. Aber sie lehrt sie als **persönlich, nicht individualistisch**. Christus begegnet uns im Leib Christi, der Kirche; man wird in der Taufe in diesen Leib eingegliedert und lebt von seinen Sakramenten. Die Väter haben das unmissverständlich gesagt: „Wer die Kirche nicht zur Mutter hat, kann Gott nicht zum Vater haben" (Cyprian). Liturgie, Fasten, Agpeya und Gemeinschaft sind nicht Konkurrenz zur Beziehung mit Christus, sondern ihre Sprache und ihr Raum.`,
    detail: `**Ignatius von Antiochien** (um 110) mahnt die Gemeinde von Smyrna, nichts ohne den Bischof zu tun, und nennt die Kirche zum ersten Mal „katholisch" – allumfassend: Wo Christus ist, da ist die katholische Kirche. Für ihn ist die Eucharistie „Arznei der Unsterblichkeit" (an die Epheser 20,2).

**Die koptische Erfahrung:** Im 20. Jahrhundert verband die Sonntagsschulbewegung des hl. Habib Girgis gerade beides: persönliche Bibellektüre, Gebet und Umkehr – und Treue zur Liturgie und Lehre der Kirche. Aus ihr kamen Papst Schenuda III., Vater Matta el-Meskeen und viele Bischöfe. Vater Matta el-Meskeen schreibt im „Orthodoxen Gebetsleben", dass das persönliche Gebet aus der Liturgie lebt und in sie zurückführt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Einheit der katholischen Kirche (De unitate)', ref: '6', year: '251', quote: `Gott kann nicht mehr zum Vater haben, wer die Kirche nicht zur Mutter hat.`, original: `Habere iam non potest Deum patrem qui ecclesiam non habet matrem.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '8,2', year: 'um 110', quote: `Wo der Bischof erscheint, da soll die Gemeinde sein, wie da, wo Christus Jesus ist, die katholische Kirche ist.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '20,2', year: 'um 110', quote: `… indem ihr ein Brot brecht, das Arznei der Unsterblichkeit ist, Gegengift gegen den Tod.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life)', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, Christsein ist eine persönliche Beziehung zu Jesus – die orthodoxe Kirche nennt ihr Ziel sogar „Vereinigung mit Gott". Aber die Bibel kennt den Gegensatz „Beziehung statt Religion" nicht: Jakobus nennt den wahren Glauben ausdrücklich „reine Religion" (Jak 1,27, *thrēskeia*). Die ersten Christen lebten ihre Beziehung zu Christus „in der Apostel Lehre, in der Gemeinschaft, im Brotbrechen und im Gebet" (Apg 2,42). Christus liebt eine Braut, die Kirche (Eph 5,25–32) – wer den Bräutigam will, bekommt die Braut mit. Und Jesus selbst ging „nach seiner Gewohnheit" in den Gottesdienst (Lk 4,16).`,
  keyPoints: [
    `**Die Bibel nennt wahren Glauben „Religion":** Jak 1,26–27 unterscheidet eitle und reine *thrēskeia*, nicht Religion und Beziehung.`,
    `**Jesus praktizierte Gottesdienst:** Synagoge „nach seiner Gewohnheit" (Lk 4,16), Feste, Psalmen, Vaterunser, Fasten, Taufe, Abendmahl.`,
    `**Jesu Kritik galt der Heuchelei:** „Dies sollte man tun und jenes nicht lassen" (Mt 23,23).`,
    `**Die Urgemeinde war geordnet:** Lehre, Gemeinschaft, Brotbrechen, Gebete (Apg 2,42), feste Gebetszeiten (Apg 3,1), Älteste, Diakone, Konzil.`,
    `**Christus und die Kirche gehören zusammen:** Braut (Eph 5), Leib (1 Kor 12,27), „Wer die Kirche nicht zur Mutter hat …" (Cyprian).`,
    `**Persönlich ≠ individualistisch:** Die tiefste persönliche Beziehung zu Christus wächst in Gebet, Beichte und Eucharistie – in der Gemeinschaft.`,
  ],
  voices: [
    {
      person: 'ignatius-antiochien',
      role: 'als Bischof und Märtyrer der apostolischen Generation',
      text: `Ignatius kannte die Apostelzeit aus nächster Nähe. Auf dem Weg zu seinem Martyrium in Rom schrieb er sieben Briefe, die von glühender persönlicher Liebe zu Christus erfüllt sind – „mein Eros ist gekreuzigt" – und zugleich unermüdlich zur Einheit mit Bischof, Presbytern und Diakonen und zur gemeinsamen Eucharistie mahnen. Für ihn gibt es keinen Gegensatz: Gerade wer Christus persönlich liebt, bleibt in seinem Leib. Wer sich von der Eucharistie und der Gemeinde fernhält, so Ignatius, trennt sich von Christus selbst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Römer', ref: '7,2', year: 'um 110', status: 'paraphrase', quote: `Meine Liebe (Eros) ist gekreuzigt.` },
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Smyrnäer', ref: '7–8', status: 'paraphrase' },
      ],
    },
    {
      person: 'cyprian',
      role: 'als Bischof von Karthago in einer Zeit der Spaltungen',
      text: `Cyprian schrieb seine Schrift über die Einheit der Kirche 251, als nach der Verfolgung unter Decius Spaltungen drohten. Sein Bild: Wie die Sonne viele Strahlen hat, aber ein Licht ist, und ein Baum viele Zweige, aber eine Wurzel, so ist die Kirche eine. Ein Zweig, der vom Baum abgerissen wird, verdorrt. Darum sein berühmter Satz, niemand könne Gott zum Vater haben, der die Kirche nicht zur Mutter hat. Das ist kein Machtanspruch, sondern Sorge: Glaube ohne Gemeinschaft verkümmert.`,
      sources: [{ kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'De unitate', ref: '5–6', year: '251', status: 'paraphrase' }],
    },
    {
      person: 'habib-girgis',
      role: 'als Gründer der koptischen Sonntagsschulbewegung',
      text: `Habib Girgis erlebte, wie protestantische Missionen in Ägypten Kopten mit dem Ruf nach „persönlichem Glauben" anzogen, während viele Gemeinden geistlich verarmt waren. Seine Antwort war nicht, den Ruf zurückzuweisen, sondern ihn in der Kirche zu erfüllen: Er gründete Sonntagsschulen, lehrte Kinder und Jugendliche die Bibel, das Gebet und die Liturgie, und bildete Priester aus. Er zeigte, dass persönliche Frömmigkeit und orthodoxe Kirchlichkeit zusammengehören – und dass man die Antwort auf toten Formalismus in der eigenen Kirche findet.`,
      sources: [{ kind: 'koptisch', author: 'Habib Girgis', work: 'Die orthodoxe Glaubenslehre; Lehrbücher der Sonntagsschule', status: 'paraphrase' }],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als Lehrer des Gebets',
      text: `Vater Matta el-Meskeen schreibt über das Gebet mit einer Intensität, die jede Vorstellung von „toter Religion" widerlegt: Gebet ist Begegnung mit dem lebendigen Gott, Wohnen in seiner Gegenwart, Hingabe des ganzen Lebens. Aber er betont, dass dieses persönliche Gebet aus der Liturgie, den Psalmen und den Vätern lebt. Die Kirche ist für ihn kein Hindernis zwischen dem Menschen und Gott, sondern der Ort, an dem Christus sich schenkt.`,
      sources: [{ kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben', status: 'paraphrase' }],
    },
    {
      person: 'schmemann',
      role: 'als Liturgiewissenschaftler',
      text: `Alexander Schmemann beschreibt die Liturgie als Weg, auf dem die Kirche zusammenkommt, um zu werden, was sie ist: der Leib Christi. Die Eucharistie ist für ihn das „Sakrament der Versammlung" – Christsein ist wesentlich ein gemeinsames Hinzutreten zu Gott, nicht eine private Spiritualität. Er warnt vor einer Frömmigkeit, die Gottesdienst als Mittel zur individuellen religiösen Erbauung versteht; genau das wäre „Religion" im schlechten Sinn. Die Liturgie dagegen ist Teilnahme am Leben Christi selbst.`,
      sources: [{ kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'The Eucharist. Sacrament of the Kingdom', year: '1988 (engl.)', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'jesus-gegen-religion',
      objection: `„Jesus hat die religiösen Führer seiner Zeit bekämpft. Er kam nicht, um eine neue Religion zu gründen, sondern um uns von Religion zu befreien."`,
      objectionBy: 'Jefferson Bethke',
      answer: `Jesus bekämpfte Heuchelei, nicht Gottesdienst. Er ging „nach seiner Gewohnheit" am Sabbat in die Synagoge (Lk 4,16), zog zu den Festen nach Jerusalem, betete die Psalmen, lehrte ein festes Gebet und setzte Taufe und Abendmahl ein. Den Pharisäern sagte er: „Dies sollte man tun und jenes nicht lassen" (Mt 23,23) – den Gottesdienst *und* Barmherzigkeit. Wer sich auf Jesus beruft, um Gottesdienst abzulehnen, hat ein anderes Bild von Jesus als die Evangelien.`,
      followUps: [
        {
          id: 'barmherzigkeit-nicht-opfer',
          objection: `„Aber Jesus zitiert Hosea: ‚Ich habe Wohlgefallen an Barmherzigkeit und nicht am Opfer.' Gott will Herzen, keine Rituale."`,
          objectionBy: 'Evangelikaler Prediger',
          answer: `„Nicht A, sondern B" ist im Hebräischen oft eine Vergleichsform: „mehr B als A" – Hosea fährt fort: „an der Erkenntnis Gottes *mehr* als am Brandopfer" (Hos 6,6). Auch Psalm 51 sagt erst, Gott wolle ein zerbrochenes Herz statt Opfer, und schließt dann: „Dann werden dir gefallen die Opfer der Gerechtigkeit" (Ps 51,21). Gott will das Herz *im* Gottesdienst, nicht den Gottesdienst ohne Herz – und erst recht nicht das Herz ohne Gottesdienst.`,
          sources: [
            { kind: 'bibel', work: 'Hosea', ref: '6,6', quote: `Denn ich habe Lust an der Liebe und nicht am Opfer, und an der Erkenntnis Gottes und nicht am Brandopfer.`, translation: 'Luther 1912', status: 'verbatim', note: 'Die Parallele „Erkenntnis Gottes – Brandopfer" zeigt die hebräische Vergleichsform („mehr als").' },
          ],
          followUps: [
            {
              id: 'wiederholte-gebete-plappern',
              objection: `„Immer dieselben Gebete wiederholen ist doch genau das ‚Plappern', das Jesus verbietet (Mt 6,7)."`,
              objectionBy: 'Freikirchlicher Gemeindeleiter',
              answer: `Jesus verbietet dort, „viele Worte" zu machen wie die Heiden, die meinen, durch Masse erhört zu werden – und gibt im nächsten Atemzug ein festes Gebet zum Wiederholen: das Vaterunser (Mt 6,9–13). In Gethsemane betete er dreimal „dieselben Worte" (Mt 26,44). Die Psalmen sind ein festes Gebetbuch. Wiederholung ist nicht Plappern, wenn das Herz dabei ist – wie ein „Ich liebe dich", das man jeden Tag sagt.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '26,44', quote: `Und er ließ sie und ging abermals hin und betete zum drittenmal und redete dieselben Worte.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'freier-lobpreis-echter',
                  objection: `„Unser freier Lobpreis kommt von Herzen. Eure Liturgie ist auswendig gelernt und deshalb nicht echt."`,
                  objectionBy: 'Lobpreisleiter einer Freikirche',
                  answer: `Auch freier Lobpreis hat feste Formen – dieselben Lieder, Abläufe und Wendungen jeden Sonntag. Echtheit hängt nicht von Spontaneität ab, sondern vom Herzen. Und der Himmel selbst feiert Liturgie: Die vier Wesen rufen „Tag und Nacht ohne Ruhe: Heilig, heilig, heilig ist Gott der Herr, der Allmächtige" (Offb 4,8) – seit Ewigkeit dieselben Worte. Die koptische Liturgie stimmt genau in dieses himmlische Lob ein.`,
                  sources: [
                    { kind: 'bibel', work: 'Offenbarung', ref: '4,8', quote: `… und hatten keine Ruhe Tag und Nacht und sprachen: Heilig, heilig, heilig ist Gott der HERR, der Allmächtige, der da war und der da ist und der da kommt!`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Sind die Engel in Offb 4,8 unecht, weil sie Tag und Nacht dieselben Worte sprechen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'priester-altar-abgeschafft',
          objection: `„Priester, Altar und Opfer gehören zur alten Religion. Durch Christi einmaliges Opfer ist das alles abgeschafft (Hebr 10,10)."`,
          objectionBy: 'Reformierter Theologe',
          answer: `Christi Opfer ist einmalig und vollkommen – die Eucharistie wiederholt es nicht, sondern macht es gegenwärtig, wie Jesus selbst geboten hat: „Das tut zu meinem Gedächtnis" (Lk 22,19). Paulus spricht vom „Tisch des Herrn" im Gegensatz zum Altar der Götzen (1 Kor 10,21), und Hebr 13,10 sagt: „Wir haben einen Altar." Schon die Didache (um 100) bezieht Mal 1,11 – das „reine Opfer" unter den Völkern – auf die sonntägliche Eucharistie.`,
          sources: [
            { kind: 'bibel', work: 'Hebräer', ref: '13,10', quote: `Wir haben einen Altar, davon nicht Macht haben zu essen, die der Hütte pflegen.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'kirchenvater', work: 'Didache (Lehre der zwölf Apostel)', ref: '14,1–3', year: 'um 100', status: 'paraphrase', quote: `Am Herrentag kommt zusammen, brecht das Brot und sagt Dank, nachdem ihr eure Übertretungen bekannt habt, damit euer Opfer rein sei … Denn dies ist das vom Herrn Gesagte: An jedem Ort und zu jeder Zeit soll man mir ein reines Opfer darbringen (Mal 1,11).` },
          ],
        },
      ],
    },
    {
      id: 'jak-1-27-ethik',
      objection: `„Gerade Jak 1,27 zeigt doch: Wahre ‚Religion' ist nicht Kirche und Ritual, sondern Waisen und Witwen helfen. Ethik statt Liturgie!"`,
      objectionBy: 'Liberaler Theologe',
      answer: `Jakobus sagt „reine Religion" ist Barmherzigkeit und Heiligkeit – aber er stellt sie nicht gegen das Gemeindeleben. Derselbe Brief spricht von der „Versammlung" (*synagōgē*, Jak 2,2), ordnet an, dass die Ältesten die Kranken mit Öl salben (Jak 5,14), und dass man einander die Sünden bekennt (Jak 5,16). Für Jakobus gehören Gottesdienst, Sakrament und Diakonie zusammen. Genau so lebt es die koptische Kirche.`,
      followUps: [
        {
          id: 'nur-ein-wort',
          objection: `„Ob man das ‚Religion' nennt, ist doch nur ein Wort. Mir geht es um den Inhalt: eine lebendige Beziehung statt toter Formen."`,
          objectionBy: 'Evangelikaler Jugendpastor',
          answer: `Einverstanden, es geht um den Inhalt. Und der Inhalt der biblischen Beziehung zu Christus ist: Lehre der Apostel, Gemeinschaft, Brotbrechen, Gebete (Apg 2,42), Taufe, Abendmahl, Älteste, Fasten. Das Schlagwort „Beziehung statt Religion" macht einen Gegensatz auf, den es in der Bibel nicht gibt. Eine Ehe ist auch eine Beziehung – und doch hat sie ein Versprechen, Rituale, gemeinsame Mahlzeiten und eine Familie. Formen töten die Liebe nicht; sie tragen sie.`,
          questionsBack: [`Ist eine Ehe weniger Beziehung, weil sie ein Gelübde, einen Ring und feste Gewohnheiten hat?`],
        },
      ],
    },
    {
      id: 'kirche-optional',
      objection: `„Ich kann meine Beziehung zu Jesus auch zu Hause mit der Bibel pflegen. Kirche ist schön, aber nicht nötig."`,
      objectionBy: 'Distanzierter Christ („spirituell, aber nicht religiös")',
      answer: `Das Neue Testament kennt keinen Christen ohne Gemeinde. „Verlasst nicht eure Versammlung" (Hebr 10,25); „ihr seid der Leib Christi und Glieder" (1 Kor 12,27) – ein Glied, das sich vom Leib trennt, stirbt ab. Die Bibel, die du zu Hause liest, hat dir die Kirche überliefert. Und das Abendmahl, das Jesus geboten hat, kannst du nicht allein feiern. Cyprian sagte: Wer die Kirche nicht zur Mutter hat, kann Gott nicht zum Vater haben.`,
      followUps: [
        {
          id: 'kirche-hat-verletzt',
          objection: `„Ich bin von der Kirche verletzt worden – durch Heuchelei, Machtmissbrauch, Lieblosigkeit. Warum sollte ich zurückgehen?"`,
          objectionBy: 'Verletzter ehemaliger Gemeindebesucher',
          answer: `Es tut mir leid, was dir geschehen ist – und es ist Sünde, wenn Christen andere verletzen. Jesus hat die Heuchler schärfer angeklagt als jeden anderen. Aber die Kirche ist die Braut Christi, oft verwundet und schmutzig, und er hat sie trotzdem nicht verlassen (Eph 5,25–27). Wer in einer Familie verletzt wurde, braucht Heilung, Gerechtigkeit und manchmal Abstand von bestimmten Personen – aber er hört nicht auf, Kind zu sein. Vielleicht ist eine andere Gemeinde, ein anderer Beichtvater der Weg zurück.`,
          followUps: [
            {
              id: 'unsichtbare-kirche',
              objection: `„Die wahre Kirche ist unsichtbar – alle wahren Gläubigen weltweit. Dazu gehöre ich auch ohne Gemeindemitgliedschaft."`,
              objectionBy: 'Evangelikaler Theologe',
              answer: `Die Kirche des Neuen Testaments war sichtbar: Man konnte zu ihr hinzugefügt werden (Apg 2,41), sie hatte Älteste und Diakone, sie feierte Taufe und Abendmahl, und Jesus sagt bei Streit: „Sage es der Gemeinde" (Mt 18,17) – einer unsichtbaren Gemeinde kann man nichts sagen. Natürlich kennt nur Gott die Herzen. Aber er hat die Kirche als sichtbaren Leib gestiftet, nicht als Idee.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '18,17', quote: `Hört er die nicht, so sage es der Gemeinde. Hört er die Gemeinde nicht, so halt ihn als einen Heiden und Zöllner.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'institution-loescht-geist',
                  objection: `„Institutionen ersticken den Geist. ‚Den Geist dämpfet nicht' (1 Thess 5,19) – jede Struktur ist eine Gefahr."`,
                  objectionBy: 'Charismatischer Gemeindegründer',
                  answer: `Derselbe Geist hat in der Urgemeinde Ordnung geschaffen: Diakone wurden gewählt (Apg 6), ein Konzil entschied „es gefällt dem Heiligen Geist und uns" (Apg 15,28), und Paulus mahnt: „Lasset alles ehrbar und ordentlich zugehen" (1 Kor 14,40), denn „Gott ist nicht ein Gott der Unordnung" (1 Kor 14,33). Struktur kann erstarren – dann braucht sie Erneuerung. Aber auch jede Freikirche hat Leiter, Satzungen und Konten. Die Frage ist nicht ob Struktur, sondern welche: eine erfundene oder die apostolische.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '14,33.40', quote: `Denn Gott ist nicht ein Gott der Unordnung, sondern des Friedens … Lasset alles ehrbar und ordentlich zugehen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'religion-mensch-sucht-gott',
      objection: `„Religion ist der Versuch des Menschen, zu Gott zu kommen. Das Evangelium ist Gottes Weg zum Menschen. Darum ist Christsein keine Religion."`,
      objectionBy: 'Evangelikaler Apologet',
      answer: `Dass Gott den ersten Schritt tut, ist orthodoxe Lehre: „Lasset uns ihn lieben, denn er hat uns zuerst geliebt" (1 Joh 4,19). Aber als Gott zum Menschen kam, hat er ein Volk gesammelt, einen Gottesdienst gestiftet, Sakramente eingesetzt und Apostel gesandt. Die Liturgie ist nicht unser Aufstieg aus eigener Kraft, sondern unsere Antwort auf sein Kommen – und in der Eucharistie kommt er selbst zu uns. Gottes Weg zum Menschen führt in die Kirche, nicht an ihr vorbei.`,
      followUps: [
        {
          id: 'barth-religion-unglaube',
          objection: `„Karl Barth, einer der größten Theologen, hat gesagt: ‚Religion ist Unglaube.'"`,
          objectionBy: 'Reformierter Theologe',
          answer: `Barth meinte jede menschliche Religion, auch die christliche, insofern der Mensch Gott aus eigener Kraft ergreifen will. Aber im selben Abschnitt seiner Dogmatik spricht er von der „wahren Religion" – der Religion, die durch Gottes Gnade gerechtfertigt wird. Barth hat nie aufgehört, Kirche, Predigt und Sakrament ernst zu nehmen; sein Hauptwerk heißt „Kirchliche Dogmatik". Das Schlagwort „Beziehung statt Religion" vereinfacht ihn bis zur Verfälschung.`,
          sources: [
            { kind: 'fachliteratur', author: 'Karl Barth', work: 'Kirchliche Dogmatik I/2', ref: '§ 17 „Gottes Offenbarung als Aufhebung der Religion", bes. Abschnitt 3 „Die wahre Religion"', year: '1938', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'liturgie-ist-werk',
              objection: `„Aber eure Liturgie ist doch genau menschliches Tun: Gebete, Gesänge, Weihrauch – um Gott zu gefallen."`,
              objectionBy: 'Reformierter Theologe',
              answer: `Das Herz der Liturgie ist das, was Christus tut: Er spricht im Evangelium, er schenkt sich in Brot und Wein, er sendet den Geist. „Das tut zu meinem Gedächtnis" ist sein Gebot, nicht unsere Erfindung. Unser Gebet ist Antwort – und selbst diese Antwort wirkt der Geist in uns (Röm 8,26). Wenn Singen und Beten „Werke" wären, die Gott nicht gefallen, müsste man auch jeden Lobpreisgottesdienst abschaffen.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '22,19', quote: `Und er nahm das Brot, dankte und brach's und gab's ihnen und sprach: Das ist mein Leib, der für euch gegeben wird; das tut zu meinem Gedächtnis.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'offb-3-20-einladung',
      objection: `„Jesus steht vor der Tür deines Herzens und klopft an (Offb 3,20). Christsein beginnt mit einer persönlichen Entscheidung, ihn hereinzulassen – nicht mit einer Kirchenmitgliedschaft."`,
      objectionBy: 'Evangelistischer Prediger',
      answer: `Offb 3,20 ist an eine Gemeinde gerichtet – an Laodizea, eine lau gewordene Kirche –, und das Bild ist ein gemeinsames Mahl: „mit ihm das Abendmahl halten". Persönlicher Glaube ist unverzichtbar; aber das Neue Testament zeigt, wie man ihn ausdrückt: „Tut Buße und lasse sich ein jeglicher taufen auf den Namen Jesu Christi" (Apg 2,38). Die Antwort auf das Klopfen Christi ist Umkehr, Taufe und Leben in seiner Gemeinde.`,
      sources: [
        { kind: 'bibel', work: 'Offenbarung', ref: '3,20', quote: `Siehe, ich stehe vor der Tür und klopfe an. So jemand meine Stimme hören wird und die Tür auftun, zu dem werde ich eingehen und das Abendmahl mit ihm halten und er mit mir.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'orthodoxe-nur-kulturchristen',
          objection: `„Viele Orthodoxe, die ich kenne, gehen zur Kirche, aber haben keine persönliche Beziehung zu Jesus. Sie sind Kulturchristen."`,
          objectionBy: 'Evangelikaler Missionar',
          answer: `Das gibt es leider, in allen Kirchen – auch unter Evangelikalen, die einmal eine Entscheidung trafen und dann nichts mehr. Die Antwort ist Erneuerung von innen, nicht Auszug: Genau das tat die koptische Sonntagsschulbewegung im 20. Jahrhundert, die persönliches Gebet, Bibelstudium und Umkehr mit der Liturgie der Kirche verband. Der Maßstab ist nicht, was manche Mitglieder leben, sondern was die Kirche lehrt und anbietet: die tiefste Gemeinschaft mit Christus, die es gibt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum nennt Jakobus den wahren Glauben „reine Religion" (thrēskeia), wenn Christsein keine Religion ist?`,
    `Warum ging Jesus „nach seiner Gewohnheit" in die Synagoge, wenn Gottesdienst unwichtig ist?`,
    `Kann man den Bräutigam lieben und seine Braut verachten (Eph 5,25–32)?`,
    `Wo im Neuen Testament findest du einen Christen ohne Gemeinde, Taufe und Abendmahl?`,
    `Hat dein Gottesdienst keine festen Formen – oder nur andere als unserer?`,
  ],
  avoid: [
    `Nicht so tun, als gehe es nicht um eine persönliche Beziehung zu Christus – die Orthodoxie lehrt die innigste Beziehung, die Vereinigung mit Gott.`,
    `Nicht verteidigen, wenn jemand Gottesdienst nur äußerlich mitmacht; tote Formalität ist auch für die Kirche ein Problem.`,
    `Keine Etymologie-Streitereien („religio kommt von religare") führen – das lenkt ab und ist umstritten.`,
  ],
  concessions: [
    `Das Schlagwort will eine echte Gefahr benennen: Gottesdienst ohne Herz und Glauben (Jes 29,13; Mt 15,8).`,
    `Kirchen haben Menschen verletzt, und Institutionen können erstarren.`,
    `Es gibt auch in orthodoxen Kirchen „Kulturchristen", deren Glaube kaum persönlich gelebt wird.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Einheit der katholischen Kirche', year: '251', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander Schmemann', work: 'For the Life of the World', year: '1963', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jefferson Bethke', work: 'Jesus > Religion', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Kirche', 'Religion', 'Beziehung', 'Liturgie', 'Gemeinde', 'Jakobus 1,27'],
  related: ['fasten-liturgie/liturgie-tote-rituale', 'sola-fide/wiedergeburt-durch-entscheidung', 'evangelikale-sonderlehren/keine-hierarchie-noetig', 'sakramente/abendmahl-symbolisch', 'orthodoxie-oekumene/alle-kirchen-gleich'],
};

export default claim;
