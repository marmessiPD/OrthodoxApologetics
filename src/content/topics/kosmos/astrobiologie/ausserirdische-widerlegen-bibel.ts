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
        },
      ],
    },
    {
      id: 'fermi-verschwendung',
      objection: `Wenn es niemanden sonst gibt – das Fermi-Paradox –, dann ist das Universum eine absurde Verschwendung. Und wenn es viele gibt, ist der Mensch unbedeutend. Beides spricht gegen die Bibel.`,
      objectionBy: 'Gesprächspartner',
      answer: `Das ist ein Argument, das in beide Richtungen „funktioniert" – und deshalb nichts beweist. Gibt es kein weiteres Leben, passt das zur Seltenheit der Bedingungen (Feinabstimmung, seltene Erde). Gibt es viel Leben, zeigt es die Großzügigkeit des Schöpfers. Größe und Alter des Universums sind zudem Voraussetzungen für Leben, keine Verschwendung.`,
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
