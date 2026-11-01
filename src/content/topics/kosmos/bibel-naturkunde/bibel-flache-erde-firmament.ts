import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-flache-erde-firmament',
  title: `„Die Bibel lehrt eine flache Erde unter einer festen Himmelskuppel."`,
  proponents: [
    { name: 'Paul H. Seely', role: 'Evangelikaler Autor zum Alten Orient', work: '„The Firmament and the Water Above", Westminster Theological Journal 53 (1991) und 54 (1992)' },
    { name: 'Denis O. Lamoureux', role: 'Theologe und Biologe, St. Joseph\'s College, University of Alberta', work: 'Evolutionary Creation (2008); The Bible and Ancient Science (2020)' },
    { name: 'Peter Enns', role: 'Alttestamentler', work: 'Inspiration and Incarnation (2005)' },
    { name: 'Robert J. Schadewald', role: 'Wissenschaftsjournalist und Skeptiker', work: 'Artikel zur „biblischen flachen Erde" (1980er-Jahre)' },
  ],
  steelman: `Man muss die Bibel nur so lesen, wie ihre ersten Leser sie verstanden. Gen 1,6–8 spricht von einem *rāqîaʿ* – das Wort kommt von einem Verb, das „breitschlagen, hämmern" bedeutet (vgl. Ex 39,3: Goldbleche). Die Septuaginta übersetzt *stereōma* („Festes"), die Vulgata *firmamentum*. Über dieser Feste befinden sich Wasser (Gen 1,7; Ps 148,4), die durch „Fenster des Himmels" herabströmen (Gen 7,11). Hiob 37,18 nennt den Himmel „fest wie ein gegossener Spiegel"; die Erde ruht auf Säulen (Hiob 9,6; 1 Sam 2,8) und hat „vier Ecken" (Jes 11,12; Offb 7,1). Ein Baum, den man „bis ans Ende der ganzen Erde" sieht (Dan 4,8), und ein Berg, von dem aus man alle Reiche der Welt überblickt (Mt 4,8), setzen eine flache Scheibe voraus. Genau dieses Weltbild – eine Erdscheibe unter einer festen Kuppel mit einem himmlischen Ozean – teilten Babylonier und Ägypter. Der evangelikale Forscher Paul Seely hat gezeigt, dass *rāqîaʿ* im Alten Orient eine feste Himmelskuppel meinte; viele Kirchenväter dachten ebenso. Wer heute von „poetischer Sprache" spricht, verschiebt nachträglich die Torpfosten, weil die Wissenschaft den Text widerlegt hat.`,
  biblical: {
    summary: `Die Bibel spricht über die Natur in **phänomenologischer Sprache** – sie beschreibt die Welt, wie sie dem Betrachter erscheint (Sonnenaufgang, „Enden der Erde"), und verwendet die **Bildsprache ihrer Zeit**, um theologische Wahrheiten auszusagen: Gott hat alles geschaffen und geordnet; Sonne, Mond und Sterne sind keine Götter, sondern Lampen (Gen 1,14–18). Sie legt sich auf **kein kosmologisches Modell** fest: Dieselbe Schrift, die von „Säulen" der Erde spricht (Hiob 9,6), sagt auch, Gott „hängt die Erde über dem Nichts auf" (Hiob 26,7). Der Himmel wird „wie ein Teppich" (Ps 104,2), „wie ein dünnes Fell" und „wie eine Hütte" (Jes 40,22) ausgebreitet und „wie eine Buchrolle" zusammengerollt (Jes 34,4) – Bilder, die als Physik einander widersprächen, als Poesie aber zusammenpassen. Ehrlich ist aber auch: Die biblischen Autoren lebten im Weltbild des Alten Orients und haben es nicht korrigiert; die Bibel lehrt **weder** eine flache **noch** eine kugelförmige Erde.`,
    detail: `**Rāqîaʿ.** Das Substantiv ist mit dem Verb *rāqaʿ* verwandt, das „ausbreiten, festtreten, breithämmern" bedeutet (Ps 136,6: Gott „breitet die Erde aus"; Jes 42,5). Die Etymologie allein bestimmt nicht die Bedeutung (der Sprachwissenschaftler James Barr nannte diesen Fehlschluss die „root fallacy"). Im Kontext ist der *rāqîaʿ* das, was der Betrachter über sich sieht und „Himmel" nennt (Gen 1,8), worin die Lichter gesetzt sind (Gen 1,14–17) und unter dem die Vögel fliegen (Gen 1,20: „unter der Feste des Himmels", wörtlich „auf der Vorderseite der Feste").

**Wasser über der Feste.** Die Bibel kennt die Wasser in den Wolken (Hiob 26,8: „Er faßt das Wasser zusammen in seine Wolken"). Ob Gen 1,7 an Wolken, an einen himmlischen Ozean oder an beides denkt, haben schon die Väter offen diskutiert.

**Theologische Pointe.** Im babylonischen *Enuma Elisch* spaltet der Gott Marduk den Leib der Göttin Tiamat, um Himmel und Erde zu bilden. In Gen 1 gibt es keinen Götterkampf: Gott spricht, und es geschieht. Die *tehôm* (Urflut) ist keine Göttin, die Gestirne sind keine Mächte. Gen 1 verwendet die Bildwelt seiner Umwelt, um ihr eine radikal andere Theologie entgegenzusetzen.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,6–8', quote: `Und Gott sprach: Es werde eine Feste zwischen den Wassern, und die sei ein Unterschied zwischen den Wassern. Da machte Gott die Feste und schied das Wasser unter der Feste von dem Wasser über der Feste. Und es geschah also. Und Gott nannte die Feste Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '26,7', quote: `Er spannt den Norden aus über der Leere und hängt die Erde über dem Nichts auf.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Jesaja', ref: '40,22', quote: `Er sitzt über dem Kreis der Erde, und die darauf wohnen, sind wie Heuschrecken; er breitet den Himmel aus wie ein dünnes Fell und dehnt ihn aus wie eine Hütte, darin man wohnt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '37,18', quote: `Ja, du wirst mit ihm den Himmel ausbreiten, der fest ist wie ein gegossener Spiegel.`, translation: 'Luther 1912', status: 'verbatim', note: 'Rede Elihus, einer menschlichen Figur des Buches; poetischer Vergleich.' },
      { kind: 'bibel', work: 'Prediger', ref: '1,5', quote: `Die Sonne geht auf und geht unter und läuft an ihren Ort, daß sie wieder daselbst aufgehe.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat die Schrift nie als Lehrbuch der Naturkunde gelesen. Der hl. Basilius erklärt in seinen Homilien zum Sechstagewerk, Mose habe über die Gestalt der Erde – ob Kugel, Zylinder oder Scheibe – geschwiegen, weil es für unser Heil nicht nötig sei. Augustinus schreibt, die biblischen Autoren hätten die Wahrheit über die Gestalt des Himmels gekannt, der Geist Gottes habe aber nicht lehren wollen, was dem Heil nichts nützt; er warnt Christen eindringlich, sich mit unsinnigen Behauptungen über die Natur vor Nichtchristen lächerlich zu machen. Die Kugelgestalt der Erde war unter gebildeten Christen der Spätantike weithin bekannt; der Alexandriner Johannes Philoponos verteidigte sie im 6. Jahrhundert ausdrücklich gegen Kosmas Indikopleustes, einen der wenigen christlichen Autoren, die eine flache, zeltartige Welt lehrten. Die **alexandrinische Auslegung** verbindet den wörtlichen mit dem geistlichen Sinn und fragt immer nach der Aussageabsicht des Textes.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', ref: 'Hom. 9,1', year: 'um 370', quote: `Mose hat über die Gestalt der Erde nichts gesagt – ob sie eine Kugel, ein Zylinder oder eine flache Scheibe sei –, weil der Geist uns nicht mit Unnützem beschäftigen wollte, sondern mit dem, was zur Erbauung der Seele dient.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'II, 9, 20', year: 'um 401–415', quote: `Unsere Autoren kannten die Wahrheit über die Gestalt des Himmels; aber der Geist Gottes, der durch sie sprach, wollte die Menschen nicht über Dinge belehren, die zum Heil nichts beitragen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I, 19, 39', year: 'um 401–415', quote: `Es ist schändlich und gefährlich, wenn ein Ungläubiger einen Christen über Erde, Himmel und Gestirne Unsinn reden hört, angeblich auf Grund der Schrift; denn dann hält er auch die Botschaft von der Auferstehung für unglaubwürdig.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'De opificio mundi', year: 'um 546–560', quote: `Philoponos verteidigt gegen Kosmas Indikopleustes die Kugelgestalt von Erde und Himmel und zeigt, dass die Schrift damit vereinbar ist.`, status: 'paraphrase', note: 'Philoponos war Miaphysit in Alexandria; wegen seiner späteren tritheistischen Lehre ist er keine Lehrautorität.' },
    ],
  },
  opposingView: {
    summary: `In der alttestamentlichen Wissenschaft ist weithin anerkannt, dass die biblischen Texte die **Kosmologie des Alten Orients** voraussetzen: einen Himmel mit „Wassern darüber", eine auf Fundamenten ruhende Erde, eine Unterwelt. Paul Seely argumentierte in zwei Aufsätzen (WTJ 1991/92), *rāqîaʿ* bezeichne eine feste Kuppel; John Walton (*The Lost World of Genesis One*, 2009) und Denis Lamoureux sehen darin „antike Naturkunde", der sich Gott anpasste. Andere Forscher bestreiten, dass alle altorientalischen Kulturen eine *feste* Kuppel lehrten, oder betonen den bildhaften Charakter der Sprache. Unstrittig ist: Die Bibel bietet keine moderne Kosmologie – und sie will es nicht.`,
    detail: `Für die Frage der flachen Erde in der Kirchengeschichte gilt: Die Vorstellung, mittelalterliche Christen hätten allgemein an eine flache Erde geglaubt, ist ein Mythos des 19. Jahrhunderts (Washington Irvings Kolumbus-Biographie 1828, John W. Draper, Andrew D. White). Der Historiker Jeffrey Burton Russell hat in *Inventing the Flat Earth* (1991) gezeigt, dass seit der Antike fast alle gebildeten Christen die Kugelgestalt kannten. Ausnahmen wie Laktanz und Kosmas Indikopleustes waren Randfiguren mit geringem Einfluss.`,
    sources: [
      { kind: 'fachliteratur', author: 'Paul H. Seely', work: '„The Firmament and the Water Above. Part I: The Meaning of raqiaʿ in Gen 1:6–8", Westminster Theological Journal 53', ref: 'S. 227–240', year: '1991', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Paul H. Seely', work: '„The Firmament and the Water Above. Part II: The Meaning of ‚The Water above the Firmament\' in Gen 1:6–8", Westminster Theological Journal 54', year: '1992', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'John H. Walton', work: 'The Lost World of Genesis One', year: '2009', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth: Columbus and Modern Historians', year: '1991', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel spricht über die Natur so, wie wir heute noch vom „Sonnenaufgang" sprechen – aus der Sicht des Betrachters und in der Bildsprache ihrer Zeit. Sie legt sich auf kein Weltmodell fest: Sie spricht von „Säulen" der Erde und sagt zugleich, Gott hänge die Erde „über dem Nichts" auf (Hiob 26,7). Ihr Ziel ist nicht Astronomie, sondern die Botschaft: Gott hat alles geschaffen, und die Gestirne sind keine Götter. Schon Basilius und Augustinus sagten, der Geist wolle nicht lehren, wie der Himmel gebaut ist, sondern wie man in den Himmel kommt. Und die Kugelgestalt der Erde war gebildeten Christen seit der Antike bekannt.`,
  keyPoints: [
    `**Phänomenologische Sprache:** Die Bibel beschreibt die Welt, wie sie erscheint – wie wir heute „Sonnenaufgang" sagen (Pred 1,5).`,
    `**Kein festgelegtes Modell:** „Säulen" (Hiob 9,6) und „über dem Nichts" (Hiob 26,7), „Teppich" (Ps 104,2) und „Buchrolle" (Jes 34,4) – als Physik widersprüchlich, als Poesie stimmig.`,
    `**Etymologie ≠ Bedeutung:** *Rāqîaʿ* kommt von „ausbreiten/hämmern", bezeichnet im Text aber den sichtbaren Himmel, unter dem Vögel fliegen (Gen 1,20).`,
    `**Theologie statt Kosmologie:** Gen 1 nimmt Bilder des Alten Orients auf, um ihnen eine andere Theologie entgegenzusetzen: kein Götterkampf, keine göttlichen Gestirne.`,
    `**Die Väter:** Basilius und Augustinus lehnten es ab, die Schrift als Naturkunde zu lesen; Philoponos (Alexandria) verteidigte die Kugelerde gegen Kosmas.`,
    `**Ehrlich bleiben:** Die biblischen Autoren lebten im antiken Weltbild; die Bibel lehrt weder Scheibe noch Kugel – auch Jes 40,22 ist kein „Wissenschaftswunder".`,
  ],
  argument: {
    name: 'Aussage und Ausdrucksmittel',
    summary: 'Warum antike Bildsprache die Wahrheit der biblischen Aussage nicht aufhebt.',
    premises: [
      {
        text: 'P1: Ein Text ist in dem wahr oder falsch, was er behauptet – nicht in jedem Bild, das er zur Verständigung benutzt.',
        support: 'Wer „die Sonne geht auf" sagt, behauptet keine geozentrische Astronomie. Auch moderne Wissenschaftler reden so. Wahrheit bemisst sich an der Aussageabsicht (Augustinus; Thomas von Aquin: Der wörtliche Sinn ist das, was der Autor meint, einschließlich bildlicher Rede).',
        sources: [{ kind: 'kirchenvater', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 1, a. 10, ad 3', year: 'um 1265–1274', quote: `Der wörtliche Sinn ist das, was der Autor meint; zu ihm gehört auch der bildliche (parabolische) Sinn.`, status: 'paraphrase' }],
      },
      {
        text: 'P2: Die Schöpfungstexte wollen aussagen, dass der eine Gott alles geschaffen und geordnet hat – nicht, wie der Kosmos physikalisch gebaut ist.',
        support: 'Das zeigen Gattung (feierlich strukturierte Prosa bzw. Poesie), Kontext (Abgrenzung von altorientalischen Göttermythen) und die Auslegung der Väter (Basilius, Hex. 9,1; Augustinus, De Gen. ad litt. II,9,20).',
      },
      {
        text: 'P3: Diese Aussage wird durch die moderne Kosmologie nicht widerlegt.',
        support: 'Dass das Universum einen Anfang hat und geordnet ist, steht mit der Kosmologie im Einklang; dass die Gestirne keine Götter sind, ist gerade die Voraussetzung der Naturwissenschaft.',
      },
    ],
    conclusion: 'K: Also beweist die altorientalische Bildsprache von Gen 1 keinen Irrtum der Bibel; sie ist das Ausdrucksmittel, nicht der Inhalt ihrer Aussage.',
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als Ausleger von Genesis',
      text: `Augustinus schrieb fünfzehn Jahre lang an seinem „wörtlichen" Genesiskommentar und kam zu dem Schluss, dass die Schrift über die Gestalt des Himmels nicht belehren wolle. Berühmt ist seine Warnung: Wenn Christen unter Berufung auf die Bibel Unsinn über Himmel und Erde reden, den jeder Gebildete widerlegen kann, machen sie den Glauben lächerlich und schaden der Verkündigung der Auferstehung. In *De civitate Dei* (XVI,9) setzt er die Kugelgestalt der Erde als mögliche wissenschaftliche Erkenntnis voraus, bestreitet aber – irrtümlich –, dass auf der Gegenseite der Erde Menschen wohnen könnten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'I, 19, 39; II, 9, 20', year: 'um 401–415', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XVI, 9', year: 'um 420', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Prediger über das Sechstagewerk',
      text: `Basilius kannte die griechische Naturphilosophie gut und referiert in seinen Homilien verschiedene Theorien über die Gestalt der Erde und den Aufbau des Himmels. Er weigert sich bewusst, eine davon zur Glaubenslehre zu machen: Mose habe darüber geschwiegen, weil es für die Erbauung der Seele nichts beitrage. Basilius gilt als Vertreter einer eher wörtlichen Genesis-Lektüre – und gerade er zeigt, dass „wörtlich" für die Väter nicht hieß, die Bibel als Physikbuch zu lesen.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', ref: 'Hom. 1,8–11; 3; 9,1', year: 'um 370', status: 'paraphrase' }],
    },
    {
      person: 'johannes-philoponos',
      role: 'als alexandrinischer Naturphilosoph',
      text: `Johannes Philoponos, ein christlicher Philosoph in Alexandria im 6. Jahrhundert, schrieb seine Schrift *De opificio mundi* gegen Kosmas Indikopleustes, der eine flache Erde unter einem zeltartigen Himmel lehrte, gestützt auf die Stiftshütte als Abbild des Kosmos. Philoponos zeigte, dass die Kugelgestalt von Erde und Himmel mit der Schrift vereinbar ist und dass die Bibel nicht als Lehrbuch der Astronomie gelesen werden darf. Er war Miaphysit; seine spätere tritheistische Lehre wurde verworfen, weshalb er keine Lehrautorität ist – als Naturphilosoph bleibt er ein wichtiger Zeuge.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Philoponos', work: 'De opificio mundi', year: 'um 546–560', status: 'paraphrase' }],
    },
    {
      person: 'galilei',
      role: 'als Astronom und gläubiger Katholik',
      text: `In seinem Brief an die Großherzogin Christina (1615) argumentiert Galilei, dass die Schrift sich der Fassungskraft der einfachen Menschen anpasst und über die Natur in der gewöhnlichen Sprache redet. Er zitiert Kardinal Baronius mit dem berühmten Satz, die Absicht des Heiligen Geistes sei es, uns zu lehren, wie man in den Himmel kommt, nicht wie der Himmel geht. Galilei beruft sich ausführlich auf Augustinus – seine Hermeneutik war nicht antikirchlich, sondern patristisch.`,
      sources: [{ kind: 'fachliteratur', author: 'Galileo Galilei', work: 'Brief an die Großherzogin Christina von Lothringen', year: '1615', quote: `Die Absicht des Heiligen Geistes ist es, uns zu lehren, wie man in den Himmel kommt, und nicht, wie der Himmel geht.`, original: `l'intenzione dello Spirito Santo essere d'insegnarci come si vadia al cielo, e non come vadia il cielo`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Galilei schreibt den Satz einem Kirchenmann zu, gemeint ist Kardinal Cesare Baronius.' }],
    },
    {
      person: 'jeffrey-burton-russell',
      role: 'als Mediävist',
      text: `Russell weist in *Inventing the Flat Earth* (1991) nach, dass das Bild vom „flache-Erde-gläubigen Mittelalter" eine Erfindung des 19. Jahrhunderts ist, verbreitet durch Washington Irving, John W. Draper und Andrew D. White im Rahmen der These vom „Krieg zwischen Wissenschaft und Religion". Seit der Antike kannten fast alle gebildeten Christen die Kugelgestalt; Laktanz und Kosmas Indikopleustes waren Ausnahmen ohne großen Einfluss.`,
      sources: [{ kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth', year: '1991', status: 'paraphrase' }],
    },
    {
      person: 'john-walton',
      role: 'als Alttestamentler und Kenner des Alten Orients',
      text: `John Walton betont, dass die Bibel in der „kognitiven Umwelt" des Alten Orients spricht: Gott hat Israel keine moderne Kosmologie offenbart, sondern in den Vorstellungen seiner Zeit über sich selbst gesprochen. Walton sieht darin keine Schwäche der Offenbarung, sondern ihre Menschlichkeit. Seine These, Gen 1 handle vor allem von der *Funktion* der Schöpfung und weniger von ihrem materiellen Ursprung, ist umstritten; seine Einsicht in das antike Denken hilft aber, falsche Erwartungen an den Text zu vermeiden.`,
      sources: [{ kind: 'fachliteratur', author: 'John H. Walton', work: 'The Lost World of Genesis One', year: '2009', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'raqia-gehaemmert',
      objection: `*Rāqîaʿ* kommt von „breithämmern" (vgl. Ex 39,3). Gemeint ist eine feste, gehämmerte Kuppel – so haben es auch die Septuaginta (*stereōma*) und die Vulgata (*firmamentum*) verstanden.`,
      objectionBy: 'Paul H. Seely',
      targetsPremise: 1,
      answer: `Die Etymologie stimmt, und wahrscheinlich haben viele antike Leser sich den Himmel tatsächlich als etwas Festes vorgestellt – das gebe ich zu. Aber die Herkunft eines Wortes bestimmt nicht seine Bedeutung im Text; das ist der bekannte „Wurzel-Fehlschluss". Im Text ist der *rāqîaʿ* einfach das, was man oben sieht und „Himmel" nennt (Gen 1,8), worin die Lichter stehen und unter dem die Vögel fliegen (Gen 1,20). Der Text will nicht das Material des Himmels lehren, sondern dass Gott ihn gemacht hat.`,
      detail: `Das Verb *rāqaʿ* bedeutet auch allgemein „ausbreiten": Gott „breitet die Erde aus" (Ps 136,6; Jes 42,5; 44,24). Daher übersetzen viele moderne Bibeln *rāqîaʿ* mit „Gewölbe" oder „Ausdehnung". Für die Aussage des Textes ist die Frage, wie fest sich ein Israelit den Himmel vorstellte, zweitrangig – so wie es für die Wahrheit von „Die Sonne geht auf" zweitrangig ist, ob der Sprecher an das ptolemäische Weltbild glaubt.`,
      sources: [{ kind: 'fachliteratur', author: 'James Barr', work: 'The Semantics of Biblical Language', year: '1961', quote: `Barr kritisiert den Fehlschluss, die Bedeutung eines biblischen Wortes aus seiner Wurzel oder Etymologie abzuleiten, statt aus seinem Gebrauch im Kontext.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'hiob-gegossener-spiegel',
          objection: `Hiob 37,18 sagt ausdrücklich, der Himmel sei „fest wie ein gegossener Spiegel". Eindeutiger geht es nicht.`,
          objectionBy: 'Paul H. Seely',
          answer: `Das steht in der Rede Elihus, einer menschlichen Figur, die Gott am Ende des Buches gar nicht bestätigt – und es ist ein Vergleich („wie"), wie ihn Dichter lieben. Dasselbe Buch sagt, Gott hänge die Erde „über dem Nichts" auf (Hiob 26,7) und fasse das Wasser in seine Wolken (Hiob 26,8). Und die Bibel nennt den Himmel auch einen Teppich (Ps 104,2), ein dünnes Fell und eine Zeltbahn (Jes 40,22) und eine Buchrolle (Jes 34,4). Als Physik passen diese Bilder nicht zusammen – als Poesie sehr wohl.`,
          followUps: [
            {
              id: 'poesie-ausrede',
              objection: `„Das ist nur Poesie" – damit kannst du jeden Fehler der Bibel wegerklären. Das ist unwiderlegbar und deshalb wertlos.`,
              objectionBy: 'Denis O. Lamoureux',
              answer: `Das wäre so, wenn man Poesie willkürlich behauptete. Aber die Gattung erkennt man an objektiven Merkmalen – Parallelismus, Bildsprache, Kontext –, und das gilt für jeden antiken Text, auch für Homer oder babylonische Hymnen. Hiob und die Psalmen sind erkennbar Poesie. Die Auferstehungsberichte dagegen sind Erzählungen mit Ortsangaben, Zeugen und Datierungen, und Paulus beruft sich auf lebende Augenzeugen (1 Kor 15,3–8). Wir lesen nicht willkürlich, sondern gattungsgerecht.`,
              followUps: [
                {
                  id: 'inspiration-irrtum',
                  objection: `Dann irrt die Bibel eben in Naturfragen. Wie kann ein Buch voller antiker Irrtümer von Gott inspiriert sein?`,
                  objectionBy: 'Peter Enns',
                  answer: `Wahrheit und Irrtum betreffen das, was ein Text *behauptet*, nicht jede Vorstellung, die in seiner Sprache mitschwingt. Die Schrift behauptet: Gott hat den Himmel geschaffen. Sie behauptet nicht: Der Himmel besteht aus Metall. Gott hat Menschen ihrer Zeit inspiriert, die in ihrer Sprache und Bildwelt redeten – wie Christus, der Logos, wirklich Mensch seiner Zeit wurde, Aramäisch sprach und galiläische Gleichnisse erzählte. Die koptische Kirche lehrt die Inspiration der Schrift für unser Heil (2 Tim 3,15–16), kein Dogma über ihre Kosmologie.`,
                  followUps: [
                    {
                      id: 'akkommodation-taeuschung',
                      objection: `„Gott passte sich an" heißt doch: Gott hat bewusst etwas Falsches stehen lassen. Das ist Täuschung.`,
                      objectionBy: 'Paul H. Seely',
                      answer: `Nein. Wer vom „Sonnenaufgang" spricht, lügt nicht, auch wenn er weiß, dass sich die Erde dreht. Täuschung wäre es, wenn der Text eine falsche Kosmologie als Offenbarung lehren wollte. Er benutzt sie aber nur als Rahmen, um etwas ganz anderes zu sagen: dass der Himmel kein Gott ist, sondern Gottes Werk. Schon Johannes Chrysostomus sprach von Gottes *synkatabasis*, seiner „Herablassung" zu unserem Verständnis – wie ein Vater, der mit seinem Kind in dessen Sprache spricht.`,
                      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zur Genesis', ref: 'u. a. Hom. 13', year: 'um 388', quote: `Die Schrift redet in einer dem Menschen angepassten Weise (synkatabasis), weil wir Schwache sind und Gottes Wirken sonst nicht fassen könnten.`, status: 'paraphrase' }],
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
      id: 'wasser-ueber-feste',
      objection: `Gen 1,7 und Ps 148,4 sprechen von „Wassern über dem Himmel". Das ist der himmlische Ozean der Babylonier.`,
      objectionBy: 'Paul H. Seely',
      answer: `Gut möglich, dass die Formulierung die altorientalische Vorstellung aufnimmt – das ist ehrlich zuzugeben. Die Bibel kennt aber auch die schlichte Erfahrung, dass das Regenwasser von oben kommt und in Wolken gefasst ist (Hiob 26,8). Schon die Väter – Basilius, Augustinus – diskutierten offen, was mit den oberen Wassern gemeint sei, ohne ein Dogma daraus zu machen. Entscheidend ist der Gegensatz zu Babylon: Dort entsteht der Himmel aus dem zerteilten Leib einer Göttin, in Gen 1 durch das Wort des einen Gottes.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi ad litteram', ref: 'II, 1–5', year: 'um 401–415', status: 'paraphrase' }],
      followUps: [
        {
          id: 'fenster-des-himmels',
          objection: `Gen 7,11: „Die Fenster des Himmels taten sich auf." Glaubst du wirklich an Fenster im Himmel?`,
          answer: `So wenig, wie du an Katzen und Hunde glaubst, wenn es auf Englisch „cats and dogs" regnet. Die Bibel selbst benutzt das Bild ironisch und übertragen: Ein Offizier spottet, selbst wenn der Herr „Fenster am Himmel" machte, könne das nicht geschehen (2 Kön 7,2), und Gott verheißt, er werde „des Himmels Fenster auftun" und Segen ausschütten (Mal 3,10). Niemand liest Maleachi als Bauplan.`,
          followUps: [
            {
              id: 'aus-babylon-kopiert',
              objection: `Die ganze Kosmologie von Gen 1 ist aus dem babylonischen Enuma Elisch abgeschrieben.`,
              objectionBy: 'Peter Enns',
              answer: `Es gibt gemeinsame Bilder – Urflut, Trennung von Oben und Unten –, aber die Theologie ist das Gegenteil: kein Götterkampf, keine Geburt von Göttern, kein Mensch als Sklave der Götter, sondern ein Gott, der durch sein Wort schafft und den Menschen zu seinem Bild macht. Gen 1 ist eher eine Antwort auf die altorientalischen Mythen als eine Kopie. Das wird im Claim „Genesis ist von Babylon kopiert" ausführlich behandelt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'saeulen-und-ecken',
      objection: `Die Erde hat Säulen (Hiob 9,6; 1 Sam 2,8) und vier Ecken (Jes 11,12; Offb 7,1). Das ist eine Scheibe auf Pfeilern.`,
      objectionBy: 'Robert J. Schadewald',
      answer: `„Vier Ecken der Erde" ist eine Redewendung für die vier Himmelsrichtungen – wir sagen heute noch, Menschen kämen „aus allen Ecken der Welt", ohne an eine eckige Erde zu glauben. Die „Säulen" stehen in Hannas Lobgesang (1 Sam 2,8) und in Hiobs Poesie – als Bild für Gottes Macht und die Stabilität der Schöpfung. Und dasselbe Hiobbuch sagt, die Erde hänge „über dem Nichts" (Hiob 26,7). Wer beide Bilder wörtlich nimmt, bekommt einen Widerspruch; wer sie poetisch liest, bekommt Lobpreis.`,
      followUps: [
        {
          id: 'daniel-baum-mt4',
          objection: `Dan 4,8: Ein Baum, den man auf der ganzen Erde sieht. Mt 4,8: Vom hohen Berg aus zeigt der Teufel Jesus alle Reiche der Welt. Das geht nur auf einer Scheibe.`,
          objectionBy: 'Robert J. Schadewald',
          answer: `Dan 4 ist ausdrücklich ein Traum Nebukadnezars – ein Symbolbild für die Weltherrschaft des Königs, das Daniel deutet (Dan 4,17–19). Und in Mt 4,8 zeigt der Teufel die Reiche nach Lk 4,5 „in einem Augenblick" – eine visionäre Schau, keine optische Fernsicht. Niemand liest Träume und Visionen als geographische Angaben, auch nicht bei anderen antiken Texten.`,
          followUps: [
            {
              id: 'woertlich-heisst-woertlich',
              objection: `Du interpretierst nur, wenn es dir passt. Wörtlich heißt wörtlich.`,
              answer: `„Wörtlich" heißt in der klassischen Auslegung: so, wie der Autor es gemeint hat. Thomas von Aquin erklärt, zum wörtlichen Sinn gehöre auch die bildliche Rede, denn der Autor meint mit dem „Arm Gottes" nicht ein Körperteil, sondern Gottes Macht. Die alexandrinische Tradition, in der die koptische Kirche steht, liest seit Origenes und Kyrill den wörtlichen und den geistlichen Sinn zusammen und fragt immer: Was will der Text sagen? Das ist keine Ausflucht, sondern elementare Lesekompetenz.`,
              sources: [{ kind: 'kirchenvater', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 1, a. 10, ad 3', year: 'um 1265–1274', status: 'paraphrase' }],
            },
          ],
        },
      ],
    },
    {
      id: 'vaeter-flache-erde',
      objection: `Auch die Kirchenväter glaubten an eine flache Erde – Laktanz verspottete die Kugelerde, und Kosmas Indikopleustes schrieb eine ganze „Christliche Topographie" über die flache Welt.`,
      objectionBy: 'Andrew Dickson White',
      answer: `Das stimmt für diese beiden – und ehrlicherweise auch für einige Antiochener wie Severian von Gabala. Laktanz verspottete in den *Divinae Institutiones* (III,24) die Vorstellung von Menschen auf der Gegenseite der Erde. Aber sie waren Ausnahmen. Basilius ließ die Frage offen, Augustinus setzte die Kugelgestalt als wissenschaftlich mögliche Erkenntnis voraus, und der Alexandriner Johannes Philoponos widerlegte Kosmas ausdrücklich. Im Mittelalter lehrten Beda, Thomas von Aquin und das Standardlehrbuch *De sphaera* des Sacrobosco die Kugelgestalt.`,
      sources: [{ kind: 'kirchenvater', author: 'Laktanz', work: 'Divinae Institutiones', ref: 'III, 24', year: 'um 305–310', status: 'paraphrase', note: 'Laktanz verspottet die Antipoden; er ist für die koptische Kirche keine Lehrautorität.' }],
      followUps: [
        {
          id: 'kosmas-alexandria',
          objection: `Kosmas kam aus Alexandria – also ist die flache Erde eure eigene Tradition!`,
          answer: `Kosmas war ein Kaufmann aus Alexandria, der theologisch aber der ostsyrisch-antiochenischen Schule nahestand – nicht der Kirche Alexandriens, aus der die koptische Kirche hervorging. Und gerade ein Alexandriner, Johannes Philoponos, schrieb die gründlichste Widerlegung seiner Thesen. Kosmas' Werk blieb zudem eine Randerscheinung mit wenigen Handschriften; Russell zeigt, dass es im Mittelalter kaum Einfluss hatte.`,
          followUps: [
            {
              id: 'philoponos-haeretiker',
              objection: `Philoponos wurde später als Tritheist verurteilt. Ein Häretiker ist kein guter Zeuge für die Kirche.`,
              answer: `Richtig, Philoponos ist wegen seiner späteren Trinitätslehre keine Lehrautorität – das sagen wir offen. Aber hier geht es nicht um Dogmatik, sondern um Naturkunde: Er zeigt, dass ein gläubiger Alexandriner des 6. Jahrhunderts die Kugelgestalt der Erde für selbstverständlich hielt und sie mit der Bibel verband. Für diese historische Frage ist er ein hervorragender Zeuge – genauso wie die Mehrheit der Väter, die nicht als Häretiker gelten.`,
            },
          ],
        },
        {
          id: 'mittelalter-kolumbus',
          objection: `Im Mittelalter glaubten trotzdem alle an die flache Erde. Kolumbus musste die Kirche erst widerlegen.`,
          answer: `Das ist ein Mythos des 19. Jahrhunderts, den Washington Irving 1828 in seiner romantisierenden Kolumbus-Biographie verbreitete. Der Streit um Kolumbus ging nicht um die Form der Erde, sondern um ihre Größe – und da hatten seine Kritiker recht: Kolumbus unterschätzte den Erdumfang erheblich und wäre ohne den unbekannten amerikanischen Kontinent verhungert. Das Thema wird im Claim „Im finsteren Mittelalter glaubten Christen an die flache Erde" ausführlich behandelt.`,
          followUps: [
            {
              id: 'reichsapfel',
              objection: `Gibt es denn konkrete Belege, dass auch einfache Christen im Mittelalter die Erde für eine Kugel hielten?`,
              answer: `Ein anschauliches Beispiel ist der Reichsapfel (*globus cruciger*): eine Kugel mit Kreuz, Symbol der Herrschaft Christi über die Welt, die Kaiser und Könige seit dem frühen Mittelalter in der Hand hielten und die auf unzähligen Bildern und Münzen erscheint. Das Bild der Welt als Kugel war also öffentlich und allgemein verständlich. Hinzu kommen mittelalterliche Lehrbücher und Enzyklopädien, die die Kugelgestalt selbstverständlich voraussetzen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'jesaja-chug-kugel',
      objection: `Ihr Christen behauptet doch selbst, Jes 40,22 („Kreis der Erde") beweise die Kugelgestalt. *Ḥûg* heißt Kreis, nicht Kugel. Eure „Wissenschaftswunder" sind genauso konstruiert wie die der Muslime.`,
      answer: `Da hast du völlig recht, und ich verwende dieses Argument nicht. *Ḥûg* bedeutet Kreis, Rund oder Gewölbe – es wird auch für den Himmelskreis (Hiob 22,14) und den Horizont über der Urflut (Spr 8,27) gebraucht; für eine Kugel hätte das Hebräische ein anderes Wort (*dûr*, Jes 22,18). Die Bibel lehrt weder eine flache noch eine kugelförmige Erde, weil sie keine Naturkunde lehren will. Wer biblische „Wissenschaftswunder" konstruiert, macht denselben Fehler wie die, die der Bibel naturkundliche Irrtümer vorwerfen.`,
      followUps: [
        {
          id: 'hiob-26-7-wunder',
          objection: `Und Hiob 26,7 – „er hängt die Erde über dem Nichts auf"? Ist das auch kein Wissenschaftswunder?`,
          answer: `Ich würde es nicht als Vorwegnahme der Gravitationsphysik ausgeben. Es ist ein bemerkenswertes poetisches Bild, das zeigt: Die biblischen Dichter dachten nicht in einem starren Modell, sonst stünde neben den „Säulen" der Erde nicht ihr Hängen „über dem Nichts". Beides sagt dasselbe: Die Erde ruht nicht auf Schildkröten oder Göttern, sondern allein in Gottes Hand.`,
          followUps: [
            {
              id: 'dann-theologie-wertlos',
              objection: `Wenn die Bibel keine verlässliche Naturkunde lehrt – warum sollte ich ihr dann in Fragen über Gott trauen?`,
              answer: `Weil es verschiedene Fragen sind, die man verschieden prüft. Ein Liebesbrief ist nicht falsch, weil er vom „Sonnenuntergang" spricht. Die Bibel sagt selbst, wozu sie gegeben ist: um „unterweisen zur Seligkeit durch den Glauben an Christum Jesum" (2 Tim 3,15). Ihre historischen Aussagen – etwa über Jesu Tod und Auferstehung – prüfen wir historisch, ihre theologischen Aussagen im Licht der Vernunft und der Erfahrung der Kirche. Galilei hat es so gesagt: Der Geist lehrt, wie man in den Himmel kommt, nicht wie der Himmel geht.`,
              questionsBack: [`Verlangst du von einem antiken Text eine Sprache, die erst im 17. Jahrhundert erfunden wurde?`],
            },
          ],
        },
      ],
    },
    {
      id: 'seely-evangelikal',
      objection: `Selbst evangelikale Forscher wie Paul Seely, John Walton und Denis Lamoureux geben zu, dass Gen 1 eine antike Kosmologie mit fester Himmelskuppel voraussetzt. Ihr Apologeten leugnet nur den Text.`,
      objectionBy: 'Peter Enns',
      answer: `Ich leugne nicht, dass die biblischen Autoren in der Vorstellungswelt des Alten Orients lebten – das ist sehr wahrscheinlich, und ich respektiere die Arbeit dieser Forscher. Aber bemerke: Keiner von ihnen schließt daraus, das Christentum sei falsch. Sie schließen, dass Gott sich der Sprache und dem Weltbild seiner Zeit angepasst hat, um seine Botschaft zu vermitteln. Ob man den Text phänomenologisch oder als Anpassung liest – in beiden Fällen bleibt die theologische Aussage unberührt.`,
      followUps: [
        {
          id: 'walton-funktional',
          objection: `Walton sagt sogar, Gen 1 handle gar nicht von der materiellen Erschaffung, sondern nur von Funktionen. Ist das nicht ein Ausweichmanöver?`,
          objectionBy: 'Kritiker Waltons',
          answer: `Waltons funktionale Deutung ist auch unter Christen umstritten, und für die koptische Kirche reicht sie allein nicht aus: Sie bekennt, dass Gott alles aus dem Nichts geschaffen hat (vgl. 2 Makk 7,28; Hebr 11,3), also auch die Materie. Waltons bleibender Beitrag ist die Erinnerung, dass wir antike Texte nicht mit modernen Fragen überfrachten dürfen. Man kann seine Einsichten über das antike Denken übernehmen, ohne seine ganze These zu teilen.`,
          sources: [{ kind: 'bibel', work: '2. Makkabäer', ref: '7,28', quote: `Die Mutter der sieben Brüder bittet ihren Sohn, Himmel und Erde anzuschauen und zu erkennen, dass Gott dies nicht aus Seiendem gemacht hat.`, status: 'paraphrase', note: 'Deuterokanonisches Buch, in der koptischen Kirche kanonisch.' }],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Glaubst du, dass ein Meteorologe lügt, wenn er den Zeitpunkt des „Sonnenaufgangs" angibt?`,
    `Wie passt deine wörtliche Lesart von Hiob 9,6 („Säulen") zu Hiob 26,7 („über dem Nichts") im selben Buch?`,
    `Welche Sprache hätte Gott einem Israeliten im 10. Jahrhundert v. Chr. für die Kosmologie geben sollen, damit er sie versteht?`,
    `Weißt du, dass Basilius und Augustinus schon im 4. Jahrhundert ausdrücklich ablehnten, die Bibel als Naturkundebuch zu lesen?`,
  ],
  avoid: [
    `Jes 40,22 („Kreis der Erde") als Beweis für die Kugelgestalt anführen – *ḥûg* heißt Kreis, nicht Kugel; Kritiker kennen das.`,
    `Hiob 26,7 als „Vorwegnahme der Gravitation" verkaufen – das ist dieselbe Konstruktion wie die angeblichen Wissenschaftswunder im Koran.`,
    `Behaupten, kein einziger Kirchenvater habe an eine flache Erde geglaubt – Laktanz und Kosmas Indikopleustes taten es.`,
    `Die altorientalische Bildwelt der Texte bestreiten; ehrlicher ist, sie zuzugeben und die Aussageabsicht zu erklären.`,
  ],
  concessions: [
    `Die biblischen Autoren teilten sehr wahrscheinlich Vorstellungen des altorientalischen Weltbilds; Seely und Walton haben dafür gute Gründe.`,
    `Einige christliche Autoren der Spätantike (Laktanz, Severian von Gabala, Kosmas Indikopleustes) lehrten eine flache Erde.`,
    `Christen haben in der Geschichte immer wieder versucht, die Bibel als Naturkundebuch gegen die Wissenschaft auszuspielen – mit schädlichen Folgen für die Glaubwürdigkeit des Glaubens.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John H. Walton', work: 'The Lost World of Genesis One', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul H. Seely', work: '„The Firmament and the Water Above", Westminster Theological Journal 53–54', year: '1991–1992', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Hexaemeron', year: 'um 370', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Hannam', work: 'God\'s Philosophers: How the Medieval World Laid the Foundations of Modern Science', year: '2009', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Kosmologie', 'Firmament', 'raqia', 'Flache Erde', 'Alter Orient', 'Schriftauslegung', 'Kirchenväter'],
  related: [
    'kirchengeschichte-mythen/finsteres-mittelalter-flache-erde',
    'genesis/vaeter-lasen-woertlich',
    'genesis/genesis-von-babylon-kopiert',
    'islam-koran/koran-wissenschaftswunder',
    'kirchengeschichte-mythen/galilei',
    'bibel-naturkunde/josua-sonnenstillstand',
  ],
};

export default claim;
