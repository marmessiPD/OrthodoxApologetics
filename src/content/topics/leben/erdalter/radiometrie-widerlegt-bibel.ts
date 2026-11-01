import type { Claim, Source } from '../../../schema.ts';

const wiens2002: Source = {
  kind: 'fachliteratur',
  author: 'Roger C. Wiens',
  work: 'Radiometric Dating: A Christian Perspective (American Scientific Affiliation)',
  year: '1994, überarbeitet 2002',
  quote: `Ein christlicher Physiker erklärt die wichtigsten radiometrischen Methoden für Laien, zeigt, wie Fehlerquellen erkannt werden (Isochronen, Übereinstimmung verschiedener Methoden), und widerlegt gängige Junge-Erde-Einwände.`,
  status: 'paraphrase',
};

const dalrymple1991: Source = {
  kind: 'wissenschaft',
  author: 'G. Brent Dalrymple',
  work: 'The Age of the Earth (Stanford University Press)',
  year: '1991',
  status: 'paraphrase',
  quote: `Übersicht über die radiometrischen Methoden und ihre übereinstimmenden Ergebnisse.`,
};

const shlyakhter1976: Source = {
  kind: 'wissenschaft',
  author: 'Alexander I. Shlyakhter',
  work: '„Direct test of the constancy of fundamental nuclear constants", Nature 264, S. 340',
  year: '1976',
  quote: `Aus den Isotopenverhältnissen des natürlichen Kernreaktors von Oklo (Gabun, vor rund 2 Milliarden Jahren aktiv) folgt, dass sich grundlegende Kernkonstanten seither höchstens minimal verändert haben.`,
  status: 'paraphrase',
};

const rate2005: Source = {
  kind: 'fachliteratur',
  author: 'Larry Vardiman, Andrew A. Snelling, Eugene F. Chaffin (Hg.)',
  work: 'Radioisotopes and the Age of the Earth, Bd. II (Institute for Creation Research / Creation Research Society)',
  year: '2005',
  quote: `Das Junge-Erde-Forschungsprojekt RATE schlägt einen stark beschleunigten radioaktiven Zerfall in der Vergangenheit vor und räumt ein, dass die dabei freiwerdende Wärme und Strahlung ein ungelöstes Problem darstellen.`,
  status: 'paraphrase',
  note: 'Selbst Junge-Erde-Forscher bestreiten nicht, dass sehr viel Zerfall stattgefunden hat; sie räumen das „Wärmeproblem" ein.',
};

const claim: Claim = {
  id: 'radiometrie-widerlegt-bibel',
  title: `„Die radiometrische Datierung widerlegt die Bibel."`,
  proponents: [
    { name: 'G. Brent Dalrymple', role: 'Geochronologe, U.S. Geological Survey', work: 'The Age of the Earth (1991)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The Greatest Show on Earth (2009), Kapitel über radioaktive „Uhren"' },
    { name: 'Bill Nye', role: 'Wissenschaftskommunikator', work: 'Debatte mit Ken Ham (2014)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")' },
  ],
  steelman: `Radioaktive Isotope zerfallen mit festen Halbwertszeiten – unbeeinflusst von Temperatur, Druck oder Chemie in allen geologisch relevanten Bereichen. Daraus ergeben sich natürliche Uhren: Uran-Blei, Kalium-Argon, Rubidium-Strontium, Samarium-Neodym und viele mehr. Isochronen-Methoden erkennen, ob anfangs schon Tochterisotope vorhanden waren oder ob eine Probe verunreinigt ist; verschiedene Methoden mit völlig unterschiedlichen Zerfallsketten liefern an derselben Probe übereinstimmende Alter. Der natürliche Kernreaktor von Oklo und der Zerfall radioaktiver Elemente in der Supernova 1987A zeigen, dass die Zerfallsraten über Milliarden Jahre und Lichtjahre hinweg gleich geblieben sind. Das Ergebnis: Gesteine sind Millionen bis Milliarden Jahre alt. Damit ist das biblische Weltbild einer wenige tausend Jahre alten Schöpfung widerlegt.`,
  biblical: {
    summary: `Die Bibel nennt kein Erdalter und keine Messmethode. Sie bezeugt aber einen treuen Gott, der eine verlässliche Ordnung geschaffen hat: „Solange die Erde steht, soll nicht aufhören Same und Ernte, Frost und Hitze, Sommer und Winter, Tag und Nacht" (Gen 8,22); Gott spricht von seinem „Bund mit Tag und Nacht" und der „Ordnung des Himmels und der Erde" (Jer 33,25). Die Beständigkeit der Naturgesetze, auf der die Radiometrie beruht, ist also eine zutiefst biblische Erwartung. Und weil Gott nicht lügt (Hebr 6,18), täuscht auch seine Schöpfung nicht.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '8,22', quote: `Solange die Erde steht, soll nicht aufhören Same und Ernte, Frost und Hitze, Sommer und Winter, Tag und Nacht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `So spricht der HERR: Halte ich meinen Bund nicht mit Tag und Nacht noch die Ordnung des Himmels und der Erde, …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '6,18', quote: `Gott kann nicht lügen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter sprachen von zwei „Büchern", durch die Gott redet: der Heiligen Schrift und der Schöpfung. Athanasius sagt, die Schöpfung verkünde wie in Schriftzeichen ihren Herrn und Schöpfer. Augustinus mahnt, Christen sollten sich nicht durch unhaltbare Behauptungen über die Natur lächerlich machen, wenn Ungläubige darüber aus Erfahrung und Vernunft Sicheres wissen. Ein Konflikt zwischen dem richtig gelesenen Buch der Natur und der richtig gelesenen Schrift ist für sie undenkbar.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '34–35', quote: `Die Schöpfung verkündet wie in Schriftzeichen durch ihre Ordnung und Harmonie ihren Herrn und Schöpfer.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', quote: `Es ist schändlich und schädlich und unbedingt zu vermeiden, dass ein Ungläubiger einen Christen, der sich auf die Schrift beruft, über Erde, Himmel und Gestirne so unsinnig reden hört, dass er kaum das Lachen halten kann.`, original: 'Turpe est autem nimis et perniciosum ac maxime cavendum, ut christianum de his rebus quasi secundum christianas litteras loquentem, ita delirare quilibet infidelis audiat …', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Enarrationes in Psalmos', ref: '45,7', quote: `Die göttliche Schrift sei dir ein Buch, damit du hörst; der Erdkreis sei dir ein Buch, damit du siehst.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Radiometrische Methoden sind bei sachgerechter Anwendung allgemein zuverlässig. Bekannte Fehlerquellen (offene Systeme, ererbtes Argon in jungen Laven, Verunreinigung) sind verstanden und werden durch Isochronen, Konkordanz-Tests und den Vergleich unabhängiger Methoden erkannt. Die Konstanz der Zerfallsraten ist vielfach geprüft. Junge-Erde-Einwände (Mount St. Helens, Kohlenstoff-14 in Diamanten, Helium in Zirkonen) beruhen auf ungeeigneten Methoden oder umstrittenen Annahmen; selbst das Junge-Erde-Projekt RATE räumt ein, dass ein beschleunigter Zerfall ein ungelöstes Wärmeproblem erzeugt. C-14 dient nur bis etwa 50.000 Jahre und nie zur Datierung von Gesteinen.`,
    sources: [dalrymple1991, wiens2002, shlyakhter1976, rate2005],
  },
  quickAnswer: `Radiometrische Methoden sind im Allgemeinen zuverlässig – das sagen auch christliche Physiker wie Roger Wiens, und du musst sie nicht bekämpfen. Sie messen das Alter von Gesteinen, nicht die Wahrheit der Genesis. Die Bibel nennt kein Erdalter; dass die Naturgesetze beständig sind, ist sogar eine biblische Erwartung (Gen 8,22; Jer 33,25). Widerlegt wird höchstens eine bestimmte Auslegung, die die koptische Kirche nicht zum Dogma macht.`,
  keyPoints: [
    `**Ehrliches Zugeständnis:** Radiometrische Datierung ist bei sachgerechter Anwendung zuverlässig; kein Kampfplatz für Christen.`,
    `**Biblisch erwartet:** Gottes Treue zeigt sich in der Beständigkeit der Naturordnung (Gen 8,22; Jer 33,25) – darauf beruht die Methode.`,
    `**Gott täuscht nicht:** Eine „alt aussehend geschaffene" Welt (Omphalos-Idee) wäre theologisch problematisch.`,
    `**Text, nicht Auslegung:** Die Bibel nennt kein Erdalter; widerlegt wird eine Auslegung, keine Glaubenslehre.`,
    `**Schwache Gegenargumente meiden:** Mount St. Helens, C-14 in Diamanten und „Zerfallsraten änderten sich" schaden der Glaubwürdigkeit.`,
    `**Die eigentliche Frage bleibt:** Warum es überhaupt eine geordnete, messbare Welt gibt, beantwortet keine Datierung.`,
  ],
  voices: [
    {
      person: 'roger-wiens',
      role: 'als christlicher Physiker und Planetenforscher',
      text: `Roger Wiens hat als Christ eine vielgelesene Einführung in die radiometrische Datierung geschrieben. Er erklärt, wie Halbwertszeiten gemessen werden, warum Isochronen anfängliche Tochterisotope und Verunreinigungen erkennen, und warum die Übereinstimmung vieler unabhängiger Methoden so aussagekräftig ist. Sein Anliegen ist pastoral: Christen sollen nicht glauben müssen, ihr Glaube hänge an der Ablehnung gut belegter Physik – denn dann verlieren sie ihn, sobald sie die Physik verstehen.`,
      sources: [wiens2002],
    },
    {
      person: 'davis-young',
      role: 'als christlicher Geologe',
      text: `Davis Young erinnert daran, dass die Geologie als Wissenschaft maßgeblich von gläubigen Christen aufgebaut wurde, die aus den Gesteinen auf große Zeiträume schlossen, lange bevor es radiometrische Methoden gab. Die Radiometrie hat diese Zeiträume später quantitativ bestätigt. Ein Konflikt mit der Schrift entsteht für Young nur dann, wenn man eine bestimmte Auslegung mit der Schrift selbst gleichsetzt.`,
      sources: [{ kind: 'fachliteratur', author: 'Davis A. Young, Ralph F. Stearley', work: 'The Bible, Rocks and Time', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker',
      text: `Hugh Ross betont, dass die Natur als Gottes Werk zuverlässig über ihre Geschichte Auskunft gibt. Astronomische und radiometrische Daten zeigen übereinstimmend ein hohes Alter; die Annahme, Gott habe eine junge Welt mit dem Anschein hohen Alters geschaffen, würde Gott zum Täuscher machen. Für Ross ist die Übereinstimmung von Schrift und Natur, richtig verstanden, ein Argument für den christlichen Glauben.`,
      sources: [{ kind: 'fachliteratur', author: 'Hugh Ross', work: 'A Matter of Days', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis',
      text: `Augustinus' berühmte Mahnung in *De Genesi ad litteram* I,19,39 könnte für diese Debatte geschrieben sein: Wenn Ungläubige über Himmel, Erde und Natur aus Erfahrung und Vernunft Sicheres wissen und hören, wie ein Christ unter Berufung auf die Schrift darüber Unsinn redet, dann werden sie auch dem Evangelium nicht glauben. Augustinus hielt die Welt zwar selbst für jung, aber seine Regel gilt: Schriftauslegung darf nicht gegen gesichertes Naturwissen gestellt werden.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', status: 'paraphrase' }],
    },
    {
      person: 'lennox',
      role: 'als Wissenschaftsphilosoph',
      text: `Lennox mahnt, Christen sollten wissenschaftliche Fragen nicht zu Glaubensfragen erheben, die die Schrift nicht stellt. Die Parallele zu Galilei zeigt: Die Kirche verlor Glaubwürdigkeit, als sie eine Auslegung (die stillstehende Erde) mit der Schrift gleichsetzte – und gewann sie zurück, als sie die Unterscheidung lernte.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'Seven Days That Divide the World', year: '2011', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'zerfallsraten-geaendert',
      objection: `Kreationisten behaupten, die Zerfallsraten hätten sich früher geändert. Lächerlich – Oklo und Supernovae zeigen das Gegenteil.`,
      objectionBy: 'Dave Farina',
      answer: `Einverstanden. Es gibt keine belastbaren Belege für geänderte Zerfallsraten, und selbst das Junge-Erde-Projekt RATE räumt ein, dass ein beschleunigter Zerfall so viel Wärme freigesetzt hätte, dass dies ein ungelöstes Problem ist. Ich muss diese These nicht verteidigen – mein Glaube hängt nicht daran.`,
      sources: [shlyakhter1976, rate2005],
      followUps: [
        {
          id: 'also-bibel-falsch',
          objection: `Also gibst du zu, dass die Bibel falsch liegt.`,
          answer: `Nein. Die Bibel nennt kein Alter der Erde. Widerlegt ist eine bestimmte Auslegung – die eines sehr jungen Kosmos –, die die koptische Kirche nicht zum Dogma macht.`,
          followUps: [
            {
              id: 'sechs-tage-kapitulation',
              objection: `Die Bibel lehrt sechs Tage. Wer das umdeutet, kapituliert vor der Wissenschaft.`,
              answer: `Origenes im 3. und Augustinus im 5. Jahrhundert lasen die Tage nicht als gewöhnliche Tage – aus Gründen des Textes, lange vor jeder Radiometrie. Mehr dazu im Claim „Die Erde ist 4,5 Milliarden Jahre alt".`,
              followUps: [
                {
                  id: 'glaube-unfalsifizierbar',
                  objection: `Dann frage ich: Was *könnte* eure Bibel eigentlich noch falsch machen? Wenn jede wissenschaftliche Entdeckung nur eine „Auslegung" widerlegt, ist euer Glaube gegen jede Tatsache immun – also unfalsifizierbar.`,
                  objectionBy: 'Bill Nye',
                  answer: `Eine faire Frage – und die Antwort ist: Der christliche Glaube ist an seinem Zentrum sehr wohl angreifbar. Paulus schreibt: „Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich" (1 Kor 15,14). Der Glaube steht und fällt mit einem historischen Ereignis, nicht mit dem Alter von Gesteinen. Die Kirche hat nie behauptet, ihr Heil hänge an einer Erdalter-Zahl – wohl aber am leeren Grab.`,
                  detail: `**Unterscheide Kern und Auslegung:**
- **Kern** (an Geschichte gebunden): Menschwerdung, Kreuzigung unter Pontius Pilatus, Auferstehung am dritten Tag. Hier macht der Glaube Aussagen, die historisch prüfbar sind – Paulus nennt sogar lebende Zeugen (1 Kor 15,5–8).
- **Auslegungsfragen** (in der Kirche offen): Länge der Schöpfungstage, Umfang der Flut, biologische Mechanismen.

**Warum das kein Ausweichen ist:** Schon vor jeder modernen Wissenschaft hat die Kirche diese Unterscheidung getroffen – die Väter lasen die Schöpfungstage verschieden, aber keiner relativierte die Auferstehung. Ein Glaube, der sein Zentrum der Prüfung aussetzt, ist das Gegenteil eines immunisierten Glaubens.

Siehe den Themenblock zur Auferstehung für die historischen Argumente.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: '1. Korinther', ref: '15,6', quote: `Danach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal, deren noch viele leben, etliche aber sind entschlafen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn Paulus den ganzen Glauben an die Auferstehung bindet – ist das ein immunisierter oder ein angreifbarer Glaube?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mount-st-helens',
      objection: `Du wirst jetzt sicher mit Mount St. Helens kommen: Lava von 1980 wurde auf Hunderttausende Jahre datiert.`,
      objectionBy: 'Dave Farina',
      answer: `Nein, das Argument benutze ich nicht. Die Kalium-Argon-Methode ist für so junge Gesteine ungeeignet, weil ältere Kristalle ererbtes Argon enthalten – ein bekannter Effekt. Eine falsch angewandte Methode widerlegt nicht die richtig angewandte.`,
      followUps: [
        {
          id: 'isochronen-mischlinien',
          objection: `Immerhin können auch Isochronen falsche Alter liefern – durch Mischungslinien.`,
          answer: `Richtig, solche Fälle gibt es, und Geochronologen kennen sie. Deshalb prüft man mit unabhängigen Methoden und Konkordanztests. Das sind erkennbare Einzelfehler, keine systematische Verfälschung um das Millionenfache.`,
          sources: [wiens2002],
        },
      ],
    },
    {
      id: 'omphalos',
      objection: `Entweder hat Gott die Welt nur alt aussehen lassen, oder die Bibel irrt. Wähle!`,
      objectionBy: 'Richard Dawkins',
      answer: `Es gibt eine dritte Möglichkeit: Die Genesis lehrt kein junges Alter der Welt. Die Idee einer alt aussehend geschaffenen Welt (Philip Henry Gosse, 1857) lehne ich ab – sie würde Gott zum Täuscher machen, und Gott lügt nicht.`,
      followUps: [
        {
          id: 'christen-junge-erde-dumm',
          objection: `Aber viele Christen glauben an eine junge Erde. Sind die alle dumm?`,
          answer: `Nein. Sie wollen der Schrift treu sein, und das respektiere ich. Ich halte ihre Auslegung für nicht zwingend und ihre wissenschaftlichen Argumente für schwach. Die koptische Kirche lässt hier Freiheit – deshalb sollte die junge Erde für niemanden ein Test des Glaubens sein.`,
        },
      ],
    },
    {
      id: 'tod-vor-suendenfall',
      objection: `Wenn die Erde alt ist, gab es Millionen Jahre Tod vor dem Sündenfall. Das zerstört eure ganze Erlösungslehre.`,
      objectionBy: 'Jerry Coyne',
      answer: `Römer 5,12 spricht vom Tod, der „zu allen Menschen durchgedrungen" ist – also vom Tod des Menschen. Ob es Tiertod vor dem Fall gab, haben schon die Väter unterschiedlich gesehen; Psalm 104,21 preist Gott dafür, dass die jungen Löwen ihre Speise von ihm erbitten. Die Erlösung hängt am Tod der Menschen und am Sieg Christi über ihn.`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '5,12', quote: `Derhalben, wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben;`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Psalmen', ref: '104,21', quote: `die jungen Löwen, die da brüllen nach dem Raub und ihre Speise suchen von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'roemer-8-vergaenglichkeit',
          objection: `Römer 8,20–22 sagt doch, die ganze Schöpfung sei durch den Fall der Vergänglichkeit unterworfen.`,
          answer: `Die Stelle sagt, die Schöpfung sei der Vergänglichkeit unterworfen „um deswillen, der sie unterworfen hat" – die Ausleger deuten das verschieden. Es ist eine offene theologische Frage, die nicht durch Radiometrie entschieden wird. Ausführlicher im Themenblock zum Tierleid.`,
        },
      ],
    },
    {
      id: 'c14-diamanten',
      objection: `Was ist mit Kohlenstoff-14 in Diamanten und Helium in Zirkonen? Das RATE-Projekt sagt, das beweise eine junge Erde.`,
      objectionBy: 'Junge-Erde-Argument (RATE-Projekt)',
      answer: `Die gemessenen C-14-Werte liegen im Bereich des Messhintergrunds und möglicher Verunreinigungen; C-14 eignet sich ohnehin nicht für Gesteine. Die Helium-Studien beruhen auf Annahmen, die Fachleute – auch christliche – stark kritisieren. Ich würde mich in keiner Debatte darauf stützen.`,
      sources: [rate2005],
    },
  ],
  questionsToAsk: [
    `Wo nennt die Bibel das Alter der Erde?`,
    `Ist die Beständigkeit der Naturgesetze nicht gerade eine Voraussetzung, die aus dem Glauben an einen treuen Schöpfer folgt?`,
    `Warum gibt es überhaupt eine geordnete Welt, deren Alter man messen kann?`,
    `Welche Glaubenslehre der Kirche wird durch die Radiometrie widerlegt?`,
  ],
  avoid: [
    `„Mount St. Helens beweist, dass Radiometrie falsch ist" – Missbrauch einer für junge Gesteine ungeeigneten Methode.`,
    `„C-14 in Dinosaurierknochen/Diamanten beweist eine junge Erde" – Hintergrund und Verunreinigung; C-14 datiert keine Gesteine.`,
    `„Die Zerfallsraten waren früher schneller" – ohne Belege und mit dem eingestandenen Wärmeproblem.`,
    `„Gott hat die Welt alt aussehen lassen" – macht Gott zum Täuscher.`,
  ],
  concessions: [
    `Radiometrische Datierung ist bei sachgerechter Anwendung zuverlässig und durch viele unabhängige Methoden bestätigt.`,
    `Viele beliebte Junge-Erde-Argumente gegen die Radiometrie halten einer Prüfung nicht stand.`,
  ],
  furtherReading: [
    wiens2002,
    dalrymple1991,
    { kind: 'fachliteratur', author: 'Davis A. Young, Ralph F. Stearley', work: 'The Bible, Rocks and Time', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Radiometrie', 'Datierung', 'Erdalter', 'Junge Erde', 'RATE'],
  related: ['erdalter/erde-alt-bibel-widerlegt', 'erdalter/sintflut-unmoeglich', 'theodizee/tierleid', 'kirchengeschichte-mythen/galilei'],
};

export default claim;
