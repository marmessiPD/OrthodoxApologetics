import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'tora-ewig-gueltig',
  title: `„Die Tora ist ewig gültig – Jesus und Paulus haben sie abgeschafft."`,
  proponents: [
    { name: 'Rabbi Tovia Singer', role: 'Gründer von Outreach Judaism', work: 'Let\'s Get Biblical!, Kapitel zu Gesetz und neuem Bund (2014)' },
    { name: 'Rabbi Shmuley Boteach', role: 'Rabbiner und Publizist', work: 'Kosher Jesus (2012) – Jesus als toratreuer Rabbi, Paulus als Begründer des Bruchs' },
    { name: 'Rabbi Michael Skobac', role: 'Jews for Judaism (Toronto)', work: 'Vorträge zu „Jesus, Paul and the Law"' },
    { name: 'Moses Maimonides (Rambam)', role: 'Rechtsgelehrter und Philosoph, 1138–1204', work: '13 Glaubensgrundsätze, Nr. 9; Mischne Tora, Hilchot Jesode ha-Tora 9,1' },
  ],
  steelman: `Die Tora nennt ihre Gebote immer wieder „ewige Satzung" (chukkat olam): den Sabbat als „ewigen Bund" (Ex 31,16–17), das Pessach (Ex 12,14), den Versöhnungstag (Lev 16,29–34). Sie verbietet, etwas hinzuzufügen oder wegzunehmen (Dtn 4,2; 13,1), und warnt vor jedem Propheten, der mit Zeichen und Wundern vom Weg der Gebote abbringt (Dtn 13,2–6). Gott ändert sich nicht (Mal 3,6). Darum lehrt Maimonides als Glaubensgrundsatz, dass diese Tora nie ausgetauscht wird. Jesus selbst sagte noch: „Kein Jota und kein Häkchen wird vom Gesetz vergehen" (Mt 5,18). Doch schon Markus behauptet, er habe „alle Speisen für rein erklärt" (Mk 7,19), und Paulus erklärt: „Christus ist das Ende des Gesetzes" (Röm 10,4), „ihr seid nicht unter dem Gesetz" (Röm 6,14), Beschneidung nützt nichts (Gal 5,2), niemand solle wegen Sabbaten richten (Kol 2,16). Der Hebräerbrief nennt den Sinaibund „veraltet" (Hebr 8,13). Selbst Jeremias „neuer Bund" schreibt Gottes **Tora** ins Herz (Jer 31,33) – dieselbe Tora, nicht ihre Abschaffung. Ein Messias, dessen Bewegung die Tora beiseiteschiebt, ist nach Dtn 13 widerlegt.`,
  biblical: {
    summary: `Jesus sagt ausdrücklich: „Ich bin nicht gekommen aufzulösen, sondern zu erfüllen" (Mt 5,17) – und er verschärft die Gebote, statt sie zu lockern (Mt 5,21–48). Die Hebräische Bibel kündigt selbst einen **neuen Bund** an, „nicht wie der Bund, den ich mit ihren Vätern schloss … den sie gebrochen haben" (Jer 31,31–32) – also eine neue Gestalt des Bundesverhältnisses, in der Gottes Weisung ins Herz geschrieben wird. Das hebräische **olam** bedeutet „unbegrenzt lange, auf unabsehbare Zeit" und wird durch den Zusammenhang begrenzt: Ein Sklave dient seinem Herrn „le-olam" (Ex 21,6) – nach rabbinischer Auslegung bis zum Jobeljahr. Paulus sagt: „Heben wir das Gesetz durch den Glauben auf? Das sei ferne! Sondern wir richten das Gesetz auf" (Röm 3,31).`,
    detail: `**Die Bedeutungsbreite von „olam":**
- Ex 21,6: Der Sklave dient „le-olam" – Mechilta, bKidduschin 15a und Raschi: „bis zum Jobeljahr".
- 1 Sam 1,22: Samuel soll „ad olam" im Heiligtum bleiben – sein Leben lang.
- Jona 2,7: Die Riegel der Erde schlossen sich hinter Jona „le-olam" – für drei Tage.
- Ex 40,15: Das aaronitische Priestertum ist ein „ewiges Priestertum" – doch seit 70 n. Chr. gibt es keinen Priesterdienst, und Ps 110,4 kündigt einen anderen Priester „für ewig nach der Weise Melchisedeks" an (Hebr 7,11–12).

**Was seit 70 n. Chr. auch im Judentum nicht mehr gehalten werden kann:** Opfer, das Ritual des Versöhnungstags nach Lev 16, Priesterreinheit, Erstlingsgaben im Tempel, Wallfahrten mit Opfer – ein großer Teil der 613 Gebote. Das rabbinische Judentum hat Ersatzformen entwickelt: Gebete entsprechend den täglichen Opfern (bBerachot 26b), das Studium der Opfergesetze „als ob man opferte" (bMenachot 110a), Werke der Barmherzigkeit (Avot de-Rabbi Natan 4, nach Hos 6,6).

**Paulus und die Tora:** Paulus nennt das Gesetz „heilig, und das Gebot heilig, gerecht und gut" (Röm 7,12); „telos" in Röm 10,4 heißt „Ziel" und „Ende" zugleich. Er lebte selbst als toratreuer Jude (Apg 21,20–26; 1 Kor 9,20) und ließ Timotheus beschneiden (Apg 16,3). Was er bekämpfte: die Forderung, Nichtjuden müssten Juden werden, um zum Volk Gottes zu gehören (Gal 2; Apg 15).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '5,17', quote: `Ihr sollt nicht wähnen, daß ich gekommen bin, das Gesetz oder die Propheten aufzulösen; ich bin nicht gekommen, aufzulösen, sondern zu erfüllen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '31,31–33', quote: `Siehe, es kommt die Zeit, spricht der HERR, da will ich mit dem Hause Israel und mit dem Hause Juda einen neuen Bund machen; nicht wie der Bund gewesen ist, den ich mit ihren Vätern machte … welchen Bund sie nicht gehalten haben … sondern das soll der Bund sein: … Ich will mein Gesetz in ihr Herz geben und in ihren Sinn schreiben.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase', note: 'Wortlaut nach Luther 1912 aus dem Gedächtnis; vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Exodus', ref: '21,6', quote: `… und er soll ihm dienen für immer (le-olam).`, original: 'וַעֲבָדוֹ לְעֹלָם', translation: 'eigene Übersetzung aus dem Hebräischen', status: 'verbatim' },
      { kind: 'juedisch', author: 'Raschi', work: 'Kommentar zu Exodus', ref: '21,6', quote: `„Für immer" – bis zum Jobeljahr.`, original: 'לעולם – עד היובל', translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Raschi folgt der Mechilta und bKidduschin 15a.' },
      { kind: 'bibel', work: 'Römer', ref: '3,31', quote: `Wie? heben wir denn das Gesetz auf durch den Glauben? Das sei ferne! sondern wir richten das Gesetz auf.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '7,11–12', quote: `Wäre nun die Vollendung durch das levitische Priestertum gekommen … was war es nötig, einen anderen Priester nach der Weise Melchisedeks aufzustellen? … Denn wenn das Priestertum geändert wird, so geschieht notwendig auch eine Änderung des Gesetzes.`, translation: 'eigene Übersetzung aus dem Griechischen (gekürzt)', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ehrt das Gesetz Moses als heiliges Wort Gottes und liest das Alte Testament in jeder Liturgie. Sie unterscheidet mit den Vätern zwischen dem **sittlichen Gesetz** (Zehn Gebote, Gottes- und Nächstenliebe), das bleibt und von Christus vertieft wird, und dem **zeremoniellen Gesetz** (Opfer, Reinheits- und Speisevorschriften, Tempelkult), das „ein Schatten der künftigen Güter" war (Hebr 10,1; Kol 2,17) und in Christus seine Erfüllung findet. Der Opferdienst ist nicht verworfen, sondern im einen Opfer Christi vollendet, das in der Eucharistie gegenwärtig wird.`,
    detail: `Kyrill von Alexandrien hat in seinen Werken zum Pentateuch („Glaphyra" und „Über die Anbetung im Geist und in der Wahrheit") gezeigt, wie die Gesetze und Riten Moses in Christus ihren geistlichen Sinn enthüllen – ganz in der alexandrinischen Tradition, die wörtlichen **und** geistlichen Sinn verbindet. Die koptische Kirche kennt zudem eine strenge Gebets- und Fastenordnung (rund 200 Fastentage im Jahr); „Freiheit vom Gesetz" bedeutet für sie nicht Gesetzlosigkeit, sondern das Leben im Geist, das die Gebote von innen her erfüllt (Röm 8,4). Gegenüber dem jüdischen Volk gilt: Die Gaben und die Berufung Gottes sind unwiderruflich (Röm 11,29); die Kirche lehrt nicht, dass Gott Israel verworfen hat.`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '10,1', quote: `Denn das Gesetz hat den Schatten von den zukünftigen Gütern, nicht das Wesen der Güter selbst.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Über die Anbetung im Geist und in der Wahrheit (De adoratione in spiritu et veritate); Glaphyra zum Pentateuch', year: 'vor 429', status: 'paraphrase', quote: `Das Gesetz ist Vorbild und Schatten; seine Wahrheit ist Christus, in dem die Anbetung „im Geist und in der Wahrheit" (Joh 4,23) Wirklichkeit wird.` },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '11', year: 'um 160', status: 'paraphrase', quote: `Ein ewiges und endgültiges Gesetz, nämlich Christus, ist uns gegeben, und ein Bund, nach dem es kein Gesetz, keine Satzung und kein Gebot mehr gibt – wie Jeremia einen neuen Bund angekündigt hat.` },
    ],
  },
  opposingView: {
    summary: `Für das rabbinische Judentum ist die Tora – schriftlich und mündlich – unveränderlich und verpflichtend für Israel; Maimonides formuliert als 9. Glaubensgrundsatz, dass sie nicht ausgetauscht und keine andere Tora vom Schöpfer kommen wird (vgl. Hilchot Jesode ha-Tora 9,1). Zugleich bezeugt die rabbinische Literatur Anpassungen nach dem Verlust des Tempels und vereinzelte aggadische Erwartungen, dass in der messianischen Zeit Veränderungen eintreten: etwa dass „eine neue Tora von mir ausgeht" (nach Jes 51,4) oder dass die Gebote in der kommenden Welt aufhören (bNidda 61b). Solche Aussagen sind keine Halacha und dürfen nicht überbewertet werden.`,
    detail: `Wichtig für die Debatte ist auch die rabbinische Lehre von den **noachidischen Geboten**: Nichtjuden sind nicht verpflichtet, die Tora Moses zu halten, sondern nur sieben grundlegende Gebote (bSanhedrin 56a–b), und die Gerechten der Völker haben Anteil an der kommenden Welt (Tosefta Sanhedrin 13,2). Das Apostelkonzil (Apg 15,20.29) entschied in auffallend ähnlicher Weise.`,
    sources: [
      { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Jesode ha-Tora', ref: '9,1', year: 'um 1180', quote: `Es ist klar und deutlich in der Tora, dass dieses Gebot für immer und ewig besteht; es gibt keine Veränderung, keine Hinzufügung und keine Wegnahme.`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Berachot', ref: '26b', quote: `Die Gebete wurden entsprechend den täglichen Opfern eingesetzt.`, status: 'paraphrase', url: 'https://www.sefaria.org/Berakhot.26b' },
      { kind: 'juedisch', work: 'Avot de-Rabbi Natan (Fassung A)', ref: '4', quote: `Rabbi Josua sah den zerstörten Tempel und klagte: Der Ort, an dem Israels Schuld gesühnt wurde, ist verwüstet! Rabban Jochanan ben Sakkai sagte: Mein Sohn, gräme dich nicht; wir haben eine andere Sühne, die ihr gleichkommt – die Werke der Barmherzigkeit, denn es heißt: „Ich habe Gefallen an Liebe und nicht am Opfer" (Hos 6,6).`, status: 'paraphrase' },
      { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '56a–b', quote: `Die Rabbinen lehrten: Sieben Gebote wurden den Söhnen Noachs gegeben: Rechtspflege, Verbot der Gotteslästerung, des Götzendienstes, der Unzucht, des Blutvergießens, des Raubes und des Gliedes vom lebenden Tier.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.56a' },
      { kind: 'juedisch', work: 'Midrasch Wajikra Rabba', ref: '13,3', quote: `Rabbi Avin bar Kahana sagte: Der Heilige, gepriesen sei er, sprach: „Eine Tora wird von mir ausgehen" (Jes 51,4) – eine Erneuerung der Tora wird von mir ausgehen.`, original: 'תורה חדשה מאתי תצא', status: 'paraphrase', note: 'Geprüft (Sefaria-Übersetzung; jüdische Sekundärliteratur): Stelle und Zuschreibung an Rabbi Avin bar Kahana bestätigt. Kontext: die Speisegesetze beim endzeitlichen Mahl (Behemot und Leviatan). Aggadisch; jüdische Ausleger verstehen sie meist als neue Einsicht in dieselbe Tora, nicht als Abschaffung. Nicht als „Beweis" überziehen.' },
    ],
  },
  quickAnswer: `Jesus hat die Tora nicht abgeschafft, sondern erfüllt (Mt 5,17), und Paulus sagt: „Wir richten das Gesetz auf" (Röm 3,31). Die Hebräische Bibel selbst kündigt einen neuen Bund an, „nicht wie der Bund mit euren Vätern" (Jer 31,31–32). „Ewig" (olam) heißt im Hebräischen oft „auf unabsehbare Zeit" – sogar die Rabbinen lesen „für immer" in Ex 21,6 als „bis zum Jobeljahr". Und seit 70 n. Chr. kann auch das Judentum Opfer, Priesterdienst und den Versöhnungstag nach Lev 16 nicht mehr halten – die Frage ist also nicht, ob sich etwas geändert hat, sondern wer die Vollmacht dazu hat.`,
  keyPoints: [
    `**Erfüllen, nicht auflösen:** Jesus vertieft die Gebote (Mt 5,17–48); Paulus nennt das Gesetz „heilig, gerecht und gut" (Röm 7,12).`,
    `**Der neue Bund ist eine Verheißung der Hebräischen Bibel** (Jer 31,31–34), nicht eine christliche Erfindung.`,
    `**„Olam" hat Bedeutungsbreite:** Ex 21,6 (bis zum Jobeljahr), 1 Sam 1,22 (lebenslang), Jona 2,7 (drei Tage).`,
    `**Seit 70 n. Chr.** sind Opfer, Priesterdienst und Lev 16 auch im Judentum unmöglich; die Rabbinen schufen Ersatzformen.`,
    `**Nichtjuden und die Tora:** Auch die Halacha verlangt von Nichtjuden nur die noachidischen Gebote – das Apostelkonzil (Apg 15) entschied ähnlich.`,
    `**Ein anderes Priestertum:** Ps 110,4 kündigt einen ewigen Priester nach Melchisedek an – mit einem neuen Priestertum ändert sich auch das Gesetz (Hebr 7,12).`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als toratreuer Jude und Apostel der Völker',
      text: `Paulus bezeichnet sich selbst als „Hebräer von Hebräern, nach dem Gesetz ein Pharisäer" (Phil 3,5) und lebte unter Juden als Jude (1 Kor 9,20; Apg 21,26). Sein Kampf galt nicht der Tora, sondern der Forderung, Nichtjuden müssten durch Beschneidung zu Juden werden, um zu Gottes Volk zu gehören. Das Gesetz ist für ihn heilig; aber es kann den Menschen nicht von innen erneuern – das tut der Geist, durch den „die Forderung des Gesetzes in uns erfüllt wird" (Röm 8,4). Christus ist das Ziel (telos), auf das die Tora hinführt (Röm 10,4; Gal 3,24).`,
      sources: [
        { kind: 'bibel', work: 'Römer', ref: '7,12; 8,3–4; 10,4', status: 'paraphrase' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '21,20–26', status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'im Gespräch mit Tryphon über Sabbat und Beschneidung',
      text: `Tryphons Hauptvorwurf an die Christen lautete: Ihr behauptet, Gott zu ehren, haltet aber weder Sabbat noch Beschneidung noch Feste. Justin antwortet mit Jer 31,31: Gott selbst habe einen neuen Bund angekündigt. Außerdem hätten die Gerechten vor Mose – Henoch, Noah, Abraham vor seiner Beschneidung, Melchisedek – Gott gefallen, ohne den Sabbat zu halten. Die Zeremonialgebote seien Israel um einer bestimmten Zeit und eines bestimmten Zwecks willen gegeben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '10–11; 18–23', year: 'um 160', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als alexandrinischer Ausleger des Pentateuch',
      text: `Kyrill liest das Gesetz Moses weder als überholten Ballast noch als Selbstzweck, sondern als Vorbild: Opfer, Priester, Feste und Reinheitsgesetze zeigen auf Christus, den wahren Hohenpriester und das wahre Opfer. Wer das Gesetz geistlich versteht, ehrt es mehr, als wer am Buchstaben hängen bleibt – denn er sieht, worauf es zielt. Für Kyrill ist deshalb der Übergang vom Schatten zur Wirklichkeit keine Abschaffung, sondern die Erfüllung dessen, was Gott von Anfang an wollte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Glaphyra zum Pentateuch', year: 'vor 429', status: 'paraphrase' },
      ],
    },
    {
      person: 'nt-wright',
      role: 'als Paulusforscher',
      text: `Wright betont, dass Paulus die Tora nicht als schlecht, sondern als für eine bestimmte Epoche gegeben versteht: Sie sollte Israel als Volk bewahren, bis der Messias kommt, in dem Gott seine Verheißung an Abraham erfüllt – ein Volk aus allen Völkern. Die „Werke des Gesetzes", gegen die Paulus streitet, sind vor allem die Kennzeichen, die Juden von Nichtjuden trennten (Beschneidung, Speisegebote, Sabbat). Im Messias wird diese Trennwand überwunden (Eph 2,14–15), nicht der Gott der Tora.`,
      sources: [
        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Paul and the Faithfulness of God', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'michael-brown',
      role: 'als messianisch-jüdischer Theologe',
      text: `Brown argumentiert, dass auch das rabbinische Judentum nach 70 n. Chr. die Tora in großen Teilen nicht mehr halten kann und sie durch rabbinische Ersatzformen umgedeutet hat. Die Frage sei deshalb nicht „Tora oder keine Tora", sondern: Wer hat die Vollmacht, die Tora für die Zeit nach dem Tempel auszulegen – die Rabbinen oder der Messias, der vor der Zerstörung des Tempels kam und den neuen Bund stiftete?`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 4–5', year: '2007–2010', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'chukkat-olam',
      objection: `Die Tora nennt ihre Gebote „ewige Satzung": Sabbat, Pessach, Jom Kippur. Gott ändert sich nicht (Mal 3,6). Was Gott „ewig" nennt, kann niemand abschaffen – auch kein Messias.`,
      objectionBy: 'Tovia Singer',
      answer: `„Olam" heißt im Hebräischen „auf unabsehbare Zeit", und der Zusammenhang begrenzt es: Ein Sklave dient seinem Herrn „le-olam" (Ex 21,6) – nach Raschi und dem Talmud „bis zum Jobeljahr". Das aaronitische Priestertum heißt „ewig" (Ex 40,15) – und doch gibt es seit 70 n. Chr. keinen Priesterdienst. Auch du kannst Jom Kippur nicht nach Lev 16 halten. Die Rabbinen haben die Opfer durch Gebete ersetzt. Mit welcher Vollmacht?`,
      questionsBack: [
        `Wie hältst du heute den Versöhnungstag nach Lev 16 – mit Hohenpriester, Bock für den HERRN und Bock für Asasel?`,
        `Wenn „le-olam" in Ex 21,6 „bis zum Jobeljahr" heißen kann – warum muss es anderswo „ohne jedes Ende" bedeuten?`,
      ],
      followUps: [
        {
          id: 'opfer-ausgesetzt',
          objection: `Die Opfer sind nicht abgeschafft, sondern ausgesetzt, bis der Tempel wieder steht. Bis dahin ersetzt Gebet das Opfer: „Wir wollen statt Stieren die Frucht unserer Lippen darbringen" (Hos 14,3).`,
          objectionBy: 'Michael Skobac',
          answer: `Hos 14,3 ist ein schöner Vers – Gott nimmt den Umkehrenden an. Aber die Tora sagt auch: „Die Seele des Fleisches ist im Blut, und ich habe es euch für den Altar gegeben, um Sühne zu schaffen" (Lev 17,11), und der Talmud: „Es gibt keine Sühne ohne Blut" (bYoma 5a). Seit fast zweitausend Jahren hat Israel keinen Versöhnungstag nach Lev 16. Wir glauben: Gott hat sein Volk nicht ohne Sühne gelassen – die Sühne, auf die die Opfer hinwiesen, hat der Messias geschaffen, bevor der Tempel fiel (Dan 9,24–26).`,
          sources: [
            { kind: 'juedisch', work: 'Babylonischer Talmud, Yoma', ref: '5a', quote: `Es gibt keine Sühne außer durch Blut.`, original: 'אין כפרה אלא בדם', status: 'paraphrase', url: 'https://www.sefaria.org/Yoma.5a', note: 'Parallelen in bSevachim 6a und bMenachot 93b; dort im Zusammenhang der Opfergesetze.' },
          ],
          followUps: [
            {
              id: 'vergebung-ohne-blut',
              objection: `Gott vergibt dem Umkehrenden auch ohne Blut: Ninive (Jona 3), David (Ps 51), „Er hat dir gesagt, Mensch, was gut ist" (Mi 6,8). Blut ist keine Bedingung für Gottes Gnade.`,
              objectionBy: 'Tovia Singer',
              answer: `Gottes Erbarmen mit dem Umkehrenden ist wirklich – das glauben wir auch. Aber es geschieht im Rahmen einer Sühne, die Gott selbst bereitstellt: David betet in Ps 51 um ein reines Herz und schließt doch mit „dann wird man Stiere auf deinem Altar opfern" (51,21). Gnade ohne Opfer im Einzelfall verneint die Sühne nicht, sondern weist auf die Sühne hin, die Gott selbst schafft. Darüber sollten wir eigens sprechen – das ist die Frage nach dem stellvertretenden Leiden.`,
              followUps: [
                {
                  id: 'mehlopfer-lev-5',
                  objection: `Die Tora selbst kennt Sühne ohne Blut: Wer arm ist, bringt ein Zehntel Efa Feinmehl als Sündopfer, „und der Priester soll ihm Sühne schaffen" (Lev 5,11–13). Also ist Blut keine Bedingung.`,
                  objectionBy: 'Tovia Singer',
                  answer: `Ein guter Hinweis – aber lies weiter: Der Priester verbrennt das Mehl „auf dem Altar, auf den Feueropfern des HERRN" (5,12). Das Mehlopfer des ganz Armen wird mit den blutigen Opfern auf dem Altar vereinigt; es ist eine barmherzige Ausnahme innerhalb des Opfersystems, nicht seine Ersetzung. Und es gilt nur für bestimmte Vergehen (5,1–4). Die Ausnahme bestätigt die Regel von Lev 17,11 – und sie setzt einen Altar voraus, den es seit 70 n. Chr. nicht mehr gibt.`,
                  sources: [
                    { kind: 'bibel', work: 'Levitikus', ref: '5,11–13', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Levitikus', ref: '17,11', quote: `Denn des Leibes Leben ist im Blut, und ich habe es euch auf den Altar gegeben, daß eure Seelen damit versöhnt werden. Denn das Blut ist die Versöhnung, weil das Leben in ihm ist.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  followUps: [
                    {
                      id: 'jom-kippur-suehnt-selbst',
                      objection: `Die Mischna lehrt: Der Versöhnungstag selbst sühnt – für Vergehen zwischen Mensch und Gott; für Vergehen gegen den Nächsten erst, wenn man ihn versöhnt hat (Mischna Joma 8,9). Wir brauchen keinen Tempel und keinen gekreuzigten Messias.`,
                      objectionBy: 'Stuart Federow',
                      answer: `Ich achte diese Lehre – sie verbindet Umkehr und Versöhnung mit dem Nächsten, wie Jesus es auch tut (Mt 5,23–24). Aber die Tora bindet die Sühne des Versöhnungstages an den Hohenpriester, das Blut im Allerheiligsten und den Bock für Asasel (Lev 16,14–16.30–34). Dass der Tag „von selbst" sühnt, ist eine rabbinische Neudeutung nach dem Verlust des Tempels. Genau darum geht es: Auch ihr habt erlebt, dass sich die Gestalt des Gottesdienstes geändert hat. Wir sagen nur: Gott selbst hat für diesen Fall vorgesorgt – im Messias, der vor der Zerstörung kam.`,
                      sources: [
                        { kind: 'juedisch', work: 'Mischna, Joma', ref: '8,9', quote: `Für Übertretungen zwischen Mensch und Gott sühnt der Versöhnungstag; für Übertretungen zwischen Mensch und seinem Nächsten sühnt der Versöhnungstag nicht, bis er seinen Nächsten besänftigt hat.`, status: 'paraphrase', url: 'https://www.sefaria.org/Mishnah_Yoma.8.9' },
                      ],
                      questionsBack: [
                        `Wo sagt die Tora selbst, dass der Versöhnungstag ohne Hohenpriester und ohne Blut im Allerheiligsten sühnt?`,
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
      id: 'paulus-verraet-jesus',
      objection: `Jesus sagte: „Kein Jota wird vom Gesetz vergehen" (Mt 5,18). Paulus dagegen: „Christus ist das Ende des Gesetzes" (Röm 10,4), „ihr seid nicht unter dem Gesetz". Jesus war ein toratreuer Rabbi – Paulus hat seine Religion verraten.`,
      objectionBy: 'Shmuley Boteach',
      answer: `Paulus sagt auch: „Heben wir das Gesetz durch den Glauben auf? Das sei ferne! Wir richten es auf" (Röm 3,31), und: „Das Gesetz ist heilig, das Gebot heilig, gerecht und gut" (Röm 7,12). „Telos" in Röm 10,4 heißt Ziel – Christus ist das, worauf die Tora hinführt. Paulus lebte selbst als toratreuer Jude (Apg 21,20–26) und ließ Timotheus beschneiden (Apg 16,3). Was er bekämpfte: die Forderung, Nichtjuden müssten Juden werden, um zu Gott zu gehören.`,
      followUps: [
        {
          id: 'galater-5-2',
          objection: `„Wenn ihr euch beschneiden lasst, wird euch Christus nichts nützen" (Gal 5,2). Das ist eine offene Kampfansage an die Tora.`,
          objectionBy: 'Tovia Singer',
          answer: `Der Galaterbrief richtet sich an **nichtjüdische** Gläubige, denen man sagte, sie müssten sich beschneiden lassen, um vor Gott gerecht zu werden (Gal 5,4). Interessant: Auch die Halacha verlangt von Nichtjuden nicht, die Tora Moses zu halten, sondern nur die sieben noachidischen Gebote (bSanhedrin 56a), und die Gerechten der Völker haben Anteil an der kommenden Welt. Das Apostelkonzil in Jerusalem – geleitet von Juden – entschied ganz ähnlich: keine Beschneidung für Nichtjuden, aber Enthaltung von Götzendienst, Unzucht und Blut (Apg 15,20).`,
          followUps: [
            {
              id: 'christentum-schafft-ab',
              objection: `Aber die Judenchristen hörten bald auf, die Tora zu halten, und die Kirche hat Juden später sogar verboten, Sabbat zu halten. Das Christentum hat die Tora vollständig abgeschafft – auch für Juden.`,
              objectionBy: 'Michael Skobac',
              answer: `Die Jerusalemer Gemeinde lebte toratreu („alle sind Eiferer für das Gesetz", Apg 21,20). Dass die spätere, überwiegend nichtjüdische Kirche Juden das Halten jüdischer Bräuche teils verbot, war eine geschichtliche Entwicklung, die man kritisch sehen kann. Die orthodoxe Lehre ist: Das zeremonielle Gesetz ist in Christus erfüllt, das sittliche bleibt; ob ein jüdischer Christ jüdische Bräuche pflegt, ist keine Heilsfrage (Röm 14,5–6).`,
            },
          ],
        },
      ],
    },
    {
      id: 'markus-7-dtn-13',
      objection: `Mk 7,19: Jesus „erklärte alle Speisen für rein". Damit hob er Lev 11 auf. Nach Dtn 13 ist ein Prophet, der zum Übertreten der Gebote verleitet, ein falscher Prophet – egal welche Wunder er tut.`,
      objectionBy: 'Tovia Singer',
      answer: `Die Bemerkung des Markus deutet Jesu Lehre, dass Unreinheit aus dem Herzen kommt (Mk 7,15–23) – ein prophetisches Thema (Jer 4,4; Ps 51,12). Dtn 13 warnt vor Propheten, die zu „anderen Göttern" führen; Jesus führte zum Gott Israels. Und der Talmud selbst kennt die Regel, dass man einem bewährten Propheten folgen soll, wenn er eine Übertretung für eine bestimmte Zeit anordnet – außer beim Götzendienst (bSanhedrin 90a). Dazu kommt Dtn 18,15: Der Prophet wie Mose – „auf ihn sollt ihr hören".`,
      sources: [
        { kind: 'juedisch', work: 'Babylonischer Talmud, Sanhedrin', ref: '90a', quote: `In allem, was ein Prophet dir sagt, die Worte der Tora zu übertreten, höre auf ihn – außer beim Götzendienst.`, status: 'paraphrase', url: 'https://www.sefaria.org/Sanhedrin.90a', note: 'Begründet mit Dtn 18,15 („auf ihn sollt ihr hören"); Beispiel ist Elija am Karmel (1 Kön 18). Parallele in bJevamot 90b.' },
      ],
      followUps: [
        {
          id: 'horaat-schaa',
          objection: `„Hora'at scha'ah" ist eine zeitweilige Anordnung wie bei Elija am Karmel – keine dauerhafte Aufhebung von Geboten.`,
          objectionBy: 'Stuart Federow',
          answer: `Richtig, die rabbinische Regel betrifft zeitweilige Anordnungen. Ich führe sie nur an, um zu zeigen: Prophetische Vollmacht über einzelne Gebote ist im Judentum nicht automatisch „falsche Prophetie". Der Anspruch des Neuen Testaments ist größer: Der Messias stiftet den neuen Bund, den Jeremia angekündigt hat. Und manche Rabbinen erwarteten selbst Veränderungen in der messianischen Zeit – etwa „eine neue Tora wird von mir ausgehen" (nach Jes 51,4).`,
          followUps: [
            {
              id: 'aggada-keine-halacha',
              objection: `Das sind vereinzelte Aggadot, keine Halacha. Die verbindliche Lehre ist klar: Die Tora wird nie geändert – 9. Grundsatz des Maimonides.`,
              objectionBy: 'Tovia Singer',
              answer: `Einverstanden, diese Midraschim sind Aggada, und ich überbewerte sie nicht. Aber Jer 31 ist keine Aggada, sondern Prophetie: ein neuer Bund, „nicht wie der Bund mit euren Vätern". Gottes Weisung bleibt und wird ins Herz geschrieben – ihre Gestalt als Sinaibund mit Tempel, Priestertum und Opfern ändert sich. Genau das sagt der Hebräerbrief. Maimonides formulierte im 12. Jahrhundert; Jeremia ist ein Prophet Israels.`,
              questionsBack: [
                `Was ist am neuen Bund „nicht wie" der Sinaibund, wenn sich gar nichts ändert?`,
              ],
              followUps: [
                {
                  id: 'kein-prophet-wie-mose',
                  objection: `Die Tora sagt selbst: „Es stand hinfort kein Prophet in Israel auf wie Mose" (Dtn 34,10). Niemand hat die Autorität Moses – auch dein Jesus nicht. Ein Prophet nach Mose darf die Tora nur einschärfen, nie verändern.`,
                  objectionBy: 'Stuart Federow',
                  answer: `Dtn 34,10 blickt zurück – und genau darum blieb die Erwartung offen: Gott hatte einen Propheten „wie Mose" verheißen (Dtn 18,15–18), und bis zum Abschluss der Tora war er nicht gekommen. Deshalb fragten die Priester Johannes den Täufer: „Bist du der Prophet?" (Joh 1,21). Und Maimonides selbst schreibt, der König Messias werde ein großer Prophet sein, der Mose nahekommt (Hilchot Teschuva 9,2). Wenn der Messias Mose nahekommt, ist die Frage nach seiner Vollmacht über die Auslegung der Tora keine christliche Anmaßung, sondern die Frage, wer er ist.`,
                  sources: [
                    { kind: 'bibel', work: 'Deuteronomium', ref: '18,15', quote: `Einen Propheten wie mich wird der HERR, dein Gott, dir erwecken aus dir und aus deinen Brüdern; dem sollt ihr gehorchen.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'juedisch', author: 'Moses Maimonides', work: 'Mischne Tora, Hilchot Teschuva', ref: '9,2', year: 'um 1180', status: 'paraphrase', quote: `Der König, der aus den Nachkommen Davids erstehen wird, … wird ein großer Prophet sein, nahe an Mose, unserem Lehrer.` },
                  ],
                  questionsBack: [
                    `Wer ist der Prophet „wie Mose", auf den ihr hören sollt (Dtn 18,15) – und warum wartete Israel noch zur Zeit Johannes' des Täufers auf ihn?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jer-31-dieselbe-tora',
      objection: `In Jer 31 schreibt Gott **meine Tora** in ihr Herz – dieselbe Tora! Und der Bund ist mit Israel und Juda geschlossen, nicht mit Heiden. Außerdem muss dort keiner mehr den anderen lehren – das ist offensichtlich noch nicht erfüllt.`,
      objectionBy: 'Tovia Singer',
      answer: `Ja – Gottes Weisung bleibt und wird verinnerlicht; das glauben wir auch. Aber der Bund ist „nicht wie der Bund, den ich mit ihren Vätern schloss, den sie gebrochen haben" – seine Gestalt ändert sich. Die Verheißung hat begonnen und wartet auf ihre Vollendung, wie das Ausgießen des Geistes nach Joel 3 (Apg 2). Und er wurde zuerst mit Israel geschlossen: Die erste Gemeinde des neuen Bundes in Jerusalem war ganz jüdisch; die Völker wurden hinzugefügt (Röm 11,17).`,
      followUps: [
        {
          id: 'ersetzungstheologie',
          objection: `Hebr 8,13 nennt den Bund „veraltet". Das ist Ersetzungstheologie: Die Kirche ersetzt Israel. Genau diese Lehre hat Jahrhunderte des Judenhasses gerechtfertigt.`,
          objectionBy: 'Michael Skobac',
          answer: `Hebr 8,13 spricht von der Bundesordnung mit Tempel, Priestertum und Opfern – die mit 70 n. Chr. für alle endete. Die Lehre, Gott habe das jüdische Volk verworfen und durch die Kirche ersetzt, widerspricht Paulus: „Hat Gott sein Volk verstoßen? Das sei ferne!" (Röm 11,1), „Gottes Gaben und Berufung können ihn nicht gereuen" (Röm 11,29). Die koptische Kirche lehrt nicht, dass Gott Israel verworfen hat. Der neue Bund wurde Israel verheißen und zuerst unter Juden verwirklicht.`,
          followUps: [
            {
              id: 'zwei-bund-theorie',
              objection: `Wenn Gott Israel nicht verworfen hat und unser Bund unwiderruflich ist – warum soll ich dann an Jesus glauben? Viele Kirchen sagen heute: Juden haben ihren Bund, Christen den ihren. Lass uns doch einfach jeder auf seinem Weg bleiben.`,
              objectionBy: 'Shmuley Boteach',
              answer: `Ich schätze diese Großzügigkeit, aber ich wäre unehrlich, wenn ich sie übernähme. Paulus, der Israels unwiderrufliche Berufung lehrt (Röm 11,29), betet im selben Brief: „Meines Herzens Wunsch und Gebet zu Gott für Israel ist, dass sie gerettet werden" (Röm 10,1). Ich biete dir nichts Fremdes an – keinen Gott der Heiden, sondern den Messias Israels, einen Sohn Davids, den deine eigenen Propheten ankündigten. Wenn er es ist, dann gehört er zuerst dir.`,
              detail: `Die koptisch-orthodoxe Kirche vertritt keine Zwei-Bund-Theologie: Christus ist der eine Mittler (1 Tim 2,5), zuerst für Israel, dann für die Völker (Röm 1,16). Zugleich lehrt sie keine Verwerfung Israels und keinen Zwang. Das Zeugnis gegenüber Juden geschieht in Liebe, Demut und im Bewusstsein der Schuld, die Christen auf sich geladen haben. Paulus beschreibt die Haltung: „große Traurigkeit und unaufhörlichen Schmerz" um sein Volk (Röm 9,2), keine Überlegenheit.`,
              sources: [
                { kind: 'bibel', work: 'Römer', ref: '10,1', quote: `Liebe Brüder, meines Herzens Wunsch ist, und ich flehe auch zu Gott für Israel, daß sie selig werden.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn Jesus wirklich der Messias Israels wäre – wäre es dann Liebe oder Gleichgültigkeit, dir das zu verschweigen?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Mit welcher Vollmacht haben die Rabbinen nach 70 n. Chr. Opfer durch Gebete ersetzt?`,
    `Was ist am neuen Bund von Jer 31 „nicht wie" der Bund vom Sinai?`,
    `Wenn Ps 110,4 einen ewigen Priester nach Melchisedek ankündigt – was bedeutet das für das aaronitische Priestertum?`,
    `Warum verlangt die Halacha von Nichtjuden nur die noachidischen Gebote – und warum ist es dann Verrat, wenn Paulus von Nichtjuden keine Beschneidung verlangt?`,
  ],
  avoid: [
    `Nicht sagen: „Das Gesetz ist abgeschafft, Christen müssen gar nichts halten." Das widerspricht Mt 5,17–20, Röm 3,31 und der orthodoxen Lehre vom sittlichen Gesetz.`,
    `Nicht abfällig von „jüdischer Gesetzlichkeit" reden. Die Tora ist für Juden Freude und Liebe zu Gott (Ps 119) – und für Christen heiliges Wort Gottes.`,
    `Nicht aggadische Midraschim („neue Tora", „Gebote hören auf") als Beweis überziehen, dass „die Rabbinen selbst" das Ende der Tora lehrten.`,
    `Keine Ersetzungstheologie („die Kirche hat Israel ersetzt") – sie widerspricht Röm 11.`,
  ],
  concessions: [
    `Mk 7,19 und die Paulusbriefe zeigen, dass die frühe Kirche Speisegebote und Beschneidung für Nichtjuden nicht als verbindlich ansah – das ist eine echte Veränderung.`,
    `Die spätere Kirche hat Juden teils das Halten ihrer Bräuche verboten; das ist ein dunkles Kapitel.`,
    `Viele Gebote nennt die Tora ausdrücklich „ewig"; die christliche Deutung von „olam" muss begründet werden und ist nicht selbstverständlich.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'N. T. Wright', work: 'Paul and the Faithfulness of God', year: '2013', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Answering Jewish Objections to Jesus, Bd. 4–5', year: '2007–2010', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon, Kap. 10–47', year: 'um 160', status: 'paraphrase' },
    { kind: 'gegner', author: 'Shmuley Boteach', work: 'Kosher Jesus', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Tora', 'Neuer Bund', 'Jeremia 31', 'Paulus', 'Olam', 'Noachidische Gebote', 'Opfer'],
  related: [
    'judentum-messias/muendliche-tora',
    'judentum-messias/kein-menschenopfer',
    'neues-testament/paulus-erfand-christentum',
    'islam-mohammed/paulus-verfaelschte-jesus-islam',
  ],
};

export default claim;
