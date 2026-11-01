import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ersatztheorie-taeuschung',
  title: `„Ein anderer wurde an seiner Stelle gekreuzigt."`,
  proponents: [
    { name: 'Ibn Kathir', role: 'Koranexeget (gest. 1373)', work: 'Tafsīr al-Qurʾān al-ʿaẓīm, zu 4:157 (Bericht über den freiwilligen Jünger)' },
    { name: 'Muhammad ibn Jarir at-Tabari', role: 'Koranexeget und Historiker (gest. 923)', work: 'Jāmiʿ al-bayān, zu 4:157' },
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Crucifixion or Cruci-fiction? (1984)' },
    { name: 'Verfasser des „Barnabasevangeliums"', role: 'Pseudepigraphische Schrift (spätes Mittelalter/frühe Neuzeit)', work: 'Barnabasevangelium, Kap. 215–217 (Judas als Ersatz)' },
  ],
  steelman: `Der Koran sagt, dass Jesus den Juden „ähnlich gemacht" wurde (*šubbiha lahum*, 4:157). Die frühen muslimischen Gelehrten überliefern, wie das geschah: Nach einem Bericht, den Ibn Kathir auf Ibn ʿAbbas zurückführt, fragte Jesus seine Jünger, wer bereit sei, seine Gestalt zu tragen, an seiner Stelle zu sterben und mit ihm im Paradies zu sein; ein junger Jünger meldete sich. Nach anderen Berichten traf es den Verräter Judas – gerechte Strafe für seinen Verrat. Auch unter frühen Christen gab es die Überlieferung, dass nicht Jesus selbst gekreuzigt wurde: Basilides lehrte im 2. Jahrhundert, Simon von Kyrene sei an seiner Stelle gestorben. Gott hat seinen Propheten gerettet und die Pläne seiner Feinde vereitelt – „Allah ist der beste der Planenden" (3:54).`,
  biblical: {
    summary: `Die Evangelien schließen eine Verwechslung ausdrücklich aus: Jesus wurde öffentlich verhört (Mk 14,53–65; 15,1–15), von seinem Volk und seinen Richtern erkannt, sprach am Kreuz zu seiner Mutter und zu Johannes (Joh 19,25–27), betete für seine Peiniger (Lk 23,34) und vergab dem Schächer (Lk 23,43). Seine Mutter, Maria Magdalena und andere Frauen standen dabei (Mk 15,40; Joh 19,25). Judas starb nach dem Zeugnis von Mt 27,3–5 und Apg 1,18 auf andere Weise. Die Auferstehungsberichte zeigen den Auferstandenen mit den Wundmalen (Lk 24,39–40; Joh 20,20.27) – das Zeichen, dass der Gekreuzigte und der Lebende derselbe ist.`,
    detail: `- **Joh 19,26–27:** „Weib, siehe, das ist dein Sohn!" – „Siehe, das ist deine Mutter!" Ein Ersatzmann hätte so nicht sprechen können.
- **Lk 23,34.43.46:** Vergebung für die Henker, Verheißung an den Schächer, „Vater, ich befehle meinen Geist in deine Hände" – Worte, die im Leben Jesu wurzeln.
- **Joh 20,27:** „Reiche deine Finger her und siehe meine Hände" – der Auferstandene trägt die Wunden der Kreuzigung.
- **Mt 27,3–5; Apg 1,18:** Das Ende des Judas wird eigens berichtet.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '19,26–27', quote: `Da nun Jesus seine Mutter sah und den Jünger dabeistehen, den er liebhatte, spricht er zu seiner Mutter: Weib, siehe, das ist dein Sohn! Darnach spricht er zu dem Jünger: Siehe, das ist deine Mutter!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,27', quote: `Darnach spricht er zu Thomas: Reiche deine Finger her und siehe meine Hände, und reiche deine Hand her und lege sie in meine Seite, und sei nicht ungläubig, sondern gläubig!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Vorstellung eines Ersatzgekreuzigten schon im 2. Jahrhundert als gnostische Irrlehre zurückgewiesen. Irenäus von Lyon berichtet, Basilides habe gelehrt, Simon von Kyrene sei – in Jesu Gestalt verwandelt – gekreuzigt worden, während Jesus in Simons Gestalt danebenstand und lachte. Für Irenäus ist das die Konsequenz einer Lehre, die die Menschwerdung leugnet: Wer meint, Christus habe keinen echten Leib gehabt, muss auch seinen Tod leugnen. Die koptische Kirche bekennt dagegen: Der Logos hat wahrhaft im Fleisch gelitten (Kyrill, 12. Anathematismus).`,
    detail: `Ähnliche Vorstellungen finden sich in gnostischen Schriften aus Nag Hammadi: In der *Zweiten Abhandlung des großen Seth* (NHC VII,2) sagt der Erlöser, ein anderer – Simon – habe das Kreuz getragen; in der *Petrusapokalypse* (NHC VII,3) lacht der „lebendige Jesus" über die Kreuzigung. Gemeinsam ist diesen Texten die Verachtung des Leibes und der Materie. Der Jesus des Korans dagegen wurde von Maria geboren und aß Speise (5:75) – die gnostische Begründung passt also gerade nicht zum Islam.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'I,24,4', year: 'ca. 180', quote: `Er (Christus) habe nicht gelitten, sondern ein gewisser Simon von Kyrene sei gezwungen worden, sein Kreuz zu tragen; dieser sei aus Unwissenheit und Irrtum gekreuzigt worden, von ihm verwandelt, sodass man ihn für Jesus hielt; Jesus selbst aber habe die Gestalt Simons angenommen, dabeigestanden und sie verlacht.`, original: `… et stantem irrisisse eos`, translation: 'eigene Übersetzung, sinngemäß', status: 'paraphrase', note: 'Irenäus gibt die Lehre des Basilides wieder; ob er Basilides genau trifft, ist in der Forschung umstritten.' },
      { kind: 'sonstiges', work: 'Zweite Abhandlung des großen Seth (Nag Hammadi Codex VII,2)', year: '2./3. Jh.', quote: `Ein anderer war es, Simon, der das Kreuz auf seiner Schulter trug.`, translation: 'sinngemäß', status: 'paraphrase', note: 'Gnostische Schrift; leugnet die Leiblichkeit des Erlösers.' },
    ],
  },
  quickAnswer: `Die Ersatztheorie hat ein unlösbares Problem: Wenn Gott einem anderen Jesu Gestalt gab, dann hat Gott selbst Maria unter dem Kreuz, die Jünger und Millionen Christen getäuscht – und damit das Christentum verursacht. Ist der Ersatz ein Unschuldiger, stirbt ein Gerechter für einen anderen – genau die Stellvertretung, die der Islam für ungerecht hält. Ist es Judas, wird er ohne Gericht als ein anderer hingerichtet. Und der Koran selbst sagt, dass Gott Propheten töten ließ – warum brauchte er hier eine Täuschung?`,
  keyPoints: [
    `**Keine Augenzeugen, widersprüchliche Versionen:** Freiwilliger Jünger, Judas, ein Feind, Simon von Kyrene – die Berichte stammen aus Jahrhunderten nach dem Ereignis und widersprechen einander.`,
    `**Gott als Täuscher:** Nach der Ersatztheorie erzeugt Gott einen Schein, der Maria, die Jünger und 600 Jahre Christenheit irreführt.`,
    `**Das Stellvertretungs-Paradox:** Stirbt ein freiwilliger Gerechter an Jesu Stelle, ist das Stellvertretung – die der Islam beim Kreuz Christi für ungerecht erklärt (6:164).`,
    `**Der Koran kennt getötete Propheten** (2:61; 3:21; 4:155) – das Argument „Gott lässt seine Propheten nicht töten" widerspricht dem Koran selbst.`,
    `**Die einzige antike Parallele (Basilides, Nag Hammadi) ist gnostisch** und beruht auf der Leugnung des echten Leibes Christi – unvereinbar mit dem Jesus des Korans.`,
    `**Das Barnabasevangelium** ist ein spätmittelalterliches Werk und keine Quelle für das 1. Jahrhundert.`,
  ],
  argument: {
    name: 'Das Täuschungsdilemma',
    summary: 'Jede Form der Ersatztheorie macht Gott zum Urheber eines folgenschweren Irrtums oder widerspricht islamischen Grundsätzen.',
    premises: [
      { text: `P1: Nach der Ersatztheorie legte Gott Jesu Gestalt auf einen anderen, sodass alle Anwesenden diesen für Jesus hielten.`, support: `So die Mehrheit der klassischen Exegeten zu 4:157 (*šubbiha lahum* im Sinn von „ähnlich gemacht"); Ibn Kathir, at-Tabari.` },
      { text: `P2: Unter den Getäuschten waren Maria, die Jünger und die ersten Gläubigen, aus deren Glauben das Christentum mit dem Kreuz in seiner Mitte hervorging.`, support: `Joh 19,25–27; 1 Kor 15,3–5. Der Koran nennt die Jünger „Helfer Allahs" (3:52; 61:14) und sagt, Gott habe sie siegreich gemacht.` },
      { text: `P3: Ein wahrhaftiger Gott verursacht nicht absichtlich einen Irrtum, der seine treuesten Diener über das zentrale Ereignis ihres Glaubens irreführt.`, support: `Christen und Muslime bekennen Gott als wahrhaftig (Num 23,19; Hebr 6,18; Koran 4:87; 4:122).` },
    ],
    conclusion: `Die Ersatztheorie ist mit Gottes Wahrhaftigkeit unvereinbar. Sie verschiebt das Problem nur: Statt dass Jesus starb, hätte Gott die Welt über seinen Tod getäuscht.`,
    horns: [
      { label: 'Horn A: Der Ersatz war unschuldig (freiwilliger Jünger)', text: `Dann starb ein Gerechter stellvertretend für Jesus – Stellvertretung, die nach 6:164 ungerecht sein soll. Der Islam akzeptiert dann im Prinzip, was er am Kreuz Christi verwirft.` },
      { label: 'Horn B: Der Ersatz war schuldig (Judas oder ein Feind)', text: `Dann wurde ein Mensch ohne eigenes Verfahren als jemand anderer hingerichtet; hätte er protestiert, wäre der Schein zerbrochen – und die Augenzeugen berichten nichts davon. Zudem stammt die Judas-Version vor allem aus dem spätmittelalterlichen Barnabasevangelium.` },
    ],
  },
  voices: [
    {
      person: 'irenaeus',
      role: 'als Bekämpfer der Gnosis',
      text: `Irenäus berichtet als erster von der Lehre des Basilides, Simon von Kyrene sei an Jesu Stelle gekreuzigt worden. Für ihn zeigt diese Lehre, wohin die Verachtung des Fleisches führt: Wer Christus keinen echten Leib zugesteht, muss auch sein Leiden und Sterben wegerklären – und verliert damit die Erlösung des Leibes. Irenäus hält dagegen: Der Sohn Gottes wurde wahrhaft Mensch, litt wahrhaft und erlöste uns durch sein eigenes Blut.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien', ref: 'I,24,4; III,18', year: 'ca. 180', status: 'paraphrase' }],
    },
    {
      person: 'david-wood',
      role: 'als Islam-Apologet',
      text: `David Wood formuliert das Täuschungsproblem als Dilemma: Nach 3:55 versprach Gott, die Nachfolger Jesu über die Ungläubigen zu stellen bis zum Tag der Auferstehung. Die Nachfolger Jesu aber, die tatsächlich die Oberhand gewannen, glaubten an die Kreuzigung – weil Gott ihnen nach islamischer Lehre einen Doppelgänger zeigte. Damit hätte Gott selbst den „Irrtum" begründet und siegreich gemacht. Wood stellt die Frage, ob ein solcher Gott noch der Gott der Wahrheit sei.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wood', work: 'Videoreihe und Debatten zum „Islamic Dilemma" und zur Kreuzigung', status: 'paraphrase' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim',
      text: `Nabeel Qureshi berichtet, dass ihn als Muslim die Frage beschäftigte, warum Gott einen Unschuldigen an Jesu Stelle sterben lassen oder alle Jünger täuschen sollte. Er verglich die islamischen Ersatzerzählungen und fand, dass sie weder auf Augenzeugen zurückgehen noch miteinander übereinstimmen. Die historischen Belege für die Kreuzigung dagegen waren für ihn eindeutig. Dieser Kontrast wurde für ihn zu einer der Fragen, die ihn zum Evangelium führten.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Kenner der Tafsir-Literatur',
      text: `Abuna Zakaria Botros hat die verschiedenen Ersatzerzählungen der klassischen Tafsir-Werke nebeneinandergestellt: ein freiwilliger Jünger, Judas, ein jüdischer Häscher, ein römischer Soldat. Er fragt seine muslimischen Zuschauer, welche davon die richtige sei, und weist darauf hin, dass keine auf den Propheten selbst zurückgeführt wird. Sein Punkt: Eine Lehre, die so zentral sein soll, steht historisch auf widersprüchlichen Einzelberichten.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'menschen-taeuschten-sich-selbst',
      objection: `Gott hat niemanden getäuscht. Die Juden haben sich selbst getäuscht, weil sie prahlten: „Wir haben den Messias getötet." Gott hat nur ihren Plan vereitelt.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 1,
      answer: `Wenn es nur um die Prahlerei ginge, bräuchte es keinen Doppelgänger. Aber die klassische Auslegung sagt: Gott **legte** die Ähnlichkeit auf einen anderen (*šubbiha* ist Passiv – jemand hat ähnlich gemacht). Wer sieht, was Gott ihn sehen lässt, täuscht sich nicht selbst, sondern wird getäuscht. Und getäuscht wurden nicht nur die Feinde, sondern Maria und die Jünger.`,
      followUps: [
        {
          id: 'pruefung-fitna',
          objection: `Allah prüft die Menschen (fitna). Er hat sie mit diesem Ereignis geprüft, um zu sehen, wer dem wahren Glauben folgt.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Eine Prüfung ist fair, wenn der Geprüfte die Wahrheit erkennen kann. Hier aber hat Gott die Sinne aller Anwesenden so beeinflusst, dass niemand die Wahrheit erkennen konnte – auch die Treuesten nicht. Das ist keine Prüfung, sondern das Ausschalten der Möglichkeit, sie zu bestehen. Und die „Durchgefallenen" wären gerade die, die das berichteten, was sie mit eigenen Augen gesehen hatten.`,
          followUps: [
            {
              id: 'juenger-wussten-bescheid',
              objection: `Vielleicht wussten die Jünger Bescheid, wurden aber zerstreut, und spätere Generationen machten daraus die Kreuzigungslehre.`,
              objectionBy: 'Shabir Ally',
              answer: `Dann hätten die Jünger gewusst, dass Jesus nicht gekreuzigt wurde, und trotzdem bis in den Märtyrertod das Gegenteil gepredigt (1 Kor 15,3–11). Und wo bleibt das Versprechen von 61:14, Gott habe die Gläubigen unter den Nachfolgern Jesu siegreich gemacht? Die Nachfolger, die tatsächlich siegten, glaubten an Kreuz und Auferstehung. Entweder hat Gott die Falschen siegen lassen – oder die Siegreichen hatten recht.`,
              sources: [
                { kind: 'koran', work: 'Sure 61 (as-Saff)', ref: '61:14', quote: `… Da glaubte ein Teil der Kinder Israels, und ein Teil war ungläubig. Wir stärkten nun diejenigen, die glaubten, gegen ihren Feind, und so wurden sie die Oberhand Habenden.`, original: `fa-ayyadnā lladhīna āmanū ʿalā ʿaduwwihim fa-aṣbaḥū ẓāhirīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/61/14' },
              ],
              questionsBack: [`Welche Nachfolger Jesu wurden in der Geschichte „die Oberhand Habenden" – und was glaubten sie über das Kreuz?`],
              followUps: [
                {
                  id: 'paulus-erfand-das-kreuz',
                  objection: `Die Kreuzestheologie ist eine Erfindung des Paulus. Die Jerusalemer Jünger um Jakobus glaubten etwas anderes; erst Paulus machte den Tod Jesu zum Zentrum.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Paulus selbst sagt, dass er die Kreuzigungsbotschaft „empfangen" hat und weitergibt – ein Bekenntnis, das die Forschung auf wenige Jahre nach dem Kreuz datiert: „dass Christus gestorben ist für unsere Sünden nach der Schrift und begraben wurde und auferweckt worden ist am dritten Tag" (1 Kor 15,3–4). Er nennt Petrus und Jakobus als Zeugen, die er persönlich traf (Gal 1,18–19), und fügt hinzu: „Ob nun ich oder jene – so predigen wir" (1 Kor 15,11). Und dass Jesus gekreuzigt wurde, bezeugen auch Nichtchristen: Tacitus und Josephus.`,
                  detail: `Die Kreuzigung Jesu gehört zu den am besten gesicherten Fakten der antiken Geschichte. Selbst skeptische Forscher wie John Dominic Crossan und Bart Ehrman halten sie für so sicher, wie ein historisches Ereignis nur sein kann. Unabhängige Quellen: die Paulusbriefe (50er-Jahre), alle vier Evangelien, Tacitus (Annalen 15,44: „von Pontius Pilatus hingerichtet"), Josephus (Antiquitates 18,63–64 – der Kern, dass Pilatus Jesus zum Kreuz verurteilte, gilt auch kritischen Forschern als echt), dazu Mara bar Serapion und Lukian, der Jesus spöttisch den „gekreuzigten Sophisten" nennt. Paulus hatte mit den Jerusalemer Aposteln Konflikte über Beschneidung und Speisegebote (Gal 2) – aber nie über die Frage, ob Jesus gekreuzigt wurde.`,
                  voices: [
                    { person: 'habermas', role: 'als Historiker der Auferstehungsforschung', text: `Habermas hat die Fachliteratur der letzten Jahrzehnte ausgewertet und zeigt, dass der Tod Jesu durch Kreuzigung von nahezu allen Forschern – gläubig wie skeptisch – als historische Tatsache anerkannt wird. Das Bekenntnis in 1 Kor 15,3–7 datieren die meisten Forscher in die ersten Jahre nach dem Kreuz; Paulus erhielt es wahrscheinlich bei seinem Besuch in Jerusalem bei Petrus und Jakobus.` },
                  ],
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,3–4.11', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift … Es sei nun ich oder jene: also predigen wir, und also habt ihr geglaubt.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdische Altertümer (Antiquitates Iudaicae)', ref: '18,63–64', year: 'ca. 93/94', status: 'paraphrase', note: 'Das „Testimonium Flavianum" ist christlich überarbeitet; der Kern (Verurteilung zum Kreuz durch Pilatus) gilt den meisten Forschern als echt.' },
                    { kind: 'fachliteratur', author: 'Gary R. Habermas / Michael R. Licona', work: 'The Case for the Resurrection of Jesus', year: '2004', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Kennst du eine Quelle aus dem 1. Jahrhundert – christlich, jüdisch oder römisch –, die sagt, Jesus sei nicht gekreuzigt worden?`,
                    `Worüber stritten Paulus und die Jerusalemer Apostel – und worüber nie?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'judas-wurde-bestraft',
      objection: `Judas, der Verräter, wurde in Jesu Gestalt verwandelt und gekreuzigt. Das ist göttliche Gerechtigkeit – der Verräter erleidet, was er dem Unschuldigen zugedacht hatte.`,
      objectionBy: 'Ahmed Deedat',
      targetsPremise: 1,
      answer: `Diese Version stammt vor allem aus dem sogenannten Barnabasevangelium, einem Werk des späten Mittelalters oder der frühen Neuzeit, das unter anderem Dantes Bild der „neun Himmel" und mittelalterliche Weinfässer kennt. Für das 1. Jahrhundert ist es wertlos. Und die Logik hinkt: Judas wäre ohne eigenes Verfahren als ein anderer hingerichtet worden. Hätte er beteuert „Ich bin Judas!", wäre der Schein zerbrochen – davon berichtet niemand. Das NT berichtet sein Ende anders (Mt 27,3–5).`,
      sources: [
        { kind: 'fachliteratur', author: 'Lonsdale and Laura Ragg (Hg.)', work: 'The Gospel of Barnabas (Edition der italienischen Handschrift)', year: '1907', status: 'paraphrase', note: 'Die Herausgeber datierten das Werk ins späte Mittelalter; heute meist ins 14.–16. Jh.' },
      ],
      followUps: [
        {
          id: 'freiwilliger-juenger',
          objection: `Der stärkste Bericht ist der von Ibn ʿAbbas: Ein junger Jünger meldete sich freiwillig, Jesu Gestalt anzunehmen und an seiner Stelle zu sterben, und erhielt dafür das Paradies. Ibn Kathir nennt die Überlieferungskette authentisch bis Ibn ʿAbbas.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann ist ein Gerechter freiwillig für einen anderen gestorben, damit dieser leben kann – das ist Stellvertretung in Reinform. Genau das erklärt ihr beim Kreuz Christi für ungerecht: „Niemand trägt die Last eines anderen" (6:164). Wenn ein freiwilliger Jünger für Jesus sterben darf, warum darf dann der Sohn Gottes nicht freiwillig für die Sünder sterben?`,
          sources: [
            { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsīr al-Qurʾān al-ʿaẓīm', ref: 'zu 4:157', quote: `Jesus fragte die zwölf Jünger im Haus: „Wer von euch will, dass ihm meine Gestalt gegeben wird, sodass er an meiner Stelle getötet wird und mit mir in meiner Stufe ist?" Der Jüngste meldete sich …`, translation: 'sinngemäß', status: 'paraphrase', note: 'Bericht nach Ibn Abi Hatim, auf Ibn ʿAbbas zurückgeführt; Ibn Kathir nennt die Kette bis Ibn ʿAbbas authentisch – es handelt sich aber nicht um ein Prophetenwort.' },
          ],
          followUps: [
            {
              id: 'freiwillig-ist-gerecht',
              objection: `Der Jünger starb freiwillig für Jesu Leben, nicht für Sünden. Das ist etwas anderes als die Sühne für die Schuld anderer.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Dann gibst du zu, dass ein Unschuldiger freiwillig an die Stelle eines anderen treten darf, ohne dass Gott ungerecht ist. Damit fällt der Grundsatz „Stellvertretung ist an sich ungerecht". Die Frage ist nur noch, ob Gott eine solche Stellvertretung zur Rettung der Sünder wollte – und das bezeugt die ganze Schrift von Jes 53 bis Mk 10,45. Und noch etwas: Der Bericht stammt von Ibn ʿAbbas, der etwa 600 Jahre nach den Ereignissen lebte – woher wusste er es?`,
            },
          ],
        },
      ],
    },
    {
      id: 'basilides-als-zeuge',
      objection: `Auch Christen haben früh bestritten, dass Jesus gekreuzigt wurde. Basilides lehrte schon um 130, dass Simon von Kyrene an seiner Stelle starb. Der Koran bestätigt diese verdrängte Überlieferung.`,
      objectionBy: 'Shabir Ally',
      answer: `Basilides war ein Gnostiker, der lehrte, Christus habe gar keinen echten menschlichen Leib gehabt, weil die Materie böse sei. Seine Ersatzlehre folgt aus der Leugnung der Menschwerdung. Der Jesus des Korans aber wurde von Maria geboren und aß Speise (5:75). Wer sich auf Basilides beruft, holt sich einen Zeugen, der den koranischen Jesus ebenso leugnet wie den biblischen. Und Irenäus' Bericht zeigt: Die Kirche des 2. Jahrhunderts bekannte die Kreuzigung.`,
      followUps: [
        {
          id: 'gnostiker-hatten-alte-quellen',
          objection: `Vielleicht bewahrten die Gnostiker trotzdem eine alte Erinnerung, die die Großkirche unterdrückte.`,
          objectionBy: 'Islamischer Apologet (Online-Debatte)',
          answer: `Dafür gibt es keinen Beleg. Die gnostischen Texte sind jünger als die Paulusbriefe und die Evangelien und setzen sie voraus; ihre Ersatzidee ist eine philosophische Folgerung aus ihrer Leibfeindlichkeit, keine historische Erinnerung. Die ältesten Quellen – Paulus um 50–55, Markus um 70 – sprechen alle von der Kreuzigung. Eine „verdrängte Erinnerung" ohne Quelle ist keine Geschichtswissenschaft.`,
        },
      ],
    },
    {
      id: 'gott-laesst-propheten-nicht-toeten',
      objection: `Allah lässt nicht zu, dass sein Gesandter von seinen Feinden ermordet und gedemütigt wird. Deshalb musste er ihn retten.`,
      objectionBy: 'Zakir Naik',
      answer: `Der Koran selbst sagt mehrfach, dass die Kinder Israels Propheten getötet haben: „… weil sie die Propheten ohne Recht töteten" (2:61; vgl. 3:21; 4:155). Gott hat es also zugelassen. Wenn Gott Propheten sterben lassen kann, ohne an Ehre zu verlieren, warum brauchte er bei Jesus eine Täuschung? Und nach islamischer Überlieferung wurde auch Johannes der Täufer (Yahya) getötet.`,
      sources: [
        { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:61', quote: `… Dies, weil sie die Zeichen Allahs verleugneten und die Propheten ohne Recht töteten.`, original: `wa-yaqtulūna n-nabiyyīna bi-ghairi l-ḥaqq`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/2/61' },
        { kind: 'koran', work: 'Sure 4 (an-Nisa)', ref: '4:155', quote: `… wegen ihres Tötens der Propheten ohne Recht …`, original: `wa-qatlihimu l-anbiyāʾa bi-ghairi ḥaqq`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/4/155' },
      ],
      followUps: [
        {
          id: 'jesus-war-besonders-geschuetzt',
          objection: `Jesus war besonders: Allah sagt, Er habe die Kinder Israels von ihm abgehalten (5:110). Das ist eine Verheißung des Schutzes.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die Evangelien berichten tatsächlich, dass Jesus seinen Feinden mehrfach entging, „weil seine Stunde noch nicht gekommen war" (Lk 4,29–30; Joh 7,30; 8,59). Aber als seine Stunde kam, gab er sein Leben freiwillig (Joh 10,18). Und selbst wenn 5:110 einen Schutz meint: Gott hätte ihn retten können, ohne alle Anwesenden zu täuschen – etwa durch eine sichtbare Entrückung vor aller Augen.`,
        },
      ],
    },
    {
      id: 'sie-sind-im-zweifel',
      objection: `Der Koran sagt: „Diejenigen, die darüber uneins sind, sind im Zweifel darüber; sie haben kein Wissen davon, sondern folgen nur Vermutungen" (4:157). Das beschreibt genau die Christen.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Die ersten Christen waren gerade nicht im Zweifel – sie starben für ihr Zeugnis, dass der Gekreuzigte auferstanden ist. Der einzige „Zweifel" der Antike kam von gnostischen Randgruppen. Wenn jemand „Vermutungen folgt", dann sind es die späteren Ersatzerzählungen, die einander widersprechen und auf keinen Augenzeugen zurückgehen.`,
    },
  ],
  questionsToAsk: [
    `Welche der Ersatzerzählungen hältst du für wahr – den freiwilligen Jünger, Judas oder einen Feind? Auf welchen Augenzeugen geht sie zurück?`,
    `Wenn ein freiwilliger Jünger für Jesus sterben durfte – warum ist es ungerecht, dass Christus freiwillig für Sünder starb?`,
    `Warum täuschte Gott die Mutter Jesu, die unter dem Kreuz stand?`,
    `Der Koran sagt, Israel habe Propheten getötet. Warum hätte Gott bei Jesus eine Täuschung gebraucht?`,
  ],
  avoid: [
    `Das Barnabasevangelium nicht als „Fälschung von Muslimen" bezeichnen, wenn du den Ursprung nicht belegen kannst – sag: „ein spätmittelalterliches Werk ohne Bezug zum 1. Jahrhundert".`,
    `Nicht behaupten, Basilides sei „der Erfinder" der islamischen Lehre – eine direkte Abhängigkeit ist nicht nachweisbar. Sag: Er ist die einzige antike Parallele, und sie ist gnostisch.`,
    `Nicht in Spott über die Ersatzerzählungen verfallen; behandle sie als ernsthafte Deutungsversuche frommer Exegeten.`,
  ],
  concessions: [
    `Die islamische Tradition ist sich über die Art der „Ähnlichmachung" nicht einig; manche Muslime lehnen die Ersatztheorie ganz ab.`,
    `Ob Irenäus Basilides korrekt wiedergibt, ist in der Forschung umstritten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Todd Lawson', work: 'The Crucifixion and the Qur\'an: A Study in the History of Muslim Thought', year: '2009', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien, Buch I', year: 'ca. 180', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kreuzigung', 'Ersatztheorie', 'Täuschung', 'Basilides', 'Barnabasevangelium'],
  related: [
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'islam-kreuzigung/niemand-traegt-last',
    'islam-dilemma/juenger-waren-muslime',
    'islam-bibelverfaelschung/barnabasevangelium',
    'gnosis/gnostische-evangelien-wahres-christentum',
  ],
};

export default claim;
