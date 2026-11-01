import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'kirche-heuchlerisch',
  title: `„Die Kirche ist reich und heuchlerisch."`,
  proponents: [
    { name: 'Christopher Hitchens', role: 'Publizist und Religionskritiker', work: 'God Is Not Great (2007)' },
    { name: 'Karlheinz Deschner', role: 'Schriftsteller und Kirchenkritiker', work: 'Kriminalgeschichte des Christentums (1986–2013)' },
    { name: 'Carsten Frerk', role: 'Politikwissenschaftler, Kirchenfinanz-Kritiker', work: 'Violettbuch Kirchenfinanzen (2010)' },
  ],
  steelman: `Jesus war arm, hatte keinen Ort, wo er sein Haupt hinlegen konnte, und sagte, eher gehe ein Kamel durch ein Nadelöhr, als dass ein Reicher in das Reich Gottes komme. Seine Kirche dagegen besitzt Paläste, Immobilien, Kunstschätze und Banken. Bischöfe residieren in Luxus – man denke an die Limburger Bischofsresidenz mit Kosten von über 30 Millionen Euro –, Fernsehprediger fliegen im Privatjet, und in Deutschland erhalten die Kirchen neben der Kirchensteuer jährlich Staatsleistungen aus dem 19. Jahrhundert. Dieselbe Kirche, die anderen Sexualmoral predigt, hat jahrzehntelang sexuellen Missbrauch an Kindern vertuscht, um ihren Ruf zu schützen. Christen urteilen über andere und leben selbst nicht, was sie predigen. Eine Institution, die so offensichtlich das Gegenteil dessen tut, was ihr Gründer lehrte, hat jede moralische Autorität verloren.`,
  biblical: {
    summary: `Niemand hat religiöse Heuchelei so scharf verurteilt wie Jesus selbst: „Weh euch, Schriftgelehrte und Pharisäer, ihr Heuchler!" (Mt 23,13–36). Er warnte davor, Gutes zu tun, um gesehen zu werden (Mt 6,1–4), den Splitter im Auge des Bruders zu sehen und den Balken im eigenen nicht (Mt 7,3–5), und stellte den demütigen Zöllner über den selbstgerechten Pharisäer (Lk 18,9–14). Jakobus klagt Gemeinden an, die Reiche bevorzugen und Arme demütigen (Jak 2,1–7), und Paulus warnt: „Geiz ist eine Wurzel alles Übels" (1 Tim 6,10). Zugleich sagt Jesus: „Die Starken bedürfen des Arztes nicht, sondern die Kranken" (Mk 2,17) – die Kirche ist keine Gemeinschaft der Vollkommenen, sondern der Sünder, die Heilung suchen. Und: „Es ist Zeit, dass anfange das Gericht an dem Hause Gottes" (1 Petr 4,17).`,
    detail: `**Mt 23** ist ein Kapitel, das jeder Christ, besonders jeder Kirchenführer, auswendig kennen sollte: „Sie binden schwere und unerträgliche Bürden und legen sie den Menschen auf den Hals; aber sie selbst wollen dieselben nicht mit einem Finger regen" (23,4). Der Vorwurf der Heuchelei ist also kein Argument *gegen* Jesus, sondern ein Argument *mit* ihm gegen die, die ihn verraten.

**Die Urgemeinde** teilte ihren Besitz, sodass „keiner unter ihnen Mangel hatte" (Apg 4,32–35). Die Kollekte für die Armen in Jerusalem war Paulus ein Herzensanliegen (2 Kor 8–9). Der Maßstab für den Umgang der Kirche mit Geld ist damit klar: Besitz dient der Liebe, nicht der Selbstdarstellung.`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '23,27', quote: `Weh euch, Schriftgelehrte und Pharisäer, ihr Heuchler, die ihr gleich seid wie die übertünchten Gräber, welche auswendig hübsch scheinen, aber inwendig sind sie voller Totengebeine und alles Unflats!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '2,17', quote: `Die Starken bedürfen keines Arztes, sondern die Kranken. Ich bin gekommen, zu rufen die Sünder zur Buße, und nicht die Gerechten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '2,1–6', quote: `Haltet nicht dafür, daß der Glaube an Jesum Christum … Ansehen der Person leide … ihr aber habt dem Armen Unehre getan.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Timotheus', ref: '6,10', quote: `Denn Geiz ist eine Wurzel alles Übels.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Petrus', ref: '4,17', quote: `Denn es ist Zeit, daß anfange das Gericht an dem Hause Gottes.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die schärfste Kritik am Reichtum der Kirche kommt aus der Kirche selbst. Johannes Chrysostomus fragte: Was nützt es, den Tisch Christi mit goldenen Kelchen zu beladen, wenn er selbst vor Hunger stirbt? Basilius der Große predigte, das Brot, das man zurückhält, gehöre dem Hungrigen. Die koptische Tradition hat mit dem hl. **Antonius**, der nach dem Hören von Mt 19,21 seinen Besitz verkaufte und in die Wüste ging, das Mönchtum hervorgebracht – eine Protestbewegung gegen die Verweltlichung der Kirche. Die koptische Kirche erhebt keine Kirchensteuer; sie lebt von freiwilligen Gaben und betreibt mit ihnen Schulen, Kliniken, Waisenhäuser und Hilfe für die Armen, etwa unter den Müllsammlern Kairos. Ehrlich ist zu sagen: Auch die koptische Kirche kennt Sünde, Machtmissbrauch und Skandale – sie bedarf wie jede Kirche der ständigen Umkehr.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Hom. 50,3–4', quote: `Willst du den Leib Christi ehren? Übersieh ihn nicht, wenn er nackt ist … Was nützt es, wenn sein Tisch voll goldener Kelche ist, er selbst aber vor Hunger umkommt? Sättige zuerst den Hungrigen, dann schmücke auch seinen Tisch.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie „Ich will meine Scheunen abbrechen" (zu Lk 12,18)', year: 'um 368', quote: `Das Brot, das du zurückhältst, gehört dem Hungrigen; der Mantel in deiner Truhe dem Nackten; die Schuhe, die bei dir verrotten, dem Barfüßigen.`, status: 'paraphrase', note: 'Vielzitiert; genaue Abschnittszählung vor Verwendung prüfen.' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: '2', year: 'um 357', quote: `Antonius hörte im Gottesdienst das Wort „Willst du vollkommen sein, so geh hin, verkaufe, was du hast, und gib's den Armen" und tat es sogleich.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Der „Reichtum der Kirche" besteht zu einem großen Teil aus Kirchengebäuden, Kulturdenkmälern, Schulen, Krankenhäusern und Sozialeinrichtungen, die eher Kosten verursachen als Gewinn bringen. In Deutschland gehören die kirchlichen Wohlfahrtsverbände Caritas und Diakonie zu den größten Arbeitgebern im Sozialbereich. Sozialwissenschaftliche Studien in den USA (z. B. Arthur Brooks, *Who Really Cares*, 2006; Robert Putnam und David Campbell, *American Grace*, 2010) finden, dass regelmäßig praktizierende Gläubige im Durchschnitt mehr spenden und sich häufiger ehrenamtlich engagieren – auch für nichtkirchliche Zwecke. Zugleich sind die Missbrauchsskandale umfassend dokumentiert: Die MHG-Studie (2018) ermittelte für die katholische Kirche in Deutschland 1946–2014 mindestens 3.677 Betroffene und 1.670 beschuldigte Kleriker, die ForuM-Studie (2024) für die evangelische Kirche und Diakonie mindestens 2.225 Betroffene; beide Studien gehen von einem erheblichen Dunkelfeld aus.`,
    sources: [
      { kind: 'wissenschaft', work: 'MHG-Studie: Sexueller Missbrauch an Minderjährigen durch katholische Priester, Diakone und männliche Ordensangehörige im Bereich der Deutschen Bischofskonferenz', year: '2018', quote: `Mindestens 3.677 Betroffene und 1.670 Beschuldigte im Zeitraum 1946–2014; erhebliches Dunkelfeld.`, status: 'paraphrase' },
      { kind: 'wissenschaft', work: 'ForuM-Studie zu sexualisierter Gewalt in der Evangelischen Kirche in Deutschland und der Diakonie', year: '2024', quote: `Mindestens 2.225 Betroffene und 1.259 Beschuldigte; die tatsächlichen Zahlen dürften deutlich höher liegen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Arthur C. Brooks', work: 'Who Really Cares: The Surprising Truth About Compassionate Conservatism', year: '2006', quote: `Religiös praktizierende Amerikaner spenden im Durchschnitt deutlich mehr Geld und Zeit – auch für säkulare Zwecke – als nicht praktizierende.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Robert D. Putnam; David E. Campbell', work: 'American Grace: How Religion Divides and Unites Us', year: '2010', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wo die Kirche in Luxus lebt oder Missbrauch vertuscht, hast du völlig recht – und Jesus auch: Niemand hat religiöse Heuchelei schärfer verurteilt als er (Mt 23). Aber merk: Deine Kritik misst die Kirche an Jesus, und das ist genau der richtige Maßstab. Die Kirche ist kein Museum für Heilige, sondern ein Krankenhaus für Sünder. Und zur ganzen Wahrheit gehört auch: Kirchen und praktizierende Christen tragen einen riesigen Teil der Sozialarbeit, Pflege und Armenfürsorge – die koptische Kirche ohne jede Kirchensteuer, allein aus freiwilligen Gaben.`,
  keyPoints: [
    `**Jesus ist auf deiner Seite:** Mt 23, Mt 6,1–4, Lk 18,9–14 – die schärfste Kritik religiöser Heuchelei steht im Evangelium.`,
    `**Heuchelei setzt einen Maßstab voraus:** Wer der Kirche Heuchelei vorwirft, misst sie an Christus – und bestätigt damit seinen Maßstab.`,
    `**Krankenhaus, nicht Museum:** Die Kirche ist eine Gemeinschaft von Sündern, die Heilung suchen (Mk 2,17).`,
    `**Kritik von innen:** Chrysostomus („goldene Kelche, hungernder Christus"), Basilius, das Mönchtum des Antonius.`,
    `**Die ganze Bilanz:** Kirchliche Sozialarbeit, Krankenhäuser, Schulen; praktizierende Gläubige spenden und engagieren sich überdurchschnittlich.`,
    `**Missbrauch ohne Ausflüchte verurteilen:** Täter- und Vertuschungsschutz verraten Christus (Mt 18,6); Transparenz und Gerechtigkeit für Betroffene sind Pflicht.`,
  ],
  voices: [
    {
      person: 'chrysostomus',
      role: 'als Prediger gegen den Reichtum',
      text: `Johannes Chrysostomus, Erzbischof der reichen Hauptstadt Konstantinopel, legte sich mit dem Hof, den Reichen und dem eigenen Klerus an. In seiner 50. Homilie zum Matthäusevangelium fragt er: Willst du den Leib Christi ehren? Dann übersieh ihn nicht, wenn er nackt vor der Kirchentür liegt. Was nützt es, seinen Tisch mit goldenen Kelchen zu beladen, wenn er selbst vor Hunger stirbt? In seinen Predigten über Lazarus sagt er, den Armen nichts von seinem Besitz zu geben, sei Diebstahl an den Armen. Chrysostomus bezahlte seine Kritik mit Verbannung und Tod – er ist der Beweis, dass die Kirche ihre eigenen schärfsten Kritiker hervorbringt.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Hom. 50', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Predigten über Lazarus (De Lazaro)', ref: 'Predigt 2', status: 'paraphrase' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Bischof der Armen',
      text: `Basilius von Caesarea gründete vor den Toren seiner Stadt die „Basilias" – eine ganze Anlage aus Herberge, Krankenhaus, Armenküche und Werkstätten, die Gregor von Nazianz eine „neue Stadt" nannte. Während einer Hungersnot verkaufte er sein Erbe und speiste die Hungernden. In seiner Predigt über den reichen Kornbauern (Lk 12) klagt er die an, die ihre Scheunen füllen, während andere hungern: Das zurückgehaltene Brot gehöre dem Hungrigen. Für Basilius ist Reichtum nicht Besitz, sondern anvertrautes Gut, über das man Gott Rechenschaft schuldet.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Homilie „Ich will meine Scheunen abbrechen"', status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Rede 43 (Grabrede auf Basilius)', ref: '63', year: '381', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Vater der Mönche',
      text: `Antonius war ein wohlhabender junger Kopte, als er um 270 im Gottesdienst das Wort Jesu hörte: „Willst du vollkommen sein, so geh hin, verkaufe, was du hast, und gib's den Armen" (Mt 19,21). Er verkaufte seine Felder, gab den Erlös den Armen und zog in die Wüste. Aus seinem Beispiel entstand das christliche Mönchtum – in einer Zeit, in der die Kirche nach Konstantin reich und mächtig zu werden begann. Das Mönchtum war eine lebendige Kritik an der Verweltlichung der Kirche, und es kam aus Ägypten.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '2–3', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet',
      text: `Lewis beantwortet in *Mere Christianity* den Einwand, Christen seien oft nicht netter als Nichtchristen. Sein Gedankenexperiment: Man darf nicht eine liebenswürdige Nichtchristin, die von Natur aus ein freundliches Temperament hat, mit einem jähzornigen Christen vergleichen. Die richtige Frage ist, wie dieser Christ ohne seinen Glauben wäre – und wie sie mit ihm wäre. Christus verspricht nicht, aus netten Menschen noch nettere zu machen, sondern aus allen Menschen „neue Menschen" – und dieser Prozess beginnt bei manchen sehr weit unten.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch IV, Kap. 10 („Nice People or New Men")', year: '1952', status: 'paraphrase' }],
    },
    {
      person: 'schenute',
      role: 'als Abt und Anwalt der Bauern',
      text: `Schenute, der große Abt des Weißen Klosters in Oberägypten, verband strenge Askese mit tatkräftiger Fürsorge. Er klagte reiche Grundbesitzer an, die die koptischen Bauern ausbeuteten, und stellte sich auf die Seite der Armen. Als nubische und blemmyische Räuber das Niltal überfielen, nahm sein Kloster nach der Überlieferung Tausende Flüchtlinge auf und versorgte sie monatelang. Schenute zeigt, wie die koptische Kirche schon im 5. Jahrhundert verstand, dass der Glaube sich an den Armen und Schutzlosen bewährt.`,
      sources: [{ kind: 'koptisch', author: 'Besa (Schüler Schenutes)', work: 'Leben des Schenute (Vita Sinuthii)', year: '5. Jh.', status: 'paraphrase', note: 'Hagiographische Überlieferung; Zahlenangaben nicht wörtlich nehmen.' }],
    },
  ],
  dialog: [
    {
      id: 'kirche-reich',
      objection: `Die Kirche predigt Armut und sitzt auf Milliarden: Vatikan, Immobilien, Bischofspaläste wie in Limburg. Jesus hatte nicht einmal ein Bett.`,
      objectionBy: 'Carsten Frerk',
      answer: `Wo Bischöfe in Luxus leben, ist das ein Skandal – und Jesus hätte es genauso gesagt. Schon Chrysostomus fragte: Was nützt ein Tisch voller goldener Kelche, wenn Christus selbst vor Hunger stirbt? Aber zur Bilanz gehört auch: Ein großer Teil des „Reichtums" sind Kirchen, Denkmäler, Schulen und Krankenhäuser, die Geld kosten statt einbringen, und kirchliche Wohlfahrtsverbände gehören zu den größten Trägern sozialer Arbeit. Die koptische Kirche kennt übrigens keine Kirchensteuer; sie lebt von freiwilligen Gaben und gibt sie an Arme weiter.`,
      questionsBack: [
        `Wäre den Armen langfristig mehr geholfen, wenn Kirchen ihre Krankenhäuser, Schulen und Sozialstationen verkaufen würden?`,
      ],
      followUps: [
        {
          id: 'alles-verkaufen',
          objection: `Dann sollen sie eben alles verkaufen und den Armen geben – wie Jesus es dem reichen Jüngling gesagt hat.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Viele Christen haben genau das getan – vom hl. Antonius bis zu den Mönchen und Nonnen, die heute in Armut leben. Und für jeden Christen bleibt die Frage nach seinem eigenen Besitz unbequem. Aber eine Kathedrale einmal zu verkaufen, speist die Armen einen Tag; eine Kirche, die Schulen, Kliniken und Suppenküchen betreibt, speist sie jahrzehntelang. Entscheidend ist, dass Besitz der Liebe dient, transparent verwaltet wird und nicht der Selbstdarstellung – daran muss sich jede Kirche messen lassen.`,
          followUps: [
            {
              id: 'staatsleistungen-kirchensteuer',
              objection: `In Deutschland leben die Kirchen vom Staat: Kirchensteuer über die Finanzämter, dazu jährlich über eine halbe Milliarde Euro „Staatsleistungen" – seit 1919 soll das abgelöst werden, und nichts passiert.`,
              objectionBy: 'Carsten Frerk',
              answer: `Die deutsche Situation ist ein Sonderfall, und deine Kritik an den Staatsleistungen ist berechtigt: Die Weimarer Verfassung hat ihre Ablösung schon 1919 verlangt (Art. 138 WRV, heute Teil des Grundgesetzes), und die großen Kirchen haben sich zu Verhandlungen bereit erklärt. Historisch sind diese Leistungen ein Ausgleich für die Enteignung kirchlicher Güter von 1803. Die koptische Kirche kennt so etwas übrigens gar nicht: Sie lebt von freiwilligen Gaben ihrer Gläubigen, auch in Deutschland.`,
              detail: `Die Kirchensteuer ist ein Mitgliedsbeitrag, den der Staat gegen Gebühr einzieht – wer austritt, zahlt nicht. Das System kann man politisch unterschiedlich bewerten. Für die Frage nach der Heuchelei entscheidend ist etwas anderes: Ob eine Kirche mit ihren Mitteln dient oder sich selbst inszeniert. Die frühe Kirche war arm und versorgte trotzdem Witwen, Waisen und Fremde – daran muss sich jede Kirche messen lassen, ob reich oder arm.`,
              followUps: [
                {
                  id: 'caritas-staatsgeld-arbeitsrecht',
                  objection: `Caritas und Diakonie werden fast vollständig aus Steuer- und Sozialversicherungsgeldern finanziert, aber die Kirchen diskriminieren dort per Sonderarbeitsrecht: Wiederverheiratete und Homosexuelle wurden gekündigt.`,
                  objectionBy: 'Carsten Frerk',
                  answer: `Richtig ist: Die Wohlfahrtsverbände werden für ihre Leistungen bezahlt wie jeder andere Träger – Krankenhäuser, Pflegeheime, Kitas –, sie bekommen kein Geschenk. Beim Arbeitsrecht hast du einen wunden Punkt getroffen: Kündigungen wegen der privaten Lebensführung haben Menschen schwer verletzt. Die katholischen Bischöfe in Deutschland haben 2022 ihre Grundordnung geändert; die private Lebensgestaltung ist seitdem grundsätzlich kein Kündigungsgrund mehr. Eine Kirche darf ihr Profil wahren – aber sie muss Menschen dabei mit Würde behandeln.`,
                  detail: `Hier zeigt sich eine echte Spannung: Eine Glaubensgemeinschaft muss verlangen können, dass Menschen in verkündigenden Ämtern ihren Glauben teilen; zugleich darf sie nicht diejenigen, die in der Küche oder Pflege arbeiten, wegen ihres Privatlebens bestrafen, während sie andere Sünden – Habgier, Lieblosigkeit – nie prüft. Ehrlichkeit über diese Inkonsequenz macht dich glaubwürdiger.`,
                  sources: [
                    { kind: 'sonstiges', author: 'Deutsche Bischofskonferenz', work: 'Grundordnung des kirchlichen Dienstes (Neufassung)', year: '2022', status: 'paraphrase', note: 'Private Lebensgestaltung (z. B. Wiederheirat, gleichgeschlechtliche Partnerschaft) grundsätzlich kein Kündigungsgrund mehr.' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'heuchler-missbrauch',
      objection: `Christen sind Heuchler: Sie predigen Moral und leben anders. Der schlimmste Beweis: Die Kirche, die anderen Sexualmoral predigt, hat Kindesmissbrauch jahrzehntelang vertuscht.`,
      objectionBy: 'Christopher Hitchens',
      answer: `Der Missbrauch und seine Vertuschung sind ein Verbrechen und ein Verrat an Christus, der sagte, für den, der einen Kleinen zu Fall bringt, wäre es besser, mit einem Mühlstein im Meer versenkt zu werden. Studien wie die MHG-Studie (2018) und die ForuM-Studie (2024) haben das Ausmaß in Deutschland dokumentiert – und das Dunkelfeld ist größer. Ich verteidige das nicht. Aber merk, woran du die Kirche misst: an Jesus. Heuchelei kann man nur vorwerfen, wenn es einen Maßstab gibt – und dieser Maßstab ist richtig.`,
      followUps: [
        {
          id: 'christen-muessten-besser-sein',
          objection: `Wenn das Christentum wahr wäre, müssten Christen sichtbar bessere Menschen sein. Sind sie aber nicht.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Das Christentum behauptet nicht, dass Christen bessere Menschen sind, sondern dass sie Sünder sind, denen vergeben wird und die Christus zu heilen beginnt – bei manchen ganz unten. C. S. Lewis sagt: Vergleiche nicht einen von Natur aus jähzornigen Christen mit einer von Natur aus freundlichen Nachbarin, sondern frage, wie er ohne Christus wäre. Und im Durchschnitt zeigen Studien durchaus Wirkung: Praktizierende Gläubige spenden und engagieren sich mehr. Aber die Wahrheit des Christentums hängt an Christus und seiner Auferstehung, nicht an meinem Verhalten.`,
          followUps: [
            {
              id: 'immunisierung',
              objection: `Das ist eine Immunisierungsstrategie: Sind Christen gut, ist es Gottes Gnade; sind sie schlecht, sind sie eben Sünder. So kann man nie falsch liegen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Das wäre so, wenn ich das Christentum mit dem Verhalten der Christen begründen würde – das tue ich nicht. Seine Wahrheit lässt sich an anderer Stelle prüfen: an der Person Jesu, an den historischen Belegen für die Auferstehung, an der Frage nach Gott. Das Verhalten der Christen ist ein Zeugnis, das gut oder schlecht sein kann, aber es ist nicht das Fundament. Sonst müsste man auch die Medizin für widerlegt halten, weil es Ärzte gibt, die rauchen.`,
              followUps: [
                {
                  id: 'studien-religioese-kinder',
                  objection: `Es gibt sogar Studien, die zeigen, dass religiöse Kinder weniger großzügig und strafender sind als nichtreligiöse. Religion macht Menschen nicht besser, sondern selbstgerechter.`,
                  objectionBy: 'Richard Dawkins',
                  answer: `Du meinst vermutlich die viel zitierte Studie von Jean Decety und Kollegen (2015). Bei ihrer Nachprüfung stellte sich heraus, dass die Auswertung einen Fehler enthielt: Die Herkunftsländer der Kinder waren nicht richtig berücksichtigt; nach der Korrektur verschwand der behauptete Effekt weitgehend. Breitere Daten zeigen eher das Gegenteil: Regelmäßige Gottesdienstbesucher spenden im Durchschnitt mehr – auch für nichtreligiöse Zwecke – und engagieren sich häufiger ehrenamtlich. Das macht Christen nicht automatisch zu besseren Menschen, aber es widerlegt die Behauptung, Religion mache unsozial.`,
                  detail: `Die Politikwissenschaftler Robert Putnam und David Campbell haben in *American Grace* (2010) gezeigt, dass religiös eingebundene Amerikaner in fast jeder Form bürgerschaftlichen Engagements aktiver sind – entscheidend ist dabei weniger die Theologie als die Einbindung in eine Gemeinde. Für dein Gespräch: Benutze solche Daten bescheiden. Sie zeigen Tendenzen, keine Heiligkeit. Die eigentliche Antwort bleibt, dass das Christentum nicht auf der Güte der Christen ruht, sondern auf der Güte Christi.`,
                  sources: [
                    { kind: 'wissenschaft', author: 'Azim F. Shariff; Aiyana K. Willard; Michael Muthukrishna; Stephanie R. Kramer; Joseph Henrich', work: '„What is the association between religious affiliation and children’s altruism?", Current Biology 26(15)', year: '2016', status: 'paraphrase', note: 'Nachprüfung der Studie von Decety u. a. (Current Biology 2015); nach Berücksichtigung der Herkunftsländer verschwand der Effekt weitgehend.' },
                    { kind: 'wissenschaft', author: 'Robert D. Putnam; David E. Campbell', work: 'American Grace: How Religion Divides and Unites Us', year: '2010', status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'vertuschung-systemisch',
          objection: `Es waren nicht einzelne Täter, sondern ein System: Bischöfe haben Täter versetzt, Opfer zum Schweigen gebracht und erst gehandelt, als Journalisten wie der *Boston Globe* 2002 sie dazu zwangen. Und die orthodoxen Kirchen haben ihre Archive bis heute nicht geöffnet.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Das ist wahr, und es ist das Schlimmste daran: Die Institution hat sich selbst über die Kinder gestellt. Ich sage auch nicht, dass orthodoxe Kirchen davon frei sind – keine Kirche ist es, und Schweigen schützt dort wie überall die Täter. Was das Evangelium verlangt, ist eindeutig: Die Opfer zuerst, Täter vor staatliche Gerichte, Transparenz statt Imageschutz. Jesus hat die schärfsten Worte seines Lebens denen vorbehalten, die Kleinen schaden, und den religiösen Führern, die nach außen fromm erscheinen (Mt 18,6; 23,27).`,
          detail: `Für dein Gespräch: Verteidige an dieser Stelle nichts und vergleiche nicht mit anderen Institutionen – das wirkt wie Ablenkung, auch wenn Missbrauch in Schulen, Sportvereinen und Familien ebenfalls verbreitet ist. Sag klar, dass dich das als Christ beschämt. Glaubwürdigkeit entsteht hier nur durch Ehrlichkeit. Ein seelsorgerlicher Hinweis: Wenn dein Gegenüber selbst betroffen ist, geht das Zuhören jeder Argumentation vor.`,
          sources: [
            { kind: 'bibel', work: 'Matthäus', ref: '18,6', quote: `Wer aber ärgert dieser Geringsten einen, die an mich glauben, dem wäre besser, dass ein Mühlstein an seinen Hals gehängt und er ersäuft würde im Meer, da es am tiefsten ist.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'warum-kirchenmoral-trauen',
              objection: `Warum sollte ich dann irgendeiner Kirche noch in moralischen Fragen zuhören? Eine Institution, die so versagt hat, hat jedes Recht verwirkt, anderen Moral zu predigen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Du sollst einer Kirche nicht blind vertrauen – das verlangt auch die Schrift nicht: „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21). Prüfe die Lehre an Christus selbst. Und beachte: Gerade das Urteil über den Missbrauch fällst du mit dem Maßstab, den die Kirche verkündet – dass das Kind heilig ist und die Mächtigen den Schwachen dienen sollen. Ein Arzt, der selbst raucht, irrt nicht, wenn er sagt, dass Rauchen tötet. Die Kirche hat ihr Recht nicht verwirkt, die Wahrheit zu sagen, aber sie hat die Pflicht, zuerst über sich selbst die Wahrheit zu sagen.`,
              sources: [
                { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'jesus-ja-kirche-nein',
      objection: `Ich glaube an Jesus, aber nicht an die Kirche. Die Institution hat mit dem Mann aus Nazareth nichts zu tun.`,
      objectionBy: 'Karlheinz Deschner',
      answer: `Jesus selbst hat eine Gemeinschaft gegründet: Er berief die Zwölf, sagte „Ich will meine Gemeinde bauen" (Mt 16,18) und stiftete beim letzten Abendmahl ein Mahl, das sie „zu seinem Gedächtnis" feiern sollte. Ein Christentum ohne Gemeinschaft kennt das Neue Testament nicht. Selbst das, was du über Jesus weißt, hast du durch die Kirche – sie hat die Evangelien überliefert. Die Kirche ist voller Sünder, mich eingeschlossen. Aber Christus hat versprochen, bei ihr zu sein, und er ruft uns, sie von innen zu erneuern, nicht sie zu verlassen.`,
      followUps: [
        {
          id: 'institution-entfernt',
          objection: `Aber die Institution hat sich so weit von Jesus entfernt, dass sie ihn nicht mehr repräsentiert.`,
          objectionBy: 'Karlheinz Deschner',
          answer: `Die Kirche hat sich in ihrer Geschichte immer wieder von Christus entfernt – und immer wieder kam die Erneuerung von innen: durch die Wüstenväter in Ägypten, durch Reformbewegungen, durch Heilige, die arm lebten und den Mächtigen widersprachen. In der koptischen Kirche ist das Mönchtum bis heute eine solche Kraft. Christus hat nicht versprochen, dass seine Kirche ohne Sünde ist, sondern dass „die Pforten der Hölle sie nicht überwältigen" (Mt 16,18).`,
        },
      ],
    },
    {
      id: 'wohlstandsprediger',
      objection: `Und die Fernsehprediger mit Privatjets, die den Armen versprechen, Gott mache sie reich, wenn sie spenden?`,
      objectionBy: 'Christopher Hitchens',
      answer: `Da sind wir uns völlig einig: Das sogenannte „Wohlstandsevangelium" ist eine Irrlehre. Paulus warnt vor Leuten, „die da meinen, Gottseligkeit sei ein Gewerbe" (1 Tim 6,5), und Jesus sagte: „Ihr könnt nicht Gott dienen und dem Mammon" (Mt 6,24). Die orthodoxe Tradition kennt Christus als den Armen, der für uns arm wurde (2 Kor 8,9). Wer das Evangelium als Geschäftsmodell benutzt, verrät es.`,
      followUps: [
        {
          id: 'mutter-teresa-hitchens',
          objection: `Selbst eure Heiligen sind Heuchler. Mutter Teresa war eine Freundin der Armut, nicht der Armen: Ihre Häuser boten miserable medizinische Versorgung, während sie Geld von Diktatoren wie Duvalier und vom Betrüger Charles Keating annahm.`,
          objectionBy: 'Christopher Hitchens',
          answer: `Die Kritik an den medizinischen Standards in manchen ihrer Häuser verdient Gehör, und Fragen zur Herkunft von Spenden darf man stellen. Aber man muss wissen, was ihre Häuser waren: keine Krankenhäuser, sondern Orte, an denen Sterbende, die man auf der Straße liegen ließ, mit Würde und Zuwendung sterben konnten. Auch ihre Kritiker bestreiten nicht, dass sie und ihre Schwestern ihr Leben unter den Ärmsten verbracht haben – in eigener Armut. Ein Fehler in der Umsetzung ist nicht dasselbe wie Heuchelei.`,
          detail: `Hitchens veröffentlichte 1995 *The Missionary Position* und trat im Seligsprechungsverfahren als Kritiker auf. Ein konstruktiver Umgang: Gib zu, dass Heilige keine fehlerlosen Menschen sind und ihre Werke kritisch geprüft werden dürfen. Die koptische Kirche kennt dasselbe Ideal in ihren eigenen Reihen – Mönche, Nonnen und geweihte Diakonissen, die in den Armenvierteln Kairos, etwa bei den Müllsammlern im Mokattam, Schulen und Kliniken betreiben. Die Frage an jeden Kritiker lautet: Wer hat sonst die Sterbenden von Kalkutta aufgehoben?`,
          sources: [
            { kind: 'gegner', author: 'Christopher Hitchens', work: 'The Missionary Position: Mother Teresa in Theory and Practice', year: '1995', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'leiden-schoen-teresa',
              objection: `Sie hat sogar gesagt, das Leiden der Armen sei etwas Schönes. Wer Leid verklärt, hat kein Interesse, es zu beseitigen.`,
              objectionBy: 'Christopher Hitchens',
              answer: `Solche Aussagen können verklärend klingen, und die christliche Lehre ist hier klar: Leid ist nicht gut an sich. Christus hat Kranke geheilt, Hungrige gespeist, und er wird im Gericht fragen: „Ich bin hungrig gewesen, und ihr habt mich gespeist" (Mt 25,35). Was Christen meinen, wenn sie vom Sinn des Leidens sprechen, ist etwas anderes: dass Gott im Leidenden gegenwärtig ist und dass auch das Leiden mit Christus verbunden werden kann. Das ist ein Trost für die, deren Leid man nicht mehr beseitigen kann – keine Rechtfertigung, Leid hinzunehmen, das man beseitigen könnte.`,
              sources: [
                { kind: 'bibel', work: 'Matthäus', ref: '25,35–40', quote: `Ich bin hungrig gewesen, und ihr habt mich gespeist … Was ihr getan habt einem unter diesen meinen geringsten Brüdern, das habt ihr mir getan.`, translation: 'Luther 1912', status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `An welchem Maßstab misst du die Kirche, wenn du sie heuchlerisch nennst – und woher stammt er?`,
    `Kennst du Mt 23? Was würde Jesus deiner Meinung nach zu den Missständen sagen?`,
    `Hängt die Wahrheit einer Lehre vom Verhalten ihrer Anhänger ab?`,
    `Wer würde die Lücke füllen, wenn die kirchlichen Sozialeinrichtungen morgen verschwänden?`,
  ],
  avoid: [
    `Missbrauchsskandale relativieren („anderswo ist es auch so"), bevor man sie klar verurteilt hat.`,
    `Behaupten, die eigene Kirche sei frei von Sünde und Skandalen.`,
    `Pauschale Statistiken über Spenden als Beweis für die Wahrheit des Glaubens anführen.`,
  ],
  concessions: [
    `Kirchenführer haben in Luxus gelebt, während Menschen hungerten – und tun es teilweise bis heute.`,
    `Kirchen haben sexuellen Missbrauch vertuscht und Täter geschützt; das ist ein schwerer Verrat an den Opfern und an Christus.`,
    `Christen urteilen oft hart über andere und übersehen ihre eigenen Sünden – genau das, was Jesus verurteilt hat.`,
  ],
  furtherReading: [
    { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Über Reichtum und Armut (Predigten über Lazarus)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch IV', year: '1952', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'The Reason for God', ref: 'Kap. 4', year: '2008', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Arthur C. Brooks', work: 'Who Really Cares', year: '2006', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Heuchelei', 'Kirchenfinanzen', 'Missbrauch', 'Armut', 'Mönchtum', 'Diakonie'],
  related: [
    'christentum-gesellschaft/christentum-ohne-nutzen',
    'sexualethik/sexualmoral-veraltet',
    'religion-gewalt/religion-verursacht-kriege',
  ],
};

export default claim;
