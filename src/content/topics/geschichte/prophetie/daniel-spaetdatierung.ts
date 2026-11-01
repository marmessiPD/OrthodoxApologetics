import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'daniel-spaetdatierung',
  title: `„Daniel wurde erst um 165 v. Chr. geschrieben."`,
  proponents: [
    { name: 'John J. Collins', role: 'Alttestamentler, Yale', work: 'Daniel (Hermeneia-Kommentar, 1993)' },
    { name: 'Porphyrios von Tyros', role: 'Neuplatonischer Philosoph (3. Jh.)', work: 'Gegen die Christen, Buch 12 (überliefert bei Hieronymus)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill', work: 'Vorlesungen und Bücher zur Apokalyptik' },
    { name: 'Dan McClellan', role: 'Bibelwissenschaftler und Wissenschaftskommunikator', work: 'Data Over Dogma' },
  ],
  steelman: `Das Buch Daniel gibt sich als Werk eines jüdischen Weisen am babylonischen und persischen Hof des 6. Jahrhunderts aus. Tatsächlich ist es – wie schon der Philosoph Porphyrios im 3. Jahrhundert erkannte – während der Religionsverfolgung unter Antiochos IV. Epiphanes (167–164 v. Chr.) entstanden. Die „Prophetie" in Dan 11 schildert die Kriege der Ptolemäer und Seleukiden so detailliert wie ein Geschichtsbuch – bis 11,39. Danach (11,40–45) wird sie falsch: Antiochos stirbt nicht in Palästina, sondern in Persien. Genau hier liegt die Abfassungszeit. Dazu kommen persische und griechische Lehnwörter, ein historisch unbekannter „Darius der Meder", die Stellung des Buches unter den „Schriften" statt den Propheten und sein Fehlen im Väterlob des Jesus Sirach (um 180 v. Chr.). Daniel ist ein Trostbuch für Verfolgte in prophetischer Verkleidung (vaticinium ex eventu).`,
  biblical: {
    summary: `Daniel versteht sich als Prophetie im Rahmen der Weltreiche: Babylon, Medo-Persien, Griechenland – und ein viertes Reich, auf das Gottes ewiges Reich folgt (Dan 2; 7). Dan 9 kündigt das Kommen und den Tod („Ausrottung") eines Gesalbten und die anschließende Zerstörung von Stadt und Heiligtum an. Dan 7,13 spricht vom „Menschensohn", der mit den Wolken des Himmels kommt – der Titel, den Jesus für sich wählte (Mk 14,62). Jesus nennt Daniel ausdrücklich einen „Propheten" (Mt 24,15).`,
    detail: `**Innere Logik der Reiche:** Daniel selbst behandelt Medien und Persien als **ein** Reich: Der Widder mit zwei Hörnern steht für „die Könige von Medien und Persien" (Dan 8,20), das „Gesetz der Meder und Perser" gilt einheitlich (Dan 6,9.13.16), Babylon wird „den Medern und Persern" gegeben (Dan 5,28). Damit ist Griechenland das dritte Reich (der Leopard mit vier Köpfen = die vier Diadochenreiche, vgl. 8,8.21–22) und das vierte Reich ein Nachfolger Griechenlands – Rom.

**Dan 9,26:** „Nach den zweiundsechzig Wochen wird ein Gesalbter ausgerottet werden … und das Volk eines Fürsten wird kommen und die Stadt und das Heiligtum zerstören." Antiochos IV. entweihte den Tempel, zerstörte ihn aber nicht; die Zerstörung von Stadt und Heiligtum geschah im Jahr 70 n. Chr.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '24,15', quote: `Wenn ihr nun sehen werdet den Greuel der Verwüstung (davon gesagt ist durch den Propheten Daniel), daß er steht an der heiligen Stätte (wer das liest, der merke darauf!),`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '8,20–21', quote: `Der Widder mit den zwei Hörnern sind die Könige von Medien und Persien; der Ziegenbock ist der König von Griechenland.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Daniel', ref: '9,26', quote: `Und nach den zweiundsechzig Wochen wird Christus ausgerottet werden und nichts mehr sein. Und das Volk eines Fürsten wird kommen und die Stadt und das Heiligtum verstören,`, translation: 'Luther 1912', status: 'verbatim', note: 'Luther übersetzt māšîaḥ mit „Christus"; wörtlich „ein Gesalbter".' },
      { kind: 'bibel', work: 'Daniel', ref: '7,13–14', quote: `Ich sah einen wie eines Menschen Sohn mit den Wolken des Himmels kommen; ihm wurde ewige Herrschaft gegeben, die nicht vergeht.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Daniel', ref: '5,29', quote: `Belsazar ließ Daniel mit Purpur bekleiden und ausrufen, er sei der dritte Herrscher im Königreich.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche liest Daniel seit jeher als echte Prophetie auf Christus hin: den Stein, der ohne Menschenhand losbricht (Dan 2,34.45), den Menschensohn (Dan 7,13) und die siebzig Wochen (Dan 9). Hippolyt schrieb im frühen 3. Jahrhundert den ältesten erhaltenen christlichen Bibelkommentar überhaupt – zu Daniel. Athanasius von Alexandrien führt in „Über die Menschwerdung" Dan 9 als Beweis an, dass der Messias gekommen ist. Hieronymus widerlegte Porphyrios' Spätdatierung ausführlich. In der koptischen Kirche wird Daniel als Prophet verehrt; die drei Jünglinge im Feuerofen (Dan 3) sind fester Bestandteil der Psalmodie des Monats Koiak.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '39–40', year: 'ca. 318', quote: `Athanasius beruft sich auf die siebzig Wochen Daniels: Seit Christus gibt es in Jerusalem weder König noch Prophet noch Vision mehr – der Gesalbte, der kommen sollte, ist gekommen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Kommentar zu Daniel, Prolog', year: '407', quote: `Porphyrios habe das 12. Buch seines Werkes gegen die Christen Daniel gewidmet und behauptet, das Buch stamme aus der Zeit des Antiochos Epiphanes; er habe nicht vorausgesagt, sondern Vergangenes erzählt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hippolyt von Rom (zugeschrieben)', work: 'Kommentar zu Daniel', year: 'frühes 3. Jh.', quote: `Ältester erhaltener christlicher Bibelkommentar; deutet das vierte Reich auf Rom.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der kritischen Forschung gilt nahezu einhellig: Die Visionen (Dan 7–12) sind in ihrer Endgestalt 167–164 v. Chr. entstanden; die Hoferzählungen (Dan 1–6) sind älter (persische oder frühhellenistische Zeit). Konservative Forscher (Kitchen, Yamauchi, Archer, Baldwin) halten eine Entstehung im 6./5. Jahrhundert für vertretbar. Ehrlich ist: Die Spätdatierung beruht stark auf Dan 11 und der Annahme, detaillierte Vorhersage sei unmöglich; die sprachlichen Argumente sind auf beiden Seiten nicht zwingend.`,
    detail: `**Qumran:** Acht Daniel-Handschriften (1QDan^a,b, 4QDan^a–e, 6QDan). 4QDan^c wird paläographisch (Frank M. Cross) ins späte 2. Jh. v. Chr. datiert – wenige Jahrzehnte nach der kritischen Abfassungszeit. 4QFlorilegium (4Q174) zitiert „das Buch Daniel, des Propheten". Das Buch war also sehr schnell weit verbreitet und autoritativ.

**1. Makkabäer 2,59–60** (um 100 v. Chr.) lässt den Priester Mattathias († 166) Daniel und seine Gefährten als Glaubensvorbilder nennen.

**Sprache:** Das Aramäische von Dan 2,4b–7,28 ist nach Kitchen (1965) Reichsaramäisch, wie es vom 7. bis zum 2. Jh. verwendet wurde – sprachlich nicht eindeutig datierbar. Rund 19 persische Lehnwörter passen zu einer Abfassung in oder nach der Perserzeit. Griechisch sind nur drei Wörter, alle Musikinstrumente (Dan 3,5: *qayterôs*/kitharis, *pesanterîn*/psaltērion, *sûmpōnyāh*/symphōnia). Kritiker verweisen darauf, dass *symphōnia* als Instrument erstmals bei Polybios im Zusammenhang mit Antiochos IV. bezeugt ist.

**Historische Probleme:** Belsazar galt bis zur Entdeckung des Nabonid-Zylinders aus Ur (1854) als unhistorisch; heute ist er als Sohn und Mitregent Nabonids belegt. „Darius der Meder" ist außerbiblisch weiterhin nicht identifiziert (Vorschläge: Gubaru, Kyros selbst, Kyaxares II.).`,
    sources: [
      { kind: 'gegner', author: 'John J. Collins', work: 'Daniel. A Commentary on the Book of Daniel (Hermeneia)', year: '1993', quote: `Die Visionen entstanden während der Verfolgung unter Antiochos IV.; Dan 11,40–45 ist echte, aber nicht eingetroffene Vorhersage und datiert das Buch vor den Tod des Antiochos 164 v. Chr.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'The Aramaic of Daniel. In: D. J. Wiseman u. a., Notes on Some Problems in the Book of Daniel', year: '1965', quote: `Das Aramäische Daniels ist Reichsaramäisch; nichts darin erzwingt eine Datierung ins 2. Jh. v. Chr.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Greece and Babylon. Early Contacts between the Aegean and the Near East', year: '1967', quote: `Griechische Söldner, Handwerker und Musiker sind im Vorderen Orient schon vor Alexander belegt; die drei griechischen Instrumentennamen in Dan 3 erzwingen keine Spätdatierung.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Qumran, 4QFlorilegium (4Q174)', year: '1. Jh. v. Chr.', quote: `Zitat aus dem „Buch Daniel, des Propheten".`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Nabonid-Zylinder aus Ur (British Museum)', year: 'ca. 550–540 v. Chr., gefunden 1854', quote: `Nabonid betet für sich und für „Bel-šarra-uṣur, meinen erstgeborenen Sohn".`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Spätdatierung beruht vor allem auf einer Vorannahme: Echte Vorhersage gibt es nicht – also muss Dan 11 nach den Ereignissen geschrieben sein. Aber selbst wenn man 165 v. Chr. annimmt, bleibt Prophetie übrig: Daniel kündigt ein viertes Weltreich nach Griechenland an (Rom), den Tod eines Gesalbten und danach die Zerstörung von Stadt und Tempel – das geschah im Jahr 70 n. Chr. Dazu kommt: Wenige Jahrzehnte nach 165 lag Daniel in Qumran in acht Abschriften vor und galt als „Prophet". Und Daniel kannte Belsazar als „zweiten" Herrscher – ein Detail, das griechische Historiker längst vergessen hatten.`,
  keyPoints: [
    `**Vorannahme offenlegen:** Die Spätdatierung beginnt historisch bei Porphyrios mit dem Prinzip „Vorhersage ist unmöglich". Das ist eine Weltanschauung, kein Befund.`,
    `**Prophetie auch bei 165 v. Chr.:** Viertes Reich nach Griechenland (Rom), Menschensohn, Tod des Gesalbten und Zerstörung von Stadt und Heiligtum (70 n. Chr.).`,
    `**Medo-Persien ist bei Daniel ein Reich** (8,20; 6,9; 5,28) – das kritische Schema Babylon–Medien–Persien–Griechenland widerspricht dem Buch selbst.`,
    `**Schnelle Anerkennung:** acht Handschriften in Qumran, „Daniel der Prophet" (4Q174), Daniel als Vorbild in 1 Makk 2,59–60 – merkwürdig für eine Schrift, die sich binnen Monaten als falsch erwiesen hätte.`,
    `**Belsazar:** Der Nabonid-Zylinder (1854) bestätigt ihn; Daniel weiß, dass er nur Mitregent war („dritter im Reich" für Daniel) – Herodot und Xenophon kennen ihn nicht.`,
    `**Sprache entscheidet nichts:** Reichsaramäisch, persische Lehnwörter, nur drei griechische Instrumentennamen – nach 150 Jahren griechischer Herrschaft würde man mehr Griechisch erwarten.`,
    `**Ehrlich:** Dan 11,40–45 und „Darius der Meder" sind echte Schwierigkeiten.`,
  ],
  argument: {
    name: 'Das Restprophetie-Argument',
    summary: 'Auch unter Annahme der kritischen Datierung enthält Daniel eingetroffene Vorhersagen.',
    premises: [
      { text: `P1: Selbst nach kritischer Datierung wurde Daniel spätestens um 164 v. Chr. abgeschlossen.`, support: `Konsens der kritischen Forschung; Qumran-Handschriften ab dem späten 2. Jh. v. Chr. bestätigen die frühe Existenz.` },
      { text: `P2: Daniel kündigt ein viertes Reich nach Griechenland, den Tod eines Gesalbten und danach die Zerstörung von Stadt und Heiligtum an.`, support: `Dan 2; 7; 8,20–22 (Medo-Persien als ein Reich); Dan 9,26.` },
      { text: `P3: Diese Ereignisse liegen nach 164 v. Chr.: Roms Herrschaft über Judäa (63 v. Chr.), Jesu Kreuzigung (um 30 n. Chr.), die Zerstörung Jerusalems und des Tempels (70 n. Chr.).`, support: `Antiochos IV. entweihte den Tempel, zerstörte aber weder Stadt noch Heiligtum; Jesus und Josephus bezogen Daniel auf Kommendes.` },
    ],
    conclusion: `Auch bei der Spätdatierung enthält Daniel Vorhersagen, die erst lange nach seiner Abfassung eintrafen. Die Datierungsfrage beseitigt das Phänomen Prophetie nicht.`,
  },
  voices: [
    {
      person: 'hieronymus',
      role: 'als Philologe gegen Porphyrios',
      text: `Hieronymus kannte das Argument der Spätdatierung schon aus dem 3. Jahrhundert: Porphyrios hatte behauptet, Daniel habe nicht Künftiges vorausgesagt, sondern Vergangenes erzählt. Hieronymus antwortet in seinem Danielkommentar Vers für Vers. Er räumt ein, dass Dan 11 bis in Einzelheiten die Geschichte der hellenistischen Könige beschreibt – und sieht gerade darin die Kraft der Prophetie. Ab Dan 11,21 bzw. 11,36 liest er die Prophetie typologisch: Antiochos ist Vorbild des Antichristen, auf den die letzten Verse eigentlich zielen.

Bemerkenswert: Hieronymus merkt an, dass Porphyrios' Angriff selbst ein Zeugnis ist – so genau trifft Daniel die Geschichte, dass sein Gegner nur noch behaupten konnte, das Buch sei nachträglich geschrieben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Hieronymus', work: 'Kommentar zu Daniel', ref: 'Prolog und zu Kap. 11', year: '407', quote: `Die Genauigkeit der Prophetie habe Porphyrios gezwungen, ihre Abfassung nach den Ereignissen zu behaupten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kitchen',
      role: 'als Semitist und Altorientalist',
      text: `Kitchens Studie von 1965 zum Aramäischen Daniels ist bis heute ein Referenzpunkt: Wortschatz, Grammatik und Rechtschreibung liegen im Rahmen des Reichsaramäischen, das über Jahrhunderte als Verwaltungssprache diente. Rechtschreibliche Modernisierungen im Laufe der Überlieferung sind zu erwarten und datieren nicht die Abfassung. Kitchen folgert nicht, dass die Sprache ein Frühdatum beweist, sondern dass sie die Spätdatierung nicht erzwingt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'The Aramaic of Daniel', year: '1965', quote: `Nichts im Aramäischen Daniels erzwingt eine Abfassung im 2. Jahrhundert v. Chr.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'edwin-yamauchi',
      role: 'als Althistoriker der Beziehungen zwischen Griechenland und dem Orient',
      text: `Yamauchi hat gezeigt, dass griechische Söldner, Händler und Handwerker schon im 7. und 6. Jahrhundert im Vorderen Orient präsent waren – babylonische Verwaltungstexte aus der Zeit Nebukadnezars erwähnen ionische Handwerker. Dass gerade Musikinstrumente griechische Namen tragen, ist für ihn kulturgeschichtlich naheliegend, da Instrumente mit ihren Namen wandern. Auffällig sei vielmehr, dass ein Werk des 2. Jahrhunderts nach anderthalb Jahrhunderten griechischer Verwaltung fast kein Griechisch enthielte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Greece and Babylon', year: '1967', quote: `Frühe Kontakte zwischen Ägäis und Orient; die griechischen Lehnwörter Daniels erzwingen keine Spätdatierung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Apologet der Menschwerdung',
      text: `Athanasius argumentiert in „Über die Menschwerdung" mit Dan 9: Die Prophetie nennt eine Frist, nach der „Vision und Prophet versiegelt" werden und der Gesalbte kommt. Er stellt seinen jüdischen Gesprächspartnern die Frage, wo heute in Jerusalem noch König, Prophet und Vision seien – seit Christus sei all das zu Ende gekommen, weil der, auf den alles wies, erschienen ist. Für ihn ist Daniel kein Rätselbuch, sondern ein datiertes Zeugnis auf Christus hin.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '39–40', year: 'ca. 318', quote: `Die siebzig Wochen Daniels sind in Christus erfüllt; seither sind Prophetie und Königtum in Jerusalem erloschen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als Semitist im Gespräch mit dem Judentum',
      text: `Brown betont, dass Dan 9 das Kommen und die „Ausrottung" eines Gesalbten **vor** der Zerstörung des zweiten Tempels ansetzt. Unabhängig davon, wie man die siebzig Wochen im Einzelnen berechnet, schließt sich dieses Zeitfenster im Jahr 70 n. Chr. Wer den Messias noch erwartet, muss erklären, wer der Gesalbte ist, der vor der Zerstörung von Stadt und Heiligtum kam und getötet wurde.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 3: Messianic Prophecy Objections', year: '2003', quote: `Dan 9 setzt das Kommen des Gesalbten vor die Zerstörung des zweiten Tempels.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'vaticinium-ex-eventu',
      objection: `Dan 11 beschreibt die Kriege zwischen Ptolemäern und Seleukiden so detailliert wie ein Geschichtsbuch – Ehen, Verrat, Feldzüge. Das ist keine Prophetie, das ist Geschichtsschreibung im Futur. Klassisches vaticinium ex eventu.`,
      objectionBy: 'John J. Collins',
      answer: `Die Genauigkeit von Dan 11 ist erstaunlich – das sah schon Hieronymus. Aber dass sie ein Beweis für Nachträglichkeit sein soll, setzt voraus, dass Vorhersage unmöglich ist. Das ist eine Vorannahme, kein Befund. Und selbst wenn man 165 v. Chr. annimmt, sagt Daniel Dinge voraus, die danach geschahen: ein viertes Reich nach Griechenland, den Tod eines Gesalbten und die Zerstörung von Stadt und Tempel.`,
      questionsBack: [`Würdest du die Spätdatierung auch vertreten, wenn du echte Vorhersage für möglich hieltest?`],
      followUps: [
        {
          id: 'antiochus-tod-falsch',
          objection: `Ab 11,40 liegt der Text daneben: Antiochos stirbt nicht „zwischen dem Meer und dem herrlichen heiligen Berg", sondern in Persien. Genau an der Stelle, wo die Vorhersage falsch wird, liegt die Abfassungszeit.`,
          objectionBy: 'John J. Collins',
          answer: `Das ist das stärkste Argument der Spätdatierung, und ich nehme es ernst. Aber der Text gibt selbst ein Signal: In 11,40 beginnt „die Zeit des Endes", und unmittelbar danach folgt die Auferstehung der Toten (12,2). Deshalb lasen Hieronymus und viele Ausleger die letzten Verse als Ausblick auf den endzeitlichen Widersacher, für den Antiochos das Vorbild ist.`,
          followUps: [
            {
              id: 'typologie-bequem',
              objection: `Wie praktisch: Genau dort, wo der Text versagt, wird er plötzlich „typologisch". Das ist eine Ausrede.`,
              objectionBy: 'Dan McClellan',
              answer: `Hieronymus hat diese Lesart im Jahr 407 vertreten, nicht als moderne Verlegenheitslösung. Und deine eigene Lesart muss auch etwas erklären: Wenn der Autor das Ende 164 v. Chr. erwartete, hat er sich nicht nur beim Tod des Antiochos geirrt, sondern auch bei der Auferstehung der Toten (12,2). Dann muss man erklären, warum die Juden dieses Buch trotzdem sofort als prophetisch annahmen.`,
              followUps: [
                {
                  id: 'apokalyptik-umgedeutet',
                  objection: `Gescheiterte Vorhersagen werden immer umgedeutet – denk an die Milleriten. Das ist Religionspsychologie, nichts Besonderes.`,
                  objectionBy: 'John J. Collins',
                  answer: `Bei kleinen Gruppen kommt das vor. Hier aber wird ein Buch, dessen Vorhersage nach deiner Datierung binnen Monaten sichtbar gescheitert wäre, innerhalb weniger Jahrzehnte im ganzen Judentum anerkannt: acht Handschriften in Qumran, „Daniel der Prophet" in 4Q174, Daniel als Glaubensvorbild in 1 Makk 2,59–60, Prophet bei Josephus. Ein offenkundiger Fehlschlag wäre ein seltsames Fundament für eine so schnelle, breite Anerkennung.`,
                  sources: [
                    { kind: 'bibel', work: '1. Makkabäer', ref: '2,59–60', quote: `Mattathias erinnert an Hananja, Asarja und Mischaël, die aus der Flamme gerettet wurden, und an Daniel, der aus dem Rachen der Löwen befreit wurde.`, status: 'paraphrase', note: 'Deuterokanonisch; um 100 v. Chr. verfasst.' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'kanon-ketuvim',
          objection: `Daniel steht in der hebräischen Bibel unter den „Schriften", nicht unter den Propheten. Der Prophetenkanon war schon abgeschlossen, als Daniel entstand. Und Jesus Sirach erwähnt Daniel in seinem Väterlob um 180 v. Chr. nicht.`,
          objectionBy: 'Bart Ehrman',
          answer: `Die Einordnung unter die „Schriften" ist eine spätere rabbinische Anordnung. Josephus zählt Daniel im 1. Jahrhundert zu den Propheten und nennt ihn einen der größten; Qumran spricht von „Daniel dem Propheten"; die Septuaginta stellt ihn zu den Propheten; Jesus nennt ihn Prophet. Und das Schweigen Sirachs beweist wenig: Er übergeht auch Esra, den großen Schriftgelehrten.`,
          sources: [
            { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '10,266–268', year: 'ca. 93 n. Chr.', quote: `Daniel sei einer der größten Propheten gewesen; er habe nicht nur Künftiges vorausgesagt, sondern auch die Zeit der Erfüllung bestimmt.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'lehnwoerter',
      objection: `Persische Lehnwörter und sogar griechische Wörter in Dan 3,5 – das verrät die persische und hellenistische Zeit.`,
      objectionBy: 'John J. Collins',
      answer: `Persische Wörter passen zu einem jüdischen Beamten, der nach dem Buch selbst bis in die Zeit des Kyros am Hof diente (Dan 1,21; 6,29). Griechisch sind nur drei Wörter – alle Musikinstrumente, und Instrumente wandern mit ihren Namen; griechische Söldner und Handwerker sind im Babylon Nebukadnezars belegt. Ein Autor von 165 v. Chr., nach 150 Jahren griechischer Verwaltung, hätte wohl deutlich mehr Griechisch verwendet.`,
      followUps: [
        {
          id: 'symphonia-polybios',
          objection: `Das Wort symphōnia als Instrument ist zum ersten Mal bei Polybios bezeugt – ausgerechnet im Zusammenhang mit Antiochos IV.! Zufall?`,
          objectionBy: 'John J. Collins',
          answer: `Das ist eine interessante Beobachtung, die ich fair nenne. Aber Erstbelege sind bei unserer lückenhaften Überlieferung griechischer Literatur ein schwaches Datierungsmittel – das Wort selbst ist im musikalischen Sinn (Zusammenklang) schon bei Platon belegt. Dass ein Begriff für ein Instrument zuerst in einem erhaltenen Text des 2. Jahrhunderts auftaucht, heißt nicht, dass es ihn vorher nicht gab.`,
          followUps: [
            {
              id: 'aramaeisch-spaet',
              objection: `Auch das Aramäische Daniels zeigt Merkmale, die jünger sind als die Elephantine-Papyri des 5. Jahrhunderts.`,
              objectionBy: 'John J. Collins',
              answer: `Kitchen hat 1965 gezeigt, dass diese Merkmale im Spektrum des Reichsaramäischen liegen und dass Schreibweisen bei der Abschrift modernisiert wurden – so wie Luthers Bibel heute in neuer Rechtschreibung gedruckt wird. Umgekehrt unterscheidet sich das Aramäische Daniels deutlich von Qumran-Texten wie dem Genesis-Apokryphon. Sprachlich ist die Frage nicht entscheidbar.`,
              followUps: [
                {
                  id: 'linguistik-unentschieden',
                  objection: `Wenn die Sprache nichts entscheidet, kannst du sie auch nicht für ein Frühdatum anführen.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Einverstanden – und genau das ist mein Punkt. Wenn die Sprache neutral ist, ruht die Spätdatierung im Wesentlichen auf Dan 11 und auf der Annahme, Vorhersage sei unmöglich. Dann sind wir wieder bei der Weltanschauungsfrage – und bei den Vorhersagen, die auch nach 165 v. Chr. eintrafen.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'belsazar-fehler',
      objection: `Daniel macht historische Fehler: Belsazar war nie König und nicht Nebukadnezars Sohn, und „Darius der Meder" hat es nie gegeben.`,
      objectionBy: 'Bart Ehrman',
      answer: `Belsazar galt im 19. Jahrhundert tatsächlich als Erfindung – bis 1854 der Nabonid-Zylinder aus Ur gefunden wurde, der ihn als erstgeborenen Sohn Nabonids nennt. Andere babylonische Texte zeigen, dass Nabonid ihm während seines langen Aufenthalts in Tayma das Königtum anvertraute. Darum kann Belsazar Daniel nur zum „dritten" im Reich machen (Dan 5,16.29): Er selbst war der zweite. „Sohn" bedeutet im Alten Orient auch „Nachfolger" – die Assyrer nennen Jehu „Sohn Omris", obwohl er dessen Dynastie stürzte.`,
      followUps: [
        {
          id: 'wissen-in-babylon',
          objection: `Dieses Wissen konnte in babylonischen Chroniken überliefert werden. Ein Autor im 2. Jahrhundert konnte es kennen.`,
          objectionBy: 'John J. Collins',
          answer: `Theoretisch ja. Aber Herodot und Xenophon, die maßgeblichen griechischen Historiker, kennen Belsazar nicht; Berossos nennt Nabonid als letzten König. Ein Detail wie die Mitregentschaft, beiläufig erzählt in einer Hofgeschichte, ist typisch für zeitnahe Überlieferung – zumal die kritische Forschung die Hoferzählungen (Dan 1–6) ohnehin für älter hält als das 2. Jahrhundert.`,
          followUps: [
            {
              id: 'darius-der-meder',
              objection: `Und Darius der Meder? Kein einziger Text kennt ihn. Das ist ein glatter Fehler.`,
              objectionBy: 'Bart Ehrman',
              answer: `Ehrlich: Darius der Meder ist bis heute nicht sicher identifiziert. Vorgeschlagen werden Gubaru, der Statthalter von Babylon, Kyros selbst – Dan 6,29 lässt sich lesen als „unter Darius, das heißt unter Kyros" – oder Kyaxares II. Bevor man von einem Fehler spricht, sollte man sich an Belsazar erinnern: Auch er galt als Fehler, bis ein Zylinder auftauchte.`,
              followUps: [
                {
                  id: 'ein-zufallstreffer',
                  objection: `Ein Zufallstreffer bei Belsazar macht Darius nicht real.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Richtig, ich behaupte nicht, dass Darius bewiesen ist. Ich behaupte nur, dass sein Fehlen in den sehr lückenhaften Quellen zur Verwaltung Babylons nach 539 v. Chr. kein Beweis ist. Das ist dieselbe Methodenregel, die du sonst auch anwendest: Ein Argument aus dem Schweigen trägt nur, wenn man Belege erwarten müsste.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vier-reiche-griechenland',
      objection: `Die vier Reiche sind Babylon, Medien, Persien und Griechenland. Das vierte Reich endet mit Antiochos. Von Rom steht in Daniel nichts.`,
      objectionBy: 'John J. Collins',
      answer: `Daniel selbst kennt kein eigenes medisches Weltreich zwischen Babylon und Persien: Der Widder steht für „die Könige von Medien und Persien" (8,20), es gilt das eine „Gesetz der Meder und Perser" (6,9), Babylon fällt an „Meder und Perser" (5,28). Dann ist Griechenland das dritte Reich – der Leopard mit vier Köpfen, wie die vier Diadochenreiche – und das vierte folgt nach Griechenland. Genau so lasen es die Juden im 1. Jahrhundert: Josephus bezog Daniel auf die Römer.`,
      sources: [
        { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: '10,276', year: 'ca. 93 n. Chr.', quote: `Daniel habe auch über die Herrschaft der Römer geschrieben und dass unser Land durch sie verwüstet werden würde.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'vier-esra-umdeutung',
          objection: `4 Esra 12 sagt ausdrücklich, die Adlervision deute Daniels viertes Reich auf Rom um – „nicht so, wie es Daniel erklärt wurde". Das ist eine Umdeutung.`,
          objectionBy: 'John J. Collins',
          answer: `4 Esra zeigt mindestens, dass Juden des 1. Jahrhunderts Rom als das vierte Reich verstanden. Entscheidend ist aber nicht die spätere Rezeption, sondern das Buch selbst – und das behandelt Medo-Persien als eine Größe. Das kritische Vier-Reiche-Schema muss ein medisches Reich einführen, das Daniel nirgends als eigene Weltmacht darstellt.`,
          followUps: [
            {
              id: 'darius-medisches-reich',
              objection: `Doch: „Darius der Meder empfing das Reich" (Dan 6,1) – der Autor dachte sich ein medisches Reich vor dem persischen.`,
              objectionBy: 'John J. Collins',
              answer: `Im selben Kapitel herrscht Darius nach dem „Gesetz der Meder und Perser" (6,9.13.16) – also innerhalb einer gemeinsamen medo-persischen Ordnung. Seine Herrschaft ist ein Übergang in Babylon, kein eigenes Weltreich mit eigenem Tier in den Visionen. Das zwei-hörnige Tier aus Kapitel 8 bindet beide ausdrücklich zusammen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'auch-165-keine-prophetie',
      objection: `Selbst wenn ich dir Rom zugestehe: Daniel ist eine fromme Fiktion. Die Leute erwarteten eben neue Großreiche – das ist keine Vorhersage, sondern Allgemeinplatz.`,
      objectionBy: 'Dan McClellan',
      answer: `Dan 9 ist kein Allgemeinplatz: Es kündigt an, dass ein Gesalbter kommt und „ausgerottet" wird und dass danach Stadt und Heiligtum zerstört werden. Antiochos IV. hat den Tempel entweiht, aber nicht zerstört – er wurde 164 neu geweiht. Zerstört wurden Stadt und Heiligtum im Jahr 70 n. Chr., rund vierzig Jahre nach der Kreuzigung Jesu.`,
      followUps: [
        {
          id: 'onias-dritter',
          objection: `Der „Gesalbte" in Dan 9,26 ist der Hohepriester Onias III., der 171 v. Chr. ermordet wurde. Die „Zerstörung" meint die Verwüstung unter Antiochos.`,
          objectionBy: 'John J. Collins',
          answer: `Auch mit Onias passen die Zahlen nicht: Die siebzig Jahrwochen ergeben 490 Jahre, von der Zerstörung Jerusalems 587 bis 171 v. Chr. sind es nur gut 400 – das räumen auch kritische Kommentatoren ein. Und Antiochos hat Stadt und Heiligtum nicht zerstört. Jesus selbst hat den „Greuel der Verwüstung" in die Zukunft verlegt (Mt 24,15) – vierzig Jahre später fiel der Tempel.`,
          followUps: [
            {
              id: 'siebzig-wochen-rechnung',
              objection: `Eure eigenen Rechnungen sind auch zurechtgebogen: 457 oder 445 v. Chr.? Sonnenjahre oder 360-Tage-Jahre? Man findet immer, was man sucht.`,
              objectionBy: 'Dan McClellan',
              answer: `Stimmt, die Detailberechnungen variieren, und ich baue nicht auf eine einzelne Rechnung. Der robuste Kern ist unabhängig davon: Der Gesalbte kommt und stirbt **vor** der Zerstörung von Stadt und Tempel. Dieses Fenster hat sich im Jahr 70 geschlossen. Josephus berichtet sogar, dass die Juden im Krieg gegen Rom ein mehrdeutiges Orakel aus ihren heiligen Schriften auf ihre Zeit bezogen – die Erwartung eines Herrschers aus Judäa war genau damals lebendig.`,
              sources: [
                { kind: 'juedisch', author: 'Flavius Josephus', work: 'Der Jüdische Krieg', ref: '6,312–313', year: 'ca. 75 n. Chr.', quote: `Ein zweideutiges Orakel in den heiligen Schriften, wonach um jene Zeit einer aus ihrem Land die Weltherrschaft erlangen werde, habe die Juden zum Krieg getrieben; Josephus bezieht es auf Vespasian.`, status: 'paraphrase' },
              ],
              voices: [
                {
                  person: 'newton',
                  role: 'als Chronologe der Danielprophetie',
                  text: `Isaac Newton widmete einen erheblichen Teil seiner späten Arbeit der Chronologie Daniels. In seinen „Observations upon the Prophecies of Daniel" (posthum 1733) rechnete er die siebzig Wochen ab dem Erlass des Artaxerxes im 7. Jahr seiner Regierung (Esra 7) und kam auf die Zeit Jesu. Für die Apologetik ist bemerkenswert, dass einer der größten Naturwissenschaftler die Danielprophetie für historisch prüfbar hielt. Vorsicht: Newton lehnte privat die Trinitätslehre ab und wird hier nur als Chronologe, nicht als Lehrautorität angeführt.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Isaac Newton', work: 'Observations upon the Prophecies of Daniel, and the Apocalypse of St. John', year: '1733', quote: `Chronologische Berechnung der siebzig Wochen auf die Zeit Christi.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Würdest du die Spätdatierung auch vertreten, wenn du echte Vorhersage für möglich hieltest?`,
    `Wer hat nach deiner Lesart „Stadt und Heiligtum" zerstört, wie es Dan 9,26 ankündigt?`,
    `Wie erklärst du, dass Daniel Medien und Persien in 8,20 ausdrücklich zu einem Reich zusammenfasst?`,
    `Warum wurde ein Buch, dessen Vorhersage binnen Monaten gescheitert wäre, in wenigen Jahrzehnten überall als prophetisch anerkannt?`,
    `Woher wusste der Autor, dass Belsazar nur Mitregent war, wenn die griechischen Historiker ihn nicht einmal kannten?`,
  ],
  avoid: [
    `Behaupten, Qumran „beweise" das 6. Jahrhundert – die ältesten Handschriften stammen aus dem späten 2. Jh. v. Chr.`,
    `Mit einer einzelnen exakten 70-Wochen-Rechnung (z. B. bis auf den Tag des Einzugs in Jerusalem) argumentieren – Fachleute zerlegen sie sofort.`,
    `„Darius der Meder ist bewiesen" sagen – er ist es nicht.`,
  ],
  concessions: [
    `Die kritische Forschung datiert Dan 7–12 fast einhellig auf 167–164 v. Chr.`,
    `Dan 11,40–45 und die Identität „Darius des Meders" sind echte, ungelöste Schwierigkeiten.`,
    `Sprachliche Argumente entscheiden die Datierung nicht – weder für die eine noch für die andere Seite.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Donald J. Wiseman, Kenneth A. Kitchen u. a.', work: 'Notes on Some Problems in the Book of Daniel', year: '1965', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Joyce G. Baldwin', work: 'Daniel (Tyndale Old Testament Commentaries)', year: '1978', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Hieronymus', work: 'Kommentar zu Daniel', year: '407', status: 'paraphrase' },
    { kind: 'gegner', author: 'John J. Collins', work: 'Daniel (Hermeneia)', year: '1993', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Daniel', 'Prophetie', 'Qumran', 'Belsazar', 'Siebzig Wochen'],
  related: ['prophetie/prophezeiungen-vage', 'judentum-messias/messias-noch-nicht-gekommen', 'prophetie/wiederkunft-falsche-prophetie'],
};

export default claim;
