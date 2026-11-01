import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kopten-begruessten-araber',
  title: `„Die Kopten haben die Araber 641 als Befreier begrüßt – der Islam brachte ihnen Toleranz."`,
  proponents: [
    { name: 'Thomas W. Arnold', role: 'Orientalist (†1930)', work: 'The Preaching of Islam (1896) – These von der überwiegend friedlichen Ausbreitung des Islam' },
    { name: 'Muslimische Apologeten', role: 'z. B. in populären Darstellungen und Debatten', work: 'Argument: Byzanz verfolgte die Kopten, der Islam befreite sie und schenkte Religionsfreiheit' },
    { name: 'Maged S. A. Mikhail', role: 'Historiker, California State University Fullerton', work: 'From Byzantine to Islamic Egypt (2014) – koptische Quellen deuten die Eroberer als von Gott gesandt' },
    { name: 'Ägyptisch-nationale Geschichtsschreibung', role: 'Narrativ der „Befreiung Ägyptens von Byzanz"', work: 'Schulbücher und populäre Geschichtswerke des 20. Jahrhunderts' },
  ],
  steelman: `Die Kopten litten nach dem Konzil von Chalcedon (451) fast zwei Jahrhunderte unter dem byzantinischen Staat, der ihnen eine fremde Christologie aufzwingen wollte. Kaiser Herakleios setzte 631 Kyros (in arabischen Quellen al-Muqauqis) als Patriarchen und Statthalter ein, der die Kopten zehn Jahre lang verfolgte; der koptische Papst Benjamin I. musste 13 Jahre lang in der Wüste untertauchen, sein Bruder Menas wurde gefoltert und getötet. Als Amr ibn al-As 639 mit einem kleinen Heer nach Ägypten kam, leistete die koptische Bevölkerung kaum Widerstand. Amr holte den geflohenen Papst mit einem Schutzbrief zurück, empfing ihn ehrenvoll und gab ihm die Kirchen zurück. Der Prophet selbst hatte geboten, die Kopten gut zu behandeln, weil sie Schutzanspruch und Verwandtschaft besäßen – Maria, die Mutter seines Sohnes Ibrahim, war Koptin. Unter islamischer Herrschaft konnten die Kopten ihren Glauben frei leben, ihren Patriarchen selbst wählen und ihre Liturgie feiern. Selbst die koptische „Geschichte der Patriarchen" deutet die Araber als Werkzeug Gottes gegen die byzantinischen Verfolger.`,
  biblical: {
    summary: `Die Schrift gibt keinen Maßstab für die Bewertung einer Eroberung im 7. Jahrhundert, aber sie gibt Haltungen vor: Christen sollen „der Stadt Bestes suchen" auch in der Fremdherrschaft (Jer 29,7), für die Obrigkeit beten (1 Tim 2,1–2), Unrecht nicht mit Unrecht vergelten (Röm 12,17) und die Wahrheit sagen, auch über eigene Schuld (Eph 4,25). Die Propheten deuteten fremde Mächte manchmal als Werkzeug göttlichen Gerichts über ein untreues Volk (Jes 10,5) – ohne damit die Eroberer gutzuheißen. In diesem prophetischen Muster haben auch koptische Chronisten die arabische Eroberung als Gericht über die byzantinischen Verfolger gedeutet. Für Ägypten selbst gilt die Verheißung: „Gesegnet bist du, Ägypten, mein Volk" (Jes 19,25).`,
    sources: [
      { kind: 'bibel', work: 'Jeremia', ref: '29,7', quote: `Suchet der Stadt Bestes, dahin ich euch habe lassen wegführen, und betet für sie zum HERRN; denn wenn's ihr wohl geht, so geht's euch auch wohl.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '10,5–7', quote: `Assur ist die Rute des Zorns Gottes – aber Assur meint es nicht so, sondern sinnt auf Vernichtung.`, status: 'paraphrase', note: 'Prophetisches Deutungsmuster: Gericht durch eine fremde Macht, ohne die Macht gutzuheißen.' },
      { kind: 'bibel', work: 'Jesaja', ref: '19,25', quote: `Gesegnet bist du, Ägypten, mein Volk …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche erinnert an beide Wahrheiten zugleich: an das Unrecht, das ihr der chalcedonensische byzantinische Staat antat – besonders unter Kyros –, und an das, was sie unter islamischer Herrschaft über Jahrhunderte erlitt. Ihr eigenes Geschichtswerk, die „Geschichte der Patriarchen" (in der Tradition dem Bischof Severus ibn al-Muqaffa zugeschrieben, in der heutigen Form wesentlich von Mawhub ibn Mansur im 11. Jahrhundert zusammengestellt), schildert die Rückkehr Papst Benjamins und Amrs Ehrerbietung mit Dankbarkeit – und berichtet später von schweren Steuerlasten, Aufständen und Verfolgungen. Die Kirche lebt seit vierzehn Jahrhunderten das Gebot Jeremias: dem Land Gutes zu tun, in dem sie lebt, seine Herrscher zu ehren und für sie zu beten, ohne Unrecht schönzureden. Papst Schenuda III. fasste diese Liebe in die vielzitierte Formel, Ägypten sei kein Land, in dem wir leben, sondern ein Land, das in uns lebt.`,
    sources: [
      { kind: 'koptisch', work: 'Geschichte der Patriarchen der koptischen Kirche von Alexandrien (Leben Benjamins I.)', year: 'Redaktion 11. Jh. (Mawhub ibn Mansur), ältere Vorlagen', quote: `Amr ließ einen Schutzbrief ausstellen: Wo immer sich Benjamin, der Patriarch der Kopten, aufhalte, solle er Schutz und Sicherheit haben und zurückkehren, um die Angelegenheiten seiner Kirche zu leiten. Als Benjamin kam, empfing ihn Amr mit Ehren und bat ihn um sein Gebet.`, status: 'paraphrase', note: 'Kirchliche Überlieferung, Jahrhunderte nach den Ereignissen redigiert; im Kern von Historikern als glaubwürdig angesehen.' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vielzitierter Ausspruch', quote: `Ägypten ist kein Land, in dem wir leben, sondern ein Land, das in uns lebt.`, status: 'paraphrase', note: 'Vielfach zitiert; genaue Erstquelle nicht gesichert.' },
    ],
  },
  opposingView: {
    summary: `Die Forschung zeichnet ein gemischtes Bild. **Sicher ist:** Die Kopten litten unter der Kirchenpolitik des Kaisers Herakleios und des Patriarchen und Statthalters Kyros (631–641/642); Benjamin I. lebte etwa 13 Jahre im Versteck und kehrte nach der Eroberung mit einem Schutzbrief Amrs zurück. **Umstritten ist**, wie sich die Kopten zur Eroberung stellten: Alfred J. Butler (1902) wies die These einer begeisterten Begrüßung zurück, räumte aber ein, dass die innerchristlichen Spaltungen den Arabern die Eroberung erleichterten; Maged Mikhail (2014) betont, dass koptische Quellen die Eroberer als gottgesandt deuteten; Hugh Kennedy sieht eher passive Hinnahme als aktive Unterstützung. **Die nächste koptische Quelle**, die Chronik des Bischofs Johannes von Nikiu (Ende 7. Jh.), schildert Massaker (etwa in Nikiu), Plünderungen, harte Abgaben und auch Ägypter, die zu den Muslimen übergingen – zugleich deutet sie die Niederlage der Byzantiner als Gottes Gericht für die Verfolgung der Orthodoxen. **Langfristig** lebten die Kopten als Dhimmis mit Selbstverwaltung in Kirchenfragen, aber unter Steuer- und Rechtsungleichheit, mit Phasen relativer Ruhe und Phasen schwerer Verfolgung.`,
    detail: `**Zeittafel der Eroberung:**
- 619–629: persische Besetzung Ägyptens
- 631: Kyros wird Patriarch und Statthalter; Benjamin flieht
- Dezember 639: Amr ibn al-As dringt über Pelusium ein
- April 641: Fall der Festung Babylon (Alt-Kairo)
- November 641: Vertrag von Alexandria (Tribut, Abzug der Byzantiner)
- September 642: Die Araber übernehmen Alexandria
- 645/646: kurzfristige byzantinische Rückeroberung Alexandrias, erneute Einnahme durch Amr
- um 643/644: Rückkehr Benjamins

**Johannes von Nikiu** (Chronik, erhalten nur in äthiopischer Übersetzung von 1602 einer arabischen Fassung): Er beschreibt, wie die Eroberer in Nikiu alle, die sie auf den Straßen und in den Kirchen fanden, Männer, Frauen und Kinder, mit dem Schwert töteten; er berichtet von schweren Abgaben, von Menschen, die sich verstecken mussten, und von Ägyptern, die den Glauben verließen und zu den Muslimen übergingen. Ältere Zusammenfassungen heben hervor, dass er den Eroberern auch zugutehält, christliche Heiligtümer nicht zerstört zu haben. Er ist parteiisch – auch gegen Chalcedonenser und gegen Hypatia –, aber als Kopte, der Byzanz verachtete, hatte er kein Motiv, die Araber schlechter darzustellen, als er sie erlebte.

**Papyri:** Die Aphrodito-Papyri (Briefe des Statthalters Qurra ibn Scharik an den Pagarchen Basileios, 709–714) zeigen eine straffe Steuerverwaltung, Forderungen und die Verfolgung geflohener Bauern.

**Spätere Entwicklung:** Steueraufstände im 8. Jahrhundert, der Aufstand der Baschmuriten im Delta (829–832), den Kalif al-Mamun persönlich niederschlug; Arabisierung der Verwaltung ab etwa 706; allmähliche Islamisierung, deren Tempo umstritten ist (Schätzungen für eine muslimische Mehrheit reichen vom 9./10. bis ins 14. Jahrhundert).`,
    sources: [
      { kind: 'koptisch', author: 'Johannes von Nikiu', work: 'Chronik', ref: 'Kap. 118–121 (Zählung nach Charles)', year: 'Ende 7. Jh.', quote: `Bei der Einnahme von Nikiu töteten die Eroberer alle, die sie auf den Straßen und in den Kirchen fanden, Männer, Frauen und Kinder; sie erlegten den Ägyptern schwere Lasten auf, und manche Ägypter verließen den orthodoxen Glauben und schlossen sich den Muslimen an.`, translation: 'nach R. H. Charles (1916), sinngemäß', status: 'paraphrase', url: 'https://www.tertullian.org/fathers/nikiu2_chronicle.htm', note: 'Nur in äthiopischer Übersetzung (1602) einer arabischen Fassung erhalten; Kapitelzählung und Wortlaut der englischen Übersetzung sind philologisch nicht in allem zuverlässig.' },
      { kind: 'fachliteratur', author: 'Alfred J. Butler', work: 'The Arab Conquest of Egypt and the Last Thirty Years of the Roman Dominion', year: '1902; 2. Aufl. hg. von P. M. Fraser 1978', quote: `Die Behauptung, die Kopten hätten die Eroberer willkommen geheißen und unterstützt, sei unbegründet; die religiösen Spaltungen der Christen hätten den Arabern die Aufgabe aber erleichtert.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Maged S. A. Mikhail', work: 'From Byzantine to Islamic Egypt. Religion, Identity and Politics after the Arab Conquest', year: '2014', quote: `Koptische Quellen deuteten die Eroberer als von Gott bestellt; spätere Aufstände seien vor allem Reaktionen auf die Steuerpolitik gewesen.`, status: 'paraphrase', note: 'Nach Rezensionen zusammengefasst.' },
      { kind: 'fachliteratur', author: 'Hugh Kennedy', work: 'The Great Arab Conquests', year: '2007', quote: `Die ägyptische Bevölkerung habe sich überwiegend abwartend verhalten; Johannes von Nikiu zeige Gewalt ebenso wie Kollaboration.`, status: 'paraphrase' },
      { kind: 'hadith', work: 'Sahih Muslim, Buch der Vorzüge der Prophetengefährten', ref: 'Nr. 2543 (gängige Zählung, nicht geprüft)', quote: `Ihr werdet Ägypten erobern … behandelt seine Bewohner gut, denn sie haben Anspruch auf Schutz (dhimma) und Verwandtschaft (rahim).`, status: 'unverified', note: 'Die Verwandtschaft wird meist auf Hagar und auf Maria die Koptin bezogen. Nummer vor Gebrauch auf sunnah.com prüfen.' },
    ],
  },
  quickAnswer: `Ein Teil stimmt: Die Kopten wurden von den byzantinischen Machthabern verfolgt, und Amr ibn al-As holte Papst Benjamin nach 13 Jahren Flucht ehrenvoll zurück – das erkenne ich dankbar an. Aber „Befreier begrüßt" ist zu einfach: Der koptische Bischof Johannes von Nikiu, der der Eroberung am nächsten steht, berichtet auch von Massakern, Plünderungen und harten Abgaben. Danach lebten die Kopten 1200 Jahre als Schutzbefohlene mit Sondersteuer und eingeschränkten Rechten – mit Zeiten der Ruhe und Zeiten schwerer Verfolgung. Befreiung von Byzanz war nicht dasselbe wie Gleichberechtigung unter dem Islam.`,
  keyPoints: [
    `**Ehrlich über Byzanz:** Kyros (al-Muqauqis) verfolgte die Kopten zehn Jahre; Benjamin I. floh 13 Jahre; die Chalcedonenser trugen schwere Schuld.`,
    `**Ehrlich über Amr:** Schutzbrief und ehrenvolle Rückkehr Benjamins (Geschichte der Patriarchen); innerkirchliche Freiheit war eine echte Erleichterung.`,
    `**Die nächste koptische Quelle widerspricht der Idylle:** Johannes von Nikiu berichtet von Massakern, Abgaben und Abfall – und deutet die Eroberung zugleich als Gottes Gericht über Byzanz.`,
    `**Forschung uneinig über die „Begrüßung":** Butler (1902) dagegen, Mikhail (2014) betont die gottgesandte Deutung, Kennedy sieht Abwarten statt Jubel.`,
    `**Langfristig Dhimma:** Selbstverwaltung, aber Dschizya, Rechtsungleichheit und Einschränkungen; Aufstände (Baschmuriten 829–832), Verfolgungen (al-Hakim, Mamluken).`,
    `**Fair bleiben:** Es gab lange Phasen der Koexistenz, koptische Beamte an Fürstenhöfen und eine reiche christlich-arabische Kultur.`,
  ],
  argument: {
    name: 'Befreiung von – nicht Befreiung durch',
    summary: `Unterscheidung zwischen dem Ende der byzantinischen Verfolgung und einer angeblichen islamischen Toleranz.`,
    premises: [
      { text: `P1: Die byzantinische Kirchenpolitik unter Kyros endete mit der arabischen Eroberung; die Kopten erhielten Freiheit in inneren Kirchenangelegenheiten.`, support: `Rückkehr Benjamins mit Amrs Schutzbrief; freie Patriarchenwahl; Fortbestand von Liturgie und Klöstern.` },
      { text: `P2: Die Eroberung selbst war von Gewalt begleitet, und die neue Ordnung war rechtlich hierarchisch.`, support: `Johannes von Nikiu (Massaker, Abgaben); Dschizya nach 9:29; spätere Bestimmungen (Schurut Umar); Papyri über Steuerdruck.` },
      { text: `P3: In den folgenden Jahrhunderten wechselten Phasen der Koexistenz mit Steuerdruck, Aufständen und Verfolgungen.`, support: `Baschmuriten-Aufstand (829–832), al-Hakim (frühes 11. Jh.), Mamlukenzeit (1301, 1321, 1354).` },
    ],
    conclusion: `Die Kopten wurden von byzantinischer Verfolgung befreit, aber nicht in eine Ordnung der Gleichheit; „Befreier und Toleranz" ist ebenso einseitig wie die Gegenlegende einer reinen Gewaltherrschaft.`,
  },
  voices: [
    {
      person: 'johannes-nikiu',
      role: 'als koptischer Bischof und nächster Chronist der Eroberung',
      text: `Johannes, Bischof von Nikiu im Nildelta, schrieb gegen Ende des 7. Jahrhunderts eine Weltchronik, deren letzte Kapitel die arabische Eroberung schildern. Er ist ein scharfer Gegner der Chalcedonenser und deutet den Untergang der byzantinischen Herrschaft als Gericht Gottes für die Verfolgung der wahren Gläubigen. Gerade deshalb wiegt sein Zeugnis schwer: Er hatte keinen Grund, Byzanz zu verteidigen, und berichtet dennoch von Massakern, Plünderungen, schweren Abgaben und dem Abfall mancher Ägypter vom Glauben. Seine Chronik zeigt die Eroberung als Katastrophe, die er theologisch deutet – nicht als Befreiung, die er bejubelt.`,
      sources: [
        { kind: 'koptisch', author: 'Johannes von Nikiu', work: 'Chronik', ref: 'Kap. 111–121', year: 'Ende 7. Jh.', quote: `Darstellung der Eroberung als Gericht über die Byzantiner und als Leidenszeit für die Ägypter.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'severus-ibn-al-muqaffa',
      role: 'als traditioneller Begründer der koptischen Patriarchengeschichte',
      text: `Die „Geschichte der Patriarchen", die die Tradition mit Severus ibn al-Muqaffa verbindet, erzählt die Rückkehr Benjamins als Gnade Gottes: Amr gewährt Schutz, empfängt den Papst ehrenvoll, und Benjamin kann Kirchen und Klöster wiederherstellen. Dieselbe Patriarchengeschichte berichtet aber in den folgenden Lebensbeschreibungen von Steuererhebungen auf Mönche, von Bedrückungen durch Statthalter und von Verfolgungen. Wer sie als Beleg für eine reine „Befreiung" zitiert, muss sie zu Ende lesen.`,
      sources: [
        { kind: 'koptisch', work: 'Geschichte der Patriarchen (Leben Benjamins I. und folgende)', year: 'Redaktion 11. Jh.', quote: `Rückkehr Benjamins unter Amrs Schutz; in den folgenden Viten Steuerdruck auf Laien und Mönche und Bedrückungen durch Statthalter.`, status: 'paraphrase', note: 'Die Zuschreibung an Severus ist traditionell; die Forschung (u. a. Johannes den Heijer) sieht Mawhub ibn Mansur als Hauptredaktor.' },
      ],
    },
    {
      person: 'mark-swanson',
      role: 'als Historiker des koptischen Papsttums unter islamischer Herrschaft',
      text: `Swanson zeichnet die Geschichte der koptischen Päpste von 641 bis 1517 nach. Sein Bild ist weder eine Leidensgeschichte noch eine Idylle: Die Kirche lebte unter wechselnden Herrschern, verhandelte mit ihnen, litt unter Steuerdruck und Verfolgungen, erlebte aber auch Zeiten, in denen Kopten hohe Ämter in der Verwaltung innehatten und eine reiche arabischsprachige christliche Literatur entstand. Er betont, wie sehr die Lage vom jeweiligen Herrscher und von wirtschaftlichen Umständen abhing.`,
      sources: [
        { kind: 'fachliteratur', author: 'Mark N. Swanson', work: 'The Coptic Papacy in Islamic Egypt (641–1517)', year: '2010', quote: `Die koptischen Päpste zwischen Anpassung, Verhandlung, Bedrückung und Blüte unter wechselnden islamischen Herrschern.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'philip-jenkins',
      role: 'als Historiker des Christentums im Nahen Osten',
      text: `Jenkins beschreibt in „The Lost History of Christianity", wie die Kirchen des Ostens unter islamischer Herrschaft über Jahrhunderte lebendig blieben, bevor sie – oft erst im 13. und 14. Jahrhundert – durch Krisen, Gewaltwellen und Steuerdruck dramatisch schrumpften. Er warnt vor zwei Legenden zugleich: vor der Vorstellung einer sofortigen Unterdrückung und vor der einer dauerhaften Toleranz. Der Niedergang sei kein plötzliches, sondern ein langes, von Brüchen gekennzeichnetes Geschehen gewesen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Philip Jenkins', work: 'The Lost History of Christianity', year: '2008', quote: `Die östlichen Kirchen blühten unter islamischer Herrschaft lange weiter und erlitten ihren großen Niedergang vor allem im späten Mittelalter.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'befreier-von-byzanz',
      objection: `Byzanz hat die Kopten verfolgt, gefoltert und ihren Papst in die Wüste getrieben. Die Araber haben sie befreit. Das müsst ihr doch zugeben!`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Das Erste gebe ich voll zu: Unter Kyros wurden die Kopten von christlichen Machthabern verfolgt, Benjamin musste 13 Jahre fliehen – das war schweres Unrecht. Aber die Befreiung von Byzanz war nicht automatisch eine Befreiung zur Gleichheit. Der koptische Chronist Johannes von Nikiu, der der Eroberung am nächsten steht, berichtet auch von Massakern und harten Abgaben.`,
      followUps: [
        {
          id: 'benjamin-amr',
          objection: `Amr hat euren Papst mit einem Schutzbrief zurückgeholt und geehrt. Welcher christliche Kaiser hat das je getan?`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Das ist wahr und ehrenvoll für Amr, und ich danke dafür. Die koptische Patriarchengeschichte erzählt es mit Dankbarkeit. Zugleich war es auch politisch klug: Ein zufriedener Patriarch half, ein großes Land mit wenigen Soldaten zu regieren. Edle Gesten eines Feldherrn entscheiden aber nicht darüber, wie gerecht die Ordnung war, die danach kam.`,
          followUps: [
            {
              id: 'hadith-gute-behandlung',
              objection: `Du bist zynisch. Der Prophet hat ausdrücklich geboten, die Kopten gut zu behandeln, wegen Schutz und Verwandtschaft. Das war religiöse Pflicht, kein Kalkül.`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Ich nehme diese Überlieferung ernst und respektiere sie – sie ist eine gute Grundlage für Freundschaft zwischen Muslimen und Kopten bis heute. Ich unterstelle Amr nicht, er habe nur berechnend gehandelt. Aber ein Gebot zur guten Behandlung beweist noch nicht, dass es immer befolgt wurde. Dafür brauchen wir die Quellen – und die zeigen ein gemischtes Bild.`,
              followUps: [
                {
                  id: 'nikiu-voreingenommen',
                  objection: `Johannes von Nikiu ist ein verbitterter christlicher Bischof. Die arabischen Quellen erzählen eine friedlichere Geschichte.`,
                  objectionBy: 'Muslimischer Apologet',
                  answer: `Johannes ist parteiisch – er schreibt auch abfällig über Hypatia und über die Chalcedonenser, und ich übernehme nicht jedes Wort. Aber er schrieb wenige Jahrzehnte nach den Ereignissen und hasste Byzanz; er hatte keinen Grund, die Araber schlechter darzustellen, als er sie erlebte. Die ausführlichen arabischen Eroberungsberichte, etwa von Ibn Abd al-Hakam, entstanden erst rund 200 Jahre später.`,
                  followUps: [
                    {
                      id: 'nikiu-text-unsicher',
                      objection: `Die Chronik ist nur in einer äthiopischen Übersetzung von 1602 aus dem Arabischen erhalten. Wer weiß, was da alles verändert wurde!`,
                      objectionBy: 'Kritischer Historiker',
                      answer: `Das ist ein berechtigter Einwand, und die Philologen weisen auf Übersetzungsfehler hin. Deshalb stütze ich mich nicht auf einzelne Formulierungen, sondern auf das Gesamtbild – und das wird von unabhängigen Quellen gestützt: Die Aphrodito-Papyri aus den Jahren 709–714 zeigen eine harte Steuerverwaltung mit flüchtigen Bauern, und die koptische Patriarchengeschichte berichtet von Bedrückungen durch spätere Statthalter.`,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kopten-halfen',
          objection: `Die Kopten haben den Muslimen sogar geholfen – sie bauten Brücken und lieferten Proviant. Das tut man nur für Befreier.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Einige taten das, besonders nach den Verträgen, als die neue Herrschaft feststand – so berichten arabische Quellen. Andere kämpften auf byzantinischer Seite oder flohen. Johannes von Nikiu nennt Ägypter, die zu den Muslimen übergingen, und andere, die litten. Die meisten Bauern warteten wohl einfach ab, wer siegt. „Befreiungsjubel" ist eine spätere Vereinfachung.`,
        },
        {
          id: 'gericht-gottes',
          objection: `Selbst eure koptischen Quellen sagen, die Araber seien von Gott gesandt worden. Also habt ihr sie doch begrüßt.`,
          objectionBy: 'Maged S. A. Mikhail (als Diskussionspunkt)',
          answer: `Koptische Chronisten deuteten die Eroberung als Gericht Gottes über die byzantinischen Verfolger – wie die Propheten Assur als „Rute des Zorns" deuteten (Jes 10,5). Das ist eine theologische Deutung, kein Lob der Eroberer: Auch Assur wurde von Jesaja nicht gutgeheißen. Johannes von Nikiu deutet die Ereignisse genau so – und beschreibt im selben Werk die Leiden der Ägypter.`,
        },
      ],
    },
    {
      id: 'islam-brachte-toleranz',
      objection: `Unter dem Islam konnten die Kopten ihren Patriarchen frei wählen, ihre Liturgie feiern und ihre Klöster behalten. Das ist Religionsfreiheit – mehr, als Byzanz ihnen gab.`,
      objectionBy: 'Thomas W. Arnold (Position)',
      answer: `Die Freiheit in inneren Kirchenangelegenheiten war real und nach der byzantinischen Zwangspolitik eine große Erleichterung – das sage ich offen. Aber Religionsfreiheit im heutigen Sinn war es nicht: Die Kopten zahlten eine Sondersteuer, durften kaum neue Kirchen bauen, standen rechtlich unter den Muslimen, und der Übertritt vom Islam zum Christentum war verboten. Es war geduldete Unterordnung, keine Gleichheit.`,
      followUps: [
        {
          id: 'besser-als-europa',
          objection: `Verglichen mit dem christlichen Europa, das Juden vertrieb und verbrannte, war die islamische Welt viel toleranter.`,
          objectionBy: 'Mark R. Cohen (als Diskussionspunkt)',
          answer: `Im Vergleich hast du oft recht: Juden ging es im mittelalterlichen Islam vielfach besser als im christlichen Europa – das zeigt etwa der Historiker Mark Cohen. Ich verteidige die Vertreibungen und Pogrome in Europa nicht. Aber „besser als Europa" ist nicht dasselbe wie „gerecht". Auch Byzanz hatte eine ähnliche Hierarchie: Häretiker und Juden durften nach Justinians Gesetz nicht gegen rechtgläubige Christen aussagen.`,
          followUps: [
            {
              id: 'anachronistisch',
              objection: `Du misst das 7. Jahrhundert an modernen Menschenrechten. Das ist anachronistisch.`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Ich messe nur an der Behauptung selbst: Wer „Befreiung" und „Toleranz" sagt, muss erklären, was die Betroffenen erlebten. Die koptischen Quellen jener Jahrhunderte beklagen Steuerdruck und Verfolgungen – das ist ihr Maßstab, nicht meiner. Und ich messe Byzanz mit demselben Maß: Auch seine Behandlung der Kopten war Unrecht.`,
              followUps: [
                {
                  id: 'christen-schlimmer',
                  objection: `Dann gib zu: Die christlichen Byzantiner haben die Kopten schlimmer behandelt als die Muslime.`,
                  objectionBy: 'Muslimischer Apologet',
                  answer: `In den Jahrzehnten vor 641 war die byzantinische Verfolgung zeitweise brutal, ja. Aber ein Wettbewerb der Leiden führt nicht weiter: Die byzantinische Bedrückung dauerte episodisch knapp zwei Jahrhunderte, die islamische Herrschaft vierzehn – mit langen ruhigen Zeiten und mit schweren Verfolgungen wie unter al-Hakim oder in der Mamlukenzeit. Die Wahrheit ist: Beide Seiten haben den Kopten Unrecht getan, und beide hatten auch gerechte Herrscher.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'freiwillige-bekehrung',
      objection: `Dass Ägypten heute mehrheitlich muslimisch ist, zeigt: Die Kopten haben den Islam freiwillig angenommen, weil sie seine Gerechtigkeit erkannten.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Viele Ägypter sind sicher aus Überzeugung Muslime geworden. Aber die Islamisierung dauerte Jahrhunderte – die Kopten blieben lange die Mehrheit –, und sie verlief unter Bedingungen, die den Übertritt belohnten: Wer Muslim wurde, zahlte keine Dschizya und stieg rechtlich auf. Dazu kamen Phasen der Gewalt, besonders unter al-Hakim und in der Mamlukenzeit, als es zu Massenübertritten kam. Freiwillig und frei sind nicht dasselbe.`,
      followUps: [
        {
          id: 'kein-zwang-2-256',
          objection: `Der Koran sagt: Es gibt keinen Zwang im Glauben (2:256). Zwangsbekehrungen waren verboten.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Dieser Grundsatz wurde oft geachtet: Massenhafte Zwangstaufen wie im christlichen Spanien gab es in Ägypten in der Frühzeit nicht. Aber es gab Ausnahmen – unter dem Fatimidenkalifen al-Hakim wurden Kirchen zerstört und Christen zum Übertritt gedrängt, bevor er später die Rückkehr erlaubte; in der Mamlukenzeit führten Pogrome zu Massenübertritten. Ein Prinzip ist das eine, die Geschichte das andere.`,
        },
        {
          id: 'steueraufstaende',
          objection: `Die koptischen Aufstände waren Steueraufstände, keine Religionskonflikte. Auch Muslime revoltierten gegen Steuern.`,
          objectionBy: 'Maged S. A. Mikhail (Position)',
          answer: `Das stimmt weitgehend: Die Aufstände des 8. und 9. Jahrhunderts, auch der Baschmuriten-Aufstand 829–832, hatten vor allem wirtschaftliche Ursachen. Aber das Steuersystem war religiös gegliedert – die Dschizya zahlten nur Nichtmuslime. Wenn die Steuerlast an der Religion hängt, lässt sich wirtschaftlicher und religiöser Druck nicht sauber trennen.`,
          followUps: [
            {
              id: 'byzanz-steuern-auch',
              objection: `Byzanz hat auch hohe Steuern erhoben. Für den Bauern machte das keinen Unterschied.`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Hohe Steuern gab es auch unter Byzanz, ja. Der Unterschied: Die byzantinische Steuer hing nicht davon ab, ob man Christ oder Heide war, die Dschizya dagegen schon – sie schuf einen dauerhaften Anreiz zum Religionswechsel. Schon frühe Statthalter beklagten, dass Übertritte die Einnahmen schmälerten. Das zeigt, dass die Religionszugehörigkeit wirtschaftlich zählte.`,
            },
          ],
        },
      ],
    },
    {
      id: 'kopten-verraeter',
      objection: `Die Kopten haben sich 451 von der Reichskirche abgespalten und dann die Christenheit an die Araber verraten. Sie haben die Eroberung erst möglich gemacht.`,
      objectionBy: 'Byzantinisch-westliche Polemik',
      answer: `Für einen institutionellen „Verrat" der koptischen Kirche gibt es keinen Beleg: Papst Benjamin lebte während der Eroberung im Versteck. Wenn die innerchristliche Spaltung den Arabern half, dann liegt die Hauptschuld bei einer Reichskirchenpolitik, die die eigene Bevölkerung verfolgte. Und die Kopten sind ihrem Glauben danach vierzehn Jahrhunderte unter schwierigsten Bedingungen treu geblieben – das ist das Gegenteil von Verrat.`,
      followUps: [
        {
          id: 'kyros-war-muqauqis',
          objection: `Aber al-Muqauqis, der mit den Arabern verhandelte und Ägypten übergab, war doch euer Mann!`,
          objectionBy: 'Byzantinisch-westliche Polemik',
          answer: `Im Gegenteil: In den arabischen Quellen wird al-Muqauqis meist mit Kyros identifiziert – dem chalcedonensischen Patriarchen und Statthalter, der die Kopten verfolgte. Johannes von Nikiu wirft gerade ihm vor, Ägypten preisgegeben zu haben. Wenn jemand verhandelte und übergab, war es der byzantinische Machthaber, nicht die koptische Kirche.`,
        },
      ],
    },
    {
      id: 'muqauqis-brief',
      objection: `Al-Muqauqis empfing schon den Brief des Propheten ehrenvoll und schickte ihm Geschenke, darunter Maria die Koptin. Die Kopten haben den Islam von Anfang an geehrt.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Die islamische Überlieferung berichtet von diesem Brief und den Geschenken; Maria die Koptin wird von Muslimen hoch geehrt, und ich begegne dieser Erinnerung mit Respekt. Historisch ist vieles daran umstritten – und selbst nach der Überlieferung nahm al-Muqauqis den Islam nicht an. Wenn er mit Kyros identisch war, war er zudem kein Vertreter der koptischen Kirche, sondern ihr Verfolger.`,
      followUps: [
        {
          id: 'verwandtschaft-heute',
          objection: `Trotzdem verbindet uns Verwandtschaft – Hagar und Maria waren Ägypterinnen. Warum betont ihr immer die Konflikte?`,
          objectionBy: 'Muslimischer Gesprächspartner',
          answer: `Da hast du recht, und ich betone diese Verbundenheit gern: Muslime und Kopten teilen ein Land, eine Sprache, eine Geschichte und viele Familiengeschichten. Gerade deshalb ist Ehrlichkeit wichtig. Freundschaft wächst nicht aus geschönter Geschichte, sondern daraus, dass beide Seiten das Unrecht beim Namen nennen – auch das, das Christen getan haben.`,
        },
      ],
    },
    {
      id: 'heutige-einheit',
      objection: `Seht euch die ägyptische Einheit an: 1919 „Halbmond und Kreuz", 2011 schützten Muslime eure Kirchen mit Menschenketten. Das ist islamische Toleranz.`,
      objectionBy: 'Ägyptisch-nationale Sicht',
      answer: `Diese Momente sind wahr und bewegend, und ich bin dankbar für jeden Muslim, der eine Kirche geschützt hat. Ebenso wahr sind die Anschläge auf die Kirche in Alexandria 2011, das Massaker von Maspero 2011, die Kirchenbrände 2013, die Bombenanschläge 2016 und 2017 und die Ermordung der 21 Märtyrer in Libyen 2015. Beides gehört zur Wahrheit. Wer nur eines davon erzählt, erzählt nicht die Geschichte der Kopten.`,
      followUps: [
        {
          id: 'extremisten-nicht-islam',
          objection: `Die Anschläge waren Extremisten wie der IS. Die verurteilt die große Mehrheit der Muslime und die Azhar.`,
          objectionBy: 'Muslimischer Gesprächspartner',
          answer: `Das stimmt, und ich mache nicht alle Muslime für die Taten des IS verantwortlich – die Azhar und unzählige Muslime haben sie verurteilt. Aber es gibt auch alltägliche Probleme jenseits von Terror: Übergriffe von Mobs in Dörfern, wenn Christen eine Kirche bauen wollen, „Versöhnungssitzungen", die Täter straflos lassen, und Hürden beim Kirchenbau. Das ehrlich zu benennen, richtet sich nicht gegen Muslime, sondern gegen Unrecht.`,
          followUps: [
            {
              id: 'sisi-kathedrale',
              objection: `Der Staat hat doch die größte Kathedrale des Nahen Ostens in der neuen Hauptstadt gebaut, und der Präsident besucht eure Weihnachtsmesse.`,
              objectionBy: 'Ägyptisch-nationale Sicht',
              answer: `Das sind wichtige Zeichen, und die Kirche hat sie dankbar aufgenommen; auch das Kirchenbaugesetz von 2016 hat viele Kirchen legalisiert. Zugleich kritisieren Menschenrechtsorganisationen, dass das Gesetz Hürden lässt, die für Moscheen nicht gelten. Fortschritte anerkennen und offene Probleme benennen – beides gehört zu einem ehrlichen Bild.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du die Chronik des Johannes von Nikiu gelesen, der der Eroberung zeitlich am nächsten steht?`,
    `Ist Befreiung von einer Verfolgung schon dasselbe wie Gleichberechtigung?`,
    `Wie passt eine Sondersteuer allein für Nichtmuslime zum Begriff „Toleranz" im heutigen Sinn?`,
    `Warum dauerte es Jahrhunderte, bis die Kopten zur Minderheit wurden, wenn sie den Islam als Befreiung erlebten?`,
    `Kannst du auch das Unrecht benennen, das Christen den Kopten angetan haben? Ich kann es.`,
  ],
  avoid: [
    `Die byzantinische Verfolgung der Kopten verschweigen oder kleinreden.`,
    `Die islamische Herrschaft als 1400 Jahre ununterbrochene Verfolgung darstellen – das ist falsch.`,
    `Muslime von heute für Taten des 7. oder 14. Jahrhunderts verantwortlich machen.`,
    `Die Legende von der Verbrennung der Bibliothek von Alexandria durch Amr als Argument verwenden.`,
  ],
  concessions: [
    `Die chalcedonensische Reichskirche hat die Kopten verfolgt; Kyros' Politik war schweres Unrecht.`,
    `Amr ibn al-As behandelte Papst Benjamin ehrenvoll, und die Kopten erhielten Freiheit in inneren Kirchenangelegenheiten.`,
    `Koptische Quellen deuteten die Eroberung teilweise als gottgewollt; manche Kopten kollaborierten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alfred J. Butler', work: 'The Arab Conquest of Egypt', year: '1902/1978', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark N. Swanson', work: 'The Coptic Papacy in Islamic Egypt (641–1517)', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Maged S. A. Mikhail', work: 'From Byzantine to Islamic Egypt', year: '2014', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Johannes von Nikiu', work: 'Chronik (engl. R. H. Charles 1916)', status: 'paraphrase', url: 'https://www.tertullian.org/fathers/nikiu2_chronicle.htm' },
  ],
  difficulty: 2,
  tags: ['Arabische Eroberung', 'Amr ibn al-As', 'Benjamin I.', 'Kyros', 'Johannes von Nikiu', 'Dhimma', 'Kopten'],
  related: ['koptische-kirche/dhimmi-gerecht', 'koptische-kirche/maertyrerkult', 'orthodoxie-oekumene/kopten-spalteten-451', 'islam-gewalt-scharia/schwertverse-kontext', 'kirchengeschichte-mythen/hypatia-bibliothek'],
};

export default claim;
