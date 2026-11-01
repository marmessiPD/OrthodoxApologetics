import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'ausserirdische-widerlegen-bibel',
  title: `„Außerirdisches Leben würde die Bibel widerlegen."`,
  proponents: [
    { name: 'Thomas Paine (†1809)', role: 'Publizist und Deist', work: 'The Age of Reason (1794), Teil I' },
    { name: 'Paul Davies', role: 'Theoretischer Physiker und Astrobiologe, Arizona State University', work: 'Are We Alone? (1995); „E.T. and God", The Atlantic (September 2003)' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: 'Öffentliche Vorträge und Interviews' },
  ],
  steelman: `Die Bibel ist ein durch und durch erdzentriertes Buch: Ein Gott, ein Planet, eine Menschheit, eine Erlösung. Gott wird Mensch – ein Erdbewohner –, stirbt einmal auf einem Hügel bei Jerusalem und erlöst damit … wen genau? Wenn es im Universum Milliarden bewohnter Welten gibt, ist diese Geschichte entweder absurd provinziell, oder Christus müsste auf jedem Planeten erneut sterben. Thomas Paine hat schon 1794 argumentiert, dass der Glaube an viele Welten den christlichen Glauben „klein und lächerlich" macht. Die Entdeckung außerirdischer Intelligenz würde den Anspruch, der Mensch sei Krone der Schöpfung und Mittelpunkt der Heilsgeschichte, endgültig erledigen.`,
  biblical: {
    summary: `Die Bibel sagt weder, dass es außerirdisches Leben gibt, noch, dass es keines gibt. Sie ist kein Katalog aller Geschöpfe, sondern die Geschichte Gottes mit den Menschen. Bemerkenswert: Die Schrift kennt bereits nichtmenschliche vernünftige Geschöpfe – die Engel. Die Vorstellung, dass Gott außer dem Menschen andere Vernunftwesen geschaffen hat, ist ihr also keineswegs fremd. Christus wird zudem als Schöpfer und Versöhner von „allem im Himmel und auf Erden" beschrieben (Kol 1,16–20).`,
    detail: `- **Hiob 38,7:** Bei der Gründung der Erde „jauchzten alle Kinder Gottes" – Geschöpfe, die vor dem Menschen da waren.
- **Hebr 1,14; Ps 103,20:** Engel als dienende Geister, vernünftige Geschöpfe, die nicht Menschen sind.
- **Kol 1,16–20:** Der Logos ist Schöpfer des Sichtbaren und Unsichtbaren und versöhnt „alles", im Himmel und auf Erden.
- **Hebr 9,26; Röm 6,10:** Christus ist „ein für alle Mal" (*ephapax*) gestorben – eine Aussage über die menschliche Heilsgeschichte.
- **Vorsicht:** Joh 10,16 („andere Schafe") bezieht sich im Kontext auf Heiden, nicht auf Außerirdische.`,
    sources: [
      { kind: 'bibel', work: 'Hiob', ref: '38,7', quote: `… da mich die Morgensterne miteinander lobten und jauchzten alle Kinder Gottes?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Kolosser', ref: '1,19–20', quote: `Denn es ist das Wohlgefallen gewesen, daß in ihm alle Fülle wohnen sollte und alles durch ihn versöhnt würde zu ihm selbst, es sei auf Erden oder im Himmel …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '147,4', quote: `Er zählt die Sterne und nennt sie alle mit Namen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hebräer', ref: '9,26', quote: `Nun aber, am Ende der Welt, ist er einmal erschienen, durch sein eigen Opfer die Sünde aufzuheben.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche hat keine Lehre über außerirdisches Leben. Der hl. Athanasius betont, dass der Logos, auch während er im Leib auf Erden war, das ganze Universum erfüllte und lenkte (*De Incarnatione* 17) – der menschgewordene Logos ist zugleich der Logos des ganzen Kosmos. In *De Incarnatione* 43 fragt er sogar, warum der Logos nicht in einem „edleren" Teil der Schöpfung erschien, etwa in Sonne oder Sternen, und antwortet: Er kam dorthin, wo Heilung nötig war – zum Menschen.`,
    detail: `Im christlichen Westen galt die Möglichkeit vieler Welten nie als undenkbar: 1277 verurteilte der Bischof von Paris die These, Gott könne keine weiteren Welten erschaffen; Nikolaus von Kues spekulierte 1440 in *De docta ignorantia* über Bewohner anderer Gestirne; C. S. Lewis und die Vatikanische Sternwarte haben das Thema im 20. und 21. Jahrhundert offen diskutiert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '17', year: 'ca. 318', quote: `Der Logos war nicht im Leib eingeschlossen; während er im Leib wirkte, erfüllte und belebte er zugleich das ganze All.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '43', year: 'ca. 318', quote: `Warum erschien er nicht durch edlere Teile der Schöpfung wie Sonne, Mond oder Sterne? Weil er nicht kam, um sich zur Schau zu stellen, sondern um die Leidenden zu heilen – und das war der Mensch.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Ehrlicher Forschungsstand: Bisher gibt es keinen Nachweis außerirdischen Lebens. SETI sucht seit 1960 (Projekt Ozma) nach Signalen, ohne Erfolg; das Fermi-Paradox („Wo sind sie alle?") ist ungelöst. Mehrere behauptete Biosignaturen haben sich nicht bestätigt oder sind umstritten (Phosphin auf der Venus 2020; Dimethylsulfid auf K2-18b 2025). Die Drake-Gleichung enthält Faktoren, deren Werte völlig unbekannt sind. Umfragen (z. B. Ted Peters' „ETI Religious Crisis Survey") deuten darauf hin, dass die meisten Gläubigen keine Glaubenskrise durch eine Entdeckung erwarten.`,
    detail: `Der Physiker Paul Davies, selbst kein Christ, hat das Thema theologisch ernsthaft durchdacht und auf die Frage nach mehrfacher Inkarnation hingewiesen. Gleichzeitig zeigen theologische Arbeiten (Lewis, Consolmagno, Peters), dass die christliche Tradition mehrere konsistente Antworten bereithält.`,
    sources: [
      { kind: 'gegner', author: 'Thomas Paine', work: 'The Age of Reason, Teil I', year: '1794', quote: `Wer an eine Vielzahl von Welten glaubt, für den wird das christliche Glaubenssystem klein und lächerlich.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Paul Davies', work: '„E.T. and God", The Atlantic Monthly', year: 'September 2003', quote: `Die Entdeckung außerirdischer Intelligenz würde besonders das Christentum mit seiner einmaligen Inkarnation vor schwierige Fragen stellen.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Ted Peters', work: 'Astrotheology: Science and Theology Meet Extraterrestrial Life (Hg. mit M. Hewlett u. a.)', year: '2018', quote: `Umfragen zeigen, dass die meisten Gläubigen durch die Entdeckung außerirdischen Lebens keine Glaubenskrise erwarten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Bibel sagt weder Ja noch Nein zu Leben anderswo. Sie kennt sogar schon nichtmenschliche Vernunftwesen – die Engel –, andere Geschöpfe wären also kein Schock. Christen von Nikolaus von Kues über C. S. Lewis bis zur Vatikanischen Sternwarte haben diese Frage durchdacht. Mikroben auf dem Mars würden keine einzige Glaubenslehre berühren; intelligente Außerirdische würden spannende Fragen aufwerfen – aber Gottes Liebe hängt nicht an Zahlen.`,
  keyPoints: [
    `**Die Bibel schweigt:** Sie ist die Geschichte Gottes mit den Menschen, kein Verzeichnis aller Geschöpfe.`,
    `**Engel zeigen:** Nichtmenschliche Vernunftwesen sind der Schrift vertraut.`,
    `**Mikroben sind kein Problem:** Einfaches Leben anderswo berührt keine Glaubenslehre – und erklärt nicht, wie Leben entsteht.`,
    `**Mehrere theologische Optionen:** Nicht gefallene Wesen, andere Wege Gottes, oder die kosmische Reichweite der einen Inkarnation (Kol 1,20) – C. S. Lewis hat sie durchgespielt.`,
    `**Kein Beleg bisher:** SETI seit 1960 ohne Signal; Biosignatur-Meldungen umstritten.`,
  ],
  voices: [
    {
      person: 'cs-lewis',
      role: 'als Apologet und Science-Fiction-Autor',
      text: `Lewis hat die Frage in seinem Essay „Religion and Rocketry" (zuerst 1958 unter dem Titel „Will We Lose God in Outer Space?") durchdacht. Er unterscheidet mehrere Möglichkeiten: Vielleicht gibt es Vernunftwesen, die nie gefallen sind und keiner Erlösung bedürfen; vielleicht sind sie gefallen und Gott erlöst sie auf eine Weise, die wir nicht kennen; vielleicht ist die Erlösung der Menschheit der Anfang einer Erlösung, die sich auf die ganze Schöpfung ausbreitet. Keine dieser Möglichkeiten widerspricht dem christlichen Glauben. Lewis' Romane *Out of the Silent Planet* und *Perelandra* spielen genau diese Szenarien literarisch durch.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Religion and Rocketry", in: The World’s Last Night and Other Essays', year: '1960 (zuerst 1958)', quote: `Die Existenz außerirdischer Vernunftwesen würde den christlichen Glauben nicht widerlegen; sie würde nur Fragen aufwerfen, auf die die Tradition mehrere mögliche Antworten hat.`, status: 'paraphrase' }],
    },
    {
      person: 'guy-consolmagno',
      role: 'als Planetologe und Direktor der Vatikanischen Sternwarte',
      text: `Consolmagno hat mit seinem Mitbruder Paul Mueller das Buch *Would You Baptize an Extraterrestrial?* (2014) geschrieben – der Titel geht auf eine Frage zurück, die ihm Besucher immer wieder stellten. Seine Antwort: „Nur wenn sie darum bitten." Ernsthaft gemeint ist damit: Wenn wir vernünftigen Wesen begegneten, die zu Erkenntnis, Liebe und Freiheit fähig sind, würden wir sie als Mitgeschöpfe Gottes betrachten. Als Wissenschaftler betont Consolmagno, dass es bisher keinen Nachweis gibt; als Christ, dass eine Entdeckung den Glauben eher bereichern als bedrohen würde.`,
      sources: [{ kind: 'fachliteratur', author: 'Guy Consolmagno & Paul Mueller', work: 'Would You Baptize an Extraterrestrial? … and Other Questions from the Astronomers’ In-box at the Vatican Observatory', year: '2014', quote: `Vernünftige außerirdische Wesen wären Mitgeschöpfe Gottes; ihre Entdeckung würde den Glauben nicht widerlegen.`, status: 'paraphrase' }],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Inkarnation',
      text: `Athanasius beantwortet eine Frage, die der des modernen Skeptikers erstaunlich ähnelt: Warum wurde der Logos gerade Mensch und erschien nicht in einem erhabeneren Teil der Schöpfung – in Sonne, Mond oder Sternen? Seine Antwort: Der Logos kam nicht, um Eindruck zu machen, sondern um zu heilen, und er ging dorthin, wo die Krankheit war. Zugleich betont er, dass der menschgewordene Logos nie aufhörte, das ganze Universum zu tragen. Für Athanasius ist die Menschwerdung also keine Verkleinerung Gottes auf einen Planeten, sondern die Zuwendung des kosmischen Logos zu einem bedürftigen Geschöpf.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '17; 43', year: 'ca. 318', quote: `Der Logos erschien als Mensch, weil der Mensch der Heilung bedurfte; dabei hörte er nicht auf, das All zu erfüllen.`, status: 'paraphrase' }],
    },
    {
      person: 'paulus',
      role: 'als Apostel des kosmischen Christus',
      text: `Im Kolosserbrief beschreibt Paulus Christus als das Bild des unsichtbaren Gottes, durch den alles geschaffen ist – „das Sichtbare und das Unsichtbare" – und in dem alles Bestand hat. Gott wollte durch ihn „alles versöhnen, es sei auf Erden oder im Himmel" (Kol 1,15–20). Dieser Text hat eine kosmische Weite, die weit über die Erde hinausreicht. Wer meint, die christliche Botschaft sei auf einen Planeten beschränkt, hat diese Dimension der apostolischen Christologie übersehen.`,
      sources: [{ kind: 'bibel', work: 'Kolosser', ref: '1,15–17', quote: `… welcher ist das Ebenbild des unsichtbaren Gottes, der Erstgeborene vor allen Kreaturen. Denn durch ihn ist alles geschaffen, das im Himmel und auf Erden ist, das Sichtbare und Unsichtbare …`, translation: 'Luther 1912', status: 'verbatim' }],
    },
  ],
  dialog: [
    {
      id: 'christus-auf-jedem-planeten',
      objection: `Wenn es Milliarden Zivilisationen gibt – ist Christus dann auf jedem Planeten gestorben? Das ist absurd.`,
      objectionBy: 'Thomas Paine',
      answer: `Wir wissen nicht, ob es überhaupt andere Zivilisationen gibt. Wenn ja, gibt es mehrere Möglichkeiten, die C. S. Lewis durchdacht hat: Sie könnten nie gefallen sein und keine Erlösung brauchen; Gott könnte ihnen auf andere Weise begegnen; oder die eine Menschwerdung hat kosmische Reichweite, wie Kol 1,20 andeutet. Keine dieser Möglichkeiten ist widersprüchlich.`,
      questionsBack: [`Warum setzt du voraus, dass alle Vernunftwesen gefallen sind und auf dieselbe Weise erlöst werden müssten?`],
      followUps: [
        {
          id: 'ein-fuer-allemal-dilemma',
          objection: `Hebräer 9,26 sagt, Christus sei „ein für alle Mal" erschienen. Also kann es keine weiteren Inkarnationen geben – und dann bleiben die Außerirdischen unerlöst. Ein Dilemma.`,
          objectionBy: 'Paul Davies',
          answer: `„Ein für alle Mal" bezieht sich auf die menschliche Heilsgeschichte und schließt die Wiederholung des Opfers für uns aus. Die Theologen bieten zwei konsistente Wege: Entweder hat die eine Inkarnation kosmische Wirkung („alles … im Himmel und auf Erden", Kol 1,20), oder Gott steht zu anderen Geschöpfen in einer anderen Beziehung, die die Schrift nicht beschreibt. Ein Dilemma entsteht nur, wenn man unterstellt, dass es nur eine einzige denkbare Weise göttlichen Handelns gibt.`,
          detail: `Für die koptische Christologie ist wichtig: Der Logos hat sich mit der menschlichen Natur vereint, ohne aufzuhören, der Logos der ganzen Schöpfung zu sein (Athanasius, *De Incarnatione* 17). Die Inkarnation ist nicht eine Einschränkung Gottes auf einen Ort, sondern seine Zuwendung zu einem Geschöpf.`,
          followUps: [
            {
              id: 'mensch-nicht-besonders',
              objection: `Dann ist der Mensch doch nicht so besonders, wie ihr immer behauptet.`,
              objectionBy: 'Neil deGrasse Tyson',
              answer: `Der Wert des Menschen beruht nicht darauf, dass er das einzige Vernunftwesen ist, sondern darauf, dass Gott ihn liebt und nach seinem Bild geschaffen hat. Jesus erzählt vom Hirten, der die 99 Schafe zurücklässt, um das eine verlorene zu suchen (Lk 15,4) – Wert entsteht durch Zuwendung, nicht durch Seltenheit.`,
              followUps: [
                {
                  id: 'inkarnation-provinziell',
                  objection: `Dass der Schöpfer von zwei Billionen Galaxien ausgerechnet als Primat auf einem kleinen Planeten zur Welt gekommen sein soll, ist kosmischer Provinzialismus. Das ist eine Vorstellung aus einer Zeit, in der die Erde die ganze Welt war.`,
                  objectionBy: 'Paul Davies / Neil deGrasse Tyson',
                  answer: `Die Kirche hat die Menschwerdung nie für naheliegend gehalten – Paulus nennt sie den Griechen eine Torheit (1 Kor 1,23). Aber jede Menschwerdung müsste irgendwo, in irgendeinem konkreten Geschöpf geschehen; Konkretheit ist kein Einwand, sondern das Wesen der Sache. Und der Logos wird dabei nicht klein: Athanasius betont, dass er im Leib war und zugleich das ganze All erfüllte und lenkte. Gott verlässt den Kosmos nicht, wenn er Mensch wird.`,
                  detail: `Die koptisch-orthodoxe Christologie bekennt mit dem hl. Kyrill „eine fleischgewordene Natur des Gott-Logos": Gottheit und Menschheit sind geeint ohne Vermischung, ohne Verwandlung, ohne Trennung. Der Logos bleibt unendlich und allgegenwärtig, auch während er in Bethlehem als Kind liegt. Die Größe des Universums macht die Menschwerdung deshalb nicht unwahrscheinlicher, sondern ihre Demut größer: Der, der die Galaxien trägt, macht sich klein – „aus Liebe zum Menschen", wie die koptische Liturgie immer wieder sagt.`,
                  voices: [
                    { person: 'athanasius', role: 'als Lehrer der Menschwerdung', text: `Athanasius schreibt, dass der Logos nicht im Leib eingeschlossen war, als hätte er anderswo gefehlt. Während er im menschlichen Leib wirkte, belebte er zugleich das All, war in allem und doch außerhalb von allem (De Incarnatione 17). Die Menschwerdung ist daher keine Verkleinerung Gottes, sondern sein freies Herabsteigen, ohne aufzuhören, der Schöpfer und Erhalter des Ganzen zu sein.` },
                  ],
                  sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '17', year: 'ca. 335', quote: `Der Logos war nicht im Leib eingeschlossen; er war im Leib und belebte doch zugleich das All, in allem und außerhalb von allem.`, status: 'paraphrase' }],
                  questionsBack: [`Wenn Gott Mensch werden wollte – wo und in welchem Geschöpf hätte es geschehen sollen, damit es nicht „provinziell" wirkt?`],
                  followUps: [
                    {
                      id: 'mehrfache-inkarnation',
                      objection: `Wenn der Logos so unbegrenzt ist, könnte er ja auch auf anderen Planeten Fleisch werden. Dann ist die Einzigartigkeit Christi dahin – und mit ihr der Kern deines Glaubens.`,
                      objectionBy: 'Paul Davies',
                      answer: `Hier muss ich ehrlich sagen: Darüber hat die Kirche nichts entschieden, weil Gott darüber nichts offenbart hat. Was wir wissen, ist dies: Der Logos hat die menschliche Natur angenommen, für immer – er ist mit seinem Leib aufgefahren und wird so wiederkommen. Diese Einheit in Christus ist einzigartig und unwiderruflich. Ob und wie Gott sich anderen Geschöpfen zuwendet, ist eine Frage, die wir nicht beantworten können und nicht beantworten müssen. Unser Glaube hängt an dem, was offenbart ist, nicht an dem, was über andere Welten spekuliert wird.`,
                      detail: `Christliche Denker haben unterschiedliche Spekulationen vorgelegt: C. S. Lewis hielt es für möglich, dass andere Geschöpfe nie gefallen sind oder dass Gott andere Wege mit ihnen geht; Guy Consolmagno (Vatikanische Sternwarte) betont, dass die eine Menschwerdung kosmische Bedeutung haben kann (Kol 1,20: „alles versöhnt … im Himmel und auf Erden"). Aus koptisch-orthodoxer Sicht gilt: Spekulationen dürfen die Einheit der Person Christi nicht antasten – es gibt nicht „mehrere Christusse". Für das Gespräch genügt: Das Christentum ist durch diese Frage nicht widerlegt, sondern vor eine Frage gestellt, die es mit Demut offenlassen darf.`,
                      voices: [
                        { person: 'cs-lewis', role: 'als Schriftsteller und Apologet', text: `Lewis zählt in „Religion and Rocketry" (1958) Möglichkeiten auf: Andere vernünftige Geschöpfe könnten nie gefallen sein; sie könnten gefallen und auf andere Weise erlöst worden sein; oder die Erlösung auf der Erde könnte für sie Bedeutung haben. Sein Schluss: Wir wissen zu wenig, um daraus einen Einwand gegen das Christentum zu machen – und die eigentliche Gefahr bei einer Begegnung läge eher in unserer Neigung, andere Geschöpfe auszubeuten.` },
                        { person: 'guy-consolmagno', role: 'als Astronom der Vatikanischen Sternwarte', text: `Consolmagno betont, dass er einen Außerirdischen gegebenenfalls taufen würde, wenn dieser darum bäte – eine pointierte Art zu sagen, dass Vernunftwesen von Gott geliebt sind, wo immer sie existieren. Ob es sie gibt, sei eine empirische Frage, die der Glaube gelassen offenlassen könne.` },
                      ],
                      sources: [
                        { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Religion and Rocketry", in: The World’s Last Night and Other Essays', year: '1958/1960', quote: `Ob andere Geschöpfe gefallen und erlöst sind, wissen wir nicht; aus diesem Nichtwissen lässt sich kein Argument gegen das Christentum machen.`, status: 'paraphrase' },
                        { kind: 'bibel', work: 'Kolosser', ref: '1,19–20', quote: `Es gefiel Gott, durch ihn alles mit sich zu versöhnen, es sei auf Erden oder im Himmel.`, status: 'paraphrase' },
                      ],
                      questionsBack: [`Muss ein Glaube auf jede Frage über ferne Welten eine Antwort haben – oder darf er offenlassen, was nicht offenbart ist?`],
                    },
                  ],
                },
              ],
            },
            {
              id: 'unerloeste-aliens-ungerecht',
              objection: `Wenn es gefallene Außerirdische gibt, für die Christus nicht gestorben ist, dann wäre dein Gott ungerecht: Er rettet eine Spezies und lässt die anderen verloren gehen.`,
              objectionBy: 'Paul Davies (zugespitzt)',
              answer: `Dieser Einwand stapelt vier Annahmen aufeinander: dass es Außerirdische gibt, dass sie moralisch verantwortliche Wesen sind, dass sie gefallen sind und dass Gott keinen Weg zu ihnen hat. Keine davon wissen wir. Was wir wissen, ist, wie Gott sich in Christus gezeigt hat: als einer, der dem Verlorenen nachgeht, bis er es findet. Auf dieser Grundlage darf man Abraham folgen: „Sollte der Richter aller Welt nicht gerecht richten?" (Gen 18,25).`,
              detail: `Aus einer Kette unbekannter Annahmen lässt sich kein Vorwurf der Ungerechtigkeit ableiten. Die Kirche lehrt, dass Gott „will, dass alle Menschen gerettet werden" (1 Tim 2,4) – über andere Geschöpfe schweigt die Offenbarung. Wer den Einwand bringt, muss zugestehen, dass er von einem rein hypothetischen Szenario auf eine Eigenschaft Gottes schließt, die der Offenbarung in Christus widerspricht. Gelassenheit ist hier die ehrliche Antwort.`,
              sources: [{ kind: 'bibel', work: '1. Mose', ref: '18,25', quote: `Sollte der Richter aller Welt nicht gerecht richten?`, status: 'paraphrase' }],
              questionsBack: [`Wie viele unbekannte Annahmen braucht dein Szenario – und was bleibt von dem Vorwurf übrig, wenn eine davon falsch ist?`],
            },
          ],
        },
      ],
    },
    {
      id: 'bibel-geozentrisch',
      objection: `Die Bibel ist geozentrisch. Ihre Verfasser konnten sich andere Welten gar nicht vorstellen.`,
      objectionBy: 'Gesprächspartner',
      answer: `Die Bibel spricht von „aller Himmel Himmel", die Gott nicht fassen können (1 Kön 8,27), und von Gott als Schöpfer des „Unsichtbaren". Christliche Denker haben die Möglichkeit anderer Welten seit dem Mittelalter diskutiert: 1277 wurde in Paris sogar die These verurteilt, Gott könne keine weiteren Welten erschaffen; Nikolaus von Kues spekulierte 1440 über Bewohner anderer Sterne.`,
      sources: [{ kind: 'bibel', work: '1. Könige', ref: '8,27', quote: `Siehe, der Himmel und aller Himmel Himmel können dich nicht fassen …`, translation: 'Luther 1912 (sinngemäß)', status: 'paraphrase' }],
      followUps: [
        {
          id: 'giordano-bruno',
          objection: `Und trotzdem wurde Giordano Bruno 1600 verbrannt, weil er an unendlich viele Welten glaubte.`,
          objectionBy: 'Neil deGrasse Tyson (Cosmos, 2014)',
          answer: `Brunos Hinrichtung war ein Unrecht. Aber er wurde vor allem wegen theologischer Lehren verurteilt – etwa der Leugnung der Dreieinigkeit und der Gottheit Christi –, nicht wegen seiner Kosmologie allein. Die Lehre von vielen Welten war ein Punkt unter vielen. Er taugt nicht als Beleg, dass das Christentum andere Welten fürchtet.`,
          detail: `Ausführlich im Claim „Giordano Bruno wurde für die Wissenschaft verbrannt".`,
          followUps: [
            {
              id: 'kirche-gegen-andere-welten',
              objection: `Bruno ist nur das bekannteste Beispiel. Die Kirche hat die Vorstellung anderer Welten grundsätzlich bekämpft, weil sie die Sonderstellung der Erde bedrohte.`,
              objectionBy: 'Neil deGrasse Tyson',
              answer: `Historisch war es eher umgekehrt. 1277 verurteilte der Bischof von Paris eine Reihe aristotelischer Thesen – darunter die Behauptung, Gott *könne* nicht mehrere Welten erschaffen. Die Kirche verteidigte also Gottes Freiheit, andere Welten zu schaffen, gegen die Philosophen. Im 15. Jahrhundert spekulierte Kardinal Nikolaus von Kues ohne jede Verurteilung über Bewohner anderer Sterne. Die Frage war lange offen und wurde unter Theologen frei diskutiert.`,
              detail: `Wissenschaftshistoriker wie Pierre Duhem haben die Verurteilung von 1277 sogar als einen Anstoß für die Befreiung der Naturphilosophie von aristotelischen Denkverboten gedeutet; diese These gilt heute als zugespitzt, aber der Kern stimmt: Die Theologie bestand darauf, dass die Welt nicht notwendig so sein muss, wie Aristoteles sie beschrieb – sie hängt vom freien Willen Gottes ab und muss deshalb beobachtet, nicht nur erdacht werden. Nikolaus von Kues schrieb in *De docta ignorantia* (1440, II,12), man dürfe annehmen, dass auch andere Sternregionen bewohnt seien.`,
              sources: [
                { kind: 'konzil', author: 'Étienne Tempier, Bischof von Paris', work: 'Verurteilung von 219 Thesen (Condemnation of 1277)', year: '1277', quote: `Verurteilt wurde unter anderem der Satz, die erste Ursache könne nicht mehrere Welten erschaffen.`, original: `Quod prima causa non posset plures mundos facere.`, status: 'paraphrase', note: 'Lokale Verurteilung durch den Pariser Bischof, keine gesamtkirchliche Entscheidung.' },
                { kind: 'fachliteratur', author: 'Nikolaus von Kues', work: 'De docta ignorantia', ref: 'II,12', year: '1440', quote: `Es sei anzunehmen, dass keine Sternregion ohne Bewohner sei.`, status: 'paraphrase' },
              ],
              questionsBack: [`Kennst du die Verurteilung von 1277? Was wurde dort über die Möglichkeit mehrerer Welten entschieden?`],
            },
          ],
        },
      ],
    },
    {
      id: 'mikroben-auf-mars',
      objection: `Sobald wir Mikroben auf dem Mars oder auf einem Jupitermond finden, ist die Genesis erledigt: Leben entsteht überall von selbst.`,
      objectionBy: 'Paul Davies (zugespitzt)',
      answer: `Ein Fund würde zuerst nur zeigen, *dass* es dort Leben gibt – nicht, *wie* es entstand. Es könnte sogar von der Erde stammen (Gesteinsaustausch durch Meteoriten). Und die Genesis sagt, dass Gott Lebewesen geschaffen hat – sie beschränkt das nicht auf die Erde. Das Rätsel der Lebensentstehung bliebe genau so groß.`,
      followUps: [
        {
          id: 'zweite-genesis-leicht',
          objection: `Wenn Leben zweimal unabhängig entstanden ist, dann ist es offensichtlich leicht – kein Schöpfer nötig.`,
          objectionBy: 'Astrobiologe',
          answer: `Dann würde es zeigen, dass die Naturgesetze in erstaunlichem Maß lebensfreundlich sind – also mehr Feinabstimmung, nicht weniger. „Häufig" heißt nicht „ungelenkt". Und den chemischen Weg zum ersten Leben müsste man trotzdem erst finden – derzeit ist er völlig unklar.`,
          detail: `Siehe die Themenblöcke „Der Ursprung des Lebens" und „Die Feinabstimmung des Universums".`,
          followUps: [
            {
              id: 'zutaten-ueberall',
              objection: `Die Zutaten sind überall: Auf dem Saturnmond Enceladus gibt es einen Ozean unter dem Eis, hydrothermale Aktivität, organische Moleküle und sogar Phosphate. Wo alle Zutaten vorhanden sind, entsteht Leben früher oder später von selbst.`,
              objectionBy: 'Astrobiologe',
              answer: `Enceladus ist ein großartiges Forschungsziel, und die Funde sind beeindruckend. Aber Zutaten sind kein Rezept. Eine Küche voller Mehl, Eier und Zucker backt keinen Kuchen; ein Ozean voller organischer Moleküle baut keine Zelle. Der schwierige Teil ist nicht, Bausteine zu finden, sondern sie zu funktionierenden, informationstragenden Systemen zusammenzusetzen – und genau dafür gibt es bis heute keinen bekannten ungelenkten Weg.`,
              detail: `Die Raumsonde Cassini fand in den Fontänen von Enceladus Wasser, Salze, organische Verbindungen und Hinweise auf hydrothermale Prozesse; 2023 wurden auch Phosphate nachgewiesen (Postberg u. a., *Nature*). Das macht den Mond zu einem der aussichtsreichsten Orte für die Suche nach Leben. Der Synthesechemiker James Tour weist darauf hin, dass die Ursprungs-des-Lebens-Forschung nicht an fehlenden Rohstoffen scheitert, sondern an der Organisation: an der richtigen Reihenfolge, Reinheit, Händigkeit und Information.`,
              voices: [
                { person: 'james-tour', role: 'als synthetischer Chemiker', text: `Tour betont, dass ein Haufen der richtigen Moleküle noch keine Zelle ist. Selbst im bestausgestatteten Labor gelingt es nicht, aus Bausteinen funktionierendes Leben zusammenzusetzen; unter präbiotischen Bedingungen – ohne Chemiker, die reinigen, schützen und in der richtigen Reihenfolge zugeben – ist das Problem noch größer. Das Vorhandensein von Zutaten erklärt nicht die Entstehung von Information.` },
              ],
              sources: [{ kind: 'wissenschaft', author: 'Frank Postberg u. a.', work: '„Detection of phosphates originating from Enceladus’s ocean", Nature 618', year: '2023', quote: `In Eiskörnern aus den Fontänen von Enceladus wurden Phosphate nachgewiesen, die aus dem unterirdischen Ozean stammen.`, status: 'paraphrase' }],
              questionsBack: [`Backt eine Küche voller Zutaten von selbst einen Kuchen? Was fehlt zwischen Bausteinen und Zelle?`],
            },
          ],
        },
      ],
    },
    {
      id: 'fermi-verschwendung',
      objection: `Wenn es niemanden sonst gibt – das Fermi-Paradox –, dann ist das Universum eine absurde Verschwendung. Und wenn es viele gibt, ist der Mensch unbedeutend. Beides spricht gegen die Bibel.`,
      objectionBy: 'Gesprächspartner',
      answer: `Das ist ein Argument, das in beide Richtungen „funktioniert" – und deshalb nichts beweist. Gibt es kein weiteres Leben, passt das zur Seltenheit der Bedingungen (Feinabstimmung, seltene Erde). Gibt es viel Leben, zeigt es die Großzügigkeit des Schöpfers. Größe und Alter des Universums sind zudem Voraussetzungen für Leben, keine Verschwendung.`,
      followUps: [
        {
          id: 'unheimliches-schweigen',
          objection: `Seit über sechzig Jahren lauscht SETI – und hört nichts. Das „unheimliche Schweigen" legt nahe, dass Intelligenz extrem selten ist: ein unwahrscheinlicher Zufall der Evolution, kein Ziel. Das ist ein Problem für jede Religion, die den Menschen als beabsichtigt ansieht.`,
          objectionBy: 'Paul Davies',
          answer: `Dass etwas selten ist, heißt nicht, dass es zufällig ist – ein Meisterwerk ist auch selten. Im Gegenteil: Wenn Intelligenz extrem unwahrscheinlich ist, muss der Naturalismus erklären, warum sie hier dennoch entstanden ist. Unter der Annahme eines Schöpfers, der erkennende Geschöpfe will, ist unsere Existenz erwartbar; unter blindem Zufall ist sie ein extremer Glücksfall. Das Schweigen spricht also nicht gegen die Absicht, sondern verschärft die Frage, die nur die Absicht gut beantwortet.`,
          detail: `Davies nennt in *The Eerie Silence* (2010) verschiedene mögliche Gründe für das Schweigen: Intelligenz könnte selten sein, Zivilisationen könnten kurzlebig sein, oder wir suchen falsch. Er bleibt dabei ein nachdenklicher Agnostiker, der die Frage nach Sinn ernst nimmt. Für das Gespräch: Beide Ausgänge – viel oder wenig Leben – sind mit dem christlichen Glauben vereinbar; aber „sehr selten" ist für den Naturalismus keineswegs bequemer.`,
          sources: [{ kind: 'gegner', author: 'Paul Davies', work: 'The Eerie Silence: Renewing Our Search for Alien Intelligence', year: '2010', quote: `Das Ausbleiben von Signalen nach Jahrzehnten der Suche könne darauf hindeuten, dass Intelligenz im Universum sehr selten ist – oder dass wir falsch suchen.`, status: 'paraphrase' }],
          questionsBack: [`Wenn Intelligenz extrem unwahrscheinlich ist – unter welcher Hypothese ist unsere Existenz dann besser erklärt?`],
          followUps: [
            {
              id: 'conway-morris-konvergenz',
              objection: `Euer eigenes Lager ist sich nicht einig. Der Christ Simon Conway Morris sagt, die Evolution laufe auf Intelligenz zu – dann müsste es überall Intelligenz geben. Andere Christen sagen, die Erde sei einzigartig. Was denn nun?`,
              objectionBy: 'Sean Carroll',
              answer: `Dass Christen über eine offene empirische Frage verschiedener Meinung sind, ist ein Zeichen von Ehrlichkeit, nicht von Schwäche – Naturalisten sind sich da genauso uneinig. Interessant ist aber, was beide christlichen Positionen verbindet: Conway Morris sagt, die Naturgesetze und die Biochemie seien so beschaffen, dass Evolution immer wieder zu denselben Lösungen findet – bis hin zu Intelligenz. Das ist selbst eine Form von Zielgerichtetheit in der Natur. Ob Intelligenz also häufig ist (weil die Gesetze darauf angelegt sind) oder selten (weil die Bedingungen so eng sind) – in beiden Fällen weist der Befund über den blinden Zufall hinaus.`,
              voices: [
                { person: 'conway-morris', role: 'als Paläontologe und Evolutionsbiologe', text: `Conway Morris dokumentiert in *Life’s Solution* (2003) zahlreiche Fälle von Konvergenz: Linsenaugen, Echoortung, Intelligenz und Werkzeuggebrauch sind in der Evolution mehrfach unabhängig entstanden. Er folgert, dass der Raum möglicher Lebensformen stark eingeschränkt ist und die Evolution vorhersagbarer ist, als oft angenommen. Für ihn passt das zu einer Schöpfung, in der Gottes Absicht in die Struktur der Natur eingeschrieben ist.` },
              ],
              sources: [{ kind: 'wissenschaft', author: 'Simon Conway Morris', work: 'Life’s Solution: Inevitable Humans in a Lonely Universe', year: '2003', quote: `Konvergente Evolution zeige, dass bestimmte Lösungen – bis hin zu Intelligenz – nahezu unvermeidlich seien, sofern die Bedingungen für Leben gegeben sind.`, status: 'paraphrase' }],
              questionsBack: [`Wenn die Naturgesetze so angelegt sind, dass Evolution immer wieder auf Intelligenz zuläuft – ist das blinder Zufall oder eine eingebaute Richtung?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welcher Bibelvers schließt außerirdisches Leben aus?`,
    `Warum sollten alle Vernunftwesen gefallen sein und auf dieselbe Weise erlöst werden müssen?`,
    `Würde ein Mikrobenfund auf dem Mars erklären, wie Leben aus unbelebter Materie entsteht?`,
    `Wenn Engel als nichtmenschliche Vernunftwesen in der Bibel vorkommen – warum wären Außerirdische ein Problem?`,
  ],
  avoid: [
    `„UFOs sind Dämonen." – Spekulation ohne Grundlage, die dich unglaubwürdig macht.`,
    `„Die Bibel beweist, dass es keine Außerirdischen gibt." – Sie sagt dazu nichts.`,
    `Joh 10,16 („andere Schafe") auf Außerirdische beziehen – im Kontext sind die Heiden gemeint.`,
  ],
  concessions: [
    `Die Entdeckung intelligenter Außerirdischer würde echte theologische Fragen aufwerfen (Fall, Erlösung, Inkarnation), auf die die Kirche keine dogmatisch festgelegte Antwort hat.`,
    `Manche christliche Denker der Vergangenheit hielten die Erde für den einzigen bewohnten Ort und sahen in der Vielzahl der Welten ein Problem.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Religion and Rocketry", in: The World’s Last Night', year: '1960', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Guy Consolmagno & Paul Mueller', work: 'Would You Baptize an Extraterrestrial?', year: '2014', status: 'paraphrase' },
    { kind: 'gegner', author: 'Paul Davies', work: 'Are We Alone?', year: '1995', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', year: 'ca. 318', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Außerirdische', 'SETI', 'Inkarnation', 'C. S. Lewis', 'Vatikanische Sternwarte', 'Fermi-Paradox'],
  related: [
    'astrobiologie/erde-durchschnittlich',
    'astrobiologie/mensch-unbedeutend',
    'ursprung-des-lebens/panspermie',
    'kirchengeschichte-mythen/giordano-bruno',
    'feinabstimmung/leben-haette-sich-angepasst',
  ],
};

export default claim;
