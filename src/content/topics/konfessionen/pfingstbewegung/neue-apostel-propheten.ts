import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'neue-apostel-propheten',
  title: `„Gott beruft heute neue Apostel und Propheten."`,
  proponents: [
    { name: 'C. Peter Wagner', role: 'Missionswissenschaftler, Fuller Seminary (1930–2016)', work: 'Apostles Today (2006); Begriff „New Apostolic Reformation"' },
    { name: 'Bill Hamon', role: 'Gründer von Christian International', work: 'Apostles, Prophets and the Coming Moves of God (1997)' },
    { name: 'Bill Johnson', role: 'Pastor, Bethel Church Redding', work: 'Lehre von apostolischer Leiterschaft und „Kingdom now"' },
    { name: 'Che Ahn', role: 'Leiter von Harvest International Ministry', work: 'Apostolisches Netzwerk der NAR' },
  ],
  steelman: `Epheser 4,11–13 nennt fünf Dienste – Apostel, Propheten, Evangelisten, Hirten und Lehrer –, die Christus der Kirche gegeben hat, „bis dass wir alle hinankommen zur Einigkeit des Glaubens … zum vollkommenen Mannesalter". Dieses Ziel ist offensichtlich noch nicht erreicht; also braucht die Kirche alle fünf Dienste bis heute. Niemand bestreitet, dass es heute Evangelisten, Hirten und Lehrer gibt – warum sollten ausgerechnet Apostel und Propheten verschwunden sein? Im Neuen Testament gibt es Apostel jenseits der Zwölf: Barnabas (Apg 14,14), Andronikus und Junia (Röm 16,7), Epaphroditus (Phil 2,25 griechisch *apostolos*). Agabus war ein Prophet (Apg 11,28; 21,10), Philippus hatte vier weissagende Töchter (21,9). Die Kirche ist erstarrt, weil sie diese Dienste durch Institutionen ersetzt hat. Gott stellt heute die apostolische und prophetische Leitung wieder her, um die Kirche zu erneuern und die Gesellschaft zu verwandeln.`,
  biblical: {
    summary: `Das Neue Testament kennt zwei Bedeutungen von „Apostel": die **Apostel Christi** – die Zwölf und Paulus –, die Augenzeugen des Auferstandenen waren und das **Fundament** der Kirche bilden (Eph 2,20; Offb 21,14; Apg 1,21–22; 1 Kor 9,1; 15,8 „zuletzt"), und **Gesandte von Gemeinden** im weiteren Sinn (2 Kor 8,23; Phil 2,25). Die NAR beansprucht für ihre „Apostel" aber die Autorität der ersten Art – Leitung über Gemeinden und neue Offenbarung. Das Fundament wird jedoch nur einmal gelegt; der Glaube ist „ein für alle Mal den Heiligen übergeben" (Jud 3). Prophetie gibt es weiterhin, aber sie wird geprüft (1 Kor 14,29; 1 Thess 5,20–21; 1 Joh 4,1) und ist der apostolischen Lehre untergeordnet. Schon die Offenbarung lobt die Gemeinde, die „die geprüft hat, so da sagen, sie seien Apostel, und sind’s nicht" (Offb 2,2).`,
    detail: `**Das einmalige Fundament:** „Erbaut auf den Grund der Apostel und Propheten, da Jesus Christus der Eckstein ist" (Eph 2,20). Ein Fundament legt man nicht in jeder Generation neu. Die himmlische Stadt hat „zwölf Grundsteine und auf ihnen Namen der zwölf Apostel des Lammes" (Offb 21,14).

**Kriterien des Apostelamtes im engeren Sinn:** Zeuge der Auferstehung (Apg 1,21–22), vom Herrn selbst gesandt (Gal 1,1), den Auferstandenen gesehen (1 Kor 9,1). Paulus nennt sich ausdrücklich den **letzten**, dem der Auferstandene erschien (1 Kor 15,8).

**Eph 4,11–13:** Christus „hat gegeben" (Aorist) diese Dienste – die Apostel und Propheten wirken bis heute durch ihr überliefertes Wort und durch die Nachfolger, die sie selbst eingesetzt haben (Apg 14,23; Tit 1,5; 2 Tim 2,2). So versteht die Kirche die **apostolische Sukzession**: nicht neue Apostel mit neuer Offenbarung, sondern Bischöfe, die das apostolische Erbe bewahren.

**Prüfung der Prophetie:** Ein Prophet, dessen Wort nicht eintrifft, hat „aus Vermessenheit geredet" (Dtn 18,22). Selbst wahre Prophetie im NT wird geprüft (1 Kor 14,29). Neue „Offenbarungen", die über das apostolische Zeugnis hinausgehen, sind nach Gal 1,8 abzulehnen.`,
    sources: [
      { kind: 'bibel', work: 'Epheser', ref: '2,20', quote: `… erbaut auf den Grund der Apostel und Propheten, da Jesus Christus der Eckstein ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,14', quote: `Und die Mauer der Stadt hatte zwölf Grundsteine und auf ihnen Namen der zwölf Apostel des Lammes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,8', quote: `Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Judas', ref: '3', quote: `… daß ihr für den Glauben kämpfet, der einmal den Heiligen übergeben ist.`, translation: 'Luther 1912', status: 'verbatim', original: `τῇ ἅπαξ παραδοθείσῃ τοῖς ἁγίοις πίστει`, note: '„hapax" – ein für alle Mal.' },
      { kind: 'bibel', work: 'Offenbarung', ref: '2,2', quote: `… und hast versucht die, so da sagen, sie seien Apostel, und sind's nicht, und hast sie als Lügner erfunden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose', ref: '18,22', quote: `… wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat; der Prophet hat's aus Vermessenheit geredet, darum scheue dich nicht vor ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche ist eine **apostolische Kirche** im ursprünglichen Sinn: Sie wurde vom Evangelisten Markus gegründet, und ihre Päpste stehen in ununterbrochener Nachfolge bis zu Papst Tawadros II., dem 118. Patriarchen. Die Apostel haben selbst Bischöfe und Presbyter eingesetzt und angeordnet, dass bewährte Männer ihnen nachfolgen (1 Clem 42–44). Das ist die biblische und historische Form, in der der apostolische Dienst weiterlebt. Prophetische Gaben gibt es in der Kirche weiterhin – viele Heilige hatten sie –, aber sie bestätigen den überlieferten Glauben und die kirchliche Ordnung, statt neue Lehren oder neue Hierarchien zu begründen.`,
    detail: `**1. Klemensbrief (um 96):** Die Apostel empfingen das Evangelium von Christus, Christus von Gott; sie setzten ihre Erstlinge als Bischöfe und Diakone ein und gaben die Anordnung, dass nach ihrem Tod andere bewährte Männer ihren Dienst übernehmen sollten (1 Clem 42; 44).

**Didache 11:** Die älteste Kirchenordnung gibt klare Prüfkriterien für wandernde „Apostel" und „Propheten": Ein Apostel soll nur einen Tag bleiben, notfalls zwei; bleibt er drei, ist er ein falscher Prophet. Fordert er Geld, ist er ein falscher Prophet. Nicht jeder, der im Geist redet, ist ein Prophet, sondern nur, wer die Lebensweise des Herrn hat.

**Ignatius von Antiochien:** Bezeichnend ist, wofür Ignatius seine prophetische Gabe einsetzte: Er rief in Philadelphia „mit lauter Stimme, mit Gottes Stimme": „Haltet euch an den Bischof, das Presbyterium und die Diakone" (Philad. 7,1). Echte Prophetie stärkt die apostolische Ordnung.

**Heilige mit prophetischen Gaben:** Athanasius berichtet, dass Antonius Ereignisse voraussah, etwa die Bedrängnis durch die Arianer (Vita Antonii 82) – und doch beanspruchte Antonius nie eine Autorität über den Bischof von Alexandrien, sondern ehrte die Kleriker.`,
    sources: [
      { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '42; 44', year: 'um 96', status: 'paraphrase', quote: `Die Apostel setzten Bischöfe und Diakone ein und gaben Anweisung, dass, wenn sie entschliefen, andere bewährte Männer ihren Dienst übernehmen sollten.` },
      { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre)', ref: '11,3–12', year: 'um 100', status: 'paraphrase', quote: `Jeder Apostel, der zu euch kommt, soll aufgenommen werden wie der Herr. Er soll aber nur einen Tag bleiben, wenn nötig auch einen zweiten; bleibt er drei, so ist er ein falscher Prophet. … Wenn er Geld verlangt, ist er ein falscher Prophet.` },
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Philadelphier', ref: '7,1', year: 'um 110', status: 'paraphrase', quote: `Ich rief, als ich bei euch war, mit lauter Stimme, mit Gottes Stimme: Haltet euch an den Bischof, das Presbyterium und die Diakone.` },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1–3', status: 'paraphrase', note: 'Die apostolische Überlieferung ist in der Nachfolge der von den Aposteln eingesetzten Bischöfe öffentlich bezeugt – im Gegensatz zu den „Geheimlehren" der Gnostiker.' },
    ],
  },
  quickAnswer: `Die Apostel Christi waren Augenzeugen des Auferstandenen und bilden das Fundament der Kirche (Eph 2,20; 1 Kor 15,8 – Paulus war „der letzte"). Ein Fundament legt man nur einmal; der Glaube ist „ein für alle Mal" übergeben (Jud 3). Den apostolischen Dienst setzen die Bischöfe fort, die die Apostel selbst eingesetzt haben – in der koptischen Kirche ohne Unterbrechung seit dem heiligen Markus. Prophetie gibt es weiter, aber sie muss geprüft werden (Dtn 18,22; 1 Joh 4,1) und bringt keine neue Lehre.`,
  keyPoints: [
    `**Zwei Bedeutungen von „Apostel":** die Zwölf und Paulus als Augenzeugen und Fundament (Apg 1,21–22; 1 Kor 9,1; Offb 21,14) – und Gemeindegesandte (2 Kor 8,23; Phil 2,25). Die NAR beansprucht die Autorität der ersten Gruppe.`,
    `**Das Fundament ist gelegt** (Eph 2,20), der Glaube ist „ein für alle Mal" übergeben (Jud 3), und Paulus war der letzte Zeuge des Auferstandenen (1 Kor 15,8).`,
    `**Apostolische Sukzession statt neuer Apostel:** Die Apostel setzten Nachfolger ein (Apg 14,23; Tit 1,5; 1 Clem 42–44).`,
    `**Prophetie wird geprüft:** Dtn 18,22; 1 Kor 14,29; Didache 11 – falsche Vorhersagen und Geldforderungen entlarven falsche Propheten.`,
    `**Schon die frühe Kirche** musste falsche Apostel prüfen (Offb 2,2; 2 Kor 11,13) und verwarf die „neue Prophetie" des Montanismus.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als letzter Apostel des Auferstandenen',
      text: `Paulus verteidigte sein Apostelamt mit der Begründung, dass er den Herrn gesehen habe (1 Kor 9,1) – und nannte sich zugleich den letzten, dem der Auferstandene erschien (15,8). Er warnte vor „falschen Aposteln und trüglichen Arbeitern", die sich als Apostel Christi verstellen (2 Kor 11,13), und setzte die Grenze unmissverständlich: Selbst ein Engel vom Himmel, der ein anderes Evangelium bringt, sei verflucht (Gal 1,8). Seine Sorge galt der Weitergabe an treue Menschen: „Was du von mir gehört hast …, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren" (2 Tim 2,2).`,
      sources: [{ kind: 'bibel', work: '2. Timotheus', ref: '2,2', quote: `Und was du von mir gehört hast durch viele Zeugen, das befiehl treuen Menschen, die da tüchtig sind, auch andere zu lehren.`, translation: 'Luther 1912', status: 'verbatim' }],
    },
    {
      person: 'irenaeus',
      role: 'als Zeuge der apostolischen Nachfolge',
      text: `Irenäus begegnete im 2. Jahrhundert Gruppen, die sich auf geheime oder neue Offenbarungen beriefen. Seine Antwort: Die Lehre der Apostel ist nicht versteckt, sondern öffentlich in den Kirchen bezeugt, deren Bischöfe man bis auf die Apostel zurückverfolgen kann. Wer die Wahrheit sucht, braucht keine neuen Apostel, sondern findet sie in der Überlieferung, die die Apostel in der Kirche hinterlegt haben „wie ein Reicher sein Geld in einer Schatzkammer".`,
      sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1; III,4,1', status: 'paraphrase' }],
    },
    {
      person: 'michael-brown',
      role: 'als charismatischer Theologe',
      text: `Brown glaubt an fortdauernde prophetische Gaben, fordert aber von seiner eigenen Bewegung Rechenschaft. Nach zahlreichen öffentlich verkündeten, aber nicht eingetroffenen Prophezeiungen – etwa zur US-Präsidentschaftswahl 2020 – rief er Propheten zur öffentlichen Buße auf. Einige bekannte charismatische Propheten entschuldigten sich daraufhin öffentlich. Für Brown ist klar: Wer im Namen Gottes Falsches vorhersagt, muss das eingestehen; sonst verliert die ganze Bewegung ihre Glaubwürdigkeit.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael L. Brown', work: 'Öffentliche Stellungnahmen zu gescheiterten Prophetien (2021) und Playing with Holy Fire (2018)', status: 'paraphrase' }],
    },
    {
      person: 'tawadros-ii',
      role: 'als 118. Papst von Alexandrien',
      text: `Papst Tawadros II. steht in der Nachfolge des heiligen Markus, die die koptische Kirche über fast zwei Jahrtausende ohne Unterbrechung bewahrt hat. Für die koptische Kirche ist diese Kette kein bloßer Stammbaum, sondern die lebendige Weitergabe des Glaubens, der Sakramente und der apostolischen Sorge um die Herde. Wer „apostolische Leitung" sucht, findet sie hier – nicht in selbsternannten Netzwerken der Gegenwart.`,
    },
  ],
  dialog: [
    {
      id: 'eph-4-bis-alle-hinankommen',
      objection: `„Eph 4,11–13 sagt: Christus gab Apostel, Propheten, Evangelisten, Hirten und Lehrer, *bis* wir alle zur Einheit gelangen. Das ist noch nicht geschehen – also gibt es noch Apostel."`,
      objectionBy: 'C. Peter Wagner',
      answer: `Die Apostel wirken bis heute – durch ihr Wort im Neuen Testament und durch die Nachfolger, die sie eingesetzt haben. Paulus sagt nicht, dass jede Generation neue Augenzeugen des Auferstandenen bekommt. Zwei Kapitel vorher nennt er die Apostel und Propheten das **Fundament** (2,20). Wenn du sagst, die Apostel müssten bis zum Ende neu berufen werden, müsstest du auch annehmen, dass das Fundament ständig neu gelegt wird.`,
      questionsBack: [`Erfüllen deine heutigen Apostel die Bedingung von Apg 1,21–22 und 1 Kor 9,1 – haben sie den Auferstandenen gesehen?`],
      followUps: [
        {
          id: 'barnabas-war-apostel',
          objection: `„Barnabas, Andronikus, Junia und Epaphroditus waren auch Apostel – keine Augenzeugen. Also gibt es eine fortlaufende Apostelreihe."`,
          objectionBy: 'NAR-Lehrer',
          answer: `Barnabas wird mit Paulus zusammen „Apostel" genannt, weil beide von der Gemeinde in Antiochia ausgesandt wurden (Apg 13,2–3; 14,14). Epaphroditus heißt „euer Gesandter" (Phil 2,25) – ein Bote der Gemeinde von Philippi. Diese Bedeutung („Gesandter") gibt es auch heute: Missionare. Aber niemand im NT leitet aus diesem Titel eine Autorität über die Gesamtkirche oder neue Offenbarungen ab – genau das beanspruchen NAR-Apostel.`,
          followUps: [
            {
              id: 'bischoefe-sind-institution',
              objection: `„Eure Bischöfe sind doch nur eine Institution. Wir haben lebendige, geistgesalbte Apostel – nicht Titelträger."`,
              objectionBy: 'NAR-Anhänger',
              answer: `Die Bischöfe sind keine spätere Institution, sondern von den Aposteln selbst eingesetzt (Apg 14,23; Tit 1,5; 1 Tim 5,22). Um 110 schreibt Ignatius, ohne Bischof, Presbyter und Diakone könne man nicht von Kirche sprechen (Trall. 3,1). Und eure Apostel? Sie sind von niemandem eingesetzt außer von sich selbst und ihren Netzwerken – meist erst seit den 1990er-Jahren. Was ist hier „Institution" und was apostolisch?`,
              sources: [
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '14,23', quote: `Und sie ordneten ihnen hin und her Älteste in den Gemeinden, beteten und fasteten und befahlen sie dem HERRN, an den sie gläubig geworden waren.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Trallianer', ref: '3,1', status: 'paraphrase', quote: `Ohne diese – Bischof, Presbyter und Diakone – kann man nicht von Kirche sprechen.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'prophetie-gibt-es-noch',
      objection: `„Du selbst gibst zu, dass es Prophetie noch gibt. Paulus sagt: ‚Strebt nach den Gaben, am meisten aber, dass ihr weissagt' (1 Kor 14,1). Unsere Propheten tun genau das."`,
      objectionBy: 'Bill Hamon',
      answer: `Ja, Prophetie im Sinn von Ermahnung, Trost und Erbauung gibt es weiter (1 Kor 14,3). Aber Paulus sagt im selben Kapitel: „Propheten aber lasst reden zwei oder drei, und die andern lasst richten" (14,29). Prophetie steht unter Prüfung, nicht über der Kirche. Und das Alte Testament gibt einen klaren Test: Was nicht eintrifft, war nicht von Gott (Dtn 18,22).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '14,29', quote: `Weissager aber lasset reden zwei oder drei, und die andern lasset richten.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'falsche-prophetien-2020',
          objection: `„Jeder Prophet macht mal Fehler. Das NT-Prophetenamt ist nicht so streng wie im AT – NT-Prophetie ist ‚fehlbar'."`,
          objectionBy: 'Charismatischer Lehrer (vgl. Wayne Grudem)',
          answer: `Wenn NT-Prophetie fehlbar ist, dann darf niemand auf ihrer Grundlage Autorität über Gemeinden beanspruchen oder sagen „So spricht der Herr". Genau das tun aber viele NAR-Propheten. Als 2020 zahlreiche bekannte Propheten einen bestimmten Wahlausgang in den USA im Namen Gottes ankündigten und er nicht eintrat, entschuldigten sich einige öffentlich – Michael Brown, selbst Charismatiker, forderte das. Das zeigt: Selbst innerhalb der Bewegung sieht man Dtn 18,22 als gültig an.`,
          followUps: [
            {
              id: 'didache-test',
              objection: `„Und woran soll man dann einen echten Propheten erkennen?"`,
              objectionBy: 'Suchender Charismatiker',
              answer: `Die frühe Kirche gibt klare Kriterien: Er lehrt den apostolischen Glauben (1 Joh 4,2–3; Gal 1,8); seine Vorhersagen treffen ein (Dtn 18,22); er hat „die Lebensweise des Herrn", lebt demütig und fordert kein Geld (Didache 11,8–12); er stärkt die Einheit der Kirche und ihre Ordnung (Ignatius, Philad. 7). Wer neue Lehren, eigene Hierarchien und Spendenaufrufe bringt, besteht diesen Test nicht.`,
              sources: [
                { kind: 'kirchenvater', work: 'Didache', ref: '11,8', status: 'paraphrase', quote: `Nicht jeder, der im Geist redet, ist ein Prophet, sondern nur, wer die Lebensweise des Herrn hat. An der Lebensweise also wird man den falschen Propheten und den Propheten erkennen.` },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zweites-apostolisches-zeitalter',
      objection: `„Wir leben im ‚zweiten apostolischen Zeitalter'. Gott stellt jetzt die apostolische Leitung wieder her, um die Kirche zu reformieren und die Gesellschaft – Regierung, Wirtschaft, Medien – zu durchdringen (Sieben-Berge-Mandat)."`,
      objectionBy: 'C. Peter Wagner / Lance Wallnau',
      answer: `Die Behauptung eines neuen apostolischen Zeitalters stammt nicht aus der Schrift, sondern aus der Selbstdeutung einer Bewegung des späten 20. Jahrhunderts. Christus hat seiner Kirche keinen Auftrag gegeben, gesellschaftliche „Berge" zu erobern, sondern Jünger zu machen, sie zu taufen und zu lehren (Mt 28,19–20). Sein Reich ist „nicht von dieser Welt" (Joh 18,36). Die koptische Kirche hat die Gesellschaft durch Märtyrer, Mönche und Liebe geprägt – nicht durch Machtansprüche.`,
      sources: [
        { kind: 'gegner', author: 'C. Peter Wagner', work: 'Apostles Today', year: '2006', status: 'paraphrase', note: 'Wagner datierte den Beginn des „zweiten apostolischen Zeitalters" in die Zeit um 2001.' },
        { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'montanus-parallele',
          objection: `„Du vergleichst uns doch nicht etwa mit Sekten?"`,
          objectionBy: 'NAR-Anhänger',
          answer: `Nein – ich vergleiche Muster. Im 2. Jahrhundert verkündete Montanus mit zwei Prophetinnen eine „neue Prophetie": eine neue Epoche des Geistes, neue Offenbarungen, ein neues Zentrum der Kirche in Phrygien. Viele waren ernsthafte, asketische Christen. Die Kirche prüfte die Bewegung und verwarf sie, weil sie den Anspruch erhob, über das apostolische Erbe hinauszugehen. Diese Erfahrung lehrt Vorsicht gegenüber jeder Bewegung, die ein neues Zeitalter mit neuen Aposteln ausruft.`,
          sources: [
            { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'V,16–18', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'paulus-kam-spaeter',
      objection: `„Paulus gehörte nicht zu den Zwölf und wurde erst Jahre später berufen. Das beweist doch: Gott beruft auch nach den Zwölf weiter Apostel."`,
      objectionBy: 'C. Peter Wagner',
      answer: `Paulus selbst schließt die Reihe: „Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden" (1 Kor 15,8). Sein Apostelamt begründet er damit, dass er den Auferstandenen gesehen hat: „Bin ich nicht ein Apostel? Habe ich nicht unsern Herrn Jesus Christus gesehen?" (1 Kor 9,1). Paulus ist nicht der Beweis für eine offene Reihe, sondern ihr ausdrücklich letztes Glied.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,7–8', quote: `Danach ist er gesehen worden von Jakobus, danach von allen Aposteln. Am letzten nach allen ist er auch von mir, als einer unzeitigen Geburt, gesehen worden.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: '1. Korinther', ref: '9,1', quote: `Bin ich nicht ein Apostel? Bin ich nicht frei? Habe ich nicht unsern Herrn Jesus Christus gesehen?`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'unsere-apostel-sahen-jesus',
          objection: `„Auch unsere Apostel haben Jesus in Visionen gesehen. Damit erfüllen sie dein Kriterium."`,
          objectionBy: 'NAR-Prophet',
          answer: `Paulus unterscheidet die Erscheinungen des Auferstandenen, die mit ihm abgeschlossen sind („am letzten nach allen"), von späteren Visionen, die er auch hatte (2 Kor 12,1–4) – auf diese gründet er sein Apostelamt gerade nicht. Visionen sind möglich, aber sie machen niemanden zum Augenzeugen der Auferstehung. Und Paulus warnt: Selbst wenn „ein Engel vom Himmel" ein anderes Evangelium predigte, sei er verflucht (Gal 1,8).`,
          followUps: [
            {
              id: 'present-truth',
              objection: `„Wir beanspruchen keine neue Lehre auf der Ebene der Schrift – nur ‚gegenwärtige Wahrheit' (*present truth*), frische strategische Offenbarung für die Kirche heute."`,
              objectionBy: 'Bill Hamon',
              answer: `Dann prüfen wir das an den Früchten: In der Praxis trägt diese „gegenwärtige Wahrheit" oft verbindliche Inhalte – etwa über eine neue apostolische Leitungsstruktur oder den Auftrag, die Gesellschaft zu beherrschen – und verlangt Gehorsam. Was die Kirche bindet, muss sich an der apostolischen Überlieferung messen lassen: „Haltet an den Satzungen, darin ihr gelehrt seid, es sei durch unser Wort oder Epistel" (2 Thess 2,15). Ist sie nicht verbindlich, kann sie auch keine Autorität begründen.`,
              sources: [
                { kind: 'gegner', author: 'Bill Hamon', work: 'Apostles, Prophets and the Coming Moves of God', year: '1997', status: 'paraphrase', note: 'Hamon entfaltet hier die Lehre von der „Wiederherstellung" der Apostel und Propheten und der „present truth".' },
              ],
              followUps: [
                {
                  id: 'sieben-berge-mandat',
                  objection: `„Das Sieben-Berge-Mandat ist biblisch: Christen sollen die sieben Bereiche der Gesellschaft – Regierung, Medien, Bildung, Wirtschaft, Familie, Religion, Kunst – einnehmen. Das ist der Herrschaftsauftrag aus Gen 1,28."`,
                  objectionBy: 'Lance Wallnau',
                  answer: `Gen 1,28 gibt allen Menschen den Auftrag, die Schöpfung zu bebauen und zu bewahren – nicht der Kirche den Auftrag, die Gesellschaft zu beherrschen. Christus lehnte die Reiche der Welt ab, als der Versucher sie ihm anbot (Mt 4,8–10), und sagte: „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Die Kirche verändert die Welt als Salz und Licht (Mt 5,13–14) – durch Heiligkeit, Dienst und, wenn nötig, Martyrium.`,
                  detail: `Die koptische Kirche hat vierzehn Jahrhunderte als Minderheit gelebt, ohne politische Macht – und doch Ägypten geprägt, durch Mönchtum, Schulen, Krankenfürsorge und das Zeugnis ihrer Märtyrer. Diese Erfahrung ist ein stilles, aber starkes Gegenargument gegen jede Theologie, die das Reich Gottes an gesellschaftlicher Kontrolle misst. Bleib im Gespräch sachlich und vermeide tagespolitische Debatten.`,
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '18,36', quote: `Mein Reich ist nicht von dieser Welt.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [`Hat Jesus seine Jünger je beauftragt, die Regierung oder die Medien „einzunehmen"?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gaben-bis-zur-wiederkunft',
      objection: `„1 Kor 13,8–10: Die Gaben hören erst auf, ‚wenn kommen wird das Vollkommene' – also bei der Wiederkunft. Bis dahin gibt es Apostel und Propheten. Wer das bestreitet, ist ein unbiblischer Cessationist."`,
      objectionBy: 'Charismatischer Theologe (vgl. Sam Storms)',
      answer: `Wir sind keine Cessationisten: Die koptische Kirche glaubt, dass Gaben und Wunder bis heute geschehen – ihre Heiligen und Mönche bezeugen es. Der Streitpunkt sind nicht die Gaben, sondern das **Fundament**: Die Kirche ist „erbaut auf den Grund der Apostel und Propheten" (Eph 2,20). Gaben wirken weiter, aber das Fundament wird nicht neu gelegt.`,
      followUps: [
        {
          id: 'zeichen-eines-apostels',
          objection: `„Eure Bischöfe haben eine Amtsnachfolge, aber keine Kraft. Wahre apostolische Autorität zeigt sich in Zeichen und Wundern (2 Kor 12,12)."`,
          objectionBy: 'NAR-Anhänger',
          answer: `Lies 2 Kor 12,12 im Zusammenhang: Paulus schreibt gegen die „hohen Apostel" (11,5), die sich ihrer Visionen und Kraft rühmten – und er rühmt sich dagegen seiner Schwachheit (12,9–10). Die Zeichen geschahen „mit aller Geduld". Auch koptische Bischöfe und Heilige hatten Zeichen, aber Kriterium der Autorität ist die Treue zum anvertrauten Glaubensgut (1 Tim 6,20; 2 Tim 1,14). Irenäus prüfte die Gnostiker genau so: Wo ist die Lehre, die die Apostel ihren Nachfolgern übergeben haben?`,
          voices: [
            {
              person: 'irenaeus',
              role: 'als Theologe der apostolischen Überlieferung',
              text: `Irenäus argumentiert gegen die Gnostiker, die sich auf geheime Offenbarungen beriefen, mit der öffentlichen Nachfolge der Bischöfe: Hätten die Apostel verborgene Geheimnisse gekannt, hätten sie diese zuerst den Männern anvertraut, denen sie die Kirchen übergaben. Die Wahrheit ist in den Kirchen apostolischen Ursprungs offen zugänglich.`,
              sources: [{ kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,3,1', year: 'um 180', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'sukzession-erfunden',
              objection: `„Die apostolische Sukzession ist eine spätere Konstruktion. Die Bischofslisten wurden im 2. Jahrhundert nachträglich erstellt."`,
              objectionBy: 'NAR-Lehrer',
              answer: `Schon Klemens von Rom schreibt um 96, also zu Lebzeiten von Apostelschülern: Die Apostel setzten Bischöfe und Diakone ein und verfügten, dass nach deren Tod andere bewährte Männer ihren Dienst übernehmen sollten (1 Clem 42; 44). Ignatius von Antiochien setzt um 110 Bischof, Presbyter und Diakone in vielen Gemeinden Kleinasiens selbstverständlich voraus. Einzelne Listen mögen später zusammengestellt sein – das Prinzip ist apostolisch.`,
              voices: [
                {
                  person: 'clemens-rom',
                  role: 'als ältester nachapostolischer Zeuge',
                  text: `Klemens erinnert die Korinther daran, dass die Apostel, von Christus gesandt, in Städten und Dörfern ihre Erstlinge nach Prüfung im Geist zu Bischöfen und Diakonen einsetzten. Sie wussten um künftigen Streit und trafen Vorsorge, dass nach deren Entschlafen andere erprobte Männer ihren Dienst übernehmen sollten.`,
                  sources: [{ kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief', ref: '42; 44', year: 'um 96', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'bischof-und-presbyter-gleich',
                  objection: `„Im Neuen Testament sind ‚Bischof' und ‚Ältester' dasselbe (Tit 1,5–7; Apg 20,17.28). Ein Bischof über den Presbytern ist unbiblisch."`,
                  objectionBy: 'Reformierter oder freikirchlicher Theologe',
                  answer: `Die Begriffe sind im Neuen Testament tatsächlich noch fließend – das geben wir zu. Aber das Amt der Aufsicht über die Ältesten gab es: Timotheus und Titus setzen Älteste ein und weisen sie zurecht (Tit 1,5; 1 Tim 5,19–22). Dass sich die Bezeichnungen später festigten, heißt nicht, dass das Amt erfunden wurde. In Alexandrien reicht die Reihe vom Evangelisten Markus über Anianus bis zum heutigen Papst.`,
                  sources: [
                    { kind: 'bibel', work: 'Titus', ref: '1,5', quote: `Derhalben ließ ich dich in Kreta, dass du solltest vollends ausrichten, was ich gelassen habe, und besetzen die Städte hin und her mit Ältesten, wie ich dir befohlen habe.`, translation: 'Luther 1912', status: 'paraphrase' },
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
    `Wer hat deine Apostel eingesetzt – und von wem stammt deren Autorität?`,
    `Haben sie den Auferstandenen gesehen (Apg 1,22; 1 Kor 9,1)? Wenn nicht: In welchem Sinn sind sie Apostel wie Petrus und Paulus?`,
    `Was geschieht in deiner Bewegung mit einem Propheten, dessen Vorhersage nicht eintrifft (Dtn 18,22)?`,
    `Was bedeutet „ein für alle Mal den Heiligen übergeben" (Jud 3) für neue Offenbarungen?`,
  ],
  avoid: [
    `Nicht pauschal alle Charismatiker zur NAR zählen. Viele lehnen deren Apostelansprüche selbst ab.`,
    `Nicht behaupten, Gott spreche heute überhaupt nicht mehr zu Menschen oder es gebe keine prophetischen Gaben. Das ist nicht koptische Lehre.`,
    `Nicht mit politischen Argumenten (z. B. über die US-Politik) streiten; bleib bei Schrift, Väterzeugnis und dem Prüfkriterium.`,
  ],
  concessions: [
    `Das Wort „Apostel" wird im NT auch in einem weiteren Sinn („Gesandter") gebraucht; Missionare im Sinn von Gesandten gibt es heute selbstverständlich.`,
    `Prophetische Gaben sind in der Kirche nicht erloschen; die NAR erinnert daran, dass Gott lebendig handelt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'R. Douglas Geivett / Holly Pivec', work: 'A New Apostolic Reformation? A Biblical Response to a Worldwide Movement', year: '2014', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Klemens von Rom', work: '1. Klemensbrief, Kap. 40–44', status: 'paraphrase' },
    { kind: 'kirchenvater', work: 'Didache (Zwölf-Apostel-Lehre), Kap. 11–15', status: 'paraphrase' },
    { kind: 'gegner', author: 'C. Peter Wagner', work: 'Apostles Today', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Neue Apostolische Reformation', 'Apostel', 'Prophetie', 'apostolische Sukzession', 'Didache'],
  related: ['pfingstbewegung/zungenrede-beweis', 'evangelikale-sonderlehren/keine-hierarchie-noetig', 'sakramente/kein-besonderes-priestertum', 'sola-scriptura/kirche-war-verdorben'],
};

export default claim;
