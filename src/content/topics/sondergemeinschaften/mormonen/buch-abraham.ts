import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'buch-abraham',
  title: `„Das Buch Abraham ist eine Übersetzung ägyptischer Papyri."`,
  proponents: [
    { name: 'Joseph Smith Jr.', role: 'Gründer der HLT-Kirche', work: 'Buch Abraham (Times and Seasons, 1842; kanonisiert in der Köstlichen Perle 1880)' },
    { name: 'Hugh Nibley', role: 'HLT-Gelehrter, BYU (1910–2005)', work: 'The Message of the Joseph Smith Papyri: An Egyptian Endowment (1975)' },
    { name: 'John Gee', role: 'HLT-Ägyptologe, Brigham Young University', work: 'An Introduction to the Book of Abraham (2017)' },
    { name: 'Kerry Muhlestein', role: 'HLT-Ägyptologe, Brigham Young University', work: 'Arbeiten zur Verteidigung des Buches Abraham' },
    { name: 'Kirche Jesu Christi der HLT', role: 'Offizielle Position', work: 'Gospel Topics Essay „Translation and Historicity of the Book of Abraham" (2014)' },
  ],
  steelman: `1835 erwarb Joseph Smith von dem Händler Michael Chandler ägyptische Mumien und Papyri und erklärte, eine der Rollen enthalte Schriften des Patriarchen Abraham. Die Übersetzung erschien 1842 mit drei Faksimiles und wurde 1880 Teil der HLT-Schrift. Als 1966/67 Fragmente der Papyri im Metropolitan Museum of Art in New York wiederentdeckt wurden, waren es nur Bruchstücke; der größte Teil der Sammlung ging wahrscheinlich 1871 beim großen Brand von Chicago verloren. Der Text Abrahams könnte auf einem verlorenen Teil gestanden haben. Oder die Papyri dienten als „Katalysator": Joseph Smith empfing durch die Beschäftigung mit ihnen eine Offenbarung, ohne wörtlich zu übersetzen. Das Buch Abraham enthält zudem Details, die in alten jüdischen und apokryphen Traditionen auftauchen – etwa dass Abraham von götzendienerischen Priestern geopfert werden sollte. Auch Ägyptologen sind sich über die Deutung mancher Vignetten nicht einig. Und HLT-Ägyptologen wie John Gee und Kerry Muhlestein verteidigen die Echtheit des Buches mit Fachwissen.`,
  biblical: {
    summary: `Die Bibel misst Propheten an überprüfbaren Aussagen: Was sich nicht erfüllt oder nicht stimmt, hat der HERR nicht geredet (Dtn 18,22). Jesus sagt: „Glaubt ihr nicht, wenn ich euch von irdischen Dingen sage, wie würdet ihr glauben, wenn ich euch von himmlischen Dingen sagte?" (Joh 3,12) – wer in Prüfbarem zuverlässig ist, verdient Vertrauen im Unprüfbaren (Lk 16,10). Inhaltlich widerspricht das Buch Abraham der Bibel: Es spricht von „den Göttern", die die Welt aus vorhandenem Stoff „organisierten" (Abraham 4–5), während Gott nach der Schrift allein und aus dem Nichts erschafft (Gen 1,1; Jes 44,24; Hebr 11,3).`,
    detail: `Die Überschrift des Buches Abraham erhebt einen klaren, prüfbaren Anspruch: „Eine Übersetzung einiger alter Urkunden, die aus den Katakomben Ägyptens in unsere Hände gelangt sind. Die Schriften Abrahams, als er in Ägypten war, genannt das Buch Abraham, von seiner eigenen Hand auf Papyrus geschrieben." Die Genesis kennt keinen Versuch ägyptischer oder chaldäischer Priester, Abraham zu opfern; solche Erzählungen finden sich in späteren jüdischen Legenden (etwa von Nimrods Feuerofen), die im 19. Jahrhundert auch auf Englisch zugänglich waren.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '18,22', quote: `wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '3,12', quote: `Glaubet ihr nicht, wenn ich euch von irdischen Dingen sage, wie würdet ihr glauben, wenn ich euch von himmlischen Dingen sagen würde?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '44,24', quote: `Ich bin der HERR, der alles tut, der den Himmel ausbreitet allein und die Erde weit macht ohne Gehilfen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', work: 'Köstliche Perle, Buch Abraham', ref: 'Überschrift', quote: `Die Schriften Abrahams, als er in Ägypten war, genannt das Buch Abraham, von seiner eigenen Hand auf Papyrus geschrieben.`, original: `The writings of Abraham while he was in Egypt, called the Book of Abraham, written by his own hand, upon papyrus.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die wiederentdeckten Fragmente wurden von Ägyptologen eindeutig identifiziert: Es handelt sich um ägyptische **Totentexte** – ein „Buch vom Atmen" (Book of Breathings) für einen Priester namens **Hor** sowie Abschnitte aus dem **Totenbuch** für Frauen namens Ta-scherit-Min und Neferirtnub. Sie stammen aus der späten Ptolemäer- bzw. frühen Römerzeit, rund 1500 Jahre nach Abraham. Faksimile 1 ist die Vignette des Hor-Papyrus, die sich unter den wiederentdeckten Fragmenten befindet: eine Szene des Osiris auf der Löwenbahre mit Anubis – keine Opferung Abrahams. Faksimile 2 ist ein Hypokephalus (Kopfscheibe für Mumien), Faksimile 3 eine Darstellung vor dem thronenden Osiris, bei der die Beischriften die Figuren benennen. Smiths Deutungen der Figuren (z. B. die Göttin Isis als „König Pharao") stimmen nicht.`,
    detail: `Die HLT-Kirche räumt in ihrem Essay (2014) ein, dass auf den Fragmenten weder Abrahams Name noch Ereignisse des Buches Abraham erwähnt werden und dass mormonische und nicht-mormonische Ägyptologen übereinstimmen, dass die Zeichen nicht zur Übersetzung passen; sie datiert die Papyri zwischen das 3. Jahrhundert v. Chr. und das 1. Jahrhundert n. Chr. Als Erklärungen nennt der Essay die Theorie eines verlorenen Teils und die Katalysator-Theorie.

Schon 1912 legte Bischof Franklin S. Spalding die Faksimiles führenden Ägyptologen vor (darunter Flinders Petrie, James Breasted und Archibald Sayce); sie wiesen Smiths Deutungen einhellig zurück. 1968 veröffentlichte der Chicagoer Ägyptologe Klaus Baer eine Übersetzung des Hor-Papyrus; 2011 legte Robert Ritner eine vollständige Edition vor. Die sogenannten „Kirtland Egyptian Papers" – Arbeitspapiere aus Smiths Umfeld – stellen Zeichen aus dem erhaltenen Hor-Papyrus neben Verse aus Abraham 1–2; das spricht dafür, dass man den Text damals aus genau diesem Papyrus abzuleiten glaubte.

**Ehrlich zu den HLT-Argumenten:** Über Details der Vignetten (Ergänzungen fehlender Teile in Faksimile 1, Deutung einzelner Figuren) diskutieren Fachleute tatsächlich; die Sammlung war ursprünglich größer als die erhaltenen Fragmente.`,
    sources: [
      { kind: 'gegner', author: 'Kirche Jesu Christi der HLT', work: 'Gospel Topics Essay „Translation and Historicity of the Book of Abraham"', year: '2014', quote: `Keines der Zeichen auf den Papyrusfragmenten erwähne Abrahams Namen oder Ereignisse des Buches Abraham; mormonische und nicht-mormonische Ägyptologen stimmten überein, dass die Zeichen nicht zur Übersetzung passen.`, status: 'paraphrase', note: 'Englischen Originalwortlaut vor wörtlichem Zitat prüfen.' },
      { kind: 'fachliteratur', author: 'Klaus Baer', work: 'The Breathing Permit of Hôr: A Translation of the Apparent Source of the Book of Abraham', ref: 'Dialogue: A Journal of Mormon Thought 3,3 (1968)', year: '1968', quote: `Übersetzung des Hor-Papyrus als ägyptisches Totendokument.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert K. Ritner', work: 'The Joseph Smith Egyptian Papyri: A Complete Edition', year: '2011', quote: `Vollständige Edition und Übersetzung der erhaltenen Papyri und Faksimiles.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Franklin S. Spalding', work: 'Joseph Smith, Jr., as a Translator', year: '1912', quote: `Gutachten führender Ägyptologen, die Smiths Deutung der Faksimiles zurückweisen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Für koptische Christen hat diese Frage eine besondere Note: Die Kopten sind die christlichen Nachfahren der alten Ägypter; das Wort „Kopte" geht auf das griechische *Aigyptios* zurück, und die koptische Sprache ist die letzte Stufe der altägyptischen Sprache, geschrieben mit griechischen Buchstaben und einigen demotischen Zeichen. Jean-François Champollion lernte Koptisch und konnte 1822 gerade dank dieser Kenntnis die Hieroglyphen entziffern. Als Joseph Smith 1835 seine „Übersetzung" begann, war Champollions Arbeit in Amerika kaum zugänglich. Die Sprache, die die koptische Kirche über Jahrhunderte in ihrer Liturgie bewahrt hat, wurde so zum Schlüssel, mit dem sich Smiths Anspruch später überprüfen ließ.`,
    detail: `Die ägyptischen Kirchenväter kannten die Totenreligion ihres Landes aus eigener Anschauung. Athanasius schreibt in *Contra Gentes* über die Verehrung von Tieren und Naturmächten in Ägypten als Abwendung vom Schöpfer; der hl. Schenute kämpfte in Oberägypten gegen die Kulte der alten Götter. Dass ausgerechnet Szenen des Osiris-Glaubens – den die koptische Kirche überwunden hat – als Bilder Abrahams und als Offenbarung des wahren Gottes ausgegeben wurden, ist aus koptischer Sicht eine bittere Ironie.`,
    sources: [
      { kind: 'fachliteratur', work: 'Champollion und die Entzifferung der Hieroglyphen', year: '1822', quote: `Champollions Kenntnis des Koptischen war eine Schlüsselvoraussetzung für die Entzifferung der Hieroglyphen (Lettre à M. Dacier, 1822).`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '9; 23–24', quote: `Kritik an der Verehrung von Tieren und Naturkräften in Ägypten als Abwendung vom Schöpfer.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Papyri, die Joseph Smith benutzte, wurden 1966/67 wiedergefunden – darunter genau die Vorlage für Faksimile 1. Ägyptologen, auch mormonische, können sie lesen: Es sind ägyptische Totentexte für einen Priester namens Hor, rund 1500 Jahre nach Abraham, und Abraham kommt darin nicht vor. Die HLT-Kirche räumt das in ihrem Essay von 2014 selbst ein. Für uns Kopten besonders bemerkenswert: Den Schlüssel zu den Hieroglyphen lieferte Champollion mit Hilfe der koptischen Sprache.`,
  keyPoints: [
    `**Prüfbarer Anspruch:** „Von Abrahams eigener Hand auf Papyrus geschrieben" – so die Überschrift.`,
    `**Identifizierte Papyri:** Buch vom Atmen des Hor und Totenbuch-Abschnitte, Ptolemäer-/Römerzeit.`,
    `**Faksimiles falsch gedeutet:** Osiris auf der Löwenbahre, Hypokephalus, Osiris-Thronszene mit Beischriften.`,
    `**HLT-Eingeständnis (2014):** Zeichen passen nicht zur Übersetzung; Abraham wird nicht erwähnt.`,
    `**Joh 3,12-Prinzip:** Wer im Prüfbaren irrt, verliert Vertrauen im Unprüfbaren.`,
    `**Koptischer Schlüssel:** Die koptische Sprache ermöglichte die Entzifferung der Hieroglyphen.`,
  ],
  voices: [
    {
      person: 'kitchen',
      role: 'als Ägyptologe',
      text: `Kitchen hat sein Leben lang ägyptische Texte gelesen und gezeigt, wie man biblische Angaben methodisch an ägyptischem Material prüft – etwa Personennamen, Titel, Preise und Vertragsformen. Für ihn ist entscheidend, dass man Texte nach ihrer Gattung und Zeit liest. Wendet man diese Methode auf die Joseph-Smith-Papyri an, ist die Gattung eindeutig: spätägyptische Funerärliteratur mit standardisierten Formeln und Vignetten, wie sie in Museen weltweit zu finden sind.`,
      sources: [{ kind: 'fachliteratur', author: 'Kenneth A. Kitchen', work: 'On the Reliability of the Old Testament', year: '2003', quote: `Methodik der Prüfung antiker Texte nach Gattung und Epoche.`, status: 'paraphrase', note: 'Die Anwendung auf die Joseph-Smith-Papyri ist eine methodische Übertragung, keine Aussage Kitchens selbst.' }],
    },
    {
      person: 'athanasius',
      role: 'als ägyptischer Kirchenvater gegen die alten Kulte',
      text: `Athanasius beschreibt in *Gegen die Heiden*, wie die Menschen in Ägypten sich vom Schöpfer abwandten und Geschöpfe, Tiere und Naturkräfte als Götter verehrten. Für ihn ist die Menschwerdung des Logos die Befreiung aus diesem Kult. Die Szenen, die auf den Joseph-Smith-Papyri dargestellt sind – Osiris, Anubis, Isis –, gehören genau zu dem religiösen System, von dem sich die ägyptischen Christen abgewandt haben.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '9; 23–24', quote: `Ägyptische Tier- und Naturverehrung als Götzendienst.`, status: 'paraphrase' }],
    },
    {
      person: 'schenute',
      role: 'als koptischer Abt im Kampf gegen die alten Kulte Oberägyptens',
      text: `Der hl. Schenute von Atripe wirkte im 5. Jahrhundert in Oberägypten, wo die Kulte der alten Götter noch lebendig waren. In seinen koptischen Schriften und Predigten stellte er dem Götzendienst die Verehrung des einen Gottes und Christi entgegen. Für die koptische Kirche ist die altägyptische Totenreligion keine verborgene Quelle göttlicher Offenbarung, sondern die Welt, aus der Christus Ägypten herausgeführt hat.`,
      sources: [{ kind: 'koptisch', author: 'Schenute von Atripe', work: 'Predigten und Schriften (Kanones und Reden)', quote: `Auseinandersetzung mit den heidnischen Kulten Oberägyptens.`, status: 'paraphrase' }],
    },
    {
      person: 'walter-martin',
      role: 'als Kenner der HLT-Geschichte',
      text: `Martin gehörte zu den ersten Christen, die die Bedeutung der Wiederentdeckung der Papyri 1967 öffentlich herausstellten. Er betonte: Hier liegt ein seltener Fall vor, in dem ein Prophet eine überprüfbare Übersetzung vorgelegt hat – und das Original vorhanden ist. Damit kann jeder selbst urteilen, ohne auf Gefühle oder Spekulationen angewiesen zu sein.`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', ref: 'überarbeitete Auflagen, Kapitel über den Mormonismus', quote: `Bedeutung der wiedergefundenen Papyri für die Prüfung des Buches Abraham.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'verlorener-teil',
      objection: `Die gefundenen Fragmente sind nur ein kleiner Teil. Der eigentliche Text Abrahams stand auf einem Teil, der 1871 in Chicago verbrannte.`,
      objectionBy: 'John Gee / HLT-Apologeten',
      answer: `Das ist möglich, aber es löst das Problem nicht: Faksimile 1 befindet sich auf dem erhaltenen Hor-Papyrus, und Smiths Erklärung dieses Bildes lässt sich direkt prüfen – sie stimmt nicht. Auch Faksimile 3 hat Beischriften, die die Figuren anders benennen. Und die Arbeitspapiere aus Smiths Umfeld stellen Zeichen gerade aus dem erhaltenen Hor-Papyrus neben die Verse des Buches Abraham.`,
      followUps: [
        {
          id: 'vignette-umstritten',
          objection: `Auch Ägyptologen sind sich über die Deutung der Löwenbahren-Szene nicht einig.`,
          objectionBy: 'Kerry Muhlestein',
          answer: `Über Details diskutieren sie – etwa ob die Szene Einbalsamierung oder Wiederbelebung des Osiris zeigt, und welche fehlenden Teile ursprünglich zu sehen waren. Aber kein nicht-mormonischer Ägyptologe sieht darin Abraham auf einem Opferaltar. Der Streit betrifft die Feinheiten einer Osiris-Szene, nicht die Frage, ob es eine ist.`,
          followUps: [
            {
              id: 'abraham-traditionen',
              objection: `Das Buch Abraham enthält Details, die erst in alten jüdischen Texten auftauchen – etwa den Opferversuch an Abraham. Woher sollte Joseph Smith das wissen?`,
              objectionBy: 'Hugh Nibley / John Gee',
              answer: `Solche Abraham-Legenden – etwa von Nimrods Feuerofen – waren im 19. Jahrhundert verbreitet: über Josephus, jüdische Überlieferungen und englische Ausgaben wie das sogenannte „Buch Jaschar" (1840). Vor allem aber: Selbst wenn es Parallelen gibt, beweisen sie nicht, dass die Papyri Abrahams Text enthalten. Die Frage war nicht, ob es Abraham-Legenden gibt, sondern ob Smith ägyptische Papyri übersetzt hat.`,
              followUps: [
                {
                  id: 'katalysator',
                  objection: `Dann war es eben keine wörtliche Übersetzung, sondern eine Offenbarung, angeregt durch die Papyri – die Katalysator-Theorie.`,
                  objectionBy: 'Gospel Topics Essay (2014)',
                  answer: `Dann stimmt die Überschrift nicht, nach der es Abrahams eigene Schriften „von seiner eigenen Hand auf Papyrus" sind, und Smith hat seinen Anhängern etwas anderes gesagt. Außerdem bleiben die konkreten Figurendeutungen der Faksimiles falsch – auch ein Katalysator macht Isis nicht zu Pharao. Nach Dtn 18,22 ist entscheidend, ob das, was im Namen Gottes gesagt wurde, zutrifft.`,
                  questionsBack: [`Wenn Joseph Smith bei den prüfbaren Faksimiles irrte – warum sollte ich seinen unprüfbaren Offenbarungen vertrauen (Joh 3,12)?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aegyptologen-voreingenommen',
      objection: `Die Kritiker-Ägyptologen sind voreingenommen. Es gibt auch mormonische Ägyptologen wie John Gee, die das Buch verteidigen.`,
      objectionBy: 'HLT-Mitglieder',
      answer: `Gerade die mormonischen Ägyptologen lesen die Zeichen nicht anders: Sie bestätigen, dass die erhaltenen Fragmente ein Buch vom Atmen und Totenbuch-Texte sind. Sie verteidigen das Buch Abraham mit Zusatzannahmen (verlorener Teil, Katalysator), nicht mit einer anderen Lesung. Und der HLT-Essay von 2014 räumt ein, dass die Zeichen nicht zur Übersetzung passen.`,
      followUps: [
        {
          id: 'gabe-gottes-1835',
          objection: `1835 konnte kaum jemand Hieroglyphen lesen. Joseph Smith tat es durch Gottes Gabe – das ist ja gerade das Wunder.`,
          objectionBy: 'HLT-Missionare',
          answer: `Genau deshalb ist es ein so guter Testfall: Smith legte seine Übersetzung vor, als niemand sie prüfen konnte. Seit Champollion – mit Hilfe der koptischen Sprache – die Hieroglyphen entziffert hat, ist die Prüfung möglich. Sie fällt negativ aus. Wäre es eine echte Gabe gewesen, hätte die spätere Wissenschaft sie bestätigt, so wie die Archäologie viele biblische Angaben bestätigt hat.`,
          followUps: [
            {
              id: 'kinderhook',
              objection: `Es ist unfair, ihn an ein paar Fragmenten zu messen. Man kann nicht alles prüfen.`,
              objectionBy: 'HLT-Mitglieder',
              answer: `Wir prüfen, was Smith selbst veröffentlichte: die drei Faksimiles mit seinen Erklärungen. Es gibt ein weiteres Beispiel: 1843 wurden ihm die „Kinderhook-Platten" vorgelegt, die – wie später zugegeben wurde – als Scherz gefälscht waren; nach dem Tagebuch seines Sekretärs William Clayton sagte Smith, er habe einen Teil übersetzt. Das Muster ist dasselbe: Wo Prüfung möglich ist, hält der Anspruch nicht stand.`,
              sources: [
                { kind: 'fachliteratur', author: 'William Clayton', work: 'Tagebuch, Eintrag vom 1. Mai 1843 (Kinderhook-Platten)', quote: `Präsident J[oseph] hat einen Teil übersetzt und sagt, sie enthalten die Geschichte der Person, bei der sie gefunden wurden, und er sei ein Nachkomme Hams durch die Lenden des Pharao, des Königs von Ägypten, gewesen.`, original: `President J. has translated a portion and says they contain the history of the person with whom they were found & he was a descendant of Ham through the loins of Pharaoh king of Egypt`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Wortlaut nach der Wiedergabe in den Joseph Smith Papers. Willard Richards datiert das Treffen auf den 7. Mai. Ob Clayton aus eigener Anschauung oder vom Hörensagen berichtet, ist unter HLT-Historikern umstritten (Kimball: Hörensagen; Bradley/Ashurst-McGee: Bericht nach Smiths eigenen Worten). Die Ich-Form in der späteren „History of the Church" ist eine redaktionelle Umformung.' },
                { kind: 'fachliteratur', author: 'Stanley B. Kimball', work: 'Kinderhook Plates Brought to Joseph Smith Appear to Be a Nineteenth-Century Hoax', ref: 'Ensign, August 1981', quote: `Eine Materialuntersuchung der erhaltenen Platte (1980) bestätigt, dass sie im 19. Jahrhundert gefälscht wurde.`, status: 'paraphrase', note: 'Veröffentlicht in der offiziellen Kirchenzeitschrift der HLT.' },
              ],
              followUps: [
                {
                  id: 'kinderhook-hoerensagen',
                  objection: `Der Clayton-Eintrag ist Hörensagen. Joseph Smith hat nie eine Übersetzung der Kinderhook-Platten veröffentlicht. Höchstens hat er ein Zeichen mit seinem ägyptischen Alphabet verglichen – das war ein Gelehrtenversuch, keine Offenbarung.`,
                  objectionBy: 'FAIR / Don Bradley (HLT-Historiker)',
                  answer: `Das ist eine faire Präzisierung: Smith veröffentlichte keine Übersetzung, und HLT-Historiker wie Don Bradley vermuten, dass er ein Zeichen mit seinem „Ägyptischen Alphabet" verglich. Aber gerade das ist aufschlussreich: Ein „Seher", der eine plumpe Fälschung nicht als solche erkennt, sondern sie mit seinem eigenen ägyptischen Schlüssel deutet und von einem Nachkommen Hams spricht – das ist dieselbe Methode, mit der er die Papyri „übersetzte". Und die Papyri haben wir: Dort ist das Ergebnis eindeutig falsch.`,
                  detail: `Die HLT-Kirche hat 1981 in ihrer offiziellen Zeitschrift „Ensign" bestätigt, dass die Kinderhook-Platten eine Fälschung des 19. Jahrhunderts sind. Damit ist die Frage nicht mehr, ob die Platten echt waren, sondern was Smiths Reaktion über seine Gabe verrät. Selbst in der wohlwollendsten Deutung zeigt sie: Smiths „Übersetzungsgabe" war nicht in der Lage, Echtes von Gefälschtem zu unterscheiden – was die Frage nach dem Buch Abraham und dem Buch Mormon verschärft.`,
                  questionsBack: [`Wenn Joseph Smith eine gefälschte Inschrift nicht als Fälschung erkannte – woran erkennst du, dass seine anderen Übersetzungen echt sind?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nicht-zentral',
      objection: `Selbst wenn – das Buch Abraham ist nicht zentral für meinen Glauben. Mein Zeugnis hängt an Christus.`,
      objectionBy: 'HLT-Mitglieder',
      answer: `Das Buch Abraham ist Teil eures Kanons und Quelle zentraler Lehren: Präexistenz der Geister, Mehrzahl der Götter, Kolob, Erschaffung aus vorhandener Materie. Wenn ein Prophet bei einer überprüfbaren Übersetzung irrt, betrifft das seine Glaubwürdigkeit insgesamt. Jesus sagt: „Wer im Geringsten treu ist, der ist auch im Großen treu" (Lk 16,10).`,
      followUps: [
        {
          id: 'priestertum-hautfarbe',
          objection: `Die frühere Priestertumsbeschränkung für Schwarze ist seit 1978 aufgehoben. Das hat mit dem Buch Abraham nichts mehr zu tun.`,
          objectionBy: 'HLT-Mitglieder',
          answer: `Ich anerkenne, dass die Kirche die Beschränkung 1978 aufhob und 2013 in einem Essay die früheren Begründungen ausdrücklich zurückwies – das war ein wichtiger Schritt. Aber frühere Kirchenführer stützten sich unter anderem auf Abraham 1,21–27, wo von einer Abstammungslinie die Rede ist, die das Priestertum nicht haben durfte. Das zeigt, welche Folgen es haben kann, wenn ein Text als Gottes Wort gilt, der es nicht ist.`,
          questionsBack: [`Wenn Lehren, die sich auf das Buch Abraham stützten, inzwischen zurückgenommen wurden – welche Autorität hat das Buch dann noch?`],
          followUps: [
            {
              id: 'christen-fluch-hams',
              objection: `Auch Christen haben mit der Bibel Sklaverei und Rassismus begründet – mit dem „Fluch Hams" aus Gen 9. Wollt ihr deshalb die Bibel verwerfen?`,
              objectionBy: 'HLT-Apologeten',
              answer: `Das gestehe ich offen zu – es ist eine Schande der Christenheit. Aber der Unterschied ist: Der Missbrauch von Gen 9 war eine **Fehldeutung** – der Fluch trifft Kanaan, nicht Ham, und von Hautfarbe steht dort nichts. Man korrigiert ihn, indem man den Text genauer liest. Abraham 1,26–27 dagegen sagt selbst, der Pharao sei „von jener Abstammungslinie, durch die er kein Recht auf das Priestertum haben konnte". Und die Bibel bezeugt das Gegenteil von Rassismus: Der erste Heide, der getauft wird, ist ein schwarzafrikanischer Äthiopier (Apg 8,26–39).`,
              detail: `Die koptische Kirche hat eine besondere Beziehung zu dieser Geschichte: Der äthiopische Kämmerer gilt in der Tradition als erster Bote des Evangeliums in seiner Heimat, und die äthiopische Kirche war über Jahrhunderte mit dem Patriarchat von Alexandrien verbunden; ihr Bischof wurde aus Ägypten gesandt (Frumentius durch Athanasius). Der christliche Glaube war in Afrika lange vor Europa zu Hause. Wer Rassismus mit der Bibel begründete, musste gegen ihren klaren Sinn lesen (Gal 3,28; Apg 17,26; Offb 7,9).`,
              sources: [
                { kind: 'gegner', work: 'Köstliche Perle, Buch Abraham', ref: '1,27', quote: `Da nun Pharao von jener Abstammungslinie war, durch die er kein Recht auf das Priestertum haben konnte …`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', quote: `Und er hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'fortschreitende-offenbarung-1978',
                  objection: `Genau dafür haben wir lebende Propheten: Durch fortlaufende Offenbarung hat Gott 1978 die Beschränkung aufgehoben. Eine Kirche ohne lebende Propheten bleibt in ihren Fehlern stecken.`,
                  objectionBy: 'HLT-Mitglieder (Offizielle Erklärung 2, LuB)',
                  answer: `Wenn eine Offenbarung 1978 aufhebt, was frühere Propheten über ein Jahrhundert im Namen Gottes lehrten, dann gibt es nur zwei Möglichkeiten: Entweder Gott hat seine Meinung geändert – oder die früheren Propheten haben gelehrt, was Gott nicht gesagt hat. Der Essay von 2013 wählt die zweite Möglichkeit. Dann aber stellt sich die Frage, welche heutigen Lehren in fünfzig Jahren ebenfalls zurückgenommen werden. Die Kirche Christi gründet sich auf den Glauben, „der einmal den Heiligen übergeben ist" (Jud 3) – nicht auf Lehren, die man später korrigieren muss.`,
                  detail: `Auch Christen kennen Entwicklung im Verständnis – aber nicht als Umkehrung geoffenbarter Lehre durch neue Offenbarung. Hebr 1,1–2 sagt: Gott hat „zuletzt in diesen Tagen zu uns geredet durch den Sohn" – die Offenbarung in Christus ist abschließend. Die Kirche korrigiert Missbräuche und Fehlauslegungen, indem sie zur ursprünglichen Offenbarung zurückkehrt. Bei der Priestertumsfrage dagegen musste eine als göttlich ausgegebene Praxis selbst aufgehoben werden.`,
                  sources: [
                    { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'gegner', author: 'Kirche Jesu Christi der HLT', work: 'Gospel Topics Essay „Race and the Priesthood"', year: '2013', quote: `Die Kirche weist die früher vorgebrachten Begründungen für die Priestertumsbeschränkung, etwa als Zeichen göttlicher Missbilligung, ausdrücklich zurück.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn frühere Propheten sich in dieser Frage irrten – woran erkennst du, welche heutigen Lehren Gottes Wort sind und welche nicht?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'faksimile-3-thronszene',
      objection: `Faksimile 3 zeigt doch genau, was Smith sagt: Abraham sitzt auf Pharaos Thron und lehrt am Hof Astronomie. Das bestätigt sogar Josephus: Abraham habe die Ägypter Arithmetik und Sternkunde gelehrt (Altertümer I,8,2).`,
      objectionBy: 'Hugh Nibley / John Gee',
      answer: `Josephus berichtet diese Legende tatsächlich – das gestehe ich zu. Aber Faksimile 3 hat **Beischriften**, die man lesen kann: Die thronende Figur ist Osiris, die stehende Frau ist Isis, dahinter Maat, dann der Verstorbene Hor und Anubis. Smith erklärte Isis zum „König Pharao", Maat zum „Prinzen des Pharao" und den Schakalgott Anubis zu einem Sklaven namens „Olimla". Eine Legende bei Josephus ändert nicht, was auf dem Bild geschrieben steht.`,
      detail: `Faksimile 3 ist eine typische Gerichtsszene der ägyptischen Totenliteratur: Der Verstorbene wird vor Osiris geführt. Die Namen stehen in Hieroglyphen über den Figuren, und auch HLT-Ägyptologen lesen sie so. Die Verteidigung lautet daher nicht, die Beischriften sagten etwas anderes, sondern, ein antiker Bearbeiter könnte die Szene für eine Abraham-Geschichte umgedeutet haben. Das ist eine Möglichkeit ohne Beleg – und sie widerspricht Smiths Angabe, es handle sich um Abrahams eigene Schrift.`,
      sources: [
        { kind: 'gegner', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: 'I,8,2', quote: `Abraham habe die Ägypter Arithmetik und Astronomie gelehrt.`, status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Robert K. Ritner', work: 'The Joseph Smith Egyptian Papyri: A Complete Edition', year: '2011', quote: `Lesung der Beischriften von Faksimile 3: Osiris, Isis, Maat, der Verstorbene Hor, Anubis.`, status: 'paraphrase' },
      ],
      questionsBack: [`Was steht in den Hieroglyphen über der Figur, die Smith „König Pharao" nannte?`],
      followUps: [
        {
          id: 'faksimile-2-kosmos',
          objection: `Aber Faksimile 2, der Hypokephalus, handelt tatsächlich vom Kosmos, von der Sonne und von göttlicher Erneuerung – genau wie Smiths Erklärungen über Kolob und die Ordnung der Himmelskörper. Der HLT-Ägyptologe Michael Rhodes hat das gezeigt.`,
          objectionBy: 'Michael D. Rhodes (BYU)',
          answer: `Dass ein Hypokephalus kosmische Symbolik enthält, bestreitet niemand: Diese Scheiben wurden Verstorbenen unter den Kopf gelegt, damit ihnen – wie der Sonne – Wärme und Wiedergeburt zuteilwürden. Aber das ist allgemeine ägyptische Totenreligion. Smiths Erklärungen dagegen sind konkret – „Kolob", „Oliblisch", „Enisch-go-on-dosch" –, und keines dieser Wörter ist ägyptisch. Eine allgemeine thematische Nähe ist kein Beleg für eine richtige Übersetzung.`,
          detail: `Hinzu kommt: Der Hypokephalus war beschädigt, und die Lücken auf Smiths Vorlage wurden nach Einschätzung von Ägyptologen mit Zeichen aus anderen Papyri und mit Zeichnungen ergänzt, die nicht zum Original gehörten. Smiths Erklärungen beziehen sich zum Teil gerade auf solche ergänzten Stellen. Klaus Baer und Robert Ritner – beide anerkannte Fachleute aus Chicago – haben die Faksimiles ausführlich besprochen.`,
          sources: [{ kind: 'fachliteratur', author: 'Klaus Baer', work: 'The Breathing Permit of Hôr: A Translation of the Apparent Source of the Book of Abraham', ref: 'Dialogue: A Journal of Mormon Thought 3,3 (1968)', quote: `Übersetzung des Hor-Papyrus; Besprechung der Faksimiles als ägyptische Totentexte.`, status: 'paraphrase' }],
          questionsBack: [`In welchem ägyptischen Text kommt das Wort „Kolob" vor?`],
          followUps: [
            {
              id: 'betrueger-veroeffentlicht-nicht',
              objection: `Ein Betrüger hätte niemals Abbildungen mit nummerierten Erklärungen veröffentlicht, die man eines Tages prüfen kann. Dass Joseph Smith das tat, zeigt seine Aufrichtigkeit.`,
              objectionBy: 'HLT-Mitglieder',
              answer: `1842 konnte in Amerika praktisch niemand Hieroglyphen lesen – Champollions Entzifferung war gerade zwanzig Jahre alt und kaum verbreitet. Das Risiko einer Prüfung schien gering. Aber ich muss Smith gar keinen Betrug unterstellen: Er kann vollkommen überzeugt gewesen sein. Genau das ist der Punkt – Aufrichtigkeit macht eine Übersetzung nicht richtig. Ob jemand Gottes Prophet ist, entscheidet nicht seine Ehrlichkeit, sondern ob das, was er im Namen Gottes sagt, zutrifft (Dtn 18,22).`,
              detail: `Für das Gespräch hilfreich: Du musst über Joseph Smiths Charakter kein Urteil fällen. Viele Menschen in der Religionsgeschichte waren aufrichtig überzeugt und haben sich dennoch geirrt. Die Frage ist allein, ob die Faksimile-Erklärungen stimmen – und das lässt sich heute prüfen. Mit dieser Haltung bleibt das Gespräch sachlich und respektvoll.`,
              sources: [{ kind: 'bibel', work: '5. Mose', ref: '18,22', quote: `wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'verbatim' }],
              questionsBack: [`Kann ein Mensch aufrichtig sein und sich trotzdem irren?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was steht laut Ägyptologen – auch mormonischen – auf den erhaltenen Papyrusfragmenten?`,
    `Warum zeigt die Vorlage von Faksimile 1, die erhalten ist, eine Osiris-Szene statt einer Opferung Abrahams?`,
    `Wie passt die Katalysator-Theorie zur Überschrift „von seiner eigenen Hand auf Papyrus geschrieben"?`,
    `Wenn Smith bei Prüfbarem irrte – wie kann ich ihm bei Unprüfbarem vertrauen (Joh 3,12)?`,
  ],
  avoid: [
    `Behaupten, alle Papyri seien erhalten – nur Fragmente wurden wiedergefunden; der größere Teil ging verloren.`,
    `Ungeprüfte Gutachter-Zitate von 1912 wörtlich bringen – nenne Spaldings Umfrage sinngemäß.`,
    `Den Mut von HLT-Ägyptologen herabsetzen – argumentiere mit ihren eigenen Lesungen der Texte.`,
  ],
  concessions: [
    `Ursprünglich besaß Smith mehr Papyrusmaterial, als heute erhalten ist.`,
    `Über Details einzelner Vignetten diskutieren Ägyptologen tatsächlich.`,
    `Die HLT-Kirche hat die Problematik in einem offiziellen Essay offen dargestellt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Robert K. Ritner', work: 'The Joseph Smith Egyptian Papyri: A Complete Edition', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Klaus Baer', work: 'The Breathing Permit of Hôr', ref: 'Dialogue 3,3 (1968)', status: 'paraphrase' },
    { kind: 'gegner', author: 'John Gee', work: 'An Introduction to the Book of Abraham', year: '2017', status: 'paraphrase', note: 'Die beste Verteidigung aus HLT-Sicht.' },
    { kind: 'gegner', author: 'Kirche Jesu Christi der HLT', work: 'Gospel Topics Essay „Translation and Historicity of the Book of Abraham"', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Mormonen', 'Buch Abraham', 'Ägyptologie', 'Papyri', 'Koptische Sprache', 'Champollion'],
  related: [
    'mormonen/buch-mormon-historisch',
    'mormonen/gott-war-mensch',
    'at-archaeologie/patriarchen-anachronismen',
    'antike-parallelen/sterbende-auferstehende-goetter',
  ],
};

export default claim;
