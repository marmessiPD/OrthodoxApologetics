import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'muendliche-tora',
  title: `„Ohne die mündliche Tora (Talmud) kann man die Schrift nicht verstehen."`,
  proponents: [
    { name: 'Rabbi Michael Skobac', role: 'Jews for Judaism (Toronto)', work: 'Vorträge „Why the Oral Torah?"' },
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical! (2014); Vorträge zur mündlichen Tora' },
    { name: 'Rabbi Aryeh Kaplan', role: 'Orthodoxer Rabbiner und Autor, 1934–1983', work: 'Handbook of Jewish Thought (1979)' },
    { name: 'Moses Maimonides (Rambam)', role: 'Rechtsgelehrter und Philosoph, 1138–1204', work: 'Einleitung zur Mischne Tora (Kette der Überlieferung von Mose bis Rav Aschi)' },
  ],
  steelman: `Die schriftliche Tora setzt auf Schritt und Tritt eine Erklärung voraus, die nicht in ihr steht. Dtn 12,21 befiehlt zu schlachten, „wie ich dir geboten habe" – aber nirgends steht, wie. Am Sabbat ist „Arbeit" verboten (Ex 20,10), doch was Arbeit ist, sagt der Text nicht. Was sind die „Totafot" zwischen den Augen (Dtn 6,8)? Wie wird der Kalender bestimmt (Ex 12,2)? Wie sieht ein Scheidebrief aus (Dtn 24,1)? Bedeutet „Auge um Auge" (Ex 21,24) wirklich Verstümmelung – oder, wie die Überlieferung lehrt, Schadenersatz? Darum gab Gott Mose am Sinai mit der schriftlichen auch die mündliche Tora: „Mose empfing die Tora vom Sinai und übergab sie Josua, Josua den Ältesten, die Ältesten den Propheten, die Propheten den Männern der Großen Versammlung" (Avot 1,1). Dtn 17,8–11 befiehlt, den Richtern an dem Ort, den Gott erwählt, zu gehorchen, „weder nach rechts noch nach links". Wer die Überlieferung verwirft, endet wie die Karäer in Zersplitterung. Und gerade Kopten und Orthodoxe, die selbst eine „Heilige Überlieferung" haben, können nicht konsequent die jüdische Überlieferung ablehnen. Ohne sie liest man die Schrift falsch – zum Beispiel messianisch.`,
  biblical: {
    summary: `Die Bibel setzt tatsächlich gelebte Praxis und Auslegung voraus (vgl. Neh 8,8: die Leviten „gaben den Sinn an"); das bestreitet niemand. Zugleich behandelt die Schrift ihre zentrale Botschaft als verständlich: Die Tora soll vor dem ganzen Volk – Männern, Frauen, Kindern und Fremden – vorgelesen werden, „damit sie hören und lernen" (Dtn 31,10–13), und „die Tora des HERRN ist vollkommen … sie macht den Einfältigen weise" (Ps 19,8). Jesus erkannte das Lehramt der Schriftgelehrten an, soweit sie Mose lehrten (Mt 23,2–3), maß aber Überlieferungen am Wort Gottes und verwarf solche, die Gottes Gebot aufheben (Mk 7,8–13).`,
    detail: `**Was die Schrift über Überlieferung zeigt:**
- 2 Kön 22,8–13: Unter König Josia wird das Buch der Tora im Tempel „gefunden", und der König zerreißt erschrocken seine Kleider – das Volk hatte selbst die schriftliche Tora zeitweise aus dem Blick verloren. Eine lückenlos gelebte Kette ist für diese Zeit schwer vorstellbar.
- Neh 8,1–8: Esra liest die Tora öffentlich vor, die Leviten legen sie aus – Auslegung im Dienst des Textes.
- Mk 7,8–13: Jesus kritisiert eine Gelübde-Praxis („Korban"), mit der man die Pflicht gegenüber den Eltern umgehen konnte: „So hebt ihr Gottes Wort auf durch eure Überlieferung."
- Mt 7,28–29: Die Menge staunt, „denn er lehrte sie wie einer, der Vollmacht hat, und nicht wie ihre Schriftgelehrten".
- Dtn 18,15–19: Gott verheißt einen Propheten wie Mose – „auf ihn sollt ihr hören".

**Vielfalt im 1. Jahrhundert:** Die Pharisäer waren eine Gruppe unter mehreren. Josephus berichtet, dass sie dem Volk Satzungen aus der Überlieferung der Väter weitergaben, die nicht im Gesetz Moses geschrieben stehen, und dass die Sadduzäer diese ablehnten. Die Gemeinschaft von Qumran hatte ihre eigene, oft strengere Halacha. Erst nach 70 n. Chr. wurde die pharisäisch-rabbinische Linie bestimmend; im 8. Jahrhundert lehnten die Karäer den Talmud erneut ab.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '7,8.13', quote: `Ihr verlasset Gottes Gebot und haltet der Menschen Aufsätze … und hebet auf Gottes Wort durch eure Aufsätze, die ihr aufgesetzt habt.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis; vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Matthäus', ref: '23,2–3', quote: `Auf dem Stuhl des Mose haben sich die Schriftgelehrten und die Pharisäer gesetzt. Alles nun, was sie euch sagen, das tut und haltet; aber nach ihren Werken tut nicht.`, translation: 'eigene Übersetzung aus dem Griechischen', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '31,11–12', quote: `Du sollst diese Tora vor ganz Israel vor ihren Ohren vorlesen. Versammle das Volk, Männer, Frauen und Kinder und deinen Fremden, der in deinen Toren ist, damit sie hören und lernen.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'bibel', work: '2. Könige', ref: '22,8.11', quote: `Und der Hohepriester Hilkija sprach zu dem Schreiber Schafan: Ich habe das Buch der Tora im Haus des HERRN gefunden … Als der König die Worte des Buches der Tora hörte, zerriss er seine Kleider.`, translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'juedisch', author: 'Flavius Josephus', work: 'Jüdische Altertümer', ref: 'XIII,297–298', year: 'um 94', quote: `Die Pharisäer haben dem Volk aus der Überlieferung der Väter manche Satzungen weitergegeben, die nicht im Gesetz Moses geschrieben stehen; deshalb verwirft sie die Partei der Sadduzäer, die sagt, man müsse nur das Geschriebene für verbindlich halten.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ist keine Kirche des „sola scriptura": Sie liest die Heilige Schrift in der lebendigen Überlieferung der Kirche, mit den Vätern, der Liturgie und den Konzilien (2 Thess 2,15). Deshalb lehnt sie die rabbinische Überlieferung nicht mit dem Argument ab, Überlieferung sei als solche wertlos. Die Frage ist vielmehr: **Welche** Überlieferung geht auf den von Gott bevollmächtigten Ausleger zurück? Für die Kirche ist das Christus, der „Prophet wie Mose" (Dtn 18,15; Apg 3,22), dessen Lehre die Apostel weitergaben. Die apostolische Überlieferung fügt der Schrift keine neue Offenbarung hinzu, sondern bezeugt Christus im Einklang mit ihr.`,
    detail: `Basilius der Große unterscheidet in „Über den Heiligen Geist" (Kap. 27) zwischen öffentlich verkündeter Lehre und ungeschriebenen apostolischen Bräuchen (Kreuzzeichen, Gebet nach Osten, dreimaliges Untertauchen bei der Taufe) und betont, dass beide denselben Glauben ausdrücken. Jaroslav Pelikan, der große Dogmenhistoriker, prägte den Satz, Tradition sei der lebendige Glaube der Toten, Traditionalismus der tote Glaube der Lebenden. Für ein Gespräch mit Juden bedeutet das: Kopten können die Ehrfurcht vor der Überlieferung der Väter verstehen und achten – und gerade deshalb fragen, wer die Vollmacht hat, das Wort Gottes endgültig auszulegen.`,
    sources: [
      { kind: 'bibel', work: '2. Thessalonicher', ref: '2,15', quote: `So stehet nun, liebe Brüder, und haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Epistel.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', ref: '27,66', year: '375', status: 'paraphrase', quote: `Von den in der Kirche bewahrten Lehren und Verkündigungen haben wir die einen aus der schriftlichen Unterweisung, die anderen aus der apostolischen Überlieferung im Geheimnis empfangen; beide haben für die Frömmigkeit dieselbe Kraft.` },
      { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Vindication of Tradition', year: '1984', original: 'Tradition is the living faith of the dead; traditionalism is the dead faith of the living.', quote: `Tradition ist der lebendige Glaube der Toten; Traditionalismus ist der tote Glaube der Lebenden.`, translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Das rabbinische Judentum lehrt, dass Mose am Sinai neben der schriftlichen eine mündliche Tora empfing, die über eine Kette von Lehrern weitergegeben (Avot 1,1) und später in Mischna (um 200 n. Chr.) und Talmud (Jerusalemer Talmud um 400, Babylonischer Talmud um 500–600) schriftlich festgehalten wurde. Zugleich zeigen die rabbinischen Texte selbst mit großer Offenheit, dass diese Überlieferung auch Auslegung, Streit und Entwicklung umfasst: Gesetze, die „wie Berge an einem Haar hängen" (Mischna Chagiga 1,8), Mose, der Akibas Lehrhaus nicht versteht (bMenachot 29b), vergessene und durch Schlussfolgerung wiederhergestellte Halachot (bTemura 16a), und Mehrheitsentscheidungen gegen eine Himmelsstimme (bBava Mezia 59b).`,
    sources: [
      { kind: 'juedisch', work: 'Mischna, Avot', ref: '1,1', quote: `Mose empfing die Tora vom Sinai und übergab sie Josua, Josua den Ältesten, die Ältesten den Propheten, und die Propheten übergaben sie den Männern der Großen Versammlung.`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://www.sefaria.org/Pirkei_Avot.1.1' },
      { kind: 'juedisch', work: 'Mischna, Chagiga', ref: '1,8', quote: `Die Gesetze über den Sabbat, die Festopfer und die Veruntreuung von Heiligem sind wie Berge, die an einem Haar hängen: wenig Schrift und viele Gesetze.`, translation: 'eigene Übersetzung', status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Chagigah.1.8' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Menachot', ref: '29b', quote: `Als Mose in das Lehrhaus Rabbi Akibas versetzt wurde, setzte er sich in die achte Reihe und verstand nicht, was sie sagten, und seine Kraft schwand. Als sie zu einer Sache kamen und die Schüler fragten: „Rabbi, woher hast du das?", antwortete er: „Es ist eine Halacha an Mose vom Sinai." Da wurde Mose getröstet.`, status: 'paraphrase', url: 'https://www.sefaria.org/Menachot.29b' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Temura', ref: '15b–16a', quote: `Dreitausend Halachot wurden in den Trauertagen um Mose vergessen … Otniel ben Kenas stellte sie durch seine Schlussfolgerungen wieder her.`, status: 'paraphrase', url: 'https://www.sefaria.org/Temurah.16a' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Eruvin', ref: '13b', quote: `Drei Jahre stritten die Schule Schammais und die Schule Hillels … Da ging eine Himmelsstimme aus und sprach: Diese wie jene sind Worte des lebendigen Gottes, aber die Halacha ist wie die Schule Hillels.`, status: 'paraphrase', url: 'https://www.sefaria.org/Eruvin.13b' },
    ],
  },
  quickAnswer: `Ich stimme dir zu, dass man die Schrift in einer lebendigen Überlieferung liest – als koptischer Christ glaube ich selbst an die Heilige Überlieferung. Die Frage ist nicht „Schrift oder Überlieferung?", sondern: **Wer** ist der bevollmächtigte Ausleger? Der Talmud selbst zeigt offen, dass seine Überlieferung auch Auslegung, Streit und Entwicklung ist – Mose verstand Akibas Lehrhaus nicht (bMenachot 29b). Mose selbst verhieß einen Propheten wie ihn, „auf den sollt ihr hören" (Dtn 18,15). Wir glauben: Das ist der Messias Jesus. Und für die Messiasfrage haben wir eine gemeinsame Grundlage – den Tanach, aus dem auch die Rabbinen argumentieren.`,
  keyPoints: [
    `**Zugeständnis:** Jede Schrift wird in einer Gemeinschaft gelesen; Kopten glauben selbst an Heilige Überlieferung. Der Streit geht um den bevollmächtigten Ausleger.`,
    `**Die rabbinische Überlieferung bezeugt ihre eigene Entwicklung:** „Berge an einem Haar" (Chagiga 1,8), Mose bei Akiba (Menachot 29b), vergessene Halachot (Temura 16a), „diese wie jene" (Eruvin 13b).`,
    `**Im 1. Jahrhundert gab es mehrere jüdische Überlieferungen:** Pharisäer, Sadduzäer, Essener/Qumran; die rabbinische Linie wurde erst nach 70 n. Chr. bestimmend.`,
    `**Jesus' Maßstab:** Er achtet das Lehramt, soweit es Mose lehrt (Mt 23,2–3), aber stellt Gottes Wort über menschliche Satzungen (Mk 7,8–13) und lehrt „mit Vollmacht" (Mt 7,29).`,
    `**Die Schrift ist in ihrer Mitte verständlich:** Sie soll Männern, Frauen, Kindern und Fremden vorgelesen werden (Dtn 31,10–13; Ps 19,8).`,
    `**Gemeinsamer Boden:** In der Messiasfrage argumentieren Juden und Christen aus demselben Tanach.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als ehemaliger Pharisäer',
      text: `Paulus kannte die Überlieferung der Väter von innen: Er war „über die Maßen ein Eiferer für die väterlichen Überlieferungen" (Gal 1,14) und Schüler Gamaliels (Apg 22,3). Er verachtet sein Erbe nicht, sondern sagt, dass die Juden den Vorzug haben, dass ihnen „die Worte Gottes anvertraut sind" (Röm 3,2). Zugleich hält er fest, dass er sein Evangelium nicht von Menschen empfing, sondern durch Offenbarung Jesu Christi (Gal 1,12) – und er gibt selbst Überlieferung weiter, die er empfangen hat (1 Kor 11,23; 15,3). Überlieferung ist für Paulus gut, wenn sie Christus bezeugt.`,
      sources: [
        { kind: 'bibel', work: 'Galater', ref: '1,12–14', status: 'paraphrase' },
        { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'markus',
      role: 'als Evangelist von Alexandrien',
      text: `Markus, nach koptischer Überlieferung Gründer der Kirche von Alexandrien, erzählt ausführlich, wie Jesus mit Pharisäern und Schriftgelehrten aus Jerusalem über die „Überlieferung der Ältesten" streitet (Mk 7,1–23). Er erklärt seinen nichtjüdischen Lesern die Bräuche sachlich (7,3–4) und zeigt, dass Jesus nicht die Tora, sondern eine Auslegung kritisiert, die Gottes Gebot – „Ehre Vater und Mutter" – aushöhlt. Für Markus ist Jesus der Ausleger, der den ursprünglichen Willen Gottes wieder sichtbar macht.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '7,1–23', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Zeuge des orthodoxen Traditionsverständnisses',
      text: `Basilius verteidigt im 4. Jahrhundert ungeschriebene apostolische Bräuche – das dreimalige Untertauchen bei der Taufe, das Gebet nach Osten, das Kreuzzeichen – und zeigt damit, dass die Kirche nie „Schrift allein" lebte. Zugleich ist für ihn die Überlieferung kein zweiter, unabhängiger Gesetzeskodex, sondern Ausdruck desselben Glaubens, der in der Schrift bezeugt ist. Für das Gespräch mit Rabbinern ist das wichtig: Der Orthodoxe kann die jüdische Wertschätzung der Überlieferung verstehen und muss sie nicht verspotten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', ref: '27', year: '375', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Kenner der rabbinischen Literatur',
      text: `Brown, der mit orthodoxen Rabbinern Talmud gelesen hat, würdigt die Tiefe der rabbinischen Tradition, bestreitet aber, dass sie als ganze am Sinai gegeben wurde. Er verweist auf die rabbinischen Texte selbst, die Entwicklung, Streit und Mehrheitsentscheidungen offen zeigen. Seine Kernfrage: Wenn Gott einen Propheten wie Mose verheißen hat, auf den Israel hören soll – warum sollte die letzte Auslegungsvollmacht bei einer späteren Gelehrtentradition liegen statt beim Messias?`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 5: Traditional Jewish Objections', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'schlachten-dtn-12',
      objection: `Dtn 12,21: „Schlachte, wie ich dir geboten habe." Aber nirgends in der schriftlichen Tora steht, wie man schlachtet. Das beweist, dass Mose eine mündliche Tora erhielt.`,
      objectionBy: 'Michael Skobac',
      answer: `Es zeigt, dass Israel Praktiken und Kenntnisse hatte, die über den geschriebenen Text hinausgingen – das bestreite ich nicht; jeder Gesetzestext setzt Praxis voraus. Aber von „es gab mündliche Praxis" bis „der gesamte Inhalt von Mischna und Talmud wurde Mose am Sinai gegeben und ist unfehlbar verbindlich" ist es ein sehr großer Schritt.`,
      followUps: [
        {
          id: 'avot-kette',
          objection: `Avot 1,1 dokumentiert die Kette: Mose empfing die Tora vom Sinai und übergab sie Josua, Josua den Ältesten, die Ältesten den Propheten, die Propheten den Männern der Großen Versammlung.`,
          objectionBy: 'Tovia Singer',
          answer: `Avot wurde um 200 n. Chr. zusammengestellt – es ist ein Anspruch auf Kontinuität, kein Protokoll vom Sinai. Und der Talmud selbst räumt Lücken ein: In den Trauertagen um Mose seien dreitausend Halachot vergessen und teils durch Schlussfolgerungen wiederhergestellt worden (bTemura 16a). Unter Josia wurde sogar das geschriebene Torabuch „gefunden", als sei es verloren gewesen (2 Kön 22,8–13).`,
          followUps: [
            {
              id: 'menachot-29b',
              objection: `Menachot 29b zeigt gerade, dass Akibas Lehre „Halacha an Mose vom Sinai" ist – Mose wird am Ende getröstet. Die Überlieferung ist ungebrochen.`,
              objectionBy: 'Michael Skobac',
              answer: `Ja, die Geschichte endet tröstlich. Ihre Schönheit liegt gerade darin, dass sie Kontinuität bekennt und zugleich offen zugibt, dass die spätere Auslegung weit über das hinausging, was Mose selbst wiedererkannte. Genau das ist mein Punkt: Die rabbinische Überlieferung ist Auslegung, die sich auf Sinai beruft. Auch die Kirche kennt Entfaltung – aber sie führt ihre Auslegung auf die Apostel zurück, die sie vom Messias empfingen, durch den Gott „zuletzt geredet hat" (Hebr 1,1–2).`,
            },
          ],
        },
      ],
    },
    {
      id: 'koptische-tradition',
      objection: `Ihr Kopten habt doch selbst eine „Heilige Überlieferung" – Väter, Konzilien, ungeschriebene Bräuche. Mit welchem Recht lehnt ihr unsere ab?`,
      objectionBy: 'Tovia Singer',
      answer: `Eine sehr gute Frage – und ich argumentiere nicht wie ein Protestant mit „Schrift allein". Wir sind uns einig, dass die Schrift in einer lebendigen Gemeinschaft gelesen wird. Die Frage ist: Welche Überlieferung geht auf den bevollmächtigten Ausleger zurück? Für uns ist das Jesus, der „mit Vollmacht und nicht wie die Schriftgelehrten" lehrte (Mt 7,29) und der Prophet wie Mose ist (Dtn 18,15; Apg 3,22). Unsere Überlieferung fügt der Schrift keine neue Offenbarung hinzu, sondern bezeugt Christus im Einklang mit ihr.`,
      followUps: [
        {
          id: 'zirkelschluss',
          objection: `Das ist ein Zirkelschluss: Ihr glaubt eurer Überlieferung, weil sie von Jesus kommt, und an Jesus, weil eure Überlieferung es sagt.`,
          objectionBy: 'Stuart Federow',
          answer: `Nein: Der Anspruch Jesu stützt sich auf öffentlich prüfbare Gründe – auf den Tanach, den wir teilen (Jes 53, Dan 9 …), und auf die historischen Zeugnisse für seine Auferstehung, die seine jüdischen Jünger schon wenige Jahre danach verkündeten (1 Kor 15,3–8, um 55 n. Chr. geschrieben). Die Überlieferung folgt daraus, nicht umgekehrt. Ebenso müsste der Anspruch der rabbinischen Überlieferung historisch begründet werden – nicht durch Zitate aus dieser Überlieferung selbst.`,
          followUps: [
            {
              id: 'sinai-massenoffenbarung',
              objection: `Unsere Überlieferung ruht auf der Offenbarung am Sinai vor dem ganzen Volk – Millionen Zeugen. Das ist die bestbezeugte Offenbarung der Geschichte.`,
              objectionBy: 'Michael Skobac',
              answer: `Ich glaube auch, dass Gott am Sinai gesprochen hat! Aber der Sinai beglaubigt Mose und die Worte, die Mose aufschrieb (Ex 24,4) – nicht die Einzelinhalte einer Mischna, die rund 1400 Jahre später redigiert wurde. Und derselbe Mose hat am Sinai-Ereignis anknüpfend einen Propheten wie ihn verheißen: „Auf ihn sollt ihr hören" (Dtn 18,15–19). Der Sinai weist also über sich hinaus.`,
              questionsBack: [
                `Wer ist der Prophet wie Mose, auf den Israel nach Dtn 18,15 hören soll?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sabbat-tefillin-auge',
      objection: `Ohne mündliche Tora weißt du nicht, was „Arbeit" am Sabbat ist, was Tefillin sind oder dass „Auge um Auge" Geldersatz bedeutet. Du kannst die Bibel schlicht nicht verstehen.`,
      objectionBy: 'Michael Skobac',
      answer: `Für die Einzelheiten der Halacha braucht es Auslegung, ja. Aber die Mitte der Schrift – Gott, Schöpfung, Bund, Sünde, Sühne, verheißener Messias – ist so klar, dass die Tora selbst befiehlt, sie dem ganzen Volk vorzulesen, auch Kindern und Fremden (Dtn 31,10–13). „Die Tora des HERRN ist vollkommen … sie macht den Einfältigen weise" (Ps 19,8). Und die Karäer, die den Talmud ablehnten, lasen die Schrift dennoch als Juden.`,
      followUps: [
        {
          id: 'karaeer-zersplittert',
          objection: `Die Karäer zerfielen in unzählige Richtungen und konnten sich auf nichts einigen. Das beweist, dass man die Überlieferung braucht.`,
          objectionBy: 'Tovia Singer',
          answer: `Meinungsverschiedenheiten gibt es auch im rabbinischen Judentum: Schammai und Hillel, unzählige Streitfragen im Talmud – „diese wie jene sind Worte des lebendigen Gottes" (bEruvin 13b) –, und heute Orthodoxe, Konservative, Reformierte, Chassidim und Litwaken. Streit in Einzelfragen widerlegt die Klarheit der Schrift in der Mitte nicht. Und gerade in der Messiasfrage zeigt der Talmud selbst eine große Bandbreite (bSanhedrin 97–99).`,
          questionsBack: [
            `Wenn auch die mündliche Tora Streit und verschiedene Schulen kennt – warum soll Streit gegen die Verständlichkeit der Schrift sprechen?`,
          ],
        },
      ],
    },
    {
      id: 'stuhl-des-mose',
      objection: `Jesus selbst sagte: „Auf dem Stuhl des Mose sitzen die Schriftgelehrten und Pharisäer; alles, was sie euch sagen, das tut" (Mt 23,2–3). Er hat die mündliche Tora anerkannt.`,
      objectionBy: 'Shmuley Boteach',
      answer: `Ein ehrlicher Punkt: Jesus achtete das Lehramt der Schriftgelehrten, soweit sie Mose lehrten. Aber im selben Kapitel kritisiert er sie scharf, und in Mk 7,8–13 verwirft er Überlieferungen, die Gottes Gebot aufheben – etwa ein Korban-Gelübde, mit dem man die Pflicht gegenüber den Eltern umging. Sein Maßstab: Gottes Wort steht über menschlichen Satzungen. Und als Messias beansprucht er die letzte Vollmacht: „Ihr habt gehört … ich aber sage euch" (Mt 5).`,
      followUps: [
        {
          id: 'korban-karikatur',
          objection: `Das Korban-Beispiel ist eine Karikatur. Die Mischna erlaubt gerade, solche Gelübde wegen der Ehre der Eltern aufzulösen (Nedarim 9,1).`,
          objectionBy: 'Michael Skobac',
          answer: `Ein interessanter und fairer Hinweis. Nach Mischna Nedarim 9,1 erlaubte Rabbi Elieser, ein Gelübde wegen der Ehre der Eltern aufzulösen; die Weisen widersprachen zunächst und stimmten ihm später zu. Das zeigt: Die Praxis, die Jesus kritisierte, gab es, und die rabbinische Entwicklung bewegte sich später in die Richtung, die Jesus forderte. Jesus stand also mitten in einer innerjüdischen Debatte – als jüdischer Lehrer, nicht als Außenseiter.`,
          sources: [
            { kind: 'juedisch', work: 'Mischna, Nedarim', ref: '9,1', quote: `Rabbi Elieser sagt: Man eröffnet einem Menschen (die Auflösung seines Gelübdes) wegen der Ehre seines Vaters und seiner Mutter; die Weisen verbieten es … Die Weisen stimmten Rabbi Elieser in einer Sache zwischen einem Menschen und seinem Vater und seiner Mutter zu.`, status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Nedarim.9.1' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass der gesamte Inhalt der Mischna vom Sinai stammt – und nicht Auslegung späterer Generationen ist, wie Menachot 29b andeutet?`,
    `Warum befiehlt die Tora, sie Kindern und Fremden vorzulesen, wenn man sie ohne Talmud nicht verstehen kann?`,
    `Welche jüdische Überlieferung des 1. Jahrhunderts war die „richtige" – die der Pharisäer, der Sadduzäer oder die von Qumran?`,
    `Wer ist der Prophet wie Mose, auf den Israel hören soll (Dtn 18,15)?`,
  ],
  avoid: [
    `Nicht mit „sola scriptura" gegen die mündliche Tora argumentieren – das widerspricht der koptisch-orthodoxen Lehre von der Heiligen Überlieferung und macht dich angreifbar.`,
    `Nicht den Talmud lächerlich machen oder mit aus dem Zusammenhang gerissenen Zitaten aus antijüdischen Pamphleten argumentieren. Das ist unredlich und verletzend.`,
    `Nicht behaupten, Jesus habe jede pharisäische Überlieferung verworfen – Mt 23,2–3 sagt anderes.`,
  ],
  concessions: [
    `Die schriftliche Tora setzt Praxis und Auslegung voraus, die nicht im Text stehen (Dtn 12,21; Ex 20,10).`,
    `Auch die Kirche lebt aus Überlieferung; sie kann die jüdische Wertschätzung der Überlieferung nicht als solche verwerfen.`,
    `Jesus erkannte das Lehramt der Schriftgelehrten an, soweit sie Mose lehrten (Mt 23,2–3).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 5: Traditional Jewish Objections', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Vindication of Tradition', year: '1984', status: 'paraphrase' },
    { kind: 'gegner', author: 'Aryeh Kaplan', work: 'Handbook of Jewish Thought', year: '1979', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Mündliche Tora', 'Talmud', 'Tradition', 'Pharisäer', 'Sadduzäer', 'Karäer'],
  related: [
    'judentum-messias/tora-ewig-gueltig',
    'sola-scriptura',
    'judentum-messias/messias-kriterien-nicht-erfuellt',
  ],
};

export default claim;
