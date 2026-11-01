import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'tradition-menschenlehre',
  title: `„Tradition ist Menschenlehre (Mk 7,8)."`,
  proponents: [
    { name: 'John MacArthur', role: 'Pastor der Grace Community Church, Präsident des Master\'s Seminary', work: 'Predigten zu Mk 7 / Mt 15; MacArthur Study Bible' },
    { name: 'James R. White', role: 'Reformierter Baptist, Alpha and Omega Ministries', work: 'The Roman Catholic Controversy (1996)' },
    { name: 'Wayne Grudem', role: 'Systematischer Theologe, Phoenix Seminary', work: 'Systematic Theology (1994), Kap. zur Genügsamkeit der Schrift' },
    { name: 'Confessio Augustana', role: 'Lutherisches Grundbekenntnis (1530)', work: 'Art. XV „Von Kirchenordnungen"' },
  ],
  steelman: `Jesu schärfste Worte galten nicht Huren und Zöllnern, sondern den Hütern religiöser Überlieferung: „Ihr verlasset Gottes Gebot und haltet der Menschen Aufsätze … und hebt auf Gottes Wort durch eure Aufsätze" (Mk 7,8.13). Paulus warnt: „Sehet zu, daß euch niemand beraube durch die Philosophie und lose Verführung nach der Menschen Lehre" (Kol 2,8), und verurteilt Satzungen wie „Rühre das nicht an, koste das nicht" (Kol 2,21). Die Geschichte bestätigt das Muster: Fromme Bräuche wachsen, werden zur Pflicht, dann zum Dogma – und verdecken am Ende die freie Gnade. Fastenregeln, Priestergewänder, Weihrauch, Heiligenfeste und Ikonen sehen verdächtig nach genau dem aus, was Jesus bei den Pharisäern verwarf: Menschengebote, die als heilsnotwendig ausgegeben werden. Die Augsburger Konfession hat das 1530 klar benannt: Alle Satzungen, von Menschen gemacht, um Gott zu versöhnen und Gnade zu verdienen, sind dem Evangelium entgegen. Darum gilt: Was nicht in der Schrift steht, ist im Zweifel Menschenlehre.`,
  biblical: {
    summary: `Mk 7 verurteilt nicht „Tradition" an sich, sondern die *Überlieferung der Ältesten* (rituelle Händewaschung, Korban-Regel), die Gottes Gebot **aufhebt**. Jesus selbst lebte in jüdischen Überlieferungen, die nicht in der Tora stehen (Synagogenbesuch „nach seiner Gewohnheit", Lk 4,16; Fest der Tempelweihe, Joh 10,22), und anerkannte die Lehrautorität auf „Moses Stuhl" (Mt 23,2–3). Paulus verwirft Menschensatzungen „nicht nach Christus" (Kol 2,8), gebietet aber zugleich, die **apostolische** Überlieferung festzuhalten (1 Kor 11,2; 2 Thess 2,15; 3,6). Entscheidend ist also die Quelle: von Menschen oder von Christus durch die Apostel.`,
    detail: `**Der Kontext von Mk 7:** Die Pharisäer werfen den Jüngern vor, mit ungewaschenen Händen zu essen – nicht aus Hygiene, sondern nach der „Überlieferung der Ältesten" (*paradosis tōn presbyterōn*, 7,3.5). Jesus antwortet mit dem Beispiel des **Korban**: Wer seinen Besitz als „Opfergabe" erklärte, durfte damit die Eltern nicht mehr unterstützen – eine Überlieferung, die das vierte Gebot faktisch außer Kraft setzte (7,10–13). Der Vorwurf lautet: Ihr hebt Gottes Wort auf (*akyrountes*). Das Kriterium ist also der **Widerspruch zu Gottes Gebot**, nicht die Tatsache der Überlieferung.

**Jesus und die Überlieferung:**
- Er besucht die Synagoge „nach seiner Gewohnheit" (Lk 4,16) – die Synagoge ist eine nachexilische Einrichtung ohne Gebot der Tora.
- Er feiert das Fest der Tempelweihe (Chanukka, Joh 10,22–23), das auf die Makkabäerzeit zurückgeht (1 Makk 4,59) – eine Überlieferung, kein Torafest.
- Er feiert das Passah mit den überlieferten Elementen (Kelche, Lobgesang Mt 26,30), die die Tora nicht vorschreibt.
- Er sagt: „Auf Moses Stuhl sitzen die Schriftgelehrten … Alles nun, was sie euch sagen, daß ihr halten sollt, das haltet und tut's; aber nach ihren Werken sollt ihr nicht tun" (Mt 23,2–3).

**Paulus und die Überlieferung:** Dieselben Fachbegriffe, mit denen das rabbinische Judentum Überlieferung beschreibt – *paralambanein* (empfangen) und *paradidonai* (weitergeben) –, verwendet Paulus für das Evangelium selbst (1 Kor 15,3) und für die Eucharistie (1 Kor 11,23). Das Evangelium *ist* zuerst Überlieferung. In Kol 2,8 nennt er den Maßstab: „nach der Menschen Lehre … und nicht nach Christo". Apostolische Überlieferung ist gerade *nach Christus*.`,
    sources: [
      { kind: 'bibel', work: 'Markus', ref: '7,8–13', quote: `Ihr verlasset Gottes Gebot und haltet der Menschen Aufsätze … Mose hat gesagt: „Du sollst deinen Vater und deine Mutter ehren" … Ihr aber lehrt: Wenn einer spricht zum Vater oder zur Mutter: „Korban", das ist: „Es ist Gott gegeben, was dir sollte von mir zu Nutz kommen", der tut wohl … und hebt auf Gottes Wort durch eure Aufsätze, die ihr aufgesetzt habt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '23,2–3', quote: `Auf Moses Stuhl sitzen die Schriftgelehrten und Pharisäer. Alles nun, was sie euch sagen, daß ihr halten sollt, das haltet und tut's; aber nach ihren Werken sollt ihr nicht tun: sie sagen's wohl, und tun's nicht.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Johannes', ref: '10,22–23', quote: `Es war aber Kirchweihe zu Jerusalem und war Winter. Und Jesus wandelte im Tempel in der Halle Salomos.`, translation: 'Luther 1912', status: 'verbatim', note: 'Das Fest der Tempelweihe (Chanukka) geht auf 1 Makk 4,59 zurück – keine Toravorschrift.' },
      { kind: 'bibel', work: 'Kolosser', ref: '2,8', quote: `Sehet zu, daß euch niemand beraube durch die Philosophie und lose Verführung nach der Menschen Lehre und nach der Welt Satzungen, und nicht nach Christo.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '2. Thessalonicher', ref: '3,6', quote: `Wir gebieten euch aber, liebe Brüder, in dem Namen unsers HERRN Jesu Christi, daß ihr euch entziehet von jedem Bruder, der da unordentlich wandelt und nicht nach der Satzung, die er von uns empfangen hat.`, translation: 'Luther 1912', status: 'verbatim', note: 'Griechisch: paradosis – Überlieferung.' },
      { kind: 'bibel', work: '1. Korinther', ref: '15,3', quote: `Denn ich habe euch zuvörderst gegeben, was ich empfangen habe: daß Christus gestorben sei für unsre Sünden nach der Schrift …`, translation: 'Luther 1912', status: 'verbatim', note: 'paredōka … parelabon – die Fachsprache der Überlieferung.' },
    ],
  },
  church: {
    summary: `Die koptisch-orthodoxe Kirche unterscheidet klar zwischen der **Heiligen Überlieferung**, die von Christus durch die Apostel kommt und mit der Schrift übereinstimmt, und **menschlichen Gewohnheiten**, die sich ändern dürfen oder verworfen werden müssen, wenn sie Gottes Gebot widersprechen. Die Kriterien der Väter: Übereinstimmung mit der Schrift, apostolischer Ursprung, Allgemeinheit in der ganzen Kirche und Ausrichtung auf Christus.`,
    detail: `Papst Schenuda III. hat die Unterscheidung oft eingeschärft: Was Jesus in Mk 7 verurteilt, verurteilt auch die Kirche. Eine „Tradition", die Gottes Gebot aufhebt, ist keine apostolische Überlieferung, sondern Menschensatzung. Zugleich warnt er davor, aus Mk 7 abzuleiten, alles Nichtgeschriebene sei verdächtig – dann müsste man auch den Sonntag, den Kanon und die Kindertaufe verwerfen.

**Die Kriterien der Väter:**
1. **Schriftgemäßheit:** Echte Überlieferung widerspricht der Schrift nie (Basilius, Irenäus).
2. **Apostolizität:** Sie geht auf die Apostel zurück und ist in den von ihnen gegründeten Kirchen bezeugt (Irenäus, Adv. Haer. III,3).
3. **Katholizität:** „Was überall, immer und von allen geglaubt wurde" (Vinzenz von Lérins, Commonitorium 2,6).
4. **Christozentrik:** Sie führt zu Christus hin, nicht von ihm weg (Kol 2,8).

Metropolit Kallistos Ware formuliert es so: Nicht alles, was aus der Vergangenheit überkommen ist, hat gleiches Gewicht; es gibt die eine Heilige Tradition und viele menschliche Traditionen, die man prüfen muss.`,
    sources: [
      { kind: 'kirchenvater', author: 'Tertullian', work: 'Über den Kranz des Soldaten (De Corona)', ref: '4', year: 'um 211', quote: `Wenn du für diese und andere Ordnungen eine ausdrückliche Schriftvorschrift verlangst, wirst du keine finden. Die Überlieferung wird dir als ihre Urheberin, die Gewohnheit als ihre Bestätigerin und der Glaube als ihr Bewahrer vorgehalten werden.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim', note: 'Tertullian wird apologetisch zitiert; er schloss sich später dem Montanismus an.' },
      { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,6', year: '434', quote: `Was überall, was immer, was von allen geglaubt worden ist.`, original: `quod ubique, quod semper, quod ab omnibus creditum est`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', quote: `Die Überlieferung, die der Schrift widerspricht, verwirft die Kirche; die apostolische Überlieferung aber stimmt mit der Schrift überein und erklärt sie.`, status: 'paraphrase' },
      { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963 (überarb. 1993)', quote: `Unterscheidung zwischen der einen Heiligen Tradition und den vielen menschlichen „traditions", die nicht alle gleichen Wert haben und kritisch geprüft werden müssen.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `In Mk 7 verurteilt Jesus nicht jede Überlieferung, sondern Menschensatzungen, die Gottes Gebot aufheben – wie die Korban-Regel, mit der man sich um die Versorgung der Eltern drückte. Jesus selbst besuchte die Synagoge und feierte das Fest der Tempelweihe, beides Überlieferungen ohne Torabefehl. Und Paulus befiehlt ausdrücklich, die apostolischen Überlieferungen festzuhalten (2 Thess 2,15). Der Maßstab ist: Kommt es von Christus durch die Apostel – oder von Menschen gegen Gottes Wort?`,
  keyPoints: [
    `**Kontext von Mk 7:** Händewaschung und Korban – Überlieferungen, die Gottes Gebot *aufheben*. Das Kriterium ist der Widerspruch zu Gottes Wort.`,
    `**Jesu eigene Praxis:** Synagoge (Lk 4,16), Fest der Tempelweihe (Joh 10,22), Passah-Bräuche – er lebte in Überlieferungen, die nicht in der Tora stehen.`,
    `**Zwei Arten von Überlieferung:** „nach der Menschen Lehre" vs. „nach Christus" (Kol 2,8). Paulus verwirft die eine und gebietet die andere (2 Thess 2,15; 3,6).`,
    `**Das Evangelium war zuerst Überlieferung:** 1 Kor 15,3 und 11,23 verwenden die Fachbegriffe des Empfangens und Weitergebens.`,
    `**Die Kirche hat Kriterien:** Schriftgemäßheit, apostolischer Ursprung, Allgemeinheit, Christusbezug – damit verwirft auch die koptische Kirche spätere Zusätze wie Ablass oder Fegefeuer.`,
  ],
  voices: [
    {
      person: 'tertullian',
      role: 'als früher Zeuge kirchlicher Gewohnheit (mit Vorbehalt)',
      text: `Tertullian beschreibt um 211 eine Reihe von Bräuchen, die alle Christen pflegten, obwohl kein Bibelvers sie anordnete: das dreimalige Untertauchen bei der Taufe, das Empfangen der Eucharistie vor Tagesanbruch, Opfer für die Verstorbenen an ihrem Gedenktag, das Kreuzzeichen auf der Stirn bei jedem Schritt des Alltags. Seine Schlussfolgerung ist nüchtern: Für diese Ordnungen gibt es keine ausdrückliche Schriftstelle; ihre Urheberin ist die Überlieferung, die Gewohnheit bestätigt sie, der Glaube bewahrt sie.

Wichtig: Tertullian ist hier kein Lehrer, sondern **Zeuge** – er beschreibt, was die Kirche um 200 tatsächlich tat.`,
      sources: [
        { kind: 'kirchenvater', author: 'Tertullian', work: 'De Corona', ref: '3', quote: `Bei jedem Schritt und jeder Bewegung, beim Ein- und Ausgehen, beim Anziehen der Kleider und Schuhe, beim Baden, bei Tisch, beim Anzünden der Lampen, beim Liegen und Sitzen, bei allen Verrichtungen des täglichen Lebens bezeichnen wir die Stirn mit dem Zeichen.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
      ],
    },
    {
      person: 'chrysostomus',
      role: 'als Prediger über Mt 15 / Mk 7',
      text: `Chrysostomus legt die Szene so aus: Der Herr tadelt nicht, dass es Ordnungen gibt, sondern dass die Pharisäer die äußere Reinheit der Hände über die Reinheit des Herzens stellten und mit ihren Satzungen das Gebot der Elternehre umgingen. Die eigentliche Unreinheit kommt aus dem Herzen (Mk 7,20–23).

Derselbe Chrysostomus folgert aus 2 Thess 2,15, die Apostel hätten vieles auch ungeschrieben überliefert, und die Überlieferung der Kirche sei glaubwürdig. Für ihn ist das kein Widerspruch: Die eine Überlieferung führt zu Gott, die andere von ihm weg.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Homilien zum Matthäusevangelium', ref: 'Homilie 51 (zu Mt 15)', quote: `Christus tadelt die Pharisäer, weil sie um ihrer Überlieferung willen Gottes Gebot übertraten und äußere Reinheit über die Reinheit der Seele stellten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'shenouda-iii',
      role: 'als Lehrer der Vergleichenden Theologie',
      text: `Papst Schenuda III. dreht das Argument um: Wer „Tradition ist Menschenlehre" konsequent anwendet, müsste den Sonntag als Gottesdiensttag (die Bibel befiehlt nirgends die Verlegung vom Sabbat), die Kindertaufe (für die meisten Reformatoren selbstverständlich) und vor allem die Liste der biblischen Bücher verwerfen. Niemand tut das – also unterscheidet in Wahrheit jeder zwischen guter und schlechter Überlieferung. Die Frage ist nur, nach welchem Maßstab: nach dem der Apostel und Väter oder nach dem eigenen Geschmack.`,
      sources: [
        { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', quote: `Auch Protestanten halten Überlieferungen, die nicht ausdrücklich in der Schrift stehen – den Sonntag und den Kanon der Schrift.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'tadros-malaty',
      role: 'als patristischer Ausleger des Markusevangeliums',
      text: `Vater Tadros Malaty liest Mk 7 mit den Vätern als Ruf zur **inneren** Reinheit: Der Herr will nicht, dass der Gottesdienst zur bloßen äußeren Form erstarrt. Gerade deshalb sei die Stelle eine Mahnung an *jede* Gemeinschaft – auch an Orthodoxe –, die heiligen Ordnungen nicht mechanisch, sondern mit reinem Herzen zu vollziehen. Die Ordnungen der Kirche sind Gefäße der Gnade, keine Ersatzleistungen für Liebe und Umkehr.`,
      sources: [
        { kind: 'koptisch', author: 'Tadros Y. Malaty', work: 'Patristischer Kommentar zur Heiligen Schrift (zu Mk 7)', quote: `Die Stelle ruft zur inneren Reinheit des Herzens; die Gefahr der bloßen Äußerlichkeit betrifft alle Gläubigen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kallistos-ware',
      role: 'als orthodoxer Theologe im Gespräch mit dem Westen',
      text: `Ware warnt die Orthodoxen selbst vor einem falschen Traditionsbegriff: Nicht jede Gewohnheit, die alt ist, gehört zur Heiligen Tradition. Die Tradition ist lebendig, weil sie das Leben des Heiligen Geistes in der Kirche ist – sie ist kritisch gegenüber bloßem Brauchtum. Gerade dieses Selbstverständnis macht es möglich, im Gespräch mit Protestanten ehrlich zuzugeben, wo Missstände bestanden, ohne das Ganze aufzugeben.`,
    },
  ],
  dialog: [
    {
      id: 'mk7-tradition-an-sich',
      objection: `„Jesus sagt es unmissverständlich: ‚Ihr verlasset Gottes Gebot und haltet der Menschen Aufsätze.' Überlieferung neben der Schrift ist für ihn Menschenwerk."`,
      objectionBy: 'John MacArthur',
      answer: `Lies den ganzen Abschnitt: Es geht um die rituelle Händewaschung und um die Korban-Regel, mit der man das Gebot der Elternehre umging (Mk 7,10–13). Jesus verurteilt Überlieferungen, die Gottes Wort **aufheben** – nicht Überlieferung als solche. Er selbst ging „nach seiner Gewohnheit" in die Synagoge und feierte das Fest der Tempelweihe, beides ohne Torabefehl.`,
      questionsBack: [
        `Welches Gebot Gottes hebt die Kindertaufe, das Kreuzzeichen oder das Fasten am Freitag auf?`,
        `War Jesu Synagogenbesuch auch „Menschenlehre"?`,
      ],
      followUps: [
        {
          id: 'mose-stuhl',
          objection: `„Mt 23,2–3 heißt nur: Tut, was sie aus der Tora vorlesen. Jesus anerkennt keine Lehrautorität der Tradition."`,
          objectionBy: 'James White',
          answer: `Der Text sagt „alles, was sie euch sagen" – und „Moses Stuhl" selbst ist keine Toravorschrift, sondern eine überlieferte Lehrinstitution der Synagoge. Jesus respektiert das Lehramt, obwohl dessen Träger heuchlerisch waren („nach ihren Werken sollt ihr nicht tun"). Die Auslegung ist unter Exegeten umstritten, aber eines zeigt die Stelle sicher: Jesus kennt legitime, nicht in der Tora begründete Lehrautorität.`,
          followUps: [
            {
              id: 'dann-pharisaeer-halten',
              objection: `„Dann müsstet ihr konsequent auch die Traditionen der Pharisäer halten!"`,
              objectionBy: 'James White',
              answer: `Nein, denn mit dem Neuen Bund ging die Lehrvollmacht auf die Apostel über: „Wer euch höret, der höret mich" (Lk 10,16). An die Stelle von Moses Stuhl tritt die apostolische Überlieferung – und die gebietet Paulus festzuhalten (2 Thess 2,15). Das Muster bleibt: Gott wirkt durch eine lehrende Gemeinschaft mit Überlieferung, nicht durch isolierte Einzelleser.`,
              sources: [
                { kind: 'bibel', work: 'Lukas', ref: '10,16', quote: `Wer euch höret, der höret mich; und wer euch verachtet, der verachtet mich; wer aber mich verachtet, der verachtet den, der mich gesandt hat.`, translation: 'Luther 1912', status: 'verbatim' },
              ],
            },
          ],
        },
        {
          id: 'toleriert-nicht-verbindlich',
          objection: `„Synagoge und Chanukka zeigen nur, dass Jesus Traditionen tolerierte – nicht, dass sie verbindlich sind."`,
          objectionBy: 'Wayne Grudem',
          answer: `Genau das ist die orthodoxe Unterscheidung: Nicht jede Überlieferung hat dasselbe Gewicht. Aber dann ist der pauschale Satz „Tradition ist Menschenlehre" erledigt. Und für die **apostolische** Überlieferung gilt mehr als Duldung: Paulus befiehlt „im Namen unseres Herrn Jesus Christus", sich von jedem zu trennen, der nicht nach der empfangenen Überlieferung lebt (2 Thess 3,6). Das ist Verbindlichkeit.`,
        },
      ],
    },
    {
      id: 'kol-2-8',
      objection: `„Kol 2,8 warnt vor ‚Philosophie und loser Verführung nach der Menschen Lehre'. Paulus beschreibt genau eure angehäuften Traditionen."`,
      objectionBy: 'Wayne Grudem / John MacArthur',
      answer: `Paulus nennt im selben Vers das Kriterium: „nach der Menschen Lehre und nach der Welt Satzungen, **und nicht nach Christo**." Die Frage ist die Herkunft. Derselbe Paulus lobt die Korinther, weil sie die Überlieferungen festhalten, die er ihnen gab (1 Kor 11,2). In Kolossä ging es um eine Mischung aus Engelverehrung, kosmischen Mächten und Speisetabus (Kol 2,16–23) – nicht um die Ordnungen, die die Apostel selbst den Kirchen gaben.`,
      followUps: [
        {
          id: 'fasten-ruehre-nicht-an',
          objection: `„Eure Fastenregeln sind doch genau das: ‚Rühre das nicht an, koste das nicht, taste das nicht an' (Kol 2,21)."`,
          objectionBy: 'John MacArthur',
          answer: `Nein. Die Irrlehrer in Kolossä hielten bestimmte Speisen für unrein, weil sie den „Elementen der Welt" unterworfen seien. Die koptische Kirche hält keine Speise für unrein – an Festtagen isst man Fleisch, und Paulus' Warnung vor denen, die „gebieten, Speisen zu meiden, die Gott geschaffen hat" (1 Tim 4,3–4), gilt auch für uns. Fasten ist freiwillige Selbstzucht, die Jesus voraussetzt: „Wenn ihr fastet …" (Mt 6,16) und „alsdann werden sie fasten" (Mt 9,15).`,
          sources: [
            { kind: 'bibel', work: '1. Timotheus', ref: '4,3–4', quote: `… und gebieten, zu meiden die Speisen, die Gott geschaffen hat, zu nehmen mit Danksagung, den Gläubigen und denen, die die Wahrheit erkennen. Denn alle Kreatur Gottes ist gut, und nichts verwerflich, das mit Danksagung empfangen wird.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Matthäus', ref: '9,15', quote: `Es wird aber die Zeit kommen, daß der Bräutigam von ihnen genommen wird; alsdann werden sie fasten.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'pflicht-gesetzlichkeit',
              objection: `„Aber ihr macht das Fasten zur Pflicht mit festen Tagen. Das ist Gesetzlichkeit."`,
              objectionBy: 'John MacArthur',
              answer: `Feste Fastentage sind so alt wie die Kirche: Die Didache (um 100) ordnet Mittwoch und Freitag an. Eine Familie hat feste Essenszeiten, ohne dass das Liebe ersetzt; so gibt die Kirche einen gemeinsamen Rhythmus. Kranke, Schwangere, Kinder und Reisende erhalten vom Beichtvater Erleichterung – der Sabbat ist um des Menschen willen da. Fasten ist kein Verdienst, sondern Arznei. (Ausführlich im Claim „Fasten ist Gesetzlichkeit".)`,
              sources: [
                { kind: 'kirchenvater', work: 'Didache (Lehre der zwölf Apostel)', ref: '8,1', year: 'um 100', quote: `Eure Fasten sollen nicht mit den Heuchlern sein; denn sie fasten am zweiten und fünften Tag der Woche. Ihr aber sollt am vierten Tag und am Rüsttag fasten.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Vierter Tag = Mittwoch, Rüsttag = Freitag – bis heute koptische Praxis.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'schneeball',
      objection: `„Tradition wächst wie ein Schneeball: Aus frommen Bräuchen wurden Fegefeuer, Ablass, Papstunfehlbarkeit und unbefleckte Empfängnis. Das beweist, dass Tradition korrumpiert – nur die Schrift schützt davor."`,
      objectionBy: 'James White / Gavin Ortlund',
      answer: `Interessant: Alle deine Beispiele lehnt auch die koptische Kirche ab – Fegefeuer, Ablass, Unfehlbarkeit des Papstes, unbefleckte Empfängnis Mariens im römischen Sinn. Warum? Weil sie das Kriterium der Väter nicht erfüllen: Sie wurden nicht „überall, immer und von allen" geglaubt. Die Gefahr der Wucherung ist real – aber das Gegenmittel ist der Konsens der Alten Kirche, nicht der Einzelne mit seiner Bibel, der dann eigene Neuerungen schafft.`,
      followUps: [
        {
          id: 'ikonen-spaet',
          objection: `„Aber ihr habt eure eigenen Zusätze – Ikonen etwa sind eine Neuerung des 4. bis 6. Jahrhunderts."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Christliche Bilder sind älter: Die Hauskirche von Dura-Europos am Euphrat (vor 256 zerstört) hatte Wandmalereien mit dem Guten Hirten, der Heilung des Gelähmten und den Frauen am Grab; die römischen Katakomben zeigen Christus- und Heiligenbilder aus dem 3. Jahrhundert. Und schon die Synagoge desselben Ortes war voller biblischer Bilder. (Ausführlich im Claim „Ikonen sind Götzenbilder".)`,
          followUps: [
            {
              id: 'elvira',
              objection: `„Die Synode von Elvira (um 306) verbot ausdrücklich Bilder in Kirchen (Kanon 36)."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Ehrlich: Ja, das steht dort. Aber Elvira war eine kleine spanische Lokalsynode mit auffallend strengen Kanones; die Deutung ist umstritten (Schutz vor Schändung in der Verfolgung? Verbot, Gott selbst darzustellen?). Vor allem zeigt der Kanon, dass es damals bereits Bilder in Kirchen *gab* – sonst hätte man sie nicht verbieten müssen. Eine Lokalsynode ist kein Konsens der Kirche.`,
              sources: [
                { kind: 'konzil', work: 'Synode von Elvira', ref: 'Kanon 36', year: 'um 306', quote: `Es wurde beschlossen, dass in der Kirche keine Bilder sein sollen, damit nicht das, was verehrt und angebetet wird, auf die Wände gemalt werde.`, original: `Placuit picturas in ecclesia esse non debere, ne quod colitur et adoratur in parietibus depingatur.`, translation: 'eigene Übersetzung', status: 'verbatim' },
              ],
            },
          ],
        },
        {
          id: 'wer-entscheidet-konsens',
          objection: `„Wer entscheidet denn, was ‚immer, überall und von allen' geglaubt wurde? Auch das ist Auslegung – ihr seid nicht besser dran."`,
          objectionBy: 'Gavin Ortlund',
          answer: `Es braucht Urteilskraft, gewiss. Aber das Kriterium ist **öffentlich und historisch nachprüfbar** – Liturgien, Väter, Synoden, Inschriften kann jeder lesen. Privatauslegung dagegen hat keinen äußeren Prüfstein. Und auch Protestanten benutzen dieses Kriterium, wenn sie die Dreieinigkeit gegen Unitarier verteidigen oder (wie Lutheraner) die Kindertaufe gegen Baptisten.`,
        },
      ],
    },
    {
      id: 'gal-1-14',
      objection: `„Paulus war ‚über die Maßen eifrig für die väterlichen Überlieferungen' – bevor Christus ihn davon befreite (Gal 1,14). Tradition ist das, wovon das Evangelium befreit."`,
      objectionBy: 'John MacArthur',
      answer: `Paulus meint die pharisäischen Überlieferungen, mit denen er die Kirche verfolgte. Aber in denselben Briefen gibt er selbst Überlieferung weiter: „Ich habe euch zuvörderst gegeben, was ich empfangen habe" (1 Kor 15,3) – das Evangelium selbst! Und über das Herrenmahl: „Ich habe es von dem HERRN empfangen, das ich euch gegeben habe" (1 Kor 11,23). Das Evangelium befreit nicht von Überlieferung, sondern *ist* die Überlieferung, die von Christus kommt.`,
      followUps: [
        {
          id: 'evangelium-steht-in-schrift',
          objection: `„1 Kor 15 ist das Evangelium, das jetzt in der Schrift steht. Das zeigt nur, dass die Überlieferung in der Schrift aufgegangen ist."`,
          objectionBy: 'James White',
          answer: `Es zeigt zuerst, dass Überlieferung und Schrift keine Gegensätze sind, sondern dasselbe apostolische Erbe in zwei Gestalten. Aber Paulus sagt in 1 Kor 11,34 auch: „Das andere will ich ordnen, wenn ich komme." Es gab also apostolische Anordnungen zum Gottesdienst, die er mündlich gab und die in keinem Brief stehen.`,
          sources: [
            { kind: 'bibel', work: '1. Korinther', ref: '11,34', quote: `Hungert aber jemand, der esse daheim, auf daß ihr nicht zum Gericht zusammenkommet. Das andere will ich ordnen, wenn ich komme.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'spekulation-was-geordnet',
              objection: `„Woher willst du wissen, was Paulus dann ‚geordnet' hat? Das ist reine Spekulation."`,
              objectionBy: 'James White',
              answer: `Wir wissen es aus der Praxis der Kirchen, die die Apostel gegründet haben: Die Didache (um 100) enthält eucharistische Gebete und Ordnungen, Justin (um 150) beschreibt den Sonntagsgottesdienst mit Lesungen, Predigt, Fürbitten, Darbringung von Brot und Wein und dem „Amen" des Volkes, und Clemens von Rom schreibt um 96 ausgerechnet nach Korinth über die geordnete Liturgie und die von den Aposteln eingesetzten Ämter. Das ist keine Spekulation, sondern historische Kontinuität.`,
              sources: [
                { kind: 'kirchenvater', author: 'Justin der Märtyrer', work: '1. Apologie', ref: '67', year: 'um 155', quote: `An dem Tag, den man Sonntag nennt, kommen alle, die in Städten oder auf dem Land wohnen, an einem Ort zusammen, und es werden die Erinnerungen der Apostel oder die Schriften der Propheten vorgelesen, solange es die Zeit erlaubt.`, translation: 'eigene Übersetzung (nach ANF)', status: 'verbatim' },
                { kind: 'kirchenvater', author: 'Clemens von Rom', work: '1. Clemensbrief', ref: '40,1–2', year: 'um 96', quote: `Wir müssen alles der Ordnung gemäß tun, was der Herr zu bestimmten Zeiten zu vollziehen befohlen hat: die Opfer und gottesdienstlichen Handlungen nicht planlos oder ungeordnet, sondern zu festgesetzten Zeiten und Stunden.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'vaeter-proto-protestanten',
      objection: `„Eure eigenen Väter waren auf unserer Seite: Athanasius schreibt, die heiligen, gottgehauchten Schriften genügen zur Verkündigung der Wahrheit. Kyrill von Jerusalem sagt seinen Täuflingen: Glaubt mir nicht, wenn ich es nicht aus der Schrift beweise. Das ist Sola Scriptura im 4. Jahrhundert."`,
      objectionBy: 'James White / Gavin Ortlund',
      answer: `Beide Zitate sind echt – und die Orthodoxie unterschreibt sie: Die Schrift enthält den ganzen rettenden Glauben, und kein Lehrer darf etwas gegen sie lehren. Aber lies weiter: Derselbe Athanasius beruft sich gegen die Arianer auf „die Überlieferung, Lehre und den Glauben der katholischen Kirche von Anfang an, die der Herr gab, die Apostel verkündeten und die Väter bewahrten". Und derselbe Kyrill übergibt seinen Täuflingen das Glaubensbekenntnis zum Auswendiglernen – „nicht auf Papier, sondern ins Herz" – und führt sie danach in die Mysterien ein. Für die Väter waren Schrift und Überlieferung kein Entweder-oder.`,
      detail: `Protestantische Patristiker zitieren gern Athanasius, *Contra Gentes* 1, und Kyrill von Jerusalem, *Katechesen* 4,17. Beide Stellen betonen die **materiale Suffizienz** der Schrift: Alles, was zum Heil nötig ist, steht in ihr. Das bestreitet die koptische Kirche nicht.

Sola Scriptura behauptet aber mehr: dass die Schrift die **einzige unfehlbare Norm** ist und von jedem Gläubigen ohne verbindliche kirchliche Auslegung hinreichend klar verstanden werden kann (formale Suffizienz). Genau das vertreten die Väter nicht. Athanasius widerlegt die Arianer, die ebenfalls die Schrift zitierten, mit dem **„Skopos"** (Grundsinn) der Schrift, wie ihn die Kirche bekennt, und mit dem Glauben „von Anfang an" (*An Serapion* 1,28). Kyrill erklärt das Glaubensbekenntnis als Zusammenfassung der Schrift, die man im Gedächtnis bewahren soll (*Katechesen* 5,12) – also eine von der Kirche überlieferte Leseregel.

Die Väter-Zitate beweisen also, was wir ohnehin glauben: Die Tradition fügt der Schrift keinen fremden Inhalt hinzu, sondern ist ihre authentische Auslegung in der Kirche.`,
      voices: [
        {
          person: 'athanasius',
          role: 'als Verteidiger von Nizäa gegen schriftzitierende Arianer',
          text: `Athanasius hält die Schrift für vollkommen ausreichend zur Verkündigung der Wahrheit – und erlebt zugleich, dass die Arianer mit Bibelversen wie Spr 8,22 oder Joh 14,28 argumentieren. Seine Antwort ist nicht „noch mehr Verse", sondern der Grundsinn (Skopos) der ganzen Schrift, wie ihn die Kirche von den Aposteln her bewahrt. Wer diesen Skopos verlässt, liest die richtigen Worte im falschen Sinn.`,
          sources: [
            { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Reden gegen die Arianer (Contra Arianos)', ref: 'III,28–29', quote: `Der Skopos und Grundzug der Heiligen Schrift ist ein doppelter Bericht über den Erlöser: dass er immer Gott war und der Sohn ist – und dass er später um unseretwillen Fleisch annahm. Wer dies beachtet, wird nicht in die Irre gehen.`, status: 'paraphrase' },
          ],
        },
        {
          person: 'kyrill-jerusalem',
          role: 'als Katechet der Jerusalemer Kirche',
          text: `Kyrill verlangt, dass jede Glaubensaussage aus der Schrift erwiesen wird – und überreicht im selben Atemzug das Glaubensbekenntnis der Kirche als Summe der Schrift, die die Täuflinge auswendig lernen und im Herzen bewahren sollen. Für ihn ist das kein Widerspruch: Die Kirche überliefert, was die Schrift lehrt, und schützt so den Laien vor willkürlicher Auslegung.`,
          sources: [
            { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '5,12', year: 'um 350', quote: `Das Glaubensbekenntnis wurde nicht nach menschlichem Gutdünken zusammengestellt, sondern das Wichtigste aus der ganzen Schrift zusammengefasst; bewahrt es, indem ihr es nicht auf Papier schreibt, sondern ins Herz einprägt.`, status: 'paraphrase' },
          ],
        },
      ],
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Gegen die Heiden (Contra Gentes)', ref: '1', quote: `Die heiligen und gottgehauchten Schriften genügen zwar zur Verkündigung der Wahrheit; doch gibt es auch Schriften seliger Lehrer, die zu ihrem Verständnis hinführen.`, status: 'paraphrase', note: 'Beachte den zweiten Halbsatz: Athanasius verweist selbst auf die Lehrer der Kirche als Auslegungshilfe.' },
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Briefe an Serapion', ref: '1,28', quote: `Betrachten wir die Überlieferung, die Lehre und den Glauben der katholischen Kirche von Anfang an, die der Herr gab, die Apostel verkündeten und die Väter bewahrten; auf sie ist die Kirche gegründet.`, status: 'paraphrase' },
        { kind: 'kirchenvater', author: 'Kyrill von Jerusalem', work: 'Katechesen', ref: '4,17', quote: `Glaube mir nicht einfach, wenn ich dir dies sage, es sei denn, du erhältst den Beweis des Verkündeten aus den göttlichen Schriften.`, status: 'paraphrase' },
      ],
      questionsBack: [
        `Wenn Athanasius Sola Scriptura lehrte – warum beruft er sich dann gegen die Arianer auf den Glauben der Kirche „von Anfang an"?`,
        `Hätten die Arianer Kyrills Satz „beweise es aus der Schrift" nicht ebenso unterschrieben?`,
      ],
      followUps: [
        {
          id: 'materiale-suffizienz-reicht',
          objection: `„Dann sind wir uns doch einig: Alles Heilsnotwendige steht in der Schrift. Wozu braucht ihr dann noch die Tradition als Autorität? Sie fügt ja angeblich nichts hinzu."`,
          objectionBy: 'James White',
          answer: `Weil die Streitfrage nie war, *ob* alles in der Schrift steht, sondern **wer sie verbindlich auslegt**. Arius, Nestorius und die Gnostiker hatten dieselben Texte wie die Kirche. Die Tradition ist kein zweiter Inhalt neben der Bibel, sondern die von den Aposteln her gelebte Lesart der Bibel – sozusagen ihr „Hausrecht". Ohne sie bleibt nur die Mehrheit der Exegeten oder das eigene Urteil – und dann haben wir die heutige Zersplitterung.`,
          detail: `Georges Florovsky formulierte es so: Die Tradition ist keine zusätzliche Quelle, sondern das ständige Zeugnis des Heiligen Geistes in der Kirche; die Schrift wurde der Kirche gegeben und kann nur in ihr recht verstanden werden. Auch reformierte Theologen wie Keith Mathison (*The Shape of Sola Scriptura*) bestreiten das „Solo Scriptura" des Einzelnen und betonen die *regula fidei* – und geben damit zu, dass ein Auslegungsrahmen nötig ist.

Der Unterschied liegt also nicht im **Inhalt**, sondern im **Ort** der Auslegung: Für die Orthodoxie ist dieser Ort die Kirche mit ihrer ununterbrochenen Glaubens- und Gebetspraxis, für den Protestantismus letztlich das Gewissen des Einzelnen vor dem Text.`,
          voices: [
            {
              person: 'florovsky',
              role: 'als orthodoxer Patristiker',
              text: `Florovsky beschreibt die Tradition nicht als Archiv neben der Bibel, sondern als lebendige Kontinuität des Geistes in der Kirche. Die Schrift ist das Buch der Kirche; außerhalb der kirchlichen Erfahrung wird sie zu einem Steinbruch für beliebige Systeme. Darum ist „zurück zu den Vätern" für ihn nicht Archäologie, sondern Treue zum Geist, der die Schrift eingegeben hat.`,
              sources: [
                { kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition: An Eastern Orthodox View', year: '1972', quote: `Die Schrift gehört der Kirche; Tradition ist das Zeugnis des Geistes und die rechte Auslegung der Schrift, nicht eine zweite, unabhängige Quelle.`, status: 'paraphrase' },
              ],
            },
          ],
          sources: [
            { kind: 'gegner', author: 'Keith A. Mathison', work: 'The Shape of Sola Scriptura', year: '2001', quote: `Unterscheidung zwischen reformatorischem „Sola Scriptura" (Schrift als höchste Norm innerhalb der kirchlichen Glaubensregel) und modernem individualistischem „Solo Scriptura".`, status: 'paraphrase', note: 'Reformierter Autor – sein Zugeständnis zeigt, dass auch Protestanten einen kirchlichen Auslegungsrahmen brauchen.' },
          ],
          followUps: [
            {
              id: 'basilius-nur-braeuche',
              objection: `„Euer Kronzeuge Basilius nennt als ‚ungeschriebene Überlieferungen' nur Bräuche: nach Osten beten, das Kreuzzeichen, dreimaliges Untertauchen, die Segnung des Wassers. Das sind liturgische Gewohnheiten, keine Lehren. Die ‚Tradition' ist dogmatisch leer."`,
              objectionBy: 'Gavin Ortlund',
              answer: `Basilius nennt diese Bräuche gerade, um eine **Lehre** zu beweisen: die Gottheit des Heiligen Geistes. Die Art, wie die Kirche betet und tauft, trägt den Glauben – „das Gesetz des Betens ist das Gesetz des Glaubens". Und bemerkenswert: Die koptische Kirche hält bis heute jeden einzelnen dieser Bräuche – Kreuzzeichen, Gebet nach Osten, Epiklese, Segnung von Wasser und Öl, dreimaliges Untertauchen, Absage an den Satan. Basilius warnt, wer diese Überlieferungen als unwichtig verwirft, beschädige das Evangelium in seinem Kern.`,
              detail: `In *Über den Heiligen Geist* 27,66 unterscheidet Basilius zwischen dem, was in der Schrift geschrieben steht, und dem, was „im Geheimnis" von den Aposteln überliefert wurde – beides habe „dieselbe Kraft für die Frömmigkeit". Sein Ziel ist die Doxologie „mit dem Geist": Die gottesdienstliche Praxis der Kirche, den Geist gemeinsam mit Vater und Sohn anzubeten, belegt, dass der Geist Gott ist – lange bevor das Konzil von Konstantinopel (381) es formulierte.

Das zeigt: Liturgie ist nicht dogmatisch leer, sondern **gelebtes Dogma**. Wer etwa die Taufe nicht mehr als Wiedergeburt feiert, verliert nach einigen Generationen auch die Lehre von der Taufwiedergeburt – die Geschichte des Protestantismus bestätigt das.`,
              voices: [
                {
                  person: 'basilius',
                  role: 'als Verteidiger der Gottheit des Heiligen Geistes',
                  text: `Basilius argumentiert, dass niemand die ungeschriebenen Überlieferungen verachten kann, ohne das Evangelium selbst zu verkürzen: Woher hätten wir sonst das Kreuzzeichen, das Gebet nach Osten, die Worte der Epiklese oder das dreimalige Untertauchen? Diese Praxis der ganzen Kirche bezeugt, dass der Geist zusammen mit Vater und Sohn angebetet wird – und damit seine Gottheit.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Über den Heiligen Geist (De Spiritu Sancto)', ref: '27,66', year: 'um 375', quote: `Von den in der Kirche bewahrten Lehren und Verkündigungen haben wir die einen aus der schriftlichen Unterweisung, die anderen aus der Überlieferung der Apostel im Geheimnis empfangen; beide haben dieselbe Kraft für die Frömmigkeit.`, status: 'paraphrase' },
                  ],
                },
              ],
              questionsBack: [
                `Wenn die Taufpraxis „nur ein Brauch" ist – warum streiten Baptisten und Lutheraner seit 500 Jahren über ihren Lehrgehalt?`,
              ],
              followUps: [
                {
                  id: 'alt-ist-nicht-apostolisch',
                  objection: `„Das ist ein Zirkel: Basilius beweist die Lehre aus dem Brauch, und der Brauch gilt, weil er alt ist. Alt ist aber nicht apostolisch. Wie prüfst du, ob ein Brauch wirklich von den Aposteln kommt?"`,
                  objectionBy: 'James White',
                  answer: `Mit einem öffentlichen, historischen Test: Was Kirchen gemeinsam haben, die sich schon im 5. Jahrhundert getrennt haben – Kopten, Syrer, Armenier, Äthiopier, Byzantiner und Lateiner –, muss älter sein als ihre Trennung. Alle kennen sieben heilige Handlungen, die Epiklese, das Gebet für die Entschlafenen, das Kreuzzeichen, die Kindertaufe. Dazu kommen Schriftgemäßheit und frühe Bezeugung. Das ist kein Zirkel, sondern derselbe Weg, auf dem du selbst den NT-Kanon als apostolisch annimmst.`,
                  detail: `Vinzenz von Lérins (um 434) formulierte die Regel: festhalten, was „überall, immer und von allen" geglaubt wurde – Universalität, Altertum, Übereinstimmung. Dabei räumt er ein, dass es Lehrentwicklung im Sinn von Entfaltung gibt, nicht aber Veränderung.

Ehrliches Zugeständnis: Nicht jeder alte Brauch ist Dogma, und die koptische Kirche unterscheidet zwischen der einen Heiligen Tradition und vielen kirchlichen Gewohnheiten, die sich ändern dürfen (etwa die Länge mancher Fastenzeiten oder Gottesdienstsprachen). Aber gerade diese Unterscheidung ist mit historischen Mitteln möglich – während Sola Scriptura für den Kanon selbst keine Antwort aus der Schrift hat.`,
                  voices: [
                    {
                      person: 'vinzenz-lerin',
                      role: 'als Formulierer des altkirchlichen Traditionskriteriums',
                      text: `Vinzenz fragt, wie man bei gleicher Bibel Wahrheit von Häresie unterscheidet – denn die Häretiker zitieren die Schrift eifrig. Seine Antwort: Die Schrift wird nach der Auslegung der katholischen Kirche gelesen, geprüft an Universalität, Altertum und Übereinstimmung. Fortschritt im Verständnis ist erlaubt, solange es Wachstum desselben Glaubens ist, wie ein Kind zum Mann heranwächst.`,
                      sources: [
                        { kind: 'kirchenvater', author: 'Vinzenz von Lérins', work: 'Commonitorium', ref: '2,5–6', year: 'um 434', quote: `In der katholischen Kirche ist sehr darauf zu achten, dass wir festhalten, was überall, was immer, was von allen geglaubt worden ist.`, status: 'paraphrase' },
                      ],
                    },
                    {
                      person: 'pelikan',
                      role: 'als Dogmenhistoriker',
                      text: `Pelikan hat in seiner Dogmengeschichte gezeigt, dass Lehre in der Alten Kirche wesentlich in Gebet und Liturgie überliefert wurde und dass Kontinuität historisch nachprüfbar ist. Seine Unterscheidung „Tradition ist der lebendige Glaube der Toten, Traditionalismus der tote Glaube der Lebenden" hilft, echte Überlieferung von bloßer Gewohnheit zu trennen.`,
                      sources: [
                        { kind: 'fachliteratur', author: 'Jaroslav Pelikan', work: 'The Vindication of Tradition', year: '1984', quote: `Tradition ist der lebendige Glaube der Toten; Traditionalismus ist der tote Glaube der Lebenden.`, original: `Tradition is the living faith of the dead; traditionalism is the dead faith of the living.`, translation: 'eigene Übersetzung', status: 'verbatim' },
                      ],
                    },
                  ],
                  questionsBack: [
                    `Woher weißt du, dass der Hebräerbrief apostolisch ist – aus dem Text selbst oder aus der Rezeption der alten Kirchen?`,
                    `Wie erklärst du, dass Kirchen, die seit 451 getrennt sind und einander nichts abgeschaut haben, in Sakramenten und Liturgie übereinstimmen?`,
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  questionsToAsk: [
    `Welches konkrete Gebot Gottes hebt die Kindertaufe, das Kreuzzeichen oder das Freitagsfasten auf – so wie die Korban-Regel das vierte Gebot aufhob?`,
    `Ist der Sonntag als Gottesdiensttag für dich „Menschenlehre"? Wo befiehlt die Schrift die Verlegung vom Sabbat?`,
    `Paulus sagt „haltet an den Überlieferungen" (2 Thess 2,15). Welche Überlieferungen meint er – und hältst du sie?`,
    `Wenn Jesus das Fest der Tempelweihe feierte, das in keinem Torabuch geboten ist – war das Menschenlehre?`,
  ],
  avoid: [
    `Mk 7 einfach überspringen. Die Stelle ist stark und muss im Kontext erklärt werden – Korban und Händewaschung.`,
    `Jede kirchliche Gewohnheit als „apostolisch" verteidigen. Es gibt lokale und zeitbedingte Bräuche; ehrlich unterscheiden.`,
    `Mit dem Argument „Ihr habt auch Traditionen" aufhören. Es ist richtig, aber erst überzeugend, wenn du das Kriterium (apostolisch, schriftgemäß, allgemein) nennst.`,
  ],
  concessions: [
    `Die Warnung Jesu gilt auch für Orthodoxe: Fromme Formen können zur bloßen Äußerlichkeit erstarren. Die Väter und koptischen Lehrer (z. B. Tadros Malaty) haben das selbst immer wieder angemahnt.`,
    `Im spätmittelalterlichen Westen gab es Wucherungen (Ablasshandel, Verdienstdenken), gegen die die Reformatoren mit Recht protestierten – die koptische Kirche hat diese Praktiken nie gekannt.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Kallistos Ware', work: 'The Orthodox Church', year: '1963 (überarb. 1993)', status: 'paraphrase', note: 'Kapitel über die Heilige Tradition.' },
    { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vergleichende Theologie', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Georges Florovsky', work: 'Bible, Church, Tradition: An Eastern Orthodox View', year: '1972', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Tradition', 'Markus 7', 'Menschensatzungen', 'Kolosser 2'],
  related: [
    'sola-scriptura/nur-die-bibel',
    'sola-scriptura/kirche-war-verdorben',
    'fasten-liturgie/fasten-gesetzlichkeit',
    'heilige-ikonen/ikonen-goetzenbilder',
    'katholizismus/fegefeuer',
  ],
};

export default claim;
