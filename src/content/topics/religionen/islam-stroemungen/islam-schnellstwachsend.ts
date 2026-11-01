import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'islam-schnellstwachsend',
  title: `„Der Islam ist die am schnellsten wachsende Religion – das beweist seine Wahrheit."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Indischer Prediger, Peace TV', work: 'Vorträge „Is Islam the fastest growing religion?" u. a.' },
    { name: 'Mohammed Hijab', role: 'Britischer muslimischer Apologet und Debattierer', work: 'Debatten und Videos zu Demografie, Konversion und Säkularisierung' },
    { name: 'Ahmed Deedat', role: 'Südafrikanischer Debattierer (1918–2005)', work: 'Vorträge zur Ausbreitung des Islam' },
  ],
  steelman: `Die Zahlen sprechen für sich. Das Pew Research Center prognostizierte 2015, dass es bis 2050 fast so viele Muslime (2,8 Milliarden) wie Christen (2,9 Milliarden) geben wird; im Bericht von 2025 zeigt Pew, dass die Zahl der Muslime zwischen 2010 und 2020 um 347 Millionen wuchs – mehr als alle anderen Religionen zusammen –, während der Anteil der Christen an der Weltbevölkerung auf 28,8 % fiel. In Europa werden Kirchen geschlossen und zu Wohnungen, Bars oder Moscheen umgebaut; im Westen nehmen jedes Jahr Tausende, besonders Frauen, den Islam an. Der Islam widersteht der Säkularisierung, an der das Christentum zerbricht. Der Koran hat es vorhergesagt: „Wenn die Hilfe Allahs kommt … und du die Menschen in Scharen in die Religion Allahs eintreten siehst" (110:1–2), und: „Die Wahrheit ist gekommen, und das Falsche ist vergangen" (17:81). Eine Religion, die der Natur des Menschen (fitra) entspricht, setzt sich eben durch.`,
  biblical: {
    summary: `Die Bibel misst Wahrheit nie an Mehrheiten. Israel war „das kleinste unter allen Völkern" (Dtn 7,7); Jesus nennt seine Jünger „du kleine Herde" (Lk 12,32) und warnt: „Die Pforte ist weit, und der Weg ist breit, der zur Verdammnis abführt; und ihrer sind viele" (Mt 7,13). Zugleich verheißt er ein Wachstum aus kleinstem Anfang – das Senfkorn, das zum Baum wird (Mt 13,31–32) –, und zwar nicht durch Macht, sondern „durch meinen Geist, spricht der HERR" (Sach 4,6).`,
    detail: `**1. Wahrheit vor Zahl.** Elia stand allein gegen 450 Baalspropheten (1 Kön 18,22). Jeremia war mit seiner Botschaft eine Minderheit gegen viele Heilspropheten. Die Wahrheit Gottes wird nicht abgestimmt.

**2. Wachstum ohne Schwert.** Die Apostelgeschichte beschreibt, wie das Evangelium sich trotz Verfolgung ausbreitete: „Die nun zerstreut waren, gingen um und predigten das Wort" (Apg 8,4). Die ersten drei Jahrhunderte wuchs die Kirche ohne staatliche Macht, oft unter Lebensgefahr.

**3. Gamaliels Maßstab ist kein Zahlenmaßstab.** „Ist der Rat oder das Werk aus den Menschen, so wird's untergehen; ist's aber aus Gott, so könnt ihr's nicht dämpfen" (Apg 5,38–39) – Gamaliel spricht vom **Überleben** unter Druck über lange Zeit, nicht von Geburtenraten.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '7,13–14', quote: `Gehet ein durch die enge Pforte. Denn die Pforte ist weit, und der Weg ist breit, der zur Verdammnis abführt; und ihrer sind viele, die darauf wandeln. Und die Pforte ist eng, und der Weg ist schmal, der zum Leben führt; und wenige sind ihrer, die ihn finden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '12,32', quote: `Fürchte dich nicht, du kleine Herde; denn es ist eures Vaters Wohlgefallen, euch das Reich zu geben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sacharja', ref: '4,6', quote: `Es soll nicht durch Heer oder Kraft, sondern durch meinen Geist geschehen, spricht der HERR Zebaoth.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '13,31–32', quote: `Das Himmelreich ist gleich einem Senfkorn, das ein Mensch nahm und säte auf seinen Acker; welches das kleinste ist unter allem Samen; wenn es aber erwächst, so ist es das größte unter dem Kohl und wird ein Baum.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche weiß aus eigener Geschichte, dass Zahlen nicht über Wahrheit entscheiden: Ägypten war bis weit ins Mittelalter mehrheitlich christlich; unter jahrhundertelangem Druck (Kopfsteuer, Einschränkungen, Verfolgungswellen) schrumpfte die Kirche zur Minderheit – und blieb dennoch treu. Sie versteht sich als „Kirche der Märtyrer", deren Zeitrechnung (Anno Martyrum, ab 284) mit der Verfolgung unter Diokletian beginnt. Ihr Zeugnis lautet: Treue unter Druck, nicht Masse, bezeugt die Wahrheit.`,
    detail: `Die Kirchenväter kannten das Argument der großen Zahl bereits – nur umgekehrt: Die Heiden spotteten über die kleine, arme Christengemeinde. Tertullian antwortete, das Blut der Märtyrer sei ein Same. Athanasius führte das Wachstum der Kirche nicht als Zahlenbeweis an, sondern verwies darauf, dass die Botschaft eines Gekreuzigten ohne Gewalt die Götzenbilder der Welt überwand (De Inc. 46–53). Das ist ein Argument über das **Wie** des Wachstums, nicht über die Menge.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '50,13', year: '197', quote: `Wir werden jedes Mal mehr, so oft wir von euch niedergemäht werden: Ein Same ist das Blut der Christen.`, original: 'Plures efficimur, quotiens metimur a vobis: semen est sanguis Christianorum.', status: 'verbatim', note: 'Tertullian ist kein Heiliger der koptischen Kirche; sein apologetisches Zeugnis bleibt wertvoll.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '46–53', year: 'ca. 318', status: 'paraphrase', quote: `Athanasius verweist darauf, dass der Gekreuzigte ohne Waffen und Zwang die Völker gewann – ein Hinweis auf göttliche Kraft, nicht auf menschliche Macht.` },
    ],
  },
  opposingView: {
    summary: `Die demografischen Daten sind seriös: Nach Pew (2015) hatten Muslime 2010–2015 mit durchschnittlich 3,1 Kindern pro Frau die höchste Fertilität (Christen 2,7; Weltdurchschnitt 2,5) und die jüngste Bevölkerung. Pew betont aber ausdrücklich, dass das Wachstum **vor allem durch Geburten** entsteht: Religionswechsel spielen für Muslime netto kaum eine Rolle, während Christen bis 2050 durch Religionswechsel netto rund 66 Millionen verlieren dürften (40 Mio. Zugänge, 106 Mio. Abgänge), überwiegend an die Konfessionslosen. Der Pew-Bericht von 2025 (2010–2020) bestätigt: Muslime wuchsen um 347 Millionen, Christen um 122 Millionen; der christliche Anteil fiel auf 28,8 %, der muslimische stieg auf 25,6 %.`,
    detail: `Für das Gespräch heißt das: Der Islam wächst schnell – das ist wahr und sollte zugegeben werden. Aber er wächst nach Pew fast nur durch Kinderreichtum und junge Bevölkerung, nicht durch Bekehrungen. Das Christentum verliert vor allem in Europa und Nordamerika durch Säkularisierung, wächst aber stark in Afrika und Teilen Asiens; der Schwerpunkt der Christenheit hat sich in den globalen Süden verschoben (Philip Jenkins). In mehreren mehrheitlich muslimischen Ländern ist der Austritt aus dem Islam rechtlich oder gesellschaftlich gefährlich, was jeden Vergleich der „Bindungskraft" verzerrt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'The Future of World Religions: Population Growth Projections, 2010–2050', year: '2015', quote: `Bis 2050 wird die Zahl der Muslime (2,8 Mrd., 30 %) die der Christen (2,9 Mrd., 31 %) nahezu erreichen. Hauptgründe: höhere Fertilität und jüngere Bevölkerung; Christen erleiden die größten Nettoverluste durch Religionswechsel.`, status: 'paraphrase', url: 'https://www.pewresearch.org/religion/2015/04/02/number-of-muslims-worldwide-expected-to-nearly-equal-number-of-christians-by-2050-religiously-unaffiliated-will-make-up-declining-share-of-worlds-population/' },
      { kind: 'wissenschaft', author: 'Pew Research Center', work: 'How the Global Religious Landscape Changed From 2010 to 2020', year: '2025', quote: `Die Zahl der Muslime stieg um 347 Millionen – mehr als alle anderen Religionen zusammen; ihr Anteil stieg um 1,8 Punkte auf 25,6 %. Die Zahl der Christen stieg um 122 Millionen auf 2,3 Milliarden, ihr Anteil fiel um 1,8 Punkte auf 28,8 %.`, status: 'paraphrase', url: 'https://www.pewresearch.org/religion/2025/06/09/how-the-global-religious-landscape-changed-from-2010-to-2020/' },
    ],
  },
  quickAnswer: `Stimmt, der Islam wächst schnell – aber laut Pew fast nur, weil Muslime die jüngste Bevölkerung und die meisten Kinder haben, nicht weil sich viele Menschen bekehren. Und Wachstum beweist keine Wahrheit: Sonst wäre das Christentum in den ersten drei Jahrhunderten bewiesen worden, als es unter Verfolgung wuchs – oder im 20. Jahrhundert in Afrika. Sogar der Koran sagt: „Wenn du den meisten auf der Erde gehorchst, werden sie dich in die Irre führen" (6:116). Lass uns lieber über Belege reden.`,
  keyPoints: [
    `**Die Zahlen zugeben:** Der Islam wächst derzeit am schnellsten (Pew 2015 und 2025). Wer das bestreitet, verliert Glaubwürdigkeit.`,
    `**Geburten, nicht Bekehrungen:** Das Wachstum beruht nach Pew auf Fertilität und Altersstruktur; netto gewinnt der Islam durch Religionswechsel kaum.`,
    `**Wachstum ≠ Wahrheit:** Ein Mehrheitsargument (argumentum ad populum) – das der Koran selbst zurückweist (6:116; 12:103).`,
    `**Das Argument beweist zu viel:** Dann wären auch das frühe Christentum, das afrikanische Christentum des 20. Jahrhunderts oder der Säkularismus „bewiesen".`,
    `**Freiheit verzerrt den Vergleich:** Wo der Austritt aus einer Religion gefährlich ist, misst Mitgliedschaft nicht freie Überzeugung.`,
    `**Ehrlich zum Christentum:** Es verliert im Westen an die Konfessionslosigkeit – und wächst im Süden. Entscheidend sind nicht Trends, sondern Gründe.`,
  ],
  voices: [
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark hat in *The Rise of Christianity* berechnet, dass die Kirche von wenigen Tausend Gläubigen um 40 n. Chr. bis um 300 auf mehrere Millionen wuchs – eine Rate von etwa 40 % pro Jahrzehnt, ohne Staatsmacht und unter wiederholter Verfolgung. Er erklärt das Wachstum soziologisch durch Netzwerke, Nächstenliebe in Seuchenzeiten und die Würde, die das Christentum Frauen und Armen gab. Gerade als Soziologe betont er: Wachstumsraten erklären Ausbreitung, sie entscheiden nicht über Wahrheit.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity: A Sociologist Reconsiders History', year: '1996', status: 'paraphrase' }],
    },
    {
      person: 'philip-jenkins',
      role: 'als Historiker des globalen Christentums',
      text: `Jenkins hat gezeigt, dass sich das Zentrum der Christenheit im 20. Jahrhundert dramatisch nach Afrika, Lateinamerika und Asien verschoben hat. Das afrikanische Christentum wuchs von wenigen Millionen um 1900 auf Hunderte Millionen – großenteils nach dem Ende der Kolonialzeit und durch einheimische Bewegungen. Wer nur auf die leeren Kirchen Europas schaut, sieht ein verzerrtes Bild.`,
      sources: [{ kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom: The Coming of Global Christianity', year: '2002', status: 'paraphrase' }],
    },
    {
      person: 'david-garrison',
      role: 'als Missionsforscher',
      text: `Garrison hat in jahrelanger Feldforschung Bewegungen von Muslimen dokumentiert, die Christus nachfolgen – in Iran, Nordafrika, Südasien und anderswo –, und ihre Zeugnisse über die Gründe ihres Glaubenswechsels gesammelt. Er beschreibt, dass viele dieser Bewegungen im Verborgenen leben, weil ein Religionswechsel gefährlich ist. Seine Zahlen sind Schätzungen; sein Punkt ist, dass das Bild „alle werden Muslime, niemand verlässt den Islam" nicht stimmt.`,
      sources: [{ kind: 'fachliteratur', author: 'David Garrison', work: 'A Wind in the House of Islam', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Islam-Apologet',
      text: `Vater Zakaria Botros hat in seinen arabischsprachigen Sendungen immer wieder betont, dass Muslime die Freiheit haben müssen, Fragen zu stellen und ihre Überzeugung zu ändern – und dass ein Glaube, der den Austritt mit Strafe bedroht, seine Stärke nicht an seinen Zahlen beweisen kann. Er rief Christen zugleich dazu auf, Muslimen mit Liebe zu begegnen.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'Arabischsprachige Fernsehsendungen (u. a. „Su\'al Jari\'" – Eine kühne Frage)', year: '2000er', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'pew-beweist-wachstum',
      objection: `Pew sagt es klar: Der Islam ist die am schnellsten wachsende Religion der Welt, und bis 2050 wird es fast so viele Muslime wie Christen geben. Das ist kein Zufall – das ist Allahs Plan.`,
      objectionBy: 'Zakir Naik',
      answer: `Die Zahlen stimmen, das gebe ich offen zu. Aber derselbe Pew-Bericht nennt die Gründe: Muslime haben die jüngste Bevölkerung und mit durchschnittlich 3,1 Kindern pro Frau die höchste Geburtenrate. Durch Religionswechsel gewinnt der Islam laut Pew netto kaum. Der Islam wächst also, weil Muslime viele Kinder haben – nicht, weil viele Menschen ihn prüfen und übertreten. Und Kinderzahl sagt nichts über Wahrheit.`,
      sources: [
        { kind: 'wissenschaft', author: 'Pew Research Center', work: 'The Future of World Religions', year: '2015', quote: `Muslime hatten 2010–2015 durchschnittlich 3,1 Kinder pro Frau, Christen 2,7, der Weltdurchschnitt lag bei 2,5. Der Religionswechsel bringt Muslimen bis 2050 netto nur einen geringen Zugewinn.`, status: 'paraphrase', note: 'Der Nettozugewinn der Muslime durch Religionswechsel wird in Berichten meist mit rund 3 Mio. angegeben – Tabelle im Originalbericht prüfen.' },
      ],
      followUps: [
        {
          id: 'kinder-sind-segen',
          objection: `Kinder sind ein Segen Allahs. Dass Muslime Familien gründen und Christen kaum noch Kinder bekommen, zeigt doch, wer der natürlichen Ordnung folgt.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Kinder sind ein Segen – „Kinder sind eine Gabe des HERRN" (Ps 127,3), da sind wir uns einig. Aber Geburtenraten folgen vor allem Bildung, Verstädterung, Einkommen und Frauenerwerbstätigkeit. Iran ist ein mehrheitlich schiitisches Land und hat heute eine Geburtenrate unter dem Erhaltungsniveau; im christlichen Subsahara-Afrika ist sie hoch. Das zeigt: Fertilität misst gesellschaftliche Umstände, nicht die Wahrheit einer Religion.`,
          followUps: [
            {
              id: 'konvertiten-im-westen',
              objection: `Es geht nicht nur um Geburten. Im Westen konvertieren jedes Jahr Tausende zum Islam, gerade gebildete Frauen. Das ist echte Bekehrung.`,
              objectionBy: 'Zakir Naik',
              answer: `Ja, es gibt Menschen, die zum Islam übertreten – und es gibt Menschen, die ihn verlassen. Pew-Erhebungen in den USA deuten darauf hin, dass etwa so viele Menschen den Islam verlassen, wie neu hinzukommen. Bekehrungen geschehen in beide Richtungen; Einzelgeschichten heben sich gegenseitig auf. Deshalb sollten wir über Gründe sprechen, nicht über Statistiken.`,
              sources: [
                { kind: 'wissenschaft', author: 'Pew Research Center', work: 'U.S. Muslims Concerned About Their Place in Society, but Continue to Believe in the American Dream', year: '2017', quote: `Etwa ein Viertel der als Muslime aufgewachsenen US-Erwachsenen identifiziert sich nicht mehr als muslimisch; ungefähr ebenso viele Erwachsene sind zum Islam konvertiert.`, status: 'unverified', note: 'Zahlen aus dem Gedächtnis; vor Verwendung im Originalbericht prüfen.' },
              ],
              followUps: [
                {
                  id: 'ex-muslime-unehrlich',
                  objection: `Die meisten „Ex-Muslime" waren nie richtige Muslime oder wollen nur Aufmerksamkeit. Echte Muslime verlassen den Islam nicht.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Dann muss derselbe Maßstab auch für Konvertiten zum Islam gelten – man kann nicht die eigenen Übertritte als Beweis zählen und die der anderen als unecht abtun. Und es gibt einen ernsten Punkt: In mehreren Ländern ist der Austritt aus dem Islam strafbar oder lebensgefährlich. Wo man nicht frei gehen kann, misst die Zahl der Bleibenden nicht die Überzeugungskraft einer Religion.`,
                  questionsBack: [
                    `Würdest du dich dafür einsetzen, dass Muslime überall frei sind, den Islam zu verlassen – so wie Christen frei sind, das Christentum zu verlassen?`,
                    `Wenn ein Konvertit zum Islam als Beweis zählt – warum dann nicht ein Konvertit zum Christentum?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wahrheit-setzt-sich-durch',
      objection: `„Die Wahrheit ist gekommen, und das Falsche ist vergangen" (17:81). Gott lässt die Wahrheit siegen. Dass der Islam wächst und sich durchsetzt, ist das Zeichen Seines Wohlgefallens.`,
      objectionBy: 'Muslimischer Prediger',
      answer: `Das ist ein Mehrheitsargument, und der Koran selbst weist es zurück: „Wenn du den meisten auf der Erde gehorchst, werden sie dich vom Weg Allahs abirren lassen" (6:116), und: „Die meisten Menschen werden nicht glauben, auch wenn du es noch so sehr wünschst" (12:103). Und das Argument beweist zu viel: Dann wäre das Christentum bewiesen, als es in drei Jahrhunderten von wenigen Tausend auf Millionen wuchs – und Säkularismus heute in Europa.`,
      sources: [
        { kind: 'koran', work: 'Sure 6 (al-An\'am)', ref: '6:116', quote: `Wenn du den meisten von denen auf der Erde gehorchst, werden sie dich von Allahs Weg abirren lassen. Sie folgen nur Mutmaßungen.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/6/116' },
        { kind: 'koran', work: 'Sure 12 (Yusuf)', ref: '12:103', quote: `Aber die meisten Menschen werden nicht gläubig, auch wenn du noch so sehr danach trachtest.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/12/103' },
        { kind: 'hadith', work: 'Sahih Muslim', ref: '145', quote: `Der Islam begann als etwas Fremdes und wird wieder zu etwas Fremdem werden, wie er begann; so selig sind die Fremden.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/muslim:145' },
      ],
      followUps: [
        {
          id: 'christentum-durch-rom',
          objection: `Das Christentum ist nur gewachsen, weil Konstantin es zur Staatsreligion machte und weil die Kolonialmächte es mit Gewalt verbreitet haben.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Vor Konstantin wuchs die Kirche fast 300 Jahre lang ohne Staat, oft unter Todesgefahr – der Soziologe Rodney Stark schätzt etwa 40 % Wachstum pro Jahrzehnt. Und das stärkste Wachstum des afrikanischen Christentums kam **nach** dem Ende der Kolonialzeit, getragen von Afrikanern selbst (Philip Jenkins). Heute wächst die Kirche in China trotz staatlichen Drucks. Wachstum aus Schwäche ist das Muster des Evangeliums.`,
          followUps: [
            {
              id: 'islam-nicht-durch-schwert',
              objection: `Und der Islam wurde nicht mit dem Schwert verbreitet! „Es gibt keinen Zwang im Glauben" (2:256). Indonesien, das größte muslimische Land, wurde durch Händler und Sufis islamisch.`,
              objectionBy: 'Zakir Naik',
              answer: `Teilweise hast du recht, und ich will fair sein: Indonesien und Westafrika wurden großenteils durch Handel und Sufis islamisch, und in den eroberten Ländern traten die Menschen meist allmählich, über Jahrhunderte, über. Aber der Rahmen war eine politische Herrschaft: In Ägypten blieben die Kopten noch lange Zeit die Mehrheit – unter Kopfsteuer (Dschizya), Einschränkungen und Verfolgungswellen. Das Christentum der ersten drei Jahrhunderte wuchs dagegen gegen die herrschende Macht.`,
              followUps: [
                {
                  id: 'kopten-geschrumpft',
                  objection: `Die Kopten sind von der Mehrheit auf etwa zehn Prozent geschrumpft. Zeigt das nicht, dass sich in Ägypten selbst die Wahrheit des Islam durchgesetzt hat?`,
                  objectionBy: 'Muslimischer Gesprächspartner',
                  answer: `Mit derselben Logik könnte ich sagen: Dass die koptische Kirche 1.400 Jahre unter Druck überlebt hat, ohne Staat, ohne Armee, trotz Steuern und Verfolgung, beweist ihre Wahrheit. Beides wäre falsch – Zahlen unter gesellschaftlichem und finanziellem Druck messen keine Wahrheit. Jesus hat seiner Kirche nie Mehrheiten versprochen, sondern: „Fürchte dich nicht, du kleine Herde" (Lk 12,32).`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christentum-stirbt-in-europa',
      objection: `In Europa werden Kirchen geschlossen und zu Moscheen. Die Jugend verlässt das Christentum. Eure Religion stirbt, unsere lebt.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Ehrlich: Das Christentum verliert in Europa und Nordamerika viele Menschen, vor allem an die Konfessionslosigkeit – das zeigt auch Pew (2025). Aber weltweit wächst die Zahl der Christen weiter, besonders in Afrika und Asien; das Zentrum der Christenheit liegt heute im Süden. Und die Säkularisierung macht auch vor muslimischen Gesellschaften nicht halt, wo Menschen frei sind.`,
      followUps: [
        {
          id: 'islam-immun-saekularisierung',
          objection: `Der Islam ist gegen die Säkularisierung immun, weil er die Wahrheit ist. Das Christentum zerbricht daran, weil es schwach ist.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Widerstand gegen gesellschaftlichen Wandel hat oft mit sozialer Kontrolle und rechtlichem Druck zu tun. Wo dieser Druck nachlässt oder Menschen anonym antworten können, zeigen Umfragen auch unter Muslimen einen deutlichen Rückgang religiöser Bindung – etwa in Iran nach Jahrzehnten der Islamischen Republik. Und selbst wenn der Islam stabiler wäre: Stabilität ist ebenso wenig ein Wahrheitsbeweis wie Wachstum.`,
          sources: [
            { kind: 'wissenschaft', author: 'GAMAAN (Group for Analyzing and Measuring Attitudes in Iran)', work: 'Iranians\' Attitudes Toward Religion: A 2020 Survey Report', year: '2020', status: 'unverified', note: 'Online-Umfrage mit großer Stichprobe; Methodik umstritten. Zahlen vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'umfragen-unserioes',
              objection: `Diese Iran-Umfragen sind Online-Erhebungen von Exil-Oppositionellen. Unseriös!`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Die Methodik solcher Umfragen ist umstritten, das gebe ich zu – ich baue nichts auf eine einzelne Erhebung. Mein Argument braucht sie auch nicht: Zahlen messen soziale Dynamik, nicht Wahrheit – ob sie für dich oder für mich sprechen. Darum lass uns über das reden, was tatsächlich entscheidet: Wer war Jesus, ist er gestorben und auferstanden?`,
            },
          ],
        },
      ],
    },
    {
      id: 'massenbekehrungen-propaganda',
      objection: `Und eure Berichte über Millionen Muslime, die Christen werden, sind doch Missionspropaganda. Niemand kann sie überprüfen.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Manche Berichte sind übertrieben, das stimme ich dir zu. Seriöse Forscher arbeiten mit vorsichtigen Schätzungen – eine Studie von Duane Miller und Patrick Johnstone (2015) kam auf etwa zehn Millionen Christen muslimischer Herkunft weltweit. Aber ich will damit nichts „beweisen" – sonst täte ich, was ich dir gerade vorwerfe. Ich zeige nur, dass das Bild „alle werden Muslime, niemand verlässt den Islam" nicht stimmt.`,
      sources: [
        { kind: 'wissenschaft', author: 'Duane Alexander Miller, Patrick Johnstone', work: 'Believers in Christ from a Muslim Background: A Global Census, Interdisciplinary Journal of Research on Religion 11', year: '2015', status: 'unverified', note: 'Schätzung von rund 10 Mio. Christen muslimischer Herkunft (Stand 2010); Zahl und Fundstelle vor Verwendung prüfen.' },
      ],
      followUps: [
        {
          id: 'warum-dann-zahlen',
          objection: `Wenn Zahlen nichts beweisen – worüber sollen wir dann reden? Was beweist denn deiner Meinung nach die Wahrheit?`,
          objectionBy: 'Muslimischer Gesprächspartner',
          answer: `Über Belege. Zum Beispiel: Ist Jesus gekreuzigt worden und gestorben? Das bezeugen Quellen aus dem 1. Jahrhundert – Paulus, die Evangelien, Josephus, Tacitus –, und die historische Forschung, auch die skeptische, hält es für gesichert. Der Koran bestreitet es rund 600 Jahre später (4:157). Wenn wir hier ehrlich nach den Quellen fragen, kommen wir weiter als mit jeder Statistik.`,
          followUps: [
            {
              id: 'koran-wichtiger-als-quellen',
              objection: `Der Koran ist Gottes Wort und braucht keine historischen Quellen. Was Menschen aufgeschrieben haben, kann sich irren.`,
              objectionBy: 'Muslimischer Gesprächspartner',
              answer: `Dann lass uns ehrlich festhalten: Der Glaube an die Kreuzigungsleugnung beruht nicht auf historischen Belegen, sondern auf dem Vertrauen in einen Text des 7. Jahrhunderts. Auch der Koran beruft sich auf Zeichen und Belege (z. B. 2:111: „Bringt euren Beweis, wenn ihr wahrhaftig seid"). Ich lade dich ein, diesen Maßstab auf beide Seiten anzuwenden – nicht Zahlen, sondern Beweise.`,
              sources: [
                { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:111', quote: `Sag: Bringt euren Beweis vor, wenn ihr wahrhaftig seid.`, original: 'qul hātū burhānakum in kuntum ṣādiqīn', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/2/111' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'fitra-zieht-zum-islam',
      objection: `Konvertiten sagen, der Islam fühle sich einfach natürlich an – wie Heimkommen. Das ist die Fitra. Das Christentum muss man den Menschen mit komplizierter Theologie einreden.`,
      objectionBy: 'Muslimische Konvertitin (typisches Zeugnis)',
      answer: `Ich nehme solche Erfahrungen ernst. Aber auch viele Muslime, die Christen werden, beschreiben ihren Weg als Heimkommen – manche berichten sogar von Träumen, in denen ihnen Jesus begegnete, wie Nabeel Qureshi in seinem Buch. Erfahrungen gibt es auf beiden Seiten; deshalb können sie allein nicht entscheiden. „Fühlt sich natürlich an" ist kein Wahrheitskriterium.`,
      followUps: [
        {
          id: 'traeume-unsinn',
          objection: `Diese Jesus-Träume sind Einbildung oder Missionspropaganda.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Ich baue meinen Glauben nicht auf Träume – genau deshalb akzeptiere ich auch „es fühlt sich natürlich an" nicht als Beweis für den Islam. Gleicher Maßstab für beide Seiten: Erfahrung kann Menschen in Bewegung setzen, aber die Wahrheitsfrage entscheidet sich an öffentlich prüfbaren Gründen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Wachstum Wahrheit beweist – war dann das Christentum wahr, als es in den ersten drei Jahrhunderten schneller wuchs als jede andere Religion?`,
    `Was sagt der Koran über die Meinung der Mehrheit (6:116; 12:103)?`,
    `Wie viel des Wachstums des Islam beruht auf Geburten und wie viel auf freien Bekehrungen?`,
    `Sollte jeder Mensch die Freiheit haben, seine Religion zu wechseln – in beide Richtungen?`,
    `Welche Gründe – nicht Zahlen – haben dich vom Islam überzeugt?`,
  ],
  avoid: [
    `Die Pew-Zahlen nicht bestreiten oder als „Lüge" abtun – sie sind solide.`,
    `Keine Angstrhetorik („Islamisierung", „Eurabia", „Bevölkerungsaustausch"). Das ist unchristlich, politisch vergiftet und beendet jedes Gespräch.`,
    `Nicht mit eigenen Zahlenwundern antworten („Millionen Muslime werden Christen") – du verfällst sonst demselben Fehlschluss.`,
    `Muslimische Familien nicht wegen ihres Kinderreichtums abwerten.`,
  ],
  concessions: [
    `Der Islam ist derzeit die am schnellsten wachsende große Religion (Pew 2015/2025).`,
    `Das Christentum verliert in Europa und Nordamerika deutlich an Mitgliedern, vor allem an die Konfessionslosigkeit.`,
    `Auch die Ausbreitung des Christentums war nicht immer frei von Zwang und politischer Macht (z. B. in Teilen der Kolonialgeschichte).`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Pew Research Center', work: 'The Future of World Religions: Population Growth Projections, 2010–2050', year: '2015', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Pew Research Center', work: 'How the Global Religious Landscape Changed From 2010 to 2020', year: '2025', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Next Christendom', year: '2002', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Demografie', 'Pew', 'Wachstum', 'Konversion', 'Säkularisierung', 'Mehrheitsargument'],
  related: [
    'soziologie/saekularisierung-unaufhaltsam',
    'pluralismus/nur-christ-wegen-geburt',
    'islam-heil-gottesbild/islam-einfacher-vernuenftiger',
    'islam-kreuzigung/nicht-gekreuzigt-4-157',
    'religion-gewalt/religion-verursacht-kriege',
  ],
};

export default claim;
