import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schia-imamat',
  title: `„Ali und die Imame sind die rechtmäßigen Nachfolger Mohammeds (Schia)."`,
  proponents: [
    { name: 'Allama Sayyid Muhammad Husayn Tabataba\'i', role: 'Schiitischer Philosoph und Koranexeget (1903–1981), Qom', work: 'Shi\'ite Islam (engl. 1975); Tafsir al-Mizan' },
    { name: 'Sayyid Abd al-Husayn Sharaf al-Din al-Musawi', role: 'Libanesischer schiitischer Gelehrter (1872–1957)', work: 'al-Muraja\'at (Briefwechsel mit dem Azhar-Gelehrten Salim al-Bischri)' },
    { name: 'Ayatollah Abu l-Qasim al-Khoei', role: 'Großayatollah in Nadschaf (1899–1992)', work: 'al-Bayan fi Tafsir al-Qur\'an (Einleitung zum Koran, u. a. gegen die These der Koranveränderung)' },
    { name: 'Sayyid Ammar Nakshawani', role: 'Schiitischer Prediger und Dozent (Großbritannien)', work: 'Vorträge zu Ghadir Khumm, Kerbela und dem Imamat' },
  ],
  steelman: `Am 18. Dhu l-Hiddscha des Jahres 10 der Hidschra (März 632) ließ der Prophet die heimkehrenden Pilger am Teich von Khumm anhalten, nahm Alis Hand und sprach vor Tausenden: „Wessen Herr (mawla) ich bin, dessen Herr ist auch Ali." Dieser Hadith ist in sunnitischen Sammlungen selbst überliefert (Tirmidhi 3713, von Darussalam und al-Albani als sahih eingestuft), ebenso der Hadith von den „zwei gewichtigen Dingen" – dem Buch Gottes und der Familie des Propheten (Sahih Muslim 2408) – und das Wort an Ali: „Du bist für mich wie Aaron für Mose, nur dass es nach mir keinen Propheten gibt." Gott hat den Propheten nicht ohne Leitung für seine Gemeinde sterben lassen: Wie Aaron und seine Söhne das Priestertum Israels trugen, so tragen Ali und die elf Imame aus seiner und Fatimas Nachkommenschaft das göttlich verbürgte, irrtumsfreie Lehramt. Dass die Mehrheit der Gefährten in der Halle der Banu Sa'ida einen anderen wählte, beweist nicht das Gegenteil – auch Israel tanzte um das Kalb, während Aaron allein dastand. Die Geschichte gab der Schia recht: Spaltung, Bürgerkrieg und das Blut Husains in Kerbela (680) zeigen, wohin es führt, wenn man den bestimmten Führer übergeht.`,
  biblical: {
    summary: `Die Bibel äußert sich selbstverständlich nicht zur Nachfolge Mohammeds. Sie beantwortet aber die **dahinterliegende Frage**, die die Schia mit großem Ernst stellt: Braucht Gottes Volk nach dem Propheten eine lebendige, von Gott eingesetzte Leitung? Die Antwort des Neuen Testaments lautet: Ja – und diese Leitung ist zuerst Christus selbst, der ewig lebende Hohepriester (Hebr 7,24–25), der seinen Geist sendet (Joh 14,16–17; 16,13) und Apostel einsetzt, die durch Handauflegung Älteste und Bischöfe einsetzen (Apg 14,23; 2 Tim 1,6; Tit 1,5).`,
    detail: `**1. Nicht Blut, sondern Geist.** Das aaronitische Priestertum hing an der Abstammung. Der Hebräerbrief betont, dass Christus Priester ist „nicht nach dem Gesetz eines fleischlichen Gebots, sondern nach der Kraft unauflöslichen Lebens" (Hebr 7,16). Ein Führer, der „immerdar lebt und für sie eintritt" (7,25), ist nicht auf eine Kette sterblicher Nachfolger angewiesen.

**2. Eine Leitung, die nicht verborgen ist.** Christus verspricht: „Siehe, ich bin bei euch alle Tage bis an der Welt Ende" (Mt 28,20) und sendet den Tröster, „dass er bei euch bleibe ewiglich" (Joh 14,16). Diese Gegenwart wird in der Kirche erfahren – in Wort, Sakrament und Gemeinschaft.

**3. Apostolische Nachfolge.** Schon um 96 n. Chr. schreibt Klemens von Rom, die Apostel hätten Bischöfe und Diakone eingesetzt und angeordnet, dass nach deren Tod andere bewährte Männer ihren Dienst übernehmen (1 Klem 42–44). Die koptische Kirche führt ihre Bischofsreihe auf den Evangelisten Markus zurück.

**4. Das „Wort", das spricht.** Die Schia sagt: Ein Buch allein spricht nicht; es braucht einen Ausleger. Das Christentum geht noch einen Schritt weiter: Gottes letztes Wort ist kein Buch, sondern eine Person – „das Wort ward Fleisch" (Joh 1,14).`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '7,23–25', quote: `Und jener sind viele, die Priester wurden, darum daß sie der Tod nicht bleiben ließ; dieser aber, darum daß er bleibt ewiglich, hat er ein unvergängliches Priestertum. Daher kann er auch selig machen immerdar, die durch ihn zu Gott kommen, und lebt immerdar und bittet für sie.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '14,16–17', quote: `Und ich will den Vater bitten, und er soll euch einen andern Tröster geben, daß er bei euch bleibe ewiglich: den Geist der Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,23', quote: `Und sie ordneten ihnen hin und her Älteste in den Gemeinden, beteten und fasteten und befahlen sie dem HERRN, an den sie gläubig geworden waren.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '42–44', year: 'um 96', quote: `Die Apostel setzten ihre Erstlinge als Bischöfe und Diakone ein und gaben die Anordnung, dass nach ihrem Entschlafen andere erprobte Männer ihren Dienst übernehmen sollten.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche nimmt im innerislamischen Streit zwischen Sunniten und Schiiten **keine Partei**. Sie lebt seit dem 7. Jahrhundert mit beiden Strömungen zusammen – unter den schiitischen Fatimiden (969–1171) ebenso wie unter sunnitischen Herrschern – und hat beide als Nachbarn zu lieben. Theologisch bezeugt sie: Die von Gott verbürgte Leitung seines Volkes ruht auf Christus, dem auferstandenen Herrn, und wird in der Kirche durch den Heiligen Geist und die apostolische Sukzession weitergegeben (Irenäus, Adv. Haer. III,3).`,
    detail: `Irenäus von Lyon widerlegt um 180 die Gnostiker, die sich auf geheime Überlieferungen beriefen, mit dem Hinweis auf die **öffentlich bekannten Bischofslisten** der apostolischen Kirchen: Die Wahrheit liegt nicht im Verborgenen, sondern ist in der sichtbaren Nachfolge der Apostel bewahrt. Dieser Gedanke ist für das Gespräch mit Schiiten hilfreich: Auch die Schia sucht eine verbürgte Leitung – die Kirche verweist auf eine Leitung, die sichtbar, öffentlich und durch zwei Jahrtausende ununterbrochen ist. Die koptische Kirche zählt heute mit Papst Tawadros II. den 118. Nachfolger des hl. Markus.`,
    sources: [
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,3,1–3', year: 'um 180', quote: `Die Überlieferung der Apostel, in der ganzen Welt offenbar, kann in jeder Kirche jeder erkennen, der die Wahrheit sehen will; wir können die von den Aposteln eingesetzten Bischöfe und ihre Nachfolger bis zu uns aufzählen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,20', quote: `Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Historisch ist unstrittig: Nach Mohammeds Tod (632) wählte eine Versammlung in Medina Abu Bakr zum Kalifen; Ali wurde erst 656 vierter Kalif und 661 ermordet; sein Sohn Husain fiel 680 bei Kerbela. Die Zwölferschia (die größte schiitische Richtung, heute u. a. Mehrheit in Iran, Irak, Bahrain) lehrt zwölf irrtumsfreie (ma'sum) Imame; der zwölfte, Muhammad al-Mahdi, sei 874 in die „kleine" und 941 in die „große Verborgenheit" gegangen und werde am Ende wiederkommen. Sunniten deuten „mawla" in Ghadir als „Freund, Verbündeter" und sehen darin eine Ehrung Alis, keine Ernennung.`,
    detail: `**Zur Koranfrage fair:** In frühen schiitischen Hadith-Sammlungen (u. a. al-Kulaini, al-Kafi, 10. Jh.) stehen Überlieferungen, die eine Verkürzung des Korans andeuten (z. B. ein Bericht, der Koran habe ursprünglich 17.000 Verse gehabt). 1875 vertrat Mirza Husain Nuri in *Fasl al-Khitab* die These, Verse seien bei der Sammlung ausgelassen worden; das Buch löste heftigen Widerspruch schiitischer Gelehrter aus, und Nuri soll den Titel später bedauert haben. Die heute maßgeblichen Zwölfer-Gelehrten (z. B. al-Khoei, *al-Bayan*) lehnen jede Veränderung des Korans ab und deuten die betreffenden Berichte um. Umgekehrt kennen auch sunnitische Sammlungen Berichte über verlorene Verse (z. B. den „Steinigungsvers", Sahih al-Bukhari 6830). Wer fair ist, wirft keiner Seite vor, sie lehre heute einen verfälschten Koran.`,
    sources: [
      { kind: 'hadith', work: 'Jami\' at-Tirmidhi', ref: '3713', quote: `Wessen Herr (mawla) ich bin, dessen Herr ist auch Ali.`, original: 'مَنْ كُنْتُ مَوْلاَهُ فَعَلِيٌّ مَوْلاَهُ', translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://sunnah.com/tirmidhi:3713', note: 'Tirmidhi selbst: hasan gharib; Darussalam und al-Albani: sahih. Ibn Taimiyya bestritt, dass der Wortlaut in den Sahih-Werken steht.' },
      { kind: 'hadith', work: 'Sahih Muslim', ref: '2408', quote: `Ich lasse unter euch zwei gewichtige Dinge zurück: zuerst das Buch Gottes, in dem Rechtleitung und Licht ist … und meine Hausgenossen (ahl baiti). Ich erinnere euch an Gott in Bezug auf meine Hausgenossen.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/muslim:2408', note: 'Überliefert von Zaid ibn Arqam, gesprochen bei Khumm. Sunniten verstehen es als Gebot der Achtung, Schiiten als Einsetzung der Imame.' },
      { kind: 'gegner', author: 'Muhammad Husayn Tabataba\'i', work: 'Shi\'ite Islam', year: '1975 (engl.)', quote: `Das Imamat ist die von Gott eingesetzte, irrtumsfreie Fortführung der Leitung nach dem Propheten; ohne sie bliebe die Gemeinde ohne verbürgte Auslegung.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Mirza Husain Nuri at-Tabarsi', work: 'Fasl al-Khitab fi Tahrif Kitab Rabb al-Arbab', year: '1292 h. (1875)', status: 'paraphrase', note: 'Von den meisten schiitischen Gelehrten abgelehnt; mehrere Widerlegungsschriften.' },
    ],
  },
  quickAnswer: `Als Christ will ich den Streit zwischen Sunniten und Schiiten nicht entscheiden – ich achte beide. Aber die Frage der Schia ist tief: Braucht Gottes Volk nach dem Propheten eine lebendige, von Gott verbürgte Leitung, weil ein Buch allein nicht spricht? Das Evangelium sagt Ja – und diese Leitung ist kein verborgener Imam, sondern der auferstandene Christus, der „immerdar lebt" (Hebr 7,25), seinen Geist sendet und verspricht: „Ich bin bei euch alle Tage" (Mt 28,20).`,
  keyPoints: [
    `**Neutral im innerislamischen Streit:** Christen sind nicht Schiedsrichter zwischen Sunna und Schia, sondern Nachbarn beider – gegen jede konfessionelle Gewalt.`,
    `**Die ehrliche Beobachtung:** Der Koran nennt keinen Nachfolger. Die wichtigste Frage der jungen Gemeinde blieb offen – das passt schlecht zum Anspruch, der Koran sei „Klarstellung für alles" (16:89).`,
    `**Die Schia sagt: Ein Buch braucht einen lebendigen Ausleger.** Damit bestätigt sie ein christliches Grundanliegen: Gottes Wort ist letztlich eine Person (Joh 1,14).`,
    `**Ein ewig lebender statt eines verborgenen Führers:** Der zwölfte Imam ist seit 941 verborgen; Christus starb öffentlich, erstand vor Zeugen und ist in Geist und Sakrament gegenwärtig.`,
    `**Kerbela und das Kreuz:** Die schiitische Frömmigkeit kennt die Ahnung vom erlösenden Leiden des Unschuldigen (Husain) – das Evangelium zeigt, wo diese Ahnung erfüllt ist.`,
    `**Fairness zur Koranfrage:** Frühe schiitische Berichte über eine Koranverkürzung sind historisch belegt, werden heute aber von der Hauptlinie abgelehnt – nicht übertreiben.`,
  ],
  voices: [
    {
      person: 'irenaeus',
      role: 'als Zeuge der apostolischen Nachfolge',
      text: `Irenäus antwortet auf Gruppen, die sich auf verborgene Überlieferungen und geheime Lehrer berufen, mit einem öffentlichen Argument: Die Apostel haben Nachfolger eingesetzt, deren Namen jeder kennt, und deren Lehre ist überall dieselbe. Für das Gespräch mit Schiiten ist das ein Schlüssel: Gottes verbürgte Leitung ist nicht im Verborgenen, sondern sichtbar und überprüfbar.`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3', year: 'um 180', status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Für Athanasius konnte kein Bote, kein Gesetz und kein Prophet allein die Menschheit wiederherstellen; dazu musste der Logos selbst Mensch werden. Das ist die christliche Antwort auf die schiitische Einsicht, dass Gottes Wort einen lebendigen Träger braucht: Gott hat nicht nur ein Buch und einen Ausleger gesandt, sondern ist im Sohn selbst gekommen.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '13–14', year: 'ca. 318', status: 'paraphrase' }],
    },
    {
      person: 'gabriel-reynolds',
      role: 'als Islamwissenschaftler',
      text: `Reynolds beschreibt die Entstehung von Sunna und Schia als Streit um Autorität: Wer spricht nach dem Propheten verbindlich für Gott? Er weist darauf hin, dass die Debatten um Kompilation und Vollständigkeit des Korans in beiden Traditionen Spuren hinterlassen haben – ein Grund, die Textgeschichte des Korans historisch und nicht dogmatisch zu betrachten.`,
      sources: [{ kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Emergence of Islam: Classical Traditions in Contemporary Perspective', year: '2012', status: 'paraphrase' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim mit Innensicht',
      text: `Qureshi betont, dass Christen im Gespräch mit Muslimen die Vielfalt des Islam ernst nehmen müssen: Wer jeden Muslim mit sunnitischen Standardargumenten konfrontiert, verfehlt den schiitischen Gesprächspartner. Entscheidend sei, nach den Fragen des Herzens zu fragen – nach Gewissheit, Leitung und Gottes Nähe – und dort Jesus zu zeigen.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'No God but One: Allah or Jesus?', year: '2016', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'ghadir-beweist-imamat',
      objection: `Ghadir Khumm ist eindeutig: „Wessen mawla ich bin, dessen mawla ist Ali." Das steht sogar bei Tirmidhi, und die Sunniten stufen es als sahih ein. Ihr Christen nehmt klare Texte ernst – also erkenne an, dass Ali eingesetzt wurde.`,
      objectionBy: 'Sayyid Ammar Nakshawani',
      answer: `Ich bestreite nicht, dass der Hadith gut bezeugt ist, und ich will den innerislamischen Streit nicht entscheiden. Mir fällt aber etwas auf: Wenn die Einsetzung so eindeutig war, warum hat die Mehrheit der Gefährten wenige Wochen später anders gehandelt? Entweder war der Text nicht so eindeutig, wie du sagst – oder die Gefährten waren unzuverlässig. Beides hat Folgen für die Überlieferung des Korans, die durch dieselben Gefährten lief.`,
      questionsBack: [
        `Wenn die Mehrheit der Gefährten eine klare göttliche Anordnung übergehen konnte – wie sicher ist dann ihre Überlieferung des Korantextes?`,
      ],
      followUps: [
        {
          id: 'sahaba-wie-israel',
          objection: `Auch Israel tanzte um das goldene Kalb, während Aaron allein blieb. Dass die Mehrheit irrte, ist in der Geschichte der Propheten normal. Die Wahrheit hängt nicht an der Mehrheit.`,
          objectionBy: 'Sayyid Ammar Nakshawani',
          answer: `Da stimme ich dir völlig zu: Die Wahrheit hängt nicht an der Mehrheit. Aber dann musst du zugeben, dass dieselben Gefährten auch den Koran gesammelt haben – Zaid ibn Thabit unter Abu Bakr und Uthman. Wenn sie in der wichtigsten Personalfrage irren konnten, ist ihre Textsammlung jedenfalls nicht unfehlbar, sondern muss historisch geprüft werden – genau wie Muslime es bei der Bibel verlangen.`,
          followUps: [
            {
              id: 'ali-bestaetigte-mushaf',
              objection: `Ali selbst hat den Mushaf Uthmans gebilligt und nie einen anderen Koran verbreitet. Deshalb vertrauen wir dem Text – wegen des Imams, nicht wegen der Gefährten.`,
              objectionBy: 'Ayatollah al-Khoei (Argumentationslinie in al-Bayan)',
              answer: `Das ist die Hauptlinie der Zwölferschia, und ich respektiere sie. Beachte aber, was daraus folgt: Die Gewissheit über den Koran hängt dann an einer lebendigen, verbürgten Autorität – nicht am Text allein. Das ist im Kern das Argument der Kirche: Die Schrift wird in einer Gemeinschaft mit verbürgter Leitung empfangen und bewahrt. Wenn das beim Koran legitim ist, dann auch bei der Bibel.`,
              followUps: [
                {
                  id: 'tahrif-unterstellung',
                  objection: `Ihr Christen zitiert gern al-Kafi und Nuris *Fasl al-Khitab*, um uns die Lehre von der Koranverfälschung anzuhängen. Das ist unfair: Unsere Gelehrten haben Nuri widerlegt, und die Sunniten haben selbst Berichte über verlorene Verse.`,
                  objectionBy: 'Schiitischer Gelehrter (z. B. in Antworten von al-islam.org)',
                  answer: `Du hast recht, und ich will das nicht tun: Die heute maßgeblichen schiitischen Gelehrten lehnen eine Veränderung des Korans ab, und auch sunnitische Sammlungen kennen Berichte über nicht mehr enthaltene Verse (z. B. Sahih al-Bukhari 6830 zum Steinigungsvers). Mein Punkt ist bescheidener: Auch in der islamischen Überlieferung gab es echte Debatten über Vollständigkeit und Gestalt des Textes. Darum bitte ich nur um einen gleichen Maßstab – wer bei der Bibel Varianten als „Verfälschung" wertet, muss beim Koran dieselbe Messlatte anlegen.`,
                  sources: [
                    { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6830', quote: `Umar sagte sinngemäß: Ich fürchte, dass nach langer Zeit jemand sagt: „Wir finden den Steinigungsvers nicht im Buch Gottes" – und die Menschen irregehen, weil sie eine Pflicht verlassen, die Gott herabgesandt hat.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:6830' },
                  ],
                  questionsBack: [
                    `Wenn Muslime selbst über nicht mehr im Text stehende Verse diskutiert haben – ist dann „kein einziger Buchstabe hat sich je verändert" eine historische oder eine dogmatische Aussage?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'warum-mischst-du-dich-ein',
          objection: `Warum interessiert dich als Christ überhaupt, wer Mohammeds Nachfolger war? Das ist unsere innere Angelegenheit.`,
          objectionBy: 'Schiitischer Gesprächspartner',
          answer: `Weil die Frage weit über eine Personalentscheidung hinausgeht: Es geht darum, wie Gott sein Volk nach dem Propheten leitet und wer verbindlich auslegt. Das ist eine Frage, die Christen und Muslime teilen. Und weil ich als Christ Sunniten wie Schiiten lieben soll – gerade im Nahen Osten, wo Christen oft zwischen den Fronten leben und konfessionelle Gewalt alle trifft.`,
        },
      ],
    },
    {
      id: 'imam-unfehlbar-noetig',
      objection: `Gottes Gnade (lutf) verlangt, dass nach dem Propheten ein irrtumsfreier Führer bleibt. Der Koran allein schweigt – schon Ali sagte, der Koran spreche nicht selbst, Menschen sprächen für ihn. Darum braucht es den ma'sum Imam.`,
      objectionBy: 'Allama Tabataba\'i',
      answer: `Hier sind wir uns näher, als du denkst: Auch die Kirche sagt, dass ein Buch einen lebendigen, verbürgten Ausleger braucht. Das Christentum geht sogar noch weiter: Gottes letztes Wort ist kein Buch, sondern eine Person – „Das Wort ward Fleisch" (Joh 1,14). Die eigentliche Frage ist also nicht, **ob** Gott eine lebendige Leitung gibt, sondern **welche** er bestätigt hat. Christus hat Gott durch die Auferstehung beglaubigt (Röm 1,4).`,
      sources: [
        { kind: 'gegner', author: 'Ali ibn Abi Talib (zugeschrieben)', work: 'Nahdsch al-Balagha', ref: 'Predigt 125 (Zählung je nach Ausgabe)', quote: `Dieser Koran ist eine Schrift zwischen zwei Deckeln; er spricht nicht mit einer Zunge, er braucht einen Dolmetscher, und Menschen sprechen für ihn.`, translation: 'sinngemäß', status: 'paraphrase', note: 'Gesprochen im Zusammenhang mit dem Schiedsgericht von Siffin (657). Die Sammlung entstand im 10./11. Jh. (asch-Scharif ar-Radi); die Authentizität einzelner Stücke ist umstritten.' },
      ],
      followUps: [
        {
          id: 'imame-blutlinie-aaron',
          objection: `Unsere Imame stammen vom Propheten ab – wie Aarons Söhne das Priestertum Israels erbten. Eure Bischöfe haben keine solche Abstammung; ihre Autorität ist bloß menschliche Wahl.`,
          objectionBy: 'Schiitischer Prediger',
          answer: `Der Vergleich mit Aaron ist bemerkenswert, denn gerade hier setzt das Neue Testament an: Das aaronitische Priestertum endete mit jedem Priester im Tod. Christus ist Priester „nicht nach dem Gesetz eines fleischlichen Gebots, sondern nach der Kraft unauflöslichen Lebens" (Hebr 7,16) – er lebt ewig und tritt für uns ein (7,25). Ein ewig lebender Hohepriester übertrifft jede Kette sterblicher Erben. Und die Bischöfe empfangen ihr Amt nicht durch Wahl allein, sondern durch Handauflegung in ununterbrochener Linie seit den Aposteln.`,
          followUps: [
            {
              id: 'mahdi-lebt-verborgen',
              objection: `Die Kette ist nicht abgerissen: Der zwölfte Imam lebt, er ist seit 941 in der großen Verborgenheit und wird als Mahdi wiederkommen. Die Erde ist nie ohne Hudschdscha (Beweis Gottes).`,
              objectionBy: 'Zwölferschiitische Lehre',
              answer: `Ein verborgener Führer kann aber nicht befragt werden. Die Schia selbst musste die Lücke füllen – mit den Gelehrten (Mardscha') und im heutigen Iran mit der Herrschaft des Rechtsgelehrten (wilayat al-faqih). Das sind fehlbare Menschen. Faktisch lebt die Gemeinde seit über tausend Jahren ohne den unfehlbaren Ausleger, den sie für unverzichtbar hält. Christus dagegen ist nicht abwesend: Er gibt den Geist, der „in alle Wahrheit leitet" (Joh 16,13), und ist in der Eucharistie leibhaft gegenwärtig.`,
              followUps: [
                {
                  id: 'jesus-auch-verborgen',
                  objection: `Euer Jesus ist doch genauso verborgen – im Himmel, und ihr wartet auf seine Wiederkunft. Das ist dasselbe wie beim Mahdi.`,
                  objectionBy: 'Schiitischer Gesprächspartner',
                  answer: `Zwei Unterschiede sind entscheidend. Erstens: Jesu Tod und Auferstehung geschahen öffentlich und sind durch Zeugen belegt, die dafür ihr Leben einsetzten (1 Kor 15,3–8); schon nach dem Tod des elften Imams 874 dagegen war die Existenz eines Sohnes unter den Schiiten selbst umstritten – die Quellen berichten von einer Zeit der Verwirrung und mehreren Gruppenbildungen. Zweitens: Christus hat seine Gemeinde nicht ohne Gegenwart gelassen – er ist im Geist, im Wort und in den Sakramenten da. Die Kirche „wartet" nicht auf seine Leitung, sie lebt aus ihr.`,
                  sources: [
                    { kind: 'gegner', author: 'al-Hasan ibn Musa an-Nawbakhti', work: 'Firaq asch-Schi\'a (Die Gruppen der Schia)', year: 'frühes 10. Jh.', quote: `Nawbakhti beschreibt die Spaltung der Anhänger nach dem Tod des elften Imams al-Hasan al-Askari in zahlreiche Gruppen mit unterschiedlichen Ansichten über einen Nachfolger.`, status: 'paraphrase' },
                    { kind: 'bibel', work: '1. Korinther', ref: '15,3–6', quote: `Daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift, und daß er gesehen worden ist von Kephas, darnach von den Zwölfen. Darnach ist er gesehen worden von mehr denn fünfhundert Brüdern auf einmal.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Welche Augenzeugen bezeugen die Geburt und die Verborgenheit des zwölften Imams – und welche die Auferstehung Jesu?`,
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'zwoelf-fuersten-genesis',
          objection: `Sogar eure Bibel kündigt die zwölf Imame an: Gott verheißt Ismael „zwölf Fürsten" (Gen 17,20). Und Bukhari überliefert, dass zwölf Führer aus Quraisch kommen werden.`,
          objectionBy: 'Schiitische Apologetik',
          answer: `Gen 17,20 wird in der Genesis selbst erfüllt: Gen 25,13–16 zählt die zwölf Söhne Ismaels auf und schließt: „Das sind die Söhne Ismaels … zwölf Fürsten nach ihren Stämmen." Und den Hadith von den zwölf Führern aus Quraisch (Sahih al-Bukhari 7222) deuten Sunniten auf ganz andere Herrscher. Ein Text, den jede Seite anders füllt, entscheidet die Frage nicht.`,
          sources: [
            { kind: 'bibel', work: '1. Mose', ref: '25,16', quote: `Dies sind die Kinder Ismaels mit ihren Namen in ihren Höfen und Zeltdörfern, zwölf Fürsten über ihre Leute.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '7222', quote: `Es wird zwölf Befehlshaber (amir) geben … alle aus Quraisch.`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:7222', note: 'Überliefert von Dschabir ibn Samura; Nummer nach sunnah.com-Zählung, vor Verwendung prüfen.' },
          ],
        },
      ],
    },
    {
      id: 'husain-erloesendes-leiden',
      objection: `Kerbela ist das größte Opfer der Geschichte: Husain gab sich und seine Familie hin, um den Islam vor der Tyrannei zu retten. Seine Fürsprache und die Tränen um ihn öffnen das Paradies.`,
      objectionBy: 'Schiitischer Prediger (Muharram-Predigt)',
      answer: `Ich verneige mich vor dem Mut Husains, und ich verstehe, warum Kerbela Millionen Menschen zu Tränen rührt. Die schiitische Frömmigkeit hat etwas zutiefst Wahres erkannt: dass das freiwillige Leiden eines Unschuldigen eine erlösende Kraft haben kann. Der islamische Gelehrte Mahmoud Ayoub hat dafür den Begriff „erlösendes Leiden im Islam" geprägt. Das Evangelium sagt: Diese Ahnung findet ihre Erfüllung in Christus, dem Sündlosen, der sein Leben freiwillig für alle gab (Joh 10,18).`,
      sources: [
        { kind: 'fachliteratur', author: 'Mahmoud M. Ayoub', work: 'Redemptive Suffering in Islam: A Study of the Devotional Aspects of Ashura in Twelver Shi\'ism', year: '1978', status: 'paraphrase', note: 'Ayoub (1935–2021) war ein muslimischer Religionswissenschaftler libanesischer Herkunft.' },
      ],
      followUps: [
        {
          id: 'husain-kein-suehneopfer',
          objection: `Wir sagen nicht, dass Husain Sünden gesühnt hat. Niemand trägt die Last eines anderen (6:164). Husain starb für die Gerechtigkeit, nicht als Opfer für Sünden.`,
          objectionBy: 'Schiitischer Gelehrter',
          answer: `Diese Unterscheidung ist wichtig, und ich danke dir dafür. Trotzdem bleibt die Frage: Warum sucht das Herz so sehr nach einem Fürsprecher, dessen Leiden für andere zählt? Sure 6:164 verbietet, dass jemand gegen seinen Willen fremde Schuld aufgeladen bekommt. Das Kreuz ist etwas anderes: Gott selbst nimmt im menschgewordenen Sohn freiwillig auf sich, was wir nicht tragen können – „Niemand nimmt es von mir, sondern ich lasse es von mir selber" (Joh 10,18).`,
          followUps: [
            {
              id: 'gott-braucht-keinen-mittler',
              objection: `Gott ist uns näher als die Halsschlagader (50:16). Wir brauchen keinen Mittler, der für uns stirbt.`,
              objectionBy: 'Sunnitischer wie schiitischer Einwand',
              answer: `Nähe ist nicht dasselbe wie Versöhnung: Ein Richter kann mir nah sein und mich trotzdem schuldig sprechen. Und auch der Islam kennt Fürsprache (schafa'a) am Jüngsten Tag – die Schia für die Imame, beide Richtungen für den Propheten. Die Frage ist also nicht, ob es Fürsprache gibt, sondern wer dazu befähigt ist. Das Neue Testament sagt: nur einer, der ganz Gott und ganz Mensch ist – „ein Mittler zwischen Gott und den Menschen, der Mensch Christus Jesus, der sich selbst gegeben hat für alle zur Erlösung" (1 Tim 2,5–6).`,
              sources: [
                { kind: 'bibel', work: '1. Timotheus', ref: '2,5–6', quote: `Denn es ist ein Gott und ein Mittler zwischen Gott und den Menschen, nämlich der Mensch Christus Jesus, der sich selbst gegeben hat für alle zur Erlösung.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'christen-auch-gespalten',
      objection: `Ihr macht euch über unsere Spaltung lustig? Ihr Christen seid doch in Tausende Konfessionen zersplittert!`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Ich mache mich nicht lustig – die Spaltung der Christen ist für uns eine Wunde (Joh 17,21). Mein Punkt ist ein anderer: Christliche Spaltungen betreffen die Auslegung eines Textes, den alle gemeinsam haben, und die großen Kirchen teilen das Glaubensbekenntnis von Nizäa. Die Trennung von Sunna und Schia betrifft die Leitung der Gemeinde vom ersten Tag an – eine Frage, die der Koran nicht beantwortet, obwohl er sich „Klarstellung für alles" nennt (16:89).`,
      sources: [
        { kind: 'koran', work: 'Sure 16 (an-Nahl)', ref: '16:89', quote: `Und Wir haben dir das Buch offenbart als Klarstellung für alles und als Rechtleitung, Barmherzigkeit und frohe Botschaft für die (Allah) Ergebenen.`, original: 'tibyānan li-kulli shayʾ', translation: 'nach Bubenheim/Elyas', status: 'verbatim', url: 'https://quran.com/16/89' },
      ],
      followUps: [
        {
          id: 'koran-keine-verfassung',
          objection: `Der Koran ist Rechtleitung, keine Staatsverfassung. Er nennt keinen Nachfolger, weil er Prinzipien gibt – etwa die Beratung (schura, 42:38). Das ist Weisheit, keine Lücke.`,
          objectionBy: 'Sunnitischer Gelehrter',
          answer: `Das ist die sunnitische Antwort – und sie ist ernst zu nehmen. Doch die Schia hält dagegen, dass Gott gerade die wichtigste Frage nicht ungeregelt lassen würde, und beruft sich auf denselben Koran. Wenn zwei große Traditionen aus demselben Text über 1.300 Jahre entgegengesetzte Antworten ableiten, dann zeigt das: Auch der Koran braucht Auslegung und Autorität. Ich verlange nicht, dass ihr euch einigt – nur, dass niemand der Bibel vorwirft, was beim Koran ebenso gilt.`,
          followUps: [
            {
              id: 'bibel-nennt-keinen-nachfolger',
              objection: `Eure Bibel nennt auch keinen Patriarchen oder Papst als Nachfolger. Eure Kirchen streiten genauso über Autorität.`,
              objectionBy: 'Muslimischer Apologet',
              answer: `Das Neue Testament nennt keinen einzelnen Nachfolger, aber es zeigt das Prinzip: Apostel setzen durch Handauflegung Älteste ein (Apg 14,23; Tit 1,5; 2 Tim 1,6), und Klemens von Rom bezeugt um 96, dass die Apostel ausdrücklich Nachfolge angeordnet haben (1 Klem 44). Über die Gestalt des Primats streiten die Kirchen, das gebe ich zu. Das Grundprinzip der apostolischen Nachfolge aber ist schon im 1. Jahrhundert bezeugt – und vor allem: Die Kirche hat einen Herrn, der lebt.`,
              sources: [
                { kind: 'bibel', work: 'Titus', ref: '1,5', quote: `Derhalben ließ ich dich in Kreta, daß du solltest vollends ausrichten, was ich gelassen habe, und besetzen die Städte hin und her mit Ältesten, wie ich dir befohlen habe.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn der Koran „Klarstellung für alles" ist (16:89) – warum hat er die Nachfolgefrage nicht geklärt?`,
    `Wenn die Mehrheit der Gefährten in der Imamatsfrage irren konnte – wie sicher ist dann ihre Sammlung des Korantextes?`,
    `Wie leitet ein verborgener Imam seine Gemeinde konkret, wenn ihn niemand befragen kann?`,
    `Was sagt dir die Trauer um Husain darüber, wonach das menschliche Herz sucht?`,
    `Wer ist befähigt, vor Gott für andere einzutreten – und warum?`,
  ],
  avoid: [
    `Nicht Partei ergreifen („Die Sunniten haben recht" / „Die Schiiten haben recht"). Du verlierst sofort die Hälfte deiner Gesprächspartner und verfehlst dein eigentliches Anliegen.`,
    `Nicht behaupten, „die Schiiten glauben an einen verfälschten Koran". Das ist für die heutige Hauptlinie falsch und wird als Hetze empfunden.`,
    `Keine Spaltungs-Polemik („Der Islam ist hoffnungslos zerstritten"). Die Christenheit ist selbst gespalten – das Argument fällt auf dich zurück.`,
    `Keine politischen Urteile über Iran, Saudi-Arabien oder konfessionelle Konflikte als „Beweis" gegen eine Glaubensrichtung.`,
  ],
  concessions: [
    `Der Ghadir-Hadith ist auch in sunnitischen Sammlungen gut bezeugt; die Deutung von „mawla" ist der eigentliche Streitpunkt.`,
    `Auch Christen streiten über Gestalt und Reichweite kirchlicher Autorität (z. B. Papstprimat).`,
    `Die Mehrheit der heutigen schiitischen Gelehrten lehnt jede Veränderung des Korans ab; frühe Berichte gelten ihnen als schwach oder umzudeuten.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Muhammad Husayn Tabataba\'i', work: 'Shi\'ite Islam (übers. S. H. Nasr)', year: '1975', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Moojan Momen', work: 'An Introduction to Shi\'i Islam', year: '1985', status: 'paraphrase', note: 'Standard-Einführung aus religionswissenschaftlicher Sicht.' },
    { kind: 'fachliteratur', author: 'Mahmoud M. Ayoub', work: 'Redemptive Suffering in Islam', year: '1978', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gabriel Said Reynolds', work: 'The Emergence of Islam', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Schia', 'Imamat', 'Ghadir Khumm', 'Kerbela', 'Mahdi', 'Koranüberlieferung', 'Apostolische Sukzession'],
  related: [
    'islam-koran/koran-perfekt-bewahrt',
    'islam-koran/koran-klar-vollstaendig',
    'islam-kreuzigung/niemand-traegt-last',
    'islam-eschatologie/mahdi-dajjal',
    'sola-scriptura/jeder-legt-selbst-aus',
  ],
};

export default claim;
