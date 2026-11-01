import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'daemonen-sind-krankheiten',
  title: `„Dämonen sind nur unerkannte psychische Erkrankungen."`,
  proponents: [
    { name: 'Carl Sagan', role: 'Astronom und Wissenschaftspublizist (1934–1996)', work: 'The Demon-Haunted World (1995; dt. Der Drache in meiner Garage)' },
    { name: 'Stevan L. Davies', role: 'Religionswissenschaftler, Misericordia University', work: 'Jesus the Healer: Possession, Trance, and the Origins of Christianity (1995)' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"', work: 'Why People Believe Weird Things (1997)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The End of Faith (2004)' },
  ],
  steelman: `In der Antike galten Epilepsie, Psychosen, dissoziative Zustände und Tourette als Werk von Dämonen – heute erkennt die Medizin dahinter Krankheiten. Die Symptome im Neuen Testament passen genau: Der Junge in Mk 9 stürzt, hat Schaum vor dem Mund, knirscht mit den Zähnen und wird starr – ein epileptischer Anfall. Der Besessene von Gerasa haust in Grabhöhlen, verletzt sich selbst und spricht mit mehreren Stimmen („Legion") – das Bild einer schweren psychischen Störung. Das DSM-5 beschreibt ausdrücklich eine Form der dissoziativen Identitätsstörung, die in manchen Kulturen als Besessenheit erlebt wird. Exorzismen „wirken" durch Suggestion, Erwartung und das soziale Drama. Und der Glaube an Dämonen ist gefährlich: 1976 starb Anneliese Michel in Klingenberg am Main nach monatelangen Exorzismen, obwohl sie wegen Epilepsie behandelt worden war. Dämonen sind ein vorwissenschaftliches Erklärungsmodell, das in einer aufgeklärten Welt nichts verloren hat.`,
  biblical: {
    summary: `Die Evangelien setzen Krankheit und Besessenheit gerade **nicht** gleich. Matthäus zählt nebeneinander auf: „allerlei Kranke … die Besessenen, die Mondsüchtigen und die Gichtbrüchigen" (Mt 4,24) – drei verschiedene Gruppen. Markus unterscheidet: Jesus „half vielen Kranken … und trieb viele Teufel aus" (Mk 1,34). Lukas, selbst Arzt (Kol 4,14), berichtet Heilungen durch Handauflegung und davon getrennt Dämonenaustreibungen (Lk 4,40–41). Jesus führt auch nicht jedes Leid auf Sünde oder Dämonen zurück (Joh 9,3). Zugleich gibt es Fälle, in denen die Symptome einer Krankheit ähneln und der Text dennoch von einem Geist spricht (Mk 9,17–27) – hier ist Ehrlichkeit gefragt.`,
    detail: `- **Mt 4,24 im Griechischen:** δαιμονιζομένους καὶ σεληνιαζομένους καὶ παραλυτικούς – „Besessene und Mondsüchtige (Epileptiker) und Gelähmte". Der Evangelist kennt also die Epilepsie als eigene Kategorie.
- **Mt 17,15** nennt den Jungen aus Mk 9 „mondsüchtig" und berichtet zugleich, dass Jesus den Dämon ausfährt (17,18). Die Bibel behauptet nicht, Epilepsie sei immer dämonisch; sie berichtet einen konkreten Fall, in dem beides zusammenkommt.
- **Erkenntnis der Dämonen:** Die Besessenen erkennen Jesus als „den Heiligen Gottes" (Mk 1,24; 5,7), bevor seine Identität öffentlich bekannt ist.
- **Jak 5,14–15:** Gebet und Salbung durch die Ältesten bei Krankheit – kein Exorzismus, sondern Fürbitte und Fürsorge.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '4,24', quote: `Und sein Gerücht erscholl in das ganze Syrienland. Und sie brachten zu ihm allerlei Kranke, mit mancherlei Seuchen und Qual behaftet, die Besessenen, die Mondsüchtigen und die Gichtbrüchigen; und er machte sie alle gesund.`, original: `δαιμονιζομένους καὶ σεληνιαζομένους καὶ παραλυτικούς`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '1,32–34', quote: `Am Abend aber, da die Sonne untergegangen war, brachten sie zu ihm allerlei Kranke und Besessene. Und die ganze Stadt versammelte sich vor der Tür. Und er half vielen Kranken, die mit mancherlei Seuchen beladen waren, und trieb viele Teufel aus und ließ die Teufel nicht reden; denn sie kannten ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '4,40–41', quote: `Und da die Sonne untergegangen war, alle die, so Kranke hatten mit mancherlei Seuchen, brachten sie zu ihm. Und er legte auf einen jeglichen die Hände und machte sie gesund. Es fuhren auch die Teufel aus von vielen, schrieen und sprachen: Du bist Christus, der Sohn Gottes! Und er bedrohte sie und ließ sie nicht reden; denn sie wußten, daß er Christus war.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche glaubt an die Wirklichkeit gefallener geistiger Mächte und an die Vollmacht Christi über sie; Gebete um Befreiung gehören zu ihrer Tradition. Ebenso klar ist: **Nicht jede Not ist dämonisch.** Die Kirche ehrt den Arzt (Sir 38,1–15), kennt das Sakrament der Krankensalbung und verehrt heilige Ärzte wie die alexandrinischen Märtyrer Kyros und Johannes. Die Wüstenväter lehrten die Unterscheidung der Geister und mahnten, Bedrängte nicht zu verachten. Verantwortliche Seelsorge heute bedeutet: zuerst ärztliche und psychiatrische Abklärung, Gebet und Behandlung gemeinsam, niemals Gewalt, Zwang oder Verzicht auf medizinische Hilfe.`,
    detail: `- **Antonius** lehrte nach der Vita des Athanasius (Kap. 21–43), dass Christen die Dämonen nicht fürchten müssen, weil Christus sie entmachtet hat; ihr Kennzeichen seien Verwirrung und Furcht.
- **Johannes Cassian** überliefert in den Collationes (VII, Abba Serenus) die Lehre der ägyptischen Väter über Bedrängte: Man solle sie nicht verachten, sondern für sie beten.
- **Sir 38,1–4.12:** „Ehre den Arzt … der HERR lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht … lass den Arzt zu dir, denn der HERR hat ihn geschaffen."`,
    sources: [
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–4', status: 'paraphrase', quote: `Ehre den Arzt mit gebührender Verehrung, dass du ihn hast, wenn du ihn brauchst; denn der HERR hat ihn geschaffen … Der HERR lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht.`, note: 'Deuterokanonisch, in der koptischen Kirche Teil der Schrift.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 21–43', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'VII (Abba Serenus)', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Psychiatrie ordnet Zustände, die als „Besessenheit" erlebt oder gedeutet werden, überwiegend dissoziativen Störungen, Psychosen, Epilepsie, Persönlichkeitsstörungen oder kulturgebundenen Trancezuständen zu. Das DSM-5 erwähnt Besessenheit ausdrücklich im Kriterium der dissoziativen Identitätsstörung; die ICD-11 kennt die „Besessenheits-Trance-Störung" (6B63). Exorzismen können schaden, wenn sie notwendige Behandlung verzögern. Eine kleine Zahl von Psychiatern (u. a. M. Scott Peck, Richard Gallagher) berichtet von seltenen Fällen mit Merkmalen, die sie psychiatrisch nicht erklären konnten (Kenntnis verborgener Dinge, unbekannte Sprachen, außergewöhnliche Kraft); diese Berichte sind kasuistisch und nicht unter kontrollierten Bedingungen geprüft.`,
    detail: `- **DSM-5, dissoziative Identitätsstörung, Kriterium A:** Störung der Identität mit zwei oder mehr unterscheidbaren Persönlichkeitszuständen, die in manchen Kulturen als Erfahrung von Besessenheit beschrieben werden kann.
- **ICD-11, 6B63 Possession trance disorder:** Trancezustände, in denen die gewohnte Identität durch eine äußere „besitzende" Identität ersetzt erlebt wird, außerhalb kulturell oder religiös akzeptierter Praxis und mit Leidensdruck oder Beeinträchtigung.
- **Anneliese Michel (1952–1976):** Studentin aus Klingenberg am Main, wegen Epilepsie behandelt; nach zahlreichen Exorzismen 1975/76 starb sie an Unterernährung und Entkräftung. Das Landgericht Aschaffenburg verurteilte 1978 die Eltern und zwei Priester wegen fahrlässiger Tötung zu Bewährungsstrafen.
- **Traditionelle Kriterien:** Das römische Rituale (1614) nannte als Hinweise u. a. das Sprechen oder Verstehen unbekannter Sprachen, das Offenbaren verborgener oder entfernter Dinge und Kräfte, die Alter und Zustand übersteigen – die Kirche selbst forderte Vorsicht und Abgrenzung von Krankheit.`,
    sources: [
      { kind: 'wissenschaft', author: 'American Psychiatric Association', work: 'DSM-5, Dissoziative Identitätsstörung, Kriterium A', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Weltgesundheitsorganisation', work: 'ICD-11, 6B63 Possession trance disorder', year: '2019/2022', status: 'paraphrase' },
      { kind: 'gegner', author: 'Stevan L. Davies', work: 'Jesus the Healer: Possession, Trance, and the Origins of Christianity', year: '1995', status: 'paraphrase' },
      { kind: 'gegner', author: 'Carl Sagan', work: 'The Demon-Haunted World: Science as a Candle in the Dark', year: '1995', status: 'paraphrase' },
      { kind: 'konzil', work: 'Rituale Romanum, De exorcizandis obsessis a daemonio', year: '1614', status: 'paraphrase', quote: `Zeichen der Besessenheit können sein: in einer unbekannten Sprache viele Worte sprechen oder einen Sprechenden verstehen, Entferntes und Verborgenes kundtun, Kräfte zeigen, die das Alter oder die natürliche Verfassung übersteigen.`, note: 'Römisch-katholische Quelle; hier nur als Beleg für traditionelle Unterscheidungskriterien, nicht als Lehrautorität.' },
    ],
  },
  quickAnswer: `Die meisten Menschen, die man früher für „besessen" hielt, waren krank – das sollen Christen offen zugeben, und dann gehört der Mensch zum Arzt. Aber schon Jesus unterschied ausdrücklich zwischen Kranken, Mondsüchtigen und Besessenen (Mt 4,24), heilte die einen und trieb bei den anderen Dämonen aus. Und erfahrene Psychiater wie M. Scott Peck oder der New Yorker Psychiatrieprofessor Richard Gallagher, die selbst sagen, dass fast alle Fälle psychische Erkrankungen sind, berichten von seltenen Fällen, die sie psychiatrisch nicht erklären konnten. Dass vieles Krankheit ist, beweist nicht, dass alles Krankheit ist.`,
  keyPoints: [
    `**Zugeständnis:** Die große Mehrheit vermeintlicher Besessenheit ist psychische oder neurologische Krankheit. Wer das bestreitet, schadet Menschen.`,
    `**Die Bibel unterscheidet selbst:** Kranke, Mondsüchtige (Epileptiker) und Besessene werden getrennt genannt (Mt 4,24; Mk 1,34; Lk 4,40–41).`,
    `**„Vieles" ist nicht „alles":** Aus der Tatsache, dass viele Fälle Krankheit sind, folgt nicht, dass es keine geistige Wirklichkeit gibt.`,
    `**Erfahrene Psychiater berichten Ausnahmen:** Peck und Gallagher – beide kritisch und medizinisch geschult – schildern seltene Fälle mit Merkmalen jenseits psychiatrischer Erklärung.`,
    `**Medizin ist christlich:** Sir 38, Lukas der Arzt, die heiligen Ärzte – Behandlung und Gebet gehören zusammen.`,
    `**Missbrauch ist Sünde:** Fälle wie Anneliese Michel zeigen, was geschieht, wenn medizinische Hilfe versäumt wird – das widerspricht dem Evangelium.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Arzt und Evangelist',
      text: `Lukas, der Arzt, berichtet in seinem Evangelium sorgfältig getrennt: Jesus legt Kranken die Hände auf und heilt sie; aus anderen fahren Dämonen aus, die ihn als Sohn Gottes erkennen (Lk 4,40–41). Er beschreibt Krankheiten mit medizinischer Genauigkeit (etwa das „hohe Fieber" der Schwiegermutter des Petrus, Lk 4,38) und erzählt in der Apostelgeschichte auch von gescheiterten, missbräuchlichen Exorzismen (Apg 19,13–16). Für Lukas ist die Unterscheidung von Krankheit und Besessenheit kein naiver Volksglaube, sondern Teil eines nüchternen Berichts.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '4,38–41', status: 'paraphrase' },
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '19,13–16', status: 'paraphrase' },
      ],
    },
    {
      person: 'm-scott-peck',
      role: 'als Psychiater',
      text: `M. Scott Peck, Psychiater und Autor des Weltbestsellers „The Road Less Traveled", war lange skeptisch gegenüber der Vorstellung von Besessenheit. Er wollte, wie er berichtet, einen echten Fall finden, um die Idee zu widerlegen. In „People of the Lie" und später in „Glimpses of the Devil" schildert er zwei Fälle, bei denen er an Exorzismen teilnahm und Phänomene erlebte, die er mit seinen psychiatrischen Kategorien nicht erklären konnte. Peck betonte zugleich, dass echte Besessenheit sehr selten sei und die allermeisten Fälle psychiatrisch zu behandeln seien.`,
      sources: [
        { kind: 'fachliteratur', author: 'M. Scott Peck', work: 'People of the Lie: The Hope for Healing Human Evil', year: '1983', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'M. Scott Peck', work: 'Glimpses of the Devil: A Psychiatrist\'s Personal Accounts of Possession, Exorcism, and Redemption', year: '2005', status: 'paraphrase' },
      ],
    },
    {
      person: 'richard-gallagher',
      role: 'als Psychiater, der seit Jahrzehnten Fälle für Exorzisten begutachtet',
      text: `Richard Gallagher, Professor für klinische Psychiatrie in New York, begutachtet seit Jahrzehnten Menschen, die als besessen gelten, im Auftrag von Seelsorgern. In einem vielbeachteten Beitrag für die Washington Post (2016) und in seinem Buch „Demonic Foes" (2020) beschreibt er, dass er die große Mehrheit dieser Menschen als psychisch krank einstuft und an Ärzte verweist. In wenigen Fällen habe er jedoch Phänomene beobachtet – etwa Kenntnis von Dingen, die die Person nicht wissen konnte, oder das Sprechen von Sprachen, die sie nie gelernt hatte –, die er mit keiner psychiatrischen Diagnose erklären könne. Gallagher versteht sich als Wissenschaftler, der seine Beobachtungen offenlegt, auch wenn sie unbequem sind.`,
      sources: [
        { kind: 'sonstiges', author: 'Richard Gallagher', work: 'As a psychiatrist, I diagnose mental illness. Also, I help spot demonic possession.', ref: 'The Washington Post, 1. Juli 2016', year: '2016', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Richard Gallagher', work: 'Demonic Foes: My Twenty-Five Years as a Psychiatrist Investigating Possessions, Diabolic Attacks, and the Paranormal', year: '2020', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Antonius der Große ist in der koptischen Tradition der Kämpfer gegen die Dämonen schlechthin – aber seine Lehre ist erstaunlich unaufgeregt. In seiner langen Rede an die Mönche (Vita Antonii 21–43) betont er, dass die Dämonen seit Christus machtlos sind und nur durch Furcht und Täuschung wirken. Christen sollen sich nicht vor ihnen ängstigen und keine Visionen suchen, sondern in Gebet, Demut und Freude leben. Das Gegenteil einer Dämonenfixierung: Christus steht im Mittelpunkt, nicht der Feind.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 21–43', status: 'paraphrase' },
      ],
    },
    {
      person: 'johannes-cassian',
      role: 'als Überlieferer der ägyptischen Väter',
      text: `Cassian überliefert in seinen Unterredungen das Gespräch mit Abba Serenus über die geistigen Mächte. Die ägyptischen Väter unterschieden darin verschiedene Arten von Bedrängnis und warnten davor, Menschen, die von solchen Zuständen betroffen sind, zu verachten oder auszugrenzen; man solle vielmehr für sie beten. Diese Haltung – Ernst gegenüber der geistigen Dimension, Barmherzigkeit gegenüber den Betroffenen – ist das Gegenteil sowohl naiver Dämonensucht als auch rationalistischer Verachtung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'VII', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'mk9-epilepsie',
      objection: `Mk 9: Der Junge stürzt, schäumt, knirscht mit den Zähnen und wird starr. Das ist ein epileptischer Anfall – und Jesus behandelt ihn als Dämon. Jesus hielt Epilepsie für Besessenheit.`,
      objectionBy: 'Carl Sagan',
      answer: `Die Symptome ähneln einem Anfall, das stimmt. Aber Matthäus nennt an anderer Stelle Mondsüchtige (Epileptiker) und Besessene als zwei getrennte Gruppen (Mt 4,24) – die Evangelisten setzten Epilepsie also nicht generell mit Besessenheit gleich. In diesem einen Fall berichten sie, dass ein Geist die Anfälle verursachte. Christen sollten daraus nie schließen, Epilepsie sei dämonisch – das wäre falsch und grausam. Epilepsie ist eine neurologische Krankheit und wird medizinisch behandelt.`,
      questionsBack: [`Warum nennt Matthäus in 4,24 Besessene und Mondsüchtige getrennt, wenn er beides für dasselbe hielt?`],
      followUps: [
        {
          id: 'ad-hoc-unterscheidung',
          objection: `Das ist ad hoc: Wenn's passt, ist es Krankheit, wenn nicht, Dämon. So kann man jede Beobachtung einordnen.`,
          objectionBy: 'Michael Shermer',
          answer: `Die Unterscheidung beruht auf Kriterien, nicht auf Bequemlichkeit: Zuerst kommt immer die medizinische Abklärung, und die allermeisten Fälle bleiben dort. Erst wenn Merkmale auftreten, die über jede bekannte Krankheit hinausgehen, und die Behandlung nicht greift, stellt sich die geistliche Frage überhaupt. So arbeiten auch Psychiater wie Gallagher. Die Bibel selbst unterscheidet, sie vermischt nicht.`,
          followUps: [
            {
              id: 'welche-kriterien',
              objection: `Welche Kriterien? Nenne ein einziges überprüfbares.`,
              objectionBy: 'Carl Sagan',
              answer: `Die traditionellen Kriterien sind im Prinzip überprüfbar: das Sprechen oder Verstehen einer Sprache, die der Betroffene nie gelernt hat; Kenntnis verborgener oder entfernter Dinge, die er nicht wissen kann; Kräfte, die weit über seine körperlichen Möglichkeiten hinausgehen. Gallagher berichtet von Fällen, in denen er solche Phänomene selbst beobachtet habe. Ich gebe zu: Es gibt nur wenige gut dokumentierte Fälle.`,
              followUps: [
                {
                  id: 'nie-kontrolliert',
                  objection: `Kein einziger dieser Fälle wurde unter kontrollierten Bedingungen dokumentiert – wie bei allen paranormalen Behauptungen.`,
                  objectionBy: 'Carl Sagan',
                  answer: `Das stimmt: Es gibt keine Laborstudie, und Exorzismen finden in seelsorglichen, nicht in experimentellen Situationen statt. Das Zeugnis erfahrener Kliniker ist ein Beleg, kein Beweis. Mein Glaube an eine geistige Wirklichkeit gründet aber nicht auf solchen Fällen, sondern auf der Person und Autorität Christi, dessen Auferstehung ich für historisch gut begründet halte. Und ich behaupte nicht mehr, als die Daten tragen: Echte Besessenheit ist – wenn es sie gibt – sehr selten.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'anneliese-michel',
      objection: `Der Glaube an Dämonen tötet. Anneliese Michel starb 1976 nach Dutzenden Exorzismen, abgemagert und entkräftet – obwohl sie Epileptikerin war.`,
      objectionBy: 'Sam Harris',
      answer: `Das ist eine Tragödie, und ich verteidige nichts daran. Das Gericht in Aschaffenburg verurteilte die Eltern und zwei Priester 1978 wegen fahrlässiger Tötung. Die richtige Lehre daraus ist: Medizinische Behandlung ist nie verzichtbar – „Ehre den Arzt … denn der HERR hat ihn geschaffen" (Sir 38,1). Gebet ersetzt keinen Arzt, und wer einem kranken Menschen notwendige Hilfe vorenthält, sündigt.`,
      followUps: [
        {
          id: 'daemonenlehre-abschaffen',
          objection: `Dann ist die Dämonenlehre gefährlich und gehört abgeschafft.`,
          objectionBy: 'Sam Harris',
          answer: `Missbrauch hebt den rechten Gebrauch nicht auf: Auch in der Medizin gibt es tödliche Behandlungsfehler, und niemand schafft deshalb die Medizin ab. Die verantwortliche Antwort ist, beides zusammenzuhalten: ärztliche Abklärung und Behandlung zuerst, Gebet und seelsorgliche Begleitung dazu, niemals Zwang. Genau so arbeitet ein Psychiater wie Gallagher mit Seelsorgern zusammen.`,
          followUps: [
            {
              id: 'hexenkinder',
              objection: `Und was ist mit Kindern, die in manchen Ländern als „Hexen" gequält werden – im Namen Jesu?`,
              objectionBy: 'Sam Harris',
              answer: `Das ist grauenhaft und ein Verrat am Evangelium. Jesus hat Besessene nie gequält oder ausgestoßen – er befreite sie und gab sie ihren Familien zurück (Mk 5,19). Kirchenleitungen müssen solche Praktiken klar verurteilen und Kinder schützen. Wer im Namen Christi Kinder misshandelt, handelt gegen Christus.`,
            },
          ],
        },
      ],
    },
    {
      id: 'peck-gallagher-befangen',
      objection: `Peck und Gallagher sind Einzelstimmen mit religiöser Voreinstellung. Peck war später theologisch ziemlich exzentrisch und persönlich nicht gerade ein Vorbild.`,
      objectionBy: 'Michael Shermer',
      answer: `Beide hatten eine weltanschauliche Haltung, das gebe ich zu, und Peck ist keine theologische Autorität. Aber beide sind ausgebildete Psychiater, die selbst sagen, dass die allermeisten Fälle Krankheit sind – sie sind also nicht leichtgläubig. Ihre Berichte stehen und fallen mit den beobachteten Phänomenen, nicht mit ihrer Biografie. Und ebenso wenig wie ihr Glaube ihre Beobachtungen beweist, widerlegt er sie.`,
      followUps: [
        {
          id: 'xenoglossie-erinnerungsfehler',
          objection: `Xenoglossie und Hellwissen sind nie wissenschaftlich bestätigt worden. Das sind Erinnerungsfehler, Suggestion oder Betrug.`,
          objectionBy: 'Michael Shermer',
          answer: `Das ist in vielen Fällen sicher so. Gallagher betont allerdings, dass er manche Phänomene zusammen mit mehreren anderen Zeugen erlebt habe. Ich behaupte nicht, das sei ein wissenschaftlicher Beweis – sondern dass die Möglichkeit offen bleibt und man sie nicht durch eine Vorentscheidung ausschließen sollte.`,
          followUps: [
            {
              id: 'aussergewoehnlich',
              objection: `Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege.`,
              objectionBy: 'Carl Sagan',
              answer: `Einverstanden – deshalb halte ich Besessenheit für selten und behandle jeden Einzelfall zuerst medizinisch. Was als „außergewöhnlich" gilt, hängt allerdings vom Weltbild ab: Wer eine geistige Wirklichkeit aus anderen Gründen für möglich hält, wird solche Berichte anders gewichten. Die Grundfrage ist also nicht die Psychiatrie, sondern ob es Gott und eine geistige Welt gibt.`,
              detail: `Siehe A8, ‚atheismus/aussergewoehnliche-belege'.`,
            },
          ],
        },
      ],
    },
    {
      id: 'dis-kultur',
      objection: `Das DSM-5 ordnet Besessenheit der dissoziativen Identitätsstörung zu – einer kulturell geformten Reaktion auf Trauma. Jesus war ein erfolgreicher Heiler dissoziativer Zustände, mehr nicht.`,
      objectionBy: 'Stevan L. Davies',
      answer: `Viele Besessenheitsphänomene sind dissoziativ, das gebe ich zu – und solche Menschen brauchen traumasensible Behandlung. Bemerkenswert ist, dass selbst du anerkennst, dass Jesus tatsächlich als Heiler und Exorzist wirkte. Die Frage ist, ob Dissoziation alles erklärt – etwa, dass die Besessenen Jesus als „den Heiligen Gottes" erkannten, bevor seine Identität öffentlich war (Mk 1,24).`,
      followUps: [
        {
          id: 'literarisches-motiv',
          objection: `Dass die Dämonen Jesus erkennen, ist ein literarisches Motiv des Markus – das „Messiasgeheimnis".`,
          objectionBy: 'Stevan L. Davies',
          answer: `Markus mag das Motiv theologisch gestaltet haben. Aber dass Jesus als Exorzist bekannt war, gehört zu den am besten bezeugten Überlieferungen über ihn – selbst seine Gegner bestritten es nicht, sondern sagten, er treibe die Dämonen „durch Beelzebub" aus (Mk 3,22). Auch kritische Forscher wie E. P. Sanders oder Bart Ehrman halten es für historisch, dass Jesus als Exorzist wirkte. Wie man diese Wirkungen deutet, ist dann eine weltanschauliche Frage.`,
          sources: [
            { kind: 'bibel', work: 'Markus', ref: '3,22', quote: `Die Schriftgelehrten aber, die von Jerusalem herabgekommen waren, sprachen: Er hat den Beelzebub, und durch den Obersten der Teufel treibt er die Teufel aus.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum unterscheidet Matthäus Besessene und Mondsüchtige, wenn er beides für dasselbe hielt?`,
    `Folgt aus „viele Fälle sind Krankheit" logisch, dass „alle Fälle Krankheit sind"?`,
    `Wie erklärst du die Fälle, die selbst erfahrene, skeptische Psychiater nicht einordnen konnten?`,
    `Ist dein Ausschluss geistiger Wirklichkeit ein Ergebnis der Psychiatrie – oder eine Voraussetzung?`,
  ],
  avoid: [
    `Psychische Krankheiten als dämonisch bezeichnen oder Betroffene zu Exorzismen drängen – das ist gefährlich, stigmatisierend und unchristlich.`,
    `Hollywood-Filme oder sensationelle Internetvideos als Belege anführen.`,
    `Behaupten, Medikamente oder Psychotherapie seien bei geistlichen Problemen überflüssig.`,
    `Den Fall Anneliese Michel verteidigen oder verharmlosen.`,
  ],
  concessions: [
    `Die allermeisten Fälle, die als Besessenheit gedeutet werden, sind psychische oder neurologische Erkrankungen.`,
    `Exorzismen haben in der Geschichte Menschen geschadet und getötet, wenn medizinische Hilfe versäumt wurde.`,
    `Es gibt keine kontrollierte wissenschaftliche Dokumentation von Besessenheitsphänomenen; die Berichte sind kasuistisch.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Richard Gallagher', work: 'Demonic Foes', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'M. Scott Peck', work: 'Glimpses of the Devil', year: '2005', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase', note: 'Enthält einen umfangreichen Anhang zu Besessenheit und Exorzismus in verschiedenen Kulturen.' },
  ],
  difficulty: 2,
  tags: ['Dämonen', 'Besessenheit', 'Exorzismus', 'Epilepsie', 'dissoziative Störung', 'Anneliese Michel'],
  related: [
    'psychiatrie/propheten-psychisch-krank',
    'medizin-wunder/kirche-gegen-medizin',
    'okkultismus/spiritismus-harmlos',
    'esoterik-new-age/astrologie-heilsteine',
  ],
};

export default claim;
