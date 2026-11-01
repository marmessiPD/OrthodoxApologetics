import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ockham-unnoetige-hypothese',
  title: `„Ockhams Rasiermesser: Gott ist eine unnötige Hypothese."`,
  proponents: [
    { name: 'Stephen Hawking & Leonard Mlodinow', role: 'Theoretischer Physiker / Physiker und Autor', work: 'The Grand Design (2010)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: '„Why (Almost All) Cosmologists Are Atheists" (Vortrag/Aufsatz 2005); The Big Picture (2016)' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'The Best Argument against God (2013) – Argument aus der theoretischen Sparsamkeit' },
    { name: 'Pierre-Simon Laplace', role: 'Mathematiker und Astronom (1749–1827)', work: 'Traité de mécanique céleste (1799–1825); zugeschriebene Antwort an Napoleon' },
  ],
  steelman: `Das Sparsamkeitsprinzip ist ein Grundpfeiler rationalen Denkens: Man soll nicht mehr Annahmen machen als nötig. Die Naturwissenschaft erklärt die Entwicklung des Universums, die Entstehung der Sterne, die Chemie und die Evolution des Lebens, ohne je auf Gott zurückgreifen zu müssen. Laplace soll Napoleon auf die Frage, wo in seinem Werk Gott vorkomme, geantwortet haben: „Diese Hypothese brauchte ich nicht." Hawking und Mlodinow erklären, es sei nicht nötig, Gott zu bemühen, um die Zündschnur des Universums anzuzünden. Graham Oppy argumentiert: Theismus und Naturalismus erklären die Daten gleich gut, aber der Theismus postuliert zusätzlich ein unendliches, übernatürliches Wesen – also ist der Naturalismus die sparsamere und damit bessere Theorie.`,
  biblical: {
    summary: `Die Bibel stellt Gott nicht als zusätzliche Annahme neben die Natur, die man bei Bedarf hinzunimmt, sondern als den Grund, warum es Natur überhaupt gibt: „Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist" (Hebr 11,3); „Du hast sie alle weislich geordnet" (Ps 104,24). Nach Paulus ist Gottes Kraft „an den Werken" erkennbar (Röm 1,20) – Gott ist also gerade zur Erklärung der Welt „nötig".`,
    detail: `- **Hebr 11,3:** Die Welt besteht durch Gottes Wort – nicht als Lückenfüller, sondern als Ursprung des Ganzen.
- **Kol 1,16–17:** „Es ist alles durch ihn und zu ihm geschaffen … und es besteht alles in ihm" – Gott ist die Voraussetzung jeder Erklärung, nicht eine Erklärung unter anderen.
- **Ps 104,24:** Die Weisheit der Ordnung verweist auf den Ordnenden.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '104,24', quote: `HERR, wie sind deine Werke so groß und viel! Du hast sie alle weislich geordnet, und die Erde ist voll deiner Güter.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,3', quote: `Durch den Glauben merken wir, daß die Welt durch Gottes Wort fertig ist, daß alles, was man sieht, aus nichts geworden ist.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,16–17', quote: `Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und das Unsichtbare … es ist alles durch ihn und zu ihm geschaffen; und er ist vor allem, und es besteht alles in ihm.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter lehren die *Einfachheit* Gottes: Gott ist nicht aus Teilen zusammengesetzt, sondern einer, ungeteilt, ohne Zusammensetzung. Johannes von Damaskus fasst zusammen, dass die göttliche Natur einfach und nicht zusammengesetzt ist. Gott ist damit nicht ein kompliziertes Zusatzwesen, sondern die einfachste denkbare Wirklichkeit, aus der alle Vielfalt hervorgeht. Für die Kirche ist Gott keine Hypothese, die man hinzufügt, sondern das Sein, in dem alles besteht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,8–9', status: 'paraphrase', quote: 'Die göttliche Natur ist einfach, nicht zusammengesetzt, ungeteilt und unveränderlich.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '41–42', status: 'paraphrase', quote: 'Der eine Logos ordnet und erhält das All; ohne ihn fiele es ins Nichts zurück.' },
    ],
  },
  opposingView: {
    summary: `Das „Rasiermesser" ist nach Wilhelm von Ockham (um 1287–1347) benannt, einem Franziskaner und Theologen. Er formulierte etwa: „Eine Vielheit ist niemals ohne Notwendigkeit anzunehmen" (*numquam ponenda est pluralitas sine necessitate*); die bekannte Fassung „Entia non sunt multiplicanda praeter necessitatem" stammt erst von John Punch (1639). In der Wissenschaftstheorie gilt Sparsamkeit als nützliche Faustregel für die Wahl zwischen *gleich erklärungsstarken* Theorien, nicht als Wahrheitskriterium. Man unterscheidet zudem ontologische Sparsamkeit (wenige Arten von Dingen) und theoretische Einfachheit (wenige unerklärte Grundannahmen). Die berühmte Laplace-Anekdote ist erst Jahrzehnte später und in wechselndem Wortlaut überliefert; sie bezog sich, wenn sie zutrifft, wohl auf Newtons Annahme göttlicher Bahnkorrekturen.`,
    sources: [
      { kind: 'fachliteratur', author: 'Wilhelm von Ockham', work: 'Ordinatio (Sentenzenkommentar)', ref: 'I, d. 30, q. 1', status: 'paraphrase', quote: 'Nichts ist ohne angegebenen Grund anzunehmen, es sei denn, es ist durch sich bekannt, durch Erfahrung erkannt oder durch die Autorität der Heiligen Schrift bewiesen.', original: 'nihil debet poni sine ratione assignata nisi sit per se notum vel per experientiam cognitum vel per auctoritatem Scripturae Sacrae probatum', note: 'Lateinischer Wortlaut nach gängiger Zitierung; vor wörtlicher Verwendung prüfen.' },
      { kind: 'gegner', author: 'Pierre-Simon Laplace (zugeschrieben)', work: 'Anekdote: Antwort an Napoleon', quote: `Sire, je n'avais pas besoin de cette hypothèse-là.`, status: 'unverified', note: 'Quellenprüfung Nov. 2026: Der berühmte Wortlaut ist erst Jahrzehnte später gedruckt überliefert, v. a. bei Augustus De Morgan, A Budget of Paradoxes (1872). Ein zeitgenössischer Bericht – William Herschels Tagebuchnotiz über ein Gespräch mit Napoleon und Laplace in Malmaison (1802) – gibt den Inhalt anders wieder: Laplace habe Bau und Erhaltung des Weltsystems auf eine Kette natürlicher Ursachen zurückgeführt. Datum, Wortlaut und Sinn des Bonmots bleiben unsicher; nicht als gesichertes Zitat verwenden.' },
      { kind: 'gegner', author: 'Stephen Hawking & Leonard Mlodinow', work: 'The Grand Design', year: '2010', quote: `It is not necessary to invoke God to light the blue touch paper and set the universe going.`, status: 'verbatim' },
    ],
  },
  quickAnswer: `Ockhams Rasiermesser sagt: Nimm nicht mehr an, als nötig ist, *um die Daten zu erklären*. Die Frage ist also genau, ob Gott nötig ist – um zu erklären, warum es überhaupt etwas gibt, warum das Universum einen Anfang hat, warum es Naturgesetze gibt, warum sie fein abgestimmt sind, warum es Bewusstsein gibt. Wenn der Naturalismus das nicht erklärt, ist er nicht „sparsamer", sondern unvollständig – die sparsamste Theorie wäre sonst eine, die gar nichts erklärt. Übrigens war Ockham selbst ein Franziskanermönch, der an Gott glaubte. Und Gott ist nach klassischer Lehre gerade das Einfachste, was es gibt.`,
  keyPoints: [
    `**Das Rasiermesser ist ein Stichentscheid:** Es gilt nur zwischen Erklärungen, die die Daten *gleich gut* erklären. Weniger Annahmen, die weniger erklären, sind kein Fortschritt.`,
    `**Ist Gott nötig?** Für die Existenz der Welt, ihren Anfang, ihre Gesetze, die Feinabstimmung, das Bewusstsein und die Auferstehung bietet der Naturalismus keine oder nur spekulative Erklärungen. Genau hier wird Gott „nötig".`,
    `**Unerklärte Tatsachen zählen auch:** Der Naturalismus spart *eine* Entität, muss dafür aber viele Grundtatsachen unerklärt hinnehmen. Theoretische Einfachheit spricht für eine einheitliche Erklärung.`,
    `**Gott ist einfach:** Ein einziges Wesen mit unbegrenzter Macht, Erkenntnis und Freiheit ist nach Swinburne die einfachste denkbare Hypothese; die Väter lehren die Einfachheit Gottes.`,
    `**Ockham war Theologe:** Er ließ als Gründe ausdrücklich auch Selbstevidenz, Erfahrung und die Heilige Schrift gelten. Sein Prinzip gegen Gott zu wenden, ist ein Anachronismus.`,
    `**Die Laplace-Anekdote ist unsicher überliefert** und betraf, wenn überhaupt, die Himmelsmechanik – nicht die Frage, warum es ein Universum gibt.`,
  ],
  argument: {
    name: 'Das richtig angewandte Rasiermesser',
    summary: 'Sparsamkeit spricht nur dann für den Naturalismus, wenn er die Daten ebenso gut erklärt – und das tut er nicht.',
    premises: [
      {
        text: 'P1: Ockhams Rasiermesser bevorzugt von zwei Hypothesen die einfachere nur dann, wenn beide die Daten gleich gut erklären.',
        support: `So wird das Prinzip in der Wissenschaftstheorie verstanden. Eine Hypothese, die gar nichts annimmt, wäre sonst immer die beste.`,
      },
      {
        text: 'P2: Der Naturalismus erklärt zentrale Daten – die Existenz eines kontingenten Universums, seinen Anfang, die Existenz und Feinabstimmung der Naturgesetze, Bewusstsein und Vernunft, objektive Moral, die Entstehung des Auferstehungsglaubens – schlechter als der Theismus oder gar nicht.',
        support: `Siehe die Claims zum Kalam- und Kontingenzargument, zum Bewusstsein, zur Vernunft und zur Feinabstimmung. Der Naturalismus muss diese Daten meist als Grundtatsachen ohne Erklärung hinnehmen oder auf künftige Erklärungen verweisen.`,
      },
      {
        text: 'P3: Der Theismus ist zudem eine einfache Hypothese: ein einziges Wesen ohne Teile, mit unbegrenzten statt willkürlich begrenzten Eigenschaften.',
        support: `Swinburne argumentiert, dass „unbegrenzt" einfacher ist als jede bestimmte endliche Größe, und dass eine Person mit unbegrenzter Macht, Erkenntnis und Freiheit daher die einfachste denkbare Person ist.`,
        sources: [
          { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Simplicity as Evidence of Truth (Aquinas Lecture)', year: '1997', status: 'paraphrase', quote: 'Einfachheit als Wahrheitsindiz und die Einfachheit der Gotteshypothese.' },
        ],
      },
    ],
    conclusion: 'Also spricht Ockhams Rasiermesser nicht gegen Gott; richtig angewandt, begünstigt es eher die einfachere und erklärungsstärkere Hypothese des Theismus.',
  },
  voices: [
    {
      person: 'swinburne',
      role: 'als Theoretiker der Einfachheit',
      text: `Swinburne hat ausführlich über Einfachheit als Wahrheitskriterium gearbeitet. Er unterscheidet zwischen der Zahl der Entitäten und der Einfachheit einer Theorie: Eine gute Erklärung führt viele Phänomene auf wenige, einfache Ursachen zurück. Der Theismus erklärt mit einer einzigen Annahme – einer Person mit unbegrenzter Macht, Erkenntnis und Freiheit –, warum es ein geordnetes Universum mit bewussten Wesen gibt. Unbegrenzte Eigenschaften sind dabei einfacher als willkürlich begrenzte: Eine Kraft von genau 3,7 Einheiten verlangt eine Erklärung, eine unbegrenzte nicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Is There a God?', year: '1996', ref: 'Kap. 3', status: 'paraphrase', quote: 'Die Einfachheit der Gotteshypothese.' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2. Aufl. 2004', ref: 'Kap. 5', status: 'paraphrase', quote: 'Theismus als einfache, erklärungsstarke Hypothese.' },
      ],
    },
    {
      person: 'wilhelm-ockham',
      role: 'als Logiker und Theologe, nach dem das Prinzip benannt ist',
      text: `Ockham formulierte das Sparsamkeitsprinzip in seinen theologischen und logischen Schriften, um überflüssige begriffliche Konstruktionen der Scholastik zu kritisieren – nicht um Gott zu bestreiten. Als Gründe, etwas anzunehmen, ließ er ausdrücklich gelten, was durch sich selbst einleuchtet, was durch Erfahrung erkannt ist und was durch die Autorität der Heiligen Schrift bewiesen ist. Ockham war Franziskaner und Theologe; die Existenz Gottes stand für ihn außer Frage, auch wenn er die Reichweite philosophischer Gottesbeweise vorsichtiger beurteilte als manche Zeitgenossen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Wilhelm von Ockham', work: 'Ordinatio (Sentenzenkommentar)', ref: 'I, d. 30, q. 1', status: 'paraphrase', quote: 'Gründe für eine Annahme: Selbstevidenz, Erfahrung, Autorität der Schrift.' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker im Gespräch mit Hawking',
      text: `Lennox hat auf Hawkings und Mlodinows Behauptung, das Universum könne sich dank eines Gesetzes wie der Schwerkraft selbst aus dem Nichts erschaffen, mit einer eigenen Schrift geantwortet. Seine Kritik: Ein Naturgesetz erschafft nichts; es beschreibt, was unter bestimmten Bedingungen geschieht. Die Gesetze der Arithmetik haben noch nie Geld auf ein Bankkonto gebracht – man muss erst etwas einzahlen. Wer die Schwerkraft voraussetzt, setzt bereits etwas voraus und nicht nichts. Gott „überflüssig" zu nennen, verwechsle die Frage nach dem Mechanismus mit der Frage nach dem Urheber.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God and Stephen Hawking: Whose Design Is It Anyway?', year: '2011', status: 'paraphrase', quote: 'Naturgesetze beschreiben, erschaffen aber nichts; Selbsterschaffung aus dem Nichts ist widersprüchlich.' },
      ],
    },
    {
      person: 'feser',
      role: 'als Metaphysiker',
      text: `Feser betont, dass Gott in der klassischen Tradition keine „Hypothese" im naturwissenschaftlichen Sinn ist – kein zusätzlicher Mechanismus, der mit physikalischen Erklärungen konkurriert. Gott ist der Grund, warum es überhaupt Dinge mit Ursachen und Gesetzen gibt. Wer Ockhams Rasiermesser gegen Gott anwendet, behandelt ihn wie ein weiteres Ding in der Welt, das man streichen kann, wenn die Physik ohne es auskommt. Die Gottesbeweise behaupten aber gerade, dass ohne die erste Ursache überhaupt nichts existierte, was die Physik beschreiben könnte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Edward Feser', work: 'Five Proofs of the Existence of God', year: '2017', ref: 'Kap. 7', status: 'paraphrase', quote: 'Gott ist keine konkurrierende naturwissenschaftliche Hypothese, sondern der Grund der Existenz von allem.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'wissenschaft-ohne-gott',
      objection: `„Die Wissenschaft erklärt alles, was sie erklärt, ohne Gott. Nach Ockhams Rasiermesser streichen wir ihn also."`,
      objectionBy: 'Sean Carroll / Stephen Hawking',
      targetsPremise: 1,
      answer: `Das Rasiermesser streicht nur, was zur Erklärung der Daten nicht nötig ist. Die Wissenschaft erklärt, wie sich die Welt nach ihren Gesetzen entwickelt. Aber sie erklärt nicht, warum es überhaupt eine Welt gibt, warum sie Gesetze hat, warum diese mathematisch und lebensfreundlich abgestimmt sind und warum es Bewusstsein gibt. Für genau diese Daten ist Gott die Erklärung – also ist er nicht überflüssig.`,
      questionsBack: [`Welche naturwissenschaftliche Theorie erklärt, warum es überhaupt Naturgesetze gibt?`],
      followUps: [
        {
          id: 'hawking-schwerkraft',
          objection: `„Hawking hat gezeigt: Weil es ein Gesetz wie die Schwerkraft gibt, kann und wird sich das Universum selbst aus dem Nichts erschaffen."`,
          objectionBy: 'Stephen Hawking (The Grand Design, 2010)',
          targetsPremise: 2,
          answer: `Wenn es ein Gesetz wie die Schwerkraft gibt, gibt es bereits etwas – und nicht nichts. Schwerkraft ist eine Eigenschaft von Masse-Energie und Raumzeit. Naturgesetze beschreiben, was geschieht; sie bewirken nichts. Und „sich selbst erschaffen" ist widersprüchlich: Etwas müsste schon existieren, um sich zu erschaffen. Hawkings Satz verschiebt die Frage nur auf die Gesetze – woher kommen sie?`,
          sources: [
            { kind: 'gegner', author: 'Stephen Hawking & Leonard Mlodinow', work: 'The Grand Design', year: '2010', quote: `Because there is a law such as gravity, the universe can and will create itself from nothing.`, status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'm-theorie-multiversum',
              objection: `„Die M-Theorie und das Multiversum erklären, warum es Gesetze gibt und warum sie bei uns lebensfreundlich sind. Gott ist überflüssig."`,
              objectionBy: 'Stephen Hawking & Leonard Mlodinow',
              targetsPremise: 2,
              answer: `Die M-Theorie ist bisher experimentell nicht bestätigt, und das Multiversum ist eine Hypothese ohne direkte Beobachtung – ausgerechnet ein Gegner Gottes greift hier auf eine Unmenge unbeobachtbarer Welten zurück, was mit Ockhams Rasiermesser schwer vereinbar ist. Zudem bräuchte ein Mechanismus, der Universen erzeugt, selbst fein abgestimmte Gesetze. Die Frage wird verschoben, nicht beantwortet.`,
              detail: `Siehe „Das Multiversum erklärt die Feinabstimmung".`,
            },
          ],
        },
        {
          id: 'gott-komplizierteste-hypothese',
          objection: `„Gott ist doch die komplizierteste Hypothese überhaupt – ein allwissender, allmächtiger Geist. Das ist das Gegenteil von sparsam."`,
          objectionBy: 'Richard Dawkins',
          targetsPremise: 3,
          answer: `Hier wird die Fülle dessen, was Gott weiß und kann, mit der Zusammensetzung seines Wesens verwechselt. Gott ist nach klassischer Lehre nicht aus Teilen zusammengesetzt – er ist einfach. Und unbegrenzte Eigenschaften sind einfacher als willkürlich begrenzte: Eine Macht von genau einem bestimmten Betrag verlangt eine Erklärung, unbegrenzte Macht nicht. Ein Wesen ist sparsamer als eine Vielzahl unerklärter Grundtatsachen.`,
          detail: `Siehe „Wer hat dann Gott erschaffen?" (Dawkins' Boeing-747-Argument).`,
        },
      ],
    },
    {
      id: 'laplace-hypothese',
      objection: `„Laplace sagte zu Napoleon: ‚Diese Hypothese brauchte ich nicht.' Die moderne Wissenschaft braucht Gott nicht."`,
      objectionBy: 'Häufiger Einwand, u. a. bei Richard Dawkins',
      answer: `Diese Anekdote ist erst Jahrzehnte später und in wechselndem Wortlaut überliefert; man sollte sie nicht als gesichertes Zitat verwenden. Wenn Laplace so etwas sagte, ging es wohl um Newtons Annahme, Gott müsse die Planetenbahnen korrigieren – Laplace zeigte, dass die Bahnen auch so stabil sind. Das betraf eine Lücke in der Himmelsmechanik, nicht die Frage, warum es überhaupt Planeten, Gesetze und ein Universum gibt.`,
      followUps: [
        {
          id: 'mehr-wissenschaft-weniger-gott',
          objection: `„Gerade das ist das Muster: Je mehr Wissenschaft, desto weniger Gott."`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Für Lückenbüßer-Götter stimmt das. Aber die tiefsten Fragen sind mit dem Fortschritt der Wissenschaft nicht kleiner, sondern größer geworden: Dass das Universum einen Anfang hat, dass seine Konstanten fein abgestimmt sind, dass es mathematischen Gesetzen folgt – das wissen wir erst durch moderne Physik. Viele große Naturwissenschaftler – Faraday, Maxwell, Planck, Lemaître, der Priester und Vater der Urknalltheorie, oder heute Francis Collins – sahen in ihrer Forschung keinen Gegensatz zum Glauben.`,
          detail: `Siehe „Gott ist nur ein Lückenbüßer – die Wissenschaft schließt die Lücken".`,
        },
      ],
    },
    {
      id: 'oppy-sparsamkeit',
      objection: `„Theismus und Naturalismus erklären die Daten gleich gut – beide enden bei etwas Unerklärtem. Aber der Naturalismus postuliert eine Entität weniger. Also gewinnt er durch Sparsamkeit."`,
      objectionBy: 'Graham Oppy (The Best Argument against God, 2013)',
      targetsPremise: 2,
      answer: `Gleich gut erklären sie die Daten eben nicht. Der Naturalismus muss die Existenz eines kontingenten Universums, seinen Anfangszustand, die Gesetze, die Feinabstimmung, das Bewusstsein und die Moral als getrennte, unerklärte Grundtatsachen hinnehmen. Der Theismus führt sie auf eine einzige Ursache zurück. Sparsamkeit zählt nicht nur Dinge, sondern auch unerklärte Grundannahmen – und da ist der Theismus im Vorteil.`,
      followUps: [
        {
          id: 'gott-brute-fact-gleichstand',
          objection: `„Auch dein Gott ist eine unerklärte Grundtatsache. Also steht es unentschieden – und der Naturalismus hat eine Entität weniger."`,
          objectionBy: 'Graham Oppy',
          targetsPremise: 3,
          answer: `Gott wird als notwendiges Wesen verstanden, das nicht anders sein kann – keine willkürliche Tatsache, sondern das, worin jede Erklärung endet. Das Universum dagegen trägt alle Merkmale des Kontingenten: Es hätte andere Gesetze und Konstanten haben oder gar nicht existieren können. Eine notwendige, einheitliche Erklärung ist kein Gleichstand mit vielen kontingenten Zufällen.`,
          detail: `Siehe „Das Kontingenzargument ist ein Trugschluss – das Universum ist einfach da".`,
        },
      ],
    },
    {
      id: 'prinzip-unabhaengig-von-ockham',
      objection: `„Egal, woran Ockham glaubte – das Prinzip gilt unabhängig von seinem Erfinder."`,
      objectionBy: 'Alex O\'Connor',
      answer: `Völlig richtig – ein Prinzip ist nicht deshalb wahr oder falsch, weil sein Urheber Christ war. Aber dann wollen wir es auch richtig anwenden: Es ist eine Entscheidungshilfe zwischen gleich guten Erklärungen, keine Waffe, die alles abschneidet, was einem nicht passt. Ockham selbst ließ Erfahrung und Offenbarung als Gründe gelten. Die Frage bleibt also: Erklärt die Welt sich selbst – oder braucht sie Gott?`,
    },
    {
      id: 'aether-phlogiston-gott',
      objection: `„Die Wissenschaftsgeschichte ist ein Friedhof überflüssiger Wesenheiten: Phlogiston, Äther, Lebenskraft. Jedes Mal hat das Rasiermesser sie entfernt, weil die Erklärung ohne sie auskam. Gott ist einfach der letzte Äther."`,
      objectionBy: 'Sean Carroll / Daniel Dennett',
      answer: `Äther und Phlogiston wurden gestrichen, weil eine *bessere Erklärung* dieselben Daten abdeckte: Die Relativitätstheorie erklärte die Lichtausbreitung ohne Äther, die Oxidationschemie die Verbrennung ohne Phlogiston. Gott ist aber nicht als Ursache einzelner physikalischer Vorgänge eingeführt, sondern als Grund dafür, dass es überhaupt eine Welt mit Gesetzen gibt, die verständlich ist und bewusste Wesen hervorbringt. Für *diese* Daten hat die Physik keine Ersatzerklärung – sie setzt sie voraus.`,
      detail: `Bemerkenswert ist, dass das Rasiermesser in der heutigen Kosmologie eher gegen manche naturalistischen Modelle spricht: Um die Feinabstimmung ohne Gott zu erklären, nehmen viele Physiker eine riesige, womöglich unendliche Zahl unbeobachtbarer Universen an. Wer Gott wegen fehlender Sparsamkeit streicht, aber unzählige Welten akzeptiert, wendet das Rasiermesser ungleich an.`,
      questionsBack: [`Welche Theorie erklärt die Existenz und Verständlichkeit der Naturgesetze so, wie die Oxidationschemie die Verbrennung erklärt?`],
      followUps: [
        {
          id: 'multiversum-folgt-aus-physik',
          objection: `„Das Multiversum wird nicht erfunden, um Gott zu vermeiden. Es folgt aus gut motivierten Theorien wie der ewigen Inflation. Wenn eine einfache Theorie viele Universen vorhersagt, ist das kein Verstoß gegen Ockham – Ockham zählt Annahmen, nicht Universen."`,
          objectionBy: 'Sean Carroll',
          answer: `Das ist ein fairer Punkt: Für manche Physiker ist das Multiversum eine Folge ihrer Theorien, kein Fluchtweg. Aber diese Theorien sind unbestätigt, und namhafte Kosmologen wie George Ellis und Paul Steinhardt kritisieren sie scharf. Zudem verschiebt das Multiversum die Frage nur: Auch der Mechanismus, der Universen erzeugt, braucht passende Gesetze und Anfangsbedingungen. Und es erzeugt ein eigenes Problem, das du selbst ernst nimmst – die Boltzmann-Gehirne.`,
          detail: `Robin Collins argumentiert, dass ein „Universengenerator" (etwa ein Inflationsfeld mit Stringlandschaft) selbst nur unter sehr speziellen Gesetzen funktioniert – die Feinabstimmung wird verlagert, nicht beseitigt. Ellis betont, dass Universen jenseits unseres Horizonts prinzipiell nicht beobachtbar sind, und fragt, ob eine solche Hypothese noch Physik ist.`,
          voices: [
            {
              person: 'robin-collins',
              role: 'als Philosoph der Feinabstimmung',
              text: `Collins zeigt, dass gängige Multiversum-Modelle ihrerseits eine Reihe passender Zutaten brauchen: ein Feld, das Inflation antreibt, Mechanismen, die verschiedene Konstanten erzeugen, und Gesetze, die stabile Materie ermöglichen. Damit steht der Naturalist erneut vor der Frage, warum gerade diese lebensermöglichenden Grundgesetze gelten.`,
              sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: The Blackwell Companion to Natural Theology', year: '2009', status: 'paraphrase' }],
            },
          ],
          sources: [
            { kind: 'wissenschaft', author: 'George F. R. Ellis', work: '„Does the Multiverse Really Exist?", Scientific American 305', year: '2011', status: 'paraphrase', quote: 'Multiversum-Hypothesen seien prinzipiell nicht durch Beobachtung prüfbar.' },
          ],
          followUps: [
            {
              id: 'boltzmann-gehirne-constraint',
              objection: `„Boltzmann-Gehirne sind ein Problem für *bestimmte* kosmologische Modelle – genau deshalb verwerfen wir diese Modelle. Das ist eine Randbedingung für gute Physik, keine Widerlegung des Naturalismus."`,
              objectionBy: 'Sean Carroll („Why Boltzmann Brains Are Bad", 2017)',
              answer: `Achte darauf, *warum* du diese Modelle verwirfst: nicht, weil eine Messung ihnen widerspricht, sondern weil sie dazu führen würden, dass du deinem eigenen Denken nicht mehr trauen kannst – du nennst sie „kognitiv instabil". Das ist genau das Prinzip, das Plantinga gegen den Naturalismus anwendet: Ein Weltbild darf das Vertrauen in die Vernunft nicht untergraben, mit der man es begründet. Du gibst dem Prinzip also recht – die Frage ist nur, welches Weltbild es am besten erfüllt.`,
              detail: `Carroll argumentiert, dass Theorien, in denen zufällig fluktuierende „Boltzmann-Gehirne" mit falschen Erinnerungen die typischen Beobachter wären, sich selbst untergraben: Wenn sie wahr wären, hätten wir keinen Grund, unseren Daten (einschließlich der Daten, auf denen die Theorie beruht) zu trauen. Das ist ein bemerkenswertes Zugeständnis: Die Verlässlichkeit unserer Vernunft ist ein Kriterium für Theoriewahl. Siehe „Die Evolution hat uns verlässliche Vernunft gegeben".`,
              sources: [{ kind: 'gegner', author: 'Sean M. Carroll', work: '„Why Boltzmann Brains Are Bad" (Preprint; Buchbeitrag in Current Controversies in Philosophy of Science, 2020)', year: '2017', status: 'paraphrase', quote: 'Kosmologische Modelle, in denen Boltzmann-Gehirne dominieren, seien „kognitiv instabil" und daher zu verwerfen.' }],
              followUps: [
                {
                  id: 'vernunft-gleichstand',
                  objection: `„Dann steht es in diesem Punkt eben unentschieden: Wir beide setzen voraus, dass unsere Vernunft verlässlich ist. Das ist kein Vorteil für den Theismus."`,
                  objectionBy: 'Graham Oppy',
                  answer: `Kein Gleichstand: Im Theismus folgt die Verlässlichkeit der Vernunft aus dem Weltbild – der Mensch ist nach dem Bild des Logos geschaffen, der die Welt geordnet hat. Im Naturalismus ist sie eine *zusätzliche* Annahme, die das Weltbild nicht erwarten lässt und die man, wie die Boltzmann-Debatte zeigt, eigens absichern muss. Und genau hier greift Ockham: Ein Weltbild, das eine wichtige Grundannahme selbst erklärt, ist sparsamer als eines, das sie als unerklärten Zusatz mitführen muss.`,
                  voices: [
                    {
                      person: 'plantinga',
                      role: 'als Erkenntnistheoretiker',
                      text: `Plantinga argumentiert, dass der Naturalist, der die Evolution annimmt, einen „Unterminierer" für die Verlässlichkeit seiner Vernunft hat, den er mit seinen eigenen Mitteln nicht beseitigen kann. Der Theist hat dagegen einen positiven Grund für die Verlässlichkeit: Gott hat den Menschen nach seinem Bild geschaffen, mit der Fähigkeit, die Wahrheit zu erkennen.`,
                      sources: [{ kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'Where the Conflict Really Lies: Science, Religion, and Naturalism', year: '2011', ref: 'Kap. 10', status: 'paraphrase' }],
                    },
                  ],
                  questionsBack: [`Welche Annahme deines Weltbilds erklärt, warum ein Gehirn aus Teilchen die Wahrheit über Teilchen erkennen kann?`],
                },
              ],
            },
          ],
        },
        {
          id: 'harman-moral-ueberfluessig',
          objection: `„Das Rasiermesser schneidet auch eure objektiven moralischen Tatsachen weg. Um zu erklären, warum jemand eine Grausamkeit als falsch empfindet, brauche ich nur Psychologie und Evolution – keine moralische Tatsache. Was zur Erklärung nicht gebraucht wird, streichen wir."`,
          objectionBy: 'Gilbert Harman (The Nature of Morality, 1977) / Daniel Dennett',
          answer: `Dann streicht das Rasiermesser auch die Normen des Denkens. „Du *solltest* die besser begründete Theorie glauben" ist ebenfalls keine Tatsache, die man zur Erklärung von Beobachtungen braucht – trotzdem setzt jedes wissenschaftliche Argument sie voraus. Wer moralische Tatsachen streicht, weil sie keine Kausalrolle spielen, muss auch erkenntnistheoretische Tatsachen streichen – und sägt den Ast ab, auf dem auch das Rasiermesser sitzt.`,
          detail: `Harmans Argument ist eines der stärksten gegen den Moralrealismus. Die Antwort mit den „Gefährten im Schuldigsein" (companions in guilt) hat Terence Cuneo in *The Normative Web* (2007) ausgearbeitet: Epistemische Gründe („Es ist rational, X zu glauben") sind genauso normativ wie moralische. Wer die einen behält, hat keinen prinzipiellen Grund, die anderen zu streichen.`,
          sources: [
            { kind: 'gegner', author: 'Gilbert Harman', work: 'The Nature of Morality: An Introduction to Ethics', year: '1977', status: 'paraphrase', quote: 'Moralische Tatsachen würden zur Erklärung unserer Beobachtungen nicht benötigt – im Unterschied zu physikalischen Tatsachen.' },
            { kind: 'fachliteratur', author: 'Terence Cuneo', work: 'The Normative Web: An Argument for Moral Realism', year: '2007', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'irrtumstheorie-moral',
              objection: `„Dann beiße ich in den sauren Apfel: Moralische Urteile sind allesamt falsch – eine nützliche Fiktion, die die Evolution uns eingepflanzt hat. Das nennt man Irrtumstheorie, und sie ist konsequent."`,
              objectionBy: 'Richard Joyce (The Myth of Morality, 2001)',
              answer: `Konsequent ist sie – aber du müsstest dann auch sagen, dass Völkermord nicht wirklich falsch ist und dass dein Einsatz gegen religiösen Fanatismus auf einer Fiktion beruht. Kaum jemand kann so leben, und auch du lebst nicht so. Wenn ein Argument zu dem Ergebnis führt, dass Grausamkeit an Kindern nicht wirklich böse ist, haben wir mehr Grund, an einer Prämisse dieses Arguments zu zweifeln als an der Bosheit der Grausamkeit.`,
              detail: `Joyce argumentiert, dass moralische Urteile kategorische Forderungen enthalten, die in einer naturalistischen Welt keine Grundlage haben – deshalb seien sie systematisch falsch. Das ist ehrlicher als ein Naturalismus, der sich Moral ohne Fundament „leiht". Der Christ stimmt Joyce darin zu, dass kategorische Pflichten einen Grund jenseits der bloßen Natur brauchen – er zieht nur den umgekehrten Schluss.`,
              sources: [{ kind: 'gegner', author: 'Richard Joyce', work: 'The Myth of Morality', year: '2001', status: 'paraphrase', quote: 'Moralische Urteile seien systematisch falsch (Irrtumstheorie), weil es keine kategorischen Gründe in einer naturalistischen Welt gebe.' }],
              questionsBack: [`Bist du dir sicherer, dass deine Prämissen stimmen, als dass das Quälen eines Kindes zum Vergnügen wirklich falsch ist?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Erklärt der Naturalismus wirklich alle Daten so gut wie der Theismus – auch die Existenz der Welt und ihrer Gesetze?`,
    `Ist eine Theorie, die weniger annimmt, aber weniger erklärt, wirklich die bessere?`,
    `Ist ein unendliches Multiversum sparsamer als ein Gott?`,
    `Kann ein Naturgesetz etwas erschaffen – oder beschreibt es nur, was existierende Dinge tun?`,
  ],
  avoid: [
    `Die Laplace-Anekdote als gesichertes Zitat behandeln – weder für noch gegen Gott.`,
    `Ockhams Rasiermesser für „unwissenschaftlich" erklären. Es ist ein vernünftiges Prinzip; es wird nur falsch angewandt.`,
    `Gott als Erklärung für einzelne Naturvorgänge einsetzen, die die Physik erklärt – das wäre der Lückenbüßer-Fehler.`,
  ],
  concessions: [
    `Innerhalb der Naturwissenschaften ist es richtig, natürliche Ursachen zu suchen (methodischer Naturalismus); Gott ist keine physikalische Variable.`,
    `Sparsamkeit ist ein legitimes Kriterium; die Frage ist, wie man Einfachheit misst.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Simplicity as Evidence of Truth', year: '1997', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God and Stephen Hawking', year: '2011', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'The Best Argument against God', year: '2013', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Ockhams Rasiermesser', 'Sparsamkeit', 'Einfachheit', 'Hawking', 'Laplace'],
  related: [
    'naturalismus/lueckenbuesser-gott',
    'atheismus/wer-schuf-gott',
    'gottesbeweise/kontingenz-trugschluss',
    'feinabstimmung/multiversum',
    'kosmologie/universum-aus-dem-nichts',
    'physik/naturgesetze-erklaeren-sich-selbst',
  ],
};

export default claim;
