import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'heilungen-placebo',
  title: `„Wunderheilungen sind Placebo oder Spontanremission."`,
  proponents: [
    { name: 'Michael Shermer', role: 'Wissenschaftshistoriker, Herausgeber des „Skeptic"-Magazins', work: 'Why People Believe Weird Things (1997)' },
    { name: 'Steven Novella', role: 'Neurologe, Yale; Science-Based Medicine', work: 'The Skeptics\' Guide to the Universe (2018)' },
    { name: 'Edzard Ernst', role: 'Emeritierter Professor für Komplementärmedizin, Exeter', work: 'Trick or Treatment (2008, mit Simon Singh)' },
    { name: 'Ben Goldacre', role: 'Arzt und Epidemiologe, Oxford', work: 'Bad Science (2008)' },
  ],
  steelman: `Der menschliche Körper ist erstaunlich suggestibel: Placebos lindern Schmerzen, Übelkeit und Erschöpfung; selbst Schein-Operationen am Knie wirkten in einer Studie so gut wie echte Arthroskopien (Moseley u. a., NEJM 2002). Funktionelle neurologische Störungen können Lähmungen oder Blindheit vortäuschen und sich in emotional aufgeladenen Situationen schlagartig lösen. Krebs bildet sich in seltenen Fällen von selbst zurück. Menschen suchen Heilung meist auf dem Tiefpunkt ihrer Krankheit, danach geht es statistisch ohnehin bergauf (Regression zur Mitte). Hinzu kommen Fehldiagnosen, selektive Erinnerung und betrügerische Fernsehheiler wie Peter Popoff, den James Randi 1986 entlarvte. Bei Millionen Gläubigen, die für Kranke beten, sind ein paar spektakuläre Genesungen statistisch zu erwarten. Dafür braucht man keinen Gott.`,
  biblical: {
    summary: `Die Heilungen Jesu betrafen keineswegs nur „suggestible" Leiden: einen von Geburt an Blinden (Joh 9), eine verdorrte Hand (Mk 3,1–5), Aussatz (Mk 1,40–45), Menschen, die gar nicht anwesend waren (der Knecht des Hauptmanns, Mt 8,5–13), und Tote (Joh 11). Jesus schickte Geheilte zu den Priestern, die nach Lev 13–14 den Befund prüfen mussten (Lk 17,14) – eine frühe Form der Verifikation. Und die Gegner Jesu untersuchten die Heilung des Blindgeborenen kritisch, befragten sogar die Eltern (Joh 9,18–23). Das Neue Testament kennt also selbst die Frage: Ist das wirklich geschehen?`,
    detail: `- **Mk 6,5–6**: „Er konnte daselbst nicht eine einzige Tat tun … und er verwunderte sich ihres Unglaubens." Skeptiker sehen darin einen Placebo-Hinweis. Der Kontext zeigt aber Ablehnung (Mk 6,3: „sie ärgerten sich an ihm") – Jesus drängt seine Heilung nicht denen auf, die ihn verwerfen; zudem heilte er auch dort einige Kranke (6,5b).
- **Mt 8,5–13; Mk 5,35–43**: Fernheilung und Auferweckung eines toten Mädchens schließen Suggestion beim Geheilten aus.
- **Joh 9,32**: Die Zeitgenossen betonen die Einzigartigkeit – „von der Welt an ist's nicht erhört".
- **Jak 5,14–15**: Die Kirche betet über den Kranken und salbt ihn mit Öl – Gebet und Zuwendung, nicht Show.`,
    sources: [
      { kind: 'bibel', work: 'Johannes', ref: '9,18–21', quote: `Die Juden glaubten nicht von ihm, daß er blind gewesen und sehend geworden wäre, bis daß sie riefen die Eltern des, der sehend war geworden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '17,14', quote: `Gehet hin und zeiget euch den Priestern! Und es geschah, da sie hingingen, wurden sie rein.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '8,13', quote: `Und Jesus sprach zu dem Hauptmann: Gehe hin; dir geschehe, wie du geglaubt hast. Und sein Knecht ward gesund zu derselben Stunde.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Markus', ref: '6,5–6', quote: `Und er konnte allda nicht eine einzige Tat tun; außer wenig Siechen legte er die Hände auf und heilte sie. Und er verwunderte sich ihres Unglaubens.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche betet für die Kranken in jeder Liturgie und spendet das Sakrament der Krankensalbung (Öl der Fürbitte, „Qandil") nach Jak 5,14. Zugleich hat sie die Medizin immer als Gabe Gottes geehrt. Basilius der Große lehrt, dass der Gebrauch der Heilkunst der Frömmigkeit nicht widerspricht, dass man aber nicht alle Hoffnung auf sie setzen soll. Die Kirche rechnet mit Heilungen durch Gottes Gnade, ist aber zurückhaltend im Urteil: Nicht jede Genesung ist ein Wunder, und ein Wunder muss sorgfältig geprüft werden – „Prüfet aber alles, und das Gute behaltet" (1 Thess 5,21).`,
    sources: [
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Ausführliche Regeln (Regulae fusius tractatae)', ref: 'Frage 55', year: 'um 370', quote: `Die Heilkunst ist uns von Gott gegeben; ihr Gebrauch widerspricht der Frömmigkeit nicht, doch sollen wir nicht unsere ganze Hoffnung auf sie setzen, sondern alles zur Ehre Gottes tun.`, status: 'paraphrase' },
      { kind: 'bibel', work: '1. Thessalonicher', ref: '5,21', quote: `Prüfet aber alles, und das Gute behaltet.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jakobus', ref: '5,14–15', quote: `Ist jemand krank, der rufe zu sich die Ältesten von der Gemeinde, daß sie über ihm beten und salben ihn mit Öl in dem Namen des HERRN. Und das Gebet des Glaubens wird dem Kranken helfen, und der HERR wird ihn aufrichten.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `**Placebo:** Die einflussreiche Analyse von Hróbjartsson und Gøtzsche (NEJM 2001) fand wenig Belege für starke klinische Placebo-Effekte; messbar waren vor allem kleine Effekte auf subjektive Endpunkte, besonders Schmerz. Spätere Cochrane-Auswertungen bestätigten: Placebos beeinflussen vor allem patientenberichtete Symptome (Schmerz, Übelkeit), kaum objektive Befunde. **Spontanremission:** Spontane Rückbildungen von Krebs sind dokumentiert, aber selten (in der Literatur oft geschätzt auf etwa 1 zu 60.000–100.000 Krebsfälle, Challis & Stam 1990 – die Zahl ist unsicher), meist allmählich und gehäuft bei bestimmten Tumorarten (Neuroblastom, Nierenzellkarzinom, Melanom).`,
    detail: `- **Funktionelle neurologische Störungen** sind real und können sich plötzlich bessern; seriöse Prüfverfahren (Lourdes, Kanonisierungsprozesse) schließen deshalb psychogene Leiden und Erkrankungen ohne objektiven Befund aus.
- **Die Lambertini-Kriterien** (benannt nach Prospero Lambertini, dem späteren Papst Benedikt XIV., 18. Jh.) verlangen: schwere, objektiv diagnostizierte, organische Erkrankung mit ungünstiger Prognose; plötzliche, vollständige, dauerhafte Heilung ohne Rekonvaleszenz; keine Behandlung, die die Heilung erklären könnte.
- **Fazit:** Placebo und Spontanremission erklären viele, aber nicht alle berichteten Heilungen. Die Kriterien sind gerade so gebaut, dass diese Erklärungen ausgeschlossen werden.`,
    sources: [
      { kind: 'wissenschaft', author: 'Asbjørn Hróbjartsson & Peter C. Gøtzsche', work: 'Is the Placebo Powerless? An Analysis of Clinical Trials Comparing Placebo with No Treatment', ref: 'New England Journal of Medicine 344 (2001), 1594–1602', year: '2001', quote: `Wenig Belege für starke klinische Placebo-Effekte; mögliche kleine Effekte bei subjektiven Endpunkten und bei der Schmerzbehandlung.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'J. Bruce Moseley u. a.', work: 'A Controlled Trial of Arthroscopic Surgery for Osteoarthritis of the Knee', ref: 'New England Journal of Medicine 347 (2002)', year: '2002', status: 'paraphrase', note: 'Beispiel für starke Placebo-Wirkung bei Schmerz und subjektiver Funktion.' },
      { kind: 'wissenschaft', author: 'G. B. Challis & H. J. Stam', work: 'The Spontaneous Regression of Cancer: A Review of Cases from 1900 to 1987', ref: 'Acta Oncologica 29 (1990)', year: '1990', status: 'paraphrase', note: 'Häufigkeitsschätzungen sind unsicher.' },
    ],
  },
  quickAnswer: `Placebo und Spontanremission gibt es wirklich – und gerade deshalb schließen seriöse Prüfungen sie aus. In Lourdes zählen nur schwere, organische, objektiv dokumentierte Krankheiten, die plötzlich, vollständig und dauerhaft heilen, ohne dass eine Behandlung das erklärt. Placebo lindert vor allem subjektive Beschwerden wie Schmerz; es lässt keinen zerstörten Knochen nachwachsen. Bei manchen Fällen versagen beide Erklärungen – dann ist die Frage nach einem Wunder legitim.`,
  keyPoints: [
    `**Zugeständnis:** Viele berichtete „Heilungen" sind tatsächlich Placebo, funktionelle Störungen, Remission oder Irrtum – Christen sollten das offen sagen.`,
    `**Placebo hat Grenzen:** Es wirkt vor allem auf subjektive Endpunkte (Schmerz, Übelkeit), kaum auf objektive Befunde wie Röntgenbilder, Biopsien oder Hörschwellen.`,
    `**Spontanremission ist selten,** meist allmählich und auf bestimmte Tumoren konzentriert; sie erklärt keine augenblickliche Heilung einer Fraktur, Hornhautnarbe oder eines Knochendefekts.`,
    `**Die Kriterien sind gegen genau diese Erklärungen gebaut:** organisch, objektiv, plötzlich, vollständig, dauerhaft, ohne erklärende Therapie.`,
    `**Jesu Heilungen** umfassten Blindheit von Geburt, Aussatz, Fernheilungen und Totenauferweckungen – keine typischen Placebo-Felder.`,
  ],
  argument: {
    name: 'Filterargument gegen die Placebo-Erklärung',
    summary: 'Wo objektive, organische Befunde plötzlich und vollständig verschwinden, reichen Placebo und Remission nicht aus.',
    premises: [
      {
        text: 'P1: Placebo-Effekte betreffen vor allem subjektive Symptome; Spontanremissionen sind selten, meist allmählich und auf wenige Krankheitsbilder beschränkt.',
        support: `Hróbjartsson & Gøtzsche 2001; Cochrane-Auswertungen; Challis & Stam 1990.`,
      },
      {
        text: 'P2: Einige dokumentierte Heilungen betreffen objektiv nachgewiesene organische Erkrankungen und verliefen augenblicklich, vollständig und dauerhaft – vorher und nachher ärztlich belegt.',
        support: `Die von Lourdes anerkannten Fälle und medizinisch geprüfte Fälle in Kanonisierungsverfahren durchlaufen genau diese Filter; viele Kandidaten werden abgelehnt.`,
      },
    ],
    conclusion: 'Für diese Fälle sind Placebo und Spontanremission keine ausreichende Erklärung; die Frage nach einem besonderen Handeln Gottes ist rational offen.',
  },
  voices: [
    {
      person: 'lukas',
      role: 'als Arzt und Historiker',
      text: `Lukas, „der Arzt, der Geliebte" (Kol 4,14), beschreibt Heilungen mit auffallender Genauigkeit: Er spricht vom „großen Fieber" der Schwiegermutter des Petrus (Lk 4,38), vom Gelähmten an der Tempelpforte, dessen „Füße und Knöchel fest" wurden (Apg 3,7), und vom Vater des Publius, der an „Fieber und Ruhr" litt (Apg 28,8). Er berichtet auch, dass die Behörden die Heilung des Gelähmten untersuchten und sie nicht leugnen konnten (Apg 4,16). Für Lukas sind Heilungen öffentliche, prüfbare Ereignisse.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '4,16', quote: `Was wollen wir diesen Menschen tun? Denn das Zeichen, durch sie geschehen, ist kund, offenbar allen, die zu Jerusalem wohnen, und wir können's nicht leugnen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
    },
    {
      person: 'basilius',
      role: 'als Gründer eines Krankenhauses',
      text: `Basilius, der in Caesarea eine große Anlage für Kranke und Aussätzige errichtete, sah keinen Gegensatz zwischen Gebet und Medizin. In seinen Mönchsregeln lehrt er, dass Gott die Heilkunst geschenkt hat, ihr Gebrauch fromm ist, man aber Heilung letztlich von Gott erbittet. Diese Haltung schützt vor zwei Extremen: der Verachtung der Medizin und der Vergötzung der Medizin.`,
      sources: [
        { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Regulae fusius tractatae', ref: 'Frage 55', status: 'paraphrase' },
      ],
    },
    {
      person: 'keener',
      role: 'als Historiker der Wunderberichte',
      text: `Keener räumt in seinem zweibändigen Werk *Miracles* (2011) ausdrücklich ein, dass viele Heilungsberichte durch Suggestion, Fehldiagnosen oder natürliche Genesung erklärbar sind. Er sammelt aber auch Fälle, bei denen objektive Befunde vorliegen – Blinde, deren Sehvermögen nachweislich zurückkehrte, oder Erkrankungen, die vorher und nachher ärztlich dokumentiert sind. Sein Punkt: Wer pauschal „alles Placebo" sagt, prüft die stärksten Fälle nicht.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', ref: '2 Bände', year: '2011', status: 'paraphrase' },
      ],
    },
    {
      person: 'koenig',
      role: 'als Psychiater und Forscher zu Religion und Gesundheit',
      text: `Koenig hat in seinen Handbüchern Tausende Studien zu Religion und Gesundheit ausgewertet. Er betont, dass religiöse Praxis messbare Zusammenhänge mit psychischer und körperlicher Gesundheit zeigt, die zum Teil über psychologische und soziale Mechanismen erklärbar sind – Hoffnung, Gemeinschaft, gesunder Lebensstil. Er warnt aber davor, alles Unerklärte vorschnell zu deuten: Wissenschaft kann Zusammenhänge messen; ob Gott in einem Einzelfall gehandelt hat, ist eine weitergehende Frage.`,
      sources: [
        { kind: 'wissenschaft', author: 'Harold G. Koenig, Dana E. King, Verna B. Carson', work: 'Handbook of Religion and Health (2. Aufl.)', year: '2012', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Wunders',
      text: `Lewis betont in *Wunder* (1947), dass ein Wunder nicht die Naturordnung zerstört, sondern ein neues Ereignis in sie einführt, das sich danach ganz natürlich weiterentwickelt: Ein geheilter Knochen heilt nach den Gesetzen der Biologie weiter. Gerade weil wir den gewöhnlichen Lauf der Natur kennen, können wir das Ungewöhnliche überhaupt erkennen. Wer schon vorher entschieden hat, dass es keine Wunder gibt, wird jede Heilung irgendwie „natürlich" erklären – das ist dann aber eine Vorentscheidung, kein Befund.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study (dt. Wunder)', ref: 'Kap. 1 und 8', year: '1947', status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'placebo-maechtig',
      objection: `Placebo kann enorm viel – sogar Schein-Operationen am Knie wirken so gut wie echte (Moseley, NEJM 2002). Warum sollte das bei Wunderheilungen anders sein?`,
      objectionBy: 'Edzard Ernst / Ben Goldacre',
      targetsPremise: 1,
      answer: `Bei Schmerz und subjektiver Funktion – ja, das ist gut belegt. Aber Placebo lässt keinen zerstörten Knochen nachwachsen, keine Hornhautnarbe verschwinden, keinen Tumor auf dem Röntgenbild schrumpfen. Die große Analyse von Hróbjartsson und Gøtzsche fand gerade bei objektiven Endpunkten kaum Placebo-Effekte. Ernsthafte Wunderprüfungen betrachten nur solche objektiven Befunde.`,
      followUps: [
        {
          id: 'funktionelle-stoerungen',
          objection: `Funktionelle Lähmungen und psychogene Blindheit können sich bei emotionalen Ereignissen schlagartig lösen. Genau das passiert bei Wallfahrten.`,
          objectionBy: 'Steven Novella',
          targetsPremise: 2,
          answer: `Richtig – und deshalb werden solche Fälle in Lourdes ausdrücklich ausgeschlossen. Anerkannt werden nur Heilungen organischer Erkrankungen mit objektivem Befund. Ein oft genanntes Beispiel ist der Italiener Vittorio Micheli: Ein Tumor hatte Teile seines Beckenknochens zerstört; nach seiner Wallfahrt 1963 bildete sich der Tumor zurück, und der Knochen baute sich nach den Röntgenbildern neu auf. Das Komitee erkannte den Fall 1976 an.`,
          sources: [
            { kind: 'sonstiges', work: 'Heiligtum Unserer Lieben Frau von Lourdes: Liste der anerkannten Heilungen (Fall Vittorio Micheli)', year: 'Heilung 1963, Anerkennung 1976', status: 'paraphrase', note: 'Zusammenfassung nach Darstellungen des Heiligtums; Einzelheiten vor Verwendung in den Akten prüfen.' },
          ],
          followUps: [
            {
              id: 'sarkome-remittieren',
              objection: `Auch Sarkome können sich in seltenen Fällen spontan zurückbilden.`,
              objectionBy: 'Skeptiker',
              answer: `Sehr selten, ja – und das Komitee kannte diese Möglichkeit. Ein Wunder wird nicht schon behauptet, weil etwas selten ist, sondern wegen des Gesamtbildes: schwere Zerstörung, zeitlicher Zusammenhang mit Gebet und Wallfahrt, vollständige Wiederherstellung. Man kann im Einzelfall agnostisch bleiben. Aber „Placebo" als Standarderklärung für alles ist dann nicht mehr haltbar.`,
              questionsBack: [
                `Welche Befundlage würde dich bei einer Heilung zumindest an der Placebo-Erklärung zweifeln lassen?`,
              ],
              followUps: [
                {
                  id: 'anekdoten-keine-evidenz',
                  objection: `Ohne Kontrollgruppe und Verblindung bleiben das Anekdoten – egal wie gut die Röntgenbilder sind. In der evidenzbasierten Medizin stehen Fallberichte ganz unten in der Hierarchie.`,
                  objectionBy: 'Edzard Ernst',
                  answer: `Für die Frage „Wirkt ein Medikament?" hast du völlig recht. Aber ein Wunder ist keine wiederholbare Therapie, sondern ein **einzelnes Ereignis** – und einzelne Ereignisse prüft man mit Dokumentation, nicht mit Randomisierung. Übrigens beruht auch das Wissen über Spontanremissionen, auf das du dich berufst, fast ausschließlich auf Fallberichten. Wer Fallberichte grundsätzlich verwirft, verliert auch seine eigene Gegenerklärung.`,
                  detail: `Die Evidenzhierarchie (Metaanalysen oben, Fallberichte unten) dient der Bewertung von **Behandlungen**: Wirkt Mittel X besser als Placebo? Für die Frage, ob ein bestimmtes Ereignis stattgefunden hat und ob es natürlich erklärbar ist, sind gut dokumentierte Einzelfälle mit Vorher-nachher-Befunden das angemessene Werkzeug – ähnlich wie in der Rechtsmedizin oder bei der Erstbeschreibung seltener Krankheiten. Die klassische Übersicht zur spontanen Krebsregression (Everson & Cole 1966) ist selbst eine Sammlung von Fallberichten.

Die Religionswissenschaftlerin Candy Gunther Brown hat genau diese methodische Frage untersucht: Man kann Heilungsberichte nicht wie Medikamente testen, aber man kann medizinische Vorher-nachher-Befunde sammeln, unabhängig prüfen lassen und kritisch bewerten.`,
                  voices: [
                    {
                      person: 'candy-gunther-brown',
                      role: 'als Religionswissenschaftlerin, Indiana University',
                      text: `Brown diskutiert in *Testing Prayer: Science and Healing* (2012), welche Methoden für die Untersuchung von Heilungsgebeten taugen. Sie kritisiert sowohl leichtgläubige Zeugnisse als auch die Vorstellung, nur randomisierte Studien könnten etwas zeigen, und plädiert für medizinisch dokumentierte Fallstudien und prospektive Messungen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Candy Gunther Brown', work: 'Testing Prayer: Science and Healing', year: '2012', status: 'paraphrase' },
                      ],
                    },
                  ],
                  sources: [
                    { kind: 'wissenschaft', author: 'Tilden C. Everson & Warren H. Cole', work: 'Spontaneous Regression of Cancer', year: '1966', status: 'paraphrase', note: 'Standardwerk; sammelt rund 176 Fallberichte spontaner Krebsregression.' },
                  ],
                  questionsBack: [
                    `Woher weißt du von Spontanremissionen – aus randomisierten Studien oder aus Fallberichten?`,
                    `Wie würdest du ein einmaliges Ereignis randomisieren?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'spontanremission-statistik',
      objection: `Krebs bildet sich manchmal von selbst zurück. Wenn Millionen Gläubige beten, sind ein paar spektakuläre Fälle statistisch zu erwarten.`,
      objectionBy: 'Michael Shermer',
      targetsPremise: 1,
      answer: `Das Argument mit den Grundraten ist fair. Aber Spontanremissionen sind selten, verlaufen meist über Wochen oder Monate und betreffen vor allem bestimmte Tumorarten. Viele berichtete Heilungen betreffen dagegen Leiden, für die es überhaupt keine bekannte Spontanheilung gibt – Knochendefekte, Taubheit durch Nervenschäden, Narbenblindheit – und sie geschehen augenblicklich.`,
      followUps: [
        {
          id: 'timing-zufall',
          objection: `Bei Millionen Gebeten trifft das Timing eben manchmal zufällig.`,
          answer: `Bei einem einzelnen Merkmal ja. Entscheidend ist die Kombination: organische Krankheit **und** plötzlich **und** vollständig **und** dauerhaft **und** im Moment des Gebets. Jedes Merkmal senkt die Zufallswahrscheinlichkeit weiter. Außerdem behauptet niemand, jede Genesung nach einem Gebet sei ein Wunder – es geht um wenige, sehr gut dokumentierte Fälle.`,
          followUps: [
            {
              id: 'treffer-zaehlen',
              objection: `Das ist klassischer Bestätigungsfehler: Ihr zählt die Treffer und vergesst die Millionen Gebete, die nicht erhört wurden. Hätte man auch die Fehlschläge dokumentiert, bliebe nichts übrig.`,
              objectionBy: 'Michael Shermer',
              answer: `Für die Behauptung „Gebet heilt zuverlässig" wäre das ein vernichtender Einwand – aber die behaupte ich nicht. Gott ist kein Automat, und die meisten Kranken werden nicht wunderbar geheilt; das sagt die Kirche offen. Mein Punkt ist ein anderer: Wenn auch nur **ein** Fall gut dokumentiert und natürlich unerklärlich ist, ist die These „Wunder gibt es nicht" in Frage gestellt. Fehlschläge an anderer Stelle ändern nichts daran, ob dieser eine Fall geschehen ist.`,
              detail: `Ein Vergleich: Dass die meisten Lottoscheine verlieren, beweist nicht, dass ein bestimmter Gewinner gelogen hat – man prüft den Gewinnschein. Genauso prüft man bei einer behaupteten Heilung die Befunde vor und nach dem Ereignis. Die Bestätigungsfehler-Kritik ist berechtigt gegenüber Gemeinden, die nur Erfolgsgeschichten erzählen; deshalb gehören zu einer ehrlichen Wunderprüfung auch die vielen verworfenen Fälle (in Lourdes die große Mehrheit der Dossiers).`,
              questionsBack: [
                `Widerlegt die Zahl der Nieten, dass ein bestimmtes Los gewonnen hat?`,
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'warum-keine-amputierten',
      objection: `Warum heilt Gott nie Amputierte? Ein nachwachsendes Bein wäre eindeutig – und genau das passiert nie.`,
      objectionBy: 'Skeptiker-Webseite „Why Won\'t God Heal Amputees?"',
      answer: `Erstens verschiebt das die Frage: Wenn es auch nur eine gut belegte Heilung einer anderen organischen Krankheit gibt, ist die These „keine Wunder" widerlegt, ganz gleich, ob auch Gliedmaßen nachwachsen. Zweitens sind Wunder nach der Schrift Zeichen, keine Automaten auf Bestellung – Paulus blieb selbst mit seinem „Pfahl im Fleisch" (2 Kor 12,7–9), Trophimus ließ er krank zurück (2 Tim 4,20).`,
      detail: `Es gibt historische Berichte über die Wiederherstellung von Gliedmaßen (etwa das „Wunder von Calanda", Spanien 1640, mit notarieller Beurkundung), die Skeptiker allerdings bestreiten. Man sollte sich darauf nicht stützen, sondern beim grundsätzlichen Punkt bleiben.`,
      followUps: [
        {
          id: 'gott-willkuerlich',
          objection: `Dann ist Gott willkürlich: Er heilt den einen und lässt den anderen sterben.`,
          objectionBy: 'Bart Ehrman',
          answer: `Das ist die Frage nach dem Leid, die eine eigene, ernsthafte Antwort verdient. Wunder sind nach christlichem Verständnis Vorzeichen der kommenden Auferstehung, nicht deren Ersatz – auch Lazarus starb später wieder. Die endgültige Heilung aller ist die Auferstehung. Bis dahin betet die Kirche für alle Kranken und pflegt sie, ob Gott sichtbar eingreift oder nicht.`,
        },
      ],
    },
    {
      id: 'betruegerische-heiler',
      objection: `Fernsehheiler wie Peter Popoff wurden als Betrüger entlarvt – er bekam Informationen über einen Funkempfänger im Ohr (James Randi, 1986). Das zeigt, was hinter Wunderheilungen steckt.`,
      objectionBy: 'James Randi',
      answer: `Solche Entlarvungen sind wichtig, und Christen sollten Betrug als Erste verurteilen – schon die Apostelgeschichte erzählt von Simon dem Zauberer, der Gottes Gaben kaufen wollte (Apg 8,18–24). Aber Falschgeld beweist nicht, dass es kein echtes Geld gibt. Die orthodoxe Kirche kennt keine Heilungsshows; sie betet still, salbt und prüft.`,
      followUps: [
        {
          id: 'jeder-fall-zerfaellt',
          objection: `Jeder genau untersuchte Fall löst sich am Ende in Luft auf.`,
          objectionBy: 'Joe Nickell',
          answer: `Das stimmt nicht. Die Ärztekommission in Lourdes hat in über hundert Jahren tausende Dossiers geprüft und die allermeisten verworfen – aber eine kleine Zahl nach jahrelanger Untersuchung als medizinisch unerklärlich eingestuft. Dazu mehr im Claim „Es gibt keine medizinisch belegten Wunder".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kennst du eine Studie, in der Placebo zerstörtes Knochengewebe wiederhergestellt hat?`,
    `Welche Kriterien müsste eine Heilung erfüllen, damit du Placebo und Remission ausschließt?`,
    `Hast du dir die Akten der stärksten Fälle angesehen – oder schließt du von den schwächsten auf alle?`,
  ],
  avoid: [
    `Jede Genesung nach einem Gebet zum Wunder erklären – das macht dich unglaubwürdig und ist theologisch unnötig.`,
    `Behaupten, Placebo sei „Einbildung" – Placebo-Effekte sind real; der Punkt ist ihre Reichweite.`,
    `Mit Heilungsshows oder ungeprüften Zeugnissen aus dem Internet argumentieren.`,
  ],
  concessions: [
    `Ein großer Teil berichteter Heilungen lässt sich durch Placebo, funktionelle Störungen, Remission, Fehldiagnosen oder Betrug erklären.`,
    `Es gab und gibt betrügerische „Heiler" auch im christlichen Raum.`,
    `Spontanremissionen bei Krebs sind real dokumentiert.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Wunder (Miracles)', year: '1947', status: 'paraphrase' },
    { kind: 'wissenschaft', author: 'Asbjørn Hróbjartsson & Peter C. Gøtzsche', work: 'Is the Placebo Powerless?', ref: 'NEJM 344 (2001)', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Placebo', 'Spontanremission', 'Heilung', 'Lourdes'],
  related: [
    'medizin-wunder/keine-belegten-wunder',
    'medizin-wunder/gebetsstudien',
    'physik/wunder-verletzen-naturgesetze',
    'pfingstbewegung/heilung-garantiert',
    'theodizee/unerhoerte-gebete',
  ],
};

export default claim;
