import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'jesus-sagte-nie-ich-bin-gott',
  title: `„Zeig mir einen Vers, in dem Jesus sagt: ‚Ich bin Gott, betet mich an.'"`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Debatten und Broschüren, u. a. „Christ in Islam"' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: '„Show me one unequivocal statement…"-Herausforderung' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatten mit James White und William Lane Craig' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC Chapel Hill (Agnostiker)', work: 'How Jesus Became God (2014)' },
  ],
  steelman: `Wenn Jesus Gott wäre, wäre das die wichtigste Botschaft seines Lebens – er hätte sie klar und unmissverständlich verkündet. Doch in keinem einzigen Vers sagt Jesus: „Ich bin Gott, betet mich an." Im ältesten Evangelium, Markus, nennt er sich „Menschensohn" – ein semitischer Ausdruck für „Mensch" –, er betet zu Gott, weist sogar die Anrede „guter Meister" zurück, weil „niemand gut ist als Gott allein" (Mk 10,18), und weiß den Tag des Gerichts nicht (Mk 13,32). Die hohen Aussagen finden sich fast nur im späten, theologisch überformten Johannesevangelium. Selbst kritische Gelehrte wie Bart Ehrman sagen: Der historische Jesus hat sich nicht als Gott bezeichnet. Der Koran stellt nur richtig, was Jesus wirklich war: „ein Diener Allahs" (19:30).`,
  biblical: {
    summary: `Jesus offenbart seine Gottheit nicht mit der Formel „Ich bin Gott" – die für jüdische Ohren bedeutet hätte „Ich bin der Vater" –, sondern durch Worte und Taten, die im Judentum allein Gott zukommen: Er vergibt Sünden aus eigener Vollmacht (Mk 2,5–10), nennt sich Herr des Sabbats (Mk 2,28), beansprucht, als Menschensohn von Daniel 7 auf Gottes Thron zu sitzen und auf den Wolken zu kommen (Mk 14,61–64), stellt sein Wort über die Tora (Mt 5,21–22) und über Himmel und Erde (Mk 13,31), nennt sich mit dem Gottesnamen „Ich bin" (Joh 8,58), verlangt dieselbe Ehre wie der Vater (Joh 5,23) und nimmt Anbetung an, die Engel und Apostel zurückweisen (Mt 14,33; 28,9.17; Joh 9,38 vs. Apg 10,25–26; Offb 22,8–9). Seine Gegner verstanden das genau und warfen ihm Gotteslästerung vor (Mk 2,7; 14,64; Joh 5,18; 10,33).`,
    detail: `**Die Synoptiker (nicht erst Johannes):**
- **Mk 2,5–10:** „Wer kann Sünden vergeben denn allein Gott?" – Jesus bestreitet die Prämisse nicht, sondern beweist seine Vollmacht durch die Heilung.
- **Mk 14,61–64:** Jesus antwortet auf die Frage nach dem „Sohn des Hochgelobten" mit „Ich bin's" und verbindet Ps 110,1 (Sitzen zur Rechten Gottes) mit Dan 7,13 (Kommen auf den Wolken). Der Hohepriester zerreißt sein Gewand: Gotteslästerung.
- **Dan 7,13–14:** Dem „einen wie ein Menschensohn" wird ewige Herrschaft gegeben, und alle Völker sollen ihm „dienen" – aram. *yiflechun*, ein Verb, das im Danielbuch sonst für die Verehrung Gottes bzw. der Götter steht (Dan 3,12.14.17.18.28; 6,17.21). Auf Wolken fährt im AT der HERR (Ps 104,3; Jes 19,1).
- **Mt 11,27:** Wechselseitige, exklusive Erkenntnis von Vater und Sohn.
- **Mk 6,48–50:** Jesus geht auf dem Meer (vgl. Hiob 9,8: Gott „geht auf den Wogen des Meeres") und sagt *egō eimi* – „Ich bin's".

**Johannes** macht explizit, was die Synoptiker implizit zeigen: Joh 1,1; 8,58; 10,30–33; 20,28.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '2,5–7', quote: `Da aber Jesus ihren Glauben sah, sprach er zu dem Gichtbrüchigen: Mein Sohn, deine Sünden sind dir vergeben. Es waren aber etliche Schriftgelehrte, die saßen allda und gedachten in ihrem Herzen: Wie redet dieser solche Gotteslästerung? Wer kann Sünden vergeben denn allein Gott?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '14,61–64', quote: `Da fragte ihn der Hohepriester abermals und sprach zu ihm: Bist du Christus, der Sohn des Hochgelobten? Jesus aber sprach: Ich bin's; und ihr werdet sehen des Menschen Sohn sitzen zur rechten Hand der Kraft und kommen mit des Himmels Wolken. Da zerriß der Hohepriester seinen Rock und sprach: Was bedürfen wir weiter Zeugen? Ihr habt gehört die Gotteslästerung.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Daniel', ref: '7,13–14', quote: `Ich sah in diesem Gesicht des Nachts, und siehe, es kam einer in des Himmels Wolken wie eines Menschen Sohn bis zu dem Alten und ward vor ihn gebracht. Der gab ihm Gewalt, Ehre und Reich, daß ihm alle Völker, Leute und Zungen dienen sollten. Seine Gewalt ist ewig, die nicht vergeht, und sein Königreich hat kein Ende.`, original: `וְכֹל עַמְמַיָּא אֻמַיָּא וְלִשָּׁנַיָּא לֵהּ יִפְלְחוּן`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,58', quote: `Jesus sprach zu ihnen: Wahrlich, wahrlich ich sage euch: Ehe denn Abraham ward, bin ich.`, original: `πρὶν Ἀβραὰμ γενέσθαι ἐγὼ εἰμί`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '5,23', quote: `… auf daß sie alle den Sohn ehren, wie sie den Vater ehren. Wer den Sohn nicht ehrt, der ehrt den Vater nicht, der ihn gesandt hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '20,28', quote: `Thomas antwortete und sprach zu ihm: Mein HERR und mein Gott!`, original: `ὁ κύριός μου καὶ ὁ θεός μου`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt Jesus Christus als den menschgewordenen ewigen Logos, „wahrer Gott vom wahren Gott" (Nizänum). Nach dem hl. Kyrill ist er „eine fleischgewordene Natur des Gott-Logos": derselbe, der vom Vater vor aller Zeit gezeugt ist, wurde aus der Jungfrau Maria geboren. Die Väter haben die Selbstoffenbarung Jesu nie an einer Formel festgemacht, sondern an der Gesamtheit seiner Worte und Werke: Er tut, was nur Gott tut, und empfängt, was nur Gott gebührt.`,
    detail: `- **Athanasius** (*De Incarnatione*) argumentiert von den Werken her: Wer die Toten auferweckt, die Natur beherrscht und den Tod besiegt, ist der Schöpfer-Logos selbst, der in seinem eigenen Werk handelt.
- **Kyrill** zeigt in seinem Johanneskommentar, dass das „Ich bin" in Joh 8,58 die zeitlose Existenz des Logos ausdrückt – im Gegensatz zum Werden (*genesthai*) Abrahams.
- Das **Bekenntnis am Ende der Basilius-Liturgie** fasst den Glauben zusammen: Der Leib, den der Priester hält, ist der lebenspendende Leib, den der eingeborene Sohn, „unser Herr, Gott und Heiland Jesus Christus", aus der Gottesgebärerin angenommen und mit seiner Gottheit geeint hat.`,
    sources: [
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanum', ref: '381', quote: `… Gott von Gott, Licht vom Licht, wahrer Gott vom wahren Gott, gezeugt, nicht geschaffen, eines Wesens mit dem Vater …`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'liturgie', work: 'Liturgie des hl. Basilius (koptisch), Bekenntnis vor der Kommunion', quote: `… dies ist der lebenspendende Leib, den dein eingeborener Sohn, unser Herr, Gott und Heiland Jesus Christus, von unserer Herrin, der Gottesgebärerin, der heiligen Maria, angenommen hat. Er hat ihn eins gemacht mit seiner Gottheit, ohne Vermischung, ohne Vermengung und ohne Verwandlung …`, translation: 'sinngemäß nach den gängigen Übersetzungen', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu 8,58', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der historisch-kritischen Forschung ist umstritten, wie viel vom johanneischen Selbstanspruch auf den historischen Jesus zurückgeht. Bart Ehrman meint, Jesus habe sich nicht als Gott verstanden; die Erhöhung habe nach Ostern begonnen. Zugleich räumt Ehrman ein, dass schon Paulus in den 50er Jahren Jesus als präexistentes göttliches Wesen sah – also binnen etwa 20 Jahren nach der Kreuzigung. Larry Hurtado und Richard Bauckham zeigen, dass die kultische Verehrung Jesu im frühesten, jüdischen Christentum in Jerusalem einsetzte („Maranatha", 1 Kor 16,22) – eine „explosionsartige" frühe Hochchristologie.`,
    detail: `Für den Islam-Dialog ist entscheidend: Auch die skeptischste Forschung datiert die Anbetung Jesu nicht ins 4. Jahrhundert (Nizäa), sondern in die erste christliche Generation. Und die markinischen Texte (Mk 2; 14), die Ehrman für alt hält, enthalten bereits göttliche Ansprüche. Darrell Bock hat gezeigt, dass der Vorwurf der Gotteslästerung in Mk 14 historisch plausibel ist: Nicht der Messiasanspruch, sondern der Anspruch, zur Rechten Gottes zu sitzen, galt als Lästerung.`,
    sources: [
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God: The Exaltation of a Jewish Preacher from Galilee', year: '2014', status: 'paraphrase', note: 'Ehrman bestreitet den Selbstanspruch des historischen Jesus, räumt aber eine sehr frühe Hochchristologie bei Paulus ein.' },
      { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Darrell L. Bock', work: 'Blasphemy and Exaltation in Judaism: The Charge against Jesus in Mark 14:53–65', year: '1998', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Jesus sagt nicht „Ich bin Gott" in dieser Formel – aber er tut und sagt, was nur Gott tun und sagen kann: Er vergibt Sünden, die gegen andere begangen wurden, nennt sich „Ich bin" vor Abraham, beansprucht Gottes Thron und Gottes Ehre und nimmt Anbetung an, die Engel und Apostel ablehnen. Seine Gegner haben das sofort verstanden und wollten ihn wegen Gotteslästerung steinigen. Übrigens: Wo sagt Jesus in der Bibel „Ich bin nicht Gott, betet mich nicht an"?`,
  keyPoints: [
    `**Die Formel-Forderung ist willkürlich.** Niemand verlangt, dass Muhammad wörtlich sagt „Ich bin das Siegel der Propheten, folgt mir" in genau diesen Worten, um es zu glauben. Entscheidend ist, was jemand beansprucht.`,
    `**„Ich bin Gott" hätte bedeutet: „Ich bin der Vater"** – Jesus offenbart sich als *Sohn*, eins mit dem Vater, aber nicht identisch mit ihm.`,
    `**Göttliche Ansprüche schon im ältesten Evangelium:** Sündenvergebung (Mk 2), Herr des Sabbats (Mk 2,28), Menschensohn auf Gottes Thron (Mk 14,62 mit Dan 7,13–14).`,
    `**„Ehe Abraham ward, bin ich" (Joh 8,58)** greift den Gottesnamen von Ex 3,14 auf – die Zuhörer heben Steine auf.`,
    `**Jesus nimmt Anbetung an** (Mt 14,33; 28,9.17; Joh 9,38), obwohl er selbst lehrt, nur Gott anzubeten (Mt 4,10) – Petrus und der Engel lehnen sie ab.`,
    `**Die Gegner verstanden ihn genau:** „… daß du ein Mensch bist und machst dich selbst zu Gott" (Joh 10,33; vgl. Mk 2,7; 14,64; Joh 5,18).`,
    `**Die Anbetung Jesu ist uralt:** Phil 2,6–11 und 1 Kor 8,6 (50er Jahre), „Maranatha" (aramäisch), Plinius um 112: Christen singen „Christus wie einem Gott".`,
  ],
  argument: {
    name: 'Argument aus den göttlichen Vorrechten',
    summary: 'Wer beansprucht und ausübt, was nach der Schrift allein Gott zukommt, beansprucht göttlichen Rang.',
    premises: [
      { text: `P1: Nach der hebräischen Bibel kommen bestimmte Vorrechte allein Gott zu: Sünden vergeben, über den Sabbat verfügen, auf Gottes Thron sitzen, Anbetung empfangen, die Welt richten.`, support: `Jes 43,25 („Ich tilge deine Übertretungen um meinetwillen"); Ex 20,8–11; Ps 110,1; Jes 42,8; Dtn 6,13; Gen 18,25. Darüber waren sich Juden des 1. Jahrhunderts einig – deshalb der Vorwurf „Wer kann Sünden vergeben denn allein Gott?"` },
      { text: `P2: Jesus beansprucht und übt diese Vorrechte aus – bereits nach dem ältesten Evangelium.`, support: `Mk 2,5–10 (Sündenvergebung), Mk 2,28 (Herr des Sabbats), Mk 14,62 (Thron und Wolken), Mt 14,33; 28,9 (Anbetung), Mt 25,31–46 (Weltgericht).` },
      { text: `P3: Jesus weist die Deutung seiner Gegner, er mache sich Gott gleich, nicht zurück, sondern bekräftigt sie.`, support: `Joh 5,18–23; 8,58–59; 10,30–39; Mk 14,62–64. Im Gegensatz dazu wehren Petrus (Apg 10,26), Paulus und Barnabas (Apg 14,14–15) und der Engel (Offb 22,9) jede Verehrung ab.` },
    ],
    conclusion: `Jesus beanspruchte göttlichen Rang. Wer das bestreitet, muss entweder die Texte – auch die ältesten – für unhistorisch erklären oder erklären, warum ein bloßer Prophet Gottes Vorrechte beansprucht.`,
  },
  voices: [
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der einen fleischgewordenen Natur des Gott-Logos',
      text: `Kyrill liest das „Ich bin" in Joh 8,58 als Selbstaussage des ewigen Logos: Abraham „wurde" (*genesthai*), der Sohn aber „ist" (*eimi*) – ohne Anfang. Zugleich besteht er darauf, dass derselbe, der so spricht, wirklich Mensch geworden ist. Gegen jede Trennung betont er: Nicht ein Mensch spricht hier über einen Gott in ihm, sondern der eine menschgewordene Logos spricht über sich selbst. Deshalb kann Jesus mit menschlichem Mund göttliche Worte sagen.`,
      sources: [{ kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Kommentar zum Johannesevangelium', ref: 'zu 8,58', status: 'paraphrase' }],
    },
    {
      person: 'bauckham',
      role: 'als Neutestamentler',
      text: `Richard Bauckham zeigt, dass Jesus in den Evangelien die „göttliche Identität" beansprucht: Er übt Gottes einzigartige Herrschaft aus, teilt Gottes Thron (Ps 110,1) und wird in die Verehrung eingeschlossen, die nach jüdischem Verständnis nur dem einen Gott gilt. Die frühesten Christen, allesamt monotheistische Juden, hätten Jesus nicht angebetet, wenn sie ihn nicht als Teil der Identität des einen Gottes verstanden hätten.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'hurtado',
      role: 'als Historiker der frühesten Christusverehrung',
      text: `Larry Hurtado hat nachgewiesen, dass die kultische Verehrung Jesu – Gebet zu ihm, Anrufung seines Namens, Taufe in seinem Namen, Hymnen auf ihn, das Herrenmahl – im frühesten jüdischen Christentum begann, nicht erst in der heidnischen Mission. Das aramäische Gebet „Maranatha" („Unser Herr, komm!", 1 Kor 16,22) zeigt, dass schon die Jerusalemer Gemeinde zu Jesus betete. Für Hurtado ist das eine „Mutation" im jüdischen Monotheismus, die sich nur durch die Überzeugung erklärt, Gott selbst verlange diese Verehrung Jesu.`,
      sources: [{ kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'Lord Jesus Christ: Devotion to Jesus in Earliest Christianity', year: '2003', status: 'paraphrase' }],
    },
    {
      person: 'james-white',
      role: 'als Debattierer mit muslimischen Apologeten (nur zu Trinität und Islam)',
      text: `James White weist in seinen Debatten darauf hin, dass die Forderung nach dem Satz „Ich bin Gott, betet mich an" eine falsche Erwartung an die Selbstoffenbarung Jesu stellt: Hätte Jesus „Ich bin Gott" gesagt, hätte jeder Jude verstanden „Ich bin der Vater" – genau das wäre Modalismus gewesen. Jesus offenbart sich stattdessen als der Sohn, der mit dem Vater eins ist und zugleich von ihm unterschieden. White betont die Linie der Ich-bin-Worte bei Johannes vor dem Hintergrund von Jes 43,10 (LXX).`,
      sources: [{ kind: 'fachliteratur', author: 'James R. White', work: 'The Forgotten Trinity', year: '1998', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Apologet',
      text: `C. S. Lewis machte auf die ungeheuerliche Pointe der Sündenvergebung aufmerksam: Dass jemand Sünden vergibt, die gegen ihn selbst begangen wurden, ist verständlich. Dass Jesus aber Menschen Sünden vergibt, die sie anderen angetan haben, ergibt nur Sinn, wenn er der Gott ist, gegen den jede Sünde letztlich gerichtet ist. Lewis' berühmte Alternative („Lügner, Wahnsinniger oder Herr") muss man heute um die Option der Legendenbildung ergänzen – die aber an der frühen Datierung der Quellen scheitert.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch II, Kap. 3', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Islam-Apologet',
      text: `Abuna Zakaria Botros dreht die Herausforderung gerne um: Wo sagt Jesus im Evangelium „Ich bin nicht Gott, betet mich nicht an"? Und er verweist auf den Koran selbst, in dem Gott aus dem Busch zu Mose spricht: „Ich bin Allah, es gibt keinen Gott außer Mir, so diene Mir" (20:14). Genau auf diese Dornbusch-Offenbarung („Ich bin, der ich bin", Ex 3,14) bezieht sich Jesus mit seinem „Ehe Abraham ward, bin ich" – ein Hinweis, den arabischsprachige Zuhörer sofort verstehen.`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'kein-wortgleicher-vers',
      objection: `Ganz einfach: Zeig mir einen einzigen Vers, in dem Jesus sagt „Ich bin Gott, betet mich an". Wenn es ihn nicht gibt, ist die Diskussion beendet.`,
      objectionBy: 'Zakir Naik',
      answer: `Die Formel gibt es nicht – aus gutem Grund: Für Juden hätte „Ich bin Gott" geheißen „Ich bin der Vater". Jesus offenbart sich als der Sohn, der tut, was nur Gott tut: Sünden vergeben, über den Sabbat herrschen, Anbetung annehmen, die Welt richten. Und er nimmt den Gottesnamen in Anspruch: „Ehe Abraham ward, bin ich" (Joh 8,58). Erlaubst du mir, die Frage umzudrehen? Wo sagt Jesus „Ich bin nicht Gott, betet mich nicht an"?`,
      detail: `Die Forderung nach einer bestimmten Formel ist ein **Kategorienfehler**: Identität wird nicht nur durch Sätze offenbart, sondern durch Ansprüche und Taten. Auch Muslime glauben Dinge über Muhammad, die er nicht in einer bestimmten Formel gesagt hat. Entscheidend ist der Gesamtbefund – und der ist in allen vier Evangelien eindeutig.`,
      questionsBack: [
        `Welche Aussagen würdest du außer dem exakten Satz „Ich bin Gott, betet mich an" als Anspruch auf Gottheit gelten lassen?`,
        `Wenn ein bloßer Mensch sagen würde „Ehe Abraham ward, bin ich" – wie würdest du das verstehen?`,
      ],
      followUps: [
        {
          id: 'joh-8-58-praeexistenz-im-plan',
          objection: `„Ehe Abraham ward, bin ich" heißt nur: Er war in Gottes Plan vorherbestimmt – wie auch Muhammad nach einer Überlieferung schon Prophet war, als Adam noch zwischen Geist und Körper war.`,
          objectionBy: 'Shabir Ally',
          answer: `Dann hätte Jesus sagen müssen „Ehe Abraham ward, war ich vorherbestimmt". Er stellt aber das Werden Abrahams (*genesthai*) dem zeitlosen Sein „Ich bin" (*egō eimi*) gegenüber – und seine Zuhörer heben Steine auf, um ihn zu töten (Joh 8,59). Für eine Aussage über Vorherbestimmung steinigt man niemanden.`,
          detail: `*Egō eimi* ohne Prädikat ruft Ex 3,14 (LXX: *egō eimi ho ōn*) und besonders Jes 43,10 (LXX: „damit ihr erkennt und glaubt, dass ich bin", *hoti egō eimi*) auf. Jesus verwendet dieselbe Formel in Joh 8,24.28 („Wenn ihr nicht glaubt, dass ich es bin …") und in 18,5–6, wo die Soldaten bei seinem „Ich bin's" zurückweichen und zu Boden fallen. Der Kontext von Joh 8 ist eine Debatte über Jesu Verhältnis zu Abraham (8,53: „Bist du mehr als unser Vater Abraham?").`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '8,59', quote: `Da hoben sie Steine auf, daß sie auf ihn würfen. Aber Jesus verbarg sich und ging zum Tempel hinaus …`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Exodus', ref: '3,14', quote: `Gott sprach zu Mose: Ich werde sein, der ich sein werde. Und sprach: Also sollst du den Kindern Israel sagen: Ich werde sein, der hat mich zu euch gesandt.`, original: `LXX: ἐγώ εἰμι ὁ ὤν`, translation: 'Luther 1912', status: 'paraphrase', note: 'Die Septuaginta, die Bibel der griechischsprechenden Juden, übersetzt mit „Ich bin der Seiende".' },
          ],
          followUps: [
            {
              id: 'juden-missverstanden-ihn',
              objection: `Die Juden haben Jesus ständig missverstanden – sie wollten ihn auch aus anderen Gründen steinigen. Ihre Reaktion beweist nichts.`,
              objectionBy: 'Shabir Ally',
              answer: `Wenn sie ihn missverstanden hätten, wäre das der Moment für eine Klarstellung gewesen: „Nein, ich meine nur Vorherbestimmung." Jesus korrigiert aber nichts – weder hier noch in Joh 5,18 oder 10,33. Ein wahrer Prophet, der wüsste, dass man ihn für einen Gotteslästerer hält, würde das nicht stehen lassen. Petrus und Paulus haben jede Verehrung sofort zurückgewiesen (Apg 10,26; 14,14–15).`,
              followUps: [
                {
                  id: 'johannes-spaet-unhistorisch',
                  objection: `Das Johannesevangelium ist spät (um 90–100) und theologisch. Selbst christliche Gelehrte halten diese Reden nicht für historisch. Bleib bei Markus.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Gern – denn auch bei Markus, dem ältesten Evangelium, vergibt Jesus Sünden, was „allein Gott" kann (Mk 2,7), nennt sich Herr des Sabbats (2,28), geht auf dem Meer und sagt „Ich bin's" (6,50) und beansprucht vor dem Hohen Rat, auf Gottes Thron zu sitzen und auf den Wolken zu kommen – worauf er der Gotteslästerung beschuldigt wird (14,62–64). Johannes macht explizit, was Markus bereits enthält.`,
                  detail: `Außerdem: Für einen Muslim ist das Argument zweischneidig. Der Koran bestätigt das „Injil", das die Christen zur Zeit Muhammads besaßen (5:47) – und dazu gehörte das Johannesevangelium seit Jahrhunderten. Wer Johannes als unhistorisch verwirft, verwirft einen Text, den der Koran als Maßstab für die Christen anerkennt.`,
                  questionsBack: [`Wenn Markus der zuverlässigste Bericht ist: Was bedeutet für dich Mk 14,62 vor dem Hintergrund von Dan 7,13–14?`],
                },
              ],
            },
          ],
        },
        {
          id: 'joh-10-30-einheit-im-willen',
          objection: `„Ich und der Vater sind eins" (Joh 10,30) bedeutet Einheit im Willen und Ziel – Jesus betet in Joh 17,21, dass die Jünger auch „eins" sein sollen. Werden sie damit zu Gott?`,
          objectionBy: 'Ahmed Deedat',
          answer: `Richtig: „Eins" allein beweist keine Wesensgleichheit – Joh 17,21 zeigt das. Der Kontext von 10,30 ist aber ein anderer: Niemand kann die Schafe aus **meiner** Hand reißen (10,28) und niemand aus **des Vaters** Hand (10,29) – Jesus stellt seine Hand neben Gottes Hand. Darauf heben die Juden Steine auf, „weil du ein Mensch bist und dich selbst zu Gott machst" (10,33). Und in Joh 17 bitten die Jünger nicht um Gottes Ehre, Jesus aber bittet um die Herrlichkeit, die er beim Vater „hatte, ehe die Welt war" (17,5).`,
          sources: [
            { kind: 'bibel', work: 'Johannes', ref: '10,28–30', quote: `Und ich gebe ihnen das ewige Leben; und sie werden nimmermehr umkommen, und niemand wird sie mir aus meiner Hand reißen. Der Vater, der mir sie gegeben hat, ist größer denn alles; und niemand kann sie aus meines Vaters Hand reißen. Ich und der Vater sind eins.`, original: `ἐγὼ καὶ ὁ πατὴρ ἕν ἐσμεν`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Johannes', ref: '10,33', quote: `Die Juden antworteten ihm: Um des guten Werks willen steinigen wir dich nicht, sondern um der Gotteslästerung willen, und daß du ein Mensch bist und machst dich selbst zu Gott.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut sinngemäß.' },
          ],
          followUps: [
            {
              id: 'psalm-82-ihr-seid-goetter',
              objection: `Jesus antwortet doch selbst: „Steht nicht geschrieben: Ihr seid Götter?" (Joh 10,34). Er sagt also: Ich bin nur in dem Sinn „Gott", wie die Richter in Psalm 82 – ein Mensch mit göttlichem Auftrag.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Jesus argumentiert vom Geringeren zum Größeren: Wenn schon die Menschen, an die Gottes Wort erging, „Götter" genannt wurden – wie viel mehr der, „den der Vater geheiligt und in die Welt gesandt hat" (10,36)? Er nimmt nichts zurück, sondern legt nach: „Der Vater ist in mir und ich in ihm" (10,38). Und die Juden reagieren nicht erleichtert – sie versuchen erneut, ihn zu ergreifen (10,39).`,
              detail: `Das rabbinische *qal wa-chomer* (vom Leichteren zum Schwereren) entkräftet den Vorwurf der Gotteslästerung auf der Ebene der Schrift, ohne den Anspruch abzuschwächen. Zudem unterscheidet Jesus: Die Richter empfingen das Wort Gottes, er wurde vom Vater in die Welt gesandt – er kommt von außerhalb der Welt.`,
            },
          ],
        },
        {
          id: 'thomas-war-ueberrascht',
          objection: `„Mein Herr und mein Gott!" (Joh 20,28) war ein Ausruf der Überraschung, wie wenn jemand heute „Oh mein Gott!" sagt. Thomas redete nicht Jesus an.`,
          objectionBy: 'Islamischer Online-Apologet',
          answer: `Der Text sagt ausdrücklich: „Thomas antwortete und sprach **zu ihm**." Für einen frommen Juden wäre es undenkbar gewesen, Gottes Namen als Ausruf zu missbrauchen (Ex 20,7). Und Jesus tadelt ihn nicht, sondern preist alle, die so glauben, ohne zu sehen (20,29). Johannes nennt unmittelbar danach den Zweck seines Buches: „daß ihr glaubet, Jesus sei Christus, der Sohn Gottes" (20,31).`,
        },
      ],
    },
    {
      id: 'markus-kein-gottesanspruch',
      objection: `Im ältesten Evangelium, Markus, nennt sich Jesus „Menschensohn". Das heißt auf Aramäisch einfach „Mensch". Ein Gottesanspruch ist das nicht.`,
      objectionBy: 'Shabir Ally',
      answer: `„Menschensohn" kann im Aramäischen „Mensch" heißen – aber Jesus benutzt es mit Artikel als Titel: „**der** Menschensohn", und er verbindet ihn mit Daniel 7: der eine, der auf den Wolken kommt, ewige Herrschaft empfängt und dem alle Völker dienen. Mit genau diesem Titel vergibt er Sünden (Mk 2,10), ist Herr des Sabbats (2,28) und kündigt an, zur Rechten Gottes zu sitzen (14,62). Der Titel verhüllt und offenbart zugleich.`,
      followUps: [
        {
          id: 'priester-vergeben-auch',
          objection: `Auch Priester sprachen Vergebung zu, und Nathan sagte zu David: „Der HERR hat deine Sünde weggenommen" (2 Sam 12,13). Sündenvergebung im Namen Gottes ist nichts Besonderes.`,
          objectionBy: 'Shabir Ally',
          answer: `Nathan sagt: „**Der HERR** hat deine Sünde weggenommen" – er verkündet Gottes Vergebung. Jesus sagt: „Deine Sünden sind dir vergeben" und begründet es mit seiner **eigenen** Vollmacht: „damit ihr wisset, daß des Menschen Sohn Macht hat, auf Erden die Sünden zu vergeben" (Mk 2,10). Die Schriftgelehrten verstanden den Unterschied – sonst hätten sie nicht „Gotteslästerung" gedacht.`,
          followUps: [
            {
              id: 'mt-9-8-menschen-vollmacht',
              objection: `Matthäus sagt, die Menge pries Gott, „der solche Macht den Menschen gegeben hat" (Mt 9,8). Also kann jeder Mensch mit Gottes Erlaubnis vergeben.`,
              objectionBy: 'Islamischer Apologet (Online-Debatte)',
              answer: `Matthäus berichtet die Reaktion der staunenden Menge, nicht eine Lehraussage Jesu. Die Lehraussage steht im Vers davor: „des Menschen Sohn" hat Vollmacht (9,6). Später gibt Jesus seinen Aposteln Anteil an dieser Vollmacht (Joh 20,22–23) – eine abgeleitete Vollmacht, die von ihm ausgeht. Gerade das zeigt: Er besitzt sie ursprünglich, sie besitzen sie von ihm.`,
              detail: `Aus koptischer Sicht ist dieser Punkt auch pastoral wichtig: Die Kirche spendet im Sakrament der Buße die Vergebung nicht aus eigener Macht, sondern in der Vollmacht Christi, die er den Aposteln übertragen hat. Das setzt voraus, dass Christus selbst die göttliche Vollmacht hat.`,
            },
          ],
        },
        {
          id: 'menschensohn-ist-israel',
          objection: `In Daniel 7 ist der Menschensohn ein Symbol für das Volk der Heiligen (7,18.27). Es geht um Israel, nicht um eine göttliche Person.`,
          objectionBy: 'Jüdisch-islamischer Einwand (z. B. Tovia Singer, von Muslimen übernommen)',
          answer: `Daniel deutet die Vision auf die Heiligen, die das Reich empfangen – aber die Gestalt selbst kommt „mit den Wolken des Himmels", was im AT allein Gott tut (Ps 104,3; Jes 19,1), und empfängt eine Verehrung (*yiflechun*), die im Danielbuch sonst Gott bzw. Göttern gilt. Entscheidend ist, wie **Jesus** den Text verwendet: Er bezieht ihn auf sich, verbunden mit dem Sitzen zur Rechten Gottes (Ps 110,1). Und der Hohepriester versteht das als Gotteslästerung.`,
          followUps: [
            {
              id: 'laesterung-wegen-messiasanspruch',
              objection: `Der Vorwurf der Gotteslästerung bezog sich auf den Messiasanspruch, nicht auf Göttlichkeit. Ein Messias war ein Mensch.`,
              objectionBy: 'Bart Ehrman',
              answer: `Sich als Messias auszugeben war im Judentum keine Gotteslästerung – Rabbi Akiva hielt um 132 Bar Kochba für den Messias, ohne als Lästerer zu gelten. Lästerlich war der Anspruch, auf Gottes Thron zu sitzen und als göttlicher Richter auf den Wolken zu kommen. Darrell Bock hat in einer eingehenden Studie gezeigt, dass genau dies im Judentum als Antastung der Würde Gottes galt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Darrell L. Bock', work: 'Blasphemy and Exaltation in Judaism: The Charge against Jesus in Mark 14:53–65', year: '1998', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'prozessbericht-erfunden',
                  objection: `Kein Jünger war beim Verhör dabei. Der Prozessbericht ist eine christliche Konstruktion.`,
                  objectionBy: 'Bart Ehrman',
                  answer: `Dass niemand dabei war, ist unsicher: Joseph von Arimathäa und Nikodemus waren Ratsmitglieder (Mk 15,43; Joh 7,50–51), und solche Verfahren blieben nicht geheim. Vor allem aber: Wer den Bericht für erfunden hält, muss erklären, warum die frühesten Christen dann so früh glaubten, Jesus sitze zur Rechten Gottes (Phil 2,9–11; Röm 8,34; Apg 7,56). Und für einen Muslim gilt wieder: Das Markusevangelium gehörte zum Injil, das der Koran den Christen bestätigt.`,
                  questionsBack: [`Welche frühere Quelle als Markus und Paulus hast du, die zeigt, dass Jesus keinen göttlichen Anspruch erhob?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warum-nennst-du-mich-gut',
      objection: `Jesus sagt: „Was heißest du mich gut? Niemand ist gut denn der einige Gott" (Mk 10,18). Damit lehnt er doch ausdrücklich ab, Gott zu sein!`,
      objectionBy: 'Ahmed Deedat',
      answer: `Jesus sagt nicht „Ich bin nicht gut" oder „Ich bin nicht Gott", sondern stellt eine Frage: Weißt du, was du sagst, wenn du mich „gut" nennst? Dann fordert er den Mann auf, alles zu verlassen und **ihm** nachzufolgen (10,21) – er stellt die Nachfolge seiner Person über das Halten der Gebote. Die Frage ist eine Einladung, zu Ende zu denken: Wenn nur Gott gut ist und du mich gut nennst …`,
      followUps: [
        {
          id: 'mein-gott-und-euer-gott',
          objection: `Nach der Auferstehung sagt Jesus: „Ich fahre auf zu meinem Vater und eurem Vater, zu meinem Gott und eurem Gott" (Joh 20,17). Wer einen Gott hat, ist nicht Gott.`,
          objectionBy: 'Shabir Ally',
          answer: `Als wahrer Mensch hat der menschgewordene Sohn einen Gott, zu dem er betet – das bekennen wir. Beachte aber: Er sagt nicht „unser Vater, unser Gott", sondern unterscheidet „mein" und „euer". Sein Verhältnis zum Vater ist ein anderes als unseres. Wenige Verse später nennt Thomas ihn „mein Herr und mein Gott" (20,28) – Johannes stellt beides bewusst nebeneinander.`,
          detail: `Kyrill erklärt solche Stellen mit der wirklichen Menschwerdung: Der Logos hat sich so wahrhaft mit unserer Menschheit vereint, dass er auch das menschliche Verhältnis zu Gott – Gebet, Gehorsam, „mein Gott" – als sein eigenes lebt. Das ist kein Beweis gegen seine Gottheit, sondern ein Beweis für die Echtheit seines Menschseins.`,
        },
      ],
    },
    {
      id: 'proskynese-nur-huldigung',
      objection: `Das griechische Wort proskyneo heißt auch einfach „sich verbeugen, huldigen" – vor Königen etwa. Dass Menschen vor Jesus niederfielen, beweist keine Anbetung als Gott.`,
      objectionBy: 'Shabir Ally',
      answer: `Richtig, das Wort hat eine Bandbreite – der Kontext entscheidet. Jesus selbst sagt: „Du sollst anbeten Gott, deinen HERRN, und ihm allein dienen" (Mt 4,10). Dann fallen die Jünger im Boot vor ihm nieder und bekennen: „Du bist wahrlich Gottes Sohn!" (Mt 14,33); die Frauen und die Elf beten den Auferstandenen an (28,9.17). Als Kornelius vor Petrus niederfällt, sagt Petrus: „Stehe auf, ich bin auch ein Mensch" (Apg 10,26). Jesus sagt das nie.`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '14,33', quote: `Die aber im Schiff waren, kamen und fielen vor ihm nieder und sprachen: Du bist wahrlich Gottes Sohn!`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Johannes', ref: '9,38', quote: `Er aber sprach: HERR, ich glaube! und betete ihn an.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '10,25–26', quote: `Und als Petrus hineinkam, ging ihm Kornelius entgegen und fiel zu seinen Füßen und betete ihn an. Petrus aber richtete ihn auf und sprach: Stehe auf, ich bin auch ein Mensch.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'offenbarung-bildsprache',
          objection: `Die Anbetung in der Offenbarung (Offb 5) ist apokalyptische Bildsprache. Damit kannst du nichts beweisen.`,
          objectionBy: 'Islamischer Apologet (Online-Debatte)',
          answer: `Gerade die Offenbarung ist an diesem Punkt besonders streng: Als Johannes vor dem Engel niederfällt, sagt dieser zweimal „Tu es nicht! … Bete Gott an!" (19,10; 22,9). Im selben Buch nennt sich Jesus „das A und das O, der Erste und der Letzte" (22,13) – derselbe Titel, den Gott trägt (1,8; Jes 44,6) –, und „alle Geschöpfe" bringen dem Lamm dieselbe Ehre wie dem, der auf dem Thron sitzt (5,13). Ein Buch, das Engelverehrung verbietet, schreibt dem Lamm göttliche Anbetung zu.`,
          sources: [
            { kind: 'bibel', work: 'Offenbarung', ref: '22,13', quote: `Ich bin das A und das O, der Anfang und das Ende, der Erste und der Letzte.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Jesaja', ref: '44,6', quote: `So spricht der HERR, der König Israels, und sein Erlöser, der HERR Zebaoth: Ich bin der Erste, und ich bin der Letzte, und außer mir ist kein Gott.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'gottheit-spaeter-erfunden',
      objection: `Die Gottheit Jesu wurde erst in Nizäa 325 unter Kaiser Konstantin beschlossen. Die ersten Christen sahen in ihm einen Propheten.`,
      objectionBy: 'Zakir Naik',
      answer: `Das ist historisch nicht haltbar. Schon in den Paulusbriefen der 50er Jahre wird Jesus angebetet: Phil 2,6–11 – vermutlich ein noch älterer Hymnus – überträgt Jes 45,23 („Mir sollen sich alle Knie beugen") auf Jesus; 1 Kor 8,6 teilt das Schma zwischen Vater und Jesus auf. Ignatius von Antiochien nennt um 110 Jesus „unseren Gott", und der römische Statthalter Plinius berichtet um 112, Christen sängen „Christus wie einem Gott" Hymnen. Nizäa hat die Gottheit Christi gegen Arius verteidigt, nicht erfunden.`,
      sources: [
        { kind: 'bibel', work: 'Philipper', ref: '2,9–11', quote: `Darum hat ihn auch Gott erhöht und hat ihm einen Namen gegeben, der über alle Namen ist, daß in dem Namen Jesu sich beugen sollen aller derer Kniee, die im Himmel und auf Erden und unter der Erde sind, und alle Zungen bekennen sollen, daß Jesus Christus der HERR sei, zur Ehre Gottes, des Vaters.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'sonstiges', author: 'Plinius der Jüngere', work: 'Briefe (Epistulae)', ref: '10,96,7', year: 'ca. 112', quote: `… dass sie sich an einem bestimmten Tag vor Sonnenaufgang zu versammeln pflegten und Christus wie einem Gott im Wechsel ein Lied sangen.`, original: `carmenque Christo quasi deo dicere secum invicem`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '18,2', year: 'ca. 110', quote: `Denn unser Gott, Jesus der Christus, wurde von Maria im Schoß getragen …`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'ehrman-engel-christologie',
          objection: `Selbst Ehrman sagt, Paulus habe Jesus als eine Art Engel gesehen (Gal 4,14) – ein erhöhtes himmlisches Wesen, aber nicht den einen Gott.`,
          objectionBy: 'Bart Ehrman',
          answer: `Gal 4,14 ist eine Steigerung: Die Galater nahmen Paulus auf „wie einen Engel Gottes, ja wie Christus Jesus" – Christus steht über den Engeln. Paulus schreibt Jesus zu, was kein Engel hat: Schöpfungsmittlerschaft (1 Kor 8,6), Gottes Namen „Herr" aus Jes 45,23 (Phil 2,10–11) und Anrufung im Gebet (1 Kor 1,2). Und Ehrmans eigenes Zugeständnis zählt: Binnen 20 Jahren nach dem Kreuz galt Jesus als präexistentes göttliches Wesen – das widerlegt die These vom bloßen Propheten.`,
          detail: `Hebr 1,4–14 grenzt den Sohn ausdrücklich von den Engeln ab: „Zu welchem Engel hat er jemals gesagt: Du bist mein Sohn?" und wendet auf ihn Ps 45,7 an: „Gott, dein Stuhl währt von Ewigkeit zu Ewigkeit" (Hebr 1,8) sowie Ps 102,26–28, ein Lied über den Schöpfer (Hebr 1,10–12).`,
        },
      ],
    },
    {
      id: 'koran-20-14-gott-sagt-es-klar',
      objection: `Im Koran sagt Gott klar: „Ich bin Allah, es gibt keinen Gott außer Mir, so diene Mir" (20:14). So redet Gott. Jesus hat nie so geredet.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Interessant, dass du gerade diesen Vers nennst: Er steht in der Dornbusch-Szene, in der Gott sich Mose offenbart. Genau auf diese Offenbarung – „Ich bin, der ich bin" (Ex 3,14) – bezieht sich Jesus mit seinem „Ehe Abraham ward, **bin ich**". Jesus redet also sehr wohl in der Sprache des Dornbuschs – nur nicht als der Vater, sondern als der Sohn, der vom Vater gesandt ist.`,
      sources: [
        { kind: 'koran', work: 'Sure 20 (Ta-Ha)', ref: '20:14', quote: `Gewiss, Ich bin Allah. Es gibt keinen Gott außer Mir. So diene Mir und verrichte das Gebet zu Meinem Gedenken.`, original: `innanī anā llāhu lā ilāha illā anā fa-ʿbudnī`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/20/14' },
      ],
      followUps: [
        {
          id: 'ego-eimi-ist-alltaeglich',
          objection: `„Egō eimi" ist ganz normales Griechisch: „Ich bin's." Auch der Blindgeborene sagt in Joh 9,9 „egō eimi". Wird er dadurch Gott?`,
          objectionBy: 'Islamischer Apologet mit Griechischkenntnissen',
          answer: `Guter Einwand – und richtig: Meistens heißt *egō eimi* einfach „Ich bin's". Deshalb entscheidet der Kontext. In Joh 9,9 beantwortet der Mann die Frage, ob er der Blinde sei. In Joh 8,58 dagegen steht „Ich bin" ohne Ergänzung im Gegensatz zum Werden Abrahams, und die Zuhörer wollen steinigen; in 18,6 fallen die Soldaten zu Boden; in Mk 6,50 spricht es der, der auf dem Meer geht wie Gott in Hiob 9,8. Ein Wort ist alltäglich – sein Gebrauch an diesen Stellen ist es nicht.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wo sagt Jesus im Evangelium: „Ich bin nicht Gott, betet mich nicht an"?`,
    `Wenn ein Prophet merkt, dass man ihn der Gotteslästerung beschuldigt, weil er sich Gott gleich mache – würde er das stehen lassen?`,
    `Warum lehnt Petrus Anbetung ab (Apg 10,26), Jesus aber nicht (Mt 14,33; Joh 9,38)?`,
    `Wer kann nach jüdischem Verständnis Sünden vergeben, die gegen andere begangen wurden?`,
    `Was meint Jesus, wenn er sich vor dem Hohen Rat auf Dan 7,13–14 bezieht?`,
    `Der Koran bestätigt das Injil in den Händen der Christen (5:47). Gehörte das Johannesevangelium im 7. Jahrhundert dazu?`,
  ],
  avoid: [
    `Nicht behaupten, Jesus habe wörtlich „Ich bin Gott" gesagt – das stimmt nicht und macht dich unglaubwürdig.`,
    `Nicht Joh 10,30 isoliert als Beweis bringen; der Einwand mit Joh 17,21 ist berechtigt. Argumentiere mit dem Kontext (10,28–33).`,
    `Nicht Joh 1,1 oder Joh 20,28 als „Jesus sagt" ausgeben – das sind Aussagen des Evangelisten bzw. des Thomas. Sie zeigen den Glauben der Urkirche und Jesu Zustimmung, sind aber keine Selbstaussagen.`,
    `Die „Lügner–Wahnsinniger–Herr"-Alternative nicht ohne die Legenden-Option verwenden – ein gebildeter Gegner wird sie sofort nennen.`,
  ],
  concessions: [
    `Die explizitesten Selbstaussagen stehen im Johannesevangelium; über deren Verhältnis zum Wortlaut des historischen Jesus diskutiert die Forschung.`,
    `„Menschensohn" kann im Aramäischen schlicht „Mensch" bedeuten; seine Würde ergibt sich aus dem Bezug auf Daniel 7 und dem Kontext.`,
    `*Proskyneō* bedeutet nicht immer Anbetung im kultischen Sinn; die Beweiskraft liegt im Kontext und im Kontrast zu Petrus und den Engeln.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Bauckham', work: 'Jesus and the God of Israel', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Larry W. Hurtado', work: 'How on Earth Did Jesus Become a God?', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael F. Bird u. a.', work: 'How God Became Jesus: The Real Origins of Belief in Jesus\' Divine Nature – A Response to Bart Ehrman', year: '2014', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Natur Christi (The Nature of Christ)', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gottheit Christi', 'Menschensohn', 'Ich-bin-Worte', 'Anbetung', 'Markus'],
  related: [
    'islam-gottheit-christi/jesus-betete-ass-schlief',
    'islam-gottheit-christi/sohn-gottes-heisst-diener',
    'historischer-jesus/gottheit-jesu-spaet-erfunden',
    'antitrinitarier/trinitaet-in-nizaa-erfunden',
    'zeugen-jehovas/joh-1-1-ein-gott',
    'islam-dilemma/das-islamische-dilemma',
  ],
};

export default claim;
