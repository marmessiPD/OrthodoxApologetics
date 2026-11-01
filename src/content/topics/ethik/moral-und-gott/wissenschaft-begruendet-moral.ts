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
                  followUps: [
                    {
                      id: 'transplantation-nur-intuition',
                      objection: `Dein Transplantations-Beispiel ist eine konstruierte Gedankenspielerei. In der echten Welt würde eine solche Praxis das Vertrauen in Ärzte zerstören und das Gesamtwohl senken. Also verbietet auch mein Maßstab sie.`,
                      objectionBy: 'Sam Harris',
                      answer: `Dann hängt das Verbot, einen Unschuldigen zu töten, nur davon ab, ob es herauskommt. Wenn absolute Geheimhaltung garantiert wäre, müsste dein Maßstab die Tötung erlauben – ja fordern. Fast jeder Mensch sieht aber, dass die Tat auch dann falsch wäre: nicht wegen der Folgen, sondern weil man einen Menschen nicht als Ersatzteillager für andere benutzen darf. Diese Würde ist keine Funktion des Gesamtwohls – sie begrenzt es.`,
                      detail: `Gedankenexperimente sind in der Ethik das, was Experimente in der Physik sind: Sie isolieren eine Variable. Hier wird gezeigt, dass unser moralisches Urteil nicht nur von Folgen abhängt, sondern von Rechten der Person. Christlich gesprochen: Jeder Mensch ist um seiner selbst willen gewollt, als Ebenbild Gottes, nicht als Mittel für den Nutzen anderer. Das ist der Kern dessen, was Kant später „Zweck an sich selbst" nannte.`,
                      questionsBack: [
                        `Wenn Geheimhaltung garantiert wäre – würdest du dann sagen, der Arzt soll den Gesunden töten?`,
                      ],
                    },
                  ],
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
          followUps: [
            {
              id: 'gut-gleich-gott-stipuliert',
              objection: `„Wasser = H₂O" wurde empirisch entdeckt. Wie entdeckst du „das Gute = Gott"? Du setzt es einfach fest. Das ist keine Entdeckung, sondern eine Definition.`,
              objectionBy: 'Erik Wielenberg',
              answer: `Theoretische Identitäten werden nicht nur durch Labore gefunden, sondern durch Erklärungskraft: Wir identifizieren Wasser mit H₂O, weil H₂O alles erklärt, was Wasser ausmacht. Ebenso fragt man: Was erfüllt am besten die Rolle des Guten – höchster Maßstab, Gegenstand der Liebe, Grund verbindlicher Pflichten, personal und unveränderlich? Ein vollkommen guter, liebender Gott erfüllt diese Rolle besser als ein abstraktes Prinzip oder ein Nervenzustand. Das ist ein Schluss auf die beste Erklärung, keine bloße Festsetzung.`,
              detail: `Robert Adams hat diese Analogie ausdrücklich gezogen: So wie die Chemie entdeckt hat, was Wasser **ist**, kann die philosophische Reflexion entdecken, was das Gute **ist** – nämlich das, was am besten die Rolle ausfüllt, die unser Begriff des Guten markiert. Das schließt nicht aus, dass Atheisten den Begriff korrekt verwenden, so wie Menschen vor der Chemie korrekt über Wasser sprachen.`,
              voices: [
                { person: 'robert-adams', role: 'als Metaethiker', text: `Adams unterscheidet zwischen der Bedeutung von „gut" (die jeder kompetente Sprecher kennt) und der Natur des Guten (die philosophisch zu entdecken ist). Seine These in *Finite and Infinite Goods*: Das Gute selbst ist Gott, und endliche Dinge sind gut, insofern sie ihm auf je eigene Weise ähneln.` },
              ],
            },
          ],
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
          followUps: [
            {
              id: 'strafe-ohne-schuld',
              objection: `Vergeltung ist ohnehin barbarisch. Wir sperren gefährliche Menschen weg, wie wir Kranke unter Quarantäne stellen – zum Schutz der Gesellschaft, nicht weil sie Strafe „verdienen". Ohne freien Willen wird das Strafrecht humaner.`,
              objectionBy: 'Sam Harris',
              answer: `Ohne Verdienst gibt es aber auch keine **Unschuld**. Wenn Strafe nur Steuerung ist, dann ist es auch zulässig, einen Unschuldigen zu bestrafen, wenn das abschreckt, oder einen Täter unbegrenzt festzuhalten, bis Experten ihn für „geheilt" erklären. Gerade der Gedanke, dass jemand nur die Strafe bekommen darf, die er verdient – nicht mehr –, schützt Menschen vor dem Staat. Wer Schuld abschafft, schafft auch diese Schutzgrenze ab.`,
              detail: `C. S. Lewis hat in seinem Aufsatz „Die humanitäre Theorie der Strafe" (1949) genau davor gewarnt: Wenn wir Verbrecher nicht mehr als Menschen behandeln, die Strafe verdienen, sondern als Patienten, die „behandelt" werden müssen, wird jede Maßnahme erlaubt, die ein Experte für heilsam hält – ohne Obergrenze, ohne Recht auf Widerspruch. Bestraft zu werden, weil man es verdient hat, heißt, als verantwortliche Person ernst genommen zu werden.`,
              voices: [
                { person: 'cs-lewis', role: 'als Kritiker der „humanitären" Strafe', text: `Lewis argumentiert, dass der Begriff des Verdienstes das einzige Bindeglied zwischen Strafe und Gerechtigkeit ist. Eine Strafe kann nur gerecht oder ungerecht sein, wenn sie verdient oder unverdient ist; eine „Heilbehandlung" kann nur erfolgreich oder erfolglos sein. Wer den Verdienst abschafft, entmündigt den Menschen und liefert ihn den Experten aus.` },
              ],
              sources: [
                { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„The Humanitarian Theory of Punishment", in: God in the Dock', year: '1949', status: 'paraphrase' },
              ],
              followUps: [
                {
                  id: 'sapolsky-determiniert',
                  objection: `Die Neurowissenschaft zeigt: Jedes Verhalten ist das Ergebnis von Genen, Hormonen, Kindheit und Umwelt – Sekunden bis Jahrmillionen vorher. Niemand verdient je Lob oder Tadel. Das zu akzeptieren, macht uns barmherziger, nicht grausamer.`,
                  objectionBy: 'Robert Sapolsky',
                  answer: `Der Wunsch nach mehr Barmherzigkeit ist gut – Christen teilen ihn: Die Rache gehört Gott (Röm 12,19), und Jesus hat die Vergebung ins Zentrum gestellt. Aber Barmherzigkeit setzt Schuld voraus: Man kann nur jemandem vergeben, der etwas getan hat. Wenn niemand etwas tut, sondern alles nur geschieht, dann gibt es weder Schuld noch Vergebung, weder Dankbarkeit noch Liebe als freie Antwort. Und auch dein Appell, wir „sollten" barmherziger werden, setzt voraus, dass wir uns entscheiden können.`,
                  detail: `Sapolsky hat in *Determined* (2023) die vielleicht konsequenteste Leugnung der Willensfreiheit aus neurowissenschaftlicher Sicht vorgelegt. Er gesteht selbst zu, dass er nicht wisse, wie man ohne den Begriff der Verantwortung leben könne. Die christliche Sicht nimmt die biologischen und biografischen Prägungen ernst – sie mildern Schuld, und Gott richtet gerecht, weil er alles weiß (1 Sam 16,7). Aber sie hält daran fest, dass der Mensch Person ist: ein Wesen, das antworten kann. Das Thema Willensfreiheit hat einen eigenen Themenblock.`,
                  sources: [
                    { kind: 'gegner', author: 'Robert M. Sapolsky', work: 'Determined: A Science of Life without Free Will', year: '2023', status: 'paraphrase' },
                    { kind: 'bibel', work: 'Römer', ref: '12,19', quote: `Rächet euch selber nicht, meine Liebsten, sondern gebet Raum dem Zorn Gottes; denn es steht geschrieben: „Die Rache ist mein; ich will vergelten, spricht der Herr."`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'religion-nur-dogma',
      objection: `Religion hat in der Moral nichts verloren. Wissenschaft ist offen und überprüfbar, Religion ist Dogma – und ihre Dogmen haben Steinigungen und Frauenunterdrückung hervorgebracht.`,
      objectionBy: 'Steven Pinker',
      answer: `Der Satz „Nur die Wissenschaft liefert gültiges Wissen über Moral" ist selbst keine wissenschaftliche Aussage – er widerlegt sich selbst. Und „Wissenschaft" hat im 20. Jahrhundert auch Eugenik und Rassenlehre hervorgebracht, als man sie ohne moralischen Maßstab anwandte. Das zeigt nicht, dass Wissenschaft schlecht ist, sondern dass sie einen Maßstab braucht, den sie nicht selbst erzeugt. Dass Religion missbraucht wurde, gebe ich zu – aber derselbe Einwand trifft jede Quelle menschlicher Werte.`,
      followUps: [
        {
          id: 'aufklaerung-humanismus-reicht',
          objection: `Die moralischen Fortschritte der Moderne – Menschenrechte, Abschaffung der Folter, Demokratie – verdanken wir der Aufklärung: Vernunft, Wissenschaft und Humanismus. Die Religion hat sich diesen Fortschritten meist widersetzt.`,
          objectionBy: 'Steven Pinker',
          answer: `Die Aufklärung hat viel geleistet, aber sie hat ihre Grundwerte nicht aus dem Nichts geschaffen. Die Idee, dass jeder Mensch – der Sklave, das behinderte Kind, der Feind – gleiche Würde hat, war in der Antike keine Selbstverständlichkeit; Aristoteles hielt manche Menschen für Sklaven von Natur. Sie kam aus der jüdisch-christlichen Überzeugung, dass jeder Mensch Gottes Ebenbild ist. Selbst Jürgen Habermas, kein Christ, nennt den egalitären Universalismus der Moderne ein unmittelbares Erbe der jüdischen Gerechtigkeits- und der christlichen Liebesethik.`,
          detail: `Der Historiker Tom Holland hat in *Herrschaft* (*Dominion*, 2019) die These ausgearbeitet, dass selbst säkulare Humanisten in einer zutiefst christlich geprägten Moral leben: Mitgefühl mit Opfern, Vorrang der Schwachen, Gleichheit aller – all das war in Rom fremd. Glen Scrivener hat dasselbe populär als „die Luft, die wir atmen" beschrieben. Ehrlich bleibt: Kirchen haben sich manchen Reformen widersetzt, und manche Aufklärer haben gegen kirchliche Machtansprüche zu Recht gekämpft. Aber der Maßstab, an dem man die Kirche damals kritisierte, war oft ihr eigenes Evangelium.`,
          voices: [
            { person: 'glen-scrivener', role: 'als Kulturapologet', text: `Scrivener argumentiert in *The Air We Breathe* (2022), dass die Werte, die moderne Westler für selbstverständlich halten – Gleichheit, Mitgefühl, Zustimmung, Wissenschaft, Freiheit, Fortschritt –, nicht universal menschlich sind, sondern aus der Geschichte des Christentums stammen. Wer sie für „einfach vernünftig" hält, vergisst, wie fremd sie den meisten Kulturen der Geschichte waren.` },
          ],
          sources: [
            { kind: 'fachliteratur', author: 'Tom Holland', work: 'Dominion: The Making of the Western Mind (dt. Herrschaft)', year: '2019', status: 'paraphrase', note: 'Holland schrieb das Buch als Nichtgläubiger.' },
            { kind: 'fachliteratur', author: 'Jürgen Habermas', work: 'Zeit der Übergänge (Suhrkamp)', ref: '„Ein Gespräch über Gott und die Welt", S. 174 f.', year: '2001', status: 'paraphrase', note: 'Habermas nennt das jüdische und das christliche Erbe – nicht das Christentum allein.' },
            { kind: 'gegner', author: 'Steven Pinker', work: 'Enlightenment Now: The Case for Reason, Science, Humanism, and Progress', year: '2018', status: 'paraphrase' },
          ],
          followUps: [
            {
              id: 'genetischer-fehlschluss-pinker',
              objection: `Woher eine Idee stammt, ist egal – das ist der genetische Fehlschluss. Selbst wenn die Menschenwürde christliche Wurzeln hat: Jetzt haben wir sie, und die Vernunft kann sie auch ohne Gott tragen.`,
              objectionBy: 'Steven Pinker',
              answer: `Mir geht es nicht um die Herkunft, sondern um das Fundament: Kann die Idee ohne ihre Voraussetzung stehen? Ausgerechnet Nietzsche hat davor gewarnt: Wer den christlichen Glauben aufgibt, zieht sich damit das Recht auf die christliche Moral unter den Füßen weg. Er hielt die Engländer, die ohne Gott an der christlichen Moral festhielten, für inkonsequent. Ein Haus kann eine Weile stehen, wenn man das Fundament entfernt – aber man sollte nicht behaupten, es brauche keines.`,
              detail: `Nietzsche schreibt in der *Götzen-Dämmerung* („Streifzüge eines Unzeitgemässen" 5) über George Eliot: Man sei den christlichen Gott los und glaube nun umso mehr, die christliche Moral festhalten zu müssen – das sei englische Folgerichtigkeit, die Nietzsche verspottet. Die christliche Moral sei ein System, ein Ganzes; breche man den Glauben an Gott heraus, zerbreche man das Ganze. Christen und Nietzsche sind sich in dieser Analyse einig – sie ziehen nur entgegengesetzte Schlüsse.`,
              sources: [
                { kind: 'gegner', author: 'Friedrich Nietzsche', work: 'Götzen-Dämmerung', ref: '„Streifzüge eines Unzeitgemässen" 5', year: '1889', quote: `Wenn man den christlichen Glauben aufgibt, zieht man sich damit das Recht zur christlichen Moral unter den Füßen weg.`, status: 'paraphrase' },
              ],
            },
          ],
        },
      ],
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
