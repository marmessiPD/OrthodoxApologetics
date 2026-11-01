import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'finsteres-mittelalter-flache-erde',
  title: `„Im finsteren Mittelalter glaubten Christen an die flache Erde."`,
  proponents: [
    { name: 'Washington Irving', role: 'Schriftsteller (†1859)', work: 'A History of the Life and Voyages of Christopher Columbus (1828)' },
    { name: 'John William Draper / Andrew Dickson White', role: 'Begründer der Konfliktthese', work: 'History of the Conflict between Religion and Science (1874); A History of the Warfare of Science with Theology (1896)' },
    { name: 'Charles Freeman', role: 'Historiker', work: 'The Closing of the Western Mind (2002)' },
    { name: 'Carl Sagan', role: 'Astronom', work: 'Cosmos (1980)' },
  ],
  steelman: `Als das Christentum Europa beherrschte, versank der Kontinent für tausend Jahre in Dunkelheit. Die Kirche ersetzte das Wissen der Griechen durch biblischen Wortglauben: Die Erde wurde wieder flach – die Bibel spricht von den „vier Enden der Erde" und einem festen Himmelsgewölbe –, Laktanz verspottete die Vorstellung einer Kugel, und Kosmas Indikopleustes entwarf eine Welt in Form der Stiftshütte. Kolumbus musste sich gegen Theologen durchsetzen, die fürchteten, er werde vom Rand der Welt fallen. Erst die Renaissance und die Aufklärung befreiten die Vernunft. Ohne diese verlorenen Jahrhunderte wären wir heute viel weiter.`,
  biblical: {
    summary: `Die Bibel verwendet für die Natur die Bildsprache ihrer Zeit: „die vier Enden der Erde" (Jes 11,12; Offb 7,1), das „Gewölbe" des Himmels (Gen 1,6), der „Kreis der Erde" (Jes 40,22), die Erde, die Gott „an nichts" hängt (Hiob 26,7). Das sind poetische und anschauliche Ausdrücke, keine Lehrsätze der Kosmologie – in beide Richtungen: Weder lehrt die Bibel eine flache Erde, noch nimmt sie die Kugelgestalt wissenschaftlich vorweg. Johannes Chrysostomus spricht von der „Herablassung" (*synkatabasis*) Gottes, der in menschlicher Sprache zu Menschen redet.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '40,22', quote: `Er sitzt über dem Kreis der Erde, und die darauf wohnen, sind wie Heuschrecken;`, translation: 'Luther 1912', status: 'verbatim', note: 'Poetisches Bild – nicht als „wissenschaftliches Vorwissen" überinterpretieren.' },
      { kind: 'bibel', work: 'Hiob', ref: '26,7', quote: `Er breitet aus die Mitternacht nirgend an und hängt die Erde an nichts.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '7,1', quote: `Vier Engel stehen an den vier Ecken der Erde und halten die vier Winde fest.`, status: 'paraphrase', note: 'Bildsprache für die Himmelsrichtungen, wie „in alle vier Himmelsrichtungen".' },
    ],
  },
  church: {
    summary: `Die Kirche hat nie ein Dogma über die Gestalt der Erde aufgestellt. Die Väter der alexandrinischen Tradition lasen die Schrift wörtlich und geistlich und benutzten selbstverständlich das Wissen ihrer Zeit; Basilius ließ in seinem Sechstagewerk astronomische Fragen ausdrücklich offen, Augustinus warnte Christen, sich mit naturkundlichem Unsinn lächerlich zu machen. Dass es Ausnahmen wie Laktanz und Kosmas gab, gehört ehrlich zur Geschichte – sie waren aber Außenseiter, und Kosmas' alexandrinischer Zeitgenosse Johannes Philoponos widersprach solchen Weltbildern ausdrücklich.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius von Caesarea', work: 'Homilien zum Sechstagewerk (Hexaemeron)', ref: 'I; IX', year: 'ca. 370', quote: `Fragen nach Gestalt und Lage der Erde seien für die Erbauung nicht entscheidend; Mose habe sie bewusst nicht behandelt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zur Genesis', year: 'ca. 388', quote: `Die Schrift spricht aus Herablassung (synkatabasis) in einer dem Menschen verständlichen Sprache.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Wissenschaftshistoriker sind sich heute weitgehend einig, dass die gebildete Welt des Mittelalters die Kugelgestalt der Erde kannte. Jeffrey Burton Russell (1991) und der agnostische Paläontologe Stephen Jay Gould haben gezeigt, dass der „Flache-Erde-Mythos" im 19. Jahrhundert entstand – durch Washington Irvings romanhafte Kolumbus-Biografie (1828), Antoine-Jean Letronne (1834) und die Konfliktthese von Draper und White. Auch das Bild vom „finsteren Mittelalter" ist in der Mediävistik weitgehend aufgegeben: Universitäten, Naturphilosophie (Grosseteste, Buridan, Oresme) und technische Neuerungen entstanden in einer christlich geprägten Kultur. Strittig bleibt, wie groß der Beitrag des Christentums zur Entstehung der neuzeitlichen Wissenschaft war (Stark, Jaki, Harrison vs. Kritiker).`,
    detail: `**Belege für die Kugelgestalt im christlichen Mittelalter:**
- **Beda Venerabilis** (De temporum ratione 32, 725): Die Erde sei rund wie ein Ball, nicht wie ein Schild; daraus erklärt er die ungleichen Tageslängen.
- **Johannes de Sacrobosco**, „De sphaera" (um 1230) – jahrhundertelang Standardlehrbuch an den Universitäten.
- **Thomas von Aquin** benutzt „dass die Erde rund ist" als Schulbeispiel für einen Satz, den Astronom und Naturphilosoph auf verschiedene Weise beweisen.
- **Dante**, Göttliche Komödie (um 1320): Kugelwelt mit Antipoden.
- **Nikolaus von Oresme** (Le Livre du ciel et du monde, 1377) diskutiert sogar die tägliche Drehung der Erde.

**Ausnahmen:** Laktanz (Divinae Institutiones III,24, frühes 4. Jh.) verspottete Kugelgestalt und Antipoden; Kosmas Indikopleustes, ein alexandrinischer Kaufmann, beschrieb um 550 die Welt in Form der Stiftshütte. Beide blieben ohne nennenswerten Einfluss; Kosmas wurde erst 1706 ins Lateinische übersetzt. Kopernikus spottete in der Vorrede seines Hauptwerks über Laktanz' „kindische" Äußerungen zur Erdgestalt.

**Kolumbus:** Der Streit ging um die Größe der Erde. Kolumbus unterschätzte den Abstand nach Asien erheblich; seine Kritiker hatten recht – er überlebte nur, weil Amerika dazwischen lag.`,
    sources: [
      { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth. Columbus and Modern Historians', year: '1991', quote: `Mit sehr wenigen Ausnahmen glaubte kein Gebildeter im Mittelalter an eine flache Erde; der Mythos entstand im 19. Jahrhundert.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Stephen Jay Gould', work: 'The Late Birth of a Flat Earth. In: Dinosaur in a Haystack', year: '1995', quote: `Der Mythos der mittelalterlichen flachen Erde sei eine Erfindung des 19. Jahrhunderts im Dienst der Konfliktthese.`, status: 'paraphrase', note: 'Gould war Agnostiker.' },
      { kind: 'fachliteratur', author: 'Edward Grant', work: 'The Foundations of Modern Science in the Middle Ages', year: '1996', quote: `Die mittelalterliche Universität und Naturphilosophie schufen wesentliche Voraussetzungen der neuzeitlichen Wissenschaft.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Washington Irving', work: 'A History of the Life and Voyages of Christopher Columbus', year: '1828', quote: `Romanhafte Darstellung, in der Kolumbus vor einem Gremium in Salamanca gegen geistliche Gegner der Kugelgestalt auftritt.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das ist ein Mythos aus dem 19. Jahrhundert. Gebildete Christen des Mittelalters wussten, dass die Erde eine Kugel ist: Beda schrieb das um 725, das Universitätslehrbuch „De sphaera" um 1230 lehrte es, und Thomas von Aquin benutzte die Kugelgestalt als Schulbeispiel. Beim Streit um Kolumbus ging es um die Größe der Erde – und da hatten seine Kritiker recht. Der Mythos stammt aus Washington Irvings Roman-Biografie von 1828; sogar der Agnostiker Stephen Jay Gould hat ihn widerlegt. Es gab Ausnahmen wie Laktanz – aber sie waren Außenseiter.`,
  keyPoints: [
    `**Kugelgestalt war Standardwissen:** Beda (725), Sacrobosco (um 1230), Thomas von Aquin, Dante.`,
    `**Kolumbus:** Streit um die Entfernung, nicht um die Form – seine Kritiker hatten recht.`,
    `**Herkunft des Mythos:** Irving (1828), Letronne (1834), Draper (1874), White (1896); widerlegt von Russell (1991) und Gould (1995).`,
    `**Ehrliche Ausnahmen:** Laktanz und der Alexandriner Kosmas Indikopleustes – ohne großen Einfluss; Kopernikus spottete über Laktanz.`,
    `**Kein „finsteres" Mittelalter:** Universitäten, Brille, mechanische Uhr, Optik (Grosseteste), Impetustheorie (Buridan), Oresmes Überlegungen zur Erddrehung.`,
    `**Die antike Wissenschaft wurde von Christen bewahrt:** Byzantinische und klösterliche Abschreiber, syrische Christen als Übersetzer ins Arabische.`,
  ],
  voices: [
    {
      person: 'jeffrey-burton-russell',
      role: 'als Mediävist',
      text: `Russell ging der Frage nach, woher die verbreitete Vorstellung stammt, mittelalterliche Christen hätten an eine flache Erde geglaubt. Er fand fast keine mittelalterlichen Belege – nur Laktanz, Kosmas und wenige Randfiguren –, dafür aber eine klare Spur im 19. Jahrhundert: Irvings romanhafte Kolumbus-Biografie, französische Gelehrte wie Letronne und vor allem die Konfliktliteratur von Draper und White, die das Bild in Schulbücher brachte. Sein Ergebnis: Der „Irrtum der flachen Erde" ist ein moderner Irrtum über das Mittelalter.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth', year: '1991', quote: `Der Mythos der flachen Erde als Produkt der Geschichtsschreibung des 19. Jahrhunderts.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'james-hannam',
      role: 'als Wissenschaftshistoriker',
      text: `Hannam zeigt in „God's Philosophers", dass das Mittelalter eine Epoche bedeutender Naturphilosophie war: Die Universitäten institutionalisierten das Studium der Natur; Denker wie Robert Grosseteste, Jean Buridan und Nikolaus von Oresme entwickelten Ansätze zu Optik, Bewegungslehre und mathematischer Darstellung, an die Galilei später anknüpfen konnte. Der Begriff „finsteres Mittelalter" sagt nach Hannam mehr über die Vorurteile der Renaissance und Aufklärung als über das Mittelalter selbst.`,
      sources: [
        { kind: 'fachliteratur', author: 'James Hannam', work: 'God\'s Philosophers. How the Medieval World Laid the Foundations of Modern Science (US-Titel: The Genesis of Science)', year: '2009', quote: `Die mittelalterliche Naturphilosophie als Fundament der neuzeitlichen Wissenschaft.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Lehrer der mittelalterlichen Universität',
      text: `Wie selbstverständlich die Kugelgestalt der Erde im 13. Jahrhundert war, zeigt eine beiläufige Bemerkung des Thomas von Aquin gleich am Anfang seiner „Summa theologiae": Um zu erklären, dass verschiedene Wissenschaften dieselbe Wahrheit auf verschiedenen Wegen erkennen können, nimmt er als Beispiel den Satz, dass die Erde rund ist – der Astronom beweist ihn mathematisch, der Naturphilosoph physikalisch. Man wählt als Schulbeispiel nur, was jeder Student kennt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 1, a. 1, ad 2', year: 'ca. 1265–1273', quote: `Dieselbe Schlussfolgerung beweisen der Astronom und der Naturphilosoph, zum Beispiel, dass die Erde rund ist.`, original: `Eandem enim conclusionem demonstrat astrologus et naturalis, puta quod terra est rotunda.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark argumentiert, dass die neuzeitliche Wissenschaft nicht trotz, sondern im Rahmen des christlichen Glaubens entstand: Die Überzeugung, dass ein vernünftiger Gott eine geordnete, erforschbare Welt geschaffen hat, gab der Naturforschung ihren Sinn. Er hält das Bild vom „finsteren Mittelalter" für eine Erfindung von Humanisten und Aufklärern, die sich selbst als Bringer des Lichts darstellten. Seine These ist in der Forschung diskutiert und teilweise umstritten – unbestritten ist, dass die Flache-Erde-Erzählung nicht hält.`,
      sources: [
        { kind: 'fachliteratur', author: 'Rodney Stark', work: 'For the Glory of God', year: '2003', quote: `Die christliche Theologie als Voraussetzung der wissenschaftlichen Revolution; Kritik am Mythos des „finsteren Mittelalters".`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'kolumbus-flache-erde',
      objection: `Jeder weiß doch: Kolumbus musste die Kirchenmänner überzeugen, dass die Erde rund ist und man nicht vom Rand fällt.`,
      objectionBy: 'Washington Irving (populäre Tradition)',
      answer: `Diese Szene stammt aus Washington Irvings romanhafter Kolumbus-Biografie von 1828. Der wirkliche Streit ging um die Größe der Erde: Kolumbus hielt Asien für viel näher, als es ist. Seine gelehrten Kritiker, die die Erde als Kugel kannten, rechneten richtig – Kolumbus hätte die Reise nicht überlebt, wenn nicht Amerika im Weg gelegen hätte.`,
      followUps: [
        {
          id: 'woher-mythos',
          objection: `Warum sollte sich so ein Mythos dann halten, wenn er so leicht zu widerlegen ist?`,
          objectionBy: 'Populäre Darstellung',
          answer: `Weil er eine Erzählung bedient: die vom Fortschritt gegen die Religion. Im 19. Jahrhundert, mitten in den Debatten um Darwin und den Einfluss der Kirchen, verbreiteten Draper und White das Bild in populären Büchern; von dort kam es in Schulbücher. Jeffrey Burton Russell hat diesen Weg nachgezeichnet, und der Agnostiker Stephen Jay Gould kam zum selben Ergebnis.`,
        },
      ],
    },
    {
      id: 'laktanz-kosmas',
      objection: `Laktanz hat die Kugelgestalt verspottet, und Kosmas Indikopleustes hat eine flache, kastenförmige Welt gezeichnet. Das waren angesehene Christen.`,
      objectionBy: 'Andrew Dickson White',
      answer: `Das stimmt, und ich gebe es offen zu – es gab christliche Autoren mit falschen Vorstellungen. Aber sie waren Ausnahmen: Laktanz' Kosmologie fand kaum Nachfolger, und Kopernikus spottete in der Vorrede seines Hauptwerks über dessen „kindische" Äußerungen zur Erdgestalt. Kosmas' Werk wurde im Westen erst 1706 ins Lateinische übersetzt. Den Hauptstrom bilden Beda, Sacrobosco und Thomas von Aquin.`,
      sources: [
        { kind: 'kirchenvater', author: 'Laktanz', work: 'Divinae Institutiones', ref: 'III,24', year: 'frühes 4. Jh.', quote: `Spott über die Vorstellung von Antipoden, bei denen Menschen mit den Füßen nach oben gingen.`, status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Nikolaus Kopernikus', work: 'De revolutionibus, Widmungsvorrede', year: '1543', quote: `Laktanz, sonst ein bedeutender Schriftsteller, aber kein Mathematiker, rede recht kindisch über die Gestalt der Erde.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kosmas-alexandriner',
          objection: `Kosmas war ausgerechnet ein Alexandriner – aus eurer koptischen Tradition!`,
          objectionBy: 'Andrew Dickson White',
          answer: `Kosmas war ein Kaufmann aus Alexandrien, dessen Kosmologie wohl von der antiochenisch-ostsyrischen Auslegung beeinflusst war. Und es war gerade ein alexandrinischer Zeitgenosse, der christliche Philosoph Johannes Philoponos, der in seiner Schrift über die Erschaffung der Welt solchen buchstäblichen Weltbildern widersprach und die Kugelgestalt verteidigte. Alexandrien zeigt also beides – und die gelehrte Tradition stand auf der richtigen Seite.`,
        },
      ],
    },
    {
      id: 'finsteres-mittelalter',
      objection: `Ob flach oder rund – das Christentum hat Europa tausend Jahre in Dunkelheit gestürzt. Die Vernunft wurde erst in der Renaissance wiedergeboren.`,
      objectionBy: 'Charles Freeman',
      answer: `Der Zusammenbruch des Weströmischen Reiches durch Invasionen, nicht die Kirche, führte zu einem Rückgang von Städten und Schriftkultur – und die Klöster bewahrten, was blieb. Das Hoch- und Spätmittelalter brachte die Universitäten hervor, die Brille, die mechanische Uhr, Grossetestes Optik, Buridans Impetustheorie und Oresmes Überlegungen zur Erddrehung. Historiker wie Edward Grant und James Hannam sehen darin das Fundament der wissenschaftlichen Revolution.`,
      followUps: [
        {
          id: 'islam-bewahrte',
          objection: `Die antike Wissenschaft hat die islamische Welt bewahrt, nicht die Christen.`,
          objectionBy: 'Charles Freeman',
          answer: `Die Leistungen der arabisch-islamischen Wissenschaft sind groß, und das sage ich gern. Aber viele der Übersetzer, die griechische Werke ins Arabische brachten, waren Christen – etwa Hunain ibn Ishaq, ein Christ der Kirche des Ostens, und zahlreiche syrische Gelehrte. Und die griechischen Originale überlebten vor allem in den Bibliotheken und Klöstern des christlichen Byzanz. Die Bewahrung war eine gemeinsame Leistung, in der Christen eine zentrale Rolle spielten.`,
        },
        {
          id: 'sagan-zeitlinie',
          objection: `Ohne die Kirche wären wir heute tausend Jahre weiter – vielleicht schon auf dem Mars.`,
          objectionBy: 'Carl Sagan',
          answer: `Das ist eine Spekulation, die sich nicht prüfen lässt. Die griechische Wissenschaft erreichte ihren Höhepunkt im 3. und 2. Jahrhundert v. Chr. und stagnierte danach – lange vor der Christianisierung; auch das Römische Reich brachte wenig theoretische Naturwissenschaft hervor. Die interessantere Frage ist, warum die neuzeitliche Wissenschaft gerade im christlichen Europa entstand. Viele Historiker sehen dafür Gründe im Glauben an einen vernünftigen Schöpfer.`,
        },
      ],
    },
    {
      id: 'bibel-flach',
      objection: `Die Bibel selbst lehrt eine flache Erde: vier Ecken der Erde, ein festes Himmelsgewölbe, ein Baum, den man von der ganzen Erde aus sieht (Dan 4).`,
      objectionBy: 'Populäre Religionskritik',
      answer: `Die Bibel spricht in der Bildsprache ihrer Umwelt – „vier Ecken" meint die Himmelsrichtungen, Daniels Baum ist ein Traumbild. Sie will keine Kosmologie lehren, so wenig wie wir mit „Sonnenaufgang" eine Astronomie vertreten. Darum hat die Kirche nie ein Dogma über die Gestalt der Erde aufgestellt, und mittelalterliche Christen konnten die Bibel lesen und zugleich die Erde als Kugel lehren.`,
      followUps: [
        {
          id: 'bibel-irrt',
          objection: `Dann gibst du zu, dass die Bibel wissenschaftlich falsche Vorstellungen enthält.`,
          objectionBy: 'Richard Dawkins',
          answer: `Ich gebe zu, dass die biblischen Autoren die anschaulichen Vorstellungen ihrer Zeit benutzten. Die Väter nannten das Gottes „Herablassung": Gott spricht so, dass Menschen ihn verstehen. Die Inspiration betrifft das, was die Schrift lehren will – wer Gott ist, wer der Mensch ist, wie wir gerettet werden –, nicht die Kosmologie ihrer Bilder. Genau so lasen auch Augustinus, Galilei und die alexandrinische Tradition die Schrift.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kannst du mir einen mittelalterlichen Universitätslehrer nennen, der eine flache Erde lehrte?`,
    `Worüber stritt Kolumbus tatsächlich mit seinen Kritikern – und wer hatte recht?`,
    `Woher stammt die Szene, in der Kolumbus die Theologen von der Kugelgestalt überzeugt?`,
    `Warum entstand die neuzeitliche Naturwissenschaft gerade im christlichen Europa?`,
  ],
  avoid: [
    `Jes 40,22 („Kreis der Erde") als Beweis wissenschaftlichen Vorwissens der Bibel ausgeben – das hebräische ḥûg ist mehrdeutig.`,
    `Laktanz und Kosmas verschweigen – ehrlich nennen und einordnen.`,
    `Das Mittelalter idealisieren – es gab auch Rückgang an Bildung, Gewalt und Aberglauben.`,
  ],
  concessions: [
    `Einzelne christliche Autoren (Laktanz, Kosmas Indikopleustes) vertraten eine flache Erde.`,
    `Nach dem Ende Westroms gingen Bildung und Schriftkultur im Westen zeitweise stark zurück.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Jeffrey Burton Russell', work: 'Inventing the Flat Earth', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'James Hannam', work: 'God\'s Philosophers', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Edward Grant', work: 'The Foundations of Modern Science in the Middle Ages', year: '1996', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David C. Lindberg', work: 'The Beginnings of Western Science', year: '1992 (2. Aufl. 2007)', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Flache Erde', 'Mittelalter', 'Kolumbus', 'Konfliktthese', 'Beda'],
  related: ['kirchengeschichte-mythen/galilei', 'kirchengeschichte-mythen/hypatia-bibliothek', 'christentum-gesellschaft/christentum-ohne-nutzen', 'genesis/vaeter-lasen-woertlich'],
};

export default claim;
