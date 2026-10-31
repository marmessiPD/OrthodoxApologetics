import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'aktual-unendliche-vergangenheit',
  title: `„Eine unendliche Vergangenheit ist mathematisch möglich."`,
  proponents: [
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Philosophical Perspectives on Infinity (2006)' },
    { name: 'Wes Morriston & Alex Malpass', role: 'Religionsphilosophen', work: '„Endless and Infinite", Philosophical Quarterly 70 (2020)' },
    { name: 'J. L. Mackie', role: 'Philosoph, Oxford', work: 'The Miracle of Theism (1982), Kap. 5' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'Debatte mit William Lane Craig, „God and Cosmology" (2014)' },
    { name: 'Bertrand Russell', role: 'Mathematiker und Philosoph', work: 'The Principles of Mathematics (1903) – Tristram-Shandy-Paradox' },
  ],
  steelman: `Seit Georg Cantor wissen wir, dass das aktual Unendliche mathematisch widerspruchsfrei ist; die gesamte moderne Mathematik ruht auf der Mengenlehre mit unendlichen Mengen. „Paradoxien" wie Hilberts Hotel zeigen nur, dass Unendliches sich anders verhält als Endliches – kontraintuitiv ist nicht widersprüchlich. Das Argument, man könne eine unendliche Reihe nicht „durchlaufen", beruht auf einem Denkfehler: Es stellt sich einen Startpunkt in unendlicher Entfernung vor. In einer anfangslosen Vergangenheit liegt aber **jedes** vergangene Ereignis nur endlich weit zurück; es gibt nie eine unendliche Strecke, die zu durchqueren wäre. Die negativen ganzen Zahlen (…, −3, −2, −1, 0) sind ein vollkommen sauberes Modell. Wer das ablehnt, müsste auch leugnen, dass wir eine Strecke durchqueren können, die unendlich viele Punkte enthält (Zenon). Und die neueren „Grim-Reaper"-Argumente hängen an umstrittenen Zusatzprinzipien. Also bleibt die Frage nach dem Anfang des Universums eine empirische Frage der Physik – und kein Gottesbeweis aus dem Lehnstuhl.`,
  biblical: {
    summary: `Die Schrift lehrt, dass die Welt einen Anfang hat (Gen 1,1; Joh 1,1–3; Hebr 11,3) und dass allein Gott ohne Anfang ist (Ps 90,2). Sie macht kein mathematisches Argument, aber sie unterscheidet scharf zwischen dem ewigen Schöpfer und der zeitlichen Schöpfung. Gottes Ewigkeit ist in der Schrift keine endlose Abfolge von Augenblicken, sondern ein Sein „vor der Zeit der Welt" (2 Tim 1,9). Das ist für die Debatte entscheidend: Das Argument gegen eine unendliche Vergangenheit trifft die Welt, nicht Gott.`,
    detail: `- **Gen 1,1** „Im Anfang" (hebr. *bereschit*) – die Kirchenväter lasen hier den Anfang der Zeit selbst (Basilius, Hexaemeron I,5–6).
- **Ps 90,2** „Ehe denn die Berge wurden … bist du, Gott, von Ewigkeit zu Ewigkeit" – Gottes Ewigkeit liegt *vor* der Weltzeit.
- **2 Tim 1,9** spricht von Gnade, „die uns gegeben ist in Christo Jesu vor der Zeit der Welt" (griech. *pro chronōn aiōniōn*) – ein Vor, das nicht selbst Weltzeit ist.
- **Hebr 11,3** „Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist" – die Welt ist gewirkt, nicht anfangslos vorhanden.
- **Vorsicht:** Die Schrift lehrt die Schöpfung aus dem Nichts mit Anfang; ob dieser Anfang philosophisch beweisbar ist, ist eine eigene Frage. Der Glaube hängt nicht an einem bestimmten Argument.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: '2. Timotheus', ref: '1,9', quote: `… nach seinem Vorsatz und der Gnade, die uns gegeben ist in Christo Jesu vor der Zeit der Welt.`, original: 'πρὸ χρόνων αἰωνίων', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt im Nizänum Gott als „Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren"; nur Gott ist anfangslos (griech. *anarchos*). Basilius lehrt, dass mit dem „Anfang" in Gen 1,1 auch die Zeit beginnt. Augustinus formuliert, die Welt sei nicht *in* der Zeit, sondern *mit* der Zeit geschaffen. Und im Alexandrien des 6. Jahrhunderts entwickelte Johannes Philoponos als erster ausgearbeitet das philosophische Argument, dass eine anfangslose Vergangenheit unmöglich ist, weil Unendliches nicht durchlaufen und nicht vermehrt werden kann – gegen die Ewigkeitslehre des Neuplatonikers Proklos.`,
    detail: `Philoponos' Argumente wurden über arabische Vermittlung (al-Kindi, al-Ghazali) und später Bonaventura weitergegeben und bilden die Grundlage des heutigen kalam-kosmologischen Arguments. Wichtig: Philoponos ist wegen seiner späteren tritheistischen Thesen keine Lehrautorität; sein philosophisches Argument gegen die Ewigkeit der Welt ist davon unabhängig. Die koptisch-orthodoxe Lehre hängt nicht an diesem Argument, sondern an der Offenbarung: Gott allein ist ewig, alles andere ist aus dem Nichts geschaffen (Athanasius, *De Incarnatione* 2–3).`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '325/381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen, den Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien zum Hexaemeron', ref: 'I,5–6', year: 'um 370', quote: `Mit dem „Anfang" ist der erste, unteilbare Augenblick der Schöpfung gemeint; die Welt hat einen Anfang ihres Seins und damit auch der Zeit.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI,13; vgl. De civitate Dei XI,6', year: 'um 400', quote: `Die Welt ist nicht in der Zeit, sondern mit der Zeit geschaffen; es gab kein „Damals", bevor Gott die Zeit schuf.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '2–3', quote: `Gott hat alles aus dem Nichts ins Dasein gerufen; die Welt ist weder ewig noch aus vorhandener Materie geformt.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Richard Sorabji', work: 'Time, Creation and the Continuum', year: '1983', quote: `Rekonstruiert Philoponos' Argumente gegen eine anfangslose Welt (Unmöglichkeit des Durchlaufens und Vermehrens des Unendlichen).`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Mathematik ist unstrittig, dass aktual unendliche Mengen widerspruchsfrei behandelt werden können (Zermelo-Fraenkel-Mengenlehre). Umstritten ist, ob aktual unendlich viele **konkrete** Dinge oder Ereignisse in der Wirklichkeit existieren können. Hier sind die Philosophen gespalten: Craig, Koons, Pruss und andere bestreiten es (mit unterschiedlichen Begründungen), Oppy, Morriston, Malpass und andere halten es für möglich. Die physikalische Seite (Borde-Guth-Vilenkin-Theorem, Entropie) wird im Themenblock Kosmologie behandelt.`,
    detail: `- **Hilbert**, Cantors großer Verteidiger in der Mathematik („Aus dem Paradies, das Cantor uns geschaffen, soll uns niemand vertreiben können"), urteilte zugleich, das Unendliche finde sich nirgends in der Wirklichkeit realisiert.
- **Cantor** selbst dagegen hielt aktual Unendliches auch in der geschaffenen Natur für real – er ist also kein Zeuge für die Unmöglichkeitsthese.
- **Neuere Diskussion:** Koons (2014) und Pruss (2018) stützen sich auf das „Grim-Reaper"-Paradox (ursprünglich José Benardete, 1964); Pruss vertritt den **kausalen Finitismus**: Nichts kann eine unendliche kausale Vorgeschichte haben. Kritiker bestreiten die dazu nötigen Rekombinations- bzw. „Patchwork"-Prinzipien.
- **Fazit des Forschungsstands:** „Mathematisch möglich" im Sinn von „widerspruchsfrei modellierbar" – ja. „Real möglich" – offen und umstritten, mit guten Gründen auf beiden Seiten; die Gründe für die Endlichkeit sind aber stark und vielfältig.`,
    sources: [
      { kind: 'wissenschaft', author: 'David Hilbert', work: 'Über das Unendliche', ref: 'Mathematische Annalen 95 (1926), 161–190, hier S. 170', year: '1926', quote: `Aus dem Paradies, das Cantor uns geschaffen, soll uns niemand vertreiben können.`, status: 'verbatim', note: 'Vortrag in Münster am 4. Juni 1925.' },
      { kind: 'wissenschaft', author: 'David Hilbert', work: 'Über das Unendliche', ref: 'Mathematische Annalen 95 (1926)', year: '1926', quote: `Das Unendliche findet sich nirgends realisiert; es ist weder in der Natur vorhanden, noch als Grundlage unseres verstandesmäßigen Denkens zulässig.`, status: 'paraphrase', note: 'Sinngemäß; vor wörtlicher Verwendung am Original prüfen.' },
      { kind: 'gegner', author: 'Graham Oppy', work: 'Philosophical Perspectives on Infinity', year: '2006', quote: `Es gibt keine überzeugenden Argumente dafür, dass eine anfangslose Vergangenheit unmöglich ist.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Wes Morriston & Alex Malpass', work: 'Endless and Infinite', ref: 'Philosophical Quarterly 70 (2020)', quote: `Eine endlose Zukunft und eine anfangslose Vergangenheit sind strukturell gleich zu behandeln; wer die eine zulässt, kann die andere nicht ausschließen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert C. Koons', work: 'A New Kalam Argument: Revenge of the Grim Reaper', ref: 'Noûs 48 (2014), 256–267', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase' },
    ],
  },
  quickAnswer: `„Mathematisch widerspruchsfrei" heißt nicht „in der Wirklichkeit möglich". In der Mengenlehre kann man ∞ − ∞ einfach verbieten; in einem echten Hotel kann man Gästen nicht verbieten abzureisen. Und eine Reihe, die durch Hinzufügen eines Ereignisses nach dem anderen entsteht, kann nie aktual unendlich *werden* – also hätte der heutige Tag bei einer anfangslosen Vergangenheit nie kommen können. Sogar Hilbert, der größte Verteidiger Cantors, sagte: Das Unendliche findet sich nirgends realisiert.`,
  keyPoints: [
    `**Unterscheide** mathematische Modelle von realen Prozessen: Die negativen Zahlen „entstehen" nicht nacheinander – vergangene Ereignisse schon.`,
    `**Hilberts Hotel**: Wenn alle Gäste mit ungerader Zimmernummer abreisen, bleiben unendlich viele; wenn alle ab Zimmer 4 abreisen, bleiben drei. Gleiches Abziehen, verschiedene Ergebnisse – in der Mathematik verbietet man die Rechnung, in der Wirklichkeit geht das nicht.`,
    `**Sukzessive Bildung:** Durch Hinzufügen von Endlichem erreicht man nie das Unendliche. Eine Vergangenheit ohne Anfang wäre eine vollendete unendliche Reihe – ein Widerspruch in sich (Philoponos).`,
    `**Kausaler Finitismus (Pruss):** Eine ganze Familie von Paradoxien (Grim Reaper, Thomsons Lampe) verschwindet mit einer Annahme: Nichts hat eine unendliche kausale Vorgeschichte.`,
    `**Gott ist davon nicht betroffen:** Gottes Ewigkeit ist keine unendliche Abfolge von Momenten; die Zeit beginnt mit der Schöpfung (Augustinus).`,
  ],
  argument: {
    name: 'Argument aus der sukzessiven Bildung (Philoponos – Kalam)',
    summary: 'Eine durch Hinzufügen entstehende Reihe kann nicht aktual unendlich sein; die Vergangenheit ist eine solche Reihe; also hat sie einen Anfang.',
    premises: [
      {
        text: 'P1: Eine Reihe, die durch sukzessives Hinzufügen von Gliedern entsteht, kann nicht aktual unendlich sein.',
        support: `Zu jeder endlichen Zahl kann man eins addieren, ohne je „unendlich" zu erreichen. Eine anfangslose Vergangenheit wäre eine bereits vollendete unendliche Reihe. Hinzu kommen Paradoxien (Tristram Shandy, Grim Reaper), die genau bei aktual unendlichen Abfolgen auftreten.`,
        sources: [
          { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: 'The Kalam Cosmological Argument', ref: 'in: Craig/Moreland (Hg.), The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
        ],
      },
      {
        text: 'P2: Die Reihe der vergangenen Ereignisse ist durch sukzessives Hinzufügen entstanden.',
        support: `Vergangene Ereignisse sind nicht gleichzeitig vorhanden, sondern folgen nacheinander; jedes Jetzt fügt der Vergangenheit ein Ereignis hinzu. Wer das bestreitet, muss eine statische „Blockuniversum"-Zeittheorie annehmen – auch dann bleibt Pruss' kausales Argument bestehen.`,
      },
      {
        text: 'P3 (Zusatzweg): Nichts kann eine unendliche kausale Vorgeschichte haben (kausaler Finitismus).',
        support: `Pruss zeigt, dass sich eine ganze Reihe von Paradoxien (Grim Reaper, Thomsons Lampe, unendliche Lotterien) gemeinsam vermeiden lässt, wenn man unendliche kausale Ketten ausschließt – eine einheitliche Erklärung statt vieler Einzelauswege.`,
        sources: [
          { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase' },
        ],
      },
    ],
    inferences: ['Aus P1 und P2: Die Reihe der vergangenen Ereignisse ist nicht aktual unendlich.', 'Unabhängig davon aus P3: Die kausale Geschichte der Welt ist endlich.'],
    conclusion: 'Die Vergangenheit hat einen Anfang. Was einen Anfang hat, verlangt nach einer Ursache, die selbst nicht in diese Reihe gehört – der zeitlich-räumlichen Welt geht ein ewiger, nicht-physischer Grund voraus.',
  },
  voices: [
    {
      person: 'johannes-philoponos',
      role: 'als alexandrinischer Philosoph des 6. Jahrhunderts',
      text: `Philoponos argumentierte gegen Proklos und Aristoteles: Wäre die Welt anfangslos, müsste bis heute eine unendliche Zahl von Ereignissen bereits durchlaufen worden sein – Unendliches kann aber nicht durchlaufen werden. Außerdem würde die Zahl der vergangenen Tage täglich größer, ein Unendliches würde also vermehrt; und die Umläufe des Saturn verhielten sich zu denen des Jupiter wie Unendlich zu einem Mehrfachen von Unendlich. Für ihn folgt: Die Welt hat einen Anfang und ist geschaffen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'De aeternitate mundi contra Proclum', year: '529', status: 'paraphrase', note: 'Rekonstruktion nach Sorabji, Time, Creation and the Continuum (1983). Philoponos ist wegen seines späteren Tritheismus keine Lehrautorität.' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Schöpfungsberichts',
      text: `Basilius betont in seinen Hexaemeron-Predigten, dass die Welt einen Anfang hat und nicht, wie manche griechischen Philosophen meinten, gleich ewig mit Gott ist. „Im Anfang" bezeichnet für ihn den ersten, unteilbaren Augenblick, in dem auch die Zeit beginnt. Das Unterscheidungsmerkmal zwischen Schöpfer und Geschöpf ist genau dies: Gott ist ohne Anfang, die Welt hat einen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien zum Hexaemeron', ref: 'I,2–6', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Zeit',
      text: `Augustinus beantwortet die Spottfrage „Was tat Gott, bevor er Himmel und Erde schuf?" mit der Einsicht, dass die Zeit selbst ein Geschöpf ist: Es gab kein „Vorher" vor der Schöpfung. Gottes Ewigkeit ist kein unendlich langes Warten, sondern ein immerwährendes Heute. Damit entgeht die christliche Lehre dem Einwand, Gott selbst müsse eine unendliche Vergangenheit durchlaufen haben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Confessiones', ref: 'XI,12–14', status: 'paraphrase', note: 'Westlicher Vater – hier für Philosophie der Zeit.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Verteidiger des Kalam-Arguments',
      text: `Craig hat das Argument im 20. Jahrhundert wiederbelebt. Er unterscheidet scharf zwischen der mathematischen Theorie des Unendlichen, die er nicht bestreitet, und der Frage, ob es real unendlich viele Dinge geben kann. Hilberts Hotel zeigt für ihn, dass ein reales aktual Unendliches zu Absurditäten führt; und selbst wenn ein aktual Unendliches möglich wäre, könnte es nicht durch sukzessives Hinzufügen gebildet werden.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'The Kalam Cosmological Argument', year: '1979', status: 'paraphrase' },
      ],
    },
    {
      person: 'alexander-pruss',
      role: 'als Philosoph der Unendlichkeit und Kausalität',
      text: `Pruss argumentiert, dass unendliche kausale Vorgeschichten eine ganze Familie von Paradoxien erzeugen – etwa das Grim-Reaper-Szenario, in dem unendlich viele „Sensenmänner" so getaktet sind, dass jeder nur handelt, wenn kein früherer gehandelt hat: Dann muss etwas geschehen, und doch kann es keiner getan haben. Die einfachste gemeinsame Diagnose ist der kausale Finitismus. Daraus folgt, dass die Kette der Ursachen nicht unendlich zurückreicht, sondern in einer ersten, unverursachten Ursache gründet.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'cantor-widerspruchsfrei',
      objection: `Cantor hat gezeigt, dass das aktual Unendliche widerspruchsfrei ist. Hilberts Hotel ist nur kontraintuitiv, kein Widerspruch.`,
      objectionBy: 'Graham Oppy',
      targetsPremise: 1,
      answer: `Widerspruchsfrei **in der Mengenlehre** – ja. Aber dort gelingt das nur, weil man Rechnungen wie ∞ − ∞ verbietet. In einem echten Hotel kannst du nicht verbieten, dass Gäste abreisen: Wenn alle Ungeraden gehen, bleiben unendlich viele; wenn alle ab Zimmer 4 gehen, bleiben drei. Dieselbe Zahl von Abreisen, widersprüchliche Ergebnisse. Mathematische Konsistenz ist nicht reale Möglichkeit.`,
      detail: `Die Mengenlehre ist ein Universum des Diskurses mit festgelegten Regeln. Ob ihre Gegenstände konkret realisierbar sind, ist eine metaphysische, keine mathematische Frage. Hilbert selbst trennte beides.`,
      questionsBack: [
        `Wie viele Gäste bleiben im Hotel, wenn unendlich viele abreisen?`,
        `Glaubst du, dass es in einer echten Bibliothek unendlich viele Bücher geben könnte, von denen man eines entnimmt und die Zahl bleibt gleich?`,
      ],
      followUps: [
        {
          id: 'kontraintuitiv-nicht-unmoeglich',
          objection: `Kontraintuitiv heißt nicht unmöglich. Die Quantenmechanik ist auch absurd und trotzdem wahr.`,
          objectionBy: 'Sean Carroll',
          targetsPremise: 1,
          answer: `Die Quantenmechanik ist durch Experimente erzwungen; für reale aktual unendliche Mengen gibt es kein einziges Experiment. Und es geht nicht um ein Gefühl, sondern um eine ganze Familie von Paradoxien, die alle genau dort entstehen, wo man Unendliches real setzt. Eine einzige Annahme – keine unendlichen kausalen Ketten – erklärt sie alle.`,
          followUps: [
            {
              id: 'grim-reaper-patchwork',
              objection: `Das Grim-Reaper-Paradox beruht auf einem umstrittenen „Patchwork"-Prinzip. Man kann es einfach ablehnen.`,
              objectionBy: 'Alex Malpass',
              targetsPremise: 3,
              answer: `Man kann – aber zu einem Preis. Das Prinzip sagt nur, dass man mögliche Einzelteile zu einem möglichen Ganzen zusammensetzen kann; wer es aufgibt, verliert ein Werkzeug, das wir überall in der Modallogik benutzen. Der kausale Finitismus ist die sparsamere Lösung: Er erklärt alle Paradoxien zugleich.`,
              detail: `Ehrlich: Hier stehen kluge Philosophen auf beiden Seiten. Für die Debatte genügt, dass die Unmöglichkeitsthese rational gut begründet ist und die Gegenposition Zusatzannahmen braucht, die man sonst nicht machen würde.`,
              questionsBack: [
                `Welche Lösung erklärt Grim Reaper, Thomsons Lampe und die unendliche Lotterie gemeinsam?`,
              ],
            },
          ],
        },
        {
          id: 'cantor-selbst',
          objection: `Cantor selbst – ein gläubiger Christ – hielt das aktual Unendliche in der Natur für real!`,
          answer: `Stimmt, und das sollte man ehrlich zugeben. Cantor ist kein Zeuge für die Unmöglichkeitsthese. Aber Hilbert, sein größter Verteidiger, urteilte genau umgekehrt. Die Frage wird nicht durch Autoritäten entschieden, sondern durch Argumente – und das Argument aus der sukzessiven Bildung gilt selbst dann, wenn gleichzeitig existierende unendliche Mengen möglich wären.`,
          voices: [
            {
              person: 'cantor',
              role: 'als Begründer der Mengenlehre',
              text: `Cantor unterschied das mathematische Transfinite, das er für widerspruchsfrei und real hielt, vom „Absolut-Unendlichen", das er allein Gott zuschrieb und das jede mathematische Erfassung übersteigt. Für ihn ist das Unendliche also kein Konkurrent Gottes, sondern verweist auf ihn.`,
              sources: [
                { kind: 'wissenschaft', author: 'Georg Cantor', work: 'Mitteilungen zur Lehre vom Transfiniten', year: '1887/88', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jedes-ereignis-endlich-weit',
      objection: `Das „Durchlaufen"-Argument ist ein Denkfehler: In einer anfangslosen Vergangenheit liegt jedes Ereignis nur endlich weit zurück. Es gibt keine unendliche Strecke, die zu durchqueren wäre.`,
      objectionBy: 'J. L. Mackie / Graham Oppy',
      targetsPremise: 1,
      answer: `Jedes **einzelne** Ereignis liegt endlich weit zurück – geschenkt. Aber die **Gesamtheit** der vergangenen Ereignisse wäre unendlich, und genau diese Gesamtheit soll bis heute vollständig abgelaufen sein. Stell dir jemanden vor, der seit Ewigkeit rückwärts zählt und heute bei null ankommt: Warum gerade heute und nicht schon gestern – er hatte doch schon unendlich viel Zeit?`,
      detail: `Dieses „Warum nicht früher?"-Problem (Craig, Whitrow) zeigt: In einer anfangslosen Reihe müsste jedes Ereignis schon „unendlich früh" geschehen sein, denn zu jedem Zeitpunkt lag bereits eine unendliche Vorgeschichte hinter dem Zähler. Dass jedes Glied endlich entfernt ist, löst nicht das Problem der Vollendung des Ganzen.`,
      followUps: [
        {
          id: 'negative-zahlen-modell',
          objection: `Die negativen ganzen Zahlen sind ein perfektes Modell: …, −3, −2, −1, 0 – unendlich, ohne Anfang, mit einem Ende. Wo ist der Widerspruch?`,
          objectionBy: 'Wes Morriston',
          targetsPremise: 2,
          answer: `Als abstrakte Struktur ist das widerspruchsfrei. Aber Zahlen entstehen nicht nacheinander – Ereignisse schon. Ein Modell beschreibt eine Ordnung, keinen Prozess. Die Frage ist nicht, ob man eine anfangslose Reihe **aufschreiben** kann, sondern ob sie sich in der Wirklichkeit Schritt für Schritt **ereignen** kann.`,
          followUps: [
            {
              id: 'zeno-gegenargument',
              objection: `Dann kannst du auch keinen Meter laufen: Jede Strecke hat unendlich viele Punkte. Dein Argument beweist zu viel (Zenon).`,
              objectionBy: 'Alex Malpass',
              answer: `Nein. Eine Strecke ist unendlich **teilbar** (potenziell unendlich), aber sie besteht nicht aus unendlich vielen real abgegrenzten Teilstücken, die man einzeln abarbeitet – die Teile entstehen erst durch unser Einteilen. Vergangene Ereignisse dagegen sind real und diskret: Jeder Tag hat tatsächlich stattgefunden. Diese Unterscheidung geht auf Aristoteles zurück und wurde von Philoponos genutzt.`,
              detail: `Ehrlich: Manche Philosophen meinen, Zenon und Kalam stünden und fielen gemeinsam. Die Unterscheidung zwischen potenziellem und aktualem Unendlichen ist aber seit der Antike etabliert und wird von vielen Mathematikphilosophen geteilt.`,
            },
          ],
        },
        {
          id: 'tristram-shandy',
          objection: `Russell hat mit Tristram Shandy gezeigt: Wer ein Jahr braucht, um einen Tag seines Lebens zu beschreiben, wird bei unendlicher Zeit trotzdem fertig.`,
          objectionBy: 'Bertrand Russell',
          answer: `Russells Version blickt in eine endlose **Zukunft** – dort wird nie eine unendliche Menge vollendet, nur potenziell fortgesetzt. Dreht man es um und lässt Shandy seit Ewigkeit schreiben, wird es absurd: Er müsste heute unendlich weit hinter seinem Leben zurückliegen – oder längst fertig sein. Das Paradox stützt also gerade die Asymmetrie zwischen Vergangenheit und Zukunft.`,
          sources: [
            { kind: 'gegner', author: 'Bertrand Russell', work: 'The Principles of Mathematics', ref: 'Kap. 43', year: '1903', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'dann-ist-gott-unmoeglich',
      objection: `Wenn eine unendliche Vergangenheit unmöglich ist, dann auch ein ewiger Gott: Er müsste vor der Schöpfung unendlich viele Momente durchlaufen haben.`,
      objectionBy: 'Graham Oppy',
      answer: `Nein, denn die klassische christliche Lehre versteht Gottes Ewigkeit nicht als unendliche Abfolge von Momenten. Die Zeit beginnt mit der Schöpfung (Augustinus, Basilius). „Vor" der Schöpfung gab es keine Folge von Ereignissen, die hätte durchlaufen werden müssen.`,
      followUps: [
        {
          id: 'zeitlos-handeln-unmoeglich',
          objection: `Ein zeitloser Gott kann aber nicht handeln. Handeln braucht Zeit.`,
          objectionBy: 'Sean Carroll',
          answer: `Ursache und Wirkung müssen nicht zeitlich nacheinander liegen – schon Kant nannte die Kugel, die gleichzeitig eine Mulde ins Kissen drückt. Gottes Schöpfungsakt kann gleichzeitig mit dem ersten Moment der Zeit sein. Christen vertreten hier verschiedene Modelle (zeitlos; zeitlos ohne und zeitlich mit der Schöpfung, wie Craig), aber keines erfordert eine unendliche Vergangenheit.`,
          followUps: [
            {
              id: 'gottes-wissen-unendlich',
              objection: `Aber Gottes Wissen ist doch unendlich. Also gibt es auch bei dir ein aktual Unendliches!`,
              answer: `Gottes Wissen ist keine Sammlung konkreter Einzeldinge, die nacheinander zusammengetragen wird. Die Väter sprechen von Gottes Einfachheit: Er erkennt alles in einem Akt. Unendlich bedeutet bei Gott nicht „eine sehr große Menge", sondern „ohne Grenze der Vollkommenheit" – eine qualitative, keine quantitative Unendlichkeit. Cantor selbst stellte Gottes „Absolut-Unendliches" über jede Menge.`,
            },
          ],
        },
      ],
    },
    {
      id: 'physik-ewiges-universum',
      objection: `Die Physik kennt ewige Modelle: Penroses konforme zyklische Kosmologie, ewige Inflation, Quantenkosmologie. Die Frage entscheidet die Physik, nicht dein Lehnstuhl.`,
      objectionBy: 'Sean Carroll',
      answer: `Das philosophische Argument ist unabhängig von der Physik – aber die Physik stützt es: Das Borde-Guth-Vilenkin-Theorem zeigt, dass ein im Mittel expandierendes Universum nicht ewig in die Vergangenheit verlängert werden kann, und zyklische Modelle kämpfen mit der Entropie. Die Einzelheiten besprechen wir im Themenblock Kosmologie.`,
      followUps: [
        {
          id: 'bgv-nicht-absolut',
          objection: `Vilenkin selbst sagt, das BGV-Theorem beweise keinen absoluten Anfang – über die Quantengravitation sagt es nichts.`,
          objectionBy: 'Sean Carroll',
          answer: `Das ist ein faires Zugeständnis: BGV zeigt die Grenze der klassischen Beschreibung. Vilenkin sagte aber auch öffentlich, alle Belege, die wir haben, sprächen dafür, dass das Universum einen Anfang hatte. Und das philosophische Argument gilt ohnehin für jedes physikalische Modell, das eine anfangslose Ereignisfolge annimmt.`,
          sources: [
            { kind: 'wissenschaft', author: 'Arvind Borde, Alan Guth, Alexander Vilenkin', work: 'Inflationary Spacetimes Are Incomplete in Past Directions', ref: 'Physical Review Letters 90 (2003), 151301', year: '2003', status: 'paraphrase' },
            { kind: 'wissenschaft', author: 'Alexander Vilenkin', work: 'Vortrag zu Stephen Hawkings 70. Geburtstag (Cambridge), berichtet in New Scientist', year: '2012', quote: `Alle Belege, die wir haben, sagen, dass das Universum einen Anfang hatte.`, status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie viele Gäste bleiben in Hilberts Hotel, wenn unendlich viele abreisen – und kann die Antwort in der Wirklichkeit unbestimmt sein?`,
    `Wenn jemand seit Ewigkeit rückwärts zählt und heute bei null ankommt – warum nicht schon gestern?`,
    `Kannst du durch Addieren endlicher Zahlen jemals „unendlich" erreichen?`,
    `Welche Annahme erklärt alle Unendlichkeitsparadoxien auf einmal, wenn nicht der kausale Finitismus?`,
  ],
  avoid: [
    `„Das Unendliche ist mathematisch widersprüchlich." – Falsch; die Mengenlehre ist (nach allem, was wir wissen) widerspruchsfrei. Es geht um reale Instanziierung.`,
    `Hilberts Hotel als „Beweis" präsentieren – es ist ein Gedankenexperiment, das Intuitionen schärft; die Last trägt das Argument aus der sukzessiven Bildung.`,
    `Cantor als Kronzeugen gegen ein reales Unendliches anführen – er vertrat das Gegenteil.`,
  ],
  concessions: [
    `Die Frage, ob reale aktual unendliche Mengen möglich sind, ist unter Philosophen umstritten; die Gegenposition (Oppy, Morriston, Malpass) ist ernstzunehmen.`,
    `Das BGV-Theorem beweist für sich allein keinen absoluten Anfang, da es die Quantengravitation nicht abdeckt.`,
    `Selbst wenn das Argument gilt, zeigt es nur einen Anfang und eine transzendente Ursache – nicht schon den dreieinigen Gott. Dazu braucht es weitere Gründe.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: 'The Kalam Cosmological Argument', ref: 'in: The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alexander R. Pruss', work: 'Infinity, Causation, and Paradox', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Sorabji', work: 'Time, Creation and the Continuum', year: '1983', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'Philosophical Perspectives on Infinity', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Unendlichkeit', 'Kalam', 'Hilberts Hotel', 'Grim Reaper', 'Zeit'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'kosmologie/universum-ewig-zyklisch',
    'kosmologie/vor-dem-urknall-sinnlos',
    'atheismus/wer-schuf-gott',
  ],
};

export default claim;
