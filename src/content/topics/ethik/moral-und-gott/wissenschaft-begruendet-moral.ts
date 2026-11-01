import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'wissenschaft-begruendet-moral',
  title: `„Die Wissenschaft kann Moral begründen (Sam Harris)."`,
  proponents: [
    { name: 'Sam Harris', role: 'Neurowissenschaftler und Autor', work: 'The Moral Landscape: How Science Can Determine Human Values (2010)' },
    { name: 'Michael Shermer', role: 'Wissenschaftspublizist', work: 'The Moral Arc (2015)' },
    { name: 'Steven Pinker', role: 'Kognitionspsychologe, Harvard', work: 'Enlightenment Now (2018)' },
    { name: 'Patricia Churchland', role: 'Neurophilosophin, UC San Diego', work: 'Braintrust: What Neuroscience Tells Us about Morality (2011)' },
  ],
  steelman: `Moralische Fragen sind Fragen nach dem Wohlergehen bewusster Wesen – nach Leid und Gedeihen. Und Wohlergehen hängt von Tatsachen ab: von Zuständen des Gehirns, von Ernährung, Sicherheit, Beziehungen, Bildung. Also gibt es auf moralische Fragen richtige und falsche Antworten, die die Wissenschaft im Prinzip ermitteln kann. Man stelle sich eine „moralische Landschaft" vor, mit Gipfeln des Gedeihens und Tälern des Elends: Eine Welt, in der alle maximal leiden, ist objektiv schlecht – darüber braucht man nicht zu diskutieren. Humes angebliche Kluft zwischen Sein und Sollen ist ein Scheinproblem: Auch die Medizin setzt voraus, dass Gesundheit gut ist, ohne dass jemand eine metaphysische Begründung verlangt. Religion hat hier nichts beizutragen, außer Dogmen, die oft genug selbst Leid verursachen (Steinigungen, Frauenunterdrückung). Wer die Gesundheitsfrage der Medizin überlässt, sollte die Moralfrage der Wissenschaft vom Wohlergehen überlassen.`,
  biblical: {
    summary: `Die Bibel schätzt Erkenntnis über die Welt (Spr 25,2; Ps 111,2) und das Wohl des Menschen hoch: Gottes Gebote sind „uns zugut" gegeben (Dtn 10,13). Aber sie unterscheidet zwischen dem, was **ist**, und dem, was **sein soll**. Das Gute ist nicht einfach das, was uns gedeihen lässt, sondern das, was dem Willen und Wesen Gottes entspricht – und das schließt manchmal Opfer ein, die das eigene Wohlergehen übersteigen: „Niemand hat größere Liebe denn die, dass er sein Leben lässt für seine Freunde" (Joh 15,13). Die Wissenschaft kann wertvolle Mittel zum Guten zeigen; das Ziel und den Maßstab kann sie nicht liefern.`,
    detail: `**Gebote zum Wohl – aber nicht identisch mit Wohlergehen.** Dtn 10,12–13 verbindet Gottes Gebote mit dem Wohl Israels. Christen haben daher kein Problem damit, dass Moral und Gedeihen zusammenhängen. Der Unterschied zu Harris: Für die Bibel gründet das Gute in Gott, und das Wohlergehen folgt daraus; für Harris *ist* das Gute nichts anderes als Wohlergehen.

**Gerechtigkeit über Nutzen.** Die Propheten verurteilen Ungerechtigkeit auch dann, wenn sie dem Wohl der Mehrheit dient (1 Kön 21: Nabots Weinberg). Kaiphas' Logik „es ist besser, ein Mensch sterbe für das Volk" (Joh 11,50) ist der Inbegriff einer Wohlfahrtsrechnung – und führt zum Justizmord an Jesus.`,
    sources: [
      { kind: 'bibel', work: 'Deuteronomium', ref: '10,12–13', quote: `…daß du haltest die Gebote des HERRN und seine Rechte, die ich dir heute gebiete, auf daß dir's wohl gehe.`, translation: 'nach Luther 1912', status: 'paraphrase' },
      { kind: 'bibel', work: 'Johannes', ref: '11,50', quote: `Es ist uns besser, ein Mensch sterbe für das Volk, denn daß das ganze Volk verderbe.`, translation: 'Luther 1912', status: 'verbatim', note: 'Kaiphas – das Beispiel einer reinen Nutzenrechnung.' },
      { kind: 'bibel', work: 'Johannes', ref: '15,13', quote: `Niemand hat größere Liebe denn die, daß er sein Leben läßt für seine Freunde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Kirche hat Naturerkenntnis immer als Gabe gesehen – die alexandrinische Katechetenschule pflegte Philosophie, Medizin und Naturkunde. Zugleich lehren die Väter, dass der Mensch nicht nur leibliches Wohl, sondern sein letztes Ziel in der Gemeinschaft mit Gott findet. Ein Glück, das von Gott abgeschnitten ist, bleibt für die orthodoxe Tradition unvollständig, und wahre Tugend kann das eigene Leben hingeben. Die koptische Kirche, die in ihrer Geschichte unzählige Märtyrer hervorgebracht hat, bezeugt, dass es Güter gibt, die höher stehen als das eigene Wohlergehen.`,
    sources: [
      { kind: 'kirchenvater', author: 'Augustinus', work: 'Confessiones', ref: 'I,1', year: 'um 400', quote: `Du hast uns zu dir hin geschaffen, und unruhig ist unser Herz, bis es ruht in dir.`, original: 'fecisti nos ad te et inquietum est cor nostrum, donec requiescat in te', translation: 'eigene Übersetzung', status: 'verbatim' },
    ],
  },
  opposingView: {
    summary: `Harris' Buch wurde in der Fachphilosophie überwiegend kritisch aufgenommen – nicht nur von Theisten. Kritiker bemängeln, dass Harris die eigentliche philosophische Frage (Warum ist Wohlergehen der Maßstab des Guten?) per Definition beantworte und die Diskussion der Metaethik kaum zur Kenntnis nehme. Unbestritten ist, dass empirische Forschung (Psychologie, Medizin, Ökonomie) wichtige Fakten zu moralischen Fragen beiträgt – etwa, welche Maßnahmen Armut verringern. Strittig ist allein, ob sie den moralischen Maßstab selbst begründen kann.`,
    sources: [
      { kind: 'gegner', author: 'Sam Harris', work: 'The Moral Landscape', year: '2010', quote: `Werte seien Tatsachen über das Wohlergehen bewusster Wesen; wie die Medizin Gesundheit voraussetze, könne die Wissenschaft Wohlergehen als Maßstab voraussetzen.`, status: 'paraphrase' },
      { kind: 'sonstiges', work: 'Debatte William Lane Craig vs. Sam Harris: „Is Good from God?", University of Notre Dame', year: '2011', quote: `Craig argumentierte, Harris setze „gut" schlicht mit „Wohlergehen" gleich und begründe damit weder objektive Werte noch Pflichten.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Die Wissenschaft kann uns sagen, was Menschen gedeihen lässt – und das ist wertvoll. Aber sie kann nicht sagen, *warum* wir das Wohlergehen aller fördern *sollen*, besonders wenn es uns etwas kostet. Harris setzt das einfach voraus: Er definiert „gut" als „Wohlergehen" und tut dann so, als hätte er etwas bewiesen. Und wenn er gleichzeitig den freien Willen leugnet, bleibt von einem „Sollen" ohnehin nichts übrig.`,
  keyPoints: [
    `**Mittel, nicht Maßstab:** Wissenschaft zeigt, *was* Wohlergehen fördert; *dass* wir es fördern sollen, ist keine empirische Aussage.`,
    `**Definition statt Begründung:** Harris setzt „gut" = „Wohlergehen" und hat damit die Frage nur umbenannt (Craig, 2011).`,
    `**Medizin-Analogie hinkt:** Gesundheit ist ein hypothetisches Ziel („wenn du gesund sein willst…"); Moral beansprucht unbedingte Pflicht – auch gegen mein eigenes Wohl.`,
    `**Wohlergehen wessen?** Warum unparteiisch das Wohl *aller* statt meines eigenen? Die Wissenschaft liefert dafür kein Argument.`,
    `**Gerechtigkeit ist nicht Nutzen:** Ein Justizmord, der der Mehrheit nützt (Joh 11,50), bleibt Unrecht.`,
    `**Ohne freien Willen kein Sollen:** Harris leugnet die Willensfreiheit – aber „Sollen" setzt „Können" voraus.`,
  ],
  voices: [
    {
      person: 'craig',
      role: 'als Harris\' Debattengegner',
      text: `In der Debatte an der University of Notre Dame (2011) zeigte Craig, dass Harris zwei Fragen vermengt: die semantische (Was bedeutet „gut"?) und die ontologische (Was macht etwas gut?). Harris definiere „gut" einfach als „was das Wohlergehen bewusster Wesen fördert" – damit werde der Satz „Wohlergehen ist gut" zur Tautologie, und die „Wissenschaft der Moral" messe nur noch Wohlergehen. Außerdem begründe Wohlergehen keine *Pflichten*: Selbst wenn Gedeihen gut ist, folgt daraus nicht, dass ich verpflichtet bin, das Gedeihen anderer auf eigene Kosten zu fördern. Schließlich wies Craig darauf hin, dass Harris' Determinismus jedes „Sollen" aufhebt.`,
      sources: [{ kind: 'sonstiges', work: 'Debatte William Lane Craig vs. Sam Harris: „Is Good from God?", University of Notre Dame', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'lennox',
      role: 'als Mathematiker und Kritiker des Szientismus',
      text: `Lennox antwortet in *Gunning for God* (2011) auf die Neuen Atheisten mit einem Bild: Die Wissenschaft kann dir sagen, dass Strychnin tödlich ist, aber nicht, ob du es deiner Großmutter in den Tee geben sollst. Wissenschaft beschreibt, wie die Welt ist; ob und wofür wir dieses Wissen gebrauchen sollen, liegt außerhalb ihrer Methode. Wer behauptet, nur die Wissenschaft liefere Wissen, vertritt einen Satz, den die Wissenschaft selbst nicht beweisen kann – der Szientismus widerlegt sich selbst.`,
      sources: [{ kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God: Why the New Atheists Are Missing the Target', year: '2011', status: 'paraphrase' }],
    },
    {
      person: 'cs-lewis',
      role: 'als Kritiker einer naturalistischen Werttheorie',
      text: `In *The Abolition of Man* (1943) warnte Lewis vor einer Erziehung, die Werturteile als bloße Gefühlsäußerungen behandelt. Wenn Werte keine objektive Wirklichkeit haben, sondern nur Zustände in uns sind, dann werden am Ende die „Konditionierer" – diejenigen, die über die Technik der Gefühlsformung verfügen – bestimmen, was die nächste Generation für gut hält. Lewis sah darin keine Befreiung, sondern die „Abschaffung des Menschen": Wer die Wertordnung als Naturtatsache behandelt, die man beliebig formen kann, verliert jeden Maßstab, an dem man die Former selbst messen könnte.`,
      sources: [{ kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', year: '1943', status: 'paraphrase' }],
    },
    {
      person: 'moreland',
      role: 'als Philosoph und Kritiker des Szientismus',
      text: `J. P. Moreland unterscheidet in *Scientism and Secularism* (2018) zwischen „starkem" Szientismus (nur die Naturwissenschaft liefert Wissen) und „schwachem" (die Naturwissenschaft ist die beste Wissensquelle). Beide scheitern an moralischen Fragen: Moralische Eigenschaften wie Würde, Schuld oder Gerechtigkeit sind keine messbaren physikalischen Größen. Wer Moral „naturwissenschaftlich" begründen will, muss sie entweder auf etwas Messbares reduzieren – und verliert dabei ihren verpflichtenden Charakter – oder er schmuggelt philosophische Annahmen ein, die er nicht offenlegt.`,
      sources: [{ kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Scientism and Secularism', year: '2018', status: 'paraphrase' }],
    },
  ],
  dialog: [
    {
      id: 'wohlergehen-tatsachen',
      objection: `Moral handelt vom Wohlergehen bewusster Wesen. Wohlergehen hängt von Tatsachen über Gehirne und Welt ab. Also kann die Wissenschaft moralische Fragen beantworten. Eine Welt, in der alle maximal leiden, ist objektiv schlecht – Punkt.`,
      objectionBy: 'Sam Harris',
      answer: `Die Wissenschaft kann herausfinden, was Wohlergehen fördert – einverstanden. Aber dass wir Wohlergehen fördern *sollen*, ist keine wissenschaftliche Entdeckung, sondern eine Voraussetzung, die du an den Anfang stellst. Du definierst „gut" als „Wohlergehen" – damit ist „Wohlergehen ist gut" eine Tautologie, kein Forschungsergebnis. Die eigentliche Frage – warum gibt es objektive Werte und Pflichten? – hast du nicht beantwortet, sondern umbenannt.`,
      questionsBack: [
        `Welches Experiment hat gezeigt, dass Wohlergehen der Maßstab des Guten ist?`,
        `Wenn „gut" per Definition „Wohlergehen" heißt – ist die Frage „Ist Wohlergehen gut?" dann sinnlos?`,
      ],
      followUps: [
        {
          id: 'medizin-gesundheit',
          objection: `Auch die Medizin setzt voraus, dass Gesundheit gut ist. Niemand verlangt von Ärzten eine metaphysische Begründung dafür. Warum sollte die Moral anders sein?`,
          objectionBy: 'Sam Harris',
          answer: `Weil Gesundheit ein *bedingtes* Ziel ist: „Wenn du gesund sein willst, iss weniger Zucker." Wer das nicht will, macht keinen moralischen Fehler. Moral dagegen beansprucht *unbedingte* Geltung – du sollst nicht foltern, auch wenn du es willst und es dir nützt. Und die Medizin fragt nach *meiner* Gesundheit; deine Moral verlangt, das Wohl *aller* unparteiisch zu fördern, auch auf meine Kosten. Woher kommt diese Unparteilichkeit? Nicht aus dem Gehirnscanner.`,
          followUps: [
            {
              id: 'wer-wohlergehen-ablehnt',
              objection: `Wer Wohlergehen nicht als Maßstab akzeptiert, mit dem kann man nicht vernünftig reden – so wenig wie mit jemandem, der die Logik ablehnt.`,
              objectionBy: 'Sam Harris',
              answer: `Das Problem ist nicht jemand, der Wohlergehen ablehnt, sondern der Psychopath, der *sein eigenes* Wohlergehen über das aller anderen stellt. Er ist konsequent, rational und gedeiht vielleicht sogar. Nach deiner Theorie kannst du ihm nur sagen: „Du maximierst eine andere Größe als ich." Du kannst ihm nicht sagen, dass er *objektiv im Unrecht* ist – es sei denn, es gibt eine Pflicht zur Unparteilichkeit, die die Wissenschaft nicht liefert.`,
              followUps: [
                {
                  id: 'ungerechtigkeit-schadet-immer',
                  objection: `Langfristig verringert Ungerechtigkeit immer das Gesamtwohl. Deshalb ist Gerechtigkeit im Wohlergehen schon enthalten.`,
                  objectionBy: 'Michael Shermer',
                  answer: `Das ist eine empirische Hoffnung, kein Beweis. Stell dir einen Fall vor, in dem es nicht so ist: Ein Arzt tötet heimlich einen gesunden Obdachlosen, um mit seinen Organen fünf Patienten zu retten, und niemand erfährt es je. Das Gesamtwohl steigt – und trotzdem wissen wir, dass es ein Mord ist. Das zeigt: Gerechtigkeit und Würde des Einzelnen sind nicht auf Wohlergehen reduzierbar. Kaiphas hat genau so gerechnet: „Es ist besser, ein Mensch sterbe für das Volk."`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'hume-scheinproblem',
      objection: `Humes Sein-Sollen-Kluft ist ein Scheinproblem. Jede Wissenschaft beruht auf Werten – etwa dem Wert der Wahrheit und der Logik. Moral ist nicht anders.`,
      objectionBy: 'Sam Harris',
      answer: `Gut, dass du zugibst, dass Wissenschaft auf Werten beruht, die sie selbst nicht begründet. Genau das ist der Punkt: Diese Werte müssen von woanders kommen. Auch wenn man Hume nicht folgt, braucht man ein Brückenprinzip vom Sein zum Sollen. Du lieferst es durch Definition. Aber die Frage „Ist es wirklich gut, das Wohlergehen aller zu fördern?" bleibt sinnvoll – das hat G. E. Moore die „offene Frage" genannt. Eine echte Definition würde sie sinnlos machen.`,
      followUps: [
        {
          id: 'offene-frage-gott',
          objection: `Moores „offene Frage" trifft aber auch dich: „Ist Gott gut?" ist ebenfalls eine sinnvolle Frage. Also kannst du das Gute auch nicht mit Gott gleichsetzen.`,
          objectionBy: 'Erik Wielenberg',
          answer: `Nicht jede Identität muss offensichtlich sein: „Ist Wasser H₂O?" war lange eine offene Frage und ist trotzdem eine Identität. Der Theist behauptet keine Definition, sondern eine entdeckte Identität: Das Gute gründet in Gottes Wesen. Harris könnte dasselbe für das Wohlergehen versuchen – dann muss er aber zeigen, dass Wohlergehen auch *Pflichten* erklärt. Das kann es nicht, denn eine Pflicht ist immer eine Pflicht gegenüber jemandem; Gott als Person kann das erklären.`,
        },
      ],
    },
    {
      id: 'kein-freier-wille',
      objection: `Ich halte den freien Willen für eine Illusion. Aber das ändert nichts: Wir können trotzdem herausfinden, welche Zustände besser sind, und Menschen dorthin lenken.`,
      objectionBy: 'Sam Harris',
      answer: `Es ändert alles. „Sollen" setzt „Können" voraus: Wenn niemand anders handeln kann, als er handelt, dann *soll* niemand etwas anderes tun. Dann waren die Nazis nicht schuldig, sondern bloß fehlprogrammiert – so wie ein Hurrikan nicht schuldig ist. Du kannst Verhalten steuern wie ein Ingenieur, aber du kannst niemanden moralisch tadeln. Eine „moralische Landschaft" ohne moralisch verantwortliche Wanderer ist keine Moral mehr, sondern Verhaltenstechnik.`,
      sources: [
        { kind: 'gegner', author: 'Sam Harris', work: 'Free Will', year: '2012', quote: `Der freie Wille sei eine Illusion; unsere Entscheidungen entstünden aus Ursachen, die wir weder gewählt haben noch kontrollieren.`, status: 'paraphrase' },
      ],
      followUps: [
        {
          id: 'verhalten-lenken-reicht',
          objection: `Auch ohne freien Willen können wir Menschen durch Belohnung und Strafe zu besserem Verhalten bringen. Mehr braucht die Gesellschaft nicht.`,
          objectionBy: 'Sam Harris',
          answer: `Das ist Verhaltenssteuerung, keine Moral. Wer entscheidet, was „besser" ist, und mit welchem Recht? Wenn auch die Steuernden nur tun, was ihre Gehirne verursachen, sind sie so wenig moralische Autoritäten wie die Gesteuerten. Das ist genau die Gefahr, die C. S. Lewis in *The Abolition of Man* beschrieb: Am Ende formen die „Konditionierer" die Werte der anderen – und niemand kann sie mehr an einem Maßstab messen.`,
        },
      ],
    },
    {
      id: 'religion-nur-dogma',
      objection: `Religion hat in der Moral nichts verloren. Wissenschaft ist offen und überprüfbar, Religion ist Dogma – und ihre Dogmen haben Steinigungen und Frauenunterdrückung hervorgebracht.`,
      objectionBy: 'Steven Pinker',
      answer: `Der Satz „Nur die Wissenschaft liefert gültiges Wissen über Moral" ist selbst keine wissenschaftliche Aussage – er widerlegt sich selbst. Und „Wissenschaft" hat im 20. Jahrhundert auch Eugenik und Rassenlehre hervorgebracht, als man sie ohne moralischen Maßstab anwandte. Das zeigt nicht, dass Wissenschaft schlecht ist, sondern dass sie einen Maßstab braucht, den sie nicht selbst erzeugt. Dass Religion missbraucht wurde, gebe ich zu – aber derselbe Einwand trifft jede Quelle menschlicher Werte.`,
    },
  ],
  questionsToAsk: [
    `Welches Experiment hat gezeigt, dass wir das Wohlergehen *anderer* fördern *sollen*?`,
    `Warum ist der Psychopath, der sein eigenes Gedeihen maximiert, objektiv im Unrecht?`,
    `Wenn der freie Wille eine Illusion ist – wer *soll* dann überhaupt etwas tun?`,
    `Ist der Satz „Nur die Wissenschaft liefert Wissen" selbst wissenschaftlich überprüfbar?`,
  ],
  avoid: [
    `Die Wissenschaft für moralisch irrelevant erklären. Empirische Forschung ist für viele ethische Fragen (Gesundheit, Armut) unverzichtbar.`,
    `Harris als dumm oder unehrlich darstellen – er ist ein scharfsinniger Denker; kritisiere das Argument, nicht die Person.`,
    `„Wissenschaft hat Eugenik hervorgebracht, also ist sie böse." Das ist derselbe Fehlschluss, den Kritiker gegen Religion anwenden.`,
  ],
  concessions: [
    `Wohlergehen und Leidvermeidung sind tatsächlich zentrale moralische Gesichtspunkte; auch die Bibel verbindet Gottes Gebote mit dem Wohl des Menschen.`,
    `Religiöse Gemeinschaften haben Leid verursacht, wo sie Dogmen über Barmherzigkeit stellten.`,
  ],
  furtherReading: [
    { kind: 'sonstiges', work: 'Debatte William Lane Craig vs. Sam Harris: „Is Good from God?" (Videoaufzeichnung)', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'John C. Lennox', work: 'Gunning for God', year: '2011', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'J. P. Moreland', work: 'Scientism and Secularism', year: '2018', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Abolition of Man', year: '1943', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Sam Harris', 'Szientismus', 'Wohlergehen', 'Sein-Sollen', 'Utilitarismus', 'Willensfreiheit'],
  related: [
    'moral-und-gott/gut-ohne-gott',
    'moral-und-gott/euthyphron-dilemma',
    'erkenntnistheorie/nur-wissenschaft-liefert-wissen',
    'willensfreiheit/freier-wille-illusion',
  ],
};

export default claim;
