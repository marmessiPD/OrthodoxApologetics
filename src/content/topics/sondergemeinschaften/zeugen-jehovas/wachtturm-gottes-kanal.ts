import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wachtturm-gottes-kanal',
  title: `„Die leitende Körperschaft ist Gottes Kanal." (1914, 1925, 1975)`,
  proponents: [
    { name: 'Leitende Körperschaft der Zeugen Jehovas', role: 'Oberstes Lehr- und Leitungsgremium, Warwick (New York)', work: 'Der Wachtturm; seit 2012 Selbstverständnis als „der treue und verständige Sklave" (Mt 24,45)' },
    { name: 'Charles Taze Russell', role: 'Gründer der Bibelforscher (1852–1916)', work: 'Studies in the Scriptures, Bd. 2: The Time Is at Hand (1889) – 1914 als Ende der „Zeiten der Nationen"' },
    { name: 'Joseph F. Rutherford', role: 'Präsident der Wachtturm-Gesellschaft 1917–1942', work: 'Millions Now Living Will Never Die (1920)' },
    { name: 'Frederick W. Franz', role: 'Präsident 1977–1992, maßgeblicher Theologe', work: 'Life Everlasting – in Freedom of the Sons of God (1966) – 6000 Jahre Menschheit enden 1975' },
  ],
  steelman: `Jesus kündigte an, dass er einen „treuen und verständigen Sklaven" einsetzen werde, der seinen Hausknechten „Speise zur rechten Zeit" gibt (Mt 24,45–47). Gott hat zu allen Zeiten einen sichtbaren Kanal benutzt: Mose, die Propheten, die Apostel und die leitende Körperschaft in Jerusalem (Apg 15). Ohne Anleitung versteht niemand die Bibel – auch der äthiopische Kämmerer brauchte Philippus (Apg 8,31). Die Zeugen Jehovas haben nie behauptet, inspiriert oder unfehlbar zu sein; Anpassungen des Verständnisses sind wie das Licht, das „heller wird bis zum vollen Tag" (Spr 4,18). Die Früchte sprechen für sich: weltweite Predigttätigkeit in Hunderten von Sprachen, über acht Millionen Verkündiger, hohe moralische Standards, politische Neutralität und Standhaftigkeit unter dem NS-Regime und in der DDR, wo Zeugen Jehovas lieber ins KZ oder Gefängnis gingen, als den Wehrdienst oder den Hitlergruß zu leisten. Und 1914 ist erfüllt: Genau in diesem Jahr, das die Bibelforscher Jahrzehnte vorher berechnet hatten, begann der Erste Weltkrieg und damit die „letzten Tage".`,
  biblical: {
    summary: `Die Bibel gibt einen klaren Prüfstein für jeden, der im Namen Gottes Zukünftiges ankündigt: „Wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus … das ist das Wort, das der HERR nicht geredet hat" (Dtn 18,22). Jesus verbot, Zeit und Stunde zu berechnen (Mt 24,36; Apg 1,7), und warnte ausdrücklich vor der Botschaft einer **verborgenen** Wiederkunft: „Wenn sie zu euch sagen werden: Siehe, er ist in der Wüste!, so gehet nicht hinaus – siehe, er ist in der Kammer!, so glaubt nicht" (Mt 24,26). Seine Wiederkunft wird sichtbar sein wie der Blitz (24,27), „und es werden ihn sehen alle Augen" (Offb 1,7). Das Gleichnis vom treuen Knecht (Mt 24,45–51; Lk 12,41–48) ist ein Aufruf an jeden Verantwortlichen zur Treue, keine Vorhersage einer Organisation des 20. Jahrhunderts.`,
    detail: `**Die dokumentierten Ankündigungen:**
- **1914:** Russell lehrte, 1914 werde das Ende der „Zeiten der Nationen" bringen – den Sturz der weltlichen Regierungen und die Vollendung der Kirche. Als das ausblieb, wurde 1914 zum Beginn einer **unsichtbaren** Gegenwart Christi umgedeutet.
- **1925:** Rutherfords Vortrag und Broschüre „Millions Now Living Will Never Die" (1920; dt. „Millionen jetzt lebender Menschen werden nie sterben") erklärte, man könne zuversichtlich erwarten, dass 1925 Abraham, Isaak, Jakob und die alten Propheten auferstehen. 1929/30 ließ die Gesellschaft in San Diego das Haus „Beth Sarim" bauen, gedacht für die zurückkehrenden Patriarchen.
- **1975:** Das Buch „Life Everlasting – in Freedom of the Sons of God" (1966) erklärte, 6000 Jahre Menschheitsgeschichte endeten im Herbst 1975, und wie passend es wäre, wenn dann das Tausendjährige Reich begänne. Viele Zeugen verkauften Häuser oder verzichteten auf Ausbildung. Der Wachtturm vom 15. März 1980 bedauerte, dass Veröffentlichungen diese Erwartung genährt hätten.
- **„Diese Generation":** Bis 1995 stand im Impressum des „Erwachet!", der Schöpfer habe eine neue Welt versprochen, bevor die Generation vergeht, die die Ereignisse von 1914 sah. 1995 und erneut 2008/2010 (Lehre von den „überlappenden Generationen") wurde diese Deutung geändert.

**Spr 4,18** handelt vom Lebensweg des Gerechten im Unterschied zum Gottlosen, nicht von wechselnden Lehrsätzen einer Organisation.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium (5. Mose)', ref: '18,22', quote: `wenn der Prophet redet in dem Namen des HERRN, und es wird nichts daraus und trifft nicht ein, das ist das Wort, das der HERR nicht geredet hat; der Prophet hat's aus Vermessenheit geredet, darum scheue dich nicht vor ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,36', quote: `Von dem Tage aber und von der Stunde weiß niemand, auch die Engel nicht im Himmel, sondern allein mein Vater.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '1,7', quote: `Es gebührt euch nicht, zu wissen Zeit oder Stunde, welche der Vater seiner Macht vorbehalten hat.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '24,26–27', quote: `Darum, wenn sie zu euch sagen werden: Siehe, er ist in der Wüste! so gehet nicht hinaus, – siehe, er ist in der Kammer! so glaubt nicht. Denn gleich wie der Blitz ausgeht vom Aufgang und scheint bis zum Niedergang, also wird auch sein die Zukunft des Menschensohnes.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'gegner', author: 'Joseph F. Rutherford', work: 'Millions Now Living Will Never Die', year: '1920', quote: `Man dürfe zuversichtlich erwarten, dass 1925 die Rückkehr Abrahams, Isaaks, Jakobs und der treuen Propheten bringe.`, status: 'paraphrase', note: 'Englischer Originalwortlaut und Seitenzahl vor wörtlichem Zitat prüfen.' },
      { kind: 'gegner', work: 'Der Wachtturm (engl. The Watchtower)', ref: '15. März 1980, S. 17', quote: `Bedauern, dass Aussagen in Veröffentlichungen die Erwartung für 1975 genährt und vorsichtigere Hinweise überlagert hätten.`, status: 'paraphrase' },
      { kind: 'gegner', work: 'Der Wachtturm (Studienausgabe)', ref: 'Februar 2017', quote: `Die leitende Körperschaft sei weder inspiriert noch unfehlbar und könne in Lehrfragen oder organisatorischen Anweisungen irren.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Die koptische Kirche kennt Autorität – Bischöfe, Synode, apostolische Überlieferung –, aber keine Instanz, die im Namen Gottes Termine für das Weltende verkündet. Schon im 2. Jahrhundert prüfte die Kirche den Montanismus, dessen Propheten das himmlische Jerusalem im phrygischen Pepuza erwarteten, und verwarf ihn. Augustinus erklärte, wer das Ende berechnen wolle, handle gegen das Wort des Herrn. Die Lehre der Kirche ist seit den Aposteln dieselbe geblieben; sie musste nicht nach 1914, 1925 oder 1975 korrigiert werden, weil sie solche Ankündigungen nie gemacht hat.`,
    detail: `Ehrlich und mit Respekt: Zeugen Jehovas haben unter dem Nationalsozialismus Furchtbares erlitten. Sie trugen in den Lagern den lila Winkel; viele wurden wegen Kriegsdienstverweigerung hingerichtet oder starben in Haft. Auch in der DDR wurden sie verfolgt. Ihr Mut verdient Achtung. Christliche Märtyrer – darunter Tausende Kopten seit der Zeit Diokletians bis in unsere Tage – zeigen aber: Standhaftigkeit bezeugt Aufrichtigkeit, nicht die Richtigkeit jeder Lehre.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat (De civitate Dei)', ref: 'XVIII,53', quote: `Wer die verbleibenden Jahre bis zum Ende berechnen will, dem hält der Herr selbst entgegen: „Es gebührt euch nicht, Zeit oder Stunde zu wissen."`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Eusebius von Caesarea', work: 'Kirchengeschichte', ref: 'V,16–18', quote: `Bericht über die Prüfung und Verwerfung der montanistischen Prophetie durch die Kirche.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ich achte den Mut der Zeugen Jehovas, gerade unter Hitler. Aber wer im Namen Gottes Zeitpunkte ankündigt, muss sich an Dtn 18,22 messen lassen: 1914 (Ende der Weltregierungen), 1925 (Auferstehung der Patriarchen) und 1975 (Ende von 6000 Jahren) sind nicht eingetroffen. Wenn die leitende Körperschaft selbst sagt, sie sei „weder inspiriert noch unfehlbar" – wie kann man ihr dann als Gottes einzigem Kanal blind folgen?`,
  keyPoints: [
    `**Dtn 18,22 als Maßstab:** Wer im Namen Gottes Zukünftiges ankündigt, wird an der Erfüllung gemessen.`,
    `**Dokumentierte Fehldeutungen:** 1914, 1925 („Millionen jetzt Lebender"), 1975, „diese Generation".`,
    `**Unsichtbare Wiederkunft:** Jesus warnte genau davor (Mt 24,26); seine Wiederkunft ist sichtbar (Offb 1,7).`,
    `**Selbstwiderspruch:** „Weder inspiriert noch unfehlbar" – und doch Gehorsam als Gottes einziger Kanal.`,
    `**Gleichnis, nicht Organigramm:** Mt 24,45 und Lk 12,42 rufen jeden Verwalter zur Treue.`,
    `**Respekt:** Verfolgung und Standhaftigkeit ehren, ohne daraus Lehrautorität abzuleiten.`,
  ],
  voices: [
    {
      person: 'raymond-franz',
      role: 'als ehemaliges Mitglied der leitenden Körperschaft',
      text: `Raymond Franz gehörte von 1971 bis 1980 selbst der leitenden Körperschaft an. In seinem Buch „Der Gewissenskonflikt" schildert er, wie das Gremium Lehrfragen durch Mehrheitsabstimmungen entschied und wie die Erwartungen um 1975 von der Spitze aus genährt wurden. Sein Fazit: Eine Gruppe fehlbarer Männer, die Gewissensgehorsam fordert, stellt sich zwischen den Gläubigen und Christus. Franz verließ die Organisation nicht aus Feindschaft, sondern aus Gewissensgründen, und wurde 1981 ausgeschlossen.`,
      sources: [{ kind: 'fachliteratur', author: 'Raymond Franz', work: 'Crisis of Conscience (dt. Der Gewissenskonflikt)', year: '1983', quote: `Insiderbericht über Entscheidungsprozesse der leitenden Körperschaft und die Erwartungen für 1975.`, status: 'paraphrase' }],
    },
    {
      person: 'johannes-apostel',
      role: 'als Apostel und Seher der Offenbarung',
      text: `Johannes fordert die Gemeinden auf, nicht jedem Geist zu glauben, sondern die Geister zu prüfen, „denn es sind viele falsche Propheten ausgegangen in die Welt" (1 Joh 4,1). In der Offenbarung beschreibt er die Wiederkunft Christi als öffentliches, weltweit sichtbares Ereignis: „Siehe, er kommt mit den Wolken, und es werden ihn sehen alle Augen" (Offb 1,7). Eine seit 1914 laufende, nur für Eingeweihte erkennbare Gegenwart widerspricht diesem Bild.`,
      sources: [
        { kind: 'bibel', work: '1. Johannes', ref: '4,1', quote: `Ihr Lieben, glaubet nicht einem jeglichen Geist, sondern prüfet die Geister, ob sie von Gott sind; denn es sind viel falsche Propheten ausgegangen in die Welt.`, translation: 'Luther 1912', status: 'verbatim' },
        { kind: 'bibel', work: 'Offenbarung', ref: '1,7', quote: `Siehe, er kommt mit den Wolken, und es werden ihn sehen alle Augen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Geschichtstheologe',
      text: `Augustinus erlebte zu seiner Zeit Berechnungen des Weltendes und lehnte sie ab: Der Herr habe das Wissen um die Stunde ausdrücklich verweigert. Wer dennoch rechnet, stellt seine Spekulation über das Wort Christi. Für Augustinus ist die angemessene Haltung Wachsamkeit ohne Kalender – ein Leben, das jederzeit bereit ist.`,
      sources: [{ kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Vom Gottesstaat', ref: 'XVIII,53', quote: `Ablehnung aller Berechnungen des Weltendes mit Verweis auf Apg 1,7.`, status: 'paraphrase' }],
    },
    {
      person: 'walter-martin',
      role: 'als Kenner der Wachtturm-Geschichte',
      text: `Martin dokumentierte die Ankündigungen der Wachtturm-Gesellschaft aus ihren eigenen Veröffentlichungen und stellte sie Dtn 18 gegenüber. Er riet, im Gespräch nicht spöttisch zu werden, sondern die Originalaussagen ruhig vorzulegen und zu fragen, wie man einer Organisation vertrauen kann, deren datierte Vorhersagen wiederholt umgedeutet werden mussten.`,
      sources: [{ kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', year: '1965', quote: `Dokumentation der Endzeitankündigungen der Wachtturm-Gesellschaft.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'nie-inspiriert',
      objection: `Wir haben nie behauptet, inspiriert zu sein. Fehler sind menschlich – das Licht wird eben heller (Spr 4,18).`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Dann frage ich: Warum wird jemand, der mit einer – nach eigener Aussage fehlbaren – Lehre nicht übereinstimmt, ausgeschlossen und gemieden? Wer fehlbar ist, kann keinen Gewissensgehorsam als „Gottes Kanal" verlangen. Und Spr 4,18 handelt vom Lebensweg des Gerechten, nicht von Lehrsätzen, die sich ins Gegenteil verkehren.`,
      questionsBack: [`Was passiert mit einem Zeugen, der offen sagt, dass er eine aktuelle Lehre der leitenden Körperschaft für falsch hält?`],
      followUps: [
        {
          id: 'auch-apostel-irrten',
          objection: `Auch die Apostel hatten falsche Erwartungen (Apg 1,6), und Petrus irrte in Antiochia (Gal 2).`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Vor Pfingsten missverstanden die Jünger vieles – und Jesus korrigierte sie sofort: „Es gebührt euch nicht, Zeit oder Stunde zu wissen" (Apg 1,7). Petrus' Fehler in Antiochia war ein Verhalten, keine veröffentlichte Lehre, und Paulus wies ihn öffentlich zurecht. Die Apostel haben nie im Namen Gottes ein Datum gedruckt, das dann nicht eintraf.`,
          followUps: [
            {
              id: 'dtn-18-nur-propheten',
              objection: `Dtn 18 gilt für Propheten. Die leitende Körperschaft ist kein Prophet, sondern ein Sklave, der Speise austeilt.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Wer im Namen Gottes sagt, was in der Zukunft geschehen wird, übt eine prophetische Funktion aus – wie immer er sich nennt. Wachtturm-Veröffentlichungen haben die Organisation selbst mit einem Propheten verglichen, der Gottes Botschaft an die Welt bringt. Und wer verlangt, dass man ihm als Gottes Kanal folgt, muss sich am Maßstab für Gottes Sprecher messen lassen.`,
              sources: [{ kind: 'gegner', work: 'Der Wachtturm (engl.)', ref: '1. April 1972, Artikel „They Shall Know That a Prophet Was Among Them"', quote: `Die Organisation wird mit einem „Propheten" verglichen, den Gott in der Endzeit gebraucht.`, status: 'unverified', note: 'Fundstelle und Wortlaut vor Verwendung prüfen.' }],
            },
          ],
        },
      ],
    },
    {
      id: '1914-erfuellt',
      objection: `1914 hat sich erfüllt! Russell hat es Jahrzehnte vorher berechnet, und genau dann begann der Erste Weltkrieg.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Russell kündigte für 1914 nicht einen Krieg an, sondern das **Ende** der weltlichen Regierungen und die Vollendung der Kirche. Das trat nicht ein. Erst danach wurde 1914 zum Beginn einer unsichtbaren Gegenwart Christi umgedeutet – eine Behauptung, die niemand prüfen kann. Und genau vor einer solchen verborgenen Wiederkunft warnte Jesus: „Siehe, er ist in der Kammer – so glaubt nicht" (Mt 24,26).`,
      followUps: [
        {
          id: 'parousia-gegenwart',
          objection: `*Parousia* heißt „Gegenwart", nicht „Kommen". Christus ist also unsichtbar gegenwärtig.`,
          objectionBy: 'Neue-Welt-Übersetzung',
          answer: `*Parousia* bezeichnet die Ankunft und Anwesenheit einer Person – und zwar sichtbar: Paulus freut sich über die *parousia* des Stephanas (1 Kor 16,17) und des Titus (2 Kor 7,6). Die *parousia* Christi geschieht „wie der Blitz" (Mt 24,27), „mit einem Feldgeschrei" und der Posaune (1 Thess 4,16). Niemand würde sagen, Titus sei unsichtbar angekommen.`,
          followUps: [
            {
              id: '607-v-chr',
              objection: `Die Berechnung beruht auf der Zerstörung Jerusalems 607 v. Chr. und den „sieben Zeiten" aus Dan 4 – 2520 Jahre bis 1914. Das ist biblische Chronologie.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Die Historiker datieren die Zerstörung Jerusalems einhellig auf 587/586 v. Chr. – gestützt auf babylonische Königslisten, Wirtschaftstexte und astronomische Tafeln wie VAT 4956, die das 37. Jahr Nebukadnezars astronomisch festlegt. Und Dan 4 erzählt von Nebukadnezars Wahnsinn, der sich laut Dan 4,30 an ihm selbst erfüllte; die Ausdehnung auf 2520 Jahre steht nirgends in der Bibel.`,
              detail: `Der schwedische ehemalige Zeuge Jehovas Carl Olof Jonsson legte der Wachtturm-Gesellschaft schon 1977 eine umfangreiche Untersuchung zur Chronologie vor („The Gentile Times Reconsidered", veröffentlicht 1983). Wichtig im Gespräch: Nicht die Archäologie gegen die Bibel ausspielen – die Bibel selbst nennt kein Jahr „607".`,
              sources: [{ kind: 'fachliteratur', author: 'Carl Olof Jonsson', work: 'The Gentile Times Reconsidered', year: '1983 (4. Aufl. 2004)', quote: `Untersuchung der Chronologie der Zerstörung Jerusalems und der 1914-Berechnung.`, status: 'paraphrase' }],
              questionsBack: [`Wo in der Bibel steht die Jahreszahl 607 v. Chr. oder die Zahl 2520?`],
            },
          ],
        },
      ],
    },
    {
      id: 'fruechte-wachstum',
      objection: `Schau auf die Früchte: weltweites Wachstum, saubere Moral, politische Neutralität, Standhaftigkeit unter Hitler. Das zeigt Gottes Segen.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `Euer Mut unter dem NS-Regime verdient großen Respekt – das sage ich ehrlich. Aber Wachstum, Disziplin und Opferbereitschaft gibt es auch bei Mormonen, im Islam und bei anderen Bewegungen, die einander widersprechen. Früchte zeigen die Aufrichtigkeit von Menschen; ob eine **Lehre** von Gott kommt, prüft die Schrift (Gal 1,8; Dtn 18,22).`,
      followUps: [
        {
          id: 'ohne-organisation',
          objection: `Ohne Organisation versteht niemand die Bibel. Auch der Kämmerer sagte: „Wie kann ich, wenn mich nicht jemand anleitet?" (Apg 8,31).`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Da stimme ich dir zu – die Bibel wird in der Gemeinschaft der Kirche gelesen, nicht im luftleeren Raum. Die Frage ist nur: in welcher? Philippus führte den Kämmerer zu Jesus und taufte ihn sofort – und die Überlieferung verbindet den Glauben Äthiopiens mit diesem Mann. Die Kirche, die seit den Aposteln ununterbrochen besteht, legt die Schrift seit 2000 Jahren mit **denselben** Grundaussagen aus. Eine Organisation, die im 19. Jahrhundert entstand und ihre Kernaussagen mehrfach ändern musste, kann diesen Anspruch nicht erheben.`,
          followUps: [
            {
              id: 'kirche-abgefallen-1919',
              objection: `Die Kirche ist nach den Aposteln abgefallen. Die wahre Anbetung wurde erst 1919 wiederhergestellt, als Christus die Bibelforscher auserwählte.`,
              objectionBy: 'Zeugen Jehovas',
              answer: `Jesus versprach: „Die Pforten der Hölle sollen sie nicht überwältigen" (Mt 16,18) und „Ich bin bei euch alle Tage bis an der Welt Ende" (Mt 28,20). Ein 1800-jähriger Totalabfall würde beides widerlegen. Und wo waren die Zeugen Jehovas zwischen 100 und 1870? Kein einziger Christ dieser Zeit glaubte die Gesamtheit eurer Lehren.`,
              questionsBack: [`Kannst du mir eine christliche Gemeinde zwischen dem 2. und dem 18. Jahrhundert nennen, die eure Lehren vertrat?`],
            },
          ],
        },
      ],
    },
    {
      id: '1925-1975-einzelne',
      objection: `1925 und 1975 waren Erwartungen einzelner Brüder, keine offiziellen Lehren der Organisation.`,
      objectionBy: 'Zeugen Jehovas',
      answer: `„Millionen jetzt lebender Menschen werden nie sterben" war ein weltweiter Vortragsfeldzug des Präsidenten der Gesellschaft, mit Broschüre und Zeitungsanzeigen; Beth Sarim wurde mit Mitteln der Organisation gebaut. Für 1975 erschien ein Buch der Gesellschaft, und der Wachtturm von 1980 bedauerte selbst, dass Veröffentlichungen die Erwartung geweckt hätten. Das waren keine Privatmeinungen.`,
      followUps: [
        {
          id: 'lieber-wachsam',
          objection: `Immerhin haben wir wachsam gelebt. Lieber das Ende zu früh erwarten, als einzuschlafen wie die törichten Jungfrauen.`,
          objectionBy: 'Zeugen Jehovas',
          answer: `Wachsamkeit ist geboten (Mt 25,13) – aber Jesus verband sie gerade mit dem **Nichtwissen** der Stunde: „Wachet, denn ihr wisset weder Tag noch Stunde." Datierungen haben Menschen real geschadet: Häuser wurden verkauft, Ausbildungen abgebrochen, Familien verschoben. Wahre Wachsamkeit lebt jeden Tag bereit, ohne Kalender – das schützt vor Enttäuschung und vor Glaubensverlust.`,
          sources: [{ kind: 'bibel', work: 'Matthäus', ref: '25,13', quote: `Darum wachet; denn ihr wisset weder Tag noch Stunde, in welcher des Menschen Sohn kommen wird.`, translation: 'Luther 1912', status: 'verbatim' }],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn die leitende Körperschaft fehlbar ist – darf ich ihr dann widersprechen, ohne ausgeschlossen zu werden?`,
    `Was genau hat Russell für 1914 angekündigt, und ist das eingetreten?`,
    `Wie passt eine unsichtbare Wiederkunft zu Mt 24,26–27 und Offb 1,7?`,
    `Wo in der Bibel steht, dass Christus 1919 eine Organisation als seinen einzigen Kanal auswählte?`,
  ],
  avoid: [
    `Spott über gescheiterte Daten – das verletzt und schließt die Tür. Lege die Quellen ruhig vor.`,
    `Unbelegte Zitate aus dem Internet benutzen – Wachtturm-Zitate kursieren oft verfälscht oder ohne Kontext. Nur verwenden, was du am Original prüfen kannst.`,
    `Die Verfolgung der Zeugen Jehovas im Nationalsozialismus kleinreden – sie ist historisch belegt und verdient Respekt.`,
    `Mit „Auch die Kirche hat Endzeitspekulationen gehabt" ausweichen, ohne zu unterscheiden: Einzelne Christen haben gerechnet, die Kirche hat es nie als Lehre verkündet.`,
  ],
  concessions: [
    `Zeugen Jehovas wurden im NS-Staat und in der DDR schwer verfolgt und zeigten großen Mut.`,
    `Auch einzelne Christen anderer Konfessionen haben im Lauf der Geschichte Endzeitdaten berechnet.`,
    `Die Wachtturm-Gesellschaft hat ihre Fehleinschätzung zu 1975 öffentlich bedauert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Raymond Franz', work: 'Crisis of Conscience (dt. Der Gewissenskonflikt)', year: '1983', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'M. James Penton', work: 'Apocalypse Delayed: The Story of Jehovah\'s Witnesses', year: '3. Aufl. 2015', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Carl Olof Jonsson', work: 'The Gentile Times Reconsidered', year: '1983', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Walter Martin', work: 'The Kingdom of the Cults', year: '1965', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Zeugen Jehovas', 'Prophetie', '1914', '1975', 'Leitende Körperschaft', 'Endzeit'],
  related: [
    'mormonen/grosser-abfall',
    'prophetie/wiederkunft-falsche-prophetie',
    'evangelikale-sonderlehren/vorentrueckung',
    'sola-scriptura/jeder-legt-selbst-aus',
  ],
};

export default claim;
