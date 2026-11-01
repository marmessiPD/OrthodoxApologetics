import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'junk-dna',
  title: `„Der Großteil unserer DNA ist Müll – ein Beweis für Evolution."`,
  proponents: [
    { name: 'Larry Moran', role: 'Biochemiker, University of Toronto', work: 'What\'s in Your Genome? 90% of Your Genome Is Junk (2023)' },
    { name: 'Dan Graur', role: 'Molekularer Evolutionsbiologe, University of Houston', work: 'Graur u. a., „On the immortality of television sets", Genome Biology and Evolution 5 (2013)' },
    { name: 'T. Ryan Gregory', role: 'Evolutionsbiologe, University of Guelph', work: 'Palazzo & Gregory, „The case for junk DNA", PLoS Genetics 10 (2014); der „Zwiebeltest"' },
    { name: 'Kenneth R. Miller', role: 'Zellbiologe, Brown University', work: 'Only a Theory (2008)' },
    { name: 'Jerry A. Coyne', role: 'Evolutionsbiologe, University of Chicago', work: 'Why Evolution Is True (2009)' },
  ],
  steelman: `Nur etwa 1–2 % des menschlichen Genoms kodieren Proteine. Rund die Hälfte besteht aus Transposons – „springenden Genen", meist zerfallenen Kopien, die sich wie Parasiten vervielfältigt haben –, dazu kommen Pseudogene, endogene Retroviren und repetitive Sequenzen. Vergleiche über Säugetiere hinweg zeigen, dass nur rund 8–10 % des Genoms durch Selektion konserviert sind. Die Mutationslast spricht dagegen, dass der Großteil funktional sein kann: Bei rund 100 neuen Mutationen pro Mensch und Generation wäre die Menschheit längst ausgestorben, wenn jede Base zählte. Und der „Zwiebeltest": Eine Zwiebel hat etwa fünfmal so viel DNA wie wir, manche Lungenfische über dreißigmal so viel – warum sollte ein Designer das tun? Die ENCODE-Behauptung von 2012, 80 % des Genoms seien „funktional", beruhte auf einer absurden Definition: Jede biochemische Aktivität galt als Funktion. Ein Genom voller Wracks ist genau das, was eine lange, ungelenkte Geschichte hinterlässt.`,
  biblical: {
    summary: `Die Bibel macht keine Aussage über den Anteil funktionaler DNA. Sie preist die kunstvolle Bildung des Menschen im Mutterleib (Ps 139,13–16) – ohne Chemie zu lehren. Für den Glauben hängt nichts an einem bestimmten Prozentsatz: Eine gute Schöpfung, die durch den Fall Verfall kennt, kann auch Spuren von Zerfall im Genom aufweisen. Christen sollten daher weder triumphierend „100 % funktional" behaupten noch die Frage für entschieden halten.`,
    sources: [
      { kind: 'bibel', work: 'Psalmen', ref: '139,13', translation: 'Luther 1912', status: 'verbatim', quote: `Denn du hast meine Nieren in deiner Gewalt; du warst über mir in meiner Mutter Leibe.` },
      { kind: 'bibel', work: 'Psalmen', ref: '139,16', translation: 'Luther 1912', status: 'verbatim', quote: `Deine Augen sahen mich, da ich noch unbereitet war, und waren alle Tage auf dein Buch geschrieben, die noch werden sollten und derselben keiner da war.` },
    ],
  },
  church: {
    summary: `Die koptische Kirche bekennt die Erschaffung des Menschen durch Gott und seinen Fall, durch den Verderbnis und Tod in die Welt kamen (Athanasius, De Incarnatione 4–5). Eine Theologie, die Verfall ernst nimmt, braucht kein perfektes Genom. Zugleich ermutigt die alexandrinische Tradition, die Schöpfung als von Vernunft durchdrungen zu betrachten und deshalb vorschnelle Urteile über „Nutzloses" zu vermeiden.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Über die Menschwerdung (De Incarnatione)', ref: '4–5', status: 'paraphrase', quote: `Durch die Übertretung kamen die Menschen unter die Herrschaft der Verderbnis, die ihnen von Natur aus drohte.` },
    ],
  },
  opposingView: {
    summary: `Die Frage, welcher Anteil des Genoms funktional ist, ist **eine der offenen Kontroversen der Genomforschung**. ENCODE (Nature 2012) schrieb rund 80 % des Genoms eine „biochemische Funktion" zu; Kritiker (Graur et al. 2013, Palazzo & Gregory 2014) wandten ein, biochemische Aktivität sei nicht gleich Funktion. Führende ENCODE-Forscher präzisierten 2014 ihre Begriffe (Kellis et al.). Auf Konservierung beruhende Schätzungen liegen bei rund 8–10 % (Rands et al. 2014; Zoonomia-Konsortium 2023). Zugleich werden laufend neue Funktionen nichtkodierender Elemente entdeckt: regulatorische Sequenzen, lange nichtkodierende RNAs, Funktionen von Transposons und Retroviren.`,
    detail: `Ehrlich festhalten:
- Konservierung misst gemeinsame Einschränkung über viele Arten; artspezifische Funktionen werden damit nicht erfasst. Wie groß dieser Anteil ist, ist offen.
- Die Mutationslast-Argumente hängen von Annahmen über die Empfindlichkeit funktionaler Sequenzen ab; Graur (2017) schätzte eine Obergrenze von etwa einem Viertel.
- Der Begriff „Junk-DNA" wurde 1972 von Susumu Ohno popularisiert. Schon 1980 erklärten Orgel & Crick sowie Doolittle & Sapienza „egoistische DNA" evolutionär – andere Evolutionsbiologen erwarteten dagegen Funktionen. Junk ist also keine zwingende Vorhersage der Evolutionstheorie, eher der Neutralen Theorie und der Populationsgenetik.`,
    sources: [
      { kind: 'wissenschaft', author: 'ENCODE Project Consortium', work: '„An integrated encyclopedia of DNA elements in the human genome", Nature 489', ref: 'S. 57–74', year: '2012', status: 'paraphrase', quote: `Den Daten zufolge kann einem Großteil des Genoms, rund 80 %, mindestens eine biochemische Funktion zugeordnet werden.` },
      { kind: 'gegner', author: 'Dan Graur u. a.', work: '„On the immortality of television sets: ‚function‘ in the human genome according to the evolution-free gospel of ENCODE", Genome Biology and Evolution 5 (3)', ref: 'S. 578–590', year: '2013', status: 'paraphrase', quote: `ENCODE habe Funktion falsch definiert; biochemische Aktivität ohne Selektionsnachweis sei keine Funktion.` },
      { kind: 'wissenschaft', author: 'Manolis Kellis u. a.', work: '„Defining functional DNA elements in the human genome", PNAS 111 (17)', ref: 'S. 6131–6138', year: '2014', status: 'paraphrase', quote: `Genetische, evolutionäre und biochemische Ansätze liefern verschiedene, sich ergänzende Schätzungen von Funktion.` },
      { kind: 'wissenschaft', author: 'Chris M. Rands u. a.', work: '„8.2% of the human genome is constrained: variation in rates of turnover across functional element classes in the human lineage", PLoS Genetics 10 (7)', year: '2014', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Susumu Ohno', work: '„So much ‚junk‘ DNA in our genome", Brookhaven Symposia in Biology 23', ref: 'S. 366–370', year: '1972', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wie viel unserer DNA funktional ist, ist eine offene Forschungsfrage – Schätzungen reichen von unter 10 % bis über 80 %, je nachdem, was man unter „Funktion" versteht. Seit Jahren werden laufend neue Funktionen in vermeintlichem Müll entdeckt. Und selbst wenn viel davon funktionslos wäre, bewiese das keinen ungelenkten Prozess: Ein guter Bauplan kann im Lauf der Zeit verfallen. Übrigens hat ID schon 1998 vorhergesagt, dass sich viel „Müll" als funktional erweisen wird – das ist eine prüfbare Vorhersage.`,
  keyPoints: [
    `**Offene Frage:** ENCODE (80 % biochemisch aktiv) und Konservierungsstudien (ca. 8–10 % eingeschränkt) messen Verschiedenes; die Wahrheit ist umstritten.`,
    `**Die Tendenz:** Immer mehr nichtkodierende Elemente erweisen sich als regulatorisch, strukturell oder als RNA-Gene (z. B. Xist, HOTAIR, regulatorische Funktionen von Alu-Elementen und Retroviren).`,
    `**Konservierung erfasst nicht alles:** Artspezifische Funktionen – gerade für das, was den Menschen ausmacht – sind per Definition nicht über Säugetiere konserviert.`,
    `**Junk ist keine zwingende Vorhersage der Evolution:** Viele Evolutionsbiologen erwarteten Funktion; Junk folgt eher aus der Neutralen Theorie (Moran, Lynch).`,
    `**ID machte eine riskante Vorhersage:** Dembski (1998) erwartete weitreichende Funktion – das macht ID prüfbar.`,
    `**Verfall ist kein Gegenbeweis:** Aus christlicher Sicht sind Zerfallsspuren nach dem Fall zu erwarten.`,
  ],
  voices: [
    {
      person: 'dembski',
      role: 'als Mathematiker und Design-Theoretiker',
      text: `Dembski schrieb 1998, Design-Denken sei kein „Forschungsstopper", sondern könne Forschung anstoßen, wo der Evolutionsgedanke sie behindere. Als Beispiel nannte er die „Junk-DNA": Aus der Sicht eines ungelenkten Flickwerks erwarte man viel nutzlose DNA, aus der Sicht eines Designs dagegen, dass die DNA so weit wie möglich Funktion zeigt. Damit verband ID sein Schicksal mit einer empirischen Frage, die sich in den folgenden Jahrzehnten klären würde.`,
      sources: [
        { kind: 'fachliteratur', author: 'William A. Dembski', work: '„Science and Design", First Things 86', year: '1998', status: 'paraphrase', quote: `Wenn Organismen entworfen sind, erwarten wir, dass die DNA so weit wie möglich Funktion zeigt.`, note: 'Sinngemäß; den englischen Originalwortlaut vor wörtlicher Verwendung prüfen.' },
      ],
    },
    {
      person: 'casey-luskin',
      role: 'als Wissenschaftskommunikator',
      text: `Luskin hat zahlreiche Fachveröffentlichungen gesammelt, die Funktionen für Transposons, Pseudogene, repetitive Sequenzen und nichtkodierende RNA beschreiben. Sein Argument: Das Narrativ vom „Müll" habe die Forschung jahrzehntelang eher gebremst, weil Bereiche des Genoms als uninteressant galten. Die Entwicklung seit ENCODE zeige, dass die Funktionsfrage offen und die ID-Vorhersage zumindest nicht widerlegt sei.`,
      sources: [
        { kind: 'fachliteratur', author: 'Jonathan Wells', work: 'The Myth of Junk DNA', year: '2011', status: 'paraphrase', note: 'Wells gehört der Vereinigungskirche (Moon-Bewegung) an; er wird hier nur als Quelle für eine Literaturübersicht angeführt, nicht als Stimme der christlichen Tradition.' },
        { kind: 'wissenschaft', author: 'Richard Sternberg, James A. Shapiro', work: '„How repeated retroelements format genome function", Cytogenetic and Genome Research 110', ref: 'S. 108–116', year: '2005', status: 'paraphrase', quote: `Wiederholte Retroelemente tragen zur Organisation und Funktion des Genoms bei.` },
      ],
    },
    {
      person: 'francis-collins',
      role: 'als Leiter des Humangenomprojekts (Position der theistischen Evolution)',
      text: `Collins führte in „The Language of God" (2006) verstümmelte Transposon-Kopien an identischen Stellen im Genom von Mensch und Maus als Indiz für gemeinsame Abstammung an. In späteren Jahren äußerte er sich zurückhaltender über den Begriff „Junk-DNA", weil sich immer mehr Funktionen zeigten. Seine Entwicklung illustriert, wie schnell sich der Kenntnisstand verschiebt – und dass gläubige Wissenschaftler hier unterschiedliche Akzente setzen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Francis S. Collins', work: 'The Language of God', ref: 'Kap. 5', year: '2006', status: 'paraphrase' },
        { kind: 'sonstiges', author: 'Francis S. Collins', work: 'Äußerung auf der 33. J.P. Morgan Healthcare Conference, San Francisco', ref: '13. Januar 2015', year: '2015', status: 'paraphrase', quote: `Man verwende den Begriff „Junk-DNA" nicht mehr; es sei ziemlich vermessen („hubris") gewesen anzunehmen, man könne auf irgendeinen Teil des Genoms verzichten – vieles davon „tut etwas".`, original: `We don't use that term anymore … It was pretty much a case of hubris to imagine that we could dispense with any part of the genome.`, note: 'Anlass und Kernaussage durch mehrere Berichte bestätigt (u. a. vom NIH-Twitterkanal verbreitet); Wortlaut nur aus Sekundärberichten, kein Transkript geprüft. Schon 2007 soll Collins gesagt haben, er verwende den Begriff nicht mehr.' },
      ],
    },
    {
      person: 'john-sanford',
      role: 'als Genetiker',
      text: `Sanford beschreibt das Genom als vielschichtig codiertes System, in dem dieselbe Sequenz mehrere Funktionen gleichzeitig tragen kann (überlappende Leserahmen, Regulation, Faltung der Chromatinstruktur). Zugleich betont er den fortschreitenden Verfall durch Mutationen. In seinem Modell ist beides zu erwarten: ein ursprünglich hochfunktionales Genom und zunehmende Zerfallsspuren.`,
      sources: [
        { kind: 'fachliteratur', author: 'John C. Sanford', work: 'Genetic Entropy (4. Aufl.)', year: '2014', status: 'paraphrase', note: 'Sanford vertritt eine Junge-Erde-Position, die nicht Lehre der koptischen Kirche ist; seine Thesen zur genetischen Entropie sind in der Fachwelt stark umstritten.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'neunzig-prozent-muell',
      objection: `Mindestens 90 % unseres Genoms sind Müll. Das zeigen die Mutationslast, die geringe Konservierung und der Zwiebeltest. Die Debatte ist entschieden.`,
      objectionBy: 'Larry Moran',
      answer: `Entschieden ist sie nicht – sie gehört zu den großen offenen Kontroversen der Genomik. Die Konservierungszahlen erfassen nur Funktionen, die über viele Arten geteilt werden, die Mutationslast-Rechnung hängt von Annahmen ab, und jedes Jahr werden neue Funktionen in nichtkodierender DNA beschrieben. Ich behaupte nicht, dass alles funktional ist. Ich behaupte, dass „90 % Müll" eine Prognose ist, kein Befund.`,
      followUps: [
        {
          id: 'zwiebeltest',
          objection: `Dann beantworte den Zwiebeltest: Warum braucht eine Zwiebel fünfmal so viel DNA wie ein Mensch, wenn das alles funktional ist?`,
          objectionBy: 'T. Ryan Gregory',
          answer: `Gute Frage – und ein Teil der Antwort stammt aus deiner eigenen Forschung: Die Genomgröße korreliert über viele Organismengruppen hinweg mit Zell- und Kerngröße und mit der Dauer der Zellteilung. DNA kann also eine „nukleotypische" Funktion haben, die nicht von der genauen Sequenz abhängt. Wer das Genom nur als Abfolge von Buchstaben betrachtet, übersieht seine physikalische Rolle.`,
          sources: [
            { kind: 'wissenschaft', author: 'T. Ryan Gregory', work: '„Coincidence, coevolution, or causation? DNA content, cell size, and the C-value enigma", Biological Reviews 76', year: '2001', status: 'paraphrase', quote: `Die Genomgröße korreliert mit Zellgröße und Zellteilungsdauer; Gregory selbst deutet dies nicht als Beleg für sequenzspezifische Funktion.` },
          ],
          followUps: [
            {
              id: 'nukleotypisch-ist-fuellmaterial',
              objection: `Nukleotypische Funktion heißt nicht, dass die Sequenz eine Rolle spielt. Das ist Füllmaterial – und genau das meine ich mit Junk.`,
              objectionBy: 'Larry Moran',
              answer: `Dann hat sich die Bedeutung von „Junk" aber verschoben: Von „nutzlose Überbleibsel" zu „DNA, deren Sequenz nicht im Detail zählt, deren Masse aber eine Rolle spielen kann". Für das ursprüngliche Argument – „ein Designer hätte keinen Müll eingebaut, also beweist das Evolution" – ist das ein großer Unterschied. Strukturelles Material ist nicht nutzlos.`,
              followUps: [
                {
                  id: 'collins-hat-eingeknickt',
                  objection: `Collins hat 2015 behauptet, man verwende den Begriff „Junk" nicht mehr – das war ein Einknicken vor dem ENCODE-Hype. In „The Language of God" hat er die Transposon-Wracks noch zu Recht als Beleg für gemeinsame Abstammung angeführt.`,
                  objectionBy: 'Larry Moran',
                  answer: `Mag sein, dass du Collins hier für zu nachgiebig hältst – das ist ein Streit unter Fachleuten, und genau das ist mein Punkt. Wenn der frühere Leiter des Humangenomprojekts, ein überzeugter Anhänger der Evolution, den Begriff als „Hybris" bezeichnet und du ihn verteidigst, dann ist die Frage offensichtlich nicht „entschieden". Ein Laie sollte daraus lernen: Junk-DNA ist kein sicheres Fundament für ein Argument gegen Design – und auch kein sicheres für eines dafür.`,
                  voices: [
                    {
                      person: 'francis-collins',
                      role: 'als Genetiker (Position der theistischen Evolution)',
                      text: `Collins hält an der gemeinsamen Abstammung fest, äußerte sich aber 2015 öffentlich zurückhaltend über den Begriff „Junk-DNA": Es sei vermessen gewesen anzunehmen, man könne Teile des Genoms als verzichtbar abtun. Seine Position zeigt, dass man die Abstammungsfrage und die Funktionsfrage getrennt behandeln kann.`,
                      sources: [
                        { kind: 'sonstiges', author: 'Francis S. Collins', work: 'Äußerung auf der J.P. Morgan Healthcare Conference, San Francisco', year: '2015', status: 'paraphrase', note: 'Wortlaut nur aus Sekundärberichten.' },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'encode-falsch-definiert',
          objection: `ENCODE hat Funktion absurd definiert: Jede Bindung eines Proteins, jede Transkription galt als „Funktion". Graur hat das zerlegt – und ENCODE ist zurückgerudert.`,
          objectionBy: 'Dan Graur',
          answer: `Einverstanden: Die 80 %-Zahl war in der Pressedarstellung übertrieben, und Kellis et al. haben 2014 differenziert. Aber die Gegenposition hat ein spiegelbildliches Problem: Sie definiert Funktion über Konservierung und übersieht damit, was artspezifisch oder schnell evolvierend ist. Beide Definitionen haben Grenzen – deshalb ist die Frage empirisch offen.`,
          followUps: [
            {
              id: 'zoonomia-zehn-prozent',
              objection: `Das Zoonomia-Projekt mit 240 Säugetiergenomen zeigt: Rund 10 % des menschlichen Genoms stehen unter Selektionsdruck. Das ist die beste Messung, die wir haben.`,
              objectionBy: 'Larry Moran',
              answer: `Es ist eine hervorragende Messung dessen, was über Säugetiere hinweg konserviert ist. Aber gerade die Funktionen, die den Menschen von anderen Säugetieren unterscheiden, können definitionsgemäß nicht über alle Säugetiere konserviert sein. Und viele funktionell belegte lange nichtkodierende RNAs sind nur schwach konserviert. Konservierung ist ein starkes Kriterium für Funktion, aber kein vollständiges.`,
              questionsBack: [
                `Wie würdest du eine menschenspezifische Funktion entdecken, wenn dein Kriterium Konservierung über Säugetiere ist?`,
              ],
              followUps: [
                {
                  id: 'mutationslast-obergrenze',
                  objection: `Artspezifische Funktionen hin oder her – die Mutationslast setzt eine harte Obergrenze. Jedes Kind trägt rund 60 bis 100 neue Mutationen. Wären 80 % des Genoms funktional, wären Dutzende davon schädlich, und die Menschheit wäre längst ausgestorben. Graur hat 2017 berechnet: höchstens ein Viertel kann funktional sein.`,
                  objectionBy: 'Dan Graur',
                  answer: `Das Mutationslast-Argument ist das stärkste auf deiner Seite, und ich nehme es ernst. Aber es hängt an Annahmen: Wie viele Mutationen in einer funktionalen Region sind tatsächlich schädlich? Viele Funktionen sind sequenztolerant – Abstandshalter, Bindungsstellen mit Spielraum, Strukturelemente. Dazu kommen Mechanismen, die die Last mindern, etwa synergistische Epistase und weiche Selektion; Alexey Kondrashov hat schon 1995 gefragt, „warum wir nicht hundertmal gestorben sind". Das Argument begrenzt die **streng sequenzabhängige** Funktion – nicht jede Funktion.`,
                  detail: `Ehrlich festhalten: Aus dem Lastargument folgt plausibel, dass nicht der gesamte Genomanteil Basenpaar für Basenpaar unter starkem Selektionsdruck stehen kann. Das gestehen auch viele Design-Befürworter zu. Strittig ist, wie groß der Anteil von Funktionen ist, bei denen die genaue Sequenz wenig zählt. Für die Debatte reicht es, zu zeigen: Die Zahl „90 % Müll" ist eine Schlussfolgerung aus einem Modell mit umstrittenen Parametern, keine direkte Messung.`,
                  sources: [
                    { kind: 'gegner', author: 'Dan Graur', work: '„An upper limit on the functional fraction of the human genome", Genome Biology and Evolution 9 (7)', year: '2017', status: 'paraphrase', quote: `Aus der Mutationslast folgt nach Graurs Modell, dass höchstens etwa ein Viertel des menschlichen Genoms funktional sein kann.` },
                    { kind: 'wissenschaft', author: 'Alexey S. Kondrashov', work: '„Contamination of the genome by very slightly deleterious mutations: why have we not died 100 times over?", Journal of Theoretical Biology 175', year: '1995', status: 'paraphrase', note: 'Kondrashov ist kein ID-Vertreter; der Artikel zeigt, dass Lastrechnungen stark von Modellannahmen abhängen.' },
                  ],
                  questionsBack: [
                    `Welcher Anteil der Mutationen in einer regulatorischen Region ist in deinem Modell schädlich – und woher stammt diese Zahl?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'designer-baut-keine-wracks',
      objection: `Ein Designer hätte nicht Millionen defekter Transposon-Kopien in unser Genom gesteckt. Das ist ein Friedhof von genetischen Parasiten.`,
      objectionBy: 'Kenneth Miller',
      answer: `Transposons haben sich als erstaunlich vielseitig erwiesen: Alu-Elemente beeinflussen alternatives Spleißen und RNA-Editierung, Retroviren-Abschnitte dienen als Promotoren und Verstärker, etwa bei der Immunantwort. Nicht jede Kopie hat eine bekannte Funktion – aber die Liste der Funktionen wächst stetig. Und selbst echte Wracks wären mit dem Glauben vereinbar: Verfall ist nach christlicher Lehre real.`,
      followUps: [
        {
          id: 'einzelfunktionen-reichen-nicht',
          objection: `Einzelne Beispiele beweisen nichts für die Millionen Kopien. Aus ein paar kooptierten Elementen folgt nicht, dass alle funktional sind.`,
          objectionBy: 'Dennis Venema',
          answer: `Das ist ein fairer Einwand, und ich gebe ihn zu: Einzelfunktionen beweisen nicht, dass alles funktional ist. Aber das Argument „Junk beweist Evolution" lebt davon, dass diese DNA nutzlos ist. Je mehr Funktionen entdeckt werden, desto schwächer wird es. Ein offener Ausgang ist kein Sieg für die Junk-These.`,
          followUps: [
            {
              id: 'transkriptionsrauschen',
              objection: `Die meisten „neuen Funktionen" sind Transkriptionsrauschen. Viele lange nichtcodierende RNAs liegen in weniger als einer Kopie pro Zelle vor. Dass etwas abgelesen wird, beweist gar nichts – RNA-Polymerase macht eben Fehler.`,
              objectionBy: 'Larry Moran',
              answer: `Das gestehe ich teilweise zu: Nicht jedes Transkript ist funktional, und manches ist sicher Rauschen. Aber eine niedrige Kopienzahl im Durchschnitt aller Zellen sagt wenig: Viele RNAs wirken lokal an ihrem eigenen Genort, wie Xist bei der Abschaltung des X-Chromosoms, oder nur in bestimmten Zelltypen und Entwicklungsphasen. Die Beweislast gilt in beide Richtungen: Funktion muss experimentell gezeigt werden – Funktionslosigkeit aber auch. „Wir kennen keine Funktion" ist nicht dasselbe wie „es gibt keine".`,
              sources: [
                { kind: 'gegner', author: 'Alexander F. Palazzo, Eliza S. Lee', work: '„Non-coding RNA: what is functional and what is junk?", Frontiers in Genetics 6', year: '2015', status: 'paraphrase', quote: `Ein großer Teil der nichtcodierenden Transkripte dürfte Rauschen sein; Funktion müsse im Einzelfall nachgewiesen werden.` },
              ],
              questionsBack: [
                `Welches Experiment würde für dich zeigen, dass eine bestimmte nichtcodierende RNA funktionslos ist?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'junk-ist-darwinistische-vorhersage',
      objection: `Junk-DNA ist genau das, was ein Darwinist erwartet: Eine lange, ungelenkte Geschichte hinterlässt Schrott. Sie ist ein Beleg für Evolution.`,
      objectionBy: 'Richard Dawkins',
      answer: `Interessanterweise erwarteten viele Evolutionsbiologen das Gegenteil: Ein strenger Adaptationismus sagt, die Selektion würde nutzlose DNA entfernen; deshalb suchte man nach Funktionen. Die Evolutionstheorie ist mit beidem vereinbar – mit viel und mit wenig Junk. Ein Befund, der zu beiden Ergebnissen passt, ist kein Beleg für sie. Dagegen hat ID eine eindeutige Richtung vorhergesagt.`,
      sources: [
        { kind: 'wissenschaft', author: 'Leslie E. Orgel, Francis H. C. Crick', work: '„Selfish DNA: the ultimate parasite", Nature 284', ref: 'S. 604–607', year: '1980', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'W. Ford Doolittle, Carmen Sapienza', work: '„Selfish genes, the phenotype paradigm and genome evolution", Nature 284', ref: 'S. 601–603', year: '1980', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'neutrale-theorie-nicht-darwinismus',
          objection: `Du verwechselst da etwas. Junk ist eine Vorhersage der Neutralen Theorie und der Populationsgenetik (Kimura, Lynch), nicht des Darwinismus. Darwinisten haben das nie verstanden – ihr ID-Leute auch nicht.`,
          objectionBy: 'Larry Moran',
          answer: `Diese Präzisierung nehme ich gern an. Dann ist das Genom nach deiner Sicht überwiegend von Drift geprägt, nicht von Selektion. Das hat eine interessante Folge: Es schwächt die populäre Behauptung, „Mutation und Selektion erklären alles". Wenn der Großteil der genetischen Veränderung neutral ist, bleibt umso dringender die Frage, woher die funktionalen, komplexen Teile stammen.`,
          followUps: [
            {
              id: 'muesst-hundert-prozent-zeigen',
              objection: `Wenn ihr Design wollt, müsst ihr zeigen, dass das Genom zu 100 % funktional ist. Sonst ist eure Vorhersage gescheitert.`,
              objectionBy: 'Dan Graur',
              answer: `Nein. Die Design-Vorhersage lautete „so weit wie möglich funktional" – nicht „perfekt erhalten". Wer ein Design annimmt, das im Lauf der Zeit Mutationen und Verfall unterliegt, erwartet einen hohen, aber nicht vollständigen Anteil an Funktion. Die Frage ist, ob sich der Funktionsanteil langfristig als groß oder als klein erweist – und die ist offen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'megabasen-deletion-maeuse',
      objection: `Das Experiment wurde gemacht: Nóbrega und Kollegen haben 2004 bei Mäusen Genwüsten von insgesamt über zwei Millionen Basenpaaren gelöscht – die Tiere waren lebensfähig und unauffällig. Wenn man so viel DNA ohne Folgen entfernen kann, war sie Müll.`,
      objectionBy: 'Dennis Venema',
      answer: `Ein wichtiges Experiment. Aber schau, was drei Jahre später geschah: Ahituv und Kollegen löschten bei Mäusen sogenannte ultrakonservierte Elemente – Abschnitte, die seit Hunderten Millionen Jahren nahezu unverändert sind und damit nach evolutionärer Logik sicher funktional. Auch diese Mäuse waren lebensfähig und im Labor unauffällig. Der Test „lebt die Maus im Käfig?" ist also zu grob, um Funktion auszuschließen – sonst müsstest du auch die ultrakonservierten Elemente zu Müll erklären.`,
      detail: `Laborbedingungen sind gnädig: Futter, Wärme, keine Raubtiere, keine Krankheitserreger, keine Konkurrenz um Partner. Funktionen, die erst unter Stress, über Generationen oder in seltenen Zelltypen sichtbar werden, entgehen einem solchen Test. Das ist kein Ausweichen, sondern ein Methodenproblem, das die Autoren der Ultrakonservierungs-Studie selbst diskutierten.`,
      sources: [
        { kind: 'wissenschaft', author: 'Marcelo A. Nóbrega, Yiwen Zhu, Ingrid Plajzer-Frick, Veena Afzal, Edward M. Rubin', work: '„Megabase deletions of gene deserts result in viable mice", Nature 431', year: '2004', status: 'paraphrase' },
        { kind: 'wissenschaft', author: 'Nadav Ahituv u. a.', work: '„Deletion of ultraconserved elements yields viable mice", PLoS Biology 5 (9)', year: '2007', status: 'paraphrase', quote: `Mäuse ohne einzelne ultrakonservierte Elemente waren lebensfähig und zeigten unter Laborbedingungen keine auffälligen Veränderungen.` },
      ],
      followUps: [
        {
          id: 'funktion-unwiderlegbar',
          objection: `Das ist eine Ausrede. Mit „Redundanz", „Stress" und „subtilen Effekten" machst du Funktion unwiderlegbar. Jede DNA, die nichts tut, hat dann eben eine verborgene Aufgabe.`,
          objectionBy: 'Larry Moran',
          answer: `Einverstanden, dass „verborgene Funktion" kein Joker sein darf. Deshalb schlage ich prüfbare Kriterien vor: Einschränkung der Variation innerhalb der heutigen Menschheit, CRISPR-Tests im passenden Zelltyp, biochemische Aktivität **plus** messbare Folgen bei Ausfall, und Fitnessmessungen über Generationen. Wo eine Sequenz all diese Tests besteht, ohne irgendeinen Effekt zu zeigen, gestehe ich zu: Hier spricht viel für Junk. Aber dann gilt dieser Maßstab für beide Seiten – auch „Junk" muss man zeigen, nicht nur behaupten.`,
          questionsBack: [
            `Welchen Anteil des Genoms hat man mit genau diesen Tests als funktionslos nachgewiesen – und welchen schließt man nur aus fehlender Konservierung?`,
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Woher weißt du, dass ein DNA-Abschnitt keine Funktion hat – und nicht nur, dass wir sie noch nicht kennen?`,
    `Wie erfasst ein Konservierungskriterium artspezifische Funktionen des Menschen?`,
    `Wenn die Evolutionstheorie sowohl viel als auch wenig Junk erklären kann – inwiefern ist Junk dann ein Beleg für sie?`,
    `Wie viele früher als „Müll" geltende Elemente wurden in den letzten zwanzig Jahren als funktional erkannt?`,
  ],
  avoid: [
    `„ENCODE hat bewiesen, dass 80 % der DNA funktional sind." – Die Zahl beruhte auf biochemischer Aktivität und wurde später differenziert.`,
    `„Es gibt keine Junk-DNA, alles ist funktional." – Das geht über die Datenlage hinaus.`,
    `Die Junk-Frage zum Prüfstein des Glaubens machen.`,
  ],
  concessions: [
    `Ein großer Teil des Genoms besteht aus zerfallenen Transposons und Wiederholungen; für viele davon ist keine Funktion bekannt.`,
    `Konservierungsstudien deuten darauf hin, dass nur ein kleinerer Anteil des Genoms unter starkem Selektionsdruck steht.`,
    `ENCODEs 80-%-Behauptung war in der Kommunikation übertrieben.`,
  ],
  furtherReading: [
    { kind: 'gegner', author: 'Larry Moran', work: "What's in Your Genome? 90% of Your Genome Is Junk", year: '2023', status: 'paraphrase', note: 'Die stärkste Darstellung der Gegenseite.' },
    { kind: 'wissenschaft', author: 'Alexander F. Palazzo, T. Ryan Gregory', work: '„The case for junk DNA", PLoS Genetics 10 (5)', year: '2014', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Manolis Kellis u. a.', work: 'PNAS 111 (17), 6131–6138', year: '2014', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Junk-DNA', 'ENCODE', 'Genom', 'Transposons', 'Vorhersagen von ID'],
  related: [
    'genetik/pseudogene-ervs',
    'evolution/id-keine-wissenschaft',
    'evolution/schlechtes-design',
    'evolution/neue-proteine-leicht',
  ],
};

export default claim;
