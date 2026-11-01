import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'leichnam-gestohlen-falsches-grab',
  title: `„Der Leichnam wurde gestohlen, umgebettet – oder man ging zum falschen Grab. Vielleicht wurde Jesus nie in einem Grab beigesetzt."`,
  proponents: [
    { name: 'Hermann Samuel Reimarus', role: 'Aufklärer, Hamburger Orientalist', work: 'Von dem Zwecke Jesu und seiner Jünger (Wolfenbütteler Fragmente, hg. von Lessing 1778)' },
    { name: 'Kirsopp Lake', role: 'Neutestamentler, Harvard', work: 'The Historical Evidence for the Resurrection of Jesus Christ (1907)' },
    { name: 'John Dominic Crossan', role: 'Mitbegründer des Jesus Seminar', work: 'Jesus: A Revolutionary Biography (1994), Kap. „The Dogs Beneath the Cross"' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, UNC', work: 'How Jesus Became God (2014), Kap. 4' },
  ],
  steelman: `Gekreuzigte wurden im Römischen Reich in der Regel nicht ehrenvoll bestattet – die Leichen blieben zur Abschreckung am Kreuz, wurden von Tieren gefressen oder in Massengräber geworfen. Die Geschichte vom vornehmen Ratsherrn Josef von Arimathäa, der zufällig ein neues Felsengrab besitzt, wirkt wie eine fromme Erfindung, die das spätere Grabwunder vorbereitet. Selbst wenn es ein Grab gab: Leichen konnten gestohlen werden (das behaupteten schon die jüdischen Gegner, Mt 28,13), umgebettet werden (Maria Magdalena denkt selbst an den Gärtner, Joh 20,15) oder die trauernden Frauen gingen im Morgengrauen zum falschen Grab. Bezeichnend: Paulus erwähnt kein leeres Grab, und die erste Grabgeschichte steht erst bei Markus um 70 – mit dem verdächtigen Schluss, die Frauen hätten „niemandem etwas gesagt" (Mk 16,8). Das erklärt elegant, warum vorher niemand davon wusste. – So etwa Crossan, Ehrman und, in älterer Form, Reimarus und Lake.`,
  biblical: {
    summary: `Alle vier Evangelien berichten übereinstimmend: Josef von Arimathäa, ein Mitglied des Hohen Rates, erbat von Pilatus den Leichnam und legte ihn in ein Felsengrab; Frauen aus Galiläa sahen zu, wo er lag (Mk 15,42–47); am ersten Tag der Woche fanden Frauen, darunter Maria Magdalena, das Grab leer. Schon das vorpaulinische Credo nennt die Folge „gestorben – begraben – auferweckt" (1 Kor 15,3–4). Matthäus bezeugt die jüdische Gegenerzählung vom Leichendiebstahl, die das leere Grab voraussetzt (Mt 28,11–15).`,
    detail: `**Details, die gegen eine Erfindung sprechen:**
- Josef gehört zu dem Gremium, das Jesus verurteilte (Mk 14,64: „alle") – eine für Christen unbequeme Figur.
- Die Frauen beobachten den Ort der Grablegung (Mk 15,47) – eine Verwechslung wird ausdrücklich ausgeschlossen.
- Die Leinentücher bleiben zurück, das Schweißtuch liegt zusammengelegt beiseite (Joh 20,6–7) – kein Bild eines eiligen Diebstahls.
- Der jüdische Gegenvorwurf lautet nicht „Der Leichnam liegt noch dort", sondern „Die Jünger haben ihn gestohlen" (Mt 28,13).

**Zu Mk 16,8:** Das Schweigen der Frauen ist eine Reaktion des Schreckens auf dem Weg; Mk 16,7 enthält den Auftrag, es Petrus und den Jüngern zu sagen – Markus setzt voraus, dass die Botschaft ankam, sonst gäbe es seine Erzählung nicht.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '15,43.46–47', quote: `… kam Joseph von Arimathia, ein ehrbarer Ratsherr … und wickelte ihn in die Leinwand und legte ihn in ein Grab, das war in einen Fels gehauen, und wälzte einen Stein vor des Grabes Tür. Aber Maria Magdalena und Maria, des Joses Mutter, schauten zu, wo er hingelegt ward.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '28,12–15', quote: `… und sprachen: Saget: Seine Jünger kamen des Nachts und stahlen ihn, dieweil wir schliefen. … Solches ist eine gemeine Rede geworden bei den Juden bis auf den heutigen Tag.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '20,6–7', quote: `… und sieht die Leinen gelegt, und das Schweißtuch, das Jesus um das Haupt gebunden war, nicht bei die Leinen gelegt, sondern beiseits, zusammengewickelt an einen besondern Ort.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3–4', quote: `… daß Christus gestorben sei für unsere Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift,`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptische Kirche feiert in der Karwoche und zu Ostern das Begräbnis und das leere Grab des Herrn. Der Grablegung durch Josef und Nikodemus wird liturgisch gedacht; Josef von Arimathäa wird als Heiliger verehrt. Die Väter haben die Diebstahlsthese schon früh geprüft: Johannes Chrysostomus weist darauf hin, dass Diebe den Leichnam nicht entkleidet, die myrrhegetränkten Tücher nicht abgelöst und das Schweißtuch nicht ordentlich zusammengelegt hätten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Johannesevangelium', ref: '85', year: 'ca. 391', quote: `Hätte jemand den Leichnam weggetragen, hätte er ihn nicht zuvor entkleidet; die Tücher waren mit Myrrhe verklebt, und das Schweißtuch lag zusammengelegt an einem eigenen Ort – das ist nicht das Werk von Dieben in Eile.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '108', year: 'ca. 155–160', quote: `Die jüdischen Führer hätten Männer ausgesandt, die verbreiteten, die Jünger hätten Jesus bei Nacht aus dem Grab gestohlen.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Das **Begräbnis** Jesu wird von vielen kritischen Forschern als historisch wahrscheinlich angesehen (Raymond Brown hielt die Grablegung durch Josef für „sehr wahrscheinlich"). Bestritten wird es vor allem von Crossan und – seit 2014 – Ehrman, die auf die römische Praxis verweisen. Das **leere Grab** wird nach Habermas' Literaturübersicht von einer Mehrheit akzeptiert; prominente Skeptiker (Lüdemann, Crossan, Ehrman) bestreiten es. Die Diebstahls- und Verwechslungsthesen spielen in der heutigen Fachdiskussion kaum noch eine Rolle; die Hauptfrage ist, ob es überhaupt ein bekanntes Grab gab.`,
    detail: `**Archäologische Daten zur Bestattung Gekreuzigter:**
- Das Ossuar des **Jehochanan** (gefunden 1968 in Giv'at ha-Mivtar, Jerusalem) enthielt die Gebeine eines Gekreuzigten, dessen Fersenbein noch von einem Nagel durchbohrt war – er wurde in einem Familiengrab beigesetzt. Das zeigt: Bestattung nach Kreuzigung war in Judäa möglich.
- Josephus: Die Juden seien so sorgfältig mit Bestattungen, dass sie selbst Gekreuzigte vor Sonnenuntergang abnehmen und begraben (Jüdischer Krieg 4,317).
- Philo: Selbst in Alexandrien habe man Gekreuzigte an Festtagen den Verwandten zur Bestattung übergeben (In Flaccum 83).

**Ehrlich:** In Kriegszeiten (z. B. Belagerung Jerusalems 70) ließen die Römer Tausende Gekreuzigte hängen. Die Frage ist, was in Friedenszeiten am Vorabend des Pessach zu erwarten war.`,
    sources: [
      { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah, Bd. 2', year: '1994', quote: `Brown hält es für sehr wahrscheinlich, dass Jesus von Josef von Arimathäa in einem Grab beigesetzt wurde; eine christliche Erfindung dieser Figur sei schwer erklärbar.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'John Dominic Crossan', work: 'Jesus: A Revolutionary Biography', year: '1994', quote: `Crossan bezweifelt eine ehrenvolle Bestattung und hält es für wahrscheinlich, dass Jesu Leichnam wie der anderer Gekreuzigter behandelt wurde.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Bart D. Ehrman', work: 'How Jesus Became God', year: '2014', quote: `Ehrman schreibt, er habe früher die Grablegung durch Josef für wahrscheinlich gehalten, sei davon aber abgerückt.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdischer Krieg', ref: '4,317', year: 'ca. 75', quote: `Die Juden sind in Bezug auf Bestattungen so sorgfältig, dass sie sogar die zum Kreuz Verurteilten vor Sonnenuntergang herabnehmen und begraben.`, status: 'paraphrase' },
      { kind: 'sonstiges', author: 'Philo von Alexandrien', work: 'In Flaccum', ref: '83', year: 'ca. 40', quote: `An Festtagen sei es üblich gewesen, Gekreuzigte vor dem Fest abzunehmen und den Verwandten zur Bestattung zu übergeben.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Alle Diebstahls- und Verwechslungsthesen haben dasselbe Problem: Sie erklären bestenfalls das leere Grab, aber nicht die Erscheinungen – und schon gar nicht, warum der skeptische Jakobus und der Verfolger Paulus Christen wurden. Zudem: Die Jünger hätten gewusst, dass sie den Leichnam gestohlen haben – und dennoch für ihr Zeugnis gelitten. Und hätte man das falsche Grab erwischt, hätten die Behörden einfach das richtige gezeigt. Stattdessen behaupteten die Gegner einen Diebstahl – also war das Grab leer.`,
  keyPoints: [
    `**Die Gegner bestätigen das leere Grab:** Der jüdische Vorwurf „Die Jünger haben ihn gestohlen" (Mt 28,13; Justin, Dial. 108) setzt voraus, dass der Leichnam fehlte.`,
    `**Begräbnis war in Judäa möglich:** Jehochanan-Ossuar (1968), Josephus (Jüd. Krieg 4,317), Philo (In Flaccum 83), Dtn 21,22–23.`,
    `**Josef von Arimathäa ist schwer erfindbar:** ein Mitglied des Gremiums, das Jesus verurteilte, aus einem unbedeutenden Ort – keine konkurrierende Begräbnistradition existiert.`,
    `**Diebstahl:** Die Jünger wären Lügner, die wissentlich für eine Lüge litten; Diebe hätten die Tücher nicht zurückgelassen.`,
    `**Falsches Grab:** Die Frauen sahen den Ort (Mk 15,47); Josef kannte sein eigenes Grab; die Behörden hätten das richtige gezeigt.`,
    `**Keine dieser Thesen erklärt die Erscheinungen** – sie müssen mit einer zweiten Hypothese (Halluzination) kombiniert werden.`,
  ],
  voices: [
    {
      person: 'justin',
      role: 'als Zeuge der jüdisch-christlichen Debatte im 2. Jahrhundert',
      text: `Justin berichtet um die Mitte des 2. Jahrhunderts – unabhängig von Matthäus formuliert –, dass jüdische Gegner verbreiteten, die Jünger hätten Jesus nachts aus dem Grab gestohlen und behaupteten nun, er sei auferstanden. Für die Debatte ist das wertvoll: Die älteste nichtchristliche Erklärung, die wir kennen, bestreitet nicht das leere Grab, sondern versucht es zu erklären. Wer sich mit dem leeren Grab nicht auseinandersetzen muss, erfindet keinen Diebstahl.`,
      sources: [{ kind: 'kirchenvater', author: 'Justin der Märtyrer', work: 'Dialog mit dem Juden Tryphon', ref: '108', year: 'ca. 155–160', status: 'paraphrase', quote: `Bericht über die jüdische Diebstahlsthese.` }],
    },
    {
      person: 'chrysostomus',
      role: 'als Ausleger des Johannesevangeliums',
      text: `Chrysostomus liest die Szene am Grab mit dem Blick eines Ermittlers: Die Leinentücher liegen da, das Schweißtuch ist zusammengelegt an einem eigenen Ort. Grabräuber hätten den Leichnam mitsamt den myrrhegetränkten, verklebten Tüchern weggeschafft und keine Zeit mit dem Abwickeln und Ordnen verschwendet. Freunde, die umbetten wollten, hätten den Leib nicht nackt getragen. Gerade dieses Detail habe Johannes (und Petrus) zum Glauben geführt.`,
      sources: [{ kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Johannesevangelium', ref: '85', year: 'ca. 391', status: 'paraphrase', quote: `Argumentation aus den zurückgelassenen Grabtüchern gegen die Diebstahlsthese.` }],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Historiker der Auferstehung',
      text: `Craig hat in einer Fachstudie die Argumente für das leere Grab zusammengestellt: die frühe, vormarkinische Passionsüberlieferung; die Verankerung im Credo von 1 Kor 15; die Schlichtheit des Markusberichts ohne theologische Ausschmückung; die Frauen als Hauptzeuginnen; die jüdische Gegenpolemik; und die Unmöglichkeit, in Jerusalem eine Auferstehung zu verkünden, wenn das Grab den Leichnam enthielt.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Assessing the New Testament Evidence for the Historicity of the Resurrection of Jesus', year: '1989', status: 'paraphrase', quote: `Systematische Darstellung der Argumente für das leere Grab.` }],
    },
    {
      person: 'nt-wright',
      role: 'als Historiker',
      text: `Wright betont, dass weder ein leeres Grab allein noch Erscheinungen allein die frühchristliche Botschaft erklären: Ein leeres Grab ohne Begegnungen hätte man als Grabraub gedeutet (wie Maria Magdalena es zunächst tat, Joh 20,2). Begegnungen ohne leeres Grab hätte man als Visionen eines Verstorbenen verstanden. Erst beides zusammen erklärt, warum Juden von „Auferstehung" sprachen. Deshalb greifen Diebstahls- und Verwechslungsthesen immer zu kurz.`,
      sources: [{ kind: 'fachliteratur', author: 'N. T. Wright', work: 'The Resurrection of the Son of God', year: '2003', status: 'paraphrase', quote: `Leeres Grab und Erscheinungen sind zusammen hinreichend zur Erklärung des frühchristlichen Glaubens.` }],
    },
  ],
  dialog: [
    {
      id: 'kein-grab-hunde',
      objection: `Die Römer ließen Gekreuzigte am Kreuz hängen, als Abschreckung, bis die Vögel und Hunde sie gefressen hatten. Ein ehrenvolles Grab für einen Aufrührer ist extrem unwahrscheinlich. Es gab wohl gar kein Grab, das hätte leer sein können.`,
      objectionBy: 'John Dominic Crossan / Bart Ehrman',
      answer: `Das war römische Praxis im Allgemeinen – aber in Judäa nahm Rom in Friedenszeiten Rücksicht auf jüdisches Recht: Die Tora verlangt, dass ein Gehenkter noch am selben Tag begraben wird (Dtn 21,23). Josephus bestätigt, dass Juden selbst Gekreuzigte vor Sonnenuntergang abnahmen und begruben. Und das Ossuar des gekreuzigten Jehochanan, mit dem Nagel noch im Fersenbein, zeigt: Ein Gekreuzigter konnte in einem Familiengrab beigesetzt werden. Am Vorabend des Pessach hatten gerade die jüdischen Behörden ein Interesse daran, die Leichen abzunehmen (Joh 19,31).`,
      sources: [
        { kind: 'bibel', work: '5. Mose (Deuteronomium)', ref: '21,22–23', quote: `Wenn jemand eine Sünde getan hat, die des Todes würdig ist, und wird also getötet, daß man ihn an ein Holz hängt, so soll sein Leichnam nicht über Nacht an dem Holz bleiben, sondern du sollst ihn desselben Tages begraben …`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'wissenschaft', work: `Ossuar des Jehochanan (Giv'at ha-Mivtar, Jerusalem)`, year: 'gefunden 1968', quote: `Gebeine eines Gekreuzigten mit einem Nagel im Fersenbein, beigesetzt in einem Familiengrab.`, status: 'paraphrase' },
        { kind: 'bibel', work: 'Johannes', ref: '19,31', quote: `Die Juden aber, dieweil es der Rüsttag war, daß nicht die Leichname am Kreuze blieben den Sabbat über … baten Pilatus, daß ihre Beine gebrochen und sie abgenommen würden.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      ],
      questionsBack: [
        `Wie erklärst du das Ossuar des Jehochanan, wenn Gekreuzigte nie bestattet wurden?`,
        `Warum hätten die jüdischen Behörden am Vorabend des Pessach Leichen am Kreuz hängen lassen sollen – gegen ihr eigenes Gesetz?`,
      ],
      followUps: [
        {
          id: 'josef-legende',
          objection: `Josef von Arimathäa ist eine literarische Erfindung: ein frommer, reicher Ratsherr, der zufällig ein neues Grab besitzt und Jesus heimlich verehrt. Bei Matthäus wird er zum Jünger, bei Johannes zum heimlichen Jünger – man sieht die Legende wachsen.`,
          objectionBy: 'Bart Ehrman',
          answer: `Dass spätere Evangelien Josef positiver zeichnen, ist normal – der Kern ist stabil: ein Ratsherr aus Arimathäa begräbt Jesus. Gerade dieser Kern ist für Christen unbequem: Josef gehört zu dem Gremium, das nach Markus „alle" Jesus zum Tod verurteilten. Hätten Christen jemanden erfunden, hätten sie einen Jünger gewählt, nicht ein Mitglied des Hohen Rates – und keinen Ort, den niemand kannte. Zudem gibt es keine einzige konkurrierende Begräbnisüberlieferung.`,
          detail: `Raymond Brown, einer der bedeutendsten katholischen Exegeten des 20. Jahrhunderts, hielt die Grablegung durch Josef für sehr wahrscheinlich, weil eine Erfindung dieser Figur durch Christen kaum erklärbar sei. Ehrman hat seine Meinung 2014 nicht aufgrund neuer Quellen geändert, sondern aufgrund einer allgemeinen Einschätzung der römischen Praxis und des Charakters des Pilatus.`,
          followUps: [
            {
              id: 'pilatus-grausam',
              objection: `Pilatus war brutal – Philo beschreibt ihn als bestechlich, gewalttätig, mit Hinrichtungen ohne Prozess. Ein solcher Mann gibt nicht die Leiche eines verurteilten „Königs der Juden" an einen jüdischen Ratsherrn heraus.`,
              objectionBy: 'Bart Ehrman',
              answer: `Pilatus war hart, aber auch berechnend: Als die Juden gegen die Kaiserstandarten in Jerusalem protestierten, gab er nach (Josephus, Jüd. Krieg 2,169–174). Die Bitte um Abnahme vor dem Fest kam nicht von Jüngern, sondern von einem Mitglied der jüdischen Führungsschicht, mit der Pilatus zusammenarbeiten musste – und sie entsprach dem Interesse des Hohen Rates. Markus berichtet sogar, dass Pilatus sich erst vom Hauptmann den Tod bestätigen ließ (Mk 15,44–45) – ein nüchternes, kein legendarisches Detail.`,
              sources: [
                { kind: 'sonstiges', author: 'Philo von Alexandrien', work: 'Legatio ad Gaium', ref: '302', year: 'ca. 41', quote: `Philo wirft Pilatus Bestechlichkeit, Gewalttaten, Raub, Misshandlungen und häufige Hinrichtungen ohne Urteil vor.`, status: 'paraphrase' },
                { kind: 'sonstiges', author: 'Flavius Josephus', work: 'Jüdischer Krieg', ref: '2,169–174', year: 'ca. 75', quote: `Pilatus lässt die Kaiserbilder nach massivem jüdischem Protest aus Jerusalem entfernen.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Markus', ref: '15,44–45', quote: `Pilatus aber verwunderte sich, daß er schon tot war, und rief den Hauptmann und fragte ihn, ob er längst gestorben wäre. Und als er's erkundet von dem Hauptmann, gab er Joseph den Leichnam.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'diebstahl',
      objection: `Die naheliegendste Erklärung für ein leeres Grab ist ein Diebstahl. Die Jünger holten den Leichnam und verkündeten dann die Auferstehung – genau das haben die Juden damals schon gesagt.`,
      objectionBy: 'Hermann Samuel Reimarus (rezipiert)',
      answer: `Dann wären die Jünger bewusste Betrüger gewesen – und hätten dennoch für etwas gelitten, von dem sie wussten, dass es eine Lüge war: Gefängnis, Auspeitschung (Apg 5,40), Tod. Menschen sterben für Überzeugungen, die falsch sein können – aber kaum jemand stirbt für etwas, das er selbst erfunden hat. Und ein Diebstahl erklärt nicht, warum Jakobus und Paulus, die nichts gestohlen hatten, den Auferstandenen sahen.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '5,40–41', quote: `… und riefen die Apostel, stäupten sie und geboten ihnen, sie sollten nicht reden in dem Namen Jesu … Sie gingen aber fröhlich von des Rats Angesicht, daß sie würdig gewesen waren, um seines Namens willen Schmach zu leiden.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
      ],
      questionsBack: [
        `Was hätten die Jünger durch einen Betrug gewonnen – außer Verfolgung?`,
        `Wer von den Jüngern hätte den Diebstahl ausgeplaudert, als es gefährlich wurde?`,
      ],
      followUps: [
        {
          id: 'waechter-legende',
          objection: `Die Grabwache steht nur bei Matthäus – sie ist eine apologetische Erfindung, um die Diebstahlsthese abzuwehren. Ohne Wache war ein Diebstahl leicht möglich.`,
          objectionBy: 'Bart Ehrman / Richard Carrier',
          answer: `Ob man die Wache für historisch hält oder nicht – mein Argument hängt nicht an ihr. Entscheidend ist, dass Matthäus eine jüdische Gegenerzählung kennt, die zu seiner Zeit „bis auf den heutigen Tag" verbreitet war, und dass Justin sie um 155 unabhängig bestätigt. Diese Gegenerzählung bestreitet nicht das leere Grab, sondern erklärt es. Und das Motiv-Problem bleibt: Wer stiehlt einen Leichnam, um sich dann dafür verfolgen zu lassen?`,
          followUps: [
            {
              id: 'maertyrer-fuer-luege',
              objection: `Menschen sterben ständig für falsche Überzeugungen – denk an Selbstmordattentäter oder Sektenmitglieder. Das Martyrium beweist gar nichts.`,
              objectionBy: 'Richard Carrier',
              answer: `Richtig: Martyrium beweist nicht, dass eine Überzeugung **wahr** ist – nur, dass der Märtyrer sie für wahr hielt. Genau das ist der Punkt: Ein Selbstmordattentäter hat seine Überzeugung von anderen übernommen; er war nicht dabei. Die Apostel dagegen waren in der Position zu **wissen**, ob sie den Leichnam gestohlen hatten. Wer für eine selbst erfundene Lüge stirbt, ist psychologisch etwas völlig anderes. Ehrlich: Nicht für alle Apostel ist das Martyrium gut belegt; für Petrus, Paulus, Jakobus den Zebedäussohn und Jakobus den Herrenbruder aber schon.`,
              sources: [
                { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '5,4–7', year: 'ca. 96', quote: `Petrus erduldete viele Mühen und gelangte nach seinem Zeugnis an den gebührenden Ort der Herrlichkeit; Paulus zeigte den Kampfpreis der Geduld, … legte Zeugnis ab vor den Machthabern und schied so aus der Welt.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Apostelgeschichte', ref: '12,2', quote: `Er tötete aber Jakobus, des Johannes Bruder, mit dem Schwert.`, translation: 'Luther 1912', status: 'verbatim' },
                { kind: 'fachliteratur', author: 'Sean McDowell', work: 'The Fate of the Apostles', year: '2015', quote: `Historische Prüfung der Martyriumsberichte der Apostel mit abgestufter Wahrscheinlichkeit.`, status: 'paraphrase' },
              ],
              questionsBack: [
                `Kennst du einen Fall, in dem eine ganze Gruppe für eine Geschichte gestorben ist, die sie nachweislich selbst erfunden hatte?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'falsches-grab',
      objection: `Kirsopp Lake hatte eine einfache Erklärung: Die Frauen gingen in der Dämmerung zum falschen Grab. Ein junger Mann – vielleicht ein Friedhofsgärtner – sagte: „Er ist nicht hier, seht dort den Ort", und zeigte auf das richtige Grab. Die Frauen missverstanden ihn.`,
      objectionBy: 'Kirsopp Lake',
      answer: `Die Frauen hatten zugesehen, wo der Leichnam hingelegt wurde (Mk 15,47). Josef wusste, wo sein eigenes Grab war. Und als die Jünger öffentlich die Auferstehung verkündeten, hätte der Hohe Rat nur das richtige Grab öffnen müssen, um die Bewegung im Keim zu ersticken. Lake musste zudem die Worte des jungen Mannes „Er ist auferstanden" streichen, damit seine These funktioniert. Und auch hier: Die Erscheinungen bleiben unerklärt.`,
      followUps: [
        {
          id: 'gaertner-umbettung',
          objection: `Vielleicht wurde der Leichnam umgebettet – Josefs Grab war nur eine Notlösung vor dem Sabbat, später brachte man ihn woandershin. Maria Magdalena vermutet doch selbst: „Hast du ihn weggetragen?" (Joh 20,15). Schon Tertullian kannte die Version vom Gärtner.`,
          objectionBy: 'Verbreitete Variante (vgl. Tertullian, De spectaculis 30)',
          answer: `Eine Umbettung durch Josef oder Behörden wäre bekannt gewesen und hätte sich mühelos aufklären lassen – sobald die Jünger in Jerusalem die Auferstehung predigten, hätte man den Leichnam vorgezeigt. Niemand hat das getan. Dass Maria zuerst an einen Gärtner denkt, zeigt nur, dass die Jünger keine Auferstehung erwarteten – sie dachten an Grabraub, bis sie dem Auferstandenen begegneten. Und Umbettende wickeln keinen Leichnam aus den Tüchern.`,
          sources: [
            { kind: 'kirchenvater', author: 'Tertullian', work: 'De spectaculis', ref: '30', year: 'ca. 200', quote: `Tertullian erwähnt spöttisch die jüdische Behauptung, der Gärtner habe den Leichnam fortgeschafft, damit sein Salat nicht von den Besuchern zertreten werde.`, status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'markus-erfindet-grab',
      objection: `Paulus erwähnt kein leeres Grab. Die Geschichte taucht erst bei Markus um 70 auf – und Markus endet damit, dass die Frauen „niemandem etwas sagten" (16,8). Praktisch: So erklärt er, warum vorher niemand von einem leeren Grab gehört hatte.`,
      objectionBy: 'John Dominic Crossan / Bart Ehrman',
      answer: `Paulus' Credo – „gestorben, begraben, auferweckt am dritten Tag" – setzt das leere Grab voraus; für einen Juden war eine Auferweckung mit Leichnam im Grab keine Auferweckung. Viele Forscher sehen hinter Mk 14–16 eine ältere Passionsüberlieferung, die Jahrzehnte vor Markus entstand. Und Mk 16,8 beschreibt das erschrockene Schweigen auf dem Weg, nicht dauerhaftes Verschweigen: Unmittelbar zuvor erhalten die Frauen den Auftrag, es Petrus zu sagen (16,7). Markus schreibt ja gerade, weil die Botschaft ankam.`,
      sources: [
        { kind: 'bibel', work: 'Markus', ref: '16,7–8', quote: `Gehet aber hin und sagt's seinen Jüngern und Petrus, daß er vor euch hingehen wird nach Galiläa … Und sie gingen schnell heraus und flohen von dem Grabe; denn es war sie Zittern und Entsetzen angekommen, und sagten niemand nichts, denn sie fürchteten sich.`, translation: 'Luther 1912 (gekürzt)', status: 'paraphrase' },
        { kind: 'fachliteratur', author: 'Rudolf Pesch', work: 'Das Markusevangelium, Bd. 2', year: '1977', quote: `Pesch rekonstruiert eine vormarkinische Passionsgeschichte, die er sehr früh in der Jerusalemer Gemeinde ansetzt.`, status: 'paraphrase', note: `Peschs Frühdatierung ist umstritten; die Existenz einer vormarkinischen Passionsüberlieferung wird breiter angenommen.` },
      ],
      followUps: [
        {
          id: 'talpiot-grab',
          objection: `Und was ist mit dem Talpiot-Grab? 1980 fand man in Jerusalem Ossuare mit den Namen „Jeschua, Sohn des Josef", „Maria", „Mariamene" und „Judah, Sohn des Jeschua". Die Dokumentation „The Lost Tomb of Jesus" (2007) hat statistisch gezeigt, dass es das Familiengrab Jesu ist.`,
          objectionBy: 'Simcha Jacobovici / James Cameron',
          answer: `Die Namen gehören zu den häufigsten jüdischen Namen jener Zeit – Josef, Maria und Jeschua waren extrem verbreitet. Der Ausgräber Amos Kloner und die große Mehrheit der Archäologen und Statistiker haben die Identifikation zurückgewiesen; die Wahrscheinlichkeitsrechnung beruhte auf fragwürdigen Annahmen (etwa, dass „Mariamene" Maria Magdalena sei). Eine arme Familie aus Nazareth hätte kaum ein teures Felsengrab in Jerusalem besessen – und Jesu eigene Familie, allen voran Jakobus, leitete die Jerusalemer Gemeinde, die die leibliche Auferstehung verkündete.`,
          questionsBack: [
            `Warum hätte Jakobus, der Leiter der Jerusalemer Gemeinde, für die Auferstehung seines Bruders sein Leben gelassen, wenn er dessen Gebeine im Familiengrab wusste?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Warum behaupteten die jüdischen Gegner einen Diebstahl, statt den Leichnam vorzuzeigen?`,
    `Welche deiner Theorien erklärt das leere Grab **und** die Erscheinungen **und** die Bekehrung von Jakobus und Paulus?`,
    `Wer hätte ein Motiv gehabt, den Leichnam zu stehlen – und dann darüber zu schweigen?`,
    `Warum gibt es keine einzige konkurrierende Überlieferung über Jesu Grab?`,
  ],
  avoid: [
    `Die **Nazareth-Inschrift** (kaiserliches Edikt gegen Grabschändung) als Beweis anführen: Isotopenanalysen (Harper u. a., 2020) weisen auf Marmor von der Insel Kos; ein Bezug zu Jesus ist unsicher.`,
    `Behaupten, die Grabwache bei Matthäus sei unbestritten historisch – nicht nötig und angreifbar.`,
    `Das Turiner Grabtuch oder das Gartengrab als „das Grab Jesu" ins Spiel bringen.`,
    `„Die Jünger sind alle als Märtyrer gestorben" pauschal behaupten – die Quellenlage ist für einige Apostel dünn.`,
  ],
  concessions: [
    `Die römische Praxis, Gekreuzigte unbestattet zu lassen, ist gut belegt; das Begräbnis Jesu ist nicht selbstverständlich, sondern muss begründet werden.`,
    `Paulus erzählt keine Grabesgeschichte; das leere Grab ist bei ihm impliziert, nicht ausgeführt.`,
    `Die Evangelien unterscheiden sich in Einzelheiten des Grabbesuchs (Zahl der Frauen und Engel, Uhrzeit).`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Raymond E. Brown', work: 'The Death of the Messiah, 2 Bde.', year: '1994', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'William Lane Craig', work: 'Assessing the New Testament Evidence for the Historicity of the Resurrection of Jesus', year: '1989', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Craig A. Evans', work: 'Jesus and the Ossuaries', year: '2003', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Sean McDowell', work: 'The Fate of the Apostles', year: '2015', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Leeres Grab', 'Josef von Arimathäa', 'Grabraub', 'Begräbnis', 'Talpiot'],
  related: [
    'auferstehung/halluzinationen',
    'auferstehung/scheintod',
    'auferstehung/legende-entwickelte-sich',
    'islam-kreuzigung/ersatztheorie-taeuschung',
  ],
};

export default claim;
