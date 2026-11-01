import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religion-nebenprodukt',
  title: `„Religion ist ein Nebenprodukt unserer kognitiven Mechanismen (HADD, Boyer)."`,
  proponents: [
    { name: 'Pascal Boyer', role: 'Anthropologe und Psychologe, Washington University in St. Louis', work: 'Religion Explained: The Evolutionary Origins of Religious Thought (2001)' },
    { name: 'Scott Atran', role: 'Anthropologe, CNRS Paris / University of Michigan', work: 'In Gods We Trust: The Evolutionary Landscape of Religion (2002)' },
    { name: 'Daniel Dennett', role: 'Philosoph, Tufts University (gest. 2024)', work: 'Breaking the Spell: Religion as a Natural Phenomenon (2006)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 5 „The Roots of Religion"' },
    { name: 'Stewart Guthrie', role: 'Anthropologe, Fordham University', work: 'Faces in the Clouds: A New Theory of Religion (1993)' },
    { name: 'Paul Bloom', role: 'Psychologe, Yale University', work: '„Is God an Accident?", The Atlantic (Dezember 2005)' },
  ],
  steelman: `Die Kognitive Religionswissenschaft (KRW) erklärt Religion ohne Gott. Unser Gehirn ist in einer gefährlichen Umwelt entstanden, in der es sich lohnte, hinter jedem Rascheln im Gebüsch einen Akteur zu vermuten – lieber zehnmal fälschlich einen Tiger als einmal zu wenig. Diese „hypersensible Akteurserkennung" (HADD) produziert ständig Fehlalarme: Wir sehen Gesichter in Wolken und Absichten im Donner. Dazu kommt unsere „Theory of Mind", mit der wir anderen Gedanken zuschreiben – und die wir mühelos auf unsichtbare Wesen übertragen. Kinder deuten die Natur intuitiv zweckhaft („Felsen sind spitz, damit Tiere sich kratzen können") und trennen intuitiv Geist und Körper. Pascal Boyer zeigte, dass „minimal kontraintuitive" Konzepte – eine Person ohne Körper, ein Baum, der zuhört – besonders einprägsam sind und sich darum kulturell verbreiten. Religion ist also kein Fenster zum Göttlichen, sondern ein Nebenprodukt von Denkwerkzeugen, die für ganz andere Zwecke entstanden sind – so wie die Motte ins Licht fliegt, weil ihr Navigationssystem auf den Mond geeicht ist (Dawkins).`,
  biblical: {
    summary: `Die Bibel **erwartet** genau das, was die KRW beschreibt: dass Menschen von Natur aus eine Ahnung von Gott haben. „Was man von Gott weiß, ist ihnen offenbar … Gottes unsichtbares Wesen … wird ersehen … an den Werken" (Röm 1,19–20). Gott hat „die Ewigkeit in ihr Herz gelegt" (Pred 3,11, Elberfelder), damit die Menschen „ihn fühlen und finden möchten" (Apg 17,27). Zugleich erklärt die Schrift die Vielfalt der Religionen: Die natürliche Gotteserkenntnis wird verdrängt und verzerrt – Menschen „haben verwandelt die Herrlichkeit des unvergänglichen Gottes in ein Bild gleich dem vergänglichen Menschen und der Vögel und der vierfüßigen und der kriechenden Tiere" (Röm 1,23). Eine natürliche Anlage plus Verzerrung: Das ist das biblische Modell.`,
    detail: `- **Röm 1,19–23:** natürliche Gotteserkenntnis *und* ihre Verzerrung in Götzendienst – das erklärt sowohl die Universalität der Religion als auch ihre Vielfalt.
- **Röm 2,14–15:** Das Gesetz ist den Heiden „ins Herz geschrieben"; das Gewissen bezeugt es.
- **Apg 17,26–28:** Paulus knüpft auf dem Areopag an die natürliche Religiosität der Athener an.
- **Ps 19,2:** „Die Himmel erzählen die Ehre Gottes" – die Schöpfung spricht, auch ohne Worte.`,
    sources: [
      { kind: 'bibel', work: 'Römer', ref: '1,19–20', quote: `Denn was man von Gott weiß, ist ihnen offenbar; denn Gott hat es ihnen offenbart, damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt; also daß sie keine Entschuldigung haben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '1,23', quote: `und haben verwandelt die Herrlichkeit des unvergänglichen Gottes in ein Bild gleich dem vergänglichen Menschen und der Vögel und der vierfüßigen und der kriechenden Tiere.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Prediger (Kohelet)', ref: '3,11', status: 'paraphrase', quote: `Alles hat er schön gemacht zu seiner Zeit; auch hat er die Ewigkeit in ihr Herz gelegt.`, note: 'Wiedergabe nach der Elberfelder Übersetzung; Luther 1912 übersetzt den Vers anders.' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,27–28', quote: `daß sie den Herrn suchen sollten, ob sie doch ihn fühlen und finden möchten; und fürwahr, er ist nicht ferne von einem jeglichen unter uns. Denn in ihm leben, weben und sind wir.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter lehrten eine **natürliche Gotteserkenntnis**: Der Mensch ist als vernunftbegabtes Ebenbild Gottes geschaffen und kann Gott durch seine eigene Seele und durch die Schöpfung erkennen. Athanasius beschreibt in „Gegen die Heiden" zwei Wege: den Weg nach innen – die reine Seele erkennt im Spiegel ihrer selbst den Logos, nach dessen Bild sie geschaffen ist – und den Weg über die Ordnung der Schöpfung, die wie eine Schrift auf ihren Urheber verweist. Augustinus fasst die Sehnsucht nach Gott in den berühmten Satz: „Unruhig ist unser Herz, bis es ruht in dir." Dass der Mensch „von Natur aus" religiös ist, bestätigt nach diesem Verständnis die Schöpfungsabsicht Gottes.`,
    detail: `- **Athanasius, Contra Gentes 30–34:** Die Seele ist fähig, Gott zu erkennen, wenn sie sich von der Verunreinigung der Sünde reinigt; sie ist wie ein Spiegel, in dem sich das Bild des Logos zeigt.
- **Athanasius, Contra Gentes 35–44:** Die Harmonie und Ordnung der Schöpfung offenbaren den Schöpfer wie die Buchstaben eines Buches ihren Schreiber oder die Musik den Musiker.
- **Tertullian** (Apologeticum 17,6) spricht vom „Zeugnis der von Natur christlichen Seele" – Menschen rufen in der Not spontan „Gott!" an. (Tertullian wird von der koptischen Kirche nicht als Heiliger verehrt; hier nur als apologetischer Zeuge.)`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '34–35', status: 'paraphrase', quote: `Die Seele kann, wenn sie den Schmutz der Sünde ablegt, in sich selbst wie in einem Spiegel das Bild des Vaters, den Logos, schauen; und wer das nicht vermag, dem verkündet die Schöpfung selbst durch ihre Ordnung und Harmonie den Schöpfer.` },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'I,1', status: 'verbatim', quote: `Du hast uns geschaffen zu dir hin, und unruhig ist unser Herz, bis es ruht in dir.`, original: `Fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te.`, translation: 'eigene Übersetzung' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Apologeticum', ref: '17,6', status: 'verbatim', quote: `O Zeugnis der von Natur christlichen Seele!`, original: `O testimonium animae naturaliter Christianae!`, translation: 'eigene Übersetzung' },
    ],
  },
  opposingView: {
    summary: `Die KRW ist ein etabliertes, produktives Forschungsfeld. Gut belegt sind: die Neigung von Kindern zu zweckhaftem (teleologischem) Denken über die Natur (Kelemen), intuitive Leib-Geist-Unterscheidungen (Bloom), anthropomorphe Gottesvorstellungen im spontanen Denken trotz abstrakter offizieller Theologie (Barrett & Keil). Weniger gesichert ist die Rolle der hypersensiblen Akteurserkennung (HADD) bei der Entstehung von Glauben – neuere Experimente fanden dafür wenig Unterstützung; kulturelles Lernen durch glaubwürdige Vorbilder („credibility-enhancing displays", Henrich) erweist sich als wichtiger Prädiktor. Strittig ist, ob Religion ein Nebenprodukt oder eine Anpassung ist (Norenzayan, Sosis). **Über die Wahrheit religiöser Überzeugungen entscheidet die KRW nach dem Selbstverständnis vieler ihrer Vertreter nicht**; sie arbeitet methodisch agnostisch. Ob sie den Glauben „entlarvt", wird in der Religionsphilosophie kontrovers diskutiert.`,
    detail: `- **Barrett (2000):** führte den Begriff „hypersensitive agency detection device" (HADD) in die Religionsforschung ein – ausgerechnet ein Christ.
- **Barrett & Keil (1996):** Probanden beschrieben Gott offiziell als allgegenwärtig und allwissend, erinnerten Geschichten aber so, als handle Gott nacheinander wie ein Mensch („theologische Korrektheit").
- **Kelemen (2004):** „Sind Kinder intuitive Theisten?" – Kinder bevorzugen zweckhafte Erklärungen für natürliche Dinge.
- **HADD empirisch:** Arbeiten u. a. aus der Gruppe um Michiel van Elk fanden kaum Belege, dass Akteurserkennung in bedrohlichen Situationen übernatürliche Überzeugungen vorhersagt.
- **Kulturelles Lernen:** Henrich (2009) und Lanman & Buhrmester (2017): Wer glaubwürdige religiöse Vorbilder erlebt (Menschen, die für ihren Glauben Kosten tragen), glaubt eher – Überzeugungen werden stark kulturell übertragen.
- **Philosophische Debatte:** Murray (2009), Clark & Barrett (2011), Jong & Visala (2014) argumentieren, dass die KRW keinen guten Grund liefert, Gottesglauben für unbegründet zu halten.`,
    sources: [
      { kind: 'wissenschaft', author: 'Justin L. Barrett', work: 'Exploring the natural foundations of religion', ref: 'Trends in Cognitive Sciences 4 (2000), 29–34', year: '2000', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. L. Barrett, F. C. Keil', work: 'Conceptualizing a nonnatural entity: Anthropomorphism in God concepts', ref: 'Cognitive Psychology 31 (1996), 219–247', year: '1996', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Deborah Kelemen', work: 'Are children „intuitive theists"? Reasoning about purpose and design in nature', ref: 'Psychological Science 15 (2004), 295–301', year: '2004', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'D. R. Maij, H. T. van Schie, M. van Elk', work: 'The boundary conditions of the hypersensitive agency detection device: An empirical investigation of agency detection in threatening situations', ref: 'Religion, Brain & Behavior 9 (2019), 23–51', year: '2019', status: 'paraphrase', url: 'https://doi.org/10.1080/2153599X.2017.1362662', note: 'Bestätigt (Prüfung Nov. 2026): Sechs Experimente (N = 233); Bedrohung erhöhte die falsche Erkennung von Akteuren nicht; Akteurserkennung hing nicht mit übernatürlichem Glauben zusammen.' },
      { kind: 'wissenschaft', author: 'Joseph Henrich', work: 'The evolution of costly displays, cooperation and religion: Credibility enhancing displays and their implications for cultural evolution', ref: 'Evolution and Human Behavior 30 (2009), 244–260', year: '2009', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. A. Lanman, M. D. Buhrmester', work: 'Religious actions speak louder than words: Exposure to credibility-enhancing displays predicts theism', ref: 'Religion, Brain & Behavior 7 (2017), 3–16', year: '2017', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jeffrey Schloss, Michael J. Murray (Hg.)', work: 'The Believing Primate: Scientific, Philosophical, and Theological Reflections on the Origin of Religion', year: '2009', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kelly James Clark, Justin L. Barrett', work: 'Reidian religious epistemology and the cognitive science of religion', ref: 'Journal of the American Academy of Religion 79 (2011), 639–675', year: '2011', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Jonathan Jong, Aku Visala', work: 'Evolutionary debunking arguments against theism, reconsidered', ref: 'International Journal for Philosophy of Religion 76 (2014), 243–258', year: '2014', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Kognitive Religionswissenschaft beschreibt, **wie** unser Geist Gottesglauben leicht macht – sie sagt nichts darüber, **ob** Gott existiert. Einer ihrer Pioniere, der Psychologe Justin Barrett, der den Begriff „HADD" in die Religionsforschung einführte, ist selbst Christ und sagt: Wenn es einen Schöpfer gibt, wäre zu erwarten, dass er uns mit einem natürlichen Sinn für ihn ausstattet – genau das sagt Röm 1,19–20. Wer argumentiert „Glaube ist kognitiv erklärbar, also falsch", begeht den genetischen Fehlschluss – und müsste dann auch seinen Glauben an andere Personen, an Absichten und an die Außenwelt verwerfen, die auf denselben Mechanismen beruhen.`,
  keyPoints: [
    `**Wie ≠ ob:** Eine Erklärung, wie Menschen zu einer Überzeugung kommen, entscheidet nicht, ob die Überzeugung wahr ist (genetischer Fehlschluss).`,
    `**Paritätsargument:** Dieselben Mechanismen (Akteurserkennung, Theory of Mind) erzeugen unseren Glauben an andere Personen. Wer Gottesglauben damit „entlarvt", entlarvt auch das Fremdpsychische.`,
    `**Zirkelproblem:** Ob ein Mechanismus im Fall Gottes irreführt, kann man nur beurteilen, wenn man schon weiß, ob Gott existiert.`,
    `**Biblisch erwartet:** Röm 1,19–23 sagt eine natürliche Gotteserkenntnis *und* ihre Verzerrung voraus – genau das Muster aus universaler Religiosität und religiöser Vielfalt.`,
    `**HADD wackelt empirisch:** Neuere Studien finden wenig Belege, dass Akteurserkennung Glauben erzeugt; kulturelles Lernen und Reflexion spielen eine größere Rolle.`,
    `**Ein Pionier des Feldes ist Christ:** Justin Barrett sieht in der KRW keine Widerlegung, sondern eine Bestätigung des biblischen Menschenbildes.`,
  ],
  argument: {
    name: 'Das Paritätsargument gegen die Entlarvung durch die KRW',
    summary: 'Wenn kognitive Erklärbarkeit Gottesglauben entlarvt, entlarvt sie auch Überzeugungen, die niemand aufgeben will.',
    premises: [
      {
        text: `P1: Die Mechanismen, die laut KRW Gottesglauben begünstigen – Akteurserkennung, Theory of Mind, Zweck-Intuitionen –, erzeugen auch unsere alltäglichen Überzeugungen über andere Personen, ihre Absichten und die Zweckmäßigkeit von Artefakten und Organismen.`,
        support: `Das ist Kern der KRW selbst: Religiöses Denken nutzt gewöhnliche kognitive Werkzeuge (Boyer: „Religion ist nicht besonders"; Barrett: religiöse Überzeugungen beruhen auf „nicht-reflektierten" Alltagsüberzeugungen).`,
        sources: [
          { kind: 'gegner', author: 'Pascal Boyer', work: 'Religion Explained', year: '2001', status: 'paraphrase' },
        ],
      },
      {
        text: `P2: Dass eine Überzeugung durch einen natürlichen kognitiven Mechanismus entsteht, macht sie nicht falsch oder unbegründet.`,
        support: `Sonst wären auch Wahrnehmung, Erinnerung und unser Glaube an andere Personen „entlarvt" – alle beruhen auf evolutionär entstandenen Mechanismen. Der Schluss von der Herkunft auf die Falschheit ist der genetische Fehlschluss.`,
      },
      {
        text: `P3: Ob ein Mechanismus im Fall Gottes in die Irre führt, kann man nur beurteilen, wenn man unabhängig weiß, ob Gott existiert.`,
        support: `HADD erzeugt Fehlalarme *und* Treffer. Um zu wissen, dass „Gott" ein Fehlalarm ist, muss man bereits wissen, dass es keinen Gott gibt – das Argument setzt dann voraus, was es zeigen will.`,
        sources: [
          { kind: 'fachliteratur', author: 'Michael J. Murray', work: 'Scientific explanations of religion and the justification of religious belief, in: J. Schloss, M. J. Murray (Hg.), The Believing Primate', year: '2009', status: 'paraphrase' },
        ],
      },
    ],
    conclusion: `Die KRW kann den Gottesglauben nicht entlarven, ohne die Frage nach Gott vorauszusetzen. Sie ist bestenfalls neutral – und sie passt gut zu der biblischen Erwartung einer natürlichen Gotteserkenntnis (Röm 1,19–20).`,
  },
  voices: [
    {
      person: 'justin-barrett',
      role: 'als Psychologe und Pionier der Kognitiven Religionswissenschaft',
      text: `Justin Barrett gehört zu den Gründergestalten der KRW und führte den Begriff der „hypersensiblen Akteurserkennung" (HADD) in die Religionsforschung ein. In „Why Would Anyone Believe in God?" (2004) zeigt er, dass Gottesglaube aus der normalen Arbeitsweise des menschlichen Geistes fast zwangsläufig entsteht. Als Christ zieht er daraus den umgekehrten Schluss wie Dawkins: Wenn Gott die Menschen erschaffen hat und will, dass sie ihn kennen, wäre es geradezu zu erwarten, dass er ihnen einen Geist gibt, der für ihn empfänglich ist. Die Natürlichkeit des Glaubens ist nach Barrett eher ein Argument *für* als gegen seine Vernünftigkeit – so wie die Natürlichkeit unseres Glaubens an andere Personen kein Grund ist, an ihnen zu zweifeln.`,
      sources: [
        { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Why Would Anyone Believe in God?', year: '2004', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Cognitive Science, Religion, and Theology: From Human Minds to Divine Minds', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als Religionsphilosoph (reformierte Erkenntnistheorie)',
      text: `Alvin Plantinga argumentiert, dass Gott den Menschen mit einem *sensus divinitatis* ausgestattet haben könnte – einer natürlichen Fähigkeit, die unter bestimmten Umständen (beim Anblick des Sternenhimmels, im Schuldbewusstsein, in Gefahr) spontan Gottesglauben hervorbringt. Ob ein so entstandener Glaube gerechtfertigt ist, hängt nach Plantinga davon ab, ob die Fähigkeit richtig funktioniert und auf Wahrheit ausgerichtet ist – also davon, ob Gott existiert. Die KRW beschreibe vielleicht gerade die Mechanismen dieses Gottessinns. Damit kann sie nach Plantinga die Rechtfertigung des Glaubens nicht untergraben, ohne die Gottesfrage schon atheistisch beantwortet zu haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Kirchenvater der natürlichen Gotteserkenntnis',
      text: `Athanasius schreibt in „Gegen die Heiden", dass der Mensch Gott auf zwei Wegen erkennen kann: durch die eigene Seele, die nach dem Bild des Logos geschaffen ist und ihn wie in einem Spiegel schauen kann, wenn sie rein ist; und durch die Schöpfung, deren Ordnung den Schöpfer verkündet wie die Musik den Musiker. Zugleich erklärt er die Entstehung des Götzendienstes: Die Seele wandte sich von Gott ab, den sinnlichen Dingen zu, und begann, Geschöpfe zu vergöttlichen. Natürliche Anlage und ihre Verzerrung – das ist bei Athanasius dasselbe Muster, das die KRW empirisch beschreibt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '3–9; 30–35', status: 'paraphrase' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel auf dem Areopag',
      text: `Paulus spricht in Athen nicht gegen die Religiosität der Griechen, sondern knüpft an sie an: Er habe einen Altar „dem unbekannten Gott" gefunden; Gott habe die Menschen geschaffen, „dass sie ihn suchen sollten, ob sie ihn doch fühlen und finden möchten" (Apg 17,23–27). Er zitiert sogar griechische Dichter. Im Römerbrief erklärt er, dass die natürliche Gotteserkenntnis vorhanden ist, aber unterdrückt und zu Götzenbildern verzerrt wird (Röm 1,18–23). Die menschliche Neigung zur Religion ist für Paulus also kein Gegenargument, sondern der Anknüpfungspunkt für das Evangelium.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,22–31', status: 'paraphrase' },
        { kind: 'bibel', work: 'Römer', ref: '1,18–23', status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph der Sehnsucht nach Gott',
      text: `Augustinus beginnt seine „Bekenntnisse" mit der Beobachtung, dass der Mensch Gott loben *will* – und erklärt diese Sehnsucht damit, dass Gott uns auf sich hin geschaffen hat. Eine natürliche Neigung zu Gott ist für ihn kein Zufallsprodukt, sondern ein Hinweis auf unsere Bestimmung. C. S. Lewis hat diesen Gedanken aufgegriffen: Wenn wir ein Verlangen in uns finden, das keine Erfahrung dieser Welt stillen kann, ist die wahrscheinlichste Erklärung, dass wir für eine andere Welt geschaffen sind.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'I,1', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch III, Kap. 10', year: '1952', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hadd-fehlalarm',
      objection: `Unser Gehirn ist auf Fehlalarme gepolt: Lieber zehnmal einen Tiger im Gebüsch vermuten als einmal zu wenig. Götter sind Fehlalarme unseres überempfindlichen Akteursdetektors.`,
      objectionBy: 'Stewart Guthrie',
      targetsPremise: 2,
      answer: `Ein Akteursdetektor produziert Fehlalarme – aber auch Treffer: Manchmal ist wirklich ein Tiger im Gebüsch. Aus dem Mechanismus allein kann man nicht ablesen, welcher Fall vorliegt. Außerdem kommen Menschen selten durch raschelnde Büsche zum Gottesglauben, sondern durch Nachdenken über die Existenz der Welt, ihre Ordnung, das Gewissen. Und interessanterweise hat der Christ Justin Barrett den Begriff HADD in die Religionsforschung eingeführt – er sieht darin keine Widerlegung.`,
      detail: `Neuere Experimente zur HADD (u. a. aus der Gruppe um Michiel van Elk) fanden wenig Belege dafür, dass die Akteurserkennung in bedrohlichen Situationen übernatürliche Überzeugungen vorhersagt. Wichtiger scheinen kulturelles Lernen und glaubwürdige Vorbilder zu sein (Lanman & Buhrmester 2017).`,
      questionsBack: [`Woran erkennst du, ob ein bestimmtes Signal des Akteursdetektors ein Fehlalarm oder ein Treffer ist – ohne die Antwort schon vorauszusetzen?`],
      followUps: [
        {
          id: 'animismus-ursprung',
          objection: `Gerade die Übertragung von Absichten auf Unbelebtes – Wind, Donner, Flüsse – war der Ursprung der Götter. Euer Gott ist nur der letzte Rest dieses Animismus.`,
          objectionBy: 'Stewart Guthrie',
          answer: `Die Bibel lehnt genau diese Vergöttlichung der Natur ab: Genesis 1 stellt Sonne und Mond als bloße „Lichter" dar, die Gott gemacht hat – eine bewusste Entgöttlichung der Natur. Und Paulus beschreibt die Verehrung von Geschöpfen als *Verzerrung* einer ursprünglichen Gotteserkenntnis (Röm 1,23). Dass Menschen Absichten in die Natur projizieren, passt also zur Bibel. Der christliche Gottesglaube beruht aber nicht auf Donner, sondern auf Gründen: warum es überhaupt etwas gibt, warum die Welt geordnet ist, und auf der Geschichte Jesu.`,
          detail: `Zur These, Religion habe sich vom Animismus zum Monotheismus entwickelt, siehe A5, ‚weitere-religionen/religion-aus-animismus'.`,
          followUps: [
            {
              id: 'minimal-kontraintuitiv',
              objection: `Euer Gott ist ein typisches „minimal kontraintuitives" Konzept: eine Person ohne Körper, die alles weiß. Solche Konzepte prägen sich einfach besonders gut ein – deshalb überleben sie.`,
              objectionBy: 'Pascal Boyer',
              answer: `Erstens ist die Evidenz für den Gedächtnisvorteil solcher Konzepte uneinheitlich. Zweitens sagt Einprägsamkeit nichts über Wahrheit: Die Quantenverschränkung ist hochgradig kontraintuitiv und trotzdem wahr. Und drittens ist der Gott der klassischen Theologie – ewig, einfach, notwendig, Ursprung allen Seins – gerade nicht „minimal", sondern maximal kontraintuitiv; er ist mühsam durchdacht, nicht leicht gemerkt.`,
              followUps: [
                {
                  id: 'theologische-korrektheit',
                  objection: `Genau! Barrett selbst hat „theologische Korrektheit" gezeigt: Gläubige sagen „Gott ist allgegenwärtig", denken aber intuitiv an eine Person, die Gebete nacheinander anhört. Euer offizieller Gott ist nur Fassade über einem kindlichen Gottesbild.`,
                  objectionBy: 'Pascal Boyer',
                  answer: `Barrett und Keil zeigten, dass unser spontanes Denken hinter unserem reflektierten Wissen zurückbleibt. Das gilt aber überall: Auch Physiker denken intuitiv, ein Körper brauche eine ständige Kraft, um sich zu bewegen – obwohl sie Newton kennen. Niemand schließt daraus, die Newtonsche Physik sei eine Fassade. Reflektiertes Denken korrigiert die Intuition. Dass die Theologie unsere kindlichen Gottesbilder übersteigt, spricht für ihre Sorgfalt, nicht gegen sie.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'J. L. Barrett, F. C. Keil', work: 'Conceptualizing a nonnatural entity: Anthropomorphism in God concepts', ref: 'Cognitive Psychology 31 (1996), 219–247', year: '1996', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'erklaerung-macht-gott-ueberfluessig',
          objection: `Wenn wir eine vollständige natürliche Erklärung dafür haben, warum Menschen an Gott glauben, ist Gott als Erklärung überflüssig.`,
          objectionBy: 'Daniel Dennett',
          targetsPremise: 3,
          answer: `Eine Erklärung des Glaubens ist keine Wegerklärung seines Gegenstands. Die Wahrnehmungspsychologie erklärt vollständig, wie wir zu Überzeugungen über Tische und Bäume kommen – trotzdem sind Tische und Bäume nicht überflüssig. John Lennox benutzt das Bild eines Autos: Wer den Verbrennungsmotor vollständig erklärt, hat Henry Ford nicht überflüssig gemacht. Mechanismus und Urheber sind keine Konkurrenten.`,
          followUps: [
            {
              id: 'kein-kausalkontakt',
              objection: `Bei Tischen gibt es einen kausalen Kontakt: Der Tisch verursacht meine Wahrnehmung. Beim Gottesglauben nicht – der Mechanismus würde denselben Glauben erzeugen, ob Gott existiert oder nicht.`,
              objectionBy: 'Daniel Dennett',
              targetsPremise: 3,
              answer: `Das setzt voraus, dass Gott nicht der Urheber dieser Mechanismen ist. Wenn Gott existiert und die Welt samt ihren Naturprozessen geschaffen hat, dann steht er am Anfang der ganzen Kausalkette – auch der, die zu unserem Gottessinn führt; er wirkt durch Zweitursachen, so wie er den Regen durch Meteorologie schickt. „Der Mechanismus wäre ohne Gott derselbe" setzt also voraus, dass es keinen Gott gibt. Das Argument ist zirkulär.`,
              followUps: [
                {
                  id: 'immun-gegen-evidenz',
                  objection: `Dann ist deine Position gegen jede Evidenz immun – alles kann „Gottes Werkzeug" sein.`,
                  objectionBy: 'Daniel Dennett',
                  answer: `Nein. Ich behaupte nur, dass die KRW neutral ist – sie entscheidet die Gottesfrage nicht. Ob Gott existiert, prüfe ich an unabhängigen Gründen: am Anfang des Universums, an der Feinabstimmung, an der Grundlage der Moral, an der Auferstehung Jesu. Wenn diese Gründe scheitern würden, wäre mein Glaube in Schwierigkeiten – nicht wegen der KRW, sondern wegen der Gründe. Genau so sollte es sein.`,
                  detail: `Weiterführend: A8, ‚atheismus/keine-beweise-fuer-gott'; A8, ‚gottesbeweise/kalam-widerlegt'; A11, ‚feinabstimmung/multiversum'.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'religionsvielfalt',
      objection: `Wenn Gott uns einen Gottessinn gegeben hätte, warum glauben Menschen dann an Tausende verschiedene Götter, Geister und Ahnen? Der Mechanismus produziert offensichtlich beliebige Ergebnisse.`,
      objectionBy: 'Scott Atran',
      targetsPremise: 2,
      answer: `Eine Anlage legt nicht jeden Inhalt fest: Alle Menschen haben die Sprachfähigkeit, aber es gibt Tausende Sprachen – deshalb ist Sprache keine Illusion. Paulus beschreibt genau dieses Muster: Die natürliche Gotteserkenntnis ist da, wird aber verdrängt und zu Götzenbildern verzerrt (Röm 1,21–23). Deshalb braucht es Offenbarung (Hebr 1,1–2). Auffällig ist zudem, wie viele Kulturen hinter ihren vielen Geistern einen höchsten Gott kennen.`,
      followUps: [
        {
          id: 'theologische-rettung',
          objection: `Das ist ein theologischer Rettungsversuch: Du deutest die Vielfalt einfach als „Verzerrung", weil sie dir sonst nicht ins Bild passt.`,
          objectionBy: 'Pascal Boyer',
          answer: `Paulus hat das im 1. Jahrhundert geschrieben, nicht nach der KRW – die Deutung ist also nicht nachträglich erfunden. Und sie passt zu den Daten: universale Religiosität, große Vielfalt, ein moralisches Gewissen. Der Atheismus erklärt dieselben Daten ebenfalls – also sind sie bestenfalls neutral. Das ist mein Punkt: Die KRW entscheidet die Gottesfrage nicht.`,
          followUps: [
            {
              id: 'alle-gleicher-gott',
              objection: `Eine bessere Vorhersage wäre: Wenn es Gott gäbe, würden alle Kulturen denselben Gott erkennen.`,
              objectionBy: 'Steven Pinker',
              answer: `Nur wenn Gott eine erzwungene Einheitlichkeit wollte. Nach christlichem Verständnis sucht Gott eine freie Beziehung: Er hat die Menschen geschaffen, „dass sie ihn suchen sollten, ob sie ihn fühlen und finden möchten" (Apg 17,27), und er offenbart sich in der Geschichte – in Israel und in Christus. Eine natürliche Ahnung plus geschichtliche Offenbarung ist genau das, was man dann erwarten würde.`,
              detail: `Zur Frage, warum Gott sich nicht eindeutiger zeigt: A8, ‚gottesbeweise/goettliche-verborgenheit'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'evolution-nicht-wahrheit',
      objection: `Die Evolution hat uns auf Überleben getrimmt, nicht auf Wahrheit. Religiöse Intuitionen sind adaptive Fiktionen.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 1,
      answer: `Wenn die Evolution uns nur auf Überleben und nicht auf Wahrheit getrimmt hat, gilt das für unser gesamtes Denkvermögen – auch für die Überlegungen, die zum Atheismus und zur Evolutionstheorie führen. Wer sagt, unsere Vernunft sei im Allgemeinen verlässlich, nur bei Gott nicht, braucht dafür einen unabhängigen Grund. Alvin Plantinga hat daraus ein ganzes Argument gemacht: Der Naturalismus untergräbt das Vertrauen in die eigene Vernunft.`,
      detail: `Siehe A8, ‚naturalismus/vernunft-durch-evolution'.`,
      followUps: [
        {
          id: 'vernunft-mittelgross',
          objection: `Unsere Vernunft ist verlässlich für mittelgroße Objekte und das Sozialleben, aber nicht für metaphysische Spekulation. Deshalb brauchen wir die Wissenschaft als Korrektiv.`,
          objectionBy: 'Steven Pinker',
          answer: `Einverstanden, dass Intuitionen kritisch geprüft werden müssen. Aber dann ist der Atheismus als metaphysische Schlussfolgerung genauso verdächtig wie der Theismus. Und die Wissenschaft selbst verlässt sich auf abstraktes Denken weit jenseits der Savanne – Quantenfeldtheorie, Kosmologie, höhere Mathematik. Wenn unser Geist das kann, ist nicht einzusehen, warum er die Frage nach dem Ursprung des Seins nicht vernünftig bedenken könnte.`,
          followUps: [
            {
              id: 'wissenschaft-korrigiert',
              objection: `Die Wissenschaft korrigiert sich selbst – Religion nicht.`,
              objectionBy: 'Steven Pinker',
              answer: `Auch die Theologie hat sich durch Argumente und Konzilien geklärt und präzisiert – das Konzil von Nizäa war ein jahrzehntelanger, argumentativ geführter Streit. Aber selbst wenn man das anders sieht: Die Frage war, ob unser Denken metaphysische Wahrheiten erreichen kann. Wenn nicht, dann weder der Theismus noch der Naturalismus. Wenn ja, dann müssen wir die Argumente prüfen – nicht die Psychologie derer, die sie vorbringen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'barrett-befangen',
      objection: `Barrett ist Christ – natürlich deutet er die Daten glaubensfreundlich.`,
      objectionBy: 'Michael Shermer',
      answer: `Das ist ein Argument gegen die Person, nicht gegen die Sache. Barretts empirische Arbeiten werden von nicht-religiösen Kollegen anerkannt; HADD ist ein Standardbegriff des Fachs. Und der philosophische Punkt – dass die Herkunft einer Überzeugung nicht über ihre Wahrheit entscheidet – gilt unabhängig davon, wer ihn vorbringt. Viele Forscher der KRW arbeiten bewusst methodisch agnostisch: Sie erklären Glauben, ohne über Gott zu urteilen.`,
      followUps: [
        {
          id: 'natuerlich-unnatuerlich',
          objection: `Und wenn Glaube „natürlich" ist, ist Atheismus dann „unnatürlich"? Soll das etwa ein Argument sein?`,
          objectionBy: 'Michael Shermer',
          answer: `Nein – Natürlichkeit beweist nichts, weder für den Glauben noch für den Unglauben. Ich sage nicht: „Natürlich, also wahr." Ich sage nur: Die KRW passt zu dem, was die Bibel über den Menschen erwartet, und sie widerlegt den Glauben nicht. Über Wahrheit entscheiden andere Gründe.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woran erkennst du, ob der Akteursdetektor im Fall Gottes einen Fehlalarm oder einen Treffer meldet – ohne die Antwort vorauszusetzen?`,
    `Wenn kognitive Erklärbarkeit eine Überzeugung entlarvt – entlarvt das dann auch deinen Glauben an andere Personen?`,
    `Macht die vollständige Erklärung eines Automotors Henry Ford überflüssig?`,
    `Wenn die Evolution uns nur auf Überleben getrimmt hat – warum sollte ich dann deinen Argumenten trauen?`,
    `Wusstest du, dass der Begriff HADD von einem gläubigen Christen in die Religionsforschung eingeführt wurde?`,
  ],
  avoid: [
    `Die Befunde der KRW bestreiten – sie sind solide und passen ohnehin zur Bibel.`,
    `„Weil Religion natürlich ist, ist sie wahr." – Das ist derselbe Fehlschluss in umgekehrter Richtung.`,
    `Pauschal von einem „Gottesmodul" oder „Gottes-Gen" sprechen, das Gott eingebaut habe – beides ist wissenschaftlich nicht haltbar.`,
  ],
  concessions: [
    `Menschen haben kognitive Neigungen (Akteurserkennung, Zweckdenken, intuitiver Dualismus), die religiösen Glauben leicht machen und auch zu falschen religiösen Vorstellungen führen.`,
    `Die KRW kann viele Merkmale religiöser Vorstellungen – auch christlicher Volksfrömmigkeit – natürlich erklären.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Why Would Anyone Believe in God?', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Justin L. Barrett', work: 'Born Believers: The Science of Children\'s Religious Belief', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Jeffrey Schloss, Michael J. Murray (Hg.)', work: 'The Believing Primate', year: '2009', status: 'paraphrase' },
    { kind: 'gegner', author: 'Pascal Boyer', work: 'Religion Explained', year: '2001', status: 'paraphrase', note: 'Die einflussreichste Darstellung der Gegenposition.' },
  ],
  difficulty: 3,
  tags: ['Kognitive Religionswissenschaft', 'HADD', 'Boyer', 'Barrett', 'genetischer Fehlschluss', 'sensus divinitatis'],
  related: [
    'kognitive-religionswissenschaft/kinder-indoktrination',
    'kognitive-religionswissenschaft/gottes-gen',
    'naturalismus/vernunft-durch-evolution',
    'religionskritik/projektion-feuerbach',
    'religionskritik/religion-als-virus',
    'weitere-religionen/religion-aus-animismus',
    'gottesbeweise/goettliche-verborgenheit',
  ],
};

export default claim;
