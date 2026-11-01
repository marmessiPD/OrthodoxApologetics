import type { Claim, Source } from '../../../schema.ts';

const luhrmann2012: Source = {
  kind: 'gegner',
  author: 'Tanya M. Luhrmann',
  work: 'When God Talks Back: Understanding the American Evangelical Relationship with God',
  year: '2012',
  quote: `Die Stanford-Anthropologin beschreibt, wie Mitglieder evangelikaler Gemeinden durch Übung – Vorstellungskraft, Aufmerksamkeit, Gebetspraxis – lernen, Gott als reales Gegenüber zu erfahren und seine „Stimme" wahrzunehmen. Sie betont, dass ihre Untersuchung nicht entscheiden kann, ob Gott existiert.`,
  status: 'paraphrase',
  note: 'Luhrmann schreibt respektvoll und als Wissenschaftlerin, nicht als Religionskritikerin; ihre Befunde werden oft verkürzt zitiert.',
};

const schjoedt2009: Source = {
  kind: 'wissenschaft',
  author: 'Uffe Schjødt, Hans Stødkilde-Jørgensen, Armin W. Geertz, Andreas Roepstorff',
  work: '„Highly religious participants recruit areas of social cognition in personal prayer", Social Cognitive and Affective Neuroscience 4, S. 199–207',
  year: '2009',
  quote: `Beim freien, persönlichen Gebet aktivierten stark religiöse Teilnehmer Hirnregionen, die auch bei der Kommunikation mit anderen Personen und beim Nachdenken über deren Gedanken aktiv sind („Theory of Mind").`,
  status: 'paraphrase',
};

const kross2021: Source = {
  kind: 'wissenschaft',
  author: 'Ethan Kross',
  work: 'Chatter: The Voice in Our Head, Why It Matters, and How to Harness It',
  year: '2021',
  quote: `Kross beschreibt die Forschung zum inneren Monolog: Wer in belastenden Situationen „distanziert" mit sich selbst spricht (etwa mit dem eigenen Namen), reguliert Gefühle besser.`,
  status: 'paraphrase',
};

const step2006: Source = {
  kind: 'wissenschaft',
  author: 'Herbert Benson u. a.',
  work: '„Study of the Therapeutic Effects of Intercessory Prayer (STEP) in cardiac bypass patients", American Heart Journal 151, S. 934–942',
  year: '2006',
  quote: `Fürbittgebet fremder Gemeinschaften für Bypass-Patienten hatte keinen messbaren Effekt auf Komplikationen; Patienten, die sicher wussten, dass für sie gebetet wurde, hatten sogar etwas häufiger Komplikationen.`,
  status: 'paraphrase',
};

const feuerbach1841: Source = {
  kind: 'gegner',
  author: 'Ludwig Feuerbach',
  work: 'Das Wesen des Christentums',
  year: '1841',
  quote: `Feuerbach deutet Gott als Projektion des menschlichen Wesens: Im Gebet wende sich der Mensch an sein eigenes, verselbständigtes und idealisiertes Wesen.`,
  status: 'paraphrase',
};

const benson1975: Source = {
  kind: 'wissenschaft',
  author: 'Herbert Benson (mit Miriam Z. Klipper)',
  work: 'The Relaxation Response',
  year: '1975',
  quote: `Benson beschreibt eine körperliche „Entspannungsreaktion" (sinkende Herzfrequenz, Atemfrequenz, Muskelspannung), die durch Wiederholung eines Wortes, Gebets oder Satzes bei passiver Haltung ausgelöst wird.`,
  status: 'paraphrase',
  note: 'Benson beobachtete später, dass viele Menschen religiöse Worte wählten und dabei länger blieben („faith factor", Timeless Healing, 1996).',
};

const claim: Claim = {
  id: 'gebet-selbstgespraech',
  title: `„Gebet ist nur ein psychologisches Selbstgespräch."`,
  proponents: [
    { name: 'Ludwig Feuerbach', role: 'Philosoph (1804–1872)', work: 'Das Wesen des Christentums (1841)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 10 („imaginärer Freund")' },
    { name: 'Uffe Schjødt', role: 'Religionswissenschaftler und Neurowissenschaftler, Universität Aarhus', work: 'Social Cognitive and Affective Neuroscience 4 (2009)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up: A Guide to Spirituality Without Religion (2014)' },
    { name: 'Tanya M. Luhrmann', role: 'Anthropologin, Stanford University (deskriptiv, nicht polemisch)', work: 'When God Talks Back (2012)' },
  ],
  steelman: `Beten tut Menschen gut – daran zweifelt niemand. Aber die Wirkung lässt sich vollständig psychologisch erklären. Wer betet, ordnet seine Gedanken, benennt seine Sorgen, beruhigt sich und fasst Vorsätze; genau das leistet auch ein gutes Selbstgespräch, wie die Forschung zum inneren Monolog zeigt. Hirnscans belegen, dass persönliches Gebet dieselben Netzwerke aktiviert wie ein Gespräch mit realen Menschen: Das Gehirn simuliert ein Gegenüber. Die Anthropologin Tanya Luhrmann hat beschrieben, wie Gläubige durch jahrelange Übung lernen, Gottes „Stimme" zu hören – eine trainierte Fähigkeit der Vorstellungskraft. Wiederholte Gebete lösen dieselbe Entspannungsreaktion aus wie ein beliebiges Mantra. Und die einzige große kontrollierte Studie zur Fürbitte fand keinerlei Wirkung. Feuerbach hatte recht: Im Gebet spricht der Mensch mit seinem eigenen idealisierten Wesen. Es ist ein Selbstgespräch – ein heilsames vielleicht, aber eines ohne Gesprächspartner.`,
  biblical: {
    summary: `Die Bibel kennt das Selbstgespräch – und unterscheidet es vom Gebet. Im selben Vers spricht der Psalmist zuerst zu sich selbst und wendet sich dann an Gott: „Was betrübst du dich, meine Seele, und bist so unruhig in mir? Harre auf Gott!" (Ps 42,6). Gebet ist nach der Schrift Antwort auf einen Gott, der zuerst gesprochen hat (Hebr 1,1–2): „Schüttet euer Herz vor ihm aus" (Ps 62,9); „bete zu deinem Vater im Verborgenen" (Mt 6,6). Die Bibel weiß sogar, dass Menschen zu Wesen beten können, die nicht antworten – Elia verspottet die Baalspriester (1 Kön 18,27), Ps 115 beschreibt Götzen, die „Mäuler haben und reden nicht". Die Frage ist also nicht, ob Beten psychologisch wirkt, sondern ob der Angeredete existiert.`,
    detail: `- **Röm 8,26:** Der Geist selbst „vertritt uns mit unaussprechlichem Seufzen" – Gebet ist nach Paulus nicht nur menschliche Leistung, sondern Gottes Wirken im Menschen.
- **Mt 6,7–8:** Jesus warnt vor heidnischem „Plappern", das durch viele Worte Erhörung erzwingen will – und betont: „Euer Vater weiß, was ihr bedürfet". Gebet ist Beziehung, nicht Technik.
- **2 Kor 12,8–9:** Paulus betet dreimal um Befreiung und erhält ein Nein mit einer Verheißung – Gebet ist Dialog mit einem freien Gegenüber, kein Automat.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '42,6', quote: `Was betrübst du dich, meine Seele, und bist so unruhig in mir? Harre auf Gott!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,6', quote: `Wenn aber du betest, so gehe in dein Kämmerlein und schließ die Tür zu und bete zu deinem Vater im Verborgenen; und dein Vater, der in das Verborgene sieht, wird dir's vergelten öffentlich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '115,5–6', quote: `Sie haben Mäuler und reden nicht; sie haben Augen und sehen nicht; sie haben Ohren und hören nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,26', quote: `Desgleichen auch der Geist hilft unsrer Schwachheit auf. Denn wir wissen nicht, was wir beten sollen, wie sich's gebührt; sondern der Geist selbst vertritt uns aufs beste mit unaussprechlichem Seufzen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche betet mit der **Agpeya**, dem Stundengebet der sieben Gebetszeiten, das vor allem aus Psalmen und Evangelienlesungen besteht: Der Beter antwortet Gott mit Gottes eigenen Worten. Clemens von Alexandrien nannte das Gebet „Umgang" oder „Gespräch mit Gott" (*homilia pros ton theon*). Athanasius schrieb, die Psalmen seien wie ein Spiegel, in dem jeder die Regungen seiner Seele erkennt und lernt, sie vor Gott zu bringen. Vater Matta el-Meskeen beschreibt das Gebet als Leben in der Gegenwart Gottes, das den Menschen verwandelt. Die Kirche warnt zugleich vor der Suche nach außergewöhnlichen Erlebnissen: Ziel des Gebets ist die Gemeinschaft mit Gott in Demut, nicht das Hören von Stimmen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromata', ref: 'VII,7 (39,6)', quote: `Das Gebet ist, kühner gesagt, ein Umgang (Gespräch) mit Gott.`, original: 'ὁμιλία πρὸς τὸν θεόν', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Brief an Marcellinus über die Psalmen (Epistula ad Marcellinum)', ref: '10–12', quote: `Die Psalmen sind wie ein Spiegel für den, der sie singt: Er erkennt darin die Regungen seiner eigenen Seele und lernt, sie mit den Worten der Schrift vor Gott zu bringen.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life: The Interior Way)', quote: `Gebet ist kein frommes Selbstgespräch, sondern das Eintreten des Menschen in die Gegenwart des lebendigen Gottes, der ihn zuerst gesucht hat.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Agpeya (koptisches Stundengebet)', quote: `Sieben Gebetszeiten mit Psalmen, Evangelium und Bitten, die den Tag im Gedenken an das Heilswerk Christi ordnen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Psychologie des Gebets zeigt vielfältige Effekte: Gebet kann Stress und Grübeln verringern, Hoffnung stärken und Bewältigung fördern; wiederholtes Gebet löst wie andere Formen fokussierter Wiederholung eine Entspannungsreaktion aus (Benson 1975). Neurowissenschaftlich aktiviert persönliches Gebet Netzwerke sozialer Kognition (Schjødt u. a. 2009). Die Anthropologin Tanya Luhrmann beschreibt, wie Gläubige lernen, Gott als Gegenüber zu erfahren – und betont, dass ihre Forschung über die Existenz Gottes nichts entscheidet. Die große STEP-Studie (2006) fand keine Wirkung von Fürbitte durch Fremde. Philosophisch ist der Schluss von „Gebet hat psychologische Effekte" auf „Gebet hat keinen Adressaten" ein genetischer Fehlschluss: Die Herkunft oder Wirkung einer Praxis entscheidet nicht über die Existenz ihres Gegenstandes.`,
    detail: `- **Was stimmt:** Gebet hat psychologische Wirkungen, und manche sind denen von Meditation oder Selbstgespräch ähnlich.
- **Was nicht folgt:** dass es *nur* das ist. Auch ein Gespräch mit einem Freund beruhigt – das macht den Freund nicht imaginär.
- **Ein interessanter Befund:** Dass das Gehirn Gebet wie ein Gespräch mit einer Person verarbeitet, ist genau das, was man erwarten sollte, wenn Gebet eine Beziehung ist.`,
    sources: [benson1975, schjoedt2009, luhrmann2012, step2006, kross2021],
  },
  quickAnswer: `Natürlich hat Gebet psychologische Wirkungen – jedes echte Gespräch hat sie. Daraus folgt aber nicht, dass niemand zuhört: Auch ein Gespräch mit einem Freund beruhigt mich, und doch ist der Freund real. Die Bibel kennt das Selbstgespräch übrigens genau und unterscheidet es vom Gebet: „Was betrübst du dich, meine Seele? Harre auf Gott!" – erst spricht der Beter zu sich, dann zu Gott. Selbst die Anthropologin Tanya Luhrmann sagt, ihre Forschung könne nicht entscheiden, ob Gott existiert. Ob im Gebet jemand antwortet, hängt davon ab, ob es Gott gibt – und dafür gibt es eigene, gute Gründe.`,
  keyPoints: [
    `**Genetischer Fehlschluss:** Wirkung oder Entstehung einer Praxis sagt nichts darüber, ob ihr Gegenstand existiert.`,
    `**Die Bibel unterscheidet Selbstgespräch und Gebet:** Ps 42,6 enthält beides in einem Vers.`,
    `**Hirnscans stützen das Beziehungsmodell:** Persönliches Gebet aktiviert Areale sozialer Kognition – wie bei einem Gespräch mit einer Person.`,
    `**Luhrmann ist kein Kronzeuge gegen Gott:** Sie betont, dass ihre Studie die Existenz Gottes nicht entscheiden kann; Lernen, wahrzunehmen, macht das Wahrgenommene nicht unwirklich.`,
    `**Gebet ist kein Automat:** Lob, Dank, Reue und Bitte an einen freien Gott – die STEP-Studie testete etwas, was Christen nie behauptet haben.`,
    `**Orthodoxe Nüchternheit:** Die Kirche sucht im Gebet nicht Stimmen und Erlebnisse, sondern Gemeinschaft mit Gott in Demut – geprüft an Schrift, Kirche und Früchten.`,
  ],
  argument: {
    name: 'Der genetische Fehlschluss im Selbstgespräch-Einwand',
    summary: 'Das Argument schließt von Wirkungen auf das Nichtvorhandensein eines Adressaten.',
    premises: [
      {
        text: `P1 (Gegner): Gebet hat psychologische Wirkungen, die auch ein Selbstgespräch oder Meditation haben.`,
        support: `Teilweise zutreffend (Benson 1975; Kross 2021).`,
        sources: [benson1975, kross2021],
      },
      {
        text: `P2 (Gegner): Was sich psychologisch erklären lässt, hat keinen realen Adressaten.`,
        support: `Diese Prämisse ist falsch: Auch reale Gespräche, Freundschaften und Wahrnehmungen haben psychologische und neuronale Korrelate. Die Existenz eines Gegenübers ist eine eigene Frage.`,
        sources: [schjoedt2009],
      },
      {
        text: `P3: Ob im Gebet jemand angeredet wird, hängt davon ab, ob Gott existiert – eine Frage, die mit eigenständigen Argumenten zu klären ist.`,
        support: `Kosmologische, teleologische und moralische Argumente, die Auferstehung Jesu; Luhrmann selbst: Ihre Forschung entscheidet die Gottesfrage nicht.`,
        sources: [luhrmann2012],
      },
    ],
    conclusion: `„Gebet ist nur ein Selbstgespräch" setzt den Atheismus voraus, statt ihn zu begründen. Die psychologischen Befunde sind mit einem realen Gegenüber vollkommen vereinbar.`,
  },
  voices: [
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer des Gebets',
      text: `Matta el-Meskeen, der das Makarius-Kloster im Wadi Natrun erneuerte, beschreibt in *Das orthodoxe Gebetsleben* das Gebet nicht als Technik, sondern als Antwort auf die Liebe Gottes, der den Menschen zuerst sucht. Wahres Gebet beginnt, wenn der Mensch aufhört, nur über Gott nachzudenken, und anfängt, mit ihm zu sprechen und vor ihm zu schweigen. Es verwandelt den Beter – aber gerade deshalb, weil er einem lebendigen Gegenüber begegnet, nicht weil er sich selbst zuredet. Matta warnt vor einem Gebet, das sich um die eigenen Gefühle dreht.`,
      sources: [{ kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: '2003 (engl. Ausgabe)', status: 'paraphrase' }],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der alexandrinischen Schule',
      text: `Clemens beschreibt im siebten Buch der *Stromata* den wahren Gnostiker – den reifen Christen –, dessen ganzes Leben Gebet ist. Gebet ist für ihn „Umgang mit Gott", ein Gespräch, das nicht an Orte, Zeiten oder laute Worte gebunden ist; auch das schweigende Gebet des Herzens hört Gott. Für Clemens ist entscheidend, dass Gott dem Menschen näher ist als dieser sich selbst – darum ist das Gebet kein Monolog, sondern Begegnung.`,
      sources: [{ kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Stromata', ref: 'VII,7', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Psalmen',
      text: `In seinem Brief an Marcellinus erklärt Athanasius, warum die Psalmen einzigartig sind: Während andere Schriften von Gott erzählen, geben die Psalmen dem Beter Worte, mit denen er selbst zu Gott sprechen kann. Sie sind wie ein Spiegel der Seele – Freude, Angst, Reue, Klage, Dank. Wer sie betet, lernt, seine innere Welt nicht nur zu betrachten, sondern sie Gott hinzuhalten. Das ist der Unterschied zwischen Selbstbetrachtung und Gebet.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Epistula ad Marcellinum', ref: '10–12', status: 'paraphrase' }],
    },
    {
      person: 'william-alston',
      role: 'als Erkenntnistheoretiker',
      text: `Alston argumentiert in *Perceiving God* (1991), dass religiöse Erfahrung strukturell einer Wahrnehmung ähnelt: Menschen erleben etwas als ihnen gegeben, nicht als selbst erzeugt. Wie bei der Sinneswahrnehmung gibt es eine eingeübte Praxis mit eigenen Prüfverfahren. Man könne die christliche Praxis nicht ohne Zirkel als unzuverlässig erweisen – ebenso wenig wie die Sinneswahrnehmung. Dass man Wahrnehmen lernen muss, macht das Wahrgenommene nicht unwirklich.`,
      sources: [{ kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God: The Epistemology of Religious Experience', year: '1991', status: 'paraphrase' }],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Swinburne formuliert das „Prinzip der Glaubwürdigkeit": Wenn es einem Menschen so scheint, als nehme er etwas wahr, ist es vernünftig anzunehmen, dass es so ist – solange keine besonderen Gründe dagegen sprechen. Das gilt für alle Erfahrungen, auch für die Erfahrung der Gegenwart Gottes im Gebet. Wer sie pauschal als Selbsttäuschung abtut, braucht dafür ein Argument – und das kann nur ein Argument gegen Gottes Existenz sein, nicht eines aus der Psychologie.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: 'Kap. 13 (religiöse Erfahrung)', year: '2004 (2. Aufl.)', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nur-selbstberuhigung',
      objection: `Die positiven Effekte des Gebets entstehen durch Selbstberuhigung – genau wie beim distanzierten Selbstgespräch, das die Psychologie untersucht. Gebet ist ein Selbstgespräch mit religiösem Etikett.`,
      objectionBy: 'Ethan Kross',
      targetsPremise: 2,
      answer: `Dass Gebet ähnliche Wirkungen hat wie ein gutes Selbstgespräch, bestreite ich nicht. Aber auch ein Gespräch mit einem Freund beruhigt mich – das macht den Freund nicht imaginär. Die Wirkung sagt nichts darüber, ob jemand zuhört. Übrigens kennt die Bibel das Selbstgespräch genau: „Was betrübst du dich, meine Seele?" – und dann im selben Vers: „Harre auf Gott!" Der Beter unterscheidet sehr wohl, mit wem er spricht.`,
      sources: [kross2021,
        { kind: 'bibel', work: 'Psalmen', ref: '42,6', quote: `Was betrübst du dich, meine Seele, und bist so unruhig in mir? Harre auf Gott!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      questionsBack: [`Wenn ein Gespräch mit einem Freund mich beruhigt – beweist das, dass es den Freund nicht gibt?`],
      followUps: [
        {
          id: 'hirnscan-gegenueber',
          objection: `Hirnscans zeigen: Beim persönlichen Gebet sind dieselben Areale aktiv wie beim Gespräch mit realen Personen. Das Gehirn simuliert ein Gegenüber.`,
          objectionBy: 'Uffe Schjødt',
          targetsPremise: 2,
          answer: `Das ist ein faszinierender Befund – und er passt genau zu dem, was Christen sagen: Gebet ist eine Beziehung zu einer Person. Wenn ich mit dir telefoniere, sind ähnliche Areale aktiv; daraus folgt nicht, dass du nur simuliert bist. Hirnaktivität zeigt, *wie* wir mit jemandem in Beziehung treten, nicht, *ob* dieser jemand existiert.`,
          sources: [schjoedt2009],
          followUps: [
            {
              id: 'imaginaerer-freund',
              objection: `Dann ist Gott eben wie der imaginäre Freund eines Kindes – mit allen Beziehungsgefühlen, aber ohne Existenz.`,
              objectionBy: 'Richard Dawkins',
              targetsPremise: 3,
              answer: `Die Psychologin Marjorie Taylor hat gezeigt, dass Kinder in aller Regel wissen, dass ihre imaginären Freunde ausgedacht sind – Gläubige dagegen halten Gott für real, und sie haben Gründe dafür. Christliches Gebet ist zudem keine Privaterfindung: Es richtet sich an den Gott, der sich in der Geschichte Jesu gezeigt hat, und geschieht in einer Gemeinschaft mit jahrtausendealten Gebeten. Eine Analogie beweist nichts über Existenz – das musst du mit Argumenten zeigen.`,
              sources: [{ kind: 'wissenschaft', author: 'Marjorie Taylor', work: 'Imaginary Companions and the Children Who Create Them', year: '1999', status: 'paraphrase' }],
              followUps: [
                {
                  id: 'luhrmann-training',
                  objection: `Tanya Luhrmann hat gezeigt, dass Gläubige das „Hören Gottes" durch jahrelange Übung lernen. Das ist antrainierte Vorstellungskraft.`,
                  objectionBy: 'Tanya Luhrmann',
                  targetsPremise: 2,
                  answer: `Luhrmann selbst betont, dass ihre Forschung nicht entscheiden kann, ob Gott existiert – man sollte sie nicht weiter zitieren, als sie selbst geht. Und dass man Wahrnehmen lernen muss, macht das Wahrgenommene nicht unwirklich: Man lernt, Musik zu hören, einen Wein zu schmecken oder einen Röntgenbefund zu lesen. Die orthodoxe Tradition ist übrigens vorsichtig mit „Stimmen": Sie sucht im Gebet Demut und Gemeinschaft, nicht besondere Erlebnisse.`,
                  sources: [luhrmann2012],
                  followUps: [
                    {
                      id: 'nicht-unterscheidbar',
                      objection: `Wenn ihr das „Hören Gottes" nicht von Einbildung unterscheiden könnt, ist es wertlos.`,
                      objectionBy: 'Sean Carroll',
                      answer: `Die Kirche hat Kriterien: Übereinstimmung mit der Schrift, die Prüfung der Geister (1 Joh 4,1), die Früchte im Leben (Gal 5,22), das Urteil eines erfahrenen geistlichen Vaters – und sie misstraut ausdrücklich Eingebungen, die Stolz nähren. Vor allem aber gründet sich der Glaube nicht auf private Stimmen, sondern auf Gottes öffentliches Reden in Christus. Das Gebet ist Antwort darauf, nicht der Beweis dafür.`,
                      sources: [{ kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' }],
                      questionsBack: [`Worauf gründet sich dein eigenes Vertrauen in deine inneren Eindrücke – und wie prüfst du sie?`],
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
      id: 'step-keine-wirkung',
      objection: `Gebete werden nicht erhört. Die große STEP-Studie hat 2006 gezeigt, dass Fürbitte keinerlei Wirkung hat. Also redet niemand zurück.`,
      objectionBy: 'Richard Dawkins',
      answer: `Die STEP-Studie testete, ob Fremde, die einen vorgeschriebenen Satz beten, unter Laborbedingungen eine messbare Zusatzwirkung erzielen. Das haben Christen nie behauptet: Jesus lehnte es ab, „Gott zu versuchen". Gebet ist auch nicht vor allem Bitte, sondern Lob, Dank, Reue und Gemeinschaft. Und ein Gott, der antwortet, kann auch Nein sagen – Paulus bat dreimal und hörte: „Lass dir an meiner Gnade genügen."`,
      sources: [step2006,
        { kind: 'bibel', work: '2. Korinther', ref: '12,9', quote: `Laß dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'ja-nein-warte',
          objection: `„Ja, nein oder warte" – mit dieser Formel ist jedes Ergebnis vereinbar. Das ist Immunisierung.`,
          objectionBy: 'Jerry Coyne',
          answer: `So funktioniert jede Beziehung zu einer freien Person. Wenn ich meinen Vater um etwas bitte, kann er Ja, Nein oder „später" sagen – das macht ihn nicht unwiderlegbar, sondern frei. Ich behaupte auch nicht, Gebetserhörungen seien ein Gottesbeweis. Ob dein Freund dich liebt, kannst du auch nicht mit einer Doppelblindstudie prüfen – und doch ist die Frage sinnvoll.`,
          sources: [{ kind: 'bibel', work: 'Matthäus', ref: '4,7', quote: `Wiederum steht auch geschrieben: Du sollst Gott, deinen Herrn, nicht versuchen.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'allwissend-wozu',
              objection: `Wenn Gott allwissend ist, weiß er sowieso, was du brauchst. Wozu dann beten?`,
              objectionBy: 'Christopher Hitchens',
              answer: `Jesus hat genau das gesagt – „Euer Vater weiß, was ihr bedürfet, ehe denn ihr ihn bittet" – und im nächsten Atemzug das Vaterunser gelehrt. Gebet informiert Gott nicht, es bringt uns zu ihm. Schon Origenes hat diesen Einwand in seiner Schrift über das Gebet ausführlich behandelt: Gott hat in seiner Vorsehung unsere freien Gebete von Anfang an mitbedacht.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '6,8', quote: `Euer Vater weiß, was ihr bedürfet, ehe denn ihr ihn bittet.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Origenes', work: 'Über das Gebet (De oratione)', ref: '5–8', status: 'paraphrase', quote: `Origenes antwortet auf den Einwand, Gebet sei bei Gottes Vorherwissen überflüssig: Gott hat die freien Gebete der Menschen in seiner Vorsehung mitbedacht.`, note: 'Origenes wird in der koptischen Kirche nicht als Lehrautorität verehrt; seine apologetischen Werke bleiben wertvoll.' },
              ],
              followUps: [
                {
                  id: 'veraendert-nur-mich',
                  objection: `Dann verändert Gebet eben nur dich selbst. Also doch ein Selbstgespräch.`,
                  objectionBy: 'Sam Harris',
                  answer: `Gebet verändert mich – ja, wie jede echte Begegnung mich verändert. Paulus beschreibt das so: Wer den Herrn anschaut, wird „verklärt in dasselbe Bild". Dass ich mich verändere, spricht nicht gegen ein Gegenüber, sondern ist gerade das, was eine Beziehung zu einem heiligen und liebenden Gott bewirken sollte. Ein Selbstgespräch kann mich beruhigen; vergeben kann es mir nicht.`,
                  sources: [{ kind: 'bibel', work: '2. Korinther', ref: '3,18', quote: `Nun aber spiegelt sich in uns allen des HERRN Klarheit mit aufgedecktem Angesicht, und wir werden verklärt in dasselbe Bild von einer Klarheit zu der andern als vom Geist des HERRN.`, translation: 'Luther 1912', status: 'verbatim' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'agpeya-mechanisch',
      objection: `Die Agpeya wiederholt nach der Uhr immer dieselben Psalmen. Das ist mechanisches Plappern – Jesus selbst verbietet es (Mt 6,7) – und psychologisch reine Selbsthypnose.`,
      objectionBy: 'Kritiker liturgischen Gebets',
      answer: `Jesus verbietet das heidnische Plappern, das meint, durch viele Worte Erhörung zu erzwingen – nicht die Wiederholung. Er selbst betete in Gethsemane dreimal „dieselben Worte" (Mt 26,44), und Psalm 136 wiederholt sechsundzwanzigmal „denn seine Güte währet ewiglich". Die Agpeya ist Beten mit der Schrift: Athanasius nannte die Psalmen einen Spiegel der Seele, der uns lehrt, mit Gott zu sprechen.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '6,7', quote: `Und wenn ihr betet, sollt ihr nicht viel plappern wie die Heiden; denn sie meinen, sie werden erhört, wenn sie viel Worte machen.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Matthäus', ref: '26,44', quote: `Und er ließ sie und ging abermals hin und betete zum drittenmal und redete dieselben Worte.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'benson-entspannung',
          objection: `Herbert Benson zeigte: Jedes wiederholte Wort löst dieselbe Entspannungsreaktion aus. „Eins" wirkt wie „Herr Jesus Christus".`,
          objectionBy: 'Herbert Benson',
          targetsPremise: 1,
          answer: `Die körperliche Entspannung mag ähnlich sein, und das bestreite ich nicht. Benson selbst beobachtete übrigens, dass viele Menschen religiöse Worte wählten und dabei länger blieben. Aber Gebet ist keine Entspannungstechnik: Es enthält Lob, Reue, Fürbitte für andere und die Anrede eines Du. Dass der Körper beim Beten zur Ruhe kommt, ist ein schöner Nebeneffekt – nicht sein Sinn.`,
          sources: [benson1975],
          followUps: [
            {
              id: 'jesusgebet-mantra',
              objection: `Das Jesusgebet und die vielen „Kyrie eleison" sind doch nur ein christliches Mantra – wie im Hinduismus.`,
              objectionBy: 'Sam Harris',
              answer: `Der Unterschied liegt im Inhalt: Ein Mantra wird in manchen Traditionen als heilige Lautschwingung verstanden, die den Geist zur Ruhe bringt oder mit dem Absoluten eins werden lässt. „Herr Jesus Christus, erbarme dich meiner" ist eine Bitte an eine Person – um Erbarmen, aus Reue und Vertrauen. Die Wüstenväter Ägyptens beteten so, und die Agpeya enthält das „Kyrie eleison" einundvierzigmal – als Ruf eines Sünders zu seinem Retter, nicht als Klangtechnik.`,
              followUps: [
                {
                  id: 'meditation-gleich',
                  objection: `Säkulare Meditation hat dieselben Effekte – ganz ohne Gott. Wozu also Gebet?`,
                  objectionBy: 'Sam Harris',
                  answer: `Möglicherweise sind manche körperlichen Effekte ähnlich. Aber Christen beten nicht wegen der Effekte, sondern weil sie glauben, dass Gott existiert und uns liebt. Die Frage ist nicht, welche Technik am besten entspannt, sondern ob es jemanden gibt, dem man danken und vertrauen kann. Selbst du sagst, kontemplative Erfahrungen seien real – ich frage nur, ob am Ende des Weges ein Du steht oder nur Stille.`,
                  questionsBack: [`Wenn es Gott gäbe – wäre es dann nicht vernünftig, mit ihm zu sprechen statt nur zu meditieren?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'projektion-feuerbach',
      objection: `Gott ist eine Projektion des menschlichen Wesens. Im Gebet spricht der Mensch mit seinem eigenen idealisierten Selbst – das hat Feuerbach gezeigt.`,
      objectionBy: 'Ludwig Feuerbach',
      targetsPremise: 2,
      answer: `Feuerbach setzt voraus, was er beweisen müsste: dass es Gott nicht gibt. Wenn Gott existiert, ist das Gebet keine Projektion, sondern Antwort. Zudem passt der biblische Gott schlecht zu einem idealisierten Selbst: Er widerspricht, fordert, richtet und ruft zur Umkehr. Jesus betete in Gethsemane: „Nicht mein, sondern dein Wille geschehe" – so redet niemand mit seinem eigenen Wunschbild.`,
      sources: [feuerbach1841],
      followUps: [
        {
          id: 'vitz-tu-quoque',
          objection: `Und Paul Vitz' Umkehrung, Atheismus sei eine Projektion des Wunsches nach Vaterlosigkeit, ist nur ein billiges Tu-quoque.`,
          objectionBy: 'Feuerbach-Anhänger',
          answer: `Genau das ist der Punkt: Psychologische Herleitungen funktionieren in beide Richtungen – und entscheiden deshalb nichts. Vitz wollte zeigen, dass man auch dem Atheismus Wunschmotive unterstellen kann. Wenn beide Seiten das können, muss die Wahrheitsfrage mit Argumenten entschieden werden, nicht mit Seelenanalyse.`,
          sources: [{ kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', status: 'paraphrase' }],
          followUps: [
            {
              id: 'gott-schweigt',
              objection: `Aber Gott antwortet nie hörbar. Ein Gespräch, in dem nur einer spricht, ist ein Monolog.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Christen glauben, dass Gott zuerst gesprochen hat – durch die Propheten und endgültig im Sohn (Hebr 1,1–2). Wer mit den Psalmen betet, gibt Gott seine eigenen Worte zurück. Und die Bibel kennt auch das Schweigen Gottes: „Mein Gott, des Tages rufe ich, so antwortest du nicht" (Ps 22,3) – das betete Jesus am Kreuz. Schweigen gehört zu einer Beziehung, es beendet sie nicht.`,
              sources: [
                { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Psalmen', ref: '22,3', quote: `Mein Gott, des Tages rufe ich, so antwortest du nicht; und des Nachts schweige ich auch nicht.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'mutter-teresa-dunkelheit',
                  objection: `Selbst Mutter Teresa spürte jahrzehntelang keine Gegenwart Gottes, wie ihre Briefe zeigen. Da ist niemand.`,
                  objectionBy: 'Christopher Hitchens',
                  answer: `Ihre Briefe zeigen eine lange innere Dunkelheit – und zugleich ihre Treue: Sie betete weiter und diente den Sterbenden. Die geistliche Tradition kennt solche Zeiten als „dunkle Nacht"; der Glaube ruht nicht auf Gefühlen. Dass sie Gott nicht *spürte*, heißt nicht, dass sie ihn für nicht existent hielt – im Gegenteil, sie litt an seiner gefühlten Abwesenheit, weil sie an ihn glaubte. Wer nur das glaubt, was er fühlt, hätte auch keine Freundschaft, die schwere Zeiten übersteht.`,
                  sources: [{ kind: 'sonstiges', author: 'Mutter Teresa (hg. von Brian Kolodiejchuk)', work: 'Come Be My Light: The Private Writings of the Saint of Calcutta', year: '2007', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn ein Gespräch mit einem Freund mich beruhigt – macht das den Freund imaginär?`,
    `Woher weißt du, dass Gebet *nur* ein Selbstgespräch ist – welches Argument gegen Gottes Existenz steckt dahinter?`,
    `Warum unterscheidet der Psalmist in einem Vers zwischen „meine Seele" und „Gott"?`,
    `Hat Tanya Luhrmann behauptet, Gott existiere nicht?`,
    `Würdest du deine eigenen Freundschaften mit einer Doppelblindstudie prüfen?`,
  ],
  avoid: [
    `„Gebet wirkt messbar wie ein Medikament" – das behauptet die Kirche nicht, und die Studienlage stützt es nicht.`,
    `Eigene Gebetserlebnisse als Beweis für Gott präsentieren.`,
    `Die psychologischen Wirkungen des Gebets leugnen – sie sind real und gut.`,
    `Luhrmann als Religionskritikerin darstellen; sie beschreibt respektvoll und lässt die Gottesfrage offen.`,
  ],
  concessions: [
    `Gebet hat psychologische Wirkungen, die teils denen von Meditation oder Selbstgespräch ähneln.`,
    `Menschen können sich im Gebet täuschen; deshalb kennt die Kirche Prüfung und geistliche Begleitung.`,
    `Fürbittstudien wie STEP fanden keine messbare Wirkung.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: '2003', status: 'paraphrase' },
    luhrmann2012,
    { kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God', year: '1991', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Brief an Marcellinus über die Psalmen', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gebet', 'Selbstgespräch', 'Agpeya', 'Psalmen', 'Luhrmann', 'Feuerbach', 'Genetischer Fehlschluss', 'Neurotheologie'],
  related: ['medizin-wunder/gebetsstudien', 'neurowissenschaften/gotteserfahrung-hirnaktivitaet', 'religionskritik/projektion-feuerbach', 'erkenntnistheorie/religioese-erfahrung-kein-beleg', 'buddhismus/meditation-wissenschaftlich', 'glaube-alltag-gesundheit/glaube-statt-therapie'],
};

export default claim;
