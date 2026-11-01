import type { Claim, Source } from '../../../schema.ts';

const patterson1956: Source = {
  kind: 'wissenschaft',
  author: 'Clair C. Patterson',
  work: '„Age of meteorites and the earth", Geochimica et Cosmochimica Acta 10, S. 230–237',
  year: '1956',
  quote: `Bestimmung des Erdalters über Blei-Isotope in Meteoriten auf rund 4,55 Milliarden Jahre.`,
  status: 'paraphrase',
};

const dalrymple1991: Source = {
  kind: 'wissenschaft',
  author: 'G. Brent Dalrymple',
  work: 'The Age of the Earth (Stanford University Press)',
  year: '1991',
  quote: `Standardwerk: Zahlreiche unabhängige radiometrische Methoden an Meteoriten, Mond- und Erdgestein ergeben übereinstimmend ein Alter von etwa 4,5 Milliarden Jahren.`,
  status: 'paraphrase',
};

const augustinusCivDei116: Source = {
  kind: 'kirchenvater',
  author: 'Augustinus von Hippo',
  work: 'De Civitate Dei',
  ref: 'XI,6',
  quote: `Welcher Art diese Tage sind, ist für uns äußerst schwer oder sogar unmöglich zu denken – wie viel mehr, es auszusprechen.`,
  original: 'Qui dies cuius modi sint, aut perdifficile nobis aut etiam impossibile est cogitare, quanto magis dicere.',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
};

const origenesDePrinc: Source = {
  kind: 'kirchenvater',
  author: 'Origenes',
  work: 'Über die Prinzipien (De Principiis / Peri Archon)',
  ref: 'IV,3,1 (in älteren englischen Ausgaben IV,1,16)',
  quote: `Welcher Verständige wird glauben, dass der erste, zweite und dritte Tag, Abend und Morgen, ohne Sonne, Mond und Sterne existierten, der erste Tag sogar ohne Himmel?`,
  translation: 'sinngemäß nach dem Griechischen',
  status: 'paraphrase',
  note: 'Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; sein textliches Argument wird hier als Beobachtung zitiert, nicht als Lehrautorität.',
};

const claim: Claim = {
  id: 'erde-alt-bibel-widerlegt',
  title: `„Die Erde ist 4,5 Milliarden Jahre alt – das widerlegt die Bibel."`,
  proponents: [
    { name: 'Bill Nye', role: 'Wissenschaftskommunikator', work: 'Debatte mit Ken Ham (Februar 2014); Undeniable (2014)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The Greatest Show on Earth (2009)' },
    { name: 'Jerry Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Faith vs. Fact (2015)' },
    { name: 'G. Brent Dalrymple', role: 'Geochronologe (U.S. Geological Survey)', work: 'The Age of the Earth (1991)' },
  ],
  steelman: `Viele unabhängige Methoden kommen zum selben Ergebnis: Die Blei-Isotope von Meteoriten datieren das Sonnensystem auf rund 4,56 Milliarden Jahre, die Erde auf etwa 4,54 Milliarden; die ältesten irdischen Zirkonkristalle sind rund 4,4 Milliarden Jahre alt; Eisbohrkerne aus der Antarktis enthalten 800.000 Jahre Jahresschichten; Plattentektonik, Magnetstreifen am Meeresboden, Korallenriffe und Sedimentfolgen bestätigen gewaltige Zeiträume. Liest man die Bibel dagegen einfach so, wie sie dasteht, ergibt sich ein junges Universum: sechs Tage mit „Abend und Morgen", dazu Stammbäume mit Altersangaben, aus denen Bischof Ussher 4004 v. Chr. als Schöpfungsjahr errechnete. Selbst das Sabbatgebot begründet sich mit sechs Tagen (Ex 20,11). Wer das Alter der Erde akzeptiert, muss also zugeben, dass die Bibel sich irrt – oder er deutet sie so lange um, bis sie nichts mehr aussagt.`,
  biblical: {
    summary: `Die Bibel nennt kein Alter der Erde. Gen 1,1 („Am Anfang schuf Gott Himmel und Erde") steht vor dem ersten Tag und lässt die Dauer offen. Das hebräische *jôm* bedeutet Tageslicht, 24-Stunden-Tag oder unbestimmten Zeitraum – in Gen 2,4 umfasst „der Tag, da Gott Himmel und Erde machte" die ganze Schöpfung. Der siebte Tag hat keinen „Abend und Morgen" (Gen 2,1–3), und Hebr 4 spricht von Gottes fortdauernder Ruhe. Die Stammbäume sind nicht als lückenlose Chronologie gedacht: Mt 1,8 überspringt drei Könige. Die Schrift will sagen, *dass* und *wer* – nicht, vor wie vielen Jahren.`,
    detail: `**Auslegungsmodelle (alle von bibeltreuen Christen vertreten):**
- **Junge Erde:** sechs 24-Stunden-Tage, Erde ca. 6.000–10.000 Jahre (z. B. Henry Morris, John Sanford).
- **Tag-Zeitalter:** jeder „Tag" ein langer Zeitraum (z. B. Hugh Ross).
- **Rahmendeutung (Framework):** Die sechs Tage sind ein literarischer Rahmen – Tage 1–3 schaffen Räume, Tage 4–6 füllen sie (z. B. Meredith Kline).
- **Analoge Tage:** Gottes „Arbeitswoche" als Vorbild der menschlichen Woche, nicht als Zeitmaß (C. John Collins).
- **Kosmischer Tempel:** Gen 1 beschreibt die Einsetzung der Welt als Tempel Gottes (John Walton).

**Genealogien:** Mt 1,8 nennt „Joram zeugte Usia", obwohl nach 2 Chr 22–26 Ahasja, Joas und Amazja dazwischen regierten. „Zeugen" und „Sohn" können „Nachkomme" bedeuten. Der griechische Text der Septuaginta, die Bibel der frühen Kirche, ergibt zudem eine deutlich längere Chronologie als der hebräische.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,1', quote: `Am Anfang schuf Gott Himmel und Erde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '2,4', quote: `Also ist Himmel und Erde geworden, da sie geschaffen sind, zu der Zeit, da Gott der HERR Erde und Himmel machte.`, original: 'bəyôm ʿăśôt YHWH ʾĕlōhîm (wörtlich: „am Tag, als … machte")', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '1,8', quote: `Asa zeugte Josaphat. Josaphat zeugte Joram. Joram zeugte Usia.`, translation: 'Luther 1912', status: 'verbatim', note: 'Vgl. 2 Chr 22–26: Ahasja, Joas und Amazja fehlen – Genealogien sind nicht lückenlos.' },
      { kind: 'bibel', work: 'Psalmen', ref: '90,4', quote: `Denn tausend Jahre sind vor dir wie der Tag, der gestern vergangen ist, und wie eine Nachtwache.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Exodus', ref: '20,11', quote: `Denn in sechs Tagen hat der HERR Himmel und Erde gemacht und das Meer und alles, was darinnen ist, und ruhte am siebenten Tage.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Über das Alter der Erde gibt es in der koptisch-orthodoxen Kirche **kein Dogma**. Verbindlich ist: Gott schuf alles aus dem Nichts, der Mensch ist nach Gottes Bild geschaffen, Adam und Eva sind reale Personen. Die Väter lasen die Schöpfungstage unterschiedlich: Basilius und Ephräm eher wörtlich, Origenes, Clemens und Augustinus nicht als gewöhnliche Tage – lange vor jeder modernen Geologie. Ehrlich ist auch: Die meisten Väter hielten die Welt für einige tausend Jahre alt; das war die Chronologie ihrer Zeit, nicht Glaubenslehre.`,
    sources: [
      augustinusCivDei116,
      origenesDePrinc,
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XII,10', quote: `Augustinus rechnet seit der Erschaffung des Menschen mit noch nicht ganz 6.000 Jahren.`, status: 'paraphrase', note: 'Ehrliches Zugeständnis: Augustinus deutete die Tage nicht wörtlich, hielt die Welt aber für jung.' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,28', quote: `Sieh an Himmel und Erde und alles, was darinnen ist; diese hat Gott alle aus nichts gemacht, und wir Menschen sind auch so gemacht.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Deuterokanonisch; klassischer Beleg für die Schöpfung aus dem Nichts – das eigentliche Dogma.' },
    ],
  },
  opposingView: {
    summary: `Das Alter der Erde von rund 4,54 Milliarden Jahren (± etwa 1 %) ist einer der am besten abgesicherten Befunde der Naturwissenschaft. Es beruht auf vielen unabhängigen radiometrischen Methoden (Uran-Blei, Blei-Blei, Rubidium-Strontium, Samarium-Neodym u. a.), die an Meteoriten, Mondgestein und den ältesten Erdmineralen übereinstimmen, und wird durch Astrophysik und Geologie gestützt. Eine junge Erde von wenigen tausend Jahren wird nur von einer kleinen Minderheit von Wissenschaftlern vertreten, fast ausschließlich aus religiösen Gründen.`,
    sources: [patterson1956, dalrymple1991,
      { kind: 'wissenschaft', author: 'Simon A. Wilde, John W. Valley, William H. Peck, Colin M. Graham', work: '„Evidence from detrital zircons for the existence of continental crust and oceans on the Earth 4.4 Gyr ago", Nature 409, S. 175–178', year: '2001', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel nennt kein Alter der Erde. „Am Anfang" (Gen 1,1) steht vor dem ersten Tag, das hebräische Wort für „Tag" hat mehrere Bedeutungen, und die Stammbäume haben Lücken – Matthäus überspringt drei Könige. Schon Origenes und Augustinus fragten vor über 1.500 Jahren, wie es Tage ohne Sonne geben kann. Die koptische Kirche hat hier kein Dogma. 4,5 Milliarden Jahre widerlegen eine Auslegung, nicht die Bibel.`,
  keyPoints: [
    `**Kein Datum in der Bibel:** Gen 1,1 („Am Anfang") geht dem ersten Tag voraus; die Dauer bleibt offen.`,
    `**„Tag" hat mehrere Bedeutungen:** Gen 2,4 fasst die ganze Schöpfung als einen „Tag"; der siebte Tag hat kein „Abend und Morgen".`,
    `**Genealogien mit Lücken:** Mt 1,8 überspringt drei Könige; die Septuaginta rechnet anders als der hebräische Text.`,
    `**Vor jeder Geologie:** Origenes (3. Jh.) und Augustinus (5. Jh.) hielten die Tage nicht für gewöhnliche Tage – aus Gründen des Textes.`,
    `**Koptisch kein Dogma:** Verbindlich sind Schöpfung aus dem Nichts, Gottebenbildlichkeit, reale Stammeltern – nicht das Erdalter.`,
    `**Fair bleiben:** Christen vertreten Junge-Erde-, Tag-Zeitalter-, Rahmen- und andere Deutungen; keine ist ein Test der Rechtgläubigkeit.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis',
      text: `Augustinus schrieb ein ganzes Werk „über den Wortsinn der Genesis" (*De Genesi ad litteram*) und kam gerade bei der Suche nach dem Wortsinn zu dem Ergebnis, dass die Schöpfungstage keine gewöhnlichen Sonnentage sein können: Die Sonne entsteht erst am vierten Tag. In *De Civitate Dei* XI,6 gesteht er, es sei für uns äußerst schwer oder gar unmöglich zu denken, welcher Art diese Tage seien. Er warnte zudem eindringlich davor, dass Christen sich mit unhaltbaren Behauptungen über die Natur vor Ungläubigen lächerlich machen (DGaL I,19,39). Ehrlich muss man hinzufügen: Augustinus hielt die Welt dennoch für jünger als 6.000 Jahre – er übernahm die Chronologie seiner Zeit.`,
      sources: [augustinusCivDei116, { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'IV,26–27; I,19,39', status: 'paraphrase' }],
    },
    {
      person: 'origenes',
      role: 'als Bibelwissenschaftler der Schule von Alexandrien',
      text: `Origenes stellte im 3. Jahrhundert die berühmte Frage, wie der erste, zweite und dritte Tag mit Abend und Morgen ohne Sonne, Mond und Sterne existiert haben sollen. Für ihn zeigte dies, dass der Text auf eine tiefere Bedeutung verweist, als ein rein chronologisches Verständnis erfasst. Sein Argument ist rein textlich – lange bevor irgendjemand Gesteine datierte.`,
      sources: [origenesDePrinc],
    },
    {
      person: 'hugh-ross',
      role: 'als Astrophysiker (Tag-Zeitalter-Deutung)',
      text: `Hugh Ross vertritt die Tag-Zeitalter-Deutung: Das hebräische *jôm* könne einen langen Zeitraum bezeichnen, und die Abfolge der Schöpfungstage entspreche in groben Zügen der wissenschaftlich rekonstruierten Geschichte von Erde und Leben. Er betont, dass die Natur als „zweites Buch" Gottes nicht lügen kann: Wenn Sternenlicht, Gesteine und Fossilien ein hohes Alter zeigen, dann sei dies Gottes eigenes Zeugnis. Kritiker – auch christliche – halten seine detaillierte Zuordnung der Tage zu Erdepochen für zu konkordistisch.`,
      sources: [{ kind: 'fachliteratur', author: 'Hugh Ross', work: 'A Matter of Days: Resolving a Creation Controversy', year: '2004', status: 'paraphrase' }],
    },
    {
      person: 'meredith-kline',
      role: 'als Alttestamentler (Rahmendeutung)',
      text: `Meredith Kline argumentiert, dass die sechs Tage einen kunstvollen literarischen Rahmen bilden: Die Tage 1–3 schaffen „Reiche" (Licht/Finsternis, Himmel/Meer, Land), die Tage 4–6 setzen ihre „Herrscher" ein (Gestirne, Vögel/Fische, Landtiere/Mensch). In seinem Aufsatz „Because It Had Not Rained" (1958) zeigt er zudem an Gen 2,5, dass die Schöpfung nach dem Text unter normalen Bedingungen der Vorsehung ablief (Pflanzen fehlten, weil es nicht geregnet hatte) – was gegen extrem verkürzte 24-Stunden-Tage spreche.`,
      sources: [
        { kind: 'fachliteratur', author: 'Meredith G. Kline', work: '„Because It Had Not Rained", Westminster Theological Journal 20, S. 146–157', year: '1958', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Meredith G. Kline', work: '„Space and Time in the Genesis Cosmogony", Perspectives on Science and Christian Faith 48, S. 2–15', year: '1996', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Wissenschaftsphilosoph',
      text: `Lennox zieht in *Seven Days That Divide the World* eine Parallele zu Galilei: Die Kirche musste lernen, dass Verse über die „feststehende" Erde nicht die Physik der Himmelsmechanik lehren – ohne dass die Schrift dadurch ihre Autorität verlor. Ähnlich könne man das Alter der Erde akzeptieren, ohne die Genesis aufzugeben. Lennox selbst bevorzugt eine Deutung, in der die Tage echte Tage göttlichen Schaffens sind, die durch Zeiträume unbestimmter Länge getrennt sein können.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'Seven Days That Divide the World: The Beginning According to Genesis and Science', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'john-sanford',
      role: 'als Genetiker (Vertreter der jungen Erde)',
      text: `Zur fairen Darstellung: John Sanford, Pflanzengenetiker an der Cornell University, vertritt eine junge Erde. Er argumentiert genetisch, dass sich schwach schädliche Mutationen im menschlichen Erbgut so schnell anhäufen, dass die Menschheit nicht Hunderttausende Jahre alt sein könne („genetische Entropie"). Viele Christen respektieren seine Treue zum wörtlichen Text; seine Schlussfolgerungen sind in der Fachwelt jedoch stark umstritten, und die koptische Kirche macht die junge Erde nicht zur Lehre.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Sanford', work: 'Genetic Entropy', year: '4. Aufl. 2014', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'ussher-genealogien',
      objection: `Die Stammbäume ergeben etwa 6.000 Jahre – Bischof Ussher hat es genau ausgerechnet.`,
      objectionBy: 'Bill Nye',
      answer: `Ussher setzte voraus, dass die Stammbäume lückenlos sind. Das sind sie nicht: Matthäus 1,8 überspringt drei Könige, „Sohn" kann „Nachkomme" heißen, und die Septuaginta, die Bibel der frühen Kirche, ergibt eine um viele Jahrhunderte längere Chronologie als der hebräische Text.`,
      followUps: [
        {
          id: 'gen-5-11-zeugungsalter',
          objection: `Aber Genesis 5 und 11 nennen das Alter bei der Zeugung – das ergibt eine lückenlose Kette.`,
          objectionBy: 'Ken Ham (Junge-Erde-Position)',
          answer: `Das ist das stärkste Argument der Junge-Erde-Position – ich nehme es ernst. Aber die beiden Listen sind kunstvoll gestaltet (jeweils zehn Glieder bis Noah bzw. Abraham), die Zahlen unterscheiden sich zwischen hebräischem und griechischem Text, und Lukas 3,36 nennt einen Kenan zwischen Arpachschad und Schelach, der im hebräischen Genesis-Text fehlt.`,
          followUps: [
            {
              id: 'luecken-keine-milliarden',
              objection: `Selbst mit Lücken kommst du nicht auf Milliarden Jahre.`,
              answer: `Richtig – und das muss ich auch nicht. Die Stammbäume betreffen die Menschheitsgeschichte, nicht das Alter der Erde. Die Frage nach Milliarden Jahren hängt an Gen 1,1 und den Schöpfungstagen, nicht an den Genealogien.`,
              followUps: [
                {
                  id: 'tod-vor-dem-suendenfall',
                  objection: `Wenn die Erde Milliarden Jahre alt ist, dann gab es Hunderte Millionen Jahre Tod, Raubtiere und Krankheit vor dem Sündenfall. Aber Römer 5,12 sagt: Durch die Sünde kam der Tod in die Welt. Und Gott nannte das alles „sehr gut"? Eine alte Erde zerstört das Evangelium.`,
                  objectionBy: 'Ken Ham (Junge-Erde-Position)',
                  answer: `Das ist ein ernster theologischer Einwand, und er verdient eine sorgfältige Antwort. Römer 5,12 spricht ausdrücklich vom Tod, der „zu allen Menschen durchgedrungen" ist – es geht um den Tod des Menschen. Athanasius lehrt, der Mensch sei aus dem Nichts geschaffen und darum von Natur sterblich gewesen; nur die Gnade der Gemeinschaft mit Gott bewahrte ihn vor der Verwesung, und mit der Sünde verlor er sie. Ob Tiere vor dem Fall starben, hat die Kirche nie dogmatisch entschieden.`,
                  detail: `**Der Text:** Röm 5,12 – „wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben". Der Zusammenhang (Adam – Christus, Sünde – Gerechtigkeit) betrifft die Menschheit. Auch 1 Kor 15,21–22 spricht von Tod und Auferstehung der Menschen.

**Athanasius:** In *De Incarnatione* 4–5 beschreibt er den Menschen als von Natur vergänglich, weil aus dem Nichts geschaffen. Durch die Teilhabe am Logos hätte er seine natürliche Vergänglichkeit überwinden können; durch die Abwendung von Gott fiel er in die Verwesung zurück. Der Tod des Menschen ist also Folge der verlorenen Gnade – ein Gedanke, der nicht voraussetzt, dass es vorher in der ganzen Tierwelt keinen Tod gab.

**„Sehr gut":** Im Hebräischen (*ṭôb meʾōd*) heißt das: der Absicht Gottes vollkommen entsprechend – nicht notwendig „frei von jeder Vergänglichkeit". Ps 104,21 preist Gott dafür, dass er den jungen Löwen ihre Speise gibt.

**Fair bleiben:** Viele Väter (u. a. Basilius) dachten, die Tiere seien vor dem Fall friedlich gewesen. Das ist eine ehrwürdige Meinung, aber keine definierte Lehre. Die koptische Kirche bindet hier nicht – verbindlich sind die Realität von Adam und Eva, des Falls und der Erlösung in Christus.`,
                  voices: [
                    {
                      person: 'athanasius',
                      role: 'als Lehrer über Schöpfung, Fall und Menschwerdung',
                      text: `Athanasius erklärt, dass der Mensch, aus dem Nichts geschaffen, von Natur aus vergänglich ist. Gott gab ihm jedoch Anteil an seinem Logos, damit er in der Unvergänglichkeit bleiben könne. Als der Mensch sich von Gott abwandte, verlor er diese Gnade und verfiel der Verwesung und dem Tod. Deshalb wurde der Logos Mensch: um den Tod von innen zu überwinden und den Menschen zur Unvergänglichkeit zurückzuführen.`,
                      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '4–5', quote: `Der Mensch ist von Natur sterblich, weil er aus dem Nichts geworden ist; aber wegen seiner Ähnlichkeit mit dem Seienden hätte er, wenn er sie bewahrt hätte, die natürliche Vergänglichkeit abgewehrt und unvergänglich geblieben.`, status: 'paraphrase' }],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '5,12', quote: `Derhalben, wie durch einen Menschen die Sünde ist gekommen in die Welt und der Tod durch die Sünde, und ist also der Tod zu allen Menschen durchgedrungen, dieweil sie alle gesündigt haben.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Psalmen', ref: '104,21', quote: `Die jungen Löwen, die da brüllen nach dem Raub und ihre Speise suchen von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Von wessen Tod spricht Römer 5,12 im Zusammenhang – und wo lehrt die Schrift ausdrücklich, dass vor dem Fall kein Tier starb?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'abend-morgen-24-stunden',
      objection: `Genesis 1 sagt klar: „Da ward aus Abend und Morgen der erste Tag." Das sind 24 Stunden.`,
      objectionBy: 'Jerry Coyne',
      answer: `Eine mögliche Lesart, die Basilius und Ephräm vertraten. Aber schon Origenes fragte, wie es drei Tage mit Abend und Morgen ohne Sonne geben kann; der siebte Tag hat gar keinen Abend; und Gen 2,4 nennt die ganze Schöpfung einen „Tag". Hebräisch kundige, bibeltreue Ausleger sind sich hier nicht einig.`,
      sources: [origenesDePrinc],
      followUps: [
        {
          id: 'exodus-20-11',
          objection: `Exodus 20,11 begründet den Sabbat mit sechs Schöpfungstagen. Also müssen es echte Tage sein.`,
          objectionBy: 'Jerry Coyne',
          answer: `Gottes „Arbeitswoche" ist das Urbild der menschlichen Woche – eine Analogie, keine Zeitmessung. Auch Gottes „Ruhe" ist analog gemeint: Gott wird nicht müde (Jes 40,28). Das Gebot vergleicht unseren Rhythmus mit Gottes Werk, ohne die Dauer seines Werkes festzulegen.`,
          followUps: [
            {
              id: 'umdeutung-nach-darwin',
              objection: `Das ist doch nur eine Umdeutung, seit Darwin und die Geologie euch dazu zwingen.`,
              answer: `Nein: Origenes im 3. und Augustinus im 5. Jahrhundert lasen die Tage nicht als gewöhnliche Tage – über tausend Jahre vor der modernen Geologie, allein aus Gründen des Textes. Augustinus schrieb sogar, es sei schwer oder unmöglich zu denken, welcher Art diese Tage seien.`,
              sources: [augustinusCivDei116],
              followUps: [
                {
                  id: 'vaeter-trotzdem-junge-erde',
                  objection: `Netter Versuch. Aber Augustinus dachte an eine Schöpfung in einem einzigen Augenblick, nicht an Milliarden Jahre – und er hielt die Welt für keine 6.000 Jahre alt. Die Väter stützen deine alte Erde überhaupt nicht.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Völlig richtig, und ich sage das selbst: Die Väter lehrten keine Tiefenzeit, und die meisten hielten die Welt für jung. Mein Punkt ist ein anderer: Sie haben die *Dauer* der Schöpfungstage nicht zur Glaubensfrage gemacht und aus dem Text selbst nicht-wörtliche Deutungen begründet. Ihr Weltalter übernahmen sie aus der Chronologie ihrer Zeit – nicht aus einem Dogma. Wenn sich die Datenlage ändert, ändert sich die Zahl, nicht der Glaube.`,
                  detail: `**Was die Väter belegen – und was nicht:**
- **Belegen:** Die Schöpfungstage wurden schon früh unterschiedlich gelesen (Basilius und Ephräm eher wörtlich, Origenes und Augustinus nicht als gewöhnliche Tage), ohne dass eine Lesart verurteilt wurde. Die Kirche hat die Frage offen gehalten.
- **Nicht belegen:** Dass die Väter eine alte Erde lehrten. Augustinus rechnete mit weniger als 6.000 Jahren seit Adam (De Civ. Dei XII,10).

**Warum das trotzdem zählt:** Der Vorwurf lautete, nicht-wörtliche Deutungen seien eine Erfindung *nach* Darwin. Das ist widerlegt. Und die Väter selbst gaben eine Regel, wie mit Naturwissen umzugehen ist: Augustinus warnte, Christen sollten die Schrift nicht für naturkundliche Behauptungen in Anspruch nehmen, die sich als falsch erweisen könnten (De Genesi ad litteram I,19,39).

Dieses Zugeständnis macht dich glaubwürdig. Sag es aktiv, bevor dein Gegenüber es findet.`,
                  sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XII,10', quote: `Seit der Erschaffung des Menschen seien noch nicht ganz 6.000 Jahre vergangen.`, status: 'paraphrase' }],
                  questionsBack: [`Hat die Kirche je die Dauer der Schöpfungstage zum Glaubenssatz erklärt – oder blieb das eine offene Auslegungsfrage?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warum-dann-auferstehung',
      objection: `Wenn du die Genesis nicht wörtlich nimmst, warum dann die Auferstehung?`,
      objectionBy: 'Richard Dawkins',
      answer: `„Wörtlich" heißt: so, wie der Autor es gemeint hat. Genesis 1 ist ein kunstvoll gestalteter, feierlicher Text mit Siebener-Struktur; die Evangelien sind historische Berichte, die sich ausdrücklich auf Augenzeugen berufen (Lk 1,1–4). Jede Literatur liest man nach ihrer Gattung – das gilt für Zeitungen wie für die Bibel.`,
      followUps: [
        {
          id: 'rosinenpicken',
          objection: `Das ist willkürliches Rosinenpicken: Was dir passt, ist historisch, der Rest symbolisch.`,
          answer: `Die Kriterien sind nicht willkürlich: Gattung, Signale im Text (Sonne erst am vierten Tag), der Sprachgebrauch der Bibel selbst und die Auslegung der Väter. Und die koptische Kirche hält am historischen Kern fest: Adam und Eva sind reale Personen, der Sündenfall ist real – das Erdalter dagegen ist offen.`,
        },
      ],
    },
    {
      id: 'galilei-rueckzug',
      objection: `Christen haben schon bei Galilei nachgeben müssen. Das ist nur ein weiteres Rückzugsgefecht.`,
      objectionBy: 'Bill Nye',
      answer: `Der Fall Galilei hat die Kirche gelehrt, was Augustinus schon um 400 schrieb: Man soll die Schrift nicht für naturkundliche Behauptungen in Anspruch nehmen, die sie nicht macht. Eine korrigierte *Auslegung* ist kein Rückzug der *Schrift*.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I,19,39', status: 'paraphrase', quote: `Es ist schändlich und gefährlich, wenn ein Ungläubiger einen Christen, der sich auf die Schrift beruft, über Naturdinge Unsinn reden hört.` }],
      followUps: [
        {
          id: 'staendig-anpassen',
          objection: `Also passt ihr die Bibel ständig an die Wissenschaft an.`,
          answer: `Auslegungen sind revidierbar, der Text nicht – und die Wissenschaft revidiert sich ebenso. Übrigens bestätigte die Wissenschaft einen Kernpunkt der Genesis, den viele Gelehrte lange bestritten: dass das Universum einen Anfang hat. Der Urknall wurde von einem Priester-Physiker, Georges Lemaître, vorgeschlagen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo genau nennt die Bibel das Alter der Erde?`,
    `Wie erklärst du, dass Origenes und Augustinus die Tage schon vor über 1.500 Jahren nicht als gewöhnliche Tage lasen?`,
    `Warum fehlen in Matthäus 1,8 drei Könige, wenn Genealogien lückenlos sein sollen?`,
    `Welche Aussage der Genesis wird durch 4,5 Milliarden Jahre tatsächlich widerlegt – der Text oder eine Auslegung?`,
  ],
  avoid: [
    `„Die Wissenschaftler fälschen die Daten" – unhaltbar und beleidigend.`,
    `Christen mit Junge-Erde-Überzeugung verspotten – sie sind Geschwister im Glauben mit einer legitimen Auslegungstradition.`,
    `„Die Väter lasen alles symbolisch" – falsch; Basilius und Ephräm lasen die Tage wörtlich.`,
  ],
  concessions: [
    `Das Erdalter von etwa 4,5 Milliarden Jahren ist wissenschaftlich sehr gut abgesichert.`,
    `Die meisten Kirchenväter hielten die Welt für einige tausend Jahre alt – auch Augustinus.`,
    `Eine wörtliche 24-Stunden-Lesart ist eine alte und ehrbare Auslegung (Basilius, Ephräm).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Seven Days That Divide the World', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. John Collins', work: 'Genesis 1–4: A Linguistic, Literary, and Theological Commentary', year: '2006', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Hugh Ross', work: 'A Matter of Days', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Henri Blocher', work: 'In the Beginning: The Opening Chapters of Genesis', year: '1984', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Erdalter', 'Schöpfungstage', 'Genealogien', 'Tag-Zeitalter', 'Rahmendeutung'],
  related: ['erdalter/radiometrie-widerlegt-bibel', 'genesis/vaeter-lasen-woertlich', 'kosmologie/genesis-vs-urknall', 'kirchengeschichte-mythen/galilei'],
};

export default claim;
