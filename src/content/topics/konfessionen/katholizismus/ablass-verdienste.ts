import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ablass-verdienste',
  title: `„Die überschüssigen Verdienste der Heiligen können durch Ablässe zugewendet werden."`,
  proponents: [
    { name: 'Papst Clemens VI.', role: 'Bischof von Rom (1342–1352)', work: 'Bulle Unigenitus Dei Filius (1343): der „Schatz der Kirche"' },
    { name: 'Konzil von Trient', role: 'Katholisches Reformkonzil', work: 'Dekret über die Ablässe (25. Sitzung, 1563)' },
    { name: 'Papst Paul VI.', role: 'Bischof von Rom (1963–1978)', work: 'Apostolische Konstitution Indulgentiarum doctrina (1967)' },
    { name: 'Katechismus der Katholischen Kirche', role: 'Lehrzusammenfassung', work: 'KKK 1471–1479' },
  ],
  steelman: `Wenn Gott eine Sünde vergibt, bleiben oft Folgen, die geheilt werden müssen: David wurde vergeben, und doch starb sein Kind (2 Sam 12,13–14); Mose wurde vergeben, und doch durfte er das Land nicht betreten (Num 20,12). Die Kirche nennt das „zeitliche Sündenstrafen". Die Kirche ist ein Leib: „Wenn ein Glied leidet, so leiden alle Glieder mit" (1 Kor 12,26), und Paulus „ergänzt an seinem Fleisch, was an den Leiden Christi noch fehlt, für seinen Leib, die Kirche" (Kol 1,24). Christus hat der Kirche die Vollmacht gegeben, zu binden und zu lösen (Mt 16,19). Aus dem unendlichen Verdienst Christi und den Gebeten und guten Werken Marias und der Heiligen besteht ein „Schatz der Kirche", aus dem die Kirche den Gläubigen – unter Bedingungen wie Beichte, Kommunion und Gebet – Nachlass zeitlicher Strafen gewähren kann. Schon in der Alten Kirche verkürzten Bischöfe auf Fürsprache der Bekenner die Bußzeiten der Gefallenen. Der Ablasshandel war ein Missbrauch, den die Kirche selbst abgeschafft hat; die Lehre aber ist Ausdruck der Gemeinschaft der Heiligen.`,
  biblical: {
    summary: `Die Schrift lehrt die Gemeinschaft der Heiligen und die Kraft der Fürbitte (Jak 5,16; Offb 5,8), und sie kennt Gottes **väterliche Züchtigung**, die der Heilung dient (Hebr 12,6–11). Sie kennt aber **keinen „Schatz" überschüssiger Verdienste**, aus dem andere Strafnachlass erhalten. Niemand kann mehr tun, als er Gott schuldet: „Wenn ihr alles getan habt, … so sprecht: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren" (Lk 17,10). Die klugen Jungfrauen können ihr Öl nicht abgeben (Mt 25,9). Kol 1,24 spricht von Paulus’ **Leiden für die Kirche**, nicht von übertragbaren Verdiensten. Christus allein hat „mit **einem** Opfer in Ewigkeit vollendet, die geheiligt werden" (Hebr 10,14).`,
    detail: `**Lk 17,10:** Jesus sagt ausdrücklich, dass auch vollständiger Gehorsam keinen Überschuss schafft. Die Vorstellung „überschüssiger" (überpflichtiger) Werke, die anderen gutgeschrieben werden können, steht in Spannung zu diesem Wort.

**Mt 25,1–13:** Im Gleichnis verweigern die klugen Jungfrauen das Teilen ihres Öls: „Nicht also, auf dass nicht uns und euch gebreche." Die Väter lesen das Öl oft als die Werke der Barmherzigkeit und die Gnade, die jeder selbst erwerben und bewahren muss. Das Gleichnis spricht gegen eine Übertragung geistlicher Verdienste.

**2 Sam 12,13–14:** Die Folgen der Sünde Davids sind Zucht und Heilung in diesem Leben. Der Text kennt keinen Nachlass dieser Folgen durch die Verdienste anderer.

**Kol 1,24:** „Ich erstatte an meinem Fleisch, was noch mangelt an Trübsalen in Christo, für seinen Leib, das ist die Gemeinde." Paulus leidet für die Kirche – als Apostel, dessen Verfolgung der Ausbreitung des Evangeliums dient. Von einem Schatz, der Strafen erlässt, ist keine Rede.`,
    sources: [
      { kind: 'bibel', work: 'Lukas', ref: '17,10', quote: `Also auch ihr; wenn ihr alles getan habt, was euch befohlen ist, so sprecht: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '25,8–9', quote: `Die törichten aber sprachen zu den klugen: Gebt uns von eurem Öl, denn unsre Lampen verlöschen. Da antworteten die klugen und sprachen: Nicht also, auf daß nicht uns und euch gebreche; gehet aber hin zu den Krämern und kauft für euch selbst.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '12,6.10–11', quote: `Denn welchen der HERR liebhat, den züchtigt er … diese aber zu Nutz, auf daß wir seine Heiligung erlangen. Alle Züchtigung aber, wenn sie da ist, dünkt uns nicht Freude, sondern Traurigkeit zu sein; aber darnach wird sie geben eine friedsame Frucht der Gerechtigkeit denen, die dadurch geübt sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,24', quote: `Nun freue ich mich in meinem Leiden, das ich für euch leide, und erstatte an meinem Fleisch, was noch mangelt an Trübsalen in Christo, für seinen Leib, das ist die Gemeinde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,16', quote: `Bekenne einer dem andern seine Sünden und betet füreinander, daß ihr gesund werdet. Des Gerechten Gebet vermag viel, wenn es ernstlich ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche kennt das Sakrament der **Buße und Beichte** mit der priesterlichen **Absolution** (Joh 20,22–23) und die Fürbitte der Heiligen, deren Gebet „viel vermag". Bußübungen (*epitimia*) – Gebete, Fasten, Werke der Liebe – sind **Heilmittel** für die Seele, keine Bezahlung von Strafen. Ein Beichtvater kann sie je nach Reue und Fortschritt verkürzen oder erlassen. Die Kirche lehrt aber **keinen Schatz überschüssiger Verdienste** und **keine Ablässe**: Die Heiligen haben nichts „übrig", sondern sind selbst aus Gnade gerettet; das Verdienst Christi wirkt durch die Sakramente, nicht durch eine Verwaltung von Strafnachlässen.`,
    detail: `**Die historische Wurzel – ehrlich betrachtet:** In der Verfolgung unter Decius (250) baten viele Abgefallene die Bekenner (Christen, die für den Glauben gelitten hatten) um „Friedensbriefe", damit die Bischöfe ihre Bußzeit verkürzten. Cyprian von Karthago erkannte die Fürsprache der Bekenner an, warnte aber scharf vor dem Missbrauch und bestand darauf, dass die Entscheidung beim Bischof und bei echter Reue liegt (De lapsis; Briefe 15–17). Das Konzil von Nizäa (325) erlaubte Bischöfen, Büßern mit echter Umkehr die Bußzeit zu verkürzen (Kanon 12). Hier ging es um **kirchliche Bußstrafen auf Erden** – nicht um Strafen im Jenseits und nicht um einen Schatz von Verdiensten.

**Die westliche Entwicklung:** Im Hochmittelalter entstand die Lehre vom „Schatz der Kirche", den Clemens VI. 1343 lehramtlich formulierte; daraus folgten Ablässe auch für Verstorbene. Der Missbrauch im Ablasshandel wurde zum Auslöser der Reformation (1517). Trient verurteilte den Missbrauch, hielt aber an der Lehre fest; Pius V. untersagte den Verkauf, Paul VI. reformierte 1967 die Praxis und schaffte die Zählung nach Tagen und Jahren ab.`,
    sources: [
      { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'De lapsis (Über die Gefallenen)', year: '251', status: 'paraphrase', note: 'Cyprian ehrt die Bekenner, warnt aber vor leichtfertigen „Friedensbriefen" ohne echte Buße.' },
      { kind: 'konzil', work: 'Konzil von Nizäa, Kanon 12', year: '325', status: 'paraphrase', quote: `Wer mit Furcht, Tränen, Geduld und guten Werken seine Umkehr zeigt, dem darf der Bischof die Bußzeit milder bemessen.` },
      { kind: 'gegner', author: 'Clemens VI.', work: 'Bulle Unigenitus Dei Filius', year: '1343', status: 'paraphrase', note: 'Erste lehramtliche Formulierung des „Schatzes" aus den Verdiensten Christi, Marias und der Heiligen.' },
      { kind: 'gegner', author: 'Paul VI.', work: 'Indulgentiarum doctrina', year: '1967', status: 'paraphrase', note: 'Reform der Ablasspraxis; Abschaffung der Angabe von Tagen und Jahren.' },
    ],
  },
  quickAnswer: `Wir glauben an die Gemeinschaft der Heiligen und an ihre Fürbitte – aber niemand hat „überschüssige" Verdienste. Jesus sagt: Wenn ihr alles getan habt, sprecht: „Wir haben getan, was wir zu tun schuldig waren" (Lk 17,10), und die klugen Jungfrauen konnten ihr Öl nicht abgeben (Mt 25,9). In der koptischen Kirche vergibt Gott in der Beichte durch den Priester, und Bußübungen sind Medizin für die Seele, keine Strafzahlung. Einen Schatz von Verdiensten, aus dem Strafen erlassen werden, kannte die Alte Kirche nicht.`,
  keyPoints: [
    `**Lk 17,10:** Auch vollkommener Gehorsam schafft keinen Überschuss an Verdienst.`,
    `**Mt 25,9:** Das Öl der klugen Jungfrauen ist nicht übertragbar.`,
    `**Christi Opfer genügt** (Hebr 10,14); seine Gnade wirkt durch die Sakramente, nicht durch einen verwalteten Schatz.`,
    `**Alte Kirche:** Bischöfe verkürzten irdische Bußzeiten auf Fürsprache der Bekenner (Cyprian) oder bei echter Reue (Nizäa Kanon 12) – das ist etwas anderes als Ablässe aus einem Verdienstschatz.`,
    `**Die Lehre vom Schatz der Kirche** wurde erst 1343 lehramtlich formuliert; ihr Missbrauch löste die Reformation aus.`,
  ],
  voices: [
    {
      person: 'cyprian',
      role: 'als Bischof in der Bußkrise des 3. Jahrhunderts',
      text: `Cyprian stand vor einer Kirche, in der viele in der Verfolgung abgefallen waren und mit Briefen von Bekennern sofortige Wiederaufnahme verlangten. Er ehrte die Bekenner, aber er sah die Gefahr: Ein Friedensbrief ohne echte Umkehr heilt nicht, sondern betrügt den Sünder. Der Gefallene müsse mit Tränen und Werken der Buße zu Gott zurückkehren; nicht der Brief eines anderen rettet, sondern Gottes Erbarmen über den Reuigen. Seine Mahnung ist eine frühe Warnung vor jeder Mechanisierung der Vergebung.`,
      sources: [{ kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'De lapsis', ref: '15–20', status: 'paraphrase' }],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der Buße',
      text: `Chrysostomus beschreibt die Buße als Arznei: Gott fordert nicht Zeit, sondern die Wahrheit der Reue. Manche erlangen in kurzer Zeit Vergebung, weil ihre Umkehr tief ist; andere brauchen lange. Entscheidend sind die Tränen, das Almosen, die Demut und das Gebet – Wege, durch die Gottes Barmherzigkeit den Sünder heilt. Die Fürbitte der Heiligen ist ihm teuer, aber sie ersetzt nicht die eigene Umkehr.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia)', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Buße',
      text: `Papst Schenuda III. schrieb ausführlich über die Buße als lebenslange Umkehr des Herzens. Für ihn ist die Beichte Begegnung mit Gottes vergebender Liebe, die Absolution durch den Priester wirkliche Vergebung, und die Bußübungen sind Hilfen auf dem Weg der Heilung. Die Vorstellung, man könne Strafen durch zugewendete Verdienste anderer tilgen, hat in diesem Verständnis keinen Platz.`,
      sources: [{ kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Buße (The Life of Repentance and Purity)', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'zeitliche-strafen-david',
      objection: `„David wurde vergeben – und doch starb sein Kind (2 Sam 12,13–14). Es gibt also Strafen, die nach der Vergebung bleiben. Ablässe erlassen genau diese."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Dass Sünde Folgen hat und Gott uns erzieht, glauben wir auch (Hebr 12,6–11). Aber das ist väterliche Zucht in diesem Leben, die uns heilt – keine Restschuld auf einem Konto. Und bei David wurde diese Folge nicht durch die Verdienste anderer erlassen; er trug sie in Buße (Ps 51). Aus 2 Sam 12 folgt nicht, dass die Kirche einen Schatz verwaltet, aus dem sie solche Folgen tilgt.`,
      followUps: [
        {
          id: 'gemeinschaft-der-heiligen',
          objection: `„Aber ihr glaubt doch an die Fürbitte der Heiligen! Wenn ihr Gebet hilft, warum nicht auch ihre Verdienste? Wir sind ein Leib (1 Kor 12,26)."`,
          objectionBy: 'Katholischer Theologe',
          answer: `Fürbitte ist Gebet zu Gottes Erbarmen – sie bittet, sie verfügt nicht. Ein „Schatz überschüssiger Verdienste" setzt dagegen voraus, dass Heilige mehr getan haben, als sie Gott schuldeten (Lk 17,10 widerspricht dem), und dass dieser Überschuss messbar verwaltet werden kann. Die Heiligen selbst haben sich als größte Sünder bekannt. Ihre Liebe hilft uns – aber nicht als Guthaben.`,
          followUps: [
            {
              id: 'schatz-ist-christus',
              objection: `„Der Schatz der Kirche ist vor allem das unendliche Verdienst Christi; die Heiligen kommen nur hinzu (KKK 1476–1477). Ihr kritisiert ein Zerrbild."`,
              objectionBy: 'Katholischer Theologe',
              answer: `Wenn das Verdienst Christi unendlich ist, warum braucht es dann die Verdienste der Heiligen? Und Christi Verdienst schenkt Gott uns in den Sakramenten – in Taufe, Beichte, Eucharistie –, ohne dass dazu ein eigenes System von Nachlässen nötig wäre. Das Bild eines „Schatzes", aus dem die Kirche nach festgelegten Bedingungen Strafnachlässe zuteilt, findet sich weder in der Schrift noch bei den Vätern des ersten Jahrtausends.`,
              questionsBack: [`Welcher Kirchenvater des ersten Jahrtausends spricht von einem Schatz überschüssiger Verdienste der Heiligen, den die Kirche zuteilt?`],
            },
          ],
        },
      ],
    },
    {
      id: 'tetzel-ist-vorbei',
      objection: `„Der Ablasshandel unter Tetzel war ein Missbrauch, den die Kirche längst abgeschafft hat. Heute kostet kein Ablass Geld; man braucht Beichte, Kommunion und Gebet."`,
      objectionBy: 'Katholischer Gesprächspartner',
      answer: `Das ist richtig und ich gebe es gern zu: Der Verkauf wurde verboten, und Paul VI. hat 1967 die Praxis gründlich reformiert. Meine Frage betrifft nicht den Missbrauch, sondern die Grundlage – die Vorstellung zeitlicher Strafen, die durch einen Schatz von Verdiensten erlassen werden. Diese Lehre besteht weiter, und sie war der Alten Kirche unbekannt.`,
      followUps: [
        {
          id: 'alte-kirche-erliess-bussen',
          objection: `„Unbekannt? Schon zu Cyprians Zeit verkürzten Bischöfe auf Fürsprache der Märtyrer die Buße – das ist der Ursprung der Ablässe!"`,
          objectionBy: 'Katholischer Kirchenhistoriker',
          answer: `Das ist die historische Wurzel, ja – und gerade deshalb ist der Unterschied wichtig: Damals ging es um **kirchliche Bußzeiten auf Erden**, die der Bischof bei echter Reue verkürzen konnte. Daraus wurde später ein Erlass von Strafen vor Gott, auch für Verstorbene, aus einem Schatz von Verdiensten. Und Cyprian selbst warnte vor genau dieser Gefahr: Friedensbriefe ohne Umkehr täuschen den Sünder.`,
          sources: [
            { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Briefe', ref: '15–17', year: '250', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'ablass-fuer-verstorbene',
      objection: `„Ihr betet doch selbst für die Verstorbenen. Ein Ablass für Verstorbene ist nichts anderes als ein besonders feierliches Fürbittgebet der Kirche."`,
      objectionBy: 'Katholischer Theologe',
      answer: `Die katholische Lehre sagt tatsächlich, Ablässe für Verstorbene wirkten „nach Art der Fürbitte" – das ist ehrlich und nah bei uns. Aber das System bleibt: Ein Ablass verspricht unter genau festgelegten Bedingungen einen bestimmten Nachlass, bis hin zum „vollkommenen" Ablass. Wir beten für die Entschlafenen und vertrauen sie Gottes Erbarmen an, ohne eine solche Wirkung zuzusagen. Das ist der Unterschied zwischen Gebet und Verwaltung.`,
      followUps: [
        {
          id: 'heiliges-jahr',
          objection: `„Im Heiligen Jahr gewährt die Kirche Pilgern einen vollkommenen Ablass. Millionen Gläubige erleben das als Gnade."`,
          objectionBy: 'Katholischer Pilger',
          answer: `Ich zweifle nicht daran, dass Menschen im Heiligen Jahr echte Gnade erfahren – durch Beichte, Kommunion, Gebet und Pilgerschaft. Genau das sind die Wege, die auch die koptische Kirche kennt. Die Gnade kommt aus diesen Sakramenten und der Umkehr selbst; dazu braucht es keine Lehre von einem zugeteilten Strafnachlass aus einem Verdienstschatz.`,
        },
      ],
    },
    {
      id: 'kol-1-24-ergaenzen',
      objection: `„Kol 1,24: ‚Ich erstatte an meinem Fleisch, was noch mangelt an Trübsalen in Christo, für seinen Leib, welcher ist die Gemeinde.' Die Leiden der Heiligen kommen anderen zugute – das ist der Kirchenschatz."`,
      objectionBy: 'Jimmy Akin',
      answer: `Paulus spricht von seinen Leiden im apostolischen Dienst, durch die das Evangelium zu den Heiden kommt und die Gemeinde gestärkt wird: „Haben wir Trübsal, so geschieht es euch zu Trost und Heil" (2 Kor 1,6). Christus leidet in seinem Leib, der Kirche, mit – das ist Gemeinschaft in der Sendung. Von einem Überschuss an Verdiensten, der als Erlass zeitlicher Strafen zugewendet wird, sagt der Vers nichts.`,
      detail: `Den Vätern war wichtig, dass Kol 1,24 nicht einen Mangel an der Wirksamkeit des Kreuzes meint. Chrysostomus erklärt, Christus leide noch in seinen Gliedern; was „fehlt", ist nicht die Erlösung, sondern das Mitleiden der Kirche bis zum Ende. Die Leiden der Apostel und Märtyrer nützen anderen durch ihr Zeugnis, ihre Liebe und ihre Fürbitte – nicht durch eine übertragbare Rechnung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Kolosserbrief', ref: '4 (zu Kol 1,24)', year: 'um 399', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'binden-und-loesen',
          objection: `„Christus hat der Kirche die Schlüssel gegeben: Was ihr löst, ist im Himmel gelöst (Mt 16,19; 18,18). Ablässe sind einfach die Ausübung dieser Löse-Vollmacht."`,
          objectionBy: 'Trent Horn',
          answer: `Die Kirche hat die Vollmacht zu binden und zu lösen – sie übt sie in der Beichte und in der Bußdisziplin aus: Der koptische Priester spricht die Lossprechung (Joh 20,23) und kann Bußauflagen auferlegen oder erleichtern. Das betrifft Sünden und kirchliche Bußen in diesem Leben. Eine Verfügung über nachtodliche Strafen aus einem Schatz fremder Verdienste geht über das hinaus, was die Schrift und die Alte Kirche mit den Schlüsseln verbanden.`,
          followUps: [
            {
              id: 'heilige-litten-mehr',
              objection: `„Maria und die Märtyrer haben viel mehr gelitten, als ihre eigenen Sünden verdient hätten. Dieses Leiden geht nicht verloren – Gott wendet es in der Solidarität des Leibes anderen zu."`,
              objectionBy: 'Katholischer Theologe',
              answer: `Jesus sagt: „Wenn ihr alles getan habt, was euch befohlen ist, so sprecht: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren" (Lk 17,10). Vor Gott hat niemand einen Überschuss. Das Leiden der Märtyrer ist eine Gabe der Liebe, kein Guthaben. Die koptische Kirche ehrt die Märtyrer wie kaum eine andere und bittet um ihre Fürbitte – das ist die biblische Form der Solidarität: Gebet, nicht Übertragung von Verdiensten.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '17,10', quote: `Also auch ihr; wenn ihr alles getan habt, was euch befohlen ist, so sprecht: Wir sind unnütze Knechte; wir haben getan, was wir zu tun schuldig waren.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'fuerbitte-wirkt-durch-heiligkeit',
                  objection: `„Aber auch eure Fürbitte der Heiligen wirkt doch wegen ihrer Heiligkeit: ‚Des Gerechten Gebet vermag viel' (Jak 5,16). Das ist der Sache nach dasselbe wie Verdienst."`,
                  objectionBy: 'Katholischer Theologe',
                  answer: `Da sind wir näher beieinander, als man denkt, und das darf man sagen: Heiligkeit gibt dem Gebet Freimut (*parrhēsia*). Aber Fürbitte bleibt Bitte an Gottes freies Erbarmen – Gott bleibt frei in seiner Antwort. Ein Kirchenschatz, aus dem die Kirche vollkommene oder teilweise Ablässe „mit Autorität zuwendet", funktioniert anders: als ein Gut, über das verfügt wird. Der Unterschied ist der zwischen Bitten und Verfügen.`,
                  questionsBack: [`Kann die Kirche Gott durch einen Ablass zu etwas verpflichten – oder bittet sie ihn nur?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'protestantische-polemik',
      objection: `„Du übernimmst einfach die Polemik der Reformatoren. Selbst Luther hat in seinen 95 Thesen die Ablässe nicht grundsätzlich verworfen – These 71 verflucht sogar, wer gegen die Wahrheit der apostolischen Ablässe redet."`,
      objectionBy: 'Katholischer Apologet',
      answer: `Unsere Kritik ist nicht protestantisch. Die koptische Kirche kannte nie Ablässe – lange vor Luther, und ohne sein „allein durch den Glauben". Wir urteilen von der Alten Kirche her: Die Väter des ersten Jahrtausends kennen Gebet für die Toten und kirchliche Bußerleichterung, aber keinen Schatz überschüssiger Verdienste. Dass Luther 1517 selbst noch Ablässe verteidigte, zeigt nur, wie fest die Lehre im spätmittelalterlichen Westen verankert war – nicht, dass sie apostolisch ist.`,
      followUps: [
        {
          id: 'nur-muetterliche-fuerbitte',
          objection: `„Ein Ablass ist heute nichts anderes als die mütterliche Fürbitte der Kirche verbunden mit einer Ermutigung zur Frömmigkeit – so hat es Paul VI. 1967 in ‚Indulgentiarum doctrina' erklärt."`,
          objectionBy: 'Katholischer Theologe',
          answer: `Paul VI. hat die Praxis gründlich gereinigt und die Angaben in Tagen und Jahren abgeschafft – das erkennen wir an. Aber der Kern bleibt: Nach katholischer Lehre teilt die Kirche als Dienerin der Erlösung den Schatz der Genugtuungen Christi und der Heiligen **mit Autorität** aus und wendet ihn zu (KKK 1471). Für Lebende ist das mehr als Fürbitte. Genau diese autoritative Zuwendung finden wir in der Alten Kirche nicht.`,
          sources: [
            { kind: 'gegner', author: 'Paul VI.', work: 'Apostolische Konstitution Indulgentiarum doctrina', year: '1. Januar 1967', status: 'paraphrase' },
            { kind: 'gegner', work: 'Katechismus der Katholischen Kirche', ref: 'Nr. 1471', year: '1992/1997', status: 'paraphrase', note: 'Definition des Ablasses als Nachlass zeitlicher Strafen, den die Kirche als Dienerin der Erlösung aus dem Schatz der Genugtuungen autoritativ austeilt.' },
          ],
          followUps: [
            {
              id: 'synchorochartia',
              objection: `„Auch der Osten hatte Ablässe: Griechische Patriarchate stellten in osmanischer Zeit Absolutionsbriefe (*synchorochartia*) aus – sogar gegen Bezahlung."`,
              objectionBy: 'Erick Ybarra',
              answer: `Das ist historisch richtig und sollte ehrlich zugegeben werden: Einzelne griechische Patriarchate, besonders Jerusalem, gaben in der Türkenzeit solche Briefe aus – unter finanziellem Druck und wohl unter westlichem Einfluss; orthodoxe Theologen haben die Praxis selbst kritisiert. Sie war nie Dogma und nie Praxis der koptischen Kirche. Missbräuche im Osten rechtfertigen die Lehre nicht – so wenig wie Tetzel die katholische Lehre widerlegt.`,
              followUps: [
                {
                  id: 'koptische-busswerke',
                  objection: `„Euer Beichtvater erlegt auch Bußwerke auf – Fasten, Metanien – und kann sie erlassen. Wenn das legitim ist, warum dann nicht Ablässe?"`,
                  objectionBy: 'Katholischer Apologet',
                  answer: `Ja, der Beichtvater kann Bußen auflegen, mildern oder umwandeln – wie die Bischöfe zu Cyprians Zeit. Das ist pastorale Arznei im Leben, gebunden an die persönliche Umkehr und die geistliche Begleitung. Ablass in diesem engen Sinn – Erleichterung kirchlicher Buße – kennen wir also. Was wir nicht kennen, ist die Theorie eines Schatzes, aus dem Strafen für die Zeit nach dem Tod abgemessen und zugewendet werden. Dort, nicht bei der Bußpraxis, liegt der Unterschied.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie passt Lk 17,10 („wir haben getan, was wir zu tun schuldig waren") zu „überschüssigen" Verdiensten?`,
    `Warum geben die klugen Jungfrauen ihr Öl nicht ab (Mt 25,9)?`,
    `Welcher Vater des ersten Jahrtausends lehrte einen Schatz der Verdienste, aus dem die Kirche Strafen erlässt?`,
    `Wenn Christi Verdienst unendlich ist – wozu braucht es die Verdienste der Heiligen?`,
  ],
  avoid: [
    `Den heutigen Katholizismus nicht mit Tetzel gleichsetzen. Der Ablasshandel ist seit Jahrhunderten verboten.`,
    `Nicht gegen die Fürbitte der Heiligen argumentieren – die koptische Kirche bittet die Heiligen um ihre Gebete.`,
    `Nicht protestantisch gegen jede Buße und Genugtuung polemisieren; Bußübungen sind auch koptische Praxis – als Medizin.`,
  ],
  concessions: [
    `Die Ablasslehre hat eine echte Wurzel in der Bußpraxis der Alten Kirche (Fürsprache der Bekenner, Nizäa Kanon 12).`,
    `Die katholische Kirche hat die Missbräuche selbst bekämpft und die Praxis 1967 grundlegend reformiert; sie betont heute die Notwendigkeit von Beichte, Kommunion und innerer Umkehr.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Cyprian von Karthago', work: 'Über die Gefallenen (De lapsis)', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'The Life of Repentance and Purity', status: 'paraphrase' },
    { kind: 'gegner', author: 'Paul VI.', work: 'Indulgentiarum doctrina', year: '1967', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ablass', 'Buße', 'Verdienst', 'Gemeinschaft der Heiligen', 'Beichte'],
  related: ['katholizismus/fegefeuer', 'sakramente/beichte-unbiblisch', 'heilige-ikonen/fuerbitte-der-heiligen', 'sola-fide/werke-sind-werkgerechtigkeit'],
};

export default claim;
