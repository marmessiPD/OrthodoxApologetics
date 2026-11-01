import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'effektivitaet-der-mathematik-zufall',
  title: `„Dass die Welt mathematisch beschreibbar ist, ist Zufall."`,
  proponents: [
    { name: 'Richard W. Hamming', role: 'Mathematiker und Informatiker (Bell Labs), Turing-Preisträger', work: '„The Unreasonable Effectiveness of Mathematics", American Mathematical Monthly 87 (1980)' },
    { name: 'Derek Abbott', role: 'Physiker und Elektroingenieur, University of Adelaide', work: '„The Reasonable Ineffectiveness of Mathematics", Proceedings of the IEEE 101 (2013)' },
    { name: 'Sabine Hossenfelder', role: 'Theoretische Physikerin', work: 'Lost in Math: How Beauty Leads Physics Astray (2018)' },
    { name: 'Max Tegmark', role: 'Kosmologe, MIT', work: 'Our Mathematical Universe (2014)' },
  ],
  steelman: `Eugene Wigners berühmtes „Wunder" ist eine optische Täuschung. Erstens wählen wir Probleme aus, bei denen Mathematik funktioniert, und vergessen die vielen Bereiche – Biologie, Wetter, Wirtschaft, Bewusstsein –, in denen sie kaum weiterhilft (Abbott). Zweitens wurde Mathematik ursprünglich aus der Erfahrung abstrahiert (Zählen, Messen), also passt sie natürlich zur Erfahrung. Drittens: In einer Welt ohne Regelmäßigkeiten gäbe es keine Beobachter, die sich wundern könnten (anthropisches Prinzip). Viertens hat die Evolution unseren Verstand an die Welt angepasst. Und fünftens zeigt die jüngere Physikgeschichte, dass die Suche nach mathematischer Schönheit auch in die Irre führt: Supersymmetrie wurde am LHC nicht gefunden (Hossenfelder). Wer hier Gott ins Spiel bringt, erklärt eine Statistikverzerrung mit einem Wunder.`,
  biblical: {
    summary: `Die Schrift verkündet eine Welt, die von einem vernünftigen Schöpfer geordnet ist: „Du hast alles geordnet mit Maß, Zahl und Gewicht" (Weish 11,20). Alles wurde durch den Logos geschaffen (Joh 1,3), und Gott hält „seinen Bund mit Tag und Nacht" und die „Ordnungen des Himmels und der Erde" (Jer 33,25). Der Mensch ist nach Gottes Bild geschaffen (Gen 1,27) und dazu berufen, die Werke Gottes zu erforschen (Spr 25,2; Ps 111,2). Daraus folgt eine doppelte Erwartung: Die Welt ist rational geordnet **und** der Mensch kann diese Ordnung erkennen.`,
    detail: `- **Gen 1** beschreibt Schöpfung als Scheiden, Ordnen und Zählen (Tage, Lichter „für Zeichen, Zeiten, Tage und Jahre", Gen 1,14).
- **Ps 19,2** „Die Himmel erzählen die Ehre Gottes" – die Ordnung des Himmels ist eine lesbare Botschaft.
- **Spr 25,2** „Es ist Gottes Ehre, eine Sache verbergen; aber der Könige Ehre ist es, eine Sache erforschen" – Forschung als Ehre, nicht als Anmaßung.
- **Röm 1,20**: Gottes unsichtbares Wesen wird an seinen Werken „ersehen" – die Schöpfung ist auf Erkennbarkeit hin angelegt.
- **Missverständnis vermeiden:** Die Bibel enthält keine Formeln. Sie liefert den Rahmen, in dem Erkennbarkeit erwartet wird – und genau dieser Rahmen trug die Pioniere der Naturwissenschaft (Kepler, Galilei, Newton).`,
    sources: [
      { kind: 'bibel', work: 'Weisheit', ref: '11,20', quote: `Aber du hast alles geordnet mit Maß, Zahl und Gewicht.`, translation: 'Luther 1912 (dort 11,21)', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '19,2', quote: `Die Himmel erzählen die Ehre Gottes, und die Feste verkündigt seiner Hände Werk.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '25,2', quote: `Es ist Gottes Ehre, eine Sache verbergen; aber der Könige Ehre ist es, eine Sache erforschen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jeremia', ref: '33,25', quote: `Gott verweist auf seinen Bund mit Tag und Nacht und auf die festen Ordnungen des Himmels und der Erde als Zeichen seiner Treue.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Römer', ref: '1,20', quote: `Damit daß Gottes unsichtbares Wesen, das ist seine ewige Kraft und Gottheit, wird ersehen, so man des wahrnimmt, an den Werken, nämlich an der Schöpfung der Welt.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Für Athanasius ist die harmonische Ordnung des Kosmos der sichtbare Hinweis auf den einen Logos: Wie man aus dem Zusammenklang einer Leier auf einen Musiker schließt, so aus der Harmonie der Welt auf den einen Gott, der sie durch sein Wort ordnet. Basilius lädt in seinen Hexaemeron-Predigten ein, die Schöpfung als „Schule" der Gotteserkenntnis zu betrachten. Die koptische Tradition, die in Alexandrien – der Stadt Euklids und des Ptolemäus – wurzelt, hat Glaube und Wissenschaft nie als Gegensätze verstanden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '38–42', year: 'um 335', quote: `Wie man beim Hören einer wohlgestimmten Leier auf einen Spieler schließt, der die Saiten harmonisch verbindet, so schließen wir aus der Ordnung und Harmonie des Kosmos auf den einen Logos Gottes, der alles lenkt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilien zum Hexaemeron', ref: 'I,6', quote: `Die Welt ist eine Schule vernünftiger Seelen, ein Lehrhaus der Gotteserkenntnis.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Eugene Wigner (Nobelpreis Physik 1963) prägte 1960 die Formel von der „unvernünftigen Wirksamkeit der Mathematik in den Naturwissenschaften". Albert Einstein schrieb 1936: „Das ewig Unbegreifliche an der Welt ist ihre Begreiflichkeit." Der Philosoph Mark Steiner (1998) argumentierte, dass Physiker mit mathematischen Analogien Erfolg hatten, die nach rein menschlichen, ästhetischen Kriterien gewählt waren – was eine „anthropozentrische" Welt nahelege und dem Naturalismus Probleme bereite. Hamming (1980) bot vier Teilerklärungen an (Selektion, Auswahl der Mathematik, begrenzter Anwendungsbereich, Evolution) und kam zu dem Schluss, sie reichten nicht aus.`,
    detail: `**Fallbeispiele mathematischer Vorwegnahme:**
- Kegelschnitte (Apollonios, ca. 200 v. Chr.) → Keplers Ellipsenbahnen (1609).
- Riemannsche Geometrie (1854) → Einsteins Allgemeine Relativitätstheorie (1915); Gravitationswellen vorhergesagt 1916, gemessen 2015.
- Komplexe Zahlen (16. Jh., zur Lösung kubischer Gleichungen) → unverzichtbar in der Quantenmechanik.
- Gruppentheorie (19. Jh.) → Ordnung der Elementarteilchen; Vorhersage des Ω⁻-Teilchens (1962, gefunden 1964).
- Diracs Gleichung (1928) → Vorhersage des Positrons (entdeckt 1932).
- Radon-Transformation (1917) → Computertomographie (Nobelpreis 1979).
- Quantenelektrodynamik: Übereinstimmung von Theorie und Messung beim magnetischen Moment des Elektrons auf rund zwölf Stellen.

**Ehrlich:** Nicht jede Mathematik findet Anwendung, und komplexe Systeme lassen sich oft nur näherungsweise beschreiben. Die These ist nicht, dass **alles** mathematisch lösbar ist, sondern dass die fundamentalen Gesetze überraschend einfach, präzise und für Menschen entdeckbar sind.`,
    sources: [
      { kind: 'wissenschaft', author: 'Eugene P. Wigner', work: 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences', ref: 'Communications on Pure and Applied Mathematics 13 (1960), 1–14', year: '1960', quote: `Das Wunder der Angemessenheit der Sprache der Mathematik für die Formulierung der physikalischen Gesetze ist ein wunderbares Geschenk, das wir weder verstehen noch verdienen.`, original: `The miracle of the appropriateness of the language of mathematics for the formulation of the laws of physics is a wonderful gift which we neither understand nor deserve.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'wissenschaft', author: 'Albert Einstein', work: 'Physik und Realität', ref: 'Journal of the Franklin Institute 221 (1936)', year: '1936', quote: `Das ewig Unbegreifliche an der Welt ist ihre Begreiflichkeit.`, status: 'verbatim', note: 'Einstein war kein Christ; seine Verwunderung ist gerade deshalb ein unverdächtiges Zeugnis.' },
      { kind: 'fachliteratur', author: 'Mark Steiner', work: 'The Applicability of Mathematics as a Philosophical Problem', year: '1998', quote: `Der Erfolg anthropozentrischer, ästhetisch gewählter mathematischer Analogien in der Physik stellt den Naturalismus vor ein Problem.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Richard W. Hamming', work: 'The Unreasonable Effectiveness of Mathematics', ref: 'American Mathematical Monthly 87 (1980), 81–90', year: '1980', quote: `Hamming nennt vier Teilerklärungen und gesteht, dass sie zusammen nicht ausreichen, um die Wirksamkeit der Mathematik zu erklären.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Derek Abbott', work: 'The Reasonable Ineffectiveness of Mathematics', ref: 'Proceedings of the IEEE 101 (2013)', year: '2013', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Erstaunlich ist nicht nur, **dass** die Welt geordnet ist, sondern dass abstrakte Mathematik, die Menschen oft aus reiner Neugier entwickelten, Jahrzehnte später die tiefsten Naturgesetze beschreibt – bis auf zwölf Nachkommastellen genau. Wigner nannte das ein „Geschenk, das wir weder verstehen noch verdienen", Einstein „das ewig Unbegreifliche". Wenn die Welt und unser Verstand vom selben göttlichen Logos stammen, ist das zu erwarten; wenn alles Zufall ist, bleibt es ein Rätsel.`,
  keyPoints: [
    `**Zwei Rätsel, nicht eins:** dass die Gesetze einfach und mathematisch sind **und** dass ein evolutionär entstandener Verstand sie erkennen kann.`,
    `**Vorwegnahme schlägt Selektion:** Riemann-Geometrie, Gruppentheorie und komplexe Zahlen wurden ohne physikalischen Zweck entwickelt und erwiesen sich später als unverzichtbar.`,
    `**Ordnung ≠ Begreiflichkeit:** Leben braucht Regelmäßigkeit, aber nicht, dass die Gesetze elegant, universell und für Menschen entdeckbar sind.`,
    `**Historisch:** Kepler, Galilei und Newton erwarteten eine mathematische Welt, **weil** sie an einen vernünftigen Schöpfer glaubten – der Glaube war Antrieb, nicht Hindernis.`,
    `**Rational und kontingent:** Weil Gott frei schafft, muss man die Welt beobachten (Experiment); weil er vernünftig schafft, kann man sie berechnen (Mathematik). Beides zusammen ergibt moderne Naturwissenschaft.`,
  ],
  argument: {
    name: 'Argument aus der Begreiflichkeit der Welt',
    summary: 'Abduktion: Die mathematische Begreiflichkeit der Natur ist unter Theismus zu erwarten, unter Naturalismus überraschend.',
    premises: [
      {
        text: 'P1: Die physikalische Welt wird mit erstaunlicher Präzision durch abstrakte Mathematik beschrieben, die oft unabhängig von physikalischen Fragen entwickelt wurde.',
        support: `Siehe die Fallbeispiele: Riemann → Einstein, Gruppentheorie → Teilchenphysik, komplexe Zahlen → Quantenmechanik, QED-Präzision.`,
      },
      {
        text: 'P2: Unter Naturalismus gibt es keinen besonderen Grund zu erwarten, dass die Grundgesetze einfach und mathematisch elegant sind und dass ein auf Überleben selektierter Verstand sie erfassen kann.',
        support: `Ein Universum könnte lebensfreundlich und doch mathematisch undurchsichtig sein. Evolution belohnt Überlebensnützliches, nicht Einsicht in Quantenfeldtheorie. Selbst Hamming fand keine ausreichende naturalistische Erklärung.`,
      },
      {
        text: 'P3: Unter Theismus (ein vernünftiger Schöpfer, der die Welt durch seinen Logos ordnet und den Menschen nach seinem Bild schafft) ist beides zu erwarten.',
        support: `Genau diese Erwartung formulierten Kepler und Galilei – lange bevor sie bestätigt war. Sie ist also keine nachträgliche Rationalisierung.`,
      },
    ],
    conclusion: 'Die Begreiflichkeit der Welt ist ein Beleg, der den Theismus gegenüber dem Naturalismus deutlich bestätigt.',
  },
  voices: [
    {
      person: 'athanasius',
      role: 'als Theologe des Logos',
      text: `Athanasius argumentiert in *Contra Gentes*, dass die Ordnung der Welt – das Zusammenspiel von Gegensätzen, der regelmäßige Lauf der Gestirne, die Harmonie aller Teile – nicht von selbst entstanden sein kann, sondern auf einen einzigen ordnenden Logos verweist. Wie eine wohlgestimmte Leier einen Musiker voraussetzt, so die Harmonie des Kosmos den Logos Gottes. Für ihn ist die Rationalität der Welt der erste „Bote" des Schöpfers.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '35–44', status: 'paraphrase' },
      ],
    },
    {
      person: 'galilei',
      role: 'als Begründer der mathematischen Physik',
      text: `Galilei formulierte das Programm der neuzeitlichen Physik: Das „Buch der Natur" ist in der Sprache der Mathematik geschrieben, seine Buchstaben sind Dreiecke, Kreise und andere geometrische Figuren. Für ihn waren Schrift und Natur zwei Bücher desselben Autors – das eine offenbart den Heilsweg, das andere die Ordnung der Schöpfung.`,
      sources: [
        { kind: 'wissenschaft', author: 'Galileo Galilei', work: 'Il Saggiatore', year: '1623', quote: `Die Philosophie ist in diesem großen Buch geschrieben, das uns ständig offen vor Augen liegt – ich meine das Universum … Es ist in der Sprache der Mathematik geschrieben.`, original: 'La filosofia è scritta in questo grandissimo libro che continuamente ci sta aperto innanzi a gli occhi (io dico l\'universo) … Egli è scritto in lingua matematica', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
    {
      person: 'kepler',
      role: 'als Entdecker der Planetengesetze',
      text: `Kepler suchte jahrelang nach mathematischen Gesetzen der Planetenbewegung, weil er überzeugt war, dass Gott die Welt nach geometrischen Urbildern geschaffen hat und den Menschen befähigt, sie zu erkennen. Diese theologische Erwartung ging der Entdeckung voraus und trieb ihn an, eine Abweichung von nur acht Bogenminuten in Tycho Brahes Daten ernst zu nehmen – was zu den Ellipsenbahnen führte.`,
      sources: [
        { kind: 'wissenschaft', author: 'Johannes Kepler', work: 'Astronomia Nova', year: '1609', status: 'paraphrase' },
      ],
    },
    {
      person: 'polkinghorne',
      role: 'als Teilchenphysiker und Theologe',
      text: `Polkinghorne betont, dass die Physik die Welt nicht nur als geordnet, sondern als „rational transparent" und „rational schön" erfährt: Die tiefsten Gesetze lassen sich in eleganter Mathematik ausdrücken, die der menschliche Geist begreifen kann. Für ihn ist das eine Tatsache, die die Wissenschaft voraussetzt, aber nicht selbst erklären kann – und die im Glauben an einen Schöpfer, dessen Vernunft in der Welt und in uns wirkt, ihre natürliche Erklärung findet.`,
      sources: [
        { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Creation', year: '1988', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker',
      text: `Lennox greift Einsteins Verwunderung auf: Wenn unser Verstand letztlich das Produkt ungelenkter Prozesse ist, bleibt rätselhaft, warum seine abstraktesten Konstruktionen die Struktur des Universums treffen. Für ihn ist Wissenschaft überhaupt nur möglich, weil die Welt rational verstehbar ist – eine Annahme, die im Glauben an den Schöpfer-Logos (Joh 1,1) begründet ist, aber im Naturalismus in der Luft hängt.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: 'God\'s Undertaker: Has Science Buried God?', ref: 'Kap. 1–2', year: '2009', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'selektionseffekt',
      objection: `Selektionseffekt: Wir merken uns nur die Fälle, in denen Mathematik passt. In Biologie, Wetter und Wirtschaft versagt sie weitgehend (Hamming, Abbott).`,
      objectionBy: 'Derek Abbott',
      targetsPremise: 1,
      answer: `Selektion erklärt, warum wir Erfolge sehen – nicht, warum es sie gibt. Die Pointe sind Fälle der **Vorwegnahme**: Mathematik, die ohne physikalischen Zweck entwickelt wurde, passte später exakt. Riemann ahnte nichts von Einstein, und die Gruppentheorie wurde nicht für Quarks erfunden. Und selbst Wetter und Biologie gehorchen mathematischen Grundgesetzen; sie sind nur rechnerisch komplex.`,
      followUps: [
        {
          id: 'aus-erfahrung-abstrahiert',
          objection: `Mathematik wurde aus der Erfahrung abstrahiert – Zählen, Messen, Landvermessung. Kein Wunder, dass sie zur Erfahrung passt.`,
          objectionBy: 'Lakoff & Núñez',
          answer: `Für Arithmetik und euklidische Geometrie stimmt das. Aber komplexe Zahlen wurden erfunden, um kubische Gleichungen zu lösen – und wurden zur Sprache der Quantenmechanik, eines Bereichs, den niemand erfahren hatte. Nichteuklidische Geometrie widersprach sogar der Alltagserfahrung – und beschreibt doch die Raumzeit.`,
          followUps: [
            {
              id: 'komplexe-zahlen-nur-bequem',
              objection: `Komplexe Zahlen sind nur ein bequemes Rechenwerkzeug. Man könnte die Quantenmechanik auch mit reellen Zahlen formulieren.`,
              answer: `Genau das wurde getestet: Eine Arbeit in *Nature* (Renou et al., 2021) zeigte, dass reellwertige Versionen der Quantentheorie in bestimmten Netzwerk-Experimenten andere Vorhersagen machen; Experimente 2022 bestätigten die komplexe Version. Die „bequeme Erfindung" ist offenbar in die Natur eingeschrieben.`,
              sources: [
                { kind: 'wissenschaft', author: 'M.-O. Renou et al.', work: 'Quantum theory based on real numbers can be experimentally falsified', ref: 'Nature 600 (2021)', year: '2021', status: 'paraphrase', note: 'Experimentelle Tests u. a. 2022 in Physical Review Letters veröffentlicht.' },
              ],
              questionsBack: [
                `Warum sollte eine Rechenhilfe aus der Renaissance in Laborexperimenten des 21. Jahrhunderts unverzichtbar sein?`,
              ],
              followUps: [
                {
                  id: 'universum-ist-mathematik',
                  objection: `Dann löst sich das Rätsel ganz auf: Das Universum **ist** eine mathematische Struktur. Dass Mathematik die Welt beschreibt, ist so wenig erstaunlich, wie dass eine Landkarte sich selbst gleicht.`,
                  objectionBy: 'Max Tegmark',
                  answer: `Damit gibt Tegmark zu, dass das Passen kein Zufall ist – das ist schon die Hälfte meines Arguments. Aber seine Lösung kostet viel: Er muss annehmen, dass **jede** denkbare mathematische Struktur physikalisch existiert. Dann bleibt unerklärt, warum wir in einer einfachen, gesetzmäßigen Struktur leben statt in einer der unzähligen chaotischen. Und eine Struktur „ist" nichts Bewusstes – woher kommen dann die Mathematiker, die sie erkennen?`,
                  detail: `Tegmarks „Hypothese des mathematischen Universums" ist unter Physikern eine Außenseiterposition; selbst Sympathisanten nennen sie kaum prüfbar. Sie ersetzt das Staunen über die Passung durch eine viel größere Zusatzannahme (alle Strukturen existieren), ohne zu erklären, warum unsere Welt ausgerechnet **entdeckbar** ist.

John Polkinghorne, Quantenphysiker und Theologe, beschreibt die Alternative: Die Vernünftigkeit der Welt und die Vernünftigkeit unseres Verstandes haben einen gemeinsamen Ursprung im Logos, dem Wort, durch das alles geschaffen ist (Joh 1,3). Das erklärt beides – die Ordnung „draußen" und die Einsicht „drinnen".`,
                  voices: [
                    {
                      person: 'polkinghorne',
                      role: 'als theoretischer Physiker und Theologe',
                      text: `Polkinghorne betont, dass die Physik die Welt als „rational transparent" und „rational schön" erfährt. Die Wissenschaft setzt diese Verständlichkeit voraus, kann sie aber nicht selbst begründen. Der Glaube an einen Schöpfer, dessen Geist sich in der Ordnung der Welt spiegelt, bietet dafür eine Erklärung, die über die Physik hinausweist, ohne ihr zu widersprechen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Belief in God in an Age of Science', year: '1998', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Wenn alle mathematischen Strukturen existieren – warum ist unsere so einfach, dass Menschen sie aufschreiben können?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anthropisch-ordnung-noetig',
      objection: `Ohne Ordnung gäbe es keine Beobachter. Dass wir in einer geordneten Welt leben, ist also trivial (anthropisches Prinzip).`,
      objectionBy: 'Max Tegmark / Sean Carroll',
      targetsPremise: 2,
      answer: `Leben braucht **etwas** Regelmäßigkeit – aber nicht, dass die Grundgesetze in wenigen eleganten Gleichungen zusammengefasst werden können, überall im Kosmos gleich gelten und für Menschen entdeckbar sind. Eine Welt könnte lebensfreundlich und mathematisch undurchschaubar sein. Begreiflichkeit ist mehr als Überlebbarkeit.`,
      followUps: [
        {
          id: 'multiversum-begreiflich',
          objection: `Im Multiversum gibt es eben auch Welten mit begreiflichen Gesetzen, und wir leben zufällig in einer davon.`,
          objectionBy: 'Max Tegmark',
          answer: `Das Multiversum setzt selbst tiefe mathematische Gesetze voraus (Inflationsfeld, Stringlandschaft) – die Frage wird nur verschoben. Und in den allermeisten Welten eines solchen Ensembles wären Beobachter eher chaotische Zufallsgebilde („Boltzmann-Gehirne") als Physiker in einer gesetzmäßigen Welt. Das Multiversum erklärt die Begreiflichkeit nicht, es verschärft das Problem.`,
          detail: `Die Einzelheiten zum Multiversum werden im Themenblock „Feinabstimmung" behandelt.`,
        },
      ],
    },
    {
      id: 'schoenheit-fuehrt-in-die-irre',
      objection: `Die Suche nach mathematischer Schönheit hat die Physik in die Irre geführt – Supersymmetrie wurde am LHC nicht gefunden (Hossenfelder). Mathematik ist kein verlässlicher Wegweiser.`,
      objectionBy: 'Sabine Hossenfelder',
      answer: `Einverstanden: Schönheit ist kein unfehlbares Kriterium. Das ist sogar eine christliche Einsicht: Weil Gott **frei** schafft, kann man die Welt nicht aus dem Lehnstuhl ableiten, sondern muss sie beobachten; weil er **vernünftig** schafft, kann man sie mathematisch beschreiben. Beides zusammen – Experiment und Mathematik – ist das Rezept der modernen Wissenschaft.`,
      detail: `Wissenschaftshistoriker wie Peter Harrison und Stanley Jaki haben gezeigt, wie die Lehre von einem freien, aber vernünftigen Schöpfer die experimentelle Methode förderte: Die Welt ist kontingent (sie hätte anders sein können), also muss man nachsehen; sie ist rational, also lohnt sich das Nachsehen.`,
      followUps: [
        {
          id: 'gott-erklaert-alles',
          objection: `Gott erklärt alles und damit nichts. Auch eine chaotische Welt würdest du mit Gott erklären.`,
          objectionBy: 'Richard Dawkins',
          answer: `Nein. Der Theismus macht eine riskante Vorhersage: eine geordnete, erkennbare Welt. Kepler formulierte sie, bevor sie bestätigt war. Eine chaotische, undurchschaubare Welt wäre für einen Christen eine echte Überraschung – „Gott ist nicht ein Gott der Unordnung" (1 Kor 14,33).`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '14,33', quote: `Denn Gott ist nicht ein Gott der Unordnung, sondern des Friedens.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          questionsBack: [
            `Welche Beobachtung würde nach deiner Ansicht den Naturalismus gegenüber dem Theismus bestätigen – und warum gerade eine gesetzmäßige Welt?`,
          ],
          followUps: [
            {
              id: 'theologie-passt-sich-an',
              objection: `Das ist nachträgliche Anpassung. Hätte die Welt chaotisch ausgesehen, hätten Theologen gesagt: „Gottes Wege sind unergründlich." Eine Theorie, die sich jedem Befund anschmiegt, sagt nichts vorher.`,
              objectionBy: 'Michael Shermer',
              answer: `Historisch war es umgekehrt: Die Erwartung kam **vor** dem Befund. Kepler, Galilei, Newton und Boyle suchten mathematische Gesetze, **weil** sie an einen vernünftigen Gesetzgeber glaubten – und fanden sie. Andere Hochkulturen mit großem technischem Können entwickelten keine mathematische Naturwissenschaft dieses Typs. Eine Erwartung, die Jahrhunderte vor ihrer Bestätigung ausgesprochen wurde, ist keine nachträgliche Anpassung.`,
              detail: `Galilei formulierte das Programm 1623 im *Saggiatore*: Das Buch der Natur sei in der Sprache der Mathematik geschrieben. Kepler sah in der Geometrie das Urbild der Schöpfung im göttlichen Geist. Wissenschaftshistoriker wie Peter Harrison und Stanley Jaki haben herausgearbeitet, wie die Lehre von der Schöpfung durch einen rationalen Gott diese Erwartung stützte. Ehrlich: Das beweist nicht, dass die Erwartung nur theistisch begründbar ist – aber es widerlegt die Behauptung, sie sei nachträglich zurechtgebogen.`,
              voices: [
                {
                  person: 'kepler',
                  role: 'als Astronom',
                  text: `Kepler suchte jahrelang nach exakten mathematischen Beziehungen in den Planetenbahnen, weil er überzeugt war, dass der Schöpfer die Welt nach geometrischen Urbildern geordnet hatte. Als die Daten Tycho Brahes nicht zu Kreisbahnen passten, verwarf er seine Lieblingshypothese und fand die Ellipsen – Glaube an Ordnung und Treue zur Beobachtung gingen bei ihm zusammen.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Johannes Kepler', work: 'Astronomia Nova', year: '1609', status: 'paraphrase' },
                  ],
                },
              ],
              followUps: [
                {
                  id: 'china-indien-mathematik',
                  objection: `Indien, China und die islamische Welt hatten große Mathematiker. Die Wissenschaftliche Revolution in Europa hat ökonomische und institutionelle Gründe – Druckerpresse, Universitäten, Handel –, keine theologischen.`,
                  objectionBy: 'Steven Pinker (sinngemäß)',
                  answer: `Völlig richtig ist, dass diese Kulturen herausragende Mathematik hervorbrachten – Null, Algebra, Trigonometrie – und Europa viel von ihnen übernahm. Institutionen spielten eine große Rolle, und die Universitäten waren übrigens kirchliche Gründungen. Mein Punkt ist bescheidener: Die Überzeugung, dass **die Natur selbst** universalen, mathematisch formulierbaren Gesetzen gehorcht, hatte bei den Gründern der Physik eine ausdrücklich theologische Begründung. Das zeigt, dass die Erwartung nicht nachträglich erfunden wurde.`,
                  detail: `Die Frage „Warum Europa?" ist in der Forschung vielschichtig (Huff, Harrison, Hannam, Cohen). Für deine Debatte genügt: Du behauptest nicht, nur Christen könnten Mathematik betreiben. Du behauptest, dass die mathematische Ordnung der Welt im Theismus **erwartet** und im Naturalismus **unerklärt** ist – und dass die Gründer der Physik genau so dachten.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Fall of Man and the Foundations of Science', year: '2007', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Toby E. Huff', work: 'The Rise of Early Modern Science: Islam, China, and the West', year: '1993 (2. Aufl. 2003)', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'evolution-erklaert-verstehen',
      objection: `Unser Verstand ist durch Evolution an die Welt angepasst – darum verstehen wir sie.`,
      objectionBy: 'Evolutionäre Erkenntnistheorie',
      targetsPremise: 2,
      answer: `Die Evolution passte uns an die „Mittelwelt" an – an Steine, Speere und Raubtiere, wie Dawkins selbst betont. Aber wir verstehen gekrümmte Raumzeit, Quantenfelder und Vorgänge bei 10⁻¹⁸ Metern. Diese Reichweite übersteigt jeden Überlebensvorteil um Größenordnungen.`,
      followUps: [
        {
          id: 'quantenwelt-unverstanden',
          objection: `Wir verstehen die Quantenwelt doch gar nicht wirklich – Feynman sagte, niemand verstehe die Quantenmechanik.`,
          objectionBy: 'Richard Feynman (zitiert)',
          answer: `Feynmans Bonmot betrifft die anschauliche Deutung. Rechnerisch beherrschen wir die Quantenwelt mit atemberaubender Präzision – die Quantenelektrodynamik stimmt auf rund zwölf Stellen mit dem Experiment überein. Genau dieser mathematische Zugriff jenseits aller Anschauung ist das Erstaunliche.`,
          followUps: [
            {
              id: 'gesetze-nur-naeherungen',
              objection: `Naturgesetze sind ohnehin nur Idealisierungen. Die wirkliche Welt ist schmutzig; „How the Laws of Physics Lie", wie Nancy Cartwright zeigt. Wir pressen die Natur in Gleichungen und nennen das dann Effektivität.`,
              objectionBy: 'Nancy Cartwright (sinngemäß)',
              answer: `Dass unsere Gleichungen Näherungen sind, stimmt. Aber die Näherungen werden **systematisch besser**: Newton wird durch Einstein verfeinert, nicht ersetzt, und die Fehler schrumpfen um Größenordnungen. Wenn die Natur nicht mathematisch strukturiert wäre, gäbe es keinen Grund, warum tiefere Gleichungen immer genauer und umfassender werden. Die Konvergenz ist der Befund.`,
              detail: `Cartwright betont zu Recht, dass Gesetze unter idealen Bedingungen formuliert und in der Praxis durch viele Störfaktoren überlagert werden. Daraus folgt aber nicht, dass die Welt **an sich** ungeordnet ist – die Störfaktoren gehorchen ihrerseits Gesetzen, die man gesondert modellieren kann. Der Weg von Kepler über Newton zu Einstein und zur Quantenfeldtheorie ist eine Geschichte zunehmender Einheit: wenige Gleichungen, enorme Reichweite, wachsende Präzision.`,
              questionsBack: [
                `Wenn die Gesetze „lügen" – warum werden die Lügen mit jeder Theoriegeneration genauer?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jede-welt-mathematisch',
      objection: `Mathematik ist so allgemein, dass sie zu **jeder** Welt passen würde. Sie ist einfach die Wissenschaft aller möglichen Muster. Dass sie unsere Welt beschreibt, ist so wenig erstaunlich wie dass Sprache Dinge benennen kann.`,
      objectionBy: 'Richard Hamming (sinngemäß) / Max Tegmark',
      targetsPremise: 2,
      answer: `Nein – beschreibbar ist nicht dasselbe wie **komprimierbar**. Auch eine chaotische Welt könnte man Punkt für Punkt in einer endlosen Tabelle auflisten. Unsere Welt aber lässt sich in **wenigen, kurzen Gleichungen** zusammenfassen, aus denen Milliarden Beobachtungen folgen. Die allermeisten denkbaren Datenfolgen sind zufällig und unkomprimierbar – das ist ein Satz der Informationstheorie. Dass unsere Welt extrem komprimierbar ist, ist der eigentliche Befund.`,
      detail: `Die algorithmische Informationstheorie (Kolmogorov, Chaitin) definiert Zufälligkeit als Unkomprimierbarkeit: Eine Folge ist zufällig, wenn das kürzeste Programm, das sie erzeugt, ungefähr so lang ist wie die Folge selbst. Fast alle möglichen Folgen sind in diesem Sinn zufällig. Die Physik dagegen fasst Planetenbahnen, Gezeiten, fallende Äpfel und Gravitationswellen in einer Handvoll Gleichungen. Wigners „unvernünftige Effektivität" lässt sich so präzise formulieren: Die Welt ist algorithmisch hochgradig komprimierbar – und das ist bei einer zufälligen Welt extrem unwahrscheinlich.`,
      voices: [
        {
          person: 'robert-marks',
          role: 'als Informationstheoretiker',
          text: `Marks arbeitet mit Begriffen der algorithmischen Information: Zufällige Daten lassen sich nicht komprimieren, strukturierte schon. Eine Welt, deren Verhalten sich in kurzen Beschreibungen zusammenfassen lässt, trägt nach dieser Logik ein Kennzeichen von Struktur, die nicht aus blindem Zufall stammt.`,
          sources: [
            { kind: 'fachliteratur', author: 'Robert J. Marks II, William A. Dembski, Winston Ewert', work: 'Introduction to Evolutionary Informatics', year: '2017', status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'wissenschaft', author: 'Gregory J. Chaitin', work: 'Meta Math! The Quest for Omega', year: '2005', status: 'paraphrase', note: 'Chaitin (kein Theist) beschreibt Wissenschaft selbst als Datenkompression: Eine Theorie ist nur dann eine Erklärung, wenn sie kürzer ist als die Daten.' },
      ],
      questionsBack: [
        `Wie viele der möglichen Welten ließen sich in vier Gleichungen zusammenfassen – und warum gerade unsere?`,
      ],
      followUps: [
        {
          id: 'komprimierbarkeit-anthropisch',
          objection: `Komprimierbarkeit ist Voraussetzung für Leben: Organismen können nur in einer regelmäßigen Welt Vorhersagen treffen und überleben. Also wieder anthropischer Selektionseffekt.`,
          objectionBy: 'Sean Carroll',
          answer: `Leben braucht **lokale** Regelmäßigkeit: dass Feuer heiß ist und Wasser nass bleibt. Es braucht nicht, dass dieselben eleganten Gleichungen für Quasare in Milliarden Lichtjahren Entfernung und für Quarks bei 10⁻¹⁸ Metern gelten. Eine Welt mit einem Flickenteppich lokaler Faustregeln wäre genauso bewohnbar – aber nicht wissenschaftlich begreifbar. Die Reichweite der Ordnung übersteigt den Bedarf des Lebens bei Weitem.`,
          followUps: [
            {
              id: 'einfachheit-wahrscheinlicher',
              objection: `Einfache Gesetze sind a priori wahrscheinlicher – das ist Ockhams Rasiermesser, mathematisch präzisiert durch Solomonoffs universelle Wahrscheinlichkeit. Kein Gott nötig, nur Wahrscheinlichkeitstheorie.`,
              objectionBy: 'Sean Carroll / Bayesianische Wissenschaftstheorie',
              answer: `Solomonoffs Maß beschreibt, wie **wir** Hypothesen gewichten sollten – nicht, warum die Wirklichkeit sich an unsere Gewichtung hält. Dass das Einfachheitsprinzip in der Natur immer wieder zum Ziel führt, ist genau das, was erklärt werden muss. Wer sagt „einfache Welten sind wahrscheinlicher", setzt schon voraus, dass Wirklichkeit und Vernunft zueinander passen.`,
              detail: `Richard Swinburne hat ausführlich argumentiert, dass Einfachheit ein Wahrheitsindiz ist – und dass genau dies im Theismus verständlich wird: Ein vollkommener, einfacher Geist als letzte Erklärung lässt eine einfache, geordnete Welt erwarten. Im Naturalismus bleibt dagegen offen, warum die rohe Tatsache der Welt sich an ein Erkenntnisprinzip halten sollte, das Menschen bevorzugen.`,
              voices: [
                {
                  person: 'swinburne',
                  role: 'als Religions- und Wissenschaftsphilosoph',
                  text: `Swinburne verteidigt in *Simplicity as Evidence of Truth* (1997), dass Einfachheit ein objektives Kriterium für Wahrheit ist. In *The Existence of God* argumentiert er, dass die Gesetzmäßigkeit der Natur (die „Ordnung der Abfolge") unter der Annahme eines Schöpfers deutlich wahrscheinlicher ist als ohne ihn.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Simplicity as Evidence of Truth', year: '1997', status: 'paraphrase' },
                    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: 'Kap. 8', year: '2. Aufl. 2004', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Warum sollte die Wirklichkeit sich nach einem Prinzip richten, das Menschen für ihre Hypothesenwahl erfunden haben?`,
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum sollten Gleichungen, die Riemann 1854 aus reiner Neugier aufstellte, 1915 die Gravitation beschreiben?`,
    `Welcher Überlebensvorteil liegt darin, Quantenfeldtheorie zu verstehen?`,
    `Ist eine lebensfreundliche, aber mathematisch undurchschaubare Welt denkbar? Wenn ja – warum leben wir nicht in einer?`,
    `Wenn Einstein die Begreiflichkeit der Welt „ewig unbegreiflich" nannte – welche bessere Erklärung hast du?`,
  ],
  avoid: [
    `Einstein oder Wigner als Christen vereinnahmen – beide waren es nicht. Ihr Staunen ist wertvoll, gerade weil sie keine Apologeten waren.`,
    `„Alles in der Natur ist mathematisch exakt lösbar." – Falsch; viele Systeme sind nur näherungsweise beschreibbar.`,
    `Das Argument als zwingenden Beweis ausgeben – es ist ein Indizienargument (Bestätigung), das mit anderen zusammen Gewicht bekommt.`,
  ],
  concessions: [
    `Ein Selektionseffekt existiert: Wissenschaft wendet Mathematik bevorzugt dort an, wo sie funktioniert.`,
    `Ästhetische Kriterien haben die Physik auch in Sackgassen geführt (Hossenfelder hat hier einen Punkt).`,
    `Die Evolution erklärt plausibel unsere elementaren Zahl- und Raumfähigkeiten.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Eugene P. Wigner', work: 'The Unreasonable Effectiveness of Mathematics in the Natural Sciences', ref: 'Communications on Pure and Applied Mathematics 13 (1960)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Mark Steiner', work: 'The Applicability of Mathematics as a Philosophical Problem', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John Polkinghorne', work: 'Science and Creation: The Search for Understanding', year: '1988', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Peter Harrison', work: 'The Fall of Man and the Foundations of Science', year: '2007', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Wigner', 'Einstein', 'Begreiflichkeit', 'Naturgesetze', 'Logos'],
  related: [
    'mathematik/mathematik-menschliche-erfindung',
    'naturalismus/vernunft-durch-evolution',
    'feinabstimmung/multiversum',
    'physik/naturgesetze-erklaeren-sich-selbst',
    'kirchengeschichte-mythen/galilei',
  ],
};

export default claim;
