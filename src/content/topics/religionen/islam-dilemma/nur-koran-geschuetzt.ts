import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nur-koran-geschuetzt',
  title: `„Nur der Koran wird von Allah geschützt (15:9); die früheren Schriften wurden Menschen anvertraut (5:44)."`,
  proponents: [
    { name: 'al-Qurtubi', role: 'Andalusischer Korankommentator (gest. 1273)', work: 'al-Jami\' li-ahkam al-Qur\'an, zu 15:9' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'An Introduction to the Sciences of the Qur\'aan (1999)' },
    { name: 'Muhammad Mustafa al-Azami', role: 'Hadith- und Koranwissenschaftler (1930–2017)', work: 'The History of the Qur\'anic Text from Revelation to Compilation (2003)' },
  ],
  steelman: `„Der Unterschied liegt im Koran selbst: Über den Koran sagt Gott: ‚Wir haben die Ermahnung herabgesandt, und Wir werden sie gewiss bewahren' (15:9). Über die Tora sagt Er dagegen, dass die Rabbiner und Gelehrten nach ihr richteten, ‚weil ihnen die Bewahrung des Buches Allahs *anvertraut* war' (5:44). Die früheren Schriften wurden also Menschen zur Bewahrung übergeben – und Menschen versagen. Sufyan ibn Uyayna und al-Qurtubi haben genau das festgehalten. Die Verse über die Unveränderlichkeit von Gottes Worten (6:115; 18:27) beziehen sich auf den Koran oder auf Gottes Beschlüsse, nicht auf die Bücher der Juden und Christen. Deshalb gibt es keinen Widerspruch: Gott schützt sein letztes Buch selbst und ließ die früheren, zeitlich begrenzten Schriften in menschlicher Obhut."`,
  biblical: {
    summary: `**Im Koran:** 5:44 ist ein Lob, keine Anklage: Die Propheten, Rabbiner und Gelehrten *richteten* nach der Tora, „weil ihnen die Bewahrung des Buches Allahs anvertraut war und sie darüber Zeugen waren". Der Begriff „Ermahnung" (*adh-dhikr*) aus 15:9 wird auch für die Tora verwendet (21:48; vgl. 16:43 „die Leute der Ermahnung"). Die Verse 6:34 und 10:64 („keine Änderung für die Worte Allahs") sind allgemein formuliert. Und selbst wenn nur der Koran unter besonderem Schutz stünde: Der Koran setzt voraus, dass die Christen im 7. Jahrhundert ihr Evangelium hatten (5:47).

**In der Bibel:** Gott verheißt, sein Wort zu bewahren: „Das Wort unsres Gottes bleibt ewiglich" (Jes 40,8); „Himmel und Erde werden vergehen; aber meine Worte werden nicht vergehen" (Mt 24,35); vgl. 1 Petr 1,24–25.`,
    sources: [
      { kind: 'koran', work: 'Sure 15 (al-Hijr)', ref: '15:9', quote: `Gewiss, Wir haben die Ermahnung herabgesandt, und Wir werden fürwahr ihre Hüter sein.`, original: `innā naḥnu nazzalnā dh-dhikra wa-innā lahu la-ḥāfiẓūn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/15/9' },
      { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:44', quote: `… nach ihr richteten die Propheten … und die Rabbiner und Gelehrten, weil ihnen die Bewahrung des Buches Allahs anvertraut war und sie darüber Zeugen waren.`, original: `bi-mā stuḥfiẓū min kitābi llāhi wa-kānū ʿalayhi shuhadā\'`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/5/44' },
      { kind: 'koran', work: 'Sure 21 (al-Anbiya\')', ref: '21:48', quote: `Und Wir gaben Mose und Aaron die Unterscheidung, ein Licht und eine Ermahnung für die Gottesfürchtigen.`, original: `wa-dhikran li-l-muttaqīn`, translation: 'eigene Übersetzung nach dem arabischen Text', status: 'verbatim', url: 'https://quran.com/21/48' },
      { kind: 'bibel', work: 'Jesaja', ref: '40,8', quote: `Das Gras verdorrt, die Blume verwelkt; aber das Wort unsres Gottes bleibt ewiglich.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Gott bewahrt sein Wort nicht durch ein Wunder an einem einzigen Exemplar, sondern durch seine Kirche: durch die Fülle der Abschriften in vielen Sprachen, durch die sonntägliche Lesung in jeder Gemeinde seit apostolischer Zeit (Justin, um 155) und durch die sorgfältige Arbeit der Väter am Text (Origenes' Hexapla, Hieronymus' Vulgata). Diese weltweite, vielsprachige Überlieferung in Kirchen, die einander theologisch nicht schonten, ist ein stärkerer Schutz als jede einzelne Autorität, die einen Einheitstext durchsetzt.`,
    sources: [
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '67', year: 'um 155', quote: `Am Sonntag versammeln sich alle, und es werden die Erinnerungen der Apostel oder die Schriften der Propheten vorgelesen, solange es die Zeit erlaubt.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Origenes', work: 'Hexapla', year: 'ca. 230–245', quote: `Sechsspaltige Synopse des hebräischen Alten Testaments und griechischer Übersetzungen – frühe wissenschaftliche Textarbeit der Kirche von Alexandrien.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `5:44 lobt die Rabbiner, die nach der Tora richteten, „weil ihnen die Bewahrung anvertraut war" – das ist keine Anklage. Auch der Koran wurde Menschen anvertraut: Abu Bakr, Zaid ibn Thabit, Uthman. Und selbst wenn nur der Koran besonders geschützt wäre, ändert das nichts daran, dass der Koran die Christen seiner Zeit auf ihr Evangelium verpflichtet (5:47) – und dieses Evangelium kennen wir aus Handschriften vor Mohammed.`,
  keyPoints: [
    `**5:44 ist Lob:** Die Gelehrten richteten nach der Tora und waren „Zeugen darüber" – kein Wort von Versagen.`,
    `**„Dhikr" meint auch die Tora:** 21:48 nennt die Tora eine „Ermahnung"; 16:43 verweist auf „die Leute der Ermahnung".`,
    `**Auch der Koran ging durch Menschenhände:** Sammlung unter Abu Bakr und Uthman, Verbrennung abweichender Kodizes (Bukhari 4987).`,
    `**Die Frage ist eine Tatsachenfrage:** Ob ein Text bewahrt wurde, zeigen die Handschriften – und die zeigen für die Bibel vor 610 denselben Inhalt wie heute.`,
    `**Das Dilemma bleibt:** Auch ohne besonderen Schutz der Bibel setzt der Koran voraus, dass sie im 7. Jahrhundert vorlag und galt.`,
  ],
  voices: [
    {
      person: 'origenes',
      role: 'als Textforscher der alexandrinischen Schule',
      text: `Origenes wusste um Abschreibfehler und klagte, die Unterschiede zwischen den Handschriften seien teils durch Nachlässigkeit, teils durch Eigenmächtigkeit von Schreibern groß geworden. Seine Antwort war nicht Vertuschung, sondern Arbeit: Er verglich in der Hexapla den hebräischen Text mit allen griechischen Übersetzungen und kennzeichnete Abweichungen. So sieht menschliche Bewahrung unter Gottes Vorsehung aus – offen, prüfbar, korrigierbar.`,
      sources: [
        { kind: 'kirchenvater', author: 'Origenes', work: 'Matthäuskommentar', ref: 'XV,14', year: 'um 245', quote: `Die Unterschiede zwischen den Abschriften sind groß geworden, teils durch Nachlässigkeit mancher Schreiber, teils durch die Verwegenheit anderer.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'justin',
      role: 'als Zeuge der frühchristlichen Gottesdienstpraxis',
      text: `Justin beschreibt um 155 den Sonntagsgottesdienst: Die „Erinnerungen der Apostel" werden öffentlich vorgelesen. Eine Schrift, die jeden Sonntag in Hunderten Gemeinden laut gelesen wird, kann man nicht unbemerkt umschreiben – jede Gemeinde ist Zeuge ihres Textes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '66–67', year: 'um 155', quote: `Die Erinnerungen der Apostel, „die Evangelien genannt werden", werden im sonntäglichen Gottesdienst gelesen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'keith-small',
      role: 'als Erforscher der Koranhandschriften',
      text: `Small hat Bibel- und Koranüberlieferung nebeneinandergestellt. Sein Ergebnis: Auch der Koran hat eine Textgeschichte mit Varianten, Korrekturen und einer staatlich durchgesetzten Standardisierung unter Uthman. Der Unterschied ist nicht, dass der eine Text bewahrt und der andere verloren wäre, sondern dass beim Koran früh eine Fassung durchgesetzt und abweichende Kodizes vernichtet wurden, während die Bibel in vielen unabhängigen Strängen überliefert ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Holy Books Have a History: Textual Histories of the New Testament and the Qur\'an', year: '2010', quote: `Vergleich der Überlieferung beider Texte: Standardisierung beim Koran, plurale Überlieferung beim Neuen Testament.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'eusebius',
      role: 'als Kirchenhistoriker',
      text: `Eusebius berichtet, dass Kaiser Konstantin ihn mit der Herstellung von fünfzig Bibelhandschriften für die Kirchen Konstantinopels beauftragte. Das zeigt, dass im frühen 4. Jahrhundert vollständige Bibeln in Auftrag gegeben wurden – aber auch, dass ein Kaiser nur Abschriften bestellen, nicht die Tausenden Handschriften im ganzen Reich und jenseits seiner Grenzen (Persien, Äthiopien) austauschen konnte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Vita Constantini', ref: 'IV,36', year: 'um 337–339', quote: `Konstantin bestellt fünfzig Abschriften der heiligen Schriften auf Pergament für die Kirchen seiner neuen Hauptstadt.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'vers-15-9-gegen-5-44',
      objection: `15:9 verspricht den Schutz des Korans; 5:44 sagt, die Tora wurde den Rabbinern anvertraut. Gott hat also die eine Schrift selbst geschützt und die andere Menschen überlassen.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Lies 5:44 ganz: Die Propheten, Rabbiner und Gelehrten richteten nach der Tora, „weil ihnen die Bewahrung des Buches Allahs anvertraut war und sie darüber Zeugen waren". Das ist Lob, keine Anklage. Und auch den Koran hat Gott durch Menschen bewahrt – durch Zaid ibn Thabit und Uthman. Wenn Gott durch Menschen bewahren kann, warum nicht auch die Tora? Vor allem aber: Der Koran sagt, die Tora war zu Mohammeds Zeit bei den Juden und enthielt Allahs Urteil (5:43).`,
      followUps: [
        {
          id: 'qurtubi-anekdote',
          objection: `Al-Qurtubi erzählt von einem Juden, der Abschriften von Tora, Evangelium und Koran fälschte: Die gefälschte Tora und das gefälschte Evangelium wurden gekauft, der gefälschte Koran sofort erkannt. Daran sieht man, welche Schrift geschützt ist.`,
          objectionBy: 'al-Qurtubi (zu 15:9), heute oft wiederholt',
          answer: `Das ist eine erbauliche Anekdote aus dem 9. Jahrhundert, überliefert im 13. – kein historischer Beleg über den Bibeltext. Christen erkennen Fälschungen genauso: Hieronymus und Origenes verglichen Handschriften und benannten Fehler, und heute vergleichen Textkritiker über 5.000 griechische Handschriften. Ein einzelner Händler, der getäuscht wird, sagt nichts über die Überlieferung in Tausenden Gemeinden.`,
          sources: [
            { kind: 'hadith', author: 'al-Qurtubi', work: 'al-Jami\' li-ahkam al-Qur\'an', ref: 'zu 15:9', quote: `Anekdote um Yahya ibn Aktham und einen Juden, der gefälschte Abschriften der drei Schriften verkaufte; dazu die Deutung (Sufyan ibn Uyayna zugeschrieben), die Bewahrung der Tora sei Menschen übertragen (5:44), die des Korans habe Gott selbst übernommen (15:9).`, status: 'unverified', note: 'Nach verbreiteter Wiedergabe; Wortlaut und Überlieferer vor Verwendung prüfen.' },
          ],
          followUps: [
            {
              id: 'hafize-und-muendlichkeit',
              objection: `Der Koran wurde von Tausenden Hafizen auswendig bewahrt – das hatten die Christen nie. Deshalb ist nur der Koran sicher.`,
              objectionBy: 'Muhammad Mustafa al-Azami',
              answer: `Die Kirche hatte etwas Vergleichbares: Seit dem 2. Jahrhundert wurden die Evangelien jeden Sonntag in jeder Gemeinde laut gelesen (Justin, 1 Apol 67), in Ägypten bald auf Koptisch, in Syrien auf Syrisch. Und mündliche Überlieferung schützt nicht vor Varianten – auch beim Koran gibt es verschiedene anerkannte Lesarten (Hafs, Warsch u. a.) und Berichte über verlorene Verse. Ob ein Text bewahrt ist, entscheiden die Handschriften, nicht die Methode.`,
              detail: `Siehe ausführlich Claim „Der Koran ist Buchstabe für Buchstabe perfekt bewahrt" im Topic „Der Koran auf dem Prüfstand".`,
            },
          ],
        },
      ],
    },
    {
      id: 'dhikr-nur-koran',
      objection: `In 15:9 meint „dhikr" eindeutig den Koran – die Verse davor (15:6) sprechen von dem, „auf den die Ermahnung herabgesandt wurde", also Mohammed.`,
      objectionBy: 'klassische Auslegung',
      answer: `Einverstanden: Im Zusammenhang von Sure 15 ist der Koran gemeint. Aber daraus folgt nicht, dass Gott die Tora *nicht* bewahrt hätte – der Vers sagt nichts über andere Schriften. Der Koran nennt die Tora ebenfalls „Ermahnung" (21:48) und sagt allgemein: „Es gibt keine Änderung für die Worte Allahs" (10:64). Ein Versprechen für das eine ist kein Verlust des anderen.`,
      followUps: [
        {
          id: 'gott-wollte-nicht',
          objection: `Gott hätte die Bibel schützen können, aber er wollte es nicht – sie war nur für eine begrenzte Zeit bestimmt.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Dann war sie zur Zeit Mohammeds noch in Kraft: Der Koran befiehlt den Christen, nach ihr zu richten (5:47), und sagt, sie hätten ihn „bei sich aufgeschrieben" (7:157). Ein Verfall kann also frühestens nach 632 eingesetzt haben – und dagegen stehen alle Handschriften vor und nach dieser Zeit, die denselben Inhalt haben.`,
        },
      ],
    },
    {
      id: 'konzil-veraenderte-bibel',
      objection: `Die Bibel wurde von Menschen auf Konzilien geformt – Konstantin hat in Nizäa bestimmt, was hineinkommt und was nicht.`,
      objectionBy: 'verbreiteter Einwand (auch bei Ahmed Deedat)',
      answer: `Das Konzil von Nizäa 325 hat über den Kanon gar nicht beraten, sondern über die Lehre des Arius. Und wir haben Handschriften von *vor* 325 – P46 mit den Paulusbriefen, P66 und P75 mit den Evangelien –, die denselben Text haben wie die späteren. Konstantin kann nicht rückwirkend Papyri verändert haben, die schon 100 Jahre vor ihm geschrieben wurden.`,
      followUps: [
        {
          id: 'konstantins-50-bibeln',
          objection: `Aber Konstantin ließ fünfzig Bibeln herstellen. Damit hat er doch einen Einheitstext durchgesetzt – wie Uthman beim Koran.`,
          objectionBy: 'verbreiteter Einwand',
          answer: `Fünfzig Handschriften für die Kirchen einer Stadt – Konstantinopel – sind etwas völlig anderes, als im ganzen Reich alle anderen Abschriften zu verbrennen. Konstantin hat keine Bibeln verbrennen lassen; die Kirche in Persien, Äthiopien und Armenien lag außerhalb seiner Macht; und die vorkonstantinischen Papyri zeigen denselben Text. Den Vergleich mit Uthman machst du – nicht ich: Bei Uthman wurden abweichende Exemplare tatsächlich verbrannt (Sahih al-Bukhari 4987).`,
          sources: [
            { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4987', quote: `Uthman sandte in jede Provinz eine Abschrift und befahl, alles andere Koranmaterial, ob Fragment oder vollständige Abschrift, zu verbrennen.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:4987' },
          ],
        },
      ],
    },
    {
      id: 'warum-varianten-wenn-geschuetzt',
      objection: `Wenn Gott eure Bibel schützt – warum gibt es dann Hunderttausende Textvarianten? Der Koran hat so etwas nicht.`,
      objectionBy: 'Mohammed Hijab',
      answer: `Gott bewahrt sein Wort *durch* die Fülle der Abschriften – gerade weil es so viele gibt, kann man jeden Fehler erkennen und den ursprünglichen Text mit großer Sicherheit rekonstruieren. Bewahrung heißt nicht, dass kein Schreiber je einen Fehler macht. Auch für den Koran gibt es Handschriften mit Korrekturen und abweichenden Lesarten; der Unterschied ist, dass beim Koran die Vielfalt früh durch Verbrennung beseitigt wurde.`,
      detail: `Siehe die Claims „Die Bibel hat 400.000 Textvarianten" und „Der Koran ist Buchstabe für Buchstabe perfekt bewahrt".`,
    },
  ],
  questionsToAsk: [
    `Ist 5:44 ein Lob oder ein Tadel der Rabbiner?`,
    `Wurde der Koran nicht auch Menschen anvertraut – Abu Bakr, Zaid, Uthman?`,
    `Wenn die Bibel nur zeitlich begrenzt galt: Galt sie zur Zeit Mohammeds noch (5:47)?`,
    `Wie unterscheidest du „bewahrt" von „nicht bewahrt", außer durch den Vergleich der Handschriften?`,
  ],
  avoid: [
    `Nicht behaupten, 15:9 beziehe sich im Zusammenhang auf die Bibel – im Kontext ist der Koran gemeint. Argumentiere mit 21:48 und 10:64 nur ergänzend.`,
    `Nicht behaupten, die Bibel habe keine Textvarianten. Sie hat viele – aber keine verändert eine Lehre.`,
  ],
  concessions: [
    `Der Koran macht für sich selbst ein besonderes Bewahrungsversprechen (15:9), das er so für die früheren Schriften nicht wiederholt.`,
    `Die Bibelüberlieferung kennt Abschreibfehler und einige spätere Zusätze; die Kirche bewahrt das Wort durch Vergleich, nicht durch einen fehlerlosen Einzeltext.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Keith E. Small', work: 'Holy Books Have a History', year: '2010', status: 'paraphrase' },
    { kind: 'gegner', author: 'Muhammad Mustafa al-Azami', work: 'The History of the Qur\'anic Text from Revelation to Compilation', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Bruce M. Metzger / Bart D. Ehrman', work: 'The Text of the New Testament', year: '2005', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Islam', 'Bewahrung', 'Koran', 'Bibel'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-koran/koran-perfekt-bewahrt',
    'islam-bibelverfaelschung/bibel-textvarianten',
    'neues-testament/kanon-von-konstantin',
  ],
};

export default claim;
