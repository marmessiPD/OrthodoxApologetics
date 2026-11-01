import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'zoroastrismus-kopiert',
  title: `„Engel, Teufel, Gericht und Auferstehung stammen aus dem Zoroastrismus."`,
  proponents: [
    { name: 'Mary Boyce', role: 'Iranistin, School of Oriental and African Studies, London (1920–2006)', work: 'Zoroastrians: Their Religious Beliefs and Practices (1979); A History of Zoroastrianism (1975–1991)' },
    { name: 'Norman Cohn', role: 'Historiker (1915–2007)', work: 'Cosmos, Chaos and the World to Come: The Ancient Roots of Apocalyptic Faith (1993)' },
    { name: 'Richard Foltz', role: 'Religionshistoriker, Concordia University Montreal', work: 'Religions of Iran: From Prehistory to the Present (2013)' },
    { name: 'Populäre Religionskritik (Dokumentationen, YouTube-Kanäle)', role: 'Verbreitet die These in vereinfachter Form („Judentum und Christentum sind persisch geprägt")' },
  ],
  steelman: `Zarathustra (griech. Zoroaster) lehrte nach Ansicht vieler Iranisten lange vor dem babylonischen Exil einen kosmischen Kampf zwischen dem guten Gott Ahura Mazda und dem zerstörerischen Geist Angra Mainyu (Ahriman), ein Gericht über jede Seele an der „Brücke des Scheidenden", Himmel und Hölle, eine endzeitliche Erneuerung der Welt (*frašō.kərəti*), einen kommenden Retter (*Saošyant*) und die Auferstehung der Toten. Von 539 bis 332 v. Chr. lebten die Juden unter persischer Herrschaft; Kyrus wird in Jes 45,1 sogar „Gesalbter" genannt. Und genau in den Texten aus dieser Zeit tauchen die Dinge auf, die im älteren Israel fehlen: Engel mit Namen (Gabriel, Michael bei Daniel, Raphael bei Tobit), ein persönlicher Widersacher „Satan" (vergleiche 2 Sam 24,1 mit dem späteren 1 Chr 21,1), die Auferstehung zum ewigen Leben oder zur Schande (Dan 12,2), Weltgericht und ein Dualismus von Licht und Finsternis wie in Qumran. Selbst das Wort „Paradies" ist ein persisches Lehnwort. Mary Boyce nannte Zarathustra deshalb den ersten Propheten des individuellen Gerichts, von Himmel und Hölle, der Auferstehung und des Jüngsten Gerichts. Das Christentum hat diese Ideen vom Judentum geerbt – es ist also nicht göttlich offenbart, sondern religionsgeschichtlich gewachsen.`,
  biblical: {
    summary: `Die Grundbausteine sind in Israel älter als der Kontakt mit Persien: Engel begegnen schon in den Vätergeschichten (Gen 16; 19; 22; 28,12; 32), Cherubim in Gen 3,24, Seraphim in der Tempelvision Jesajas (Jes 6, 8. Jh. v. Chr.). Die listige, gottfeindliche Schlange steht am Anfang der Bibel (Gen 3), samt der Verheißung ihres Besiegtwerdens (Gen 3,15). Die Hoffnung, dass Gott Tote lebendig macht, klingt in 1 Sam 2,6 und Hos 6,2 an und wird bei Ezechiel (Ez 37) im babylonischen – nicht persischen – Exil zum großen Bild. Entscheidend ist der **inhaltliche Gegensatz**: Ausgerechnet in einem an Kyrus gerichteten Wort weist Gott jeden Dualismus zurück: „der ich das Licht mache und schaffe die Finsternis" (Jes 45,7). Der biblische Satan ist ein Geschöpf, das nur mit Gottes Zulassung handeln kann (Hi 1,12) – kein gleichrangiges Gegenprinzip.`,
    detail: `**Was sich tatsächlich entwickelt:** Die *Ausgestaltung* nimmt in nachexilischer Zeit zu – Engelnamen (Dan 8,16; 10,13; Tob 12,15), die klare Benennung des Widersachers (1 Chr 21,1; Sach 3,1–2), die ausdrückliche Auferstehung zum Gericht (Dan 12,2). Das ist ehrlich zuzugeben. Aber Entfaltung ist nicht Entlehnung: Die neuen Texte entfalten Linien, die im älteren Bestand bereits angelegt sind, und zwar im Rahmen eines strengen Monotheismus.

**Die Engel der Bibel sind keine Amesha Spentas:** Die „heiligen Unsterblichen" des Zoroastrismus (Vohu Manah – Guter Sinn, Asha – Wahrheit/Ordnung usw.) sind personifizierte Eigenschaften und Schöpfungen Ahura Mazdas, die selbst Verehrung empfangen. Biblische Engel sind Boten, die Anbetung ausdrücklich zurückweisen (Offb 19,10; 22,9). Ihre Namen sind hebräisch und theologisch: Mi-cha-El heißt „Wer ist wie Gott?", Gabri-El „Gott ist stark", Rapha-El „Gott heilt".

**Auferstehung aus dem Bundesglauben:** Die biblische Auferstehungshoffnung wächst aus dem Glauben an den Schöpfer, der Herr über Leben und Tod ist (1 Sam 2,6; Dtn 32,39), und an seine Bundestreue über den Tod hinaus (Ps 16,10; 49,16; 73,23–26). Die Mutter der sieben Brüder begründet sie in 2 Makk 7,28–29 mit der Schöpfung aus dem Nichts – ein typisch biblisches, kein persisches Argument.

**Das Paradies-Wort:** *pardēs* (Hld 4,13; Pred 2,5; Neh 2,8) ist tatsächlich ein persisches Lehnwort für „umfriedeter Park". Ein Lehnwort beweist Kontakt – nicht die Übernahme einer Lehre. Die Vorstellung vom Garten Gottes steht schon in Gen 2.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '45,7', quote: `der ich das Licht mache und schaffe die Finsternis, der ich Frieden gebe und schaffe das Übel. Ich bin der HERR, der solches alles tut.`, translation: 'Luther 1912', status: 'verbatim', note: 'Das Wort steht im Zusammenhang der Kyrus-Weissagung (Jes 44,28–45,7) – ausgerechnet dem Perser gegenüber wird jeder Dualismus zurückgewiesen.' },
      { kind: 'bibel', work: 'Hiob', ref: '1,12', quote: `Der HERR sprach zum Satan: Siehe, alles, was er hat, sei in deiner Hand; nur an ihn selbst lege deine Hand nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '28,12', quote: `Und ihm träumte; und siehe, eine Leiter stand auf der Erde, die rührte mit der Spitze an den Himmel, und siehe, die Engel Gottes stiegen daran auf und nieder.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '3,15', quote: `Und ich will Feindschaft setzen zwischen dir und dem Weibe und zwischen deinem Samen und ihrem Samen. Derselbe soll dir den Kopf zertreten, und du wirst ihn in die Ferse stechen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hosea', ref: '6,2', quote: `Er macht uns lebendig nach zwei Tagen; er wird uns am dritten Tage aufrichten, daß wir vor ihm leben werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Und viele, so unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '7,28–29', quote: `Die Mutter ermahnt ihren jüngsten Sohn, Himmel und Erde anzusehen und zu erkennen, dass Gott alles aus dem Nichts gemacht hat – darum werde er ihn in der Barmherzigkeit wieder schenken.`, status: 'paraphrase', note: 'Deuterokanonisch; in der koptischen Kirche Teil der Heiligen Schrift.' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt im Glaubensbekenntnis „die Auferstehung der Toten und das Leben der kommenden Welt" und lehrt, dass Gott Engel als gute Geistwesen geschaffen hat, von denen ein Teil unter Satan in Hochmut abfiel. Satan ist kein zweiter Gott, sondern ein gefallenes Geschöpf; das Böse hat kein eigenes Sein. Gerade Alexandrien hat diese Lehre gegen dualistische Systeme (Gnosis, später Manichäismus) scharf formuliert: Der hl. Athanasius weist in *Contra Gentes* die Vorstellung zurück, das Böse habe eine eigene Substanz, und in der *Vita Antonii* lässt er Antonius sagen, Gott habe nichts Böses geschaffen – auch die Dämonen seien nicht als Dämonen erschaffen worden.`,
    detail: `Die Kirche hat nie Angst vor Berührungspunkten mit anderen Religionen gehabt: Die ersten Nichtjuden, die Christus anbeten, sind die „Weisen aus dem Morgenland" (Mt 2,1–12) – nach verbreiteter Deutung persische Magier, also Priester gerade jener Religion, um die es hier geht. Die Väter sahen darin, dass Gott auch die Sehnsucht der Völker auf Christus hinlenkt. Irenäus las Ez 37 und Jes 26,19 als Zeugnisse der leiblichen Auferstehung, die der Gott Israels von Anfang an verheißen hat. Für die koptische Kirche ist die Auferstehung kein Import, sondern die Vollendung dessen, was Gott als Schöpfer und Bundesgott immer schon war: der Herr über Leben und Tod.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '6–7', quote: `Athanasius widerlegt die Ansicht, das Böse besitze ein eigenes Wesen oder einen eigenen Urheber neben Gott; es entsteht aus der Abwendung des Geschöpfs vom Guten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '22', quote: `Gott hat nichts Böses geschaffen; auch die Dämonen sind nicht als solche erschaffen, sondern durch eigene Abkehr böse geworden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'V,15,1', quote: `Irenäus führt Jes 26,19 und Ez 37 als prophetische Zeugnisse dafür an, dass Gott die Leiber der Toten auferwecken wird.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Frage ist in der Forschung **offen und umstritten**. Mary Boyce und Norman Cohn vertraten einen starken persischen Einfluss; James Barr, Edwin Yamauchi und andere halten ihn für unbewiesen oder überschätzt. Das Kernproblem ist die Quellenlage: Die Datierung Zarathustras schwankt zwischen etwa 1500 und 600 v. Chr. Das Avesta wurde mündlich überliefert und erst in sasanidischer Zeit (3.–7. Jh. n. Chr.) mit einem eigens geschaffenen Alphabet niedergeschrieben; die ältesten erhaltenen Handschriften stammen aus dem 14. Jahrhundert (1323). Die ausgeführte Endzeitlehre (Auferstehung, Weltbrand, Saošyant) findet sich systematisch erst in mittelpersischen Werken wie dem *Bundahischn* (9. Jh. n. Chr.).`,
    detail: `**Was als gesichert gelten kann:** Die *Gathas* (die Zarathustra selbst zugeschriebenen Hymnen) sind sprachlich sehr alt und kennen einen ethischen Gegensatz von Wahrheit (*aša*) und Lüge (*druj*) sowie ein Gericht über die Seele. Persische Lehnwörter (*pardēs*) und möglicherweise einzelne Namen sind in jüdische Texte eingegangen; viele Forscher sehen im Dämon Asmodäus (Tob 3,8) einen Anklang an den avestischen Dämon *Aēšma*.

**Was offen ist:** Ob die ausgeführte Auferstehungs- und Endzeitlehre schon in achämenidischer Zeit (539–330 v. Chr.) existierte, ist nicht belegt. Shaul Shaked und James Barr weisen darauf hin, dass die Einflussrichtung in sasanidischer Zeit auch umgekehrt verlaufen sein kann – Juden, Christen und Manichäer lebten damals im Perserreich. Barr verlangte für jede Einflussthese einen nachweisbaren **Mechanismus und ein Motiv**; bloße Ähnlichkeit genüge nicht. Yamauchi kam in *Persia and the Bible* (1990) zu dem Ergebnis, dass die Argumente für eine jüdische Abhängigkeit überwiegend auf späten Texten beruhen.`,
    sources: [
      { kind: 'gegner', author: 'Mary Boyce', work: 'Zoroastrians: Their Religious Beliefs and Practices', year: '1979', ref: 'Kap. 2', quote: `Zarathustra habe als Erster das individuelle Gericht, Himmel und Hölle, die künftige Auferstehung des Leibes, das Jüngste Gericht und das ewige Leben gelehrt; diese Lehren seien von anderen Religionen übernommen worden.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Norman Cohn', work: 'Cosmos, Chaos and the World to Come', year: '1993', quote: `Die apokalyptische Erwartung eines endgültigen Sieges über das Chaos gehe wesentlich auf Zarathustra zurück.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'James Barr', work: 'The Question of Religious Influence: The Case of Zoroastrianism, Judaism, and Christianity', ref: 'Journal of the American Academy of Religion 53/2 (1985), 201–235', year: '1985', quote: `Einflussthesen brauchen einen nachweisbaren Mechanismus und ein Motiv; Parallelen allein beweisen keine Abhängigkeit.`, status: 'paraphrase', url: 'https://doi.org/10.1093/jaarel/LIII.2.201' },
      { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Persia and the Bible', year: '1990', ref: 'Kap. „Zoroastrianism"', quote: `Die Belege für eine Abhängigkeit jüdischer Vorstellungen vom Zoroastrismus stammen weitgehend aus Texten, die viel später als das Alte Testament schriftlich fixiert wurden.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Engel, die gottfeindliche Schlange und die Hoffnung auf Auferweckung stehen schon in Texten, die älter sind als der Kontakt mit Persien (Gen 3; Gen 28; Jes 6; Hos 6; Ez 37 aus dem babylonischen Exil). Die persischen Quellen dagegen wurden erst über tausend Jahre später aufgeschrieben – wer von wem abhängt, ist darum gar nicht klar. Und inhaltlich ist die Bibel das Gegenteil von Dualismus: Satan ist ein gefallenes Geschöpf, kein zweiter Gott (Jes 45,7; Hi 1,12).`,
  keyPoints: [
    `**Chronologie:** Die zoroastrische Endzeitlehre ist ausführlich erst in Texten des 9. Jh. n. Chr. belegt; das Avesta wurde erst in sasanidischer Zeit verschriftet.`,
    `**Ältere Bibeltexte:** Engel (Gen 16; 28; Jes 6), die Schlange (Gen 3) und die Auferweckungshoffnung (1 Sam 2,6; Hos 6,2; Ez 37) gehen der Perserzeit voraus.`,
    `**Kein Dualismus:** Der biblische Satan ist Geschöpf und handelt nur mit Zulassung (Hi 1,12); Gott schafft „Licht und Finsternis" (Jes 45,7).`,
    `**Andere Engel:** Biblische Engel sind Boten mit hebräischen Gottesnamen und lehnen Anbetung ab – die Amesha Spentas sind verehrte Personifikationen göttlicher Eigenschaften.`,
    `**Ähnlichkeit ist kein Beweis:** Ohne Mechanismus, Motiv und gesicherte Datierung bleibt jede Einflussthese Spekulation (James Barr).`,
    `**Herkunft entscheidet nicht über Wahrheit:** Selbst ein Einfluss bei Begriffen würde die Frage nicht beantworten, ob Jesus auferstanden ist.`,
  ],
  argument: {
    name: 'Das Datierungsproblem der Abhängigkeitsthese',
    summary: 'Eine Abhängigkeit setzt voraus, dass die Quelle nachweislich älter ist als der abhängige Text – das ist hier nicht gegeben.',
    premises: [
      { text: 'P1: Die Behauptung „B hat von A übernommen" setzt voraus, dass A zur Zeit von B in der behaupteten Form existierte und B zugänglich war.', support: `Das ist die Grundregel jeder Einflussforschung (Barr 1985: Mechanismus und Motiv).` },
      { text: 'P2: Die ausgeführte zoroastrische Lehre von Auferstehung, Weltgericht und Retter ist erst in Texten aus sasanidischer und frühislamischer Zeit schriftlich belegt.', support: `Avesta-Verschriftung im 3.–7. Jh. n. Chr.; älteste Handschriften 1323; Bundahischn 9. Jh. Die Gathas enthalten diese Lehre nicht in ausgeführter Form.`, sources: [{ kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Persia and the Bible', year: '1990', quote: `Die zoroastrischen Quellen für die Endzeitlehre sind spät.`, status: 'paraphrase' }] },
      { text: 'P3: Die biblischen Kernelemente (Engel, Widersacher, Auferweckungshoffnung) sind in vorexilischen bzw. exilischen Texten angelegt.', support: `Gen 3; Gen 28,12; Jes 6; 1 Sam 2,6; Hos 6,2; Ez 37.` },
    ],
    conclusion: 'Die These „aus dem Zoroastrismus kopiert" ist nicht bewiesen; denkbar sind Einflüsse auf Begriffe und Bilder, nicht aber auf die Grundüberzeugungen, die älter sind.',
  },
  voices: [
    {
      person: 'edwin-yamauchi',
      role: 'als Althistoriker für Persien und die Bibel',
      text: `Yamauchi hat die persischen Quellen und ihre Datierung in *Persia and the Bible* ausführlich geprüft. Er weist darauf hin, dass die These einer jüdischen Abhängigkeit meist mit Material aus mittelpersischen Schriften des 9. Jahrhunderts n. Chr. arbeitet, das man stillschweigend in die Zeit vor dem Exil zurückprojiziert. Wer so argumentiert, müsste erst zeigen, dass diese Lehren in achämenidischer Zeit schon in dieser Form existierten – genau das gelingt nicht.`,
      sources: [{ kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Persia and the Bible', year: '1990', quote: `Kritische Prüfung der Behauptung zoroastrischer Einflüsse auf Judentum und Christentum.`, status: 'paraphrase' }],
    },
    {
      person: 'james-barr',
      role: 'als Alttestamentler und Methodenkritiker',
      text: `Barr, kein konservativer Apologet, sondern ein kritischer Alttestamentler, untersuchte 1985 die Einflussfrage nüchtern. Er räumt echte Berührungen ein, verlangt aber für jede Abhängigkeitsthese einen konkreten Weg, auf dem die Idee übertragen wurde, und einen Grund, warum die Empfänger sie übernommen hätten. Bloße Strukturähnlichkeiten genügen nicht – zumal die Unterschiede (strikter Monotheismus, Satan als Geschöpf) tief gehen.`,
      sources: [{ kind: 'fachliteratur', author: 'James Barr', work: 'The Question of Religious Influence', ref: 'JAAR 53 (1985), 201–235', quote: `Parallelen ohne Mechanismus und Motiv beweisen keine Abhängigkeit.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Schöpfung gegen dualistische Systeme',
      text: `Athanasius kannte dualistische Weltbilder aus nächster Nähe. In *Contra Gentes* zeigt er, dass das Böse kein eigenes Prinzip neben Gott sein kann: Gäbe es zwei gleich ursprüngliche Mächte, gäbe es keinen einen Schöpfer und keine verlässliche Ordnung. Das Böse ist Abkehr vom Guten, kein zweites Sein. Damit formuliert er genau den Unterschied, der Zarathustras Dualismus von der Bibel trennt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '6–7', quote: `Das Böse hat keine eigene Substanz und keinen eigenen Urheber neben Gott.`, status: 'paraphrase' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der frühen Auferstehungstheologie',
      text: `Irenäus verteidigt um 180 die Auferstehung des Fleisches gegen die Gnostiker. Seine Belege sind nicht persisch, sondern die Propheten Israels: Jesaja („Deine Toten werden leben") und Ezechiels Vision der Totengebeine. Für ihn ist die Auferstehung die Konsequenz des Schöpfers: Wer den Menschen aus Erde gebildet hat, kann ihn auch wieder lebendig machen.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'V,15,1', quote: `Jes 26,19 und Ez 37 als Verheißung der leiblichen Auferstehung.`, status: 'paraphrase' }],
    },
    {
      person: 'corduan',
      role: 'als Religionswissenschaftler',
      text: `Corduan, der die Weltreligionen vergleichend darstellt, warnt davor, Ähnlichkeiten automatisch als Abhängigkeit zu deuten. Religionen, die sich auf den einen Schöpfergott, auf Gut und Böse und auf Gerechtigkeit beziehen, kommen notwendig zu verwandten Fragen. Er hält die Annahme für plausibel, dass hinter vielen Religionen ein ursprüngliches Wissen um einen höchsten Gott steht, das unterschiedlich bewahrt und verformt wurde.`,
      sources: [{ kind: 'fachliteratur', author: 'Winfried Corduan', work: 'In the Beginning God: A Fresh Look at the Case for Original Monotheism', year: '2013', quote: `Verteidigung der These eines ursprünglichen Monotheismus als Erklärung religionsgeschichtlicher Gemeinsamkeiten.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'engel-erst-nach-exil',
      objection: `Engel mit Namen, Engelhierarchien, Erzengel – das alles taucht erst nach dem Exil auf, bei Daniel und Tobit. Vorher gab es in Israel so etwas nicht.`,
      objectionBy: 'Mary Boyce / populäre Religionskritik',
      answer: `Engel gibt es von den Vätergeschichten an: Hagar begegnet dem Engel des Herrn (Gen 16), Engel besuchen Abraham und Lot (Gen 18–19), Jakob sieht sie auf der Himmelsleiter (Gen 28,12), Jesaja schaut Seraphim (Jes 6). Was später hinzukommt, sind Namen und Details – das ist Entfaltung, nicht Erfindung. Und schon in Ri 13,18 fragt Manoach den Engel nach seinem Namen.`,
      detail: `Selbst wenn man der kritischen Datierung des Pentateuch folgt, ist Jes 6 eine Vision aus dem Todesjahr des Königs Usija (um 740 v. Chr.) – zwei Jahrhunderte vor Kyrus. Auch im übrigen Alten Orient (Ugarit, Mesopotamien, Ägypten) sind himmlische Thronräte und göttliche Boten lange vor dem Perserreich belegt; Israel brauchte dafür keinen persischen Lehrer.`,
      sources: [{ kind: 'bibel', work: 'Jesaja', ref: '6,1–2', quote: `In dem Jahr, da der König Usia starb, sah ich den HERRN sitzen auf einem hohen und erhabenen Stuhl … Seraphim standen über ihm.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase' }],
      questionsBack: [`Wie erklärst du die Seraphim in Jes 6, die zwei Jahrhunderte vor dem Perserreich datieren?`],
      followUps: [
        {
          id: 'daniel-spaet',
          objection: `Daniel ist ohnehin erst um 165 v. Chr. entstanden. Seine Engelnamen Gabriel und Michael sind also klar nachpersisch.`,
          objectionBy: 'Historisch-kritische Forschung (z. B. John J. Collins)',
          answer: `Selbst wenn ich dir die Spätdatierung zugestehe: Die Namen sind hebräisch und theologisch – Mi-cha-El heißt „Wer ist wie Gott?", Gabri-El „Gott ist stark". Das sind Bekenntnisse zum einen Gott Israels, keine persischen Gottheiten in neuem Gewand. Und die Funktion – Bote und Schutzengel eines Volkes – kennt schon Dtn 32,8 (LXX) und Ex 23,20.`,
          detail: `Die Datierung Daniels ist ein eigenes Thema (siehe Querverweis). Für unsere Frage ist sie zweitrangig: Auch ein Text von 165 v. Chr. kann nur dann persisch beeinflusst sein, wenn die angebliche persische Vorlage zu dieser Zeit in dieser Form existierte – und das ist für die Amesha Spentas als „Erzengel" nicht belegt.`,
          followUps: [
            {
              id: 'sieben-erzengel-amesha',
              objection: `Tobit spricht von „sieben heiligen Engeln" (Tob 12,15). Der Zoroastrismus hat sieben Amesha Spentas. Das ist doch offensichtlich dieselbe Struktur!`,
              objectionBy: 'Richard Foltz',
              answer: `Die Zahl Sieben ist im ganzen Alten Orient heilig – von den sieben Schöpfungstagen über den siebenarmigen Leuchter bis zu mesopotamischen Siebenergruppen. Inhaltlich passen die beiden nicht zusammen: Die Amesha Spentas sind personifizierte Eigenschaften Ahura Mazdas („Guter Sinn", „Wahrheit", „Fromme Ergebenheit") und werden verehrt. Raphael dagegen sagt: „Lobt Gott!" (Tob 12,17–18) und lehnt jede Ehre für sich ab.`,
              sources: [{ kind: 'bibel', work: 'Tobit', ref: '12,15–18', quote: `Raphael gibt sich als einer der sieben heiligen Engel zu erkennen, die vor Gott stehen, und fordert Tobit und Tobias auf, nicht ihn, sondern Gott zu preisen.`, status: 'paraphrase', note: 'Deuterokanonisch; in der koptischen Kirche Teil der Schrift.' }],
              followUps: [
                {
                  id: 'parallelen-haeufen-sich',
                  objection: `Einzeln mag jede Parallele erklärbar sein. Aber sie häufen sich: Engel, Satan, Gericht, Auferstehung, Paradies, Retter – alle zur selben Zeit. Das ist ein kumulatives Argument.`,
                  objectionBy: 'Norman Cohn',
                  answer: `Ein kumulatives Argument ist nur so stark wie seine Datierungen – und die fehlen gerade auf der persischen Seite. Zehn Parallelen zu Texten, die erst tausend Jahre später aufgeschrieben wurden, ergeben keinen Beweis, sondern zehn offene Fragen. James Barr hat darum gefordert, für jede Einflussthese Mechanismus und Motiv anzugeben. Außerdem: Die gemeinsamen Themen sind genau die, die jeder ernsthafte Monotheismus behandeln muss – Gut und Böse, Gericht, Zukunft.`,
                  detail: `Es gibt eine weitere Möglichkeit, die Befürworter selten nennen: Die zoroastrische Endzeitlehre kann sich in sasanidischer Zeit selbst im Gespräch mit Judentum, Christentum und Manichäismus weiterentwickelt haben. Shaul Shaked und Barr halten diese umgekehrte oder wechselseitige Beeinflussung für ernsthaft erwägenswert.`,
                  questionsBack: [`Welcher konkrete persische Text, der sicher vor 400 v. Chr. datiert, lehrt die leibliche Auferstehung aller Toten?`, `Wie schließt du aus, dass die späten persischen Texte von Juden und Christen beeinflusst wurden?`],
                },
              ],
            },
          ],
        },
        {
          id: 'asmodaeus-aeshma',
          objection: `Ihr habt ja selbst den Dämon Asmodäus im Buch Tobit – das ist der persische Aēšma-Dämon. Eure eigene Bibel zeigt den persischen Einfluss!`,
          objectionBy: 'Religionswissenschaftliche Kommentare zu Tobit',
          answer: `Das ist gut möglich, und ich gebe es gerne zu: Tobit spielt in der östlichen Diaspora, und ein Name kann aus der Umgebung stammen. Aber ein übernommener Name ist kein übernommenes Weltbild. Im Buch Tobit ist der Dämon völlig machtlos gegenüber Gott und wird durch Gebet und den Engel Raphael vertrieben – das ist biblischer Monotheismus mit einem Lehnwort.`,
          questionsBack: [`Wenn ein Deutscher „Paradies" sagt – hat er dann die persische Religion übernommen?`],
        },
      ],
    },
    {
      id: 'satan-ist-ahriman',
      objection: `Im alten Israel war Gott für Gutes und Böses zuständig. Erst unter persischem Einfluss wird ein eigener Widersacher erfunden – Satan ist Ahriman mit hebräischem Namen.`,
      objectionBy: 'Norman Cohn / populäre Religionskritik',
      answer: `Der Unterschied ist grundlegend: Ahriman ist im Zoroastrismus ein eigenes, nicht von Ahura Mazda geschaffenes zerstörerisches Prinzip. Der biblische Satan ist ein Geschöpf, das vor Gott erscheinen muss und nur so weit handeln darf, wie Gott es zulässt (Hi 1,12). Und ausgerechnet in der Kyrus-Weissagung sagt Gott: „Ich mache das Licht und schaffe die Finsternis" (Jes 45,7) – eine direkte Absage an den Dualismus.`,
      sources: [{ kind: 'bibel', work: 'Hiob', ref: '1,6', quote: `Es begab sich aber auf einen Tag, da die Kinder Gottes kamen und vor den HERRN traten, kam der Satan auch unter ihnen.`, translation: 'Luther 1912', status: 'verbatim' }],
      followUps: [
        {
          id: 'chronik-ersetzt-gott',
          objection: `2 Sam 24,1 sagt, Gott habe David zur Volkszählung gereizt. Der spätere Chronist (1 Chr 21,1) schreibt stattdessen „Satan". Da sieht man, wie man Gott unter persischem Einfluss vom Bösen entlastet hat.`,
          objectionBy: 'Bart Ehrman / Norman Cohn',
          answer: `Der Chronist ersetzt nicht Gott durch einen zweiten Gott, sondern nennt das Werkzeug, durch das Gott handelt – so wie das Buch Hiob beides zusammen sagt: Gott lässt zu, Satan führt aus. Beide Aussagen stehen im Kanon nebeneinander, weil sie sich ergänzen. Ein Dualismus wäre es erst, wenn Satan unabhängig von Gott wirkte – das sagt der Chronist gerade nicht.`,
          sources: [{ kind: 'bibel', work: '1. Chronik', ref: '21,1', quote: `Und der Satan stand wider Israel und reizte David, daß er Israel zählen ließe.`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'schlange-nicht-satan',
              objection: `Die Schlange in Gen 3 ist ein Tier, keine Teufelsgestalt. Dass sie Satan sei, liest man erst viel später hinein – in der Weisheit Salomos und in der Offenbarung.`,
              objectionBy: 'Alttestamentliche Fachexegese',
              answer: `Richtig ist: Die ausdrückliche Gleichsetzung steht erst in Weish 2,24 und Offb 12,9. Aber schon in Gen 3 ist die Schlange kein gewöhnliches Tier: Sie spricht, kennt Gottes Gebot, verdreht es, stellt Gott als Lügner hin und steht unter einem Fluch, der eine endgültige Feindschaft und ihren Sieger ankündigt (Gen 3,15). Die spätere Deutung entfaltet, was der Text andeutet. Und die Weisheit Salomos stammt aus dem jüdischen Alexandrien – nicht aus Persien.`,
              sources: [
                { kind: 'bibel', work: 'Weisheit Salomos', ref: '2,24', quote: `Aber durch des Teufels Neid ist der Tod in die Welt gekommen.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Offenbarung', ref: '12,9', quote: `Und es ward ausgeworfen der große Drache, die alte Schlange, die da heißt der Teufel und Satanas, der die ganze Welt verführt.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'entfaltung-ausrede',
                  objection: `„Entfaltung" ist eine bequeme Ausrede. Jede Religion kann im Nachhinein behaupten, ihre neuen Lehren seien im Alten schon „angelegt" gewesen.`,
                  objectionBy: 'Religionskritiker',
                  answer: `Es gibt ein Prüfkriterium: Ergänzt die spätere Lehre das Frühere oder widerspricht sie ihm? Eine Eichel wird zur Eiche, nicht zur Tanne. Die biblische Satanslehre bleibt in jeder Stufe monotheistisch: Satan ist Geschöpf, Gott ist souverän. Ein persischer Import hätte gerade das verändert – einen gleichrangigen Gegengott eingeführt. Genau das geschieht nicht.`,
                  detail: `Vinzenz von Lérins formulierte im 5. Jahrhundert die Regel, dass echter Fortschritt in der Lehre ein Wachstum derselben Sache ist (*profectus*), keine Verwandlung in etwas anderes (*permutatio*). Dieses Kriterium ist überprüfbar: Man vergleicht Kernaussagen früher und später Texte.`,
                  voices: [{ person: 'vinzenz-lerin', role: 'als Lehrer der Lehrentwicklung', text: `Vinzenz unterscheidet Wachstum von Veränderung: Ein Kind wird zum Mann und bleibt doch derselbe Mensch. So darf auch das Verständnis des Glaubens wachsen, solange es derselbe Glaube im selben Sinn bleibt.`, sources: [{ kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '23', quote: `Fortschritt im Glauben ist Wachstum derselben Sache, nicht ihre Verwandlung in etwas anderes.`, status: 'paraphrase' }] }],
                  questionsBack: [`Kannst du eine Stelle nennen, an der die Bibel Satan als ungeschaffenes, Gott gleichrangiges Prinzip darstellt?`],
                },
              ],
            },
          ],
        },
        {
          id: 'sacharja-perserzeit',
          objection: `Sacharja 3, wo Satan als Ankläger auftritt, stammt genau aus der Perserzeit (um 520 v. Chr.). Das passt perfekt zur Einflussthese.`,
          objectionBy: 'Religionsgeschichtliche Forschung',
          answer: `Um 520 v. Chr. war die persische Herrschaft gerade 20 Jahre alt – eine sehr kurze Zeit für die Übernahme eines ganzen Weltbildes. Und auch in Sach 3 ist Satan ein Ankläger im himmlischen Gericht, den Gott zurechtweist: „Der HERR schelte dich, du Satan!" (Sach 3,2). Wieder: Geschöpf unter Gottes Hoheit, kein Gegengott.`,
          questionsBack: [`Wer ist in Sach 3 der Herr des Verfahrens – Satan oder Gott?`],
        },
      ],
    },
    {
      id: 'auferstehung-persisch',
      objection: `Das alte Israel kannte nur das Schattenreich, die Scheol. Die Auferstehung taucht erst in Dan 12,2 auf – nach Jahrhunderten persischer Herrschaft. Woher sonst sollte sie kommen?`,
      objectionBy: 'Mary Boyce / Bart Ehrman',
      answer: `Die Scheol-Vorstellung ist richtig beschrieben – aber daneben steht schon früh die Hoffnung, dass Gott Tote lebendig macht: „Der HERR tötet und macht lebendig" (1 Sam 2,6), „am dritten Tage wird er uns aufrichten" (Hos 6,2). Ezechiel schaut die Auferweckung der Totengebeine (Ez 37) im babylonischen Exil, also **vor** der persischen Herrschaft. Die Auferstehung wächst aus dem Glauben an den Schöpfer, der Herr über den Tod ist.`,
      sources: [
        { kind: 'bibel', work: '1. Samuel', ref: '2,6', quote: `Der HERR tötet und macht lebendig, führt in die Hölle und wieder heraus.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Hiob', ref: '19,25–26', quote: `Ich weiß, dass mein Erlöser lebt … und ich werde Gott sehen.`, translation: 'sinngemäß nach Luther 1912', status: 'paraphrase', note: 'Der hebräische Text von V. 26 ist schwierig; Übersetzungen schwanken zwischen „in meinem Fleisch" und „ohne mein Fleisch".' },
      ],
      followUps: [
        {
          id: 'ez-37-metapher',
          objection: `Ez 37 ist doch ausdrücklich ein Bild für die Wiederherstellung des Volkes – „diese Gebeine sind das ganze Haus Israel" (37,11). Von individueller Auferstehung ist keine Rede.`,
          objectionBy: 'Alttestamentliche Fachexegese',
          answer: `Das stimmt für die Hauptaussage. Aber ein Bild funktioniert nur, wenn es denkbar ist: Ezechiel verwendet die Auferweckung von Toten als Bild für Gottes Macht – das setzt voraus, dass man Gott dies zutraut. Spätere jüdische und christliche Leser, etwa Irenäus, haben darin zu Recht auch die leibliche Auferstehung angekündigt gesehen. Jes 26,19 und Dan 12,2 führen diese Linie weiter.`,
          sources: [{ kind: 'bibel', work: 'Jesaja', ref: '26,19', quote: `Aber deine Toten werden leben und mit dem Leichnam auferstehen. Wachet auf und rühmet, die ihr liegt unter der Erde!`, translation: 'Luther 1912', status: 'verbatim' }],
          followUps: [
            {
              id: 'jesaja-apokalypse-spaet',
              objection: `Die sogenannte Jesaja-Apokalypse (Jes 24–27) wird von vielen Forschern spät datiert, in persische oder hellenistische Zeit. Also wieder nachpersisch.`,
              objectionBy: 'Historisch-kritische Forschung',
              answer: `Die Datierung von Jes 24–27 ist tatsächlich umstritten – die Vorschläge reichen vom 8. bis ins 2. Jahrhundert v. Chr. Aber genau das ist der Punkt: Mit zwei unsicheren Datierungen lässt sich keine Abhängigkeit beweisen. Die persischen Belege für eine leibliche Auferstehung sind ihrerseits spät. Wer hier „Kopie" sagt, behauptet mehr, als die Quellen tragen.`,
              followUps: [
                {
                  id: 'boyce-muendlich-alt',
                  objection: `Mary Boyce hat gezeigt, dass die zoroastrischen Priester ihre Texte jahrhundertelang mündlich treu überliefert haben – wie die Veden. Späte Verschriftung heißt nicht späte Lehre.`,
                  objectionBy: 'Mary Boyce',
                  answer: `Das ist ein fairer Einwand, und für die Gathas selbst ist er berechtigt – sie sind sprachlich sehr alt. Aber gerade die Gathas enthalten die ausgeführte Lehre von der leiblichen Auferstehung und dem Weltende nicht in der Form, die man der Bibel als Vorlage unterstellt. Die entwickelte Endzeitlehre steht im jüngeren Avesta und vor allem in den mittelpersischen Büchern – und dort ist eine Weiterentwicklung in sasanidischer Zeit, auch im Gespräch mit Juden und Christen, gut möglich.`,
                  detail: `Ehrlicherweise lässt sich nicht ausschließen, dass einzelne Bilder schon in achämenidischer Zeit bekannt waren. Für die apologetische Frage genügt aber: Die Behauptung, die biblische Auferstehungshoffnung sei *kopiert*, ist nicht bewiesen; ihre Wurzeln im Glauben an den Schöpfer und Bundesgott sind dagegen im Alten Testament selbst greifbar.`,
                  questionsBack: [`Welche Gatha-Strophe lehrt die Auferstehung des Leibes aller Toten am Ende der Zeit?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'herkunft-entwertet',
      objection: `Selbst wenn nicht alles kopiert ist – die Ähnlichkeiten zeigen, dass das Christentum aus menschlichen Ideen der Antike zusammengesetzt ist. Warum sollte ausgerechnet es göttlich offenbart sein?`,
      objectionBy: 'Religionskritiker',
      answer: `Woher eine Idee stammt, entscheidet nicht, ob sie wahr ist – das wäre ein genetischer Fehlschluss. Das Christentum steht und fällt nicht mit der Herkunft des Wortes „Paradies", sondern mit einem geschichtlichen Ereignis: der Auferstehung Jesu. Eine allgemeine Auferstehung am Weltende, wie sie Zoroastrier erwarten, erklärt nicht, warum Juden behaupteten, ein einzelner Gekreuzigter sei *mitten in der Geschichte* auferstanden und sein Grab sei leer.`,
      followUps: [
        {
          id: 'mythos-wurde-tatsache',
          objection: `Und C. S. Lewis' „Mythos wurde Tatsache" – also Gott habe die Völker auf Christus vorbereitet – ist eine Immunisierungsstrategie. Jede Parallele wird so zum Beweis für euch.`,
          objectionBy: 'Religionskritiker',
          answer: `Lewis' These ist nicht unwiderlegbar, sondern hängt an einer prüfbaren Behauptung: Ist Jesus wirklich auferstanden? Wenn nein, sind die Parallelen nur Parallelen. Wenn ja, ist es nicht seltsam, dass Gott die Sehnsucht der Völker vorbereitet hat. Und die Bibel selbst erzählt das so: Die ersten Nichtjuden an der Krippe sind Weise aus dem Morgenland – vermutlich persische Magier (Mt 2,1–2).`,
          sources: [{ kind: 'bibel', work: 'Matthäus', ref: '2,1–2', quote: `… siehe, da kamen die Weisen vom Morgenlande gen Jerusalem und sprachen: Wo ist der neugeborene König der Juden? Wir haben seinen Stern gesehen im Morgenlande und sind gekommen, ihn anzubeten.`, translation: 'Luther 1912', status: 'verbatim' }],
          voices: [{ person: 'cs-lewis', role: 'als Literaturwissenschaftler und Kenner der Mythen', text: `Lewis kannte die Mythen der Völker aus seiner Fachwissenschaft. Er argumentierte, dass im Christentum der Mythos vom sterbenden und wiederkehrenden Gott „Tatsache geworden" sei: an einem datierbaren Ort, unter Pontius Pilatus. Die Ähnlichkeit ist für ihn kein Einwand, sondern das, was man erwarten würde, wenn Gott in der Geschichte handelt.`, sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Myth Became Fact', ref: 'in: God in the Dock (Sammelband, 1970)', year: '1944', quote: `Der alte Mythos vom sterbenden Gott ist in Christus in die Geschichte eingetreten – ohne aufzuhören, Mythos zu sein, wurde er Tatsache.`, status: 'paraphrase' }] }],
          questionsBack: [`Welche Erklärung hast du für das leere Grab und die Erscheinungen, die die Jünger bezeugten?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher persische Text, der sicher vor dem 4. Jh. v. Chr. datiert, lehrt die leibliche Auferstehung aller Toten?`,
    `Wie erklärst du Engel in Gen 28 und Jes 6 oder Ez 37, die vor der persischen Herrschaft entstanden sind?`,
    `Ist der biblische Satan ein ungeschaffenes Gegenprinzip – oder ein Geschöpf, das Gott um Erlaubnis bitten muss (Hi 1)?`,
    `Wie schließt du aus, dass die späten mittelpersischen Texte selbst von Juden und Christen beeinflusst wurden?`,
    `Selbst wenn ein Begriff persisch wäre – was sagt das darüber, ob Jesus auferstanden ist?`,
  ],
  avoid: [
    `„Zarathustra hat von der Bibel abgeschrieben." – Ebenso unbewiesen wie die Gegenthese; behaupte keine Abhängigkeit in die andere Richtung.`,
    `„Zarathustra lebte erst um 600 v. Chr., also nach Mose." – Die Datierung ist offen; viele Iranisten setzen ihn deutlich früher an. Baue nicht auf eine bestimmte Zahl.`,
    `Alle Ähnlichkeiten pauschal bestreiten – das Lehnwort *pardēs* oder der Name Asmodäus zeigen echten Kontakt. Gib das zu.`,
    `Den Zoroastrismus abwerten – er ist eine ehrwürdige Religion mit hoher Ethik („gute Gedanken, gute Worte, gute Taten"); seine Gemeinden (Parsen) leben heute als kleine Minderheit.`,
  ],
  concessions: [
    `Die Ausgestaltung der Engel- und Endzeitlehre nimmt in nachexilischer Zeit deutlich zu; Kontakt mit persischer Kultur ist belegt (Lehnwörter, vermutlich der Name Asmodäus).`,
    `Die Gathas sind alt; eine sehr frühe Datierung Zarathustras ist in der Forschung gut vertreten.`,
    `Die Datierung mancher alttestamentlicher Texte (Hiob, Jes 24–27, Daniel) ist umstritten – auch auf christlicher Seite gibt es keine einfache Zahl.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Edwin M. Yamauchi', work: 'Persia and the Bible', year: '1990', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Barr', work: 'The Question of Religious Influence: The Case of Zoroastrianism, Judaism, and Christianity', ref: 'JAAR 53 (1985), 201–235', status: 'paraphrase' },
    { kind: 'gegner', author: 'Mary Boyce', work: 'Zoroastrians: Their Religious Beliefs and Practices', year: '1979', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Winfried Corduan', work: 'Neighboring Faiths', year: '2. Aufl. 2012', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Zoroastrismus', 'Parsen', 'Engel', 'Satan', 'Auferstehung', 'Religionsgeschichte', 'Perserzeit'],
  related: [
    'antike-parallelen/jesus-kopie-horus-mithras',
    'genesis/genesis-von-babylon-kopiert',
    'prophetie/daniel-spaetdatierung',
    'weitere-religionen/religion-aus-animismus',
    'tod-seele-auferstehung/leibliche-auferstehung-unmoeglich',
  ],
};

export default claim;
