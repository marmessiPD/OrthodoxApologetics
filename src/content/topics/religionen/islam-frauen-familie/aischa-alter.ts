import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'aischa-alter',
  title: `„Aischas Heiratsalter war damals normal."`,
  proponents: [
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University', work: 'Misquoting Muhammad (2014); Beiträge zur Frage von Aischas Alter' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Sira-Vorträge über die Ehen des Propheten' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten über Aischas Alter und „Präsentismus"' },
    { name: 'Revisionistische muslimische Autoren', role: 'z. B. Muhammad Ali (Lahore-Ahmadiyya), Habib ur-Rahman Kandhlawi', work: 'Thesen, Aischa sei bei der Heirat älter gewesen' },
  ],
  steelman: `„Im 7. Jahrhundert heirateten Mädchen in Arabien – wie in fast allen vormodernen Gesellschaften – um die Zeit der Geschlechtsreife. Auch in Rom lag das gesetzliche Mindestalter für Mädchen bei zwölf Jahren, und europäische Adelige wurden noch im Mittelalter als Kinder verheiratet. Kein Zeitgenosse – weder die Quraysch noch die Juden noch die Christen, die Mohammed sonst alles vorwarfen – hat diese Ehe kritisiert; das zeigt, dass sie als normal galt. Aischa wurde eine selbstbewusste, glückliche Frau und eine der größten Gelehrten des Islam, die Tausende Hadithe überlieferte. Wer Mohammed mit den Maßstäben des 21. Jahrhunderts beurteilt, begeht den Fehler des Präsentismus. Und manche Forscher zeigen sogar, dass Aischa wahrscheinlich älter war, als die Hadithe sagen."`,
  biblical: {
    summary: `Die Bibel nennt kein Heiratsalter, aber sie setzt einen Maßstab für den Umgang mit Kindern: Jesus stellt ein Kind in die Mitte, segnet die Kinder (Mk 10,13–16) und warnt mit den schärfsten Worten vor jedem, der „dieser Geringsten einen ärgert" (Mt 18,6). Die Ehe ist in der Bibel ein Bund zwischen Mann und Frau, die „ein Fleisch" werden (Gen 2,24), mit gegenseitiger Hingabe (1 Kor 7,3–4) – das setzt Mündigkeit voraus. Die Bibel stellt keinen Menschen außer Christus als vollkommenes Vorbild für alle Zeiten hin; darum müssen Christen kein zeitbedingtes Verhalten biblischer Gestalten verteidigen.`,
    detail: `**Rebekka und Maria:** Muslimische Apologeten verweisen auf eine Berechnung des mittelalterlichen jüdischen Auslegers Raschi (11. Jh.), Rebekka sei bei ihrer Heirat drei Jahre alt gewesen. Der Bibeltext zeigt dagegen eine junge Frau, die zehn Kamele tränkt (Gen 24,19–20) und selbst gefragt wird, ob sie mitgehen will (Gen 24,57–58). Marias Alter nennt die Bibel nicht; die Angabe, sie sei bei der Verlobung zwölf gewesen, stammt aus dem apokryphen *Protevangelium des Jakobus* (2. Jh.), das Josef als Beschützer einer gottgeweihten Jungfrau zeigt – und die Kirche bekennt Maria als immerwährende Jungfrau.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '10,14', quote: `Lasset die Kindlein zu mir kommen und wehret ihnen nicht; denn solcher ist das Reich Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '18,6', quote: `Wer aber ärgert dieser Geringsten einen, die an mich glauben, dem wäre besser, daß ein Mühlstein an seinen Hals gehängt und er ersäuft würde im Meer, da es am tiefsten ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '24,57–58', quote: `Laßt uns die Dirne rufen und fragen, was sie dazu sagt. Und riefen die Rebekka und sprachen zu ihr: Willst du mit diesem Manne ziehen? Sie antwortete: Ja, ich will mit ihm.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Kirche sieht in der Ehe ein Sakrament, in dem Mann und Frau einander in freier Zustimmung das Ja-Wort geben; die Zustimmung beider ist für die Gültigkeit wesentlich. Das kirchliche Recht übernahm in der Spätantike zunächst römische Altersgrenzen, die im Laufe der Zeit angehoben wurden – ohne dass dies dem Vorbild Christi widersprach. In der koptischen Kirche legt das kirchliche Familienrecht Mindestalter fest, die im Einklang mit dem staatlichen Recht stehen. Kinder gelten als besondere Schutzbefohlene der Gemeinde (Mt 18,10).`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '18,10', quote: `Sehet zu, daß ihr nicht jemand von diesen Kleinen verachtet. Denn ich sage euch: Ihre Engel im Himmel sehen allezeit das Angesicht meines Vaters im Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die kanonischen Hadith-Sammlungen berichten übereinstimmend, dass Mohammed Aischa mit sechs Jahren heiratete und die Ehe mit neun Jahren vollzog (Bukhari 5133, 5134, 3896; Muslim 1422). Klassische muslimische Gelehrte haben diese Angaben über 1.200 Jahre als authentisch angenommen und daraus Rechtsregeln abgeleitet. Seit dem 20. Jahrhundert vertreten einige muslimische Autoren, Aischa sei älter gewesen (Berechnungen über das Alter ihrer Schwester Asmaʾ u. a.). Joshua Little (Dissertation, Oxford 2022) argumentiert mit der Isnad-cum-Matn-Methode, der Bericht gehe auf Hisham ibn ʿUrwa in seiner irakischen Zeit (nach ca. 754) zurück und fehle in den frühesten medinensischen Werken. Traditionelle Gelehrte wie Jonathan Brown halten an der Überlieferung fest und verteidigen sie historisch-kulturell.`,
    detail: `**Bukharis Kapitelüberschrift:** Bukhari stellt 5133 unter die Überschrift „Die Verheiratung der eigenen jungen Kinder" und verweist dabei auf 65:4 („und derjenigen, die noch nicht menstruiert haben"). Klassische Ausleger wie at-Tabari und Ibn Kathir deuteten diese Wendung auf Mädchen, die wegen ihres jungen Alters noch nicht menstruierten. Das klassische Recht erlaubte deshalb dem Vater, eine minderjährige Tochter zu verheiraten; der Vollzug sollte erfolgen, wenn sie körperlich dazu fähig sei.

**Heutige Gesetzgebung:** Zahlreiche mehrheitlich muslimische Staaten haben inzwischen Mindestalter festgelegt, etwa Marokko mit der Familienrechtsreform (Moudawana) von 2004 auf 18 Jahre.`,
    sources: [
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5133', quote: `Aischa berichtet, dass der Prophet sie heiratete, als sie sechs Jahre alt war, und die Ehe mit ihr vollzog, als sie neun Jahre alt war; dann blieb sie neun Jahre bei ihm.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:5133', note: 'Kapitel „Die Verheiratung der eigenen jungen Kinder".' },
      { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5134', quote: `Paralleler Bericht über die Heirat mit sechs und den Vollzug mit neun Jahren.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:5134' },
      { kind: 'hadith', work: 'Sahih Muslim', ref: '1422', quote: `Aischa: Er heiratete mich mit sieben (in anderer Fassung sechs) Jahren, vollzog die Ehe mit neun, und ich war achtzehn, als er starb.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Joshua J. Little', work: 'The Hadith of ʿĀʾišah\'s Marital Age: A Study in the Evolution of Early Islamic Historical Memory (Dissertation, University of Oxford)', year: '2022', quote: `Der Bericht über Aischas Heiratsalter lässt sich auf Hisham ibn ʿUrwa in seiner irakischen Zeit zurückführen und fehlt in den frühesten medinensischen Quellen.`, status: 'paraphrase', note: 'Nach Berichten über die Dissertation (u. a. New Lines Magazine); im Original prüfen.' },
    ],
  },
  quickAnswer: `Ich möchte Aischa nicht herabsetzen – sie war eine bedeutende Frau. Aber die Frage ist nicht, ob die Ehe im 7. Jahrhundert üblich war, sondern ob Mohammed das Vorbild „für alle Zeiten" ist (33:21). Wenn ja, bleibt die Ehe mit einem neunjährigen Mädchen (Bukhari 5133) ein Vorbild – und das klassische Recht hat genau das daraus abgeleitet. Wenn sie nur zeitgebunden war, ist das Vorbild nicht zeitlos. Und wer die Hadithe dazu für gefälscht erklärt, gibt zu, dass ein Sahih-Bericht über die Familie des Propheten falsch sein kann. Jesus dagegen segnete die Kinder und stellte sie unter Gottes besonderen Schutz (Mk 10,14; Mt 18,6).`,
  keyPoints: [
    `**Die Quellen sind eindeutig:** Bukhari 5133, 5134, 3896; Muslim 1422 – sechs bei der Heirat, neun beim Vollzug. Das ist keine christliche Erfindung.`,
    `**Das Vorbild-Dilemma:** Zeitlos gut (33:21) – dann heute nachahmenswert; zeitgebunden – dann ist das Vorbild begrenzt.`,
    `**Das klassische Recht:** Bukharis Kapitelüberschrift verweist auf 65:4; die Rechtsschulen erlaubten die Verheiratung Minderjähriger durch den Vater.`,
    `**Das Hadith-Dilemma:** Wer den Bericht (mit Joshua Little) für unhistorisch hält, räumt ein, dass die Isnad-Methode in einem zentralen Fall versagt hat.`,
    `**Tu-quoque-Argumente tragen nicht:** Rebekkas „drei Jahre" stammen aus einer mittelalterlichen Berechnung, Marias Alter aus einem Apokryphon – und keine von beiden ist ein christliches Vorbild für Kinderehe.`,
    `**Christliche Ethik:** Die Kinder stehen unter Christi besonderem Schutz (Mt 18,6.10); die Ehe setzt freie, mündige Zustimmung voraus.`,
  ],
  argument: {
    name: 'Das Aischa-Dilemma',
    summary: 'Ob man die Hadithe annimmt oder verwirft – die Behauptung eines zeitlosen Vorbilds gerät in Schwierigkeiten.',
    premises: [
      {
        text: `P1: Die als zuverlässigst geltenden Hadith-Sammlungen berichten, dass Mohammed die Ehe mit Aischa vollzog, als sie neun Jahre alt war.`,
        support: `Bukhari 5133, 5134, 3896; Muslim 1422 – über 1.200 Jahre von der Mehrheit der Gelehrten als authentisch angenommen.`,
      },
      {
        text: `P2: Mohammed gilt im Islam als vollkommenes Vorbild für alle Zeiten (33:21).`,
        support: `Das ist die Grundlage der Sunna als Rechtsquelle.`,
        sources: [
          { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:21', quote: `Ihr habt ja im Gesandten Allahs ein schönes Vorbild.`, original: `uswatun ḥasanatun`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/33/21' },
        ],
      },
    ],
    conclusion: `Entweder ist der Bericht wahr – dann gehört die Ehe mit einem neunjährigen Mädchen zum Vorbild für alle Zeiten, was der Schutz von Kindern heute nicht zulässt. Oder er ist falsch – dann hat die Isnad-Wissenschaft in einem zentralen Fall versagt, und die Zuverlässigkeit der Sahih-Sammlungen steht insgesamt in Frage.`,
    horns: [
      { label: 'Horn A: Der Bericht ist authentisch', text: `Dann ist die Ehe Teil des prophetischen Vorbilds; die klassische Rechtsprechung hat daraus die Erlaubnis der Kinderehe abgeleitet. Wer das heute ablehnt, misst Mohammed an einem höheren Maßstab.` },
      { label: 'Horn B: Der Bericht ist nicht authentisch', text: `Dann enthielten Bukhari und Muslim über 1.000 Jahre einen falschen Bericht über die Familie des Propheten, den die gesamte Gelehrsamkeit nicht erkannte – und man muss erklären, warum man den übrigen Sahih-Berichten trauen soll.` },
    ],
  },
  voices: [
    {
      person: 'markus',
      role: 'als Evangelist, der Jesu Umgang mit Kindern bezeugt',
      text: `Markus berichtet, wie Jesus „unwillig" wurde, als die Jünger Kinder abwiesen, sie in die Arme nahm, ihnen die Hände auflegte und sie segnete (Mk 10,13–16). In einer Welt, in der Kinder wenig zählten, machte Jesus sie zum Bild für das Reich Gottes. Wer Christus als Vorbild hat, wird Kinder schützen und ihnen Zeit zum Kindsein lassen.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '10,16', quote: `Und er herzte sie und legte die Hände auf sie und segnete sie.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der diese Frage selbst durchlitt',
      text: `Qureshi beschreibt, wie er als junger Muslim die Ehe mit Aischa mit den üblichen Argumenten verteidigte – „damals normal", „frühere Reife" – und wie ihn erst das Nachdenken über die Behauptung des „Vorbilds für alle Zeiten" verunsicherte. Er warnt Christen ausdrücklich davor, mit Schimpfwörtern zu arbeiten: Das verletze Muslime, die ihren Propheten lieben, und verhindere jedes Gespräch. Die Frage solle ehrlich, aber mit Mitgefühl gestellt werden.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über seine eigene Verteidigung der Ehe mit Aischa und das spätere Ringen mit der Frage nach dem zeitlosen Vorbild.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'david-wood',
      role: 'als Debattierer über die Sahih-Berichte',
      text: `Wood weist darauf hin, dass die Aischa-Berichte nicht in obskuren Quellen stehen, sondern in den beiden Sammlungen, die sunnitische Muslime für die zuverlässigsten Bücher nach dem Koran halten. Er fragt muslimische Gesprächspartner, ob sie diese Berichte für wahr halten – und wenn sie sie verwerfen, nach welchem Kriterium, das sie nicht nur auf unbequeme Berichte anwenden.`,
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger über Ehe und Kindererziehung',
      text: `Chrysostomus schrieb eine eigene Schrift über die Erziehung der Kinder und sah die Familie als „kleine Kirche". Er mahnte Eltern, ihre Kinder mit Geduld zur Tugend zu führen und sie als Gottes anvertrautes Gut zu behandeln. Die Ehe verstand er als Bund in Liebe und gegenseitiger Achtung, in dem der Mann sein Leben für die Frau hingeben soll – ein Verständnis, das die Reife beider Partner voraussetzt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über Hoffart und Kindererziehung (De inani gloria et de educandis liberis)', year: 'um 390', quote: `Eltern sollen ihre Kinder wie Statuen formen und sie zur Tugend erziehen, als ein Gut, das Gott ihnen anvertraut hat.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'damals-normal',
      objection: `Damals war das völlig normal. Niemand – nicht einmal seine Feinde, die ihm sonst alles vorwarfen – hat diese Ehe kritisiert.`,
      objectionBy: 'Jonathan A. C. Brown',
      targetsPremise: 2,
      answer: `Dass die Zeitgenossen schwiegen, zeigt, dass so etwas im Arabien des 7. Jahrhunderts akzeptiert war – das gestehe ich zu. Aber genau darin liegt das Problem: Wenn die Ehe kulturell bedingt war, ist sie zeitgebunden. Der Koran stellt Mohammed jedoch als Vorbild für alle Zeiten hin (33:21). Entweder ist die Ehe zeitlos gut – dann wäre sie heute nachahmenswert –, oder sie war nur damals akzeptabel – dann hat das Vorbild Grenzen. Wer entscheidet, wo?`,
      followUps: [
        {
          id: 'prinzip-nach-pubertaet',
          objection: `Zeitlos ist das Prinzip, nicht das Detail: Heirat nach der Geschlechtsreife und mit Zustimmung.`,
          objectionBy: 'Yasir Qadhi',
          targetsPremise: 2,
          answer: `Bukhari 5133 nennt neun Jahre, und Bukhari stellt den Bericht unter die Überschrift „Die Verheiratung der eigenen jungen Kinder", mit Verweis auf 65:4. Das klassische Recht erlaubte dem Vater, eine Tochter vor der Pubertät zu verheiraten (*ijbār*), mit Vollzug bei körperlicher Fähigkeit. Das „Prinzip", das du nennst, ist eine moderne Reform – die ich begrüße –, nicht die klassische Lesart.`,
          followUps: [
            {
              id: 'vers-65-4-anders',
              objection: `65:4 meint Frauen, deren Menstruation aus gesundheitlichen Gründen ausbleibt – nicht Kinder.`,
              objectionBy: 'moderne muslimische Ausleger',
              answer: `Das ist eine mögliche moderne Deutung. Klassische Ausleger wie at-Tabari und Ibn Kathir verstanden „diejenigen, die noch nicht menstruiert haben" (*wa-llāʾī lam yaḥiḍna*) aber als junge Mädchen, und Bukhari selbst hat den Vers mit der Kinderehe verbunden. Wer heute anders liest, bricht mit dem klassischen Konsens – aus guten Gründen, aber gegen die Tradition.`,
              sources: [
                { kind: 'koran', work: 'Sure 65 (at-Talaq)', ref: '65:4', quote: `Und für diejenigen eurer Frauen, die keine Menstruation mehr erwarten – wenn ihr Zweifel habt –, beträgt die Wartezeit drei Monate, und ebenso für diejenigen, die (noch) nicht menstruiert haben.`, original: `wa-llāʾī lam yaḥiḍna`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/65/4' },
                { kind: 'hadith', author: 'Ibn Kathir', work: 'Tafsir al-Qur\'an al-ʿAzim', ref: 'zu 65:4', year: '14. Jh.', quote: `Die Wartezeit von drei Monaten gilt auch für junge Mädchen, die noch nicht das Alter der Menstruation erreicht haben.`, status: 'paraphrase', note: 'Wortlaut im Original prüfen.' },
              ],
              followUps: [
                {
                  id: 'staaten-mindestalter-18',
                  objection: `Heute haben viele muslimische Staaten das Mindestalter auf 18 Jahre festgelegt. Das Problem ist gelöst.`,
                  objectionBy: 'Mustafa Akyol',
                  answer: `Das ist eine gute Entwicklung, etwa in Marokko 2004. Aber beachte: Hier korrigiert staatliches Recht, was das klassische Recht und das „vollkommene Vorbild" erlaubten. Damit wird stillschweigend eingeräumt, dass das Vorbild in diesem Punkt nicht für alle Zeiten gilt. Christen, die das Heiratsalter anhoben, mussten dagegen nicht gegen das Beispiel Christi argumentieren.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'maria-zwoelf-josef-alt',
      objection: `Auch Maria war nach eurer Tradition erst zwölf oder vierzehn, als sie mit dem alten Josef verlobt wurde. Warum kritisiert ihr das nicht?`,
      objectionBy: 'Mohammed Hijab',
      answer: `Diese Angabe stammt nicht aus der Bibel, sondern aus dem apokryphen *Protevangelium des Jakobus* (2. Jh.). Dort ist Josef der Beschützer einer Gott geweihten Jungfrau, und die Kirche bekennt Maria als immerwährende Jungfrau – die Ehe wurde nicht vollzogen. Das ist das Gegenteil eines Vorbilds für Kinderehe.`,
      followUps: [
        {
          id: 'rebekka-drei-jahre',
          objection: `Nach Raschi war Rebekka sogar erst drei Jahre alt, als sie Isaak heiratete!`,
          objectionBy: 'Mohammed Hijab',
          answer: `Raschi (11. Jh.) berechnet das aus einer rabbinischen Zeitrechnung; im Bibeltext selbst tränkt Rebekka zehn Kamele (Gen 24,19–20) und wird gefragt, ob sie mitgehen will (Gen 24,58). Das ist keine Dreijährige. Und es ist keine christliche Lehre.`,
          followUps: [
            {
              id: 'mittelalter-zwoelf',
              objection: `Im christlichen Mittelalter heirateten Mädchen mit zwölf. Das Kirchenrecht hat das erlaubt.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Das gestehe ich zu: Römisches und später kirchliches Recht setzten für Mädchen zwölf Jahre fest. Aber kein Christ lehrte, Christus habe ein neunjähriges Mädchen geheiratet und sei darin Vorbild. Die Altersgrenze stammte aus dem römischen Recht und wurde später angehoben – ohne dass jemand gegen das Beispiel Christi argumentieren musste.`,
              followUps: [
                {
                  id: 'moderne-massstaebe-schwanken',
                  objection: `Dann misst du mit modernen Maßstäben, die selbst ständig schwanken. Das Mündigkeitsalter ist weltweit verschieden.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Gesetze schwanken, ja. Aber es gibt einen festen Grund: den Schaden für Kinder – körperlich (Risiken früher Schwangerschaft) und seelisch. Ein zeitloses moralisches Vorbild sollte nicht erst durch spätere Medizin korrigiert werden müssen. Christus hat die Kleinen unter Gottes besonderen Schutz gestellt (Mt 18,6.10) – dieser Maßstab schwankt nicht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'little-hisham-erfunden',
      objection: `Aischa war gar nicht neun! Joshua Little hat in Oxford gezeigt, dass Hisham ibn ʿUrwa den Bericht im Irak erfunden hat.`,
      objectionBy: 'reformorientierte Muslime',
      targetsPremise: 1,
      answer: `Littles Arbeit ist interessant. Aber er verwendet die kritische Isnad-cum-Matn-Methode der westlichen Forschung. Wenn du sein Ergebnis übernimmst, übernimmst du, dass ein Bericht in Bukhari *und* Muslim, mit „authentischen" Ketten, über die Familie des Propheten falsch ist. Dann hat die Isnad-Wissenschaft in einem zentralen Fall versagt. Kannst du dem Rest von Bukhari dann noch trauen?`,
      followUps: [
        {
          id: 'nur-ein-fehler',
          objection: `Das ist nur der Fehler eines alten Überlieferers im Irak, nicht des ganzen Systems.`,
          objectionBy: 'reformorientierte Muslime',
          targetsPremise: 1,
          answer: `Die klassischen Kritiker wussten, dass Hishams irakische Überlieferungen umstritten waren – und haben diesen Bericht trotzdem in beide Sahihs aufgenommen, über zahlreiche Parallelketten. Little argumentiert, dass auch diese Ketten auf Hisham zulaufen. Wenn das System das nicht erkannte – wie viele andere Fälle hat es übersehen?`,
          followUps: [
            {
              id: 'asma-uhud-berechnungen',
              objection: `Andere Berechnungen zeigen, dass sie 15 bis 19 war: Ihre Schwester Asmaʾ war zehn Jahre älter, und Aischa nahm an der Schlacht von Uhud teil.`,
              objectionBy: 'Muhammad Ali (Lahore-Ahmadiyya) / Kandhlawi',
              targetsPremise: 1,
              answer: `Diese Berechnungen stützen sich auf spätere und schwächere Berichte (etwa bei Ibn Kathir oder adh-Dhahabi) als die Sahih-Hadithe. Du würdest also schwächere Quellen über stärkere stellen – nur weil die stärkere unbequem ist. Das ist das Kriterium der Peinlichkeit in Aktion: Warum hätten fromme Überlieferer ein so junges Alter erfunden?`,
              followUps: [
                {
                  id: 'hadith-zuverlaessig-wenn-passt',
                  objection: `Du sagst also, die Hadithe seien zuverlässig, wenn es dir passt, und unzuverlässig, wenn nicht?`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Nein – ich bitte dich, *einen* Maßstab zu wählen. Ich selbst halte die Zuverlässigkeit der Hadithe für unsicher, und mein Argument hängt nicht am genauen Alter. Mein Punkt: Die muslimische Tradition hat 1.200 Jahre lang neun Jahre angenommen, für unproblematisch gehalten und Recht darauf gebaut. Das sagt etwas darüber, wie das „vollkommene Vorbild" verstanden wurde.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aischa-nicht-geschadet',
      objection: `Aischa liebte den Propheten und wurde die größte Gelehrte ihrer Zeit. Sie hat keinen Schaden genommen – das zeigt, dass die Ehe gut war.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Aischas Größe ist echt, und ich ehre ihre Klugheit und Stärke. Aber das gute Ergebnis in einem Einzelfall begründet keine Norm. Das Vorbild wurde über Jahrhunderte zitiert, um die Verheiratung sehr junger Mädchen zu rechtfertigen – und viele dieser Mädchen haben Schaden genommen. Die moralische Frage ist nicht, ob eine Person Schaden nahm, sondern was ein zeitloses Vorbild erlaubt.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6130', quote: `Aischa: Ich spielte im Haus des Propheten mit Puppen, und meine Freundinnen spielten mit mir.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6130' },
      ],
      followUps: [
        {
          id: 'kultureller-imperialismus',
          objection: `Diese westliche Kritik ist kultureller Imperialismus. Ihr zwingt der Welt eure Werte auf.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Viele Muslime selbst setzen sich gegen Kinderehen ein – Gelehrte, Juristinnen, Organisationen in mehrheitlich muslimischen Ländern. Es geht nicht um „Westen gegen Islam", sondern um den Schutz von Kindern, den Menschen aller Kulturen als Pflicht erkennen. Und für Christen ist dieser Schutz kein westlicher Wert, sondern Jesu Gebot (Mt 18,6).`,
          followUps: [
            {
              id: 'traum-bukhari-3895',
              objection: `Die Ehe war von Gott gewollt: Der Prophet sah Aischa zweimal im Traum, und Träume der Propheten sind Offenbarung.`,
              objectionBy: 'traditionelle Gelehrte',
              answer: `Dann wird das Problem größer, nicht kleiner: Wenn die Ehe göttlich angeordnet war, ist sie kein bloßes Zugeständnis an die Kultur, sondern göttlich gebilligtes Vorbild. Dann kann man sie nicht als „damals normal" relativieren.`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab Manaqib al-Ansar', quote: `Der Prophet zu Aischa: „Du wurdest mir zweimal im Traum gezeigt …"`, status: 'unverified', note: 'Häufig als Bukhari 3895 zitiert; Nummer und Wortlaut vor Verwendung prüfen.' },
              ],
              followUps: [
                {
                  id: 'gott-nicht-kritisieren',
                  objection: `Wer bist du, Gottes Entscheidungen zu kritisieren?`,
                  objectionBy: 'traditionelle Gelehrte',
                  answer: `Genau das ist die Frage: *Ist* es Gottes Entscheidung? Die Bibel lehrt, Propheten an ihren Früchten zu prüfen (Mt 7,15–20) und daran, ob ihre Botschaft mit Gottes bereits geoffenbartem Charakter übereinstimmt (Dtn 13,1–5). Christen glauben, dass sich Gottes Charakter in Christus vollkommen gezeigt hat – in dem, der die Kinder segnete und schützte.`,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hältst du Bukhari 5133 für authentisch? Wenn ja – ist es ein Vorbild für heute? Wenn nein – warum vertraust du dann dem Rest von Bukhari?`,
    `Warum stellt Bukhari diesen Bericht unter die Überschrift „Die Verheiratung der eigenen jungen Kinder"?`,
    `Würdest du deine neunjährige Tochter heute verheiraten? Wenn nicht – warum ist das Vorbild hier nicht für alle Zeiten?`,
    `Wer stellt im Christentum das vollkommene Vorbild dar – und wie ging er mit Kindern um?`,
  ],
  avoid: [
    `Keine Schimpfwörter wie „Pädophiler" verwenden. Sie verletzen tief, beenden das Gespräch und ersetzen kein Argument. Stell die Frage nach dem zeitlosen Vorbild.`,
    `Aischa nicht herabsetzen oder als bloßes Opfer darstellen. Sie war eine starke, kluge Frau, die Muslime zu Recht verehren.`,
    `Nicht so tun, als habe es im Christentum nie frühe Ehen gegeben. Gestehe die historische Praxis ein – und zeige den Unterschied: Kein Christ hielt sie für das Vorbild Christi.`,
    `Nicht behaupten, die Altersangabe sei unter Muslimen unumstritten. Erwähne fair die revisionistischen Positionen – und ihr Problem.`,
  ],
  concessions: [
    `Im 7. Jahrhundert und in vielen vormodernen Gesellschaften waren sehr frühe Ehen üblich; die Zeitgenossen haben diese Ehe nicht kritisiert.`,
    `Auch das römische und das kirchliche Recht kannten lange niedrige Heiratsalter für Mädchen (zwölf Jahre).`,
    `Aischa wurde eine der einflussreichsten Gelehrten der frühen islamischen Geschichte.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Misquoting Muhammad', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Joshua J. Little', work: 'The Hadith of ʿĀʾišah\'s Marital Age (Dissertation, Oxford)', year: '2022', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Marriage and Slavery in Early Islam', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Aischa', 'Kinderehe', 'Hadith', 'Vorbild', 'Ethik'],
  related: [
    'islam-hadith-sira/sira-vorbildlicher-charakter',
    'islam-hadith-sira/isnad-wissenschaftlich-gesichert',
    'islam-frauen-familie/islam-befreite-frau',
    'islam-frauen-familie/polygamie-gerecht',
    'islam-mohammed/mohammed-wahrer-prophet',
    'moral-und-gott/moral-kulturell-relativ',
  ],
};

export default claim;
