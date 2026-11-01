import type { Claim, Source } from '../../../schema.ts';

const miller1953: Source = {
  kind: 'wissenschaft',
  author: 'Stanley L. Miller',
  work: '„A Production of Amino Acids Under Possible Primitive Earth Conditions", Science 117 (3046), S. 528–529',
  year: '1953',
  quote: `Funkenentladungen in einem Gemisch aus Methan, Ammoniak, Wasserstoff und Wasserdampf lieferten nach etwa einer Woche u. a. Glycin und Alanin.`,
  status: 'paraphrase',
  note: 'Das klassische Experiment; Miller war Doktorand bei Harold Urey.',
};

const johnson2008: Source = {
  kind: 'wissenschaft',
  author: 'Adam P. Johnson, H. James Cleaves, Jason P. Dworkin, Daniel P. Glavin, Antonio Lazcano, Jeffrey L. Bada',
  work: '„The Miller Volcanic Spark Discharge Experiment", Science 322, S. 404',
  year: '2008',
  quote: `Die Neuanalyse archivierter Proben aus Millers „vulkanischer" Versuchsvariante von 1953 fand über 20 Aminosäuren und Amine.`,
  status: 'paraphrase',
};

const trail2011: Source = {
  kind: 'wissenschaft',
  author: 'Dustin Trail, E. Bruce Watson, Nicholas D. Tailby',
  work: '„The oxidation state of Hadean magmas and implications for early Earth\'s atmosphere", Nature 480, S. 79–82',
  year: '2011',
  quote: `Zirkone aus dem Hadaikum deuten auf Magmen mit einem Oxidationszustand ähnlich dem heutigen; vulkanische Gase wären demnach eher CO2, N2 und H2O gewesen als Methan und Ammoniak.`,
  status: 'paraphrase',
};

const tourAnimadversions: Source = {
  kind: 'wissenschaft',
  author: 'James M. Tour',
  work: '„Animadversions of a Synthetic Chemist", Inference: International Review of Science 2/2',
  year: '2016',
  quote: `Tour beschreibt aus Sicht des Synthesechemikers, wie weit präbiotische Experimente von der Herstellung einer Zelle entfernt sind, und fordert die Kollegen auf, offen zuzugeben, dass der Ursprung des Lebens ungeklärt ist.`,
  status: 'paraphrase',
  url: 'https://inference-review.com',
};

const claim: Claim = {
  id: 'miller-urey',
  title: `„Das Miller-Urey-Experiment hat gezeigt, wie Leben entstehen kann."`,
  proponents: [
    { name: 'Stanley L. Miller', role: 'Chemiker (1930–2007), Schüler von Harold Urey', work: 'Science 117 (1953)' },
    { name: 'Jeffrey L. Bada', role: 'Geochemiker, Scripps Institution of Oceanography', work: 'Neuauswertung der Miller-Proben, Science 322 (2008)' },
    { name: 'Dave Farina', role: 'Wissenschafts-YouTuber („Professor Dave Explains")', work: 'Videos gegen James Tour; Debatte an der Rice University (Mai 2023)' },
    { name: 'Bill Nye', role: 'Wissenschaftskommunikator („Bill Nye the Science Guy")', work: 'Undeniable (2014)' },
  ],
  steelman: `1953 schickte der junge Chemiker Stanley Miller elektrische Funken durch ein Gasgemisch aus Methan, Ammoniak, Wasserstoff und Wasser – ein Modell der Uratmosphäre mit Blitzen. Nach wenigen Tagen färbte sich die Lösung, und er fand Aminosäuren, die Bausteine der Proteine. Die Neuauswertung seiner archivierten Proben 2008 ergab sogar über 20 Aminosäuren. Wenig später zeigte Juan Oró, dass aus Blausäure Adenin entsteht, ein Baustein von DNA und RNA. Meteoriten wie Murchison enthalten Dutzende Aminosäuren. Die Lehre daraus: Die Bausteine des Lebens entstehen unter natürlichen Bedingungen von selbst, schnell und reichlich. Es gibt keine „Lebenskraft" – Leben ist Chemie. Die weiteren Schritte sind schwieriger, aber es sind Schritte desselben Typs: Chemie, die unter den richtigen Bedingungen abläuft. Wer hier Gott braucht, hat aus der Geschichte der Wissenschaft nichts gelernt.`,
  biblical: {
    summary: `Die Bibel hat kein Problem damit, dass Lebewesen aus gewöhnlichen Stoffen bestehen: „Die Erde bringe hervor lebendige Tiere" (Gen 1,24), der Mensch wird „aus einem Erdenkloß" gebildet (Gen 2,7). Dass Aminosäuren aus einfachen Gasen entstehen, bestätigt nur, was die Schrift voraussetzt: Leben ist aus dem Material dieser Welt gemacht. Entscheidend ist der zweite Teil von Gen 2,7: Gott „blies ihm ein den lebendigen Odem". Die Schrift unterscheidet zwischen dem Stoff und dem, der ihn zum Leben ordnet.`,
    detail: `Die biblische Schöpfungslehre ist kein „Vitalismus", der eine mysteriöse Lebenskraft neben der Chemie behauptet. Die Kirchenväter sahen in den Befehlen „Die Erde bringe hervor" eine von Gott in die Natur gelegte Fruchtbarkeit (Basilius, Hexaemeron 5,10). Die Frage ist deshalb nicht *ob* Leben chemisch ist, sondern ob ungelenkte Chemie die Ordnung und Information hervorbringen kann, die Leben ausmacht. Ps 104,30 verbindet beides: Gottes Odem schafft, und er erneuert die Gestalt der Erde.`,
    sources: [
      { kind: 'bibel', work: 'Genesis', ref: '1,24', quote: `Und Gott sprach: Die Erde bringe hervor lebendige Tiere, ein jegliches nach seiner Art: Vieh, Gewürm und Tier auf Erden, ein jegliches nach seiner Art. Und es geschah also.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '2,7', quote: `Und Gott der HERR machte den Menschen aus einem Erdenkloß, und er blies ihm ein den lebendigen Odem in seine Nase. Und also ward der Mensch eine lebendige Seele.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalmen', ref: '104,30', quote: `Du lässest aus deinen Odem, so werden sie geschaffen, und erneuerst die Gestalt der Erde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche lehrt die Schöpfung aus dem Nichts und dass Gott der Geber des Lebens ist – „der Herr, der lebendig macht" (Nizäno-Konstantinopolitanum über den Heiligen Geist). Schon Athanasius setzte sich mit den Epikureern auseinander, die alles aus zufälligen Atombewegungen erklären wollten, und hielt dagegen, dass die geordnete Vielfalt der Welt auf einen ordnenden Urheber verweist.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', ref: '2', quote: `Athanasius weist die epikureische Ansicht zurück, alles sei von selbst und zufällig entstanden: Wäre das so, gäbe es keine geordnete Unterscheidung der Dinge; die Ordnung der Welt zeigt einen Schöpfer.`, status: 'paraphrase' },
      { kind: 'konzil', work: 'Nizäno-Konstantinopolitanisches Glaubensbekenntnis', ref: '381', quote: `… an den Heiligen Geist, den Herrn, den Lebendigmacher …`, original: 'τὸ κύριον, τὸ ζῳοποιόν', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Das Miller-Experiment ist ein Meilenstein: Es zeigte, dass einfache Aminosäuren unter bestimmten Bedingungen leicht entstehen. Unbestritten ist aber auch: Die Produkte waren racemisch (links- und rechtshändig gemischt), es entstand viel Teer, und die Produkte mussten in einer Kühlfalle vom zerstörerischen Funken getrennt werden. Die stark reduzierende Atmosphäre (Methan, Ammoniak) gilt heute als unwahrscheinlich; viele Geochemiker gehen von einer eher neutralen Atmosphäre (CO2, N2) aus, in der die Ausbeuten drastisch sinken. Diskutiert werden lokale oder vorübergehend reduzierende Bedingungen (Vulkane, Asteroideneinschläge). Vor allem: Aminosäuren sind nicht Proteine, und Proteine sind nicht Leben – die Schritte danach sind die eigentlichen ungelösten Probleme.`,
    detail: `**Was Miller zeigte:** Glycin, Alanin und einige weitere Aminosäuren entstehen in Funkenentladung; die Neuauswertung 2008 fand in der vulkanischen Variante über 20 Aminosäuren und Amine – darunter viele, die in Proteinen nicht vorkommen.

**Was Miller nicht zeigte:**
- keine Selektion der 20 proteinogenen Aminosäuren aus dem Gemisch,
- keine Händigkeit (alle Produkte racemisch),
- keine Polymerisation zu Proteinen (in Wasser thermodynamisch bergauf),
- keine Sequenzinformation, keinen genetischen Code, keine Zelle.

**Atmosphärenfrage:** Studien zum Oxidationszustand hadaischer Zirkone (Trail et al. 2011) sprechen für vulkanische Gase ähnlich den heutigen. Neuere Arbeiten diskutieren, ob große Einschläge kurzzeitig wasserstoffreiche Atmosphären erzeugten – das Feld ist offen.`,
    sources: [miller1953, johnson2008, trail2011],
  },
  quickAnswer: `Miller hat gezeigt, dass einige einfache Aminosäuren entstehen können – gemischt links- und rechtshändig, in einem Teer, unter einer Atmosphäre, die Geologen heute bezweifeln. Aminosäuren verhalten sich zu einer Zelle wie lose Ziegelsteine zu einer bewohnten Stadt mit Strom, Verwaltung und Bibliothek. Wie aus den Bausteinen Leben wurde, weiß nach 70 Jahren niemand – das sagen die Forscher selbst.`,
  keyPoints: [
    `**Ehrlich anerkennen:** Das Experiment war ein echter Meilenstein und zeigt, dass einfache Bausteine abiotisch entstehen können.`,
    `**Nur der leichteste Schritt:** Aminosäuren bilden ist der einfachste Teil; Polymerisation, Händigkeit, Sequenz-Information und Zellbau sind die ungelösten Stufen (Tour).`,
    `**Racemat und Teer:** Die Produkte waren 50:50 links-/rechtshändig und von viel Nebenprodukt begleitet; die Kühlfalle schützte sie vor dem Funken – ein Eingriff des Experimentators.`,
    `**Atmosphäre fraglich:** Die stark reduzierende Uratmosphäre gilt heute als unwahrscheinlich; in neutralen Gasgemischen sinken die Ausbeuten stark.`,
    `**Bausteine sind keine Bauanleitung:** Selbst ein Ozean voller Aminosäuren enthält keine Information darüber, in welcher Reihenfolge sie zu funktionsfähigen Proteinen verknüpft werden müssen.`,
    `**Pasteurs Befund gilt weiter:** Beobachtet ist bis heute nur Leben aus Leben.`,
  ],
  voices: [
    {
      person: 'james-tour',
      role: 'als synthetischer Chemiker',
      text: `Tour betont, dass Aminosäuren für einen Chemiker kein Rätsel sind – sie lassen sich auf vielen Wegen herstellen. Das Problem beginnt danach: Man braucht die richtigen Aminosäuren (und nicht die Dutzenden anderen), in reiner Händigkeit, in genügender Konzentration, und man muss sie in Wasser gegen die Hydrolyse zu langen Ketten verknüpfen – und zwar in einer bestimmten Reihenfolge. In seinem Labor, so Tour, verlangt jede mehrstufige Synthese gereinigte Ausgangsstoffe, kontrollierte Bedingungen und das Entfernen von Nebenprodukten. Die präbiotische Erde hatte keinen Chemiker, der Zwischenprodukte reinigt.

Tour kritisiert deshalb weniger das Experiment selbst als seine Darstellung: Lehrbücher und Medien hätten jahrzehntelang den Eindruck erweckt, mit Miller sei der Weg zum Leben im Prinzip gezeigt. Tatsächlich beginne dort erst die eigentliche Schwierigkeit.`,
      sources: [tourAnimadversions],
    },
    {
      person: 'stephen-meyer',
      role: 'als Wissenschaftsphilosoph',
      text: `Meyer zeichnet in *Signature in the Cell* nach, wie das Miller-Experiment die Hoffnung nährte, die Entstehung des Lebens sei eine Frage der Zeit. Die eigentliche Frage sei aber nicht die Herkunft der Bausteine, sondern die Herkunft der **Information**, die festlegt, in welcher Reihenfolge Bausteine zu funktionalen Proteinen und Nukleinsäuren verknüpft werden. Kein Funke und keine Chemikalienmischung enthalte diese Reihenfolge – so wie Tinte und Papier nicht den Text eines Buches enthalten.`,
      sources: [{ kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', ref: 'Kap. 2 und 10', year: '2009', quote: `Meyer unterscheidet zwischen der Entstehung von Bausteinen und der Entstehung der sequenzspezifischen Information, die erst funktionale Biomoleküle ergibt.`, status: 'paraphrase' }],
    },
    {
      person: 'pasteur',
      role: 'als Mikrobiologe und Begründer der Stereochemie',
      text: `Pasteur widerlegte in den 1860er-Jahren mit seinen Schwanenhalskolben die damals verbreitete Lehre von der Urzeugung: Sterilisierte Nährlösungen blieben steril, solange keine Keime hineingelangten. Er entdeckte zudem die molekulare Händigkeit (Chiralität) und sah in ihr ein Kennzeichen der Lebenschemie. Beide Befunde berühren das Miller-Experiment direkt: Beobachtet ist nur Leben aus Leben – und die Chemie ohne Leben liefert racemische Gemische, während das Leben einhändig baut.`,
      sources: [{ kind: 'wissenschaft', author: 'Louis Pasteur', work: 'Vortrag an der Sorbonne über die Urzeugung', ref: '7. April 1864', quote: `Niemals wird sich die Lehre von der Urzeugung von dem tödlichen Schlag erholen, den ihr dieses einfache Experiment versetzt.`, original: 'Jamais la doctrine de la génération spontanée ne se relèvera du coup mortel que cette simple expérience lui porte.', translation: 'eigene Übersetzung', status: 'verbatim', note: 'Pasteur widerlegte die Urzeugung lebender Mikroben in Nährlösungen – nicht jede denkbare Form chemischer Evolution. Fair zitieren!' }],
    },
    {
      person: 'athanasius',
      role: 'als Apologet gegen die Zufallsphilosophie',
      text: `Athanasius kannte die antike Version des Arguments: Die Epikureer erklärten die Welt aus dem zufälligen Zusammentreffen von Atomen. Er antwortete nicht mit Naturwissenschaft, sondern mit einer Beobachtung, die bis heute trägt: Zufall erzeugt keine geordnete Unterscheidung und Zweckmäßigkeit; die geordnete Vielfalt der Welt verweist auf einen ordnenden Logos. Für die Debatte heißt das: Dass Atome sich verbinden, bestreitet niemand – die Frage ist, woher die Ordnung kommt, in der sie Leben bilden.`,
      sources: [{ kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '2', status: 'paraphrase', quote: `Gegen die Epikureer: Wenn alles von selbst entstanden wäre, wäre alles gleichförmig; die Unterschiedenheit und Ordnung der Dinge zeigt den Schöpfer.` }],
    },
  ],
  dialog: [
    {
      id: 'bausteine-entstehen-von-selbst',
      objection: `Miller hat in einer Woche Aminosäuren erzeugt. Die Bausteine des Lebens entstehen also von selbst – Chemie ist kein Wunder.`,
      objectionBy: 'Dave Farina',
      answer: `Einverstanden: Einfache Aminosäuren entstehen abiotisch – das bestreite ich nicht. Aber sie entstanden racemisch, in einem Teer, und mussten in einer Kühlfalle vor dem Funken geschützt werden, der sie sonst zerstört hätte. Und Aminosäuren sind der leichteste Schritt. Die Frage ist nicht, ob Ziegel entstehen, sondern wie daraus eine Stadt wird.`,
      detail: `Nenne die Kette, die James Tour immer wieder aufzählt: (1) die richtigen Bausteine in reiner Form, (2) die richtige Händigkeit, (3) Verknüpfung zu Ketten in Wasser gegen die Hydrolyse, (4) die richtige Reihenfolge (Information), (5) Zusammenbau mit Membran, Stoffwechsel und Vermehrung. Miller betrifft nur Schritt 1 – und selbst dort nur einen Teil.`,
      questionsBack: [
        `Welcher Schritt nach den Aminosäuren ist seit 1953 unter präbiotischen Bedingungen ohne Eingriff des Experimentators gelungen?`,
        `Wie trennt die Natur die 20 proteinogenen Aminosäuren von den Dutzenden anderen, die im Gemisch entstehen?`,
      ],
      followUps: [
        {
          id: 'neuauswertung-2008',
          objection: `Die Neuauswertung von 2008 hat über 20 Aminosäuren gefunden. Das ist mehr als genug.`,
          objectionBy: 'Jeffrey Bada',
          answer: `Die Neuauswertung ist beeindruckend – aber viele dieser Verbindungen kommen in Proteinen gar nicht vor, und alle sind racemisch. Mehr Vielfalt verschärft eher das Auswahlproblem: Je mehr verschiedene Moleküle entstehen, desto unwahrscheinlicher wird es, dass sich gerade die richtigen ohne Störenfriede zu Ketten verbinden.`,
          sources: [johnson2008],
          followUps: [
            {
              id: 'meteoriten-aminosaeuren',
              objection: `Auch der Murchison-Meteorit enthält Dutzende Aminosäuren. Das Universum stellt diese Bausteine überall her.`,
              objectionBy: 'Dave Farina',
              answer: `Richtig – und Murchison zeigt genau, was ungelenkte Chemie liefert: ein breites Gemisch, überwiegend aus Aminosäuren, die das Leben nicht verwendet, ohne Ketten, ohne Code. Die Natur erzeugt Vielfalt, das Leben braucht Auswahl. Dass Bausteine überall sind, sagt nichts darüber, wie aus ihnen Information wird.`,
              questionsBack: [`Wenn Bausteine überall sind und seit Milliarden Jahren entstehen: Warum beobachten wir nirgends, dass daraus heute neues Leben entsteht?`],
            },
          ],
        },
        {
          id: 'nur-erster-schritt',
          objection: `Niemand behauptet, Miller habe Leben erzeugt. Es war der erste Schritt – Wissenschaft geht schrittweise voran.`,
          objectionBy: 'Bill Nye',
          answer: `Dann sind wir uns einig – aber dann sollte man auch nicht sagen, Miller habe „gezeigt, wie Leben entstehen kann". Genau diese Formulierung steht in Schulbüchern und Medien. Nach über 70 Jahren ist der zweite, dritte und vierte Schritt unter realistischen Bedingungen ungelöst. Ein erster Schritt auf einer Treppe ohne weitere Stufen ist noch kein Weg nach oben.`,
          followUps: [
            {
              id: 'riesige-fortschritte',
              objection: `Seit Miller gab es riesige Fortschritte – Sutherland hat Nukleotide hergestellt, Szostak Protozellen.`,
              objectionBy: 'Dave Farina',
              answer: `Das sind elegante Laborarbeiten – unter sorgfältig gewählten Bedingungen, mit gereinigten Ausgangsstoffen, in festgelegter Reihenfolge. Tour nennt das den Kern des Problems: Der Erfolg hängt an den Entscheidungen des Chemikers. Darüber sprechen wir gern im Detail.`,
              detail: `Verweise auf die Claims zur RNA-Welt und zu Protozellen im Labor – dort sind die einzelnen Arbeiten (Powner/Gerland/Sutherland 2009; Szostak) Schritt für Schritt besprochen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'atmosphaere-irrelevant',
      objection: `Die Atmosphärenfrage ist irrelevant. Vulkane, Blitze und Einschläge haben lokal reduzierende Bedingungen geschaffen – dort lief die Miller-Chemie ab.`,
      objectionBy: 'Steven Benner',
      answer: `Das ist möglich, und ich gebe zu: Die Frage ist offen. Aber es verschiebt das Problem nur: Lokale, vorübergehende Bedingungen erzeugen lokal Bausteine, die anschließend im Ozean verdünnt oder zersetzt werden. Und selbst im besten Fall erhält man Bausteine, kein Leben. Das Atmosphärenproblem ist nicht mein Hauptargument – es zeigt nur, dass das Lehrbuchbild von 1953 so nicht mehr stimmt.`,
      sources: [trail2011],
      followUps: [
        {
          id: 'also-plausibel',
          objection: `Dann gibst du zu, dass die präbiotische Synthese plausibel ist.`,
          answer: `Für einige Aminosäuren: ja. Für das Leben: nein. Plausibel ist, dass einfache organische Moleküle entstehen. Nicht gezeigt ist, wie daraus ohne Lenkung die geordneten, informationsreichen Systeme einer Zelle wurden. Man darf „Bausteine plausibel" nicht in „Leben plausibel" umetikettieren.`,
        },
      ],
    },
    {
      id: 'chemie-kann-alles',
      objection: `Wenn Chemie Aminosäuren bauen kann, kann sie auch Leben bauen. Es ist nur eine Frage der Komplexität.`,
      objectionBy: 'Lee Cronin',
      answer: `Das ist ein Extrapolationsschluss: Aus „Buchstaben entstehen" folgt nicht „Shakespeare entsteht". Komplexität allein ist nicht der Punkt – funktionale Ordnung in einer bestimmten Reihenfolge ist es. Dafür braucht es mehr als chemische Reaktionsfreudigkeit.`,
      followUps: [
        {
          id: 'chemische-selektion',
          objection: `Ab einem gewissen Punkt übernimmt chemische Selektion: Stabile, sich vermehrende Moleküle setzen sich durch.`,
          objectionBy: 'Lee Cronin',
          answer: `Selektion setzt Vermehrung mit Vererbung voraus – vorher gibt es nichts, was ausgewählt und weitergegeben wird. Schon der Evolutionsbiologe Theodosius Dobzhansky hielt „präbiologische natürliche Selektion" für einen Widerspruch in sich. Die Frage ist also gerade, wie das erste sich selbst kopierende System entstand.`,
          sources: [{ kind: 'gegner', author: 'Theodosius Dobzhansky', work: 'Diskussionsbeitrag in: S. W. Fox (Hg.), The Origins of Prebiological Systems and of Their Molecular Matrices', year: '1965', quote: `Präbiologische natürliche Selektion sei ein Widerspruch in sich.`, original: 'prebiological natural selection is a contradiction in terms', status: 'unverified', note: 'Häufig zitiert; Wortlaut und Seitenangabe vor Verwendung prüfen.' }],
          followUps: [
            {
              id: 'assembly-theory-selektion',
              objection: `Die Assembly Theory (Nature 2023) zeigt doch, wie Selektion schon in der Chemie wirkt.`,
              objectionBy: 'Sara Walker',
              answer: `Die Assembly Theory misst, wie viele Schritte nötig sind, ein Molekül aufzubauen, und schließt aus häufigen, sehr komplexen Molekülen, dass ein „gedächtnisbehafteter" Prozess am Werk war. Sie beschreibt also, *dass* etwas ausgewählt wurde – nicht, *wie* der erste solche Prozess ohne Lenkung entstand. Selbst wohlwollende Kritiker wie Johannes Jaeger halten den Anspruch, sie „erkläre" Selektion und Evolution, für überzogen.`,
              sources: [
                { kind: 'gegner', author: 'Abhishek Sharma, Dániel Czégel, Michael Lachmann, Christopher P. Kempes, Sara I. Walker, Leroy Cronin', work: '„Assembly theory explains and quantifies selection and evolution", Nature 622, S. 321–328', year: '2023', status: 'paraphrase', quote: `Komplexe Moleküle in großer Kopienzahl gelten als Signatur von Selektion.` },
                { kind: 'wissenschaft', author: 'Johannes Jaeger', work: '„Assembly Theory: What It Does and What It Does Not Do", Journal of Molecular Evolution', year: '2024', status: 'paraphrase', quote: `Die Theorie habe interessante Aspekte, sei aber weit weniger neu und revolutionär als behauptet; „Selektion" werde in einem Sinn gebraucht, den Biologen nicht wiedererkennen.`, url: 'https://link.springer.com/article/10.1007/s00239-024-10163-2' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-der-luecken-miller',
      objection: `Du stopfst nur Gott in die Lücke, die Miller noch offen gelassen hat.`,
      objectionBy: 'Dave Farina',
      answer: `Nein. Mein Punkt hier ist nur, dass Miller weniger zeigt, als oft behauptet wird – das ist eine Korrektur, kein Gottesbeweis. Ob man daraus auf einen Schöpfer schließen darf, ist eine eigene Frage, die ich mit einem positiven Argument beantworte: aus dem, was wir über die Entstehung von Information wissen.`,
      detail: `Siehe den Claim „Gott der Lücken" in diesem Themenblock: zuerst den Forschungsstand ehrlich feststellen (Tour), dann getrennt davon den Schluss auf die beste Erklärung führen (Meyer).`,
    },
  ],
  questionsToAsk: [
    `Was genau hat Miller deiner Meinung nach gezeigt – und was nicht?`,
    `Welcher Schritt zwischen Aminosäure und Zelle ist ohne steuernde Eingriffe von Forschern gelungen?`,
    `Warum enthält ein Gemisch aus Bausteinen die Information für ihre Reihenfolge?`,
    `Würdest du einen Text für erklärt halten, weil du gezeigt hast, wie Tinte entsteht?`,
  ],
  avoid: [
    `„Miller hat gar nichts gezeigt" – falsch. Das Experiment war bahnbrechend; anerkenne es.`,
    `„Die Aminosäuren waren alle linkshändig, also Fälschung" o. Ä. – frei erfunden; sie waren racemisch.`,
    `„Der zweite Hauptsatz der Thermodynamik verbietet die Entstehung von Aminosäuren" – falsch; mit Energiezufuhr entstehen sie.`,
  ],
  concessions: [
    `Einfache Aminosäuren entstehen tatsächlich leicht unter verschiedenen Bedingungen, und sie kommen auch in Meteoriten vor.`,
    `Ob die frühe Erde lokal reduzierende Bedingungen hatte, ist eine offene Forschungsfrage.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Stephen C. Meyer', work: 'Signature in the Cell', year: '2009', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Charles B. Thaxton, Walter L. Bradley, Roger L. Olsen u. a.', work: 'The Mystery of Life\'s Origin: The Continuing Controversy', year: '2020', status: 'paraphrase', note: 'Neuausgabe des Klassikers von 1984 mit neuen Kapiteln u. a. von James Tour und Brian Miller.' },
    miller1953,
  ],
  difficulty: 1,
  tags: ['Miller-Urey', 'Aminosäuren', 'Uratmosphäre', 'Präbiotische Chemie'],
  related: ['ursprung-des-lebens/rna-welt', 'ursprung-des-lebens/ool-nur-wissensluecke', 'chemie-biochemie/homochiralitaet-erklaert', 'ursprung-des-lebens/protozellen-im-labor'],
};

export default claim;
