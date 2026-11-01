import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'christentum-durch-gewalt-verbreitet',
  title: `„Das Christentum verbreitete sich nur durch Staatsmacht und Gewalt."`,
  proponents: [
    { name: 'Catherine Nixey', role: 'Journalistin und Autorin', work: 'The Darkening Age. The Christian Destruction of the Classical World (2017)' },
    { name: 'Charles Freeman', role: 'Historiker', work: 'The Closing of the Western Mind (2002)' },
    { name: 'Ramsay MacMullen', role: 'Althistoriker, Yale', work: 'Christianizing the Roman Empire (1984); Christianity and Paganism in the Fourth to Eighth Centuries (1997)' },
    { name: 'Christopher Hitchens', role: 'Publizist (†2011)', work: 'God Is Not Great (2007)' },
  ],
  steelman: `Bis Konstantin war das Christentum eine kleine Sekte. Erst als der Kaiser 312 Christ wurde, Kirchen baute, Bischöfe privilegierte und seine Nachfolger heidnische Opfer verboten, Tempel schlossen und schließlich unter Theodosius das Christentum zur einzigen erlaubten Religion machten, wurde es zur Mehrheitsreligion. Tempel wurden zerstört, Statuen zerschlagen, Philosophen verfolgt; Justinian zwang Heiden zur Taufe. Im Mittelalter ging es so weiter: Karl der Große ließ die Sachsen mit dem Schwert taufen und bedrohte die Verweigerung der Taufe mit dem Tod, im Baltikum führten Kreuzritter Missionskriege, in Spanien wurden Juden und Muslime 1492 und 1502 vor die Wahl zwischen Taufe und Vertreibung gestellt, in Amerika folgte die Mission den Konquistadoren. Eine Religion, die sich angeblich durch Liebe verbreitete, hat in Wahrheit fast immer auf Macht und Zwang gesetzt.`,
  biblical: {
    summary: `Jesus gründete keinen Staat und verbot seinen Jüngern, ihn mit dem Schwert zu verteidigen (Mt 26,52; Joh 18,36). Die Sendung der Apostel geschieht durch Verkündigung, Zeugnis und Leiden, nicht durch Gewalt (Mt 28,19–20; Apg 1,8; 2 Kor 10,4). Die ersten drei Jahrhunderte der Kirche bestätigen das: Christen waren eine verfolgte Minderheit ohne Armee und ohne Staatsmacht, deren Zahl trotzdem ständig wuchs. Wenn Christen später Zwang anwandten, handelten sie gegen das Wort ihres Herrn.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Da sprach Jesus zu ihm: Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt. Wäre mein Reich von dieser Welt, meine Diener würden darob kämpfen, daß ich den Juden nicht überantwortet würde; aber nun ist mein Reich nicht von dannen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '10,4', quote: `Denn die Waffen unsrer Ritterschaft sind nicht fleischlich, sondern mächtig vor Gott, zu zerstören Befestigungen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirchenväter der vorkonstantinischen Zeit lehnten religiösen Zwang ausdrücklich ab: Tertullian schrieb, es gehöre nicht zur Religion, Religion zu erzwingen; Laktanz, die Religion müsse „nicht durch Töten, sondern durch Sterben" verteidigt werden. Athanasius, der selbst fünfmal von Kaisern verbannt wurde, warf den arianischen Machthabern vor, mit Zwang statt mit Überzeugung zu arbeiten. Die koptische Kirche kennt beide Seiten der Geschichte: Sie wuchs als Märtyrerkirche unter Diokletian, litt nach 451 unter byzantinischem Zwang und lebt seit dem 7. Jahrhundert als Minderheit. Gerade deshalb muss sie ehrlich sagen: Wo Christen später Zwang ausübten – auch Christen in Alexandria –, war es Unrecht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Ad Scapulam', ref: '2', year: 'ca. 212', quote: `Es gehört nicht zur Religion, Religion zu erzwingen; sie muss freiwillig, nicht mit Gewalt angenommen werden.`, original: `Sed nec religionis est cogere religionem, quae sponte suscipi debeat, non vi.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Tertullian ist Apologet, keine Lehrautorität der koptischen Kirche.' },
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Divinae Institutiones', ref: 'V,19', year: 'ca. 305–310', quote: `Die Religion ist zu verteidigen nicht durch Töten, sondern durch Sterben, nicht durch Grausamkeit, sondern durch Geduld, nicht durch Verbrechen, sondern durch Treue.`, original: `Defendenda enim religio est non occidendo, sed moriendo, non saevitia, sed patientia, non scelere, sed fide.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Geschichte der Arianer (Historia Arianorum)', ref: '67', year: 'ca. 357', quote: `Es sei Sache der wahren Frömmigkeit, nicht zu zwingen, sondern zu überzeugen; der Herr selbst habe niemanden gezwungen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung unterscheidet heute klar zwei Phasen. **Bis 312** wuchs das Christentum ohne Staatsmacht und unter zeitweiliger Verfolgung; der Religionssoziologe Rodney Stark schätzt ein Wachstum von etwa 40 % pro Jahrzehnt und rund sechs Millionen Christen um 300 (etwa ein Zehntel der Reichsbevölkerung). Als Gründe nennen Stark, Larry Hurtado und Kyle Harper soziale Netzwerke, Fürsorge in Seuchenzeiten, die Stellung der Frauen, die Ablehnung von Kindesaussetzung und Abtreibung sowie die Attraktivität der Botschaft. **Ab dem späten 4. Jahrhundert** kamen staatlicher Druck und Gewalt hinzu: Opferverbote, Tempelschließungen und -zerstörungen, im 6. Jahrhundert Zwangstaufen unter Justinian, im Mittelalter Zwangsbekehrungen (Sachsen, Baltikum, Spanien). Ramsay MacMullen betont diese Zwangselemente stark. Der Konsens: Gewalt hat die Christianisierung in späteren Phasen beschleunigt, erklärt aber nicht ihren Aufstieg.`,
    detail: `**Zeitzeugen der vorkonstantinischen Ausbreitung:**
- **Plinius der Jüngere** (um 112) an Trajan: Christen jeden Alters, Standes und beider Geschlechter, in Städten, Dörfern und auf dem Land.
- **Tertullian** (um 197): „Wir werden mehr, so oft wir von euch niedergemäht werden: Same ist das Blut der Christen."
- **Dionysius von Alexandrien** (Brief über die Seuche um 260, bei Eusebius KG VII,22): Christen pflegten Kranke ohne Rücksicht auf sich selbst, während die Heiden ihre Angehörigen verließen.
- **Kaiser Julian** (um 362) an den Oberpriester Arsakios: Die „gottlosen Galiläer" unterstützten nicht nur ihre eigenen Armen, sondern auch die der Heiden.

**Außerhalb des Römischen Reiches** verbreitete sich das Christentum ohne römische Staatsmacht: in Persien (wo es unter Schapur II. blutig verfolgt wurde), in Armenien, Äthiopien (Frumentius, von Athanasius geweiht), Indien und bis nach China (Stele von Xi'an, 781).

**Ehrlich: Die Zwangsphasen:** Gesetze gegen Opfer und Tempel im Codex Theodosianus (Buch 16,10); Zerstörung des Serapeums in Alexandria (391); Justinians Taufzwang für Heiden; Karls Sachsenkapitular (Todesstrafe für Taufverweigerung) – dagegen protestierte Alkuin, der Glaube sei eine Sache des freien Willens; Zwangstaufen von Juden im Westgotenreich, die das 4. Konzil von Toledo (633) zwar für die Zukunft verbot, die Getauften aber im Christentum festhielt; Spanien 1492/1502.`,
    sources: [
      { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity. A Sociologist Reconsiders History', year: '1996', quote: `Ein Wachstum von etwa 40 % pro Jahrzehnt erkläre den Anstieg von wenigen tausend Christen auf rund sechs Millionen um 300 – ohne Massenbekehrungen und ohne Staatsmacht, durch soziale Netzwerke und eine attraktivere Lebensweise.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe', ref: '10,96', year: 'ca. 112', quote: `Denn viele jeden Alters, jeden Standes und beiderlei Geschlechts werden in Gefahr gebracht und werden es noch werden. Nicht nur über die Städte, sondern auch über die Dörfer und das flache Land hat sich die Seuche dieses Aberglaubens verbreitet.`, original: `Multi enim omnis aetatis, omnis ordinis, utriusque sexus etiam vocantur in periculum et vocabuntur. Neque civitates tantum, sed vicos etiam atque agros superstitionis istius contagio pervagata est.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '50,13', year: 'ca. 197', quote: `Wir werden mehr, so oft wir von euch niedergemäht werden: Same ist das Blut der Christen.`, original: `Plures efficimur, quotiens metimur a vobis: semen est sanguis Christianorum.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'sonstiges', author: 'Kaiser Julian', work: 'Brief an Arsakios, Oberpriester von Galatien', year: 'ca. 362', quote: `Es ist eine Schande, dass … die gottlosen Galiläer nicht nur ihre eigenen Armen, sondern auch die unseren unterstützen, und alle sehen, dass es den Unseren an unserer Hilfe fehlt.`, original: `… the impious Galilaeans support not only their own poor but ours as well, all men see that our people lack aid from us.`, translation: 'W. C. Wright (Loeb), dt. eigene Übersetzung', status: 'verbatim', note: 'Zeugnis eines christenfeindlichen Kaisers.' },
      { kind: 'gegner', author: 'Ramsay MacMullen', work: 'Christianity and Paganism in the Fourth to Eighth Centuries', year: '1997', quote: `Die Christianisierung ab dem 4. Jahrhundert sei in erheblichem Maß durch Druck, Gesetze und Gewalt vorangetrieben worden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Catherine Nixey', work: 'The Darkening Age', year: '2017', quote: `Christen hätten die klassische Welt durch Zerstörung, Einschüchterung und Gewalt verdrängt.`, status: 'paraphrase', note: 'Von Fachhistorikern teils als einseitig kritisiert.' },
    ],
  },
  quickAnswer: `Die ersten 300 Jahre widerlegen das: Christen hatten keine Armee, keinen Staat und wurden immer wieder verfolgt – und trotzdem wuchsen sie auf rund ein Zehntel der Reichsbevölkerung, schätzt der Soziologe Rodney Stark. Schon um 112 berichtet der Statthalter Plinius von Christen in Städten und Dörfern. Sie überzeugten durch Fürsorge in Seuchen, durch ihre Gemeinschaft und durch Märtyrer, die starben statt zu töten. Ehrlich ist aber auch: Später haben christliche Herrscher Zwang angewandt – gegen Heiden, Sachsen, Juden und Muslime. Das war Unrecht und gegen Jesu Wort. Aber es erklärt nicht, wie das Christentum groß wurde.`,
  keyPoints: [
    `**Drei Jahrhunderte ohne Staat:** Wachstum unter Verfolgung bis 312 – Plinius (um 112), Tertullian (um 197), Diokletians Verfolgung (ab 303) richtete sich schon gegen eine große Kirche.`,
    `**Gründe des Wachstums:** Netzwerke, Seuchenfürsorge (Dionysius von Alexandrien), Würde der Frauen, Schutz der Kinder, Hoffnung – sogar Kaiser Julian bezeugt die christliche Armenfürsorge.`,
    `**Ausbreitung ohne Rom:** Persien, Armenien, Äthiopien, Indien, China – oft gegen die Staatsmacht.`,
    `**Ehrliche Schuld:** Tempelzerstörungen, Justinians Zwangstaufen, Karls Sachsenkriege, Zwangstaufen in Spanien – Unrecht, gegen Mt 26,52.`,
    `**Die Väter gegen Zwang:** Tertullian („nec religionis est cogere religionem"), Laktanz („non occidendo, sed moriendo"), Athanasius, Alkuin.`,
    `**Maßstab:** Man prüft eine Bewegung am Gründer und an den Anfängen – Jesus gründete keinen Staat und verbot das Schwert.`,
  ],
  voices: [
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark rechnet vor, dass ein stetiges Wachstum von etwa 40 Prozent pro Jahrzehnt – vergleichbar mit modernen Bewegungen – genügt, um von einigen tausend Christen um das Jahr 40 auf rund sechs Millionen um 300 zu kommen. Massenbekehrungen oder Staatsgewalt braucht diese Rechnung nicht. Entscheidend waren für ihn soziale Netzwerke, die höhere Überlebensrate in Seuchen durch gegenseitige Pflege, eine höhere Geburtenrate und die Attraktivität einer Gemeinschaft, die Frauen, Kindern und Armen Würde gab.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', quote: `Wachstumsmodell von ca. 40 % pro Jahrzehnt; Netzwerke, Seuchenfürsorge und Stellung der Frauen als Faktoren.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'dionysius-alexandrien',
      role: 'als Augenzeuge der Seuche in Alexandria',
      text: `Dionysius, Bischof von Alexandria in der Mitte des 3. Jahrhunderts, beschreibt in einem Osterbrief eine verheerende Seuche: Viele Christen hätten die Kranken gepflegt, ohne an die eigene Gefahr zu denken, und seien dabei selbst gestorben; die Heiden dagegen hätten ihre Kranken auf die Straße geworfen und die Toten unbestattet liegen gelassen. Dieser Bericht ist ein Schlüsseltext dafür, wie das Christentum ohne Zwang Menschen gewann – durch eine Liebe, die stärker war als die Todesangst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Dionysius von Alexandrien', work: 'Osterbrief (bei Eusebius, Kirchengeschichte)', ref: 'VII,22,7–10', year: 'ca. 260', quote: `Die meisten unserer Brüder schonten sich in übergroßer Liebe nicht, besuchten furchtlos die Kranken und pflegten sie; die Heiden dagegen stießen die Erkrankten von sich.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'laktanz',
      role: 'als Apologet der Religionsfreiheit',
      text: `Laktanz, Rhetoriklehrer am Hof Diokletians, erlebte die Große Verfolgung mit und wurde später Erzieher von Konstantins Sohn. In seinen „Göttlichen Unterweisungen" entwickelt er eines der frühesten Plädoyers für Religionsfreiheit: Religion sei eine Sache des freien Willens; wer sie mit Folter erzwinge, schände sie. Die Christen sollten ihren Glauben nicht durch Töten, sondern durch Sterben verteidigen. Dass ausgerechnet ein Christ unter Verfolgung so schrieb – und dass dieselbe Kirche später manchmal anders handelte –, gehört zur ehrlichen Bilanz.`,
      sources: [
        { kind: 'kirchenvater', author: 'Laktanz', work: 'Divinae Institutiones', ref: 'V,19–20', year: 'ca. 305–310', quote: `Religion lasse sich nicht erzwingen; sie müsse durch Worte, nicht durch Schläge, durch Überzeugung, nicht durch Gewalt verteidigt werden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'lamin-sanneh',
      role: 'als Historiker der Weltmission',
      text: `Sanneh, selbst in Gambia muslimisch aufgewachsen und später Professor in Yale, hat gezeigt, dass das Christentum in Afrika vor allem nach dem Ende der Kolonialzeit und durch afrikanische Christen selbst wuchs. Entscheidend war die Übersetzung der Bibel in die Volkssprachen: Sie machte das Evangelium zum Eigentum der Völker und stärkte ihre Sprachen und Kulturen. Für Sanneh widerlegt das die These, das Christentum habe sich nur mit fremder Macht verbreitet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Whose Religion Is Christianity? The Gospel beyond the West', year: '2003', quote: `Das Wachstum des Christentums in Afrika nach der Kolonialzeit sei vor allem von Afrikanern getragen worden.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'konstantin-macht',
      objection: `Ohne Konstantin wäre das Christentum eine Randsekte geblieben. Erst die Staatsmacht machte es groß.`,
      objectionBy: 'Charles Freeman',
      answer: `Konstantin fand eine Kirche vor, die schon rund ein Zehntel des Reiches umfasste und sich nicht hatte ausrotten lassen. Diokletian verfolgte sie ab 303 gerade deshalb, weil sie so groß geworden war, und Galerius gab 311 sterbend auf. Das Christentum wuchs drei Jahrhunderte lang gegen den Staat, nicht durch ihn.`,
      followUps: [
        {
          id: 'stark-zahlen-geraten',
          objection: `Starks Zahlen sind Hochrechnungen und Schätzungen. Wir wissen gar nicht, wie viele Christen es um 300 gab.`,
          objectionBy: 'Ramsay MacMullen',
          answer: `Richtig, es sind Schätzungen, und andere Forscher kommen auf etwas andere Werte. Aber die unabhängigen Hinweise zeigen in dieselbe Richtung: Plinius findet um 112 Christen in Stadt und Land, Tertullian spricht um 197 von Christen überall, Diokletian hält eine reichsweite Verfolgung für nötig, und Galerius erkennt 311 ihr Scheitern an. Eine winzige Sekte verfolgt man nicht reichsweit.`,
          followUps: [
            {
              id: 'nach-380-zwang',
              objection: `Spätestens ab Theodosius wurde das Heidentum verboten. Erst der Zwang machte das Christentum zur Mehrheit.`,
              objectionBy: 'Catherine Nixey',
              answer: `Ab dem späten 4. Jahrhundert gab es tatsächlich Zwang – Opferverbote, Tempelschließungen, Zerstörungen –, und das war Unrecht. Aber viele Historiker schätzen, dass Christen schon um die Mitte des 4. Jahrhunderts einen großen Teil der Bevölkerung stellten. Der Zwang beschleunigte das Ende des Heidentums; den Aufstieg des Christentums, das schon vorher zur stärksten religiösen Kraft geworden war, erklärt er nicht.`,
              followUps: [
                {
                  id: 'also-gewalt-zugegeben',
                  objection: `Du gibst also zu, dass das Christentum Gewalt angewandt hat.`,
                  objectionBy: 'Catherine Nixey',
                  answer: `Ja: Christen haben Gewalt angewandt – auch in Alexandria, wo 391 das Serapeum zerstört wurde. Das widerspricht dem Wort Jesu und den frühen Vätern, die Zwang ausdrücklich ablehnten. Aber die Frage war, ob sich das Christentum *nur* durch Gewalt verbreitete. Die Antwort ist nein: Es wurde groß, als es selbst die Gewalt erlitt.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sachsen-spanien',
      objection: `Karl der Große ließ die Sachsen mit dem Schwert taufen, Spanien stellte Juden und Muslime vor die Wahl: Taufe oder Vertreibung. Das ist christliche Mission.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Das sind reale Verbrechen, und ich verteidige sie nicht. Aber schon damals protestierten Christen: Alkuin, Karls eigener Berater, schrieb ihm, der Glaube sei eine Sache des freien Willens und könne nicht erzwungen werden. Und es waren Herrscher, die gegen die Lehre handelten, die sie zu vertreten vorgaben.`,
      followUps: [
        {
          id: 'trotzdem-christentum',
          objection: `Es waren christliche Herrscher, mit dem Segen von Bischöfen. Also ist es Christentum.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Es war Christentum im Sinne von „Christen haben es getan" – ja. Ob es dem Christentum entspricht, misst man an seinem Gründer und an seinen Quellen. Jesus verbot das Schwert (Mt 26,52), die Kirche der ersten Jahrhunderte verwarf Zwang, und das 4. Konzil von Toledo verbot 633 ausdrücklich Zwangsbekehrungen – auch wenn es inkonsequent blieb. Wer sich gegen den eigenen Gründer stellt, wird an ihm gemessen.`,
        },
        {
          id: 'islam-friedlicher',
          objection: `Der Islam hat sich viel friedlicher verbreitet. Es gibt keinen Zwang im Glauben (2:256). Christen haben dagegen zwangsgetauft.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Ich will keinen Wettbewerb der Schuld führen. Ehrlich ist: In vielen islamisch eroberten Gebieten, auch in Ägypten, gab es in der Frühzeit keine Massenzwangsbekehrung – die Kopten blieben noch Jahrhunderte die Mehrheit, und der Grundsatz von 2:256 wurde oft geachtet. Ebenso ehrlich ist: Die Ausbreitung des islamischen Herrschaftsgebiets selbst geschah durch militärische Eroberung, und es gab später auch Zwangsbekehrungen, etwa unter dem Kalifen al-Hakim. Der Unterschied liegt am Anfang: Jesus gründete keinen Staat und führte keine Kriege; die Kirche wuchs drei Jahrhunderte lang ohne jede Waffe.`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:256', quote: `Es gibt keinen Zwang im Glauben.`, original: `lā ikrāha fī d-dīn`, translation: 'Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/2/256' },
          ],
          followUps: [
            {
              id: 'eroberung-nicht-bekehrung',
              objection: `Eroberung ist nicht Bekehrung. Die Menschen wurden später freiwillig Muslime.`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Da hast du in einem wichtigen Punkt recht: Herrschaft und Bekehrung sind zu unterscheiden, und viele Menschen wurden aus Überzeugung Muslime. Aber Freiwilligkeit ist relativ, wenn die Religionszugehörigkeit über Steuerlast, Rechtsstellung und Aufstiegschancen entscheidet – darüber sprechen wir beim Thema Dhimma. Und mit demselben Maß gilt für Christen: Wer unter christlichen Herrschern aus Vorteil getauft wurde, war auch nicht völlig frei.`,
            },
          ],
        },
      ],
    },
    {
      id: 'wunder-druck-macmullen',
      objection: `Auch vor Konstantin bekehrten sich die Menschen nicht aus Einsicht, sondern wegen Wunderberichten, Exorzismen und Höllenangst. Mit Wahrheit hatte das nichts zu tun.`,
      objectionBy: 'Ramsay MacMullen',
      answer: `Mag sein, dass Wunder und Exorzismen Menschen beeindruckten – aber das ist keine Gewalt, und darum ging es. Die frühen Quellen nennen zudem andere Gründe: die Fürsorge für Kranke und Arme, die Treue der Märtyrer und eine Gemeinschaft, in der Sklaven und Freie gemeinsam aßen. Selbst ein Gegner wie Kaiser Julian beneidete die Christen um ihre Nächstenliebe.`,
      followUps: [
        {
          id: 'soziale-vorteile',
          objection: `Dann war es eben die soziale Absicherung. Die Leute kamen wegen der Suppenküche, nicht wegen Jesus.`,
          objectionBy: 'Skeptischer Kritiker',
          answer: `Dass Menschen durch gelebte Liebe angezogen wurden, spricht für das Christentum, nicht dagegen – Jesus sagte, an der Liebe werde man seine Jünger erkennen (Joh 13,35). Und wer Christ wurde, riskierte vor 313 Ächtung, Vermögen und Leben. Eine Suppenküche, für die man den Löwen vorgeworfen werden kann, ist ein schlechtes Lockmittel.`,
        },
      ],
    },
    {
      id: 'kolonialismus',
      objection: `In Afrika, Asien und Amerika kam das Christentum mit Kanonen und Kolonialherren.`,
      objectionBy: 'Kritiker des Kolonialismus',
      answer: `In Amerika und anderswo war Mission tatsächlich oft mit Eroberung und Unrecht verbunden; Las Casas und andere Christen haben das schon damals angeprangert. Aber das stärkste Wachstum des Christentums in Afrika kam nach dem Ende der Kolonialzeit, getragen von Afrikanern selbst. Und die ältesten Kirchen Afrikas – die koptische, die äthiopische – sind über 1600 Jahre älter als jeder europäische Kolonialismus.`,
      followUps: [
        {
          id: 'ostkirchen-ohne-macht',
          objection: `Das sind Ausnahmen. Im Großen und Ganzen folgte das Kreuz dem Schwert.`,
          objectionBy: 'Kritiker des Kolonialismus',
          answer: `Die „Ausnahmen" sind riesig: Die Kirche des Ostens verbreitete sich von Persien bis China, oft gegen die Staatsmacht – unter Schapur II. starben dort Tausende Märtyrer. Das Christentum kam nach Äthiopien durch Frumentius, den Athanasius von Alexandria zum Bischof weihte, nicht durch eine Armee. Und die Kopten bewahrten ihren Glauben vierzehn Jahrhunderte lang als Minderheit ohne Staat.`,
        },
      ],
    },
    {
      id: 'verfolgung-uebertrieben',
      objection: `Die Christenverfolgung ist ein Mythos. Es gab nur kurze, lokale Episoden – Christen haben sich als Opfer stilisiert.`,
      objectionBy: 'Candida Moss',
      answer: `Richtig ist, dass die Verfolgungen nicht ununterbrochen und reichsweit waren; die erste reichsweite kam erst unter Decius 250. Aber Christsein war bis 311 rechtlich gefährlich: Plinius ließ um 112 Christen hinrichten, nur weil sie Christen waren und sich weigerten zu opfern. Decius und Diokletian verfolgten systematisch. Eine Religion, deren Bekenntnis lebensgefährlich ist, wächst nicht durch staatliche Gunst.`,
      followUps: [
        {
          id: 'decius-libelli',
          objection: `Unter Decius ging es um ein allgemeines Opfergebot, nicht um Christen speziell.`,
          objectionBy: 'Candida Moss',
          answer: `Das Edikt verlangte von allen ein Opfer – aber gerade die Christen konnten es nicht leisten, ohne ihren Glauben zu verleugnen. Aus Ägypten sind sogar die Opferbescheinigungen (libelli) auf Papyrus erhalten. Dionysius von Alexandrien beschreibt die Märtyrer seiner Stadt aus dieser Zeit. Ob speziell gemeint oder nicht: Die Christen trugen die Folgen.`,
        },
      ],
    },
    {
      id: 'heiden-verfolgt-sobald',
      objection: `Kaum waren sie an der Macht, haben die Christen die Heiden verfolgt. Das zeigt ihren wahren Charakter.`,
      objectionBy: 'Catherine Nixey',
      answer: `Es dauerte Jahrzehnte, und das Bild ist gemischt. Das Mailänder Abkommen von 313 gewährte ausdrücklich allen Religionsfreiheit; Konstantin verbot das Heidentum nicht. Später kamen Zwangsmaßnahmen, die ich als Unrecht benenne. Aber „ihr wahrer Charakter" zeigt sich eher bei den Christen, die drei Jahrhunderte lang verfolgt wurden, ohne zurückzuschlagen.`,
      followUps: [
        {
          id: 'mailand-propaganda',
          objection: `Das Mailänder Abkommen war Taktik. Bald darauf begannen die Privilegien für Christen und die Benachteiligung der Heiden.`,
          objectionBy: 'Charles Freeman',
          answer: `Privilegien für die Kirche gab es, ja, und die Verbindung von Thron und Altar hat der Kirche auch geschadet. Aber Privilegien sind keine Zwangsbekehrung. Wer behauptet, das Christentum habe sich „nur" durch Gewalt verbreitet, muss die drei Jahrhunderte davor und die Ausbreitung außerhalb des Reiches erklären – und genau das gelingt nicht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Mit welcher Armee hat sich das Christentum zwischen 30 und 312 ausgebreitet?`,
    `Warum verfolgte Diokletian 303 eine angeblich unbedeutende Sekte reichsweit?`,
    `Wie erklärst du die Ausbreitung in Persien, Äthiopien und China, wo es keine christliche Staatsmacht gab?`,
    `An wem misst du eine Religion – an ihrem Gründer oder an den schlimmsten Taten späterer Anhänger?`,
  ],
  avoid: [
    `Bestreiten, dass Christen Tempel zerstört und Menschen zwangsgetauft haben.`,
    `Die Kreuzzüge oder die spanische Reconquista als reine Verteidigung schönreden.`,
    `Den Islam pauschal als „Religion des Schwertes" hinstellen – das ist unfair und historisch ungenau.`,
  ],
  concessions: [
    `Ab dem späten 4. Jahrhundert haben christliche Kaiser das Heidentum mit Gesetzen und Gewalt unterdrückt; auch in Alexandria wurden Tempel zerstört.`,
    `Im Mittelalter und in der frühen Neuzeit gab es Zwangsbekehrungen (Sachsen, Baltikum, Spanien) und Mission im Gefolge von Eroberungen.`,
    `Augustinus rechtfertigte gegen die Donatisten staatlichen Zwang – eine folgenreiche Fehlentwicklung im Westen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Destroyer of the Gods. Early Christian Distinctiveness in the Roman World', year: '2016', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kyle Harper', work: 'The Fate of Rome', year: '2017', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ramsay MacMullen', work: 'Christianizing the Roman Empire', year: '1984', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ausbreitung', 'Rodney Stark', 'Verfolgung', 'Zwangsbekehrung', 'Konstantin', 'Religionsfreiheit'],
  related: ['kirchengeschichte-mythen/konstantin-verfaelschte', 'religion-gewalt/kreuzzuege', 'christentum-gesellschaft/christentum-kolonialismus', 'koptische-kirche/maertyrerkult', 'koptische-kirche/dhimmi-gerecht'],
};

export default claim;
