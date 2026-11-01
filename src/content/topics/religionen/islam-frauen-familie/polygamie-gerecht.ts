import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'polygamie-gerecht',
  title: `„Die Polygamie ist im Islam gerecht geregelt (4:3)."`,
  proponents: [
    { name: 'Zakir Naik', role: 'Islamischer Prediger, Peace TV', work: 'Vorträge „Why is polygamy allowed in Islam?"' },
    { name: 'Jamal Badawi', role: 'Islamischer Gelehrter, Kanada', work: 'Gender Equity in Islam (1995)' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Sendungen über Ehe und Polygamie' },
    { name: 'Mohammed Hijab', role: 'Islamischer Apologet, London', work: 'Debatten über Polygamie und westliche Ehemoral' },
  ],
  steelman: `„Vor dem Islam hatten arabische Männer unbegrenzt viele Frauen. Der Koran begrenzte die Zahl auf vier und knüpfte sie an strenge Gerechtigkeit: ‚Wenn ihr fürchtet, nicht gerecht zu sein, dann nur eine' (4:3). Der Vers wurde nach der Schlacht von Uhud offenbart, als viele Witwen und Waisen versorgt werden mussten. Polygamie schützt Frauen in Gesellschaften mit Frauenüberschuss und gibt ihnen Rechte, Unterhalt und Erbe – statt sie, wie im Westen, als Geliebte ohne jeden Schutz zurückzulassen. Und die Bibel? Abraham, Jakob, David und Salomo hatten viele Frauen, und nirgends verbietet die Bibel ausdrücklich die Mehrehe. Jesus hat sie nie verurteilt. Zeig mir den Vers!"`,
  biblical: {
    summary: `Die Bibel berichtet von der Mehrehe der Patriarchen und Könige – aber sie beschreibt, sie empfiehlt nicht. Der Schöpfungsplan ist die Ehe von einem Mann und einer Frau: „Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch" (Gen 2,24). Jesus greift genau darauf zurück: „So sind sie nun nicht zwei, sondern ein Fleisch" (Mt 19,6), und er erklärt mosaische Zugeständnisse als Folge der „Herzenshärtigkeit" – „von Anbeginn aber ist's nicht also gewesen" (Mt 19,8). Paulus: „Ein jeglicher habe sein eigen Weib, und eine jegliche habe ihren eigenen Mann" (1 Kor 7,2); der Bischof sei „eines Weibes Mann" (1 Tim 3,2). Die Ehe ist Abbild der Liebe Christi zu der *einen* Kirche (Eph 5,25–32).`,
    detail: `**Die Mehrehe in der Bibel endet immer in Schmerz:** Sara und Hagar (Gen 16; 21), Lea und Rahel (Gen 29–30), Hanna und Peninna (1 Sam 1,6), Davids zerrüttetes Haus (2 Sam 13–18), Salomos Frauen, die „sein Herz fremden Göttern zuneigten" (1 Kön 11,3–4). Das Gesetz verbietet dem König ausdrücklich, „viele Weiber zu nehmen" (Dtn 17,17). Die Erzählungen sind ehrlich – und sie zeigen, dass die Mehrehe vom Plan Gottes abweicht.`,
    sources: [
      { kind: 'bibel', work: '1. Mose (Genesis)', ref: '2,24', quote: `Darum wird ein Mann seinen Vater und seine Mutter verlassen und an seinem Weibe hangen, und sie werden sein ein Fleisch.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '19,6', quote: `So sind sie nun nicht zwei, sondern ein Fleisch. Was nun Gott zusammengefügt hat, soll der Mensch nicht scheiden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '7,2', quote: `Aber um der Hurerei willen habe ein jeglicher sein eigen Weib, und eine jegliche habe ihren eigenen Mann.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '3,2', quote: `Es soll aber ein Bischof unsträflich sein, eines Weibes Mann.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '17,17', quote: `Der König soll nicht viele Weiber nehmen, daß sein Herz nicht abgewandt werde.`, translation: 'Luther 1912', status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche versteht die Ehe als Sakrament: Christus selbst verbindet Mann und Frau zu einer unauflöslichen Einheit, in der beide einander ganz gehören. Die Ehe ist ausschließlich monogam. Schon Justin warf im 2. Jahrhundert jüdischen Lehrern vor, dass sie Männern vier oder fünf Frauen gestatteten, und verwies auf das Vorbild der einen Ehe. Das koptische Kirchenrecht der Awlad al-ʿAssal hielt im islamisch geprägten Ägypten an der strengen Monogamie fest – gegen ein Umfeld, in dem die Mehrehe erlaubt war.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '134', year: 'um 160', quote: `Eure Lehrer erlauben euch, vier oder fünf Frauen zu haben – das ist nicht der Weg, den Christus lehrt.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptischer Ritus der Eheschließung (Krönung)', quote: `Gebet, dass Gott die beiden zu einem Fleisch verbinde und ihnen Einmütigkeit der Seele und Liebe schenke.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der Koran erlaubt Männern bis zu vier Ehefrauen unter der Bedingung gerechter Behandlung und daneben Beziehungen zu Sklavinnen („was eure Rechte besitzt", 4:3; 4:24; 23:5–6; 70:29–30). Der Prophet selbst hatte mehr als vier Frauen gleichzeitig, was der Koran als ihm allein vorbehaltene Ausnahme begründet (33:50). Muslimische Gelehrte begründen die Polygamie mit dem Schutz von Witwen und Waisen, Frauenüberschuss nach Kriegen und der Vermeidung von Unzucht. Moderne Reformer (etwa Muhammad Abduh im 19. Jh.) argumentierten, dass 4:3 zusammen mit 4:129 („Ihr werdet nicht gerecht sein können") faktisch auf die Einehe zielt; Tunesien verbot die Polygamie 1956.`,
    detail: `**Forschung zur Monogamie:** Joseph Henrich, Robert Boyd und Peter Richerson zeigten 2012, dass normative Monogamie den Wettbewerb unter Männern verringert, die Zahl unverheirateter junger Männer senkt und mit weniger Kriminalität und mehr Investition in Kinder einhergeht.`,
    sources: [
      { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:3', quote: `Und wenn ihr fürchtet, gegenüber den Waisen nicht gerecht zu sein, dann heiratet, was euch an Frauen gut erscheint, zwei, drei oder vier. Wenn ihr aber fürchtet, nicht gerecht zu handeln, dann nur eine oder was eure rechte Hand besitzt.`, original: `mathnā wa-thulātha wa-rubāʿa … fa-wāḥidatan aw mā malakat aymānukum`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/3' },
      { kind: 'koran', work: 'Sure 4 (an-Nisa\')', ref: '4:129', quote: `Und ihr werdet zwischen den Frauen nicht gerecht handeln können, auch wenn ihr danach trachtet.`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/4/129' },
      { kind: 'wissenschaft', author: 'Joseph Henrich / Robert Boyd / Peter J. Richerson', work: 'The puzzle of monogamous marriage', ref: 'Philosophical Transactions of the Royal Society B 367', year: '2012', quote: `Normative Monogamie verringert den Wettbewerb unter Männern, die Zahl unverheirateter Männer und damit verbundene Kriminalität und fördert die Investition in Kinder.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Begrenzung auf vier Frauen war gegenüber unbegrenzter Mehrehe ein Schritt – das erkenne ich an. Aber derselbe Koran sagt: „Ihr werdet zwischen den Frauen nicht gerecht handeln können, auch wenn ihr danach trachtet" (4:129), erlaubt zusätzlich Sklavinnen ohne Zahl (4:3; 23:5–6) und gewährt dem Propheten eine Sonderregel (33:50). Und Mohammed selbst wollte nicht, dass ʿAli zu Fatima eine zweite Frau nahm, weil es seine Tochter verletzen würde. Jesus führt die Ehe auf den Anfang zurück: „Die zwei werden ein Fleisch sein" (Mt 19,5–6) – einer und eine.`,
  keyPoints: [
    `**Fairness:** 4:3 begrenzte die Zahl und verlangt Gerechtigkeit; viele Muslime leben monogam, und manche Staaten haben die Polygamie eingeschränkt oder verboten.`,
    `**Der Koran selbst:** 4:129 – volle Gerechtigkeit zwischen Frauen ist unmöglich.`,
    `**Sklavinnen und Sonderrechte:** „was eure Rechte besitzt" (4:3; 23:5–6) ohne Begrenzung; Sonderregel für den Propheten (33:50).`,
    `**Asymmetrie:** Eine Frau darf nicht mehrere Männer haben – wenn es um Gerechtigkeit für Frauen geht, warum diese Einseitigkeit?`,
    `**Das Zeugnis der Fatima:** Nach dem Hadith lehnte der Prophet eine zweite Ehe ʿAlis ab, solange Fatima seine Frau war – er wusste, wie sehr es sie verletzen würde.`,
    `**Biblischer Plan:** Gen 2,24; Mt 19,4–8; 1 Kor 7,2; Eph 5 – die Mehrehe der Patriarchen wird berichtet, nicht empfohlen, und endet immer in Leid.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Prediger über die Ehe als Abbild Christi und der Kirche',
      text: `Chrysostomus erklärt in seiner Homilie zu Eph 5, dass der Mann seine Frau so lieben soll, wie Christus die Kirche liebt – bis zur Hingabe des Lebens. Christus hat nicht viele Bräute, sondern eine Kirche; so ist die Ehe ein Bund, in dem zwei ganz einander gehören. Die Liebe des Mannes zeigt sich darin, dass er seine Frau nicht wie eine Sklavin behandelt, sondern sie durch Zuneigung gewinnt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Epheserbrief', ref: 'Hom. 20 (zu Eph 5,22–33)', year: 'um 390', quote: `Der Mann soll seine Frau so lieben, wie Christus die Kirche geliebt hat, auch wenn er sein Leben für sie hingeben müsste; er soll sie nicht durch Furcht, sondern durch Liebe an sich binden.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'ibn-al-assal',
      role: 'als koptischer Kirchenrechtler im islamischen Ägypten',
      text: `Al-Safi ibn al-ʿAssal stellte im 13. Jahrhundert das Kirchenrecht der koptischen Kirche zusammen. In einem Umfeld, in dem das islamische Recht die Mehrehe erlaubte, hielt es unbeirrt an der christlichen Einehe fest. Das war für koptische Männer nicht immer bequem, aber die Kirche blieb dem Wort Christi treu: Die Ehe ist der Bund eines Mannes mit einer Frau.`,
    },
    {
      person: 'johannes-damaskus',
      role: 'als früher christlicher Kenner des Korans',
      text: `Johannes von Damaskus kritisiert in seiner Darstellung des Islam die Bestimmungen der Sure „Die Frau", die mehrere Ehefrauen und daneben Sklavinnen erlauben, sowie die Leichtigkeit der Scheidung. Er erwähnt auch die Geschichte um Zayd und Zaynab (33:37) und fragt, wie eine Offenbarung dem Propheten persönliche Sonderrechte gewähren könne. Seine Kritik ist ein Zeugnis dafür, dass Christen schon im 8. Jahrhundert diese Fragen stellten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien (De haeresibus)', ref: 'Kap. 100/101', year: 'um 743', quote: `Kritik an der Erlaubnis mehrerer Frauen und Sklavinnen und an der Erzählung um Zayd und seine Frau.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Kenner der klassischen Quellen',
      text: `Zakaria Botros hat in seinen Sendungen die Bestimmungen des klassischen islamischen Eherechts – Mehrehe, Sklavinnen, Scheidungsrecht – anhand der Tafsir- und Fiqh-Werke dargestellt und Muslime gefragt, ob diese Ordnung der Würde der Frau entspricht. Er stellt dem die christliche Ehe als Sakrament der einen, gegenseitigen Liebe gegenüber.`,
    },
  ],
  dialog: [
    {
      id: 'kein-bibelvers-verbietet',
      objection: `Zeig mir einen einzigen Vers, in dem die Bibel Polygamie verbietet! Abraham, Jakob, David, Salomo – alle hatten mehrere Frauen.`,
      objectionBy: 'Zakir Naik',
      answer: `Gern: Jesus führt die Ehe auf den Schöpfungsplan zurück – „die zwei werden ein Fleisch sein … So sind sie nun nicht zwei, sondern ein Fleisch" (Mt 19,5–6). Paulus: „Ein jeglicher habe sein eigen Weib, und eine jegliche ihren eigenen Mann" (1 Kor 7,2). Die Patriarchen werden ehrlich berichtet – und jede Mehrehe in der Bibel endet in Eifersucht und Leid. Die Bibel beschreibt, sie empfiehlt nicht.`,
      followUps: [
        {
          id: 'gott-gab-david-frauen',
          objection: `Gott selbst sagt zu David: „Ich habe dir die Frauen deines Herrn in deinen Schoß gegeben" (2 Sam 12,8). Also hat Gott die Polygamie gebilligt.`,
          objectionBy: 'Shabir Ally',
          answer: `Der Satz steht in Nathans Strafrede: Gott hat David das Königtum samt dem Haus Sauls gegeben – die Übernahme des Hofes war Zeichen der Thronfolge. Der Punkt ist Davids Undankbarkeit, und unmittelbar danach wird das Gericht angekündigt. Das Gesetz selbst verbietet dem König, „viele Weiber zu nehmen" (Dtn 17,17). Gott hat manches geduldet – wie die Scheidung „um eures Herzens Härtigkeit willen" (Mt 19,8) –, aber der Plan bleibt.`,
          followUps: [
            {
              id: 'geduldet-keine-suende',
              objection: `Geduldet ist geduldet. Wenn Gott es duldete, ist es keine Sünde.`,
              objectionBy: 'Zakir Naik',
              answer: `Jesus wendet genau dieses Prinzip an: Was Mose wegen der Herzenshärte duldete, wird durch den Anfang korrigiert – „von Anbeginn aber ist's nicht also gewesen" (Mt 19,8). Die Kirche hat seit den Aposteln nur die Einehe gekannt; Justin hält schon im 2. Jahrhundert jüdischen Lehrern vor, dass sie mehrere Frauen erlauben (Dialog mit Tryphon 134).`,
              followUps: [
                {
                  id: 'mt-19-nur-scheidung',
                  objection: `Mt 19 handelt von Scheidung, nicht von Polygamie. Du überträgst den Text.`,
                  objectionBy: 'Shabir Ally',
                  answer: `Jesu Begründung trägt beides: „die zwei" werden ein Fleisch. Und er sagt: Wer sich scheidet und eine andere heiratet, bricht die Ehe (Mk 10,11). Wenn schon eine zweite Ehe *nach* der Scheidung Ehebruch ist, solange die erste Frau lebt – wie viel mehr eine zweite Frau *neben* der ersten?`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'begrenzung-auf-vier',
      objection: `4:3 hat die unbegrenzte Polygamie auf vier Frauen begrenzt und verlangt Gerechtigkeit. Das war ein enormer Fortschritt.`,
      objectionBy: 'Jamal Badawi',
      answer: `Gegenüber unbegrenzter Mehrehe war es eine Begrenzung – das gestehe ich zu. Aber derselbe Koran sagt in 4:129: „Ihr werdet zwischen den Frauen nicht gerecht handeln können, auch wenn ihr danach trachtet." Dazu kommen Sklavinnen ohne Begrenzung („was eure rechte Hand besitzt", 4:3; 23:5–6), und für den Propheten eine Sonderregel ohne Begrenzung (33:50).`,
      sources: [
        { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:50', quote: `O Prophet, Wir haben dir deine Gattinnen erlaubt … – dies ist dir allein vorbehalten, nicht den (übrigen) Gläubigen.`, original: `khāliṣatan laka min dūni l-muʾminīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/33/50' },
      ],
      followUps: [
        {
          id: 'gefuehle-vs-aeusseres',
          objection: `4:129 meint die Gefühle, die niemand steuern kann; 4:3 meint die äußere Gerechtigkeit – Unterhalt, Zeit, Wohnung. Das ist kein Widerspruch.`,
          objectionBy: 'klassische Ausleger',
          answer: `Das ist die klassische Harmonisierung, und sie ist nicht unvernünftig. Aber sie räumt ein, dass in einer polygamen Ehe Frauen mit ungleicher Liebe leben müssen – nicht durch Versagen, sondern durch die Struktur selbst. Die christliche Ehe ruft den Mann dagegen zur ganzen Hingabe an *eine* Frau: „Wer sein Weib liebt, der liebt sich selbst" (Eph 5,28).`,
          followUps: [
            {
              id: 'sklaverei-abgeschafft',
              objection: `Sklaverei und Konkubinat gibt es heute nicht mehr. Das ist also kein Argument gegen den Islam.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `In der Praxis wurde die Sklaverei im 20. Jahrhundert abgeschafft – in Saudi-Arabien etwa erst 1962, und oft auf äußeren Druck. Aber die Erlaubnis im Text bleibt bestehen, und der IS hat 2014 die Versklavung jesidischer Frauen ausdrücklich mit klassischem Recht begründet. Muslimische Gelehrte haben das zu Recht verurteilt – doch die Wurzel liegt im Text.`,
              followUps: [
                {
                  id: 'bibel-kriegsgefangene',
                  objection: `Auch die Bibel erlaubt Kriegsgefangene als Frauen (Dtn 21,10–14) und Sklaverei.`,
                  objectionBy: 'Mohammed Hijab',
                  answer: `Dtn 21,10–14 ist eine Begrenzung in einer altorientalischen Kriegswelt: Die Frau erhält einen Monat Trauer, wird volle Ehefrau und darf nicht verkauft werden. Entscheidend ist aber: Das Neue Testament kennt kein Konkubinat, und es waren Christen, die die Sklaverei aus Glaubensgründen bekämpften (etwa William Wilberforce). Der Koran als letzte Offenbarung erlaubt dagegen weiterhin „was eure rechte Hand besitzt".`,
                  detail: `Siehe Claim „Die Bibel befürwortet Sklaverei" (Topic „Altes Testament & Ethik").`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'witwen-uhud',
      objection: `Die Polygamie diente dem Schutz von Witwen und Waisen. Nach der Schlacht von Uhud gab es viele schutzlose Frauen.`,
      objectionBy: 'Shabir Ally',
      answer: `Für jene Lage ist das ein ehrenwertes Motiv. Aber die Kirche versorgte ihre Witwen ohne Mehrehe – als Familie Gottes (Apg 6,1–6; 1 Tim 5,3–16; Jak 1,27). Und die Ehen des Propheten waren nicht alle mit schutzbedürftigen Witwen: Aischa war ein junges Mädchen, Safiyya und Juwayriyya waren Kriegsgefangene.`,
      followUps: [
        {
          id: 'politische-ehen',
          objection: `Die Ehen mit Safiyya und Juwayriyya waren politische Akte der Versöhnung – Juwayriyyas Heirat führte zur Freilassung vieler Gefangener ihres Stammes.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Bei Juwayriyya berichten die Quellen tatsächlich die Freilassung vieler Gefangener – das gestehe ich zu. Safiyya aber wurde nach der Einnahme von Khaybar Mohammeds Frau, wo ihr Mann und ihre Verwandten getötet worden waren. Die Ehe wurde noch auf dem Rückweg geschlossen.`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab al-Maghazi (Khaybar)', quote: `Nach der Einnahme von Khaybar wurde Safiyya bint Huyayy, deren Mann getötet worden war, gefangen genommen; der Prophet ließ sie frei und machte ihre Freilassung zu ihrer Brautgabe.`, status: 'unverified', note: 'Mehrfach bei Bukhari (u. a. im Kapitel über Khaybar); Nummer vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'freilassung-ehre',
              objection: `Ihre Freilassung war ihre Brautgabe – das war eine große Ehre für sie. Sie wurde Mutter der Gläubigen.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Mag sein, dass der Prophet ihr persönlich Güte erwies. Aber eine Zustimmung, die eine Gefangene am Tag nach der Niederlage ihres Volkes gibt, ist schwer als frei zu bezeichnen. Und die Frage bleibt: Ist die Ehe mit einer Gefangenen kurz nach dem Tod ihres Mannes ein Vorbild für alle Zeiten?`,
              followUps: [
                {
                  id: 'wieder-moderne-massstaebe',
                  objection: `Du urteilst schon wieder mit modernen Maßstäben über das 7. Jahrhundert.`,
                  objectionBy: 'Jonathan A. C. Brown',
                  answer: `Dann bin ich wieder beim Vorbild-Dilemma: Wenn es nur mit den Maßstäben des 7. Jahrhunderts verständlich ist, ist es kein Vorbild für alle Zeiten. Wenn es ein Vorbild für alle Zeiten ist, darf ich es mit den Maßstäben aller Zeiten prüfen.`,
                  detail: `Siehe Claim „Mohammeds Leben ist das vollkommene Vorbild für alle Zeiten".`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'westen-affaeren',
      objection: `Westliche Männer haben Affären und Geliebte, die keinerlei Rechte haben. Die islamische Polygamie ist ehrlicher und schützt die Frauen rechtlich.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Ehebruch ist nach christlicher Lehre Sünde (Ex 20,14; Mt 5,28) – ein westlicher Ehebrecher handelt gegen das Christentum, nicht nach ihm. Man muss Ideal mit Ideal vergleichen: das christliche Ideal der Einehe mit dem islamischen Ideal der erlaubten Mehrehe – nicht das islamische Ideal mit westlicher Sünde.`,
      followUps: [
        {
          id: 'frauenueberschuss',
          objection: `Es gibt mehr Frauen als Männer auf der Welt. Ohne Polygamie bleiben viele Frauen allein.`,
          objectionBy: 'Zakir Naik',
          answer: `Weltweit ist das Zahlenverhältnis der Geschlechter annähernd ausgeglichen; bei der Geburt kommen sogar etwas mehr Jungen zur Welt. Polygamie führt dazu, dass viele Männer ohne Frau bleiben – Forscher wie Joseph Henrich zeigen, dass das mit mehr Wettbewerb, Gewalt und Kriminalität einhergeht. Die Einehe ist auch gesellschaftlich ein Segen.`,
          followUps: [
            {
              id: 'frauen-waehlen-freiwillig',
              objection: `Viele Frauen wählen die Polygamie freiwillig. Das ist ihre Freiheit.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Manche tun es. Aber wenn es um Gerechtigkeit geht – warum darf eine Frau dann nicht mehrere Männer heiraten? Und bemerkenswert: Als ʿAli eine zweite Frau neben Fatima nehmen wollte, lehnte der Prophet ab, „es sei denn, ʿAli scheidet sich von meiner Tochter" – denn „Fatima ist ein Teil von mir; was sie verletzt, verletzt mich".`,
              sources: [
                { kind: 'hadith', work: 'Sahih al-Bukhari', ref: 'Kitab an-Nikah', quote: `Die Banu Hisham ibn al-Mughira baten um Erlaubnis, ihre Tochter mit ʿAli zu verheiraten. Der Prophet: „Ich erlaube es nicht … es sei denn, ʿAli scheidet sich von meiner Tochter. Denn sie ist ein Teil von mir; was sie beunruhigt, beunruhigt mich, und was sie verletzt, verletzt mich."`, status: 'unverified', note: 'Häufig als Bukhari 5230 zitiert (auch bei Muslim 2449); Nummer vor Verwendung prüfen.' },
              ],
              followUps: [
                {
                  id: 'tochter-abu-jahls',
                  objection: `Das war nur, weil es die Tochter Abu Jahls war, des Feindes Allahs – nicht wegen der Polygamie an sich.`,
                  objectionBy: 'traditionelle Gelehrte',
                  answer: `Andere Fassungen nennen diesen Grund, das gestehe ich zu. Aber der Prophet sagt ausdrücklich, dass es Fatima *verletzen* würde. Der Schmerz einer Frau, die ihren Mann teilen muss, wird hier anerkannt. Wenn es die Tochter des Propheten verletzt, verletzt es auch die Töchter anderer Väter. „Alles nun, was ihr wollt, daß euch die Leute tun sollen, das tut ihr ihnen" (Mt 7,12).`,
                  sources: [
                    { kind: 'bibel', work: 'Matthäus', ref: '7,12', quote: `Alles nun, was ihr wollt, daß euch die Leute tun sollen, das tut ihr ihnen.`, translation: 'Luther 1912', status: 'verbatim' },
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
    `Wie verstehst du 4:129: „Ihr werdet zwischen den Frauen nicht gerecht handeln können"?`,
    `Warum darf eine Frau nicht mehrere Männer haben, wenn die Polygamie um der Gerechtigkeit willen erlaubt ist?`,
    `Warum wollte der Prophet nicht, dass ʿAli eine zweite Frau neben Fatima nahm?`,
    `Was bedeutet „was eure rechte Hand besitzt" (4:3; 23:5–6) – und gilt diese Erlaubnis noch?`,
  ],
  avoid: [
    `Nicht behaupten, die Bibel enthalte keinerlei Polygamie – sie berichtet sie offen. Der Punkt ist: beschrieben, nicht empfohlen.`,
    `Nicht muslimische Familien mit mehreren Frauen verspotten. Viele Muslime leben ohnehin monogam.`,
    `Nicht mit dem westlichen Eheleben als christlichem Ideal argumentieren. Hohe Scheidungsraten und Ehebruch sind kein christliches Vorbild.`,
  ],
  concessions: [
    `Die Begrenzung auf vier Frauen und die Forderung nach Gerechtigkeit waren gegenüber unbegrenzter Mehrehe eine Einschränkung.`,
    `Die Patriarchen und Könige Israels lebten in Mehrehe, und das Alte Testament verbietet sie nicht ausdrücklich für alle.`,
    `In der Praxis leben die meisten Muslime monogam, und einige mehrheitlich muslimische Staaten haben die Polygamie eingeschränkt oder verboten.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kecia Ali', work: 'Marriage and Slavery in Early Islam', year: '2010', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Joseph Henrich / Robert Boyd / Peter J. Richerson', work: 'The puzzle of monogamous marriage (Phil. Trans. R. Soc. B 367)', year: '2012', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jamal Badawi', work: 'Gender Equity in Islam', year: '1995', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Islam', 'Polygamie', 'Ehe', 'Frauen', 'Monogamie', 'Sklaverei'],
  related: [
    'islam-frauen-familie/islam-befreite-frau',
    'islam-frauen-familie/aischa-alter',
    'islam-hadith-sira/sira-vorbildlicher-charakter',
    'at-ethik/bibel-befuerwortet-sklaverei',
    'sexualethik/ehe-soziales-konstrukt',
    'islam-mohammed/mohammed-wahrer-prophet',
  ],
};

export default claim;
