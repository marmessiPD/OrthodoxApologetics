import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'dioskur-haeretiker',
  title: `„Dioskur war ein Häretiker, Ephesus 449 eine Räubersynode."`,
  proponents: [
    { name: 'Papst Leo I. von Rom', role: 'Bischof von Rom (440–461)', work: 'Brief 95 an Pulcheria (451): Ephesus 449 als „latrocinium"' },
    { name: 'Konzil von Chalcedon', role: 'Konzil von 451', work: 'Absetzung Dioskurs in der 3. Sitzung (13. Oktober 451)' },
    { name: 'Byzantinische und lateinische Geschichtsschreibung', role: 'Evagrius Scholasticus u. a.', work: 'Darstellung Dioskurs als Gewalttäter und Eutychianer' },
    { name: 'Populäre Kirchengeschichten', role: 'Lehrbücher und Lexika', work: 'Begriff „Räubersynode"' },
  ],
  steelman: `Auf der Synode von Ephesus 449 führte Dioskur von Alexandrien den Vorsitz – und was dort geschah, war ein Skandal. Der Brief Papst Leos (der Tomus) wurde nicht verlesen, obwohl die römischen Legaten darauf bestanden. Eutyches, der von der Synode von Konstantinopel 448 wegen seiner Leugnung der Wesensgleichheit Christi mit uns verurteilt worden war, wurde rehabilitiert, Flavian von Konstantinopel abgesetzt. Soldaten und Mönche drangen in die Kirche ein, Bischöfe wurden zur Unterschrift gezwungen, und Flavian starb kurz danach an den Folgen der Misshandlungen. Dioskur exkommunizierte sogar den Papst von Rom. Leo nannte die Synode zu Recht ein „latrocinium", eine Räuberei. In Chalcedon wurde Dioskur angeklagt, erschien trotz dreimaliger Vorladung nicht und wurde abgesetzt. Ein Mann, der einen Häretiker schützte, einen rechtgläubigen Bischof absetzte und eine Synode mit Gewalt beherrschte, kann kein Heiliger sein.`,
  biblical: {
    summary: `Die Schrift mahnt, nicht nach dem Hörensagen und nicht parteiisch zu urteilen: „Wider einen Ältesten nimm keine Klage auf außer zwei oder drei Zeugen" (1 Tim 5,19); „Richtet nicht nach dem Ansehen, sondern richtet ein rechtes Gericht" (Joh 7,24). Häretiker im biblischen Sinn ist, wer das apostolische Bekenntnis verlässt (2 Joh 7–10; Gal 1,8) – nicht, wer kirchenrechtliche Fehler macht oder in einem Machtkampf unterliegt. Paulus und Barnabas gerieten heftig aneinander (Apg 15,39), Paulus widerstand Petrus öffentlich (Gal 2,11) – niemand nennt deshalb einen von ihnen Häretiker. Die Frage nach Dioskur muss also lauten: Was hat er geglaubt und bekannt?`,
    detail: `**Maßstab Bekenntnis:** Nach 1 Joh 4,2 ist entscheidend, ob jemand bekennt, dass Jesus Christus im Fleisch gekommen ist. Dioskur bekannte in Chalcedon den einen Christus „aus zwei Naturen" und verwarf ausdrücklich jede Vermischung oder Verwandlung der Naturen.

**Fairness gegenüber Angeklagten:** Die Akten von Chalcedon sind von der siegreichen Partei überliefert. Wer gerecht urteilen will, muss sie kritisch lesen – auch darauf achten, was die Ankläger selbst über die Gründe der Absetzung sagen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '7,24', quote: `Richtet nicht nach dem Ansehen, sondern richtet ein rechtes Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '5,19', quote: `Wider einen Ältesten nimm keine Klage auf außer zwei oder drei Zeugen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Johannes', ref: '7', quote: `Denn viele Verführer sind in die Welt gekommen, die nicht bekennen Jesum Christum, daß er in das Fleisch gekommen ist. Dieser ist der Verführer und der Widerchrist.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche verehrt den heiligen **Dioskur**, ihren 25. Papst, als **Bekenner** und „Helden der Orthodoxie", der für den Glauben des hl. Kyrill in die Verbannung nach Gangra ging, wo er 454 starb. Sie bestreitet nicht, dass auf der Synode von Ephesus 449 Fehler geschahen – vor allem die Wiederaufnahme des Eutyches, der die Synode mit einem scheinbar rechtgläubigen Bekenntnis täuschte. Aber sie hält fest: Dioskurs **Glaube** war der Glaube Kyrills; er verwarf Vermischung und Verwandlung der Naturen, und er sagte über Eutyches, er verdiene das Feuer, falls er gegen die Lehre der Kirche denke. Nach dem Zeugnis der Konzilsakten wurde Dioskur in Chalcedon **nicht wegen seines Glaubens**, sondern aus kirchenrechtlichen Gründen abgesetzt.`,
    detail: `**Die Absetzung (3. Sitzung, 13. Oktober 451):** Dioskur erschien nach dreimaliger Vorladung nicht. Er machte geltend, er werde bewacht, und verlangte, dass – wie in der ersten Sitzung – die kaiserlichen Kommissare anwesend seien; in dieser Sitzung fehlten sie. Das Urteil der römischen Legaten nennt als Gründe vor allem: die Wiederaufnahme des Eutyches, die Nichtverlesung des Briefes Leos in Ephesus, die Exkommunikation Leos und den Ungehorsam gegenüber der Vorladung. Eine dogmatische Verurteilung seiner Christologie enthält das Urteil nicht.

**Anatolius von Konstantinopel:** In der fünften Sitzung (22. Oktober 451), als über die Glaubensdefinition gestritten wurde, sagte Anatolius – Dioskurs Gegner und Nachfolger Flavians –, Dioskur sei nicht wegen des Glaubens abgesetzt worden, sondern weil er Leo exkommuniziert habe und trotz dreimaliger Vorladung nicht erschienen sei. Diese Aussage wird von orientalisch-orthodoxen Theologen häufig zitiert.

**Persönliche Anklagen:** In der dritten Sitzung reichten einige alexandrinische Kleriker Klageschriften gegen Dioskurs Amtsführung ein. Sie wurden nicht untersucht, und Dioskur konnte sich nicht verteidigen; sie betreffen nicht den Glauben.

**Ephesus 449 und die Politik:** Die Synode war von Kaiser Theodosius II. als ökumenisches Konzil einberufen worden. Viele Bischöfe, die 449 für Dioskur stimmten, stimmten 451 gegen ihn – darunter Juvenal von Jerusalem, der 449 Mitvorsitzender gewesen war. Dazwischen lag der Tod Theodosius’ (450) und der Machtwechsel zu Markian und Pulcheria.`,
    sources: [
      { kind: 'konzil', work: 'Akten des Konzils von Chalcedon, 5. Sitzung', year: '22. Oktober 451', status: 'paraphrase', quote: `Anatolius: Dioskur wurde nicht wegen des Glaubens abgesetzt, sondern weil er den Herrn Erzbischof Leo exkommunizierte und dreimal vorgeladen wurde und nicht kam.`, note: 'Inhaltlich durch Sekundärquellen bestätigt (u. a. Catholic Encyclopedia, Art. „Anatolius": Dioskur sei nicht wegen des Glaubens verurteilt worden; V. C. Samuel; die Akten nennen zudem die dreimalige Vorladung). Der genaue Wortlaut in Price/Gaddis (2005), Bd. 2, 5. Sitzung, war per Websuche nicht einsehbar – daher Paraphrase; nicht mit Seitenzahl als wörtliches Zitat vortragen.' },
      { kind: 'konzil', work: 'Akten des Konzils von Chalcedon, 3. Sitzung', year: '13. Oktober 451', status: 'paraphrase', note: 'Urteil der römischen Legaten: Wiederaufnahme des Eutyches, Nichtverlesung von Leos Brief, Exkommunikation Leos, Nichterscheinen trotz Vorladung.' },
      { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' },
      { kind: 'koptisch', work: 'Koptisches Synaxarium, Gedenken des hl. Dioskur', status: 'paraphrase', note: 'Die koptische Kirche verehrt Dioskur als Bekenner, der für den Glauben in die Verbannung nach Gangra (Paphlagonien) ging.' },
    ],
  },
  quickAnswer: `Dioskur bekannte in Chalcedon den Glauben des hl. Kyrill: Christus „aus zwei Naturen", ohne Vermischung, ohne Verwandlung – und er sagte über Eutyches, er verdiene das Feuer, falls er gegen die Kirche lehre. Eutyches hatte 449 ein rechtgläubig klingendes Bekenntnis vorgelegt und die Synode getäuscht. Abgesetzt wurde Dioskur nicht wegen seines Glaubens – das sagte in Chalcedon sogar sein Gegner Anatolius –, sondern weil er Leo exkommuniziert hatte und der Vorladung nicht folgte. „Räubersynode" ist Leos polemischer Ausdruck. Fehler gab es 449 – aber ein Häretiker war Dioskur nicht.`,
  keyPoints: [
    `**Dioskurs Bekenntnis:** „Aus zwei (Naturen) nehme ich an"; Anathema über Vermischung, Verwandlung und Vermengung.`,
    `**Über Eutyches:** Dioskur sagte in Chalcedon, Eutyches verdiene das Feuer, wenn er gegen die Lehre der Kirche denke.`,
    `**Absetzungsgründe kirchenrechtlich:** Exkommunikation Leos, Nichterscheinen trotz Vorladung, Verfahrensfehler 449 – nicht seine Christologie (Anatolius).`,
    `**„Räubersynode"** ist der polemische Begriff Leos (Brief 95); Ephesus 449 war vom Kaiser als ökumenisches Konzil einberufen.`,
    `**Politik:** Viele Bischöfe von 449 (z. B. Juvenal von Jerusalem) wechselten 451 nach dem Machtwechsel am Hof die Seite.`,
    `**Ehrlich:** Auf der Synode von 449 gab es Druck und Tumulte, Leos Brief wurde nicht verlesen, und die Wiederaufnahme des Eutyches war ein Fehler.`,
  ],
  voices: [
    {
      person: 'dioskur',
      role: 'als Angeklagter, der sein Bekenntnis ablegt',
      text: `In der ersten Sitzung von Chalcedon verteidigte Dioskur den Glauben Kyrills: Er nehme „aus zwei Naturen" an, nicht aber „zwei Naturen" nach der Einigung; er spreche weder von Vermischung noch von Teilung noch von Verwandlung, und wer von Vermischung, Verwandlung oder Vermengung spreche, sei verflucht. Über Eutyches sagte er, ihm gehe es um den katholischen und apostolischen Glauben, nicht um einen Menschen – wenn Eutyches gegen die Lehre der Kirche denke, verdiene er nicht nur Strafe, sondern das Feuer. Das ist nicht die Sprache eines Eutychianers.`,
      sources: [{ kind: 'konzil', work: 'Akten des Konzils von Chalcedon, 1. Sitzung', year: '8. Oktober 451', status: 'paraphrase' }],
    },
    {
      person: 'v-c-samuel',
      role: 'als Historiker des Konzils',
      text: `Samuel analysiert das Verfahren gegen Dioskur: Die entscheidende Sitzung fand ohne die kaiserlichen Kommissare statt, die in der ersten Sitzung die Verhandlung geleitet hatten; Dioskur verlangte deren Anwesenheit und erschien deshalb nicht. Das Urteil nennt kirchenrechtliche, keine dogmatischen Gründe. Samuel betont, dass die spätere Darstellung Dioskurs als Eutychianer eine nachträgliche Polemik ist, die den Akten selbst nicht entspricht.`,
      sources: [{ kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' }],
    },
    {
      person: 'severus-antiochien',
      role: 'als Verteidiger Dioskurs in der nächsten Generation',
      text: `Severus von Antiochien verteidigte die Erinnerung an Dioskur als rechtgläubigen Bekenner, der für Kyrills Glauben litt. Zugleich verurteilte Severus Eutyches unmissverständlich. Diese doppelte Haltung – Treue zu Dioskur, Ablehnung des Eutyches – zeigt, dass die miaphysitische Tradition Dioskur nie als Anhänger des Eutyches verstand, sondern als Opfer einer Synode, die sie für einen Rückzug von Ephesus 431 hielt.`,
      sources: [{ kind: 'kirchenvater', author: 'Severus von Antiochien', work: 'Briefe und Streitschriften', status: 'paraphrase' }],
    },
    {
      person: 'bishoy',
      role: 'als koptischer Dialogtheologe',
      text: `Metropolit Bischoi vertrat im Dialog mit den östlich-orthodoxen Kirchen, dass die gegenseitigen Verurteilungen der Väter – Leo und Chalcedon auf der einen, Dioskur und Severus auf der anderen Seite – aus Missverständnissen der Terminologie entstanden. Die Kommission empfahl 1990, alle Anathemata gegen Konzilien und Väter der anderen Seite aufzuheben. Für die koptische Kirche bedeutet das nicht, dass andere Dioskur verehren müssen, wohl aber, dass er nicht länger als Häretiker gilt.`,
      sources: [{ kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', year: '1990', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'gewalt-in-ephesus',
      objection: `„In Ephesus 449 drangen Soldaten und Mönche ein, Bischöfe wurden zur Unterschrift gezwungen, und Flavian starb an den Misshandlungen. Das war eine Räubersynode."`,
      objectionBy: 'Katholischer Kirchenhistoriker',
      answer: `Es gab Druck und Tumulte – das gebe ich zu, und es ist beschämend. Aber „Räubersynode" ist Leos Kampfbegriff aus einem Brief an die Kaiserin (451), kein neutrales Urteil. Ephesus 449 war vom Kaiser als ökumenisches Konzil einberufen, mit rund 130 Bischöfen. Und auch Chalcedon war nicht frei von Druck: Theodoret musste Nestorius unter Geschrei verurteilen, und die Definition wurde auf Betreiben der kaiserlichen Kommissare geändert. Gewalt und Druck gab es in beiden Synoden.`,
      sources: [
        { kind: 'gegner', author: 'Leo I. von Rom', work: 'Brief 95 an Pulcheria', year: '20. Juli 451', status: 'paraphrase', note: 'Hier bezeichnet Leo die Synode von Ephesus 449 als „latrocinium" (Räuberei).' },
      ],
      questionsBack: [`Warum stimmten viele Bischöfe, die 449 für Dioskur stimmten, 451 gegen ihn – und was änderte sich zwischen beiden Synoden am Kaiserhof?`],
      followUps: [
        {
          id: 'flavian-ermordet',
          objection: `„Dioskur hat Flavian nach mehreren Berichten eigenhändig getreten und geschlagen. Er ist für seinen Tod verantwortlich."`,
          objectionBy: 'Byzantinische Geschichtsschreibung',
          answer: `Flavian starb wenige Tage nach der Synode auf dem Weg ins Exil. Wie es dazu kam, ist umstritten; die Berichte über eine persönliche Gewalttat Dioskurs stammen von seinen Gegnern, teils aus späterer Zeit, und widersprechen sich im Detail. Bemerkenswert ist: Chalcedon setzte Dioskur nicht wegen Mordes ab. Wäre die Anklage so eindeutig gewesen, hätte man sie ins Urteil geschrieben.`,
          followUps: [
            {
              id: 'tomus-nicht-verlesen',
              objection: `„Aber er hat verhindert, dass der Brief des Papstes verlesen wurde – trotz der Bitten der Legaten."`,
              objectionBy: 'Katholischer Kirchenhistoriker',
              answer: `Das stimmt, und es war ein schwerer Verfahrensfehler, den man nicht beschönigen sollte. Aber ein Verfahrensfehler macht niemanden zum Häretiker. Häresie ist eine Frage des Glaubens – und Dioskurs Glaube war der Kyrills, den Leo selbst und das Konzil von Chalcedon als Maßstab anerkannten. Man kann Dioskur als Synodenleiter kritisieren und ihn trotzdem als rechtgläubigen Bekenner ehren.`,
            },
          ],
        },
      ],
    },
    {
      id: 'eutyches-geschuetzt',
      objection: `„Er hat den verurteilten Häretiker Eutyches rehabilitiert. Wer einen Häretiker schützt, macht sich seine Häresie zu eigen."`,
      objectionBy: 'Östlich-orthodoxer Gesprächspartner',
      answer: `Eutyches legte in Ephesus ein Bekenntnis vor, das den Glauben von Nizäa bejahte und die bekannten Häresien verurteilte; viele hielten seine Verurteilung von 448 für ungerecht. Die Synode wurde getäuscht. Sobald seine eigentliche Lehre klar war, stand die koptische Tradition gegen ihn: Dioskur sagte in Chalcedon, Eutyches verdiene das Feuer, wenn er gegen die Kirche lehre, und seine Nachfolger verurteilten ihn ausdrücklich. Auch Papst Leo hatte sich übrigens anfangs ein Urteil über Eutyches noch vorbehalten.`,
      followUps: [
        {
          id: 'warum-nicht-erschienen',
          objection: `„Wenn er unschuldig war, warum ist er dann in Chalcedon nicht erschienen? Er hatte drei Gelegenheiten."`,
          objectionBy: 'Katholischer Apologet',
          answer: `Nach den Akten erklärte Dioskur, er werde bewacht, und verlangte, dass die kaiserlichen Kommissare und der Senat wie in der ersten Sitzung anwesend seien – in der Sitzung, die über ihn urteilte, fehlten sie. Man mag diese Haltung für unklug halten. Aber das Nichterscheinen ist ein kirchenrechtlicher Grund, keine Häresie. Und genau so wurde er abgesetzt: wegen Ungehorsams, nicht wegen falscher Lehre.`,
          followUps: [
            {
              id: 'anatolius-beweis',
              objection: `„Woher willst du wissen, dass er nicht wegen des Glaubens verurteilt wurde? Das ist doch koptische Propaganda."`,
              objectionBy: 'Skeptischer Kirchenhistoriker',
              answer: `Aus den chalcedonensischen Akten selbst: Das Urteil der Legaten nennt kirchenrechtliche Vergehen, keine christologische Irrlehre. Und in der fünften Sitzung sagte Anatolius von Konstantinopel – sein Gegner –, Dioskur sei nicht wegen des Glaubens abgesetzt worden, sondern wegen der Exkommunikation Leos und weil er nach dreimaliger Vorladung nicht kam. Ich empfehle dir, das in der englischen Ausgabe der Akten von Price und Gaddis nachzulesen.`,
              sources: [
                { kind: 'fachliteratur', author: 'Richard Price / Michael Gaddis (Übers.)', work: 'The Acts of the Council of Chalcedon', year: '2005', status: 'paraphrase', note: 'Bd. 2 enthält die 3. und 5. Sitzung. Die Aussage des Anatolius ist sinngemäß in der Sekundärliteratur gut belegt; der genaue englische Wortlaut wurde per Websuche nicht verifiziert (Stand der Prüfung 2026).' },
              ],
              questionsBack: [`Kannst du mir die Stelle im Urteil von Chalcedon zeigen, an der Dioskur eine bestimmte christologische Irrlehre vorgeworfen wird?`],
            },
          ],
        },
      ],
    },
    {
      id: 'ihr-verehrt-einen-verurteilten',
      objection: `„Ihr verehrt einen Mann als Heiligen, den die übrige Christenheit seit 1500 Jahren als Häretiker verurteilt. Das zeigt, dass ihr außerhalb der Kirche steht."`,
      objectionBy: 'Traditionalistischer östlich-orthodoxer Kritiker',
      answer: `Auch die chalcedonensischen Kirchen verehren Männer, die von anderen verurteilt wurden – Papst Leo wird von den orientalischen Kirchen bis heute nicht als Heiliger anerkannt. Die gegenseitigen Verurteilungen entstanden aus demselben Missverständnis der Begriffe. Darum empfahl die gemeinsame Kommission 1990, alle Anathemata gegen die Konzilien und Väter der anderen Seite aufzuheben. Wir verlangen nicht, dass du Dioskur verehrst – nur, dass du ihn nach seinem Bekenntnis beurteilst.`,
      followUps: [
        {
          id: 'ihr-verflucht-leo',
          objection: `„Und ihr habt Papst Leo und Chalcedon jahrhundertelang verflucht!"`,
          objectionBy: 'Katholischer Gesprächspartner',
          answer: `Das ist wahr, und es gehört zur schmerzlichen Geschichte beider Seiten. Heute aber hat die koptische Kirche mit Rom gemeinsame christologische Erklärungen unterzeichnet (1973, 1988) und mit den östlich-orthodoxen Kirchen die Aufhebung der Anathemata empfohlen. Beide Seiten haben gelernt, dass Leo und Dioskur, Chalcedon und Ephesus 449 aus unterschiedlichen Sorgen denselben Christus verteidigen wollten. Darin liegt die Hoffnung für die Zukunft.`,
          sources: [
            { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', year: '1990', status: 'paraphrase', quote: `Alle Anathemata und Verurteilungen der Vergangenheit, die uns jetzt trennen, sollen aufgehoben werden.` },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche christologische Irrlehre wird Dioskur im Urteil von Chalcedon konkret vorgeworfen?`,
    `Kennst du Dioskurs Aussagen in der ersten Sitzung von Chalcedon über Vermischung und über Eutyches?`,
    `Warum wechselte Juvenal von Jerusalem zwischen 449 und 451 die Seite?`,
    `Was sagte Anatolius in der fünften Sitzung über die Gründe der Absetzung Dioskurs?`,
  ],
  avoid: [
    `Nicht behaupten, auf der Synode von 449 sei alles korrekt verlaufen. Druck, Tumult und die Nichtverlesung von Leos Brief sind belegt.`,
    `Papst Leo nicht als Häretiker oder Bösewicht darstellen. Er wollte ebenfalls den rechten Glauben schützen.`,
    `Das Anatolius-Zitat nicht als wörtliches Zitat mit genauer Seitenzahl vortragen, wenn du die Ausgabe nicht selbst geprüft hast – sag „nach den Akten der fünften Sitzung".`,
  ],
  concessions: [
    `Die Synode von Ephesus 449 war von Druck und Tumulten geprägt; der Brief Leos wurde trotz der Bitten der Legaten nicht verlesen.`,
    `Die Wiederaufnahme des Eutyches war – im Rückblick – ein Fehler.`,
    `Gegen Dioskurs Amtsführung gab es persönliche Anklagen alexandrinischer Kleriker; sie wurden allerdings nie ordentlich untersucht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Price / Michael Gaddis (Übers.)', work: 'The Acts of the Council of Chalcedon, 3 Bde.', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'W. H. C. Frend', work: 'The Rise of the Monophysite Movement', year: '1972', status: 'paraphrase', note: 'Klassische Darstellung aus westlicher Sicht, mit Sinn für die ägyptische Perspektive.' },
  ],
  difficulty: 3,
  tags: ['Dioskur', 'Ephesus 449', 'Räubersynode', 'Chalcedon', 'Eutyches', 'Kirchengeschichte'],
  related: ['christologie-chalcedon/kopten-sind-monophysiten', 'christologie-chalcedon/chalcedon-mass-der-orthodoxie', 'katholizismus/papstprimat-unfehlbarkeit'],
};

export default claim;
