import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'quanten-ohne-ursache',
  title: `„Die Quantenmechanik zeigt Ereignisse ohne Ursache."`,
  proponents: [
    { name: 'Victor J. Stenger (†2014)', role: 'Teilchenphysiker', work: 'God: The Failed Hypothesis (2007)' },
    { name: 'Lawrence M. Krauss', role: 'Kosmologe', work: 'A Universe from Nothing (2012)' },
    { name: 'Quentin Smith (†2020)', role: 'Religionsphilosoph, Western Michigan University', work: '„The Uncaused Beginning of the Universe", Philosophy of Science 55 (1988)' },
    { name: 'Peter Atkins', role: 'Physikochemiker, Oxford', work: 'On Being (2011)' },
  ],
  steelman: `Der Satz „Alles, was geschieht, hat eine Ursache" stammt aus der Alltagserfahrung mit makroskopischen Dingen – und die Quantenmechanik hat ihn widerlegt. Wann ein radioaktiver Atomkern zerfällt, ist durch nichts bestimmt; zwei identische Kerne zerfallen zu verschiedenen Zeiten, ohne dass es einen Unterschied zwischen ihnen gibt. Bells Theorem und die Experimente, für die Aspect, Clauser und Zeilinger 2022 den Nobelpreis erhielten, schließen verborgene Variablen aus, die das erklären könnten. Im Vakuum tauchen ständig virtuelle Teilchen auf und verschwinden wieder. Wenn auf der fundamentalsten Ebene der Natur Ereignisse ohne Ursache geschehen, dann ist das Kausalprinzip, auf dem kosmologische Gottesbeweise aufbauen, empirisch erledigt.`,
  biblical: {
    summary: `Die Bibel kennt Zufall – und ordnet ihn Gottes Vorsehung unter: „Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will" (Spr 16,33). Was für Menschen unvorhersagbar ist, ist für Gott nicht ursachenlos. Gleichzeitig lehrt die Schrift, dass alles Geschaffene in jedem Augenblick von Gott getragen wird (Kol 1,17; Hebr 1,3). Statistische Gesetze sind ebenso Ausdruck der Schöpfungsordnung wie deterministische.`,
    detail: `- **Spr 16,33:** Das Los – das antike Zufallsinstrument schlechthin – steht unter Gottes Herrschaft.
- **Mt 10,29:** Kein Sperling fällt ohne den Vater – auch das scheinbar Zufällige ist nicht gottlos.
- **Kol 1,17; Hebr 1,3:** Erhaltung aller Dinge.
Die christliche Lehre braucht keinen strengen Determinismus. Gott kann durch deterministische wie durch probabilistische Gesetze wirken.`,
    sources: [
      { kind: 'bibel', work: 'Sprüche', ref: '16,33', quote: `Das Los wird geworfen in den Schoß; aber es fällt, wie der HERR will.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,3', quote: `… und trägt alle Dinge mit seinem kräftigen Wort …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Augustinus unterscheidet im *Gottesstaat*: Was wir „zufällig" nennen, ist nicht ohne Ursache, sondern seine Ursachen sind uns verborgen; und auch diese verborgenen Ursachen schreiben wir dem Willen Gottes zu. Die Kirche lehrt eine Vorsehung, die nicht jedes Ereignis mechanisch festlegt, aber alles umfasst. Darum ist Indeterminismus kein Problem für den Glauben.`,
    detail: `Die koptische Tradition betont Gottes fürsorgendes Handeln in allen Dingen, wie es im Dankgebet der Agpeya („Lasst uns danken dem Wohltäter …") für jeden Zustand ausgesprochen wird. Diese Vorsehung schließt Freiheit der Geschöpfe und offene Prozesse ein.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'V,9', year: 'ca. 417', quote: `Die Ursachen, die man zufällig nennt, erklären wir nicht für nichtig, sondern für verborgen, und wir schreiben sie dem Willen des wahren Gottes zu.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Agpeya, Dankgebet', quote: `Wir danken dir für jeden Zustand, in jedem Zustand und in allem.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Quantenmechanik liefert für viele Einzelereignisse nur Wahrscheinlichkeiten. Ob das bedeutet, dass die Natur grundsätzlich indeterministisch ist, hängt von der **Interpretation** ab – und darüber gibt es keinen Konsens. Die Kopenhagener Deutung und Kollapsmodelle (GRW) sind indeterministisch; die Viele-Welten-Deutung (Everett, heute u. a. von Sean Carroll vertreten) und die Bohmsche Mechanik sind vollständig deterministisch; der Superdeterminismus (u. a. Sabine Hossenfelder) ebenfalls. Bells Theorem schließt nur **lokale** verborgene Variablen aus.`,
    detail: `- **Radioaktiver Zerfall:** Die Zerfallswahrscheinlichkeit hängt von Kernstruktur und schwacher Wechselwirkung ab. Ohne Kern kein Zerfall. Was fehlt, ist ein deterministischer Zeitpunkt – nicht jede Ursache.
- **Bell und Nobelpreis 2022:** Aspect, Clauser und Zeilinger haben die Verletzung der Bellschen Ungleichungen nachgewiesen. Das widerlegt lokal-realistische Theorien, nicht nichtlokale wie die Bohmsche Mechanik und nicht Everett.
- **Virtuelle Teilchen:** Begriffe aus der Störungsrechnung der Quantenfeldtheorie. „Auftauchen aus dem Nichts" ist eine Metapher für Fluktuationen bestehender Felder im Vakuumzustand. Der Casimir-Effekt zeigt, dass das Vakuum physikalische Eigenschaften hat; er lässt sich nach R. L. Jaffe (*Phys. Rev. D* 72, 2005) auch ohne Bezug auf Vakuumfluktuationen als relativistische Van-der-Waals-Kraft berechnen.
- **Philosophisch:** Indeterminismus ist mit probabilistischer Kausalität vereinbar; das Kausalprinzip „Was zu existieren beginnt, hat eine Ursache" wird durch Übergänge innerhalb bestehender Systeme nicht berührt.`,
    sources: [
      { kind: 'gegner', author: 'Victor J. Stenger', work: 'God: The Failed Hypothesis', year: '2007', quote: `Quantenereignisse wie der radioaktive Zerfall geschehen ohne Ursache; das Kausalprinzip gilt auf der fundamentalen Ebene nicht.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'David Bohm', work: '„A Suggested Interpretation of the Quantum Theory in Terms of ‚Hidden‘ Variables I/II", Physical Review 85', year: '1952', quote: `Eine deterministische, nichtlokale Formulierung, die alle Vorhersagen der Quantenmechanik reproduziert.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Sean Carroll', work: 'Something Deeply Hidden: Quantum Worlds and the Emergence of Spacetime', year: '2019', quote: `In der Viele-Welten-Deutung entwickelt sich die Wellenfunktion vollständig deterministisch nach der Schrödinger-Gleichung.`, status: 'paraphrase', note: 'Ausgerechnet einer der führenden atheistischen Physiker vertritt eine deterministische Deutung.' },
      { kind: 'gegner', author: 'Sabine Hossenfelder & Tim Palmer', work: '„Rethinking Superdeterminism", Frontiers in Physics 8', year: '2020', quote: `Plädoyer für eine deterministische, „superdeterministische" Erklärung der Quantenphänomene.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Robert L. Jaffe', work: '„The Casimir Effect and the Quantum Vacuum", Physical Review D 72, 021301', year: '2005', quote: `Der Casimir-Effekt lässt sich ohne Bezug auf Nullpunktsenergien als relativistische, retardierte Van-der-Waals-Kraft berechnen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Quantenmechanik zeigt nicht, dass Dinge ohne Ursache geschehen, sondern dass manche Ereignisse nur statistisch vorhersagbar sind. Ein Urankern zerfällt – aber nur, weil es den Kern, die Felder und die Gesetze gibt. Unbestimmt heißt nicht ursachenlos. Und ob die Quantenwelt überhaupt indeterministisch ist, ist offen: Bohms Theorie und die Viele-Welten-Deutung – die Sean Carroll vertritt – sind vollständig deterministisch.`,
  keyPoints: [
    `**Unbestimmt ≠ ursachenlos:** Ein Zerfall braucht einen Kern, die schwache Kraft und Quantenfelder. Was fehlt, ist ein festgelegter Zeitpunkt, nicht jede Ursache.`,
    `**Probabilistische Kausalität:** Rauchen verursacht Lungenkrebs, ohne ihn in jedem Fall festzulegen.`,
    `**Interpretationsfrage:** Kopenhagen ist indeterministisch, Everett und Bohm deterministisch – kein Konsens.`,
    `**Bell schließt nur lokale verborgene Variablen aus:** Der Nobelpreis 2022 bestätigt Nichtlokalität, nicht Ursachenlosigkeit.`,
    `**Virtuelle Teilchen sind Feldfluktuationen:** Sie kommen nicht aus dem Nichts, sondern aus dem energiehaltigen Vakuum.`,
    `**Keine Gefahr für den Glauben:** „Das Los fällt, wie der HERR will" (Spr 16,33).`,
  ],
  voices: [
    {
      person: 'polkinghorne',
      role: 'als Teilchenphysiker und Theologe',
      text: `Polkinghorne, der jahrzehntelang in Cambridge über Quantenfeldtheorie forschte, betonte, dass die Quantenmechanik keine Welt ohne Ursachen beschreibt, sondern eine Welt mit offenen Möglichkeiten innerhalb fester Gesetze. Er sah in der quantenmechanischen (und chaostheoretischen) Offenheit eher Raum für das Wirken Gottes und für menschliche Freiheit als eine Widerlegung der Kausalität. Die Frage, ob die Unbestimmtheit ontologisch oder nur erkenntnistheoretisch ist, hielt er für eine metaphysische Entscheidung, die die Physik selbst nicht trifft.`,
      sources: [{ kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Quantum Physics and Theology: An Unexpected Kinship', year: '2007', quote: `Die Unbestimmtheit der Quantenwelt ist eine Frage der Interpretation; sie lässt Raum für Freiheit und göttliches Handeln, ohne die Kausalität aufzuheben.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Philosoph',
      text: `Craig verweist darauf, dass das Kausalprinzip des Kalam-Arguments von etwas spricht, das *zu existieren beginnt* – nicht von Übergängen innerhalb eines bestehenden Systems. Ein Quantenereignis im Vakuum geschieht in einem physikalischen Zustand mit Feldern und Energie, unter Naturgesetzen. Es ist also nicht „aus nichts". Außerdem verlangt das Prinzip eine Ursache, nicht eine *determinierende* Ursache: Auch indeterministische Ursachen sind Ursachen.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', ref: '3. Aufl., Kap. 3', year: '2008', quote: `Quantenereignisse sind nicht ursachenlos im Sinne einer Entstehung aus dem Nichts; sie setzen ein physikalisches Vakuum und Naturgesetze voraus.`, status: 'paraphrase' }],
    },
    {
      person: 'bruce-gordon',
      role: 'als Philosoph der Quantenmechanik',
      text: `Gordon argumentiert, dass die Quantenphänomene – Nichtlokalität, Verschränkung, das Fehlen einer klassischen Mechanik „unter" den Wahrscheinlichkeiten – gerade gegen ein geschlossenes, selbstgenügsames materielles Universum sprechen. Wenn die physikalische Wirklichkeit auf der fundamentalen Ebene keine hinreichenden materiellen Ursachen für Einzelereignisse enthält, dann stellt sich die Frage nach ihrem Grund umso schärfer. Für Gordon verweist die Quantenwelt auf einen Geist, der die Ordnung der Wahrscheinlichkeiten trägt.`,
      sources: [{ kind: 'fachliteratur', author: 'Bruce L. Gordon', work: '„A Quantum-Theoretic Argument against Naturalism", in: The Nature of Nature', year: '2011', quote: `Das Fehlen hinreichender materieller Ursachen in der Quantenwelt untergräbt den Naturalismus und verweist auf einen transzendenten Grund der Ordnung.`, status: 'paraphrase' }],
    },
    {
      person: 'augustinus',
      role: 'als Kirchenvater',
      text: `Augustinus wusste nichts von Quanten, aber viel über den Begriff des Zufalls. Was wir „zufällig" nennen, ist nach ihm nicht ursachenlos, sondern hat Ursachen, die uns verborgen sind – und auch diese stehen unter Gottes Vorsehung. Damit hat er eine Unterscheidung vorweggenommen, die in der Quantendebatte entscheidend ist: Unvorhersagbarkeit für uns ist etwas anderes als Ursachenlosigkeit an sich.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'De civitate Dei', ref: 'V,9', year: 'ca. 417', quote: `Zufällige Ursachen sind nicht nichtig, sondern verborgen.`, status: 'paraphrase' }],
    },
    {
      person: 'planck',
      role: 'als Begründer der Quantentheorie',
      text: `Max Planck, mit dessen Wirkungsquantum die Quantentheorie 1900 begann, hielt am Kausalbegriff als Leitprinzip der Forschung fest. In seinem Vortrag „Der Kausalbegriff in der Physik" (1932) argumentierte er, dass die statistischen Gesetze der Quantenphysik die Kausalität nicht aufheben, sondern sie in veränderter Form zum Ausdruck bringen. (Plancks Gottesbild war eher allgemein-theistisch; er wird hier nur als Physiker zitiert.)`,
      sources: [{ kind: 'wissenschaft', author: 'Max Planck', work: 'Der Kausalbegriff in der Physik', year: '1932', quote: `Auch die Quantenphysik setzt ein Kausalgesetz voraus; die statistische Form der Gesetze hebt die Kausalität nicht auf.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'zerfall-ohne-ursache',
      objection: `Radioaktiver Zerfall hat keine Ursache. Wann ein Atom zerfällt, bestimmt absolut nichts.`,
      objectionBy: 'Victor Stenger',
      answer: `Was nicht bestimmt ist, ist der genaue Zeitpunkt – vielleicht. Dass der Kern überhaupt zerfallen kann, hängt sehr wohl von Ursachen ab: von seiner Struktur, der schwachen Wechselwirkung, den Quantenfeldern. Ohne Kern kein Zerfall. Es fehlt eine *determinierende* Ursache, nicht jede Ursache.`,
      questionsBack: [`Kann ein Atomkern zerfallen, der nicht existiert?`],
      followUps: [
        {
          id: 'nicht-hinreichend-gleich-ursachenlos',
          objection: `Ein Ereignis ohne hinreichende Ursache ist eben ein Ereignis ohne Ursache.`,
          objectionBy: 'Quentin Smith',
          answer: `Nein. Es gibt probabilistische Ursachen: Rauchen verursacht Lungenkrebs, obwohl nicht jeder Raucher erkrankt. Ein Würfelwurf hat Ursachen, auch wenn das Ergebnis nicht vorhersagbar ist. Das Kausalprinzip verlangt eine Ursache, keine Vorherbestimmung.`,
          followUps: [
            {
              id: 'kalam-trotzdem-angeschlagen',
              objection: `Trotzdem: Das Prinzip „Alles, was zu existieren beginnt, hat eine Ursache" ist damit empirisch angeschlagen.`,
              objectionBy: 'Graham Oppy',
              answer: `Quantenereignisse sind Übergänge innerhalb bestehender physikalischer Systeme – ein Kern geht in einen anderen Zustand über, ein Feld wird angeregt. Hier beginnt nichts aus dem Nichts zu existieren. Das Kausalprinzip des Kalam-Arguments betrifft das Entstehen von Seiendem überhaupt; es bleibt unberührt.`,
              detail: `Ausführlich im Claim „Das kosmologische Kalam-Argument ist widerlegt".`,
              followUps: [
                {
                  id: 'urknall-auch-nur-uebergang',
                  objection: `Dann ist auch der Urknall nur ein Übergang eines Quantensystems – ein Zustand geht in einen anderen über. Kein „Beginnen aus dem Nichts", also greift dein Kausalprinzip dort genauso wenig.`,
                  objectionBy: 'Sean Carroll',
                  answer: `Dann stehst du vor einer Weiche. Entweder war der Urknall ein Übergang innerhalb eines schon bestehenden Systems – dann muss dieses System erklärt werden: Ist es ewig? Dagegen sprechen das BGV-Theorem und der zweite Hauptsatz. Oder das Universum hat absolut begonnen – dann gab es kein vorheriges Quantensystem, und die Quantenmechanik liefert gerade kein Beispiel für ein solches Beginnen. In beiden Fällen kann man aus Quantenereignissen nicht schließen, dass etwas ohne Grund ins Dasein tritt.`,
                  detail: `Dieser Zug ist wichtig, weil er zeigt, dass der Quanteneinwand und der Ewigkeitseinwand zusammenhängen: Wer den Urknall zum „bloßen Übergang" erklärt, hat sich auf ein vorher existierendes System festgelegt – und muss nun dessen Ewigkeit verteidigen. Damit wechselt das Gespräch zum Claim „Das Universum ist ewig oder zyklisch". Und auch ein ewiges System bliebe kontingent (siehe Kontingenzargument).`,
                  questionsBack: [`War der Urknall ein Übergang in einem schon existierenden System? Wenn ja – ist dieses System ewig, und wie entgeht es dem BGV-Theorem?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bell-nobelpreis',
      objection: `Bells Theorem und die Experimente, für die es 2022 den Nobelpreis gab, haben verborgene Variablen ausgeschlossen. Der Indeterminismus ist bewiesen.`,
      objectionBy: 'Lawrence Krauss',
      answer: `Bells Theorem schließt *lokale* verborgene Variablen aus. Nichtlokale Theorien wie die Bohmsche Mechanik sind damit vereinbar und vollständig deterministisch. Die Viele-Welten-Deutung ist ebenfalls deterministisch. Der Nobelpreis bestätigt die Verletzung der Bellschen Ungleichungen – nicht, dass Ereignisse ursachenlos sind.`,
      followUps: [
        {
          id: 'bohm-minderheit',
          objection: `Bohm ist eine Minderheitenmeinung. Die meisten Physiker folgen Kopenhagen.`,
          objectionBy: 'Victor Stenger',
          answer: `Mehrheiten entscheiden keine Interpretationsfrage, und Umfragen unter Physikern zeigen gerade keinen Konsens. Mein Punkt ist bescheiden: Die Quantenmechanik *zwingt* nicht zur Ursachenlosigkeit. Wer das behauptet, verkauft eine Interpretation als Ergebnis.`,
          followUps: [
            {
              id: 'viele-welten-aus-dem-nichts',
              objection: `Gut, aber wenn die Viele-Welten-Deutung stimmt, entsteht bei jeder Messung ein ganzes Universum aus dem Nichts!`,
              objectionBy: 'Gesprächspartner',
              answer: `Gerade nicht. In der Everett-Deutung entwickelt sich eine einzige universelle Wellenfunktion deterministisch; die „Verzweigung" ist Dekohärenz, kein Erschaffen neuer Materie. Sean Carroll betont das ausdrücklich. Nichts entsteht aus nichts – im Gegenteil: Alles ist streng gesetzmäßig.`,
              followUps: [
                {
                  id: 'interpretationen-leer',
                  objection: `Die Interpretationen machen alle dieselben Vorhersagen. Welche „wahr" ist, ist eine leere Frage. Halt den Mund und rechne – die Physik braucht keine Metaphysik der Kausalität.`,
                  objectionBy: 'Sabine Hossenfelder („Shut up and calculate")',
                  answer: `Dann gilt das aber in beide Richtungen: Auch der Satz „Die Quantenmechanik zeigt Ereignisse ohne Ursache" ist dann keine physikalische Aussage, sondern Metaphysik. Genau das ist mein Punkt. Die Physik liefert Wahrscheinlichkeiten, die hervorragend stimmen; ob dahinter Ursachen stehen, entscheidet sie nicht. Wer sie trotzdem als Beleg gegen das Kausalprinzip anführt, hat das „Halt den Mund" gerade nicht befolgt.`,
                  detail: `Die Haltung „Shut up and calculate" (oft David Mermin zugeschrieben) ist als Arbeitsregel legitim. Sie verbietet aber auch weitreichende weltanschauliche Schlüsse aus der Quantenmechanik – etwa, dass die Natur „ursachenlos" sei. Für den Laien heißt das: Wenn jemand mit der Quantenmechanik gegen das Kausalprinzip argumentiert, frage, welche Deutung er voraussetzt und warum gerade diese.`,
                  questionsBack: [`Wenn die Interpretationsfrage leer ist – wie kannst du dann behaupten, die Quantenmechanik zeige Ereignisse ohne Ursache?`],
                },
              ],
            },
          ],
        },
        {
          id: 'superdeterminismus',
          objection: `Bell setzt voraus, dass die Wahl der Messeinstellungen statistisch unabhängig von den verborgenen Variablen ist. Gibt man das auf, bekommt man eine lokale, vollständig deterministische Theorie – den Superdeterminismus. Ich halte ihn für unterschätzt.`,
          objectionBy: 'Sabine Hossenfelder',
          answer: `Das ist ein ehrlicher und interessanter Vorschlag – und er bestätigt meinen Punkt aufs Schönste: Eine führende Physikerin hält eine vollständig *deterministische* Deutung der Quantenmechanik für möglich. Damit ist klar, dass die Quantenmechanik nicht zu Ereignissen ohne Ursache zwingt. Kritiker halten den Superdeterminismus allerdings für teuer: Er verlangt, dass die Anfangsbedingungen des Universums Messgeräte und Teilchen auf genau passende Weise korrelieren. Aber gleich, wie man das bewertet – „ohne Ursache" folgt daraus gerade nicht.`,
          detail: `Hossenfelder und Tim Palmer haben in „Rethinking Superdeterminism" (2020) für eine ernsthafte Prüfung dieser Option geworben und experimentelle Tests vorgeschlagen. Die Mehrheit der Fachleute ist skeptisch. Für das Gespräch ist der Superdeterminismus ein Beleg dafür, wie offen die Interpretationsfrage ist: Von Bohm über Everett bis zum Superdeterminismus gibt es seriöse deterministische Optionen.`,
          sources: [{ kind: 'wissenschaft', author: 'Sabine Hossenfelder & Tim Palmer', work: '„Rethinking Superdeterminism", Frontiers in Physics 8', year: '2020', quote: `Gibt man die Annahme statistischer Unabhängigkeit auf, lässt sich die Quantenmechanik durch eine lokale, deterministische Theorie ergänzen; diese Option verdiene eine ernsthafte Prüfung.`, status: 'paraphrase' }],
          questionsBack: [`Wenn selbst eine vollständig deterministische Deutung ernsthaft vertreten wird – wie kann die Quantenmechanik dann „beweisen", dass es Ereignisse ohne Ursache gibt?`],
        },
      ],
    },
    {
      id: 'virtuelle-teilchen',
      objection: `Im Vakuum tauchen ständig virtuelle Teilchen aus dem Nichts auf und verschwinden wieder. Das sind Ereignisse ohne Ursache.`,
      objectionBy: 'Lawrence Krauss',
      answer: `Das Vakuum der Quantenfeldtheorie ist kein Nichts, sondern der Grundzustand von Feldern mit Energie und Struktur. „Virtuelle Teilchen" sind Begriffe aus der Störungsrechnung und beschreiben Fluktuationen dieser Felder. Sie tauchen nicht aus dem Nichts auf, sondern aus einem sehr reichen Etwas.`,
      followUps: [
        {
          id: 'casimir-beweist',
          objection: `Der Casimir-Effekt beweist doch, dass diese Fluktuationen real sind.`,
          objectionBy: 'Lawrence Krauss',
          answer: `Er zeigt, dass das Vakuum physikalische Eigenschaften hat – also dass es *etwas* ist. Und der Physiker Robert Jaffe hat gezeigt, dass man den Effekt auch ohne Bezug auf Vakuumfluktuationen als Kraft zwischen den Atomen der Platten berechnen kann. Beides spricht gegen die Rede vom „Nichts".`,
          followUps: [
            {
              id: 'energie-borgen',
              objection: `Die Energie-Zeit-Unschärfe erlaubt es, Energie für kurze Zeit zu „borgen". Je kleiner die Energie, desto länger darf die Leihgabe dauern. Das Universum hat eine Gesamtenergie von null – also darf es praktisch unbegrenzt existieren. Etwas aus nichts, ganz legal.`,
              objectionBy: 'Lawrence Krauss',
              answer: `Das „Borgen" ist eine populäre Metapher, keine Physik. Die Energie-Zeit-Unschärfe ist anders gebaut als die Orts-Impuls-Unschärfe – Zeit ist in der Quantenmechanik kein Messoperator – und sie erteilt keine „Erlaubnis", Energie aus dem Nichts zu leihen. Zudem ist die „Gesamtenergie des Universums" in der Allgemeinen Relativitätstheorie gar nicht allgemein definiert; Sean Carroll betont selbst, dass Energie in einem expandierenden Universum nicht im üblichen Sinn erhalten ist. Ein Rechenwert von null ist kein Nichts – er setzt Raumzeit, Felder und Gesetze voraus.`,
              detail: `Die Rede vom „Energie-Borgen" stammt aus populären Darstellungen der Störungstheorie. In der eigentlichen Theorie gibt es keinen Kreditgeber und keine Rückzahlungsfrist, sondern Felder in einem Grundzustand mit bestimmten Eigenschaften. Die Aussage, die positive Energie der Materie werde durch die negative Gravitationsenergie aufgehoben, gilt nur für bestimmte Modelle (etwa ein geschlossenes Universum) und mit bestimmten Definitionen. Selbst dann gilt: Null ist eine Bilanz von *etwas*, nicht die Abwesenheit von allem.`,
              sources: [{ kind: 'gegner', author: 'Sean Carroll', work: '„Energy Is Not Conserved", Blog Preposterous Universe', year: '2010', quote: `In einem expandierenden Universum sei die Energie nicht im üblichen Sinn erhalten; eine eindeutig definierte Gesamtenergie des Universums gebe es im Allgemeinen nicht.`, status: 'paraphrase', note: 'Carroll ist Atheist; seine Klarstellung betrifft die Physik, nicht die Gottesfrage.' }],
              questionsBack: [`Von wem wird die Energie „geborgt" – und in welchem Gesetz steht die Rückzahlungsfrist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'zufall-gegen-vorsehung',
      objection: `Wenn die Quantenwelt zufällig ist, dann ist Gottes Vorsehung unmöglich. Einstein sagte, Gott würfle nicht – und er lag falsch.`,
      objectionBy: 'Peter Atkins',
      answer: `Einsteins „Gott" war der Gott Spinozas, nicht der Gott der Bibel. Die Bibel kennt Zufall und stellt ihn unter Gottes Herrschaft: „Das Los fällt, wie der HERR will" (Spr 16,33). Statistische Gesetze sind ebenso Teil der Schöpfungsordnung wie deterministische. Polkinghorne sah in der Offenheit der Quantenwelt sogar Raum für Freiheit und Gottes Wirken.`,
      sources: [{ kind: 'wissenschaft', author: 'Albert Einstein', work: 'Brief an Max Born', year: '4. Dezember 1926', quote: `Jedenfalls bin ich überzeugt, daß der nicht würfelt.`, status: 'verbatim', note: 'Einstein meint „den Alten" – eine Chiffre für die Ordnung der Natur im Sinne Spinozas, nicht den persönlichen Gott der Bibel.' }],
    },
  ],
  questionsToAsk: [
    `Kann ein Atomkern zerfallen, ohne dass es den Kern, die Felder und die Gesetze gibt?`,
    `Ist „nicht vorhersagbar" dasselbe wie „ohne Ursache"?`,
    `Warum vertreten dann Sean Carroll und Sabine Hossenfelder deterministische Deutungen der Quantenmechanik?`,
    `Was genau ist das „Nichts", aus dem virtuelle Teilchen auftauchen?`,
  ],
  avoid: [
    `„Die Quantenmechanik ist nur eine Theorie, sie wird sich als falsch erweisen." – Sie ist die am genauesten bestätigte Theorie der Physik.`,
    `„Quantenmechanik beweist, dass Bewusstsein die Wirklichkeit erschafft." – Esoterische Fehldeutung, die du vermeiden solltest.`,
    `Die Kopenhagener Deutung pauschal für falsch erklären. Du musst nur zeigen, dass sie nicht zwingend ist.`,
  ],
  concessions: [
    `Nach der verbreiteten Kopenhagener Deutung sind Einzelereignisse wie der Zeitpunkt eines Zerfalls tatsächlich nicht determiniert.`,
    `Lokale verborgene Variablen sind durch Bell-Experimente sehr gut ausgeschlossen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Quantum Physics and Theology', year: '2007', status: 'paraphrase' },
    { kind: 'gegner', author: 'Sean Carroll', work: 'Something Deeply Hidden', year: '2019', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bruce L. Gordon & William A. Dembski (Hg.)', work: 'The Nature of Nature', year: '2011', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Quantenmechanik', 'Kausalität', 'Bell', 'Bohm', 'Viele Welten', 'virtuelle Teilchen'],
  related: [
    'gottesbeweise/kalam-widerlegt',
    'kosmologie/universum-aus-dem-nichts',
    'physik/physik-kausal-geschlossen',
    'willensfreiheit/freier-wille-illusion',
  ],
};

export default claim;
