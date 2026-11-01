import type { Claim, Source } from '../../../schema.ts';

const darwinGray: Source = {
  kind: 'gegner',
  author: 'Charles Darwin',
  work: 'Brief an Asa Gray',
  year: '22. Mai 1860',
  quote: `Ich kann mich nicht davon überzeugen, dass ein gütiger und allmächtiger Gott die Schlupfwespen absichtlich mit der ausdrücklichen Absicht erschaffen hätte, dass sie sich im lebenden Körper von Raupen ernähren, oder dass eine Katze mit Mäusen spielen sollte.`,
  original: `I cannot persuade myself that a beneficent & omnipotent God would have designedly created the Ichneumonidae with the express intention of their feeding within the living bodies of caterpillars, or that a cat should play with mice.`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Darwin Correspondence Project (Online-Edition der Briefe Darwins). Gray war gläubiger Christ und Botaniker in Harvard.',
};

const darwinGrayLaws: Source = {
  kind: 'gegner',
  author: 'Charles Darwin',
  work: 'Brief an Asa Gray (derselbe Brief)',
  year: '22. Mai 1860',
  quote: `Ich neige dazu, alles als Ergebnis von entworfenen Gesetzen anzusehen, wobei die Einzelheiten, ob gut oder schlecht, dem Wirken dessen überlassen sind, was wir Zufall nennen mögen. Nicht dass mich dieser Gedanke ganz befriedigt.`,
  original: `I am inclined to look at everything as resulting from designed laws, with the details, whether good or bad, left to the working out of what we may call chance. Not that this notion at all satisfies me.`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Im selben Brief schreibt Darwin sinngemäß, er fühle zutiefst, dass das ganze Thema für den menschlichen Verstand zu tief sei – ein Hund könne ebenso gut über den Geist Newtons spekulieren.',
};

const darwinHooker: Source = {
  kind: 'gegner',
  author: 'Charles Darwin',
  work: 'Brief an Joseph D. Hooker',
  year: '13. Juli 1856',
  quote: `Was für ein Buch könnte ein Kaplan des Teufels über die plumpen, verschwenderischen, stümperhaften, niedrigen und entsetzlich grausamen Werke der Natur schreiben!`,
  original: `What a book a Devil's chaplain might write on the clumsy, wasteful, blundering low & horridly cruel works of nature!`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
  note: 'Dawkins machte daraus den Titel seines Essaybandes „A Devil\'s Chaplain" (2003).',
};

const dawkinsRiver: Source = {
  kind: 'gegner',
  author: 'Richard Dawkins',
  work: 'River Out of Eden',
  ref: 'Kap. 4',
  year: '1995',
  quote: `Das Universum, das wir beobachten, hat genau die Eigenschaften, die wir erwarten sollten, wenn es im Grunde keinen Plan, keinen Zweck, kein Böses und kein Gutes gibt, nichts als blinde, erbarmungslose Gleichgültigkeit.`,
  original: `The universe we observe has precisely the properties we should expect if there is, at bottom, no design, no purpose, no evil and no good, nothing but blind, pitiless indifference.`,
  translation: 'eigene Übersetzung',
  status: 'verbatim',
};

const gouldNonmoral: Source = {
  kind: 'gegner',
  author: 'Stephen Jay Gould',
  work: '„Nonmoral Nature", Natural History 91 (1982); nachgedruckt in: Hen\'s Teeth and Horse\'s Toes (1983)',
  year: '1982',
  quote: `Gould bespricht ausführlich die Schlupfwespen und die viktorianische Debatte über sie. Sein Fazit: Die Natur ist nicht grausam, sondern nicht-moralisch; moralische Kategorien auf Wespen und Raupen anzuwenden, sei ein Kategorienfehler.`,
  status: 'paraphrase',
  note: 'Gould war Agnostiker – sein Hinweis, dass „Grausamkeit" eine menschliche Projektion ist, kommt also von der Gegenseite.',
};

const behe2010: Source = {
  kind: 'wissenschaft',
  author: 'Michael J. Behe',
  work: '„Experimental Evolution, Loss-of-Function Mutations, and ‚The First Rule of Adaptive Evolution\'", Quarterly Review of Biology 85 (4), S. 419–445',
  year: '2010',
  quote: `Behe wertet Laborexperimente zur Evolution von Bakterien und Viren aus: Die meisten nützlichen Anpassungen beruhen auf dem Verlust oder der Abschwächung bestehender Funktionen, nicht auf dem Aufbau neuer.`,
  status: 'paraphrase',
};

const moore2008: Source = {
  kind: 'wissenschaft',
  author: 'Robert B. Moore u. a.',
  work: '„A photosynthetic alveolate closely related to apicomplexan parasites", Nature 451, S. 959–963',
  year: '2008',
  quote: `Chromera velia, eine photosynthetisch aktive Alge, die mit Korallen assoziiert lebt, ist eng mit den parasitischen Apicomplexa (darunter der Malariaerreger Plasmodium) verwandt. Deren nicht mehr photosynthetischer „Apicoplast" ist ein Überbleibsel eines Plastiden.`,
  status: 'paraphrase',
  note: 'In der evolutionären Deutung stammen die Malariaerreger also von Vorfahren ab, die mit ihrem Wirt eher partnerschaftlich lebten – Parasitismus als abgeleiteter Zustand mit Funktionsverlust.',
};

const bezier2009: Source = {
  kind: 'wissenschaft',
  author: 'Annie Bézier u. a.',
  work: '„Polydnaviruses of Braconid Wasps Derive from an Ancestral Nudivirus", Science 323, S. 926–930',
  year: '2009',
  quote: `Brackwespen nutzen im eigenen Erbgut verankerte, „domestizierte" Viruspartikel, um das Immunsystem der Wirtsraupe zu unterdrücken; diese Polydnaviren gehen auf ein Nudivirus zurück.`,
  status: 'paraphrase',
};

const lafferty2006: Source = {
  kind: 'wissenschaft',
  author: 'Kevin D. Lafferty, Andrew P. Dobson, Armand M. Kuris',
  work: '„Parasites dominate food web links", PNAS 103, S. 11211–11216',
  year: '2006',
  quote: `Bezieht man Parasiten in Nahrungsnetze ein, stellen sie einen Großteil aller Verbindungen; sie sind für Stabilität und Struktur von Ökosystemen zentral.`,
  status: 'paraphrase',
};

const kuris2008: Source = {
  kind: 'wissenschaft',
  author: 'Armand M. Kuris u. a.',
  work: '„Ecosystem energetic implications of parasite and free-living biomass in three estuaries", Nature 454, S. 515–518',
  year: '2008',
  quote: `In den untersuchten Flussmündungen übertraf die Biomasse der Parasiten die der Spitzenprädatoren (Vögel, Fische).`,
  status: 'paraphrase',
};

const gibbons2022: Source = {
  kind: 'wissenschaft',
  author: 'Matilda Gibbons, Andrew Crump, Meghan Barrett, Sajedeh Sarlak, Jonathan Birch, Lars Chittka',
  work: '„Can insects feel pain? A review of the neural and behavioural evidence", Advances in Insect Physiology 63',
  year: '2022',
  quote: `Die Übersicht findet für einige Insektenordnungen (v. a. ausgewachsene Fliegen und Schaben) beachtliche Hinweise auf schmerzähnliche Zustände, für andere – darunter Schmetterlingslarven – nur schwache oder fehlende Belege.`,
  status: 'paraphrase',
  note: 'Die Frage ist offen; man sollte weder behaupten, Raupen spürten sicher nichts, noch das Gegenteil.',
};

const claim: Claim = {
  id: 'parasiten-grausames-design',
  title: `„Parasiten wie die Schlupfwespe zeigen: Kein guter Gott hat das entworfen (Darwin)."`,
  proponents: [
    { name: 'Charles Darwin', role: 'Naturforscher (1809–1882)', work: 'Brief an Asa Gray vom 22. Mai 1860' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'River Out of Eden (1995), Kap. 4; A Devil\'s Chaplain (2003)' },
    { name: 'Francisco J. Ayala', role: 'Evolutionsbiologe und Genetiker, UC Irvine (früher Dominikaner)', work: 'Darwin\'s Gift to Science and Religion (2007)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Faith vs. Fact (2015)' },
    { name: 'Paul Draper', role: 'Religionsphilosoph, Purdue University', work: '„Darwin\'s Argument from Evil" (2012)' },
  ],
  steelman: `Eine Schlupfwespe sticht eine Raupe, lähmt sie teilweise mit Gift, legt ihre Eier hinein und schleust sogar domestizierte Viren ein, die das Immunsystem der Raupe ausschalten. Die Larven fressen den Wirt von innen, und zwar so, dass die lebenswichtigen Organe zuletzt dran sind – der Wirt bleibt lange am Leben. Das ist kein Unfall, sondern ein fein abgestimmtes System. Genau das ist das Problem für den Design-Befürworter: Je raffinierter er die Natur als „entworfen" beschreibt, desto direkter macht er seinen Designer für solche Systeme verantwortlich. Parasitismus ist die vielleicht häufigste Lebensweise der Erde; die Schlupfwespen allein zählen Zehntausende Arten. Darwin sah das 1860 klar: Ein gütiger, allmächtiger Gott hätte so etwas nicht absichtlich geschaffen. Die ungelenkte Evolution erklärt es mühelos – sie kennt kein Mitleid, nur Fortpflanzungserfolg. Ein guter Designer erklärt es gar nicht.`,
  biblical: {
    summary: `Die Bibel beschönigt die Wildheit der Natur nicht. Sie stellt Raub und Tod in Gottes Fürsorge (Ps 104,21; Hiob 38–39) und zugleich unter ein Vorzeichen der Hoffnung: Die Schöpfung ist „unterworfen der Eitelkeit" (Röm 8,20) und „sehnt sich" nach Befreiung. Gen 1,31 nennt die Schöpfung „sehr gut" – das hebräische *tov* meint vor allem „tauglich, ihrem Zweck entsprechend", nicht „frei von jeder Gefahr". Die Schrift kennt also beides: eine gute Ordnung und eine in Mitleidenschaft gezogene Schöpfung, die auf ihre Vollendung wartet (Jes 11,6–9).`,
    detail: `- **Röm 8,19–22:** Paulus spricht von einer kosmischen Dimension der Verderbnis (griech. *phthora*) und der „Nichtigkeit" (*mataiotēs*), der die Schöpfung nicht freiwillig, sondern „auf Hoffnung" unterworfen wurde. Wer genau sie unterwarf (Gott, Adam, eine andere Macht) und wie weit das zurückreicht, deuten Ausleger verschieden.
- **Ps 104** preist Gott ausdrücklich für die Nahrung der Raubtiere – die Bibel verlangt nicht, dass jedes Tier Pflanzenfresser war, damit Gott gut ist.
- **Hiob 38–41:** Gott antwortet Hiob nicht mit einer Erklärung, sondern mit einer Führung durch die wilde Schöpfung – Löwen, Raben, Strauß, Leviathan. Der Mensch soll erkennen, dass er nicht der Maßstab des Ganzen ist.
- **Jes 11,6–9:** Die Verheißung des Friedens zwischen Wolf und Lamm zeigt: Die gegenwärtige Feindschaft der Geschöpfe ist nicht das letzte Wort.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '8,20–22', quote: `Sintemal die Kreatur unterworfen ist der Eitelkeit ohne ihren Willen, sondern um deswillen, der sie unterworfen hat, auf Hoffnung. Denn auch die Kreatur wird frei werden vom Dienst des vergänglichen Wesens zu der herrlichen Freiheit der Kinder Gottes. Denn wir wissen, daß alle Kreatur sehnt sich mit uns und ängstet sich noch immerdar.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '104,21', quote: `Die jungen Löwen, die da brüllen nach dem Raub und ihre Speise suchen von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Mose', ref: '1,31', quote: `Und Gott sah an alles, was er gemacht hatte; und siehe da, es war sehr gut.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '11,6', quote: `Die Wölfe werden bei den Lämmern wohnen und die Pardel bei den Böcken liegen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt: Gott schuf alles gut, aus dem Nichts; durch die Sünde kamen Verderbnis und Tod in die Welt, und die ganze Schöpfung wartet auf ihre Erneuerung in Christus. Über die biologischen Mechanismen und die zeitliche Reichweite der Verderbnis gibt es **kein Dogma**. Die Väter verbinden zwei Haltungen: Ehrfurcht vor der Weisheit selbst unscheinbarer oder gefährlicher Geschöpfe (Basilius, Augustinus) und Erbarmen mit allem, was leidet (Isaak der Syrer).`,
    detail: `- **Athanasius** beschreibt in *De Incarnatione* 4–5, wie der Mensch durch die Abwendung vom Logos der Verderbnis (*phthora*) anheimfiel; der Logos wurde Mensch, um die Verderbnis von innen zu überwinden.
- **Basilius** mahnt im *Hexaemeron* (Hom. 5,4), giftige Pflanzen nicht dem Schöpfer vorzuwerfen: Vieles, was dem Menschen schadet, hat in der Ordnung der Natur oder als Heilmittel seinen Sinn.
- **Augustinus** bekennt gegen die Manichäer offen, er wisse nicht, wozu Mäuse, Frösche, Fliegen oder Würmer geschaffen seien – aber er sehe, dass alles in seiner Art schön ist (*De Genesi contra Manichaeos* I,16,26).
- **Die Liturgie des hl. Gregorius** bekennt, dass Christus „die Strafe in Heil verwandelt" hat – der christliche Blick auf das Leiden ist nicht Erklärung, sondern Verwandlung.
- **Isaak der Syrer** beschreibt das „barmherzige Herz" als ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel, Tiere, ja selbst für die Feinde der Wahrheit (Asketische Homilien).`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '4–5', quote: `Durch die Übertretung wandte sich der Mensch dem Nichtsein zu und verfiel der Verderbnis; die Gnade des Anfangs ging verloren.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 5,4', quote: `Man soll den Schöpfer nicht wegen giftiger Pflanzen anklagen; vieles, was gefährlich scheint, hat einen Nutzen – manches dient Tieren als Nahrung, manches dem Arzt als Heilmittel.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De Genesi contra Manichaeos', ref: 'I,16,26', quote: `Ich gestehe, dass ich nicht weiß, warum Mäuse und Frösche, Fliegen und Würmer geschaffen wurden; doch ich sehe, dass alle in ihrer Art schön sind.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Liturgie des hl. Gregorius (koptisch)', quote: `Christus hat die Strafe in Heil verwandelt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Isaak der Syrer', work: 'Asketische Homilien', quote: `Ein barmherziges Herz ist ein Herz, das für die ganze Schöpfung brennt – für Menschen, Vögel, Tiere und alle Geschöpfe.`, status: 'paraphrase', note: 'Die Nummer der Homilie variiert je nach Ausgabe (meist Homilie 71 bzw. 81).' },
    ],
  },
  opposingView: {
    summary: `Parasitismus ist in der Natur sehr verbreitet; Schätzungen zufolge lebt ein großer Teil aller Arten zumindest zeitweise parasitisch. Die Hautflügler – mit ihren unzähligen parasitoiden Wespen – gelten nach neueren Schätzungen womöglich als artenreichste Tierordnung. Parasiten sind ökologisch zentral: Sie stellen in Nahrungsnetzen viele Verbindungen (Lafferty u. a. 2006), ihre Biomasse kann die von Spitzenprädatoren übertreffen (Kuris u. a. 2008), und parasitoide Wespen werden weltweit als biologische Schädlingsbekämpfung eingesetzt. Ob Insektenlarven Schmerz bewusst erleben, ist offen. Evolutionsbiologisch gilt Parasitismus vielfach als abgeleiteter Zustand: Viele Parasiten stammen von frei lebenden oder symbiotischen Vorfahren ab und haben Gene und Fähigkeiten verloren.`,
    detail: `- **Was stimmt am Einwand:** Parasitoide Systeme sind hochspezialisiert (Gift, Legebohrer, domestizierte Polydnaviren zur Immununterdrückung). Wer sie als entworfen bezeichnet, muss sich der moralischen Frage stellen.
- **Was der Einwand übersieht:** (1) „Grausamkeit" setzt Absicht und Erleben voraus; selbst Gould nannte die Natur „nicht-moralisch". (2) Ob ein System entworfen ist, ist eine andere Frage als die, ob sein heutiger Einsatz gut ist. (3) Der Übergang von Symbiose zu Parasitismus ist in der Biologie gut dokumentiert (z. B. Apicomplexa und ihre photosynthetische Verwandte *Chromera velia*; das Kontinuum von Mutualismus zu Parasitismus bei *Wolbachia* oder Mykorrhiza).
- **Philosophisch:** Die Debatte ist Teil des Theodizee-Problems („Darwins Problem des Übels", Draper). Sie betrifft jede Form von Theismus – auch die theistische Evolution.`,
    sources: [darwinGray, gouldNonmoral, lafferty2006, kuris2008, gibbons2022, moore2008,
      { kind: 'wissenschaft', author: 'Mark A. Forbes u. a.', work: '„Quantifying the unquantifiable: why Hymenoptera, not Coleoptera, is the most speciose animal order", BMC Ecology 18', year: '2018', status: 'paraphrase', quote: `Rechnet man die vielen parasitoiden Wespen ein, die ihre Wirtsarten begleiten, sind die Hautflügler wahrscheinlich artenreicher als die Käfer.` },
    ],
  },
  quickAnswer: `Darwins Schlupfwespe ist ein ernstes Bild, aber kein Beweis gegen Gott. Erstens: Ob etwas entworfen ist, ist eine andere Frage als die, ob uns sein Ergebnis gefällt – auch eine Falle ist entworfen. Zweitens: Biologisch sind viele Parasiten „entgleiste" Lebewesen, die von freilebenden oder partnerschaftlichen Vorfahren abstammen und Fähigkeiten verloren haben – das passt zur christlichen Sicht einer guten, aber in Mitleidenschaft gezogenen Schöpfung (Röm 8,20–22). Drittens: Wer die Natur „grausam" nennt, braucht einen Maßstab für Gut und Böse – den der Naturalismus selbst nicht liefert.`,
  keyPoints: [
    `**Design ≠ Moralurteil:** Ob ein System Planung zeigt, ist eine empirische Frage; ob sein Einsatz gut ist, eine moralische. Wer beides vermengt, beweist nicht, dass es keinen Designer gibt.`,
    `**Darwin selbst ließ die Frage offen:** Im selben Brief neigte er zu „entworfenen Gesetzen" und fand das ganze Thema „zu tief für den menschlichen Verstand".`,
    `**Grausamkeit ist ein Moralbegriff:** Dawkins sagt, die Natur kenne „kein Böses und kein Gutes". Dann kann sie auch nicht grausam sein – das Argument setzt den Maßstab voraus, den es bestreitet.`,
    `**Parasitismus ist oft Abstieg, nicht Aufstieg:** Der Malariaerreger ist mit einer photosynthetischen Korallen-Partneralge verwandt; viele Parasiten haben Gene verloren. Das passt zur Idee entgleister Symbiose.`,
    `**Parasiten haben ökologische Funktion:** Sie regulieren Populationen, stabilisieren Nahrungsnetze und schützen Pflanzen – Schlupfwespen sind die wichtigsten natürlichen Schädlingsbekämpfer.`,
    `**Die Theodizee bleibt – für alle:** Auch die theistische Evolution muss erklären, warum Gott eine Welt mit Parasitoiden wollte. Das Problem verschwindet nicht durch einen anderen Mechanismus, sondern wird in der Hoffnung auf Erneuerung (Röm 8; Jes 11) beantwortet.`,
  ],
  argument: {
    name: 'Darwins Argument aus der Grausamkeit – geprüft',
    summary: 'Das Argument braucht drei Prämissen; jede ist angreifbar.',
    premises: [
      {
        text: `P1 (Gegner): Parasitoide wie die Schlupfwespe verursachen sinnloses, bewusstes Leiden.`,
        support: `Ob Raupen bewusst leiden, ist offen (Gibbons u. a. 2022); „sinnlos" ist eine Behauptung über alle möglichen Gründe, die niemand überblickt. Ökologisch sind Parasitoide hochwirksame Regulatoren.`,
        sources: [gibbons2022, lafferty2006],
      },
      {
        text: `P2 (Gegner): Wenn ein System entworfen ist, ist der Designer für jede Folge seines heutigen Einsatzes moralisch direkt verantwortlich.`,
        support: `Das übersieht, dass Systeme entgleisen können (Symbiose → Parasitismus, Funktionsverlust), und dass die Schrift von einer der Verderbnis unterworfenen Schöpfung spricht. Design-Erkennung beantwortet nicht, wer was wozu entworfen hat.`,
        sources: [moore2008, behe2010],
      },
      {
        text: `P3 (Gegner): Ein guter Gott hätte keinen moralisch hinreichenden Grund, eine Welt mit Parasitoiden zuzulassen.`,
        support: `Das ist der eigentliche Kern – und eine allgemeine Theodizee-Frage. Aus „ich sehe keinen Grund" folgt nicht „es gibt keinen Grund" (Wykstra). Zudem setzt das Urteil „grausam" objektive Moral voraus, die im Naturalismus schwer begründbar ist.`,
        sources: [dawkinsRiver, gouldNonmoral],
      },
    ],
    conclusion: `Darwins Schlupfwespe zeigt ein echtes emotionales und theologisches Problem, aber kein logisch zwingendes Argument gegen einen guten Schöpfer. Sie verweist auf die Theodizee – und diese wird im Christentum durch Kreuz, Auferstehung und die Hoffnung der Schöpfung beantwortet, nicht durch Verharmlosung.`,
  },
  voices: [
    {
      person: 'michael-behe',
      role: 'als Biochemiker',
      text: `Behe unterscheidet strikt zwischen der Frage, ob ein biologisches System Merkmale von Planung zeigt, und der Frage nach den Absichten oder der Güte des Planers. In *The Edge of Evolution* (2007) beschreibt er den Malariaerreger als Beispiel raffinierter molekularer Maschinerie und weist darauf hin, dass die Design-Erkennung keine theologischen Urteile über den Designer fällt – diese gehören in die Theologie, nicht in die Biologie.

In *Darwin Devolves* (2019) und seinem Übersichtsartikel von 2010 zeigt er zudem, dass adaptive Evolution sehr häufig durch das **Brechen oder Abschwächen** vorhandener Gene geschieht. Für Parasiten heißt das: Vieles an ihrer Lebensweise lässt sich als Verlust und Umnutzung zuvor vorhandener Funktionen verstehen – nicht als Beleg für einen Schöpfer, der Grausamkeit von Grund auf konstruiert hätte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution: The Search for the Limits of Darwinism', year: '2007', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves: The New Science About DNA That Challenges Evolution', year: '2019', status: 'paraphrase' },
        behe2010,
      ],
    },
    {
      person: 'michael-murray',
      role: 'als Religionsphilosoph',
      text: `Murray hat in *Nature Red in Tooth and Claw* (2008) die christlichen Antworten auf das Problem des Tierleids systematisch geprüft. Sein Ergebnis: Keine einzelne Antwort löst alles, aber mehrere zusammen – die Unsicherheit über das bewusste Erleben vieler Tiere, der Wert einer gesetzmäßigen Natur, in der Handlungen verlässliche Folgen haben, und der Wert einer Entwicklung „vom Chaos zur Ordnung" – können zeigen, dass das Tierleid mit einem guten Gott vereinbar ist. Murray warnt zugleich davor, das Problem zu verharmlosen.`,
      sources: [{ kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering', year: '2008', status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Ausleger der Schöpfung (Hexaemeron)',
      text: `Basilius predigte in Caesarea über die sechs Schöpfungstage vor Handwerkern und Bauern. Er lädt ein, die Natur genau zu beobachten, und mahnt, Gefährliches nicht vorschnell dem Schöpfer anzulasten: Giftpflanzen dienen manchen Tieren als Nahrung und dem Arzt als Heilmittel; Raubtiere halten Gleichgewicht; nichts ist ohne Grund. Für Basilius ist die Schöpfung eine Schule, in der der Mensch die Weisheit Gottes lernt – auch dort, wo er erschrickt.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien 5 und 9', status: 'paraphrase', quote: `Nichts ist ohne Grund geschaffen; auch das, was uns schädlich scheint, hat in der Ordnung des Ganzen seinen Ort.` }],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Ordnung',
      text: `Augustinus antwortet den Manichäern, die aus schädlichen Tieren auf einen bösen Schöpfer schlossen: Jedes Geschöpf ist in seiner eigenen Natur gut; schädlich wird es erst im Verhältnis zu anderem, und dieses Verhältnis hat im Ganzen seine Ordnung (*De civitate Dei* XI,22). Er gesteht offen ein, bei manchen Tieren den Zweck nicht zu kennen – und hält gerade diese Bescheidenheit für vernünftig: Wer die Werkstatt eines Handwerkers betritt, wirft ihm nicht gleich vor, er habe nutzlose Werkzeuge.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'XI,22', status: 'paraphrase', quote: `Was uns schädlich scheint, ist in seiner eigenen Natur gut und trägt an seinem Ort zur Schönheit des Ganzen bei.` }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Verderbnis und Erneuerung',
      text: `Für Athanasius ist die Schöpfung gut, weil sie vom Logos kommt – aber nicht aus sich selbst stabil: Ohne Teilhabe am Logos sinkt sie zurück ins Nichtsein und in die Verderbnis. Der Logos ist Mensch geworden, um die Verderbnis von innen her zu überwinden. Die Hoffnung auf eine erneuerte Schöpfung ist darum für ihn keine fromme Vertröstung, sondern die Konsequenz der Menschwerdung: Was der Logos angenommen hat, wird geheilt.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '4–9', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'darwin-schlupfwespe',
      objection: `Die Schlupfwespe legt ihre Eier in lebende Raupen, die Larven fressen sie von innen auf. Darwin hatte recht: Kein gütiger, allmächtiger Gott hat das absichtlich entworfen.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 1,
      answer: `Das ist ein starkes Bild, und ich will es nicht kleinreden. Aber Darwin zog daraus selbst keinen Schluss gegen Gott: Im selben Brief schrieb er, er neige dazu, alles als Ergebnis „entworfener Gesetze" zu sehen, und das Thema sei zu tief für den menschlichen Verstand. Zudem ist offen, ob eine Raupe überhaupt bewusst leidet. Und ökologisch sind Schlupfwespen die wichtigsten natürlichen Regulatoren von Pflanzenfressern.`,
      detail: `Darwins Brief an Asa Gray ist kein triumphierender Gottesbeweis-Widerruf, sondern ein ehrliches Ringen. Darwin schreibt, er könne nicht „so deutlich wie andere" Beweise für Plan und Güte überall sehen, neigt aber zur Idee von Gesetzen, die entworfen sind, deren Einzelheiten dem „Zufall" überlassen bleiben – und gesteht, dass ihn das nicht befriedigt. Wer Darwin zitiert, sollte den ganzen Brief zitieren.`,
      sources: [darwinGray, darwinGrayLaws],
      questionsBack: [
        `Hast du den ganzen Brief an Gray gelesen – auch die Stelle über die „entworfenen Gesetze"?`,
        `Woher weißt du, dass eine Raupe Leiden so erlebt wie wir?`,
      ],
      followUps: [
        {
          id: 'raupe-leidet-doch',
          objection: `Die Forschung von Lars Chittka und Kollegen legt nahe, dass Insekten Schmerz empfinden könnten. Du kannst dich nicht hinter Unwissen verstecken.`,
          objectionBy: 'Jonathan Birch',
          targetsPremise: 1,
          answer: `Das nehme ich ernst. Die Übersicht von Gibbons, Chittka und Kollegen (2022) findet aber gerade für Schmetterlingslarven nur schwache Belege. Und selbst wenn Raupen etwas spüren: Dann stehen wir vor der allgemeinen Frage des Tierleids – nicht vor einem Argument speziell gegen Design. Diese Frage beantworte ich nicht mit Verharmlosung, sondern mit dem, was Christen über eine leidende und erlöste Schöpfung glauben.`,
          sources: [gibbons2022],
          followUps: [
            {
              id: 'dann-ist-gott-grausam',
              objection: `Ein allmächtiger Gott hätte Regulation ohne Qual erfinden können. Dass er es nicht tat, macht ihn grausam oder nicht existent.`,
              objectionBy: 'Richard Dawkins',
              targetsPremise: 3,
              answer: `Dieser Schluss setzt voraus, dass du alle Gründe überblickst, die ein Gott haben könnte, und alle Nebenwirkungen einer anders gebauten Biologie kennst. Das kann niemand. Zudem sagt die Schrift selbst, dass die Schöpfung nicht in ihrem Idealzustand ist, sondern der Vergänglichkeit unterworfen wurde – „auf Hoffnung" (Röm 8,20). Sie verheißt nicht, dass alles schon gut ist, sondern dass es gut werden wird.`,
              followUps: [
                {
                  id: 'moral-ohne-gott',
                  objection: `Ich brauche keinen Gott, um Grausamkeit zu erkennen. Jeder anständige Mensch sieht, dass das schrecklich ist.`,
                  objectionBy: 'Jerry Coyne',
                  targetsPremise: 3,
                  answer: `Natürlich erkennst du es – das bestreite ich nicht. Die Frage ist, was du damit behauptest. Dawkins schreibt, das Universum habe „kein Böses und kein Gutes, nichts als blinde, erbarmungslose Gleichgültigkeit". Wenn das stimmt, ist die Schlupfwespe nicht grausam, sondern einfach da – Gould nannte die Natur deshalb „nicht-moralisch". Dein moralisches Entsetzen ist ernst zu nehmen, aber es passt besser in eine Welt, in der Gut und Böse real sind.`,
                  sources: [dawkinsRiver, gouldNonmoral],
                  questionsBack: [`Ist das Verhalten der Wespe in deinem Weltbild objektiv schlecht – oder nur etwas, das dir missfällt?`],
                  followUps: [
                    {
                      id: 'draper-intern',
                      objection: `Ich argumentiere intern: Nach deinen eigenen Maßstäben ist das schlecht. Und das Übel in der Natur ist unter der Hypothese der Gleichgültigkeit viel wahrscheinlicher als unter dem Theismus.`,
                      objectionBy: 'Paul Draper',
                      targetsPremise: 3,
                      answer: `Ein internes Argument ist legitim – das gestehe ich zu. Aber dann musst du die ganze Evidenz gewichten, nicht nur einen Ausschnitt. Unter Gleichgültigkeit ist es ebenfalls überraschend, dass es Bewusstsein, Moralerkenntnis, Schönheit, eine feinabgestimmte, verstehbare Natur und überhaupt Wesen gibt, die sich über Grausamkeit empören. Das Übel ist ein Datenpunkt gegen den Theismus; er steht nicht allein.`,
                      detail: `Drapers „Darwinsches Argument aus dem Übel" vergleicht die Wahrscheinlichkeit der Verteilung von Lust und Schmerz unter Theismus und unter einer „Hypothese der Gleichgültigkeit". Christliche Philosophen (z. B. Swinburne, Murray) antworten: (1) Die Wahrscheinlichkeiten unter dem Theismus sind nicht so niedrig, wenn man den Wert gesetzmäßiger Natur, die Freiheit und die Hoffnung auf Vollendung einbezieht. (2) Die Gesamtevidenz umfasst auch das, was der Naturalismus schlecht erklärt (Bewusstsein, Moral, Feinabstimmung, Geschichte Jesu).`,
                      sources: [{ kind: 'gegner', author: 'Paul Draper', work: '„Darwin\'s Argument from Evil", in: Y. Nagasawa (Hg.), Scientific Approaches to the Philosophy of Religion', year: '2012', status: 'paraphrase' }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'darwin-agnostiker',
          objection: `Darwin war höflich gegenüber Gray. In seiner Autobiographie bezeichnete er sich als Agnostiker – er hatte den Glauben verloren.`,
          objectionBy: 'Jerry Coyne',
          answer: `Das stimmt, und das sollte man nicht beschönigen. Aber sein Grund war ein theologischer – das Leid –, kein biologischer Befund. Darwin wurde besonders durch den Tod seiner Tochter Annie erschüttert. Das verdient Mitgefühl, keinen Spott. Für die Debatte heißt das: Wir sind beim Problem des Leids, nicht bei einer Widerlegung durch die Biologie.`,
          sources: [{ kind: 'gegner', author: 'Charles Darwin', work: 'Autobiographie (Recollections of the Development of my Mind and Character)', year: '1876 (posthum veröffentlicht)', status: 'paraphrase', quote: `Darwin beschreibt, wie er allmählich den christlichen Glauben verlor, und nennt sich in Fragen des Ursprungs aller Dinge einen Agnostiker.` }],
        },
      ],
    },
    {
      id: 'design-heisst-sadist',
      objection: `Ihr ID-Leute sagt, die Systeme der Schlupfwespe seien raffiniert entworfen. Dann ist euer Designer ein Sadist. Die Evolution entlastet Gott – das ist Darwins Geschenk an die Religion.`,
      objectionBy: 'Francisco Ayala',
      targetsPremise: 2,
      answer: `Ob ein System entworfen ist, und ob sein Einsatz gut ist, sind zwei verschiedene Fragen. Ein Gift, eine Falle, ein Virus aus einem Labor – alles zeigt Planung, auch wenn uns das Ergebnis erschreckt. Und die theistische Evolution entlastet Gott nicht wirklich: Auch dort hat Gott eine Welt gewollt, in der solche Systeme entstehen. Das Problem ist dasselbe; es heißt Theodizee.`,
      detail: `Ayala, selbst früher Dominikanerpriester, argumentierte in *Darwin's Gift to Science and Religion* (2007), ID mache Gott für jeden Defekt und jeden Parasiten unmittelbar verantwortlich, während die Evolution diese Dinge als Nebenprodukte eines natürlichen Prozesses erkläre. Die Antwort: Wenn Gott allwissend ist, wusste er auch, was sein Prozess hervorbringt. Die Verantwortung wird nur um einen Schritt verschoben.`,
      voices: [
        {
          person: 'michael-behe',
          role: 'als Biochemiker',
          text: `Behe betont, dass die Design-Erkennung nur feststellt, dass ein System Planung erfordert. Wer der Designer ist und warum ein System heute schadet, beantwortet sie nicht. Eine raffinierte Maschine kann missbraucht, beschädigt oder umfunktioniert worden sein.`,
          sources: [{ kind: 'fachliteratur', author: 'Michael J. Behe', work: 'The Edge of Evolution', year: '2007', status: 'paraphrase' }],
        },
      ],
      sources: [{ kind: 'gegner', author: 'Francisco J. Ayala', work: 'Darwin\'s Gift to Science and Religion', year: '2007', status: 'paraphrase', quote: `Ayala meint, die Evolution befreie den Glauben davon, Gott unmittelbar für Parasiten, Krankheiten und Fehlbildungen verantwortlich zu machen.` }],
      followUps: [
        {
          id: 'free-process-ausrede',
          objection: `Die „Freiheit der Natur", von der Polkinghorne spricht, ist eine Ausrede. Wespen haben keinen freien Willen.`,
          objectionBy: 'Jerry Coyne',
          answer: `Polkinghornes Punkt ist nicht der freie Wille der Wespe, sondern der Wert einer Schöpfung mit eigener Gesetzmäßigkeit: Nur in einer verlässlichen Natur können Handlungen Folgen haben, kann Wissenschaft möglich sein, kann Verantwortung entstehen. Eine Welt, in der Gott jede unangenehme Folge sofort verhindert, wäre keine eigenständige Welt mehr. Ob das alles erklärt, ist offen – aber es ist keine Ausrede, sondern ein Argument.`,
          sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Providence', year: '1989', status: 'paraphrase', quote: `Polkinghorne formuliert eine „free-process defence": Gott lässt der Schöpfung zu, sie selbst zu sein; das schließt Prozesse ein, die Leid verursachen.` }],
          followUps: [
            {
              id: 'fall-vor-adam',
              objection: `Parasitoide Wespen gibt es seit über hundert Millionen Jahren – lange vor Adam. Der Sündenfall kann ihre Existenz nicht erklären.`,
              objectionBy: 'Jerry Coyne',
              answer: `Christen beantworten das unterschiedlich, und ich sage dir ehrlich: Hier gibt es kein Dogma. Manche vertreten eine junge Erde. Andere sehen die Unterwerfung der Schöpfung „auf Hoffnung" als von Gott im Voraus auf den Fall hin geordnet; wieder andere denken an einen Fall geistiger Mächte vor dem Menschen (C. S. Lewis) oder an eine Schöpfung, die von Anfang an auf ihre Vollendung hin unterwegs ist. Allen gemeinsam ist: Die Welt ist gut, aber nicht fertig.`,
              detail: `- **Junge Erde:** in der koptischen Kirche vertreten, aber nicht verbindlich.
- **Rückwirkende Folgen des Falls:** William Dembski (*The End of Christianity*, 2009) argumentiert, Gott habe die Welt im Vorgriff auf den menschlichen Fall so geordnet, dass sie dessen Folgen spiegelt.
- **Fall der Engel:** C. S. Lewis erwägt in *The Problem of Pain* (Kap. 9), dass eine gefallene geistige Macht die Tierwelt schon vor dem Menschen verdorben haben könnte.
- **Werdende Schöpfung:** Irenäus spricht vom Menschen als einem Wesen, das wachsen und reifen soll; manche übertragen das auf die ganze Schöpfung.`,
              sources: [
                { kind: 'fachliteratur', author: 'William A. Dembski', work: 'The End of Christianity: Finding a Good God in an Evil World', year: '2009', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 9 („Animal Pain")', year: '1940', status: 'paraphrase' },
              ],
              questionsBack: [`Wenn mehrere christliche Modelle die Frage widerspruchsfrei beantworten – ist das Argument dann noch ein Beweis gegen Gott oder nur eine offene Frage?`],
            },
          ],
        },
      ],
    },
    {
      id: 'parasitismus-ueberall',
      objection: `Parasitismus ist keine Ausnahme, sondern womöglich die häufigste Lebensweise der Erde. Eine Welt voller Parasiten sieht nicht nach einem liebenden Schöpfer aus.`,
      objectionBy: 'Carl Zimmer',
      targetsPremise: 1,
      answer: `Richtig, Parasiten sind überall – und gerade das zeigt die Ökologie: Sie stellen einen Großteil der Verbindungen in Nahrungsnetzen, ihre Biomasse übertrifft teils die der Raubtiere, sie regulieren Populationen und erhalten die Artenvielfalt. Schlupfwespen schützen weltweit Pflanzen vor Massenvermehrung von Raupen und werden im Bio-Anbau gezielt eingesetzt. Eine Welt ohne Parasiten wäre keine bessere, sondern eine instabile Welt.`,
      sources: [lafferty2006, kuris2008],
      followUps: [
        {
          id: 'nutzen-rechtfertigt-nicht',
          objection: `Ökologischer Nutzen rechtfertigt nicht die Methode. Ein allmächtiger Gott hätte schmerzfreie Regulation erfinden können.`,
          objectionBy: 'Richard Dawkins',
          targetsPremise: 3,
          answer: `Vielleicht. Aber diese Behauptung setzt voraus, dass du eine ganze alternative Biologie entworfen und ihre Folgen durchgerechnet hast. Bemerkenswert ist zudem: Dieselben Kritiker nennen die Natur „verschwenderisch" und „stümperhaft" – und verlangen zugleich ein vollkommen optimiertes, schmerzfreies Ökosystem. Wer so urteilt, braucht ein Modell, nicht nur ein Gefühl.`,
          sources: [darwinHooker],
          followUps: [
            {
              id: 'skeptischer-theismus',
              objection: `Mit „Gott hat Gründe, die wir nicht kennen" kannst du alles immunisieren. Das ist intellektuell unredlich.`,
              objectionBy: 'William Rowe',
              targetsPremise: 3,
              answer: `Ich benutze unser Nichtwissen nicht als Beweis für Gott, sondern nur, um einen bestimmten Schluss zu blockieren: von „Ich sehe keinen Grund" auf „Es gibt keinen Grund". Das ist nur gültig, wenn wir erwarten dürften, die Gründe zu sehen – und bei einem unendlichen Geist und einer Geschichte, die Milliarden Jahre umspannt, ist das nicht der Fall. Meine positiven Gründe für Gott liegen woanders.`,
              detail: `Stephen Wykstra hat diesen Punkt als „CORNEA"-Prinzip formuliert: Man darf aus „Ich sehe nichts" nur dann auf „Da ist nichts" schließen, wenn man vernünftigerweise erwarten würde, es zu sehen, falls es da wäre. Ein Kleinkind sieht die Gründe nicht, warum seine Eltern es impfen lassen – daraus folgt nicht, dass es keine gibt.`,
              voices: [
                {
                  person: 'wykstra',
                  role: 'als Erkenntnistheoretiker',
                  text: `Wykstra argumentiert, dass der Schritt von unsichtbaren zu nicht existierenden Gründen nur unter einer Bedingung zulässig ist: Wir müssten erwarten können, sie zu erkennen. Bei einem Wesen, dessen Weisheit die unsere so überragt wie die der Eltern die des Säuglings, ist diese Erwartung unbegründet.`,
                  sources: [{ kind: 'fachliteratur', author: 'Stephen J. Wykstra', work: '„The Humean Obstacle to Evidential Arguments from Suffering", International Journal for Philosophy of Religion 16', year: '1984', status: 'paraphrase' }],
                },
              ],
              followUps: [
                {
                  id: 'moralische-laehmung',
                  objection: `Dann kannst du auch nie wissen, ob Gott gut ist – oder ob du ein Kind retten sollst. Skeptischer Theismus führt in die moralische Lähmung.`,
                  objectionBy: 'Paul Draper',
                  answer: `Nein. Meine Pflichten kenne ich aus Gewissen und Offenbarung: Ich soll dem Kind helfen, Punkt. Die Skepsis betrifft nur Gottes Gesamtüberblick über die Geschichte, nicht meine Pflicht im Augenblick. Und Gottes Güte erschließe ich nicht aus einer Bilanz der Natur, sondern daraus, dass er in Christus selbst Leiden auf sich genommen hat. Das Kreuz ist die christliche Antwort auf das Leid – keine Formel, sondern eine Person.`,
                  questionsBack: [`Leitest du deine eigenen moralischen Pflichten aus einer Gesamtbilanz der Natur ab – oder wusstest du schon vorher, dass man einem Kind hilft?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'entartung-ad-hoc',
      objection: `Die Idee, Parasiten seien „entartete" gute Geschöpfe oder entgleiste Symbiosen, ist eine Ad-hoc-Erfindung von Kreationisten.`,
      objectionBy: 'Nathan Lents',
      targetsPremise: 2,
      answer: `Zum Teil ist es eine Hypothese – das gestehe ich zu. Aber sie hat einen erstaunlichen Rückhalt in der Evolutionsbiologie selbst: Der Malariaerreger ist eng mit *Chromera velia* verwandt, einer photosynthetischen Alge, die mit Korallen lebt, und trägt noch einen funktionslos gewordenen Plastiden in sich. Viele Parasiten haben Gene verloren. Und zwischen Symbiose und Parasitismus gibt es fließende Übergänge – etwa bei *Wolbachia*.`,
      sources: [moore2008, behe2010],
      followUps: [
        {
          id: 'verlust-ist-evolution',
          objection: `Genverlust ist eben auch Evolution. Das bestätigt Darwin, nicht Design.`,
          objectionBy: 'Jerry Coyne',
          answer: `Einverstanden: Verlust ist Evolution, und er erklärt viel an parasitischen Lebensweisen. Aber genau darin liegt mein Punkt: Verlust erklärt den Abstieg, nicht den Aufbau der Maschinerie, die verloren oder umgenutzt wurde. Behe nennt das die „erste Regel der adaptiven Evolution": Brechen ist leicht, Bauen ist schwer. Wer Parasitismus durch Verlust erklärt, hat das Problem des Ursprungs komplexer Funktionen nicht gelöst.`,
          sources: [behe2010],
          followUps: [
            {
              id: 'polydnaviren',
              objection: `Auch die raffinierten Werkzeuge der Wespe sind erklärt: Ihre Polydnaviren stammen nachweislich von einem Nudivirus ab.`,
              objectionBy: 'Jerry Coyne',
              answer: `Das ist faszinierend – und ich erkenne die Forschung an. Aber zu wissen, *wovon* ein System abstammt, ist nicht dasselbe wie zu zeigen, *wie* ein Virus so ins Erbgut integriert wurde, dass die Wespe seine Partikel gezielt herstellt, verpackt und zur Immununterdrückung einsetzt. Das ist eine koordinierte Mehrkomponenten-Lösung. Ob sie entworfen oder ungelenkt entstand, entscheidet die Herkunftsangabe allein nicht.`,
              sources: [bezier2009],
              followUps: [
                {
                  id: 'folterwerkzeug-bewundern',
                  objection: `Du bewunderst also ein Folterwerkzeug? Das sagt viel über deinen Gott.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Ich kann die Raffinesse eines Systems erkennen und zugleich über seine Wirkung trauern – das tun Christen seit jeher. Paulus sagt, die Schöpfung „seufzt" und „ängstet sich"; das ist kein naives Lob der Natur. Mein Gott ist nicht ein Ingenieur, der Qual genießt, sondern der, der in Christus selbst gelitten hat und verheißt, dass Wolf und Lamm beieinander wohnen werden. Dein Entsetzen teile ich – ich habe nur einen Grund zur Hoffnung.`,
                  sources: [
                    { kind: 'bibel', work: 'Römer', ref: '8,22', quote: `Denn wir wissen, daß alle Kreatur sehnt sich mit uns und ängstet sich noch immerdar.`, translation: 'Luther 1912', status: 'verbatim' },
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
    `Wenn die Natur „kein Gut und kein Böse" kennt (Dawkins) – in welchem Sinn ist die Schlupfwespe dann grausam?`,
    `Hast du den Brief Darwins an Gray vollständig gelesen – auch seine Neigung zu „entworfenen Gesetzen"?`,
    `Woher weißt du, dass es für ein Ökosystem eine schmerzfreie Alternative mit denselben Vorteilen gibt?`,
    `Wie erklärst du, dass viele Parasiten von freilebenden oder symbiotischen Vorfahren abstammen und Gene verloren haben?`,
    `Löst die theistische Evolution das Problem wirklich – oder verschiebt sie es nur?`,
  ],
  avoid: [
    `„Tiere und Insekten spüren nichts" – nicht belegbar; die Frage ist offen, bei Wirbeltieren ist Schmerz gut belegt.`,
    `„Vor dem Sündenfall gab es überhaupt keinen Tod" als einzig mögliche christliche Position darstellen – die koptische Kirche hat darüber kein Dogma.`,
    `Schlupfwespen als „Beweis für den Teufel" darstellen – das wirkt wie ein Ausweichmanöver und ist theologisch nicht gedeckt.`,
    `Darwin als verbitterten Gottesfeind karikieren – sein Ringen nach dem Tod seiner Tochter verdient Respekt.`,
  ],
  concessions: [
    `Das Tierleid gehört zu den schwersten Fragen an den Glauben; keine Antwort nimmt ihm völlig den Stachel.`,
    `Die Idee entgleister Symbiosen ist für viele Parasiten plausibel, aber nicht für jeden Fall im Detail gezeigt.`,
    `Wer biologische Systeme als „entworfen" bezeichnet, muss sich der moralischen Frage stellen – sie ist legitim.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Nature Red in Tooth and Claw: Theism and the Problem of Animal Suffering', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Michael J. Behe', work: 'Darwin Devolves', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', year: '1940', status: 'paraphrase' },
    gouldNonmoral,
  ],
  difficulty: 2,
  tags: ['Schlupfwespe', 'Parasiten', 'Darwin', 'Theodizee', 'Tierleid', 'Design', 'Röm 8'],
  related: ['theodizee/tierleid', 'theodizee/natuerliche-uebel', 'theodizee/evidentielles-problem', 'evolution/schlechtes-design', 'natur-grausamkeit-design/krankheitserreger-design', 'natur-grausamkeit-design/aussterben-99-prozent'],
};

export default claim;
