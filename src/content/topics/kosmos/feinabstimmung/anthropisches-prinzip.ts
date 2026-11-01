import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'anthropisches-prinzip',
  title: `„Wir könnten sonst nicht hier sein, um uns zu wundern (Anthropisches Prinzip)."`,
  proponents: [
    { name: 'Brandon Carter', role: 'Theoretischer Physiker (Cambridge, später Meudon)', work: '„Large Number Coincidences and the Anthropic Principle in Cosmology", IAU-Symposium 63 (1974)' },
    { name: 'Richard Dawkins', role: 'Evolutionsbiologe, Oxford', work: 'The God Delusion (2006), Kap. 4' },
    { name: 'Douglas Adams (†2001)', role: 'Schriftsteller', work: 'Pfützen-Gleichnis, Vortrag 1998, abgedruckt in: The Salmon of Doubt (2002)' },
    { name: 'Sean Carroll', role: 'Theoretischer Physiker', work: 'The Big Picture (2016)' },
  ],
  steelman: `Das schwache anthropische Prinzip (Brandon Carter, 1974) besagt: Was wir beobachten, muss mit unserer Existenz als Beobachter vereinbar sein. In einem lebensfeindlichen Universum gäbe es niemanden, der sich wundert. Darum ist es keine Überraschung, dass wir ein lebensfreundliches Universum vorfinden – es ist eine Bedingung unseres Fragens. Douglas Adams hat das mit einer Pfütze verglichen, die aufwacht und denkt: „Dieses Loch passt so perfekt zu mir, es muss für mich gemacht sein." In Wahrheit hat sich die Pfütze dem Loch angepasst. Wer aus der Lebensfreundlichkeit auf einen Schöpfer schließt, verwechselt eine Auswahlbedingung mit einem Zweck.`,
  biblical: {
    summary: `Die Bibel sieht den Menschen nicht als zufälligen Zuschauer, sondern als gewolltes Geschöpf: „Was ist der Mensch, dass du seiner gedenkst?" (Ps 8,5). Paulus sagt auf dem Areopag, Gott habe die Lebensräume der Menschen festgesetzt, „damit sie Gott suchen" (Apg 17,26–27). Die Schrift lehrt also eine Welt, die auf vernünftige Geschöpfe hin angelegt ist – nicht ausschließlich für sie, aber mit ihnen im Blick.`,
    detail: `- **Ps 8,4–5:** Die Größe des Himmels und die Würde des Menschen stehen nebeneinander.
- **Apg 17,26–27:** Die Bewohnbarkeit der Erde steht im Dienst der Gottsuche.
- **Ps 139,14:** Der Mensch als „wunderbar gemacht".
- **Gen 1,31:** Das Ganze ist „sehr gut" – die Schöpfung hat Eigenwert, nicht nur Nutzwert für den Menschen.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '8,4–5', quote: `Wenn ich sehe die Himmel, deiner Finger Werk, den Mond und die Sterne, die du bereitet hast: was ist der Mensch, daß du seiner gedenkst, und des Menschen Kind, daß du dich seiner annimmst?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,26–27', quote: `Gott hat das ganze Menschengeschlecht gemacht, auf dem Erdboden zu wohnen, und ihre Zeiten und Grenzen festgesetzt, damit sie ihn suchen und finden möchten.`, translation: 'Luther 1912 (sinngemäß gekürzt)', status: 'paraphrase' },
      { kind: 'bibel', work: 'Psalm', ref: '139,14', quote: `Ich danke dir darüber, daß ich wunderbar gemacht bin; wunderbar sind deine Werke, und das erkennt meine Seele wohl.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Der hl. Basilius nennt die Welt eine „Schule" (*didaskaleion*) und einen Übungsplatz für vernünftige Seelen, an dem sie Gott erkennen lernen. Für die Väter ist es kein Zufall, dass es im Kosmos Wesen gibt, die ihn verstehen: Der Mensch ist nach dem Bild Gottes geschaffen, Mittler zwischen sichtbarer und geistiger Schöpfung, und kann im Buch der Natur den Logos lesen.`,
    detail: `Athanasius beginnt *Contra Gentes* mit dem Gedanken, dass der Mensch durch die Ordnung der Schöpfung zur Erkenntnis des Schöpfers geführt werden kann (CG 34–35). Die Fähigkeit, die Welt zu verstehen, ist Teil der Gottebenbildlichkeit.`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,6', year: 'ca. 370', quote: `Die Welt ist eine Schule vernünftiger Seelen und ein Ort, an dem sie Gott erkennen lernen.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '34–35', year: 'ca. 318', quote: `Die Schöpfung ist wie Schrift, die durch ihre Ordnung auf ihren Herrn und Schöpfer verweist.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Das schwache anthropische Prinzip ist als methodische Regel unbestritten richtig: Beobachtungen unterliegen Auswahleffekten. Umstritten ist, ob es etwas *erklärt*. Die Mehrheit der Philosophen und Physiker, die sich damit befassen, sieht es nur dann als Erklärung, wenn es eine Vielzahl von Universen gibt, aus denen ausgewählt wird – dann wird es zum Multiversum-Argument. Das starke anthropische Prinzip (Barrow & Tipler, *The Anthropic Cosmological Principle*, 1986) – das Universum *muss* Leben hervorbringen – ist spekulativ und wird teils teleologisch gedeutet.`,
    detail: `Carter selbst formulierte 1974 das schwache Prinzip als Korrektiv gegen ein überzogenes „kopernikanisches Prinzip": Wir befinden uns zwangsläufig an einem Ort und zu einer Zeit, die Beobachter zulassen. John Leslie (*Universes*, 1989) entwickelte das Erschießungskommando-Gleichnis, um zu zeigen, dass Auswahleffekte ein auffälliges Ergebnis nicht erklären, solange man keinen Mechanismus vieler Versuche annimmt.`,
    sources: [
      { kind: 'wissenschaft', author: 'Brandon Carter', work: '„Large Number Coincidences and the Anthropic Principle in Cosmology", in: M. S. Longair (Hg.), Confrontation of Cosmological Theories with Observational Data (IAU-Symposium 63)', year: '1974', quote: `Was wir erwarten können zu beobachten, muss durch die Bedingungen eingeschränkt sein, die für unsere Anwesenheit als Beobachter notwendig sind.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'John Leslie', work: 'Universes', year: '1989', quote: `Erschießungskommando: Wer eine Hinrichtung durch fünfzig Scharfschützen überlebt, darf nicht sagen „Natürlich haben alle verfehlt, sonst wäre ich nicht hier"; er muss nach dem Grund fragen.`, status: 'paraphrase', note: 'Leslie ist kein christlicher Apologet; er vertritt eine eigene, neuplatonisch geprägte Position.' },
      { kind: 'wissenschaft', author: 'John D. Barrow & Frank J. Tipler', work: 'The Anthropic Cosmological Principle', year: '1986', quote: `Unterscheidung von schwachem, starkem und „finalem" anthropischen Prinzip.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Das schwache anthropische Prinzip stimmt – aber es erklärt nichts. Es sagt nur, dass wir ein lebensfreundliches Universum beobachten *müssen*, nicht, warum es eines gibt. Stell dir vor, fünfzig Scharfschützen schießen auf dich, und alle verfehlen. Du würdest nicht sagen: „Klar, sonst wäre ich ja nicht hier." Du würdest fragen, warum alle verfehlt haben. Nur wenn es unzählige Hinrichtungen gäbe, würde der Auswahleffekt etwas erklären – und das ist dann die Multiversum-Debatte.`,
  keyPoints: [
    `**Bedingung, nicht Erklärung:** Dass wir nur ein lebensfreundliches Universum beobachten können, erklärt nicht, warum es überhaupt eines gibt.`,
    `**Erschießungskommando (Leslie):** Das Überleben verlangt eine Erklärung – Absicht oder viele Versuche.`,
    `**Nur mit Multiversum stark:** Ohne viele Universen ist das anthropische Prinzip ein Achselzucken, keine Erklärung.`,
    `**Pfützen-Gleichnis greift zu kurz:** Die Pfütze passt sich dem Loch an, weil es physikalische Gesetze gibt; an die Gesetze selbst kann sich nichts anpassen.`,
    `**Gegen Anthropozentrismus-Vorwurf:** Christen behaupten nicht, das Universum sei nur für Menschen da; es dient der Ehre Gottes (Ps 19).`,
  ],
  voices: [
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph',
      text: `Swinburne hat ein bekanntes Gleichnis entwickelt: Ein Entführer setzt sein Opfer vor eine Kartenmischmaschine, die zehn Stapel mischt und je eine Karte zieht. Wenn nicht zehn Herz-Asse gezogen werden, explodiert die Maschine und tötet das Opfer. Die Maschine zieht zehn Herz-Asse. Der Entführer meint, das sei nicht verwunderlich, denn bei jedem anderen Ergebnis könnte das Opfer es ja nicht beobachten. Swinburne: Das Opfer hat völlig recht, sich zu wundern und nach einer Erklärung zu suchen – etwa, dass die Maschine manipuliert war. Dass ein Ergebnis Bedingung unserer Beobachtung ist, macht es nicht weniger erklärungsbedürftig.`,
      sources: [{ kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', ref: '2. Aufl., Kap. 8', year: '2004', quote: `Kartenmischmaschinen-Gleichnis: Dass man nur ein Ergebnis beobachten kann, das das eigene Überleben erlaubt, macht dieses Ergebnis nicht weniger erklärungsbedürftig.`, status: 'paraphrase' }],
    },
    {
      person: 'robin-collins',
      role: 'als Philosoph der Feinabstimmung',
      text: `Collins unterscheidet sauber zwischen der Wahrscheinlichkeit, *dass wir* ein lebensfreundliches Universum beobachten (unter der Bedingung, dass es uns gibt: eins), und der Wahrscheinlichkeit, *dass es überhaupt* ein lebensfreundliches Universum gibt (unter Zufall: winzig). Das anthropische Prinzip betrifft nur die erste. Das Feinabstimmungsargument fragt nach der zweiten. Wer das verwechselt, beantwortet eine Frage, die niemand gestellt hat.`,
      sources: [{ kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument", Blackwell Companion to Natural Theology', year: '2009', quote: `Der Beobachter-Auswahleffekt ändert nichts daran, dass die Existenz eines lebensfreundlichen Universums unter Zufall unwahrscheinlich ist.`, status: 'paraphrase' }],
    },
    {
      person: 'craig',
      role: 'als Debattenphilosoph',
      text: `Craig verwendet in Debatten oft Leslies Erschießungskommando, um den logischen Fehler sichtbar zu machen: Aus „Wenn sie getroffen hätten, könnte ich es nicht beobachten" folgt nicht „Es ist nicht erstaunlich, dass sie verfehlt haben". Das schwache anthropische Prinzip ist wahr, aber trivial; es schließt die Frage nach dem Warum nicht ab, sondern stellt sie erst richtig.`,
      sources: [{ kind: 'fachliteratur', author: 'William Lane Craig', work: 'Reasonable Faith', ref: '3. Aufl., Kap. 4', year: '2008', quote: `Das anthropische Prinzip verwechselt die Bedingung einer Beobachtung mit der Erklärung des Beobachteten.`, status: 'paraphrase' }],
    },
    {
      person: 'basilius',
      role: 'als Kirchenvater',
      text: `Basilius sieht in der Tatsache, dass der Kosmos vernünftige Geschöpfe beherbergt, die ihn betrachten und über ihn staunen, keinen Zufall, sondern den Sinn der Schöpfung: Die Welt ist Schule und Übungsplatz der Seelen, die an ihr den Schöpfer erkennen sollen. Das Staunen, das das anthropische Prinzip wegerklären will, ist für ihn gerade die angemessene Antwort auf die Schöpfung.`,
      sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilie 1,6', year: 'ca. 370', quote: `Die Welt wurde als Schule und Lehrstätte für die Gotteserkenntnis vernünftiger Seelen geschaffen.`, status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'sonst-waeren-wir-nicht-hier',
      objection: `Natürlich sind die Naturkonstanten lebensfreundlich – sonst wären wir nicht hier, um darüber zu reden. Da gibt es nichts zu erklären.`,
      objectionBy: 'Richard Dawkins / Sean Carroll',
      answer: `Stell dir vor, fünfzig Scharfschützen schießen auf dich und alle verfehlen. Würdest du sagen: „Nichts zu erklären, sonst wäre ich ja tot"? Nein – du würdest fragen, warum. Dass wir nur ein lebensfreundliches Universum beobachten können, erklärt nicht, warum es eines gibt.`,
      sources: [{ kind: 'fachliteratur', author: 'John Leslie', work: 'Universes', year: '1989', quote: `Das Überleben vor dem Erschießungskommando verlangt eine Erklärung: entweder Absicht oder sehr viele Hinrichtungen.`, status: 'paraphrase' }],
      questionsBack: [`Würdest du als Überlebender eines Erschießungskommandos aufhören, nach dem Grund zu fragen?`],
      followUps: [
        {
          id: 'erschiessungskommando-hinkt',
          objection: `Das Gleichnis hinkt: Beim Erschießungskommando wissen wir, dass es Schützen gibt, die zielen. Beim Universum wissen wir das nicht.`,
          objectionBy: 'Victor Stenger',
          answer: `Das Gleichnis braucht das nicht vorauszusetzen. Es braucht nur ein Ergebnis, das unter Zufall sehr unwahrscheinlich und zugleich bedeutsam ist. Genau so erkennen wir Absicht auch dort, wo wir den Urheber vorher nicht kennen – etwa bei einem Funksignal mit Primzahlen aus dem All (SETI).`,
          followUps: [
            {
              id: 'nur-ein-fall',
              objection: `Bei nur einem Universum kann man keine Wahrscheinlichkeiten angeben. Wir haben eine Stichprobe von eins.`,
              objectionBy: 'Victor Stenger / Sabine Hossenfelder',
              answer: `Wir beurteilen einmalige Ereignisse ständig: die Entstehung des Lebens, den Urknall selbst, einen Fingerabdruck am Tatort, einen Kriminalfall. Das Likelihood-Prinzip fragt nicht nach Häufigkeiten, sondern danach, unter welcher Hypothese das Beobachtete erwartbarer ist.`,
              followUps: [
                {
                  id: 'kein-wahrscheinlichkeitsmass',
                  objection: `Für „erwartbarer" brauchst du eine Wahrscheinlichkeitsverteilung über mögliche Konstanten. Die gibt es nicht. Wenn eine Konstante jeden Wert von null bis unendlich annehmen könnte, ist jeder endliche Bereich – ob groß oder klein – „unendlich unwahrscheinlich". Dann beweist die Feinabstimmung gar nichts.`,
                  objectionBy: 'Victor Stenger / Sabine Hossenfelder',
                  answer: `Das ist der stärkste technische Einwand, und er wird auch von christlichen Philosophen ernst genommen (McGrew, McGrew und Vestrup 2001). Die Antwort: Wir müssen nicht über unendliche Bereiche reden. Es genügt, die Konstanten innerhalb des Bereichs zu variieren, in dem unsere Physik nachweislich gilt – Collins nennt das den „epistemisch erhellten Bereich". Schon dort ist das lebensfreundliche Fenster winzig. Und Physiker selbst argumentieren genau so: Das „Problem der kosmologischen Konstante" – sie ist rund 120 Größenordnungen kleiner als die natürliche Erwartung – steht in jedem Lehrbuch, ohne dass jemand fragt, welche Wahrscheinlichkeitsverteilung Gott dafür gewählt hat.`,
                  detail: `Das sogenannte Normierungsproblem lautet: Eine Gleichverteilung über einen unendlichen Bereich lässt sich nicht normieren. Robin Collins antwortet, dass wir uns nur auf den Bereich stützen sollen, über den wir physikalisch begründet urteilen können – etwa bis zur Planck-Skala, oberhalb derer unsere Theorien ohnehin versagen. Luke Barnes zeigt, dass mit allen gängigen „natürlichen" Verteilungen, die Physiker in der Praxis verwenden, die lebensfreundlichen Bereiche klein bleiben. Ehrlich bleibt: Die Wahrscheinlichkeitsbegründung ist ein offener Punkt der Philosophie der Physik – aber er trifft jede Argumentation mit Natürlichkeit, auch die der Physiker selbst.`,
                  voices: [
                    { person: 'robin-collins', role: 'als Physiker und Philosoph der Feinabstimmung', text: `Collins schränkt das Argument bewusst auf den „epistemisch erhellten Bereich" ein: den Wertebereich, für den wir mit unserer bestehenden Physik sagen können, ob Leben möglich wäre. Innerhalb dieses endlichen Bereichs ist eine Gleichverteilung normierbar, und das lebensfreundliche Teilintervall bleibt für mehrere Konstanten außerordentlich klein. Damit entgeht das Argument dem Einwand der unendlichen Bereiche.` },
                    { person: 'luke-barnes', role: 'als Astrophysiker', text: `Barnes betont, dass Physiker im Alltag ständig mit Wahrscheinlichkeiten über Parameter arbeiten – etwa bei der Frage, wie „natürlich" eine Teilchenmasse ist. Wer das Wahrscheinlichkeitsargument bei der Feinabstimmung für bedeutungslos erklärt, müsste es auch beim Hierarchieproblem und beim Problem der kosmologischen Konstante aufgeben.` },
                  ],
                  sources: [
                    { kind: 'fachliteratur', author: 'Timothy McGrew, Lydia McGrew & Eric Vestrup', work: '„Probabilities and the Fine-Tuning Argument: A Sceptical View", Mind 110', year: '2001', quote: `Über einen unendlichen Wertebereich lässt sich keine normierbare Gleichverteilung definieren; das Feinabstimmungsargument müsse dieses Problem lösen.`, status: 'paraphrase', note: 'Kritik aus dem christlichen Lager – zeigt, dass der Einwand fair diskutiert wird.' },
                    { kind: 'fachliteratur', author: 'Robin Collins', work: '„The Teleological Argument: An Exploration of the Fine-Tuning of the Universe", in: The Blackwell Companion to Natural Theology', year: '2009', quote: `Das Argument stützt sich nur auf den epistemisch erhellten Bereich, in dem wir begründet beurteilen können, ob Leben möglich wäre.`, status: 'paraphrase' },
                  ],
                  questionsBack: [`Wenn Wahrscheinlichkeiten über Konstanten bedeutungslos sind – warum gilt dann das Problem der kosmologischen Konstante als eines der größten Rätsel der Physik?`],
                  followUps: [
                    {
                      id: 'natuerlichkeit-gescheitert',
                      objection: `Gerade das Natürlichkeitsdenken ist gescheitert. Man hat am LHC Supersymmetrie erwartet, weil die Higgs-Masse sonst „unnatürlich" sei – gefunden wurde nichts. Die Natur schert sich nicht darum, was wir „unwahrscheinlich" finden. Vielleicht sind die Zahlen einfach, wie sie sind.`,
                      objectionBy: 'Sabine Hossenfelder',
                      answer: `Das Scheitern zeigt etwas anderes, als du meinst: Die Hoffnung, dass eine tiefere *Physik* die seltsamen Werte erklärt, hat sich bisher nicht erfüllt. Damit bleibt die Feinabstimmung unerklärt – sie ist nicht weg. Außerdem ist die Feinabstimmung für Leben keine Frage der Ästhetik: Ob Sterne brennen, ob Kohlenstoff entsteht, ob Atome stabil sind, sind harte physikalische Konsequenzen. „Die Zahlen sind einfach so" ist erlaubt – aber das ist keine Erklärung, sondern der Verzicht darauf.`,
                      detail: `Hossenfelders Kritik richtet sich gegen Natürlichkeit als *Prognosewerkzeug*: Man dürfe aus „Unschönheit" keine neuen Teilchen vorhersagen. Damit hat sie in Bezug auf viele Physikvorhersagen recht. Das Feinabstimmungsargument behauptet aber nicht, dass die Natur „schön" sein müsse, sondern stellt fest, dass die beobachteten Werte in einem schmalen Bereich liegen, außerhalb dessen keine komplexen Strukturen möglich wären. Das ist eine kontrafaktische Berechnung, keine ästhetische Vorliebe.`,
                      sources: [{ kind: 'gegner', author: 'Sabine Hossenfelder', work: 'Lost in Math: How Beauty Leads Physics Astray', year: '2018', quote: `Natürlichkeit sei ein ästhetisches Kriterium ohne gesicherte Grundlage; aus ihr abgeleitete Vorhersagen (etwa Supersymmetrie am LHC) hätten sich nicht bestätigt.`, status: 'paraphrase' }],
                      questionsBack: [`Ist „Die Zahlen sind einfach so" eine Erklärung – oder die Entscheidung, keine zu suchen?`],
                    },
                  ],
                },
              ],
            },
            {
              id: 'hume-analogie-bricht',
              objection: `Absicht erkennen wir nur bei Urhebern, deren Art wir kennen – Menschen, die Uhren und Häuser bauen. Ein kosmischer Designer ist ein Wesen ganz anderer Art. Schon Hume hat gezeigt: Die Analogie zwischen Universum und Artefakt ist viel zu schwach, um daraus auf einen Schöpfer zu schließen.`,
              objectionBy: 'Victor Stenger (nach David Hume)',
              answer: `Wir erkennen Absicht ständig, ohne den Urheber zu kennen. Archäologen erkennen Werkzeuge einer unbekannten Kultur; SETI-Forscher würden ein Signal aus Primzahlen als künstlich erkennen, obwohl sie über die Absender nichts wissen. Entscheidend ist nicht die Bekanntschaft mit dem Urheber, sondern das Muster: ein Ergebnis, das unter Zufall extrem unwahrscheinlich ist und zugleich auf ein bedeutsames Ziel passt. Das Feinabstimmungsargument ist zudem kein Analogieschluss, sondern ein Wahrscheinlichkeitsvergleich zweier Hypothesen.`,
              detail: `Humes *Dialogues Concerning Natural Religion* (1779) richteten sich gegen das Analogie-Argument des 18. Jahrhunderts („Die Welt ähnelt einer Maschine, also hat sie einen Maschinenbauer"). Die moderne Fassung bei Collins oder Swinburne arbeitet anders: Sie fragt, ob die beobachtete Lebensfreundlichkeit unter der Hypothese „Gott" wahrscheinlicher ist als unter der Hypothese „blinder Zufall". Dafür braucht man keine Ähnlichkeit zwischen Gott und einem Uhrmacher, sondern nur die Annahme, dass ein guter, vernünftiger Schöpfer Gründe hätte, eine Welt mit verkörperten, erkennenden Geschöpfen zu wollen.`,
              sources: [{ kind: 'gegner', author: 'David Hume', work: 'Dialogues Concerning Natural Religion', ref: 'Teile II und V', year: '1779', quote: `Die Ähnlichkeit zwischen dem Universum und menschlichen Erzeugnissen sei zu schwach, um einen Schluss auf einen menschenähnlichen Urheber zu tragen.`, status: 'paraphrase' }],
              questionsBack: [`Würdest du ein Primzahlsignal aus dem All als künstlich erkennen, obwohl du nichts über die Absender weißt? Woran?`],
            },
          ],
        },
      ],
    },
    {
      id: 'pfuetze',
      objection: `Douglas Adams' Pfütze: Sie denkt, das Loch passe perfekt zu ihr, also sei es für sie gemacht. Dabei hat sie sich dem Loch angepasst. Genauso hat sich das Leben dem Universum angepasst.`,
      objectionBy: 'Richard Dawkins (nach Douglas Adams)',
      answer: `Die Pfütze passt sich dem Loch an, *weil* es physikalische Gesetze gibt – Schwerkraft, Flüssigkeit, Oberflächenspannung. An die Gesetze selbst kann sich nichts anpassen. In einem Universum ohne stabile Atome gibt es weder Pfützen noch Löcher noch Leben, das sich anpassen könnte.`,
      detail: `Das Gleichnis verwechselt Anpassung *innerhalb* eines lebensfreundlichen Rahmens mit der Existenz dieses Rahmens. Ausführlich im Claim „Leben hätte sich auch an andere Bedingungen angepasst".`,
      sources: [{ kind: 'gegner', author: 'Douglas Adams', work: 'The Salmon of Doubt', year: '2002', quote: `Eine Pfütze wacht auf und denkt: Dieses Loch passt so gut zu mir, es muss eigens für mich gemacht worden sein.`, status: 'paraphrase' }],
      followUps: [
        {
          id: 'anthropozentrismus',
          objection: `Aber du denkst ja tatsächlich, das Universum sei für dich gemacht. Das ist der Gipfel des Anthropozentrismus.`,
          objectionBy: 'Neil deGrasse Tyson',
          answer: `Die christliche Lehre ist nicht, dass das Universum nur für Menschen da ist. „Die Himmel erzählen die Ehre Gottes" (Ps 19,2); die Schöpfung ist „sehr gut", schon bevor der Mensch auftritt. Und das Feinabstimmungsargument betrifft Leben überhaupt, nicht speziell Menschen.`,
          followUps: [
            {
              id: 'kopernikanische-kraenkung',
              objection: `Die ganze Wissenschaftsgeschichte ist eine Geschichte der Entthronung: Kopernikus nahm uns das Zentrum, Darwin die Sonderstellung, Hubble unsere Galaxie. Das anthropische Denken ist ein Rückfall in die vorkopernikanische Eitelkeit.`,
              objectionBy: 'Neil deGrasse Tyson',
              answer: `Die Erzählung ist historisch schief. Im mittelalterlichen Weltbild war das Zentrum nicht der Ehrenplatz, sondern der *niedrigste* Ort – der Bodensatz des Kosmos, nahe der Hölle; die Würde lag oben, in den Himmeln. Kopernikus hat die Erde also eher „befördert". Und vor allem: Das Feinabstimmungsargument hängt nicht an unserem Ort im Raum, sondern an den Gesetzen und Konstanten, die überall gelten. Dass wir nicht im Mittelpunkt wohnen, ändert nichts daran, dass das ganze Universum lebensermöglichend eingestellt ist.`,
              detail: `Der Wissenschaftshistoriker Dennis Danielson hat gezeigt, dass die Idee einer „Kränkung durch Kopernikus" eine spätere Erfindung ist, die sich erst im 17. und 18. Jahrhundert durchsetzte. Galilei selbst sah es als Erhöhung an, dass die Erde nun ein „Stern" unter Sternen sei, nicht mehr der „Abfallhaufen" der Welt. Für das Gespräch: Christliche Würde des Menschen hing nie an seiner Position im Raum, sondern an seiner Beziehung zu Gott (Ps 8).`,
              sources: [{ kind: 'fachliteratur', author: 'Dennis R. Danielson', work: '„The Great Copernican Cliché", American Journal of Physics 69', year: '2001', quote: `Im vorkopernikanischen Kosmos galt das Zentrum nicht als Ort der Ehre, sondern als niedrigster Ort; die Rede von der „Entthronung" der Erde ist ein späteres Klischee.`, status: 'paraphrase' }],
              questionsBack: [`War das Zentrum im mittelalterlichen Weltbild ein Ehrenplatz – oder der niedrigste Ort des Kosmos?`],
            },
          ],
        },
      ],
    },
    {
      id: 'starkes-anthropisches-prinzip',
      objection: `Barrow und Tipler sprechen vom starken anthropischen Prinzip: Das Universum muss Leben hervorbringen. Das ist eine naturalistische Teleologie – kein Gott nötig.`,
      objectionBy: 'Frank Tipler / John Wheeler',
      answer: `Ein „muss" braucht einen Grund. Entweder ist es eine logische Notwendigkeit – dafür gibt es keinen Beleg –, oder es gibt viele Universen, oder es gibt eine Absicht. Ein Universum, das Leben hervorbringen *muss*, klingt eher nach Zweck als nach Zufall. Das starke Prinzip spricht eher für Teleologie, also für den Theismus.`,
      followUps: [
        {
          id: 'teleologie-ohne-gott',
          objection: `Es gibt Teleologie ohne Gott. Der Philosoph Thomas Nagel vertritt eine natürliche Zielgerichtetheit in „Mind and Cosmos".`,
          objectionBy: 'Thomas Nagel',
          answer: `Bemerkenswert: Nagel ist Atheist und hält den Materialismus trotzdem für unzureichend – das ist ein großes Zugeständnis. Aber eine Zielgerichtetheit ohne Geist ist schwer zu verstehen: Ziele und Zwecke kennen wir nur von Geistern. Ein zielgerichtetes Universum passt am natürlichsten zu einem Schöpfer.`,
          sources: [{ kind: 'gegner', author: 'Thomas Nagel', work: 'Mind and Cosmos: Why the Materialist Neo-Darwinian Conception of Nature Is Almost Certainly False', year: '2012', quote: `Die materialistische Weltsicht kann Bewusstsein, Erkenntnis und Werte nicht erklären; Nagel erwägt eine natürliche Teleologie ohne Gott.`, status: 'paraphrase', note: 'Nagel ist Atheist – sein Zugeständnis wiegt schwer.' }],
          followUps: [
            {
              id: 'teleologische-naturgesetze',
              objection: `Warum nicht? Es könnte teleologische Naturgesetze geben – eine eingebaute Tendenz der Natur zu Komplexität, Leben und Bewusstsein. Das wäre ein Prinzip, kein Gott.`,
              objectionBy: 'Thomas Nagel',
              answer: `Dann fragt sich: Was ist ein Gesetz, das ein *Ziel* anstrebt – und zwar ausgerechnet Wert, Leben und Geist? Ein solches Gesetz verhält sich wie ein Plan, aber ohne Planer. Das ist begrifflich viel rätselhafter als die klassische Antwort, dass Ziele in einem Geist wohnen. Wer so weit geht, ist dem Theismus näher als dem Materialismus – und muss erklären, warum er den letzten Schritt verweigert.`,
              detail: `Nagel ist hier bemerkenswert offen. In *The Last Word* (1997) bekannte er, er hoffe, dass es keinen Gott gebe; er wolle nicht, dass das Universum so sei – und nannte diese Haltung eine „Angst vor Religion", die das Denken vieler Intellektueller präge. Das ist kein Argument gegen ihn, aber es zeigt ehrlich: Die Ablehnung des Theismus ist nicht immer rein rational. Seine Suche nach einer „natürlichen Teleologie" ist der Versuch, die Phänomene ernst zu nehmen, ohne bei Gott anzukommen.`,
              sources: [{ kind: 'gegner', author: 'Thomas Nagel', work: 'The Last Word', year: '1997', quote: `Nagel bekennt, er hoffe, dass es keinen Gott gebe; er wolle nicht, dass das Universum so beschaffen sei – eine „Angst vor Religion", die er auch bei vielen Kollegen vermutet.`, status: 'paraphrase', note: 'Nagel ist Atheist; die Stelle wird oft zitiert – vor wörtlicher Verwendung Wortlaut und Seite prüfen.' }],
              questionsBack: [`Kann ein Gesetz ohne Geist ein Ziel haben? Was unterscheidet ein solches „Ziel" von einem Plan?`],
            },
          ],
        },
      ],
    },
    {
      id: 'auswahleffekt-ist-wissenschaft',
      objection: `Auswahleffekte sind ganz normale Wissenschaft. Wir leben auf einem Planeten und nicht im leeren All, weil Beobachter nur auf Planeten entstehen. Steven Weinberg hat mit genau diesem anthropischen Denken 1987 den Wert der kosmologischen Konstante grob vorhergesagt – bevor sie 1998 gemessen wurde.`,
      objectionBy: 'Sean Carroll / Leonard Susskind',
      answer: `Einverstanden: Auswahleffekte sind legitim – aber nur, wenn es viele Versuche gibt. Wir finden uns auf einem Planeten, weil es Milliarden Orte gibt und nur manche bewohnbar sind. Weinbergs Überlegung setzte ausdrücklich ein Ensemble vieler Universen mit verschiedenen Werten voraus. Ohne Multiversum erklärt das anthropische Prinzip nichts; es ist keine Alternative zum Design, sondern ein Anhängsel der Multiversum-Hypothese – und muss mit ihr stehen oder fallen.`,
      detail: `Der Unterschied ist entscheidend: Das schwache anthropische Prinzip sagt, warum wir *keine* lebensfeindlichen Konstanten beobachten (wir wären nicht da). Es sagt nicht, warum es *überhaupt* lebensfreundliche gibt. Für Letzteres braucht man entweder viele Universen (dann wird das Prinzip zum Auswahleffekt) oder eine Absicht. Deshalb führt jede ernsthafte Diskussion des anthropischen Prinzips zum Claim „Das Multiversum erklärt die Feinabstimmung".`,
      sources: [{ kind: 'wissenschaft', author: 'Steven Weinberg', work: '„Anthropic Bound on the Cosmological Constant", Physical Review Letters 59, 2607', year: '1987', quote: `Wenn die kosmologische Konstante in verschiedenen Bereichen des Universums verschiedene Werte annimmt, können Beobachter nur dort entstehen, wo sie klein genug ist, um Galaxienbildung zu erlauben.`, status: 'paraphrase' }],
      questionsBack: [`Funktioniert ein Auswahleffekt ohne viele Versuche? Wie viele Universen setzt deine Erklärung voraus?`],
      followUps: [
        {
          id: 'weinberg-vorhersage-bestaetigt',
          objection: `Aber die Vorhersage hat funktioniert! Die gemessene Dunkle Energie liegt im anthropisch erwarteten Bereich. Das ist echte Evidenz für die Landschaft vieler Universen.`,
          objectionBy: 'Leonard Susskind',
          answer: `Es ist ein beachtlicher Treffer, das gestehe ich zu. Aber er unterscheidet nicht zwischen den Hypothesen: Auch unter der Design-Hypothese erwartet man einen lebensfreundlichen Wert. Ein Befund, den beide Seiten erwarten, kann nicht zwischen ihnen entscheiden. Zudem lag der gemessene Wert eher am unteren Rand dessen, was anthropische Rechnungen als typisch erwarteten – manche Fachleute sehen das sogar als Spannung.`,
          detail: `Die anthropische Abschätzung ist bescheiden: Sie besagt, dass die kosmologische Konstante nicht viel größer sein darf als die Materiedichte zur Zeit der Galaxienbildung. Der beobachtete Wert erfüllt das; die genaue Wahrscheinlichkeit hängt aber von Annahmen ab (welche Beobachter zählen, welche anderen Parameter variieren). Weinberg selbst blieb vorsichtig. Für das Gespräch: Ein Treffer der anthropischen Argumentation ist ein Treffer für „lebensfreundlich" – und genau das sagt auch der Theismus voraus.`,
          questionsBack: [`Welchen Wert der kosmologischen Konstante hätte die Design-Hypothese vorhergesagt – einen lebensfeindlichen?`],
          followUps: [
            {
              id: 'gott-braucht-keine-feinabstimmung',
              objection: `Im Gegenteil: Der Theismus sagt gar nichts voraus. Ein allmächtiger Gott bräuchte keine Feinabstimmung – er könnte Leben in jedem Universum erhalten, auch bei völlig falschen Konstanten. Feinabstimmung ist also eher ein Indiz *gegen* Gott: Unter Naturalismus braucht Leben fein abgestimmte Gesetze, unter Theismus nicht.`,
              objectionBy: 'Sean Carroll',
              answer: `Gott *braucht* die Feinabstimmung nicht – aber er hat gute Gründe, eine Welt zu wollen, in der Leben durch beständige, verstehbare Gesetze entsteht und erhalten wird. Eine Welt, in der Gott bei falschen Konstanten jedes Atom ständig durch Wunder stabilisieren müsste, hätte keine verlässlichen Naturgesetze – dann gäbe es weder Wissenschaft noch verantwortliches Handeln, weil niemand die Folgen seiner Taten absehen könnte. Wenn Gott freie, erkennende Geschöpfe in einer gesetzmäßigen Welt will, *muss* er die Gesetze lebensfreundlich wählen. Der Naturalismus dagegen hat keinen Grund, warum die Gesetze so ausfallen sollten.`,
              detail: `Carroll hat dieses Argument in der Debatte mit Craig (2014) vorgetragen. Robin Collins antwortet, dass die richtige Vergleichsfrage lautet: Wie wahrscheinlich ist ein *gesetzmäßiges* lebensfreundliches Universum unter Theismus bzw. unter Naturalismus? Unter Naturalismus gibt es keinen Grund, unter allen möglichen Gesetzen gerade lebensfreundliche zu erwarten. Unter Theismus gibt es einen: Ein guter Gott hat Gründe, verkörperte, moralisch handelnde Wesen in einer stabilen, erforschbaren Ordnung zu schaffen. Die Väter sahen in dieser Ordnung keinen Ersatz für Gottes Wirken, sondern seine gewöhnliche Weise zu wirken.`,
              voices: [
                { person: 'robin-collins', role: 'als Philosoph der Feinabstimmung', text: `Collins betont, dass Gott die Welt nicht als Abfolge von Einzelwundern, sondern als gesetzmäßige, für uns erforschbare Ordnung geschaffen hat – eine Welt, die er „für Entdeckung geeignet" nennt. Wenn Gott eine solche Welt mit verkörperten Geschöpfen will, ist Feinabstimmung genau das, was man erwarten sollte.` },
                { person: 'basilius', role: 'als Ausleger der Schöpfung', text: `Basilius beschreibt in den *Hexaemeron*-Homilien, dass Gott der Natur bei der Schöpfung ein Gesetz eingeprägt hat, nach dem sie bis heute wirkt: Das Wort „Die Erde bringe hervor" wirkt fort und gibt der Natur ihre eigene, beständige Wirksamkeit. Gottes Weisheit zeigt sich gerade darin, dass die Schöpfung nach seiner Ordnung aus sich heraus wirkt.` },
              ],
              sources: [{ kind: 'kirchenvater', author: 'Basilius der Große', work: 'Hexaemeron', ref: 'Homilien V,10 und IX,2', year: 'ca. 370', quote: `Das erste Schöpfungsgebot wirkt in der Natur fort – wie ein Kreisel, der nach dem ersten Anstoß weiterläuft; es ist der Erde als bleibende Ordnung eingeprägt.`, status: 'paraphrase', note: 'Sinngemäße Zusammenfassung zweier Stellen (Kreisel-Bild in V,10); genaue Zuordnung einzelner Formulierungen vor wörtlicher Verwendung prüfen.' }],
              questionsBack: [`Wäre eine Welt, in der Gott ständig Atome durch Wunder zusammenhält, eine Welt mit verlässlichen Naturgesetzen und möglicher Wissenschaft?`],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Erklärt das anthropische Prinzip, *warum* es ein lebensfreundliches Universum gibt – oder nur, warum wir eines beobachten?`,
    `Würdest du als Überlebender eines Erschießungskommandos sagen: „Kein Grund zum Fragen"?`,
    `Braucht dein Argument nicht doch viele Universen, damit der Auswahleffekt etwas erklärt?`,
    `Woran kann sich Leben anpassen, wenn es keine stabilen Atome gibt?`,
  ],
  avoid: [
    `Das schwache anthropische Prinzip als „falsch" bezeichnen. Es ist wahr – es erklärt nur nichts.`,
    `Behaupten, das Universum sei ausschließlich für den Menschen gemacht. Das ist weder biblisch noch nötig.`,
  ],
  concessions: [
    `Das schwache anthropische Prinzip ist als methodische Regel richtig und in der Kosmologie nützlich (etwa für Auswahleffekte bei Beobachtungen).`,
    `In Kombination mit einem tatsächlich existierenden Multiversum hätte der Auswahleffekt echte Erklärungskraft.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John Leslie', work: 'Universes', year: '1989', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'John D. Barrow & Frank J. Tipler', work: 'The Anthropic Cosmological Principle', year: '1986', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'The Existence of God', year: '2004', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Anthropisches Prinzip', 'Erschießungskommando', 'Auswahleffekt', 'Pfützen-Gleichnis', 'Teleologie'],
  related: [
    'feinabstimmung/multiversum',
    'feinabstimmung/feinabstimmung-illusion',
    'feinabstimmung/leben-haette-sich-angepasst',
    'mathematik/unwahrscheinliches-passiert-staendig',
    'astrobiologie/mensch-unbedeutend',
  ],
};

export default claim;
