import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'pseudogene-ervs',
  title: `„Pseudogene und ERVs sind gemeinsame Fehler, die gemeinsame Abstammung beweisen."`,
  proponents: [
    { name: 'Dennis Venema', role: 'Biologe, Trinity Western University; evangelikaler Christ (theistische Evolution)', work: 'Venema & McKnight, Adam and the Genome (2017)' },
    { name: 'Francis S. Collins', role: 'Genetiker, Leiter des Humangenomprojekts; evangelikaler Christ', work: 'The Language of God (2006)' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University', work: 'Only a Theory (2008)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
    { name: 'Edward E. Max', role: 'Immunologe (FDA)', work: '„Plagiarized Errors and Molecular Genetics", TalkOrigins Archive (1986, überarbeitet 2003)' },
  ],
  steelman: `Endogene Retroviren (ERVs) sind Spuren alter Virusinfektionen: Ein Retrovirus baut sein Erbgut an einer weitgehend zufälligen Stelle in das Genom einer Keimzelle ein, und diese Insertion wird an alle Nachkommen vererbt. Rund 8 % unseres Genoms bestehen aus solchen Resten. Mensch und Schimpanse teilen Tausende ERVs an genau denselben Positionen – bis auf die Base. Die Wahrscheinlichkeit, dass dasselbe Virus unabhängig zweimal exakt an derselben Stelle landet, ist verschwindend gering. Noch überzeugender ist das Muster: ERVs, die Mensch und Gorilla teilen, finden sich fast immer auch beim Schimpansen; ERVs, die Mensch und Orang-Utan teilen, auch bei Gorilla und Schimpanse – eine perfekte Verschachtelung, die exakt dem Stammbaum folgt. Dasselbe gilt für Pseudogene wie das zerstörte Vitamin-C-Gen GULO, das Menschen und andere Primaten mit denselben Defekten tragen. Wie Abschreibfehler in zwei Klausuren beweisen solche gemeinsamen „Fehler" eine gemeinsame Vorlage.`,
  biblical: {
    summary: `Gen 2,7 sagt, dass der Mensch aus „Erde" gebildet wurde – der biblische Text betont selbst die stoffliche Verwandtschaft des Menschen mit der übrigen Schöpfung. Zugleich empfängt der Mensch den Lebensatem Gottes und ist Gottes Bild (Gen 1,27). Die Frage, **wie** Gott den Leib des ersten Menschen bildete, beantwortet der Text nicht im Stil eines Laborberichts. Was er unmissverständlich lehrt: Der Mensch ist unmittelbar von Gott gewollt, mit einer geistigen Seele begabt und stammt von einem ersten Menschenpaar ab (Apg 17,26).`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '2,7', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.` },
      { kind: 'bibel', work: 'Genesis', ref: '1,27', translation: 'Luther 1912', status: 'verbatim', quote: `Und Gott schuf den Menschen ihm zum Bilde, zum Bilde Gottes schuf er ihn; und schuf sie einen Mann und ein Weib.` },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26', translation: 'Luther 1912', status: 'verbatim', quote: `und hat gemacht, daß von einem Blut aller Menschen Geschlechter auf dem ganzen Erdboden wohnen …` },
    ],
  },
  church: {
    summary: `Für die koptische Kirche ist verbindlich: Der Mensch ist nach Gottes Bild mit vernunftbegabter Seele geschaffen; Adam und Eva sind reale Personen. Die Väter sahen das Gottesbild nicht im Stoff des Leibes, sondern in der Vernunft (*logos*), der Freiheit und der Berufung zur Gemeinschaft mit Gott (Athanasius, Gregor von Nyssa). Ob der Leib des ersten Menschen aus früheren Lebewesen hervorging, hat die Kirche nicht dogmatisch entschieden; die kirchliche Tradition liest Gen 2,7 jedoch als unmittelbares, persönliches Wirken Gottes. Christen diskutieren hier verschiedene Modelle – mit Ehrfurcht vor Schrift und Tradition.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3', status: 'paraphrase', quote: `Gott schuf die Menschen nicht einfach wie die vernunftlosen Tiere auf Erden, sondern nach seinem Bild und gab ihnen Anteil an der Kraft seines eigenen Logos, damit sie vernünftig (logikoi) seien.` },
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '28–29', status: 'paraphrase', quote: `Seele und Leib haben einen gemeinsamen Anfang; weder existiert die Seele vor dem Leib noch der Leib ohne die Seele.` },
    ],
  },
  opposingView: {
    summary: `Geteilte ERV-Insertionen und Pseudogene gelten in der Genetik als eines der stärksten Argumente für die gemeinsame Abstammung von Mensch und Menschenaffen. Das Verteilungsmuster folgt weitgehend dem aus anderen Daten gewonnenen Stammbaum. Abweichungen werden durch unvollständige Liniensortierung (*incomplete lineage sorting*) erklärt, die bei kurz aufeinanderfolgenden Artaufspaltungen erwartet wird – etwa 30 % des Gorilla-Genoms zeigen ein vom Artenbaum abweichendes Muster (Scally et al. 2012). Retroviren integrieren nicht völlig zufällig, sondern bevorzugen bestimmte Regionen (z. B. aktive Gene), doch exakt identische unabhängige Integrationen sind selten. Einige ERVs wurden für wichtige Funktionen „kooptiert" (Syncytin in der Plazenta, regulatorische Elemente); für die Mehrzahl ist keine Funktion bekannt.`,
    detail: `Ehrlich festhalten: Gemeinsame Abstammung erklärt geteilte ERVs **elegant und sparsam**. Die Design-Antworten (Funktion, bevorzugte Integrationsstellen, gemeinsamer Bauplan) erklären einzelne Befunde, haben aber Mühe mit dem Gesamtmuster. Deshalb lohnt es sich, ehrlich die theologischen Optionen zu kennen, statt die Daten kleinzureden.`,
    sources: [
      { kind: 'wissenschaft', author: 'Sha Mi u. a.', work: '„Syncytin is a captive retroviral envelope protein involved in human placental morphogenesis", Nature 403', ref: 'S. 785–789', year: '2000', status: 'paraphrase', quote: `Das Hüllprotein eines endogenen Retrovirus (HERV-W) ist für die Bildung des Synzytiotrophoblasten der Plazenta wesentlich.` },
      { kind: 'wissenschaft', author: 'Aylwyn Scally u. a.', work: '„Insights into hominid evolution from the gorilla genome sequence", Nature 483', ref: 'S. 169–175', year: '2012', status: 'paraphrase', quote: `In etwa 30 % des Genoms steht der Gorilla dem Menschen oder dem Schimpansen näher als diese einander.` },
      { kind: 'wissenschaft', author: 'Astrid R. W. Schröder u. a.', work: '„HIV-1 integration in the human genome favors active genes and local hotspots", Cell 110', year: '2002', status: 'paraphrase', quote: `Retrovirale Integration ist nicht zufällig verteilt, sondern bevorzugt aktive Gene und lokale Hotspots.` },
      { kind: 'wissenschaft', author: 'Edward B. Chuong, Nels C. Elde, Cédric Feschotte', work: '„Regulatory evolution of innate immunity through co-option of endogenous retroviruses", Science 351', ref: 'S. 1083–1087', year: '2016', status: 'paraphrase', quote: `ERV-Abschnitte (LTRs) wurden als Verstärker in die Interferon-Antwort des Immunsystems eingebunden.` },
    ],
  },
  quickAnswer: `Ehrlich gesagt: Geteilte ERVs sind ein starkes Argument, und gemeinsame Abstammung erklärt sie elegant. Es gibt Design-Antworten – viele ERVs haben Funktionen, Viren integrieren bevorzugt an bestimmten Stellen –, aber sie erklären nicht das ganze Muster. Entscheidend ist: Selbst wenn der menschliche **Leib** gemeinsame Vorfahren mit den Affen hätte, wäre damit weder die geistige Seele noch die Sonderstellung Adams als erster Mensch nach Gottes Bild widerlegt. Die Genetik misst Moleküle, nicht das Gottesbild.`,
  keyPoints: [
    `**Ehrlich zugestehen:** Die Verteilung geteilter ERVs und Pseudogene passt gut zum Stammbaum; gemeinsame Abstammung ist hier die naheliegende Erklärung.`,
    `**Funktion ist real:** Syncytin (Plazenta), HERV-H (Stammzellidentität), ERV-Verstärker der Immunantwort – „Virenmüll" ist teilweise unverzichtbar.`,
    `**Integration ist nicht zufällig:** Retroviren bevorzugen bestimmte Regionen; unvollständige Liniensortierung erzeugt Abweichungen vom Baum. Das schwächt, aber erledigt das Argument nicht.`,
    `**Was nicht folgt:** Gemeinsame Abstammung des Leibes widerlegt weder Gott als Schöpfer noch die geistige Seele noch einen realen Adam.`,
    `**Christen haben mehrere Optionen** (siehe Argument) – keine davon zwingt zum Materialismus.`,
  ],
  argument: {
    name: 'Die Optionen eines koptischen Christen gegenüber geteilten ERVs',
    summary: 'Statt die Daten kleinzureden: die möglichen christlichen Antworten fair nebeneinanderstellen.',
    premises: [
      { text: `P1: Mensch und Menschenaffen teilen zahlreiche ERV-Insertionen und Pseudogene in einem überwiegend baumförmigen Muster.`, support: `Genomvergleiche seit den 2000er-Jahren; Abweichungen durch unvollständige Liniensortierung.` },
      { text: `P2: Der christliche Glaube verlangt, dass Gott Schöpfer ist, der Mensch eine geistige Seele nach Gottes Bild hat und Adam und Eva reale Personen sind.`, support: `Koptisch-orthodoxe Lehre; Gen 1–3; Röm 5; Athanasius, De Incarnatione 3.` },
      { text: `P3: P1 steht zu keiner der Aussagen in P2 in logischem Widerspruch.`, support: `Die Genetik untersucht die Abstammung von DNA-Sequenzen, nicht die Herkunft der geistigen Seele oder die Berufung einer Person.` },
    ],
    conclusion: `Ein Christ kann die Daten ernst nehmen, ohne seinen Glauben aufzugeben. Welche Deutung zutrifft, ist eine offene Frage – keine Dogmenfrage.`,
    horns: [
      { label: 'Option A: Gemeinsamer Bauplan und Funktion', text: `Viele ERV-artige Elemente haben Funktionen; ähnliche Elemente an ähnlichen Orten könnten Teil eines gemeinsamen Bauplans sein. Stärke: wahrt eine eigenständige Erschaffung des Menschen. Schwäche: erklärt das verschachtelte Gesamtmuster und offensichtlich zerfallene Kopien nur mühsam.` },
      { label: 'Option B: Gemeinsame Abstammung des Leibes, besondere Erschaffung des Menschen', text: `Der Leib des Menschen hat gemeinsame Vorfahren mit den Affen; Gott erschuf Adam und Eva als erste Menschen mit geistiger Seele und rief sie in die Gemeinschaft mit sich (Varianten: Swamidass, Craig, Collins). Stärke: integriert die genetischen Daten. Schwäche: Spannung zur traditionellen Lesart von Gen 2,7 und offene Fragen zu den „anderen" Hominiden; in der Orthodoxie umstritten.` },
      { label: 'Option C: Offenlassen', text: `Die Daten sind ernst zu nehmen, aber die Frage nach dem biologischen Weg ist nicht entschieden; der Glaube hängt nicht an ihr. Stärke: Demut. Schwäche: Im Gespräch kann es ausweichend wirken – daher die Gründe nennen.` },
    ],
  },
  voices: [
    {
      person: 'jonathan-mclatchie',
      role: 'als Biologe und Apologet',
      text: `McLatchie gehört zu den Design-Befürwortern, die die ERV-Daten im Detail diskutieren. Er verweist auf zunehmend entdeckte Funktionen von ERV-Abschnitten (Promotoren, Verstärker, RNA-Gene), auf die Bevorzugung bestimmter Integrationsorte und auf Abweichungen vom erwarteten Baummuster. Er räumt ein, dass gemeinsame Abstammung ein naheliegendes Modell ist, hält das Argument aber für weniger zwingend, als es in populären Darstellungen erscheint.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jonathan McLatchie', work: 'Beiträge auf evolutionnews.org zu ERVs und gemeinsamer Abstammung', status: 'unverified', note: 'Einzelne Artikel vor Zitierung heraussuchen.' },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Genetiker (Position der theistischen Evolution)',
      text: `Collins hält geteilte „Fehler" wie zerfallene Transposons an identischen Stellen im Genom von Mensch und Maus für einen klaren Beleg gemeinsamer Abstammung – es sei denn, man unterstelle Gott eine absichtliche Täuschung. Zugleich betont er, dass dies den Glauben nicht gefährdet: Die Einzigartigkeit des Menschen liege im Moralgesetz und in der Fähigkeit, Gott zu erkennen – nicht in einem besonderen DNA-Abschnitt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 5–6', year: '2006', status: 'paraphrase' },
      ],
    },
    {
      person: 'joshua-swamidass',
      role: 'als Computerbiologe',
      text: `Swamidass akzeptiert die gemeinsame Abstammung, zeigt aber, dass daraus kein Widerspruch zu einem realen Adam folgt. Sein genealogisches Modell unterscheidet zwischen genetischer und genealogischer Abstammung: Ein Paar, das vor einigen tausend Jahren lebte, kann der genealogische Vorfahr aller heute lebenden Menschen sein, auch wenn die DNA vieler Vorfahren beigetragen hat. Damit verschiebt sich die Frage von der Genetik zur Theologie.`,
      sources: [
        { kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve: The Surprising Science of Universal Ancestry', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe des Gottesbildes',
      text: `Athanasius bestimmt das Besondere des Menschen nicht über den Stoff des Leibes, sondern über die Gabe des Logos: Gott schuf den Menschen nach seinem Bild und gab ihm Anteil an seiner Vernunft, damit er Gott erkennen und in Gemeinschaft mit ihm leben könne. Diese Sonderstellung ist keine biologische Kategorie, die man in einer DNA-Sequenz finden oder widerlegen könnte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '3', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Anthropologe',
      text: `Gregor betont die Einheit von Leib und Seele: Beide haben einen gemeinsamen Anfang, keine Seele existiert vor dem Leib. Zugleich sieht er im Menschen ein „Bindeglied" der Schöpfung, das mit Pflanzen und Tieren das Leben teilt und doch durch die Vernunft über sie hinausragt. Diese Sicht erlaubt es, die Verwandtschaft des Menschen mit der übrigen Schöpfung anzuerkennen, ohne seine Würde aufzugeben.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: '8; 28–29', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'ervs-identische-stellen',
      objection: `Mensch und Schimpanse teilen Tausende ERVs an exakt denselben Positionen. Unabhängige Integration an derselben Base ist praktisch ausgeschlossen. Nur gemeinsame Abstammung erklärt das.`,
      objectionBy: 'Dennis Venema',
      answer: `Ich gebe zu: Das ist ein starkes Argument, und gemeinsame Abstammung erklärt es elegant. Es gibt Teilantworten – Viren bevorzugen bestimmte Regionen, viele ERVs haben Funktionen –, aber sie erklären nicht das ganze Muster. Für mich als koptischen Christen ist der entscheidende Punkt: Selbst gemeinsame Abstammung des Leibes widerlegt weder die geistige Seele noch Adam als ersten Menschen nach Gottes Bild.`,
      followUps: [
        {
          id: 'verschachtelung-perfekt',
          objection: `Hotspots gibt es, aber nicht auf die Base genau. Und die Verschachtelung ist perfekt: Was Mensch und Gorilla teilen, hat auch der Schimpanse.`,
          objectionBy: 'Jerry Coyne',
          answer: `Nicht ganz perfekt: Bei kurz aufeinanderfolgenden Artaufspaltungen gibt es Abweichungen – etwa 30 % des Gorilla-Genoms zeigen ein vom Artenbaum abweichendes Muster. Ich weiß, dass das durch unvollständige Liniensortierung erklärt wird, und das ist eine gut verstandene Erklärung. Ich will das Argument nicht kleinreden – nur genau sein.`,
          followUps: [
            {
              id: 'ils-ist-bestaetigung',
              objection: `Unvollständige Liniensortierung ist quantitativ vorhergesagt. Das ist eine Bestätigung der Theorie, kein Problem.`,
              objectionBy: 'Dennis Venema',
              answer: `Einverstanden – das gestehe ich zu. Dann sollten wir aber beim eigentlichen Punkt ankommen: Die Daten sprechen für gemeinsame Abstammung von DNA-Sequenzen. Sie sagen nichts darüber, ob der Prozess ungelenkt war, ob der Mensch eine geistige Seele hat oder ob es ein erstes Menschenpaar gab. Diese Fragen entscheiden andere Argumente.`,
            },
          ],
        },
        {
          id: 'warum-nicht-einfach-abstammung',
          objection: `Warum dann nicht einfach gemeinsame Abstammung annehmen? Adam und Eva können trotzdem real sein – das zeigt mein genealogisches Modell.`,
          objectionBy: 'Joshua Swamidass',
          answer: `Das ist eine legitime Option, die ich respektiere. Die koptische Kirche hat über den biologischen Weg kein Dogma formuliert; sie liest Gen 2,7 aber traditionell als unmittelbares Wirken Gottes. Deshalb halte ich die Frage offen und prüfe die Modelle sorgfältig. Wichtig ist mir: Adam und Eva als reale Personen, der Fall, die geistige Seele – das bleibt.`,
          followUps: [
            {
              id: 'genealogischer-adam-ad-hoc',
              objection: `Ein „genealogischer Adam" ist eine Ad-hoc-Rettung, damit Theologen ihr Gesicht wahren.`,
              objectionBy: 'Jerry Coyne',
              answer: `Das Modell beruht auf gut etablierter Mathematik der Genealogie: Rohde, Olson und Chang zeigten 2004 in Nature, dass der jüngste gemeinsame genealogische Vorfahr aller heute lebenden Menschen vor wenigen Jahrtausenden gelebt haben könnte. Ob man das Modell theologisch überzeugend findet, ist eine andere Frage – unwissenschaftlich ist es nicht. Mehr dazu im Claim zu Adam und Eva.`,
              sources: [
                { kind: 'wissenschaft', author: 'Douglas L. T. Rohde, Steve Olson, Joseph T. Chang', work: '„Modelling the recent common ancestry of all living humans", Nature 431', ref: 'S. 562–566', year: '2004', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'syncytin-ausnahme',
      objection: `Syncytin ist eine Ausnahme. Die allermeisten ERVs sind zerfallene Wracks ohne jede Funktion.`,
      objectionBy: 'Kenneth Miller',
      answer: `Die Liste der Funktionen wächst: ERV-Abschnitte dienen als Promotoren und Verstärker, etwa für die Interferon-Antwort des Immunsystems (Chuong et al., Science 2016); HERV-H ist für die Identität menschlicher embryonaler Stammzellen wichtig (Lu et al. 2014). Dass wir für viele Kopien keine Funktion kennen, ist wahr – aber „unbekannt" ist nicht dasselbe wie „funktionslos".`,
      sources: [
        { kind: 'wissenschaft', author: 'Xinyi Lu u. a.', work: '„The retrovirus HERVH is a long noncoding RNA required for human embryonic stem cell identity", Nature Structural & Molecular Biology 21', year: '2014', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'kooption-beweist-virusherkunft',
          objection: `Gerade die Kooption beweist doch, dass sie Viren waren: Syncytin ist ein retrovirales Hüllprotein. Kein Designer baut Gene ein, die wie Virusgene aussehen.`,
          objectionBy: 'Larry Moran',
          answer: `Das ist ein guter Punkt. Es gibt zwar Überlegungen, manche Viren könnten umgekehrt aus zellulären Elementen hervorgegangen sein – das ist aber spekulativ und eine Minderheitenmeinung. Ich gestehe zu: Die virale Herkunft vieler ERVs ist gut begründet. Daraus folgt aber nur etwas über die Geschichte dieser Sequenzen, nicht über den Ursprung des Menschen als Person.`,
          followUps: [
            {
              id: 'spekulation-ohne-belege',
              objection: `Also gibst du zu, dass deine Design-Antworten Spekulation sind.`,
              objectionBy: 'Dennis Venema',
              answer: `Manche ja, und ich will ehrlich sein. Deshalb stütze ich mich nicht auf sie, sondern auf den Kernpunkt: Selbst wenn ERVs gemeinsame Abstammung des Leibes belegen, bleibt die christliche Lehre über Gott, die Seele und Adam unberührt. Die stärkeren Argumente gegen den Materialismus liegen anderswo – beim Ursprung des Lebens, der Information und des Geistes.`,
            },
          ],
        },
      ],
    },
    {
      id: 'gulo-vitamin-c',
      objection: `Unser Vitamin-C-Gen GULO ist kaputt – und zwar mit denselben Defekten wie bei anderen Primaten. Meerschweinchen haben ihr GULO-Gen unabhängig verloren, mit ganz anderen Mutationen. Das ist genau das Muster gemeinsamer Abstammung.`,
      objectionBy: 'Francis Collins',
      answer: `Ja, das ist ein gutes Beispiel, und ich will es nicht wegdiskutieren. Bei Primaten liegen geteilte Defekte vor, beim Meerschweinchen unabhängige – das passt gut zur Abstammung. Manche argumentieren mit Mutations-Hotspots; das halte ich hier für schwach. Ich ziehe den ehrlicheren Schluss: Für die Frage nach der Abstammung des Leibes ist das ein starkes Indiz; für die Frage nach Gott und Seele ist es irrelevant.`,
      sources: [
        { kind: 'wissenschaft', author: 'Morimitsu Nishikimi u. a.', work: '„Cloning and chromosomal mapping of the human nonfunctional gene for L-gulono-gamma-lactone oxidase, the enzyme for L-ascorbic acid biosynthesis missing in man", Journal of Biological Chemistry 269', ref: 'S. 13685–13688', year: '1994', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'hotspot-argument-schwach',
          objection: `Gut, dass du das Hotspot-Argument nicht bemühst – es ist schwach. Das Muster passt zum Baum.`,
          objectionBy: 'Nathan Lents',
          answer: `Richtig, und ich rate jedem Christen, hier nicht zu übertreiben. Schwache Argumente schaden mehr, als sie nützen. Interessanter ist die Frage, die du nicht beantworten kannst: Warum gibt es überhaupt ein Wesen, das Genome liest, Muster erkennt und nach Wahrheit fragt? Darum geht es beim Gottesbild.`,
        },
        {
          id: 'designer-baut-kaputtes-gen',
          objection: `Warum sollte ein Designer überhaupt ein kaputtes Gen einbauen?`,
          objectionBy: 'Jerry Coyne',
          answer: `Ein kaputtes Gen ist nicht kaputt eingebaut worden, sondern kaputtgegangen – das ist Verlust. Ob man es durch gemeinsame Abstammung oder anders erklärt: Es ist eine Spur von Verfall, nicht von Konstruktion. Der christliche Glaube erwartet eine gute Schöpfung, die Verfall kennt.`,
        },
      ],
    },
    {
      id: 'mensch-nur-affe-seele-illusion',
      objection: `Wenn du gemeinsame Abstammung zugibst, ist der Mensch eben nur ein Affe. Die Seele ist dann eine Illusion.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das folgt nicht. Die Abstammung von DNA-Sequenzen sagt nichts darüber, ob der Mensch eine geistige Seele hat – so wenig wie die chemische Analyse der Tinte etwas über die Wahrheit eines Gedichts sagt. Athanasius verortete das Gottesbild in der Vernunft und der Fähigkeit, Gott zu erkennen. Dass ausgerechnet der Mensch Genome entschlüsselt und nach Wahrheit fragt, ist erklärungsbedürftig.`,
      followUps: [
        {
          id: 'unterschied-nur-graduell',
          objection: `Der Unterschied zwischen Mensch und Tier ist nur graduell. Schimpansen benutzen Werkzeuge, haben Kultur, trauern.`,
          objectionBy: 'Jerry Coyne',
          answer: `Schimpansen sind bewundernswerte Geschöpfe. Aber abstraktes Denken, rekursive Sprache, Mathematik, Moralphilosophie, Gottesdienst – hier liegt ein qualitativer Sprung. Und wenn unser Geist nur ein Nebenprodukt der Selektion auf Überleben wäre, hätten wir keinen Grund, ihm bei der Frage nach dem Naturalismus zu trauen – Darwin selbst äußerte diesen „schrecklichen Zweifel". Siehe die Claims zu Mensch und Tier und zu Vernunft und Evolution.`,
          sources: [
            { kind: 'gegner', author: 'Charles Darwin', work: 'Brief an William Graham', ref: '3. Juli 1881', year: '1881', status: 'verbatim', quote: `Bei mir erhebt sich immer der schreckliche Zweifel, ob die Überzeugungen des menschlichen Geistes, der sich aus dem Geist der niederen Tiere entwickelt hat, irgendeinen Wert haben oder überhaupt vertrauenswürdig sind.`, original: `With me the horrid doubt always arises whether the convictions of man's mind, which has been developed from the mind of the lower animals, are of any value or at all trustworthy.`, translation: 'eigene Übersetzung' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welche Aussage über die geistige Seele des Menschen lässt sich aus einer ERV-Insertion ableiten?`,
    `Wenn die Abstammung des Leibes feststünde – was genau wäre damit über Gott oder den Sinn des Menschen bewiesen?`,
    `Warum ist ausgerechnet der Mensch das Wesen, das Genome liest und nach Wahrheit fragt?`,
    `Wie unterscheidest du „Funktion unbekannt" von „funktionslos"?`,
  ],
  avoid: [
    `„ERVs sind gar keine Viren, das ist eine Erfindung." – Die virale Herkunft vieler ERVs ist gut begründet.`,
    `„Das Hotspot-Argument erklärt alles." – Integrationsvorlieben existieren, erklären aber nicht das Gesamtmuster.`,
    `So tun, als ob gemeinsame Abstammung des Leibes den Glauben zerstören würde. Das ist eine Niederlage auf einem Feld, auf dem der Glaube gar nicht kämpfen muss.`,
  ],
  concessions: [
    `Geteilte ERVs und Pseudogene sind ein starkes Indiz für gemeinsame Abstammung; die Abstammung erklärt sie elegant.`,
    `Für die meisten ERV-Kopien ist keine Funktion bekannt.`,
    `Viele gläubige Genetiker (Collins, Venema, Swamidass) halten die gemeinsame Abstammung des Menschen für erwiesen.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Dennis R. Venema, Scot McKnight', work: 'Adam and the Genome: Reading Scripture after Genetic Science', year: '2017', status: 'paraphrase', note: 'Christliche Gegenposition (theistische Evolution).' },
    { kind: 'fachliteratur', author: 'S. Joshua Swamidass', work: 'The Genealogical Adam and Eve', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ann Gauger, Douglas Axe, Casey Luskin', work: 'Science and Human Origins', year: '2012', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['ERVs', 'Pseudogene', 'GULO', 'Gemeinsame Abstammung', 'Gottesbild', 'Seele'],
  related: [
    'genetik/adam-eva-genetisch-unmoeglich',
    'genetik/chromosom-2-fusion',
    'genetik/junk-dna',
    'evolutionaere-psychologie/mensch-nur-tier',
    'naturalismus/vernunft-durch-evolution',
  ],
};

export default claim;
