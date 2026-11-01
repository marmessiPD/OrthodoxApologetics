import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'arrogant-nur-jesus',
  title: `„Es ist arrogant zu sagen, nur Jesus ist der Weg."`,
  proponents: [
    { name: 'John Hick', role: 'Religionsphilosoph (1922–2012)', work: 'God and the Universe of Faiths (1973)' },
    { name: 'Karen Armstrong', role: 'Religionshistorikerin', work: 'The Case for God (2009); Charter for Compassion (2009)' },
    { name: 'Tenzin Gyatso, der 14. Dalai Lama', role: 'Oberhaupt des tibetischen Buddhismus', work: 'Toward a True Kinship of Faiths (2010)' },
    { name: 'Deepak Chopra', role: 'Arzt und Autor', work: 'The Third Jesus (2008)' },
  ],
  steelman: `Es gibt Milliarden aufrichtiger Hindus, Buddhisten, Muslime, Juden, Sikhs und Menschen ohne Religion. Viele von ihnen leben selbstloser als die meisten Christen. Zu behaupten, sie alle lägen in der wichtigsten Frage des Lebens falsch und nur die eigene Gruppe habe recht, ist der Gipfel der Selbstüberschätzung. Wahre Demut sagt: Ich weiß es nicht genau, und andere haben auch ein Stück der Wahrheit. Die Geschichte zeigt, wohin der Anspruch „Nur wir haben recht" geführt hat – zu Kreuzzügen, Zwangsbekehrungen und kolonialer Herablassung. Ein liebender Gott, wenn es ihn gibt, ist sicher größer als die Engstirnigkeit einer einzelnen Religion.`,
  biblical: {
    summary: `Der Anspruch „Ich bin der Weg … niemand kommt zum Vater denn durch mich" (Joh 14,6) stammt nicht von Christen, sondern von Jesus selbst; die Apostel geben ihn nur weiter (Apg 4,12). Zugleich verurteilt die Bibel religiöse Überheblichkeit schärfer als jede andere Haltung: Jesus stellt den selbstgerechten Pharisäer unter den demütigen Zöllner (Lk 18,9–14). Weil das Heil reines Geschenk ist, ist jedes Rühmen ausgeschlossen (Eph 2,8–9; 1 Kor 1,31). Christen sollen Rechenschaft über ihre Hoffnung geben „mit Sanftmütigkeit und Furcht" (1 Petr 3,15).`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,12', quote: `Und ist in keinem andern Heil, ist auch kein anderer Name unter dem Himmel den Menschen gegeben, darin wir sollen selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Epheser', ref: '2,8–9', quote: `Denn aus Gnade seid ihr selig geworden durch den Glauben, und dasselbige nicht aus euch, Gottes Gabe ist es; nicht aus den Werken, auf daß sich nicht jemand rühme.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '18,13–14', quote: `Und der Zöllner stand von ferne, wollte auch seine Augen nicht aufheben gen Himmel, sondern schlug an seine Brust und sprach: Gott, sei mir Sünder gnädig! Ich sage euch: Dieser ging hinab gerechtfertigt in sein Haus vor jenem.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '3,15', quote: `Seid allezeit bereit zur Verantwortung jedermann, der Grund fordert der Hoffnung, die in euch ist, und das mit Sanftmütigkeit und Furcht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat das Bekenntnis zu Christus als einzigem Erlöser über Jahrhunderte als Minderheit gelebt – nicht als herrschende Macht, sondern oft unter Druck, ohne Kreuzzug und ohne Kolonialherrschaft. Ihre geistliche Tradition stellt die Demut über alle anderen Tugenden: Der hl. Antonius sah die Schlingen des Feindes über die ganze Welt gebreitet und hörte auf seine Frage, wer ihnen entgehen könne, die Antwort: „Die Demut." Klarheit im Bekenntnis und Demut im Herzen gehören in dieser Tradition zusammen.`,
    sources: [
      { kind: 'kirchenvater', work: 'Apophthegmata Patrum', ref: 'Antonius 7', year: '4./5. Jh.', quote: `Ich sah alle Schlingen des Feindes über die Erde ausgebreitet und sagte seufzend: „Wer kann ihnen entkommen?" Da hörte ich eine Stimme zu mir sagen: „Die Demut."`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Arroganz ist eine Haltung, nicht der Inhalt einer Aussage. Und der Satz „Nur Jesus ist der Weg" stammt nicht von mir, sondern von Jesus; ich bin nur der Briefträger. Übrigens: Wer sagt „Es ist falsch, eine Religion für die einzig wahre zu halten", hält seine eigene Sicht auch für richtig und meine für falsch. Und das Christentum ist zutiefst demütigend: Es sagt nicht, dass ich besser bin als du, sondern dass ich genauso Gnade brauche wie jeder andere – sie wird geschenkt, nicht verdient.`,
  keyPoints: [
    `**Arroganz ist eine Haltung:** Ob ein Anspruch arrogant ist, hängt davon ab, wie er vertreten wird und ob er wahr ist – nicht davon, dass er exklusiv ist.`,
    `**Der Anspruch kommt von Jesus:** Christen erfinden ihn nicht, sie geben ihn weiter (Joh 14,6; Apg 4,12).`,
    `**Der Einwand ist selbst exklusiv:** „Alle Religionen gelten" ist eine Position, die keine große Religion teilt und die Exklusivisten für falsch erklärt (Plantinga).`,
    `**Gnade schließt Rühmen aus:** Christen sind nicht besser, sondern beschenkt (Eph 2,8–9). Der Grund der Exklusivität – Christus statt eigener Leistung – ist zugleich der Grund der Demut.`,
    `**Alle Religionen sind irgendwo exklusiv:** Koran 3,85; Majjhima-Nikaya 11; Advaita stuft andere Wege herab; der Bahai-Glaube verwirft spätere Propheten.`,
    `**Christliches Versagen ehrlich benennen:** Kreuzzüge und Zwang widersprechen Christus; die Botschaft selbst ist die schärfste Kritik christlicher Überheblichkeit.`,
  ],
  voices: [
    {
      person: 'tim-keller',
      role: 'als Pastor im pluralistischen New York',
      text: `Timothy Keller bemerkt, dass der Vorwurf der Arroganz sich selbst trifft: Wer sagt, keine Religion dürfe beanspruchen, die einzig wahre zu sein, vertritt selbst eine sehr bestimmte religiöse Überzeugung über Gott und hält alle, die widersprechen, für im Irrtum. Und er argumentiert, dass gerade das Evangelium Demut hervorbringt: Wer weiß, dass er nicht durch eigene Leistung, sondern allein durch Gnade angenommen ist, hat keinen Grund, auf andere herabzusehen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', year: '2008', ref: 'Kap. 1', status: 'paraphrase' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Diagnostiker der modernen „Bescheidenheit"',
      text: `Chesterton beobachtete eine merkwürdige Verschiebung: Früher war der Mensch bescheiden in Bezug auf sich selbst und sicher in Bezug auf die Wahrheit. Heute ist er stolz auf sich selbst und bescheiden in Bezug auf die Wahrheit – er hält es für Demut, sich über nichts sicher zu sein. Für Chesterton ist das Demut am falschen Ort: Sie lähmt das Denken, ohne das Ego zu heilen.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxy', ref: 'Kap. 3 („The Suicide of Thought")', year: '1908', original: 'What we suffer from to-day is humility in the wrong place. Modesty has moved from the organ of ambition. Modesty has settled upon the organ of conviction; where it was never meant to be.', quote: `Woran wir heute leiden, ist Demut am falschen Ort. Die Bescheidenheit ist vom Organ des Ehrgeizes weggezogen und hat sich auf dem Organ der Überzeugung niedergelassen, wo sie nie hingehörte.`, status: 'verbatim', translation: 'eigene Übersetzung' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Erkenntnistheoretiker',
      text: `Alvin Plantinga hat den Vorwurf geprüft, der religiöse Exklusivist sei arrogant oder egoistisch. Sein Ergebnis: Wer die Argumente der anderen kennt, sorgfältig abwägt und dennoch zu dem Schluss kommt, dass seine Überzeugung wahr ist, verhält sich nicht arrogant – er tut, was jeder Mensch mit Überzeugungen tut. Auch der Pluralist hält seine Sicht für richtiger als die der Exklusivisten. Wäre das arrogant, so wären alle arrogant.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Pluralism: A Defense of Religious Exclusivism', year: '1995', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Lehrer der Demut',
      text: `Der hl. Antonius lebte die radikalste Christusnachfolge seiner Zeit – und hielt die Demut für den einzigen Weg, den Schlingen des Bösen zu entgehen. Die Wüstenväter misstrauten jedem, der sich für besser hielt als andere; sie hielten sich selbst für die größten Sünder. Ihr Bekenntnis zu Christus war unerschütterlich, ihr Urteil über andere Menschen äußerst zurückhaltend. Das ist das koptische Modell für das Gespräch mit Andersglaubenden.`,
      sources: [
        { kind: 'kirchenvater', work: 'Apophthegmata Patrum', ref: 'Antonius 7', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel der Gnade',
      text: `Paulus hatte allen Grund, stolz zu sein – Herkunft, Bildung, religiöser Eifer. Er nennt das alles „Dreck" im Vergleich zur Erkenntnis Christi (Phil 3,4–8) und sich selbst den „vornehmsten" unter den Sündern (1 Tim 1,15). Weil das Heil ganz Gnade ist, kann sich niemand rühmen außer des Herrn (1 Kor 1,31). Wer Christus als einzigen Weg verkündet, verkündet nicht seine eigene Überlegenheit, sondern seine eigene Bedürftigkeit.`,
      sources: [
        { kind: 'bibel', work: '1. Timotheus', ref: '1,15', quote: `Das ist gewißlich wahr und ein teuer wertes Wort, daß Christus Jesus gekommen ist in die Welt, die Sünder selig zu machen, unter welchen ich der vornehmste bin.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'milliarden-falsch',
      objection: `Es ist arrogant zu behaupten, nur deine Religion sei wahr und Milliarden andere Menschen lägen falsch.`,
      objectionBy: 'Deepak Chopra (sinngemäß)',
      answer: `Arroganz ist eine Haltung, nicht der Inhalt einer Aussage. Ob ein Anspruch arrogant ist, hängt davon ab, ob er wahr ist und wie man ihn vertritt. Und der Satz „Niemand kommt zum Vater denn durch mich" stammt nicht von mir, sondern von Jesus (Joh 14,6). Ich bin nur der Briefträger – ich rühme mich nicht des Briefes.`,
      followUps: [
        {
          id: 'du-glaubst-recht-zu-haben',
          objection: `Aber du bist doch überzeugt, dass du recht hast und die anderen nicht. Das ist arrogant.`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `Ja – genauso wie du überzeugt bist, dass ich mit meinem Exklusivismus falsch liege. Jeder, der eine Überzeugung hat, hält das Gegenteil für falsch. Wenn das schon Arroganz ist, dann sind alle Menschen arrogant, und das Wort verliert seinen Sinn. Die eigentliche Frage ist: Mit welchen Gründen und in welchem Geist vertreten wir unsere Überzeugungen?`,
          followUps: [
            {
              id: 'ich-lasse-alle-gelten',
              objection: `Ich halte niemanden für falsch. Ich lasse alle Religionen gelten.`,
              objectionBy: 'Deepak Chopra (sinngemäß)',
              answer: `Nicht ganz – du hältst mich für falsch, weil ich sage, Jesus sei der einzige Weg. Und du hältst den Muslim für falsch, der sagt, der Islam sei die einzig wahre Religion. „Alle Religionen gelten gleich" ist selbst eine Position, die keine der großen Religionen teilt und die alle Exklusivisten ausschließt. Auch du ziehst eine Grenze – nur an einer anderen Stelle.`,
              questionsBack: [`Hältst du die Überzeugung eines Muslims, dass nur der Islam wahr ist, für richtig oder für falsch?`],
            },
          ],
        },
      ],
    },
    {
      id: 'demut-heisst-nichtwissen',
      objection: `Echte Demut heißt zuzugeben, dass man es nicht weiß.`,
      objectionBy: 'Karen Armstrong',
      answer: `Demut ist Ehrlichkeit über die eigenen Grenzen. Manchmal heißt das „Ich weiß es nicht", manchmal heißt es „Ich habe etwas empfangen, das ich nicht verdient habe". Christen kennen Christus nicht aufgrund ihrer Klugheit, sondern weil Gott sich gezeigt hat – das ist demütigend (1 Kor 1,26–31). Chesterton warnte vor „Demut am falschen Ort": stolz auf sich selbst, aber unsicher in allem, was wahr ist.`,
      followUps: [
        {
          id: 'agnostisch-ehrlicher',
          objection: `Agnostische Bescheidenheit ist doch einfach ehrlicher.`,
          objectionBy: 'Karen Armstrong (sinngemäß)',
          answer: `In vielen Einzelfragen bin ich gern agnostisch. Aber wenn Gott sich wirklich gezeigt hat, ist es keine Demut, das zu ignorieren. Bist du auch agnostisch, ob Jesus auferstanden ist? Dann wäre die demütige Konsequenz, sich die Belege anzusehen – nicht, die Frage für unbeantwortbar zu erklären.`,
        },
      ],
    },
    {
      id: 'kreuzzuege-kolonialismus',
      objection: `Gerade Christen haben sich mit Kreuzzügen, Zwangsbekehrungen und Kolonialismus arrogant über andere erhoben.`,
      objectionBy: 'Karen Armstrong',
      answer: `Das ist wahr und beschämend – und es widerspricht Jesus, der seinen Jüngern die Füße wusch (Joh 13), den selbstgerechten Pharisäer tadelte (Lk 18,9–14) und Feindesliebe gebot. Der Missbrauch einer Wahrheit widerlegt sie aber nicht. Die christliche Botschaft selbst ist die schärfste Kritik christlicher Überheblichkeit. Übrigens: Die koptische Kirche hat ihren Glauben seit Jahrhunderten als Minderheit bezeugt – nicht als Kolonialmacht.`,
      followUps: [
        {
          id: 'mission-respektlos',
          objection: `Mission ist an sich respektlos. Lasst die Menschen in ihrer Religion und Kultur.`,
          objectionBy: 'Dalai Lama (sinngemäß)',
          answer: `Mit jemandem zu teilen, was man für wahr und rettend hält – ohne Zwang –, heißt, ihn als denkenden Erwachsenen ernst zu nehmen. Das Christentum ist keine westliche Kultur: Es kam früh nach Ägypten, Äthiopien, Armenien und Indien. Zwang ist falsch; Einladung ist Liebe. Und die Allgemeine Erklärung der Menschenrechte (Art. 18) schützt ausdrücklich auch die Freiheit, seine Religion zu wechseln.`,
          sources: [
            { kind: 'sonstiges', work: 'Allgemeine Erklärung der Menschenrechte', ref: 'Art. 18', year: '1948', quote: `Jeder hat das Recht auf Gedanken-, Gewissens- und Religionsfreiheit; dieses Recht schließt die Freiheit ein, seine Religion oder Überzeugung zu wechseln …`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'engstirniger-gott',
      objection: `Nur ein engstirniger Gott würde einen einzigen Weg zulassen.`,
      objectionBy: 'Deepak Chopra',
      answer: `Ist es engstirnig, wenn Gott selbst den Weg baut, ihn für alle öffnet und den Preis dafür bezahlt? Ein engstirniger Gott würde verlangen, dass wir zu ihm hinaufklettern; der christliche Gott steigt zu allen herab. Die Exklusivität ist nicht ethnisch oder kulturell, sondern personal – und die Tür steht jedem offen (Joh 10,9; Offb 7,9). Übrigens hat jede Religion ihren Weg: den Achtfachen Pfad, die Fünf Säulen, den Weg der Erkenntnis.`,
      followUps: [
        {
          id: 'warum-gerade-jesus',
          objection: `Aber warum ausgerechnet Jesus?`,
          objectionBy: 'Deepak Chopra (sinngemäß)',
          answer: `Weil nur in ihm Gott selbst unsere Schuld trägt und den Tod überwindet. Wenn das wahr ist, braucht es keinen anderen Weg; wenn es falsch ist, bricht das Christentum zusammen – das sagt Paulus selbst (1 Kor 15,17). Darum ist die ehrlichste Antwort auf deine Frage: Lass uns gemeinsam prüfen, ob Jesus auferstanden ist.`,
        },
      ],
    },
    {
      id: 'andere-toleranter',
      objection: `Andere Religionen sind toleranter – sie lassen alle Wege gelten. Nur das Christentum ist so exklusiv.`,
      objectionBy: 'John Hick (sinngemäß)',
      answer: `Jede Religion ist irgendwo exklusiv. Der Koran sagt, eine andere Religion als der Islam werde nicht angenommen (3,85). Der Buddha sagt im Pali-Kanon, nur in seiner Lehre gebe es wahre Asketen (MN 11). Der Advaita-Vedanta stuft andere Wege als Vorstufen ein; der Bahai-Glaube verwirft spätere Propheten. Exklusivität ist kein christliches Sondermerkmal – die Frage ist nur, ob ein Anspruch wahr ist und wie man ihn vertritt.`,
      sources: [
        { kind: 'koran', work: 'Sure 3 (Al Imran)', ref: '3:85', quote: `Wer aber als Religion etwas anderes als den Islam begehrt, so wird es von ihm nicht angenommen werden, und im Jenseits wird er zu den Verlierern gehören.`, translation: 'sinngemäß nach Bubenheim/Elyas', status: 'paraphrase', url: 'https://quran.com/3/85' },
        { kind: 'oestlich', work: 'Majjhima-Nikaya 11 (Cula-Sihanada-Sutta)', original: 'idheva, bhikkhave, samaṇo … suññā parappavādā samaṇehi aññehi', quote: `Nur hier, ihr Mönche, gibt es einen (wahren) Asketen … die Lehren der anderen sind leer von Asketen.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'nur-christen-hoelle',
          objection: `Aber nur Christen sagen, dass alle Nichtchristen in die Hölle kommen.`,
          objectionBy: 'Deepak Chopra (sinngemäß)',
          answer: `Das sagt die orthodoxe Kirche so gerade nicht. Sie sagt: Das Heil ist in Christus, und sie weiß, wo die Kirche ist – aber sie maßt sich kein Urteil darüber an, wie Gott jeden einzelnen Menschen richtet. „Der Richter aller Welt" wird gerecht und barmherzig richten (Gen 18,25). Siehe dazu den Claim „Was ist mit denen, die nie von Jesus gehört haben?".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hältst du meine Überzeugung, dass Jesus der einzige Weg ist, für falsch? Ist das nicht auch ein exklusiver Anspruch?`,
    `Wäre ein Arzt arrogant, der sagt, nur dieses eine Gegengift helfe – wenn es stimmt?`,
    `Welche Religion lässt wirklich alle anderen Wege als gleich gültig gelten – auch in ihren eigenen Schriften?`,
    `Ist es demütiger, einen Weg selbst zu erklimmen, oder sich tragen zu lassen?`,
  ],
  avoid: [
    `Reagiere nicht beleidigt oder rechthaberisch – du würdest den Vorwurf bestätigen. Sanftmut und Furcht (1 Petr 3,15)!`,
    `Behaupte nicht, du seist besser als Andersgläubige; sag, dass du genauso Gnade brauchst.`,
    `Rechtfertige nicht die Kreuzzüge oder Zwangsbekehrungen.`,
  ],
  concessions: [
    `Christen haben ihren Glauben oft arrogant und gewaltsam vertreten; das widerspricht Christus.`,
    `Viele Andersgläubige leben selbstloser als viele Christen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Warum Gott? (The Reason for God)', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie (Orthodoxy), Kap. 3', year: '1908', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Lesslie Newbigin', work: 'The Gospel in a Pluralist Society', year: '1989', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Pluralismus', 'Arroganz', 'Demut', 'Exklusivität', 'Mission'],
  related: [
    'pluralismus/alle-religionen-gleich-wahr',
    'pluralismus/nie-von-jesus-gehoert',
    'hinduismus/alle-wege-zum-gipfel',
    'christentum-gesellschaft/christentum-kolonialismus',
    'religion-gewalt/kreuzzuege',
  ],
};

export default claim;
