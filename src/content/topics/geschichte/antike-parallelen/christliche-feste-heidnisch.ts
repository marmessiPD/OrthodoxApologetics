import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christliche-feste-heidnisch',
  title: `„Weihnachten und Ostern sind heidnische Feste."`,
  proponents: [
    { name: 'Hermann Usener', role: 'Klassischer Philologe (†1905)', work: 'Das Weihnachtsfest (1889)' },
    { name: 'Alexander Hislop', role: 'Presbyterianischer Prediger und Polemiker (†1865)', work: 'The Two Babylons (1853)' },
    { name: 'Populäre Religionskritik', role: 'Internet-Memes, Dokumentationen (z. B. „Zeitgeist", 2007)', work: '„Easter = Ishtar", „Weihnachten = Sol Invictus"' },
  ],
  steelman: `Am 25. Dezember feierten die Römer den Geburtstag des „unbesiegten Sonnengottes" (Sol Invictus), dem Kaiser Aurelian 274 einen Tempel weihte; kurz davor lagen die ausgelassenen Saturnalien. Die Kirche hat diese Feste einfach getauft – die Bibel nennt kein Geburtsdatum Jesu, und Hirten wären im Winter nicht nachts auf dem Feld gewesen. Auch Ostern trägt seinen heidnischen Ursprung im Namen: Der Mönch Beda berichtet, der Monat sei nach der Göttin Eostre benannt; Eier und Hasen sind Fruchtbarkeitssymbole. Papst Gregor der Große empfahl selbst, heidnische Tempel und Feste umzuwidmen. Die christlichen Feste sind umetikettierte Naturfeste.`,
  biblical: {
    summary: `Ostern ist das christliche **Pascha**: Jesus starb am Passafest; Paulus schreibt um 55 n. Chr.: „Wir haben auch ein Osterlamm, das ist Christus, für uns geopfert" (1 Kor 5,7). Das Fest hat seine Wurzeln im jüdischen Passa und im Auferstehungsmorgen „am ersten Tag der Woche" (Mk 16,2) – nicht in einem germanischen Frühlingskult. Ein Geburtsdatum Jesu nennt die Bibel nicht; Weihnachten ist ein kirchliches Fest, kein biblisches Gebot. Die Bibel feiert die Sache – „Das Wort ward Fleisch" (Joh 1,14) –, nicht ein Datum.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '5,7', quote: `Denn wir haben auch ein Osterlamm, das ist Christus, für uns geopfert.`, translation: 'Luther 1912', status: 'verbatim', note: 'Luther übersetzt griech. pascha mit „Osterlamm".' },
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Maleachi', ref: '3,20', quote: `Euch aber, die ihr meinen Namen fürchtet, soll aufgehen die Sonne der Gerechtigkeit und Heil unter ihren Flügeln.`, status: 'paraphrase', note: 'Biblische Wurzel der christlichen Lichtsymbolik (in manchen Übersetzungen 4,2).' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche feiert die Geburt Christi am **29. Koiak** des koptischen Kalenders – das entspricht dem 25. Dezember des julianischen Kalenders und fällt nach unserem gregorianischen Kalender derzeit auf den **7. Januar**. Vorbereitet wird das Fest durch ein 43-tägiges Fasten, den Monat Koiak mit seinen Lobgesängen (Psalmodie) und die Mitternachtsliturgie. Ostern (Pascha, *ʿĪd al-Qiyāma*, „Fest der Auferstehung") folgt auf das 55-tägige Große Fasten. Die Berechnung des Osterdatums war seit dem 3. Jahrhundert eine besondere Aufgabe der Kirche von Alexandrien: Die Päpste Alexandriens verkündeten das Datum jährlich in ihren Osterfestbriefen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'VII,20', year: 'ca. 325', quote: `Dionysius von Alexandrien verfasste Festbriefe und stellte darin einen Osterkanon auf.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'X,2', year: 'ca. 425', quote: `In Ägypten feiere man am Epiphaniefest zugleich die Taufe und die Geburt des Herrn, nicht getrennt wie im Westen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Zur Entstehung des Weihnachtsdatums gibt es zwei Hypothesen: die **religionsgeschichtliche** (Usener 1889: Christianisierung des Sonnenfestes) und die **Berechnungshypothese** (Louis Duchesne 1889, Thomas Talley 1986: Ableitung vom 25. März als angenommenem Tag der Empfängnis und des Todes). Beide werden vertreten; der Forschungsstand ist offen. Steven Hijmans hat gezeigt, dass ein Sol-Fest am 25. Dezember vor dem Kalender von 354 nicht belegt ist und Aurelians Sonnenspiele im Oktober lagen. Der früheste Beleg für das Weihnachtsfest am 25. Dezember (Liste von 336 im Chronographen von 354) und der früheste Beleg für den „Natalis Invicti" am selben Tag stammen aus derselben Quelle. Der Name „Ostern/Easter" hat möglicherweise mit einer Göttin oder Monatsbezeichnung zu tun – das Fest selbst ist Jahrhunderte älter.`,
    detail: `**Belege im Überblick:**
- **Chronograph von 354 (Filocalus-Kalender):** Im Festkalender steht am 25. Dezember „N(atalis) Invicti"; in der Liste der Märtyrergedenktage (Depositio martyrum, Stand 336) „VIII kal. Ian. natus Christus in Betleem Iudeae".
- **Clemens von Alexandrien** (um 200, Stromateis I,21) berichtet, dass Christen in Ägypten Geburtsdatum und Tauftag Jesu berechneten (u. a. der 25. Pachon, also ein Tag im Mai; die Basilidianer feierten die Taufe im Januar) – Interesse am Datum lange vor jedem Sonnenkult-Bezug.
- **Tertullian** (Adversus Iudaeos 8) und später **Augustinus** (De Trinitate IV,5,9) setzen den 25. März als Todestag bzw. Empfängnistag an; daraus ergibt sich neun Monate später der 25. Dezember.
- **Hippolyt** (Danielkommentar 4,23) nennt in einem Teil der Überlieferung den 25. Dezember; die Echtheit der Stelle ist umstritten.
- **Ostern:** Osterfeststreit im 2. Jahrhundert (Polykarp und Anicet um 155; Victor von Rom um 190, Eusebius KG V,23–25); Meliton von Sardes, „Vom Passa" (um 165).`,
    sources: [
      { kind: 'fachliteratur', author: 'Steven E. Hijmans', work: 'Sol Invictus, the Winter Solstice, and the Origins of Christmas. Mouseion, Ser. III, Bd. 3', ref: 'S. 377–398', year: '2003', quote: `Für ein bedeutendes Sol-Fest am 25. Dezember vor dem Kalender von 354 gibt es keine Belege; Aurelians Sonnenspiele fanden im Oktober statt.`, status: 'paraphrase', url: 'https://doi.org/10.1353/mou.2003.0038', note: 'Bibliografische Angaben (Band, Seiten, DOI) per Websuche bestätigt; Inhalt nach Sekundärberichten, Volltext nicht eingesehen.' },
      { kind: 'fachliteratur', author: 'Thomas J. Talley', work: 'The Origins of the Liturgical Year', year: '1986', quote: `Die Daten 25. Dezember und 6. Januar lassen sich aus der Berechnung des Todes- bzw. Empfängnistages Jesu herleiten.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Andrew McGowan', work: 'How December 25 Became Christmas. Bible Review 18/6', year: '2002', quote: `Darstellung beider Hypothesen; die Berechnungshypothese sei ernst zu nehmen.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Hermann Usener', work: 'Religionsgeschichtliche Untersuchungen I: Das Weihnachtsfest', year: '1889', quote: `Das Weihnachtsfest sei als christliche Antwort auf das Fest des Sonnengottes entstanden.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Chronograph von 354, Depositio martyrum', year: 'Liste von 336', quote: `Am 25. Dezember: Christus geboren in Bethlehem in Judäa.`, original: `VIII kal. Ian. natus Christus in Betleem Iudeae`, status: 'verbatim' },
    ],
  },
  quickAnswer: `Ostern ist das christliche Pascha: Jesus starb am Passafest, und Paulus nennt ihn schon um 55 n. Chr. „unser Passalamm". Die Christen stritten im 2. Jahrhundert über das Osterdatum – Jahrhunderte bevor ein Angelsachse von einer Göttin Eostre sprach; „Ostern" heißt das Fest nur auf Deutsch und Englisch. Für Weihnachten gibt es zwei Theorien; eine sagt, man habe den 25. Dezember aus dem angenommenen Todestag am 25. März berechnet. Und selbst wenn die Kirche ein Datum bewusst gegen ein Sonnenfest gesetzt hätte: Gefeiert wird die Menschwerdung Gottes, nicht die Sonne. Das Datum macht den Inhalt nicht heidnisch.`,
  keyPoints: [
    `**Ostern = Pascha:** im jüdischen Passa verwurzelt (1 Kor 5,7), im 2. Jahrhundert schon Streitgegenstand (Osterfeststreit, Meliton von Sardes).`,
    `**Der Name ist zweitrangig:** Nur Deutsch und Englisch sagen „Ostern/Easter"; fast alle Sprachen sagen Pascha (griech. Pascha, frz. Pâques, kopt. Pascha).`,
    `**„Easter = Ishtar"** ist eine falsche Etymologie, die auf den protestantischen Polemiker Alexander Hislop (1853) zurückgeht.`,
    `**Weihnachten:** Zwei Hypothesen (Sonnenfest vs. Berechnung); Hijmans: kein Beleg für ein Sol-Fest am 25. Dezember vor 354.`,
    `**Koptisch:** Geburt Christi am 29. Koiak (= 25. Dezember julianisch = derzeit 7. Januar); Ägypten feierte früher Geburt und Taufe gemeinsam an Epiphanie.`,
    `**Genetischer Fehlschluss:** Selbst ein bewusst gewähltes Datum macht die gefeierte Wahrheit (Menschwerdung, Auferstehung) nicht heidnisch.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Prediger und Theologe',
      text: `Augustinus überliefert die Rechnung, die hinter dem Weihnachtsdatum stehen könnte: Christus sei am 25. März empfangen worden und am selben Tag gestorben; neun Monate nach der Empfängnis ergibt sich der 25. Dezember. Zugleich warnt er seine Gemeinde, das Fest nicht wie die Heiden wegen der Sonne zu feiern, sondern wegen dessen, der die Sonne geschaffen hat. Darin zeigt sich: Die Kirche kannte die Sonnensymbolik der Heiden und grenzte sich bewusst ab – Christus ist die „Sonne der Gerechtigkeit" (Mal 3,20), nicht die Sonne ein Gott.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Über die Dreieinigkeit (De Trinitate)', ref: 'IV,5,9', year: 'ca. 400–416', quote: `Christus sei, wie man glaubt, am 25. März empfangen worden, an dem er auch gelitten hat.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Vorträge über das Johannesevangelium', ref: '34,2', year: 'ca. 414', quote: `Christen sollen nicht wie die Ungläubigen die Sonne verehren, sondern den, der die Sonne gemacht hat.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Zeuge der alexandrinischen Kirche um 200',
      text: `Clemens berichtet, dass Christen in Ägypten schon um 200 versuchten, Jahr und Tag der Geburt Jesu zu bestimmen; er nennt verschiedene Berechnungen, darunter einen Tag im Mai, und erwähnt, dass manche Gruppen die Taufe Jesu im Januar feierten. Das zeigt: Das Interesse am Geburtsdatum entsprang dem Glauben an die geschichtliche Menschwerdung – lange bevor ein römisches Sonnenfest am 25. Dezember überhaupt belegt ist.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'I,21,145–146', year: 'ca. 200', quote: `Manche bestimmten nicht nur das Geburtsjahr des Herrn, sondern auch den Tag (u. a. den 25. Pachon); die Basilidianer feierten seine Taufe im Monat Tybi.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Zeuge des ägyptischen Mönchtums',
      text: `Cassian, der lange unter den Wüstenvätern Ägyptens lebte, berichtet, dass man in Ägypten die Geburt und die Taufe des Herrn gemeinsam am Epiphaniefest beging, während der Westen beides getrennt feierte. Das Datum der Geburtsfeier war also in der frühen Kirche unterschiedlich und wurde erst allmählich vereinheitlicht – ein Zeichen, dass es um den Inhalt, nicht um ein heidnisches Datum ging.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'X,2', year: 'ca. 425', quote: `In Ägypten wird an Epiphanie Taufe und Geburt Christi gefeiert.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Bischof, der jährlich das Pascha verkündete',
      text: `Athanasius kündigte Jahr für Jahr in seinen Osterfestbriefen das Datum des Pascha an – eine Aufgabe der alexandrinischen Kirche, die für ihre astronomische Kompetenz bekannt war. Seine Briefe zeigen, worum es beim Fest geht: das Pascha des Herrn, den Übergang vom Tod zum Leben, vorbereitet durch Fasten und Gebet. Von Fruchtbarkeitskulten findet sich darin keine Spur; die Bilder stammen aus dem Exodus und den Evangelien.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Osterfestbriefe', year: '329–373', quote: `Jährliche Ankündigung des Pascha mit geistlicher Auslegung von Passa und Auferstehung.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'weihnachten-sol-invictus',
      objection: `Am 25. Dezember feierte Rom den Geburtstag des Sol Invictus, dem Aurelian 274 seinen Tempel weihte. Dazu die Saturnalien. Die Kirche hat einfach das Sonnenfest übernommen.`,
      objectionBy: 'Hermann Usener (religionsgeschichtliche Schule)',
      answer: `Das ist eine Hypothese, kein gesicherter Befund. Für ein Sol-Fest am 25. Dezember vor dem Jahr 354 gibt es keinen Beleg; Aurelians große Sonnenspiele lagen im Oktober (Hijmans). Und die Saturnalien lagen vom 17. bis 23. Dezember. Die Alternative ist die Berechnungshypothese: Christen setzten den Tod – und die Empfängnis – Jesu auf den 25. März; neun Monate später ist der 25. Dezember. Das bezeugen Tertullian und Augustinus.`,
      followUps: [
        {
          id: 'hijmans-argument-schweigen',
          objection: `Hijmans zeigt nur, dass Belege fehlen. Die Sonnenfest-Theorie bleibt trotzdem die naheliegendste.`,
          objectionBy: 'Dan McClellan',
          answer: `Einverstanden, die Frage ist offen, und ich behaupte nicht, die Berechnungshypothese sei bewiesen. Aber „Weihnachten ist heidnisch" braucht Belege, dass Christen ihr Fest von einem heidnischen Fest übernahmen – und die gibt es nicht. Selbst wenn die Kirche das Datum bewusst gegen ein Sonnenfest gesetzt hätte, wäre das eine Antwort, keine Übernahme: Gefeiert wird nicht die Sonne, sondern die Menschwerdung.`,
          followUps: [
            {
              id: 'braeuche-heidnisch',
              objection: `„Genetischer Fehlschluss" ist eine Ausrede. Die Bräuche – Baum, Geschenke, Lichter – sind heidnisch.`,
              objectionBy: 'Populäre Religionskritik',
              answer: `Der Christbaum ist ein Brauch des 16. Jahrhunderts aus dem deutschen Raum, Geschenke knüpfen an die Weisen und an den hl. Nikolaus an. Manche Volksbräuche haben vorchristliche Wurzeln, das gebe ich zu – aber sie sind kulturelle Verpackung, nicht der Kern des Festes. In der koptischen Kirche besteht Weihnachten aus 43 Tagen Fasten, den Lobgesängen des Monats Koiak und der Mitternachtsliturgie – da ist nichts Heidnisches zu finden.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kopten-7-januar',
      objection: `Warum feiern die Kopten dann am 7. Januar? Das zeigt doch, wie willkürlich das Datum ist.`,
      objectionBy: 'Populäre Religionskritik',
      answer: `Es ist dasselbe Datum in einem anderen Kalender: der 29. Koiak des koptischen Kalenders, der dem 25. Dezember des julianischen Kalenders entspricht und heute auf unseren 7. Januar fällt. Ursprünglich feierte Ägypten Geburt und Taufe gemeinsam an Epiphanie, wie Cassian berichtet. Die Kirche hat nie behauptet, den Geburtstag Jesu historisch zu kennen; sie wählt einen Festtag, um ein Ereignis zu feiern.`,
      followUps: [
        {
          id: 'geburtstag-unbekannt',
          objection: `Also gibst du zu: Den echten Geburtstag kennt niemand. Weihnachten ist erfunden.`,
          objectionBy: 'Populäre Religionskritik',
          answer: `Das Datum ist unbekannt – das Ereignis nicht. Es ist völlig normal, ein reales Ereignis an einem festgelegten Tag zu feiern, auch wenn der genaue Tag unsicher ist. Erfunden wäre Weihnachten nur, wenn Jesus nicht geboren worden wäre.`,
        },
      ],
    },
    {
      id: 'ostern-eostre-ishtar',
      objection: `Ostern ist nach der Frühlingsgöttin Eostre benannt – manche sagen sogar Ishtar. Eier und Hasen sind Fruchtbarkeitssymbole. Das ist ein Frühlingskult.`,
      objectionBy: 'Populäre Religionskritik',
      answer: `Das Fest heißt nur auf Englisch und Deutsch „Easter/Ostern"; fast überall sonst heißt es Pascha – auf Griechisch, Lateinisch, Französisch, Koptisch. Es wurzelt im jüdischen Passa und ist schon im 2. Jahrhundert belegt, als Christen über das Datum stritten – Jahrhunderte bevor die Angelsachsen Christen wurden. „Ishtar" ist eine falsche Etymologie aus dem 19. Jahrhundert. Und die Eier hängen eher mit dem Fasten zusammen: Wer wie die Kopten in der Fastenzeit keine Eier isst, freut sich zu Ostern besonders darauf.`,
      sources: [
        { kind: 'kirchenvater', author: 'Beda Venerabilis', work: 'Über die Zeitrechnung (De temporum ratione)', ref: '15', year: '725', quote: `Der angelsächsische Monat Eosturmonath, jetzt als Ostermonat verstanden, habe seinen Namen einst von einer Göttin Eostre gehabt, der man in diesem Monat Feste feierte.`, status: 'paraphrase', note: 'Einzige Quelle für eine Göttin Eostre.' },
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'V,23–25', year: 'ca. 325', quote: `Bericht über den Osterfeststreit des 2. Jahrhunderts.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'beda-zuverlaessig',
          objection: `Beda ist ein zuverlässiger Zeuge. Wenn er sagt, der Name stammt von einer Göttin, dann wurde das Fest nach ihr benannt.`,
          objectionBy: 'Dan McClellan',
          answer: `Mag sein, dass der Monatsname auf eine Göttin zurückgeht – Beda sagt, der Monat hieß so, und das christliche Fest übernahm den Monatsnamen. Das ist wie bei unseren Wochentagen: „Donnerstag" kommt von Donar, und trotzdem betet niemand Donar an, wenn er donnerstags zur Kirche geht. Der Name ist angelsächsisch, das Fest ist jüdisch-christlich und viel älter.`,
        },
      ],
    },
    {
      id: 'gregor-mellitus',
      objection: `Die Kirche gibt es selbst zu: Papst Gregor der Große wies die Missionare in England an, heidnische Tempel und Feste umzuwidmen. Das war Strategie.`,
      objectionBy: 'Tim O\'Neill',
      answer: `Das stimmt, und ich gebe es offen zu: Die Kirche hat manchmal bewusst Orte und Bräuche christianisiert – so wie Paulus in Athen beim „unbekannten Gott" ansetzte (Apg 17,23). Aber Gregor schrieb das 601 für England; Pascha und Weihnachten existierten da schon seit Jahrhunderten. Und er befahl zugleich, die Götzenbilder zu zerstören: Umgewidmet wurde die Form, nicht der Glaube.`,
      sources: [
        { kind: 'kirchenvater', author: 'Beda Venerabilis', work: 'Kirchengeschichte des englischen Volkes', ref: 'I,30', year: '731', quote: `Brief Gregors des Großen an Abt Mellitus (601): Die Tempel sollen nicht zerstört, sondern von Götzenbildern gereinigt und zu Kirchen gemacht werden; an die Stelle der Opferfeste sollen christliche Feiern treten.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'synkretismus',
          objection: `Das ist Synkretismus – die Vermischung von Religionen.`,
          objectionBy: 'Populäre Religionskritik',
          answer: `Synkretismus vermischt Glaubensinhalte. Inkulturation drückt denselben Glauben in vertrauten Formen aus und lehnt die fremde Verehrung ab. Die frühen Christen – gerade die koptischen Märtyrer – starben lieber, als ein Körnchen Weihrauch vor den Göttern zu streuen. Das ist das Gegenteil von Synkretismus.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie heißt Ostern auf Griechisch, Französisch oder Koptisch?`,
    `Welche Quelle vor 354 belegt ein Fest des Sol Invictus am 25. Dezember?`,
    `Wie erklärst du, dass Christen schon im 2. Jahrhundert über das Osterdatum stritten – lange vor den Angelsachsen?`,
    `Wird eine Wahrheit falsch, weil man sie an einem bestimmten Datum feiert?`,
  ],
  avoid: [
    `Behaupten, Jesus sei „sicher im Dezember" oder „sicher im Herbst" geboren – das Datum ist unbekannt.`,
    `Die Sonnenfest-Hypothese als widerlegt hinstellen – sie ist eine ernsthafte, wenn auch unbewiesene Forschungsmeinung.`,
    `Alle Bräuche (Baum, Hase) als urchristlich verteidigen – lieber zwischen Fest und Volksbrauch unterscheiden.`,
  ],
  concessions: [
    `Das Geburtsdatum Jesu ist unbekannt; die Herkunft des 25. Dezember ist in der Forschung umstritten.`,
    `Der deutsche und englische Name „Ostern/Easter" könnte auf einen angelsächsischen Monats- oder Göttinnennamen zurückgehen.`,
    `Die Kirche hat in der Mission teilweise bewusst Bräuche und Orte christianisiert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Thomas J. Talley', work: 'The Origins of the Liturgical Year', year: '1986', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Steven E. Hijmans', work: 'Sol Invictus, the Winter Solstice, and the Origins of Christmas. Mouseion III/3', ref: 'S. 377–398', year: '2003', status: 'paraphrase', url: 'https://doi.org/10.1353/mou.2003.0038' },
    { kind: 'kirchenvater', author: 'Meliton von Sardes', work: 'Vom Passa (Peri Pascha)', year: 'ca. 165', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Weihnachten', 'Ostern', 'Sol Invictus', 'Pascha', 'Koiak', 'Kalender'],
  related: ['antike-parallelen/jesus-kopie-horus-mithras', 'antike-parallelen/sterbende-auferstehende-goetter', 'kirchengeschichte-mythen/konstantin-verfaelschte'],
};

export default claim;
