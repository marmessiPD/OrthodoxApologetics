import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'schwertverse-kontext',
  title: `„Die Schwertverse (9:5, 9:29) gelten nur im historischen Kontext."`,
  proponents: [
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten über Gewalt im Koran' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Misquoting Muhammad (2014)' },
    { name: 'Javed Ahmad Ghamidi', role: 'Pakistanischer Gelehrter, Al-Mawrid', work: 'Mizan; The Islamic Law of Jihad (Lehre vom itmām al-ḥujja)' },
    { name: 'Muhammad Abdel Haleem', role: 'Koranübersetzer, SOAS London', work: 'Understanding the Qur\'an: Themes and Style (1999); The Qur\'an: A New Translation (2004)' },
    { name: 'Mustafa Akyol', role: 'Türkischer Publizist, Cato Institute', work: 'Islam without Extremes (2011)' },
  ],
  steelman: `„Wer 9:5 zitiert – ‚tötet die Götzendiener, wo immer ihr sie findet' –, reißt den Vers aus dem Zusammenhang. Sure 9 beginnt mit der Aufkündigung von Verträgen mit bestimmten arabischen Stämmen, die ihre Verträge gebrochen hatten (9:1–4). Wer seinen Vertrag gehalten hat, ist ausdrücklich ausgenommen (9:4; 9:7). Wer Schutz sucht, dem soll Schutz gewährt werden, ‚bis er Allahs Wort hört', und man soll ihn an einen sicheren Ort bringen (9:6). ‚Sie haben zuerst gegen euch angefangen' (9:13). 9:29 bezieht sich auf den Feldzug nach Tabuk gegen die Byzantiner, die sich gegen Medina sammelten. Der Koran sagt: ‚Kämpft auf dem Weg Allahs gegen die, die gegen euch kämpfen, doch übertretet nicht' (2:190) und ‚Wenn sie sich dem Frieden zuneigen, so neige auch du dich ihm zu' (8:61). Diese Verse beschreiben einen konkreten Krieg im 7. Jahrhundert – keine ewige Kriegserklärung an die Welt."`,
  biblical: {
    summary: `In der Bibel verläuft die Offenbarungsgeschichte vom Gericht zur Gnade: Die harten Kriegsgebote des Alten Testaments betrafen bestimmte Völker in einer bestimmten Zeit (Kanaan, Amalek) und wurden nie als bleibender Auftrag an alle Gläubigen verstanden. Die *letzte* und vollkommene Offenbarung, das Evangelium, verwirft das Schwert für das Reich Gottes: „Stecke dein Schwert an seinen Ort" (Mt 26,52); „Liebet eure Feinde" (Mt 5,44); „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Im Koran verläuft die Chronologie umgekehrt: von der mekkanischen Geduld zur medinensischen Kriegsführung – und Sure 9, die die Schwertverse enthält, gilt in der islamischen Überlieferung als eine der zuletzt offenbarten Suren.`,
    detail: `**Hebr 1,1–2:** „Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn." Für Christen ist das spätere, endgültige Wort Gottes das Wort des gekreuzigten Sohnes. Für die klassische islamische Lehre der Abrogation (*naskh*) gilt umgekehrt: Das spätere medinensische Gebot hebt im Konfliktfall das frühere auf.

**9:111 und das Evangelium:** Der Koran behauptet, Gottes Verheißung an die, die „kämpfen, töten und getötet werden", stehe „in der Tora, im Evangelium und im Koran" (9:111). Im Evangelium findet sich keine solche Verheißung – es sagt das Gegenteil.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '5,44', quote: `Liebet eure Feinde; segnet, die euch fluchen; tut wohl denen, die euch hassen; bittet für die, so euch beleidigen und verfolgen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '26,52', quote: `Stecke dein Schwert an seinen Ort! denn wer das Schwert nimmt, der soll durchs Schwert umkommen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche der ersten drei Jahrhunderte wuchs ohne Schwert, unter Verfolgung. Justin, Athenagoras, Tertullian und Origenes bezeugen übereinstimmend, dass Christen ihre Feinde nicht bekämpfen, sondern für sie beten. Origenes antwortet Kelsos, Christen kämpften für den Kaiser durch ihr Gebet, nicht mit Waffen. Die koptische Kirche, die ihre Jahre nach der „Ära der Märtyrer" zählt, versteht sich bis heute als Kirche, die durch Zeugnis und Leiden siegt. Wo Christen später Glaubenskriege führten, taten sie es im Widerspruch zu dieser apostolischen Haltung.`,
    sources: [
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'VIII,73', year: 'um 248', quote: `Wir kämpfen für den Kaiser mehr als andere, nicht indem wir mit ihm ins Feld ziehen, sondern indem wir ein eigenes Heer der Frömmigkeit durch unsere Gebete zu Gott bilden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '39', year: 'um 155', quote: `Wir, die wir früher einander töteten, führen nicht nur keinen Krieg gegen unsere Feinde, sondern sterben sogar freudig für das Bekenntnis zu Christus.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der heutigen muslimischen Debatte gibt es drei Hauptpositionen: (1) **Klassisch:** 9:5 und 9:29 sind allgemeine Gebote; zahlreiche Gelehrte sahen in 9:5 („Schwertvers") einen Vers, der frühere Friedens- und Geduldsverse aufhob. Der offensive Dschihad (*jihād aṭ-ṭalab*) galt als Gemeinschaftspflicht (*farḍ kifāya*). (2) **Kontextualistisch:** Die Verse betreffen nur die vertragsbrüchigen Araber bzw. die Lage bei Tabuk; die Friedensverse wurden nicht aufgehoben (Abdel Haleem, Brown, Akyol). (3) **Itmām al-ḥujja (Ghamidi):** Die Verse beschreiben eine einmalige göttliche Strafe an den unmittelbaren Adressaten Mohammeds, die heute nicht mehr gilt.`,
    detail: `**Ibn Kathir zu 9:5:** Er nennt den Vers „Vers des Schwertes" und überliefert von ad-Dahhak ibn Muzahim, er habe jeden Vertrag mit Götzendienern aufgehoben, sowie von Ibn ʿAbbas, nach der Offenbarung von Sure Baraʾa habe kein Götzendiener mehr Vertrag oder Schutzzusage gehabt. Zugleich gibt es in der Tradition unterschiedliche Meinungen, welche Verse genau aufgehoben wurden.

**Das klassische Recht:** Das Handbuch der schafiitischen Schule *ʿUmdat as-sālik* (Ahmad ibn Naqib al-Misri, gest. 1368; englisch als *Reliance of the Traveller*, 1991, mit Bestätigung der Islamic Research Academy der al-Azhar) definiert Dschihad als Krieg gegen Nichtmuslime zur Aufrichtung der Religion und beschreibt den Kampf gegen Juden, Christen und Zoroastrier, bis sie den Islam annehmen oder die Dschizya zahlen.

**Ibn Khaldun** (gest. 1406) schreibt, im Islam sei der heilige Krieg wegen der universalen Sendung religiöse Pflicht, während die anderen Religionsgemeinschaften keine universale Sendung hätten und der heilige Krieg für sie nur zur Verteidigung erlaubt sei.`,
    sources: [
      { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsir al-Qur\'an al-ʿAzim', ref: 'zu 9:5', year: '14. Jh.', quote: `Dieser ehrenwerte Vers wurde der Vers des Schwertes genannt; ad-Dahhak ibn Muzahim sagte, er habe jeden Vertrag zwischen dem Propheten und jedem Götzendiener aufgehoben.`, status: 'paraphrase', url: 'https://quran.com/9/5/tafsirs/en-tafisr-ibn-kathir', note: 'Nach der gekürzten englischen Ausgabe des Ibn-Kathir-Tafsir.' },
      { kind: 'hadith', author: 'Ahmad ibn Naqib al-Misri', work: 'ʿUmdat as-salik (engl. Reliance of the Traveller, übers. Nuh Ha Mim Keller)', ref: 'o9.0–o9.8', year: '14. Jh.; engl. 1991', quote: `Dschihad bedeutet Krieg gegen Nichtmuslime; er ist Gemeinschaftspflicht. Der Kalif bekämpft Juden, Christen und Zoroastrier, bis sie Muslime werden oder die Kopfsteuer zahlen.`, status: 'paraphrase' },
      { kind: 'hadith', author: 'Ibn Khaldun', work: 'al-Muqaddima (engl. übers. Franz Rosenthal)', ref: 'Kap. III, Abschn. 31', year: '1377', quote: `In der muslimischen Gemeinschaft ist der heilige Krieg wegen der Universalität der Sendung religiöse Pflicht; die anderen Religionsgemeinschaften hatten keine universale Sendung, und der heilige Krieg war für sie keine religiöse Pflicht außer zur Verteidigung.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Muhammad Abdel Haleem', work: 'Understanding the Qur\'an: Themes and Style', year: '1999', quote: `Die Kriegsverse müssen im Zusammenhang gelesen werden; 9:5 betrifft vertragsbrüchige Gegner und ist durch 9:4, 9:6 und 9:7 eingeschränkt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Kontext ist wichtig – und gerade der Kontext zeigt das Problem: 9:5 endet nicht mit „wenn sie aufhören anzugreifen", sondern „wenn sie bereuen, das Gebet verrichten und die Zakat entrichten" – also Muslime werden. 9:29 nennt als Ziel nicht Verteidigung, sondern den Kampf gegen Schriftbesitzer, „die nicht an Allah glauben … bis sie den Tribut in Demut entrichten". Die klassischen Ausleger und alle Rechtsschulen lasen die Verse als allgemein. Und anders als in der Bibel, wo das letzte Wort Gottes das gewaltlose Evangelium ist, gehört Sure 9 zu den letzten Offenbarungen des Korans.`,
  keyPoints: [
    `**Der Kontext von 9:5:** Aufkündigung *aller* Verträge mit Götzendienern nach Fristablauf (9:1–4); Ende der Feindseligkeit nur durch Gebet und Zakat – also Übertritt (9:5; vgl. Bukhari 25).`,
    `**9:29 nennt theologische, nicht militärische Kriterien:** „die nicht an Allah glauben … und nicht der Religion der Wahrheit folgen", bis zur Dschizya „in Demut" (*wa-hum ṣāghirūn*).`,
    `**Die klassische Auslegung:** Ibn Kathir („Vers des Schwertes", ad-Dahhak, Ibn ʿAbbas), die Rechtsschulen (Dschihad als Gemeinschaftspflicht), Ibn Khaldun (universale Sendung).`,
    `**Die Chronologie:** Sure 9 gilt als eine der letzten Suren. Nach der Abrogationslehre hat das Spätere Vorrang – die Entwicklung läuft vom Frieden zum Kampf.`,
    `**Spiegelbild Bibel:** Im AT waren die Kriegsgebote begrenzt; das NT als letztes Wort verwirft das Schwert. Im Koran ist das Letzte das Härteste.`,
    `**9:111 behauptet etwas über das Evangelium, das dort nicht steht** – ein weiterer Fall des Islamischen Dilemmas.`,
    `**Fairness:** Reformer wie Ghamidi oder Abdel Haleem verdienen Respekt; aber sie stehen gegen die klassische Mehrheit und müssen gegen die Chronologie argumentieren.`,
  ],
  argument: {
    name: 'Das Argument der umgekehrten Chronologie',
    summary: 'Ob eine Religion ihre Gewalttexte überwinden kann, hängt davon ab, ob ihr letztes und höchstes Wort sie überwindet oder bestätigt.',
    premises: [
      {
        text: `P1: Sowohl die Bibel als auch der Koran enthalten Texte, die Gewalt gebieten.`,
        support: `Dtn 20,16–18; 1 Sam 15,3 einerseits, 9:5; 9:29; 8:39; 2:191 andererseits. Ehrlichkeit verlangt, beides zuzugeben.`,
        sources: [
          { kind: 'koran', work: 'Sure 9 (at-Tawba)', ref: '9:5', quote: `Wenn die heiligen Monate abgelaufen sind, dann tötet die Götzendiener, wo immer ihr sie findet, ergreift sie, belagert sie und lauert ihnen überall auf. Wenn sie aber bereuen, das Gebet verrichten und die Zakat entrichten, dann lasst sie ihres Weges ziehen.`, original: `fa-in tābū wa-aqāmū ṣ-ṣalāta wa-ātawu z-zakāta fa-khallū sabīlahum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/9/5' },
          { kind: 'koran', work: 'Sure 9 (at-Tawba)', ref: '9:29', quote: `Kämpft gegen diejenigen, die nicht an Allah und den Jüngsten Tag glauben, die nicht verbieten, was Allah und Sein Gesandter verboten haben, und nicht der Religion der Wahrheit folgen – von denen, denen die Schrift gegeben wurde –, bis sie die Dschizya aus der Hand entrichten, während sie gering gemacht sind.`, original: `ḥattā yuʿṭū l-jizyata ʿan yadin wa-hum ṣāghirūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/9/29' },
        ],
      },
      {
        text: `P2: In der Bibel ist die letzte, vollkommene Offenbarung – das Evangelium Christi – gewaltlos und verwirft das Schwert für das Reich Gottes.`,
        support: `Mt 5,38–48; 26,52; Joh 18,36; Röm 12,17–21; Hebr 1,1–2. Die alttestamentlichen Kriegsgebote waren auf bestimmte Völker und Zeiten begrenzt.`,
      },
      {
        text: `P3: Im Koran gehört Sure 9 mit den Schwertversen zu den spätesten Offenbarungen, und nach der klassischen Abrogationslehre hat das Spätere im Konfliktfall Vorrang.`,
        support: `Nach einem Bericht des al-Baraʾ ibn ʿAzib in Sahih al-Bukhari war Baraʾa (Sure 9) die letzte vollständig offenbarte Sure; Ibn Kathir überliefert die Ansicht, 9:5 habe jeden Vertrag aufgehoben.`,
        sources: [
          { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab al-Maghazi / Kitab at-Tafsir', quote: `Al-Baraʾ: Die letzte Sure, die vollständig offenbart wurde, war Baraʾa (Sure 9).`, status: 'unverified', note: 'Häufig als Bukhari 4364 bzw. 4654 zitiert; Nummer vor Verwendung prüfen.' },
        ],
      },
    ],
    inferences: [
      `Ein Christ, der Gewalt im Namen Gottes ablehnt, kann sich auf das letzte und höchste Wort seiner Schrift berufen.`,
      `Ein Muslim, der die Schwertverse begrenzen will, muss gegen die chronologisch letzten Verse und gegen die klassische Mehrheitsauslegung argumentieren.`,
    ],
    conclusion: `Der Kontext-Einwand ist möglich, aber er schwimmt gegen den Strom der eigenen Tradition; im Christentum fließt der Strom in Richtung Gewaltlosigkeit.`,
  },
  voices: [
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der die Entwicklung des Dschihad untersuchte',
      text: `Qureshi zeichnet in *Answering Jihad* nach, wie der Koran den Kampf in Stufen entwickelt: Geduld in Mekka, Erlaubnis zur Verteidigung, Kampf gegen Angreifer, schließlich der allgemeine Kampf in Sure 9. Weil Sure 9 zu den letzten Offenbarungen gehört, habe die klassische Rechtsprechung sie als maßgeblich betrachtet. Er betont: Friedliche Muslime sind nicht heuchlerisch – viele kennen diese Entwicklung schlicht nicht, und ihr Friedenswille ist echt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', quote: `Die Entwicklung der Dschihad-Verse von Mekka bis zur Sure 9 und ihre Bedeutung in der klassischen Rechtsprechung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Zeitzeuge der frühen islamischen Herrschaft',
      text: `Johannes von Damaskus lebte im Umfeld des umayyadischen Hofes und kannte den Islam aus erster Hand. In seiner Schrift über die Häresien beschreibt er den Islam sachlich als neue Lehre und setzt sich mit dessen Christusbild auseinander. Sein Leben selbst ist ein Zeugnis: Christen unter islamischer Herrschaft dienten, schrieben und beteten – als Bürger zweiter Klasse, aber ohne Waffen zu erheben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien (De haeresibus)', ref: 'Kap. 100/101', year: 'um 743', quote: `Darstellung der Lehre der „Ismaeliten" und Auseinandersetzung mit ihrem Christusbild.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tertullian',
      role: 'als frühchristlicher Apologet',
      text: `Tertullian deutet die Szene im Garten Gethsemane grundsätzlich: Indem der Herr Petrus entwaffnete, habe er jedem Soldaten das Schwert abgegürtet. Für die frühe Kirche war Jesu letztes Wort zum Schwert die Richtschnur – nicht die Kriege Josuas. Tertullian ist für Kopten keine Lehrautorität, aber ein früher Zeuge dafür, wie die Christen das Gebot ihres Herrn verstanden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Über den Götzendienst (De idololatria)', ref: '19', year: 'um 200', quote: `Der Herr hat, indem er Petrus entwaffnete, jeden Soldaten entgürtet.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer über die Schwertverse',
      text: `Wood fragt in Debatten konsequent nach der klassischen Auslegung: Wenn die Schwertverse nur für das 7. Jahrhundert galten – warum haben die Prophetengefährten nach Mohammeds Tod Persien, Syrien, Ägypten und Nordafrika erobert, und warum haben die Rechtsschulen den offensiven Dschihad zur Gemeinschaftspflicht erklärt? Haben die Gefährten und Gelehrten ihren eigenen Koran missverstanden?`,
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe und Historiker',
      text: `Stark weist darauf hin, dass das Christentum seine ersten drei Jahrhunderte als verfolgte Minderheit ohne staatliche Macht und ohne Armeen wuchs – durch Nächstenliebe, Fürsorge für Kranke in Seuchenzeiten und das Zeugnis der Märtyrer. Die rasche Ausbreitung des frühen Islam erfolgte dagegen wesentlich durch militärische Eroberung; die Bekehrung der eroberten Bevölkerungen zog sich über Jahrhunderte hin.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity', year: '1996', quote: `Das Christentum wuchs in den ersten drei Jahrhunderten ohne staatliche Förderung durch soziale Netzwerke, Nächstenliebe und das Zeugnis der Märtyrer.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kontext-9-1-bis-7',
      objection: `Lies 9:5 im Zusammenhang! 9:1–4 sprechen von Vertragsbrechern, 9:4 nimmt die Vertragstreuen aus, 9:6 gewährt Schutzsuchenden Asyl, 9:7 gebietet Vertragstreue. Es ging um einen konkreten Konflikt.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 1,
      answer: `Ich lese den Zusammenhang gern mit dir. Er zeigt: Sure 9 kündigt die Verträge mit den Götzendienern auf; befristete Verträge laufen bis zu ihrem Ende (9:4), dann beginnt der Kampf. Er endet nicht, wenn die Gegner die Angriffe einstellen, sondern wenn sie „bereuen, das Gebet verrichten und die Zakat entrichten" (9:5) – also den Islam annehmen. Selbst der Schutzsuchende in 9:6 bekommt Asyl, „damit er Allahs Wort hört". Das Ziel ist ein Arabien ohne Götzendiener mit Daueranspruch.`,
      followUps: [
        {
          id: 'bereuen-heisst-aufhoeren',
          objection: `„Wenn sie bereuen" heißt: wenn sie ihre Aggression bereuen und aufhören. Es geht nicht um Bekehrung.`,
          objectionBy: 'Muhammad Abdel Haleem',
          targetsPremise: 1,
          answer: `Der Vers nennt die Bedingung ausdrücklich: das Gebet verrichten (*aqāmū ṣ-ṣalāh*) und die Zakat entrichten (*ātawu z-zakāh*) – das sind Säulen des Islam, keine Waffenstillstandsbedingungen. Das Hadith in Bukhari 25 verbindet genau diese Elemente: „Mir wurde befohlen, gegen die Menschen zu kämpfen, bis sie bezeugen, dass es keinen Gott gibt außer Allah … das Gebet verrichten und die Zakat entrichten."`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '25', quote: `„Mir wurde befohlen, gegen die Menschen zu kämpfen, bis sie bezeugen, dass es keinen Gott gibt außer Allah und dass Muhammad der Gesandte Allahs ist, das Gebet verrichten und die Zakat entrichten."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:25', note: 'Parallel in Sahih Muslim 22.' },
          ],
          followUps: [
            {
              id: 'an-nas-begrenzt',
              objection: `„Die Menschen" (*an-nās*) in Bukhari 25 meint die arabischen Götzendiener jener Zeit, nicht alle Menschen.`,
              objectionBy: 'Javed Ahmad Ghamidi',
              targetsPremise: 1,
              answer: `Das ist eine mögliche, von manchen vertretene Lesart. Aber selbst wenn man sie annimmt, bleibt 9:29 für die Schriftbesitzer – Juden und Christen: Kampf, „bis sie die Dschizya in Demut entrichten". Die Einschränkung auf arabische Götzendiener entlastet also gerade uns Christen nicht.`,
              followUps: [
                {
                  id: 'itmam-al-hujja',
                  objection: `Nach Ghamidi galten 9:5 und 9:29 nur für die unmittelbaren Adressaten Mohammeds – als göttliche Strafe nach der „Vollendung des Beweises" (*itmām al-ḥujja*), wie bei Noah oder Lot. Heute gelten sie nicht mehr.`,
                  objectionBy: 'Javed Ahmad Ghamidi',
                  targetsPremise: 3,
                  answer: `Das ist ein ernsthafter Reformversuch, und ich achte ihn. Aber sieh seinen Preis: Er erklärt Mohammeds Kriege zu einem einmaligen göttlichen Strafgericht, das durch Menschen vollstreckt wurde – also genau das, was Muslime an der Landnahme Kanaans oft kritisieren. Und er ist eine Minderheitenposition, die der klassischen Lehre und dem Handeln der Gefährten widerspricht, die nach Mohammeds Tod weiter eroberten.`,
                  questionsBack: [
                    `Wenn die Verse nur für Mohammeds Zeitgenossen galten – haben Abu Bakr und ʿUmar sie dann missverstanden, als sie Syrien, Persien und Ägypten eroberten?`,
                  ],
                  followUps: [
                    {
                      id: 'eroberungen-politisch',
                      objection: `Die Eroberungen der Gefährten waren politische Expansion, keine religiöse Pflicht.`,
                      objectionBy: 'Mustafa Akyol',
                      targetsPremise: 3,
                      answer: `Die Quellen deuten sie religiös. Schon der Brief des Propheten an Herakleios enthält die Formel *aslim taslam* – „Werde Muslim, so bist du sicher" (Bukhari 7). Muslim 1731 überliefert die Anweisung an die Heerführer: zuerst zum Islam einladen, sonst die Dschizya fordern, sonst kämpfen. Die frühen Historiker wie at-Tabari erzählen die Eroberungen als Dschihad.`,
                      sources: [
                        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '7', quote: `Brief des Propheten an Herakleios: „Werde Muslim, so wirst du sicher sein (aslim taslam), und Allah wird dir deinen Lohn doppelt geben."`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:7' },
                        { kind: 'hadith', work: 'Sahih Muslim', ref: '1731 a', quote: `Wenn ihr auf eure Feinde trefft, ladet sie zu drei Dingen ein: zum Islam; wenn sie ablehnen, fordert die Dschizya; wenn sie auch das ablehnen, sucht Allahs Hilfe und kämpft gegen sie.`, status: 'paraphrase', note: 'Bericht des Burayda; wörtliche Fassung im Original prüfen.' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'vers-9-13-angefangen',
          objection: `9:13 sagt ausdrücklich: „Sie haben zuerst gegen euch angefangen." Der Krieg war also Verteidigung gegen Angreifer.`,
          objectionBy: 'Muhammad Abdel Haleem',
          targetsPremise: 1,
          answer: `9:13 bezieht sich auf frühere Vertragsbrüche der Mekkaner – das nehme ich als historischen Anlass von 9:5 ernst. Aber die klassischen Juristen leiteten daraus keine Beschränkung ab, sondern eine allgemeine Regel. Und 9:29 nennt überhaupt kein Angriffskriterium, sondern Glaubenskriterien.`,
          followUps: [
            {
              id: 'juristen-aus-kontext',
              objection: `Dann haben die Juristen die Verse eben aus dem Kontext gerissen. Das ist ihr Fehler, nicht der des Korans.`,
              objectionBy: 'Mustafa Akyol',
              targetsPremise: 3,
              answer: `Dann liegt der Fehler nicht bei westlichen Kritikern, sondern bei der gesamten klassischen Tradition: Ibn Kathir mit ad-Dahhak und Ibn ʿAbbas, den Rechtsschulen, den Handbüchern wie *ʿUmdat as-sālik*. Wer legt den Koran verbindlich aus, wenn tausend Jahre Gelehrsamkeit ihn falsch verstanden haben?`,
              followUps: [
                {
                  id: 'augustinus-auch-imperial',
                  objection: `Die Gelehrten waren von imperialen Umständen geprägt – genauso wie Augustinus mit seiner Lehre vom gerechten Krieg.`,
                  objectionBy: 'Jonathan A. C. Brown',
                  targetsPremise: 2,
                  answer: `Umstände prägen, das gestehe ich zu. Aber der Unterschied ist entscheidend: Die christliche Lehre vom gerechten Krieg musste *gegen* den Wortlaut der Bergpredigt argumentieren und wollte Krieg *begrenzen*. Die islamischen Juristen argumentierten *aus* dem Wortlaut von 9:5 und 9:29. Christliche Reformer können sich auf ihren Gründer berufen – muslimische Reformer müssen gegen die letzte Offenbarung argumentieren.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vers-9-29-tabuk',
      objection: `9:29 gehört zum Feldzug nach Tabuk. Die Byzantiner hatten sich an der Grenze gesammelt und bedrohten Medina. Das war Verteidigung.`,
      objectionBy: 'Jonathan A. C. Brown',
      targetsPremise: 1,
      answer: `Selbst wenn Tabuk der Anlass war: Der Vers bestimmt seine Gegner nach ihrem Glauben – „die nicht an Allah glauben … und nicht der Religion der Wahrheit folgen, von denen, denen die Schrift gegeben wurde" – und sein Ziel ist die Dschizya „in Demut". Er sagt nicht: „Kämpft gegen die Byzantiner, die euch angreifen."`,
      followUps: [
        {
          id: 'dschizya-wehrsteuer',
          objection: `Die Dschizya war eine faire Steuer anstelle des Militärdienstes. Muslime zahlten die Zakat, Nichtmuslime die Dschizya und wurden dafür beschützt.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Teilweise richtig: Die Dschizya befreite vom Kriegsdienst, und Muslime zahlten die Zakat – das gestehe ich zu. Aber der Vers fügt „in Demut" hinzu, und sie war mit einem Status der Unterordnung verbunden, der im sogenannten Pakt ʿUmars ausgestaltet wurde (keine neuen Kirchen, keine öffentlichen Kreuze, Kleidervorschriften). Die Kopten zahlten diese Steuer bis ins 19. Jahrhundert.`,
          followUps: [
            {
              id: 'saghirun-unterwerfung',
              objection: `*Ṣāghirūn* heißt nur, dass sie sich der Rechtsordnung unterwerfen, nicht Demütigung. So verstand es schon asch-Schafiʿi.`,
              objectionBy: 'Muhammad Abdel Haleem',
              answer: `Es stimmt, dass asch-Schafiʿi *ṣaghār* als Unterstellung unter das islamische Recht deutete – diese mildere Lesart hat klassische Wurzeln, das gestehe ich zu. Andere Ausleger, etwa az-Zamachschari, beschrieben dagegen demütigende Formen der Übergabe. Aber selbst nach der milden Lesart bleibt: Ein von Gott gebotener, dauerhaft untergeordneter Rechtsstatus für Juden und Christen.`,
              sources: [
                { kind: 'hadith', author: 'az-Zamachschari', work: 'al-Kashshaf', ref: 'zu 9:29', year: '12. Jh.', quote: `Beschreibung einer demütigenden Form der Dschizya-Übergabe, bei der der Zahlende steht und der Einnehmer sitzt.`, status: 'unverified', note: 'Oft zitierte Stelle; Wortlaut im Original prüfen.' },
              ],
              followUps: [
                {
                  id: 'dhimmis-besser-als-juden-europa',
                  objection: `Juden und Christen lebten unter dem Islam besser als die Juden im christlichen Europa – denk an Pogrome und Ghettos.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Zu manchen Zeiten stimmt das, und Christen müssen sich ihrer Verbrechen an Juden schämen. Aber ein Vergleich rechtfertigt nichts. Die Kirchen haben die Judenverfolgung verurteilt und widerrufen; christliche Reformer konnten sich dabei auf das Neue Testament berufen. Die Frage an dich: Kann 9:29 widerrufen werden – oder nur umgedeutet, weil es ewiges Gotteswort ist?`,
                  followUps: [
                    {
                      id: 'heute-nur-verteidigung',
                      objection: `Wir Muslime heute verstehen 9:29 so, dass es nur im Verteidigungsfall gilt.`,
                      objectionBy: 'Mustafa Akyol',
                      answer: `Das begrüße ich aufrichtig. Und ich frage freundlich zurück: Auf welche Textgrundlage stützt du dich – und wird diese Sicht in den Lehrbüchern vertreten, die an den großen islamischen Hochschulen unterrichtet werden? Die englische Ausgabe von *ʿUmdat as-sālik*, die den Kampf gegen Juden und Christen bis zur Dschizya beschreibt, trägt die Bestätigung der Islamic Research Academy der al-Azhar. Eine Reform braucht mehr als private Lesarten.`,
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
      id: 'friedensverse-beschraenken',
      objection: `Die Friedensverse beschränken alle Kriegsverse: „Kämpft gegen die, die gegen euch kämpfen, doch übertretet nicht" (2:190); „Wenn sie sich dem Frieden zuneigen, so neige auch du dich ihm zu" (8:61).`,
      objectionBy: 'Mustafa Akyol',
      targetsPremise: 3,
      answer: `Das sind gute Verse, und ich wünschte, sie bestimmten die Auslegung. Aber klassische Ausleger sahen das oft umgekehrt: Ibn Kathir überliefert zu 8:61, dass Ibn ʿAbbas, Mujahid, ʿIkrima, al-Hasan, Qatada und andere den Vers durch den Schwertvers für aufgehoben hielten. Fair ist hinzuzufügen: Ibn Kathir selbst widerspricht dieser Ansicht und sieht 8:61 als an Bedingungen geknüpft.`,
      sources: [
        { kind: 'koran', work: 'Sure 8 (al-Anfal)', ref: '8:61', quote: `Und wenn sie sich dem Frieden zuneigen, so neige auch du dich ihm zu und verlass dich auf Allah.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/8/61' },
        { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsir al-Qur\'an al-ʿAzim', ref: 'zu 8:61', year: '14. Jh.', quote: `Ibn ʿAbbas, Mujahid, Zayd ibn Aslam, ʿAta, ʿIkrima, al-Hasan und Qatada sagten, dieser Vers sei durch den Schwertvers in Baraʾa aufgehoben; Ibn Kathir selbst hält ihn für nicht aufgehoben, sondern an die Lage gebunden.`, status: 'paraphrase', note: 'Nach der gekürzten englischen Ausgabe; Wortlaut im Original prüfen.' },
      ],
      followUps: [
        {
          id: 'naskh-umstritten',
          objection: `Die Abrogation (*naskh*) ist unter Gelehrten umstritten. Viele lehnen sie für diese Verse ab.`,
          objectionBy: 'Jonathan A. C. Brown',
          targetsPremise: 3,
          answer: `Das stimmt – über Umfang und Fälle der Abrogation wurde viel gestritten. Aber das Prinzip selbst ist koranisch (2:106; 16:101) und von der großen Mehrheit anerkannt. Und wenn Verse in Spannung stehen, hat nach der klassischen Lehre der spätere Vorrang. Sure 9 gehört nach der islamischen Überlieferung zu den letzten Suren.`,
          sources: [
            { kind: 'koran', work: 'Sure 2 (al-Baqara)', ref: '2:106', quote: `Was Wir an Versen aufheben oder in Vergessenheit geraten lassen – Wir bringen etwas Besseres als sie oder etwas Gleichwertiges.`, original: `mā nansakh min āyatin aw nunsihā naʾti bi-khayrin minhā aw mithlihā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/2/106' },
          ],
          followUps: [
            {
              id: 'chronologie-unsicher',
              objection: `Die Chronologie der Suren ist unsicher. Darauf kann man kein Argument bauen.`,
              objectionBy: 'Mustafa Akyol',
              targetsPremise: 3,
              answer: `Die traditionelle Chronologie stammt aus derselben islamischen Überlieferung, auf die sich Muslime sonst stützen; sie hier in Zweifel zu ziehen, trifft die Tradition insgesamt. Außerdem verweist Sure 9 inhaltlich auf das Ende von Mohammeds Wirken: Tabuk, die „Heuchler", die Aufkündigung der Verträge. Darüber sind sich muslimische und westliche Forscher weitgehend einig.`,
              followUps: [
                {
                  id: 'und-die-bibel',
                  objection: `Und die Bibel? Das Alte Testament ist voller Kriegsbefehle – Josua, Samuel, Deuteronomium. Warum misst du nur den Koran?`,
                  objectionBy: 'Shabir Ally',
                  targetsPremise: 2,
                  answer: `Ich messe beide – und gebe zu, dass das AT harte Texte enthält. Aber die Richtung ist entgegengesetzt: Die Kriegsgebote im AT betrafen bestimmte Völker in einer begrenzten Zeit, und das *letzte* Wort, das Evangelium, verwirft das Schwert. Im Koran läuft es umgekehrt: von der Geduld in Mekka zum Kampf in Medina, und die letzte Sure ist die härteste.`,
                  detail: `Siehe Claims „Die Bibel ist gewalttätiger als der Koran" und „Gott befahl Völkermord an den Kanaanitern".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'terroristen-missbrauchen',
      objection: `Terroristen missbrauchen diese Verse. Die überwältigende Mehrheit der Gelehrten lehnt Terror ab. Du stellst dich auf die Seite der Extremisten.`,
      objectionBy: 'Hamza Yusuf',
      answer: `Ich stimme zu: Das klassische Recht verbot die Tötung von Frauen und Kindern (Bukhari 3015), und Gott sei Dank lehnt die Mehrheit der Gelehrten Terror ab. Aber die Frage ist nicht Terror gegen Recht, sondern ob das klassische Recht selbst einen offensiven Krieg zur Ausbreitung islamischer Herrschaft vorsah. Das tat es – asch-Schafiʿi, die Handbücher, Ibn Khaldun.`,
      followUps: [
        {
          id: 'historische-praxis',
          objection: `Der offensive Dschihad war die Praxis mittelalterlicher Großreiche – keine ewige religiöse Pflicht.`,
          objectionBy: 'Jonathan A. C. Brown',
          answer: `Die Rechtsschulen haben ihn ausdrücklich als religiöse Gemeinschaftspflicht (*farḍ kifāya*) bestimmt, nicht nur als Staatspraxis beschrieben. *ʿUmdat as-sālik* sagt: Der Kalif bekämpft Juden, Christen und Zoroastrier, bis sie Muslime werden oder die Kopfsteuer zahlen. Ibn Khaldun stellt das ausdrücklich als Besonderheit des Islam dar.`,
          followUps: [
            {
              id: 'ibn-khaldun-beschrieb-nur',
              objection: `Ibn Khaldun hat nur beschrieben, nicht vorgeschrieben. Er war Historiker.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Er war auch malikitischer Richter und beschreibt das Recht seiner eigenen Religion. Bemerkenswert ist sein Vergleich: Die anderen Religionsgemeinschaften hätten keine universale Sendung, und der heilige Krieg sei für sie nur zur Verteidigung erlaubt. Ein muslimischer Jurist des 14. Jahrhunderts bezeugt damit, dass das Christentum keinen Auftrag zum Glaubenskrieg kennt.`,
              followUps: [
                {
                  id: 'voelkerrecht-heute',
                  objection: `Heute gilt das Völkerrecht. Alle islamischen Staaten haben die UN-Charta unterschrieben. Das klassische Dschihad-Recht ist Geschichte.`,
                  objectionBy: 'Mustafa Akyol',
                  answer: `Das begrüße ich. Die Frage ist die theologische Grundlage: Ist das eine echte Neuauslegung oder ein Waffenstillstand (*hudna*) unter heutigen Umständen? Die Kairoer Erklärung der Menschenrechte im Islam (1990) stellt alle genannten Rechte unter den Vorbehalt der Scharia (Art. 24 und 25). Solange die Scharia der letzte Maßstab bleibt, bleibt auch ihre klassische Dschihad-Lehre im Hintergrund.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Organisation der Islamischen Konferenz', work: 'Kairoer Erklärung der Menschenrechte im Islam', ref: 'Art. 24–25', year: '1990', quote: `Alle in dieser Erklärung genannten Rechte und Freiheiten unterstehen der islamischen Scharia; die Scharia ist die einzige Quelle für die Auslegung jedes Artikels.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vers-9-111-evangelium',
      objection: `9:111 zeigt doch: Das ist keine Besonderheit des Islam. Allah sagt, dieses Versprechen an die Kämpfer stehe „in der Tora, im Evangelium und im Koran".`,
      objectionBy: 'verbreiteter muslimischer Einwand',
      targetsPremise: 2,
      answer: `Genau hier irrt der Vers. Im Evangelium gibt es keine Verheißung des Paradieses für die, die „kämpfen, töten und getötet werden". Das Evangelium sagt das Gegenteil: „Wer das Schwert nimmt, der soll durchs Schwert umkommen" (Mt 26,52). Entweder enthielt das Evangelium des 7. Jahrhunderts diese Verheißung – dafür gibt es in keiner Handschrift eine Spur –, oder der Koran irrt über das Evangelium.`,
      followUps: [
        {
          id: 'urspruengliches-injil',
          objection: `Das ursprüngliche Injil Jesu ist verloren. Darin stand diese Verheißung.`,
          objectionBy: 'Zakir Naik',
          targetsPremise: 2,
          answer: `Dann ergibt 5:47 keinen Sinn, wo die Christen zur Zeit Mohammeds aufgefordert werden, nach dem zu urteilen, was Gott „darin" herabgesandt hat. Und Jesu Lehre über Feinde ist mehrfach unabhängig bezeugt: in Matthäus und Lukas (Mt 5,44; Lk 6,27–28), in der Didache (1,3) und bei Justin – alle lange vor Mohammed.`,
          detail: `Siehe Claim „Das Injil ist nicht das Neue Testament, sondern ein verlorenes Buch Jesu".`,
          followUps: [
            {
              id: 'tora-meint-landnahme',
              objection: `Mit „Tora" meint der Koran die Verheißungen an Israels Kämpfer bei der Landnahme (Num 31; Dtn 20). Das ist doch biblisch!`,
              objectionBy: 'Shabir Ally',
              targetsPremise: 2,
              answer: `Für die Tora kann man an die Landnahme denken – begrenzt auf Kanaan und die Generation Josuas. Aber der Vers nennt ausdrücklich auch das *Evangelium*. Dort findest du keine einzige Verheißung an Kämpfer – nur Verheißungen an Verfolgte und Friedensstifter (Mt 5,9–12).`,
              followUps: [
                {
                  id: 'mt-10-34-schwert-bringen',
                  objection: `Mt 10,34: „Ich bin nicht gekommen, Frieden zu bringen, sondern das Schwert." Da hast du dein Evangelium!`,
                  objectionBy: 'Zakir Naik',
                  targetsPremise: 2,
                  answer: `Der Zusammenhang spricht von Spaltung in Familien um des Glaubens willen (Mt 10,35–36); Lukas sagt dafür „Zwietracht" (Lk 12,51). Und die Jünger sind in diesem Kapitel die Verfolgten, nicht die Verfolger: „Ich sende euch wie Schafe mitten unter die Wölfe" (Mt 10,16). Keine Verheißung an die, die töten – sondern an die, die getötet werden.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie endet 9:5 – mit „wenn sie aufhören zu kämpfen" oder mit „wenn sie das Gebet verrichten und die Zakat entrichten"?`,
    `Welche Kriterien nennt 9:29 für die Gegner – militärische oder religiöse?`,
    `Wenn die Verse nur für das 7. Jahrhundert galten – warum haben die vier Rechtsschulen den offensiven Dschihad zur Gemeinschaftspflicht erklärt?`,
    `Wo im Evangelium steht die Verheißung aus 9:111?`,
    `Welche Offenbarung ist im Islam die letzte – die mekkanischen Geduldsverse oder Sure 9?`,
  ],
  avoid: [
    `Nicht 9:5 ohne seinen Kontext zitieren. Lies 9:1–7 vollständig – gerade der Kontext stützt das Argument.`,
    `Nicht behaupten, jeder Muslim müsse 9:5 heute als Kampfbefehl verstehen. Viele Muslime lehnen das aufrichtig ab.`,
    `Nicht die alttestamentlichen Kriegstexte verschweigen oder kleinreden. Wer ehrlich über Josua spricht, wird glaubwürdig.`,
    `Nicht von „dem" Islam als monolithischem Block sprechen. Benenne die klassische Mehrheitslehre und die Reformpositionen fair.`,
  ],
  concessions: [
    `9:5 hatte einen konkreten historischen Anlass (Vertragsbrüche arabischer Stämme), und Sure 9 enthält Einschränkungen (9:4; 9:6; 9:7).`,
    `Die Abrogationslehre ist in ihren Einzelheiten unter muslimischen Gelehrten umstritten; Ibn Kathir selbst hielt manche Friedensverse nicht für aufgehoben.`,
    `Das klassische Recht kannte wichtige Begrenzungen: Schonung von Frauen, Kindern und Mönchen, Einladung vor dem Kampf, Bindung an einen legitimen Imam.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Rudolph Peters', work: 'Jihad in Classical and Modern Islam: A Reader', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David Cook', work: 'Understanding Jihad', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Answering Jihad: A Better Way Forward', year: '2016', status: 'paraphrase' },
    { kind: 'gegner', author: 'Muhammad Abdel Haleem', work: 'Understanding the Qur\'an: Themes and Style', year: '1999', status: 'paraphrase', note: 'Die beste kontextualistische Gegenposition.' },
    { kind: 'fachliteratur', author: 'Majid Khadduri', work: 'War and Peace in the Law of Islam', year: '1955', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Islam', 'Schwertvers', 'Dschihad', 'Abrogation', 'Dschizya', 'Koranauslegung'],
  related: [
    'islam-gewalt-scharia/dschihad-innerer-kampf',
    'islam-gewalt-scharia/bibel-gewalttaetiger',
    'islam-gewalt-scharia/islam-heisst-frieden',
    'islam-dilemma/injil-ist-nicht-das-nt',
    'islam-dilemma/das-islamische-dilemma',
    'at-ethik/kanaaniter-voelkermord',
    'religion-gewalt/religion-verursacht-kriege',
    'islam-mohammed/mohammed-wahrer-prophet',
  ],
};

export default claim;
