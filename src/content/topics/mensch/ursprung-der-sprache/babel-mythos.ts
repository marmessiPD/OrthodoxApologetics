import type { Claim, Source } from '../../../schema.ts';

const gunkel1901: Source = {
  kind: 'gegner',
  author: 'Hermann Gunkel',
  work: 'Genesis (Göttinger Handkommentar zum Alten Testament)',
  year: '1901',
  quote: `Gunkel deutet die Turmbauerzählung als Verbindung zweier ursprünglich selbständiger Sagen (Stadtbau und Turmbau), die als „ätiologische" Erzählungen die Vielfalt der Sprachen und den Namen Babylons erklären sollen.`,
  status: 'paraphrase',
};

const kramer1968: Source = {
  kind: 'wissenschaft',
  author: 'Samuel Noah Kramer',
  work: '„The ‚Babel of Tongues\': A Sumerian Version", Journal of the American Oriental Society 88, S. 108–111',
  year: '1968',
  quote: `Kramer machte auf eine Passage im sumerischen Epos „Enmerkar und der Herr von Aratta" aufmerksam („Zauberspruch des Nudimmud"), die von einer Zeit spricht, in der die Menschen in einer Sprache zu Enlil sprachen, und von einer Veränderung der Sprachen durch den Gott Enki.`,
  status: 'paraphrase',
  note: 'Die Deutung ist unter Assyriologen umstritten: Manche lesen darin eine vergangene Sprachverwirrung, andere eine erhoffte künftige Einigung der Sprachen.',
};

const walton1995: Source = {
  kind: 'fachliteratur',
  author: 'John H. Walton',
  work: '„The Mesopotamian Background of the Tower of Babel Account and Its Implications", Bulletin for Biblical Research 5, S. 155–175',
  year: '1995',
  quote: `Walton deutet den Turm als Zikkurat: eine Treppe, auf der nach mesopotamischer Vorstellung die Gottheit zu ihrem Tempel herabsteigen sollte. Die Sünde liege darin, Gott zu einem Werkzeug menschlicher Interessen zu machen und sich selbst „einen Namen" zu schaffen.`,
  status: 'paraphrase',
};

const atkinson2011: Source = {
  kind: 'wissenschaft',
  author: 'Quentin D. Atkinson',
  work: '„Phonemic Diversity Supports a Serial Founder Effect Model of Language Expansion from Africa", Science 332, S. 346–349',
  year: '2011',
  quote: `Die Zahl der Laute (Phoneme) einer Sprache nehme mit der Entfernung von Afrika ab – ein Hinweis auf einen Ursprung der menschlichen Sprache in Afrika und eine Ausbreitung mit „Gründereffekten".`,
  status: 'paraphrase',
  note: 'Die Studie wurde methodisch stark kritisiert; sie ist ein Diskussionsbeitrag, kein Konsens.',
};

const nazianz41: Source = {
  kind: 'kirchenvater',
  author: 'Gregor von Nazianz',
  work: 'Rede 41 (Auf das Pfingstfest)',
  ref: '16',
  quote: `Gregor stellt Babel und Pfingsten einander gegenüber: Damals wurden die Sprachen zur Strafe für einen gottlosen Einklang geteilt; an Pfingsten wird die Vielfalt der Sprachen durch den einen Geist zur Einheit im Glauben geführt.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'babel-mythos',
  title: `„Der Turmbau zu Babel ist ein Mythos – Sprachen entwickelten sich natürlich."`,
  proponents: [
    { name: 'Hermann Gunkel', role: 'Alttestamentler (1862–1932)', work: 'Genesis (1901) – Babel als ätiologische Sage' },
    { name: 'Guy Deutscher', role: 'Linguist, früher Universität Leiden/Manchester', work: 'The Unfolding of Language (2005)' },
    { name: 'Mark Pagel', role: 'Evolutionsbiologe, University of Reading', work: 'Wired for Culture (2012); Studien zur Sprachevolution' },
    { name: 'Thomas Römer', role: 'Alttestamentler, Collège de France', work: 'Arbeiten zur Entstehung der Urgeschichte' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'Allgemeine Kritik an der Historizität biblischer Erzählungen' },
  ],
  steelman: `Die Sprachwissenschaft hat die Geschichte der Sprachen in großen Teilen rekonstruiert: Englisch, Deutsch, Persisch und Hindi stammen von einer indogermanischen Ursprache ab, die vor etwa sechstausend Jahren gesprochen wurde; Hebräisch, Arabisch und Aramäisch von einer semitischen. Heute gibt es rund 7.000 Sprachen in weit über hundert Familien, die sich über Jahrtausende durch Wanderung, Isolation und allmählichen Lautwandel auseinanderentwickelt haben. Eine plötzliche, übernatürliche „Verwirrung" der Sprachen an einem Turm in Mesopotamien passt dazu überhaupt nicht. Die Erzählung trägt alle Merkmale einer ätiologischen Sage: Sie erklärt den Namen Babylon durch ein Wortspiel (*Babel* – *balal*, „verwirren") und die Vielfalt der Sprachen durch einen Eingriff Gottes. Ähnliche Motive kennen die Sumerer. Der Turm ist offensichtlich die Zikkurat Etemenanki in Babylon, die Nebukadnezar vollendete – die Geschichte spiegelt die Begegnung Israels mit Babylon im Exil.`,
  biblical: {
    summary: `Gen 11,1–9 ist keine linguistische Abhandlung, sondern eine theologische Erzählung über menschlichen Hochmut und Gottes Antwort. Die Menschen wollen sich „einen Namen machen" und „nicht zerstreut werden" (11,4) – gegen Gottes Auftrag, die Erde zu füllen (1,28). Gott „verwirrt" ihre Sprache und zerstreut sie. Unmittelbar danach verheißt Gott Abraham: „Ich will dir einen großen Namen machen … in dir sollen gesegnet werden alle Geschlechter auf Erden" (12,2–3). Bemerkenswert: Schon Gen 10, die Völkertafel, beschreibt die Völker „nach ihren Sprachen" – die Bibel selbst kennt also eine allmähliche, genealogische Ausbreitung der Sprachen; Gen 11 erzählt deren geistliche Tiefendimension.`,
    detail: `- **Wortspiel:** Babylon (akkadisch *bāb-ili*, „Tor Gottes") wird zu *Babel* von hebr. *balal*, „verwirren" – eine bewusste Umdeutung des Selbstanspruchs der Weltmacht.
- **„Ziegel statt Stein, Erdharz statt Kalk"** (11,3): ein genaues Detail mesopotamischer Bauweise.
- **„Die ganze Erde"** (*kol-ha'arez*) kann im Hebräischen auch „das ganze Land" bedeuten; Ausleger diskutieren, ob ein lokales Geschehen gemeint ist.
- **Pfingsten (Apg 2)** ist die Antwort: Gott stellt nicht die eine Sprache wieder her, sondern lässt jeden das Evangelium „in seiner Sprache" hören – die Vielfalt wird geheiligt. In der Vollendung stehen Menschen „aus allen … Sprachen" vor Gottes Thron (Offb 7,9).`,
    sources: [
      { kind: 'bibel', work: '1. Mose', ref: '11,4', quote: `Wohlauf, laßt uns eine Stadt und einen Turm bauen, des Spitze bis an den Himmel reiche, daß wir uns einen Namen machen! denn wir werden sonst zerstreut in alle Länder.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '11,9', quote: `Daher heißt ihr Name Babel, daß der HERR daselbst verwirrt hatte aller Länder Sprache und sie zerstreut von dannen in alle Länder.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '10,5.20.31', quote: `Die Völker werden „nach ihren Ländern, Sprachen, Geschlechtern und Leuten" aufgezählt.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '2,6', quote: `… und wurden bestürzt; denn es hörte ein jeglicher, daß sie mit seiner Sprache redeten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '12,2–3', quote: `… und will dir einen großen Namen machen, und sollst ein Segen sein … und in dir sollen gesegnet werden alle Geschlechter auf Erden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter lasen die Babel-Erzählung wörtlich **und** geistlich. Augustinus behandelt sie als Teil der Geschichte der „irdischen Stadt", die sich gegen Gott erhebt (*De civitate Dei* XVI,4); Gregor von Nazianz stellt in seiner Pfingstpredigt Babel und Pfingsten einander gegenüber (Rede 41,16). Viele Väter nahmen an, Hebräisch sei die Ursprache gewesen – eine Meinung, kein Dogma; Gregor von Nyssa betonte dagegen, dass Wörter von Menschen gebildet werden. Die koptische Kirche feiert Pfingsten als Geburtsstunde der Kirche aus allen Völkern und lebt diese Vielfalt selbst: Sie betete in koptischer Sprache, als Griechisch dominierte, und betet heute auf Koptisch, Arabisch, Englisch, Deutsch und vielen anderen Sprachen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XVI,4; XVI,11', quote: `Der Turmbau ist Ausdruck des Hochmuts der irdischen Stadt; Augustinus vermutet, die ursprüngliche Sprache sei im Geschlecht Hebers bewahrt geblieben (Hebräisch).`, status: 'paraphrase' },
      nazianz41,
      { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Genesis', ref: 'zu Gen 11', quote: `Malaty liest den Turmbau mit den Vätern als Bild menschlicher Selbstüberhebung und Pfingsten als dessen Heilung durch den Heiligen Geist.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die historisch-vergleichende Sprachwissenschaft kann Sprachfamilien über etwa sechs- bis zehntausend Jahre zurückverfolgen (z. B. Indogermanisch, Semitisch, Bantu). Heute zählt man rund 7.000 Sprachen; Glottolog verzeichnet weit über hundert voneinander unabhängige Familien und zahlreiche isolierte Sprachen. Ob alle Sprachen auf eine einzige Ursprache zurückgehen (Monogenese) oder mehrfach entstanden (Polygenese), gilt mit den Mitteln der Linguistik als nicht entscheidbar; Versuche, eine „Ursprache der Menschheit" zu rekonstruieren (Ruhlen, „Proto-World"), werden mehrheitlich abgelehnt, Studien zu tiefen Verwandtschaften (Pagel u. a. 2013; Atkinson 2011) sind umstritten. Die historisch-kritische Exegese sieht Gen 11 meist als ätiologische Erzählung mit anti-babylonischer Spitze; die Zikkurat von Babylon (Etemenanki) wird oft als Hintergrund genannt. Zikkurate gab es in Mesopotamien seit dem 3. Jahrtausend v. Chr.`,
    detail: `- **Was Kritiker richtig sehen:** Die heutige Sprachenvielfalt ist überwiegend durch allmählichen Sprachwandel entstanden; das bestreitet auch kein seriöser christlicher Ausleger.
- **Was offenbleibt:** die Tiefe der Sprachgeschichte jenseits der Reichweite der vergleichenden Methode, die Frage einer Ursprache, Datierung und Hintergrund von Gen 11.
- **Was die Kritik übersieht:** Die Bibel selbst beschreibt in Gen 10 eine Ausbreitung der Sprachen mit den Völkern; Gen 11 ist theologisch zugespitzt und richtet sich gegen eine konkrete menschliche Anmaßung.`,
    sources: [gunkel1901, kramer1968, atkinson2011,
      { kind: 'wissenschaft', author: 'Harald Hammarström, Robert Forkel, Martin Haspelmath, Sebastian Bank (Hg.)', work: 'Glottolog (Online-Katalog der Sprachen und Sprachfamilien der Welt), Max-Planck-Institut für evolutionäre Anthropologie', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Kein Christ muss bestreiten, dass sich Sprachen allmählich entwickeln – die Bibel selbst beschreibt in Gen 10 die Ausbreitung der Völker „nach ihren Sprachen". Gen 11 ist keine Linguistikvorlesung, sondern eine Erzählung über menschlichen Hochmut: Menschen wollen sich „einen Namen machen" – Gott zerstreut sie und schenkt kurz darauf Abraham einen Namen, der allen Völkern zum Segen wird. Und an Pfingsten heilt Gott Babel nicht durch eine Einheitssprache, sondern indem jeder das Evangelium in seiner eigenen Sprache hört. Die Frage nach einer Ursprache halten auch Linguisten für offen.`,
  keyPoints: [
    `**Die Bibel kennt Sprachentwicklung:** Gen 10 beschreibt die Völker „nach ihren Sprachen" – vor der Babel-Erzählung. Gen 11 deutet, Gen 10 berichtet.`,
    `**Die Botschaft ist Hochmut und Gnade:** „Lasst uns einen Namen machen" (11,4) – „Ich will dir einen großen Namen machen" (12,2). Gott bremst die Anmaßung und eröffnet Segen für alle Völker.`,
    `**Präzise Details:** Ziegel und Erdharz statt Stein und Kalk – mesopotamische Bauweise; Zikkurate gab es seit dem 3. Jahrtausend v. Chr.`,
    `**Ursprache ist offen:** Linguisten halten Monogenese oder Polygenese für nicht entscheidbar; die Kirche hat keine Ursprache dogmatisiert.`,
    `**Pfingsten ist die Antwort:** Gott heiligt die Vielfalt – jeder hört in seiner Sprache (Apg 2,6); die koptische Kirche lebt das seit Jahrhunderten in vielen Liturgiesprachen.`,
    `**Wörtlich und geistlich:** Die alexandrinische Tradition las die Schrift immer in beiden Sinnen – das ist kein moderner Rückzug.`,
  ],
  argument: {
    name: 'Babel richtig lesen',
    summary: 'Der Einwand trifft nur eine Lesart, die die Bibel selbst nicht nahelegt.',
    premises: [
      {
        text: `P1: Der Einwand setzt voraus, Gen 11 wolle die gesamte Sprachenvielfalt der Welt durch ein einziges, plötzliches Ereignis erklären.`,
        support: `So liest der Kritiker den Text; aber Gen 10 beschreibt bereits eine genealogische Ausbreitung der Sprachen.`,
      },
      {
        text: `P2: Der Text selbst legt seinen Schwerpunkt auf Hochmut, Selbstruhm und Gottes Gegenantwort (Gen 11,4; 12,2–3) und wurde in der Kirche wörtlich und geistlich gelesen.`,
        support: `Literarische Struktur der Urgeschichte; Augustinus, Gregor von Nazianz; koptische Auslegung (Malaty).`,
        sources: [nazianz41],
      },
      {
        text: `P3: Die Linguistik kann über die Frage einer Ursprache und über die Tiefe der Sprachgeschichte jenseits von rund zehntausend Jahren nichts Sicheres sagen.`,
        support: `Grenzen der vergleichenden Methode; Umstrittenheit von „Proto-World" und ähnlichen Ansätzen.`,
        sources: [atkinson2011],
      },
    ],
    conclusion: `„Sprachen entwickelten sich natürlich" widerspricht Gen 11 nicht. Die Erzählung bleibt eine wahre Aussage über Gott und den Menschen – und Pfingsten zeigt, wie Gott die Zerstreuung in Segen verwandelt.`,
  },
  voices: [
    {
      person: 'gregor-nazianz',
      role: 'als Prediger des Pfingstfestes',
      text: `In seiner Pfingstpredigt stellt Gregor, „der Theologe", Babel und Pfingsten gegenüber: In Babel waren die Menschen in einem bösen Einklang vereint und wurden durch die Teilung der Sprachen getrennt; an Pfingsten führt der eine Geist Menschen vieler Sprachen zum einen Glauben zusammen. Gregor sieht darin keine Abschaffung der Vielfalt, sondern ihre Heilung: Die Sprachen bleiben, aber sie werden zu Werkzeugen des Lobes Gottes.`,
      sources: [nazianz41],
    },
    {
      person: 'augustinus',
      role: 'als Geschichtstheologe',
      text: `Augustinus deutet den Turmbau im Rahmen seiner Lehre von den zwei Städten: Die irdische Stadt sucht ihren eigenen Ruhm und erhebt sich gegen Gott; die Stadt Gottes lebt aus der Gottesliebe. Babel ist das Urbild der Selbstüberhebung menschlicher Macht. Augustinus vermutete, die ursprüngliche Sprache sei Hebräisch gewesen – eine Meinung, die heute niemand mehr teilen muss. Seine theologische Deutung aber bleibt gültig: Einheit ohne Gott wird zur Gefahr.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XVI,4–11', status: 'paraphrase' }],
    },
    {
      person: 'john-walton',
      role: 'als Alttestamentler (Alter Orient)',
      text: `Walton liest Gen 11 vor dem Hintergrund der mesopotamischen Zikkurate: Sie waren keine Wohntürme, sondern Treppen, auf denen die Gottheit vom Himmel herabsteigen sollte, um ihren Tempel zu bewohnen und der Stadt Segen zu bringen. Die Sünde der Turmbauer bestand darin, Gott zum Diener ihres eigenen Ruhms zu machen. Die Erzählung ist damit eine präzise Kritik an der religiösen Ideologie Mesopotamiens – und zugleich zeitlos.`,
      sources: [walton1995],
    },
    {
      person: 'lamin-sanneh',
      role: 'als Missionshistoriker',
      text: `Sanneh, gebürtiger Gambier und Professor in Yale, zeigte, dass das Christentum – anders als Religionen mit einer heiligen Ursprache – von Anfang an „übersetzbar" war: Das Neue Testament ist in Griechisch verfasst, nicht in der Sprache Jesu, und die Mission übersetzte die Schrift in unzählige Volkssprachen. Dadurch wurden viele Sprachen erstmals verschriftlicht und kulturell aufgewertet. Für Sanneh ist das eine Folge von Pfingsten: Gott spricht jede Sprache.`,
      sources: [{ kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message: The Missionary Impact on Culture', year: '1989', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Vater Tadros Malaty sammelt in seinem patristischen Kommentar die Auslegung der Väter zu Gen 11. Er betont, dass die Erzählung das Herz des Menschen offenlegt, der ohne Gott eine Einheit sucht, die in Selbstruhm endet. Die wahre Einheit schenkt der Heilige Geist an Pfingsten, der die Kirche aus allen Völkern und Sprachen sammelt.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Genesis', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'aetiologische-sage',
      objection: `Babel ist eine ätiologische Sage: Sie erklärt den Namen Babylon durch ein Wortspiel und die Vielfalt der Sprachen durch einen Göttereingriff. Das ist Mythologie, nicht Geschichte.`,
      objectionBy: 'Hermann Gunkel',
      answer: `Das Wortspiel ist offensichtlich und gewollt: Aus Babylons Selbstbezeichnung „Tor Gottes" (*bāb-ili*) macht der Text *Babel*, „Verwirrung". Aber eine Erzählung mit Wortspiel ist nicht automatisch erfunden. Der Text zielt auf eine theologische Wahrheit: Menschen wollen sich selbst „einen Namen machen" – Gott durchkreuzt das und schenkt im nächsten Kapitel Abraham einen Namen zum Segen aller Völker.`,
      sources: [gunkel1901],
      followUps: [
        {
          id: 'siebentausend-sprachen',
          objection: `Rund 7.000 Sprachen in über hundert Familien haben sich über Zehntausende Jahre natürlich auseinanderentwickelt. Eine plötzliche Verwirrung in Mesopotamien ist ausgeschlossen.`,
          objectionBy: 'Guy Deutscher',
          answer: `Dass sich Sprachen allmählich entwickeln, bestreite ich nicht – die Bibel selbst beschreibt in Gen 10 die Ausbreitung der Völker „nach ihren Sprachen", noch bevor sie von Babel erzählt. Und „die ganze Erde" kann im Hebräischen auch „das ganze Land" heißen; viele Ausleger denken an ein Geschehen im mesopotamischen Raum. Gen 11 will nicht jede Sprachfamilie der Welt erklären, sondern die geistliche Wurzel menschlicher Zerrissenheit zeigen.`,
          followUps: [
            {
              id: 'nichts-bleibt-uebrig',
              objection: `Wenn Babel lokal ist und die Sprachen natürlich gewachsen sind, bleibt von der Geschichte nichts übrig.`,
              objectionBy: 'Jerry Coyne',
              answer: `Im Gegenteil, es bleibt das Wichtigste: Hochmut zerreißt Gemeinschaft; Einheit ohne Gott wird zur Anmaßung; Gott setzt menschlicher Machtballung Grenzen; und er zerstreut, um zu segnen. Diese Wahrheit hat sich in jedem Imperium der Geschichte bestätigt. Und sie wird an Pfingsten geheilt – nicht durch eine Einheitssprache, sondern durch den einen Geist in vielen Sprachen.`,
              followUps: [
                {
                  id: 'rueckzug-ins-symbolische',
                  objection: `Das ist der übliche Rückzug ins Symbolische, sobald die Wissenschaft widerspricht.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Die alexandrinische Tradition las die Schrift wörtlich und geistlich, lange bevor es moderne Linguistik gab – bei Origenes, Kyrill und anderen. Und schon im 4. Jahrhundert lehrte Gregor von Nyssa, dass die Wörter der Sprachen von Menschen gebildet werden. Das ist kein Rückzug, sondern unsere älteste Lesart. Zudem behaupte ich nicht, Babel sei bloß ein Symbol: Ich lese es als Geschehen in der Geschichte mit einer Bedeutung, die über es hinausreicht.`,
                  sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Contra Eunomium II', status: 'paraphrase', quote: `Gott schenkte die Fähigkeit zu sprechen; die Namen der Dinge bilden die Menschen selbst.` }],
                  followUps: [
                    {
                      id: 'woertlich-oder-luege',
                      objection: `Entweder ist Babel wörtlich wahr, genau so, wie es dasteht – oder die Bibel lügt. Einen Mittelweg gibt es nicht.`,
                      objectionBy: 'Ken Ham',
                      answer: `Das ist ein falsches Dilemma. Die Wahrheit eines Textes bemisst sich an dem, was er lehren will. Gen 11 lehrt, dass Gott menschlichen Hochmut richtet und die Völker zerstreut – das halte ich für wahr und geschichtlich. Wie genau sich dabei Sprachen veränderten, beschreibt der Text nicht im Detail. Die Väter haben diese Frage unterschiedlich beantwortet und blieben doch alle bibeltreu.`,
                      questionsBack: [`Lehrt Gen 11 eine linguistische Theorie – oder eine Wahrheit über Gott und den Menschen?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'von-sumer-kopiert',
      objection: `Die Geschichte ist von den Sumerern übernommen: Das Epos „Enmerkar und der Herr von Aratta" kennt schon eine Sprachverwirrung durch den Gott Enki.`,
      objectionBy: 'Samuel Noah Kramer',
      answer: `Kramer hat auf diese Parallele aufmerksam gemacht – aber ihre Deutung ist unter Fachleuten umstritten: Manche lesen darin eine vergangene Verwirrung, andere die Hoffnung auf eine künftige Einigung der Sprachen. Und selbst wo Motive ähnlich sind, ist die Theologie entgegengesetzt: Bei den Sumerern rivalisieren Götter, in Genesis richtet der eine Gott menschlichen Hochmut. Ähnliche Erinnerungen beweisen kein Abschreiben.`,
      sources: [kramer1968],
      followUps: [
        {
          id: 'etemenanki-exil',
          objection: `Der Turm ist eindeutig die Zikkurat Etemenanki in Babylon, die Nebukadnezar vollendete. Die Geschichte stammt also aus dem Exil.`,
          objectionBy: 'Thomas Römer',
          answer: `Etemenanki wurde unter Nabopolassar und Nebukadnezar erneuert, ist aber älter, und Zikkurate gab es in Mesopotamien seit dem 3. Jahrtausend v. Chr. – etwa die große Zikkurat von Ur. Das Detail „Ziegel statt Stein, Erdharz statt Kalk" passt zu mesopotamischer Bauweise jeder Epoche. Wann der Text seine heutige Form erhielt, ist umstritten; daraus folgt nicht, dass das Erzählte erfunden ist.`,
          sources: [{ kind: 'sonstiges', author: 'Herodot', work: 'Historien', ref: 'I,181', status: 'paraphrase', quote: `Herodot beschreibt im 5. Jahrhundert v. Chr. einen gestuften Tempelturm in Babylon mit acht Stockwerken.` }],
          followUps: [
            {
              id: 'exil-propaganda',
              objection: `Dann ist es eben anti-babylonische Propaganda aus der Exilzeit.`,
              objectionBy: 'Thomas Römer',
              answer: `Die anti-babylonische Spitze sehe ich auch – und sie ist berechtigt. Kritik an imperialer Selbstvergötterung ist keine Propaganda, sondern Prophetie, die in jedem Zeitalter gilt: Die Offenbarung nennt das gottfeindliche Weltreich noch im ersten Jahrhundert „Babylon" (Offb 18). Ein Text kann polemisch und wahr zugleich sein.`,
              followUps: [
                {
                  id: 'politisches-pamphlet',
                  objection: `Dann ist die Bibel letztlich ein politisches Pamphlet gegen Großmächte.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Sie ist Gottes Wort an den ganzen Menschen – auch an seine Politik. Die koptische Kirche hat jahrhundertelang unter Weltreichen gelebt, von Rom bis zu späteren Herrschern, und liest Babel als Warnung vor jeder Macht, die sich selbst „einen Namen machen" will. Die Antwort der Bibel ist nicht Gegengewalt, sondern die Stadt Gottes, die aus Demut und Liebe lebt.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hebraeisch-ursprache',
      objection: `Die Kirche lehrte jahrhundertelang, Hebräisch sei die Ursprache der Menschheit. Die Linguistik hat das widerlegt.`,
      objectionBy: 'Guy Deutscher',
      answer: `Viele Väter, etwa Augustinus, vermuteten das – das gestehe ich gern zu. Es war eine Meinung, kein Dogma; Gregor von Nyssa sah es anders. Hebräisch ist eine semitische Sprache mit eigener Vorgeschichte. Die koptische Kirche hat nie eine Ursprache festgelegt, und mein Glaube hängt nicht daran.`,
      followUps: [
        {
          id: 'ursprache-unentscheidbar',
          objection: `Die Frage nach einer Ursprache ist wissenschaftlich unbeantwortbar. Also ist auch eure Behauptung, alle Sprachen stammten von einer ab, leer.`,
          objectionBy: 'Mark Pagel',
          answer: `Einverstanden, dass die Linguistik es nicht entscheiden kann – weder dafür noch dagegen. Gen 11,1 setzt eine ursprüngliche sprachliche Einheit einer menschlichen Gemeinschaft voraus; das ist eine Aussage, die Linguistik weder bestätigen noch widerlegen kann. Interessanterweise argumentieren manche Forscher durchaus für eine sehr tiefe gemeinsame Wurzel. Ehrlich ist: Hier bleibt die Frage offen.`,
          sources: [{ kind: 'wissenschaft', author: 'Mark Pagel, Quentin D. Atkinson, Andreea S. Calude, Andrew Meade', work: '„Ultraconserved words point to deep language ancestry across Eurasia", PNAS 110, S. 8471–8476', year: '2013', status: 'paraphrase', note: 'Umstritten; zeigt, dass die Frage tiefer Verwandtschaft in der Fachwelt diskutiert wird.' }],
          followUps: [
            {
              id: 'atkinson-afrika',
              objection: `Atkinson hat 2011 gezeigt, dass die Lautvielfalt der Sprachen mit der Entfernung von Afrika abnimmt. Sprache hat ihren Ursprung in Afrika, nicht in Babel.`,
              objectionBy: 'Quentin Atkinson',
              answer: `Die Studie wurde methodisch stark kritisiert. Aber falls sie stimmt, stützt sie einen einzigen Ursprung der menschlichen Sprache – das passt gut zu einer einheitlichen Menschheit. Und sie betrifft den Ursprung der Sprache überhaupt, nicht Babel, das die Bibel als späteres Ereignis erzählt. Das sind zwei verschiedene Fragen.`,
              sources: [atkinson2011],
              followUps: [
                {
                  id: 'mesopotamien-afrika',
                  objection: `Aber Babel liegt in Mesopotamien, nicht in Afrika. Das widerspricht sich.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `Die Bibel sagt nirgends, dass die Sprache in Babel *entstanden* ist. Sie erzählt von einer Gemeinschaft, die „einerlei Sprache" hatte, nach Schinar zog und dort zerstreut wurde. Wo die Menschheit ursprünglich lebte, ist eine eigene Frage. Ein Widerspruch entsteht nur, wenn man dem Text eine Behauptung unterstellt, die er nicht macht.`,
                  sources: [{ kind: 'bibel', work: '1. Mose', ref: '11,1–2', quote: `Es hatte aber alle Welt einerlei Zunge und Sprache. Da sie nun zogen gen Morgen, fanden sie ein ebenes Land im Lande Sinear, und wohnten daselbst.`, translation: 'Luther 1912', status: 'verbatim' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-der-spaltung',
      objection: `Wenn Gott die Sprachen verwirrt hat, um Menschen zu trennen, ist er ein Gott der Spaltung. Verständigung ist doch etwas Gutes.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Die Einheit in Babel diente dem Selbstruhm und der Weigerung, sich über die Erde auszubreiten – „damit wir nicht zerstreut werden" (11,4), gegen Gottes Auftrag. Gottes Eingriff verhindert eine Machtballung, die zur Tyrannei geworden wäre. Und Gott schafft keine Einheitssprache, als er die Menschen an Pfingsten wieder sammelt: Jeder hört das Evangelium in seiner Sprache. Gott liebt die Vielfalt; er richtet die Anmaßung.`,
      sources: [{ kind: 'bibel', work: 'Offenbarung', ref: '7,9', quote: `Darnach sah ich, und siehe, eine große Schar, welche niemand zählen konnte, aus allen Heiden und Völkern und Sprachen, vor dem Stuhl stehend und vor dem Lamm.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'pfingsten-legende',
          objection: `Pfingsten ist selbst eine Legende. Und Zungenrede ist unverständliches Lallen, keine Fremdsprache.`,
          objectionBy: 'Bart Ehrman',
          answer: `Apg 2 beschreibt ausdrücklich verständliche Sprachen und zählt die Herkunftsländer der Zuhörer auf – das unterscheidet sich von der Zungenrede in Korinth, die Paulus ausgelegt wissen will. Lukas schreibt als sorgfältiger Historiker. Und selbst wer die Historizität bezweifelt, muss die bewusste Antwort auf Babel im Text anerkennen: Lukas erzählt Pfingsten als Umkehrung der Zerstreuung.`,
          sources: [{ kind: 'bibel', work: 'Apostelgeschichte', ref: '2,4', quote: `… und wurden alle voll des heiligen Geistes und fingen an, zu predigen mit andern Zungen, nach dem der Geist ihnen gab auszusprechen.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'kirche-einheitssprache',
              objection: `Aber die Kirchen haben selbst Einheitssprachen erzwungen – im Westen jahrhundertelang Latein.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Die koptische Kirche ging den umgekehrten Weg: Sie betete in der Sprache des ägyptischen Volkes, als Griechisch die Sprache der Gebildeten war, später auch auf Arabisch und heute in vielen Sprachen der Diaspora. Ähnlich übersetzten Syrer, Armenier, Äthiopier und die Slawenapostel Kyrill und Method die Schrift in Volkssprachen. Der Missionshistoriker Lamin Sanneh nennt das die „Übersetzbarkeit" des Christentums.`,
              followUps: [
                {
                  id: 'uebersetzung-verfaelscht',
                  objection: `Übersetzungen verfälschen immer. Nur ein Wort Gottes in der Originalsprache – wie der arabische Koran – kann verlässlich sein.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Für Christen ist das Wort Gottes zuerst eine Person – Christus – und erst dann ein Buch. Bedeutung lässt sich übersetzen: Schon das Neue Testament gibt Jesu Worte auf Griechisch wieder und zitiert das Alte Testament oft nach der griechischen Übersetzung. An Pfingsten spricht Gott selbst in vielen Sprachen. Eine Botschaft, die nur in einer Sprache gültig wäre, könnte nicht allen Völkern gehören.`,
                  questionsBack: [`Wenn Gott alle Völker erreichen will – warum sollte er an eine einzige Sprache gebunden sein?`],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum beschreibt Gen 10 die Völker schon „nach ihren Sprachen", bevor Gen 11 von Babel erzählt?`,
    `Kann die Linguistik die Frage nach einer Ursprache überhaupt entscheiden?`,
    `Ist die Botschaft von Gen 11 eine Theorie des Sprachwandels – oder eine Aussage über menschlichen Hochmut?`,
    `Warum stellt Gott an Pfingsten keine Einheitssprache wieder her?`,
    `Kennst du ein Weltreich, auf das die Warnung „lasst uns einen Namen machen" nicht passt?`,
  ],
  avoid: [
    `Behaupten, alle 7.000 Sprachen seien in einem Augenblick in Babel entstanden – das lehrt der Text nicht, und es ist linguistisch nicht haltbar.`,
    `Hebräisch als nachgewiesene Ursprache ausgeben.`,
    `Pseudowissenschaftliche „Beweise" für Babel anführen (z. B. angeblich entdeckte Turmreste mit Inschriften der Sprachverwirrung).`,
  ],
  concessions: [
    `Die heutige Sprachenvielfalt ist überwiegend durch allmählichen Sprachwandel entstanden.`,
    `Gen 11 enthält ein ätiologisches Wortspiel und eine anti-babylonische Spitze.`,
    `Viele Väter hielten Hebräisch für die Ursprache – darin irrten sie.`,
  ],
  furtherReading: [
    walton1995,
    { kind: 'fachliteratur', author: 'John H. Walton', work: 'Genesis (NIV Application Commentary)', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lamin Sanneh', work: 'Translating the Message', year: '1989', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Genesis', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Babel', 'Gen 11', 'Sprachfamilien', 'Ursprache', 'Pfingsten', 'Zikkurat', 'Übersetzbarkeit'],
  related: ['ursprung-der-sprache/sprache-graduell', 'genesis/genesis-von-babylon-kopiert', 'genesis/vaeter-lasen-woertlich', 'liberale-theologie/entmythologisierung', 'islam-koran/koran-perfekt-bewahrt'],
};

export default claim;
