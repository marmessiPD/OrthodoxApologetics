import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ontologisch-wortspiel',
  title: `„Der ontologische Gottesbeweis ist ein Wortspiel."`,
  proponents: [
    { name: 'Immanuel Kant', role: 'Philosoph', work: 'Kritik der reinen Vernunft (1781/1787), A 592–602 / B 620–630' },
    { name: 'Gaunilo von Marmoutiers', role: 'Benediktinermönch des 11. Jahrhunderts', work: 'Pro insipiente („Für den Toren") – das Gleichnis von der vollkommensten Insel' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 3' },
    { name: 'Graham Oppy', role: 'Religionsphilosoph, Monash University', work: 'Ontological Arguments and Belief in God (1995)' },
  ],
  steelman: `Anselms Argument versucht, Gott aus einem bloßen Begriff herbeizudefinieren: „Das, worüber hinaus nichts Größeres gedacht werden kann" müsse existieren, weil ein existierendes Wesen größer sei als ein bloß gedachtes. Schon der Mönch Gaunilo zeigte, dass man mit derselben Logik die vollkommenste aller Inseln „beweisen" könnte. Kant traf den Kern: „Sein ist offenbar kein reales Prädikat" – Existenz fügt einem Begriff nichts hinzu; hundert wirkliche Taler enthalten begrifflich nicht mehr als hundert mögliche. Die modernen modallogischen Fassungen (Plantinga, Gödel) verlagern das Problem nur in die Prämisse „Es ist möglich, dass ein maximal großes Wesen existiert" – wer sie akzeptiert, hat die Schlussfolgerung schon akzeptiert. Mit gleichem Recht kann man sagen: „Es ist möglich, dass kein maximal großes Wesen existiert" – und daraus folgt dann, dass es notwendig nicht existiert. Dawkins bringt es auf den Punkt: Ein Argument, das eine so gewaltige Schlussfolgerung ohne einen einzigen Befund aus der wirklichen Welt erreicht, ist verdächtig.`,
  biblical: {
    summary: `Die Bibel enthält kein ontologisches Argument; sie bezeugt Gott in Schöpfung und Geschichte. Aber sie liefert den Hintergrund, aus dem Anselm schöpfte: den Gott, dessen Name „Ich bin" lautet (Ex 3,14), der „von Ewigkeit zu Ewigkeit" ist (Ps 90,2) und der größer ist als alles, was gedacht werden kann (Jes 55,8–9). Anselm beginnt sein Argument ausdrücklich mit dem Psalmwort über den „Toren", der in seinem Herzen spricht: „Es ist kein Gott" (Ps 14,1).`,
    detail: `- **Ps 14,1 / 53,2:** Anselms Proslogion, Kap. 2, nimmt diesen Vers zum Ausgangspunkt: Selbst der Tor versteht, was er leugnet – und gerät damit, so Anselm, in einen Widerspruch.
- **Ex 3,14:** Die Väter lasen den Gottesnamen als Hinweis darauf, dass Gott nicht ein Seiendes unter anderen ist, sondern das Sein selbst – ein Gedanke, der der Idee notwendiger Existenz nahekommt.
- **Ehrlich:** Das ontologische Argument ist ein philosophisches Nachdenken über den Gottesbegriff; man sollte es nicht als „biblischen Beweis" ausgeben.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '14,1', quote: `Die Toren sprechen in ihrem Herzen: Es ist kein Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '55,8–9', quote: `Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege, spricht der HERR; sondern soviel der Himmel höher ist denn die Erde, so sind auch meine Wege höher denn eure Wege und meine Gedanken denn eure Gedanken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '11,6', quote: `Aber ohne Glauben ist's unmöglich, Gott gefallen; denn wer zu Gott kommen will, der muß glauben, daß er sei und denen, die ihn suchen, ein Vergelter sein werde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die östlichen Väter haben kein ontologisches Argument formuliert. Sie betonen vielmehr die Unbegreiflichkeit Gottes: Dass Gott ist, lässt sich erkennen, *was* er seinem Wesen nach ist, übersteigt jedes Begreifen. Gregor der Theologe korrigiert Platon: Gott zu begreifen sei nicht nur schwer, sondern unmöglich, und ihn auszusprechen noch unmöglicher. Aus orthodoxer Sicht ist Anselms Gedanke daher als Hinweis wertvoll – Gott ist größer als alles Denkbare –, aber er ist nicht der Weg, auf dem die Kirche Gott verkündet. Anselm ist ein westlicher Theologe nach dem Schisma und wird hier nur als Philosoph herangezogen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Zweite theologische Rede (Oratio 28)', ref: '4', status: 'paraphrase', quote: 'Gott zu begreifen ist unmöglich und ihn auszusprechen noch unmöglicher – gegen Platons Wort, Gott zu begreifen sei schwer, ihn auszusprechen unmöglich.' },
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,4', status: 'paraphrase', quote: 'Dass Gott ist, ist offenbar; was er seinem Wesen und seiner Natur nach ist, ist gänzlich unbegreiflich und unerkennbar.' },
    ],
  },
  opposingView: {
    summary: `Die meisten Philosophen – auch die meisten christlichen – halten Anselms ursprüngliche Fassung für nicht zwingend; Thomas von Aquin lehnte sie ab. Die modallogischen Fassungen von Charles Hartshorne, Norman Malcolm und Alvin Plantinga gelten dagegen als **logisch gültig**: Ihre Schlussfolgerung folgt aus den Prämissen, wenn man das übliche Modalsystem S5 voraussetzt. Strittig ist allein die Möglichkeitsprämisse. Kurt Gödels Formalisierung wurde 2013/2014 von Christoph Benzmüller und Bruno Woltzenlogel Paleo mit automatischen Beweissystemen als korrekt abgeleitet bestätigt – was ihre logische Gültigkeit zeigt, nicht die Wahrheit ihrer Axiome.`,
    sources: [
      { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'The Nature of Necessity', year: '1974', ref: 'Kap. 10', status: 'paraphrase', quote: 'Das modale ontologische Argument ist gültig; wer die Möglichkeitsprämisse vernünftigerweise akzeptiert, kann die Schlussfolgerung vernünftigerweise akzeptieren. Es ist kein zwingender Beweis, zeigt aber die Rationalität des Glaubens.' },
      { kind: 'wissenschaft', author: 'Christoph Benzmüller & Bruno Woltzenlogel Paleo', work: '„Automating Gödel\'s Ontological Proof of God\'s Existence with Higher-order Automated Theorem Provers" (ECAI 2014)', year: '2014', status: 'paraphrase', quote: 'Computergestützte Überprüfung der logischen Gültigkeit von Gödels Beweis in einer höherstufigen Modallogik.' },
      { kind: 'gegner', author: 'Graham Oppy', work: 'Ontological Arguments and Belief in God', year: '1995', status: 'paraphrase', quote: 'Kein ontologisches Argument zwingt einen vernünftigen Nichttheisten zur Annahme seiner Prämissen.' },
    ],
  },
  quickAnswer: `Ehrlich gesagt ist das ontologische Argument nicht mein Hauptargument – selbst Thomas von Aquin hat Anselms Fassung abgelehnt. Aber ein „Wortspiel" ist es nicht. Die moderne Fassung von Plantinga ist logisch gültig, und der große Logiker Kurt Gödel hat eine eigene Version ausgearbeitet. Alles hängt an einer Frage: Ist ein maximal vollkommenes, notwendig existierendes Wesen *möglich*? Wenn ja, folgt nach den Regeln der Modallogik, dass es existiert. Die Debatte geht also um die Möglichkeit – und dafür sprechen auch die anderen Gottesargumente.`,
  keyPoints: [
    `**Nicht das Hauptargument:** Das ontologische Argument ist umstritten, auch unter Christen. Stütze dich auf Kontingenz, Kalam, Feinabstimmung und Auferstehung; nutze dieses Argument als Ergänzung.`,
    `**Logisch gültig:** Die modale Fassung (Plantinga) und Gödels Formalisierung sind formal korrekt – computergestützt überprüft. Wer widersprechen will, muss eine Prämisse bestreiten, nicht die Logik.`,
    `**Der Knackpunkt ist die Möglichkeit:** Wenn ein notwendiges Wesen möglich ist, existiert es. Darum ist die Frage nicht „Kann man Gott herbeidefinieren?", sondern „Ist Gott ein widerspruchsfreier Begriff?"`,
    `**Gaunilos Insel scheitert:** Die „Größe" einer Insel hat kein inneres Maximum (man kann immer noch eine Palme mehr denken), und notwendige Existenz passt nicht zu physischen Dingen. Nur bei Gott ist „maximale Vollkommenheit" ein sinnvoller Begriff.`,
    `**Kants Einwand** trifft Fassungen, die Existenz als Vollkommenheit behandeln – nicht die modale Fassung, die mit *notwendiger* Existenz arbeitet.`,
  ],
  argument: {
    name: 'Das modale ontologische Argument (nach Plantinga)',
    summary: 'Wenn ein maximal großes Wesen möglich ist, dann existiert es.',
    premises: [
      {
        text: 'P1: Es ist möglich, dass ein maximal großes Wesen existiert (ein Wesen, das in jeder möglichen Welt allmächtig, allwissend und vollkommen gut ist).',
        support: `Der Begriff scheint widerspruchsfrei: Allmacht, Allwissen und Güte schließen sich nicht aus. Zudem stützen die anderen Gottesargumente – v. a. das Kontingenzargument, das ein notwendiges Wesen nahelegt – die Möglichkeit. Wer P1 bestreitet, muss zeigen, dass der Begriff Gottes einen Widerspruch enthält.`,
      },
      {
        text: 'P2: Wenn es möglich ist, dass ein maximal großes Wesen existiert, dann existiert es in irgendeiner möglichen Welt.',
        support: `Das ist die Bedeutung von „möglich" in der Sprache der möglichen Welten.`,
      },
      {
        text: 'P3: Wenn ein maximal großes Wesen in irgendeiner möglichen Welt existiert, dann existiert es in jeder möglichen Welt.',
        support: `Maximale Größe schließt notwendige Existenz ein: Ein Wesen, das nur in manchen Welten existiert, wäre nicht maximal groß. Nach dem Modalsystem S5 gilt zudem: Was möglicherweise notwendig ist, ist notwendig.`,
      },
      {
        text: 'P4: Wenn es in jeder möglichen Welt existiert, dann existiert es in der wirklichen Welt.',
        support: `Die wirkliche Welt ist eine der möglichen Welten.`,
      },
    ],
    conclusion: 'Also existiert ein maximal großes Wesen.',
  },
  voices: [
    {
      person: 'anselm',
      role: 'als Urheber des Arguments',
      text: `Anselm versteht sein Proslogion als Gebet und als „Glaube, der nach Verstehen sucht". Er geht von einem Begriff aus, den auch der Ungläubige versteht: „etwas, worüber hinaus nichts Größeres gedacht werden kann". Existierte dieses nur im Verstand, so könnte man etwas Größeres denken – dasselbe, aber wirklich existierend. Im dritten Kapitel geht Anselm weiter: Gott kann nicht einmal als nichtexistierend gedacht werden, denn ein Wesen, das nicht nicht sein kann, ist größer als eines, das nicht sein kann. Dieser zweite Gedanke – notwendige Existenz – ist der Kern der modernen Fassungen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Anselm von Canterbury', work: 'Proslogion', ref: 'Kap. 2–3', year: 'um 1077/78', quote: `Wir glauben, dass du etwas bist, worüber hinaus nichts Größeres gedacht werden kann.`, original: 'credimus te esse aliquid quo nihil maius cogitari possit', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'plantinga',
      role: 'als modallogischer Erneuerer',
      text: `Plantinga formulierte das Argument 1974 mit der Semantik möglicher Welten neu und zeigte, dass es logisch gültig ist. Zugleich war er bemerkenswert ehrlich: Das Argument beweise Gottes Existenz nicht in dem Sinn, dass jeder vernünftige Mensch es annehmen müsse, denn man könne die Möglichkeitsprämisse vernünftigerweise ablehnen. Es zeige aber, dass es nicht irrational ist, an Gott zu glauben – denn die Prämisse sei ebenso vernünftig annehmbar. Plantinga verteidigt also nicht einen Taschenspielertrick, sondern die Rationalität des Theismus.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'The Nature of Necessity', year: '1974', ref: 'Kap. 10', status: 'paraphrase', quote: 'Das Argument ist gültig und zeigt die Rationalität, nicht die zwingende Wahrheit des Theismus.' },
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God, Freedom, and Evil', year: '1974', ref: 'Teil II', status: 'paraphrase', quote: 'Allgemeinverständlichere Darstellung des modalen ontologischen Arguments.' },
      ],
    },
    {
      person: 'goedel',
      role: 'als Logiker',
      text: `Gödel, der Begründer der modernen mathematischen Logik, hinterließ eine streng formalisierte Fassung des ontologischen Arguments, die er 1970 aufschrieb und Dana Scott zeigte. Er definiert „positive Eigenschaften" axiomatisch und leitet in einer höherstufigen Modallogik ab, dass ein Wesen mit allen positiven Eigenschaften notwendig existiert. Dass einer der größten Logiker des 20. Jahrhunderts sich ernsthaft damit beschäftigte, zeigt jedenfalls, dass das Argument kein bloßes Wortspiel ist. Ob seine Axiome wahr sind, bleibt allerdings diskutiert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kurt Gödel', work: '„Ontological Proof" (Manuskript 1970), in: Collected Works, Bd. III', year: '1995', status: 'paraphrase', quote: 'Axiomatische Ableitung der notwendigen Existenz eines Wesens mit allen positiven Eigenschaften.' },
      ],
    },
    {
      person: 'thomas-aquin',
      role: 'als Kritiker Anselms innerhalb der christlichen Tradition',
      text: `Thomas von Aquin lehnte Anselms Argument ab: Auch wer den Begriff „Gott" versteht, erkennt damit nicht, dass Gott wirklich existiert, denn wir kennen Gottes Wesen nicht so, dass wir seine Existenz unmittelbar daraus ablesen könnten. Gottes Existenz sei „an sich" selbstverständlich, aber nicht „für uns". Deshalb müsse man von den Wirkungen – Bewegung, Verursachung, Kontingenz, Ordnung – auf Gott schließen. Thomas zeigt: Man kann das ontologische Argument ablehnen und trotzdem Gottes Existenz für beweisbar halten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Thomas von Aquin', work: 'Summa theologiae', ref: 'I, q. 2, a. 1 (bes. ad 2)', status: 'paraphrase', quote: 'Dass Gott existiert, ist an sich selbstevident, aber nicht für uns, weil wir sein Wesen nicht kennen; daher muss es aus seinen Wirkungen bewiesen werden.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'nicht-herbeidefinieren',
      objection: `„Man kann nichts durch eine Definition herbeizaubern. Wenn ich ein ‚notwendig existierendes Einhorn' definiere, existiert es auch nicht."`,
      objectionBy: 'Richard Dawkins (The God Delusion, Kap. 3)',
      answer: `Das Argument behauptet nicht, dass Definitionen Dinge erzeugen. Es sagt: *Wenn* ein notwendig existierendes Wesen überhaupt möglich ist, dann existiert es – weil „notwendig" heißt, dass es in keiner möglichen Situation fehlen kann. Ein „notwendig existierendes Einhorn" ist dagegen unmöglich: Ein physisches Tier aus Fleisch und Blut kann nicht notwendig existieren. Interessant ist übrigens, dass selbst Bertrand Russell schrieb, es sei leichter, sich überzeugt zu fühlen, dass das Argument falsch sein muss, als genau zu zeigen, wo der Fehler liegt.`,
      sources: [
        { kind: 'gegner', author: 'Bertrand Russell', work: 'A History of Western Philosophy', year: '1945', ref: 'Buch II, Kap. über Anselm', status: 'paraphrase', quote: 'Es sei leichter, sich überzeugt zu fühlen, dass das Argument fehlerhaft sein muss, als herauszufinden, wo genau der Fehler liegt.' },
      ],
      followUps: [
        {
          id: 'gaunilos-insel',
          objection: `„Mit derselben Logik beweise ich die vollkommenste aller Inseln. Das hat schon Gaunilo gezeigt."`,
          objectionBy: 'Gaunilo von Marmoutiers / Graham Oppy',
          targetsPremise: 1,
          answer: `Die Insel scheitert an zwei Stellen. Erstens haben die Vorzüge einer Insel kein inneres Maximum: Man kann sich immer noch eine Palme, einen Strand oder eine Kokosnuss mehr denken – „die vollkommenste Insel" ist ein leerer Begriff. Zweitens ist eine Insel ein physisches, zusammengesetztes, veränderliches Ding und kann daher nicht notwendig existieren. Allmacht, Allwissen und vollkommene Güte haben dagegen ein inneres Maximum, und nur ein immaterielles Wesen kann notwendig sein.`,
          followUps: [
            {
              id: 'notwendiges-spaghettimonster',
              objection: `„Dann nehme ich eben ein ‚maximal großes Spaghettimonster', das notwendig existiert."`,
              objectionBy: 'Matt Dillahunty',
              targetsPremise: 1,
              answer: `Entweder besteht es aus Nudeln – dann ist es physisch, teilbar und veränderlich und kann nicht notwendig existieren; der Begriff ist widersprüchlich. Oder du streichst alles Spaghettihafte und lässt nur Allmacht, Allwissen, Güte und notwendige Existenz übrig – dann hast du einfach Gott beschrieben und ihm einen lustigen Namen gegeben. Die Parodie ändert am Argument nichts.`,
            },
          ],
        },
        {
          id: 'kant-sein-kein-praedikat',
          objection: `„Kant hat das Argument erledigt: Sein ist kein reales Prädikat. Hundert wirkliche Taler enthalten begrifflich nicht mehr als hundert mögliche."`,
          objectionBy: 'Immanuel Kant (Kritik der reinen Vernunft)',
          targetsPremise: 3,
          answer: `Kants Einwand trifft Fassungen, die einfache Existenz als zusätzliche Vollkommenheit behandeln. Die modale Fassung arbeitet aber nicht mit „Existenz" als Eigenschaft, sondern mit *notwendiger* Existenz – der Eigenschaft, in jeder möglichen Welt zu existieren. Dass ein Wesen, das in keiner Welt fehlen kann, vollkommener ist als eines, das fehlen kann, ist eine echte inhaltliche Aussage. Philosophen wie Norman Malcolm und Plantinga haben genau deshalb Anselms zweite Fassung (Proslogion 3) erneuert.`,
          sources: [
            { kind: 'gegner', author: 'Immanuel Kant', work: 'Kritik der reinen Vernunft', year: '1781/1787', ref: 'A 598 / B 626', quote: `Sein ist offenbar kein reales Prädikat, d. i. ein Begriff von irgend etwas, was zu dem Begriffe eines Dinges hinzukommen könne.`, status: 'verbatim' },
            { kind: 'fachliteratur', author: 'Norman Malcolm', work: '„Anselm\'s Ontological Arguments", Philosophical Review 69', year: '1960', status: 'paraphrase', quote: 'Notwendige Existenz ist – anders als bloße Existenz – eine echte Vollkommenheit.' },
          ],
        },
      ],
    },
    {
      id: 'umgekehrtes-argument',
      objection: `„Die Möglichkeitsprämisse ist eine verkappte Behauptung der Schlussfolgerung. Ich sage genauso plausibel: ‚Es ist möglich, dass kein maximal großes Wesen existiert.' Dann folgt mit derselben Logik, dass es notwendig *nicht* existiert."`,
      objectionBy: 'Graham Oppy / J. L. Mackie',
      targetsPremise: 1,
      answer: `Das ist der stärkste Einwand, und ich gebe ihm recht: Das Argument entscheidet sich an der Frage, welche Möglichkeitsprämisse plausibler ist. Darum präsentiere ich es nicht als zwingenden Beweis. Für die Möglichkeit Gottes spricht aber einiges: Der Begriff enthält keinen erkennbaren Widerspruch, und das Kontingenzargument zeigt unabhängig davon, dass ein notwendiges Wesen *existiert* – also ist es auch möglich. Die „umgekehrte" Prämisse hat keine vergleichbare unabhängige Stütze.`,
      followUps: [
        {
          id: 'allmacht-widerspruechlich',
          objection: `„Der Gottesbegriff ist widersprüchlich. Kann Gott einen Stein erschaffen, der so schwer ist, dass er ihn nicht heben kann?"`,
          objectionBy: 'Häufiger Einwand',
          targetsPremise: 1,
          answer: `Allmacht bedeutet nach klassischer Lehre die Macht, alles zu tun, was logisch möglich ist. „Ein Stein, den der, der alles heben kann, nicht heben kann" ist ein Widerspruch in sich – wie ein „viereckiger Kreis". Dass Gott keine Widersprüche verwirklicht, ist keine Grenze seiner Macht, sondern zeigt nur, dass Unsinn nicht dadurch sinnvoll wird, dass man „Gott kann" davorsetzt.`,
          followUps: [
            {
              id: 'allwissen-freiheit',
              objection: `„Und Allwissen? Wenn Gott alles vorherweiß, sind wir nicht frei – oder Gott ist nicht allwissend. Der Begriff ist inkohärent."`,
              objectionBy: 'Graham Oppy',
              targetsPremise: 1,
              answer: `Das ist eine ernsthafte philosophische Frage, die seit Augustinus und Boethius diskutiert wird. Es gibt aber mehrere widerspruchsfreie Lösungen: etwa, dass Gottes Wissen nicht zeitlich *vorher* ist, sondern zeitlos alle Zeiten umfasst (Boethius), oder dass Wissen nicht verursacht, was gewusst wird. Ein Problem, für das es kohärente Lösungen gibt, zeigt keinen Widerspruch im Gottesbegriff.`,
              detail: `Siehe „Wenn Gott alles vorherweiß, sind wir nicht frei".`,
            },
          ],
        },
      ],
    },
    {
      id: 'thomas-lehnte-ab',
      objection: `„Sogar Thomas von Aquin hat das ontologische Argument abgelehnt. Warum sollte ich es akzeptieren?"`,
      objectionBy: 'Alex O\'Connor',
      answer: `Gute Beobachtung – und ein schönes Beispiel dafür, dass Christen nicht jedes Argument kritiklos übernehmen. Thomas lehnte Anselms Fassung ab, weil wir Gottes Wesen nicht so kennen, dass wir seine Existenz direkt daraus ablesen könnten. Die orthodoxe Tradition betont ebenfalls die Unbegreiflichkeit Gottes. Deshalb stütze ich mich nicht auf dieses Argument. Aber die modale Fassung ist eine andere als Anselms, und Thomas' eigene Wege zu Gott stehen unabhängig davon.`,
      followUps: [
        {
          id: 'also-taschenspielertrick',
          objection: `„Dann gibst du ja zu, dass es nur ein Taschenspielertrick ist."`,
          objectionBy: 'Richard Dawkins',
          answer: `Nein. Ein Taschenspielertrick täuscht; dieses Argument ist logisch gültig und legt offen, worauf es beruht: auf der Möglichkeit eines vollkommenen Wesens. Dass seine Prämisse umstritten ist, teilt es mit fast allen Argumenten der Philosophie – auch mit denen gegen Gott. Gödel und Plantinga haben es nicht als Trick verstanden, sondern als ernsthafte Untersuchung des Gottesbegriffs.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Enthält der Begriff eines allmächtigen, allwissenden, vollkommen guten Wesens für dich einen logischen Widerspruch? Welchen?`,
    `Wenn ein notwendiges Wesen möglich ist – kann es dann trotzdem nicht existieren?`,
    `Welche Prämisse des modalen Arguments hältst du für falsch?`,
  ],
  avoid: [
    `Das ontologische Argument als Hauptargument verwenden – gerade bei Einsteigern wirkt es wie ein Trick.`,
    `Behaupten, Gödel habe „mathematisch bewiesen, dass Gott existiert". Er hat eine gültige Ableitung aus Axiomen gegeben; ob die Axiome wahr sind, ist offen.`,
    `Die Unterschiede zwischen Anselms Fassung und der modalen Fassung verwischen.`,
  ],
  concessions: [
    `Das Argument ist unter Philosophen – auch unter christlichen – umstritten; Thomas von Aquin lehnte Anselms Fassung ab.`,
    `Die Möglichkeitsprämisse lässt sich nicht zwingend beweisen; das Argument zeigt eher die Rationalität des Glaubens als seine Gewissheit.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God, Freedom, and Evil', year: '1974', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Anselm von Canterbury', work: 'Proslogion', status: 'paraphrase' },
    { kind: 'gegner', author: 'Graham Oppy', work: 'Ontological Arguments and Belief in God', year: '1995', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Ontologischer Gottesbeweis', 'Anselm', 'Modallogik', 'Gödel', 'Plantinga', 'Kant'],
  related: [
    'gottesbeweise/kontingenz-trugschluss',
    'mathematik/goedel-und-gott',
    'atheismus/teekanne-spaghettimonster',
    'willensfreiheit/vorherwissen-schliesst-freiheit-aus',
  ],
};

export default claim;
