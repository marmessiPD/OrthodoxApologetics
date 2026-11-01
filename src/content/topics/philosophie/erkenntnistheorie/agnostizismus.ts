import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'agnostizismus',
  title: `„Man kann es nicht wissen – deshalb bin ich Agnostiker."`,
  proponents: [
    { name: 'Thomas Henry Huxley', role: 'Biologe (1825–1895), „Darwins Bulldogge"', work: 'Prägte um 1869 den Begriff „agnostic"; Essays „Agnosticism" und „Agnosticism and Christianity" (1889)' },
    { name: 'Bertrand Russell', role: 'Philosoph und Logiker', work: '„Am I an Atheist or an Agnostic?" (1947)' },
    { name: 'Bart D. Ehrman', role: 'Neutestamentler, University of North Carolina', work: 'God\'s Problem (2008); Interviews zu seinem Agnostizismus' },
    { name: 'Neil deGrasse Tyson', role: 'Astrophysiker', work: 'Interviews, in denen er das Etikett „Agnostiker" dem des „Atheisten" vorzieht' },
  ],
  steelman: `Die ehrlichste Antwort auf die Gottesfrage lautet: Ich weiß es nicht. Seit Jahrtausenden streiten kluge Menschen ohne Ergebnis; für jedes Argument gibt es ein Gegenargument. Gott, wenn es ihn gibt, wäre unendlich, jenseits von Raum und Zeit – wie sollte ein begrenzter menschlicher Verstand ihn erfassen? Kant hat gezeigt, dass die theoretische Vernunft hier an ihre Grenzen stößt. Thomas Henry Huxley prägte den Begriff „Agnostiker" als Gegenstück zu den „Gnostikern" der Kirchengeschichte, die vorgaben, so viel über Dinge zu wissen, von denen er nichts wusste. Agnostizismus sei, so Huxley, kein Glaubensbekenntnis, sondern eine Methode: Folge der Vernunft so weit sie trägt, und gib nicht vor, Schlussfolgerungen seien gewiss, die nicht bewiesen sind. Das ist nicht Gleichgültigkeit, sondern intellektuelle Redlichkeit.`,
  biblical: {
    summary: `Die Bibel nimmt die Grenzen menschlicher Erkenntnis ernst – „Wir sehen jetzt durch einen Spiegel in einem dunkeln Wort" (1 Kor 13,12) – verheißt aber, dass Gott sich finden lässt: „So ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen" (Jer 29,13–14); „Suchet, so werdet ihr finden" (Mt 7,7). Gott hat sich selbst bekannt gemacht, zuletzt im Sohn (Hebr 1,1–2). Und die Schrift ruft zur Entscheidung: „Wie lange hinket ihr auf beiden Seiten?" (1 Kön 18,21).`,
    detail: `- **Apg 17,23.27:** Paulus begegnet in Athen einem „Altar dem unbekannten Gott" – einer Art religiösem Agnostizismus – und antwortet: „Nun verkündige ich euch denselben." Gott ist „nicht ferne von einem jeglichen unter uns".
- **Hebr 11,6:** Gott ist „denen, die ihn suchen, ein Vergelter" – das Suchen selbst steht unter einer Verheißung.
- **1 Joh 5,13:** „auf daß ihr wisset" – das Neue Testament spricht von begründeter Gewissheit, nicht nur von Vermutung.
- **Offb 3,20:** „Ich stehe vor der Tür und klopfe an" – nicht nur der Mensch sucht Gott, Gott sucht den Menschen.`,
    sources: [
      { kind: 'bibel', work: 'Jeremia', ref: '29,13–14', quote: `Ihr werdet mich suchen und finden. Denn so ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen, spricht der HERR.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Matthäus', ref: '7,7', quote: `Bittet, so wird euch gegeben; suchet, so werdet ihr finden; klopfet an, so wird euch aufgetan.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Könige', ref: '18,21', quote: `Wie lange hinket ihr auf beiden Seiten? Ist der HERR Gott, so wandelt ihm nach; ist's aber Baal, so wandelt ihm nach.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: '1. Johannes', ref: '5,13', quote: `Solches habe ich euch geschrieben, die ihr glaubet an den Namen des Sohnes Gottes, auf daß ihr wisset, daß ihr das ewige Leben habt.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '3,20', quote: `Siehe, ich stehe vor der Tür und klopfe an. So jemand meine Stimme hören wird und die Tür auftun, zu dem werde ich eingehen.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die orthodoxe Tradition kennt eine Art „heiligen Agnostizismus": Das *Wesen* Gottes bleibt für jedes Geschöpf unbegreiflich, wie Gregor der Theologe und Johannes von Damaskus lehren. Doch daraus folgt nicht, dass man Gott nicht erkennen kann: Wir erkennen, *dass* er ist, aus seinen Werken, und wir erkennen *ihn* in seinem Wirken und vor allem in Christus, dem fleischgewordenen Logos. Gotteserkenntnis ist in der orthodoxen Tradition nicht Besitz, sondern Gemeinschaft – sie wächst im Gebet, in den Sakramenten und im Leben der Kirche. Bemerkenswert: Die Kirche hat die „Gnostiker", gegen die Huxley seinen Begriff prägte, selbst bekämpft – gerade weil sie geheimes Wissen gegen die öffentliche Wahrheit des Evangeliums stellten.`,
    sources: [
      { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,1 und I,4', status: 'paraphrase', quote: 'Gott hat die Erkenntnis, dass er ist, allen eingepflanzt und sich durch Gesetz, Propheten und zuletzt durch den Sohn geoffenbart; was er seinem Wesen nach ist, bleibt unbegreiflich.' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Gegen die Häresien (Adversus Haereses)', ref: 'III,3–4', status: 'paraphrase', quote: 'Gegen die Gnostiker: Die Wahrheit ist nicht geheimes Wissen weniger, sondern das öffentlich überlieferte Zeugnis der Apostel in der Kirche.' },
    ],
  },
  opposingView: {
    summary: `Man unterscheidet einen **schwachen** oder vorläufigen Agnostizismus („Ich weiß es nicht – noch nicht") von einem **starken** oder prinzipiellen („Niemand kann es wissen"). Huxley verstand Agnostizismus als Methode der intellektuellen Redlichkeit. Bertrand Russell erklärte 1947, vor Philosophen nenne er sich Agnostiker, vor einem breiten Publikum Atheist, weil er die Existenz Gottes für so unwahrscheinlich halte wie die der olympischen Götter. In der heutigen Debatte bezeichnen sich viele als „agnostische Atheisten" (kein Wissen, kein Glaube). Philosophisch steht der starke Agnostizismus vor dem Problem, dass er selbst einen weitreichenden Wissensanspruch über Gott und die menschliche Erkenntnis erhebt.`,
    sources: [
      { kind: 'gegner', author: 'Thomas Henry Huxley', work: '„Agnosticism", The Nineteenth Century', year: '1889', status: 'paraphrase', quote: 'Huxley erfand den Begriff als Gegenstück zum „Gnostiker" der Kirchengeschichte, der vorgab, viel über eben die Dinge zu wissen, von denen er selbst nichts wusste.', note: 'Die erste gedruckte Verwendung des Wortes (Spectator, Mai 1869) und Huxleys Urheberschaft sind in Details umstritten.' },
      { kind: 'gegner', author: 'Thomas Henry Huxley', work: '„Agnosticism and Christianity"', year: '1889', status: 'paraphrase', quote: 'Agnostizismus ist kein Glaubensbekenntnis, sondern eine Methode: Folge der Vernunft so weit sie trägt und gib nicht vor, Schlüsse seien gewiss, die nicht bewiesen oder beweisbar sind.' },
      { kind: 'gegner', author: 'Bertrand Russell', work: '„Am I an Atheist or an Agnostic?"', year: '1947', status: 'paraphrase', quote: 'Vor einem philosophischen Publikum nenne er sich Agnostiker, im allgemeinen Sprachgebrauch Atheist.' },
    ],
  },
  quickAnswer: `Ehrlichkeit ist gut – aber man muss zwei Dinge unterscheiden. „Ich weiß es *noch* nicht" ist eine redliche Haltung; dann ist der nächste Schritt aber: suchen, prüfen, fragen. „*Niemand* kann es wissen" ist dagegen selbst eine große Wissensbehauptung – nämlich dass Gott, falls es ihn gibt, sich nicht zu erkennen geben kann oder will. Woher weißt du das? Das Christentum sagt: Gott hat sich gezeigt, öffentlich, in Jesus Christus. Und in der Praxis gibt es keine neutrale Mitte: Man lebt entweder so, als gäbe es Gott, oder so, als gäbe es ihn nicht. Jesus sagt: „Suchet, so werdet ihr finden."`,
  keyPoints: [
    `**Zwei Arten von Agnostizismus:** „Ich weiß es (noch) nicht" ist redlich und lädt zum Suchen ein. „Man kann es nicht wissen" ist eine Wissensbehauptung, die selbst begründet werden muss.`,
    `**Wenn Gott existiert, kann er sich zeigen:** Ein personaler Gott ist nicht auf unsere Forschung angewiesen; er kann sich offenbaren – das Christentum behauptet, er hat es in Christus getan.`,
    `**Ein wahrer Kern:** Gottes Wesen übersteigt unser Begreifen – das lehrt auch die orthodoxe Tradition. Aber Gott *begreifen* und Gott *erkennen* ist nicht dasselbe.`,
    `**Keine neutrale Mitte im Leben:** Ob man betet oder nicht, wie man Moral, Sinn und Tod versteht – man lebt faktisch nach einer Antwort. Elija: „Wie lange hinket ihr auf beiden Seiten?"`,
    `**Die Bedeutung der Frage:** C. S. Lewis: Das Christentum ist, wenn falsch, ohne Bedeutung, und wenn wahr, von unendlicher Bedeutung – nur mäßig bedeutsam kann es nicht sein.`,
    `**Verheißung für Suchende:** „Suchet, so werdet ihr finden" (Mt 7,7); „so will ich mich von euch finden lassen" (Jer 29,14).`,
  ],
  argument: {
    name: 'Das Problem des starken Agnostizismus',
    summary: 'Wer behauptet, niemand könne wissen, ob es Gott gibt, beansprucht ein Wissen, das er nicht hat.',
    premises: [
      {
        text: 'P1: Der starke Agnostizismus behauptet: Niemand kann wissen, ob Gott existiert.',
        support: `Im Unterschied zum schwachen Agnostizismus, der nur die eigene gegenwärtige Unkenntnis feststellt.`,
      },
      {
        text: 'P2: Diese Behauptung setzt ein Wissen voraus – entweder über Gott (dass er sich, falls er existiert, nicht erkennbar machen kann oder will) oder über die Grenzen aller möglichen menschlichen Erkenntnis.',
        support: `Um zu wissen, dass niemand Gott erkennen kann, müsste man wissen, wie Gott ist und was er tun kann – oder alle möglichen Erkenntniswege überblicken. Beides ist ein weitreichender Wissensanspruch.`,
      },
      {
        text: 'P3: Ein solches Wissen ist nicht begründet; im Gegenteil: Ein personaler, allmächtiger Gott könnte sich offenbaren, und das Christentum beruft sich auf eine öffentlich prüfbare Offenbarung.',
        support: `Die Offenbarung in Christus – Leben, Lehre, Tod und Auferstehung Jesu – ist ein geschichtlicher Anspruch, der historischer Prüfung zugänglich ist.`,
      },
    ],
    conclusion: 'Also ist der starke Agnostizismus unbegründet. Übrig bleibt der schwache Agnostizismus – und der ist keine Endstation, sondern eine Einladung zum Suchen.',
  },
  voices: [
    {
      person: 'pascal',
      role: 'als Apologet für die Unentschiedenen',
      text: `Pascal schrieb seine „Gedanken" vor allem für gebildete Zweifler seiner Zeit. Ihn erschütterte weniger der Unglaube als die Gleichgültigkeit: Dass Menschen in einer Frage, bei der es um sie selbst, um ihre Ewigkeit, um alles geht, sorglos bleiben, nannte er erstaunlich. Seine berühmte „Wette" ist kein Gottesbeweis, sondern ein Weckruf an den, der meint, die Gründe hielten sich die Waage: Man kann nicht neutral bleiben – „wir sind eingeschifft". Pascal riet dem Unentschiedenen nicht, sich einen Glauben einzureden, sondern zu suchen, die Gründe zu prüfen und das Herz zu öffnen.`,
      sources: [
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment 418 (Lafuma; Brunschvicg 233)', quote: `Man muss wetten. Das ist nicht freiwillig, Sie sind eingeschifft.`, original: 'Il faut parier. Cela n\'est pas volontaire, vous êtes embarqué.', translation: 'eigene Übersetzung', status: 'paraphrase', note: 'Wortlaut bekannt; Fragmentnummer je nach Ausgabe.' },
        { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', ref: 'Fragment 427 (Lafuma; Brunschvicg 194)', status: 'paraphrase', quote: 'Die Gleichgültigkeit in einer Sache, bei der es um uns selbst, um unsere Ewigkeit, um alles geht, erstaunt und erschreckt mich.' },
      ],
    },
    {
      person: 'paulus',
      role: 'als Prediger vor dem „unbekannten Gott"',
      text: `Paulus fand in Athen einen Altar mit der Aufschrift „Dem unbekannten Gott" – gleichsam ein Denkmal religiöser Unsicherheit. Er tadelte die Athener nicht für ihr Nichtwissen, sondern nahm es als Anknüpfungspunkt: Gott habe die Menschen so geschaffen, dass sie ihn suchen und finden könnten, und er sei nicht fern. Dann verkündete er, dass Gott die Zeit der Unwissenheit übersehen habe und nun alle zur Umkehr rufe, weil er sich in der Auferweckung Jesu beglaubigt habe. Für Paulus ist das Nichtwissen ein Anfang, kein Ruheplatz.`,
      sources: [
        { kind: 'bibel', work: 'Apostelgeschichte', ref: '17,23.27.30–31', status: 'paraphrase', quote: 'Vom unbekannten Gott zum Gott, der sich in der Auferstehung Jesu bekannt gemacht hat.' },
      ],
    },
    {
      person: 'johannes-damaskus',
      role: 'als Lehrer der Unbegreiflichkeit und der Offenbarung Gottes',
      text: `Johannes von Damaskus beginnt seine Darlegung des orthodoxen Glaubens mit einer doppelten Aussage: Gott ist unaussprechlich und unbegreiflich – und doch hat er uns nicht in völliger Unwissenheit gelassen. Er hat die Erkenntnis, dass er ist, allen von Natur eingepflanzt, die Schöpfung verkündet seine Herrlichkeit, und er hat sich durch Gesetz und Propheten und schließlich durch seinen eingeborenen Sohn offenbart. Damit erkennt die orthodoxe Theologie den wahren Kern des Agnostizismus an – Gottes Wesen bleibt Geheimnis – und weist zugleich seine Schlussfolgerung zurück.`,
      sources: [
        { kind: 'kirchenvater', author: 'Johannes von Damaskus', work: 'Genaue Darlegung des orthodoxen Glaubens (De fide orthodoxa)', ref: 'I,1–4', status: 'paraphrase', quote: 'Gott ist unbegreiflich, hat uns aber nicht in völliger Unkenntnis gelassen.' },
      ],
    },
    {
      person: 'cs-lewis',
      role: 'als ehemaliger Skeptiker',
      text: `Lewis betont, dass das Christentum keine Frage ist, bei der man bequem in der Mitte stehen bleiben kann: Ist es falsch, dann ist es bedeutungslos; ist es wahr, dann von unendlicher Bedeutung. In seinem Vortrag „Man or Rabbit?" fragt er, ob man als Mensch leben will, der wissen möchte, was wahr ist, oder wie ein Kaninchen, das nur nach dem Angenehmen sucht. Seine eigene Bekehrung beschreibt er nicht als Gefühlsrausch, sondern als widerwilliges Nachgeben gegenüber Gründen – er sei „der niedergeschlagenste und widerwilligste Bekehrte in ganz England" gewesen.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: '„Christian Apologetics" (Vortrag 1945), in: God in the Dock', quote: `Christianity is a statement which, if false, is of no importance, and, if true, of infinite importance. The one thing it cannot be is moderately important.`, status: 'verbatim' },
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Überrascht von Freude (Surprised by Joy)', year: '1955', ref: 'Kap. 14', status: 'paraphrase', quote: 'Lewis beschreibt sich als den niedergeschlagensten und widerwilligsten Bekehrten in ganz England.' },
      ],
    },
    {
      person: 'clemens-alexandrien',
      role: 'als Lehrer der „wahren Gnosis"',
      text: `Clemens wandte sich gegen die gnostischen Sekten, die mit geheimem Wissen prahlten und den einfachen Glauben verachteten. Er setzte ihnen den „wahren Gnostiker" entgegen: den Christen, dessen Erkenntnis aus dem Glauben wächst, demütig bleibt und sich in Liebe vollendet. Erkenntnis Gottes ist für Clemens kein elitärer Besitz, sondern ein Weg, auf dem Glaube und Verstehen einander tragen. Ironischerweise hat Huxley seinen Begriff „Agnostiker" gerade gegen jene „Gnostiker" geprägt, die schon die Kirche als falsche Wissende bekämpft hatte.`,
      sources: [
        { kind: 'kirchenvater', author: 'Clemens von Alexandrien', work: 'Teppiche (Stromateis)', ref: 'Buch VII', status: 'paraphrase', quote: 'Der wahre Gnostiker: Erkenntnis, die aus dem Glauben wächst und sich in der Liebe vollendet.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'man-kann-nicht-wissen',
      objection: `„Man kann nicht wissen, ob es Gott gibt. Also enthalte ich mich des Urteils – das ist die ehrlichste Position."`,
      objectionBy: 'Thomas Henry Huxley / Bart Ehrman',
      targetsPremise: 1,
      answer: `Meinst du „Ich weiß es noch nicht" oder „Niemand kann es wissen"? Das Erste ist eine redliche Haltung – und dann lade ich dich ein, weiterzusuchen. Das Zweite ist eine große Behauptung: Es setzt voraus, dass Gott, falls es ihn gibt, sich nicht zu erkennen geben kann oder will. Woher weißt du das? Gerade darin behauptet das Christentum das Gegenteil: Gott hat sich in Jesus Christus öffentlich gezeigt.`,
      questionsBack: [`Wenn es Gott gäbe – könnte er sich dir nicht zu erkennen geben, wenn er wollte?`],
      followUps: [
        {
          id: 'grenzen-der-vernunft',
          objection: `„Grundsätzlich: Gott übersteigt, wenn es ihn gibt, unsere Erkenntnisfähigkeit. Kant hat gezeigt, dass die theoretische Vernunft hier an ihre Grenzen stößt."`,
          objectionBy: 'Immanuel Kant (sinngemäß)',
          targetsPremise: 2,
          answer: `Da ist etwas Wahres dran, und die orthodoxe Tradition stimmt sogar zu: Gottes *Wesen* übersteigt jedes Begreifen. Aber Gott ganz begreifen und Gott erkennen ist nicht dasselbe – ich begreife auch meinen besten Freund nicht ganz und kenne ihn doch. Wenn Gott personal ist, kann er sich offenbaren, so wie sich ein Mensch durch sein Wort zu erkennen gibt. Und Kant selbst hielt Gott übrigens als Postulat der praktischen Vernunft für unverzichtbar.`,
          followUps: [
            {
              id: 'offenbarungen-unpruefbar',
              objection: `„Offenbarungen kann ich nicht prüfen. Jede Religion beansprucht eine – woher soll ich wissen, welche echt ist?"`,
              objectionBy: 'Bart Ehrman',
              targetsPremise: 3,
              answer: `Viele Offenbarungsansprüche beruhen auf dem, was ein Einzelner allein empfangen haben will – die sind tatsächlich schwer zu prüfen. Das Christentum beruft sich dagegen auf ein öffentliches Ereignis: Jesu Tod und Auferstehung, bezeugt von vielen, früh überliefert, von Gegnern nicht widerlegt. Das kann man historisch prüfen. Fang dort an: Was erklärt das leere Grab, die Erscheinungen und die Entstehung der Kirche am besten?`,
              detail: `Siehe „Außergewöhnliche Behauptungen erfordern außergewöhnliche Belege" und die Themenblöcke zur Auferstehung.`,
            },
          ],
        },
        {
          id: 'argumente-gleichgewicht',
          objection: `„Die Argumente beider Seiten halten sich die Waage. Ehrliche Enthaltung ist die einzig redliche Position."`,
          objectionBy: 'Neil deGrasse Tyson (sinngemäß)',
          targetsPremise: 1,
          answer: `Wenn du die Argumente wirklich geprüft hast und sie für ausgeglichen hältst, ist vorläufige Zurückhaltung verständlich. Aber bei dieser Frage kann man nicht dauerhaft neutral leben: Ob du betest oder nicht, wie du Sinn, Moral und Tod verstehst – du lebst faktisch nach einer Antwort. Pascal sagte: „Wir sind eingeschifft." Und C. S. Lewis: Das Christentum ist entweder bedeutungslos oder unendlich bedeutsam – nur mittelmäßig wichtig kann es nicht sein.`,
          followUps: [
            {
              id: 'pascals-wette-zynisch',
              objection: `„Pascals Wette ist zynisch. Ein Gott würde einen berechnenden Glauben nicht belohnen. Und auf welche der tausend Religionen soll ich überhaupt wetten?"`,
              objectionBy: 'Richard Dawkins / Alex O\'Connor',
              answer: `Ich stimme zu, dass die Wette kein Gottesbeweis ist und keinen echten Glauben ersetzen kann – auch Pascal meinte das nicht. Sie richtet sich an jemanden, der die Gründe für ausgeglichen hält, und soll ihn aus der Gleichgültigkeit wecken: Prüfe, was auf dem Spiel steht, und suche ernsthaft. Welche Religion? Nicht wahllos wetten, sondern die ernsthaften Kandidaten anhand der Belege prüfen – und das Christentum bietet dafür mit der Auferstehung einen historischen Prüfstein.`,
            },
          ],
        },
      ],
    },
    {
      id: 'agnostizismus-demuetig',
      objection: `„Agnostizismus ist demütig. Wer behauptet, Gott zu kennen, ist anmaßend."`,
      objectionBy: 'Häufiger Einwand',
      answer: `Demut zeigt sich in der Haltung, nicht in einer bestimmten Antwort. Zu behaupten, *niemand* könne Gott erkennen, ist übrigens keine kleine Behauptung. Christen bekennen, dass ihr Wissen Stückwerk ist (1 Kor 13,12) – aber sie vertrauen darauf, dass Gott selbst gesprochen hat. Wenn jemand anklopft und spricht, ist es nicht demütig, so zu tun, als könne man nicht wissen, ob jemand da ist.`,
      followUps: [
        {
          id: 'du-behauptest-gewissheit',
          objection: `„Aber du behauptest doch, Gewissheit zu haben. Das ist das Gegenteil von Demut."`,
          objectionBy: 'Alex O\'Connor',
          answer: `Meine Gewissheit beruht nicht auf meiner Klugheit, sondern auf der Treue dessen, dem ich vertraue – so wie ein Kind gewiss sein kann, dass seine Mutter es liebt, ohne es beweisen zu können. Johannes schreibt, „auf daß ihr wisset" (1 Joh 5,13). Diese Gewissheit schließt nicht aus, Fragen zu haben und zu lernen. Aber sie gibt Halt.`,
        },
      ],
    },
    {
      id: 'mir-egal',
      objection: `„Ehrlich gesagt ist es mir egal. Ob es Gott gibt oder nicht, spielt für mein Leben keine Rolle."`,
      objectionBy: 'Apatheismus (häufige Alltagshaltung)',
      answer: `Wenn es Gott gibt, ist das die wichtigste Tatsache überhaupt: Dann hat dein Leben einen Ursprung und ein Ziel, dann ist das Gute wirklich gut, und der Tod ist nicht das Ende. Wenn es ihn nicht gibt, hat das ebenfalls tiefe Folgen. C. S. Lewis sagte: Das Christentum ist, wenn falsch, ohne Bedeutung, und wenn wahr, von unendlicher Bedeutung – nur mäßig bedeutsam kann es nicht sein. Pascal wunderte sich über nichts so sehr wie über Gleichgültigkeit in dieser Frage.`,
      followUps: [
        {
          id: 'gutes-leben-ohne-gott',
          objection: `„Ich führe auch ohne Gott ein gutes und sinnvolles Leben."`,
          objectionBy: 'Häufiger Einwand',
          answer: `Das glaube ich dir gern – viele Menschen ohne Glauben leben anständig und engagiert, und das verdient Respekt. Die Frage ist nicht, ob du dich gut fühlst, sondern was wahr ist und worauf dein Gutes und dein Sinn letztlich gründen. Wenn es einen Gott gibt, der dich kennt und liebt, wäre es dann nicht schade, ihn nie gesucht zu haben?`,
          detail: `Siehe „Man kann auch ohne Gott ein guter Mensch sein" und „Das Leben hat keinen objektiven Sinn – wir geben ihm selbst Sinn".`,
        },
      ],
    },
    {
      id: 'huxley-gnostiker',
      objection: `„Huxley prägte das Wort ‚Agnostiker' als Gegenbegriff zu den Gnostikern, die vorgaben, über Gott Bescheid zu wissen – genau wie die Kirche."`,
      objectionBy: 'Thomas Henry Huxley (sinngemäß)',
      answer: `Eine schöne Ironie: Die Kirche hat die Gnostiker selbst bekämpft – Irenäus, Clemens von Alexandrien und andere –, gerade weil sie geheimes Wissen für Eingeweihte beanspruchten. Das Christentum beruft sich dagegen nicht auf Geheimwissen, sondern auf öffentlich bezeugte Ereignisse, die „nicht im Winkel geschehen" sind (Apg 26,26). Clemens nannte den reifen Christen den „wahren Gnostiker": einen, dessen Erkenntnis aus dem Glauben wächst und sich in der Liebe vollendet.`,
      detail: `Siehe „Jesus lehrte geheimes Wissen für Eingeweihte".`,
    },
  ],
  questionsToAsk: [
    `Meinst du „Ich weiß es noch nicht" oder „Niemand kann es wissen"? Und wenn Letzteres – woher weißt du das?`,
    `Wenn es Gott gäbe, könnte er sich dir zu erkennen geben?`,
    `Wie viel Zeit hast du schon darauf verwendet, die Frage ernsthaft zu prüfen?`,
    `Lebst du im Alltag eher so, als gäbe es Gott, oder so, als gäbe es ihn nicht?`,
    `Wärst du bereit, ein Evangelium zu lesen mit der Frage: Wer ist dieser Jesus?`,
  ],
  avoid: [
    `Agnostiker als feige oder unentschlossen abstempeln. Viele sind ehrliche Suchende.`,
    `Pascals Wette als Gottesbeweis oder als Drohung verwenden – sie ist höchstens ein Weckruf zum Suchen.`,
    `So tun, als hätten Christen auf alle Fragen eine Antwort. Auch die orthodoxe Tradition kennt das Geheimnis Gottes.`,
  ],
  concessions: [
    `Gottes Wesen übersteigt unser Begreifen; die orthodoxe Theologie ist in diesem Sinn selbst „apophatisch".`,
    `Die Gottesfrage ist schwierig, und vorläufige Unsicherheit ist für einen Suchenden keine Schande.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Blaise Pascal', work: 'Pensées (Gedanken)', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Überrascht von Freude (Surprised by Joy)', year: '1955', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Warum Gott? (The Reason for God)', year: '2008', status: 'paraphrase' },
    { kind: 'gegner', author: 'Thomas Henry Huxley', work: '„Agnosticism"', year: '1889', status: 'paraphrase' },
  ],
  difficulty: 1,
  tags: ['Agnostizismus', 'Huxley', 'Pascal', 'Suchen', 'Unbegreiflichkeit Gottes'],
  related: [
    'atheismus/beweislast-mangel-an-glauben',
    'gottesbeweise/goettliche-verborgenheit',
    'erkenntnistheorie/keine-absolute-wahrheit',
    'erkenntnistheorie/religioese-erfahrung-kein-beleg',
    'gnosis/geheimes-wissen-elite',
    'sinn-existenz/kein-objektiver-sinn',
    'moral-und-gott/gut-ohne-gott',
  ],
};

export default claim;
