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
          followUps: [
            {
              id: 'christen-uneinig-ueber-modelle',
              objection: `Eure eigenen Philosophen sind sich nicht einig: soziale Trinität, lateinische Trinität, relative Identität – jeder wirft dem anderen Tritheismus oder Modalismus vor. Wenn nicht einmal eure Experten erklären können, was ihr glaubt, ist das ein Zeichen, dass es inkohärent ist.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Über das Dogma ist die Kirche sich einig: ein Wesen, drei Hypostasen – gegen Arius, gegen Sabellius, gegen den Tritheismus. Uneinig sind Philosophen über Modelle, wie man das in moderner analytischer Sprache am besten ausdrückt. Das ist bei euch nicht anders: Athari, Asch'ari und Maturidi streiten seit über tausend Jahren, wie sich Allahs Eigenschaften zu seinem Wesen verhalten – und niemand schließt daraus, der Tauhid sei inkohärent. Ein Streit über Erklärungsmodelle widerlegt nicht die erklärte Sache.`,
              detail: `Innerislamisch wurde um Fragen wie die „innere Rede" (*kalām nafsī*), Allahs Sitzen auf dem Thron (*istiwāʾ*) oder die Frage, ob die Eigenschaften „zum Wesen hinzukommen", heftig gestritten; die Parteien warfen einander „Vermenschlichung" (*tašbīh*) oder „Entleerung" (*taʿṭīl*) Gottes vor. Das zeigt: Jede ernsthafte Rede über einen transzendenten Gott stößt an die Grenzen menschlicher Begriffe. Die koptische Kirche bindet sich an kein modernes Modell. Sie hält mit Athanasius, den Kappadokiern und Kyrill die Grenzen fest – was man nicht sagen darf (drei Götter; der Vater ist der Sohn; der Sohn ist ein Geschöpf) – und bekennt im Übrigen demütig, dass Gottes Wesen unser Begreifen übersteigt.`,
              questionsBack: [
                `Sind Asch'aris und Atharis sich einig, wie Allahs Eigenschaften sich zu seinem Wesen verhalten? Ist der Tauhid deshalb inkohärent?`,
                `Unterscheidest du zwischen einer Lehre und den Modellen, die sie erklären wollen?`,
              ],
            },
          ],
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
          followUps: [
            {
              id: 'konstantin-nizaea-politik',
              objection: `Die Gottheit Jesu wurde 325 in Nizäa von Kaiser Konstantin durchgesetzt – durch Abstimmung und politischen Druck. Vorher war Jesus für die meisten Christen ein Gesandter Gottes.`,
              objectionBy: 'Ahmed Deedat',
              answer: `Nizäa hat die Gottheit Christi nicht erfunden, sondern gegen Arius verteidigt. Schon um 110 nennt Ignatius von Antiochien Jesus „unseren Gott" (Eph 18,2), und um 112 berichtet der Heide Plinius, Christen sängen Christus „wie einem Gott" Lieder. Und wäre es Politik gewesen: Kurz nach Nizäa begünstigten Konstantin und sein Sohn Constantius die Arianer; Athanasius wurde fünfmal verbannt. Die nizänische Lehre setzte sich gegen die kaiserliche Macht durch, nicht durch sie.`,
              detail: `Arius selbst hielt den Sohn für das erste und höchste Geschöpf, durch das Gott die Welt schuf – also für weit mehr als einen Propheten; auch er betete Christus an. Gerade daran setzte Athanasius an: Wenn der Sohn ein Geschöpf ist, dann ist seine Anbetung Götzendienst – die Kirche aber hat ihn immer angebetet und auf seinen Namen getauft. Konstantin ließ sich am Ende seines Lebens (337) von Eusebius von Nikomedien taufen, einem Wortführer der Arianer; unter Constantius beherrschten arianisch gesinnte Synoden die Lage, und Hieronymus spottete später, der Erdkreis habe aufgeseufzt und sich gewundert, dass er arianisch sei. Athanasius, der Papst von Alexandrien, hielt „gegen die Welt" am Nizänum fest. Mehr dazu im Claim „Die Trinität wurde in Nizäa erfunden".`,
              voices: [
                { person: 'athanasius', role: 'als Verteidiger von Nizäa', text: `Für Athanasius entscheidet nicht eine Abstimmung, sondern die Praxis der Kirche seit den Aposteln: Christen werden auf den Namen des Vaters, des Sohnes und des Geistes getauft und beten den Sohn an. Wäre der Sohn ein Geschöpf, dann hätte die Kirche von Anfang an ein Geschöpf angebetet und wäre götzendienerisch gewesen. Außerdem kann nur Gott selbst den Menschen mit Gott verbinden – ein geschaffener Mittler könnte das Heil nicht bringen.` },
              ],
              sources: [
                { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '18,2', year: 'ca. 110', quote: `Denn unser Gott, Jesus der Christus, wurde von Maria im Schoß getragen …`, translation: 'eigene Übersetzung', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Orationes contra Arianos)', ref: 'Buch I–III', year: 'ca. 339–345', status: 'paraphrase', note: 'Argument aus der Anbetung und der Taufe.' },
              ],
              questionsBack: [
                `Wenn Konstantin die Gottheit Jesu durchgesetzt hat – warum ließ er sich dann von einem Arianer taufen und verbannte Athanasius?`,
                `Welche Quelle vor 325 kennst du, die einen Jesus bezeugt, den die Christen nicht anbeteten?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hypostase-leeres-wort',
      objection: `Ihr sagt „ein Wesen, drei Personen", aber ihr könnt nicht definieren, was eine „Person" in Gott ist. Ist es ein eigenes Bewusstsein? Dann sind es drei Götter. Ist es keines? Dann ist es keine Person. Das Wort ist leer.`,
      objectionBy: 'Hamza Tzortzis',
      answer: `Die Kirche definiert Hypostase sehr genau: das konkrete, unterscheidbare Subjekt, das das ganze göttliche Wesen besitzt – unterschieden allein durch die Ursprungsbeziehungen: Der Vater ist ungezeugt, der Sohn gezeugt, der Geist geht vom Vater hervor. Alles andere – Wissen, Macht, Wille, Ewigkeit – haben sie gemeinsam, nicht dreifach. Es gibt also nicht drei göttliche Leben nebeneinander, sondern ein göttliches Leben, das der Vater als Quelle, der Sohn als Gezeugter und der Geist als Hervorgehender besitzt.`,
      detail: `Gregor von Nazianz erklärt in seinen Theologischen Reden, „Vater" sei weder ein Name des Wesens noch der Tätigkeit, sondern der Beziehung (*schesis*). Johannes von Damaskus fasst die Lehre der Väter zusammen: Die drei Hypostasen sind in allem eins außer im Ungezeugtsein, im Gezeugtsein und im Hervorgehen. Die Kappadokier unterschieden dafür Usia (das Gemeinsame) und Hypostase (das Eigene). Der moderne Begriff „Person" im Sinne eines abgeschlossenen, eigenständigen Bewusstseinszentrums ist jünger als das Dogma; wer ihn in das Nizänum hineinliest und dann „drei Götter" folgert, widerlegt seine eigene Begriffsverschiebung, nicht die Lehre der Kirche. Zugleich sind die Hypostasen keine bloßen Masken: Der Sohn spricht zum Vater, der Vater sendet den Sohn – echte Beziehung in einem Wesen.`,
      voices: [
        { person: 'gregor-nazianz', role: 'als „der Theologe" der Trinität', text: `Gregor betont, dass die Namen Vater, Sohn und Geist Beziehungen bezeichnen, nicht drei Wesen. Der Vater ist Vater, weil er den Sohn ewig zeugt; der Sohn ist Sohn, weil er ewig gezeugt wird; der Geist geht ewig vom Vater aus. Was die drei gemeinsam haben, ist die eine Gottheit; was sie unterscheidet, ist allein die Weise ihres Ursprungs.` },
        { person: 'johannes-damaskus', role: 'als Systematiker der Väterlehre', text: `Johannes von Damaskus, der unter muslimischer Herrschaft schrieb und den Islam kannte, fasst die Trinitätslehre in seiner „Darlegung des orthodoxen Glaubens" präzise zusammen: Die Hypostasen sind ineinander, ohne Vermischung, und unterscheiden sich nur durch ihre Eigentümlichkeiten – Ungezeugtsein, Gezeugtsein, Hervorgang. Alles, was der Vater hat, hat auch der Sohn, außer dem Vatersein.` },
      ],
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Theologische Reden (Rede 29 = Dritte theologische Rede)', ref: '29,16', year: '380', status: 'paraphrase', note: '„Vater" als Name der Beziehung, nicht des Wesens oder der Tätigkeit.' },
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Darlegung des orthodoxen Glaubens (Expositio fidei)', ref: 'I,8', year: '8. Jh.', status: 'paraphrase' },
      ],
      questionsBack: [
        `In welchem Text der Väter hast du die Definition von Hypostase gelesen, die du für leer hältst?`,
        `Benutzt du „Person" im modernen Sinn eines abgeschlossenen Bewusstseins – und wenn ja, warum soll das Nizänum diesen Sinn meinen?`,
      ],
      followUps: [
        {
          id: 'gott-waere-zusammengesetzt',
          objection: `Dann ist Gott zusammengesetzt: ein Wesen plus drei Unterscheidungsmerkmale. Alles Zusammengesetzte hängt von seinen Teilen ab, und was abhängig ist, ist nicht notwendig – also nicht Gott.`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die Hypostasen sind keine Teile, aus denen Gott zusammengesetzt würde; jede ist das ganze Wesen, nicht ein Drittel davon. Eine Beziehung ist kein Baustein. Und dasselbe Argument trifft die sunnitische Lehre: Wenn Allah ewiges Wissen, ewige Macht und ewige Rede hat, die „weder Er noch etwas anderes als Er" sind, müsstest du nach deiner Logik auch Allah zusammengesetzt und abhängig nennen – genau das warfen die Mu'tazila den Sunniten vor. Ein Argument, das deinen eigenen Glauben mitwiderlegt, kannst du nicht nur gegen uns richten.`,
          detail: `Das Argument aus der Einfachheit Gottes stammt aus der Philosophie (Ibn Sina) und wurde von den Mu'tazila gegen die sunnitische Eigenschaftslehre gewendet. Die Asch'ariten antworteten: Die Eigenschaften sind keine abtrennbaren Teile und nicht „etwas anderes" im Sinn eines zweiten Seienden. Die arabisch-christlichen Theologen des 9. Jahrhunderts – Abu Ra'ita, Abu Qurra, später Yahya ibn Adi – haben genau diese Parallele in die Debatte eingebracht. Für die koptische Theologie ist zudem wichtig: Die Einheit Gottes gründet nicht in einer Summe, sondern im Vater als der einen Quelle (*archē*), aus der Sohn und Geist ewig hervorgehen. Es gibt einen Willen, eine Wirkung, eine Herrlichkeit.`,
          voices: [
            { person: 'abu-raita', role: 'als syrisch-orthodoxer Theologe im Gespräch mit dem Kalam', text: `Abu Ra'ita fragte seine muslimischen Gesprächspartner, wie sie Gottes Leben und Wissen von seinem Wesen unterscheiden, ohne eine Vielheit einzuführen. Ob sie die Eigenschaften mit dem Wesen gleichsetzen oder davon abheben – sie stehen vor derselben Frage wie die Christen. Die Trinitätslehre beantwortet diese Frage nach seiner Darstellung folgerichtig: ein Wesen, in dem reale, ewige Unterscheidungen bestehen, ohne dass es geteilt wird.` },
          ],
          sources: [
            { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', status: 'paraphrase', note: 'Zur Trinitätsapologetik Abu Ra\'itas, Abu Qurras und Ammar al-Basris im Gespräch mit der Eigenschaftslehre des Kalam.' },
          ],
          questionsBack: [
            `Ist Allahs Wissen ein Teil von Allah? Wenn nein – warum sollen die Hypostasen Teile sein?`,
            `Hältst du die sunnitische Eigenschaftslehre für Zusammensetzung, wie die Mu'tazila es taten?`,
          ],
          followUps: [
            {
              id: 'sohn-abhaengig-vom-vater',
              objection: `Wenn der Sohn vom Vater „gezeugt" ist und der Vater die „Quelle" ist, dann ist der Sohn abhängig vom Vater. Ein abhängiges Wesen ist nicht Gott. Ihr habt einen Gott erster und einen Gott zweiter Klasse.`,
              objectionBy: 'Hamza Tzortzis',
              answer: `Abhängigkeit im Sinne deines Kontingenzarguments hieße: Der Sohn hätte auch nicht sein können, oder es gab einen Moment ohne ihn. Beides verneint die Kirche. Die Zeugung ist ewig und notwendig – so wie Licht nie ohne seinen Glanz ist (Hebr 1,3). Der Sohn empfängt vom Vater nicht ein geringeres, sondern dasselbe Wesen: „Gott von Gott, Licht vom Licht". Ursprung ohne zeitlichen Anfang und ohne Rangunterschied ist keine Kontingenz.`,
              detail: `Athanasius argumentiert gegen die Arianer: Gott ist Quelle des Lichts; eine Quelle, die nicht strömt, wäre ausgetrocknet, und ein Licht ohne Glanz wäre kein Licht. Also war der Vater nie ohne sein Wort und seine Weisheit – sonst wäre Gott einmal „wortlos" (*alogos*) gewesen. Kontingent ist, was auch nicht sein könnte; der Sohn aber ist, weil der Vater notwendig und ewig Vater ist. Das „Der Vater ist größer als ich" (Joh 14,28) bezieht sich nach den Vätern auf den Ursprung bzw. auf die angenommene Menschheit, nicht auf ein größeres Wesen (vgl. den Claim „Der Vater ist größer").`,
              voices: [
                { person: 'athanasius', role: 'als Verteidiger der ewigen Zeugung', text: `Athanasius zeigt, dass „Vater" und „Sohn" Wechselbegriffe sind: Wenn Gott ewig Vater ist, ist der Sohn ewig Sohn. Ein Gott, der erst später Vater wird, hätte sich verändert – und Veränderung widerspricht Gottes Wesen. Darum ist die ewige Zeugung keine Herabsetzung des Sohnes, sondern Ausdruck der unveränderlichen Fülle Gottes.` },
              ],
              sources: [
                { kind: 'bibel', work: 'Hebräer', ref: '1,3', quote: `Er ist der Abglanz seiner Herrlichkeit und das Abbild seines Wesens.`, original: `ὃς ὢν ἀπαύγασμα τῆς δόξης καὶ χαρακτὴρ τῆς ὑποστάσεως αὐτοῦ`, translation: 'eigene Übersetzung', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Orationes contra Arianos)', ref: 'Buch I', year: 'ca. 339–345', status: 'paraphrase', note: 'Bild von Quelle und Strom, Licht und Glanz; der Vater war nie ohne sein Wort.' },
              ],
              followUps: [
                {
                  id: 'immunisierung-unfalsifizierbar',
                  objection: `Ihr macht euch unangreifbar: Jedes Mal, wenn man euch einen Widerspruch zeigt, sagt ihr „keine Teile", „kein eigenes Bewusstsein", „keine Abhängigkeit". Eine Lehre, die man gegen alles immunisieren kann, sagt am Ende gar nichts.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Im Gegenteil: Die Trinitätslehre schließt sehr viel aus und wäre leicht zu widerlegen, wenn wir drei Götter lehrten, wenn wir sagten, der Vater sei der Sohn, oder wenn der Sohn ein Geschöpf wäre – genau diese Thesen hat die Kirche ausdrücklich verurteilt. Dass die Lehre deine Vorwürfe übersteht, liegt nicht an Immunisierung, sondern daran, dass die Vorwürfe sie falsch wiedergeben. Wer einen logischen Widerspruch behauptet, muss aus unseren Bekenntnissen „A und nicht-A in derselben Hinsicht" ableiten. Das ist bisher niemandem gelungen.`,
                  detail: `Die Beweislast liegt beim Kritiker: Er behauptet nicht nur „unwahrscheinlich", sondern „logisch unmöglich". Der Christ muss dafür nicht erklären, *wie* Gott dreieinig ist; er muss nur zeigen, dass die Lehre widerspruchsfrei formulierbar ist. Analytische Religionsphilosophen haben dafür Modelle vorgelegt – etwa Jeffrey Brower und Michael Rea mit der „numerischen Gleichheit ohne Identität", die aus der Metaphysik der materiellen Konstitution bekannt ist, oder Richard Swinburne mit seinem sozialen Modell. Solche Modelle sind Hilfen, kein Dogma – aber sie zeigen: Der Vorwurf des Widerspruchs ist nicht bewiesen. Und Achtung, fair bleiben: Diese Modelle sind auch unter Christen umstritten; benutze sie nur, um die Widerspruchsfreiheit zu zeigen, nicht als Beschreibung von Gottes innerem Wesen.`,
                  voices: [
                    { person: 'michael-rea', role: 'als analytischer Religionsphilosoph', text: `Rea hat zusammen mit Jeffrey Brower vorgeschlagen, die Trinität nach dem Muster der „numerischen Gleichheit ohne Identität" zu denken: Eine Bronzestatue und das Stück Bronze, aus dem sie besteht, sind nicht identisch (sie haben verschiedene Bedingungen ihres Fortbestehens), und doch zählt man nicht zwei materielle Dinge. Analog können Vater, Sohn und Geist voneinander verschieden und doch ein Gott sein. Damit, so Rea, ist der Vorwurf eines logischen Widerspruchs zurückgewiesen – auch wenn das Geheimnis bleibt.` },
                  ],
                  sources: [
                    { kind: 'fachliteratur', author: 'Jeffrey E. Brower / Michael C. Rea', work: 'Material Constitution and the Trinity', ref: 'Faith and Philosophy 22', year: '2005', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Christian God', year: '1994', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Kannst du aus dem Nizänum zwei Sätze zitieren, die sich in derselben Hinsicht widersprechen?`,
                    `Was genau müsste die Kirche lehren, damit du von einem echten Widerspruch sprechen würdest – und lehrt sie das?`,
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
