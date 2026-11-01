import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koran-perfekt-bewahrt',
  title: `„Der Koran ist Buchstabe für Buchstabe perfekt bewahrt."`,
  proponents: [
    { name: 'Muhammad Mustafa al-Azami', role: 'Hadith- und Koranwissenschaftler (1930–2017)', work: 'The History of the Qur\'anic Text from Revelation to Compilation (2003)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'An Introduction to the Sciences of the Qur\'aan (1999)' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über die Bewahrung des Korans' },
    { name: 'Mohammed Hijab', role: 'Islamischer Debattierer, London', work: 'Debatten mit Jay Smith und anderen über Koranhandschriften' },
  ],
  steelman: `„Der Koran wurde von Anfang an zweifach bewahrt: in den Herzen Tausender Gefährten, die ihn auswendig lernten und täglich im Gebet rezitierten, und in schriftlichen Aufzeichnungen, die schon zu Lebzeiten des Propheten angefertigt wurden. Abu Bakr ließ ihn sammeln, Uthman ließ Abschriften für die Provinzen herstellen. Seitdem wurde er in ununterbrochenen Ketten von Lehrer zu Schüler überliefert. Die Birmingham-Fragmente wurden auf 568–645 datiert und stimmen mit unserem Text überein. Die verschiedenen Lesarten (*qirāʾāt*) sind keine Fehler, sondern von Gott offenbarte Varianten (die sieben *aḥruf*, Bukhari 4992). Gott hat versprochen: ‚Wir werden ihn bewahren' (15:9) – und kein anderes Buch der Welt ist so gut bewahrt."`,
  biblical: {
    summary: `**Was die islamischen Quellen selbst berichten:** Nach Sahih al-Bukhari 4986 wurde der Koran nach der Schlacht von Yamama gesammelt, weil viele Koranrezitatoren gefallen waren; Zaid ibn Thabit sammelte ihn „von Palmstängeln, Steinplatten und aus den Herzen der Männer" und fand die letzten Verse von Sure 9 nur bei einem einzigen Mann. Nach Bukhari 4987 ließ Uthman wegen Streit über die Rezitation eine Standardfassung erstellen und alle anderen Koranmaterialien verbrennen. Ibn Mas'ud zählte nach Bukhari 4977 die beiden letzten Suren nicht zum Koran. Umar spricht von einem Steinigungsvers, der nicht im heutigen Koran steht (Bukhari 6829; Muslim 1691); Aisha von einem Stillvers, der nach dem Tod des Propheten noch rezitiert wurde (Muslim 1452). Die Handschriften zeigen Korrekturen und Varianten. Der Befund: Der Koran hat eine Textgeschichte – bewahrt in seinem Kern, aber nicht „Buchstabe für Buchstabe" ohne jede Abweichung.

**Christliche Sicht:** Christen beanspruchen für die Bibel keine buchstabengetreue Wunderüberlieferung. Gott bewahrt sein Wort durch die Fülle der Abschriften, an denen man jeden Fehler erkennen kann (Jes 40,8; Mt 24,35). Es geht daher nicht darum, den Koran „schlechter" zu machen, sondern um gleiche, ehrliche Maßstäbe.`,
    detail: `**Weitere Befunde:**
- **Bukhari 4988:** Zaid vermisste bei der Abschrift einen Vers aus Sure 33 (al-Ahzab), den er schließlich nur bei Khuzaima ibn Thabit fand.
- **Muslim 1050:** Abu Musa al-Asch'ari berichtet von einer Sure, ähnlich lang wie Sure 9, die man rezitierte und die er bis auf einen Satz vergessen habe.
- **Bukhari 4992:** Umar und Hischam ibn Hakim rezitieren Sure 25 unterschiedlich; der Prophet bestätigt beide – der Koran sei in „sieben *aḥruf*" offenbart. Was die *aḥruf* sind, ist unter muslimischen Gelehrten seit jeher umstritten; at-Tabari vertrat, Uthmans Kodex bewahre nur einen von ihnen.
- **Lesarten:** Ibn Mujahid (gest. 936) legte sieben Leser als kanonisch fest – rund 300 Jahre nach Mohammed. Zwischen den Lesarten gibt es auch Unterschiede im Konsonantentext (z. B. 3:133 *wa-sāriʿū* bei Hafs, *sāriʿū* bei Nafi'; 5:54 *yartadda* / *yartadid*).
- **Handschriften:** Der Sanaa-Palimpsest zeigt unter dem Standardtext einen älteren, nicht-uthmanischen Text mit Abweichungen in Wortlaut und Wortfolge (Sadeghi/Goudarzi 2012). Daniel Brubaker dokumentiert zahlreiche Korrekturen in frühen Handschriften (2019).
- **Druckausgabe:** Die heutige weltweite Einheitlichkeit verdankt sich wesentlich der Kairoer Ausgabe von 1924 (Lesart Hafs); in Nordwestafrika sind Drucke nach Warsch verbreitet.`,
    sources: [
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4986', quote: `Nach der Schlacht von Yamama: Zaid ibn Thabit sammelt den Koran von Palmstängeln, dünnen Steinen und aus den Herzen der Männer; die letzten Verse von Sure 9 findet er nur bei Abu Khuzaima al-Ansari.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4986' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4987', quote: `Uthman sandte in jede Provinz eine Abschrift und befahl, alles andere Koranmaterial, ob in Fragmenten oder vollständigen Abschriften, zu verbrennen.`, original: `wa-amara bi-mā siwāhu mina l-qurʾāni fī kulli ṣaḥīfatin aw muṣḥafin an yuḥraq`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4987' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4977', quote: `Zirr ibn Hubaisch fragt Ubayy ibn Ka'b: „Dein Bruder Ibn Mas'ud sagt dies und das" (dass die beiden Schutzsuren nicht zum Koran gehören).`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4977' },
      { kind: 'hadith', work: 'Sahih Muslim', ref: '1452', quote: `Aisha: Im Koran war herabgesandt: „Zehn bekannte Stillungen machen (die Ehe) verboten"; dann wurde es durch fünf ersetzt. Als der Gesandte Allahs starb, gehörte dies zu dem, was vom Koran rezitiert wurde.`, status: 'paraphrase', url: 'https://sunnah.com/muslim:1452a' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6829', quote: `Umar: Ich fürchte, dass nach langer Zeit die Leute sagen: „Wir finden den Steinigungsvers nicht im Buch Allahs" – und so durch Aufgabe einer Pflicht, die Allah herabgesandt hat, in die Irre gehen.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6829', note: 'Parallel: Sahih Muslim 1691.' },
    ],
  },
  church: {
    summary: `Die Kirche hat nie behauptet, die Bewahrung des Wortes Gottes bestehe in der Fehlerlosigkeit jeder Abschrift. Sie hat abweichende Handschriften nicht verbrannt, sondern verglichen – Origenes in der Hexapla, Hieronymus in der Vulgata, al-As'ad ibn al-'Assal in seiner arabischen Evangelienrezension. Christliche Theologen unter islamischer Herrschaft kannten die Berichte über die Sammlung des Korans; schon Johannes von Damaskus (8. Jh.) erwähnt Schriften Mohammeds unter Titeln, die zum Teil nicht als Suren des heutigen Korans erscheinen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Erwähnt Schriften Mohammeds wie „Die Frau", „Der Tisch", „Die Kuh" und „Die Kamelstute Gottes" – Letztere ist keine Suren-Überschrift des heutigen Korans.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die moderne Forschung bestätigt, dass der uthmanische Konsonantentext sehr früh (zweite Hälfte des 7. Jahrhunderts) festgelegt wurde und seither bemerkenswert stabil überliefert ist – das ist eine echte Stärke der Koranüberlieferung. Zugleich zeigen Handschriften und islamische Berichte eine Phase der Vielfalt vor und neben der Standardisierung (Gefährtenkodizes, Sanaa-Palimpsest), Korrekturen in frühen Handschriften und anerkannte Lesarten mit Unterschieden in Konsonanten und Vokalen. Umstritten ist, wie groß die vor-uthmanische Vielfalt war und wie nah der Standardtext am Vortrag Mohammeds liegt; Behnam Sadeghi etwa hält ihn für sehr nah, Keith Small betont, dass der Text vor der Standardisierung nicht rekonstruierbar ist.`,
    sources: [
      { kind: 'fachliteratur', author: 'Behnam Sadeghi / Mohsen Goudarzi', work: 'Ṣan\'ā\' 1 and the Origins of the Qur\'ān, Der Islam 87', year: '2012', quote: `Der untere Text des Sanaa-Palimpsests ist ein nicht-uthmanischer Text (Gefährtenkodex); der uthmanische Text gilt den Autoren als sehr treue Überlieferung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Textual Criticism and Qur\'an Manuscripts', year: '2011', quote: `Die Handschriften erlauben die Rekonstruktion des standardisierten uthmanischen Textes, nicht eines davor liegenden „Originals".`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'University of Birmingham / Oxford Radiocarbon Accelerator Unit', work: 'Radiokarbondatierung des Birmingham-Korans (Mingana 1572a)', year: '2015', quote: `Pergament kalibriert 568–645 n. Chr. (95,4 % Wahrscheinlichkeit); im Katalog als Mitte 7. Jahrhundert beschrieben.`, status: 'paraphrase', url: 'https://www.birmingham.ac.uk/facilities/cadbury/birmingham-quran-mingana-collection/birmingham-quran/faqs' },
    ],
  },
  quickAnswer: `Der Koran ist früh und gut überliefert – das gestehe ich gern zu. Aber „Buchstabe für Buchstabe perfekt" sagen nicht einmal die islamischen Quellen: Uthman ließ abweichende Abschriften verbrennen (Bukhari 4987), Ibn Mas'ud zählte die letzten beiden Suren nicht zum Koran (Bukhari 4977), Umar und Aisha sprechen von Versen, die heute fehlen (Bukhari 6829; Muslim 1452), und es gibt verschiedene Lesarten mit unterschiedlichem Wortlaut. Der Koran ist im Kern bewahrt – genau wie die Bibel. Wer die Bibel wegen Varianten verwirft, müsste den Koran mit verwerfen.`,
  keyPoints: [
    `**Ehrliches Zugeständnis:** Der uthmanische Text wurde früh festgelegt und ist seither sehr stabil überliefert.`,
    `**Standardisierung durch Vernichtung:** Uthman ließ alle anderen Abschriften verbrennen (Bukhari 4987) – die Einheitlichkeit ist auch das Ergebnis dieser Maßnahme.`,
    `**Gefährtenkodizes wichen ab:** Ibn Mas'ud (ohne die beiden Schutzsuren, Bukhari 4977) – obwohl der Prophet ihn als einen von vier Lehrern des Korans empfahl.`,
    `**Fehlende Verse nach islamischen Quellen:** Steinigungsvers (Bukhari 6829; Muslim 1691), Stillvers (Muslim 1452), eine vergessene Sure (Muslim 1050).`,
    `**Lesarten mit Konsonantenunterschieden:** Hafs und Warsch unterscheiden sich auch im Wortlaut (z. B. 3:133; 5:54); die sieben Leser wurden erst im 10. Jahrhundert kanonisiert.`,
    `**Handschriften zeigen Geschichte:** Sanaa-Palimpsest (nicht-uthmanischer Untertext), Korrekturen in frühen Handschriften (Brubaker).`,
  ],
  voices: [
    {
      person: 'keith-small',
      role: 'als Textkritiker der Koranhandschriften',
      text: `Small hat frühe Koranhandschriften nach den Methoden der Textkritik untersucht. Sein Ergebnis: Die Handschriften zeigen Varianten, Korrekturen und eine bewusste Standardisierung. Was man rekonstruieren kann, ist der uthmanische Standardtext – nicht ein davor liegender Text, wie ihn Mohammed vortrug. Die Behauptung einer lückenlos identischen Überlieferung ist daher eine theologische, keine historische Aussage.`,
      sources: [
        { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Textual Criticism and Qur\'an Manuscripts', year: '2011', quote: `Varianten und Standardisierung in frühen Koranhandschriften.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'daniel-brubaker',
      role: 'als Erforscher von Korrekturen in Koranhandschriften',
      text: `Brubaker hat Tausende Korrekturen in frühen Koranhandschriften gesichtet – Rasuren, Überschreibungen, Einfügungen. Viele sind gewöhnliche Schreiberkorrekturen; manche wurden jedoch später, mit anderer Tinte oder Hand vorgenommen und gleichen den Text an den Standard an. Sein Befund zeigt: Auch der Koran hat eine Geschichte der Textkorrektur. Muslimische Gelehrte wie Tayyar Altıkulaç haben darauf geantwortet und sehen in den Beispielen bloße Schreiberfehler – die Debatte zeigt, dass es um Deutung von Befunden geht, nicht um ein „unberührtes" Wunder.`,
      sources: [
        { kind: 'fachliteratur', author: 'Daniel Alan Brubaker', work: 'Corrections in Early Qur\'an Manuscripts: Twenty Examples', year: '2019', quote: `Zwanzig Beispiele für Korrekturen in frühen Koranhandschriften.`, status: 'paraphrase' },
        { kind: 'gegner', author: 'Tayyar Altıkulaç', work: 'Refutation of Daniel Alan Brubaker\'s Corrections in Early Qur\'an Manuscripts', year: '2020', quote: `Muslimische Gegenschrift, die die Beispiele als gewöhnliche Schreiberkorrekturen deutet.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'jay-smith',
      role: 'als Debattierer über die Ursprünge des Korans',
      text: `Jay Smith betont in seinen Debatten, dass die islamischen Quellen selbst – Bukhari, Muslim, Ibn Abi Dawuds *Kitab al-Masahif* – von Sammlung, Auswahl, Verbrennung und verlorenen Versen berichten. Seine Strategie: nicht mit westlichen Theorien beginnen, sondern mit dem, was Muslime als authentisch anerkennen. Wer „perfekte Bewahrung" behauptet, muss erklären, warum seine eigenen Hadithsammlungen das Gegenteil erzählen.`,
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester mit Kenntnis der klassischen Quellen',
      text: `Zakaria Botros hat in seinen arabischen Sendungen die Berichte über den Steinigungsvers, den Stillvers und die Kodizes der Gefährten aus den klassischen Sammlungen vorgelesen. Er tat das nicht, um Muslime zu verletzen, sondern um zu zeigen, dass der Maßstab, mit dem die Bibel verworfen wird, auch an den Koran angelegt werden muss – und dass dann die Frage nach der Bibel ehrlicher gestellt werden kann.`,
    },
    {
      person: 'johannes-damaskus',
      role: 'als Zeuge des frühen Islam am Umayyadenhof',
      text: `Johannes von Damaskus kannte den Islam des frühen 8. Jahrhunderts aus nächster Nähe. Er erwähnt einzelne „Schriften" Mohammeds unter Titeln wie „Die Frau" oder „Die Kuh" – und eine Schrift über „die Kamelstute Gottes", die keine Sure des heutigen Korans bezeichnet. Das deutet darauf hin, dass die Gestalt des Korans und seiner Bezeichnungen zu seiner Zeit noch nicht so einheitlich war wie später.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'um 740', quote: `Nennt Schriften Mohammeds, darunter „Die Kamelstute Gottes".`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hafize-muendliche-bewahrung',
      objection: `Der Koran wurde von Tausenden Gefährten auswendig gelernt. Mündliche Massenüberlieferung (tawatur) garantiert, dass kein Buchstabe verloren ging.`,
      objectionBy: 'Muhammad Mustafa al-Azami',
      answer: `Nach Bukhari 4986 wurde der Koran gerade deshalb gesammelt, weil in der Schlacht von Yamama viele Rezitatoren fielen und man fürchtete, Teile zu verlieren. Und Zaid fand die letzten Verse von Sure 9 nur bei einem einzigen Mann, einen Vers von Sure 33 ebenfalls nur bei einem (Bukhari 4988). Wenn Tausende den ganzen Koran auswendig kannten – warum fand Zaid diese Verse nur bei je einer Person?`,
      questionsBack: [
        `Wie erklärst du, dass Zaid nach Bukhari 4986 die letzten Verse von Sure 9 bei niemandem außer Abu Khuzaima fand?`,
      ],
      followUps: [
        {
          id: 'zaid-suchte-schriftliche-belege',
          objection: `Zaid suchte schriftliche Belege. Auswendig kannten viele diese Verse – er wollte nur zusätzlich eine schriftliche Bestätigung.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Das ist eine verbreitete Erklärung, und sie ist möglich. Aber sie räumt ein, dass die schriftliche Grundlage dünn war und die Sammlung von menschlicher Auswahl abhing. Und sie erklärt nicht die anderen Berichte: Abu Musa spricht von einer ganzen Sure, die man rezitierte und vergaß (Muslim 1050); Umar von einem Steinigungsvers, den man „nicht mehr im Buch findet" (Bukhari 6829).`,
          sources: [
            { kind: 'hadith', work: 'Sahih Muslim', ref: '1050', quote: `Abu Musa: Wir rezitierten eine Sure, die wir an Länge und Strenge mit (Sure) Bara\'a verglichen; ich habe sie vergessen, außer dass ich mich erinnere: „Hätte der Sohn Adams zwei Täler voll Reichtum, er würde ein drittes begehren …"`, status: 'paraphrase', url: 'https://sunnah.com/muslim:1050' },
          ],
          followUps: [
            {
              id: 'abrogation-der-rezitation',
              objection: `Diese Verse wurden von Gott abrogiert – ihre Rezitation wurde aufgehoben (naskh at-tilawa), teils mit fortbestehendem Urteil. Das ist kein Verlust, sondern Gottes Entscheidung.`,
              objectionBy: 'klassische Lehre der Abrogation',
              answer: `Diese Lehre wurde entwickelt, um genau diese Berichte zu erklären – aber sie passt nicht zu allen. Nach Muslim 1452 sagt Aisha, der Stillvers wurde noch rezitiert, *als der Prophet starb*. Nach dem Tod des Propheten gab es keine Offenbarung und also keine Abrogation mehr. Und Umar fürchtete, die Leute würden den Steinigungsvers „nicht im Buch finden" – er hielt ihn also für Teil des Buches.`,
              followUps: [
                {
                  id: 'aisha-meint-unwissende',
                  objection: `Die Gelehrten (z. B. an-Nawawi) erklären: Aisha meint, dass einige, die von der Abrogation noch nicht gehört hatten, den Vers nach dem Tod des Propheten noch rezitierten.`,
                  objectionBy: 'klassische Hadithkommentare',
                  answer: `Auch diese Erklärung gibt zu, dass Gefährten nach dem Tod des Propheten Verse als Koran rezitierten, die heute nicht im Koran stehen. Es gab also unter den Gefährten keine Einigkeit darüber, was genau zum Koran gehört. Das ist eine Textgeschichte mit Unsicherheiten – nicht eine Überlieferung „Buchstabe für Buchstabe".`,
                  followUps: [
                    {
                      id: 'gott-bewahrte-was-er-wollte',
                      objection: `Selbst wenn: Der Koran, den wir heute haben, ist genau der, den Gott bewahren wollte. Das ist die Bedeutung von 15:9.`,
                      objectionBy: 'Mohammed Hijab',
                      answer: `Damit wechselst du von einer historischen Behauptung („perfekt überliefert, kein Buchstabe verloren") zu einer theologischen („Gott bewahrte, was er wollte"). Die historische Behauptung wird von euren eigenen Quellen nicht gestützt. Die theologische ist nicht überprüfbar – und ein Christ könnte sie genauso über die Bibel sagen. Dann ist die Bewahrung kein Beweis mehr für die Überlegenheit des Korans.`,
                      questionsBack: [
                        `Wenn „Gott bewahrte, was er wollte" für den Koran gilt – warum nicht auch für die Bibel, deren Handschriften älter und zahlreicher sind?`,
                      ],
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
      id: 'uthman-nur-dialekte',
      objection: `Uthman verbrannte nur Abschriften mit Dialektunterschieden oder persönlichen Notizen. Der Inhalt war überall derselbe.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Bukhari 4987 sagt, Hudhaifa fürchtete, die Muslime würden über ihr Buch streiten „wie Juden und Christen" – das klingt nach mehr als Aussprache. Und die Gefährtenkodizes unterschieden sich nach euren eigenen Quellen im Umfang: Ibn Mas'ud zählte die beiden Schutzsuren nicht zum Koran (Bukhari 4977). Das ist kein Dialekt, sondern die Frage, was überhaupt zum Koran gehört.`,
      followUps: [
        {
          id: 'ibn-masud-allein',
          objection: `Ibn Mas'ud hielt die beiden Schutzsuren für Bittgebete und schrieb sie deshalb nicht in sein Exemplar. Er war damit allein, und die Gemeinde hat ihn korrigiert.`,
          objectionBy: 'klassische Erklärung',
          answer: `Ibn Mas'ud war nicht irgendwer: Nach Bukhari 4999 empfahl der Prophet, den Koran von vier Männern zu lernen – Ibn Mas'ud wird als Erster genannt, Ubayy ibn Ka'b als Vierter. Wenn einer dieser vier sich im Umfang des Korans vom späteren Standard unterschied, dann gab es unter den besten Kennern keine vollständige Einigkeit. Und nach späteren Berichten weigerte sich Ibn Mas'ud, sein Exemplar zur Verbrennung herauszugeben.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4999', quote: `Lernt den Koran von vier: von Abdallah ibn Mas'ud, Salim, Mu'adh und Ubayy ibn Ka'b.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4999' },
            { kind: 'hadith', work: 'Jami\' at-Tirmidhi', ref: '3104', quote: `Bericht über Ibn Mas'uds Unmut, dass Zaid ibn Thabit mit der Abschrift betraut wurde, und seine Aufforderung, die eigenen Exemplare zu behalten.`, status: 'unverified', note: 'Nummer nach verbreiteter Zählung; Wortlaut vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'konsens-der-gemeinde',
              objection: `Die Gemeinschaft der Gefährten hat sich im Konsens (ijma') auf den uthmanischen Text geeinigt. Das ist die Garantie.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Dann ist der Umfang des Korans durch eine Entscheidung der Gemeinde nach Mohammeds Tod festgelegt worden – mit Auswahl und Ausschluss. Das ist ein Kanonisierungsprozess, ähnlich wie die Kirche den Kanon des Neuen Testaments anerkannte. Ich habe nichts gegen solche Prozesse – aber dann kannst du der Bibel nicht vorwerfen, dass ihr Kanon von der Gemeinde anerkannt wurde.`,
              followUps: [
                {
                  id: 'uthman-kodizes-erhalten',
                  objection: `Wir haben doch die Originale Uthmans – den Topkapi-Kodex in Istanbul und den Samarkand-Kodex in Taschkent.`,
                  objectionBy: 'verbreitete Überzeugung',
                  answer: `Die paläografische Forschung datiert beide Handschriften später als Uthman, meist ins 8. oder 9. Jahrhundert. Tayyar Altıkulaç, der den Topkapi-Kodex für die türkische Forschungsstelle IRCICA herausgab, beschreibt ihn als frühe Abschrift, nicht als Uthmans eigenes Exemplar. Ein Original Uthmans ist nicht erhalten – genauso wenig wie ein Original der Evangelien.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Tayyar Altıkulaç (Hg.)', work: 'Al-Mushaf al-Sharif attributed to \'Uthman bin \'Affan (The copy at the Topkapi Palace Museum)', year: '2007', quote: `Edition des Topkapi-Kodex mit Analyse seiner Schrift, Datierung und Abweichungen.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'qiraat-von-gott',
      objection: `Die Lesarten sind keine Fehler, sondern von Gott offenbart – der Koran wurde in sieben ahruf herabgesandt (Bukhari 4992). Alle sind gleich gültig.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Dann ist der Koran nicht „ein Text, Buchstabe für Buchstabe", sondern mehrere gültige Fassungen. Zwischen Hafs und Warsch gibt es auch Unterschiede im Konsonantentext – etwa 3:133 mit oder ohne „und", 5:54 *yartadda* oder *yartadid*. Und was die sieben *aḥruf* sind, ist unter muslimischen Gelehrten seit jeher umstritten; at-Tabari meinte sogar, Uthmans Text bewahre nur einen von sieben.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4992', quote: `Umar hört Hischam ibn Hakim Sure 25 anders rezitieren; der Prophet bestätigt beide Lesungen: „So wurde sie herabgesandt. Dieser Koran wurde in sieben aḥruf herabgesandt; lest, was davon leicht ist."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4992' },
      ],
      followUps: [
        {
          id: 'unterschiede-minimal',
          objection: `Die Unterschiede sind minimal: ein Vokal, eine Person des Verbs, ein „und". Kein Unterschied in der Lehre!`,
          objectionBy: 'Mohammed Hijab',
          answer: `Einverstanden – und genau das sagen Christen über die Varianten der Bibel: Rechtschreibung, Wortstellung, ein „und" – keine Lehre betroffen. Wenn kleine Varianten den Koran nicht entwerten, dann entwerten sie die Bibel auch nicht. Wir sollten denselben Maßstab anlegen.`,
          followUps: [
            {
              id: 'qiraat-mutawatir',
              objection: `Aber unsere Lesarten sind alle in Massenüberlieferung (mutawatir) mit ununterbrochenen Ketten bis zum Propheten gesichert. Eure Varianten sind Abschreibfehler.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Die Auswahl der sieben kanonischen Leser traf Ibn Mujahid im 10. Jahrhundert, rund 300 Jahre nach Mohammed; andere Lesarten – auch die Ibn Mas'uds – wurden als „abweichend" (*shādhdh*) ausgeschlossen. Spätere Gelehrte wie Ibn al-Jazari prüften Lesarten nach Kriterien (Kette, Übereinstimmung mit dem uthmanischen Konsonantentext, Arabisch). Das ist ein Prüf- und Auswahlverfahren – also Textkritik –, kein automatischer Beweis göttlicher Bewahrung.`,
            },
          ],
        },
      ],
    },
    {
      id: 'birmingham-und-sanaa',
      objection: `Die Birmingham-Fragmente wurden auf 568–645 datiert und stimmen mit unserem Text überein. Und Sanaa bestätigt ebenfalls den Koran. Die Handschriften beweisen die perfekte Bewahrung.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Die Birmingham-Blätter sind ein echtes, frühes Zeugnis für den uthmanischen Konsonantentext – das erkenne ich an. Aber Radiokarbon datiert das Pergament, nicht das Beschreiben, und zwei Blätter beweisen nicht die Identität des ganzen Textes. Und der Sanaa-Palimpsest zeigt gerade das Gegenteil: Unter dem Standardtext liegt ein älterer, nicht-uthmanischer Text mit anderem Wortlaut und anderer Wortfolge – genau die Art von Text, die Uthman verbrennen ließ.`,
      followUps: [
        {
          id: 'sadeghi-bestaetigt-uthman',
          objection: `Behnam Sadeghi, der Sanaa am gründlichsten untersucht hat, sagt selbst, dass der uthmanische Text sehr zuverlässig ist.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Das stimmt, und ich gebe es fair wieder: Sadeghi hält den uthmanischen Text für eine sehr treue Überlieferung. Aber er beschreibt den Untertext als eigenständigen Gefährtenkodex mit echten Abweichungen in Wörtern und Wortfolge. Damit bestätigt er, dass es neben dem Standard andere Textfassungen gab. „Sehr zuverlässig" ist etwas anderes als „Buchstabe für Buchstabe ohne jede Abweichung".`,
          sources: [
            { kind: 'fachliteratur', author: 'Behnam Sadeghi / Mohsen Goudarzi', work: 'Ṣan\'ā\' 1 and the Origins of the Qur\'ān, Der Islam 87', year: '2012', quote: `Edition und Analyse des unteren Textes; Klassifizierung als nicht-uthmanischer Texttyp.`, status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'untertext-uebungsheft',
              objection: `Der untere Text war vielleicht nur ein fehlerhaftes Übungsexemplar, das deshalb abgeschabt wurde.`,
              objectionBy: 'verbreitete muslimische Erklärung',
              answer: `Die Abweichungen sind nicht zufällig, sondern zeigen ein eigenes Muster – die Forscher vergleichen sie mit den Berichten über Gefährtenkodizes. Und dass man den Text abschabte und durch den Standard ersetzte, passt genau zu einer Zeit der Vereinheitlichung. Selbst wenn es ein Übungsexemplar war: Es zeigt, dass im 7. Jahrhundert Koranexemplare mit anderem Wortlaut existierten.`,
              followUps: [
                {
                  id: 'korrekturen-normale-fehler',
                  objection: `Und die Korrekturen, die Brubaker zeigt, sind ganz normale Schreiberfehler, die sofort verbessert wurden. Altıkulaç hat das widerlegt.`,
                  objectionBy: 'Tayyar Altıkulaç (aufgegriffen in Debatten)',
                  answer: `Viele Korrekturen sind tatsächlich gewöhnliche Schreiberfehler – das sagt auch Brubaker. Strittig sind die Fälle, in denen später, mit anderer Hand oder Tinte, der Text an den Standard angeglichen wurde. Ob man das als Fehlerkorrektur oder als Standardisierung deutet: In beiden Fällen zeigen die Handschriften eine Geschichte des Textes mit Fehlern und Korrekturen. Genau das findet man auch bei Bibelhandschriften.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-viel-schlechter',
      objection: `Selbst wenn der Koran kleine Varianten hat – die Bibel ist viel schlechter überliefert. Wir haben einen einzigen Text weltweit, ihr habt Dutzende Übersetzungen und Fassungen.`,
      objectionBy: 'Zakir Naik',
      answer: `Übersetzungen sind keine Fassungen des Urtextes – auch den Koran gibt es in Hunderten Übersetzungen. Der griechische Urtext des Neuen Testaments ist in über 5.000 Handschriften überliefert und kann sehr sicher rekonstruiert werden. Und die weltweite Einheitlichkeit gedruckter Korane verdankt sich wesentlich der Kairoer Ausgabe von 1924; in Marokko oder Algerien liest man Drucke nach Warsch, nicht nach Hafs.`,
      followUps: [
        {
          id: 'standardisierung-ist-staerke',
          objection: `Dass Uthman standardisierte, zeigt doch nur, wie sorgfältig die Muslime mit ihrem Buch umgingen.`,
          objectionBy: 'Muhammad Mustafa al-Azami',
          answer: `Man kann es so sehen. Aber dann muss man ehrlich sagen: Die Einheitlichkeit ist zum Teil das Ergebnis einer staatlichen Entscheidung und der Vernichtung anderer Exemplare – nicht nur einer wundersamen Bewahrung. Die Bibel wurde dagegen in vielen Kirchen und Sprachen überliefert, ohne dass eine Macht abweichende Handschriften vernichten konnte. Darum können wir heute ihre Textgeschichte offen prüfen. Beides sind Wege der Überlieferung – keiner ist ein Beweis göttlicher Herkunft.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärst du Bukhari 4987: Warum mussten andere Koranexemplare verbrannt werden, wenn alle identisch waren?`,
    `Was meint Umar in Bukhari 6829, wenn er fürchtet, man werde den Steinigungsvers „nicht im Buch Allahs finden"?`,
    `Wie verstehst du Muslim 1452 – einen Vers, der nach dem Tod des Propheten noch rezitiert wurde?`,
    `Gehörten die beiden letzten Suren für Ibn Mas'ud zum Koran (Bukhari 4977)?`,
    `Wenn kleine Varianten den Koran nicht entwerten – warum dann die Bibel?`,
  ],
  avoid: [
    `Nicht behaupten, der Koran sei „völlig verfälscht" oder „unzuverlässig". Der uthmanische Text ist früh und stabil überliefert – das zuzugeben macht dich glaubwürdig.`,
    `Nicht mit revisionistischen Extremthesen argumentieren (z. B. „Mohammed hat nie existiert", „der Koran entstand erst im 9. Jahrhundert") – sie sind in der Forschung Minderheitsmeinungen und lenken vom Kernargument ab.`,
    `Nicht behaupten, die Birmingham-Datierung „beweise", dass der Koran vor Mohammed existierte. Radiokarbon datiert das Pergament; der Bereich 568–645 schließt die traditionelle Zeit ein.`,
    `Hadithnummern nur verwenden, wenn du sie geprüft hast – Zählungen unterscheiden sich je nach Ausgabe.`,
  ],
  concessions: [
    `Der uthmanische Konsonantentext wurde früh festgelegt und ist seither bemerkenswert stabil überliefert.`,
    `Die Lesarten unterscheiden sich meist nur geringfügig und betreffen selten die Lehre.`,
    `Für viele der genannten Berichte gibt es innerislamische Erklärungen (Abrogation der Rezitation, Dialekte, Bittgebete), die ernst zu nehmen sind.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Textual Criticism and Qur\'an Manuscripts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Daniel Alan Brubaker', work: 'Corrections in Early Qur\'an Manuscripts: Twenty Examples', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Behnam Sadeghi / Mohsen Goudarzi', work: 'Ṣan\'ā\' 1 and the Origins of the Qur\'ān, Der Islam 87', year: '2012', status: 'paraphrase' },
    { kind: 'gegner', author: 'Muhammad Mustafa al-Azami', work: 'The History of the Qur\'anic Text from Revelation to Compilation', year: '2003', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Koran', 'Handschriften', 'Textgeschichte', 'Qira\'at', 'Islam'],
  related: [
    'islam-dilemma/nur-koran-geschuetzt',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'islam-koran/koran-widerspruchsfrei',
  ],
};

export default claim;
