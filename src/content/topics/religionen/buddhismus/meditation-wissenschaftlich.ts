import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'meditation-wissenschaftlich',
  title: `„Meditation und Achtsamkeit sind wissenschaftlich – Religion nicht."`,
  proponents: [
    { name: 'Jon Kabat-Zinn', role: 'Molekularbiologe, Begründer der Mindfulness-Based Stress Reduction (MBSR, 1979)', work: 'Full Catastrophe Living (1990)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Waking Up: A Guide to Spirituality Without Religion (2014)' },
    { name: 'Richard J. Davidson', role: 'Neurowissenschaftler, University of Wisconsin–Madison', work: 'Altered Traits (2017, mit Daniel Goleman)' },
    { name: 'Matthieu Ricard', role: 'Molekularbiologe und buddhistischer Mönch', work: 'Glück (Plaidoyer pour le bonheur, 2003)' },
  ],
  steelman: `Meditation ist die einzige spirituelle Praxis, die den Test der Wissenschaft bestanden hat. Tausende Studien zeigen: Achtsamkeitstraining senkt Stress, lindert Angst und Schmerzen und halbiert bei manchen Patienten das Rückfallrisiko für Depressionen. Hirnscans zeigen messbare Veränderungen; erfahrene Mönche erzeugen außergewöhnliche Gehirnwellenmuster. Achtsamkeit wird in Kliniken, Schulen und Unternehmen eingesetzt – und sie verlangt keinen Glauben, kein Dogma, keinen Gott. Der Buddhismus war immer schon eine Wissenschaft des Geistes; wo die Wissenschaft ihm widerspricht, will er sich korrigieren (Dalai Lama). Religion dagegen beruht auf unbeweisbaren Behauptungen, und Studien zur Wirkung von Fürbittgebet fanden keinen Effekt. Warum also nicht die Weisheit ohne den Aberglauben übernehmen?`,
  biblical: {
    summary: `Die Bibel kennt Meditation lange vor jeder modernen Achtsamkeitswelle: Der Gerechte sinnt über Gottes Weisung „Tag und Nacht" (Ps 1,2; Jos 1,8), „Seid stille und erkennet, dass ich Gott bin" (Ps 46,11), Jesus ruft ins verborgene Gebet (Mt 6,6) und lehrt, nicht für morgen zu sorgen (Mt 6,34). Paulus fordert, „ohne Unterlass" zu beten (1 Thess 5,17) und das Denken auf das Wahre und Gute zu richten (Phil 4,6–8). Der Unterschied: Biblische Meditation ist Hinwendung zu einem **Du**, nicht eine Technik zur Selbstoptimierung.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '46,11', quote: `Seid stille und erkennet, daß ich Gott bin!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '6,6', quote: `Wenn aber du betest, so gehe in dein Kämmerlein und schließ die Tür zu und bete zu deinem Vater im Verborgenen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '4,6–7', quote: `Sorget nichts! sondern in allen Dingen lasset eure Bitten im Gebet und Flehen mit Danksagung vor Gott kund werden. Und der Friede Gottes, welcher höher ist denn alle Vernunft, bewahre eure Herzen und Sinne in Christo Jesu!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,17', quote: `Betet ohne Unterlaß.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche ist die Heimat der christlichen Kontemplation: In den Wüsten Ägyptens entwickelten Antonius, Makarius und ihre Schüler ab dem 4. Jahrhundert eine Praxis der inneren Stille (*Hesychia*), der Wachsamkeit über die Gedanken und des unablässigen Gebets. Johannes Cassian überlieferte die ägyptische Übung, einen kurzen Psalmvers immer neu zu beten; aus solchen Kurzgebeten erwuchs das Jesusgebet. Die Agpeya, das koptische Stundengebet, heiligt mit Psalmen sieben Gebetszeiten des Tages. Christliche Kontemplation ist kein Import aus dem Osten, sondern ein Kern des eigenen Erbes.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'X,10', year: 'ca. 426', original: 'Deus in adiutorium meum intende; Domine ad adiuvandum me festina.', quote: `O Gott, komm mir zu Hilfe; Herr, eile mir zu helfen (Ps 70,2) – als unablässiges Gebet in jeder Lage.`, status: 'verbatim', translation: 'eigene Übersetzung', note: 'Cassian gibt die Lehre des ägyptischen Abbas Isaak wieder.' },
      { kind: 'kirchenvater', work: 'Apophthegmata Patrum (Sprüche der Wüstenväter)', ref: 'Makarius der Große 19', year: '4./5. Jh.', quote: `Man muss nicht viele Worte machen; es genügt, die Hände auszustrecken und zu sagen: „Herr, wie du willst und wie du weißt, erbarme dich meiner." Und wenn der Kampf heftiger wird: „Herr, hilf!"`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Agpeya (koptisches Stundengebet)', status: 'paraphrase', quote: `Sieben Gebetszeiten mit Psalmen, Evangelium und Gebeten – die Heiligung des Tages durch beständiges Gedenken Gottes.` },
    ],
  },
  opposingView: {
    summary: `Die Forschung zeigt reale, aber **bescheidene** Effekte. Eine große Metaanalyse in *JAMA Internal Medicine* (Goyal u. a. 2014; 47 Studien, rund 3.500 Teilnehmer) fand mäßige Belege für Verbesserungen bei Angst, Depression und Schmerz – aber keinen Vorteil gegenüber aktiven Vergleichsbehandlungen wie Sport oder Verhaltenstherapie. Fünfzehn führende Forscher warnten 2018 unter dem Titel „Mind the Hype" vor Übertreibungen: unklare Definitionen, schwache Methodik, fehlende Kontrollgruppen, kaum untersuchte Nebenwirkungen. Eine Studie mit westlichen Buddhisten dokumentierte belastende Meditationserfahrungen wie Angst, Panik und Entfremdungsgefühle (Lindahl u. a. 2017).`,
    detail: `Zugleich wird auch Religion wissenschaftlich untersucht – mit bemerkenswerten Ergebnissen: Eine Auswertung der Nurses' Health Study (Li, Stampfer, Williams, VanderWeele 2016) fand bei Frauen, die mehr als einmal pro Woche Gottesdienste besuchten, eine um etwa ein Drittel geringere Sterblichkeit im Beobachtungszeitraum. Korrelation ist nicht Kausalität – aber der Gegensatz „Meditation = Wissenschaft, Religion = Glaube" ist so nicht haltbar. Kritische Buddhologen wie Donald Lopez und David McMahan haben gezeigt, wie das Bild eines „wissenschaftlichen Buddhismus" im 19. und 20. Jahrhundert konstruiert wurde.`,
    sources: [
      { kind: 'wissenschaft', author: 'Nicholas T. Van Dam u. a.', work: 'Mind the Hype: A Critical Evaluation and Prescriptive Agenda for Research on Mindfulness and Meditation', ref: 'Perspectives on Psychological Science 13 (1), S. 36–61', year: '2018 (online 2017)', status: 'paraphrase', quote: `Warnung vor Fehlinformation und Übertreibung; Forderung nach besseren Definitionen, Methoden und Erforschung von Nebenwirkungen.`, url: 'https://doi.org/10.1177/1745691617709589' },
      { kind: 'wissenschaft', author: 'Madhav Goyal u. a.', work: 'Meditation Programs for Psychological Stress and Well-being: A Systematic Review and Meta-analysis', ref: 'JAMA Internal Medicine 174 (3), S. 357–368', year: '2014', status: 'paraphrase', quote: `Mäßige Evidenz für Verbesserung von Angst, Depression und Schmerz; keine Überlegenheit gegenüber aktiven Behandlungen.` },
      { kind: 'wissenschaft', author: 'Jared R. Lindahl / Willoughby B. Britton u. a.', work: 'The varieties of contemplative experience: A mixed-methods study of meditation-related challenges in Western Buddhists', ref: 'PLOS ONE 12 (5), e0176239', year: '2017', status: 'paraphrase', quote: `Dokumentation belastender Meditationserfahrungen (u. a. Angst, Panik, Depersonalisation, Wiedererleben von Traumata).` },
      { kind: 'wissenschaft', author: 'Shanshan Li / Meir J. Stampfer / David R. Williams / Tyler J. VanderWeele', work: 'Association of Religious Service Attendance With Mortality Among Women', ref: 'JAMA Internal Medicine 176 (6), S. 777–785', year: '2016', status: 'paraphrase', quote: `Gottesdienstbesuch mehr als einmal pro Woche war mit rund 33 % geringerer Gesamtsterblichkeit verbunden.` },
      { kind: 'fachliteratur', author: 'Donald S. Lopez Jr.', work: 'The Scientific Buddha: His Short and Happy Life', year: '2012', status: 'paraphrase', quote: `Der „wissenschaftliche Buddha" als moderne Konstruktion.`, note: 'Lopez ist ein führender, nicht-christlicher Buddhologe (University of Michigan).' },
    ],
  },
  quickAnswer: `Ich bestreite nicht, dass Meditation messbare, wenn auch bescheidene Wirkungen hat – führende Forscher warnen allerdings selbst vor dem Hype. Aber dass eine Technik Stress senkt, beweist keine Weltanschauung: Joggen hilft auch gegen Depression, ohne eine Philosophie zu beweisen. Außerdem wird auch Religion wissenschaftlich erforscht – mit erstaunlichen Ergebnissen für die Gesundheit. Und christliche Meditation ist kein Import: Die koptischen Wüstenväter haben sie vor 1700 Jahren entwickelt – als Begegnung mit einem lebendigen Gott, nicht als Technik.`,
  keyPoints: [
    `**Wirkung ist nicht Wahrheit:** Dass Meditation Stress senkt, bestätigt weder Wiedergeburt noch Anatta – so wenig wie die Wirkung von Sport eine Philosophie beweist.`,
    `**Die Forschung ist bescheidener als der Hype:** Goyal u. a. 2014: mäßige Effekte, nicht besser als Sport oder Therapie; Van Dam u. a. 2018: „Mind the Hype".`,
    `**Es gibt Nebenwirkungen:** Angst, Panik, Entfremdung (Lindahl u. a. 2017) – die Väter wussten, warum man Kontemplation nur unter Anleitung übt.`,
    `**Auch Religion wird gemessen:** Regelmäßiger Gottesdienstbesuch geht mit deutlich geringerer Sterblichkeit einher (VanderWeele u. a. 2016).`,
    `**Säkulare Achtsamkeit ist nicht Buddhismus:** Wer den Glauben weglässt, kann sich nicht auf die Wissenschaft als Bestätigung des Buddhismus berufen (Lopez, McMahan).`,
    `**Christliche Kontemplation ist koptisches Erbe:** Wüstenväter, Jesusgebet, Agpeya – Gebet als Beziehung, beurteilt an Früchten der Demut und Liebe.`,
  ],
  voices: [
    {
      person: 'matta-el-meskeen',
      role: 'als koptischer Lehrer des inneren Gebets',
      text: `Matta el-Meskeen hat die Gebetstradition der Väter für die heutige koptische Kirche neu erschlossen. Für ihn ist Gebet nicht Entspannung oder Konzentration, sondern das Leben der Seele mit Gott: Hören, Antworten, Umkehr, Liebe. Die innere Stille ist nicht Leere, sondern Raum für die Gegenwart Christi. Darum misst die Tradition Gebet nicht an angenehmen Zuständen, sondern an seinen Früchten: Demut, Sanftmut, Liebe zum Nächsten.`,
      sources: [
        { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: 'engl. 2003', status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Überlieferer der ägyptischen Gebetspraxis',
      text: `Cassian berichtet, wie ihm Abbas Isaak in der sketischen Wüste die Übung des unablässigen Gebets lehrte: einen einzigen Psalmvers – „O Gott, komm mir zu Hilfe; Herr, eile mir zu helfen" – in jeder Lage zu wiederholen, beim Arbeiten, beim Essen, beim Einschlafen. Diese Praxis ist der Achtsamkeit äußerlich ähnlich, innerlich aber ganz anders: Sie ist Ruf eines Bedürftigen an einen Helfer, nicht Beobachtung des eigenen Geistes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes', ref: 'X,10', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater des christlichen Mönchtums',
      text: `Antonius zog sich um 285 in die ägyptische Wüste zurück und lebte Jahrzehnte in Gebet, Stille und Handarbeit. Die Sprüche der Wüstenväter berichten, wie er lernte, Arbeit und Gebet abzuwechseln, um nicht der Mutlosigkeit zu verfallen. Lange bevor jemand von „Achtsamkeit" sprach, entwickelten die koptischen Mönche eine feine Psychologie der Gedanken – stets im Dienst der Liebe zu Gott und zum Nächsten.`,
      sources: [
        { kind: 'kirchenvater', work: 'Apophthegmata Patrum', ref: 'Antonius 1', status: 'paraphrase', quote: `Antonius, von Mutlosigkeit bedrängt, sieht einen Engel, der abwechselnd arbeitet und betet, und hört: „Tu so, und du wirst gerettet werden."` },
      ],
    },
    {
      person: 'vanderweele',
      role: 'als Epidemiologe an der Harvard T. H. Chan School of Public Health',
      text: `Tyler VanderWeele und sein Team haben in großen Langzeitstudien gezeigt, dass regelmäßige Teilnahme an Gottesdiensten mit geringerer Sterblichkeit, weniger Depression und weniger Suiziden einhergeht – bei sorgfältiger Kontrolle vieler Störfaktoren. Er betont selbst die Grenzen solcher Beobachtungsstudien. Sein Befund widerlegt aber die Behauptung, nur Meditation, nicht Religion sei wissenschaftlich untersuchbar und wirksam.`,
      sources: [
        { kind: 'wissenschaft', author: 'Shanshan Li u. a. (mit T. J. VanderWeele)', work: 'JAMA Internal Medicine 176 (6)', year: '2016', status: 'paraphrase' },
      ],
    },
    {
      person: 'koenig',
      role: 'als Psychiater und Forscher zu Religion und Gesundheit',
      text: `Harold Koenig hat mit Kollegen tausende Studien zum Zusammenhang von Religiosität und körperlicher wie seelischer Gesundheit gesammelt und ausgewertet. Das Gesamtbild: Gelebter Glaube ist überwiegend mit besserer seelischer Gesundheit, mehr Sinnerleben und Hoffnung verbunden. Koenig warnt aber davor, Glauben auf seinen Gesundheitsnutzen zu reduzieren – Gott ist kein Wellness-Produkt.`,
      sources: [
        { kind: 'wissenschaft', author: 'Harold G. Koenig / Dana E. King / Verna Benner Carson', work: 'Handbook of Religion and Health', year: '2. Aufl. 2012', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'tausende-studien',
      objection: `Tausende Studien belegen: Achtsamkeit reduziert Stress, Angst und Depression. Meditation ist Wissenschaft, Religion ist Glaube.`,
      objectionBy: 'Jon Kabat-Zinn / Sam Harris',
      answer: `Die Wirkungen sind real, aber bescheiden – eine große Metaanalyse (Goyal u. a. 2014) fand mäßige Effekte, nicht besser als Sport oder Therapie, und fünfzehn führende Forscher warnten 2018 ausdrücklich vor dem Hype. Vor allem aber: Dass eine Technik Stress senkt, beweist keine Weltanschauung. Joggen hilft auch gegen Depression, ohne eine Philosophie zu beweisen.`,
      followUps: [
        {
          id: 'hirnveraenderungen',
          objection: `Aber die Veränderungen im Gehirn von Meditierenden sind messbar – Neuroplastizität!`,
          objectionBy: 'Richard J. Davidson',
          answer: `Das Gehirn verändert sich bei jeder trainierten Fähigkeit – Londoner Taxifahrer haben einen vergrößerten Hippocampus (Maguire u. a. 2000). Davidson und Goleman räumen in *Altered Traits* selbst ein, dass viele Meditationsstudien methodisch schwach sind. Und eine Hirnveränderung beweist nicht, dass die Deutung der Erfahrung wahr ist.`,
          followUps: [
            {
              id: 'gammawellen-moenche',
              objection: `Mönche mit zehntausenden Stunden Praxis erzeugen außergewöhnliche Gammawellen. Das ist Erleuchtung, wissenschaftlich gemessen.`,
              objectionBy: 'Matthieu Ricard',
              answer: `Die Daten sind faszinierend (Lutz u. a. 2004). Sie zeigen, dass man Aufmerksamkeit und mitfühlende Zustände trainieren kann. Gemessen wird aber Hirnaktivität, nicht die „Einsicht in das Nicht-Selbst" oder das Nirvana. Auch betende Ordensfrauen zeigen in Studien auffällige Muster – die Messung kann also nicht zwischen Weltanschauungen entscheiden.`,
              sources: [
                { kind: 'wissenschaft', author: 'Antoine Lutz / Lawrence Greischar / Nancy Rawlings / Matthieu Ricard / Richard Davidson', work: 'Long-term meditators self-induce high-amplitude gamma synchrony during mental practice', ref: 'PNAS 101 (46)', year: '2004', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kein-glaube-noetig',
      objection: `Meditation braucht keinen Glauben – das ist ihr großer Vorteil gegenüber Religion.`,
      objectionBy: 'Sam Harris',
      answer: `Dann kann sie aber auch keine buddhistischen Glaubenslehren bestätigen – Harris selbst lehnt Wiedergeburt ab. „Der Buddhismus ist wissenschaftlich" ist deshalb ein Etikettenschwindel: Säkulare Achtsamkeit ist nicht der Buddhismus mit Karma, Wiedergeburt, Göttern und Klosterregeln. Buddhologen wie Donald Lopez haben gezeigt, wie das Bild eines „wissenschaftlichen Buddhismus" erst in der Moderne entstand.`,
      followUps: [
        {
          id: 'nur-technik',
          objection: `Dann nehmen wir eben nur die Technik. Davor müsst ihr Christen doch keine Angst haben.`,
          objectionBy: 'Jon Kabat-Zinn (sinngemäß)',
          answer: `Christen können Aufmerksamkeits- und Atemübungen mit Unterscheidungsvermögen nutzen – Ruhe ist nichts Schlechtes. Aber das Ziel macht den Unterschied: den Geist leeren oder ihn mit Gottes Gegenwart füllen. Und es gibt Risiken: Belastende Erfahrungen wie Angst und Entfremdung sind dokumentiert (Lindahl u. a. 2017). Die Wüstenväter übten Kontemplation aus gutem Grund nur unter Anleitung eines geistlichen Vaters.`,
        },
        {
          id: 'achtsamkeit-neutral',
          objection: `Achtsamkeit ist einfach Aufmerksamkeit – völlig neutral, wie Zähneputzen.`,
          objectionBy: 'Jon Kabat-Zinn (sinngemäß)',
          answer: `Gerade weil sie als „neutral" vermarktet wird, kann sie für alles eingesetzt werden – zur Leistungssteigerung im Konzern ebenso wie zur Konzentrationsschulung beim Militär. Der Religionswissenschaftler Ronald Purser hat das als „McMindfulness" kritisiert. Eine Technik ohne Ethik und Ziel ist nicht neutral, sondern richtungslos. Christliches Gebet hat ein Ziel: Gott und den Nächsten zu lieben.`,
          sources: [
            { kind: 'fachliteratur', author: 'Ronald E. Purser', work: 'McMindfulness: How Mindfulness Became the New Capitalist Spirituality', year: '2019', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'gebet-wirkungslos-step',
      objection: `Gebet ist nachweislich wirkungslos – die große STEP-Studie zum Fürbittgebet hat das gezeigt. Meditation dagegen wirkt.`,
      objectionBy: 'Sam Harris',
      answer: `Die STEP-Studie testete, ob Fremde durch Gebet für Herzpatienten deren Genesung beeinflussen – als wäre Gott ein Automat, den man im Doppelblindversuch bedienen kann (siehe den Claim zu Gebetsstudien). Studien zur eigenen religiösen Praxis zeigen dagegen starke Zusammenhänge: Ein Team um Tyler VanderWeele fand bei Frauen mit wöchentlichem Gottesdienstbesuch eine um etwa ein Drittel geringere Sterblichkeit.`,
      followUps: [
        {
          id: 'korrelation-kausalitaet',
          objection: `Korrelation ist nicht Kausalität. Gesündere Menschen gehen eben eher in die Kirche.`,
          objectionBy: 'Sam Harris',
          answer: `Richtig – die Forscher haben frühere Gesundheit und viele andere Faktoren berücksichtigt, aber Vorsicht bleibt geboten. Genau dieselbe Vorsicht gilt allerdings für Meditationsstudien! Mein Punkt ist: Der Gegensatz „Meditation ist Wissenschaft, Religion ist Glaube" stimmt nicht. Beides kann erforscht werden – und keines beweist durch Gesundheitseffekte seine Metaphysik.`,
        },
      ],
    },
    {
      id: 'kontemplation-abgekupfert',
      objection: `Die christliche Kontemplation ist doch vom Osten abgekupfert. Das Jesusgebet ist nichts anderes als ein Mantra.`,
      objectionBy: 'Deepak Chopra (sinngemäß)',
      answer: `Dafür gibt es keinen Beleg. Die Wurzeln liegen in den Psalmen (Ps 46,11), in Jesu Lehre (Mt 6,6), bei Paulus (1 Thess 5,17) und bei den koptischen Wüstenvätern des 4. Jahrhunderts. Das Jesusgebet – „Herr Jesus Christus, Sohn Gottes, erbarme dich meiner" – stammt aus den Rufen der Evangelien (Lk 18,13.38). Ein Mantra wirkt durch Klang und Wiederholung; das Jesusgebet ist Anrufung einer Person.`,
      followUps: [
        {
          id: 'wirkung-gleich-unterschied',
          objection: `Wenn die Wirkung dieselbe ist – Ruhe, Konzentration, Frieden –, worin liegt dann der Unterschied?`,
          objectionBy: 'Deepak Chopra (sinngemäß)',
          answer: `Der Unterschied ist wie der zwischen einem Gespräch mit deinem Vater und dem Wiederholen eines beruhigenden Klangs. Das Ziel des Gebets ist nicht vor allem innere Ruhe, sondern Gemeinschaft mit Gott, Umkehr und Liebe zum Nächsten. Die Wüstenväter beurteilten Gebet nicht nach angenehmen Zuständen, sondern nach seinen Früchten: „An ihren Früchten sollt ihr sie erkennen" (Mt 7,16).`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Meditation Stress senkt – beweist das die Wiedergeburt oder das Nicht-Selbst?`,
    `Hast du die Warnungen der Forscher selbst gelesen, etwa „Mind the Hype" (2018)?`,
    `Warum gilt eine Meditationsstudie als „Wissenschaft", eine Studie über Gottesdienstbesuch und Gesundheit aber nicht?`,
    `Kennst du die koptischen Wüstenväter, die schon im 4. Jahrhundert eine Praxis der inneren Stille entwickelten?`,
  ],
  avoid: [
    `Erkläre Meditation nicht pauschal für dämonisch oder gefährlich – das ist übertrieben und wissenschaftlich nicht haltbar.`,
    `Bestreite nicht, dass Achtsamkeitsprogramme manchen Menschen helfen – die Daten zeigen bescheidene, aber reale Effekte.`,
    `Behaupte nicht, Gebetsstudien „beweisen" Gott – das Gegenteil wäre ebenso falsch. Gott ist kein Laborobjekt.`,
  ],
  concessions: [
    `Achtsamkeitsprogramme haben nachweisbare, wenn auch bescheidene positive Effekte bei Angst, Depression und Schmerz.`,
    `Die STEP-Studie fand keinen Effekt von Fürbittgebet durch Fremde – das sollte man ehrlich zugeben.`,
    `Viele Christen haben das eigene kontemplative Erbe vergessen; Buddhisten haben es oft ernster genommen.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Nicholas T. Van Dam u. a.', work: 'Mind the Hype (Perspectives on Psychological Science 13/1)', year: '2018', status: 'paraphrase', url: 'https://doi.org/10.1177/1745691617709589' },
    { kind: 'koptisch', author: 'Matta el-Meskeen', work: 'Orthodox Prayer Life: The Interior Way', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'David L. McMahan', work: 'The Making of Buddhist Modernism', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Evan Thompson', work: 'Why I Am Not a Buddhist', year: '2020', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Meditation', 'Achtsamkeit', 'MBSR', 'Wüstenväter', 'Jesusgebet', 'Religion und Gesundheit'],
  related: [
    'neurowissenschaften/gotteserfahrung-hirnaktivitaet',
    'medizin-wunder/gebetsstudien',
    'psychologie/religion-schadet-psyche',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'buddhismus/buddhismus-philosophie-friedlich',
  ],
};

export default claim;
