import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'exodus-nie-passiert',
  title: `„Der Exodus hat nie stattgefunden."`,
  proponents: [
    { name: 'Israel Finkelstein', role: 'Archäologe, Universität Tel Aviv', work: 'The Bible Unearthed (mit Neil A. Silberman, 2001)' },
    { name: 'William G. Dever', role: 'Archäologe, University of Arizona (emer.)', work: 'Who Were the Early Israelites and Where Did They Come From? (2003)' },
    { name: 'Thomas Römer', role: 'Alttestamentler, Collège de France / Lausanne', work: 'Arbeiten zur Entstehung des Pentateuch und zum frühen JHWH-Glauben' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler und Wissenschaftskommunikator', work: 'Videos und Podcasts (Data Over Dogma)' },
  ],
  steelman: `Wenn zwei bis drei Millionen Menschen (600.000 wehrfähige Männer, Ex 12,37) vierzig Jahre lang durch den Sinai gezogen wären, müsste man Lagerplätze, Gräber, Scherben finden – vor allem in Kadesch-Barnea, wo Israel nach Dtn 1,46 „lange Zeit" blieb. Doch dort und im ganzen Sinai fehlt jede Spur aus dem 13. Jahrhundert v. Chr., obwohl man im selben Gebiet Lager aus anderen Epochen gefunden hat. Ägyptische Quellen, die über Grenzverkehr akribisch Buch führen, schweigen über Plagen, Massenflucht und den Untergang einer Armee. Die Hochlandsiedlungen der frühen Eisenzeit zeigen eine im Kern kanaanäische Kultur – die Israeliten waren also Einheimische, keine Einwanderer. Die geographischen Details des Exodusbuchs passen am besten ins 7. Jahrhundert v. Chr. Kurz: Der Exodus ist ein theologischer Gründungsmythos, kein historisches Ereignis.`,
  biblical: {
    summary: `Das Exodusbuch erzählt die Befreiung Israels aus der ägyptischen Fronarbeit als Gottestat, die das ganze Alte Testament durchzieht: von der Tora über die Propheten des 8. Jahrhunderts (Hos 11,1; Am 2,10; Mi 6,4) bis zu den Psalmen. Die Erzählung ist voller ägyptischer Lokalkolorits – Ziegelfron (Ex 1,14; 5,7), Städte Pithom und Ramses (Ex 1,11), ägyptische Namen und Lehnwörter. Die Bibel selbst sagt, dass sich „viel Pöbelvolk" (Ex 12,38) anschloss und dass die Landnahme lange dauerte – sie beschreibt also keinen rein ethnisch geschlossenen Block.`,
    detail: `**Ägyptisches Kolorit im Text:**
- **Namen:** Mose (äg. *msi* „geboren von", vgl. Thutmose/Ramose), Pinhas (äg. *pꜣ-nḥsy* „der Nubier"), Hofni, Merari, Putiel – auffällig gehäuft bei den Leviten.
- **Lehnwörter:** *tēvāh* (Kästchen, Ex 2,3; äg. *ṯbt*), *gōmeʾ* (Papyrus), *sûf* (Schilf, äg. *ṯwf*), *yeʾōr* (Nil, äg. *itrw*).
- **Ortsnamen:** „Ramses" (Ex 1,11) entspricht Pi-Ramesse, der Deltahauptstadt Ramses' II. (heute Qantir). Spätere biblische Texte nennen die Deltaresidenz „Zoan" (Tanis, Ps 78,12.43; Num 13,22) – das Exodusbuch bewahrt den älteren Namen.

**Zahlen:** Ex 12,37 nennt 600.000 Männer. Das hebräische *ʾelef* kann „tausend", aber auch „Sippe/Truppeneinheit" bedeuten (Ri 6,15: „mein *ʾelef* ist das geringste in Manasse"). Deshalb schlagen Gelehrte wie Flinders Petrie, George Mendenhall und Colin Humphreys deutlich kleinere Zahlen vor. Das ist eine ehrliche, offene Frage – kein Glaubensartikel.`,
    sources: [
      { kind: 'bibel', work: 'Hosea', ref: '11,1', quote: `Da Israel jung war, hatte ich ihn lieb und rief ihn, meinen Sohn, aus Ägypten.`, translation: 'Luther 1912', status: 'verbatim', note: 'Ein Prophet des Nordreichs im 8. Jh. v. Chr. setzt die Exodustradition als bekannt voraus.' },
      { kind: 'bibel', work: 'Exodus', ref: '12,38', quote: `Und es zog auch mit ihnen viel Pöbelvolk und Schafe und Rinder, sehr viel Vieh.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '1,11', quote: `Man setzte Fronvögte über Israel; sie bauten dem Pharao die Vorratsstädte Pithom und Ramses.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Richter', ref: '6,15', quote: `Gideon: Mein Geschlecht (ʾelef) ist das geringste in Manasse.`, status: 'paraphrase', note: 'Beleg für ʾelef als Sippen- bzw. Einheitsbezeichnung.' },
      { kind: 'fachliteratur', author: 'Colin J. Humphreys', work: 'The Number of People in the Exodus from Egypt. Vetus Testamentum 48', year: '1998', quote: `Deutet ʾelef in den Zahlenlisten als militärische Einheit und kommt so auf eine Größenordnung von etwa 20.000 Menschen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Für die koptisch-orthodoxe Kirche ist der Exodus Heilsgeschichte und Urbild des Pascha: Christus ist „unser Passah" (1 Kor 5,7), die Taufe ist der Durchzug durch das Meer (1 Kor 10,1–2), die Wüstenwanderung Bild des geistlichen Weges. Die Väter lasen den Exodus wörtlich **und** geistlich. Gerade die ägyptische Kirche liest ihn mit besonderem Ernst: Ägypten war Land der Knechtschaft, wurde aber zum Zufluchtsort der Heiligen Familie (Mt 2,13–15) und empfing die Verheißung „Gesegnet bist du, Ägypten, mein Volk" (Jes 19,25).`,
    detail: `Athanasius verkündete in seinen Osterfestbriefen jedes Jahr das Pascha mit den Bildern des Exodus: Wie Israel aus Ägypten auszog, so ziehen die Gläubigen aus der Knechtschaft der Sünde aus. Origenes (Homilien zu Exodus) entfaltete die geistliche Lesart, ohne die Geschichtlichkeit zu leugnen. Die Kirche hat aber nie eine bestimmte Datierung, Route oder Zahlendeutung dogmatisiert – über diese Fragen darf offen und ehrlich geforscht werden.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '5,7', quote: `Denn wir haben auch ein Osterlamm, das ist Christus, für uns geopfert.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '19,25', quote: `Gesegnet bist du, Ägypten, mein Volk, und du, Assur, meiner Hände Werk, und du, Israel, mein Erbe!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Osterfestbriefe', year: '329–373', quote: `Der Bischof von Alexandrien kündigt jährlich das Pascha an und deutet es mit den Bildern von Auszug, Lamm und Wüstenweg auf Christus und das geistliche Leben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Homilien zum Buch Exodus', year: 'ca. 240', quote: `Geistliche Auslegung des Auszugs als Weg der Seele aus der Knechtschaft zu Gott.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Forschungsstand: Es gibt **keinen direkten archäologischen oder ägyptischen Beleg** für das Exodus-Ereignis selbst (Plagen, Auszug, Meerwunder). Die Mehrheit der Archäologen hält die Erzählung in ihrer biblischen Größenordnung für unhistorisch; viele – auch kritische – Forscher rechnen aber mit einem **historischen Kern**: eine kleinere Gruppe, die aus Ägypten kam und ihre Erinnerung in das entstehende Israel einbrachte (so u. a. Richard E. Friedman, Avraham Faust, auch Dever für ein „Haus Joseph"). Plausibilität des Rahmens (Semiten in Ägypten, Fronarbeit, Grenzverkehr) ist gut belegt.`,
    detail: `**Was als gesichert gilt:**
- **Merneptah-Stele** (ca. 1208 v. Chr., Kairo JE 31408): „Israel" erscheint mit dem Determinativ für eine *Volksgruppe* in Kanaan. Spätestens Ende des 13. Jh. existierte also ein Israel, das ein Pharao für erwähnenswert hielt.
- **Semitische Bevölkerung im Delta:** Tell el-Dabʿa/Avaris (Manfred Bietak) zeigt eine große asiatische Bevölkerung im 2. Jt.; die Grabmalerei von Beni Hasan (ca. 1890 v. Chr.) zeigt eine Gruppe von „Asiaten" mit bunten Gewändern.
- **Papyrus Brooklyn 35.1446** (13. Dynastie, publiziert von William C. Hayes 1955): Von 95 Bediensteten eines Haushalts tragen rund 45 „asiatische" Namen; einer wird als *Šp-rꜣ* gelesen und häufig mit „Schifra" (Ex 1,15) verglichen – eine Namensgleichheit, keine Identität mit der Hebamme.
- **Papyrus Leiden I 348** (Ramses II.): ʿApiru ziehen Steine für einen Bau in Pi-Ramesse. **Papyrus Anastasi VI** (Ende 13. Jh.): Schasu-Nomaden aus Edom dürfen die Grenzfestung passieren „zu den Teichen von Per-Atum" (Pithom), um ihr Vieh am Leben zu erhalten.
- **Berliner Sockelrelief ÄM 21687:** Manfred Görg (2001) und später van der Veen/Theis/Görg (2010) lesen dort einen Namen „Israel" aus der Zeit vor Merneptah – von Hoffmeier und anderen abgelehnt (Faried Adrom 2016). Darf nur als umstrittene These genannt werden.

**Kritische Hauptargumente:** fehlende Spuren im Sinai und in Kadesch-Barnea (Tell el-Qudeirat), Schweigen der ägyptischen Quellen, kanaanäische Kontinuität der Hochlandkultur, Spätdatierung der Texte. Finkelstein und Silberman sehen den Exodus als Erzählung des 7. Jh. im Kontext der Rivalität zwischen Juda unter Josia und dem Ägypten der 26. Dynastie.`,
    sources: [
      { kind: 'gegner', author: 'Israel Finkelstein, Neil A. Silberman', work: 'The Bible Unearthed', year: '2001', quote: `Keine archäologischen Spuren eines Massenauszugs im Sinai; die Exoduserzählung spiegle vor allem die Welt des 7. Jahrhunderts v. Chr.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'William G. Dever', work: 'Who Were the Early Israelites and Where Did They Come From?', year: '2003', quote: `Die frühen Israeliten waren überwiegend Einheimische Kanaans; eine kleine Gruppe (ein „Haus Joseph") könnte aber tatsächlich aus Ägypten gekommen sein.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Richard Elliott Friedman', work: 'The Exodus', year: '2017', quote: `Ein kritischer Bibelwissenschaftler, der einen historischen Kern annimmt: Die Leviten kamen aus Ägypten – darauf deuten ihre ägyptischen Namen und levitische Texte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'William C. Hayes', work: 'A Papyrus of the Late Middle Kingdom in the Brooklyn Museum (Papyrus Brooklyn 35.1446)', year: '1955', quote: `Liste von 95 Bediensteten, davon etwa 45 mit als „asiatisch" bezeichneten Namen.`, status: 'paraphrase', note: 'Hayes selbst spricht von „asiatischen", nicht von hebräischen Namen.' },
      { kind: 'fachliteratur', author: 'Peter van der Veen, Christoffer Theis, Manfred Görg', work: 'Israel in Canaan (Long) Before Pharaoh Merenptah? A Fresh Look at Berlin Statue Pedestal Relief 21687. Journal of Ancient Egyptian Interconnections 2', year: '2010', quote: `Lesen auf dem Berliner Sockelrelief einen Namen „Israel" aus der Zeit vor Merneptah.`, status: 'paraphrase', note: 'Umstritten; abgelehnt u. a. von James Hoffmeier und Faried Adrom (2016).' },
      { kind: 'sonstiges', work: 'Merneptah-Stele (Kairo JE 31408), Z. 27', year: 'ca. 1208 v. Chr.', quote: `Israel ist verwüstet, sein Same ist nicht mehr.`, original: `jsrjꜣr fk.t bn pr.t=f`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Prahlerische Übertreibung: Israel wurde nicht ausgelöscht – ein Lehrstück über die Rhetorik altorientalischer Siegesberichte.' },
    ],
  },
  quickAnswer: `Ehrlich gesagt: Einen direkten archäologischen Beweis für den Auszug selbst gibt es nicht – aber das erwartet man auch nicht. Nomaden in Zelten hinterlassen kaum Spuren, das feuchte Nildelta hat fast keine Papyri bewahrt, und Pharaonen meißelten keine Niederlagen in Stein. Was wir haben, passt erstaunlich gut: Semiten als Fronarbeiter in Ägypten, die Stadt Ramses, ägyptische Namen wie Mose und Pinhas – und Israel ist um 1208 v. Chr. als Volk in Kanaan bezeugt. Und kein Volk erfindet sich eine Herkunft als Sklaven.`,
  keyPoints: [
    `**Ehrliches Zugeständnis zuerst:** Kein direkter Beleg für Plagen, Auszug oder Meerwunder. Wer etwas anderes behauptet (Wagenräder im Roten Meer usw.), verliert die Debatte.`,
    `**Erwartbarkeit prüfen:** Fehlende Spuren beweisen nur dann etwas, wenn man sie erwarten müsste. Wandernde Hirten in Zelten, ein unbekannter Lagerort und ein Delta, in dem Papyri verrotten, sind schlechte Bedingungen für Funde.`,
    `**Ägypten schweigt über Niederlagen:** Ramses II. stellte die Pattsituation von Kadesch (1274 v. Chr.) als glänzenden Sieg dar. Ein Massenauszug von Fronarbeitern samt Verlust einer Streitwagentruppe wäre nie verewigt worden.`,
    `**Der Rahmen ist belegt:** Asiatische Bedienstete (Papyrus Brooklyn), ʿApiru beim Bau von Pi-Ramesse (Leiden 348), Nomaden an der Grenze bei Pithom (Anastasi VI), Israel in Kanaan um 1208 (Merneptah-Stele).`,
    `**Ägyptisches Kolorit:** Namen (Mose, Pinhas, Hofni), Lehnwörter (Kästchen, Papyrus, Schilf, Nil) und der ältere Ortsname „Ramses" statt des späteren „Zoan" sprechen für alte Überlieferung.`,
    `**Kriterium der Peinlichkeit:** Nationen verherrlichen ihre Ursprünge. Israel erinnert sich als Volk entlaufener Sklaven – in allen Schichten des AT, auch bei den Propheten des Nordreichs.`,
    `**Auch kritische Forscher** (Friedman, Faust, Dever) rechnen mit einem historischen Kern. Die Frage ist nicht „Mythos oder Geschichte", sondern „wie viel Geschichte".`,
  ],
  argument: {
    name: 'Abduktives Argument für einen historischen Exodus',
    summary: 'Welche Erklärung passt am besten zu allen Daten?',
    premises: [
      { text: `P1: Israel bewahrt in allen Schichten seiner Überlieferung die Erinnerung, als Sklaven aus Ägypten gekommen zu sein.`, support: `Tora, Propheten des 8. Jh. (Hosea, Amos, Micha), Psalmen, Passafest. Eine Sklavenherkunft ist für einen Gründungsmythos untypisch und „peinlich".` },
      { text: `P2: Die Erzählung enthält zutreffendes ägyptisches Lokalkolorit des 2. Jahrtausends.`, support: `Ägyptische Namen, Lehnwörter, Pi-Ramesse, Ziegelfron, Grenzkontrollen; semitische Bevölkerung im Delta ist archäologisch und textlich belegt.` },
      { text: `P3: Das Fehlen direkter Spuren ist unter den gegebenen Bedingungen zu erwarten.`, support: `Nomadische Zeltlager, feuchtes Delta, ägyptische Siegesrhetorik, unsichere Lokalisierungen.` },
    ],
    inferences: [`Eine reine Erfindung des 7. Jh. erklärt P1 und P2 schlechter als eine alte Erinnerung an einen realen Auszug.`],
    conclusion: `Ein historischer Auszug aus Ägypten ist die beste Erklärung der Daten – auch wenn Umfang, Datierung und Route offen bleiben.`,
  },
  voices: [
    {
      person: 'hoffmeier',
      role: 'als Ägyptologe und Ausgräber im Nordsinai',
      text: `Hoffmeier hat die ägyptischen Belege systematisch gesammelt: die Präsenz semitischer Gruppen im Delta, die Bauprojekte Ramses' II. in Pi-Ramesse, das Grenz- und Festungssystem am Ostrand des Deltas, das er selbst bei Tell el-Borg ausgegraben hat. Sein Schluss ist methodisch vorsichtig: Archäologie kann ein einzelnes Ereignis wie den Auszug kaum direkt beweisen, aber sie kann zeigen, dass die Erzählung in die ägyptische Welt des späten 2. Jahrtausends passt.

Besonders betont er, dass das Exodusbuch Ortsnamen und Begriffe verwendet, die zur Ramessidenzeit passen. Wer den Exodus als Fiktion des 7. Jahrhunderts erklärt, muss erklären, woher ein so spätes Werk diese Details kannte – und warum es den älteren Namen „Ramses" statt des späteren „Zoan" benutzt.`,
      sources: [
        { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'Israel in Egypt. The Evidence for the Authenticity of the Exodus Tradition', year: '1997', quote: `Die ägyptischen Belege machen die Exodustradition plausibel; ihr Schweigen über das Ereignis selbst ist erklärbar.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'Ancient Israel in Sinai', year: '2005', quote: `Wüstenroute, Festungen und Stiftshütte im Licht ägyptischer Befunde.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kitchen',
      role: 'als Ägyptologe und Kenner altorientalischer Quellen',
      text: `Kitchen weist darauf hin, dass die überwältigende Mehrheit der Papyri aus dem trockenen Oberägypten stammt; aus dem Delta, wo Israel nach der Bibel lebte, ist so gut wie nichts an Verwaltungsakten erhalten. Dazu kommt die Logik ägyptischer Monumentalinschriften: Sie dienen der Verherrlichung des Königs. Niederlagen werden verschwiegen oder umgedeutet.

Er hält deshalb „kein Beleg" für eine methodisch schwache Aussage. Entscheidend sei, ob die Erzählung zu den Verhältnissen ihrer behaupteten Epoche passt – und das tut sie nach seiner Analyse in vielen Einzelheiten, von der Fronarbeit mit Ziegelquoten bis zur Form der Stiftshütte, die an ramessidische Feldlagerzelte erinnert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', ref: 'Kap. 6', year: '2003', quote: `Das Delta ist für die Erhaltung von Papyri ungünstig; die ägyptische Königsideologie verschweigt Niederlagen; der Exodus passt in den Rahmen des 13. Jahrhunderts.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Bischof von Alexandrien und Verkünder des Pascha',
      text: `Für Athanasius ist der Auszug aus Ägypten kein frommes Gleichnis, sondern Gottes Handeln in der Geschichte, das in Christus seine Erfüllung findet. In seinen Osterfestbriefen verbindet er das Lamm des Exodus mit dem geopferten Christus und den Auszug mit dem Weg der Gläubigen aus der Sünde zur Freiheit. Die geistliche Deutung setzt die Wirklichkeit des Ereignisses voraus, sie ersetzt sie nicht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Osterfestbriefe', year: '329–373', quote: `Das Pascha Israels ist Vorbild des wahren Pascha, Christus.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Ausleger',
      text: `Malaty liest das Exodusbuch in der alexandrinischen Tradition: als wirkliche Befreiungsgeschichte und zugleich als Ikone des Heils – Taufe, Eucharistie (Manna), Kreuz (die erhöhten Hände des Mose). Für die koptische Kirche hat das eine besondere Note: Ägypten, einst Haus der Knechtschaft, wurde zum Land, das den fliehenden Christus aufnahm, und zum Volk, das Gott „mein Volk" nennt (Jes 19,25).`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Kommentar zum Buch Exodus', quote: `Geistlich-patristische Auslegung des Exodus in alexandrinischer Tradition.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'keine-spuren-im-sinai',
      objection: `Zwei Millionen Menschen, vierzig Jahre, und nicht eine einzige Scherbe im Sinai? In Kadesch-Barnea, wo sie jahrelang gelagert haben sollen, gibt es nichts aus dem 13. Jahrhundert. Das ist kein Zufall, das ist ein Befund.`,
      objectionBy: 'Israel Finkelstein',
      answer: `Ich gestehe sofort zu: Direkte Spuren des Auszugs gibt es nicht. Aber drei Punkte: Erstens lebten die Wandernden in Zelten und nicht in Steinhäusern – solche Lager sind archäologisch extrem schwer zu finden. Zweitens kennen wir die meisten Lagerorte gar nicht sicher. Drittens ist die Größe der Gruppe selbst eine offene Frage, weil das hebräische ʾelef nicht nur „tausend" bedeutet.`,
      detail: `Auch Finkelstein selbst hat in seinen Arbeiten zum Nomadismus betont, wie schwer mobile Hirtengruppen archäologisch zu fassen sind. Die Bibel nennt Dutzende Lagerstationen (Num 33), von denen kaum eine sicher identifiziert ist. Ein Fehlbefund an einem Ort, dessen Identifikation unsicher ist, trägt eine weitreichende Schlussfolgerung nicht.`,
      questionsBack: [
        `Welche Art von Spuren würdest du von einem Zeltlager vor 3200 Jahren konkret erwarten – und wo genau?`,
        `Wie viele der Lagerorte aus Num 33 sind nach deiner Meinung sicher lokalisiert?`,
      ],
      followUps: [
        {
          id: 'nomaden-nicht-unsichtbar',
          objection: `Nomaden sind nicht unsichtbar. Im Sinai hat man Hunderte Lagerplätze aus der Frühbronzezeit und aus späteren Epochen gefunden. Nur aus der fraglichen Zeit fehlt alles.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Das ist das stärkste Argument der Gegenseite, und ich nehme es ernst. Aber die gefundenen Lager stammen meist aus Epochen mit festen Bauten, Steinkreisen und langer Nutzung. Eine Gruppe, die von Ort zu Ort zieht, hinterlässt etwas anderes als Siedler. Und selbst für gut dokumentierte spätere Nomadengruppen ist die Fundlage oft dünn.`,
          detail: `Die Abwesenheit von Funden ist ein ernstzunehmendes Indiz, aber kein Beweis. Ehrlich ist zu sagen: Wenn sich eines Tages ein großes, eindeutig datiertes Lager aus dem 13. Jh. im Sinai fände, wäre das eine Sensation – dass es bisher fehlt, ist ein reales Problem für Maximalpositionen, nicht aber für die Annahme eines kleineren Auszugs.`,
          followUps: [
            {
              id: 'kadesch-identifikation',
              objection: `Kadesch-Barnea ist mit Tell el-Qudeirat gut identifiziert. Die Festung dort ist eisenzeitlich – nichts aus der Spätbronzezeit. Damit ist der biblische Bericht widerlegt.`,
              objectionBy: 'William Dever',
              answer: `Die Identifikation beruht vor allem auf einem Namensanklang und ist nicht gesichert. Außerdem beschreibt die Bibel Kadesch als Region und Lagerort in der Wüste Zin/Paran, nicht als befestigte Stadt. Eine spätere Festung auf einem Hügel sagt wenig darüber, ob Jahrhunderte früher Hirten in Zelten in der Umgebung lagerten.`,
              detail: `Die eisenzeitlichen Festungen von Tell el-Qudeirat wurden vermutlich gerade wegen der Bedeutung des Ortes in der Überlieferung errichtet. Dass man dort keine Spätbronzezeit-Schichten findet, ist zu erwarten, wenn die Israeliten keine Festung bauten. Das ist kein Beweis für den Exodus, aber es nimmt dem Argument seine Wucht.`,
              followUps: [
                {
                  id: 'argument-aus-schweigen',
                  objection: `Du argumentierst nur noch mit Schweigen. Ein Argument aus dem Schweigen ist legitim, wenn man Spuren erwarten müsste – und bei einem so gewaltigen Ereignis muss man das.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Einverstanden: Das Argument aus dem Schweigen ist legitim, wenn die Erwartung begründet ist. Genau das muss man dann zeigen. Wir wissen aber, dass selbst gut bezeugte Orte archäologisch stumm sein können: Jerusalem war im 14. Jh. v. Chr. nach den Amarna-Briefen Sitz des Königs Abdi-Heba, und doch ist die Bebauung jener Zeit kaum nachweisbar. Schweigen ist ein schwaches Instrument, und je kleiner die Gruppe, desto schwächer.`,
                  detail: `Die Amarna-Briefe (EA 285–290) stammen von Abdi-Heba, dem Herrscher von Urusalim. Hier haben wir also schriftliche Gewissheit bei archäologischer Dürftigkeit. Das zeigt: Archäologie bildet nicht alles ab, was es gab. Wer einen „Nullbefund" zum Beweis erklärt, muss die Erwartbarkeit präzise begründen – für ein Zeltvolk unbekannter Größe an unbekannten Orten ist das kaum möglich.`,
                  sources: [
                    { kind: 'sonstiges', work: 'Amarna-Briefe EA 285–290 (Abdi-Heba von Jerusalem)', year: '14. Jh. v. Chr.', quote: `Briefe des Stadtfürsten von Jerusalem an den Pharao.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wie groß müsste die Gruppe nach deiner Rechnung mindestens sein, damit ihr Fehlen im Befund aussagekräftig wird?`],
                },
              ],
            },
          ],
        },
        {
          id: 'zahlen-unmoeglich',
          objection: `Zwei bis drei Millionen Menschen mit Vieh – das wären fast so viele, wie ganz Ägypten damals Einwohner hatte. Logistisch ist das absurd.`,
          objectionBy: 'William Dever',
          answer: `Die Zahlen sind ein echtes Problem, und konservative Forscher selbst diskutieren es offen. Das hebräische ʾelef kann „Sippe" oder „Truppeneinheit" heißen; dann schrumpft die Zahl drastisch. Die Kirche hat nie eine bestimmte Zahlendeutung zum Glaubenssatz gemacht – die Befreiung hängt nicht an der Größe der Gruppe.`,
          sources: [
            { kind: 'fachliteratur', author: 'George E. Mendenhall', work: 'The Census Lists of Numbers 1 and 26. Journal of Biblical Literature 77', year: '1958', quote: `ʾelef bezeichne in den Musterungslisten ursprünglich eine Untereinheit eines Stammes.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'elef-ad-hoc',
              objection: `Das ist ad hoc. Num 1,46 addiert die Zahlen zu 603.550 – der Text meint eindeutig Tausende.`,
              objectionBy: 'Dan McClellan',
              answer: `Die Endsummen im heutigen Text meinen in der Tat Tausende; die Frage ist, ob sie ein späteres Verständnis älterer Listen widerspiegeln. Ich lasse das ehrlich offen. Aber selbst wenn die großen Zahlen stilisiert sind, folgt daraus nicht, dass es keinen Auszug gab – genauso wenig, wie übertriebene Heereszahlen bei Herodot beweisen, dass die Perserkriege erfunden sind.`,
              detail: `Antike Historiker übertreiben regelmäßig Zahlen (Herodot nennt für Xerxes' Heer über 1,7 Millionen Mann), ohne dass jemand die Perserkriege bestreitet. Methodisch muss man zwischen der Historizität eines Ereignisses und der Genauigkeit seiner Zahlen unterscheiden.`,
              questionsBack: [`Würdest du die Schlacht bei den Thermopylen für erfunden halten, weil Herodots Zahlen offensichtlich zu hoch sind?`],
            },
          ],
        },
      ],
    },
    {
      id: 'aegypten-schweigt',
      objection: `Die Ägypter haben alles dokumentiert – Grenzübertritte, Getreidelieferungen, entlaufene Sklaven. Aber über zehn Plagen, den Auszug eines ganzen Volkes und den Untergang einer Armee kein einziges Wort?`,
      objectionBy: 'William Dever',
      answer: `Ägyptische Königsinschriften sind Propaganda: Ramses II. ließ die Pattsituation von Kadesch als triumphalen Sieg darstellen. Eine Demütigung durch entlaufene Fronarbeiter hätte niemand verewigt. Und Verwaltungsakten aus dem Delta sind fast vollständig verloren, weil der feuchte Boden Papyrus zerstört. Was wir haben, zeigt aber genau den Rahmen der Erzählung: semitische Diener, ʿApiru beim Bau von Pi-Ramesse, Nomaden an der Grenze bei Pithom.`,
      sources: [
        { kind: 'sonstiges', work: 'Papyrus Leiden I 348', year: 'Zeit Ramses\' II.', quote: `Anweisung, den ʿApiru, die Steine für einen Bau Ramses' II. ziehen, Getreide zuzuteilen.`, status: 'paraphrase' },
        { kind: 'sonstiges', work: 'Papyrus Anastasi VI', year: 'Ende 13. Jh. v. Chr.', quote: `Schasu-Stämme aus Edom werden an der Festung in Tjeku vorbeigelassen zu den Teichen von Per-Atum (Pithom), um sie und ihr Vieh am Leben zu erhalten.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'semiten-gab-es-immer',
          objection: `Semiten in Ägypten gab es zu allen Zeiten. Das beweist doch nicht, dass Israel dort war.`,
          objectionBy: 'Israel Finkelstein',
          answer: `Richtig – es beweist die Plausibilität, nicht das Ereignis. Aber die Erzählung passt in Details, die ein Autor im 7. Jahrhundert schwer erfinden konnte: ägyptische Namen gehäuft bei den Leviten (Mose, Pinhas, Hofni, Merari), ägyptische Lehnwörter, Ziegelfron mit Stroh und Quoten. Genau das erwartet man von einer Überlieferung, die tatsächlich in Ägypten wurzelt.`,
          detail: `Der kritische Bibelwissenschaftler Richard E. Friedman (2017) hat aus diesen Beobachtungen geschlossen, dass zumindest die Leviten aus Ägypten kamen. Das ist kein Apologet, sondern ein Vertreter der Dokumentenhypothese – sein Urteil zeigt, dass die ägyptischen Spuren im Text auch kritische Forscher überzeugen.`,
          followUps: [
            {
              id: 'saitische-zeit',
              objection: `Im 7. Jahrhundert lebten viele Judäer in Ägypten; Ägyptenwissen war leicht verfügbar. Und Pithom – Tell el-Maskhuta – war erst in der Saitenzeit besiedelt. Das datiert den Text.`,
              objectionBy: 'Israel Finkelstein',
              answer: `Die Gleichsetzung Pithom = Tell el-Maskhuta ist umstritten; viele Ägyptologen bevorzugen Tell er-Retaba, wo eine ramessidische Festung liegt. Und der Name „Ramses" spricht gegen eine Spätdatierung: Pi-Ramesse wurde um 1100 v. Chr. aufgegeben, die Residenz wanderte nach Tanis, das die späteren Bibeltexte „Zoan" nennen. Ein Autor des 7. Jahrhunderts hätte eher „Zoan" geschrieben.`,
              detail: `Ps 78,12.43 verlegt die Wunder auf die „Gefilde von Zoan" – das ist die Sprache der späteren Zeit. Ex 1,11 bewahrt dagegen den Namen der Ramessidenresidenz. Natürlich konnte der Name in Erinnerung bleiben; aber das Nebeneinander zeigt, dass die Exodus-Erzählung ältere Ortsangaben konserviert, statt sie einfach an die Gegenwart anzupassen.`,
              followUps: [
                {
                  id: 'ps78-widerspruch',
                  objection: `Dann widerspricht sich die Bibel ja selbst: Einmal Ramses, einmal Zoan.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Kein Widerspruch, sondern zwei Zeitstufen: Der Psalm benutzt in poetischer Rückschau den Namen, den seine Hörer kannten, wie wir heute „Istanbul" sagen, wenn wir über das byzantinische Konstantinopel sprechen. Gerade dass die Erzählung den älteren Namen behält, spricht für eine alte Überlieferung.`,
                  questionsBack: [`Wenn ein Autor des 7. Jahrhunderts alles erfunden hätte – warum benutzt er einen Ortsnamen, der zu seiner Zeit längst nicht mehr gebräuchlich war?`],
                },
              ],
            },
          ],
        },
        {
          id: 'merneptah-israel-einheimisch',
          objection: `Die Merneptah-Stele zeigt Israel um 1208 als Gruppe in Kanaan – nichts von Ägypten. Die Hochlandsiedler waren Kanaanäer.`,
          objectionBy: 'William Dever',
          answer: `Die Stele zeigt, dass Israel um 1208 bereits ein Volk in Kanaan war – bedeutend genug, dass ein Pharao sich rühmte, es besiegt zu haben. Das passt genau zu einem Exodus im 13. Jahrhundert, wie Kitchen und Hoffmeier ihn vertreten. Über die Herkunft der Gruppe sagt die Stele nichts.`,
          followUps: [
            {
              id: 'hochlandkultur-kanaanaeisch',
              objection: `Die Keramik und die Bauweise der Hochlanddörfer sind kanaanäisch. Diese Menschen kamen nicht von außen.`,
              objectionBy: 'William Dever',
              answer: `Es gibt Kontinuitäten, aber auch auffällige Brüche: Vierraumhäuser, egalitäre Dorfstrukturen und das fast völlige Fehlen von Schweineknochen, das Avraham Faust als bewusste Abgrenzung deutet. Die Bibel selbst sagt, dass sich „viel Pöbelvolk" anschloss (Ex 12,38). Eine Kerngruppe aus Ägypten, die mit Einheimischen zu Israel verschmolz, erklärt beides – Kontinuität und Brüche.`,
              sources: [
                { kind: 'fachliteratur', author: 'Avraham Faust', work: 'Israel\'s Ethnogenesis. Settlement, Interaction, Expansion and Resistance', year: '2006', quote: `Die Meidung von Schweinefleisch und andere Merkmale dienten früh der Abgrenzung Israels von seinen Nachbarn.`, status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'dann-gibst-du-zu',
                  objection: `Dann gibst du zu, dass der biblische Exodus mit zwei Millionen Menschen nicht stattgefunden hat.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Nein. Ich gebe zu, dass die Archäologie weder die Größe noch die Route bestätigt, und ich behaupte nicht mehr, als die Quellen hergeben. Die Zahlen sind exegetisch offen. Woran der Glaube hängt, ist, dass Gott Israel aus Ägypten befreit hat – und dafür sprechen die Erinnerung des Volkes, das ägyptische Kolorit und das Fehlen jeder besseren Erklärung für diese Sklavenerinnerung.`,
                  questionsBack: [`Welche Erklärung hast du dafür, dass Nord- und Südreich unabhängig voneinander dieselbe peinliche Herkunft aus der Sklaverei erinnern?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gruendungsmythos',
      objection: `Jedes Volk hat seinen Gründungsmythos – Rom hat Romulus und Remus, Israel hat Mose. Der Exodus ist Theologie, keine Geschichte.`,
      objectionBy: 'Dan McClellan',
      answer: `Gründungsmythen adeln die Herkunft: Rom stammt von Göttersöhnen und Trojanern ab. Israel dagegen erinnert sich als Volk entlaufener Sklaven – das erfindet man nicht freiwillig. Diese Erinnerung steht in allen Schichten des Alten Testaments, auch bei Propheten des 8. Jahrhunderts wie Hosea und Amos, und sie ist im Passafest seit unvordenklicher Zeit lebendig.`,
      followUps: [
        {
          id: 'sklaverei-theologisch-motiviert',
          objection: `Die Sklavenherkunft hat einen theologischen Zweck: Sie macht JHWH zum Befreier. Peinlich ist sie nur auf den ersten Blick.`,
          objectionBy: 'Dan McClellan',
          answer: `Möglich wäre das – aber dann muss man erklären, warum diese Erinnerung im Nordreich wie im Südreich, in Poesie wie in Prosa, unabhängig auftaucht und warum gerade die Priesterfamilie der Leviten ägyptische Namen trägt. Eine theologisch nützliche Erinnerung kann trotzdem wahr sein; Nützlichkeit ist kein Fälschungsbeweis.`,
          followUps: [
            {
              id: 'jhwh-aus-dem-sueden',
              objection: `JHWH war ursprünglich ein Gott aus dem Süden, aus Seir und Edom (Ri 5,4; Dtn 33,2). Der Exodus wurde erst später mit ihm verbunden.`,
              objectionBy: 'Thomas Römer',
              answer: `Interessanterweise stützen gerade ägyptische Quellen die Verbindung zum Süden: Listen aus Soleb (Amenophis III.) und Amara-West (Ramses II.) nennen ein „Land der Schasu des Jhw" in der Region von Edom und Seir. Das passt zur Bibel selbst: Mose begegnet Gott am Horeb bei den Midianitern (Ex 3,1), und Israel zieht von Ägypten aus genau in diese Gegend. Der Süden ist kein Gegenargument, sondern Teil der Erzählung.`,
              sources: [
                { kind: 'sonstiges', work: 'Topographische Listen von Soleb (Amenophis III.) und Amara-West (Ramses II.)', year: '14.–13. Jh. v. Chr.', quote: `Erwähnung eines „Landes der Schasu des Jhw" (tꜣ šꜣsw yhwꜣ).`, status: 'paraphrase', note: 'Deutung als Gottesname wahrscheinlich, aber nicht unumstritten.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'datierung-widerspruechlich',
      objection: `Ihr könnt euch nicht einmal auf ein Datum einigen: 1 Kön 6,1 ergibt 1446 v. Chr., die Stadt Ramses verlangt das 13. Jahrhundert. Wer zwei Daten braucht, hat keines.`,
      objectionBy: 'Bart Ehrman',
      answer: `Innerhalb der konservativen Forschung gibt es tatsächlich zwei Modelle: die Frühdatierung (ca. 1446) nach 1 Kön 6,1 und die Spätdatierung (13. Jh.) nach Ex 1,11. Die 480 Jahre in 1 Kön 6,1 könnten zwölf Generationen zu je 40 Jahren symbolisieren. Das ist eine ehrliche Forschungsfrage, keine Glaubensfrage – und beide Modelle sind älter als die Merneptah-Stele, die Israel um 1208 in Kanaan bezeugt.`,
      followUps: [
        {
          id: 'unfalsifizierbar',
          objection: `Wenn jede Datierung passt, ist die Exodus-Hypothese unfalsifizierbar – also unwissenschaftlich.`,
          objectionBy: 'Dan McClellan',
          answer: `Nein, sie ist durchaus angreifbar: Wäre Israel erst im 9. Jahrhundert entstanden, wäre der Exodus in jeder Form widerlegt – die Merneptah-Stele schließt das aus. Wäre die Erzählung frei von ägyptischem Kolorit oder voller Anachronismen des 1. Jahrtausends, spräche das gegen sie. Beide Modelle machen prüfbare Vorhersagen; unsere Unsicherheit über das genaue Jahrhundert teilen wir mit vielen Ereignissen der Bronzezeit.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Spuren würdest du von einem Zeltlager vor über 3000 Jahren konkret erwarten?`,
    `Kennst du ein Beispiel, in dem ein Pharao eine Niederlage oder eine Massenflucht in Stein gemeißelt hat?`,
    `Warum sollte sich ein Volk eine Herkunft als Sklaven ausdenken?`,
    `Woher kannte ein Autor des 7. Jahrhunderts die ägyptischen Namen der Leviten und den Ortsnamen „Ramses"?`,
    `Hältst du auch Friedman oder Dever für Apologeten, weil sie einen historischen Kern annehmen?`,
  ],
  avoid: [
    `Ron Wyatts „Wagenräder im Roten Meer", Nuweiba als Durchzugsort oder Dschebel al-Lawz als Sinai – nicht wissenschaftlich belegt, leicht zu widerlegen.`,
    `Den Papyrus Ipuwer als ägyptischen Plagenbericht ausgeben – er ist ein literarischer Klagetext, wohl aus dem Mittleren Reich.`,
    `Den Brooklyn-Papyrus als „Beweis für die Hebamme Schifra" verkaufen – er zeigt nur, dass der Name im Umfeld asiatischer Diener vorkam.`,
    `Behaupten, die Archäologie habe den Exodus „bewiesen" – sie hat ihn plausibel gemacht, nicht bewiesen.`,
  ],
  concessions: [
    `Es gibt keinen direkten archäologischen oder ägyptischen Beleg für das Exodus-Ereignis selbst.`,
    `Die großen Zahlen (600.000 Männer) sind auch unter gläubigen Forschern ein ungelöstes Problem.`,
    `Datierung und Route sind offen; die Mehrheit der Archäologen ist gegenüber der Erzählung in ihrer biblischen Form skeptisch.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'James K. Hoffmeier', work: 'Israel in Egypt', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Thomas E. Levy, Thomas Schneider, William H. C. Propp (Hg.)', work: 'Israel\'s Exodus in Transdisciplinary Perspective', year: '2015', status: 'paraphrase', note: 'Sammelband mit Beiträgen aller Richtungen.' },
    { kind: 'gegner', author: 'Israel Finkelstein, Neil A. Silberman', work: 'The Bible Unearthed (dt. Keine Posaunen vor Jericho)', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Elliott Friedman', work: 'The Exodus', year: '2017', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Exodus', 'Ägypten', 'Archäologie', 'Merneptah', 'Mose'],
  related: ['at-archaeologie/eroberung-kanaans', 'at-archaeologie/dokumentenhypothese', 'at-archaeologie/patriarchen-anachronismen', 'antike-parallelen/jesus-kopie-horus-mithras'],
};

export default claim;
