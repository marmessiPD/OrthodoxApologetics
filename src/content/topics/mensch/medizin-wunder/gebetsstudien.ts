import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gebetsstudien',
  title: `„Gebetsstudien zeigen keine Wirkung (STEP-Studie)."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006), Kap. 2 („The Great Prayer Experiment")' },
    { name: 'Richard P. Sloan', role: 'Verhaltensmediziner, Columbia University', work: 'Blind Faith: The Unholy Alliance of Religion and Medicine (2006)' },
    { name: 'Victor J. Stenger', role: 'Physiker', work: 'God: The Failed Hypothesis (2007)' },
    { name: 'Michael Shermer', role: 'Herausgeber „Skeptic"', work: 'Kolumnen in Scientific American' },
  ],
  steelman: `Wenn Gebet wirkt, muss sich das in kontrollierten Studien zeigen. Genau das wurde getestet. Die STEP-Studie (Benson u. a., American Heart Journal 2006) war die größte und sauberste: über 1.800 Bypass-Patienten an sechs Kliniken, randomisiert, mit Millionenförderung der Templeton-Stiftung. Ergebnis: Fürbitte hatte keinen Effekt auf Komplikationen – und die Patienten, die sicher wussten, dass für sie gebetet wird, hatten sogar mehr Komplikationen. Auch MANTRA II (Lancet 2005) fand nichts, und der Cochrane-Review (2009) über zehn Studien mit über 7.600 Patienten kommt zu keinem klaren Nutzen. Die positiven Studien (Byrd 1988, Harris 1999) waren methodisch schwach; eine viel zitierte IVF-Gebetsstudie (2001) stand im Zusammenhang mit einem später wegen Betrugs verurteilten Koautor. Wer jetzt sagt „Gott lässt sich nicht testen", macht seinen Glauben unfalsifizierbar.`,
  biblical: {
    summary: `Die Bibel verbietet ausdrücklich, Gott auf die Probe zu stellen: „Ihr sollt den HERRN, euren Gott, nicht versuchen" (Dtn 6,16) – Jesus zitiert das gegen den Teufel, als dieser ihn auffordert, Gottes Schutz experimentell zu erzwingen (Mt 4,7). Gebet ist nach der Schrift keine Technik, die in Dosen verabreicht wird, sondern die Bitte von Kindern an einen Vater, der in Freiheit und Weisheit antwortet: „so wir etwas bitten nach seinem Willen, so hört er uns" (1 Joh 5,14). Jesus selbst betete in Gethsemane: „nicht was ich will, sondern was du willst" (Mk 14,36), und Paulus' dreimalige Bitte um Heilung wurde mit „Laß dir an meiner Gnade genügen" beantwortet (2 Kor 12,8–9).`,
    detail: `- **Mt 6,7–8**: Jesus warnt vor „Plappern wie die Heiden", die meinen, durch viele Worte erhört zu werden – Gebet ist kein Mechanismus.
- **Mt 12,38–39**: Jesus verweigert Schauwunder auf Bestellung: „Die böse und ehebrecherische Art sucht ein Zeichen."
- **Lk 11,9–13**: Gott gibt „Gutes" – nicht notwendig das Erbetene.
- **Wichtig:** Die Bibel ist an anderer Stelle sehr wohl falsifizierbar: „Ist aber Christus nicht auferstanden, so ist eure Predigt vergeblich" (1 Kor 15,14). Der Glaube entzieht sich nicht der Prüfung – er verweigert nur eine bestimmte, unpassende Art der Prüfung.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '6,16', quote: `Ihr sollt den HERRN, euren Gott, nicht versuchen, wie ihr ihn versuchtet zu Massa.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '4,7', quote: `Da sprach Jesus zu ihm: Wiederum steht auch geschrieben: „Du sollst Gott, deinen Herrn, nicht versuchen."`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '5,14', quote: `Und das ist die Freudigkeit, die wir haben zu ihm, daß, so wir etwas bitten nach seinem Willen, so hört er uns.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Korinther', ref: '12,8–9', quote: `Dafür ich dreimal den HERRN gefleht habe, daß er von mir wiche. Und er hat zu mir gesagt: Laß dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,14', quote: `Ist aber Christus nicht auferstanden, so ist unsre Predigt vergeblich, so ist auch euer Glaube vergeblich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `In der koptischen Liturgie betet die Kirche in jeder Eucharistiefeier für die Kranken: Gott möge sie besuchen und heilen. Das ist Ausdruck der Liebe und des Vertrauens, nicht ein Experiment. Die Väter verstehen Gebet zuerst als Gemeinschaft mit Gott, die den Betenden verwandelt; die Bitte ordnet sich dem Willen Gottes unter. Die Kirche erwartet von Gebet keine statistisch berechenbare „Dosis-Wirkung", sondern vertraut darauf, dass Gott jedes Gebet hört und auf seine Weise antwortet – durch Heilung, durch Kraft im Leiden oder durch das ewige Leben.`,
    sources: [
      { kind: 'liturgie', work: 'Koptische Basilius-Liturgie, Fürbitten (Litanei für die Kranken)', quote: `Die Kirche bittet Gott, der Kranken seines Volkes zu gedenken, sie in seinem Erbarmen zu besuchen und zu heilen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien über Matthäus', ref: '19 (zu Mt 6,5–15)', quote: `Gebet ist Gespräch mit Gott; nicht die Länge der Worte, sondern die Wachheit der Seele zählt.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `**Die wichtigsten Studien zur Fern-Fürbitte:** Byrd (Southern Medical Journal 1988, 393 Patienten): positive Effekte auf einen zusammengesetzten Index. Harris u. a. (Archives of Internal Medicine 1999, ca. 1.000 Patienten): geringer Vorteil in einem Verlaufsscore. MANTRA II (Krucoff u. a., Lancet 2005, 748 Patienten): kein Effekt. **STEP** (Benson u. a., American Heart Journal 2006, 1.802 Patienten): Komplikationen bei 52 % (Gebet, unwissend) vs. 51 % (kein Gebet, unwissend) – kein Unterschied; bei 59 % der Patienten, die sicher wussten, dass für sie gebetet wird. Die Autoren hielten auch einen Zufallsbefund für möglich. **Cochrane** (Roberts u. a. 2009, 10 Studien, 7.646 Patienten): keine klaren Effekte, Ergebnisse „uneindeutig".`,
    detail: `**Methodische Grundprobleme**, die auch die Studienautoren benannten:
- Die Kontrollgruppe kann nicht „gebetsfrei" gehalten werden – Familie, Freunde und Gemeinden beten ohnehin für Kranke. Getestet wird bestenfalls eine Zusatzdosis durch Fremde.
- In STEP beteten Fremde aus drei Gemeinschaften mit einem vorgegebenen Satz („für eine erfolgreiche Operation mit schneller, gesunder Genesung und ohne Komplikationen").
- Es gibt keine Theorie der „Dosis" (Anzahl Beter? Dauer? Glaube?).
- Eine kleine Studie zur „Nah-Fürbitte" mit Handauflegung (Brown u. a., Southern Medical Journal 2010, Mosambik) maß dagegen objektive Verbesserungen von Hören und Sehen – allerdings ohne Kontrollgruppe und mit nur 24 Teilnehmern.

**Ehrlicher Stand:** Studien zur Fern-Fürbitte durch Fremde zeigen keinen messbaren Durchschnittseffekt. Über das Gebet im biblischen Sinn sagen sie wenig.`,
    sources: [
      { kind: 'wissenschaft', author: 'Herbert Benson u. a.', work: 'Study of the Therapeutic Effects of Intercessory Prayer (STEP) in cardiac bypass patients: a multicenter randomized trial of uncertainty and certainty of receiving intercessory prayer', ref: 'American Heart Journal 151 (2006), 934–942', year: '2006', quote: `Fürbitte an sich hatte keinen Effekt auf komplikationsfreie Genesung; die Gewissheit, Fürbitte zu erhalten, war mit einer höheren Komplikationsrate verbunden.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Leanne Roberts, Irshad Ahmed, Steve Hall, Andrew Davison', work: 'Intercessory prayer for the alleviation of ill health', ref: 'Cochrane Database of Systematic Reviews 2009, CD000368', year: '2009', quote: `Die Befunde sind uneindeutig; die Evidenz rechtfertigt weder eine Empfehlung für noch gegen Fürbitte als Ergänzung der Standardbehandlung.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Randolph C. Byrd', work: 'Positive therapeutic effects of intercessory prayer in a coronary care unit population', ref: 'Southern Medical Journal 81 (1988), 826–829', year: '1988', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Mitchell W. Krucoff u. a.', work: 'Music, imagery, touch, and prayer as adjuncts to interventional cardiac care: the MANTRA II randomised study', ref: 'Lancet 366 (2005)', year: '2005', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Candy Gunther Brown, Stephen C. Mory, Rebecca Williams, Michael J. McClymond', work: 'Study of the Therapeutic Effects of Proximal Intercessory Prayer (STEPP) on Auditory and Visual Impairments in Rural Mozambique', ref: 'Southern Medical Journal 103 (2010), 864–869', year: '2010', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Stimmt: Die STEP-Studie fand keinen Effekt – und Christen hätten auch keinen erwarten sollen. Getestet wurde, ob Fremde, die einen vorgeschriebenen Satz beten, bei einem Gott, den man unter Laborbedingungen setzt, eine messbare Zusatzwirkung erzielen. Jesus selbst lehnte es ab, „Gott zu versuchen" (Mt 4,7). Gebet ist die Bitte eines Kindes an einen freien, weisen Vater – kein Medikament mit Dosis-Wirkungs-Kurve. Und die Kontrollgruppe wurde ohnehin von ihren Familien im Gebet getragen.`,
  keyPoints: [
    `**Ehrlich zugeben:** Die großen Studien zur Fern-Fürbitte (STEP, MANTRA II, Cochrane) zeigen keinen Durchschnittseffekt.`,
    `**Falsches Modell getestet:** Die Studien behandeln Gebet wie ein Medikament. Die Bibel beschreibt es als persönliche Bitte an einen freien Gott, „nach seinem Willen" (1 Joh 5,14).`,
    `**Nicht „Gott versuchen":** Das Verbot ist uralt (Dtn 6,16) und keine nachträgliche Ausrede; C. S. Lewis erklärte schon 1959, warum ein solcher Test kein echtes Gebet misst.`,
    `**Kontrollgruppe nicht gebetsfrei:** Familien und Gemeinden beten für alle Patienten – getestet wird höchstens eine Zusatzdosis durch Fremde.`,
    `**Konsistenz:** Christen sollten sich auch nicht auf positive Einzelstudien (Byrd, Harris) stützen. Gleiches Maß in beide Richtungen.`,
    `**Der Glaube ist woanders prüfbar:** Paulus macht ihn an der Auferstehung falsifizierbar (1 Kor 15,14).`,
  ],
  argument: {
    name: 'Warum randomisierte Studien das christliche Gebet nicht testen können',
    summary: 'Ein Experiment setzt eine kontrollierbare Intervention voraus; christliches Gebet ist keine.',
    premises: [
      {
        text: 'P1: Eine aussagekräftige randomisierte Studie setzt voraus, dass der Experimentator die Intervention kontrolliert: Dosis, Verblindung und eine von der Intervention freie Kontrollgruppe.',
        support: `Grundprinzip klinischer Studien. Ohne saubere Kontrollgruppe misst man nur Unterschiede zwischen verschiedenen Dosen.`,
      },
      {
        text: 'P2: Christliches Gebet ist die Bitte an einen freien, personalen Gott, der nach seinem Willen antwortet; es lässt sich weder dosieren noch kann man eine Kontrollgruppe davon abschirmen, dass andere für sie beten.',
        support: `1 Joh 5,14; Mk 14,36; Dtn 6,16. Die STEP-Autoren selbst wiesen darauf hin, dass viele Patienten Gebet von Familie und Freunden erhielten.`,
      },
    ],
    conclusion: 'Randomisierte Studien zur Fern-Fürbitte können die christliche Behauptung über Gebet weder bestätigen noch widerlegen. Ihre Nullergebnisse treffen ein magisches, nicht das biblische Gebetsverständnis.',
  },
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Gebets',
      text: `In seinem Essay „The Efficacy of Prayer" (1959) überlegte Lewis, ob man die Wirkung des Gebets experimentell prüfen könne. Seine Antwort: Ein solches Experiment würde gar nicht echtes Gebet messen, denn wer betet, um ein Experiment zu bestätigen, bittet nicht wirklich um das Wohl des Kranken, sondern testet Gott. Gebet ist eine Bitte, und eine Bitte lässt dem Gebetenen die Freiheit, sie zu gewähren oder nicht. Lewis schrieb das fast fünfzig Jahre vor der STEP-Studie.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Efficacy of Prayer', ref: 'in: The World\'s Last Night and Other Essays (1960); zuerst The Atlantic Monthly, Januar 1959', year: '1959', status: 'paraphrase' },
      ],
    },
    {
      person: 'koenig',
      role: 'als Forscher zu Religion und Gesundheit',
      text: `Koenig unterscheidet zwei Forschungsfelder: Den Zusammenhang zwischen der eigenen religiösen Praxis eines Menschen und seiner Gesundheit kann man wissenschaftlich untersuchen – hier zeigen tausende Studien überwiegend positive Zusammenhänge. Die Fernwirkung von Fürbitte auf andere ist dagegen kaum sinnvoll experimentell prüfbar, weil sie ein übernatürliches Handeln voraussetzt, das sich der Kontrolle des Experimentators entzieht.`,
      sources: [
        { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna B. Carson', work: 'Handbook of Religion and Health (2. Aufl.)', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'vanderweele',
      role: 'als Epidemiologe der Kausalanalyse',
      text: `VanderWeeles Arbeitsgruppe untersucht mit großen prospektiven Kohortenstudien, wie religiöse Praxis mit Gesundheit zusammenhängt. Frauen, die mehr als einmal wöchentlich Gottesdienste besuchten, hatten in der Nurses' Health Study ein rund ein Drittel geringeres Sterberisiko und ein deutlich geringeres Suizidrisiko. Diese Befunde beweisen nicht Gott, zeigen aber: Gelebter Glaube ist für die Gesundheit der Gläubigen keineswegs wirkungslos.`,
      sources: [
        { kind: 'wissenschaft', author: 'Shanshan Li, Meir J. Stampfer, David R. Williams, Tyler J. VanderWeele', work: 'Association of Religious Service Attendance With Mortality Among Women', ref: 'JAMA Internal Medicine 176 (2016), 777–785', year: '2016', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Tyler J. VanderWeele, Shanshan Li, Alexander C. Tsai, Ichiro Kawachi', work: 'Association Between Religious Service Attendance and Lower Suicide Rates Among US Women', ref: 'JAMA Psychiatry 73 (2016), 845–851', year: '2016', status: 'paraphrase' },
      ],
    },
    {
      person: 'candy-gunther-brown',
      role: 'als Religionswissenschaftlerin und Studienleiterin',
      text: `Brown kritisiert, dass sich die Gebetsforschung fast nur mit Fern-Fürbitte durch Fremde befasst hat – einer Praxis, die in der christlichen Tradition kaum vorkommt. Sie untersuchte stattdessen die in Pfingstkirchen übliche Nah-Fürbitte mit Handauflegung und maß in Mosambik mit Audiometer und Sehtafeln objektive Verbesserungen. Sie betont selbst, dass es sich um eine kleine Pilotstudie ohne Kontrollgruppe handelt, die weitere Forschung anregen soll.`,
      sources: [
        { kind: 'wissenschaft', author: 'Candy Gunther Brown u. a.', work: 'STEPP-Studie, Southern Medical Journal 103 (2010), 864–869', year: '2010', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Candy Gunther Brown', work: 'Testing Prayer: Science and Healing', year: '2012', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'step-groesste-studie',
      objection: `STEP war die größte und sauberste Gebetsstudie aller Zeiten: 1.802 Patienten, randomisiert, kein Effekt. Gebet wirkt nicht.`,
      objectionBy: 'Richard Dawkins',
      targetsPremise: 2,
      answer: `Ich bestreite das Ergebnis nicht. Aber schau, was getestet wurde: Fremde beteten zwei Wochen lang einen vorgegebenen Satz für Unbekannte – und die Kontrollgruppe wurde trotzdem von ihren Familien im Gebet getragen. Getestet wurde also, ob eine Zusatzdosis Gebet von Fremden einen Durchschnittseffekt hat. Das ist ein magisches Modell von Gebet, nicht das biblische.`,
      followUps: [
        {
          id: 'ausrede-unfalsifizierbar',
          objection: `Das ist eine Ausrede. Damit wird dein Glaube unfalsifizierbar.`,
          objectionBy: 'Victor Stenger',
          targetsPremise: 2,
          answer: `Es ist keine nachträgliche Ausrede: Das Verbot, Gott zu versuchen, steht in Dtn 6,16, Jesus zitierte es, und C. S. Lewis erklärte 1959 – lange vor STEP –, warum ein solches Experiment kein echtes Gebet misst. Und der christliche Glaube ist an seiner Mitte sehr wohl falsifizierbar: „Ist Christus nicht auferstanden, so ist euer Glaube vergeblich" (1 Kor 15,14).`,
          followUps: [
            {
              id: 'positiv-gejubelt',
              objection: `Wenn STEP positiv ausgefallen wäre, hättet ihr gejubelt!`,
              answer: `Manche bestimmt – und das wäre ebenso falsch gewesen. Ich sage dasselbe in beide Richtungen: Ein positives Ergebnis hätte Gott nicht bewiesen, ein negatives widerlegt ihn nicht. Genau deshalb stütze ich mich auch nicht auf die positive Byrd-Studie von 1988. Gleiches Maß für beide Seiten.`,
              questionsBack: [
                `Würdest du einem Freund misstrauen, der sich weigert, auf Kommando vor Zuschauern Gefälligkeiten zu erweisen?`,
              ],
            },
          ],
        },
        {
          id: 'gewissheit-schadet',
          objection: `Und wer sicher wusste, dass für ihn gebetet wird, hatte sogar mehr Komplikationen – 59 Prozent. Gebet schadet!`,
          objectionBy: 'Medienberichte zu STEP',
          answer: `Die Autoren selbst hielten einen Zufallsbefund für möglich; eine Erklärung könnte auch Stress sein („Bin ich so krank, dass man ein Gebetsteam braucht?"). Es gibt keine Theorie, nach der Gebet schadet, und der Befund wurde nicht repliziert. Ein einzelnes Nebenergebnis taugt weder als Beweis gegen noch für Gebet.`,
        },
      ],
    },
    {
      id: 'cochrane-review',
      objection: `Der Cochrane-Review fasst alle Studien zusammen: Fürbitte hat keine klare Wirkung.`,
      objectionBy: 'Richard Sloan',
      answer: `Einverstanden – Cochrane nennt die Lage „uneindeutig" und empfiehlt weder dafür noch dagegen. Das zeigt: Fern-Fürbitte durch Fremde erzeugt keinen messbaren Durchschnittseffekt. Es zeigt nicht, dass es keinen Gott gibt oder dass er nie heilt – sondern dass Gott sich nicht wie ein Wirkstoff verhält.`,
      followUps: [
        {
          id: 'byrd-gefeiert',
          objection: `Aber Christen haben doch selbst die positive Byrd-Studie jahrelang als Beweis gefeiert!`,
          objectionBy: 'Richard Dawkins',
          answer: `Ja, und das war ein Fehler. Byrds Studie hatte methodische Schwächen, und eine weitere viel zitierte Studie zu Gebet bei künstlicher Befruchtung (2001) geriet in Verruf, nachdem ein Koautor wegen Betrugs verurteilt wurde. Wer solche Studien als Beweis feiert, liefert den Skeptikern die Munition. Ich tue das nicht.`,
        },
      ],
    },
    {
      id: 'warum-dann-beten',
      objection: `Wenn Gebet nicht messbar wirkt – warum betest du dann überhaupt?`,
      objectionBy: 'Skeptiker',
      answer: `Weil Gebet zuerst Gemeinschaft mit Gott ist, nicht ein Werkzeug. Ich bete, wie ein Kind mit seinem Vater spricht: dankend, bittend, vertrauend. Gott antwortet – manchmal mit Heilung, manchmal mit Kraft im Leiden, immer mit seiner Gegenwart. Und nebenbei: Für die Betenden selbst zeigen große Studien deutliche Zusammenhänge mit geringerer Depression, Suizidalität und Sterblichkeit.`,
      followUps: [
        {
          id: 'placebo-fuer-betende',
          objection: `Dann ist Gebet eben Psychotherapie – ein Placebo für die Betenden.`,
          objectionBy: 'Richard Sloan',
          answer: `Dass Gebet den Betenden guttut, beweist Gott nicht – aber es widerlegt ihn auch nicht. Und die Forschung muss nicht bei Fern-Fürbitte stehen bleiben: Eine Studie zur Nah-Fürbitte in Mosambik (Brown u. a. 2010) maß objektive Verbesserungen von Hörschwellen und Sehschärfe bei den Menschen, für die gebetet wurde.`,
          followUps: [
            {
              id: 'brown-methodik',
              objection: `Browns Studie hatte 24 Teilnehmer, keine Kontrollgruppe und keine Verblindung. Suggestion kann Hör- und Sehtests beeinflussen.`,
              objectionBy: 'Methodenkritik',
              answer: `Alles richtig – es ist eine Pilotstudie, und die Autoren sagen das selbst. Sie ist ein Hinweis, kein Beweis, und verdient kontrollierte Wiederholung. Meine Argumentation ruht nicht auf ihr. Sie zeigt nur, dass „Gebetsstudien zeigen keine Wirkung" eine Verallgemeinerung aus einer ganz bestimmten, untypischen Gebetsform ist.`,
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie willst du eine Kontrollgruppe bilden, für die garantiert niemand betet?`,
    `Welche „Dosis" Gebet wäre nach deiner Vorstellung wirksam – und woher kennst du sie?`,
    `Wenn Gott eine Person ist: Ist es plausibel, dass er sich wie ein Wirkstoff verhält?`,
    `Würdest du die Liebe deiner Eltern mit einer randomisierten Studie überprüfen?`,
  ],
  avoid: [
    `Die Byrd-Studie (1988) oder die IVF-Gebetsstudie (2001) als Beweis anführen – methodisch schwach bzw. diskreditiert.`,
    `Behaupten, STEP sei „von Atheisten manipuliert" – die Studie wurde von Herbert Benson geleitet, einem Forscher, der Spiritualität und Gesundheit wohlwollend gegenübersteht.`,
    `„Gebet wirkt immer, wenn man genug glaubt" – unbiblisch und seelsorgerlich grausam (vgl. 2 Kor 12,7–9).`,
  ],
  concessions: [
    `Die großen Studien zur Fern-Fürbitte zeigen keinen messbaren Durchschnittseffekt.`,
    `Christen haben schwache positive Studien in der Vergangenheit zu Unrecht als Beweise gefeiert.`,
    `Die positiven Gesundheitszusammenhänge religiöser Praxis beweisen für sich genommen nicht die Existenz Gottes.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Candy Gunther Brown', work: 'Testing Prayer: Science and Healing', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Efficacy of Prayer (in: The World\'s Last Night)', year: '1959', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Harold G. Koenig, Tyler J. VanderWeele, John R. Peteet', work: 'Handbook of Religion and Health (3. Aufl.)', year: '2024', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Gebet', 'STEP', 'Cochrane', 'Fürbitte', 'Studien'],
  related: [
    'medizin-wunder/heilungen-placebo',
    'medizin-wunder/keine-belegten-wunder',
    'theodizee/unerhoerte-gebete',
    'psychologie/religion-schadet-psyche',
    'atheismus/keine-beweise-fuer-gott',
  ],
};

export default claim;
