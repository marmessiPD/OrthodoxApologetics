import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'hoelle-angstmache',
  title: `„Die Hölle ist nur ein Mittel, um Menschen Angst zu machen."`,
  proponents: [
    {
      name: 'Christopher Hitchens',
      role: 'Journalist und Autor (1949–2011)',
      work: 'God Is Not Great (2007)',
    },
    {
      name: 'Richard Dawkins',
      role: 'Evolutionsbiologe, Oxford',
      work: 'The God Delusion (2006), Kap. 9 (Höllenlehre als seelischer Kindesmissbrauch)',
    },
    {
      name: 'Bertrand Russell',
      role: 'Philosoph (1872–1970)',
      work: 'Why I Am Not a Christian (1927)',
    },
  ],
  steelman: `Die Hölle ist das wirksamste Kontrollinstrument, das je erfunden wurde. Wer Menschen glauben macht, dass ihnen ewige Qual droht, kann ihnen alles befehlen: Gehorsam gegenüber Priestern, Spenden, Verzicht, Unterwerfung. Die mittelalterliche Kirche verkaufte sogar Ablassbriefe, die vor den Strafen des Jenseits schützen sollten. Kinder werden mit Bildern von ewigem Feuer erschreckt, bevor sie denken können – Richard Dawkins nennt das eine Form seelischen Missbrauchs. Unzählige ehemalige Gläubige leiden ihr Leben lang an Angst und Schuld; Psychologen sprechen von religiösem Trauma. Eine Bekehrung aus Angst vor der Hölle ist keine echte Überzeugung, sondern Erpressung. Und historisch: Die ausgemalte Hölle stammt aus dem Mittelalter, von Dante und den Höllenpredigern – mit dem friedlichen Wanderprediger Jesus hat sie wenig zu tun.`,
  biblical: {
    summary: `Die Bibel nennt die Liebe, nicht die Angst, als Mitte des Glaubens: „Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus" (1 Joh 4,18). Zugleich hat Jesus selbst – nicht das Mittelalter – am ernstesten vor dem Gericht gewarnt (Mt 10,28; 25,46; Mk 9,43–48). Seine Warnungen sind keine Erpressung, sondern Liebe, wie die Warnung vor einem Abgrund: Er weinte über Jerusalem, während er es warnte (Lk 19,41–44). Die „Furcht des Herrn", die die Bibel als „der Weisheit Anfang" lobt (Spr 9,10), ist Ehrfurcht vor dem Heiligen, nicht Panik vor einem Tyrannen. Und das Evangelium lädt ein: „Kommet her zu mir alle, die ihr mühselig und beladen seid; ich will euch erquicken" (Mt 11,28).`,
    detail: `- **1 Joh 4,18:** Die Liebe ist das Ziel; Furcht hat mit Strafe zu tun, Liebe treibt sie aus. Wer aus reiner Angst glaubt, ist noch nicht am Ziel.
- **Mt 10,28:** „Fürchtet euch nicht vor denen, die den Leib töten … fürchtet euch aber viel mehr vor dem, der Leib und Seele verderben mag in der Hölle." Jesus spricht das seinen Jüngern zu, die verfolgt werden – die Gottesfurcht befreit von Menschenfurcht.
- **Gehenna:** Das Wort leitet sich vom Tal Hinnom bei Jerusalem ab, wo einst Kinder geopfert wurden (Jer 7,31); in jüdischen Schriften der Zeit Jesu wurde es zum Bild des Gerichts. Die verbreitete Erklärung, es sei eine brennende Müllkippe gewesen, ist erst bei dem mittelalterlichen Rabbiner David Kimchi (um 1200) bezeugt.
- **Einladung, nicht Drohung:** Das Neue Testament endet mit der Einladung: „wer da will, der nehme das Wasser des Lebens umsonst" (Offb 22,17).`,
    sources: [
      { kind: 'bibel', work: '1. Johannes', ref: '4,18', quote: `Furcht ist nicht in der Liebe, sondern die völlige Liebe treibt die Furcht aus; denn die Furcht hat Pein. Wer sich aber fürchtet, der ist nicht völlig in der Liebe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,28', quote: `Und fürchtet euch nicht vor denen, die den Leib töten, und die Seele nicht mögen töten; fürchtet euch aber viel mehr vor dem, der Leib und Seele verderben mag in der Hölle.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '19,41–42', quote: `Und als er nahe hinzukam, sah er die Stadt an und weinte über sie und sprach: Wenn du es wüßtest, so würdest du auch bedenken zu dieser deiner Zeit, was zu deinem Frieden dient!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Sprüche', ref: '9,10', quote: `Der Weisheit Anfang ist des HERRN Furcht, und den Heiligen erkennen, das ist Verstand.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '11,28', quote: `Kommet her zu mir alle, die ihr mühselig und beladen seid; ich will euch erquicken.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Tradition hat die Furcht nie als Ziel des geistlichen Lebens verstanden. Der hl. Antonius, der Vater der Mönche, sagte nach der Überlieferung der Wüstenväter: „Ich fürchte Gott nicht mehr, sondern ich liebe ihn; denn die Liebe treibt die Furcht aus." Die Väter unterscheiden drei Stufen: den Sklaven, der aus Furcht vor Strafe gehorcht, den Lohnarbeiter, der auf Belohnung hofft, und den Sohn, der aus Liebe handelt – und sie sehen das Ziel im Sohn. Die koptische Kirche hat nie Ablässe verkauft und kennt kein Fegefeuer; das Heil ist nicht käuflich. Die koptische Sonntagsschulbewegung, von dem Archidiakon Habib Girgis (1876–1951) begründet, sollte Kinder zur Liebe zu Christus und zur Kirche führen, nicht zur Angst.`,
    detail: `- **Antonius (Apophthegmata Patrum):** Die Furcht ist ein Anfang, die Liebe das Ziel.
- **Die drei Stufen** (Sklave, Lohnarbeiter, Sohn) finden sich bei Basilius dem Großen (Vorrede zu den Längeren Regeln) und bei vielen späteren Vätern.
- **Die Kirche als Krankenhaus:** Die orthodoxe Seelsorge versteht Beichte und Buße als Heilung, nicht als Einschüchterung.`,
    sources: [
      { kind: 'kirchenvater', author: 'Antonius der Große (Apophthegmata Patrum)', work: 'Sprüche der Wüstenväter, Antonius', ref: 'Nr. 32 (alphabetische Sammlung)', year: '4. Jh.', quote: `Ich fürchte Gott nicht mehr, sondern ich liebe ihn; denn die Liebe treibt die Furcht aus.`, status: 'paraphrase', note: 'Nummerierung nach der alphabetischen Sammlung; Wortlaut je nach Übersetzung leicht verschieden.' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln (Regulae fusius tractatae)', ref: 'Vorrede', year: 'um 370', quote: `Man gehorcht Gott entweder aus Furcht vor Strafe wie ein Sklave, oder um des Lohnes willen wie ein Tagelöhner, oder um des Guten selbst und aus Liebe zu ihm wie ein Sohn; die dritte Weise ist die vollkommene.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Dass Höllenbilder missbraucht wurden, um Menschen einzuschüchtern und zu kontrollieren, ist historisch unbestreitbar – vom spätmittelalterlichen Ablasshandel in Westeuropa (Tetzel, 1517) bis zu manipulativen Predigten in manchen Gemeinschaften heute. Die Psychologie kennt Fälle religiös bedingter Angststörungen und Skrupulosität; der Begriff „Religious Trauma Syndrome" (Marlene Winell, 2011) wird diskutiert, ist aber keine anerkannte klinische Diagnose. Zugleich ist die Behauptung, die Höllenlehre sei eine Erfindung des Mittelalters, historisch falsch: Schon die frühesten christlichen Texte nach dem Neuen Testament – Ignatius von Antiochien (um 110), Justin der Märtyrer (um 155), das Martyrium des Polykarp (um 156) – sprechen vom „unauslöschlichen" bzw. „ewigen" Feuer. Dantes *Göttliche Komödie* (um 1320) ist Dichtung, keine Dogmatik.`,
    sources: [
      { kind: 'kirchenvater', author: 'Ignatius von Antiochien', work: 'Brief an die Epheser', ref: '16,2', year: 'um 110', quote: `Ein solcher wird, da er unrein geworden ist, in das unauslöschliche Feuer gehen, ebenso wie der, der auf ihn hört.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Erste Apologie', ref: '8,4', year: 'um 155', quote: `Platon sagte, die Bösen würden tausend Jahre bestraft; wir aber sagen, dass sie mit denselben Leibern und Seelen ewige Strafe erleiden werden.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Martyrium des Polykarp', work: 'Martyrium Polycarpi', ref: '11,2', year: 'um 156', quote: `Du drohst mit einem Feuer, das eine Stunde brennt und dann erlischt; denn du kennst das Feuer des kommenden Gerichts und der ewigen Strafe nicht, das den Gottlosen bereitet ist.`, status: 'paraphrase', note: 'Antwort des greisen Bischofs Polykarp an den Prokonsul.' },
      { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 9', year: '2006', quote: `Kindern die Hölle einzuschärfen, kann seelisch schädlicher sein als manche Formen körperlichen Missbrauchs.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Ja, die Hölle wurde missbraucht, um Menschen Angst zu machen – das gebe ich offen zu, und das war falsch. Aber ob eine Warnung missbraucht wird, sagt nichts darüber, ob sie wahr ist. Ein Arzt, der vor einer tödlichen Krankheit warnt, macht nicht „Angstmache", wenn die Krankheit real ist. Jesus hat gewarnt – unter Tränen, aus Liebe. Und das Ziel des Glaubens ist nicht Angst, sondern Liebe: „Die völlige Liebe treibt die Furcht aus." Der Vater der Mönche, Antonius, sagte: „Ich fürchte Gott nicht mehr, ich liebe ihn."`,
  keyPoints: [
    `**Missbrauch zugeben:** Höllenpredigten wurden zur Einschüchterung und Kontrolle benutzt; der westliche Ablasshandel ist ein Beispiel. Die koptische Kirche hat nie Ablässe verkauft.`,
    `**Missbrauch widerlegt nicht Wahrheit:** Ob eine Warnung manipulativ ist, hängt davon ab, ob sie wahr ist – ein Arzt, der vor Krebs warnt, macht keine Angstmache.`,
    `**Das Ziel ist Liebe, nicht Angst:** „Die völlige Liebe treibt die Furcht aus" (1 Joh 4,18); Antonius: „Ich fürchte Gott nicht mehr, ich liebe ihn."`,
    `**Jesus warnte aus Liebe:** Er weinte über Jerusalem, während er es warnte (Lk 19,41–44).`,
    `**Die Höllenlehre ist nicht mittelalterlich:** Jesus selbst sprach davon; Ignatius, Justin und das Martyrium des Polykarp bezeugen sie im 2. Jahrhundert. Dante ist Dichtung.`,
    `**Die frühe Kirche wuchs nicht durch Angst, sondern durch Liebe** – durch Fürsorge, Gemeinschaft und das Zeugnis der Märtyrer.`,
  ],
  voices: [
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Der hl. Antonius, der Begründer des ägyptischen Mönchtums, hat das geistliche Leben als Weg von der Furcht zur Liebe beschrieben. Nach der Überlieferung der Wüstenväter sagte er: „Ich fürchte Gott nicht mehr, sondern ich liebe ihn; denn die Liebe treibt die Furcht aus." Das ist kein Verzicht auf den Ernst des Gerichts – Antonius lebte in äußerster Wachsamkeit –, sondern dessen Erfüllung: Wer Gott liebt, fürchtet nicht mehr die Strafe, sondern nur noch, den Geliebten zu verlieren. Eine Kirche, die auf einen solchen Vater zurückgeht, kann die Hölle nicht als Angstmaschine verstehen.`,
    },
    {
      person: 'basilius',
      role: 'als Lehrer der drei Stufen des Gehorsams',
      text: `Basilius der Große unterscheidet in der Vorrede zu seinen Mönchsregeln drei Arten, Gott zu gehorchen: aus Furcht vor Strafe wie ein Sklave, um des Lohnes willen wie ein Tagelöhner, oder um des Guten selbst willen und aus Liebe wie ein Sohn. Nur die dritte ist vollkommen. Die Furcht ist für Basilius ein Anfang, kein Ziel. Damit hat er die Kritik an einem Glauben aus bloßer Angst schon im 4. Jahrhundert vorweggenommen – und ihr den Weg der Liebe gegenübergestellt.`,
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger der heilsamen Warnung',
      text: `Johannes Chrysostomus predigte mit großem Ernst vom Gericht, aber er erklärte auch, warum: Gott hat die Hölle angedroht, nicht damit wir hineingeraten, sondern damit wir sie fliehen. Die Drohung selbst ist ein Werk seiner Menschenliebe – wie die Warnung eines Vaters vor dem Abgrund. Chrysostomus wollte seine Zuhörer nicht in Angst gefangen halten, sondern zur Umkehr und zur Liebe führen; er selbst wurde für seine Predigten gegen die Mächtigen verbannt und starb im Exil.`,
    },
    {
      person: 'tim-keller',
      role: 'als Seelsorger für Skeptiker',
      text: `Timothy Keller bemerkt, dass gerade Menschen, die Gott ausschließlich als liebend ohne jedes Gericht verstehen, am Ende einen Gott haben, der weniger liebt: einen Gott, der zum Bösen schweigt. Jesus sprach mehr über die Hölle als jeder andere in der Bibel – nicht um Angst zu erzeugen, sondern weil er das Kreuz auf sich nehmen würde, um Menschen davor zu bewahren. Die Lehre vom Gericht macht die Gnade erst groß: Nur wer weiß, wovor er bewahrt wurde, kann ermessen, was ihm geschenkt ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 5', year: '2008', quote: `Ein Gott ohne Gericht ist nicht liebevoller, sondern gleichgültiger; Jesus sprach vom Gericht, weil er bereit war, es selbst zu tragen.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'angst-zur-kontrolle',
      objection: `Die Hölle ist das perfekte Kontrollinstrument: „Gehorche, oder du brennst ewig." Wer Menschen das glauben macht, kann ihnen alles befehlen. Genau dafür wurde sie erfunden.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Dass Menschen die Hölle missbraucht haben, um andere zu kontrollieren, bestreite ich nicht – das war falsch. Aber ob eine Warnung manipulativ ist, hängt davon ab, ob sie wahr ist. Ein Bergführer, der vor einer Lawine warnt, macht keine Angstmache. Jesus hat vor dem Gericht gewarnt – und dabei über Jerusalem geweint. Und das Ziel seiner Botschaft ist nicht Angst, sondern Liebe: „Die völlige Liebe treibt die Furcht aus."`,
      detail: `Das Argument „Die Hölle wurde zur Kontrolle benutzt, also ist sie erfunden" ist ein genetischer Fehlschluss: Der Missbrauch einer Idee sagt nichts über ihre Wahrheit. Zudem passt die These schlecht zur Geschichte: Jesus selbst, der vom Gericht sprach, hatte keine Macht und wurde von den Mächtigen hingerichtet; die ersten Christen, die das Gericht verkündeten, waren eine verfolgte Minderheit.`,
      questionsBack: [
        `Wenn ein Arzt dich vor einer tödlichen Krankheit warnt – ist das Angstmache oder Fürsorge?`,
        `Welche Macht hatte Jesus, als er vom Gericht sprach? Wen wollte er damit kontrollieren?`,
      ],
      followUps: [
        {
          id: 'ablasshandel',
          objection: `Die Kirche hat die Angst vor dem Jenseits sogar verkauft – mit Ablassbriefen. Deutlicher kann man nicht zeigen, dass es ums Geschäft ging.`,
          objectionBy: 'Historischer Kritiker',
          answer: `Der Ablasshandel im spätmittelalterlichen Westen war ein schwerer Missbrauch – berüchtigt ist der Prediger Tetzel um 1517. Die koptisch-orthodoxe Kirche hat nie Ablässe verkauft; sie kennt weder Ablässe noch ein Fegefeuer im römisch-katholischen Sinn. Das Heil ist nach der Schrift nicht käuflich: Petrus sagte zu Simon dem Zauberer, der die Gabe Gottes kaufen wollte: „Daß du verdammt werdest mit deinem Gelde" (Apg 8,20).`,
          detail: `Siehe den Claim „Es gibt ein Fegefeuer" (Themenblock Katholizismus). Wichtig: Nicht die römisch-katholische Kirche verurteilen, sondern einen Missbrauch benennen, den auch katholische Reformer kritisierten. Die orthodoxe Unterscheidung hilft im Gespräch: Die Kritik an Ablässen trifft die koptische Kirche nicht.`,
          sources: [
            { kind: 'bibel', work: 'Apostelgeschichte', ref: '8,20', quote: `Petrus aber sprach zu ihm: Daß du verdammt werdest mit deinem Gelde, darum daß du meinst, Gottes Gabe werde durch Geld erlangt!`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'anathema-als-drohung',
              objection: `Auch eure Kirche arbeitet mit Angst: Exkommunikation, Anathema, „wer das nicht glaubt, sei verflucht". Das ist dieselbe Drohkulisse in liturgischem Gewand.`,
              objectionBy: 'Kirchenkritiker',
              answer: `Ein Anathema ist keine Höllenandrohung an Einzelne, sondern eine Grenzziehung: Diese Lehre gehört nicht zum Glauben der Kirche. Es richtet sich gegen Lehren, die das Bild Christi verfälschen – etwa, dass er nur ein Mensch gewesen sei. Und die kirchliche Exkommunikation ist nach den Kanones eine heilende Maßnahme mit dem Ziel der Rückkehr, wie Paulus es beschreibt: „auf daß der Geist selig werde am Tage des Herrn" (1 Kor 5,5). Wo Kirchenleute das als Machtinstrument missbraucht haben, war das Sünde.`,
              detail: `Die orthodoxe Bußpraxis ist medizinisch gedacht: Der Ausschluss von der Kommunion ist eine Zeit der Heilung, die mit der Wiederaufnahme endet. Die Kirche verkündet niemals, dass ein bestimmter Mensch in der Hölle sei. Auch Kyrills Anathematismen (430) betreffen Lehrsätze über Christus – sie sind Schutzmauern um das Geheimnis der Menschwerdung, nicht Drohungen gegen Gewissen.`,
              sources: [
                { kind: 'bibel', work: '1. Korinther', ref: '5,5', quote: `… ihn zu übergeben dem Satan zum Verderben des Fleisches, auf daß der Geist selig werde am Tage des Herrn Jesu.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kinder-traumatisiert',
      objection: `Kindern die Hölle einzuschärfen, ist seelischer Missbrauch. Ich kenne Menschen, die noch als Erwachsene nachts aus Angst vor dem Höllenfeuer wach liegen.`,
      objectionBy: 'Richard Dawkins',
      answer: `Kinder mit Höllenbildern zu ängstigen, ist falsch – da hast du recht, und es tut mir leid für jeden, der das erlebt hat. Christliche Erziehung soll Kinder zuerst zur Liebe Gottes führen: dass sie geliebt, gewollt und vergeben sind. Die koptische Sonntagsschulbewegung wurde gegründet, um Kindern Christus und die Kirche lieb zu machen. Zugleich ist es keine Grausamkeit, Kindern ehrlich zu sagen, dass unser Tun Folgen hat und dass das Böse nicht gleichgültig ist.`,
      detail: `Die Unterscheidung zwischen ehrlicher Erziehung und Einschüchterung ist entscheidend. Jesus segnete die Kinder und sagte: „Lasset die Kindlein … zu mir kommen" (Mk 10,14). Wer Kinder mit Angst erzieht, verfehlt diesen Geist. Siehe auch den Claim „Kinder glauben nur, weil sie indoktriniert werden".`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '10,14', quote: `Lasset die Kindlein zu mir kommen und wehret ihnen nicht; denn solcher ist das Reich Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'religioeses-trauma',
          objection: `Es gibt inzwischen sogar einen Begriff dafür: religiöses Trauma. Viele Aussteiger leiden ihr Leben lang.`,
          objectionBy: 'Psychotherapeutin',
          answer: `Das nehme ich sehr ernst. Menschen, die in angstbesetzten religiösen Milieus aufgewachsen sind, brauchen Mitgefühl und oft therapeutische Hilfe. Aber dieses Leid ist ein Zeugnis gegen eine missbräuchliche Form von Religion – nicht gegen die Wahrheit des Evangeliums, das gerade Befreiung von Angst verspricht (Röm 8,15: „nicht einen knechtischen Geist … daß ihr euch abermals fürchten müßtet"). Viele finden auch Heilung, wenn sie Gott neu als liebenden Vater kennenlernen.`,
          detail: `Der Begriff „Religious Trauma Syndrome" wurde 2011 von der Psychologin Marlene Winell geprägt; er ist keine offizielle Diagnose, beschreibt aber reale Erfahrungen. Christen sollten hier zuerst zuhören, nicht verteidigen. Siehe auch den Claim „Religion erzeugt krankhafte Schuldgefühle".`,
          followUps: [
            {
              id: 'dawkins-schlimmer-als-missbrauch',
              objection: `Ich gehe weiter: Einem Kind die Hölle einzureden, kann auf Dauer schlimmer sein als mancher körperliche Missbrauch. Eine Frau hat mir geschrieben, dass sie die Angst vor der Hölle mehr gequält hat als die Übergriffe, die sie erlebt hat.`,
              objectionBy: 'Richard Dawkins (The God Delusion, Kap. 9)',
              answer: `Ich will das Leid dieser Frau nicht kleinreden – sie verdient Mitgefühl, keine Debatte. Aber eine allgemeine Rangfolge, die religiöse Erziehung über sexuellen Missbrauch stellt, verletzt die Opfer von Missbrauch und ist empirisch nicht gedeckt. Die große Gesundheitsforschung zeigt im Durchschnitt das Gegenteil: Wer in einer lebendigen Glaubensgemeinschaft aufwächst, hat seltener Depressionen und Suizidgedanken. Das Problem ist nicht die Rede vom Gericht, sondern eine Erziehung ohne Liebe.`,
              detail: `Dawkins berichtet in *The God Delusion* (2006, Kap. 9), er habe einmal gesagt, der langfristige Schaden einer katholischen Erziehung könne größer sein als der eines Übergriffs, und zitiert den Brief einer Frau, die beides erlebt hatte. Das Einzelschicksal ist ernst zu nehmen. Als allgemeine These widerspricht es aber großen Längsschnittstudien: Tyler VanderWeele und Kollegen (Harvard, *American Journal of Epidemiology* 2018) fanden bei Jugendlichen, die regelmäßig an Gottesdiensten teilnahmen, später u. a. weniger depressive Symptome und weniger riskantes Verhalten.

Seelsorglich gilt: Wer ein solches Trauma erlebt hat, braucht Schutz, Zeit und oft Therapie – und keine Apologetik. Die beste Antwort ist eine Gemeinde, in der er Gott als den Vater des verlorenen Sohnes kennenlernt.`,
              sources: [
                { kind: 'gegner', author: 'Richard Dawkins', work: 'The God Delusion', ref: 'Kap. 9', year: '2006', quote: `Dawkins vertritt, die Angst vor der Hölle, die Kindern eingeprägt wird, könne langfristig schwerer wiegen als mancher körperliche Missbrauch.`, status: 'paraphrase' },
                { kind: 'wissenschaft', author: 'Ying Chen, Tyler J. VanderWeele', work: 'Associations of Religious Upbringing With Subsequent Health and Well-Being From Adolescence to Young Adulthood', ref: 'American Journal of Epidemiology 187 (11)', year: '2018', quote: `Regelmäßige Teilnahme an Gottesdiensten in der Jugend war mit besserer späterer psychischer Gesundheit verbunden, u. a. mit weniger depressiven Symptomen.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Würdest du das einem Opfer sexuellen Missbrauchs so ins Gesicht sagen?`,
                `Wenn religiöse Erziehung im Allgemeinen so schädlich ist – warum zeigen die großen Studien im Durchschnitt das Gegenteil?`,
              ],
              followUps: [
                {
                  id: 'studie-hoellenglaube',
                  objection: `Es gibt aber Studien speziell zum Höllenglauben: Länder und Menschen, die stärker an die Hölle glauben, berichten weniger Lebenszufriedenheit. Der Himmel macht glücklich, die Hölle macht unglücklich.`,
                  objectionBy: 'Azim Shariff (Sozialpsychologe)',
                  answer: `Das stimmt – Shariff und Aknin haben 2014 einen solchen Zusammenhang berichtet, und ich gebe das ehrlich zu. Aber was folgt daraus? Ob eine Warnung angenehm ist, sagt nichts über ihre Wahrheit; auch eine Krebsdiagnose senkt die Lebenszufriedenheit. Die Frage ist, ob es ein Gericht gibt – und wenn ja, ob man davon so sprechen kann, dass Menschen zur Liebe statt in die Angst geführt werden. Genau das will die orthodoxe Verkündigung.`,
                  detail: `Shariff und Aknin (*PLoS ONE* 2014) fanden länderübergreifend, dass Himmelsglaube mit höherem, Höllenglaube mit niedrigerem Wohlbefinden einhergeht; in Experimenten senkte das Nachdenken über die Hölle kurzfristig die Stimmung. Dieselben Forscher haben an anderer Stelle gezeigt, dass Höllenglaube auf Länderebene mit niedrigeren Kriminalitätsraten verbunden ist – ein Hinweis, dass die Sache komplex ist.

Das Argument „Wohlbefinden entscheidet über Wahrheit" hilft dem Kritiker übrigens nicht: Dann würde der Himmelsglaube, der glücklicher macht, wahr. Beides ist ein Fehlschluss. Bleiben wir bei den Gründen.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Azim F. Shariff, Lara B. Aknin', work: 'The Emotional Toll of Hell: Cross-National and Experimental Evidence for the Negative Well-Being Effects of Hell Beliefs', ref: 'PLoS ONE 9 (1): e85251', year: '2014', quote: `Höllenglaube ging länderübergreifend mit geringerem, Himmelsglaube mit höherem subjektivem Wohlbefinden einher.`, status: 'paraphrase' },
                    { kind: 'wissenschaft', author: 'Azim F. Shariff, Mijke Rhemtulla', work: 'Divergent Effects of Beliefs in Heaven and Hell on National Crime Rates', ref: 'PLoS ONE 7 (6): e39048', year: '2012', quote: `Auf Länderebene war Höllenglaube mit niedrigeren, Himmelsglaube mit höheren Kriminalitätsraten verbunden.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'bekehrung-aus-angst',
      objection: `Eine Bekehrung aus Angst vor der Hölle ist wertlos. Das ist keine Überzeugung, sondern Erpressung – und ein Gott, der so etwas akzeptiert, ist ein Erpresser.`,
      objectionBy: 'Bertrand Russell (Rezeption)',
      answer: `Angst kann ein Anfang sein, aber sie ist nicht das Ziel. Der verlorene Sohn kehrte zuerst aus Hunger um – „ich verderbe im Hunger" (Lk 15,17) –, nicht aus reiner Liebe. Aber der Vater lief ihm entgegen und verwandelte seine Rückkehr in ein Fest. So ist es mit Gott: Er nimmt Menschen mit gemischten Motiven an und führt sie zur Liebe. Die Väter beschreiben genau diesen Weg vom Sklaven über den Lohnarbeiter zum Sohn.`,
      detail: `„Der Weisheit Anfang ist des HERRN Furcht" (Spr 9,10) – Anfang, nicht Ende. Ein Glaube, der bei der Angst stehen bleibt, ist unvollständig; ein Glaube, der mit ihr beginnt, kann zur Liebe reifen. Gott ist kein Erpresser, weil er nicht für sich etwas erpresst, sondern Menschen vor dem Verlust des höchsten Gutes bewahren will.`,
      sources: [
        { kind: 'bibel', work: 'Lukas', ref: '15,17.20', quote: `Da schlug er in sich und sprach: Wie viel Tagelöhner hat mein Vater, die Brot die Fülle haben, und ich verderbe im Hunger! … Da er aber noch ferne von dannen war, sah ihn sein Vater, und es jammerte ihn, lief und fiel ihm um seinen Hals und küßte ihn.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'gott-der-droht',
          objection: `Ein Gott, der mit ewiger Strafe droht, ist ein Tyrann – egal wie freundlich ihr es verpackt.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Es gibt einen Unterschied zwischen einer Drohung und einer Warnung. Ein Tyrann droht, um zu herrschen. Ein Vater warnt, um sein Kind zu bewahren. Jesus warnte nicht von einem Thron herab, sondern auf dem Weg ans Kreuz, wo er selbst das Gericht trug. Wer warnt und dann sein Leben gibt, damit der Gewarnte nicht verloren geht, ist das Gegenteil eines Tyrannen.`,
          detail: `Chrysostomus sagt, Gott habe die Hölle angedroht, damit wir sie fliehen – die Warnung ist selbst ein Werk seiner Menschenliebe. Das Kreuz ist der entscheidende Beweis, dass Gott nicht will, dass jemand verloren geht.`,
          followUps: [
            {
              id: 'nietzsche-rachephantasie',
              objection: `Die Hölle ist die Rachephantasie der Schwachen. Lies Tertullian: Er freut sich darauf, die Könige und Philosophen im Feuer brüllen zu sehen. Und Thomas von Aquin sagt, die Seligen sehen die Qualen der Verdammten, damit ihnen ihre Seligkeit umso besser gefalle. Das ist das Ressentiment, das unter eurer Liebesrede brodelt.`,
              objectionBy: 'Friedrich Nietzsche (Zur Genealogie der Moral I,15)',
              answer: `Nietzsche zitiert echte Texte, und die Tertullian-Stelle ist abstoßend – das gebe ich zu. Aber Tertullian ist für die koptische Kirche keine Lehrautorität, und Thomas auch nicht. Die Tradition, aus der ich spreche, geht in die entgegengesetzte Richtung: Mose bat, lieber selbst aus Gottes Buch getilgt zu werden, als das Volk verloren zu sehen (Ex 32,32); Paulus wünschte sich, für seine Brüder verflucht zu sein (Röm 9,3); Isaak der Syrer beschreibt das Herz des Heiligen als eines, das selbst für die Dämonen betet. Das ist das Gegenteil von Schadenfreude.`,
              detail: `In *Zur Genealogie der Moral* (1887, Erste Abhandlung, Abschnitt 15) zitiert Nietzsche ausführlich Tertullian, *De spectaculis* 30, und Thomas von Aquin (*Summa theologiae*, Suppl. q. 94 a. 1). Man sollte das nicht wegreden. Bei Thomas ist der Gedanke die Freude an Gottes Gerechtigkeit, nicht an fremdem Leid als solchem – aber auch so ist der Ton der östlichen Tradition fremd.

Für die koptische Kirche ist entscheidend: Sie betet in jeder Liturgie für die ganze Welt und für die Entschlafenen und erklärt niemanden für verdammt. Wer die Hölle mit Genugtuung verkündet, hat das Evangelium nicht verstanden.`,
              voices: [
                {
                  person: 'isaak-syrer',
                  role: 'als Lehrer des barmherzigen Herzens (mit Vorbehalt)',
                  text: `Isaak beschreibt das barmherzige Herz als eines, das für die ganze Schöpfung brennt – für Menschen, Tiere, sogar für die Dämonen und die Feinde der Wahrheit – und unablässig unter Tränen für sie betet. Ein solcher Mensch kann sich über keine Qual freuen. Hinweis: Isaak gehörte zur Kirche des Ostens; seine Hoffnung auf ein Ende der Gehenna ist nicht koptische Lehre, sein Bild vom barmherzigen Herzen aber ist in den koptischen Klöstern hoch geschätzt.`,
                },
              ],
              sources: [
                { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Zur Genealogie der Moral', ref: 'Erste Abhandlung, Abschnitt 15', year: '1887', quote: `Nietzsche deutet die christliche Seligkeit als Rache der Schwachen und belegt das mit Tertullian (De spectaculis 30) und Thomas von Aquin.`, status: 'paraphrase' },
                { kind: 'bibel', work: '2. Mose', ref: '32,32', quote: `Nun vergib ihnen ihre Sünde; wo nicht, so tilge mich auch aus deinem Buch, das du geschrieben hast.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'bibel', work: 'Römer', ref: '9,3', quote: `Ich habe gewünscht, verbannt zu sein von Christo für meine Brüder, die meine Gefreunde sind nach dem Fleisch …`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'feuerbach-projektion-rache',
                  objection: `Ob mit oder ohne Schadenfreude – die Hölle ist die Projektion des menschlichen Strafbedürfnisses an den Himmel. Der Mensch macht sich einen Gott nach seinem eigenen Rachedurst.`,
                  objectionBy: 'Ludwig Feuerbach',
                  answer: `Wenn die Hölle unsere Projektion wäre, müsste der Richter so aussehen wie wir: wütend, verletzt, auf Vergeltung aus. Aber im Evangelium ist der Richter das Opfer, das für seine Henker betet: „Vater, vergib ihnen" (Lk 23,34). Das hat sich niemand nach seinem Rachedurst ausgedacht. Im Gegenteil: Miroslav Volf zeigt, dass gerade der Glaube an Gottes Gericht Menschen frei macht, auf eigene Rache zu verzichten (Röm 12,19).`,
                  detail: `Feuerbachs Projektionsthese wird ausführlich im Claim „Gott ist nur eine Projektion menschlicher Wünsche" behandelt. Hier genügt der Hinweis: Projektion erklärt nichts, weil sie in beide Richtungen funktioniert – auch der Wunsch, dass es kein Gericht gebe, ist ein starker Wunsch. Entscheidend ist, ob das Gericht wahr ist.`,
                  sources: [
                    { kind: 'bibel', work: 'Lukas', ref: '23,34', quote: `Jesus aber sprach: Vater, vergib ihnen; denn sie wissen nicht, was sie tun!`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'bibel', work: 'Römer', ref: '12,19', quote: `Rächet euch selber nicht, meine Liebsten, sondern gebet Raum dem Zorn Gottes; denn es steht geschrieben: „Die Rache ist mein; ich will vergelten, spricht der Herr."`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                  questionsBack: [
                    `Wenn der Mensch sich einen Richter nach seinem Rachedurst erfindet – warum betet dieser Richter dann für seine Mörder?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hoelle-mittelalterlich',
      objection: `Die Hölle, wie ihr sie predigt, ist eine Erfindung des Mittelalters – Dante, Höllengemälde, Feuerpredigten. Jesus war ein Lehrer der Liebe; die frühen Christen kannten so etwas nicht.`,
      objectionBy: 'Populärer Einwand',
      answer: `Historisch stimmt das nicht. Jesus selbst spricht mehrfach vom Gericht und von der Gehenna (Mt 10,28; 25,46; Mk 9,43–48). Schon um 110 schreibt Ignatius von Antiochien vom „unauslöschlichen Feuer", um 155 Justin der Märtyrer von „ewiger Strafe", und der greise Bischof Polykarp sagt vor seinem Martyrium (um 156) zum Prokonsul, er kenne das ewige Feuer des Gerichts nicht. Dante hat die Bilder ausgemalt – erfunden hat er die Lehre nicht. Und die Bilder Dantes sind Dichtung, nicht Lehre der Kirche.`,
      detail: `Wer sagt, die Höllenlehre sei mittelalterlich, muss erklären, warum sie in den ältesten christlichen Texten steht. Ehrlich bleibt: Die konkreten Vorstellungen über die Hölle haben sich in der Geschichte entwickelt, und die mittelalterlichen Höllenbilder des Westens sind nicht die Sprache der koptischen Kirche.`,
      followUps: [
        {
          id: 'gehenna-muellkippe',
          objection: `„Gehenna" war doch nur die brennende Müllkippe vor Jerusalem. Jesus meinte das bildlich für ein verpfuschtes Leben, nicht für ein Jenseits.`,
          objectionBy: 'Populärer Einwand (auch in christlichen Büchern verbreitet)',
          answer: `Die Erklärung mit der brennenden Müllkippe ist erst bei dem Rabbiner David Kimchi um 1200 bezeugt – für die Zeit Jesu gibt es dafür keinen archäologischen oder literarischen Beleg. Das Tal Hinnom war durch die Kinderopfer früherer Zeiten berüchtigt (Jer 7,31), und in jüdischen Schriften vor und zur Zeit Jesu wurde „Gehenna" zum Bild des endzeitlichen Gerichts. Jesus gebraucht das Wort in diesem Sinn: „der Leib und Seele verderben mag in der Hölle" (Mt 10,28).`,
          detail: `Ein gutes Beispiel dafür, dass man auch beliebte Erklärungen prüfen sollte – auf beiden Seiten. Wer die Müllkippe als Beleg für eine harmlose Hölle anführt, stützt sich auf eine mittelalterliche Spekulation.`,
          followUps: [
            {
              id: 'judentum-keine-hoelle',
              objection: `Das Judentum kennt keine ewige Hölle. Die Rabbinen sagen, die Strafe in der Gehenna dauere höchstens zwölf Monate. Jesus war Jude – also meinte er auch nichts Ewiges.`,
              objectionBy: 'Jüdischer oder religionsgeschichtlicher Einwand',
              answer: `Das antike Judentum war in dieser Frage vielfältig: Die Mischna kennt die Vorstellung einer zwölfmonatigen Läuterung in der Gehenna, andere jüdische Texte sprechen von Vernichtung, und schon Daniel 12,2 spricht von denen, die „zu ewiger Schmach und Schande" auferstehen. Jesus hat diese Vielfalt nicht einfach übernommen, sondern mit eigener Autorität gelehrt – und er spricht in Mt 25,46 von einer Strafe, die so lange währt wie das Leben der Gerechten. Für Christen ist sein Wort maßgeblich.`,
              detail: `Mischna, Edujot 2,10: Das Gericht der Gottlosen in der Gehenna dauert zwölf Monate. Diese spätere rabbinische Auffassung ist zu respektieren; sie ist aber nicht die einzige jüdische Stimme der Zeit Jesu, und sie entscheidet nicht über die Auslegung seiner Worte.`,
              sources: [
                { kind: 'juedisch', work: 'Mischna, Edujot', ref: '2,10', quote: `Das Gericht der Gottlosen in der Gehenna dauert zwölf Monate.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Daniel', ref: '12,2', quote: `Und viele, so unter der Erde schlafen liegen, werden aufwachen, etliche zum ewigen Leben, etliche zu ewiger Schmach und Schande.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              followUps: [
                {
                  id: 'apokalyptiker-irrte',
                  objection: `Jesus war ein apokalyptischer Prophet, der das Ende noch zu Lebzeiten seiner Jünger erwartete – „dieses Geschlecht wird nicht vergehen". Darin hat er sich geirrt. Warum sollte ich ihm dann ausgerechnet beim Gericht glauben?`,
                  objectionBy: 'Bart D. Ehrman',
                  answer: `Derselbe Jesus sagt im selben Kapitel: „Von dem Tage aber und der Stunde weiß niemand" (Mk 13,32) – er hat kein Datum genannt. „Dieses Geschlecht" bezieht sich nach vielen Auslegern auf die vorher angekündigten Ereignisse, besonders die Zerstörung des Tempels, die im Jahr 70 tatsächlich eintraf. Und vor allem: Warum ich Jesus beim Gericht glaube, hängt nicht an einem Kalender, sondern daran, dass Gott ihn von den Toten auferweckt hat (Apg 17,31).`,
                  detail: `Ausführlich in den Claims zur Glaubwürdigkeit Jesu und zur Auferstehung. Paulus verbindet genau diese beiden Punkte: Gott „hat einen Tag gesetzt, auf welchen er richten will den Kreis des Erdbodens mit Gerechtigkeit durch einen Mann, in welchem er's beschlossen hat, und jedermann vorhält den Glauben, nachdem er ihn hat von den Toten auferweckt" (Apg 17,31). Die Frage nach dem Gericht führt also zur historischen Frage nach dem leeren Grab.`,
                  sources: [
                    { kind: 'bibel', work: 'Markus', ref: '13,32', quote: `Von dem Tage aber und der Stunde weiß niemand, auch die Engel nicht im Himmel, auch der Sohn nicht, sondern allein der Vater.`, translation: 'Luther 1912', status: 'verbatim' },
                    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'Jesus: Apocalyptic Prophet of the New Millennium', year: '1999', quote: `Ehrman deutet Jesus als jüdischen Apokalyptiker, der das baldige Kommen des Reiches Gottes erwartete.`, status: 'paraphrase' },
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
    `Ist eine Warnung Angstmache, wenn die Gefahr real ist?`,
    `Welche Macht hatte Jesus, als er vom Gericht sprach – wen wollte er kontrollieren?`,
    `Wie erklärst du, dass die frühesten christlichen Texte nach dem Neuen Testament schon vom ewigen Feuer sprechen?`,
    `Kennst du christliche Heilige, deren Glaube nicht aus Angst, sondern aus Liebe kam?`,
  ],
  avoid: [
    `Mit der Hölle drohen, um jemanden zu überzeugen – das bestätigt genau den Vorwurf.`,
    `Den Missbrauch von Höllenpredigten leugnen oder kleinreden.`,
    `Die „Müllkippen-Erklärung" der Gehenna verbreiten – sie ist erst um 1200 bezeugt.`,
    `Menschen mit religiösem Trauma ihre Erfahrung absprechen.`,
  ],
  concessions: [
    `Die Höllenlehre wurde in der Geschichte immer wieder zur Einschüchterung und Kontrolle missbraucht.`,
    `Es gibt Menschen, die durch angstbesetzte religiöse Erziehung tief verletzt wurden.`,
    `Die mittelalterlichen Höllenbilder des Westens sind Ausmalungen, die über die Schrift hinausgehen.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Apophthegmata Patrum', work: 'Die Sprüche der Wüstenväter (Abschnitt Antonius)', year: '4.–5. Jh.', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Längere Regeln, Vorrede', year: 'um 370', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God, Kap. 5', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Christopher Hitchens', work: 'God Is Not Great', year: '2007', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Hölle', 'Angst', 'Kontrolle', 'Ablass', 'Religiöses Trauma', 'Gehenna', 'Antonius', 'Liebe'],
  related: [
    'hoelle/ewige-strafe-ungerecht',
    'hoelle/liebender-gott-keine-hoelle',
    'religionskritik/religion-herrschaftsinstrument',
    'psychologie/schuldgefuehle-schaedlich',
    'kognitive-religionswissenschaft/kinder-indoktrination',
    'katholizismus/fegefeuer',
  ],
};

export default claim;
