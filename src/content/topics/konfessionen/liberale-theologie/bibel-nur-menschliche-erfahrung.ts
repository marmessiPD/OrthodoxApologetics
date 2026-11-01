import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-nur-menschliche-erfahrung',
  title: `„Die Bibel ist menschliche religiöse Erfahrung, keine Offenbarung."`,
  proponents: [
    { name: 'Friedrich Schleiermacher', role: 'Theologe und Philosoph (1768–1834)', work: 'Über die Religion (1799); Der christliche Glaube (1821/22, 2. Aufl. 1830/31)' },
    { name: 'Marcus Borg', role: 'Neutestamentler (1942–2015)', work: 'Reading the Bible Again for the First Time (2001)' },
    { name: 'John Shelby Spong', role: 'Episkopaler Bischof (1931–2021)', work: 'Rescuing the Bible from Fundamentalism (1991)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin', work: 'The Bible: A Biography (2007)' },
  ],
  steelman: `Die Bibel ist offensichtlich von Menschen geschrieben: Sie hat verschiedene Stile, Sprachen und Gattungen; ihre Autoren benutzen Quellen (Lk 1,1–4), haben ihre eigenen Anliegen und widersprechen sich in Details. Paulus unterscheidet sogar zwischen dem, was „der Herr" sagt, und dem, was er selbst meint (1 Kor 7,10.12). Die Bücher entstanden über mehr als tausend Jahre in verschiedenen Kulturen. Was wir in ihnen finden, ist das Zeugnis von Menschen, die Gott erfahren haben – Israel im Exodus, die Propheten, die Jünger in der Begegnung mit Jesus. Schleiermacher hat gezeigt: Religion ist nicht zuerst Lehre, sondern „Sinn und Geschmack fürs Unendliche", das Gefühl schlechthinniger Abhängigkeit. Die Schrift ist das klassische Dokument dieser Erfahrung, aber keine vom Himmel diktierte Information. Wer sie als wörtlich inspiriertes Gotteswort liest, gerät in Konflikt mit der Wissenschaft, mit der Moral (Gewalttexte) und mit der Geschichte – und macht aus einem lebendigen Zeugnis ein starres Gesetzbuch.`,
  biblical: {
    summary: `Die Schrift ist **ganz menschlich** und **ganz göttlich** zugleich: Menschen haben sie geschrieben, mit ihrem Stil, ihren Quellen und ihrer Persönlichkeit – aber „getrieben von dem Heiligen Geist" (2 Petr 1,21). „Alle Schrift, **von Gott eingegeben** (*theopneustos*), ist nütze zur Lehre" (2 Tim 3,16). Die Propheten sagen nicht „Ich habe Folgendes empfunden", sondern „**So spricht der HERR**". Paulus dankt, dass die Thessalonicher sein Wort aufnahmen „nicht als Menschenwort, sondern, wie es denn wahrhaftig ist, als **Gottes Wort**" (1 Thess 2,13). Jesus selbst sagt: „Die Schrift kann doch nicht gebrochen werden" (Joh 10,35). Offenbarung ist in der Bibel nicht nur innere Erfahrung, sondern Gottes **Handeln in der Geschichte** – Exodus, Inkarnation, Auferstehung – und sein **Reden** durch Propheten und Apostel.`,
    detail: `**2 Petr 1,20–21:** „Keine Weissagung in der Schrift geschieht aus eigener Auslegung. Denn es ist noch nie eine Weissagung aus menschlichem Willen hervorgebracht; sondern die heiligen Menschen Gottes haben geredet, getrieben von dem Heiligen Geist." Beides steht da: **Menschen** haben geredet – **getrieben** vom Geist.

**Lk 1,1–4:** Lukas recherchiert, prüft Augenzeugen und schreibt geordnet. Das widerspricht der Inspiration nicht; Gott wirkt durch menschliche Sorgfalt, nicht an ihr vorbei.

**1 Kor 7,10.12:** Paulus unterscheidet zwischen einem Wort Jesu, das er überliefert, und seiner eigenen apostolischen Weisung – die er aber im selben Kapitel mit dem Anspruch verbindet, den Geist Gottes zu haben (7,40). Die Unterscheidung zeigt Sorgfalt, nicht bloße Meinung.

**Offenbarung als Ereignis:** Wenn Christus wirklich auferstanden ist (1 Kor 15), dann ist die Bibel nicht nur Ausdruck menschlicher Sehnsucht, sondern Zeugnis einer Tat Gottes. Die Frage nach der Offenbarung hängt an der Frage nach der Auferstehung.`,
    sources: [
      { kind: 'bibel', work: '2. Timotheus', ref: '3,16', quote: `Denn alle Schrift, von Gott eingegeben, ist nütze zur Lehre, zur Strafe, zur Besserung, zur Züchtigung in der Gerechtigkeit.`, translation: 'Luther 1912', status: 'verbatim', original: `πᾶσα γραφὴ θεόπνευστος` },
      { kind: 'bibel', work: '2. Petrus', ref: '1,20–21', quote: `… und das sollt ihr für das Erste wissen, daß keine Weissagung in der Schrift geschieht aus eigener Auslegung. Denn es ist noch nie eine Weissagung aus menschlichem Willen hervorgebracht; sondern die heiligen Menschen Gottes haben geredet, getrieben von dem heiligen Geist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '2,13', quote: `Darum danken auch wir ohne Unterlaß Gott, daß ihr, da ihr empfinget von uns das Wort göttlicher Predigt, nahmet ihr's auf nicht als Menschenwort, sondern, wie es denn wahrhaftig ist, als Gottes Wort.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '10,35', quote: `… und die Schrift kann doch nicht gebrochen werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `Lukas will, nachdem schon viele berichtet haben, allem von Anfang an mit Fleiß nachgehen und es ordentlich aufschreiben, damit Theophilus die Gewissheit der Lehre erkenne, in der er unterrichtet ist.`, translation: 'sinngemäß', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt im Glaubensbekenntnis den Heiligen Geist, „der **durch die Propheten gesprochen hat**". Die Heilige Schrift ist das inspirierte Wort Gottes, geschrieben von Menschen, die der Geist bewegte, und wird in der Kirche mit den Vätern, der Liturgie und den Konzilien gelesen. Die alexandrinische Tradition versteht Inspiration **synergetisch**: Gott spricht durch die Persönlichkeit, Sprache und Erfahrung der Verfasser, ohne sie auszulöschen – ähnlich wie im menschgewordenen Wort Gottheit und Menschheit ohne Vermischung und ohne Trennung geeint sind. Darum ist die Schrift nicht bloß menschliche Erfahrung, aber auch kein mechanisches Diktat.`,
    detail: `**Athanasius, 39. Osterfestbrief (367):** Der alexandrinische Papst zählt die Bücher des Neuen Testaments auf – die erste erhaltene Liste, die genau unseren 27 Büchern entspricht – und nennt sie „Quellen des Heils": Wer dürstet, soll sich an ihren Worten sättigen; niemand soll etwas hinzufügen oder wegnehmen.

**Origenes, De principiis IV:** Origenes begründet die Inspiration der Schrift unter anderem mit der Erfüllung der Prophetien und der weltweiten Wirkung der Lehre Christi. Er lehrt den wörtlichen und den geistlichen Sinn: Die Schrift hat „Leib, Seele und Geist". *(Origenes ist kein Lehrer der Kirche, aber Vater der alexandrinischen Exegese.)*

**Kyrill von Alexandrien** kommentierte große Teile der Schrift und sah in ihr überall das Geheimnis Christi; die Schrift ist für ihn Wort Gottes, durch das der Logos selbst zu uns spricht.

**Die Liturgie:** Vor dem Evangelium ruft der Diakon: „Steht in der Furcht Gottes und hört das heilige Evangelium." Die Kirche empfängt die Schrift nicht als Bericht über menschliche Gefühle, sondern als Stimme Christi selbst.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', year: '381', quote: `… der durch die Propheten gesprochen hat.`, original: `τὸ λαλῆσαν διὰ τῶν προφητῶν`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', status: 'paraphrase', quote: `Dies sind die Quellen des Heils, damit, wer dürstet, sich an den Worten in ihnen sättige. In ihnen allein wird die Lehre der Frömmigkeit verkündet. Niemand soll ihnen etwas hinzufügen oder wegnehmen.` },
      { kind: 'kirchenvater', author: 'Origenes', work: 'De principiis', ref: 'IV,1–3', status: 'paraphrase', note: 'Inspiration der Schrift; dreifacher Schriftsinn.' },
    ],
  },
  quickAnswer: `Die Bibel ist ganz von Menschen geschrieben – mit ihrem Stil und ihrer Erfahrung –, aber, wie Petrus sagt, „getrieben vom Heiligen Geist" (2 Petr 1,21). Die Propheten sagen nicht „Ich fühle", sondern „So spricht der Herr". Und die Bibel berichtet nicht nur Gefühle, sondern Taten Gottes in der Geschichte: Wenn Christus auferstanden ist, ist sie Zeugnis von Gottes Handeln, nicht nur von menschlicher Sehnsucht. Die Kirche bekennt den Geist, „der durch die Propheten gesprochen hat" – wie im menschgewordenen Wort sind Göttliches und Menschliches in der Schrift vereint.`,
  keyPoints: [
    `**Ganz menschlich und ganz göttlich:** Menschen schrieben, „getrieben vom Heiligen Geist" (2 Petr 1,21); „von Gott eingegeben" (2 Tim 3,16).`,
    `**Selbstanspruch der Schrift:** „So spricht der HERR"; „nicht als Menschenwort, sondern als Gottes Wort" (1 Thess 2,13); „die Schrift kann nicht gebrochen werden" (Joh 10,35).`,
    `**Offenbarung ist auch Ereignis:** Exodus, Inkarnation, Auferstehung – nicht nur innere Erfahrung.`,
    `**Selbstwiderspruch:** Wenn alle religiöse Rede nur Erfahrung ist, gilt das auch für die liberale Theologie selbst.`,
    `**Methodischer Naturalismus ist keine Neutralität** (Plantinga): Wer Gottes Reden von vornherein ausschließt, findet es auch nicht.`,
    `**Die alexandrinische Tradition** kennt die menschliche Seite der Schrift und ihren geistlichen Sinn – ohne ihren göttlichen Ursprung zu leugnen.`,
  ],
  voices: [
    {
      person: 'plantinga',
      role: 'als Religionsphilosoph',
      text: `Plantinga unterscheidet zwei Arten von Schriftforschung: die traditionelle, die die Schrift als göttlich inspiriert liest, und die „historisch-kritische" im strengen Sinn, die nur gelten lässt, was ohne Glaubensvoraussetzungen begründbar ist. Er zeigt, dass diese zweite Art keineswegs neutral ist: Sie arbeitet meist mit einem methodischen Naturalismus, der Gottes Handeln und Reden ausklammert. Ihre Ergebnisse können daher dem Christen, der begründet an Gott glaubt, nicht vorschreiben, was er von der Schrift zu halten hat.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Two (or More) Kinds of Scripture Scholarship, in: Modern Theology 14', year: '1998', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', ref: 'Kap. 12', year: '2000', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der Offenbarung',
      text: `Swinburne argumentiert, dass es gute Gründe gibt, eine Offenbarung zu erwarten, wenn es einen guten Gott gibt: Menschen brauchen Wissen über Gott und den Weg zum Heil, das sie allein nicht sicher erlangen. Eine solche Offenbarung würde durch ein Ereignis beglaubigt (die Auferstehung) und von einer Gemeinschaft (der Kirche) bewahrt und ausgelegt. Die Bibel ist für ihn Offenbarung, die im Licht der kirchlichen Tradition gelesen werden muss – eine Position, die der orthodoxen sehr nahekommt.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Revelation: From Metaphor to Analogy', year: '1992; 2. Aufl. 2007', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Papst, der den Kanon des Neuen Testaments bezeugte',
      text: `Athanasius sah in der Schrift die Stimme Gottes, die der Kirche anvertraut ist. In seinem Osterfestbrief von 367 zählt er die kanonischen Bücher auf und nennt sie „Quellen des Heils". Zugleich lehrte er, die Schrift im Geist der kirchlichen Überlieferung zu lesen, damit man sie nicht wie die Arianer gegen ihren eigentlichen Sinn verdreht. Für ihn ist die Schrift göttlich in ihrem Ursprung und Ziel, und sie wird im Glauben der Kirche recht verstanden.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', status: 'paraphrase' }],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Bibelkommentator',
      text: `Vater Tadros Malaty hat in seinen Kommentaren zu nahezu allen biblischen Büchern die patristische Auslegung für heutige Leser erschlossen. Er liest die Schrift als lebendiges Wort Gottes, das im Gebet, in der Liturgie und im Licht der Väter verstanden wird, und verbindet den Literalsinn mit dem geistlichen Sinn. Für ihn ist die Schrift kein Archiv vergangener Erfahrungen, sondern Ort der Begegnung mit Christus heute.`,
      sources: [{ kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristische Kommentare zur Heiligen Schrift', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'menschliche-spuren',
      objection: `„Die Bibel trägt überall menschliche Spuren: verschiedene Stile, Quellen, Widersprüche in Details, Paulus unterscheidet sein Wort vom Wort des Herrn (1 Kor 7,12). Das ist kein göttliches Diktat."`,
      objectionBy: 'Marcus Borg',
      answer: `Richtig – und das hat die Kirche nie bestritten. Die orthodoxe Lehre ist kein Diktat-Modell: Gott spricht **durch** Menschen, ihre Sprache und Persönlichkeit. Lukas recherchiert (Lk 1,1–4), Paulus unterscheidet sorgfältig. So wie Christus ganz Mensch und ganz Gott ist, ist die Schrift ganz menschlich und ganz von Gott eingegeben. Menschliche Spuren widerlegen die Inspiration nicht, sondern zeigen, wie sie geschieht.`,
      questionsBack: [`Warum sollte ein Gott, der Mensch werden kann, nicht durch menschliche Autoren sprechen können?`],
      followUps: [
        {
          id: 'widersprueche-beweisen',
          objection: `„Aber die Widersprüche beweisen doch, dass Gott nicht der Autor sein kann. Ein vollkommener Gott widerspricht sich nicht."`,
          objectionBy: 'Liberaler Exeget',
          answer: `Viele angebliche Widersprüche lösen sich durch Kenntnis antiker Erzählweise (Zusammenfassung, Reihenfolge nach Themen, verschiedene Perspektiven) – ein Thema für sich. Wichtiger: Selbst wo Unterschiede bleiben, betreffen sie Details, nicht den Kern – wer Jesus ist, was er tat, dass er starb und auferstand. Die Väter kannten die Unterschiede der Evangelien und nahmen sie nicht als Gegenargument, sondern als Zeichen unabhängiger Zeugen.`,
          followUps: [
            {
              id: 'gewalttexte',
              objection: `„Und die Gewalttexte des Alten Testaments? Ein Gott der Liebe kann die Ausrottung Kanaans nicht befohlen haben. Das ist menschliche Projektion."`,
              objectionBy: 'Karen Armstrong / Liberaler Theologe',
              answer: `Das ist eine ernste Frage, die eine eigene Antwort verdient (siehe den Themenblock zur Ethik des Alten Testaments). Die alexandrinische Tradition hat schwierige Texte nie naiv gelesen: Sie sah in ihnen eine Pädagogik Gottes mit einem Volk in einer gewalttätigen Welt und las sie zugleich geistlich auf den Kampf gegen die Sünde. Aber aus der Schwierigkeit einzelner Texte folgt nicht, dass die ganze Schrift nur menschliche Erfahrung ist – sonst müsste man auch die Bergpredigt zur bloßen Projektion erklären.`,
            },
          ],
        },
      ],
    },
    {
      id: 'schleiermacher-gefuehl',
      objection: `„Schleiermacher hat gezeigt: Religion ist nicht Lehre, sondern ‚Sinn und Geschmack fürs Unendliche', das Gefühl schlechthinniger Abhängigkeit. Die Bibel ist das Dokument dieser Erfahrung."`,
      objectionBy: 'Friedrich Schleiermacher',
      answer: `Die Erfahrung der Abhängigkeit von Gott ist echt und biblisch (Ps 139). Aber wenn alles nur Erfahrung ist, bleibt die Frage: Erfahrung **wovon**? Erfahrung setzt etwas voraus, das man erfährt. Der christliche Glaube behauptet, dass Gott sich selbst gezeigt hat – im Wort an die Propheten und im fleischgewordenen Wort. Schleiermacher stellte die Trinität ans Ende seiner Glaubenslehre, weil sie sich nicht aus dem Gefühl ableiten ließ. Das zeigt die Grenze seines Ansatzes: Was Gott offenbart, übersteigt unsere Gefühle.`,
      sources: [
        { kind: 'gegner', author: 'Friedrich Schleiermacher', work: 'Über die Religion. Reden an die Gebildeten unter ihren Verächtern', ref: '2. Rede', year: '1799', quote: `Religion ist Sinn und Geschmack fürs Unendliche.`, status: 'verbatim' },
        { kind: 'gegner', author: 'Friedrich Schleiermacher', work: 'Der christliche Glaube', ref: '§ 4', year: '1821/22; 2. Aufl. 1830/31', status: 'paraphrase', quote: `Das Gemeinsame aller Äußerungen der Frömmigkeit ist, dass wir uns unserer selbst als schlechthin abhängig bewusst sind.` },
      ],
      followUps: [
        {
          id: 'selbstwiderspruch',
          objection: `„Alle religiösen Texte sind Ausdruck menschlicher Erfahrung – auch die Bibel. Das ist einfach die nüchterne religionswissenschaftliche Sicht."`,
          objectionBy: 'Religionswissenschaftler',
          answer: `Wenn alle religiöse Rede nur menschliche Erfahrung ist, dann gilt das auch für diese Behauptung selbst und für die liberale Theologie – auch sie wäre dann nur eine Erfahrung unter anderen, ohne Anspruch auf Wahrheit. Die „nüchterne Sicht" ist in Wahrheit eine Weltanschauung, die voraussetzt, dass Gott nicht spricht. Das kann man glauben – aber man kann es nicht als neutrale Wissenschaft ausgeben.`,
          questionsBack: [`Woher weißt du, dass Gott nicht durch Menschen sprechen kann – aus Erfahrung, aus Wissenschaft oder aus einer Vorentscheidung?`],
        },
      ],
    },
    {
      id: 'fundamentalismus-gefaehrlich',
      objection: `„Der Glaube an eine wörtlich inspirierte Bibel führt zum Fundamentalismus – zu Wissenschaftsfeindlichkeit, Intoleranz und Gewalt."`,
      objectionBy: 'John Shelby Spong',
      answer: `Die koptische Kirche ist nicht fundamentalistisch im modernen amerikanischen Sinn. Sie liest die Schrift seit Jahrhunderten wörtlich **und** geistlich, mit den Vätern und in der Liturgie – und sie hat in der Frage etwa des Erdalters kein Dogma. Aber die Alternative zu einer starren Lektüre ist nicht, die Offenbarung aufzugeben, sondern die Schrift in der Kirche richtig zu lesen. Missbrauch widerlegt den rechten Gebrauch nicht.`,
      followUps: [
        {
          id: 'kirche-als-ausleger',
          objection: `„Und wer sagt, was die ‚richtige' Auslegung ist? Am Ende entscheidet doch jeder selbst."`,
          objectionBy: 'Liberaler Theologe',
          answer: `Genau hier liegt die Stärke der orthodoxen Tradition: Die Schrift ist der Kirche gegeben, und die Kirche liest sie mit den Vätern, den Konzilien und der Liturgie. Dieselbe Kirche, die den Kanon bezeugte (Athanasius 367), legt ihn auch aus. Das schützt vor dem Fundamentalismus des Einzelnen ebenso wie vor der Beliebigkeit des Liberalismus.`,
          sources: [
            { kind: 'bibel', work: '2. Petrus', ref: '3,16', quote: `… in welchen sind etliche Dinge schwer zu verstehen, welche verwirren die Ungelehrigen und Leichtfertigen, wie auch die andern Schriften, zu ihrer eigenen Verdammnis.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Bibel nur menschliche Erfahrung ist – wovon ist sie dann Erfahrung?`,
    `Ist Christus auferstanden? Wenn ja – ist die Bibel dann nicht mehr als menschliche Sehnsucht?`,
    `Gilt deine These, alle religiöse Rede sei nur Erfahrung, auch für deine eigene Theologie?`,
    `Warum sollte ein Gott, der Mensch werden kann, nicht durch Menschen sprechen können?`,
  ],
  avoid: [
    `Nicht ein mechanisches Diktat-Modell der Inspiration verteidigen. Das ist weder orthodox noch haltbar.`,
    `Nicht jede historisch-kritische Beobachtung (Quellen, Stile, Datierungen) als Unglauben abtun.`,
    `Nicht behaupten, die Bibel enthalte überhaupt keine schwierigen Stellen. Ehrlichkeit überzeugt mehr.`,
  ],
  concessions: [
    `Die Bibel trägt unverkennbar menschliche Züge; ihre Verfasser schrieben mit eigenen Stilen, Quellen und Anliegen.`,
    `Religiöse Erfahrung ist ein echter und wichtiger Teil des Glaubens; Schleiermacher hat zu Recht gegen einen bloß verstandesmäßigen Glauben protestiert.`,
    `Manche biblischen Texte (etwa Gewalttexte) sind auch für Gläubige schwer; die Kirche liest sie im Licht Christi.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief, Kap. 12', year: '2000', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Revelation: From Metaphor to Analogy', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Eta Linnemann', work: 'Wissenschaft oder Meinung?', year: '1986', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Inspiration', 'Offenbarung', 'Schleiermacher', 'Bibelverständnis', 'liberale Theologie'],
  related: ['sola-scriptura/nur-die-bibel', 'sola-scriptura/jeder-legt-selbst-aus', 'neues-testament/evangelien-widersprechen-sich', 'liberale-theologie/entmythologisierung', 'erkenntnistheorie'],
};

export default claim;
