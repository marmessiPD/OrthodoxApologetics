import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'split-brain',
  title: `„Split-Brain-Patienten zeigen, dass es keine einheitliche Seele gibt."`,
  proponents: [
    { name: 'Michael Gazzaniga', role: 'Neurowissenschaftler, University of California Santa Barbara, Pionier der Split-Brain-Forschung', work: 'Who\'s in Charge? Free Will and the Science of the Brain (2011)' },
    { name: 'Derek Parfit', role: 'Philosoph, Oxford (gest. 2017)', work: 'Reasons and Persons (1984)' },
    { name: 'Susan Blackmore', role: 'Psychologin', work: 'Consciousness: An Introduction (3. Aufl. 2018)' },
    { name: 'Thomas Nagel', role: 'Philosoph, New York University', work: '„Brain Bisection and the Unity of Consciousness", Synthese 22 (1971)' },
  ],
  steelman: `Bei schwerer Epilepsie wurde seit den 1960er-Jahren der Balken (Corpus callosum) durchtrennt, die Hauptverbindung zwischen den Hirnhälften. Roger Sperry und Michael Gazzaniga zeigten dann Erstaunliches: Zeigt man ein Bild nur dem linken Gesichtsfeld (also der rechten Hirnhälfte), kann der Patient nicht sagen, was er sah – seine linke Hand greift aber zielsicher den passenden Gegenstand. Die sprachfähige linke Hirnhälfte erfindet dann Begründungen für Handlungen, die die rechte ausgelöst hat (der „Interpreter"). In manchen Fällen arbeiten die Hände gegeneinander. Wenn ein Skalpell das Bewusstsein in zwei Ströme spalten kann, dann ist das Ich kein unteilbares Seelenwesen, sondern das Produkt neuronaler Verbindungen. Parfit folgerte: Es gibt keine tiefe, zusätzliche Tatsache darüber, wer ich bin – nur Grade psychologischer Verbundenheit. Die „eine Seele" ist eine Geschichte, die die linke Hirnhälfte sich erzählt.`,
  biblical: {
    summary: `Die Bibel kennt die innere Zerrissenheit des Menschen sehr genau: Paulus beschreibt, dass er nicht tut, was er will (Röm 7,15–23), und Jakobus nennt den Zweifler einen „zwiespältigen" Menschen – wörtlich *dipsychos*, „doppelseelig" (Jak 1,8). Die Schrift setzt also nicht voraus, dass die Einheit der Person sich als lückenlose psychische Harmonie zeigt. Einheit ist zugleich Gabe und Aufgabe: „Erhalte mein Herz bei dem einen, dass ich deinen Namen fürchte" (Ps 86,11).`,
    detail: `- **Röm 7,15–23:** Ein und derselbe Mensch („ich") erlebt zwei widerstreitende Gesetze in sich. Das Subjekt bleibt eins, die Erfahrung ist gespalten.
- **Jak 1,8:** ἀνὴρ δίψυχος – der „Zwei-Seelen-Mann" ist ein Bild für innere Gespaltenheit, nicht für zwei Personen.
- **Jer 17,9:** Das menschliche Herz ist schwer zu durchschauen – auch für den Menschen selbst. Konfabulation ist der Bibel nicht fremd.`,
    sources: [
      { kind: 'bibel', work: 'Jakobus', ref: '1,8', quote: `Ein Zweifler ist unbeständig in allen seinen Wegen.`, original: `ἀνὴρ δίψυχος, ἀκατάστατος ἐν πάσαις ταῖς ὁδοῖς αὐτοῦ`, translation: 'Luther 1912', status: 'verbatim', note: 'δίψυχος = wörtlich „doppelseelig".' },
      { kind: 'bibel', work: 'Römer', ref: '7,19', quote: `Denn das Gute, das ich will, das tue ich nicht; sondern das Böse, das ich nicht will, das tue ich.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '86,11', status: 'paraphrase', quote: `Weise mir, HERR, deinen Weg … erhalte mein Herz bei dem einen, dass ich deinen Namen fürchte.` },
      { kind: 'bibel', work: 'Jeremia', ref: '17,9', quote: `Es ist das Herz ein trotzig und verzagt Ding; wer kann es ergründen?`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut der Luther-Übersetzung sinngemäß.' },
    ],
  },
  church: {
    summary: `Die Väter lehren die Einheit der menschlichen Person, verstehen sie aber nicht als räumliche Einheit eines Organs. Die Seele ist nicht in einem Teil des Körpers eingeschlossen und kann darum nicht „halbiert" werden; sie wirkt jedoch durch die Organe und ist in ihrer Äußerung auf deren Zusammenspiel angewiesen. Die orthodoxe asketische Tradition beschreibt zudem den gefallenen Menschen als innerlich zerstreut: Der *nous* (Geist) ist durch die Leidenschaften zersplittert und wird durch Gebet und Gnade geeint.`,
    detail: `- **Gregor von Nyssa** (Über die Erschaffung des Menschen, Kap. 12–15): Der Geist ist nicht an einen Ort gebunden, sondern gleichermaßen dem ganzen Organismus gegenwärtig; er wirkt durch die Sinne und Organe wie durch Werkzeuge.
- **Augustinus** (De Trinitate X) betont, dass der Geist sich selbst mit unmittelbarer Gewissheit als einen erkennt, auch wenn er über seine Natur irren kann.
- Die Sammlung des zerstreuten Geistes ist ein Grundmotiv des Mönchtums; das Herzensgebet will den Menschen „einen".`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 12–15', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Über die Dreieinigkeit (De Trinitate)', ref: 'Buch X', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die klassischen Split-Brain-Befunde sind gut belegt: Unter Laborbedingungen, bei denen Reize gezielt nur einer Hirnhälfte dargeboten werden, zeigt sich eine Trennung von Wahrnehmung und sprachlichem Bericht. Im Alltag verhalten sich die Patienten jedoch weitgehend wie eine einheitliche Person. Ob in solchen Fällen „zwei Bewusstseine" vorliegen, ist in Neurowissenschaft und Philosophie **umstritten**. Eine viel beachtete Studie (Pinto u. a., Brain 2017) fand bei zwei Patienten „geteilte Wahrnehmung, aber ungeteiltes Bewusstsein"; Gazzaniga und andere widersprachen. Einen Konsens, dass Split-Brain zwei Personen erzeugt, gibt es nicht.`,
    detail: `- **Sperry** erhielt 1981 den Nobelpreis für diese Forschung. Er beschrieb die getrennten Hemisphären zunächst als zwei Bewusstseinssphären, vertrat später aber einen anti-reduktionistischen „Mentalismus", in dem Bewusstsein kausal von oben nach unten wirkt (Sperry 1980).
- **Pinto u. a. (2017):** Zwei Patienten mit vollständiger Kallosotomie konnten das Vorhandensein und den Ort von Reizen in beiden Gesichtsfeldern mit jeder Antwortform (Sprache, linke oder rechte Hand) angeben, auch wenn sie die Reize nicht vergleichen konnten. Die Autoren sprachen von „divided perception but undivided consciousness".
- **Gegenposition:** Volz & Gazzaniga (2017) erklären solche Ergebnisse mit subkortikalen Verbindungen oder Querhinweisen zwischen den Hemisphären.
- **Philosophie:** Tim Bayne (The Unity of Consciousness, 2010) vertritt ein „Wechselmodell", nach dem jeweils ein einziger Bewusstseinsstrom vorliegt, der zwischen den Hemisphären wechselt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Y. Pinto, D. A. Neville, M. Otten u. a.', work: 'Split brain: divided perception but undivided consciousness', ref: 'Brain 140 (2017), 1231–1237', year: '2017', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'L. J. Volz, M. S. Gazzaniga', work: 'Interaction in isolation: 50 years of insights from split-brain research', ref: 'Brain 140 (2017), 2051–2060', year: '2017', status: 'unverified', note: 'Kritische Gegendarstellung aus Gazzanigas Arbeitsgruppe; Titel und Seitenzahlen vor Zitierung prüfen.' },
      { kind: 'wissenschaft', author: 'Roger W. Sperry', work: 'Mind-brain interaction: Mentalism, yes; dualism, no', ref: 'Neuroscience 5 (1980), 195–206', year: '1980', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Tim Bayne', work: 'The Unity of Consciousness', year: '2010', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Split-Brain-Patienten führen nach der Operation ein erstaunlich normales Leben als **eine** Person; die berühmten Spaltungseffekte zeigen sich nur in raffinierten Laborsituationen, in denen Reize gezielt einer Hirnhälfte gezeigt werden. Eine Studie in der Fachzeitschrift „Brain" (Pinto u. a. 2017) fand sogar: geteilte Wahrnehmung, aber ungeteiltes Bewusstsein. Und dass ein Mensch, dem die Verbindung zwischen den Hirnhälften fehlt, nicht mehr alle Informationen zusammenführen kann, ist genau das, was man erwartet, wenn die Seele durch das Gehirn als Instrument wirkt.`,
  keyPoints: [
    `**Im Alltag eine Person:** Split-Brain-Patienten arbeiten, lieben, planen und sprechen von sich als einem Ich. Die Effekte treten nur unter künstlichen Laborbedingungen auf.`,
    `**Wissenschaftlich umstritten:** Ob überhaupt „zwei Bewusstseine" vorliegen, ist offen; Pinto u. a. (2017) fanden Hinweise auf ein ungeteiltes Bewusstsein.`,
    `**Einheit des Subjekts ≠ Einheit der Informationen:** Auch Gesunde haben dissoziierte Inhalte (Träume, automatisierte Handlungen, Hypnose), ohne zu zwei Personen zu werden.`,
    `**Instrument-Erwartung:** Wenn die Seele durch die Organe wirkt (Gregor von Nyssa), schränkt eine durchtrennte Verbindung ihre Äußerung ein – ohne die Seele zu teilen.`,
    `**Die Bibel kennt innere Spaltung:** Röm 7 und Jak 1,8 („doppelseelig") beschreiben Zerrissenheit in einem Subjekt.`,
    `**Hemisphärektomie zeigt das Gegenteil:** Kinder, denen eine ganze Hirnhälfte entfernt wurde, werden nicht zu „halben Personen".`,
  ],
  voices: [
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Michael Egnor hält die Split-Brain-Befunde für eines der stärksten Argumente *gegen* den Materialismus: Wenn das Ich ein Produkt der neuronalen Verbindungen wäre, müsste die Durchtrennung der größten Faserverbindung des Gehirns die Person tiefgreifend spalten. Tatsächlich bleibe aber die Einheit der Person im Alltag erhalten; Patienten erleben sich nicht als zwei Menschen. Die Laborbefunde zeigen nach Egnor eine Trennung bestimmter Wahrnehmungs- und Sprachleistungen, nicht des personalen Subjekts – was er mit der Einheit einer geistigen Seele erklärt, die Wahrnehmung und Ausdruck über körperliche Kanäle vermittelt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Philosoph der personalen Identität',
      text: `Swinburne nutzt Gedankenexperimente zur Hirnteilung, um zu zeigen, dass personale Identität nicht auf Gehirnteile reduzierbar ist: Wenn man die beiden Hälften eines Gehirns in zwei Körper verpflanzte, wäre es sinnvoll zu fragen, welche der beiden Personen *ich* bin – und die Antwort könne nicht durch physikalische Fakten allein festgelegt sein. Für Swinburne spricht das dafür, dass es eine zusätzliche Tatsache gibt: die Identität der Seele. Wo Parfit sagt, Identität sei „nicht das, worauf es ankommt", hält Swinburne an der Intuition fest, dass es für jeden von uns eine klare Antwort auf die Frage gibt, ob *ich* weiterlebe.`,
      sources: [
        { kind: 'fachliteratur', author: 'Sydney Shoemaker, Richard Swinburne', work: 'Personal Identity (Great Debates in Philosophy)', year: '1984', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Are We Bodies or Souls?', year: '2019', status: 'paraphrase' },
      ],
    },
    {
      person: 'moreland',
      role: 'als Philosoph (Argument aus der Einheit des Bewusstseins)',
      text: `J. P. Moreland argumentiert, dass jede bewusste Erfahrung einem einzigen Subjekt gehört: Wenn ich gleichzeitig eine Melodie höre und eine Rose sehe, erlebt *ein* Ich beides zugleich. Physische Dinge dagegen sind aus Teilen zusammengesetzt; kein Teil des Gehirns „hat" die Gesamterfahrung. Die Split-Brain-Fälle zeigen nach Moreland, dass die *Inhalte* des Bewusstseins von neuronalen Verbindungen abhängen können, nicht aber, dass das Subjekt selbst ein zusammengesetztes Ding ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Soul: How We Know It\'s Real and Why It Matters', year: '2014', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Kirchenvater',
      text: `Gregor von Nyssa lehnt die Vorstellung ab, der Geist habe einen bestimmten Sitz im Körper – sei es Herz oder Gehirn. Er wirke vielmehr im Ganzen und durch das Ganze, so wie eine Kunst durch viele Werkzeuge ausgeübt wird. Werden die Werkzeuge voneinander getrennt oder beschädigt, kann die Kunst nicht mehr vollständig wirken, ohne dass der Künstler deshalb zu zweien würde. Gregors Modell passt erstaunlich gut zu den Befunden: eingeschränkte Integration, aber erhaltene Person.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 12–15', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'zwei-bewusstseine',
      objection: `Bei Split-Brain-Patienten weiß die rechte Hand buchstäblich nicht, was die linke tut. Die rechte Hemisphäre sieht etwas, die linke kann es nicht benennen. Zwei Bewusstseine in einem Schädel – wo ist da deine eine Seele?`,
      objectionBy: 'Susan Blackmore',
      answer: `Diese Effekte zeigen sich nur unter Laborbedingungen, in denen ein Bild für Sekundenbruchteile nur einer Hirnhälfte gezeigt wird. Im Alltag verhalten sich die Patienten als eine Person, die sich selbst als einen Menschen erlebt. Ob überhaupt zwei Bewusstseine vorliegen, ist wissenschaftlich umstritten: Pinto und Kollegen fanden 2017 in „Brain", dass ihre Patienten Reize in beiden Gesichtsfeldern mit jeder Hand und auch sprachlich anzeigen konnten – „geteilte Wahrnehmung, ungeteiltes Bewusstsein".`,
      detail: `Selbst Roger Sperry, der Nobelpreisträger dieser Forschung, zog daraus keinen reduktionistischen Schluss: Er vertrat später, dass Bewusstsein eine eigene, kausal wirksame Ebene sei.`,
      sources: [
        { kind: 'wissenschaft', author: 'Y. Pinto u. a.', work: 'Split brain: divided perception but undivided consciousness', ref: 'Brain 140 (2017), 1231–1237', year: '2017', status: 'paraphrase' },
      ],
      questionsBack: [`Verhalten sich Split-Brain-Patienten im Alltag wie zwei Menschen – oder wie einer?`],
      followUps: [
        {
          id: 'pinto-nur-zwei',
          objection: `Pinto untersuchte nur zwei Patienten, und Gazzanigas Gruppe erklärt die Ergebnisse durch Querhinweise zwischen den Hemisphären. Die klassische Deutung steht.`,
          objectionBy: 'Michael Gazzaniga',
          answer: `Das ist ein fairer Einwand – die Debatte ist offen. Aber dann ist auch die Behauptung „Split-Brain beweist, dass es keine einheitliche Seele gibt" offen und nicht bewiesen. Es gibt in der Fachwelt keinen Konsens, dass durch die Operation zwei Personen entstehen. Wer aus einem umstrittenen Befund eine weltanschauliche Gewissheit macht, geht über die Daten hinaus.`,
          followUps: [
            {
              id: 'teilbarkeit-genuegt',
              objection: `Selbst wenn es offen ist: Allein die Möglichkeit, das Bewusstsein chirurgisch aufzuspalten, zeigt, dass es kein unteilbares Ich gibt.`,
              objectionBy: 'Derek Parfit',
              answer: `Du verwechselst die Einheit des Subjekts mit der Einheit der Inhalte, zu denen es Zugang hat. Auch Gesunde haben Inhalte, die nicht zusammengeführt sind: Träume, automatisierte Handlungen, Wahrnehmungen am Rande der Aufmerksamkeit, dissoziative Zustände. Niemand folgert daraus, dass wir mehrere Personen sind. Wenn die Seele durch das Gehirn wahrnimmt und handelt, schränkt eine durchtrennte Verbindung ihre Möglichkeit ein, Informationen zu verknüpfen – sie teilt nicht die Seele.`,
              followUps: [
                {
                  id: 'further-fact-ueberfluessig',
                  objection: `Dann ist deine Seele eine unbeobachtbare Zusatzannahme – eine „weitere Tatsache", die nichts erklärt. Alles Erklärbare erklärt schon die psychologische Verbundenheit.`,
                  objectionBy: 'Derek Parfit',
                  answer: `Sie erklärt etwas sehr Wichtiges: dass es für jeden von uns eine klare Antwort auf die Frage gibt, ob *ich* morgen noch existiere. Parfits eigene Theorie führt zu dem Schluss, dass personale Identität „nicht das ist, worauf es ankommt" – dass es keine eindeutige Antwort gibt, ob ich eine Teilung überlebe. Das widerspricht unserer tiefsten Gewissheit über uns selbst. Swinburne zeigt, dass die Seelentheorie solche Teilungsfälle widerspruchsfreier behandelt.`,
                  detail: `Parfit selbst sagte, seine Sicht habe ihn von der Angst vor dem Tod befreit, weil es kein tiefes „Ich" gebe, das enden könnte. Christen sehen darin eine teuer erkaufte Beruhigung: Sie löst das Problem, indem sie das Subjekt preisgibt, das Liebe, Verantwortung und Hoffnung überhaupt erst sinnvoll macht.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'interpreter',
      objection: `Gazzanigas „Interpreter": Die linke Hemisphäre erfindet Gründe für Handlungen, die die rechte ausgelöst hat – der Patient greift zur Schneeschaufel und erklärt das mit einer Hühnerkralle. Unser Ich ist ein Geschichtenerzähler; die „Seele" ist nur die Geschichte.`,
      objectionBy: 'Michael Gazzaniga',
      answer: `Konfabulation ist real, und sie zeigt, dass wir uns über unsere Motive täuschen können – das sagt auch die Bibel: „Es ist das Herz ein trotzig und verzagt Ding; wer kann es ergründen?" (Jer 17,9). Aber eine Geschichte braucht einen Erzähler und jemanden, der sie versteht. Dass das Ich Deutungen erzeugt, beweist nicht, dass es selbst nur eine Deutung ist.`,
      followUps: [
        {
          id: 'gravitationszentrum',
          objection: `Das Ich ist ein „Gravitationszentrum der Erzählung" – eine nützliche Abstraktion wie der Schwerpunkt eines Körpers, kein reales Ding.`,
          objectionBy: 'Daniel Dennett',
          answer: `Ein Schwerpunkt erlebt nichts. Das Ich dagegen erlebt Schmerz, versteht Gründe und trägt Verantwortung. Wenn das Ich eine Fiktion ist – wem erscheint diese Fiktion? Eine Täuschung setzt jemanden voraus, der getäuscht wird. Die Erste-Person-Perspektive ist nicht das Ergebnis einer Theorie, sondern das, wovon jede Theorie ausgeht.`,
          followUps: [
            {
              id: 'cartesisches-theater',
              objection: `Die Frage „wem erscheint es?" setzt das kartesische Theater voraus – einen inneren Zuschauer, den es nicht gibt.`,
              objectionBy: 'Daniel Dennett',
              answer: `Nein, sie setzt nur voraus, dass Erleben jemandes Erleben ist – kein Homunkulus, der auf eine Leinwand schaut. Die Position, Bewusstsein sei insgesamt eine Illusion, heißt in der Philosophie „Illusionismus"; selbst viele Materialisten halten sie für unhaltbar, weil der Begriff „Illusion" bereits ein Erleben voraussetzt. Das ist die philosophische Debatte, die A8 ausführlicher behandelt.`,
              detail: `Siehe ‚naturalismus/bewusstsein-materiell-erklaerbar'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'welche-haelfte',
      objection: `Wenn es eine Seele gibt – in welcher Hirnhälfte sitzt sie dann? In der sprechenden linken? Dann ist die rechte ein seelenloser Automat?`,
      objectionBy: 'Sam Harris',
      answer: `Die Seele „sitzt" nicht an einem Ort – das lehrte schon Gregor von Nyssa. Sie ist kein Gegenstand im Raum, der in einer Hälfte liegen könnte, sondern das, was den ganzen Menschen belebt und durch ihn wirkt. Aufschlussreich ist die Hemisphärektomie: Kindern, denen wegen schwerer Epilepsie eine ganze Hirnhälfte entfernt wurde, bleiben eine Person – oft mit erhaltener Persönlichkeit, Humor und Bindungen. Niemand ist danach eine „halbe Person".`,
      detail: `Ehrlich: Die Ergebnisse nach Hemisphärektomie sind unterschiedlich; Lähmungen, Gesichtsfeldausfälle und kognitive Einschränkungen sind häufig. Der Punkt ist nicht, dass „nichts passiert", sondern dass die Einheit der Person erhalten bleibt.`,
      followUps: [
        {
          id: 'nur-plastizitaet',
          objection: `Das zeigt nur Neuroplastizität: Die verbleibende Hälfte reorganisiert sich und übernimmt Funktionen. Kein Grund für eine Seele.`,
          objectionBy: 'Patricia Churchland',
          answer: `Plastizität ist der Mechanismus, einverstanden. Aber bemerkenswert ist das Ergebnis: Die Person bleibt eine, obwohl die Hälfte des Substrats fehlt, und sie wird nie zu zwei, obwohl beim Split-Brain die Verbindung fehlt. Das passt gut zu einem einheitlichen Subjekt, das sich des vorhandenen Substrats bedient – und schlecht zu der Vorstellung, die Einheit sei ein bloßes Nebenprodukt vollständiger Verschaltung.`,
          followUps: [
            {
              id: 'einheit-ist-integration',
              objection: `Einheit ist eine Frage des Integrationsgrads. Schon wenige verbleibende Bahnen genügen für ausreichende Integration.`,
              objectionBy: 'Patricia Churchland',
              answer: `Dann wäre Personsein eine Frage des Grades – mehr oder weniger Ich, je nach Faserzahl. Aber mein Erleben, ein Subjekt zu sein, ist kein Mehr-oder-Weniger: Entweder erlebe ich, oder ich erlebe nicht. Eine Theorie, die das Ich in Prozentpunkten misst, erklärt nicht, was es heißt, *jemand* zu sein. Ethisch wäre sie zudem gefährlich: Wer weniger integriert ist, wäre weniger Person.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie verhalten sich Split-Brain-Patienten außerhalb des Labors – als zwei Menschen oder als einer?`,
    `Wenn das Ich eine Fiktion ist – wer wird von dieser Fiktion getäuscht?`,
    `Warum wird ein Kind nach Entfernung einer ganzen Hirnhälfte keine „halbe Person"?`,
    `Gibt es einen Konsens in der Fachwelt, dass Split-Brain zwei Personen erzeugt?`,
  ],
  avoid: [
    `Die Split-Brain-Befunde leugnen oder kleinreden – sie sind gut belegt und eindrucksvoll.`,
    `Behaupten, die Seele „sitze" in einer bestimmten Hirnregion (Zirbeldrüse, linke Hemisphäre) – das ist kartesisch, nicht patristisch, und leicht widerlegbar.`,
    `„Pinto 2017 hat bewiesen, dass es eine Seele gibt." – Die Studie zeigt nur, dass die Zwei-Bewusstseine-These umstritten ist.`,
  ],
  concessions: [
    `Unter Laborbedingungen zeigen Split-Brain-Patienten eine echte Trennung von Wahrnehmung und sprachlichem Bericht.`,
    `Menschen konfabulieren und erfinden nachträglich Gründe für ihr Verhalten – auch Gesunde.`,
    `Die Frage nach der Einheit des Bewusstseins bei Split-Brain ist wissenschaftlich offen; christliche Philosophen sollten keine Gewissheit beanspruchen, die die Daten nicht hergeben.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Tim Bayne', work: 'The Unity of Consciousness', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Michael S. Gazzaniga', work: 'Who\'s in Charge? Free Will and the Science of the Brain', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'The Soul: How We Know It\'s Real and Why It Matters', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Split-Brain', 'Sperry', 'Gazzaniga', 'Einheit des Bewusstseins', 'personale Identität'],
  related: [
    'neurowissenschaften/geist-gleich-gehirn',
    'naturalismus/bewusstsein-materiell-erklaerbar',
    'buddhismus/kein-selbst-anatta',
  ],
};

export default claim;
