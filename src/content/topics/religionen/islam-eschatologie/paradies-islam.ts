import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'paradies-islam',
  title: `„Das islamische Paradies ist die vollkommene Belohnung."`,
  proponents: [
    { name: 'Ibn Qayyim al-Dschauziyya', role: 'Klassischer hanbalitischer Gelehrter (1292–1350)', work: 'Hadi al-Arwah ila Bilad al-Afrah (Der Führer der Seelen in das Land der Freuden)' },
    { name: 'Omar Suleiman', role: 'Amerikanischer Imam, Yaqeen Institute', work: 'Vortragsreihe „Jannah: Home at Last"' },
    { name: 'Zakir Naik', role: 'Indischer Prediger, Peace TV', work: 'Vorträge über Paradies und Hölle' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, East Plano Islamic Center', work: 'Vorträge über das Paradies und die Schau Gottes' },
  ],
  steelman: `Der Mensch ist Leib und Seele – und das islamische Paradies erfüllt beides. Der Koran beschreibt „Gärten, unter denen Flüsse fließen", Ströme von Wasser, Milch, Wein, der nicht berauscht, und geläutertem Honig (47:15), Früchte, Schatten, erhöhte Ruhebetten, Gewänder aus Seide, Jünglinge, die bedienen, und reine Gefährtinnen „gleich wohlverwahrten Perlen" (56:22–24). Dort gibt es kein leeres Gerede, nur das Wort „Frieden, Frieden" (56:25–26). Und über allem steht Allahs Wohlgefallen, „das ist der großartige Erfolg" (9:72), und die Schau Gottes: „Gesichter werden an jenem Tag strahlen, zu ihrem Herrn schauend" (75:22–23); nichts wird den Bewohnern des Paradieses lieber sein als der Blick auf ihren Herrn (Sahih Muslim 181). Gott sagt: „Ich habe für Meine rechtschaffenen Diener bereitet, was kein Auge gesehen, kein Ohr gehört und in keines Menschen Herz gekommen ist" (Bukhari 3244). Verglichen damit ist der christliche Himmel – körperlose Seelen, die auf Wolken ewig Lieder singen – blass, langweilig und leibfeindlich.`,
  biblical: {
    summary: `Die christliche Hoffnung ist **nicht leibfeindlich**: Sie erwartet die Auferstehung des Leibes (1 Kor 15,42–44), „einen neuen Himmel und eine neue Erde" (Offb 21,1; Jes 65,17), ein Festmahl (Jes 25,6; Mt 8,11; Offb 19,9) – Jesus selbst will „neu" vom Wein trinken „im Reich Gottes" (Mk 14,25). Der Unterschied zum Islam liegt woanders: Die Mitte der Vollendung ist **Gott selbst**. „Siehe da, die Hütte Gottes bei den Menschen! Und er wird bei ihnen wohnen" (Offb 21,3); „sie werden sein Angesicht sehen" (Offb 22,4); „wir werden ihm gleich sein, denn wir werden ihn sehen, wie er ist" (1 Joh 3,2). Und die Beziehungen werden verwandelt: „In der Auferstehung werden sie weder freien noch sich freien lassen, sondern sie sind gleich wie die Engel Gottes im Himmel" (Mt 22,30).`,
    detail: `**1. Verwandelter, nicht abgeschaffter Leib.** „Es wird gesät verweslich und wird auferstehen unverweslich … es wird gesät ein natürlicher Leib und wird auferstehen ein geistlicher Leib" (1 Kor 15,42–44) – „geistlich" heißt hier: ganz vom Geist Gottes durchdrungen, nicht körperlos.

**2. Gott ist der Lohn.** Schon zu Abraham sagt Gott: „Ich bin dein Schild und dein sehr großer Lohn" (Gen 15,1). Jesus verheißt: „Selig sind, die reines Herzens sind; denn sie werden Gott schauen" (Mt 5,8). „Das ist das ewige Leben, dass sie dich, der du allein wahrer Gott bist, und den du gesandt hast, Jesus Christus, erkennen" (Joh 17,3).

**3. Bilder, die auf Gott verweisen.** Das himmlische Jerusalem hat keinen Tempel, „denn der Herr, der allmächtige Gott, ist ihr Tempel, und das Lamm"; es braucht keine Sonne, „denn die Herrlichkeit Gottes erleuchtet sie" (Offb 21,22–23). Gold, Perlen und Edelsteine sind Bilder für diese Herrlichkeit; die Stadt selbst ist „die Braut, das Weib des Lammes" (21,9–10).

**4. Was kein Auge gesehen hat.** „Was kein Auge gesehen hat und kein Ohr gehört hat und in keines Menschen Herz gekommen ist, was Gott bereitet hat denen, die ihn lieben" (1 Kor 2,9; vgl. Jes 64,3).`,
    sources: [
      { kind: 'bibel', work: 'Offenbarung', ref: '21,3–4', quote: `Siehe da, die Hütte Gottes bei den Menschen! und er wird bei ihnen wohnen, und sie werden sein Volk sein, und er selbst, Gott mit ihnen, wird ihr Gott sein; und Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '22,3–4', quote: `Und der Thron Gottes und des Lammes wird darin sein; und seine Knechte werden ihm dienen und sehen sein Angesicht; und sein Name wird an ihren Stirnen sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '22,30', quote: `In der Auferstehung werden sie weder freien noch sich freien lassen, sondern sie sind gleich wie die Engel Gottes im Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '2,9', quote: `Was kein Auge gesehen hat und kein Ohr gehört hat und in keines Menschen Herz gekommen ist, was Gott bereitet hat denen, die ihn lieben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '3,2', quote: `Wir wissen aber, wenn es erscheinen wird, daß wir ihm gleich sein werden; denn wir werden ihn sehen, wie er ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '14,25', quote: `Wahrlich, ich sage euch, daß ich hinfort nicht trinken werde vom Gewächs des Weinstocks bis auf den Tag, da ich's neu trinke in dem Reich Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt die „Auferstehung der Toten und das Leben der kommenden Welt". Ihre Väter beschreiben die Vollendung als ewige, wachsende Gemeinschaft mit Gott: Der Mensch wird durch Gnade „teilhaftig der göttlichen Natur" (2 Petr 1,4). Athanasius fasst das Ziel der Menschwerdung so: Er wurde Mensch, damit wir vergöttlicht würden (De Inc. 54). Nicht ein Lohnparadies neben Gott, sondern das Leben **in** Gott ist die christliche Hoffnung. Die koptische Liturgie betet für die Entschlafenen, Gott möge sie ruhen lassen „im Schoß unserer heiligen Väter Abraham, Isaak und Jakob, im Paradies der Wonne".`,
    detail: `Ephräm der Syrer (4. Jh.) hat in seinen *Hymnen über das Paradies* die Bilder von Garten, Früchten und Weinstöcken reich entfaltet – als Bilder der Nähe Gottes und der verklärten Schöpfung, nicht als sinnliches Lohnparadies. Religionshistoriker wie Tor Andrae haben auf Ähnlichkeiten zwischen dieser syrisch-christlichen Bilderwelt und koranischen Paradiesbeschreibungen hingewiesen. Gregor von Nyssa beschreibt die Seligkeit als unendliches Fortschreiten in die Liebe Gottes (epektasis) – eine Freude, die nie langweilig wird, weil Gott unerschöpflich ist.`,
    sources: [
      { kind: 'konzil', work: 'Glaubensbekenntnis von Nizäa-Konstantinopel', year: '381', quote: `Wir erwarten die Auferstehung der Toten und das Leben der kommenden Welt.`, status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Hymnen über das Paradies (Hymni de Paradiso)', year: '4. Jh.', status: 'paraphrase', quote: `Ephräm beschreibt das Paradies als heiligen Berg und Garten, dessen Früchte und Düfte die Nähe Gottes ausdrücken; die Bilder sind Gleichnisse für eine Herrlichkeit, die menschliche Worte übersteigt.` },
      { kind: 'liturgie', work: 'Koptische Liturgie, Gedächtnis der Entschlafenen', quote: `… ruhe ihre Seelen im Schoß unserer heiligen Väter Abraham, Isaak und Jakob, im Paradies der Wonne.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Koran beschreibt das Paradies (dschanna) ausführlich mit Bildern von Gärten, Flüssen, Speisen, Getränken und Gefährtinnen (hur 'in: 44:54; 52:20; 55:72; 56:22–24; „gleichaltrige Mädchen mit schwellenden Brüsten", kawa'ib atraba: 78:33). Zugleich gilt in der sunnitischen Theologie die **Schau Gottes** als höchste Gnade (75:22–23; Sahih Muslim 181); die Mu'taziliten bestritten sie. Die vielzitierte Zahl von „72 Jungfrauen" steht nicht im Koran; sie stammt aus Hadithen, von denen der bekannteste (Tirmidhi 2562) von al-Albani und Darussalam als schwach (da'if) eingestuft wird.`,
    detail: `Muslimische Gelehrte deuten die Paradiesbilder unterschiedlich: Die Mehrheit versteht sie wörtlich, aber in einer unvorstellbar gesteigerten Wirklichkeit („Nichts im Paradies gleicht dem Diesseits außer den Namen" – ein Ibn Abbas zugeschriebenes Wort); mystische und philosophische Denker (al-Ghazali, Ibn Arabi) betonen die geistige Dimension und die Gottesschau. Die These Christoph Luxenbergs, „hur" bedeute ursprünglich „weiße Trauben", ist in der Forschung umstritten und für das Gespräch ungeeignet. Fair ist: Der Islam kennt die Gottesschau als Gipfel; die Frage ist, welches Gewicht sie im Gesamtbild hat.`,
    sources: [
      { kind: 'koran', work: 'Sure 56 (al-Waqi\'a)', ref: '56:22–26', quote: `Und (sie haben) Huris mit großen, herrlichen Augen, gleich wohlverwahrten Perlen, als Lohn für das, was sie zu tun pflegten. Sie hören darin weder unbedachte Rede noch Anschuldigung zur Sünde, sondern nur das Wort: „Frieden! Frieden!"`, original: 'wa-ḥūrun ʿīn ka-amthāli l-luʾluʾi l-maknūn', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/56/22-26' },
      { kind: 'koran', work: 'Sure 78 (an-Naba\')', ref: '78:31–34', quote: `Für die Gottesfürchtigen wird es einen Ort des Erfolgs geben, Gärten und Rebstöcke, gleichaltrige (Mädchen) mit schwellenden Brüsten und einen randvollen Becher.`, original: 'wa-kawāʿiba atrābā', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/78/31-34' },
      { kind: 'koran', work: 'Sure 55 (ar-Rahman)', ref: '55:72', quote: `Huris, in den Zelten abgeschirmt.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/55/72' },
      { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:15', quote: `Das Gleichnis des Paradieses, das den Gottesfürchtigen versprochen ist: Darin sind Bäche mit Wasser, das nicht schal wird, und Bäche mit Milch, deren Geschmack sich nicht ändert, und Bäche mit Wein, der genussvoll ist für diejenigen, die (davon) trinken, und Bäche mit geläutertem Honig.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/47/15' },
      { kind: 'koran', work: 'Sure 75 (al-Qiyama)', ref: '75:22–23', quote: `Gesichter werden an jenem Tag strahlen, zu ihrem Herrn schauend.`, original: 'ilā rabbihā nāẓira', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/75/22-23' },
      { kind: 'hadith', work: 'Sahih Muslim', ref: '181', quote: `Wenn die Bewohner des Paradieses ins Paradies eingetreten sind … wird der Schleier gehoben, und ihnen wird nichts gegeben worden sein, das ihnen lieber ist als der Blick auf ihren Herrn.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/muslim:181a' },
      { kind: 'hadith', work: 'Jami\' at-Tirmidhi', ref: '2562', quote: `Der Geringste unter den Bewohnern des Paradieses hat achtzigtausend Diener und zweiundsiebzig Frauen.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/tirmidhi:2562', note: 'Tirmidhi selbst: gharib; al-Albani, Darussalam und Ahmad Shakir: da\'if (schwach). Nicht als Kernlehre des Islam darstellen.' },
    ],
  },
  quickAnswer: `Auch der christliche Himmel ist nicht körperlos – wir erwarten die Auferstehung des Leibes, eine neue Erde und ein Festmahl. Der Unterschied ist die Mitte: Im Islam ist das Paradies vor allem ein Garten der Freuden, in dem es auch die Schau Gottes gibt; im Evangelium ist Gott selbst das Paradies – „Gott wird bei ihnen wohnen … sie werden sein Angesicht sehen" (Offb 21,3; 22,4). Und Jesus sagt: In der Auferstehung wird nicht mehr geheiratet, sondern wir werden „wie die Engel" sein (Mt 22,30). Die höchste Freude ist nicht ein Geschenk Gottes, sondern Gott selbst.`,
  keyPoints: [
    `**Kein körperloser Himmel:** Auferstehung des Leibes, neue Schöpfung, Festmahl, neuer Wein (1 Kor 15; Offb 21; Mk 14,25). Die „Wolken und Harfen" sind eine Karikatur.`,
    `**Die Mitte ist Gott selbst:** „Die Hütte Gottes bei den Menschen" (Offb 21,3), „sie werden sein Angesicht sehen" (22,4), „wir werden ihm gleich sein" (1 Joh 3,2).`,
    `**Gemeinsamkeit ehrlich nennen:** Die sunnitische Theologie kennt die Gottesschau als höchste Freude (75:22–23; Muslim 181).`,
    `**Verwandelte Beziehungen:** „Weder freien noch sich freien lassen" (Mt 22,30) – niemand ist Belohnung für einen anderen.`,
    `**Die „72 Jungfrauen" nicht als Waffe benutzen:** nicht im Koran, der Haupthadith (Tirmidhi 2562) ist schwach. Die Frage nach den Huris stellt aber der Koran selbst.`,
    `**„Was kein Auge gesehen hat":** Bukhari 3244 spricht fast wörtlich wie Paulus in 1 Kor 2,9 – und dort ist die verborgene Weisheit Gottes der gekreuzigte „Herr der Herrlichkeit" (2,8).`,
  ],
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Seher des himmlischen Jerusalem',
      text: `Johannes beschreibt die Vollendung in leuchtenden Bildern – Gold, Perlen, Edelsteine, der Strom des Lebens, der Baum des Lebens. Doch alle Bilder kreisen um eine Mitte: Gott und das Lamm. Die Stadt hat keinen Tempel, weil Gott selbst ihr Tempel ist, und keine Sonne, weil seine Herrlichkeit sie erleuchtet. Das Höchste, was Johannes sagen kann, ist: „Sie werden sein Angesicht sehen."`,
      sources: [{ kind: 'bibel', work: 'Offenbarung', ref: '21,1–22,5', status: 'paraphrase' }],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Theologe der unendlichen Seligkeit',
      text: `Gregor von Nyssa löst das Problem der „langweiligen Ewigkeit": Weil Gott unendlich ist, kann die Seele nie an ein Ende seiner Schönheit gelangen. Seligkeit ist für ihn ewiges Wachstum – jede Erfüllung weckt eine größere Sehnsucht, die wieder erfüllt wird. Geschaffene Freuden erschöpfen sich, Gott nie.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Das Leben des Mose (De vita Moysis)', ref: 'II,225–239', year: 'um 390', status: 'paraphrase' }],
    },
    {
      person: 'ephraem',
      role: 'als Dichter des Paradieses',
      text: `Ephräm der Syrer hat das Paradies wie kaum ein anderer besungen – als Berg, Garten und Duft der Gegenwart Gottes. Er betont, dass alle diese Bilder nur „Gewänder" sind, in die Gott sich kleidet, um von uns verstanden zu werden: Die Wirklichkeit übersteigt jedes Bild. Für ihn ist der eigentliche Baum des Lebens Christus selbst, dessen Frucht wir in der Eucharistie schon jetzt empfangen.`,
      sources: [{ kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Hymnen über das Paradies', year: '4. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Denker über die Sehnsucht',
      text: `Lewis unterscheidet zwischen „Söldner-Lohn", der mit der Tätigkeit nichts zu tun hat (Geld für Heirat), und „echtem Lohn", der die Vollendung der Tätigkeit selbst ist (die Ehe für den Liebenden). Der Himmel ist für ihn echter Lohn: Wer Gott liebt, bekommt Gott. Unsere Sehnsucht nach Schönheit, die keine irdische Freude stillt, deutet er als Hinweis darauf, dass wir für diese Gemeinschaft geschaffen sind.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Das Gewicht der Herrlichkeit (The Weight of Glory)', year: '1941', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'christlicher-himmel-langweilig',
      objection: `Euer Himmel ist langweilig: körperlose Seelen, die auf Wolken sitzen und ewig singen. Der Islam ehrt den ganzen Menschen – Leib und Seele.`,
      objectionBy: 'Zakir Naik',
      answer: `Das ist eine Karikatur, keine christliche Lehre. Wir bekennen die **Auferstehung des Leibes** und erwarten „einen neuen Himmel und eine neue Erde" (Offb 21,1). Jesaja beschreibt ein Festmahl „mit Fett, mit Mark, mit Wein, darin keine Hefe ist" (Jes 25,6), und Jesus will den Wein „neu trinken im Reich Gottes" (Mk 14,25). Der Unterschied zwischen uns ist nicht Leib gegen Geist, sondern die Mitte: Im Evangelium ist Gott selbst das Paradies.`,
      sources: [
        { kind: 'bibel', work: 'Jesaja', ref: '25,6.8', quote: `Und der HERR Zebaoth wird allen Völkern machen auf diesem Berge ein fettes Mahl, ein Mahl von reinem Wein, von Fett, von Mark, von Wein, darin keine Hefe ist … Er wird den Tod verschlingen ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'ewige-anbetung-langweilig',
          objection: `Aber auch „Gott ewig anbeten" klingt nach endlosem Gottesdienst. Im Paradies des Islam gibt es Freude, Gemeinschaft, Genuss.`,
          objectionBy: 'Omar Suleiman',
          answer: `Langweilig werden **endliche** Dinge, wenn man sie endlos wiederholt – auch das beste Essen, das schönste Haus. Gott dagegen ist unendlich. Gregor von Nyssa beschreibt die Seligkeit als ewiges Wachsen: Jede Erfüllung öffnet eine größere Sehnsucht, die wieder erfüllt wird. Anbetung ist nicht ein Pflichtprogramm, sondern das Staunen über eine Schönheit, die nie ausgeschöpft wird.`,
          followUps: [
            {
              id: 'schau-gottes-auch-im-islam',
              objection: `Auch der Islam kennt die Schau Gottes als größte Freude – „Gesichter, zu ihrem Herrn schauend" (75:22–23), und nichts ist den Bewohnern des Paradieses lieber (Muslim 181).`,
              objectionBy: 'Yasir Qadhi',
              answer: `Das ist eine schöne Gemeinsamkeit, und ich freue mich darüber. Die sunnitische Theologie und al-Ghazali sehen in der Gottesschau den Gipfel. Dann frage ich: Wenn das die größte Freude ist – warum beschreibt der Koran das Paradies so überwiegend mit geschaffenen Genüssen und Gefährtinnen, die Schau Gottes aber nur an wenigen Stellen? Und die Mu'taziliten bestritten sie sogar. Im Neuen Testament ist die Gemeinschaft mit Gott nicht eine Zugabe, sondern die Mitte: „Er wird bei ihnen wohnen."`,
              followUps: [
                {
                  id: 'beides-zusammen',
                  objection: `Beides gehört zusammen: Allah hat die Freuden geschaffen, und sie zu genießen ist Dankbarkeit. Warum sollte Gott Seinen Dienern nicht beides geben?`,
                  objectionBy: 'Omar Suleiman',
                  answer: `Einverstanden – auch Christen erwarten eine verklärte Schöpfung voller Freude. Der Unterschied liegt in der Art der Gemeinschaft: Im Evangelium schauen wir Gott nicht nur von außen an, sondern werden „teilhaftig der göttlichen Natur" (2 Petr 1,4), „ihm gleich, denn wir werden ihn sehen, wie er ist" (1 Joh 3,2), und Gott wird „alles in allem" sein (1 Kor 15,28). Alle Freuden werden durchsichtig auf ihn hin – sie konkurrieren nicht mit ihm.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'huris-reine-gefaehrtinnen',
      objection: `Die Huris sind reine Gefährtinnen (56:22–24), die Ehe ist ein Segen Gottes. Warum sollte es diesen Segen im Paradies nicht mehr geben?`,
      objectionBy: 'Zakir Naik',
      answer: `Jesus wurde fast dieselbe Frage gestellt und antwortete: „In der Auferstehung werden sie weder freien noch sich freien lassen, sondern sie sind gleich wie die Engel Gottes im Himmel" (Mt 22,30). Die Ehe ist ein großer Segen – für die koptische Kirche sogar ein Sakrament –, aber sie weist über sich hinaus auf die Vereinigung Christi mit seiner Kirche (Eph 5,32). Im Himmel wird sie nicht wiederholt, sondern erfüllt.`,
      followUps: [
        {
          id: 'mt-22-30-askese',
          objection: `Mt 22,30 sagt nur, dass nicht geheiratet wird – nicht, dass es keine Freude gibt. Ihr erfindet eine leibfeindliche Askese. Der Islam ist natürlicher.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Lukas erklärt den Grund: Die Kinder der Auferstehung „können hinfort nicht sterben", sie sind „Gottes Kinder" (Lk 20,35–36). Wo der Tod endet, endet auch die Aufgabe der Fortpflanzung. Das ist nicht weniger Freude, sondern eine höhere: „was kein Auge gesehen hat … was Gott bereitet hat denen, die ihn lieben" (1 Kor 2,9). Leibfeindlich ist das nicht – die Kirche segnet die Ehe und erwartet den auferstandenen Leib.`,
          followUps: [
            {
              id: 'zweiundsiebzig-propaganda',
              objection: `Die „72 Jungfrauen" sind islamfeindliche Propaganda. Das steht nicht im Koran!`,
              objectionBy: 'Omar Suleiman',
              answer: `Da hast du recht, und ich werde das nicht als Spott benutzen: Die Zahl 72 steht nicht im Koran, und der bekannteste Hadith dazu (Tirmidhi 2562) wird von al-Albani und Darussalam als schwach eingestuft. Aber die Frage nach den Gefährtinnen stellt der Koran selbst: „Wir vermählen sie mit großäugigen Huris" (44:54; vgl. 52:20; 55:72; 78:33). Darüber können wir ehrlich und respektvoll sprechen.`,
              sources: [
                { kind: 'koran', work: 'Sure 44 (ad-Duchan)', ref: '44:54', quote: `So (ist es). Und Wir geben ihnen als Gattinnen Huris mit großen, herrlichen Augen.`, original: 'wa-zawwajnāhum bi-ḥūrin ʿīn', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/44/54' },
              ],
              followUps: [
                {
                  id: 'frauen-im-paradies',
                  objection: `Auch Frauen erhalten im Paradies ihren Lohn: „Für die gläubigen Männer und die gläubigen Frauen hat Allah Vergebung und großartigen Lohn bereitet" (33:35). Deine Kritik ist einseitig.`,
                  objectionBy: 'Omar Suleiman',
                  answer: `Das ist richtig, und ich nehme 33:35 ernst. Trotzdem sind die Beschreibungen der Gefährtinnen überwiegend aus männlicher Perspektive formuliert – das empfinden auch viele muslimische Frauen als offene Frage. In der christlichen Hoffnung ist niemand Belohnung für einen anderen: Alle sind „Kinder der Auferstehung" (Lk 20,36), und der Lohn ist für Männer und Frauen derselbe – Gott selbst: „Ich bin dein sehr großer Lohn" (Gen 15,1).`,
                  questionsBack: [
                    `Was ist nach deinem Verständnis die höchste Freude einer gläubigen Frau im Paradies?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'paradies-verdienter-lohn',
      objection: `Das Paradies ist der gerechte Lohn für Glauben und gute Taten (32:19). Ihr bekommt es geschenkt, ohne etwas zu leisten. Das ist unfair.`,
      objectionBy: 'Zakir Naik',
      answer: `Selbst nach Sahih al-Bukhari sagt der Prophet: „Niemanden werden seine Taten ins Paradies bringen – nicht einmal mich, es sei denn, Allah umhüllt mich mit Barmherzigkeit" (vgl. Bukhari 6463; 5673). Also ist auch im Islam das Paradies letztlich Geschenk. Im Neuen Testament ist es das Erbe von Kindern: „Sind wir denn Kinder, so sind wir auch Erben, nämlich Gottes Erben und Miterben Christi" (Röm 8,17). Ein Kind verdient sich das Haus seines Vaters nicht – es wohnt darin.`,
      followUps: [
        {
          id: 'lohn-motiviert',
          objection: `Auch Jesus hat Lohn versprochen: „Euer Lohn im Himmel ist groß" (Mt 5,12). Lohn motiviert – das weiß jeder.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Stimmt, Jesus spricht von Lohn. Aber welcher Lohn? „Selig sind, die reines Herzens sind, denn sie werden **Gott schauen**" (Mt 5,8). C. S. Lewis unterscheidet: Geld als Lohn für eine Heirat wäre ein käuflicher Lohn; die Ehe selbst als Lohn der Liebe ist ein echter Lohn. Wer Gott liebt und Gott bekommt, ist nicht berechnend, sondern am Ziel seiner Liebe.`,
          followUps: [
            {
              id: 'wein-milch-honig',
              objection: `Und was ist falsch an Flüssen von Milch, Honig und Wein (47:15)? Auch eure Bibel spricht vom Land, wo Milch und Honig fließen.`,
              objectionBy: 'Zakir Naik',
              answer: `Nichts ist falsch an guten Gaben – die Bibel benutzt dieselben Bilder. Eine ehrliche Frage habe ich aber: Der Koran nennt Wein auf Erden ein „Gräuel vom Werk des Satans" (5:90), im Paradies aber ist er Lohn. Muslime antworten, der Paradieswein berausche nicht (37:47) – gut. Dann ist er ein Bild für reine Freude, und wir sind uns einig, dass Bilder auf eine höhere Wirklichkeit verweisen. Für Christen ist der neue Wein des Reiches das Zeichen der Gemeinschaft mit Christus (Mk 14,25).`,
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-paradies-vage',
      objection: `Die Bibel sagt über den Himmel fast nichts Konkretes – nur „was kein Auge gesehen hat". Der Koran beschreibt das Paradies anschaulich. Das motiviert mehr.`,
      objectionBy: 'Omar Suleiman',
      answer: `Interessant: Genau dieses Wort zitiert auch eure Tradition. Im Hadith qudsi sagt Allah: „Ich habe für Meine rechtschaffenen Diener bereitet, was kein Auge gesehen, kein Ohr gehört und in keines Menschen Herz gekommen ist" (Bukhari 3244), und der Koran sagt: „Keine Seele weiß, was für sie an Freude verborgen ist" (32:17). Auch der Islam bekennt also, dass die Wirklichkeit jede Beschreibung übersteigt – und benutzt dafür die Worte des Paulus.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3244', quote: `Allah sagt: Ich habe für Meine rechtschaffenen Diener bereitet, was kein Auge gesehen, kein Ohr gehört hat und was keinem Menschen in den Sinn gekommen ist.`, original: 'مَا لاَ عَيْنٌ رَأَتْ وَلاَ أُذُنٌ سَمِعَتْ وَلاَ خَطَرَ عَلَى قَلْبِ بَشَرٍ', translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3244', note: 'Kitab Bad\' al-Khalq; im Anschluss wird 32:17 zitiert. Nummer nach sunnah.com-Zählung, vor Verwendung prüfen.' },
        { kind: 'koran', work: 'Sure 32 (as-Sadschda)', ref: '32:17', quote: `Keine Seele weiß, was für sie an Freude verborgen gehalten wird, als Lohn für das, was sie zu tun pflegten.`, translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/32/17' },
      ],
      followUps: [
        {
          id: 'paulus-von-jesaja',
          objection: `Paulus hat das nur aus Jesaja 64,3 übernommen. Es ist also altes Offenbarungsgut, das auch der Prophet empfangen hat.`,
          objectionBy: 'Muslimischer Gelehrter',
          answer: `Paulus nimmt Jes 64,3 auf, das stimmt. Aber der Zusatz „und in keines Menschen Herz gekommen ist" steht so bei Paulus, nicht bei Jesaja – und genau diese paulinische Form findet sich im Hadith („wa la khatara 'ala qalbi bashar"). Das spricht dafür, dass eine christliche Formulierung im Umlauf war und in die islamische Überlieferung einging. Die Hoffnung, die du so schön findest, kommt aus dem Neuen Testament.`,
          followUps: [
            {
              id: 'gleicher-gott-gleiche-worte',
              objection: `Derselbe Gott hat beiden Propheten dieselben Worte offenbart. Das zeigt die Einheit der Offenbarung.`,
              objectionBy: 'Muslimischer Gelehrter',
              answer: `Dann nimm bitte auch den Zusammenhang ernst, in dem Paulus diese Worte schreibt: Die verborgene Weisheit Gottes, die keiner erkannt hat, ist, dass die Mächtigen dieser Welt „den Herrn der Herrlichkeit gekreuzigt" haben (1 Kor 2,8), und Paulus will nichts wissen „als allein Jesus Christus, den Gekreuzigten" (2,2). Man kann nicht den Vers übernehmen und seinen Inhalt verwerfen.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '2,7–8', quote: `… sondern wir reden von der heimlichen, verborgenen Weisheit Gottes, welche Gott verordnet hat vor der Welt zu unsrer Herrlichkeit, welche keiner von den Obersten dieser Welt erkannt hat; denn wo sie die erkannt hätten, hätten sie den HERRN der Herrlichkeit nicht gekreuzigt.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn du 1 Kor 2,9 als göttliches Wort anerkennst – was machst du mit 1 Kor 2,8, zwei Verse davor?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'offenbarung-auch-materiell',
      objection: `Euer Himmel ist doch genauso materiell: goldene Straßen, Tore aus Perlen, Mauern aus Edelsteinen (Offb 21). Warum kritisierst du unsere Paradiesbilder?`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Ich kritisiere keine Bilder – ich frage nach ihrer Mitte. In Offb 21 ist die Stadt selbst „die Braut, das Weib des Lammes" (21,9–10); sie hat keinen Tempel, „denn der Herr, der allmächtige Gott, ist ihr Tempel, und das Lamm", und keine Sonne, „denn die Herrlichkeit Gottes erleuchtet sie" (21,22–23). Gold und Edelsteine sind Bilder für diese Herrlichkeit. Alles verweist auf die Gegenwart Gottes.`,
      followUps: [
        {
          id: 'symbolisch-ausrede',
          objection: `Immer wenn es euch passt, sagt ihr „symbolisch". Das ist eine billige Ausrede.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Der Text selbst gibt die Signale: Eine Stadt, die zugleich eine Braut ist, ein Würfel von 12.000 Stadien Kantenlänge – wie das Allerheiligste des Tempels, das ebenfalls ein Würfel war –, zwölf Tore mit den Namen der zwölf Stämme. Das ist apokalyptische Bildsprache, und sie nach ihrer Gattung zu lesen, ist ehrlich, nicht ausweichend. Auch Muslime lesen „die Hand Allahs" nicht wie eine menschliche Hand, sondern „ohne zu fragen wie".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was ist für dich die größte Freude im Paradies – die Gaben oder der Geber?`,
    `Wenn die Schau Gottes die höchste Freude ist – warum nimmt sie im Koran so wenig Raum ein?`,
    `Ist ein Paradies, in dem Menschen zur Belohnung anderer da sind, mit der Würde aller vereinbar?`,
    `Warum beschreiben Bukhari 3244 und Paulus in 1 Kor 2,9 das Paradies mit fast denselben Worten?`,
    `Welche Freude kann in Ewigkeit nicht langweilig werden?`,
  ],
  avoid: [
    `Nicht mit den „72 Jungfrauen" spotten. Die Zahl steht nicht im Koran, der Haupthadith ist schwach, und Spott über das Jenseits anderer verletzt tief.`,
    `Keine Karikatur des eigenen Glaubens verteidigen („Wolken und Harfen"). Die christliche Hoffnung ist leiblich und schöpfungsbejahend.`,
    `Nicht Luxenbergs These („hur = weiße Trauben") als Argument verwenden – sie ist wissenschaftlich umstritten und wirkt auf Muslime als Provokation.`,
    `Keine Hadithe über Frauen in der Hölle als Polemik einsetzen; das Thema verlangt große Behutsamkeit.`,
  ],
  concessions: [
    `Die sunnitische Theologie kennt die Schau Gottes als höchste Freude des Paradieses.`,
    `Auch die Bibel gebraucht sinnliche Bilder für die Vollendung (Festmahl, Wein, Stadt aus Gold).`,
    `Manche christliche Predigt hat den Himmel tatsächlich körperlos und blass dargestellt – die Kritik trifft sie zu Recht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Von Hoffnung überrascht (Surprised by Hope)', year: '2008', status: 'paraphrase', note: 'Zur leiblichen Auferstehung und neuen Schöpfung.' },
    { kind: 'kirchenvater', author: 'Ephräm der Syrer', work: 'Hymnen über das Paradies', year: '4. Jh.', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Das Gewicht der Herrlichkeit', year: '1941', status: 'paraphrase' },
    { kind: 'gegner', author: 'Ibn Qayyim al-Dschauziyya', work: 'Hadi al-Arwah ila Bilad al-Afrah', year: '14. Jh.', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Paradies', 'Huris', 'Gottesschau', 'Auferstehung', 'Neue Schöpfung', 'Eschatologie'],
  related: [
    'islam-eschatologie/jesus-kommt-als-muslim',
    'islam-heil-gottesbild/heil-durch-werke-gerecht',
    'buddhismus/nirvana-hoechstes-ziel',
    'sinn-existenz/tod-ist-das-ende',
    'islam-stroemungen/sufismus-mystik',
  ],
};

export default claim;
