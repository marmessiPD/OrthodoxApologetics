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
          followUps: [
            {
              id: 'religioese-quacksalberei-heute',
              objection: `Geschichte beiseite: Heute ist das Problem religiöse Quacksalberei. Heilöl, Weihwasser und „Glaubensheiler" statt Chemotherapie – gerade in Teilen Afrikas und in manchen Pfingstkirchen sterben Menschen daran. Religion liefert den Nährboden für Pseudomedizin.`,
              objectionBy: 'Edzard Ernst',
              answer: `Ernst hat sein Berufsleben lang wirkungslose Heilmethoden entlarvt – dafür verdient er Respekt, und ich stehe in diesem Punkt an seiner Seite. Wer Kranke von wirksamer Behandlung abhält, versündigt sich an ihnen. Aber die orthodoxe Kirche lehrt gerade nicht „Gebet **statt** Medizin", sondern „Gebet **und** Medizin": Die Krankensalbung begleitet die Behandlung, sie ersetzt sie nicht. Pseudomedizin gibt es übrigens ebenso reichlich in säkularen Wellness-Milieus.`,
              detail: `Ein guter Prüfstein für jede Gemeinde: Ermutigt sie Kranke, ärztliche Behandlung fortzusetzen? Fragt sie nach Befunden, bevor sie von Heilung spricht? Verlangt sie Geld für Gebete? Die Kirchenväter waren hier eindeutig. Basilius lehrt in seinen ausführlichen Regeln, dass die Heilkunst eine Gabe Gottes ist, die man gebrauchen soll, ohne die Hoffnung allein auf sie zu setzen – und dass es falsch wäre, sie aus Frömmigkeit abzulehnen. Die koptische Kirche betreibt in Ägypten Krankenhäuser und Ambulanzen; Priester besuchen Kranke im Krankenhaus, nicht anstelle davon.`,
              voices: [
                {
                  person: 'basilius',
                  role: 'als Kirchenvater, der Medizin studiert hatte',
                  text: `Basilius vergleicht in den *Regulae fusius tractatae* (Frage 55) die Heilkunst mit Ackerbau und Weberei: Gott hat sie den Menschen gegeben, um der Schwäche des Leibes zu helfen. Wer sie gebraucht, handelt nicht gegen den Glauben, solange er erkennt, dass auch die Arznei von Gott kommt. Wer sie aus vermeintlicher Frömmigkeit verwirft, verachtet eine Gabe Gottes.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Regulae fusius tractatae', ref: 'Frage 55', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'gegner', author: 'Simon Singh & Edzard Ernst', work: 'Trick or Treatment? Alternative Medicine on Trial', year: '2008', status: 'paraphrase' },
              ],
              questionsBack: [
                `Kennst du eine orthodoxe Kirche, die Kranken rät, die Chemotherapie abzubrechen?`,
              ],
              followUps: [
                {
                  id: 'reliquien-pilgern',
                  objection: `Aber auch Kopten pilgern zu Heiligengräbern und Reliquien, um Heilung zu suchen. Das ist doch genau dieselbe Magie.`,
                  objectionBy: 'Edzard Ernst / Michael Shermer',
                  answer: `Der Unterschied liegt in zwei Dingen: Erstens ist das Gebet am Grab eines Heiligen eine Bitte an Gott in der Gemeinschaft der Heiligen, kein Mechanismus, der „wirkt", wenn man ihn richtig bedient. Zweitens lehrt die Kirche nicht, deshalb auf den Arzt zu verzichten – die meisten Pilger sind zugleich in Behandlung. Magie will Gott zwingen; Gebet vertraut sich ihm an. Und viele dieser Heiligen waren selbst Ärzte.`,
                  detail: `Die koptische Kirche verehrt besonders die „Anargyroi", die uneigennützigen Ärzte-Heiligen, die Kranke unentgeltlich behandelten – Kosmas und Damian sowie Kyros (Abba Kyr) und Johannes aus Alexandrien. Nach der Überlieferung ließ der hl. Kyrill von Alexandrien ihre Reliquien nach Menouthis bei Abukir überführen, um einen heidnischen Heilkult abzulösen. Das ist bezeichnend: Die Kirche setzte nicht Magie gegen Magie, sondern stellte Ärzte als Vorbilder der Nächstenliebe vor Augen. Missbräuche – Geschäftemacherei, Aberglaube – hat sie selbst immer wieder getadelt.`,
                  voices: [
                    {
                      person: 'kyros-johannes',
                      role: 'als Ärzte-Märtyrer aus Alexandrien',
                      text: `Nach der Überlieferung behandelte der Arzt Kyros in Alexandrien Kranke ohne Bezahlung und verband ärztliche Kunst mit Gebet und Verkündigung; der Soldat Johannes schloss sich ihm an, beide starben als Märtyrer. Ihre Verehrung zeigt, dass für die koptische Tradition Heilkunst und Heiligkeit keine Gegensätze sind: Der ideale Heilige kann ein Arzt sein.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Sophronius von Jerusalem', work: 'Thaumata (Wunderberichte) der hll. Kyros und Johannes', year: '7. Jh.', status: 'paraphrase', note: 'Hagiographische Quelle.' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'chirurgie-verbot-klerus',
          objection: `Die mittelalterliche Kirche hat Klerikern sogar die Chirurgie verboten – „ecclesia abhorret a sanguine". So wurde die Medizin jahrhundertelang gebremst.`,
          objectionBy: 'Andrew Dickson White / Christopher Hitchens',
          answer: `Das IV. Laterankonzil (1215) untersagte Klerikern höherer Weihen, an Operationen mit Schnitt und Brennen mitzuwirken – weil Priester kein Blut vergießen sollten, nicht weil Chirurgie sündhaft wäre. Ärzte und Wundärzte, die keine Kleriker waren, operierten weiter, und an kirchlich gegründeten Universitäten wurde Medizin gelehrt. Außerdem ist das eine Regel der lateinischen Kirche; die koptische Tradition ehrt Ärzte sogar als Heilige.`,
          detail: `Die Formel „ecclesia abhorret a sanguine" ist als Konzilsbeschluss in dieser Form nicht belegt; sie wurde vermutlich erst im 18. Jahrhundert geprägt. Der eigentliche Kanon (Lateranum IV, Kanon 18) betrifft das Amt des Priesters, nicht die Medizin. Die Medizingeschichte zeigt im Gegenteil eine enge Verbindung von Kirche und Heilkunst: Klosterspitäler, Pflegeorden, im Osten die Hospitäler nach dem Vorbild des Basilius.`,
          sources: [
            { kind: 'konzil', work: 'IV. Laterankonzil', ref: 'Kanon 18', year: '1215', status: 'paraphrase', note: 'Verbot für Subdiakone, Diakone und Priester, chirurgische Eingriffe mit Schnitt oder Brennen vorzunehmen; westliches Konzil, für Kopten nicht maßgeblich.' },
          ],
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
          followUps: [
            {
              id: 'religioese-ausnahmen-gesetz',
              objection: `Und in vielen US-Bundesstaaten gab es gesetzliche Ausnahmen, die Eltern bei „Glaubensheilung" vor Strafverfolgung schützten – durchgesetzt von religiösen Lobbys.`,
              objectionBy: 'Rita Swan',
              answer: `Das ist wahr und beschämend; diese Ausnahmen gingen vor allem auf die Lobbyarbeit der Christian Science zurück. Aber bezeichnend ist, wer dagegen kämpfte: Rita Swan, selbst ehemalige Christian Scientist, die ihren Sohn verlor, und mit ihr Ärzte, Juristen und viele Christen. Mehrere Staaten haben diese Ausnahmen inzwischen abgeschafft oder eingeschränkt. Kinderschutz ist keine antireligiöse Forderung, sondern eine christliche: „Lasset die Kindlein zu mir kommen" (Mk 10,14).`,
              detail: `Für das Gespräch gilt: Gib zu, was stimmt, und unterscheide klar. Die Christian Science („Church of Christ, Scientist") lehrt, Krankheit sei eine Illusion des sterblichen Geistes – eine Lehre, die mit der biblischen Schöpfungslehre (die Welt und der Leib sind gut und real) und mit der Menschwerdung Christi unvereinbar ist. Die historischen Kirchen – orthodox, katholisch, evangelisch – haben solche Ausnahmen nicht verlangt. Die Kirche hat das Recht des Kindes auf Leben und Heilung immer über die religiöse Überzeugung der Eltern gestellt.`,
              sources: [
                { kind: 'gegner', author: 'Seth M. Asser & Rita Swan', work: '„Child fatalities from religion-motivated medical neglect", Pediatrics 101 (4)', ref: '625–629', year: '1998', status: 'paraphrase' },
              ],
            },
          ],
        },
        {
          id: 'koenig-asa',
          objection: `Die Bibel selbst tadelt König Asa, weil er Ärzte aufsuchte (2 Chr 16,12).`,
          objectionBy: 'Bibelkritiker',
          answer: `Lies genau: Asa „suchte nicht den HERRN, sondern die Ärzte". Getadelt wird das Vertrauen auf Ärzte **anstelle** von Gott, nicht der Arztbesuch. Dieselbe Bibel sagt in Sir 38 ausdrücklich: Bete zum Herrn, und dann lass den Arzt zu dir.`,
          followUps: [
            {
              id: 'jakobus-gebet-statt-arzt',
              objection: `Aber Jakobus 5 sagt: „Das Gebet des Glaubens wird dem Kranken helfen." Vom Arzt ist da keine Rede.`,
              objectionBy: 'Bibelkritiker / Glaubensheiler',
              answer: `Jakobus nennt Gebet **und** Salbung mit Öl (Jak 5,14) – und Öl war in der Antike auch ein Heilmittel: Der barmherzige Samariter goss Öl und Wein auf die Wunden (Lk 10,34). Jakobus stellt den Kranken in die Fürsorge der Gemeinde, er verbietet keine Behandlung. Die Kirche hat daraus das Sakrament der Krankensalbung gemacht, das sie spendet, während der Kranke ärztlich versorgt wird. Ein Brief, der Gebet empfiehlt, ist kein Verbot der Medizin – so wenig wie ein Arzt, der Ruhe verordnet, das Beten verbietet.`,
              detail: `Die koptische Kirche feiert die Krankensalbung („Qandil", das Öl der Fürbitte) mit sieben Gebeten, Lesungen und Salbungen; oft wird sie in der Kirche für die ganze Gemeinde oder im Krankenhaus am Bett gespendet. Die Gebete bitten um Heilung von Leib und Seele und um Vergebung der Sünden – sie sehen den Menschen als Ganzes. Sir 38 verbindet beides ausdrücklich: Gebet, Umkehr, und dann „lass den Arzt zu dir, denn der HERR hat ihn geschaffen".`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '10,34', quote: `… ging zu ihm, verband ihm seine Wunden und goß darein Öl und Wein …`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
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
          followUps: [
            {
              id: 'saekulare-laender-gesuender',
              objection: `Schau auf die Länder: Japan, Schweden, Dänemark – höchst säkular und mit der besten Gesundheit und Lebenserwartung der Welt. Religiöse Länder schneiden schlechter ab.`,
              objectionBy: 'Phil Zuckerman',
              answer: `Ländervergleiche messen vor allem Wohlstand, Gesundheitssysteme und Ernährung – nicht den Glauben einzelner Menschen. Das ist der ökologische Fehlschluss: Aus Durchschnittswerten von Ländern kann man nicht auf Individuen schließen. Die entscheidende Frage ist, ob **innerhalb** derselben Gesellschaft religiös Praktizierende gesünder sind als andere – und genau das zeigen die großen Kohortenstudien. Übrigens sind die skandinavischen Gesundheitssysteme historisch aus kirchlicher Armen- und Krankenfürsorge gewachsen.`,
              detail: `Die Global Flourishing Study (VanderWeele, Johnson u. a., 2025; rund 200.000 Teilnehmer in 22 Ländern) zeigt zudem, dass reiche Länder bei Lebenszufriedenheit und materieller Sicherheit vorne liegen, beim Erleben von Sinn und Bedeutung aber teils deutlich zurückfallen; regelmäßiger Gottesdienstbesuch hing in vielen Ländern mit höherem „Flourishing" zusammen. Mehr dazu im Claim „Säkulare Gesellschaften sind glücklicher".`,
              voices: [
                {
                  person: 'vanderweele',
                  role: 'als Epidemiologe und Leiter des Human Flourishing Program, Harvard',
                  text: `VanderWeele betont den Unterschied zwischen Länder- und Individualdaten: Ob religiöse Praxis einem Menschen gesundheitlich nützt, lässt sich nur mit Längsschnittdaten von Individuen klären. In solchen Studien zeigen sich wiederholt Zusammenhänge zwischen Gottesdienstbesuch und geringerer Sterblichkeit, weniger Depression und weniger Suizid.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Tyler J. VanderWeele', work: '„Religion and Health: A Synthesis", in: Spirituality and Religion within the Culture of Medicine (Balboni & Peteet, Hg.)', year: '2017', status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Vergleichst du gerade Glauben – oder Bruttoinlandsprodukt und Gesundheitssysteme?`,
              ],
              followUps: [
                {
                  id: 'religion-gegen-impfung',
                  objection: `Und religiöse Gemeinschaften sind Brutstätten der Impfgegnerschaft – denk an Masernausbrüche in ultraorthodoxen oder freikirchlichen Gemeinden.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Solche Ausbrüche gab es, und sie sind tragisch. Aber Impfskepsis ist kein religiöses Monopol – sie ist in esoterischen und wohlhabenden säkularen Milieus mindestens ebenso verbreitet. Die historischen Kirchen haben keine Lehre gegen Impfungen; die koptische Kirche setzte zu Beginn der COVID-19-Pandemie 2020 sogar die öffentlichen Gottesdienste zeitweise aus, um Menschen zu schützen. Und historisch kämpfte gerade ein Pfarrer, Cotton Mather, als einer der Ersten für die Pockenimpfung.`,
                  detail: `Bleib bei dem, was du sicher sagen kannst: Die historischen Kirchen haben keine Lehre gegen Impfungen; die Begründung der Nächstenliebe (andere schützen) spricht eher für sie. Wo Christen impfskeptisch sind, stammen ihre Gründe meist aus allgemeinem Misstrauen gegenüber Institutionen, nicht aus der Lehre der Kirche. Ehrlich: Manche Christen haben ethische Fragen zu Zelllinien aus abgetriebenen Föten gestellt; viele Kirchen halten die Impfung trotzdem für erlaubt, weil keine neue Abtreibung verursacht wird und der Schutz des Lebens überwiegt.`,
                  questionsBack: [
                    `Welche Kirche lehrt offiziell, dass Impfungen Sünde sind?`,
                  ],
                },
              ],
            },
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
