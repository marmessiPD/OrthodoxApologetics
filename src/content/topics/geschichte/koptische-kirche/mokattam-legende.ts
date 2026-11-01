import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mokattam-legende',
  title: `„Das Mokattam-Wunder ist eine fromme Legende."`,
  proponents: [
    { name: 'Historisch-kritische Forschung', role: 'Quellenkritik der koptisch-arabischen Geschichtsschreibung', work: 'Studien zur Geschichte der Patriarchen (u. a. Johannes den Heijer)' },
    { name: 'David Hume (Argumentationsmuster)', role: 'Philosoph (†1776)', work: 'An Enquiry concerning Human Understanding (1748), Abschnitt 10: Of Miracles' },
    { name: 'Bart D. Ehrman (Argumentationsmuster)', role: 'Neutestamentler, UNC', work: 'These: Ein Wunder sei per Definition das unwahrscheinlichste Ereignis und historisch nie zu belegen' },
    { name: 'Muslimische Kritiker', role: 'in Online-Debatten', work: 'Argument: Kein islamischer Chronist berichtet von einem so spektakulären Ereignis am Kalifenhof' },
  ],
  steelman: `Nach koptischer Überlieferung forderte der Fatimidenkalif al-Muizz um 975 den Patriarchen Abraham ibn Zura heraus: Wenn Jesus sage, ein Glaube wie ein Senfkorn könne Berge versetzen (Mt 17,20), dann sollten die Christen das beweisen – andernfalls drohe ihnen Vernichtung, Bekehrung oder Vertreibung. Nach drei Tagen Fasten und Gebet habe die Gottesmutter den Patriarchen zu einem einäugigen Gerber namens Simon geführt, auf dessen Gebet hin der Mokattam-Berg bei Kairo sich erhoben habe. Die Geschichte ist erbaulich, aber historisch höchst zweifelhaft: Sie stammt aus einer kirchlichen Quelle, die Jahrzehnte bis Jahrhunderte später redigiert wurde, wächst in späteren Fassungen um immer neue Einzelheiten, und kein islamischer Chronist der Zeit erwähnt ein Ereignis, das eine ganze Stadt gesehen haben müsste. Zudem starb al-Muizz Ende 975, kurz nach Abrahams Amtsantritt. Ein Wunder dieser Größenordnung ist nach allen Maßstäben historischer Wahrscheinlichkeit nicht glaubhaft – es ist eine fromme Legende.`,
  biblical: {
    summary: `Jesus verheißt: „So ihr Glauben habt wie ein Senfkorn, so möget ihr sagen zu diesem Berge: Hebe dich von hinnen dorthin! so wird er sich heben" (Mt 17,20; vgl. Mk 11,23). Viele Ausleger verstehen das Bergversetzen als bildhafte Rede für das scheinbar Unmögliche, das Gott dem vertrauenden Gebet gewährt; die Väter lasen es teils wörtlich, teils geistlich. Die Bibel kennt Wunder als Zeichen Gottes, warnt aber zugleich davor, den Glauben auf Zeichen zu gründen (Mt 12,39; Joh 20,29). Der Grund des christlichen Glaubens ist nicht ein späteres Wunder, sondern die Auferstehung Christi, bezeugt von den Aposteln (1 Kor 15,3–8).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '17,20', quote: `So ihr Glauben habt wie ein Senfkorn, so möget ihr sagen zu diesem Berge: Hebe dich von hinnen dorthin! so wird er sich heben; und euch wird nichts unmöglich sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '5,29', quote: `Ärgert dich aber dein rechtes Auge, so reiß es aus und wirf's von dir.`, translation: 'Luther 1912', status: 'verbatim', note: 'Nach der Überlieferung hatte Simon der Gerber diesen Vers wörtlich befolgt – die Kirche lehrt das nicht als Vorbild.' },
      { kind: 'bibel', work: 'Johannes', ref: '20,29', quote: `Selig sind, die nicht sehen und doch glauben!`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche gedenkt des Mokattam-Wunders als Zeichen von Gottes Treue in einer Zeit der Bedrohung. Das dreitägige Fasten, das dem Fasten vor Weihnachten vorangestellt ist, erinnert nach der Überlieferung an die drei Tage, die Papst Abraham und das Volk damals fasteten und beteten. Der hl. Simon der Gerber wird verehrt; seine Gebeine wurden nach kirchlichen Angaben 1991 in Alt-Kairo aufgefunden und ruhen heute im Kloster des hl. Simon auf dem Mokattam, wo die große Höhlenkirche der Müllsammler-Gemeinde (Zabbalin) liegt. Ein Dogma ist das Wunder nicht: Der Glaube der Kirche hängt nicht an seiner historischen Beweisbarkeit, sondern an Christus; das Wunder ist ehrwürdige Überlieferung, die man mit Ehrfurcht und mit Verstand zugleich lesen darf.`,
    sources: [
      { kind: 'koptisch', work: 'Geschichte der Patriarchen (Leben Abrahams, 62. Papst)', year: 'Biographien von Michael von Tinnis (ca. 1051), kompiliert von Mawhub ibn Mansur (spätes 11. Jh.)', quote: `Bericht über Papst Abraham, den Syrer, seine Reformen und die Verbindung seines Pontifikats mit dem Wunder der Versetzung des Berges.`, status: 'paraphrase', note: 'Nach Youhanna Nessim Youssef enthalten die älteren Texte nur eine Anspielung auf das Bergwunder ohne viele der später bekannten Einzelheiten.' },
      { kind: 'liturgie', work: 'Koptischer Fastenkalender', quote: `Das dreitägige Fasten vor dem Weihnachtsfasten zur Erinnerung an das Mokattam-Wunder.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historisch gesichert sind der Rahmen und die Hauptpersonen: Abraham ibn Zura, ein syrischer Kaufmann, war 62. Papst von Alexandria (meist 975–978 datiert) und ist für Reformen gegen Simonie und Konkubinat bekannt; der Fatimidenkalif al-Muizz war 969 nach Ägypten gekommen und gründete Kairo; sein Wesir Yaqub ibn Killis, ein zum Islam übergetretener Jude, war eine historische Gestalt; am Fatimidenhof fanden tatsächlich Religionsgespräche statt, an denen nach koptischer Überlieferung auch Bischof Severus ibn al-Muqaffa teilnahm. Die Erzählung vom Bergwunder selbst ist nur in koptischer Überlieferung bezeugt; die Hauptquelle, die Geschichte der Patriarchen, wurde im 11. Jahrhundert zusammengestellt, und die Erzählung wurde in späteren Fassungen ausgeschmückt. Islamische Parallelberichte sind, soweit bekannt, nicht überliefert. Chronologisch ist die Verbindung mit al-Muizz eng, da dieser Ende 975 starb; manche erwägen, dass die Erzählung erst später mit seinem berühmten Namen verbunden wurde.`,
    detail: `**Was die Quellenlage bedeutet:**
- Eine einzige Überlieferungslinie, kirchlich und erbaulich, mit zeitlichem Abstand und Wachstum der Details – das ist nach historischen Maßstäben ein schwacher Beleg für ein spektakuläres Ereignis.
- Zugleich ist der Kern nicht beliebig: Er spielt in einem gut bezeugten Milieu (Fatimidenhof, Religionsgespräche, Ibn Killis, Abrahams Pontifikat) und erklärt eine feste liturgische Praxis (das dreitägige Fasten).
- Historiker können ein Wunder als solches methodisch kaum „feststellen"; sie können feststellen, dass eine Gemeinschaft ein Ereignis als Wunder erinnerte. Ob Gott gehandelt hat, ist eine Frage, die über die historische Methode hinausgeht.

**Abrahams Reformen** – sein Kampf gegen den Ämterkauf und gegen das Konkubinat unter vornehmen Kopten – sind in der Patriarchengeschichte ausführlich beschrieben und werden von Historikern als glaubwürdig angesehen.`,
    sources: [
      { kind: 'fachliteratur', author: 'Anthony Alcock', work: 'Abraham the Syrian (Übersetzung und Studie zur Vita in der Geschichte der Patriarchen)', quote: `Abraham, ein syrischer Kaufmann in Fustat, war 62. Patriarch (975–978); al-Muizz war 969 als Fatimidenkalif nach Ägypten gekommen und hatte Kairo gegründet.`, status: 'paraphrase', url: 'https://www.roger-pearse.com/weblog/wp-content/uploads/2018/08/Abraham-the-Syrian_Alcock.pdf' },
      { kind: 'fachliteratur', author: 'Youhanna Nessim Youssef', work: 'The Miracle of Ibn Zar\'ah in Coptic Tradition. Texts and Icons', quote: `Die älteren Texte spielen auf die Versetzung des Berges an, ohne die späteren Einzelheiten über Gebet, Ikone der Jungfrau und weitere Motive zu bieten – möglicherweise eine frühere Stufe der Überlieferung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Johannes den Heijer', work: 'Mawhub ibn Mansur ibn Mufarrig et l\'historiographie copto-arabe', year: '1989', quote: `Die Geschichte der Patriarchen sei im 11. Jahrhundert wesentlich von Mawhub ibn Mansur aus älteren Biographien zusammengestellt worden; die traditionelle Zuschreibung an Severus ibn al-Muqaffa sei zu revidieren.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'David Hume', work: 'An Enquiry concerning Human Understanding', ref: 'Abschnitt 10', year: '1748', quote: `Kein Zeugnis genüge, ein Wunder zu begründen, es sei denn, seine Falschheit wäre noch wunderbarer als das Ereignis, das es belegen soll.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ehrlich gesagt: Das Mokattam-Wunder ist kirchliche Überlieferung, die historisch nicht bewiesen werden kann – die Quelle ist eine koptische Chronik, die später zusammengestellt und ausgeschmückt wurde, und islamische Berichte darüber kennen wir nicht. Der Rahmen ist aber historisch: Papst Abraham, der Kalif, sein Wesir Ibn Killis und die Religionsgespräche am Hof sind gut bezeugt. Für mich ist das Wunder ehrwürdige Überlieferung, kein Dogma. Mein Glaube steht auf der Auferstehung Christi – und ob Gott Wunder tun kann, entscheidet nicht die Quellenlage eines einzelnen Berichts.`,
  keyPoints: [
    `**Ehrlich zur Quelle:** Einzige Überlieferungslinie ist koptisch-kirchlich (Geschichte der Patriarchen, 11. Jh.), mit späteren Ausschmückungen.`,
    `**Historischer Rahmen gesichert:** Abraham ibn Zura (62. Papst, ca. 975–978), al-Muizz und Kairo (969), Wesir Ibn Killis, Religionsgespräche am Fatimidenhof.`,
    `**Chronologie offen:** al-Muizz starb Ende 975 – die Verbindung mit seinem Namen ist eng und wird diskutiert.`,
    `**Kein Dogma:** Die Kirche bindet den Glauben nicht an dieses Wunder; sie bewahrt es als Überlieferung und liturgische Erinnerung (dreitägiges Fasten).`,
    `**Methodische Grenze:** Historiker können Wunder weder beweisen noch a priori ausschließen; Humes Argument setzt den Naturalismus voraus.`,
    `**Grund des Glaubens:** die Auferstehung Christi mit ihrer breiten frühen Bezeugung – nicht ein späterer Einzelbericht.`,
  ],
  voices: [
    {
      person: 'severus-ibn-al-muqaffa',
      role: 'als koptischer Theologe am Fatimidenhof',
      text: `Severus ibn al-Muqaffa, Bischof von al-Aschmunein im 10. Jahrhundert, war einer der ersten Kopten, die ihren Glauben auf Arabisch darlegten und verteidigten. Nach der koptischen Überlieferung nahm er an Religionsgesprächen vor dem Kalifen al-Muizz teil. Ob jedes Detail dieser Erzählungen historisch ist, lässt sich nicht sicher sagen; sicher ist, dass seine Schriften eine Kirche zeigen, die unter einem muslimischen Herrscher mit Argumenten, nicht mit Gewalt, für die Wahrheit des Glaubens eintrat – genau das Milieu, in dem die Mokattam-Erzählung spielt.`,
      sources: [
        { kind: 'koptisch', author: 'Severus ibn al-Muqaffa', work: 'Die kostbare Perle; Erklärung der Glaubensartikel', year: '10. Jh.', quote: `Arabischsprachige Darlegung und Verteidigung des christlichen Glaubens im islamischen Umfeld.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'keener',
      role: 'als Erforscher von Wunderberichten',
      text: `Keener hat in einer umfangreichen Studie Hunderte moderner Wunderberichte aus aller Welt gesammelt, viele von Augenzeugen und teils medizinisch dokumentiert. Sein Ergebnis: Die Behauptung, gebildete Menschen könnten keine Wunder bezeugen, ist empirisch falsch; Millionen Menschen berichten von Erfahrungen, die sie als göttliches Eingreifen deuten. Das beweist kein einzelnes Wunder – aber es zeigt, dass man Wunderberichte nicht pauschal als Legende abtun kann, sondern jeden einzeln prüfen muss.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles. The Credibility of the New Testament Accounts (2 Bde.)', year: '2011', quote: `Wunderberichte von Augenzeugen sind weltweit verbreitet; eine pauschale Ablehnung beruht auf philosophischen Vorannahmen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Philosoph der Wunderfrage',
      text: `Lewis zeigt in „Wunder", dass die Frage, ob Wunder geschehen können, nicht durch Geschichtsschreibung entschieden wird, sondern durch das Weltbild, mit dem man an die Quellen herangeht. Wer vorab überzeugt ist, dass es nur Natur gibt, wird jeden Wunderbericht als Legende einstufen – ganz gleich, wie gut er bezeugt ist. Wer an einen Schöpfer glaubt, kann Wunder für möglich halten und muss dann jeden Bericht nüchtern prüfen. Lewis warnt ausdrücklich vor Leichtgläubigkeit ebenso wie vor dogmatischer Skepsis.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles. A Preliminary Study', year: '1947', quote: `Die Entscheidung über Wunder hängt an der philosophischen Frage, ob es etwas jenseits der Natur gibt.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'otto-meinardus',
      role: 'als Koptologe und Kenner der koptischen Überlieferung',
      text: `Meinardus hat in seinen Werken über das koptische Christentum die Mokattam-Überlieferung, die Verehrung des hl. Simon und die damit verbundene Frömmigkeitspraxis beschrieben. Seine Darstellungen zeigen, wie eng Geschichte, Legende und liturgische Erinnerung in der koptischen Tradition verwoben sind – und dass gerade solche Erzählungen einer bedrängten Minderheit über Jahrhunderte Hoffnung gaben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Otto F. A. Meinardus', work: 'Two Thousand Years of Coptic Christianity', year: '1999', quote: `Darstellung der koptischen Überlieferung um Papst Abraham, Simon den Gerber und das Mokattam-Wunder.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nur-koptische-quelle',
      objection: `Das Wunder steht nur in einer koptischen Chronik, die Jahrzehnte später zusammengestellt wurde. Das ist keine historische Quelle, sondern Erbauungsliteratur.`,
      objectionBy: 'Historisch-kritischer Forscher',
      answer: `Die Quellenlage ist tatsächlich schwach für ein so spektakuläres Ereignis – das sage ich offen. Die Geschichte der Patriarchen ist eine kirchliche Chronik mit erbaulichem Interesse, und spätere Fassungen haben die Erzählung ausgeschmückt. Darum behandle ich das Wunder als ehrwürdige Überlieferung, nicht als bewiesene Tatsache. Mein Glaube hängt nicht daran.`,
      followUps: [
        {
          id: 'details-wachsen',
          objection: `Und die Details wachsen mit der Zeit: Marienerscheinung, einäugiger Gerber, die Säule – das ist das typische Muster einer Legende.`,
          objectionBy: 'Historisch-kritischer Forscher',
          answer: `Das ist richtig beobachtet: Die älteren Texte spielen auf das Bergwunder an, ohne viele der später bekannten Einzelheiten. Ausschmückung ist ein bekanntes Muster frommer Überlieferung, und ich verteidige nicht jedes Detail. Aber dass eine Erzählung wächst, beweist nicht, dass ihr Kern erfunden ist – es zeigt nur, dass man zwischen Kern und Schmuck unterscheiden muss.`,
          followUps: [
            {
              id: 'kern-auch-erfunden',
              objection: `Wie willst du denn den Kern vom Schmuck unterscheiden, wenn du nur diese eine Quelle hast?`,
              objectionBy: 'Historisch-kritischer Forscher',
              answer: `Mit historischen Mitteln nur begrenzt – das gestehe ich zu. Gesichert ist der Rahmen: Abrahams Pontifikat, der Fatimidenhof, der Wesir Ibn Killis, die Religionsgespräche, eine Bedrohung der Christen und eine liturgische Praxis, die daran erinnert. Ob dabei ein Wunder geschah, kann die Geschichtswissenschaft weder beweisen noch widerlegen. Hier endet die Methode, und der Glaube beginnt – ohne dass ich Gewissheit behaupte, wo ich keine habe.`,
              followUps: [
                {
                  id: 'dann-unglaeubig-sein',
                  objection: `Dann sei konsequent und sag einfach: Es ist eine Legende. Warum hältst du dir die Hintertür offen?`,
                  objectionBy: 'David Hume (Argumentationsmuster)',
                  answer: `Weil „nicht beweisbar" nicht dasselbe ist wie „falsch". Wer sagt, es sei sicher eine Legende, setzt voraus, dass Gott nicht handeln kann – das ist eine philosophische Vorentscheidung, keine historische Erkenntnis. Ich halte die Frage offen, ehre die Überlieferung meiner Kirche und gründe meinen Glauben auf das, was am besten bezeugt ist: die Auferstehung Christi.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'keine-islamischen-chroniken',
      objection: `Wenn sich wirklich ein Berg vor dem Kalifen und ganz Kairo erhoben hätte, müssten muslimische Chronisten davon berichten. Sie schweigen.`,
      objectionBy: 'Muslimischer Kritiker',
      answer: `Soweit bekannt, berichten die islamischen Chroniken davon nicht, und das ist ein ernsthafter Einwand. Man kann einwenden, dass muslimische Hofchronisten kaum ein Ereignis festhielten, das die Überlegenheit des Christentums zeigen sollte – aber das ist eine Erklärung, kein Beweis. Ich ziehe daraus den ehrlichen Schluss: Das Wunder ist Glaubensüberlieferung der Kopten, nicht allgemein bezeugte Geschichte.`,
      followUps: [
        {
          id: 'schweigen-erklaerung-bequem',
          objection: `„Die Muslime hätten es verschwiegen" – das ist eine bequeme Ausrede, die alles erklären kann.`,
          objectionBy: 'Muslimischer Kritiker',
          answer: `Da hast du recht, und deshalb stütze ich mich nicht darauf. Ich behaupte nicht, das Wunder sei historisch erwiesen. Ich sage nur: Sein Fehlen in islamischen Quellen macht es historisch unbeweisbar, aber nicht logisch unmöglich. Und als Christ würde ich niemandem raten, seinen Glauben an Christus auf das Mokattam-Wunder zu gründen.`,
        },
      ],
    },
    {
      id: 'chronologie-muizz',
      objection: `Al-Muizz starb im Dezember 975, Abraham wurde erst 975 Patriarch. Für eine solche Geschichte bleibt kaum Zeit. Die Chronologie verrät die Legende.`,
      objectionBy: 'Historisch-kritischer Forscher',
      answer: `Die Chronologie ist tatsächlich eng, und das ist ein berechtigter Einwand. Möglich ist, dass das Ereignis in die kurze Überschneidung fällt, oder dass die Überlieferung den berühmten Kalifen mit einem Geschehen unter seinem Nachfolger al-Aziz verband – so etwas geschieht in mündlicher Überlieferung häufig. Beweisen lässt sich beides nicht. Ich nenne das Problem offen, statt es wegzureden.`,
      followUps: [
        {
          id: 'kalif-bekehrt',
          objection: `Manche Kopten erzählen sogar, der Kalif habe sich danach taufen lassen und sei Mönch geworden. Das ist doch offensichtlich absurd.`,
          objectionBy: 'Muslimischer Kritiker',
          answer: `Diese Erzählung halte ich für eine spätere, unhistorische Ausschmückung, und ich würde sie nicht vertreten. Sie gehört zu genau den Details, die man ehrlich als Legende kennzeichnen muss. Gerade weil ich solche Zusätze nicht verteidige, kann ich den Kern der Überlieferung umso nüchterner betrachten.`,
        },
      ],
    },
    {
      id: 'wunder-unmoeglich',
      objection: `Berge bewegen sich nicht auf Gebet hin. Wunder verletzen die Naturgesetze – deshalb ist die Geschichte von vornherein unglaubwürdig.`,
      objectionBy: 'David Hume (Argumentationsmuster)',
      answer: `Ob Wunder möglich sind, ist keine historische, sondern eine philosophische Frage. Wenn es einen Schöpfer gibt, der die Naturgesetze geschaffen hat, kann er auch in seiner Schöpfung handeln, ohne sie zu „verletzen". Wer Wunder grundsätzlich ausschließt, hat das Ergebnis schon vor der Prüfung festgelegt. Ich prüfe Wunderberichte lieber einzeln – und dabei halte ich manche für glaubwürdig, andere für Legende.`,
      followUps: [
        {
          id: 'warum-dann-auferstehung',
          objection: `Wenn du beim Mokattam so vorsichtig bist – warum dann nicht auch bei der Auferstehung? Auch sie ist nur in christlichen Quellen bezeugt.`,
          objectionBy: 'Bart Ehrman (Argumentationsmuster)',
          answer: `Weil die Quellenlage völlig verschieden ist: Für die Auferstehung haben wir Zeugnisse aus den ersten Jahren nach dem Ereignis (1 Kor 15,3–8), mehrere unabhängige Berichte, das leere Grab, die Bekehrung von Skeptikern wie Jakobus und Paulus und Zeugen, die dafür starben. Beim Mokattam haben wir eine einzige, später redigierte Überlieferung. Wer beide gleich behandelt, ignoriert die Unterschiede, die jeder Historiker machen würde.`,
        },
      ],
    },
    {
      id: 'fasten-auf-legende',
      objection: `Ihr fastet jedes Jahr drei Tage wegen einer Legende. Ist das nicht Aberglaube?`,
      objectionBy: 'Säkularer Kritiker',
      answer: `Das Fasten ist Gebet und Buße vor dem Weihnachtsfest; die Erinnerung an Mokattam gibt ihm einen Anlass, nicht seinen Sinn. Auch wer das Wunder historisch offenlässt, kann drei Tage beten und fasten in Dankbarkeit dafür, dass Gott seine Kirche in Bedrängnis bewahrt hat – und das hat er nachweislich: Die Kopten haben vierzehn Jahrhunderte unter schwierigen Bedingungen überlebt. Aberglaube wäre es, Gott durch Fasten zwingen zu wollen; das lehrt die Kirche nicht.`,
      followUps: [
        {
          id: 'simon-reliquien',
          objection: `Und die angeblich 1991 gefundenen Gebeine des Simon? Wie will man nach tausend Jahren wissen, wem sie gehören?`,
          objectionBy: 'Säkularer Kritiker',
          answer: `Die Identifizierung beruht auf kirchlichen Angaben und Überlieferung, nicht auf wissenschaftlichem Nachweis – das sage ich offen. Für die Gläubigen sind die Reliquien ein Zeichen der Verbundenheit mit einem heiligen Mann; die Echtheit einzelner Reliquien ist aber keine Glaubensfrage. Das eigentliche Wunder auf dem Mokattam sieht man heute in der Kirche der Müllsammler, wo Arme seit Jahrzehnten eine lebendige Gemeinde aufgebaut haben.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Wunder grundsätzlich unmöglich sind – ist das ein Ergebnis der Quellenprüfung oder eine Voraussetzung?`,
    `Siehst du einen Unterschied zwischen der Quellenlage des Mokattam-Wunders und der der Auferstehung Jesu?`,
    `Welche Teile der Überlieferung (Abraham, al-Muizz, Ibn Killis) hältst du für historisch?`,
  ],
  avoid: [
    `Das Mokattam-Wunder als historisch bewiesen ausgeben oder als Hauptargument für das Christentum benutzen.`,
    `Die Legende von der Taufe des Kalifen vertreten.`,
    `Muslimen das Schweigen ihrer Chronisten als „Verschwörung" vorwerfen.`,
    `Simon den Gerber als Vorbild für wörtliche Selbstverstümmelung (Mt 5,29) darstellen.`,
  ],
  concessions: [
    `Das Wunder ist nur in koptisch-kirchlicher Überlieferung bezeugt, die später redigiert und ausgeschmückt wurde.`,
    `Die Chronologie (Tod al-Muizz' Ende 975) ist eng und ungeklärt.`,
    `Mit historischen Methoden lässt sich das Wunder weder beweisen noch widerlegen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Mark N. Swanson', work: 'The Coptic Papacy in Islamic Egypt (641–1517)', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Otto F. A. Meinardus', work: 'Two Thousand Years of Coptic Christianity', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles', year: '1947', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mokattam', 'Simon der Gerber', 'Abraham ibn Zura', 'al-Muizz', 'Wunder', 'Geschichte der Patriarchen'],
  related: ['auferstehung/wunder-historisch-unmoeglich', 'physik/wunder-verletzen-naturgesetze', 'moenchtum-reliquien/reliquien-aberglaube', 'koptische-kirche/kopten-begruessten-araber'],
};

export default claim;
