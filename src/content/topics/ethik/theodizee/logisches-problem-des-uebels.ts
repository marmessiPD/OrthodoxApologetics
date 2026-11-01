import type { Claim } from '../../../schema.ts';

const claim: Claim = {
  id: 'logisches-problem-des-uebels',
  title: `„Ein allmächtiger, allgütiger Gott und das Übel sind logisch unvereinbar (Epikur)."`,
  proponents: [
    {
      name: 'Epikur (überliefert bei Laktanz)',
      role: 'Griechischer Philosoph (341–270 v. Chr.); das „Trilemma" ist nur durch den christlichen Apologeten Laktanz überliefert',
      work: 'Laktanz, Vom Zorn Gottes (De ira Dei) 13,20–21 (um 313)',
    },
    {
      name: 'David Hume',
      role: 'Schottischer Philosoph (1711–1776)',
      work: 'Dialogues Concerning Natural Religion (postum 1779), Teil X',
    },
    {
      name: 'J. L. Mackie',
      role: 'Philosoph, Oxford (1917–1981)',
      work: '„Evil and Omnipotence", Mind 64 (1955)',
    },
    {
      name: 'H. J. McCloskey',
      role: 'Philosoph, La Trobe University',
      work: '„God and Evil", Philosophical Quarterly 10 (1960)',
    },
  ],
  steelman: `Das älteste und schärfste Argument gegen Gott ist in vier Sätzen gesagt. Entweder will Gott die Übel beseitigen und kann es nicht – dann ist er schwach. Oder er kann es und will es nicht – dann ist er missgünstig. Oder er will es nicht und kann es nicht – dann ist er beides. Oder er will und kann es – woher kommen dann die Übel, und warum beseitigt er sie nicht? So überliefert es Laktanz als Argument Epikurs; David Hume hat es in seinen *Dialogen* wiederholt. J. L. Mackie gab ihm 1955 die präzise logische Form: Die Sätze „Gott ist allmächtig", „Gott ist vollkommen gut" und „Es gibt Übel" sind zusammen widersprüchlich, sobald man zwei selbstverständliche Annahmen hinzufügt: Ein Guter beseitigt Übel, soweit er kann, und für einen Allmächtigen gibt es keine Grenzen dessen, was er kann. Die beliebte Ausrede mit dem freien Willen hilft nicht: Wenn es logisch möglich ist, dass ein Mensch bei einer Gelegenheit frei das Gute wählt, dann ist es auch möglich, dass er es bei jeder Gelegenheit tut. Ein allmächtiger Gott hätte also Wesen erschaffen können, die stets frei das Gute wählen. Dass er es nicht tat, ist mit Allmacht und Güte unvereinbar. Der Theist muss eine der drei Aussagen aufgeben.`,
  biblical: {
    summary: `Die Bibel kennt die Frage nach dem Leid nicht als philosophisches Gedankenspiel, sondern als Schrei: „Mein Gott, mein Gott, warum hast du mich verlassen?" (Ps 22,2 – von Jesus am Kreuz gebetet, Mt 27,46). Ganze Bücher ringen mit ihr: Hiob, Kohelet, die Klagelieder, die Klagepsalmen. Die Schrift bestreitet weder Gottes Macht noch seine Güte noch die Realität des Bösen – sie hält alle drei fest und zeigt einen vierten Faktor: Gottes Handeln in der Geschichte, das das Böse nicht verhindert, sondern überwindet. Josef sagt zu seinen Brüdern: „Ihr gedachtet's böse mit mir zu machen; aber Gott gedachte es gut zu machen" (Gen 50,20). Im Kreuz Christi wird das größte Unrecht der Geschichte zum Ort der Erlösung (Apg 2,23–24). Und am Ende wird Gott „abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein" (Offb 21,4).`,
    detail: `- **Das Böse ist nicht von Gott gemacht:** „Gott sah an alles, was er gemacht hatte, und siehe da, es war sehr gut" (Gen 1,31). Das Böse kommt durch den Missbrauch der Freiheit (Gen 3; Weish 2,23–24: „durch des Teufels Neid ist der Tod in die Welt gekommen").
- **Die Klage ist erlaubt:** Gott tadelt am Ende nicht den klagenden Hiob, sondern seine Freunde, die Gott mit billigen Erklärungen verteidigten: „ihr habt nicht recht von mir geredet wie mein Knecht Hiob" (Hiob 42,7).
- **Gott leidet mit:** Jesus weint am Grab des Lazarus, obwohl er ihn gleich auferwecken wird (Joh 11,35). Der Hebräerbrief betont, dass wir einen Hohenpriester haben, der „Mitleiden haben" kann mit unserer Schwachheit (Hebr 4,15).
- **Missverständnis:** Röm 8,28 („daß denen, die Gott lieben, alle Dinge zum Besten dienen") sagt nicht, dass alles Böse gut sei, sondern dass Gott auch aus dem Bösen Gutes wirken kann – ein Trost für Leidende, kein Satz, den man ihnen an den Kopf wirft.`,
    sources: [
      { kind: 'bibel', work: 'Psalm', ref: '22,2', quote: `Mein Gott, mein Gott, warum hast du mich verlassen?`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Genesis (1. Mose)', ref: '50,20', quote: `Ihr gedachtet's böse mit mir zu machen; aber Gott gedachte es gut zu machen, daß er täte, wie es jetzt am Tage ist, zu erhalten viel Volks.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Hiob', ref: '42,7', quote: `… denn ihr habt nicht recht von mir geredet wie mein Knecht Hiob.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Offenbarung', ref: '21,4', quote: `Und Gott wird abwischen alle Tränen von ihren Augen, und der Tod wird nicht mehr sein, noch Leid noch Geschrei noch Schmerz wird mehr sein; denn das Erste ist vergangen.`, translation: 'Luther 1912', status: 'verbatim' },
      { kind: 'bibel', work: 'Weisheit Salomos', ref: '2,23–24', quote: `Denn Gott hat den Menschen geschaffen zum ewigen Leben, und hat ihn gemacht zum Bilde, daß er gleich sein soll wie er ist. Aber durch des Teufels Neid ist der Tod in die Welt gekommen.`, translation: 'Luther 1912', status: 'paraphrase', note: 'Deuterokanonisch; Wortlaut der Ausgabe vor wörtlicher Verwendung prüfen.' },
      { kind: 'bibel', work: 'Hebräer', ref: '4,15', quote: `Denn wir haben nicht einen Hohenpriester, der nicht könnte Mitleiden haben mit unsrer Schwachheit, sondern der versucht ist allenthalben gleichwie wir, doch ohne Sünde.`, translation: 'Luther 1912', status: 'verbatim' },
    ],
  },
  church: {
    summary: `Die Väter haben auf das Problem drei Antworten gegeben, die die koptische Kirche bis heute trägt. **Erstens:** Das Böse ist keine Substanz, sondern ein Mangel – die Abwendung des freien Geschöpfes vom Guten (Athanasius, Contra Gentes 6–7; Basilius, *Dass Gott nicht der Urheber des Bösen ist*). Gott hat das Böse nicht geschaffen. **Zweitens:** Der Mensch wurde frei und noch unvollendet geschaffen, um in Freiheit zu Gott hin zu wachsen (Irenäus, Adv. Haer. IV,37–39). **Drittens – und das ist das Herz der koptischen Antwort:** Gott hat sich das Leid nicht vom Leib gehalten. Der ewige Logos hat im Fleisch gelitten, ist im Fleisch gekreuzigt worden und hat im Fleisch den Tod gekostet. So bekennt es der hl. Kyrill im zwölften Anathematismus, Grundtext der miaphysitischen Christologie. Die Gregorius-Liturgie dankt Gott, dass er „die Strafe in Heil verwandelt" hat.`,
    detail: `- **Athanasius:** Das Böse war ursprünglich nicht; die Seele „ersann" es, als sie sich vom Guten abwandte. Darum ist Gott nicht sein Urheber.
- **Irenäus:** Gott hätte den Menschen nicht von Anfang an vollkommen machen können, weil der Mensch als Geschöpf erst wachsen muss; er wurde wie ein Kind geschaffen, um sich an Gott zu gewöhnen und zu reifen (Adv. Haer. IV,38).
- **Kyrill von Alexandrien, 12. Anathematismus (430):** Wer nicht bekennt, dass der Logos Gottes im Fleisch gelitten hat, sei ausgeschlossen. Für die koptische Kirche ist das kein Randthema: Der Gott, nach dem der Leidende fragt, ist selbst das Subjekt des Leidens am Kreuz – leidensunfähig in seiner Gottheit, leidend in seinem eigenen Fleisch.
- **Liturgie:** In der koptischen Gregorius-Anaphora heißt es sinngemäß: Du hast mir die Strafe in Heil verwandelt. Gott beseitigt das Böse nicht nur – er verwandelt es.`,
    sources: [
      { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes', ref: '6–7', year: 'ca. 335', quote: `Das Böse war nicht von Anfang an; es hat kein eigenes Sein, sondern die Menschen haben es ersonnen, als sie sich vom Guten abwandten.`, status: 'paraphrase' },
      { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,38,1–3', year: 'um 180', quote: `Gott hätte dem Menschen die Vollkommenheit von Anfang an geben können, doch der Mensch, eben erst geschaffen, konnte sie nicht empfangen; er musste wachsen, wie ein Kind, das zuerst Milch braucht.`, status: 'paraphrase' },
      { kind: 'konzil', author: 'Kyrill von Alexandrien', work: 'Zwölf Anathematismen (3. Brief an Nestorius)', ref: 'Anathematismus 12', year: '430', quote: `Wenn jemand nicht bekennt, dass der Logos Gottes im Fleisch gelitten hat, im Fleisch gekreuzigt wurde, im Fleisch den Tod gekostet hat und Erstgeborener von den Toten geworden ist, insofern er als Gott das Leben und lebendigmachend ist, der sei ausgeschlossen.`, original: `Εἴ τις οὐχ ὁμολογεῖ τὸν τοῦ θεοῦ λόγον παθόντα σαρκὶ καὶ ἐσταυρωμένον σαρκὶ καὶ θανάτου γευσάμενον σαρκί, γεγονότα τε πρωτότοκον ἐκ τῶν νεκρῶν, καθὸ ζωή τέ ἐστι καὶ ζωοποιὸς ὡς θεός, ἀνάθεμα ἔστω.`, translation: 'eigene Übersetzung', status: 'verbatim' },
      { kind: 'liturgie', work: 'Anaphora des hl. Gregor (koptische Gregorius-Liturgie)', quote: `Du hast mir die Strafe in Heil verwandelt.`, status: 'paraphrase', note: 'Sinngemäß nach dem arabischen/koptischen Text.' },
      { kind: 'kirchenvater', author: 'Basilius der Große', work: 'Dass Gott nicht der Urheber des Bösen ist (Quod Deus non est auctor malorum)', year: '4. Jh.', quote: `Das eigentliche Böse ist die Sünde, die von unserem freien Willen abhängt; Gott ist nicht ihr Urheber.`, status: 'paraphrase' },
    ],
  },
  opposingView: {
    summary: `In der Fachphilosophie gilt das **logische** Problem des Übels heute weitgehend als entschärft. Alvin Plantinga hat 1974 mit der *Free Will Defense* gezeigt, dass Gott und Übel widerspruchsfrei zusammen gedacht werden können; dafür genügt eine *mögliche* Erklärung, sie muss nicht bewiesen sein. Selbst J. L. Mackie räumte in seinem letzten Buch *The Miracle of Theism* (1982) ein, dass das Problem des Übels nicht zeige, dass die zentralen Lehren des Theismus logisch unvereinbar sind – auch wenn er die Free Will Defense weiterhin nicht für eine befriedigende Lösung hielt. William Rowe, der bekannteste atheistische Vertreter des Arguments aus dem Übel, schrieb 1979, niemand habe die „extravagante" These der logischen Unvereinbarkeit bewiesen. Die Debatte hat sich deshalb auf das **evidentielle** Problem verlagert: Macht das Übel Gottes Existenz *unwahrscheinlich*? (siehe eigener Claim).`,
    detail: `- **Ehrlich zur Überlieferung:** Das „Epikur-Trilemma" findet sich in keinem erhaltenen Text Epikurs. Es ist nur durch den christlichen Apologeten Laktanz (De ira Dei 13) überliefert, der es Epikur zuschreibt; manche Forscher vermuten eine skeptische Quelle (vgl. Sextus Empiricus, Grundriss der pyrrhonischen Skepsis III,9–12). Man sollte es also „das bei Laktanz überlieferte Epikur-Argument" nennen.
- **Bemerkenswert:** Laktanz überliefert das Argument, um es zu beantworten: Gott habe das Übel zugelassen, weil ohne die Möglichkeit des Bösen weder Weisheit noch Tugend möglich wären.
- **Was bleibt:** Das existenzielle Problem – der Schmerz, die Klage, die Frage „Warum ich? Warum mein Kind?" – ist durch keinen Konsistenzbeweis erledigt. Dafür braucht es eine andere Antwort.`,
    sources: [
      { kind: 'kirchenvater', author: 'Laktanz', work: 'Vom Zorn Gottes (De ira Dei)', ref: '13,20–21', year: 'um 313', quote: `Gott, sagt er [Epikur], will entweder die Übel beseitigen und kann es nicht; oder er kann es und will es nicht; oder er will es nicht und kann es nicht; oder er will es und kann es. Wenn er will und nicht kann, ist er schwach … wenn er will und kann, was allein Gott geziemt: Woher kommen dann die Übel, und warum beseitigt er sie nicht?`, original: `Deus, inquit, aut vult tollere mala et non potest, aut potest et non vult, aut neque vult neque potest, aut et vult et potest. … si et vult et potest, quod solum deo convenit, unde ergo sunt mala? aut cur illa non tollit?`, translation: 'eigene Übersetzung (gekürzt)', status: 'verbatim', note: 'Einzige antike Quelle für die Zuschreibung an Epikur.' },
      { kind: 'gegner', author: 'David Hume', work: 'Dialogues Concerning Natural Religion', ref: 'Teil X', year: '1779', quote: `Will er Übel verhindern, kann es aber nicht? Dann ist er ohnmächtig. Kann er es, will es aber nicht? Dann ist er bösartig. Kann er es und will es? Woher kommt dann das Übel?`, original: `Is he willing to prevent evil, but not able? then is he impotent. Is he able, but not willing? then is he malevolent. Is he both able and willing? whence then is evil?`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Gesprochen von der Figur Philo.' },
      { kind: 'gegner', author: 'J. L. Mackie', work: 'Evil and Omnipotence', ref: 'Mind 64', year: '1955', quote: `Die Sätze „Gott ist allmächtig", „Gott ist vollkommen gut" und „Es gibt Übel" sind zusammen widersprüchlich; der Theist muss mindestens einen aufgeben.`, status: 'paraphrase' },
      { kind: 'gegner', author: 'J. L. Mackie', work: 'The Miracle of Theism', year: '1982', quote: `Das Problem des Übels zeigt nicht, dass die zentralen Lehren des Theismus logisch unvereinbar sind; ob die Free Will Defense eine wirkliche Lösung ist, ist eine andere Frage.`, status: 'paraphrase', note: 'Mackie hielt die Free Will Defense dennoch für gescheitert – das Zugeständnis betrifft nur die logische Unvereinbarkeit.' },
      { kind: 'gegner', author: 'William L. Rowe', work: 'The Problem of Evil and Some Varieties of Atheism', ref: 'American Philosophical Quarterly 16, Anm. 1', year: '1979', quote: `Manche Philosophen haben behauptet, die Existenz des Übels sei logisch unvereinbar mit dem theistischen Gott; niemand hat diese extravagante These, soweit ich sehe, erfolgreich begründet.`, status: 'paraphrase', note: 'Rowe war Atheist – sein Urteil wiegt daher schwer.' },
    ],
  },
  quickAnswer: `Wer sagt, Gott und Übel seien *logisch unvereinbar*, muss zeigen, dass Gott keinen denkbaren Grund haben kann, Übel zuzulassen. Es gibt aber einen naheliegenden: Freiheit. Liebe ist nur möglich, wo man auch nicht lieben kann – und selbst ein allmächtiger Gott kann niemanden *zwingen*, frei zu lieben. Das hat Alvin Plantinga so sauber gezeigt, dass selbst der Atheist J. L. Mackie zugab: Ein logischer Widerspruch ist nicht nachgewiesen. Aber ich weiß: Wer leidet, braucht zuerst nicht Logik, sondern jemanden, der bei ihm bleibt. Der christliche Gott ist genau das – er hat selbst gelitten.`,
  keyPoints: [
    `**Zuerst Mitgefühl:** Leid ist kein Debattenthema, sondern eine Wunde. Wer leidet, braucht zuerst Nähe, Zuhören und Gebet – erst dann, wenn überhaupt, Argumente (vgl. Hiobs Freunde, die sieben Tage schwiegen, Hiob 2,13).`,
    `**Ein logischer Widerspruch verlangt viel:** Es genügt, einen *möglichen* Grund für Gottes Zulassen des Übels zu nennen, damit der Widerspruch fällt.`,
    `**Freiheit ist ein solcher Grund:** Liebe und moralisches Gutes setzen echte Freiheit voraus; Gott kann niemanden zwingen, *frei* das Gute zu wählen – das wäre ein Widerspruch in sich.`,
    `**Allmacht heißt nicht, Unsinn tun zu können:** Gott kann alles, was logisch möglich ist; „frei und zugleich erzwungen" ist kein Ding, sondern ein Nicht-Ding (C. S. Lewis).`,
    `**Mackies versteckte Prämisse ist falsch:** Ein Guter beseitigt nicht jedes Übel, soweit er kann – Eltern lassen Kinder stolpern, Chirurgen verursachen Schmerz. Gutes kann Übel um eines größeren Gutes willen zulassen.`,
    `**Die Fachwelt stimmt zu:** Mackie (1982) und Rowe (1979) räumten ein, dass die logische Unvereinbarkeit nicht bewiesen ist.`,
    `**Die koptische Antwort geht tiefer:** Das Böse ist ein Mangel, kein Geschöpf Gottes; und Gott selbst hat im Fleisch gelitten (Kyrill, 12. Anathematismus). Er hat das Leid nicht wegerklärt, sondern getragen und besiegt.`,
  ],
  argument: {
    name: 'Die Free Will Defense (Alvin Plantinga)',
    summary: 'Ein Konsistenzbeweis: Es ist möglich, dass ein allmächtiger, vollkommen guter Gott existiert und es dennoch moralisches Übel gibt.',
    premises: [
      {
        text: `P1: Eine Welt mit Geschöpfen, die frei und bedeutsam das Gute wählen können, ist (möglicherweise) wertvoller als eine Welt ohne solche Geschöpfe.`,
        support: `Liebe, Treue, Mut, Vergebung sind nur unter Bedingungen echter Freiheit möglich. Auch der Gegner behandelt Menschen im Alltag als freie, verantwortliche Personen und nicht als Automaten. Für die Free Will Defense genügt, dass dies *möglich* ist.`,
      },
      {
        text: `P2: Gott kann nicht bewirken, dass ein Geschöpf *frei* das Gute tut; wenn er die Handlung festlegt, ist sie nicht mehr frei.`,
        support: `Das ist keine Einschränkung der Allmacht, sondern Logik: „frei gewählt" und „von außen festgelegt" schließen sich aus. Allmacht umfasst nach klassischer Lehre alles, was logisch möglich ist, nicht Widersprüche (Thomas von Aquin; C. S. Lewis).`,
        sources: [
          { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain (Über den Schmerz)', ref: 'Kap. 2', year: '1940', quote: `Sinnlose Wortverbindungen erhalten nicht plötzlich einen Sinn, nur weil wir ihnen die beiden Worte „Gott kann" voranstellen.`, original: `… meaningless combinations of words do not suddenly acquire meaning simply because we prefix to them the two other words 'God can'.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        ],
      },
      {
        text: `P3: Es ist möglich, dass jedes freie Geschöpf, das Gott erschaffen könnte, in mindestens einer Situation frei das Böse wählen würde („transweltliche Verderbtheit").`,
        support: `Ob ein freies Geschöpf in einer Situation gut oder böse wählt, hängt vom Geschöpf ab, nicht von Gott – sonst wäre es nicht frei. Es ist daher nicht auszuschließen, dass es für Gott keine erschaffbare Welt mit freien Geschöpfen ohne jedes Übel gibt. Für den Konsistenzbeweis genügt diese Möglichkeit.`,
      },
      {
        text: `P4: Also ist es möglich, dass Gott keine Welt mit moralisch Gutem, aber ohne jedes moralische Übel erschaffen konnte – und dass er eine Welt mit Freiheit trotz des Übels für besser hielt als eine Welt ohne Freiheit.`,
        support: `Folgt aus P1–P3. Plantinga betont: Das ist eine *Verteidigung* (Defense), keine Theodizee – sie behauptet nicht, Gottes tatsächliche Gründe zu kennen, sondern zeigt nur, dass es mögliche Gründe gibt.`,
      },
    ],
    inferences: [
      `Wenn P1–P4 möglich sind, ist die Satzgruppe „Gott ist allmächtig, Gott ist vollkommen gut, es gibt Übel" widerspruchsfrei.`,
      `Mackies Zusatzprämisse „Ein Guter beseitigt Übel, soweit er kann" ist damit widerlegt: Ein Guter kann Übel zulassen, wenn dessen Verhinderung ein größeres Gut (freie Liebe) unmöglich machen würde.`,
    ],
    conclusion: `Das logische Problem des Übels ist gelöst: Es gibt keinen nachgewiesenen Widerspruch zwischen Gott und dem Übel. Offen bleiben das evidentielle Problem (Wahrscheinlichkeit) und das existenzielle Problem (Schmerz) – beide verlangen andere Antworten.`,
  },
  voices: [
    {
      person: 'plantinga',
      role: 'als Logiker und Begründer der Free Will Defense',
      text: `Alvin Plantinga unterscheidet sorgfältig zwischen einer *Theodizee* (die Gottes tatsächliche Gründe nennen will) und einer *Verteidigung* (die nur zeigt, dass es mögliche Gründe gibt). Gegen den Vorwurf des logischen Widerspruchs genügt eine Verteidigung. In *God, Freedom, and Evil* (1974) argumentiert er mit modallogischen Mitteln: Gott kann nicht jede mögliche Welt verwirklichen, weil die freien Entscheidungen der Geschöpfe nicht von ihm festgelegt sind. Es ist möglich, dass jedes Geschöpf, das Gott schaffen könnte, an irgendeiner Stelle frei Böses wählen würde. Dann konnte Gott keine Welt mit Freiheit und ohne Übel schaffen. Plantinga erweitert die Verteidigung auch auf natürliche Übel: Es ist zumindest möglich, dass sie auf das Wirken gefallener, nichtmenschlicher Geschöpfe zurückgehen – eine Vorstellung, die der patristischen Tradition nicht fremd ist.`,
      sources: [
        { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God, Freedom, and Evil', year: '1974', quote: `Eine Welt mit frei handelnden Geschöpfen, die mehr Gutes als Böses tun, ist wertvoller als eine Welt ohne freie Geschöpfe; Gott kann solche Geschöpfe schaffen, aber nicht bewirken, dass sie nur das Rechte tun.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'augustinus',
      role: 'als Philosoph des Bösen als Mangel',
      text: `Augustinus, der als junger Mann bei den Manichäern eine eigene böse Urmacht annahm, fand die Lösung in der Einsicht, dass das Böse keine Substanz ist, sondern ein Mangel an Gutem (*privatio boni*) – wie Krankheit ein Mangel an Gesundheit ist. Gott hat alles gut geschaffen; das Böse entsteht, wenn der freie Wille sich vom höheren Gut abwendet. Im *Enchiridion* fasst er zusammen: Gott hielt es für besser, aus Bösem Gutes zu wirken, als überhaupt kein Böses zuzulassen. Er wäre nicht allmächtig und gut, wenn er nicht auch aus dem Bösen Gutes machen könnte. Hinweis: In der Philosophie des Bösen ist Augustinus unverzichtbar; seine späteren Akzente zur Erbschuld und Prädestination teilt die orthodoxe Tradition nicht.`,
      sources: [
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Enchiridion', ref: '27 (8)', year: 'um 421', quote: `Denn er hielt es für besser, aus Bösem Gutes zu wirken, als überhaupt kein Böses zuzulassen.`, original: `Melius enim iudicavit de malis bene facere, quam mala nulla esse permittere.`, translation: 'eigene Übersetzung', status: 'verbatim' },
        { kind: 'kirchenvater', author: 'Augustinus von Hippo', work: 'Enchiridion', ref: '11 (3)', year: 'um 421', quote: `Der allmächtige Gott würde, da er höchst gut ist, in seinen Werken nichts Böses dulden, wenn er nicht so allmächtig und gut wäre, dass er auch aus dem Bösen Gutes machen kann.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'athanasius',
      role: 'als Theologe der Schöpfung und Erlösung',
      text: `Athanasius erklärt in *Contra Gentes* und *De Incarnatione*, dass Gott den Menschen gut und unvergänglich auf Teilhabe hin geschaffen hat. Das Böse und mit ihm der Tod kamen, als der Mensch sich vom Logos abwandte; seitdem fällt die Schöpfung zurück in das Nichts, aus dem sie kam. Für Athanasius wäre es Gottes „unwürdig" gewesen, sein Werk dem Verfall zu überlassen; deshalb wurde der Logos Mensch, nahm einen sterblichen Leib an, starb und stand auf, um den Tod von innen zu besiegen. Die Antwort auf das Böse ist für ihn nicht eine Erklärung, sondern eine Tat Gottes: die Menschwerdung.`,
      sources: [
        { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'De Incarnatione', ref: '6–9', year: 'ca. 318–335', quote: `Es wäre Gottes unwürdig gewesen, dass die vernünftigen Geschöpfe, die an seinem Logos Anteil hatten, verloren gingen; darum nahm der Logos einen Leib an, um den Tod zu vernichten.`, status: 'paraphrase' },
      ],
    },
    {
      person: 'kyrill-alexandrien',
      role: 'als Lehrer der einen fleischgewordenen Natur des Logos',
      text: `Kyrill von Alexandrien verteidigte gegen Nestorius, dass der, der am Kreuz litt, kein bloßer Mensch neben dem Logos war, sondern der Logos selbst in seinem eigenen Fleisch. Er spricht paradox vom „leidensunfähigen Leiden": Als Gott kann der Logos nicht leiden, aber er hat das Fleisch so sehr zu seinem eigenen gemacht, dass dessen Leiden *sein* Leiden ist. Für die Frage nach dem Übel bedeutet das: Der Gott, den der Leidende anklagt, steht nicht als unbeteiligter Zuschauer außerhalb des Schmerzes. Er ist hineingegangen – bis in den Tod am Kreuz. Darum steht der zwölfte Anathematismus im Zentrum der koptischen Antwort auf das Leid.`,
    },
    {
      person: 'cs-lewis',
      role: 'als Apologet, der selbst tief litt',
      text: `C. S. Lewis schrieb *The Problem of Pain* (1940) als Philosoph – und *A Grief Observed* (1961) als Witwer, der nach dem Krebstod seiner Frau Joy die Frage nach Gottes Güte von innen erlebte. Im ersten Buch zeigt er, dass Allmacht keine Widersprüche umfasst und dass eine Welt mit freien Geschöpfen eine stabile, gesetzmäßige Natur braucht, in der Handlungen Folgen haben – mit der Kehrseite, dass Feuer wärmt und verbrennt. Im zweiten Buch zeigt er, dass Argumente den Schmerz nicht nehmen. Beides zusammen ist die ehrliche christliche Antwort: Das Übel widerlegt Gott nicht – und es tut trotzdem weh.`,
      sources: [
        { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'The Problem of Pain', ref: 'Kap. 6', year: '1940', quote: `Gott flüstert in unseren Freuden, er spricht in unserem Gewissen, aber er ruft laut in unseren Schmerzen: Sie sind sein Megafon, um eine taube Welt aufzuwecken.`, original: `God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is His megaphone to rouse a deaf world.`, translation: 'eigene Übersetzung', status: 'verbatim', note: 'Vorsicht im seelsorglichen Gebrauch – dieser Satz kann Leidende verletzen, wenn er als Erklärung ihres Schmerzes gebraucht wird.' },
      ],
    },
  ],
  dialog: [
    {
      id: 'frei-und-immer-gut',
      objection: `Wenn es möglich ist, dass ein Mensch bei einer Gelegenheit frei das Gute wählt, dann ist es auch möglich, dass er es bei jeder Gelegenheit tut. Ein allmächtiger Gott hätte also Menschen erschaffen können, die stets frei das Gute wählen. Warum hat er es nicht getan?`,
      objectionBy: 'J. L. Mackie',
      targetsPremise: 3,
      answer: `Es gibt zwar *mögliche* Welten, in denen alle stets frei das Gute wählen. Aber ob Gott eine solche Welt *verwirklichen* kann, hängt davon ab, was die freien Geschöpfe tatsächlich wählen würden – und das legt nicht Gott fest, sonst wären sie nicht frei. Es ist möglich, dass jedes Geschöpf, das Gott erschaffen könnte, irgendwann frei das Böse wählen würde. Dann konnte Gott keine Welt mit Freiheit ohne Übel erschaffen.`,
      detail: `Das ist der Kern von Plantingas Antwort an Mackie. Mackie verwechselt zwei Dinge: dass eine Welt *möglich* ist und dass Gott sie *verwirklichen* kann. Eine Welt, in der Petrus frei Christus nicht verleugnet, ist möglich; aber wenn Petrus in der Situation frei verleugnen würde, kann Gott nicht bewirken, dass er frei *nicht* verleugnet. Gott kann die Umstände wählen, nicht die freie Antwort.`,
      questionsBack: [
        `Kann Gott bewirken, dass jemand *frei* etwas tut? Wenn er es bewirkt – ist es dann noch frei?`,
      ],
      followUps: [
        {
          id: 'mittleres-wissen-auswahl',
          objection: `Dann hätte Gott eben nur die Menschen erschaffen sollen, von denen er wusste, dass sie immer frei das Gute wählen würden.`,
          objectionBy: 'J. L. Mackie / Kritiker des Molinismus',
          targetsPremise: 3,
          answer: `Das setzt voraus, dass es solche Menschen unter den erschaffbaren überhaupt gibt. Genau das bestreitet die Free Will Defense nicht als Tatsache, sondern als Gewissheit: Es ist *möglich*, dass jedes mögliche freie Geschöpf in irgendeiner Situation fallen würde. Und für die Widerlegung eines logischen Widerspruchs genügt diese Möglichkeit.`,
          detail: `Plantinga nennt das „transweltliche Verderbtheit": eine Eigenschaft, die – möglicherweise – alle erschaffbaren Personen haben. Die Bibel zeigt eine verwandte Beobachtung: „Sie sind allzumal Sünder" (Röm 3,23). Wichtig: Plantinga behauptet nicht, dass es *so ist*, sondern nur, dass es widerspruchsfrei so sein *könnte*.`,
          followUps: [
            {
              id: 'transweltlich-unplausibel',
              objection: `„Transweltliche Verderbtheit" ist eine absurde Ad-hoc-Hypothese. Warum sollte jedes mögliche Geschöpf irgendwann fallen? Das ist völlig unplausibel.`,
              objectionBy: 'Atheistischer Religionsphilosoph',
              targetsPremise: 3,
              answer: `Für das *logische* Problem spielt Plausibilität keine Rolle – du hast einen Widerspruch behauptet, und den widerlegt man mit einer bloßen Möglichkeit. Ob die Erklärung auch wahrscheinlich ist, ist eine andere Frage – das ist das evidentielle Problem, über das wir gern sprechen können. Aber dann geben wir beide zu: Ein logischer Widerspruch liegt nicht vor.`,
              detail: `Genau deshalb hat sich die Fachdiskussion nach Plantinga auf das evidentielle Problem (Rowe, Draper) verlagert. Wer heute noch „logisch unvereinbar" sagt, steht hinter dem Stand der Debatte zurück – selbst Mackie hat das eingeräumt.`,
              followUps: [
                {
                  id: 'himmel-ohne-suende',
                  objection: `Ihr glaubt doch selbst, dass die Erlösten im Himmel frei sind und nie mehr sündigen. Also kann Gott freie Wesen schaffen, die nie sündigen. Warum dann nicht gleich so?`,
                  objectionBy: 'Atheistischer Religionsphilosoph (häufiger Einwand)',
                  answer: `Die Freiheit des Himmels ist nicht der Anfang, sondern die Frucht eines Weges. Die Heiligen sündigen dort nicht, weil ihre Liebe durch eine Geschichte freier Entscheidungen, durch Gnade und durch die Vereinigung mit Christus vollendet wurde – so wie ein Mensch, der ein Leben lang treu geliebt hat, seinen Ehepartner nicht mehr betrügen *will*. Diese gereifte Freiheit kann man nicht am ersten Tag schenken, ohne den Weg zu überspringen, der sie hervorbringt.`,
                  detail: `Irenäus beschreibt genau dieses Wachstum: Der Mensch wurde wie ein Kind geschaffen, um zur Vollendung heranzureifen (Adv. Haer. IV,38). Die Väter sprechen von der Freiheit der Heiligen als Teilhabe an Gottes eigener Freiheit, der das Böse nicht aus Zwang, sondern aus Fülle der Liebe nicht will. Das ist keine Ausflucht, sondern eine Unterscheidung zwischen *anfänglicher* Wahlfreiheit und *vollendeter* Freiheit. Ehrlich: Hier berührt man ein Geheimnis, aber keinen Widerspruch.`,
                  sources: [
                    { kind: 'kirchenvater', author: 'Irenäus von Lyon', work: 'Adversus Haereses', ref: 'IV,38,3', year: 'um 180', quote: `Der Mensch musste erst entstehen, dann wachsen, dann reifen, dann sich mehren, dann erstarken und dann verherrlicht werden, um schließlich seinen Herrn zu schauen.`, status: 'paraphrase' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'allmacht-kann-alles',
      objection: `Allmächtig heißt, Gott kann alles. Er könnte also auch Wesen erschaffen, die frei sind und trotzdem garantiert nur das Gute tun. Wer hier Grenzen zieht, glaubt nicht an einen allmächtigen Gott.`,
      objectionBy: 'Populärer Einwand',
      targetsPremise: 2,
      answer: `Allmacht bedeutet, alles tun zu können, was überhaupt *etwas* ist – nicht Unsinn. Gott kann keinen viereckigen Kreis schaffen, nicht weil seine Macht zu klein wäre, sondern weil „viereckiger Kreis" nichts bezeichnet. „Frei gewählt, aber von Gott festgelegt" ist genauso ein Widerspruch. C. S. Lewis: Sinnlose Wortverbindungen werden nicht dadurch sinnvoll, dass man „Gott kann" davorsetzt.`,
      detail: `So lehren es die Väter und die klassische Theologie (Thomas von Aquin, Summa theologiae I q. 25 a. 3): Gottes Macht erstreckt sich auf alles Mögliche; das Unmögliche ist keine „Sache", die ihm verwehrt wäre. Die Bibel selbst kennt Dinge, die Gott „nicht kann": lügen (Tit 1,2; Hebr 6,18), sich selbst verleugnen (2 Tim 2,13). Das sind keine Grenzen seiner Macht, sondern Ausdruck seines Wesens.`,
      sources: [
        { kind: 'bibel', work: '2. Timotheus', ref: '2,13', quote: `Glauben wir nicht, so bleibt er treu; er kann sich selbst nicht leugnen.`, translation: 'Luther 1912', status: 'verbatim' },
      ],
      followUps: [
        {
          id: 'warum-freiheit-so-wertvoll',
          objection: `Dann hätte Gott eben auf Freiheit verzichten sollen. Lieber glückliche Roboter als eine Welt mit Kriegen, Folter und Völkermord. Keine Freiheit ist diesen Preis wert.`,
          objectionBy: 'Säkularer Kritiker',
          targetsPremise: 1,
          answer: `Eine Welt von Robotern hätte kein Leid, aber auch keine Liebe, keine Treue, keine Vergebung, keine Personen – nur Mechanik. Fast alle Eltern entscheiden sich, Kinder zu bekommen, obwohl sie wissen, dass diese Kinder leiden und auch Böses tun werden. Warum? Weil Personen, die lieben können, einen Wert haben, den kein Automat hat. Gott hat diese Wahl getroffen – und er hat den Preis selbst mitgetragen, am Kreuz.`,
          detail: `Für die Free Will Defense genügt, dass eine Welt mit Freiheit *möglicherweise* wertvoller ist. Aber auch inhaltlich ist der Gedanke stark: Liebe, die nicht abgelehnt werden kann, ist keine Liebe. Die koptische Tradition fügt hinzu, dass der Mensch zur Vergöttlichung berufen ist – zu einer Gemeinschaft mit Gott, die nur in Freiheit möglich ist.`,
          followUps: [
            {
              id: 'freiheit-nicht-auschwitz-wert',
              objection: `Dann soll Gott wenigstens eingreifen, wenn die Freiheit missbraucht wird. Eltern lassen ihre Kinder auch frei – aber sie greifen ein, wenn eines das andere ersticht. Ein Gott, der bei Auschwitz zusieht, ist kein guter Vater.`,
              objectionBy: 'Bart Ehrman (God\'s Problem, 2008)',
              answer: `Das ist der Punkt, an dem die Logik an ihre Grenze kommt und das Herz spricht – und das Herz hat recht, zu schreien. Zwei Dinge kann ich sagen: Erstens, wenn Gott jede schlimme Tat verhinderte, gäbe es keine wirkliche Verantwortung mehr; Entscheidungen hätten keine Folgen, die Welt wäre ein Puppentheater. Zweitens, wir wissen nicht, wie oft Gott tatsächlich eingreift und Böses verhindert – wir sehen nur, was geschieht. Und Gott hat nicht zugesehen: Er ist selbst in die Hände von Folterern gefallen und hat Gericht und Auferstehung verheißen.`,
              detail: `Richard Swinburne betont, dass moralische Verantwortung nur in einer Welt möglich ist, in der Handlungen ernste Folgen haben können. Zugleich ist dies kein Thema, das man „abhandeln" darf. Auschwitz ist kein Beispiel, an dem man Theodizeen ausprobiert, sondern ein Ort, an dem man zuerst schweigt. Elie Wiesels *Die Nacht* sollte man kennen, bevor man über Auschwitz und Gott spricht (siehe den Claim zum Kinderleid).`,
              followUps: [
                {
                  id: 'zuschauen-ist-mittaeterschaft',
                  objection: `Ein Mensch, der einen Mord verhindern könnte und es nicht tut, ist mitschuldig. Warum gilt das nicht für Gott?`,
                  objectionBy: 'Säkularer Ethiker',
                  answer: `Weil Gottes Lage sich von der eines menschlichen Zuschauers grundlegend unterscheidet. Ein Mensch kann den Schaden eines Opfers nicht wiedergutmachen; Gott kann es – durch Auferstehung, Gericht und ewiges Leben. Ein Mensch überblickt nicht die Folgen; Gott überblickt die ganze Geschichte. Und ein Mensch hat nicht die Aufgabe, eine Welt freier Personen zu tragen. Gott ist nicht ein mächtiger Nachbar, sondern der Schöpfer, der am Ende jedes Unrecht richten und jede Wunde heilen wird.`,
                  detail: `Die Philosophin Marilyn McCord Adams hat betont, dass Gottes Güte verlangt, dass er schreckliche Übel im Leben *jedes einzelnen Opfers* überwindet – nicht nur „im Großen und Ganzen". Das ist ein wichtiger Maßstab: Christen behaupten nicht, das Opfer werde für ein höheres Ziel geopfert, sondern dass Gott ihm selbst ein Leben schenken wird, in dem das Erlittene nicht das letzte Wort hat (Offb 21,4). Ehrlich: Wie das geschieht, wissen wir nicht im Einzelnen.`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'natuerliche-uebel-ohne-taeter',
      objection: `Die Free-Will-Verteidigung erklärt höchstens das Böse, das Menschen tun. Aber Erdbeben, Krebs und Seuchen hat niemand frei gewählt. Dafür ist allein der Schöpfer verantwortlich.`,
      objectionBy: 'J. L. Mackie / William Rowe',
      answer: `Für das *logische* Problem genügt wieder eine mögliche Erklärung. Erstens: Eine Welt, in der freie Wesen verantwortlich handeln können, braucht stabile Naturgesetze – dieselben Gesetze, die Feuer wärmen lassen, lassen es auch verbrennen. Zweitens: Die christliche Tradition kennt auch einen Fall der geistigen Schöpfung vor dem Menschen und eine Schöpfung, die „der Vergänglichkeit unterworfen" ist (Röm 8,20). Beides ist widerspruchsfrei möglich. Ausführlicher im Claim zu den natürlichen Übeln.`,
      detail: `Plantinga hat die Free Will Defense ausdrücklich auf natürliche Übel ausgeweitet: Es ist möglich, dass sie auf freie, nichtmenschliche Geschöpfe zurückgehen. Swinburne und Lewis argumentieren zusätzlich mit der Notwendigkeit einer verlässlichen Natur, in der Handlungen vorhersehbare Folgen haben. Für das *evidentielle* Problem ist die Frage schwieriger – siehe die Claims zu natürlichen Übeln und Tierleid.`,
      followUps: [
        {
          id: 'gefallene-engel-absurd',
          objection: `Gefallene Engel, die Erdbeben verursachen? Das ist doch lächerliche Mythologie.`,
          objectionBy: 'Säkularer Kritiker',
          answer: `Für den Nachweis der Widerspruchsfreiheit genügt eine Möglichkeit, auch wenn sie dir fremd vorkommt. Innerhalb des christlichen Weltbilds ist sie nicht absurd: Die Schrift spricht von geistigen Mächten (Eph 6,12). Aber ich bin auf diese Erklärung nicht angewiesen – die Notwendigkeit einer gesetzmäßigen Natur reicht für das logische Problem schon aus.`,
          detail: `Klug ist hier, nicht zu viel auf eine einzelne Hypothese zu setzen. Mehrere unabhängige Erklärungsmöglichkeiten zeigen, dass das logische Argument scheitert, ohne dass man jede einzelne verteidigen muss.`,
        },
        {
          id: 'tiere-auch',
          objection: `Und die Tiere? Sie leiden seit Jahrmillionen, lange vor jedem Menschen, ohne Schuld und ohne Freiheit.`,
          objectionBy: 'Charles Darwin / Richard Dawkins',
          answer: `Das ist für mich die schwerste Form der Frage, und ich will sie nicht kleinreden. Für das logische Problem gilt auch hier: Es gibt mögliche Gründe – eine gesetzmäßige Natur, die Funktion des Schmerzes als Warnsignal, die Hoffnung der ganzen Schöpfung auf Befreiung (Röm 8,21). Ausführlich im Claim zum Tierleid.`,
          detail: `Ehrlichkeit an dieser Stelle stärkt die Glaubwürdigkeit. Siehe den Claim „Jahrmillionen Tierleid vor dem Menschen widerlegen einen guten Schöpfer".`,
        },
      ],
    },
    {
      id: 'guter-beseitigt-uebel',
      objection: `Ein Guter beseitigt das Übel, soweit er kann. Das ist doch selbstverständlich. Wenn Gott allmächtig ist, kann er alles beseitigen – also müsste es kein Übel geben.`,
      objectionBy: 'J. L. Mackie (Zusatzprämisse)',
      answer: `Diese Prämisse ist falsch, und wir alle wissen es. Gute Eltern lassen ihr Kind stolpern, damit es laufen lernt. Ein guter Chirurg schneidet – und verursacht Schmerz, um zu heilen. Ein guter Lehrer lässt den Schüler Fehler machen. Ein Guter beseitigt Übel, *es sei denn*, er hat einen hinreichenden Grund, es zuzulassen. Und schon Augustinus sagte: Gott hielt es für besser, aus Bösem Gutes zu wirken, als überhaupt kein Böses zuzulassen.`,
      detail: `Mackies Argument braucht diese Zusatzprämisse, weil die drei Sätze („allmächtig", „gut", „es gibt Übel") für sich genommen keinen Widerspruch ergeben. Sobald man die Prämisse korrigiert („… es sei denn, er hat einen moralisch hinreichenden Grund"), fällt der Widerspruch. Der Kritiker müsste dann zeigen, dass Gott unmöglich einen solchen Grund haben *kann* – und das ist eine viel schwerere Last.`,
      questionsBack: [
        `Ist ein Chirurg böse, weil er Schmerzen verursacht? Ist ein Vater böse, weil er sein Kind beim Laufenlernen fallen lässt?`,
        `Kannst du zeigen, dass Gott *unmöglich* einen guten Grund haben kann, Übel zuzulassen?`,
      ],
      followUps: [
        {
          id: 'groesseres-gut-zynisch',
          objection: `„Größeres Gut" – sag das einem vergewaltigten Kind! Diese Rechnung ist zynisch und menschenverachtend.`,
          objectionBy: 'Bart Ehrman / Christopher Hitchens',
          answer: `Du hast recht: Das darf man so nie sagen, und schon gar nicht zu einem Opfer. Die christliche Aussage ist auch nicht, dass das Böse gut sei oder ein Kind als Mittel für einen Zweck benutzt werde. Sie lautet: Gott lässt dem Bösen nicht das letzte Wort; er wird das Opfer selbst heilen und den Täter richten. Philosophische Argumente sind für die Frage „Ist Gott widerlegt?" da – nicht als Trostsprüche für Leidende. Dort gilt: Weinen mit den Weinenden (Röm 12,15).`,
          detail: `Hiobs Freunde sind das biblische Warnbeispiel: Sie haben richtig angefangen – „saßen mit ihm auf der Erde sieben Tage und sieben Nächte und redeten nichts mit ihm" (Hiob 2,13) –, und dann begannen sie, Gott mit Theorien zu verteidigen. Gott hat sie dafür getadelt. Siehe auch den Claim „Das Leid unschuldiger Kinder ist durch nichts zu rechtfertigen".`,
          sources: [
            { kind: 'bibel', work: 'Hiob', ref: '2,13', quote: `… und saßen mit ihm auf der Erde sieben Tage und sieben Nächte und redeten nichts mit ihm; denn sie sahen, daß der Schmerz sehr groß war.`, translation: 'Luther 1912', status: 'verbatim' },
            { kind: 'bibel', work: 'Römer', ref: '12,15', quote: `Freuet euch mit den Fröhlichen und weinet mit den Weinenden.`, translation: 'Luther 1912', status: 'verbatim' },
          ],
          followUps: [
            {
              id: 'opfer-als-mittel',
              objection: `Wenn Gott Leid zulässt, um damit ein höheres Ziel zu erreichen, dann benutzt er die Leidenden als Mittel – das ist moralisch verwerflich.`,
              objectionBy: 'Kantianischer Einwand',
              answer: `Das wäre verwerflich, wenn Gott das Opfer *nur* für andere benutzte. Christliche Philosophinnen wie Eleonore Stump und Marilyn McCord Adams betonen deshalb: Ein guter Gott muss jedem Leidenden selbst zum Guten wirken, im Leben dieses Menschen, nicht nur im Ganzen der Welt. Und der christliche Gott tut noch mehr: Er nimmt das Leiden selbst auf sich. Der Gekreuzigte ist nicht der Regisseur hinter der Bühne, sondern das erste Opfer auf der Bühne.`,
              detail: `Stump (*Wandering in Darkness*, 2010) entwickelt die Bedingung, dass Leid dem Leidenden selbst zur tieferen Gemeinschaft mit Gott dienen muss. Adams (*Horrendous Evils and the Goodness of God*, 1999) spricht davon, dass Gott schreckliche Übel im Leben jedes Betroffenen „besiegt", vor allem durch die Gemeinschaft mit dem leidenden Christus. Hinweis: Adams vertrat einen Universalismus, den die koptische Kirche nicht teilt.`,
            },
          ],
        },
      ],
    },
    {
      id: 'mackie-gab-nie-zu',
      objection: `Dass Mackie eingeknickt sei, ist ein apologetisches Märchen. Er hat bis zuletzt die Free-Will-Verteidigung abgelehnt.`,
      objectionBy: 'Gut informierter Atheist',
      answer: `Richtig ist: Mackie hielt die Free Will Defense nie für eine befriedigende Lösung. Aber er räumte in *The Miracle of Theism* (1982) ein, dass das Problem des Übels nicht zeigt, dass die zentralen Lehren des Theismus logisch unvereinbar sind. Genau das – und nur das – behaupte ich. Auch William Rowe schrieb 1979, niemand habe die logische Unvereinbarkeit erfolgreich begründet.`,
      detail: `Präzision zahlt sich aus: Wer Mackie übertreibt („Mackie hat Plantinga recht gegeben, dass das Übel kein Problem ist"), wird von einem gut informierten Gegner sofort korrigiert. Das korrekte Zugeständnis ist eng, aber entscheidend: Ein logischer Widerspruch ist nicht nachgewiesen.`,
      followUps: [
        {
          id: 'dann-evidentiell',
          objection: `Gut, dann vergessen wir den logischen Widerspruch. Aber die schiere Menge sinnlosen Leids macht Gott immer noch extrem unwahrscheinlich.`,
          objectionBy: 'William Rowe',
          answer: `Das ist die stärkere Form des Arguments, und sie verdient eine ernsthafte Antwort. Kurz: Dass wir für ein bestimmtes Leid keinen Grund sehen, heißt nicht, dass es keinen gibt; und die Wahrscheinlichkeit von Gott hängt nicht nur am Übel, sondern an allen Belegen. Ausführlich im Claim zum evidentiellen Problem.`,
          detail: `Siehe den Claim „Das Ausmaß sinnlosen Leids macht Gott unwahrscheinlich (Rowe)".`,
        },
      ],
    },
  ],
  questionsToAsk: [
    `Kann Gott bewirken, dass jemand *frei* liebt? Wenn er es erzwingt – ist es dann noch Liebe?`,
    `Ist jeder, der Schmerz zulässt oder verursacht, böse – auch ein Chirurg oder ein Vater, der sein Kind laufen lernen lässt?`,
    `Kannst du zeigen, dass Gott *unmöglich* einen guten Grund haben kann, Übel zuzulassen?`,
    `Wenn es keinen Gott gibt – ist das Böse dann wirklich böse, oder nur etwas, das uns nicht gefällt?`,
    `Was würdest du von einem Gott erwarten, der dem Leid nicht ausweicht, sondern selbst hineingeht?`,
  ],
  avoid: [
    `Einem Leidenden mit Argumenten kommen, bevor man ihm zugehört hat – das ist Hiobs-Freunde-Seelsorge, die Gott selbst getadelt hat.`,
    `„Das Leid ist eine Strafe für deine Sünden." – Jesus weist das ausdrücklich zurück (Lk 13,1–5; Joh 9,3).`,
    `„Mackie hat zugegeben, dass das Übel kein Argument gegen Gott ist." – Übertrieben; er hat nur die logische Unvereinbarkeit fallen gelassen.`,
    `„Epikur hat gesagt …" ohne den Hinweis, dass das Trilemma nur bei Laktanz überliefert ist – ein gut informierter Gegner korrigiert das sofort.`,
  ],
  concessions: [
    `Kein Argument nimmt dem Leid seinen Schmerz; die Free Will Defense beantwortet die logische, nicht die existenzielle Frage.`,
    `Die Free Will Defense zeigt mögliche, nicht die tatsächlichen Gründe Gottes; vieles am Leid bleibt uns verborgen.`,
    `Das Übel ist für viele Menschen der ehrlichste Grund, nicht zu glauben – das verdient Respekt, keinen Spott.`,
  ],
  furtherReading: [
    { kind: 'fachliteratur', author: 'Alvin Plantinga', work: 'God, Freedom, and Evil', year: '1974', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'C. S. Lewis', work: 'Über den Schmerz (The Problem of Pain); Über die Trauer (A Grief Observed)', year: '1940/1961', status: 'paraphrase' },
    { kind: 'kirchenvater', author: 'Athanasius von Alexandrien', work: 'Contra Gentes – De Incarnatione', year: 'ca. 335', status: 'paraphrase' },
    { kind: 'fachliteratur', author: 'Timothy Keller', work: 'Walking with God through Pain and Suffering', year: '2013', status: 'paraphrase' },
    { kind: 'gegner', author: 'J. L. Mackie', work: 'The Miracle of Theism', year: '1982', status: 'paraphrase' },
  ],
  difficulty: 2,
  tags: ['Theodizee', 'Problem des Übels', 'Epikur', 'Mackie', 'Plantinga', 'Free Will Defense', 'Kyrill', 'Leid'],
  related: [
    'theodizee/evidentielles-problem',
    'theodizee/natuerliche-uebel',
    'theodizee/tierleid',
    'theodizee/kinderleid-karamasow',
    'willensfreiheit/freier-wille-illusion',
    'christologie-chalcedon',
    'hinduismus/reinkarnation-erklaert-leid',
  ],
};

export default claim;
