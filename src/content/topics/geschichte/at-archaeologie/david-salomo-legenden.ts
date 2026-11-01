import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'david-salomo-legenden',
  title: `„David und Salomo sind Legenden."`,
  proponents: [
    { name: 'Israel Finkelstein', role: 'Archäologe, Universität Tel Aviv', work: 'David and Solomon (mit N. A. Silberman, 2006); „Low Chronology" (1996)' },
    { name: 'Thomas L. Thompson', role: 'Alttestamentler, Kopenhagener Schule', work: 'The Mythic Past (1999)' },
    { name: 'Philip R. Davies', role: 'Alttestamentler, Sheffield (†2018)', work: 'In Search of „Ancient Israel" (1992)' },
    { name: 'Niels Peter Lemche', role: 'Alttestamentler, Kopenhagen', work: 'The Israelites in History and Tradition (1998)' },
  ],
  steelman: `In den 1990er-Jahren vertrat die „Kopenhagener Schule", David sei so historisch wie König Artus: Es gebe keine einzige zeitgenössische Inschrift, Jerusalem sei im 10. Jahrhundert v. Chr. ein Dorf gewesen, und die Bibel sei ein Werk der persischen oder hellenistischen Zeit. Auch nach dem Fund der Tel-Dan-Stele bleibt der Kern der Kritik: Selbst wenn ein David existierte, war er bestenfalls ein Häuptling eines Hochlandstammes. Das „Großreich" vom Euphrat bis Ägypten, Salomos Tempel, Paläste, 700 Frauen und Handelsflotten sind eine Rückprojektion späterer Könige. Die Monumentalbauten, die Yigael Yadin Salomo zuschrieb, gehören nach Finkelsteins „Niedrigchronologie" ins 9. Jahrhundert, in die Zeit der Omriden.`,
  biblical: {
    summary: `Die Samuel- und Königsbücher schildern David und Salomo nicht als mythische Heroen, sondern ungeschminkt: Davids Ehebruch, Mord, Familienchaos und Aufstände; Salomos Götzendienst und Fronarbeit, die zur Reichsteilung führen. Die Texte nennen Quellen („Chronik Salomos", 1 Kön 11,41) und sind voller politischer Details. Wie groß das Reich tatsächlich war, ist eine historische Frage – die Bibel selbst zeigt, dass Davids Herrschaft auf Personalunion und Vasallenverträgen beruhte, nicht auf einer flächendeckenden Verwaltung.`,
    detail: `- **1 Kön 9,15:** Salomo baut „Hazor, Megiddo und Geser" – genau die Orte, an denen Yigael Yadin in den 1950er/60er-Jahren baugleiche Sechskammertore fand.
- **Ungeschminkte Darstellung:** Legenden glorifizieren; die Samuelbücher enthalten eine der schonungslosesten Herrscherkritiken der Antike (2 Sam 11–12).
- **Reichsgröße:** „Herrschaft vom Strom bis …" (1 Kön 5,1) beschreibt Oberhoheit über Vasallen, nicht einen zentral verwalteten Flächenstaat.`,
    sources: [
      { kind: 'bibel', work: '1. Könige', ref: '9,15', quote: `Salomo hob Fronarbeiter aus, um das Haus des HERRN, seinen Palast, den Millo, die Mauer Jerusalems sowie Hazor, Megiddo und Geser zu bauen.`, status: 'paraphrase' },
      { kind: 'bibel', work: '2. Samuel', ref: '12,7', quote: `Da sprach Nathan zu David: Du bist der Mann!`, translation: 'Luther 1912', status: 'verbatim', note: 'Hofberichterstattung, die den König als Ehebrecher und Mörder entlarvt – untypisch für eine Heldenlegende.' },
      { kind: 'bibel', work: '1. Könige', ref: '11,41', quote: `Verweis auf die „Chronik Salomos" als Quelle für die übrigen Taten Salomos.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Seit 1993 bestreitet kaum noch ein Fachmann, dass David eine historische Person war: Die aramäische **Tel-Dan-Stele** (9. Jh. v. Chr.) nennt das „Haus Davids" (*bytdwd*) als Dynastie Judas. Umstritten ist die **Größe** seines Reiches und Salomos Bautätigkeit. Die „Niedrigchronologie" Finkelsteins verlegt viele Monumentalbauten ins 9. Jh.; Amihai Mazar, Yosef Garfinkel und andere halten an einer (modifizierten) traditionellen Chronologie fest. Die Debatte ist offen und wird zunehmend mit Radiokarbondaten geführt.`,
    detail: `**Funde und Debatten:**
- **Tel-Dan-Stele** (gefunden 1993/94 von Avraham Biran): Ein aramäischer König (wohl Hasaël) rühmt sich, den König von Israel und einen König „vom Haus Davids" getötet zu haben (vgl. 2 Kön 8–9). Nur rund 150 Jahre nach David wird eine Dynastie nach ihm benannt.
- **Mescha-Stele** (gefunden 1868): André Lemaire las 1994 in Zeile 31 ebenfalls „Haus Davids". 2019 schlugen Finkelstein, Na'aman und Römer stattdessen „Balak" vor; neue Bildanalysen (Michael Langlois) stützen wieder Lemaires Lesung. Offene Frage.
- **Khirbet Qeiyafa** (Garfinkel/Ganor, 2007–2013): befestigte Stadt mit Kasemattenmauer und zwei Toren, radiokarbondatiert ca. 1020–980 v. Chr., keine Schweineknochen – nach Garfinkel ein judäisches Verwaltungszentrum der frühen Königszeit. Finkelstein und andere schlagen andere Zuordnungen vor (z. B. Sauls Herrschaft oder ein kanaanäisches Gemeinwesen).
- **Eilat Mazar** (ab 2005): „Großer Steinbau" in der Davidsstadt, von ihr als Davids Palast gedeutet – Datierung und Deutung stark umstritten.
- **Timna** (Erez Ben-Yosef): Im 10. Jh. organisierte eine weitgehend nomadische edomitische Gesellschaft eine hochkomplexe Kupferproduktion – ohne Monumentalbauten. Ben-Yosef folgert („The Architectural Bias in Current Biblical Archaeology", Vetus Testamentum 2019), dass fehlende Monumentalarchitektur nicht beweist, dass es kein komplexes Gemeinwesen gab.
- **Sechskammertore** in Hazor, Megiddo, Geser (Yadin) – ihre Datierung ist Kern der Chronologie-Debatte.`,
    sources: [
      { kind: 'sonstiges', work: 'Tel-Dan-Stele (Israel Museum), Z. 9', year: 'ca. 840 v. Chr.', quote: `„… König vom Haus Davids …"`, original: `bytdwd`, status: 'verbatim', note: 'Lesung allgemein anerkannt; einzelne Minimalisten schlugen andere Deutungen vor, die sich nicht durchsetzten.' },
      { kind: 'fachliteratur', author: 'André Lemaire', work: '„House of David" Restored in Moabite Inscription. Biblical Archaeology Review 20/3', year: '1994', quote: `Lesung „Haus Davids" in Zeile 31 der Mescha-Stele.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Israel Finkelstein, Nadav Na\'aman, Thomas Römer', work: 'Restoring Line 31 in the Mesha Stele. Tel Aviv 46', year: '2019', quote: `Schlagen statt „Haus Davids" den Namen „Balak" vor.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Erez Ben-Yosef', work: 'The Architectural Bias in Current Biblical Archaeology. Vetus Testamentum 69', year: '2019', quote: `Komplexe, auch nomadisch geprägte Gesellschaften können ohne monumentale Architektur existieren; deren Fehlen ist kein Beweis gegen ein frühes Königtum.`, status: 'paraphrase', note: 'Ben-Yosef ist kein Apologet, sondern säkularer Archäologe.' },
      { kind: 'gegner', author: 'Israel Finkelstein, Neil A. Silberman', work: 'David and Solomon. In Search of the Bible\'s Sacred Kings', year: '2006', quote: `David war historisch, aber eher ein lokaler Hochland-Häuptling; Salomos Glanz ist eine spätere Idealisierung.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dass David eine Legende sei, vertritt heute kaum noch ein Fachmann. Seit 1993 haben wir die Tel-Dan-Stele: Ein aramäischer König nennt im 9. Jahrhundert v. Chr. Juda das „Haus Davids" – so benennt man Dynastien nach ihrem realen Gründer. Gestritten wird nur noch über die Größe seines Reiches. Und dass man in Jerusalem wenig Monumentales findet, beweist wenig: Die Stadt ist seit 3000 Jahren ununterbrochen bebaut, und selbst nomadisch geprägte Gesellschaften wie Edom waren damals hochorganisiert, ohne Paläste zu hinterlassen.`,
  keyPoints: [
    `**Tel-Dan-Stele (9. Jh. v. Chr.):** „Haus Davids" als Name der judäischen Dynastie – ein außerbiblischer Beleg von Feindesseite, nur gut 150 Jahre nach David.`,
    `**Die Debatte hat sich verschoben:** von „David hat nie existiert" (Kopenhagener Schule) zu „Wie groß war sein Reich?" – ein großer Rückzug der Minimalisten.`,
    `**Khirbet Qeiyafa:** befestigte judäische (oder zumindest hochlandbezogene) Stadt um 1000 v. Chr. – zeigt Organisation und Bauvermögen in genau der fraglichen Zeit.`,
    `**Abwesenheit ist schwach:** Jerusalem ist dicht überbaut und kaum ausgrabbar; Timna zeigt, dass komplexe Gesellschaften ohne Monumentalbauten existierten (Ben-Yosef 2019).`,
    `**Sechskammertore** in Hazor, Megiddo und Geser passen zu 1 Kön 9,15; ihre Datierung ist umstritten, aber nicht widerlegt.`,
    `**Legenden glorifizieren, die Samuelbücher entlarven:** Ehebruch, Mord und Familienkriege des Königs sprechen für Hofgeschichtsschreibung, nicht für Mythos.`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Kenner altorientalischer Königsinschriften',
      text: `Kitchen ordnet David und Salomo in die Lage des 10. Jahrhunderts ein: Ägypten und Assyrien waren schwach, sodass im Levanteraum kleine Reiche wie das davidische entstehen konnten – vergleichbar mit anderen kurzlebigen „Mini-Imperien" der Zeit. Er betont, dass Salomos Reich nach dem biblischen Bild aus einem Kerngebiet und tributpflichtigen Vasallen bestand, was den Verhältnissen der Epoche entspricht. Das Fehlen von Königsinschriften aus Juda ist für ihn kein Gegenargument, da auch für viele andere Kleinkönige dieser Zeit keine erhalten sind.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 4', year: '2003', quote: `Das davidisch-salomonische Reich passt als „Mini-Imperium" in das Machtvakuum des 10. Jahrhunderts.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'edwin-yamauchi',
      role: 'als Althistoriker',
      text: `Yamauchi hat immer wieder auf die bruchstückhafte Natur archäologischer Befunde hingewiesen: Nur ein Bruchteil antiker Orte wird je ausgegraben, nur ein Bruchteil davon publiziert, und nur ein Bruchteil der einst vorhandenen Texte ist erhalten. Wer aus dem Schweigen archäologischer Quellen auf die Nichtexistenz einer Person schließt, überschätzt systematisch, was Ausgrabungen leisten können. Die Tel-Dan-Stele ist dafür ein Lehrbeispiel: Bis 1993 galt das Fehlen eines außerbiblischen David-Belegs als Argument – dann fand man ihn zufällig verbaut in einer Mauer.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'The Stones and the Scriptures', year: '1972', quote: `Die Fragmentarität archäologischer Belege mahnt zur Vorsicht bei Argumenten aus dem Schweigen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'hoffmeier',
      role: 'als Archäologe',
      text: `Hoffmeier sieht in der Entwicklung der letzten Jahrzehnte ein typisches Muster: Behauptungen, ein biblischer Name sei unhistorisch, wurden mehrfach durch Zufallsfunde widerlegt. Er plädiert dafür, die biblischen Texte als historische Quellen eigener Art ernst zu nehmen und sie kritisch – aber nicht mit einem Generalverdacht – mit den archäologischen Daten zu vergleichen.`,
      sources: [
        { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'The Archaeology of the Bible', year: '2008', quote: `Überblick über archäologische Funde zu den Königsbüchern.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'bytdwd-anders-lesen',
      objection: `Die Tel-Dan-Stele ist ein Bruchstück. „bytdwd" könnte ein Ortsname sein oder „Haus des Geliebten" bedeuten. Daraus einen König David zu machen, ist Wunschdenken.`,
      objectionBy: 'Philip R. Davies',
      answer: `Diese alternativen Deutungen wurden in den 1990ern vorgeschlagen und haben sich nicht durchgesetzt. Der Text spricht im Zusammenhang von einem König Israels und einem König vom „Haus Davids" – genau parallel zu „Haus Omri" für Israel in assyrischen Quellen. Die große Mehrheit der Epigraphiker, auch skeptische, liest „Haus Davids".`,
      detail: `Die Benennung eines Reiches nach dem Dynastiegründer ist im Alten Orient üblich: Assyrer nennen Israel „Haus Omri" (*bīt Ḫumrî*), auch lange nach Omris Tod. Eine solche Benennung setzt eine reale Gründerfigur voraus. Selbst Finkelstein akzeptiert David als historische Person.`,
      followUps: [
        {
          id: 'haeuptling-statt-koenig',
          objection: `Gut, es gab einen David. Aber er war ein Bandenführer im Hochland, kein König eines Reiches vom Euphrat bis Ägypten.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Damit hat sich die Debatte bereits verschoben: von „Legende" zu „wie groß war sein Reich". Das ist ein legitimer Streit. Die Bibel beschreibt ein Kerngebiet mit Vasallen, keinen Flächenstaat mit Bürokratie. Und die Annahme, ohne Monumentalbauten gebe es kein Reich, hat Erez Ben-Yosef am Beispiel Edoms ins Wanken gebracht.`,
          followUps: [
            {
              id: 'ben-yosef-edom-nicht-juda',
              objection: `Ben-Yosef spricht über Edom, nicht über Juda. Für ein judäisches Königreich im 10. Jahrhundert gibt es schlicht keine Verwaltungsspuren.`,
              objectionBy: 'Israel Finkelstein',
              answer: `Ben-Yosef zieht ausdrücklich die methodische Konsequenz für die Debatte über das frühe Israel: Wenn ein hochorganisiertes Gemeinwesen in Edom kaum feste Bauten hinterließ, ist das Fehlen von Monumentalarchitektur auch anderswo kein Beweis. Dazu kommt Khirbet Qeiyafa – eine geplante Festungsstadt im judäischen Hügelland um 1000 v. Chr. Organisation und Bauvermögen waren also vorhanden.`,
              followUps: [
                {
                  id: 'qeiyafa-nicht-judaeisch',
                  objection: `Ob Qeiyafa judäisch war, ist völlig offen. Es könnte philistäisch, kanaanäisch oder ein Zentrum Sauls gewesen sein.`,
                  objectionBy: 'Israel Finkelstein',
                  answer: `Das ist richtig, und ich behaupte nicht mehr, als die Daten tragen. Aber das Fehlen von Schweineknochen, die Hochlandlage gegenüber dem philistäischen Gat und die Bauweise passen am besten zu einer israelitisch-judäischen Gruppe. Selbst wenn es Sauls Herrschaft war, zeigt es: Ein Hochland-Gemeinwesen um 1000 v. Chr. konnte Festungsstädte bauen – genau das bestritten die Minimalisten.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jerusalem-ein-dorf',
      objection: `Jerusalem war im 10. Jahrhundert ein kleines Dorf. Wo sind Salomos Tempel und Paläste? Man hat nichts gefunden.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Auf dem Tempelberg darf nicht gegraben werden, und die Davidsstadt ist seit 3000 Jahren immer wieder zerstört, abgetragen und überbaut worden. Spätere Baumeister – besonders Herodes – haben ältere Schichten bis auf den Fels abgeräumt. Und Jerusalem ist ein Lehrbeispiel: Im 14. Jahrhundert v. Chr. regierte dort laut den Amarna-Briefen ein König Abdi-Heba, doch archäologisch ist von seiner Stadt kaum etwas zu sehen.`,
      followUps: [
        {
          id: 'mazar-palast-widerlegt',
          objection: `Eilat Mazars „Davidspalast" ist umstritten und vermutlich später. Ihr greift nach jedem Strohhalm.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Einverstanden – Mazars Deutung ist umstritten, und ich stütze mich nicht darauf. Mein Argument ist ein anderes: Die Beweislast für „Jerusalem war ein Dorf" ruht auf einem Nichtbefund in einer der am schwersten ausgrabbaren Städte der Welt. Das ist methodisch schwach, wie die Amarna-Zeit zeigt.`,
          questionsBack: [`Wie viel von der Davidsstadt der Eisenzeit ist überhaupt zugänglich und ausgegraben?`],
        },
      ],
    },
    {
      id: 'niedrigchronologie',
      objection: `Die Tore von Hazor, Megiddo und Geser stammen nach der Niedrigchronologie aus dem 9. Jahrhundert, aus der Zeit der Omriden. Salomo hat damit nichts zu tun.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Das ist eine ernsthafte Hypothese, aber kein Konsens. Andere Archäologen wie Amihai Mazar vertreten eine modifizierte konventionelle Chronologie, und die Radiokarbondaten werden von beiden Seiten unterschiedlich ausgelegt. Für Geser haben neuere Ausgrabungen wieder Argumente für das 10. Jahrhundert geliefert. Solange die Datierung strittig ist, kann sie Salomo nicht „widerlegen".`,
      followUps: [
        {
          id: 'radiokarbon-entscheidet',
          objection: `Die Radiokarbonmethode ist objektiv. Sie entscheidet die Frage gegen die konventionelle Chronologie.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Die Messungen sind objektiv, ihre Zuordnung zu Schichten und die Kalibrierung im 10./9. Jahrhundert sind es nicht ganz: Die Kalibrierungskurve ist in diesem Zeitraum flach, sodass Unterschiede von einigen Jahrzehnten schwer aufzulösen sind. Deshalb kommen seriöse Teams mit denselben Methoden zu unterschiedlichen Ergebnissen. Der ehrliche Stand ist: offen.`,
          followUps: [
            {
              id: 'offen-ist-kein-beleg',
              objection: `„Offen" heißt aber auch: Ihr habt keinen positiven Beleg für Salomos Bauten. Wer etwas behauptet, muss es beweisen – nicht der Skeptiker.`,
              objectionBy: 'Israel Finkelstein',
              answer: `Einverstanden, und deshalb behaupte ich hier bewusst wenig: Ich sage nicht „die Tore sind salomonisch bewiesen", sondern „sie sind kein Beweis gegen Salomo". Die Behauptung, die du widerlegen wolltest, war ja „David und Salomo sind Legenden". Dafür reicht ein strittiges Datierungsproblem nicht. Für die Existenz der Dynastie haben wir einen positiven Beleg (Tel Dan); für die Größe des Reiches nur einen Text, der nach den Maßstäben antiker Hofberichte gelesen werden muss.`,
              detail: `Wichtig für dich im Gespräch: Trenne drei Fragen sauber. **(1)** Existierten David und Salomo? – Für die Dynastie ja, außerbiblisch belegt. **(2)** Gab es im 10. Jahrhundert ein judäisches Gemeinwesen mit Bauvermögen? – Qeiyafa und die Debatte um Geser sprechen dafür, beweisen es aber nicht endgültig. **(3)** War es ein Großreich mit enormem Reichtum? – Hier ist der archäologische Befund dünn, und das darfst du offen sagen. Wer die drei Fragen vermischt, verliert die Debatte – auf beiden Seiten.`,
              questionsBack: [`Welche der drei Fragen meinst du genau: Existenz, frühes Gemeinwesen oder Großreich?`],
              followUps: [
                {
                  id: 'dever-gold-maerchen',
                  objection: `Ich bin kein Minimalist – ich halte einen frühen Staat im 10. Jahrhundert für plausibel. Aber 666 Talente Gold im Jahr, goldene Schilde, Elfenbeinthron: Das ist orientalisches Märchen, keine Geschichte.`,
                  objectionBy: 'William Dever',
                  answer: `Dass Dever einen frühen Staat für plausibel hält, ist bereits ein starkes Zugeständnis gegen die Legendenthese. Bei den Goldmengen ist Vorsicht angebracht – Zahlen in antiken Hofberichten können runden und überhöhen. Aber „unmöglich" sind sie nicht: Kitchen hat darauf hingewiesen, dass Pharao Osorkon I. kurz nach Schoschenks Palästinafeldzug Tempelstiftungen in Gold und Silber von gewaltigem Umfang verzeichnete – Reichtum dieser Größenordnung gab es in der Region. Ob die biblischen Zahlen exakt sind, ist eine offene Frage; dass sie Märchen sein müssen, folgt nicht.`,
                  detail: `Kitchen („Where Did Solomon's Gold Go?", Biblical Archaeology Review 1989) verband die Stiftungsinschriften Osorkons I. mit der Plünderung Jerusalems durch Schoschenk (1 Kön 14,25–26) – eine Hypothese, keine bewiesene Tatsache. Ehrlich ist: Für Salomos Gold gibt es keinen archäologischen Fund. Der Laie sollte deshalb nicht mit Goldmengen argumentieren, sondern mit dem Grundsatz: Ein Text, der den König zugleich als Götzendiener und Fronherrn kritisiert (1 Kön 11; 12,4), ist keine reine Prunkpropaganda.`,
                  voices: [
                    {
                      person: 'kitchen',
                      role: 'als Ägyptologe',
                      text: `Kitchen vergleicht die biblischen Angaben zu Salomos Reichtum mit ägyptischen und mesopotamischen Königsinschriften. Er argumentiert, dass die Größenordnungen für einen Herrscher, der Handelswege zwischen Ägypten, Arabien und Syrien kontrollierte, nicht aus dem Rahmen fallen, und verweist auf die außergewöhnlichen Edelmetallstiftungen Osorkons I. um 920 v. Chr.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'Where Did Solomon\'s Gold Go? (Sidebar). Biblical Archaeology Review 15/3 (Mai/Juni 1989)', year: '1989', quote: `Osorkon I. verzeichnete 924–921 v. Chr. auf einem Granitpfeiler in Bubastis Stiftungen von rund 383 Tonnen Gold und Silber an die Götter; möglicherweise stammte ein Teil aus Schoschenks Beute aus Jerusalem.`, status: 'paraphrase', url: 'https://library.biblicalarchaeology.org/sidebar/where-did-solomons-gold-go/', note: 'Heft und Kernaussage per Websuche bestätigt; die Verbindung zu Jerusalem ist Kitchens Folgerung, die Bubastis-Inschrift nur fragmentarisch erhalten.' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'gegner', author: 'William G. Dever', work: 'What Did the Biblical Writers Know and When Did They Know It?', year: '2001', quote: `Dever hält einen frühen judäischen Staat im 10. Jahrhundert für archäologisch plausibel, lehnt aber das Bild eines glanzvollen Großreichs ab.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Könige', ref: '12,4', quote: `Dein Vater hat unser Joch zu hart gemacht.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Kritik an Salomos Fronpolitik im biblischen Text selbst.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'spaete-erfindung',
      objection: `Die Bibel wurde in persischer oder hellenistischer Zeit verfasst. Was sie über David erzählt, ist literarische Fiktion ohne historischen Wert.`,
      objectionBy: 'Thomas L. Thompson',
      answer: `Diese Spätdatierung ist nach der Tel-Dan-Stele schwer zu halten: Die Bibel kennt die Dynastie Davids, die Nachbarn schon im 9. Jahrhundert kannten. Zudem stimmen die Königsbücher mit außerbiblischen Quellen in vielen Namen und Ereignissen überein – Omri, Ahab, Jehu, Hiskia, Sanherib, Nebukadnezar. Ein Werk ohne Zugriff auf alte Quellen könnte das nicht.`,
      followUps: [
        {
          id: 'spaetere-koenige-ja-david-nein',
          objection: `Für die späteren Könige gab es Archive. Für David nicht – da beginnt die Fiktion.`,
          objectionBy: 'Niels Peter Lemche',
          answer: `Dann müsste man erklären, warum ein Fiktionsautor seinen Nationalhelden als Ehebrecher und Mörder darstellt und das Reich unter seinem Enkel zerfallen lässt. Die Samuelbücher tragen die Züge einer Hofgeschichtsschreibung, die Davids Thronanspruch verteidigt und zugleich seine Schuld nicht verschweigt. Und die Tel-Dan-Stele bestätigt gerade den Anfang dieser Dynastie, nicht erst ihre spätere Phase.`,
        },
      ],
    },
    {
      id: 'schoschenk-ohne-jerusalem',
      objection: `Die Bibel sagt, Pharao Schischak sei gegen Jerusalem gezogen (1 Kön 14,25). Aber in Schoschenks Ortsliste in Karnak fehlt Jerusalem. Sein Ziel war das nördliche Hochland – Juda war ihm offenbar zu unbedeutend.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Zunächst ist die Liste ein Volltreffer für die Bibel: Ein ägyptischer Pharao namens Schischak/Schoschenk zieht im 5. Jahr Rehabeams, also um 925 v. Chr., nach Palästina – genau das bezeugt Karnak. Dass Jerusalem fehlt, passt zum biblischen Bericht: Rehabeam zahlte Tribut und lieferte die Tempelschätze aus (1 Kön 14,26); eine Stadt, die sich freikauft, wird nicht als erobert aufgelistet. Außerdem ist die Liste stark beschädigt – viele Namen sind unlesbar.`,
      detail: `Die Ortsliste am Bubastidentor in Karnak nennt über 150 Namen, darunter Orte im Negev, in der Schefela und im Norden (z. B. Megiddo, wo auch ein Stelenfragment Schoschenks gefunden wurde). Finkelstein deutet die Liste als Feldzug gegen ein Gemeinwesen im Benjamin-Plateau oder im Norden. Ehrlich ist: Was die Liste über Juda aussagt, ist umstritten. Unstrittig ist der Synchronismus selbst – er gehört zu den Ankern der gesamten Chronologie der Königszeit.`,
      sources: [
        { kind: 'bibel', work: '1. Könige', ref: '14,25–26', quote: `Im fünften Jahr des Königs Rehabeam zog Sisak, der König in Ägypten, herauf gegen Jerusalem und nahm die Schätze aus dem Hause des HERRN und aus dem Hause des Königs.`, translation: 'Luther 1912', status: 'paraphrase' },
        { kind: 'sonstiges', work: 'Ortsliste Schoschenks I. am Bubastidentor, Karnak', year: 'ca. 925 v. Chr.', quote: `Liste eroberter bzw. unterworfener Orte in Palästina; zahlreiche Namen beschädigt.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'The Third Intermediate Period in Egypt (1100–650 BC)', year: '1973, 3. Aufl. 1996', quote: `Schoschenks Feldzug als fester Synchronismus zwischen ägyptischer und israelitischer Chronologie.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'synchronismus-spaet',
          objection: `Ein korrekter Synchronismus zeigt nur, dass spätere Schreiber irgendeine alte Notiz hatten. Über David und Salomo sagt das nichts.`,
          objectionBy: 'Niels Peter Lemche',
          answer: `Es sagt aber etwas über dein eigenes Argument: Du hast gesagt, für David gab es keine Archive, erst für die späteren Könige. Wenn die Schreiber schon für das Jahr 925 präzise Informationen hatten – fünf Jahre nach Salomos Tod –, dann reicht die Überlieferung bis unmittelbar an Salomo heran. Die Grenze zwischen „Archiv" und „Fiktion" liegt dann nicht dort, wo du sie ziehst.`,
          followUps: [
            {
              id: 'keine-schreiber-im-10-jh',
              objection: `Im Juda des 10. Jahrhunderts gab es praktisch keine Schriftkultur. Hebräische Inschriften tauchen erst im 9. und 8. Jahrhundert in nennenswerter Zahl auf. Wer hätte da Hofannalen führen sollen?`,
              objectionBy: 'Israel Finkelstein',
              answer: `Es gab wenig, aber nicht nichts: der Bauernkalender von Geser (10. Jh.), das Abecedarium von Tel Zayit und das Ostrakon von Khirbet Qeiyafa (um 1000 v. Chr.) zeigen, dass in der Region geschrieben wurde. Ein kleiner Hof braucht nur wenige Schreiber, und Papyrus und Leder verrotten im Bergland. Ich gestehe zu: Breite Schriftlichkeit kam später. Aber für Listen, Verträge und Annalen genügte eine kleine Schreiberelite – so war es überall im Alten Orient.`,
              voices: [
                {
                  person: 'alan-millard',
                  role: 'als Epigraphiker',
                  text: `Millard hat wiederholt darauf hingewiesen, dass Schreiben im Levanteraum der Eisenzeit weiter verbreitet war, als es die erhaltenen Funde vermuten lassen: Die meisten Texte wurden auf vergänglichen Materialien wie Papyrus und Leder geschrieben, die im Klima des Berglands nicht überdauern. Erhalten sind fast nur Inschriften auf Stein und Ton – ein verzerrter Ausschnitt.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Alan R. Millard', work: 'Reading and Writing in the Time of Jesus', year: '2000', quote: `Grundsatz: Das Überleben von Schriftzeugnissen hängt vom Material ab; das Fehlen erhaltener Texte ist kein Beweis für das Fehlen von Schriftlichkeit.`, status: 'paraphrase', note: 'Das Buch behandelt vor allem die römische Zeit; das methodische Argument wendet Millard auch auf die Eisenzeit an.' },
                  ],
                },
              ],
              followUps: [
                {
                  id: 'qeiyafa-ostrakon-unklar',
                  objection: `Das Qeiyafa-Ostrakon ist in einer frühalphabetischen Schrift geschrieben; ob die Sprache Hebräisch ist, lässt sich nicht sicher sagen. Ihr macht daraus ein judäisches Hofarchiv.`,
                  objectionBy: 'Christopher Rollston',
                  answer: `Richtig – die Sprache des Ostrakons ist umstritten, und ich mache daraus kein Hofarchiv. Mein Punkt ist bescheidener: Um 1000 v. Chr. wurde im judäischen Hügelland geschrieben, in einer befestigten Stadt mit geplanter Architektur. Das widerlegt die These, schriftliche Überlieferung aus dieser Zeit sei undenkbar. Ob die Samuelbücher auf solche frühen Notizen zurückgehen, bleibt eine Frage der Wahrscheinlichkeit, nicht des Beweises.`,
                  detail: `Hier ist Fairness dein stärkstes Mittel: Die Minimalisten behaupteten nicht „wir wissen nicht, ob es Schreiber gab", sondern „es kann keine gegeben haben". Gegen diese starke These genügen wenige, sicher datierte Schriftfunde. Für die Gegenthese – „die Samuelbücher beruhen auf zeitgenössischen Aufzeichnungen" – reichen sie allein nicht; da kommen innere Kriterien hinzu (ungeschminkte Darstellung, Thronfolgeapologie, Ortskenntnis).`,
                  questionsBack: [`Wie viele Schreiber braucht ein kleiner Königshof, um Listen und Annalen zu führen?`, `Warum sollten sich Papyrusarchive im Bergland Judas erhalten haben, wenn sie es fast nirgends in der Levante taten?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du, dass ein aramäischer König im 9. Jahrhundert Juda „Haus Davids" nennt, wenn David nie existierte?`,
    `Wie viel vom eisenzeitlichen Jerusalem kann man überhaupt ausgraben?`,
    `Warum sollte eine Legende ihren Helden als Ehebrecher und Mörder zeigen?`,
    `Was folgt für dich aus Ben-Yosefs Befund, dass komplexe Gesellschaften ohne Monumentalbauten existierten?`,
  ],
  avoid: [
    `Behaupten, Salomos Ställe oder Minen seien „gefunden" – die „Ställe von Megiddo" sind umstritten, „König Salomos Minen" in Timna waren edomitisch.`,
    `Eilat Mazars Palast als gesicherten Davidspalast ausgeben.`,
    `Die maximale Reichsgröße als archäologisch bewiesen darstellen.`,
  ],
  concessions: [
    `Die Größe und Verwaltungsstruktur des davidisch-salomonischen Reiches ist archäologisch nicht gesichert.`,
    `Die Datierung der Monumentalbauten (10. oder 9. Jh.) ist eine echte, offene Debatte.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Yosef Garfinkel, Saar Ganor, Michael G. Hasel', work: 'In the Footsteps of King David. Revelations from an Ancient Biblical City', year: '2018', status: 'paraphrase', note: 'Populäre Darstellung der Grabung in Khirbet Qeiyafa.' },
    { kind: 'fachliteratur', author: 'Amihai Mazar', work: 'Archaeology of the Land of the Bible, 10.000–586 B.C.E.', year: '1990', status: 'paraphrase' },
    { kind: 'gegner', author: 'Israel Finkelstein, Neil A. Silberman', work: 'David and Solomon', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['David', 'Salomo', 'Tel Dan', 'Khirbet Qeiyafa', 'Niedrigchronologie'],
  related: ['at-archaeologie/exodus-nie-passiert', 'at-archaeologie/eroberung-kanaans', 'historischer-jesus/jesus-hat-nie-existiert'],
};

export default claim;
