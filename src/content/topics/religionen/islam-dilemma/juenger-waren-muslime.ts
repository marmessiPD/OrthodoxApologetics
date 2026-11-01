import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'juenger-waren-muslime',
  title: `„Die Jünger Jesu waren Muslime."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Toronto', work: 'Debatten über Paulus und die Urgemeinde' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Vorträge über Paulus als „Verfälscher"' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über Jesus im Islam' },
    { name: 'Muhammad Ata ur-Rahim', role: 'Pakistanischer Autor', work: 'Jesus, Prophet of Islam (1977)' },
  ],
  steelman: `„Der Koran sagt es ausdrücklich: Die Jünger antworteten Jesus: ‚Wir sind die Helfer Allahs, wir glauben an Allah, und bezeuge, dass wir Muslime sind' (3:52; 5:111). Sie glaubten an den einen Gott und an Jesus als seinen Gesandten – wie alle Propheten und ihre Anhänger vor ihnen. Erst Paulus, der Jesus nie gekannt hatte, erfand die Lehre vom Sühnetod und vom Gottessohn. Die Urgemeinde in Jerusalem unter Jakobus hielt am Gesetz fest und stritt mit Paulus; ihre Erben, die Ebioniten, sahen in Jesus einen Menschen und Propheten. Diese wahren Nachfolger wurden von der paulinischen Kirche verdrängt, aber Gott hat ihr Zeugnis durch Mohammed wiederhergestellt und so die Gläubigen siegreich gemacht (61:14)."`,
  biblical: {
    summary: `Die ältesten Zeugnisse der Jüngergemeinde lehren genau das, was der Islam bestreitet. Das vorpaulinische Glaubensbekenntnis in 1 Kor 15,3–7 – nach den meisten Forschern wenige Jahre nach der Kreuzigung formuliert – nennt Kreuzestod, Begräbnis und Auferstehung und beruft sich auf Petrus, die Zwölf und Jakobus. Paulus sagt ausdrücklich, die Jerusalemer Apostel predigten dasselbe (1 Kor 15,11; Gal 2,9). Die aramäischsprachige Urgemeinde betete zu Jesus: *Maranatha* – „Unser Herr, komm!" (1 Kor 16,22). Petrus verkündet in Jerusalem den gekreuzigten und auferweckten Jesus als „Herrn und Christus" (Apg 2,23–36).`,
    detail: `**Außerbiblische Zeugen:** Josephus berichtet um 93/94 von der Hinrichtung des „Bruders Jesu, des sogenannten Christus, mit Namen Jakobus" (Antiquitates 20,200). Der Statthalter Plinius schreibt um 112, die Christen sängen „Christus wie einem Gott" Hymnen (Briefe 10,96). Tacitus bezeugt die Hinrichtung Christi unter Pontius Pilatus (Annalen 15,44).

**Das Selbstverständnis des Jakobus:** Jakobus, den Muslime gern gegen Paulus aufbieten, nennt sich „Knecht Gottes und des Herrn Jesus Christus" (Jak 1,1) und spricht vom „Glauben an Jesus Christus, unsern Herrn der Herrlichkeit" (Jak 2,1). Nach der Überlieferung des Hegesippus starb er mit dem Bekenntnis zu Jesus als dem Menschensohn zur Rechten Gottes.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–11', quote: `Paulus überliefert, was er empfangen hat: Christus starb für unsere Sünden, wurde begraben, ist am dritten Tag auferstanden und erschien Kephas, den Zwölfen … und Jakobus; „es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt".`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '16,22', quote: `Maranatha – „Unser Herr, komm!": aramäischer Gebetsruf der Urgemeinde an Jesus.`, original: `μαράνα θά (aramäisch māranā thā)`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,36', quote: `So wisse nun das ganze Haus Israel gewiß, daß Gott diesen Jesus, den ihr gekreuzigt habt, zu einem HERRN und Christus gemacht hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '1,1', quote: `Jakobus, ein Knecht Gottes und des HERRN Jesu Christi.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche steht in ununterbrochener Nachfolge der Apostel. Die koptische Kirche führt sich auf den Evangelisten Markus zurück, den Schüler des Petrus, der in Alexandrien das Martyrium erlitt. Ihre Zeitrechnung, die „Ära der Märtyrer" (ab 284, Beginn der Herrschaft Diokletians), erinnert daran, dass die Kirche nicht durch das Schwert, sondern durch das Blut ihrer Zeugen siegte – Zeugen, die für den gekreuzigten und auferstandenen Herrn starben.`,
    sources: [
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,16 und II,23', year: 'um 325', quote: `Markus als Gründer der Kirche in Alexandrien; das Martyrium des Jakobus nach Hegesippus, der Jesus als den Menschensohn zur Rechten der Macht bekennt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '5', year: 'um 96', quote: `Petrus und Paulus werden gemeinsam als vorbildliche Säulen und Märtyrer der einen Kirche geehrt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Der Koran nennt die Jünger Gläubige und sagt, Gott habe sie gegen ihre Feinde gestärkt, „so dass sie obsiegten" (61:14), und werde Jesu Nachfolger bis zum Jüngsten Tag über die Ungläubigen stellen (3:55). Historisch ist die Gemeinschaft, die sich durchsetzte, die Kirche, die Kreuz, Auferstehung und den Herrn Jesus bekannte – das zeigen schon die frühesten Texte. Entweder waren die Jünger also keine Muslime im islamischen Sinn – oder Gott hat sein Versprechen nicht gehalten. Beides widerlegt den Koran.`,
  keyPoints: [
    `**Das zweite Dilemma:** Der Koran macht eine überprüfbare historische Aussage – die Nachfolger Jesu wurden siegreich (61:14; 3:55).`,
    `**Die frühesten Texte:** 1 Kor 15,3–7 (Bekenntnis wenige Jahre nach der Kreuzigung), *Maranatha* (1 Kor 16,22), Petrus' Predigt (Apg 2) – alle bekennen Kreuz, Auferstehung und den Herrn Jesus.`,
    `**Paulus und die Zwölf predigten dasselbe:** „es sei nun ich oder jene: also predigen wir" (1 Kor 15,11); die „Säulen" gaben Paulus die Hand (Gal 2,9).`,
    `**Keine Spur einer „muslimischen" Urgemeinde:** Kein Text, keine Inschrift, keine Gruppe des 1. Jahrhunderts leugnet die Kreuzigung oder lehrt die Christologie des Korans.`,
    `**Sieg durch Martyrium, nicht durch das Schwert:** Die Kirche wuchs 300 Jahre lang unter Verfolgung – die „Ära der Märtyrer" der koptischen Kirche bezeugt es.`,
  ],
  argument: {
    name: 'Das zweite Dilemma (Dilemma der Jünger)',
    summary: 'Der Koran verheißt den Nachfolgern Jesu den Sieg – siegreich wurde die Kirche, die Kreuz und Auferstehung bekennt.',
    premises: [
      {
        text: `P1: Der Koran nennt die Jünger Jesu wahre Gläubige, „Helfer Allahs" und „Muslime" (3:52; 5:111; 61:14).`,
        support: `Das ist der Ausgangspunkt der muslimischen Behauptung selbst.`,
        sources: [
          { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:52', quote: `Die Jünger sagten: „Wir sind die Helfer Allahs. Wir glauben an Allah, und bezeuge, dass wir (Ihm) ergeben sind."`, original: `naḥnu anṣāru llāhi āmannā bi-llāhi wa-shhad bi-annā muslimūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/52' },
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:111', quote: `Und als Ich den Jüngern eingab: „Glaubt an Mich und an Meinen Gesandten!" Sie sagten: „Wir glauben; bezeuge, dass wir (Dir) ergeben sind."`, original: `qālū āmannā wa-shhad bi-annanā muslimūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/111' },
        ],
      },
      {
        text: `P2: Der Koran sagt, Gott habe die Gläubigen unter den Nachfolgern Jesu siegreich gemacht und werde sie bis zum Tag der Auferstehung über die Ungläubigen stellen.`,
        support: `61:14 steht in der Vergangenheit („so wurden sie die Obsiegenden") und bezieht sich auf die Spaltung Israels zur Zeit Jesu; 3:55 ist eine Verheißung an Jesus „bis zum Tag der Auferstehung".`,
        sources: [
          { kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:14', quote: `So glaubte ein Teil der Kinder Israels, und ein Teil war ungläubig. Da stärkten Wir diejenigen, die glaubten, gegen ihren Feind, und so wurden sie die Obsiegenden.`, original: `fa-ayyadnā lladhīna āmanū ʿalā ʿaduwwihim fa-aṣbaḥū ẓāhirīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/61/14' },
          { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:55', quote: `… und Ich werde diejenigen, die dir folgen, bis zum Tag der Auferstehung über diejenigen stellen, die ungläubig sind.`, original: `wa-jāʿilu lladhīna ttabaʿūka fawqa lladhīna kafarū ilā yawmi l-qiyāma`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/55' },
        ],
      },
      {
        text: `P3: Die Nachfolger Jesu, die sich historisch durchsetzten, bekannten Kreuzestod, Auferstehung und göttliche Würde Jesu – von Anfang an.`,
        support: `1 Kor 15,3–7; 1 Kor 16,22; Phil 2,6–11; Apg 2; Josephus, Antiquitates 20,200; Plinius, Briefe 10,96; 1. Clemensbrief; Ignatius. Eine Gruppe von Jüngern mit islamischer Christologie ist nirgends bezeugt.`,
        sources: [
          { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe', ref: '10,96,7', year: 'um 112', quote: `Die Christen pflegten an einem bestimmten Tag vor Sonnenaufgang zusammenzukommen und Christus wie einem Gott im Wechsel ein Lied zu singen.`, original: `carmenque Christo quasi deo dicere secum invicem`, translation: 'eigene Übersetzung', status: 'verbatim' },
          { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer (Antiquitates)', ref: '20,200', year: 'um 93/94', quote: `Der Hohepriester Ananus ließ „den Bruder Jesu, des sogenannten Christus, mit Namen Jakobus" und einige andere steinigen.`, status: 'paraphrase' },
        ],
      },
    ],
    inferences: [
      `Wenn die Jünger glaubten, was die frühe Kirche glaubte, waren sie keine Muslime im Sinn des Islam.`,
      `Wenn sie Muslime im islamischen Sinn waren, ist ihre Gemeinschaft spurlos untergegangen – sie wurde nicht siegreich.`,
    ],
    conclusion: `In beiden Fällen irrt der Koran: entweder über den Glauben der Jünger oder über ihren Sieg.`,
    horns: [
      { label: 'Horn A: Die Jünger glaubten, was die frühe Kirche bezeugt', text: `Dann bekannten sie Kreuz, Auferstehung und Jesus als Herrn – und der Koran nennt Menschen „Muslime" und „siegreiche Gläubige", die genau das verkündeten, was der Koran verneint. Gottes Sieg galt dann der Kirche.` },
      { label: 'Horn B: Die Jünger waren Muslime im islamischen Sinn', text: `Dann wurde ihre Lehre sofort verdrängt und verschwand ohne Spur, bis Mohammed kam. Das widerspricht 61:14 („so wurden sie die Obsiegenden") und 3:55 („bis zum Tag der Auferstehung über die Ungläubigen").` },
    ],
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel und Zeuge des ältesten Bekenntnisses',
      text: `Paulus betont, dass er das Evangelium von Tod und Auferstehung nicht erfunden, sondern „empfangen" hat, und dass Petrus, die Zwölf und Jakobus Zeugen desselben sind. Er besuchte Petrus fünfzehn Tage lang in Jerusalem (Gal 1,18–19) und legte den „Säulen" sein Evangelium vor, die ihm die Hand der Gemeinschaft gaben (Gal 2,2.9). Sogar als er Petrus öffentlich widersprach (Gal 2,11–14), ging es um Tischgemeinschaft, nicht um Kreuz oder Auferstehung.`,
      sources: [
        { kind: 'bibel', work: 'Galater', ref: '2,9', quote: `Jakobus, Kephas und Johannes, die für Säulen angesehen waren, gaben Paulus und Barnabas die Hand der Gemeinschaft.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'petrus',
      role: 'als Haupt der Zwölf',
      text: `Petrus verkündet am Pfingsttag in Jerusalem, vor Augenzeugen der Ereignisse, dass Jesus gekreuzigt und von Gott auferweckt wurde (Apg 2,23–24.32) und nun Herr ist. Sein Brief bekennt, dass Christus „unsre Sünden selbst hinaufgetragen hat an seinem Leibe auf das Holz" (1 Petr 2,24). Der Jünger, den der Koran unter die „Helfer Allahs" zählt, ist der erste Prediger des Kreuzes.`,
      sources: [
        { kind: 'bibel', work: '1. Petrus', ref: '2,24', quote: `welcher unsre Sünden selbst hinaufgetragen hat an seinem Leibe auf das Holz.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühchristlichen Jesusverehrung',
      text: `Hurtado hat gezeigt, dass die Verehrung Jesu als göttlicher Herr kein spätes, heidnisches Produkt ist, sondern explosionsartig in den ersten Jahren in jüdisch-christlichen Kreisen auftrat: Gebet zu Jesus, Anrufung seines Namens, Taufe in seinem Namen, Hymnen auf ihn. Das aramäische *Maranatha* zeigt, dass schon die palästinische Urgemeinde – die Gemeinde der Jünger – zu Jesus betete.`,
      sources: [
        { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', quote: `Die kultische Verehrung Jesu entstand sehr früh in jüdisch-christlichen Kreisen und ist schon in den frühesten Quellen voll ausgebildet.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer, der das zweite Dilemma formulierte',
      text: `Wood weist darauf hin, dass muslimische Apologeten, die Paulus als Verfälscher hinstellen, unbemerkt den Koran treffen: Wenn Paulus die Lehre der Jünger sofort und vollständig verdrängte, dann hat Gott die Gläubigen eben *nicht* siegreich gemacht, wie 61:14 und 3:55 behaupten. Wer Paulus zum Sieger der Geschichte erklärt, erklärt Gottes Verheißung im Koran für gescheitert.`,
    },
    {
      person: 'eusebius',
      role: 'als Historiker der frühen Kirche',
      text: `Eusebius sammelt die Überlieferungen über die Apostel und ihre Nachfolger: Markus in Alexandrien, Jakobus in Jerusalem, Petrus und Paulus in Rom. Er berichtet nach Hegesippus, dass Jakobus, der Bruder des Herrn, bei seinem Martyrium Jesus als den Menschensohn bekannte, der zur Rechten der großen Macht sitzt und auf den Wolken kommen wird. Die Linie der Jünger ist die Linie der Märtyrer – und sie bekannten den erhöhten Christus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,23', year: 'um 325', quote: `Martyrium des Jakobus nach Hegesippus mit seinem Bekenntnis zu Jesus als dem Menschensohn zur Rechten der Macht.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'muslim-heisst-hingabe',
      objection: `„Muslim" heißt einfach „Gott ergeben". Alle Propheten und ihre Anhänger waren Muslime – Abraham, Mose, Jesus und die Jünger. Sie glaubten an den einen Gott, nicht an eine Trinität.`,
      objectionBy: 'Zakir Naik',
      targetsPremise: 1,
      answer: `Wenn „Muslim" nur „Gott ergeben" heißt, dann sind auch Christen in diesem Sinn Muslime – das ist nicht der Streitpunkt. Die Frage ist: Glaubten die Jünger, was der *Islam* lehrt – dass Jesus nicht gekreuzigt wurde und nicht Gottes Sohn ist? Die ältesten Quellen der Jüngergemeinde sagen das Gegenteil: Kreuz, Auferstehung und Gebet zu Jesus als Herrn.`,
      questionsBack: [
        `Welche Quelle aus dem 1. Jahrhundert zeigt Jünger, die die Kreuzigung leugneten?`,
      ],
      followUps: [
        {
          id: 'jesus-nur-prophet-geglaubt',
          objection: `Die Jünger sahen Jesus als Propheten und Diener Gottes. Petrus sagt in Apg 2,22: „Jesus von Nazareth, ein Mann, von Gott unter euch ausgewiesen." Ein Mann, nicht Gott!`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 3,
          answer: `Lies weiter: Derselbe Petrus sagt im nächsten Satz, dass dieser Mann „durch die Hände der Ungerechten ans Kreuz geheftet und getötet" wurde (2,23), dass Gott ihn auferweckte (2,24) und zum „Herrn und Christus" machte (2,36), und er tauft „auf den Namen Jesu" (2,38). Jesus ist wahrer Mensch – das glauben wir auch. Aber gerade Apg 2 bestätigt die Kreuzigung, die der Koran bestreitet.`,
          followUps: [
            {
              id: 'apostelgeschichte-parteiisch',
              objection: `Die Apostelgeschichte ist von Lukas, dem Begleiter des Paulus. Sie ist paulinische Propaganda und legt Petrus Worte in den Mund.`,
              objectionBy: 'Shabir Ally',
              targetsPremise: 3,
              answer: `Dann nimm Paulus selbst in seinem unbestrittenen Brief: Er zitiert ein Bekenntnis, das er „empfangen" hat, nennt Petrus und Jakobus als Zeugen und sagt: „Es sei nun ich oder jene: also predigen wir" (1 Kor 15,11). Hätte Paulus gelogen, hätten die Korinther – die Petrus kannten (1 Kor 1,12) – es sofort gewusst. Und *Maranatha* ist Aramäisch, die Sprache der Jerusalemer Gemeinde, nicht des Paulus.`,
              detail: `Fast alle Forscher, auch skeptische wie Gerd Lüdemann und Bart Ehrman, halten 1 Kor 15,3–7 für eine sehr frühe, vorpaulinische Überlieferung. Paulus hatte persönlichen Kontakt mit Petrus und Jakobus (Gal 1,18–19). Die Behauptung, er habe ihnen eine ganz andere Lehre untergeschoben, ohne dass sie widersprachen, hat keine Quelle.`,
              followUps: [
                {
                  id: 'jakobus-gegen-paulus',
                  objection: `Jakobus war gegen Paulus! Jakobus 2 sagt, der Mensch wird durch Werke gerecht, nicht durch Glauben allein – das ist ein direkter Angriff auf Paulus. Die Jerusalemer Gemeinde hielt am Gesetz fest.`,
                  objectionBy: 'Shabir Ally',
                  targetsPremise: 3,
                  answer: `Jakobus kritisiert einen toten Glauben ohne Werke – das tut Paulus auch (Gal 5,6). Aber selbst wenn sie sich über Gesetz und Werke stritten: Über Kreuz und Auferstehung stritten sie nie. Jakobus nennt sich „Knecht Gottes und des Herrn Jesus Christus" (Jak 1,1) und spricht von Jesus als dem „Herrn der Herrlichkeit" (Jak 2,1). Josephus bezeugt, dass er als Bruder „des sogenannten Christus" gesteinigt wurde.`,
                  detail: `Aus koptisch-orthodoxer Sicht gibt es zwischen Jakobus und Paulus keinen Widerspruch: Der Glaube wirkt durch die Liebe, und das Heil ist Gnade, die der Mensch mit Werken der Liebe annimmt (Synergie). Genau diese Harmonie lehrt die Kirche seit jeher.`,
                  sources: [
                    { kind: 'bibel', work: 'Jakobus', ref: '2,1', quote: `Liebe Brüder, haltet nicht dafür, daß der Glaube an Jesum Christum, unsern HERRN der Herrlichkeit, Ansehen der Person leide.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  followUps: [
                    {
                      id: 'ebioniten-wahre-nachfolger',
                      objection: `Die Erben der Jerusalemer Gemeinde waren die Ebioniten: Sie sahen Jesus als Menschen, lehnten Paulus ab und hielten das Gesetz. Sie waren die wahren Nachfolger – und sie wurden von der Großkirche verdrängt.`,
                      objectionBy: 'Shabir Ally',
                      targetsPremise: 2,
                      answer: `Dann bestätigst du Horn B: Die „wahren Nachfolger" wurden verdrängt und verschwanden – aber der Koran sagt, Gott stärkte die Gläubigen, „und so wurden sie die Obsiegenden" (61:14). Außerdem sind die Ebioniten erst im 2. Jahrhundert bezeugt (Irenäus), lebten nach dem jüdischen Gesetz, das Muslime nicht halten, und keine Quelle schreibt ihnen die Leugnung der Kreuzigung zu. Sie waren keine Muslime.`,
                      detail: `Irenäus (Adv. Haer. I,26,2) berichtet, die Ebioniten benutzten nur das Matthäusevangelium, lehnten Paulus als Abtrünnigen vom Gesetz ab und praktizierten die Beschneidung. Wer sie zu Muslimen erklärt, muss einen Monotheismus mit Beschneidung, Sabbat und Tora-Gehorsam als „Islam" bezeichnen – und die Kreuzigung, die sie nicht bestritten, wegerklären.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'I,26,2', year: 'um 180', quote: `Die Ebioniten benutzen nur das Matthäusevangelium, verwerfen den Apostel Paulus als Abtrünnigen vom Gesetz und halten an Beschneidung und Gesetz fest.`, status: 'paraphrase' },
                      ],
                      followUps: [
                        {
                          id: 'durch-mohammed-siegreich',
                          objection: `Gott hat sie eben später siegreich gemacht – durch Mohammed. Der Islam ist der Sieg der wahren Nachfolger Jesu.`,
                          objectionBy: 'verbreiteter muslimischer Einwand',
                          targetsPremise: 2,
                          answer: `61:14 erzählt in der Vergangenheit von der Spaltung Israels zur Zeit Jesu: Ein Teil glaubte, ein Teil nicht – „da stärkten Wir die Gläubigen, *und so wurden sie* die Obsiegenden". Ein Sieg, der 600 Jahre ausbleibt, während die Gläubigen ausgelöscht werden, ist das Gegenteil dessen, was der Vers beschreibt. Und 3:55 verheißt die Überlegenheit „bis zum Tag der Auferstehung" – ohne Unterbrechung.`,
                          questionsBack: [
                            `Wer waren zwischen dem Jahr 100 und dem Jahr 610 die „siegreichen" Nachfolger Jesu, die die Kreuzigung leugneten?`,
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'die-dir-folgen-sind-muslime',
      objection: `„Die dir folgen" in 3:55 sind die Muslime – nur sie folgen Jesus wirklich, weil sie ihn als Propheten ehren. Das hat nichts mit der Kirche zu tun.`,
      objectionBy: 'klassische und moderne muslimische Auslegung',
      targetsPremise: 2,
      answer: `Klassische Ausleger nennen zwei Deutungen: die Christen, die über die Juden gestellt wurden, oder die Muslime. Nimm die erste – dann hat Gott die Kirche, die Kreuz und Trinität bekennt, bis zum Jüngsten Tag über die Ungläubigen gestellt. Nimm die zweite – dann gab es 600 Jahre lang niemanden, der Jesus „folgte", obwohl der Vers zu Jesus selbst gesprochen ist und 61:14 vom Sieg seiner Jünger berichtet.`,
      detail: `Die Ausleger ringen hier sichtbar mit dem Problem: Die naheliegende historische Deutung („die Christen") ehrt die Kirche, die der Islam für irrig hält; die theologisch bequeme Deutung („die Muslime") reißt eine Lücke von sechs Jahrhunderten in eine Verheißung, die „bis zum Tag der Auferstehung" gilt.`,
      followUps: [
        {
          id: 'prophezeiung-ueber-zukunft',
          objection: `61:14 ist eine Aussage über die Zukunft aus Gottes Sicht – der Sieg kam eben mit dem Islam. Für Gott ist die Zeit kein Problem.`,
          objectionBy: 'Mohammed Hijab',
          targetsPremise: 2,
          answer: `Der Vers erzählt eine abgeschlossene Abfolge: Jesus ruft die Jünger, sie antworten, ein Teil Israels glaubt, ein Teil nicht, Gott stärkt die Gläubigen – „und so wurden sie die Obsiegenden". Das ist ein Bericht über die Jünger und ihre Gegner. Wenn „die Gläubigen" erst 600 Jahre später siegten, waren es nicht mehr dieselben Menschen, die der Vers beschreibt.`,
          followUps: [
            {
              id: 'bericht-drei-gruppen',
              objection: `In den Kommentaren zu 61:14 wird überliefert, dass sich die Anhänger Jesu nach seiner Erhöhung in Gruppen spalteten. Die wahren Gläubigen wurden unterdrückt, bis Mohammed kam und ihr Zeugnis bestätigte.`,
              objectionBy: 'Überlieferung in klassischen Kommentaren (u. a. bei Ibn Kathir zu 61:14 referiert)',
              targetsPremise: 2,
              answer: `Dieser Bericht gibt genau das zu, was das Dilemma behauptet: Die „wahren Gläubigen" wurden unterdrückt und verloren – also *nicht* siegreich. Er ist eine spätere Harmonisierung, um den Vers mit der Geschichte zu versöhnen. Und historisch gibt es keine Spur einer „muslimischen" Jesusgruppe zwischen dem 1. und dem 7. Jahrhundert.`,
              sources: [
                { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsir al-Qur\'an al-\'Azim', ref: 'zu 61:14', quote: `Überlieferung, nach der sich die Anhänger Jesu in Gruppen spalteten und die Gläubigen bedrängt blieben, bis Gott sie durch Mohammed stärkte.`, status: 'paraphrase', note: 'Inhalt im Kommentar Ibn Kathirs zu 61:14 belegt (gekürzte englische Ausgabe: die Anhänger spalteten sich in drei Gruppen, zwei ungläubige Gruppen bedrängten die gläubige, bis Allah Mohammed sandte); Ma\'ariful Qur\'an führt den Bericht über al-Baghawi auf Ibn Abbas zurück. Kette und arabischer Wortlaut vor wörtlicher Verwendung prüfen.' },
              ],
              followUps: [
                {
                  id: 'sieg-durch-argument',
                  objection: `„Obsiegend" (zahirin) heißt hier: siegreich durch das Argument, durch den Beweis – nicht politisch oder zahlenmäßig.`,
                  objectionBy: 'Auslegung bei einigen klassischen Kommentatoren',
                  targetsPremise: 2,
                  answer: `Gut – dann zeig mir die Argumente der „muslimischen" Jünger, die im 1. oder 2. Jahrhundert die Debatte gewannen. Es gibt keinen einzigen Text. Die Argumente, die sich in der Antike tatsächlich durchsetzten – gegen Juden, Heiden und Gnostiker –, sind die der Apostel und Väter, die den gekreuzigten und auferstandenen Herrn verkündeten.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'paulus-erfand-christentum-juenger',
      objection: `Paulus hat das Christentum erfunden. Die Jünger kannten weder Sühnetod noch Gottessohnschaft – das kam erst durch ihn.`,
      objectionBy: 'Ahmed Deedat',
      targetsPremise: 3,
      answer: `Paulus sagt selbst, er gebe weiter, was er empfangen hat (1 Kor 15,3), und nennt Petrus, die Zwölf und Jakobus als Zeugen. Die Markus-Passion, nach alter Überlieferung auf Petrus zurückgehend, erzählt dasselbe Kreuz unabhängig von Paulus. Und vor allem: Wenn Paulus die Jünger verdrängt hätte, wären sie nicht „siegreich" geworden (61:14) – dann irrt der Koran.`,
      followUps: [
        {
          id: 'paulus-nur-vision',
          objection: `Paulus kannte Jesus nie. Er hatte nur eine Vision auf dem Weg nach Damaskus – wie soll das zuverlässiger sein als die Jünger?`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 3,
          answer: `Paulus stellt sich nicht über die Jünger, sondern prüfte sein Evangelium bei ihnen (Gal 2,2) und wurde von ihnen anerkannt (Gal 2,9). Und als Muslim kannst du eine Offenbarung durch eine Vision nicht grundsätzlich ablehnen – der Islam selbst gründet auf Offenbarungen, die ein Einzelner empfing. Die entscheidende Frage ist, ob die Augenzeugen ihn bestätigten. Sie taten es.`,
          followUps: [
            {
              id: 'barnabas-trennte-sich',
              objection: `Barnabas, der echte Jünger, trennte sich von Paulus (Apg 15,39). Das zeigt den Bruch – und Barnabas hat das wahre Evangelium bewahrt.`,
              objectionBy: 'Muhammad Ata ur-Rahim',
              targetsPremise: 3,
              answer: `Apg 15,37–39 nennt den Grund: Sie stritten, ob Johannes Markus mitkommen sollte – ein persönlicher, kein theologischer Streit. Paulus spricht später gut über Barnabas (1 Kor 9,6) und über Markus (Kol 4,10; 2 Tim 4,11). Und das sogenannte Barnabasevangelium stammt nachweislich aus dem Spätmittelalter.`,
              detail: `Siehe Claim „Das Barnabasevangelium ist das wahre Evangelium" (Topic „Ist die Bibel verfälscht?").`,
            },
          ],
        },
      ],
    },
    {
      id: 'juenger-flohen',
      objection: `Die Jünger flohen, als Jesus verhaftet wurde (Mk 14,50). Sie sahen die Kreuzigung gar nicht – deshalb konnten sie über das, was geschah, getäuscht werden.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 3,
      answer: `Frauen aus dem Jüngerkreis und der Lieblingsjünger standen beim Kreuz (Joh 19,25–27; Mk 15,40–41). Vor allem aber: Der Koran nennt die Jünger „Helfer Allahs", die Gott selbst bezeugen ließ, dass sie glauben (5:111), und die er stärkte. Wenn Gott diese Gläubigen so täuschte, dass sie den Rest ihres Lebens das Kreuz verkündeten und dafür starben, dann wäre Gott selbst die Ursache des Christentums.`,
      followUps: [
        {
          id: 'gott-taeuscht-nicht-absichtlich',
          objection: `Gott hat sie nicht getäuscht – sie haben sich selbst geirrt. „Es erschien ihnen nur so" (4:157).`,
          objectionBy: 'Mohammed Hijab',
          targetsPremise: 3,
          answer: `Wer ließ es ihnen „so erscheinen"? Nach 4:157 war es Gottes Handeln, das Jesus' Erscheinung auf einen anderen legte (so die Mehrheitsdeutung). Dann irrten Gottes eigene „Helfer" wegen Gottes eigener Tat – und verkündeten diesen Irrtum als Zeugen der Auferstehung. Das ist das Täuschungsdilemma, das im Topic „Kreuz und Erlösung" ausführlich behandelt wird.`,
        },
      ],
    },
    {
      id: 'sieg-durch-konstantins-schwert',
      objection: `Die Kirche siegte nur, weil Konstantin sie zur Staatsreligion machte. Das ist kein Sieg Gottes, sondern Machtpolitik.`,
      objectionBy: 'verbreiteter Einwand',
      targetsPremise: 3,
      answer: `Die Kirche wuchs fast 300 Jahre ohne Macht, unter Verfolgung – von Nero bis Diokletian. Die koptische Kirche zählt ihre Jahre bis heute nach der „Ära der Märtyrer". Plinius berichtet schon um 112 von Christen, die Christus „wie einem Gott" lobsingen und dafür hingerichtet werden. Das ist ein Sieg durch Zeugnis, nicht durch das Schwert – und genau den beschreibt 61:14: Gott stärkte sie.`,
      followUps: [
        {
          id: 'kirche-war-zerstritten',
          objection: `Die Kirche war doch völlig zerstritten – Arianer, Nestorianer, Kopten, Chalcedonenser. Welche davon soll die siegreiche Gemeinschaft sein?`,
          objectionBy: 'Mohammed Hijab',
          targetsPremise: 3,
          answer: `Es ist bemerkenswert: Alle diese Gruppen – sogar die Arianer – bekannten den Kreuzestod und die Auferstehung Jesu. Sie stritten darüber, *wie* Gottheit und Menschheit in Christus vereint sind, nicht *ob* er gekreuzigt wurde. Welche du auch nimmst: Keine von ihnen war „muslimisch". Damit bleibt das Dilemma bestehen.`,
          detail: `Aus koptisch-orthodoxer Sicht ist der Streit um Chalcedon zudem weitgehend terminologisch – die gemeinsamen Erklärungen von 1989/1990 mit den östlich-orthodoxen Kirchen zeigen den gleichen Glauben an den einen menschgewordenen Gott-Logos.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer waren nach deiner Sicht die „siegreichen" Nachfolger Jesu zwischen dem Jahr 50 und dem Jahr 610?`,
    `Kennst du irgendeine Quelle aus dem 1. Jahrhundert, in der ein Jünger die Kreuzigung leugnet?`,
    `Wenn Paulus die Jünger verdrängte – hat Gott dann sein Versprechen aus 61:14 gehalten?`,
    `Warum betete die aramäischsprachige Urgemeinde zu Jesus (*Maranatha*), wenn sie ihn nur für einen Propheten hielt?`,
  ],
  avoid: [
    `Nicht behaupten, Paulus und Jakobus seien in allem einer Meinung gewesen – sie hatten Spannungen über das Gesetz (Gal 2; Apg 15; 21). Der Punkt ist: Über Kreuz und Auferstehung waren sie sich einig.`,
    `Nicht mit späten Legenden über die Apostel argumentieren (z. B. Einzelheiten aus apokryphen Apostelakten). Bleib bei 1 Kor 15, Gal 1–2, Apg 2, Josephus und Plinius.`,
  ],
  concessions: [
    `In der Urgemeinde gab es echte Konflikte über die Geltung des jüdischen Gesetzes für Heidenchristen (Apg 15; Gal 2).`,
    `Die Ebioniten waren eine reale judenchristliche Gruppe mit niedriger Christologie – aber erst ab dem 2. Jahrhundert bezeugt und ohne Leugnung der Kreuzigung.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Jünger', 'Paulus', 'Urgemeinde', 'Dilemma'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-mohammed/paulus-verfaelschte-jesus-islam',
    'islam-kreuzigung/ersatztheorie-taeuschung',
    'islam-bibelverfaelschung/barnabasevangelium',
    'neues-testament/paulus-erfand-christentum',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
  ],
};

export default claim;
