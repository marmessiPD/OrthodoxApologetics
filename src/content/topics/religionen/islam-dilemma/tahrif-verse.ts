import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'tahrif-verse',
  title: `„Der Koran selbst sagt, dass Juden und Christen ihre Schrift verfälscht haben (2:75, 2:79, 3:78, 4:46, 5:13)."`,
  proponents: [
    { name: 'Ibn Hazm', role: 'Andalusischer Gelehrter (994–1064)', work: 'al-Fisal fi l-milal: systematische Lehre der Textverfälschung (tahrif an-nass)' },
    { name: 'Rahmatullah Kairanawi', role: 'Indischer Gelehrter (1818–1891)', work: 'Izhar al-Haqq (1864), Antwort auf den Missionar Karl Gottlieb Pfander' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vorträge über die früheren Schriften' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Debatten über Tahrif' },
  ],
  steelman: `„Der Koran ist hier völlig klar. Er sagt, eine Gruppe hörte ‚das Wort Allahs' und verdrehte es wissentlich (2:75). Er verflucht die, die ‚die Schrift mit ihren eigenen Händen schreiben und dann sagen: Das ist von Allah' (2:79). Er sagt, sie ‚verdrehen die Worte von ihren Stellen' (4:46; 5:13; 5:41), verdrehen beim Lesen ihre Zungen, damit man meint, es gehöre zur Schrift (3:78), und haben einen Teil vergessen – die Juden wie die Christen (5:13–14). Ibn Abbas, der größte Ausleger unter den Gefährten, erklärt in Sahih al-Bukhari 7363, die Leute der Schrift hätten Allahs Buch verändert. Ibn Hazm hat das systematisch begründet. Wer dem Koran glaubt, muss die Verfälschung der früheren Schriften annehmen."`,
  biblical: {
    summary: `Wer die Verse im **Zusammenhang** liest, findet: Sie sprechen von *Gruppen* unter den Juden („eine Gruppe von ihnen", „manche von denen, die Juden sind"), von mündlicher Verdrehung („mit ihren Zungen", 4:46; 3:78), von falscher Anwendung (5:41, der Fall der Steinigung), von zusätzlich verfassten Schriften (2:79) und vom „Vergessen" eines Teils der Mahnung (5:13–14). Kein Vers sagt, dass Tora oder Evangelium weltweit im Wortlaut ersetzt worden seien. Für die **Christen** findet sich überhaupt kein Vorwurf der Textänderung – nur, dass sie „einen Teil vergaßen" (5:14). Und dieselben medinensischen Suren verpflichten Juden und Christen weiterhin auf ihre Schrift (5:43–47; 5:68).`,
    detail: `**Die Verse im Einzelnen:**
- **2:75** – eine Gruppe „hörte das Wort Allahs" und verdrehte es: klassisch u. a. auf die Ältesten bezogen, die Gott am Sinai reden hörten und anders berichteten – also mündlich. Bemerkenswert: Der Vers nennt die Tora „Wort Allahs" (*kalām Allāh*).
- **2:78–79** – „Ungelehrte (*ummiyyūn*), die die Schrift nicht kennen" und Leute, die eigene Texte schreiben und als göttlich verkaufen: Fälschung *neben* dem Original, nicht dessen Vernichtung.
- **3:78** – sie verdrehen beim Vorlesen ihre Zungen, „damit ihr meint, es gehöre zur Schrift, während es *nicht* zur Schrift gehört": Die Schrift bleibt der Maßstab, an dem man die Verdrehung erkennt.
- **4:46** – „mit ihren Zungen verdrehend": Wortspiele und Spott („Wir hören und gehorchen nicht"), also mündlich.
- **5:13** – Juden „verdrehen die Worte von ihren Stellen und haben einen Teil vergessen"; **5:14** – Christen „vergaßen einen Teil".
- **5:41** – im Zusammenhang einer Rechtsfrage: Sie wollen das Urteil der Tora umgehen.

Das Verb *ḥarrafa* bedeutet im Kern „zur Seite wenden, ablenken" – es kann Text- wie Sinnverdrehung meinen; der Kontext entscheidet.`,
    sources: [
      { kind: 'koran', work: 'Sure 3 (Al \'Imran)', ref: '3:78', quote: `Und unter ihnen gibt es fürwahr eine Gruppe, die ihre Zungen beim Lesen der Schrift verdreht, damit ihr meint, es gehöre zur Schrift, während es nicht zur Schrift gehört.`, original: `yalwūna alsinatahum bi-l-kitābi li-taḥsabūhu mina l-kitābi wa-mā huwa mina l-kitāb`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/3/78' },
      { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:46', quote: `Unter denen, die Juden sind, verdrehen manche die Worte von ihren Stellen … indem sie mit ihren Zungen verdrehen und den Glauben schmähen.`, original: `mina lladhīna hādū yuḥarrifūna l-kalima ʿan mawāḍiʿihi … layyan bi-alsinatihim`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/46' },
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:13–14', quote: `Sie verdrehen die Worte von ihren Stellen und haben einen Teil dessen vergessen, womit sie ermahnt worden waren … Und mit denen, die sagen: „Wir sind Christen", schlossen Wir ihr Abkommen; aber sie vergaßen einen Teil dessen, womit sie ermahnt worden waren.`, original: `wa-nasū ḥaẓẓan mimmā dhukkirū bihi`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/13-14' },
      { kind: 'bibel', work: 'Markus', ref: '7,13', quote: `Jesus wirft den Pharisäern vor, Gottes Wort durch ihre Überlieferung aufzuheben – eine Verdrehung im Gebrauch, nicht im Text.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche bestreitet nicht, dass Menschen Gottes Wort verdrehen können – Jesus selbst warf den Schriftgelehrten vor, Gottes Gebot durch ihre Überlieferung aufzuheben (Mk 7,13), und Petrus warnt vor denen, die die Schriften „verdrehen zu ihrer eigenen Verdammnis" (2 Petr 3,16). Gerade deshalb hat die Kirche die Schrift in vielen Sprachen und Gemeinden bewahrt und im Licht der apostolischen Überlieferung ausgelegt. Christliche Theologen in der islamischen Welt verstanden die Tahrif-Verse als Vorwurf der Fehldeutung, nicht der Textvernichtung.`,
    sources: [
      { kind: 'bibel', work: '2. Petrus', ref: '3,16', quote: `Petrus schreibt über die Briefe des Paulus, darin sei manches schwer zu verstehen, was die Ungelehrten und Leichtfertigen verdrehen wie auch die anderen Schriften.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Lies die Verse im Zusammenhang: Sie sprechen von einzelnen Gruppen, die mit „ihren Zungen" verdrehen (4:46; 3:78), eigene Texte schreiben (2:79) oder einen Teil „vergessen" (5:13–14). Keiner sagt, dass die Tora oder das Evangelium weltweit im Wortlaut ausgetauscht wurden – und über das Evangelium der Christen sagt der Koran nur, sie hätten „einen Teil vergessen". Dieselbe Sure 5 befiehlt den Christen dann, nach dem Evangelium zu richten (5:47).`,
  keyPoints: [
    `**Teil, nicht Ganzes:** Die Verse sprechen von „einer Gruppe" oder „manchen" – nicht von allen Exemplaren der Schrift.`,
    `**Mündlich:** 4:46 und 3:78 nennen ausdrücklich die Zunge als Werkzeug der Verdrehung.`,
    `**Der Maßstab bleibt:** 3:78 sagt, das Verdrehte „gehört nicht zur Schrift" – die Schrift ist also noch da, um das zu prüfen.`,
    `**Kein Textvorwurf an die Christen:** Über sie heißt es nur, sie „vergaßen einen Teil" (5:14).`,
    `**Die Tradition ist gespalten:** Ibn Abbas (Bukhari 7363) vs. die Erläuterung im Kitab at-Tawhid desselben Werkes; ar-Razi und Wahb ibn Munabbih vs. Ibn Hazm.`,
    `**Die Chronologie spricht dagegen:** Dieselben späten medinensischen Suren, die die Tahrif-Verse enthalten, verpflichten Juden und Christen auf ihre Schrift (5:43–47; 5:68).`,
  ],
  voices: [
    {
      person: 'gordon-nickel',
      role: 'als Erforscher der frühesten Korankommentare',
      text: `Nickel hat untersucht, wie die frühesten erhaltenen Korankommentare (u. a. Muqatil ibn Sulayman, 8. Jh.) die „Verfälschungsverse" verstehen. Sein Befund: Die frühen Ausleger erzählen vor allem von Verbergen, falscher Wiedergabe und konkreten Einzelfällen (etwa dem Steinigungsurteil oder der Beschreibung des Propheten), nicht von einer flächendeckenden Verfälschung des Tora- oder Evangelientextes. Die systematische Lehre der Textverderbnis ist eine spätere Entwicklung.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'Narratives of Tampering in the Earliest Commentaries on the Qur\'an', year: '2011', quote: `Die frühen Kommentare deuten die Verse überwiegend als Verbergen, Falschdarstellung und Einzelfälle, nicht als globale Textverfälschung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler (Notre Dame)',
      text: `Reynolds liest die koranischen Vorwürfe vor dem Hintergrund der spätantiken christlichen Polemik gegen Juden, die ebenfalls von „Verdrehung" der Schrift sprach – gemeint war meist falsche Auslegung oder Verbergen von Christusweissagungen. Erst spätere muslimische Ausleger hätten daraus eine Lehre der Textverfälschung gemacht. Der Koran selbst steht damit näher an der Vorstellung einer intakten, aber missbrauchten Schrift.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'On the Qur\'anic Accusation of Scriptural Falsification (tahrif) and Christian Anti-Jewish Polemic, Journal of the American Oriental Society 130', year: '2010', quote: `Die koranischen Tahrif-Vorwürfe stehen in der Tradition christlich-antijüdischer Polemik und meinen primär Fehldeutung und Verbergen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester, der mit klassischen Kommentaren argumentiert',
      text: `Zakaria Botros zitiert in seinen Sendungen gezielt muslimische Klassiker – etwa die Erläuterung in al-Bukharis Kitab at-Tawhid und den Kommentar Fakhr ad-Din ar-Razis –, die *taḥrīf* als Verdrehung der Deutung verstehen. Seine Pointe: Nicht der Christ, sondern die eigenen Gelehrten bezeugen, dass niemand den Wortlaut der Bücher Gottes entfernen kann.`,
    },
    {
      person: 'paulus-al-buschi',
      role: 'als koptischer Bischof im Gespräch mit dem Islam',
      text: `Für die koptischen Theologen des 13. Jahrhunderts wie Paulus al-Buschi war die Antwort auf den Verfälschungsvorwurf immer auch eine Einladung, die Schrift gemeinsam zu lesen: Sie legten die Lehre von Dreieinigkeit und Menschwerdung *aus der Schrift* dar – im Vertrauen darauf, dass der Text selbst spricht, wenn man ihn im Zusammenhang liest.`,
    },
  ],
  dialog: [
    {
      id: 'harrafa-heisst-textaenderung',
      objection: `„Yuharrifuna l-kalima 'an mawadi'ihi" heißt wörtlich: Sie verschieben die Wörter von ihren Stellen. Das ist Textänderung, nicht bloß Auslegung.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Das Verb *ḥarrafa* heißt „zur Seite wenden, ablenken" – man kann ein Wort im Text verschieben oder in seiner Bedeutung. Der Vers 4:46 sagt selbst, *wie* sie es tun: „mit ihren Zungen". Und al-Bukhari erklärt im Kitab at-Tawhid: „Niemand entfernt ein Wort aus einem der Bücher Allahs, sondern sie verdrehen es, indem sie es falsch auslegen." Deine eigene Tradition liest den Vers so, wie ich ihn lese.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari, Kitab at-Tawhid, Kapitel zu 85:21–22', quote: `„Sie verdrehen" heißt: sie entfernen; doch niemand entfernt ein Wort aus einem der Bücher Allahs, sondern sie verdrehen es, indem sie es anders deuten, als es zu deuten ist.`, original: `wa-laysa aḥadun yuzīlu lafẓa kitābin min kutubi llāh … yataʾawwalūnahu ʿalā ghayri taʾwīlihi`, translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Nach Ibn Hajar (Fath al-Bari, Bd. 13) al-Bukharis eigene Erläuterung, nicht zusammenhängend von Ibn Abbas überliefert.' },
      ],
      followUps: [
        {
          id: 'ibn-hazm-widersprueche',
          objection: `Ibn Hazm hat in al-Fisal Dutzende Widersprüche und Absurditäten in der Bibel nachgewiesen. Das beweist doch, dass der Text verändert wurde.`,
          objectionBy: 'Ibn Hazm (klassisch), heute Kairanawi und Deedat',
          answer: `Ibn Hazm schrieb im 11. Jahrhundert, 400 Jahre nach Mohammed. Die Stellen, die er anführt, sind meist Zahlen- und Namensunterschiede oder Abschreibfehler – keine davon betrifft eine Glaubenslehre. Und wenn diese Stellen schon vor Mohammed so in der Bibel standen (die Handschriften zeigen das), dann hat der Koran ein Buch mit genau diesen Stellen bestätigt. Ibn Hazms Argument trifft also den Koran mit.`,
          detail: `Zu den einzelnen „Widersprüchen" siehe Claim „Die Bibel widerspricht sich" im Topic „Ist die Bibel verfälscht?". Ibn Hazm war sich der Spannung zu 5:47 bewusst und musste diese Verse auf einen kleinen unverfälschten Rest beziehen.`,
          followUps: [
            {
              id: 'warum-erwaehnt-gott-tahrif',
              objection: `Wenn der Text unverändert war – warum erwähnt Gott dann überhaupt Tahrif? Er hätte ja nichts zu tadeln gehabt.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Weil Menschen Gottes Wort immer wieder verdrehen – durch falsche Auslegung, Verschweigen und selbst erfundene Zusätze. Das sagt auch die Bibel: Jesus warf den Schriftgelehrten vor, Gottes Gebot durch ihre Überlieferung aufzuheben (Mk 7,13). Ein Vorwurf gegen Menschen, die den Text missbrauchen, ist kein Beweis, dass der Text selbst verschwunden ist.`,
            },
          ],
        },
      ],
    },
    {
      id: 'vers-2-79-tahrif',
      objection: `2:79: „Wehe denen, die die Schrift mit ihren eigenen Händen schreiben und dann sagen: Das ist von Allah." Deutlicher geht es nicht.`,
      objectionBy: 'verbreiteter muslimischer Einwand',
      answer: `Der Vers davor nennt die Betroffenen: „Ungelehrte, die die Schrift nicht kennen" (2:78). Es geht um Menschen, die eigene Texte verfassen und als göttlich ausgeben – das gab es immer, auch unter Christen (gefälschte Evangelien). Fälschung *neben* der Schrift setzt voraus, dass die echte Schrift existiert. Und dieselbe Sure sagt zehn Verse später, der Koran bestätige, „was bei ihnen ist" (2:89; 2:91).`,
      followUps: [
        {
          id: 'ibn-abbas-7363-tahrif',
          objection: `Ibn Abbas bezieht 2:79 in Bukhari 7363 ausdrücklich auf die Schrift der Leute des Buches – sie hätten Allahs Buch verändert.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Das gebe ich zu: Ibn Abbas verstand es so. Aber die islamische Tradition ist gespalten – al-Bukhari selbst hält im Kitab at-Tawhid fest, dass niemand ein Wort aus Allahs Büchern entfernen kann. Wenn Gefährten und Gelehrte uneins sind, entscheidet der Koran. Und der verpflichtet die Christen auf ihr Evangelium (5:47). Wenn Ibn Abbas recht hätte und das schon vor Mohammed geschehen war, dann irrt 5:47.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '7363', quote: `Ibn Abbas: Allah hat euch mitgeteilt, dass die Leute der Schrift Allahs Buch verändert und mit ihren eigenen Händen geschrieben haben.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:7363' },
          ],
          followUps: [
            {
              id: 'wahb-und-razi',
              objection: `Wer außer al-Bukhari soll denn Sinnverfälschung vertreten haben? Das ist eine Minderheitenmeinung.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Ibn Kathir überliefert in seinem Kommentar zu 3:78 von Wahb ibn Munabbih (gest. um 730), Tora und Evangelium seien so, wie Allah sie herabsandte, kein Buchstabe sei geändert; man führe nur durch Verdrehung und Deutung in die Irre. Fakhr ad-Din ar-Razi (gest. 1210) hielt es für unwahrscheinlich, dass ein in Ost und West weit verbreiteter Text überall gleichzeitig verändert worden sei. Es ist also keine Randmeinung, sondern eine starke Linie der Tradition.`,
              detail: `Ehrlicherweise: Ibn Kathir selbst fügt eine Einschränkung an – falls Wahb die Exemplare in den Händen der Juden und Christen meine, sei dort Veränderung eingetreten. Das zeigt erneut die Spaltung der Tradition. Für die Debatte genügt: Es gibt keinen islamischen Konsens über Textverfälschung.`,
              sources: [
                { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsir al-Qur\'an al-\'Azim', ref: 'zu 3:78', quote: `Wahb ibn Munabbih: Tora und Evangelium sind, wie Allah sie herabsandte; kein Buchstabe wurde geändert, aber man führt durch Verdrehung und Deutung in die Irre.`, status: 'paraphrase', note: 'Überliefert nach Ibn Abi Hatim; Ibn Kathir kommentiert einschränkend.' },
                { kind: 'hadith', author: 'Fakhr ad-Din ar-Razi', work: 'Mafatih al-Ghayb (at-Tafsir al-Kabir)', quote: `Eine Veränderung des Wortlauts eines in Ost und West verbreiteten Buches ist kaum möglich; daher ist Tahrif eher als falsche Deutung zu verstehen.`, status: 'unverified', note: 'Sinngemäß nach Sekundärliteratur; genaue Stelle (zu 2:75 bzw. 4:46) vor Verwendung prüfen.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vers-3-78-einschmuggeln',
      objection: `3:78 zeigt doch, dass sie beim Vorlesen Dinge einschmuggelten, damit man meint, es stehe in der Schrift. So kamen die Fälschungen in die Bibel.`,
      objectionBy: 'Shabir Ally',
      answer: `Lies genau: „damit ihr meint, es gehöre zur Schrift, *während es nicht zur Schrift gehört*." Der Vers unterscheidet klar zwischen dem, was sie mit der Zunge sagen, und dem, was in der Schrift steht. Die Schrift bleibt der Maßstab, an dem man die Lüge erkennen kann. Das ist das Gegenteil einer verfälschten Schrift.`,
      followUps: [
        {
          id: 'muendlich-dann-schriftlich',
          objection: `Was mündlich verfälscht wurde, ist irgendwann in die Handschriften gewandert. So funktioniert Verfälschung.`,
          objectionBy: 'Shabir Ally',
          answer: `Das ist eine Vermutung, kein Beleg. Wann soll das geschehen sein? Wenn vor 610, dann irrt der Koran, der die Schrift seiner Zeit bestätigt. Wenn nach 610, müssten Handschriften von vor 610 einen anderen Text zeigen – sie tun es nicht. Codex Vaticanus und Sinaiticus aus dem 4. Jahrhundert haben dieselben Lehren wie unsere Bibel.`,
          detail: `Hier mündet jeder Tahrif-Weg in das Islamische Dilemma (siehe dort).`,
        },
      ],
    },
    {
      id: 'christen-vergassen-teil',
      objection: `5:14 sagt, die Christen hätten einen Teil vergessen. Ihre Schrift ist also unvollständig – das wahre Injil ist teilweise verloren.`,
      objectionBy: 'Ali Ataie',
      answer: `Der Vers sagt, sie vergaßen einen Teil dessen, „womit sie ermahnt wurden" – also Gebote, die sie nicht hielten. Vergessen im Sinn von Vernachlässigen, wie der Koran es oft verwendet (z. B. 59:19: „die Allah vergaßen"). Und selbst wenn etwas fehlte: Drei Verse später befiehlt Gott den Christen, nach dem zu richten, was im Evangelium ist (5:47). Das, was sie hatten, genügte also, um danach zu richten.`,
      followUps: [
        {
          id: 'nur-der-rest-gilt',
          objection: `Dann gilt eben nur der Rest – das, was sie nicht vergessen haben.`,
          objectionBy: 'Ali Ataie',
          answer: `Und zu diesem Rest gehört die Passion Jesu: Sie nimmt in allen vier Evangelien den größten zusammenhängenden Raum ein und steht in jeder Handschrift. Wenn sie zum „Rest" gehört, nach dem die Christen richten sollten, widerspricht ihr der Koran. Wenn sie nicht dazugehört, war das Herzstück des Evangeliums verloren – und 5:47 hätte den Christen ein Buch ohne Herz befohlen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher dieser Verse sagt, dass *alle* Exemplare der Tora oder des Evangeliums geändert wurden?`,
    `Wie verstehst du „mit ihren Zungen" in 4:46?`,
    `Wenn 3:78 sagt „es gehört nicht zur Schrift" – woran soll man das erkennen, wenn die Schrift selbst verfälscht ist?`,
    `Warum befiehlt Sure 5, nachdem sie von Verdrehung spricht, den Christen, nach dem Evangelium zu richten?`,
  ],
  avoid: [
    `Nicht behaupten, „harrafa" bedeute *nur* Auslegung. Das Wort kann beides heißen; argumentiere mit dem Kontext.`,
    `Nicht behaupten, Ibn Abbas habe nie an Textverfälschung geglaubt – Bukhari 7363 zeigt das Gegenteil. Gib es zu und führe das Gespräch zum Koran zurück.`,
  ],
  concessions: [
    `Einige frühe muslimische Autoritäten (Ibn Abbas nach Bukhari 7363) und später Ibn Hazm vertraten eine Veränderung des Textes.`,
    `Es gab tatsächlich Fälschungen christlicher Texte (apokryphe Evangelien) und Abschreibfehler – die Kirche hat beides selbst erkannt und benannt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gordon D. Nickel', work: 'Narratives of Tampering in the Earliest Commentaries on the Qur\'an', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'On the Qur\'anic Accusation of Scriptural Falsification (tahrif) and Christian Anti-Jewish Polemic', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Rahmatullah Kairanawi', work: 'Izhar al-Haqq', year: '1864', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Tahrif', 'Koran', 'Tafsir'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-dilemma/muhaymin-5-48',
    'islam-bibelverfaelschung/bibel-widerspricht-sich',
    'islam-bibelverfaelschung/bibel-textvarianten',
  ],
};

export default claim;
