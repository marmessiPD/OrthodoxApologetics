import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'libet-experimente',
  title: `„Libets Experimente beweisen, dass der freie Wille eine Illusion ist."`,
  proponents: [
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Free Will (2012)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Determined: A Science of Life without Free Will (2023)' },
    { name: 'Daniel M. Wegner', role: 'Sozialpsychologe, Harvard University (gest. 2013)', work: 'The Illusion of Conscious Will (2002)' },
    { name: 'Wolf Singer', role: 'Hirnforscher, Max-Planck-Institut für Hirnforschung, Frankfurt', work: '„Verschaltungen legen uns fest: Wir sollten aufhören, von Freiheit zu sprechen" (in: C. Geyer [Hg.], Hirnforschung und Willensfreiheit, 2004)' },
    { name: 'Gerhard Roth', role: 'Neurobiologe, Universität Bremen', work: 'Fühlen, Denken, Handeln (2001)' },
  ],
  steelman: `1983 ließ Benjamin Libet Versuchspersonen zu einem selbst gewählten Zeitpunkt das Handgelenk beugen und auf einer schnell laufenden Uhr angeben, wann sie den Drang dazu verspürten. Das Ergebnis: Ein Hirnsignal, das „Bereitschaftspotential", begann rund eine Drittelsekunde **bevor** die Probanden ihren Entschluss bemerkten. Spätere Studien verschärften den Befund: Soon und Haynes konnten 2008 mit fMRT eine einfache Links-rechts-Entscheidung bis zu zehn Sekunden im Voraus besser als zufällig vorhersagen; Fried und Kollegen sagten 2011 anhand einzelner Neuronen Entscheidungen mit rund 80 % Trefferquote 700 Millisekunden vorher voraus. Das Bewusstsein kommt offenbar zu spät – es ist der Pressesprecher, nicht der Vorstand. Daniel Wegner zeigte zudem, wie leicht Menschen glauben, etwas gewollt zu haben, das sie nicht verursacht haben. Der freie Wille ist die nachträgliche Geschichte, die das Gehirn sich über seine eigenen Entscheidungen erzählt.`,
  biblical: {
    summary: `Die Schrift setzt durchgehend echte Wahl voraus: „Ich habe euch Leben und Tod, Segen und Fluch vorgelegt, daß du das Leben erwählest" (Dtn 30,19). Zugleich ist sie realistisch: Der menschliche Wille ist verwundet, oft gebunden (Röm 7,15–19) und auf Gnade angewiesen. Das orthodoxe Verständnis ist **Synergie**: „Schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen" (Phil 2,12–13). Freiheit ist also weder absolute Unabhängigkeit von allen Einflüssen noch bloße Illusion.`,
    detail: `- **Jesus Sirach 15,14–17** (in der koptischen Kirche kanonisch): Gott hat den Menschen von Anfang an geschaffen und ihm die Entscheidung überlassen; vor ihm liegen Leben und Tod.
- **Röm 7** beschreibt gerade die Erfahrung, dass Wollen und Tun auseinanderfallen – die Bibel kennt also Einflüsse, die dem bewussten Willen vorausgehen oder ihm widerstreiten.
- Biblische Freiheit hat ihr Ziel in der Bindung an das Gute: „Wenn euch nun der Sohn frei macht, so seid ihr recht frei" (Joh 8,36).`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '30,19', quote: `Ich nehme Himmel und Erde heute über euch zu Zeugen: ich habe euch Leben und Tod, Segen und Fluch vorgelegt, daß du das Leben erwählest und du und dein Same leben mögest.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '2,12–13', quote: `Schaffet, daß ihr selig werdet, mit Furcht und Zittern. Denn Gott ist's, der in euch wirkt beides, das Wollen und das Vollbringen, nach seinem Wohlgefallen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '15,14–17', status: 'paraphrase', quote: `Gott hat den Menschen am Anfang geschaffen und ihm die Wahl überlassen; vor dem Menschen liegen Leben und Tod – was er will, wird ihm gegeben.` },
      { kind: 'bibel', work: 'Römer', ref: '7,15–19', status: 'paraphrase', quote: `Denn ich weiß nicht, was ich tue; denn ich tue nicht, was ich will, sondern was ich hasse, das tue ich.` },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche hält mit allen Vätern an der Willensfreiheit (griech. *autexousion*, Selbstmächtigkeit) als Teil der Gottebenbildlichkeit fest. Sie lehnt sowohl den Determinismus (auch in seiner theologischen Form der doppelten Prädestination) als auch die Vorstellung ab, der Mensch könne sich aus eigener Kraft retten. Freiheit ist geschaffen, verwundet und durch Gnade heilbar.`,
    detail: `- **Gregor von Nyssa** sieht in der Freiheit das deutlichste Zeichen der Gottebenbildlichkeit: Der Mensch ist „ohne Herrn" über sich selbst geschaffen, nicht von Naturnotwendigkeit beherrscht (Über die Erschaffung des Menschen, Kap. 16).
- **Athanasius** erklärt den Sündenfall als freie Abwendung des Menschen vom Guten (Contra Gentes 3–5).
- **Papst Schenuda III.** betont in seinen Schriften über das Heil die Mitwirkung (Synergie) des freien Willens mit der Gnade.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 16', status: 'paraphrase', quote: `Weil der Mensch Bild Gottes ist, ist er frei und selbstbestimmt, keiner Naturnotwendigkeit unterworfen.` },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '3–5', status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Heil im orthodoxen Verständnis (Salvation in the Orthodox Concept)', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Fachdiskussion hat sich seit Libet stark verschoben. Das Bereitschaftspotential wird heute von vielen Forschern nicht mehr als „unbewusste Entscheidung" gedeutet, sondern als gemittelte Hintergrundaktivität, die sich vor spontanen, bedeutungslosen Bewegungen zufällig aufschaukelt (Schurger u. a. 2012). Bei überlegten, bedeutsamen Entscheidungen fehlt es weitgehend (Maoz u. a. 2019). Vorhersagen aus Hirndaten liegen oft nur wenig über Zufall. Die Mehrheitsmeinung in der Fachliteratur lautet: Libet-Experimente widerlegen den freien Willen **nicht**. Die philosophische Frage des Determinismus bleibt davon unberührt (siehe A9).`,
    detail: `**Kritikpunkte am Libet-Paradigma:**
- **Zeitangabe:** Der „W-Zeitpunkt" (Bewusstwerden des Willens) beruht auf introspektiven Uhrablesungen mit erheblichen Messfehlern.
- **Mittelung:** Das Bereitschaftspotential ist ein Durchschnitt über viele Durchgänge, rückwärts vom Bewegungsbeginn aus berechnet – das kann einen allmählichen Anstieg vortäuschen.
- **Aufgabe:** Die Probanden hatten sich vorher bewusst entschieden, mitzumachen und irgendwann zu beugen. Gemessen wurde nur der Zeitpunkt einer bedeutungslosen Bewegung.

**Neuere Befunde:**
- Schurger, Sitt & Dehaene (PNAS 2012): Ein Akkumulationsmodell aus neuronalem Rauschen erklärt die Form des Bereitschaftspotentials; der „Anstieg" ist kein Entschluss, sondern zufällige Schwankung, die eine Schwelle überschreitet.
- Trevena & Miller (2010): Ähnliche Vorlaufaktivität fand sich, auch wenn Probanden sich entschieden, **nicht** zu tippen.
- Schultze-Kraft u. a. (PNAS 2016, Labor Haynes): Probanden konnten eine begonnene Bewegung bis etwa 200 ms vor ihrem Beginn noch abbrechen.
- Maoz, Yaffe, Koch & Mudrik (eLife 2019): Bei bedeutsamen Spendenentscheidungen war kein Bereitschaftspotential nachweisbar, bei willkürlichen schon.

**Ehrlich zugestanden:** Soon u. a. (2008) und Fried u. a. (2011) zeigen, dass neuronale Vorbereitungsprozesse Entscheidungen teilweise vorhersagen. Das belegt, dass Entscheiden ein Prozess im Gehirn ist – nicht, dass es unfrei ist.`,
    sources: [
      { kind: 'wissenschaft', author: 'B. Libet, C. A. Gleason, E. W. Wright, D. K. Pearl', work: 'Time of conscious intention to act in relation to onset of cerebral activity (readiness-potential)', ref: 'Brain 106 (1983), 623–642', year: '1983', status: 'paraphrase', quote: `Das Bereitschaftspotential begann im Mittel einige hundert Millisekunden vor dem berichteten Zeitpunkt des bewussten Bewegungswunsches.` },
      { kind: 'wissenschaft', author: 'A. Schurger, J. D. Sitt, S. Dehaene', work: 'An accumulator model for spontaneous neural activity prior to self-initiated movement', ref: 'PNAS 109 (2012), E2904–E2913', year: '2012', status: 'paraphrase', quote: `Die Form des Bereitschaftspotentials lässt sich durch die Aufsummierung spontaner neuronaler Schwankungen erklären, die eine Schwelle überschreiten – ohne eine frühe unbewusste „Entscheidung".` },
      { kind: 'wissenschaft', author: 'U. Maoz, G. Yaffe, C. Koch, L. Mudrik', work: 'Neural precursors of decisions that matter – an ERP study of deliberate and arbitrary choice', ref: 'eLife 8 (2019), e39787', year: '2019', status: 'paraphrase', quote: `Bei willkürlichen Entscheidungen zeigte sich ein Bereitschaftspotential, bei überlegten, folgenreichen Entscheidungen dagegen nicht.` },
      { kind: 'wissenschaft', author: 'C. S. Soon, M. Brass, H.-J. Heinze, J.-D. Haynes', work: 'Unconscious determinants of free decisions in the human brain', ref: 'Nature Neuroscience 11 (2008), 543–545', year: '2008', status: 'paraphrase', quote: `Eine Links-rechts-Entscheidung ließ sich aus Hirnaktivität bis zu etwa zehn Sekunden vorher mit einer Trefferquote von rund 60 % (Zufall: 50 %) vorhersagen.` },
      { kind: 'wissenschaft', author: 'M. Schultze-Kraft, D. Birman, M. Rusconi u. a. (Labor J.-D. Haynes)', work: 'The point of no return in vetoing self-initiated movements', ref: 'PNAS 113 (2016), 1080–1085', year: '2016', status: 'paraphrase', quote: `Probanden konnten Bewegungen auch nach Beginn des Bereitschaftspotentials noch bis etwa 200 ms vor Bewegungsbeginn abbrechen.` },
      { kind: 'wissenschaft', author: 'J. Trevena, J. Miller', work: 'Brain preparation before a voluntary action: Evidence against unconscious movement initiation', ref: 'Consciousness and Cognition 19 (2010), 447–456', year: '2010', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Alfred R. Mele', work: 'Free: Why Science Hasn\'t Disproved Free Will', year: '2014', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Libet maß bei **bedeutungslosen Fingerbewegungen** ein Hirnsignal, das vor dem gefühlten Entschluss begann. Neuere Forschung zeigt: Dieses „Bereitschaftspotential" ist großenteils Hintergrundrauschen, das sich zufällig aufschaukelt (Schurger 2012), und bei echten, überlegten Entscheidungen fehlt es weitgehend (Maoz 2019). Libet selbst glaubte an die Freiheit, „Nein" zu sagen, und ein Labor von John-Dylan Haynes zeigte 2016, dass man begonnene Bewegungen noch abbrechen kann. Aus Experimenten über zufälliges Handgelenkbeugen folgt nichts über Entscheidungen wie Heirat, Glaube oder Gewissen.`,
  keyPoints: [
    `**Falsche Art von Entscheidung:** Libet untersuchte, *wann* man eine bedeutungslose Bewegung macht – nicht, *ob* man aus Gründen etwas wählt. Die eigentliche Entscheidung (am Experiment teilzunehmen) war längst bewusst gefallen.`,
    `**Das Bereitschaftspotential ist kein Entschluss:** Schurger u. a. (2012) erklären es als zufällig anschwellendes neuronales Rauschen; Trevena & Miller (2010) fanden es auch dann, wenn Probanden sich gegen die Bewegung entschieden.`,
    `**Bei echten Entscheidungen fehlt es:** Maoz u. a. (2019) fanden bei folgenreichen Entscheidungen kein Bereitschaftspotential.`,
    `**Vorhersage ≠ Determination:** 60 % Trefferquote bei 50 % Zufall (Soon 2008) ist eine leichte Tendenz, keine Vorherbestimmung. Dass Entscheidungen neuronal vorbereitet werden, erwartet auch, wer an eine Seele glaubt, die durch das Gehirn wirkt.`,
    `**Selbst die Forscher widersprechen:** Libet glaubte an ein bewusstes Veto; das Labor von Haynes zeigte, dass Bewegungen abbrechbar sind; die Entdecker des Bereitschaftspotentials, Kornhuber und Deecke, verteidigten die Willensfreiheit.`,
    `**Selbstwiderlegung:** Wer Experimente plant, Hypothesen abwägt und uns überzeugen will, setzt voraus, dass Gründe sein Handeln leiten.`,
  ],
  voices: [
    {
      person: 'swinburne',
      role: 'als Philosoph der Willensfreiheit',
      text: `Richard Swinburne weist darauf hin, dass Libet-Experimente nur Fälle betreffen, in denen es keinerlei Grund gibt, eine Option der anderen vorzuziehen. Gerade dort sei zu erwarten, dass zufällige Hirnprozesse den Ausschlag geben. Die philosophisch interessanten Fälle sind nach Swinburne die, in denen ein Mensch zwischen dem, was er für moralisch richtig hält, und dem, was er am meisten begehrt, hin- und hergerissen ist. Über diese Fälle sagen die Experimente nichts. Swinburne argumentiert zudem, dass die Neurowissenschaft prinzipiell nicht zeigen könne, dass solche Entscheidungen vollständig vorhersagbar sind, weil die Vorhersage die Kenntnis mentaler Zustände voraussetze, die sich nicht auf Hirnzustände reduzieren lassen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Michael Egnor erinnert daran, dass Libet selbst kein Determinist war. Libet fand, dass Probanden eine bereits angebahnte Bewegung bewusst unterdrücken konnten – „free won't", der freie Unwille. Für Egnor ist das bemerkenswert: Die Versuchung entsteht oft ungewollt, die Entscheidung, ihr nicht zu folgen, ist frei. Das entspreche genau der klassischen christlichen Moralpsychologie, die zwischen dem Aufsteigen eines Gedankens und der Zustimmung zu ihm unterscheidet.`,
      sources: [
        { kind: 'wissenschaft', author: 'Benjamin Libet', work: 'Do we have free will?', ref: 'Journal of Consciousness Studies 6 (1999), 47–57', year: '1999', status: 'paraphrase', quote: `Der bewusste Wille kann den Ausgang des Willensprozesses kontrollieren, indem er ein Veto einlegt.` },
        { kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nyssa',
      role: 'als Kirchenvater über Freiheit als Gottebenbildlichkeit',
      text: `Gregor von Nyssa sieht in der Selbstbestimmung des Menschen den Kern seiner königlichen Würde: Der Mensch ist nicht wie die Tiere vom Trieb beherrscht, sondern kann sich zum Guten oder Bösen neigen. Zugleich kennt Gregor die Macht der Leidenschaften, die aus der leiblichen Natur aufsteigen. Freiheit heißt bei ihm nicht, dass es keine vorausgehenden Regungen gibt, sondern dass der Mensch ihnen zustimmen oder widerstehen kann – eine Unterscheidung, die die Libet-Diskussion erstaunlich genau trifft.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Über die Erschaffung des Menschen (De hominis opificio)', ref: 'Kap. 4 und 16', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker eines deterministischen Strafrechts',
      text: `C. S. Lewis warnte in seinem Essay über die „humanitäre Theorie der Strafe", dass ein Menschenbild ohne Verantwortung nicht menschlicher, sondern gefährlicher ist: Wer nicht mehr Strafe *verdient*, wird nur noch „behandelt" – unbefristet und nach dem Urteil von Experten. Wer den Menschen als Verantwortungssubjekt ernst nimmt, schützt seine Würde.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Humanitarian Theory of Punishment (in: God in the Dock)', year: '1949', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'soon-zehn-sekunden',
      objection: `Soon und Haynes konnten Entscheidungen bis zu zehn Sekunden im Voraus aus dem Gehirn ablesen. Bevor du weißt, was du willst, weiß es der Scanner.`,
      objectionBy: 'Sam Harris',
      answer: `Die Trefferquote lag bei rund 60 % – bei einer Wahl zwischen links und rechts, wo Raten schon 50 % bringt. Das ist eine leichte Tendenz, keine Vorherbestimmung. Und es ging um eine völlig beliebige Wahl ohne jeden Grund. Dass sich im Gehirn Neigungen anbahnen, bevor man sich entscheidet, bestreitet niemand – die Frage ist, ob sie die Entscheidung erzwingen. Haynes' eigenes Labor zeigte 2016, dass man begonnene Bewegungen noch abbrechen kann.`,
      sources: [
        { kind: 'wissenschaft', author: 'C. S. Soon, M. Brass, H.-J. Heinze, J.-D. Haynes', work: 'Unconscious determinants of free decisions in the human brain', ref: 'Nature Neuroscience 11 (2008), 543–545', year: '2008', status: 'paraphrase' },
      ],
      questionsBack: [`Wenn ein Würfel mit 60 % Wahrscheinlichkeit eine Seite zeigt – ist das Ergebnis dann „vorherbestimmt"?`],
      followUps: [
        {
          id: 'fried-achtzig-prozent',
          objection: `Fried und Kollegen haben 2011 einzelne Neuronen abgeleitet und Entscheidungen mit 80 % Treffsicherheit 700 Millisekunden vorher vorhergesagt. Das ist deutlich mehr als Zufall.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Ja, das ist der stärkste Befund, und ich nehme ihn ernst. Aber auch dort ging es um den Zeitpunkt einer beliebigen Fingerbewegung, gemessen bei Epilepsiepatienten mit implantierten Elektroden. Dass einer Bewegung eine neuronale Vorbereitung vorausgeht, ist zu erwarten – auch wenn ein Mensch frei handelt, wirkt er durch sein Gehirn, und das braucht Zeit. Vorhersagbarkeit eines Prozesses heißt nicht, dass kein Ich an ihm beteiligt ist; der Zeitpunkt, den die Probanden als „Entschluss" angeben, ist zudem methodisch sehr unsicher.`,
          sources: [
            { kind: 'wissenschaft', author: 'I. Fried, R. Mukamel, G. Kreiman', work: 'Internally generated preactivation of single neurons in human medial frontal cortex predicts volition', ref: 'Neuron 69 (2011), 548–562', year: '2011', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'woher-kommt-dein-wille',
              objection: `Selbst wenn es hundert Prozent wären, bleibt die Frage: Woher kommt dein Wille? Du hast deine Gedanken nicht gewählt, bevor du sie gedacht hast. Du bist nicht der Autor deiner Wünsche.`,
              objectionBy: 'Sam Harris',
              answer: `Jetzt hast du die Neurowissenschaft verlassen und betreibst Philosophie – das ist legitim, aber dann beweisen Libet-Experimente nichts mehr. Dein Argument ist ein klassischer Determinismus, und der gilt unabhängig von jedem Hirnscan. Christen sagen auch nicht, wir erschüfen unsere Wünsche aus dem Nichts, sondern dass wir zu ihnen Stellung nehmen, ihnen zustimmen oder widerstehen können. Übrigens setzen deine eigenen Experimente voraus, dass die Probanden die Anweisungen verstehen und sich frei entscheiden, sie zu befolgen.`,
              detail: `Die philosophische Debatte (Kompatibilismus, Libertarismus, Determinismus) gehört zu A9, ‚willensfreiheit/freier-wille-illusion'. Hier genügt es zu zeigen, dass Harris' stärkstes Argument nicht empirisch ist.`,
            },
          ],
        },
      ],
    },
    {
      id: 'bereitschaftspotential',
      objection: `Libet 1983: Das Bereitschaftspotential beginnt etwa 350 Millisekunden, bevor das Bewusstsein den Entschluss bemerkt. Das Gehirn entscheidet, das Bewusstsein nickt nur ab.`,
      objectionBy: 'Gerhard Roth',
      answer: `Diese Deutung gilt in der Fachwelt inzwischen als überholt. Schurger, Sitt und Dehaene haben 2012 gezeigt, dass sich die Form des Bereitschaftspotentials durch zufällige neuronale Schwankungen erklären lässt, die sich aufschaukeln – es ist kein verborgener Entschluss, sondern Hintergrundrauschen. Trevena und Miller fanden ähnliche Aktivität, auch wenn Probanden sich gegen die Bewegung entschieden. Und die Entdecker des Bereitschaftspotentials selbst, Hans Helmut Kornhuber und Lüder Deecke, haben die Willensfreiheit verteidigt.`,
      sources: [
        { kind: 'wissenschaft', author: 'H. H. Kornhuber, L. Deecke', work: 'Hirnpotentialänderungen bei Willkürbewegungen und passiven Bewegungen des Menschen: Bereitschaftspotential und reafferente Potentiale', ref: 'Pflügers Archiv 284 (1965), 1–17', year: '1965', status: 'paraphrase', note: 'Die Originalentdeckung des Bereitschaftspotentials in Freiburg.' },
        { kind: 'fachliteratur', author: 'H. H. Kornhuber, L. Deecke', work: 'Wille und Gehirn', year: '2007', status: 'paraphrase', note: 'Die Entdecker des Bereitschaftspotentials argumentieren gegen die deterministische Deutung.' },
        { kind: 'wissenschaft', author: 'A. Schurger, P. Hu, J. Pak, A. L. Roskies', work: 'What is the readiness potential?', ref: 'Trends in Cognitive Sciences 25 (2021), 558–570', year: '2021', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'rauschen-ohne-ich',
          objection: `Auch wenn es Rauschen ist: Die Bewegung wird ausgelöst, wenn das Rauschen eine Schwelle überschreitet. Kein Ich nötig – nur Zufall plus Schwelle.`,
          objectionBy: 'Sam Harris',
          answer: `Genau – aber nur dort, wo es keinen Grund gibt, einen Zeitpunkt einem anderen vorzuziehen. Die Probanden hatten sich bewusst vorgenommen, irgendwann zu beugen; das Rauschen bestimmt nur, *wann* genau. Wenn ich mir vornehme, „irgendwann in der nächsten Minute" aufzustehen, und der genaue Moment zufällig ist, beweist das nicht, dass meine Absicht aufzustehen eine Illusion war. Bei Entscheidungen mit Gründen fanden Maoz und Kollegen 2019 gar kein Bereitschaftspotential.`,
          followUps: [
            {
              id: 'maoz-nur-anderswo',
              objection: `Maoz zeigt nur, dass das Bereitschaftspotential bei überlegten Entscheidungen fehlt – dann wird die Entscheidung eben woanders im Gehirn vorbereitet. Es bleibt Gehirn.`,
              objectionBy: 'Robert Sapolsky',
              answer: `Einverstanden, dass jede Entscheidung von Hirnprozessen begleitet ist – das sage ich selbst. Aber dann ist das Libet-Argument erledigt: Sein zentraler Befund trägt bei echten Entscheidungen nicht. Ob die begleitenden Hirnprozesse die Entscheidung *sind* oder ihr *Werkzeug*, kann keine Messung zeigen, die nur Korrelationen erfasst. Das ist dieselbe Unterbestimmtheit wie beim Leib-Seele-Problem insgesamt.`,
              followUps: [
                {
                  id: 'unfalsifizierbar',
                  objection: `Dann ist dein „freier Wille" unfalsifizierbar. Du ziehst dich in die Metaphysik zurück, wo dich keine Daten erreichen.`,
                  objectionBy: 'Robert Sapolsky',
                  answer: `Der Determinismus ist genauso metaphysisch – auch er lässt sich durch keine Messung beweisen. Ich verteidige hier nicht eine Theorie gegen alle Daten, sondern weise eine Übertreibung zurück: die Behauptung, die Neurowissenschaft habe den freien Willen *widerlegt*. Das hat sie nicht. Und unsere Erfahrung des Abwägens und Entscheidens ist selbst ein Datum, das jede Theorie ernst nehmen muss.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'veto-auch-unbewusst',
      objection: `Libets Veto ist ein Hirngespinst. Auch das „Nein" muss neuronal vorbereitet sein – sonst wäre es Magie.`,
      objectionBy: 'Sam Harris',
      answer: `Das Veto ist experimentell untersucht: Im Labor von John-Dylan Haynes konnten Probanden 2016 eine bereits angebahnte Bewegung bis etwa 200 Millisekunden vor ihrem Beginn noch abbrechen. Dass auch das „Nein" neuronal sichtbar ist, bestreite ich nicht – aber du setzt voraus, dass jeder neuronale Vorlauf die *Ursache* und nicht das *Werkzeug* der Entscheidung ist. Genau das ist zu beweisen.`,
      sources: [
        { kind: 'wissenschaft', author: 'M. Schultze-Kraft u. a.', work: 'The point of no return in vetoing self-initiated movements', ref: 'PNAS 113 (2016), 1080–1085', year: '2016', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'wegner-illusion',
          objection: `Daniel Wegner hat gezeigt, dass das Gefühl des Wollens eine nachträgliche Konstruktion ist – wie beim Gläserrücken oder bei hypnotischen Suggestionen, wo Menschen schwören, sie hätten nichts getan.`,
          objectionBy: 'Daniel M. Wegner',
          answer: `Wegner zeigt, dass wir uns über die Urheberschaft *irren können* – das gebe ich zu. Aber aus gelegentlichen Täuschungen folgt nicht, dass wir uns immer täuschen: Aus optischen Täuschungen folgt auch nicht, dass Sehen eine Illusion ist. Wegners Experimente setzen sogar voraus, dass wir normalerweise richtig erkennen, was wir tun – sonst könnte man die Täuschung gar nicht als Abweichung erkennen.`,
          followUps: [
            {
              id: 'nuetzliche-illusion',
              objection: `Die Illusion des freien Willens ist eben nützlich – die Evolution hat sie uns gegeben, damit wir planen und Verantwortung zuweisen können.`,
              objectionBy: 'Robert Sapolsky',
              answer: `Dann stellt sich dieselbe Frage für unser Vernunftvermögen: Wenn die Evolution uns nützliche statt wahre Überzeugungen gegeben hat, warum sollten wir dann der Überzeugung trauen, dass der freie Wille eine Illusion ist? Wer mit „nützliche Illusion" argumentiert, sägt am Ast, auf dem jede wissenschaftliche Überzeugung sitzt.`,
              detail: `Siehe A8, ‚naturalismus/vernunft-durch-evolution' (Plantingas evolutionäres Argument gegen den Naturalismus).`,
            },
          ],
        },
      ],
    },
    {
      id: 'verantwortung-abschaffen',
      objection: `Ohne freien Willen müssen wir Strafe und Schuld abschaffen. Niemand verdient Strafe, niemand verdient Lob. Das ist humaner als euer Sünde-und-Hölle-Denken.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Wenn niemand verantwortlich ist, verdient auch niemand Dankbarkeit, und du könntest keinem Unterdrücker vorwerfen, dass er Unrecht tut. Christliche Ethik kennt längst abgestufte Verantwortung: Krankheit, Zwang und Unwissen mindern Schuld (Lk 12,47–48; 23,34). Aber Barmherzigkeit setzt Verantwortung voraus – nur wer schuldig sein kann, kann Vergebung empfangen. Ein Menschenbild ohne Verantwortung führt nicht zu mehr Milde, sondern dazu, dass Menschen nur noch „behandelt" werden.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'nur-wegen-hoelle',
          objection: `Du willst Verantwortung doch nur, weil du an Strafe und Hölle glaubst.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Nein – Verantwortung ist die Voraussetzung für alles, was menschliche Beziehungen ausmacht: Liebe, Treue, Dank, Vergebung, Versöhnung. Lewis warnte, dass ein Strafrecht ohne Schuldbegriff gefährlich wird, weil dann Experten Menschen unbefristet „therapieren" dürfen. Und in der koptischen Tradition ist Verantwortung vor allem der Weg zur Freiheit: Wer Schuld bekennen kann, kann neu anfangen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Was haben die Probanden bei Libet eigentlich entschieden – und wann haben sie sich entschieden, überhaupt mitzumachen?`,
    `Wenn eine Vorhersage nur 60 % trifft, bei 50 % Zufall – ist das „Vorherbestimmung"?`,
    `Warum fehlt das Bereitschaftspotential bei überlegten Entscheidungen (Maoz 2019)?`,
    `Hast du dich frei entschieden, mir diese Experimente zu erklären – oder sollte ich deine Argumente nur als neuronale Reize betrachten?`,
  ],
  avoid: [
    `„Libet ist widerlegt, also ist der freie Wille bewiesen." – Die Kritik an Libet zeigt nur, dass seine Experimente die Freiheit nicht widerlegen; sie beweisen sie nicht.`,
    `„Die Quantenphysik beweist den freien Willen." – Zufall ist noch keine Freiheit; dieses Argument ist umstritten und wird leicht zerpflückt.`,
    `Die Befunde von Soon (2008) oder Fried (2011) leugnen oder kleinreden – sie sind real, nur ihre Deutung ist strittig.`,
  ],
  concessions: [
    `Entscheidungen werden im Gehirn vorbereitet, und manche lassen sich aus Hirnaktivität teilweise vorhersagen. Unser Wille ist nicht unabhängig von körperlichen Prozessen.`,
    `Wir irren uns manchmal über die Gründe und die Urheberschaft unseres Handelns (Wegner, Konfabulationsforschung).`,
    `Die philosophische Frage, ob Freiheit mit Determinismus vereinbar ist, ist durch die Kritik an Libet nicht entschieden.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alfred R. Mele', work: 'Free: Why Science Hasn\'t Disproved Free Will', year: '2014', status: 'paraphrase', note: 'Klar, kurz, von einem führenden Handlungstheoretiker.' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Mind, Brain, and Free Will', year: '2013', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'A. Schurger, P. Hu, J. Pak, A. L. Roskies', work: 'What is the readiness potential?', ref: 'Trends in Cognitive Sciences 25 (2021)', year: '2021', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Libet', 'Bereitschaftspotential', 'Willensfreiheit', 'Neurowissenschaft', 'Determinismus'],
  related: [
    'willensfreiheit/freier-wille-illusion',
    'neurowissenschaften/geist-gleich-gehirn',
    'naturalismus/vernunft-durch-evolution',
    'calvinismus/voellige-verdorbenheit',
  ],
};

export default claim;
