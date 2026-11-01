import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kopten-sind-monophysiten',
  title: `„Die Kopten sind Monophysiten – sie leugnen die menschliche Natur Christi."`,
  proponents: [
    { name: 'Johannes von Damaskus', role: 'Byzantinischer Kirchenvater (8. Jh.)', work: 'De haeresibus 83: „Ägypter, auch Schematiker und Monophysiten genannt"' },
    { name: 'Ältere katholische und protestantische Handbücher', role: 'Dogmengeschichte und Konfessionskunde bis weit ins 20. Jh.', work: 'Bezeichnung der orientalischen Kirchen als „Monophysiten"' },
    { name: 'Traditionalistische östlich-orthodoxe Kritiker', role: 'u. a. Stimmen vom Berg Athos (1990er-Jahre)', work: 'Ablehnung der Dialogerklärungen von 1989/90' },
    { name: 'Evangelikale Apologeten und Lexika', role: 'Populäre Darstellungen der Kirchengeschichte', work: 'Gleichsetzung von „miaphysitisch" mit „monophysitisch"' },
  ],
  steelman: `Das Konzil von Chalcedon (451) bekannte Christus „in zwei Naturen", gerade um die volle Menschheit Christi gegen Eutyches zu schützen. Die Kopten haben genau diese Formel abgelehnt und bestehen darauf, dass es nach der Einigung nur „eine Natur" gebe. Was soll das anderes heißen, als dass die menschliche Natur in der göttlichen aufgegangen ist – oder dass eine Mischnatur entstand, die weder ganz Gott noch ganz Mensch ist? „Natur" bezeichnet doch das, was etwas ist: Wer nur eine Natur bekennt, bekennt nur ein Was. Ihr Papst Dioskur hat 449 auf der „Räubersynode" ausgerechnet Eutyches rehabilitiert und Flavian abgesetzt, der Eutyches verurteilt hatte. Euer großer Theologe Severus lehrte „eine Wirksamkeit" Christi – das führte zum Monenergismus und Monotheletismus, die das sechste Konzil 681 verurteilte. Und wenn man einfache Kopten fragt, sagen viele tatsächlich: „Christus hat nur eine Natur." Schon Johannes von Damaskus führte euch deshalb in seinem Ketzerkatalog als „Monophysiten". Wer die Menschheit Christi nicht klar als eigene, vollständige Natur bekennt, gefährdet das Heil – denn was nicht angenommen ist, ist nicht geheilt.`,
  biblical: {
    summary: `Die Schrift bezeugt **einen** Christus, der zugleich wahrer Gott und wahrer Mensch ist: „Das Wort **ward Fleisch**" (Joh 1,14) – derselbe ewige Logos ist Subjekt der Menschwerdung. Er nahm „Fleisch und Blut" an und wurde „seinen Brüdern **in allem** gleich" (Hebr 2,14.17), „versucht allenthalben gleichwie wir, doch ohne Sünde" (Hebr 4,15); er wuchs an Weisheit (Lk 2,52), weinte (Joh 11,35), hatte Hunger, Durst und Todesangst und betete: „Nicht wie ich will, sondern wie du willst" (Mt 26,39). Zugleich wird von **demselben** gesagt, was nur Gott zukommt: Die Juden „hätten den **Herrn der Herrlichkeit** nicht gekreuzigt" (1 Kor 2,8); Gott hat die Kirche „durch sein **eigen Blut** erworben" (Apg 20,28); Maria ist „die Mutter meines **Herrn**" (Lk 1,43). Diese Einheit des einen Subjekts mit voller Gottheit und voller Menschheit ist genau, was die koptische Kirche mit Kyrill bekennt.`,
    detail: `**Ein Subjekt:** Das Neue Testament spricht nie von zwei „Sie" in Christus. Derselbe, der „in göttlicher Gestalt war", „nahm Knechtsgestalt an" und „ward gehorsam bis zum Tode" (Phil 2,6–8). Diese Redeweise – menschliche Aussagen vom göttlichen Subjekt und göttliche Aussagen vom menschgewordenen Christus (*communicatio idiomatum*) – ist der biblische Kern der kyrillischen Christologie.

**Volle Menschheit:** Hebr 2,17 („in allem gleich") schließt eine reduzierte oder vergöttlichte, nicht mehr menschliche Menschheit aus. Die koptische Kirche bekennt deshalb ausdrücklich Leib, vernünftige Seele, menschlichen Willen und menschliches Leiden Christi. Der Grundsatz Gregors von Nazianz – „Was nicht angenommen ist, ist nicht geheilt" – ist auch ihr Grundsatz.

**Mk 13,32 und Lk 2,52:** Kyrill erklärt solche Stellen so, dass der Logos sich in seiner Menschwerdung die Grenzen der Menschheit „heilsökonomisch" zu eigen machte – er nahm wirklich die menschliche Erfahrung des Wachsens und Nichtwissens an, ohne aufzuhören, Gott zu sein.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit, eine Herrlichkeit als des eingeborenen Sohnes vom Vater, voller Gnade und Wahrheit.`, translation: 'Luther 1912', status: 'verbatim', original: `Καὶ ὁ λόγος σὰρξ ἐγένετο` },
      { kind: 'bibel', work: 'Hebräer', ref: '2,14.17', quote: `Nachdem nun die Kinder Fleisch und Blut haben, ist er dessen gleichermaßen teilhaftig geworden … Daher mußte er allerdinge seinen Brüdern gleich werden, auf daß er barmherzig würde und ein treuer Hoherpriester vor Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '2,8', quote: `… denn wo sie die erkannt hätten, hätten sie den HERRN der Herrlichkeit nicht gekreuzigt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '20,28', quote: `… zu weiden die Gemeinde Gottes, welche er durch sein eigen Blut erworben hat.`, translation: 'Luther 1912', status: 'verbatim', note: 'Einige Handschriften lesen „Gemeinde des Herrn"; die Lesart „Gottes" ist gut bezeugt.' },
      { kind: 'bibel', work: 'Matthäus', ref: '26,39', quote: `Mein Vater, ist's möglich, so gehe dieser Kelch von mir; doch nicht wie ich will, sondern wie du willst!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,6–7', quote: `… welcher, ob er wohl in göttlicher Gestalt war, hielt er's nicht für einen Raub, Gott gleich sein, sondern entäußerte sich selbst und nahm Knechtsgestalt an, ward gleich wie ein anderer Mensch und an Gebärden als ein Mensch erfunden.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt mit dem hl. Kyrill: Der eine Herr Jesus Christus ist **vollkommen in seiner Gottheit und vollkommen in seiner Menschheit**; Gottheit und Menschheit sind in ihm zu einer Natur des fleischgewordenen Logos geeint – „**ohne Vermischung, ohne Vermengung, ohne Verwandlung**" und **ohne Trennung**. „Eine Natur" (*mia physis*) bedeutet eine **vereinte, zusammengesetzte** Wirklichkeit aus zwei Naturen, wie Leib und Seele einen Menschen bilden – nicht eine einzige Natur, in der die Menschheit verschwindet. Die Kirche verurteilt **Eutyches** ebenso wie **Nestorius**. Deshalb nennt sie sich **miaphysitisch**, nicht monophysitisch.`,
    detail: `**Das Bekenntnis der Liturgie:** Vor der Kommunion bekennt der Priester in der koptischen Liturgie: Dies ist das lebendigmachende Fleisch, das der eingeborene Sohn von der Gottesgebärerin Maria annahm; „er hat es eins gemacht mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung"; „seine Gottheit hat sich nicht von seiner Menschheit getrennt, nicht einen einzigen Augenblick, nicht einen Wimpernschlag". Jeder Kopte hört das in jeder Liturgie.

**Kyrill von Alexandrien:** Im zweiten Brief an Nestorius (430) – den auch Chalcedon annahm – schreibt Kyrill, die Naturen, die zur wahren Einheit zusammenkamen, seien verschieden; aus beiden sei der eine Christus und Sohn, „nicht als ob die Verschiedenheit der Naturen durch die Einigung aufgehoben wäre". Der Logos nahm „Fleisch an, das durch eine vernünftige Seele belebt ist" – gegen Apollinaris. In den Briefen an Succensus (um 433) verteidigt er die Formel „eine fleischgewordene Natur des Gott-Logos" und erklärt, dass man nach der Einigung die Naturen in der Betrachtung (*en theōria*) unterscheiden kann, ohne sie zu trennen.

**Severus von Antiochien und die Verurteilung des Eutyches:** Severus (gest. 538), der größte Theologe der miaphysitischen Tradition, schrieb gegen Eutyches und gegen Julian von Halikarnassos, der Christi Leib schon vor der Auferstehung für unverweslich hielt. Severus verteidigte die volle, leidensfähige Menschheit Christi.

**Papst Schenuda III.** schrieb sein Buch „Die Natur Christi", um genau diesen Vorwurf zu klären: Die Kirche glaubt an „eine Natur aus zwei Naturen"; die Gottheit vermischte sich nicht mit der Menschheit und verwandelte sie nicht.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Liturgie (Basilius-Anaphora), Bekenntnis vor der Kommunion', quote: `Ich glaube, ich glaube, ich glaube und bekenne bis zum letzten Atemzug, dass dies das lebendigmachende Fleisch ist, das dein eingeborener Sohn, unser Herr, Gott und Erlöser Jesus Christus, von unserer Herrin, der Gottesgebärerin, der heiligen Maria, angenommen hat. Er hat es eins gemacht mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung … Ich glaube, dass seine Gottheit sich nicht von seiner Menschheit getrennt hat, nicht einen einzigen Augenblick und nicht einen Wimpernschlag.`, original: `He made it one with His divinity without mingling, without confusion and without alteration … I believe that His divinity parted not from His humanity for a single moment nor a twinkling of an eye.`, translation: 'eigene Übersetzung nach der gebräuchlichen englischen Fassung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius', year: '430', status: 'paraphrase', quote: `Verschieden sind die Naturen, die zu wahrer Einheit zusammenkamen; aus beiden aber ist der eine Christus und Sohn – nicht als ob die Verschiedenheit der Naturen durch die Einigung aufgehoben wäre.`, note: 'In Ephesus 431 und Chalcedon 451 angenommen.' },
      { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Briefe an Succensus (Ep. 45 und 46)', year: 'um 433', status: 'paraphrase', quote: `Wir sagen: eine fleischgewordene Natur des Gott-Logos.`, original: `μία φύσις τοῦ θεοῦ λόγου σεσαρκωμένη` },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Natur Christi (The Nature of Christ)', status: 'paraphrase', url: 'https://st-takla.org/books/en/pope-shenouda-iii/nature-of-christ/one-nature.html', quote: `Durch die Einigung der beiden Naturen, der göttlichen und der menschlichen, im Schoß der Jungfrau entstand aus beiden eine Natur – ohne Vermischung, ohne Verwandlung, ohne Trennung.` },
    ],
  },
  quickAnswer: `Nein. In jeder koptischen Liturgie bekennen wir, dass Christus sein Fleisch „eins gemacht hat mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung". Er ist vollkommen Gott und vollkommen Mensch – mit Leib, Seele und menschlichem Willen. „Eine Natur" heißt bei uns „eine vereinte Natur aus zwei", wie Leib und Seele einen Menschen bilden – so lehrte der hl. Kyrill. Wir verurteilen Eutyches. Die offiziellen Kommissionen der östlich-orthodoxen Kirchen (1989/1990) und Papst Paul VI. (1973) haben bestätigt, dass wir denselben Glauben an Christus bekennen.`,
  keyPoints: [
    `**Miaphysitisch, nicht monophysitisch:** *mia* = eine vereinte Natur aus zwei; *monē* = eine einzige Natur. Die Kopten lehren das Erste.`,
    `**Die Liturgie** bekennt: „ohne Vermischung, ohne Vermengung, ohne Verwandlung" – und ohne Trennung, „nicht einen Augenblick".`,
    `**Kyrill** – den auch Chalcedon als Maßstab annahm – ist der Vater dieser Formel; er lehrt die bleibende Verschiedenheit der Naturen und die vernünftige Seele Christi.`,
    `**Eutyches wird von den Kopten verurteilt** – von Dioskur in Chalcedon („wenn er gegen die Lehre der Kirche denkt, verdient er das Feuer"), von Severus, von der Formel von 1988.`,
    `**Das Missverständnis ist terminologisch:** *physis* bedeutete bei Kyrill oft das konkrete Sein (nahe *hypostasis*), in Chalcedon das Wesen (*ousia*).`,
    `**Offizielle Bestätigung:** Paul VI./Schenuda III. (1973), koptisch-katholische Formel (1988), Anba-Bischoi-Kloster (1989), Chambésy (1990): „derselbe authentische orthodoxe christologische Glaube".`,
  ],
  argument: {
    name: 'Das Argument aus dem koptischen Bekenntnis',
    summary: 'Monophysitismus im häretischen Sinn bedeutet die Leugnung der vollständigen Menschheit Christi. Die koptische Kirche bekennt sie ausdrücklich.',
    premises: [
      {
        text: 'P1: „Monophysitismus" im häretischen Sinn (Eutyches) bedeutet: Die Menschheit Christi ist nicht wesensgleich mit unserer, sondern in der Gottheit aufgegangen oder mit ihr vermischt.',
        support: `So wurde Eutyches 448 in Konstantinopel verurteilt: Er zögerte, Christus nach der Menschheit als „uns wesensgleich" zu bekennen. Genau gegen diese Lehre richtet sich der Vorwurf.`,
      },
      {
        text: 'P2: Die koptische Kirche bekennt Christus als vollkommen in seiner Menschheit, mit Leib, vernünftiger Seele und menschlichem Willen, geeint mit der Gottheit ohne Vermischung, Vermengung und Verwandlung.',
        support: `Liturgisches Bekenntnis vor der Kommunion; Kyrill, 2. Brief an Nestorius („Fleisch, belebt durch eine vernünftige Seele"); Gemeinsame Erklärung 1973; koptisch-katholische Formel 1988; Erklärungen 1989/1990.`,
        sources: [
          { kind: 'konzil', work: 'Christologische Formel der koptisch-orthodoxen und der katholischen Kirche', year: '1988', quote: `Wir glauben, dass unser Herr, Gott und Erlöser Jesus Christus, der fleischgewordene Logos, vollkommen ist in seiner Gottheit und vollkommen in seiner Menschheit. Er hat seine Menschheit eins gemacht mit seiner Gottheit ohne Vermischung, ohne Vermengung und ohne Verwandlung. Seine Gottheit hat sich nicht von seiner Menschheit getrennt, nicht einen Augenblick, nicht einen Wimpernschlag. Zugleich verurteilen wir die Lehren des Nestorius und des Eutyches.`, original: `We believe that our Lord, God and Saviour Jesus Christ, the Incarnate-Logos is perfect in His Divinity and perfect in His Humanity. … At the same time, we anathematize the Doctrines of both Nestorius and Eutyches.`, translation: 'eigene Übersetzung', status: 'paraphrase', url: 'https://st-takla.org/Full-Free-Coptic-Books/His-Holiness-Pope-Shenouda-III-Books-Online/12-Tabi3at-Al-Maseeh/Nature-of-Christ_21-Agreement-with-Catholics.html', note: 'Der englische Anfang und Schluss sind wörtlich belegt; der Mittelteil ist sinngemäß wiedergegeben.' },
        ],
      },
      {
        text: 'P3: Die koptische Kirche verurteilt Eutyches ausdrücklich.',
        support: `Timotheus II. (Ailuros) und Severus von Antiochien schrieben gegen die Eutychianer; die Formel von 1988 verurteilt Eutyches namentlich; schon Dioskur sagte in Chalcedon, Eutyches verdiene das Feuer, falls er gegen die Lehre der Kirche denke.`,
      },
    ],
    conclusion: 'Also ist die koptisch-orthodoxe Kirche nicht monophysitisch im häretischen Sinn. Sie ist miaphysitisch: Sie bekennt die eine fleischgewordene Natur des Gott-Logos, in der Gottheit und Menschheit vollständig und unvermischt geeint sind.',
  },
  voices: [
    {
      person: 'kyrill-alexandrien',
      role: 'als „Säule des Glaubens" und Vater der miaphysitischen Formel',
      text: `Für Kyrill hängt das Heil daran, dass der ewige Logos selbst Mensch wurde – nicht ein Mensch, mit dem sich Gott nur verbunden hätte. Deshalb betont er die Einheit: eine fleischgewordene Natur des Gott-Logos. Aber ebenso klar lehrt er, dass die Verschiedenheit der Naturen durch die Einigung nicht aufgehoben wird, dass Christus eine vernünftige menschliche Seele hat und dass man die Naturen „in der Betrachtung" unterscheiden kann. Sein Bild ist der Mensch: Leib und Seele sind verschieden und bleiben verschieden, und doch ist der Mensch einer. Wer Kyrill liest, findet keinen Monophysitismus, sondern die Leidenschaft für den einen Christus.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius; Briefe an Succensus', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Dass Christus einer ist (Quod unus sit Christus)', status: 'paraphrase' },
      ],
    },
    {
      person: 'severus-antiochien',
      role: 'als größter Theologe der miaphysitischen Tradition',
      text: `Severus verteidigte Kyrills Formel gegen zwei Fronten: gegen die Chalcedonenser, deren „in zwei Naturen" er für nestorianisch hielt, und gegen Eutyches und Julian von Halikarnassos, die die Menschheit Christi verkürzten. Er betont, dass die Eigentümlichkeiten der Naturen nach der Einigung bestehen bleiben: Christus ist leidensfähig, sterblich und uns wesensgleich nach der Menschheit, dem Vater wesensgleich nach der Gottheit. Gegen Julian bestand er darauf, dass Christi Leib vor der Auferstehung wirklich leiden und sterben konnte – ein starkes Zeugnis gegen den Vorwurf des Monophysitismus.`,
      sources: [{ kind: 'kirchenvater', author: 'Severus von Antiochien', work: 'Contra impium Grammaticum; Schriften gegen Julian von Halikarnassos', status: 'paraphrase' }],
    },
    {
      person: 'shenouda-iii',
      role: 'als Papst und Lehrer der Kirche',
      text: `Papst Schenuda III. hat die koptische Christologie für Laien und Theologen klar dargelegt: „eine Natur aus zwei Naturen", geeint im Schoß der Jungfrau, ohne Vermischung und ohne Trennung. Er betonte, dass die Kirche Eutyches verwirft, und unterzeichnete 1973 mit Papst Paul VI. das erste gemeinsame christologische Bekenntnis seit 451. Für ihn war die Frage nach 1500 Jahren Missverständnis vor allem eine Frage der Begriffe, nicht des Glaubens.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Natur Christi', status: 'paraphrase' },
        { kind: 'konzil', work: 'Gemeinsame Erklärung Paul VI. und Schenuda III.', year: '1973', status: 'paraphrase', url: 'https://www.vatican.va/content/paul-vi/en/speeches/1973/may/documents/hf_p-vi_spe_19730510_dichiarazione-comune.html', quote: `… vollkommener Gott in Bezug auf seine Gottheit, vollkommener Mensch in Bezug auf seine Menschheit.` },
      ],
    },
    {
      person: 'bishoy',
      role: 'als Dialogtheologe der koptischen Kirche',
      text: `Metropolit Bischoi wirkte führend an den offiziellen Dialogen mit den östlich-orthodoxen Kirchen mit, deren erste gemeinsame christologische Erklärung 1989 in dem nach dem heiligen Bischoi benannten Kloster im Wadi Natrun verabschiedet wurde. Die Kommission fand ihre gemeinsame Grundlage in der Formel Kyrills, *mia physis (hypostasis) tou theou logou sesarkōmenē*, und stellte fest, dass beide Seiten die vier Adverbien – unvermischt, unverwandelt, ungetrennt, ungesondert – teilen.`,
      sources: [
        { kind: 'konzil', work: 'Gemeinsame Kommission für den theologischen Dialog zwischen der Orthodoxen Kirche und den Orientalisch-Orthodoxen Kirchen, Erste Gemeinsame Erklärung', ref: 'Anba-Bischoi-Kloster, Wadi Natrun', year: '20.–24. Juni 1989', status: 'paraphrase', quote: `Wir haben unseren gemeinsamen Boden in der Formel unseres gemeinsamen Vaters, des heiligen Kyrill von Alexandrien, gefunden: eine fleischgewordene Natur (Hypostase) des Gott-Logos.` },
      ],
    },
    {
      person: 'kallistos-ware',
      role: 'als östlich-orthodoxer Theologe',
      text: `Ware, selbst chalcedonensischer Orthodoxer, schreibt, dass die orientalischen Orthodoxen nicht im eutychianischen Sinn „Monophysiten" sind: Sie bekennen die volle Menschheit Christi und verwerfen Eutyches. Der Unterschied liege vor allem in der Terminologie, und die Gespräche seit den 1960er-Jahren hätten gezeigt, dass im Wesentlichen derselbe Glaube vorliegt.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'eine-natur-ist-vermischung',
      objection: `„Wenn nach der Einigung nur eine Natur bleibt, dann ist entweder die Menschheit in der Gottheit aufgegangen – wie bei Eutyches – oder es ist eine Mischnatur entstanden, die weder Gott noch Mensch ist."`,
      objectionBy: 'Östlich-orthodoxer Theologe (traditionalistisch)',
      answer: `Weder noch. Kyrills Bild ist der Mensch: Leib und Seele sind zwei verschiedene Naturen, und doch ist der Mensch eine Natur, ohne dass der Leib zur Seele oder die Seele zum Leib wird. So ist Christus eine fleischgewordene Natur des Logos – zusammengesetzt aus Gottheit und Menschheit, die „ohne Vermischung, ohne Vermengung, ohne Verwandlung" geeint sind. Eine Mischnatur verwerfen wir ebenso wie Eutyches.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Briefe an Succensus', status: 'paraphrase', note: 'Leib-Seele-Analogie: zwei Naturen, ein Mensch – ohne Vermischung.' },
      ],
      questionsBack: [`Ist der Mensch, der aus Leib und Seele besteht, eine Mischnatur? Und ist sein Leib deshalb weniger Leib?`],
      followUps: [
        {
          id: 'physis-heisst-ousia',
          objection: `„‚Natur' (*physis*) heißt doch ‚Wesen' (*ousia*). Eine Natur bedeutet ein Wesen. Also bekennt ihr in Christus kein menschliches Wesen."`,
          objectionBy: 'Chalcedonensischer Dogmatiker',
          answer: `Genau hier liegt das 1500 Jahre alte Missverständnis. In Chalcedon wurde *physis* im Sinn von *ousia* (Wesen) gebraucht. Bei Kyrill dagegen bezeichnet *physis* in der Formel oft die konkrete, eine Wirklichkeit des menschgewordenen Logos – fast gleichbedeutend mit *hypostasis*. Darum schrieb die Kommission 1989: „eine Natur (Hypostase) des Gott-Logos". Wir bekennen zwei Wesenheiten (Gottheit und Menschheit) in **einer** konkreten Wirklichkeit. Das meint der Chalcedonenser mit „zwei Naturen in einer Hypostase".`,
          followUps: [
            {
              id: 'warum-nicht-zwei-sagen',
              objection: `„Wenn ihr das alles glaubt – warum sagt ihr dann nicht einfach ‚zwei Naturen' wie alle anderen?"`,
              objectionBy: 'Katholischer oder evangelischer Gesprächspartner',
              answer: `Weil „zwei Naturen nach der Einigung" im 5. Jahrhundert die Sprache der antiochenischen Schule war, die bei Nestorius zu zwei Subjekten führte. Papst Dioskur sagte in Chalcedon: „Aus zwei (Naturen) nehme ich an; zwei nehme ich nicht an." Wir sagen: aus zwei Naturen, und die Naturen sind nach der Einigung in der Betrachtung unterscheidbar. Die östlich-orthodoxe Seite hat 1990 anerkannt, dass die orientalischen Orthodoxen ihre kyrillische Terminologie beibehalten dürfen, weil sie die doppelte Wesensgleichheit bekennen.`,
              sources: [
                { kind: 'konzil', work: 'Akten des Konzils von Chalcedon, 1. Sitzung', year: '8. Oktober 451', quote: `Aus zwei nehme ich an; zwei nehme ich nicht an.`, original: `ἐκ δύο δέχομαι· τὸ δύο οὐ δέχομαι.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Ausspruch Dioskurs, überliefert in den (chalcedonensischen) Konzilsakten.' },
                { kind: 'konzil', work: 'Gemeinsame Kommission der Orthodoxen und der Orientalisch-Orthodoxen Kirchen, Zweite Gemeinsame Erklärung', ref: 'Chambésy', year: '23.–28. September 1990', status: 'paraphrase', quote: `Die Orientalisch-Orthodoxen werden ihre traditionelle kyrillische Terminologie „eine Natur des fleischgewordenen Logos" beibehalten, da sie die doppelte Wesensgleichheit des Logos bekennen, die Eutyches leugnete.`, url: 'https://dss-syriacpatriarchate.org/second-agreed-statement-1990/?lang=en' },
              ],
              followUps: [
                {
                  id: 'apollinaristische-faelschung',
                  objection: `„Die Formel ‚mia physis' stammt aus einer Schrift des Häretikers Apollinaris, die unter dem Namen des Athanasius umlief. Kyrill wurde getäuscht – eure Christologie ruht auf einer Fälschung!"`,
                  objectionBy: 'Patristiker (z. B. in der Tradition von Lietzmann und Grillmeier)',
                  answer: `Richtig: Kyrill hielt die Formel für athanasianisch; sie stammt tatsächlich aus apollinaristischem Umfeld. Aber Kyrill füllte sie mit orthodoxem Inhalt: Er lehrte ausdrücklich gegen Apollinaris, dass Christus eine vernünftige menschliche Seele hat. Entscheidend ist der Sinn, nicht der Fundort einer Formel. Auch das Konzil von Konstantinopel 553, das die Chalcedonenser als ökumenisch anerkennen, nahm „eine fleischgewordene Natur des Gott-Logos" an – wenn sie wie bei den Vätern verstanden wird. Und das westliche „Athanasianische Glaubensbekenntnis" benutzt dieselbe Leib-Seele-Analogie.`,
                  sources: [
                    { kind: 'konzil', work: 'Zweites Konzil von Konstantinopel (553), Anathematismus 8', year: '553', status: 'paraphrase', quote: `Wer bekennt, dass die Einigung aus zwei Naturen, Gottheit und Menschheit, geschah, oder von der einen fleischgewordenen Natur des Gott-Logos spricht, dies aber nicht so versteht, wie die heiligen Väter gelehrt haben, … der sei ausgeschlossen.` },
                    { kind: 'konzil', work: 'Athanasianisches Glaubensbekenntnis (Quicumque)', year: 'um 500, westlich', status: 'paraphrase', quote: `Denn wie die vernünftige Seele und das Fleisch ein Mensch ist, so ist Gott und Mensch ein Christus.` },
                  ],
                  questionsBack: [`Wenn die Formel „eine fleischgewordene Natur des Gott-Logos" häretisch ist – warum hat sie dann das Konzil von 553, das du als ökumenisch anerkennst, richtig verstanden ausdrücklich angenommen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'severus-eine-energie',
          objection: `„Severus lehrte eine einzige Wirksamkeit (*energeia*) Christi. Daraus wurden Monenergismus und Monotheletismus, die 681 verurteilt wurden. Hat euer Christus einen menschlichen Willen oder nicht?"`,
          objectionBy: 'Byzantinisch-orthodoxer Theologe (in der Linie Maximus’ des Bekenners)',
          answer: `Unser Christus hat einen wirklichen menschlichen Willen – sonst wäre er nicht „in allem" seinen Brüdern gleich. Wenn Severus von „einer Wirksamkeit" spricht, meint er den einen handelnden Christus, in dessen Handeln göttliche und menschliche Vollzüge zusammenwirken – der Logos, der durch die Berührung seiner Hand heilt. Die Kommission von 1990 hielt fest, dass die Naturen „mit ihren eigenen Energien und Willen" ohne Vermischung und Trennung geeint sind. Die Frage ist begrifflich, nicht eine Leugnung des menschlichen Willens.`,
          sources: [
            { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', year: '1990', status: 'paraphrase', quote: `Die Naturen mit ihren eigenen Energien und Willen sind hypostatisch und natürlich geeint – ohne Vermischung, ohne Verwandlung, ohne Teilung und ohne Trennung.` },
          ],
          followUps: [
            {
              id: 'gethsemane-wille',
              objection: `„Dann beantworte konkret: Wessen Wille spricht in Gethsemane ‚Nicht wie ich will, sondern wie du willst'?"`,
              objectionBy: 'Byzantinisch-orthodoxer Theologe',
              answer: `Der menschliche Wille des menschgewordenen Logos – des einen Christus –, der sich ganz dem Willen des Vaters unterordnet. Gerade an dieser Stelle zeigt sich, dass Christus eine echte menschliche Seele mit menschlicher Angst und menschlichem Wollen hat. Wenn Kopten von „einem Willen" sprechen, meinen sie, dass in Christus nie ein Widerstreit zwischen göttlichem und menschlichem Willen bestand – nicht, dass ihm ein menschlicher Wille fehlte.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '22,42–44', quote: `Vater, willst du, so nehme diesen Kelch von mir; doch nicht mein, sondern dein Wille geschehe! … Und es kam, daß er mit dem Tode rang und betete heftiger. Es ward aber sein Schweiß wie Blutstropfen, die fielen auf die Erde.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'dioskur-rehabilitierte-eutyches',
      objection: `„Euer Dioskur hat 449 in Ephesus Eutyches rehabilitiert und Flavian abgesetzt, der ihn verurteilt hatte. Damit hat sich eure Kirche hinter den Eutychianismus gestellt."`,
      objectionBy: 'Katholischer Kirchenhistoriker',
      answer: `In Ephesus 449 legte Eutyches ein schriftliches Bekenntnis vor, das den Glauben von Nizäa bejahte und Mani, Valentinus, Apollinaris und Nestorius verurteilte. Auf dieser Grundlage wurde er wieder aufgenommen – er hat die Synode getäuscht. Als seine wahre Lehre klar wurde, sagte Dioskur in Chalcedon: Wenn Eutyches gegen die Lehre der Kirche denke, verdiene er nicht nur Strafe, sondern das Feuer. Die koptische Kirche hat Eutyches immer verworfen.`,
      sources: [
        { kind: 'konzil', work: 'Akten des Konzils von Chalcedon, 1. Sitzung', year: '451', status: 'paraphrase', quote: `Dioskur: Wenn Eutyches etwas gegen die Lehren der Kirche denkt, verdient er nicht nur Strafe, sondern sogar das Feuer. Denn mir liegt der katholische und apostolische Glaube am Herzen, nicht irgendein Mensch.` },
      ],
      questionsBack: [`Kennst du Dioskurs Aussage über Eutyches in der ersten Sitzung von Chalcedon?`],
      followUps: [
        {
          id: 'verurteilung-nur-heute',
          objection: `„Das sagt ihr heute, um ökumenisch gut dazustehen. Historisch hat eure Kirche Eutyches doch nie verurteilt."`,
          objectionBy: 'Skeptischer Kirchenhistoriker',
          answer: `Doch – schon im 5. und 6. Jahrhundert. Papst Timotheus II. (Ailuros) von Alexandrien, ein Nachfolger Dioskurs, schrieb gegen die Anhänger des Eutyches; Severus von Antiochien bekämpfte Eutyches und Julian von Halikarnassos ausführlich. Die miaphysitische Tradition hat ihre Identität gerade in der Abgrenzung gegen zwei Irrlehren gewonnen: Nestorius auf der einen, Eutyches auf der anderen Seite.`,
          followUps: [
            {
              id: 'julianisten',
              objection: `„Aber in eurer Tradition gab es die Julianisten, die Christi Leib vor der Auferstehung für unverweslich hielten – praktisch Doketismus."`,
              objectionBy: 'Byzantinischer Kirchenhistoriker',
              answer: `Das stimmt, und es ist ein ehrliches Zugeständnis: Julian von Halikarnassos und seine Anhänger vertraten diese Lehre, und sie fanden auch in Ägypten Anhänger. Aber der Hauptstrom der Kirche unter Severus hat sie bekämpft und verworfen. Das zeigt gerade, dass die miaphysitische Christologie die wirkliche, leidensfähige Menschheit Christi verteidigte – auch gegen Gruppen aus den eigenen Reihen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'chalcedon-sagt-dasselbe',
      objection: `„Chalcedon sagt doch genau, was ihr meint: ‚ein und derselbe … in zwei Naturen, unvermischt, unverwandelt, ungetrennt, ungesondert'. Warum habt ihr es dann abgelehnt?"`,
      objectionBy: 'Katholischer Ökumeniker',
      answer: `Die vier Adverbien teilen wir – sie stehen fast wörtlich in unserer Liturgie. Die Bedenken waren drei: Erstens änderte das Konzil den ersten Entwurf „**aus** zwei Naturen" unter Druck in „**in** zwei Naturen" – die Formel der Antiochener. Zweitens nahm es den Tomus Leos an, dessen Satz „jede der beiden Gestalten wirkt, was ihr eigen ist" wie zwei handelnde Subjekte klang. Drittens nahm es Theodoret und Ibas wieder auf, die gegen Kyrill geschrieben hatten. Für Alexandrien sah das wie ein Rückzug von Ephesus aus.`,
      sources: [
        { kind: 'konzil', work: 'Glaubensdefinition des Konzils von Chalcedon', year: '451', quote: `… ein und derselbe Christus, Sohn, Herr, Einziggeborener, in zwei Naturen unvermischt, unverwandelt, ungetrennt, ungesondert erkannt, wobei nirgends wegen der Einigung der Unterschied der Naturen aufgehoben ist, vielmehr die Eigentümlichkeit jeder Natur gewahrt bleibt und in eine Person und eine Hypostase zusammenkommt.`, original: `ἐν δύο φύσεσιν ἀσυγχύτως, ἀτρέπτως, ἀδιαιρέτως, ἀχωρίστως γνωριζόμενον`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'gegner', author: 'Leo I. von Rom', work: 'Tomus ad Flavianum (Brief 28)', ref: 'Kap. 4', year: '449', quote: `Denn jede der beiden Gestalten wirkt in Gemeinschaft mit der anderen, was ihr eigen ist.`, original: `Agit enim utraque forma cum alterius communione quod proprium est.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'tomus-ist-orthodox',
          objection: `„Der Tomus sagt aber auch: ‚Ein und derselbe ist wahrhaft Sohn Gottes und wahrhaft Menschensohn.' Er ist nicht nestorianisch – das ist unfaire Lektüre."`,
          objectionBy: 'Katholischer Patristiker',
          answer: `Das gestehe ich zu: Der Tomus kann orthodox gelesen werden, und genau das haben die modernen Dialoge festgestellt. Aber versteh die damalige Sorge: Der Satz „jede Gestalt wirkt, was ihr eigen ist" macht die Naturen grammatisch zu Handelnden. Und Nestorius selbst begrüßte nach eigenem Bekunden im Exil den Tomus als Bestätigung seiner Lehre. Für Alexandrien war das ein Alarmsignal.`,
          followUps: [
            {
              id: 'konstantinopel-553',
              objection: `„Spätere Konzilien haben Chalcedon doch klar kyrillisch ausgelegt."`,
              objectionBy: 'Byzantinisch-orthodoxer Theologe',
              answer: `Genau – und das ist für uns ein starkes Argument. Das Konzil von Konstantinopel (553) verurteilte die Schriften Theodorets gegen Kyrill und den Brief des Ibas, die Chalcedon unbeanstandet gelassen hatte, bekannte „einer aus der Dreifaltigkeit hat im Fleisch gelitten" und nahm „eine fleischgewordene Natur des Gott-Logos" im Sinn der Väter an. Die byzantinische Kirche hat Chalcedon also selbst im Licht Kyrills korrigiert und präzisiert. John Meyendorff hat diese Entwicklung ausführlich beschrieben.`,
              sources: [
                { kind: 'fachliteratur', author: 'John Meyendorff', work: 'Christ in Eastern Christian Thought', year: '1969', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'warum-keine-einheit',
                  objection: `„Wenn alles nur Terminologie ist – warum seid ihr dann nicht längst in voller Gemeinschaft mit den östlich-orthodoxen Kirchen?"`,
                  objectionBy: 'Ökumenisch interessierter Gesprächspartner',
                  answer: `Weil noch Fragen offen sind: die Aufhebung der gegenseitigen Anathemata (über Leo und Chalcedon auf der einen, über Dioskur und Severus auf der anderen Seite), die Rezeption der späteren byzantinischen Konzilien und die Zustimmung aller Kirchen – nicht alle östlich-orthodoxen Kirchen haben die Erklärungen formell angenommen. Aber es gibt reale Schritte: 2001 schlossen das koptische und das griechisch-orthodoxe Patriarchat von Alexandrien ein pastorales Abkommen. Die Einheit im Glauben ist festgestellt; die Einheit der Kirchen ist noch Weg.`,
                  sources: [
                    { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', year: '1990', status: 'paraphrase', quote: `Die Orthodoxen sollen alle Anathemata und Verurteilungen gegen orientalisch-orthodoxe Konzilien und Väter aufheben; die Orientalisch-Orthodoxen sollen zugleich alle Anathemata und Verurteilungen gegen orthodoxe Konzilien und Väter aufheben.` },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'einfache-kopten-sagen-eine-natur',
      objection: `„Viele einfache Kopten sagen mir selbst: ‚Christus hat nur eine Natur.' Wenn ich nachfrage, können sie nicht erklären, dass er wahrer Mensch ist."`,
      objectionBy: 'Evangelischer Gesprächspartner',
      answer: `Das kann vorkommen, und es ist eine Aufgabe für unsere Katechese – auch in anderen Kirchen können viele Gläubige die Zwei-Naturen-Lehre nicht erklären. Maßgeblich ist, was die Kirche lehrt und betet: Jede Liturgie bekennt die Einigung „ohne Vermischung, ohne Vermengung, ohne Verwandlung". Papst Schenuda III. schrieb sein Buch über die Natur Christi gerade, damit jeder Kopte erklären kann: eine vereinte Natur aus Gottheit und Menschheit.`,
      followUps: [
        {
          id: 'nichtwissen-mk-13',
          objection: `„Dann erkläre mir Mk 13,32: Jesus kennt den Tag nicht. Wenn es nur eine Natur gibt – war dann Gott unwissend?"`,
          objectionBy: 'Evangelischer Gesprächspartner',
          answer: `Kyrill erklärt: Der Logos hat mit der Menschheit auch ihre Grenzen wirklich angenommen; nach seiner Menschheit sagt er, dass er den Tag nicht kennt – „heilsökonomisch", weil er unser Menschsein ganz teilt. Er hört nicht auf, Gott zu sein, aber er lebt als wahrer Mensch. Gerade dieser Vers zeigt, dass wir eine echte menschliche Seele Christi bekennen – das Gegenteil von Monophysitismus.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '13,32', quote: `Von dem Tage aber und der Stunde weiß niemand, auch die Engel nicht im Himmel, auch der Sohn nicht, sondern allein der Vater.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
    {
      id: 'johannes-damaskus',
      objection: `„Schon Johannes von Damaskus führt euch in seinem Ketzerkatalog als ‚Monophysiten'. Das ist ein Kirchenvater, nicht irgendein Polemiker."`,
      objectionBy: 'Östlich-orthodoxer Gesprächspartner',
      answer: `Johannes von Damaskus schrieb im 8. Jahrhundert, drei Jahrhunderte nach der Trennung, als Partei im Konflikt. Die Kopten wiederum nannten die Chalcedonenser „Melkiten" (Kaiserliche). Solche Namen spiegeln Polemik, nicht unbedingt den Inhalt. Heute haben die offiziellen Vertreter der östlich-orthodoxen Kirchen nach jahrzehntelanger Prüfung erklärt, dass beide Familien „immer treu denselben authentischen orthodoxen christologischen Glauben bewahrt haben".`,
      sources: [
        { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', year: '1990', quote: `… both families have always loyally maintained the same authentic Orthodox Christological faith, and the unbroken continuity of the apostolic tradition, though they have used Christological terms in different ways.`, translation: 'Original englisch', status: 'verbatim', url: 'https://dss-syriacpatriarchate.org/second-agreed-statement-1990/?lang=en' },
      ],
      followUps: [
        {
          id: 'nicht-rezipiert',
          objection: `„Diese Erklärungen wurden aber von vielen orthodoxen Kirchen nicht angenommen, und der Berg Athos hat scharf protestiert."`,
          objectionBy: 'Traditionalistischer östlich-orthodoxer Kritiker',
          answer: `Das ist wahr: Nur einige Kirchen – darunter das griechisch-orthodoxe Patriarchat von Alexandrien, unser direkter Nachbar, und das Patriarchat von Antiochien – haben die Erklärungen formell angenommen, und es gibt Widerstand. Aber die theologische Feststellung der Kommission bleibt: Wer liest, was wir bekennen, findet keine Leugnung der Menschheit Christi. Der Vorwurf des Monophysitismus muss sich an unseren Texten messen lassen – und die bekennen: vollkommen Gott, vollkommen Mensch.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Hast du das Bekenntnis am Ende der koptischen Liturgie gelesen? Welche Formulierung darin leugnet die Menschheit Christi?`,
    `Ist der Mensch aus Leib und Seele „eine Natur" oder zwei? Ist sein Leib deshalb vermischt?`,
    `Warum nahm das Konzil von 553 die Formel „eine fleischgewordene Natur des Gott-Logos" an, wenn sie monophysitisch ist?`,
    `Kennst du die gemeinsamen Erklärungen von 1973, 1988, 1989 und 1990 – und was sie über unseren Glauben sagen?`,
    `Was meinst du genau mit „Natur" – Wesen (Usia) oder konkrete Wirklichkeit (Hypostase)?`,
  ],
  avoid: [
    `Nie einfach sagen „Christus hat nur eine Natur" – ohne sofort zu erklären: eine vereinte Natur aus Gottheit und Menschheit, ohne Vermischung.`,
    `Chalcedon oder Papst Leo nicht als „nestorianisch" beschimpfen. Die Dialoge haben gezeigt, dass Chalcedon orthodox verstanden werden kann.`,
    `Nicht behaupten, es gebe gar keine Unterschiede. Es gibt reale Fragen (Rezeption der Konzilien, Anathemata), die noch nicht gelöst sind.`,
    `Nicht die historische Gewalt nur auf einer Seite sehen. Nach 451 litten Kopten unter Verfolgung – aber es gab auch Gewalt gegen Chalcedonenser (z. B. die Ermordung des Proterius 457).`,
  ],
  concessions: [
    `Die Formel „mia physis" stammt ursprünglich aus apollinaristischem Umfeld; Kyrill hielt sie für athanasianisch.`,
    `Die Begriffe der miaphysitischen Tradition konnten missverstanden werden, und es gab in ihr extreme Gruppen (Julianisten).`,
    `Die Ablehnung Chalcedons hatte auch politische und kulturelle Gründe (Widerstand gegen Konstantinopel, Verbannung Dioskurs) – nicht nur theologische.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Die Natur Christi (The Nature of Christ)', status: 'paraphrase', url: 'https://st-takla.org/books/en/pope-shenouda-iii/nature-of-christ/one-nature.html' },
    { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John A. McGuckin', work: 'St. Cyril of Alexandria: The Christological Controversy. Its History, Theology, and Texts', year: '1994', status: 'paraphrase' },
    { kind: 'konzil', work: 'Erste und Zweite Gemeinsame Erklärung der Orthodoxen und Orientalisch-Orthodoxen Kirchen (1989, 1990)', status: 'paraphrase', url: 'https://dss-syriacpatriarchate.org/second-agreed-statement-1990/?lang=en' },
    { kind: 'fachliteratur', author: 'John Meyendorff', work: 'Christ in Eastern Christian Thought', year: '1969', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Christologie', 'Miaphysitismus', 'Monophysitismus', 'Kyrill', 'Chalcedon', 'Eutyches', 'koptische Identität'],
  related: ['christologie-chalcedon/chalcedon-mass-der-orthodoxie', 'christologie-chalcedon/dioskur-haeretiker', 'christologie-chalcedon/nestorius-hatte-recht', 'islam-gottheit-christi/jesus-betete-ass-schlief', 'islam-gottheit-christi/vater-groesser-stunde-unbekannt'],
};

export default claim;
