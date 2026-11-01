import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'religion-schadet-psyche',
  title: `„Religion schadet der psychischen Gesundheit – sie ist ein Wahn (Dawkins)."`,
  proponents: [
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006; dt. Der Gotteswahn, 2007)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse (1856–1939)', work: '„Zwangshandlungen und Religionsübungen" (1907); Die Zukunft einer Illusion (1927)' },
    { name: 'Albert Ellis', role: 'Psychotherapeut, Begründer der Rational-Emotiven Verhaltenstherapie (1913–2007)', work: 'The Case Against Religion: A Psychotherapist\'s View (1971/1980)' },
    { name: 'Marlene Winell', role: 'Psychologin, prägte den Begriff „Religious Trauma Syndrome"', work: 'Leaving the Fold (1993)' },
    { name: 'Robert Sapolsky', role: 'Neuroendokrinologe, Stanford University', work: 'Vorlesung „Biology of Religiosity" (Human Behavioral Biology, Stanford, 2010)' },
  ],
  steelman: `Ein Wahn ist eine hartnäckige falsche Überzeugung trotz erdrückender Gegenbeweise – und das beschreibt religiösen Glauben perfekt, sagt Dawkins. Robert Pirsig brachte es auf den Punkt: Leidet einer an einem Wahn, nennt man es Wahnsinn; leiden viele daran, nennt man es Religion. Freud sah in der Religion eine kollektive Zwangsneurose, Albert Ellis hielt religiöses Denken für eine Quelle irrationaler Schuld und Angst. Die Praxis bestätigt es: Menschen, die glauben, Gott strafe sie mit ihrer Krankheit, sterben früher. Skrupulosität ist eine religiös gefärbte Zwangsstörung. Ex-Fundamentalisten berichten von Panikattacken, Höllenangst und Albträumen – Marlene Winell spricht von einem „Religious Trauma Syndrome". Psychotische Patienten haben häufig religiöse Wahninhalte. Und die angeblich positiven Gesundheitsstudien? Korrelationen: Gesündere gehen eher in die Kirche, und es ist die Gemeinschaft, die hilft – nicht Gott. Einen Fußballverein kann man auch ohne Hölle haben.`,
  biblical: {
    summary: `Die Bibel verspricht kein Leben ohne seelisches Leid. Elija wünscht sich den Tod (1 Kön 19,4), Psalm 88 endet in Finsternis, Jeremia verflucht den Tag seiner Geburt (Jer 20,14), und Jesus selbst sagt in Gethsemane: „Meine Seele ist betrübt bis an den Tod" (Mt 26,38). Depression ist also kein Zeichen von Unglauben. Zugleich verheißt die Schrift Frieden (Joh 14,27; Phil 4,6–7), Gemeinschaft (Hebr 10,24–25) und eine Liebe, die die Furcht austreibt (1 Joh 4,18). Der Maßstab des Glaubens ist aber nicht Therapie, sondern Wahrheit: Wäre Christus nicht auferstanden, wären Christen „die elendesten unter allen Menschen" (1 Kor 15,19).`,
    detail: `- **Gottesbild entscheidet:** Die Bibel kennt die Angst vor Gott als Strafrichter, überwindet sie aber durch die Liebe: „Furcht ist nicht in der Liebe" (1 Joh 4,18). Ein angstbesetztes Gottesbild ist nach der Schrift ein unreifes, nicht das Ziel.
- **Gemeinschaft ist Teil des Glaubens:** „Lasset uns nicht verlassen unsere Versammlung" (Hebr 10,25). Wer den sozialen Nutzen der Gemeinde vom Glauben trennt, trennt, was zusammengehört.
- **Medizin ist erlaubt und geboten:** „Ehre den Arzt … denn der HERR hat ihn geschaffen" (Sir 38,1) – Glaube und Behandlung schließen sich nicht aus.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '26,38', quote: `Meine Seele ist betrübt bis an den Tod; bleibet hier und wachet mit mir!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,18', quote: `Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus; denn die Furcht hat Pein. Wer sich aber fürchtet, der ist nicht völlig in der Liebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '19,4', status: 'paraphrase', quote: `Elija setzte sich unter einen Wacholder und bat, dass seine Seele stürbe: „Es ist genug, so nimm nun, HERR, meine Seele."` },
      { kind: 'bibel', work: 'Philipper', ref: '4,6–7', status: 'paraphrase', quote: `Sorgt euch um nichts, sondern bringt eure Bitten vor Gott; und der Friede Gottes, der höher ist als alle Vernunft, wird eure Herzen und Sinne bewahren.` },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1', status: 'paraphrase', quote: `Ehre den Arzt mit gebührender Verehrung, dass du ihn hast, wenn du ihn brauchst; denn der HERR hat ihn geschaffen.`, note: 'Deuterokanonisch; in der koptischen Kirche Teil der Heiligen Schrift.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Tradition versteht die Kirche als Ort der Heilung des ganzen Menschen: Liturgie, Agpeya-Gebet, Fasten, Beichte und Gemeinschaft sollen die Seele heilen, nicht beschweren. Die Wüstenväter haben seelische Zustände wie Traurigkeit (*lype*) und Überdruss (*akedia*) genau beschrieben und unterschieden zwischen einer heilsamen Traurigkeit, die zur Umkehr führt, und einer zerstörerischen, die in Verzweiflung treibt (vgl. 2 Kor 7,10). Heute ermutigt verantwortliche koptische Seelsorge Betroffene, ärztliche und psychotherapeutische Hilfe in Anspruch zu nehmen – im Geist von Sir 38.`,
    detail: `- **Johannes Cassian** (Institutiones IX und X), Vermittler der ägyptischen Wüstentradition, behandelt Traurigkeit und Akedia ausführlich und warnt besonders vor der Traurigkeit, die zur Verzweiflung führt.
- **Papst Schenuda III.** betont in „Das Leben der Buße und Reinheit", dass echte Buße mit Hoffnung und Freude verbunden ist, nicht mit Selbstzerfleischung.
- Die Kirche kennt die **Krankensalbung** (Jak 5,14–15) als Sakrament für Leib und Seele – Krankheit wird nicht als Strafe stigmatisiert, sondern mit Gebet und Fürsorge begleitet.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Von den Einrichtungen der Klöster (Institutiones)', ref: 'IX (Traurigkeit) und X (Akedia)', status: 'paraphrase', quote: `Es gibt eine Traurigkeit, die zur heilsamen Umkehr führt, und eine andere, die die Seele in Verzweiflung stürzt und abzutöten ist.` },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit (The Life of Repentance and Purity)', status: 'paraphrase' },
      { kind: 'bibel', work: '2. Korinther', ref: '7,10', quote: `Denn die göttliche Traurigkeit wirkt zur Seligkeit eine Reue, die niemand gereut; die Traurigkeit aber der Welt wirkt den Tod.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Die empirische Forschung spricht überwiegend **gegen** die These, Religion schade der psychischen Gesundheit. Systematische Übersichten finden mehrheitlich positive oder neutrale Zusammenhänge zwischen Religiosität (besonders Gottesdienstbesuch) und weniger Depression, Suizid, Sucht und höherem Wohlbefinden; die Effekte sind meist klein bis mittel. Große prospektive Kohortenstudien der Harvard-Gruppe um Tyler VanderWeele stützen eine kausale Deutung, auch wenn Beobachtungsstudien nie letzte Gewissheit geben. Zugleich ist gut belegt, dass **negative religiöse Bewältigung** (sich von Gott bestraft oder verlassen fühlen) mit schlechteren Ergebnissen einhergeht. „Wahn" im psychiatrischen Sinn schließt kulturell geteilte religiöse Überzeugungen ausdrücklich aus.`,
    detail: `**Überblicke:**
- Koenig (2012) fasst Tausende Studien zusammen: Bei Depression fand die Mehrheit der Studien weniger Depression bei religiöseren Menschen, nur eine kleine Minderheit mehr.
- Smith, McCullough & Poll (2003), Metaanalyse von 147 Studien: kleiner, aber robuster Zusammenhang zwischen Religiosität und weniger depressiven Symptomen (r ≈ –0,10), stärker bei Menschen unter Belastung.
- Bonelli & Koenig (2013): systematische Übersicht zu psychischen Störungen; die Mehrheit der Studien fand einen inversen Zusammenhang.

**Prospektive Kohortenstudien:**
- Li, Stampfer, Williams & VanderWeele (JAMA Internal Medicine 2016): 74.534 Frauen (Nurses' Health Study); mehr als wöchentlicher Gottesdienstbesuch ging mit rund 33 % geringerer Gesamtsterblichkeit einher.
- VanderWeele, Li, Tsai & Kawachi (JAMA Psychiatry 2016): 89.708 Frauen; mindestens wöchentlicher Besuch war mit einem etwa fünffach niedrigeren Suizidrisiko verbunden.
- Chen & VanderWeele (American Journal of Epidemiology 2018): religiöse Erziehung und Praxis in der Jugend gingen mit höherer Lebenszufriedenheit, weniger depressiven Symptomen, weniger Drogenkonsum und weniger riskantem Sexualverhalten im jungen Erwachsenenalter einher.
- Global Flourishing Study (2025): über 200.000 Teilnehmende in 22 Ländern; Gottesdienstbesuch war mit höherem „Flourishing" verbunden.

**Negative Seite:**
- Pargament u. a. (2001): Religiöser Kampf („Ich frage mich, ob Gott mich verlassen hat") sagte bei schwer kranken älteren Patienten eine erhöhte Sterblichkeit voraus.
- Ano & Vasconcelles (2005), Metaanalyse: positive religiöse Bewältigung ↔ bessere, negative ↔ schlechtere Anpassung.
- King u. a. (2013): Menschen, die sich als „spirituell, aber nicht religiös" bezeichneten, hatten in einer englischen Bevölkerungsstudie *häufiger* psychische Störungen als religiöse und als nicht-religiöse Menschen.

**Psychiatrische Definition von Wahn (DSM-5-Glossar, sinngemäß):** eine falsche, auf unzutreffender Schlussfolgerung über die äußere Realität beruhende Überzeugung, die trotz gegenteiliger Evidenz festgehalten wird und die von anderen Mitgliedern der eigenen Kultur oder Subkultur gewöhnlich *nicht* geteilt wird – ausdrücklich also kein Glaubensartikel einer Religion.`,
    sources: [
      { kind: 'wissenschaft', author: 'Harold G. Koenig', work: 'Religion, spirituality, and health: The research and clinical implications', ref: 'ISRN Psychiatry 2012, Art. 278730', year: '2012', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'T. B. Smith, M. E. McCullough, J. Poll', work: 'Religiousness and depression: Evidence for a main effect and the moderating influence of stressful life events', ref: 'Psychological Bulletin 129 (2003), 614–636', year: '2003', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'S. Li, M. J. Stampfer, D. R. Williams, T. J. VanderWeele', work: 'Association of religious service attendance with mortality among women', ref: 'JAMA Internal Medicine 176 (2016), 777–785', year: '2016', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'T. J. VanderWeele, S. Li, A. C. Tsai, I. Kawachi', work: 'Association between religious service attendance and lower suicide rates among US women', ref: 'JAMA Psychiatry 73 (2016), 845–851', year: '2016', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Y. Chen, T. J. VanderWeele', work: 'Associations of religious upbringing with subsequent health and well-being from adolescence to young adulthood: An outcome-wide analysis', ref: 'American Journal of Epidemiology 187 (2018), 2355–2364', year: '2018', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'R. M. Bonelli, H. G. Koenig', work: 'Mental disorders, religion and spirituality 1990 to 2010: A systematic evidence-based review', ref: 'Journal of Religion and Health 52 (2013), 657–673', year: '2013', status: 'paraphrase', note: 'Raphael Bonelli ist Psychiater in Wien.' },
      { kind: 'wissenschaft', author: 'K. I. Pargament, H. G. Koenig, N. Tarakeshwar, J. Hahn', work: 'Religious struggle as a predictor of mortality among medically ill elderly patients', ref: 'Archives of Internal Medicine 161 (2001), 1881–1885', year: '2001', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'G. G. Ano, E. B. Vasconcelles', work: 'Religious coping and psychological adjustment to stress: A meta-analysis', ref: 'Journal of Clinical Psychology 61 (2005), 461–480', year: '2005', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'M. King, L. Marston, S. McManus u. a.', work: 'Religion, spirituality and mental health: results from a national study of English households', ref: 'British Journal of Psychiatry 202 (2013), 68–73', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'American Psychiatric Association', work: 'Diagnostic and Statistical Manual of Mental Disorders, 5. Aufl. (DSM-5), Glossar: „Delusion"', year: '2013', status: 'paraphrase', note: 'Sinngemäß wiedergegeben; der Ausschluss kulturell geteilter religiöser Überzeugungen ist Teil der Definition. Wortlaut vor Zitierung prüfen.' },
    ],
  },
  quickAnswer: `Die Datenlage spricht überwiegend gegen Dawkins: In großen Langzeitstudien der Harvard-Universität war regelmäßiger Gottesdienstbesuch mit rund einem Drittel geringerer Sterblichkeit und – bei Frauen – mit einem etwa fünffach niedrigeren Suizidrisiko verbunden; Hunderte Studien zeigen eher weniger Depression und Sucht. Ehrlich ist auch: Eine angstbesetzte Religiosität („Gott straft mich") geht mit schlechterer Gesundheit einher. Und „Wahn" ist nach psychiatrischer Definition gerade **keine** Überzeugung, die eine ganze Kultur teilt – Dawkins benutzt ein Wörterbuch, kein Diagnosehandbuch.`,
  keyPoints: [
    `**Die Mehrheit der Studien zeigt das Gegenteil:** Religiosität, vor allem regelmäßiger Gottesdienstbesuch, geht im Durchschnitt mit weniger Depression, Suizid und Sucht und mit mehr Wohlbefinden einher (Koenig 2012; Smith u. a. 2003).`,
    `**Harvard-Kohorten:** Rund 33 % geringere Sterblichkeit (Li u. a. 2016) und etwa fünffach niedrigeres Suizidrisiko (VanderWeele u. a. 2016) bei wöchentlichem Gottesdienstbesuch – unter Kontrolle zahlreicher Störfaktoren.`,
    `**„Wahn" ist ein Fachbegriff:** Das DSM-5 schließt kulturell geteilte religiöse Überzeugungen aus der Wahndefinition aus. Gläubige Andersdenkende zu pathologisieren ist Rhetorik, keine Diagnose.`,
    `**Ehrliches Zugeständnis:** Negative religiöse Bewältigung (Gott als strafend oder verlassend erleben) ist mit schlechteren Ergebnissen verbunden – das Gottesbild entscheidet.`,
    `**Gesundheit beweist nicht Wahrheit:** Die Daten widerlegen „Religion macht krank"; sie beweisen nicht, dass Gott existiert. Beides sauber trennen.`,
    `**Glaube ersetzt keine Behandlung:** Depressive Christen sind keine schlechten Christen. Die Kirche ermutigt zu ärztlicher Hilfe (Sir 38).`,
  ],
  voices: [
    {
      person: 'koenig',
      role: 'als Psychiater und führender Forscher zu Religion und Gesundheit',
      text: `Harold Koenig hat mit seinem „Handbook of Religion and Health" die umfangreichste Sammlung empirischer Studien zu diesem Thema vorgelegt. Sein Befund: In der großen Mehrheit der Untersuchungen ist Religiosität mit besserer psychischer Gesundheit verbunden – weniger Depression, schnellere Erholung, weniger Suizid, weniger Substanzmissbrauch, mehr Hoffnung und Sinn. Koenig betont aber auch die Grenzen: Die meisten Studien sind Querschnittsstudien, die Effekte moderat, und es gibt Formen ungesunder Religiosität. Für Kliniker leitet er daraus ab, die Spiritualität von Patienten respektvoll zu erheben und als mögliche Ressource einzubeziehen, ohne sie zu missbrauchen.`,
      sources: [
        { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna Benner Carson', work: 'Handbook of Religion and Health', year: '2. Aufl. 2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'vanderweele',
      role: 'als Epidemiologe und Methodiker der Kausalanalyse (Harvard)',
      text: `Tyler VanderWeele ist einer der führenden Methodiker der kausalen Inferenz. Seine Arbeitsgruppe nutzte große Kohorten, in denen dieselben Menschen über viele Jahre beobachtet wurden, kontrollierte den Gesundheitszustand zu Beginn und prüfte mit Sensitivitätsanalysen, wie stark ein unbekannter Störfaktor sein müsste, um die Ergebnisse zu erklären. Sein Fazit: Der Zusammenhang zwischen regelmäßigem Gottesdienstbesuch und geringerer Sterblichkeit, weniger Depression und weniger Suizid ist robust und wahrscheinlich zum Teil kausal. Er betont, dass soziale Unterstützung nur einen Teil des Effekts erklärt; auch Sinn, Hoffnung, Vergebung und eine moralische Orientierung spielen eine Rolle.`,
      sources: [
        { kind: 'wissenschaft', author: 'T. J. VanderWeele', work: 'Religious communities and human flourishing', ref: 'Current Directions in Psychological Science 26 (2017), 476–481', year: '2017', status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Vermittler der ägyptischen Wüstenväter-Tradition',
      text: `Johannes Cassian beschreibt in seinen „Institutionen" mit großer psychologischer Feinheit, was heute Depression und Erschöpfung genannt würde: die Traurigkeit, die ohne erkennbaren Grund kommt, und die Akedia, den lähmenden Überdruss, der den Mönch aus seiner Zelle treibt. Er unterscheidet scharf zwischen einer Traurigkeit, die zur Umkehr und zum Leben führt, und einer, die in Verzweiflung und Selbstzerstörung treibt – letztere sei zu bekämpfen, nicht zu kultivieren. Die Wüstentradition sah also nicht jede Schwermut als Tugend, sondern als etwas, das Heilung braucht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Von den Einrichtungen der Klöster (Institutiones)', ref: 'IX–X', status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Seelsorger und Lehrer der Buße',
      text: `Papst Schenuda III. lehrte in zahllosen Mittwochsvorträgen und Büchern, dass die Buße der Weg in die Freiheit und Freude ist. Er warnte davor, die eigene Sünde so zu betrachten, dass man an Gottes Barmherzigkeit verzweifelt; Verzweiflung sei selbst eine Versuchung. Sein Bild Gottes ist das des barmherzigen Vaters aus Lk 15, der dem Sohn entgegenläuft. Gerade dieses Gottesbild unterscheidet die gesunde von der krankmachenden Religiosität, die die Forschung als „negative religiöse Bewältigung" beschreibt.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Das Leben der Buße und Reinheit (The Life of Repentance and Purity)', status: 'paraphrase' },
      ],
    },
    {
      person: 'vitz',
      role: 'als Psychologe und Freud-Kritiker',
      text: `Paul Vitz zeigt, dass Freuds Religionskritik keine empirische Grundlage hatte, sondern auf Spekulation und Freuds eigener Biografie beruhte. Mit derselben psychoanalytischen Logik könne man auch den Atheismus als Wunschdenken deuten – als Wunsch, keinem Vater und keinem Richter verantwortlich zu sein. Vitz untersucht dazu die Biografien bekannter Atheisten und findet auffällig häufig abwesende oder enttäuschende Väter. Sein Punkt ist nicht, dass Atheismus krankhaft sei, sondern dass psychologische Herleitungen die Wahrheitsfrage nicht entscheiden – für keine Seite.`,
      sources: [
        { kind: 'fachliteratur', author: 'Paul C. Vitz', work: 'Faith of the Fatherless: The Psychology of Atheism', year: '1999', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'wahn-definition',
      objection: `Religion ist ein Wahn: eine hartnäckige falsche Überzeugung trotz starker Gegenbeweise. Genau so definiert das Wörterbuch „Wahn".`,
      objectionBy: 'Richard Dawkins',
      answer: `Das Wörterbuch vielleicht – die Psychiatrie nicht. Das Diagnosehandbuch DSM-5 definiert Wahn als falsche Überzeugung, die von den anderen Mitgliedern der eigenen Kultur gewöhnlich **nicht** geteilt wird, und nennt ausdrücklich religiöse Glaubensartikel als Ausnahme. Außerdem setzt deine Definition voraus, was zu beweisen ist: dass der Glaube falsch ist. Und Wahn geht mit Funktionsverlust einher – Gläubige funktionieren im Durchschnitt eher besser.`,
      detail: `Dawkins selbst zitiert im „Gotteswahn" eine Wörterbuchdefinition („a persistent false belief held in the face of strong contradictory evidence, especially as a symptom of psychiatric disorder") und sagt, der erste Teil treffe den religiösen Glauben. Damit benutzt er einen psychiatrischen Begriff rhetorisch, ohne die psychiatrischen Kriterien anzuwenden.`,
      sources: [
        { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Vorwort und Kap. 1', year: '2006', status: 'paraphrase' },
      ],
      questionsBack: [
        `Welches psychiatrische Kriterium für Wahn – außer „falsch nach meiner Meinung" – erfüllt ein durchschnittlicher Gläubiger?`,
        `Wenn Gläubige im Durchschnitt seltener depressiv und suizidal sind – wie passt das zu einer „Wahnkrankheit"?`,
      ],
      followUps: [
        {
          id: 'kulturausnahme-hoeflichkeit',
          objection: `Die Kulturausnahme im DSM ist reine Höflichkeit. Sonst müsste man Milliarden Menschen für verrückt erklären – und das traut sich die Psychiatrie nicht.`,
          objectionBy: 'Richard Dawkins',
          answer: `Nein, sie ist begrifflich begründet: Wahn ist eine individuelle Störung der Urteilsbildung – eine Überzeugung, die aus einem krankhaften Prozess entsteht und von niemandem um einen herum geteilt wird. Gemeinsame Überzeugungen ganzer Kulturen, die durch Zeugnis, Tradition und Argumente weitergegeben werden, sind etwas anderes – auch wenn sie falsch sind. Viele wissenschaftliche Irrtümer der Geschichte waren falsch, aber kein Wahn. Wer Andersdenkende pathologisiert, folgt übrigens einer bedenklichen Tradition: In der Sowjetunion wurden Gläubige und Dissidenten psychiatrisch „diagnostiziert".`,
          followUps: [
            {
              id: 'pirsig-zitat',
              objection: `Dann ist eben die Gesellschaft krank. Robert Pirsig hat es gesagt: Leidet einer an einem Wahn, heißt es Wahnsinn; leiden viele daran, heißt es Religion.`,
              objectionBy: 'Sam Harris',
              answer: `Das ist ein gelungenes Bonmot, aber keine Diagnose. Mit derselben Formel könnte man jede weitverbreitete Überzeugung, die man ablehnt, für krank erklären – auch den Atheismus in säkularen Gesellschaften. Die empirische Frage lautet: Zeigen Gläubige die Kennzeichen psychischer Störung – Leiden, Funktionsverlust, gestörtes Denken? Die Daten sagen im Durchschnitt: nein.`,
              followUps: [
                {
                  id: 'nuetzliche-illusion',
                  objection: `Selbst wenn Religion gesund macht: Eine nützliche Illusion bleibt eine Illusion. Nutzen beweist nicht Wahrheit.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Völlig einverstanden – und das ist ein wichtiger Punkt, den ich nicht verwische. Die Gesundheitsdaten beweisen nicht, dass Gott existiert. Sie widerlegen nur deine ursprüngliche Behauptung, Religion schade der Psyche. Ob der Glaube wahr ist, entscheiden andere Gründe: die Frage nach dem Ursprung des Universums, nach der Grundlage der Moral, nach der Auferstehung Jesu. Darüber sprechen wir gern – aber dann ohne Wahn-Etikett.`,
                  detail: `Siehe A8, ‚atheismus/keine-beweise-fuer-gott'; A9, ‚religionskritik/freud-wunscherfuellung'; A16, ‚auferstehung/halluzinationen'.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nur-korrelation',
      objection: `Die Gesundheitsstudien sind Korrelationen. Gesündere Menschen gehen eher in die Kirche, nicht umgekehrt. Und wenn überhaupt, hilft die Gemeinschaft – nicht Gott.`,
      objectionBy: 'Michael Shermer',
      answer: `Genau diese Einwände haben die Harvard-Forscher geprüft: Sie verfolgten dieselben Menschen über viele Jahre, kontrollierten den Gesundheitszustand zu Beginn, Rauchen, Gewicht, Depression und soziale Kontakte und berechneten, wie stark ein unbekannter Störfaktor sein müsste, um den Effekt zu erklären. Der Zusammenhang blieb robust. Soziale Unterstützung erklärte nur einen Teil davon. Und Gemeinschaft ist kein Nebeneffekt des Glaubens, sondern Teil seiner Praxis.`,
      sources: [
        { kind: 'wissenschaft', author: 'S. Li, M. J. Stampfer, D. R. Williams, T. J. VanderWeele', work: 'Association of religious service attendance with mortality among women', ref: 'JAMA Internal Medicine 176 (2016), 777–785', year: '2016', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'sportverein',
          objection: `Dann tritt eben einem Sportverein oder einem Chor bei. Gleicher Effekt, ohne Gott und ohne Hölle.`,
          objectionBy: 'Michael Shermer',
          answer: `Auch säkulare Gemeinschaft tut gut, das bestreite ich nicht. Aber in den Studien wirkte religiöse Gemeinschaft für Sterblichkeit und Suizid in der Regel deutlich stärker als andere soziale Teilnahme. VanderWeele erklärt das damit, dass Gemeinden mehr bieten als Kontakte: Sinn, Hoffnung angesichts von Leid und Tod, Vergebung und eine gemeinsame moralische Orientierung. Ein Fußballverein tröstet am Grab nur begrenzt.`,
          detail: `Vorsicht bei Zahlenvergleichen: Die Studien unterscheiden sich in Methoden und Messgrößen. Die sichere Aussage ist, dass religiöse Teilnahme in der Harvard-Forschung einen eigenständigen Zusammenhang zeigt, der nicht vollständig durch allgemeine soziale Integration erklärt wird.`,
          followUps: [
            {
              id: 'placebo-hoffnung',
              objection: `Dann ist es eben ein Placebo-Effekt von Hoffnung und Sinn. Das ändert nichts an der Wahrheitsfrage.`,
              objectionBy: 'Robert Sapolsky',
              answer: `Richtig – an der Wahrheitsfrage ändert es nichts, und das habe ich auch nicht behauptet. Aber die ursprüngliche These lautete, Religion *schade* der Psyche. Sie ist widerlegt. Ob die Hoffnung begründet ist, entscheidet sich an der Frage, ob Christus auferstanden ist – und dazu gibt es historische Argumente, über die wir als Nächstes reden können.`,
            },
          ],
        },
      ],
    },
    {
      id: 'negatives-coping',
      objection: `Pargament hat gezeigt: Kranke, die glauben, Gott strafe oder verlasse sie, sterben früher. Religion erzeugt Angst vor Strafe und Hölle – und die macht krank.`,
      objectionBy: 'Marlene Winell',
      answer: `Das ist ein echter Befund, und ich gebe ihn ausdrücklich zu: Wer Gott als strafend oder abwesend erlebt, dem geht es im Durchschnitt schlechter. Aber dieselbe Forschung zeigt, dass positive religiöse Bewältigung – Vertrauen, Gebet, Gemeinschaft, Sinnfindung – weit häufiger ist und mit besseren Ergebnissen einhergeht. Entscheidend ist das Gottesbild. Das Evangelium sagt: „Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus" (1 Joh 4,18).`,
      sources: [
        { kind: 'wissenschaft', author: 'K. I. Pargament, H. G. Koenig, N. Tarakeshwar, J. Hahn', work: 'Religious struggle as a predictor of mortality among medically ill elderly patients', ref: 'Archives of Internal Medicine 161 (2001), 1881–1885', year: '2001', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'G. G. Ano, E. B. Vasconcelles', work: 'Religious coping and psychological adjustment to stress: A meta-analysis', ref: 'Journal of Clinical Psychology 61 (2005), 461–480', year: '2005', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'religious-trauma',
          objection: `Ich habe Hunderte Ex-Fundamentalisten begleitet: Panikattacken, Albträume, Angst vor der Entrückung, Unfähigkeit, Entscheidungen zu treffen. Das nenne ich Religious Trauma Syndrome.`,
          objectionBy: 'Marlene Winell',
          answer: `Dieses Leid nehme ich ernst, und manche Gemeinden haben Menschen tatsächlich mit Angst und Kontrolle verletzt – das ist Sünde. Aber „Religious Trauma Syndrome" ist keine anerkannte Diagnose, sondern beruht auf klinischen Fallberichten von Menschen, die Hilfe suchten; daraus lässt sich nicht auf Religion insgesamt schließen. Jesus selbst hat geistlichen Missbrauch scharf verurteilt (Mt 23,4: „Sie binden schwere und unerträgliche Bürden"). Missbrauch eines Gutes widerlegt nicht das Gut.`,
          followUps: [
            {
              id: 'hoelle-traumatisiert',
              objection: `Die Hölle selbst ist das Problem. Jede Religion, die Kindern ewige Strafe androht, traumatisiert sie – egal wie „nett" die Gemeinde ist.`,
              objectionBy: 'Darrel Ray',
              answer: `Es gibt einen Unterschied zwischen der ernsten Lehre, dass unsere Entscheidungen Gewicht haben, und angstbasierter Manipulation. Die koptische Kirche stellt Kindern Christus vor, der die Kinder segnet (Mk 10,14), und lehrt Gericht im Zusammenhang mit Gottes Liebe und Barmherzigkeit. Dass manche Eltern oder Prediger mit der Hölle drohen, um Kinder gefügig zu machen, ist falsch – Paulus verbietet ausdrücklich, Kinder „zum Zorn zu reizen" (Eph 6,4). Die Forschungsdaten zur religiösen Erziehung insgesamt sind überwiegend positiv.`,
              detail: `Zur Frage, ob die Hölle Angstmache ist: A9, ‚hoelle/hoelle-angstmache'. Zur Erziehung: ‚kognitive-religionswissenschaft/kinder-indoktrination'.`,
              followUps: [
                {
                  id: 'glueck-nette-gemeinde',
                  objection: `Dann ist es eben Glückssache, ob man in einer gesunden oder in einer toxischen Gemeinde landet.`,
                  objectionBy: 'Darrel Ray',
                  answer: `Es gibt Kriterien, an denen man eine gesunde Gemeinschaft erkennt: Man darf Fragen stellen und die Schrift selbst prüfen (Apg 17,11); Leiter sind rechenschaftspflichtig und herrschen nicht (1 Petr 5,3); es gibt keine Geheimlehren; man darf gehen, ohne verfolgt zu werden; ärztliche Hilfe wird ermutigt. Wer diese Kriterien kennt, ist nicht dem Glück ausgeliefert. Und sie stammen nicht von Kritikern, sondern aus dem Neuen Testament selbst.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'zwang-schizotypie',
      objection: `Religiosität hängt mit Zwangsstörung und Schizotypie zusammen: Rituale, Reinheitsregeln, Stimmenhören. Religion ist eine Kulturform psychischer Auffälligkeiten.`,
      objectionBy: 'Robert Sapolsky',
      answer: `Es stimmt, dass Zwangsstörungen religiöse Inhalte annehmen können – das heißt Skrupulosität, und sie ist real. Aber Zwangsstörungen nehmen ebenso Inhalte wie Keime, Ordnung oder Sicherheit an; der Inhalt ist nicht die Ursache. Die Wüstenväter kannten skrupulöse Mönche und behandelten sie mit Gehorsam gegenüber einem erfahrenen Begleiter, nicht mit mehr Ritualen. Sapolskys Vorlesung ist eine anregende Spekulation, aber keine belastbare Datengrundlage gegen Hunderte Studien.`,
      followUps: [
        {
          id: 'psychose-religioese-inhalte',
          objection: `Und Psychosen? Viele Patienten mit Schizophrenie haben religiöse Wahninhalte – sie halten sich für Christus oder hören Gott.`,
          objectionBy: 'Robert Sapolsky',
          answer: `Wahninhalte spiegeln die Kultur: Früher hielten sich Patienten für Napoleon, heute oft für Opfer der Geheimdienste oder von Außerirdischen. Daraus folgt nicht, dass Napoleon oder Geheimdienste Wahngebilde sind. Studien aus der Schweiz (Mohr u. a. 2006) fanden zudem, dass für viele Patienten mit Schizophrenie ihr Glaube eine wichtige Bewältigungsressource ist.`,
          sources: [
            { kind: 'wissenschaft', author: 'S. Mohr, P.-Y. Brandt, L. Borras, C. Gilliéron, P. Huguelet', work: 'Toward an integration of spirituality and religiousness into the psychosocial dimension of schizophrenia', ref: 'American Journal of Psychiatry 163 (2006), 1952–1959', year: '2006', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'nicht-unterscheidbar',
              objection: `Dann kann man religiöse Erfahrung und Psychose gar nicht unterscheiden.`,
              objectionBy: 'Michael Shermer',
              answer: `Doch, Psychiater tun das täglich. Kriterien sind Leidensdruck, Funktionsverlust, Desorganisation des Denkens, weitere Symptome und ob die Überzeugung in der eigenen Gemeinschaft geteilt oder als fremd erlebt wird. Ein Gemeindemitglied, das betet, arbeitet und Beziehungen pflegt, hat keine Psychose. Ausführlich dazu der Themenblock Psychiatrie.`,
              detail: `Siehe ‚psychiatrie/propheten-psychisch-krank'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'depressive-christen',
      objection: `Wenn Gebet so gut tut – warum gibt es dann depressive Christen, suizidale Gläubige und Priester mit Burnout?`,
      objectionBy: 'Sam Harris',
      answer: `Weil Glaube kein Impfstoff gegen Krankheit ist und die Bibel das auch nie behauptet hat: Elija wünschte sich den Tod, Psalm 88 endet im Dunkel, Jesus war „betrübt bis an den Tod". Die Studien beschreiben Durchschnitte, keine Garantien. Ein depressiver Christ ist ein kranker Mensch, der Behandlung braucht – und die Kirche sollte ihn dazu ermutigen, nicht beschämen.`,
      followUps: [
        {
          id: 'gott-als-therapeut-nutzlos',
          objection: `Dann ist Gott als Therapeut nutzlos.`,
          objectionBy: 'Sam Harris',
          answer: `Christus ist nicht in erster Linie ein Therapeut, sondern der Erlöser und die Wahrheit. Die gesundheitlichen Vorteile sind Begleiterscheinungen, nicht der Zweck des Glaubens. Und Gott wirkt auch durch Ärzte und Medikamente – „der HERR lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht" (Sir 38,4).`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du die DSM-5-Definition von Wahn – und weißt du, dass sie religiöse Glaubensüberzeugungen ausdrücklich ausnimmt?`,
    `Wie erklärst du, dass regelmäßiger Gottesdienstbesuch in Harvard-Kohorten mit deutlich weniger Suiziden einhergeht?`,
    `Wenn Religion ein Wahn ist – welche Kriterien einer psychischen Störung erfüllt ein durchschnittlicher Gläubiger?`,
    `Wäre es nicht wissenschaftlich ehrlicher, zwischen gesunder und ungesunder Religiosität zu unterscheiden?`,
  ],
  avoid: [
    `„Christen sind glücklicher und gesünder – also ist das Christentum wahr." – Nutzen beweist nicht Wahrheit; das Gegenüber wird das sofort aufgreifen.`,
    `„Echte Christen werden nicht depressiv." – Falsch, unbiblisch und seelsorglich verheerend.`,
    `Die negativen Befunde (Pargament, religiöser Missbrauch) verschweigen – das kostet Glaubwürdigkeit.`,
    `Psychiatrische Behandlung als Glaubensschwäche darstellen.`,
  ],
  concessions: [
    `Angstbesetzte, strafende Religiosität und „religiöser Kampf" gehen nachweislich mit schlechterer Gesundheit einher.`,
    `Es gibt religiösen Missbrauch und Gemeinden, die Menschen seelisch verletzt haben.`,
    `Die meisten positiven Befunde stammen aus Beobachtungsstudien; die Effekte sind meist klein bis mittel, und Kausalität ist nie völlig gesichert.`,
  ],
  furtherReading: [
    { kind: 'wissenschaft', author: 'Harold G. Koenig, Tyler J. VanderWeele, John R. Peteet', work: 'Handbook of Religion and Health', year: '3. Aufl. 2024', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Andrew Sims', work: 'Is Faith Delusion? Why Religion Is Good for Your Health', year: '2009', status: 'paraphrase', note: 'Von einem ehemaligen Präsidenten des Royal College of Psychiatrists.' },
    { kind: 'fachliteratur', author: 'Alister McGrath, Joanna Collicutt McGrath', work: 'The Dawkins Delusion? Atheist Fundamentalism and the Denial of the Divine', year: '2007', status: 'paraphrase', note: 'Joanna Collicutt McGrath ist Psychologin.' },
  ],
  difficulty: 2,
  tags: ['Psychische Gesundheit', 'Dawkins', 'Gotteswahn', 'VanderWeele', 'Koenig', 'religiöses Coping'],
  related: [
    'religionskritik/freud-wunscherfuellung',
    'religionskritik/religion-als-virus',
    'psychologie/schuldgefuehle-schaedlich',
    'psychiatrie/propheten-psychisch-krank',
    'soziologie/saekulare-gesellschaften-gluecklicher',
    'hoelle/hoelle-angstmache',
  ],
};

export default claim;
