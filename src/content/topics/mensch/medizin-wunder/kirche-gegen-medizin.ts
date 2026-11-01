import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kirche-gegen-medizin',
  title: `„Religion steht der Medizin im Weg."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist', work: 'God Is Not Great (2007), Kap. 4: „A Note on Health, to Which Religion Can Be Hazardous"' },
    { name: 'Andrew Dickson White', role: 'Historiker, Gründungspräsident der Cornell University', work: 'A History of the Warfare of Science with Theology in Christendom (1896)' },
    { name: 'Rita Swan', role: 'Gründerin von CHILD Inc. (Children\'s Healthcare Is a Legal Duty)', work: 'Asser & Swan, „Child fatalities from religion-motivated medical neglect", Pediatrics 101 (1998)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe', work: 'The God Delusion (2006)' },
  ],
  steelman: `Die Geschichte ist voller Beispiele: Geistliche wetterten gegen Pockenimpfung und Narkose bei der Geburt („unter Schmerzen sollst du Kinder gebären", Gen 3,16), die Kirche behinderte das Sezieren von Leichen, Krankheit galt als Strafe für Sünde oder als Werk von Dämonen. Bis heute sterben Kinder, weil Eltern lieber beten als einen Arzt rufen – eine Studie zählte 172 solcher Todesfälle in den USA zwischen 1975 und 1995 (Asser & Swan). Zeugen Jehovas verweigern Bluttransfusionen, in religiösen Gemeinschaften brechen Masern aus, weil Impfungen abgelehnt werden, und Kirchen bekämpfen Stammzellforschung und Verhütung. Die Medizin wurde in dem Maß erfolgreich, in dem sie religiöse Erklärungen durch natürliche ersetzte.`,
  biblical: {
    summary: `Die Bibel ehrt den Arzt ausdrücklich. Jesus Sirach (ein deuterokanonisches Buch des koptischen Kanons) gebietet: „Ehre den Arzt", denn „der Herr hat ihn geschaffen" und „lässt die Arznei aus der Erde wachsen"; der Kranke soll beten **und** den Arzt rufen (Sir 38,1–15). Lukas, der Verfasser von Evangelium und Apostelgeschichte, war Arzt (Kol 4,14). Jesus vergleicht sich selbst mit einem Arzt (Mt 9,12). Der barmherzige Samariter versorgt Wunden mit Öl und Wein, den Heilmitteln seiner Zeit (Lk 10,34). Jesaja verordnet König Hiskia ein Feigenpflaster (2 Kön 20,7), Paulus rät Timotheus zu etwas Wein für den Magen (1 Tim 5,23). Und das Gericht Jesu nennt als Kriterium: „Ich bin krank gewesen, und ihr habt mich besucht" (Mt 25,36).`,
    detail: `- **Sir 38,1–15**: Gebet, Reue und Opfer, „danach laß den Arzt zu dir" – Gebet und Medizin gehören zusammen; auch der Arzt bittet Gott um Gelingen seiner Kunst.
- **Lev 13–14**: Die Tora regelt Untersuchung, Isolation und Wiederzulassung bei ansteckenden Hautkrankheiten – frühe Seuchenhygiene.
- **Joh 9,2–3; Lk 13,1–5**: Jesus weist den automatischen Schluss von Krankheit auf persönliche Sünde ausdrücklich zurück.
- **Mt 4,24** unterscheidet Kranke, Besessene, „Mondsüchtige" (Epileptiker) und Gelähmte – nicht jede Krankheit gilt als dämonisch.
- **2 Chr 16,12** wird oft als Ärztekritik zitiert: König Asa suchte „nicht den HERRN, sondern die Ärzte". Getadelt wird das *Statt* – das Vertrauen auf Ärzte unter Ausschluss Gottes –, nicht der Arztbesuch an sich.`,
    sources: [
      { kind: 'bibel', work: 'Jesus Sirach', ref: '38,1–4.9–12', quote: `Ehre den Arzt, wie es ihm gebührt, damit du ihn hast, wenn du ihn brauchst; denn der Herr hat ihn geschaffen … Der Herr lässt die Arznei aus der Erde wachsen, und ein Vernünftiger verachtet sie nicht … Mein Kind, wenn du krank bist, so bete zum Herrn … danach lass den Arzt zu dir.`, translation: 'nach Luther 1912', status: 'paraphrase', note: 'Deuterokanonisch – Teil des koptisch-orthodoxen Kanons.' },
      { kind: 'bibel', work: 'Kolosser', ref: '4,14', quote: `Es grüßt euch Lukas, der Arzt, der Geliebte, und Demas.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '9,12', quote: `Die Starken bedürfen des Arztes nicht, sondern die Kranken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '10,34', quote: `… ging zu ihm, verband ihm seine Wunden und goß darein Öl und Wein und hob ihn auf sein Tier und führte ihn in die Herberge und pflegte sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '25,36', quote: `Ich bin krank gewesen, und ihr habt mich besucht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat das Krankenhaus als Einrichtung für alle hervorgebracht. Basilius der Große errichtete um 370 vor Caesarea eine große Anlage für Kranke, Arme und Aussätzige mit Ärzten und Pflegern, die Gregor von Nazianz als „neue Stadt" pries. Johannes Chrysostomus gründete Spitäler in Konstantinopel, in Rom die Christin Fabiola das erste öffentliche Krankenhaus des Westens. Die Kirche verehrt heilige Ärzte, die „Anargyroi" (Geldlose), die umsonst heilten: Kosmas und Damian sowie die in Ägypten besonders geliebten **Kyros (Abba Kyr) und Johannes**, deren Reliquien der hl. Kyrill von Alexandrien nach Menouthis bei Abu Qir überführte. Christliche Ärzte und Übersetzer wie Hunayn ibn Ishaq trugen das Wissen Galens in die arabische Medizin. Heute ist das Oberhaupt der koptischen Kirche, Papst Tawadros II., studierter Apotheker, der vor seinem Eintritt ins Kloster in der Arzneimittelherstellung arbeitete. Die Kirche spendet die Krankensalbung (Jak 5,14) **und** betreibt Krankenhäuser – Gebet und Medizin sind für sie Geschwister.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 43 (Grabrede auf Basilius)', ref: '63', year: '381', quote: `Gregor rühmt Basilius' Anlage vor der Stadt als „neue Stadt", in der Krankheit mit Geduld getragen, Elend in Segen verwandelt und Mitleid erprobt wird.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Regulae fusius tractatae', ref: 'Frage 55', quote: `Die Heilkunst ist eine Gabe Gottes; man darf sie gebrauchen, ohne die Hoffnung auf Gott aufzugeben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Hieronymus', work: 'Brief 77 (über Fabiola)', year: 'um 400', quote: `Fabiola gründete in Rom ein Krankenhaus, sammelte die Kranken von den Straßen und pflegte sie selbst.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Sophronius von Jerusalem', work: 'Wunderberichte der hll. Kyros und Johannes (Thaumata)', year: '7. Jh.', quote: `Sammlung von Heilungsberichten am Heiligtum der Ärzte-Märtyrer Kyros und Johannes in Menouthis bei Alexandrien.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die von Andrew Dickson White populär gemachte These eines „Krieges" zwischen Theologie und Wissenschaft wird von Wissenschaftshistorikern heute weitgehend abgelehnt (Ronald Numbers [Hg.], *Galileo Goes to Jail and Other Myths about Science and Religion*, 2009; Gary Ferngren, *Medicine and Health Care in Early Christianity*, 2009). Einzelne Beispiele erweisen sich als Mythen oder Verzerrungen: Der Widerstand von Geistlichen gegen die Narkose bei Geburten war nach A. D. Farr (1983) weitgehend ein Mythos; das Sezieren wurde an christlichen Universitäten (Bologna, Padua) ab dem 13./14. Jahrhundert praktiziert (Mondino de Luzzi, *Anathomia*, 1316); die Bulle *Detestande feritatis* (1299/1300) verbot das Auskochen von Leichen zum Transport der Gebeine, nicht die Anatomie. In Boston setzte sich 1721 der Pfarrer Cotton Mather – der die Methode von dem afrikanischen Sklaven Onesimus kannte – gegen den Widerstand der meisten Ärzte für die Pockenimpfung (Variolation) ein.`,
    detail: `**Was stimmt:** Religiös motivierte Behandlungsverweigerung kostet Leben. Asser und Swan (Pediatrics 1998) analysierten 172 Todesfälle von Kindern in den USA (1975–1995), deren Eltern aus religiösen Gründen keine medizinische Hilfe suchten; die meisten Erkrankungen wären gut behandelbar gewesen. Die betroffenen Gruppen (z. B. „Followers of Christ", Christian Science) lehnen Medizin ab – im Widerspruch zu Sir 38 und zur gesamten historischen Kirche. Auch Impfskepsis in manchen religiösen Gemeinschaften ist real.

**Was die Forschung außerdem zeigt:** Große prospektive Studien finden überwiegend positive Zusammenhänge zwischen religiöser Praxis und Gesundheit (geringere Sterblichkeit, weniger Depression und Suizid; Koenig, VanderWeele). Christliche Missionen gründeten weltweit Krankenhäuser und Ausbildungsstätten (z. B. das Christian Medical College in Vellore, Indien, hervorgegangen aus der Klinik der Missionsärztin Ida Scudder, ab 1900).`,
    sources: [
      { kind: 'fachliteratur', author: 'Gary B. Ferngren', work: 'Medicine and Health Care in Early Christianity', year: '2009', status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Ronald L. Numbers (Hg.)', work: 'Galileo Goes to Jail and Other Myths about Science and Religion', year: '2009', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'A. D. Farr', work: 'Religious opposition to obstetric anaesthesia: a myth?', ref: 'Annals of Science 40 (1983), 159–177', year: '1983', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Seth M. Asser & Rita Swan', work: 'Child fatalities from religion-motivated medical neglect', ref: 'Pediatrics 101 (1998), 625–629', year: '1998', status: 'paraphrase', note: 'Ehrlich anerkennen: reale Opfer religiös motivierter Behandlungsverweigerung.' },
      { kind: 'gegner', author: 'Andrew Dickson White', work: 'A History of the Warfare of Science with Theology in Christendom', year: '1896', status: 'paraphrase', note: 'Von der heutigen Wissenschaftsgeschichte weitgehend als polemisch und verzerrend beurteilt.' },
    ],
  },
  quickAnswer: `Das Krankenhaus für alle ist eine christliche Erfindung – Basilius gründete im 4. Jahrhundert eines der ersten. Lukas war Arzt, Sirach gebietet „Ehre den Arzt", die Kirche verehrt heilige Ärzte wie Kyros und Johannes aus Alexandrien, und der heutige koptische Papst ist Apotheker. Ja, es gibt traurige Fälle, in denen Menschen „aus Glauben" Behandlung verweigern – die Kirche verurteilt das, denn Gott wirkt auch durch Medizin. Und viele Geschichten vom „Krieg" der Kirche gegen die Medizin sind Mythen: Ein Pfarrer kämpfte 1721 in Boston für die Pockenimpfung – gegen die Ärzte.`,
  keyPoints: [
    `**Hospitäler sind christlich geprägt:** Basilius (um 370), Chrysostomus, Fabiola – Krankenpflege für Fremde und Arme als Gottesdienst.`,
    `**Die Bibel ehrt den Arzt:** Sir 38, Lukas der Arzt, der barmherzige Samariter; Jesus weist den Schluss „krank = sündig" zurück.`,
    `**Koptisches Erbe:** Die heiligen Ärzte Kyros und Johannes, christliche Ärzte und Übersetzer in der arabischen Medizin, ein Apotheker als Papst (Tawadros II.).`,
    `**Mythen entlarven:** Der „Krieg" zwischen Kirche und Medizin (A. D. White) gilt unter Historikern als Zerrbild; Beispiele wie Narkose oder Sezierverbot sind weitgehend Legenden.`,
    `**Ehrlich verurteilen:** Behandlungsverweigerung „aus Glauben" ist unbiblisch und kostet Leben; sie widerspricht der Lehre aller historischen Kirchen.`,
    `**Daten:** Religiöse Praxis geht in großen Studien überwiegend mit besserer Gesundheit einher.`,
  ],
  voices: [
    {
      person: 'lukas',
      role: 'als Arzt und Evangelist',
      text: `Lukas, den Paulus „den Arzt, den Geliebten" nennt, verband ärztliche Sorgfalt mit dem Zeugnis von Christus. In seinem Evangelium erzählt er das Gleichnis vom barmherzigen Samariter, der Wunden versorgt, und schildert Jesus als Heiland der Kranken. Die Kirche hat in ihm von Anfang an das Vorbild gesehen: Der Glaube nimmt den Arztberuf in Dienst, statt ihn zu verdrängen.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '10,30–37', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Gründer der „Basilias"',
      text: `Basilius selbst hatte Medizin studiert und war zeitlebens kränklich. Während einer Hungersnot organisierte er die Versorgung der Armen und errichtete vor Caesarea eine Anlage mit Unterkünften, Krankenstationen und Pflege für Aussätzige, die er persönlich besuchte. In seinen Regeln begründet er theologisch, dass die Heilkunst eine Gabe Gottes ist, deren Gebrauch der Frömmigkeit entspricht – solange man nicht vergisst, wem man die Heilung letztlich verdankt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Regulae fusius tractatae', ref: 'Frage 55', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 43', ref: '63', status: 'paraphrase' },
      ],
    },
    {
      person: 'kyros-johannes',
      role: 'als heilige Ärzte aus Ägypten',
      text: `Nach der Überlieferung war Kyros ein Arzt in Alexandrien, der Kranke unentgeltlich behandelte und sie zugleich zum Glauben an Christus führte; Johannes, ein Soldat, schloss sich ihm an. Beide erlitten in der Verfolgung unter Diokletian das Martyrium. Der hl. Kyrill von Alexandrien ließ ihre Reliquien nach Menouthis bringen, wo zuvor ein heidnischer Heilkult blühte; der Ort heißt bis heute nach „Abba Kyr" Abu Qir. Sie verkörpern die koptische Überzeugung, dass ärztliche Kunst und Heiligkeit zusammengehören.`,
      sources: [
        { kind: 'kirchenvater', author: 'Sophronius von Jerusalem', work: 'Lobrede und Wunderberichte der hll. Kyros und Johannes', year: '7. Jh.', status: 'paraphrase', note: 'Hagiographische Überlieferung; historische Einzelheiten unsicher.' },
      ],
    },
    {
      person: 'tawadros-ii',
      role: 'als Apotheker und Patriarch',
      text: `Papst Tawadros II. studierte Pharmazie an der Universität Alexandrien und arbeitete in der Arzneimittelherstellung, bevor er Mönch wurde. Seine Biografie zeigt anschaulich, was die koptische Kirche lehrt: Naturwissenschaftliche Medizin und geistliches Leben schließen einander nicht aus. Ein Kirchenoberhaupt, das selbst Arzneimittel hergestellt hat, ist die lebendige Widerlegung der These, Glaube stehe der Medizin im Weg.`,
      sources: [
        { kind: 'koptisch', work: 'Offizielle Biografie Papst Tawadros\' II. (Koptisch-orthodoxes Patriarchat)', status: 'paraphrase' },
      ],
    },
    {
      person: 'koenig',
      role: 'als Psychiater und Gesundheitsforscher',
      text: `Koenig hat mit Kollegen in mehreren Auflagen des *Handbook of Religion and Health* Tausende Studien ausgewertet. Die Mehrheit zeigt positive Zusammenhänge zwischen religiöser Beteiligung und psychischer wie körperlicher Gesundheit – etwa weniger Depression, weniger Suchtverhalten, höhere Lebenszufriedenheit. Er benennt zugleich negative Formen von Religiosität (Angst, Schuldfixierung, Behandlungsverweigerung) und plädiert für eine Zusammenarbeit von Medizin und Seelsorge.`,
      sources: [
        { kind: 'wissenschaft', author: 'Harold G. Koenig, Tyler J. VanderWeele, John R. Peteet', work: 'Handbook of Religion and Health (3. Aufl.)', year: '2024', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'historischer-krieg',
      objection: `Die Kirche hat Pockenimpfung, Narkose und das Sezieren von Leichen bekämpft – Andrew Dickson White hat das alles dokumentiert.`,
      objectionBy: 'Andrew Dickson White',
      answer: `Whites „Kriegsthese" gilt unter heutigen Wissenschaftshistorikern als polemisches Zerrbild. Der angebliche kirchliche Widerstand gegen Narkose bei Geburten war weitgehend ein Mythos (Farr 1983); Sektionen wurden an christlichen Universitäten seit dem Mittelalter durchgeführt; und in Boston kämpfte 1721 der Pfarrer Cotton Mather **für** die Pockenimpfung – gegen die Mehrheit der Ärzte.`,
      followUps: [
        {
          id: 'einzelne-geistliche',
          objection: `Aber einzelne Geistliche waren doch dagegen.`,
          answer: `Ja, einzelne – wie auch einzelne Ärzte gegen jede Neuerung waren. Neue Techniken stoßen immer auf Widerstand, oft aus Angst vor Risiken. Entscheidend ist: Die Lehre der Kirche war nie medizinfeindlich, und die Pioniere der modernen Medizin – von Pasteur bis zu den Missionsärzten – waren oft gläubige Christen.`,
        },
      ],
    },
    {
      id: 'beten-statt-arzt',
      objection: `Heute sterben noch Kinder, weil ihre Eltern lieber beten, als einen Arzt zu rufen. Asser und Swan haben 172 solcher Fälle in den USA gezählt.`,
      objectionBy: 'Rita Swan',
      answer: `Das ist erschütternd, und ich verurteile es ohne Wenn und Aber. Diese Gruppen widersprechen der Bibel (Sir 38: beten **und** den Arzt rufen) und der gesamten historischen Kirche. Die koptische Kirche spendet die Krankensalbung und schickt Kranke ins Krankenhaus – oft in eines, das sie selbst betreibt.`,
      followUps: [
        {
          id: 'zeugen-jehovas-blut',
          objection: `Und Zeugen Jehovas lassen ihre Kinder lieber sterben, als eine Bluttransfusion zu erlauben.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Die Deutung von Apg 15,29 als Transfusionsverbot wird von keiner historischen Kirche geteilt, und die Zeugen Jehovas lehnen auch zentrale christliche Lehren wie die Dreieinigkeit ab. Man kann die Medizinfeindlichkeit einer Sondergruppe nicht „der Religion" oder dem Christentum insgesamt anlasten. Fairerweise: Ihre Haltung hat die Entwicklung blutsparender Operationstechniken gefördert.`,
        },
        {
          id: 'koenig-asa',
          objection: `Die Bibel selbst tadelt König Asa, weil er Ärzte aufsuchte (2 Chr 16,12).`,
          objectionBy: 'Bibelkritiker',
          answer: `Lies genau: Asa „suchte nicht den HERRN, sondern die Ärzte". Getadelt wird das Vertrauen auf Ärzte **anstelle** von Gott, nicht der Arztbesuch. Dieselbe Bibel sagt in Sir 38 ausdrücklich: Bete zum Herrn, und dann lass den Arzt zu dir.`,
        },
      ],
    },
    {
      id: 'daemonen-und-suende',
      objection: `Religion erklärt Krankheit mit Dämonen und Sünde. Das hat die Medizin jahrhundertelang aufgehalten.`,
      objectionBy: 'Sam Harris',
      answer: `Die Bibel selbst unterscheidet zwischen Kranken, Epileptikern, Gelähmten und Besessenen (Mt 4,24), und Jesus weist den Schluss „krank, also gesündigt" ausdrücklich zurück (Joh 9,2–3). Christliche Ärzte übernahmen das naturkundliche Erbe von Hippokrates und Galen und gaben es weiter – auch in die arabische Welt, etwa durch den christlichen Übersetzer Hunayn ibn Ishaq.`,
      followUps: [
        {
          id: 'exorzismus-heute',
          objection: `Aber manche Kirchen machen heute noch Exorzismen statt Psychiatrie.`,
          objectionBy: 'Skeptiker',
          answer: `Missbräuche gibt es, und sie sind zu verurteilen. Die orthodoxe Praxis verlangt Nüchternheit: Zuerst ärztliche und psychiatrische Abklärung; Gebet begleitet die Behandlung, ersetzt sie nicht. Die Frage, wie sich Besessenheit und psychische Krankheit unterscheiden, wird an anderer Stelle ausführlich behandelt.`,
        },
      ],
    },
    {
      id: 'religion-macht-krank',
      objection: `Religion macht krank – durch Schuldgefühle, Angst und die Ablehnung von Verhütung oder Impfungen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Die Daten zeigen überwiegend das Gegenteil. In der großen Nurses' Health Study hatten Frauen, die mehr als einmal pro Woche Gottesdienste besuchten, ein rund ein Drittel geringeres Sterberisiko (Li u. a., JAMA Internal Medicine 2016) und ein deutlich niedrigeres Suizidrisiko (VanderWeele u. a., JAMA Psychiatry 2016). Ungesunde Formen von Religiosität gibt es – aber im Durchschnitt ist gelebter Glaube eher Schutzfaktor als Risiko.`,
      followUps: [
        {
          id: 'korrelation-confounding',
          objection: `Korrelation ist keine Kausalität. Gesündere Menschen gehen eben eher in die Kirche.`,
          objectionBy: 'Richard Sloan',
          answer: `Ein berechtigter Einwand, den die Forscher ernst nehmen: Sie verwenden prospektive Designs, kontrollieren für den früheren Gesundheitszustand und prüfen mit Sensitivitätsanalysen, wie stark ein unbekannter Störfaktor sein müsste, um den Effekt zu erklären. Das beweist nicht Gott – aber es widerlegt die Behauptung, Religion schade der Gesundheit.`,
          sources: [
            { kind: 'wissenschaft', author: 'Shanshan Li, Meir J. Stampfer, David R. Williams, Tyler J. VanderWeele', work: 'Association of Religious Service Attendance With Mortality Among Women', ref: 'JAMA Internal Medicine 176 (2016), 777–785', year: '2016', status: 'paraphrase' },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wer hat die ersten Krankenhäuser für Arme und Fremde gegründet – und warum?`,
    `Kennst du den Fall Cotton Mather und die Pockenimpfung von 1721?`,
    `Warum sollte man die Medizinfeindlichkeit einer kleinen Sondergruppe dem Christentum insgesamt zuschreiben?`,
    `Wie erklärst du die positiven Gesundheitsdaten großer Kohortenstudien zu religiöser Praxis?`,
  ],
  avoid: [
    `Die Opfer religiöser Behandlungsverweigerung kleinreden – das wäre lieblos und unwahr.`,
    `Behaupten, „die Kirche" habe nie geirrt – einzelne Kirchenleute haben medizinische Neuerungen abgelehnt.`,
    `Medizin und Gebet gegeneinander ausspielen („Wer wirklich glaubt, braucht keinen Arzt").`,
  ],
  concessions: [
    `Religiös motivierte Behandlungsverweigerung hat nachweislich Menschenleben gekostet.`,
    `Impfskepsis ist in manchen religiösen Gemeinschaften verbreitet und gefährlich.`,
    `Auch christliche Kreise haben Krankheit zuweilen vorschnell als Strafe oder dämonisch gedeutet.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gary B. Ferngren', work: 'Medicine and Health Care in Early Christianity', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Ronald L. Numbers (Hg.)', work: 'Galileo Goes to Jail and Other Myths about Science and Religion', year: '2009', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Harold G. Koenig, Tyler J. VanderWeele, John R. Peteet', work: 'Handbook of Religion and Health', year: '2024', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'The Rise of Christianity (dt. Der Aufstieg des Christentums)', year: '1996', status: 'paraphrase', note: 'Kapitel über die Pflege der Kranken während der antiken Seuchen.' },
  ],
  difficulty: 1,
  tags: ['Medizin', 'Krankenhaus', 'Basilius', 'Anargyroi', 'Kirchengeschichte'],
  related: [
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'psychologie/religion-schadet-psyche',
    'psychiatrie/daemonen-sind-krankheiten',
    'zeugen-jehovas/wachtturm-gottes-kanal',
    'kirchengeschichte-mythen/galilei',
  ],
};

export default claim;
