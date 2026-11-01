import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'zeitoun-erscheinungen',
  title: `„Die Marienerscheinungen von Zeitoun (1968) waren Massenhysterie."`,
  proponents: [
    { name: 'John S. Derr & Michael A. Persinger', role: 'Geophysiker (US Geological Survey) bzw. Neuropsychologe (Laurentian University)', work: '„Geophysical variables and behavior: LIV. Zeitoun (Egypt) apparitions of the Virgin Mary as tectonic strain-induced luminosities", Perceptual and Motor Skills 68 (1989)' },
    { name: 'Robert Todd Carroll', role: 'Philosoph, Herausgeber des „Skeptic\'s Dictionary"', work: 'The Skeptic\'s Dictionary, Eintrag „Zeitoun"' },
    { name: 'Brian Dunning', role: 'Wissenschaftsjournalist, Skeptoid', work: 'Skeptoid-Episode zu Zeitoun' },
  ],
  steelman: `Im Frühjahr 1968 befand sich Ägypten in einer kollektiven Krise: Die verheerende Niederlage im Sechstagekrieg (Juni 1967) hatte das Land traumatisiert. In einer solchen Lage sind Menschen besonders empfänglich für tröstende Zeichen. Am Anfang standen einige Arbeiter, die nachts eine helle Gestalt auf der Kuppel einer Kirche zu sehen glaubten; als sich die Nachricht verbreitete, strömten Zehntausende herbei, die in jedem Lichtschein die Jungfrau erkannten – ein Lehrbuchfall sozialer Ansteckung und Erwartung. Die Fotos zeigen meist nur unscharfe Lichtflecken. Derr und Persinger (1989) fanden zudem eine statistische Korrelation zwischen der Häufigkeit der Lichterscheinungen und der seismischen Aktivität in der Region: Tektonische Spannungen können Leuchterscheinungen erzeugen, die eine gläubige Menge religiös deutet. Und schließlich profitierten sowohl das Regime als auch die Kirche von der Deutung als göttliche Tröstung.`,
  biblical: {
    summary: `Die Bibel kennt Erscheinungen Verstorbener auf Gottes Initiative – Mose und Elia erscheinen bei der Verklärung Jesu (Mt 17,3), und nach der Auferstehung erschienen „viele Leiber der Heiligen" in Jerusalem (Mt 27,52–53). Sie unterscheidet das scharf von der verbotenen Totenbeschwörung, bei der Menschen aus eigenem Antrieb Verstorbene befragen wollen (Dtn 18,10–12). Maria sagt im Magnificat voraus: „Von nun an werden mich selig preisen alle Kindeskinder" (Lk 1,48). Für Ägypten verheißt Jesaja: „Zu der Zeit wird des HERRN Altar mitten in Ägyptenland sein" und „Gesegnet bist du, Ägypten, mein Volk" (Jes 19,19.25) – die Heilige Familie fand in Ägypten Zuflucht (Mt 2,13–15), nach koptischer Überlieferung auch im Gebiet von Matariya, gleich neben Zeitoun. Zugleich gebietet die Schrift Prüfung: „Prüfet aber alles" (1 Thess 5,21), und „an ihren Früchten sollt ihr sie erkennen" (Mt 7,16).`,
    detail: `- **Mt 17,3; 27,52–53**: Erscheinungen Verstorbener sind biblisch nicht grundsätzlich ausgeschlossen.
- **Dtn 18,10–12**: Verboten ist die Totenbefragung (Nekromantie) – der Versuch, Verstorbene herbeizurufen. In Zeitoun rief niemand eine Erscheinung herbei.
- **Jes 19,19–25**: Die koptische Tradition liest diese Verheißung als Zusage an das christliche Ägypten.
- **Mt 7,16**: Kriterium der Früchte – Gebet, Umkehr, Frieden, Versöhnung oder Angst, Spaltung, Gewinnsucht?`,
    sources: [
      { kind: 'bibel', work: 'Matthäus', ref: '17,3', quote: `Und siehe, da erschienen ihnen Mose und Elia; die redeten mit ihm.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Lukas', ref: '1,48', quote: `Denn er hat die Niedrigkeit seiner Magd angesehen. Siehe, von nun an werden mich selig preisen alle Kindeskinder.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '19,19.25', quote: `Zu der Zeit wird des HERRN Altar mitten in Ägyptenland sein … Gesegnet bist du, Ägypten, mein Volk.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Matthäus', ref: '7,16', quote: `An ihren Früchten sollt ihr sie erkennen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Deuteronomium', ref: '18,10–12', quote: `Verboten ist, wer Wahrsagerei treibt, Zauberei übt oder die Toten befragt; das ist dem HERRN ein Gräuel.`, status: 'paraphrase' },
    ],
  },
  church: {
    summary: `Ab dem Abend des 2. April 1968 wurden über der Kirche der Heiligen Jungfrau Maria in Zeitoun (Kairo) wiederholt Lichterscheinungen gesehen, die viele Zeugen als leuchtende Gestalt der Jungfrau beschrieben; erste Zeugen waren nach den Berichten muslimische Arbeiter gegenüber der Kirche. Die Erscheinungen setzten sich mit Unterbrechungen bis etwa 1971 fort; an manchen Abenden sollen sich Zehntausende bis Hunderttausende Menschen – Christen und Muslime – versammelt haben. Papst Kyrillos VI. setzte eine Untersuchungskommission ein; Anfang Mai 1968 (meist wird der 4. Mai genannt) erklärte das koptische Patriarchat die Erscheinungen offiziell für echt. Wichtig: Nach orthodoxem Verständnis sind solche Erscheinungen Zeichen der Liebe Gottes, aber **keine Glaubensgrundlage** – der Glaube ruht auf Christus, der Schrift und der Überlieferung der Kirche.`,
    detail: `Die Kirche gibt ein Urteil über das Ereignis ab, verlangt aber von niemandem, an Zeitoun zu glauben, um Christ zu sein. Wer die Deutung bezweifelt, verlässt nicht den Glauben. Umgekehrt ist es nicht unvernünftig, einem so breit bezeugten Ereignis eine übernatürliche Ursache zuzuschreiben.`,
    sources: [
      { kind: 'koptisch', author: 'Koptisch-orthodoxes Patriarchat (Papst Kyrillos VI.)', work: 'Offizielle Erklärung zu den Erscheinungen in Zeitoun', year: 'Mai 1968', quote: `Das Patriarchat bestätigte nach Prüfung durch eine Kommission, dass die Heilige Jungfrau über der Kirche in Zeitoun erschienen ist.`, status: 'paraphrase', note: 'Datum in den Quellen: 4. bzw. 5. Mai 1968; Wortlaut der Erklärung hier nicht wörtlich wiedergegeben.' },
      { kind: 'fachliteratur', author: 'Cynthia Nelson', work: 'The Virgin of Zeitoun', ref: 'Worldview 16 (1973)', year: '1973', quote: `Die Anthropologin der American University in Cairo untersuchte die Ereignisse als soziales und religiöses Phänomen vor dem Hintergrund der Krise nach 1967.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `Es gibt nur wenig wissenschaftliche Literatur zu Zeitoun. Die wichtigste naturwissenschaftliche Gegenhypothese stammt von Derr und Persinger (1989): Sie verglichen die zeitliche Häufigkeit der Lichterscheinungen 1968–1969 mit der seismischen Aktivität in der weiteren Region und fanden eine Korrelation; sie deuteten die Lichter als „tektonisch induzierte Leuchterscheinungen". Sozialpsychologische Deutungen verweisen auf kollektive Erwartung nach der Niederlage von 1967. Hinweise auf technische Täuschung (Projektionen) wurden nie belegt.`,
    detail: `**Zur Bewertung der Hypothesen:**
- **Erdbebenlichter** sind ein reales, wenn auch wenig verstandenes Phänomen; sie werden meist als kurzlebig (Sekunden bis Minuten) und in der Nähe tektonischer Aktivität beschrieben. In Zeitoun wurden dagegen wiederholt über Stunden Lichter über einem einzelnen Gebäude berichtet, über Monate hinweg – aus der Umgebung wurden keine vergleichbaren Leuchterscheinungen gemeldet.
- **Persingers** breiteres Forschungsprogramm (u. a. der „Gotteshelm") ist umstritten; eine schwedische Forschergruppe konnte seine Ergebnisse zur Auslösung religiöser Erfahrungen durch Magnetfelder nicht replizieren (Granqvist u. a. 2005).
- **Massenhysterie** im klinischen Sinn bezeichnet meist die Ausbreitung körperlicher Symptome in einer Gruppe; sie erklärt schlecht, warum Fotos physische Lichtquellen zeigen und warum gemischte, teils skeptische Zuschauer über lange Zeit Ähnliches berichteten.
- **Ehrlicher Stand:** Etwas Ungewöhnliches, Leuchtendes war offenbar physisch vorhanden. Seine Deutung ist umstritten.`,
    sources: [
      { kind: 'gegner', author: 'John S. Derr & Michael A. Persinger', work: 'Geophysical variables and behavior: LIV. Zeitoun (Egypt) apparitions of the Virgin Mary as tectonic strain-induced luminosities', ref: 'Perceptual and Motor Skills 68 (1989), 123–128', year: '1989', quote: `Die zeitliche Häufigkeit der Lichterscheinungen über der Kirche 1968–1969 korrelierte mit der regionalen seismischen Aktivität; die Autoren deuten die Erscheinungen als tektonisch induzierte Leuchterscheinungen.`, status: 'paraphrase' },
      { kind: 'wissenschaft', author: 'Pehr Granqvist u. a.', work: 'Sensed presence and mystical experiences are predicted by suggestibility, not by the application of transcranial weak complex magnetic fields', ref: 'Neuroscience Letters 379 (2005), 1–6', year: '2005', status: 'paraphrase', note: 'Fehlgeschlagene Replikation von Persingers „Gotteshelm"-Ergebnissen.' },
    ],
  },
  quickAnswer: `Ehrlich gesagt: Zeitoun lässt sich wissenschaftlich nicht „beweisen", und unser Glaube hängt nicht daran. Aber „Massenhysterie" passt schlecht: Hunderttausende Zeugen – Christen und Muslime, Gläubige und Skeptiker –, über viele Monate, mit Fotos und Presseberichten. Die naturwissenschaftliche Alternative, Erdbebenlichter (Derr & Persinger 1989), beruht auf einer statistischen Korrelation und erklärt nicht, warum leuchtende Erscheinungen stundenlang und immer wieder über einer einzigen Kirche standen. Die Deutung der koptischen Kirche ist eine vernünftige Möglichkeit.`,
  keyPoints: [
    `**Faktenlage:** Ab 2. April 1968 Lichterscheinungen über der Marienkirche in Zeitoun, mit Unterbrechungen bis etwa 1971; sehr viele Zeugen, darunter Muslime; offizielle Anerkennung durch das koptische Patriarchat unter Papst Kyrillos VI. Anfang Mai 1968.`,
    `**Massenhysterie erklärt Fotos nicht:** Eine Kamera halluziniert nicht. Etwas Leuchtendes war physisch vorhanden.`,
    `**Erdbebenlichter passen schlecht:** Sie gelten als kurzlebig und unstrukturiert; in Zeitoun wurden Lichter wiederholt über Stunden über einem einzigen Gebäude beobachtet.`,
    `**Keine Glaubensgrundlage:** Erscheinungen sind nach orthodoxer Lehre Zeichen, nicht Fundament. Der Glaube ruht auf Christus und seiner Auferstehung.`,
    `**Biblisch unterscheiden:** Erscheinungen auf Gottes Initiative (Mt 17,3) sind etwas anderes als verbotene Totenbefragung (Dtn 18,11).`,
  ],
  voices: [
    {
      person: 'kyrillos-vi',
      role: 'als Patriarch zur Zeit der Erscheinungen',
      text: `Papst Kyrillos VI., bekannt als Mann intensiven Gebets, reagierte auf die Berichte nicht mit sofortiger Begeisterung, sondern mit einer Untersuchung durch eine Kommission von Geistlichen. Erst nach deren Bericht erklärte das Patriarchat die Erscheinungen für echt. Im selben Jahr weihte er die neue Markuskathedrale in Kairo und empfing Reliquien des Evangelisten Markus aus Rom – ein Jahr, das viele Kopten als Zeit göttlicher Tröstung nach der Krise von 1967 erlebten.`,
      sources: [
        { kind: 'koptisch', author: 'Koptisch-orthodoxes Patriarchat', work: 'Erklärung zu Zeitoun', year: '1968', status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Lehrer der Unterscheidung der Geister',
      text: `In seinem *Leben des Antonius* überliefert Athanasius die Lehre des großen Wüstenvaters über die Unterscheidung von Erscheinungen: Erscheinungen der Heiligen und Engel kommen in Stille und Sanftmut, sie bringen Freude, Ruhe und Mut und lassen die Furcht weichen; dämonische Trugbilder kommen mit Lärm und Verwirrung und hinterlassen Angst und Unruhe. Dieses Kriterium der Früchte wenden orthodoxe Christen auch auf neuzeitliche Ereignisse an – in Zeitoun berichteten Zeugen von Frieden, Gebet und Freude, nicht von Angst.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Vita Antonii', ref: '35–37', status: 'paraphrase' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als Philosoph des Wunderbaren',
      text: `Lewis bemerkt zu Beginn seines Buches über Wunder, dass Sehen allein nicht Glauben bedeutet: Wer eine übernatürliche Erklärung grundsätzlich ausschließt, wird jedes außergewöhnliche Erlebnis als Täuschung deuten – ganz gleich, wie stark die Zeugnisse sind. Ob man ein Ereignis wie Zeitoun für möglich hält, hängt daher zuerst von der Weltanschauung ab, mit der man es betrachtet. Eine faire Prüfung muss die eigene Vorentscheidung offenlegen.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Miracles: A Preliminary Study', ref: 'Kap. 1', year: '1947', status: 'paraphrase' },
      ],
    },
    {
      person: 'keener',
      role: 'als Historiker außergewöhnlicher Berichte',
      text: `Keener argumentiert allgemein, dass massenhaft und unabhängig bezeugte Ereignisse nicht deshalb unhistorisch werden, weil sie außergewöhnlich sind. Historiker müssen Zeugnisse nach ihrer Qualität beurteilen – Zahl, Vielfalt und Unabhängigkeit der Zeugen, zeitliche Nähe, physische Spuren –, nicht nach einer vorab festgelegten Weltanschauung. Nach diesen Kriterien gehören die Erscheinungen von Zeitoun zu den am breitesten bezeugten außergewöhnlichen Ereignissen der Neuzeit.`,
      sources: [
        { kind: 'fachliteratur', author: 'Craig S. Keener', work: 'Miracles: The Credibility of the New Testament Accounts', year: '2011', status: 'paraphrase', note: 'Allgemeine Methodik; Keeners Behandlung von Zeitoun im Einzelnen hier nicht wiedergegeben.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'massenhysterie-1967',
      objection: `Klassische Massenhysterie: Nach der Niederlage von 1967 sehnten sich die Ägypter nach Trost. Die Menge sah, was sie sehen wollte.`,
      objectionBy: 'Sozialpsychologische Deutung',
      answer: `Der Kontext erklärt erhöhte Erwartung – aber keine Fotos. Massenhysterie bezeichnet meist die Ausbreitung körperlicher Symptome; sie erklärt schlecht, warum über viele Monate hinweg gemischte Menschenmengen, darunter Muslime, Journalisten und Skeptiker, ähnliche Lichterscheinungen berichteten und diese fotografiert wurden.`,
      followUps: [
        {
          id: 'fotos-unscharf',
          objection: `Die Fotos zeigen doch nur unscharfe Lichtflecken.`,
          objectionBy: 'Skeptoid',
          answer: `Manche Fotos sind tatsächlich unscharf, das gebe ich zu; andere zeigen eine leuchtende Silhouette. Aber selbst ein Lichtfleck auf dem Film beweist: Da war etwas physisch Leuchtendes – keine bloße Halluzination. Die Hysterie-These scheitert damit; offen bleibt nur, was die Lichtquelle war.`,
          followUps: [
            {
              id: 'licht-ja-maria-nein',
              objection: `Gut, ein Licht. Aber warum ausgerechnet Maria?`,
              answer: `Das ist eine faire Frage: Die Identifizierung ist eine Deutung. Die Kirche stützt sie auf Gestalt, wiederkehrende Begleiterscheinungen, den Ort – eine Marienkirche nahe der Fluchtroute der Heiligen Familie – und die geistlichen Früchte. Man kann das Phänomen anerkennen und über die Deutung weiter nachdenken; beides ist redlicher als „Hysterie".`,
              followUps: [
                {
                  id: 'pareidolie',
                  objection: `Das ist Pareidolie: Menschen sehen Gesichter in Wolken und Jesus auf Toastbrot. Über einer Marienkirche, mit entsprechender Erwartung, wird aus einem Lichtfleck eben die Jungfrau.`,
                  objectionBy: 'Michael Shermer',
                  answer: `Pareidolie erklärt, wie wir **vage Formen deuten** – sie erklärt nicht, warum überhaupt ein leuchtendes Phänomen da war, das stundenlang und an vielen Abenden über derselben Kirche stand. Ich gebe zu: Die Wahrnehmung als Gestalt enthält eine Deutung, und Erwartung spielt dabei eine Rolle. Aber nach den Berichten sprachen auch muslimische Augenzeugen ohne christliche Erwartung von einer Frauengestalt. Pareidolie erklärt also allenfalls einen Teil der Deutung, nicht das Phänomen.`,
                  detail: `Fairerweise: Bei einem einzelnen unscharfen Foto oder einem einmaligen Eindruck wäre Pareidolie eine sehr gute Erklärung. Die Stärke von Zeitoun liegt nicht in einer bestimmten Bildinterpretation, sondern in der Kombination: physisch leuchtendes Phänomen, Wiederholung über Monate, sehr viele und gemischte Zeugen, Ortsgebundenheit. Wenn du im Gespräch merkst, dass dein Gegenüber an den Bildern hängen bleibt, lenke zurück auf diese Kombination – und betone, dass dein Glaube nicht davon abhängt.`,
                  questionsBack: [
                    `Wenn es Pareidolie war – was war das Leuchtende, das gedeutet wurde?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'tektonische-leuchterscheinungen',
      objection: `Derr und Persinger haben 1989 gezeigt: Die Lichter korrelieren mit der seismischen Aktivität. Es waren tektonische Leuchterscheinungen.`,
      objectionBy: 'John Derr & Michael Persinger',
      answer: `Die Hypothese verdient faire Prüfung. Aber Erdbebenlichter gelten als kurzlebig und formlos; in Zeitoun wurden wiederholt über Stunden Lichter über einem einzigen Gebäude berichtet – monatelang, ohne vergleichbare Meldungen aus der Umgebung. Und Persingers weitere Thesen, etwa zum „Gotteshelm", konnten von anderen Forschern nicht repliziert werden.`,
      followUps: [
        {
          id: 'korrelation-signifikant',
          objection: `Aber die Korrelation war statistisch signifikant.`,
          objectionBy: 'Michael Persinger',
          answer: `Eine Korrelation zwischen Monatszahlen von Sichtungen und regionalen Erdbeben in einer seismisch aktiven Zeit ist kein Mechanismus. Sie erklärt nicht, warum das Licht gerade über dieser Kirche erschien und als Gestalt wahrgenommen wurde. Die Hypothese ist möglich, aber keineswegs belegt – sie bleibt eine Vermutung.`,
          questionsBack: [
            `Kennst du einen anderen Fall, in dem Erdbebenlichter monatelang wiederholt über demselben Gebäude standen?`,
          ],
        },
      ],
    },
    {
      id: 'projektion-betrug',
      objection: `Vielleicht hat jemand Bilder projiziert – vielleicht sogar die Regierung, um vom Krieg abzulenken.`,
      objectionBy: 'Verschwörungshypothese',
      answer: `Dafür gibt es keinerlei Belege. Eine Projektion in den offenen Nachthimmel, sichtbar von allen Seiten für riesige Menschenmengen, über Monate und ohne dass je ein Gerät oder Beteiligter entdeckt wurde – das ist mit der Technik von 1968 schwer vorstellbar. Wer Betrug behauptet, trägt die Beweislast.`,
      followUps: [
        {
          id: 'regime-profitierte',
          objection: `Das Regime profitierte politisch davon. Das ist verdächtig.`,
          answer: `Dass jemand aus einem Ereignis Nutzen zieht, beweist nicht, dass er es erfunden hat – sonst müsste man jedes nationale Ereignis für inszeniert halten. Zudem: Das Christentum hängt nicht an Zeitoun. Selbst wenn sich eine natürliche Erklärung fände, bliebe der Glaube an Christus unberührt.`,
        },
      ],
    },
    {
      id: 'totenbefragung-verboten',
      objection: `Selbst wenn da etwas war: Die Bibel verbietet Kontakt mit Verstorbenen (Dtn 18,11). Solche Erscheinungen sind dämonisch.`,
      objectionBy: 'Evangelikaler bzw. muslimischer Kritiker',
      answer: `Die Schrift verbietet Totenbefragung – das Herbeirufen von Verstorbenen durch Menschen. Erscheinungen auf Gottes Initiative kennt sie sehr wohl: Mose und Elia erschienen bei der Verklärung (Mt 17,3). In Zeitoun hat niemand jemanden beschworen. Und das biblische Kriterium sind die Früchte (Mt 7,16): Berichtet wurden Gebet, Umkehr, Frieden zwischen Christen und Muslimen – nicht Angst und Verwirrung.`,
      followUps: [
        {
          id: 'glaube-haengt-daran',
          objection: `Wenn Zeitoun sich als natürlich erklärbar herausstellt, bricht euer Glaube zusammen.`,
          answer: `Nein. Erscheinungen sind nach orthodoxer Lehre Zeichen, keine Fundamente. Der Glaube ruht auf Christus, seiner Menschwerdung, seinem Kreuz und seiner Auferstehung – und für diese gibt es eigene, historische Gründe (1 Kor 15). Gerade deshalb kann ich über Zeitoun gelassen und ehrlich sprechen.`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Wie erklärt Massenhysterie, dass ein physisches Licht fotografiert wurde?`,
    `Warum sollten Erdbebenlichter monatelang über einem einzigen Gebäude erscheinen?`,
    `Welche Belege gibt es für eine technische Projektion?`,
    `Würdest du bei einem säkularen Ereignis mit so vielen Zeugen ebenfalls pauschal von Hysterie sprechen?`,
  ],
  avoid: [
    `Unbelegte Ausschmückungen wiederholen (z. B. dass Präsident Nasser die Erscheinung persönlich gesehen habe oder dass offizielle Behörden die Gegend nach Projektoren abgesucht hätten) – solche Details sind nicht gesichert.`,
    `Zeitoun als „wissenschaftlich bewiesen" darstellen.`,
    `Den Glauben an Christus von Zeitoun abhängig machen.`,
    `Andere Christen, die an Erscheinungen zweifeln, als ungläubig hinstellen.`,
  ],
  concessions: [
    `Die wissenschaftliche Dokumentation ist begrenzt; manche Fotos sind unscharf und mehrdeutig.`,
    `Der gesellschaftliche Kontext nach 1967 hat die Erwartung und Deutung sicher beeinflusst.`,
    `Eine natürliche Erklärung lässt sich nicht mit letzter Sicherheit ausschließen.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Cynthia Nelson', work: 'The Virgin of Zeitoun', ref: 'Worldview 16 (1973)', status: 'paraphrase' },
    { kind: 'gegner', author: 'John S. Derr & Michael A. Persinger', work: 'Zeitoun (Egypt) apparitions … as tectonic strain-induced luminosities', ref: 'Perceptual and Motor Skills 68 (1989)', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Leben des Antonius (Vita Antonii)', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Zeitoun', 'Marienerscheinung', 'Koptische Kirche', 'Kyrillos VI.', 'Ägypten'],
  related: [
    'medizin-wunder/keine-belegten-wunder',
    'heilige-ikonen/marienverehrung-goetzendienst',
    'heilige-ikonen/fuerbitte-der-heiligen',
    'neurowissenschaften/gotteserfahrung-hirnaktivitaet',
  ],
};

export default claim;
