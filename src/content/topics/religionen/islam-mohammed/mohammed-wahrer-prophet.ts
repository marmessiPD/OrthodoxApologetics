import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'mohammed-wahrer-prophet',
  title: `„Mohammed erfüllt alle Kriterien eines wahren Propheten."`,
  proponents: [
    { name: 'Hamza Andreas Tzortzis', role: 'Islamischer Apologet', work: 'The Divine Reality (2016) – Kapitel zum Prophetentum Muhammads' },
    { name: 'Shabir Ally', role: 'Islamischer Apologet, Let the Quran Speak', work: 'Debatte „Was Muhammad a Prophet of God?" (u. a. mit David Wood)' },
    { name: 'Yasir Qadhi', role: 'Islamischer Gelehrter, Dallas', work: 'Vortragsreihe zur Sira (Prophetenbiografie)' },
    { name: 'Jonathan A. C. Brown', role: 'Islamwissenschaftler, Georgetown University (Muslim)', work: 'Muhammad: A Very Short Introduction (2011)' },
    { name: 'Abu Bakr al-Bayhaqi', role: 'Hadithgelehrter (gest. 1066)', work: 'Dalāʾil an-nubuwwa (Beweise des Prophetentums)' },
  ],
  steelman: `Muhammad wuchs als Waise ohne Schulbildung auf, war schon vor seiner Berufung als *al-Amīn*, „der Vertrauenswürdige", bekannt und brachte mit dem Koran ein Werk hervor, dessen Sprache und Inhalt niemand nachahmen konnte (2:23). Er rief zum reinen Monotheismus Abrahams zurück, schaffte den Götzendienst Arabiens ab, verbot das Lebendigbegraben von Mädchen und gab Witwen und Waisen Rechte. Er sagte Ereignisse voraus, die eintrafen – etwa den Sieg der Byzantiner über die Perser (30:2–4). Er blieb trotz Verfolgung standhaft und lebte bescheiden, obwohl er Herrscher war. Binnen eines Jahrhunderts reichte seine Gemeinschaft von Spanien bis Indien. Nach der Bibel erkennt man einen Propheten an seinen Früchten (Mt 7,16) – und die Früchte Muhammads sind Monotheismus, Gebet und Gerechtigkeit. „Ihr habt im Gesandten Allahs ein schönes Vorbild" (33:21); „du bist wahrlich von gewaltiger Charakterstärke" (68:4).`,
  biblical: {
    summary: `Die Bibel gibt ausdrückliche Prüfsteine für Propheten – und der Koran selbst verweist Muslime auf Tora und Evangelium (5:43–47; 10:94). (1) **Dtn 13,1–5:** Selbst wenn ein Prophet Zeichen tut, die eintreffen, ist er abzulehnen, wenn er vom Gott wegführt, der sich Israel offenbart hat. (2) **Dtn 18,20–22:** Was ein Prophet im Namen Gottes ankündigt, muss eintreffen. (3) **1 Joh 2,22–23; 4,1–3:** „Prüfet die Geister" – der Geist Gottes bekennt, dass Jesus der Christus ist, „in das Fleisch gekommen"; wer den Sohn leugnet, hat auch den Vater nicht. (4) **Gal 1,8–9:** Selbst ein Engel vom Himmel, der ein anderes Evangelium bringt, ist abzulehnen. (5) **Mt 7,15–20:** an den Früchten erkennen. Der Kern des apostolischen Evangeliums ist Christi Tod für unsere Sünden und seine Auferstehung (1 Kor 15,3–4) und sein Sohnsein (Joh 20,31) – genau das bestreitet der Koran (4:157; 5:72–73; 9:30; 19:35).`,
    detail: `- **Dtn 13,2–4:** Das Eintreffen eines Zeichens reicht nicht; entscheidend ist, ob der Prophet beim offenbarten Gott bleibt. Darum genügt auch eine erfüllte Vorhersage (30:2–4) für sich genommen nicht.
- **Hebr 1,1–2:** Gott hat „am letzten in diesen Tagen" durch den Sohn geredet – das NT erwartet keine neue, die Sohnesoffenbarung korrigierende Prophetie. **Judas 3:** der Glaube, „der einmal den Heiligen übergeben ist".
- **1 Joh 4,1–3:** Johannes richtet diesen Maßstab gegen Lehrer, die bestritten, dass Christus wirklich im Fleisch gekommen und gestorben sei – der Doketismus war die erste Form der Kreuzesleugnung.
- **Mt 7,15–20** steht im Zusammenhang der Bergpredigt: Feindesliebe, Sanftmut, Gewaltverzicht. Die „Früchte" werden an der Lehre und am Leben Jesu gemessen.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '13,2–4', quote: `Wenn ein Prophet oder Träumer unter euch wird aufstehen und gibt dir ein Zeichen oder Wunder, und das Zeichen oder Wunder kommt, davon er dir gesagt hat, und er spricht: Laß uns andern Göttern folgen … so sollst du nicht gehorchen den Worten solches Propheten oder Träumers.`, translation: 'Luther 1912', status: 'paraphrase', note: 'In Luther 1912 als 13,1–3 gezählt; Wortlaut gekürzt.' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '18,22', quote: `Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Gekürzt.' },
      { kind: 'bibel', work: '1. Johannes', ref: '2,22–23', quote: `Wer ist ein Lügner, wenn nicht, der da leugnet, daß Jesus der Christus sei? Das ist der Widerchrist, der den Vater und den Sohn leugnet. Wer den Sohn leugnet, der hat auch den Vater nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '4,1–2', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viel falsche Propheten ausgegangen in die Welt. Daran sollt ihr den Geist Gottes erkennen: ein jeglicher Geist, der da bekennt, daß Jesus Christus ist in das Fleisch gekommen, der ist von Gott.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '1,8', quote: `Aber so auch wir oder ein Engel vom Himmel euch würde Evangelium predigen anders, denn das wir euch gepredigt haben, der sei verflucht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '7,15–16', quote: `Sehet euch vor vor den falschen Propheten, die in Schafskleidern zu euch kommen, inwendig aber sind sie reißende Wölfe. An ihren Früchten sollt ihr sie erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche bekennt, dass Gottes Offenbarung in Jesus Christus, dem menschgewordenen Wort, ihre Fülle erreicht hat (Hebr 1,1–2; Joh 1,18). Eine spätere Botschaft, die Kreuz, Auferstehung und Gottessohnschaft bestreitet, kann sie nicht als Prophetie in der Linie der Bibel anerkennen. Zugleich lebt die koptische Kirche seit dem 7. Jahrhundert mit Muslimen zusammen und hat eine Tradition des respektvollen Gesprächs: Severus ibn al-Muqaffa' und Paulus al-Buschi erklärten den Glauben, ohne den Propheten der Muslime zu schmähen. Das Urteil über Muhammads Anspruch ist ein Urteil über seine Botschaft im Licht des Evangeliums, kein Urteil über die Würde der Muslime.`,
    detail: `Schon die frühesten christlichen Gesprächspartner des Islam stellten die Frage nach den Kriterien: **Johannes von Damaskus** (um 743) fragt, wo die Zeugen für Muhammads Offenbarung seien, wo doch Mose das Gesetz vor dem ganzen Volk am Sinai empfing und die Propheten Christus angekündigt hatten. **Timotheus I.** würdigte gegenüber dem Kalifen al-Mahdi (781), dass Muhammad gegen den Götzendienst kämpfte und zum einen Gott rief – „er ging den Weg der Propheten" –, lehnte aber ab, ihn als in der Schrift angekündigten Propheten anzuerkennen, weil seine Botschaft dem Evangelium widerspreche.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', year: 'ca. 743', status: 'paraphrase', note: 'Frage nach Zeugen und prophetischer Ankündigung.' },
      { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase', note: 'Die Wendung „walked in the path of the prophets" nach A. Mingana (1928) wird oft zitiert; Wortlaut vor Verwendung prüfen.' },
      { kind: 'bibel', work: 'Hebräer', ref: '1,1–2', quote: `Nachdem vorzeiten Gott manchmal und mancherleiweise geredet hat zu den Vätern durch die Propheten, hat er am letzten in diesen Tagen zu uns geredet durch den Sohn …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Historisch ist die Quellenlage zu Muhammad komplexer als zu den meisten Propheten der Bibel: Die früheste erhaltene Biografie (Ibn Hischams Bearbeitung der Sira des Ibn Ishaq) entstand etwa 120–200 Jahre nach seinem Tod; die großen Hadithsammlungen (Bukhari, Muslim) im 9. Jahrhundert. Muslimische Gelehrte vertrauen auf die Methode der Überlieferungskritik (*isnād*); westliche Forscher sind unterschiedlich skeptisch. Für die Apologetik heißt das: Man argumentiert am besten mit den Texten, die Muslime selbst als zuverlässig anerkennen (Koran, Sahih al-Bukhari, Sahih Muslim), und nennt bei umstrittenen Berichten (etwa den „satanischen Versen") offen die innerislamische Debatte.`,
    detail: `Zum Bericht über die „satanischen Verse" (Muhammad habe nach Sure 53,19–20 kurzzeitig Worte verkündet, die die Göttinnen al-Lat, al-ʿUzza und Manat als Fürsprecherinnen anerkannten, die dann zurückgenommen wurden): Er steht bei frühen Historikern und Exegeten (u. a. at-Tabari, Ibn Saʿd, al-Wahidi), nicht aber in Bukhari oder Muslim. Shahab Ahmed hat gezeigt, dass die frühen Generationen (ca. 632–800) den Bericht weitgehend als Tatsache überlieferten und dass seine Ablehnung erst später zur Orthodoxie wurde. Gelehrte wie al-Qadi ʿIyad und in der Moderne al-Albani verwarfen ihn; Ibn Hajar meinte, die Vielzahl der Ketten deute auf einen wahren Kern. Fair ist: Heute lehnt die große Mehrheit der Muslime den Bericht ab.`,
    sources: [
      { kind: 'fachliteratur', author: 'Shahab Ahmed', work: 'Before Orthodoxy: The Satanic Verses in Early Islam', year: '2017', status: 'paraphrase', note: 'Untersucht rund 50 frühe Überlieferungen; Ergebnis: frühe Akzeptanz, spätere Ablehnung.' },
      { kind: 'hadith', author: 'Muhammad ibn Jarir at-Tabari', work: 'Taʾrīkh ar-rusul wa-l-mulūk; Jāmiʿ al-bayān zu 22:52', year: 'gest. 923', status: 'paraphrase', note: 'Überliefert den Bericht in mehreren Fassungen.' },
      { kind: 'fachliteratur', author: 'Jonathan A. C. Brown', work: 'Hadith: Muhammad\'s Legacy in the Medieval and Modern World', year: '2009', status: 'paraphrase', note: 'Muslimische Darstellung der Hadithwissenschaft und ihrer Methoden.' },
    ],
  },
  quickAnswer: `Ich anerkenne, dass Muhammad gegen den Götzendienst kämpfte und zum einen Gott rief. Aber der Koran selbst verweist auf Tora und Evangelium als Maßstab (10:94; 5:47) – und dort ist das Kriterium klar: Selbst ein Engel vom Himmel, der ein anderes Evangelium bringt, ist abzulehnen (Gal 1,8), und „wer den Sohn leugnet, hat auch den Vater nicht" (1 Joh 2,23). Muhammad bestreitet Kreuz und Gottessohnschaft – die Mitte des Evangeliums. Nach dem Maßstab, auf den er selbst verweist, kann ich ihn nicht als Propheten in der Linie Jesu anerkennen.`,
  keyPoints: [
    `**Der Maßstab ist vom Koran selbst gegeben:** Er verweist auf Tora und Evangelium (5:43–47; 10:94; 7:157). Deren Prophetenkriterien darf man also anwenden.`,
    `**Dtn 13:** Zeichen und eingetroffene Vorhersagen genügen nicht, wenn die Botschaft vom offenbarten Gott wegführt.`,
    `**1 Joh 2,22–23; 4,1–3; Gal 1,8:** Das christologische Kriterium – Bekenntnis zum Sohn, der im Fleisch kam, starb und auferstand. Der Koran bestreitet genau das.`,
    `**Die islamischen Quellen selbst** berichten Unsicherheit bei der ersten Offenbarung (Bukhari 3), zeitweilige Beeinflussung durch Zauber (Bukhari 5763) und – nach frühen Historikern – die „satanischen Verse"; der Koran kennt die Möglichkeit, dass Satan „in den Wunsch" eines Propheten etwas einwirft (22:52; vgl. 17:73–74).`,
    `**Erfolg ist kein biblisches Wahrheitskriterium;** das Christentum wuchs drei Jahrhunderte lang ohne Macht und unter Verfolgung.`,
    `**Respekt und Klarheit zugleich:** Wie Timotheus I. kann man Muhammads Kampf gegen den Götzendienst würdigen und doch seinen prophetischen Anspruch im Licht des Evangeliums verneinen.`,
  ],
  argument: {
    name: 'Das Kriterien-Argument',
    summary: 'Gemessen an den biblischen Prophetenkriterien – auf die der Koran selbst verweist – kann Muhammad nicht als Prophet in der Linie Jesu gelten.',
    premises: [
      {
        text: `P1: Der Koran bestätigt Tora und Evangelium als Offenbarung und verweist auf sie als Maßstab.`,
        support: `„Die Leute des Evangeliums sollen nach dem urteilen, was Allah darin herabgesandt hat" (5:47); „Wenn du im Zweifel bist …, so frage diejenigen, die vor dir die Schrift lesen" (10:94). Zur Frage, ob das Evangelium zur Zeit Muhammads unverfälscht war, siehe das Islamische Dilemma.`,
        sources: [
          { kind: 'koran', work: 'Sure 5 (al-Ma\'ida)', ref: '5:47', quote: `Und die Leute des Evangeliums sollen nach dem urteilen, was Allah darin herabgesandt hat.`, original: `wa-l-yaḥkum ahlu l-injīli bi-mā anzala llāhu fīh`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/5/47' },
          { kind: 'koran', work: 'Sure 10 (Yunus)', ref: '10:94', quote: `Wenn du über das, was Wir zu dir herabgesandt haben, im Zweifel bist, so frage diejenigen, die vor dir die Schrift lesen.`, original: `fa-in kunta fī shakkin mimmā anzalnā ilaika fa-sʾali lladhīna yaqraʾūna l-kitāba min qablik`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/10/94' },
        ],
      },
      {
        text: `P2: Nach Tora und Evangelium ist ein Prophet abzulehnen, der – auch mit Zeichen – vom offenbarten Gott wegführt oder ein anderes Evangelium bringt; der Geist Gottes bekennt den Sohn, der im Fleisch kam.`,
        support: `Dtn 13,2–6; Gal 1,8–9; 1 Joh 2,22–23; 4,1–3.`,
      },
      {
        text: `P3: Die Botschaft Muhammads bestreitet den Kreuzestod Jesu und seine Gottessohnschaft – den Kern des apostolischen Evangeliums.`,
        support: `4:157; 5:72–73; 9:30; 19:35 gegenüber 1 Kor 15,3–4; Joh 20,31; Röm 1,3–4.`,
        sources: [
          { kind: 'koran', work: 'Sure 19 (Maryam)', ref: '19:35', quote: `Es steht Allah nicht zu, Sich ein Kind zu nehmen. Preis sei Ihm!`, original: `mā kāna li-llāhi an yattakhidha min waladin subḥānah`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/19/35' },
        ],
      },
    ],
    inferences: [`Aus P2 und P3: Nach den biblischen Kriterien ist die Botschaft Muhammads nicht als Prophetie in Kontinuität mit dem Evangelium anzuerkennen.`, `Aus P1: Diese Kriterien sind für den Muslim kein fremder Maßstab, sondern einer, auf den der Koran selbst verweist.`],
    conclusion: `Muhammad erfüllt die Kriterien, auf die sein eigenes Buch verweist, nicht. Der Muslim muss entweder P1 aufgeben (dann widerspricht er dem Koran) oder die biblischen Texte für verfälscht erklären (dann gerät er ins Islamische Dilemma).`,
  },
  voices: [
    {
      person: 'johannes-apostel',
      role: 'als Apostel, der das Kriterium der Geisterprüfung formuliert',
      text: `Der Apostel Johannes schreibt an Gemeinden, in denen Lehrer auftraten, die sich auf den Geist beriefen. Sein Maßstab ist nicht Begeisterung, Erfolg oder Wunder, sondern das Bekenntnis: Jeder Geist, der bekennt, dass Jesus Christus im Fleisch gekommen ist, ist von Gott (1 Joh 4,2). Wer leugnet, dass Jesus der Christus ist, und den Sohn leugnet, „hat auch den Vater nicht" (2,22–23). Für Johannes sind Vater und Sohn so verbunden, dass man nicht den einen bekennen und den anderen bestreiten kann.`,
      sources: [{ kind: 'bibel', work: '1. Johannes', ref: '2,22–23; 4,1–3', status: 'paraphrase' }],
    },
    {
      person: 'johannes-damaskus',
      role: 'als frühester christlicher Gesprächspartner des Islam',
      text: `Johannes von Damaskus, der am Hof der Umayyaden aufwuchs, stellte die Frage nach der Beglaubigung: Mose empfing das Gesetz vor den Augen des ganzen Volkes am Sinai, und alle Propheten kündigten Christus im Voraus an. Wer aber bezeugte Muhammads Empfang der Schrift, und welcher Prophet kündigte ihn an? Sein Argument richtet sich nicht gegen die Person, sondern fragt nach den Kennzeichen, die die Schrift selbst für Offenbarung nennt: öffentliche Bestätigung und prophetische Ankündigung.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Über die Häresien', ref: 'Kap. 100', status: 'paraphrase' }],
    },
    {
      person: 'timotheus-i',
      role: 'als Katholikos im Gespräch mit dem Kalifen',
      text: `Timotheus I. zeigt, wie man respektvoll und doch klar über Muhammad sprechen kann. Gefragt, was er über ihn denke, würdigt er, dass Muhammad die Menschen vom Götzendienst zum einen Gott geführt und Gutes geboten habe. Zugleich erklärt er, dass die Schrift ihn nicht ankündige und dass das Evangelium kein weiteres Gesetz nach Christus erwarte. Seine Haltung ist für das heutige Gespräch vorbildlich: Würdigung, wo sie möglich ist, Klarheit, wo die Wahrheit sie verlangt.`,
      sources: [{ kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi', year: '781/782', status: 'paraphrase' }],
    },
    {
      person: 'qureshi',
      role: 'als ehemaliger Muslim, der die Quellen von innen kannte',
      text: `Nabeel Qureshi beschreibt, wie er als junger Muslim das idealisierte Bild Muhammads verteidigte – bis er die frühen Quellen selbst las: die Sira des Ibn Ishaq und die Sammlungen von Bukhari und Muslim. Er fand dort Berichte, die er nicht kannte, und musste sich der Frage stellen, ob das überlieferte Leben Muhammads den Anspruch trägt, das vollkommene Vorbild für alle Zeiten zu sein. Qureshi betont, dass diese Untersuchung für ihn schmerzhaft war und dass er sie mit Liebe zu seinen muslimischen Freunden und seiner Familie führte.`,
      sources: [{ kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' }],
    },
    {
      person: 'david-wood',
      role: 'als Islam-Apologet und Debattierer',
      text: `David Wood hat in Debatten mit Shabir Ally und anderen die Frage nach Muhammads Prophetentum anhand der islamischen Quellen gestellt: Wie ist es zu bewerten, dass Muhammad nach Bukhari 3 nach der ersten Offenbarung um sich selbst fürchtete und von Khadija und Waraqa beruhigt werden musste, dass er nach Bukhari 5763 zeitweise unter Zauber stand und dass frühe Historiker die „satanischen Verse" berichten? Wood argumentiert, dass diese Berichte zusammen mit den biblischen Kriterien den Anspruch Muhammads erheblich belasten.`,
      sources: [{ kind: 'fachliteratur', author: 'David Wood', work: 'Debatte mit Shabir Ally „Was Muhammad a Prophet of God?"', status: 'paraphrase' }],
    },
    {
      person: 'zakaria-botros',
      role: 'als koptischer Priester und Kenner der klassischen Quellen',
      text: `Abuna Zakaria Botros hat in arabischer Sprache die klassischen islamischen Quellen – Koran, Hadith, Tafsir, Sira – zitiert und seine Zuschauer gebeten, sie selbst nachzuschlagen. Sein Anliegen war nicht, Muslime zu verletzen, sondern ihnen die Möglichkeit zu geben, die Quellen über ihren Propheten selbst zu prüfen und mit dem Christus des Evangeliums zu vergleichen. Er stellte stets die Frage: Wer ist sündlos, wer lebt, wer kommt wieder – und wem sollen wir folgen?`,
      sources: [{ kind: 'koptisch', author: 'Zakaria Botros', work: 'TV-Reihe „Fragen über den Glauben"', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'dtn-13-keine-anderen-goetter',
      objection: `Dtn 13 verbietet Propheten, die zu „anderen Göttern" rufen. Muhammad rief zum Gott Abrahams, Moses und Jesu – zu keinem anderen Gott. Er besteht diesen Test.`,
      objectionBy: 'Shabir Ally',
      targetsPremise: 2,
      answer: `Muhammad hat den Götzendienst Arabiens bekämpft – das erkenne ich an. Aber der Gott der Bibel hat sich als Vater, Sohn und Geist offenbart, und das NT macht genau das zum Prüfstein: „Wer den Sohn leugnet, der hat auch den Vater nicht" (1 Joh 2,23), und selbst ein Engel mit einem anderen Evangelium ist abzulehnen (Gal 1,8). Die Frage ist nicht nur, ob man den Namen „Gott Abrahams" verwendet, sondern ob man den Gott verkündet, der sich in Jesus offenbart hat.`,
      questionsBack: [`Wenn ein Prophet kommt und sagt, Muhammad habe nie gelebt und der Koran sei nicht herabgesandt – würdest du sagen, er ruft zu demselben Gott?`],
      followUps: [
        {
          id: 'johannesbrief-ist-menschenwort',
          objection: `Der erste Johannesbrief ist ein menschlicher Brief, kein Wort Allahs. Warum soll Muhammad an ihm gemessen werden?`,
          objectionBy: 'Shabir Ally',
          targetsPremise: 1,
          answer: `Weil der Koran die Christen auf ihr Evangelium verweist (5:47) und Muhammad auffordert, im Zweifel die zu fragen, die die Schrift vor ihm lesen (10:94). Zur Zeit Muhammads lasen die Christen ein Neues Testament, das den ersten Johannesbrief und den Galaterbrief enthielt – seit Jahrhunderten. Wenn das der Maßstab war, den der Koran nennt, dann ist es kein unfairer Maßstab.`,
          followUps: [
            {
              id: 'bibel-verfaelscht-kein-massstab',
              objection: `Die Bibel ist verfälscht. Ein verfälschtes Buch kann kein Maßstab für den letzten Propheten sein.`,
              objectionBy: 'Zakir Naik',
              targetsPremise: 1,
              answer: `Dann stehst du vor dem Islamischen Dilemma: Entweder war die Schrift der Christen zur Zeit Muhammads zuverlässig – dann gilt ihr Maßstab, und sie widerspricht dem Koran. Oder sie war verfälscht – dann hätte der Koran die Christen nicht auffordern dürfen, nach ihr zu urteilen (5:47), und Muhammad nicht auf sie verwiesen (10:94). Wir besitzen Handschriften des NT, die Jahrhunderte vor Muhammad entstanden sind; sie enthalten dieselbe Botschaft.`,
              followUps: [
                {
                  id: 'nur-teile-verfaelscht',
                  objection: `Nicht alles ist verfälscht – nur die Teile, die dem Koran widersprechen, also Kreuz und Gottessohnschaft.`,
                  objectionBy: 'Yasir Qadhi',
                  answer: `Das ist ein Zirkelschluss: Die Teile, die dem Koran widersprechen, sind verfälscht, weil sie dem Koran widersprechen. Mit dieser Methode könnte man jedes Buch „bestätigen". Und gerade Kreuz und Auferstehung sind die am frühesten und dichtesten bezeugten Inhalte des NT (1 Kor 15,3–5, wenige Jahre nach dem Ereignis). Wenn ausgerechnet sie verfälscht wären, bliebe vom Evangelium, das der Koran bestätigt, nichts übrig.`,
                  questionsBack: [`Welche Handschrift des Evangeliums vor dem 7. Jahrhundert enthält eine Botschaft ohne Kreuz und Auferstehung?`],
                },
              ],
            },
          ],
        },
        {
          id: 'jesus-lehrte-nie-sohnschaft',
          objection: `Jesus selbst hat nie gelehrt, er sei Gottes Sohn im göttlichen Sinn oder müsse für Sünden sterben. Muhammad hat nur die ursprüngliche Botschaft Jesu wiederhergestellt.`,
          objectionBy: 'Shabir Ally',
          answer: `Nach den ältesten Quellen hat Jesus seinen Tod als „Lösegeld für viele" (Mk 10,45) und als Bundesblut (Mk 14,24) gedeutet, mehrfach angekündigt (Mk 8,31; 9,31; 10,33–34) und sich vor dem Hohen Rat als Menschensohn auf Gottes Thron bezeichnet (Mk 14,62). Es gibt keine Quelle aus dem 1. Jahrhundert für einen Jesus, der Kreuz und Sohnschaft bestritt. Die „ursprüngliche Botschaft", die Muhammad wiederhergestellt haben soll, ist historisch nicht bezeugt.`,
        },
      ],
    },
    {
      id: 'erste-offenbarung-furcht',
      objection: `Dass Muhammad nach der ersten Offenbarung zitterte und um sich fürchtete (Bukhari 3), ist ganz natürlich. Auch Mose fürchtete sich am Dornbusch, und Jesaja rief „Weh mir!" (Jes 6,5).`,
      objectionBy: 'Yasir Qadhi',
      answer: `Ehrfurcht vor Gottes Heiligkeit ist bei Propheten normal, da hast du recht. Jesaja fürchtete sich wegen seiner Sünde vor dem Heiligen (Jes 6,5) – aber er wusste, wem er begegnete. Nach Bukhari 3 sagte Muhammad zu Khadija: „Ich fürchte um mich selbst", und es waren Khadija und ihr Vetter Waraqa, die ihn beruhigten und deuteten, was geschehen war. Ich ziehe daraus keinen voreiligen Schluss – aber es ist eine echte Frage: Warum brauchte der Prophet Menschen, die ihm die Herkunft seiner Offenbarung bestätigten?`,
      detail: `In einer erweiterten Fassung des Berichts (Sahih al-Bukhari, Buch der Traumdeutung) wird für die Zeit der Unterbrechung der Offenbarung (*fatra*) von tiefer Verzweiflung Muhammads berichtet. Muslimische Gelehrte wie Ibn Hajar weisen darauf hin, dass dieser Teil ein Zusatz az-Zuhris ohne verbundene Überlieferungskette ist („was uns erreicht hat"). Wer diesen Bericht anspricht, sollte das fair erwähnen – und mit Mitgefühl, nicht mit Häme sprechen.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '3', quote: `Da kehrte der Gesandte Allahs mit zitterndem Herzen zurück … und sagte zu Khadija: „Ich fürchte um mich selbst." Khadija sagte: „Nein, bei Allah, Allah wird dich niemals zuschanden machen …" Dann ging sie mit ihm zu Waraqa ibn Naufal …`, original: `laqad khashītu ʿalā nafsī`, translation: 'eigene Übersetzung, gekürzt', status: 'paraphrase', url: 'https://sunnah.com/bukhari:3' },
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '6982 (Buch der Traumdeutung, erster Hadith; Zusatz az-Zuhris)', quote: `Bericht über die Verzweiflung Muhammads während der Unterbrechung der Offenbarung.`, status: 'paraphrase', url: 'https://sunnah.com/bukhari:6982', note: 'Nummer und Stellung nach sunnah.com-Zählung geprüft (2026): erster Hadith des Buches der Traumdeutung, Kette über Maʿmar – az-Zuhri – ʿUrwa – Aisha. Der Teil über die Verzweiflung während der fatra ist ein balāġ (Zusatz ohne verbundene Kette) az-Zuhris; den genauen Wortlaut vor einem Zitat am Text prüfen. Keine wörtliche Wiedergabe.' },
      ],
      followUps: [
        {
          id: 'waraqa-bestaetigte-ihn',
          objection: `Waraqa ibn Naufal war ein christlicher Gelehrter, der die Schriften kannte. Er bestätigte, dass dies derselbe Engel war, der zu Mose kam. Ein Christ hat Muhammad also anerkannt!`,
          objectionBy: 'Zakir Naik',
          answer: `Waraqa sagte nach dem Bericht, es sei „der Nāmūs, den Allah zu Mose sandte", und starb kurz danach. Seine Einschätzung beruht auf Muhammads Schilderung eines einzigen Erlebnisses – vor jeder Verkündigung, die Kreuz und Gottessohnschaft bestritt. Er hat den späteren Koran nie gehört. Die Bestätigung eines einzelnen Mannes, der nach dem Bericht selbst Christ blieb, wiegt nicht mehr als das Zeugnis der Apostel, die mit Jesus lebten.`,
          followUps: [
            {
              id: 'waraqa-kannte-die-bibel',
              objection: `Gerade weil Waraqa die Bibel kannte und ins Hebräische bzw. Arabische übertrug, ist sein Urteil entscheidend. Er hätte gewusst, wenn etwas nicht stimmte.`,
              objectionBy: 'Yasir Qadhi',
              answer: `Dann frage ich: Wenn Waraqa die Bibel so gut kannte und sie für Gottes Wort hielt – warum blieb sie für ihn gültig, und warum soll sie für uns heute verfälscht sein? Sein Urteil kann nicht gleichzeitig maßgeblich und gegen die Schrift sein, die er übersetzte. Und welches Urteil hätte er gefällt, wenn er gehört hätte, dass sein „Nāmūs" später die Kreuzigung bestritt, die in der Schrift steht, die er kannte?`,
            },
          ],
        },
      ],
    },
    {
      id: 'satanische-verse-erfunden',
      objection: `Die Geschichte von den „satanischen Versen" ist eine Erfindung. Sie steht weder bei Bukhari noch bei Muslim, und die großen Gelehrten haben sie verworfen.`,
      objectionBy: 'Shabir Ally',
      answer: `Es stimmt, dass sie nicht bei Bukhari und Muslim steht und dass die meisten Muslime sie heute ablehnen – das will ich fair sagen. Aber sie steht bei frühen Historikern und Exegeten wie at-Tabari und Ibn Saʿd, und der Forscher Shahab Ahmed hat gezeigt, dass die frühen Generationen sie weitgehend akzeptierten. Ich baue meinen Fall nicht darauf. Doch der Koran selbst spricht davon, dass der Satan „in den Wunsch" jedes Propheten etwas einwirft, das Gott dann aufhebt (22:52), und dass Muhammad beinahe nachgegeben hätte (17:73–74).`,
      sources: [
        { kind: 'koran', work: 'Sure 22 (al-Hajj)', ref: '22:52', quote: `Und Wir haben vor dir keinen Gesandten und keinen Propheten gesandt, ohne dass, wenn er sich etwas wünschte, der Satan in seinen Wunsch etwas einwarf. Allah aber hebt auf, was der Satan einwirft; dann legt Allah Seine Zeichen eindeutig fest.`, original: `illā idhā tamannā alqā sh-shaiṭānu fī umniyyatihī fa-yansakhu llāhu mā yulqī sh-shaiṭān`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/22/52' },
        { kind: 'koran', work: 'Sure 17 (al-Isra)', ref: '17:73–74', quote: `Und beinahe hätten sie dich von dem abgebracht, was Wir dir eingegeben haben, damit du gegen Uns etwas anderes erdichtest … Und hätten Wir dich nicht gefestigt, so hättest du dich ihnen beinahe ein wenig zugeneigt.`, original: `wa-law lā an thabbatnāka la-qad kidta tarkanu ilaihim shaiʾan qalīlā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/17/73-74' },
        { kind: 'fachliteratur', author: 'Shahab Ahmed', work: 'Before Orthodoxy: The Satanic Verses in Early Islam', year: '2017', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'gott-schuetzt-offenbarung-22-52',
          objection: `Gerade 22:52 zeigt doch, dass Allah seine Offenbarung schützt: Was der Satan einwirft, hebt Allah auf. Das ist ein Beweis für die Bewahrung, nicht dagegen.`,
          objectionBy: 'Yasir Qadhi',
          answer: `Der Vers setzt voraus, dass der Satan etwas in die Verkündigung eines Propheten einwerfen kann, das zunächst als Offenbarung erscheint und erst danach aufgehoben wird. Das wirft eine schwerwiegende Frage auf: Woran erkennen die Hörer, was vom Satan eingeworfen und noch nicht aufgehoben ist? Die Bibel kennt ein solches Konzept für wahre Propheten nicht; sie sagt: Wer im Namen Gottes etwas redet, was Gott nicht geboten hat, ist ein falscher Prophet (Dtn 18,20).`,
          followUps: [
            {
              id: 'bibel-luegengeist-1-koen-22',
              objection: `Auch in der Bibel legt Gott einen „Lügengeist" in den Mund von Propheten (1 Kön 22,22–23). Ihr habt dasselbe Problem.`,
              objectionBy: 'Mohammed Hijab',
              answer: `In 1 Kön 22 sind es die 400 Hofpropheten Ahabs, die ihm nach dem Mund reden – und der wahre Prophet Micha durchschaut sie und sagt es öffentlich (22,13–28). Der Text unterscheidet also gerade zwischen wahren und falschen Propheten. Nirgends sagt die Bibel, dass einem wahren Propheten satanische Worte in seine Verkündigung gelegt wurden, die er als Gottes Wort weitergab. Das ist der Unterschied zu 22:52.`,
            },
          ],
        },
      ],
    },
    {
      id: 'zauber-nur-weltliches',
      objection: `Der Zauber Labids (Bukhari 5763) betraf nur weltliche Dinge – Muhammad meinte, etwas getan zu haben, was er nicht getan hatte. Die Offenbarung war davon nicht berührt. So erklären es al-Qadi ʿIyad und Ibn Hajar.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Das ist die klassische Erklärung, und ich respektiere, dass große Gelehrte sie vertreten. Aber woher wissen wir, wo die Grenze verlief? Nur aus denselben Berichten. Wenn der Prophet zeitweise nicht sicher wusste, was er getan hatte, ist die Frage berechtigt, wie man sicher sein kann, dass seine Wahrnehmung der Offenbarung davon frei war. Nicht umsonst haben manche muslimischen Gelehrten den Bericht deshalb abgelehnt.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '5763 (vgl. 5765–5766)', quote: `Aisha berichtete: Ein Mann namens Labid ibn al-Aʿsam übte Zauber auf den Gesandten Allahs aus, sodass er sich einbildete, er habe etwas getan, was er nicht getan hatte …`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:5763' },
      ],
      followUps: [
        {
          id: 'verzauberter-mann-25-8',
          objection: `Der Koran verurteilt die Ungläubigen, die sagen: „Ihr folgt nur einem verzauberten Mann" (25:8; 17:47). Also kann Muhammad nicht verzaubert gewesen sein – der Hadith ist anders zu verstehen.`,
          objectionBy: 'Islamischer Modernist',
          answer: `Genau diese Spannung zwischen Koran (25:8; 17:47) und dem Hadith in Bukhari haben auch muslimische Denker gesehen; manche verwarfen deshalb den Hadith, obwohl er in der angesehensten Sammlung steht. Für dich bedeutet das: Entweder gilt der Hadith, dann stellt sich die Frage nach der Zuverlässigkeit in dieser Zeit; oder er gilt nicht, dann enthält Sahih al-Bukhari einen falschen Bericht über den Propheten. Beides ist für die islamische Überlieferung nicht leicht.`,
          sources: [
            { kind: 'koran', work: 'Sure 25 (al-Furqan)', ref: '25:8', quote: `… und die Ungerechten sagen: „Ihr folgt ja nur einem verzauberten Mann."`, original: `in tattabiʿūna illā rajulan masḥūrā`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/25/8' },
          ],
        },
      ],
    },
    {
      id: 'offenbarungen-zu-seinen-gunsten',
      objection: `Christen behaupten, manche Offenbarungen seien Muhammad persönlich zugutegekommen – etwa bei seinen Ehen. Aber Allah darf seinem Propheten Vorrechte geben. Aishas Bemerkung (Bukhari 4788) war liebevolle Neckerei, kein Vorwurf.`,
      objectionBy: 'Yasir Qadhi',
      answer: `Ich will Aishas Worte nicht schärfer machen, als sie gemeint waren. Sie sagte nach der Offenbarung von 33:51: „Ich sehe, dass dein Herr sich beeilt, deine Wünsche zu erfüllen." Der Koran gewährt Muhammad Sonderrechte bei Ehen, „eigens für dich, nicht für die übrigen Gläubigen" (33:50), und in 66:1 wird er gefragt, warum er sich etwas verbiete, um seinen Frauen zu gefallen. Die Frage ist nicht, ob Gott Vorrechte geben darf, sondern ob ein Muster entsteht, das ein aufmerksamer Prüfer bemerken muss – Aisha selbst hat es bemerkt.`,
      sources: [
        { kind: 'hadith', work: 'Sahih al-Bukhari', ref: '4788', quote: `Aisha sagte: „Ich sehe, dass dein Herr sich beeilt, deine Wünsche und Begehren zu erfüllen."`, translation: 'sinngemäß', status: 'paraphrase', url: 'https://sunnah.com/bukhari:4788', note: 'Im Buch des Tafsir zu 33:51. An-Nawawi deutet die Bemerkung als Ausdruck der Großzügigkeit Gottes gegenüber dem Propheten.' },
        { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:50', quote: `… eigens für dich, unter Ausschluss der (übrigen) Gläubigen.`, original: `khāliṣatan laka min dūni l-muʾminīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/33/50' },
        { kind: 'koran', work: 'Sure 66 (at-Tahrim)', ref: '66:1', quote: `O Prophet, warum verbietest du, was Allah dir erlaubt hat, indem du nach der Zufriedenheit deiner Gattinnen trachtest?`, original: `yā ayyuhā n-nabiyyu lima tuḥarrimu mā aḥalla llāhu laka tabtaghī marḍāta azwājik`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/66/1' },
      ],
      followUps: [
        {
          id: 'david-salomo-viele-frauen',
          objection: `Auch David und Salomo hatten viele Frauen, und ihr nennt sie Propheten. Warum misst du Muhammad mit einem anderen Maß?`,
          objectionBy: 'Mohammed Hijab',
          answer: `Die Bibel berichtet die Vielehe Davids und Salomos, aber sie stellt sie nicht als göttliche Sondererlaubnis dar – im Gegenteil: Das Gesetz warnt den König, „viele Weiber" zu nehmen (Dtn 17,17), und die Bibel zeigt, wie Salomos Frauen sein Herz abwandten (1 Kön 11,3–4). Die biblischen Gestalten werden kritisiert, nicht als Vorbild für alle Zeiten hingestellt. Der Koran dagegen nennt Muhammad ein „schönes Vorbild" (33:21) und gewährt ihm Vorrechte per Offenbarung. Das ist der Unterschied.`,
          followUps: [
            {
              id: 'zaynab-adoptionsreform',
              objection: `Die Ehe mit Zainab (33:37) hatte einen gesetzlichen Zweck: Sie hob die vorislamische Gleichstellung von Adoptivsöhnen mit leiblichen Söhnen auf. Es ging nicht um persönliche Wünsche.`,
              objectionBy: 'Jonathan A. C. Brown',
              answer: `Das ist die Begründung, die 33:37 selbst gibt, und ich nenne sie fair. Derselbe Vers sagt aber auch: „Du verbargst in deiner Seele, was Allah offenlegen wollte, und fürchtetest die Menschen." Klassische Exegeten haben das unterschiedlich gedeutet. Für mich bleibt die Frage, ob eine Rechtsreform eine Offenbarung erforderte, die zugleich eine persönliche Ehe des Propheten betraf. Ich überlasse dir die Antwort – aber sie ist eine legitime Frage an einen Propheten, der für alle Zeiten Vorbild sein soll.`,
              sources: [
                { kind: 'koran', work: 'Sure 33 (al-Ahzab)', ref: '33:37', quote: `… und du verbargst in deiner Seele, was Allah offenlegen wollte, und du fürchtetest die Menschen, während Allah eher verdient, dass du Ihn fürchtest. Als dann Zaid keinen Wunsch mehr nach ihr hatte, gaben Wir sie dir zur Gattin, damit für die Gläubigen kein Grund zur Bedrängnis bestehe bezüglich der Gattinnen ihrer Adoptivsöhne …`, original: `wa-tukhfī fī nafsika mā llāhu mubdīhi wa-takhshā n-nāsa`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/33/37' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'byzantiner-prophezeiung',
      objection: `Der Koran sagte den Sieg der Byzantiner über die Perser „in wenigen Jahren" voraus (30:2–4), als das unwahrscheinlich schien. Die Vorhersage traf ein. Das ist das Kriterium von Dtn 18,22!`,
      objectionBy: 'Hamza Tzortzis',
      targetsPremise: 2,
      answer: `Dtn 18,22 ist ein Ausschlusskriterium: Was nicht eintrifft, ist nicht von Gott. Dass etwas eintrifft, genügt aber nicht – Dtn 13,2–4 sagt ausdrücklich: Auch wenn das Zeichen eintrifft, ist ein Prophet abzulehnen, der vom offenbarten Gott wegführt. Zudem sind Datierung des Verses und die Berechnung der Frist (*biḍʿ sinīn*, „einige Jahre", meist drei bis neun) unter Gelehrten umstritten: Jerusalem fiel 614 an die Perser, der entscheidende byzantinische Sieg kam 627.`,
      sources: [
        { kind: 'koran', work: 'Sure 30 (ar-Rum)', ref: '30:2–4', quote: `Besiegt worden sind die Byzantiner im nächstgelegenen Land. Sie aber werden nach ihrer Niederlage siegen, in einigen Jahren.`, original: `ghulibati r-rūm · fī adnā l-arḍi wa-hum min baʿdi ghalabihim sa-yaghlibūn · fī biḍʿi sinīn`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/30/2-4' },
      ],
      followUps: [
        {
          id: 'erfolg-des-islam',
          objection: `Schau auf den Erfolg: Binnen eines Jahrhunderts reichte der Islam von Spanien bis Indien. Gamaliel sagte selbst: Ist es von Gott, könnt ihr es nicht aufhalten (Apg 5,38–39).`,
          objectionBy: 'Shabir Ally',
          answer: `Gamaliel war ein vorsichtiger Ratgeber, kein Prophet, und sein Satz ist kein biblisches Wahrheitskriterium – sonst wären auch das Römische Reich, der Buddhismus oder der Kommunismus zu ihrer Zeit „von Gott" gewesen. Die Bibel misst Wahrheit an Gottes Wort, nicht an Ausbreitung. Bemerkenswert ist der Unterschied der Anfänge: Das Christentum wuchs drei Jahrhunderte lang ohne Staat und Armee, unter Verfolgung, durch Zeugen, die selbst starben.`,
          followUps: [
            {
              id: 'christentum-auch-mit-schwert',
              objection: `Das Christentum hat sich doch auch mit dem Schwert ausgebreitet – Konstantin, die Kreuzzüge, die Kolonialzeit.`,
              objectionBy: 'Mohammed Hijab',
              answer: `Christen haben Gewalt im Namen Christi verübt, und das ist ein Unrecht, das ich nicht beschönige. Aber es widerspricht dem Gründer: „Stecke dein Schwert an seinen Ort" (Mt 26,52); „Mein Reich ist nicht von dieser Welt" (Joh 18,36). Die Frage an einen Propheten ist, ob seine Anhänger von seinem Vorbild abweichen, wenn sie Gewalt üben – oder ihm folgen. Und die ersten 300 Jahre des Christentums zeigen, wie es sich auf Jesu Weise verbreitete.`,
              questionsBack: [`Folgten die Kreuzfahrer Jesu Lehre, als sie das Schwert ergriffen? Und welche Haltung lehrte Muhammad gegenüber dem Kampf (z. B. 9:29)?`],
            },
          ],
        },
      ],
    },
    {
      id: 'charakter-vorbild-68-4',
      objection: `Der Koran bezeugt Muhammads vollkommenen Charakter (68:4). Eure Bibel dagegen schildert Propheten als Sünder – Noah betrunken, Lot in Inzest, David als Ehebrecher. Mit eurem Maßstab müsstet ihr eure eigenen Propheten verwerfen.`,
      objectionBy: 'Zakir Naik',
      answer: `Die Bibel ist schonungslos ehrlich mit ihren Helden – und sie verurteilt deren Sünden: Nathan tritt vor David und sagt „Du bist der Mann!" (2 Sam 12,7). Das Kriterium „an den Früchten erkennen" (Mt 7) zielt auf Lehre und Lebensrichtung, nicht auf Sündlosigkeit – nur einer ist ohne Sünde, Jesus (Hebr 4,15), was auch der Koran bestätigt (19:19). Und der Koran selbst fordert Muhammad auf, um Vergebung für seine Sünde zu bitten (47:19; 48:2). Der Vergleich führt also zu Jesus, nicht zu Muhammad.`,
      sources: [
        { kind: 'koran', work: 'Sure 68 (al-Qalam)', ref: '68:4', quote: `Und du bist wahrlich von großartiger Wesensart.`, original: `wa-innaka la-ʿalā khuluqin ʿaẓīm`, translation: 'eigene Übersetzung', status: 'verbatim', url: 'https://quran.com/68/4' },
        { kind: 'bibel', work: '2. Samuel', ref: '12,7', quote: `Da sprach Nathan zu David: Du bist der Mann!`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
  ],
  questionsToAsk: [
    `Der Koran verweist auf Tora und Evangelium als Maßstab (5:47; 10:94). Welche Prophetenkriterien enthalten sie – und wie besteht Muhammad sie?`,
    `Was sagt Dtn 13,2–4 über einen Propheten, dessen Zeichen eintreffen?`,
    `Wie verstehst du 22:52 – und woran erkennt man, was der Satan eingeworfen hat?`,
    `Ist Erfolg für dich ein Beweis der Wahrheit? Galt das auch für das Römische Reich?`,
    `Wer ist nach dem Koran ohne Sünde – Muhammad oder Jesus?`,
  ],
  avoid: [
    `Keine Beschimpfungen, keine Spottbilder, keine Verunglimpfung Muhammads. Stelle Fragen anhand der Quellen und nenne die muslimischen Deutungen fair.`,
    `Nicht den Fall auf die „satanischen Verse" bauen; die meisten Muslime lehnen den Bericht ab. Er ist ein Hinweis, kein Hauptargument.`,
    `Das „Aorta-Argument" (69:44–46 mit dem Bericht über Muhammads Tod) nicht als K.-o.-Schlag verwenden: Die Wörter (*watīn* im Koran, *abhar* im Hadith) sind verschieden, und Muslime haben darauf Antworten. Bleib bei den biblischen Kriterien.`,
    `Nicht pauschal über die Ehe mit Aisha argumentieren; das führt meist zu Empörung statt Erkenntnis. Wenn, dann sachlich und historisch differenziert.`,
  ],
  concessions: [
    `Muhammad bekämpfte den Götzendienst und führte Arabien zum Monotheismus; manche seiner Reformen verbesserten die Lage von Waisen und Frauen gegenüber der vorislamischen Zeit.`,
    `Viele der problematischen Berichte stammen aus Hadith und Sira; Muslime bewerten ihre Echtheit unterschiedlich, und die Mehrheit verwirft etwa die „satanischen Verse".`,
    `Christen haben im Lauf der Geschichte Gewalt im Namen Christi ausgeübt; das widerspricht Jesu Lehre, ist aber eine Tatsache.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Nabeel Qureshi', work: 'Seeking Allah, Finding Jesus', year: '2014', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Shahab Ahmed', work: 'Before Orthodoxy: The Satanic Verses in Early Islam', year: '2017', status: 'paraphrase' },
    { kind: 'gegner', author: 'Jonathan A. C. Brown', work: 'Muhammad: A Very Short Introduction', year: '2011', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Timotheus I.', work: 'Dialog mit dem Kalifen al-Mahdi (engl. A. Mingana, 1928)', year: '781/782', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Mohammed', 'Prophetenkriterien', 'Deuteronomium 13', '1. Johannes', 'Satanische Verse', 'Hadith'],
  related: [
    'islam-dilemma/das-islamische-dilemma',
    'islam-mohammed/prophet-wie-mose-dtn-18',
    'islam-mohammed/paulus-verfaelschte-jesus-islam',
    'islam-koran/koran-herausforderung',
    'islam-bibelverfaelschung/suendige-propheten',
    'psychiatrie/propheten-psychisch-krank',
  ],
};

export default claim;
