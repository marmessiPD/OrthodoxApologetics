import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'nahtoderfahrungen-halluzination',
  title: `„Nahtoderfahrungen sind Halluzinationen eines sterbenden Gehirns."`,
  proponents: [
    { name: 'Susan Blackmore', role: 'Psychologin, University of Plymouth', work: 'Dying to Live: Near-Death Experiences (1993)' },
    { name: 'Kevin Nelson', role: 'Neurologe, University of Kentucky', work: 'The Spiritual Doorway in the Brain (2011); Nelson u. a., Neurology 2006' },
    { name: 'Jimo Borjigin', role: 'Neurophysiologin, University of Michigan', work: 'Borjigin u. a., PNAS 2013; Xu u. a., PNAS 2023' },
    { name: 'Gerald M. Woerlee', role: 'Anästhesist, Niederlande', work: 'Mortal Minds: The Biology of Near-Death Experiences (2003/2005)' },
    { name: 'Michael Shermer', role: 'Herausgeber des „Skeptic"', work: 'Heavens on Earth (2018)' },
  ],
  steelman: `Alles an Nahtoderfahrungen (NTE) lässt sich aus der Physiologie des sterbenden Gehirns verstehen. Sauerstoffmangel der Netzhaut erzeugt einen Tunnel mit hellem Licht; Kampfpiloten, die in der Zentrifuge das Bewusstsein verlieren, berichten von Tunneln, Schweben und traumartigen Szenen. Stress setzt Endorphine frei, die Frieden und Euphorie erzeugen. Bei Menschen mit NTE dringen REM-Schlafzustände häufiger in den Wachzustand ein (Nelson 2006). Elektrische Reizung des Gyrus angularis erzeugt außerkörperliche Erlebnisse (Blanke 2002). Sterbende Rattengehirne zeigen einen Ausbruch hoch geordneter Gamma-Aktivität (Borjigin 2013), 2023 auch bei sterbenden Menschen. Die Inhalte sind kulturell geprägt: Christen sehen Jesus, Hindus die Boten Yamas. Und die „verifizierten" Wahrnehmungen? Anekdoten, nachträglich ausgeschmückt; in der großen AWARE-Studie hat kein einziger Patient die versteckten Bilder auf den Regalen gesehen. Wer meint, das Bewusstsein verlasse den Körper, trägt die Beweislast – und hat sie nicht erbracht.`,
  biblical: {
    summary: `Die christliche Hoffnung auf ein Leben nach dem Tod beruht nicht auf Nahtoderfahrungen, sondern auf dem Zeugnis Christi und seiner Auferstehung (Lk 23,43; Joh 11,25; 1 Kor 15). Die Bibel ist zurückhaltend mit Jenseitsschilderungen: Paulus spricht von seiner Entrückung „in den dritten Himmel" nur in der dritten Person, weiß nicht, ob es „im Leibe" oder „außer dem Leibe" geschah, und hörte „unaussprechliche Worte" (2 Kor 12,2–4). Jesus warnt, dass selbst jemand, der von den Toten käme, Unwillige nicht überzeugen würde (Lk 16,31). Und der Satan kann sich „zum Engel des Lichts" verstellen (2 Kor 11,14) – nicht jede Lichtgestalt ist von Gott.`,
    detail: `- **Lk 23,43; Phil 1,23; 2 Kor 5,8:** Die Person lebt nach dem Tod bewusst fort und ist „bei dem Herrn" – das ist biblische Lehre, unabhängig von NTE-Forschung.
- **Hebr 9,27:** „Den Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht." Viele populäre NTE-Berichte (keine Sünde, kein Gericht, alle Wege gleich) widersprechen der Offenbarung und müssen geprüft werden (Gal 1,8).
- **2 Kor 12,2–4:** Ein Modell für christliche Zurückhaltung: kein Bestseller, sondern Demut und Schweigen.`,
    sources: [
      { kind: 'bibel', work: '2. Korinther', ref: '12,2–4', status: 'paraphrase', quote: `Ich kenne einen Menschen in Christus, der vor vierzehn Jahren bis in den dritten Himmel entrückt wurde – ob im Leib oder außer dem Leib, weiß ich nicht, Gott weiß es –, und er hörte unaussprechliche Worte, die kein Mensch sagen kann.` },
      { kind: 'bibel', work: 'Lukas', ref: '23,43', quote: `Und Jesus sprach zu ihm: Wahrlich ich sage dir: Heute wirst du mit mir im Paradiese sein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '16,31', status: 'paraphrase', quote: `Hören sie Mose und die Propheten nicht, so werden sie auch nicht glauben, wenn jemand von den Toten aufstünde.` },
      { kind: 'bibel', work: '2. Korinther', ref: '11,14', status: 'paraphrase', quote: `Der Satan selbst verstellt sich zum Engel des Lichts.` },
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche lehrt, dass die Seelen der Entschlafenen fortleben und bis zur allgemeinen Auferstehung warten – die Gerechten im Paradies; für sie betet die Kirche in jeder Liturgie. Ein Fegefeuer lehrt sie nicht. Nahtoderfahrungen sind für sie **keine Quelle der Lehre**; sie können Menschen zum Nachdenken bringen, müssen aber nach der Überlieferung der Väter geprüft werden.`,
    detail: `- In der Vita des Antonius (Kap. 65–66) berichtet Athanasius, Antonius habe sich in einer Schau außerhalb seiner selbst gesehen, wie seine Seele emporgeführt und von feindlichen Mächten aufgehalten wurde. Die Väter kannten also Erfahrungen „außer dem Leib" – und deuteten sie im Licht der Schrift und mit großer Nüchternheit.
- Die Unterscheidung der Geister (Vita Antonii 35–37; Cassian, Collationes II) ist der Maßstab: Echtes führt zu Demut, Umkehr und Liebe; Täuschung zu Stolz, Verwirrung oder einer Lehre, die dem Evangelium widerspricht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 65–66', status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Johannes Cassian', work: 'Unterredungen mit den Vätern (Collationes)', ref: 'II (Abba Moses über die Unterscheidung)', status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `NTE treten bei etwa 10–20 % der Überlebenden eines Herzstillstands auf (van Lommel 2001: 18 %; AWARE 2014: 9 %). Ihre typischen Merkmale (Frieden, Außerkörperlichkeit, Tunnel, Licht, Begegnung mit Verstorbenen, Lebensrückblick) sind gut beschrieben. Für einzelne Elemente gibt es physiologische Hypothesen (Hypoxie, REM-Intrusion, Funktionsstörungen der temporo-parietalen Übergangsregion, terminale Gamma-Aktivität), aber **keine anerkannte Gesamterklärung**. Die entscheidende offene Frage ist der Zeitpunkt: Entstehen die Erlebnisse während der Phase schwerster Hirnfunktionsstörung oder davor bzw. danach? Prospektive Tests mit versteckten Zielen haben bisher keinen visuellen Treffer erbracht; es gibt vereinzelte zeitlich zuordenbare auditive Wahrnehmungen.`,
    detail: `**Van Lommel u. a. (Lancet 2001):** 344 Patienten nach Herzstillstand in zehn niederländischen Kliniken; 62 (18 %) berichteten eine NTE, 41 (12 %) eine „tiefe". Das Auftreten hing nicht mit Dauer des Stillstands, Bewusstlosigkeit, Medikation oder Todesangst zusammen. Langzeitnachbefragungen zeigten nachhaltige Lebensveränderungen.

**AWARE (Parnia u. a., Resuscitation 2014):** Rund 2.060 Herzstillstände in Kliniken in Großbritannien, den USA und Österreich; 140 Überlebende im ersten, 101 im zweiten Interview. 9 % hatten eine NTE, 2 % berichteten bewusste Wahrnehmung („sehen", „hören") mit Erinnerung; bei einem Patienten ließ sich eine Wahrnehmung von Geräuschen zeitlich auf etwa drei Minuten in den Herzstillstand hinein zuordnen. Die auf Regalen versteckten Bilder wurden von niemandem identifiziert – unter anderem, weil die meisten Stillstände nicht in Räumen mit Regalen stattfanden.

**AWARE II (Parnia u. a., Resuscitation 2023):** 567 Herzstillstände in Kliniken, 53 Überlebende, 28 befragt; etwa 39 % berichteten Erinnerungen oder Wahrnehmungen. Niemand identifizierte das visuelle Testbild, ein Patient das akustische Testsignal. Bei einem Teil der Patienten zeigte das EEG während der Reanimation Phasen nahezu normaler Aktivität bis zu 35–60 Minuten nach Beginn – ein Befund, den Skeptiker gegen die Annahme eines „abgeschalteten" Gehirns anführen.

**Physiologische Hypothesen:** Nelson u. a. (Neurology 2006): REM-Intrusion bei 60 % der NTE-Erfahrenen vs. 24 % der Kontrollen (retrospektive Fragebogenstudie). Borjigin u. a. (PNAS 2013): Gamma-Anstieg im Rattengehirn in den ersten ~30 Sekunden nach Herzstillstand; Xu u. a. (PNAS 2023): ähnliche Befunde bei zwei von vier sterbenden Patienten (ohne Möglichkeit eines Berichts). Blanke u. a. (Nature 2002): außerkörperliche Illusionen durch Stimulation des Gyrus angularis.

**Belastende NTE:** Greyson & Bush (1992) dokumentierten erschreckende NTE – nicht alle sind friedlich.`,
    sources: [
      { kind: 'wissenschaft', author: 'P. van Lommel, R. van Wees, V. Meyers, I. Elfferich', work: 'Near-death experience in survivors of cardiac arrest: a prospective study in the Netherlands', ref: 'The Lancet 358 (2001), 2039–2045', year: '2001', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'S. Parnia, K. Spearpoint, G. de Vos u. a.', work: 'AWARE – AWAreness during REsuscitation – A prospective study', ref: 'Resuscitation 85 (2014), 1799–1805', year: '2014', status: 'paraphrase', note: 'Fallzahlen nach dem Abstract der Studie wiedergegeben; vor Zitierung im Detail am Original prüfen.' },
      { kind: 'wissenschaft', author: 'S. Parnia, T. Keshavarz Shirazi, J. Patel u. a.', work: 'AWAreness during REsuscitation – II: A multi-center study of consciousness and awareness in cardiac arrest', ref: 'Resuscitation 191 (2023), 109903', year: '2023', status: 'paraphrase', note: 'Fallzahlen sinngemäß nach der Veröffentlichung; vor Detailzitierung prüfen.' },
      { kind: 'wissenschaft', author: 'K. R. Nelson, M. Mattingly, S. A. Lee, F. A. Schmitt', work: 'Does the arousal system contribute to near death experience?', ref: 'Neurology 66 (2006), 1003–1009', year: '2006', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. Borjigin, U. Lee, T. Liu u. a.', work: 'Surge of neurophysiological coherence and connectivity in the dying brain', ref: 'PNAS 110 (2013), 14432–14437', year: '2013', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'G. Xu, T. Mihaylova, D. Li u. a. (Labor J. Borjigin)', work: 'Surge of neurophysiological coupling and connectivity of gamma oscillations in the dying human brain', ref: 'PNAS 120 (2023), e2216268120', year: '2023', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'O. Blanke, S. Ortigue, T. Landis, M. Seeck', work: 'Stimulating illusory own-body perceptions', ref: 'Nature 419 (2002), 269–270', year: '2002', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'B. Greyson, N. E. Bush', work: 'Distressing near-death experiences', ref: 'Psychiatry 55 (1992), 95–110', year: '1992', status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'D. Mobbs, C. Watt', work: 'There is nothing paranormal about near-death experiences', ref: 'Trends in Cognitive Sciences 15 (2011), 447–449', year: '2011', status: 'paraphrase' },
    ],
  },
  quickAnswer: `Nahtoderfahrungen **beweisen** nicht den Himmel – aber die Behauptung, sie seien „nur" Halluzinationen, ist ebenso unbewiesen. Eine prospektive Studie im Lancet (van Lommel 2001) fand, dass NTE nicht mit Medikamenten, Dauer des Herzstillstands oder Todesangst zusammenhingen: Alle Patienten hatten einen Herzstillstand, nur 18 % eine NTE. In der AWARE-Studie (2014) erinnerte sich ein Patient an überprüfbare Geräusche aus einer Phase etwa drei Minuten in den Herzstillstand hinein. Die Forschung ist offen. Mein Glaube an das ewige Leben ruht aber nicht auf NTE, sondern auf der Auferstehung Christi.`,
  keyPoints: [
    `**Ehrliche Position:** NTE sind kein Beweis für das Jenseits, aber auch nicht als „bloße Halluzination" erwiesen. Wer Gewissheit in die eine oder andere Richtung behauptet, geht über die Daten hinaus.`,
    `**Sauerstoffmangel allein erklärt es nicht:** Alle Patienten bei van Lommel hatten einen Herzstillstand, nur eine Minderheit eine NTE; NTE hingen nicht mit der Dauer des Stillstands zusammen.`,
    `**Die Schlüsselfrage ist der Zeitpunkt:** Zeitlich zuordenbare, überprüfbare Wahrnehmungen (AWARE 2014: ein Fall; AWARE II 2023: ein akustischer Treffer) sind die eigentlich interessanten Daten – noch wenige, aber nicht null.`,
    `**Physiologische Teilhypothesen sind keine Gesamterklärung:** REM-Intrusion, Gamma-Ausbruch und Stimulationsbefunde erklären Teilaspekte, keine von ihnen das Gesamtbild.`,
    `**Christen brauchen NTE nicht:** Die Hoffnung beruht auf Christi Auferstehung; NTE-Inhalte müssen an der Schrift geprüft werden (Gal 1,8; 2 Kor 11,14).`,
    `**Vorsicht vor Bestsellern:** Ein angeblicher Himmelsbericht eines Kindes wurde 2015 vom Betroffenen selbst widerrufen – solche Bücher schaden der Glaubwürdigkeit.`,
  ],
  voices: [
    {
      person: 'paulus',
      role: 'als Apostel mit eigener Entrückungserfahrung',
      text: `Paulus hatte nach eigenem Zeugnis eine Erfahrung, die man heute vielleicht „außerkörperlich" nennen würde: Er wurde „bis in den dritten Himmel" entrückt und weiß nicht, ob „im Leibe" oder „außer dem Leibe" (2 Kor 12,2–4). Bemerkenswert ist sein Umgang damit: Er spricht vierzehn Jahre lang nicht darüber, erzählt nur widerwillig in der dritten Person, gibt keinen Inhalt preis und stellt sofort seine Schwachheit in den Vordergrund. Seine Predigt gründet er nicht auf diese Erfahrung, sondern auf den gekreuzigten und auferstandenen Christus (1 Kor 2,2; 15,3–8). Das ist das christliche Modell für den Umgang mit NTE: ernst nehmen, nüchtern bleiben, nicht darauf bauen.`,
      sources: [
        { kind: 'bibel', work: '2. Korinther', ref: '12,1–10', status: 'paraphrase' },
      ],
    },
    {
      person: 'antonius',
      role: 'als Wüstenvater mit Erfahrung in der Prüfung von Visionen',
      text: `Nach der Vita des Athanasius erlebte Antonius eine Schau, in der er sich außerhalb seiner selbst sah, während seine Seele durch die Lüfte emporgeführt und von feindlichen Gestalten aufgehalten wurde. Die Väter kannten also solche Erfahrungen – aber sie werteten sie nicht nach ihrer Eindrücklichkeit, sondern nach ihrer Übereinstimmung mit dem Evangelium und ihrer Frucht: Demut, Wachsamkeit, Liebe. Diese Haltung schützt vor zwei Fehlern zugleich: vor der skeptischen Behauptung, solche Erfahrungen seien immer Einbildung, und vor der leichtgläubigen, jede Lichtgestalt sei ein Bote Gottes.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', ref: 'Kap. 65–66', status: 'paraphrase' },
      ],
    },
    {
      person: 'habermas',
      role: 'als Philosoph und Historiker, der NTE-Fälle systematisch geprüft hat',
      text: `Gary Habermas hat gemeinsam mit J. P. Moreland Nahtodberichte darauf untersucht, welche Fälle überprüfbare Angaben enthalten – Wahrnehmungen von Ereignissen, die der Patient aus seiner Lage nicht wissen konnte und die von Dritten bestätigt wurden. Sein Argument ist bewusst bescheiden: Er behauptet nicht, NTE bewiesen das christliche Jenseits; sie zeigten allenfalls, dass ein Minimum an bewusstem Erleben unter Bedingungen möglich sein könnte, unter denen der Materialismus es nicht erwartet. Den Inhalt der Erfahrungen (Lichtwesen, Botschaften) hält er für deutungsbedürftig und nicht für Lehrquelle.`,
      sources: [
        { kind: 'fachliteratur', author: 'Gary R. Habermas, J. P. Moreland', work: 'Beyond Death: Exploring the Evidence for Immortality', year: '1998', status: 'paraphrase' },
      ],
    },
    {
      person: 'egnor',
      role: 'als Neurochirurg',
      text: `Michael Egnor verweist darauf, dass Kliniker seit Jahrzehnten mit dem Phänomen konfrontiert sind und es nicht ignorieren sollten. Ihm ist wichtig, dass ein Herzstillstand die Großhirnrinde innerhalb von Sekunden funktionsunfähig macht (flaches EEG), während manche Patienten von klaren, geordneten Erlebnissen berichten. Er räumt ein, dass die Zeitzuordnung in den meisten Fällen unsicher ist, sieht aber in den gut dokumentierten Fällen einen Hinweis, dass der Geist nicht vollständig mit der Hirnfunktion identisch ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Egnor, Denyse O\'Leary', work: 'The Immortal Mind', year: '2025', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hypoxie',
      objection: `Sauerstoffmangel erklärt alles: Netzhaut-Ischämie macht den Tunnel, Endorphine machen den Frieden. Kampfpiloten in der Zentrifuge erleben genau dasselbe.`,
      objectionBy: 'Susan Blackmore',
      answer: `Hypoxie führt typischerweise zu Verwirrung, Gedächtnislücken und bruchstückhaftem Erleben – NTE werden dagegen oft als klarer und geordneter als der Alltag beschrieben. In der Lancet-Studie von van Lommel hatten alle 344 Patienten einen Herzstillstand und damit Sauerstoffmangel im Gehirn, aber nur 18 % eine NTE, und die Dauer des Stillstands spielte keine Rolle. Bei Piloten gibt es Überschneidungen (Tunnel, Schweben, Traumfetzen), aber kaum Lebensrückblicke oder Begegnungen mit Verstorbenen.`,
      sources: [
        { kind: 'wissenschaft', author: 'P. van Lommel u. a.', work: 'Near-death experience in survivors of cardiac arrest', ref: 'The Lancet 358 (2001), 2039–2045', year: '2001', status: 'paraphrase' },
      ],
      questionsBack: [`Wenn Sauerstoffmangel die Ursache ist – warum hatten über 80 % der Patienten mit Herzstillstand keine NTE?`],
      followUps: [
        {
          id: 'blutgase-nicht-gemessen',
          objection: `Van Lommel hat die Blutgase gar nicht systematisch gemessen. Seine Aussage über Sauerstoffmangel ist deshalb schwach.`,
          objectionBy: 'Susan Blackmore',
          answer: `Das ist ein berechtigter methodischer Einwand, den ich zugebe. Aber er wirkt in beide Richtungen: Wenn wir die individuellen Sauerstoffwerte nicht kennen, kann auch niemand behaupten, Hypoxie *sei* die Ursache. Sicher ist nur: Ein Herzstillstand bedeutet immer schweren Sauerstoffmangel im Gehirn – und trotzdem hatte die große Mehrheit keine NTE.`,
          followUps: [
            {
              id: 'rem-intrusion',
              objection: `Dann eben REM-Intrusion: Nelson fand 2006, dass 60 % der Menschen mit NTE REM-Zustände ins Wachbewusstsein eindringen sehen, gegenüber 24 % der Kontrollen. NTE sind Traumzustände.`,
              objectionBy: 'Kevin Nelson',
              answer: `Nelsons Studie war eine retrospektive Fragebogenstudie mit Teilnehmern, die über das Internet gewonnen wurden; Kritiker haben die Auswahl der Kontrollgruppe und die Fragen bemängelt. Vor allem erklärt REM-Intrusion nicht, wie solche Zustände *während* eines Herzstillstands entstehen sollen, wenn auch der Hirnstamm unterversorgt ist. Es kann eine Teilerklärung für die Neigung zu bestimmten Erlebnissen sein – eine Gesamterklärung ist es nicht.`,
              followUps: [
                {
                  id: 'davor-oder-danach',
                  objection: `Es geht gar nicht um den Stillstand selbst. Die Erlebnisse entstehen in den Sekunden davor oder beim Wiedererwachen – das Gehirn konstruiert dann eine Geschichte.`,
                  objectionBy: 'Kevin Nelson',
                  answer: `Das ist möglich – und genau das ist die entscheidende Frage. Bei den meisten NTE lässt sich der Zeitpunkt nicht bestimmen, das gebe ich zu. Deshalb sind Fälle wichtig, in denen Patienten Ereignisse wahrnehmen, die sich zeitlich eindeutig einer Phase zuordnen lassen, in der das Gehirn nach gängigem Wissen nicht arbeiten konnte. In der AWARE-Studie gab es einen solchen Fall mit Geräuschen etwa drei Minuten in den Stillstand hinein. Ein Fall ist wenig – aber er zeigt, dass die Frage empirisch prüfbar und noch offen ist.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gamma-ausbruch',
      objection: `Borjigin hat 2013 gezeigt: Sterbende Rattengehirne erzeugen einen Ausbruch hochgeordneter Gamma-Aktivität – mehr als im Wachzustand. 2023 sah ihr Team dasselbe bei sterbenden Menschen. Das ist das Korrelat der NTE.`,
      objectionBy: 'Jimo Borjigin',
      answer: `Ein faszinierender Befund und eine plausible Hypothese – aber kein Beweis. Ratten können nicht berichten, was sie erleben. Bei den Menschen 2023 handelte es sich um vier Patienten, von denen zwei den Anstieg zeigten, und keiner überlebte, um zu berichten. Der Gamma-Ausbruch dauert zudem nur kurz nach dem Stillstand an. Er könnte Teile von NTE erklären, aber nicht zeitlich spätere, überprüfbare Wahrnehmungen.`,
      followUps: [
        {
          id: 'aware-zwei-hirnaktivitaet',
          objection: `Und AWARE II selbst zeigt: Bei manchen Patienten gab es während der Reanimation fast normale Hirnaktivität im EEG, bis zu einer Stunde lang. Das Gehirn war eben nicht „aus". Fall erledigt.`,
          objectionBy: 'Michael Shermer',
          answer: `Das stimmt, und ich nenne den Befund ehrlich: Er schwächt pauschale Behauptungen, das Gehirn sei während jeder Reanimation „flach". Aber erstens ließen sich die EEG-Phasen und die berichteten Erlebnisse zeitlich nicht verknüpfen; zweitens fällt die Hirnrinde beim Herzstillstand zunächst innerhalb von Sekunden aus, und gute Reanimation versorgt sie nur teilweise. Die Frage, ob klares Erleben mit dem Grad an Hirnfunktion vereinbar ist, ist damit nicht beantwortet – sie ist präziser geworden.`,
          followUps: [
            {
              id: 'je-besser-gemessen',
              objection: `Gib zu: Je besser die Messungen werden, desto weniger bleibt vom Übernatürlichen übrig.`,
              objectionBy: 'Michael Shermer',
              answer: `So einfach ist es nicht. Bessere Messungen haben auch gezeigt, dass NTE real, häufig und klar sind und sich von Delir und Halluzinationen unterscheiden lassen – Parnias Gruppe betont diesen Unterschied ausdrücklich. Ich behaupte nicht, NTE bewiesen das Jenseits. Ich behaupte, dass „nur Halluzination" ebenfalls eine unbewiesene Behauptung ist. Wo die Daten offen sind, sollte man sagen, dass sie offen sind.`,
              followUps: [
                {
                  id: 'beweislast',
                  objection: `Wer behauptet, das Bewusstsein verlasse den Körper, trägt die Beweislast. Solange du sie nicht erfüllst, gilt die natürliche Erklärung.`,
                  objectionBy: 'Susan Blackmore',
                  answer: `Einverstanden, dass ich für eine positive Behauptung Belege brauche – deshalb sage ich nur: Die Daten sind suggestiv, nicht zwingend. Aber wer behauptet, es sei *sicher* „nur" Halluzination, stellt auch eine positive Behauptung auf und trägt dafür die Beweislast. Und mein Glaube an das ewige Leben hängt ohnehin nicht an NTE, sondern an der Auferstehung Jesu – dafür gibt es historische Belege, über die wir sprechen können.`,
                  detail: `Siehe A8, ‚atheismus/beweislast-mangel-an-glauben' und ‚atheismus/aussergewoehnliche-belege'; zur Auferstehung A16, ‚auferstehung/halluzinationen'.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'veridikal-anekdoten',
      objection: `Die angeblich verifizierten Wahrnehmungen sind Anekdoten. Pam Reynolds? Sie hörte unter Narkose – das nennt man Narkose-Wachheit. Der Mann mit dem Gebiss bei van Lommel? Nachträglich ausgeschmückt.`,
      objectionBy: 'Gerald M. Woerlee',
      answer: `Beim Fall Pam Reynolds gebe ich dir weitgehend recht: Ihre berühmtesten Wahrnehmungen – die Knochensäge, ein Gespräch über ihre Leistenarterien – fielen in eine Phase vor dem eigentlichen Kreislaufstillstand, unter Vollnarkose, aber nicht bei flachem EEG. Narkose-Wachheit lässt sich nicht ausschließen; ich würde den Fall nicht als Beweis anführen. Auch der „Gebiss-Fall" ist retrospektiv. Stärker sind prospektive Studien mit vorab festgelegten Prüfverfahren.`,
      detail: `**Pam Reynolds (1991):** Operation eines Aneurysmas der Arteria basilaris durch Robert Spetzler (Barrow Neurological Institute) im hypothermen Kreislaufstillstand; dokumentiert von dem Kardiologen Michael Sabom (Light and Death, 1998). Kritiker (Woerlee, Keith Augustine) weisen darauf hin, dass die Säge zu Beginn der Operation eingesetzt wurde, als Reynolds narkotisiert, aber hirnaktiv war, und dass ihre Ohrstöpsel mit Klickgeräuschen das Hören nicht völlig ausschlossen. Verteidiger betonen die Detailgenauigkeit. Fairer Schluss: interessant, aber nicht beweiskräftig für Bewusstsein bei flachem EEG.`,
      sources: [
        { kind: 'fachliteratur', author: 'Michael Sabom', work: 'Light and Death: One Doctor\'s Fascinating Account of Near-Death Experiences', year: '1998', status: 'paraphrase' },
        { kind: 'gegner', author: 'Gerald M. Woerlee', work: 'Mortal Minds: The Biology of Near-Death Experiences', year: '2005', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'aware-regale-leer',
          objection: `Und AWARE? Über 2.000 Herzstillstände, versteckte Bilder auf Regalen – und kein einziger Patient hat sie gesehen.`,
          objectionBy: 'Gerald M. Woerlee',
          answer: `Richtig. Nur wenige Patienten berichteten überhaupt bewusste Wahrnehmung, und die meisten Herzstillstände fanden in Räumen ohne Regale statt; das Design hat schlicht kaum Gelegenheiten für einen Treffer geschaffen. Ehrlich ist aber auch: Ein positives visuelles Ergebnis gibt es bisher nicht. Was es gibt, ist ein zeitlich zugeordneter auditiver Fall in AWARE und ein erkanntes Testsignal in AWARE II. Das ist wenig – und ich stelle es auch als wenig dar.`,
          followUps: [
            {
              id: 'ein-fall-wertlos',
              objection: `Ein einziger Fall ist statistisch wertlos. Der Patient kann geschätzt, geraten oder in der Aufwachphase etwas gehört haben.`,
              objectionBy: 'Michael Shermer',
              answer: `Ein Einzelfall beweist keine Theorie – aber ein gut dokumentierter Einzelfall kann eine Allaussage infrage stellen, etwa „Bewusstes Erleben ist bei Herzstillstand nie möglich". Ob dieser Fall stark genug ist, darüber kann man streiten; deshalb wird weitergeforscht. Mehr behaupte ich nicht.`,
              followUps: [
                {
                  id: 'immer-fehler-moeglich',
                  objection: `Bei einem Einzelfall ist ein Fehler immer wahrscheinlicher als ein Wunder. Außergewöhnliche Behauptungen brauchen außergewöhnliche Belege.`,
                  objectionBy: 'Susan Blackmore',
                  answer: `Darin sind wir uns einig: Auf einen einzelnen NTE-Fall sollte niemand seine Weltanschauung bauen – auch kein Christ. Wie stark Belege sein müssen, hängt allerdings davon ab, wie wahrscheinlich man die Sache vorher einschätzt; wer den Materialismus schon voraussetzt, wird jeden Fall verwerfen. Deshalb gehört die Frage in eine Gesamtabwägung, in der NTE höchstens ein kleiner Baustein sind.`,
                  detail: `Zur Logik „außergewöhnlicher Belege" siehe A8, ‚atheismus/aussergewoehnliche-belege'.`,
                },
              ],
            },
          ],
        },
        {
          id: 'blinde-mindsight',
          objection: `Und die „sehenden Blinden" bei Ken Ring? Reine Selbstauskünfte, nichts davon unabhängig überprüft.`,
          objectionBy: 'Gerald M. Woerlee',
          answer: `Das ist fair. Ring und Cooper befragten 31 blinde Menschen, von denen nach ihren Angaben eine Mehrheit visuelle Eindrücke während einer NTE oder außerkörperlichen Erfahrung berichtete – auch von Geburt an Blinde. Aber es sind retrospektive Selbstauskünfte; unabhängig bestätigte Details sind selten. Ich halte die Studie für interessant, nicht für beweiskräftig.`,
          sources: [
            { kind: 'fachliteratur', author: 'Kenneth Ring, Sharon Cooper', work: 'Mindsight: Near-Death and Out-of-Body Experiences in the Blind', year: '1999', status: 'paraphrase' },
          ],
        },
      ],
    },
    {
      id: 'kulturell-gepraegt',
      objection: `Die Inhalte von NTE sind kulturell geprägt. Christen sehen Jesus, Hindus die Boten des Todesgottes Yama. Das spricht für Gehirn plus Kultur, nicht für ein Jenseits.`,
      objectionBy: 'Michael Shermer',
      answer: `Dass Menschen ihre Erfahrungen mit den Begriffen ihrer Kultur deuten, ist richtig und gilt für jede Erfahrung. Es gibt zugleich einen kulturübergreifenden Kern (Außerkörperlichkeit, Licht, Frieden, Begegnung). Für Christen sind NTE aber ohnehin keine Lehrquelle: Ihr Inhalt muss an der Offenbarung geprüft werden – Paulus warnt, dass sich selbst der Satan als Lichtengel verstellen kann. Außerdem sind nicht alle NTE angenehm; Greyson und Bush dokumentierten erschreckende Erfahrungen.`,
      sources: [
        { kind: 'wissenschaft', author: 'B. Greyson, N. E. Bush', work: 'Distressing near-death experiences', ref: 'Psychiatry 55 (1992), 95–110', year: '1992', status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'warum-dann-zitieren',
          objection: `Wenn du die Inhalte nicht ernst nimmst – warum zitierst du NTE dann überhaupt?`,
          objectionBy: 'Michael Shermer',
          answer: `Weil es zwei verschiedene Fragen sind. Erstens: Kann bewusstes Erleben fortbestehen, wenn die Hirnfunktion schwer gestört ist? Dafür sind NTE-Daten relevant. Zweitens: Was erwartet uns nach dem Tod? Dafür sind sie keine verlässliche Quelle – dafür halte ich mich an Christus, der selbst gestorben und auferstanden ist.`,
          followUps: [
            {
              id: 'himmels-bestseller',
              objection: `Und was ist mit euren christlichen Himmels-Bestsellern? „The Boy Who Came Back from Heaven" hat der Junge selbst widerrufen. Christen glauben offenbar alles.`,
              objectionBy: 'Richard Dawkins',
              answer: `Hier gebe ich dir ausdrücklich recht. Alex Malarkey hat 2015 öffentlich erklärt, er sei nicht im Himmel gewesen, und der Verlag hat das Buch zurückgezogen. Solche Bücher schaden dem Glauben. Jesus selbst sagte, wer Mose und den Propheten nicht glaubt, würde auch nicht durch jemanden überzeugt, der von den Toten kommt (Lk 16,31). Christliche Hoffnung braucht keine Jenseitsreportagen.`,
            },
          ],
        },
      ],
    },
    {
      id: 'blanke-stimulation',
      objection: `Blanke hat 2002 durch Stimulation des Gyrus angularis außerkörperliche Erlebnisse erzeugt: Die Patientin sah sich von oben. Das OBE ist eine Störung der Körperrepräsentation, sonst nichts.`,
      objectionBy: 'Susan Blackmore',
      answer: `Der Befund zeigt, dass sich *Illusionen* außerkörperlicher Lage erzeugen lassen – das bezweifle ich nicht. Aber diese stimulierten Erlebnisse waren bruchstückhaft und enthielten keine überprüfbaren Wahrnehmungen von Dingen, die die Patientin nicht wissen konnte. Dass man etwas künstlich nachahmen kann, beweist nicht, dass jedes Vorkommen künstlich ist – so wie optische Täuschungen nicht beweisen, dass Sehen eine Täuschung ist.`,
      followUps: [
        {
          id: 'immunisierung',
          objection: `Mit diesem Prinzip kannst du jede natürliche Erklärung abwehren.`,
          objectionBy: 'Patricia Churchland',
          answer: `Nein, denn ich nenne die Bedingung, unter der ich mich geschlagen gebe: Wenn in großen, gut konzipierten Studien mit versteckten Zielen nie ein Treffer erzielt wird, während Patienten zugleich behaupten, alles von oben gesehen zu haben, spricht das gegen die Echtheit solcher Wahrnehmungen. Genau dieser Test läuft – und ich akzeptiere sein Ergebnis.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wenn Sauerstoffmangel die Ursache ist – warum hatten über 80 % der Herzstillstand-Patienten bei van Lommel keine NTE?`,
    `Welches Ergebnis einer prospektiven Studie würde dich überzeugen, dass hier mehr vorliegt als Halluzination?`,
    `Wie erklärst du zeitlich zuordenbare Wahrnehmungen aus einer Phase, in der die Hirnrinde nach gängigem Wissen nicht arbeitet?`,
    `Ist „nur Halluzination" ein Befund – oder eine Annahme, die du schon vorher hattest?`,
  ],
  avoid: [
    `NTE als „wissenschaftlichen Beweis für den Himmel" darstellen – die Datenlage gibt das nicht her.`,
    `Bestseller wie „Den Himmel gibt's echt", „Blick in die Ewigkeit" (Eben Alexander) oder „The Boy Who Came Back from Heaven" (2015 widerrufen) als Belege zitieren.`,
    `Den Fall Pam Reynolds als Beweis für Bewusstsein bei „flachem EEG" anführen – die entscheidenden Wahrnehmungen lagen vor dem Kreislaufstillstand.`,
    `NTE-Inhalte als Lehrquelle über das Jenseits behandeln („Es gibt kein Gericht", „Alle Religionen führen zum Licht") – das widerspricht der Schrift.`,
  ],
  concessions: [
    `Viele Elemente von NTE lassen sich physiologisch nachahmen oder teilweise erklären (Tunnel, Außerkörperlichkeit, Frieden).`,
    `In den großen prospektiven Studien gab es bisher keinen visuellen Treffer auf versteckte Ziele; die überprüfbaren Fälle sind sehr wenige.`,
    `AWARE II fand bei manchen Patienten während der Reanimation Phasen nahezu normaler Hirnaktivität – das schwächt pauschale „flaches Gehirn"-Argumente.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Gary R. Habermas, J. P. Moreland', work: 'Beyond Death: Exploring the Evidence for Immortality', year: '1998', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Janice Miner Holden, Bruce Greyson, Debbie James (Hg.)', work: 'The Handbook of Near-Death Experiences: Thirty Years of Investigation', year: '2009', status: 'paraphrase', note: 'Wissenschaftliches Sammelwerk; enthält Holdens Übersicht über Berichte von „veridikalen" Wahrnehmungen.' },
    { kind: 'gegner', author: 'Susan Blackmore', work: 'Dying to Live: Near-Death Experiences', year: '1993', status: 'paraphrase', note: 'Die klassische skeptische Gegenposition.' },
  ],
  difficulty: 3,
  tags: ['Nahtoderfahrung', 'AWARE', 'van Lommel', 'Herzstillstand', 'Bewusstsein', 'Pam Reynolds'],
  related: [
    'neurowissenschaften/geist-gleich-gehirn',
    'sinn-existenz/tod-ist-das-ende',
    'atheismus/aussergewoehnliche-belege',
    'auferstehung/halluzinationen',
    'okkultismus/spiritismus-harmlos',
  ],
};

export default claim;
