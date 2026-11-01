import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'uebergangsformen',
  title: `„Übergangsformen beweisen Evolution (Tiktaalik, Archaeopteryx, Wale)."`,
  proponents: [
    { name: 'Neil Shubin', role: 'Paläontologe, University of Chicago; Mitentdecker von Tiktaalik', work: 'Your Inner Fish (2008); Daeschler, Shubin & Jenkins, Nature 440 (2006)' },
    { name: 'Philip D. Gingerich', role: 'Paläontologe, University of Michigan', work: 'Arbeiten zu frühen Walen (u. a. Gingerich u. a., Science 293, 2001)' },
    { name: 'J. G. M. (Hans) Thewissen', role: 'Paläontologe, Northeast Ohio Medical University', work: 'Ambulocetus (Science 1994), Pakicetus (Nature 2001), Indohyus (Nature 2007)' },
    { name: 'Donald Prothero', role: 'Paläontologe', work: 'Evolution: What the Fossils Say and Why It Matters (2007, 2. Aufl. 2017)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009), Kap. 2' },
  ],
  steelman: `Kreationisten behaupteten jahrzehntelang, es gebe keine Übergangsformen. Heute haben wir sie zuhauf: Tiktaalik, ein Fisch mit Hals, Handgelenk-ähnlichen Flossenknochen und Lungen, wurde gezielt in 375 Millionen Jahre alten Gesteinen gesucht und gefunden – eine Vorhersage. Archaeopteryx vereint Zähne, Krallen und einen knöchernen Schwanz mit Federn und Flügeln, und Dutzende gefiederte Dinosaurier aus China füllen das Bild. Bei den Walen reicht die Reihe von landlebenden Paarhufer-Verwandten wie Indohyus und Pakicetus über den „gehenden Wal" Ambulocetus und Rodhocetus bis zu Basilosaurus mit winzigen Hinterbeinen; das Sprungbein früher Wale verrät ihre Verwandtschaft mit Flusspferden. Dazu kommen die Übergänge von Reptilien zu Säugetieren mit der Wanderung der Kieferknochen ins Mittelohr. Stephen Jay Gould selbst schrieb, Übergangsformen zwischen größeren Gruppen seien „reichlich vorhanden".`,
  biblical: {
    summary: `Genesis 1 spricht davon, dass Gott die Lebewesen „ein jegliches nach seiner Art" schuf – und nennt ausdrücklich die „großen Walfische" (Gen 1,21). Der Text beschreibt die geordnete Fülle der Schöpfung, keine biologische Systematik. Das hebräische *mîn* ist keine Spezies im heutigen Sinn. Die Bibel verbietet also nicht, dass es Lebewesen mit Merkmalen verschiedener Gruppen gab; sie lehrt, dass Gott hinter ihrer Vielfalt steht.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,21', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott schuf große Walfische und allerlei Getier, daß da lebt und webt, davon das Wasser sich erregte, ein jegliches nach seiner Art, und allerlei gefiedertes Gevögel, ein jegliches nach seiner Art. Und Gott sah, daß es gut war.` },
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', translation: 'Luther 1912', status: 'verbatim', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.` },
    ],
  },
  church: {
    summary: `Die Väter sahen in der Schöpfung eine geordnete Stufenfolge des Lebens: Gregor von Nyssa beschreibt einen „Aufstieg" vom vegetativen über das sinnenbegabte zum vernunftbegabten Leben. Die koptische Kirche hat über die biologische Entstehung der Arten kein Dogma; Lebewesen mit Merkmalen mehrerer Gruppen sind für ihren Glauben kein Problem. Entscheidend ist, dass Gott Ursprung und Erhalter der ganzen Vielfalt ist.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8', status: 'paraphrase', quote: `Die Natur schreitet gleichsam stufenweise fort, vom bloß lebenden zum wahrnehmenden und schließlich zum vernünftigen Leben.` },
    ],
  },
  opposingView: {
    summary: `Fossilien mit Merkmalskombinationen verschiedener Gruppen sind gut belegt: bei Fischen und Landwirbeltieren (Tiktaalik, Acanthostega, Ichthyostega), Dinosauriern und Vögeln (Archaeopteryx, Anchiornis, zahlreiche gefiederte Dinosaurier), Landsäugern und Walen (Indohyus, Pakicetus, Ambulocetus, Rodhocetus, Basilosaurus) sowie Reptilien und Säugetieren. Die Fachwelt deutet sie als Belege für gemeinsame Abstammung. Die moderne Systematik (Kladistik) versteht sie meist nicht als direkte Vorfahren, sondern als Seitenzweige, die den Merkmalswandel dokumentieren. Offene Fragen betreffen weniger die Existenz solcher Formen als Tempo, Mechanismus und die genaue Abfolge – so zeigten 395 Millionen Jahre alte Tetrapoden-Fährten aus Zachełmie (Polen), dass Landwirbeltiere rund 18 Millionen Jahre älter sind als die bis dahin ältesten Körperfossilien und älter als Tiktaalik.`,
    sources: [
      { kind: 'wissenschaft', author: 'Edward B. Daeschler, Neil H. Shubin, Farish A. Jenkins Jr.', work: '„A Devonian tetrapod-like fish and the evolution of the tetrapod body plan", Nature 440', ref: 'S. 757–763', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Grzegorz Niedźwiedzki, Piotr Szrek, Katarzyna Narkiewicz, Marek Narkiewicz, Per E. Ahlberg', work: '„Tetrapod trackways from the early Middle Devonian period of Poland", Nature 463', ref: 'S. 43–48', year: '2010', status: 'paraphrase', quote: `Fährten aus dem frühen Mitteldevon (Eifelium, ca. 395 Millionen Jahre) belegen Tetrapoden deutlich vor den ältesten Körperfossilien; Elpistostegiden wie Tiktaalik müssen mindestens zehn Millionen Jahre neben ihren Nachkommen existiert haben.` },
      { kind: 'gegner', author: 'Stephen Jay Gould', work: '„Evolution as Fact and Theory", Discover 2', year: '1981', status: 'verbatim', quote: `Übergangsformen fehlen im Allgemeinen auf der Ebene der Arten, aber zwischen größeren Gruppen sind sie reichlich vorhanden.`, original: `Transitional forms are generally lacking at the species level, but they are abundant between larger groups.`, translation: 'eigene Übersetzung', note: 'Im selben Absatz beklagt Gould, von Kreationisten immer wieder fälschlich zitiert zu werden, als habe er das Fehlen von Übergangsformen eingeräumt. Wer Gould zitiert, muss das fair dazusagen.' },
    ],
  },
  quickAnswer: `Ja, es gibt Fossilien mit Merkmalen verschiedener Gruppen – das gebe ich offen zu, und Christen sollten das nicht bestreiten. Aber sie zeigen Formen, nicht den Mechanismus. Die eigentlichen Fragen sind: Wie schnell erfolgten die Umbauten, und konnten Mutation und Selektion das in der verfügbaren Zeit leisten? Beim Wal etwa vollzog sich ein gewaltiger Umbau von Atmung, Gehör, Fortbewegung und Fortpflanzung in grob zehn Millionen Jahren. Und Tiktaalik ist durch ältere Tetrapoden-Fährten zeitlich überholt.`,
  keyPoints: [
    `**Ehrlich zugestehen:** Mosaikformen wie Tiktaalik, Archaeopteryx und frühe Wale existieren. Gould: zwischen größeren Gruppen „reichlich vorhanden".`,
    `**Form ist nicht Mechanismus:** Eine Reihe ähnlicher Formen zeigt nicht, wie die genetischen Veränderungen entstanden.`,
    `**Tiktaalik ist zeitlich überholt:** Tetrapoden-Fährten von Zachełmie sind rund 395 Millionen Jahre alt – rund 20 Millionen Jahre älter als Tiktaalik (Niedźwiedzki et al. 2010).`,
    `**Tempo:** Der Übergang zu vollständig im Wasser lebenden Walen geschah in grob zehn Millionen Jahren – ein Fall für das Wartezeitproblem.`,
    `**Vorfahren oder Seitenzweige?** Die Kladistik betrachtet Fossilien meist als Seitenzweige; Abstammungsreihen sind Rekonstruktionen.`,
    `**Mehrere christliche Sichtweisen:** Behe akzeptiert gemeinsame Abstammung; andere sehen in Mosaikformen gemeinsame Baupläne. Beides ist mit dem Glauben vereinbar.`,
  ],
  voices: [
    {
      person: 'bechly',
      role: 'als Paläontologe',
      text: `Bechly bestreitet nicht, dass es Fossilien mit intermediären Merkmalen gibt. Er weist aber darauf hin, dass ihre zeitliche Abfolge oft nicht der erwarteten Reihenfolge entspricht – wie bei den Zachełmie-Fährten, die älter sind als Tiktaalik – und dass große Umbauten in auffällig kurzen Zeitfenstern stattfanden. Sein Hauptpunkt ist das Tempo: Je kürzer das Fenster für einen umfassenden Bauplan-Umbau, desto weniger Generationen stehen für die nötigen genetischen Veränderungen zur Verfügung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Günter Bechly, Stephen C. Meyer', work: '„The Fossil Record and Universal Common Ancestry", in: J. P. Moreland u. a. (Hg.), Theistic Evolution: A Scientific, Philosophical, and Theological Critique', ref: 'Kap. 10 (Zählung je nach Ausgabe abweichend)', year: '2017', status: 'paraphrase', note: 'Kapitel und Herausgeberschaft bestätigt; Bechlys Kernargument zu abrupten Ursprüngen. Ob die Einzelbeispiele (Zachełmie, Wale) dort behandelt werden, ist nicht am Original geprüft.' },
      ],
    },
    {
      person: 'casey-luskin',
      role: 'als Wissenschaftskommunikator mit Schwerpunkt Fossilbericht',
      text: `Luskin betont, dass populäre Darstellungen von Übergangsreihen oft mehr Gewissheit vermitteln, als die Fachliteratur hergibt. Rekonstruktionen werden revidiert, Merkmale werden neu gedeutet, und die Kladistik selbst behandelt Fossilien meist als Seitenzweige, nicht als Vorfahren. Er argumentiert, dass Mosaikformen mit einem gemeinsamen Bauplan ebenso vereinbar sind und dass die Frage nach der Herkunft der genetischen Information durch Fossilien nicht beantwortet wird.`,
      sources: [
        { kind: 'fachliteratur', author: 'Casey Luskin', work: 'Beiträge zum Fossilbericht (evolutionnews.org) und in Science and Human Origins', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-behe',
      role: 'als Biochemiker (akzeptiert gemeinsame Abstammung)',
      text: `Behe ist ein wichtiges Beispiel dafür, dass Übergangsformen kein Problem für Design sein müssen: Er akzeptiert die gemeinsame Abstammung und hält Mosaikformen für erwartbar. Sein Einwand betrifft eine andere Ebene – den molekularen Mechanismus. Dass ein Wal von Landsäugern abstammt, beantworte nicht die Frage, ob Zufallsmutation und Selektion die nötigen biochemischen Neuerungen hervorbringen konnten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', status: 'paraphrase' },
      ],
    },
    {
      person: 'conway-morris',
      role: 'als Paläontologe',
      text: `Conway Morris akzeptiert die evolutionären Übergänge und hat selbst an der Deutung früher Fossilien gearbeitet. Er hebt jedoch hervor, dass die Evolution immer wieder zu denselben Lösungen gelangt – ein Hinweis, dass der Raum möglicher Formen stark vorstrukturiert ist. Für ihn spricht das gegen ein Bild reiner Zufälligkeit und ist gut mit einem theistischen Verständnis der Schöpfung vereinbar.`,
      sources: [
        { kind: 'fachliteratur', author: 'Simon Conway Morris', work: "Life's Solution: Inevitable Humans in a Lonely Universe", year: '2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater',
      text: `Basilius beschreibt im Hexaemeron die Wassertiere und Vögel, die auf Gottes Befehl hervorgingen, und bewundert besonders die großen Meerestiere. Er liest den Schöpfungsbericht als Lob der Weisheit Gottes in der Vielfalt der Lebensformen. Dass manche Lebewesen Merkmale verschiedener Gruppen vereinen, hätte ihn vermutlich nicht beunruhigt, sondern zum Staunen gebracht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: 'Homilien 7–8', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'tiktaalik-vorhersage',
      objection: `Tiktaalik war eine erfolgreiche Vorhersage: Wir suchten gezielt in 375 Millionen Jahre alten Gesteinen nach einem Fisch-Tetrapoden-Übergang – und fanden ihn.`,
      objectionBy: 'Neil Shubin',
      answer: `Das war eine beeindruckende Forschungsleistung, und ich erkenne sie an. Aber 2010 fand man in Zachełmie (Polen) Tetrapoden-Fährten, die rund 395 Millionen Jahre alt sind – rund 20 Millionen Jahre älter als Tiktaalik. Es gab also schon Landwirbeltiere, lange bevor Tiktaalik lebte. Die Logik der Vorhersage – „im Zeitfenster vor den ersten Tetrapoden" – wurde damit nachträglich unterlaufen.`,
      followUps: [
        {
          id: 'seitenzweig-geisterlinie',
          objection: `Tiktaalik muss kein direkter Vorfahr sein. Er ist ein später Vertreter einer Gruppe, die die Übergangsmerkmale zeigt. Geisterlinien sind normal.`,
          objectionBy: 'Neil Shubin',
          answer: `Das ist kladistisch korrekt, und ich gestehe es zu. Dann sollten wir aber nicht mehr von einer „Vorhersage des Übergangs" sprechen, sondern davon, dass eine Gruppe mit Mosaikmerkmalen lange neben ihren angeblichen Nachkommen existierte. Die Fährten zeigen, dass der Fossilbericht die Reihenfolge der Ereignisse nicht zuverlässig wiedergibt – das schwächt den Wert von Reihen als „Beweis".`,
          followUps: [
            {
              id: 'zachelmie-umstritten',
              objection: `Die Zachełmie-Fährten sind nicht unumstritten – manche halten einzelne Spuren für Fraßspuren von Fischen.`,
              objectionBy: 'Donald Prothero',
              answer: `Das stimmt, es gibt kritische Neubewertungen, etwa durch Spencer Lucas (2015). Die Mehrheit der Fachleute akzeptiert die Fährten aber weiterhin als Tetrapodenspuren; die Autoren um Per Ahlberg sind selbst ausgewiesene Tetrapodenforscher. Ich stütze mich auf die Mehrheitsmeinung – und gerade sie zeigt, dass die einfache Reihe Fisch–Tiktaalik–Tetrapode zeitlich nicht aufgeht.`,
              sources: [
                { kind: 'wissenschaft', author: 'Spencer G. Lucas', work: '„Thinopus and a critical review of Devonian tetrapod footprints", Ichnos 22', year: '2015', status: 'paraphrase', note: 'Kritische Neubewertung devonischer Fährten; Details vor Verwendung prüfen.' },
              ],
            },
          ],
        },
        {
          id: 'fischtetrapoden-zuhauf',
          objection: `Ob Tiktaalik Vorfahr ist oder nicht – es gibt Fisch-Tetrapoden in Hülle und Fülle: Acanthostega, Ichthyostega, Panderichthys. Die Merkmale wandeln sich Schritt für Schritt.`,
          objectionBy: 'Richard Dawkins',
          answer: `Ja, Mosaikformen sind real, das bestreite ich nicht. Sie zeigen, dass es Lebewesen mit Merkmalskombinationen gab. Sie zeigen nicht, wie die genetischen Veränderungen für Lunge, Gliedmaßen und neue Atmungs- und Kreislaufregulation entstanden und ob das in der verfügbaren Zeit möglich war. Die Fossilien beantworten die Frage nach dem Was, nicht nach dem Wie.`,
        },
      ],
    },
    {
      id: 'walreihe',
      objection: `Die Wale sind eine der besten Übergangsreihen: Indohyus, Pakicetus, Ambulocetus, Rodhocetus, Basilosaurus – vom Landtier zum Meeressäuger, mit allen Zwischenschritten.`,
      objectionBy: 'Jerry Coyne',
      answer: `Die Fossilien sind eindrucksvoll, und ihre Merkmale zeigen tatsächlich eine Abfolge vom Land ins Wasser. Ich gestehe zu: Das passt gut zur gemeinsamen Abstammung. Die offene Frage ist das Tempo: Zwischen Pakicetus und vollständig im Wasser lebenden Walen liegen grob zehn Millionen Jahre – für einen Umbau von Atmung, Gehör, Nieren, Fortpflanzung, Fortbewegung und Skelett bei langlebigen Tieren mit kleinen Populationen.`,
      sources: [
        { kind: 'wissenschaft', author: 'J. G. M. Thewissen, S. T. Hussain, M. Arif', work: '„Fossil evidence for the origin of aquatic locomotion in archaeocete whales", Science 263', ref: 'S. 210–212', year: '1994', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'J. G. M. Thewissen u. a.', work: '„Whales originated from aquatic artiodactyls in the Eocene epoch of India", Nature 450', ref: 'S. 1190–1194', year: '2007', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'sprungbein-beweist',
          objection: `Das Sprungbein von Rodhocetus und Artiocetus ist das typische Paarhufer-Sprungbein. Das beweist die Verwandtschaft mit Flusspferden, und die DNA bestätigt es.`,
          objectionBy: 'Philip Gingerich',
          answer: `Einverstanden – morphologische und molekulare Daten passen hier zusammen, und das ist ein starkes Argument für Verwandtschaft. Aber Verwandtschaft beantwortet nicht die Frage nach dem Mechanismus. Wie viele genetische Veränderungen waren nötig, und konnten sie in der verfügbaren Zahl von Generationen entstehen?`,
          sources: [
            { kind: 'wissenschaft', author: 'Philip D. Gingerich u. a.', work: '„Origin of whales from early artiodactyls: hands and feet of Eocene Protocetidae from Pakistan", Science 293', ref: 'S. 2239–2242', year: '2001', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'zeitproblem-nur-gefuehl',
              objection: `Dein „Zeitproblem" ist nur ein Gefühl. Zehn Millionen Jahre sind enorm viel.`,
              objectionBy: 'Donald Prothero',
              answer: `Es ist eine quantitative Frage: Bei Generationszeiten von mehreren Jahren sind das vielleicht eine bis zwei Millionen Generationen. Für nur zwei koordinierte Mutationen errechneten Durrett & Schmidt beim Menschen rund 216 Millionen Jahre. Mir ist kein publiziertes populationsgenetisches Modell bekannt, das den Wal-Umbau in dieser Zeit als plausibel zeigt. Wenn du eines kennst, schaue ich es mir gern an. Siehe das Wartezeitproblem.`,
            },
          ],
        },
      ],
    },
    {
      id: 'archaeopteryx-vogelherkunft',
      objection: `Archaeopteryx und die gefiederten Dinosaurier aus China zeigen die Herkunft der Vögel. Federn gab es bei Dinosauriern lange vor dem Vogelflug.`,
      objectionBy: 'Richard Dawkins',
      answer: `Mosaikformen gibt es auch hier, das bestreite ich nicht. Interessant ist die zeitliche Abfolge: Viele gefiederte Dinosaurier sind jünger als Archaeopteryx; mit älteren Funden wie Anchiornis hat sich dieses „zeitliche Paradox" teilweise entschärft. Offen bleibt vor allem, wie der hochkomplexe Flugapparat – asymmetrische Federn, Muskulatur, Atmung mit Luftsäcken, Gehirnsteuerung – genetisch entstand.`,
      sources: [
        { kind: 'wissenschaft', author: 'Dongyu Hu u. a.', work: '„A pre-Archaeopteryx troodontid theropod from China with long feathers on the metatarsus", Nature 461', ref: 'S. 640–643', year: '2009', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'federn-schrittweise-prum',
          objection: `Richard Prum hat ein schrittweises Entwicklungsmodell der Feder vorgelegt – von einfachen Filamenten bis zur asymmetrischen Flugfeder. Die Fossilien zeigen genau diese Stadien.`,
          objectionBy: 'Donald Prothero',
          answer: `Das Modell ist durchdacht, und die Fossilien zeigen tatsächlich Federtypen unterschiedlicher Komplexität – das gestehe ich zu. Ein Entwicklungsmodell beschreibt aber die Abfolge von Formen, nicht die genetischen Veränderungen, die die Federentwicklung steuern, und deren Wahrscheinlichkeit. Hier liegt die Frage, die Fossilien allein nicht beantworten können.`,
          sources: [
            { kind: 'wissenschaft', author: 'Richard O. Prum, Alan H. Brush', work: '„The evolutionary origin and diversification of feathers", The Quarterly Review of Biology 77', ref: 'S. 261–295', year: '2002', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'gould-falsch-zitiert',
      objection: `Christen zitieren Gould ständig falsch. Er schrieb ausdrücklich, Übergangsformen seien zwischen größeren Gruppen reichlich vorhanden – und beschwerte sich über den Missbrauch durch Kreationisten.`,
      objectionBy: 'Donald Prothero',
      answer: `Das stimmt, und es ist beschämend, wenn Christen Gould aus dem Zusammenhang reißen. Gould meinte, dass auf der Ebene der Arten Übergänge meist fehlen – deshalb entwickelte er mit Eldredge das Modell des „unterbrochenen Gleichgewichts". Zwischen größeren Gruppen sah er reichlich Übergangsformen. Wer Gould zitiert, muss beides sagen.`,
      followUps: [
        {
          id: 'also-gibt-es-uebergaenge',
          objection: `Also gibst du zu, dass es Übergangsformen gibt. Dann ist die Debatte vorbei.`,
          objectionBy: 'Donald Prothero',
          answer: `Ich gebe zu, dass es Fossilien mit intermediären Merkmalen gibt. Die Debatte ist damit aber nicht vorbei, denn sie betrifft nicht die Existenz von Formen, sondern den Mechanismus und das Tempo ihrer Entstehung – und die Frage, ob ungelenkte Prozesse die nötige Information hervorbringen konnten. Darüber sagen Knochen allein nichts.`,
          questionsBack: [
            `Welche genetischen Veränderungen waren für den Übergang vom Land- zum Meeressäuger nötig – und wie lange dauert ihre Entstehung?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Zeigen Fossilien den Mechanismus der Veränderung oder nur die Formen?`,
    `Wie passt die Vorhersage zu Tiktaalik zu Tetrapoden-Fährten, die 20 Millionen Jahre älter sind?`,
    `Wie viele Generationen hatten die Wale für ihren Umbau – und gibt es ein Modell, das zeigt, dass das genügt?`,
    `Betrachtet die moderne Kladistik Fossilien als Vorfahren oder als Seitenzweige?`,
  ],
  avoid: [
    `„Es gibt keine einzige Übergangsform." – Falsch und leicht zu widerlegen.`,
    `Gould oder andere Paläontologen aus dem Zusammenhang zitieren.`,
    `„Archaeopteryx ist eine Fälschung." – Diese Behauptung (Hoyle u. a., 1980er-Jahre) wurde widerlegt.`,
    `Mit veralteten Rekonstruktionen argumentieren, ohne die aktuelle Fachliteratur zu kennen.`,
  ],
  concessions: [
    `Fossilien mit Merkmalskombinationen verschiedener Großgruppen existieren und werden von der Fachwelt als Belege für Evolution gewertet.`,
    `Bei den Walen passen morphologische und molekulare Daten zusammen und sprechen für eine Abstammung von Paarhufer-Verwandten.`,
    `Gould meinte mit dem Fehlen von Übergangsformen die Ebene der Arten, nicht die der Großgruppen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Donald R. Prothero', work: 'Evolution: What the Fossils Say and Why It Matters (2. Aufl.)', year: '2017', status: 'paraphrase', note: 'Die stärkste Darstellung der Gegenseite.' },
    { kind: 'gegner', author: 'Neil Shubin', work: 'Your Inner Fish', year: '2008', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Grzegorz Niedźwiedzki u. a.', work: 'Nature 463, 43–48', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Übergangsformen', 'Tiktaalik', 'Archaeopteryx', 'Wale', 'Zachełmie', 'Gould'],
  related: [
    'palaeontologie/luecken-werden-geschlossen',
    'palaeontologie/kambrische-explosion-kein-problem',
    'genetik/wartezeitproblem',
    'evolution/evolution-ist-tatsache',
  ],
};

export default claim;
