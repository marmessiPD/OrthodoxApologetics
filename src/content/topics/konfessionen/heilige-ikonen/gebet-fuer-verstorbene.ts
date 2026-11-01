import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'gebet-fuer-verstorbene',
  title: `„Gebete für Verstorbene sind unbiblisch."`,
  proponents: [
    { name: 'Johannes Calvin', role: 'Reformator in Genf', work: 'Institutio III,5,6–10 – gegen Fegefeuer und Totengebet' },
    { name: 'Westminster-Bekenntnis', role: 'Reformiertes Bekenntnis (1647)', work: 'Kap. 21,4: Gebet für Lebende, nicht für die Toten' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe', work: 'Systematic Theology (1994), Kap. 41 „Death and the Intermediate State"' },
    { name: 'John MacArthur', role: 'Pastor, Grace Community Church', work: 'Predigten zu Hebr 9,27 und Lk 16' },
  ],
  steelman: `„Den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht" (Hebr 9,27). Mit dem Tod ist das Schicksal entschieden: Zwischen Abraham und dem reichen Mann ist „eine große Kluft befestigt", die niemand überschreiten kann (Lk 16,26); jeder empfängt, „nach dem er gehandelt hat bei Leibesleben" (2 Kor 5,10); „wohin der Baum fällt, da bleibt er liegen" (Pred 11,3). Das NT enthält kein Gebot und kein klares Beispiel eines Gebets für Verstorbene; Onesiphorus (2 Tim 1,16–18) lebte vermutlich noch. Der einzige deutliche Beleg steht im apokryphen 2. Makkabäerbuch (12,43–46) – und dort beten Juden für Gefallene, die heidnische Amulette trugen. Gebete für die Toten setzen das Fegefeuer voraus; das Trienter Konzil berief sich genau auf diese Stelle. Und sie sind seelsorglich gefährlich: Sie wecken die Hoffnung, man könne für einen Unbußfertigen nach dem Tod noch etwas tun – statt zur Umkehr heute zu rufen. Deshalb hat die Reformation das Totengebet zu Recht abgeschafft.`,
  biblical: {
    summary: `Die Schrift lehrt das Gericht nach dem Tod (Hebr 9,27), aber auch, dass das endgültige Gericht am Jüngsten Tag stattfindet (Mt 25,31–46; Joh 5,28–29) und die Seelen der Gerechten bis dahin „ruhen" (Offb 6,11). Paulus betet für Onesiphorus, „daß er finde Barmherzigkeit bei dem HERRN an jenem Tage" (2 Tim 1,18) – und grüßt nicht ihn, sondern sein Haus (1,16; 4,19), was viele Ausleger als Hinweis auf seinen Tod verstehen. Das Judentum zur Zeit Jesu betete für die Toten (2 Makk 12,43–46), und Jesus, der viele Bräuche der Pharisäer kritisierte, hat das nie verurteilt. Im Leib Christi trennt der Tod nicht: „Wir leben oder sterben, so sind wir des HERRN" (Röm 14,8); „die Liebe höret nimmer auf" (1 Kor 13,8).`,
    detail: `**Hebr 9,27 genau gelesen:** Der Vers sagt, dass nach dem Tod das Gericht kommt – nicht, dass man nicht für die Verstorbenen beten darf. Die Schrift spricht vom endgültigen Gericht am Ende der Zeit, wenn alle aus den Gräbern hervorgehen (Joh 5,28–29) und der Menschensohn auf seinem Thron sitzt (Mt 25,31). Bis dahin warten die Seelen: Den Märtyrern unter dem Altar wird gesagt, „daß sie ruheten noch eine kleine Zeit" (Offb 6,11). Das Gebet der Kirche bittet um Gottes Erbarmen für „jenen Tag".

**2 Tim 1,16–18:** „Der HERR gebe Barmherzigkeit dem Hause des Onesiphorus … Der HERR gebe ihm, daß er finde Barmherzigkeit bei dem HERRN an jenem Tage." Paulus wünscht dem *Haus* jetzt Barmherzigkeit, *ihm selbst* aber Barmherzigkeit am Tag des Gerichts; in 4,19 grüßt er wieder nur „das Haus des Onesiphorus". Ehrlich: Ob Onesiphorus tot war, ist nicht sicher – aber es ist die natürlichste Erklärung.

**2 Makk 12,43–46:** Judas Makkabäus lässt nach einer Schlacht eine Sammlung für ein Sündopfer für die Gefallenen nach Jerusalem schicken, „da er an die Auferstehung dachte" – denn wenn er nicht gehofft hätte, dass die Gefallenen auferstehen, wäre es überflüssig gewesen, für Tote zu beten. Unabhängig von der Kanonfrage ist das ein historisches Zeugnis jüdischer Praxis im 2./1. Jahrhundert v. Chr. Das Judentum betet bis heute für die Verstorbenen (Kaddisch, Jiskor).

**Lk 16,26:** Das Gleichnis zeigt die Endgültigkeit für den Unbußfertigen – darin stimmen wir überein. Es zeigt aber auch, dass Verstorbene bei Bewusstsein sind und sich um die Lebenden sorgen (16,27–28).`,
    sources: [
      { kind: 'bibel', work: 'Hebräer', ref: '9,27', quote: `Und wie den Menschen ist gesetzt, einmal zu sterben, darnach aber das Gericht …`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Timotheus', ref: '1,16–18', quote: `Der HERR gebe Barmherzigkeit dem Hause des Onesiphorus; denn er hat mich oft erquickt und hat sich meiner Kette nicht geschämt … Der HERR gebe ihm, daß er finde Barmherzigkeit bei dem HERRN an jenem Tage. Und wieviel er mir zu Ephesus gedienet hat, weißt du am besten.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '6,11', quote: `Und ihnen wurde gegeben einem jeglichen ein weißes Kleid, und ward zu ihnen gesagt, daß sie ruheten noch eine kleine Zeit, bis daß vollends dazukämen ihre Mitknechte und Brüder, die auch sollten noch getötet werden gleich wie sie.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Makkabäer', ref: '12,43–45', quote: `Judas veranstaltet eine Sammlung und schickt sie nach Jerusalem für ein Sündopfer, wohl und fromm handelnd, da er an die Auferstehung dachte. Denn hätte er nicht gehofft, dass die Gefallenen auferstehen würden, wäre es überflüssig und töricht gewesen, für die Toten zu beten. Darum ließ er für die Verstorbenen das Sühnopfer darbringen, damit sie von der Sünde befreit würden.`, status: 'paraphrase', note: 'Deuterokanonisch; historisches Zeugnis jüdischer Praxis vor Christus.' },
      { kind: 'bibel', work: 'Römer', ref: '14,8', quote: `Leben wir, so leben wir dem HERRN; sterben wir, so sterben wir dem HERRN. Darum wir leben oder sterben, so sind wir des HERRN.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '13,8', quote: `Die Liebe höret nimmer auf …`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche betet für die Entschlafenen, lehrt aber **kein Fegefeuer**. Ihr Gebet ist ein Ausdruck der Liebe im einen Leib Christi: Sie bittet Gott, den im Glauben Verstorbenen ihre Sünden aus Schwachheit und Unwissenheit zu vergeben, ihnen Ruhe im Paradies „im Schoß Abrahams, Isaaks und Jakobs" zu schenken und sie am Jüngsten Tag zu den Gerechten zu zählen. Das Gebet ändert nicht das Schicksal derer, die Christus bewusst verworfen haben, und ersetzt nicht die Umkehr im Leben. Die Kirche gedenkt der Verstorbenen in jeder Liturgie sowie besonders am dritten und vierzigsten Tag und am Jahrestag.`,
    detail: `**Die frühe Kirche – ein ununterbrochenes Zeugnis:**
- Die **Grabinschrift des Aberkios** (Kleinasien, um 180–200) endet mit der Bitte: Jeder, der dies versteht und mit mir übereinstimmt, bete für Aberkios.
- **Tertullian** (um 211): „Am Jahrestag bringen wir Opfer für die Verstorbenen dar, als Geburtstagsfeier" (De Corona 3); eine Witwe „betet für die Seele ihres Mannes, erbittet ihm einstweilen Erquickung und Gemeinschaft in der ersten Auferstehung und bringt an den Jahrestagen seines Entschlafens das Opfer dar" (De Monogamia 10).
- Die **Passio der Perpetua** (203) erzählt, wie die Märtyrerin für ihren verstorbenen kleinen Bruder Dinokrates betet und ihn im Gesicht erquickt sieht.
- **Kyrill von Jerusalem**: In der Liturgie betet man für die entschlafenen Väter und Bischöfe und alle Verstorbenen, „im Glauben, dass es den Seelen, für die das Gebet dargebracht wird, großen Nutzen bringt, während das heilige und ehrfurchtgebietende Opfer daliegt" (Myst. Kat. 5,9).
- **Johannes Chrysostomus**: Nicht vergeblich haben die Apostel angeordnet, bei den ehrfurchtgebietenden Mysterien der Verstorbenen zu gedenken.
- **Epiphanius** verurteilte im 4. Jahrhundert Aerius, der das Gebet für die Toten ablehnte, als Häretiker (Panarion 75).

**Koptische Liturgie:** In der Basilius-Anaphora bittet der Priester, Gott möge der Entschlafenen gedenken und ihre Seelen ruhen lassen im Schoß Abrahams, Isaaks und Jakobs, an einem Ort des Grüns, am Wasser der Ruhe, im Paradies der Freude, aus dem Schmerz, Trauer und Seufzen geflohen sind.

**Ehrliche Zugeständnisse der Reformatoren:** Calvin räumt ein, dass das Gebet für die Toten in der Kirche schon über tausend Jahre vor ihm üblich war, hält es aber für einen menschlichen Brauch. Luther schrieb 1528, es sei keine Sünde, aus freier Andacht zu beten: „Lieber Gott, hat's mit der Seele solche Gestalt, dass ihr zu helfen sei, so sei ihr gnädig." Und die Apologie des Augsburger Bekenntnisses (Art. XXIV) erklärt, sie verbiete das Gebet für die Toten nicht.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über die Einehe (De monogamia)', ref: '10', year: 'um 211', quote: `Sie betet für seine Seele und erbittet ihm einstweilen Erquickung und Gemeinschaft in der ersten Auferstehung, und sie bringt an den Jahrestagen seines Entschlafens das Opfer dar.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim', note: 'Tertullian schreibt hier bereits mit montanistischer Strenge; als Zeuge der Praxis unverdächtig.' },
      { kind: 'kirchenvater', author: 'Tertullian', work: 'De Corona', ref: '3', year: 'um 211', quote: `So oft der Jahrestag wiederkehrt, bringen wir Opfer für die Verstorbenen dar, als Geburtstagsfeier.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
      { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '5,9', quote: `Dann beten wir auch für die entschlafenen heiligen Väter und Bischöfe und überhaupt für alle, die unter uns entschlafen sind, im Glauben, dass es den Seelen, für die das Gebet dargebracht wird, großen Nutzen bringt, während das heilige und ehrfurchtgebietende Opfer daliegt.`, translation: 'eigene Übersetzung (nach NPNF II/7)', status: 'verbatim', note: 'Verfasserschaft umstritten (Kyrill oder Johannes von Jerusalem).' },
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Philipperbrief', ref: 'Homilie 3', quote: `Nicht vergeblich wurde von den Aposteln angeordnet, dass bei den ehrfurchtgebietenden Mysterien der Verstorbenen gedacht werde. Sie wissen, dass ihnen daraus großer Gewinn, großer Nutzen erwächst.`, translation: 'eigene Übersetzung (nach NPNF I/13)', status: 'verbatim' },
      { kind: 'sonstiges', work: 'Grabinschrift des Aberkios von Hierapolis (Phrygien)', year: 'um 180–200', quote: `Jeder, der dies versteht und mit mir übereinstimmt, bete für Aberkios.`, status: 'paraphrase' },
      { kind: 'liturgie', work: 'Koptische Liturgie (Basilius-Anaphora), Gedächtnis der Entschlafenen', quote: `Lass ihre Seelen ruhen im Schoß unserer heiligen Väter Abraham, Isaak und Jakob, an einem Ort des Grüns, am Wasser der Ruhe, im Paradies der Freude, aus dem Schmerz, Trauer und Seufzen geflohen sind.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Martin Luther', work: 'Vom Abendmahl Christi. Bekenntnis', year: '1528', quote: `Weil die Schrift davon nichts meldet, sei es keine Sünde, aus freier Andacht so oder ähnlich zu beten: „Lieber Gott, hat's mit der Seele solche Gestalt, dass ihr zu helfen sei, so sei ihr gnädig."`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Wir glauben nicht an ein Fegefeuer – aber wir lieben unsere Verstorbenen über den Tod hinaus, denn „wir leben oder sterben, so sind wir des Herrn" (Röm 14,8). Paulus betet für Onesiphorus, „dass er Barmherzigkeit finde beim Herrn an jenem Tag" (2 Tim 1,18). Juden beteten schon vor Christus für die Toten (2 Makk 12), und die Christen taten es von Anfang an – Tertullian bezeugt um 200 Gebete und Opfer am Todestag. Selbst Luther sagte, es sei keine Sünde zu beten: „Lieber Gott, wenn dieser Seele zu helfen ist, sei ihr gnädig."`,
  keyPoints: [
    `**Kein Fegefeuer:** Das koptische Gebet ist Ausdruck der Liebe und Bitte um Erbarmen am Jüngsten Tag, kein Freikaufen aus einem Läuterungsfeuer.`,
    `**2 Tim 1,16–18:** Paulus bittet um Barmherzigkeit für Onesiphorus „an jenem Tage".`,
    `**Jüdische Praxis:** 2 Makk 12,43–46; bis heute Kaddisch – Jesus hat sie nie verurteilt.`,
    `**Der Leib Christi bleibt eins:** Röm 14,8; 1 Kor 13,8; Offb 6,9–11.`,
    `**Frühe Kirche:** Aberkios, Tertullian, Perpetua, Kyrill von Jerusalem, Chrysostomus; Aerius wurde verurteilt.`,
    `**Reformatorische Zugeständnisse:** Calvin (altes Herkommen), Luther 1528, Apologie XXIV.`,
  ],
  voices: [
    {
      person: 'tertullian',
      role: 'als Zeuge der Praxis um 200 (mit Vorbehalt)',
      text: `Tertullian ist gerade wegen seiner Strenge ein unverdächtiger Zeuge. In „De Corona" zählt er die Opfer für die Verstorbenen an ihrem Jahrestag zu den Bräuchen, die alle Christen ohne ausdrückliche Schriftstelle aus der Überlieferung pflegen. In „De Monogamia" argumentiert er sogar *mit* dem Totengebet: Eine Witwe, die für die Seele ihres Mannes betet, ihm Erquickung erbittet und an seinem Todestag das Opfer darbringt, zeigt, dass ihre Ehe fortbesteht – darum soll sie nicht wieder heiraten.

Tertullian ist keine Lehrautorität; aber wenn selbst er das Totengebet als selbstverständlich voraussetzt, war es um 200 allgemeine Praxis.`,
    },
    {
      person: 'kyrill-jerusalem',
      role: 'als Erklärer der Liturgie',
      text: `Kyrill erklärt den Neugetauften, warum in der Liturgie für die Verstorbenen gebetet wird, und nimmt einen Einwand vorweg: Viele fragen, was es einer Seele nützt, die mit oder ohne Sünden aus dieser Welt geschieden ist, wenn man ihrer im Gebet gedenkt. Seine Antwort ist ein Bild: Wenn ein König Verbannte bestraft hätte und ihre Angehörigen ihm einen Kranz flechten und für sie bitten – würde er ihnen nicht Erleichterung gewähren? So bringen wir für die Entschlafenen nicht einen Kranz, sondern Christus dar, der für unsere Sünden geopfert wurde, und bitten den menschenliebenden Gott für sie und für uns.`,
      sources: [
        { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen', ref: '5,10', quote: `Bild vom König, dem die Angehörigen Verbannter einen Kranz darbringen; so bringen wir nicht einen Kranz, sondern den für unsere Sünden geopferten Christus dar und bitten Gott für die Entschlafenen und für uns.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger',
      text: `Chrysostomus spricht in mehreren Predigten über das Gebet für die Verstorbenen und führt es auf die Apostel zurück: Nicht umsonst haben sie angeordnet, bei den heiligen Mysterien der Entschlafenen zu gedenken. Er mahnt, die Verstorbenen nicht mit endlosem Wehklagen, sondern mit Gebet, Almosen und der Feier der Eucharistie zu ehren. Zugleich ruft er die Lebenden zur Umkehr: Das Gebet der Kirche ist eine Hilfe, kein Ersatz für ein Leben mit Gott.`,
    },
    {
      person: 'augustinus',
      role: 'als Sohn der hl. Monika (mit Vorbehalt)',
      text: `In den „Bekenntnissen" erzählt Augustinus vom Tod seiner Mutter Monika in Ostia (387). Sie bat ihre Söhne, sich um ihr Grab keine Sorgen zu machen: Man solle ihren Leib irgendwo begraben; nur um eines bitte sie – dass man ihrer am Altar des Herrn gedenke, wo immer man sei. Augustinus betet am Ende des Buches für sie und für seinen Vater und bittet seine Leser, es ebenso zu tun. Für einen nordafrikanischen Christen des 4. Jahrhunderts war das selbstverständlich. Augustinus ist ein westlicher Vater mit Vorbehalten, hier aber ein bewegender historischer Zeuge.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus', work: 'Bekenntnisse (Confessiones)', ref: 'IX,11,27; IX,13,37', year: 'um 400', quote: `Monika bittet, ihren Leib irgendwo zu begraben; nur das eine erbitte sie, dass man ihrer am Altar des Herrn gedenke, wo immer man sei. Augustinus bittet seine Leser, ihrer und seines Vaters am Altar zu gedenken.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der koptischen Eschatologie',
      text: `Papst Schenuda III. hat in der Vergleichenden Theologie sowohl die römisch-katholische Lehre vom Fegefeuer als auch die protestantische Ablehnung des Totengebets kritisiert. Die Seelen der Gerechten, so lehrt er, sind im Paradies und warten auf die Auferstehung; es gibt kein Läuterungsfeuer und keine Ablässe. Das Gebet der Kirche für die Entschlafenen ist Bitte um Gottes Erbarmen für Sünden, die sie aus Schwachheit oder Unwissenheit begangen und nicht ausdrücklich bereut haben, und Ausdruck der Gemeinschaft der Liebe. Wer bewusst in Unbußfertigkeit starb, dem hilft es nicht – darum ruft die Kirche jeden zur Umkehr, solange es „heute" heißt (Hebr 3,13).`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', quote: `Ablehnung des Fegefeuers; Gebet für die Entschlafenen als Bitte um Erbarmen für Sünden der Schwachheit und als Gemeinschaft der Liebe; keine Hilfe für bewusst Unbußfertige.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'hebr-9-27',
      objection: `„Hebr 9,27: ‚Den Menschen ist gesetzt, einmal zu sterben, danach aber das Gericht.' Nach dem Tod ist alles entschieden – Gebete sind sinnlos."`,
      objectionBy: 'Wayne Grudem',
      answer: `Der Vers sagt, dass nach dem Tod das Gericht kommt – nicht, dass man nicht beten darf. Das endgültige Gericht findet am Jüngsten Tag statt (Mt 25,31; Joh 5,28–29), und Paulus bittet für Onesiphorus genau um Erbarmen „an jenem Tage" (2 Tim 1,18). Wir beten für die im Glauben Verstorbenen um Gottes Barmherzigkeit – ohne Fegefeuer und ohne zu meinen, wir könnten ein bewusst verworfenes Heil nachträglich erzwingen.`,
      followUps: [
        {
          id: 'onesiphorus-lebte',
          objection: `„Onesiphorus lebte vielleicht noch – Paulus grüßt doch sein Haus."`,
          objectionBy: 'James White',
          answer: `Ehrlich: Das ist umstritten. Aber beachte: Paulus wünscht dem *Haus* jetzt Barmherzigkeit, *ihm selbst* aber Barmherzigkeit „an jenem Tage" – dem Tag des Gerichts –, und er grüßt in 4,19 wieder nur das Haus, nicht Onesiphorus. Das ist am natürlichsten erklärt, wenn er gestorben war; viele Ausleger, auch protestantische, sehen es so.`,
          followUps: [
            {
              id: 'ein-unsicherer-vers',
              objection: `„Selbst wenn – ein einziger unsicherer Vers begründet keine kirchliche Praxis."`,
              objectionBy: 'James White',
              answer: `Einverstanden – und er ist nicht die einzige Grundlage. Dazu kommen die jüdische Praxis vor Christus (2 Makk 12), die Jesus nie verurteilte, und das ununterbrochene Zeugnis der Kirche von Anfang an: die Aberkios-Inschrift, Tertullian, Perpetua, alle alten Liturgien. Selbst Calvin räumte ein, dass der Brauch uralt ist. Eine Praxis, die so früh, so allgemein und der Schrift nicht widersprechend ist, ist apostolische Überlieferung.`,
              sources: [
                { kind: 'gegner', author: 'Johannes Calvin', work: 'Institutio', ref: 'III,5,10', year: '1559', quote: `Calvin räumt ein, dass das Gebet für die Toten schon weit über tausend Jahre vor seiner Zeit in der Kirche üblich war, wertet es aber als Zugeständnis an menschliche Gefühle ohne Grundlage in der Schrift.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'setzt-fegefeuer-voraus',
      objection: `„Gebete für Tote setzen das Fegefeuer voraus. Genau das hat die Reformation zu Recht verworfen."`,
      objectionBy: 'Johannes Calvin / R. C. Sproul',
      answer: `Die koptische Kirche lehnt das Fegefeuer ebenfalls ab! Das Gebet für die Entschlafenen ist rund tausend Jahre älter als die ausgeformte lateinische Fegefeuerlehre, und die Ostkirchen beten bis heute ohne sie. Unser Gebet ist Liebe im einen Leib Christi und Bitte um Erbarmen am Jüngsten Tag – kein Freikaufen aus einem Läuterungsfeuer.`,
      followUps: [
        {
          id: 'wozu-beten',
          objection: `„Wozu dann beten, wenn sich am Zustand ohnehin nichts ändert?"`,
          objectionBy: 'Wayne Grudem',
          answer: `Wir beten auch „Dein Reich komme", obwohl es gewiss kommt. Gebet ist Teilnahme an Gottes Liebe, nicht ein Hebel, um ihn umzustimmen; und Gott, der außerhalb der Zeit steht, nimmt alle unsere Gebete in seine Vorsehung auf (Offb 8,3–4). Wir vertrauen unsere Verstorbenen seinem Erbarmen an, wie wir es taten, als sie lebten. Selbst Luther hielt ein solches Gebet für erlaubt: „Lieber Gott, hat's mit der Seele solche Gestalt, dass ihr zu helfen sei, so sei ihr gnädig."`,
          followUps: [
            {
              id: 'luther-spaeter-abgelehnt',
              objection: `„Luther hat das später selbst abgelehnt."`,
              objectionBy: 'lutherische Theologen',
              answer: `Luther wurde später schärfer gegen Seelenmessen und Fegefeuer – zu Recht aus unserer Sicht. Aber die Apologie des Augsburger Bekenntnisses (Art. XXIV) erklärt ausdrücklich, dass die Alten vom Gebet für die Toten sprechen und man dieses nicht verbiete; verworfen wird nur die Vorstellung, die Messe wirke für die Toten mechanisch. Das Gebet selbst ist nicht einmal nach lutherischem Bekenntnis verboten.`,
              sources: [
                { kind: 'gegner', work: 'Apologie des Augsburger Bekenntnisses', ref: 'Art. XXIV', year: '1531', quote: `Die Alten sprechen vom Gebet für die Toten, das wir nicht verbieten; verworfen wird die Anwendung des Abendmahls für die Toten „ex opere operato".`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'grosse-kluft',
      objection: `„Lk 16,26: Zwischen den Toten ist eine große Kluft befestigt. Niemand kann sie überwinden – auch kein Gebet."`,
      objectionBy: 'John MacArthur',
      answer: `Das Gleichnis zeigt die Endgültigkeit für den Unbußfertigen – darin stimmen wir überein; unser Gebet ändert nicht das Schicksal derer, die Christus bewusst verworfen haben. Wir beten für die, „die im Glauben entschlafen sind". Und das Gleichnis zeigt nebenbei, dass Verstorbene bei Bewusstsein sind und sich um die Lebenden sorgen (Lk 16,27–28) – die Gemeinschaft reicht über den Tod hinaus.`,
      followUps: [
        {
          id: 'wer-im-glauben',
          objection: `„Woher wollt ihr wissen, wer im Glauben gestorben ist?"`,
          objectionBy: 'John MacArthur',
          answer: `Wir wissen es nicht – und eben darum vertrauen wir die Verstorbenen Gottes Erbarmen an, statt über sie zu urteilen. Das Gebet maßt sich nichts an; es ist demütige Hoffnung. Die Kirche betet für alle ihre Glieder, die in ihrer Gemeinschaft entschlafen sind, und überlässt das Urteil dem, der Herzen kennt.`,
        },
      ],
    },
    {
      id: 'lebende-evangelisieren',
      objection: `„Trauer ist menschlich, aber die Toten gehören jetzt Gott. Unsere Aufgabe ist, die Lebenden zu erreichen, nicht für Tote zu beten."`,
      objectionBy: 'Wayne Grudem',
      answer: `Beides gehört zusammen: Die koptische Kirche ruft die Lebenden zur Umkehr und betet für die Entschlafenen. „Wir leben oder sterben, so sind wir des HERRN" (Röm 14,8) – der Leib Christi wird durch den Tod nicht geteilt, und „die Liebe höret nimmer auf" (1 Kor 13,8). Christen trauern nicht „wie die andern, die keine Hoffnung haben" (1 Thess 4,13) – sie trauern mit Hoffnung, und Hoffnung betet.`,
    },
    {
      id: 'makk-goetzendiener',
      objection: `„2 Makk 12 ist apokryph – und dort wird ausgerechnet für Gefallene gebetet, die heidnische Amulette trugen. Das widerspricht sogar eurer eigenen Lehre."`,
      objectionBy: 'James White',
      answer: `Die Gefallenen hatten gesündigt, waren aber für Gottes Gesetz in den Kampf gezogen; Judas betete in der Hoffnung auf die Auferstehung um ihre Vergebung. Entscheidend ist: Juden beteten vor Christus für die Toten – auch wer das Buch nicht als kanonisch annimmt, hat hier ein historisches Zeugnis. Jesus kritisierte viele Bräuche seiner Zeit (Mk 7), dieses aber nie. Und das Judentum betet bis heute im Kaddisch für seine Verstorbenen.`,
    },
  ],
  questionsToAsk: [
    `Warum bittet Paulus für Onesiphorus um Erbarmen „an jenem Tage" (2 Tim 1,18)?`,
    `Wusstest du, dass Juden vor Christus für ihre Toten beteten und Jesus das nie verurteilte?`,
    `Wenn der Tod den Leib Christi nicht trennt (Röm 8,38–39) – warum sollte die Liebe im Gebet dort enden?`,
    `Wusstest du, dass Luther ein Gebet wie „Lieber Gott, wenn dieser Seele zu helfen ist, sei ihr gnädig" für erlaubt hielt?`,
  ],
  avoid: [
    `Vom Fegefeuer sprechen oder Seelenmessen wie einen Freikauf darstellen – das ist nicht koptische Lehre.`,
    `Behaupten, Gebet könne das Schicksal eines bewusst Unbußfertigen ändern.`,
    `1 Kor 15,29 („Taufe für die Toten") als Beleg anführen – die Stelle ist dunkel und hilft nicht.`,
    `Onesiphorus als sicheren Beweis darstellen – sein Tod ist wahrscheinlich, nicht gewiss.`,
  ],
  concessions: [
    `Das NT enthält kein ausdrückliches Gebot, für Verstorbene zu beten; 2 Tim 1,18 ist ein wahrscheinlicher, kein sicherer Beleg.`,
    `Die mittelalterliche westliche Praxis (Seelenmessen gegen Geld, Ablässe für Verstorbene) hat das Totengebet verzerrt; der Protest dagegen war berechtigt.`,
  ],
  furtherReading: [
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie (Kapitel über die Entschlafenen und das Fegefeuer)', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Mystagogische Katechesen (Katechese 5)', status: 'paraphrase' },
    { kind: 'gegner', author: 'Johannes Calvin', work: 'Institutio', ref: 'III,5', year: '1559', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Totengebet', 'Entschlafene', 'Fegefeuer', 'Eschatologie', 'Liturgie'],
  related: [
    'heilige-ikonen/fuerbitte-der-heiligen',
    'sola-scriptura/deuterokanonen-keine-bibel',
    'katholizismus/fegefeuer',
    'hoelle',
  ],
};

export default claim;
