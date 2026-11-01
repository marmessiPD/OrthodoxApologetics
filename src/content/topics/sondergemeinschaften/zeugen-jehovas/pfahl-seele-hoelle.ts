import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'pfahl-seele-hoelle',
  title: `„Jesus starb an einem Pfahl; die Seele ist sterblich; es gibt keine Hölle."`,
  proponents: [
    { name: 'Wachtturm-Gesellschaft', role: 'Lehrorgan der Zeugen Jehovas', work: 'Einsichten über die Heilige Schrift, Art. „Marterpfahl", „Seele", „Hölle"; NWÜ: „Marterpfahl" für stauros' },
    { name: 'Joseph F. Rutherford', role: 'Präsident der Wachtturm-Gesellschaft 1917–1942', work: 'Einführung der Pfahl-Lehre in den 1930er-Jahren (u. a. Buch „Riches", 1936)' },
    { name: 'Edward Fudge', role: 'Evangelikaler Theologe (Konditionalist, kein Zeuge Jehovas)', work: 'The Fire That Consumes (1982) – Vernichtungslehre' },
  ],
  steelman: `Das griechische *stauros* bedeutet im klassischen Griechisch einen aufrechten Pfahl; daneben nennt das NT das Hinrichtungswerkzeug *xylon* – „Holz, Baum" (Apg 5,30; Gal 3,13; 1 Petr 2,24). Das Kreuz als Symbol ist älter als das Christentum (ägyptisches Anch, Tau des Tammuz) und wurde erst unter Konstantin populär. Zur Seele: Gen 2,7 sagt nicht, der Mensch **habe** eine Seele, sondern er **wurde** eine lebende Seele; auch Tiere heißen *nefesch* (Gen 1,20.24). „Die Seele, die sündigt, die soll sterben" (Hes 18,4). „Die Toten wissen gar nichts" (Pred 9,5). Die Unsterblichkeit der Seele stammt von Platon, nicht aus der Bibel. Zur Hölle: *Scheol* und *Hades* bedeuten schlicht „Grab". Gehenna war eine Müllhalde vor Jerusalem, wo Abfall verbrannt wurde – ein Bild endgültiger Vernichtung, nicht ewiger Qual. Ein Gott der Liebe würde Menschen nicht ewig foltern; Jer 7,31 sagt, Menschen zu verbrennen sei Gott „nie in den Sinn gekommen". „Der Lohn der Sünde ist der Tod" (Röm 6,23) – nicht ewiges Leben in Qual. Selbst evangelikale Theologen wie John Stott neigten zur Vernichtungslehre.`,
  biblical: {
    summary: `**Kreuz:** *Stauros* wird im römischen Kontext für Kreuzigungen mit Querbalken (*patibulum*) gebraucht. Thomas spricht von den **Nägel**malen in Jesu Händen (Plural, Joh 20,25) – bei einem einfachen Pfahl mit übereinander genagelten Händen wäre ein Nagel zu erwarten; die Inschrift war „über seinem **Haupt**" angebracht (Mt 27,37), nicht über seinen Händen. **Seele:** *Nefesch* hat ein breites Bedeutungsspektrum; das NT zeigt klar ein bewusstes Weiterleben nach dem Tod: „Fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht mögen töten" (Mt 10,28); „Heute wirst du mit mir im Paradies sein" (Lk 23,43); Paulus will „abscheiden und bei Christus sein, was viel besser wäre" (Phil 1,23); die Seelen der Märtyrer rufen unter dem Altar (Offb 6,9–10). **Hölle:** Jesus stellt „ewige Strafe" und „ewiges Leben" mit demselben Adjektiv nebeneinander (Mt 25,46).`,
    detail: `**Zum Kreuz ehrlich:** *Stauros* kann tatsächlich einen Pfahl bezeichnen, und die genaue Form des Kreuzes Jesu (lateinisches Kreuz oder T-Form) beschreibt das NT nicht. Aber Rom kreuzigte gewöhnlich mit einem Querbalken: Der römische Komödiendichter Plautus erwähnt, dass der Verurteilte den *patibulum* durch die Stadt trägt und dann ans Kreuz geschlagen wird. Jesus sagt zu Petrus, er werde „seine Hände ausstrecken" (Joh 21,18–19) – ein frühes Bild der Kreuzigung. Christliche Autoren vor Konstantin beschreiben die Kreuzesform ausdrücklich: Barnabasbrief 9,8 (der Buchstabe T), Justin (Mastbaum mit Rahe, Pflug, ausgebreitete Arme des Menschen), Irenäus (ein Kreuz mit fünf Enden). Das Alexamenos-Graffito vom Palatin (um 200) verspottet einen Christen, der einen Gekreuzigten an einem T-förmigen Kreuz anbetet.

**Zur Seele:** Pred 9,5 beschreibt den Tod aus der Perspektive „unter der Sonne" (9,3.6) – was der Mensch auf Erden vom Toten sieht; derselbe Prediger sagt: „Der Geist kehrt zu Gott zurück, der ihn gegeben hat" (12,7). Hes 18,4 spricht über Verantwortung vor Gott, nicht über Anthropologie. Jesus argumentiert gegen die Sadduzäer: Gott ist „nicht ein Gott der Toten, sondern der Lebendigen; denn sie leben ihm alle" (Lk 20,38). Mose und Elia erscheinen bei der Verklärung (Mt 17,3); Hebr 12,23 nennt „die Geister der vollendeten Gerechten".

**Zur Hölle:** *Kolasis* heißt in der Koine „Strafe, Pein" (vgl. 1 Joh 4,18; 4 Makk 8,9). Offb 20,10 spricht von Qual „Tag und Nacht von Ewigkeit zu Ewigkeit"; Mk 9,48 zitiert Jes 66,24: „wo ihr Wurm nicht stirbt und ihr Feuer nicht verlöscht". Die These, Gehenna sei eine brennende Müllhalde gewesen, ist erst bei dem jüdischen Ausleger David Kimchi um 1200 belegt; für die Zeit Jesu gibt es dafür keine archäologischen oder literarischen Belege. Gehenna war das Tal der Kinderopfer (Jer 7,31) und wurde zum Bild des Gerichts.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,25', quote: `Es sei denn, daß ich in seinen Händen sehe die Nägelmale und lege meinen Finger in die Nägelmale und lege meine Hand in seine Seite, will ich's nicht glauben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '27,37', quote: `Und oben zu seinen Häupten hefteten sie die Ursache seines Todes beschrieben, nämlich: Dies ist Jesus, der Juden König.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht mögen töten; fürchtet euch aber vielmehr vor dem, der Leib und Seele verderben mag in der Hölle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '23,43', quote: `Und Jesus sprach zu ihm: Wahrlich ich sage dir: Heute wirst du mit mir im Paradies sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '1,23', quote: `Denn es liegt mir beides hart an: ich habe Lust abzuscheiden und bei Christo zu sein, was auch viel besser wäre.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '5,8', quote: `Wir sind aber getrost und haben vielmehr Lust, außer dem Leibe zu wallen und daheim zu sein bei dem HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '6,9–10', quote: `… sah ich unter dem Altar die Seelen derer, die erwürgt waren um des Wortes Gottes willen … und sie schrieen mit großer Stimme und sprachen: HERR, du Heiliger und Wahrhaftiger, wie lange richtest du und rächst nicht unser Blut …?`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '25,46', quote: `Und sie werden in die ewige Pein gehen, aber die Gerechten in das ewige Leben.`, original: `κόλασιν αἰώνιον … ζωὴν αἰώνιον`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Athanasius erklärt in *De Incarnatione* 25, warum der Herr gerade am Kreuz starb: Nur am Kreuz stirbt man mit **ausgebreiteten Händen** – mit der einen zog er das alte Volk, mit der anderen die Heiden zu sich. Die koptische Kirche feiert das Fest des Kreuzes zweimal im Jahr, viele Kopten tragen ein Kreuz als Tätowierung am Handgelenk – oft gegen hohen gesellschaftlichen Preis. In jeder Liturgie betet die Kirche für die Entschlafenen: „Lass ihre Seelen ruhen im Schoß unserer heiligen Väter Abraham, Isaak und Jakob" – ein lebendiges Zeugnis für das bewusste Weiterleben der Seele. Die koptische Kirche lehrt die ewige Strafe als Folge der endgültigen Abkehr von Gott, ebenso das Gericht und das ewige Leben; die Allversöhnung des Origenes hat sie nie angenommen.`,
    detail: `Athanasius berichtet in der Vita Antonii, wie Antonius die Seele des Mönchs Amun von Engeln zum Himmel getragen sah – für die Wüstenväter war das Weiterleben der Seele selbstverständlich. Die Kirche unterscheidet zwischen der Verehrung des Kreuzes als Zeichen des Sieges Christi und der Anbetung, die Gott allein gebührt. Zu den Entschlafenen: Die Kirche kennt kein Fegefeuer, betet aber für die Verstorbenen, weil sie in Christus leben (Lk 20,38).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '25', quote: `Nur am Kreuz stirbt man mit ausgebreiteten Händen; so zog der Herr mit der einen Hand das alte Volk, mit der anderen die Heiden zu sich und vereinte beide in sich.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Basilius-Liturgie, Gedächtnis der Entschlafenen', quote: `Bitte, den Seelen der Entschlafenen Ruhe im Schoß Abrahams, Isaaks und Jakobs zu schenken.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '60', quote: `Antonius sieht die Seele des Mönchs Amun in den Himmel getragen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Thomas spricht von den Nägel**malen** in Jesu Händen und die Inschrift hing über seinem **Kopf** – das passt zum Kreuz mit Querbalken, das Rom benutzte und das Christen schon vor Konstantin beschrieben. Jesus sagt, Menschen können den Leib töten, aber nicht die Seele (Mt 10,28), und verspricht dem Schächer: „**Heute** wirst du mit mir im Paradies sein." Und er stellt „ewige Strafe" und „ewiges Leben" mit demselben Wort nebeneinander (Mt 25,46).`,
  keyPoints: [
    `**Nägel im Plural, Inschrift über dem Haupt** (Joh 20,25; Mt 27,37) – Hinweise auf Querbalken und ausgebreitete Arme.`,
    `**Vorkonstantinische Zeugen** der Kreuzesform: Barnabasbrief, Justin, Irenäus, Alexamenos-Graffito (um 200).`,
    `**Weiterleben der Seele:** Mt 10,28; Lk 23,43; Phil 1,23; 2 Kor 5,8; Offb 6,9–10; Lk 20,38.`,
    `**Pred 9,5** beschreibt den Tod „unter der Sonne"; 12,7: der Geist kehrt zu Gott zurück.`,
    `**Mt 25,46:** dasselbe *aiōnios* für Strafe und Leben; *kolasis* heißt Strafe.`,
    `**Gehenna als Müllhalde** ist eine späte Legende (Kimchi, um 1200).`,
  ],
  voices: [
    {
      person: 'athanasius',
      role: 'als Lehrer der Menschwerdung',
      text: `Athanasius beantwortet in *De Incarnatione* die Frage, warum der Erlöser gerade den Kreuzestod wählte: Er starb öffentlich, damit niemand seine Auferstehung bezweifeln könne, und er starb mit ausgebreiteten Händen, um Juden und Heiden zu umfangen. Er erhöht wurde, um die Luft von den Mächten zu reinigen und uns den Weg zum Himmel zu öffnen. Für den Vater der koptischen Theologie war die Form des Kreuzes selbst eine Predigt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '24–25', quote: `Begründung des Kreuzestodes: öffentlich, mit ausgebreiteten Händen, erhöht in der Luft.`, status: 'paraphrase' }],
    },
    {
      person: 'justin',
      role: 'als Apologet des 2. Jahrhunderts',
      text: `Justin schreibt um 155 an den Kaiser, das Zeichen des Kreuzes sei überall in der Welt eingeprägt: im Mast mit der Rahe, im Pflug, im aufrecht stehenden Menschen mit ausgebreiteten Armen. Er beschreibt also eindeutig eine Form mit Querbalken – fast 200 Jahre vor Konstantin. Im Dialog mit Tryphon deutet er die Hörner des Einhorns (Dtn 33,17) auf die Balken des Kreuzes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '55', quote: `Die Gestalt des Kreuzes findet sich im Mast des Schiffes, im Pflug und in der menschlichen Gestalt mit ausgebreiteten Armen.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit Tryphon', ref: '91', quote: `Die Hörner des Einhorns als Bild der Kreuzesbalken.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge des 2. Jahrhunderts',
      text: `Irenäus beschreibt um 180 das Kreuz als Gestalt mit fünf Enden: zwei in der Länge, zwei in der Breite und eines in der Mitte, auf dem der Gekreuzigte ruht. Das ist eine detaillierte Beschreibung eines Kreuzes mit Querbalken und Sitzpflock – aus einer Zeit, in der Christen verfolgt wurden und keinerlei staatliche Symbole übernahmen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'II,24,4', quote: `Das Kreuz hat fünf Enden: zwei der Länge, zwei der Breite nach und eines in der Mitte.`, status: 'paraphrase' }],
    },
    {
      person: 'nt-wright',
      role: 'als Neutestamentler (Auferstehung und Zwischenzustand)',
      text: `Wright unterscheidet zwischen dem Leben unmittelbar nach dem Tod – einem bewussten Sein bei Christus, das er „Leben nach dem Tod" nennt – und der künftigen leiblichen Auferstehung, dem „Leben nach dem Leben nach dem Tod". Er zeigt, dass das Judentum der Zeit Jesu und Paulus beides kannten: einen Zwischenzustand der Gerechten in Gottes Hand (Weish 3,1) und die Auferstehung am Ende. Die Bibel ist weder platonisch noch materialistisch.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'Surprised by Hope (dt. Von Hoffnung überrascht)', year: '2008', quote: `„Leben nach dem Tod" und „Leben nach dem Leben nach dem Tod".`, status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über Hölle und Freiheit',
      text: `Lewis versteht die Hölle nicht als Folterkammer eines grausamen Gottes, sondern als endgültig respektierte Entscheidung des Geschöpfs gegen Gott. Gott zwingt niemanden in seine Gemeinschaft; wer sie bis zuletzt verweigert, bekommt, was er gewählt hat. Lewis' berühmte Formulierung: Die Verdammten seien Rebellen bis zuletzt, und die Türen der Hölle seien „von innen verschlossen".`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (dt. Über den Schmerz)', year: '1940', ref: 'Kap. 8', quote: `Die Türen der Hölle sind von innen verschlossen.`, original: `the doors of hell are locked on the inside`, status: 'verbatim' }],
    },
  ],
  dialog: [
    {
      id: 'stauros-pfahl',
      objection: `*Stauros* heißt im Griechischen einfach „aufrechter Pfahl". Das Kreuz ist eine spätere Erfindung.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `*Stauros* kann einen Pfahl bezeichnen – aber zur Zeit Jesu war es das Wort für die römische Kreuzigung, und Rom benutzte meist einen Querbalken, den der Verurteilte trug. Thomas spricht von Nägelmalen (Plural) in Jesu Händen, die Inschrift hing über seinem Kopf, und Christen beschrieben die Kreuzesform schon im 2. Jahrhundert. Übrigens: Auch Wachtturm-Veröffentlichungen zeigten bis etwa 1931 ein Kreuz-und-Krone-Symbol.`,
      sources: [{ kind: 'gegner', work: 'The Watch Tower (Titelblatt)', ref: 'bis Anfang der 1930er-Jahre', quote: `Das Titelblatt trug ein Kreuz-und-Krone-Emblem; die Pfahl-Lehre wurde unter Rutherford in den 1930er-Jahren eingeführt.`, status: 'unverified', note: 'Genaues Datum der Entfernung (meist mit 1931 angegeben) vor Verwendung prüfen.' }],
      followUps: [
        {
          id: 'kreuz-heidnisch',
          objection: `Das Kreuz ist ein heidnisches Symbol – das ägyptische Anch, das Tau des Tammuz. Konstantin hat es in die Kirche gebracht.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Dass eine Form älter ist, sagt nichts über ihre Bedeutung – auch Türme und Kreise sind älter als das Christentum. Christen bezeugten die Kreuzesform lange vor Konstantin (Justin, Irenäus, Tertullian, Minucius Felix). Ehrlich gesagt haben ägyptische Christen das Anch-Zeichen sogar bewusst übernommen und ihm einen neuen Sinn gegeben: Christus, das wahre Leben. Symbole werden durch Christus getauft.`,
          followUps: [
            {
              id: 'mordwaffe-verehren',
              objection: `Würdest du die Pistole verehren, mit der dein Vater erschossen wurde? Genauso ist es mit dem Kreuz.`,
              objectionBy: 'Zeugen Jehovas (verbreitetes Gesprächsargument)',
              answer: `Das Kreuz ist nicht einfach die Waffe eines Mörders, sondern der Ort, an dem Christus den Tod besiegt hat. Paulus sagt: „Es sei aber ferne von mir, mich zu rühmen, denn allein von dem Kreuz unsers HERRN Jesu Christi" (Gal 6,14); „das Wort vom Kreuz ist … uns, die wir selig werden, eine Gotteskraft" (1 Kor 1,18). Wir beten nicht Holz an, sondern ehren das Zeichen seines Sieges – wie Paulus es tat.`,
              sources: [{ kind: 'bibel', work: 'Galater', ref: '6,14', quote: `Es sei aber ferne von mir, mich zu rühmen, denn allein von dem Kreuz unsers HERRN Jesu Christi, durch welchen mir die Welt gekreuzigt ist und ich der Welt.`, translation: 'Luther 1912', status: 'verbatim' }],
              questionsBack: [`Warum rühmt sich Paulus des Kreuzes, wenn es nur eine Mordwaffe ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'seele-stirbt',
      objection: `Die Seele ist der ganze Mensch. Auch Tiere sind „Seelen", und „die Seele, die sündigt, die soll sterben" (Hes 18,4). Unsterbliche Seele ist Platon, nicht Bibel.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `*Nefesch* hat viele Bedeutungen – Leben, Person, Begierde. Aber das Neue Testament sagt eindeutig: Menschen können den Leib töten, aber **nicht die Seele** (Mt 10,28). Paulus will lieber „abscheiden und bei Christus sein" (Phil 1,23), und die Seelen der Märtyrer rufen bewusst zu Gott (Offb 6,9–10). Das ist keine griechische Philosophie, sondern Jesus und die Apostel.`,
      followUps: [
        {
          id: 'lk-23-43-komma',
          objection: `In Lk 23,43 steht das Komma falsch. Richtig ist: „Wahrlich, ich sage dir heute: Du wirst mit mir im Paradies sein."`,
          objectionBy: 'Neue-Welt-Übersetzung',
          answer: `Die alten Handschriften haben keine Kommas – das stimmt. Aber Jesus benutzt die Formel „Wahrlich, ich sage dir/euch" in den Evangelien rund 70-mal, und **nie** mit einem angehängten „heute". Lukas betont dagegen das „Heute" des Heils (2,11; 4,21; 19,9). Und „ich sage dir heute" wäre eine völlig überflüssige Angabe – wann sonst sollte er es sagen?`,
          followUps: [
            {
              id: 'drei-tage-im-grab',
              objection: `Jesus war an jenem Tag doch gar nicht im Paradies – er lag drei Tage im Grab und fuhr erst danach auf.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Sein Leib lag im Grab – seine Seele aber war im Totenreich bzw. Paradies, wie 1 Petr 3,18–19 andeutet: getötet im Fleisch, lebendig gemacht im Geist, predigte er den Geistern im Gefängnis. Die koptische Liturgie bekennt, dass Christus in den Hades hinabstieg und die Gerechten befreite. Die Himmelfahrt nach 40 Tagen betrifft den auferstandenen Leib.`,
            },
          ],
        },
        {
          id: 'pred-9-5',
          objection: `Pred 9,5: „Die Toten wissen gar nichts." Deutlicher geht es nicht.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Der Prediger beschreibt, was „unter der Sonne" geschieht (9,3.6) – aus irdischer Sicht hat der Tote keinen Anteil mehr an dem, was hier passiert. Derselbe Prediger sagt am Ende: „Der Geist kehrt wieder zu Gott, der ihn gegeben hat" (12,7). Und das Neue Testament bringt volles Licht: „Er ist nicht ein Gott der Toten, sondern der Lebendigen; denn sie leben ihm alle" (Lk 20,38).`,
          followUps: [
            {
              id: 'tod-als-schlaf',
              objection: `Die Bibel nennt den Tod „Schlaf" (Joh 11,11; 1 Thess 4,13). Im Schlaf ist man bewusstlos.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `„Schlaf" ist ein Bild für den Leib, der wie schlafend daliegt und auferweckt wird – und für die Vorläufigkeit des Todes. Aber Paulus nennt das Sterben „Gewinn" und „viel besser" (Phil 1,21.23). Wäre Sterben bewusstloses Nichtsein, wäre es nicht „viel besser" als ein Leben im Dienst Christi – es wäre schlicht nichts.`,
              questionsBack: [`Warum sollte bewusstloses Nichtsein für Paulus „viel besser" sein, als weiter für Christus zu wirken?`],
            },
          ],
        },
      ],
    },
    {
      id: 'hoelle-ungerecht',
      objection: `Ein Gott der Liebe quält niemanden ewig. Gehenna war die Müllhalde Jerusalems – die Strafe ist Vernichtung, nicht Folter.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Die Müllhalden-These ist erst um 1200 bei dem Ausleger David Kimchi belegt; für die Zeit Jesu gibt es dafür keinen Beleg. Jesus sagt: „Sie werden in die ewige Pein gehen, aber die Gerechten in das ewige Leben" (Mt 25,46) – dasselbe Wort *aiōnios* für beides. Wenn das Leben endlos bewusst ist, ist es die Strafe auch.`,
      followUps: [
        {
          id: 'kolasis-abschneiden',
          objection: `*Kolasis* heißt ursprünglich „Beschneiden von Bäumen". Darum übersetzt die NWÜ richtig: „ewige Abschneidung".`,
          objectionBy: 'Neue-Welt-Übersetzung',
          answer: `Die Etymologie eines Wortes bestimmt nicht seine Bedeutung im Gebrauch – „Gift" heißt ursprünglich „Gabe". In der Koine bedeutet *kolasis* „Strafe": 1 Joh 4,18 sagt, die Furcht habe „Pein" (*kolasis*), und 4 Makk 8,9 spricht von Folterstrafen. Eine Strafe, die man nicht erlebt, ist für den Bestraften keine Strafe.`,
          followUps: [
            {
              id: 'stott-vernichtung',
              objection: `Selbst der evangelikale Theologe John Stott neigte zur Vernichtungslehre. Das ist also nicht nur unsere Meinung.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Das stimmt, Stott äußerte das vorsichtig, und unter Protestanten wird die Frage diskutiert. Aber Stott glaubte an die Gottheit Christi, die Trinität und ein bewusstes Sein nach dem Tod – also nicht eure Gesamtlehre. Die koptische Kirche lehrt mit den Vätern die ewige Strafe. Und sie verkündet zugleich: Gott „will, dass allen Menschen geholfen werde" (1 Tim 2,4); die Hölle ist die von Gott respektierte, endgültige Ablehnung seiner Liebe.`,
              sources: [{ kind: 'fachliteratur', author: 'David L. Edwards / John Stott', work: 'Essentials: A Liberal-Evangelical Dialogue', year: '1988', quote: `Stott äußert vorsichtig („tentatively") Sympathie für die Vernichtungslehre.`, status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum spricht Thomas von „Nägelmalen" (Plural) in Jesu Händen?`,
    `Wenn man die Seele nicht töten kann (Mt 10,28) – was ist dann die Seele?`,
    `Warum ist Sterben für Paulus „viel besser", wenn danach bis zur Auferstehung nichts ist?`,
    `Wenn das „ewige Leben" in Mt 25,46 endlos bewusst ist – warum dann nicht auch die „ewige Strafe"?`,
  ],
  avoid: [
    `„Das NT beschreibt genau ein lateinisches Kreuz." – Die genaue Form ist nicht überliefert; argumentiere mit Querbalken und Zeugnissen, nicht mit Details.`,
    `Hölle als sadistische Folter darstellen – das ist weder biblisch noch orthodox und stößt ab.`,
    `Die Unsterblichkeit der Seele rein philosophisch (Platon) begründen – das bestätigt den Einwand. Argumentiere mit Jesus und Paulus.`,
  ],
  concessions: [
    `*Stauros* kann einen einfachen Pfahl bezeichnen; die genaue Form des Kreuzes Jesu ist nicht beschrieben.`,
    `*Nefesch* bezeichnet im AT oft das ganze Lebewesen, auch Tiere; das AT spricht über das Jenseits zurückhaltend.`,
    `Unter evangelikalen Theologen wird die Vernichtungslehre ernsthaft diskutiert.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Martin Hengel', work: 'Crucifixion in the Ancient World and the Folly of the Message of the Cross', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die große Scheidung (The Great Divorce)', year: '1945', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Zeugen Jehovas', 'Kreuz', 'Seele', 'Hölle', 'Zwischenzustand', 'Gericht'],
  related: [
    'hoelle/ewige-strafe-ungerecht',
    'hoelle/liebender-gott-keine-hoelle',
    'heilige-ikonen/gebet-fuer-verstorbene',
    'neurowissenschaften/geist-gleich-gehirn',
  ],
};

export default claim;
