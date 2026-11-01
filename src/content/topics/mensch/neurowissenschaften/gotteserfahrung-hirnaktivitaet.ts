import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gotteserfahrung-hirnaktivitaet',
  title: `„Gotteserfahrungen sind nur Hirnaktivität (God Helmet, Neurotheologie)."`,
  proponents: [
    { name: 'Michael Persinger', role: 'Neuropsychologe, Laurentian University (Kanada), Erfinder des „God Helmet" (gest. 2018)', work: 'Neuropsychological Bases of God Beliefs (1987)' },
    { name: 'V. S. Ramachandran', role: 'Neurologe, University of California San Diego', work: 'Phantoms in the Brain (mit S. Blakeslee, 1998), Kap. „God and the Limbic System"' },
    { name: 'Michael Shermer', role: 'Wissenschaftsjournalist, Herausgeber des „Skeptic"', work: 'The Believing Brain (2011)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006); BBC Horizon „God on the Brain" (2003)' },
  ],
  steelman: `Wenn Gott wirklich zu Menschen spricht, warum kann man dieselben Erlebnisse dann im Labor erzeugen? Michael Persinger setzte Versuchspersonen einen Helm mit schwachen Magnetfeldern auf die Schläfen und berichtete, ein großer Teil spüre eine „Gegenwart". Psilocybin, der Wirkstoff halluzinogener Pilze, löste in kontrollierten Studien an der Johns Hopkins University mystische Erfahrungen aus, die Teilnehmer zu den bedeutsamsten ihres Lebens zählten. Temporallappen-Epilepsie geht mit religiösen Visionen einher, Läsionen in einem bestimmten Hirnnetzwerk verändern die Religiosität, und beim Gebet tiefgläubiger Mormonen leuchtet im Scanner dasselbe Belohnungssystem auf wie bei Musik, Sex oder Drogen. Andrew Newberg sah bei meditierenden Buddhisten und betenden Franziskanerinnen ähnliche Muster. Fazit: Was Gläubige als Begegnung mit Gott deuten, ist ein Hirnzustand – auslösbar, messbar und kulturell gefärbt.`,
  biblical: {
    summary: `Die Bibel beschreibt Gotteserfahrung als Erfahrung des ganzen Menschen, Leib eingeschlossen: „Mein Leib und Seele freuen sich in dem lebendigen Gott" (Ps 84,3). Dass Beten im Körper Spuren hinterlässt, ist also biblisch zu erwarten. Zugleich ist die Schrift nüchtern: Erfahrungen müssen geprüft werden (1 Joh 4,1), auch eindrucksvolle Zeichen können in die Irre führen (Dtn 13,2–4; 2 Kor 11,14). Das Fundament des Glaubens ist nicht ein innerer Zustand, sondern ein öffentliches, geschichtliches Ereignis: die Auferstehung Christi (1 Kor 15,14; 2 Petr 1,16).`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '84,3', quote: `Meine Seele verlangt und sehnt sich nach den Vorhöfen des HERRN; mein Leib und Seele freuen sich in dem lebendigen Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viele falsche Propheten ausgegangen in die Welt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Petrus', ref: '1,16', status: 'paraphrase', quote: `Wir sind nicht klug ersonnenen Fabeln gefolgt, als wir euch die Kraft und Ankunft unseres Herrn Jesus Christus kundtaten, sondern wir haben seine Herrlichkeit selbst gesehen.` },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Tradition ist gegenüber außergewöhnlichen Erfahrungen auffallend zurückhaltend. Die Wüstenväter warnten davor, Visionen zu suchen oder ihnen vorschnell zu trauen; sie maßen geistliches Leben an Demut, Liebe und innerem Frieden, nicht an Empfindungen. Echte Gotteserfahrung im orthodoxen Sinn ist vor allem das stille, beständige Leben des Gebets, der Liturgie und der Sakramente.`,
    detail: `- **Antonius der Große** lehrt nach der Vita des Athanasius (Kap. 35–37) die Unterscheidung der Geister: Was von Gott kommt, bringt Ruhe, Freude und Mut; was vom Bösen kommt, Verwirrung, Furcht und Unordnung.
- **Vater Matta el-Meskeen** beschreibt im „Orthodoxen Gebetsleben" Gebet als Gemeinschaft mit Gott, deren Frucht Demut und Liebe ist; das Streben nach Gefühlen oder Erscheinungen gilt als Gefahr.
- Die koptische Kirche gründet ihren Glauben nicht auf private Erlebnisse, sondern auf die apostolische Überlieferung von Christus, der Mensch geworden, gestorben und auferstanden ist.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 35–37', status: 'paraphrase', quote: `Die Erscheinung der Heiligen ist ruhig und bringt Freude und Zuversicht; die der Dämonen ist lärmend und erzeugt Furcht, Verwirrung und Unordnung der Gedanken.` },
      { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life)', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die „Neurotheologie" hat gezeigt, dass religiöse Erfahrungen wie alle Erfahrungen neuronale Korrelate haben – verteilt über viele Hirnnetzwerke, nicht in einem „Gottesmodul". Der berühmte „God Helmet" hielt einer Doppelblind-Prüfung nicht stand. Substanzen wie Psilocybin können mystisch-artige Zustände auslösen. Aus diesen Befunden folgt nach Auffassung führender Forscher selbst – etwa Andrew Newberg – nichts darüber, ob Gott existiert.`,
    detail: `- **God Helmet:** Granqvist u. a. (2005) wiederholten Persingers Versuch doppelblind mit 89 Teilnehmern. Ob das Magnetfeld an- oder ausgeschaltet war, spielte keine Rolle; die „Gegenwartserlebnisse" ließen sich durch die Suggestibilität der Teilnehmer vorhersagen.
- **Karmeliterinnen:** Beauregard & Paquette (2006) untersuchten 15 Nonnen, die eine mystische Vereinigung mit Gott vergegenwärtigten. Aktiv waren zahlreiche Areale – kein einzelner „Gottespunkt".
- **Belohnungssystem:** Ferguson u. a. (2018) fanden bei Mormonen während spiritueller Gefühle Aktivität im Nucleus accumbens – demselben System, das bei Liebe, Musik und Großzügigkeit aktiv ist.
- **Läsionsnetzwerk:** Ferguson u. a. (2022) identifizierten bei Patienten mit Hirnläsionen ein Netzwerk um das periaquäduktale Grau, dessen Schädigung mit Veränderungen der Religiosität einherging.
- **Psilocybin:** Griffiths u. a. (2006) lösten bei einem Großteil der Teilnehmer Erfahrungen aus, die Kriterien mystischer Erlebnisse erfüllten.
- **Glaubensverarbeitung:** Harris u. a. (2009) fanden, dass religiöse und nicht-religiöse Aussagen, die man für wahr hält, ähnliche Areale (u. a. ventromedialer präfrontaler Kortex) beanspruchen.`,
    sources: [
      { kind: 'wissenschaft', author: 'P. Granqvist, M. Fredrikson, P. Unge u. a.', work: 'Sensed presence and mystical experiences are predicted by suggestibility, not by the application of transcranial weak complex magnetic fields', ref: 'Neuroscience Letters 379 (2005), 1–6', year: '2005', status: 'paraphrase', quote: `In einer Doppelblindstudie hatten die Magnetfelder keinen Effekt; Gegenwarts- und mystische Erlebnisse hingen mit der Suggestibilität der Teilnehmer zusammen.` },
      { kind: 'wissenschaft', author: 'M. Beauregard, V. Paquette', work: 'Neural correlates of a mystical experience in Carmelite nuns', ref: 'Neuroscience Letters 405 (2006), 186–190', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'M. A. Ferguson, F. L. W. V. J. Schaper, A. Cohen u. a.', work: 'A neural circuit for spirituality and religiosity derived from patients with brain lesions', ref: 'Biological Psychiatry 91 (2022), 380–388', year: '2022', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'M. A. Ferguson, J. A. Nielsen, J. B. King u. a.', work: 'Reward, salience, and attentional networks are activated by religious experience in devout Mormons', ref: 'Social Neuroscience 13 (2018), 104–116', year: '2018', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'R. R. Griffiths, W. A. Richards, U. McCann, R. Jesse', work: 'Psilocybin can occasion mystical-type experiences having substantial and sustained personal meaning and spiritual significance', ref: 'Psychopharmacology 187 (2006), 268–283', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'S. Harris, J. T. Kaplan, A. Curiel u. a.', work: 'The neural correlates of religious and nonreligious belief', ref: 'PLoS ONE 4 (2009), e7272', year: '2009', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Andrew Newberg, Eugene d\'Aquili, Vince Rause', work: 'Why God Won\'t Go Away: Brain Science and the Biology of Belief', year: '2001', status: 'paraphrase', quote: `Dass religiöse Erfahrungen neurologische Korrelate haben, entscheidet nicht, ob ihnen eine Wirklichkeit entspricht – auch die Wahrnehmung realer Dinge hat neuronale Korrelate.`, note: 'Newberg betont dies in mehreren Büchern und Interviews; Wortlaut sinngemäß.' },
    ],
  },
  quickAnswer: `Natürlich ist Gebet im Gehirn sichtbar – **alles**, was ein Mensch erlebt, ist im Gehirn sichtbar, auch die Liebe zu seinen Kindern oder der Anblick eines Apfels. Daraus folgt nicht, dass Kinder oder Apfel eingebildet sind. Der „God Helmet" ließ sich in einer schwedischen Doppelblindstudie nicht bestätigen, und selbst der führende Neurotheologe Andrew Newberg betont, dass Hirnscans nicht entscheiden können, ob Gott existiert. Mein Glaube ruht ohnehin nicht auf einem Gefühl, sondern auf der Auferstehung Jesu.`,
  keyPoints: [
    `**Korrelat ist nicht Ursache:** Jede Erfahrung – ob von realen oder eingebildeten Dingen – hat ein Hirnkorrelat. Die Bilder im Scanner sagen nichts über die Wirklichkeit des Erfahrenen.`,
    `**Der „God Helmet" ist gescheitert:** Granqvist u. a. (2005) fanden doppelblind keinen Effekt der Magnetfelder; entscheidend war die Suggestibilität.`,
    `**Auslösbar heißt nicht unecht:** Dass man visuelle Halluzinationen chemisch auslösen kann, macht nicht alles Sehen falsch. Dasselbe gilt für religiöse Erfahrung.`,
    `**Kein „Gottesmodul":** Religiöse Erfahrungen beanspruchen verteilte Netzwerke, die auch bei Liebe, Musik und Moral aktiv sind – sie sind tief menschlich, nicht exotisch.`,
    `**Selbst Neurotheologen widersprechen dem Reduktionismus:** Newberg betont, dass die Daten die Wahrheitsfrage offenlassen.`,
    `**Das Fundament ist geschichtlich:** Christlicher Glaube beruht auf der öffentlich bezeugten Auferstehung Jesu, nicht auf inneren Zuständen.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Literaturwissenschaftler und Denker über Erkenntnisperspektiven',
      text: `In seinem Essay „Betrachtungen in einem Werkzeugschuppen" beschreibt Lewis einen Sonnenstrahl, der durch einen Spalt in einen dunklen Schuppen fällt. Man kann den Strahl *anschauen* – dann sieht man Staubteilchen im Licht. Oder man kann *entlang* des Strahls schauen – dann sieht man durch den Spalt die Blätter und die Sonne. Die moderne Haltung, so Lewis, hält das Anschauen von außen für die einzig „wahre" Sicht: Der Physiologe beschreibt die Liebe als Hormone und Nervenimpulse und meint, damit habe er das Eigentliche erfasst. Doch der Liebende, der „entlang des Strahls" schaut, erkennt etwas, das die äußere Beschreibung nicht enthält. Für die Neurotheologie heißt das: Der Hirnscan des Betenden ist das Anschauen des Strahls – er sagt nichts darüber, wohin der Strahl führt.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Meditation in a Toolshed (Betrachtungen in einem Werkzeugschuppen), in: God in the Dock', year: '1945', status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph (Prinzip der Glaubwürdigkeit)',
      text: `Richard Swinburne formuliert das „Prinzip der Glaubwürdigkeit": Wenn es einem Menschen so erscheint, als nehme er etwas wahr, dann ist es – ohne besondere Gegengründe – vernünftig anzunehmen, dass es wahrscheinlich so ist. Das gilt für Sinneswahrnehmungen ebenso wie für religiöse Erfahrung. Gegengründe wären etwa, dass der Erfahrende unter Drogen stand oder dass der Gegenstand nachweislich nicht existiert. Dass eine Erfahrung ein Hirnkorrelat hat, ist dagegen kein Gegengrund, denn das gilt für jede Wahrnehmung. Swinburne räumt ein, dass religiöse Erfahrungen allein Gottes Existenz nicht beweisen, aber in einem Gesamtargument zusätzliches Gewicht haben.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: 'Kap. 13', year: '2. Aufl. 2004', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche und Lehrer der Unterscheidung der Geister',
      text: `Antonius der Große, dessen Leben Athanasius beschrieb, war alles andere als leichtgläubig gegenüber Visionen. Er lehrte seine Mönche, Erscheinungen nüchtern zu prüfen: Was von Gott kommt, bringt Frieden, Freude und Mut; was vom Bösen kommt, Verwirrung, Angst und innere Unordnung. Sein Maßstab war nicht die Intensität einer Erfahrung, sondern ihre Frucht. Damit nimmt die koptische Tradition das berechtigte Anliegen der Skeptiker – nicht jede innere Erfahrung ist echt – seit siebzehn Jahrhunderten ernst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 35–37', status: 'paraphrase' },
      ],
    },
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer des Gebets',
      text: `Vater Matta el-Meskeen beschreibt das Gebet nicht als Jagd nach Gefühlen, sondern als Hingabe des ganzen Menschen an Gott, die Zeit, Treue und Demut braucht. Er warnt ausdrücklich davor, Gebet an Empfindungen zu messen; Trockenheit und Stille gehören dazu. Wer so betet, für den ist es keine Bedrohung, dass das Gehirn am Gebet beteiligt ist – der Mensch betet ja mit Leib und Seele. Entscheidend ist, wem das Gebet gilt und welche Früchte es trägt.`,
      sources: [
        { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Das orthodoxe Gebetsleben (Orthodox Prayer Life)', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'god-helmet',
      objection: `Persinger erzeugte mit schwachen Magnetfeldern Gotteserfahrungen im Labor – ein großer Teil seiner Probanden spürte eine „Gegenwart". Gott sitzt im Temporallappen.`,
      objectionBy: 'Michael Persinger',
      answer: `Eine schwedische Forschergruppe um Pehr Granqvist hat den Versuch 2005 doppelblind wiederholt, also ohne dass Probanden oder Versuchsleiter wussten, ob das Feld eingeschaltet war. Ergebnis: Das Magnetfeld hatte keinen Effekt. Wer suggestibel war, spürte etwas – ob mit oder ohne Feld. Der „God Helmet" ist damit ein Lehrstück über Erwartungseffekte, nicht über Gott.`,
      detail: `Bekannt wurde auch, dass Richard Dawkins den Helm 2003 für die BBC-Sendung „Horizon" testete und nach eigenem Bericht kaum etwas Besonderes spürte; Persinger führte das auf Dawkins' geringe Temporallappen-Empfindlichkeit zurück. Solche Anekdoten beweisen nichts – entscheidend ist die kontrollierte Studie.`,
      sources: [
        { kind: 'wissenschaft', author: 'P. Granqvist u. a.', work: 'Sensed presence and mystical experiences are predicted by suggestibility, not by the application of transcranial weak complex magnetic fields', ref: 'Neuroscience Letters 379 (2005), 1–6', year: '2005', status: 'paraphrase' },
      ],
      questionsBack: [`Kennst du eine unabhängige Doppelblind-Replikation des God Helmet, die Persingers Ergebnis bestätigt?`],
      followUps: [
        {
          id: 'psilocybin',
          objection: `Gut, dann eben Psilocybin. Griffiths und Kollegen haben an der Johns Hopkins University mystische Erfahrungen auf Rezept erzeugt – Erfahrungen, die Teilnehmer zu den bedeutsamsten ihres Lebens zählten.`,
          objectionBy: 'Michael Shermer',
          answer: `Das bestreite ich nicht: Substanzen können Zustände auslösen, die mystischen Erfahrungen ähneln. Aber daraus folgt nicht, dass jede religiöse Erfahrung eine Drogenwirkung ist. LSD kann visuelle Halluzinationen erzeugen – trotzdem ist nicht alles Sehen Halluzination. Die Frage ist nicht, ob man Erfahrungen auslösen kann, sondern ob es auch echte gibt und wie man sie unterscheidet.`,
          detail: `Die christliche Tradition unterscheidet seit jeher zwischen echten und falschen geistlichen Erfahrungen (Antonius, Cassian). Kriterien: Übereinstimmung mit der Offenbarung, Demut statt Selbsterhöhung, dauerhafte Frucht der Liebe (Gal 5,22), Einbettung in die Gemeinschaft der Kirche.`,
          followUps: [
            {
              id: 'chemie-reicht',
              objection: `Wenn man es chemisch herstellen kann, ist Gott als Erklärung überflüssig – die Chemie reicht.`,
              objectionBy: 'Michael Shermer',
              answer: `Die Chemie erklärt den *Zustand* der Erfahrung, nicht, ob die Erfahrung etwas Wirkliches erfasst. Man kann auch das Gefühl, berührt zu werden, durch Nervenreizung erzeugen – daraus folgt nicht, dass mich nie jemand berührt hat. Außerdem: Mein Glaube beruht nicht auf einem mystischen Erlebnis, sondern auf einem öffentlichen, historischen Ereignis, der Auferstehung Jesu, die von vielen Zeugen bezeugt wurde.`,
              followUps: [
                {
                  id: 'auferstehung-auch-erlebnis',
                  objection: `Die „Auferstehung" ist doch selbst nur ein religiöses Erlebnis – Visionen von Jüngern in einem emotionalen Ausnahmezustand. Du verschiebst das Problem nur 2000 Jahre zurück.`,
                  objectionBy: 'Michael Shermer',
                  answer: `Der Unterschied ist entscheidend: Ein mystisches Erlebnis ist privat. Die Osterberichte nennen dagegen öffentliche, überprüfbare Elemente – ein leeres Grab in einer Stadt voller Gegner, Begegnungen mit Gruppen an verschiedenen Orten und die Bekehrung erklärter Skeptiker wie Jakobus und des Verfolgers Paulus. Visionen erklären einzelne Elemente schlecht und das Gesamtbild gar nicht. Darüber kann man historisch streiten – aber es ist eine andere Frage als die nach Hirnströmen beim Gebet.`,
                  detail: `Ausführlich: ‚psychiatrie/auferstehung-trauerhalluzination' (Trauerhalluzinationen, Gruppenerscheinungen, Paulus) und A16 ‚auferstehung/halluzinationen'.

Für das Gespräch: Erkläre den Unterschied zwischen **Erfahrungsargument** (Ich habe Gott erlebt) und **Geschichtsargument** (Es gibt öffentliche Fakten, die eine Erklärung verlangen). Die Neurowissenschaft kann das erste befragen, das zweite muss historisch geprüft werden. N. T. Wright argumentiert, dass das leere Grab und die Erscheinungen nur *zusammen* den Ursprung des Osterglaubens erklären: Ein leeres Grab allein hätte man als Grabraub gedeutet, Visionen allein als Geistererscheinungen – keines von beiden hätte Juden des ersten Jahrhunderts zur Rede von „Auferstehung" gebracht.`,
                  voices: [
                    {
                      person: 'nt-wright',
                      role: 'als Neutestamentler und Historiker',
                      text: `N. T. Wright zeigt in „The Resurrection of the Son of God", dass „Auferstehung" im Judentum des ersten Jahrhunderts eine leibliche Rückkehr ins Leben bedeutete, nicht ein geistiges Weiterleben oder eine Vision. Visionen Verstorbener waren in der Antike bekannt und wurden als Erscheinung eines Geistes oder Engels gedeutet – gerade nicht als Auferstehung. Dass die Jünger dennoch von Auferstehung sprachen, erklärt sich nach Wright nur, wenn das Grab leer war *und* sie Jesus begegneten.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', ref: 'Teil V, Kap. 18', year: '2003', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [`Welche neurowissenschaftliche Studie erklärt ein leeres Grab?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'temporallappen',
      objection: `Temporallappen-Epileptiker haben gehäuft religiöse Erlebnisse – Ramachandran sprach von einem „Gottesmodul". Religion ist ein neurologischer Nebeneffekt.`,
      objectionBy: 'V. S. Ramachandran',
      answer: `Die Datenlage dafür ist dünn. In einer japanischen Studie mit 234 Epilepsie-Patienten hatten nur drei – gut ein Prozent – anfallsbezogene religiöse Erlebnisse (Ogata & Miyakawa 1998). Ramachandrans eigene Untersuchung umfasste nur sehr wenige Patienten. Und neuere Bildgebung zeigt, dass religiöse Erfahrung über viele Netzwerke verteilt ist – ein „Gottesmodul" gibt es nicht.`,
      sources: [
        { kind: 'wissenschaft', author: 'A. Ogata, T. Miyakawa', work: 'Religious experiences in epileptic patients with a focus on ictus-related episodes', ref: 'Psychiatry and Clinical Neurosciences 52 (1998), 321–325', year: '1998', status: 'paraphrase' },
        { kind: 'gegner', author: 'V. S. Ramachandran, Sandra Blakeslee', work: 'Phantoms in the Brain', ref: 'Kap. 9', year: '1998', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'ferguson-netzwerk',
          objection: `Ferguson und Kollegen haben 2022 in „Biological Psychiatry" einen „Schaltkreis für Spiritualität" gefunden: Läsionen in einem Netzwerk um das periaquäduktale Grau verändern die Religiosität. Glaube hat eine neuronale Adresse.`,
          objectionBy: 'Sam Harris',
          answer: `Das zeigt, dass das Gehirn an religiöser Haltung beteiligt ist – was ich erwarte, weil der Mensch mit Leib und Seele glaubt. Hirnläsionen können auch Sprache, Musikalität oder Rechenfähigkeit zerstören. Daraus folgt nicht, dass Sprache, Musik oder Mathematik Illusionen sind. Dass eine Fähigkeit ein neuronales Substrat hat, sagt nichts darüber, ob das, worauf sie sich richtet, wirklich ist.`,
          followUps: [
            {
              id: 'mathe-ueberpruefbar',
              objection: `Mathematik kann man überprüfen. Gott nicht.`,
              objectionBy: 'Sam Harris',
              answer: `Damit hast du die Neurowissenschaft verlassen und bist bei der Erkenntnistheorie – das ist fair, aber es zeigt, dass der Hirnscan das Argument nicht trägt. Und Christen behaupten durchaus Überprüfbares: ein leeres Grab, Zeugen, eine nachprüfbare Geschichte, Argumente für einen Schöpfer. Darüber können wir gern reden.`,
              detail: `Weiterführend: A8, ‚atheismus/keine-beweise-fuer-gott' und ‚erkenntnistheorie/religioese-erfahrung-kein-beleg'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'belohnungssystem',
      objection: `Beim Gebet leuchtet dasselbe Belohnungssystem auf wie bei Drogen und Sex (Ferguson 2018). Religion ist ein körpereigener Rausch.`,
      objectionBy: 'Richard Dawkins',
      answer: `Das Belohnungssystem ist auch aktiv, wenn Mütter ihre Babys sehen, wenn Menschen Musik hören oder großzügig spenden. Niemand schließt daraus, dass Mutterliebe oder Großzügigkeit ein Rausch ohne Gegenstand sind. Dass Gebet Freude auslöst, passt zu dem, was die Bibel sagt: „Mein Leib und Seele freuen sich in dem lebendigen Gott" (Ps 84,3). Über die Existenz Gottes entscheidet der Scanner nicht – das betont selbst Andrew Newberg.`,
      followUps: [
        {
          id: 'harris-glaubensareale',
          objection: `Harris und Kollegen haben 2009 gezeigt, dass religiöse und nicht-religiöse Überzeugungen dieselben Hirnareale nutzen. Glaube ist also nur ein Gefühl der Gewissheit, egal worauf es sich bezieht.`,
          objectionBy: 'Sam Harris',
          answer: `Diese Studie zeigt eigentlich etwas für mich Günstiges: Religiöse Überzeugungen werden im Gehirn wie andere Überzeugungen verarbeitet – nicht wie eine Störung oder ein Sonderzustand. Damit verschiebt sich die Frage dahin, wo sie hingehört: Sind die Gründe für den Glauben gut oder schlecht? Das entscheidet man nicht im Scanner, sondern am Argument.`,
          followUps: [
            {
              id: 'dann-evidenz',
              objection: `Dann reden wir über Evidenz – und da habt ihr nichts.`,
              objectionBy: 'Richard Dawkins',
              answer: `Gern – das ist die richtige Ebene. Ich würde mit drei Punkten beginnen: dem Anfang des Universums, seiner Feinabstimmung für Leben und den historischen Fakten um die Auferstehung Jesu. Aber halten wir fest: Die Neurowissenschaft hat in dieser Frage nichts entschieden.`,
              detail: `Hier ist die Brücke zu anderen Themenblöcken: A8 ‚atheismus/keine-beweise-fuer-gott', A11 ‚kosmologie/universum-aus-dem-nichts', A16 ‚auferstehung/halluzinationen'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'alle-religionen-gleiche-muster',
      objection: `Newberg fand bei meditierenden Buddhisten und betenden Franziskanerinnen ähnliche Hirnmuster. Wenn alle dasselbe erleben, ist es nicht dein Gott, sondern das Gehirn.`,
      objectionBy: 'Michael Shermer',
      answer: `Ähnliche Muster bei Konzentration und Versenkung sagen nichts über den Inhalt der Erfahrung – auch Mathematiker und Schachspieler zeigen ähnliche Konzentrationsmuster, obwohl sie Verschiedenes denken. Christen behaupten nicht, dass Menschen anderer Religionen keine echte Sehnsucht nach Gott hätten; Paulus sagt, Gott sei „nicht ferne von einem jeglichen unter uns" (Apg 17,27). Welche Deutung wahr ist, entscheidet sich an anderen Gründen als am Hirnbild.`,
      followUps: [
        {
          id: 'erfahrungen-beweisen-nichts',
          objection: `Also gibst du zu, dass religiöse Erfahrungen nichts beweisen.`,
          objectionBy: 'Michael Shermer',
          answer: `Sie haben Beweisgewicht – wie jede Wahrnehmung –, aber sie sind korrigierbar und nicht das Fundament. Swinburne nennt das das Prinzip der Glaubwürdigkeit: Was uns erscheint, dürfen wir für wirklich halten, solange keine Gegengründe vorliegen. Ein Hirnkorrelat ist kein solcher Gegengrund. Christlicher Glaube verbindet Erfahrung mit Geschichte und Vernunft.`,
          followUps: [
            {
              id: 'aliens-und-krishna',
              objection: `Dein Prinzip der Glaubwürdigkeit beweist zu viel. Dann musst du auch Entführungen durch Außerirdische, Begegnungen mit Krishna und Erscheinungen von Hausgeistern für real halten – die Betroffenen sind genauso überzeugt.`,
              objectionBy: 'Susan Blackmore',
              answer: `Nein, denn das Prinzip gilt nur, solange keine Gegengründe vorliegen – und für Entführungserlebnisse gibt es einen gut belegten Gegengrund: Schlafparalyse mit Halluzinationen beim Aufwachen, die du selbst untersucht hast. Für religiöse Erfahrung insgesamt gibt es keinen solchen allgemeinen Gegengrund, nur für bestimmte Fälle. Und Christen müssen nicht jede religiöse Erfahrung anderer für Täuschung halten: Paulus sagt, Gott sei keinem Menschen fern. Strittig ist die Deutung, nicht, dass Menschen etwas erleben.`,
              detail: `Swinburne formuliert das Prinzip der Glaubwürdigkeit (*principle of credulity*) ausdrücklich mit Einschränkungen: Eine Erfahrung verliert ihr Gewicht, wenn der Erfahrende unzuverlässig ist, die Umstände erfahrungsgemäß zu Täuschungen führen, starke Gründe gegen die Existenz des Gegenstandes sprechen oder die Erfahrung sich anders vollständig erklären lässt. Diese Gegengründe sind für jeden Einzelfall zu prüfen.

Für Entführungsberichte: Blackmore hat gezeigt, dass viele typische Merkmale (Lähmung, Gegenwartsgefühl, Druck auf der Brust, Gestalten im Raum) den Merkmalen der Schlafparalyse entsprechen. Das ist ein spezifischer Gegengrund – und ein redlicher Christ akzeptiert ihn.

William Alston hat in „Perceiving God" ausführlich begründet, warum die christliche Gotteserfahrung als „doxastische Praxis" ähnlich behandelt werden darf wie die Sinneswahrnehmung: Sie ist nicht unfehlbar, aber in einer Gemeinschaft mit Prüfkriterien eingebettet.`,
              sources: [
                { kind: 'gegner', author: 'Susan Blackmore', work: 'Abduction by aliens or sleep paralysis?', ref: 'Skeptical Inquirer 22/3 (1998)', year: '1998', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: 'Kap. 13', year: '2. Aufl. 2004', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'William P. Alston', work: 'Perceiving God: The Epistemology of Religious Experience', year: '1991', status: 'paraphrase' },
              ],
              questionsBack: [`Welchen konkreten Gegengrund hast du für die Erfahrung eines Christen, der im Gebet Frieden und Vergebung erlebt und dessen Leben sich dauerhaft zum Guten verändert?`],
              followUps: [
                {
                  id: 'schlafparalyse-daemonen',
                  objection: `Dieselbe Schlafparalyse erklärt auch die nächtlichen „Dämonen", „bösen Gegenwarten" und Visionen in euren Heiligenlegenden. Euer Gegengrund trifft also auch eure eigenen Quellen.`,
                  objectionBy: 'Susan Blackmore',
                  answer: `Für manche Berichte mag das zutreffen – das gebe ich offen zu, und die Kirche hat selbst nie verlangt, jede Vision für echt zu halten. Aber ein Gegengrund für eine *Art* von Erlebnis ist keiner für alle: Die Bekehrung des Paulus geschah am helllichten Tag, unterwegs, mit Begleitern, und veränderte sein ganzes Leben. Und die christliche Tradition hat diese Unterscheidung selbst schon vor 1700 Jahren vorgenommen: Antonius lehrte seine Mönche, Erscheinungen nach ihren Früchten zu prüfen, nicht nach ihrer Lebhaftigkeit.`,
                  detail: `Nach der Vita Antonii (Athanasius, Kap. 35–37) erkennt man die Herkunft einer Erscheinung an ihrer Wirkung: Was von Gott kommt, bringt Ruhe, Freude, Mut und Liebe zu Gott und den Menschen; was vom Bösen kommt, bringt Verwirrung, Furcht, Unruhe und Niedergeschlagenheit. Das Kriterium ist also nicht das Erlebnis selbst, sondern seine geistliche Frucht.

Wichtig für das Gespräch: Die Existenz von Schlafparalyse widerlegt nicht die christliche Lehre über geistige Wirklichkeiten; sie zeigt nur, dass man nicht jedes nächtliche Erlebnis geistlich deuten soll. Siehe auch ‚psychiatrie/daemonen-sind-krankheiten'.`,
                  voices: [
                    {
                      person: 'antonius',
                      role: 'als Vater der Mönche und Lehrer der Unterscheidung der Geister',
                      text: `Der hl. Antonius warnt nach dem Bericht des Athanasius seine Mönche davor, sich von Erscheinungen beeindrucken zu lassen. Entscheidend sei, was eine Erfahrung in der Seele bewirkt: Die Gegenwart der Heiligen ist still und sanft und erfüllt mit Freude und Zuversicht; das Wirken der Dämonen kommt mit Lärm und Getöse und erzeugt Furcht und Verwirrung. Antonius rät, nicht nach Visionen zu streben, sondern nach einem reinen, demütigen Herzen.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Das Leben des Antonius (Vita Antonii)', ref: 'Kap. 35–37', year: 'ca. 360', status: 'paraphrase' },
                      ],
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
      id: 'nelson-rem-einbruch',
      objection: `Der Neurologe Kevin Nelson hat gezeigt, dass viele spirituelle Erlebnisse – Lichter, Außerkörpererfahrungen, Gegenwartsgefühle – auf Einbrüche des REM-Schlafs in den Wachzustand zurückgehen. Menschen mit Nahtoderfahrungen hatten häufiger solche REM-Intrusionen. Das spirituelle „Tor" im Gehirn ist ein Schalter zwischen Schlaf und Wachen.`,
      objectionBy: 'Kevin Nelson',
      answer: `Nelsons Befund ist interessant und ich nehme ihn ernst: Bestimmte Erlebnisformen hängen offenbar mit der Regulation von Schlaf und Wachheit zusammen. Aber erstens war es ein Zusammenhang in einer kleinen Stichprobe, keine vollständige Erklärung – andere Forscher fanden ihn nicht in gleicher Stärke. Zweitens zeigt ein Mechanismus, *wie* ein Erlebnis vermittelt wird, nicht, *ob* es etwas Wirkliches erfasst. Und drittens beruht christlicher Glaube nicht auf Lichtern und Tunneln, sondern auf Christus.`,
      detail: `Nelson u. a. (Neurology 2006) verglichen 55 Personen mit Nahtoderfahrung mit einer Kontrollgruppe und fanden bei Ersteren häufiger Berichte über REM-Intrusion (z. B. Schlafparalyse, hypnagoge Halluzinationen). In „The Spiritual Doorway in the Brain" (2011) weitet Nelson das zu einer allgemeinen Theorie spiritueller Erfahrung aus. Kritiker wandten ein, die Kontrollgruppe sei nicht gut vergleichbar gewesen und die Daten seien retrospektive Selbstauskünfte.

Für das Gespräch ist die Kernunterscheidung wichtig: Mechanismus ist nicht Wahrheitsurteil. Auch das Sehen hat einen Mechanismus – und die Kenntnis der Sehbahn beweist nicht, dass es keine Bäume gibt.`,
      sources: [
        { kind: 'gegner', author: 'Kevin Nelson', work: 'The Spiritual Doorway in the Brain: A Neurologist\'s Search for the God Experience', year: '2011', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'K. R. Nelson, M. Mattingly, S. A. Lee, F. A. Schmitt', work: 'Does the arousal system contribute to near death experience?', ref: 'Neurology 66 (2006), 1003–1009', year: '2006', status: 'paraphrase' },
      ],
      questionsBack: [`Wenn wir den Mechanismus des Sehens kennen – folgt daraus, dass wir nichts Wirkliches sehen?`],
      followUps: [
        {
          id: 'askese-erzeugt-visionen',
          objection: `Und schau dir eure Mönche an: Fasten, Schlafentzug, nächtelanges Gebet in der Wüste – das sind genau die Bedingungen, unter denen das Gehirn Halluzinationen produziert. Eure Wüstenväter haben ihre Visionen selbst erzeugt.`,
          objectionBy: 'Michael Shermer',
          answer: `Dass Fasten und Schlafmangel die Wahrnehmung verändern können, wussten die Wüstenväter selbst – und deshalb waren sie Visionen gegenüber äußerst misstrauisch. Das Ziel der Askese war nie, Erscheinungen zu erzeugen, sondern ein demütiges, liebendes Herz. Johannes Cassian nennt die Unterscheidung (*discretio*) die wichtigste Tugend des Mönchs und berichtet von Mönchen, die durch die Gier nach Visionen in die Irre gingen. Deine Kritik trifft also eine Fehlform, die die Tradition selbst verurteilt hat.`,
          detail: `Cassian lässt in den „Unterredungen mit den Vätern" (Collationes II) Abba Moses ausführen, dass weder strenges Fasten noch Nachtwachen noch Einsamkeit an sich vor dem Fall schützen, sondern allein die Unterscheidung, die maßvoll zwischen den Extremen hindurchführt. Er nennt Beispiele von Mönchen, die sich auf Visionen und eigene Eingebungen verließen und dadurch zu Fall kamen.

Die koptische Tradition hat diese Nüchternheit bewahrt: Wer im Kloster von Visionen berichtet, wird zuerst zum Beichtvater geschickt, nicht bewundert. Fasten dient der Herrschaft über die Leidenschaften und der Solidarität mit den Armen, nicht dem Erzeugen außergewöhnlicher Zustände. Das gilt auch für die rund 200 Fastentage der koptischen Kirche, die von Familien und Berufstätigen gehalten werden, nicht von Visionssuchern.`,
          sources: [
            { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'II (Abba Moses über die Unterscheidung)', year: 'ca. 420–429', status: 'paraphrase' },
          ],
          questionsBack: [`Warum hätten die Wüstenväter vor Visionen gewarnt, wenn es ihnen darum ging, sie zu erzeugen?`],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn ich einen Apfel sehe und mein Sehzentrum aktiv ist – beweist das, dass es den Apfel nicht gibt?`,
    `Kennst du eine Doppelblind-Replikation des God Helmet, die funktioniert hat?`,
    `Welche Hirnaktivität würdest du erwarten, wenn ein Mensch wirklich Gott begegnet?`,
    `Wenn Liebe das Belohnungssystem aktiviert – ist deine Liebe zu deiner Familie dann eingebildet?`,
  ],
  avoid: [
    `„Die Wissenschaft hat den Gottespunkt im Gehirn gefunden – das beweist, dass Gott uns dafür geschaffen hat." – Es gibt keinen solchen Punkt; dieses Argument fällt mit dem gegnerischen.`,
    `Behaupten, religiöse Erfahrungen ließen sich nie künstlich auslösen – Psilocybin-Studien zeigen das Gegenteil.`,
    `Den eigenen Glauben vor allem auf Gefühle und Erlebnisse stützen – das spielt dem Reduktionisten in die Hände.`,
  ],
  concessions: [
    `Religiöse Erfahrungen haben neuronale Korrelate und können durch Drogen, Krankheit oder Suggestion beeinflusst oder ausgelöst werden.`,
    `Nicht jede religiöse Erfahrung ist echt; viele sind Selbsttäuschung – das sagt auch die orthodoxe Tradition.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Mario Beauregard, Denyse O\'Leary', work: 'The Spiritual Brain: A Neuroscientist\'s Case for the Existence of the Soul', year: '2007', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andrew Newberg, Mark Robert Waldman', work: 'How God Changes Your Brain', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Meditation in a Toolshed (in: God in the Dock)', year: '1945', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Neurotheologie', 'God Helmet', 'Persinger', 'religiöse Erfahrung', 'Psilocybin'],
  related: [
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'neurowissenschaften/geist-gleich-gehirn',
    'psychiatrie/propheten-psychisch-krank',
    'kognitive-religionswissenschaft/religion-nebenprodukt',
    'buddhismus/meditation-wissenschaftlich',
  ],
};

export default claim;
