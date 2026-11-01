import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'trinitaet-unlogisch',
  title: `„1+1+1=3 – die Trinität ist unlogisch."`,
  proponents: [
    { name: 'Ahmed Deedat', role: 'Islamischer Apologet (1918–2005)', work: 'Vorträge und Broschüren gegen die Trinität' },
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: '„Concept of God in Major Religions"' },
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet', work: 'The Divine Reality (2016)' },
    { name: 'Dale Tuggy', role: 'Unitarischer Religionsphilosoph', work: 'Trinities-Podcast; What is the Trinity? (2017)' },
  ],
  steelman: `Die Logik ist universal: Wenn A Gott ist, B Gott ist und C Gott ist, und A nicht B ist, B nicht C und A nicht C, dann gibt es drei Götter – oder „ist Gott" heißt etwas anderes als Identität, und dann ist keine der Personen wirklich „der eine Gott". Christliche Theologen haben 1500 Jahre lang nach einer widerspruchsfreien Formulierung gesucht und am Ende das „Mysterium" ausgerufen – ein Eingeständnis, dass die Lehre nicht verständlich ist. Der Islam dagegen bietet einen klaren, vernünftigen Monotheismus, den jedes Kind versteht: „Er ist Allah, ein Einziger" (112:1). Eine wahre Offenbarung widerspricht nicht der Vernunft, die Gott selbst geschaffen hat.`,
  biblical: {
    summary: `Die Bibel lehrt beides, ohne es in eine Formel zu pressen: Es gibt nur einen Gott (Dtn 6,4; Jes 45,5; 1 Kor 8,4), und Vater, Sohn und Geist werden je als Gott bezeichnet und zugleich voneinander unterschieden (Joh 1,1; 17,5; 14,16–17; Mt 3,16–17). Die Trinitätslehre ist der Versuch, **alle** biblischen Aussagen gleichzeitig ernst zu nehmen – statt einige zu streichen (Unitarismus) oder die Personen zu vermischen (Modalismus). Gott übersteigt unser Begreifen (Jes 55,8–9; Röm 11,33), aber nicht so, dass er widersprüchlich wäre (1 Kor 14,33; Hebr 6,18).`,
    detail: `- **Einheit:** „Ich bin der HERR, und sonst keiner mehr; kein Gott ist außer mir" (Jes 45,5).
- **Unterscheidung:** Bei der Taufe Jesu spricht der Vater, der Sohn steht im Jordan, der Geist kommt herab (Mt 3,16–17). Jesus betet zum Vater um die Herrlichkeit, „die ich bei dir hatte, ehe die Welt war" (Joh 17,5).
- **Göttlichkeit:** Das Wort „war Gott" (Joh 1,1); der Geist erforscht „die Tiefen der Gottheit" (1 Kor 2,10).
Der logische Schlüssel liegt darin, dass „ein" und „drei" sich auf **verschiedene Hinsichten** beziehen: ein Wesen (*ousia*), drei Hypostasen. Der Satz vom Widerspruch verbietet nur, dass etwas **in derselben Hinsicht** zugleich eins und drei ist.`,
    sources: [
      { kind: 'bibel', work: 'Jesaja', ref: '45,5', quote: `Ich bin der HERR, und sonst keiner mehr; kein Gott ist außer mir.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '17,5', quote: `Und nun verkläre mich du, Vater, bei dir selbst mit der Klarheit, die ich bei dir hatte, ehe die Welt war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '3,16–17', quote: `Und da Jesus getauft war, stieg er bald herauf aus dem Wasser; und siehe, da tat sich der Himmel auf über ihm. Und Johannes sah den Geist Gottes gleich als eine Taube herabfahren und über ihn kommen. Und siehe, eine Stimme vom Himmel herab sprach: Dies ist mein lieber Sohn, an welchem ich Wohlgefallen habe.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben nie behauptet, Gott sei „eins und drei in derselben Hinsicht". Sie unterscheiden **Wesen** (Usia: was Gott ist) und **Hypostase** (wer Gott ist). Die Hypostasen unterscheiden sich allein durch ihre Ursprungsbeziehungen: Der Vater ist ungezeugt, der Sohn gezeugt, der Geist hervorgehend. Alles andere – Wesen, Wille, Macht, Wirken – ist eines. Die arabischen Väter (Yahya ibn Adi, Abu Ra'ita, Paulus al-Buschi) haben diese Unterscheidung gegenüber muslimischen Philosophen mit den Mitteln der aristotelischen Logik verteidigt.`,
    detail: `- **Gregor von Nazianz** (Rede 40,41): „Kaum denke ich an den Einen, so werde ich vom Glanz der Drei umstrahlt; kaum unterscheide ich die Drei, so werde ich zum Einen zurückgetragen."
- **Gregor von Nyssa** (*An Ablabius*): Drei Menschen sind drei, weil sie getrennt wirken; in Gott ist jedes Wirken eines – vom Vater durch den Sohn im Geist.
- **Yahya ibn Adi** verwendete u. a. die Analogie von Intellekt, Denkendem und Gedachtem (*ʿaql, ʿāqil, maʿqūl*): Wenn Gott sich selbst denkt, sind der Denkende, das Denken und das Gedachte ein und dasselbe Wesen und doch unterscheidbar.
- **Analogien mit Vorsicht:** Die Väter nutzten Sonne–Strahl–Wärme oder Quelle–Fluss–Strom, betonten aber, dass jedes Bild hinkt. Mysterium heißt bei ihnen: über der Vernunft, nicht gegen sie.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede 40 (Über die heilige Taufe)', ref: '40,41', year: '381', quote: `Kaum denke ich an den Einen, so werde ich vom Glanz der Drei umstrahlt; kaum unterscheide ich die Drei, so werde ich zum Einen zurückgetragen.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'An Ablabius: Dass es nicht drei Götter gibt', year: 'ca. 375–390', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Yahya ibn Adi', work: 'Abhandlungen über die Einheit und die Dreieinigkeit', year: '10. Jh.', status: 'paraphrase', note: 'Die Triade ʿaql – ʿāqil – maʿqūl ist in der Forschung zu Yahya ibn Adi gut belegt; genaue Fundstelle je nach Edition.' },
    ],
  },
  quickAnswer: `Ein Widerspruch entsteht nur, wenn etwas in derselben Hinsicht eins und drei ist. Wir sagen: ein Wesen, drei Personen – ein „Was", drei „Wer". Das übersteigt unsere Erfahrung, aber es widerspricht keiner Logik. Auch der Islam sagt, Allahs Eigenschaften seien „weder Er noch etwas anderes als Er" – auch das kann niemand restlos erklären, und doch nennt es niemand unlogisch.`,
  keyPoints: [
    `**Satz vom Widerspruch richtig angewandt:** Nicht „eins und drei in derselben Hinsicht", sondern ein Wesen und drei Hypostasen.`,
    `**1+1+1 ist das falsche Modell:** Die Personen sind keine Teile, die man addiert; jede ist das ganze göttliche Wesen. Wenn schon Rechnen, dann eher ∞ + ∞ + ∞ = ∞.`,
    `**„Ist Gott" bezeichnet die Natur, nicht die Identität:** „Der Sohn ist Gott" heißt „der Sohn hat das göttliche Wesen", nicht „der Sohn ist der Vater".`,
    `**Mysterium ≠ Widerspruch:** Etwas nicht vollständig begreifen heißt nicht, dass es unlogisch ist – sonst wäre auch Allahs Ewigkeit oder Allwissenheit „unlogisch".`,
    `**Der Islam kennt dieselbe Spannung:** ungeschaffene Rede Allahs; Eigenschaften „weder Er noch ein anderer als Er"; die Formel *bi-lā kaifa* („ohne zu fragen wie").`,
    `**Analogien illustrieren, beweisen nicht** – die Väter benannten ihre Grenzen selbst.`,
  ],
  argument: {
    name: 'Widerspruchsfreiheit der Trinität',
    summary: 'Die Trinität verstößt nicht gegen den Satz vom Widerspruch, weil „eins" und „drei" sich auf verschiedene Hinsichten beziehen.',
    premises: [
      { text: `P1: Ein logischer Widerspruch liegt nur vor, wenn etwas in derselben Hinsicht zugleich ist und nicht ist (Aristoteles, Metaphysik IV,3).`, support: `Das ist die klassische, von Muslimen und Christen gleichermaßen anerkannte Fassung des Satzes vom Widerspruch.` },
      { text: `P2: Die Trinitätslehre sagt: Gott ist eins hinsichtlich des Wesens und drei hinsichtlich der Hypostasen.`, support: `So formulieren es alle Väter und Konzilien; die koptische Liturgie spricht vom „einen Gott" in „drei Hypostasen".` },
      { text: `P3: Wesen und Hypostase sind verschiedene Hinsichten (Was-Frage vs. Wer-Frage).`, support: `Wir unterscheiden auch im Alltag zwischen „was" etwas ist (Natur) und „wer" es ist (Person). In der Trinität ist das Wesen numerisch eines, die Hypostasen unterscheiden sich nur durch ihre Ursprungsbeziehungen.` },
    ],
    conclusion: `Die Trinitätslehre ist nicht widersprüchlich. Man kann sie für falsch halten, aber nicht für logisch unmöglich erklären.`,
  },
  voices: [
    {
      person: 'gregor-nazianz',
      role: 'als „der Theologe" der Trinitätslehre',
      text: `Gregor von Nazianz hat in seinen fünf Theologischen Reden (380) die Trinität gegen den Vorwurf verteidigt, sie sei unvernünftig. Er besteht darauf, dass die Einheit Gottes in der „Monarchie" des Vaters gründet: Sohn und Geist gehen ewig aus dem einen Ursprung hervor, deshalb gibt es nicht drei Prinzipien, sondern einen Gott. Zugleich warnt er davor, Gott mit menschlichen Begriffen ausmessen zu wollen: Wer das Wesen Gottes vollständig zu begreifen meint, hat nicht Gott, sondern ein Bild seines eigenen Verstandes vor sich.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Theologische Reden (Reden 27–31)', year: '380', status: 'paraphrase' }],
    },
    {
      person: 'yahya-ibn-adi',
      role: 'als aristotelischer Logiker in Bagdad',
      text: `Yahya ibn Adi verteidigte die Trinität gegen den muslimischen Philosophen al-Kindi, der argumentiert hatte, die Dreiheit führe zu Zusammensetzung und Vielheit in Gott. Yahya zeigt mit den Mitteln der Logik, dass eine Unterscheidung der Beziehung nach keine Zusammensetzung des Wesens bedeutet. Seine Analogie: Wenn Gott sich selbst denkt, sind Intellekt, Denkender und Gedachtes ein einziges Wesen – und doch kann man sie unterscheiden. Damit verteidigt er nicht die Herleitung der Trinität aus der Vernunft, sondern ihre Widerspruchsfreiheit.`,
      sources: [{ kind: 'kirchenvater', author: 'Yahya ibn Adi', work: 'Widerlegung der Schrift al-Kindis gegen die Christen', year: '10. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'paulus-al-buschi',
      role: 'als koptischer Bischof des 13. Jahrhunderts',
      text: `Paulus al-Buschi erklärte in seinen arabischen Traktaten die Dreieinigkeit mit der Unterscheidung zwischen dem einen göttlichen Wesen und seinen drei Eigentümlichkeiten: Gott ist seiend, sprechend und lebendig. Er betont, dass diese Bestimmungen weder drei Götter noch drei Teile sind, sondern das eine Wesen in drei Weisen des Seins. Bilder wie die Sonne mit ihrem Licht und ihrer Wärme dienen ihm als Hinweis, nicht als Beweis – denn nichts Geschaffenes gleicht Gott.`,
      sources: [{ kind: 'koptisch', author: 'Paulus al-Buschi', work: 'Traktate über die Dreieinigkeit und die Menschwerdung', year: '13. Jh.', status: 'paraphrase' }],
    },
    {
      person: 'swinburne',
      role: 'als analytischer Religionsphilosoph',
      text: `Richard Swinburne hat gezeigt, dass sich die Trinität in der Sprache der modernen analytischen Philosophie widerspruchsfrei formulieren lässt. Er unterscheidet zwischen dem Gebrauch von „Gott" als Name des einen göttlichen Wesens und als Prädikat („ist göttlich"). Andere christliche Philosophen (etwa Peter van Inwagen mit dem Modell der relativen Identität oder Brian Leftow) bieten alternative Modelle. Für die Apologetik ist entscheidend: Es gibt mehrere kohärente Modelle – damit ist der Vorwurf des Widerspruchs widerlegt, auch wenn man die Modelle nicht für Dogma halten muss.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Christian God', year: '1994', status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Religionsphilosoph',
      text: `William Lane Craig betont in Debatten mit Muslimen, dass der Vorwurf „1+1+1=3" eine Kategorienverwechslung ist: Die Trinität behauptet nicht, dass drei Götter einer sind, sondern dass ein Gott drei Personen umfasst. Sein Bild ist das einer Seele mit drei vollständigen Bewusstseinszentren – ein Modell, das er ausdrücklich als Versuch, nicht als Dogma vorlegt. Aus koptischer Sicht ist bei solchen „sozialen" Modellen Vorsicht geboten, damit die Einheit des Wesens nicht verwässert wird; ihr Nutzen liegt im Nachweis der Denkmöglichkeit.`,
      sources: [{ kind: 'fachliteratur', author: 'J. P. Moreland / William Lane Craig', work: 'Philosophical Foundations for a Christian Worldview', year: '2003', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'eins-plus-eins-plus-eins',
      objection: `Ganz einfach: Vater = Gott, Sohn = Gott, Geist = Gott. 1+1+1=3. Drei Götter. Jedes Kind sieht das.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Addieren kann man nur Teile oder getrennte Exemplare. Die Personen der Trinität sind weder Teile Gottes noch getrennte Exemplare eines Gattungsbegriffs. Jede ist das ganze, eine göttliche Wesen. Wenn man unbedingt rechnen will, passt eher Unendlich plus Unendlich plus Unendlich gleich Unendlich – aber Gott ist kein Rechenexempel.`,
      detail: `Die Rechnung setzt voraus, dass „Gott" ein zählbarer Gegenstand ist wie „Apfel". Doch das göttliche Wesen ist numerisch eines und unteilbar. Die drei Hypostasen sind nicht drei Stücke dieses Wesens, sondern drei Weisen, in denen das eine Wesen subsistiert – unterschieden allein durch Ursprungsbeziehungen. Die Analogie mit der Unendlichkeit ist ein Hinweis darauf, dass für das Unbegrenzte die Regeln der Addition endlicher Größen nicht gelten.`,
      questionsBack: [`Wenn du „ist Gott" sagst – meinst du „ist identisch mit dem Vater" oder „hat das göttliche Wesen"?`],
      followUps: [
        {
          id: 'transitivitaet',
          objection: `Wenn der Vater Gott ist und der Sohn Gott ist, dann ist nach dem Gesetz der Transitivität der Vater der Sohn. Ihr leugnet das – also widersprecht ihr der Logik.`,
          objectionBy: 'Dale Tuggy',
          answer: `Transitivität gilt für Identität („ist dasselbe wie"), nicht für Prädikation („hat die Eigenschaft"). „Petrus ist Mensch" und „Paulus ist Mensch" heißt nicht „Petrus ist Paulus". Ebenso heißt „der Sohn ist Gott": Er besitzt das göttliche Wesen ganz – nicht: Er ist der Vater.`,
          followUps: [
            {
              id: 'dann-drei-wie-drei-menschen',
              objection: `Dann sind es eben drei Götter, so wie Petrus, Paulus und Johannes drei Menschen sind.`,
              objectionBy: 'Hamza Tzortzis',
              answer: `Nein. Drei Menschen sind drei, weil jeder ein eigenes, getrenntes Exemplar menschlicher Natur hat – mit eigenem Körper, eigenem Willen, eigenem Handeln. In Gott gibt es nur ein einziges, numerisch identisches Wesen, einen Willen, ein Wirken. Gregor von Nyssa hat genau darauf mit seiner Schrift „Dass es nicht drei Götter gibt" geantwortet.`,
              followUps: [
                {
                  id: 'ein-wille-dann-modalismus',
                  objection: `Ein Wille und ein Wirken – dann gibt es keine echte Unterscheidung mehr. Das ist Modalismus.`,
                  objectionBy: 'Dale Tuggy',
                  answer: `Modalismus sagt: Ein und dieselbe Person tritt nacheinander als Vater, Sohn und Geist auf. Die Kirche sagt: Die drei sind gleichzeitig und ewig unterschieden – der Vater sendet den Sohn, der Sohn betet zum Vater, der Geist geht vom Vater aus. Unterschieden sind sie durch Beziehungen, nicht durch getrennte Willen. Dass wir dies nicht vollständig vorstellen können, ist kein Widerspruch, sondern die Grenze unserer Erfahrung.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mysterium-ist-ausrede',
      objection: `Wenn ihr nicht weiterwisst, sagt ihr „Mysterium". Das ist eine Ausrede. Eine wahre Religion ist klar und verständlich.`,
      objectionBy: 'Zakir Naik',
      answer: `Mysterium heißt nicht „widersprüchlich", sondern „größer als unser Verstand". Auch du sagst, Allah sei ewig, ohne Anfang, allwissend – niemand kann sich das vorstellen. Und die sunnitische Theologie sagt über Allahs Eigenschaften, sie seien „weder Er noch etwas anderes als Er", und über Allahs Hand oder Thron *bi-lā kaifa*: „ohne zu fragen, wie". Dass Gott unser Begreifen übersteigt, spricht nicht gegen ihn – ein vollständig begreifbarer Gott wäre verdächtig.`,
      detail: `Die Formel *bi-lā kaifa* wird mit Ahmad ibn Hanbal und al-Asch'ari verbunden: Man bekennt die Aussagen des Korans über Gott, ohne ihre Art und Weise erklären zu können oder zu wollen. Das ist strukturell dieselbe Haltung, die Christen gegenüber der Trinität einnehmen: Wir bekennen, was offenbart ist, und erklären es, soweit es möglich ist – aber wir beanspruchen nicht, Gottes Wesen zu durchschauen.`,
      followUps: [
        {
          id: 'tauhid-ist-einfach',
          objection: `Aber der Tauhid ist einfach: Gott ist einer. Das versteht jeder.`,
          objectionBy: 'Zakir Naik',
          answer: `„Gott ist einer" versteht jeder – auch wir sagen das. Schwierig wird es, sobald man fragt, was Gottes Rede, Wissen und Willen sind. Daran haben sich Mu'tazila, Asch'ariten und Hanbaliten jahrhundertelang zerstritten, bis hin zur Inquisition der *Miḥna*. Einfachheit in der Formel bedeutet nicht Einfachheit im Gegenstand.`,
          questionsBack: [`Ist Allahs Wissen dasselbe wie Allahs Macht? Wenn nein – ist Allah dann zusammengesetzt?`],
        },
      ],
    },
    {
      id: 'analogien-scheitern',
      objection: `Eure Analogien sind alle falsch: Wasser–Eis–Dampf ist Modalismus, das Ei ist Teilung, der Mann als Vater, Sohn und Ehemann ist wieder Modalismus. Ihr habt keine einzige taugliche Erklärung.`,
      objectionBy: 'Hamza Tzortzis',
      answer: `Richtig – die meisten populären Analogien sind schlecht, und gute Theologen haben sie nie als Beweis benutzt. Die Väter verwendeten Bilder wie Sonne–Strahl–Wärme mit dem ausdrücklichen Hinweis, dass nichts Geschaffenes Gott gleicht. Dass Gott keine perfekte Analogie in der Schöpfung hat, ist kein Argument gegen die Trinität – der Koran sagt selbst: „Nichts ist Ihm gleich" (42:11).`,
      sources: [
        { kind: 'koran', work: 'Sure 42 (asch-Schura)', ref: '42:11', quote: `Nichts ist Ihm gleich; und Er ist der Allhörende, der Allsehende.`, original: `laysa ka-mithlihī shayʾun wa-huwa s-samīʿu l-baṣīr`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/42/11' },
      ],
      followUps: [
        {
          id: 'ohne-analogie-unverstaendlich',
          objection: `Wenn es keine Analogie gibt, dann kann man es auch nicht verstehen. Und was man nicht verstehen kann, kann man nicht glauben.`,
          objectionBy: 'Zakir Naik',
          answer: `Man kann verstehen, **was** behauptet wird – ein Wesen, drei Hypostasen –, ohne zu verstehen, **wie** es in Gott ist. Das gilt für jede Rede über Gott: Du verstehst, was „Allah ist ewig" bedeutet, aber nicht, wie Ewigkeit von innen ist. Glauben setzt Verstehen des Gehalts voraus, nicht Durchschauen des Wesens.`,
        },
      ],
    },
    {
      id: 'wort-trinitaet-nicht-in-bibel',
      objection: `Das Wort „Trinität" steht nicht einmal in der Bibel. Ihr glaubt an eine philosophische Erfindung.`,
      objectionBy: 'Ahmed Deedat',
      answer: `Das Wort steht nicht in der Bibel – so wie das Substantiv „Tauhid" nicht im Koran steht. Theologische Fachbegriffe fassen zusammen, was die Texte sagen. Entscheidend ist, ob der Inhalt biblisch ist: ein Gott, und Vater, Sohn und Geist sind je Gott und doch unterscheidbar. Das ist biblisch.`,
      followUps: [
        {
          id: 'griechische-philosophie',
          objection: `Begriffe wie „Usia" und „Hypostase" stammen aus der griechischen Philosophie. Das Christentum wurde hellenisiert.`,
          objectionBy: 'Shabir Ally',
          answer: `Die Begriffe wurden benutzt, um eine bereits geglaubte Wirklichkeit gegen Missverständnisse abzugrenzen – die Väter haben sie dabei umgeprägt. Auch die islamische Theologie (Kalam) übernahm griechische Begriffe wie Substanz (*ǧauhar*) und Akzidens (*ʿaraḍ*), ohne dass man deshalb den Islam „hellenisiert" nennt. Die Anbetung Jesu ist zudem viel älter als jede Philosophie: Sie ist schon in den Paulusbriefen der 50er Jahre belegt.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `In welcher Hinsicht genau behauptest du, dass wir „eins" und „drei" in derselben Hinsicht sagen?`,
    `Ist Allahs Wissen identisch mit seiner Macht? Wenn nicht, ist Allah dann zusammengesetzt oder mehrere?`,
    `Verstehst du, wie Allah ohne Anfang existiert? Wenn nicht – ist die Ewigkeit Allahs dann „unlogisch"?`,
    `Was bedeutet *bi-lā kaifa* für dich – und warum dürfen Christen nicht ähnlich demütig über Gottes Wesen sprechen?`,
  ],
  avoid: [
    `Nicht „1×1×1=1" als Beweis anbieten – das ist ein nettes Bild, aber kein Argument, und der Gegner kann es leicht lächerlich machen.`,
    `Keine modalistischen Bilder verwenden (Wasser–Eis–Dampf; ein Mann als Vater, Sohn und Ehemann).`,
    `Nicht sagen „Das muss man einfach glauben" – das bestätigt den Vorwurf. Erkläre die Unterscheidung von Wesen und Person.`,
  ],
  concessions: [
    `Die Trinität ist aus der Vernunft allein nicht herleitbar; wir kennen sie aus Offenbarung.`,
    `Christliche Philosophen vertreten unterschiedliche Modelle (sozial, „lateinisch", relative Identität); keines ist Dogma, und manche sind aus orthodoxer Sicht problematisch.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Die fünf Theologischen Reden', year: '380', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Christian God', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sandra Toenies Keating', work: 'Defending the „People of Truth" in the Early Islamic Period: The Christian Apologies of Abū Rāʾiṭah', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Trinität', 'Logik', 'Satz vom Widerspruch', 'Philosophie'],
  related: [
    'islam-trinitaet/trinitaet-ist-schirk',
    'islam-trinitaet/gott-braucht-keine-trinitaet-um-zu-lieben',
    'antitrinitarier/oneness-modalismus',
    'antitrinitarier/jesus-nur-besonderer-mensch',
  ],
};

export default claim;
