import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'zeitloser-gott-handelt-nicht',
  title: `„Ein zeitloser Gott kann nicht handeln oder erschaffen."`,
  proponents: [
    { name: 'Richard M. Gale', role: 'Religionsphilosoph, University of Pittsburgh (1932–2015)', work: 'On the Nature and Existence of God (1991)' },
    { name: 'Adolf Grünbaum', role: 'Wissenschaftsphilosoph, University of Pittsburgh (1923–2018)', work: '„The Pseudo-Problem of Creation in Physical Cosmology", Philosophy of Science 56 (1989)' },
    { name: 'Wes Morriston', role: 'Religionsphilosoph, University of Colorado Boulder', work: '„Must the Beginning of the Universe Have a Personal Cause?", Faith and Philosophy 17 (2000)' },
    { name: 'Nicholas Wolterstorff', role: 'Philosoph, Yale (christlicher Kritiker der Zeitlosigkeit)', work: '„God Everlasting" (1975)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Arguing about Gods (2006)' },
  ],
  steelman: `Handeln heißt, etwas zu verändern: Erst ist etwas nicht, dann ist es. Eine Ursache geht ihrer Wirkung voraus, eine Entscheidung setzt ein Vorher der Unentschiedenheit voraus, ein Gespräch besteht aus Hören und Antworten. All das ist zeitlich. Ein zeitloses Wesen kann also weder entscheiden noch beginnen noch reagieren – es kann nichts *tun*. Adolf Grünbaum hat deshalb die Frage nach einer Ursache des Urknalls ein „Pseudo-Problem" genannt: Ohne Zeit gibt es kein Vorher und also keine Ursache. Wes Morriston ergänzt: Wenn Gottes zeitloser Wille zur Erschaffung der Welt hinreichend ist, müsste die Welt ebenso ewig sein wie dieser Wille – woher dann ein Anfang? Und der Gott der Bibel spricht, hört Gebete, führt Israel aus Ägypten und wird Mensch – ein Gott, der in der Geschichte handelt, ist offenkundig ein Gott in der Zeit. Selbst der christliche Philosoph Nicholas Wolterstorff hält den zeitlosen Gott daher für ein platonisches Erbe, das mit dem Erlöser der Bibel unvereinbar ist.`,
  biblical: {
    summary: `Die Schrift unterscheidet scharf zwischen dem ewigen Gott und der Welt mit ihrer Zeit: „Ehe denn die Berge wurden … bist du, Gott, von Ewigkeit zu Ewigkeit" (Ps 90,2). Sie spricht von Gottes Gnade „vor der Zeit der Welt" (2 Tim 1,9) und von der Liebe des Vaters zum Sohn, „ehe denn die Welt gegründet ward" (Joh 17,24). Zugleich handelt dieser ewige Gott in der Geschichte – „da die Zeit erfüllet ward, sandte Gott seinen Sohn" (Gal 4,4). Die Bibel sieht darin keinen Widerspruch: Der Ewige wirkt in die Zeit hinein, weil er ihr Schöpfer ist.`,
    detail: `- **Ps 90,2.4:** Gottes Ewigkeit steht der Vergänglichkeit der Welt gegenüber; tausend Jahre sind vor ihm „wie der Tag, der gestern vergangen ist".
- **2 Tim 1,9 / Tit 1,2:** *pro chronōn aiōniōn* – „vor ewigen Zeiten". Die Formulierung setzt voraus, dass die Zeiten selbst einen Anfang haben.
- **Joh 17,24:** Die Liebe innerhalb der Dreieinigkeit ist älter als die Welt. Gottes Leben ist nicht auf die Schöpfung angewiesen, um lebendig zu sein.
- **Jes 57,15:** Gott „wohnt ewiglich" (wörtlich: „bewohnt die Ewigkeit") – und zugleich „bei denen, die zerschlagenen Geistes sind". Ewigkeit und Nähe gehören zusammen.
- **Ehrlich:** Die Bibel definiert die Ewigkeit nicht philosophisch. Ob Gott zeitlos oder „immerwährend" ist, ist eine Frage der Auslegung; *dass* er vor und über aller geschaffenen Zeit steht, ist klare biblische Lehre.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '90,2', quote: `Ehe denn die Berge wurden und die Erde und die Welt geschaffen wurden, bist du, Gott, von Ewigkeit zu Ewigkeit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '17,24', quote: `… denn du hast mich geliebt, ehe denn die Welt gegründet ward.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '4,4', quote: `Da aber die Zeit erfüllet ward, sandte Gott seinen Sohn, geboren von einem Weibe und unter das Gesetz getan …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '1,9', quote: `… nach seinem Vorsatz und der Gnade, die uns gegeben ist in Christo Jesu vor der Zeit der Welt.`, translation: 'Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Jesaja', ref: '57,15', quote: `Denn also spricht der Hohe und Erhabene, der ewiglich wohnt, des Name heilig ist: Der ich in der Höhe und im Heiligtum wohne und bei denen, so zerschlagenes und demütigen Geistes sind …`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die Väter lehren, dass Gott die Zeit *mit* der Welt erschaffen hat. Basilius der Große sagt in seinen Predigten über das Sechstagewerk, der Anfang der Zeit sei noch nicht selbst Zeit – so wie der Anfang eines Weges noch nicht der Weg ist. Augustinus formuliert es klassisch: Die Welt ist nicht *in* der Zeit, sondern *mit* der Zeit geschaffen. Die Frage, was Gott „vorher" tat, ist daher falsch gestellt. Die koptische Kirche bekennt Gott als den, der „vor allen Zeiten" ist und zugleich in der Fülle der Zeit Mensch wurde.`,
    detail: `Auch der alexandrinische Philosoph Johannes Philoponos (6. Jh.) verteidigte gegen die Neuplatoniker, dass die Welt einen Anfang hat, obwohl Gottes Wille ewig ist: Ein ewiger Wille kann ein zeitlich begrenztes Werk wollen. Diese Einsicht wurde später von al-Ghazali und Thomas von Aquin aufgegriffen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XI,6', quote: `Ohne Zweifel ist die Welt nicht in der Zeit, sondern mit der Zeit geschaffen.`, original: 'procul dubio non est mundus factus in tempore, sed cum tempore', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'I,6', status: 'paraphrase', quote: 'Wie der Anfang des Weges noch nicht der Weg und der Anfang des Hauses noch nicht das Haus ist, so ist der Anfang der Zeit noch nicht Zeit.' },
    ],
  },
  quickAnswer: `Gott handelt nicht *in* einer schon vorhandenen Zeit – er erschafft die Zeit mit der Welt (Augustinus). Erschaffen ist kein Prozess, der Zeit braucht, sondern das Schenken des Daseins: Die Welt hängt in jedem Augenblick von Gott ab, wie das Licht von der Sonne. Ursachen müssen ihren Wirkungen nicht zeitlich vorausgehen – eine Kugel, die auf einem Kissen liegt, verursacht die Mulde gleichzeitig. Und ein freier Wille kann zeitlos beschließen, dass eine Welt *mit* Anfang existiert. Manche Christen (z. B. Craig) sagen zudem, Gott trete mit der Schöpfung in die Zeit ein – so oder so: kein Widerspruch.`,
  keyPoints: [
    `**Gott erschafft die Zeit:** Es gab kein „Vorher", in dem Gott untätig gewartet hätte. Die Frage „Was tat Gott vor der Schöpfung?" setzt voraus, was sie bestreiten will.`,
    `**Ursächlich, nicht zeitlich früher:** Abhängigkeit im Sein braucht keine zeitliche Abfolge. Thomas: Schöpfung ist keine Veränderung, sondern eine Beziehung der Abhängigkeit.`,
    `**Freier Wille erklärt den Anfang:** Ein zeitloser Wille kann von Ewigkeit her wollen, dass die Welt einen Anfang hat (Philoponos, Thomas). Eine mechanische Ursache könnte das nicht – eine personale schon.`,
    `**Entscheiden ohne Zögern:** Wir brauchen Zeit zum Abwägen, weil wir nicht alles wissen. Ein vollkommenes Wissen braucht keine Bedenkzeit.`,
    `**Handeln in der Geschichte:** Gottes eine ewige Tat hat ihre Wirkungen zu verschiedenen Zeiten – so wie ein einziger Plan viele Schritte enthält.`,
    `**Zwei christliche Modelle:** Zeitlosigkeit (Augustinus, Boethius, Thomas, Stump) oder Zeitlosigkeit ohne Schöpfung und Zeitlichkeit seit der Schöpfung (Craig). Beide widerspruchsfrei.`,
  ],
  voices: [
    {
      person: 'augustinus',
      role: 'als Philosoph der Zeit',
      text: `Im elften Buch der Bekenntnisse greift Augustinus die spöttische Frage der Manichäer auf: „Was tat Gott, bevor er Himmel und Erde schuf?" Die scherzhafte Antwort – er habe die Hölle für Leute vorbereitet, die solche Fragen stellen – lehnt er ausdrücklich ab. Seine ernste Antwort: Es gab kein „Damals", als es keine Zeit gab, denn Gott hat auch die Zeit geschaffen. Gott geht den Zeiten nicht in der Zeit voraus, sondern in der Erhabenheit seiner immer gegenwärtigen Ewigkeit; seine „Jahre" stehen alle zugleich. Augustinus' Einsicht, dass Zeit zur geschaffenen Welt gehört, wirkt heute erstaunlich modern: Auch die Kosmologie behandelt Raum und Zeit als Teile des physikalischen Universums.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'XI,12,14–13,16', year: 'um 400', status: 'paraphrase', quote: 'Es gab kein „Damals", wo keine Zeit war; du gehst den Zeiten nicht in der Zeit voraus; deine Jahre stehen alle zugleich.', original: 'anni tui omnes simul stant' },
        { kind: 'fachliteratur', author: 'Bertrand Russell', work: 'A History of Western Philosophy', year: '1945', ref: 'Kapitel über Augustinus', status: 'paraphrase', quote: 'Russell würdigt Augustinus\' Zeittheorie als großen Fortschritt gegenüber der griechischen Philosophie.', note: 'Russell war Atheist; Wortlaut vor wörtlicher Verwendung prüfen.' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Prediger über die Schöpfung',
      text: `Basilius erklärt das „Im Anfang" der Genesis als einen Anfang, der selbst noch nicht in der Zeit liegt: So wie der Anfang des Weges noch nicht der Weg ist, ist der Anfang der Zeit noch nicht Zeit. Gott brauchte kein Zeitintervall, um zu erschaffen; der Schöpfungsakt ist „unteilbar und augenblicklos". Damit wehrt Basilius die Vorstellung ab, Gott habe wie ein Handwerker zu einem bestimmten Zeitpunkt mit einer Arbeit begonnen.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Predigten über das Sechstagewerk (Hexaemeron)', ref: 'I,5–6', status: 'paraphrase', quote: 'Der Anfang der Zeit ist noch nicht Zeit; der Schöpfungsakt ist unteilbar und zeitlos.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Metaphysiker der Schöpfung',
      text: `Thomas unterscheidet zwischen Veränderung und Schöpfung. Veränderung setzt ein Substrat voraus, das sich wandelt; Schöpfung setzt gar nichts voraus und ist deshalb keine Veränderung, sondern die bleibende Beziehung des Geschöpfs zu Gott als Ursprung seines Seins. Zudem folgt aus der Ewigkeit des göttlichen Willens nicht die Ewigkeit seiner Wirkung: Gott will von Ewigkeit her, dass die Welt nicht immer existiert. Eine Wirkung folgt aus dem Willen so, wie der Wille sie bestimmt – auch mit einem Anfang.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.45 a.2–3', status: 'paraphrase', quote: 'Schöpfung ist keine Veränderung, sondern eine Beziehung des Geschöpfs zum Schöpfer als Ursprung seines Seins.' },
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I q.46 a.1', status: 'paraphrase', quote: 'Aus der Ewigkeit des göttlichen Willens folgt nicht, dass seine Wirkung ewig ist; er kann von Ewigkeit her eine Wirkung mit Anfang wollen.' },
      ],
    },
    {
      person: 'craig',
      role: 'als Verteidiger des Kalam-Arguments',
      text: `Craig nimmt Morristons Einwand ernst: Eine zeitlose, mechanisch wirkende Ursache hätte eine ewige Wirkung. Gerade das zeigt für ihn, dass die Ursache der Welt *personal* sein muss – nur ein freier Handelnder kann von Ewigkeit her beschließen, eine Welt mit Anfang zu erschaffen. Craig selbst vertritt, dass Gott ohne die Schöpfung zeitlos und mit der Schöpfung zeitlich ist: Im Moment der Schöpfung tritt Gott in eine reale Beziehung zur Zeit. Dadurch werden auch Gottes Handeln in der Geschichte und sein Antworten auf Gebete unmittelbar verständlich.`,
      sources: [
        { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Time and Eternity', year: '2001', status: 'paraphrase', quote: 'Gott ist ohne Schöpfung zeitlos und seit der Schöpfung zeitlich.' },
        { kind: 'fachliteratur', author: 'William Lane Craig & James D. Sinclair', work: '„The Kalam Cosmological Argument", in: Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase', quote: 'Eine zeitlose Ursache einer zeitlichen Wirkung ist am besten als freier, personaler Handelnder zu verstehen.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Erklärer für Laien',
      text: `Lewis widmet in „Mere Christianity" ein eigenes Kapitel der Frage „Zeit und jenseits der Zeit". Viele Menschen, so Lewis, fragen sich, wie Gott in derselben Minute Millionen Gebete hören kann. Die Schwierigkeit verschwindet, wenn man bedenkt, dass Gott nicht wie wir in einer Zeitlinie lebt: Für ihn gibt es keine Hast und kein „zu wenig Zeit". Lewis vergleicht Gott mit einem Autor, der in seinem Roman nicht wie die Figuren von Seite zu Seite gehetzt wird, sondern die ganze Geschichte überblickt – und dennoch jeder Figur ganz zugewandt ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity (Pardon, ich bin Christ)', ref: 'Buch IV, Kap. 3 „Time and Beyond Time"', year: '1952', status: 'paraphrase', quote: 'Gott lebt nicht in einer Zeitreihe; darum kann er jedem Beter seine ganze Aufmerksamkeit schenken.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'handeln-braucht-zeit',
      objection: `„Handeln heißt verändern: Erst ist etwas nicht, dann ist es. Ursachen gehen ihren Wirkungen voraus. Ohne Zeit gibt es kein Vorher, also keine Ursache. Ein zeitloser Gott kann nichts bewirken."`,
      objectionBy: 'Adolf Grünbaum / Richard Gale',
      answer: `Ursachen müssen nicht zeitlich vor ihren Wirkungen liegen. Eine Kugel, die auf einem Kissen liegt, verursacht die Mulde – gleichzeitig. Ein Magnet hält das Eisen, solange er da ist. Entscheidend ist die Abhängigkeit, nicht die zeitliche Reihenfolge. Und Schöpfung ist genau das: Die Welt *hängt* in ihrem Dasein von Gott ab – nicht, weil er sie irgendwann angestoßen hat, sondern weil er sie in jedem Augenblick trägt.`,
      followUps: [
        {
          id: 'gleichzeitig-ist-auch-zeitlich',
          objection: `„Deine Kugel und dein Kissen existieren aber in der Zeit. Gleichzeitige Verursachung ist immer noch zeitliche Verursachung. Du hast kein Beispiel für Wirken *ohne* Zeit."`,
          objectionBy: 'Graham Oppy',
          answer: `Das Beispiel zeigt etwas Grundsätzliches: Ursache-Sein heißt, dass etwas *von* etwas anderem abhängt – nicht, dass es *nach* ihm kommt. Wenn das so ist, gibt es keinen Grund, warum die Beziehung der Abhängigkeit an Zeit gebunden sein sollte. Thomas sagt, Schöpfung sei gar keine Veränderung, sondern die bleibende Beziehung des Geschöpfs zu seinem Ursprung. Dass wir für diesen einzigartigen Fall kein zweites Beispiel haben, liegt in der Natur der Sache: Es gibt nur einen Schöpfer.`,
          followUps: [
            {
              id: 'abhaengigkeit-erklaert-nichts',
              objection: `„Dann ist ‚Schöpfung' nur ein frommes Wort für ‚Abhängigkeit'. Das erklärt nichts. Warum nicht einfach sagen: Das Universum existiert, Punkt?"`,
              objectionBy: 'Sean Carroll (The Big Picture, 2016, sinngemäß)',
              answer: `Weil die Abhängigkeit im Sein die grundlegendste Erklärung überhaupt ist: Sie beantwortet, warum etwas existiert, das nicht aus sich selbst existieren muss. Das Universum mit seinen Gesetzen und Konstanten ist offensichtlich nicht notwendig – es hätte anders oder gar nicht sein können. „Es existiert, Punkt" ist keine Erklärung, sondern der Verzicht darauf.`,
              detail: `Siehe „Das Kontingenzargument ist ein Trugschluss – das Universum ist einfach da".`,
              followUps: [
                {
                  id: 'morriston-ewige-wirkung',
                  objection: `„Selbst wenn: Wenn Gottes zeitloser Wille zur Schöpfung hinreichend ist, dann müsste die Welt genauso ewig sein wie dieser Wille. Eine ewige Ursache hat eine ewige Wirkung. Woher kommt dann der Anfang?"`,
                  objectionBy: 'Wes Morriston (Faith and Philosophy, 2000)',
                  answer: `Bei einer mechanischen Ursache stimmt das – ein ewig kalter Raum würde Wasser ewig gefrieren lassen. Bei einem freien Willen nicht: Er kann von Ewigkeit her beschließen, dass eine Welt *mit Anfang* existiert. Thomas sagt: Aus der Ewigkeit des Willens folgt nicht die Ewigkeit der Wirkung, denn die Wirkung folgt so, wie der Wille sie bestimmt. Gerade dieser Einwand zeigt also, dass die Ursache der Welt personal sein muss.`,
                  followUps: [
                    {
                      id: 'zeitlose-wahl-unverstaendlich',
                      objection: `„Eine zeitlose Wahl ist unverständlich. Wählen heißt: erst unentschieden sein, dann entscheiden. Ohne Vorher kein Entscheiden."`,
                      objectionBy: 'Richard Gale / Wes Morriston',
                      answer: `Wir brauchen Zeit zum Entscheiden, weil wir nicht alles wissen und abwägen müssen. Das Wesentliche einer Wahl ist aber nicht das Zögern, sondern die Selbstbestimmung: dass der Wille sich aus sich heraus auf etwas richtet, ohne dazu gezwungen zu sein. Ein vollkommen wissender Geist bestimmt sich ohne Bedenkzeit. Auch bei Menschen ist die tiefste Entscheidung – etwa eine treue Liebe – oft kein Moment, sondern eine bleibende Ausrichtung.`,
                      questionsBack: [`Ist eine Entscheidung weniger frei, wenn man nicht erst lange zögern musste?`],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'was-tat-gott-vorher',
      objection: `„Was hat Gott denn gemacht, bevor er die Welt erschaffen hat? Eine Ewigkeit lang herumgesessen und sich gelangweilt? Und warum hat er dann gerade *dann* angefangen?"`,
      objectionBy: 'Manichäer (zur Zeit Augustins) / populärer Einwand',
      answer: `Die Frage setzt eine Zeit vor der Zeit voraus. Augustinus hat schon um 400 geantwortet: Es gab kein „Damals", als es keine Zeit gab, denn Gott hat die Zeit mit der Welt erschaffen. Es gab also keine endlose Wartezeit und keinen „Zeitpunkt", den Gott hätte wählen müssen. Und Gott war nicht einsam: Der Vater liebte den Sohn, „ehe denn die Welt gegründet ward" (Joh 17,24).`,
      followUps: [
        {
          id: 'sprache-verraet-vorher',
          objection: `„Du redest aber selbst ständig von Gott ‚vor' der Schöpfung. Deine eigene Sprache verrät, dass du dir eine Zeit vor der Zeit vorstellst."`,
          objectionBy: 'Adolf Grünbaum (sinngemäß)',
          answer: `Unsere Sprache ist an die Zeit gewöhnt – aber „vor" meint hier Rang und Ursprung, nicht eine frühere Uhrzeit, so wie die Prämissen „vor" der Schlussfolgerung kommen. Basilius sagt: Der Anfang des Weges ist noch nicht der Weg; der Anfang der Zeit ist noch nicht Zeit. Dass wir über das Zeitlose nur mit zeitlichen Bildern reden können, ist eine Grenze unserer Sprache, kein Widerspruch in der Sache.`,
          followUps: [
            {
              id: 'leere-zeit-newton',
              objection: `„Vielleicht gab es aber eine leere Zeit vor der Welt – wie Newtons absolute Zeit. Dann hat Gott eben doch unendlich lange gewartet und musste einen Zeitpunkt wählen."`,
              objectionBy: 'Samuel Clarke (in der Leibniz-Clarke-Debatte) / moderne Variante',
              answer: `Dann wäre die Frage, warum Gott nicht früher erschuf, tatsächlich ernst – genau deshalb argumentierte Leibniz, dass es keine leere, absolute Zeit gibt: Ohne Ereignisse gibt es keine Zeitpunkte, die sich unterscheiden ließen. Die moderne Physik ist hier näher bei Leibniz und Augustinus: Zeit ist ein Aspekt der physikalischen Welt, nicht ein leerer Behälter. Und auch wer mit Craig einen zeitlichen Gott annimmt, kann sagen: Ohne Schöpfung gibt es keine messbaren Zeitpunkte, keine „Wartezeit".`,
              sources: [
                { kind: 'fachliteratur', author: 'G. W. Leibniz & S. Clarke', work: 'Der Briefwechsel zwischen Leibniz und Clarke', year: '1715–1716', status: 'paraphrase', quote: 'Leibniz: Zeit ist eine Ordnung von Aufeinanderfolgen, kein absolutes Wesen; Gott musste keinen Zeitpunkt in einer leeren Zeit wählen.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-handelt-in-geschichte',
      objection: `„Der Gott der Bibel spricht mit Mose, führt Israel aus Ägypten, hört Gebete und wird Mensch. Das ist ein Gott, der in der Geschichte handelt – also in der Zeit. Euer zeitloser Gott ist Platons Gott, nicht der Gott Israels."`,
      objectionBy: 'Nicholas Wolterstorff (God Everlasting, 1975)',
      answer: `Die Bibel bezeugt beides: Gott ist „von Ewigkeit zu Ewigkeit" (Ps 90,2) *und* handelt in der Geschichte. Im klassischen Modell ist das kein Gegensatz: Gottes eine, ewige Tat hat ihre Wirkungen zu verschiedenen Zeiten – das Schilfmeer teilt sich zu seiner Zeit, die Menschwerdung geschieht „da die Zeit erfüllet ward" (Gal 4,4). Und wer das schwer findet, kann mit Craig sagen: Gott ist seit der Schöpfung in der Zeit. In keinem Fall ist das christliche Gottesbild widersprüchlich.`,
      followUps: [
        {
          id: 'gebet-heute-zeitlos',
          objection: `„Wenn Gott zeitlos ist, kann er auf mein Gebet von heute nicht antworten. Er hat ja alles schon ‚ewig' festgelegt, bevor ich überhaupt bete."`,
          objectionBy: 'Offener Theismus / populärer Einwand',
          answer: `Im zeitlosen Modell gibt es kein „bevor ich bete": Gott kennt dein Gebet in seiner einen Gegenwart und will in derselben Ewigkeit, darauf zu antworten. Dein Gebet ist also wirklich ein Grund für sein Handeln – nicht verspätet, sondern eingeplant. C. S. Lewis bemerkte, dass Gott gerade deshalb jedem Beter seine ganze Aufmerksamkeit schenken kann, weil er nicht wie wir von Minute zu Minute gehetzt ist.`,
          voices: [
            {
              person: 'stump',
              role: 'als Philosophin der Ewigkeit',
              text: `Stump argumentiert, dass ein ewiger Gott auf Gebete antworten kann, gerade weil alle Zeitpunkte ihm gegenwärtig sind. Ein Gebet, das zu einem bestimmten Zeitpunkt gesprochen wird, ist Gott in seiner ewigen Gegenwart präsent, und seine ewige Antwort wirkt sich zu dem Zeitpunkt aus, den er dafür bestimmt.`,
              sources: [
                { kind: 'fachliteratur', author: 'Eleonore Stump & Norman Kretzmann', work: '„Eternity", Journal of Philosophy 78', year: '1981', status: 'paraphrase', quote: 'Ein ewiger Gott kann auf zeitliche Ereignisse wie Gebete antworten.' },
              ],
            },
          ],
          followUps: [
            {
              id: 'menschwerdung-ist-werden',
              objection: `„Und die Menschwerdung? ‚Das Wort *ward* Fleisch' (Joh 1,14). ‚Werden' ist zeitlich. Ein zeitloses Wesen kann nicht etwas werden."`,
              objectionBy: 'Nicholas Wolterstorff / Richard Gale (sinngemäß)',
              answer: `Das Bekenntnis der Kirche sagt: Der Logos wurde Mensch „ohne Verwandlung". Das Werden liegt auf der Seite der Menschheit: Im Schoß der Theotokos beginnt eine menschliche Natur, die des ewigen Sohnes zu sein. Der Sohn selbst hört nicht auf, der Ewige zu sein. Athanasius sagt, der Logos sei im Leib gewesen und habe zugleich das All erfüllt. Die Zeit wird in Christus vom Ewigen ergriffen, nicht der Ewige von der Zeit verschlungen.`,
              sources: [
                { kind: 'bibel', work: 'Johannes', ref: '1,14', quote: `Und das Wort ward Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit …`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '17', status: 'paraphrase', quote: 'Der Logos war im Leib und erfüllte doch zugleich das All; er war nicht eingeschlossen.' },
              ],
              followUps: [
                {
                  id: 'christen-uneinig',
                  objection: `„Sogar eure eigenen Philosophen sind sich nicht einig – Craig sagt zeitlich, Stump sagt zeitlos. Wenn nicht einmal ihr wisst, wie euer Gott zur Zeit steht, ist der Begriff verworren."`,
                  objectionBy: 'Graham Oppy',
                  answer: `Uneinigkeit über das *Wie* ist keine Verworrenheit im *Dass*. Physiker streiten bis heute, was Zeit überhaupt ist (A-Theorie, B-Theorie, emergente Zeit) – niemand folgert daraus, dass es keine Zeit gibt. Der Glaube der Kirche hält fest: Gott ist ewig, er ist der Schöpfer der Zeit und handelt in ihr. Für beide philosophischen Modelle gibt es ausgearbeitete, widerspruchsfreie Darstellungen.`,
                  questionsBack: [`Folgt aus dem Streit der Physiker über die Natur der Zeit, dass die Zeit ein inkohärenter Begriff ist?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'personsein-braucht-zeit',
      objection: `„Ein Geist ist ein Strom von Gedanken, Gefühlen und Entschlüssen. Personsein heißt, ein Bewusstseinsleben zu haben – und das ist zeitlich. Eine zeitlose Person ist ein Widerspruch."`,
      objectionBy: 'Graham Oppy / Richard Gale',
      answer: `Das Wesentliche am Geist ist nicht das Nacheinander, sondern das Erkennen, Wollen und Lieben. Wir denken schrittweise, weil wir begrenzt sind; ein vollkommener Geist erkennt alles in einem einzigen Akt. Und die christliche Gotteslehre kennt ein ewiges personales Leben: die Liebe von Vater, Sohn und Geist, die älter ist als jede Zeit (Joh 17,24).`,
      followUps: [
        {
          id: 'zeitlos-gleich-erstarrt',
          objection: `„Ein zeitloses Leben ist ein erstarrtes Leben – wie eine Fotografie. Ohne Wandel kein Leben."`,
          objectionBy: 'Charles Hartshorne / Prozessphilosophie (sinngemäß)',
          answer: `Boethius definiert Ewigkeit gerade als „ganzen, zugleich und vollkommenen *Besitz* unbegrenzten Lebens". Unser zeitliches Leben ist ein Verlieren: Das Gestern ist fort, das Morgen noch nicht da. Gottes Leben verliert nichts und wartet auf nichts. Das ist nicht weniger Leben, sondern seine Fülle – eher wie ein Augenblick höchster Freude, den man festhalten möchte, als wie ein Foto.`,
          sources: [
            { kind: 'fachliteratur', author: 'Boethius', work: 'Der Trost der Philosophie', ref: 'V, Prosa 6', quote: `Ewigkeit ist also der ganze, zugleich und vollkommene Besitz unbegrenzbaren Lebens.`, original: 'Aeternitas igitur est interminabilis vitae tota simul et perfecta possessio.', translation: 'eigene Übersetzung', status: 'verbatim' },
          ],
          questionsBack: [`Hast du je einen Moment erlebt, in dem du dir gewünscht hast, er möge nicht vergehen? War das weniger Leben oder mehr?`],
        },
      ],
    },
    {
      id: 'physik-zeit-ohne-gott',
      objection: `„Die Physik zeigt, dass die Zeit selbst mit dem Urknall entstanden ist oder in der Quantenkosmologie ‚auftaucht' – etwa in Hawkings No-Boundary-Modell. Dann braucht man keinen zeitlosen Gott, der sie erschafft."`,
      objectionBy: 'Stephen Hawking (A Brief History of Time, 1988) / Sean Carroll',
      answer: `Dass die Zeit mit dem Universum beginnt, ist genau das, was Augustinus behauptete – die Physik bestätigt hier die christliche Sicht eher, als dass sie sie widerlegt. Hawkings Modell beschreibt, *wie* die Zeit aus einem Zustand ohne Zeitrichtung hervorgehen könnte. Es erklärt nicht, warum es diesen Zustand und seine Gesetze überhaupt gibt. Die Frage nach dem Grund des Daseins bleibt.`,
      detail: `Siehe „Hawkings No-Boundary-Vorschlag macht einen Schöpfer überflüssig" und „Das Kontingenzargument ist ein Trugschluss".`,
      followUps: [
        {
          id: 'grund-des-daseins-sinnlos',
          objection: `„Die Frage nach einem ‚Grund des Daseins' außerhalb der Zeit ist sinnlos. Gründe und Ursachen gibt es nur innerhalb des Universums."`,
          objectionBy: 'Sean Carroll / Adolf Grünbaum',
          answer: `Das ist eine philosophische Behauptung, keine physikalische Entdeckung – und sie richtet sich selbst. Wenn Fragen nach Gründen nur innerhalb des Universums sinnvoll sind, dann ist auch die Behauptung „Das Universum braucht keinen Grund" nicht durch Physik gedeckt. Die meisten Menschen – und viele Philosophen – halten die Frage „Warum gibt es überhaupt etwas und nicht nichts?" für die sinnvollste aller Fragen.`,
          questionsBack: [`Mit welchem physikalischen Experiment hast du festgestellt, dass die Frage nach dem Grund des Universums sinnlos ist?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Muss eine Ursache ihrer Wirkung zeitlich vorausgehen – oder reicht es, dass die Wirkung von ihr abhängt?`,
    `Was genau wäre „vor" der Zeit, wenn die Zeit selbst einen Anfang hat?`,
    `Warum könnte ein freier Wille nicht von Ewigkeit her beschließen, eine Welt mit Anfang zu erschaffen?`,
    `Wenn Physiker sich über das Wesen der Zeit nicht einig sind – ist dann die Zeit ein inkohärenter Begriff?`,
  ],
  avoid: [
    `„Gott ist einfach außerhalb von allem, das kann man nicht verstehen." – Zu früh ins Geheimnis flüchten wirkt wie Ausweichen. Erst die Logik klären.`,
    `So tun, als sei Zeitlosigkeit Dogma und die zeitliche Sicht Häresie. Die Kirche bekennt Gottes Ewigkeit; die philosophische Ausdeutung ist offen.`,
    `Augustinus' Scherz („Gott bereitete die Hölle für die, die so etwas fragen") als Antwort bringen – Augustinus selbst lehnte ihn ab.`,
  ],
  concessions: [
    `Wie ein zeitloser Gott genau mit zeitlichen Ereignissen verbunden ist, ist eine der schwierigsten Fragen der Religionsphilosophie; auch christliche Philosophen sind uneins.`,
    `Unsere Sprache und Vorstellung sind zeitgebunden; jede Rede über das Zeitlose bleibt analog und unvollkommen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse', ref: 'Buch XI', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Time and Eternity', year: '2001', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Brian Leftow', work: 'Time and Eternity', year: '1991', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Gregory E. Ganssle (Hg.)', work: 'God and Time: Four Views', year: '2001', status: 'paraphrase' },
    { kind: 'gegner', author: 'Richard M. Gale', work: 'On the Nature and Existence of God', year: '1991', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Ewigkeit', 'Zeit', 'Schöpfung', 'Augustinus', 'Kausalität', 'Kalam'],
  related: [
    'gottes-eigenschaften/allwissenheit-unveraenderlichkeit',
    'gottes-eigenschaften/warum-schoepfung',
    'gottesbeweise/kalam-widerlegt',
    'gottesbeweise/kontingenz-trugschluss',
    'kosmologie/vor-dem-urknall-sinnlos',
    'kosmologie/hawking-keine-grenze',
  ],
};

export default claim;
