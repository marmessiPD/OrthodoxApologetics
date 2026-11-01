import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'evidentielles-problem',
  title: `„Das Ausmaß sinnlosen Leids macht Gott unwahrscheinlich (Rowe)."`,
  proponents: [
    {
      name: 'William L. Rowe',
      role: 'Religionsphilosoph, Purdue University (1931–2015), „freundlicher Atheist"',
      work: '„The Problem of Evil and Some Varieties of Atheism", American Philosophical Quarterly 16 (1979); „Evil and Theodicy", Philosophical Topics 16 (1988)',
    },
    {
      name: 'Paul Draper',
      role: 'Religionsphilosoph, Purdue University',
      work: '„Pain and Pleasure: An Evidential Problem for Theists", Noûs 23 (1989)',
    },
    {
      name: 'Bart D. Ehrman',
      role: 'Neutestamentler, University of North Carolina; verlor seinen Glauben am Problem des Leids',
      work: 'God\'s Problem: How the Bible Fails to Answer Our Most Important Question – Why We Suffer (2008)',
    },
  ],
  steelman: `Vergessen wir den logischen Widerspruch – die Frage ist eine andere: Was ist wahrscheinlicher, angesichts der Welt, wie sie ist? William Rowe erzählt von einem Blitz, der in einem entlegenen Wald einen Brand auslöst. Ein Rehkitz wird eingeschlossen, schrecklich verbrannt und liegt tagelang in Agonie, bevor der Tod es erlöst. Kein Mensch erfährt davon, niemand lernt daraus, keine Seele reift daran. Und Rowe erinnert an ein fünfjähriges Mädchen, das vergewaltigt, geschlagen und ermordet wurde. Sein Argument: (1) Es gibt Fälle intensiven Leids, die ein allmächtiges, allwissendes Wesen hätte verhindern können, ohne dadurch ein größeres Gut zu verlieren oder ein gleich schlimmes Übel zuzulassen. (2) Ein allwissendes, vollkommen gutes Wesen würde solches Leid verhindern. (3) Also gibt es kein solches Wesen. Prämisse 1 ist nicht bewiesen, aber höchst plausibel: Wir sehen weit und breit kein Gut, das das Leiden des Rehkitzes rechtfertigen würde. Paul Draper ergänzt: Die Verteilung von Schmerz und Freude in der Natur – Schmerz dort, wo er dem Überleben dient – passt viel besser zu einer gleichgültigen Natur als zu einem liebenden Schöpfer.`,
  biblical: {
    summary: `Die Bibel behauptet nirgends, dass Menschen den Sinn jedes Leids erkennen können. Hiob erfährt nie den Grund seines Leidens; Gott antwortet ihm nicht mit einer Erklärung, sondern mit der Frage: „Wo warst du, da ich die Erde gründete?" (Hiob 38,4) – und zeigt ihm die unermessliche, auch wilde Schöpfung. Josef versteht erst nach über zwanzig Jahren, wozu sein Leid diente (Gen 50,20). Gottes Gedanken sind „nicht eure Gedanken" (Jes 55,8–9). Paulus vergleicht unser Erkennen mit einem dunklen Spiegel (1 Kor 13,12). Zugleich gibt die Schrift Gründe zur Hoffnung: Die Leiden dieser Zeit sind „der Herrlichkeit nicht wert, die an uns soll offenbart werden" (Röm 8,18). Kein Sperling fällt ohne den Vater zur Erde (Mt 10,29).`,
    detail: `- **Hiob als Modell:** Der Leser kennt den Hintergrund (Hiob 1–2), Hiob selbst nie. Die Erzählung zeigt gerade, dass hinter scheinbar sinnlosem Leid Zusammenhänge stehen können, die dem Leidenden verborgen bleiben.
- **Joh 9,1–3:** Die Jünger suchen eine Ursache in Schuld; Jesus verweist auf ein Wirken Gottes, das erst noch offenbar werden soll.
- **Mt 10,29:** Gottes Fürsorge reicht bis zum Sperling – und damit auch bis zum Rehkitz. Die Bibel sieht das Tierleid nicht als außerhalb von Gottes Wissen und Sorge.
- **Röm 8,18.28:** Nicht jedes Leid ist gut, aber Gott kann in allem zum Guten wirken; die Herrlichkeit überwiegt das Leiden unermesslich.`,
    sources: [
      { kind: 'bibel', work: 'Hiob', ref: '38,4', quote: `Wo warst du, da ich die Erde gründete? Sage an, bist du so klug!`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Jesaja', ref: '55,8–9', quote: `Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege, spricht der HERR; sondern soviel der Himmel höher ist denn die Erde, so sind auch meine Wege höher denn eure Wege und meine Gedanken denn eure Gedanken.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Römer', ref: '8,18', quote: `Denn ich halte es dafür, daß dieser Zeit Leiden der Herrlichkeit nicht wert sei, die an uns soll offenbart werden.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '10,29', quote: `Kauft man nicht zwei Sperlinge um einen Pfennig? Dennoch fällt deren keiner auf die Erde ohne euren Vater.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Korinther', ref: '13,12', quote: `Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort; dann aber von Angesicht zu Angesicht.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben nie behauptet, den Grund jedes einzelnen Leids zu kennen. Sie haben Leiden im Licht des Kreuzes, der Auferstehung und des ewigen Lebens gedeutet: Das irdische Leben ist nicht das Ganze, und das Ziel des Menschen ist nicht ungestörtes Wohlbefinden, sondern die Gemeinschaft mit Gott. Johannes Chrysostomus schrieb aus der Verbannung an die Diakonin Olympias, niemand könne dem schaden, der sich nicht selbst schadet – das wahre Übel sei allein die Sünde. Die koptische Kirche, deren Geschichte von Verfolgung geprägt ist, hat eine reiche Tradition des geduldigen Vertrauens: Papst Schenuda III. werden die vielzitierten Worte zugeschrieben: „Gott ist da – alles wird zum Guten – es wird vorübergehen."`,
    detail: `- **Chrysostomus' Schrift *Dass niemand geschädigt wird außer von sich selbst*** (um 406, aus dem Exil) entfaltet den Gedanken, dass äußeres Leid die Tugend nicht zerstören kann.
- **Die Wüstenväter** verstanden Prüfungen als Weg zur Demut und zur Nähe Gottes – nicht als Rätsel, das man lösen muss, sondern als Weg, den man geht.
- **Zu Papst Schenuda III.:** Der Wahlspruch „Rabbena mawgud – kulluh lil-cheir – mesirha tentehi" (sinngemäß: „Gott ist da – alles ist zum Guten – es wird ein Ende haben") wird ihm in koptischen Medien vielfach zugeschrieben und mit einer Predigt unter dem Titel „Gott ist da" verbunden; eine genaue Erstquelle ist nicht gesichert.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes Chrysostomus', work: 'Dass niemand geschädigt wird außer von sich selbst (Quod nemo laeditur nisi a seipso)', year: 'um 406', quote: `Wer nicht von sich selbst geschädigt wird, dem kann kein anderer schaden; das wahre Übel ist allein die Sünde.`, status: 'paraphrase' },
      { kind: 'koptisch', author: 'Papst Schenuda III.', work: 'Vielzitierter Wahlspruch (Predigten)', quote: `Gott ist da – alles ist zum Guten – es wird ein Ende haben.`, original: `ربنا موجود – كله للخير – مسيرها تنتهي`, status: 'unverified', note: 'In ägyptischen Medien vielfach als Wort Schenudas III. überliefert; eine Erstquelle (Predigt mit Datum) ließ sich per WebSearch (Nov. 2026) nicht finden.' },
    ],
  },
  opposingView: {
    summary: `Rowes Argument (1979) gilt als die klassische Formulierung des **evidentiellen** Problems. Die wichtigste Antwort ist der **skeptische Theismus**: Stephen Wykstra (1984) zeigte, dass der Schluss „Ich sehe keinen Grund, also gibt es keinen" nur gilt, wenn man vernünftigerweise erwarten dürfte, den Grund zu sehen, falls es ihn gäbe (CORNEA-Prinzip). Bei einem allwissenden Gott ist das nicht zu erwarten. Rowe selbst räumte ein, dass ein Theist, der stärkere Gründe für Gott hat als für Prämisse 1, rational den umgekehrten Schluss ziehen kann („G. E. Moore-Wende") – und nannte sich deshalb einen „freundlichen Atheisten". Die Debatte ist offen; Kritiker werfen dem skeptischen Theismus vor, er führe zu moralischer Skepsis.`,
    detail: `- **Ehrlich:** Das evidentielle Problem ist ernst; viele Philosophen halten es für das stärkste Argument gegen Gott. Es ist kein „erledigter" Einwand.
- **Gesamtevidenz:** Die Wahrscheinlichkeit Gottes hängt nicht am Übel allein. Wer das Übel abwägt, muss auch die anderen Daten abwägen: die Existenz des Universums, seine Feinabstimmung, das Bewusstsein, objektive moralische Werte, die historischen Belege für Jesu Auferstehung.
- **Draper** vergleicht Theismus mit einer „Gleichgültigkeitshypothese"; Theisten antworten, dass diese Hypothese andere Daten (Moral, Bewusstsein, Feinabstimmung) schlechter erklärt.`,
    sources: [
      { kind: 'gegner', author: 'William L. Rowe', work: 'The Problem of Evil and Some Varieties of Atheism', ref: 'American Philosophical Quarterly 16', year: '1979', quote: `Angenommen, in einem entlegenen Wald schlägt der Blitz in einen abgestorbenen Baum und löst einen Waldbrand aus. Im Feuer wird ein Rehkitz eingeschlossen, schrecklich verbrannt und liegt mehrere Tage in furchtbarer Agonie, bevor der Tod sein Leiden beendet.`, original: `Suppose in some distant forest lightning strikes a dead tree, resulting in a forest fire. In the fire a fawn is trapped, horribly burned, and lies in terrible agony for several days before death relieves its suffering.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'fachliteratur', author: 'Stephen J. Wykstra', work: 'The Humean Obstacle to Evidential Arguments from Suffering: On Avoiding the Evils of „Appearance"', ref: 'International Journal for Philosophy of Religion 16', year: '1984', quote: `Man darf aus „Ich sehe kein X" nur dann auf „Es gibt kein X" schließen, wenn es vernünftig ist anzunehmen, dass man X sehen würde, falls es existierte (CORNEA).`, status: 'paraphrase' },
      { kind: 'gegner', author: 'Paul Draper', work: 'Pain and Pleasure: An Evidential Problem for Theists', ref: 'Noûs 23', year: '1989', quote: `Die beobachtete Verteilung von Schmerz und Lust ist unter der Hypothese einer gegenüber dem Leid gleichgültigen Natur wahrscheinlicher als unter dem Theismus.`, status: 'paraphrase' },
    ],
  },
  quickAnswer: `Rowes Argument steht und fällt mit dem Schritt: „Ich sehe keinen guten Grund für dieses Leid – also gibt es keinen." Aber wenn es einen allwissenden Gott gibt, wäre es gerade zu *erwarten*, dass wir seine Gründe oft nicht sehen – so wenig wie ein Säugling versteht, warum ihm die Mutter beim Impfen Schmerz zumutet. Und ob Gott wahrscheinlich ist, entscheidet nicht das Leid allein, sondern alle Belege zusammen – auch die Existenz des Universums, die Moral und die Auferstehung Jesu. Rowe selbst hat zugegeben, dass ein Christ mit guten Gründen rational glauben kann.`,
  keyPoints: [
    `**Der „Ich-sehe-keinen"-Schluss:** Aus „Ich sehe keinen Grund" folgt „Es gibt keinen" nur, wenn ich den Grund sehen müsste, falls es ihn gäbe (Wykstras CORNEA-Prinzip).`,
    `**Die Erkenntniskluft:** Zwischen Gottes Wissen und unserem ist der Abstand größer als zwischen Eltern und Säugling. Dass wir Gottes Gründe oft nicht sehen, ist zu erwarten.`,
    `**Der Schmetterlingseffekt:** Die Folgen eines Ereignisses verzweigen sich über Jahrhunderte; niemand kann beurteilen, welche Güter an einem bestimmten Ereignis hängen.`,
    `**Gesamtevidenz:** Die Wahrscheinlichkeit Gottes muss mit allen Daten bestimmt werden – nicht mit dem Übel allein.`,
    `**Christliche Lehren ändern die Rechnung:** Das Ziel des Lebens ist Gemeinschaft mit Gott, nicht ungestörtes Glück; das Leben endet nicht mit dem Tod; Gott wird jede Träne abwischen (Röm 8,18; Offb 21,4).`,
    `**Rowes eigenes Zugeständnis:** Ein Theist, der stärkere Gründe für Gott hat als für Rowes erste Prämisse, glaubt rational („freundlicher Atheismus").`,
  ],
  argument: {
    name: 'Rowes evidentielles Argument und seine Schwachstelle',
    summary: 'Die Prämissen Rowes – und warum Prämisse 1 auf einem fragwürdigen Schluss beruht.',
    premises: [
      {
        text: `P1 (Rowe): Es gibt Fälle intensiven Leids, die ein allmächtiges, allwissendes Wesen hätte verhindern können, ohne ein größeres Gut zu verlieren oder ein gleich schlimmes Übel zuzulassen.`,
        support: `Rowe begründet P1 mit der Beobachtung, dass wir kein solches Gut erkennen. Genau hier setzt die Kritik an: Dieser Schluss ist nur gültig, wenn wir solche Güter erkennen müssten, falls es sie gäbe. Bei einem allwissenden Gott ist das nicht zu erwarten (Wykstra 1984).`,
      },
      {
        text: `P2 (Rowe): Ein allwissendes, vollkommen gutes Wesen würde jedes Leid verhindern, das es verhindern kann, ohne ein größeres Gut zu verlieren oder ein gleich schlimmes Übel zuzulassen.`,
        support: `Diese Prämisse akzeptieren auch die meisten Theisten. Der Streit dreht sich um P1.`,
      },
      {
        text: `K (Rowe): Also existiert kein allmächtiges, allwissendes, vollkommen gutes Wesen.`,
        support: `Gültig, wenn P1 und P2 wahr sind. Der Theist kann aber – so Rowe selbst – umgekehrt schließen: Wenn ich gute Gründe habe, dass Gott existiert, und P2 wahr ist, dann ist P1 falsch („G. E. Moore-Wende").`,
      },
    ],
    conclusion: `Rowes Argument ist gültig, aber seine erste Prämisse beruht auf dem unsicheren Schluss vom Nicht-Sehen auf das Nicht-Sein. Wer zusätzlich starke Gründe für Gottes Existenz hat, kann rational die erste Prämisse ablehnen. Das evidentielle Problem ist ernst, aber nicht entscheidend.`,
  },
  voices: [
    {
      person: 'wykstra',
      role: 'als Erkenntnistheoretiker des skeptischen Theismus',
      text: `Stephen Wykstra formulierte 1984 die Antwort, die die Debatte um Rowe geprägt hat: das „Prinzip des vernünftigen epistemischen Zugangs" (CORNEA). Wir dürfen aus „Es scheint, dass es kein X gibt" nur schließen, dass es kein X gibt, wenn es vernünftig ist anzunehmen, dass X für uns erkennbar wäre, falls es existierte. Wenn ich in eine Garage schaue und keinen Elefanten sehe, darf ich schließen, dass keiner da ist; wenn ich keinen Floh sehe, nicht. Die Güter, um derentwillen ein allwissender Gott Leid zulassen könnte, gleichen eher dem Floh als dem Elefanten: Bei der Kluft zwischen Gottes Weisheit und unserer wäre es überraschend, wenn wir sie stets sähen. Rowes Beobachtung, dass wir keinen Grund sehen, ist also genau das, was man erwarten würde, wenn Gott existiert.`,
      sources: [
        { kind: 'fachliteratur', author: 'Stephen J. Wykstra', work: 'The Humean Obstacle to Evidential Arguments from Suffering', year: '1984', quote: `Wenn ein allwissender Gott existiert, ist zu erwarten, dass viele seiner Gründe für das Zulassen von Leid jenseits unseres Erkenntnisvermögens liegen.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'swinburne',
      role: 'als Religionsphilosoph der Wahrscheinlichkeit',
      text: `Richard Swinburne argumentiert in *Providence and the Problem of Evil* (1998), dass viele große Güter ohne die Möglichkeit von Leid gar nicht existieren könnten: Mut setzt Gefahr voraus, Mitgefühl Leid, Geduld Widrigkeit, echte Verantwortung die Möglichkeit, anderen ernsthaft zu helfen oder zu schaden. Er betont außerdem, dass Gott das Recht hat, uns – wie Eltern ihren Kindern – für eine begrenzte Zeit Lasten zuzumuten, die einem guten Zweck dienen, wenn er uns am Ende reich entschädigt. Für Swinburne macht das Übel die Existenz Gottes nicht unwahrscheinlich, wenn man es im Rahmen aller Belege für Gott betrachtet, die er in *The Existence of God* (1979, 2. Aufl. 2004) zusammenträgt.`,
      sources: [
        { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Providence and the Problem of Evil', year: '1998', quote: `Viele der größten Güter – Mut, Mitgefühl, Verantwortung füreinander – sind ohne die Möglichkeit von Leid nicht zu haben.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'craig',
      role: 'als Philosoph und Debattierer',
      text: `William Lane Craig nennt in Debatten drei Gesichtspunkte. Erstens: Wir sind nicht in der Lage zu beurteilen, ob ein bestimmtes Übel „sinnlos" ist, weil die Folgen jedes Ereignisses sich über die Geschichte unabsehbar verzweigen – wie beim Schmetterlingseffekt. Zweitens: Bezogen auf die *Gesamtheit* der Belege für Gott (kosmologisch, teleologisch, moralisch, historisch) ist Gottes Existenz trotz des Übels wahrscheinlich. Drittens: Bestimmte christliche Lehren erhöhen die Wahrscheinlichkeit, dass Gott und Übel zusammen bestehen – etwa, dass der Sinn des Lebens nicht Glück, sondern die Erkenntnis Gottes ist, dass die Menschheit sich in Rebellion gegen Gott befindet und dass das Leben nicht mit dem Tod endet.`,
    },
    {
      person: 'stump',
      role: 'als Philosophin des Leids und der Erzählung',
      text: `Eleonore Stump zeigt in *Wandering in Darkness* (2010), dass das Problem des Leids sich nicht allein mit abstrakten Argumenten beantworten lässt. Sie liest biblische Erzählungen – Hiob, Samson, Abraham, Maria von Bethanien – und zeigt, dass es eine Art von Erkenntnis gibt, die nur in Geschichten und Beziehungen vermittelt wird. In diesen Erzählungen dient das Leid oft dazu, Menschen in eine tiefere Gemeinschaft mit Gott zu führen, die ihnen ohne das Leid verschlossen geblieben wäre. Stump betont, dass dieses Gut dem Leidenden *selbst* zugutekommen muss – Gott opfert niemanden für andere.`,
      sources: [
        { kind: 'fachliteratur', author: 'Eleonore Stump', work: 'Wandering in Darkness: Narrative and the Problem of Suffering', year: '2010', quote: `Leid kann einem Menschen zu tieferer Vereinigung mit Gott verhelfen – ein Gut, das dem Leidenden selbst zukommt und sich in Erzählungen besser zeigt als in Thesen.`, status: 'paraphrase' },
      ],
    },
  ],
  dialog: [
    {
      id: 'rehkitz-sinnlos',
      objection: `Denk an das Rehkitz im Waldbrand: tagelange Qual, kein Zeuge, keine Lehre, kein Nutzen für irgendwen. Wenn das nicht sinnlos ist, was dann? Ein guter Gott hätte es verhindert.`,
      objectionBy: 'William Rowe',
      targetsPremise: 1,
      answer: `Du sagst: „Ich sehe keinen Grund." Daraus folgt „Es gibt keinen" nur, wenn ich den Grund sehen *müsste*, falls es ihn gäbe. Bei einem allwissenden Gott ist das nicht zu erwarten – so wenig wie ein Säugling versteht, warum ihm die Mutter beim Impfen Schmerz zumutet. Dass wir Gottes Gründe in vielen Fällen nicht kennen, ist genau das, was man erwarten würde, wenn er existiert.`,
      detail: `Das ist Wykstras CORNEA-Prinzip. Wichtig ist der Ton: Man sagt damit nicht, das Leiden des Rehkitzes sei „gut", sondern nur, dass wir nicht in der Position sind zu beurteilen, ob ein allwissender Gott einen Grund haben kann. Zum Tierleid selbst siehe den eigenen Claim; dort auch die Frage, wie Tiere Schmerz erleben.`,
      questionsBack: [
        `Würdest du aus der Tatsache, dass ein Säugling den Sinn einer Impfung nicht versteht, schließen, dass sie sinnlos ist?`,
        `Wie groß ist deiner Meinung nach die Kluft zwischen dem Wissen eines allwissenden Gottes und unserem?`,
      ],
      followUps: [
        {
          id: 'keine-gruende-sichtbar',
          objection: `Wenn es Gründe gäbe, würden wir wenigstens manchmal welche sehen. Aber nach Jahrtausenden des Nachdenkens finden wir für so viel Leid überhaupt keine. Irgendwann muss man die Abwesenheit von Gründen als Beleg werten.`,
          objectionBy: 'William Rowe / Paul Draper',
          targetsPremise: 1,
          answer: `Wir sehen durchaus viele Gründe: Leid ermöglicht Mitgefühl, Mut, Reife, Demut, Solidarität, und Menschen berichten, dass sie im Leid zu Gott fanden. Für *jeden einzelnen* Fall den Grund zu sehen, ist dagegen nicht zu erwarten. Ein Schachgroßmeister macht Züge, deren Sinn ein Anfänger erst zwanzig Züge später – oder nie – erkennt. Und die Folgen jedes Ereignisses verzweigen sich über Jahrhunderte; niemand von uns überblickt sie.`,
          detail: `Craig spricht vom „Schmetterlingseffekt": Ein kleines Ereignis kann über Ketten von Folgen weitreichende Wirkungen haben. Josef verstand sein Leid erst nach über zwanzig Jahren (Gen 50,20). Der Einwand ist berechtigt, soweit er fordert, dass das Christentum *überhaupt* plausible Güter benennt – das tut es.`,
          followUps: [
            {
              id: 'moralische-laehmung',
              objection: `Dein skeptischer Theismus führt zu moralischer Lähmung: Wenn hinter jedem Leid ein verborgenes Gut stecken könnte, warum sollte ich dann ein Kind aus dem Feuer retten? Vielleicht verhindere ich ja Gottes Plan.`,
              objectionBy: 'Kritiker des skeptischen Theismus (z. B. Almeida/Oppy)',
              answer: `Nein. Meine Pflichten ergeben sich aus Gottes Gebot – „Liebe deinen Nächsten" –, nicht aus Spekulationen über Gottes verborgene Pläne. Ein Arzt hört nicht auf zu behandeln, weil Gott die Krankheit vielleicht zum Guten wenden könnte. Gottes Rolle ist eine andere als meine: Er ist Schöpfer, Richter und Auferwecker, der jedes Leid am Ende heilen kann. Ich bin Mensch, und mein Auftrag ist, zu helfen.`,
              detail: `Der Einwand ist ernst zu nehmen und wird in der Fachliteratur breit diskutiert. Die Antwort beruht auf der Unterscheidung zwischen Gottes Gründen (die wir oft nicht kennen) und unseren Pflichten (die uns offenbart sind). Gerade die Kirche, die an Gottes verborgene Vorsehung glaubt, hat Krankenhäuser gebaut und Seuchenkranke gepflegt.`,
              followUps: [
                {
                  id: 'gott-unerkennbar',
                  objection: `Wenn Gottes Gründe so weit jenseits unseres Verstehens liegen, dann kannst du auch nicht wissen, ob Gott überhaupt gut ist. Dein Skeptizismus frisst deinen Glauben.`,
                  objectionBy: 'Atheistischer Religionsphilosoph',
                  answer: `Ich bin nicht skeptisch in allem, sondern nur in einer bestimmten Frage: ob wir die Gründe für jedes einzelne Übel überblicken können. Gottes Güte erkenne ich nicht, indem ich jedes Ereignis bewerte, sondern dort, wo er sich gezeigt hat – in Jesus Christus, der Kranke heilte, Sünder annahm und für seine Feinde starb. Wer einem Menschen aus guten Gründen vertraut, kann auch dann vertrauen, wenn er eine einzelne Entscheidung nicht versteht.`,
                  detail: `Der Unterschied zwischen begrenztem und totalem Skeptizismus ist entscheidend. Ein Kind, das die Liebe seiner Mutter kennt, vertraut ihr auch, wenn sie ihm etwas Unverständliches zumutet. Die Offenbarung Gottes in Christus gibt dem Vertrauen einen Grund, den die Betrachtung der Natur allein nicht liefern könnte.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'kind-in-flint',
      objection: `Nimm nicht das Rehkitz, nimm ein fünfjähriges Mädchen, das vergewaltigt, geschlagen und ermordet wird. Welches größere Gut soll das rechtfertigen? Kein anständiger Mensch kann sich eines vorstellen.`,
      objectionBy: 'William Rowe („Evil and Theodicy", 1988)',
      targetsPremise: 1,
      answer: `Bevor ich irgendetwas erkläre: Das ist ein Grauen, das mich empört – und die Bibel teilt diese Empörung: „Wer aber ärgert dieser Geringsten einen …, dem wäre besser, daß ein Mühlstein an seinen Hals gehängt würde" (Mt 18,6). Ich behaupte nicht, dass diese Tat einem höheren Zweck diente. Sie ist das Werk eines freien Täters, den Gott richten wird. Und das Kind ist nicht verloren: Jesus sagt, die Engel der Kleinen sehen allezeit das Angesicht des Vaters (Mt 18,10). Gott wird ihm selbst ein Leben schenken, in dem dieses Grauen nicht das letzte Wort hat.`,
      detail: `Rowe hat in „Evil and Theodicy" (1988) neben dem Rehkitz einen realen Mordfall an einem fünfjährigen Mädchen angeführt. Hier ist die logische Antwort (Freiheit des Täters) nur ein Teil; entscheidend sind Gottes Gericht und die Verheißung für das Opfer. Siehe ausführlich den Claim „Das Leid unschuldiger Kinder ist durch nichts zu rechtfertigen".`,
      sources: [
        { kind: 'bibel', work: 'Matthäus', ref: '18,6.10', quote: `Wer aber ärgert dieser Geringsten einen, die an mich glauben, dem wäre besser, daß ein Mühlstein an seinen Hals gehängt würde und er ersäuft würde im Meer, da es am tiefsten ist. … Sehet zu, daß ihr nicht jemand von diesen Kleinen verachtet. Denn ich sage euch: Ihre Engel im Himmel sehen allezeit das Angesicht meines Vaters im Himmel.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'einmal-eingreifen',
          objection: `Selbst wenn der Täter frei war: Gott hätte ein einziges Mal unbemerkt eingreifen können – ein Herzinfarkt des Täters, eine zufällige Störung. Niemand hätte es gemerkt, und die Freiheit der Welt wäre nicht bedroht gewesen.`,
          objectionBy: 'William Rowe',
          targetsPremise: 1,
          answer: `Vielleicht tut Gott das unzählige Male – wir sehen nur die Fälle, in denen es nicht geschah, nie die verhinderten. Wenn Gott aber jedes schwere Unrecht unbemerkt verhinderte, gäbe es keine Welt, in der Taten wirklich zählen. Wo genau die Grenze liegt, kann ich nicht sagen – und ich gebe zu, dass das schmerzt. Aber Gott hat nicht weggeschaut: Er hat selbst als Unschuldiger gelitten, und er wird richten.`,
          detail: `Ehrlichkeit ist hier wichtiger als Brillanz: Wir kennen Gottes Gründe im Einzelfall nicht. Das ist kein Ausweichen, sondern die nüchterne Grenze unseres Wissens. Wer behauptet, er wisse genau, warum Gott ein bestimmtes Verbrechen nicht verhinderte, maßt sich Hiobs Freunde-Wissen an.`,
          followUps: [
            {
              id: 'bibel-gott-griff-ein',
              objection: `Aber der Gott der Bibel greift doch ständig ein: Er teilt das Meer, speist Tausende, weckt Tote auf. Wenn er das damals konnte und wollte – warum schweigt er heute in Auschwitz, in Darfur, im Kinderkrankenhaus? Gerade die Bibel macht sein heutiges Schweigen unerklärlich.`,
              objectionBy: 'Bart D. Ehrman (God\'s Problem, 2008)',
              answer: `Das ist Ehrmans persönlichster Einwand, und er verdient eine ehrliche Antwort. Auch in der Bibel sind Wunder die Ausnahme: Israel lag 400 Jahre in Ägypten, bevor das Meer sich teilte; die Psalmen und Hiob klagen über Gottes Schweigen; Johannes der Täufer wurde im Gefängnis enthauptet, ohne Rettung. Die Wunder Jesu sind Zeichen des kommenden Reiches, nicht die Abschaffung der jetzigen Welt. Die Bibel kennt also beides: den eingreifenden und den schweigenden Gott – und sie lehrt, ihn in beidem zu suchen.`,
              detail: `Ehrman beschreibt in *God's Problem* (2008), wie er seinen Glauben verlor, weil er die biblischen Antworten auf das Leid nicht mehr für ausreichend hielt. Er nimmt die Bibel dabei ernst – auch ihre Klage. Genau dort liegt die Antwort: Die Bibel selbst ist das Buch, das am lautesten fragt „Wie lange, HERR?" (Ps 13,2) und „Mein Gott, warum hast du mich verlassen?" (Ps 22,2; Mk 15,34). Christen müssen Gottes Schweigen nicht wegerklären; sie dürfen es mit den Psalmen vor Gott tragen.

Die koptische Kirche kennt dieses Schweigen aus ihrer eigenen Geschichte: Jahrhunderte der Verfolgung ohne spektakuläre Rettung, und doch blieb sie – weil ihr Glaube nicht auf ständigem Eingreifen ruht, sondern auf dem Kreuz und der Auferstehung.`,
              sources: [
                { kind: 'gegner', author: 'Bart D. Ehrman', work: 'God\'s Problem: How the Bible Fails to Answer Our Most Important Question – Why We Suffer', year: '2008', quote: `Ehrman schildert, wie die Frage nach dem Leid ihn vom Glauben wegführte: Die Antworten der Bibel genügten ihm angesichts des Ausmaßes an Leid nicht mehr.`, status: 'paraphrase' },
                { kind: 'bibel', work: 'Psalm', ref: '13,2', quote: `HERR, wie lange willst du mein so gar vergessen? Wie lange verbirgst du dein Antlitz vor mir?`, translation: 'Luther 1912', status: 'verbatim' },
              ],
              questionsBack: [
                `Wenn die Bibel selbst Gottes Schweigen beklagt – ist das nicht eher ein Zeichen ihrer Ehrlichkeit als ein Beweis gegen Gott?`,
              ],
              followUps: [
                {
                  id: 'willkuer-hilft-einem',
                  objection: `Dann ist dein Gott willkürlich: Den einen heilt er nach einem Gebet, den anderen lässt er sterben. Das ist ein Herrscher, der Günstlinge auswählt – schlimmer, als wenn er gar nicht eingriffe.`,
                  objectionBy: 'Bart D. Ehrman / Alex O\'Connor',
                  answer: `Am Teich Betesda lagen viele Kranke, und Jesus heilte einen (Joh 5,3–9). Das wirkt willkürlich, solange man annimmt, diese Welt sei das Ganze. Aber die Heilungen sind Vorzeichen, nicht Verteilung von Gunst: Am Ende steht die Auferstehung aller, und dann wird keiner übergangen. Und ich gebe zu: Ich weiß nicht, warum Gott in einem Fall eingreift und im anderen nicht. Willkürlich wäre er, wenn er die Übergangenen vergäße – das Evangelium sagt das Gegenteil.`,
                  detail: `Seelsorglich ist diese Frage sehr ernst, weil sie oft von Menschen kommt, die für jemanden gebetet haben, der trotzdem starb. Dann ist zuerst Mitgefühl dran. Die Kirche hat nie gelehrt, dass Heilung ein Lohn für Frömmigkeit ist; viele der größten Heiligen waren schwer krank (Paulus, 2 Kor 12,7–9; der hl. Abba Moses, Papst Kyrill VI. in seinen letzten Jahren). Siehe den Claim „Unerhörte Gebete zeigen, dass niemand zuhört".`,
                  sources: [
                    { kind: 'bibel', work: 'Johannes', ref: '5,3.5', quote: `… in welchen lagen viele Kranke, Blinde, Lahme, Dürre; die warteten, wann sich das Wasser bewegte. … Es war aber ein Mensch daselbst, achtunddreißig Jahre krank gelegen.`, translation: 'Luther 1912', status: 'verbatim' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'gleichgueltigkeitshypothese',
      objection: `Vergleich doch einfach zwei Hypothesen: Theismus und eine gegenüber unserem Wohl gleichgültige Natur. Schmerz tritt genau dort auf, wo er biologisch nützlich ist; Freude ebenso. Diese Verteilung erwartet man bei Gleichgültigkeit – nicht bei einem liebenden Gott.`,
      objectionBy: 'Paul Draper',
      answer: `Dann vergleichen wir die Hypothesen an *allen* Daten. Die Gleichgültigkeitshypothese muss auch erklären, warum es überhaupt ein Universum gibt, warum seine Naturkonstanten lebensfreundlich abgestimmt sind, warum es Bewusstsein gibt und warum wir objektive moralische Pflichten erkennen. Gerade unsere Empörung über das Leid setzt voraus, dass es wirklich *böse* ist – und in einer gleichgültigen Natur gibt es kein objektiv Böses, nur Ereignisse.`,
      detail: `C. S. Lewis beschreibt seinen eigenen Weg: Sein Argument gegen Gott war, dass das Universum so grausam und ungerecht erscheine. Aber woher hatte er die Idee von gerecht und ungerecht? Man nennt eine Linie nicht krumm, wenn man keine Vorstellung von einer geraden hat. Dass Schmerz eine biologische Warnfunktion hat, ist übrigens kein Argument gegen Gott: Menschen mit angeborener Schmerzunempfindlichkeit sind schwer gefährdet und sterben oft früh.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Mere Christianity', ref: 'Buch II, Kap. 1', year: '1952', quote: `Mein Argument gegen Gott war, dass das Universum so grausam und ungerecht schien. Aber woher hatte ich diese Vorstellung von gerecht und ungerecht? Man nennt eine Linie nicht krumm, wenn man keine Vorstellung von einer geraden Linie hat.`, original: `My argument against God was that the universe seemed so cruel and unjust. But how had I got this idea of just and unjust? A man does not call a line crooked unless he has some idea of a straight line.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'empathie-genuegt',
          objection: `Meine Empörung braucht keinen Gott. Mitgefühl ist ein evolviertes Gefühl; ich muss nicht an objektive Moral glauben, um Leid schlecht zu finden.`,
          objectionBy: 'Säkularer Ethiker',
          answer: `Dann wird aus dem „Problem des Übels" ein „Problem dessen, was mir nicht gefällt". Ein Gefühl der Abneigung ist aber kein Argument gegen einen guten Gott. Damit das Argument trägt, muss das Leid *objektiv* schlecht sein – und dann brauchst du eine Grundlage für objektive Werte, die eine gleichgültige Natur nicht liefert.`,
          detail: `Siehe den Themenblock „Moral ohne Gott?". Dieser Gedanke darf nicht als Trick gegen Leidende verwendet werden; er gehört in die philosophische Debatte.`,
          followUps: [
            {
              id: 'interne-kritik',
              objection: `Ich argumentiere intern: Ich nehme *deine* Maßstäbe von Gut und Böse und zeige, dass sie mit deinem Gott nicht zusammenpassen. Dafür brauche ich selbst keine objektive Moral.`,
              objectionBy: 'Atheistischer Religionsphilosoph',
              answer: `Das ist fair – für das logische Problem. Aber eine interne Kritik muss das *ganze* christliche Weltbild nehmen, nicht nur einen Teil: Dazu gehören die Freiheit der Geschöpfe, die Verheißung des ewigen Lebens, Gottes Gericht und die Auferstehung. Innerhalb dieses Weltbilds ist irdisches Leid, so schwer es ist, nicht das letzte Wort – Paulus nennt es „der Herrlichkeit nicht wert". Wer nur die eine Hälfte des Weltbilds nimmt, kritisiert ein Weltbild, das es nicht gibt.`,
              detail: `Das ist ein wichtiger methodischer Punkt: Der Theismus, gegen den sich das evidentielle Argument richtet, ist häufig ein „nackter Theismus" ohne Eschatologie. Der christliche Gott hat aber ein Ziel mit der Welt, das über den Tod hinausreicht.`,
            },
          ],
        },
      ],
    },
    {
      id: 'moore-wende-mogelei',
      objection: `Deine „Moore-Wende" ist Mogelei: Du hältst einfach an Gott fest und erklärst die Evidenz gegen ihn für unzuverlässig. So kann man jede Überzeugung immunisieren.`,
      objectionBy: 'Skeptischer Kritiker',
      answer: `Rowe selbst – ein Atheist – hat diese Möglichkeit als rational anerkannt. Sie bedeutet nicht, die Evidenz zu ignorieren, sondern sie abzuwägen: Wer stärkere Gründe für Gott hat als für die Behauptung, dass ein bestimmtes Leid sinnlos ist, darf den Schluss umdrehen. Das ist keine Immunisierung, sondern normale Abwägung von Belegen. Die eigentliche Frage ist also: Wie stark sind die Gründe für Gott?`,
      detail: `Rowe beschreibt in seinem Aufsatz von 1979 den „freundlichen Atheismus": Ein Atheist kann anerkennen, dass manche Theisten rational gerechtfertigt sind, an Gott zu glauben. Das ist ein bemerkenswertes Zugeständnis eines der stärksten Vertreter des Arguments aus dem Übel.`,
      followUps: [
        {
          id: 'gottesbeweise-schwaecher',
          objection: `Deine Gründe für Gott sind viel schwächer als die Evidenz des Leids. Ein brennendes Kind wiegt mehr als jeder kosmologische Syllogismus.`,
          objectionBy: 'Bart Ehrman',
          answer: `Das ist der ehrliche Kern der Debatte, und da müssen wir abwägen. Ich bringe nicht nur Syllogismen, sondern auch eine Person: Jesus von Nazareth, der selbst unschuldig gelitten hat und – dafür gibt es starke historische Gründe – auferstanden ist. Wenn er auferstanden ist, dann hat das Leid nicht das letzte Wort. Und bemerkenswert ist: Viele, die am tiefsten gelitten haben, haben Gott im Leid nicht verloren, sondern gefunden.`,
          detail: `Ehrman verlor seinen Glauben am Problem des Leids (God's Problem, 2008); seine Ehrlichkeit verdient Respekt. Zugleich bezeugen unzählige Leidende – von den Märtyrern der koptischen Kirche bis zu Menschen in Krankenhäusern und Flüchtlingslagern – das Gegenteil. Leid ist ein Grund zum Zweifel und zugleich der Ort, an dem viele Menschen Gott begegnen. Siehe auch den Themenblock „Die Auferstehung Jesu".`,
          followUps: [
            {
              id: 'wiesel-nacht',
              objection: `Elie Wiesel hat in Auschwitz gesehen, wie ein Kind am Galgen langsam starb, und dort seinen Glauben verloren: Diese Flammen haben seinen Gott für immer verzehrt. Wer bist du, ihm zu widersprechen?`,
              objectionBy: 'Bart D. Ehrman (mit Bezug auf Elie Wiesel, „Die Nacht")',
              answer: `Ich widerspreche Wiesel nicht – vor seinem Zeugnis schweigt man zuerst. Aber in genau dieser Szene fragt jemand hinter ihm: „Wo ist Gott?", und Wiesel hört in sich die Antwort: „Hier hängt er, an diesem Galgen." Für Wiesel war das der Tod seines Kinderglaubens. Christen hören darin auch das Geheimnis des Kreuzes: Gott ist nicht der Zuschauer auf der Tribüne, sondern der Gehenkte. Das löst das Leid nicht auf, aber es verändert, wo wir Gott suchen.`,
              detail: `Wiesels *Die Nacht* (frz. 1958) gehört zu den erschütterndsten Zeugnissen des 20. Jahrhunderts. Man darf es nicht christlich vereinnahmen; Wiesel blieb Jude, mit Gott ringend. Jürgen Moltmann hat in *Der gekreuzigte Gott* (1972) diese Szene christologisch gedeutet.

Die koptische Theologie hat dafür ein festes Fundament: Mit dem hl. Kyrill bekennt sie im 12. Anathematismus, dass der Logos Gottes „im Fleisch gelitten hat". Der Gott der Christen hat die Folter, die Verlassenheit und den Tod nicht von außen betrachtet, sondern von innen erlitten. Diese Antwort ist keine Erklärung des Leids – aber eine Gemeinschaft im Leid.`,
              voices: [
                {
                  person: 'kyrill-alexandrien',
                  role: 'als Lehrer des leidenden Logos',
                  text: `Kyrill besteht gegen Nestorius darauf, dass der, der am Kreuz litt, nicht ein Mensch neben Gott war, sondern der Logos selbst in seinem eigenen Fleisch – „leidensunfähig in seiner Gottheit, leidend im Fleisch". Darum kann die Kirche sagen: Gott hat gelitten. Für die Theodizee heißt das: Der Christ verweist nicht auf einen fernen Gott, der Leid zulässt, sondern auf den Gott, der es selbst getragen hat.`,
                  sources: [
                    { kind: 'konzil', author: 'Kyrill von Alexandrien', work: 'Zwölf Anathematismen (Dritter Brief an Nestorius)', ref: 'Anathematismus 12', year: '430', quote: `Wer nicht bekennt, dass der Logos Gottes im Fleisch gelitten hat, im Fleisch gekreuzigt wurde und im Fleisch den Tod gekostet hat, der sei ausgeschlossen.`, status: 'paraphrase' },
                  ],
                },
              ],
              sources: [
                { kind: 'sonstiges', author: 'Elie Wiesel', work: 'Die Nacht (La Nuit)', year: '1958', quote: `Hinter mir fragte jemand: „Wo ist Gott?" – und in mir hörte ich eine Stimme antworten: „Hier hängt er, an diesem Galgen."`, status: 'paraphrase', note: 'Wiesel meinte damit den Tod seines Glaubens; die christologische Deutung (Moltmann) ist eine Aneignung, die man als solche kennzeichnen sollte.' },
              ],
              followUps: [
                {
                  id: 'vertroestung-jenseits',
                  objection: `Ein mitleidender Gott und ein Jenseits als Ausgleich – das ist Vertröstung. Es lähmt den Kampf gegen das Leid hier und jetzt. Die Religion ist das Seufzen der bedrängten Kreatur, und ihr verkauft es als Antwort.`,
                  objectionBy: 'Karl Marx (Rezeption)',
                  answer: `Wenn Hoffnung lähmen würde, müssten die Christen die passivsten Menschen der Geschichte sein. Das Gegenteil ist der Fall: Die ersten Krankenhäuser (Basilius' Basilias um 370), die Abschaffung der Sklaverei (Wilberforce), die Bürgerrechtsbewegung (Martin Luther King) und die Hospizbewegung (Cicely Saunders) kamen aus genau dieser Hoffnung. Wer weiß, dass das Leid nicht das letzte Wort hat, kann sich ihm stellen, ohne zu verzweifeln.`,
                  detail: `Marx' berühmter Satz (Einleitung zur *Kritik der Hegelschen Rechtsphilosophie*, 1844) ist differenzierter, als er oft zitiert wird: Er nennt Religion zugleich „Ausdruck des wirklichen Elendes" und „Protestation gegen das wirkliche Elend". Christen können zugeben, dass Religion missbraucht wurde, um Unrecht zu verewigen. Aber das Evangelium selbst stellt die Mächtigen unter das Gericht (Lk 1,52) und verlangt, den Hungrigen zu speisen (Mt 25,35). Siehe den Claim „Religion ist das Opium des Volkes".`,
                  sources: [
                    { kind: 'gegner', author: 'Karl Marx', work: 'Zur Kritik der Hegelschen Rechtsphilosophie. Einleitung', ref: 'MEW 1, S. 378', year: '1844', quote: `Das religiöse Elend ist in einem der Ausdruck des wirklichen Elendes und in einem die Protestation gegen das wirkliche Elend. Die Religion ist der Seufzer der bedrängten Kreatur, das Gemüt einer herzlosen Welt, wie sie der Geist geistloser Zustände ist. Sie ist das Opium des Volkes.`, status: 'verbatim' },
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
    `Würdest du erwarten, die Gründe eines allwissenden Gottes für jedes einzelne Ereignis zu durchschauen?`,
    `Woran misst du, dass ein Leid wirklich *böse* ist – und nicht nur unangenehm?`,
    `Hast du beim Abwägen der Wahrscheinlichkeit Gottes auch die Existenz des Universums, die Feinabstimmung und die Auferstehung Jesu berücksichtigt?`,
    `Kennst du Menschen, die im Leid zu Gott gefunden haben – wie erklärst du das?`,
  ],
  avoid: [
    `Für jedes Leid einen konkreten Grund zu behaupten („Gott wollte dich damit demütigen") – das ist anmaßend und verletzend.`,
    `So tun, als sei das evidentielle Problem leicht zu erledigen – es ist das ernsthafteste philosophische Argument gegen Gott.`,
    `Das Leid anderer als „Beweis" für die Notwendigkeit des Glaubens instrumentalisieren.`,
  ],
  concessions: [
    `Das evidentielle Problem ist ernst; viele aufrichtige Menschen haben an ihm ihren Glauben verloren (z. B. Bart Ehrman).`,
    `Der skeptische Theismus hat Kosten und Kritiker; er ist nicht die ganze Antwort, sondern ein Baustein.`,
    `Wir kennen Gottes Gründe in den meisten Einzelfällen nicht und sollten nicht so tun, als ob.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Daniel Howard-Snyder (Hg.)', work: 'The Evidential Argument from Evil', year: '1996', status: 'paraphrase', note: 'Standardsammelband mit Rowe, Wykstra, Draper u. a.' },
    { kind: 'fachliteratur', author: 'Eleonore Stump', work: 'Wandering in Darkness', year: '2010', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Richard Swinburne', work: 'Providence and the Problem of Evil', year: '1998', status: 'paraphrase' },
    { kind: 'gegner', author: 'Bart D. Ehrman', work: 'God\'s Problem', year: '2008', status: 'paraphrase' },
  ],
  difficulty: 3,
  tags: ['Theodizee', 'Evidentielles Problem', 'Rowe', 'Skeptischer Theismus', 'CORNEA', 'Wykstra', 'Draper'],
  related: [
    'theodizee/logisches-problem-des-uebels',
    'theodizee/tierleid',
    'theodizee/kinderleid-karamasow',
    'moral-und-gott/gut-ohne-gott',
    'gottesbeweise/goettliche-verborgenheit',
    'auferstehung/halluzinationen',
  ],
};

export default claim;
