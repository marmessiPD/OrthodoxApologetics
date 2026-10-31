import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'bibel-befuerwortet-sklaverei',
  title: `„Die Bibel befürwortet Sklaverei."`,
  proponents: [
    { name: 'Hector Avalos', role: 'Religionswissenschaftler, Iowa State University', work: 'Slavery, Abolitionism, and the Ethics of Biblical Scholarship (2011)' },
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'Letter to a Christian Nation (2006)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006)' },
    { name: 'Dan Savage', role: 'Publizist und LGBT-Aktivist', work: 'Rede auf der National High School Journalism Conference (2012)' },
  ],
  steelman: `Die Bibel verbietet Sklaverei nirgends – sie regelt sie. Lev 25,44–46 erlaubt ausdrücklich, Sklaven aus den umliegenden Völkern zu kaufen und sie als „Besitz" an die Kinder zu vererben, „für immer". Ex 21,20–21 lässt einen Herrn straffrei, der seinen Sklaven so schlägt, dass dieser erst nach ein oder zwei Tagen stirbt – „denn es ist sein Geld". Das Neue Testament ist nicht besser: „Ihr Knechte, seid gehorsam euren leiblichen Herren mit Furcht und Zittern" (Eph 6,5), und Paulus schickt den entlaufenen Onesimus zu seinem Herrn zurück. Die Sklavenhalter der amerikanischen Südstaaten hatten die Bibel auf ihrer Seite und zitierten sie unermüdlich. Ein Buch, das sich als zeitloser moralischer Leitfaden ausgibt, hätte mit einem einzigen Satz – „Du sollst keinen Menschen besitzen" – Jahrhunderte des Elends verhindern können. Dass es diesen Satz nicht gibt, zeigt: Die Bibel ist das Produkt ihrer Zeit, nicht Gottes.`,
  biblical: {
    summary: `Man muss drei Dinge unterscheiden: die **Schuldknechtschaft** im alten Israel, die **Besitzsklaverei** der Antike und der Neuzeit und die **Richtung**, in die die Schrift weist. Die Tora erlaubt eine Institution, die sie vorfindet, schränkt sie aber in einer im Alten Orient einzigartigen Weise ein: Menschenraub – die Quelle der transatlantischen Sklaverei – wird mit dem Tod bestraft (Ex 21,16), entlaufene Sklaven dürfen **nicht ausgeliefert** werden (Dtn 23,16–17), körperliche Verletzung führt zur Freilassung (Ex 21,26–27), hebräische Knechte werden nach sechs Jahren mit Ausstattung freigelassen (Ex 21,2; Dtn 15,12–15). Ehrlich bleibt: Lev 25,44–46 erlaubt dauerhafte Knechtschaft von Ausländern – das ist der schwerste Text. Das Neue Testament verurteilt die Menschenhändler (1 Tim 1,10), nennt den Sklaven Onesimus einen „geliebten Bruder" (Phlm 16) und erklärt: „Hier ist kein Knecht noch Freier" (Gal 3,28).`,
    detail: `**Der Wortschatz.** Das hebräische *ʿebed* bezeichnet ein breites Spektrum – vom Schuldknecht über den Diener bis zum hohen Minister („Knecht des Königs"); selbst Mose heißt „Knecht des HERRN". Die Übersetzung „Sklave" ruft beim modernen Leser die Plantage auf, die das Alte Testament nicht beschreibt.

**Einschränkungen, die im Alten Orient einzigartig sind:**
- **Menschenraub = Todesstrafe** (Ex 21,16; Dtn 24,7). Die ganze transatlantische Sklaverei beruhte auf Menschenraub.
- **Asyl für entlaufene Sklaven** (Dtn 23,16–17): Der Kodex Hammurabi (§15–16) bestrafte dagegen jeden mit dem Tod, der einem entlaufenen Sklaven half. Wo Flucht erlaubt ist, wird Sklaverei faktisch zu einem Verhältnis, das auf Zustimmung angewiesen ist.
- **Freilassung bei Verletzung** (Ex 21,26–27): Wer einem Sklaven auch nur einen Zahn ausschlägt, muss ihn freilassen.
- **Tötung eines Sklaven wird geahndet** (Ex 21,20): „er soll gerächt werden" (*nāqōm yinnāqēm*).
- **Sabbatruhe auch für Knechte** (Ex 20,10; Dtn 5,14–15) – begründet mit der Erinnerung: „Du warst auch Knecht in Ägypten."
- **Hebräische Knechte**: Freilassung im siebten Jahr mit reicher Ausstattung (Dtn 15,13–14); nicht „wie ein Sklave", sondern „wie ein Tagelöhner" behandeln (Lev 25,39–43).

**Der schwerste Text: Lev 25,44–46.** Hier wird zwischen Israeliten und Ausländern unterschieden; Ausländer konnten dauerhaft im Dienst bleiben und vererbt werden. Das ist ehrlich als Härte zu benennen. Aber auch für sie gelten Menschenraubverbot, Fluchtrecht, Verletzungsschutz und Sabbat – und Lev 19,33–34 gebietet, den Fremden zu lieben „wie dich selbst".

**Die Richtung.** Hi 31,13–15 begründet die Gleichheit von Herr und Knecht mit der Schöpfung: „Hat ihn nicht auch der gemacht, der mich im Mutterleibe machte?" Jesus nennt das Prinzip, nach dem manche Gebote „wegen eurer Herzenshärtigkeit" gegeben wurden (Mt 19,8). Die Schrift legt Samen (Gottebenbildlichkeit, Exodus, Bruderschaft in Christus), die die Institution von innen sprengen.`,
    sources: [
      { kind: 'bibel', work: 'Exodus', ref: '21,16', quote: `Wer einen Menschen stiehlt, es sei, daß er ihn verkauft oder daß man ihn bei ihm findet, der soll des Todes sterben.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '23,16–17', quote: `Du sollst den Knecht nicht seinem Herrn überantworten, der von ihm zu dir sich entwandt hat. Er soll bei dir bleiben an dem Ort, den er erwählt …, da es ihm gefällt; und sollst ihn nicht schinden.`, translation: 'Luther 1912', status: 'verbatim', note: 'In manchen Übersetzungen als 23,15–16 gezählt.' },
      { kind: 'bibel', work: 'Exodus', ref: '21,26–27', quote: `Wer seinem Knecht oder seiner Magd ein Auge oder einen Zahn ausschlägt, soll ihn dafür freilassen.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Levitikus', ref: '25,44–46', quote: `Knechte und Mägde dürft ihr von den Völkern um euch her kaufen … und sie sollen euer Besitz sein; ihr dürft sie euren Kindern vererben.`, status: 'paraphrase', note: 'Der schwierigste Text zum Thema – ehrlich benennen.' },
      { kind: 'bibel', work: 'Hiob', ref: '31,13–15', quote: `Hat ihn nicht auch der gemacht, der mich im Mutterleibe machte, und hat ihn im Mutterleibe ebensowohl bereitet?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Timotheus', ref: '1,10', quote: `…den Hurern, den Knabenschändern, den Menschendieben, den Lügnern, den Meineidigen…`, original: 'ἀνδραποδισταῖς', translation: 'Luther 1912', status: 'verbatim', note: 'andrapodistēs = Menschenhändler, Sklavenjäger.' },
      { kind: 'bibel', work: 'Philemon', ref: '16', quote: `…nun nicht mehr als einen Knecht, sondern mehr denn einen Knecht, einen lieben Bruder…`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Galater', ref: '3,28', quote: `Hier ist kein Jude noch Grieche, hier ist kein Knecht noch Freier, hier ist kein Mann noch Weib; denn ihr seid allzumal einer in Christo Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Alte Kirche hat die Sklaverei nicht mit einem Schlag abgeschafft – das wäre für eine verfolgte Minderheit unmöglich gewesen –, aber sie hat sie von innen ausgehöhlt: Sklaven waren vollwertige Glieder der Gemeinde, empfingen dieselben Sakramente, konnten Kleriker und sogar Bischöfe werden (Kallistus von Rom, † 222). Der Loskauf von Gefangenen galt als Werk der Barmherzigkeit, für das Ambrosius sogar Kirchengeräte einschmelzen ließ. Um 379 verurteilte **Gregor von Nyssa** in seiner 4. Homilie zum Prediger die Sklaverei grundsätzlich – nach heutigem Wissensstand die erste prinzipielle Ablehnung der Institution in der überlieferten Literatur der Antike.`,
    detail: `Gregor kommentiert Koh 2,7 („Ich erwarb Knechte und Mägde") und fragt den Sklavenhalter sinngemäß: Für welchen Preis hast du das Ebenbild Gottes gekauft? Wie viele Obolen hast du für die Gottähnlichkeit angesetzt? Der Mensch, dem Gott die Herrschaft über die Schöpfung gegeben hat, könne nicht selbst Besitz eines anderen Menschen sein; wer das tue, setze sich über das Gesetz Gottes hinweg.

Johannes Chrysostomus riet in einer Homilie zum 1. Korintherbrief Christen, Sklaven zu kaufen, ihnen ein Handwerk beizubringen und sie freizulassen. Kaiser Konstantin legalisierte die Freilassung in der Kirche (*manumissio in ecclesia*), die vor dem Bischof vollzogen wurde. Patrick von Irland (5. Jh.) prangerte in seinem *Brief an die Soldaten des Coroticus* Sklavenjagd scharf an – er war selbst als Jugendlicher versklavt worden.

Ehrlich bleibt: Kirchliche Institutionen besaßen in Antike und Mittelalter selbst Unfreie, und viele Väter akzeptierten die Sklaverei als Folge der gefallenen Welt. Die Saat ging langsam auf.`,
    sources: [
      { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: '4. Homilie zum Prediger (In Ecclesiasten homiliae IV)', ref: 'zu Koh 2,7', year: 'um 379', quote: `Du verurteilst den Menschen zur Knechtschaft, dessen Natur frei ist … Um welchen Preis, sag mir? Was hast du in der Welt gefunden, das so viel wert ist wie diese menschliche Natur? Wie viele Obolen hast du für das Ebenbild Gottes angesetzt?`, status: 'paraphrase', note: 'Sinngemäß nach der englischen Übersetzung von Stuart G. Hall (1993); Wortlaut vor wörtlicher Verwendung am Text prüfen.' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum 1. Korintherbrief', ref: 'Hom. 40', quote: `Kauft Sklaven, lehrt sie ein Handwerk, damit sie sich selbst erhalten können, und lasst sie frei.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Ambrosius von Mailand', work: 'De officiis', ref: 'II,28', year: 'um 390', quote: `Die Kirche besitzt Gold nicht, um es aufzubewahren, sondern um es für die Not – etwa den Loskauf Gefangener – hinzugeben.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Patrick von Irland', work: 'Brief an die Soldaten des Coroticus', year: '5. Jh.', quote: `Scharfe Verurteilung der Verschleppung und des Verkaufs neugetaufter Christen in die Sklaverei.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Historiker sind sich einig, dass die antike Kirche die Sklaverei als Institution weitgehend hinnahm und dass christliche Gesellschaften – bis hin zu den Südstaaten der USA – Sklaverei mit Bibelversen rechtfertigten. Ebenso unstrittig ist, dass die organisierte Abolitionsbewegung des 18. und 19. Jahrhunderts überwiegend religiös motiviert war (Quäker, Evangelikale wie Wilberforce und Clarkson). Umstritten ist, wie viel Anteil das christliche Menschenbild am Verschwinden der Sklaverei im mittelalterlichen Europa hatte: Rodney Stark und Kyle Harper betonen ihn, andere Historiker heben wirtschaftliche Faktoren hervor.`,
    sources: [
      { kind: 'gegner', author: 'Hector Avalos', work: 'Slavery, Abolitionism, and the Ethics of Biblical Scholarship', year: '2011', quote: `Die Bibel habe Sklaverei befürwortet; die Abolition sei trotz, nicht wegen der Bibel gekommen, und Bibelwissenschaftler beschönigten die Texte.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Rodney Stark', work: 'For the Glory of God', ref: 'Kap. 4', year: '2003', quote: `Die Ablehnung der Sklaverei entstand aus christlicher Theologie; im Mittelalter verschwand die Sklaverei in weiten Teilen Europas, die Abolitionsbewegung der Neuzeit war religiös getragen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kyle Harper', work: 'Slavery in the Late Roman World, AD 275–425', year: '2011', quote: `Umfassende Studie zur spätantiken Sklaverei, einschließlich der ambivalenten Rolle des Christentums.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel hat Sklaverei nicht erfunden, sondern in einer Welt vorgefunden, in der sie überall üblich war – und sie hat sie radikal eingeschränkt: Menschenraub wurde mit dem Tod bestraft, entlaufene Sklaven durften nicht ausgeliefert werden, Verletzung führte zur Freilassung. Das Neue Testament verurteilt Menschenhändler und nennt den Sklaven einen „geliebten Bruder". Genau aus diesen Grundsätzen – jeder Mensch ist Gottes Ebenbild – kam die Bewegung, die die Sklaverei abgeschafft hat. Dass Christen die Bibel auch missbraucht haben, gebe ich offen zu.`,
  keyPoints: [
    `**Menschenraub = Todesstrafe** (Ex 21,16; 1 Tim 1,10): Die Grundlage der transatlantischen Sklaverei war nach biblischem Recht ein Kapitalverbrechen.`,
    `**Asyl für Entlaufene** (Dtn 23,16–17): Einzigartig im Alten Orient – der Kodex Hammurabi bestrafte Fluchthilfe mit dem Tod.`,
    `**Schuldknechtschaft, nicht Plantage:** Hebräische Knechte wurden nach sechs Jahren mit Ausstattung frei (Dtn 15,12–15); Verletzung führte zur Freilassung (Ex 21,26–27).`,
    `**Die Richtung zählt:** Schöpfung (Hi 31,15), Exodus („du warst Knecht in Ägypten") und Bruderschaft in Christus (Phlm 16; Gal 3,28) sprengen die Institution von innen.`,
    `**Gregor von Nyssa (um 379)** verurteilte die Sklaverei grundsätzlich – nach heutigem Wissen als Erster in der überlieferten antiken Literatur.`,
    `**Abolition war christlich getragen:** Quäker, Wilberforce, Clarkson, Frederick Douglass argumentierten mit der Bibel gegen die Sklaverei.`,
  ],
  voices: [
    {
      person: 'gregor-nyssa',
      role: 'als Prediger der Menschenwürde',
      text: `In seiner 4. Homilie zum Prediger nimmt Gregor den Vers „Ich erwarb Knechte und Mägde" (Koh 2,7) zum Anlass für eine Generalabrechnung. Der Mensch sei als Ebenbild Gottes zum Herrn über die Schöpfung bestimmt; wer ihn kauft, beanspruche Gott gleichsam das Eigentumsrecht an seinem Ebenbild abzuringen. Kein Preis der Welt könne die vernunftbegabte, gottähnliche Natur aufwiegen.

Gregor argumentiert nicht nur gegen *Missbrauch* der Sklaverei, sondern gegen die Institution selbst. Das ist in der Antike, in der selbst Platon und Aristoteles die Sklaverei als natürlich ansahen, ohne Vorbild – und es entspringt direkt der biblischen Lehre von Gen 1,26–27.`,
      sources: [{ kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'In Ecclesiasten homiliae IV', year: 'um 379', status: 'paraphrase' }],
    },
    {
      person: 'paulus',
      role: 'als Verfasser des Philemonbriefs',
      text: `Der kürzeste Paulusbrief ist ein kleines Meisterstück der Unterwanderung. Paulus schickt Onesimus zurück, aber mit einem Empfehlungsschreiben, das die Beziehung neu definiert: Philemon soll ihn aufnehmen „nicht mehr als einen Knecht, sondern … als einen lieben Bruder" (Phlm 16), ja „wie mich selbst" (V. 17). Paulus bietet an, jede Schuld zu begleichen, und deutet an, Philemon werde „mehr tun, als ich sage" (V. 21) – eine kaum verhüllte Bitte um Freilassung.

In 1 Kor 7,21 rät Paulus Sklaven: „Kannst du frei werden, so nutze es lieber." Und in den Haustafeln spricht er Sklaven als sittliche Personen an und stellt die Herren unter denselben Herrn im Himmel, „bei dem kein Ansehen der Person ist" (Eph 6,9) – im römischen Recht waren Sklaven Sachen.`,
      sources: [
        { kind: 'bibel', work: 'Philemon', ref: '16–21', status: 'paraphrase' },
        { kind: 'bibel', work: 'Epheser', ref: '6,9', quote: `Und ihr Herren, tut ihnen dasselbe und lasset das Drohen; wisset, daß euer und ihr Herr im Himmel ist und ist bei ihm kein Ansehen der Person.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'kyle-harper',
      role: 'als Althistoriker',
      text: `Kyle Harper hat die spätrömische Sklaverei so gründlich untersucht wie kaum ein anderer. Er zeichnet ein nüchternes Bild: Das Christentum hat die Sklaverei in der Spätantike nicht abgeschafft, und christliche Herren hielten weiterhin Sklaven. Zugleich zeigt er, wie die christliche Sexualethik die Lage der Sklaven grundlegend veränderte: Im römischen System war der Körper des Sklaven sexuell frei verfügbar; die Kirche erklärte Unzucht mit Sklaven zur Sünde und stellte Sklavinnen als Personen mit eigener Würde unter Schutz (*From Shame to Sin*, 2013).

Harpers Befund ist für Laien ideal: ehrlich in den Zugeständnissen, aber klar darin, dass das christliche Menschenbild einen echten Bruch mit der antiken Logik darstellte.`,
      sources: [
        { kind: 'fachliteratur', author: 'Kyle Harper', work: 'Slavery in the Late Roman World, AD 275–425', year: '2011', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Kyle Harper', work: 'From Shame to Sin: The Christian Transformation of Sexual Morality in Late Antiquity', year: '2013', status: 'paraphrase' },
      ],
    },
    {
      person: 'wilberforce',
      role: 'als Abolitionist',
      text: `William Wilberforce führte fast zwei Jahrzehnte lang im britischen Parlament den Kampf gegen den Sklavenhandel, bis 1807 der *Slave Trade Act* verabschiedet wurde; kurz vor seinem Tod 1833 folgte die Abschaffung der Sklaverei im Britischen Empire. Seine Motivation war ausdrücklich evangelisch: Nach seiner Bekehrung sah er die Abschaffung des Sklavenhandels und die „Reformation der Sitten" als seine von Gott gegebenen Lebensaufgaben.

Das Emblem der Bewegung – ein knieender Sklave in Ketten mit der Inschrift „Am I not a man and a brother?" – ist ein unmittelbares Echo von Phlm 16.`,
      sources: [{ kind: 'sonstiges', work: 'Slave Trade Act 1807; Slavery Abolition Act 1833', status: 'paraphrase' }],
    },
    {
      person: 'rodney-stark',
      role: 'als Religionssoziologe',
      text: `Stark weist darauf hin, dass Sklaverei in praktisch allen Hochkulturen bestand – in China, Indien, Afrika, der islamischen Welt und dem präkolumbischen Amerika. Das Besondere ist nicht, dass christliche Gesellschaften Sklaven hielten, sondern dass nur in der christlichen Zivilisation eine moralische Bewegung entstand, die die Institution grundsätzlich ablehnte und beseitigte. Er zeigt, dass die Sklaverei im mittelalterlichen Europa weitgehend verschwand und dass die neuzeitliche Abolitionsbewegung von religiösen Gruppen getragen wurde.`,
      sources: [{ kind: 'fachliteratur', author: 'Rodney Stark', work: 'For the Glory of God', ref: 'Kap. 4', year: '2003', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'lev-25-besitz',
      objection: `Lev 25,44–46: Ihr sollt Sklaven aus den Völkern kaufen, sie sind euer Besitz, ihr könnt sie vererben, für immer. Das ist Besitzsklaverei, schwarz auf weiß.`,
      objectionBy: 'Hector Avalos',
      answer: `Das ist der schwerste Text, und ich gebe offen zu, dass er hart ist. Aber auch für diese Ausländer galt: Wer einen Menschen raubt, wird hingerichtet (Ex 21,16); wer entläuft, darf nicht ausgeliefert werden (Dtn 23,16); wer verletzt wird, kommt frei (Ex 21,26–27). Eine Sklaverei, aus der man fliehen darf und in die man nicht geraubt werden darf, ist etwas völlig anderes als die Plantage in Virginia.`,
      detail: `Das Wort „Besitz" (*ʾăḥuzzāh*) bezeichnet ein rechtlich geregeltes Dienstverhältnis, das im Fall der Ausländer erblich war. Es bleibt eine Härte. Aber die Rechtsfolgen unterscheiden sich fundamental vom römischen oder amerikanischen Sklavenrecht: kein Raub, kein Auslieferungszwang, Verletzungsschutz, Sabbatruhe, Teilnahme am Passa für beschnittene Knechte (Ex 12,44). Lev 19,34 gebietet zudem, den Fremden „wie dich selbst" zu lieben.`,
      sources: [
        { kind: 'sonstiges', work: 'Kodex Hammurabi', ref: '§ 15–16', year: 'um 1750 v. Chr.', quote: `Wer einem entlaufenen Sklaven aus der Stadt hilft oder ihn in seinem Haus verbirgt, wird getötet.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Kennst du ein anderes Gesetzbuch des Alten Orients, das verbietet, entlaufene Sklaven auszuliefern?`,
        `Wie hätte die amerikanische Sklaverei ausgesehen, wenn man Ex 21,16 und Dtn 23,16 angewandt hätte?`,
      ],
      followUps: [
        {
          id: 'ex-21-sein-geld',
          objection: `Und Ex 21,20–21? Wenn der Sklave nach einem Tag stirbt, wird der Herr nicht bestraft – „denn er ist sein Geld". Klarer kann man nicht sagen, dass ein Sklave eine Sache ist.`,
          objectionBy: 'Sam Harris',
          answer: `Lies den Vers davor: Stirbt der Sklave unter den Schlägen, „soll er gerächt werden" – das hebräische Wort steht sonst für Blutrache bzw. Strafe für Tötung. Im Alten Orient war das revolutionär: Die Tötung des eigenen Sklaven wurde bestraft. Vers 21 regelt den unklaren Fall, in dem der Tod erst Tage später eintritt und die Ursache nicht eindeutig ist; „sein Geld" heißt, dass der Verlust des Arbeiters die Strafe ist. Ich nenne das nicht ideal – es ist Recht für eine harte Welt (Mt 19,8).`,
          detail: `Vergleiche Ex 21,18–19: Auch bei freien Männern, die sich prügeln, gilt, dass der Schläger nicht wegen Totschlags belangt wird, wenn der Geschlagene wieder aufsteht. Die Logik der Kausalität ist dieselbe. Der Ausdruck *nāqōm yinnāqēm* („er soll unbedingt gerächt werden") in V. 20 schließt aus, dass der Herr über Leben und Tod seines Sklaven verfügte – anders als im römischen Recht vor Hadrian.`,
          followUps: [
            {
              id: 'regulieren-heisst-legitimieren',
              objection: `Regulieren heißt legitimieren. Ein guter Gott hätte einfach als elftes Gebot schreiben können: „Du sollst keinen Menschen besitzen." Warum hat er das nicht?`,
              objectionBy: 'Sam Harris',
              answer: `Weil Gesetze ohne verwandelte Herzen nicht funktionieren – das zeigt jede Prohibition. In einer Welt, in der Schuldknechtschaft oft die einzige Alternative zum Verhungern war, hat Gott Grundsätze gepflanzt, die die Sklaverei von innen auflösen: Jeder Mensch ist Gottes Ebenbild (Gen 1,27), Herr und Knecht hat derselbe Gott geschaffen (Hi 31,15), in Christus gibt es keinen Knecht noch Freien (Gal 3,28). Jesus erklärt selbst, dass manche Gebote „wegen eurer Herzenshärtigkeit" Zugeständnisse waren (Mt 19,8). Und historisch hat genau diese Saat die Abolition hervorgebracht.`,
              detail: `Man kann Harris zurückfragen, ob Gott dann auch jedes andere Übel per Dekret hätte verbieten sollen – und warum er es dann nicht auch gleich unmöglich macht. Hier zeigt sich, dass das Argument eigentlich eine Variante des Theodizee-Problems ist: Warum lässt Gott Menschen in Freiheit und Geschichte reifen, statt sie per Befehl zu programmieren?`,
              questionsBack: [
                `Hat ein bloßes Verbot je eine tief verwurzelte Institution beseitigt, ohne dass sich zuerst das Menschenbild änderte?`,
                `Woher hatten die Abolitionisten ihre Überzeugung, dass Sklaven Menschen und Brüder sind?`,
              ],
              followUps: [
                {
                  id: 'suedstaaten-bibel',
                  objection: `Die Sklavenhalter im amerikanischen Süden hatten die Bibel auf ihrer Seite. Ihre Prediger haben sie Vers für Vers zitiert. Die Bibel war das Problem, nicht die Lösung.`,
                  objectionBy: 'Dan Savage',
                  answer: `Es stimmt, und das ist eine Schande: Viele Prediger haben die Sklaverei biblisch verteidigt; die Southern Baptist Convention entstand 1845 sogar im Streit darum und hat sich 1995 dafür entschuldigt. Aber diese Prediger mussten Ex 21,16 (Menschenraub), Dtn 23,16 (Asyl für Flüchtige – das genaue Gegenteil des Fugitive Slave Act von 1850) und 1 Tim 1,10 überlesen. Die Abolitionisten – von Wilberforce bis Frederick Douglass – argumentierten mit derselben Bibel, und sie hatten den Text auf ihrer Seite.`,
                  detail: `Frederick Douglass, selbst entflohener Sklave, unterschied im Anhang seiner Autobiografie (1845) scharf zwischen dem „Christentum Christi" und der „sklavenhaltenden Religion" seines Landes: Zwischen beiden sehe er den größtmöglichen Unterschied. Das ist der entscheidende Punkt: Der Missbrauch eines Textes widerlegt nicht den Text, sondern den Missbraucher.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Frederick Douglass', work: 'Narrative of the Life of Frederick Douglass, an American Slave', ref: 'Anhang', year: '1845', quote: `Zwischen dem Christentum dieses Landes und dem Christentum Christi erkenne ich den größtmöglichen Unterschied.`, status: 'paraphrase' },
                    { kind: 'sonstiges', work: 'Southern Baptist Convention, Resolution on Racial Reconciliation', year: '1995', quote: `Entschuldigung für die Rolle der Sklaverei bei der Gründung der SBC und für die Unterstützung von Rassismus.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'ebed-wortklauberei',
          objection: `Der Unterschied zwischen „Schuldknechtschaft" und „Sklaverei" ist Wortklauberei. Ein Mensch, der verkauft, geschlagen und vererbt werden kann, ist ein Sklave.`,
          objectionBy: 'Hector Avalos',
          answer: `Für den hebräischen Knecht ist der Unterschied real: Er kam aus Armut freiwillig in den Dienst, wurde nach sechs Jahren mit Vieh, Korn und Wein ausgestattet freigelassen (Dtn 15,13–14) und sollte „wie ein Tagelöhner" behandelt werden (Lev 25,39–40). Das ist näher an der Schuldknechtschaft, mit der im 17. Jahrhundert Europäer ihre Überfahrt nach Amerika bezahlten, als an der Plantage. Für Ausländer war es härter – das gebe ich zu.`,
        },
      ],
    },
    {
      id: 'nt-knechte-gehorsam',
      objection: `Das Neue Testament ist nicht besser: „Ihr Knechte, seid gehorsam euren Herren mit Furcht und Zittern" (Eph 6,5). Und Paulus schickt den entlaufenen Onesimus zu seinem Herrn zurück.`,
      objectionBy: 'Richard Dawkins',
      answer: `Paulus spricht Sklaven als sittliche Personen und vollwertige Glieder der Gemeinde an – das war unerhört, denn im römischen Recht waren Sklaven Sachen. Er stellt die Herren unter denselben Herrn, „bei dem kein Ansehen der Person ist" (Eph 6,9). Onesimus schickt er zurück „nicht mehr als einen Knecht, sondern als einen lieben Bruder" (Phlm 16), und 1 Tim 1,10 nennt Menschenhändler in einem Atemzug mit Mördern. Eine winzige, verfolgte Minderheit konnte das Römische Reich nicht umstürzen – aber sie hat die Logik der Sklaverei von innen zersetzt.`,
      followUps: [
        {
          id: 'paulus-feige',
          objection: `Warum hat Paulus dann nicht einfach gesagt: Sklaverei ist Sünde, lasst alle frei? Das war Feigheit oder Gleichgültigkeit.`,
          objectionBy: 'Bart Ehrman',
          answer: `Weil ein solcher Aufruf für die Sklaven selbst tödlich gewesen wäre. Nach dem Spartakus-Aufstand ließ Rom Tausende Sklaven entlang der Via Appia kreuzigen. Paulus wählte einen anderen Weg: Herren und Sklaven feierten an einem Tisch Eucharistie, Sklaven konnten Kleriker werden, und Paulus riet: „Kannst du frei werden, so nutze es lieber" (1 Kor 7,21). Das war keine Gleichgültigkeit, sondern eine Revolution der Beziehungen, die die Institution aushöhlte.`,
          detail: `Kallistus, ein ehemaliger Sklave, wurde im 3. Jahrhundert Bischof von Rom. In einer Gesellschaft, die Sklaven als „sprechende Werkzeuge" (Varro) bezeichnete, war das eine Umwertung aller Werte. Kyle Harper zeigt zudem, dass die christliche Sexualethik Sklaven und Sklavinnen erstmals als Personen behandelte, deren Körper nicht frei verfügbar waren.`,
          followUps: [
            {
              id: 'kirche-1500-jahre',
              objection: `Die Kirche hat 1.500 Jahre lang Sklaverei geduldet, Klöster besaßen Leibeigene, Päpste segneten den portugiesischen Sklavenhandel. Wo war da die „Saat"?`,
              objectionBy: 'Hector Avalos',
              answer: `Das ist ein berechtigter Vorwurf, und ich beschönige ihn nicht: Kirchliche Institutionen besaßen Unfreie, und päpstliche Bullen wie *Romanus Pontifex* (1455) haben Eroberung und Versklavung legitimiert – ein schweres Unrecht. Aber die Saat ging auch auf: Gregor von Nyssa (um 379), die Freilassung in der Kirche, der Loskauf Gefangener, das weitgehende Verschwinden der Sklaverei im hochmittelalterlichen Europa, Las Casas' Kampf für die Indigenen, Papst Pauls III. *Sublimis Deus* (1537) und schließlich die Abolitionsbewegung. Die koptische Kirche ihrerseits war in diesen Jahrhunderten selbst eine bedrängte Minderheit, nie eine Kolonialmacht.`,
              sources: [
                { kind: 'sonstiges', author: 'Papst Paul III.', work: 'Sublimis Deus', year: '1537', quote: `Die Indianer und alle anderen Völker sind wahre Menschen; sie dürfen ihrer Freiheit und ihres Besitzes nicht beraubt werden, auch wenn sie nicht Christen sind.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'aufklaerung-nicht-bibel',
      objection: `Gregor von Nyssa war eine Ausnahme. Die Abschaffung der Sklaverei verdanken wir der Aufklärung und den Menschenrechten, nicht der Bibel.`,
      objectionBy: 'Steven Pinker',
      answer: `Die Aufklärer waren in dieser Frage gespalten: John Locke war Anteilseigner der Royal African Company und schrieb an einer Verfassung für Carolina mit, die Herren absolute Macht über ihre Sklaven gab; David Hume äußerte sich offen rassistisch. Die organisierte Abolitionsbewegung in England wurde 1787 vor allem von Quäkern gegründet und von Evangelikalen wie Wilberforce und Clarkson getragen. Ihr Leitsatz „Bin ich nicht ein Mensch und ein Bruder?" kommt aus dem Philemonbrief, nicht aus Voltaire.`,
      detail: `Die Menschenrechtsidee selbst hat, wie Historiker wie Tom Holland und Larry Siedentop zeigen, tiefe christliche Wurzeln: die Gleichheit aller vor Gott, die Würde jedes Einzelnen als Ebenbild Gottes, die Gewissensfreiheit. Die Aufklärung hat diese Ideen säkular formuliert – aber nicht aus dem Nichts geschaffen.`,
      sources: [
        { kind: 'sonstiges', author: 'John Locke u. a.', work: 'The Fundamental Constitutions of Carolina', ref: 'Art. 110', year: '1669', quote: `Jeder Freie in Carolina soll absolute Macht und Autorität über seine Negersklaven haben.`, status: 'paraphrase', note: 'Lockes genauer Anteil an der Abfassung ist umstritten; seine Beteiligung an der Royal African Company ist belegt.' },
      ],
      followUps: [
        {
          id: 'abolitionisten-minderheit',
          objection: `Auch unter Christen waren die Abolitionisten eine Minderheit. Die Mehrheit der Gläubigen hat die Sklaverei jahrhundertelang hingenommen.`,
          objectionBy: 'Hector Avalos',
          answer: `Das stimmt – moralische Reformen beginnen immer mit Minderheiten. Die Frage ist nicht, wie viele Christen versagt haben, sondern welches Menschenbild den Reformern den Maßstab gab, an dem sie die Mehrheit maßen. Und außerhalb des christlichen Einflussbereichs bestand die Sklaverei vielerorts bis ins 20. Jahrhundert fort; Mauretanien schaffte sie formell erst 1981 ab.`,
          questionsBack: [
            `Nach welchem Maßstab war die Mehrheit im Unrecht, wenn Moral nur die Übereinkunft einer Gesellschaft ist?`,
          ],
        },
      ],
    },
    {
      id: 'savage-sklaverei-also-sexualitaet',
      objection: `Wenn die Bibel bei der einfachsten moralischen Frage – Sklaverei – falsch lag, warum sollte ich ihr bei Sexualität glauben?`,
      objectionBy: 'Dan Savage',
      answer: `Die Prämisse stimmt nicht: Die Bibel hat Sklaverei nie als Ideal gelehrt, sondern als Zustand einer gefallenen Welt reguliert und zugleich die Prinzipien gelegt, die sie überwinden. Bei Ehe und Sexualität ist es genau umgekehrt: Dort beruft sich Jesus ausdrücklich auf den Schöpfungsanfang (Mt 19,4–6) – also auf Gottes Ideal, nicht auf ein Zugeständnis an die Härte des Herzens. Die beiden Fragen haben eine entgegengesetzte Struktur.`,
    },
  ],
  questionsToAsk: [
    `Welches andere antike Gesetzbuch bestraft Menschenraub mit dem Tod und verbietet, entlaufene Sklaven auszuliefern?`,
    `Woher hatten die Abolitionisten ihre Überzeugung, dass alle Menschen gleich an Würde sind?`,
    `Warum entstand eine Bewegung zur grundsätzlichen Abschaffung der Sklaverei gerade in christlich geprägten Gesellschaften?`,
    `Wenn Moral kulturell relativ ist – mit welchem Recht verurteilst du die antike Sklaverei überhaupt?`,
  ],
  avoid: [
    `„Biblische Sklaverei war nur harmlose Lohnarbeit." Für Ausländer (Lev 25,44–46) stimmt das nicht – und der Gegner kennt die Stelle.`,
    `„Christen haben die Sklaverei abgeschafft, Ende." Christen haben sie auch verteidigt; nur das ehrliche Gesamtbild überzeugt.`,
    `Die Haustafeln (Eph 6,5) als zeitlose Bestätigung der Institution lesen – sie regeln das Verhalten in einer bestehenden Ordnung, nicht deren Rechtmäßigkeit.`,
  ],
  concessions: [
    `Die Tora erlaubt eine dauerhafte Knechtschaft von Ausländern (Lev 25,44–46); das ist nach heutigen Maßstäben hart und darf nicht weggeredet werden.`,
    `Christen und kirchliche Institutionen haben über Jahrhunderte Sklaven gehalten, und viele Prediger haben die neuzeitliche Sklaverei mit der Bibel verteidigt.`,
    `Päpstliche Dokumente des 15. Jahrhunderts haben die Versklavung nichtchristlicher Völker legitimiert – ein schweres Unrecht.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kyle Harper', work: 'Slavery in the Late Roman World, AD 275–425', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Rodney Stark', work: 'For the Glory of God', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Paul Copan', work: 'Is God a Moral Monster?', ref: 'Kap. 12–14', year: '2011', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'Homilien zum Prediger (Homilies on Ecclesiastes)', ref: 'Hom. IV', year: 'um 379', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Sklaverei', 'Abolition', 'Philemon', 'Gregor von Nyssa', 'Wilberforce', 'Tora'],
  related: [
    'at-ethik/grausame-gesetze',
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'christentum-gesellschaft/christentum-kolonialismus',
    'moral-und-gott/moral-kulturell-relativ',
    'sexualethik/homosexualitaet-bibel',
  ],
};

export default claim;
