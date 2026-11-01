import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'keine-absolute-wahrheit',
  title: `„Es gibt keine absolute Wahrheit."`,
  proponents: [
    { name: 'Friedrich Nietzsche', role: 'Philosoph (1844–1900)', work: '„Über Wahrheit und Lüge im außermoralischen Sinne" (1873); Nachlass 1886/87' },
    { name: 'Richard Rorty', role: 'Philosoph, Princeton/Stanford (1931–2007)', work: 'Philosophy and the Mirror of Nature (1979); Contingency, Irony, and Solidarity (1989)' },
    { name: 'Michel Foucault', role: 'Philosoph und Historiker (1926–1984)', work: 'Schriften zu Wissen und Macht (u. a. „Wahrheit und Macht", 1977)' },
    { name: 'Populärer Relativismus', role: 'Alltagsüberzeugung („Das ist deine Wahrheit, nicht meine")', work: 'Verbreitet in Schule, Medien und Gesprächen' },
  ],
  steelman: `Die Menschheitsgeschichte ist ein Friedhof von „absoluten Wahrheiten": Die Erde im Mittelpunkt, Sklaverei als natürliche Ordnung, Ketzer auf dem Scheiterhaufen. Jede Kultur hält ihre Sicht für selbstverständlich, und unsere Sprache, Herkunft und Interessen färben alles, was wir wahrnehmen. Nietzsche nannte die Wahrheit „ein bewegliches Heer von Metaphern"; Foucault zeigte, wie das, was als wahr gilt, von Macht geprägt ist; Rorty schlug vor, Wahrheit als das zu verstehen, was unsere Gesprächspartner uns durchgehen lassen. Wer heute noch „die absolute Wahrheit" beansprucht, macht sich zum Richter über andere – und das endet erfahrungsgemäß in Intoleranz und Gewalt. Demut verlangt, anzuerkennen: Es gibt viele Perspektiven, aber keine Wahrheit für alle. Schon Pilatus fragte zu Recht: „Was ist Wahrheit?"`,
  biblical: {
    summary: `Für die Bibel ist Wahrheit nicht nur ein Satz, sondern eine Person: „Ich bin der Weg und die Wahrheit und das Leben" (Joh 14,6). Jesus sagt vor Pilatus, er sei gekommen, „daß ich die Wahrheit zeugen soll" – und Pilatus fragt zurück: „Was ist Wahrheit?" (Joh 18,37–38), während die Wahrheit vor ihm steht. Das hebräische *'emet* bedeutet Verlässlichkeit, Treue; das griechische *alētheia* Unverborgenheit. Wahrheit ist also das, worauf man sich verlassen kann, weil es so ist, wie es ist. Zugleich soll sie „in Liebe" gesagt werden (Eph 4,15).`,
    detail: `- **Joh 18,37–38:** Pilatus' Frage ist nicht die eines Suchenden – er wartet die Antwort nicht ab, sondern geht hinaus. Die Szene zeigt, wie der Relativismus der Macht dient: Pilatus verurteilt den, den er für unschuldig hält.
- **Joh 8,32:** „Die Wahrheit wird euch frei machen" – Wahrheit befreit, sie unterdrückt nicht.
- **Eph 4,15; 1 Kor 13,6:** Wahrheit und Liebe gehören zusammen; die Liebe „freut sich der Wahrheit".
- **2 Petr 1,16:** „Wir sind nicht klugen Fabeln gefolgt" – der christliche Glaube beansprucht, wahr im Sinn von wirklich geschehen zu sein.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '14,6', quote: `Jesus spricht zu ihm: Ich bin der Weg und die Wahrheit und das Leben; niemand kommt zum Vater denn durch mich.`, original: 'ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια καὶ ἡ ζωή', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '18,37–38', quote: `Ich bin dazu geboren und in die Welt gekommen, daß ich die Wahrheit zeugen soll. Wer aus der Wahrheit ist, der höret meine Stimme. Spricht Pilatus zu ihm: Was ist Wahrheit?`, original: 'τί ἐστιν ἀλήθεια;', translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '8,32', quote: `und werdet die Wahrheit erkennen, und die Wahrheit wird euch frei machen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '13,6', quote: `sie freut sich nicht der Ungerechtigkeit, sie freut sich aber der Wahrheit.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', quote: `Denn wir sind nicht klugen Fabeln gefolgt, da wir euch kundgetan haben die Kraft und Zukunft unsers HERRN Jesu Christi; sondern wir haben seine Herrlichkeit selber gesehen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche bekennt Christus als den ewigen Logos, durch den alles geschaffen ist – die Wahrheit, in der alle Teilwahrheiten ihren Grund haben. Die koptische Liturgie endet mit dem Bekenntnis des Priesters: „Ich glaube, ich glaube, ich glaube und bekenne bis zum letzten Atemzug …" – ein Bekenntnis, das Wahrheit beansprucht und für das Märtyrer gestorben sind. Zugleich lehrt die orthodoxe Tradition Demut: Gottes Wesen bleibt unbegreiflich, und die Wahrheit wird nicht besessen, sondern empfangen. Augustinus zeigte gegen die Skeptiker seiner Zeit, dass es Gewissheiten gibt, die kein Zweifel aufheben kann: Selbst wer sich irrt, existiert („Si enim fallor, sum").`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Liturgie (Basilius-Liturgie), Bekenntnis vor der Kommunion', status: 'paraphrase', quote: 'Der Priester bekennt dreimal: „Ich glaube" – und dass dies der lebendigmachende Leib Christi ist, bekannt bis zum letzten Atemzug.' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XI,26', quote: `Wenn ich mich nämlich täusche, bin ich.`, original: 'Si enim fallor, sum.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über die wahre Religion (De vera religione)', ref: '39,72', quote: `Geh nicht nach draußen, kehr in dich selbst zurück; im inneren Menschen wohnt die Wahrheit.`, original: 'Noli foras ire, in te ipsum redi; in interiore homine habitat veritas.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Die Abschnittszählung variiert je nach Ausgabe (39,72 oder 39,73).' },
    ],
  },
  opposingView: {
    summary: `In der Fachphilosophie vertritt kaum jemand einen globalen Wahrheitsrelativismus („Keine Aussage ist objektiv wahr"), weil er sich selbst widerlegt – ein Einwand, der schon auf Platons Kritik an Protagoras im „Theaitetos" zurückgeht. Diskutiert werden dagegen eingeschränkte Formen: moralischer Relativismus, kultureller Relativismus, Perspektivismus, pragmatistische Wahrheitstheorien (Rorty) oder Thesen über den Einfluss von Macht auf das, was als Wissen gilt (Foucault). Viele dieser Positionen enthalten berechtigte Einsichten – über Vorurteile, Perspektiven und Machtmissbrauch –, ohne dass daraus folgt, es gebe keine Wahrheit.`,
    sources: [
      { kind: 'gegner', author: 'Friedrich Nietzsche', work: '„Über Wahrheit und Lüge im außermoralischen Sinne"', year: '1873', quote: `Was ist also Wahrheit? Ein bewegliches Heer von Metaphern, Metonymien, Anthropomorphismen …`, status: 'verbatim' },
      { kind: 'gegner', author: 'Richard Rorty', work: 'Philosophy and the Mirror of Nature', year: '1979', status: 'paraphrase', quote: 'Wahrheit als das, was unsere Gesprächspartner uns ceteris paribus durchgehen lassen.' },
      { kind: 'fachliteratur', author: 'Platon', work: 'Theaitetos', ref: '170a–171c', status: 'paraphrase', quote: 'Wenn „der Mensch das Maß aller Dinge" ist, dann ist auch die Meinung derer wahr, die Protagoras\' Satz für falsch halten – der Relativismus hebt sich selbst auf.' },
    ],
  },
  quickAnswer: `Ist der Satz „Es gibt keine absolute Wahrheit" selbst absolut wahr? Wenn ja, hat er sich widerlegt. Wenn nein, gibt es keinen Grund, ihn zu glauben. Im Alltag lebt auch niemand so: Beim Medikament, bei der Brücke, vor Gericht wollen wir die Wahrheit, nicht „deine" oder „meine". Unterscheiden muss man Wahrheit (wie es wirklich ist), Gewissheit (wie sicher ich bin) und Geschmack (Schokolade oder Vanille). Und Wahrheit ist nicht arrogant: Das Christentum sagt, die Wahrheit ist eine Person – Jesus, der seinen Jüngern die Füße wusch und für seine Feinde starb.`,
  keyPoints: [
    `**Selbstwiderlegung:** „Es gibt keine absolute Wahrheit" beansprucht, absolut wahr zu sein. Schon Platon zeigte das gegen Protagoras.`,
    `**Niemand lebt relativistisch:** Ärzte, Ingenieure, Richter und jeder, der „Das ist unfair!" sagt, setzt Wahrheit voraus.`,
    `**Wahrheit, Gewissheit, Geschmack unterscheiden:** Dass ich mir unsicher bin, heißt nicht, dass es keine Wahrheit gibt. Geschmacksurteile sind subjektiv; „Jesus ist auferstanden" ist wahr oder falsch, unabhängig von meinem Geschmack.`,
    `**Widersprüche können nicht beide wahr sein:** „Jesus wurde gekreuzigt" (Bibel) und „Jesus wurde nicht gekreuzigt" (Koran 4,157) können nicht beide stimmen.`,
    `**Toleranz setzt Wahrheit voraus:** Tolerieren kann man nur, was man für falsch hält. Ohne Wahrheit gibt es keine Toleranz, nur Gleichgültigkeit.`,
    `**Wahrheit als Person:** Christus ist die Wahrheit (Joh 14,6) – und er ist demütig. Die richtige Demut zweifelt an sich selbst, nicht an der Wahrheit (Chesterton).`,
  ],
  argument: {
    name: 'Die Selbstwiderlegung des Wahrheitsrelativismus',
    summary: 'Wer behauptet, es gebe keine objektive Wahrheit, beansprucht objektive Wahrheit.',
    premises: [
      {
        text: 'P1: Die Aussage „Es gibt keine objektive (absolute) Wahrheit" ist entweder objektiv wahr oder nicht objektiv wahr.',
        support: `Das ist eine vollständige Unterscheidung (Satz vom ausgeschlossenen Dritten).`,
      },
      {
        text: 'P2: Ist sie objektiv wahr, dann gibt es mindestens eine objektive Wahrheit – und die Aussage ist falsch.',
        support: `Die Aussage widerspricht sich dann selbst.`,
      },
      {
        text: 'P3: Ist sie nicht objektiv wahr, dann gibt sie niemandem einen Grund, die objektive Wahrheit zu bestreiten.',
        support: `Sie wäre dann nur „wahr für" den, der sie äußert – eine Mitteilung über seine Einstellung, kein Argument.`,
        sources: [
          { kind: 'fachliteratur', author: 'Platon', work: 'Theaitetos', ref: '171a–c', status: 'paraphrase', quote: 'Die Selbstaufhebung des Homo-mensura-Satzes.' },
        ],
      },
    ],
    conclusion: 'Also ist der allgemeine Wahrheitsrelativismus unhaltbar. Es gibt objektive Wahrheit – und damit ist die Frage, ob das Christentum wahr ist, eine sinnvolle Frage.',
  },
  voices: [
    {
      person: 'augustinus',
      role: 'als ehemaliger Skeptiker',
      text: `Augustinus war in seiner Jugend eine Zeit lang von der skeptischen Akademie beeindruckt, die lehrte, man könne nichts sicher wissen. In „Gegen die Akademiker" und später im „Gottesstaat" zeigt er, dass es Gewissheiten gibt, die selbst der radikalste Zweifel voraussetzt: Wer zweifelt, lebt; wer sich täuscht, existiert. Darüber hinaus entdeckte er unveränderliche Wahrheiten – der Logik, der Mathematik, der Weisheit –, die für alle denkenden Menschen gleich gelten. Für Augustinus führen diese Wahrheiten über den menschlichen Geist hinaus zu Gott, der die Wahrheit selbst ist.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Gegen die Akademiker (Contra Academicos)', year: '386', status: 'paraphrase', quote: 'Widerlegung des akademischen Skeptizismus: Es gibt sichere Erkenntnis.' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XI,26', status: 'paraphrase', quote: 'Wer sich täuscht, existiert; darin kann ich mich nicht täuschen.' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Apostel, der die Wahrheit in Liebe verkündete',
      text: `Paulus verbindet einen kompromisslosen Wahrheitsanspruch mit tiefer Demut. Er betont, dass er „die Wahrheit offenbart" und sich „wohl beweist gegen aller Menschen Gewissen vor Gott" (2 Kor 4,2), und dass der Glaube ohne die Auferstehung vergeblich wäre. Zugleich weiß er: „Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort" (1 Kor 13,12) – unsere Erkenntnis ist Stückwerk. Und er mahnt, die Wahrheit „in Liebe" zu sagen (Eph 4,15). Für Paulus schließen sich Wahrheitsanspruch und Bescheidenheit nicht aus, sondern gehören zusammen.`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '13,12', quote: `Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort; dann aber von Angesicht zu Angesicht.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Epheser', ref: '4,15', status: 'paraphrase', quote: 'Die Wahrheit in Liebe sagen und in allen Stücken wachsen zu Christus hin.' },
      ],
    },
    {
      person: 'chesterton',
      role: 'als Kritiker der „falschen Demut"',
      text: `Chesterton diagnostizierte schon 1908 eine Verschiebung, die heute allgegenwärtig ist: Die Bescheidenheit habe ihren Platz gewechselt. Früher sollte der Mensch an sich selbst zweifeln, aber nicht an der Wahrheit; heute zweifle er an der Wahrheit, aber nicht an sich selbst. Das Ergebnis sei kein demütiger, sondern ein orientierungsloser Mensch, der aus Angst vor Arroganz nicht mehr zu sagen wagt, dass etwas wahr ist – und damit auch nicht mehr sagen kann, dass etwas falsch ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie (Orthodoxy)', year: '1908', ref: 'Kap. 3 („The Suicide of Thought")', quote: `A man was meant to be doubtful about himself, but undoubting about the truth; this has been exactly reversed.`, status: 'verbatim' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Verteidiger objektiver Werte',
      text: `In „Die Abschaffung des Menschen" (1943) kritisiert Lewis ein Schulbuch, das Kindern beibrachte, Werturteile wie „Dieser Wasserfall ist erhaben" seien nur Aussagen über die eigenen Gefühle. Lewis hält dagegen: Alle großen Kulturen kennen eine objektive Ordnung von Werten, die er mit dem chinesischen Wort *Tao* bezeichnet. Wer sie leugnet, erzieht „Menschen ohne Brust" – und überlässt die Bestimmung dessen, was gut ist, am Ende denen, die die Macht haben. Der Relativismus befreit nicht, sondern liefert den Menschen den Mächtigen aus.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die Abschaffung des Menschen (The Abolition of Man)', year: '1943', status: 'paraphrase', quote: 'Objektive Werte (das Tao) gegen subjektivistische Erziehung; „Menschen ohne Brust".' },
      ],
    },
  ],
  dialog: [
    {
      id: 'jeder-seine-wahrheit',
      objection: `„Es gibt keine absolute Wahrheit. Jeder hat seine eigene Wahrheit."`,
      objectionBy: 'Populärer Relativismus',
      targetsPremise: 2,
      answer: `Ist der Satz „Es gibt keine absolute Wahrheit" absolut wahr? Wenn ja, gibt es mindestens eine absolute Wahrheit, und der Satz ist falsch. Wenn er nur „deine Wahrheit" ist, brauche ich ihn nicht zu übernehmen. Ich vermute, du meinst etwas Berechtigtes: dass Menschen verschiedene Perspektiven haben und niemand alles weiß. Dem stimme ich zu – aber daraus folgt nicht, dass es keine Wahrheit gibt.`,
      questionsBack: [`Ist es nur „meine Wahrheit", dass Sklaverei Unrecht war – oder war sie wirklich Unrecht?`],
      followUps: [
        {
          id: 'nur-religion-moral',
          objection: `„Ich meine ja nur: In Religion und Moral gibt es keine objektive Wahrheit. In der Physik schon."`,
          objectionBy: 'Häufiger Einwand',
          answer: `Dann ist die Frage nicht mehr, ob es Wahrheit gibt, sondern ob religiöse Aussagen wahr oder falsch sein können. „Jesus ist von den Toten auferstanden" ist eine Aussage über ein Ereignis – sie ist wahr oder falsch, unabhängig davon, was wir fühlen. „Gott existiert" ebenso. Und „Jesus wurde gekreuzigt" (Bibel) und „Jesus wurde nicht gekreuzigt" (Koran 4,157) können nicht beide wahr sein. Religionen machen Wahrheitsansprüche – man kann sie prüfen.`,
          followUps: [
            {
              id: 'religion-symbolisch',
              objection: `„Religiöse Aussagen sind symbolisch gemeint, keine Tatsachenbehauptungen. Die Auferstehung ist ein Bild für Hoffnung."`,
              objectionBy: 'John Dominic Crossan / liberale Theologie (sinngemäß)',
              answer: `Das Christentum hat von Anfang an genau das bestritten: „Wir sind nicht klugen Fabeln gefolgt" (2 Petr 1,16); „Ist Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,17). Die Apostel starben nicht für ein Symbol, sondern für ein Ereignis, das sie bezeugten. Natürlich hat die Auferstehung auch eine tiefe Bedeutung – aber nur, weil sie geschehen ist.`,
              detail: `Siehe „Die Bibel ist menschliche religiöse Erfahrung, keine Offenbarung" und „Die Wunder müssen entmythologisiert werden".`,
            },
          ],
        },
      ],
    },
    {
      id: 'wahrheit-arrogant',
      objection: `„Wer behauptet, die Wahrheit zu kennen, ist arrogant und intolerant. Absolute Wahrheitsansprüche führen zu Gewalt."`,
      objectionBy: 'Häufiger Einwand',
      answer: `Ob jemand arrogant ist, hängt davon ab, *wie* er mit der Wahrheit umgeht, nicht davon, *ob* er sie für möglich hält. Toleranz setzt sogar Wahrheit voraus: Tolerieren kann ich nur, was ich für falsch halte, und ich toleriere es, weil ich die Würde des anderen achte – auch das eine Wahrheit. Die Wahrheit, an die ich glaube, ist eine Person, die ihren Jüngern die Füße wusch, Petrus das Schwert wegstecken ließ und für ihre Feinde betete.`,
      detail: `Siehe „Es ist arrogant zu sagen, nur Jesus ist der Weg".`,
      followUps: [
        {
          id: 'kreuzzuege-wahrheitsanspruch',
          objection: `„Die Geschichte zeigt es: Kreuzzüge, Inquisition, Religionskriege – alles im Namen der Wahrheit."`,
          objectionBy: 'Sam Harris',
          answer: `Diese Verbrechen sind real, und Christen sollten sie nicht beschönigen. Aber das Problem war nicht der Glaube an Wahrheit, sondern Zwang und Gewalt – die Christus selbst verboten hat. Auch Regime, die sich auf die „wissenschaftliche Wahrheit" der Geschichte beriefen, wie der Marxismus-Leninismus, haben Millionen getötet. Und umgekehrt: Wer gegen Sklaverei und Unterdrückung kämpfte, berief sich darauf, dass sie *wirklich* Unrecht sind – nicht nur „für ihn".`,
          detail: `Siehe „Religion verursacht die meisten Kriege" und „Die Verbrechen atheistischer Regime haben nichts mit Atheismus zu tun".`,
        },
      ],
    },
    {
      id: 'wahrheit-macht-konstrukt',
      objection: `„Wahrheit ist sozial konstruiert. Was als wahr gilt, bestimmen die Mächtigen. Es gibt keine Tatsachen, nur Interpretationen."`,
      objectionBy: 'Michel Foucault / Friedrich Nietzsche',
      answer: `Ist es eine Tatsache, dass es keine Tatsachen gibt? Wenn auch diese These nur eine Konstruktion der Mächtigen ist, warum sollte ich ihr folgen? Foucault hat Wichtiges gesehen: Macht beeinflusst, was als Wissen *gilt*. Aber daraus folgt nicht, dass Wahrheit nur Macht ist. Im Gegenteil: Die Märtyrer, die gegen die Macht Roms bekannten, und Galilei vor seinen Richtern zeigen, dass Wahrheit sich gegen Macht behaupten kann.`,
      followUps: [
        {
          id: 'einstein-alles-relativ',
          objection: `„Aber die Wissenschaft zeigt doch selbst: Alles ist relativ – denk an Einstein!"`,
          objectionBy: 'Populärer Einwand',
          answer: `Die Relativitätstheorie sagt gerade nicht, dass alles relativ ist. Sie zeigt, dass die Lichtgeschwindigkeit und die Naturgesetze für *alle* Beobachter gleich sind – Messungen von Raum und Zeit hängen vom Bezugssystem ab, aber nach festen, objektiven Gesetzen. Einstein soll sogar den Namen „Invariantentheorie" bevorzugt haben. Physik ist ein Musterbeispiel für objektive Wahrheit, nicht für Relativismus.`,
        },
      ],
    },
    {
      id: 'pilatus-recht',
      objection: `„Pilatus fragte zu Recht: ‚Was ist Wahrheit?' Niemand kann es wirklich wissen."`,
      objectionBy: 'Häufiger Einwand',
      answer: `Pilatus fragte nicht als Suchender – er wartete die Antwort nicht ab, ging hinaus und verurteilte einen Mann, den er für unschuldig hielt. Sein Relativismus diente der Macht. Man muss zudem zwei Fragen trennen: ob es Wahrheit gibt und wie sicher *ich* sie erkenne. Ich kann mir in vielem unsicher sein, ohne zu bezweifeln, dass es eine Wahrheit gibt, die ich suche.`,
      followUps: [
        {
          id: 'du-kannst-nicht-sicher-sein',
          objection: `„Aber auch du kannst nicht sicher sein, dass ausgerechnet du die Wahrheit hast."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Absolute, unfehlbare Gewissheit habe ich in den meisten Dingen nicht – das muss man auch nicht, um vernünftig zu handeln. Lukas schrieb, damit Theophilus „gewissen Grund" erfahre (Lk 1,4) – eine begründete Zuverlässigkeit. Ich halte die Wahrheit des Glaubens fest und bin zugleich offen, im Einzelnen dazuzulernen. Die Frage an dich ist: Wenn es Wahrheit gibt, willst du sie finden – auch wenn sie dein Leben verändert?`,
          detail: `Siehe „Man kann es nicht wissen – deshalb bin ich Agnostiker".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Ist der Satz „Es gibt keine absolute Wahrheit" absolut wahr?`,
    `War die Sklaverei wirklich Unrecht – oder nur „für uns heute"?`,
    `Können „Jesus wurde gekreuzigt" und „Jesus wurde nicht gekreuzigt" beide wahr sein?`,
    `Würdest du in ein Flugzeug steigen, dessen Statik „für den Ingenieur wahr" ist?`,
    `Wenn es Wahrheit gibt – möchtest du sie kennen, auch wenn sie unbequem ist?`,
  ],
  avoid: [
    `Mit triumphierender Logik „gewinnen" wollen. Die Selbstwiderlegung zeigt man freundlich und geht dann zur eigentlichen Sorge über (Angst vor Intoleranz).`,
    `Den berechtigten Kern übergehen: Perspektiven, Vorurteile und Machtmissbrauch gibt es wirklich.`,
    `Wahrheit und eigene Meinung gleichsetzen („Ich habe die Wahrheit, also habe ich in allem recht").`,
  ],
  concessions: [
    `Unsere Erkenntnis ist begrenzt und von Herkunft, Sprache und Interessen geprägt; Demut ist angebracht.`,
    `Im Namen „der Wahrheit" ist – auch von Christen – Unrecht geschehen.`,
    `In Geschmacksfragen und vielen Alltagsfragen gibt es tatsächlich keine allgemein verbindliche Antwort.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'G. K. Chesterton', work: 'Orthodoxie', year: '1908', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Die Abschaffung des Menschen', year: '1943', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Boghossian', work: 'Fear of Knowledge: Against Relativism and Constructivism', year: '2006', status: 'paraphrase', note: 'Säkularer Philosoph (NYU) gegen den Relativismus; nicht zu verwechseln mit Peter Boghossian.' },
  ],
  difficulty: 1,
  tags: ['Relativismus', 'Wahrheit', 'Postmoderne', 'Toleranz', 'Selbstwiderlegung'],
  related: [
    'erkenntnistheorie/agnostizismus',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'pluralismus/arrogant-nur-jesus',
    'pluralismus/alle-religionen-gleich-wahr',
    'moral-und-gott/moral-kulturell-relativ',
    'religion-gewalt/religion-verursacht-kriege',
    'liberale-theologie/bibel-nur-menschliche-erfahrung',
  ],
};

export default claim;
