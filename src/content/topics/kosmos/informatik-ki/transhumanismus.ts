import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'transhumanismus',
  title: `„Wir werden den Tod technisch überwinden (Transhumanismus)."`,
  proponents: [
    { name: 'Ray Kurzweil', role: 'Futurist, Google', work: 'The Singularity Is Near (2005); The Singularity Is Nearer (2024)' },
    { name: 'Yuval Noah Harari', role: 'Historiker, Hebrew University', work: 'Homo Deus: Eine Geschichte von Morgen (2016, dt. 2017)' },
    { name: 'Nick Bostrom', role: 'Philosoph (zuvor Oxford, Future of Humanity Institute)', work: '„The Fable of the Dragon-Tyrant", Journal of Medical Ethics 31 (2005)' },
    { name: 'Aubrey de Grey', role: 'Biogerontologe', work: 'Ending Aging (2007, mit Michael Rae)' },
    { name: 'Max More', role: 'Philosoph, Mitbegründer des modernen Transhumanismus', work: '„Principles of Extropy" (1990er)' },
  ],
  steelman: `Der Tod ist kein metaphysisches Schicksal, sondern ein biologischer Prozess: Altern ist die Anhäufung von Schäden an Zellen und Molekülen, die sich beschreiben und im Prinzip reparieren lassen („Hallmarks of Aging"). Die Medizin hat die Lebenserwartung in 150 Jahren fast verdoppelt; bei Modellorganismen lässt sich die Lebensspanne durch Genveränderungen vervielfachen. Bostroms „Fabel vom Drachen-Tyrannen" zeigt: Wir haben uns nur an den Tod gewöhnt, weil wir ihn nicht besiegen konnten – moralisch wäre es ein Skandal, ihn nicht zu bekämpfen. Langfristig lässt sich der Geist vielleicht sogar auf andere Träger übertragen (Mind Uploading). Der Einwand „Gott spielen" wurde schon gegen Narkose und Impfungen erhoben. Und ausgerechnet Christen, die Krankenhäuser gegründet haben, sollten nicht beim größten Feind der Menschheit Halt machen.`,
  biblical: {
    summary: `Christen stimmen dem Ausgangspunkt zu: „Der letzte Feind, der aufgehoben wird, ist der Tod" (1 Kor 15,26). Der Tod ist nach der Schrift nicht natürlich-gut, sondern Folge des Sündenfalls und ein Feind. Aber die Bibel zeigt auch, warum der Mensch ihn nicht selbst besiegen kann: Nach dem Fall verwehrt Gott den Zugang zum Baum des Lebens (Gen 3,22–24), damit der gefallene Zustand nicht verewigt wird. Der Versuch, sich aus eigener Kraft zu vergöttlichen – „ihr werdet sein wie Gott" (Gen 3,5), der Turm, „des Spitze bis an den Himmel reiche" (Gen 11,4) –, ist das Urmuster der Selbsterlösung. Die christliche Antwort ist die Auferstehung: nicht Konservierung des alten, sondern Verwandlung in einen unvergänglichen Leib (1 Kor 15,42–44; Phil 3,21), geschenkt von dem, der den Tod selbst besiegt hat.`,
    detail: `- **1 Kor 15,26.54–55**: Der Tod wird „verschlungen in den Sieg" – durch Christus, nicht durch Technik.
- **Gen 3,22–24**: Die Väter (Irenäus, Gregor von Nazianz) lasen das Verwehren des Lebensbaumes als Barmherzigkeit: Ein endloses Leben im Zustand der Sünde wäre keine Erlösung, sondern ein verewigtes Übel.
- **Ps 90,12**: „Lehre uns bedenken, daß wir sterben müssen, auf daß wir klug werden" – das Wissen um die Endlichkeit ist Quelle der Weisheit, nicht nur Kränkung.
- **Hebr 9,27**: „Wie den Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht" – der Tod ist zugleich Schwelle zur Begegnung mit Gott.
- **Offb 21,4**: Die christliche Hoffnung ist umfassender als jede Technik: kein Tod, kein Leid, kein Geschrei, kein Schmerz – eine erneuerte Schöpfung.`,
    sources: [
      { kind: 'bibel', work: '1. Korinther', ref: '15,26', quote: `Der letzte Feind, der aufgehoben wird, ist der Tod.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis', ref: '3,22–24', quote: `Nach dem Fall verwehrt Gott den Zugang zum Baum des Lebens, damit der Mensch nicht davon esse und ewig lebe; Cherubim bewachen den Weg.`, status: 'paraphrase' },
      { kind: 'bibel', work: 'Genesis', ref: '11,4', quote: `Wohlauf, laßt uns eine Stadt und einen Turm bauen, des Spitze bis an den Himmel reiche, daß wir uns einen Namen machen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Psalm', ref: '90,12', quote: `Lehre uns bedenken, daß wir sterben müssen, auf daß wir klug werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Philipper', ref: '3,21', quote: `… welcher unsern nichtigen Leib verklären wird, daß er ähnlich werde seinem verklärten Leibe.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,4', quote: `Und Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein, noch Leid noch Geschrei noch Schmerz wird mehr sein; denn das Erste ist vergangen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche singt in der Osterzeit: Christus ist von den Toten auferstanden und hat durch seinen Tod den Tod zertreten. Für Athanasius ist der Tod die Rückkehr des Menschen ins Nichts, aus dem er geschaffen wurde; der Logos wurde Mensch, um den Tod von innen zu überwinden – „Er wurde Mensch, damit wir vergöttlicht würden" (De Incarnatione 54). Das ist das orthodoxe Gegenbild zum Transhumanismus: **Theosis** statt Selbstoptimierung – Vergöttlichung als Gnadengeschenk in Gemeinschaft mit Gott, nicht als technisches Upgrade. Die Kirche bejaht die Medizin (sie hat Krankenhäuser gegründet und betreibt sie bis heute), lehnt aber die Hybris ab, das Menschsein selbst neu zu definieren und das Heil von der Technik zu erwarten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '54,3', year: 'um 318/335', quote: `Er wurde Mensch, damit wir vergöttlicht würden.`, original: 'Αὐτὸς γὰρ ἐνηνθρώπησεν, ἵνα ἡμεῖς θεοποιηθῶμεν.', translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '4–9; 27', quote: `Der Mensch, aus dem Nichts geschaffen, verfiel durch die Übertretung der Verwesung; der Logos nahm einen sterblichen Leib an, um den Tod zu vernichten – darum verachten Christen den Tod, wie man einen besiegten Tyrannen verlacht.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'III,23,6', quote: `Gott vertrieb Adam aus dem Paradies nicht aus Neid, sondern aus Erbarmen, damit er nicht für immer ein Sünder bliebe und die Sünde nicht unsterblich würde.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 45 (Osterpredigt)', ref: '8; vgl. Oratio 38,12', quote: `Der Tod wurde zum Gewinn: Er schneidet die Sünde ab, damit das Böse nicht unsterblich sei.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Ostertroparion (auch in der koptischen Osterzeit gesungen)', quote: `Christus ist auferstanden von den Toten, hat durch den Tod den Tod zertreten und denen in den Gräbern das Leben geschenkt.`, status: 'paraphrase', note: 'Gängige deutsche Fassung; Wortlaut je nach Übersetzung leicht verschieden.' },
    ],
  },
  opposingView: {
    summary: `**Stand der Altersforschung:** Die Biologie des Alterns wird immer besser verstanden (López-Otín u. a., „The Hallmarks of Aging", Cell 2013, erweitert 2023). Bei Fadenwürmern, Fliegen und Mäusen lässt sich die Lebensspanne experimentell deutlich verlängern; beim Menschen gibt es vielversprechende Ansätze (Senolytika, Rapamycin-Analoga), aber keine nachgewiesene Verlangsamung des Alterns. Eine Analyse von S. Jay Olshansky u. a. (Nature Aging, 2024) kam zu dem Schluss, dass eine radikale Verlängerung der menschlichen Lebenserwartung in diesem Jahrhundert unplausibel ist, weil sich die Zuwächse verlangsamen. Die längste dokumentierte Lebensspanne liegt seit 1997 bei 122 Jahren (Jeanne Calment).`,
    detail: `**Mind Uploading:** Es gibt derzeit keine wissenschaftliche Methode dafür. Das vollständige „Schaltbild" des Fadenwurms *C. elegans* mit 302 Neuronen ist seit 1986 bekannt, sein Verhalten ist dennoch nicht vollständig simuliert; 2024 wurde das Konnektom der Fruchtfliege (rund 140.000 Neuronen) veröffentlicht. Das menschliche Gehirn hat etwa 86 Milliarden Neuronen und Hunderte Billionen Synapsen. Ob ein Upload überhaupt Bewusstsein und Identität trüge, ist eine philosophische Frage (siehe unten).

**Ehrlich:** Längere, gesündere Lebensspannen sind ein legitimes medizinisches Ziel. Die These, der Tod werde technisch „überwunden", ist dagegen eine Extrapolation, keine wissenschaftliche Prognose.`,
    sources: [
      { kind: 'wissenschaft', author: 'Carlos López-Otín u. a.', work: 'The Hallmarks of Aging', ref: 'Cell 153 (2013); erweiterte Fassung Cell 186 (2023)', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'S. Jay Olshansky u. a.', work: 'Implausibility of radical life extension in humans in the twenty-first century', ref: 'Nature Aging 4 (2024)', year: '2024', status: 'paraphrase' },
      { kind: 'gegner', author: 'Nick Bostrom', work: 'The Fable of the Dragon-Tyrant', ref: 'Journal of Medical Ethics 31 (2005), 273–277', year: '2005', quote: `In der Fabel fordert ein Drache täglich Tausende Opfer; die Menschen gewöhnen sich daran und rechtfertigen ihn sogar – bis sie erkennen, dass sie ihn besiegen können. Der Drache steht für das Altern.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Yuval Noah Harari', work: 'Homo Deus', ref: 'Kap. 1', year: '2016', quote: `Für moderne Menschen ist der Tod ein technisches Problem, das man lösen kann und soll; jedes technische Problem hat eine technische Lösung.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Sven Dorkenwald u. a. (FlyWire Consortium)', work: 'Neuronal wiring diagram of an adult brain', ref: 'Nature 634 (2024)', year: '2024', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Christen sind keine Fans des Todes – die Bibel nennt ihn den „letzten Feind" (1 Kor 15,26), und Christen haben die Krankenhäuser erfunden. Aber Technik kann den Tod höchstens hinausschieben: Unfälle, Gewalt und das Ende des Universums bleiben. Ein „Upload" wäre eine Kopie, nicht du. Und ein endloses Leben ohne innere Verwandlung wäre, wie die Väter sagen, ein unsterblich gemachtes Übel. Die christliche Hoffnung ist größer: Auferstehung zu einem verwandelten Leben – verbürgt durch den, der selbst aus dem Grab kam.`,
  keyPoints: [
    `**Gemeinsamer Feind:** Christen teilen das Ziel, Krankheit und Tod zu bekämpfen; Medizin ist Nächstenliebe (Mt 25,36).`,
    `**Aufschub ist nicht Sieg:** Auch ohne Altern gäbe es Unfälle, Gewalt, Katastrophen und schließlich den Wärmetod des Universums. „Den Tod überwinden" ist physikalisch nicht in Sicht.`,
    `**Identitätsproblem:** Eine Kopie meiner Gehirndaten, angefertigt während ich lebe, ist offensichtlich nicht ich – also auch nicht nach meinem Tod.`,
    `**Unsterblich gemachtes Übel:** Ohne moralische Erneuerung verlängert Technik auch Gier, Hass und Macht – der Lebensbaum wurde nach dem Fall aus Barmherzigkeit verwehrt.`,
    `**Ersatzreligion:** Der Transhumanismus übernimmt christliche Hoffnungen (Unsterblichkeit, Verwandlung, neue Welt) und streicht deren Grund. Harari selbst spricht von „Techno-Religionen".`,
    `**Machtfrage:** Wer entscheidet, wer verbessert wird? C. S. Lewis warnte, die Herrschaft des Menschen über die Natur werde zur Herrschaft einiger Menschen über andere.`,
  ],
  argument: {
    name: 'Das Verdopplungsargument gegen Mind Uploading',
    summary: 'Wenn ein Upload mich fortsetzte, müsste auch eine gleichzeitige Kopie ich sein – was unmöglich ist.',
    premises: [
      {
        text: 'P1: Wenn das Hochladen meiner Gehirndaten mich selbst fortsetzt, dann gilt das ebenso, wenn der Upload angefertigt wird, während ich noch lebe.',
        support: `Ob mein biologisches Gehirn danach zerstört wird oder nicht, ändert nichts an der Beziehung zwischen mir und der Kopie; diese hängt nur an der Übertragung der Information.`,
      },
      {
        text: 'P2: Zwei gleichzeitig existierende, getrennt erlebende Personen können nicht beide mit mir identisch sein.',
        support: `Identität ist transitiv: Wären A und B beide ich, wären A und B miteinander identisch – sie erleben aber Verschiedenes. Das Problem ist seit Parfit (1984) bekannt; die Philosophin Susan Schneider warnt deshalb, Uploading könne faktisch Selbsttötung sein.`,
        sources: [
          { kind: 'fachliteratur', author: 'Derek Parfit', work: 'Reasons and Persons', ref: 'Teil III', year: '1984', status: 'paraphrase' },
          { kind: 'fachliteratur', author: 'Susan Schneider', work: 'Artificial You: AI and the Future of Your Mind', year: '2019', status: 'paraphrase', note: 'Schneider ist keine christliche Apologetin.' },
        ],
      },
    ],
    conclusion: 'Mind Uploading erzeugt bestenfalls eine Kopie, nicht eine Fortsetzung meiner Person. Das Versprechen „Du wirst ewig leben" wird dadurch nicht eingelöst.',
  },
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel der Auferstehung',
      text: `Paulus nennt den Tod den „letzten Feind" und beschreibt die Auferstehung als Verwandlung: „Es wird gesät verweslich und wird auferstehen unverweslich" (1 Kor 15,42). Der Auferstehungsleib ist nicht der alte, verlängerte Leib, sondern ein „geistlicher Leib" – derselbe Mensch, aber vollendet. Grund dieser Hoffnung ist ein historisches Ereignis: Christus ist auferstanden als „Erstling unter denen, die da schlafen" (1 Kor 15,20).`,
      sources: [
        { kind: 'bibel', work: '1. Korinther', ref: '15,20.42–44', quote: `Es wird gesät verweslich und wird auferstehen unverweslich.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Menschwerdung',
      text: `Für Athanasius ist der Tod nicht bloß biologisches Ende, sondern Verfall des Menschen in die Vergänglichkeit, aus der ihn nur der Schöpfer selbst herausholen kann. Kein Geschöpf konnte die Verwesung rückgängig machen; darum nahm der Logos einen menschlichen Leib an, starb und erstand, damit der Tod seine Macht verliere. Als Beweis führt Athanasius an, dass selbst Kinder und Frauen unter den Christen den Tod nicht mehr fürchten.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '6–10; 27–29', status: 'paraphrase' },
      ],
    },
    {
      person: 'gregor-nazianz',
      role: 'als Theologe des Ostergeheimnisses',
      text: `Gregor deutet den Tod nach dem Sündenfall als Akt göttlicher Barmherzigkeit: Er setzt der Sünde eine Grenze, damit das Böse nicht unsterblich werde. Das ist der tiefste Einwand gegen den Traum einer technischen Unsterblichkeit: Unsterblichkeit ohne Heiligung wäre kein Himmel, sondern ein endloses Gefängnis des Ich.`,
      sources: [
        { kind: 'kirchenvater', author: 'Gregor von Nazianz', work: 'Oratio 45', ref: '8', status: 'paraphrase' },
      ],
    },
    {
      person: 'lennox',
      role: 'als Analytiker des Transhumanismus',
      text: `Lennox zeigt in *2084*, dass Hararis „Homo Deus" ein religiöses Projekt ist: Es verspricht Glück, Unsterblichkeit und Göttlichkeit durch Technik. Er stellt dem die Auferstehung Jesu gegenüber – ein Ereignis, für das es historische Belege gibt – und die christliche Verheißung, dass Menschen nicht durch Upgrades, sondern durch Gottes Gnade verwandelt werden. Das „Homo Deus"-Projekt sei die moderne Fassung der ältesten Versuchung: „Ihr werdet sein wie Gott."`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Lennox', work: '2084: Artificial Intelligence and the Future of Humanity', ref: 'Kap. „Homo Deus" und „The Genuine Homo Deus"', year: '2020', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker der technokratischen Menschenformung',
      text: `In *Die Abschaffung des Menschen* warnt Lewis, dass die Macht des Menschen über die Natur sich bei näherem Hinsehen als Macht einiger Menschen über andere erweist – mit der Natur als Werkzeug. Wer die menschliche Natur selbst umgestalten will, braucht Maßstäbe; wer aber alle Maßstäbe für bloße Natur hält, hat am Ende nur noch die Wünsche der Gestalter. Lewis nennt das Ergebnis die „Abschaffung des Menschen".`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', ref: 'Kap. 3', year: '1943', quote: `Was wir die Macht des Menschen über die Natur nennen, erweist sich als eine Macht, die einige Menschen mit der Natur als Werkzeug über andere Menschen ausüben.`, original: 'What we call Man\'s power over Nature turns out to be a power exercised by some men over other men with Nature as its instrument.', translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
    },
  ],
  dialog: [
    {
      id: 'medizin-verlaengert-schon',
      objection: `Die Medizin hat die Lebenserwartung schon fast verdoppelt. Warum sollte sie ausgerechnet vor dem Tod Halt machen? Lies Bostroms Fabel vom Drachen-Tyrannen.`,
      objectionBy: 'Nick Bostrom',
      answer: `Gesündere und längere Leben sind gut – Christen haben dafür Krankenhäuser gegründet. Aber Verlängern ist nicht Überwinden. Selbst Altersforscher wie Olshansky halten eine radikale Verlängerung in diesem Jahrhundert für unplausibel. Und auch ohne Altern blieben Unfälle, Gewalt, Seuchen – und am Ende der Wärmetod des Universums.`,
      followUps: [
        {
          id: 'backups-raumfahrt',
          objection: `Mit Backups, Raumfahrt und genug Zeit finden wir auch dafür Lösungen. Irgendwie.`,
          objectionBy: 'Ray Kurzweil',
          answer: `„Irgendwie" ist kein wissenschaftliches Argument, sondern Glaube. Für den zweiten Hauptsatz der Thermodynamik ist kein Ausweg bekannt. Hier zeigt sich, dass der Transhumanismus eine Heilslehre ist: Harari selbst nennt solche Weltanschauungen „Techno-Religionen".`,
          followUps: [
            {
              id: 'lieber-technik-als-maerchen',
              objection: `Lieber hoffe ich auf Technik als auf religiöse Märchen.`,
              answer: `Die Frage ist, welche Hoffnung besser begründet ist. Die technische Unsterblichkeit beruht auf Hochrechnungen von Trends. Die christliche Hoffnung beruht auf einem Ereignis der Geschichte – der Auferstehung Jesu, für die es ernsthafte historische Belege gibt. Prüfe beide mit derselben Strenge.`,
              questionsBack: [
                `Welche Beobachtung würde deinen Glauben an die technische Überwindung des Todes widerlegen?`,
              ],
              followUps: [
                {
                  id: 'auferstehung-intersubjektive-fiktion',
                  objection: `Religionen sind intersubjektive Fiktionen – Geschichten, an die viele glauben, wie Geld oder Nationen. Die Auferstehung ist eine solche Geschichte. Sie war nützlich, um Menschen zu verbinden, mehr nicht.`,
                  objectionBy: 'Yuval Noah Harari (Sapiens; Homo Deus)',
                  answer: `Harari nennt auch Menschenrechte, Liberalismus und Humanismus „Fiktionen" – er kann also nicht zwischen wahren und falschen Geschichten unterscheiden, ohne die eigene Werteordnung mit aufzulösen. Die Auferstehung ist aber keine zeitlose Moralgeschichte, sondern eine **historische Behauptung** über ein leeres Grab und Begegnungen mit dem Auferstandenen, die Paulus schon um 55 n. Chr. mit Namen von Zeugen überliefert (1 Kor 15,3–8). Solche Behauptungen kann man historisch prüfen – Fiktionen nicht.`,
                  detail: `Hararis Unterscheidung zwischen „objektiv", „subjektiv" und „intersubjektiv" ist hilfreich für Geld und Firmen. Aber er verwendet sie wie ein Lösungsmittel für alles, was über Biologie hinausgeht – einschließlich der Würde des Menschen. Frage ihn, ob die Würde eines behinderten Kindes „nur eine Fiktion" ist. Für die Auferstehung verweise auf die historischen Argumente (frühe Bekenntnisformel, leeres Grab, Erscheinungen, Entstehung der Kirche) – siehe Themenblock zur Auferstehung.`,
                  sources: [
                    { kind: 'bibel', work: '1. Korinther', ref: '15,3–8', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift, und daß er begraben sei, und daß er auferstanden sei am dritten Tage nach der Schrift …`, translation: 'Luther 1912', status: 'paraphrase', note: 'Wortlaut Luther 1912 sinngemäß wiedergegeben; vor wörtlicher Verwendung abgleichen.' },
                    { kind: 'gegner', author: 'Yuval Noah Harari', work: 'Sapiens: A Brief History of Humankind', ref: 'Kap. 2', year: '2011 (engl. 2014)', status: 'paraphrase' },
                  ],
                  questionsBack: [
                    `Ist die Würde eines schwerbehinderten Menschen eine Fiktion – oder eine Wirklichkeit?`,
                    `Nach welchem Kriterium unterscheidest du eine wahre von einer nützlichen Geschichte?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'upload',
      objection: `Der Geist ist Information. Information kann man kopieren. Wir werden unseren Geist hochladen und digital ewig leben (Kurzweil).`,
      objectionBy: 'Ray Kurzweil',
      targetsPremise: 1,
      answer: `Stell dir vor, der Upload gelingt, während du noch lebst. Dann sitzen zwei „Du" da – und offensichtlich bist du nur einer von beiden. Also ist der Upload eine Kopie, kein Umzug. Wenn danach dein biologisches Gehirn stirbt, stirbst du. Und ob die Kopie überhaupt etwas erlebt, hängt an der ungeklärten Frage, ob Rechnen Bewusstsein erzeugt.`,
      followUps: [
        {
          id: 'schrittweise-ersetzung',
          objection: `Dann ersetzen wir die Neuronen eben schrittweise durch Chips – wie das Schiff des Theseus. Du bemerkst den Übergang gar nicht.`,
          objectionBy: 'David Chalmers (Szenario der schrittweisen Ersetzung)',
          targetsPremise: 2,
          answer: `Dass du nichts „bemerkst", setzt voraus, dass die Chips Erleben tragen – genau das ist strittig. Und das Schiff des Theseus zeigt eher, dass Identität mehr ist als ein Muster von Teilen. Wenn Personen nur Muster wären, wäre die Frage „Bin das noch ich?" sinnlos – sie ist es aber nicht.`,
          followUps: [
            {
              id: 'identitaet-unwichtig',
              objection: `Parfit hat gezeigt: Persönliche Identität ist gar nicht das, worauf es ankommt. Psychologische Kontinuität genügt.`,
              objectionBy: 'Derek Parfit',
              answer: `Das ist konsequent – aber dann bricht das transhumanistische Versprechen zusammen. Was weiterlebt, ist „jemand wie du", nicht du. Kaum jemand würde für dieses Versprechen sein Leben einsetzen. Die christliche Hoffnung ist anders: Gott bewahrt die Person – die Seele besteht fort – und erweckt den Leib verwandelt auf. Die Identität wird von Gott verbürgt, nicht von einer Datei.`,
              followUps: [
                {
                  id: 'atome-ausgetauscht',
                  objection: `Deine Atome werden ohnehin ständig ausgetauscht. Du bist schon jetzt nur ein Muster, das über wechselndes Material läuft. Der Upload ist nur ein schnellerer Materialwechsel.`,
                  objectionBy: 'Ray Kurzweil',
                  answer: `Der Stoffwechsel ist ein **kontinuierlicher** Prozess in **einem** lebendigen Organismus – nicht das Anfertigen einer Kopie an einem anderen Ort. Das zeigt der Test: Beim Stoffwechsel entsteht nie ein zweites Ich; beim Upload schon. Wenn du nur ein Muster wärst, wären du und deine Kopie gleichermaßen „du" – und das ist offensichtlich falsch, sobald beide nebeneinandersitzen.`,
                  detail: `Interessanterweise hat schon Gregor von Nyssa im 4. Jahrhundert über den Stoffwechsel nachgedacht: Der Leib verändert sich ständig, aber die Seele bewahrt die „Gestalt" (eidos), die den Leib zu diesem Leib macht, und erkennt bei der Auferstehung das Ihre wieder. Die Person ist für ihn weder bloß Materie noch bloß Muster, sondern eine von Gott geschaffene, vernunftbegabte Seele in Einheit mit ihrem Leib. Das erklärt, warum Identität den Stoffwechsel überdauert, eine Kopie aber nicht „ich" ist.`,
                  voices: [
                    {
                      person: 'gregor-nyssa',
                      role: 'als Kirchenvater und Denker der Auferstehung',
                      text: `In seinem Dialog *Über die Seele und die Auferstehung* lässt Gregor seine Schwester Makrina erklären, dass die Seele auch nach der Auflösung des Leibes mit dessen Elementen verbunden bleibt und sie bei der Auferstehung wieder sammelt. Die Identität des Auferstandenen beruht nicht auf denselben Atomen, sondern auf der Seele, die ihren Leib „kennt" – eine Antwort auf das Problem des Stoffwechsels lange vor der modernen Philosophie des Geistes.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Gregor von Nyssa', work: 'De anima et resurrectione (Über die Seele und die Auferstehung)', year: 'um 380', status: 'paraphrase' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Wenn beim Upload zwei „Du" entstehen – welches davon bist du?`,
                    `Hat dein Stoffwechsel jemals einen zweiten von dir hervorgebracht?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gott-spielen',
      objection: `„Gott spielen" hat man schon gegen Impfungen und Narkose gesagt. Eure Bedenken sind einfach Technikfeindlichkeit.`,
      objectionBy: 'Julian Savulescu / John Harris',
      answer: `Christen sind nicht technikfeindlich – Basilius gründete im 4. Jahrhundert eines der ersten Krankenhäuser. Der Unterschied liegt zwischen **Heilen**, das die menschliche Natur wiederherstellt, und dem Projekt, sie nach eigenen Wünschen neu zu entwerfen und das Heil von der Technik zu erwarten. Das ist die Logik von Babel.`,
      followUps: [
        {
          id: 'enhancement-freiwillig',
          objection: `Enhancement ist freiwillig. Niemand wird gezwungen.`,
          objectionBy: 'Liberaler Transhumanismus',
          answer: `Freiwilligkeit hält dem Wettbewerb nicht stand – wie beim Doping im Sport: Wenn alle anderen sich verbessern, wird der Verzicht zum Nachteil. Harari selbst warnt vor einer Spaltung in eine biotechnisch verbesserte Elite und eine „nutzlose Klasse". C. S. Lewis hat das vorausgesehen: Die Macht über die Natur wird zur Macht einiger über andere.`,
          questionsBack: [
            `Wer legt fest, welche Eigenschaften als „Verbesserung" gelten – und wer bezahlt sie?`,
          ],
          followUps: [
            {
              id: 'pflicht-zu-besten-kindern',
              objection: `Eltern haben sogar eine moralische Pflicht, aus möglichen Kindern das mit den besten Lebensaussichten auszuwählen – „procreative beneficence". Wer darauf verzichtet, nimmt seinem Kind Chancen.`,
              objectionBy: 'Julian Savulescu (Bioethics 15, 2001)',
              answer: `Hier liegt der Kern des Konflikts: Ein Kind wird vom **Geschenk** zum **Produkt**, das Qualitätsanforderungen erfüllen muss. Wer Kinder nach Eigenschaften auswählt, sagt den Ausgewählten: Du bist da, weil du gepasst hast – und den Menschen mit Behinderung: Dich hätte man besser vermieden. Das 20. Jahrhundert hat gezeigt, wohin die Idee führt, „bessere" Menschen planen zu müssen.`,
              detail: `Bemerkenswert ist, dass auch säkulare Denker so argumentieren: Michael Sandel (*The Case against Perfection*, 2007) warnt, die Haltung des „Bemeisterns" zerstöre die Offenheit für das Unerwartete, die Elternliebe ausmacht. Behindertenrechtsorganisationen kritisieren die Botschaft, die in der Selektion liegt. Aus christlicher Sicht ist jedes Kind Ebenbild Gottes, ehe es irgendeine Eigenschaft vorweisen kann (Ps 139,13–16). Das heißt nicht, Krankheiten nicht zu heilen – Heilen dient dem Kind, Selektion wählt zwischen Kindern.`,
              voices: [
                {
                  person: 'john-wyatt',
                  role: 'als Arzt (Neonatologe) und Bioethiker',
                  text: `John Wyatt, langjähriger Neonatologe in London, beschreibt in *Matters of Life and Death*, wie die Medizin zwischen zwei Haltungen schwankt: dem Menschen als „Kunstwerk Gottes", das man pflegt und heilt, und dem Menschen als Produkt, das man nach Wunsch gestaltet. Er warnt, dass eine Kultur der Auswahl subtil den Wert von Menschen mit Behinderung infrage stellt, und plädiert für eine Medizin des Heilens und Begleitens.`,
                  sources: [
                    { kind: 'fachliteratur', author: 'John Wyatt', work: 'Matters of Life and Death: Human Dilemmas in the Light of the Christian Faith', year: '2. Aufl. 2009', status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'gegner', author: 'Julian Savulescu', work: '„Procreative Beneficence: Why We Should Select the Best Children", Bioethics 15', year: '2001', status: 'paraphrase' },
                { kind: 'fachliteratur', author: 'Michael J. Sandel', work: 'The Case against Perfection: Ethics in the Age of Genetic Engineering', year: '2007', status: 'paraphrase' },
              ],
              questionsBack: [
                `Was sagt die Pflicht, „das beste Kind" zu wählen, einem Menschen mit Down-Syndrom über seinen Wert?`,
                `Liebst du dein Kind, weil es deine Kriterien erfüllt – oder weil es dein Kind ist?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'auferstehung-auch-upload',
      objection: `Eure Auferstehung ist doch auch nur ein göttlicher Upload: Gott stellt aus seinem Gedächtnis eine Kopie her.`,
      objectionBy: 'Skeptiker',
      answer: `Nein. Nach orthodoxer Lehre hört die Person im Tod nicht auf zu existieren: Die Seele lebt fort, und Gott vereint sie bei der Auferstehung mit dem verwandelten Leib. Es gibt also keine Lücke, die eine Kopie füllen müsste. Bemerkenswert ist eher, dass der Transhumanismus die christliche Hoffnung nachahmt – Unsterblichkeit, Verwandlung, neue Welt –, aber ohne den, der sie verbürgt.`,
      followUps: [
        {
          id: 'keine-seele',
          objection: `Es gibt aber keine Seele, die den Tod überdauert. Das ist reine Behauptung.`,
          objectionBy: 'Materialist',
          answer: `Das ist die Kernfrage, und sie wird an anderer Stelle ausführlich diskutiert (Bewusstsein, Nahtoderfahrungen). Hier genügt: Auch die These, die Person sei nur ein Datenmuster, ist eine unbewiesene Behauptung – und zwar eine, die das transhumanistische Versprechen selbst untergräbt. Der Christ hat zusätzlich einen historischen Anker: die Auferstehung Jesu.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn dein Upload angefertigt wird, während du noch lebst – welcher von beiden bist du?`,
    `Wie willst du dem zweiten Hauptsatz der Thermodynamik entkommen?`,
    `Wäre ein unsterblicher Tyrann eine gute Nachricht für die Menschheit?`,
    `Wer entscheidet, wer „verbessert" wird – und was passiert mit denen, die es sich nicht leisten können?`,
  ],
  avoid: [
    `„Lebensverlängerung ist Sünde." – Falsch; Medizin ist Ausdruck christlicher Nächstenliebe.`,
    `Apokalyptische Spekulationen (z. B. Chips als „Malzeichen des Tieres") – sie schrecken ab und lenken von der Sachfrage ab.`,
    `So tun, als sei die Biogerontologie Unsinn – sie ist seriöse Wissenschaft; nur die Heilsversprechen sind es nicht.`,
  ],
  concessions: [
    `Altern ist biologisch erforschbar, und eine Verlängerung der gesunden Lebensspanne ist ein legitimes Ziel.`,
    `Der Einwand „Gott spielen" wurde historisch tatsächlich auch gegen sinnvolle Medizin missbraucht.`,
    `Christen müssen erklären, wo genau die Grenze zwischen Heilen und Umgestalten verläuft – das ist nicht immer einfach.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'John C. Lennox', work: '2084: Artificial Intelligence and the Future of Humanity', year: '2020', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man (dt. Die Abschaffung des Menschen)', year: '1943', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung des Logos (De Incarnatione)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Susan Schneider', work: 'Artificial You: AI and the Future of Your Mind', year: '2019', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Transhumanismus', 'Tod', 'Mind Uploading', 'Auferstehung', 'Theosis'],
  related: [
    'informatik-ki/ki-wird-bewusst',
    'sinn-existenz/tod-ist-das-ende',
    'auferstehung/halluzinationen',
    'neurowissenschaften/nahtoderfahrungen-halluzination',
    'bioethik/kirche-gegen-forschung',
  ],
};

export default claim;
