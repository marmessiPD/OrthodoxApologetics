import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'dhimmi-gerecht',
  title: `„Der Dhimmi-Status war ein gerechter Schutzvertrag."`,
  proponents: [
    { name: 'Muslimische Apologeten', role: 'z. B. in Debatten über Islam und Minderheiten', work: 'Argument: Schutz von Leben, Eigentum und Kult gegen eine moderate Steuer; Befreiung vom Militärdienst' },
    { name: 'Thomas W. Arnold', role: 'Orientalist (†1930)', work: 'The Preaching of Islam (1896)' },
    { name: 'Mark R. Cohen', role: 'Historiker, Princeton', work: 'Under Crescent and Cross. The Jews in the Middle Ages (1994) – vergleichende Perspektive' },
    { name: 'Klassische islamische Rechtsgelehrte', role: 'z. B. Abu Yusuf, al-Mawardi', work: 'Kitab al-Kharaj; al-Ahkam al-Sultaniyya' },
  ],
  steelman: `Der Dhimma-Vertrag war für seine Zeit ein fortschrittliches Modell des Zusammenlebens. Juden und Christen – als „Leute der Schrift" – erhielten den Schutz ihres Lebens, ihres Eigentums und ihrer Religionsausübung; sie konnten ihre eigenen Gerichte für Ehe- und Erbrecht behalten, ihre Oberhäupter selbst wählen und waren vom Militärdienst befreit. Dafür zahlten sie die Dschizya, eine Kopfsteuer, von der Frauen, Kinder, Alte, Arme und Mönche oft ausgenommen waren – so wie Muslime die Zakat zahlten. Islamische Juristen betonten die Pflicht, die Schutzbefohlenen notfalls mit Waffen zu verteidigen. Im Vergleich zum mittelalterlichen Europa, das Juden vertrieb, Ketzer verbrannte und andere Christen verfolgte, war das eine großzügige Ordnung. Dass die Kopten vierzehn Jahrhunderte überlebten, beweist, dass sie geschützt wurden.`,
  biblical: {
    summary: `Die Bibel lehrt die gleiche Würde aller Menschen als Ebenbilder Gottes (Gen 1,27) und kennt für den Fremden im Land dasselbe Recht wie für den Einheimischen (Lev 24,22; Num 15,15–16). Im Neuen Testament gibt es in Christus „nicht Jude noch Grieche, nicht Knecht noch Freier" (Gal 3,28). Zugleich lehrt die Schrift Christen, auch unter Fremdherrschaft der Stadt Bestes zu suchen (Jer 29,7), die Obrigkeit zu ehren (1 Petr 2,13–17) und geduldig Unrecht zu ertragen, ohne es gut zu nennen. Ehrlich ist: Auch christliche Staaten haben diesen biblischen Maßstab oft verfehlt.`,
    sources: [
      { kind: 'bibel', work: '3. Mose (Levitikus)', ref: '24,22', quote: `Es soll einerlei Recht unter euch sein, dem Fremdling wie dem Einheimischen; denn ich bin der HERR, euer Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '3,28', quote: `Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier, hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '2,17', quote: `Tut Ehre jedermann. Habt die Brüder lieb. Fürchtet Gott. Ehret den König.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche hat unter der Dhimma vierzehn Jahrhunderte lang gelebt, gebetet und eine reiche Kultur geschaffen. Sie hat dabei Anpassung und Treue verbunden: Koptische Gelehrte wie Severus ibn al-Muqaffa (10. Jh.) und die Brüder Ibn al-Assal (13. Jh.) schrieben auf Arabisch, verteidigten den Glauben im Gespräch mit Muslimen und ordneten das Kirchenrecht – al-Safi ibn al-Assals Nomokanon (1238) regelte Ehe, Erbe und Kirchenordnung für die Gemeinden. Die Kirche hat die Herrscher geehrt und für sie gebetet, wie die Liturgie es tut, aber die Lasten der Dhimma nie als Gerechtigkeit verstanden. Heute begrüßt sie, dass auch muslimische Gelehrte das Modell der Staatsbürgerschaft (muwatana) an die Stelle der Dhimma setzen.`,
    sources: [
      { kind: 'koptisch', author: 'al-Safi ibn al-Assal', work: 'Nomokanon (al-Majmu al-Safawi)', year: '1238', quote: `Sammlung und Ordnung des Kirchenrechts für die koptischen Gemeinden, darunter Ehe-, Erb- und Kirchenordnung.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Liturgie des hl. Basilius (koptisch), Fürbitten', quote: `Gebet für das Land, seine Herrscher, das Heer und die Beamten, dass Gott ihnen Frieden schenke.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Die Forschung beschreibt die Dhimma als **hierarchische Duldung**: Sie gewährte Schutz und innere Autonomie, verankerte aber die rechtliche Unterordnung der Nichtmuslime. Grundlage ist Sure 9:29 (Dschizya „aus der Hand, während sie gering gemacht sind"); hinzu kamen die „Bedingungen Umars" (al-Schurut al-Umariyya), die nach heutigem Forschungsstand nicht vom Kalifen Umar I. stammen, sondern im 8./9. Jahrhundert formuliert wurden (Mark R. Cohen, Milka Levy-Rubin) und im Laufe der Zeit strenger angewandt wurden. Die Umsetzung schwankte stark je nach Herrscher und Epoche. Vergleichend urteilen Historiker wie Bernard Lewis und Mark Cohen, dass Juden im mittelalterlichen Islam oft besser lebten als im christlichen Europa; zugleich sprechen sie von Bürgern zweiter Klasse. Die polemische Gegenposition (Bat Ye'or, „Dhimmitude") gilt in der Fachwelt als einseitig.`,
    detail: `**Typische Bestimmungen (je nach Zeit und Rechtsschule unterschiedlich):**
- Dschizya (Kopfsteuer) für erwachsene, freie, arbeitsfähige nichtmuslimische Männer; Befreiungen für Frauen, Kinder und oft für Arme; die Besteuerung der Mönche war umstritten und in Ägypten zeitweise üblich.
- Verbot neuer Kirchen und Klöster, Einschränkungen bei Reparaturen; keine öffentlichen Prozessionen, Kreuze und lauten Glocken; kein Werben unter Muslimen.
- Kennzeichnende Kleidung (Gürtel, Turbanfarben – in der Mamlukenzeit blau für Christen, gelb für Juden), Verbot des Reitens auf Pferden und des Waffentragens.
- Rechtsungleichheit: Zeugnis eines Dhimmi gegen einen Muslim meist nicht zugelassen; Blutgeld nach den meisten Schulen geringer (die hanafitische Schule setzte es gleich); Übertritt zum Islam erlaubt, Abfall vom Islam mit dem Tod bedroht; Ehe nur asymmetrisch (Muslim darf Christin heiraten, nicht umgekehrt).

**Schutzpflicht:** Klassische Juristen betonten den Ernst des Schutzversprechens. Der malikitische Gelehrte al-Qarafi (13. Jh.) zitiert Ibn Hazm, Muslime müssten Schutzbefohlene notfalls mit der Waffe verteidigen, statt sie einem Feind auszuliefern.

**Abschaffung:** In Ägypten hob Said Pascha 1855 die Dschizya auf; Kopten wurden zum Militärdienst herangezogen. Die Verfassung von 1923 kannte gleiche Staatsbürgerschaft. In jüngerer Zeit haben die Marrakesch-Erklärung (2016) und eine Erklärung der Azhar zu Bürgerrecht und Zusammenleben (2017) den Gedanken gleicher Staatsbürgerschaft für religiöse Minderheiten betont.`,
    sources: [
      { kind: 'koran', work: 'Sure 9 (at-Tauba)', ref: '9:29', quote: `Kämpft gegen diejenigen unter den Leuten der Schrift, die nicht an Allah und den Jüngsten Tag glauben … bis sie die Dschizya aus der Hand entrichten, während sie gering gemacht sind.`, original: `ḥattā yuʿṭū l-jizyata ʿan yadin wa-hum ṣāghirūn`, status: 'paraphrase', url: 'https://quran.com/9/29', note: 'Die Bedeutung von „ṣāghirūn" (erniedrigt/gefügig) und „ʿan yadin" wird in der Auslegung unterschiedlich verstanden.' },
      { kind: 'fachliteratur', author: 'Mark R. Cohen', work: 'Under Crescent and Cross. The Jews in the Middle Ages', year: '1994', quote: `Juden lebten im mittelalterlichen Islam meist sicherer als im lateinischen Europa, jedoch in einer klar untergeordneten Stellung.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Milka Levy-Rubin', work: 'Non-Muslims in the Early Islamic Empire. From Surrender to Coexistence', year: '2011', quote: `Die Bedingungen Umars seien aus frühen Kapitulationsverträgen hervorgegangen und unter den frühen Abbasiden zu einem kanonischen Dokument geformt worden.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Bernard Lewis', work: 'The Jews of Islam', year: '1984', quote: `Die Dhimma bedeutete Duldung bei Ungleichheit – Bürger zweiter Klasse, aber selten Verfolgung im europäischen Ausmaß.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Donald P. Little', work: 'Coptic Conversion to Islam under the Bahri Mamluks, 692–755/1293–1354. Bulletin of the School of Oriental and African Studies 39', year: '1976', quote: `Die Verschärfung der Dhimmi-Bestimmungen und Gewaltwellen (1301, 1321, 1354) führten zu Massenübertritten von Kopten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Dhimma brachte echten Schutz und Selbstverwaltung – das erkenne ich an, und sie war oft besser als das, was Juden im mittelalterlichen Europa erlebten. Aber gerecht im Sinne gleicher Würde war sie nicht: Nichtmuslime zahlten eine Sondersteuer „als Erniedrigte" (9:29), durften kaum Kirchen bauen, sagten vor Gericht nicht gegen Muslime aus und durften Muslime nicht zum Christentum einladen, während der Übertritt zum Islam belohnt wurde. Es war eine Ordnung der Duldung, nicht der Gleichheit. Erfreulich ist, dass heute auch viele muslimische Gelehrte die gleiche Staatsbürgerschaft an ihre Stelle setzen.`,
  keyPoints: [
    `**Was die Dhimma gab:** Schutz von Leben, Eigentum und Kult, innere Autonomie, eigene Personenstandsgerichte – und sie wurde von Juristen ernst genommen.`,
    `**Was sie verankerte:** Dschizya nach 9:29, Kirchenbauverbote, Kleidervorschriften, Zeugnis- und Blutgeldungleichheit, asymmetrisches Ehe- und Konversionsrecht.`,
    `**Die „Bedingungen Umars":** nicht von Umar I., sondern im 8./9. Jahrhundert formuliert und später verschärft (Cohen, Levy-Rubin).`,
    `**Praxis schwankte:** Phasen der Blüte (koptische Beamte unter Fatimiden) und der Verfolgung (al-Hakim, Mamluken 1301, 1321, 1354).`,
    `**Ehrlich vergleichen:** Byzanz und das lateinische Europa kannten ähnliche Hierarchien; „besser als" heißt nicht „gerecht".`,
    `**Heute:** Abschaffung der Dschizya in Ägypten 1855; Marrakesch (2016) und Azhar (2017) betonen gleiche Staatsbürgerschaft – ein Fortschritt, den Kopten begrüßen.`,
  ],
  voices: [
    {
      person: 'ibn-al-assal',
      role: 'als koptische Rechtsgelehrte unter islamischer Herrschaft',
      text: `Die Brüder Ibn al-Assal gehören zum „goldenen Zeitalter" der koptisch-arabischen Literatur im 13. Jahrhundert. Al-Safi ibn al-Assal stellte 1238 einen Nomokanon zusammen, der den Gemeinden ein geordnetes Kirchenrecht für Ehe, Erbe und kirchliches Leben gab – ein Zeichen dafür, dass die Dhimma innere Autonomie ermöglichte. Zugleich zeigt ihr Werk, dass Kopten ihren Glauben in einer Umgebung verteidigen mussten, in der die Rechtsordnung Muslime bevorzugte: Sie argumentierten in der Sprache und mit den Begriffen der Mehrheit, um ihre Identität zu bewahren.`,
      sources: [
        { kind: 'koptisch', author: 'al-Safi ibn al-Assal', work: 'Nomokanon', year: '1238', quote: `Ordnung des koptischen Kirchenrechts für das Leben der Gemeinden unter islamischer Herrschaft.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'sidney-griffith',
      role: 'als Historiker des arabischsprachigen Christentums',
      text: `Griffith beschreibt in „The Church in the Shadow of the Mosque" das Leben der Christen unter islamischer Herrschaft als zugleich schöpferisch und bedrängt: Sie übersetzten griechische Philosophie ins Arabische, entwickelten eine christliche Theologie in arabischer Sprache und dienten als Ärzte und Beamte. Gleichzeitig standen sie unter rechtlicher Unterordnung und gesellschaftlichem Druck, der über Jahrhunderte zur Islamisierung beitrug. Für Griffith ist beides wahr – die Blüte und der Schatten.`,
      sources: [
        { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque. Christians and Muslims in the World of Islam', year: '2008', quote: `Christliche Kultur unter islamischer Herrschaft zwischen intellektueller Blüte und rechtlich-sozialer Unterordnung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'mark-swanson',
      role: 'als Historiker des koptischen Papsttums',
      text: `Swanson zeigt am Beispiel der koptischen Päpste, wie stark die Lage der Kopten vom jeweiligen Herrscher abhing: Manche Kalifen und Sultane ehrten Patriarchen und beschäftigten koptische Beamte, andere ließen Kirchen schließen, erpressten Geldzahlungen oder setzten die Dhimmi-Bestimmungen mit Gewalt durch. Die Dhimma war kein fester, gerechter Vertrag, sondern ein Rahmen, dessen Auslegung in der Hand der Mächtigen lag.`,
      sources: [
        { kind: 'fachliteratur', author: 'Mark N. Swanson', work: 'The Coptic Papacy in Islamic Egypt (641–1517)', year: '2010', quote: `Die Lage der Kirche schwankte mit den Herrschern zwischen Förderung und Bedrückung.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Patriarch der modernen Staatsbürgerschaft',
      text: `Papst Schenuda III. vertrat in seiner langen Amtszeit (1971–2012) mit Nachdruck den Gedanken der gleichen Staatsbürgerschaft aller Ägypter. Er verstand die Kopten nicht als geduldete Minderheit, sondern als ursprüngliche Bürger des Landes, die seine Geschichte und Kultur mittragen. Seine Liebe zu Ägypten, ausgedrückt in dem vielzitierten Wort, Ägypten sei ein Land, das in uns lebt, verband sich mit dem klaren Einsatz für gleiche Rechte – ein Weg, der die Dhimma hinter sich lässt, ohne die Muslime als Nachbarn abzulehnen.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Ansprachen und Predigten zur nationalen Einheit', quote: `Die Kopten als gleichberechtigte Bürger Ägyptens; Liebe zum Vaterland und Einheit mit den muslimischen Mitbürgern.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'dschizya-wie-zakat',
      objection: `Die Dschizya war nur ein Ausgleich: Muslime zahlten Zakat und leisteten Militärdienst, Christen zahlten Dschizya und wurden dafür beschützt. Das ist fair.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Die Zakat ist eine religiöse Pflicht der Gläubigen, deren Ertrag auch Muslimen zugutekommt; die Dschizya ist eine Steuer, die an der Religion hängt und nach 9:29 „als Erniedrigte" entrichtet wird. Dass Christen keinen Militärdienst leisten durften, war zudem kein Privileg, sondern Teil ihrer Unterordnung – das Waffentragen war ihnen meist verboten. Ein Ausgleich unter Gleichen war das nicht.`,
      followUps: [
        {
          id: 'saghirun-anders',
          objection: `„Wa-hum saghirun" heißt nicht „erniedrigt", sondern „gefügig", also: der Rechtsordnung unterworfen. Ihr übersetzt böswillig.`,
          objectionBy: 'Muslimischer Gelehrter',
          answer: `Es gibt tatsächlich verschiedene Auslegungen – manche klassischen Gelehrte verstanden darunter einfach die Unterstellung unter die islamische Rechtsordnung, und das nehme ich zur Kenntnis. Andere Ausleger beschrieben dagegen ausdrücklich demütigende Formen der Zahlung. Selbst die mildeste Deutung bleibt aber eine Unterordnung nach Religion – und darum geht es: Gleichheit war nicht das Ziel.`,
          followUps: [
            {
              id: 'arme-ausgenommen',
              objection: `Arme, Frauen, Kinder und Mönche waren befreit. Die Steuer war gering. Wo ist das Problem?`,
              objectionBy: 'Muslimischer Apologet',
              answer: `In vielen Rechtsschulen gab es solche Befreiungen, das stimmt. In Ägypten aber wurden zeitweise auch Mönche besteuert, wie die koptische Patriarchengeschichte für das späte 7. Jahrhundert berichtet, und die Papyri zeigen Steuereintreiber, die flüchtigen Bauern nachjagten. Und auch eine geringe Steuer bleibt ein dauerhaftes Zeichen, dass man nach seiner Religion Bürger minderen Rechts ist – und ein ständiger Anreiz zum Übertritt.`,
              followUps: [
                {
                  id: 'anreiz-gewollt',
                  objection: `Dass Menschen Muslime wurden, um Steuern zu sparen, war nicht gewollt. Manche Statthalter wollten Übertritte sogar verhindern, weil die Einnahmen sanken.`,
                  objectionBy: 'Muslimischer Historiker',
                  answer: `Das stimmt und spricht gegen die Vorstellung, die Dschizya sei ein Bekehrungsinstrument gewesen – oft war sie schlicht eine Einnahmequelle. Aber gerade das zeigt das Problem: Wenn ein Staat an der Religion seiner Untertanen verdient, ist die Religionszugehörigkeit politisch und wirtschaftlich aufgeladen. Ein gerechter Vertrag unter Gleichen sähe anders aus.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schutzpflicht-ernst',
      objection: `Muslimische Juristen nahmen die Schutzpflicht sehr ernst. Al-Qarafi zitiert Ibn Hazm: Muslime müssten notfalls sterben, um Dhimmis vor Feinden zu schützen.`,
      objectionBy: 'Muslimischer Gelehrter',
      answer: `Das ist ein eindrucksvolles Zeugnis, und ich erkenne es an: Es gab Juristen, die das Schutzversprechen hochhielten, und viele Muslime haben es gelebt. Aber Schutz und Gleichheit sind zweierlei. Man kann jemanden schützen und ihn zugleich unterordnen – das tut ein Vormund auch. Und wenn Herrscher wie al-Hakim oder Mobs in der Mamlukenzeit Kirchen zerstörten, fehlte oft genau dieser Schutz.`,
      sources: [
        { kind: 'hadith', author: 'Schihab ad-Din al-Qarafi', work: 'Kitab al-Furuq', year: '13. Jh.', quote: `Al-Qarafi zitiert Ibn Hazm: Wenn Feinde kämen, um Schutzbefohlene zu ergreifen, müssten die Muslime mit Waffen für sie kämpfen und bereit sein zu sterben, statt sie auszuliefern.`, status: 'paraphrase', note: 'Klassisch-juristische Quelle; Fundstelle (Furuq Nr. 119) nicht geprüft.' },
      ],
      followUps: [
        {
          id: 'al-hakim-ausnahme',
          objection: `Al-Hakim war ein geistesgestörter Herrscher, der auch Muslime verfolgte. Er ist keine Regel.`,
          objectionBy: 'Muslimischer Historiker',
          answer: `Das stimmt: Al-Hakim war unberechenbar und verfolgte auch Sunniten und andere Gruppen; später erlaubte er Zwangsbekehrten die Rückkehr. Aber die Mamlukenzeit zeigt, dass Gewalt nicht nur von Einzelnen ausging: 1301 wurden die Dhimmi-Bestimmungen verschärft, 1321 brannten in ganz Ägypten Kirchen, 1354 kam es nach Unruhen zu Massenübertritten (Donald Little). Das System ließ solche Wellen zu.`,
        },
      ],
    },
    {
      id: 'schurut-umar-spaet',
      objection: `Die „Bedingungen Umars" mit Kleidervorschriften und Kirchenbauverboten sind eine spätere Erfindung. Der echte Islam kennt sie nicht.`,
      objectionBy: 'Reformorientierter Muslim',
      answer: `Da hast du historisch recht: Die Forschung datiert diese Bestimmungen ins 8./9. Jahrhundert, nicht auf Umar I. Aber sie wurden in den Rechtsschulen kanonisch und über Jahrhunderte angewandt – auch in Ägypten. Ich freue mich, wenn Muslime heute sagen, dass sie nicht zum Kern des Islam gehören. Das ist allerdings eine Neubewertung, nicht die klassische Lehre.`,
      followUps: [
        {
          id: 'muwatana-heute',
          objection: `Genau – heute sagen die Azhar und die Marrakesch-Erklärung: Staatsbürgerschaft statt Dhimma. Warum redet ihr dann noch über die Vergangenheit?`,
          objectionBy: 'Reformorientierter Muslim',
          answer: `Weil die Behauptung lautete, die Dhimma sei gerecht gewesen – und weil Geschichte das Selbstverständnis prägt. Ich begrüße diese Erklärungen ausdrücklich; sie sind ein großer Schritt. Gerade weil muslimische Gelehrte selbst die Dhimma durch gleiche Staatsbürgerschaft ersetzen, erkennen sie implizit an, dass das alte Modell keine volle Gerechtigkeit bot.`,
          followUps: [
            {
              id: 'gesetze-heute',
              objection: `In Ägypten ist die Dhimma längst abgeschafft; die Verfassung garantiert Gleichheit. Das Thema ist erledigt.`,
              objectionBy: 'Ägyptisch-nationale Sicht',
              answer: `Rechtlich ist die Dschizya seit 1855 abgeschafft, und die Verfassung garantiert gleiche Rechte – das ist wertvoll. Aber Spuren der alten Ordnung zeigen sich noch: im Kirchenbau, wo erst das Gesetz von 2016 viele Kirchen legalisierte und dennoch Hürden blieben, in Konflikten bei Religionswechsel und in örtlichen Übergriffen, die mit „Versöhnungssitzungen" statt mit Recht beigelegt werden. Ganz erledigt ist das Thema also nicht.`,
            },
          ],
        },
      ],
    },
    {
      id: 'europa-schlimmer',
      objection: `Europa hat Juden vertrieben und verbrannt, Byzanz hat die Kopten verfolgt. Die Dhimma war im Vergleich ein Segen.`,
      objectionBy: 'Mark R. Cohen (als Diskussionspunkt)',
      answer: `Im historischen Vergleich stimme ich dir oft zu, und ich verteidige die Vertreibungen und Pogrome Europas nicht. Auch Byzanz hatte eine Hierarchie: Nach Justinians Recht durften Häretiker und Juden nicht gegen rechtgläubige Christen aussagen. Aber ein Vergleich mit Schlimmerem macht eine Ordnung nicht gerecht. Die Frage war nicht „besser als Europa?", sondern „gerecht?".`,
      followUps: [
        {
          id: 'kopten-ueberlebten',
          objection: `Dass die Kopten 1400 Jahre überlebt haben, beweist doch, dass sie geschützt wurden.`,
          objectionBy: 'Muslimischer Apologet',
          answer: `Dass sie überlebten, verdankt sich auch dem Schutz, den viele Herrscher und Nachbarn gewährten – das erkenne ich an. Es verdankt sich aber ebenso der Treue der Kopten selbst, die trotz Steuerdruck, Verboten und Verfolgungen am Glauben festhielten. Aus einer Mehrheit wurde dabei eine Minderheit. Überleben beweist Duldung, nicht Gleichberechtigung.`,
        },
      ],
    },
    {
      id: 'christen-hatten-autonomie',
      objection: `Christen hatten ihre eigenen Gerichte, ihre Patriarchen und ihr eigenes Familienrecht. Das ist mehr Autonomie, als viele Minderheiten heute haben.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Diese Autonomie war real und wertvoll; die koptische Kirche hat sie genutzt, etwa mit dem Nomokanon des Ibn al-Assal. Aber Autonomie im eigenen Bereich ist nicht Gleichheit im gemeinsamen: Vor dem muslimischen Gericht galt das Zeugnis eines Christen gegen einen Muslim meist nicht, und wer den Islam verließ, riskierte sein Leben. Eine Minderheit kann autonom und zugleich benachteiligt sein.`,
      followUps: [
        {
          id: 'apostasie-sache-staat',
          objection: `Die Todesstrafe für Apostasie war eine Frage des Hochverrats in einer Zeit, in der Religion und Staat eins waren.`,
          objectionBy: 'Muslimischer Gelehrter',
          answer: `So argumentieren manche heutigen Gelehrte, und ich nehme die Neubewertung ernst. Aber für den Christen bedeutete die Regel, dass Mission unter Muslimen unmöglich war, während der Übertritt zum Islam gefördert wurde – eine Einbahnstraße. Auch christliche Staaten haben Religion und Loyalität verknüpft und Andersgläubige verfolgt; das war ebenfalls Unrecht. Gerechtigkeit verlangt Gewissensfreiheit für alle.`,
        },
      ],
    },
    {
      id: 'alte-kirchen-stehen',
      objection: `In Ägypten stehen bis heute uralte Kirchen und Klöster – in Alt-Kairo, im Wadi Natrun, am Roten Meer. Unter einer ungerechten Ordnung wären sie längst verschwunden.`,
      objectionBy: 'Muslimischer Apologet',
      answer: `Dass so viele alte Kirchen und Klöster erhalten sind, ist ein echtes Zeugnis der Duldung, und dafür bin ich dankbar. Aber das Verbot neuer Kirchen und die Einschränkung von Reparaturen gehörten zur klassischen Dhimma; in Wellen wie 1321 wurden in ganz Ägypten Kirchen zerstört. Erhalten blieb vor allem, was alt war oder in der Wüste lag – wachsen durften die Gemeinden kaum.`,
      followUps: [
        {
          id: 'kirchenbau-staatlich',
          objection: `Die Kirchenbau-Hürden der Neuzeit – osmanische Dekrete, die zehn Bedingungen des Innenministeriums von 1934 – waren staatliche Verwaltungsregeln, nicht der Islam.`,
          objectionBy: 'Ägyptisch-nationale Sicht',
          answer: `Das ist richtig: Diese Regeln waren staatliche Vorschriften, und viele Muslime haben sie kritisiert. Ich unterstelle sie nicht „dem Islam". Aber sie standen in der Tradition der älteren Dhimmi-Bestimmungen, die neue Kirchen erschwerten – sonst hätte es für Moscheen dieselben Hürden gegeben. Dass das Gesetz von 2016 hier Abhilfe schaffen sollte, zeigt, dass der Staat selbst ein Problem erkannt hat.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die Dhimma gerecht war – warum ersetzen sie heute auch die Azhar und die Marrakesch-Erklärung durch gleiche Staatsbürgerschaft?`,
    `Würdest du einen Vertrag gerecht nennen, der dir als Minderheit eine Sondersteuer auferlegt und dein Zeugnis vor Gericht entwertet?`,
    `Konnte ein Muslim im mittelalterlichen Ägypten Christ werden, ohne sein Leben zu riskieren?`,
    `Warum wurden die Kopten von der Mehrheit zur Minderheit, wenn die Dhimma keinen Druck ausübte?`,
  ],
  avoid: [
    `Die Dhimma als ununterbrochene Verfolgung darstellen – es gab lange Phasen des Friedens und der Blüte.`,
    `Bat Ye'ors polemischen Begriff „Dhimmitude" als wissenschaftlichen Befund ausgeben.`,
    `Die eigenen christlichen Hierarchien (Byzanz, Europa) verschweigen.`,
    `Heutige Muslime für die Dhimmi-Bestimmungen früherer Jahrhunderte verantwortlich machen.`,
  ],
  concessions: [
    `Die Dhimma gewährte Schutz von Leben, Eigentum und Kult sowie innere Autonomie; viele Juristen nahmen die Schutzpflicht ernst.`,
    `Im Vergleich zum lateinischen Mittelalter lebten religiöse Minderheiten im Islam oft sicherer.`,
    `Auch christliche Staaten (Byzanz, Westeuropa) kannten rechtliche Benachteiligung Andersgläubiger.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Mark R. Cohen', work: 'Under Crescent and Cross', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Milka Levy-Rubin', work: 'Non-Muslims in the Early Islamic Empire', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sidney H. Griffith', work: 'The Church in the Shadow of the Mosque', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Donald P. Little', work: 'Coptic Conversion to Islam under the Bahri Mamluks (BSOAS 39)', year: '1976', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Dhimma', 'Dschizya', 'Sure 9:29', 'Bedingungen Umars', 'Staatsbürgerschaft', 'Kopten'],
  related: ['koptische-kirche/kopten-begruessten-araber', 'islam-gewalt-scharia/schwertverse-kontext', 'islam-gewalt-scharia/scharia-gerecht', 'fruehes-christentum-vielfalt/christentum-durch-gewalt-verbreitet'],
};

export default claim;
