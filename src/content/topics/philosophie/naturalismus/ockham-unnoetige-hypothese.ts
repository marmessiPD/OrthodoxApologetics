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
      { kind: 'gegner', author: 'Pierre-Simon Laplace (zugeschrieben)', work: 'Anekdote: Antwort an Napoleon', quote: `Sire, je n'avais pas besoin de cette hypothèse-là.`, status: 'unverified', note: 'Erst Jahrzehnte später überliefert (u. a. bei Augustus De Morgan, A Budget of Paradoxes, 1872); Datum, Wortlaut und Sinn sind unsicher. Nicht als gesichertes Zitat verwenden.' },
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
