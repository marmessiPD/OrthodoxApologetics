import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'suendige-propheten',
  title: `„Die Bibel stellt Propheten als Sünder dar (Noah, Lot, David) – das kann nicht Gottes Wort sein."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Vorträge über die „unmoralischen Geschichten" der Bibel' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Mumbai', work: 'Vorträge über Propheten in Bibel und Koran' },
    { name: 'Klassische Lehre der Isma', role: 'Sunnitische und schiitische Dogmatik (kalam)', work: 'Lehre von der Sündlosigkeit bzw. Bewahrung der Propheten (\'isma)' },
  ],
  steelman: `„Propheten sind von Gott erwählte Vorbilder. Gott bewahrt sie vor schweren Sünden (*ʿiṣma*), sonst könnte man ihrer Botschaft nicht vertrauen. Die Bibel aber erzählt, Noah habe sich betrunken und nackt gelegen (Gen 9,21), Lot habe mit seinen Töchtern geschlafen (Gen 19,30–38), David habe Ehebruch begangen und einen Mord befohlen (2 Sam 11), Salomo sei Götzen nachgelaufen (1 Kön 11,4) und Aaron habe das goldene Kalb gemacht (Ex 32). Solche Geschichten zerstören das Vertrauen in die Gesandten Gottes. Ein Buch, das Gottes Propheten so verleumdet, kann nicht von Gott stammen – das zeigt, dass Menschen die Schrift verfälscht haben."`,
  biblical: {
    summary: `Die Bibel erzählt die Sünden ihrer Helden **ohne sie zu billigen**: Sie zeigt die Folgen (Davids Haus zerbricht, 2 Sam 12,10), die Buße (Ps 51) und Gottes Gnade. Ihr Ziel ist nicht, Menschen zu verherrlichen, sondern zu zeigen, dass nur Gott treu ist und alle Menschen Erlösung brauchen (Röm 3,23). Gerade diese Ehrlichkeit ist ein Zeichen von Echtheit: Propaganda beschönigt, Wahrheit berichtet. Nur **einer** wird in der Bibel ausdrücklich als sündlos bezeugt: Jesus Christus (Hebr 4,15; 1 Petr 2,22).`,
    detail: `**Der Koran selbst** berichtet von Verfehlungen und Vergebungsbitten der Propheten:
- **Adam:** „Adam widersetzte sich seinem Herrn und ging in die Irre" (20:121).
- **Mose** tötet einen Mann: „Das ist ein Werk des Satans … Mein Herr, ich habe mir selbst Unrecht getan, so vergib mir" (28:15–16).
- **David** bittet um Vergebung, fällt nieder und bereut, „da vergaben Wir ihm dies" (38:24–25).
- **Jona:** „Ich gehörte zu den Unrechttuenden" (21:87).
- **Abraham:** „der, von dem ich erhoffe, dass Er mir am Tag des Gerichts meine Verfehlung vergibt" (26:82).
- **Mohammed** wird aufgefordert: „Bitte um Vergebung für deine Sünde (*li-dhanbika*)" (47:19; vgl. 40:55; 48:2).

Und Sahih al-Bukhari 3358 überliefert, dass Abraham dreimal die Unwahrheit sagte. Die Lehre der *ʿiṣma* ist eine spätere theologische Systematisierung; sie steht in Spannung zum Wortlaut des Korans.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '51,3–4 (Agpeya: Psalm 50)', quote: `Gott, sei mir gnädig nach deiner Güte und tilge meine Sünden nach deiner großen Barmherzigkeit. Wasche mich wohl von meiner Missetat und reinige mich von meiner Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,15', quote: `Denn wir haben nicht einen Hohenpriester, der nicht könnte Mitleiden haben mit unsrer Schwachheit, sondern der versucht ist allenthalben gleichwie wir, doch ohne Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'koran', work: 'Sure 20 (Ta Ha)', ref: '20:121', quote: `Und Adam widersetzte sich seinem Herrn und ging in die Irre.`, original: `wa-ʿaṣā ādamu rabbahu fa-ghawā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/20/121' },
      { kind: 'koran', work: 'Sure 28 (al-Qasas)', ref: '28:15–16', quote: `Mose schlug ihn, und er starb. Er sagte: „Das ist ein Werk des Satans … Mein Herr, ich habe mir selbst Unrecht getan, so vergib mir."`, original: `rabbi innī ẓalamtu nafsī fa-ghfir lī`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/28/15-16' },
      { kind: 'koran', work: 'Sure 38 (Sad)', ref: '38:24–25', quote: `David … bat seinen Herrn um Vergebung, fiel nieder und wandte sich reuig (Ihm) zu. Da vergaben Wir ihm dies.`, original: `fa-staghfara rabbahu wa-kharra rākiʿan wa-anāb`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/38/24-25' },
      { kind: 'koran', work: 'Sure 47 (Muhammad)', ref: '47:19', quote: `So wisse, dass es keinen Gott gibt außer Allah, und bitte um Vergebung für deine Sünde und für die gläubigen Männer und Frauen.`, original: `wa-staghfir li-dhanbika`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/47/19' },
    ],
  },
  church: {
    summary: `Die Kirche liest die Sünden der Heiligen als Schule der Buße. Die koptische Kirche betet den Bußpsalm Davids (Ps 50 nach griechischer Zählung) **zu Beginn jeder Gebetsstunde der Agpeya** – das Gebet eines gefallenen Königs ist zum täglichen Gebet der ganzen Kirche geworden. Johannes Chrysostomus predigt über Davids Fall und Umkehr als Ermutigung für jeden Sünder: Wer fällt, soll nicht verzweifeln, sondern aufstehen.`,
    sources: [
      { kind: 'liturgie', work: 'Agpeya (Stundengebet der koptischen Kirche)', quote: `Jede Gebetsstunde beginnt nach Vaterunser und Dankgebet mit Psalm 50 (LXX), dem Bußpsalm Davids.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia)', ref: 'Homilie 2', year: 'um 387', quote: `David ist das Vorbild des Büßers: tief gefallen, aufrichtig bereut, von Gott wieder angenommen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel billigt die Sünden der Propheten nicht – sie erzählt sie ehrlich, zeigt ihre Folgen und Gottes Vergebung. Auch der Koran sagt, dass Adam sich widersetzte (20:121), Mose einen Mann tötete und um Vergebung bat (28:16) und dass Mohammed um Vergebung für seine Sünde bitten sollte (47:19). Und beide Bücher stimmen in einem überein: Nur Jesus ist ohne Sünde. Warum wohl?`,
  keyPoints: [
    `**Erzählen heißt nicht billigen:** Die Bibel zeigt Sünde, Gericht und Umkehr (2 Sam 12; Ps 51).`,
    `**Ehrlichkeit ist ein Echtheitsmerkmal:** Propaganda beschönigt ihre Helden; die Bibel tut es nicht.`,
    `**Der Koran kennt Verfehlungen der Propheten:** Adam (20:121), Mose (28:15–16), David (38:24–25), Jona (21:87), Abraham (26:82), Mohammed (47:19; 48:2).`,
    `**Auch Hadithe berichten es:** Abrahams drei Unwahrheiten (Sahih al-Bukhari 3358).`,
    `**Nur Jesus ist sündlos** – in der Bibel (Hebr 4,15; 1 Petr 2,22) und nach islamischer Überlieferung (Bukhari 3431: nur Maria und ihr Sohn wurden bei der Geburt nicht vom Satan berührt).`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Prediger der Buße',
      text: `Chrysostomus macht aus Davids Fall eine Predigt der Hoffnung: Der König, der Ehebruch und Mord beging, wurde durch Nathans Wort zur Umkehr gerufen und von Gott wieder angenommen. Die Schrift erzählt das, damit kein Sünder verzweifelt und kein Gerechter überheblich wird. Wer die Geschichte als „Verleumdung" liest, verfehlt ihren Sinn: Sie verherrlicht nicht David, sondern die Barmherzigkeit Gottes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'De paenitentia', ref: 'Homilie 2', year: 'um 387', quote: `Davids Fall und Buße als Vorbild für alle Sünder.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester mit Kenntnis der islamischen Quellen',
      text: `Zakaria Botros weist in seinen Sendungen auf die Verse hin, in denen Mohammed aufgefordert wird, um Vergebung für seine Sünde zu bitten (47:19; 48:2), und stellt dem die einzigartige Reinheit Jesu gegenüber, die auch der Koran (19:19: „ein reiner Knabe") und die Hadithe bezeugen. Seine Frage an Muslime: Wenn alle Propheten um Vergebung bitten, nur einer nicht – was sagt das über diesen einen?`,
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim und Arzt',
      text: `Qureshi beschreibt, wie er als Muslim mit der Lehre von der Bewahrung der Propheten aufwuchs und erst beim eigenen Lesen der Quellen bemerkte, dass Koran und Hadith Verfehlungen der Propheten durchaus berichten. Für ihn war entscheidend, dass die Bibel den Menschen nicht idealisiert, sondern Gott: Die Propheten sind Zeugen der Gnade, nicht Beweise menschlicher Vollkommenheit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', quote: `Bericht über die eigene Auseinandersetzung mit Koran, Hadith und Bibel als Muslim.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Kommentator der Schrift',
      text: `Vater Tadros Malaty liest die Sünden der Patriarchen und Könige in seinem patristischen Kommentar im Licht der Väter: Die Schrift zeigt die Schwäche des Menschen, um die Notwendigkeit des Erlösers zu offenbaren. Noahs Trunkenheit, Davids Fall und Salomos Abfall sind Spiegel für uns – und zugleich Hinweise darauf, dass nicht ein menschlicher Prophet, sondern nur der menschgewordene Gott selbst den Menschen heilen kann.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift (Bände zu Genesis und 2 Samuel)', quote: `Die Sünden der Heiligen als Spiegel der menschlichen Schwäche und Hinweis auf den Erlöser.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'propheten-muessen-vorbilder-sein',
      objection: `Propheten sind Vorbilder. Wenn sie schwere Sünden begehen, wie kann man ihnen dann vertrauen? Deshalb lehrt der Islam die Bewahrung der Propheten (Isma).`,
      objectionBy: 'Zakir Naik',
      answer: `Die Vertrauenswürdigkeit einer Botschaft hängt an Gott, der sie gibt – nicht an der Vollkommenheit des Boten. Gerade weil die Bibel ihre Boten nicht idealisiert, sieht man: Die Kraft liegt bei Gott. Und dein eigenes Buch sagt, dass Adam sich widersetzte (20:121) und Mose um Vergebung für einen Totschlag bat (28:16). Die Isma ist eine spätere Lehre, die der Koran so nicht ausspricht.`,
      followUps: [
        {
          id: 'kleine-fehler-nicht-sunden',
          objection: `Das waren keine Sünden, sondern kleine Fehler oder Fehleinschätzungen (zalla). Die Isma schützt vor großen Sünden – nicht vor jedem Fehlgriff.`,
          objectionBy: 'klassische sunnitische Dogmatik',
          answer: `Mose tötet einen Mann und nennt es „ein Werk des Satans" (28:15) – ist Totschlag ein kleiner Fehler? Und Mohammed soll um Vergebung für seine *dhanb* bitten (47:19) – dasselbe Wort, das der Koran für die Sünden der Menschen gebraucht. Wenn du diese Verse als „kleine Fehler" deutest, darfst du auch die Bibel nicht strenger lesen als deinen Koran.`,
          followUps: [
            {
              id: 'aber-nicht-ehebruch-mord',
              objection: `Aber Ehebruch und Mord wie bei David, Inzest wie bei Lot – so etwas würde Gott einem Propheten nie erlauben.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Gott *erlaubte* es nicht – er verurteilte es: Nathan konfrontiert David, das Kind stirbt, sein Haus wird vom Schwert heimgesucht (2 Sam 12). Die Bibel erzählt Sünde als Sünde. Und Lot wird in der Bibel nicht als Prophet, der eine Offenbarung bringt, dargestellt, sondern als Gerechter, der in Sodom lebte. Die Frage ist nicht, ob Menschen fallen, sondern ob Gott sie richtet und wieder aufrichtet.`,
              detail: `Der Koran selbst spielt in 38:21–25 auf eine Episode an, nach der David um Vergebung bat; viele klassische Ausleger verbinden sie mit der Geschichte um Urias Frau, andere lehnen das wegen der Isma ab. Die Spannung zwischen Text und Dogma ist in der islamischen Tradition selbst sichtbar.`,
            },
          ],
        },
      ],
    },
    {
      id: 'abraham-luegt',
      objection: `In der Bibel lügt Abraham und gibt seine Frau als seine Schwester aus (Gen 12; 20). Ein Prophet Gottes lügt nicht!`,
      objectionBy: 'Ahmed Deedat',
      answer: `Sahih al-Bukhari 3358 überliefert ausdrücklich, dass Abraham dreimal die Unwahrheit sagte – darunter genau diese Geschichte mit Sara, die er als Schwester ausgab. Die Bibel und deine eigene Hadithsammlung erzählen dasselbe. Wenn das Bukhari nicht unglaubwürdig macht, dann auch nicht die Bibel.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3358', quote: `Abraham sagte nur dreimal die Unwahrheit: zweimal um Allahs willen („Ich bin krank"; „Der Größte von ihnen hat es getan") und einmal wegen Sara („Sie ist meine Schwester").`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3358' },
      ],
      followUps: [
        {
          id: 'luege-um-allahs-willen',
          objection: `Das waren keine echten Lügen, sondern kluge Wortspiele zum Schutz – Sara war ja seine Schwester im Glauben.`,
          objectionBy: 'klassische Hadithkommentare',
          answer: `Interessant – genau diese Erklärung gibt die Bibel selbst: Sara war tatsächlich seine Halbschwester (Gen 20,12). Wenn du Abraham mit dieser Begründung entlastest, entlastest du auch die Bibel. Der Vorwurf, die Bibel verleumde Abraham, fällt damit weg.`,
          sources: [
            { kind: 'bibel', work: '1. Mose (Genesis)', ref: '20,12', quote: `Auch ist sie wahrhaftig meine Schwester; denn sie ist meines Vaters Tochter, aber nicht meiner Mutter Tochter, und ist mein Weib geworden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'mohammed-ohne-suende',
      objection: `Mohammed war sündlos. „Dhanb" in 47:19 bedeutet nur, dass er für seine Gemeinde um Vergebung bitten sollte – oder es ist eine Lehre für die Gläubigen.`,
      objectionBy: 'verbreitete muslimische Auslegung',
      answer: `Der Vers unterscheidet ausdrücklich: „Bitte um Vergebung für *deine* Sünde *und* für die gläubigen Männer und Frauen." Und 48:2 spricht von dem, was Allah ihm „von deiner früheren und späteren Sünde" vergibt. Ich möchte Mohammed nicht verurteilen – ich zeige nur, dass der Koran seinen Propheten genauso als vergebungsbedürftigen Menschen darstellt, wie die Bibel ihre Propheten.`,
      sources: [
        { kind: 'koran', work: 'Sure 48 (al-Fath)', ref: '48:2', quote: `… damit Allah dir vergebe, was von deiner Sünde vorausging und was noch folgt.`, original: `li-yaghfira laka llāhu mā taqaddama min dhanbika wa-mā ta\'akhkhar`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/48/2' },
      ],
      followUps: [
        {
          id: 'nur-jesus-sundlos',
          objection: `Gut, alle Propheten sind Menschen. Aber das macht Jesus nicht zu etwas Besonderem.`,
          objectionBy: 'Zakir Naik',
          answer: `Doch: In der ganzen Bibel wird nur von Jesus gesagt, er sei ohne Sünde (Hebr 4,15; 1 Petr 2,22; Joh 8,46). Der Koran nennt ihn „einen reinen Knaben" (19:19), und nach Sahih al-Bukhari 3431 wurde jedes Kind bei der Geburt vom Satan berührt – außer Maria und ihrem Sohn. Wenn alle Propheten um Vergebung bitten müssen, nur einer nicht – dann ist er mehr als ein Prophet. Genau das bezeugt das Evangelium.`,
          sources: [
            { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:19', quote: `Ich bin nur der Gesandte deines Herrn, um dir einen reinen Knaben zu schenken.`, original: `li-ahaba laki ghulāman zakiyyā`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/19/19' },
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3431', quote: `Kein Kind wird geboren, ohne dass der Satan es bei der Geburt berührt, sodass es schreit – außer Maria und ihrem Sohn.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:3431' },
          ],
        },
      ],
    },
    {
      id: 'noah-trunken',
      objection: `Noah betrank sich und lag nackt in seinem Zelt (Gen 9,21). Ein großer Prophet als Trunkenbold – das ist eine Beleidigung.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Die Bibel nennt Noah gerecht und untadelig in seiner Zeit (Gen 6,9) – und berichtet zugleich, dass er nach der Flut vom Wein betrunken wurde. Sie verurteilt nicht ihn, sondern die Respektlosigkeit Hams. Die Geschichte zeigt, dass selbst der Gerechte, durch den Gott die Menschheit rettete, schwach ist. Auch der Koran lässt Noah um Vergebung bitten (71:28).`,
      sources: [
        { kind: 'koran', work: 'Sure 71 (Nuh)', ref: '71:28', quote: `Mein Herr, vergib mir und meinen Eltern …`, original: `rabbi ghfir lī wa-li-wālidayya`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/71/28' },
      ],
    },
  ],
  questionsToAsk: [
    `Wie verstehst du 20:121: „Adam widersetzte sich seinem Herrn"?`,
    `Wofür soll Mohammed nach 47:19 um Vergebung bitten?`,
    `Warum bezeugen Koran und Hadith ausgerechnet Jesus als rein von Geburt an?`,
    `Ist eine Geschichte unglaubwürdig, weil sie die Schwächen ihrer Helden zeigt?`,
  ],
  avoid: [
    `Nicht mit Angriffen auf Mohammeds Lebensführung antworten. Bleib bei der Frage, wie Bibel und Koran Propheten darstellen.`,
    `Nicht behaupten, die Bibel lehre, die Propheten seien „schlechte Menschen" gewesen. Sie waren Gerechte, die fielen und bereuten.`,
  ],
  concessions: [
    `Einige biblische Erzählungen (Lot und seine Töchter) sind verstörend; die Bibel erzählt sie ohne ausdrückliche Bewertung, was beim Lesen Unbehagen auslöst.`,
    `Innerhalb der islamischen Tradition gibt es unterschiedliche Auffassungen über Umfang und Grenzen der Isma.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über die Buße (De paenitentia)', year: 'um 387', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Propheten', 'Isma', 'Sünde', 'Islam'],
  related: [
    'islam-gottheit-christi/jesus-nur-ein-prophet',
    'islam-mohammed/mohammed-wahrer-prophet',
    'islam-kreuzigung/keine-erbsuende-fitra',
  ],
};

export default claim;
