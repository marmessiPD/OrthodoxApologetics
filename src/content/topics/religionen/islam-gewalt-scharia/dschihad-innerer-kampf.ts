import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'dschihad-innerer-kampf',
  title: `„Dschihad bedeutet vor allem den inneren Kampf."`,
  proponents: [
    { name: 'Hamza Yusuf', role: 'US-amerikanischer islamischer Gelehrter, Zaytuna College', work: 'Vorträge über den „größeren Dschihad" gegen das Ego' },
    { name: 'John L. Esposito', role: 'Islamwissenschaftler, Georgetown University', work: 'Unholy War: Terror in the Name of Islam (2002)' },
    { name: 'Reza Aslan', role: 'Religionswissenschaftler und Publizist', work: 'No god but God (2005)' },
    { name: 'Mirza Ghulam Ahmad', role: 'Gründer der Ahmadiyya (gest. 1908)', work: 'Schriften über die Aufhebung des bewaffneten Dschihad für seine Zeit' },
  ],
  steelman: `„*Jihād* heißt wörtlich ‚Anstrengung, Bemühen' (Wurzel *j-h-d*). Der Koran gebietet den Dschihad mit dem Koran selbst: ‚Ringe mit ihnen damit (mit dem Koran) in großem Ringen' (25:52) – ein Vers aus Mekka, als es noch keine Kämpfe gab. ‚Diejenigen, die sich um Unseretwillen abmühen, werden Wir gewiss Unsere Wege leiten' (29:69). Der Prophet sagte bei der Rückkehr aus einer Schlacht: ‚Wir kehren vom kleinen Dschihad zum großen Dschihad zurück' – dem Kampf gegen das eigene Ich. Der Mudschahid ist, wer gegen sich selbst ringt (Tirmidhi). Das beste Dschihad ist ein wahres Wort vor einem ungerechten Herrscher. Die Sufi-Tradition von al-Ghazali bis heute hat den inneren Kampf ins Zentrum gestellt. Wer Dschihad mit ‚Heiliger Krieg' übersetzt, verfälscht den Islam."`,
  biblical: {
    summary: `Das Neue Testament kennt einen geistlichen Kampf – und es *vergeistlicht* ihn ausdrücklich: „Denn wir haben nicht mit Fleisch und Blut zu kämpfen, sondern mit Fürsten und Gewaltigen … mit den bösen Geistern unter dem Himmel" (Eph 6,12). „Die Waffen unsrer Ritterschaft sind nicht fleischlich" (2 Kor 10,4). Die „Waffenrüstung Gottes" besteht aus Wahrheit, Gerechtigkeit, Evangelium des Friedens, Glauben, Heil und dem Wort Gottes (Eph 6,13–17). Im Neuen Testament gibt es keinen einzigen Vers, der Gläubigen den bewaffneten Kampf für den Glauben befiehlt.`,
    detail: `**Die gegenläufige Richtung:** Im Neuen Testament wird Kampfsprache konsequent auf den geistlichen Kampf übertragen. Im Koran verläuft die Entwicklung umgekehrt: von der mekkanischen Geduld und dem „Ringen mit dem Koran" (25:52) zum medinensischen Kampf „mit Gut und Leben" (4:95; 9:41; 9:111). Christen können daher mit Überzeugung sagen: Der „größere Dschihad" – der Kampf gegen Sünde, Leidenschaften und Dämonen – ist im Christentum nicht *ein* Aspekt neben dem Krieg, sondern der *einzige* Kampf, den das Evangelium kennt.`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '6,12', quote: `Denn wir haben nicht mit Fleisch und Blut zu kämpfen, sondern mit Fürsten und Gewaltigen, nämlich mit den Herren der Welt, die in der Finsternis dieser Welt herrschen, mit den bösen Geistern unter dem Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '10,3–4', quote: `Denn ob wir wohl im Fleisch wandeln, so streiten wir doch nicht fleischlicherweise. Denn die Waffen unsrer Ritterschaft sind nicht fleischlich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist die Heimat des christlichen Mönchtums – und damit des „inneren Kampfes" in seiner ursprünglichsten Form. Der hl. Antonius der Große zog in die Wüste, um gegen Leidenschaften und Dämonen zu kämpfen; Athanasius beschreibt diesen Kampf in der *Vita Antonii*. Die Wüstenväter nannten ihr Leben „Kampf" (*agōn*) und „Kriegsdienst" Christi – ohne je eine Waffe gegen Menschen zu erheben. Basilius der Große empfahl selbst Soldaten, die in einem gerechten Krieg getötet hatten, drei Jahre von der Kommunion fernzubleiben – ein Zeichen, wie ernst die Kirche jedes Blutvergießen nahm.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '5–10', year: 'um 357', quote: `Antonius kämpft in der Wüste gegen die Versuchungen und Angriffe der Dämonen und besiegt sie durch Gebet, Fasten und das Zeichen des Kreuzes.`, status: 'paraphrase' },
      { kind: 'konzil', author: 'Basilius der Große', work: 'Kanonischer Brief an Amphilochius (Brief 188)', ref: 'Kanon 13', year: '374', quote: `Unsere Väter haben das Töten im Krieg nicht als Mord gerechnet; doch wäre es gut, wenn die, deren Hände nicht rein sind, sich drei Jahre der Kommunion enthielten.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Sprachlich ist *jihād* „Anstrengung"; im Koran wird *jihād fī sabīli llāh* („Anstrengung auf dem Weg Gottes") in medinensischen Versen meist mit dem Kampf „mit Gut und Leben" verbunden, während für den Kampf selbst oft *qitāl* steht. In den Hadith-Sammlungen und im klassischen Recht bezeichnet *jihād* überwiegend den bewaffneten Kampf: Die „Bücher des Dschihad" bei al-Bukhari und Muslim behandeln Kriegsbeute, Gefangene, Martyrium und Kriegsregeln. Die Lehre vom „großen Dschihad" gegen das Ich ist vor allem in der Sufik verankert; das berühmte Hadith dazu gilt bei muslimischen Hadith-Kritikern als schwach.`,
    detail: `**Das Hadith vom „großen Dschihad":** Al-Bayhaqi überliefert es in *az-Zuhd al-kabīr* und bemerkt selbst, die Kette enthalte Schwäche. Ibn Taymiyya urteilte, es habe keine Grundlage und keiner der Kenner der Prophetenworte habe es überliefert; al-Albani stufte es als *munkar* ein. Ibn Rajab überliefert den Satz als Ausspruch des Ibrahim ibn Abi ʿAbla, nicht des Propheten. Authentisch ist dagegen ein Bericht bei at-Tirmidhi: „Der Mudschahid ist, wer gegen sich selbst ringt."

**Moderne Muslime:** Selbst ein Papier des konservativen Yaqeen Institute (2018) betont, das schwache Hadith dürfe nicht so gelesen werden, als sei der äußere Dschihad wertlos – der äußere Kampf sei eine echte, im Koran verankerte Pflicht unter bestimmten Bedingungen.`,
    sources: [
      { kind: 'hadith', author: 'al-Bayhaqi', work: 'az-Zuhd al-kabir', ref: 'Nr. 373', year: '11. Jh.', quote: `„Wir sind vom kleinen Dschihad zum großen Dschihad zurückgekehrt." – Al-Bayhaqi: „Dies ist eine Kette, in der Schwäche liegt."`, status: 'paraphrase', note: 'Nummer nach der Angabe im Yaqeen-Papier „Is Islam a Conquest Ideology?" (2018).' },
      { kind: 'hadith', author: 'Ibn Taymiyya', work: 'Majmuʿ al-Fatawa', quote: `Das Hadith hat keine Grundlage; keiner der Kenner der Worte und Taten des Propheten hat es überliefert.`, status: 'unverified', note: 'Band/Seite in Sekundärquellen unterschiedlich angegeben (1/197 bzw. 11/197); vor Verwendung prüfen.' },
      { kind: 'gegner', author: 'Yaqeen Institute for Islamic Research', work: 'Is Islam a Conquest Ideology? On Jihad, War, & Peace', year: '2018', quote: `Das schwache Hadith vom großen Dschihad so zu lesen, als mache es den äußeren Dschihad wertlos, ist falsch und widerspricht dem Koran.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Dschihad heißt sprachlich „Anstrengung", und es gibt im Islam den Gedanken des inneren Kampfes – das erkenne ich an. Aber das berühmte Hadith vom „großen Dschihad" gilt selbst bei muslimischen Gelehrten als schwach (al-Bayhaqi, Ibn Taymiyya, al-Albani). In Koran, Hadith und klassischem Recht meint Dschihad überwiegend den bewaffneten Kampf „mit Gut und Leben" (4:95; 9:111). Im Neuen Testament dagegen ist der geistliche Kampf der *einzige* Kampf: „Wir haben nicht mit Fleisch und Blut zu kämpfen" (Eph 6,12).`,
  keyPoints: [
    `**Sprachlich breit, rechtlich eng:** *Jihād* heißt „Anstrengung"; im klassischen Recht und in den Hadith-Büchern über den Dschihad meint es fast immer den Krieg.`,
    `**Das Hadith vom „großen Dschihad" ist schwach:** al-Bayhaqi selbst, Ibn Taymiyya (keine Grundlage), al-Albani (*munkar*).`,
    `**Medinensische Verse:** Dschihad „mit eurem Gut und eurem Leben" (4:95; 9:41; 61:11); 9:111 – „sie kämpfen auf Allahs Weg, töten und werden getötet".`,
    `**Die Ausnahmen bestätigen die Regel:** Wer zum Dschihad wollte, wurde manchmal zu den Eltern geschickt – die Grundbedeutung seiner Frage war der Feldzug.`,
    `**Gegenläufige Entwicklung:** Das NT vergeistlicht den Kampf (Eph 6; 2 Kor 10); der Koran entwickelt sich von Mekka (Geduld) zu Medina (Kampf).`,
    `**Das koptische Zeugnis:** Antonius und die Wüstenväter – der „innere Kampf" ohne Waffen gegen Menschen; Märtyrer, die sterben, ohne zu töten.`,
  ],
  voices: [
    {
      person: 'antonius',
      role: 'als Vater des Mönchtums und Lehrer des geistlichen Kampfes',
      text: `Antonius der Große lebte jahrzehntelang in der ägyptischen Wüste, um gegen die eigenen Leidenschaften und gegen die Dämonen zu kämpfen. Seine Waffen waren Gebet, Fasten, Demut und das Wort Gottes. Er lehrte seine Schüler, dass der Feind nicht der Mensch ist, sondern die Sünde. Das ist der „größere Kampf" in seiner reinsten Form – und er kam ohne „kleineren Kampf" gegen Menschen aus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '21–43', year: 'um 357', quote: `Antonius' Rede an die Mönche über den Kampf gegen die Dämonen und die Unterscheidung der Geister.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel des geistlichen Kampfes',
      text: `Paulus verwendet Kriegs- und Sportbilder – Waffenrüstung, Kampf, Wettlauf –, aber er wendet sie ausnahmslos auf das geistliche Leben an. Der Christ kämpft gegen Sünde, Lüge und die Mächte der Finsternis, nicht gegen Menschen aus Fleisch und Blut. Seine „Waffen" sind Wahrheit, Gerechtigkeit, Glaube und das Evangelium des Friedens (Eph 6,13–17).`,
      sources: [
        { kind: 'bibel', work: 'Epheser', ref: '6,13–17', quote: `Ergreifet den Harnisch Gottes … umgürtet mit Wahrheit, angezogen mit dem Krebs der Gerechtigkeit, und an den Beinen gestiefelt, als fertig, zu treiben das Evangelium des Friedens.`, translation: 'Luther 1912', status: 'paraphrase' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der über den Dschihad schrieb',
      text: `Qureshi zeigt in *Answering Jihad*, dass das Hadith vom „großen Dschihad" in den kanonischen Sammlungen fehlt und von muslimischen Gelehrten als schwach eingestuft wird. Er beschreibt, wie der Dschihad im Koran schrittweise vom Ertragen über die erlaubte Verteidigung bis zum allgemeinen Kampf entwickelt wird. Zugleich betont er mit großer Wärme, dass die meisten Muslime friedlich sind – oft, weil sie diese Entwicklung nicht kennen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', quote: `Das Hadith vom „großen Dschihad" ist schwach; Koran und Hadith zeigen eine Entwicklung des Dschihad hin zum militärischen Kampf.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Bischof und Kanonist',
      text: `Basilius der Große erkannte an, dass die Kirchenväter das Töten in einem Verteidigungskrieg nicht als Mord werteten. Dennoch empfahl er Soldaten, die getötet hatten, eine dreijährige Enthaltung von der Kommunion. Diese Haltung zeigt den christlichen Instinkt: Selbst wo Gewalt als unvermeidlich gilt, wird sie nie zur verdienstvollen religiösen Tat, geschweige denn zum Weg ins Paradies.`,
      sources: [
        { kind: 'konzil', author: 'Basilius der Große', work: 'Brief 188 an Amphilochius', ref: 'Kanon 13', year: '374', quote: `Empfehlung einer dreijährigen Enthaltung von der Kommunion für Soldaten, die im Krieg getötet haben.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kleiner-grosser-dschihad',
      objection: `Der Prophet sagte bei der Rückkehr aus einer Schlacht: „Wir kehren vom kleinen Dschihad zum großen Dschihad zurück – dem Kampf gegen das eigene Ich." Der innere Kampf ist der eigentliche Dschihad.`,
      objectionBy: 'Hamza Yusuf',
      answer: `Dieses Hadith gilt nach muslimischen Maßstäben als schwach: Al-Bayhaqi, der es überliefert, sagt selbst, die Kette enthalte Schwäche; Ibn Taymiyya urteilte, es habe keine Grundlage; al-Albani stufte es als *munkar* ein. Es fehlt in allen sechs kanonischen Sammlungen. Und selbst wenn es echt wäre, setzt es voraus, dass der „kleine Dschihad" die Schlacht war, aus der man zurückkehrte.`,
      followUps: [
        {
          id: 'bedeutung-trotzdem-richtig',
          objection: `Auch wenn die Kette schwach ist, die Bedeutung ist richtig. At-Tirmidhi überliefert authentisch: „Der Mudschahid ist, wer gegen sich selbst ringt."`,
          objectionBy: 'Hamza Yusuf',
          answer: `Das gestehe ich gern zu: Es gibt authentische Worte über den Kampf gegen das eigene Ich. Aber sie *ergänzen* den bewaffneten Dschihad, sie ersetzen ihn nicht. In denselben Sammlungen behandeln die „Bücher des Dschihad" Kriegsbeute, Gefangene und Märtyrertod. Ein Bericht über den inneren Kampf hebt Hunderte über den äußeren nicht auf.`,
          sources: [
            { kind: 'hadith', work: 'Jamiʿ at-Tirmidhi', ref: 'Kitab Fada\'il al-Jihad', quote: `„Der Mudschahid ist, wer gegen sich selbst ringt."`, original: `al-mujāhidu man jāhada nafsahu`, status: 'unverified', note: 'Bericht des Fadala ibn ʿUbayd; häufig als Tirmidhi 1621 zitiert – Nummer vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'mehrheit-versteht-spirituell',
              objection: `Die meisten Muslime verstehen Dschihad heute spirituell oder als Verteidigung. Das ist der gelebte Islam.`,
              objectionBy: 'John L. Esposito',
              answer: `Gott sei Dank tun das viele. Aber die Frage ist, was Quellen und klassisches Recht lehren – denn auf diese berufen sich die Extremisten, nicht auf die Sufis. Eine Reform, die halten soll, muss sich den Texten ehrlich stellen, statt sie zu übergehen.`,
              followUps: [
                {
                  id: 'extremisten-recht-geben',
                  objection: `Wenn du sagst, die Extremisten lesen die Texte richtig, gibst du ihnen recht und lieferst ihnen Munition.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Nein. Ich sage, dass das klassische Recht den Dschihad überwiegend als Krieg verstand – das räumen auch konservative muslimische Gelehrte ein. Die Extremisten irren in vielem anderen: Das klassische Recht verbot etwa ausdrücklich, Frauen und Kinder zu töten (Bukhari 3015). Ehrliche Reformer stellen sich den Texten; Leugnung hilft niemandem – am wenigsten den jungen Muslimen, die die Texte eines Tages selbst lesen.`,
                  sources: [
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3015', quote: `Der Prophet verbot die Tötung von Frauen und Kindern.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3015' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dschihad-mit-koran-25-52',
      objection: `Der Koran befiehlt den Dschihad mit dem Koran selbst: „Ringe mit ihnen damit in großem Ringen" (25:52). Das ist geistiger Kampf durch das Wort.`,
      objectionBy: 'Javed Ahmad Ghamidi',
      answer: `25:52 ist ein mekkanischer Vers aus der Zeit vor allen Kämpfen, und *bihi* („damit") bezieht sich auf den Koran – da stimme ich zu. Aber in Medina wird Dschihad zunehmend mit dem Kampf verbunden: „Allah hat diejenigen, die mit ihrem Gut und ihrem Leben kämpfen, im Rang über die Sitzenbleibenden erhoben" (4:95); „Allah hat von den Gläubigen ihr Leben und ihr Gut erkauft … sie kämpfen auf Allahs Weg, töten und werden getötet" (9:111).`,
      sources: [
        { kind: 'koran', work: 'Sure 25 (al-Furqan)', ref: '25:52', quote: `So gehorche nicht den Ungläubigen und ringe mit ihnen damit in großem Ringen.`, original: `wa-jāhidhum bihi jihādan kabīrā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/25/52' },
        { kind: 'koran', work: 'Sure 9 (at-Tawba)', ref: '9:111', quote: `Allah hat von den Gläubigen ihre Seelen und ihr Vermögen dafür erkauft, dass ihnen der Paradiesgarten gehört: Sie kämpfen auf Allahs Weg, und so töten sie und werden getötet.`, original: `yuqātilūna fī sabīli llāhi fa-yaqtulūna wa-yuqtalūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/9/111' },
      ],
      followUps: [
        {
          id: 'kriegsverse-verteidigung-22-39',
          objection: `Alle Kriegsverse sind Verteidigung. Der erste lautet: „Erlaubnis ist denen gegeben, die bekämpft werden, weil ihnen Unrecht geschah" (22:39).`,
          objectionBy: 'Mustafa Akyol',
          answer: `22:39 ist tatsächlich die erste Erlaubnis zum Kampf, und sie ist defensiv. Klassische Gelehrte beschreiben jedoch Stufen: Geduld in Mekka, dann Erlaubnis zur Verteidigung (22:39), dann Kampf gegen Angreifer (2:190), schließlich Kampf gegen die Götzendiener insgesamt (9:5; 9:36) und gegen die Schriftbesitzer bis zum Tribut (9:29). Ibn al-Qayyim hat diese Stufen in *Zād al-maʿād* beschrieben.`,
          sources: [
            { kind: 'hadith', author: 'Ibn Qayyim al-Jawziyya', work: 'Zad al-maʿad', year: '14. Jh.', quote: `Der Kampf war zuerst verboten, dann erlaubt, dann gegen die Angreifer geboten, schließlich gegen alle Götzendiener vorgeschrieben.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'stufenlehre-konstrukt',
              objection: `Die Stufenlehre ist eine spätere juristische Konstruktion, nicht der Koran selbst.`,
              objectionBy: 'Mustafa Akyol',
              answer: `Teilweise berechtigt – Gelehrte streiten darüber, das gestehe ich zu. Aber sie ist die vorherrschende klassische Position, und die Gegenposition („alle Kriegsverse sind defensiv") muss erklären, warum 9:29 theologische Kriterien nennt und 9:123 befiehlt: „Kämpft gegen die Ungläubigen, die euch nahe sind, und sie sollen Härte bei euch finden."`,
              sources: [
                { kind: 'koran', work: 'Sure 9 (at-Tawba)', ref: '9:123', quote: `O die ihr glaubt, kämpft gegen diejenigen von den Ungläubigen, die euch nahe sind, und sie sollen Härte bei euch finden.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/9/123' },
              ],
              followUps: [
                {
                  id: 'vers-9-123-byzantiner',
                  objection: `9:123 meint die feindlichen Byzantiner in der Nachbarschaft, die die Muslime bedrohten.`,
                  objectionBy: 'Jonathan A. C. Brown',
                  answer: `Das mag der Anlass gewesen sein. Aber der Wortlaut ist allgemein – „die Ungläubigen" –, und das klassische Recht leitete daraus die allgemeine Regel ab, den Kampf bei den nächstgelegenen Ungläubigen zu beginnen. Kontext muss man aus dem Text belegen, nicht nachträglich eintragen, um ihn zu entschärfen.`,
                  detail: `Siehe ausführlich Claim „Die Schwertverse gelten nur im historischen Kontext".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'eltern-dschihad',
      objection: `Dschihad ist ein weiter Begriff. Als ein Mann zum Dschihad ziehen wollte, sagte der Prophet: „Leben deine Eltern? Dann betreibe den Dschihad an ihnen" – durch Dienst.`,
      objectionBy: 'verbreiteter Einwand',
      answer: `Ein schönes Wort, und es zeigt die Weite des Begriffs. Aber beachte: Der Mann fragte nach dem Feldzug – das war die selbstverständliche Bedeutung. Der Prophet lenkte ihn *in diesem Fall* um. Die Ausnahme bestätigt die Grundbedeutung.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab al-Jihad wa-s-Siyar', quote: `Ein Mann bat um Erlaubnis zum Dschihad. Der Prophet fragte: „Leben deine Eltern?" Er sagte: „Ja." Er sagte: „Dann betreibe an ihnen den Dschihad."`, original: `fa-fīhimā fa-jāhid`, status: 'unverified', note: 'Häufig als Bukhari 3004 zitiert; Nummer vor Verwendung prüfen.' },
      ],
      followUps: [
        {
          id: 'kein-werk-gleich-dschihad',
          objection: `Gerade das zeigt, dass der Dschihad viele Formen hat. Du reduzierst ihn auf Krieg.`,
          objectionBy: 'John L. Esposito',
          answer: `Ich reduziere nicht – ich lese die Quellen. In einem anderen Bericht fragt ein Mann nach einer Tat, die dem Dschihad gleichkommt, und erhält die Antwort, es gebe keine – es sei denn, man könne, während der Kämpfer auszieht, ununterbrochen beten und fasten. Der Kämpfer „auf Allahs Weg" hat im klassischen Islam einen einzigartigen Rang.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab al-Jihad wa-s-Siyar', quote: `Auf die Frage nach einer Tat, die dem Dschihad gleichkommt: „Ich finde keine." Ob man, wenn der Kämpfer auszieht, in die Moschee gehen und ohne Unterlass beten und ohne Unterbrechung fasten könne?`, status: 'unverified', note: 'Häufig als Bukhari 2785 zitiert; Nummer vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'maertyrer-auch-christentum',
              objection: `Auch ihr Christen habt Märtyrer und verehrt sie sogar. Wo ist der Unterschied?`,
              objectionBy: 'Mohammed Hijab',
              answer: `Der Unterschied ist grundlegend: Der christliche Märtyrer (*martys*, „Zeuge") stirbt, ohne zu töten – wie die 21 koptischen Märtyrer, die 2015 in Libyen mit dem Namen Jesu auf den Lippen enthauptet wurden. Der *shahīd* im klassischen Sinn ist vor allem der, der im Kampf fällt. Die Offenbarung sagt von den Christen: „Sie haben ihn überwunden durch des Lammes Blut und durch das Wort ihres Zeugnisses" (Offb 12,11).`,
              sources: [
                { kind: 'bibel', work: 'Offenbarung', ref: '12,11', quote: `Und sie haben ihn überwunden durch des Lammes Blut und durch das Wort ihres Zeugnisses und haben ihr Leben nicht geliebt bis an den Tod.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'kreuzzug-ablass',
                  objection: `Auch Päpste haben Kreuzfahrern den Ablass versprochen und gefallene Kämpfer als Märtyrer gefeiert. Das ist christlicher Dschihad.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Das stimmt für die lateinische Kirche des Mittelalters (Urban II., 1095), und es widerspricht dem Evangelium. Die östlichen Kirchen, auch die koptische, haben gefallene Soldaten nie als Märtyrer gezählt; Basilius empfahl Soldaten, die getötet hatten, sogar drei Jahre Enthaltung von der Kommunion. Wer Kreuzzugsablass kritisiert, hat das Neue Testament auf seiner Seite. Wer den Dschihad kritisiert, muss gegen 9:111 argumentieren.`,
                  detail: `Siehe Claim „Die Kreuzzüge zeigen die Gewalt des Christentums".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ahmadiyya-dschihad-aufgehoben',
      objection: `Die Ahmadiyya hat den bewaffneten Dschihad für unsere Zeit aufgehoben. Der wahre Islam ist friedlich – „Liebe für alle, Hass für keinen".`,
      objectionBy: 'Mirza Masroor Ahmad',
      answer: `Ich achte den Friedenswillen der Ahmadis sehr – sie leiden selbst unter Verfolgung. Aber beachte: Die große Mehrheit der Sunniten und Schiiten erkennt die Ahmadiyya nicht als muslimisch an (in Pakistan seit 1974 auch verfassungsrechtlich). Und dass es eines neuen religiösen Anspruchs bedurfte, um den bewaffneten Dschihad auszusetzen, zeigt, dass die klassische Lehre ihn kannte.`,
      followUps: [
        {
          id: 'ghulam-ahmad-verteidigung',
          objection: `Mirza Ghulam Ahmad bewies aus dem Koran, dass Dschihad nur Verteidigung gegen Religionsverfolgung ist – und die gab es unter britischer Herrschaft nicht.`,
          objectionBy: 'Ahmadiyya-Theologen',
          answer: `Dann ist die Aussetzung an Umstände gebunden: Solange keine Verfolgung herrscht, ruht der Kampf. Wer entscheidet, wann diese Bedingungen wieder gegeben sind? Eine Lehre, die bei veränderten Umständen wieder in Kraft tritt, ist ausgesetzt, nicht aufgehoben.`,
          followUps: [
            {
              id: 'kein-kalif-kein-dschihad',
              objection: `Heute gibt es keinen legitimen Kalifen. Nach klassischem Recht ist ohne Imam kein offensiver Dschihad möglich.`,
              objectionBy: 'traditionelle sunnitische Gelehrte',
              answer: `Das ist eine wichtige Bremse, die ich anerkenne. Aber sie bedeutet, dass die Lehre ruht, nicht dass sie abgeschafft ist. Der sogenannte Islamische Staat rief 2014 genau deshalb ein „Kalifat" aus – um sie zu aktivieren. Eine Lehre, die durch die Ausrufung eines Kalifen wieder scharf gestellt werden kann, bleibt ein strukturelles Risiko.`,
              followUps: [
                {
                  id: 'brief-an-baghdadi',
                  objection: `Über 120 muslimische Gelehrte haben 2014 in einem offenen Brief an al-Baghdadi den IS widerlegt. Die muslimische Welt hat ihn verurteilt.`,
                  objectionBy: 'Hamza Yusuf',
                  answer: `Das gestehe ich gern zu – dieser Brief war mutig und wichtig. Bemerkenswert ist aber, *wie* er argumentierte: Er bestritt dem IS die Bedingungen und Methoden (Kalifat, Takfir, Tötung von Unschuldigen), nicht die klassische Dschihad-Lehre als solche. Jesus hat das Schwert als Mittel seines Reiches nicht ausgesetzt, sondern verworfen (Mt 26,52; Joh 18,36).`,
                  sources: [
                    { kind: 'gegner', work: 'Open Letter to Dr. Ibrahim Awwad al-Badri, alias Abu Bakr al-Baghdadi', year: '2014', quote: `Über 120 islamische Gelehrte weisen die Lehren und Taten des IS anhand der klassischen islamischen Rechtswissenschaft zurück.`, status: 'paraphrase', note: 'Offener Brief vom September 2014.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Steht das Hadith vom „großen Dschihad" in einer der sechs kanonischen Sammlungen? Wie bewerten es al-Bayhaqi und Ibn Taymiyya?`,
    `Worum geht es im „Buch des Dschihad" bei al-Bukhari – um Gebet und Selbstbeherrschung oder um Kriegszüge und Beute?`,
    `Was bedeutet 9:111: „sie kämpfen auf Allahs Weg, töten und werden getötet"?`,
    `Wo im Evangelium verheißt Gott den Kämpfern das Paradies, wie 9:111 behauptet?`,
  ],
  avoid: [
    `Nicht leugnen, dass es im Islam echte spirituelle Traditionen des inneren Kampfes gibt (Sufik). Würdige sie.`,
    `Nicht unterstellen, wer vom „inneren Dschihad" spricht, lüge bewusst. Viele Muslime glauben das aufrichtig.`,
    `Nicht Muslime mit dem IS gleichsetzen. Die Mehrheit der Gelehrten hat ihn verurteilt.`,
  ],
  concessions: [
    `*Jihād* bedeutet sprachlich „Anstrengung", und der Koran kennt auch das „Ringen mit dem Koran" (25:52).`,
    `Es gibt authentische Überlieferungen über den Kampf gegen das eigene Ich und über das wahre Wort vor einem ungerechten Herrscher.`,
    `Viele klassische Gelehrte banden den offensiven Dschihad an strenge Bedingungen (legitimer Imam, Kriegsregeln, Schonung von Nichtkämpfern).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'David Cook', work: 'Understanding Jihad', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rudolph Peters', work: 'Jihad in Classical and Modern Islam', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', status: 'paraphrase' },
    { kind: 'gegner', author: 'Yaqeen Institute', work: 'Is Islam a Conquest Ideology? On Jihad, War, & Peace', year: '2018', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Dschihad', 'Sufismus', 'Hadith', 'Martyrium', 'Mönchtum'],
  related: [
    'islam-gewalt-scharia/islam-heisst-frieden',
    'islam-gewalt-scharia/schwertverse-kontext',
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'religion-gewalt/kreuzzuege',
    'religion-gewalt/religion-verursacht-kriege',
  ],
};

export default claim;
