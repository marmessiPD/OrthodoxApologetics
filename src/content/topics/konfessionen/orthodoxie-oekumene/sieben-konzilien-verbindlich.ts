import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'sieben-konzilien-verbindlich',
  title: `„Die sieben ökumenischen Konzilien sind für alle verbindlich."`,
  proponents: [
    { name: 'Östlich-orthodoxe Theologie', role: 'Byzantinische Orthodoxie als „Kirche der sieben Konzilien"', work: 'Kallistos Ware, The Orthodox Church, Kap. „The Church of the Seven Councils"' },
    { name: 'Römisch-katholische Kirche', role: 'Lehramt', work: 'Zählt 21 ökumenische Konzilien, darunter die sieben ersten, als verbindlich' },
    { name: 'Konservative Anglikaner und Lutheraner', role: 'Theologen der „klassischen" Reformation', work: 'Anerkennung der ersten vier bzw. sechs Konzilien als Ausdruck des Schriftglaubens' },
  ],
  steelman: `Die ökumenischen Konzilien sind die höchste Stimme der Kirche – nach dem Vorbild des Apostelkonzils, das sagen konnte: „Es gefällt dem Heiligen Geist und uns" (Apg 15,28). Die sieben Konzilien von Nizäa (325) bis Nizäa (787) wurden von den Kaisern einberufen, alle Patriarchate waren beteiligt, und sie haben den Glauben Schritt für Schritt geklärt: die Gottheit des Sohnes, die Gottheit des Geistes, die Theotokos, die zwei Naturen, die kyrillische Auslegung Chalcedons (553), die zwei Willen Christi (680/81) und die Verehrung der Ikonen (787). Wer nur drei davon annimmt, wählt willkürlich aus und hat eine unvollständige Christologie – er hat keine verbindliche Antwort auf den Monotheletismus. Auch Ephesus 431, das die Kopten anerkennen, war umstritten; trotzdem nehmt ihr es an – das ist zweierlei Maß. Und ihr verehrt Ikonen, also habt ihr den Inhalt von 787 längst übernommen; dann nehmt auch das Konzil an. Die Kirche hat diese sieben Konzilien rezipiert – wer sie ablehnt, stellt sich gegen den Heiligen Geist, der die Kirche leitet.`,
  biblical: {
    summary: `Das Apostelkonzil (Apg 15) zeigt, dass die Kirche strittige Fragen gemeinsam, im Hören auf den Geist und die Schrift, entscheidet – und dass die Entscheidung von den Gemeinden **angenommen** wird: „Wie sie aber durch die Städte zogen, überantworteten sie ihnen, zu halten den Spruch … So wurden die Gemeinden im Glauben befestigt" (Apg 16,4–5). Zugleich mahnt die Schrift, auch Versammlungen und Lehrer am apostolischen Evangelium zu prüfen: „Prüfet die Geister, ob sie von Gott sind" (1 Joh 4,1); „so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders …" (Gal 1,8). Die Autorität eines Konzils liegt deshalb nicht in Zahl oder kaiserlicher Einberufung, sondern darin, dass es den apostolischen Glauben bezeugt und von der Kirche als solcher erkannt wird.`,
    detail: `**Große Versammlungen können irren:** Die Synode von Rimini (359) mit Hunderten von Bischöfen unterschrieb eine arianisierende Formel; Hieronymus schrieb später, „die ganze Welt seufzte und staunte, dass sie arianisch war". Die Synode von Ephesus 449 wurde als ökumenisches Konzil einberufen und später von Chalcedon verworfen; die bilderfeindliche Synode von Hieria (754) nannte sich mit 338 Bischöfen „siebtes ökumenisches Konzil" und wurde 787 verworfen. Einberufung, Zahl und Anspruch allein machen also kein Konzil ökumenisch.

**Was „ökumenisch" macht:** Nach dem Zeugnis der Väter ist es die Übereinstimmung mit dem Glauben der Apostel und der Väter und die Annahme durch die Kirche – genau das Muster von Apg 15–16.`,
    sources: [
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '15,28', quote: `Denn es gefällt dem heiligen Geiste und uns, euch keine Beschwerung mehr aufzulegen denn nur diese nötigen Stücke.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '16,4–5', quote: `Wie sie aber durch die Städte zogen, überantworteten sie ihnen, zu halten den Spruch, welcher von den Aposteln und den Ältesten beschlossen war. Da wurden die Gemeinden im Glauben befestigt und nahmen zu an der Zahl täglich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Dialog gegen die Luciferianer (Dialogus contra Luciferianos)', ref: '19', year: 'um 379', quote: `Die ganze Welt seufzte und staunte, dass sie arianisch war.`, original: `Ingemuit totus orbis et Arianum se esse miratus est.`, status: 'paraphrase', note: 'Über die Folgen der Synode von Rimini (359).' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche erkennt **drei ökumenische Konzilien** an: **Nizäa (325), Konstantinopel (381) und Ephesus (431)**. Chalcedon (451) und die späteren byzantinischen Konzilien erkennt sie nicht als ökumenisch an – vor allem, weil Chalcedon die Formel „aus zwei Naturen" zu „in zwei Naturen" änderte, Gegner Kyrills rehabilitierte und Papst Dioskur absetzte, und weil die späteren Konzilien auf Chalcedon aufbauen und Väter verurteilen, die die Kopten verehren. Den **Inhalt** vieler späterer Beschlüsse teilt sie aber: Sie verurteilt Nestorius und Eutyches, bekennt Christi wahren menschlichen Willen und verehrt die **Ikonen aus eigener, alter Tradition**. Die Gemeinsame Kommission hielt 1990 fest, dass die Ikonenlehre des 7. Konzils mit der Lehre und Praxis der Orientalisch-Orthodoxen „seit alter Zeit, lange vor der Einberufung des Konzils" übereinstimmt.`,
    detail: `**Unterschiedliche Zählungen:** Die römisch-katholische Kirche zählt 21 ökumenische Konzilien; die byzantinische Orthodoxie sieben (manche Theologen auch die Synoden von 879/80 und 1351); die orientalisch-orthodoxen Kirchen drei; die Kirche des Ostens zwei. Selbst unter Chalcedonensern war die Rezeption nicht einheitlich: Papst Leo lehnte den Kanon 28 von Chalcedon ab, und das Konzil von 553 führte im Westen zum jahrzehntelangen Dreikapitelstreit.

**Die Lösung der Kommission (1990):** Die Östlich-Orthodoxen erklärten, dass die gemeinsamen christologischen Aussagen auch die Lehre ihrer vier späteren Konzilien seien; die Orientalisch-Orthodoxen betrachten dies als die Interpretation der Östlich-Orthodoxen und antworten in diesem Verständnis positiv. Dazu kam die Empfehlung, die gegenseitigen Anathemata gegen Konzilien und Väter aufzuheben. Eine formelle Anerkennung der späteren Konzilien als ökumenisch durch die Kopten ist damit nicht verbunden.

**Die koptische Bildtradition:** Ägypten hat eine der ältesten christlichen Bildtraditionen – etwa die Ikone „Christus und Abt Menas" aus dem Kloster Bawit (6./8. Jh., heute im Louvre) und die Wandmalereien von Bawit und Saqqara. Die koptische Kirche war nie bilderfeindlich; der Bilderstreit war eine Krise des byzantinischen Reiches.`,
    sources: [
      { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', ref: 'Punkt 8', year: 'September 1990', status: 'paraphrase', url: 'https://dss-syriacpatriarchate.org/second-agreed-statement-1990/?lang=en', quote: `In Bezug auf die Lehre des Siebten Ökumenischen Konzils der Orthodoxen Kirche stimmen die Orientalisch-Orthodoxen zu, dass Theologie und Praxis der Ikonenverehrung, die dieses Konzil lehrte, mit der Lehre und Praxis der Orientalisch-Orthodoxen seit alter Zeit, lange vor der Einberufung des Konzils, übereinstimmen und dass wir darin keine Meinungsverschiedenheit haben.` },
      { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy)', ref: 'Punkt 8 (zu den späteren Konzilien)', year: '1990', status: 'paraphrase', quote: `Die Orthodoxen erklären, dass die vorstehenden Punkte auch die Lehre der vier späteren Konzilien der Orthodoxen Kirche sind; die Orientalisch-Orthodoxen betrachten diese Aussage als die Interpretation der Orthodoxen und antworten in diesem Verständnis positiv darauf.` },
      { kind: 'konzil', work: 'Konzil von Ephesus', ref: 'Kanon 7', year: '431', status: 'paraphrase', quote: `Niemand darf einen anderen Glauben vorlegen, verfassen oder zusammenstellen als den, der von den heiligen Vätern festgesetzt wurde, die in Nizäa mit dem Heiligen Geist versammelt waren.`, note: 'Von nicht-chalcedonensischer Seite gegen die neue Glaubensdefinition von Chalcedon angeführt; Chalcedonenser verstehen ihre Definition als Erklärung, nicht als neuen Glauben.' },
    ],
  },
  quickAnswer: `Ökumenisch wird ein Konzil nicht durch kaiserliche Einberufung oder die Zahl der Bischöfe – sonst wäre auch die bilderfeindliche Synode von 754 mit 338 Bischöfen ökumenisch. Entscheidend ist, ob es den Glauben der Apostel bezeugt und von der ganzen Kirche angenommen wird. Wir Kopten erkennen Nizäa, Konstantinopel und Ephesus an. Den Inhalt der späteren Konzilien teilen wir weitgehend: Wir verurteilen Nestorius und Eutyches, bekennen Christi menschlichen Willen und verehren Ikonen – „lange vor 787", wie die offizielle Kommission 1990 festhielt. Übrigens zählen selbst die Kirchen, die mehr Konzilien anerkennen, unterschiedlich: Rom 21, Konstantinopel sieben.`,
  keyPoints: [
    `**Kriterium der Ökumenizität:** Treue zum apostolischen Glauben und Annahme durch die Kirche (Apg 15–16) – nicht Zahl oder Kaiser.`,
    `**Gegenbeispiele:** Rimini 359, Ephesus 449, Hieria 754 – große Synoden, die sich irrten oder verworfen wurden.`,
    `**Koptische Kirche:** drei ökumenische Konzilien (325, 381, 431).`,
    `**Inhaltliche Nähe:** Verurteilung von Nestorius und Eutyches, menschlicher Wille Christi, Ikonenverehrung – Erklärung von 1990.`,
    `**Unterschiedliche Zählungen** (21, 7, 3, 2) zeigen, dass die Rezeption selbst ein kirchlicher Prozess ist.`,
    `**Weg nach vorn:** Gegenseitige Interpretation und Aufhebung der Anathemata, wie 1990 und 1993 vorgeschlagen.`,
  ],
  voices: [
    {
      person: 'kallistos-ware',
      role: 'als Theologe der „Kirche der sieben Konzilien"',
      text: `Kallistos Ware nennt die byzantinische Orthodoxie in seinem Standardwerk die „Kirche der sieben Konzilien" und erklärt, dass ein Konzil nicht durch seine Einberufung, sondern durch seine Annahme in der ganzen Kirche ökumenisch wird – manche Synoden, die als ökumenisch einberufen wurden, wurden später verworfen. Zugleich behandelt er die orientalischen Orthodoxen mit Respekt und hält fest, dass sie die Menschheit Christi nicht leugnen. Gerade sein Rezeptionskriterium erklärt, warum die Frage nach Chalcedon zwischen beiden Familien bis heute offen ist.`,
      sources: [{ kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', ref: 'Kap. 2 „The Church of the Seven Councils"', year: '1963, überarb. 1993', status: 'paraphrase' }],
    },
    {
      person: 'v-c-samuel',
      role: 'als orientalisch-orthodoxer Historiker Chalcedons',
      text: `V. C. Samuel hat die Akten von Chalcedon aus nicht-chalcedonensischer Sicht neu untersucht. Er zeigt, dass der erste Definitionsentwurf „aus zwei Naturen" lautete und erst auf Druck der römischen Legaten und der kaiserlichen Kommissare geändert wurde, und dass die Ablehnung des Konzils in Ägypten und Syrien theologisch begründet war: Man sah im Tomus Leos und in der Formel „in zwei Naturen" eine Gefahr der Trennung in Christus. Für Samuel ist die Frage der Konzilien deshalb keine Frage der Zahl, sondern der Treue zu Kyrill.`,
      sources: [{ kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' }],
    },
    {
      person: 'john-meyendorff',
      role: 'als Historiker des Neuchalcedonismus',
      text: `John Meyendorff zeigte, dass das Konzil von Konstantinopel 553 Chalcedon bewusst im Sinne Kyrills auslegte: Es bestätigte Kyrills Anathematismen, verurteilte Theodor von Mopsuestia und erkannte die Formel „eine fleischgewordene Natur des Gott-Logos" an, wenn sie wie bei den Vätern verstanden wird. Damit kam die byzantinische Christologie den Nicht-Chalcedonensern inhaltlich sehr nahe. Meyendorff sah in den späteren Konzilien deshalb auch eine Bewegung der Annäherung – die politisch jedoch scheiterte.`,
      sources: [{ kind: 'fachliteratur', author: 'John Meyendorff', work: 'Christ in Eastern Christian Thought', year: '1969', status: 'paraphrase' }],
    },
    {
      person: 'hieronymus',
      role: 'als Zeuge der Synode von Rimini',
      text: `Hieronymus erinnert an die Synode von Rimini (359), auf der Hunderte westlicher Bischöfe unter kaiserlichem Druck eine Formel unterschrieben, die den Glauben von Nizäa preisgab. Sein berühmter Satz, die ganze Welt habe geseufzt und gestaunt, dass sie arianisch geworden sei, zeigt: Auch große, kaiserlich geförderte Versammlungen können irren. Erst die Treue zum Glauben der Väter – verkörpert in Athanasius – hat den Glauben von Nizäa bewahrt.`,
      sources: [{ kind: 'kirchenvater', author: 'Hieronymus', work: 'Dialogus contra Luciferianos', ref: '19', year: 'um 379', status: 'paraphrase' }],
    },
    {
      person: 'bishoy',
      role: 'als koptischer Dialogtheologe',
      text: `Metropolit Bischoi vertrat im Dialog die Linie, dass die koptische Kirche den Inhalt des Glaubens prüft, nicht Zahlen: Wo die späteren Konzilien den Glauben Kyrills bekennen – etwa die Verurteilung Theodors von Mopsuestia 553 –, stimmt die koptische Kirche zu; wo sie Personen verurteilen, die die koptische Kirche als Väter verehrt, kann sie nicht folgen, solange diese Verurteilungen bestehen. Deshalb setzte er sich für die Aufhebung der gegenseitigen Anathemata ein, wie es die Kommission empfahl.`,
      sources: [{ kind: 'konzil', work: 'Vorschläge zur Aufhebung der Anathemata (Chambésy)', year: '1993', status: 'paraphrase', url: 'https://dss-syriacpatriarchate.org/proposals-for-lifting-anathemas-1993/?lang=en' }],
    },
  ],
  dialog: [
    {
      id: 'hoechste-autoritaet',
      objection: `„Ökumenische Konzilien sprechen mit der Autorität des Heiligen Geistes – ‚es gefällt dem Heiligen Geist und uns' (Apg 15,28). Wer vier davon ablehnt, lehnt den Geist ab."`,
      objectionBy: 'Östlich-orthodoxer Theologe',
      answer: `Wir anerkennen die Autorität ökumenischer Konzilien voll und ganz – Nizäa, Konstantinopel und Ephesus sind für uns verbindlich. Die Frage ist, *welche* Versammlung ein ökumenisches Konzil ist. Die Synode von Ephesus 449 wurde als ökumenisch einberufen, die Synode von Hieria 754 nannte sich mit 338 Bischöfen „siebtes ökumenisches Konzil" – beide wurden verworfen. Also entscheidet nicht der Anspruch, sondern die Treue zum Glauben der Väter und die Annahme durch die Kirche.`,
      followUps: [
        {
          id: 'mehrheit-hat-rezipiert',
          objection: `„Die Kirche hat die sieben Konzilien rezipiert – die überwältigende Mehrheit der Christen nimmt sie an."`,
          objectionBy: 'Östlich-orthodoxer Theologe',
          answer: `Rezipiert wurden sie vor allem in der Reichskirche – und vielfach mit kaiserlicher Gewalt durchgesetzt, in Ägypten mit eingesetzten Patriarchen und Verfolgung. Große Teile der Christenheit – Ägypter, Syrer, Armenier, Äthiopier – haben Chalcedon nie angenommen. Selbst im Westen führte das Konzil von 553 zum jahrzehntelangen Dreikapitelstreit, und Papst Leo lehnte den Kanon 28 von Chalcedon ab. Rezeption ist hier also gerade nicht eindeutig.`,
          followUps: [
            {
              id: 'ephesus-auch-umstritten',
              objection: `„Auch Ephesus 431 war umstritten – Johannes von Antiochien hielt ein Gegenkonzil ab. Trotzdem nehmt ihr Ephesus an. Das ist zweierlei Maß."`,
              objectionBy: 'Kirchenhistoriker',
              answer: `Ein berechtigter Einwand. Ephesus war anfangs tatsächlich umstritten. Aber 433 versöhnten sich Kyrill und Johannes von Antiochien in der Unionsformel, und danach nahmen beide Seiten Ephesus an – die Rezeption wurde durch Einigung erreicht. Bei Chalcedon dagegen folgte keine solche Einigung; der Riss blieb. Darum ist die Lage verschieden – und darum ist heute eine neue Einigung, wie die Kommission sie vorschlug, der richtige Weg.`,
              followUps: [
                {
                  id: 'kaiser-auch-bei-nizaea',
                  objection: `„Auch Nizäa wurde vom Kaiser einberufen. Die Rolle Markians und Pulcherias bei Chalcedon macht das Konzil nicht ungültig."`,
                  objectionBy: 'Östlich-orthodoxer Kirchenhistoriker',
                  answer: `Einverstanden: Kaiserliche Beteiligung allein entwertet kein Konzil – sonst fiele auch Nizäa. Nizäa wurde aber nach Jahrzehnten des Kampfes gegen Kaiser, die den Arianismus förderten, von der Kirche angenommen, weil es den apostolischen Glauben bezeugte – Athanasius stand dafür sogar gegen die Kaiser. Das Kriterium ist also nicht der Kaiser, weder für noch gegen ein Konzil, sondern der Glaube und seine Annahme durch die Kirche.`,
                  questionsBack: [`Wenn kaiserliche Einberufung ein Konzil ökumenisch macht – warum wurde dann die Synode von Hieria (754) mit 338 Bischöfen verworfen?`],
                },
              ],
            },
          ],
        },
        {
          id: 'alle-zaehlen-sieben',
          objection: `„Immerhin ist die Zahl sieben in der Christenheit allgemein anerkannt."`,
          objectionBy: 'Ökumenisch interessierter Christ',
          answer: `Nein, die Zählungen gehen weit auseinander: Die römisch-katholische Kirche zählt 21 ökumenische Konzilien, die byzantinische Orthodoxie sieben (manche Theologen zusätzlich die Synoden von 879/80 und 1351), die orientalisch-orthodoxen Kirchen drei, die Kirche des Ostens zwei, viele Protestanten erkennen vier oder sechs an. Die Zahl sieben ist eine byzantinische Zählung, keine allgemeine.`,
        },
      ],
    },
    {
      id: 'christologie-unvollstaendig',
      objection: `„Ohne die Konzilien von 553 und 680/81 bleibt eure Christologie unvollständig. Ihr habt keine verbindliche Antwort auf den Monotheletismus."`,
      objectionBy: 'Byzantinischer Dogmatiker',
      answer: `Unser Glaube ist nicht unvollständig: Christus ist vollkommen Gott und vollkommen Mensch, mit Leib, vernünftiger Seele und menschlichem Willen. Den Inhalt von 553 – die kyrillische Auslegung, die Verurteilung Theodors von Mopsuestia – bejahen wir sogar mit Freude. Und die Kommission hielt 1990 fest, dass beide Seiten die Naturen „mit ihren eigenen Energien und Willen" geeint bekennen, ohne Vermischung und ohne Trennung.`,
      followUps: [
        {
          id: 'zwei-willen-ja-nein',
          objection: `„Dann antworte klar: Bekennt ihr zwei Willen in Christus – ja oder nein?"`,
          objectionBy: 'Byzantinischer Dogmatiker',
          answer: `Wir bekennen einen wirklichen göttlichen und einen wirklichen menschlichen Willen in dem einen Christus, die nie gegeneinander stehen: In Gethsemane spricht der menschliche Wille „Nicht wie ich will, sondern wie du willst" (Mt 26,39). Koptische Theologen vermeiden traditionell die Formel „zwei Willen", weil sie im 5. Jahrhundert nach zwei handelnden Subjekten klingen konnte. In der Sache besteht, wie die Kommission feststellte, kein Unterschied.`,
          followUps: [
            {
              id: 'dann-unterschreibt',
              objection: `„Wenn in der Sache kein Unterschied besteht – dann unterschreibt doch einfach die Beschlüsse von 680/81."`,
              objectionBy: 'Byzantinischer Dogmatiker',
              answer: `Die Konzilsbeschlüsse bauen ausdrücklich auf Chalcedon und seinen Verurteilungen auf, darunter die Absetzung unseres Papstes Dioskur. Ein Konzil „einfach zu unterschreiben" hieße, unsere eigenen Väter zu verurteilen, deren Glauben die Kommission als orthodox anerkannt hat. Deshalb schlug sie einen anderen Weg vor: gegenseitige Interpretation und Aufhebung der Anathemata. Einheit im Glauben ja – Verrat an den Vätern nein.`,
              followUps: [
                {
                  id: 'honorius-demut',
                  objection: `„Selbst Rom hat 681 die Verurteilung seines eigenen Papstes Honorius angenommen. Diese Demut fehlt euch."`,
                  objectionBy: 'Östlich-orthodoxer Theologe',
                  answer: `Das ist ein ernstes und schönes Beispiel. Aber Honorius hatte tatsächlich eine Formel gebilligt, die man monotheletisch verstehen konnte. Bei Dioskur und Severus hat die gemeinsame Kommission festgestellt, dass ihr Glaube orthodox verstanden werden kann. Demut ist auf beiden Seiten gefragt: Auch die koptische Tradition muss ihre jahrhundertealten Verurteilungen Papst Leos und Chalcedons überdenken. Genau das meint der Vorschlag, die Anathemata *gegenseitig* aufzuheben.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ikonen-beweis',
      objection: `„Ihr verehrt doch Ikonen! Damit habt ihr den Inhalt des 7. Konzils längst angenommen. Dann gebt doch zu, dass das Konzil verbindlich ist."`,
      objectionBy: 'Östlich-orthodoxer Gesprächspartner',
      answer: `Wir verehren Ikonen aus unserer eigenen, alten Tradition – lange vor 787. Ägypten hat eine der ältesten christlichen Bildtraditionen, etwa die Ikone „Christus und Abt Menas" aus Bawit. Die Kommission stellte 1990 fest, dass wir mit der Ikonenlehre des 7. Konzils übereinstimmen, „seit alter Zeit, lange vor der Einberufung des Konzils". Inhaltliche Übereinstimmung ist wertvoll – aber sie ist nicht dasselbe wie die formelle Anerkennung eines Konzils, das auf Chalcedon aufbaut.`,
      followUps: [
        {
          id: 'ohne-konzil-nur-brauch',
          objection: `„Ohne konziliare Entscheidung ist eure Ikonenverehrung nur ein Brauch ohne verbindliche Grundlage."`,
          objectionBy: 'Östlich-orthodoxer Gesprächspartner',
          answer: `Die Grundlage ist dieselbe wie beim 7. Konzil selbst: die Menschwerdung des Logos, der sichtbar wurde, und die ununterbrochene Überlieferung der Kirche. Das Konzil von 787 hat keine neue Lehre erfunden, sondern einen alten Brauch gegen Bilderstürmer verteidigt. Die koptische Kirche musste ihn nie verteidigen, weil sie den Bilderstreit nicht erlebte. Gelebte Überlieferung, die „überall, immer und von allen" geübt wurde, ist nicht weniger verbindlich, nur weil sie nie bestritten wurde.`,
        },
      ],
    },
    {
      id: 'koptischer-nationalismus',
      objection: `„In Wahrheit war die Ablehnung Chalcedons ägyptischer Nationalismus – Widerstand gegen Konstantinopel, nicht Theologie."`,
      objectionBy: 'Säkularer Historiker (ältere Forschung)',
      answer: `Diese These war im 19. und frühen 20. Jahrhundert beliebt, wurde aber kritisiert – besonders von dem Althistoriker A. H. M. Jones, der zeigte, dass die Quellen echte religiöse Motive belegen. Gegen die These spricht auch, dass nicht nur Ägypter, sondern Syrer, Armenier und Äthiopier Chalcedon ablehnten – und dass Severus von Antiochien, ein griechisch gebildeter Syrer, ihr größter Theologe war. Die Schriften dieser Väter sind theologische Abhandlungen, keine politischen Pamphlete.`,
      sources: [
        { kind: 'fachliteratur', author: 'A. H. M. Jones', work: 'Were Ancient Heresies National or Social Movements in Disguise?', ref: 'Journal of Theological Studies, N. S. 10', year: '1959', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'politik-spielte-mit',
          objection: `„Aber du kannst nicht leugnen, dass Politik eine Rolle spielte."`,
          objectionBy: 'Säkularer Historiker',
          answer: `Nein, das leugne ich nicht – auf beiden Seiten. Chalcedon wurde vom neuen Kaiserpaar Markian und Pulcheria einberufen und gelenkt; die Formel wurde unter Druck der Legaten und Kommissare geändert; danach wurde das Konzil mit Gewalt durchgesetzt. Auf der anderen Seite spielten Loyalität zum eigenen Patriarchen und Misstrauen gegen Konstantinopel mit. Politik erklärt manches, aber nicht, warum Menschen über Jahrhunderte Verfolgung für ihren Glauben auf sich nahmen.`,
          followUps: [
            {
              id: 'kanon-28-rangstreit',
              objection: `„Eigentlich war es ein Rangstreit: Kanon 28 von Chalcedon erhob Konstantinopel über Alexandrien. Die Alexandriner waren schlicht eifersüchtig."`,
              objectionBy: 'Kirchenhistoriker',
              answer: `Der Rangstreit zwischen den großen Sitzen war real, das gebe ich zu. Aber auch Papst Leo von Rom protestierte gegen Kanon 28 – und blieb trotzdem chalcedonensisch. Wenn Rangfragen der Grund gewesen wären, hätten sich die Kopten nach 451 arrangieren können. Stattdessen nahmen sie Absetzungen, Verbannung und Verfolgung in Kauf, weil sie überzeugt waren, dass der Glaube Kyrills auf dem Spiel stand.`,
            },
          ],
        },
      ],
    },
    {
      id: 'warum-nicht-21',
      objection: `„Als Katholik frage ich: Warum hört ihr Orthodoxen bei sieben oder drei Konzilien auf? Auch Florenz, Trient und das Vatikanum sind vom Heiligen Geist geleitet."`,
      objectionBy: 'Katholischer Theologe',
      answer: `Weil ein ökumenisches Konzil die ganze Kirche repräsentieren und von ihr angenommen werden muss. Die späteren westlichen Konzilien fanden nach der Trennung von Ost und West statt; ihre Sonderlehren – Filioque, Fegefeuer, päpstliche Unfehlbarkeit – haben die Kirchen des Ostens nie angenommen. Florenz (1439) hatte zwar östliche Teilnehmer, wurde aber im Osten verworfen; Markus von Ephesus verweigerte die Unterschrift. Gerade das Kriterium der Rezeption begrenzt die Zahl.`,
      followUps: [
        {
          id: 'nie-wieder-oekumenisch',
          objection: `„Dann kann es nach eurer Logik nie wieder ein ökumenisches Konzil geben."`,
          objectionBy: 'Katholischer Theologe',
          answer: `Doch – wenn die getrennten Kirchen wieder in einem Glauben vereint sind und sich gemeinsam versammeln. Genau darauf zielen die Dialoge: Die Erklärungen von 1989/1990 sind ein Schritt zu einer gemeinsamen Rezeption. Die Kirche bleibt die Kirche des Heiligen Geistes; er kann auch heute versöhnen, was Menschen getrennt haben. Bis dahin halten wir fest, was die ungeteilte Kirche gemeinsam bekannt hat.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was macht ein Konzil ökumenisch – die Einberufung durch den Kaiser, die Zahl der Bischöfe oder die Annahme durch die Kirche?`,
    `Warum wurden Ephesus 449 und Hieria 754 verworfen, obwohl sie als ökumenisch einberufen wurden?`,
    `Welche Glaubensaussage der späteren Konzilien leugnet die koptische Kirche inhaltlich?`,
    `Warum zählt Rom 21 Konzilien und Konstantinopel sieben – wer entscheidet die Zahl?`,
  ],
  avoid: [
    `Die späteren Konzilien nicht als häretisch bezeichnen; die koptische Kirche teilt viel von ihrem Inhalt.`,
    `Nicht behaupten, die Kopten hätten die Ikonenverehrung vom 7. Konzil übernommen oder lehnten Ikonen ab – beides ist falsch.`,
    `Nicht die Rolle der Politik nur bei den Chalcedonensern sehen.`,
  ],
  concessions: [
    `Auch Ephesus 431 war anfangs umstritten; seine allgemeine Rezeption kam erst durch die Union von 433.`,
    `Kirchenpolitische Rivalität (Alexandrien – Konstantinopel) spielte bei der Spaltung eine Rolle.`,
    `Die koptische Tradition hat Papst Leo und Chalcedon über Jahrhunderte scharf verurteilt; auch sie ist zur Revision aufgerufen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'V. C. Samuel', work: 'The Council of Chalcedon Re-Examined', year: '1977', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Meyendorff', work: 'Imperial Unity and Christian Divisions', year: '1989', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963, überarb. 1993', status: 'paraphrase' },
    { kind: 'konzil', work: 'Zweite Gemeinsame Erklärung (Chambésy 1990) und Vorschläge zur Aufhebung der Anathemata (1993)', status: 'paraphrase', url: 'https://dss-syriacpatriarchate.org/proposals-for-lifting-anathemas-1993/?lang=en' },
  ],
  difficulty: 3,
  tags: ['Konzilien', 'Ökumene', 'Rezeption', 'Chalcedon', 'Ikonen', 'Nizäa 787'],
  related: ['christologie-chalcedon/chalcedon-mass-der-orthodoxie', 'heilige-ikonen/ikonen-goetzenbilder', 'orthodoxie-oekumene/nur-byzantinische-orthodoxie', 'orthodoxie-oekumene/kopten-spalteten-451', 'katholizismus/papstprimat-unfehlbarkeit', 'reformation/kirchenvaeter-irrelevant'],
};

export default claim;
