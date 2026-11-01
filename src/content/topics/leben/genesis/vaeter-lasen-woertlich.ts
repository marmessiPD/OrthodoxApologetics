import type { Claim, Source } from '../../../schema.ts';

const origenesDePrinc: Source = {
  kind: 'kirchenvater',
  author: 'Origenes',
  work: 'Über die Prinzipien (De Principiis / Peri Archon)',
  ref: 'IV,3,1 (in älteren englischen Ausgaben IV,1,16)',
  quote: `Welcher Verständige wird glauben, dass der erste, zweite und dritte Tag, Abend und Morgen, ohne Sonne, Mond und Sterne existierten, der erste Tag sogar ohne Himmel?`,
  translation: 'sinngemäß nach dem Griechischen',
  status: 'paraphrase',
  note: 'Origenes ist in der koptischen Kirche nicht als Heiliger anerkannt; zitiert wird sein textliches Argument, nicht seine Lehrautorität.',
};

const augCivDei116: Source = {
  kind: 'kirchenvater',
  author: 'Augustinus von Hippo',
  work: 'De Civitate Dei',
  ref: 'XI,6',
  quote: `Welcher Art diese Tage sind, ist für uns äußerst schwer oder sogar unmöglich zu denken – wie viel mehr, es auszusprechen.`,
  original: 'Qui dies cuius modi sint, aut perdifficile nobis aut etiam impossibile est cogitare, quanto magis dicere.',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
};

const augDGaL: Source = {
  kind: 'kirchenvater',
  author: 'Augustinus von Hippo',
  work: 'Über den Wortsinn der Genesis (De Genesi ad litteram)',
  ref: 'I,19,39',
  quote: `Es ist schändlich und schädlich und unbedingt zu vermeiden, dass ein Ungläubiger einen Christen, der sich auf die Heilige Schrift beruft, über Erde, Himmel und Gestirne so unsinnig reden hört, dass er kaum das Lachen halten kann.`,
  original: 'Turpe est autem nimis et perniciosum ac maxime cavendum, ut christianum de his rebus quasi secundum christianas litteras loquentem, ita delirare quilibet infidelis audiat, ut, quemadmodum dicitur, toto caelo errare conspiciens, risum tenere vix possit.',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Galilei zitierte diese Stelle 1615 in seinem Brief an Christina von Lothringen.',
};

const basilHex91: Source = {
  kind: 'kirchenvater',
  author: 'Basilius von Caesarea',
  work: 'Hexaemeron',
  ref: '9,1',
  quote: `Für mich ist Gras Gras; Pflanze, Fisch, wildes Tier, Haustier – alles nehme ich im wörtlichen Sinn.`,
  translation: 'eigene Übersetzung nach der englischen NPNF-Ausgabe („For me grass is grass …")',
  status: 'verbatim',
  note: 'Basilius wendet sich gegen willkürliche Allegorese; zugleich nutzt er die Naturkunde seiner Zeit (Aristoteles, Stoa).',
};

const ephraemGen: Source = {
  kind: 'kirchenvater',
  author: 'Ephräm der Syrer',
  work: 'Kommentar zur Genesis (Commentarius in Genesim)',
  ref: 'I (zu Gen 1,1–5)',
  quote: `Niemand solle meinen, in den Werken der sechs Tage sei etwas allegorisch; die Namen bezeichneten das, was sie sagen, und die Tage seien wirkliche Tage.`,
  status: 'paraphrase',
  note: 'Englische Übersetzungen variieren („allegorical" bzw. „interpretive"); Ephräm vertritt eindeutig eine wörtliche Lesart.',
};

const vinzenz: Source = {
  kind: 'kirchenvater',
  author: 'Vinzenz von Lérins',
  work: 'Commonitorium',
  ref: '2,3',
  quote: `… was überall, was immer, was von allen geglaubt worden ist.`,
  original: 'quod ubique, quod semper, quod ab omnibus creditum est',
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Klassisches Kriterium des Väterkonsenses (434).',
};

const numbers2009: Source = {
  kind: 'fachliteratur',
  author: 'Ronald L. Numbers (Hg.)',
  work: 'Galileo Goes to Jail and Other Myths about Science and Religion (Harvard University Press)',
  year: '2009',
  quote: `Wissenschaftshistoriker widerlegen populäre Mythen, u. a. dass die mittelalterliche Kirche an eine flache Erde geglaubt habe.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'vaeter-lasen-woertlich',
  title: `„Die Kirchenväter lasen die Genesis wörtlich – heute wissen wir es besser."`,
  proponents: [
    { name: 'Andrew Dickson White', role: 'Historiker, Gründungspräsident der Cornell University (1832–1918)', work: 'A History of the Warfare of Science with Theology in Christendom (1896)' },
    { name: 'Jerry Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Faith vs. Fact (2015)' },
    { name: 'Terry Mortenson', role: 'Junge-Erde-Vertreter (Answers in Genesis) – mit umgekehrter Folgerung', work: 'The Great Turning Point (2004)' },
  ],
  steelman: `Die Kirchenväter waren sich weitgehend einig: Die Welt ist einige tausend Jahre alt (nach der Septuaginta etwa 5.500 Jahre vor Christus erschaffen), Adam war der erste Mensch, die Flut bedeckte die ganze Erde. Basilius, Ephräm und Johannes Chrysostomus verstanden die sechs Tage als echte Tage. Ihr Weltbild war geozentrisch, sie glaubten an Urzeugung, und einige lehnten sogar die Existenz von Menschen auf der anderen Seite der Erde ab. Die moderne Wissenschaft hat all das widerlegt. Wenn Christen die Genesis heute „symbolisch" lesen, ist das eine nachträgliche Anpassung unter dem Druck der Geologie und Biologie. Entweder man hält an der Lesart der Väter fest und stellt sich gegen die Wissenschaft – oder man gibt zu, dass die Kirche die Bibel 1.800 Jahre lang missverstanden hat. Interessanterweise ziehen Junge-Erde-Kreationisten aus demselben Befund den umgekehrten Schluss: Weil die Väter wörtlich lasen, müsse man es auch heute.`,
  biblical: {
    summary: `Schon das Neue Testament liest das Alte Testament auf mehreren Ebenen: Paulus deutet Sara und Hagar auf zwei Bünde („Die Worte bedeuten etwas", Gal 4,24), der Fels in der Wüste „war Christus" (1 Kor 10,4), der Hebräerbrief deutet Gottes Sabbatruhe als bleibende Ruhe, in die die Gläubigen eingehen (Hebr 4,4–10), und Johannes liest „Am Anfang" christologisch (Joh 1,1–3). Die Väter folgten diesem Vorbild: wörtlicher und geistlicher Sinn zusammen. Eine Lesart, die nach dem Ziel und der Gattung eines Textes fragt, ist also keine moderne Erfindung, sondern apostolisches Erbe.`,
    sources: [
      { kind: 'bibel', work: 'Galater', ref: '4,24', quote: `Die Worte bedeuten etwas. Denn das sind die zwei Testamente: …`, original: 'ἅτινά ἐστιν ἀλληγορούμενα', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '10,4', quote: `… sie tranken aber von dem geistlichen Fels, der mitfolgte, welcher war Christus.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '1,1–3', quote: `Im Anfang war das Wort, und das Wort war bei Gott, und Gott war das Wort. … Alle Dinge sind durch dasselbe gemacht, und ohne dasselbe ist nichts gemacht, was gemacht ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,4–10', quote: `Gottes Ruhe am siebenten Tag wird als eine noch offenstehende Ruhe gedeutet, in die das Volk Gottes eingehen soll.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche steht in der **alexandrinischen Auslegungstradition**, die wörtlichen und geistlichen Sinn zusammenhält. Ein Konsens der Väter besteht in dem, was den Glauben betrifft: Gott schuf alles aus dem Nichts; der Mensch ist nach Gottes Bild geschaffen; Adam und Eva sind reale Personen; der Sündenfall ist real. Über die Länge der Schöpfungstage gab es **keinen** Konsens: Basilius und Ephräm lasen wörtlich, Clemens, Origenes und Augustinus nicht als gewöhnliche Tage. Chronologien (etwa das Weltalter) übernahmen die Väter aus der Gelehrsamkeit ihrer Zeit; sie wurden nie zum Dogma erhoben.`,
    sources: [origenesDePrinc, augCivDei116, basilHex91, ephraemGen, vinzenz,
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Civitate Dei', ref: 'XII,10', quote: `Seit der Erschaffung des Menschen seien noch nicht ganz 6.000 Jahre vergangen.`, status: 'paraphrase', note: 'Ehrliches Zugeständnis: Augustinus las die Tage nicht wörtlich, hielt die Welt aber für jung.' },
    ],
  },
  opposingView: {
    summary: `Wissenschaftshistoriker haben die „Kriegsthese" von Draper (1874) und White (1896), nach der Kirche und Wissenschaft seit jeher im Krieg lagen, weitgehend verworfen (Numbers 2009; Lindberg & Numbers). Die meisten gebildeten Christen des Altertums und Mittelalters wussten, dass die Erde eine Kugel ist; Laktanz und Kosmas Indikopleustes waren Ausnahmen. Zutreffend ist: Viele Väter hielten die Welt für einige tausend Jahre alt, mehrere lasen die Tage als 24-Stunden-Tage, und sie teilten die Naturkunde ihrer Zeit (Urzeugung, vier Elemente, Geozentrik). Zugleich gab es von Anfang an nicht-wörtliche Deutungen der Tage – Philon, Clemens, Origenes, Augustinus –, lange vor jeder modernen Wissenschaft.`,
    sources: [numbers2009,
      { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth: Columbus and Modern Historians', year: '1991', status: 'paraphrase' },
      { kind: 'gegner', author: 'Andrew Dickson White', work: 'A History of the Warfare of Science with Theology in Christendom', year: '1896', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Väter lasen die Genesis nicht einheitlich wörtlich: Origenes und Augustinus hielten die Schöpfungstage schon vor über 1.500 Jahren nicht für gewöhnliche Tage, Basilius und Ephräm dagegen schon. Einig waren sie in dem, was zählt: Gott schuf alles aus dem Nichts, der Mensch ist sein Bild, der Sündenfall ist real. Und Augustinus warnte ausdrücklich davor, die Bibel mit falschen Behauptungen über die Natur zu blamieren. Wer heute alexandrinisch – wörtlich und geistlich – liest, setzt die Tradition fort, statt vor der Wissenschaft zu kapitulieren.`,
  keyPoints: [
    `**Keine Einheitslinie:** Basilius und Ephräm lasen die Tage wörtlich; Clemens, Origenes und Augustinus nicht als gewöhnliche Tage.`,
    `**Vor jeder Geologie:** Die nicht-wörtlichen Deutungen stammen aus dem 2.–5. Jahrhundert und beruhen auf dem Text selbst (Licht vor der Sonne).`,
    `**Konsens im Glauben:** Schöpfung aus dem Nichts, Gottebenbildlichkeit, reale Stammeltern, realer Fall – das ist Väterkonsens (Vinzenz: „überall, immer, von allen").`,
    `**Ehrliches Zugeständnis:** Die meisten Väter, auch Augustinus, hielten die Welt für jung und teilten die Naturkunde ihrer Zeit.`,
    `**Augustinus' Regel:** Christen sollen die Schrift nicht durch unhaltbare Naturbehauptungen lächerlich machen (DGaL I,19,39).`,
    `**Mythos flache Erde:** Die Kriegsthese ist von Historikern widerlegt; die meisten Väter kannten die Kugelgestalt der Erde.`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als Bibelwissenschaftler der Schule von Alexandrien',
      text: `Origenes stellte im 3. Jahrhundert die Frage, wie es drei Tage mit Abend und Morgen ohne Sonne, Mond und Sterne geben könne. Für ihn war das ein Signal im Text selbst, dass die Erzählung über eine bloße Chronik hinausweist und einen tieferen Sinn trägt. Zugleich hielt Origenes an der Geschichtlichkeit vieler biblischer Ereignisse fest und verteidigte etwa die Arche gegen den Spott des Kelsos. Seine Methode ist kein Ausweichen vor der Wissenschaft – die es in heutiger Form nicht gab –, sondern genaue Lektüre.`,
      sources: [origenesDePrinc, { kind: 'kirchenvater', author: 'Origenes', work: 'Contra Celsum', ref: 'IV,41', status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Ausleger der Genesis',
      text: `Augustinus wollte ausdrücklich den *Wortsinn* der Genesis ermitteln (*De Genesi ad litteram*) – und kam gerade dabei zu dem Ergebnis, dass Gott alles zugleich geschaffen habe und die sechs Tage eine Ordnung der Erkenntnis, keine Abfolge von Sonnentagen seien. In *De Civitate Dei* XI,6 gesteht er, es sei schwer oder unmöglich zu denken, welcher Art diese Tage seien. Seine Mahnung, Christen sollten sich vor Ungläubigen nicht mit unhaltbaren Behauptungen über die Natur lächerlich machen, ist bis heute ein Grundsatz. Ehrlich bleibt: Er hielt die Welt für jünger als 6.000 Jahre. Als westlicher Vater ist er für Apologetik und Philosophie wertvoll, nicht aber in Fragen, in denen seine Akzente von der orthodoxen Lehre abweichen.`,
      sources: [augCivDei116, augDGaL, { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'IV,33,52', quote: `Gott habe alles zugleich geschaffen; die Tage bezeichnen eine Ordnung, nicht eine zeitliche Abfolge.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger des Sechstagewerks',
      text: `Basilius ist der Kronzeuge der wörtlichen Lesart: „Für mich ist Gras Gras", schreibt er gegen Ausleger, die jede Pflanze und jedes Tier allegorisch deuteten. Er betont auch, dass „ein Tag" die Dauer von Tag und Nacht umfasse. Zugleich sieht man an seinen Predigten, dass er die beste Naturkunde seiner Zeit (Aristoteles, Stoa) verwendete, um Gottes Weisheit zu preisen. Sein Anliegen war, die Schrift nicht in beliebige Bilder aufzulösen – nicht, eine Chronologie zum Glaubenssatz zu machen.`,
      sources: [basilHex91, { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Hexaemeron', ref: '2,8', quote: `„Ein Tag" umfasst die Zeit von Tag und Nacht, also vierundzwanzig Stunden.`, status: 'paraphrase' }],
    },
    {
      person: 'ephraem',
      role: 'als syrischer Ausleger',
      text: `Ephräm der Syrer las die sechs Tage ausdrücklich wörtlich: Niemand solle meinen, in den Werken der sechs Tage sei etwas allegorisch. Das ist ehrlich festzuhalten – die wörtliche Lesart hat ehrwürdige Vertreter in der ungeteilten Kirche. Zugleich zeigt Ephräms übriges Werk, besonders seine Paradies-Hymnen, eine überreiche geistliche und symbolische Deutung derselben Texte. Wörtlich und geistlich schlossen sich für ihn nicht aus.`,
      sources: [ephraemGen, { kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Hymnen über das Paradies', status: 'paraphrase', quote: `Symbolisch-poetische Ausdeutung des Paradieses und des Baumes des Lebens.` }],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Leiter der Katechetenschule von Alexandrien',
      text: `Clemens von Alexandrien, der Lehrer des Origenes, verstand die sechs Tage nicht als Zeitmaß, sondern als Ausdruck einer Ordnung: Die Schöpfung könne nicht „in der Zeit" geschehen sein, da die Zeit mit den Dingen selbst entstand. Die Zahl Sechs zeige die Vollkommenheit und Rangfolge des Geschaffenen. Damit steht schon am Anfang der alexandrinischen Schule eine nicht-chronologische Deutung – rund 1.600 Jahre vor Darwin.`,
      sources: [{ kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromata)', ref: 'VI,16', quote: `Die Schöpfung geschah nicht in der Zeit, denn die Zeit entstand mit den Dingen; die sechs Tage zeigen eine Ordnung an.`, status: 'paraphrase' }],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Ausleger der Genesis (Glaphyra)',
      text: `Kyrill von Alexandrien legte in seinen *Glaphyra* (eleganten Auslegungen) zum Pentateuch die Erzählungen der Genesis als geschichtliche Ereignisse aus, in denen zugleich das Geheimnis Christi vorgebildet ist. Diese typologische Lesart ist für die koptische Kirche maßgeblich: Sie nimmt die Geschichte ernst und fragt zugleich, worauf sie hinweist. Wer Genesis heute nur als naturkundlichen Bericht liest, verfehlt das, was Kyrill für ihren eigentlichen Reichtum hielt.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra in Genesim', status: 'paraphrase', quote: `Christologisch-typologische Auslegung der Genesis-Erzählungen auf der Grundlage ihres geschichtlichen Sinnes.` }],
    },
  ],
  dialog: [
    {
      id: 'tradition-woertlich',
      objection: `Basilius, Ephräm und Chrysostomus lasen die Tage als 24 Stunden. Die Tradition ist wörtlich – wer anders liest, verlässt die Väter.`,
      objectionBy: 'Terry Mortenson',
      answer: `Für einige Väter stimmt das – das gebe ich offen zu. Aber Clemens, Origenes und Augustinus lasen die Tage nicht als gewöhnliche Tage. Die Kirche hat die Länge der Tage nie zum Dogma gemacht. Väterkonsens gibt es im Glauben: Schöpfung aus dem Nichts, der Mensch als Bild Gottes, Adam und Eva, der Sündenfall.`,
      sources: [basilHex91, origenesDePrinc],
      followUps: [
        {
          id: 'augustinus-junge-welt',
          objection: `Selbst Augustinus hielt die Welt für weniger als 6.000 Jahre alt.`,
          objectionBy: 'Jerry Coyne',
          answer: `Richtig – das steht in *De Civitate Dei* XII,10. Die Väter übernahmen die beste Chronologie ihrer Zeit. Weitergegeben als Glaubensgut haben sie aber nicht eine Jahreszahl, sondern die Schöpfung aus dem Nichts. Augustinus selbst trennte das: Er warnte davor, Naturfragen mit Berufung auf die Schrift falsch zu entscheiden.`,
          sources: [augDGaL],
          followUps: [
            {
              id: 'waehlst-aus',
              objection: `Dann wählst du dir einfach aus, wann die Väter verbindlich sind.`,
              answer: `Nein, das Kriterium ist alt: Vinzenz von Lérins nannte im Jahr 434 als Maßstab, was „überall, immer und von allen" geglaubt wurde. Die Länge der Schöpfungstage besteht diesen Test nicht – die Väter waren uneins. Die Schöpfung aus dem Nichts besteht ihn.`,
              sources: [vinzenz],
              followUps: [
                {
                  id: 'junge-erde-besteht-vinzenz',
                  objection: `Dann wende Vinzenz konsequent an: Die Länge der Tage war umstritten, gut. Aber dass die Welt nur einige tausend Jahre alt ist, glaubten praktisch alle Väter – überall, immer, von allen. Nach deinem eigenen Kriterium gehört die junge Erde zum Väterkonsens.`,
                  objectionBy: 'Terry Mortenson',
                  answer: `Ein scharfer Einwand – aber Vinzenz spricht von dem, was als *Glaube* überliefert wurde, nicht von allem, was die Väter gemeinsam *annahmen*. Sonst wären auch das geozentrische Weltbild und die vier Elemente Dogma, denn auch die teilten fast alle. Das Weltalter war für die Väter eine Frage der Chronologie, über die sie sogar untereinander rechneten und stritten – die Septuaginta ergab andere Zahlen als der hebräische Text. Kein Konzil und kein Glaubensbekenntnis hat je ein Weltalter festgelegt.`,
                  detail: `**Glaube vs. gemeinsame Annahme:** Das Commonitorium des Vinzenz will die *katholische (allgemeine) Glaubenslehre* von Irrlehren unterscheiden. Es ist kein Instrument, um jedes gemeinsame Wissen einer Epoche zu kanonisieren. Sonst müsste man auch die antike Kosmologie, die Lehre von den vier Elementen oder die Urzeugung zum Glaubensgut zählen.

**Uneinigkeit in der Chronologie:** Die Väter verwendeten verschiedene Zeitrechnungen. Nach der Septuaginta lag die Schöpfung etwa 5.500 Jahre vor Christus (so u. a. in der byzantinischen Weltära 5509 v. Chr.); andere Rechnungen kamen zu anderen Zahlen. Schon das zeigt, dass es sich um gelehrte Berechnung, nicht um eine überlieferte Glaubensaussage handelte.

**Was die Bekenntnisse sagen:** Das Nizäno-Konstantinopolitanum bekennt Gott als „Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren" – und schweigt über das Wann. Die koptische Kirche folgt dem: Die Schöpfung ist Dogma, das Weltalter nicht.

**Respekt:** Junge-Erde-Christen haben das Recht, die Chronologie der Väter für richtig zu halten. Sie haben nur nicht das Recht, sie anderen als Glaubenssatz aufzuerlegen.`,
                  sources: [
                    vinzenz,
                    { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', ref: '381', quote: `Wir glauben an den einen Gott, den Vater, den Allmächtigen, Schöpfer des Himmels und der Erde, alles Sichtbaren und Unsichtbaren.`, original: 'ποιητὴν οὐρανοῦ καὶ γῆς, ὁρατῶν τε πάντων καὶ ἀοράτων', status: 'verbatim' },
                  ],
                  questionsBack: [`Wenn alles, was fast alle Väter annahmen, zum Glauben gehörte – müssten dann nicht auch das geozentrische Weltbild und die vier Elemente Dogma sein?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'neuplatonismus',
      objection: `Augustins nicht-wörtliche Deutung war Neuplatonismus, keine Exegese. Er hat Philosophie in die Bibel gelesen.`,
      objectionBy: 'Jerry Coyne',
      answer: `Augustinus nannte sein Werk ausdrücklich „über den Wortsinn" – er suchte den buchstäblichen Sinn und kam aus Gründen des Textes (Licht vor der Sonne, ein Tag ohne Abend) zu seinem Ergebnis. Origenes hatte dieselbe Beobachtung schon 150 Jahre früher gemacht. Philosophisch gebildet waren sie – aber das Argument steht im Text.`,
      sources: [augCivDei116],
      followUps: [
        {
          id: 'origenes-verurteilt',
          objection: `Origenes wurde später verurteilt – kein guter Zeuge.`,
          answer: `Einige spekulative Lehren des Origenes wurden verworfen, und die koptische Kirche verehrt ihn nicht als Heiligen – das sage ich offen. Hier zitiere ich nur seine textliche Beobachtung zur Sonne am vierten Tag, die Augustinus unabhängig teilte. Ein Argument gilt nicht weniger, weil sein Urheber auch Fehler hatte.`,
          followUps: [
            {
              id: 'basilius-gegen-allegorie',
              objection: `Aber Basilius warf den Allegoristen gerade vor, die Schrift zu verdrehen.`,
              answer: `Ja – er wandte sich gegen willkürliche Allegorese, die jede Pflanze zum Symbol macht („Für mich ist Gras Gras"). Das ist berechtigt. Die alexandrinische Tradition, in der die koptische Kirche steht, hebt den wörtlichen Sinn nicht auf, sondern hält ihn mit dem geistlichen zusammen. Basilius selbst verwendete übrigens die Naturkunde seiner Zeit, um die Schrift zu erklären.`,
              sources: [basilHex91],
              voices: [
                {
                  person: 'tadros-malaty',
                  role: 'als koptischer Patristiker',
                  text: `Tadros Malaty beschreibt die Schule von Alexandrien als Auslegungstradition, die den geschichtlichen Sinn der Schrift ernst nimmt und zugleich nach ihrem geistlichen, auf Christus bezogenen Sinn fragt. Wörtlich und geistlich sind für sie zwei Stufen desselben Verstehens, nicht Gegensätze.`,
                  sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The School of Alexandria', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'geistlicher-sinn-vorkritisch',
                  objection: `Der „geistliche Sinn" der Alexandriner ist eine vorkritische Methode. Die historisch-kritische Exegese hat gezeigt, was die Texte ursprünglich bedeuteten – und Christus in Genesis hineinzulesen, ist schlicht ein Anachronismus.`,
                  objectionBy: 'Peter Enns',
                  answer: `Die historische Frage nach dem ursprünglichen Sinn ist wertvoll – auch die Kirche sucht den Wortsinn, wie Augustinus' Titel „über den Wortsinn" zeigt. Aber der christologische Sinn ist nicht später hinzuerfunden: Schon das Neue Testament liest Genesis auf Christus hin – Johannes beginnt mit „Im Anfang war das Wort", Paulus nennt Christus den „letzten Adam" (1 Kor 15,45). Für Christen bilden die Schriften einen Kanon mit einer Mitte. Wer Genesis als Teil dieser Bibel liest, liest sie mit ihrem Ziel.`,
                  detail: `**Zwei Ebenen, kein Gegensatz:**
- **Ursprünglicher Sinn:** Was bedeutete der Text für seine ersten Hörer? Hier leistet die historische Forschung viel, und die Väter fragten ähnlich – Origenes war der größte Textkritiker seiner Zeit (Hexapla), Kyrill legte die Geschichte stets zuerst wörtlich aus.
- **Kanonischer und christologischer Sinn:** Was bedeutet der Text als Teil der ganzen Schrift, deren Mitte Christus ist? Diese Frage stellt schon das Neue Testament (Lk 24,27: „er fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren").

**Enns selbst** sieht übrigens im apostolischen Umgang mit dem Alten Testament (in *Inspiration and Incarnation*) ein Vorbild dafür, die Schrift christologisch zu lesen – er betont nur, dass das eine andere Lesart ist als die historische.

**Koptisch:** Die Kirche liest die Schrift in der Liturgie. Wenn in der Osternacht und zu den Festen Genesis gelesen wird, steht sie neben dem Evangelium – die Kirche hört das Alte im Licht des Neuen.`,
                  voices: [
                    {
                      person: 'kyrill-alexandrien',
                      role: 'als Ausleger der Genesis (Glaphyra)',
                      text: `Kyrill legt in den *Glaphyra* die Erzählungen der Genesis zuerst als wirkliche Geschichte aus und zeigt dann, wie sie auf das Geheimnis Christi vorausweisen. Für ihn ist das keine Willkür, sondern folgt aus der Einheit der Schrift, deren Urheber derselbe Geist ist: Das Gesetz ist ein Schatten des Kommenden, und Christus ist sein Ziel.`,
                      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra in Genesim', status: 'paraphrase', quote: `Die Erzählungen der Genesis sind wirkliche Geschichte und zugleich Vorausbilder des Geheimnisses Christi.` }],
                    },
                  ],
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,45', quote: `Wie es geschrieben steht: Der erste Mensch, Adam, „ward zu einer lebendigen Seele", und der letzte Adam zum Geist, der da lebendig macht.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Lukas', ref: '24,27', quote: `Und fing an von Mose und allen Propheten und legte ihnen alle Schriften aus, die von ihm gesagt waren.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Ist es ein Anachronismus, wenn das Neue Testament selbst Genesis auf Christus hin liest – oder gehört diese Lesart zum Kanon, den Christen bekennen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'flache-erde-urzeugung',
      objection: `Die Väter glaubten an eine flache Erde und an Urzeugung. Ihr Weltbild ist überholt.`,
      objectionBy: 'Andrew Dickson White',
      answer: `Die flache Erde ist ein Mythos des 19. Jahrhunderts: Die meisten gebildeten Christen kannten die Kugelgestalt; Laktanz und Kosmas Indikopleustes waren Ausnahmen. Die Urzeugung dagegen teilten viele Väter mit der antiken Naturkunde – das gebe ich zu. Genau deshalb trennte Augustinus die Botschaft der Schrift von der Naturphilosophie.`,
      sources: [numbers2009],
      followUps: [
        {
          id: 'warum-vertrauen',
          objection: `Wenn sie sich in der Naturkunde irrten, warum sollte man ihnen in der Theologie trauen?`,
          answer: `Ihre Autorität liegt in der treuen Weitergabe des apostolischen Glaubens, geprüft auf den Konzilien von Nizäa, Konstantinopel und Ephesus – nicht in der Naturwissenschaft. Man vertraut einem Arzt in der Medizin, auch wenn er in Astronomie irrt.`,
          followUps: [
            {
              id: 'adam-genetik-enns',
              objection: `Aber gerade euer „realer Adam" hängt an antikem Wissen. Die Populationsgenetik zeigt, dass die Menschheit nie auf ein einziges Paar zurückging – die Population war immer mindestens einige tausend Individuen groß. Hier ist die Theologie der Väter direkt von der Wissenschaft überholt.`,
              objectionBy: 'Peter Enns',
              answer: `Hier muss man genau unterscheiden: Die Populationsgenetik misst die genetische Vielfalt, also wie viele Menschen zu unserem Erbgut beigetragen haben – nicht, wer unsere genealogischen Vorfahren sind. Der Genetiker Joshua Swamidass hat gezeigt, dass ein von Gott geschaffenes Paar vor einigen tausend Jahren Vorfahre aller heute lebenden Menschen sein kann, ohne den genetischen Daten zu widersprechen. Andere, etwa William Lane Craig, setzen Adam viel früher an. Das sind Vorschläge, kein Dogma – aber sie zeigen: „Wissenschaftlich unmöglich" ist zu viel gesagt.`,
              detail: `**Enns' Position:** In *The Evolution of Adam* (2012) argumentiert Enns, Genesis und Paulus seien in ihrem antiken Kontext zu lesen; ein historischer erster Mensch sei mit der Genetik nicht vereinbar, Paulus' Adam sei eine Gestalt seines jüdischen Denkens.

**Genetische vs. genealogische Abstammung:** Weil jeder Mensch zwei Eltern, vier Großeltern usw. hat, wachsen genealogische Stammbäume extrem schnell zusammen. Schon wenige tausend Jahre zurück sind Menschen, die überhaupt Nachkommen haben, oft Vorfahren *aller* heute Lebenden – obwohl sie zu unserem Erbgut kaum noch etwas beigetragen haben. Swamidass (*The Genealogical Adam and Eve*, 2019) baut darauf ein Modell, in dem Adam und Eva real und Stammeltern aller Menschen sind.

**Andere Modelle:** William Lane Craig (*In Quest of the Historical Adam*, 2021) setzt Adam und Eva als Stammpaar vor mehreren hunderttausend Jahren an, in einer Zeit, in der genetische Engpässe schwer auszuschließen sind.

**Koptisch:** Die Kirche bindet sich an kein naturwissenschaftliches Modell. Verbindlich ist: Adam und Eva sind reale Personen, der Fall ist real, alle Menschen bedürfen der Erlösung in Christus. Modelle sind daran zu messen, ob sie das wahren. Ausführlich im Themenblock Genetik.`,
              voices: [
                {
                  person: 'joshua-swamidass',
                  role: 'als Genetiker und Computerbiologe',
                  text: `Swamidass zeigt mit genealogischen Simulationen, dass die genetischen Befunde (große Populationsgröße, gemeinsame Abstammung mit anderen Primaten) mit einem realen Paar vereinbar sind, das vor einigen tausend Jahren lebte und genealogischer Vorfahre aller Menschen wurde. Er betont, dass sein Modell keine Glaubenslehre ersetzen, sondern einen Konflikt auflösen soll, der auf einer Verwechslung von Genetik und Genealogie beruht.`,
                  sources: [{ kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry', year: '2019', status: 'paraphrase' }],
                },
              ],
              sources: [
                { kind: 'gegner', author: 'Peter Enns', work: 'The Evolution of Adam: What the Bible Does and Doesn\'t Say about Human Origins', year: '2012', quote: `Enns argumentiert, ein historischer erster Mensch sei mit der Genetik nicht vereinbar; Paulus' Adam sei im Rahmen seines antiken jüdischen Denkens zu verstehen.`, status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'William Lane Craig', work: 'In Quest of the Historical Adam: A Biblical and Scientific Exploration', year: '2021', status: 'paraphrase' },
              ],
              questionsBack: [`Misst die Populationsgenetik, wer unsere genealogischen Vorfahren sind – oder nur, wie viele Menschen zu unserem Erbgut beigetragen haben?`],
              followUps: [
                {
                  id: 'menschen-ausserhalb-des-gartens',
                  objection: `Swamidass' Modell braucht Menschen außerhalb des Gartens, die nicht von Adam abstammen. Das widerspricht doch Apostelgeschichte 17,26 – „aus einem Blut" – und der ganzen Vorstellung, dass Adam der erste Mensch war.`,
                  objectionBy: 'Dan McClellan',
                  answer: `Das ist die ernsteste Anfrage an das Modell, und ich verteidige es nicht als Kirchenlehre. Aber Apg 17,26 ist im genealogischen Modell erfüllt: Alle heute lebenden Menschen stammen von Adam ab. Und schon die Genesis selbst wirft die Frage auf, wer Kains Frau war und vor wem er sich fürchtete (Gen 4,14–17) – die Väter antworteten meist mit Geschwisterehen. Die Kirche hat hier Spielraum; festgehalten wird, dass alle Menschen an Adams Erbe teilhaben und der Erlösung in Christus bedürfen.`,
                  detail: `**Was das Modell behauptet:** Adam und Eva wurden von Gott geschaffen und in den Garten gesetzt; ihre Nachkommen vermischten sich später mit Menschen außerhalb, sodass schließlich alle Menschen von ihnen abstammen. Ob man diese anderen Menschen theologisch als „Menschen im vollen Sinn" (mit Gottebenbildlichkeit) betrachtet, ist eine offene Frage, die Swamidass selbst bewusst offen lässt.

**Kritik ernst nehmen:** Viele Theologen, auch orthodoxe, sehen das Modell kritisch, weil es die Einzigartigkeit Adams als des ersten Menschen schwächen könnte. Diese Kritik ist legitim.

**Die Grenze für einen koptischen Christen:** Ein Modell ist dann annehmbar, wenn es wahrt, dass (1) Adam und Eva reale Personen sind, (2) der Fall ein reales Ereignis ist, (3) alle Menschen dessen Folgen erben und (4) alle in Christus Erlösung finden. Über naturwissenschaftliche Details hat die Kirche nicht entschieden – deshalb darfst du solche Modelle als Möglichkeiten nennen, nicht als Lehre.`,
                  sources: [
                    { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', quote: `Und hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Genesis', ref: '4,14', quote: `… so wird mir's gehen, daß mich totschlage, wer mich findet.`, translation: 'Luther 1912', status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn alle heute lebenden Menschen genealogisch von Adam abstammen – in welchem Sinn wäre Apg 17,26 dann nicht erfüllt?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'symbolisch-rueckzug',
      objection: `Heute deutet ihr alles symbolisch, weil die Wissenschaft euch dazu zwingt. Das ist ein Rückzug.`,
      objectionBy: 'Jerry Coyne',
      answer: `Die mehrfache Schriftdeutung ist älter als jede Wissenschaft – sie steht schon im Neuen Testament (Gal 4,24; 1 Kor 10,4) und prägte Alexandrien seit Clemens. Und die koptische Kirche hält am geschichtlichen Kern fest: Adam und Eva sind reale Personen, der Sündenfall ist real. Offen ist das Erdalter, nicht der Glaube.`,
      followUps: [
        {
          id: 'adam-real-tage-nicht',
          objection: `Adam real, aber die Tage nicht wörtlich – das ist inkonsequent.`,
          answer: `Nicht, wenn man nach der Gattung fragt: Genesis 1 ist ein feierlich gegliederter Text (Tage 1–3 bereiten Räume, Tage 4–6 füllen sie); ab Gen 2,4 folgen Erzählungen mit Toledot-Überschriften wie in der Patriarchengeschichte. Das Neue Testament behandelt Adam als geschichtliche Person (Röm 5,12–14; Lk 3,38). Mehr dazu im Themenblock Genetik.`,
          sources: [{ kind: 'bibel', work: 'Römer', ref: '5,14', quote: `Doch herrschte der Tod von Adam an bis auf Mose auch über die, die nicht gesündigt haben mit gleicher Übertretung wie Adam, welcher ist ein Bild des, der zukünftig war.`, translation: 'Luther 1912', status: 'paraphrase' }],
          followUps: [
            {
              id: 'paulus-adam-literarisch',
              objection: `Paulus behandelt Adam so, wie ein Jude seiner Zeit es eben tat – so wie man über Jona spricht. Sein Argument über Sünde und Gnade funktioniert auch, wenn Adam eine literarische Gestalt ist. Ihr hängt euer Heil unnötig an eine historische Behauptung.`,
              objectionBy: 'Peter Enns',
              answer: `Paulus' Parallele lebt gerade von zwei wirklichen Taten: „Wie nun durch eines Menschen Ungehorsam viele Sünder geworden sind, so werden auch durch eines Gehorsam viele Gerechte" (Röm 5,19). Christi Gehorsam am Kreuz ist ein geschichtliches Ereignis; wird Adams Ungehorsam zur bloßen Erzählung, verliert der Vergleich seine Hälfte. Die Väter – Irenäus mit seiner „Rekapitulation", Athanasius mit seiner Lehre von Fall und Menschwerdung – haben ihre ganze Heilslehre auf diese Entsprechung gebaut.`,
              detail: `**Römer 5,12–19:** Paulus vergleicht zweimal „einen Menschen" mit „einem Menschen", eine Übertretung mit einer gerechten Tat. Das ist mehr als eine Illustration: Er erklärt, wie die Lage der Menschheit (Tod, Sünde) entstanden ist und wie sie in Christus überwunden wird.

**Irenäus' Rekapitulation:** Christus „fasst in sich zusammen" (*recapitulatio*), was in Adam verloren ging; er durchläuft das menschliche Leben, um es von innen zu heilen. Der Ungehorsam an einem Baum wird durch den Gehorsam am Holz des Kreuzes aufgehoben (Adv. Haer. V,19,1; vgl. III,18,1). Diese Theologie setzt einen realen Anfang voraus.

**Athanasius:** In *De Incarnatione* beschreibt er, wie der Mensch durch die Abwendung von Gott in die Verwesung fiel und der Logos Mensch wurde, um ihn zu erneuern – eine Geschichte von Fall und Wiederherstellung.

**Koptisch:** Die Kirche bekennt Adam und Eva als reale Personen und den Fall als reales Ereignis. Das ist kein Detail, sondern Teil des Heilsverständnisses, das Papst Schenuda III. in *Das Heil im orthodoxen Verständnis* entfaltet.`,
              voices: [
                {
                  person: 'irenaeus',
                  role: 'als Theologe der Rekapitulation',
                  text: `Irenäus lehrt, dass der Sohn Gottes, als er Mensch wurde, die lange Geschichte der Menschheit in sich „rekapitulierte", damit wir, was wir in Adam verloren hatten – Bild und Gleichnis Gottes –, in Christus wiedererlangen. Wie durch den Ungehorsam eines Menschen viele zu Sündern wurden, so wurden durch den Gehorsam eines Menschen viele gerecht. Für Irenäus ist die Entsprechung zwischen Adam und Christus das Rückgrat der Heilsgeschichte.`,
                  sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,18,1; V,19,1', quote: `Christus hat die lange Reihe der Menschen in sich zusammengefasst, damit wir, was wir in Adam verloren hatten, in Christus wiedererlangen.`, status: 'paraphrase' }],
                },
              ],
              sources: [{ kind: 'bibel', work: 'Römer', ref: '5,19', quote: `Denn gleichwie durch eines Menschen Ungehorsam viele Sünder geworden sind, also auch durch eines Gehorsam werden viele Gerechte.`, translation: 'Luther 1912', status: 'verbatim' }],
              questionsBack: [`Wenn Christi Gehorsam eine geschichtliche Tat ist – was wird aus Paulus' Vergleich, wenn Adams Ungehorsam keine war?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du, dass Origenes und Augustinus die Tage schon vor über 1.500 Jahren nicht wörtlich lasen?`,
    `Welche Lehre der Väter war „überall, immer, von allen" geglaubt – die Länge der Tage oder die Schöpfung aus dem Nichts?`,
    `Woher stammt die Behauptung, die mittelalterliche Kirche habe an eine flache Erde geglaubt?`,
    `Warum schrieb Augustinus ein Buch „über den Wortsinn" und kam trotzdem zu einer nicht-chronologischen Deutung?`,
  ],
  avoid: [
    `„Alle Väter lasen symbolisch" – falsch; Basilius und Ephräm lasen wörtlich.`,
    `„Augustinus hätte die Evolution akzeptiert" – anachronistisch; er hielt die Welt für jung.`,
    `Origenes als Lehrautorität der koptischen Kirche darstellen.`,
  ],
  concessions: [
    `Die meisten Väter hielten die Welt für einige tausend Jahre alt.`,
    `Mehrere bedeutende Väter (Basilius, Ephräm) lasen die Schöpfungstage wörtlich.`,
    `Die Väter teilten Teile der antiken Naturkunde, etwa die Urzeugung.`,
  ],
  furtherReading: [
    augDGaL,
    { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The School of Alexandria', status: 'paraphrase' },
    numbers2009,
    { kind: 'fachliteratur', author: 'Peter C. Bouteneff', work: 'Beginnings: Ancient Christian Readings of the Biblical Creation Narratives', year: '2008', status: 'paraphrase', note: 'Orthodoxer Theologe; Überblick über die patristische Auslegung von Gen 1–3.' },
  ],
  difficulty: 2,
  tags: ['Kirchenväter', 'Genesis-Auslegung', 'Alexandrinische Schule', 'Augustinus', 'Basilius'],
  related: ['erdalter/erde-alt-bibel-widerlegt', 'genesis/genesis-1-und-2-widerspruch', 'kirchengeschichte-mythen/finsteres-mittelalter-flache-erde', 'genetik/adam-eva-genetisch-unmoeglich'],
};

export default claim;
