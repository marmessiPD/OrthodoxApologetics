import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'koptische-kirche-sekte',
  title: `„Die koptische Kirche ist eine abgespaltene, unbedeutende Sekte."`,
  proponents: [
    { name: 'Byzantinisch-chalcedonensische Polemik', role: 'historisch: Bezeichnung der Kopten als „Monophysiten", „Jakobiten" oder „Häretiker"', work: 'Polemische Literatur seit dem 6. Jahrhundert' },
    { name: 'Westliche Handbuch- und Populärdarstellungen', role: 'Darstellung der Orientalen als „Nationalkirchen" am Rand der Christenheit', work: 'Ältere Kirchengeschichten und Lexika' },
    { name: 'Evangelikale Kritiker', role: 'z. B. in Missionsliteratur', work: 'Argument: eine erstarrte Traditionskirche ohne lebendigen Glauben' },
    { name: 'Säkulare Beobachter', role: 'Journalismus, Politik', work: 'Argument: eine kleine ethnische Minderheit, politisch abhängig vom ägyptischen Staat' },
  ],
  steelman: `Die koptische Kirche hat sich 451 vom Konzil von Chalcedon und damit von der großen Reichskirche getrennt. Seitdem gilt sie bei Katholiken und byzantinischen Orthodoxen jahrhundertelang als „monophysitisch" – als Kirche, die die volle Menschheit Christi nicht ausreichend bekennt. Sie ist auf ein Land und ein Volk beschränkt, feiert ihre Liturgie in einer toten Sprache, und ihre Mitgliederzahl ist umstritten: Offizielle ägyptische Angaben sprechen von rund fünf Prozent der Bevölkerung. Im Weltchristentum mit über zwei Milliarden Gläubigen ist sie eine Randerscheinung. Politisch steht sie eng an der Seite des ägyptischen Staates. Eine Gemeinschaft, die sich von der Mehrheit getrennt hat, auf eine Ethnie beschränkt ist und sich gegen alle anderen abgrenzt – das ist soziologisch die Beschreibung einer Sekte.`,
  biblical: {
    summary: `Die Bibel kennt Ägypten als Ort göttlicher Verheißung: „Zu der Zeit wird des HERRN Altar mitten in Ägyptenland sein" (Jes 19,19), „Gesegnet bist du, Ägypten, mein Volk" (Jes 19,25). Die Heilige Familie fand in Ägypten Zuflucht (Mt 2,13–15), und an Pfingsten waren Juden „aus Ägypten" unter den Zuhörern (Apg 2,10). Der Alexandriner Apollos war einer der ersten großen Lehrer der Kirche (Apg 18,24). Nach der Überlieferung gründete der Evangelist Markus, der Begleiter des Petrus und Paulus (Apg 12,25; 1 Petr 5,13), die Kirche von Alexandria. Größe und Bedeutung bemisst die Schrift im Übrigen nicht nach Zahlen: Die Kirche ist „eine kleine Herde" (Lk 12,32), die das Licht der Welt sein soll.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '19,19', quote: `Zu der Zeit wird des HERRN Altar mitten in Ägyptenland sein und ein Mal des HERRN an den Grenzen,`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '2,15', quote: `… auf daß erfüllet würde, was der HERR durch den Propheten gesagt hat, der da spricht: „Aus Ägypten habe ich meinen Sohn gerufen."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '18,24', quote: `Apollos, ein Jude aus Alexandrien, ein beredter Mann und mächtig in der Schrift, kam nach Ephesus.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht sich als die apostolische Kirche Ägyptens, gegründet durch den hl. Markus und heute geleitet vom 118. Papst von Alexandria, Tawadros II. Sie bekennt den Glauben der drei ökumenischen Konzilien von Nizäa (325), Konstantinopel (381) und Ephesus (431) und die Christologie des hl. Kyrill: „eine fleischgewordene Natur des Gott-Logos", geeint ohne Vermischung, Verwandlung, Vermengung und Trennung – sie ist nicht monophysitisch. Mit den östlich-orthodoxen Kirchen stellte sie 1989/1990 fest, denselben christologischen Glauben in unterschiedlicher Terminologie zu bekennen; 1973 unterzeichneten Papst Paul VI. und Papst Schenuda III. eine gemeinsame christologische Erklärung. Sie ist Teil der Familie der orientalisch-orthodoxen Kirchen (mit der syrischen, armenischen, äthiopischen, eritreischen und indischen Kirche) und Mitglied der ökumenischen Bewegung.`,
    sources: [
      { kind: 'konzil', work: 'Konzil von Nizäa, Kanon 6', year: '325', quote: `Die alten Gewohnheiten in Ägypten, Libyen und der Pentapolis sollen gelten, sodass der Bischof von Alexandrien über all diese Gebiete Vollmacht hat, da dies auch für den Bischof von Rom üblich ist.`, status: 'paraphrase', note: 'Das erste ökumenische Konzil bestätigt die Vorrangstellung Alexandrias.' },
      { kind: 'konzil', work: 'Zweite gemeinsame Erklärung der Gemischten Kommission der orthodoxen und orientalisch-orthodoxen Kirchen (Chambésy)', year: '1990', quote: `Beide Familien hätten stets treu denselben orthodoxen christologischen Glauben bewahrt, auch wenn sie christologische Begriffe unterschiedlich gebrauchten.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III. / Papst Paul VI.', work: 'Gemeinsame Erklärung', year: '10. Mai 1973', quote: `Bekenntnis zum einen Glauben an den menschgewordenen Gott-Logos, vollkommen in seiner Gottheit und vollkommen in seiner Menschheit.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historisch ist die koptische Kirche eine der ältesten Kirchen der Welt: Alexandria war neben Rom und Antiochia einer der führenden Bischofssitze der Alten Kirche (Nizäa, Kanon 6). Aus Ägypten stammen das christliche Mönchtum (Antonius, Pachomius, die Wüstenväter), die Katechetenschule (Pantänus, Clemens, Origenes, Didymus), die erste Liste der 27 neutestamentlichen Bücher (Athanasius, 367) und die Christologie, die das Konzil von Ephesus (431) bestätigte (Kyrill). Die Trennung von 451 hatte theologische, sprachliche und politische Ursachen; die heutige ökumenische Forschung (V. C. Samuel, Gemischte Kommission 1989/1990) sieht im Kern ein terminologisches Missverständnis. Zur heutigen Größe gibt es keine gesicherten Zahlen: Das ägyptische Statistikamt nannte 2012 etwa 5 Millionen Christen, Pew Research schätzt rund 5 % der Bevölkerung, die Kirche selbst spricht von etwa 15 Millionen; dazu kommt eine Diaspora von schätzungsweise über einer Million in Nordamerika, Europa und Australien.`,
    detail: `**Ägyptens Beitrag zur Weltchristenheit:**
- **Mönchtum:** Antonius der Große (gest. 356) gilt als Vater der Mönche; Pachomius (gest. 346/348) gründete das gemeinschaftliche Klosterleben. Athanasius' „Leben des Antonius" wurde im ganzen Reich gelesen – Augustinus berichtet in seinen Bekenntnissen (VIII,6), dass die Erzählung von Antonius zu seiner Bekehrung beitrug. Johannes Cassian brachte die Weisheit der ägyptischen Väter nach Gallien; über ihn wirkte sie auf Benedikt und das westliche Mönchtum.
- **Theologie:** Athanasius verteidigte das Nizänum gegen den Arianismus („Athanasius gegen die Welt"); Kyrill formulierte die Christologie von Ephesus.
- **Kanon:** Der 39. Osterfestbrief des Athanasius (367) ist der älteste Beleg genau unseres 27-Bücher-Kanons.
- **Mission:** Athanasius weihte Frumentius zum ersten Bischof Äthiopiens; die äthiopische Kirche erhielt ihre Metropoliten bis 1959 aus Alexandria, als Papst Kyrillos VI. ihr die Autokephalie gewährte.
- **Sprache:** Das Koptische ist die letzte Stufe der altägyptischen Sprache und bis heute Liturgiesprache.

**„Sekte" soziologisch:** In der klassischen Typologie (Max Weber, Ernst Troeltsch) ist eine Sekte eine kleine, junge, exklusive Protestgruppe, in die man bewusst eintritt. Die koptische Kirche ist das Gegenteil: alt, sakramental, mit Kindertaufe, eine Volks- und Landeskirche – soziologisch eine „Kirche" im strengen Sinn.`,
    sources: [
      { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', quote: `Die nicht-chalcedonensischen Kirchen hätten die volle Menschheit Christi stets bekannt; der Konflikt von 451 sei wesentlich ein Streit um Begriffe und Kirchenpolitik gewesen.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Pew Research Center', work: 'How many Christians are there in Egypt?', year: '2011', quote: `Christen machen etwa 5 % der ägyptischen Bevölkerung aus; eine Untererfassung in Zensus und Erhebungen sei möglich.`, status: 'paraphrase', url: 'https://www.pewresearch.org/religion/2011/02/16/how-many-christians-are-there-in-egypt/' },
      { kind: 'sonstiges', work: 'Angaben des ägyptischen Statistikamts (CAPMAS) und der koptischen Kirche', year: '2012', quote: `CAPMAS nannte rund 5,13 Millionen Christen; die koptisch-orthodoxe Kirche sprach von etwa 15 Millionen.`, status: 'paraphrase', note: 'Die Zahlen sind politisch umstritten; seriös ist eine Spanne anzugeben.' },
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'VIII,6', year: 'ca. 397–401', quote: `Ponticianus erzählt Augustinus vom ägyptischen Mönch Antonius und von Männern, die durch sein Leben bekehrt wurden – ein Anstoß zu Augustins eigener Umkehr.`, status: 'paraphrase', note: 'Augustinus ist für die koptische Kirche keine Lehrautorität; hier historischer Zeuge.' },
    ],
  },
  quickAnswer: `Eine „Sekte" ist klein, jung und von einem Abtrünnigen gegründet – die koptische Kirche ist das Gegenteil: eine der ältesten Kirchen der Welt, nach der Überlieferung vom Evangelisten Markus gegründet, mit 118 Päpsten in ununterbrochener Reihe. Aus Ägypten kamen das christliche Mönchtum, die Verteidigung des Glaubens von Nizäa durch Athanasius, die erste Liste der 27 Bücher des Neuen Testaments und Kyrills Christologie von Ephesus. Die Trennung von 451 war vor allem ein Streit um Begriffe, wie die gemeinsamen Erklärungen mit den byzantinischen Orthodoxen 1989/1990 zeigen. Und mit Millionen Gläubigen in Ägypten und weltweit ist sie alles andere als unbedeutend.`,
  keyPoints: [
    `**Apostolisch und alt:** Gründung nach der Überlieferung durch Markus; Alexandria als einer der führenden Bischofssitze (Nizäa, Kanon 6); heute der 118. Papst.`,
    `**Weltgeschichtlicher Beitrag:** Mönchtum (Antonius, Pachomius), Athanasius, Kyrill, Katechetenschule, der 27-Bücher-Kanon (367), Mission nach Äthiopien.`,
    `**Nicht monophysitisch:** Kyrills Christologie; gemeinsame Erklärungen mit Rom (1973) und den byzantinischen Orthodoxen (1989/1990).`,
    `**451 war keine Sektengründung:** theologisch-terminologische und politische Trennung; Dioskur wurde nach den Konzilsakten nicht wegen Irrlehre abgesetzt.`,
    `**Größe ehrlich angeben:** offiziell ca. 5 Millionen, kirchlich ca. 15 Millionen, Pew ca. 5 % – plus Diaspora; Teil der orientalisch-orthodoxen Familie.`,
    `**Soziologisch eine Kirche:** alt, sakramental, Kindertaufe, Volkskirche – das Gegenteil einer Sekte.`,
  ],
  voices: [
    {
      person: 'markus',
      role: 'als Evangelist und Gründer der Kirche von Alexandria',
      text: `Markus, nach altkirchlicher Überlieferung Dolmetscher des Petrus und Verfasser des ältesten Evangeliums, gilt in der koptischen Tradition als Gründer der Kirche von Alexandria und als ihr erster Bischof; er starb dort nach der Überlieferung als Märtyrer. Eusebius berichtet, dass Markus als Erster nach Ägypten gesandt worden sei und in Alexandria Gemeinden gegründet habe. Für die Kopten ist der „Stuhl des hl. Markus" keine Ehrenbezeichnung, sondern Ausdruck apostolischer Herkunft: Die Kirche Ägyptens steht auf dem Zeugnis eines Mannes, der Petrus und Paulus begleitete.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'II,16; II,24', year: 'frühes 4. Jh.', quote: `Markus sei als Erster nach Ägypten gesandt worden und habe Gemeinden in Alexandrien gegründet; sein Nachfolger sei Annianos gewesen.`, status: 'paraphrase', note: 'Eusebius leitet die Nachricht mit „man sagt" ein.' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Verteidiger von Nizäa und Biograph des Antonius',
      text: `Athanasius, der 20. Papst von Alexandria, wurde fünfmal verbannt, weil er an der vollen Gottheit Christi festhielt, als Kaiser und Synoden zum Arianismus neigten – daher das Wort „Athanasius gegen die Welt". Sein „Leben des Antonius" machte das ägyptische Mönchtum in der ganzen Christenheit bekannt, und sein 39. Osterfestbrief (367) ist das älteste Zeugnis genau der 27 Bücher des Neuen Testaments, die heute alle großen Kirchen lesen. Eine Kirche, die der ganzen Christenheit ihren Kanon und ihr Mönchtum vermittelte, ist keine Randgruppe.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: '39. Osterfestbrief', year: '367', quote: `Aufzählung der 27 Bücher des Neuen Testaments: „Das sind die Quellen des Heils".`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', year: 'ca. 360', quote: `Leben und Lehre des Wüstenvaters Antonius als Vorbild christlicher Askese.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der Christologie',
      text: `Kyrill, der 24. Papst von Alexandria, verteidigte gegen Nestorius die Einheit der Person Christi und den Titel Theotokos; das Konzil von Ephesus (431) bestätigte seine Lehre. Seine Formel von der „einen fleischgewordenen Natur des Gott-Logos" ist die Grundlage der koptischen Christologie – und zugleich wurden seine Briefe auch in Chalcedon als Maßstab anerkannt. Wer die Kopten „Sekte" nennt, müsste Kyrill, den auch die byzantinische und die römische Kirche als großen Kirchenlehrer verehren, gleich mitverwerfen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Alexandrien', work: 'Zweiter Brief an Nestorius; Brief an Succensus', year: '430er-Jahre', quote: `Der Logos hat sich das Fleisch hypostatisch geeint; eine fleischgewordene Natur des Gott-Logos.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'v-c-samuel',
      role: 'als orientalisch-orthodoxer Historiker des Konzils von Chalcedon',
      text: `Samuel, ein indischer Theologe der orientalisch-orthodoxen Familie, hat die Akten und Texte rund um Chalcedon neu untersucht. Er zeigt, dass die Gegner des Konzils die volle Menschheit Christi immer bekannten und Eutyches verwarfen; der Streit habe sich an Begriffen (Natur, Hypostase), an Leos Tomus und an kirchenpolitischen Machtfragen entzündet. Seine Arbeit bereitete die Gespräche vor, in denen die beiden orthodoxen Familien 1989/1990 ihren gemeinsamen Glauben feststellten.`,
      sources: [
        { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', quote: `Neubewertung des Konzils aus nicht-chalcedonensischer Sicht.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Malaty beschreibt die koptische Kirche als „Kirche der Gelehrsamkeit und Theologie": Ihre Katechetenschule war die erste christliche Hochschule, ihre Wüstenväter prägten die Spiritualität von Ost und West, ihre Märtyrer gaben ihr den Beinamen „Kirche der Märtyrer". Er sieht ihre Treue unter Verfolgung und ihre Verbindung von Liturgie, Askese und Schriftauslegung als Schatz, den sie der ganzen Christenheit schuldet.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The Coptic Orthodox Church as a Church of Erudition and Theology', quote: `Die koptische Kirche als Kirche der Gelehrsamkeit, Askese und des Martyriums.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'abgespalten-451',
      objection: `Die Kopten haben sich 451 vom Konzil von Chalcedon abgespalten. Wer sich von der Gesamtkirche trennt, ist eine Sekte.`,
      objectionBy: 'Byzantinisch-chalcedonensische Polemik',
      answer: `451 hat sich nicht eine kleine Gruppe von „der" Kirche getrennt, sondern die Reichskirche zerbrach entlang von Begriffen und Machtfragen – Ägypten, große Teile Syriens und Armeniens nahmen Chalcedon nicht an. Die koptische Kirche hält an Nizäa, Konstantinopel und Ephesus fest, also am gemeinsamen Glauben der ungeteilten Kirche. Und 1989/1990 stellten Vertreter beider orthodoxer Familien fest, denselben Glauben in unterschiedlicher Sprache zu bekennen.`,
      followUps: [
        {
          id: 'monophysiten',
          objection: `Ihr seid doch Monophysiten – ihr lehrt nur eine Natur Christi und leugnet seine volle Menschheit.`,
          objectionBy: 'Westliche Handbuchdarstellung',
          answer: `Nein. Die koptische Kirche verwirft Eutyches, der die Menschheit in der Gottheit aufgehen ließ, ebenso wie Nestorius. Sie bekennt mit Kyrill „eine fleischgewordene Natur des Gott-Logos" – eine geeinte göttlich-menschliche Wirklichkeit, ohne Vermischung, Verwandlung, Vermengung und Trennung, wie es am Ende jeder Liturgie heißt. Man nennt das miaphysitisch; „monophysitisch" ist eine polemische Fehlbezeichnung, die heute auch Rom und die byzantinischen Orthodoxen nicht mehr verwenden.`,
          followUps: [
            {
              id: 'dioskur-haeretiker',
              objection: `Euer Dioskur wurde in Chalcedon als Häretiker abgesetzt. Die Räubersynode von 449 spricht Bände.`,
              objectionBy: 'Byzantinisch-chalcedonensische Polemik',
              answer: `Nach den Konzilsakten erklärte Patriarch Anatolius von Konstantinopel selbst, Dioskur sei nicht wegen des Glaubens abgesetzt worden, sondern weil er Leo exkommuniziert hatte und dreimaligen Vorladungen nicht gefolgt war. Die Synode von 449 hatte schwere Mängel, das gestehe ich zu – aber eine Absetzung aus disziplinarischen Gründen macht eine Kirche nicht zur Sekte.`,
              sources: [
                { kind: 'konzil', work: 'Akten des Konzils von Chalcedon', year: '451', quote: `Anatolius: Dioskur sei nicht wegen des Glaubens abgesetzt worden, sondern weil er den Erzbischof Leo exkommuniziert habe und trotz dreimaliger Vorladung nicht erschienen sei.`, status: 'paraphrase', note: 'Von orientalisch-orthodoxen Theologen häufig zitiert; Sitzungszählung in den Ausgaben unterschiedlich.' },
              ],
              followUps: [
                {
                  id: 'warum-nicht-vereint',
                  objection: `Wenn ihr denselben Glauben habt – warum seid ihr dann nach 1990 nicht einfach wieder vereint? Das zeigt, dass es doch um mehr geht.`,
                  objectionBy: 'Skeptischer Kritiker',
                  answer: `Weil nach 1500 Jahren Trennung auch Fragen der Konzilien (die orientalischen Kirchen erkennen nur drei an), der Verurteilung von Heiligen und der kirchlichen Ordnung zu klären sind. Die Christologie selbst ist nicht mehr der trennende Punkt. Dass zwei alte Kirchenfamilien so lange getrennt blieben und dann feststellen, im Kern dasselbe zu glauben, spricht nicht für eine Sekte, sondern für einen gemeinsamen Ursprung.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'unbedeutend-klein',
      objection: `Bei über zwei Milliarden Christen weltweit sind ein paar Millionen Kopten unbedeutend.`,
      objectionBy: 'Säkularer Beobachter',
      answer: `Bedeutung misst sich nicht nur an Zahlen: Das christliche Mönchtum, die Verteidigung der Gottheit Christi durch Athanasius, der Kanon der 27 Bücher und die Christologie von Ephesus kamen aus Ägypten – jeder Christ weltweit lebt von diesem Erbe. Und „ein paar Millionen" ist untertrieben: Selbst die niedrigsten offiziellen Zahlen nennen etwa fünf Millionen in Ägypten, die Kirche selbst spricht von rund 15 Millionen, dazu kommt die Diaspora.`,
      followUps: [
        {
          id: 'zahlen-uebertrieben',
          objection: `Die 15 Millionen sind kirchliche Propaganda. Pew sagt fünf Prozent.`,
          objectionBy: 'Säkularer Beobachter',
          answer: `Die Zahlen sind tatsächlich umstritten, und ich gebe deshalb eine Spanne an: Pew und das Statistikamt schätzen rund fünf Prozent, die Kirche nennt höhere Zahlen auf Grundlage ihrer Gemeindelisten, andere Beobachter liegen dazwischen. Auch Pew räumt ein, dass Christen in Erhebungen untererfasst sein können. Selbst mit der niedrigsten Zahl ist die koptische Kirche die größte christliche Gemeinschaft im Nahen Osten.`,
        },
      ],
    },
    {
      id: 'ethnische-nationalkirche',
      objection: `Die koptische Kirche ist eine ethnische Nationalkirche mit toter Liturgiesprache. Das ist eine geschlossene Gemeinschaft, keine Weltkirche.`,
      objectionBy: 'Evangelikaler Kritiker',
      answer: `Die koptische Sprache in der Liturgie ist die letzte Stufe des Altägyptischen – ein lebendiges Erbe, kein Abschottungsinstrument; gefeiert wird längst auch auf Arabisch, und in der Diaspora auf Englisch, Deutsch, Französisch und vielen anderen Sprachen. Die Kirche hat Gemeinden und Klöster auf allen Kontinenten und eine wachsende Mission in Afrika. Schon in der Antike brachte sie den Glauben nach Äthiopien und Nubien.`,
      followUps: [
        {
          id: 'aethiopien-abgespalten',
          objection: `Selbst eure Tochterkirche Äthiopien hat sich 1959 von euch losgesagt.`,
          objectionBy: 'Kritiker in der Debatte',
          answer: `Äthiopien hat sich nicht losgesagt: Papst Kyrillos VI. gewährte der äthiopischen Kirche 1959 die Autokephalie und weihte ihren ersten eigenen Patriarchen. Beide Kirchen bleiben in voller Glaubens- und Sakramentsgemeinschaft. Dass eine Mutterkirche ihre Tochter in die Selbstständigkeit entlässt, ist ein Zeichen der Reife, nicht des Zerfalls.`,
        },
        {
          id: 'nur-fuer-aegypter',
          objection: `„Kopte" heißt doch einfach „Ägypter". Eine Kirche, die nach einem Volk benannt ist, ist per Definition nichts für andere.`,
          objectionBy: 'Evangelikaler Kritiker',
          answer: `Das Wort „Kopte" kommt tatsächlich vom griechischen *Aigyptios* und bezeichnete ursprünglich die Ägypter. Aber auch die „römische" oder „griechische" Kirche ist nach Orten benannt, ohne nur für Römer oder Griechen zu sein. In der Diaspora und in Afrika gehören heute Menschen vieler Völker zur koptischen Kirche; wer den orthodoxen Glauben annimmt, wird getauft und gehört dazu – unabhängig von seiner Herkunft.`,
        },
      ],
    },
    {
      id: 'papst-titel-anmassung',
      objection: `Euer Oberhaupt nennt sich „Papst". Das ist eine Anmaßung – es gibt nur einen Papst, in Rom.`,
      objectionBy: 'Katholischer Gesprächspartner',
      answer: `Historisch ist es umgekehrt: Der älteste bekannte Beleg für den Titel „Papst" (*papas*, Vater) bezieht sich auf einen Bischof von Alexandria. Dionysius von Alexandrien nennt in einem Brief um die Mitte des 3. Jahrhunderts seinen Vorgänger Heraklas „unseren seligen Papst", wie Eusebius überliefert. Der Titel ist in Alexandria also mindestens so alt wie in Rom.`,
      sources: [
        { kind: 'kirchenvater', author: 'Dionysius von Alexandrien (bei Eusebius)', work: 'Kirchengeschichte', ref: 'VII,7,4', year: 'Mitte 3. Jh.', quote: `Dionysius beruft sich auf eine Regel, die er „von unserem seligen Papst Heraklas" empfangen habe.`, status: 'paraphrase', note: 'Frühester bekannter Gebrauch des Titels „Papst" für einen Bischof.' },
      ],
      followUps: [
        {
          id: 'papst-unfehlbar',
          objection: `Dann beansprucht euer Papst wohl auch Unfehlbarkeit wie der römische?`,
          objectionBy: 'Katholischer Gesprächspartner',
          answer: `Nein. Der koptische Papst ist Patriarch und erster unter den Bischöfen, aber er entscheidet in Lehrfragen gemeinsam mit dem Heiligen Synod, und Maßstab bleiben Schrift, Väter und die drei ökumenischen Konzilien. Eine Lehre von persönlicher Unfehlbarkeit kennt die koptische Kirche nicht. Das ist ein Unterschied zu Rom – aber kein Merkmal einer Sekte, sondern der alten synodalen Ordnung der Kirche.`,
        },
      ],
    },
    {
      id: 'tote-tradition',
      objection: `Eine erstarrte Ritualkirche ohne persönlichen Glauben – alles Liturgie, Fasten und Heilige, aber keine lebendige Beziehung zu Jesus.`,
      objectionBy: 'Evangelikaler Kritiker',
      answer: `Wer eine koptische Gemeinde kennt, erlebt das Gegenteil: volle Kirchen, Sonntagsschulen für Hunderttausende Kinder, eine Erneuerung des Mönchtums im 20. Jahrhundert, Bibelkreise und Gebetsleben im Alltag. Liturgie, Fasten und Heiligenverehrung sind für Kopten Ausdruck der Beziehung zu Christus, nicht ihr Ersatz. Und eine Kirche, deren Gläubige 2015 in Libyen mit dem Namen Jesu auf den Lippen starben, hat einen sehr persönlichen Glauben.`,
      followUps: [
        {
          id: 'sonntagsschule-erneuerung',
          objection: `Diese Erneuerung kam doch erst durch protestantische Missionare im 19. Jahrhundert.`,
          objectionBy: 'Evangelikaler Kritiker',
          answer: `Der Kontakt mit westlichen Missionen hat Impulse gegeben, das ist richtig – aber die Erneuerung war koptisch getragen: Habib Girgis begründete die Sonntagsschulbewegung, Papst Kyrillos VI. und Matta el-Meskeen erneuerten das Gebets- und Mönchsleben, Papst Schenuda III. machte die Bibelauslegung zur Massenbewegung. Die Wurzeln lagen in der eigenen Tradition der Väter.`,
        },
      ],
    },
    {
      id: 'politisch-abhaengig',
      objection: `Die koptische Kirchenführung steht immer an der Seite des Regimes. Das ist keine Kirche, sondern eine politische Interessengruppe.`,
      objectionBy: 'Säkularer Beobachter',
      answer: `Das Verhältnis zum Staat ist schwierig, und auch innerhalb der Kirche gibt es Kritik an zu großer Nähe – etwa nach dem Massaker von Maspero 2011. Aber eine verwundbare Minderheit, die immer wieder Anschläge erlebt, sucht verständlicherweise Schutz und betont die nationale Einheit. Papst Schenuda III. wurde 1981 von Präsident Sadat sogar abgesetzt und unter Hausarrest gestellt – unterwürfig war die Kirche also nicht immer.`,
      followUps: [
        {
          id: 'vaterland-ueber-kirche',
          objection: `Papst Tawadros soll 2013 gesagt haben, ein Vaterland ohne Kirchen sei besser als Kirchen ohne Vaterland. Das ist doch politische Ergebenheit.`,
          objectionBy: 'Säkularer Beobachter',
          answer: `Dieser vielzitierte Satz fiel nach der Brandstiftung an Dutzenden Kirchen im August 2013. Er drückt aus, dass die Kirche Rache und Bürgerkrieg ablehnt und Steine für weniger wichtig hält als den Frieden des Landes. Man kann darüber politisch streiten – aber es ist die Haltung von Jeremia 29,7, nicht die einer Sekte, die sich von der Gesellschaft abschottet.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was ist für dich eine Sekte – und welche Merkmale davon treffen auf eine 2000 Jahre alte apostolische Kirche zu?`,
    `Wusstest du, dass die erste Liste der 27 Bücher des Neuen Testaments von einem koptischen Papst stammt?`,
    `Woher, meinst du, stammt das christliche Mönchtum?`,
    `Hast du die gemeinsamen christologischen Erklärungen von 1973 und 1989/1990 gelesen?`,
  ],
  avoid: [
    `Überhöhte Mitgliederzahlen als gesichert ausgeben – lieber die Spanne nennen.`,
    `Andere Kirchen abwerten, um die eigene zu erhöhen.`,
    `Die Markus-Gründung als historisch bewiesen ausgeben – sie ist alte, ehrwürdige Überlieferung.`,
    `Kritik an der Kirchenführung pauschal als Feindschaft abtun.`,
  ],
  concessions: [
    `Die Mitgliederzahl der koptischen Kirche ist umstritten; offizielle Statistiken liegen deutlich unter kirchlichen Angaben.`,
    `Die Trennung von 451 hatte auch kirchenpolitische Ursachen, an denen alle Seiten Anteil hatten; die Synode von 449 hatte schwere Mängel.`,
    `Das enge Verhältnis der Kirchenführung zum Staat wird auch innerhalb der Kirche kritisch diskutiert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Otto F. A. Meinardus', work: 'Two Thousand Years of Coptic Christianity', year: '1999', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' },
    { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The Coptic Orthodox Church as a Church of Erudition and Theology', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark N. Swanson', work: 'The Coptic Papacy in Islamic Egypt', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Koptische Kirche', 'Alexandria', 'Markus', 'Chalcedon', 'Mönchtum', 'Orientalische Orthodoxie'],
  related: ['christologie-chalcedon/kopten-sind-monophysiten', 'christologie-chalcedon/dioskur-haeretiker', 'orthodoxie-oekumene/kopten-spalteten-451', 'orthodoxie-oekumene/nur-byzantinische-orthodoxie', 'fruehes-christentum-vielfalt/viele-christentuemer-bauer'],
};

export default claim;
