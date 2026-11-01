import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'glaube-ohne-beweise',
  title: `„Glaube heißt, etwas ohne Beweise zu glauben."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The Selfish Gene (1976), Kap. 11; The God Delusion (2006)' },
    { name: 'Peter Boghossian', role: 'Philosoph, ehem. Portland State University', work: 'A Manual for Creating Atheists (2013)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
    { name: 'W. K. Clifford', role: 'Mathematiker und Philosoph (1845–1879)', work: '„The Ethics of Belief", Contemporary Review (1877)' },
    { name: 'Friedrich Nietzsche', role: 'Philosoph (1844–1900)', work: 'Der Antichrist (1888/1895), § 52' },
  ],
  steelman: `Wenn es Beweise gäbe, bräuchte niemand „Glauben" – man wüsste einfach. Dass Religionen den Glauben zur Tugend erklären, zeigt, dass sie ihn gerade dort verlangen, wo die Belege fehlen. Das Neue Testament selbst preist die, „die nicht sehen und doch glauben" (Joh 20,29), und definiert Glauben als Überzeugung von Dingen, „die man nicht sieht" (Hebr 11,1). Tertullian soll gesagt haben, er glaube, *weil* es absurd sei; Luther nannte die Vernunft „des Teufels Hure"; Kierkegaard sprach vom Sprung. Dawkins definiert Glauben deshalb als „blindes Vertrauen, ohne Belege, sogar gegen die Belege"; Peter Boghossian als „vorzugeben, Dinge zu wissen, die man nicht weiß". In jedem anderen Lebensbereich – Medizin, Justiz, Wissenschaft – gilt es als Laster, ohne ausreichende Gründe zu glauben. W. K. Clifford brachte es auf den Punkt: Es ist immer, überall und für jeden falsch, etwas aufgrund unzureichender Belege zu glauben. Glaube ist kein Erkenntnisweg, sondern dessen Verweigerung.`,
  biblical: {
    summary: `Das griechische Wort *pistis* bedeutet „Vertrauen", „Treue", „Beglaubigung" – ein Vertrauen, das sich auf die Glaubwürdigkeit einer Person oder Botschaft stützt. Das Neue Testament begründet den Glauben ausdrücklich mit Belegen: Johannes schreibt die Zeichen Jesu auf, „daß ihr glaubet" (Joh 20,31); Jesus zeigte sich „durch mancherlei Erweisungen" (Apg 1,3, *tekmēria*); Lukas hat alles „von Anbeginn erkundet" (Lk 1,1–4); Paulus nennt Zeugen, „deren noch viele leben" (1 Kor 15,6). Hebr 11,1 nennt den Glauben einen *elenchos* – einen Beweis, eine Überführung – von Unsichtbarem; unsichtbar heißt aber nicht unbelegt. Christen sollen sogar „alles prüfen" (1 Thess 5,21) und „die Geister prüfen" (1 Joh 4,1).`,
    detail: `- **Hebr 11,1:** *elpizomenōn hypostasis, pragmatōn elenchos ou blepomenōn* – „Grundlage (Gewissheit) des Erhofften, Beweis (Überführtsein) von Dingen, die man nicht sieht". *Elenchos* ist im Griechischen ein Begriff für Prüfung, Widerlegung, Beweis. Das „Nicht-Gesehene" sind die künftigen Verheißungen und die unsichtbare Wirklichkeit Gottes – nicht Behauptungen ohne Grund. Die Glaubenden in Hebr 11 handeln, weil sie Gottes Treue *erfahren* haben.
- **Joh 20,29–31:** Thomas hatte das Zeugnis von zehn Freunden und weigerte sich zu glauben, bis er selbst berührte. Jesus lobt die späteren Glaubenden, die sich auf das *Zeugnis* stützen – und der nächste Satz sagt, dass die Zeichen *zu diesem Zweck aufgeschrieben* sind. Nicht-Sehen heißt hier: auf glaubwürdiges Zeugnis vertrauen, wie Historiker es täglich tun.
- **Joh 10,38:** „Glaubet doch den Werken" – Jesus verweist auf überprüfbare Taten als Grund des Glaubens.
- **Hebr 2,3–4:** Die Botschaft wurde „durch die, so es gehört haben", überliefert, und Gott hat ihr „Zeugnis gegeben mit Zeichen, Wundern".
- **Missverständnis:** Im Deutschen bedeutet „glauben" oft „vermuten" („Ich glaube, es regnet"). Das biblische *pisteuein eis* („glauben an/in") meint dagegen ein begründetes Sich-Anvertrauen.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '20,30–31', quote: `Auch viele andere Zeichen tat Jesus vor seinen Jüngern, die nicht geschrieben sind in diesem Buch. Diese aber sind geschrieben, daß ihr glaubet, Jesus sei Christus, der Sohn Gottes, und daß ihr durch den Glauben das Leben habet in seinem Namen.`, original: 'ταῦτα δὲ γέγραπται ἵνα πιστεύητε ὅτι Ἰησοῦς ἐστιν ὁ Χριστὸς ὁ υἱὸς τοῦ θεοῦ', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,1', quote: `Es ist aber der Glaube eine gewisse Zuversicht des, das man hofft, und nicht zweifeln an dem, das man nicht sieht.`, original: 'Ἔστιν δὲ πίστις ἐλπιζομένων ὑπόστασις, πραγμάτων ἔλεγχος οὐ βλεπομένων.', translation: 'Luther 1912', status: 'verbatim', note: 'elenchos = Beweis, Überführung; Luther übersetzt frei mit „nicht zweifeln".' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,3', quote: `welchen er sich nach seinem Leiden lebendig erzeigt hatte durch mancherlei Erweisungen, und ließ sich sehen unter ihnen vierzig Tage lang.`, original: 'ἐν πολλοῖς τεκμηρίοις', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '2,3–4', quote: `… welche, nachdem sie erstlich gepredigt ist durch den HERRN, ist sie auf uns gekommen durch die, so es gehört haben; und Gott hat ihr Zeugnis gegeben mit Zeichen, Wundern und mancherlei Kräften.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Schule von Alexandrien hat Glaube und Erkenntnis nie gegeneinander ausgespielt. Clemens von Alexandrien beschreibt den Glauben als freiwillige Zustimmung und lehrt, dass Erkenntnis vom Glauben und Glaube von Erkenntnis geprägt wird – beide stehen in gegenseitiger Entsprechung. Origenes antwortet auf Kelsos' Vorwurf, Christen sagten nur „Prüfe nicht, glaube nur!", dass es weit besser sei, die Lehren mit Vernunft und Weisheit anzunehmen. Augustinus definiert: Glauben ist nichts anderes als „mit Zustimmung denken". Für die orthodoxe Kirche ist Glaube darüber hinaus lebendige Beziehung zu Gott, die im Gebet, in den Sakramenten und im Leben der Kirche wächst – nicht weniger als Erkenntnis, sondern mehr.`,
    detail: `Schon Kaiser Julian („der Abtrünnige") verspottete im 4. Jahrhundert die Christen: Den Griechen gehörten die Vernunftgründe, den Christen nur das „Glaube!". Gregor von Nazianz antwortete, auch die Pythagoreer hätten das „Er selbst hat es gesagt" ihres Meisters als letzte Begründung anerkannt – Vertrauen auf eine glaubwürdige Autorität sei kein Merkmal der Unvernunft, sondern Teil jeder Erkenntnis. Die koptische Tradition sieht in der Katechetenschule von Alexandrien (Pantänus, Clemens, Origenes, Didymus) das Vorbild einer Kirche, in der Gelehrsamkeit und Frömmigkeit zusammengehören.`,
    sources: [
      { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'II,2 und II,4', status: 'paraphrase', quote: 'Der Glaube ist eine freiwillige Vorwegnahme, eine Zustimmung der Gottesfurcht; die Erkenntnis ist vom Glauben geprägt, und der Glaube wird durch eine göttliche Wechselbeziehung von der Erkenntnis geprägt.' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Gegen Kelsos (Contra Celsum)', ref: 'I,9–11', status: 'paraphrase', quote: 'Gegen Kelsos\' Vorwurf „Prüfe nicht, glaube nur": Es ist besser, die Lehren mit Vernunft und Weisheit anzunehmen.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über die Vorherbestimmung der Heiligen (De praedestinatione sanctorum)', ref: '2,5', quote: `Glauben ist nichts anderes als mit Zustimmung denken.`, original: 'credere nihil aliud est quam cum assensione cogitare', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Erste Rede gegen Julian (Oratio 4)', ref: '102', status: 'paraphrase', quote: 'Antwort auf Julians Spott, den Christen gehöre nur das „Glaube!": Auch die Pythagoreer stützten sich auf das „Er selbst hat es gesagt" ihres Lehrers.' },
    ],
  },
  opposingView: {
    summary: `In der Religionsphilosophie wird „Glaube" unterschiedlich bestimmt: als Überzeugung, dass etwas wahr ist (propositionaler Glaube), und als Vertrauen auf eine Person (personaler Glaube). Die großen christlichen Traditionen verstehen Glauben nicht als Zustimmung ohne Gründe, sondern als begründetes, die ganze Person ergreifendes Vertrauen. Es gibt allerdings auch fideistische Strömungen, die die Rolle von Gründen gering schätzen (in der Neuzeit etwa Kierkegaard oder Teile des Protestantismus). Dawkins' Definition gibt diese Minderheitsposition als den christlichen Glauben schlechthin aus; Alister McGrath, selbst promovierter Molekularbiophysiker, kritisiert, dass Dawkins für seine Definition keinen christlichen Theologen anführt.`,
    sources: [
      { kind: 'gegner', author: 'Richard Dawkins', work: 'The Selfish Gene', year: '1976', ref: 'Kap. 11', status: 'paraphrase', quote: 'Glaube bedeutet blindes Vertrauen – in Abwesenheit von Belegen, sogar entgegen den Belegen.', original: 'faith, which means blind trust, in the absence of evidence, even in the teeth of evidence', note: 'Vielfach zitierte Stelle; Seitenzahl je nach Ausgabe verschieden.' },
      { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'Dawkins\' God: Genes, Memes, and the Meaning of Life', year: '2004', status: 'paraphrase', quote: 'Dawkins\' Definition des Glaubens als blindes Vertrauen ohne Belege entspricht keiner christlichen Position; er belegt sie nicht – und müsste sie nach seinem eigenen Maßstab „blind" glauben.' },
      { kind: 'gegner', author: 'W. K. Clifford', work: '„The Ethics of Belief", Contemporary Review', year: '1877', quote: `It is wrong always, everywhere, and for anyone, to believe anything upon insufficient evidence.`, status: 'verbatim' },
    ],
  },
  quickAnswer: `So definiert Richard Dawkins den Glauben – aber nicht die Bibel und nicht die Kirche. Das griechische Wort *pistis* heißt „Vertrauen", und zwar ein Vertrauen, das sich auf Glaubwürdigkeit stützt – wie mein Vertrauen in einen erfahrenen Arzt. Johannes schreibt ausdrücklich, er habe die Zeichen Jesu aufgeschrieben, „damit ihr glaubt" (Joh 20,31); Lukas hat Augenzeugen befragt (Lk 1,1–4); Jesus zeigte sich nach der Auferstehung „durch viele sichere Beweise" (Apg 1,3). Der Glaube geht über Beweise hinaus, weil er die ganze Person bindet – wie eine Ehe, die auf Kenntnis beruht, aber mehr ist als Kenntnis. Aber er ist nicht *gegen* Belege, sondern beruht auf ihnen.`,
  keyPoints: [
    `**Pistis = begründetes Vertrauen:** Im Neuen Testament bezeichnet „Glaube" ein Sich-Anvertrauen auf jemanden, der sich als glaubwürdig erwiesen hat – nicht ein Fürwahrhalten ohne Gründe.`,
    `**Das NT begründet den Glauben mit Belegen:** Augenzeugen (Lk 1,1–4; 1 Kor 15,6), Zeichen (Joh 20,30–31), „sichere Beweise" (Apg 1,3), erfüllte Prophetie (Apg 17,2–3). Christen sollen „alles prüfen" (1 Thess 5,21).`,
    `**Hebr 11,1 richtig gelesen:** *elenchos* heißt „Beweis, Überführung". „Unsichtbar" heißt nicht „unbelegt" – auch Atome, die Vergangenheit und fremde Gedanken sind unsichtbar.`,
    `**Joh 20,29 im Zusammenhang:** Jesus lobt nicht Blindheit, sondern das Vertrauen auf glaubwürdiges Zeugnis – der folgende Vers sagt, dass die Zeichen dafür aufgeschrieben wurden.`,
    `**Zeugnis ist eine echte Erkenntnisquelle:** Fast alles, was wir über Geschichte, Geografie und Wissenschaft wissen, beruht auf dem Zeugnis anderer. Entscheidend ist die Prüfung der Glaubwürdigkeit.`,
    `**Glaube ist mehr als Wissen, nicht weniger:** Er umfasst Erkenntnis, Zustimmung und Vertrauen – eine Beziehung, die das Leben verwandelt. Darum ist er Tugend: Treue zu dem, was man als wahr erkannt hat, auch wenn Gefühle schwanken.`,
  ],
  argument: {
    name: 'Der biblische Begriff des Glaubens',
    summary: 'Christlicher Glaube ist vernünftiges Vertrauen auf glaubwürdig bezeugte Wirklichkeit.',
    premises: [
      {
        text: 'P1: Im Neuen Testament bezeichnet „pistis/pisteuein" das Vertrauen auf eine Person oder Botschaft aufgrund ihrer Glaubwürdigkeit.',
        support: `Das Wort wird im Griechischen auch für Beglaubigung, Garantie und Beweismittel gebraucht (vgl. Apg 17,31: *pistin paraschōn* – „eine Beglaubigung gebend"). Glauben „an" (*eis*) Christus heißt, sich ihm anzuvertrauen, weil er sich als vertrauenswürdig erwiesen hat.`,
      },
      {
        text: 'P2: Die neutestamentlichen Autoren begründen die Glaubwürdigkeit ihrer Botschaft mit öffentlich prüfbaren Belegen: Augenzeugen, Zeichen, erfüllte Prophetie und vor allem die Auferstehung.',
        support: `Lk 1,1–4; Joh 20,30–31; Apg 1,3; 2,22.32; 17,2–3.31; 26,26 („nicht im Winkel geschehen"); 1 Kor 15,3–8; 2 Petr 1,16 („nicht klugen Fabeln gefolgt"); 1 Joh 1,1–3.`,
      },
      {
        text: 'P3: Vertrauen, das sich auf glaubwürdige Belege und Zeugnisse stützt, ist rational – so wie das Vertrauen auf Fachleute, Zeugen und Freunde.',
        support: `Ohne solches Vertrauen wäre keine Wissenschaft, keine Geschichte und kein Gerichtsverfahren möglich. Selbst Naturwissenschaftler übernehmen den Großteil ihres Wissens aus dem Zeugnis anderer.`,
      },
    ],
    conclusion: 'Also ist christlicher Glaube kein Glaube „ohne Beweise", sondern vernünftiges Vertrauen, das über das bloße Fürwahrhalten hinaus die ganze Person in die Beziehung zu Gott stellt.',
  },
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Evangelist und Augenzeuge',
      text: `Johannes versteht sein Evangelium als Zeugnis, das Glauben ermöglichen soll: Er hat aus den vielen Zeichen Jesu einige ausgewählt und aufgeschrieben, „damit ihr glaubt". Sein erster Brief beginnt mit einer Häufung von Sinneswahrnehmungen: was wir gehört, mit unseren Augen gesehen, betrachtet und mit unseren Händen betastet haben, das verkündigen wir euch. Für Johannes ist der Glaube der Späteren also nicht ein Ersatz für Belege, sondern das Vertrauen auf das Zeugnis derer, die gesehen haben – verbunden mit dem inneren Zeugnis des Geistes.`,
      sources: [
        { kind: 'bibel', work: 'Johannes', ref: '20,30–31; 21,24', status: 'paraphrase', quote: 'Die Zeichen sind aufgeschrieben, damit ihr glaubt; „dies ist der Jünger, der von diesen Dingen zeugt".' },
        { kind: 'bibel', work: '1. Johannes', ref: '1,1–3', quote: `Das da von Anfang war, das wir gehört haben, das wir gesehen haben mit unsern Augen, das wir beschaut haben und unsre Hände betastet haben, vom Wort des Lebens …`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'lukas',
      role: 'als Historiker',
      text: `Lukas eröffnet sein Evangelium wie ein antiker Geschichtsschreiber: Er kennt frühere Berichte, beruft sich auf Augenzeugen und „Diener des Worts", hat alles „von Anbeginn erkundet" und schreibt „in Ordnung", damit Theophilus die *asphaleia* – die Zuverlässigkeit – dessen erkennt, worin er unterrichtet wurde. Glaube entsteht hier nicht durch Verzicht auf Prüfung, sondern durch sorgfältige historische Nachforschung. Lukas ist damit das biblische Vorbild für einen Glauben, der wissen will.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '1,1–4', quote: `… auf daß du gewissen Grund erfahrest der Lehre, in welcher du unterrichtet bist.`, original: 'ἵνα ἐπιγνῷς περὶ ὧν κατηχήθης λόγων τὴν ἀσφάλειαν', translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der Katechetenschule von Alexandrien',
      text: `Clemens setzt sich mit Gnostikern auseinander, die den einfachen Glauben verachteten, und mit Philosophen, die ihn für unvernünftig hielten. Gegen beide zeigt er: Der Glaube ist eine freiwillige Zustimmung des Verstandes, und jede Erkenntnis beruht letztlich auf ersten Grundsätzen, die man nicht beweisen, sondern nur einsehen und annehmen kann – auch die Philosophie beginnt mit einem Vertrauen. Erkenntnis und Glaube stehen in gegenseitiger Beziehung: Der Glaube führt zur Erkenntnis, und die Erkenntnis vertieft den Glauben. Der vollkommene Christ ist für Clemens der „wahre Gnostiker" – einer, der glaubt *und* versteht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'II,2; II,4; VII', status: 'paraphrase', quote: 'Glaube als freiwillige Zustimmung; Erkenntnis beruht auf unbeweisbaren ersten Grundsätzen; Wechselbeziehung von Glaube und Erkenntnis; der wahre Gnostiker.' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph des Glaubens',
      text: `Augustinus beschreibt in den „Bekenntnissen", wie ihm bewusst wurde, wie vieles er glaubte, ohne es gesehen zu haben: Ereignisse der Geschichte, Städte, die er nie besucht hatte, und sogar, wer seine Eltern waren. Ohne solches Vertrauen auf Zeugnis könne man im Leben überhaupt nichts tun. Darum ist Glaube für ihn kein Gegensatz zum Denken: „Glauben ist nichts anderes als mit Zustimmung denken." Seine Formel „Glaube, damit du verstehst" meint keinen Denkverzicht, sondern einen Weg, auf dem Vertrauen und Einsicht einander fördern.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Bekenntnisse (Confessiones)', ref: 'VI,5,7', status: 'paraphrase', quote: 'Wie vieles glauben wir, ohne es gesehen zu haben – Geschichte, ferne Orte, die eigenen Eltern; ohne solchen Glauben könnten wir im Leben nichts tun.' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über die Vorherbestimmung der Heiligen', ref: '2,5', status: 'paraphrase', quote: 'Glauben ist mit Zustimmung denken.' },
      ],
    },
    {
      person: 'mcgrath',
      role: 'als Theologe und Molekularbiophysiker',
      text: `McGrath, der vor seinem Theologiestudium in Molekularbiophysik promovierte, hält Dawkins' Glaubensdefinition für eine Erfindung, die keinem christlichen Theologen entspricht. Kein bedeutender christlicher Denker habe Glauben als „blindes Vertrauen gegen die Belege" verstanden; vielmehr sei christlicher Glaube eine begründete Antwort auf die Wirklichkeit, vergleichbar dem Vertrauen eines Wissenschaftlers in eine Theorie, die viele Befunde am besten erklärt, auch wenn sie nicht letztgültig bewiesen ist. Ironischerweise, so McGrath, müsse man Dawkins' Definition selbst „blind" glauben, da er sie nicht belegt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'Dawkins\' God', year: '2004', status: 'paraphrase', quote: 'Kritik an Dawkins\' Glaubensbegriff; Glaube als begründete Antwort, nicht als Denkverzicht.' },
        { kind: 'fachliteratur', author: 'Alister & Joanna Collicutt McGrath', work: 'The Dawkins Delusion?', year: '2007', status: 'paraphrase', quote: 'Dawkins verwechselt seine eigene Karikatur des Glaubens mit der christlichen Lehre.' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als koptischer Patristiker',
      text: `Vater Tadros Malaty beschreibt die Schule von Alexandrien als Ort, an dem die Kirche von Anfang an Glauben und Gelehrsamkeit verband: Unter ihren Lehrern Pantänus, Clemens, Origenes und Didymus wurden neben der Heiligen Schrift auch Philosophie, Naturkunde und Mathematik studiert, um den Glauben vor den Gebildeten der Zeit zu verantworten. Die koptische Kirche versteht sich in dieser Tradition als eine Kirche, in der das geistliche Leben und das Denken nicht getrennt sind – ein Glaube, der betet und zugleich fragt.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'The School of Alexandria', status: 'paraphrase', quote: 'Die Katechetenschule von Alexandrien verband Glaube, Schriftauslegung und Wissenschaften ihrer Zeit.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'blindes-vertrauen',
      objection: `„Glaube ist blindes Vertrauen, ohne Belege, sogar entgegen den Belegen. Genau das ist das Problem mit Religion."`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 1,
      answer: `Das ist Dawkins' Definition – aber nicht die der Bibel oder der Kirche. Das griechische *pistis* bedeutet Vertrauen auf etwas Glaubwürdiges. Johannes schreibt, er habe die Zeichen Jesu aufgeschrieben, *damit* wir glauben; Lukas hat Augenzeugen befragt; Paulus nennt Hunderte Zeugen. Ein Glaube, der sich auf Zeugnis und Belege stützt, ist das Gegenteil von blind. Dawkins nennt übrigens keinen christlichen Theologen, der seine Definition teilt.`,
      questionsBack: [`Welcher christliche Theologe definiert Glauben als „Vertrauen gegen die Belege"?`],
      followUps: [
        {
          id: 'selig-die-nicht-sehen',
          objection: `„Jesus selbst sagt: ‚Selig sind, die nicht sehen und doch glauben.' Das ist das Lob des blinden Glaubens."`,
          objectionBy: 'Peter Boghossian',
          targetsPremise: 1,
          answer: `Lies den Zusammenhang: Thomas hatte das Zeugnis von zehn Freunden und weigerte sich zu glauben, bis er die Wunden berührt hatte. Jesus lobt diejenigen, die *glaubwürdigem Zeugnis* vertrauen, ohne selbst dabei gewesen zu sein – und der nächste Satz sagt, dass die Zeichen genau dafür aufgeschrieben wurden (Joh 20,30–31). Nicht-Sehen heißt nicht Nicht-Belegen: Auch du hast Caesar nicht gesehen und glaubst trotzdem, dass er lebte.`,
          followUps: [
            {
              id: 'zeugnis-kein-beweis',
              objection: `„Zeugenaussagen sind aber keine Beweise. Menschen lügen, irren und schmücken aus."`,
              objectionBy: 'Peter Boghossian',
              targetsPremise: 3,
              answer: `Zeugnis ist eine der grundlegenden Quellen allen Wissens: Dein Geburtsdatum, die Existenz Australiens, die Ergebnisse wissenschaftlicher Experimente, die du nie selbst durchgeführt hast – all das kennst du aus dem Zeugnis anderer. Natürlich kann Zeugnis irren; deshalb prüft man es: Wie früh, wie unabhängig, wie viele Zeugen, welche Motive? Die Apostel bezeugten ein öffentliches Ereignis, solange Gegner und Zeugen noch lebten, und zahlten dafür einen hohen Preis.`,
              followUps: [
                {
                  id: 'alle-haben-zeugnisse',
                  objection: `„Muslime, Mormonen und Hindus haben auch Zeugnisse und Erfahrungen. Wenn Zeugnis zählt, müsstest du alle Religionen akzeptieren."`,
                  objectionBy: 'Matt Dillahunty',
                  targetsPremise: 2,
                  answer: `Zeugnisse sind nicht gleichwertig – man muss sie vergleichen. Die Offenbarung im Islam und bei Joseph Smith beruht wesentlich auf dem, was *ein* Mensch allein empfangen haben will; das ist schwer überprüfbar. Die Auferstehung Jesu wird dagegen als öffentliches Ereignis bezeugt, mit Erscheinungen vor Einzelnen und Gruppen, von früheren Skeptikern und Gegnern, in einer Zeit, in der man die Zeugen befragen konnte. Ein „Brennen im Herzen" allein ist kein öffentlicher Beleg – darum stützt sich das Christentum zuerst auf Geschichte.`,
                  detail: `Siehe „Ich habe ein Zeugnis im Herzen (Moroni 10,4)" und „Alle Religionen sind gleich wahr".`,
                },
              ],
            },
          ],
        },
        {
          id: 'hebraeer-11-1',
          objection: `„Hebräer 11,1 definiert Glauben als Überzeugtsein von Dingen, die man nicht sieht. Also genau: ohne Belege."`,
          objectionBy: 'Richard Dawkins / Sam Harris',
          targetsPremise: 1,
          answer: `Das griechische Wort dort ist *elenchos* – „Beweis, Überführung". Das „Nicht-Gesehene" sind die künftigen Verheißungen Gottes und seine unsichtbare Wirklichkeit, nicht grundlose Behauptungen. Unsichtbar sind auch Atome, die Vergangenheit und deine Gedanken – trotzdem gibt es Belege dafür. Die Glaubenden in Hebräer 11 vertrauten, weil sie Gottes Treue in der Geschichte erfahren hatten; und Hebr 2,4 sagt ausdrücklich, Gott habe die Botschaft „mit Zeichen und Wundern" bezeugt.`,
          followUps: [
            {
              id: 'glaube-geht-darueber-hinaus',
              objection: `„Dann gib zu: Glaube geht über die Belege hinaus – sonst wäre es ja Wissen."`,
              objectionBy: 'Alex O\'Connor',
              targetsPremise: 3,
              answer: `In einem Sinn ja – aber nicht in dem, den du meinst. Glaube ist mehr als die Zustimmung zu einer Tatsache; er ist persönliches Vertrauen, das das Leben bindet. Eine Ehe beruht darauf, dass ich meinen Partner kenne und gute Gründe habe, ihm zu vertrauen; aber das Ja vor dem Altar ist mehr als ein Wissensurteil – es ist Hingabe. So geht der Glaube über Belege hinaus, ohne sich gegen sie zu stellen. Clemens von Alexandrien sagte: Glaube und Erkenntnis prägen einander.`,
              followUps: [
                {
                  id: 'clifford-prinzip',
                  objection: `„Genau dieses ‚Mehr' ist irrational. Clifford hat recht: Es ist immer und überall falsch, etwas aufgrund unzureichender Belege zu glauben."`,
                  objectionBy: 'W. K. Clifford (1877), heute Sam Harris',
                  targetsPremise: 3,
                  answer: `Cliffords Prinzip scheitert an sich selbst: Für den Satz „Es ist immer falsch, ohne ausreichende Belege zu glauben" gibt es keine ausreichenden Belege – er ist eine moralische Grundsatzentscheidung. Zudem handeln wir alle täglich über zwingende Beweise hinaus: wenn wir heiraten, einem Arzt vertrauen oder Kinder großziehen. William James hat gezeigt, dass es bei lebenswichtigen, unausweichlichen Fragen vernünftig sein kann, sich zu entscheiden, bevor alle Belege vorliegen. Christlicher Glaube ist dabei nicht gegen die Belege, sondern ihre persönliche Konsequenz.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'William James', work: '„The Will to Believe"', year: '1896', status: 'paraphrase', quote: 'Bei einer lebendigen, unausweichlichen und folgenschweren Entscheidung darf und muss unser Wille mitentscheiden, wenn der Verstand sie nicht allein entscheiden kann.' },
                  ],
                  questionsBack: [`Hast du für Cliffords Prinzip selbst ausreichende Belege?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'beweise-machen-glauben-ueberfluessig',
      objection: `„Wenn es Beweise gäbe, bräuchte man keinen Glauben. Dass ihr Glauben verlangt, zeigt doch, dass es keine Beweise gibt."`,
      objectionBy: 'Sam Harris / Richard Dawkins',
      targetsPremise: 1,
      answer: `Das verwechselt zwei Bedeutungen. Ich *weiß*, dass meine Frau existiert, und ich *vertraue* ihr – das Vertrauen macht das Wissen nicht überflüssig, und das Wissen macht das Vertrauen nicht überflüssig. Ebenso ist der Glaube an Gott nicht bloß die Vermutung, dass es ihn gibt, sondern das Vertrauen auf ihn. Die Bibel sagt sogar: „Die Teufel glauben's auch und zittern" (Jak 2,19) – sie wissen, dass Gott existiert, und vertrauen ihm trotzdem nicht.`,
      followUps: [
        {
          id: 'nur-wissen-mit-frommem-namen',
          objection: `„Dann ist dein ‚Glaube' nur Wissen mit einem frommen Namen."`,
          objectionBy: 'Peter Boghossian',
          answer: `Nein – er umfasst Wissen, aber er ist mehr: Erkenntnis (wer Gott ist), Zustimmung (dass es wahr ist) und Vertrauen (dass ich mich ihm anvertraue). Im Deutschen ist „glauben" zweideutig – es kann „vermuten" heißen („Ich glaube, es regnet") oder „vertrauen" („Ich glaube an dich"). Das biblische *pisteuein eis* meint das Zweite. Darum spricht die Kirche vom Glauben als lebendiger Beziehung, die im Gebet und in den Sakramenten wächst.`,
        },
      ],
    },
    {
      id: 'tertullian-luther',
      objection: `„Religiöse Führer haben immer gegen die Vernunft gepredigt: Tertullian – ‚Ich glaube, weil es absurd ist'; Luther – ‚Die Vernunft ist des Teufels Hure'."`,
      objectionBy: 'Sam Harris / Richard Dawkins',
      answer: `„Credo quia absurdum" steht so nicht bei Tertullian. Er schreibt über die Kreuzigung: „Es ist glaubwürdig, weil es töricht ist" – ein rhetorisches Paradox: Eine so beschämende Botschaft hätte niemand erfunden. Luthers Polemik richtete sich gegen eine Vernunft, die sich anmaßt, über das Heil zu urteilen; er ist ohnehin keine Autorität der koptischen Kirche. Die alexandrinische Tradition – Clemens, Origenes, Athanasius, Didymus – hat Glaube und Vernunft immer verbunden.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'Über das Fleisch Christi (De carne Christi)', ref: '5,4', quote: `Gekreuzigt wurde der Sohn Gottes: ich schäme mich nicht, weil es beschämend ist. Und gestorben ist der Sohn Gottes: es ist durchaus glaubwürdig, weil es töricht ist. Und begraben ist er auferstanden: es ist gewiss, weil es unmöglich ist.`, original: 'Crucifixus est dei filius: non pudet, quia pudendum est. Et mortuus est dei filius: credibile prorsus est, quia ineptum est. Et sepultus resurrexit: certum est, quia impossibile.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Die Formel „credo quia absurdum" ist eine spätere Verkürzung; Tertullian ist für die koptische Kirche keine Lehrautorität.' },
      ],
      followUps: [
        {
          id: 'kierkegaard-sprung',
          objection: `„Und Kierkegaard mit seinem ‚Sprung in den Glauben'? Das ist offen irrational."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Es stimmt, dass es fideistische Strömungen gibt, die Gründe gering schätzen – das gestehe ich offen zu, und Kierkegaard wird oft so gelesen. Aber sein „Sprung" betrifft vor allem die persönliche Entscheidung, sein Leben Gott anzuvertrauen, nicht die Ablehnung von Belegen. Die orthodoxe Tradition ist jedenfalls nicht fideistisch: Sie verbindet Schrift, Vernunft und gelebte Erfahrung.`,
        },
      ],
    },
    {
      id: 'glaube-rechtfertigt-alles',
      objection: `„Glaube ist eine Erkenntnismethode, mit der man alles rechtfertigen kann – auch Terror. Wer sich auf Glauben beruft, entzieht sich jeder Kritik."`,
      objectionBy: 'Peter Boghossian / Sam Harris',
      targetsPremise: 2,
      answer: `Wenn Glaube hieße, ohne Gründe zu glauben, hättest du recht. Christlicher Glaube aber ist an Prüfung gebunden: „Prüfet alles" (1 Thess 5,21), „prüfet die Geister" (1 Joh 4,1). Und er ist an seinen Inhalt gebunden – an Christus, der Petrus befahl, das Schwert einzustecken (Mt 26,52), und für seine Feinde betete. Ein Glaube, der Gewalt rechtfertigt, scheitert gerade an dieser Prüfung. Das Problem des Fanatismus ist nicht Vertrauen, sondern Vertrauen ohne Prüfung und auf das Falsche.`,
      followUps: [
        {
          id: 'keine-methode-religionen',
          objection: `„Welche Methode habt ihr denn, um zwischen religiösen Behauptungen zu entscheiden? Keine."`,
          objectionBy: 'Matt Dillahunty',
          targetsPremise: 2,
          answer: `Dieselben Kriterien wie überall: innere Widerspruchsfreiheit, Übereinstimmung mit dem, was wir sonst wissen, Erklärungskraft, historische Belege und die Früchte im Leben. Eine Religion, die sich auf ein öffentliches Ereignis der Geschichte beruft, kann man historisch prüfen – das unterscheidet das Christentum von Lehren, die auf rein privaten Offenbarungen beruhen. Paulus selbst hat den Glauben an diesem Punkt angreifbar gemacht (1 Kor 15,14).`,
          followUps: [
            {
              id: 'glaeubige-ignorieren-argumente',
              objection: `„Aber in der Praxis glauben die meisten Christen, ohne je ein Argument geprüft zu haben. Das zeigt, dass es nicht um Belege geht."`,
              objectionBy: 'Peter Boghossian',
              answer: `Das stimmt für viele – und es ist eine berechtigte Anfrage an uns. Aber die meisten Atheisten haben auch die Belege für die Evolution oder die Kosmologie nie selbst geprüft, sondern vertrauen Fachleuten. Zudem stützen sich viele Gläubige auf eine eigene Gotteserfahrung, die selbst eine Form von Beleg ist. Der Philosoph Alvin Plantinga hat gezeigt, dass solcher Glaube rational sein kann, auch ohne ausformulierte Argumente – so wie dein Glaube an die Wirklichkeit der Vergangenheit.`,
              detail: `Siehe „Religiöse Erfahrung ist kein Beleg".`,
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-glauben-eltern',
      objection: `„Kinder glauben einfach, was ihre Eltern sagen. Genau so funktioniert religiöser Glaube: Indoktrination statt Prüfung."`,
      objectionBy: 'Richard Dawkins',
      answer: `Alles Lernen beginnt mit Vertrauen: Kinder übernehmen Sprache, Geschichte und Naturwissenschaft zuerst von Eltern und Lehrern. Entscheidend ist, ob dieser Anfang später geprüft wird. Die Bibel und die Kirchenväter fordern genau das, und viele Christen sind als Erwachsene zum Glauben gekommen – von Paulus über Augustinus bis zu C. S. Lewis und vielen früheren Atheisten und Muslimen heute.`,
      detail: `Siehe „Kinder glauben nur, weil sie indoktriniert werden".`,
      followUps: [
        {
          id: 'religion-der-eltern',
          objection: `„Studien zeigen aber, dass die meisten Menschen die Religion ihrer Eltern behalten."`,
          objectionBy: 'Richard Dawkins',
          answer: `Das gilt genauso für säkulare Familien: Kinder nichtreligiöser Eltern bleiben überwiegend nichtreligiös. Die Herkunft einer Überzeugung entscheidet nicht über ihre Wahrheit – sonst müsste man auch den Atheismus vieler Europäer als bloße Prägung abtun. Die Frage bleibt: Hält die Überzeugung einer ehrlichen Prüfung stand?`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher hast du die Definition „Glaube ohne Belege" – von einem christlichen Theologen oder von einem Kritiker?`,
    `Wie viel von dem, was du weißt, beruht auf dem Zeugnis anderer, das du nie selbst überprüft hast?`,
    `Gibt es für Cliffords Prinzip „Glaube nie ohne ausreichende Belege" selbst ausreichende Belege?`,
    `Ist dein Vertrauen in einen guten Freund „blind", nur weil du es nicht mathematisch beweisen kannst?`,
    `Hast du die historischen Belege für die Auferstehung schon einmal geprüft?`,
  ],
  avoid: [
    `„Man muss einfach glauben, Argumente sind unwichtig." – Damit bestätigst du Dawkins' Definition.`,
    `„Credo quia absurdum" als Tertullian-Zitat verwenden – es ist eine Verkürzung.`,
    `Glauben als bloßes Gefühl darstellen („Ich spüre es einfach"). Gefühle gehören dazu, sind aber nicht die Grundlage.`,
    `„Ihr Atheisten glaubt auch, also ist alles Glaube." – Das verwischt die Begriffe; besser den Unterschied von begründetem und unbegründetem Vertrauen zeigen.`,
  ],
  concessions: [
    `Viele Gläubige – auch Christen – glauben tatsächlich, ohne ihre Gründe zu kennen oder zu prüfen.`,
    `Es gibt fideistische Strömungen in der Christenheit, die Gründe gering schätzen; sie sind aber nicht die orthodoxe Position.`,
    `Glaube geht über das Beweisbare hinaus, weil er die ganze Person bindet – er ist nicht nur eine wissenschaftliche Hypothese.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alister E. McGrath', work: 'Dawkins\' God', year: '2004', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God', year: '2011', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis), Buch II', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Warranted Christian Belief', year: '2000', status: 'paraphrase' },
    { kind: 'gegner', author: 'Peter Boghossian', work: 'A Manual for Creating Atheists', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Glaube', 'Pistis', 'Vernunft', 'Zeugnis', 'Hebräer 11', 'Dawkins'],
  related: [
    'atheismus/keine-beweise-fuer-gott',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'auferstehung/halluzinationen',
    'mormonen/brennen-im-herzen',
    'kognitive-religionswissenschaft/kinder-indoktrination',
    'pluralismus/nur-christ-wegen-geburt',
  ],
};

export default claim;
