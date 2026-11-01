import type { Claim, Source } from '../../../schema.ts';

const adams1970: Source = {
  kind: 'fachliteratur',
  author: 'Jay E. Adams',
  work: 'Competent to Counsel',
  year: '1970',
  quote: `Adams begründete die „nouthetische" (ermahnende) Seelsorge: Die meisten seelischen Probleme seien geistlicher Natur und mit der Schrift zu behandeln; die säkulare Psychiatrie und Psychotherapie lehnt er weitgehend ab.`,
  status: 'paraphrase',
  note: 'Evangelikaler Autor; seine Position wird hier als innerchristliche Gegenposition dargestellt, nicht als koptische Lehre.',
};

const ellis1980: Source = {
  kind: 'gegner',
  author: 'Albert Ellis',
  work: '„Psychotherapy and atheistic values: A response to A. E. Bergin\'s ‚Psychotherapy and religious values\'", Journal of Consulting and Clinical Psychology 48, S. 635–639',
  year: '1980',
  quote: `Ellis, Begründer der Rational-Emotiven Verhaltenstherapie, vertrat damals, dogmatische Religiosität sei mit seelischer Gesundheit weitgehend unvereinbar und fördere irrationales Denken.`,
  status: 'paraphrase',
};

const nielsenEllis2001: Source = {
  kind: 'fachliteratur',
  author: 'Stevan L. Nielsen, W. Brad Johnson, Albert Ellis',
  work: 'Counseling and Psychotherapy with Religious Persons: A Rational Emotive Behavior Therapy Approach',
  year: '2001',
  quote: `Ellis entwickelte mit religiösen Kollegen einen Ansatz, der die Glaubensüberzeugungen religiöser Klienten respektiert und in die Therapie einbezieht.`,
  status: 'paraphrase',
  note: 'Bemerkenswerte Kehrtwende des einstigen Religionskritikers.',
};

const bergin1980: Source = {
  kind: 'wissenschaft',
  author: 'Allen E. Bergin',
  work: '„Psychotherapy and religious values", Journal of Consulting and Clinical Psychology 48, S. 95–105',
  year: '1980',
  quote: `Bergin argumentierte, dass Psychotherapie nie wertneutral ist und religiöse Werte als legitime Perspektive in Forschung und Praxis berücksichtigt werden sollten.`,
  status: 'paraphrase',
};

const koenig2015: Source = {
  kind: 'wissenschaft',
  author: 'Harold G. Koenig u. a.',
  work: '„Religious vs. Conventional Cognitive Behavioral Therapy for Major Depression in Persons With Chronic Medical Illness: A Pilot Randomized Trial", Journal of Nervous and Mental Disease 203, S. 243–251',
  year: '2015',
  quote: `In einer randomisierten Pilotstudie war religiös integrierte kognitive Verhaltenstherapie bei Depression ebenso wirksam wie die konventionelle; bei stärker religiösen Patienten zeigten sich Hinweise auf Vorteile.`,
  status: 'paraphrase',
};

const anderson2015: Source = {
  kind: 'wissenschaft',
  author: 'Naomi Anderson u. a.',
  work: '„Faith-adapted psychological therapies for depression and anxiety: Systematic review and meta-analysis", Journal of Affective Disorders 176, S. 183–196',
  year: '2015',
  quote: `Glaubensangepasste psychologische Therapien waren bei Depression und Angst wirksam und den Standardtherapien mindestens ebenbürtig.`,
  status: 'paraphrase',
};

const cipriani2018: Source = {
  kind: 'wissenschaft',
  author: 'Andrea Cipriani u. a.',
  work: '„Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder: a systematic review and network meta-analysis", The Lancet 391, S. 1357–1366',
  year: '2018',
  quote: `In einer Netzwerk-Metaanalyse mit über 500 Studien waren alle 21 untersuchten Antidepressiva bei Erwachsenen mit schwerer Depression in der Akutbehandlung wirksamer als Placebo; die Effekte waren meist moderat.`,
  status: 'paraphrase',
};

const larchet2005: Source = {
  kind: 'fachliteratur',
  author: 'Jean-Claude Larchet',
  work: 'Mental Disorders and Spiritual Healing: Teachings from the Early Christian East (frz. Original: Thérapeutique des maladies mentales, 1992)',
  year: '2005',
  quote: `Larchet zeigt anhand der Väter, dass die östliche Tradition drei Ursachen seelischer Störungen unterschied – körperliche, dämonische und geistliche (Leidenschaften) – und dass sie bei körperlichen Ursachen ausdrücklich ärztliche Behandlung befürwortete.`,
  status: 'paraphrase',
};

const claim: Claim = {
  id: 'glaube-statt-therapie',
  title: `„Wer richtig glaubt, braucht keine Psychotherapie – oder umgekehrt: Therapie ersetzt die Seelsorge."`,
  proponents: [
    { name: 'Jay E. Adams', role: 'Evangelikaler Theologe, Begründer der nouthetischen Seelsorge (1929–2020)', work: 'Competent to Counsel (1970)' },
    { name: 'John MacArthur', role: 'Evangelikaler Pastor, Grace Community Church', work: 'Our Sufficiency in Christ (1991)' },
    { name: 'Albert Ellis', role: 'Psychologe, Begründer der Rational-Emotiven Verhaltenstherapie (1913–2007)', work: '„Psychotherapy and atheistic values" (1980)' },
    { name: 'Sigmund Freud', role: 'Begründer der Psychoanalyse', work: 'Die Zukunft einer Illusion (1927)' },
    { name: 'Marlene Winell', role: 'Psychologin', work: 'Leaving the Fold (1993); Konzept „Religious Trauma Syndrome"' },
  ],
  steelman: `Die Frage hat zwei Fronten. **Von christlicher Seite:** Die Schrift genügt zu allem, was zum Leben und zur Gottseligkeit dient (2 Petr 1,3). Die moderne Psychologie wurzelt in Weltanschauungen, die Gott ausklammern – Freud nannte Religion eine Illusion. Wer Angst oder Niedergeschlagenheit mit Medikamenten und Gesprächstechniken behandelt, verdeckt womöglich, was im Kern ein geistliches Problem ist: Unglaube, Sünde, mangelndes Vertrauen. Ein Christ, der wirklich glaubt, braucht keinen Psychiater. **Von säkularer Seite:** Seelsorge ist unwissenschaftlich. Priester sind keine ausgebildeten Therapeuten, Beichte kann Schuldgefühle verstärken, und religiöse Gemeinschaften stigmatisieren psychische Krankheit oft als Schwäche oder dämonisch. Psychotherapie ist evidenzbasiert; sie hat die Seelsorge abgelöst, wie die Medizin den Exorzismus abgelöst hat. Beide Fronten sind sich in einem einig: Glaube und Therapie schließen sich aus.`,
  biblical: {
    summary: `Die Bibel sieht den Menschen als Einheit von Leib und Seele. Als der Prophet Elia lebensmüde unter dem Wacholder liegt und sterben will, tadelt Gott ihn nicht, sondern lässt ihn schlafen und schickt einen Engel mit Brot und Wasser: „Stehe auf und iß!" (1 Kön 19,4–8). Erst danach begegnet er Gott. Die Schrift ehrt den Arzt (Sir 38), Paulus empfiehlt Timotheus Wein „um deines Magens willen" (1 Tim 5,23), Lukas ist „der Arzt, der geliebte" (Kol 4,14). Zugleich kennt sie die Seelsorge: „Schüttet euer Herz vor ihm aus" (Ps 62,9); „Tröstet die Kleinmütigen" (1 Thess 5,14).`,
    detail: `- **2 Petr 1,3** spricht von allem, was „zum Leben und göttlichen Wandel" dient – im Zusammenhang der Erkenntnis Christi, nicht als Verbot ärztlicher Hilfe. Niemand liest daraus, Christen bräuchten keine Chirurgen.
- **Psalmen der Klage** (Ps 42; 88) zeigen, dass auch gläubige Menschen tiefe Niedergeschlagenheit erleben – ohne dass ihr Glaube deshalb falsch wäre.
- **Jesus** heilt Leib und Seele und sagt: „Die Starken bedürfen des Arztes nicht, sondern die Kranken" (Mt 9,12).`,
    sources: [
      { kind: 'bibel', work: '1. Könige', ref: '19,4–5', quote: `Er aber ging hin in die Wüste eine Tagereise und kam hinein und setzte sich unter einen Wacholder und bat, daß seine Seele stürbe, und sprach: Es ist genug, so nimm nun, HERR, meine Seele; ich bin nicht besser denn meine Väter. Und er legte sich und schlief unter dem Wacholder. Und siehe, ein Engel rührte ihn an und sprach zu ihm: Stehe auf und iß!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '62,9', quote: `Hoffet auf ihn allezeit, liebe Leute, schüttet euer Herz vor ihm aus; Gott ist unsre Zuversicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '9,12', quote: `Die Starken bedürfen des Arztes nicht, sondern die Kranken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–12', quote: `Der Kranke soll zu Gott beten, von der Sünde lassen – und den Arzt rufen, denn auch ihn hat der Herr geschaffen.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht sich als Ort der Heilung des ganzen Menschen. Sie lehrt kein „Entweder-oder": Krankensalbung, Beichte, Gebet und geistliche Begleitung durch den Beichtvater gehen Hand in Hand mit ärztlicher Behandlung. Basilius der Große nennt die Heilkunst eine Gabe Gottes, die man dankbar nutzen soll (Längere Regeln 55). Die Väter unterschieden bei seelischen Leiden körperliche, dämonische und geistliche Ursachen und wiesen körperlich bedingte Leiden dem Arzt zu (Larchet). Kopten verehren heilige Ärzte wie Kyros und Johannes; Papst Tawadros II. und Vater Matta el-Meskeen waren vor ihrem geistlichen Weg Apotheker. Die Kirche erkennt an, dass psychische Erkrankung keine Sünde und kein Zeichen schwachen Glaubens ist.`,
    detail: `- **Beichtvater (Ab al-I'tiraf):** Er begleitet geistlich, ersetzt aber keinen Arzt; wo eine Erkrankung vorliegt, soll er zur Behandlung ermutigen.
- **Ehrlich:** In manchen Gemeinden – in Ägypten wie in der Diaspora – ist psychische Krankheit noch mit Scham behaftet. Das ist ein kulturelles Stigma, keine Lehre der Kirche, und es zu überwinden ist pastoraler Auftrag.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln (Regulae fusius tractatae)', ref: '55', quote: `Die Heilkunst ist eine Gabe Gottes; man soll sie nicht verschmähen, aber seine ganze Hoffnung auf Gott setzen, nicht auf den Arzt allein.`, status: 'paraphrase' },
      larchet2005,
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'De institutis coenobiorum (Einrichtungen der Klöster)', ref: 'IX (Über die Traurigkeit)', quote: `Cassian unterscheidet die gottgemäße Traurigkeit, die zur Umkehr führt, von einer zerstörerischen Traurigkeit, die den Menschen lähmt, und rät zu Geduld, Gemeinschaft und geordneter Arbeit.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung spricht für ein Sowohl-als-auch. Psychotherapie und Medikamente sind bei psychischen Erkrankungen wirksam; Antidepressiva etwa sind bei schwerer Depression im Mittel wirksamer als Placebo (Cipriani u. a. 2018), wenn auch mit meist moderaten Effekten. Religiöse Praxis ist in großen Studien im Durchschnitt mit weniger Depression, Suizid und Sucht verbunden (Koenig; VanderWeele). Religiös bzw. spirituell integrierte Therapien – etwa religiös integrierte kognitive Verhaltenstherapie – sind mindestens so wirksam wie Standardtherapien und werden von gläubigen Patienten oft besser angenommen (Koenig u. a. 2015; Anderson u. a. 2015; Hook u. a. 2010). Zugleich ist belegt, dass „negative religiöse Bewältigung" (Gott als strafend erlebt) und religiöser Missbrauch schaden können.`,
    detail: `- **Christliche Psychologen** – etwa Everett Worthington (Vergebungsforschung), Mark Yarhouse, Paul Vitz oder Siang-Yang Tan – zeigen seit Jahrzehnten, dass wissenschaftliche Psychologie und christlicher Glaube integrierbar sind.
- **Albert Ellis**, einst scharfer Religionskritiker, entwickelte später mit religiösen Kollegen einen Therapieansatz für religiöse Klienten (2001).
- **Kein Therapieansatz ist wertneutral** (Bergin 1980): Jede Therapie hat Vorstellungen vom gelingenden Leben. Seelsorge beantwortet Fragen nach Sinn, Schuld und Vergebung, die Therapie nicht begründen kann.`,
    sources: [cipriani2018, koenig2015, anderson2015, bergin1980, nielsenEllis2001,
      { kind: 'wissenschaft', author: 'Joshua N. Hook u. a.', work: '„Empirically supported religious and spiritual therapies", Journal of Clinical Psychology 66, S. 46–72', year: '2010', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Weder noch – die Kirche lehrt ein Sowohl-als-auch. Als Elia lebensmüde zusammenbrach, gab Gott ihm zuerst Schlaf und Essen, dann begegnete er ihm. Basilius der Große nannte die Heilkunst eine Gabe Gottes; die Väter wiesen körperlich bedingte seelische Leiden dem Arzt zu. Psychische Krankheit ist keine Sünde und kein Zeichen schwachen Glaubens. Umgekehrt zeigen Studien, dass Therapien, die den Glauben einbeziehen, mindestens so gut wirken wie Standardtherapien – und Fragen nach Sinn, Schuld und Vergebung beantwortet keine Therapie allein. Arzt, Therapeut und Beichtvater sind Verbündete.`,
  keyPoints: [
    `**Leib und Seele gehören zusammen:** Gott antwortet auf Elias Verzweiflung zuerst mit Schlaf und Brot (1 Kön 19) – die Bibel kennt die leibliche Seite seelischer Not.`,
    `**Die Väter befürworteten den Arzt:** Basilius (Längere Regeln 55); Larchet zeigt, dass die Väter körperliche, dämonische und geistliche Ursachen unterschieden.`,
    `**Krankheit ist keine Sünde:** Depression, Angst oder Psychose sind Erkrankungen, keine Glaubensschwäche.`,
    `**Glaube und Therapie wirken zusammen:** Religiös integrierte Therapien sind mindestens so wirksam wie Standardtherapien (Koenig 2015; Anderson 2015).`,
    `**Seelsorge hat ihren eigenen Auftrag:** Sinn, Schuld, Vergebung, Hoffnung – Fragen, die keine Therapie aus sich begründen kann.`,
    `**Ehrlich zum Stigma:** Wo Gemeinden psychische Krankheit beschämen, widersprechen sie ihrer eigenen Tradition.`,
  ],
  argument: {
    name: 'Das falsche Dilemma von Glaube und Therapie',
    summary: 'Beide Hörner des Dilemmas beruhen auf einem verkürzten Menschenbild.',
    premises: [
      {
        text: `P1: Der Mensch ist nach christlicher Lehre eine Einheit von Leib und Seele; Leiden können leibliche, seelische und geistliche Ursachen haben, die sich überlagern.`,
        support: `1 Kön 19; die Unterscheidungen der Väter (Larchet); die moderne biopsychosoziale Sicht.`,
        sources: [larchet2005],
      },
      {
        text: `P2: Ärztliche und psychotherapeutische Behandlung sind nach der Tradition legitime Gaben Gottes für die leiblich-seelische Seite.`,
        support: `Sir 38; Basilius, Längere Regeln 55; heilige Ärzte der Kirche.`,
      },
      {
        text: `P3: Fragen nach Sinn, Schuld, Vergebung und Hoffnung übersteigen, was Psychotherapie aus sich heraus begründen kann; zugleich wirkt der Glaube nachweislich unterstützend.`,
        support: `Bergin 1980 (keine wertneutrale Therapie); Studien zu religiös integrierter Therapie (Koenig 2015; Anderson 2015).`,
        sources: [bergin1980, koenig2015, anderson2015],
      },
    ],
    conclusion: `Glaube ersetzt keine Therapie, und Therapie ersetzt keine Seelsorge. Wer leidet, verdient beides – und die koptische Tradition hat dafür die Grundlagen.`,
  },
  voices: [
    {
      person: 'koenig',
      role: 'als Psychiater und Forscher',
      text: `Koenig, Psychiater an der Duke University, hat Tausende Studien zum Zusammenhang von Religion und Gesundheit ausgewertet. Er betont zweierlei: Religiöse Praxis ist im Durchschnitt mit besserer seelischer Gesundheit verbunden – und religiöse Patienten profitieren, wenn ihre Therapie ihren Glauben ernst nimmt. Mit Kollegen entwickelte er eine religiös integrierte kognitive Verhaltenstherapie, die in Studien ebenso wirksam war wie die konventionelle. Koenig ermutigt Ärzte, die spirituelle Geschichte ihrer Patienten zu erfragen, und Gemeinden, mit Fachleuten zusammenzuarbeiten.`,
      sources: [koenig2015, { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna Benner Carson', work: 'Handbook of Religion and Health (2. Aufl.)', year: '2012', status: 'paraphrase' }],
    },
    {
      person: 'jean-claude-larchet',
      role: 'als orthodoxer Patrologe',
      text: `Larchet hat die Lehre der östlichen Väter über seelische Erkrankungen systematisch dargestellt. Die Väter unterschieden drei Ursachen: körperliche (etwa Störungen der Körpersäfte – heute würden wir von Hirnstoffwechsel sprechen), dämonische und geistliche (die Leidenschaften). Bei körperlichen Ursachen befürworteten sie ausdrücklich die Behandlung durch Ärzte. Larchet zeigt, dass die Tradition weder alles verteufelte noch alles medikalisierte, sondern sorgfältig unterschied – ein Modell für heutige Zusammenarbeit von Arzt und Seelsorger.`,
      sources: [larchet2005],
    },
    {
      person: 'basilius',
      role: 'als Bischof, Mönchsvater und Gründer einer Krankenanstalt',
      text: `Basilius beantwortet in seinen Regeln die Frage, ob ärztliche Behandlung mit einem frommen Leben vereinbar sei: Ja – wie Gott uns Ackerbau und Weberei gab, so gab er uns die Heilkunst. Man solle sie dankbar nutzen und zugleich wissen, dass Gott der eigentliche Heiler ist. Wer aus falscher Frömmigkeit die Medizin verschmäht, handelt töricht; wer seine ganze Hoffnung auf den Arzt setzt, vergisst Gott. Diese Balance ist bis heute der Maßstab der Kirche.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln', ref: '55', status: 'paraphrase' }],
    },
    {
      person: 'johannes-cassian',
      role: 'als Lehrer der ägyptischen Wüstenväter',
      text: `Cassian brachte die Weisheit der ägyptischen Mönche in den Westen. Er beschreibt die „acht Hauptlaster", darunter Traurigkeit (*tristitia*) und Überdruss (*acedia*), mit großer psychologischer Feinheit: wie Gedanken (*logismoi*) aufsteigen, sich festsetzen und den Menschen beherrschen. Die Gegenmittel – Gedanken wahrnehmen, benennen, ihnen nicht nachgeben, Gemeinschaft suchen, Arbeit und Gebet ordnen – erinnern erstaunlich an Elemente heutiger kognitiver Therapie. Zugleich unterscheidet er geistliche von zerstörerischer Traurigkeit.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'De institutis coenobiorum', ref: 'IX–X', status: 'paraphrase' }],
    },
    {
      person: 'everett-worthington',
      role: 'als Psychologe (Vergebungsforschung)',
      text: `Worthington hat gezeigt, dass Vergebung messbar zur seelischen Gesundheit beiträgt und dass man sie fördern kann. Er unterscheidet die Entscheidung zu vergeben von der emotionalen Vergebung und betont, dass Vergebung weder Verharmlosung noch erzwungene Versöhnung bedeutet. Sein eigener Weg – nach der Ermordung seiner Mutter – zeigt, wie christlicher Glaube und wissenschaftliche Psychologie zusammenkommen.`,
      sources: [{ kind: 'fachliteratur', author: 'Everett L. Worthington Jr.', work: 'Forgiving and Reconciling: Bridges to Wholeness and Hope', year: '2003', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'schrift-genuegt',
      objection: `Die Schrift genügt. Depression ist letztlich ein geistliches Problem – Unglaube oder Sünde. Ein Christ, der wirklich glaubt, braucht keinen Psychiater.`,
      objectionBy: 'Jay E. Adams',
      targetsPremise: 2,
      answer: `Als Elia lebensmüde unter dem Wacholder lag und sterben wollte, hat Gott ihn nicht wegen Unglaubens getadelt. Er ließ ihn schlafen und schickte einen Engel mit Brot: „Stehe auf und iß!" Erst danach begegnete er ihm. Die Bibel kennt die leibliche Seite seelischer Not. Und die Väter – Basilius etwa – nannten die Heilkunst eine Gabe Gottes. Psychische Krankheit ist keine Sünde.`,
      sources: [adams1970],
      questionsBack: [`Würdest du einem Christen mit gebrochenem Bein auch sagen, er brauche nur mehr Glauben?`],
      followUps: [
        {
          id: 'psychologie-gottlos',
          objection: `Aber die Psychologie stammt von Gottlosen wie Freud. Ihr Menschenbild ist mit dem Glauben unvereinbar.`,
          objectionBy: 'John MacArthur',
          targetsPremise: 2,
          answer: `Man muss zwischen Weltanschauung und Befund unterscheiden. Freuds Religionskritik ist nicht dasselbe wie die empirisch geprüfte Wirksamkeit einer Behandlung. Viele Elemente heutiger Verhaltenstherapie – Gedanken wahrnehmen, prüfen und ihnen nicht nachgeben – finden sich schon bei den ägyptischen Wüstenvätern, die Cassian überliefert hat. Und es gibt seit Jahrzehnten hervorragende christliche Psychologen, die Glaube und Wissenschaft verbinden.`,
          voices: [
            {
              person: 'johannes-cassian',
              role: 'als Lehrer der Wüstenväter',
              text: `Cassian beschreibt, wie zerstörerische Gedanken aufsteigen und wie der Mönch lernt, sie zu bemerken, zu benennen und ihnen nicht zu folgen. Diese Unterscheidungsgabe (*discretio*) ist für ihn die Mutter aller Tugenden.`,
              sources: [{ kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Collationes (Unterredungen mit den Vätern)', ref: 'II (Über die Unterscheidung)', status: 'paraphrase' }],
            },
          ],
          followUps: [
            {
              id: 'medikamente-betaeuben',
              objection: `Antidepressiva betäuben nur die Seele. Sie verdecken, was eigentlich geistlich geheilt werden müsste.`,
              objectionBy: 'Jay E. Adams',
              answer: `Bei schwerer Depression sind Antidepressiva im Mittel wirksamer als Placebo – das zeigt eine Auswertung von über 500 Studien. Sie können einem Menschen wieder die Kraft geben, zu beten, zu arbeiten und Beziehungen zu leben. Ein Diabetiker, der Insulin nimmt, verdeckt keinen Glaubensmangel. Die Entscheidung trifft man mit dem Arzt; Gebet, Beichte und Eucharistie gehen weiter.`,
              sources: [cipriani2018],
              followUps: [
                {
                  id: 'vaeter-keine-psychiatrie',
                  objection: `Die Kirchenväter kannten keine Psychiatrie. Sie hätten seelische Leiden rein geistlich behandelt.`,
                  objectionBy: 'John MacArthur',
                  answer: `Das stimmt nicht. Der orthodoxe Patrologe Jean-Claude Larchet hat gezeigt, dass die Väter körperliche, dämonische und geistliche Ursachen seelischer Leiden unterschieden und bei körperlichen Ursachen ausdrücklich den Arzt empfahlen. In byzantinischen Krankenhäusern wurden auch seelisch Kranke von Ärzten behandelt. Die Väter waren Seelenärzte – aber sie verachteten die Leibärzte nicht.`,
                  sources: [larchet2005],
                  followUps: [
                    {
                      id: 'alles-daemonen',
                      objection: `Viele sogenannte psychische Krankheiten sind in Wahrheit dämonisch. Da hilft Gebet und Exorzismus, nicht der Psychiater.`,
                      objectionBy: 'Pfingstlicher Heilungsprediger',
                      answer: `Die Kirche kennt geistliche Kämpfe und betet für die Bedrängten. Aber sie unterscheidet sorgfältig – und warnt davor, Krankheit mit Besessenheit zu verwechseln. Wer einen Menschen mit Schizophrenie oder Depression für besessen erklärt, kann großen Schaden anrichten: Er verweigert ihm Behandlung und lädt ihm zusätzliche Scham auf. Gebet und ärztliche Hilfe schließen sich nicht aus.`,
                      questionsBack: [`Wie unterscheidest du eine Psychose von Besessenheit – und wer trägt die Verantwortung, wenn du dich irrst?`],
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
      id: 'therapie-ersetzt-seelsorge',
      objection: `Religion fördert irrationales Denken – das hat Albert Ellis gezeigt. Psychotherapie ist wissenschaftlich und hat die Seelsorge abgelöst, wie die Medizin den Exorzismus.`,
      objectionBy: 'Albert Ellis',
      targetsPremise: 3,
      answer: `Interessanterweise hat Ellis seine Sicht später revidiert und mit religiösen Kollegen einen Therapieansatz für gläubige Klienten entwickelt. Studien zeigen: Therapien, die den Glauben einbeziehen, sind mindestens so wirksam wie Standardtherapien. Und Seelsorge beantwortet Fragen, die Therapie nicht beantworten kann: Bin ich vergeben? Hat mein Leiden einen Sinn? Gibt es Hoffnung über den Tod hinaus?`,
      sources: [ellis1980, nielsenEllis2001, anderson2015],
      followUps: [
        {
          id: 'religious-trauma',
          objection: `Religiöse Seelsorge verursacht sogar Schaden – Marlene Winell spricht vom „Religious Trauma Syndrome".`,
          objectionBy: 'Marlene Winell',
          answer: `Religiöser Missbrauch ist real und muss benannt werden; Betroffenen gilt zuerst unser Zuhören. Aber „Religious Trauma Syndrome" ist keine anerkannte Diagnose, und die Gesamtdatenlage zeigt im Durchschnitt das Gegenteil: Regelmäßige religiöse Praxis geht mit weniger Depression und Suizid einher. Entscheidend ist der Unterschied zwischen gesunder und missbräuchlicher Religiosität.`,
          sources: [{ kind: 'wissenschaft', author: 'Tyler J. VanderWeele u. a.', work: '„Association Between Religious Service Attendance and Lower Suicide Rates Among US Women", JAMA Psychiatry 73 (8), S. 845–851', year: '2016', status: 'paraphrase' }],
          followUps: [
            {
              id: 'priester-unprofessionell',
              objection: `Priester sind keine ausgebildeten Therapeuten. Eine Beichte kann einen traumatisierten Menschen retraumatisieren.`,
              objectionBy: 'Darrel Ray',
              answer: `Einverstanden: Ein Priester ist kein Therapeut, und er soll es auch nicht spielen. Die Beichte ist ein Sakrament der Umkehr und Vergebung, keine Traumatherapie. Ein guter Beichtvater erkennt, wann jemand ärztliche oder therapeutische Hilfe braucht, und ermutigt dazu. Gerade deshalb ist die Zusammenarbeit von Seelsorgern und Fachleuten so wichtig.`,
              followUps: [
                {
                  id: 'vergebungsdruck',
                  objection: `Kirchen setzen Opfer unter Druck, ihren Tätern zu vergeben. Das schadet.`,
                  objectionBy: 'Marlene Winell',
                  answer: `Wo das geschieht, ist es falsch. Christliche Vergebung heißt nicht, Unrecht zu verharmlosen, den Täter zu schützen oder sich ohne Umkehr zu versöhnen. Der Vergebungsforscher Everett Worthington unterscheidet die Entscheidung, nicht zu vergelten, von einem emotionalen Prozess, der Zeit braucht – und Schutz und Gerechtigkeit für Opfer bleiben Pflicht. Richtig verstanden befreit Vergebung, statt zu belasten.`,
                  sources: [{ kind: 'fachliteratur', author: 'Everett L. Worthington Jr.', work: 'Forgiving and Reconciling', year: '2003', status: 'paraphrase' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'therapie-wertneutral',
      objection: `Psychotherapie ist wertneutral. Religion gehört nicht in die Therapie.`,
      objectionBy: 'Säkularer Psychotherapeut',
      targetsPremise: 3,
      answer: `Keine Therapie ist wertneutral – das hat der Psychologe Allen Bergin schon 1980 in einer viel beachteten Arbeit gezeigt. Jede Therapie hat Vorstellungen davon, was ein gelingendes Leben ist. Die Berufsverbände verlangen heute ausdrücklich, die Religion von Klienten als Teil ihrer Identität zu respektieren. Und wer die Werte seines Klienten einbezieht, erzielt oft bessere Ergebnisse.`,
      sources: [bergin1980],
      followUps: [
        {
          id: 'bergin-veraltet',
          objection: `Bergin ist von 1980. Das ist veraltet.`,
          objectionBy: 'Säkularer Psychotherapeut',
          answer: `Seine Grundeinsicht wurde seither ausgebaut: Kenneth Pargament entwickelte die spirituell integrierte Psychotherapie; Metaanalysen der 2010er-Jahre zeigen die Wirksamkeit glaubensangepasster Therapien; Leitlinien zur kultursensiblen Psychotherapie nennen Religion ausdrücklich. Bergin war ein Anfang, kein Endpunkt.`,
          sources: [{ kind: 'wissenschaft', author: 'Kenneth I. Pargament', work: 'Spiritually Integrated Psychotherapy: Understanding and Addressing the Sacred', year: '2007', status: 'paraphrase' }, anderson2015],
          followUps: [
            {
              id: 'therapeuten-missionieren',
              objection: `Christliche Therapeuten nutzen die Therapie doch nur, um ihre Klienten zu missionieren.`,
              objectionBy: 'Darrel Ray',
              answer: `Das verbieten die Berufsordnungen – zu Recht. Ein christlicher Therapeut darf seine Weltanschauung nicht aufdrängen; Integration geschieht nur, wenn der Klient sie wünscht. Derselbe Maßstab gilt übrigens für säkulare Therapeuten: Auch sie dürfen gläubigen Klienten ihren Atheismus nicht überstülpen.`,
              followUps: [
                {
                  id: 'religion-placebo',
                  objection: `Die Wirkung religiöser Elemente in der Therapie ist doch bloß ein Placebo-Effekt.`,
                  objectionBy: 'Jerry Coyne',
                  answer: `In der Psychotherapie ist Sinngebung kein Placebo, sondern ein Wirkfaktor: Menschen genesen besser, wenn ihr Leiden in einen tragenden Sinnzusammenhang eingebettet ist. Aber ich behaupte nicht, dass die Wirksamkeit den Glauben beweist – Nutzen ist kein Wahrheitsbeweis. Die Wahrheitsfrage entscheidet sich an anderen Gründen: an Gott als Ursprung der Welt und an der Auferstehung Jesu.`,
                  questionsBack: [`Würdest du auch Sinnfindung in einer säkularen Therapie als Placebo bezeichnen?`],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'koptisches-stigma',
      objection: `Gerade in traditionellen Kirchen wie der koptischen gilt psychische Krankheit als Schande. Man geht zum Priester statt zum Psychiater.`,
      objectionBy: 'Kritiker aus der Diaspora',
      answer: `Das Stigma gibt es – in vielen Kulturen, auch in manchen koptischen Familien, und das muss man ehrlich sagen. Aber es ist ein kulturelles Problem, keine Lehre der Kirche. Die koptische Tradition ehrt die Medizin: Sie verehrt heilige Ärzte wie Kyros und Johannes, ihr heutiger Papst Tawadros II. ist Apotheker, Basilius' Regel zur Heilkunst gehört zum gemeinsamen Erbe. Psychische Krankheit ist keine Sünde.`,
      followUps: [
        {
          id: 'offizielle-stellungnahme',
          objection: `Gibt es denn eine offizielle koptische Erklärung, die Psychiatrie und Psychotherapie befürwortet?`,
          objectionBy: 'Kritiker aus der Diaspora',
          answer: `Ein eigenes Konzilsdokument kenne ich nicht, und ich will nichts behaupten, was ich nicht belegen kann. Was es gibt, ist eine durchgehende Tradition: die Lehre der Väter zur Heilkunst, die Unterscheidung körperlicher und geistlicher Ursachen, die Verehrung heiliger Ärzte, und eine Praxis, in der Beichtväter zur ärztlichen Behandlung ermutigen. In der COVID-19-Pandemie folgte die Kirche den Gesundheitsbehörden und setzte Gottesdienste aus – Gesundheit ist ihr kein Gegner.`,
          followUps: [
            {
              id: 'stigma-schadet',
              objection: `Solange dieses Stigma in den Gemeinden bleibt, schadet die Kirche psychisch Kranken.`,
              objectionBy: 'Kritiker aus der Diaspora',
              answer: `Da stimme ich dir zu – und deshalb ist es Aufgabe der Gemeinden, das Stigma zu überwinden. Jesus wandte sich gerade den Ausgestoßenen zu: Aussätzigen, Besessenen, Verachteten. Eine Gemeinde, die Kranke beschämt, handelt gegen ihren eigenen Herrn. Viele koptische Gemeinden und christliche Fachleute arbeiten heute daran, dass niemand sich schämen muss, Hilfe zu suchen.`,
              followUps: [
                {
                  id: 'schuldgefuehle-krank',
                  objection: `Religion erzeugt Schuldgefühle, und Schuldgefühle machen krank.`,
                  objectionBy: 'Sigmund Freud',
                  answer: `Man muss gesunde Schuld von krankhafter unterscheiden. Ein Gewissen, das auf echtes Unrecht reagiert, ist gesund – die Psychologie nennt das Schuldfähigkeit. Krankhaft ist ein zwanghaftes, nie zur Ruhe kommendes Schuldgefühl (Skrupulosität). Die orthodoxe Tradition versteht Buße als Heilung, nicht als Selbstquälerei: In der Beichte wird Schuld ausgesprochen und vergeben. Ausführlich im Claim über Schuldgefühle.`,
                  sources: [{ kind: 'bibel', work: '1. Johannes', ref: '1,9', quote: `So wir aber unsre Sünden bekennen, so ist er treu und gerecht, daß er uns die Sünden vergibt und reinigt uns von aller Untugend.`, translation: 'Luther 1912', status: 'verbatim' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Würdest du einem Christen mit gebrochenem Bein sagen, er brauche nur mehr Glauben?`,
    `Warum gab Gott dem verzweifelten Elia zuerst Schlaf und Brot?`,
    `Welche Therapie beantwortet die Frage, ob ein Mensch vergeben ist?`,
    `Ist irgendeine Psychotherapie wirklich wertneutral?`,
    `Wenn glaubensintegrierte Therapien mindestens so gut wirken – warum sollte man den Glauben aus der Therapie verbannen?`,
  ],
  avoid: [
    `„Ein richtiger Christ wird nicht depressiv" – falsch und verletzend; auch Heilige und Propheten kannten tiefe Niedergeschlagenheit.`,
    `Medikamente oder Psychotherapie pauschal verdächtigen.`,
    `Jede psychische Erkrankung als dämonisch deuten.`,
    `Aus dem gesundheitlichen Nutzen des Glaubens seine Wahrheit ableiten.`,
  ],
  concessions: [
    `In manchen Gemeinden – auch koptischen – ist psychische Krankheit noch mit Scham behaftet.`,
    `Religiöser Missbrauch und angstbesetzte Frömmigkeit können seelisch schaden.`,
    `Priester sind keine Therapeuten; sie brauchen Schulung, um Erkrankungen zu erkennen und weiterzuverweisen.`,
  ],
  furtherReading: [
    larchet2005,
    { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna Benner Carson', work: 'Handbook of Religion and Health (2. Aufl.)', year: '2012', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Siang-Yang Tan', work: 'Counseling and Psychotherapy: A Christian Perspective', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Eric L. Johnson (Hg.)', work: 'Psychology and Christianity: Five Views', year: '2010', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Psychotherapie', 'Seelsorge', 'Depression', 'Psychiatrie', 'Beichte', 'Koenig', 'Larchet', 'Basilius'],
  related: ['psychologie/religion-schadet-psyche', 'psychologie/schuldgefuehle-schaedlich', 'psychiatrie/daemonen-sind-krankheiten', 'medizin-wunder/kirche-gegen-medizin', 'glaube-alltag-gesundheit/gebet-selbstgespraech'],
};

export default claim;
