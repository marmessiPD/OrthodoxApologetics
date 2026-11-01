import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'eroberung-kanaans',
  title: `„Die Eroberung Kanaans widerspricht der Archäologie (Jericho, Ai)."`,
  proponents: [
    { name: 'Kathleen Kenyon', role: 'Archäologin, Ausgräberin von Jericho 1952–1958 (†1978)', work: 'Digging Up Jericho (1957)' },
    { name: 'Israel Finkelstein', role: 'Archäologe, Universität Tel Aviv', work: 'The Archaeology of the Israelite Settlement (1988); The Bible Unearthed (2001)' },
    { name: 'William G. Dever', role: 'Archäologe, University of Arizona (emer.)', work: 'Who Were the Early Israelites? (2003)' },
    { name: 'Joseph A. Callaway', role: 'Archäologe, Ausgräber von et-Tell/Ai (†1988)', work: 'Grabungsberichte zu Ai (1964–1972)' },
  ],
  steelman: `Das Josuabuch schildert einen schnellen, totalen Feldzug: Jerichos Mauern stürzen ein, Ai wird verbrannt, ganz Kanaan in wenigen Jahren erobert. Doch Kathleen Kenyon zeigte, dass Jericho um 1550 v. Chr. zerstört wurde und zur Zeit Josuas (ob 1400 oder 1250) unbewohnt oder höchstens ein Weiler war. Ai – hebräisch „die Ruine" – war (wenn mit et-Tell gleichzusetzen) zwischen ca. 2400 und 1200 v. Chr. verlassen. Die Hochlanddörfer der frühen Eisenzeit entstanden allmählich und friedlich; ihre Kultur ist im Kern kanaanäisch. Die Eroberungserzählungen sind ätiologische Legenden, die Ruinen erklären sollten, und Teil einer späten nationalen Ideologie.`,
  biblical: {
    summary: `Wer das Josuabuch genau liest, findet keine flächendeckende Zerstörung. Nur drei Städte werden ausdrücklich verbrannt: Jericho, Ai und Hazor (Jos 6,24; 8,28; 11,13). Josua 13,1 und das ganze Richterbuch betonen, dass „noch sehr viel Land übrig" war und viele Städte nicht eingenommen wurden (Ri 1,19–36). Die Bibel selbst beschreibt also einen langen, unvollständigen Prozess – Feldzüge mit Siegesrhetorik, gefolgt von einer allmählichen Ansiedlung.`,
    detail: `**Die Sprache altorientalischer Siegesberichte:** Formeln wie „er ließ nichts übrig" (Jos 10,40) sind typische Hyperbel. Dasselbe Josuabuch setzt voraus, dass die Kanaaniter weiterhin im Land leben (Jos 15,63; 16,10; 23,12–13). K. Lawson Younger hat gezeigt, dass assyrische, hethitische und ägyptische Feldzugsberichte genau diese Rhetorik verwenden. Bestes Beispiel: Merneptah behauptet um 1208 v. Chr., Israels „Same ist nicht mehr" – und Israel existierte weiter.`,
    sources: [
      { kind: 'bibel', work: 'Josua', ref: '13,1', quote: `Da nun Josua alt war und wohl betagt, sprach der HERR zu ihm: Du bist alt geworden und wohl betagt, und des Landes ist noch sehr viel übrig einzunehmen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Josua', ref: '11,13', quote: `Israel verbrannte keine der Städte, die auf ihren Hügeln standen – nur Hazor verbrannte Josua.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Richter', ref: '1,19–36', quote: `Liste der Städte und Gebiete, deren Bewohner die Stämme nicht vertrieben.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts. A Study in Ancient Near Eastern and Biblical History Writing', year: '1990', quote: `Die Eroberungsberichte in Josua folgen den hyperbolischen Konventionen altorientalischer Feldzugsberichte.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Mehrheitsmeinung: Die Hochlandbesiedlung des 12.–11. Jh. v. Chr. war überwiegend ein allmählicher Prozess; ein rascher, umfassender Eroberungsfeldzug im 13. Jh. ist archäologisch nicht nachweisbar. Jericho und Ai sind die schwierigsten Fälle für den Bibelleser. Hazor dagegen zeigt eine gewaltsame Zerstörung mit Brand im 13. Jh., die der Ausgräber Amnon Ben-Tor den Israeliten zuschreibt.`,
    detail: `**Jericho (Tell es-Sultan):**
- John Garstang (1930er): Zerstörung von „Stadt IV" um 1400 v. Chr., eingestürzte Mauern – passend zur Frühdatierung.
- Kathleen Kenyon (1950er): Zerstörung um 1550 v. Chr. (Ende der Mittelbronzezeit), danach höchstens geringe Besiedlung; die spätbronzezeitlichen Schichten seien weitgehend erodiert.
- Bryant Wood (Biblical Archaeology Review 1990): Neubewertung von Keramik, Skarabäen und Schichtenfolge – Zerstörung um 1400 v. Chr. Erwiderung u. a. von Piotr Bienkowski. Radiokarbondaten (Bruins/van der Plicht 1995) stützen eher die Datierung um die Mitte des 16. Jh.
- Beobachtungen, die unabhängig von der Datierung zum Bericht passen: volle Getreidekrüge (kurze Belagerung, Zerstörung nach der Ernte, vgl. Jos 3,15; 5,10), Brandzerstörung (Jos 6,24), eingestürzte Lehmziegelmauern am Fuß der Stützmauer.

**Ai:** et-Tell war zwischen Früh- und Eisenzeit verlassen (Marquet-Krause, Callaway). Die Gleichsetzung ist aber nicht sicher; Bryant Wood und Scott Stripling gruben in Khirbet el-Maqatir eine kleine spätbronzezeitliche Festung aus – eine Minderheitsposition.

**Hazor:** Brandzerstörung der spätbronzezeitlichen Stadt mit verstümmelten Statuen ägyptischer und kanaanäischer Herrscher; Ben-Tor hält Ägypter oder rivalisierende Kanaaniter als Täter für unwahrscheinlich und denkt an Israel (vgl. Jos 11,10–13).`,
    sources: [
      { kind: 'gegner', author: 'Kathleen M. Kenyon', work: 'Digging Up Jericho', year: '1957', quote: `Jericho wurde am Ende der Mittelbronzezeit zerstört; für die Zeit Josuas gibt es kaum Siedlungsspuren.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Bryant G. Wood', work: 'Did the Israelites Conquer Jericho? A New Look at the Archaeological Evidence. Biblical Archaeology Review 16/2', year: '1990', quote: `Die Zerstörung von Stadt IV sei um 1400 v. Chr. anzusetzen und entspreche dem biblischen Bericht.`, status: 'paraphrase', note: 'Minderheitsposition; von Piotr Bienkowski und anderen kritisiert.' },
      { kind: 'wissenschaft', author: 'Hendrik J. Bruins, Johannes van der Plicht', work: 'Tell es-Sultan (Jericho): Radiocarbon Results of Short-Lived Cereal and Multiyear Charcoal Samples from the End of the Middle Bronze Age. Radiocarbon 37', year: '1995', quote: `Radiokarbondaten von verkohltem Getreide sprechen für eine Zerstörung im 16. Jh. v. Chr.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Amnon Ben-Tor', work: 'Grabungsberichte zu Hazor', quote: `Die spätbronzezeitliche Stadt wurde durch Brand zerstört; als Urheber kommen am ehesten die Israeliten in Frage.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Lies das Josuabuch genau: Es nennt nur drei verbrannte Städte – Jericho, Ai und Hazor – und sagt selbst, dass noch „sehr viel Land übrig" war. Das Richterbuch beschreibt eine lange, allmähliche Ansiedlung. Das passt erstaunlich gut zum archäologischen Bild neuer Hochlanddörfer. Hazor zeigt tatsächlich eine Brandzerstörung im 13. Jahrhundert. Bei Jericho und Ai gibt es echte, offene Datierungsprobleme – die gebe ich zu, aber sie widerlegen nicht die Landnahme.`,
  keyPoints: [
    `**Die Bibel beschreibt keinen Blitzkrieg:** nur drei verbrannte Städte; Jos 13,1 und Ri 1 betonen das Unvollständige.`,
    `**Hyperbel ist Gattungsmerkmal:** „Er ließ nichts übrig" ist Siegesrhetorik wie in allen altorientalischen Feldzugsberichten – Merneptah „vernichtete" Israel, das danach weiterlebte.`,
    `**Hochlandbesiedlung:** Hunderte neue Dörfer im 12.–11. Jh., ohne Schweineknochen, mit Vierraumhäusern – passt zur allmählichen Ansiedlung, wie Josua und Richter sie beschreiben.`,
    `**Hazor:** Brandzerstörung im 13. Jh. mit geschändeten Götter- und Königsstatuen – nach dem Ausgräber Ben-Tor wohl israelitisch.`,
    `**Jericho:** Datierung umstritten (Kenyon vs. Wood); Erosion hat spätere Schichten weitgehend zerstört. Ehrlich: offenes Problem.`,
    `**Ai:** Die Gleichsetzung mit et-Tell ist unsicher; der Name bedeutet „die Ruine".`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Kenner altorientalischer Feldzugsberichte',
      text: `Kitchen vergleicht Josua mit den Annalen Thutmosis' III., Ramses' II. und assyrischer Könige: Überall finden sich dieselben Muster – Schnellfeldzüge mit wenigen Zerstörungen, gefolgt von langer Konsolidierung, und triumphalistische Totalitätsformeln. Er betont, dass die Israeliten nach dem Josuabuch die eroberten Städte meist nicht zerstörten, sondern später bewohnten – man darf also keine flächendeckende Zerstörungsschicht erwarten. Was die Archäologie zeigt, ist nach ihm kein Widerspruch zum Text, sondern zu einer Fehllektüre des Textes.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 5', year: '2003', quote: `Josua beschreibt Überfälle und wenige Zerstörungen, keine flächendeckende Vernichtung; die Rhetorik entspricht ägyptischen und assyrischen Feldzugsberichten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'bryant-wood',
      role: 'als Archäologe der Spätbronzezeit',
      text: `Wood hat die Grabungsdaten von Garstang und Kenyon neu ausgewertet und argumentiert, Kenyons Datierung beruhe zu sehr auf dem Fehlen bestimmter importierter Keramik in einem armen Randgebiet. Er verweist auf lokale Keramik, auf Skarabäen und auf die Befunde, die dem biblischen Bericht entsprechen: eingestürzte Lehmziegelmauern, ein verheerender Brand und volle Vorratskrüge, die auf eine kurze Belagerung im Frühjahr schließen lassen. Seine Spätdatierung ist eine Minderheitsposition; sie zeigt aber, dass Kenyons Ergebnis nicht das letzte Wort ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Bryant G. Wood', work: 'Did the Israelites Conquer Jericho? Biblical Archaeology Review 16/2', year: '1990', quote: `Neubewertung der Keramik und der Schichtenfolge von Jericho.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'origenes',
      role: 'als Ausleger des Josuabuches',
      text: `Origenes predigte über das Josuabuch und las die Kriege vor allem geistlich: als Kampf des Christen gegen die Leidenschaften. Für die Apologetik ist wichtig, dass schon die Alte Kirche die Josua-Erzählungen nicht als Aufruf zur Gewalt las und ihre theologische Aussage – Gott gibt seinem Volk das Land und richtet die Sünde – vom Detailgrad historischer Rekonstruktion unterschied.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Josua', year: 'ca. 240', quote: `Die Kriege Josuas als Bild des geistlichen Kampfes.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'jericho-unbewohnt',
      objection: `Kenyon hat bewiesen: Jericho war zur Zeit Josuas unbewohnt. Es gab keine Mauern, die hätten einstürzen können.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Kenyon datierte die große Zerstörung auf etwa 1550 v. Chr. – das ist bis heute die Mehrheitsmeinung, und ich gebe zu, dass das ein echtes Problem ist. Aber Kenyon selbst rechnete mit massiver Erosion der späteren Schichten; Bryant Wood hat ihre Datierung angefochten; und viele Details der Zerstörung – Brand, eingestürzte Mauern, volle Getreidekrüge – passen auffällig zum biblischen Bericht.`,
      followUps: [
        {
          id: 'radiokarbon-jericho',
          objection: `Die Radiokarbondaten von Bruins und van der Plicht datieren die Zerstörung ins 16. Jahrhundert. Wood ist erledigt.`,
          objectionBy: 'William Dever',
          answer: `Die Radiokarbondaten stützen tatsächlich eher Kenyon, das muss man fair sagen. Daraus folgen zwei ehrliche Optionen: Entweder ist unsere Chronologie der Spätbronzezeit oder die Zuordnung der Proben noch nicht endgültig – oder die Erzählung von Jericho bewahrt eine Erinnerung, deren archäologische Spuren in der heutigen Ruine nicht mehr eindeutig fassbar sind. Was ich nicht tue, ist zu behaupten, die Archäologie habe Jericho bestätigt.`,
          followUps: [
            {
              id: 'aetiologie',
              objection: `Die einfachste Erklärung ist: Die Israeliten sahen die Ruinen und erfanden eine Geschichte, um sie zu erklären – eine Ätiologie.`,
              objectionBy: 'Dan McClellan',
              answer: `Das ist möglich, aber nicht zwingend. Ätiologische Notizen im Josuabuch („bis auf diesen Tag") zeigen, dass der Erzähler Ruinen seiner Zeit kannte – nicht, dass er die Ereignisse erfand. Und die Ätiologie-These erklärt Hazor nicht, wo eine Brandzerstörung im 13. Jahrhundert gut zum Text passt.`,
              followUps: [
                {
                  id: 'hazor-aufstand',
                  objection: `Auch Hazor ist kein Beweis. Sharon Zuckerman hat gezeigt, dass die Stadt lange im Niedergang war und vermutlich durch einen inneren Aufstand gegen die Elite zerstört wurde – nicht durch Eroberer von außen.`,
                  objectionBy: 'William Dever',
                  answer: `Zuckermans Deutung ist eine ernsthafte Alternative, und ich stelle Hazor deshalb nicht als „Beweis" dar. Aber Ben-Tor, der jahrzehntelang dort gegraben hat, hält an fremden Tätern fest: Die gezielte Schändung von Götter- und Königsstatuen, die abgeschlagenen Köpfe und Hände, passen zu Eroberern mit einer anderen Religion. Ehrlich ist: Zwei Ausgräber, zwei Deutungen. Für die Behauptung „die Archäologie widerspricht der Eroberung" reicht ein offener Befund aber gerade nicht.`,
                  detail: `Zuckerman (Journal of Mediterranean Archaeology 2007) deutete die Zerstörung als Folge einer sozialen Krise und rituell begleiteten „Beendigung" der Palastkultur. Ben-Tor verweist darauf, dass weder Ägypter (die eigene Pharaonenstatuen kaum schänden würden) noch Seevölker (die so weit im Landesinneren nicht belegt sind) gut in Frage kommen. Beide Sichtweisen werden in der Fachwelt vertreten. Das Josuabuch nennt Hazor ausdrücklich als einzige Stadt im Norden, die verbrannt wurde (Jos 11,13) – eine auffällig präzise Angabe.`,
                  sources: [
                    { kind: 'gegner', author: 'Sharon Zuckerman', work: 'Anatomy of a Destruction: Crisis Architecture, Termination Rituals and the Fall of Canaanite Hazor. Journal of Mediterranean Archaeology 20', year: '2007', quote: `Die Zerstörung Hazors als Ergebnis innerer sozialer Spannungen und eines langen Niedergangs.`, status: 'paraphrase' },
                    { kind: 'bibel', work: 'Josua', ref: '11,13', quote: `Doch verbrannte Israel keine Städte, die auf Hügeln standen, sondern nur Hazor verbrannte Josua.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  followUps: [
                    {
                      id: 'jabin-zweimal',
                      objection: `Und dann regiert in Richter 4 wieder ein König Jabin in Hazor – derselbe Name, dieselbe Stadt, die Josua angeblich niedergebrannt hat. Das ist eine Dublette, keine Geschichte.`,
                      objectionBy: 'Joel Baden',
                      answer: `Die Spannung ist echt und schon den Vätern aufgefallen. Eine mögliche Lösung: „Jabin" könnte ein Dynastiename gewesen sein – in den Mari-Texten des 18. Jahrhunderts heißt ein König von Hazor bereits Ibni-Addu, was sprachlich zu „Jabin" passt. Dann wäre Jabin in Richter 4 ein späterer Herrscher derselben Linie. Das ist eine Hypothese, kein Beweis; aber auch die Dublette ist nur eine Hypothese. Ein Erzähler, der eine Doppelung bemerkt hätte, hätte sie leicht glätten können – dass er es nicht tat, spricht eher für das Festhalten an überlieferten Daten.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 5', year: '2003', quote: `Der Name eines Königs von Hazor in den Mari-Texten (Ibni-Addu) als Hinweis auf einen wiederkehrenden Herrschernamen.`, status: 'paraphrase' },
                        { kind: 'bibel', work: 'Richter', ref: '4,2', quote: `Jabin, der König der Kanaaniter, der zu Hazor regierte.`, status: 'paraphrase' },
                      ],
                      questionsBack: [`Warum hätte ein Redaktor, der Josua und Richter zusammenstellte, eine so offensichtliche Doppelung stehen lassen, wenn er frei erfand?`],
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
      id: 'ai-war-ruine',
      objection: `Ai heißt „die Ruine", und et-Tell war tausend Jahre verlassen. Die Geschichte erklärt eine Ruine, sie berichtet keine Eroberung.`,
      objectionBy: 'Joseph A. Callaway',
      answer: `Gerade weil „Ai" einfach „die Ruine" bedeutet, ist die Gleichsetzung mit et-Tell unsicher: Viele Orte könnten so geheißen haben. Archäologen wie Bryant Wood haben in Khirbet el-Maqatir eine kleine Festung der Spätbronzezeit gefunden, die zu den Angaben über Lage und Größe besser passt. Das ist eine Minderheitsthese – aber sie zeigt, dass der Fall Ai an einer Ortsidentifikation hängt, nicht am Text.`,
      followUps: [
        {
          id: 'maqatir-apologetik',
          objection: `Khirbet el-Maqatir wurde von einem apologetischen Verein ausgegraben. Das ist keine unabhängige Wissenschaft.`,
          objectionBy: 'William Dever',
          answer: `Die Motivation der Ausgräber ist kein Gegenargument gegen ihre Befunde – sonst müsste man auch säkulare Archäologen nach ihrer Weltanschauung beurteilen. Entscheidend sind publizierte Daten und ihre Prüfung. Ich stelle Maqatir ausdrücklich als Minderheitsposition dar; mein Punkt ist nur, dass „Ai widerlegt die Bibel" eine ungesicherte Ortsgleichung voraussetzt.`,
          followUps: [
            {
              id: 'ai-zwoelftausend',
              objection: `Selbst wenn Maqatir Ai wäre: Das war eine winzige Festung. Josua 8 lässt dort 12.000 Menschen sterben. Die Zahlen sind absurd.`,
              objectionBy: 'Kipp Davis',
              answer: `Die großen Zahlen des AT sind ein bekanntes Problem, und ich verteidige sie nicht wörtlich. Das hebräische *eleph* kann „tausend" heißen, aber auch eine Sippe oder militärische Einheit – so schlugen es George Mendenhall und später Colin Humphreys vor. Dazu kommt die Konvention der Siegesrhetorik. Das ist ehrlich: Die Zahl ist vermutlich nicht als Volkszählung gemeint. Am Kern – eine kleine Stadt wird nach einer ersten Niederlage eingenommen – ändert das nichts.`,
              detail: `Die *eleph*-Deutung ist eine Hypothese mit Stärken und Schwächen; manche Texte (z. B. Num 1) lassen sich damit elegant lesen, andere schwerer. Wichtig für den Laien: Nicht jede Zahl verteidigen, sondern zeigen, dass Zahlen in antiken Feldzugsberichten generell rhetorisch überhöht sind – auch in assyrischen Annalen, die niemand deshalb für reine Fiktion hält.`,
              sources: [
                { kind: 'fachliteratur', author: 'George E. Mendenhall', work: 'The Census Lists of Numbers 1 and 26. Journal of Biblical Literature 77', year: '1958', quote: `Hebräisch eleph bezeichnet in den Musterungslisten ursprünglich eine Sippen- oder Truppeneinheit, nicht die Zahl Tausend.`, status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Colin J. Humphreys', work: 'The Number of People in the Exodus from Egypt. Vetus Testamentum 48', year: '1998', quote: `Neuberechnung der Exoduszahlen unter der Annahme, dass eleph eine Truppeneinheit meint.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'friedliche-ansiedlung',
      objection: `Die Hochlanddörfer entstanden allmählich und friedlich. Es gab keine Eroberung, sondern eine soziale Entwicklung unter Kanaanäern.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Eine allmähliche Ansiedlung beschreibt die Bibel selbst: Das Richterbuch zeigt Generationen des Nebeneinanders, Kämpfe und Anpassung. Josua berichtet von wenigen Schlüsselfeldzügen; die eigentliche Landnahme war ein langer Prozess. Die neuen Dörfer, ohne Schweineknochen und mit eigener Bauweise, passen gut zu einer Gruppe mit eigener Identität, die sich im Hochland niederließ.`,
      followUps: [
        {
          id: 'josua-gegen-richter',
          objection: `Dann widerspricht Josua dem Richterbuch: Einmal ist alles erobert, dann bleibt fast alles übrig.`,
          objectionBy: 'Bart Ehrman',
          answer: `Nur wenn man die Gattung übersieht. Schon das Josuabuch selbst sagt beides: Totalitätsformeln (Jos 10,40) und „noch sehr viel Land übrig" (Jos 13,1), dazu Kanaaniter, die weiter im Land wohnen (Jos 15,63; 16,10). Ein Autor, der sich in zwei Kapiteln so offensichtlich „widerspricht", benutzt offenbar Siegesrhetorik bewusst – wie ägyptische und assyrische Könige auch.`,
          questionsBack: [`Hältst du Merneptahs Behauptung, Israels „Same ist nicht mehr", für einen Widerspruch zur weiteren Existenz Israels – oder für Rhetorik?`],
        },
      ],
    },
    {
      id: 'ethisches-problem',
      objection: `Ehrlich gesagt bin ich froh, dass es keine Eroberung gab – denn sonst hätte Gott einen Völkermord befohlen.`,
      objectionBy: 'Dan McClellan',
      answer: `Die ethische Frage ist berechtigt und verdient eine eigene, ehrliche Antwort. Hier halte ich nur fest: Gerade die Gattungsanalyse – Hyperbel, Totalitätsformeln, das Weiterleben der Kanaaniter – zeigt, dass der Text keinen systematischen Vernichtungsfeldzug gegen ein ganzes Volk beschreibt. Archäologie und Ethik führen hier zur selben Lesehilfe.`,
      followUps: [
        {
          id: 'hyperbel-ausrede',
          objection: `„Hyperbel" ist eine bequeme Ausrede, wenn der Text unbequem wird.`,
          objectionBy: 'Bart Ehrman',
          answer: `Es wäre eine Ausrede, wenn sie nur hier auftauchte. Aber die Hyperbel ist im Text selbst erkennbar – dieselben Völker, die „ausgerottet" wurden, leben wenige Kapitel später weiter – und sie ist in Dutzenden altorientalischer Feldzugsberichte belegt. Das ist philologische Methode, nicht Apologetik.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Städte verbrennt Josua nach dem Text tatsächlich?`,
    `Wie erklärst du, dass das Josuabuch selbst sagt, es sei „noch sehr viel Land übrig"?`,
    `Wie ordnest du die Brandzerstörung von Hazor im 13. Jahrhundert ein?`,
    `Ist die Gleichsetzung von Ai mit et-Tell für dich gesichert – und warum?`,
  ],
  avoid: [
    `Behaupten, Jericho sei „archäologisch bestätigt" – der Datierungsstreit ist offen, die Mehrheit folgt Kenyon.`,
    `Sensationsmeldungen (z. B. Fluchtafel vom Berg Ebal) als gesicherte Beweise ausgeben, solange die Fachdiskussion läuft.`,
    `Die Archäologen der Gegenseite als voreingenommen abtun.`,
  ],
  concessions: [
    `Die Datierung der Zerstörung Jerichos spricht nach Mehrheitsmeinung gegen einen Fall der Stadt zur Zeit Josuas.`,
    `Für Ai hängt alles an einer ungesicherten Ortsidentifikation; die Daten sind dünn.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'K. Lawson Younger Jr.', work: 'Ancient Conquest Accounts', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
    { kind: 'gegner', author: 'Israel Finkelstein', work: 'The Archaeology of the Israelite Settlement', year: '1988', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Jericho', 'Ai', 'Hazor', 'Landnahme', 'Josua'],
  related: ['at-archaeologie/exodus-nie-passiert', 'at-ethik/kanaaniter-voelkermord'],
};

export default claim;
